# Bokskjelett: ECON1310 Makroøkonomi I — eksamensrettet lærebok

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
> `EKSAMENSANALYSE.md` (22 ordinære sett V2015–H2025, 21 sensorveiledninger,
> 9 utsatt-sett). Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene
> der (teori/drill/øvingseksamen) er obligatoriske og gjentas ikke her.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `econ1310` |
| Tittel | **Makroøkonomi I — eksamensrettet (ECON1310, UiO)** |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt modellfag med fast oppgavemal) |
| Antall kapitler | **29** (1 eksamenskart + 24 tema + 4 eksamenstrening) |
| Estimert totaltid | **2 205 min ≈ 37 timer** |
| Quiz totalt | **525** (krav ≥500) |
| Flashcards totalt | **510** (krav ≥500) |

**Pitch (én avsnitt):** ECON1310-eksamen har fulgt nøyaktig samme mal i elleve år:
en kortsvarsdel (20–30 %), én stor modelloppgave i Steinar Holdens
Keynes/IS-RR-PK-apparat med z-sjokkvariabler på tilvekstform (50–60 %, alltid
tyngst), og en ren verbal drøfting eller rollecase (20–25 %). Denne boka er
kalibrert mot nettopp det: den dropper IS-LM, AD-AS og Solow (0 forekomster på
22 sett til tross for emnebeskrivelsen), driller multiplikator-utledning på
endringsform, IS-RR-PK-diagrammets to paneler, Phillips-kurvens kausalkjede og
case-drøfting uten konklusjon — og trener studenten i å skrive slik sensor
faktisk gir uttelling: mekanismer i to lag, riktige fortegn, og aldri mer enn
det spørres om.

**Kritisk notasjonsregel (gjelder HELE boka):** Bruk Holden-apparatet med
z-sjokkvariabler og tilvekstform overalt: $z^C, z^I, z^T, z^G, z^i, z^\pi, z^W$,
parametre $c_1, c_2, b_1, b_2, t, a, \beta, d_1, d_2, \mu$, og endringer som
$\Delta Y = m \cdot \Delta z$. ALDRI IS-LM med LM-kurve, ALDRI AD-AS, ALDRI
Solow — disse er ikke testet på elleve år og skal ikke omtales annet enn i
Del 0 som eksplisitt «utenfor eksamenskjernen».

---

## 2. Makrostruktur

Rekkefølgen følger faglig avhengighet (DNA-regelen); frekvensen styrer *omfanget*:

| Del | Tittel | Kap. | Begrunnelse (frekvens → omfang) |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden |
| 1 | Kortsvarfundamentet: nasjonalregnskap, penger, arbeidsmarked i tall, valutakurs | 5 | Nasjonalregnskap 68 %, valutakurs 55 %, finanssystem 32 %, AKU-begreper gjengangere; sammen bærer de kortsvarsdelen (20–30 % av poengene siden 2022) og BNP-klassifiseringssjangeren (ny H2024). Faglig fundament uten modellkrav → først. |
| 2 | Keynes-modellen og multiplikatoren | 5 | **100 % frekvens**, kjernen i den tyngste oppgaven (50–60 %) → nivå 1 «perfekt» → 4 teorikapitler + eget drillkapittel. |
| 3 | Finanspolitikk | 2 | 77 % frekvens, men teknikken bor i Del 2; her virkemiddellære + handlingsregel (nivå 2) → 2 kompakte kapitler. |
| 4 | Arbeidsmarked, lønnsdannelse og Phillips-kurven | 3 | PK **100 %** (nivå 1), lønns-/priskurve 55 % (nivå 2), frontfag 9 % som hovedoppgave (nivå 3) → 2 tunge + 1 kompakt kapittel. Må komme før Del 5 fordi RR-kurven bygger på PK. |
| 5 | Pengepolitikk og IS-RR-PK | 6 | Renteregel/IS-RR-PK **86 %**, diagramdeloppgavene eksplisitt tyngst vektet i H2024/H2025 → nivå 1 → 4 teorikapitler + drillkapittel + 1 verbalkapittel (pengepolitikk-drøfting 59 %, likviditetsfelle 18 %). |
| 6 | Drøfting og case | 3 | Verbal oppgave i **alle 22 sett** (20–30 %); rollecase i 4 av 4 sett 2024–25 → egen metodedel med drillkapittel. |
| 7 | Eksamenstrening | 4 | Kortsvar-drill (sjanger A, ~25 gjengangerbegreper) + 3 komplette øvingseksamener. |

**Avvik fra DNA-malen (dokumentert):** DNA-en legger sjangerkapitler i siste del.
Her ligger to av tre drillkapitler (2-5 komparativ statikk, 5-5 grafisk analyse)
inne i temadelene sine i stedet, fordi sjangrene er 100 %/86 %-gjengangere som må
drilles umiddelbart etter teorien — Del 7 beholder kortsvar-drillen og
øvingseksamenene. Case-drillen ligger i Del 6 (6-2) av samme grunn.

---

## 3. Kapitler

Feltene under følger DNA-ens «Skjelett-krav». Sjangerbokstavene (A–N) refererer
til oppgavetype-katalogen i denne bokas Del 0 (gjengitt der fra analysen §3).
Prioritetsklasser: **perfekt** (nivå 1) / **kunne** (nivå 2) / **kjenne** (nivå 3).

---

### Del 0 — Eksamenskart

#### econ1310-0-1 · Kap. 0.1 — Eksamenskartet: slik testes ECON1310

- **number:** 0.1 · **estimatedMinutes:** 30 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen, den faste tredelingen, temafrekvensene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på alle 22 sett. Skal gjengi: (i) formen (4 timers digital skoleeksamen, A–F, alle oppgaver skal besvares); (ii) den faste malen siden V2023: kortsvar 20–30 % + stor modelloppgave 50–60 % + verbal drøfting/case 20–25 %; (iii) temafrekvens-tabellen (Keynes/multiplikator 100 %, Phillips-kurven 100 %, IS-RR-PK 86 %, finanspolitikk 77 %, nasjonalregnskap 68 %, pengepolitikk-drøfting 59 %, arbeidsmarked 55 %, valutakurs 55 %, åpen Keynes 55 %, kostnadssjokk 50 %, rollecase 41 % — 4 av 4 sett 2024–25, telleregel 36 % — 8 av 10 siste, sparing 32 %, handlingsregel 32 %, finanssystem 32 %, automatiske stabilisatorer 27 %, likviditetsfelle 18 %, Ricardiansk ekvivalens 14 %); (iv) at IS-LM, AD-AS og Solow har **0 forekomster på 22 sett** og bevisst er utelatt; (v) sensorens fem metaregler (ikke svar på mer enn spurt; vis utregningen; alle mekanismer med — men kun modellens egne; prioriter tiden etter vektene; drøftingen uten matematikk); (vi) karakterskillene (bestått ≈ riktige fortegn + forsøk på mekanisme; C/D ≈ korrekt multiplikator + riktige skift; A/B ≈ fortegnsubestemthet, dekomponering, kobling på tvers, liten-åpen-økonomi-perspektiv).
- **Innholdskontrakt:** Oppgavetype-katalogen A–N presenteres som studentens sjekkliste med typisk vekt per sjanger: A kortsvar (10–30 %), B BNP-klassifisering (10 %), C telleregel (3–8 %), D parametertolkning (5–15 %), E komparativ statikk («vis matematisk», tyngst vektet), F følgestørrelser (8–15 %), G modellutvidelse (10–20 %), H grafisk etterspørselssjokk (8–15 %), I kostnadssjokk (8–20 %), J dimensjonering (5–10 %), K G vs. skatt (5–10 %), L verbal teoridrøfting (20–30 %), M rollecase (20–30 %), N arbeidsmarkedsmodellen (20–30 % når egen oppgave). Pluss prognosen: neste eksamen = kortsvar 25–30 % + modelloppgave 50 % (ett etterspørselssjokk gjennom tilvekstform → følgestørrelser → diagram, ev. kostnadssjokk til slutt) + rollecase 20–25 % på dagsaktuelt konjunkturbilde. Avslutt med leseplan: Del 2 og 5 er «må perfekt», Del 1/3/4/6 «må kunne», nivå 3-temaene markeres.
- **Oppgavesjangre:** Ingen regneoppgaver; 3–4 refleksjonsoppgaver av typen «gitt vektene 25/50/25 og 240 minutter — sett opp tidsbudsjett per deloppgave».
- **Typiske feil:** Metafeilene: svare på mer enn spurt (null uttelling), feil tidsprioritering, matematikk i drøftingsoppgaven.
- **Quiz: 10 · Flashcards: 10** (frekvenser, vekter, metaregler)

---

### Del 1 — Kortsvarfundamentet

#### econ1310-1-1 · Kap. 1.1 — Nasjonalregnskapet: BNP, BNI og disponibel inntekt

- **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Nasjonalregnskapets kjernebegreper og generalbudsjettligningen som resten av boka hviler på.
- **Eksamensbelegg:** Nasjonalregnskap/BNP-begreper i 15/22 sett (68 %), mest som kortsvar (sjanger A); gjengangerbegreper: måling av offentlig/ikke-markedsrettet produksjon (4 forekomster), BNP vs. BNI vs. disponibel inntekt (2), potensielt BNP (2), netto finansinvesteringer = 0 i lukket økonomi (2). Prioritet: **kunne**.
- **Innholdskontrakt:** Generalbudsjettligningen $Y = C + I + G + X - Q$ (lukket: $Y = C + I + G$); bruttoprodukt = produksjonsverdi − produktinnsats; BNP fra produksjons-, inntekts- og anvendelsessiden; BNI = BNP + netto formuesinntekter og lønn fra utlandet; disponibel inntekt for Norge; **offentlig ikke-markedsrettet produksjon verdsettes til faktorinnsatsen** (kostnadene); potensielt BNP = produksjonen ved langsiktig opprettholdbar faktorutnyttelse (øker f.eks. ved arbeidsinnvandring); realinvestering vs. finansinvestering; i lukket økonomi er netto finansinvesteringer for alle sektorer samlet = 0 og $S = I$. Alt kun til *bruk* — ingen utledninger kreves.
- **Oppgavesjangre:** A (kortsvar). Mønstereksempel: «Forklar kort hvorfor sykehustjenester som ikke omsettes i et marked likevel inngår i BNP, og hvordan verdien fastsettes.»
- **Typiske feil:** Utflytende kortsvar (sensor: 2–3 setninger holder, mer gir null ekstra); blande BNP og BNI; tro at offentlig produksjon verdsettes til markedspris.
- **Quiz: 25 · Flashcards: 25**

