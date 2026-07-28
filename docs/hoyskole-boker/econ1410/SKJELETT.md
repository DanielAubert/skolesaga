# Bokskjelett: ECON1410 Internasjonal økonomi — eksamensrettet lærebok

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
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (11 ordinære sett V2015–V2025, 10 sensorveiledninger og
> 4 utsatt-sett med veiledning). Arketype: **DNA-regnefag** (`DNA-regnefag.md`),
> men med en avgjørende sjangervridning: **ECON1410 er overveiende GRAFISK og
> VERBAL komparativ statikk, ikke algebra** — oppgavene er «tegn og forklar»,
> ikke «regn ut». Kapittel-DNA-ene (teori/drill/øvingseksamen) fra DNA-regnefag
> gjelder, men figur-i-ord- og verbal-mekanisme-sjangeren lånes fra
> `econ1210/SKJELETT.md` (grafisk mikroøkonomi) og er beskrevet i §1 under.
> Alle mønstereksempler i skjelettet er omskrivninger; forfatteren skal variere
> dem videre, aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ1410` |
| Tittel | **ECON1410 Internasjonal økonomi** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO) |
| Arketype | Regnefag (men grafisk/verbal komparativ statikk — ikke algebradrevet) |
| Antall kapitler | **31** (1 eksamenskart + 27 tema/beredskap + 3 øvingseksamener) |
| Estimert totaltid | **≈ 2 095 min ≈ 35 timer** |
| Quiz totalt | **510** (krav ≥500) |
| Flashcards totalt | **515** (krav ≥500) |

**Pitch (ett avsnitt):** ECON1410-eksamen har fulgt samme mal i årevis: tre
hovedoppgaver der (1) en begreps- eller «kilder til gevinster»-oppgave (15–30 %)
åpner, (2) én stor grafisk Heckscher-Ohlin-basert fordelingsoppgave (40–50 %)
bærer settet, og (3) en handelspolitikk- eller stordriftsoppgave (20–30 %)
avslutter, ofte med en kort verbal drøfting til slutt. Denne boka er kalibrert
mot nettopp det. Den bygger hele apparatet rundt **fire modellfamilier** —
Ricardo (komparative fortrinn), Heckscher-Ohlin med Stolper-Samuelson og
Rybczynski, Ricardo-Viner (spesifikke faktorer) og stordriftsfordeler/imperfekt
konkurranse — pluss toll i partiell likevekt. Den driller emnets viktigste
enkeltferdighet: å oversette et nyhetsbilde til «hvilken av de fire modellene
passer + kort eller lang sikt + stort eller lite land», og å svare på «tegn og
forklar» med en **korrekt figur beskrevet i ord OG mekanismen i ord**. Emnets
klassiske strykfelle — å blande kort sikt (Ricardo-Viner) og lang sikt
(Stolper-Samuelson/Rybczynski) på samme prisendring — får sitt eget drillkapittel.
Valutakurs, betalingsbalanse og åpen makro holdes helt utenfor (0 % på eksamen —
det hører til ECON1310), likeså formell tollunion-/EU-teori.

**Kritisk sjangerregel (gjelder HELE boka):** «Tegn/illustrer og forklar» eller
«ved hjelp av en figur» er hovedinstruksen i de tunge deloppgavene. Sensor gjentar
i nesten hver veiledning: **«Det er ikke nok bare med tekst, og det er ikke nok
bare med grafer.»** Derfor skal alle eksempler og løsningsforslag i boka inneholde
(i) en presis **figurbeskrivelse i ord** (hva står på aksene, hvilke kurver, gamle
og nye punkter, arealer/skift navngitt) og (ii) den **verbale mekanismen** (hvorfor
kurven skifter/hvem vinner og taper). Manglende figur der figur er etterspurt gir
tallfestet trekk (f.eks. **−2 poeng** for feil/manglende PMK-form); figur uten
forklaring gir heller ikke full pott. Motsatt: rene begreps- og drøfteoppgaver
besvares **verbalt**, og en figur der det ikke bes om gir ikke uttelling.

**Kritisk figurregel (gjelder HELE boka).** Fire faste figurgrep som sensor
straffer eller belønner eksplisitt, og som boka skal innarbeide overalt:
1. **PMK tegnes skjevt** mot sektoren landet har komparativt fortrinn i (autarki).
   Mangler dette: **−2 poeng**. PMK er en **rett linje** i Ricardo (helning =
   alternativkostnad) og **buet** i Heckscher-Ohlin (faktorsubstitusjon) — de to
   forveksles og skal aldri blandes.
2. **Både autarki OG frihandel** tegnes når den store HO-oppgaven ber om
   handelsåpning. Bare autarki-figur: **−2 poeng**.
3. **Navngi teoremet eksplisitt** (Heckscher-Ohlin, Stolper-Samuelson, Rybczynski)
   — det gir egne poeng.
4. **List vinnere og tapere eksplisitt** i alle fordelings-, toll- og
   migrasjonsoppgaver — egne poeng, og glemmes ofte.

**Kritisk metoderegel (bokas ryggrad):** To metodiske akser avgjør oftest svaret,
og begge må sitte automatisk:
- **Kort sikt vs. lang sikt.** Kort sikt = noen faktorer er **spesifikke/immobile**
  → **Ricardo-Viner / badekarsdiagrammet**. Lang sikt = alle faktorer **mobile**
  → **Heckscher-Ohlin / Stolper-Samuelson / Rybczynski**. Samme prisendring gir
  ulikt fordelingsutfall på de to horisontene. Å blande dem er den klassiske
  strykfellen (feilkatalog #3) → eget drillkapittel (kap. 3.4).
- **Stort vs. lite land.** Et **stort** land påvirker verdensmarkedsprisen (og
  dermed sitt eget **bytteforhold**); et **lite** land er pristaker. Skillet avgjør
  toll (optimal toll), økonomisk vekst og faktorvekst (Rybczynski med prisendring).
  Dette er den nest viktigste røde tråden → drilles på tvers (kap. 4.2, 3.3, 6.2)
  og oppsummeres i kap. 7.3.

**Kritisk notasjonsregel (gjelder HELE boka).** Følg Krugman, Obstfeld & Melitz,
*International Economics: Theory and Policy* (pensum; sensorveiledningene refererer
eksplisitt «ihht Krugman & Obstfeld»). Standardnotasjon:
- **PMK** = produksjonsmulighetskurve; **KMK** = konsummulighetskurve (= isovalue-/
  budsjettlinje, betegnes ofte **VV** i lærebokfigurene).
- **MPL** = arbeidets marginalprodukt; **reallønn** $w/p = \text{MPL}$.
- Alternativkostnad $a_C/a_F$ (arbeidstimer per enhet); relativ pris $P_C/P_F$;
  relativ faktorpris $w/r$; faktorintensitet $K/L$.
- **Tollarealer A–E** (–G på eksportlandssiden): A = produsentoverføring,
  B = effektivitetstap (overproduksjon), C = tollinntekt, D = effektivitetstap
  (underkonsum), E = bytteforholdsgevinst for stort land.
- **Monopolistisk konkurranse (PP–CC):** priskurve $P = c + 100/n$ (fallende i $n$),
  kostnadskurve $AC = c + nF/S$ (stigende i $n$); likevekt der $P = AC$.
- Bruk relativ tilbudskurve **RS** og relativ etterspørsel **RD** i Ricardo.
- Ingen tunge algebraiske utledninger: Ricardo-alternativkostnad (tall) og
  PP–CC-uttrykkene er det eneste «regnbare»; alt annet er grafisk/verbal
  komparativ statikk. Matematikk skrives i LaTeX (`$...$`), norsk bokmål.

**Forbudte termer (grep-liste for fase 6-verifisering — skal gi null treff):**
valutakurs, vekslingskurs, exchange rate, betalingsbalanse, driftsbalanse,
current account, renteparitet, pengepolitikk, sentralbank; «handelsskaping»/
«handelsvridning»/formell tollunion-mekanikk; tunge nyttefunksjons-/derivasjons-
utledninger. Disse temaene er **0 % på eksamen** og skal ikke bygges (unntak: en
kort «bør kjenne til / hører til ECON1310»-omtale i Del 0, se kap. 0.1).

**Kryssbok-lenker (leserkrav).** Emnet forutsetter mikroøkonomisk grunnlag
(markedskryss, konsument- og produsentoverskudd, indifferenskurver,
arbeidsmarked). Der forkunnskapen ikke dekkes i boka selv, lenkes det til
**ECON1210 Mikroøkonomi 1** med markdown-lenker på formen
`[tittel](/econ1210/<chapterId>)`. Relevante mål: markedslikevekt
(`econ1210-1-3`), KO/PO/SO-geometrien (`econ1210-2-1`), stykkskatt i partiell
likevekt (`econ1210-3-1`, mønster for tollarealene), prisregulering
(`econ1210-3-3`), konsumentteori/indifferenskurver (`econ1210-7-1`), arbeidsmarked
(`econ1210-6-1`). **NB til fase 6:** ECON1210 må være publisert for at lenkene
skal peke på eksisterende kapitler (jf. README «lenk kun til kapitler som
finnes»). Er ECON1210 ikke live når ECON1410 verifiseres, **nedgraderes** hver
slik lenke til en ren tekstomtale («forutsetter mikroøkonomisk overskuddsanalyse
fra ECON1210») — aldri en død lenke.

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. |
| 1 | Komparative fortrinn og Ricardo-modellen | 4 | Komparativt fortrinn/alternativkostnad har **91 % frekvens** — grunnmuren i faget; må defineres presist og illustreres i Ricardo (rett PMK, full spesialisering, RS/RD) → nivå 1 «perfekt» → 3 teorikapitler + drill. |
| 2 | Heckscher-Ohlin: autarki → frihandel | 4 | Den store grafiske fordelingsoppgaven: **73 % frekvens** og alltid kjernen i den tyngste oppgaven (40–50 % av settet) → nivå 1 «perfekt» → 3 teorikapitler + drill. |
| 3 | Inntektsfordeling: kort sikt vs. lang sikt | 4 | Kjernemetodikken: Stolper-Samuelson (73 %, lang sikt) + Ricardo-Viner (64 %, kort sikt) + Rybczynski (64 %) på samme prisendring; blanding er strykfellen → nivå 1 «perfekt» → 3 teorikapitler + eget kort/lang-sikt-drillkapittel. |
| 4 | Handelspolitikk i partiell likevekt | 4 | Toll for lite land (netto tap b+d, 45 %) og optimal toll for stort land (e−(b+d), tre paneler, 36 %); stort-vs-lite-land-metodikken → nivå 1/2 → 3 teorikapitler (siste kompakt «kjenne») + drill. |
| 5 | Stordriftsfordeler og imperfekt konkurranse | 5 | Interne/eksterne stordrift + monopolistisk konkurranse (PP–CC) **73 % frekvens**, egen oppgave-3-kandidat; næringsklynge/first-mover + heterogene bedrifter (Melitz, 27 %) → nivå 2 «kunne», men høy frekvens → 4 teorikapitler + drill. |
| 6 | Faktorbevegelighet, vekst og politisk økonomi | 3 | Arbeidsmigrasjon (36 %), økonomisk vekst/bytteforhold (18 %, hyppig i utsatt), politisk økonomi (36 %, verbal) → nivå 2/3 → 3 kompakte kapitler. |
| 7 | Eksamenstrening | 6 | Samleoppgaven «kilder til gevinster» (sjanger B, 55 %) + begrepsdrill («forklar 3 av følgende», sjanger A) + aktualitet→modell-oversettelse + 3 komplette øvingseksamener (tre-hovedoppgavers mal). |

**Avvik fra DNA-malen (dokumentert):**
1. **Grafisk/verbal, ikke algebradrevet.** DNA-regnefag forutsetter regne-,
   utlednings- og modelloppgaver med entydige fasitsvar. ECON1410 har nesten
   ingen algebra: oppgavene er «tegn og forklar»/komparativ statikk. Boka låner
   derfor **figur-i-ord + verbal-mekanisme**-sjangeren fra `econ1210/SKJELETT.md`
   (§1 der) i stedet for tallregning. «Gjennomregnet eksamenscase» i
   drillkapitlene betyr her «gjennomtegnet og gjennomforklart case».
2. **Drillkapitler ligger inne i temadelene** (kap. 1.4, 2.4, 3.4, 4.4, 5.5),
   ikke samlet i siste del, fordi de tyngste sjangrene (HO grafisk, kort/lang
   sikt) må drilles umiddelbart etter teorien. Del 7 beholder samleoppgaven,
   begrepsdrillen, aktualitetstreningen og øvingseksamenene.
3. **Kort/lang-sikt-drillen (kap. 3.4)** er bokas ekvivalent til econ1210s
   subsidie-paradoks-side: det metodiske karakterskillet som eksamen bygger en
   hel oppgave rundt fem av de sju siste årene.
4. **Øvingseksamener er 180 min** (ikke 240 som econ1210), fordi ECON1410 er en
   **3-timers** eksamen med **tre hovedoppgaver**.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer til
oppgavetype-katalogen i EKSAMENSANALYSE §3, gjengitt i Del 0: **A** kort
begrepsforklaring («forklar 3 av følgende»), **B** kilder til gevinster ved handel
(samleoppgave), **C** Heckscher-Ohlin grafisk autarki→frihandel, **D**
inntektsfordeling kort sikt vs. lang sikt, **E** Rybczynski/faktorvekst, **F**
handelspolitikk (toll i partiell likevekt), **G** faktorbevegelighet/arbeidsmigrasjon,
**H** stordrift/monopolistisk konkurranse (PP–CC), **I** eksterne stordriftsfordeler/
næringsklynge/first-mover, **J** økonomisk vekst og bytteforhold, **K** politisk
økonomi og institusjoner, **L** åpne drøfteoppgaver. Ricardo grafisk (RS/RD, full
spesialisering) er modellapparatet bak sjanger A og B (EKSAMENSANALYSE §6.1).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes ECON1410

- **id:** `econ1410-0-1` · **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, tre-hovedoppgavers mal, temafrekvensene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 11 ordinære sett (V2015–V2025) + 4 utsatt. Skal gjengi: (i) **formen** — 3 timers digital skoleeksamen (Inspera; V2019 var på engelsk med ferdige figurer), karakter A–F på 0–100-poengskala med faste grenser (F<35, E 35–45, D 45–55, C 55–75 [bredt «arbeidshest»-bånd], B 75–88, A>88); (ii) **den faste malen siden 2018** — tre hovedoppgaver: (1) begreps-/gevinstoppgave (15–30 %), (2) stor grafisk HO-/fordelingsoppgave (40–50 %), (3) handelspolitikk eller stordrift (20–30 %); vektingshistorikk (V2018 20/50/30, V2019 25/30/15/30, korona-årene ~jevnt fordelt på 4 oppgaver, V2023 18/32/50, V2024 30/40/30, V2025 25/50/25); (iii) **temafrekvens-tabellen** (gjenganger-score): komparative fortrinn/alternativkostnad 91 %, HO grafisk 73 %, stordrift+monopolistisk konkurranse 73 %, Stolper-Samuelson 73 %, Ricardo-Viner 64 %, Rybczynski/faktorvekst 64 %, kilder til gevinster 55 %, toll lite land 45 %, arbeidsmigrasjon 36 %, optimal toll/stort land 36 %, politisk økonomi 36 %, Melitz/heterogene bedrifter 27 %, Ricardo grafisk 27 %, økonomisk vekst/bytteforhold 18 %, WTO/handelsavtaler 18 %, handelskrig/fangenes dilemma 18 %, eksportsubsidie 9 %; (iv) **at tittelen lyver**: valutakurs/betalingsbalanse/åpen makro og formell EU/tollunion-teori er **0 %** — de hører til ECON1310/makroløpet (kort «bør kjenne til»-omtale med lenke til [ECON1310](/econ1310/econ1310-0-1), ellers ikke pensum her); (v) **de to metodeaksene** — kort vs. lang sikt og stort vs. lite land — som avgjør de fleste oppgavene; (vi) **sensorens metaregler** (fra §4 i analysen): tekst OG figur der figur bes; ikke svar på mer enn det spørres om (V2023: minuspoeng for et fjerde begrep; «velg én av to» → bare første besvarelse rettes); navngi teoremet; identifiser vinnere/tapere; prioriter etter vekting; poengsummene er veiledende (riktig svar plassert under feil deloppgave gir likevel pott).
- **Innholdskontrakt:** Oppgavetype-katalogen A–L presenteres som studentens sjekkliste med typisk vekt per sjanger (A 15–20 %, B 12–30 %, C 40–50 %, D 30–50 % samlet, E 10–20 %, F 20–32 %, G 20–50 %, H 20–30 %, I 14–20 %, J 25–30 %, K 5–25 %, L ~10 %). Prognosen for V2026: tre hovedoppgaver i mønsteret (1) begreps-/«kilder til gevinster»-oppgave (20–30 %) gjerne med Ricardo- eller stordriftsdiagram; (2) stor HO-basert fordelingsoppgave (40–50 %) med autarki→frihandel + Stolper-Samuelson (lang sikt) + Ricardo-Viner (kort sikt) + Rybczynski, med stort-vs-lite-land-vri; (3) handelspolitikk (toll/optimal toll) eller stordrift/næringsklynge, ofte med kort verbal drøfting (politisk økonomi eller påstands-utsagn) til slutt; dagsaktuell rammefortelling (proteksjonisme/tollkrig, grønn industri, arbeidsinnvandring). Avslutt med leseplan: Del 1–4 «må perfekt», Del 5 + begrepene «må kunne», Del 6–7 «bør kjenne / trene». Introduser de to nye V2023-sjangrene: «forklar kort 3 av følgende» (minuspoeng for en fjerde) og «velg én av to oppgaver».
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt vektene 25/50/25 og 180 minutter — sett opp tidsbudsjett per hovedoppgave», og «her er et nyhetsutdrag — hvilken av de fire modellfamiliene passer, og er landet stort eller lite?».
- **Typiske feil:** Metafeilene — bruke tid på figurløse forklaringer eller uforklarte figurer; prioritere de små oppgavene før 40–50 %-oppgaven; lese inn valutakurs/åpen makro som ikke er pensum; blande kort og lang sikt allerede i planleggingen.
- **Quiz: 12 · Flashcards: 10** (frekvenser, vekter, metaregler, de to metodeaksene)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Komparative fortrinn og Ricardo-modellen *(prioritet: PERFEKT)*

#### Kapittel 1.1: Komparativt fortrinn og alternativkostnad

- **id:** `econ1410-1-1` · **number:** 1.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen
- **Kapitteltype:** teori
- **description:** Grunnmuren i faget: hva komparativt fortrinn er, hvordan det måles ved alternativkostnad, og hvorfor et land alltid har det i minst én vare.
- **Eksamensbelegg:** Komparativt fortrinn/alternativkostnad er den mest testede innsikten i faget — **91 % frekvens** (10 av 11 sett), både som begrepsspørsmål (sjanger A) og som fundament under den store fordelingsoppgaven. Sensors kjernedefinisjon (skal gjengis presist): et land har komparativt fortrinn i en vare hvis **alternativkostnaden** ved å produsere den er **lavere** enn i andre land; et land har alltid KF i **minst én** vare, aldri i alle (dette poenget etterspørres eksplisitt). Prioritet: **perfekt**.
- **Innholdskontrakt:** Skille **absolutt** fortrinn (færre timer per enhet) fra **komparativt** fortrinn (lavere alternativkostnad) — Ricardos innsikt er at handel lønner seg selv når ett land er dårligst i alt. Alternativkostnad definert som $a_C/a_F$ (arbeidstimer per klesenhet delt på arbeidstimer per matenhet): hvor mange enheter av den andre varen som ofres. Vis med et lite tallcase (to land, to varer, arbeidstimer per enhet) hvordan man rangerer alternativkostnadene og leser av hvem som har KF i hva; poengter symmetrien (har A lavest alternativkostnad i klær, har B det nødvendigvis i mat). Reallønn i forbifarten: $w/p = \text{MPL}$. Forkunnskaper: ingen tunge; koble til alternativkostnadsbegrepet fra mikro ([ECON1210](/econ1210/econ1210-3-5) hvis publisert). Symbol- og formelliste (collapsible): $a_C, a_F$, $a_C/a_F$, MPL, $w/p$.
- **Oppgavesjangre:** A (begrep). Mønstereksempel: «Forklar kort hva som menes med komparativt fortrinn. Hvordan måles det, og hvorfor kan et land ikke ha komparativt fortrinn i alle varer samtidig?»
- **Typiske feil:** Forveksle absolutt og komparativt fortrinn (den vanligste begrepsfeilen); definere KF uten å nevne alternativkostnad; påstå at et land uten absolutt fortrinn i noe ikke kan tjene på handel; glemme «minst én vare»-poenget.
- **Quiz: 26 · Flashcards: 26**

#### Kapittel 1.2: Ricardo-modellen: PMK, spesialisering og relativ tilbudskurve

- **id:** `econ1410-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1410-1-1`
- **Kapitteltype:** teori
- **description:** Én-faktor-modellen grafisk: den rette PMK-en, full spesialisering ved handel, og relativ tilbudskurve (RS) mot relativ etterspørsel (RD).
- **Eksamensbelegg:** Ricardo-modellen grafisk forekommer i **27 %** av settene (V2015, V2018, V2025), men er modellapparatet bak begreps- og gevinstoppgavene (sjanger A/B) og et fast diagram i «kilder til gevinster»-oppgaven. Sensor forventer at PMK i Ricardo tegnes som en **rett linje** (helning = alternativkostnad) — forveksles ofte med den buede HO-PMK-en (feilkatalog #1). Prioritet: **perfekt**.
- **Innholdskontrakt:** PMK i én-faktor-modellen er en **rett linje** med helning lik alternativkostnaden (konstant, fordi arbeid er eneste faktor). Ved handel: **full spesialisering** — landet produserer bare varen det har KF i. **Relativ tilbudskurve (RS)** konstrueres som et trappetrinn (verden tilbyr bare vare X under den ene alternativkostnaden, bare vare Y over den andre, og hva som helst imellom); **relativ etterspørsel (RD)** faller. Relativ verdenspris $P_C/P_F$ bestemmes i skjæringen RS×RD og ligger **mellom** de to landenes alternativkostnader. Figurbeskrivelse i ord: rett PMK i hvert land ($x$-mengder på aksene), trappetrinns-RS + fallende RD i eget diagram (relativ mengde horisontalt, relativ pris vertikalt). Symbol- og formelliste: $a_C/a_F$, $P_C/P_F$, RS, RD, PMK.
- **Oppgavesjangre:** A + Ricardo grafisk (fundament for B). Mønstereksempel: «To land produserer vin og tekstiler med arbeidskraft som eneste faktor. Tegn produksjonsmulighetskurven for hvert land og forklar hvorfor den er rett. Vis så, ved hjelp av relativ tilbuds- og etterspørselskurve, hvordan den relative verdensprisen bestemmes.»
- **Typiske feil:** Tegne buet PMK i Ricardo (skal være rett — feilkatalog #1); glemme full spesialisering; plassere verdensprisen utenfor intervallet mellom alternativkostnadene; tegne RS glatt i stedet for som trappetrinn.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 1.3: Relativ verdenspris og gevinsten ved handel

- **id:** `econ1410-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ1410-1-2`
- **Kapitteltype:** teori
- **description:** Hvorfor handel løfter begge land utenfor egen PMK — konsummulighetslinjen med verdensprisens helning.
- **Eksamensbelegg:** Gevinsten ved handel i Ricardo-modellen er kjernen i «kilder til gevinster»-oppgavens Ricardo-del (sjanger B, 55 %) og etterspørres verbalt i begrepsoppgaver. Sensor vil se at studenten **fristiller konsum fra produksjon**: ved handel har landet en konsummulighetslinje (KMK) med verdensprisens helning som ligger **utenfor** egen PMK. Prioritet: **perfekt**.
- **Innholdskontrakt:** KMK ved handel har helning = relativ verdenspris (ikke egen alternativkostnad); begge land kan konsumere kombinasjoner **utenfor** sin egen PMK — dette er gevinsten. Intuisjon: landet «bytter til seg» den andre varen billigere via verdensmarkedet enn ved å produsere den selv. Reallønnsgevinst: reallønnen stiger fordi arbeidet flyttes til den mest verdifulle bruken. Figurbeskrivelse: rett PMK + brattere/slakere KMK gjennom spesialiseringspunktet, konsumpunkt utenfor PMK. Kort bro til HO (Del 2): der er PMK buet og landene delvis spesialiserer. Symbol- og formelliste: PMK, KMK, $P_C/P_F$, $w/p$.
- **Oppgavesjangre:** A + B-fundament. Mønstereksempel: «Forklar, med utgangspunkt i Ricardo-modellen, hvorfor begge land kommer bedre ut av handel selv om det ene er mer produktivt i begge varer. Illustrer med produksjons- og konsummulighetskurve.»
- **Typiske feil:** Tro at bare landet med absolutt fortrinn tjener; tegne KMK med samme helning som PMK (da forsvinner gevinsten); ikke vise konsum utenfor PMK; forklare gevinsten uten figur (halvt svar).
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.4: Drill: komparative fortrinn og Ricardo-modellen

- **id:** `econ1410-1-4` · **number:** 1.4 · **estimatedMinutes:** 90 · **prerequisites:** `econ1410-1-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på grunnmuren: fra en tabell med arbeidstimer til KF-rangering, relativ verdenspris og gevinstforklaring med figur i ord.
- **Eksamensbelegg:** Dekker sjanger A (begrep, 91 %) og Ricardo-apparatet under sjanger B (55 %). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) sett opp arbeidstimer/enhet i tabell; 2) regn alternativkostnad i hvert land; 3) rangér → hvem har KF i hva; 4) tegn rett PMK per land + spesialiseringspunkt; 5) konstruer RS (trappetrinn) × RD → relativ verdenspris i intervallet; 6) tegn KMK med verdensprisens helning → konsum utenfor PMK; 7) forklar gevinsten i ord (reallønn opp, konsum fristilt). Gjennomtegnet eksamenscase med margnotater om hva som gir uttelling ved hvert steg (f.eks. at «rett PMK» og «verdenspris mellom alternativkostnadene» er sikre poeng). **8–12 oppgaver** på eksamensnivå med nyskrevne tall/land (aldri gjenbruk kalibreringstall): begrepsforklaring i A-format, tallcase for KF-rangering, RS/RD-konstruksjon, gevinstforklaring — alle med figurbeskrivelse i ord.
- **Oppgavesjangre:** A + Ricardo grafisk. Mønstereksempel (full kjede): «(a) Forklar forskjellen på absolutt og komparativt fortrinn. (b) [tabell med arbeidstimer per enhet] Hvilket land har komparativt fortrinn i hvilken vare? (c) Tegn PMK for begge land og forklar formen. (d) Vis hvordan den relative verdensprisen bestemmes, og forklar hvorfor begge land tjener på handel.»
- **Typiske feil:** Hele §5-repertoaret for grunnmuren: absolutt/komparativt forvekslet, buet PMK i Ricardo (#1), verdenspris utenfor intervallet, gevinstforklaring uten figur.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 1:** 4 prøver (1.A begreper: KF, alternativkostnad, reallønn med pluss-markørene, sjanger A; 1.B Ricardo grafisk: PMK + full spesialisering + RS/RD, sjanger A/B-fundament; 1.C tallcase KF-rangering + gevinstforklaring med KMK, sjanger B; 1.D full Ricardo-kjede på eksamensnivå, sjanger A+B).

---

### Del 2 — Heckscher-Ohlin: autarki → frihandel *(prioritet: PERFEKT — den tyngste oppgaven)*

#### Kapittel 2.1: HO-modellens byggeklosser: faktorintensitet og faktorrikelighet

- **id:** `econ1410-2-1` · **number:** 2.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ1410-1-1`
- **Kapitteltype:** teori
- **description:** 2×2×2-modellens begreper: to varer, to faktorer, faktorintensitet og faktorrikelighet — og hvorfor den buede PMK-en er buet.
- **Eksamensbelegg:** Byggeklossene under den store HO-oppgaven (sjanger C, 73 %, 40–50 % vekt). Faktorintensitet og faktorrikelighet er faste begrepsgjengangere. Sensor forventer at studenten kan skille en **kapitalintensiv** vare (høy $K/L$) fra en **arbeidsintensiv**, og et **kapitalrikelig** land fra et **arbeidsrikelig**. Prioritet: **perfekt**.
- **Innholdskontrakt:** 2×2×2-oppsettet: to varer (f.eks. klær arbeidsintensivt, biler kapitalintensivt), to faktorer (arbeidskraft/kapital, eventuelt lav-/høykompetent arbeidskraft), to land. **Faktorintensitet** = forholdet $K/L$ i produksjonen av en vare (relativt begrep — en vare er kapitalintensiv sammenlignet med en annen). **Faktorrikelighet** = landets relative faktortilgang. **Faktorsubstitusjon**: bedrifter bytter mellom faktorer når faktorprisene endres — derfor er HO-PMK-en **buet** (økende alternativkostnad), til forskjell fra Ricardos rette PMK. Definér **avtagende marginalprodukt** og **faktorsubstitusjon** som begrepsberedskap (sjanger A). Symbol- og formelliste: $K/L$, $w/r$, $P_C/P_F$, PMK.
- **Oppgavesjangre:** A + C-fundament. Mønstereksempel: «Forklar hva som menes med at en vare er kapitalintensiv og at et land er kapitalrikelig. Hvorfor er produksjonsmulighetskurven buet i Heckscher-Ohlin-modellen, men rett i Ricardo-modellen?»
- **Typiske feil:** Behandle faktorintensitet som absolutt i stedet for relativt; blande faktorintensitet (vare) og faktorrikelighet (land); tegne rett PMK i HO (feilkatalog #1); glemme faktorsubstitusjon som årsak til buingen.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.2: Autarkilikevekten grafisk: PMK, KMK og indifferenskurve

- **id:** `econ1410-2-2` · **number:** 2.2 · **estimatedMinutes:** 60 · **prerequisites:** `econ1410-2-1`
- **Kapitteltype:** teori
- **description:** Den lukkede økonomien tegnet riktig: buet PMK skjevt mot komparativt fortrinn, konsum = produksjon i felles tangeringspunkt.
- **Eksamensbelegg:** Første halvdel av den store HO-oppgaven (sjanger C, 73 %). Sensors faste figurgrep: PMK **buet** og tegnet **skjevt** mot sektoren landet har KF i; i autarki er **konsum = produksjon** i samme punkt der en indifferenskurve tangerer PMK. **Mangler skjevheten: −2 poeng.** Står landene i flertall, tegn **begge** (bare ett: −1 poeng). Prioritet: **perfekt**.
- **Innholdskontrakt:** Autarkilikevekten: PMK buet og skjevt (den rikelige faktoren gjør landet relativt godt til å produsere den intensive varen → PMK strekker seg langs den aksen); indifferenskurve (fallende, konveks) tangerer PMK; tangeringspunktet er samtidig **produksjon og konsum** (lukket økonomi kan ikke bytte). Helningen i tangeringspunktet er landets **autarki-relativpris** $P_C/P_F$. To land tegnes med speilvendt skjevhet (hvert skjevt mot sin egen rikelige faktor). Figurbeskrivelse i ord med akser (mengde vare 1 vs. vare 2), buet PMK, indifferenskurve, tangeringspunkt A, relativprislinjens helning. Forkunnskaper: indifferenskurver fra mikro ([ECON1210](/econ1210/econ1210-7-1) hvis publisert). Symbol- og formelliste: PMK, KMK/VV, indifferenskurve, $P_C/P_F$.
- **Oppgavesjangre:** C (første del). Mønstereksempel: «Et kapitalrikelig land produserer biler (kapitalintensivt) og klær (arbeidsintensivt). Tegn og forklar produksjons- og konsumtilpasningen i autarki. Hvorfor må produksjonsmulighetskurven tegnes skjevt, og hva bestemmer prisforholdet mellom varene?»
- **Typiske feil:** PMK ikke tegnet skjevt mot KF (−2 poeng, feilkatalog #1); glemme at konsum = produksjon i autarki; indifferenskurve som krysser eller ikke tangerer; tegne bare ett land når begge er relevante (−1).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.3: Frihandel i HO: fristilling og Heckscher-Ohlin-teoremet

- **id:** `econ1410-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `econ1410-2-2`
- **Kapitteltype:** teori
- **description:** Andre halvdel av den store oppgaven: KMK endrer helning til verdensprisen, konsum fristilles fra produksjon, og HO-teoremet navngis.
- **Eksamensbelegg:** Andre halvdel av sjanger C (73 %, 40–50 %) og det som skiller topp- fra midtsjikt: de beste tegner **fullstendige** figurer (autarki + frihandel, eksport/import og fristilling markert), ikke bare autarki. **Bare autarki-figur når frihandel bes: −2 poeng.** HO-teoremet skal navngis eksplisitt (egne poeng). Prioritet: **perfekt**.
- **Innholdskontrakt:** Ved frihandel: KMK (= isovalue-linjen VV) **endrer helning** til den felles relative **verdensprisen**; **fristilling av konsum fra produksjon** vises ved at PMK og KMK tangerer i ett punkt (**produksjon**) mens KMK tangerer en **høyere** indifferenskurve i et annet punkt (**konsum**); landet produserer **mer** av eksportvaren, importerer den andre, og når en **høyere** indifferenskurve enn i autarki (velferdsgevinsten). **Heckscher-Ohlin-teoremet:** et land eksporterer varen som er intensiv i landets **rikelige** faktor. Figurbeskrivelse i ord: buet PMK, produksjonspunkt Q, konsumpunkt C på høyere indifferenskurve, KMK/VV med verdensprisens helning gjennom Q, eksport- og importpiler markert. Symbol- og formelliste: PMK, KMK/VV, indifferenskurve, $P_C/P_F$ (verdenspris).
- **Oppgavesjangre:** C (frihandelsdel). Mønstereksempel: «Fortsett fra autarkilikevekten: vis og forklar hva som skjer med produksjon og konsum når landet åpner for frihandel. Hvilken vare eksporteres, og hvorfor? Navngi det relevante teoremet.»
- **Typiske feil:** Bare autarki-figur (−2, feilkatalog #2); ikke vise fristillingen (to ulike punkter for produksjon og konsum); glemme at konsum når en høyere indifferenskurve; ikke navngi HO-teoremet (mister egne poeng); feil eksportvare (mot den rikelige faktoren).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.4: Drill: den store Heckscher-Ohlin-oppgaven

- **id:** `econ1410-2-4` · **number:** 2.4 · **estimatedMinutes:** 90 · **prerequisites:** `econ1410-2-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på settets tyngdepunkt: full autarki→frihandel-figur for ett eller begge land, med teorem navngitt og gevinst forklart.
- **Eksamensbelegg:** Dekker sjanger C (73 %, 40–50 % — den tyngste enkeltoppgaven i faget). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) identifisér rikelig faktor og intensiv vare per land; 2) tegn buet PMK **skjevt** mot KF; 3) autarki: indifferenskurve tangerer PMK, konsum = produksjon, les av relativpris; 4) frihandel: KMK endrer helning til verdensprisen, fristill konsum fra produksjon, høyere indifferenskurve; 5) **navngi HO-teoremet**; 6) **list vinnere/tapere** og pek på eksport/import; 7) ved to store land: tegn begge speilvendt. Gjennomtegnet eksamenscase med margnotater (skjevheten = 2 poeng, begge tilstander = 2 poeng, teoremnavn = egne poeng). **8–12 oppgaver** på eksamensnivå med nyskrevne land/varer (klær–biler, korn–maskiner, tekstil–elektronikk osv.), noen med ett land, noen med begge, alle med figurbeskrivelse i ord + verbal mekanisme.
- **Oppgavesjangre:** C. Mønstereksempel (full oppgave): «To store land — det ene rikelig på arbeidskraft, det andre på kapital — produserer klær (arbeidsintensivt) og maskiner (kapitalintensivt). (a) Tegn og forklar autarkilikevekten i begge land. (b) Vis hva som skjer når de åpner for frihandel: produksjon, konsum, handelsmønster og velferd. (c) Navngi teoremet og gjør rede for hvem som eksporterer hva.»
- **Typiske feil:** Hele §5-repertoaret for den store oppgaven: PMK ikke skjev (#1, −2), bare autarki (#2, −2), manglende fristilling, teorem ikke navngitt (#6), vinnere/tapere glemt (#7), figur uten mekanisme (#5).
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 2:** 4 prøver (2.A begreper: faktorintensitet, faktorrikelighet, faktorsubstitusjon, sjanger A; 2.B autarkifiguren korrekt tegnet og forklart, sjanger C-del; 2.C frihandelsovergangen med fristilling og HO-teorem, sjanger C-del; 2.D full autarki→frihandel-oppgave på 40–50 %-nivå med to land, sjanger C).

---

### Del 3 — Inntektsfordeling: kort sikt vs. lang sikt *(prioritet: PERFEKT — kjernemetodikken)*

#### Kapittel 3.1: Stolper-Samuelson: fordeling på lang sikt

- **id:** `econ1410-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `econ1410-2-3`
- **Kapitteltype:** teori
- **description:** Lang sikt med mobile faktorer: når eksportvaren blir dyrere, vinner den intensive faktoren realt og den andre taper realt.
- **Eksamensbelegg:** Stolper-Samuelson forekommer i **73 %** av settene (V2018–V2025 nesten hvert år), typisk som lang-sikt-delen av den store fordelingsoppgaven (sjanger D). Sensor krever at teoremet **navngis** og at **vinner/taper** identifiseres realt (ikke bare nominelt). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Stolper-Samuelson-teoremet:** når den relative prisen på en vare stiger, øker den **reelle** avlønningen til faktoren som brukes intensivt i den varen, og den andre faktorens reelle avlønning faller — **uansett hvilken vare faktoren tilfeldigvis jobber i**. Mekanismen (omstillingsprosessen, steg for steg, for full pott): høyere pris på eksportvaren → produksjonen vris mot den → etterspørselen etter den intensive faktoren stiger → dens relative pris stiger mer enn vareprisen (forstørrelseseffekten). Diagram (valgfritt hvis oppgaven ikke ber om figur): relativ varepris $P_C/P_F$ mot relativ faktorpris $w/r$, eventuelt med faktorintensitet $K/L$. Kobling: **på lang sikt er alle faktorer mobile** — dette er kontrasten til Ricardo-Viner (kap. 3.2). Symbol- og formelliste: $P_C/P_F$, $w/r$, $K/L$, reallønn $w/p$.
- **Oppgavesjangre:** D (lang sikt). Mønstereksempel: «Prisen på den arbeidsintensive eksportvaren stiger etter handelsåpning. Forklar, med Stolper-Samuelson-teoremet, hva som skjer med den reelle avlønningen til arbeidskraft og kapital på lang sikt. Vis stegene i omstillingsprosessen.»
- **Typiske feil:** Ikke navngi teoremet (#6); konkludere nominelt i stedet for realt; tro at faktoren vinner/taper avhengig av hvilken sektor den jobber i (den følger faktortypen, ikke sektoren); blande med kort sikt (#3).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.2: Ricardo-Viner: spesifikke faktorer og badekarsdiagrammet

- **id:** `econ1410-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1410-2-3`
- **Kapitteltype:** teori
- **description:** Kort sikt med immobile faktorer: badekarsdiagrammet med to MPL·P-kurver, hvem som vinner og taper, og reallønnens tvetydighet.
- **Eksamensbelegg:** Ricardo-Viner/spesifikke faktorer forekommer i **64 %** av settene (V2016, V2020–V2025), nesten alltid som kort-sikt-delen av fordelingsoppgaven (sjanger D). Skal **illustreres grafisk** (badekarsdiagrammet). Toppsjikt-markør: se at den mobile faktorens **reallønn er tvetydig**. Prioritet: **perfekt**.
- **Innholdskontrakt:** På **kort sikt** er den ene faktoren (f.eks. kapital/jord) **spesifikk/immobil** for hver sektor, mens arbeidskraft er **mobil** mellom sektorer. **Badekarsdiagrammet:** to kurver $\text{MPL}\cdot P$ (én per sektor) mot en **felles horisontal arbeidsstyrke-akse** (bredden = total arbeidsstyrke); lønnen $w$ bestemmes der de krysser; arealet over/under gir avlønning til de spesifikke faktorene. En **prisøkning** i én sektor skifter dens $\text{MPL}\cdot P$-kurve opp → lønnen stiger (men **mindre** enn prisøkningen), arbeid flyttes mot sektoren. Resultat: den **spesifikke faktoren i den favoriserte sektoren vinner** klart, den **spesifikke faktoren i den andre sektoren taper**, og den **mobile faktorens reallønn er tvetydig** (stiger målt i den ene varen, faller målt i den andre). Figurbeskrivelse i ord med akser, begge kurver, krysningspunkt, skiftet, nytt lønnsnivå og arealene. Symbol- og formelliste: $\text{MPL}$, $\text{MPL}\cdot P$, $w$, $w/p$.
- **Oppgavesjangre:** D (kort sikt). Mønstereksempel: «Anta at kapital er bundet til hver sektor på kort sikt, mens arbeidskraften er mobil. Tegn og forklar, ved hjelp av badekarsdiagrammet, hva som skjer med lønn og faktoravlønning når prisen på eksportvaren stiger. Hvem vinner og taper?»
- **Typiske feil:** Bruke HO/Stolper-Samuelson der spesifikke faktorer er riktig (#3 — strykfellen); tegne badekaret uten felles arbeidsstyrke-akse; konkludere skråsikkert om den mobile faktorens reallønn (den er tvetydig — #10); glemme å liste vinnere/tapere (#7).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 3.3: Rybczynski og faktorvekst

- **id:** `econ1410-3-3` · **number:** 3.3 · **estimatedMinutes:** 50 · **prerequisites:** `econ1410-2-3`
- **Kapitteltype:** teori
- **description:** Økt faktortilgang: skjevvekst i PMK ved konstante priser — og hvordan stort vs. lite land endrer bytteforholdet.
- **Eksamensbelegg:** Rybczynski/faktorvekst forekommer i **64 %** av settene (V2018, V2020–V2023, V2025), ofte som deloppgave (c)/(d) i den store oppgaven eller koblet til arbeidsinnvandring på lang sikt (kap. 6.1). Skal vise **skjevvekst** i PMK og ta hensyn til **stort vs. lite land**. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Rybczynski-teoremet:** ved konstante priser fører økt tilgang på én faktor til **økt** produksjon av varen som er intensiv i den faktoren og **redusert** produksjon av den andre (mer enn proporsjonalt) — vises som **skjevvekst** i PMK (utover langs den ene aksen, innover langs den andre). **Stort land:** økt produksjon av eksportvaren senker den relative verdensprisen → KMK blir brattere → landet havner på en **lavere** indifferenskurve enn ellers (bytteforholdstap, «immiserizing growth» i ekstremtilfellet). **Lite land:** ingen prisendring → uendret KMK-helning. **Presiser eksplisitt** at Rybczynski forutsetter **konstante priser**, så resultatet modifiseres når prisene endres (toppsjikt-markør). Figurbeskrivelse: buet PMK før/etter med skjev utvidelse, endret KMK-helning (stort land). Symbol- og formelliste: PMK, KMK, $P_C/P_F$, bytteforhold.
- **Oppgavesjangre:** E. Mønstereksempel: «Et stort land opplever økt tilgang på kapital. Tegn og forklar de langsiktige konsekvensene for produksjonssammensetning, bytteforhold og velferd. Hva blir annerledes dersom landet var lite?»
- **Typiske feil:** Symmetrisk (ikke skjev) vekst i PMK; glemme stort-vs-lite-land-nyansen (#4); ikke nevne konstant-pris-forutsetningen; konkludere skråsikkert om velferd i stort land (bytteforholdstap kan dominere veksten — #10).
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.4: Drill: samme prisendring på kort sikt vs. lang sikt

- **id:** `econ1410-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `econ1410-3-1`, `econ1410-3-2`, `econ1410-3-3`
- **Kapitteltype:** drill
- **description:** Bokas viktigste metodedrill: analyser samme prisendring/handelsåpning først på kort sikt (Ricardo-Viner) og så på lang sikt (Stolper-Samuelson/Rybczynski) — strykfellen når de blandes.
- **Eksamensbelegg:** Dette er **den mest gjennomgående metodikken i faget**: fem av de sju siste ordinære settene bygger en hel oppgave rundt kort-vs-lang-sikt-skillet (sjanger D, 30–50 % samlet). Å blande de to er den klassiske strykfellen (feilkatalog #3). Prioritet: **perfekt** — dette er bokas ekvivalent til et karakterskillende kjernekapittel. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) **avgjør horisont** — hvilke faktorer er mobile? (kort sikt: én spesifikk → Ricardo-Viner; lang sikt: alle mobile → Stolper-Samuelson/Rybczynski); 2) **kort sikt**: tegn badekaret, skift kurven, les av lønn og faktoravlønning, list vinnere/tapere, nevn den mobile faktorens tvetydige reallønn; 3) **lang sikt**: anvend Stolper-Samuelson (reell vinner/taper etter faktortype), navngi teoremet, forklar omstillingsprosessen; 4) hvis faktortilgangen endres: Rybczynski med skjevvekst + stort/lite land; 5) **sammenlign** de to horisontene eksplisitt. Gjennomtegnet case med margnotater (det som gir uttelling: riktig horisont-diagnose, teorem navngitt, tvetydigheten sett). **8–15 oppgaver** som roterer: handelsåpning/prisøkning/arbeidsinnvandring analysert på begge horisonter, med nyskrevne case (høy-/lavkompetent arbeidskraft, jord/kapital som spesifikk faktor). Legg spesiell vekt på oppgaver der studenten selv må velge modell.
- **Oppgavesjangre:** D (+ E, G-kobling). Mønstereksempel: «En handelsavtale hever prisen på landets eksportvare. (a) Anta at bare arbeidskraften er mobil mellom sektorer på kort sikt — tegn og forklar konsekvensen for inntektsfordelingen. (b) Analyser deretter lang sikt, når begge faktorer er mobile. (c) Forklar hvorfor konklusjonene kan bli ulike på de to tidshorisontene.»
- **Typiske feil:** Blande kort og lang sikt / bruke feil modell (#3, strykfellen); glemme å navngi teoremet på lang sikt; konkludere skråsikkert om mobil faktors reallønn på kort sikt (#10); ikke sammenligne horisontene eksplisitt når oppgaven ber om begge.
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 3:** 4 prøver (3.A Stolper-Samuelson med omstillingsprosess og reell vinner/taper, sjanger D-lang; 3.B Ricardo-Viner-badekaret med tvetydig reallønn, sjanger D-kort; 3.C Rybczynski/faktorvekst med stort/lite land, sjanger E; 3.D full kort-vs-lang-sikt-oppgave på eksamensnivå der studenten selv velger modell, sjanger D).

---

### Del 4 — Handelspolitikk i partiell likevekt *(prioritet: PERFEKT/KUNNE)*

#### Kapittel 4.1: Toll i et lite land: arealene og nettotapet

- **id:** `econ1410-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ1410-1-1`
- **Kapitteltype:** teori
- **description:** Markedskryss med verdenspris: hvordan en toll flytter arealene, og hvorfor nettotapet er b + d.
- **Eksamensbelegg:** Toll for lite land forekommer i **45 %** av settene (V2015–V2017, V2020–V2022), typisk 20–32 % av settet (sjanger F). Sensor krever **navngitte arealer** og at produsentgevinsten (A) behandles som en **ren overføring**, ikke en netto gevinst (feilkatalog #8). Prioritet: **perfekt**.
- **Innholdskontrakt:** Partiell likevekt for importvaren: innenlandsk tilbud og etterspørsel + horisontal verdenspris (under autarkiprisen → landet importerer). En **toll** hever innenlandsprisen med tollsatsen: **konsumentoverskudd ned (a+b+c+d)**, **produsentoverskudd opp (a — ren overføring)**, **staten får tollinntekt (c)**, **netto effektivitetstap = b + d** (b = overproduksjon i dyre innenlandske anlegg, d = underkonsum). **Frihandel er best, autarki verst.** Figurbeskrivelse i ord: pris vertikalt, mengde horisontalt, tilbuds- og etterspørselskurve, verdensprislinje før/etter toll, arealene A–D navngitt og tolket. Forkunnskaper: markedskryss og KO/PO/SO fra mikro ([ECON1210 markedslikevekt](/econ1210/econ1210-1-3) og [KO/PO/SO](/econ1210/econ1210-2-1), samt [stykkskatt](/econ1210/econ1210-3-1) som mønster for arealanalysen — hvis publisert). Symbol- og formelliste: arealer A–D, verdenspris $P_v$, tollsats $t$, KO/PO.
- **Oppgavesjangre:** F (lite land). Mønstereksempel: «Et lite land importerer stål til verdensmarkedspris. Tegn og forklar hvordan en importtoll påvirker konsumentoverskudd, produsentoverskudd, statens inntekter og det samfunnsøkonomiske overskuddet. Marker arealene og forklar hvorfor det oppstår et netto effektivitetstap.»
- **Typiske feil:** Behandle produsentgevinsten A som en netto samfunnsgevinst i stedet for en overføring (#8); glemme ett av tapsarealene (b eller d); ikke navngi/tolke arealene; forklare uten figur (#5).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.2: Optimal toll i et stort land: tre paneler og bytteforholdsgevinsten

- **id:** `econ1410-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1410-4-1`
- **Kapitteltype:** teori
- **description:** Stort land som påvirker verdensprisen: bytteforholdsgevinsten e, nettoresultatet e − (b + d), og tre-panels-figuren.
- **Eksamensbelegg:** Optimal toll/stort land forekommer i **36 %** av settene (V2017, V2020, V2023, V2025 + utsatt), ofte 20–32 %. Toppsjikt-markør: **tre paneler** (hjemland, utland, verdensmarked) og resonnement om overveltning på utlendinger. Dette er **stort-vs-lite-land-metodikkens** viktigste anvendelse. Prioritet: **perfekt**.
- **Innholdskontrakt:** Et **stort** land som legger toll, senker etterspørselen på verdensmarkedet så mye at **verdensprisen faller** ($P_{v2} < P_v$) → landet får en **bytteforholdsgevinst (areal e)** fordi importen betales billigere. Nettoresultat for importlandet = **e − (b + d)**: tollen er lønnsom **hvis e > b + d**. «Hump-shaped» velferdskurve → en **optimal** (positiv men endelig) tollsats. **Eksportlandet taper alltid.** For full pott: **tre paneler** — hjemland, utland og det internasjonale markedet — med alle arealer navngitt (A–E, ev. F–G på eksportlandssiden). Figurbeskrivelse i ord for alle tre paneler. Kontrast til kap. 4.1: lite land har ingen e-gevinst → toll alltid tap. Symbol- og formelliste: arealer A–E (F–G), $P_v$, $P_{v2}$, optimal tollsats.
- **Oppgavesjangre:** F (stort land). Mønstereksempel: «Tegn og forklar, ved hjelp av tre paneler, hvordan en importtoll påvirker det samfunnsøkonomiske overskuddet i et stort land. Marker bytteforholdsgevinsten, og forklar under hvilken betingelse tollen gir en netto velferdsgevinst.»
- **Typiske feil:** Glemme stort-vs-lite-land-skillet — analysere stort land som om verdensprisen var fast (#4); utelate bytteforholdsgevinsten e; bare ett panel når tre er nødvendig; påstå at også eksportlandet kan tjene.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 4.3: Eksportsubsidie og strategisk handelspolitikk

- **id:** `econ1410-4-3` · **number:** 4.3 · **estimatedMinutes:** 35 · **prerequisites:** `econ1410-4-1`
- **Kapitteltype:** teori
- **description:** Bør kjenne til: eksportsubsidie i markedskryss med effektivitetstap, og strategisk handelspolitikk under imperfekt konkurranse.
- **Eksamensbelegg:** Eksportsubsidie/strategisk handelspolitikk forekommer bare i **9 %** (V2024), men står i pensum og gir toppkarakter-differensiering. Nivå 3 «kjenne» — kompakt kapittel, plassert etter det viktigere. Prioritet: **kjenne**.
- **Innholdskontrakt:** **Eksportsubsidie** i partiell likevekt: subsidien hever innenlandsprisen til verdenspris + subsidie → produsentene tjener, konsumentene taper, staten betaler, **netto effektivitetstap** (motsatt av toll — over- i stedet for underhandel). Kort om **strategisk handelspolitikk** (Brander-Spencer-ideen, verbalt): under imperfekt konkurranse kan en subsidie flytte overskudd fra utenlandsk til innenlandsk bedrift — men forutsetningene er skjøre og gjengjeldelse truer. Markér hele kapitlet som «bør kjenne til». Symbol- og formelliste: subsidiesats, verdenspris, effektivitetstap.
- **Oppgavesjangre:** F-variant + K-kobling. Mønstereksempel: «Forklar kort hvordan en eksportsubsidie påvirker det samfunnsøkonomiske overskuddet, og hvorfor strategisk handelspolitikk under imperfekt konkurranse er omdiskutert.»
- **Typiske feil:** Behandle eksportsubsidie som et speilbilde av toll uten å se at den gir *over*handel; overselge strategisk handelspolitikk uten forbeholdene (gjengjeldelse, informasjonskrav).
- **Quiz: 12 · Flashcards: 12**

#### Kapittel 4.4: Drill: toll og handelspolitikk i partiell likevekt

- **id:** `econ1410-4-4` · **number:** 4.4 · **estimatedMinutes:** 90 · **prerequisites:** `econ1410-4-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på handelspolitikk: lite vs. stort land, arealene navngitt, nettoresultatet regnet i ord, og betingelsen for lønnsom toll.
- **Eksamensbelegg:** Dekker sjanger F (toll lite land 45 % + optimal toll 36 %, 20–32 %). Stort-vs-lite-land-metodikken drilles her. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) **stort eller lite land?** — avgjør om verdensprisen påvirkes; 2) tegn markedskrysset med verdensprislinjen (før toll = import); 3) legg tollen, flytt innenlandsprisen; 4) navngi og tolk arealene (A overføring, B+D tap, C tollinntekt, E bytteforhold hvis stort); 5) nettoresultat: lite land = −(b+d); stort land = e−(b+d), lønnsom hvis e>b+d; 6) list vinnere/tapere (inkl. eksportlandet). Gjennomtegnet case med margnotater (arealnavn og «overføring ikke gevinst» = sikre poeng). **8–15 oppgaver** som roterer lite/stort land, ulike varer og tollsatser, noen med eksportsubsidie-variant — alle med figurbeskrivelse i ord.
- **Oppgavesjangre:** F. Mønstereksempel (full kjede): «(a) Et lite land legger toll på en importvare — vis effektene og beregn nettotapet i arealer. (b) Anta i stedet at landet er stort nok til å påvirke verdensprisen — tegn tre paneler og forklar når tollen kan lønne seg. (c) Hvem taper i utlandet?»
- **Typiske feil:** Hele §5-repertoaret for handelspolitikk: stort/lite land glemt (#4), A som netto gevinst (#8), manglende bytteforholdsareal e, arealer ikke navngitt, figur uten mekanisme (#5).
- **Quiz: 15 · Flashcards: 10**

**Prøve-kvote Del 4:** 4 prøver (4.A toll i lite land med arealer og nettotap, sjanger F; 4.B optimal toll i stort land med tre paneler og betingelsen e>b+d, sjanger F; 4.C eksportsubsidie + strategisk handelspolitikk, sjanger F/K «kjenne»; 4.D full toll-oppgave på eksamensnivå med stort/lite-land-vri, sjanger F).

---

### Del 5 — Stordriftsfordeler og imperfekt konkurranse *(prioritet: KUNNE — men 73 % frekvens)*

#### Kapittel 5.1: Interne vs. eksterne stordriftsfordeler

- **id:** `econ1410-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `econ1410-1-1`
- **Kapitteltype:** teori
- **description:** De to typene stordriftsfordeler, de tre kildene til eksterne fordeler, og tiltagende skalautbytte som begrepsberedskap.
- **Eksamensbelegg:** Interne/eksterne stordriftsfordeler er faste begrepsgjengangere (sjanger A) og fundamentet under stordriftsoppgaven (73 %). Sensor forventer de **tre kildene** til eksterne fordeler og et **næringsklynge-eksempel**. Prioritet: **kunne**.
- **Innholdskontrakt:** **Interne** stordriftsfordeler: gjennomsnittskostnaden faller med **bedriftens** produksjon (fører til imperfekt konkurranse/store bedrifter). **Eksterne**: gjennomsnittskostnaden faller med **næringens** samlede produksjon (bedriftene kan være små). De **tre kildene** til eksterne fordeler: (1) spesialiserte innsatsleverandører, (2) et konsentrert/relevant arbeidsmarked, (3) kunnskapssmitte (knowledge spillover). Næringsklynge-eksempler: Hollywood (film), Bangalore (IKT), Nederland (blomster), Silicon Valley. **Tiltagende skalautbytte**: dobling av innsatsfaktorene mer enn dobler produksjonen — opptrer sammen med stordriftsfordeler. Definér **monopolistisk konkurranse** og **intra-industrihandel** som begrepsberedskap. Symbol- og formelliste: AC (gjennomsnittskostnad), skalautbytte. (Merk: gjennomsnittskostnad brukes her som fagbegrep — det er tillatt i Del 5, i motsetning til econ1210s anleggsmodell-regel.)
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar forskjellen på interne og eksterne stordriftsfordeler. Hvilke tre kilder ligger bak eksterne stordriftsfordeler, og gi et eksempel på en næringsklynge.»
- **Typiske feil:** Blande interne (bedrift) og eksterne (næring); glemme én av de tre kildene; forveksle tiltagende skalautbytte med stordriftsfordeler uten å se koblingen; definisjon uten eksempel.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 5.2: Monopolistisk konkurranse: PP–CC-modellen og intra-industrihandel

- **id:** `econ1410-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `econ1410-5-1`
- **Kapitteltype:** teori
- **description:** Det eneste «regnbare» diagrammet: priskurve P = c + 100/n mot kostnadskurve AC = c + nF/S, likevekt der P = AC, og hva et større marked gjør.
- **Eksamensbelegg:** Monopolistisk konkurranse/PP–CC forekommer i **73 %** samlet (V2018, V2019, V2024, V2025), 20–30 %, ofte som oppgave 3. Dette er faget eneste sted med lette formeluttrykk. Sensor forventer at studenten viser at større marked → **flere bedrifter og lavere pris**, og at frihandel gir **færre bedrifter enn autarkisummen**. Prioritet: **kunne** (men høyfrekvent — grundig behandlet).
- **Innholdskontrakt:** **PP–CC-modellen:** priskurven $P = c + 100/n$ (fallende i antall bedrifter $n$ — flere bedrifter, hardere konkurranse, lavere pris) og kostnadskurven $AC = c + nF/S$ (stigende i $n$ — flere bedrifter deler markedet $S$, hver produserer mindre, høyere stykkostnad pga. faste kostnader $F$). Likevekt der $P = AC$ (nullprofitt, fri etablering). **Større marked (større $S$):** AC-kurven roterer ned → **flere bedrifter og lavere pris**. **Frihandel** = summen av markedene = større $S$ → lavere verdenspris, flere varianter, men **færre bedrifter enn summen** i autarki (de minst effektive faller ut). **Intra-industrihandel**: land eksporterer og importerer varianter av samme vare. Gevinsten: lavere pris + flere varianter. Figurbeskrivelse i ord: $n$ horisontalt, pris/kostnad vertikalt, fallende PP, stigende CC, likevekt før/etter markedsutvidelse. Symbol- og formelliste: $n$, $P = c + 100/n$, $AC = c + nF/S$, $c$, $F$, $S$.
- **Oppgavesjangre:** H. Mønstereksempel: «Bilmarkedet i to land er kjennetegnet ved monopolistisk konkurranse. Tegn likevekten (antall bedrifter og pris) i autarki, og forklar hva som skjer med begge når landene åpner for handel.»
- **Typiske feil:** Snu helningen på PP eller CC; tro at frihandel gir flere bedrifter totalt (det gir færre enn summen); glemme variantgevinsten; regne på uttrykkene uten å tolke figuren.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 5.3: Eksterne stordriftsfordeler, næringsklynge og first-mover

- **id:** `econ1410-5-3` · **number:** 5.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ1410-5-1`
- **Kapitteltype:** teori
- **description:** Fallende bransje-AC-kurve, hvor produksjonen samles ved handel, og lock-in-poenget: kan proteksjonisme gjøre et land til verdens produsent?
- **Eksamensbelegg:** Eksterne stordriftsfordeler/næringsklynge forekommer i **14–20 %** (V2022 lærbelter Kina/Vietnam, V2024 grønn industri Norge/USA). Toppsjikt-markør: **lock-in/first-mover**-resonnementet og drøftingen av om et lands lavere AC-kurve holder til å ta over markedet. Prioritet: **kunne**.
- **Innholdskontrakt:** Fallende **bransje-AC-kurve** (forward-falling supply) for hvert land + etterspørsel. Ved handel samles produksjonen **der AC er lavest** — men **first-mover/lock-in**: et land som allerede er «verdens produsent» kan holde stillingen selv om et annet land i prinsippet har en lavere AC-kurve, fordi konkurrenten ikke har stor nok **hjemmemarkedsetterspørsel** til å komme ned på en konkurransedyktig pris fra start. **Proteksjonisme** (importvern som tvinger hjemmemarkedet til lokale leverandører) kan da hjelpe en næring i gang — men **handelskrig** er en mulig konsekvens. Nyansen (toppsjikt): prisen må faktisk kunne bli lav nok — det er ikke gitt. Figurbeskrivelse i ord: fallende AC-kurver for to land, etterspørsel, hvor likevekten havner før/etter proteksjonisme. Symbol- og formelliste: bransje-AC, etterspørsel, lock-in.
- **Oppgavesjangre:** I. Mønstereksempel: «USA er verdens produsent av en vare med eksterne stordriftsfordeler. Norge har høyere kostnad i utgangspunktet, men en lavere potensiell AC-kurve. Tegn og forklar hvordan proteksjonistiske tiltak kan gjøre Norge til verdens produsent — og drøft om prisen kan bli lav nok.»
- **Typiske feil:** Anta at landet med lavest potensiell AC-kurve automatisk vinner (overser lock-in); glemme hjemmemarkedsetterspørselens rolle i å komme ned kostnadskurven; ikke nevne handelskrig-risikoen; skråsikker konklusjon der utfallet er usikkert (#10).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 5.4: Heterogene bedrifter (Melitz)

- **id:** `econ1410-5-4` · **number:** 5.4 · **estimatedMinutes:** 40 · **prerequisites:** `econ1410-5-2`
- **Kapitteltype:** teori
- **description:** Bør kunne: handel presser ut de minst produktive bedriftene og løfter snittproduktiviteten — driftsresultat-mot-MC-figuren med cutoff.
- **Eksamensbelegg:** Heterogene bedrifter/Melitz forekommer i **27 %** (V2015-varianten + V2024-utsatt), ofte som bonuspoeng (0,5 + 1) i stordrifts- eller «kilder til gevinster»-oppgaven. Sensor forventer at studenten ser at de **minst produktive presses ut** og at **snittproduktiviteten stiger**. Prioritet: **kunne** (kompakt).
- **Innholdskontrakt:** Bedrifter i samme næring har **ulik produktivitet** (ulik marginalkostnad). Figuren: **driftsresultat mot marginalkostnad** (lavere MC = mer produktiv = høyere driftsresultat), med en **cutoff** der driftsresultatet er null (bedrifter under cutoff overlever, over faller ut). **Handel** øker konkurransen (lavere pris) og gir tilgang til eksportmarkeder → de **minst produktive går konkurs**, de mest produktive vokser og eksporterer → **snittproduktiviteten i næringen stiger** (en ny gevinstkilde utover Ricardo/HO/stordrift). Dette er en av **kildene til gevinster ved handel** (kap. 7.1). Figurbeskrivelse i ord: MC horisontalt, driftsresultat vertikalt, fallende linje, cutoff før/etter handel. Symbol- og formelliste: MC, driftsresultat, cutoff, snittproduktivitet.
- **Oppgavesjangre:** H/B-kobling. Mønstereksempel: «Forklar, ved hjelp av en figur, hvordan handel med heterogene bedrifter kan heve den gjennomsnittlige produktiviteten i en næring. Hvilke bedrifter faller ut, og hvorfor er dette en gevinst?»
- **Typiske feil:** Tro at handel gagner alle bedrifter (de minst produktive taper); forveksle med monopolistisk konkurranse der bedriftene er like; glemme snittproduktivitets-poenget; figur uten cutoff.
- **Quiz: 14 · Flashcards: 14**

#### Kapittel 5.5: Drill: stordrift og imperfekt konkurranse

- **id:** `econ1410-5-5` · **number:** 5.5 · **estimatedMinutes:** 75 · **prerequisites:** `econ1410-5-2`, `econ1410-5-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på oppgave-3-kandidaten: PP–CC ved markedsutvidelse, eksterne stordrift/lock-in, og Melitz-bonusen.
- **Eksamensbelegg:** Dekker sjanger H (PP–CC, 73 %), I (eksterne/næringsklynge, 14–20 %) og Melitz-bonusen. Prioritet: **kunne** (høyfrekvent oppgave 3).
- **Innholdskontrakt:** Løsningsoppskrift: for **PP–CC**: 1) tegn fallende PP og stigende CC, likevekt $P=AC$; 2) markedsutvidelse/frihandel → CC ned → flere bedrifter, lavere pris; 3) poengter færre bedrifter enn autarkisummen + variantgevinst. For **eksterne stordrift**: 1) fallende bransje-AC per land; 2) hvor samles produksjonen; 3) lock-in/first-mover + proteksjonismens rolle + handelskrig-risiko. For **Melitz**: cutoff-figuren + snittproduktivitet. Gjennomtegnet case med margnotater. **8–12 oppgaver** som roterer bilmarked/elektronikk/grønn industri med ulik markedsstørrelse, alle med figurbeskrivelse i ord + verbal mekanisme.
- **Oppgavesjangre:** H, I. Mønstereksempel: «To land med ulik markedsstørrelse produserer en vare under monopolistisk konkurranse. (a) Tegn likevekten i autarki. (b) Vis hva som skjer med pris og antall bedrifter i begge land ved frihandel. (c) Forklar hvorfor det samlede antallet bedrifter faller, men konsumentene likevel tjener.»
- **Typiske feil:** Snu PP/CC-helningene; påstå flere bedrifter totalt ved handel; overse lock-in i eksterne-stordrift-oppgaven; glemme variantgevinsten; figur uten mekanisme (#5).
- **Quiz: 12 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (5.A begreper: interne/eksterne stordrift, tiltagende skalautbytte, monopolistisk konkurranse, intra-industrihandel, sjanger A; 5.B PP–CC ved markedsutvidelse, sjanger H; 5.C eksterne stordrift/lock-in med proteksjonismedrøfting, sjanger I; 5.D full stordriftsoppgave i oppgave-3-format med Melitz-bonus, sjanger H+I).

---

### Del 6 — Faktorbevegelighet, vekst og politisk økonomi *(prioritet: KUNNE/KJENNE)*

#### Kapittel 6.1: Arbeidsmigrasjon og faktorbevegelighet

- **id:** `econ1410-6-1` · **number:** 6.1 · **estimatedMinutes:** 50 · **prerequisites:** `econ1410-3-2`, `econ1410-3-3`
- **Kapitteltype:** teori
- **description:** Migrasjonsdiagrammet: to MPL-kurver mot felles verdensarbeidsstyrke-akse, det gule arealet, og vinner/taper-listen — koblet til kort/lang sikt.
- **Eksamensbelegg:** Arbeidsmigrasjon/faktorbevegelighet forekommer i **36 %** (V2016, V2020, V2021, V2023 + utsatt) — V2023 bar hele 50 %-oppgaven. Sensor krever migrasjonsdiagrammet, det **gule arealet** (økt verdensproduksjon) og en **eksplisitt vinner/taper-liste**, samt kort/lang-sikt-koblingen. Prioritet: **kunne**.
- **Innholdskontrakt:** **Migrasjonsdiagrammet:** to $\text{MPL}$-kurver (ett land fra hver side) mot en **felles horisontal verdensarbeidsstyrke-akse**; reallønn $= \text{MPL} = w/p$ med **avtagende MPL**. Arbeid flytter til høyest reallønn til $\text{MPL}_H = \text{MPL}_U$ (lønnsutjevning); **marker det gule arealet = økt verdensproduksjon**. **Vinner/taper-liste** (skal med): utvandrerne + de gjenværende arbeiderne i avsenderlandet + kapitaleierne i mottakerlandet **vinner**; arbeiderne i mottakerlandet + kapitaleierne i avsenderlandet **taper**. **Kort vs. lang sikt** (kobling til Del 3): kort sikt (Ricardo-Viner) = lønn faller / kapitalavkastning stiger i mottakerlandet; lang sikt → **Rybczynski** (faktorprisene reverseres mot utgangsnivå, produksjonssammensetningen endres i stedet). Figurbeskrivelse i ord: bredde = verdensarbeidsstyrke, to fallende MPL-kurver, krysningspunkt, gult areal. Symbol- og formelliste: $\text{MPL}$, $w/p$, gult areal.
- **Oppgavesjangre:** G. Mønstereksempel: «To land med ulikt reallønnsnivå åpner for arbeidsmigrasjon. Vis grafisk hvordan arbeidskraften omfordeles, marker den økte verdensproduksjonen, og gjør rede for hvem som vinner og taper. Hva blir annerledes på lang sikt?»
- **Typiske feil:** Tegne uten felles verdensarbeidsstyrke-akse; glemme det gule arealet; ufullstendig vinner/taper-liste (#7); ikke koble til kort/lang sikt (#3); anta lønn faller permanent (lang sikt reverserer via Rybczynski).
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 6.2: Økonomisk vekst og bytteforhold

- **id:** `econ1410-6-2` · **number:** 6.2 · **estimatedMinutes:** 45 · **prerequisites:** `econ1410-3-3`
- **Kapitteltype:** teori
- **description:** Er vekst i utlandet bra eller dårlig for oss? Import-/eksportskjev vekst, stort/lite land, og bytteforholdets rolle.
- **Eksamensbelegg:** Økonomisk vekst/bytteforhold forekommer i **18 %** ordinært (V2017, V2020) men **hyppig i utsatt-settene** (V2020-, V2023-utsatt). Nivå 3, men gir toppkarakter-differensiering. Anvender **stort-vs-lite-land-metodikken** direkte. Prioritet: **kjenne**.
- **Innholdskontrakt:** Effekten på oss av vekst i et annet land avhenger av (a) om landet er **stort** (påvirker verdensmarkedspris/vårt bytteforhold) eller **lite** (ingen effekt), og (b) **hvilken sektor** veksten skjer i: **eksportskjev** vekst i det andre landet → verdensprisen på deres eksportvare faller → forbedret bytteforhold for oss hvis vi importerer den (og motsatt); **importskjev** vekst → motsatt. Illustreres med **skjevvekst i PMK** + **endret KMK-helning**. Viktig poeng: å stenge et land ute som handelspartner stenger **ikke** ute effekten av veksten — den kommer via verdensmarkedsprisene. Figurbeskrivelse i ord: PMK før/etter skjevvekst, KMK-helning endret. Symbol- og formelliste: PMK, KMK, bytteforhold, $P_C/P_F$.
- **Oppgavesjangre:** J. Mønstereksempel: «Er økonomisk vekst i et stort naboland bra eller dårlig for oss? Diskuter med figurer, og gjør rede for hvilken rolle bytteforholdet og sektorsammensetningen spiller.»
- **Typiske feil:** Glemme stort-vs-lite-land-skillet (#4); anta at all utenlandsk vekst gagner oss; tro at handelsstopp fjerner effekten (den kommer via prisene); forveksle import- og eksportskjev vekst.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 6.3: Politisk økonomi og handelspolitiske institusjoner

- **id:** `econ1410-6-3` · **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** `econ1410-4-1`
- **Kapitteltype:** teori (verbal drøfting)
- **description:** Hvorfor velges toll tross gevinstene? Kollektiv handling og lobbyisme, WTOs multilaterale logikk, og handelskrig som fangenes dilemma.
- **Eksamensbelegg:** Politisk økonomi forekommer i **36 %** (V2015, V2016, V2020, V2021, V2022 + V2024) som **verbal drøfting** (5–25 %). Sensor forventer **teorien om optimal toll + kollektiv handling/lobbyisme** som forklaring på proteksjonisme, og **fangenes dilemma** for handelskrig. Prioritet: **kunne** (verbal — ingen figur kreves).
- **Innholdskontrakt:** Hvorfor velges toll tross netto tap: (1) **optimal toll** (stort land kan tjene — kap. 4.2); (2) **kollektiv handling/lobbyisme** — konsentrerte interesser (få produsenter med mye å tjene) slår spredte (mange konsumenter med lite hver å tape); medianvelgerteorien gir **ikke** svar her. **WTOs suksess** = **multilaterale forhandlinger** der eksportlobbyer i hvert land presser for åpning og utligner importlobbyene. **Handelskrig** tross felles gevinst = **fangenes dilemma** (begge land legger toll selv om frihandel er best for begge). Andre proteksjonisme-begrunnelser (verbalt): matsikkerhet, spredt bosetting/kulturlandskap, infant-industry (kobling til kap. 5.3), oppbygging av eksportsektor. Rent verbalt kapittel — ingen figur. Symbol- og formelliste: (ingen — verbalt kapittel).
- **Oppgavesjangre:** K + L. Mønstereksempel: «Landbruket utgjør en liten andel av økonomien, men nyter et høyt importvern. Forklar dette ved hjelp av teori for politisk økonomi, og drøft hvorfor multilaterale forhandlinger likevel har klart å redusere toll over tid.»
- **Typiske feil:** Bruke medianvelgerteorien der kollektiv handling er svaret; forklare handelskrig uten fangenes dilemma; ramse opp begrunnelser uten å veie dem mot gevinsttapet; tegne figur der oppgaven ber om verbal drøfting (gir ikke uttelling).
- **Quiz: 16 · Flashcards: 20**

**Prøve-kvote Del 6:** 4 prøver (6.A migrasjonsdiagrammet med gult areal og vinner/taper-liste, sjanger G; 6.B arbeidsmigrasjon kort vs. lang sikt (Ricardo-Viner → Rybczynski), sjanger G+D; 6.C økonomisk vekst og bytteforhold med stort/lite land, sjanger J; 6.D politisk økonomi og institusjoner som verbal drøfting, sjanger K+L).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Kilder til gevinster ved handel (samleoppgaven)

- **id:** `econ1410-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** Del 1–5
- **Kapitteltype:** teori (syntese)
- **description:** Sjanger B: samle alle gevinstkildene — komparative fortrinn, stordrift/imperfekt konkurranse og heterogene bedrifter — med forutsetningene bak hver.
- **Eksamensbelegg:** «Kilder til gevinster ved handel» er en tilbakevendende samleoppgave — **55 %** (V2017, V2018, V2021, V2022, V2024, V2025 + utsatt), 12–30 %. Sensor krever at **alle** kildene dekkes **og** forutsetningene bak hver. Krysser hele boka → plassert i eksamenstreningen. Prioritet: **kunne** (syntesekapittel).
- **Innholdskontrakt:** De tre (fire) gevinstkildene med forutsetninger: (i) **komparative fortrinn** — Ricardo (ulik teknologi) og Heckscher-Ohlin (ulik faktortilgang); forutsetter at landene er **forskjellige**; (ii) **stordriftsfordeler/imperfekt konkurranse** — lavere pris + flere varianter; forutsetter **stordriftsfordeler**; (iii) **heterogene bedrifter** (Melitz) — de minst produktive presses ut, snittproduktiviteten stiger; forutsetter **ulik produktivitet** innad i næringen. Gjennomgående poeng: gevinsten kommer som **fristilling av konsum fra produksjon** / høyere indifferenskurve. Ved spørsmål om forutsetninger: neoklassisk krever forskjellige land; imperfekt konkurranse krever stordrift; heterogenitetsgevinsten krever produktivitetsspredning. Bruk figurer i ord fra de respektive kapitlene (Ricardo-KMK, HO-fristilling, PP–CC, Melitz-cutoff). Symbol- og formelliste: samler notasjonen fra kap. 1–5.
- **Oppgavesjangre:** B. Mønstereksempel: «Gjør rede for de ulike kildene til gevinster ved internasjonal handel, og forklar hvilke forutsetninger som må være oppfylt for at hver kilde skal gi gevinst.»
- **Typiske feil:** Glemme én kilde (typisk heterogene bedrifter); dekke kildene uten forutsetningene; ikke koble til fristilling/høyere indifferenskurve; skrive rent verbalt der et illustrerende diagram styrker svaret.
- **Quiz: 15 · Flashcards: 12**

#### Kapittel 7.2: Begrepsdrill: «forklar 3 av følgende»

- **id:** `econ1410-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** Del 1–6
- **Kapitteltype:** drill
- **description:** Presisjonstrening på hele begrepsrepertoaret — presis definisjon + kjernepoeng + eksempel — og regelen «ikke forklar flere enn antallet det bes om».
- **Eksamensbelegg:** Sjanger A i alle sett (15–20 %, sikre poeng). V2023 innførte «forklar kort 3 av følgende» med **1 minuspoeng for en fjerde** forklaring. Gjengangerbegreper: komparativt fortrinn, alternativkostnad, absolutt vs. komparativt fortrinn, interne vs. eksterne stordriftsfordeler, tiltagende skalautbytte, reallønn ($w/p = \text{MPL}$), monopolistisk konkurranse, intra-industrihandel, faktorsubstitusjon, avtagende marginalprodukt, faktorintensitet, faktorrikelighet, Heckscher-Ohlin-teoremet, Stolper-Samuelson-teoremet, Rybczynski-teoremet, bytteforhold, heterogene bedrifter. Prioritet: **kunne** (sikre poeng).
- **Innholdskontrakt:** Malen «presis definisjon på noen få setninger + kjernepoenget sensor ser etter + ett konkret eksempel» demonstreres; deretter drillbank som dekker ALLE gjengangerbegrepene over, hvert med fasitsvar i eksakt oppgave-1-format og henvisning til teorikapitlet (KF → 1.1, reallønn → 1.1, HO-teoremet → 2.3, Stolper-Samuelson → 3.1, Rybczynski → 3.3, stordrift → 5.1, monopolistisk konkurranse → 5.2, Melitz → 5.4, bytteforhold → 6.2). **Eksplisitt regel:** ved «forklar 3 av følgende», forklar **nøyaktig tre** — en fjerde gir minuspoeng og stjeler tid. Kjernedefinisjoner med pluss-markørene (f.eks. KF måles ved alternativkostnad + «minst én vare»; eksterne stordrift + de tre kildene).
- **Oppgavesjangre:** A. Mønstereksempel: «Forklar kort tre av følgende begreper: komparativt fortrinn, eksterne stordriftsfordeler, tiltagende skalautbytte, reallønn. (Du får ikke mer uttelling av å forklare mer enn tre.)»
- **Typiske feil:** Forklare en fjerde begrep (minuspoeng — #9); definisjon uten eksempel/kjernepoeng; forveksle nært beslektede begreper (absolutt/komparativt, interne/eksterne, faktorintensitet/faktorrikelighet); utflytende svar som stjeler tid fra den store oppgaven.
- **Quiz: 16 · Flashcards: 45**

#### Kapittel 7.3: Fra nyhetsbilde til modell: hvilken modell, kort/lang sikt, stort/lite land

- **id:** `econ1410-7-3` · **number:** 7.3 · **estimatedMinutes:** 40 · **prerequisites:** Del 1–6
- **Kapitteltype:** teori (metodetrening)
- **description:** Emnets nøkkelferdighet: oversette et dagsaktuelt case til riktig modellfamilie + tidshorisont + landstørrelse — og trene den åpne drøfteoppgaven.
- **Eksamensbelegg:** Settene kler alltid nyhetsbildet på et standardgrep (oljeprisfall/covid V2020, innreiserestriksjoner V2021, Ukraina/sanksjoner V2022, grønn industri V2024, oppdiktede land Teknolia/Jordbrukia V2024). Åpne drøfteoppgaver (sjanger L, ~10 %, V2023 Brexit-utsagnet) belønner refleksjon. Prioritet: **kjenne** (billig forsikring mot å bli forvirret av innpakningen — og der toppkarakterene skilles).
- **Innholdskontrakt:** **Oversettelsestabellen** som SKAL med: «ett land dårligst i alt, tjener det på handel?» → Ricardo/komparative fortrinn (kap. 1); «hvem vinner/taper på handelsåpning, kort vs. lang sikt» → Ricardo-Viner + Stolper-Samuelson (kap. 3); «hva skjer med produksjon når en faktor vokser / innvandring» → Rybczynski + migrasjonsdiagram (kap. 3.3, 6.1); «toll/tollkrig» → partiell likevekt, stort/lite land (kap. 4); «grønn industri/næring i gang» → eksterne stordrift/lock-in (kap. 5.3); «bilmarked med varianter» → PP–CC (kap. 5.2); «vekst i naboland bra for oss?» → bytteforhold, stort/lite (kap. 6.2); «hvorfor toll tross gevinst» → politisk økonomi (kap. 6.3). For **hvert** case: still de tre diagnosespørsmålene — (1) hvilken modellfamilie? (2) kort eller lang sikt? (3) stort eller lite land? Deretter **åpen drøfting** (sjanger L): knytt kort sikt (lønn faller) mot lang sikt (tilbake til utgangsnivå), trekk inn reelle eksempler (Brexit, Kina-effekten på nordiske land) og nyanser (kunnskapssmitte som pluss; heterogene/bedre utdannede innvandrere som mulig minus). Flere konklusjoner godtas. 6–8 korte treningscase der studenten kun skal **diagnostisere** (ikke fullføre) grep.
- **Oppgavesjangre:** L + diagnose av B–K. Mønstereksempel (diagnose): «En nyhetsartikkel melder at et stort naboland subsidierer sin bilindustri kraftig. Hvilken modellfamilie passer, er tidshorisonten kort eller lang, og spiller det noen rolle at landet er stort?» Mønstereksempel (L): «Drøft utsagnet: ‘Arbeidsinnvandring vil alltid være negativt for arbeiderne i landet fordi lønningene faller.’»
- **Typiske feil:** La den aktuelle innpakningen lede mot moralsk synsing i stedet for modellgrep; velge feil tidshorisont eller glemme landstørrelsen; konkludere skråsikkert der teorien gir motstridende krefter (#10); overse at én hendelse kan kreve to modeller (kort + lang sikt).
- **Quiz: 12 · Flashcards: 10**

#### Kapittel 7.4: Øvingseksamen 1: klassisk mal (HO-tyngdepunkt med kort/lang sikt)

- **id:** `econ1410-7-4` · **number:** 7.4 · **estimatedMinutes:** 180 · **prerequisites:** `econ1410-7-2`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett 3-timers sett etter 25/50/25-malen (V2025-standarden) med den store HO-fordelingsoppgaven i kjernen.
- **Eksamensbelegg/miks:** Speiler et typisk V2018/V2025-sett. **Oppgave 1 (25 %):** «kilder til gevinster ved handel» (sjanger B) med forutsetningene, eller «forklar 3 av følgende» (sjanger A). **Oppgave 2 (50 %), stor HO-fordelingsoppgave (nyskrevet case — f.eks. et arbeidsrikelig og et kapitalrikelig land):** (a) autarki grafisk med skjev PMK; (b) frihandel med fristilling og HO-teoremet; (c) **lang sikt** Stolper-Samuelson (vinner/taper realt); (d) **kort sikt** Ricardo-Viner (badekar, tvetydig reallønn); (e) verbal drøfting av fordelingskonflikten. **Oppgave 3 (25 %), handelspolitikk:** toll i lite eller stort land med arealer + kort politisk-økonomi-hale. Alle nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave (med figurbeskrivelser i ord), med `tip`-notat om delpoeng/vekting og tidsbudsjett (45 min / 90 min / 45 min).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.5: Øvingseksamen 2: migrasjon og Rybczynski (V2023-malen)

- **id:** `econ1410-7-5` · **number:** 7.5 · **estimatedMinutes:** 180 · **prerequisites:** `econ1410-7-4`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett sett etter V2023-malen (18/32/50) med en tung arbeidsmigrasjonsoppgave og de to nye sjangrene.
- **Eksamensbelegg/miks:** Speiler V2023. **Oppgave 1 (18 %):** «forklar kort 3 av følgende» (sjanger A, med minuspoeng-regelen — én av valgmulighetene er en «felle» studenten ikke skal forklare). **Oppgave 2 (32 %), handelspolitikk/stordrift (nyskrevet — f.eks. næring med eksterne stordriftsfordeler / grønn industri):** first-mover/lock-in med proteksjonismedrøfting (sjanger I) eller PP–CC (sjanger H). **Oppgave 3 (50 %), arbeidsmigrasjon (sjanger G):** (a) migrasjonsdiagrammet med gult areal; (b) eksplisitt vinner/taper-liste; (c) **kort sikt** (Ricardo-Viner) vs. **lang sikt** (Rybczynski); (d) åpen drøfting av et påstands-utsagn à la Brexit (sjanger L). Løsningsforslag som A-besvarelse med vektings-`tip` og tidsbudsjett (32 min / 58 min / 90 min).
- **Quiz: 5 · Flashcards: 0**

#### Kapittel 7.6: Øvingseksamen 3: fire oppgaver (korona-/jevnvekt-malen med toll og stordrift)

- **id:** `econ1410-7-6` · **number:** 7.6 · **estimatedMinutes:** 180 · **prerequisites:** `econ1410-7-5`
- **Kapitteltype:** øvingseksamen
- **description:** Komplett fire-oppgavers sett etter 25/25/25/25-malen (V2021-varianten) som brer dekningen over alle fire modellfamiliene.
- **Eksamensbelegg/miks:** Speiler V2020/V2021 (fire likt vektede oppgaver). **Oppgave 1 (25 %):** begreper (sjanger A) + Ricardo grafisk (KF-rangering, RS/RD). **Oppgave 2 (25 %):** HO autarki→frihandel med Stolper-Samuelson (sjanger C+D). **Oppgave 3 (25 %):** toll i partiell likevekt, stort vs. lite land med tre paneler (sjanger F). **Oppgave 4 (25 %):** stordrift/monopolistisk konkurranse (PP–CC) + heterogene bedrifter (sjanger H), eller økonomisk vekst og bytteforhold (sjanger J). Nyskrevet, dagsaktuell innramming. Til sammen dekker de tre øvingseksamenene sjangrene A, B, C, D, E, F, G, H, I, J, K, L minst én gang. Løsningsforslag som A-besvarelse med vektings-`tip` og tidsbudsjett (45 min × 4).
- **Quiz: 5 · Flashcards: 0**

**Prøve-kvote Del 7:** ingen egne prøver (delen består av syntese + drill + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 12 | 10 | 0 |
| 1 | 1.1–1.4 | 26+22+18+15 = **81** | 26+22+20+10 = **78** | 4 |
| 2 | 2.1–2.4 | 22+22+22+15 = **81** | 24+24+24+10 = **82** | 4 |
| 3 | 3.1–3.4 | 22+22+20+15 = **79** | 24+24+22+10 = **80** | 4 |
| 4 | 4.1–4.4 | 20+20+12+15 = **67** | 20+20+12+10 = **62** | 4 |
| 5 | 5.1–5.5 | 18+20+16+14+12 = **80** | 22+20+16+14+8 = **80** | 4 |
| 6 | 6.1–6.3 | 20+16+16 = **52** | 20+16+20 = **56** | 4 |
| 7 | 7.1–7.6 | 15+16+12+5+5+5 = **58** | 12+45+10+0+0+0 = **67** | 0 (3 øvingseksamener) |
| **Sum** | **31 kap.** | **510 ≥ 500 ✓** | **515 ≥ 500 ✓** | **24 + 3 ØE** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: Del 1 + Del 2 + Del 3 (KF-grunnmuren, den store
HO-oppgaven og kort/lang-sikt-metodikken som bærer 55–80 % av eksamenspoengene)
står for 241 av 510 quiz.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6, 24 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord) og poengfordeling. Omfang i minutter.
Prøvekapitler bygges som `econ1410-<del>-prove`, chapterNumber `<del>.P`.

**Del 1 — Komparative fortrinn og Ricardo**
1. Prøve 1.A (25 min): Begreper — komparativt/absolutt fortrinn, alternativkostnad, reallønn, med pluss-markørene (sjanger A).
2. Prøve 1.B (30 min): Ricardo grafisk — rett PMK, full spesialisering, RS/RD og verdenspris (sjanger A/B-fundament).
3. Prøve 1.C (30 min): Tallcase KF-rangering + gevinstforklaring med KMK utenfor PMK (sjanger B).
4. Prøve 1.D (40 min): Full Ricardo-kjede på eksamensnivå: tabell → KF → RS/RD → gevinst (sjanger A+B).

**Del 2 — Heckscher-Ohlin**
1. Prøve 2.A (25 min): Begreper — faktorintensitet, faktorrikelighet, faktorsubstitusjon, buet vs. rett PMK (sjanger A).
2. Prøve 2.B (35 min): Autarkifiguren korrekt tegnet og forklart — skjev PMK, tangering, relativpris (sjanger C-del).
3. Prøve 2.C (35 min): Frihandelsovergangen med fristilling og HO-teoremet navngitt (sjanger C-del).
4. Prøve 2.D (45 min): Full autarki→frihandel-oppgave på 40–50 %-nivå med to land (sjanger C).

**Del 3 — Inntektsfordeling: kort sikt vs. lang sikt**
1. Prøve 3.A (35 min): Stolper-Samuelson — omstillingsprosess, reell vinner/taper, teorem navngitt (sjanger D-lang).
2. Prøve 3.B (35 min): Ricardo-Viner-badekaret — skift, lønn, tvetydig reallønn, vinner/taper (sjanger D-kort).
3. Prøve 3.C (30 min): Rybczynski/faktorvekst — skjevvekst i PMK, stort/lite land, konstant-pris-forbeholdet (sjanger E).
4. Prøve 3.D (50 min): Full kort-vs-lang-sikt-oppgave der studenten selv velger modell (sjanger D).

**Del 4 — Handelspolitikk i partiell likevekt**
1. Prøve 4.A (30 min): Toll i lite land — arealer A–D navngitt, nettotap b+d, A som overføring (sjanger F).
2. Prøve 4.B (40 min): Optimal toll i stort land — tre paneler, bytteforholdsgevinst e, betingelsen e>b+d (sjanger F).
3. Prøve 4.C (25 min): Eksportsubsidie + strategisk handelspolitikk verbalt (sjanger F/K «kjenne»).
4. Prøve 4.D (45 min): Full toll-oppgave på eksamensnivå med stort/lite-land-vri og politisk-økonomi-hale (sjanger F+K).

**Del 5 — Stordriftsfordeler og imperfekt konkurranse**
1. Prøve 5.A (30 min): Begreper — interne/eksterne stordrift (tre kilder), tiltagende skalautbytte, monopolistisk konkurranse, intra-industrihandel (sjanger A).
2. Prøve 5.B (35 min): PP–CC ved markedsutvidelse — flere bedrifter/lavere pris, færre enn autarkisum (sjanger H).
3. Prøve 5.C (30 min): Eksterne stordrift/lock-in med proteksjonismedrøfting og handelskrig-risiko (sjanger I).
4. Prøve 5.D (45 min): Full stordriftsoppgave i oppgave-3-format med Melitz-bonus (sjanger H+I).

**Del 6 — Faktorbevegelighet, vekst og politisk økonomi**
1. Prøve 6.A (35 min): Migrasjonsdiagrammet — gult areal, lønnsutjevning, full vinner/taper-liste (sjanger G).
2. Prøve 6.B (35 min): Arbeidsmigrasjon kort vs. lang sikt (Ricardo-Viner → Rybczynski) (sjanger G+D).
3. Prøve 6.C (30 min): Økonomisk vekst og bytteforhold — import-/eksportskjev, stort/lite land (sjanger J).
4. Prøve 6.D (30 min): Politisk økonomi og institusjoner som verbal drøfting — lobbyisme, WTO, fangenes dilemma (sjanger K+L).

### Øvingseksamener (3 komplette sett — se kap. 7.4–7.6)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.4) | Klassisk 25/50/25 (V2018/V2025) | Kilder til gevinster / begreper 25 % + stor HO-fordelingsoppgave 50 % (autarki→frihandel + Stolper-Samuelson + Ricardo-Viner + drøfting) + toll 25 % |
| Øvingseksamen 2 (kap. 7.5) | V2023-malen (18/32/50) | «Forklar 3 av følgende» 18 % + stordrift/lock-in eller PP–CC 32 % + tung arbeidsmigrasjon 50 % (gult areal + kort/lang sikt + åpen drøfting) |
| Øvingseksamen 3 (kap. 7.6) | Korona-/jevnvekt (25×4, V2021) | Begreper+Ricardo 25 % + HO+Stolper-Samuelson 25 % + toll stort/lite land 25 % + stordrift/Melitz eller vekst/bytteforhold 25 % |

Til sammen dekker de tre settene sjangrene A–L minst én gang; prøvene 1.A–6.D
dekker de samme sjangrene i mindre format med tettere tilbakemelding.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen (3 timer, Inspera, tre hovedoppgaver),
   0–100-poengskalaen med karaktergrenser, vektingshistorikken og prognosen for
   V2026 (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   perfekt (Del 1–4: KF/Ricardo, den store HO-oppgaven komplett, kort vs. lang
   sikt for fordeling, toll i partiell likevekt), kunne (Del 5 stordrift/PP–CC,
   kilder til gevinster, begrepsrepertoaret, arbeidsmigrasjon), kjenne (Del 6
   økonomisk vekst/bytteforhold, politisk økonomi, eksportsubsidie, åpen
   refleksjonsdrøfting).
3. **Sjangerguiden** — oppgavetypene A–L med løsningsoppskriftene fra
   drillkapitlene (1.4, 2.4, 3.4, 4.4, 5.5) i kortform: KF-rangeringsalgoritmen,
   den fullstendige HO-figuren, kort-vs-lang-sikt-diagnosen, toll-arealalgoritmen,
   PP–CC-grepet, begrepsmalen.
4. **De to metodeaksene** — kort vs. lang sikt (Ricardo-Viner ↔ Stolper-Samuelson/
   Rybczynski) og stort vs. lite land (bytteforhold) — som eget oppslag, siden de
   avgjør flest oppgaver (fra kap. 3.4 og 7.3).
5. **Sensorreglene** — metareglene (tekst OG figur; ikke svar på mer enn spurt;
   navngi teoremet; identifiser vinnere/tapere; prioriter etter vekting;
   poeng er veiledende) + toppsjikt-listen (fullstendige HO-figurer, korrekt
   kort/lang-sikt-kobling, se usikre/motstridende totaleffekter, tre paneler i
   optimal toll, reelle eksempler) fra kap. 0.1 og §4 i analysen.
6. **Feilkatalogen** — de 10 typiske feilene samlet (PMK ikke skjev/feil form;
   bare autarki-figur; blande kort og lang sikt; glemme stort/lite land; tegne
   uten å forklare eller omvendt; ikke navngi teoremet; glemme vinnere/tapere;
   produsentgevinst A som netto gevinst; svare på mer enn spurt; overse tvetydige
   totaleffekter), hver med henvisning til kapitlet som forebygger den.
7. **Figurbiblioteket** — de ~10 standardfigurene i ord (Ricardo rett PMK + RS/RD;
   HO autarki med skjev PMK; HO frihandel med fristilling; Stolper-Samuelson
   $w/r$-diagram; Ricardo-Viner-badekaret; Rybczynski-skjevvekst; toll lite land;
   optimal toll tre paneler; PP–CC; migrasjonsdiagrammet med gult areal) med
   merkekravene per figur.
8. **Notasjonsark i emnets språk** — én side: $a_C/a_F$, $P_C/P_F$, $w/r$, $K/L$,
   $w/p = \text{MPL}$, tollarealer A–E (–G), PP–CC-uttrykkene $P = c + 100/n$ og
   $AC = c + nF/S$, med markering av hva som skal *tegnes/forklares* (nesten alt)
   vs. det få «regnbare» (Ricardo-alternativkostnad, PP–CC-likevekt).
9. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant):
   Del 0 → 1 → 2 → 3 (kjernen først: KF, den store HO-oppgaven, kort/lang sikt),
   deretter 4 → 5, så 6, prøver underveis, øvingseksamenene de tre siste ukene
   under tidspress (180 min med vektstyrt tidsbudsjett).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ1410` med alle 31
   kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites)
   etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`;
   `sectionNames` fra makrostruktur-tabellen (§2). Wires i
   `textbook-courses-hoyskole.ts` (jf. PRODUKSJONSLOYPE fase 5).
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L, frekvenstallene, de to
   metodeaksene og figurregelen som resten refererer til.
3. **Kjernen i avhengighetsrekkefølge**: Del 1 → Del 2 → Del 3 (KF-grunnmuren,
   den store HO-oppgaven og kort/lang-sikt-metodikken som bærer mest av eksamen).
4. Del 4 → Del 5 (oppgave-3-rotasjonen), deretter Del 6.
5. Del 7 til slutt (samleoppgaven, begrepsdrillen og øvingseksamenene gjenbruker
   alt). Batching: **én agent per hel del** (jf. fase 4); Del 5 (5 kap.) og Del 7
   (6 kap.) kan deles, men gi da begge agentene hele delens kontrakter.
6. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§4) legges i prøvekapitler per del
   (`econ1410-<del>-prove`, chapterNumber `<del>.P`).

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
  (generer helst via `json.dump`; escape `"` i norske sitattegn); `npm run build`
  grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
  (`\\frac`); ingen unicode-brøker; konsistent $a_C/a_F$, $P_C/P_F$, $w/r$, $K/L$,
  $w/p$, PP/CC-uttrykkene.
- [ ] **Notasjonskonsistens**: tekstsøk over alle econ1410-filer — **forbudte
  termer** (skal gi null treff): valutakurs, vekslingskurs, exchange rate,
  betalingsbalanse, driftsbalanse, current account, renteparitet, pengepolitikk,
  sentralbank, «handelsskaping», «handelsvridning», tollunion (som modell);
  **påkrevd**: PMK, KMK/VV, MPL, komparativt fortrinn, alternativkostnad,
  Heckscher-Ohlin, Stolper-Samuelson, Rybczynski, Ricardo-Viner, tollarealer A–E,
  PP–CC.
- [ ] **Grafisk/verbal, ikke algebra**: ingen tunge derivasjons-/nyttefunksjons-
  utledninger; det eneste «regnbare» er Ricardo-alternativkostnad (tall) og
  PP–CC-likevekten. Grep etter «deriver»/«integral» utenfor eventuelle rene
  metanevninger skal gi null treff.
- [ ] **Figur + mekanisme**: hvert eksempel og løsningsforslag med figur
  inneholder både figurbeskrivelse i ord (akser, kurver, punkter, arealer/skift
  navngitt) og verbal mekanisme; alle fordelingsoppgaver lister vinnere/tapere
  eksplisitt; teoremer navngis (Heckscher-Ohlin/Stolper-Samuelson/Rybczynski);
  PMK tegnes skjevt i autarki og som rett linje i Ricardo / buet i HO.
- [ ] **Kort/lang sikt + stort/lite land**: kap. 3.4 og 7.3 driller begge akser;
  ingen kapittel bruker HO/Stolper-Samuelson der Ricardo-Viner er riktig eller
  omvendt (grep-stikkprøve på badekar-/spesifikk-faktor-kontekst).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene
  fra dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og formelliste-
  `collapsible` (per delkapittel), Typiske feil-`warning`, 2–4 eksempler (siste på
  eksamensnivå med figur i ord), 6–12 øvinger med `solution` + `hints`,
  repetisjons-`collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert
  (gjennomtegnet) case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 510 og flashcard-sum ≥ 515** per kvotetabellen (kontrollsummér
  mot §3-tabellen — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener; settene og
  prøvene dekker samlet sjangrene A–L minst én gang.
- [ ] **Kryssbok-lenker**: alle `/econ1210/...`-lenker peker på eksisterende
  kapitler; er ECON1210 ikke publisert, er lenkene nedgradert til ren tekstomtale
  (ingen døde lenker — jf. §1).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, land, bransjer og
  formuleringer; ingen formuleringer fra reelle sett eller sensorveiledninger
  (skjelettets mønstereksempler er selv omskrivninger og skal varieres videre,
  ikke kopieres ordrett inn); pensum (Krugman, Obstfeld & Melitz) refereres,
  aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
  (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`.
