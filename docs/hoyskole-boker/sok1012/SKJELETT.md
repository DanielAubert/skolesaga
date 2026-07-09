# Bokskjelett: SØK1012 Makroøkonomisk analyse — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (≈24 oppgavesett V2012–V2025 + 18–19 sensorveiledninger
> V2015–V2025, med Holden-epoken 2018–2025 grundig lest). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori/drill/
> øvingseksamen) er obligatoriske og gjentas ikke her. Emnet har i tillegg et
> **tungt verbalt/grafisk drøftingselement** (sjokk-drøftingen, målkonflikt-
> vurderingen, konvergens- og gjeldsdrøftingen er *mer* verbale enn ECON1310s
> algebra-signatur); for det ene rene sjangerkapitlet som drilles spesifikt (8.1,
> den historiske IS-LM/AS-AD-oversettelsen) og for konvergens-/gjeldsdrøftingene
> lånes disponerings-idéen fra `DNA-drofting.md` (oppskrift → gjennomskrevet
> besvarelse → momentliste), dokumentert der. Alle mønstereksempler i skjelettet
> er omskrivninger; forfatteren skal variere dem videre (egne tall, egne
> kontekster, egne sjokk), aldri kopiere inn ordrett.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `sok1012` |
| Tittel | **SØK1012 Makroøkonomisk analyse** |
| Institusjon | NTNU (Institutt for samfunnsøkonomi) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (grafisk/algebraisk modellfag) med **tungt verbalt/grafisk drøftingselement** (sjokk-, målkonflikt-, konvergens- og gjeldsdrøfting) |
| Antall kapitler | **28** (1 eksamenskart + 3 Keynes-fundament + 5 IS-RR-PK lukket + 4 sjokk/pengepolitikk + 4 åpen økonomi + 2 arbeidsmarked + 3 Solow/konvergens + 2 statsgjeld + 4 eksamenstrening) |
| Estimert totaltid | **2 415 min ≈ 40 timer** |
| Quiz totalt | **564** (krav ≥500) |
| Flashcards totalt | **568** (krav ≥500) |

**Statusmerknad (nedlagt, men eksamensrelevant):** SØK1012 er **utfaset** —
undervisningen er fra 2024/25 erstattet av SØK1025 + SØK1026 — men emnet er
fortsatt eksamensrelevant for studenter på bachelor-planer fra 2023 eller
tidligere, og eksamensarkivet går til **V2025**. Boka bygges derfor: den dekker
et aktivt eksamensbehov og er **ikke** dekket av noen ferdigbygd bok (se §7).

**Pitch (ett avsnitt):** SØK1012-eksamen har én motor som går igjen i **hver
eneste** eksamen i Holden-epoken (2018–2025): **IS-RR-PK-modellen**, som regel for
en **åpen økonomi** med flytende valutakurs og fleksibel inflasjonsstyring, brukt
til **sjokk-analyse** (etterspørsels-, kostnads-, valutakurs- og rentesjokk).
Rundt denne motoren står fire søyler som **mangler helt hos UiO/ECON1310** men er
faste her: **åpen økonomi/valutakurs** (nettoeksport, Marshall-Lerner, udekket
renteparitet), **Solow-vekst**, **inntektskonvergens/teknologisk catch-up** og
**statsgjeldsdynamikk**. Denne boka er bygget som nettopp de fem søylene, med et
felles **Keynes-fundament** (BNP/nasjonalregnskap, konsum-/investerings-/
skattefunksjon, multiplikator, obligasjonsprising) i bunn. Den driller de fem
ferdighetene som avgjør karakteren: **presentere og utlede IS-RR-PK** (de tre
kurvene, helningene, RR-kurvens **to** grunner til å være stigende), **sjokk-
analyse** (hvilke kurver skifter og hvorfor, effekt på *alle* sentrale variable,
og hvorfor visse totaleffekter er *uklare*), **sentralbankens målkonflikt**
(skillet etterspørselssjokk = ingen konflikt vs. kostnads-/valutasjokk = reell
konflikt, med $d_1/d_2$-vektleggingen), **åpen-økonomi-apparatet** (UIP, ML,
valutakurskanalen) og **de tre NTNU-unike temaene** (Solow-likevekt, konvergens,
gjeldsgrad-regning med $r$ vs. $g$).

**Kritisk kalibreringsregel (gjelder HELE boka) — Holden-epoken er styrende:**
SØK1012-arkivet deler seg i to pensum-epoker. Boka bygges på **Holden-epoken
(2018–2025): IS-RR-PK, renteregel, Phillips-kurve, lønns-/priskurve** — som er
dagens eksamensrelevans. **IS-LM og AS-AD** (Blanchard-epoken 2012–2017) skal
IKKE være bokas hovedapparat; de nevnes kun kort i det historiske sjangerkapitlet
(8.1) slik at studenten kan lese eldre besvarelser. Dette er **motsatt av
ECON1310**, der IS-LM/AS-AD aldri har vært på eksamen — men her *var* de kjernen
frem til 2017.

**Kritisk avgrensnings- og komplementregel (gjelder HELE boka):** SØK1012 er
NTNUs bredere motstykke til UiOs **ECON1310 Makroøkonomi I** (bygd, live). De
deler kjernen (IS-RR-PK, Phillips-kurve, penge-/finanspolitikk, lønnsdannelse,
samme Holden-notasjon), men SØK1012 skiller seg på tre måter som styrer
bokdesignet: (1) **åpen økonomi er hovedstoff** her (perifert hos UiO); (2) **fire
tema er faste her men fraværende hos UiO**: Solow-vekst, konvergens/catch-up,
statsgjeldsdynamikk og åpen-økonomi-dybde; (3) den store oppgaven er **mindre
algebra-tung** — sensor ber om «forklar intuisjonen, vis skiftene grafisk, drøft
målkonflikten», ikke komparativ statikk på tilvekstform (ECON1310s signatur). Boka
skal derfor **vekte verbal/grafisk resonnement tyngre enn ren utledning**. Der
forkunnskap i makro-grunnlaget trengs, kryssrefereres til **SOK1000** (NTNUs
innføring) og til den bygde **ECON1310**-boka med markdown-lenker der de deler
apparat. Se §7 for full arbeidsdeling.

**Kritisk notasjonsregel (gjelder HELE boka)** — Holden-notasjonen fra arkivet
skal brukes nøyaktig, ikke lærebok-alternativer:

- **Keynes-modellen:** lukket $Y = C + I + G$; åpen $Y = C + I + G + NX$. Konsum
  $C = z^C + c_1(Y-T) - c_2(i-\pi^e)$; investering $I = z^I + b_1 Y - b_2(i-\pi^e)$;
  skatt $T = z^T + tY$; nettoeksport $NX = z^{NX} - a_1 Y - a_2 E - a_3 P$ (evt.
  $NX(Y, Y^F, \varepsilon)$). Multiplikator $m = 1/(1 - c_1(1-t) - b_1)$.
- **IS-kurven:** fallende i $(Y, i)$-diagram; helning
  $dY/di = -(c_2+b_2)/(1 - c_1(1-t) - b_1)$; **flatere i åpen enn lukket** økonomi
  (ekstra valutakurskanal).
- **Phillips-kurven:** $\pi = \pi^e + \beta(Y - Y^n)/Y^n + z^\pi$ (evt.
  ledighetsformen $\dot W = \dot{P^e} + \dot{A^e} - b(u - u^n)$).
- **Renteregel og RR-kurven:** $i = z^i + d_1(\pi - \pi^*) + d_2(Y - Y^n)/Y^n$;
  RR fås ved å sette PK inn i renteregelen; **stigende av to grunner** (direkte
  $d_2$ + indirekte $d_1\beta$).
- **Lønns-/priskurve:** priskurve $P = (1+\mu)W/A$ (⇒ reallønn $W/P = A/(1+\mu)$);
  lønnskurve $W = P^e A^e \, \mathcal{W}(u, z^W)$; likevektsledighet $u^n$ der
  $P^e = P$, $A^e = A$.
- **Solow:** $Y = F(K, N)$ med $F'_K > 0$, $F''_{KK} < 0$; $\Delta K = I - \delta K$;
  $S = I$; $S = sY$ ⇒ $\Delta K = sF(K, \bar N) - \delta K$; likevekt $K^*$ der
  $sF(K^*, \bar N) = \delta K^*$.
- **Statsgjeld:** gjeldsgradens endring som funksjon av primærbalanse og $(r - g)$;
  stabiliserende primærbalanse; $r$ vs. $g$ avgjør stabil/ustabil likevekt; grafisk
  mot 45°-linjen.
- **Åpen økonomi:** realvalutakurs $\varepsilon = EP/P^*$; Marshall-Lerner-
  betingelsen; udekket renteparitet $E = E^e - \kappa(i^F - i)$.
- **Obligasjon:** kurs $= \text{pålydende}/(1 + \text{rente})$ for ettårig obligasjon.

**Kritisk metoderegel (gjelder HELE boka):** Fem faste sensorkrav gjelder overalt
(fra analysens §4): **(a) intuisjon og mekanismeforklaring veier tyngst** — den
økonomiske forklaringen på *hvorfor* en kurve skifter og *hvorfor* helningen er
som den er teller mer enn tallet; **(b) forklar helningene** — særlig RR-kurvens
**to** grunner (direkte + indirekte) og IS-kurvens **to** kanaler (rente- og, i
åpen økonomi, valutakurskanal); **(c) se på ALLE sentrale variable** — i den åpne
modellen skal også konsum, investering, skatt, valutakurs og handelsbalanse
kommenteres, ikke bare BNP/rente/inflasjon; **(d) grafisk fremstilling er
obligatorisk** — riktig kurve som skifter, riktig retning, utgangspunkt og ny
likevekt markert; **(e) se de uklare totaleffektene** — det som løfter til A er å
forklare *hvorfor* renteeffekten av et kostnadssjokk / BNP-effekten av et
valutakurssjokk er teoretisk ubestemt. **Mekanismen bak resultatet teller mer enn
selve resultatet.**

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen): Keynes-fundamentet i bunn,
deretter IS-RR-PK-motoren (lukket → sjokk → åpen), så de tre selvstendige søylene
(arbeidsmarked, Solow/vekst, statsgjeld), til slutt eksamenstreningen. Frekvensen
styrer *omfanget* — IS-RR-PK og sjokk-analyse er ~100 %-gjengangere og får to hele
deler med drillkapitler; de fire NTNU-unike temaene er faste men lavere-frekvente
og får kompakte deler.

| Del | Seksjonstittel (`sectionNames`) | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. Rammer inn de to epokene, sjokk-katalogen og de fem søylene; avgrenser mot ECON1310 (bredere her) og SOK1000 (under). |
| 1 | Keynes-modellen og makrofundament | 3 | BNP/nasjonalregnskap, Keynes-modellen med multiplikator (grunnlaget IS utledes fra) og obligasjonsprising. Forutsatt aktivt i IS-utledningen og i rente-/obligasjonsoppgaven. Fundament. |
| 2 | IS-RR-PK-modellen (lukket økonomi) | 5 | Selve motoren: IS-utledning ~70 %, Phillips-kurven ~85 %, RR-kurven ~80 %, hele diagrammet ~100 %. Nivå 1 «perfekt» → 4 teorikapitler + drillkapittel. |
| 3 | Sjokk-analyse og pengepolitikk | 4 | Sjokk-analyse ~100 %, målkonflikt ~85 %; etterspørsels- og kostnadssjokk er den faste øvelsen; 2-sektor/oljeøkonomi ~15 %. Nivå 1 «perfekt» → 3 kapitler + drillkapittel. |
| 4 | Åpen økonomi og valutakurs | 4 | Nettoeksport/UIP/ML ~80 %, valutakurssjokk fast, åpen IS-RR-PK er dagens hovedvariant. Langt mer sentralt enn hos UiO. Nivå 1 «perfekt» → 3 teorikapitler + drillkapittel. |
| 5 | Arbeidsmarked og lønnsdannelse | 2 | Lønns-/priskurve/likevektsledighet ~30 % (egen tung oppgave H2019/H2017), og bakgrunnen for Phillips-kurven. Nivå 2 «kunne» → 2 kapitler (teori + skiftanalyse-drill foldet inn). |
| 6 | Solow-vekst og inntektskonvergens | 3 | Solow ~40 %, konvergens/catch-up ~40 % — to av de fire NTNU-unike temaene, faste fra 2022. Nivå 2 «kunne» → 2 teorikapitler + drillkapittel. |
| 7 | Statsgjeldsdynamikk | 2 | Gjeldsdynamikk ~50 %, fast fra 2022 (den fjerde NTNU-unike søylen). Nivå 2 «kunne» → 1 teorikapittel + drillkapittel. |
| 8 | Eksamenstrening | 4 | Historisk IS-LM/AS-AD-sjangerkapittel (for eldre besvarelser) + 3 komplette øvingseksamener som speiler de to arketypene (én stor IS-RR-PK-oppgave; temameny med Solow/gjeld/åpen økonomi). |

**Avvik fra DNA-malen (dokumentert):**
1. DNA-en legger *alle* sjangerkapitler i siste del. Her ligger drillkapitlene
   (2.5 IS-RR-PK, 3.4 sjokk, 4.4 åpen økonomi, 6.3 Solow/konvergens, 7.2 statsgjeld)
   inne i sine egne søyler, fordi hver søyle ER en gjennomgående eksamensoppgave og
   må drilles umiddelbart etter teorien. Del 8 beholder det historiske sjanger-
   kapitlet (8.1) og de tre øvingseksamenene.
2. DNA-en er ren regnefag. SØK1012 har et **tungt drøftingselement** — sjokk-,
   målkonflikt-, konvergens- og gjeldsdrøftingen er *mer* verbale enn algebraiske.
   Det håndteres inne i teori-/drillkapitlene (hvert eksempel og hver løsning
   avsluttes med den verbale mekanismeforklaringen sensor krever) heller enn i egne
   drøftingskapitler, fordi drøftingen her er *forankret i modellanalysen*, ikke i
   pensumforfattere. Det historiske sjangerkapitlet (8.1) følger likevel
   `DNA-drofting.md`s oppskrift-mal (oppskrift → gjennomskrevet oversettelse →
   momentliste).