#### econ1310-1-2 · Kap. 1.2 — «Inngår dette i BNP?» — klassifiseringsdrill

- **number:** 1.2 · **estimatedMinutes:** 60 · **prerequisites:** econ1310-1-1 · **kapitteltype:** drill
- **description:** Drill i den nye eksamenssjangeren: klassifisere transaksjoner inn/ut av BNP med kategori, beløp og begrunnelse.
- **Eksamensbelegg:** Sjanger B: ny egen oppgavetype H2024 (og H2024-utsatt) verdt 10 % (fem transaksjoner); i tillegg gammel kortsvar-gjenganger. Analysen flagger: «forvent gjentakelse». Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift (DNA-drillformat): 1) Produseres noe nytt i perioden? 2) Kategori: konsum / realinvestering / offentlig kjøp / eksport / import; 3) beløp; 4) 1–2 setningers begrunnelse. Faste resultater som SKAL med: nye boliger = realinvestering (ja); bruktbolig-salg = nei, men *meglerhonoraret* = ja (produsert tjeneste); verdipapirhandel = formuesomplassering utenfor BNP, men kurtasje/gebyr inngår; husholdningers kjøp i utlandet = import (trekkes fra); eksport til full verdi; egenproduksjon/ubetalt husarbeid utenfor. Kun bruk — ingen utledning.
- **Oppgavesjangre:** B. Mønstereksempel: «En familie kjøper en brukt leilighet for 4 mill. kr og betaler eiendomsmegleren 2 % provisjon. Avgjør hva som eventuelt inngår i BNP, med kategori, beløp og kort begrunnelse.» Drillkapittel: 8–15 varianter (aksjer med kurtasje, nybygg, importbil, streaming-abonnement fra utenlandsk tilbyder, offentlig lærerlønn, bruktbil via forhandler med avanse …).
- **Typiske feil:** Glemme at honoraret/avansen inngår selv når selve objektet ikke gjør det; klassifisere import som «minus konsum» i stedet for egen post; oppgi ja/nei uten beløp (beløpet kreves eksplisitt).
- **Quiz: 20 · Flashcards: 15**

#### econ1310-1-3 · Kap. 1.3 — Penger, banker og finanssystemet

- **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Pengenes funksjoner, bankenes rolle og forskjellen på gjelds- og egenkapitalfinansiering — kortsvarsrepertoaret om finans.
- **Eksamensbelegg:** Finanssystem-kortsvar i 7/22 sett (32 %), men **3 av 4 sett i 2024–25** — stigende. Gjengangere: pengenes tre funksjoner (3), obligasjon vs. aksje (3), reserverenten, bedrifters finansieringskilder, pant og risikopremier, konkursprioritet. Prioritet: **kjenne** (men billige, sikre poeng).
- **Innholdskontrakt:** Pengenes tre funksjoner (betalingsmiddel, måleenhet/verdimål, verdioppbevaring); obligasjon = omsettelig rentebærende gjeldsbrev (statsobligasjon lav risiko pga. statens kredittverdighet) vs. aksje = eierandel med utbytterett, stemmerett og begrenset ansvar; lån vs. egenkapital som finansieringskilde; pant og risikopremie i lånerenten; konkursprioritet (kreditorer før eiere); bankenes kredittformidling; styringsrente og reserverente; kort om hvordan styringsrenten smitter til markedsrentene. Kun kvalitativt — aldri utledning.
- **Oppgavesjangre:** A. Mønstereksempel: «Et vekstselskap vurderer å utstede obligasjoner i stedet for nye aksjer. Gjør kort rede for hovedforskjellen mellom de to finansieringsformene for eierne og for investorene.»
- **Typiske feil:** Ramse opp pengefunksjonene uten å kunne eksemplifisere; blande obligasjonens kupongrente med styringsrenten; skrive halvside der 2–3 setninger er nok.
- **Quiz: 20 · Flashcards: 25**

#### econ1310-1-4 · Kap. 1.4 — Arbeidsmarkedet i tall: AKU, arbeidsstyrken og ledighetstyper

- **number:** 1.4 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Arbeidsmarkedsstatistikkens definisjoner og de fire ledighetstypene — kortsvarsgjengangeren fremfor noen.
- **Eksamensbelegg:** Ledighetstype-definisjoner er den hyppigste kortsvarsfamilien (5+ forekomster: likevekts-/konjunktur-/struktur-/friksjonsledighet); AKU-kriteriene (2). Del av arbeidsmarkedstemaets 55 %. Prioritet: **kunne**.
- **Innholdskontrakt:** AKU-kriteriene: arbeidsledig = uten inntektsgivende arbeid, har **aktivt søkt** siste 4 uker, kan tiltre raskt; arbeidsstyrken = sysselsatte + arbeidsledige; ledighetsraten $u = \frac{\text{arbeidsledige}}{\text{arbeidsstyrken}}$; AKU vs. NAV-registrert ledighet; friksjonsledighet (søketid), strukturledighet (kvalifikasjons-/geografimismatch), konjunkturledighet (etterspørselssvikt, $Y < Y^n$), likevektsledighet $u^n$ (den ledigheten økonomien vender tilbake til — full modell i kap. 4.1); sysselsettingsandel og yrkesdeltakelse. Kun bruk.
- **Oppgavesjangre:** A. Mønstereksempel: «Gjør kort rede for vilkårene for å regnes som arbeidsledig i arbeidskraftundersøkelsen, og vis hvordan ledighetsraten beregnes.»
- **Typiske feil:** Glemme «aktivt søkt»-kriteriet; beregne raten av befolkningen i stedet for arbeidsstyrken; blande konjunktur- og strukturledighet.
- **Quiz: 15 · Flashcards: 20**

#### econ1310-1-5 · Kap. 1.5 — Valutakurs og åpen økonomi: nominell kurs, realkurs og trilemmaet

- **number:** 1.5 · **estimatedMinutes:** 50 · **prerequisites:** econ1310-1-1 · **kapitteltype:** teori
- **description:** Valutakursbegrepene og kanalene fra kronekurs til inflasjon og eksport — voksende kortsvars- og casetema.
- **Eksamensbelegg:** Valutakurs/åpen økonomi i 12/22 sett (55 %), primært kortsvar og som moment i casene; kronekurs → inflasjon/eksport (5 forekomster), realvalutakurs (3), trilemmaet; H2025 hadde tre valutakurs-delspørsmål — analysen kaller temaet «voksende». Prioritet: **kunne** (dybde: kjenne).
- **Innholdskontrakt:** Nominell kurs E (NOK per enhet valuta; høyere E = svakere krone); depresiering/appresiering; realvalutakursen $\frac{E \cdot P^*}{P}$ og hva den måler (konkurranseevne); kanalene: svakere krone → dyrere import → **importert inflasjon** ($z^\pi$-tolkning!) og bedret eksportkonkurranse; rentedifferanse mot utlandet → kapitalstrømmer → kronekurs (uten formell UIP-utledning); **trilemmaet**: fast kurs, fri kapitalbevegelse og selvstendig pengepolitikk — velg to; Norge som **liten åpen økonomi** der renten virker via valutakurs og bytteforhold (toppkandidat-momentet i casene). Kun kvalitativt/bruk; realkurs-*beregning* med tall kan forekomme som kortsvar.
- **Oppgavesjangre:** A + moment i M. Mønstereksempel: «Kronen svekker seg markert mot handelspartnernes valutaer. Forklar kort hva dette gjør med norsk inflasjon og eksport, og hvorfor sentralbanken bryr seg om kursen.»
- **Typiske feil:** Snu fortegnet på E (blande «sterkere krone» og «høyere E»); glemme at realkursen krever både E, P* og P; nevne bare eksportkanalen og glemme importprisene.
- **Quiz: 20 · Flashcards: 25**

---

### Del 2 — Keynes-modellen og multiplikatoren *(prioritet: PERFEKT)*

#### econ1310-2-1 · Kap. 2.1 — Modellens anatomi: atferdsligninger, endogene variabler og telleregelen

- **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** econ1310-1-1 · **kapitteltype:** teori
- **description:** Keynes-modellens ligninger i Holden-notasjon, skillet endogen/eksogen og telleregelen som åpner nesten hver modelloppgave.
- **Eksamensbelegg:** Parametertolkning (sjanger D) i **samtlige 22 sett** (5–15 %); telleregel/modellklassifisering (sjanger C) i 8 av de 10 siste ordinære settene (V2021–V2025), nesten alltid deloppgave (a), 3–8 % — analysen: «billige poeng som må sitte». Prioritet: **perfekt**.
- **Innholdskontrakt:** Hele apparatet settes opp og tolkes ligning for ligning:
  $$Y = C + I + G \quad (\text{lukket}); \qquad Y = C + I + G + X - Q \quad (\text{åpen})$$
  $$C = z^C + c_1(Y - T) - c_2(i - \pi^e), \quad 0 < c_1 < 1$$
  $$I = z^I + b_1 Y - b_2(i - \pi^e)$$
  $$T = z^T + tY \quad (\text{endogen skatt; av og til eksogen } T = z^T)$$
  $$Q = aY$$
  Tolkninger som SKAL kunne gjengis presist: $c_1$ = marginal konsumtilbøyelighet; $c_2, b_2 > 0$ fordi høyere realrente gjør sparing mer attraktiv og lån dyrere — for konsum skal **substitusjons- og inntektseffekt skilles** for full uttelling, pluss gjeldskanalen (husholdningene har samlet mer gjeld enn innskudd); $b_1 > 0$ (kapasitetsbehov + lettere finansiering ved høy aktivitet); $t$ = skattesystemets konjunkturfølsomhet; $z$-leddene som eksogene skiftvariabler («sjokk»). Telleregelen: modellen er **determinert** når antall ligninger = antall endogene variabler — studenten skal *telle eksplisitt* og *navngi* de endogene; åpen vs. lukket avgjøres av om eksport-/importledd finnes. Forenklet variant uten rente ($c_2 = b_2 = 0$) presenteres som førstetrinn. Alt her er *bruk og tolkning* — utledningene kommer i 2.2.
