# Bokskjelett: ECON1210 Mikroøkonomi 1 — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alt av frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (16 ordinære sett V2018–H2025, 16 sensorveiledninger,
> 10 utsatt-sett, 6 utsatt-sensorveiledninger). Arketype: **DNA-regnefag**
> (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/øvingseksamen) er
> obligatoriske og gjentas ikke her. Alle mønstereksempler i skjelettet er
> omskrivninger; forfatteren skal variere dem videre, aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ1210` |
| Tittel | **ECON1210 Mikroøkonomi 1** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (grafisk-kvantitativt modellfag med fast oppgavemal) |
| Antall kapitler | **34** (1 eksamenskart + 28 tema/beredskap + 5 eksamenstrening) |
| Estimert totaltid | **2 370 min ≈ 39,5 timer** |
| Quiz totalt | **545** (krav ≥500) |
| Flashcards totalt | **505** (krav ≥500) |

**Pitch (ett avsnitt):** ECON1210-eksamen har fulgt samme mal i åtte år: korte
begrepsforklaringer (10–20 %), én stor oppgave om et marked med fullkommen
konkurranse som alltid bærer tyngden (50–60 %), og en tredje oppgave som roterer
mellom klimapolitikk og monopol/markedsmakt (30–40 %). Denne boka er kalibrert
mot nettopp det: den bygger hele apparatet rundt FK-markedsanalysen (likevekt →
elastisitet → kurveskift → skatt/subsidie med delingsformelen c/(b+c) →
velferdsvurdering → verbal «som samfunnsøkonom»-hale), driller subsidie-paradokset
som sensor bruker som karakterskille nesten hvert år, gir klimaoppgaven og
monopoloppgaven egne drillkapitler — og trener studenten i emnets viktigste
enkeltferdighet: å svare på «Forklar ved hjelp av en figur» med en korrekt,
fullt merket figur OG mekanismen i ord. Spillteori og nåverdi, som har vært
borte fra ordinær eksamen siden 2020/2021, holdes ved like på billigste måte i
en egen beredskapsdel.

**Kritisk modellregel (gjelder HELE boka):** Tilbudskurven bygges på
**CORE-anleggsmodellen** (*The Economy — Microeconomics* kap. 8.4, pensum fra
H2024): produksjonen skjer i anlegg med konstante enhetskostnader
(= marginalkostnader) og gitt kapasitet; markedets tilbudskurve fremkommer ved å
rangere anleggene etter enhetskostnad — høyere pris gjør flere anlegg lønnsomme.
Skift i T-kurven forklares alltid som endrede enhetskostnader (parallellskift)
eller endret antall anlegg. ALDRI bygg fremstillingen på Krugman & Wells'
produksjonsteori (gjennomsnittsproduktivitet, U-formede gjennomsnittskostnader);
den klassiske produsentteorien omtales kun som markert sekundærstoff
(«bør kjenne», collapsible) i kap. 1.2.

**Kritisk notasjonsregel (gjelder HELE boka):** Mengde $x$, pris $p$ (arbeidsmarked:
$N$ og $w$; konsumentteori: $x_1, x_2$ med $p_1, p_2$). Kurvene heter **E-kurven**
og **T-kurven** (aldri D/S). Overskudd: **KO, PO, SO**; marginalinntekt **MI**,
marginalkostnad **MK**. Lineære funksjoner alltid med mengde som funksjon av pris:
etterspørsel $x = a - bp$, tilbud $x = cp - d$ — aldri invers form. Skatt $t$,
subsidie $s$, fast kostnad $B$, konstant enhetskostnad $c$. Likevekt
$p^* = \frac{a+d}{b+c}$; kjøpers andel av skatt/subsidie $\frac{c}{b+c}$, selgers
andel $\frac{b}{b+c}$. Ingen derivasjon noe sted — alt løses med lineær algebra
og geometri (fasitene sier eksplisitt at derivering av MI ikke forventes).

**Kritisk sjangerregel (gjelder HELE boka):** «Forklar ved hjelp av en figur» er
hovedinstruksen i nesten alle deloppgaver. Alle eksempler og løsningsforslag i
boka skal derfor inneholde (i) en presis **figurbeskrivelse i ord** (pris
vertikalt, mengde horisontalt; kurver, gamle og nye likevekter, avstander og
arealer navngitt) og (ii) den **verbale mekanismen** — sensorveiledningene
understreker at figur uten forklaring eller forklaring uten figur er halvt svar.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden |
| 1 | Markedet: etterspørsel, tilbud og likevekt | 6 | FK-likevekt + kurveskift har **100 % frekvens** og åpner den store oppgaven (50–60 % av poengene); elastisitet 50 % og stigende; lekkasje-poenget fast siden H2024 → nivå 1 «perfekt» → 5 teorikapitler + drillkapittel. |
| 2 | Velferd: overskudd og effektivitet | 2 | Velferdsvurdering **100 % frekvens**; SO-definisjonen for vilkårlig mengde er gjentatt pluss-markør → nivå 1 → 2 kapitler som resten av boka gjenbruker. |
| 3 | Skatt, subsidie og prisregulering | 5 | Stykkskatt/-subsidie 94 % (tyngdepunktet, 15–30 % av settet); subsidie-paradokset er karakterskillet; prisregulering 38 % (alle makspris-casene 2022+); «som samfunnsøkonom»-halen 31 % og fast i nyere sett → nivå 1 → 3 teorikapitler + drillkapittel + verbalkapittel. |
| 4 | Eksternaliteter, klima og markedssvikt | 4 | Klimaoppgaven er oppgave 3-klassikeren (63 % som stor oppgave, 81 % medregnet begreper; 25–40 % vekt); kollektivt gode fast begrepsgjenganger fra 2023; markedssvikt-katalogen gjenganger på utsatt → nivå 1 (klima) → 3 teorikapitler + drillkapittel. |
| 5 | Monopol og markedsmakt | 5 | Monopol 44 % ordinært + utsatt-eksamenens favoritt (30–40 % vekt når den kommer) → nivå 1 → 4 teorikapitler + drillkapittel. |
| 6 | Arbeidsmarked og internasjonal handel | 3 | Arbeidsmarked 31 % (25–50 % vekt når den kommer, fraværende 2024–25 — samme apparat som varemarkedet); handel 19 % + utsatt → nivå 2 → 3 kompakte kapitler. |
| 7 | Beredskap: konsumentteori, spill og nåverdi | 3 | Spillteori borte siden V2020, nåverdi siden V2021, konsumentteori nesten bare på utsatt (der 40 %-oppgaver!) — står i emnebeskrivelsen, kan ikke avskrives → nivå 3 → 3 kompakte kjenne-kapitler. |
| 8 | Eksamenstrening | 5 | Begrepsdrill (sjanger A, ~15 gjengangere, 10–20 % sikre poeng) + aktualitetstrening + 3 komplette øvingseksamener. |

**Avvik fra DNA-malen (dokumentert):** DNA-en legger sjangerkapitler i siste del.
Her ligger fire av fem drillkapitler (1.6 skiftanalyse, 3.4 skatt/subsidie,
4.4 klimaoppgaven, 5.5 monopoloppgaven) inne i temadelene sine, fordi sjangrene
er 94–100 %-gjengangere som må drilles umiddelbart etter teorien — Del 8 beholder
begrepsdrillen, aktualitetstreningen og øvingseksamenene. Videre får «som
samfunnsøkonom»-drøftingen (nivå 2) et eget kapittel i Del 3 fremfor i en egen
drøftingsdel, fordi den alltid opptrer som *hale* på den store FK-oppgaven og
trenger skatte-/subsidieapparatet friskt.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–M) refererer
til oppgavetype-katalogen i denne bokas Del 0 (gjengitt der fra analysen §3):
A begrepsforklaringer, B markedslikevekt grafisk/algebraisk, C elastisitet med
tolkning, D kurveskift-batteri, E stykkskatt/-subsidie med deling, F velferds-
vurdering, G prisregulering, H klimapolitikk, I monopol/markedsmakt,
J arbeidsmarked, K markedssvikt-katalogen («begrunn inngrepet»), L «som
samfunnsøkonom»-drøfting, M dvale-sjangre (spillteori, nåverdi, konsumentteori,
handel). Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) /
**kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes ECON1210

- **id:** `econ1210-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste tredelingen, temafrekvensene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 16 ordinære sett + 10 utsatt. Skal gjengi: (i) formen: 4 timers digital skoleeksamen (Inspera, fritekst), karakter A–F, obligatorisk innlevering må være godkjent; (ii) den faste malen siden H2022: begreper 10–20 % + stor FK-markedsoppgave 50–60 % + klima-/markedsmakt-oppgave 30–40 %; fra H2024 nedvektes begrepene til 10 % og oppgave 3 opp til 30–40 % (vektingshistorikk: 20/50/30 standard 2018–2023, H2024 10/50/40, V2025 10/50/40, H2025 10/60/30; V2022-unntaket med 2 oppgaver 60/40); (iii) temafrekvens-tabellen: FK-likevekt + kurveskift 100 %, velferdsvurdering 100 %, stykkskatt/-subsidie 94 %, algebraisk likevekt 69 %, klima som stor oppgave 63 % (81 % med begreper), elastisitet 50 % og stigende (6 av 8 siste sett), algebraisk deling 50 %, monopol 44 % (+4 utsatt), prisregulering 38 % (alle makspris-casene 2022+), kollektivt gode 38 % (fast fra 2023), «som samfunnsøkonom» 31 %, arbeidsmarked 31 % (borte 2024–25), tilbudskutt med lekkasje-poeng 3 av 4 siste sett (ny fast sjanger), spillteori 25 % men **ingen siden V2020**, nåverdi 25 % men **ingen siden V2021**, konsumentteori 13 % ordinært men 4/10 utsatt; (iv) at oppgavene alltid er case-aktuelle (strømpriser, gasskrise, sabotasje, klimasøksmål) og at «Forklar ved hjelp av en figur» er hovedinstruksen; (v) sensorens metaregler: figur + forklaring er én leveranse; tall skal alltid tolkes med ord; rekkefølge-toleranse (svar som dekker en senere deloppgave godtas); valgfrihet respekteres (verbal eller grafisk der oppgaven åpner; skatt/subsidie på kjøper eller selger; begge definisjoner av kollektivt gode); undervisningsnærhet (seminaroppgave-terping er dokumentert effektivt); (vi) karakterskillene: bunnkrav = riktige kurver, skiftretninger og likevektsutregning; midtsjikt = komplett firetrinnsmetode, MI-dekomponering, karbonprising-argumentet; toppsjikt = SO for enhver mengde uten priser, algebraisk deling koblet til helningsforholdet, ubestemte totaleffekter, alternativkostnadsresonnementet, andreordens-poengene (lekkasjen, tredjeparter som tjener, gratiskvote-nyansen, rasjoneringstillegget).
- **Innholdskontrakt:** Oppgavetype-katalogen A–M presenteres som studentens sjekkliste med typisk vekt per sjanger: A begreper (10–20 %), B likevekt (10–15 %, billige poeng), C elastisitet (5 %, eller hel oppgave à la V2025), D kurveskift (10–20 %), E skatt/subsidie (15–30 %, tyngdepunktet), F velferd (10–15 %), G prisregulering (5–30 %), H klima (25–40 %), I monopol (30–40 %), J arbeidsmarked (25–50 %), K markedssvikt-katalog (20–40 %), L «som samfunnsøkonom» (5–10 %), M dvale (spill/nåverdi/konsument/handel). Prognosen for neste eksamen: oppgave 1 (10 %) to begreper fra gjengangerlisten; oppgave 2 (50–60 %) FK-marked med aktuell innramming — forutsetninger, algebraisk likevekt + elastisitet med tolkning, tilbudsskift med helningsdrøfting (sabotasje-/kuttvarianten i rotasjon), stykksubsidie eller -skatt med deling og utregning, SO-forklaring, verbal hale; oppgave 3 (30–40 %) klima *eller* monopol; utsatt eksamen har klart høyere sannsynlighet for monopol og konsumentteori. Avslutt med leseplan: Del 1–5 er «må perfekt», Del 6 + begrepene «må kunne», Del 7 «bør kjenne».
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt vektene 10/60/30 og 240 minutter — sett opp tidsbudsjett per deloppgave».
- **Typiske feil:** Metafeilene: bruke tid på figurløse forklaringer eller uforklarte figurer; prioritere oppgave 1 og 3 før 50–60 %-oppgaven; pugge Krugman & Wells-produsentteori som ikke lenger er pensumets tilbudsmodell.
- **Quiz: 10 · Flashcards: 10** (frekvenser, vekter, metaregler)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Markedet: etterspørsel, tilbud og likevekt *(prioritet: PERFEKT)*

#### Kapittel 1.1: Etterspørselskurven: betalingsvillighet og markedets etterspørsel