3. Del 1 (Keynes-fundamentet) testes sjelden som egen oppgave (unntatt
   obligasjonsprising ~25 % og spareparadoks ~25 %), men får egen del fordi
   **IS-kurven utledes fra Keynes-modellen** og multiplikatoren/nasjonalregnskapet
   er forutsatt i hele Del 2–4.
4. Konvergens/catch-up (kap. 6.2) har et ekte **verbalt drøftingselement** (de
   institusjonelle hindrene, «advantage of backwardness», permanent vs. midlertidig
   humankapitaleffekt) og forankres derfor både i Solow-modellen (klassisk
   konvergens) og i pensumartikkelen (Stokke, teknologisk catch-up) — den ene
   navngitte pensumreferansen i boka (§7).

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–L) refererer til
oppgavetype-katalogen som presenteres i Del 0 (gjengitt der fra analysen §3):
**A** presenter/tolk IS-RR-PK, **B** etterspørselssjokk, **C** kostnadssjokk +
målkonflikt, **D** valutakurssjokk (åpen), **E** IS-LM med valutakursregime
(historisk), **F** Solow/vekst, **G** inntektskonvergens/catch-up, **H**
statsgjeldsdynamikk, **I** lønnsdannelse/likevektsledighet, **J** åpen økonomi
(NX/UIP/ML), **K** obligasjonsprising, **L** 2-sektor/oljeøkonomi. Prioritetsklasser:
**perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet: slik testes SØK1012