- **Oppgavesjangre:** C + D. Mønstereksempler: (C) «Modellen over består av fire ligninger. Avgjør om den er determinert ved å telle ligninger og endogene variabler, og navngi de endogene.» (D) «Forklar den økonomiske begrunnelsen for at $b_1 > 0$, og hvorfor vi antar $0 < c_1 < 1$.»
- **Typiske feil:** Telle $z$-variablene som endogene; kalle modellen åpen fordi renten er med; tolke $c_2$ bare som substitusjonseffekt (inntektseffekt + gjeldskanal skal med for full uttelling).
- **Quiz: 20 · Flashcards: 20**

#### econ1310-2-2 · Kap. 2.2 — Multiplikatoren på tilvekstform: kjerneteknikken

- **number:** 2.2 · **estimatedMinutes:** 70 · **prerequisites:** econ1310-2-1 · **kapitteltype:** teori
- **description:** Utlede likevekten på endringsform, finne multiplikatoren, fastsette fortegn og forklare mekanismen i to lag — emnets viktigste enkeltferdighet.
- **Eksamensbelegg:** Sjanger E i **samtlige 22 sett** (100 %); alltid den tyngst vektede deloppgaven, eksplisitt «særlig vektlagt» i H2024/H2025. Sjokk-katalogen roterer systematisk: $\Delta z^C$ (V2018, V2019, V2020, H2024, V2025), $\Delta z^I$ (H2019, H2020, V2021, H2022, V2024), $\Delta z^T$ (H2018, V2022, H2023, H2025), $\Delta G$ (V2015, V2018, H2021, H2022) — samme øvelse, bare sjokkvariabel og fortegn varierer. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES AKTIVT, steg for steg med intuisjon per steg:
  likevekt → endringsform → multiplikator. Lukket økonomi, endogen skatt (rente holdt fast i dette kapitlet):
  $$\Delta Y = \frac{1}{1 - c_1(1-t) - b_1} \cdot \Delta z \equiv m \cdot \Delta z, \qquad m > 1$$
  Stabilitetsvilkåret $1 - c_1(1-t) - b_1 > 0$ garanterer positiv multiplikator — fortegnet skal alltid fastsettes eksplisitt. Skattemultiplikatoren:
  $$\Delta Y = \frac{-c_1}{1 - c_1(1-t) - b_1} \cdot \Delta z^T$$
  (svakere enn G-multiplikatoren fordi $c_1 < 1$). Mekanismen i **to lag** er et absolutt sensorkrav: (i) direkte effekt av sjokket; (ii) indirekte multiplikatoreffekt i runder (økt $Y$ → økt inntekt → økt $C$ og $I$ → økt $Y$ …), **dempet av skattelekkasjen** $t$, **forsterket av investeringsakseleratoren** $b_1$. Toppkandidat-moment: multiplikatorens *størrelse* (over/under 1) kan ikke avgjøres uten tallverdier — bare fortegnet.
- **Oppgavesjangre:** E. Mønstereksempel: «Husholdningene blir mer pessimistiske og reduserer forbruket eksogent ($\Delta z^C < 0$). Utled på endringsform hvor mye BNP endres, fastsett fortegnet, og gjør rede for både førsterundeeffekten og de påfølgende rundene i multiplikatorprosessen.» Oppgavesettet skal rotere gjennom hele sjokk-katalogen ($\Delta z^C, \Delta z^I, \Delta z^T, \Delta G$, begge fortegn).
- **Typiske feil (analysen §5.1, §5.7, §5.11):** Bare den direkte effekten — glemme multiplikatorrundene (eller omvendt: bare «multiplikatoren» uten førsterundeeffekten); korrekt algebra uten mekanismeforklaring i ord (gir ikke full uttelling); glemme demperne (skattelekkasje) og forsterkeren ($b_1$) i mekanismekjeden.
- **Quiz: 30 · Flashcards: 30**

#### econ1310-2-3 · Kap. 2.3 — Følgestørrelsene: ΔC, ΔT, ΔB og ΔS

- **number:** 2.3 · **estimatedMinutes:** 60 · **prerequisites:** econ1310-2-2 · **kapitteltype:** teori
- **description:** Sette multiplikatoren inn i definisjonene av konsum, skatteinngang, budsjettbalanse og sparing — og signere resultatene.
- **Eksamensbelegg:** Sjanger F i 14/22 sett (H2015, V2016, V2018, H2018, V2019, H2019, V2020, H2021, V2022, V2023, H2023, H2024, V2025, H2025), 8–15 %, «særlig vektlagt» i nyere sett. Spareparadokset/ΔS-utledning i 7/22 (32 %). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES AKTIVT:
  $$\Delta C = \Delta z^C + c_1(1-t)\Delta Y \quad (\text{direkte + indirekte del})$$
  $$\Delta T = t\,\Delta Y; \qquad B = T - G,\; \Delta B = \Delta T - \Delta G$$
  $$S = Y - C - C^G, \quad \Delta S = (1 - c_1(1-t))\Delta Y \quad (\text{ved } \Delta z^C = 0)$$
  $$S^P = Y - T - C \quad (\text{privat sparing — skill fra total!})$$
  I lukket økonomi: $S = I$. Fremgangsmåten er alltid: sett multiplikatoruttrykket for $\Delta Y$ inn i definisjonen og *signér*. Toppkandidat-momenter: **fortegnsubestemte totaleffekter** (f.eks. $\Delta B$ ved $\Delta G < 0$: $\Delta T = t\Delta Y < 0$ trekker ned mens $-\Delta G > 0$ trekker opp — avhenger av parametre; resonner om hva som er rimelig); skatteinngangen øker med *mindre* enn en satsøkning skulle tilsi fordi $Y$ faller (endogen dempning); spareparadokset: økt sparelyst ($\Delta z^C < 0$) kan senke $Y$ så mye at samlet sparing ikke øker.
- **Oppgavesjangre:** F. Mønstereksempel: «Vis hvor mye samlet skatteinngang og privat konsum endres etter skatteøkningen, og forklar hvorfor skatteinngangen øker mindre enn satsøkningen isolert sett skulle tilsi.»
- **Typiske feil (analysen §5.5):** Blande sparebegrepene — privat sparing $S^P = Y - T - C$ vs. total sparing $S = Y - C - C^G$ (eksplisitt trekk i V2018); glemme den direkte komponenten $\Delta z^C$ i $\Delta C$; påstå bestemt fortegn på $\Delta B$ der det er parameteravhengig.
- **Quiz: 25 · Flashcards: 25**

#### econ1310-2-4 · Kap. 2.4 — Modellvarianter: åpen økonomi, eksogen skatt og finanspolitiske regler

- **number:** 2.4 · **estimatedMinutes:** 70 · **prerequisites:** econ1310-2-3 · **kapitteltype:** teori
- **description:** Sammenligne multiplikatorer på tvers av modellvarianter og forklare forskjellene økonomisk — importlekkasje, automatiske stabilisatorer og motsykliske G-regler.
- **Eksamensbelegg:** Åpen Keynes-modell i 12/22 sett (55 %; 4 av 4 i 2022–23); sjanger G (modellutvidelse/multiplikator-sammenligning) i V2016 (balansert budsjett), H2019 (budsjettbalansering), H2020 + V2021 (G-regel), H2021 (eksogen → endogen skatt), H2022 (lukket enkel vs. åpen full), V2024 ($t=0$: blir utslaget sterkere?), 10–20 % når den forekommer. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES AKTIVT — multiplikatoren i alle varianter, med systematisk sammenligning:
  $$\text{Lukket, endogen skatt: } m = \frac{1}{1 - c_1(1-t) - b_1}$$
  $$\text{Åpen (import } Q = aY\text{): } m = \frac{1}{1 - c_1(1-t) - b_1 + a} \quad (\text{importlekkasjen demper})$$
  $$\text{Motsyklisk G-regel } G = z^G - gY: \; m = \frac{1}{1 - c_1(1-t) - b_1 + a + g}$$
  Eksogen skatt ($t = 0$): større multiplikator — endogen skatt er en **automatisk stabilisator** (V2024 spør motsatt vei). G-regelen demper ytterligere, men gjør budsjettbalansen endogen (stabilisering koster underskudd); budsjettbalansering i nedgang (kutte G når T faller) virker **prosyklisk** og forsterker fallet. Åpen økonomi: eksport-/importsjokk ($\Delta X$, $\Delta z^Q$) gjennom samme apparat. Regelen «kun modellens egne mekanismer»: i en variant uten $t$ finnes ingen skattelekkasje å omtale.
- **Oppgavesjangre:** G + E. Mønstereksempel: «Myndighetene forplikter seg til automatisk å redusere offentlige kjøp når BNP stiger ($G = z^G - gY$). Utled den nye multiplikatoren, vis at et eksportfall nå gir mindre BNP-utslag — og forklar hvorfor prisen er et budsjettunderskudd.»
- **Typiske feil (analysen §5.2, §5.6, §5.11):** Importere mekanismer som ikke finnes i modellvarianten (skatte-, import- eller renteeffekter i en forenklet variant — eksplisitt advart mot i H2022); overse at budsjettbalansen er *uendret* når både T og G er eksogene (H2020); forveksle endogen og eksogen skatt → feil multiplikator/budsjetteffekt (karakterskille i H2020); glemme importlekkasjen i mekanismekjeden for åpen modell.
- **Quiz: 25 · Flashcards: 20**

#### econ1310-2-5 · Kap. 2.5 — Drill: komparativ statikk («vis matematisk»)