- **id:** `econ1210-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Hva E-kurven viser, hvorfor høyden er marginal betalingsvillighet, og hva som skifter den.
- **Eksamensbelegg:** «Markedets etterspørselskurve» er begrepsgjenganger (4 ordinære + 3 utsatt forekomster, sjanger A); E-kurven inngår i den store FK-oppgaven i **alle 16 sett** (sjanger B/D). Pluss-markør i fasitene: høyden på E-kurven er *marginal betalingsvillighet*; skift i kurven skilles eksplisitt fra bevegelse langs den. Prioritet: **perfekt**.
- **Innholdskontrakt:** Individuell etterspørsel fra betalingsvillighet (fallende: de høyeste betalingsvillighetene først); markedets E-kurve som **horisontal summering** av kjøpernes kurver; høyden ved en gitt mengde = marginal betalingsvillighet for siste enhet (brukes direkte i SO-geometrien i kap. 2.1); lineær form $x = a - bp$ med tolkning av $a$ (metningsmengde ved $p=0$) og $b$ (prisfølsomhet); skiftfaktorer: inntekt, preferanser/popularitet, pris på substitutter og komplementer, antall kjøpere; **skift vs. bevegelse langs kurven** som eget delkapittel med figurbeskrivelse (prisendring = bevegelse; alt annet = skift). Figur: fallende E-kurve i diagram med $p$ vertikalt, $x$ horisontalt — merkevanen etableres her.
- **Oppgavesjangre:** A + B-fundament. Mønstereksempel (A): «Gjør kort rede for hva markedets etterspørselskurve viser, hvordan den fremkommer fra kjøpernes betalingsvillighet, og gi ett eksempel på noe som skifter den.»
- **Typiske feil:** Forveksle skift med bevegelse langs kurven (fellen i H2025-utsatt 2c: «høy pris → etterspørselen faller → prisen må ned igjen»-sirkelen); si at E-kurven viser «hvor mye folk kjøper» uten betalingsvillighets-tolkningen av høyden; tegne uten å merke akser og kurve.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.2: Tilbudskurven: anleggsmodellen

- **id:** `econ1210-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Tilbudskurven bygget fra produksjonsanlegg med konstante enhetskostnader — pensummodellen fra H2024 som fasitene bruker aktivt.
- **Eksamensbelegg:** «Markedets tilbudskurve» er begrepsgjenganger (4 ordinære + 2 utsatt, sjanger A; omskrevet gjengangerformulering: hva kurven viser og hvilke forutsetninger som må være oppfylt for at den skal finnes); T-kurven inngår i alle 16 sett. **Lærebokskifte H2024:** fasitene bygger fra og med H2024 på CORE-anleggsmodellen (kap. 8.4) — sabotasje = lønnsomme anlegg ut (H2024, V2025, H2025 + 2025-utsatt), skift = endrede enhetskostnader. Pluss-markør: høyden på T-kurven er marginalkostnad. Prioritet: **perfekt**.
- **Innholdskontrakt:** Anleggsmodellen som primærmodell: hvert anlegg har konstant enhetskostnad (= marginalkostnad) og gitt kapasitet; et anlegg produserer for full kapasitet hvis $p \geq$ enhetskostnaden, ellers ingenting; markedets T-kurve fremkommer ved å **rangere anleggene etter enhetskostnad** (trappetrinn som glattes til stigende kurve i store markeder); høyden på T-kurven ved en mengde = enhetskostnaden i det dyreste anlegget i drift = marginalkostnad (alternativkostnaden av siste enhet); høyere pris → flere anlegg lønnsomme → større tilbudt mengde. Lineær form $x = cp - d$. Skiftlogikk i anleggsspråket: kostnadsendring på alle anlegg (lønn, energi, sikkerhetskrav) → parallellskift opp/ned; anlegg faller bort eller kommer til (sabotasje, nyetablering, utestengelse) → kurven inn/ut. Forutsetninger for at T-kurven finnes: selgerne er pristakere (mange små tilbydere, homogent gode). **Sekundærstoff (markert «bør kjenne», collapsible):** den klassiske produsentteorien (stigende MK for én bedrift, $p = $ MK bestemmer tilbudt kvantum, produksjon kan lønne seg tross negativ profitt ved ugjenkallelige faste kostnader) — brukt i fasiter t.o.m. H2023, kan dukke opp i eldre oppgaver studenten øver på.
- **Oppgavesjangre:** A + B/D-fundament. Mønstereksempel (A): «Forklar hva markedets tilbudskurve viser når produksjonen skjer i anlegg med ulike, men konstante enhetskostnader, og hvorfor kurven stiger.»
- **Typiske feil:** Utlede T-kurven fra U-formede gjennomsnittskostnader (feil pensummodell etter H2024); blande gjennomsnittskostnad og marginalkostnad; glemme pristaker-forutsetningen; tro at et anlegg produserer «litt» når prisen så vidt overstiger enhetskostnaden (det kjører for full kapasitet).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 1.3: Markedslikevekt: figur, algebra og figurspråket