- **id:** `sok1012-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** eksamenskart
- **description:** Eksamensformen, de to pensum-epokene, de fem søylene, sjokk-katalogen, temafrekvensene, sjangerkatalogen A–L og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på ≈24 sett + 18–19 sensorveiledninger. Skal gjengi: (i) **formen**: 5 timers skriftlig skoleeksamen (09.00–14.00), digital i Inspera; håndtegnede figurer lastes opp (egen filopplastingstid); karakter A–F, 7,5 studiepoeng; **hjelpemidler = kode C**: matematisk formelsamling (Sydsæter, Strøm & Berck) + enkel kalkulator (under korona V2020/V2021/V2023 var det hjemme-eksamen med *alle* hjelpemidler — da teller forståelse og forklaring, IKKE detaljert utledning); **modellvedlegg** fra Holden-epoken (ligningene til utvalgte modeller legges ved — studenten skal *utlede, tolke og bruke*, ikke pugge ligningene); oppgavetekst på bokmål og nynorsk (eldre sett også engelsk). (ii) **De to epokene**: Blanchard-epoken (≈2012–2017, IS-LM/AS-AD, historisk) og **Holden-epoken (2018–2025, IS-RR-PK — den styrende)**; understrek at boka bygger på Holden og at IS-LM/AS-AD kun dekkes historisk (kap. 8.1), motsatt av ECON1310. (iii) **De to Holden-arketypene**: enten (a) én stor sammensatt IS-RR-PK-oppgave (V2025, H2023), eller (b) 2–4 separate oppgaver med IS-RR-PK tyngst + en temameny (Solow/konvergens + gjeld + åpen økonomi + evt. obligasjon). (iv) **Temafrekvens-tabellen (Holden-epoken, §2A)**: IS-RR-PK ~100 %, sjokk-analyse ~100 %, målkonflikt ~85 %, Phillips-kurven ~85 %, åpen økonomi (NX/UIP/ML) ~80 %, RR-kurven ~80 %, IS-utledning ~70 %, statsgjeld ~50 %, Solow ~40 %, konvergens/catch-up ~40 %, lønnsdannelse ~30 %, obligasjon ~25 %, finanspolitikk/spareparadoks ~25 %, 2-sektor ~15 %. (v) **Sjokk-katalogen**: etterspørsels-, kostnads-, valutakurs- og rentesjokk — samme øvelse hvert år, bare sjokkvariabel, fortegn og åpen/lukket-versjon varierer; presenter tabellen «hvilket sjokk skifter hvilke kurver». (vi) **Sensorens fem metaregler** (fra §4): intuisjon > tall; forklar helningene (RR sine to grunner, IS sine to kanaler); se ALLE variable; grafisk obligatorisk; se de uklare totaleffektene. (vii) **Karakterskillene** (§4): bestått (E) = riktig retning på sentrale skift + korrekt hovedkonklusjon BNP/rente/inflasjon + forsøk på mekanisme; midt (C/D) = komplett korrekt sjokk-analyse + korrekt gjeldsgrad-/obligasjon-/Solow-regning + dekkende drøfting; topp (A/B) = ser og forklarer de uklare totaleffektene, forklarer målkonflikten presist (etterspørselssjokk = ingen, kostnads-/valutasjokk = reell), trekker inn åpen-økonomi-nyansen (full nøytralisering umulig), ML-dybde (mindre sannsynlig ved svak kvantumsrespons/underskudd), UIP-overshooting, gjeldsdynamikkens «onde sirkel», konvergens koblet til institusjoner.
- **Innholdskontrakt:** Oppgavetype-katalogen A–L presenteres som studentens sjekkliste med typisk plassering: den store oppgaven bygges av A → B/C/D (presenter modellen, analyser to–tre sjokk med målkonflikt); temamenyen av F/G (Solow/konvergens), H (gjeld), J (åpen økonomi/ML), K (obligasjon), evt. L (2-sektor) og I (lønnsdannelse). **Prognose for neste eksamen** (§7): overveldende sannsynlig **én tung åpen-økonomi-IS-RR-PK-oppgave** (presenter modellen + analyser to–tre sjokk med målkonflikt-drøfting), pluss **én eller to** av: Solow/konvergens, statsgjeldsdynamikk, åpen-økonomi/ML — evt. en kort obligasjonsoppgave; verbal/grafisk drøfting vektes høyere enn algebra. Avslutt med **avgrensningen**: hva som er Holden vs. Blanchard (IS-LM/AS-AD kun historisk); at boka er bredere enn ECON1310 (fire ekstra søyler) men mindre algebra-tung; hva som forutsettes fra SOK1000/ECON1310 (BNP, nasjonalregnskap, enkel Keynes-modell) med kryssbok-lenker; og **leseplanen**: Del 1 er fundament, Del 2–4 er den store oppgaven (kjernen), Del 5–7 er temamenyens tre selvstendige søyler, Del 8 er ren trening.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en 5-timers eksamen med én IS-RR-PK-oppgave (60 %) + Solow (20 %) + gjeld (20 %) — sett opp tidsbudsjett» og «hvilke fem ferdigheter avgjør karakteren, og i hvilken del drilles hver?».
- **Typiske feil:** Metafeilene: bygge boka på IS-LM/AS-AD (foreldet apparat — bruk IS-RR-PK); bruke tid på detaljert algebra under hjemme-eksamen-regimet (gir lite uttelling); glemme å kommentere «andre variable» (konsum, investering, valutakurs, handelsbalanse); konkludere skråsikkert der totaleffekten er uklar.
- **Quiz: 16 · Flashcards: 18** (eksamensform, de to epokene, sjokk-katalogen, frekvenser, sjangerkatalog A–L, metaregler, avgrensning mot ECON1310/SOK1000)

**Prøve-kvote Del 0:** ingen (metadel).

---

### Del 1 — Keynes-modellen og makrofundament *(prioritet: fundament — må sitte)*

> **Forkunnskaps-skille mot SOK1000/ECON1310:** BNP-begrepet, nasjonalregnskapets
> hovedidentitet og en enkel Keynes-modell er byggeklosser SØK1012 forutsetter fra
> innføringen (SOK1000). Der studenten trenger å repetere grunnlaget, lenker boka
> dit og til den bygde ECON1310-boka (samme Holden-apparat). SØK1012s eget bidrag
> starter der IS-kurven skal utledes fra Keynes-modellen.

#### Kapittel 1.1: BNP, nasjonalregnskap og makroøkonomiens spørsmål

- **id:** `sok1012-1-1` · **number:** 1.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen
- **Kapitteltype:** teori (fundament)
- **description:** BNP fra utgifts-, inntekts- og produksjonssiden, nasjonalregnskapets hovedidentitet $Y = C + I + G + NX$, BNP-gap og potensielt BNP $Y^n$ — begrepene resten av boka måler sjokk og politikk mot.
- **Eksamensbelegg:** Fundament (ikke egen oppgave, men forutsatt overalt). BNP-gapet $(Y - Y^n)/Y^n$ er selve argumentet i Phillips-kurven og renteregelen; nasjonalregnskapsidentiteten er startpunktet for IS-utledningen. Kryssrefererer til SOK1000/ECON1310 for BNP-detaljer. Prioritet: **fundament** (må sitte).
- **Innholdskontrakt:** **BNP** målt tre veier (utgift/inntekt/produksjon) — kort, kryssrefererer til SOK1000. **Nasjonalregnskapets hovedidentitet** $Y = C + I + G + NX$ (åpen) / $Y = C + I + G$ (lukket) som *definisjon*, ikke likevekt. **Potensielt BNP $Y^n$** (produksjonen ved likevektsledighet) og **BNP-gapet** $(Y - Y^n)/Y^n$ — positivt = høykonjunktur, negativt = lavkonjunktur. Kort om **inflasjon** $\pi$, **realrente** $i - \pi^e$ og hvorfor real- (ikke nominell) rente styrer konsum/investering. Legg grunnlaget for at Keynes-modellen (1.2) bestemmer $Y$ på kort sikt gitt prisene, og for at sjokk måles som avvik fra $Y^n$.
- **Oppgavesjangre:** Fundament for A/B/C. Mønstereksempel: «Forklar hva BNP-gapet er, og hvorfor sentralbanken bryr seg om det.»
- **Typiske feil:** Forveksle nasjonalregnskapsidentiteten (definisjon) med likevekt; bruke nominell i stedet for realrente i konsum/investering; blande potensielt og faktisk BNP; regne BNP-gapet med feil fortegn.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 1.2: Keynes-modellen og multiplikatoren

- **id:** `sok1012-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1012-1-1`
- **Kapitteltype:** teori (fundament)
- **description:** Konsum-, investerings- og skattefunksjonen, likevekten i produktmarkedet ($Y$ = samlet etterspørsel), multiplikatoren, og spareparadokset — apparatet IS-kurven utledes fra.
- **Eksamensbelegg:** IS-utledningen (~70 %) starter her; multiplikatoren er forutsatt i alle IS-skift. **Spareparadokset** (finanspolitikk-varianten, ~25 %) er egen deloppgave (V2022). Prioritet: **fundament** (må sitte for Del 2).
- **Innholdskontrakt:** **Atferdsligningene i Holden-notasjon:** konsum $C = z^C + c_1(Y - T) - c_2(i - \pi^e)$ (marginal konsumtilbøyelighet $c_1$, rentefølsomhet $c_2$), investering $I = z^I + b_1 Y - b_2(i - \pi^e)$, skatt $T = z^T + tY$. **Likevekt:** sett inn i $Y = C + I + G$ og løs for $Y$ (gitt renten $i$). **Multiplikatoren** $m = 1/(1 - c_1(1-t) - b_1)$: forklar hvorfor $m > 1$ (etterspørselsimpulser forsterkes gjennom inntektskretsløpet), og hvordan skattesats $t$ og importlekkasje (i åpen økonomi) demper den. **Spareparadokset:** økt spareønske (lavere $z^C$) reduserer samlet etterspørsel → lavere $Y$ → uendret eller lavere samlet sparing; forklar mekanismen. Kort om **automatiske stabilisatorer** ($t$ demper konjunktursvingninger). Merk at renten $i$ her er *eksogen* — i IS-kurven (kap. 2.1) varieres den for å spore ut $(Y, i)$-sammenhengen.
- **Oppgavesjangre:** Fundament for A + spareparadoks-varianten. Mønstereksempel: «Utled multiplikatoren i en enkel Keynes-modell, forklar hvorfor den er større enn 1, og bruk den til å drøfte spareparadokset.»
- **Typiske feil:** Glemme skatte-/importlekkasjen i multiplikatornevneren; behandle renten som endogen her (den er gitt i denne modellen); regne spareparadokset feil vei; forveksle marginal og gjennomsnittlig konsumtilbøyelighet.
- **Quiz: 22 · Flashcards: 22**

#### Kapittel 1.3: Obligasjonsprising og rente

- **id:** `sok1012-1-3` · **number:** 1.3 · **estimatedMinutes:** 35 · **prerequisites:** `sok1012-1-1`
- **Kapitteltype:** teori
- **description:** Pris–rente-sammenhengen for en ettårig obligasjon (kurs = pålydende/(1+rente)), den inverse sammenhengen mellom kurs og rente, og kort om sentralbankens rentesetting.
- **Eksamensbelegg:** ~25 % frekvens — kort, sikker regneoppgave (H2018, H2022). Sjanger K. Den enkleste sikre poengkilden i temamenyen. Prioritet: **kunne** (nivå 2, men lettvunne poeng).
- **Innholdskontrakt:** **Ettårig obligasjon:** kurs $= \text{pålydende}/(1 + \text{rente})$. Regn renten gitt kursen, og kursen gitt renten. **Den inverse sammenhengen:** høyere markedsrente → lavere obligasjonskurs (og omvendt) — forklar hvorfor (framtidige betalinger neddiskonteres hardere). Kort utvidelse til flerårig obligasjon (neddiskontering av kupong + pålydende) som «bør kjenne til». Kort om at sentralbanken setter den korte renten (styringsrenten) — broen til renteregelen (kap. 2.3). Merk skillet nominell/realrente (fra kap. 1.1). Kryssrefererer til SOK2010 for obligasjons-/pengemarkedsdybde (bør kjenne til, ikke pensum her).
- **Oppgavesjangre:** K. Mønstereksempel: «En ettårig statsobligasjon har pålydende 2000 kr. Finn effektiv rente når kursen er 1900 kr, og finn kursen når renten er 8 %.»
- **Typiske feil:** Snu pris–rente-sammenhengen (tro at høyere rente gir høyere kurs); regnefeil i neddiskonteringen; blande ettårig og flerårig formel; glemme at kursen faller når renten stiger.
- **Quiz: 16 · Flashcards: 16**

**Prøve-kvote Del 1:** 4 prøver (1.A begreper — BNP-gap, potensielt BNP, multiplikator, spareparadoks, automatiske stabilisatorer; 1.B Keynes-modellen — likevekts-$Y$ og multiplikator regnet på gitte atferdsligninger; 1.C spareparadoks + finanspolitikk (ΔG vs. skatt) drøftet med multiplikatoren; 1.D obligasjonsprising — rente gitt kurs og kurs gitt rente, sjanger K).

---

### Del 2 — IS-RR-PK-modellen (lukket økonomi) *(prioritet: PERFEKT — den store oppgavens motor)*

#### Kapittel 2.1: IS-kurven: utledning, helning og skift

- **id:** `sok1012-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok1012-1-2`
- **Kapitteltype:** teori
- **description:** IS-kurven utledet fra Keynes-modellen ved å variere renten: fallende i $(Y, i)$-diagrammet, helningen forklart via rentekanalen, og hva som skifter kurven.
- **Eksamensbelegg:** IS-utledning ~70 % — fast åpningsledd i den store oppgaven. «Forklar helningen» er sensorkrav (§4). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Utledning:** ta Keynes-likevekten (kap. 1.2) og la renten $i$ variere — høyere realrente $i - \pi^e$ senker investering ($-b_2$) og rentefølsomt konsum ($-c_2$) → lavere samlet etterspørsel → lavere likevekts-$Y$. Kurven $Y(i)$ er **fallende** i $(Y, i)$-diagrammet. **Helning** $dY/di = -(c_2 + b_2)/(1 - c_1(1-t) - b_1)$: forklar at bratthet avhenger av rentefølsomheten ($c_2 + b_2$) og multiplikatoren. **Skift:** alt som endrer autonom etterspørsel ved gitt rente skifter IS — offentlige utgifter $G$ (høyre), skatt $T$ (venstre ved økning), forventninger $z^C/z^I$, og i åpen økonomi (foregripes til Del 4) valutakurs. Skill tydelig **bevegelse langs** (renteendring) fra **skift av** (autonom endring). Figurkrav: navngi aksene $(Y, i)$, IS-kurven, et skift.
- **Oppgavesjangre:** A (del 1). Mønstereksempel: «Utled IS-kurven fra en enkel Keynes-modell, forklar hvorfor den er fallende, og vis hva som skjer med den ved en økning i offentlige utgifter.»
- **Typiske feil:** Forveksle bevegelse langs IS (renteendring) med skift av IS (autonom endring); glemme at det er *realrenten* som virker; feil fortegn på helningen; glemme at både konsum og investering (ikke bare investering) er rentefølsomme.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 2.2: Phillips-kurven og lønnsdannelsens rolle

- **id:** `sok1012-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1012-1-1`
- **Kapitteltype:** teori
- **description:** Phillips-kurven $\pi = \pi^e + \beta(Y - Y^n)/Y^n + z^\pi$ — sammenhengen mellom BNP-gap og inflasjon, kausalkjeden bak $\beta$, og hva som skifter kurven (kostnadssjokk, forventninger).
- **Eksamensbelegg:** Phillips-kurven ~85 % — fast del av IS-RR-PK-oppgaven og selve mekanismen bak kostnadssjokket. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Phillips-kurven** $\pi = \pi^e + \beta(Y - Y^n)/Y^n + z^\pi$: stigende i $(Y, \pi)$-diagrammet — høyere BNP-gap gir høyere inflasjon. **Kausalkjeden bak $\beta$** (viktig for A): BNP-gap → lavere ledighet → høyere forhandlingsmakt → høyere lønnsvekst → høyere marginalkostnad → påslagsprising → inflasjon. **Skift:** forventet inflasjon $\pi^e$ (kurven skifter opp/ned parallelt) og **kostnadssjokk $z^\pi$** (importpris, avgifter, marginer) — sistnevnte er selve kostnadssjokket i kap. 3.2. Kort om **forventningsdannelse** (adaptiv vs. forankret rundt inflasjonsmålet) og hvorfor troverdig inflasjonsmål demper. Kort om ledighetsformen $\dot W = \dot{P^e} + \dot{A^e} - b(u - u^n)$ som broen til lønns-/priskurven (Del 5). Figurkrav: $(Y, \pi)$-akser, stigende PK, et skift.
- **Oppgavesjangre:** A (del 2). Mønstereksempel: «Forklar Phillips-kurven og kausalkjeden fra BNP-gap til inflasjon, og vis hvordan et kostnadssjokk skifter kurven.»
- **Typiske feil:** Forveksle bevegelse langs PK (BNP-endring) med skift (kostnadssjokk/forventninger); glemme kausalkjeden bak $\beta$ (bare oppgi kurven); blande $\pi$ og prisnivået $P$; ikke skille forventnings-skift fra kostnadssjokk-skift.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 2.3: Renteregelen og RR-kurven

- **id:** `sok1012-2-3` · **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** `sok1012-2-2`, `sok1012-2-1`
- **Kapitteltype:** teori
- **description:** Sentralbankens renteregel $i = z^i + d_1(\pi - \pi^*) + d_2(Y - Y^n)/Y^n$, og RR-kurven som fås ved å sette Phillips-kurven inn i renteregelen — stigende av **to** grunner.
- **Eksamensbelegg:** RR-kurven ~80 %; «RR er stigende av to grunner» (direkte + indirekte) er den enkeltinnsikten sensorveiledningene oftest fremhever (§4, §5.3). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Renteregelen** $i = z^i + d_1(\pi - \pi^*) + d_2(Y - Y^n)/Y^n$: sentralbanken hever renten når inflasjonen er over målet ($d_1$) og når BNP er over potensial ($d_2$) — **fleksibel inflasjonsstyring**. **RR-kurven:** sett Phillips-kurven (kap. 2.2) inn i renteregelen → sammenhengen mellom $i$ og $Y$ som sentralbanken faktisk realiserer, tegnet i samme $(Y, i)$-diagram som IS. **Stigende av TO grunner** (kronpoenget): (1) **direkte** — høyere $Y$ → sentralbanken hever renten via $d_2$; (2) **indirekte** — høyere $Y$ → høyere inflasjon (via $\beta$ i PK) → sentralbanken hever renten via $d_1$. Samlet helning $\propto d_2 + d_1\beta$. **$d_1/d_2$-vektleggingen:** hvor mye vekt sentralbanken legger på inflasjonsmål vs. BNP-gap — avgjørende for målkonflikten (kap. 3.2). **Skift:** endret inflasjonsmål $\pi^*$, endret nøytral rente $z^i$, kostnadssjokk (via PK). Figurkrav: IS og RR i samme diagram, skjæringen = kortsiktig likevekt.
- **Oppgavesjangre:** A (del 3). Mønstereksempel: «Utled RR-kurven ved å kombinere renteregelen og Phillips-kurven, og forklar de *to* grunnene til at den er stigende.»
- **Typiske feil:** **Bare oppgi én av RR-kurvens to grunner** (§5.3 — klassisk); blande RR og IS (RR er sentralbankens respons, IS er produktmarkedet); glemme at RR fås *ved å sette PK inn i renteregelen*; feil fortegn på $d_1/d_2$.
- **Quiz: 26 · Flashcards: 28**

#### Kapittel 2.4: IS-RR-PK-diagrammet og kortsiktig likevekt

- **id:** `sok1012-2-4` · **number:** 2.4 · **estimatedMinutes:** 55 · **prerequisites:** `sok1012-2-3`
- **Kapitteltype:** teori
- **description:** Hele modellen samlet: to paneler — $(Y, i)$ med fallende IS og stigende RR, og $(Y, \pi)$ med stigende PK — og hvordan de bestemmer kortsiktig BNP, rente og inflasjon simultant.
- **Eksamensbelegg:** Hele diagrammet er forutsatt i ~100 % av settene og er lerretet all sjokk-analyse tegnes på. Prioritet: **perfekt**.
- **Innholdskontrakt:** **To-panel-oppsettet:** øvre/venstre panel $(Y, i)$ med IS (fallende) og RR (stigende) — skjæringen bestemmer $Y$ og $i$; nedre/høyre panel $(Y, \pi)$ med PK (stigende) — gitt $Y$ leses inflasjonen av. **Simultan likevekt:** de tre relasjonene bestemmer $(Y, i, \pi)$ samtidig; forklar «leserekkefølgen» (IS-RR gir $Y$ og $i$, PK gir $\pi$; renteregelen bak RR har allerede sørget for konsistens). **Kobling til de sentrale variablene:** gitt $(Y, i, \pi)$ kan konsum, investering og skatt leses av atferdsligningene (kap. 1.2) — poenget sensor krever («se ALLE variable»). Legg lerretet for sjokk-analysen (Del 3): hvert sjokk skifter én eller flere av IS/RR/PK, og en ny likevekt leses av. Figurkrav: begge paneler, alle tre kurver navngitt, likevektspunktene markert.
- **Oppgavesjangre:** A (samlet). Mønstereksempel: «Sett opp IS-RR-PK-modellen i to paneler for en lukket økonomi, og forklar hvordan BNP, rente og inflasjon bestemmes samtidig.»
- **Typiske feil:** Tegne bare ett panel; glemme å lese inflasjonen av PK; ikke koble tilbake til konsum/investering (bare BNP/rente/inflasjon); rote med hvilken variabel som bestemmes hvor.
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.5: Drill: presenter og utled IS-RR-PK-modellen

- **id:** `sok1012-2-5` · **number:** 2.5 · **estimatedMinutes:** 80 · **prerequisites:** `sok1012-2-4`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på åpningen av den store oppgaven: fra Keynes-modellen til fullført A-besvarelse med de tre kurvene utledet, helningene forklart (RR sine to grunner) og likevekten tegnet.
- **Eksamensbelegg:** Dekker sjanger A samlet — åpningen (10–25 %) av den store oppgaven, ~100 %-gjenganger. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) skriv opp Keynes-modellens atferdsligninger og utled IS (fallende, forklar rentekanalen); 2) skriv opp Phillips-kurven og forklar kausalkjeden bak $\beta$; 3) skriv opp renteregelen og utled RR ved å sette PK inn — **forklar de to grunnene til at RR stiger**; 4) tegn IS-RR-PK i to paneler med likevekt markert; 5) les av og tolk $(Y, i, \pi)$ + konsum/investering. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig RR-kurvens *to* grunner, IS-helningens forklaring, og at ALLE variable kommenteres). **8–12 oppgaver** på eksamensnivå som roterer: full utledning / bare helningsforklaring / bare RR-utledning / analytisk helning fra gitte parametere / tolke et gitt diagram — alle med `solution` + `hints` og figurbeskrivelse i ord.
- **Oppgavesjangre:** A. Mønstereksempel (full kjede): «(a) Utled IS-kurven fra Keynes-modellen og forklar helningen. (b) Utled RR-kurven fra renteregelen og Phillips-kurven, og gjør rede for begge grunnene til at den er stigende. (c) Tegn hele modellen i to paneler og forklar hvordan likevekten bestemmes.»
- **Typiske feil:** Hele §5-repertoaret for modellpresentasjonen: bare én RR-grunn (§5.3), blande langs/skift, glemme realrenten, uklare/umerkede figurer, ikke kommentere alle variable (§5.9).
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 2:** 4 prøver (2.A begreper — IS-kurve, RR-kurve, Phillips-kurve, BNP-gap, renteregel, fleksibel inflasjonsstyring; 2.B IS-kurven utledet + helning + skift ved ΔG, sjanger A; 2.C Phillips-kurven + RR-kurven med de to grunnene, utledet fra renteregelen, sjanger A; 2.D full IS-RR-PK-presentasjon i to paneler med likevekt og tolkning av alle variable, sjanger A).

---

### Del 3 — Sjokk-analyse og pengepolitikk (lukket) *(prioritet: PERFEKT — den faste øvelsen)*

#### Kapittel 3.1: Etterspørselssjokk

- **id:** `sok1012-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok1012-2-5`
- **Kapitteltype:** teori
- **description:** Et positivt etterspørselssjokk skifter *kun* IS-kurven — effekt på BNP, rente og inflasjon, sentralbankens respons, og hvorfor det *ikke* gir målkonflikt.
- **Eksamensbelegg:** Etterspørselssjokk ~100 % som den ene faste sjokk-typen (H2018, H2022, V2025). Sjanger B. Poenget «ingen målkonflikt» er A/B-markør. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Positivt etterspørselssjokk** (økt $z^C/z^I/G$, optimisme): skifter **kun IS til høyre** — vis/forklar hvorfor RR og PK ligger fast (RR er sentralbankens respons, uendret; PK skifter bare ved kostnadssjokk/forventninger). **Effekt:** BNP opp, rente opp (sentralbanken hever langs RR), inflasjon opp (langs PK). **Sentralbankens respons:** hever renten og *demper, men nøytraliserer ikke* — full stabilisering er verken mulig eller ønskelig med én rente. **Kronpoeng (A/B):** **ingen målkonflikt** — inflasjonsgapet og produksjonsgapet trekker samme vei, så én renteøkning demper begge. Kommenter ALLE variable: konsum/investering (dempes av renteøkningen), skatt (opp med $Y$). Figurkrav: IS-skift, ny likevekt i begge paneler, navngitt.
- **Oppgavesjangre:** B. Mønstereksempel: «Anta et positivt etterspørselssjokk i en lukket økonomi. Vis hvilke kurver som skifter, gjør rede for virkningen på BNP, rente og inflasjon, og forklar hvorfor det ikke oppstår en målkonflikt.»
- **Typiske feil:** **Skifte PK ved et rent etterspørselssjokk** (§5.1 — klassisk feil: PK skifter *ikke*); skifte RR (den er respons, ikke sjokk-drevet); tro at sentralbanken fullt nøytraliserer; glemme «ingen målkonflikt»-poenget; ikke kommentere konsum/investering.
- **Quiz: 24 · Flashcards: 26**

#### Kapittel 3.2: Kostnadssjokk og sentralbankens målkonflikt

- **id:** `sok1012-3-2` · **number:** 3.2 · **estimatedMinutes:** 65 · **prerequisites:** `sok1012-3-1`
- **Kapitteltype:** teori
- **description:** Et positivt kostnadssjokk skifter PK opp *og* RR opp — den reelle målkonflikten, hvorfor renteeffekten er *uklar*, og hvordan $d_1/d_2$-vektleggingen avgjør utfallet.
- **Eksamensbelegg:** Kostnadssjokk + målkonflikt ~85 % — kronsjangeren, ofte hele den store oppgaven (V2018, H2018, H2023, V2024, V2025). Sjanger C. Prioritet: **perfekt** (bokas viktigste enkeltkapittel på sjokk-siden).
- **Innholdskontrakt:** **Positivt kostnadssjokk** ($z^\pi$ opp: importpris, avgift, marginer): skifter **PK opp** (høyere inflasjon for ethvert $Y$) **og RR opp** (sentralbanken hever for å motvirke inflasjonen). **Reell målkonflikt:** heves renten forsterkes BNP-fallet, senkes den forsterkes inflasjonen — sentralbanken kan ikke stabilisere begge samtidig. **Renteeffekten er UKLAR** (kronspørsmålet): avhenger av $d_1$ (vekt på inflasjon) mot $d_2$ (vekt på BNP-gap) — legger banken mye vekt på inflasjon ($d_1$ høy) hever den renten mye (BNP faller), legger den vekt på BNP ($d_2$ høy) hever den mindre (inflasjonen får bite). **Effekt på BNP:** ned; **inflasjon:** opp (dempet, ikke eliminert). Kommenter ALLE variable. Figurkrav: PK-skift og RR-skift, ny likevekt, med markering av at rente-utfallet avhenger av $d_1/d_2$. **Dette er hele grunnen til at boka insisterer på «uklar totaleffekt».**
- **Oppgavesjangre:** C. Mønstereksempel: «Anta et positivt kostnadssjokk i en lukket økonomi. Vis grafisk hvilke kurver som skifter, forklar hvorfor effekten på renten er usikker, og drøft hvordan sentralbankens vekt på inflasjonsmål kontra BNP-gap påvirker utfallet.»
- **Typiske feil:** **Konkludere skråsikkert om renten** (§5.2 — effekten er uklar, avhenger av $d_1/d_2$); glemme at både PK og RR skifter; behandle kostnadssjokket som etterspørselssjokk (ingen målkonflikt-feil); ikke drøfte $d_1/d_2$-vektleggingen (selve kronspørsmålet); ikke kommentere alle variable.
- **Quiz: 28 · Flashcards: 30**

#### Kapittel 3.3: Rentesjokk, finanspolitikk og 2-sektor-modellen (oljeøkonomi)

- **id:** `sok1012-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `sok1012-3-2`
- **Kapitteltype:** teori
- **description:** Rentesjokk (skift i renteregelen) og finanspolitikk (ΔG vs. skatt) i modellen, og 2-sektor-modellen (skjermet/konkurranseutsatt) med pengepolitisk respons på et oljeprisfall.
- **Eksamensbelegg:** Rentesjokk (V2018), finanspolitikk/spareparadoks ~25 %, 2-sektor/oljeøkonomi ~15 % (V2024). Sjanger L (2-sektor) + B-slektninger. Prioritet: **kunne/kjenne** (nivå 2–3; 2-sektor gir differensiering).
- **Innholdskontrakt:** **Rentesjokk:** et skift i renteregelen ($z^i$ opp = strammere politikk) skifter RR opp → lavere BNP, lavere inflasjon; forklar mekanismen. **Finanspolitikk:** ΔG skifter IS (høyre), skatteendring skifter IS via disponibel inntekt; sammenlign G- og skatte-multiplikatoren; koble til spareparadokset (kap. 1.2). **2-sektor-modellen (oljeøkonomi):** skjermet sektor (pris/produksjon der innenlandsk tilbud møter innenlandsk etterspørsel) og konkurranseutsatt sektor (pris gitt av verdensmarkedet). Pengepolitisk respons på **oljeprisfall**: senk renten; utvid med leverandørindustrien → renten må senkes *mer* (flere effekter forsterker skiftet). Optimal pengepolitikk: produksjonsgap og inflasjonsgap skal ha *motsatt* fortegn. Merk 2-sektor som «bør kjenne godt» (lavfrekvent, men gir A-differensiering). Figurkrav for hver del.
- **Oppgavesjangre:** L (+ B/finanspolitikk). Mønstereksempel (L): «Oljeprisen faller. Diskuter den pengepolitiske responsen først i en to-sektormodell (skjermet/konkurranseutsatt), deretter når leverandørindustrien inkluderes.»
- **Typiske feil:** Blande rentesjokk (RR-skift) og etterspørselssjokk (IS-skift); feil fortegn på finanspolitikk-skiftene; i 2-sektor: glemme at leverandørindustrien *forsterker* rentekuttet; tro at produksjons- og inflasjonsgap skal ha samme fortegn under optimal politikk.
- **Quiz: 20 · Flashcards: 22**