- **number:** 2.5 · **estimatedMinutes:** 90 · **prerequisites:** econ1310-2-4 · **kapitteltype:** drill
- **description:** Sjangerdrill på hele E/F/G-komplekset: fra oppgitt modell til fullført A-besvarelse på endringsform.
- **Eksamensbelegg:** Dekker sjangrene E (100 %, alltid tyngst), F (64 %) og G — til sammen kjernen av modelloppgaven som utgjør 50–60 % av hver eksamen. H2024/H2025 markerer eksplisitt at regnedeloppgavene teller mest. Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) klassifiser modellen (tell ligninger/endogene — sjanger C-åpningen); 2) sett likevekten på tilvekstform; 3) isolér $\Delta Y = m \cdot \Delta z$; 4) fastsett fortegn via stabilitetsvilkåret; 5) mekanisme i to lag (direkte + runder, med dempere/forsterkere som *finnes i varianten*); 6) følgestørrelser ved innsetting; 7) flagg fortegnsubestemthet. Gjennomregnet eksamenscase med sensor-margnotater (hva som gir uttelling ved hvert steg). 10–15 oppgaver som roterer hele sjokk-katalogen: $\Delta z^C$, $\Delta z^I$, $\Delta z^T$, $\Delta G$, $\Delta X$ — begge fortegn, varierende modellvarianter (lukket enkel, lukket full, åpen, G-regel, eksogen skatt), alle på eksamensnivå.
- **Oppgavesjangre:** E, F, G, C. Mønstereksempel (full deloppgave-kjede à la V2022/H2023): «(a) Er modellen determinert? (b) Bedriftenes investeringsvilje faller ($\Delta z^I < 0$) — vis matematisk virkningen på BNP og forklar mekanismene. (c) Hva skjer med skatteinngangen og budsjettbalansen? (d) Anta i stedet åpen økonomi — blir BNP-utslaget større eller mindre? Begrunn.»
- **Typiske feil:** Hele §5-repertoaret for regnedelen samlet: kun direkte effekt (§5.1), fremmede mekanismer (§5.2), sparebegreps-forveksling (§5.5), endogen/eksogen skatt (§5.6), matematikk uten ord (§5.7), glemte dempere (§5.11).
- **Quiz: 20 · Flashcards: 10**

---

### Del 3 — Finanspolitikk

#### econ1310-3-1 · Kap. 3.1 — Virkemiddellæren: offentlige kjøp, skatt og automatiske stabilisatorer

- **number:** 3.1 · **estimatedMinutes:** 50 · **prerequisites:** econ1310-2-4 · **kapitteltype:** teori
- **description:** Hvorfor én krone i offentlige kjøp gir mer BNP enn én krone i skattelette, og hva automatiske stabilisatorer gjør.
- **Eksamensbelegg:** Finanspolitikk i modellen i 17/22 sett (77 %); sjanger K (G vs. skatt, ofte eksplisitt uten utregning) i V2016, V2020, H2023 (+ V2023-utsatt), 5–10 %; automatiske stabilisatorer eksplisitt i 6/22 (27 %); penge- vs. finanspolitikk som teoridrøfting 4/22. Prioritet: **kunne** (teknikken er allerede drillet i Del 2).
- **Innholdskontrakt:** Kjerneresonnement som skal kunne gis *uten regning*: økte offentlige kjøp virker direkte på etterspørselen krone for krone; skattekutt virker bare indirekte via konsumet (andelen $c_1 < 1$, resten lekker til sparing) → **G-multiplikatoren er alltid størst**, G er «billigst» per BNP-enhet; speilvendt gir skatteendring minst BNP-skade når budsjettet skal strammes. **Balansert budsjettendring** ($\Delta G = \Delta T$) gir positiv multiplikator (skal kunne vises på tilvekstform — aktiv utledning). Automatiske stabilisatorer: endogen skatt $t$ (og motsykliske overføringer) demper svingninger uten vedtak; kontrast til aktiv (diskresjonær) politikk med besluttnings- og virkningslag. Toppkandidat-refleks: kalle $t$ en automatisk stabilisator *uoppfordret*.
- **Oppgavesjangre:** K + L-moment. Mønstereksempel: «Uten å regne: forklar hvorfor én krone i økte offentlige kjøp løfter BNP mer enn én krone i skattelette, og hva det innebærer for hvilket virkemiddel som belaster budsjettet minst per BNP-enhet.»
- **Typiske feil:** Påstå at skattekutt virker «direkte» på etterspørselen; glemme at balansert budsjettøkning har positiv nettoeffekt; regne i drøftingsvarianten der oppgaven eksplisitt sier «uten å regne».
- **Quiz: 20 · Flashcards: 20**

#### econ1310-3-2 · Kap. 3.2 — Handlingsregelen og finanspolitikk i Norge

- **number:** 3.2 · **estimatedMinutes:** 45 · **prerequisites:** econ1310-3-1 · **kapitteltype:** teori
- **description:** Oljefondsmekanismen, handlingsregelen og de norske budsjettbegrepene som går igjen i kortsvar og case.
- **Eksamensbelegg:** Handlingsregel/oljepengebruk i 7/22 sett (32 %); kortsvarsgjenganger «handlingsregelen» (5 forekomster) og «oljekorrigert vs. strukturelt oljekorrigert underskudd» (2); V2018 hadde handlingsregel-avveiningen som «strekkoppgave» (sensor vurderer resonnementet mildt og bruker den til å skille toppkarakterer). Fast bakteppe i rådgiver-casene. Prioritet: **kunne**.
- **Innholdskontrakt:** Kvalitativt (aldri utledning): petroleumsinntektene inn i SPU; uttak over tid ≈ **forventet realavkastning 3 %** (nedjustert fra 4 % i 2017) målt ved det **strukturelle oljekorrigerte underskuddet**; skillet oljekorrigert (faktisk) vs. strukturelt oljekorrigert (konjunkturrenset) underskudd; regelen vektlegger å jevne ut konjunktursvingninger (bruke mindre i oppgang, mer i nedgang); avveiningene: finanspolitisk handlingsrom vs. fondets varighet, generasjonshensyn, press på konkurranseutsatt sektor.
- **Oppgavesjangre:** A + L/M-moment. Mønstereksempel: «Gjør kort rede for handlingsregelen for bruk av oljeinntekter, og forklar forskjellen på det oljekorrigerte og det strukturelle oljekorrigerte underskuddet.»
- **Typiske feil:** Si at «3 % av fondet skal brukes hvert år» (regelen gjelder *over tid* og er konjunkturfleksibel); blande de to underskuddsbegrepene; glemme konjunkturutjevnings-hensynet.
- **Quiz: 15 · Flashcards: 20**

---

### Del 4 — Arbeidsmarked, lønnsdannelse og Phillips-kurven *(PK: PERFEKT)*

#### econ1310-4-1 · Kap. 4.1 — Lønns- og priskurvemodellen og likevektsledigheten

- **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** econ1310-1-4 · **kapitteltype:** teori
- **description:** Lønnskurve, priskurve og likevektsledigheten — modellen bak Phillips-kurven og en tung oppgave i seg selv.
- **Eksamensbelegg:** Arbeidsmarked/lønnsdannelse i 12/22 sett (55 %, stigende: 3 av 4 i både 2022–23 og 2024–25); sjanger N som egen tung oppgave (20–30 %) i H2018, H2020, H2021, V2022 (+ V2020-utsatt), ellers kortsvar og som PK-fundament i alle år. Prioritet: **kunne** (grensende til perfekt).
- **Innholdskontrakt:** MÅ KUNNE SETTES OPP, TEGNES OG SKIFTES:
  $$\text{Priskurven: } \frac{W}{P} = \frac{A}{1+\mu} \quad (\text{påslagsprising under monopolistisk konkurranse})$$
  $$\text{Lønnskurven: } \frac{W}{P} = A \cdot W(u, z^W) \quad (\text{forhandlingsmakt; ledigheten disiplinerer})$$
  $(u, W/P)$-diagram: flat/fallende priskurve, fallende lønnskurve i $u$; **likevektsledigheten $u^n$ i skjæringen**. Skiftanalyse (aktiv): økt forhandlingsmakt/lønnspress $z^W \uparrow$ → lønnskurven opp → $u^n \uparrow$, **langsiktig reallønn uendret** (låst av priskurven), potensielt BNP ned; koordinert lønnsdannelse ($z^W \downarrow$) → motsatt; lavere påslag $\mu$ → priskurven opp → $u^n \downarrow$ *og* høyere reallønn. Kobling til $Y^n$ og videre til PK (kap. 4.2).
- **Oppgavesjangre:** N. Mønstereksempel: «Arbeidstakersidens forhandlingsposisjon styrkes varig. Bruk lønns- og priskurvemodellen til å avgjøre virkningen på nominell lønn, reallønn på lang sikt og likevektsledigheten — med diagram.»
- **Typiske feil:** Konkludere med varig høyere reallønn etter $z^W$-skift (priskurven låser reallønnen — bare $u^n$ endres); tegne skift i feil kurve; glemme koblingen til potensielt BNP.
- **Quiz: 20 · Flashcards: 20**

#### econ1310-4-2 · Kap. 4.2 — Phillips-kurven: β-mekanismen og kausalkjeden

- **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** econ1310-4-1 · **kapitteltype:** teori
- **description:** Phillips-kurven i Holden-form og den syvleddede kausalkjeden som sensor forventer «ordrett-presist».
- **Eksamensbelegg:** Phillips-kurven i **22/22 sett (100 %)** — kausalkjeden bak β etterspørres i en eller annen form nesten hvert år; analysens prioriteringsliste rangerer «PK-mekanismen ordrett-presist» som nivå 1 punkt 3. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT:
  $$\pi = \pi^e + \beta\,\frac{Y - Y^n}{Y^n} + z^\pi, \qquad \beta > 0$$
  Kausalkjeden bak $\beta$ skal kunne gjengis presist og komplett: **høyere BNP-gap → lavere ledighet → sterkere forhandlingsmakt → høyere lønnsvekst → høyere marginalkostnad → bedriftene setter pris som påslag over marginalkostnad → høyere inflasjon.** Tolkning av hvert ledd: $\pi^e$ (forventningskanalen), $z^\pi$ (kostnadssjokk: energipriser, kronekurs, råvarer — kobling til kap. 1.5), $Y^n$ (fra lønns-/priskurvemodellen). Ledighetsformen $\pi = \pi^e - b(u - u^n) + z^\pi$ nevnes som variant (dukket opp i ett utsatt-sett). PK som nedre panel i IS-RR-PK-diagrammet forberedes (stigende i $(Y, \pi)$-rommet).