- **id:** `econ1210-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ1210-1-1`, `econ1210-1-2`
- **Kapitteltype:** teori
- **description:** Likevekten grafisk og algebraisk, prisen som likevektsmekanisme — og malen for å svare på «Forklar ved hjelp av en figur».
- **Eksamensbelegg:** Sjanger B i **alle 16 sett** (algebraisk i 11 av dem, 69 %); forutsetningene (pristakere, homogent gode) eksplisitt spurt i H2025, H2024-utsatt og V2025-utsatt; 2 deloppgaver først i den store oppgaven (10–15 %) — analysen: «billige poeng som må sitte». Kalibrerte fasitverdier fra reelle sett (til oppgavekalibrering, ikke gjenbruk): $x = -10p + 1000$ mot $x = 20p - 800$ → $(p^*, x^*) = (60, 400)$; $x = 1500 - 6p$ mot $x = 2p - 100$ → $(200, 300)$; $x = 380 - 4p$ mot $x = p - 20$ → $(80, 60)$. Prioritet: **perfekt**.
- **Innholdskontrakt:** Forutsetningene for FK samlet: mange små aktører (pristakere) + homogent gode → E- og T-kurve finnes; likevekt der kurvene krysser; **prisen som likevektsmekanisme**: ved $p > p^*$ tilbudsoverskudd → prispress ned; ved $p < p^*$ etterspørselsoverskudd → prispress opp (skal kunne fortelles begge veier). Algebra: sett $a - bp = cp - d$, løs $p^* = \frac{a+d}{b+c}$, sett inn for $x^*$; kontrollregning i begge funksjoner. **Figurspråket (metodeavsnitt som resten av boka refererer til):** aksekonvensjon ($p$ vertikalt, $x$ horisontalt), kurver navngis E og T, likevekter markeres med bokstav og stiplede linjer til aksene, skift begrunnes i ord, arealer (fra Del 2) navngis — og hvert figursvar følges av mekanismen i ord, fordi sensor krever begge deler.
- **Oppgavesjangre:** B. Mønstereksempel: «Etterspørselen i markedet er $x = 900 - 3p$ og tilbudet $x = p - 100$. Gjør kort rede for hvilke forutsetninger som ligger bak kurvene, forklar ved hjelp av en figur hvordan likevekten oppstår, og beregn likevektspris og -mengde.» ($(p^*, x^*) = (250, 150)$.)
- **Typiske feil:** Figur uten merking av kurver og likevekt (feilkatalog #12); forklare likevekten som definisjon uten mekanismen (hva skjer ved pris over/under $p^*$); regnefeil ved innsetting (kontroller i begge funksjoner); glemme forutsetningene når det spørres eksplisitt.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 1.4: Elastisitet: beregning og verbal tolkning

- **id:** `econ1210-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ1210-1-3`
- **Kapitteltype:** teori
- **description:** Elastisitetsformelen i likevektspunktet — og tolkningen med ord som fasitene krever hver eneste gang.
- **Eksamensbelegg:** Sjanger C i 8/16 sett, **sterkt stigende** (6 av 8 siste sett); typisk 1 deloppgave (5 %), men V2025 bygde en hel 40 %-oppgave på verbal resonnering rundt oppgitte elastisiteter (−0,1 og 1,0 i oljemarkedet) uten regning. Kalibrerte fasitverdier: −3/2 (V2019), −8/3 (V2023), −1/2 (H2023), −4 og tilbudselastisitet 4/3 (H2024). Fasitene understreker verbal tolkning i hvert eneste sett der elastisitet spørres. Prioritet: **perfekt**.
- **Innholdskontrakt:** $\varepsilon = \frac{\Delta x}{\Delta p} \cdot \frac{p}{x}$ beregnet i likevektspunktet (for lineær etterspørsel: $\frac{\Delta x}{\Delta p} = -b$); **obligatorisk verbal tolkning**: «når prisen øker med én prosent, synker etterspurt mengde med $|\varepsilon|$ prosent»; tilbudselastisitet tilsvarende (med $+c$). Kvalitativ bro som V2025-varianten krever: lav $|\varepsilon|$ = bratt kurve = lite prisfølsom → et tilbudskutt gir stor priseffekt og liten mengdeeffekt; elastisk = slak = motsatt; **langsiktig elastisitet > kortsiktig** i tallverdi fordi substitutter finnes på lang sikt. Presiser skillet helning vs. elastisitet (elastisiteten varierer langs en lineær kurve). Forbered koblingen til delingsformelen (kap. 3.1): den minst prisfølsomme siden bærer mest.
- **Oppgavesjangre:** C. Mønstereksempler: «Beregn etterspørselselastisiteten i likevekten fra forrige deloppgave, og forklar med ord hva tallet betyr.» (regnevariant); «Etterspørselen etter naturgass har elastisitet −0,2 på kort sikt og −0,9 på lang sikt. Forklar uten regning hvorfor et bortfall av rørkapasitet gir kraftig prisøkning med en gang, og hvorfor utslaget dempes over tid.» (V2025-varianten).
- **Typiske feil:** Oppgi tallet uten verbal tolkning (feilkatalog #6 — gir ikke full uttelling); bruke feil punkt (elastisiteten skal tas i likevekten); blande helning og elastisitet; glemme fortegnet eller tolke fortegnet feil.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 1.5: Kurveskift-batteriet: komparativ statikk med helning og lekkasje

- **id:** `econ1210-1-5` · **number:** 1.5 · **estimatedMinutes:** 60 · **prerequisites:** `econ1210-1-3`
- **Kapitteltype:** teori
- **description:** Hendelseskatalogen som roterer i hvert sett: hvilken kurve, hvilken retning, ny likevekt, hvem tjener og taper — pluss helningsavhengighet, samtidige skift og lekkasje-poenget.
- **Eksamensbelegg:** Sjanger D i **alle 16 sett** (2–3 deloppgaver, 10–20 %). Stabil hendelseskatalog: økt/redusert etterspørsel (popularitet, inntekt, substituttpris), kostnadsøkning (lønn, smitteverntiltak, sikkerhetskrav), nyetablering (T ut, p ned — de etablerte taper), utestengelse/diskriminering/sabotasje (T inn, p opp — gjenværende selgere tjener, kjøperne taper). Faste fordypningskrav: **samtidige skift** gir ubestemt pris når retningene spriker (V2020: begge skift reduserer $x$, men $p$ kan gå begge veier); **helningsavhengighet** (brattere E → større prisutslag, mindre mengdeutslag). **Lekkasje-poenget — nytt fast kontrollpunkt fra H2024** (spurt H2024, V2025, H2025 + begge 2025-utsatt): når lønnsomme anlegg faller bort, synker omsatt mengde *mindre* enn bortfallet, fordi høyere pris gjør tidligere ulønnsomme anlegg lønnsomme. Prioritet: **perfekt**.
- **Innholdskontrakt:** For hver hendelse den faste firespørsmåls-malen: (i) hvilken kurve skifter og *hvorfor* (mekanismen bak skiftet teller mer enn selve skiftet — for T-skift: enhetskostnadene endres i alle anlegg, eller antall anlegg endres); (ii) retning; (iii) ny likevekt ($p$ og $x$, figur + eventuelt algebra); (iv) hvem tjener/taper — **inkludert tredjepartene** (etablerte selgere ved nyetablering, gjenværende selgere ved utestengelse/sabotasje). Helningsavhengigheten vises med to figurer (bratt vs. slak E) og kobles til elastisitet (kap. 1.4). Samtidige skift: dekomponer i to enkeltskift, konkluder om hva som er bestemt ($x$) og ubestemt ($p$) — toppkandidat-markør. Lekkasjen gjennomgås i anleggsspråket med figur: bortfallet måles horisontalt ved gammel pris, mengdefallet ved ny — differansen er anleggene som ble lønnsomme av prisøkningen.
- **Oppgavesjangre:** D. Mønstereksempel: «En eksplosjon setter en del av produksjonsanleggene i markedet ut av spill. Vis i en figur hva som skjer med pris og omsatt mengde, forklar hvorfor omsetningen faller mindre enn produksjonsbortfallet, og gjør rede for hvem som tjener på hendelsen.»
- **Typiske feil:** Skift forveksles med bevegelse langs kurven (feilkatalog #1); feil kurve eller retning (#2); glemme lekkasjen — anta at omsetningen faller like mye som bortfallet (#8); glemme tredjepartene (#11); behandle samtidige skift som ett skift og påstå bestemt prisretning.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 1.6: Drill: likevekt, skift og elastisitet

- **id:** `econ1210-1-6` · **number:** 1.6 · **estimatedMinutes:** 90 · **prerequisites:** `econ1210-1-4`, `econ1210-1-5`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på åpningen av den store FK-oppgaven: fra oppgitte funksjoner og en aktuell hendelse til fullført A-besvarelse med figur i ord.
- **Eksamensbelegg:** Dekker sjangrene B (100 %), C (50 %, stigende) og D (100 %) — sammen åpningen av oppgaven som utgjør 50–60 % av hver eksamen. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) forutsetningene (pristakere, homogent gode) hvis spurt; 2) tegn og merk figuren (E fallende, T stigende, likevekt A); 3) forklar likevektsmekanismen (over-/underskuddsargumentet); 4) algebra: $p^* = \frac{a+d}{b+c}$, sett inn for $x^*$, kontroller; 5) elastisitet i likevekten + verbal tolkning; 6) skiftanalyse med firespørsmåls-malen (kurve + begrunnelse, retning, ny likevekt B, vinnere/tapere inkl. tredjeparter); 7) helningsdrøfting og eventuelt lekkasje-poeng. Gjennomregnet eksamenscase med sensor-margnotater (hva som gir uttelling ved hvert steg — f.eks. at mekanismen bak skiftet honoreres mer enn pilen). 10–15 oppgaver på eksamensnivå som roterer hendelseskatalogen med nyskrevne case (ferjesamband som stenges, populær treningstrend, avlingssvikt, billigere innsatsvare, nyetablering av utenlandske tilbydere, utestengelse av en selgergruppe), alle med lineære funksjoner kalibrert til pene svar (f.eks. $x = 600 - 2p$ mot $x = 3p - 400$ → $(200, 200)$).
- **Oppgavesjangre:** B, C, D. Mønstereksempel (full deloppgave-kjede à la H2024/H2025): «(a) Hvilke forutsetninger ligger bak kurvene? (b) Forklar ved hjelp av en figur hvordan likevekten oppstår, og beregn den. (c) Beregn etterspørselselastisiteten i likevekten og tolk tallet. (d) En del av anleggene settes ut av drift — vis virkningen i figuren og forklar hvorfor omsetningen faller mindre enn bortfallet.»
- **Typiske feil:** Hele §5-repertoaret for åpningen samlet: skift/bevegelse (#1), feil retning (#2), tall uten tolkning (#6), glemt lekkasje (#8), glemte tredjeparter (#11), umerkede figurer (#12).
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (1.A begreper E-/T-kurve + forutsetninger, sjanger A; 1.B grafisk + algebraisk likevekt med elastisitet, sjanger B+C; 1.C skiftbatteri med helning og samtidige skift, sjanger D; 1.D full åpningskjede på eksamensnivå med lekkasje-poeng, sjanger B+C+D).

---

### Del 2 — Velferd: overskudd og effektivitet *(prioritet: PERFEKT)*

#### Kapittel 2.1: KO, PO og SO: velferdsgeometrien

- **id:** `econ1210-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ1210-1-3`
- **Kapitteltype:** teori
- **description:** Konsument-, produsent- og samfunnsøkonomisk overskudd som arealer — og SO-definisjonen som gir plusspoeng år etter år.
- **Eksamensbelegg:** Velferdsvurdering i **alle 16 sett** (sjanger F, 10–15 %); «samfunnsøkonomisk overskudd» som begrepsspørsmål 5 ordinære + 1 utsatt forekomster; konsumentoverskudd 3 utsatt. **Gjentatt pluss-markør i tre år på rad:** SO kan beregnes for et hvilket som helst kvantum uten å kjenne prisen. Prioritet: **perfekt**.
- **Innholdskontrakt:** Den robuste SO-definisjonen først: **SO for en gitt mengde = samlet betalingsvillighet minus samlede (alternativ)kostnader** = arealet mellom E- og T-kurven fra 0 til mengden — gjelder for *enhver* mengde, krever ingen priser; maksimeres der marginal betalingsvillighet = marginalkostnad (E krysser T). Deretter dekomponeringen som gjelder uten skatter/subsidier: KO = arealet mellom E-kurven og prisen (kjøpernes betalingsvillighet minus det de betaler); PO = arealet mellom prisen og T-kurven (inntekt minus alternativkostnad — i anleggsspråket: summen av differansene mellom pris og enhetskostnad i anleggene i drift); SO = KO + PO *kun* i fravær av skatt/subsidie/eksternaliteter (med skatt: + skatteinntekt; poenget bygges ut i Del 3). Figurgeometrien drilles verbalt: trekantarealer med lineære kurver, navngiving av arealene i figurbeskrivelser.
- **Oppgavesjangre:** A + F. Mønstereksempel (A): «Gjør rede for hva samfunnsøkonomisk overskudd er, og forklar hvorfor det kan beregnes for et hvilket som helst omsatt kvantum uten at man kjenner prisen.»
- **Typiske feil:** Definere SO som «KO + PO i likevekt» uten mer (feilkatalog #9 — bryter sammen med skatter/subsidier); glemme at PO måles mot alternativkostnaden (T-kurvens høyde), ikke null; arealer uten navngiving i figuren (#12).
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 2.2: Markedets effektivitet og de tre kriteriene

- **id:** `econ1210-2-2` · **number:** 2.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ1210-2-1`
- **Kapitteltype:** teori
- **description:** Hvorfor frikonkurranselikevekten maksimerer SO — og trekriterie-sjekklisten som gjenbrukes ved hvert inngrep.
- **Eksamensbelegg:** De tre effektivitetskriteriene brukes som fast sjekkliste i fasitene ved prisregulering (sjanger G: H2022, V2024, H2025) og som vurderingsramme i velferdsdeloppgavene (sjanger F, alle sett). Prioritet: **perfekt**.
- **Innholdskontrakt:** De tre effektivitetskriteriene i frikonkurranselikevekten: (i) **riktig mengde** — marginal betalingsvillighet = marginalkostnad; (ii) **produksjonen skjer i de billigste anleggene** — anlegg med enhetskostnad under prisen er i drift (anleggsmodellen gjør dette konkret); (iii) **godene går til kjøperne med høyest betalingsvillighet** — de med betalingsvillighet over prisen kjøper. Hvert kriterium med figurforklaring og moteksempel (hva går tapt hvis det brytes). Effektivitetstap/dødvektstap introduseres generelt: trekanten mellom E og T over mengdeavviket — for lite omsatt (betalingsvillighet > kostnad for bortfalte enheter) eller for mye (kostnad > betalingsvillighet for ekstra enheter; forbereder subsidie-paradokset i kap. 3.2). Presisering: effektivitet sier ikke noe om *fordeling* — «størst mulig kake, ikke rettferdig deling» (forbereder drøftingene i 3.5 og 4.2).
- **Oppgavesjangre:** F + G-fundament. Mønstereksempel: «Forklar ved hjelp av en figur hvorfor samfunnsøkonomisk overskudd er størst i frikonkurranselikevekten, og angi de tre kravene som da er oppfylt.»
- **Typiske feil:** Ramse opp kriteriene uten å kunne bruke dem som sjekkliste på et inngrep; blande «riktig mengde» og «riktig fordeling»; hevde at likevekten er «rettferdig» (effektivitet ≠ fordeling).
- **Quiz: 15 · Flashcards: 15**

**Prøve-kvote Del 2:** 4 prøver (2.A SO/KO/PO-begrepene med arealer, sjanger A+F; 2.B trekriterie-sjekklisten anvendt på et inngrep, sjanger F+G; 2.C velferdsregnskap etter et kurveskift med tallfestede trekanter, sjanger F; 2.D blandet begreps- og velferdsprøve på eksamensnivå, sjanger A+F).

---

### Del 3 — Skatt, subsidie og prisregulering *(prioritet: PERFEKT — tyngdepunktet)*

#### Kapittel 3.1: Stykkskatt: firetrinnsmetoden og delingsformelen

- **id:** `econ1210-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `econ1210-1-5`, `econ1210-2-1`
- **Kapitteltype:** teori
- **description:** Skatt på selger gjennom firetrinnsmetoden: skift med nøyaktig t, ny likevekt, deling etter helningene med c/(b+c) — og dødvektstapet.
- **Eksamensbelegg:** Sjanger E i 15/16 sett (94 %) — tyngdepunktet i settet (2–4 deloppgaver, 15–30 %); algebraisk utregning av delingen i 8/16 (50 %) og eksplisitt toppsjikt-markør («regner ut delingen algebraisk og kobler brøken til helningsforholdet»). Kalibrerte fasitverdier: kjøper betaler 2/3 av avgiften (V2019, H2019). Skatteekvivalens-fellen: H2023 f er konstruert rundt at det er likegyldig hvem avgiften formelt legges på; V2024 og H2020 lar studenten velge side (pluss for å påpeke at det ikke spiller noen rolle). Prioritet: **perfekt**.
- **Innholdskontrakt:** Firetrinnsmetoden etableres som bokas standardalgoritme: **1) Skift:** skatt $t$ per enhet på selger → T-kurven opp med *nøyaktig* $t$ — begrunnelse i anleggsspråket: enhetskostnaden øker med $t$ i alle anlegg (mekanismen bak skiftet er sensor-gull); ny likevekt: høyere markedspris $p_1$, lavere mengde, lavere nettopris $p_1 - t$ til selger. **2) Deling:** kjøpers prisøkning + selgers nettoprisfall = hele $t$ (alltid); delingen bestemmes av **helningsforholdet mellom E og T i likevekten** — den minst prisfølsomme (bratteste) siden bærer mest; algebraisk med $x = a - bp$ og $x = cp - d$: ny markedspris $p_1 = p_0 + \frac{c}{b+c}\,t$, kjøpers andel $\frac{c}{b+c}$, selgers andel $\frac{b}{b+c}$ — brøken skal kunne utledes (sett $a - bp_1 = c(p_1 - t) - d$ og trekk fra likevektsbetingelsen) og **alltid tolkes verbalt**. **3) Ekvivalens:** skatt på kjøper flytter E-kurven ned med $t$ — samme sluttresultat for alle; hvem den «legges på» er irrelevant. **4) Velferd:** KO og PO faller mer enn skatteinntekten øker → dødvektstap = trekanten mellom E og T fra ny til gammel mengde; begrunnelse: betalingsvilligheten for de bortfalte enhetene overstiger kostnadene. Grensetilfeller: horisontal T-kurve → kjøperne bærer alt (H2025-varianten); helt uelastisk side bærer alt.
- **Oppgavesjangre:** E + F. Mønstereksempel: «Det innføres en avgift på 30 kroner per enhet, lagt på selgerne. Vis skiftet i en figur, beregn ny markedspris og selgernes nettopris med funksjonene fra forrige deloppgave, forklar med ord hvorfor kjøperne bærer den andelen de gjør — og vis effektivitetstapet i figuren.»
- **Typiske feil:** Feil skiftretning eller feil kurve (feilkatalog #2); tro at fordelingen avhenger av hvem som formelt betaler (#3 — H2023 f-fellen); oppgi delingsbrøken uten verbal tolkning (#6); tegne skiftet større/mindre enn $t$; glemme at prisendringene summerer seg til nøyaktig $t$.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 3.2: Stykksubsidie og subsidie-paradokset

- **id:** `econ1210-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1210-3-1`
- **Kapitteltype:** teori
- **description:** Subsidien gjennom samme firetrinnsmetode — og karakterskillet: hvorfor SO faller når både kjøpere og selgere tjener.
- **Eksamensbelegg:** Subsidie analyseres i 12/16 sett — *oftere enn skatt*; kronspørsmålet «hvorfor reduserer subsidien samfunnsøkonomisk overskudd når både kjøpere og selgere tjener?» stilles eksplisitt i V2023, H2024, V2025 og H2025 og er utpekt som «krevende å forstå» i fasit — **dette er karakterskillet**. Kalibrerte fasitverdier: subsidie 40 kr → markedspris 200 → 190, nettopris 230, kjøper får ¼ (H2024); kjøper får 1/3 (V2023). Prioritet: **perfekt**.
- **Innholdskontrakt:** Firetrinnsmetoden speilvendt: subsidie $s$ til selger → T-kurven **ned** med nøyaktig $s$ (enhetskostnaden faller med $s$ i alle anlegg) → lavere markedspris, høyere mengde, høyere nettopris $p_1 + s$ til selger; deling: kjøpers prisfall $= \frac{c}{b+c}\,s$, selgers nettoprisøkning $= \frac{b}{b+c}\,s$, sum $= s$; ekvivalens kjøper/selger. **Subsidie-paradokset (eget delkapittel, bokas viktigste enkeltside):** KO øker og PO øker — men statens subsidieutlegg ($s \cdot x_1$) er større enn summen av gevinstene, så SO faller. Fasitenes favorittbevis skal stå ordrett-presist: **for merproduksjonen er kjøpernes betalingsvillighet lavere enn produksjonskostnadene** — hver ekstra enhet ødelegger verdi; dødvektstrekanten peker motsatt vei av skattetrekanten (til høyre for frikonkurransemengden). Figurbeskrivelse med alle tre arealer (KO-gevinst, PO-gevinst, utlegg) + trekanten. Kobling fremover: subsidie er likevel riktig ved *positive eksterne virkninger* (kap. 4.1) — paradokset gjelder uten markedssvikt.
- **Oppgavesjangre:** E + F. Mønstereksempel: «Selgerne får en subsidie på 60 kroner per enhet. (a) Vis skiftet i en figur og beregn ny markedspris og nettopris. (b) Forklar hvorfor kjøperne bare får en liten del av subsidien i dette markedet. (c) Både kjøpere og selgere kommer bedre ut — forklar likevel hvorfor samfunnsøkonomisk overskudd blir mindre.»
- **Typiske feil:** Påstå at subsidien øker SO fordi både KO og PO øker (feilkatalog #4 — selve karakterskillet); flytte T-kurven opp i stedet for ned (#2); glemme statens utlegg i velferdsregnskapet (#11); tegne dødvektstrekanten på feil side av likevektsmengden.
- **Quiz: 25 · Flashcards: 20**

#### Kapittel 3.3: Prisregulering: maksimalpris og minstepris

- **id:** `econ1210-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `econ1210-2-2`
- **Kapitteltype:** teori
- **description:** Makspris med kortside-regel, rasjonering og tilleggstap — standardcasen strøm/gass — og minstepris/minstelønn speilvendt.
- **Eksamensbelegg:** Sjanger G i 6/16 sett (38 %) + V2025-utsatt — **alle makspris-casene kom 2022 eller senere** (V2022, H2022, V2024, H2025: makspris på strøm/gass er standardcasen); minstelønn H2018, minstepris V2020; vekt fra 1 deloppgave til en hel oppgave 3 (5–30 %). Toppnivå-poeng fra H2022 b: argumentet «produsentene har lave *gjennomsnittskostnader*, altså bør prisen ned» er feil — prisen skal reflektere *marginal*kostnaden. Prioritet: **perfekt**.
- **Innholdskontrakt:** Makspris under likevektspris: etterspørselsoverskudd; **kortside-regelen: omsatt mengde = tilbudt mengde** (ingen kan tvinges til å selge) — i anleggsspråket: bare anlegg med enhetskostnad under maksprisen produserer; rasjonering er nødvendig, og modellen sier ikke hvordan den skjer; SO faller (mengdetap), og faller *ekstra* hvis rasjoneringen ikke følger betalingsvillighet — kø, svartebørs, kvalitetsfall (tilleggstapet er toppsjikt-markør); vurdering mot de tre effektivitetskriteriene fra kap. 2.2 (alle tre brytes). Minstepris/minstelønn over likevekt: tilbudsoverskudd, omsatt mengde = etterspurt mengde (kortsiden igjen). Marginal- vs. gjennomsnittskostnadsfellen: at produsentene «tjener godt» (lav gjennomsnittskostnad, høy pris) er ikke i seg selv et effektivitetsargument for pristak — riktig mengde krever pris = marginalkostnad. Fordelingsmotivet anerkjennes (strøm er nødvendighetsgode) men veies mot effektivitetstapet og alternativet kontantstøtte (V2022 c-nyansen: fordelingseffekter via inntektselastisitet, statens tapte inntekter — strekknivå).
- **Oppgavesjangre:** G. Mønstereksempel: «Myndighetene vurderer en maksimalpris på strøm godt under dagens markedspris. Vis effektene i en figur, forklar hvordan omsatt mengde bestemmes, gjør rede for hvorfor det oppstår et fordelingsproblem som modellen ikke løser, og vurder tiltaket mot de tre effektivitetskriteriene.»
- **Typiske feil:** Glemme kortside-regelen — lese omsatt mengde av E-kurven ved makspris (feilkatalog #7); glemme at rasjonering må til; gjennomsnittskostnads-argumentet (#7); glemme tilleggstapet ved vilkårlig rasjonering; speilvende feil for minstepris.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 3.4: Drill: skatt, subsidie og prisinngrep

- **id:** `econ1210-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `econ1210-3-2`, `econ1210-3-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på eksamens tyngdepunkt: firetrinnsmetoden og delingsformelen c/(b+c) i alle varianter, til det sitter.
- **Eksamensbelegg:** Dekker sjanger E (94 % — tyngdepunktet med 15–30 % av settet), F-koblingen og G (38 %). Delingsutregningen algebraisk er eksplisitt toppsjikt-markør; ekvivalens-fellen (H2023 f) og grensetilfellene (horisontal T i H2025; slakt tilbud i H2020-arbeidsmarkedsvarianten) skal alle roteres. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (firetrinnsmetoden som algoritme): 1) skift riktig kurve riktig vei med nøyaktig beløpet + mekanismen (enhetskostnader); 2) ny likevekt grafisk og algebraisk ($p_1 = p_0 \pm \frac{c}{b+c} \cdot$ beløp); 3) deling: beregn begge andeler, kontroller at de summerer til hele beløpet, **tolk verbalt** mot helningene/elastisitetene; 4) velferdsregnskap: KO, PO, statens inntekt/utlegg, dødvektstrekant — med subsidie-paradoks-forklaringen der det er subsidie; 5) ekvivalens-sjekk hvis oppgaven antyder side-valg. Gjennomregnet eksamenscase med sensor-margnotater. **10–15 oppgaver** som systematisk roterer: skatt vs. subsidie × lagt på kjøper vs. selger × bratt vs. slak E/T × grensetilfeller (horisontal T → alt til kjøper; nesten vertikal E → kjøper bærer nesten alt) × med/uten algebra — alle med nyskrevne case og pene tall (f.eks. $x = 800 - 4p$, $x = 2p - 100$, $t = 30$: $p_0 = 150$, $p_1 = 160$, kjøper 1/3, selger 2/3). 2–3 av oppgavene inkluderer makspris/minstepris i samme sett (à la H2025-strukturen).
- **Oppgavesjangre:** E, F, G. Mønstereksempel (full kjede): «(a) Beregn likevekten. (b) En avgift på 45 kroner legges på kjøperne — vis i figur at utfallet blir det samme som om den var lagt på selgerne. (c) Beregn hvor mye av avgiften hver side bærer, og forklar tallet med kurvenes helninger. (d) Vis effektivitetstapet og forklar hvorfor det oppstår.»
- **Typiske feil:** Hele §5-repertoaret for tyngdepunktet: feil retning (#2), «hvem betaler formelt»-fellen (#3), subsidie-paradokset (#4), tall uten tolkning (#6), kortside-glemsel (#7), glemt statsutlegg (#11), umerkede figurer (#12).
- **Quiz: 20 · Flashcards: 10**

#### Kapittel 3.5: «Hva sier du som samfunnsøkonom?» — alternativkostnadsdrøftingen

- **id:** `econ1210-3-5` · **number:** 3.5 · **estimatedMinutes:** 45 · **prerequisites:** `econ1210-3-2`
- **Kapitteltype:** teori (verbal metode)
- **description:** Den verbale halen på den store oppgaven: hvorfor næringsstøtte til ulønnsomme produsenter sløser med samfunnets ressurser — sensor kaller den vanskelig og bruker den som differensiator.
- **Eksamensbelegg:** Sjanger L i 5/16 sett (31 % — bare siste seks år, fast avslutning på den store oppgaven i nyere sett; 5–10 %). Belagte varianter: subsidie for å overleve nyetablering (H2021 d), fritak fra miljøavgift for ulønnsomme bedrifter (H2022 f — dobbel ineffektivitet), subsidier mot nedleggelse/«tap av verdiskaping» (H2024 g), avgift etter betalingsevne (V2023 b — ulik karbonpris bryter kostnadseffektiviteten), støtte til bedriftene med lavest overskudd (V2020 g — premierer de minst produktive). Sensor markerer sjangeren som **vanskelig på nivået** hver gang — full uttelling forventes ikke av alle; toppkarakter-differensiator. Prioritet: **kunne** (men høy avkastning).
- **Innholdskontrakt:** Kjerneresonnementet som skal kunne skrives verbalt på 5–10 linjer: subsidien senker bedriftenes *private* kostnader, men **ressursenes alternativkostnad er uendret** — å holde ulønnsomme produsenter i live betyr at arbeidskraft og kapital kaster mindre av seg enn i beste alternative anvendelse; «tapte arbeidsplasser» er ikke tapt verdiskaping når ressursene har bedre anvendelser. Momentbank per belagt variant (nyetablering, avgiftsfritak med dobbel ineffektivitet: for lite utslippskutt + ineffektiv produksjonsfordeling, nedleggingsstøtte, differensiert avgift, støtte til minst produktive). Svarstruktur: (i) anerkjenn de private tapene, (ii) skill privatøkonomisk fra samfunnsøkonomisk lønnsomhet, (iii) alternativkostnaden, (iv) eventuelt unntaket (reell markedssvikt → kap. 4). Sjangeren besvares **verbalt** — oppgavene sier det ofte eksplisitt.
- **Oppgavesjangre:** L. Mønstereksempel: «Bransjeorganisasjonen advarer om at arbeidsplasser og verdiskaping går tapt uten støtteordningen. Hva svarer du som samfunnsøkonom? Svar verbalt.»
- **Typiske feil:** Moralessay uten det økonomiske kjerneargumentet; gjenta subsidie-paradokset fra 3.2 uten alternativkostnads-vrien (de er beslektede men ulike resonnementer); glemme unntaket for reell markedssvikt; svare med figur og algebra der oppgaven ber om verbal drøfting.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A stykkskatt full firetrinnsmetode med algebraisk deling, sjanger E+F; 3.B stykksubsidie med paradoks-forklaring, sjanger E+F; 3.C maksimalpris med kortside, rasjonering og trekriterie-vurdering, sjanger G; 3.D integrert eksamenskjerne: skift + subsidie + velferd + «som samfunnsøkonom»-hale, sjanger D+E+F+L).

---

### Del 4 — Eksternaliteter, klima og markedssvikt *(klima: PERFEKT)*

#### Kapittel 4.1: Eksterne virkninger og Pigou-avgiften

- **id:** `econ1210-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ1210-2-1`, `econ1210-3-1`
- **Kapitteltype:** teori
- **description:** Negative og positive eksterne virkninger — og unntaket der en stykkskatt fjerner effektivitetstap i stedet for å skape et.
- **Eksamensbelegg:** «Eksterne virkninger» som begrepsspørsmål i 3 ordinære + 3 utsatt sett (svært hyppig på utsatt); Pigou-logikken bærer klimaoppgaven (kap. 4.2). **Pigou-unntaket eksplisitt testet H2022 e:** hvis varen skader naturen med $t$ kroner per enhet, ligger samfunnsøkonomisk marginalkostnad $t$ over T-kurven, og en stykkskatt på $t$ *fjerner* effektivitetstapet. Strekknivå-nyanse fra H2018-utsatt c: avgiftsinntekter over skadekostnaden betyr ikke at avgiften er for høy — avgiften betales for hele utslippet, skaden gjelder marginen. Prioritet: **perfekt** (fundament for klimaoppgaven).
- **Innholdskontrakt:** Definisjon: en ekstern virkning er en kostnad eller gevinst ved produksjon/forbruk som rammer/tilfaller andre enn beslutningstakeren, og som ikke prises i markedet — med eksempler begge veier (utslipp; vaksiner/smittevern, teknologiutvikling). Figurapparatet: **samfunnsøkonomisk marginalkostnad = T-kurven + marginal skadekostnad** (parallell kurve $t$ over T ved konstant skade per enhet); markedet omsetter for mye (likevekt der E krysser T, optimum der E krysser T + $t$); dødvektstrekanten av *uregulert* eksternalitet. **Pigou-avgift = marginal skadekostnad**: flytter T opp til den samfunnsøkonomiske kurven → riktig mengde, effektivitetstapet fjernes — kontrasten til kap. 3.1 (skatt i et velfungerende marked skaper tap; skatt mot en eksternalitet fjerner tap) gjøres eksplisitt. Positive eksternaliteter speilvendt: subsidie er riktig (kobling tilbake til subsidie-paradokset: paradokset gjelder *uten* markedssvikt). Avgiftsinntekt vs. skade-nyansen (marginal- vs. totalbetraktning).
- **Oppgavesjangre:** A + F/H-fundament. Mønstereksempel: «Produksjonen av en vare medfører utslipp som påfører samfunnet en kostnad på 25 kroner per enhet. Forklar ved hjelp av en figur hvorfor markedet produserer for mye, og vis at en avgift på 25 kroner per enhet gir samfunnsøkonomisk riktig mengde.»
- **Typiske feil:** Behandle Pigou-avgiften som velferdstap etter mønster fra kap. 3.1 (glemme at utgangspunktet ikke er effektivt); si at avgiften er «for høy» fordi inntektene overstiger skaden; glemme at også *positive* eksternaliteter er markedssvikt; definisjon uten eksempel.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.2: Karbonprising: avgift, omsettelige kvoter og trekriterie-rammen

- **id:** `econ1210-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ1210-4-1`
- **Kapitteltype:** teori
- **description:** Oppgave 3-klassikeren: avgift, omsettelige kvoter og direkte regulering vurdert mot Grønn skattekommisjons tre kriterier.
- **Eksamensbelegg:** Sjanger H: klima som stor oppgave i 10/16 sett (63 %; 7 av 8 siste ordinære sett har miljø-innslag) + 4 utsatt; 25–40 % vekt når den kommer; gjenbrukes nesten uendret på utsatt (H2022-utsatt, V2024-utsatt og H2024 stiller i praksis samme trekriterie-spørsmål). Belagte nyanser: gratis kvotetildeling svekker ikke kostnadseffektiviteten men avgjør fordelingen og «forurenser betaler» (H2025 c, H2024-utsatt); elbil-subsidienyansen (H2021); grensene for prising (H2020, H2023); ulike avgiftssatser-argumentet med talleksempel-logikk (H2025). Oppgavene sier eksplisitt at svaret **kan gis verbalt eller med figur**. Prioritet: **perfekt**.
- **Innholdskontrakt:** Rammeverket: **Grønn skattekommisjons tre kriterier (NOU 2015:15)**: (i) målet nås (styringseffektivitet), (ii) til lavest mulig kostnad (kostnadseffektivitet), (iii) forurenser betaler. Standardresonnementene ordrett-presist: **Avgift:** hver bedrift kutter alle utslipp som koster mindre enn avgiften per tonn → med lik sats for alle blir marginale rensekostnader like → samlet kutt til lavest kostnad + kontinuerlig innovasjonsinsentiv; usikker måloppnåelse (prisen er kjent, mengden ikke). Lik sats er avgjørende — med ulike satser (f.eks. 1 000 vs. 600 kr/tonn) kan samme totalkutt gjøres billigere ved å flytte kutt til lavsatsbedriften (talleksempel skal med). **Omsettelige kvoter:** utslippsmålet nås eksakt; kvotehandel utjevner marginale rensekostnader (kjøp kvote hvis rensing er dyrere enn kvoteprisen); **gratis tildeling svekker IKKE kostnadseffektiviteten** — alternativkostnaden ved å bruke kvoten er kvoteprisen uansett — men avgjør fordelingen og bryter «forurenser betaler». **Direkte regulering (uomsettelige kvoter/påbud):** styringseffektiv, men uten informasjon om bedriftenes rensekostnader blir marginalkostnadene ulike → dyrere enn nødvendig; svakt innovasjonsinsentiv. **Subsidier til grønne alternativer:** vrir mot ett bestemt alternativ også relativt til andre kutt (elbil vs. kollektiv/sykkel/mindre kjøring), forurenser betaler ikke, myndighetene må plukke vinnere — dårlig virkemiddel *med mindre* alternativet har positive eksterne virkninger (teknologiutvikling). **Grensene for prising:** lokal forurensing der skaden avhenger av sted (avrenning) egner seg ikke for uniform pris; akutt farlige utslipp (kvikksølv) → forbud. Badekarsdiagrammet nevnes som valgfri illustrasjon (aldri påkrevd).
- **Oppgavesjangre:** H. Mønstereksempel: «Et land skal halvere utslippene fra industrien. Vurder (i) pålagte utslippstak per bedrift, (ii) en lik utslippsavgift og (iii) omsettelige kvoter opp mot kriteriene om måloppnåelse, kostnadseffektivitet og at forurenser skal betale. Du kan svare verbalt eller med figur.»
- **Typiske feil:** Miljøoppgaven som moralessay uten kjerneargumentet lik pris → like marginale rensekostnader → billigst samlet kutt (feilkatalog #10); påstå at gratiskvoter ødelegger kostnadseffektiviteten (alternativkostnadslogikken!); glemme grensene for prising; utelate kriteriestrukturen og drøfte løst.
- **Quiz: 25 · Flashcards: 25**

#### Kapittel 4.3: Kollektive goder og markedssvikt-katalogen

- **id:** `econ1210-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ1210-4-1`
- **Kapitteltype:** teori
- **description:** Kollektive goder med begge definisjoner, fellesressurser, asymmetrisk informasjon — og katalog-grepet «hvilken markedssvikt begrunner tiltaket?».
- **Eksamensbelegg:** «Kollektivt gode / ikke-rivaliserende gode» er den hyppigste begrepsgjengangeren (6 ordinære + 4 utsatt; fast fra 2023); sensor godtar **begge definisjoner** — Krugman & Wells (ikke-rivaliserende *og* ikke-ekskluderbart) og CORE (kun ikke-rivaliserende) — helst begge (eksplisitt metaregel). Sjanger K («begrunn inngrepet») i V2020 oppg. 4 (20 %), V2023-utsatt oppg. 3, H2020-utsatt oppg. 2, H2025-utsatt oppg. 3 — 20–40 % når den kommer, gjenganger på utsatt. Velferdsordninger/asymmetrisk informasjon 2/16; universelle vs. behovsprøvde ordninger som begrep (1); fellesressurser kun H2025-utsatt; Lorenz-kurve kun V2018-utsatt. Prioritet: **kunne**.
- **Innholdskontrakt:** **Kollektivt gode med begge definisjoner** (K&W: ikke-rivaliserende og ikke-ekskluderbart, f.eks. fyrlykt/forsvar; CORE: kun ikke-rivaliserende, bredere — TV-sendinger, nettaviser, kunnskap) + hvorfor markedet underforsyner (gratispassasjerer; pris > 0 på et ikke-rivaliserende gode utestenger brukere med positiv betalingsvillighet uten samfunnsøkonomisk kostnad). **Fellesressurser**: rivaliserende men ikke-ekskluderbare → overforbruk (allmenningens tragedie), løses med regulering eller eiendomsrett (kort — kun utsatt-belegg). **Asymmetrisk informasjon og atferdsrisiko**: hvorfor private forsikringsmarkeder fungerer dårlig → offentlige velferdsordninger; universelle vs. behovsprøvde ordninger (definisjonspar). **Katalog-grepet som tabell** (tiltak → markedssvikt): grunnforskning → kollektivt gode; vaksiner → positiv eksternalitet; bensinavgift → negativ eksternalitet (Pigou); uføre-/ledighetstrygd → asymmetrisk informasjon; forbud mot prissamarbeid → markedsmakt/kartell (peker til kap. 5.4); fiskekvoter → fellesressurs. Lorenz-kurven som kort «bør kjenne»-avsnitt (fordelingsmål; kun utsatt-belegg).
- **Oppgavesjangre:** A + K. Mønstereksempel (K): «For hvert av tiltakene — gratis vaksinering, offentlig finansiert grunnforskning og CO2-avgift — forklar hvilken svikt i markedet som gjør tiltaket samfunnsøkonomisk fornuftig.»
- **Typiske feil:** Oppgi bare én definisjon av kollektivt gode når begge honoreres; blande kollektivt gode (ikke-rivaliserende) og fellesressurs (rivaliserende); begrunne alle inngrep med «rettferdighet» i stedet for å identifisere svikten; glemme eksempler.
- **Quiz: 20 · Flashcards: 25**

#### Kapittel 4.4: Drill: klimaoppgaven

- **id:** `econ1210-4-4` · **number:** 4.4 · **estimatedMinutes:** 75 · **prerequisites:** `econ1210-4-2`, `econ1210-4-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på oppgave 3-klassikeren: trekriterie-vurderinger av virkemiddelpakker i stadig ny innpakning.
- **Eksamensbelegg:** Dekker sjanger H (63 % som stor oppgave, 25–40 % vekt) + K-varianten. Rotasjonen som skal dekkes: avgift vs. uomsettelige kvoter vs. omsettelige kvoter (trekriterie-klassikeren, stilt nesten likt tre ganger); gratis vs. auksjonerte kvoter; differensierte avgiftssatser/fritak (koblet til 3.5); subsidie til grønt alternativ; forbud (akutt/lokal forurensing); klimasøksmål/mål-case-innramming (V2025-aktualiteten). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifiser eksternaliteten og målet; 2) list virkemidlene oppgaven nevner; 3) vurder hvert virkemiddel mot de tre kriteriene i fast rekkefølge (måloppnåelse → kostnadseffektivitet → forurenser betaler); 4) kjerneargumentet lik pris → like marginale rensekostnader → billigst kutt skal alltid med, gjerne med talleksempel; 5) nyansene der de er relevante (gratiskvoter, innovasjon, grensene for prising); 6) konkluder kort hvis spurt. Gjennomregnet eksamenscase med sensor-margnotater. **8–12 oppgaver** i nyskrevne case (utslipp fra skipsfart, avrenning fra oppdrett [lokal → prising uegnet], kvotemarked for luftfart med gratistildeling, avgiftsfritak for kraftkrevende industri, subsidiert hydrogen, kommunalt vedfyringsforbud), alle på eksamensnivå og alle besvarbare verbalt.
- **Oppgavesjangre:** H, K, L-moment. Mønstereksempel: «Regjeringen foreslår gratis utslippskvoter til eksportindustrien og full avgift for alle andre. Vurder forslaget mot de tre kriteriene, og forklar spesielt om gratistildelingen svekker kostnadseffektiviteten.»
- **Typiske feil:** #10 i alle varianter (moralessay, manglende kjerneargument); gratiskvote-fellen; glemme at differensierte satser bryter kostnadseffektiviteten (dobbel ineffektivitet fra H2022 f); anvende uniform prising på lokal forurensing.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A eksternalitets-begrep + Pigou-figur, sjanger A+F; 4.B trekriterie-vurdering avgift/kvoter/regulering, sjanger H; 4.C markedssvikt-katalogen med 4–5 tiltak, sjanger K; 4.D full klimaoppgave i oppgave 3-format på eksamensnivå med gratiskvote- og fritaksnyanser, sjanger H+L).