#### Kapittel 3.4: Drill: sjokk-analyse i IS-RR-PK

- **id:** `sok1012-3-4` · **number:** 3.4 · **estimatedMinutes:** 90 · **prerequisites:** `sok1012-3-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på den faste øvelsen: fra et gitt sjokk til fullført A-besvarelse med riktig(e) kurveskift, effekt på alle variable, sentralbankens respons og målkonflikt-drøfting.
- **Eksamensbelegg:** Dekker sjangrene B, C (+ rentesjokk/L) samlet — sjokk-analysen som er ~100 % av den store oppgaven. **Kostnadssjokk med målkonflikt drilles til overmål.** Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme) — sjokk-analysens fem steg:** 1) identifiser sjokket (etterspørsel/kostnad/rente); 2) avgjør **hvilke(n) kurve(r) skifter og hvorfor** (etterspørsel: kun IS; kostnad: PK + RR; rente: RR) — begrunn hvorfor de andre ligger fast; 3) retning på skiftet; 4) ny likevekt lest av i begge paneler; 5) mekanismen i ord — effekt på BNP/rente/inflasjon + konsum/investering/skatt, sentralbankens respons, **og om det er målkonflikt** (etterspørsel: nei; kostnad: ja, renteeffekt uklar). **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig riktig kurve-skift, «uklar totaleffekt»-innsikten ved kostnadssjokk, målkonflikt-drøftingen, og at alle variable kommenteres). **10–15 oppgaver** på eksamensnivå som roterer sjokktype (etterspørsel/kostnad/rente/kombinert) × fortegn × leveranse, alle med `solution` + `hints` og figurbeskrivelse i ord.
- **Oppgavesjangre:** B, C, L. Mønstereksempel (full kjede): «(a) Analyser et negativt etterspørselssjokk: hvilke kurver skifter, og hva skjer med BNP, rente og inflasjon? (b) Analyser deretter et positivt kostnadssjokk og drøft hvorfor renteeffekten er usikker. (c) Hvordan avhenger utfallet i (b) av sentralbankens vektlegging?»
- **Typiske feil:** Hele sjokk-repertoaret fra §5: skifte feil kurve (§5.1), konkludere skråsikkert om uklar effekt (§5.2), bare én RR-grunn (§5.3), utledning i stedet for forståelse (§5.8), glemme «andre variable» (§5.9), umerkede figurer.
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 3:** 4 prøver (3.A begreper — etterspørselssjokk, kostnadssjokk, målkonflikt, $d_1/d_2$-vektlegging, uklar totaleffekt; 3.B etterspørselssjokk komplett — kurveskift + alle variable + hvorfor ingen målkonflikt, sjanger B; 3.C kostnadssjokk + målkonflikt — uklar renteeffekt drøftet mot $d_1/d_2$, sjanger C; 3.D kombinert sjokk / rentesjokk / 2-sektor-oljeøkonomi, sjanger L + B/C).

---

### Del 4 — Åpen økonomi og valutakurs *(prioritet: PERFEKT — dagens hovedvariant, NTNU-unik dybde)*

> **NTNU-signatur:** Der ECON1310 oftest kjører den *lukkede* modellen, kjører
> SØK1012 oftest den *åpne* (flytende kurs, fleksibel inflasjonsstyring). Denne
> delen er derfor obligatorisk og tungt vektet — og er en av de fire søylene som
> mangler helt hos UiO.

#### Kapittel 4.1: Nettoeksport og Marshall-Lerner-betingelsen

- **id:** `sok1012-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `sok1012-2-1`
- **Kapitteltype:** teori
- **description:** Hva som bestemmer nettoeksporten $NX(Y, Y^F, \varepsilon)$, realvalutakursen $\varepsilon = EP/P^*$, og Marshall-Lerner-betingelsen for når en realdepresiering bedrer handelsbalansen.
- **Eksamensbelegg:** Åpen økonomi (NX/UIP/ML) ~80 %; ML-dybden («mindre sannsynlig oppfylt ved svak kvantumsrespons/underskudd») er A/B-markør (§4, H2024). Sjanger J (del 1). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Nettoeksport** $NX = z^{NX} - a_1 Y - a_2 E - a_3 P$ (evt. $NX(Y, Y^F, \varepsilon)$): bestemmes av innenlandsk aktivitet $Y$ (importlekkasje, $-a_1$), utenlandsk aktivitet $Y^F$ (+) og **realvalutakursen** $\varepsilon = EP/P^*$ (svakere krone → bedre konkurranseevne → høyere NX). **Marshall-Lerner-betingelsen:** en realdepresiering bedrer handelsbalansen bare hvis **kvantumseffektene** (mer eksport, mindre import) dominerer **priseffekten** (dyrere import per enhet). **A/B-dybde:** ML er *mindre* sannsynlig oppfylt ved svak kvantumsrespons (lave eksport-/importelastisiteter) og ved handelsunderskudd i utgangspunktet (J-kurve-intuisjonen kan nevnes som «bør kjenne til»). Kort om importlekkasjens effekt på multiplikatoren (åpen økonomi: nevneren får et ekstra ledd → lavere multiplikator). Figurkrav: NX som funksjon av $\varepsilon$.
- **Oppgavesjangre:** J (del 1). Mønstereksempel: «Forklar hvilke faktorer som bestemmer nettoeksporten, og gjør rede for Marshall-Lerner-betingelsen — inkludert når den er mindre sannsynlig oppfylt.»
- **Typiske feil:** **Behandle ML som automatisk oppfylt** (§5.7 — anta at depresiering alltid bedrer balansen uten å nevne priseffekten/betingelsen); forveksle nominell $E$ og real $\varepsilon$ valutakurs; feil fortegn på $Y$-leddet i NX; glemme importlekkasjens effekt på multiplikatoren.
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 4.2: Udekket renteparitet og valutakursregimer

- **id:** `sok1012-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1012-4-1`, `sok1012-1-3`
- **Kapitteltype:** teori
- **description:** Udekket renteparitet $E = E^e - \kappa(i^F - i)$, overshooting-dynamikken, og forskjellen mellom flytende og fast valutakursregime.
- **Eksamensbelegg:** UIP ~80 % (fast del av åpen-økonomi-oppgaven); UIP-overshooting og flytende vs. fast er A/B-markører (§4). Sjanger J (del 2) + E-fundament. Prioritet: **perfekt** (nivå 1 for UIP-relasjonen; overshooting «bør kjenne godt»).
- **Innholdskontrakt:** **Udekket renteparitet (UIP):** kapital flyter til høyest forventet avkastning → rentedifferansen mellom to valutaer motsvares av forventet valutakursendring: $E = E^e - \kappa(i^F - i)$ (høyere innenlandsk rente $i$ → kronen appresierer i dag). Forklar likevekten (lik forventet avkastning i begge valutaer). **Overshooting (A/B):** ved et sjokk appresierer kronen *umiddelbart* og depresierer deretter tilbake over horisonten mot $E^e$ — forklar logikken og forutsetningene ($E^e$ forankret). **Valutakursregimer:** under **flytende** kurs setter sentralbanken renten fritt og kursen tilpasser seg; under **fast** kurs er $i = i^F$ (renten bindes til å holde kursen), så pengepolitikken mister sin frihet. Kort om hvordan et IS-skift virker ulikt under de to regimene (broen til det historiske kap. 8.1). Figurkrav: UIP-sammenhengen $E$ mot rentedifferansen.
- **Oppgavesjangre:** J (del 2). Mønstereksempel: «Forklar udekket renteparitet og hva som skjer med valutakursen når den innenlandske renten øker. Forklar deretter hvorfor pengepolitikken mister sin frihet under fast kurs.»
- **Typiske feil:** Feil fortegn i UIP (tro at høyere innenlandsk rente svekker kronen); glemme forventningsleddet $E^e$; tro at pengepolitikken er fri under fast kurs; blande appresiering (umiddelbar) og depresiering (over tid) i overshooting.
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 4.3: IS-RR-PK i åpen økonomi og valutakurssjokk

- **id:** `sok1012-4-3` · **number:** 4.3 · **estimatedMinutes:** 65 · **prerequisites:** `sok1012-4-2`, `sok1012-3-2`
- **Kapitteltype:** teori
- **description:** Den åpne IS-RR-PK-modellen (valutakurskanalen i IS, importert inflasjon i RR/PK), og valutakurssjokket — hvorfor effekten på BNP er *uklar*.
- **Eksamensbelegg:** Åpen IS-RR-PK er dagens hovedvariant (~100 % i Holden-epoken); valutakurssjokk fast (H2022, V2025). Sjanger D. Prioritet: **perfekt**.
- **Innholdskontrakt:** **Åpen IS-kurve:** renten virker nå via *to* kanaler — rentekanalen (som lukket) og **valutakurskanalen** (høyere rente → sterkere krone (UIP) → lavere nettoeksport) → IS er **flatere** i åpen enn i lukket økonomi. **Importert inflasjon:** svakere krone → dyrere import → høyere inflasjon → inngår i RR (og evt. PK). **Full nøytralisering er umulig i åpen økonomi** (A/B-nyanse, V2023): et rentekutt for å stimulere BNP svekker kronen og gir importert inflasjon — sentralbanken kan derfor ikke stabilisere fritt. **Valutakurssjokk** (kronen svekkes, f.eks. høyere $i^F$ / kronen mindre attraktiv): skifter **IS til høyre** (svakere krone → bedre konkurranseevne → høyere NX) **og RR opp** (importert inflasjon → sentralbanken hever), men **IKKE PK** (som gjelder innenlandsk prisvekst). **BNP-effekten er UKLAR:** IS-skiftet trekker BNP opp mens renteøkningen trekker det ned. Kommenter ALLE variable (inkl. valutakurs, handelsbalanse). Figurkrav: IS- og RR-skift, uklar netto-BNP markert.
- **Oppgavesjangre:** D. Mønstereksempel: «Kronen svekkes fordi investorene finner den mindre attraktiv. Vis hvilke kurver som skifter i den åpne IS-RR-PK-modellen, og forklar hvorfor effekten på BNP er teoretisk uklar.»
- **Typiske feil:** **Skifte PK ved et valutakurssjokk** (§5.1 — PK skifter *ikke*, bare IS og RR); **overse valutakurskanalen** (§5.4 — behandle den åpne modellen som lukket, glemme at IS er flatere); konkludere skråsikkert om BNP (§5.2 — effekten er uklar); glemme at full nøytralisering er umulig i åpen økonomi.
- **Quiz: 26 · Flashcards: 28**