- **Oppgavesjangre:** D + E-moment + A. Mønstereksempel: «Forklar trinn for trinn hvorfor høyere produksjonsgap gir høyere inflasjon i Phillips-kurven — hele kjeden fra aktivitetsnivå til prissetting.»
- **Typiske feil:** Hoppe over ledd i kjeden (særlig marginalkostnad → påslag); blande $z^\pi$ (kostnadssjokk) og $\pi^e$ (forventninger); utelate $Y^n$-normaliseringen i gapleddet.
- **Quiz: 25 · Flashcards: 20**

#### econ1310-4-3 · Kap. 4.3 — Frontfagsmodellen og koordinert lønnsdannelse

- **number:** 4.3 · **estimatedMinutes:** 40 · **prerequisites:** econ1310-4-1 · **kapitteltype:** teori
- **description:** Den norske lønnsdannelsen — frontfag, TBU og hvorfor koordinering gir lavere likevektsledighet.
- **Eksamensbelegg:** Frontfag/koordinert lønnsdannelse som hovedoppgave i 2/22 (9 %: H2018, V2022), oftere som kortsvar; drøftingstema 4 i sjanger L (H2018, H2020, H2021, V2022, H2023-utsatt, V2023-utsatt). Prioritet: **kjenne** (drøftingsberedskap).
- **Innholdskontrakt:** Kvalitativt: frontfagsmodellen (konkurranseutsatt industri forhandler først og setter rammen); TBUs rolle (felles tallgrunnlag, forankrer forventninger); koordinering som lavere lønnspress $z^W$ → lønnskurven ned → **lavere likevektsledighet** med uendret langsiktig reallønn (modellen fra 4.1 gjør drøftingen presis); risikoen: frontfagsramme som ikke passer alle sektorer. Kun verbal bruk — figurer fra 4.1 kan gjenbrukes i drøfting (tillatt fra 2021).
- **Oppgavesjangre:** L + A. Mønstereksempel: «Drøft hvordan koordinert lønnsdannelse à la frontfagsmodellen kan gi varig lavere arbeidsledighet, og hvilke forutsetninger som må holde.»
- **Typiske feil:** Ren opplisting uten drøfting (avveining for/mot kreves); matematisk modell i drøftingsoppgaven (eksplisitt uønsket hvert år); påstå at koordinering hever reallønnen på lang sikt.
- **Quiz: 10 · Flashcards: 15**

---

### Del 5 — Pengepolitikk og IS-RR-PK *(prioritet: PERFEKT)*

#### econ1310-5-1 · Kap. 5.1 — Renteregelen og RR-kurven

- **number:** 5.1 · **estimatedMinutes:** 60 · **prerequisites:** econ1310-2-2, econ1310-4-2 · **kapitteltype:** teori
- **description:** Sentralbankens renteregel, innsettingen av Phillips-kurven og dekomponeringen d₁β + d₂ — toppsjikt-spørsmålet fremfor noen.
- **Eksamensbelegg:** Renteregel/IS-RR-PK i 19/22 sett (86 %); parametertolkning av $d_1, d_2$ i samtlige sett med renteregel; dekomponeringen $d_1\beta + d_2$ er eksplisitt toppsjikt-markør i sensorveiledningene (sjanger D-toppen). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE UTLEDES AKTIVT:
  $$\text{Renteregelen: } i = z^i + d_1(\pi - \pi^*) + d_2\,\frac{Y - Y^n}{Y^n}$$
  Innsetting av PK gir RR-kurven:
  $$i = z^i + d_1(\pi^e - \pi^*) + d_1 z^\pi + (d_1\beta + d_2)\,\frac{Y - Y^n}{Y^n}$$
  Tolkning av hvert ledd; $d_1$ = vekt på inflasjonsavvik, $d_2$ = vekt på BNP-gap; **dekomponeringen av gap-koeffisienten: $d_2$ = direkte kanal, $d_1\beta$ = indirekte kanal via Phillips-kurven** (gapet presser inflasjonen opp, som renteregelen svarer på). $z^i$ som pengepolitisk sjokk. Konsekvens som skal forstås nå og brukes i 5.2–5.3: fordi PK er *bakt inn* i RR, skifter et rent etterspørselssjokk IKKE RR-kurven; bare $z^\pi$, $\pi^e$ og $Y^n$ skifter RR.
- **Oppgavesjangre:** D. Mønstereksempel: «I renteregelen med Phillips-kurven innsatt står $d_1\beta + d_2$ foran produksjonsgapet. Forklar økonomisk hvorfor gapet påvirker renten gjennom nettopp denne kombinasjonen av en direkte og en indirekte kanal.»
- **Typiske feil:** Tolke $d_1\beta$ som «dobbeltelling»; glemme at RR er stigende i $Y$ *både* via $d_2$ og $d_1\beta$; utelate $Y^n$-normaliseringen.
- **Quiz: 25 · Flashcards: 20**

#### econ1310-5-2 · Kap. 5.2 — IS-RR-PK-diagrammet: etterspørselssjokk

- **number:** 5.2 · **estimatedMinutes:** 65 · **prerequisites:** econ1310-5-1 · **kapitteltype:** teori
- **description:** To-panels-diagrammet og den grafiske analysen av etterspørselssjokk — deloppgavene som nå vektes tyngst.
- **Eksamensbelegg:** Sjanger H i samtlige sett med renteregel (19/22), 8–15 %, «særlig vektlagt» i H2024/H2025; V2025 spesifiserer aksene eksplisitt — diagramoppsettet vurderes. Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE TEGNES OG ANALYSERES AKTIVT: to paneler — øvre $(Y, i)$ med fallende IS og stigende RR; nedre $(Y, \pi)$ med stigende PK. Alltid: marker utgangspunkt A og ny likevekt B, skift riktig kurve, forklar mekanismen *inkludert sentralbankens respons langs RR*. Faste resultater: positivt etterspørselssjokk ($\Delta G > 0$, $\Delta z^C > 0$, $\Delta z^I > 0$, skattekutt) → IS høyre → $Y \uparrow$, $i \uparrow$, $\pi \uparrow$; negativt → alt ned, og sentralbanken kutter renten men **demper bare — nøytraliserer ikke** (nivå 1-innsikten). Kritisk: et rent etterspørselssjokk skifter IKKE RR (PK er bakt inn). Standard tilleggskrav: sammenligning med fast rente ($i$ låst) — da blir $Y$-utslaget større fordi rentedempingen uteblir. A-besvarelse-standard for figurer: riktig kurve, riktig retning, begge likevektspunkter markert; kurvefasong/benevnelser underordnet (H2022), men aksene skal være $(Y,i)$ øverst og $(Y,\pi)$ nederst.
- **Oppgavesjangre:** H. Mønstereksempel: «Bruk IS-RR-PK-diagrammene til å vise hvordan en skatteøkning påvirker BNP, styringsrenten og inflasjonen, og forklar hvorfor sentralbankens rentekutt bare demper — ikke opphever — nedgangen.»
- **Typiske feil (analysen §5.3):** Glemme sentralbankens respons (analysere som om renten var fast); eller omvendt: skifte RR-kurven ved et rent etterspørselssjokk; utelate ett av de to panelene; ikke markere både A og B.
- **Quiz: 25 · Flashcards: 20**

#### econ1310-5-3 · Kap. 5.3 — Kostnadssjokk og sentralbankens målkonflikt

- **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** econ1310-5-2 · **kapitteltype:** teori
- **description:** Stagflasjonslogikken: når PK og RR skifter sammen, og hvorfor kostnadssjokk — i motsetning til etterspørselssjokk — gir et reelt dilemma.
- **Eksamensbelegg:** Sjanger I i 9 ordinære sett (H2015, H2017, H2018, V2019, V2020, H2020, V2021, V2022, V2025) + $\pi^e$-varianten (H2016, V2017) + 3 utsatt-sett — 50 % samlet; 8–20 % vekt. «Skillet etterspørsels- vs. kostnadssjokk» er ifølge analysen **den enkeltinnsikten sensorveiledningene oftest fremhever som karakterskille** (nivå 1 punkt 4). Prioritet: **perfekt**.
- **Innholdskontrakt:** MÅ KUNNE AKTIVT: ved $\Delta z^\pi > 0$ skifter **både** PK (med $\Delta z^\pi$) og RR (med $d_1 \Delta z^\pi$) opp; IS ligger fast → $i \uparrow$, $Y \downarrow$, $\pi \uparrow$ (stagflasjon). Kjernen: ved etterspørselssjokk trekker inflasjons- og produksjonsgap **samme vei** (ingen målkonflikt — sentralbanken kan reagere aggressivt); ved kostnadssjokk trekker de **motsatt vei** (reelt dilemma; $d_1/d_2$ uttrykker avveiningen). Totaleffekten på inflasjonen er formelt ubestemt — rimelig antakelse: sentralbanken overreagerer ikke, så inflasjonen stiger, men mindre enn sjokket (toppkandidat-resonnementet om fortegnsubestemthet). Speilvendt for $\Delta z^\pi < 0$ (strømprisfall, kronappresiering). Varianter som skifter RR/PK: $\Delta \pi^e$ og $\Delta Y^n$ (V2021) — behandles kort med samme logikk.
- **Oppgavesjangre:** I. Mønstereksempel: «Elektrisitetsprisene faller kraftig ($\Delta z^\pi < 0$). Vis i diagrammene hva som skjer med produksjon, rente og inflasjon, og drøft avveiningen sentralbanken står overfor sammenlignet med et rent etterspørselsfall.»
- **Typiske feil (analysen §5.4):** Feil proporsjoner i figuren — tegne et negativt kostnadssjokk slik at inflasjonen ender *høyere* enn utgangspunktet (selvmotsigende gitt forholdet mellom RR-helningen $d_1\beta + d_2$ og skiftet $d_1\Delta z^\pi$; eksplisitt påpekt V2019); glemme at RR skifter *sammen med* PK; påstå bestemt fortegn på nettoinflasjonen uten resonnement.
- **Quiz: 20 · Flashcards: 15**

#### econ1310-5-4 · Kap. 5.4 — Dimensjonering: nøytralisering av sjokk og renteregel vs. fast rente

