/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Budsjettering
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_2_1: TextbookChapter = {
  id: 'okonomi-drift-2-1',
  courseId: 'okonomi-drift',
  chapterNumber: '2.1',
  title: 'Budsjettering',
  description: 'Budsjettprosessen, resultatbudsjett og likviditetsbudsjett som verktoy for planlegging og styring.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'od-2-1-intro',
      type: 'text',
      content: `## Budsjettering som styringsverktoy

Et budsjett er en tallfestet plan for en kommende periode. For bedrifter er budsjettet et av de viktigste verktoyene for a styre virksomheten mot de malene som er satt. Uten et budsjett driver bedriften i blinde, og det blir vanskelig a vite om man er pa rett kurs.

Budsjettering handler om a gjore antagelser om fremtiden basert pa kunnskap om fortiden. Det er ikke en perfekt vitenskap, men en systematisk metode for a planlegge inntekter, kostnader og pengestrommer. Et godt budsjett gir grunnlag for beslutninger, prioriteringer og kontroll.

**Hvorfor budsjetterer vi?**

- **Planlegging:** Budsjettet tvinger ledelsen til a tenke fremover og sette konkrete mal.
- **Koordinering:** Ulike avdelinger samordner sine planer slik at helheten henger sammen.
- **Motivasjon:** Tydelige mal gir medarbeiderne noe a strekke seg mot.
- **Kontroll:** Ved a sammenligne budsjett med faktiske tall kan vi oppdage avvik tidlig.
- **Kommunikasjon:** Budsjettet formidler ledelsens prioriteringer til hele organisasjonen.`,
    },
    {
      id: 'od-2-1-def-budsjettprosess',
      type: 'definition',
      title: 'Budsjettprosessen',
      content: `**Budsjettprosessen** er den systematiske fremgangsmaten for a utarbeide, vedta og folge opp budsjetter i en virksomhet.

Prosessen folger vanligvis disse stegene:

1. **Forberedelse:** Samle inn historiske data, analysere trender og fastsette forutsetninger.
2. **Utarbeidelse:** Hver avdeling lager sine delbudsjetter basert pa felles forutsetninger.
3. **Koordinering:** Delbudsjettene samles, og motstridende behov avstemmes.
4. **Godkjenning:** Styret eller ledelsen vedtar det endelige budsjettet.
5. **Oppfolging:** Regelmessig sammenligning av budsjett mot faktiske tall.
6. **Revisjon:** Justering av budsjettet dersom forutsetningene endrer seg vesentlig.

Det skilles mellom **top-down** (ledelsen fastsetter rammene) og **bottom-up** (avdelingene melder inn sine behov) tilnaerminger. I praksis brukes ofte en kombinasjon av begge.`,
    },
    {
      id: 'od-2-1-text-resultatbudsjett',
      type: 'text',
      content: `## Resultatbudsjett

Resultatbudsjettet viser forventede inntekter og kostnader for en gitt periode, typisk et ar. Det er bygd opp pa samme mate som et resultatregnskap, men med budsjetterte tall i stedet for faktiske.

**Oppbygging av et resultatbudsjett:**

| Post | Budsjett |
|------|----------|
| Salgsinntekter | + |
| Varekostnad | - |
| **Bruttofortjeneste** | **=** |
| Lonnskostnader | - |
| Andre driftskostnader | - |
| Avskrivninger | - |
| **Driftsresultat** | **=** |
| Finansinntekter | + |
| Finanskostnader | - |
| **Resultat for skatt** | **=** |

Resultatbudsjettet viser om bedriften forventer a ga med overskudd eller underskudd. Det gir grunnlag for a vurdere om virksomheten er lonnsom nok, og om det er behov for a oke inntektene eller redusere kostnadene.`,
    },
    {
      id: 'od-2-1-def-likviditetsbudsjett',
      type: 'definition',
      title: 'Likviditetsbudsjett',
      content: `**Likviditetsbudsjettet** viser forventede inn- og utbetalinger for hver maned, og beregner den lopende kassebeholdningen.

Forskjellen pa resultatbudsjettet og likviditetsbudsjettet er at likviditetsbudsjettet fokuserer pa **nar pengene faktisk kommer inn og gar ut**, ikke nar inntekter og kostnader oppstar regnskapsmessig.

**Viktig a huske:**
- En faktura pa 100 000 kr sendt i januar blir kanskje ikke betalt for i mars.
- Avskrivninger er en kostnad i resultatbudsjettet, men medforer ingen utbetaling.
- Investeringer medforer utbetalinger, men er ikke en kostnad i resultatbudsjettet (bare avskrivningene).
- Lan gir innbetaling, men er ikke en inntekt. Avdrag er utbetaling, men ikke en kostnad.

Et godt likviditetsbudsjett avslorer om bedriften risikerer a ga tom for penger, selv om resultatbudsjettet viser overskudd.`,
    },
    {
      id: 'od-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Resultatbudsjett for en kafe',
      problem: 'Kafeen "Bonne" budsjetterer for neste ar. Salgsinntekter er anslatt til 2 400 000 kr. Varekostnad utgjor 35 % av salgsinntektene. Lonnskostnader er 900 000 kr, husleie 240 000 kr, andre driftskostnader 180 000 kr, og avskrivninger 60 000 kr. Sett opp et resultatbudsjett og beregn driftsresultatet.',
      solution: `**Losning:**

| Post | Budsjett (kr) |
|------|---------------|
| Salgsinntekter | 2 400 000 |
| Varekostnad (35 %) | -840 000 |
| **Bruttofortjeneste** | **1 560 000** |
| Lonnskostnader | -900 000 |
| Husleie | -240 000 |
| Andre driftskostnader | -180 000 |
| Avskrivninger | -60 000 |
| **Driftsresultat** | **180 000** |

Varekostnad: 2 400 000 x 0,35 = 840 000 kr
Bruttofortjeneste: 2 400 000 - 840 000 = 1 560 000 kr
Sum driftskostnader: 900 000 + 240 000 + 180 000 + 60 000 = 1 380 000 kr
Driftsresultat: 1 560 000 - 1 380 000 = 180 000 kr

Kafeen budsjetterer med et positivt driftsresultat pa 180 000 kr, noe som tilsvarer en driftsmargin pa 7,5 %.`,
    },
    {
      id: 'od-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Likviditetsbudsjett',
      problem: 'Bedriften "Nordlys AS" har folgende budsjetterte tall for januar-mars: Salg pa kreditt januar 300 000 kr, februar 350 000 kr, mars 400 000 kr. Kundene betaler 30 dager etter fakturering. Varekjop betales kontant og utgjor 200 000 kr per maned. Lonn er 150 000 kr per maned. Kassebeholdning 1. januar er 80 000 kr. Sett opp likviditetsbudsjettet.',
      solution: `**Losning:**

| Post | Januar | Februar | Mars |
|------|--------|---------|------|
| Innbetaling fra kunder | 0 | 300 000 | 350 000 |
| Sum innbetalinger | 0 | 300 000 | 350 000 |
| Varekjop | -200 000 | -200 000 | -200 000 |
| Lonn | -150 000 | -150 000 | -150 000 |
| Sum utbetalinger | -350 000 | -350 000 | -350 000 |
| Netto kontantstrom | -350 000 | -50 000 | 0 |
| Kassebeholdning start | 80 000 | -270 000 | -320 000 |
| **Kassebeholdning slutt** | **-270 000** | **-320 000** | **-320 000** |

Vi ser at bedriften far et alvorlig likviditetsproblem allerede i januar. Selv om salget er hoyere enn kostnadene, betaler kundene ikke for etter 30 dager. Bedriften trenger en kassekreditt eller annen finansiering for a dekke de forste manedene.`,
    },
    {
      id: 'od-2-1-text-budsjetttyper',
      type: 'text',
      content: `## Ulike budsjetttyper

I tillegg til resultatbudsjettet og likviditetsbudsjettet finnes det flere andre typer budsjetter som bedrifter bruker:

- **Salgsbudsjett:** Forventet salgsvolum og pris per produkt eller tjeneste. Er utgangspunktet for alle andre budsjetter.
- **Innkjopsbudsjett:** Beregner behov for varer og ravaarer basert pa salgsbudsjettet og onsket lagerbeholdning.
- **Personalbudsjett:** Lonnskostnader inkludert sosiale kostnader, feriepenger og arbeidsgiveravgift.
- **Investeringsbudsjett:** Planlagte investeringer i utstyr, maskiner, eiendom og andre anleggsmidler.
- **Balansebudsjett:** Forventet balanse ved periodens slutt, viser eiendeler, gjeld og egenkapital.

Alle disse delbudsjettene henger sammen og danner til slutt et komplett bilde av bedriftens forventede okonomiske situasjon. Det er derfor viktig at forutsetningene er konsistente pa tvers av alle budsjettene.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 'od-2-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'od-2-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom et resultatbudsjett og et likviditetsbudsjett?',
        options: [
          { id: 'a', text: 'Resultatbudsjettet viser kun inntekter, mens likviditetsbudsjettet viser kun kostnader', isCorrect: false },
          { id: 'b', text: 'Resultatbudsjettet viser lonnsom het, mens likviditetsbudsjettet viser pengestrom og betalingsevne', isCorrect: true },
          { id: 'c', text: 'Likviditetsbudsjettet lages for et ar, mens resultatbudsjettet lages for en maned', isCorrect: false },
          { id: 'd', text: 'Resultatbudsjettet brukes av styret, mens likviditetsbudsjettet brukes av banken', isCorrect: false },
        ],
        solution: 'Resultatbudsjettet viser forventede inntekter og kostnader og gir et bilde av lonnsomheten. Likviditetsbudsjettet viser nar pengene faktisk kommer inn og gar ut, og avslorer om bedriften har nok kontanter til a betale sine forpliktelser til rett tid.',
      },
    },
    {
      id: 'od-2-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'od-2-1-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvorfor kan en bedrift med overskudd i resultatbudsjettet likevel fa likviditetsproblemer?',
        options: [
          { id: 'a', text: 'Fordi resultatbudsjettet alltid er feil', isCorrect: false },
          { id: 'b', text: 'Fordi kundene kan betale sent, mens bedriften ma betale sine regninger for', isCorrect: true },
          { id: 'c', text: 'Fordi likviditetsbudsjettet ikke tar hensyn til kostnader', isCorrect: false },
          { id: 'd', text: 'Fordi overskudd alltid betyr at bedriften har mye penger pa konto', isCorrect: false },
        ],
        solution: 'En bedrift kan ha hoy omsetning og god fortjeneste pa papiret, men likevel mangle kontanter. Dette skjer nar innbetalingene fra kunder kommer senere enn utbetalingene til leverandorer, ansatte og andre. Tidsforskjellen mellom nar inntekter oppstar og nar pengene faktisk mottas er hovedarsaken til dette problemet.',
      },
    },
    {
      id: 'od-2-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'od-2-1-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar de seks stegene i budsjettprosessen og beskriv hvorfor hvert steg er viktig for a fa et godt budsjett.',
        hints: [
          'Tenk pa forberedelse, utarbeidelse, koordinering, godkjenning, oppfolging og revisjon.',
          'Vurder hva som kan ga galt dersom et av stegene utelates.',
        ],
        solution: 'De seks stegene er: 1) Forberedelse (historiske data og forutsetninger danner grunnlaget), 2) Utarbeidelse (avdelingene lager delbudsjetter), 3) Koordinering (delbudsjettene samkjores slik at de henger sammen), 4) Godkjenning (ledelsen vedtar budsjettet), 5) Oppfolging (sammenligning med faktiske tall gir kontroll), 6) Revisjon (justering ved endrede forutsetninger). Hvert steg er viktig: uten forberedelse mangler faktagrunnlaget, uten koordinering kan delbudsjettene motsi hverandre, og uten oppfolging mister budsjettet sin verdi som styringsverktoy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'od-2-1-oppg-4',
        number: '4',
        type: 'classic',
        task: 'En nettbutikk har folgende budsjetterte tall for neste ar: Salgsinntekter 1 800 000 kr, varekostnad 40 % av salget, lonnskostnader 500 000 kr, markedsforing 120 000 kr, husleie for lager 96 000 kr, IT-kostnader 84 000 kr og avskrivninger 48 000 kr. Sett opp et resultatbudsjett og beregn driftsresultatet og driftsmarginen.',
        hints: [
          'Beregn varekostnad forst: 1 800 000 x 0,40.',
          'Bruttofortjeneste = Salgsinntekter - Varekostnad.',
          'Driftsmargin = Driftsresultat / Salgsinntekter x 100 %.',
        ],
        solution: 'Varekostnad: 1 800 000 x 0,40 = 720 000 kr. Bruttofortjeneste: 1 800 000 - 720 000 = 1 080 000 kr. Sum driftskostnader: 500 000 + 120 000 + 96 000 + 84 000 + 48 000 = 848 000 kr. Driftsresultat: 1 080 000 - 848 000 = 232 000 kr. Driftsmargin: 232 000 / 1 800 000 x 100 = 12,9 %. Nettbutikken budsjetterer med et driftsresultat pa 232 000 kr og en driftsmargin pa 12,9 %, noe som er et rimelig resultat for en nettbutikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-1-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'od-2-1-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Sett opp et likviditetsbudsjett for "Sjobrisen AS" for januar til mars. Opplysninger: Kontantsalg per maned: 100 000 kr. Kredittsalg per maned: 200 000 kr (betales etter 60 dager). Varekjop: 120 000 kr per maned (betales etter 30 dager). Lonn: 80 000 kr per maned. Husleie: 15 000 kr per maned. Kassebeholdning 1. januar: 50 000 kr. Det var kredittsalg i november og desember pa henholdsvis 180 000 kr og 190 000 kr.',
        hints: [
          'Kredittsalg betales etter 60 dager: November-salget betales i januar, desember-salget i februar.',
          'Varekjop betales etter 30 dager: Januar-kjop betales i februar.',
          'Kontantsalg er innbetaling i samme maned.',
        ],
        solution: 'Januar: Innbetalinger = 100 000 (kontant) + 180 000 (nov-kreditt) = 280 000. Utbetalinger = 80 000 (lonn) + 15 000 (husleie) = 95 000 (ingen varekjop forfaller enda). Netto: +185 000. Kasse: 50 000 + 185 000 = 235 000. Februar: Innbetalinger = 100 000 + 190 000 (des-kreditt) = 290 000. Utbetalinger = 120 000 (jan-varekjop) + 80 000 + 15 000 = 215 000. Netto: +75 000. Kasse: 235 000 + 75 000 = 310 000. Mars: Innbetalinger = 100 000 + 200 000 (jan-kreditt) = 300 000. Utbetalinger = 120 000 (feb-varekjop) + 80 000 + 15 000 = 215 000. Netto: +85 000. Kasse: 310 000 + 85 000 = 395 000.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-1-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'od-2-1-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper med top-down og bottom-up tilnaerminger til budsjettering. Hvilken tilnaerming mener du passer best for en mellomstor bedrift med 50 ansatte, og hvorfor?',
        hints: [
          'Tenk pa hvem som har best innsikt i hva som er realistisk pa avdelingsniva.',
          'Vurder fordelen av at ansatte far eierskap til budsjettet.',
          'Husk at top-down kan vaere raskere, men kan mangle forankring.',
        ],
        solution: 'Top-down: Fordeler er raskere prosess, bedre koordinering og strategisk forankring. Ulemper er manglende eierskap, kan vaere urealistisk. Bottom-up: Fordeler er mer realistiske tall, hoyere motivasjon og lokal kunnskap. Ulemper er tidkrevende, risiko for budsjettslakk (avdelinger budsjetterer for forsiktig). For en mellomstor bedrift med 50 ansatte passer en kombinasjon best: Ledelsen setter overordnede rammer og mal (top-down), mens avdelingene utarbeider detaljerte delbudsjetter innenfor disse rammene (bottom-up). Dette gir bade strategisk retning og lokal forankring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Avviksanalyse
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_2_2: TextbookChapter = {
  id: 'okonomi-drift-2-2',
  courseId: 'okonomi-drift',
  chapterNumber: '2.2',
  title: 'Avviksanalyse',
  description: 'Sammenligning av budsjett og regnskap, analyse av pris- og mengdeavvik for bedre styring.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'od-2-2-intro',
      type: 'text',
      content: `## Fra budsjett til oppfolging

Et budsjett har liten verdi dersom det legges i en skuff og ikke folges opp. Den viktigste funksjonen til budsjettet er a gi grunnlag for kontroll og laering. Avviksanalyse er metoden vi bruker for a sammenligne budsjetterte tall med faktiske tall fra regnskapet, identifisere forskjellene og forsta arsakene bak dem.

**Hva er et avvik?**

Et avvik er forskjellen mellom budsjettert og faktisk verdi. Avvik kan vaere:

- **Positivt avvik:** Faktisk resultat er bedre enn budsjettert (hoyere inntekter eller lavere kostnader).
- **Negativt avvik:** Faktisk resultat er darligere enn budsjettert (lavere inntekter eller hoyere kostnader).

Det er viktig a analysere bade positive og negative avvik. Et positivt avvik kan bety at budsjettet var for forsiktig, mens et negativt avvik kan avsore problemer som ma loses.`,
    },
    {
      id: 'od-2-2-def-avviksanalyse',
      type: 'definition',
      title: 'Avviksanalyse',
      content: `**Avviksanalyse** er en systematisk sammenligning av budsjetterte og faktiske tall for a identifisere, kvantifisere og forklare forskjellene.

**Grunnleggende formel:**

Avvik = Faktisk verdi - Budsjettert verdi

- Positivt avvik pa inntekter: Faktisk inntekt > Budsjettert inntekt (gunstig)
- Negativt avvik pa inntekter: Faktisk inntekt < Budsjettert inntekt (ugunstig)
- Positivt avvik pa kostnader: Faktisk kostnad < Budsjettert kostnad (gunstig)
- Negativt avvik pa kostnader: Faktisk kostnad > Budsjettert kostnad (ugunstig)

Merk: For kostnader er det vanlig a snu fortegnet slik at positivt avvik alltid er gunstig og negativt alltid er ugunstig.`,
    },
    {
      id: 'od-2-2-text-prisavvik-mengdeavvik',
      type: 'text',
      content: `## Pris- og mengdeavvik

Nar vi analyserer avvik pa kostnader, er det nyttig a dele avviket opp i to komponenter: **prisavvik** og **mengdeavvik**. Dette gir oss mer presis informasjon om hva som forarsaker avviket.

**Prisavvik:**
Prisavviket viser hvor mye av totalt avvik som skyldes at prisen per enhet var annerledes enn budsjettert.

Prisavvik = (Faktisk pris - Budsjettert pris) x Faktisk mengde

**Mengdeavvik:**
Mengdeavviket viser hvor mye av totalt avvik som skyldes at mengden var annerledes enn budsjettert.

Mengdeavvik = (Faktisk mengde - Budsjettert mengde) x Budsjettert pris

**Totalt avvik = Prisavvik + Mengdeavvik**

Denne oppdelingen er verdifull fordi prisavvik og mengdeavvik ofte har forskjellige arsaker og krever forskjellige tiltak. Et prisavvik kan skyldes markedsendringer eller darlige innkjopsavtaler, mens et mengdeavvik kan skyldes endret salgsvolum, svinn eller produksjonsfeil.`,
    },
    {
      id: 'od-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Avviksanalyse for materialforbruk',
      problem: 'Et bakeri budsjetterte med a bruke 5 000 kg mel til en pris av 8 kr per kg. Faktisk forbruk ble 5 400 kg til en pris av 8,50 kr per kg. Beregn prisavvik, mengdeavvik og totalt avvik.',
      solution: `**Losning:**

**Budsjett:** 5 000 kg x 8 kr = 40 000 kr
**Faktisk:** 5 400 kg x 8,50 kr = 45 900 kr
**Totalt avvik:** 45 900 - 40 000 = 5 900 kr (ugunstig)

**Prisavvik:**
(Faktisk pris - Budsjettert pris) x Faktisk mengde
= (8,50 - 8,00) x 5 400
= 0,50 x 5 400
= 2 700 kr (ugunstig)

**Mengdeavvik:**
(Faktisk mengde - Budsjettert mengde) x Budsjettert pris
= (5 400 - 5 000) x 8,00
= 400 x 8,00
= 3 200 kr (ugunstig)

**Kontroll:** 2 700 + 3 200 = 5 900 kr (stemmer med totalt avvik)

Bakeriet brukte bade mer mel og betalte mer per kilo enn budsjettert. Prisavviket kan skyldes hoyere ravaarepriser, mens mengdeavviket kan skyldes okt produksjon eller svinn.`,
    },
    {
      id: 'od-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Avviksrapport for en avdeling',
      problem: 'En avdeling har folgende budsjett- og regnskapstall for kvartalet:\n\n| Post | Budsjett | Regnskap |\n|------|----------|----------|\n| Salgsinntekter | 500 000 | 520 000 |\n| Varekostnad | 200 000 | 225 000 |\n| Lonnskostnader | 180 000 | 175 000 |\n| Markedsforing | 30 000 | 35 000 |\n\nBeregn avvik for hver post og vurder helheten.',
      solution: `**Losning:**

| Post | Budsjett | Regnskap | Avvik | Vurdering |
|------|----------|----------|-------|-----------|
| Salgsinntekter | 500 000 | 520 000 | +20 000 | Gunstig |
| Varekostnad | 200 000 | 225 000 | +25 000 | Ugunstig |
| Lonnskostnader | 180 000 | 175 000 | -5 000 | Gunstig |
| Markedsforing | 30 000 | 35 000 | +5 000 | Ugunstig |

**Budsjettert dekningsbidrag:** 500 000 - 200 000 - 180 000 - 30 000 = 90 000 kr
**Faktisk dekningsbidrag:** 520 000 - 225 000 - 175 000 - 35 000 = 85 000 kr
**Avvik pa dekningsbidrag:** -5 000 kr (ugunstig)

Selv om salgsinntektene var 20 000 kr hoyere enn budsjettert, ble dekningsbidraget 5 000 kr lavere. Varekostnaden okte mer enn inntektene, noe som kan tyde pa darligere marginer eller prispress fra leverandorer. Avdelingen bor undersoke arsaken til den hoye varekostnaden.`,
    },
    {
      id: 'od-2-2-text-oppfolging',
      type: 'text',
      content: `## Oppfolging av avvik

Nar avvikene er identifisert, ma ledelsen vurdere hvilke avvik som krever handling. Ikke alle avvik er like viktige.

**Vesentlighetsprinsippet:**
Sma avvik er ofte tilfeldige svingninger og trenger ikke noen spesiell oppfolging. Mange bedrifter setter en grense, for eksempel at avvik under 5 % eller under et visst kronerbelop ikke krever forklaring.

**Tiltak ved avvik:**
1. Undersoke arsaken til avviket.
2. Vurdere om arsaken er forbigaende eller varig.
3. Sette inn tiltak for a korrigere kursen.
4. Eventuelt justere budsjettet dersom forutsetningene har endret seg.

Regelmessig avviksanalyse, for eksempel manedlig, gir ledelsen mulighet til a oppdage problemer tidlig og reagere raskt.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 'od-2-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'od-2-2-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En bedrift budsjetterte med salgsinntekter pa 800 000 kr, men oppnadde 750 000 kr. Hva slags avvik er dette?',
        options: [
          { id: 'a', text: 'Positivt avvik fordi bedriften solgte for mindre', isCorrect: false },
          { id: 'b', text: 'Negativt avvik fordi faktiske inntekter var lavere enn budsjettert', isCorrect: true },
          { id: 'c', text: 'Prisavvik fordi prisen var for lav', isCorrect: false },
          { id: 'd', text: 'Det er ikke et avvik fordi forskjellen er under 10 %', isCorrect: false },
        ],
        solution: 'Avviket er 750 000 - 800 000 = -50 000 kr. Dette er et negativt (ugunstig) avvik fordi faktiske inntekter var 50 000 kr lavere enn budsjettert. Det tilsvarer et avvik pa -6,25 %, noe de fleste bedrifter vil anse som vesentlig nok til a analysere naermere.',
      },
    },
    {
      id: 'od-2-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'od-2-2-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva viser mengdeavviket i en avviksanalyse?',
        options: [
          { id: 'a', text: 'Hvor mye av det totale avviket som skyldes endringer i pris per enhet', isCorrect: false },
          { id: 'b', text: 'Hvor mye av det totale avviket som skyldes at det ble brukt mer eller mindre enn planlagt', isCorrect: true },
          { id: 'c', text: 'Forskjellen mellom salgsbudsjettet og kostnadsbudsjettet', isCorrect: false },
          { id: 'd', text: 'Det totale avviket mellom budsjett og regnskap', isCorrect: false },
        ],
        solution: 'Mengdeavviket isolerer den delen av det totale avviket som skyldes at faktisk mengde avviker fra budsjettert mengde. Det beregnes ved: (Faktisk mengde - Budsjettert mengde) x Budsjettert pris. Ved a bruke budsjettert pris eliminerer vi effekten av prisendringer og ser kun pa volumeffekten.',
      },
    },
    {
      id: 'od-2-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'od-2-2-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Et trykkeri budsjetterte med a bruke 10 000 liter blekk til 25 kr per liter. Faktisk forbruk ble 9 500 liter til 27 kr per liter. Beregn prisavvik, mengdeavvik og totalt avvik. Forklar hva avvikene betyr for trykkeriet.',
        hints: [
          'Beregn budsjettert og faktisk totalkostnad forst.',
          'Prisavvik = (Faktisk pris - Budsjettert pris) x Faktisk mengde.',
          'Mengdeavvik = (Faktisk mengde - Budsjettert mengde) x Budsjettert pris.',
        ],
        solution: 'Budsjett: 10 000 x 25 = 250 000 kr. Faktisk: 9 500 x 27 = 256 500 kr. Totalt avvik: +6 500 kr (ugunstig). Prisavvik: (27 - 25) x 9 500 = 19 000 kr (ugunstig). Mengdeavvik: (9 500 - 10 000) x 25 = -12 500 kr (gunstig). Kontroll: 19 000 + (-12 500) = 6 500 kr. Trykkeriet brukte mindre blekk enn planlagt (gunstig mengdeavvik), men betalte mer per liter (ugunstig prisavvik). Prisavviket var storre enn besparelsen pa mengde, slik at totalkostnaden ble hoyere enn budsjettert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'od-2-2-oppg-4',
        number: '4',
        type: 'classic',
        task: 'En bedrift har folgende avviksrapport for maneden:\n\n| Post | Budsjett | Regnskap |\n|------|----------|----------|\n| Salgsinntekter | 1 200 000 | 1 150 000 |\n| Varekostnad | 480 000 | 510 000 |\n| Lonn | 350 000 | 360 000 |\n| Husleie | 40 000 | 40 000 |\n| Markedsforing | 60 000 | 45 000 |\n\nBeregn avvikene, finn driftsresultatet for bade budsjett og regnskap, og foresla tiltak for de viktigste avvikene.',
        hints: [
          'Beregn avvik = Regnskap - Budsjett for hver post.',
          'Driftsresultat = Salgsinntekter - Sum kostnader.',
          'Fokuser pa de storste avvikene nar du foreslar tiltak.',
        ],
        solution: 'Avvik: Salgsinntekter -50 000, Varekostnad +30 000 (ugunstig), Lonn +10 000 (ugunstig), Husleie 0, Markedsforing -15 000 (gunstig). Budsjettert driftsresultat: 1 200 000 - 480 000 - 350 000 - 40 000 - 60 000 = 270 000 kr. Faktisk driftsresultat: 1 150 000 - 510 000 - 360 000 - 40 000 - 45 000 = 195 000 kr. Avvik pa driftsresultat: -75 000 kr (ugunstig). Tiltak: 1) Undersoke arsaken til lavere salg - er det markedsforhold eller intern svikt? 2) Analysere varekostnaden naermere med pris-/mengdeavvik. 3) Vurdere om reduksjonen i markedsforing har bidratt til lavere salg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-2-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'od-2-2-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva vesentlighetsprinsippet betyr i avviksanalyse. Gi et eksempel pa et avvik som trolig bor undersokes naermere, og et eksempel pa et avvik som trolig kan aksepteres uten videre analyse.',
        hints: [
          'Tenk pa bade prosentvis og kronemessig storrelse pa avviket.',
          'Vurder om avviket er kontrollerbart eller skyldes tilfeldige svingninger.',
        ],
        solution: 'Vesentlighetsprinsippet betyr at man fokuserer analyseinnsatsen pa avvik som er store nok til a vaere betydningsfulle for bedriften. Sma avvik vil alltid forekomme og er ofte tilfeldige. Eksempel som bor undersokes: Varekostnaden er 15 % hoyere enn budsjettert, noe som kan tyde pa systematiske problemer med innkjop eller svinn. Eksempel som kan aksepteres: Kontorrekvisita er 200 kr over budsjett - dette er sannsynligvis en tilfeldig svingning og koster mer a analysere enn det er verdt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-2-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'od-2-2-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter sammenhengen mellom budsjettering og avviksanalyse. Hvorfor er det viktig at budsjettet er realistisk for at avviksanalysen skal vaere nyttig?',
        hints: [
          'Tenk pa hva som skjer dersom budsjettet er altfor optimistisk eller pessimistisk.',
          'Vurder hvordan budsjettslakk pavirker avviksanalysen.',
        ],
        solution: 'Budsjettering og avviksanalyse er to sider av samme styringsprosess. Budsjettet setter malet, og avviksanalysen maler prestasjonen mot dette malet. Dersom budsjettet er urealistisk (for hoytt eller for lavt), blir avvikene meningslose. Et altfor optimistisk budsjett gir store negative avvik som demoraliserer og ikke gir nyttig styringsinformasjon. Et altfor forsiktig budsjett (budsjettslakk) gir positive avvik som gir en falsk folelse av suksess. Et realistisk budsjett gir avvik som faktisk forteller oss noe om prestasjonen, slik at vi kan laere og forbedre oss.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Balansert malstyring
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_2_3: TextbookChapter = {
  id: 'okonomi-drift-2-3',
  courseId: 'okonomi-drift',
  chapterNumber: '2.3',
  title: 'Balansert malstyring',
  description: 'Balanced Scorecard (BSC), de fire perspektivene og bruk av KPIer for helhetlig styring.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'od-2-3-intro',
      type: 'text',
      content: `## Mer enn bare okonomi

Tradisjonell okonomistyring fokuserer nesten utelukkende pa finansielle tall: omsetning, resultat, avkastning. Men er det nok? Et godt ars-resultat sier ikke noe om hvordan bedriften ligger an pa andre omrader som er avgjorende for fremtidig suksess.

Tenk deg en bedrift som kutter i opplaering og vedlikehold for a oke overskuddet pa kort sikt. Arsregnskapet ser flott ut, men bedriften har svekket seg pa kompetanse og utstyr. Om et par ar vil dette ramme bade kvaliteten og produktiviteten.

**Balansert malstyring** (Balanced Scorecard, BSC) ble utviklet av Robert Kaplan og David Norton pa 1990-tallet nettopp for a lose dette problemet. Ideen er a styre bedriften ut fra flere perspektiver enn bare det finansielle, slik at man far et mer **balansert** bilde av virksomhetens tilstand og utvikling.`,
    },
    {
      id: 'od-2-3-def-bsc',
      type: 'definition',
      title: 'Balanced Scorecard (BSC)',
      content: `**Balanced Scorecard** (balansert malstyring) er et strategisk styringsverktoy som maler virksomhetens prestasjoner fra fire perspektiver:

1. **Det finansielle perspektivet:** Hvordan ser vi ut for eierne? (Omsetning, resultat, avkastning, kontantstrom)
2. **Kundeperspektivet:** Hvordan oppfatter kundene oss? (Kundetilfredshet, lojalitet, markedsandel)
3. **Interne prosesser:** Hva ma vi vaere gode pa internt? (Kvalitet, effektivitet, leveringstid, innovasjon)
4. **Laering og vekst:** Hvordan kan vi fortsette a forbedre oss? (Medarbeidertilfredshet, kompetanseutvikling, teknologi)

De fire perspektivene henger sammen i en arsaks-virkningskjede: Investering i laering og vekst forbedrer interne prosesser, som gir fornoeyde kunder, som til slutt gir gode finansielle resultater.`,
    },
    {
      id: 'od-2-3-text-kpi',
      type: 'text',
      content: `## KPIer - Nokkelindikatorer

For hvert perspektiv i BSC ma bedriften velge konkrete **KPIer** (Key Performance Indicators), altsa malbare indikatorer som viser hvordan man presterer.

**Gode KPIer kjennetegnes av:**
- De er **malbare** og kan folges over tid.
- De er **relevante** for virksomhetens strategi.
- De er **pavirkerbare** av de som maler dem.
- De er **forstaelige** for alle i organisasjonen.
- De har en **malsetting** (target) og en **grenseverdi** (threshold).

**Eksempler pa KPIer for hvert perspektiv:**

| Perspektiv | KPI | Maling |
|------------|-----|--------|
| Finansielt | Driftsmargin | Driftsresultat / Omsetning x 100 |
| Finansielt | Avkastning pa egenkapital | Resultat / Egenkapital x 100 |
| Kunde | Kundetilfredshet (NPS) | Net Promoter Score (0-100) |
| Kunde | Kundebevaringsrate | Andel kunder som handler igjen |
| Intern prosess | Leveringspresisjon | Andel leveringer til rett tid |
| Intern prosess | Feilrate i produksjon | Antall feil per 1 000 enheter |
| Laering/vekst | Medarbeidertilfredshet | Arsgjennomsnitt fra undersokelseresultater |
| Laering/vekst | Opplaeringstimer per ansatt | Timer per ar |

Det er viktig a ikke ha for mange KPIer. Vanlig anbefaling er 4-7 KPIer per perspektiv, slik at oppmerksomheten holdes pa det viktigste.`,
    },
    {
      id: 'od-2-3-example-1',
      type: 'example',
      title: 'Eksempel: BSC for en reiselivsvirksomhet',
      problem: 'Hotellet "Fjordglimt" onsker a innfore balansert malstyring. De har en strategi om a bli regionens mest anbefalte hotell innen tre ar. Foresla to KPIer med malsettinger for hvert av de fire BSC-perspektivene.',
      solution: `**Losning:**

**Finansielt perspektiv:**
- RevPAR (inntekt per tilgjengelig rom): Mal 1 200 kr (opp fra 950 kr)
- Driftsmargin: Mal 18 % (opp fra 12 %)

**Kundeperspektivet:**
- TripAdvisor-score: Mal 4,7 av 5 (opp fra 4,2)
- Gjenkjopsrate: Mal 40 % av gjestene skal komme tilbake (opp fra 25 %)

**Interne prosesser:**
- Responstid pa henvendelser: Mal under 15 minutter (ned fra 45 minutter)
- Rengjoringsstandard: Mal 95 % godkjent ved stikkprovekontroll (opp fra 85 %)

**Laering og vekst:**
- Opplaeringstimer per ansatt: Mal 40 timer per ar (opp fra 15 timer)
- Medarbeidertilfredshet: Mal 8,0 av 10 (opp fra 6,5)

**Arsaks-virkningskjeden:** Mer opplaering og tilfredse ansatte gir bedre rengjoring og raskere service, som gir hoyere TripAdvisor-score og gjenkjop, som til slutt gir hoyere RevPAR og driftsmargin.`,
    },
    {
      id: 'od-2-3-text-strategikart',
      type: 'text',
      content: `## Strategikart

Et **strategikart** er en visuell fremstilling av sammenhengen mellom malene i de fire BSC-perspektivene. Det viser arsaks-virkningskjeden mellom tiltak pa de ulike nivaene.

**Slik bygges et strategikart:**

1. Start med det finansielle perspektivet: Hva er de overordnede okonomiske malene?
2. Ga til kundeperspektivet: Hva ma vi levere til kundene for a na de finansielle malene?
3. Ga til interne prosesser: Hvilke prosesser ma vi forbedre for a levere til kundene?
4. Ga til laering og vekst: Hva ma vi investere i for a forbedre prosessene?

Pilene i strategikartet viser hvordan mal pa ett niva stotter mal pa nivaet over. For eksempel: "Investere i digitale bestillingslosninger" (laering/vekst) forer til "Raskere ordrebehandling" (intern prosess), som forer til "Kortere leveringstid" (kundeperspektiv), som forer til "Okt omsetning" (finansielt).

Et godt strategikart gir alle i organisasjonen en forstaelse av hvordan deres daglige arbeid bidrar til den overordnede strategien.`,
    },
    {
      id: 'od-2-3-text-utfordringer',
      type: 'text',
      content: `## Utfordringer med BSC

Selv om balansert malstyring er et kraftig verktoy, er det viktig a vaere klar over noen vanlige fallgruver:

- **For mange KPIer:** Dersom bedriften prover a male alt, mister man fokus. Velg de viktigste indikatorene.
- **Maling uten handling:** Det hjelper ikke a male dersom resultatene ikke folges opp med konkrete tiltak.
- **Manglende forankring:** BSC ma forankres hos alle ansatte, ikke bare ledelsen. Alle ma forsta hva de kan bidra med.
- **Statisk bruk:** KPIer og mal ma oppdateres nar strategien endrer seg. Et BSC som aldri revideres, mister relevans.
- **Spilleffekter:** Ansatte kan tilpasse adferden for a na KPIer pa mater som ikke er onsket. For eksempel kan et mal om kort behandlingstid fore til at kvaliteten synker.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 'od-2-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'od-2-3-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilke fire perspektiver inngar i Balanced Scorecard?',
        options: [
          { id: 'a', text: 'Finansielt, kunde, intern prosess, laering og vekst', isCorrect: true },
          { id: 'b', text: 'Inntekt, kostnad, resultat, balanse', isCorrect: false },
          { id: 'c', text: 'Marked, produksjon, personal, okonomi', isCorrect: false },
          { id: 'd', text: 'Strategi, taktikk, operasjon, evaluering', isCorrect: false },
        ],
        solution: 'De fire perspektivene i Balanced Scorecard er det finansielle perspektivet, kundeperspektivet, perspektivet for interne prosesser, og perspektivet for laering og vekst. Disse fire perspektivene sikrer at bedriften ikke bare fokuserer pa kortsiktige okonomiske resultater, men ogsa pa de faktorene som driver fremtidig suksess.',
      },
    },
    {
      id: 'od-2-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'od-2-3-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er en KPI?',
        options: [
          { id: 'a', text: 'En type budsjett som brukes i offentlig sektor', isCorrect: false },
          { id: 'b', text: 'En malbar indikator som viser prestasjoner pa et viktig omrade', isCorrect: true },
          { id: 'c', text: 'Et regnskapsprinsipp for verdsetting av eiendeler', isCorrect: false },
          { id: 'd', text: 'En metode for a beregne avvik mellom budsjett og regnskap', isCorrect: false },
        ],
        solution: 'KPI star for Key Performance Indicator (nokkelindikator). Det er et konkret, malbart mal som viser hvordan virksomheten presterer pa et viktig omrade. En god KPI er malbar, relevant for strategien, pavirkerbar og forstaelig for de som folger den opp.',
      },
    },
    {
      id: 'od-2-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'od-2-3-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Forklar arsaks-virkningskjeden i BSC med et konkret eksempel fra en dagligvarebutikk. Vis hvordan et tiltak i perspektivet for laering og vekst kan pavirke alle de andre perspektivene.',
        hints: [
          'Start nederst i kjeden med laering og vekst.',
          'Tenk pa et opplaeringstiltak og folg effektene oppover.',
          'Vis tydelige koblinger mellom hvert niva.',
        ],
        solution: 'Eksempel: En dagligvarebutikk innforer et opplaeringsprogram i kundeservice og varehandtering (laering/vekst). Dette forer til at de ansatte blir flinkere til a holde hyllene fulle og gi gode rad (intern prosess). Kundene merker bedre service og finner alltid det de soker (kundeperspektiv), noe som gir hoyere kundetilfredshet og lojalitet. Lojale kunder handler oftere og for storre belop, noe som oker omsetningen og dekningsbidraget (finansielt perspektiv). Kjeden viser at en investering i kompetanse kan gi malbare resultater pa alle nivaer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'od-2-3-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Velg en bedrift du kjenner til (for eksempel en lokal butikk, restaurant eller nettbutikk). Lag et forslag til to KPIer for hvert av de fire BSC-perspektivene. Inkluder malsetting og malemetode for hver KPI.',
        hints: [
          'Tenk pa hva som er viktigst for akkurat denne typen bedrift.',
          'Gor KPIene sa konkrete som mulig.',
          'Vurder hva som er realistiske malsettinger.',
        ],
        solution: 'Svaret avhenger av valgt bedrift, men bor inkludere: Finansielt perspektiv med to KPIer (f.eks. omsetningsvekst i prosent og driftsmargin), kundeperspektiv (f.eks. kundetilfredshet malt med undersokelse og andel returkunder), interne prosesser (f.eks. gjennomsnittlig behandlingstid og feilprosent), laering og vekst (f.eks. medarbeidertilfredshet og antall kompetansetiltak). Hver KPI bor ha en tydelig malsetting (tall) og en forklaring pa hvordan den males.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-3-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'od-2-3-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar begrepet spilleffekter i forbindelse med KPIer. Gi to eksempler pa KPIer som kan gi uonskede spilleffekter, og foresla hvordan man kan motvirke disse.',
        hints: [
          'Spilleffekter oppstar nar folk optimaliserer for malet i stedet for intensjonen bak malet.',
          'Tenk pa KPIer der kvantitet kan ga pa bekostning av kvalitet.',
        ],
        solution: 'Spilleffekter oppstar nar ansatte tilpasser adferden for a score godt pa KPIen pa mater som ikke er i bedriftens interesse. Eksempel 1: En KPI for antall kundehenvendelser per time kan fore til at ansatte avslutter samtaler for raskt, noe som gir darligere kundeservice. Motvirkning: Kombiner med KPI for kundetilfredshet. Eksempel 2: En KPI for antall nye kunder kan fore til at salgsteamet gir store rabatter, noe som svekker lonnsomheten. Motvirkning: Legg til en KPI for dekningsbidrag per ny kunde. Losningen er ofte a balansere kvantitative KPIer med kvalitative, slik at uonskede tilpasninger fanges opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-3-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'od-2-3-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign tradisjonell budsjettbasert styring med balansert malstyring (BSC). Hva er styrkene og svakhetene ved hver tilnaerming? I hvilke situasjoner vil du anbefale den ene fremfor den andre?',
        hints: [
          'Tenk pa hva slags informasjon hver tilnaerming gir.',
          'Vurder kompleksitet og ressursbehov.',
          'Tenk pa bedriftens storrelse og modenhet.',
        ],
        solution: 'Tradisjonell budsjettbasert styring: Styrker er enkelhet, tydelige finansielle mal og lang erfaring. Svakheter er ensidig fokus pa okonomi, kortsiktig perspektiv og manglende kobling til strategi. BSC: Styrker er helhetlig perspektiv, kobling mellom strategi og daglig drift og fokus pa fremtidige drivere. Svakheter er mer komplekst, krever mer ressurser og kan bli byrakratisk. For sma bedrifter med begrensede ressurser kan tradisjonell budsjettstyring vaere tilstrekkelig. For storre bedrifter med komplekse strategier gir BSC et mye bedre grunnlag for styring. Ideelt sett brukes begge: Budsjettet for detaljert finansiell planlegging og BSC for helhetlig strategisk styring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Investering og finansiering
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_2_4: TextbookChapter = {
  id: 'okonomi-drift-2-4',
  courseId: 'okonomi-drift',
  chapterNumber: '2.4',
  title: 'Investering og finansiering',
  description: 'Naverdimetoden, internrentemetoden og tilbakebetalingstid som verktoy for investeringsbeslutninger.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'od-2-4-intro',
      type: 'text',
      content: `## Investeringsbeslutninger

En investering innebarer at bedriften bruker penger i dag i forventing om a tjene mer i fremtiden. Det kan vaere kjop av maskiner, utvikling av nye produkter, oppkjop av andre bedrifter eller investering i teknologi.

Investeringer er blant de viktigste beslutningene en bedrift tar. De binder store belop over lang tid, og feilbeslutninger kan vaere kostbare eller til og med truende for virksomhetens eksistens.

**Grunnleggende prinsipper:**

For a vurdere om en investering er lonnsom, ma vi sammenligne det vi investerer i dag med det vi forventer a fa tilbake i fremtiden. Men penger i dag er ikke det samme som penger i fremtiden. 100 000 kr i dag er mer verdt enn 100 000 kr om fem ar, fordi:

- Pengene kan investeres og gi avkastning i mellomtiden (alternativkostnad).
- Inflasjon reduserer kjopekraften over tid.
- Det er usikkerhet knyttet til fremtidige kontantstrommer.

Derfor ma vi **diskontere** fremtidige kontantstrommer for a finne deres verdi i dag. Dette er grunnprinsippet i investeringsanalyse.`,
    },
    {
      id: 'od-2-4-def-naverdi',
      type: 'definition',
      title: 'Naverdi (NPV)',
      content: `**Naverdi** (Net Present Value, NPV) er summen av alle fremtidige kontantstrommer diskontert tilbake til i dag, fratrukket investeringsbelopet.

**Formel:**

NPV = -I + K1/(1+r) + K2/(1+r)^2 + K3/(1+r)^3 + ... + Kn/(1+r)^n

der:
- I = Investeringsbelopet (utbetaling ved start)
- K1, K2, ... Kn = Forventede kontantstrommer i ar 1, 2, ... n
- r = Avkastningskravet (diskonteringsrenten)
- n = Investeringens levetid i ar

**Beslutningsregel:**
- NPV > 0: Investeringen er lonnsom (gir mer enn avkastningskravet)
- NPV = 0: Investeringen gir noyaktig avkastningskravet
- NPV < 0: Investeringen er ikke lonnsom (gir mindre enn avkastningskravet)

Nar man velger mellom flere investeringer, bor man velge den med hoyest positiv naverdi.`,
    },
    {
      id: 'od-2-4-def-internrente',
      type: 'definition',
      title: 'Internrente (IRR)',
      content: `**Internrenten** (Internal Rate of Return, IRR) er den renten som gjor at naverdien av investeringen blir noyaktig lik null.

Med andre ord: Internrenten er den avkastningen investeringen faktisk gir.

**Beslutningsregel:**
- IRR > avkastningskravet: Investeringen er lonnsom
- IRR = avkastningskravet: Investeringen gar i null
- IRR < avkastningskravet: Investeringen er ikke lonnsom

**Fordeler med internrente:**
- Lett a forsta: "Investeringen gir 15 % avkastning."
- Kan sammenlignes direkte med avkastningskravet.

**Begrensninger:**
- Kan gi feil rangering dersom investeringene har ulik storrelse.
- Kan gi flere losninger dersom kontantstrommeneskifter fortegn flere ganger.
- Antar at mellomliggende kontantstrommer reinvesteres til internrenten (noe som ofte er urealistisk).`,
    },
    {
      id: 'od-2-4-def-tilbakebetaling',
      type: 'definition',
      title: 'Tilbakebetalingstid',
      content: `**Tilbakebetalingstid** (Payback Period) er antall ar det tar for de akkumulerte kontantstrommenea fra investeringen a dekke investeringsbelopet.

**Fordeler:**
- Enkel a beregne og forsta.
- Gir et mal pa risiko - jo kortere tilbakebetalingstid, jo lavere risiko.
- Nyttig som supplement til naverdi og internrente.

**Begrensninger:**
- Tar ikke hensyn til tidsverdien av penger (med mindre man bruker diskontert tilbakebetalingstid).
- Ignorerer kontantstrommer som kommer etter tilbakebetalingstidspunktet.
- Gir ikke noe mal pa lonnsomhet, bare pa nar pengene er tjent inn igjen.`,
    },
    {
      id: 'od-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Investeringsanalyse med naverdi',
      problem: 'Et firma vurderer a investere 500 000 kr i ny produksjonsutstyr. Utstyret forventes a gi arlige kontantstrommer pa 150 000 kr i 5 ar. Avkastningskravet er 10 %. Beregn naverdien og vurder om investeringen er lonnsom.',
      solution: `**Losning:**

Diskontering av kontantstrommene:

| Ar | Kontantstrom | Diskonteringsfaktor (10 %) | Naverdi |
|----|-------------|---------------------------|---------|
| 0 | -500 000 | 1,000 | -500 000 |
| 1 | 150 000 | 1/(1,10)^1 = 0,909 | 136 350 |
| 2 | 150 000 | 1/(1,10)^2 = 0,826 | 123 900 |
| 3 | 150 000 | 1/(1,10)^3 = 0,751 | 112 650 |
| 4 | 150 000 | 1/(1,10)^4 = 0,683 | 102 450 |
| 5 | 150 000 | 1/(1,10)^5 = 0,621 | 93 150 |

**NPV = -500 000 + 136 350 + 123 900 + 112 650 + 102 450 + 93 150 = 68 500 kr**

Naverdien er positiv (68 500 kr), noe som betyr at investeringen gir mer enn 10 % avkastning. Investeringen er lonnsom og bor gjennomfores.

**Tilbakebetalingstid:** 500 000 / 150 000 = 3,33 ar (3 ar og 4 maneder).`,
    },
    {
      id: 'od-2-4-example-2',
      type: 'example',
      title: 'Eksempel: Sammenligning av to investeringer',
      problem: 'Et transportfirma vurderer to alternativer:\n\n**Alternativ A:** Investering 300 000 kr, arlig kontantstrom 100 000 kr i 4 ar.\n**Alternativ B:** Investering 500 000 kr, arlig kontantstrom 155 000 kr i 4 ar.\n\nAvkastningskravet er 8 %. Hvilket alternativ bor velges?',
      solution: `**Losning:**

**Alternativ A:**
NPV = -300 000 + 100 000/1,08 + 100 000/1,08^2 + 100 000/1,08^3 + 100 000/1,08^4
NPV = -300 000 + 92 593 + 85 734 + 79 383 + 73 503
NPV = 31 213 kr

**Alternativ B:**
NPV = -500 000 + 155 000/1,08 + 155 000/1,08^2 + 155 000/1,08^3 + 155 000/1,08^4
NPV = -500 000 + 143 519 + 132 888 + 123 044 + 113 930
NPV = 13 381 kr

**Tilbakebetalingstid:**
A: 300 000 / 100 000 = 3,0 ar
B: 500 000 / 155 000 = 3,23 ar

**Vurdering:**
Alternativ A har hoyest naverdi (31 213 kr mot 13 381 kr) og kortere tilbakebetalingstid. Alternativ A bor velges. Selv om B gir hoyere arlige kontantstrommer, gir den storre investeringen ikke god nok avkastning relativt sett.`,
    },
    {
      id: 'od-2-4-text-finansiering',
      type: 'text',
      content: `## Finansiering av investeringer

Nar en investering er besluttet, ma bedriften vurdere hvordan den skal finansieres. Det finnes to hovedkilder:

**Egenkapitalfinansiering:**
- Bruk av opptjent overskudd (selvfinansiering)
- Emisjon (utstedelse av nye aksjer)
- Innskudd fra eiere

**Fremmedkapitalfinansiering:**
- Banklan (langsiktig eller kortsiktig)
- Obligasjonslan
- Leasing (operasjonell eller finansiell)
- Leverandorkreditt

**Hva pavirker valg av finansiering?**
- **Kostnaden:** Rente pa lan vs. forventet avkastning til eierne.
- **Risiko:** Hoyere gjeld gir hoyere finansiell risiko.
- **Fleksibilitet:** Egenkapital gir mer handlefrihet enn gjeld.
- **Kontroll:** Nye aksjonaerer betyr at eierskapet utvides.
- **Skatteeffekt:** Rentekostnader er fradragsberettiget, noe som gjor gjeld billigere etter skatt.

En sunn balanse mellom egenkapital og gjeld er avgjorende for virksomhetens finansielle stabilitet.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 'od-2-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'od-2-4-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva betyr det at en investering har positiv naverdi (NPV > 0)?',
        options: [
          { id: 'a', text: 'Investeringen er risikofri', isCorrect: false },
          { id: 'b', text: 'Investeringen gir hoyere avkastning enn avkastningskravet', isCorrect: true },
          { id: 'c', text: 'Investeringen er tilbakebetalt innen ett ar', isCorrect: false },
          { id: 'd', text: 'Investeringen krever ingen finansiering', isCorrect: false },
        ],
        solution: 'En positiv naverdi betyr at summen av alle fremtidige diskonterte kontantstrommer er storre enn investeringsbelopet. Investeringen gir dermed en avkastning som overstiger avkastningskravet (diskonteringsrenten). Dette betyr at investeringen skaper merverdi for bedriften og bor gjennomfores.',
      },
    },
    {
      id: 'od-2-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'od-2-4-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er den storste svakheten ved tilbakebetalingsmetoden?',
        options: [
          { id: 'a', text: 'Den er for komplisert til a bruke i praksis', isCorrect: false },
          { id: 'b', text: 'Den kan bare brukes pa investeringer over 1 million kr', isCorrect: false },
          { id: 'c', text: 'Den ignorerer kontantstrommer etter tilbakebetalingstidspunktet og tidsverdien av penger', isCorrect: true },
          { id: 'd', text: 'Den krever kjennskap til internrenten', isCorrect: false },
        ],
        solution: 'Den storste svakheten er at tilbakebetalingsmetoden ignorerer hva som skjer etter at investeringen er tilbakebetalt. En investering som gir enorme kontantstrommer etter ar 5 vurderes likt som en som gir ingenting etter tilbakebetalingstidspunktet. I tillegg tar den vanlige varianten ikke hensyn til at penger i dag er mer verdt enn penger i fremtiden.',
      },
    },
    {
      id: 'od-2-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'od-2-4-oppg-3',
        number: '3',
        type: 'classic',
        task: 'En bedrift vurderer a investere 800 000 kr i en ny maskin. Forventede arlige kontantstrommer er 250 000 kr i 5 ar. Avkastningskravet er 12 %. Beregn naverdien og tilbakebetalingstiden. Er investeringen lonnsom?',
        hints: [
          'Diskonter hver kontantstrom med faktoren 1/(1,12)^n.',
          'Tilbakebetalingstid = Investering / Arlig kontantstrom.',
          'NPV > 0 betyr at investeringen er lonnsom.',
        ],
        solution: 'Ar 1: 250 000/1,12 = 223 214. Ar 2: 250 000/1,12^2 = 199 298. Ar 3: 250 000/1,12^3 = 177 945. Ar 4: 250 000/1,12^4 = 158 880. Ar 5: 250 000/1,12^5 = 141 857. Sum diskonterte kontantstrommer: 901 194 kr. NPV = 901 194 - 800 000 = 101 194 kr. Tilbakebetalingstid: 800 000 / 250 000 = 3,2 ar. Investeringen er lonnsom fordi NPV er positiv (101 194 kr), og tilbakebetalingstiden pa 3,2 ar er akseptabel for en 5-ars investering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'od-2-4-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Et firma vurderer to prosjekter:\n\n**Prosjekt X:** Investering 400 000 kr. Kontantstrommer: Ar 1: 180 000, Ar 2: 180 000, Ar 3: 180 000.\n**Prosjekt Y:** Investering 400 000 kr. Kontantstrommer: Ar 1: 50 000, Ar 2: 150 000, Ar 3: 350 000.\n\nAvkastningskravet er 10 %. Beregn naverdi for begge og forklar forskjellene.',
        hints: [
          'Legg merke til at totalsum kontantstrommer er lik (540 000 vs. 550 000), men fordelingen over tid er forskjellig.',
          'Prosjektet med kontantstrommer tidlig vil ha hoyere naverdi.',
        ],
        solution: 'Prosjekt X: NPV = -400 000 + 180 000/1,10 + 180 000/1,10^2 + 180 000/1,10^3 = -400 000 + 163 636 + 148 760 + 135 236 = 47 632 kr. Prosjekt Y: NPV = -400 000 + 50 000/1,10 + 150 000/1,10^2 + 350 000/1,10^3 = -400 000 + 45 455 + 123 967 + 262 960 = 32 382 kr. Prosjekt X har hoyere naverdi til tross for noe lavere totale kontantstrommer (540 000 vs. 550 000). Dette skyldes tidsverdien av penger: Prosjekt X gir store kontantstrommer tidlig, mens Y gir mest sent. Tidlige kontantstrommer diskonteres mindre og er dermed mer verdt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-4-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'od-2-4-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom egenkapitalfinansiering og fremmedkapitalfinansiering. Gi tre fordeler og tre ulemper med hver finansieringsform.',
        hints: [
          'Tenk pa kostnad, risiko, fleksibilitet og kontroll.',
          'Husk skatteeffekten av rentekostnader.',
          'Vurder hva som skjer i darlige tider.',
        ],
        solution: 'Egenkapitalfinansiering - Fordeler: 1) Ingen faste betalingsforpliktelser (mer robust i darlige tider), 2) Storre finansiell fleksibilitet, 3) Lavere finansiell risiko. Ulemper: 1) Kan vaere dyrere enn gjeld fordi eierne krever hoyere avkastning, 2) Kan fore til utvanning av eierskap og kontroll, 3) Utbytte er ikke fradragsberettiget. Fremmedkapitalfinansiering - Fordeler: 1) Rentekostnader er fradragsberettiget (skattefordel), 2) Eierskapet beholdes udelt, 3) Kan vaere billigere enn egenkapital. Ulemper: 1) Faste rente- og avdragsforpliktelser oker risikoen, 2) Bankens krav til sikkerhet kan begrense handlefriheten, 3) Hoy gjeld kan true virksomheten i nedgangstider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-4-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'od-2-4-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter styrker og svakheter ved naverdimetoden (NPV), internrentemetoden (IRR) og tilbakebetalingsmetoden. I hvilke situasjoner er det mest hensiktsmessig a bruke hver av metodene?',
        hints: [
          'Tenk pa hva hver metode maler og hva den ignorerer.',
          'Vurder hvem som skal bruke resultatet (styret, daglig leder, investor).',
          'Husk at metodene ofte brukes sammen, ikke alene.',
        ],
        solution: 'NPV: Styrke er at den gir et absolutt kronerbelop og tar hensyn til tidsverdien. Svakhet er at den krever et presist avkastningskrav og kan vaere vanskelig a formidle. Best for a rangere prosjekter av ulik storrelse. IRR: Styrke er at den er intuitiv (avkastning i prosent) og enkel a kommunisere. Svakhet er at den kan gi feil rangering ved ulik prosjektstorrelse og kan ha flere losninger. Best for raskt a vurdere om et prosjekt overstiger avkastningskravet. Tilbakebetalingsmetoden: Styrke er enkelhet og fokus pa risiko. Svakhet er at den ignorerer kontantstrommer etter tilbakebetaling og tidsverdien. Best som supplement for a vurdere likviditetsrisiko. I praksis bor alle tre metodene brukes sammen for et komplett beslutningsgrunnlag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Okonomisk rapportering
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_2_5: TextbookChapter = {
  id: 'okonomi-drift-2-5',
  courseId: 'okonomi-drift',
  chapterNumber: '2.5',
  title: 'Okonomisk rapportering',
  description: 'Dashbord, nokkel tall og styringsinformasjon for beslutningsstotte i virksomheten.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'od-2-5-intro',
      type: 'text',
      content: `## Fra tall til beslutninger

Regnskapet og budsjettene produserer enorme mengder tall. Men tall i seg selv er ikke nyttige - det er forstaelsen av tallene og evnen til a handle pa dem som skaper verdi. Okonomisk rapportering handler om a gjore finansiell informasjon tilgjengelig, forstaelig og handlingsrettet for de som trenger den.

**Hvem trenger okonomisk informasjon?**

- **Styret:** Trenger overordnet bilde av okonomi, strategi og risiko.
- **Daglig leder:** Trenger detaljert informasjon for operasjonelle beslutninger.
- **Avdelingsledere:** Trenger informasjon om sin avdelings prestasjoner.
- **Investorer og banker:** Trenger informasjon for a vurdere virksomhetens soliditet.
- **Offentlige myndigheter:** Trenger informasjon for skatt, avgifter og tilsyn.

Utfordringen er at disse gruppene trenger ulik type informasjon, pa ulike detaljeringsniva og med ulik hyppighet. Et godt rapporteringssystem tilpasser informasjonen til mottakeren.`,
    },
    {
      id: 'od-2-5-def-nokkeltall',
      type: 'definition',
      title: 'Okonomiske nokkeltall',
      content: `**Okonomiske nokkeltall** er forholdstall beregnet fra regnskapet som gir komprimert informasjon om virksomhetens lonnsomhet, likviditet, soliditet og effektivitet.

**Lonnsomhet:**
- **Driftsmargin** = Driftsresultat / Driftsinntekter x 100 %
- **Resultatgrad** = Arsresultat / Driftsinntekter x 100 %
- **Egenkapitalrentabilitet** = Arsresultat / Gjennomsnittlig egenkapital x 100 %
- **Totalkapitalrentabilitet** = (Driftsresultat + Finansinntekter) / Gjennomsnittlig totalkapital x 100 %

**Likviditet:**
- **Likviditetsgrad 1** = Omlopsmidler / Kortsiktig gjeld (bor vaere > 2)
- **Likviditetsgrad 2** = (Omlopsmidler - Varelager) / Kortsiktig gjeld (bor vaere > 1)

**Soliditet:**
- **Egenkapitalandel** = Egenkapital / Totalkapital x 100 %
- **Gjeldsgrad** = Gjeld / Egenkapital

**Effektivitet:**
- **Varelagerets omlopshastighet** = Varekostnad / Gjennomsnittlig varelager
- **Kredittid kunder** = (Kundefordringer / Kredittsalg) x 365 dager`,
    },
    {
      id: 'od-2-5-text-dashbord',
      type: 'text',
      content: `## Okonomiske dashbord

Et **dashbord** er en visuell oversikt som samler de viktigste nokkeltallene og KPIene pa en skjerm eller side. Inspirert av et bilens dashbord, der sjaforen raskt kan se fart, drivstoffniva og motortemperatur, gir et okonomisk dashbord ledelsen en rask oversikt over virksomhetens tilstand.

**Kjennetegn pa et godt dashbord:**

- **Oversiktlig:** Maks 10-15 nokkeltall pa en skjerm.
- **Visuelt:** Bruker grafer, diagrammer og farger (gronn/gul/rod) for rask forstaelse.
- **Oppdatert:** Viser sanntidsdata eller data med kort forsinkelse.
- **Handlingsrettet:** Nokkeltallene kobles til terskelverdier som utloser handling.
- **Tilpasset:** Ulike dashbord for ulike brukergrupper (styre, daglig leder, avdelingsleder).

**Vanlige elementer i et dashbord:**

1. **Trafikklys-indikatorer:** Gronn (pa mal), gul (advarsel), rod (kritisk avvik).
2. **Trendlinjer:** Viser utvikling over tid (siste 12 maneder, ar-til-ar).
3. **Sammenligning:** Budsjett vs. faktisk, denne perioden vs. forrige periode.
4. **Gauges (malere):** Viser hvor nokkeltallet ligger i forhold til mal.
5. **Rangeringer:** Topp-produkter, beste avdelinger, storste kunder.`,
    },
    {
      id: 'od-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av nokkeltall',
      problem: 'Et selskap har folgende regnskapstall:\n\n- Driftsinntekter: 8 000 000 kr\n- Driftsresultat: 640 000 kr\n- Arsresultat: 480 000 kr\n- Egenkapital: 3 200 000 kr\n- Totalkapital: 6 400 000 kr\n- Omlopsmidler: 2 800 000 kr\n- Kortsiktig gjeld: 1 600 000 kr\n- Varelager: 800 000 kr\n\nBeregn driftsmargin, egenkapitalrentabilitet, egenkapitalandel, likviditetsgrad 1 og likviditetsgrad 2.',
      solution: `**Losning:**

**Driftsmargin:**
640 000 / 8 000 000 x 100 = 8,0 %
(Akseptabel, men det er rom for forbedring)

**Egenkapitalrentabilitet:**
480 000 / 3 200 000 x 100 = 15,0 %
(God avkastning pa eiernes investerte kapital)

**Egenkapitalandel:**
3 200 000 / 6 400 000 x 100 = 50,0 %
(Meget solid, godt over anbefalt minimum pa 30 %)

**Likviditetsgrad 1:**
2 800 000 / 1 600 000 = 1,75
(Noe under anbefalt 2,0, men akseptabelt)

**Likviditetsgrad 2:**
(2 800 000 - 800 000) / 1 600 000 = 1,25
(Over anbefalt 1,0, bedriften kan betale sine kortsiktige forpliktelser)

**Samlet vurdering:** Selskapet har god lonnsomhet og soliditet, men likviditeten bor styrkes noe. Et likviditetsbudsjett bor utarbeides for a sikre at kontantbeholdningen er tilstrekkelig.`,
    },
    {
      id: 'od-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Dashbord for en daglig leder',
      problem: 'Beskriv hvilke nokkeltall og informasjonselementer du vil inkludere i et manedlig dashbord for daglig leder i en mellomstor produksjonsbedrift.',
      solution: `**Losning - forslag til dashbord:**

**Rad 1: Finansielt overbllikk (trafikklys)**
- Omsetning denne maneden vs. budsjett
- Driftsresultat denne maneden vs. budsjett
- Akkumulert arsresultat vs. budsjett
- Kassebeholdning

**Rad 2: Trender (linjediagrammer)**
- Omsetningsutvikling siste 12 maneder
- Driftsmarginutvikling siste 12 maneder

**Rad 3: Operasjonelle nokkeltall (gauges)**
- Leveringspresisjon (mal: 98 %)
- Produksjonseffektivitet (mal: 92 %)
- Sykefraavaer (mal: under 4 %)
- Kundetilfredshet (mal: 4,5 av 5)

**Rad 4: Detaljer (tabeller)**
- Topp 5 produkter etter dekningsbidrag
- Storste kunder etter omsetning
- Avvik over 10 % pa budsjettposter

Dette dashbordet gir daglig leder et raskt bilde av bade den finansielle og operasjonelle statusen, med mulighet til a bore ned i detaljer der det er avvik.`,
    },
    {
      id: 'od-2-5-text-styringsinformasjon',
      type: 'text',
      content: `## Styringsinformasjon og beslutningsstotte

Okonomisk rapportering er ikke bare bakoverrettet (hva har skjedd), men bor ogsa vaere fremoverrettet (hva kommer til a skje) og handlingsrettet (hva bor vi gjore).

**Fra rapportering til styringsinformasjon:**

1. **Deskriptiv:** Hva skjedde? (Regnskapsrapporter, nokkeltall)
2. **Diagnostisk:** Hvorfor skjedde det? (Avviksanalyse, arsaksanalyse)
3. **Prediktiv:** Hva kommer til a skje? (Prognoser, trender, scenarioanalyser)
4. **Preskriptiv:** Hva bor vi gjore? (Handlingsplaner, anbefalinger)

**Rullende prognoser:**
I stedet for a lage et fastlast arsbudsjett, bruker mange bedrifter rullende prognoser som oppdateres jevnlig (for eksempel hvert kvartal). Prognosen strekker seg alltid 12-18 maneder fremover og justeres basert pa ny informasjon. Dette gir mer relevant styringsinformasjon enn et statisk budsjett.

**Scenarioanalyse:**
For viktige beslutninger kan det vaere nyttig a analysere ulike scenarier: Hva skjer dersom salget oker med 20 %? Hva om ravareprisene stiger med 15 %? Scenarioanalyser hjelper ledelsen med a forberede seg pa ulike utfall og ha klare handlingsplaner.`,
    },
    {
      id: 'od-2-5-text-digitalisering',
      type: 'text',
      content: `## Digitale verktoy for rapportering

Moderne okonomistyring stotter seg pa digitale verktoy som gjor det enklere a samle, analysere og presentere data.

**Vanlige verktoy:**
- **ERP-systemer** (Enterprise Resource Planning): Samler alle forretningsprosesser i ett system (SAP, Visma, Tripletex).
- **Business Intelligence (BI):** Verktoy for a analysere store datamengder og lage visualiseringer (Power BI, Tableau, Qlik).
- **Regneark:** Fortsatt mye brukt for ad-hoc-analyser og smabudsjetter (Excel, Google Sheets).
- **Skybaserte losninger:** Gir tilgang til sanntidsdata fra hvor som helst.

**Trender innen okonomisk rapportering:**
- Automatisering av rutinerapporter.
- Bruk av kunstig intelligens for a oppdage monstre og anomalier.
- Sanntidsrapportering i stedet for periodiske rapporter.
- Okt fokus pa ikke-finansielle nokkeltall (barekraft, ESG).
- Selvbetjent analyse der ledere selv kan utforske data.`,
    },
    // ========== OPPGAVER ==========
    {
      id: 'od-2-5-oppg-1',
      type: 'exercise',
      exercise: {
        id: 'od-2-5-oppg-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva viser likviditetsgrad 1?',
        options: [
          { id: 'a', text: 'Bedriftens evne til a betale langsiktig gjeld', isCorrect: false },
          { id: 'b', text: 'Forholdet mellom omlopsmidler og kortsiktig gjeld', isCorrect: true },
          { id: 'c', text: 'Bedriftens lonnsomhet i prosent', isCorrect: false },
          { id: 'd', text: 'Hvor mye egenkapital bedriften har i forhold til gjelden', isCorrect: false },
        ],
        solution: 'Likviditetsgrad 1 = Omlopsmidler / Kortsiktig gjeld. Dette nokkeltallet viser bedriftens evne til a betale sine kortsiktige forpliktelser med sine kortsiktige eiendeler (kontanter, kundefordringer, varelager). Anbefalt verdi er over 2, noe som betyr at omlopsmidlene bor vaere dobbelt sa store som den kortsiktige gjelden.',
      },
    },
    {
      id: 'od-2-5-oppg-2',
      type: 'exercise',
      exercise: {
        id: 'od-2-5-oppg-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er hovedformalet med et okonomisk dashbord?',
        options: [
          { id: 'a', text: 'A erstatte regnskapet og arsrapporten', isCorrect: false },
          { id: 'b', text: 'A gi en rask, visuell oversikt over virksomhetens viktigste nokkeltall', isCorrect: true },
          { id: 'c', text: 'A beregne skatten bedriften skylder', isCorrect: false },
          { id: 'd', text: 'A lage detaljerte budsjetter for neste ar', isCorrect: false },
        ],
        solution: 'Et dashbord gir ledelsen en rask, visuell oversikt over de viktigste nokkeltallene og KPIene. Det erstatter ikke regnskapet, men gjor informasjonen tilgjengelig og forstaelig slik at ledelsen raskt kan se om virksomheten er pa rett kurs og reagere pa avvik.',
      },
    },
    {
      id: 'od-2-5-oppg-3',
      type: 'exercise',
      exercise: {
        id: 'od-2-5-oppg-3',
        number: '3',
        type: 'classic',
        task: 'Et selskap har folgende tall: Driftsinntekter 5 000 000 kr, driftsresultat 400 000 kr, arsresultat 280 000 kr, egenkapital 2 000 000 kr, totalkapital 4 000 000 kr, omlopsmidler 1 800 000 kr, kortsiktig gjeld 1 200 000 kr, varelager 600 000 kr. Beregn driftsmargin, egenkapitalrentabilitet, egenkapitalandel, likviditetsgrad 1 og likviditetsgrad 2. Vurder selskapets okonomiske situasjon.',
        hints: [
          'Bruk formlene fra definisjonsblokken.',
          'Sammenlign med anbefalte verdier for hvert nokkeltall.',
          'Gi en helhetsvurdering til slutt.',
        ],
        solution: 'Driftsmargin: 400 000 / 5 000 000 x 100 = 8,0 %. Egenkapitalrentabilitet: 280 000 / 2 000 000 x 100 = 14,0 %. Egenkapitalandel: 2 000 000 / 4 000 000 x 100 = 50 %. Likviditetsgrad 1: 1 800 000 / 1 200 000 = 1,50. Likviditetsgrad 2: (1 800 000 - 600 000) / 1 200 000 = 1,00. Vurdering: Selskapet har god soliditet (50 % egenkapitalandel) og tilfredsstillende lonnsomhet (14 % egenkapitalrentabilitet). Likviditeten er akseptabel men ikke optimal - likviditetsgrad 1 er under anbefalt 2,0, og likviditetsgrad 2 er akkurat pa grensen. Selskapet bor vurdere tiltak for a forbedre likviditeten, for eksempel raskere innkreving av kundefordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-5-oppg-4',
      type: 'exercise',
      exercise: {
        id: 'od-2-5-oppg-4',
        number: '4',
        type: 'classic',
        task: 'Design et dashbord for styret i en treningskjede med 10 sentre. Beskriv hvilke nokkeltall du vil inkludere, hvordan de skal visualiseres, og hvorfor hvert nokkeltall er relevant for styrets beslutninger.',
        hints: [
          'Styret trenger overordnet informasjon, ikke detaljer per senter.',
          'Tenk pa bade finansielle og operasjonelle nokkeltall.',
          'Inkluder trender og sammenligninger.',
        ],
        solution: 'Forslag til styre-dashbord: 1) Total omsetning vs. budsjett (stolpediagram) - viser om kjeden nar sine inntektsmal. 2) Driftsresultat per senter (rangert soylediagram) - identifiserer beste og darligste sentre. 3) Medlemsutvikling siste 12 maneder (linjediagram) - viser veksttrender. 4) Kundefrafall (churn rate) per maned (linjediagram med trafikklys) - kritisk for abonnementsbasert virksomhet. 5) Gjennomsnittlig inntekt per medlem (KPI med gauge) - maler verdi per kunde. 6) Likviditetsoversikt (kassebeholdning per maned) - sikrer betalingsevne. 7) NPS-score (Net Promoter Score) - maler kundetilfredshet. 8) Sykefravaeersprosent for hele kjeden - operasjonell risikofaktor. Hvert element gir styret innsikt i ulike aspekter av virksomheten og grunnlag for strategiske beslutninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-5-oppg-5',
      type: 'exercise',
      exercise: {
        id: 'od-2-5-oppg-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom deskriptiv, diagnostisk, prediktiv og preskriptiv rapportering. Gi et praktisk eksempel pa hver type i konteksten av en nettbutikk.',
        hints: [
          'Tenk pa hva, hvorfor, hva neste og hva bor vi gjore.',
          'Bruk et konkret scenario, for eksempel at salget har gatt ned.',
        ],
        solution: 'Deskriptiv: "Salget i mars var 15 % lavere enn i mars i fjor." (Hva skjedde?) Diagnostisk: "Nedgangen skyldtes at Google Ads-kampanjen ble stoppet og at en viktig leverandor hadde leveringsproblemer." (Hvorfor skjedde det?) Prediktiv: "Basert pa trenden og planlagte kampanjer forventer vi at salget i april vil vaere 5 % under fjorarets niva." (Hva kommer til a skje?) Preskriptiv: "Vi anbefaler a oke Google Ads-budsjettet med 30 % i april, diversifisere leverandorbasen og lansere en kampanje for a gjenvinne tapte kunder." (Hva bor vi gjore?) Jo hoyere niva, jo mer avansert analyse kreves, men ogsa jo mer verdifull er informasjonen for beslutningsstotte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'od-2-5-oppg-6',
      type: 'exercise',
      exercise: {
        id: 'od-2-5-oppg-6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvordan digitalisering har endret okonomisk rapportering de siste arene. Hvilke muligheter og utfordringer gir nye teknologier som kunstig intelligens og sanntidsdata for okonomi- og driftsledelse?',
        hints: [
          'Tenk pa hastighet, presisjon og tilgjengelighet av informasjon.',
          'Vurder bade fordeler og potensielle risikoer.',
          'Tenk pa hva dette betyr for rollen til en okonom i en bedrift.',
        ],
        solution: 'Muligheter: 1) Sanntidsrapportering gjor at ledelsen kan reagere umiddelbart pa endringer. 2) AI kan identifisere monstre og avvik som mennesker overser, og gi automatiske varsler. 3) Automatisering av rutinerapporter frigjor tid til analyse og strategi. 4) Skybaserte losninger gir tilgang til data fra alle steder. 5) Prediktive modeller kan gi bedre prognoser. Utfordringer: 1) Datakvalitet - automatiske rapporter er bare sa gode som dataene de baseres pa. 2) Kompetansebehov - ansatte ma laere a bruke nye verktoy og tolke resultater. 3) Informasjonsoverbelastning - mer data betyr ikke alltid bedre beslutninger. 4) Personvern og datasikkerhet ma ivaretas. 5) Risiko for overtillit til automatiske systemer uten kritisk vurdering. Okonomens rolle endres fra a produsere tall til a analysere, tolke og gi handlingsrettede anbefalinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i seksjon 2
// ============================================================================

export const OKONOMI_DRIFT_DEL2_CHAPTERS = [
  CHAPTER_OKONOMI_DRIFT_2_1,
  CHAPTER_OKONOMI_DRIFT_2_2,
  CHAPTER_OKONOMI_DRIFT_2_3,
  CHAPTER_OKONOMI_DRIFT_2_4,
  CHAPTER_OKONOMI_DRIFT_2_5,
];