#### Kapittel 4.4: Drill: sjokk i den åpne økonomien

- **id:** `sok1012-4-4` · **number:** 4.4 · **estimatedMinutes:** 90 · **prerequisites:** `sok1012-4-3`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på den åpne IS-RR-PK-oppgaven: fra et gitt sjokk (etterspørsel/kostnad/valuta) i åpen økonomi til fullført A-besvarelse med alle kanaler, alle variable og de uklare totaleffektene.
- **Eksamensbelegg:** Dekker sjangrene D, J (+ åpne varianter av B/C) samlet — den åpne IS-RR-PK-oppgaven som er dagens hovedvariant. **Valutakurssjokk og åpent kostnadssjokk drilles til overmål.** Prioritet: **perfekt**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** samme fem steg som kap. 3.4, men i den åpne modellen — HUSK valutakurskanalen i IS (flatere IS), importert inflasjon i RR, og at valutakurs + handelsbalanse er blant «alle variable» som skal kommenteres. Per sjokk: (etterspørsel) kun IS; (kostnad, åpen) PK + RR + IS (svekket konkurranseevne); (valuta) IS + RR, ikke PK. **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig valutakurskanalen, «BNP-effekten uklar» ved valutasjokk, «full nøytralisering umulig», ML-nyansen, og at valutakurs/handelsbalanse kommenteres). **10–15 oppgaver** på eksamensnivå som roterer sjokktype × fortegn × åpen-økonomi-nyanse, alle med `solution` + `hints` og figurbeskrivelse i ord. Inkluder minst én ML-oppgave (bedrer depresieringen balansen?) og én UIP-oppgave.
- **Oppgavesjangre:** D, J. Mønstereksempel (full kjede): «I en åpen økonomi med flytende kurs: (a) analyser et valutakurssjokk som svekker kronen — hvilke kurver skifter, og hvorfor er BNP-effekten uklar? (b) Kommenter virkningen på handelsbalansen, og drøft om Marshall-Lerner-betingelsen er oppfylt. (c) Hvorfor kan ikke sentralbanken fullt nøytralisere sjokket?»
- **Typiske feil:** Hele det åpne repertoaret fra §5: skifte PK ved valutasjokk (§5.1), overse valutakurskanalen (§5.4), ML som automatisk oppfylt (§5.7), konkludere skråsikkert om uklar BNP (§5.2), glemme valutakurs/handelsbalanse blant variablene (§5.9).
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 4:** 4 prøver (4.A begreper — nettoeksport, realvalutakurs, Marshall-Lerner, udekket renteparitet, flytende vs. fast kurs; 4.B nettoeksport + ML — bedrer depresieringen balansen, med betingelsen, sjanger J; 4.C UIP + valutakursregime — appresiering ved renteøkning, fast vs. flytende, sjanger J; 4.D valutakurssjokk i åpen IS-RR-PK — uklar BNP-effekt + alle variable, sjanger D).

---

### Del 5 — Arbeidsmarked og lønnsdannelse *(prioritet: KUNNE — egen tung oppgave enkelte år)*

#### Kapittel 5.1: Lønns- og priskurven og likevektsledigheten

- **id:** `sok1012-5-1` · **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok1012-2-2`
- **Kapitteltype:** teori
- **description:** Priskurven $P = (1+\mu)W/A$ og lønnskurven $W = P^e A^e \mathcal{W}(u, z^W)$, likevektsledigheten $u^n$ i skjæringen, og hvordan Phillips-kurven følger av lønnsdannelsen.
- **Eksamensbelegg:** Lønnsdannelse/likevektsledighet ~30 %, egen tung oppgave (opptil 2/3) i H2019/H2017; ellers bakgrunnen for Phillips-kurven. Sjanger I. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Priskurven** $P = (1+\mu)W/A$ (påslagsprising under monopolistisk konkurranse: pris = påslag $\mu$ over enhetslønnskostnad $W/A$) ⇒ reallønn $W/P = A/(1+\mu)$ som bedriftene «tilbyr». **Lønnskurven** $W = P^e A^e \mathcal{W}(u, z^W)$: forhandlingslønnen faller med ledighet $u$ (svakere forhandlingsmakt), stiger med forventet pris $P^e$/produktivitet $A^e$ og med $z^W$ (trygd, forhandlingsmakt, minstelønn). **Likevektsledighet $u^n$:** der $P^e = P$ og $A^e = A$ ⇒ $\mathcal{W}(u^n, z^W) = 1/(1+\mu)$ — den ledigheten som er forenlig med stabil inflasjon. **Sammenhengen med Phillips-kurven** (kap. 2.2): utled Phillips fra lønns-/priskurven — avvik fra $u^n$ (dvs. positivt BNP-gap) gir lønns- og prispress. Figurkrav: lønns- og priskurve i $(u, W/P)$-plan, $u^n$ i skjæringen.
- **Oppgavesjangre:** I (del 1). Mønstereksempel: «Forklar hvordan likevektsledigheten bestemmes ved hjelp av lønns- og priskurven.»
- **Typiske feil:** Blande lønnskurven (faller med ledighet) og priskurven (reallønn bedriftene tilbyr); glemme betingelsen $P^e = P$, $A^e = A$ for likevektsledighet; ikke koble lønns-/priskurven til Phillips-kurven; feil retning på reallønn-effekten.
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 5.2: Skiftanalyse og drill: hva flytter likevektsledigheten

- **id:** `sok1012-5-2` · **number:** 5.2 · **estimatedMinutes:** 70 · **prerequisites:** `sok1012-5-1`
- **Kapitteltype:** teori + drill (skiftanalyse)
- **description:** Hvordan $u^n$ endres av høyere arbeidsledighetstrygd/forhandlingsmakt, sterkere produktkonkurranse og høyere produktivitet — med drill på hele lønnsdannelses-oppgaven.
- **Eksamensbelegg:** Skiftanalysen er kjernen i lønnsdannelses-oppgaven (H2019, H2017); «blande skiftene» er sensorfeil #10 (§5.10). Sjanger I (del 2). Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **De tre standardskiftene** (kronanalysen): (1) **økt $z^W$** (høyere trygd/forhandlingsmakt) → lønnskurven opp → **$u^n$ opp** (høyere likevektsledighet); (2) **økt konkurranse i produktmarkedet** (lavere $\mu$) → priskurven opp (høyere reallønn bedriftene kan tilby) → **$u^n$ ned**, høyere reallønn; (3) **høyere produktivitet** (økt $A$) → **begge kurver skifter likt** → **$u^n$ uendret** (om forventet = faktisk produktivitet) men høyere reallønn. **Drillseksjon (løsningsoppskrift):** 1) identifiser hvilken kurve skiftet treffer og hvorfor; 2) retning; 3) ny $u^n$ og reallønn; 4) mekanismen i ord; 5) evt. konsekvens for Phillips-kurven/inflasjon. **6–10 oppgaver** på eksamensnivå (roterer $z^W$/$\mu$/produktivitet × retning), med sensor-margnotater på det ene gjennomregnede caset, alle med `solution` + `hints`.
- **Oppgavesjangre:** I. Mønstereksempel: «Analyser hvordan likevektsledigheten påvirkes av (1) høyere arbeidsledighetstrygd, (2) sterkere konkurranse i produktmarkedene og (3) høyere produktivitet.»
- **Typiske feil:** **Feil retning ved endring i $\mu$ eller $z^W$** (§5.10); tro at høyere produktivitet endrer $u^n$ når forventet = faktisk (§5.10 — begge kurver skifter likt); skifte feil kurve; ikke tolke reallønn-effekten.
- **Quiz: 20 · Flashcards: 22**

**Prøve-kvote Del 5:** 4 prøver (5.A begreper — likevektsledighet, lønnskurve, priskurve, påslag $\mu$, $z^W$; 5.B likevektsledigheten utledet fra lønns-/priskurven + kobling til Phillips-kurven, sjanger I; 5.C skiftanalyse — $z^W$, $\mu$ og produktivitet, med riktige retninger, sjanger I; 5.D full lønnsdannelses-oppgave på eksamensnivå (H2019-type), sjanger I).

---

### Del 6 — Solow-vekst og inntektskonvergens *(prioritet: KUNNE — NTNU-unik, fast fra 2022)*

> **NTNU-unik søyle:** Solow og konvergens testes *aldri* hos UiO/ECON1310 (til
> tross for emnebeskrivelsen der) — men er faste tema her fra 2022. Denne delen må
> skrives fra grunnen; den kan ikke lånes fra en ECON1310-bok.

#### Kapittel 6.1: Solow-modellen: sparing, investering og vekst

- **id:** `sok1012-6-1` · **number:** 6.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok1012-1-1`
- **Kapitteltype:** teori
- **description:** Solow-vekstmodellen: produktfunksjonen med avtakende utbytte, kapitalakkumulasjon, likevekten $K^*$ der sparing = depresiering, og hvordan en høyere sparerate påvirker vekst og nivå.
- **Eksamensbelegg:** Solow ~40 %, egen oppgave (25–50 %) når den kommer (H2019, V2022, V2023). «Feil retning på avtakende utbytte / blande midlertidig vekst og permanent nivå» er sensorfeil #5 (§5.5). Sjanger F. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Produktfunksjonen** $Y = F(K, N)$ med **positiv, avtakende marginalproduktivitet for kapital**: $F'_K > 0$, $F''_{KK} < 0$ (viktig — driver konvergensen). **Kapitalakkumulasjon** $\Delta K = I - \delta K$ (investering minus depresiering). **Lukket økonomi** $S = I$, sparefunksjon $S = sY$. **Likevekt:** sett $\Delta K = 0$ → $sF(K, \bar N) = \delta K$ → **$K^*$** grafisk i skjæringen mellom sparekurven $sF(K)$ (konkav, avtakende) og depresieringslinjen $\delta K$ (rett linje). **Sparerate-analyse (kronpoenget):** en **økning i spareraten $s$** flytter sparekurven opp → nytt høyere $K^*$ og høyere langsiktig BNP-nivå, men vekstøkningen er **midlertidig** (høy vekst mens økonomien beveger seg mot ny likevekt, deretter tilbake til null vekst i modellen uten teknologisk fremgang). Understrek skillet **midlertidig høyere vekst** vs. **permanent høyere nivå**. Vis avtakende utbytte både analytisk ($F''_{KK} < 0$) og grafisk (konkav sparekurve). Figurkrav: sparekurve, depresieringslinje, $K^*$, effekten av økt $s$.
- **Oppgavesjangre:** F. Mønstereksempel: «Bruk Solow-modellen til å drøfte hvilken betydning sparing og investering har for økonomisk vekst. Utled sammenhengen, illustrer likevekten grafisk, og forklar hva som skjer når spareraten øker.»
- **Typiske feil:** **Blande midlertidig vekstøkning og permanent nivåøkning** (§5.5); glemme at det er *avtakende* marginalproduktivitet ($F''_{KK} < 0$) som gir likevekt; tegne sparekurven som rett linje (den er konkav); feil retning på $s$-effekten; tro at høyere $s$ gir permanent høyere vekst.
- **Quiz: 26 · Flashcards: 28**

#### Kapittel 6.2: Inntektskonvergens og teknologisk catch-up