- **number:** 5.4 · **estimatedMinutes:** 50 · **prerequisites:** econ1310-5-3 · **kapitteltype:** teori
- **description:** Regne ut nøyaktig hvor stor virkemiddelendring som nuller ut et sjokk — og forstå når full nøytralisering er mulig.
- **Eksamensbelegg:** Sjanger J i H2016, V2017, H2020, H2021 (+ V2020-utsatt, H2020-utsatt), 5–10 % — «korona-innovasjon som kan gjenbrukes» (nivå 3 punkt 16). Prioritet: **kjenne/kunne**.
- **Innholdskontrakt:** MÅ KUNNE REGNES (gitt modellen): nøytraliseringsbetingelser av typen
  $$\Delta i = \frac{\Delta z^I}{c_2 + b_2} \;(\text{for } \Delta Y = 0); \qquad \Delta G = -(c_2 + b_2)\,\Delta \pi^e \;(\text{ved bundet rente}); \qquad \Delta z^T = \frac{\Delta z^C}{c_1} \;(\text{for } \Delta C = 0)$$
  Toppoeng-forklaringen: full nøytralisering er *mulig* ved etterspørselssjokk fordi inflasjons- og produksjonsgapet trekker samme vei (ingen målkonflikt) — umulig å oppnå begge mål ved kostnadssjokk; og hvorfor sentralbanken i praksis likevel går **gradvis** frem (usikkerhet om økonomiens tilstand, troverdighet, finansiell stabilitet — bro til 5.6).
- **Oppgavesjangre:** J. Mønstereksempel: «Gjenåpningen løfter både konsum- og investeringslysten. Vis at sentralbanken kan heve renten akkurat nok til at verken BNP eller inflasjonen endres, og forklar hvorfor full nøytralisering er mulig i akkurat dette tilfellet.»
- **Typiske feil:** Dele på feil parameterkombinasjon (glemme at både $c_2$ og $b_2$ formidler renten); hevde at kostnadssjokk kan nøytraliseres fullt; regne uten å forklare *hvorfor* det går opp.
- **Quiz: 15 · Flashcards: 10**

#### econ1310-5-5 · Kap. 5.5 — Drill: grafisk IS-RR-PK-analyse av alle sjokk

- **number:** 5.5 · **estimatedMinutes:** 90 · **prerequisites:** econ1310-5-4 · **kapitteltype:** drill
- **description:** Sjangerdrill: hele sjokk-katalogen gjennom to-panels-diagrammet, med sensor-kommentert eksempelbesvarelse.
- **Eksamensbelegg:** Dekker sjangrene H + I samlet (19/22 sett; diagramdeloppgavene eksplisitt tyngst vektet H2024/H2025). Sjokk-katalogen som skal roteres: $\Delta z^C$ (5 sett), $\Delta z^I$ (5), $\Delta z^T$ (4), $\Delta G$ (4), $\Delta X/\Delta Q$ (5), $\Delta z^\pi$ (9), $\Delta \pi^e$ (2), $\Delta Y^n$ (1). Prioritet: **perfekt**.
- **Innholdskontrakt:** Løsningsoppskrift (algoritme): 1) klassifiser sjokket (etterspørsel → IS; kostnad/forventning/potensial → PK og/eller RR); 2) retning; 3) tegn skiftet i riktig panel, husk at RR bare skifter ved $z^\pi$-, $\pi^e$- eller $Y^n$-endringer; 4) marker A → B i begge paneler; 5) mekanismen i ord *inkludert sentralbankens respons langs RR*; 6) «demper, men nøytraliserer ikke»; 7) ved kostnadssjokk: målkonflikt-drøftingen; 8) sammenlign med fast rente hvis spurt. Gjennomregnet eksamenscase med sensor-margnotater. 8–15 oppgaver på eksamensnivå som dekker alle åtte sjokkvariablene i begge fortegn, inkludert kombinasjonsoppgaver (etterspørselssjokk + kostnadssjokk i samme sett, à la V2025).
- **Oppgavesjangre:** H, I, J. Mønstereksempel: «Et fall i eksportetterspørselen rammer samtidig som kronen svekkes og hever importprisene ($\Delta X < 0$ og $\Delta z^\pi > 0$). Analyser begge sjokkene i diagrammene, hver for seg og samlet, og drøft sentralbankens avveining.»
- **Typiske feil:** §5.3 (glemt RR-respons / feilaktig RR-skift) og §5.4 (selvmotsigende proporsjoner) i alle varianter; bytte om panelene; analysere kombinasjonssjokk som ett sjokk.
- **Quiz: 20 · Flashcards: 10**

#### econ1310-5-6 · Kap. 5.6 — Pengepolitikk i praksis: fleksibel inflasjonsstyring, gradvishet og likviditetsfellen

- **number:** 5.6 · **estimatedMinutes:** 50 · **prerequisites:** econ1310-5-2 · **kapitteltype:** teori
- **description:** Den verbale pengepolitikken: hvorfor sentralbanken veier flere hensyn, går gradvis frem — og hva den gjør når renten treffer null.
- **Eksamensbelegg:** Pengepolitikk-drøfting (rentesetting, gradvishet, fleksibel inflasjonsstyring) i 13/22 sett (59 %); likviditetsfelle som drøftingstema i V2017, H2019, V2021, H2021 (18 %, fraværende siden 2021 — men analysen: rentekutt-syklusen gjør comeback sannsynlig, V2025-casen kretser om varslede kutt); kortsvarsgjengangere: fleksibel inflasjonsstyring, reserverenten. Prioritet: **kunne** (likviditetsfelle: **kjenne**).
- **Innholdskontrakt:** Kvalitativt (aldri utledning): **fleksibel inflasjonsstyring** — vekt på både inflasjonsmålet og realøkonomien ($d_1$ og $d_2$ som formell speiling); **gradvis rentesetting** begrunnet i usikkerhet, troverdighet og finansiell stabilitet; rentens transmisjonskanaler inkl. valutakurskanalen (liten åpen økonomi — kobling 1.5); **likviditetsfellen/nullgrensen**: renten kan ikke settes (særlig) under null → kvantitative lettelser, forward guidance, negative renter; **finanspolitikken virker sterkere** ved nullgrensen fordi renteresponsen uteblir (RR flat — kobling til «fast rente»-analysen i 5.2); toppkandidat-empiri: var Norge egentlig i likviditetsfelle?
- **Oppgavesjangre:** L + A. Mønstereksempel: «Drøft hvorfor sentralbanker med inflasjonsmål likevel legger vekt på realøkonomien og endrer renten i små steg, og hva som gjenstår i verktøykassen når styringsrenten er nær null.»
- **Typiske feil:** Matematisk modell i drøftingen (§5.9); momentliste uten avveining (§5.10); blande kvantitative lettelser og ordinære rentekutt; glemme at finanspolitikk er *sterkere* (ikke bare «et alternativ») i fellen.
- **Quiz: 15 · Flashcards: 20**

---

### Del 6 — Drøfting og case

#### econ1310-6-1 · Kap. 6.1 — Drøftingssjangeren: metode og de fire gjengangertemaene

- **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** econ1310-3-1, econ1310-4-3, econ1310-5-6 · **kapitteltype:** teori
- **description:** Hvordan en A-drøfting bygges uten matematikk — og full momentbank for de fire temaene som roterer i siste oppgave.
- **Eksamensbelegg:** Sjanger L i alle 22 sett (20–30 %); momentliste-vurdering, «ingen fasit», figurer tillatt fra 2021. De fire gjengangertemaene med årsbelegg: (1) penge- vs. finanspolitikk (V2015, H2016, V2019, V2023, V2025-utsatt); (2) likviditetsfelle (V2017, H2019, V2021, H2021); (3) Ricardiansk ekvivalens (H2016-moment, H2021, H2023 — som «strekkoppgave» der sensor vurderer mildt); (4) lønnsdannelse/frontfag/likevektsledighet (H2018, H2020, H2021, V2022, H2023-utsatt, V2023-utsatt). Prioritet: **kunne**.
- **Innholdskontrakt:** Drøftingsalgoritmen: 1) identifiser spørsmålet presist (svar KUN på det); 2) definér nøkkelbegrepene; 3) argumenter FOR med fagbegreper; 4) argumenter MOT; 5) nyansér med forutsetninger/empiri; 6) konkludér bare hvis spurt. Momentbank per tema: (1) pengepolitikk er rask, uavhengig og rendyrket; finanspolitikk treg, politisert, har andre hovedoppgaver — men overlegen ved nullgrensen; (2) se 5.6; (3) **Ricardiansk ekvivalens**: fremadskuende husholdninger motregner fremtidige skatter slik at lånefinansierte skattekutt ikke virker — svikter pga. kredittbeskrankninger, kort horisont, generasjonsskifte (kvalitativt, aldri utledning); (4) se 4.3. Struktur > standpunkt: flere konklusjoner godtas alltid; argumentasjonsbredde og pensumforankring vurderes.
- **Oppgavesjangre:** L. Mønstereksempel: «Drøft hvorfor de fleste vestlige land har lagt hovedansvaret for konjunkturstabilisering til sentralbanken, og i hvilke situasjoner finanspolitikken likevel er det beste verktøyet.»
- **Typiske feil (analysen §5.9, §5.10, §5.8):** Matematisk modell i drøftingen (eksplisitt uønsket hvert år); ramse opp uten å veie for/mot; gi konklusjon der oppgaven ikke ber om det (bortkastet tid); utenomsnakk.
- **Quiz: 20 · Flashcards: 25**

#### econ1310-6-2 · Kap. 6.2 — Drill: rollecase — sentralbanksjef og finansministerens rådgiver