---

### Del 5 — Monopol og markedsmakt *(prioritet: PERFEKT)*

#### Kapittel 5.1: Monopolets tilpasning: marginalinntekt og MI = MK

- **id:** `econ1210-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ1210-1-3`
- **Kapitteltype:** teori
- **description:** MI dekomponert i kvantums- og priseffekt, tilpasningen MI = MK — og kontrollpunktet: prisen leses av E-kurven.
- **Eksamensbelegg:** Sjanger I i 7/16 ordinære sett (V2018, H2018, H2020, H2021, V2022, H2023 begrep, V2024) + 4 utsatt — **utsatt-eksamenens favorittoppgave**; 30–40 % når den er oppgave 2/3; «monopolets marginalinntekt» også som begrepsspørsmål (1+1). Fasitenes faste oppbygging: MI-dekomponering alltid først; **faglærer markerer «prisen leses av E-kurven, ikke MI-kurven» som bevisst kontrollpunkt** (oppgir å ha terpet det). Derivasjon forventes eksplisitt ikke. Prioritet: **perfekt**.
- **Innholdskontrakt:** $\text{MI} = p + \frac{\Delta p}{\Delta x} \cdot x$ — alltid dekomponert i **kvantumseffekt** (positiv: én enhet mer selges til prisen $p$) og **priseffekt** (negativ: for å selge mer må prisen ned på *alle* enheter); derfor MI $< p$ for et monopol, mens pristakeren har MI $= p$. Lineær E-kurve → MI-kurve dobbelt så bratt (samme skjæring med prisaksen) — presenteres som geometrisk faktum, ingen derivasjon. Tilpasningen: produser der **MI = MK**; **prisen leses deretter av E-kurven** ved monopolmengden; forklar hvorfor både høyere og lavere kvantum er ulønnsomt (MI > MK: én enhet til øker overskuddet; MI < MK: siste enhet tapte penger). Figurbeskrivelse-standard: E, MI, MK, monopolmengde $x_M$, monopolpris $p_M$ avlest på E. Konstante enhetskostnader og stigende MK godtas begge i figuren (H2021-metaregel) — boka bruker konstant MK som standard (konsistent med anleggstankegangen).
- **Oppgavesjangre:** I + A. Mønstereksempel: «Forklar hvorfor marginalinntekten til et monopol er lavere enn prisen, ved å dele den opp i en kvantumseffekt og en priseffekt. Vis deretter i en figur hvordan monopolet velger mengde og pris.»
- **Typiske feil:** Lese monopolprisen av MI-kurven i stedet for E-kurven (feilkatalog #5 — kontrollpunktet); utelate priseffekten i dekomponeringen; forsøke derivasjon (unødvendig og utenfor kravet); figur uten MI-kurve eller uten avlesningslinjer.
- **Quiz: 20 · Flashcards: 15**

#### Kapittel 5.2: Monopolets velferdsvirkninger og markedsmaktens grenser

- **id:** `econ1210-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `econ1210-5-1`, `econ1210-2-1`
- **Kapitteltype:** teori
- **description:** Dødvektstapet, hvem som vinner og taper — og hvorfor konkurranse og elastisitet begrenser markedsmakten.
- **Eksamensbelegg:** Velferdsdelen følger i fasitene alltid rett etter tilpasningen (sjanger I trinn 3–4); V2024 utvider fordelingsanalysen: *andre selgere i markedet vinner også* på den høye prisen (andreordens-poeng/toppsjikt); V2024 c: økt overføringskapasitet/flere konkurrenter gjør E-kurven til den store aktøren mer elastisk → mindre markedsmakt. Prioritet: **perfekt**.
- **Innholdskontrakt:** Velferd: monopolmengden $x_M$ er lavere enn samfunnsøkonomisk optimal mengde (der $p = $ MK) → **dødvektstap** = trekanten mellom E og MK fra $x_M$ til optimum; fordeling: PO opp, KO ned — selger vinner, kjøperne taper; tredjeparts-utvidelsen: andre/gjenværende selgere som får den høye prisen vinner også (kobling til utestengelses-poenget i 1.5). **Markedsmaktens grense:** flatere/mer elastisk E-kurve → mindre gap mellom pris og MK (priseffekten svir mer når kundene lett flykter); det som gjør etterspørselen mot én aktør mer elastisk: flere konkurrenter, bedre substitutter, økt overføringskapasitet (strømcase V2024 c) — konkurransepolitikkens logikk. Kort kobling: hvorfor prissamarbeid er forbudt (utdypes i 5.4).
- **Oppgavesjangre:** I + F. Mønstereksempel: «Vis i en figur effektivitetstapet ved monopol, gjør rede for hvem som tjener og taper på monopolprisingen — husk også andre tilbydere i markedet — og forklar hvorfor en ny utenlandskabel reduserer den dominerende kraftprodusentens markedsmakt.»
- **Typiske feil:** Tegne dødvektstrekanten mot MI i stedet for MK/E; glemme tredjepartene (#11); si at monopolet «setter prisen så høyt som mulig» (det maksimerer overskudd, ikke pris); mangle elastisitets-koblingen når oppgaven spør om hva som begrenser makten.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.3: Naturlig monopol og regulering

- **id:** `econ1210-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ1210-5-2`
- **Kapitteltype:** teori
- **description:** Fallende gjennomsnittskostnader, underskuddet ved p = c — og reguleringstriaden med informasjonsproblemet.
- **Eksamensbelegg:** Naturlig monopol i 3/16 ordinære (V2018, H2018, H2020) + 3 utsatt; standardcase digitale aviser med MK ≈ 0 (H2020, V2025-utsatt); reguleringsdelen med informasjonsproblemet fra H2018 c. Prioritet: **perfekt** (del av monopolpakken, nivå 1 punkt 5).
- **Innholdskontrakt:** Kostnadsfunksjonen $c(x) = cx + B$ (konstant enhetskostnad $c$, stor fast kostnad $B$) → gjennomsnittskostnaden $c + B/x$ **faller** med mengden → én produsent er billigst (naturlig monopol); ytterpunktet MK $= 0$ (digital avis: én leser til koster ingenting). Samfunnsøkonomisk optimum $p = c$ (pris = marginalkostnad) gir underskudd $-B$; **produksjonen er likevel samfunnsøkonomisk lønnsom hvis KO ved optimum overstiger $B$** (lønnsomhetsvilkåret skal vises i figur: KO-trekanten mot $B$). Uregulert setter monopolet MI = MK som i 5.1 → for lite omsatt. **Reguleringstriaden:** makspris $= c$, minstekvantum, eller subsidie — alle krever støtte/finansiering som dekker underskuddet, og **myndighetene har dårligere kostnadsinformasjon enn selskapet** (informasjonsproblemet er toppsjikt-momentet); to-delt tariff nevnes kort (fastledd dekker $B$).
- **Oppgavesjangre:** I. Mønstereksempel: «En nettavis har store faste kostnader og tilnærmet null kostnad per ekstra leser. Forklar med figur hvorfor betalingsmur gir samfunnsøkonomisk tap, avgjør om driften kan være samfunnsøkonomisk lønnsom selv om avisen taper penger ved gratis tilgang, og drøft hvordan myndighetene eventuelt kan legge til rette — og hva som gjør reguleringen vanskelig.»
- **Typiske feil:** Kreve $p = $ gjennomsnittskostnad og kalle det optimum (riktig mengde krever $p = $ MK — samme felle som H2022 b); glemme lønnsomhetsvilkåret KO $> B$; glemme informasjonsproblemet i reguleringsdrøftingen; blande fast kostnad og marginalkostnad.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.4: Monopolistisk konkurranse og kartell

- **id:** `econ1210-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `econ1210-5-2`
- **Kapitteltype:** teori
- **description:** Nullprofitt-likevekten under monopolistisk konkurranse — og hvorfor kartellet er et konstruert monopol som loven forbyr.
- **Eksamensbelegg:** Monopolistisk konkurranse i 2/16 ordinære (V2018, H2020) + 2 utsatt; kartell H2021 (småprodusenter som samordner pris); «oligopol» på eksamen betyr i praksis kartell-som-monopol eller fangens dilemma (kobling til 7.2) — Cournot/Bertrand-utledninger testes aldri. Prioritet: **kunne** (kortversjonene, nivå 2 punkt 11).
- **Innholdskontrakt:** **Monopolistisk konkurranse:** differensierte produkter gir hver bedrift en fallende E-kurve (litt markedsmakt); fri etablering → inntreden **skifter hver bedrifts E-kurve inn og gjør den slakere** til profitten er null: $p = $ gjennomsnittskostnad, fortsatt $> $ MK (lite effektivitetstap består, men variasjon er gevinsten); figurfortelling på kort og lang sikt. **Kartell:** små pristakende produsenter som samordner seg opptrer som ett monopol — pris opp, mengde ned, dødvektstap som i 5.2; derfor forbudt etter konkurranseloven; ustabiliteten (hver deltaker tjener på å bryte ut) nevnes som bro til fangens dilemma (kap. 7.2). Eksplisitt avgrensning: ingen Cournot-/Bertrand-algebra — «oligopol» dekkes av kartell + spillmatrise.
- **Oppgavesjangre:** I (kortvariant) + A. Mønstereksempel: «Frisørene i en by danner en prisavtale. Forklar med figur hvorfor utfallet likner monopol, hvem som taper, og hvorfor konkurranseloven forbyr slike avtaler. Forklar også hvorfor avtalen er vanskelig å holde.»
- **Typiske feil:** Utlede Cournot/Bertrand (utenfor kravet — bortkastet tid); tro at nullprofitt betyr effektivitet ($p > $ MK består); glemme ustabilitets-poenget; blande monopolistisk konkurranse og monopol.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 5.5: Drill: monopoloppgaven

- **id:** `econ1210-5-5` · **number:** 5.5 · **estimatedMinutes:** 80 · **prerequisites:** `econ1210-5-3`, `econ1210-5-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på nest hyppigste oppgave 3-tema og utsatt-favoritten: fra MI-dekomponering til reguleringsdrøfting i én kjede.
- **Eksamensbelegg:** Dekker sjanger I komplett (7 ordinære + 4 utsatt; 30–40 % vekt). Fastitenes faste rekkefølge (MI-dekomponering → tilpasning → velferd → markedsmaktens grense → ev. naturlig monopol/regulering) er drillens ryggrad. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) MI-dekomponering (kvantums- + priseffekt) — alltid først; 2) tegn E, MI (dobbelt så bratt), MK; 3) MI = MK → $x_M$; **pris fra E-kurven**; 4) forklar hvorfor avvik er ulønnsomt; 5) velferd: optimum ved $p = $ MK, dødvektstrekant, PO opp/KO ned + tredjeparter; 6) hvis naturlig monopol: underskudd $-B$, lønnsomhetsvilkår KO $> B$, reguleringstriade + informasjonsproblem; 7) hvis spurt: hva begrenser makten (elastisitet, konkurrenter). Gjennomregnet eksamenscase med sensor-margnotater (bl.a. margnotat ved kontrollpunktet «pris fra E»). **8–12 oppgaver** i nyskrevne case (legemiddel med patent, ferjemonopol, digital strømmetjeneste med MK = 0, kraftprodusent med og uten ny kabel, drosjesamarbeid som kartell, kjedenes lokale markedsmakt), inkludert minst én naturlig monopol-variant og én kartellvariant.
- **Oppgavesjangre:** I. Mønstereksempel (full kjede à la utsatt-settene): «(a) Forklar begrepet marginalinntekt for denne produsenten og hvorfor den er lavere enn prisen. (b) Vis i figur hvordan mengde og pris settes. (c) Vis effektivitetstapet og fordelingsvirkningene. (d) Selskapet har store faste kostnader — kan produksjonen være samfunnsøkonomisk lønnsom selv med bedriftsøkonomisk underskudd ved optimal pris? (e) Drøft kort to måter å regulere selskapet på, og hva som gjør det vanskelig.»
- **Typiske feil:** #5 (pris fra MI-kurven) i alle varianter; dødvektstrekant mot feil kurve; hoppe over dekomponeringen; glemme informasjonsproblemet i (e)-varianter.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 5:** 4 prøver (5.A MI-dekomponering + tilpasning med figur, sjanger I; 5.B velferdsvirkninger og markedsmaktens grenser, sjanger I+F; 5.C naturlig monopol med lønnsomhetsvilkår og regulering, sjanger I; 5.D full monopoloppgave i oppgave 3-format på eksamensnivå, sjanger I).

---

### Del 6 — Arbeidsmarked og internasjonal handel *(prioritet: KUNNE)*

#### Kapittel 6.1: Arbeidsmarkedet som FK-marked: lønnsskatt og lønnssubsidie

- **id:** `econ1210-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ1210-3-2`
- **Kapitteltype:** teori
- **description:** Samme apparat, ny innpakning: lønn w og sysselsetting N — og delingen som styres av helningene også her.
- **Eksamensbelegg:** Sjanger J i 5/16 sett (V2018, H2018 [musikere], H2020, V2021, H2023) + 2 utsatt; 25–50 % vekt når den kommer; **fraværende 2024–25, men apparatet er identisk med varemarkedet** — lav ekstra læringskostnad, comeback-kandidat. Kalibrert fasitverdi: $(w, N) = (200, 1000)$; H2020-fasit: arbeidstakerne får bare **1/5** av lønnssubsidien fordi arbeidstilbudet er slakt; V2025-utsatt (skattefrie tips): horisontal T-kurve → hele gevinsten til arbeidsgiver; V2021: empirisk funn om at ansatte bærer halve selskapsskatten. Prioritet: **kunne**.
- **Innholdskontrakt:** Oversettelsestabellen: pris → lønn $w$, mengde → sysselsetting $N$; E-kurven = bedriftenes etterspørsel etter arbeidskraft (fallende: verdien av det arbeidskraften produserer avtar på marginen — kort, uten produksjonsteori-formalisme); T-kurven = arbeidstilbudet (stigende: høyere lønn trekker flere inn; reservasjonslønn som «enhetskostnad» per arbeidstaker gjør anleggslogikken gjenbrukbar). Hele skatte-/subsidieapparatet fra Del 3 gjenbrukes eksplisitt: lønnssubsidie til arbeidstakere → T-kurven ned med $s$ (reservasjonslønna faller); lønnsskatt/arbeidsgiveravgift på bedriftene → E-kurven ned med $t$; **delingen styres av helningene**: slakt (elastisk) arbeidstilbud → arbeidstakerne får lite av subsidien (1/5-kalibreringen); horisontalt tilbud → alt til arbeidsgiver (tips-varianten); ekvivalens arbeidsgiver/arbeidstaker. Aktualitetsvri: empiri om deling av selskapsskatt. Minstelønn = minstepris (peker til 3.3).
- **Oppgavesjangre:** J (= B/D/E i arbeidsmarkedsklær). Mønstereksempel: «Myndighetene gir en timestøtte på 50 kroner til arbeidstakerne i en bransje. Forklar med figur hvordan støtten deles mellom arbeidstaker og arbeidsgiver, beregn delingen med oppgitte lineære kurver, og forklar hvilke markedsforhold som gir arbeidstakerne minst.»
- **Typiske feil:** Bytte om kurvene (hvem som etterspør og tilbyr arbeid); tro at støtte «til arbeidstakerne» automatisk tilfaller arbeidstakerne (#3 i lønnsklær); glemme å oversette delingsbrøken til helning på *arbeidstilbudet*; regne uten verbal tolkning (#6).
- **Quiz: 15 · Flashcards: 10**

#### Kapittel 6.2: Arbeidstilbudet: substitusjons- og inntektseffekt

- **id:** `econ1210-6-2` · **number:** 6.2 · **estimatedMinutes:** 40 · **prerequisites:** `econ1210-6-1`
- **Kapitteltype:** teori
- **description:** Hvorfor høyere lønn kan gi mindre arbeid: den verbale dekomponeringen som spørres uten figurkrav.
- **Eksamensbelegg:** Tilbakebøyd arbeidstilbud forklart verbalt i H2023 3a og V2021; verbal substitusjons-/inntektseffekt er nivå 2 (analysens prioritering punkt 8) selv om konsumentteori-figuren er nivå 3; renteøkningens tvetydige spareeffekt (to-periode) hører til samme resonnementfamilie (V2021, kjenne-nivå). Prioritet: **kunne** (verbalt).
- **Innholdskontrakt:** Verbal dekomponering av en lønnsøkning: **substitusjonseffekten** — fritid blir dyrere (alternativkostnaden per fritime er lønna) → jobb mer; **inntektseffekten** — man er blitt rikere og har råd til mer av alt, også fritid → jobb mindre; nettoeffekten er ubestemt → **tilbakebøyd arbeidstilbudskurve** (stigende ved lav lønn, kan bøye tilbake ved høy). Samme logikk på renteøkning og sparing (substitusjon: sparing lønner seg mer; inntekt: sparemålet nås med mindre) — tvetydig, kort avsnitt merket «bør kjenne». Alt verbalt; figurdekomponeringen ligger i kap. 7.1 (A-nivå/utsatt-stoff).
- **Oppgavesjangre:** J-moment + A. Mønstereksempel: «Lønna i et yrke øker kraftig. Forklar med ord hvorfor vi ikke kan si sikkert om de ansatte vil jobbe flere eller færre timer, og hvilke to effekter som trekker hver sin vei.»
- **Typiske feil:** Bare én av effektene; blande hvilken effekt som trekker hvilken vei; påstå bestemt nettoeffekt; trekke inn figurapparat der verbal forklaring er alt som kreves.
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 6.3: Internasjonal handel: åpning for import og eksport

- **id:** `econ1210-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ1210-2-1`
- **Kapitteltype:** teori
- **description:** Liten åpen økonomi som tar verdensmarkedsprisen: velferdsregnskapet ved åpning — og hvorfor eksportrestriksjoner koster.
- **Eksamensbelegg:** Handel i 3/16 ordinære (V2019 g, V2022 c, H2024-utsatt e) + H2025-utsatt 2d med **full velferdsanalyse** på utsatt; «alternativkostnad/komparative fortrinn» som begrep (1). Prioritet: **kunne** (nivå 2 punkt 10).
- **Innholdskontrakt:** Liten åpen økonomi = pristaker på verdensmarkedet (verdensmarkedspris oppgitt som tall); **åpning for import** (verdenspris under autarkipris): innenlandsk pris ned til importprisen, innenlandsk produksjon ned, forbruk opp, differansen importeres; KO opp, PO ned, **SO opp — gevinsttrekanten vises og forklares** (kjøpernes gevinst overstiger produsentenes tap); speilvendt for **eksport** (verdenspris over): PO opp, KO ned, SO opp. **Eksportrestriksjoner** for å presse innenlandsk pris ned (gass-/strømaktualiteten): innenlandske kjøpere vinner, men SO faller fordi **alternativverdien (verdensmarkedsprisen) overstiger innenlandsk betalingsvillighet** for de omdirigerte enhetene — samme alternativkostnadslogikk som 3.5. Komparative fortrinn kort som begrepsberedskap.
- **Oppgavesjangre:** M-handel (= D/F i handelsklær). Mønstereksempel: «Et land åpner for import av en vare der verdensmarkedsprisen ligger godt under dagens innenlandske pris. Vis i figur hva som skjer med pris, produksjon, forbruk og import, og gjør rede for velferdsvirkningene for kjøpere, produsenter og landet samlet.»
- **Typiske feil:** Tro at import gir samlet tap fordi produsentene taper (gevinsttrekanten!); glemme at innenlandsk pris = verdensmarkedspris etter åpning; i eksportrestriksjons-drøftingen: glemme alternativverdien; blande hvem som vinner ved import vs. eksport.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 6:** 4 prøver (6.A lønnssubsidie med deling og helningsforklaring, sjanger J; 6.B substitusjons-/inntektseffekt og tilbakebøyd tilbud verbalt, sjanger J+A; 6.C handelsåpning med fullt velferdsregnskap, sjanger M-handel; 6.D full arbeidsmarkedsoppgave på eksamensnivå à la H2020 med skatt/subsidie-varianter og tips-grensetilfellet, sjanger J).

---

### Del 7 — Beredskap: konsumentteori, spill og nåverdi *(prioritet: KJENNE)*

#### Kapittel 7.1: Konsumentteori: budsjettlinje, indifferenskurver og tilpasning

- **id:** `econ1210-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ1210-6-2`
- **Kapitteltype:** teori
- **description:** Utsatt-eksamenens favoritt: figurapparatet for konsumentens valg — verbalt tilstrekkelig, figurdekomponering er A-nivå.
- **Eksamensbelegg:** Konsumentteori i 2/16 ordinære (V2021; H2023 3a verbalt) — men **4/10 utsatt-sett**, og der som 40 %-oppgaver (V2023-utsatt, H2020-utsatt). Fasit-metaregel: verbal forklaring av substitusjons-/inntektseffekt er tilstrekkelig; figurdekomponeringen er eksplisitt A-nivå; inntektsgrense-knekken på budsjettlinja (V2021 c) eksplisitt «bare A-kandidater». Prioritet: **kjenne** (høyere ved utsatt eksamen).
- **Innholdskontrakt:** Budsjettlinja for to goder ($p_1 x_1 + p_2 x_2 = $ inntekt): helning = relativ pris $-p_1/p_2$; skift ved inntektsendring (parallelt) vs. prisendring (rotasjon). Indifferenskurver: fallende, konvekse, lenger ute = bedre — kun kvalitativt, **aldri nyttefunksjons-algebra**. Optimal tilpasning: høyest oppnåelige indifferenskurve tangerer budsjettlinja. Prisøkning dekomponert i **substitusjonseffekt** (vridning langs indifferenskurven) og **inntektseffekt** (kjøpekraften faller) — verbalt først, figurbeskrivelse som A-nivå-tillegg. Anvendelsene i belagte oppgaver: arbeid/fritid (gjenbruker 6.2), sparing over to perioder (renteøkningens tvetydighet), støtteordning med inntektsgrense → knekk i budsjettlinja (A-varianten, kort). Indifferenskurve som begrepsberedskap (1 utsatt-forekomst).
- **Oppgavesjangre:** M-konsument. Mønstereksempel: «En student bruker hele stipendet på mat og alt annet. Tegn budsjettlinja, forklar hva helningen viser, og vis hvordan tilpasningen endres når matprisene stiger — pek på substitusjons- og inntektseffekten.»
- **Typiske feil:** Algebra med nyttefunksjoner (testes aldri); feil helningstolkning; blande substitusjons- og inntektseffekt; tegne indifferenskurver som krysser.
- **Quiz: 15 · Flashcards: 15**

#### Kapittel 7.2: Spillteori: 2×2-matrisen, Nash og fangens dilemma

- **id:** `econ1210-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ1210-5-4`
- **Kapitteltype:** teori
- **description:** Beredskapspakken: sette opp spillmatrisen fra tekst, finne Nash-likevekter og vurdere Pareto — vedlikeholdt på billigste måte.
- **Eksamensbelegg:** Sjanger M-spill i 4/16 sett (H2018, V2019, H2019, V2020) — **ingen forekomst siden V2020**, men «Nash-likevekt» var fast begrepsspørsmål 2018–2020 (3+1 forekomster) og temaet står i emnebeskrivelsen; V2020 c spurte om gjentatt spill/tit-for-tat. Kobling til konkurransepolitikk (kartellets ustabilitet) er den varige verdien. Prioritet: **kjenne** (comeback-beredskap, lav vedlikeholdskostnad).
- **Innholdskontrakt:** Fra tekst til **2×2-spillmatrise** (spillere, strategier, utfall i hver celle); beste-svar-markering (fasitene bruker sirkler rundt beste svar); **Nash-likevektens tre likestilte formuleringer** — kortversjonen «ingen angrer gitt de andres valg» skal med; dominerende strategi; **Pareto-vurdering** av likevekten (fangens dilemma: Nash-likevekten er ikke Pareto-optimal); veier ut: gjentatt spill, tit-for-tat, stilltiende samarbeid; koblingen til kap. 5.4: prissamarbeid gir monopolutfall → forbudt, og dilemmaet forklarer hvorfor karteller sprekker. Flere Nash-likevekter i koordineringsspill nevnes kort.
- **Oppgavesjangre:** M-spill + A. Mønstereksempel: «To entreprenører skal samtidig velge høy eller lav pris i en anbudskonkurranse [utfallstabell oppgitt]. Sett opp spillet, finn eventuelle Nash-likevekter, avgjør om utfallet er Pareto-optimalt, og forklar hvordan gjentatte anbudsrunder kan endre bildet.»
- **Typiske feil:** Finne bare én av flere Nash-likevekter; blande Nash-likevekt og Pareto-optimalitet; lese matrisen feil (rad/kolonne); glemme «gitt de andres valg» i definisjonen.
- **Quiz: 10 · Flashcards: 15**

#### Kapittel 7.3: Nåverdi

- **id:** `econ1210-7-3` · **number:** 7.3 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Beredskapsformlene: diskontering, evigvarende strøm og lønnsomhetsvurdering med tabell.
- **Eksamensbelegg:** Nåverdi i 4/16 sett (H2018, V2019, H2019, V2021) — fast begrepsspørsmål 2018–2019 (3+1 forekomster), **ingen forekomst siden V2021**; V2021 ga en diskonteringstabell og ba om lønnsomhetsvurdering ved 3 % mot 5 %. Prioritet: **kjenne** (raskt lært, raskt vedlikeholdt).
- **Innholdskontrakt:** $\text{NV} = \frac{y}{(1+r)^t}$ med *hvorfor*-forklaringen (beløp på ulike tidspunkter må gjøres sammenlignbare; en krone i dag kan plasseres til rente $r$); nåverdien av en betalingsrekke som sum; **evigvarende strøm** $\text{NV} = \frac{y}{r}$; lønnsomhetsvurdering: invester hvis nåverdien av fremtidige gevinster overstiger kostnaden i dag — med diskonteringstabell (høyere $r$ → lavere NV → færre prosjekter lønnsomme); renta som alternativkostnad.
- **Oppgavesjangre:** M-nåverdi + A. Mønstereksempel: «Et tiltak koster 90 i dag og gir 20 per år i seks år. Bruk tabellen over diskonteringsfaktorer til å avgjøre om tiltaket er lønnsomt ved 3 % og ved 5 % rente, og forklar hvorfor konklusjonen avhenger av renta.»
- **Typiske feil:** Diskontere med feil eksponent; summere udiskonterte beløp; snu brøken i evigvarende strøm; mangle *hvorfor*-forklaringen når begrepet spørres.
- **Quiz: 10 · Flashcards: 10**

**Prøve-kvote Del 7:** 4 prøver (7.A konsumentteori med budsjettlinje og tilpasning, sjanger M-konsument; 7.B spillmatrise fra tekst med Nash og Pareto, sjanger M-spill; 7.C nåverdi med diskonteringstabell, sjanger M-nåverdi; 7.D blandet utsatt-eksamen-beredskap: konsumentteori 40 %-format + spill/nåverdi-kortsvar, sjanger M).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Begrepsdrill: gjengangerne i oppgave 1

- **id:** `econ1210-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–7
- **Kapitteltype:** drill
- **description:** Presisjonstrening på hele begrepsrepertoaret: definisjon + figur der det er naturlig + eksempel — og pluss-markørene som løfter svaret.
- **Eksamensbelegg:** Sjanger A i alle sett (10–20 %, 2–3 begreper — sikre poeng). Gjengangerlisten med forekomster (ordinære + utsatt): kollektivt gode / ikke-rivaliserende gode (6+4), samfunnsøkonomisk overskudd (5+1), markedets etterspørselskurve (4+3), markedets tilbudskurve (4+2), eksterne virkninger (3+3), nåverdi (3+1), Nash-likevekt (3+1), konsumentoverskudd (0+3), monopolets marginalinntekt (1+1), universelle vs. behovsprøvde velferdsordninger (1), alternativkostnad/komparative fortrinn (1), etterspørselselastisitet (1), indifferenskurve (0+1), Lorenz-kurve (0+1). Sensor honorerer alltid «det lille ekstra»: SO for enhver mengde uten priser; skift skilt fra bevegelse langs kurven; høyden på E = marginal betalingsvillighet, høyden på T = marginalkostnad; begge definisjoner av kollektivt gode. Prioritet: **kunne** (sikre poeng).
- **Innholdskontrakt:** Malen «presis definisjon + figur der det er naturlig + ett konkret eksempel + pluss-markøren» demonstreres; deretter drillbank som dekker ALLE gjengangerbegrepene over (hvert med fasitsvar i eksakt oppgave 1-format og henvisning til teorikapitlet: E-kurve → 1.1, T-kurve → 1.2, SO/KO → 2.1, eksternaliteter → 4.1, kollektivt gode → 4.3, MI → 5.1, velferdsordninger → 4.3, alternativkostnad → 3.5/6.3, elastisitet → 1.4, Nash → 7.2, nåverdi → 7.3, indifferenskurve → 7.1, Lorenz → 4.3). Metaregelen om henvisning: begrep definert i oppgave 1 kan det henvises til senere i settet i stedet for å gjentas.
- **Oppgavesjangre:** A. Mønstereksempel: «Gjør kort rede for hva som menes med et kollektivt gode. Gi ett eksempel, og forklar hvorfor markedet gjerne tilbyr for lite av slike goder.»
- **Typiske feil:** Definisjon uten eksempel; bare én definisjon av kollektivt gode; utelate pluss-markøren (koster toppoenget); utflytende svar som stjeler tid fra 50–60 %-oppgaven.
- **Quiz: 15 · Flashcards: 45**

#### Kapittel 8.2: Fra nyhetsbilde til standardgrep: aktualitetstrening

- **id:** `econ1210-8-2` · **number:** 8.2 · **estimatedMinutes:** 40 · **prerequisites:** `econ1210-3-4`, `econ1210-4-4`
- **Kapitteltype:** teori (metodetrening)
- **description:** Oppgavene kler alltid nyhetsbildet på et standardgrep — treningen i å kjenne igjen hvilket.
- **Eksamensbelegg:** Analysen (nivå 3 punkt 16): settene oversetter alltid aktualiteter til modellen — koronanedstenging (2020), gasskrise (V2022), strømpriser (H2022, V2024), sabotasje à la Nord Stream (H2024, V2025-utsatt, H2025), klimasøksmålet (V2025), skattefrie tips (V2025-utsatt). Prioritet: **kjenne** (men billig forsikring mot å bli forvirret av innpakningen).
- **Innholdskontrakt:** Oversettelsestabellen som SKAL med: produksjonskutt/sabotasje/utestengelse → T-kurven inn + lekkasje-poeng (sjanger D); kostnadsøkning (lønn, energi, sikkerhetskrav) → T opp; popularitetsbølge/inntektsvekst → E ut; prisstøtte/«billigere for folk» → subsidie (sjanger E); pristak/«makspris på strøm» → maksimalpris med kortside (G); «bør bransje X slippe avgiften» → alternativkostnad/differensiert sats (L + 4.2); «hvordan kutte utslipp billigst» → trekriterie-rammen (H); «én dominerende aktør» → monopolpakken (I); «lønnstilskudd/skatt på arbeid» → arbeidsmarkedsapparatet (J); «forby prissamarbeid» → kartell (5.4). Deretter: 6–8 korte treningscase der studenten kun skal *identifisere* grep og kurve (ikke fullføre analysen). Merk eksplisitt: innpakningen er ny hvert år, grepene er de samme.
- **Oppgavesjangre:** Forberedelse til B–L. Mønstereksempel: «En nyhetsartikkel melder at flere land vil holde tilbake eksport av korn for å dempe matprisene hjemme. Angi hvilket standardgrep fra pensum casen tilsvarer, hvilken kurve som påvirkes i hjemmemarkedet, og hvilken velferdsanalyse som følger.»
- **Typiske feil:** La den aktuelle innpakningen styre mot moralsk drøfting i stedet for modellgrep; velge skift i feil kurve fordi casen er uvant; overse at én hendelse kan være to grep (kostnadsøkning + subsidie som svar).
- **Quiz: 10 · Flashcards: 10**

#### Kapittel 8.3: Øvingseksamen 1: klassisk mal med stykkskatt og monopol

- **id:** `econ1210-8-3` · **number:** 8.3 · **estimatedMinutes:** 240 · **prerequisites:** `econ1210-8-1`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett etter 20/50/30-malen (2018–2023-standarden) med skatt i kjernen og monopol som oppgave 3.
- **Eksamensbelegg/miks:** Speiler et typisk V2019/H2023-sett: **Oppgave 1 (20 %):** tre begreper fra gjengangerlisten (markedets tilbudskurve med forutsetninger; samfunnsøkonomisk overskudd med vilkårlig-mengde-poenget; eksterne virkninger med eksempel). **Oppgave 2 (50 %), FK-marked med aktuelt case (nyskrevet — f.eks. et transportmarked etter nye sikkerhetskrav):** (a) forutsetninger + likevekt grafisk og algebraisk; (b) elastisitet i likevekt med verbal tolkning; (c) kostnadsøkning → T-skift med helningsdrøfting; (d) stykkskatt med firetrinnsmetoden inkl. algebraisk deling og ekvivalens-poeng; (e) velferdsvurdering med dødvektstap; (f) verbal «som samfunnsøkonom»-hale om kompensasjonskrav fra bransjen. **Oppgave 3 (30 %), monopol:** MI-dekomponering → tilpasning → velferd → reguleringsdrøfting (5.5-kjeden). Alle oppgaver nyskrevne med pene tall. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (med figurbeskrivelser i ord), med `tip`-notat om delpoeng/vekting og tidsbudsjett (48 min / 120 min / 72 min).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 2: post-H2024-malen med subsidie, lekkasje og klima

- **id:** `econ1210-8-4` · **number:** 8.4 · **estimatedMinutes:** 240 · **prerequisites:** `econ1210-8-3`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett etter den nyeste malen (H2024/V2025: 10/50/40) med sabotasje-varianten, subsidie-paradokset og trekriterie-oppgave.
- **Eksamensbelegg/miks:** Speiler H2024/V2025: **Oppgave 1 (10 %):** to begreper (kollektivt gode med begge definisjoner; markedets etterspørselskurve). **Oppgave 2 (50 %), FK-marked med aktuelt kutt-case (nyskrevet — f.eks. anlegg satt ut av spill i et råvaremarked):** (a) forutsetninger; (b) algebraisk likevekt; (c) elastisitet med tolkning; (d) anleggsbortfall → T inn, med **lekkasje-poenget** eksplisitt spurt; (e) stykksubsidie som krisehjelp: firetrinnsmetoden med deling (kalibrert så kjøper får en liten andel — bratt tilbud); (f) **subsidie-paradokset**: «alle tjener — hvorfor faller SO?»; (g) verbal alternativkostnads-hale. **Oppgave 3 (40 %), klimapolitikk:** trekriterie-vurdering av avgift vs. omsettelige kvoter vs. direkte regulering + gratiskvote-nyansen + grensene for prising (4.4-kjeden); kan besvares verbalt eller med figur. Løsningsforslag som A-besvarelse med vektings-`tip` og tidsbudsjett (24 min / 120 min / 96 min).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 8.5: Øvingseksamen 3: H2025-varianten med makspris og kvotemarked

- **id:** `econ1210-8-5` · **number:** 8.5 · **estimatedMinutes:** 240 · **prerequisites:** `econ1210-8-4`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett etter 10/60/30-varianten med tung FK-oppgave: prisregulering, grensetilfelle og kvotemarked som oppgave 3.
- **Eksamensbelegg/miks:** Speiler H2025 (10/60/30): **Oppgave 1 (10 %):** to begreper (etterspørselselastisitet med tolkningskrav; konsumentoverskudd). **Oppgave 2 (60 %), FK-marked i energi-case (nyskrevet):** (a) forutsetninger (pristakere, homogent gode — eksplisitt); (b) likevekt grafisk + algebraisk; (c) tilbudskutt med lekkasje; (d) **maksimalpris**: kortside-regelen, rasjonering, tilleggstap, de tre effektivitetskriteriene; (e) grensetilfelle: horisontal T-kurve → hvem bærer en avgift nå?; (f) fordelings-vs.-effektivitet-drøfting (kontantstøtte som alternativ til pristak — strekknivå). **Oppgave 3 (30 %), kvotemarked:** omsettelige kvoter i praksis — hvordan handel utjevner marginale rensekostnader, gratis vs. auksjonert tildeling mot alle tre kriterier (H2025 c-varianten). Løsningsforslag som A-besvarelse med vektings-`tip` og tidsbudsjett (24 min / 144 min / 72 min). Sammen dekker de tre settene sjangrene A, B, C, D, E (skatt og subsidie), F, G, H, I, L — J og M dekkes av prøvene 6.D og 7.A–7.D.
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne prøver (delen består av drill + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 10 | 10 | 0 |
| 1 | 1.1–1.6 | 20+20+25+20+25+15 = **125** | 20+20+20+15+20+10 = **105** | 4 |
| 2 | 2.1–2.2 | 25+15 = **40** | 25+15 = **40** | 4 |
| 3 | 3.1–3.5 | 25+25+20+20+10 = **100** | 20+20+15+10+10 = **75** | 4 |
| 4 | 4.1–4.4 | 20+25+20+15 = **80** | 20+25+25+10 = **80** | 4 |
| 5 | 5.1–5.5 | 20+15+15+15+15 = **80** | 15+15+15+15+10 = **70** | 4 |
| 6 | 6.1–6.3 | 15+10+10 = **35** | 10+10+10 = **30** | 4 |
| 7 | 7.1–7.3 | 15+10+10 = **35** | 15+15+10 = **40** | 4 |
| 8 | 8.1–8.5 | 15+10+5+5+5 = **40** | 45+10+0+0+0 = **55** | 0 (3 øvingseksamener) |
| **Sum** | **34 kap.** | **545 ≥ 500 ✓** | **505 ≥ 500 ✓** | **28 + 3 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: Del 1 + Del 3 (FK-kjernen som bærer 50–60 % av
eksamenspoengene) står for 225 av 545 quiz.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord) og poengfordeling. Omfang i minutter.

**Del 1 — Markedet**
1. Prøve 1.A (30 min): Begreper — E-kurven, T-kurven (anleggsmodellen) og likevektsforutsetningene, med pluss-markører (sjanger A).
2. Prøve 1.B (35 min): Grafisk + algebraisk likevekt med elastisitetsberegning og verbal tolkning; én verbal elastisitets-resonneringsoppgave à la V2025 (sjanger B + C).
3. Prøve 1.C (40 min): Skiftbatteri — fire hendelser fra katalogen inkl. ett samtidig skift med ubestemt pris og én helningsdrøfting (sjanger D).
4. Prøve 1.D (50 min): Full åpningskjede på eksamensnivå: forutsetninger → algebra → elastisitet → anleggsbortfall med lekkasje-poeng og tredjeparts-regnskap (sjanger B + C + D).

**Del 2 — Velferd**
1. Prøve 2.A (25 min): SO-, KO- og PO-begrepene med arealer og vilkårlig-mengde-poenget (sjanger A + F).
2. Prøve 2.B (30 min): Trekriterie-sjekklisten anvendt på et oppgitt inngrep (sjanger F + G-fundament).
3. Prøve 2.C (35 min): Velferdsregnskap etter kurveskift med tallfestede trekanter (lineære kurver) (sjanger F).
4. Prøve 2.D (40 min): Blandet begreps- og velferdsprøve på eksamensnivå, inkl. «kan SO beregnes uten å kjenne prisen?» (sjanger A + F).

**Del 3 — Skatt, subsidie og prisregulering**
1. Prøve 3.A (40 min): Stykkskatt — full firetrinnsmetode med algebraisk deling, verbal tolkning og ekvivalens-felle (sjanger E + F).
2. Prøve 3.B (40 min): Stykksubsidie — deling + subsidie-paradokset i full skriftlig form (sjanger E + F).
3. Prøve 3.C (35 min): Maksimalpris på strøm — kortside, rasjonering, tilleggstap, tre kriterier; minstepris speilvendt kort (sjanger G).
4. Prøve 3.D (60 min): Integrert eksamenskjerne på eksamensnivå: skift → subsidie med deling → SO-paradoks → «som samfunnsøkonom»-hale (sjanger D + E + F + L — speiler oppgave 2-strukturen).

**Del 4 — Eksternaliteter, klima og markedssvikt**
1. Prøve 4.A (30 min): Eksternalitets-begrep + Pigou-figur med unntaks-poenget (avgift som fjerner tap) (sjanger A + F).
2. Prøve 4.B (40 min): Trekriterie-vurdering — avgift vs. omsettelige kvoter vs. direkte regulering, med talleksempel for ulike satser (sjanger H).
3. Prøve 4.C (30 min): Markedssvikt-katalogen — fem tiltak som skal begrunnes (sjanger K).
4. Prøve 4.D (55 min): Full klimaoppgave i oppgave 3-format (30–40 %-nivå): virkemiddelpakke med gratiskvote-nyansen, fritaks-drøfting og grensene for prising (sjanger H + L).

**Del 5 — Monopol og markedsmakt**
1. Prøve 5.A (35 min): MI-dekomponering og tilpasning med figur; kontrollpunktet pris-fra-E testes eksplisitt (sjanger I).
2. Prøve 5.B (35 min): Velferdsvirkninger, fordeling inkl. tredjeparter, og markedsmaktens grenser (elastisitet/konkurranse) (sjanger I + F).
3. Prøve 5.C (40 min): Naturlig monopol — underskudd ved p = c, lønnsomhetsvilkåret KO > B, reguleringstriaden med informasjonsproblemet (sjanger I).
4. Prøve 5.D (60 min): Full monopoloppgave i oppgave 3-format på eksamensnivå, inkl. monopolistisk konkurranse- eller kartellhale (sjanger I).

**Del 6 — Arbeidsmarked og handel**
1. Prøve 6.A (35 min): Lønnssubsidie med algebraisk deling og helningsforklaring (slakt tilbud-varianten) (sjanger J).
2. Prøve 6.B (25 min): Substitusjons- vs. inntektseffekt og tilbakebøyd arbeidstilbud, verbalt (sjanger J + A).
3. Prøve 6.C (35 min): Handelsåpning med fullt velferdsregnskap + eksportrestriksjons-drøfting (sjanger M-handel).
4. Prøve 6.D (50 min): Full arbeidsmarkedsoppgave på eksamensnivå à la H2020: likevekt → skatt på arbeidsgiver → subsidie til arbeidstaker → grensetilfellet horisontal T (tips-varianten) (sjanger J).

**Del 7 — Beredskap**
1. Prøve 7.A (35 min): Konsumentteori — budsjettlinje, tilpasning, prisendring med S/I-dekomponering (verbal + figurbeskrivelse) (sjanger M-konsument).
2. Prøve 7.B (30 min): Spillmatrise fra tekst — Nash, dominerende strategi, Pareto, gjentatt spill (sjanger M-spill).
3. Prøve 7.C (20 min): Nåverdi med diskonteringstabell og lønnsomhetsvurdering ved to renter (sjanger M-nåverdi).
4. Prøve 7.D (50 min): Utsatt-eksamen-beredskap: konsumentteorioppgave i 40 %-format + spill-/nåverdi-kortsvar (sjanger M — speiler utsatt-settenes profil).

### Øvingseksamener (3 komplette sett — se kap. 8.3–8.5)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 8.3) | Klassisk 20/50/30 (2018–2023) | 3 begreper 20 % + FK-oppgave 50 % (likevekt → elastisitet → kostnadsskift → stykkskatt m/deling → velferd → verbal hale) + monopol 30 % |
| Øvingseksamen 2 (kap. 8.4) | Post-H2024 (10/50/40) | 2 begreper 10 % + FK-oppgave 50 % (kutt-case m/lekkasje → subsidie m/deling → subsidie-paradoks → alternativkostnads-hale) + klimapolitikk trekriterier 40 % |
| Øvingseksamen 3 (kap. 8.5) | H2025-varianten (10/60/30) | 2 begreper 10 % + tung FK-oppgave 60 % (kutt m/lekkasje → makspris m/kortside og tre kriterier → horisontal-T-grensetilfelle → fordelingsdrøfting) + kvotemarked 30 % |

Til sammen dekker de tre settene sjangrene A–I + L; J og M dekkes av prøvene
6.A–6.D og 7.A–7.D (arbeidsmarked og dvale-stoff har ikke båret en ordinær
eksamen siden 2023 og prioriteres derfor i prøvene, ikke i øvingseksamenene).

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen, den faste tredelingen (begreper + stor FK-oppgave + klima/monopol), vektingshistorikken og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer: perfekt (Del 1–5: FK-analysen komplett, velferdsvurderingene med subsidie-paradokset, karbonprising med trekriterie-rammen, prisregulering, monopolpakken), kunne (begrepsrepertoaret, alternativkostnadsdrøftingen, arbeidsmarkedet, markedssvikt-katalogen, handel, monopolistisk konkurranse/kartell), kjenne (spillteori, nåverdi, konsumentteori-figuren, fellesressurser/Lorenz, aktualitetsberedskap).
3. **Sjangerguiden** — oppgavetypene A–M med løsningsoppskriftene fra drillkapitlene (1.6, 3.4, 4.4, 5.5, 8.1) i kortform: firespørsmåls-malen for skift, firetrinnsmetoden for skatt/subsidie, trekriterie-algoritmen, monopolkjeden, begrepsmalen.
4. **Sensorreglene** — metareglene (figur + forklaring er én leveranse; tall skal tolkes; rekkefølge-toleranse; valgfrihet verbal/grafisk og kjøper/selger; seminarnærhet) + toppsjikt-listen (SO uten priser, algebraisk deling m/helningskobling, ubestemte totaleffekter, alternativkostnadsresonnementet, andreordens-poengene: lekkasje, tredjeparter, gratiskvoter, rasjoneringstillegg) fra kap. 0.1.
5. **Feilkatalogen** — de 12 typiske feilene samlet (skift/bevegelse; feil skiftretning; «hvem betaler formelt»; subsidie-paradokset; pris fra MI-kurven; tall uten tolkning; kortside-regelen; lekkasjen; SO-definisjonen; miljø-moralessay; glemte tredjeparter; umerkede figurer), hver med henvisning til kapitlet som forebygger den.
6. **Formelark i emnets notasjon** — én side: $x = a - bp$, $x = cp - d$, $p^* = \frac{a+d}{b+c}$, $\varepsilon = \frac{\Delta x}{\Delta p}\cdot\frac{p}{x}$, delingsformelen $\frac{c}{b+c}$ / $\frac{b}{b+c}$, $\text{MI} = p + \frac{\Delta p}{\Delta x}x$ (MI dobbelt så bratt som lineær E), $c(x) = cx + B$ med vilkåret KO $> B$, $\text{NV} = \frac{y}{(1+r)^t}$ og $\frac{y}{r}$ — med markering av hva som skal *utledes/tolkes* (delingsbrøken, MI-dekomponeringen) vs. kun brukes.
7. **Figurbiblioteket** — de ~10 standardfigurene i ord (markedskryss; skift; skatt/subsidie med deling og trekant; makspris med kortside; Pigou; monopol med MI; naturlig monopol; handelsåpning; budsjettlinje/indifferenskurver; spillmatrise) med merkekravene per figur.
8. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 0 → 1 → 2 → 3 (kjernen først), deretter 4 → 5, så 6–7, prøver underveis, øvingseksamenene de tre siste ukene under tidspress (240 min med vektstyrt tidsbudsjett; terp seminar-/prøveoppgavene — undervisningsnærhet er dokumentert effektivt).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ1210` med alle 34 kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra makrostruktur-tabellen (§2).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–M og frekvenstallene som resten refererer til.
3. **Kjernen i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3 (FK-apparatet som bærer 50–60 % av eksamen).
4. Del 4 → Del 5 (oppgave 3-rotasjonen), deretter Del 6 → Del 7.
5. Del 8 til slutt (begrepsdrillen og øvingseksamenene gjenbruker alt).
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene ferdigstilles; prøvene (§4) legges i prøvekapitler per del etter byggekontraktens spesifikasjon (`econ1210-<del>-prove`, chapterNumber `<del>.P`).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (generer helst via `json.dump`; husk å escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON (`\\frac`); ingen unicode-brøker; konsistent $p^*$, $x^*$, $\varepsilon$, MI, MK.
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ1210-filer — forbudte termer: «D-kurven», «S-kurven», «q =» som mengdesymbol, «MR =» som primærterm (MI er standard; MR kun i parentes ved første forekomst), invers etterspørsel på formen «p = … − …x» som oppgaveform, «Cournot», «Bertrand» (unntatt én kvalitativ setning i 5.4), nyttefunksjons-algebra i 7.1; påkrevd: $x$, $p$, E-kurven, T-kurven, KO/PO/SO, MI, MK, $t$, $s$, $B$, $c$, $x = a - bp$, $x = cp - d$, $\frac{c}{b+c}$.
- [ ] **Anleggsmodellen overalt**: T-kurve-forklaringer og skiftmekanismer i anleggsspråk (enhetskostnader/antall anlegg); klassisk produsentteori KUN i den markerte collapsible-en i kap. 1.2 — grep etter «gjennomsnittskostnad» utenfor 1.2/3.3/5.3/5.4 skal gi null treff.
- [ ] **Figur + mekanisme**: hvert eksempel og løsningsforslag med figur inneholder både figurbeskrivelse i ord (akser, kurver, punkter, arealer navngitt) og verbal mekanisme; alle elastisiteter og delingsbrøker er verbalt tolket.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette skjelettet), Forkunnskaper-blokk med lenker + Symbol- og formelliste-`collapsible` (per delkapittel), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 545 og flashcard-sum ≥ 505** per kvotetabellen (kontrollsummér mot §3-tabellen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener; settene og prøvene dekker samlet sjangrene A–M minst én gang.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne case og bransjer, egne formuleringer; ingen formuleringer fra reelle sett eller sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og skal varieres videre, ikke kopieres ordrett inn); kalibreringsverdiene fra reelle fasiter brukes kun til å velge vanskelighetsgrad, aldri som oppgavetall; pensum (Krugman & Wells, CORE, NOU 2015:15) refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.