- **id:** `sok1012-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `sok1012-6-1`
- **Kapitteltype:** teori (med verbalt drøftingselement)
- **description:** De to argumentene for at fattige land vokser raskere — klassisk konvergens (avtakende utbytte) og teknologisk catch-up («advantage of backwardness») — og hvorfor konvergens likevel ikke alltid skjer.
- **Eksamensbelegg:** Konvergens/catch-up ~40 %, egen oppgave (15–40 %); ofte verbal (H2022, V2023, H2024). Å koble den empiriske figuren (Asia konvergerer, Afrika stagnerer) til institusjonene er A/B-markør (§4). Sjanger G. Prioritet: **kunne** (nivå 2, verbalt tungt). **Pensumforankring:** teknologisk catch-up bygger på **Stokke, «Technological catch-up vs. divergence»** — den ene navngitte pensumreferansen i boka.
- **Innholdskontrakt:** **To teoretiske argumenter for konvergens:** (i) **klassisk konvergens** (fra Solow): et land med lav kapitalbeholdning har høy marginalproduktivitet av kapital ($F'_K$ høy pga. $F''_{KK} < 0$) → høyere avkastning på investering → raskere vekst → tar igjen de rike; (ii) **teknologisk konvergens / «advantage of backwardness»** (Stokke-artikkelen): jo lengre bak teknologifronten et land ligger, jo større er læringspotensialet fra teknologioverføring → raskere vekst — men **bare hvis** landet kan absorbere teknologien. **Hvorfor konvergens IKKE alltid skjer (verbal drøfting):** dårlig fungerende markeder, svak eiendomsrett/rettssikkerhet, politisk ustabilitet, korrupsjon; **humankapital og åpenhet** avgjør om catch-up-potensialet utnyttes. **H2024-nyansen (A/B):** skill lineær vs. eksponentiell catch-up-spesifikasjon, og drøft **permanent vs. midlertidig** effekt av humankapital. Koble til den empiriske figuren (Asia vs. Afrika). Case-forslag: to land med ulik startkapital/teknologinivå og ulik institusjonell kvalitet.
- **Oppgavesjangre:** G. Mønstereksempel: «Drøft de teoretiske argumentene for inntektskonvergens mellom rike og fattige land, og forklar hvilke faktorer som kan gjøre at konvergens ikke inntreffer i praksis.»
- **Typiske feil:** **Feil retning på Solow-konvergensen** (§5.5 — glemme at avtakende utbytte driver den); bare nevne ett av de to argumentene (klassisk *eller* teknologisk); løs synsing om hindrene uten å koble til teori/empiri; forveksle permanent og midlertidig humankapitaleffekt; tro at catch-up er automatisk (den krever absorpsjonsevne).
- **Quiz: 22 · Flashcards: 26**

#### Kapittel 6.3: Drill: Solow og konvergens

- **id:** `sok1012-6-3` · **number:** 6.3 · **estimatedMinutes:** 75 · **prerequisites:** `sok1012-6-2`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på vekst-/konvergens-oppgaven: fra Solow-oppsettet til fullført A-besvarelse med likevekt, avtakende utbytte, sparerate-effekt og konvergensdrøfting.
- **Eksamensbelegg:** Dekker sjangrene F, G samlet — vekst/konvergens-oppgaven i temamenyen (fast fra 2022). Prioritet: **kunne** (høyt belønnet drøftingsdel).
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** *Solow-spor:* 1) sett opp produktfunksjon (avtakende utbytte), kapitalakkumulasjon og sparefunksjon; 2) finn $K^*$ ($sF(K) = \delta K$) grafisk; 3) analyser en sparerate-endring (midlertidig vekst vs. permanent nivå); 4) tolk i ord. *Konvergens-spor:* 1) forklar de to argumentene (klassisk + teknologisk); 2) drøft hindrene (institusjoner, humankapital); 3) koble til empiri; 4) konkluder. **Gjennomregnet/gjennomskrevet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig avtakende utbytte, skillet midlertidig vekst/permanent nivå, begge konvergensargumenter, og den institusjonelle drøftingen). **8–12 oppgaver** på eksamensnivå (roterer Solow-regning / sparerate-analyse / konvergensdrøfting / catch-up-nyanse), alle med `solution` + `hints`.
- **Oppgavesjangre:** F, G. Mønstereksempel (full kjede): «(a) Utled Solow-likevekten og illustrer den grafisk. (b) Vis hva som skjer med vekst og nivå når spareraten øker. (c) Drøft hvorfor et fattig land i teorien bør vokse raskere, og hvorfor det ikke alltid skjer.»
- **Typiske feil:** Solow-/konvergens-repertoaret fra §5: blande midlertidig vekst/permanent nivå (§5.5), feil retning på avtakende utbytte (§5.5), bare ett konvergensargument, løs synsing uten teori/empiri, uklare figurer.
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 6:** 4 prøver (6.A begreper — Solow-modellen, avtakende utbytte, likevektskapital $K^*$, konvergens, teknologisk catch-up; 6.B Solow — likevekt utledet + grafisk + sparerate-effekt (midlertidig vekst vs. permanent nivå), sjanger F; 6.C inntektskonvergens — de to argumentene + institusjonelle hindre, sjanger G; 6.D full vekst/konvergens-oppgave (Solow + catch-up-drøfting), sjanger F+G).

---

### Del 7 — Statsgjeldsdynamikk *(prioritet: KUNNE — NTNU-unik, fast fra 2022)*

> **NTNU-unik søyle:** Statsgjeldsdynamikk (Blanchard kap. 21) testes *aldri* hos
> UiO/ECON1310, men er fast fra 2022 her. Skrives fra grunnen.

#### Kapittel 7.1: Gjeldsdynamikk: gjeldsgrad, r vs. g og stabiliserende primærbalanse

- **id:** `sok1012-7-1` · **number:** 7.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok1012-1-1`
- **Kapitteltype:** teori (med regne- og drøftingselement)
- **description:** Hvordan gjeldsgraden utvikler seg over tid som funksjon av primærbalansen og forskjellen mellom rente $r$ og BNP-vekst $g$, hvilken primærbalanse som stabiliserer den, og den grafiske dynamikken mot 45°-linjen.
- **Eksamensbelegg:** Statsgjeld ~50 %, egen oppgave (10–30 %); regning på 1–2 år + $r$ vs. $g$ + stabiliserende primærbalanse (V2022, H2022, V2023). «Overse r vs. g» er sensorfeil #6 (§5.6). Sjanger H. Prioritet: **kunne** (nivå 2).
- **Innholdskontrakt:** **Gjeldsdynamikk-ligningen (Blanchard kap. 21):** endringen i gjeldsgraden avhenger av (i) **primærbalansen** (offentlig budsjett før renteutgifter) og (ii) forskjellen **$(r - g)$** mellom realrenten $r$ på gjelden og BNP-veksten $g$. Skriv opp lovregelen (neste års gjeldsgrad $\approx (1 + r - g) \times$ årets gjeldsgrad minus primæroverskudd som andel av BNP) og **regn gjeldsgraden 1–2 år frem** fra oppgitte tall. **Stabilitet:** $r > g$ → gjeldsgraden vokser av seg selv (ustabil, «snøball») uten primæroverskudd; $r < g$ → gjeldsgraden faller av seg selv. **Stabiliserende primærbalanse:** finn det primæroverskuddet (som andel av BNP) som holder gjeldsgraden konstant ($= (r - g) \times$ gjeldsgrad). **Grafisk:** dynamikken tegnet mot **45°-linjen** (neste års gjeldsgrad mot årets) — stabil vs. ustabil likevekt. **Verbal drøfting (A/B):** utsagnet «gjeld kan bare reduseres via primæroverskudd» er upresist — også **høy vekst og lave renter** ($g > r$) reduserer gjeldsgraden; og primæroverskudd i seg selv kan gi **lavere vekst / høyere rente** (**«ond sirkel»**). Kort om automatiske stabilisatorer. Figurkrav: 45°-diagrammet.
- **Oppgavesjangre:** H. Mønstereksempel: «Et land betaler 4 % realrente på gjelden, har 1,5 % BNP-vekst, 80 % gjeldsgrad og 1,5 % primæroverskudd. Beregn hva som skjer med gjeldsgraden de neste to årene, finn hvilken primærbalanse som stabiliserer den, og illustrer dynamikken grafisk.»
- **Typiske feil:** **Overse $r$ vs. $g$** (§5.6 — tro at primæroverskudd alltid reduserer gjeldsgraden, glemme at $r > g$ kan drive den opp likevel); regnefeil i flerårsdynamikken; feil fortegn i den stabiliserende primærbalansen; ikke drøfte «ond sirkel»/at høy vekst også reduserer gjeldsgraden.
- **Quiz: 24 · Flashcards: 28**

#### Kapittel 7.2: Drill: statsgjeldsdynamikk

- **id:** `sok1012-7-2` · **number:** 7.2 · **estimatedMinutes:** 70 · **prerequisites:** `sok1012-7-1`
- **Kapitteltype:** drill
- **description:** Sjangerdrill på gjeldsoppgaven: fra oppgitte tall til fullført A-besvarelse med flerårsdynamikk, stabilitetsvurdering ($r$ vs. $g$), stabiliserende primærbalanse, 45°-figur og «ond sirkel»-drøfting.
- **Eksamensbelegg:** Dekker sjanger H — gjeldsoppgaven i temamenyen (fast fra 2022). Prioritet: **kunne**.
- **Innholdskontrakt:** **Løsningsoppskrift (algoritme):** 1) skriv opp gjeldsdynamikk-ligningen; 2) regn gjeldsgraden 1–2 år frem fra oppgitte tall; 3) avgjør stabilitet ($r$ vs. $g$: eksploderende/fallende); 4) finn stabiliserende primærbalanse; 5) tegn 45°-dynamikken; 6) drøft utsagn (høy vekst/lav rente reduserer også; «ond sirkel»). **Gjennomregnet eksamenscase med sensor-margnotater** (uttelling ved hvert steg — særlig $r$ vs. $g$-stabilitetsvurderingen, den stabiliserende primærbalansen, og den nyanserte drøftingen). **8–12 oppgaver** på eksamensnivå (roterer $r \lessgtr g$ / ulike primærbalanser / flerårshorisonter / drøftingsutsagn), alle med `solution` + `hints` og figurbeskrivelse.
- **Oppgavesjangre:** H. Mønstereksempel (full kjede): «(a) Med 5 % rente, 2 % vekst, 100 % gjeldsgrad og et primæroverskudd på 2 % — regn gjeldsgraden de neste to årene. (b) Er gjeldsdynamikken stabil? (c) Hvilket primæroverskudd stabiliserer gjeldsgraden? (d) Vurder påstanden om at gjeld bare kan nedbetales via innstramminger.»
- **Typiske feil:** Gjelds-repertoaret fra §5: overse $r$ vs. $g$ (§5.6), regnefeil i flerårsdynamikken, feil stabiliserende primærbalanse, mangle 45°-figuren, ensidig «innstramming»-svar uten «ond sirkel»/vekst-nyansen.
- **Quiz: 18 · Flashcards: 16**

**Prøve-kvote Del 7:** 4 prøver (7.A begreper — gjeldsgrad, primærbalanse, $r$ vs. $g$, stabiliserende primærbalanse, «ond sirkel»; 7.B gjeldsdynamikk regnet 1–2 år frem + stabilitetsvurdering, sjanger H; 7.C stabiliserende primærbalanse + 45°-dynamikk grafisk, sjanger H; 7.D full gjeldsoppgave inkl. drøfting av «gjeld reduseres bare via primæroverskudd», sjanger H).

---

### Del 8 — Eksamenstrening

#### Kapittel 8.1: Historisk sjanger: IS-LM/AS-AD og valutakursregime (for eldre besvarelser)

- **id:** `sok1012-8-1` · **number:** 8.1 · **estimatedMinutes:** 60 · **prerequisites:** `sok1012-4-3`
- **Kapitteltype:** sjangerkapittel (historisk, «bør kjenne til»)
- **description:** Blanchard-epokens IS-LM- og AS-AD-apparat for åpen økonomi, og hvordan et sjokk virker ulikt under flytende vs. fast kurs — nok til å lese eldre eksamensbesvarelser, oversatt til dagens IS-RR-PK-språk.
- **Eksamensbelegg:** IS-LM/AS-AD var kjernen i Blanchard-epoken (2012–2017), men er **erstattet av IS-RR-PK** i dagens pensum (§6). Kun «bør kjenne til» — for å forstå eldre besvarelser, ikke som dagens hovedstoff. Sjanger E (historisk). Prioritet: **kjenne** (nivå 3). (Bygget etter `DNA-drofting.md`s sjangerkapittel-mal: oppskrift → gjennomskrevet oversettelse → momentliste — avvik §2.2.)
- **Innholdskontrakt:** **Kort om IS-LM:** LM-kurven (pengemarkedslikevekt) i stedet for RR-kurven (renteregel) — den historiske forskjellen. **AS-AD** for inflasjonsstyring (Røisland–Sveen PP-kurve som forløper til RR). **Åpen økonomi under to regimer:** analyser et sjokk ($\Delta G$, $\Delta M$, konjunkturoppgang ute) under **flytende** kurs (renteøkning + appresiering demper), deretter under **fast** kurs ($i = i^*$, kursen eksogen — BNP-effekten av et IS-skift blir *hele* skiftet, ingen rente-/kursmotvirkning), og **sammenlign**. **Oversettelsen (kjernen i kapitlet):** vis hvordan hvert IS-LM/AS-AD-poeng har sin motpart i IS-RR-PK (LM ↔ renteregel/RR; AS-AD ↔ PK + RR) slik at studenten kan lese en eldre besvarelse og oversette den til dagens apparat. **Gjennomskrevet oversettelses-eksempel** (i `collapsible`) med margkommentarer. **4–6 momentliste-oppgaver** (oversett et gitt IS-LM-resultat til IS-RR-PK). Understrek at studenten skal *bruke IS-RR-PK* på eksamen — dette kapitlet er bare en leseferdighet.
- **Oppgavesjangre:** E (historisk). Mønstereksempel: «En eldre eksamensbesvarelse analyserer en offentlig utgiftsøkning med IS-LM under fast og flytende kurs. Oversett resonnementet til dagens IS-RR-PK-modell.»
- **Typiske feil:** Bruke IS-LM/AS-AD på dagens eksamen (foreldet — bruk IS-RR-PK); tro at LM og RR er det samme (RR er en renteregel, ikke pengemarkedslikevekt); feil om fast kurs (pengepolitikken er *bundet*, BNP-effekten av IS-skift er full).
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 8.2: Øvingseksamen 1 — én stor åpen-økonomi-IS-RR-PK-oppgave

- **id:** `sok1012-8-2` · **number:** 8.2 · **estimatedMinutes:** 300 · **prerequisites:** `sok1012-4-4`
- **Kapitteltype:** øvingseksamen
- **description:** Et komplett 5-timers sett i den ene arketypen: én stor sammensatt IS-RR-PK-oppgave for åpen økonomi med presentasjon + to–tre sjokk, med A-besvarelse.
- **Eksamensbelegg:** Speiler Holden-arketype (a) — én stor sammensatt oppgave (V2025, H2023). Prioritet: **perfekt** (helhetstrening).
- **Innholdskontrakt:** **Én stor oppgave (100 %):** (i) presenter og utled den åpne IS-RR-PK-modellen, forklar de tre kurvenes helninger (RR sine to grunner, IS sine to kanaler); (ii) analyser et **etterspørselssjokk** (kun IS, ingen målkonflikt); (iii) analyser et **kostnadssjokk** (PK + RR + IS, målkonflikt, uklar renteeffekt, $d_1/d_2$); (iv) analyser et **valutakurssjokk** (IS + RR, ikke PK, uklar BNP); (v) kommenter ALLE variable + ML/handelsbalanse; (vi) drøft at full nøytralisering er umulig i åpen økonomi. Løsningsforslag i eget `collapsible` per deloppgave, skrevet som A-besvarelse (figurbeskrivelse i ord + evt. regning + verbal mekanismeforklaring), med `tip`-notat om delpoeng/vekting og sensor-margnotater. Nyskrevne sjokk og tall.
- **Oppgavesjangre:** A + B + C + D + J. Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** Tidsstyring; skifte feil kurve under tidspress (§5.1); konkludere skråsikkert om uklare effekter (§5.2); bare én RR-grunn (§5.3); overse valutakurskanalen (§5.4); glemme «alle variable» (§5.9); umerkede figurer.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 8.3: Øvingseksamen 2 — temameny (IS-RR-PK + Solow + statsgjeld)