- **number:** 6.2 · **estimatedMinutes:** 75 · **prerequisites:** econ1310-6-1 · **kapitteltype:** drill
- **description:** Case-sjangeren som har eksplodert: strukturert hensynsdrøfting i rolle, uten matematikk — og uten anbefaling.
- **Eksamensbelegg:** Sjanger M i 9/22 sett (41 %) — men **4 av 4 sett i 2024–25**; 20–30 % av totalen. To arketyper: «sentralbanksjef før rentemøtet» (H2020 vaksinenyhet, H2022 gjeld vs. inflasjon, V2024 importert inflasjon vs. negativt gap, V2025 uventet sterk inflasjon før varslet kutt) og «rådgiver for finansministeren i oppdiktet land» (V2017/H2017 oljeland, H2024 eksportfall, H2025 gjeldsdrevet nedtur). Sensor krever at **alle relevante hensyn** drøftes for og imot; **konklusjon kreves aldri** — H2025 ber uttrykkelig om å IKKE gi anbefaling; åpenbart gale politikkvalg (rentekutt i en overopphetings-situasjon) regnes likevel som feil. Prioritet: **kunne**.
- **Innholdskontrakt:** Løsningsoppskrift: 1) les caset og lag situasjonsdiagnose i modellens språk (hvilke sjokk, hvilket gap); 2) list handlingsalternativene; 3) drøft hvert alternativ mot den faste hensynskatalogen: inflasjonsmål, produksjonsgap, valutakurs, finansiell stabilitet/gjeld, budsjettbalanse, automatiske stabilisatorer vs. aktive tiltak; 4) trekk inn liten-åpen-økonomi-perspektivet (rente ↔ valutakurs ↔ bytteforhold) — toppkandidat-markør; 5) hold deg til caseteksten (ikke dikt inn forutsetninger); 6) INGEN konklusjon med mindre det bes om. Gjennomregnet case med sensor-margnotater + 8–12 nyskrevne case i begge arketyper (alle med oppdiktede land/scenarioer: energiprissjokk, boligprisfall med høy husholdningsgjeld, eksportboom, forsvarsopprustning, importert inflasjon i nedgang).
- **Oppgavesjangre:** M. Mønstereksempel: «Landet du er rådgiver for har hatt en kredittdrevet oppgang som nå snur: eiendomsprisene faller, ledigheten stiger og inflasjonen er fortsatt over målet. Gjør rede for finansministerens handlingsalternativer med fordeler og ulemper, og for sentralbankens avveininger — uten å gi en konkret anbefaling.»
- **Typiske feil (analysen §5.8, §5.10):** Utenomsnakk og innditkede forutsetninger (trekk i V2024/V2025); gi anbefaling der oppgaven forbyr det; momentliste uten drøfting; glemme gjelds-/finansiell stabilitet-hensynet; foreslå åpenbart feil politikk.
- **Quiz: 15 · Flashcards: 15**

#### econ1310-6-3 · Kap. 6.3 — Fra nyhetsbilde til modell: aktualitetstrening

- **number:** 6.3 · **estimatedMinutes:** 45 · **prerequisites:** econ1310-6-2 · **kapitteltype:** teori
- **description:** Trening i å oversette dagsaktuelle hendelser til modellens sjokkvariabler — casene er alltid dagsaktuelle.
- **Eksamensbelegg:** Analysen (nivå 3 punkt 17): casene bygger alltid på det aktuelle konjunkturbildet (pandemi/gjenåpning 2020–21, strømpriser/finanstalen H2021, Ukraina/energi 2022, dyrtid 2023, forsvarsopprustning 2025) — boka skal trene studenten i å oversette nyhetsbildet til modellens sjokkvariabler. Norsk institusjonell kontekst (frontfag/TBU, SPU, Norges Banks praksis) er pluss-momenter. Prioritet: **kjenne**.
- **Innholdskontrakt:** Oversettelsestabellen som SKAL med: konsumentpessimisme/-optimisme → $\Delta z^C$; investeringsfall/boligbrems → $\Delta z^I$; skattepakke → $\Delta z^T$; offentlig satsing (forsvar, samferdsel) → $\Delta G$; eksportsvikt hos handelspartnere → $\Delta X$; energipris/kronekurs/frakt → $\Delta z^\pi$; lønnsoppgjør/forventninger → $\Delta \pi^e$ eller $\Delta z^W$; arbeidsinnvandring/produktivitet → $\Delta Y^n$. Deretter: hvilke(t) panel/kurve skiftet treffer, og hvilken sjangeranalyse (E/H/I/M) som følger. Norges Banks faktiske reaksjonsmønster og handlingsregelens rolle som bakteppe (kobling 3.2, 5.6).
- **Oppgavesjangre:** Forberedelse til M/L. Mønstereksempel: «En internasjonal handelskonflikt gir både lavere etterspørsel etter norsk eksport og dyrere importvarer. Oversett hendelsen til modellens sjokkvariabler og angi hvilke kurver som skifter.»
- **Typiske feil:** Klassifisere kostnadssjokk som etterspørselssjokk (og omvendt); overse at én hendelse kan være to sjokk; blande $z^\pi$ (prispåslag) og $\pi^e$ (forventninger).
- **Quiz: 10 · Flashcards: 10**

---

### Del 7 — Eksamenstrening

#### econ1310-7-1 · Kap. 7.1 — Kortsvar-drill: gjengangerbegrepene

- **number:** 7.1 · **estimatedMinutes:** 75 · **prerequisites:** Del 1–6 · **kapitteltype:** drill
- **description:** Presisjonstrening på hele kortsvarsrepertoaret: 2–3 setninger per begrep, aldri mer.
- **Eksamensbelegg:** Sjanger A: alle sett 2015–2019 og 2022–2025, 20–30 % av totalen siden 2022, 5–8 delspørsmål. Fra 2024: «et lite avsnitt», 1–3 setninger per delspørsmål — lengre svar gir ikke mer. Gjengangerlisten (forekomster): ledighetstypene (5+), kronekurs → inflasjon/eksport (5), handlingsregelen (5), måling av offentlig produksjon i BNP (4), pengenes tre funksjoner (3), obligasjon vs. aksje (3), realvalutakurs (3), netto finansinvesteringer = 0 (2), BNP/BNI/disponibel inntekt (2), potensielt BNP (2), AKU-kriteriene (2), automatiske stabilisatorer (2), oljekorrigert vs. strukturelt oljekorrigert underskudd (2), marginal konsumtilbøyelighet, marginalkostnad, trilemmaet, reserverenten, fleksibel inflasjonsstyring, likviditetsfelle, likevektsledighet, determinert modell, endogen/eksogen, åpen/lukket. Prioritet: **kunne** (sikre poeng).
- **Innholdskontrakt:** Malen «definisjon + begrunnelse/eksempel på 2–3 setninger» demonstreres; deretter drillbank som dekker ALLE begrepene over (hvert med fasitsvar i eksakt kortsvar-format og henvisning til teorikapitlet). Begreper hentes fra kap. 1.1–1.5, 2.1, 3.1–3.2, 4.1–4.2, 5.6.
- **Oppgavesjangre:** A. Mønstereksempel: «Gjør kort rede for hva realvalutakursen måler, og hvorfor den kan endres selv om den nominelle kursen ligger fast.»
- **Typiske feil (analysen §5.8):** Utflytende svar (null ekstra uttelling, stjeler tid fra 50 %-oppgaven); definisjon uten den etterspurte begrunnelsen; svare på nabobegrepet.
- **Quiz: 25 · Flashcards: 45**

#### econ1310-7-2 · Kap. 7.2 — Øvingseksamen 1: klassisk mal med etterspørselssjokk

- **number:** 7.2 · **estimatedMinutes:** 240 · **prerequisites:** econ1310-7-1 · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett etter post-2023-malen med negativt etterspørselssjokk i kjernen.
- **Eksamensbelegg/miks:** Speiler et typisk V2023/H2023-sett: **kortsvar 20 % (5 delspørsmål) + modelloppgave 60 % (6 deloppgaver: telleregel → parametertolkning → $\Delta z^I < 0$ på tilvekstform → følgestørrelser $\Delta T$/$\Delta B$ → IS-RR-PK-diagram → G vs. skatt) + verbal teoridrøfting 20 % (penge- vs. finanspolitikk)**. Alle oppgaver nyskrevne. Løsningsforslag som A-besvarelse i `collapsible` per oppgave, med `tip`-notat om delpoeng/vekting og tidsbudsjett (48 min / 144 min / 48 min).
- **Quiz: 5 · Flashcards: 0**

#### econ1310-7-3 · Kap. 7.3 — Øvingseksamen 2: kostnadssjokk og arbeidsmarked

- **number:** 7.3 · **estimatedMinutes:** 240 · **prerequisites:** econ1310-7-2 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter V2022/H2020-mønsteret der kostnadssjokk og lønnsdannelse bærer tyngden.
- **Eksamensbelegg/miks:** Speiler 4-oppgave-varianten (à la H2022: 20/20/40/20): **kortsvar 20 % + BNP-klassifisering 10 % + kort arbeidsmarkedsoppgave (lønns-/priskurve, $z^W$-skift) 20 % + modelloppgave 40 % (åpen økonomi; $\Delta z^\pi > 0$ med målkonflikt-drøfting, inkl. sammenligning med fast rente) + frontfags-drøfting 10 %**. Justert til 5 komponenter for å dekke sjangrene B og N som Øvingseksamen 1 ikke traff. Løsningsforslag som A-besvarelse med vektings-tips.
- **Quiz: 5 · Flashcards: 0**

#### econ1310-7-4 · Kap. 7.4 — Øvingseksamen 3: post-2024-mal med rollecase

- **number:** 7.4 · **estimatedMinutes:** 240 · **prerequisites:** econ1310-7-3 · **kapitteltype:** øvingseksamen
- **description:** Komplett sett etter den nyeste malen med differensiert deloppgavevekting og rådgiver-case.
- **Eksamensbelegg/miks:** Speiler H2024/H2025: **kortsvar 25 % + modelloppgave 50 % med markering «særlig vekt på deloppgave b, c og e» (regne- og diagramdeloppgavene): telleregel → $\Delta G > 0$ (forsvarssatsing i oppdiktet land) på tilvekstform → følgestørrelser → to-panels diagram → kostnadssjokk-hale → dimensjoneringsspørsmål + rollecase 25 % («rådgiver for finansministeren i oppdiktet land i gjeldsdrevet nedtur», eksplisitt uten anbefaling)**. Løsningsforslag som A-besvarelse; case-løsningen viser hensynskatalogen fra 6.2 i praksis.
- **Quiz: 5 · Flashcards: 0**

---

### Summeringskontroll (quiz/flashcards)

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 10 | 10 |
| 1 | 1.1–1.5 | 25+20+20+15+20 = **100** | 25+15+25+20+25 = **110** |
| 2 | 2.1–2.5 | 20+30+25+25+20 = **120** | 20+30+25+20+10 = **105** |
| 3 | 3.1–3.2 | 20+15 = **35** | 20+20 = **40** |
| 4 | 4.1–4.3 | 20+25+10 = **55** | 20+20+15 = **55** |
| 5 | 5.1–5.6 | 25+25+20+15+20+15 = **120** | 20+20+15+10+10+20 = **95** |
| 6 | 6.1–6.3 | 20+15+10 = **45** | 25+15+10 = **50** |
| 7 | 7.1–7.4 | 25+5+5+5 = **40** | 45+0+0+0 = **45** |
| **Sum** | **29 kap.** | **525 ≥ 500 ✓** | **510 ≥ 500 ✓** |

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler frekvens: Del 2 + Del 5 (nivå 1) bærer 240 av 525 quiz.

---

## 4. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel, 24 totalt)

Hver prøve er nyskrevne oppgaver i eksamens sjangre, med løsningsforslag og
poengfordeling. Omfang angitt i minutter.

**Del 1 — Kortsvarfundamentet**
1. Prøve 1.A (30 min): Nasjonalregnskap — 6 kortsvar + 3 BNP-klassifiseringer (kap. 1.1–1.2).
2. Prøve 1.B (30 min): Penger og finanssystem — 8 kortsvar (kap. 1.3).
3. Prøve 1.C (30 min): Arbeidsmarked i tall + valutakurs — 8 kortsvar inkl. realkursberegning (kap. 1.4–1.5).
4. Prøve 1.D (45 min): Blandet kortsvarssett i eksamensformat, 8 delspørsmål på tvers av hele delen + full 5-transaksjoners BNP-klassifisering (sjanger A + B).

**Del 2 — Keynes-modellen**
1. Prøve 2.A (40 min): Modellanatomi — telleregel, klassifisering, parametertolkning (sjanger C + D).
2. Prøve 2.B (50 min): Multiplikator på tilvekstform, lukket økonomi — to sjokk ($\Delta z^C$, $\Delta G$) med full to-lags mekanisme (sjanger E).
3. Prøve 2.C (50 min): Følgestørrelser — $\Delta C$, $\Delta T$, $\Delta B$, $\Delta S$ etter skatteendring, inkl. fortegnsubestemt $\Delta B$-drøfting (sjanger F).
4. Prøve 2.D (60 min): Modellvarianter — åpen vs. lukket, G-regel, $t=0$-sammenligning; full deloppgave-kjede som i eksamens oppgave 2 (sjanger G + E, eksamensnivå).

**Del 3 — Finanspolitikk**
1. Prøve 3.A (30 min): G vs. skatt + balansert budsjett, uten og med regning (sjanger K).
2. Prøve 3.B (30 min): Automatiske stabilisatorer — vise dempingen på tilvekstform + verbal kontrast til diskresjonær politikk.
3. Prøve 3.C (25 min): Handlingsregelen og budsjettbegrepene — 6 kortsvar (sjanger A).
4. Prøve 3.D (45 min): Integrert finanspolitikk-oppgave: skattepakke i nedgangskonjunktur gjennom modellen + kort drøfting av virkemiddelvalg (sjanger E + K + L-moment).

**Del 4 — Arbeidsmarked og Phillips-kurven**
1. Prøve 4.A (40 min): Lønns-/priskurvemodellen — oppsett, diagram, $z^W$-skift (sjanger N).
2. Prøve 4.B (30 min): Phillips-kurvens kausalkjede + ledd-tolkning (sjanger D).
3. Prøve 4.C (30 min): Frontfag og koordinering — drøfting med modellforankring (sjanger L).
4. Prøve 4.D (50 min): Full arbeidsmarkedsoppgave på eksamensnivå: varig styrket forhandlingsmakt → $u^n$, reallønn, $Y^n$ → konsekvens for PK og pengepolitikken (sjanger N + kobling, som H2020/H2021).

**Del 5 — Pengepolitikk og IS-RR-PK**
1. Prøve 5.A (35 min): Renteregel og RR-utledning + $d_1\beta + d_2$-dekomponering (sjanger D).
2. Prøve 5.B (50 min): Etterspørselssjokk grafisk — to sjokk, begge fortegn, inkl. fast rente-sammenligning (sjanger H).
3. Prøve 5.C (50 min): Kostnadssjokk og målkonflikt — $\Delta z^\pi$ i begge fortegn med proporsjonskontroll i figurene (sjanger I).
4. Prøve 5.D (60 min): Kombinert modelloppgave på eksamensnivå: $\Delta z^I < 0$ → tilvekstform → diagram → dimensjonering av rentekutt → gradvishet-drøfting (sjanger E + H + J + L-moment).

**Del 6 — Drøfting og case**
1. Prøve 6.A (35 min): Teoridrøfting — penge- vs. finanspolitikk (sjanger L).
2. Prøve 6.B (35 min): Teoridrøfting — Ricardiansk ekvivalens eller likviditetsfelle (sjanger L).
3. Prøve 6.C (45 min): Sentralbanksjef-case — importert inflasjon i negativt gap (sjanger M).
4. Prøve 6.D (45 min): Rådgiver-case — oppdiktet land, eksportsjokk med gjeldsbekymring; uten anbefaling (sjanger M).

### Øvingseksamener (3 komplette sett — se kap. 7.2–7.4)

| Sett | Mal den speiler | Miks |
|---|---|---|
| Øvingseksamen 1 (kap. 7.2) | Typisk post-2023 (V2023/H2023) | Kortsvar 20 % + modelloppgave 60 % (etterspørselssjokk $\Delta z^I<0$, full kjede C→D→E→F→H→K) + teoridrøfting 20 % |
| Øvingseksamen 2 (kap. 7.3) | 4-oppgave-variant (H2022/H2020) | Kortsvar 20 % + BNP-klassifisering 10 % + arbeidsmarkedsoppgave 20 % + åpen modell med kostnadssjokk 40 % + frontfagsdrøfting 10 % |
| Øvingseksamen 3 (kap. 7.4) | Nyeste mal (H2024/H2025) | Kortsvar 25 % + modelloppgave 50 % med «særlig vekt på b, c, e» ($\Delta G>0$ + kostnadssjokk-hale + dimensjonering) + rollecase 25 % uten anbefaling |

Til sammen dekker de tre settene samtlige 14 sjangre (A–N) minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — formen, den faste tredelingen, vektingshistorikken og prognosen (fra kap. 0.1).
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer: perfekt (Del 2 + Del 5 + PK i 4.2 + sjokk-skillet i 5.3), kunne (Del 1, 3, 4, 6, kortsvarsrepertoaret), kjenne (likviditetsfelle, Ricardiansk ekvivalens, valutakurs-dybde, finanssystem-detaljer, dimensjonering, norsk institusjonell kontekst).
3. **Sjangerguiden** — de 14 oppgavetypene A–N med løsningsoppskriftene fra drillkapitlene (2.5, 5.5, 6.2, 7.1) i kortform.
4. **Sensorreglene** — de fem metareglene + karakterskille-listen (fortegnsubestemthet, dekomponering, kobling, liten åpen økonomi) fra kap. 0.1.
5. **Feilkatalogen** — de 11 typiske feilene samlet, hver med henvisning til kapitlet som forebygger den.
6. **Formelark i Holden-notasjon** — alle ligningene fra innholdskontraktene i 2.1–2.4, 4.1–4.2, 5.1–5.4 på én side, med markering utlede aktivt vs. kun bruke.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): Del 0 → 2 → 5 (perfekt-delene først etter fundamentet 1), deretter 3–4–6, prøver underveis, øvingseksamenene de tre siste ukene under tidspress (240 min, vektstyrt tidsbudsjett).

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `econ1310` med alle 29 kapitler (id/number/title/description/estimatedMinutes/topics/prerequisites) etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`.
2. **Del 0** (kap. 0.1) — etablerer sjangernavnene A–N og frekvenstallene som resten refererer til.
3. **Høyfrekvente deler i avhengighetsrekkefølge**: Del 2 (krever bare 1.1) → Del 4 → Del 5. Skriv kap. 1.1 før Del 2; resten av Del 1 kan skrives når som helst etterpå.
4. Del 3 → Del 6 → resten av Del 1 → Del 7 (øvingseksamenene til slutt — de gjenbruker alt).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene ferdigstilles; prøvene (§4) legges i respektive delers siste kapittel eller som egne exercise-seksjoner etter plattformens mønster.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (husk å escape `"` i norske sitattegn); `npm run build` grønn.
- [ ] **LaTeX**: alle ligninger i `$...$`/`$$...$$`; ingen unicode-brøker; sub-/superskript konsistent ($z^C$, $c_1$, $\pi^e$, $Y^n$, $u^n$, $\pi^*$).
- [ ] **Notasjonskonsistens**: kjør tekstsøk over alle econ1310-filer — forbudte termer: «LM-kurve», «AD-AS», «Solow» (unntatt Del 0-avsnittet som eksplisitt avgrenser); påkrevd notasjon: $z^C, z^I, z^T, z^i, z^\pi, z^W, c_1, c_2, b_1, b_2, t, a, \beta, d_1, d_2, \mu$ — ingen alternative symboler (ikke $MPC$, ikke $\alpha$ for import, ikke Taylor-regel-notasjon).
- [ ] **Tilvekstform overalt**: komparativ statikk alltid som $\Delta$-uttrykk med eksplisitt fortegnsfastsettelse og to-lags mekanisme.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå), 6–12 øvinger med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har løsningsoppskrift + sensor-kommentert case + 8–15 oppgaver.
- [ ] **Quiz-sum ≥ 525 og flashcard-sum ≥ 510** per kvotetabellen (kontrollsummér mot §3-tabellen).
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener som sammen dekker sjangrene A–N.
- [ ] **Opphavsrett**: ALLE oppgaver nyskrevne — egne tall, egne land-/personnavn, egne scenarioer; ingen formuleringer fra reelle sett eller sensorveiledninger (skjelettets mønstereksempler er selv omskrivninger og kan varieres videre, ikke kopieres ordrett inn som oppgaver); pensumlitteratur refereres, aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 + innhold), jf. lærdommen om `getChapterMeta`.