- **id:** `sok1012-8-3` · **number:** 8.3 · **estimatedMinutes:** 300 · **prerequisites:** `sok1012-6-3`, `sok1012-7-2`
- **Kapitteltype:** øvingseksamen
- **description:** Falch/temameny-arketypen: én tung IS-RR-PK-sjokk-oppgave + én Solow/konvergens-oppgave + én statsgjeldsoppgave, med A-besvarelse.
- **Eksamensbelegg:** Speiler Holden-arketype (b) — 2–4 separate oppgaver med temameny (V2022, H2022, V2023). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Oppgave 1 (IS-RR-PK, ~50 %):** åpen økonomi, presenter modellen kort + analyser et kostnadssjokk med målkonflikt-drøfting. **Oppgave 2 (Solow/vekst, ~25 %):** utled likevekten, sparerate-effekt (midlertidig vekst vs. permanent nivå), og en konvergensdrøfting (de to argumentene + institusjoner). **Oppgave 3 (statsgjeld, ~25 %):** regn gjeldsgraden 1–2 år frem, stabilitet ($r$ vs. $g$), stabiliserende primærbalanse, 45°-figur, «ond sirkel»-drøfting. Løsningsforslag som A-besvarelse i `collapsible` per deloppgave med vekting og sensor-notater. Nyskrevne tall.
- **Oppgavesjangre:** C (oppg. 1) + F/G (oppg. 2) + H (oppg. 3). Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** Tidsstyring på tvers av tre oppgaver; kostnadssjokk uten målkonflikt-drøfting (§5.2); blande midlertidig vekst/permanent nivå i Solow (§5.5); overse $r$ vs. $g$ i gjeld (§5.6); umerkede figurer.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 8.4: Øvingseksamen 3 — temameny (åpen økonomi + konvergens + lønnsdannelse)

- **id:** `sok1012-8-4` · **number:** 8.4 · **estimatedMinutes:** 300 · **prerequisites:** `sok1012-5-2`, `sok1012-6-3`, `sok1012-4-4`
- **Kapitteltype:** øvingseksamen
- **description:** En annen temameny-variant: én åpen-økonomi/valutakurs-oppgave (NX/ML/UIP) + én catch-up/konvergens-oppgave + én lønnsdannelses-oppgave, med A-besvarelse.
- **Eksamensbelegg:** Speiler temameny-varianten der de NTNU-unike temaene dominerer (H2024: catch-up + gjeld + ML; H2019: lønnsdannelse + Solow). Prioritet: **perfekt**.
- **Innholdskontrakt:** **Oppgave 1 (åpen økonomi, ~40 %):** nettoeksport + Marshall-Lerner (bedrer depresieringen balansen?) + UIP + et valutakurssjokk i åpen IS-RR-PK. **Oppgave 2 (konvergens/catch-up, ~35 %):** de to argumentene, lineær vs. eksponentiell catch-up, permanent vs. midlertidig humankapitaleffekt, institusjonelle hindre koblet til empiri. **Oppgave 3 (lønnsdannelse, ~25 %):** likevektsledigheten fra lønns-/priskurven + de tre standardskiftene ($z^W$, $\mu$, produktivitet). Løsningsforslag som A-besvarelse i `collapsible` per deloppgave med vekting og sensor-notater. Nyskrevne tall.
- **Oppgavesjangre:** D/J (oppg. 1) + G (oppg. 2) + I (oppg. 3). Mønstereksempel: se innholdskontrakt.
- **Typiske feil:** ML som automatisk oppfylt (§5.7); overse valutakurskanalen (§5.4); bare ett konvergensargument; feil retning i lønnsdannelses-skiftene (§5.10); tidsstyring.
- **Quiz: 10 · Flashcards: 0**

**Prøve-kvote Del 8:** ingen egne prøver (delen består av det historiske sjangerkapitlet + 3 øvingseksamener).

---

### Kvotesammendrag (quiz/flashcards/prøver) — AUTORITATIV for alle senere faser

| Del | Kapitler | Quiz | Flashcards | Prøver |
|---|---|---|---|---|
| 0 | 0.1 | 16 | 18 | 0 |
| 1 | 1.1–1.3 | 18+22+16 = **56** | 20+22+16 = **58** | 4 |
| 2 | 2.1–2.5 | 24+24+26+22+18 = **114** | 26+26+28+24+16 = **120** | 4 |
| 3 | 3.1–3.4 | 24+28+20+18 = **90** | 26+30+22+16 = **94** | 4 |
| 4 | 4.1–4.4 | 24+22+26+18 = **90** | 28+26+28+16 = **98** | 4 |
| 5 | 5.1–5.2 | 24+20 = **44** | 28+22 = **50** | 4 |
| 6 | 6.1–6.3 | 26+22+18 = **66** | 28+26+16 = **70** | 4 |
| 7 | 7.1–7.2 | 24+18 = **42** | 28+16 = **44** | 4 |
| 8 | 8.1–8.4 | 16+10+10+10 = **46** | 16+0+0+0 = **16** | 0 (3 øvingseksamener) |
| **Sum** | **28 kap.** | **564** | **568** | **28 + 3 ØE** |

**Kontrollsum:** quiz (delsummer) $16+56+114+90+90+44+66+42+46 = \mathbf{564}$;
flashcards (delsummer) $18+58+120+94+98+50+70+44+16 = \mathbf{568}$.
Kapittel-for-kapittel (fasit):
quiz $16+18+22+16+24+24+26+22+18+24+28+20+18+24+22+26+18+24+20+26+22+18+24+18+16+10+10+10 = \mathbf{564}$;
flashcards $18+20+22+16+26+26+28+24+16+26+30+22+16+28+26+28+16+28+22+28+26+16+28+16+16+0+0+0 = \mathbf{568}$.
**Autoritativt: quiz = 564 ≥ 500 ✓, flashcards = 568 ≥ 500 ✓** (kapittel-for-kapittel-
summen er fasit og stemmer med deltabellens delsummer).

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamenstyngden: den store IS-RR-PK-oppgaven med sjokk-analyse
(Del 2–4, 13 kapitler) står for **204 av 564 quiz** og **216 av 568 flashcards**
— nøyaktig de
~100 % av eksamenspoengene motoren bærer i hvert sett. De fire NTNU-unike søylene
(åpen økonomi i Del 4, Solow/konvergens i Del 6, statsgjeld i Del 7, pluss
lønnsdannelse i Del 5) er tungt drillet fordi de er temamenyens faste innslag og
mangler helt hos ECON1310. Boka er et **regnefag med tungt verbalt/grafisk
drøftingsinnhold**: quiz ligger komfortabelt over gulvet (drilltunge søyler), og
flashcards er løftet godt over gulvet (568, ~68 over) fordi begrepene faktisk må sitte —
IS/RR/PK-kurvene og helningene, målkonflikt, UIP, Marshall-Lerner, avtakende
utbytte, $r$ vs. $g$, likevektsledighet, «advantage of backwardness» — og fordi
mekanismeforklaringene (som flashcards trener) er selve karakterskillet her.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–7, 28 totalt)

Hver prøve består av nyskrevne oppgaver i eksamens sjangre, med løsningsforslag
(A-besvarelse med figurbeskrivelser i ord + evt. regning + verbal mekanisme-
forklaring/drøfting) og poengfordeling. Omfang i minutter. Prøvekapitler legges
etter byggekontraktens spesifikasjon (`sok1012-<del>-prove`, chapterNumber
`<del>.P`).

**Del 1 — Keynes-modellen og makrofundament**
1. Prøve 1.A (25 min): Begreper — BNP-gap, potensielt BNP, multiplikator, spareparadoks, automatiske stabilisatorer.
2. Prøve 1.B (35 min): Keynes-modellen — likevekts-$Y$ og multiplikator regnet på gitte atferdsligninger.
3. Prøve 1.C (30 min): Spareparadoks + finanspolitikk (ΔG vs. skatt) drøftet med multiplikatoren.
4. Prøve 1.D (25 min): Obligasjonsprising — rente gitt kurs og kurs gitt rente (sjanger K).

**Del 2 — IS-RR-PK-modellen (lukket)**
1. Prøve 2.A (30 min): Begreper — IS-kurve, RR-kurve, Phillips-kurve, BNP-gap, renteregel, fleksibel inflasjonsstyring (sjanger A).
2. Prøve 2.B (40 min): IS-kurven utledet + helning + skift ved ΔG (sjanger A).
3. Prøve 2.C (40 min): Phillips-kurven + RR-kurven med de to grunnene, utledet fra renteregelen (sjanger A).
4. Prøve 2.D (45 min): Full IS-RR-PK-presentasjon i to paneler med likevekt og tolkning av alle variable (sjanger A).

**Del 3 — Sjokk-analyse og pengepolitikk**
1. Prøve 3.A (30 min): Begreper — etterspørselssjokk, kostnadssjokk, målkonflikt, $d_1/d_2$-vektlegging, uklar totaleffekt (sjanger A).
2. Prøve 3.B (40 min): Etterspørselssjokk komplett — kurveskift + alle variable + hvorfor ingen målkonflikt (sjanger B).
3. Prøve 3.C (45 min): Kostnadssjokk + målkonflikt — uklar renteeffekt drøftet mot $d_1/d_2$ (sjanger C).
4. Prøve 3.D (45 min): Kombinert sjokk / rentesjokk / 2-sektor-oljeøkonomi (sjanger L + B/C).

**Del 4 — Åpen økonomi og valutakurs**
1. Prøve 4.A (30 min): Begreper — nettoeksport, realvalutakurs, Marshall-Lerner, udekket renteparitet, flytende vs. fast kurs (sjanger A).
2. Prøve 4.B (40 min): Nettoeksport + ML — bedrer depresieringen balansen, med betingelsen (sjanger J).
3. Prøve 4.C (40 min): UIP + valutakursregime — appresiering ved renteøkning, fast vs. flytende (sjanger J).
4. Prøve 4.D (45 min): Valutakurssjokk i åpen IS-RR-PK — uklar BNP-effekt + alle variable (sjanger D).

**Del 5 — Arbeidsmarked og lønnsdannelse**
1. Prøve 5.A (25 min): Begreper — likevektsledighet, lønnskurve, priskurve, påslag $\mu$, $z^W$ (sjanger A).
2. Prøve 5.B (40 min): Likevektsledigheten utledet fra lønns-/priskurven + kobling til Phillips-kurven (sjanger I).
3. Prøve 5.C (35 min): Skiftanalyse — $z^W$, $\mu$ og produktivitet, med riktige retninger (sjanger I).
4. Prøve 5.D (45 min): Full lønnsdannelses-oppgave på eksamensnivå (H2019-type) (sjanger I).

**Del 6 — Solow-vekst og inntektskonvergens**
1. Prøve 6.A (30 min): Begreper — Solow-modellen, avtakende utbytte, likevektskapital $K^*$, konvergens, teknologisk catch-up (sjanger A).
2. Prøve 6.B (40 min): Solow — likevekt utledet + grafisk + sparerate-effekt (midlertidig vekst vs. permanent nivå) (sjanger F).
3. Prøve 6.C (35 min): Inntektskonvergens — de to argumentene + institusjonelle hindre (sjanger G).
4. Prøve 6.D (45 min): Full vekst/konvergens-oppgave (Solow + catch-up-drøfting) (sjanger F+G).

**Del 7 — Statsgjeldsdynamikk**
1. Prøve 7.A (25 min): Begreper — gjeldsgrad, primærbalanse, $r$ vs. $g$, stabiliserende primærbalanse, «ond sirkel» (sjanger A).
2. Prøve 7.B (40 min): Gjeldsdynamikk regnet 1–2 år frem + stabilitetsvurdering (sjanger H).
3. Prøve 7.C (35 min): Stabiliserende primærbalanse + 45°-dynamikk grafisk (sjanger H).
4. Prøve 7.D (40 min): Full gjeldsoppgave inkl. drøfting av «gjeld reduseres bare via primæroverskudd» (sjanger H).

### Øvingseksamener (3 komplette sett, i Del 8)

1. **Øvingseksamen 1** (8.2, 300 min): arketype (a) — én stor sammensatt åpen-økonomi-IS-RR-PK-oppgave med presentasjon + tre sjokk.
2. **Øvingseksamen 2** (8.3, 300 min): arketype (b), temameny — IS-RR-PK-sjokk (~50 %) + Solow/konvergens (~25 %) + statsgjeld (~25 %).
3. **Øvingseksamen 3** (8.4, 300 min): temameny-variant — åpen økonomi/ML/UIP (~40 %) + catch-up/konvergens (~35 %) + lønnsdannelse (~25 %).

Settene og prøvene dekker samlet sjangrene A–L minst én gang, og både Holden-
arketype (a) (én stor oppgave) og (b) (temameny), samt det historiske IS-LM/AS-AD-
apparatet (kap. 8.1) for lesing av eldre besvarelser.

---

## 5. Studieguide-kjerne (fra Del 0 + samlende ressurser)

Del 0 (kap. 0.1) er studieguidens kjerne. I tillegg skal boka samle:

1. **Eksamenskartet** — de to epokene (Holden styrende), de to arketypene, sjokk-
   katalogen, temafrekvens-tabellen, sjangerkatalogen A–L og prognosen for neste
   eksamen (§1, §7 i analysen).
2. **De fem søylene i ett blikk** — (1) IS-RR-PK og sjokk-analyse (kjernen), (2)
   åpen økonomi/valutakurs, (3) Solow-vekst og konvergens, (4) statsgjeldsdynamikk,
   (5) arbeidsmarked/lønnsdannelse — med Keynes-fundamentet i bunn.
3. **Sensorens fem metaregler** — intuisjon > tall; forklar helningene (RR sine to
   grunner, IS sine to kanaler); se ALLE variable; grafisk obligatorisk; se de
   uklare totaleffektene.
4. **Sjokk-tabellen** — hvilket sjokk skifter hvilke kurver: etterspørsel (kun IS,
   ingen målkonflikt); kostnad (PK + RR [+ IS åpen], målkonflikt, uklar rente);
   valuta (IS + RR, ikke PK, uklar BNP); rente (RR).
5. **Feilkatalogen** — de 10 typiske feilene (§5 i analysen) samlet, hver med
   henvisning til kapitlet som forebygger den: skifte feil kurve (3.1/3.2/4.3);
   glemme uklar totaleffekt (3.2/4.3); bare én RR-grunn (2.3); overse
   valutakurskanalen (4.3); feil retning på Solow-konvergens / blande vekst og nivå
   (6.1/6.2); overse $r$ vs. $g$ (7.1); ML som automatisk oppfylt (4.1); utledning
   i stedet for forståelse under hjemme-eksamen (0.1/drill); glemme «andre variable»
   (overalt); blande lønns-/priskurve-skiftene (5.2).
6. **Formelark i emnets notasjon** — én side: Keynes $Y = C + I + G(+NX)$,
   multiplikator $m = 1/(1 - c_1(1-t) - b_1)$; IS-helning $-(c_2+b_2)/(1-c_1(1-t)-b_1)$;
   Phillips $\pi = \pi^e + \beta(Y-Y^n)/Y^n + z^\pi$; renteregel
   $i = z^i + d_1(\pi-\pi^*) + d_2(Y-Y^n)/Y^n$; lønns-/priskurve $P = (1+\mu)W/A$,
   $W = P^e A^e \mathcal{W}(u, z^W)$; Solow $sF(K^*) = \delta K^*$; gjeldsdynamikk
   (primærbalanse + $(r-g)$); NX-determinanter, $\varepsilon = EP/P^*$, ML; UIP
   $E = E^e - \kappa(i^F - i)$; obligasjon kurs $= $ pålydende$/(1+r)$. Marker hva som
   skal *utledes/tolkes* (IS, RR, Solow-likevekt, gjeldsgrad, likevektsledighet) vs.
   hva som bare slås opp i formelsamlingen (derivasjons-/summeregler).
7. **Figurbiblioteket** — standardfigurene i ord: IS-RR-PK i to paneler med
   likevekt; hvert sjokk-skift (etterspørsel/kostnad/valuta) i begge paneler;
   NX mot $\varepsilon$; UIP $E$ mot rentedifferanse; lønns-/priskurve med $u^n$;
   Solow (sparekurve, depresieringslinje, $K^*$, effekt av økt $s$); gjeldsdynamikk
   mot 45°-linjen — med merkekravene per figur (akser, kurver, likevektspunkter,
   skift navngitt).
8. **Kryssreferansekart mot SOK1000/ECON1310** (arbeidsdelingen, §7) — hva SØK1012
   forutsetter og lenker til (BNP, nasjonalregnskap, enkel Keynes-modell fra
   SOK1000; det delte Holden-apparatet i ECON1310) vs. hva SØK1012 selv bygger ut
   (åpen økonomi, Solow, konvergens, statsgjeld, den åpne IS-RR-PK-varianten).
9. **Studieløp** — anbefalt progresjon (10-ukers og 3-ukers intensivvariant): Del 1
   (Keynes-fundamentet) → Del 2 (IS-RR-PK lukket) → Del 3 (sjokk) → Del 4 (åpen
   økonomi) — kjernen — deretter temamenyens søyler Del 5 (lønnsdannelse), Del 6
   (Solow/konvergens), Del 7 (statsgjeld), prøver underveis, og de tre
   øvingseksamenene de siste ukene under tidspress (300 min).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `sok1012` med alle 28 kapitler
   (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster
   `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`; `sectionNames`
   fra makrostruktur-tabellen (§2). Registrer emnet i
   `src/app/bok/trinn/hoyere/institusjoner.ts` under **NTNU** med visningsnavn
   «SØK1012 Makroøkonomisk analyse».
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–L, de to epokene, sjokk-
   katalogen, frekvenstallene og avgrensningen (mot ECON1310/SOK1000) som resten
   refererer til.
3. **Del 1** (Keynes-fundamentet) — BNP-gap, multiplikator, atferdsligningene og
   obligasjonsprising som resten bygger på.
4. **Kjernen i avhengighetsrekkefølge**: Del 2 (IS-RR-PK lukket) → Del 3 (sjokk) →
   Del 4 (åpen økonomi). Én byggeagent per hel del (jf. fase 4-batching); Del 2 er 5
   kapitler, så den kan splittes, men gi da hele delens kontrakter til begge agenter
   og flagg for konsistenssjekk (Holden-notasjon, RR sine to grunner, sjokk-skiftene).
   Drillkapitlet (2.5 / 3.4 / 4.4) bygges av samme agent som delen.
5. **Temamenyens tre søyler**: Del 5 (lønnsdannelse), Del 6 (Solow/konvergens), Del 7
   (statsgjeld) — selvstendige, kan bygges parallelt.
6. **Del 8 til slutt** (historisk sjangerkapittel + 3 øvingseksamener gjenbruker
   alt); bygges av én agent som leser hele skjelettet.
7. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert;
   prøvene (§4) i prøvekapitler per del etter byggekontraktens spesifikasjon
   (`sok1012-<del>-prove`, chapterNumber `<del>.P`), Del 1–7.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse`
      (generer helst via `json.dump`; husk å escape `"` i norske sitattegn);
      `npm run build` grønn.
- [ ] **LaTeX**: alle formler i `$...$`/`$$...$$` med dobbel backslash i JSON
      (`\\pi`, `\\varepsilon`, `\\delta`, `\\mu`, `\\Delta`); ingen unicode-brøker;
      konsistent $Y$, $C$, $I$, $G$, $NX$, $i$, $\pi$, $\pi^e$, $\pi^*$, $Y^n$,
      $z^\pi$, $d_1/d_2$, $\beta$, $\mu$, $\varepsilon$, $E$, $E^e$, $i^F$, $r$, $g$.
- [ ] **Holden-notasjons- og epoke-konsistens**: tekstsøk over alle sok1012-filer —
      **påkrevd**: IS-RR-PK som hovedapparat, renteregel $i = z^i + d_1(\pi-\pi^*) +
      d_2(\cdot)$, Phillips $\pi = \pi^e + \beta(\cdot)$, RR sine to grunner, UIP
      $E = E^e - \kappa(i^F-i)$, Solow $sF(K^*) = \delta K^*$, gjeld $(r-g)$;
      **forbudt/uønsket som hovedapparat**: IS-LM og AS-AD skal **kun** forekomme i
      kap. 8.1 (historisk) — grep etter «IS-LM», «LM-kurve», «AS-AD» skal gi treff
      **kun** i `sok1012-8-1*`-filene (og evt. Del 0s epoke-omtale), ikke i
      modell-/sjokk-kapitlene.
- [ ] **Sjokk-kravet**: kap. 3.1/3.2/4.3 og drillene (3.4/4.4) skifter **riktig**
      kurve(r): etterspørsel = kun IS; kostnad = PK + RR (+ IS åpen); valuta = IS +
      RR, **ikke** PK; rente = RR — grep-sjekk at PK **ikke** skiftes ved etterspørsels-
      eller valutakurssjokk.
- [ ] **Målkonflikt-/uklarhets-kravet**: kap. 3.2 og 4.3 forklarer eksplisitt at
      renteeffekten (kostnadssjokk) hhv. BNP-effekten (valutasjokk) er **uklar** og
      avhenger av $d_1/d_2$, og at etterspørselssjokk **ikke** gir målkonflikt; RR
      sine **to** grunner (direkte + indirekte) står eksplisitt i kap. 2.3.
- [ ] **Åpen-økonomi-kravet**: kap. 4.1/4.3/4.4 bruker valutakurskanalen (IS flatere
      åpen), Marshall-Lerner **med betingelsen** (ikke automatisk oppfylt), UIP med
      riktig fortegn, og kommenterer valutakurs + handelsbalanse blant «alle variable».
- [ ] **NTNU-unike søyler**: Solow (6.1/6.3) skiller **midlertidig vekst** fra
      **permanent nivå** og bruker avtakende utbytte ($F''_{KK} < 0$); konvergens
      (6.2) har **begge** argumenter (klassisk + teknologisk/Stokke) + institusjonelle
      hindre; statsgjeld (7.1/7.2) bruker **$(r - g)$**, stabiliserende primærbalanse
      og 45°-figur; lønnsdannelse (5.1/5.2) har korrekte skiftretninger for $z^W$/$\mu$/
      produktivitet.
- [ ] **Intuisjon + figur + alle variable**: hvert eksempel og løsningsforslag med
      figur har figurbeskrivelse i ord (akser, kurver, likevektspunkter, skift
      navngitt) OG verbal mekanismeforklaring; sjokk-analyser kommenterer BNP, rente,
      inflasjon **og** konsum/investering/valutakurs/handelsbalanse der relevant.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra
      dette skjelettet), Forkunnskaper-`text` med lenker + Symbol- og formelliste-
      `collapsible` (per delkapittel — forklarer ALLE symboler brukt), Typiske feil-
      `warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` +
      `hints`, repetisjons-`collapsible`; drillkapitlene (2.5/3.4/4.4/6.3/7.2) har
      løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver; sjangerkapitlet 8.1
      følger drøftings-malen (oppskrift + gjennomskrevet oversettelse + momentliste).
- [ ] **Quiz-sum ≥ 564 og flashcard-sum ≥ 568** per kvotetabellen (kontrollsummér
      kapittel-for-kapittel mot §3 — den er autoritativ).
- [ ] **Prøver**: 4 per temadel 1–7 (28 stk) + 3 øvingseksamener; settene og prøvene
      dekker samlet sjangrene A–L minst én gang, og både Holden-arketype (a) og (b).
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne kontekster (sjokk,
      land, sektorer), egne formuleringer; ingen formuleringer fra reelle sett eller
      sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og skal
      varieres videre, ikke kopieres ordrett inn); modelligningene er standard
      Holden-notasjon uten verkshøyde; pensum (Steinar Holden, *Makroøkonomi*;
      Blanchard, Amighini & Giavazzi kap. 21 for statsgjeld; Stokke-artikkelen for
      teknologisk catch-up) refereres ved navn, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter
      (200 + kapittelspesifikk streng), jf. lærdommen om `getChapterMeta`;
      institusjonssiden (NTNU) og bokforsiden (seksjonstitlene fra §2) sjekkes.

---

## 7. Arbeidsdeling mot ECON1310, SOK1000 og andre SOK-/ECON-emner

SØK1012 er NTNUs bredere makro-innføring. Denne tabellen styrer hva SØK1012 bygger
ut selv vs. hva den forutsetter/kryssrefererer.

| Tema | Bygges ut i SØK1012 | Forhold til andre bøker |
|---|---|---|
| BNP, nasjonalregnskap, enkel Keynes-modell, arbeidsledighet (grunnlag) | **Delvis** — Del 1 repeterer kompakt det IS-utledningen trenger | Grunnere nivå i **SOK1000** (NTNU-innføring, ikke bygd som egen bok — lenk til **ECON1310**s tilsvarende fundament der det finnes) |
| IS-RR-PK (lukket), Phillips, renteregel, sjokk-analyse, målkonflikt, lønnsdannelse | **JA** — Del 2, 3, 5 (kjernen) | **Delt apparat med ECON1310** (bygd, live) — samme Holden-notasjon; SØK1012 kjører oftere den **åpne** varianten og legger mindre vekt på komparativ statikk |
| **Åpen økonomi / valutakurs** (NX, ML, UIP, valutakurskanal, åpen IS-RR-PK) | **JA** — Del 4 (tungt) | **Fraværende/perifert i ECON1310** — NTNU-signatur |
| **Solow-vekstmodellen** | **JA** — Del 6 | **Aldri testet i ECON1310** (til tross for emnebeskrivelsen) — skrives fra grunnen |
| **Inntektskonvergens / teknologisk catch-up** | **JA** — Del 6 | **Aldri testet i ECON1310** — Stokke-artikkelen er NTNU-spesifikk pensum |
| **Statsgjeldsdynamikk** ($r$ vs. $g$, primærbalanse) | **JA** — Del 7 | **Aldri testet i ECON1310** — Blanchard kap. 21, NTNU-spesifikt |
| Obligasjonsprising (pris–rente) | **JA** — kap. 1.3 (kort) | Dybde i **SOK2010** (Banking, NTNU) — bør kjenne til, ikke pensum her |
| 2-sektor / oljeøkonomi-pengepolitikk | **Kort** — kap. 3.3 (nivå 3) | Lavfrekvent NTNU-tema (V2024) |
| Derivasjon/optimering (verktøy) | **NEI** — forutsettes | **SOK1001** (matte for økonomer, NTNU); brukes i Solow-utledning/komparativ statikk |
| Mikroøkonomi (marked, markedsmakt, spill, markedssvikt) | **NEI** — annet fagområde | **SOK1002** + **SØK1011** (NTNU mikro) — ingen makro-overlapp |
| IS-LM / AS-AD som hovedapparat | **NEI** — kun historisk (kap. 8.1) | Erstattet av IS-RR-PK i dagens pensum; motsatt av ECON1310 (der IS-LM/AS-AD aldri var på eksamen) |

**Møtepunkter (kryssrefereres, ikke gjentas):** makro-grunnlaget (BNP,
nasjonalregnskap, enkel Keynes-modell) forutsettes fra innføringen (SOK1000) og
lenkes til **ECON1310**s tilsvarende kapitler med markdown-lenker
(`[tittel](/bok/econ1310/<chapterId>)`) der de deler apparat — SØK1012 bygger
videre til full IS-RR-PK, åpen økonomi, vekst og gjeld. Overlappet med ECON1310 er
på **kjernemodellen** (IS-RR-PK, Phillips, renteregel, lønnsdannelse); der SØK1012
er unik (åpen økonomi, Solow, konvergens, statsgjeld) skrives alt fra grunnen. Dette
speiler NTNU/UiO-arbeidsdelingen i analysens §0.

---

> **Merknad om verifiserte referanser:** Alle modellresultater, notasjon og
> frekvenser er hentet fra `EKSAMENSANALYSE.md`. Modelligningene (IS-RR-PK-
> apparatet, Solow-likevekten, gjeldsdynamikken, UIP, Marshall-Lerner) er standard
> Holden-/Blanchard-notasjon uten verkshøyde. Pensum-referansene — **Steinar Holden,
> *Makroøkonomi*** (hovedbok, med eget kompendium som erstattet kap. 16);
> **Blanchard, Amighini & Giavazzi, *Macroeconomics — A European perspective*** kap.
> 21 (høy statsgjeld); og **H. E. Stokke, «Technological catch-up vs. divergence»**
> (teknologisk catch-up) — er dokumentert i analysens §0/§8. *(verifiser)* den
> nøyaktige pensumutgaven og kapittelnummereringen mot gjeldende emnebeskrivelse før
> pensumankere skrives inn, siden emnet er utfaset og pensumlisten kan ha variert
> mellom kull. At enkelte tema (Stackelberg-lignende sekvensielle spill i mikro
> hører ikke hit; her: 2-sektor-oljeøkonomi og deler av catch-up-nyansen) er «gått
> gjennom på forelesning» utover pensumboka er dokumentert i analysens §3/§4.
