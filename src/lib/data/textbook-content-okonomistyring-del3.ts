/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomistyring (VG2) - Del 3
 * Seksjon 3: Budsjettering
 * Følger LK20 læreplan (NOK02-03)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Hva er budsjettering?
// ============================================================================

const CHAPTER_OKONOMISTYRING_3_1: TextbookChapter = {
  id: 'oks-3-1',
  title: 'Hva er budsjettering?',
  subject: 'okonomistyring',
  gradeLevel: 'VG2',
  estimatedTime: '20 minutter',
  curriculum: 'LK20',
  content: [
    {
      id: 'oks-3-1-intro',
      type: 'text',
      title: 'Introduksjon',
      content: `Et budsjett er en økonomisk plan for en fremtidig periode, vanligvis ett år. Budsjettering handler om å planlegge inntekter og kostnader, og er et av de viktigste styringsverktøyene i en virksomhet.

Mens regnskapet viser hva som har skjedd (historiske tall), viser budsjettet hva virksomheten forventer og planlegger skal skje fremover. Dette gjør budsjettering til et fremtidsrettet styringsverktøy.`,
    },
    {
      id: 'oks-3-1-formal',
      type: 'text',
      title: 'Formål med budsjettering',
      content: `Budsjettering tjener flere viktige formål i en virksomhet:

**Planlegging:** Budsjettet tvinger ledelsen til å tenke igjennom virksomhetens mål og strategier for kommende periode. Hvor mye skal vi selge? Hvilke kostnader må vi regne med?

**Koordinering:** Forskjellige avdelinger må samarbeide om budsjettet. Salgsavdelingen må koordinere med produksjon, som igjen må koordinere med innkjøp.

**Motivasjon:** Et budsjett gir ansatte konkrete mål å jobbe mot. Når salgsavdelingen har et budsjettert salgsmål på 5 millioner kroner, blir det et klart mål å strekke seg etter.

**Kontroll:** Ved å sammenligne faktiske tall med budsjetterte tall kan ledelsen oppdage avvik og sette inn tiltak. Hvis kostnadene er 15% høyere enn budsjettert, må noe gjøres.

**Ressursfordeling:** Budsjettet viser hvordan virksomhetens begrensede ressurser skal fordeles mellom ulike formål.`,
    },
    {
      id: 'oks-3-1-typer',
      type: 'text',
      title: 'Typer budsjetter',
      content: `Virksomheter bruker flere typer budsjetter for forskjellige formål:

**Resultatbudsjett** viser planlagte inntekter og kostnader, og det budsjetterte resultatet (overskudd eller underskudd). Dette er den mest brukte budsjettformen.

**Likviditetsbudsjett** viser planlagte inn- og utbetalinger måned for måned. Dette sikrer at virksomheten til enhver tid har nok kontanter til å betale regningene sine.

**Investeringsbudsjett** viser planlagte investeringer i varige driftsmidler som maskiner, utstyr og bygg.

**Finansbudsjett** viser hvordan virksomheten planlegger å finansiere driften og investeringene, for eksempel gjennom lån eller egenkapitaltilførsel.

I dette kapittelet skal vi fokusere på resultatbudsjett og likviditetsbudsjett, som er de viktigste budsjettene for de fleste virksomheter.`,
    },
    {
      id: 'oks-3-1-example',
      type: 'example',
      title: 'Eksempel: Hvorfor budsjett?',
      content: `Kari driver nettbutikken "GadgetGalleriet" som selger elektronikk. I 2023 hadde hun et overskudd på 280 000 kr. Hun tenker: "Det går jo bra, jeg trenger ikke budsjett!"

Men i januar 2024 kjøper hun et stort varelager for 500 000 kr fordi leverandøren har tilbud. I februar får hun en stor nettbankkreditt med rente. I mars må hun be om betalingsutsettelse hos leverandører fordi hun ikke har penger til å betale fakturaene.

Hva gikk galt? Kari hadde ikke laget et likviditetsbudsjett. Hun visste ikke at de fleste kundene betaler i mars-april (skattepengeperioden), mens hun måtte betale for varene allerede i januar. Med et budsjett kunne hun ha planlagt innkjøpene bedre, eller sørget for å ha nok buffer på konto.

Fra 2024 lager Kari både resultatbudsjett og likviditetsbudsjett. Nå vet hun når pengene kommer inn, og kan planlegge innkjøp og andre kostnader deretter.`,
    },
    {
      id: 'oks-3-1-prosess',
      type: 'text',
      title: 'Budsjettprosessen',
      content: `Utarbeidelse av budsjett følger vanligvis denne prosessen:

**1. Fastsette mål og strategier:** Ledelsen bestemmer hva virksomheten skal oppnå neste år. Skal vi vokse? Fokusere på lønnsomhet? Ekspandere til nye markeder?

**2. Lage salgsbudsjett:** Salgsbudsjettet er utgangspunktet. Hvor mye tror vi at vi selger? Dette påvirker alle andre budsjetter.

**3. Budsjettere kostnader:** Basert på salgsbudsjettet beregnes nødvendige kostnader. Hvis vi skal selge 1000 enheter, hvor mye må vi kjøpe inn? Hvor mange ansatte trenger vi?

**4. Sammenstille budsjettet:** Alle delbudsjetter settes sammen til et samlet resultatbudsjett og likviditetsbudsjett.

**5. Godkjenne budsjettet:** Ledelsen (eller styret) godkjenner det endelige budsjettet.

**6. Fordele ansvar:** Ulike avdelinger får ansvar for å nå sine deler av budsjettet.

**7. Oppfølging:** Underveis i året sammenlignes faktiske tall med budsjett, og man justerer ved behov.

Mange virksomheter starter budsjettprosessen i september-oktober for neste års budsjett.`,
    },
    {
      id: 'oks-3-1-ex1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hva er hovedforskjellen mellom et budsjett og et regnskap?',
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      options: [
        'Budsjettet viser hva som har skjedd, regnskapet viser fremtidsplaner',
        'Budsjettet viser fremtidsplaner, regnskapet viser hva som har skjedd',
        'Det er ingen forskjell, begge viser historiske tall',
        'Budsjettet er kun for store bedrifter, regnskapet for alle',
      ],
      correctAnswer: 1,
      explanation: 'Budsjettet er fremtidsrettet og viser planlagte tall, mens regnskapet er historisk og viser faktiske tall for perioder som har vært.',
    },
    {
      id: 'oks-3-1-ex2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'Hvilke av disse er viktige formål med budsjettering? (Flere kan være riktige)',
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'classic',
      solution: `Viktige formål med budsjettering:
- **Planlegging:** Hjelper virksomheten å planlegge fremtidig drift
- **Koordinering:** Sikrer samarbeid mellom avdelinger
- **Motivasjon:** Gir ansatte konkrete mål
- **Kontroll:** Muliggjør sammenligning av faktiske tall mot budsjett
- **Ressursfordeling:** Viser hvordan ressurser skal brukes

Alle disse formålene er viktige for god økonomistyring.`,
    },
    {
      id: 'oks-3-1-ex3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Hvilket budsjett viser om virksomheten har nok penger til å betale regningene sine måned for måned?',
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      options: [
        'Resultatbudsjett',
        'Likviditetsbudsjett',
        'Investeringsbudsjett',
        'Finansbudsjett',
      ],
      correctAnswer: 1,
      explanation: 'Likviditetsbudsjettet viser inn- og utbetalinger og sikrer at virksomheten har tilstrekkelig likviditet (kontanter) til enhver tid.',
    },
    {
      id: 'oks-3-1-ex4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'En bedrift starter budsjettprosessen i oktober for neste års budsjett. Hvilket budsjett bør normalt lages først, og hvorfor?',
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'classic',
      solution: `**Salgsbudsjettet** bør lages først.

Begrunnelse:
Salgsbudsjettet er utgangspunktet for alle andre budsjetter fordi:
- Salgsvolumet bestemmer hvor mye som må produseres eller kjøpes inn
- Salget bestemmer hvor mange ansatte som trengs
- Inntektene fra salg bestemmer hvor mye virksomheten har å bruke på kostnader
- Andre budsjetter (innkjøp, bemanning, investering) avhenger av salgsprognosene

Eksempel: Hvis budsjettert salg er 10 000 enheter, må innkjøpsbudsjettet dekke råvarer til 10 000 enheter, og personalbudsjettet må sikre nok ansatte til å håndtere denne produksjonen/omsetningen.`,
    },
    {
      id: 'oks-3-1-ex5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'En liten bedrift hadde disse tallene i fjor: Inntekter 800 000 kr, kostnader 720 000 kr, resultat 80 000 kr overskudd. Eieren sier: "Vi gikk med overskudd, så vi trenger ikke budsjett." Forklar hvorfor bedriften likevel bør lage budsjett for neste år.',
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'classic',
      solution: `Bedriften bør lage budsjett selv om de gikk med overskudd, fordi:

**Planlegging:**
- Vil forholdene være like neste år? Kanskje kommer nye konkurrenter, eller kostnadene øker?
- Budsjettet tvinger eieren til å tenke igjennom fremtidsplaner

**Likviditetsstyring:**
- Et regnskapsmessig overskudd betyr ikke nødvendigvis god likviditet
- Uten likviditetsbudsjett kan bedriften få betalingsproblemer

**Vekstmuligheter:**
- Med budsjett kan bedriften planlegge investeringer eller utvidelser
- Banker krever ofte budsjett ved lånesøknader

**Kostkontroll:**
- Budsjett gjør det lettere å oppdage hvis kostnadene løper løpsk
- Man kan sammenligne faktiske tall mot planlagte tall hver måned

**Motivasjon:**
- Konkrete mål gir retning for arbeidet

Eksempel: Selv om du består eksamen, lager du fortsatt en plan for neste år!`,
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-3-1-ex6',
      type: 'exercise',
      title: 'Oppgave 6 - Samleoppgave',
      content: 'Du skal starte en nettbutikk som selger treningsutstyr. Beskriv hvordan du ville brukt de fire viktigste budsjettformålene (planlegging, koordinering, motivasjon, kontroll) i oppstartsfasen og første driftsår.',
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**Planlegging:**
- Lage salgsbudsjett basert på markedsundersøkelser: Hvor mange treningsinteresserte når vi?
- Beregne oppstartskostnader: Nettside, innkjøp av første varelager, markedsføring
- Planlegge måned-for-måned første året, siden vi ikke har historikk

**Koordinering:**
- Koordinere innkjøp med forventet salg: Ikke kjøpe for mye lager før vi vet hva som selger
- Koordinere markedsføringsbudsjett med sesongvariasjoner: Mer annonsering i januar (nyttårsforsetter)?
- Koordinere lagerplass med leveranser

**Motivasjon:**
- Sette konkrete mål: "Selge for 50 000 kr første måned, 100 000 andre måned"
- Gi meg selv og eventuelt ansatte noe å jobbe mot
- Belønne måloppnåelse

**Kontroll:**
- Hver måned sammenligne faktisk salg mot budsjettert
- Hvis salget er lavere enn budsjett: Øke markedsføring? Justere priser?
- Hvis kostnadene er høyere enn budsjett: Finne billigere leverandører?
- Justere budsjettet basert på ny kunnskap

Alle fire funksjoner er kritiske i oppstartsfasen når man har liten erfaring og høy usikkerhet.`,
    },
    {
      id: 'oks-3-1-ex7',
      type: 'exercise',
      title: 'Oppgave 7 - Samleoppgave',
      content: 'En kafé har disse tallene fra 2023: Omsetning 1 200 000 kr, varekostnad 360 000 kr, lønnskostnader 480 000 kr, andre kostnader 280 000 kr. For 2024 planlegger eieren å øke antall åpningsdager fra 250 til 300 dager, og forventer 20% høyere daglig salg. Lønnskostnadene øker med 150 000 kr, varekostnaden er fortsatt 30% av omsetningen, andre kostnader øker med 15%. Lag et enkelt resultatbudsjett for 2024.',
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**Beregninger:**

Omsetning 2023 per dag: 1 200 000 / 250 = 4 800 kr
Omsetning 2024 per dag: 4 800 × 1,20 = 5 760 kr
Budsjettert omsetning 2024: 5 760 × 300 = **1 728 000 kr**

Varekostnad (30% av omsetning): 1 728 000 × 0,30 = **518 400 kr**

Lønnskostnader: 480 000 + 150 000 = **630 000 kr**

Andre kostnader: 280 000 × 1,15 = **322 000 kr**

**Resultatbudsjett 2024:**

| Post | Beløp |
|------|------:|
| Omsetning | 1 728 000 kr |
| Varekostnad | -518 400 kr |
| **Dekningsbidrag** | **1 209 600 kr** |
| Lønnskostnader | -630 000 kr |
| Andre kostnader | -322 000 kr |
| **Resultat før skatt** | **257 600 kr** |

Sammenlignet med 2023 (resultat: 80 000 kr) er dette en betydelig forbedring. Økte åpningsdager og høyere daglig salg gir god effekt.`,
    },
  ],
  exercises: [], // Fylles automatisk fra content
};

// ============================================================================
// Kapittel 3.2: Resultatbudsjett
// ============================================================================

const CHAPTER_OKONOMISTYRING_3_2: TextbookChapter = {
  id: 'oks-3-2',
  title: 'Resultatbudsjett',
  subject: 'okonomistyring',
  gradeLevel: 'VG2',
  estimatedTime: '25 minutter',
  curriculum: 'LK20',
  content: [
    {
      id: 'oks-3-2-intro',
      type: 'text',
      title: 'Hva er et resultatbudsjett?',
      content: `Resultatbudsjettet viser virksomhetens planlagte inntekter og kostnader for en periode, vanligvis ett år. Det er bygget opp på samme måte som resultatregnskapet, men med budsjetterte tall i stedet for faktiske tall.

Resultatbudsjettet viser:
- Hvor mye virksomheten forventer å selge (inntekter)
- Hvor mye det koster å skaffe/produsere varene (varekostnad)
- Andre driftskostnader (lønn, husleie, strøm, markedsføring osv.)
- Hvilket resultat virksomheten forventer å oppnå (overskudd eller underskudd)

Resultatbudsjettet er det mest brukte budsjettet i norske virksomheter.`,
    },
    {
      id: 'oks-3-2-oppbygging',
      type: 'text',
      title: 'Oppbygging av resultatbudsjett',
      content: `Et resultatbudsjett for en handelsvirksomhet bygges vanligvis opp slik:

$$\\begin{array}{lr}
\\text{Salgsinntekter} & \\text{XXX} \\\\
\\text{- Varekostnad} & \\text{XXX} \\\\
\\hline
\\text{= Dekningsbidrag} & \\text{XXX} \\\\
\\hline
\\text{- Lønnskostnader} & \\text{XXX} \\\\
\\text{- Lokalkostnader} & \\text{XXX} \\\\
\\text{- Markedsføringskostnader} & \\text{XXX} \\\\
\\text{- Andre driftskostnader} & \\text{XXX} \\\\
\\hline
\\text{= Driftsresultat} & \\text{XXX} \\\\
\\hline
\\text{+ Finansinntekter} & \\text{XXX} \\\\
\\text{- Finanskostnader} & \\text{XXX} \\\\
\\hline
\\text{= Resultat før skatt} & \\text{XXX} \\\\
\\hline
\\end{array}$$

Dekningsbidraget viser hvor mye som er igjen til å dekke faste kostnader etter at varekostnaden er trukket fra.`,
    },
    {
      id: 'oks-3-2-salg',
      type: 'text',
      title: 'Budsjettere salgsinntekter',
      content: `Salgsinntektene er utgangspunktet for resultatbudsjettet. Det er også den vanskeligste posten å budsjettere, fordi salget påvirkes av mange faktorer.

**Metoder for å budsjettere salg:**

**1. Historisk metode:** Bruke tidligere års salg som utgangspunkt og justere for forventede endringer.
- Eksempel: I fjor solgte vi for 2 000 000 kr. Vi forventer 10% vekst, så budsjettet blir 2 200 000 kr.

**2. Markedsbasert metode:** Analysere markedets størrelse og vår markedsandel.
- Eksempel: Markedet er 50 millioner kr, vi har 5% markedsandel = 2 500 000 kr i salg.

**3. Nedenfra-og-opp-metode:** Bygge opp salgsbudsjettet fra enkeltsalg.
- Eksempel: Vi har 3 selgere som hver selger for 60 000 kr i måneden. Årlig salg: $3 \\times 60\\,000 \\times 12 = 2\\,160\\,000$ kr.

**Faktorer som påvirker salget:**
- Prisendringer (høyere pris = lavere volum, men høyere inntekt per enhet?)
- Konkurranse (nye konkurrenter, konkurrentenes priser)
- Markedstrender (voksende eller fallende marked?)
- Sesongvariasjoner (høyere salg før jul, sommeren?)
- Markedsføringstiltak (mer annonsering = høyere salg?)`,
    },
    {
      id: 'oks-3-2-varekost',
      type: 'text',
      title: 'Budsjettere varekostnad',
      content: `Varekostnaden er kostnaden for å skaffe de varene som selges. For en handelsvirksomhet er dette innkjøpsprisen. For en produksjonsbedrift er det kostnaden for råvarer, materialer og produksjon.

**Enkel metode:** Varekostnaden beregnes ofte som en prosent av salgsinntektene.

Hvis varekostnaden historisk har vært 40% av salget, og budsjettert salg er 2 000 000 kr:
$$\\text{Varekostnad} = 2\\,000\\,000 \\times 0{,}40 = 800\\,000 \\text{ kr}$$

**Mer detaljert metode:** Beregne varekostnad per produktgruppe eller produkt.

Eksempel - Sportsbutikk:
- Løpesko: Budsjettert salg 500 000 kr, innkjøpspris 45% = 225 000 kr
- Klær: Budsjettert salg 800 000 kr, innkjøpspris 35% = 280 000 kr
- Utstyr: Budsjettert salg 700 000 kr, innkjøpspris 40% = 280 000 kr
- **Total varekostnad:** 785 000 kr

Husk at varekostnaden kan endres hvis:
- Leverandører øker prisene
- Vi får bedre innkjøpsbetingelser (volumbrabatt)
- Vi endrer produktsammensetningen (selger mer/mindre av produkter med høy/lav innkjøpsprosent)`,
    },
    {
      id: 'oks-3-2-lonnskost',
      type: 'text',
      title: 'Budsjettere lønnskostnader',
      content: `Lønnskostnadene omfatter alle kostnader knyttet til ansatte:
- Grunnlønn
- Feriepenger (12% av grunnlønn)
- Arbeidsgiveravgift (14,1% av grunnlønn + feriepenger for de fleste virksomheter)
- Pensjon
- Forsikringer
- Overtid

**Beregning av totale lønnskostnader:**

Hvis en ansatt har grunnlønn 400 000 kr:
- Grunnlønn: 400 000 kr
- Feriepenger (12%): 48 000 kr
- Grunnlag for arbeidsgiveravgift: 448 000 kr
- Arbeidsgiveravgift (14,1%): 63 168 kr
- **Total lønnskostnad:** 511 168 kr

Som tommelfingerregel er totale lønnskostnader ca. 27-30% høyere enn grunnlønnen.

**Ved budsjettere lønnskostnader må man ta hensyn til:**
- Planlagte nyansettelser
- Forventede lønnsoppgjør (vanligvis 3-4% årlig)
- Endringer i bemanning
- Bonusordninger
- Sykefravær (hvis virksomheten dekker dette)`,
    },
    {
      id: 'oks-3-2-andre',
      type: 'text',
      title: 'Andre driftskostnader',
      content: `Andre driftskostnader omfatter alle kostnader utenom varekostnad og lønn:

**Lokalkostnader:**
- Husleie
- Strøm og oppvarming
- Renhold
- Vedlikehold

**Markedsføringskostnader:**
- Annonsering (Google, Facebook, aviser)
- Nettsider
- Kataloger og brosjyrer

**Administrasjonskostnader:**
- Kontorrekvisita
- IT-kostnader (programvare, nettsky)
- Telefon og internett
- Regnskapshjelp
- Forsikringer

**Andre kostnader:**
- Avskrivninger på utstyr
- Vedlikehold av maskiner
- Reisekostnader
- Kursdeltakelse

Mange av disse kostnadene er **faste** (husleie endres ikke med salget), mens noen er **variable** (markedsføring kan økes/reduseres).

Ved budsjettere disse kostnadene bruker man ofte tidligere års tall som utgangspunkt, justert for:
- Forventede prisøkninger
- Planlagte endringer (skal vi annonsere mer? Skifte lokaler?)`,
    },
    {
      id: 'oks-3-2-example',
      type: 'example',
      title: 'Eksempel: Komplett resultatbudsjett',
      content: `**"Sportiv AS" - Resultatbudsjett 2024**

Sportiv AS selger sportsklær. De lager budsjett for 2024 basert på disse forutsetningene:
- Forventet salg: 3 500 000 kr (15% økning fra 2023)
- Varekostnad: 38% av salget
- 2 heltidsansatte à 420 000 kr i grunnlønn
- 1 deltidsansatt 180 000 kr i grunnlønn
- Husleie: 180 000 kr/år
- Markedsføring: 140 000 kr/år
- Andre kostnader: 95 000 kr/år
- Rentekostnader på lån: 25 000 kr/år

**Beregninger:**

Varekostnad: $3\\,500\\,000 \\times 0{,}38 = 1\\,330\\,000$ kr

Lønnskostnader:
- Grunnlønn totalt: 420 000 + 420 000 + 180 000 = 1 020 000 kr
- Feriepenger (12%): 122 400 kr
- Arbeidsgiveravgift (14,1% av 1 142 400): 161 078 kr
- **Total lønn:** 1 303 478 kr

**Resultatbudsjett 2024:**

| Post | Beløp |
|------|------:|
| Salgsinntekter | 3 500 000 kr |
| Varekostnad | -1 330 000 kr |
| **Dekningsbidrag** | **2 170 000 kr** |
| Lønnskostnader | -1 303 478 kr |
| Lokalkostnader | -180 000 kr |
| Markedsføring | -140 000 kr |
| Andre driftskostnader | -95 000 kr |
| **Driftsresultat** | **451 522 kr** |
| Rentekostnader | -25 000 kr |
| **Resultat før skatt** | **426 522 kr** |

Dekningsbidragsprosent: $(2\\,170\\,000 / 3\\,500\\,000) \\times 100\\% = 62\\%$

Resultatgrad: $(426\\,522 / 3\\,500\\,000) \\times 100\\% = 12{,}2\\%$`,
    },
    {
      id: 'oks-3-2-ex1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'En butikk budsjetterer med salg på 1 800 000 kr. Varekostnaden er historisk 42% av salget. Hva blir budsjettert varekostnad?',
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      options: [
        '720 000 kr',
        '756 000 kr',
        '820 000 kr',
        '980 000 kr',
      ],
      correctAnswer: 1,
      explanation: 'Varekostnad = 1 800 000 × 0,42 = 756 000 kr.',
    },
    {
      id: 'oks-3-2-ex2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'En ansatt har grunnlønn 360 000 kr. Beregn total lønnskostnad inkludert feriepenger (12%) og arbeidsgiveravgift (14,1%).',
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'classic',
      solution: `**Beregning:**

Grunnlønn: 360 000 kr
Feriepenger (12%): 360 000 × 0,12 = 43 200 kr
Grunnlag for arbeidsgiveravgift: 360 000 + 43 200 = 403 200 kr
Arbeidsgiveravgift (14,1%): 403 200 × 0,141 = 56 851 kr

**Total lønnskostnad:** 360 000 + 43 200 + 56 851 = **460 051 kr**

Alternativ sjekk: Total lønnskostnad er ca. 1,278 × grunnlønn = 360 000 × 1,278 ≈ 460 000 kr ✓`,
    },
    {
      id: 'oks-3-2-ex3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Hva er dekningsbidraget i et resultatbudsjett?',
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      options: [
        'Salgsinntekter minus alle kostnader',
        'Salgsinntekter minus varekostnad',
        'Salgsinntekter minus lønnskostnader',
        'Driftsresultat pluss finansposter',
      ],
      correctAnswer: 1,
      explanation: 'Dekningsbidraget er salgsinntekter minus varekostnad. Det viser hvor mye som er igjen til å dekke faste kostnader og gi overskudd.',
    },
    {
      id: 'oks-3-2-ex4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: `En klesbutikk har disse budsjetterte tallene for 2024:
- Salg kjoler: 450 000 kr (innkjøpspris 40%)
- Salg skjorter: 320 000 kr (innkjøpspris 35%)
- Salg bukser: 380 000 kr (innkjøpspris 38%)

Beregn total budsjettert varekostnad.`,
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'classic',
      solution: `**Beregning per produktgruppe:**

Kjoler: 450 000 × 0,40 = 180 000 kr
Skjorter: 320 000 × 0,35 = 112 000 kr
Bukser: 380 000 × 0,38 = 144 400 kr

**Total budsjettert varekostnad:** 180 000 + 112 000 + 144 400 = **436 400 kr**

Totalt salg: 450 000 + 320 000 + 380 000 = 1 150 000 kr
Gjennomsnittlig varekostnad-prosent: 436 400 / 1 150 000 = 37,95%`,
    },
    {
      id: 'oks-3-2-ex5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: `En bedrift lager budsjett for 2024. De har disse opplysningene:
- Budsjettert salg: 2 400 000 kr
- Varekostnad: 35% av salg
- 2 ansatte med grunnlønn 380 000 kr hver
- Husleie: 12 000 kr/måned
- Markedsføring: 85 000 kr/år
- Andre kostnader: 120 000 kr/år

Lag et forenklet resultatbudsjett (ignorer finansposter). Husk feriepenger 12% og arbeidsgiveravgift 14,1%.`,
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**Beregninger:**

Varekostnad: 2 400 000 × 0,35 = 840 000 kr

Lønnskostnader:
- Grunnlønn: 2 × 380 000 = 760 000 kr
- Feriepenger (12%): 760 000 × 0,12 = 91 200 kr
- Grunnlag AG: 760 000 + 91 200 = 851 200 kr
- Arbeidsgiveravgift (14,1%): 851 200 × 0,141 = 120 019 kr
- Total lønn: 760 000 + 91 200 + 120 019 = 971 219 kr

Husleie: 12 000 × 12 = 144 000 kr

**Resultatbudsjett 2024:**

| Post | Beløp |
|------|------:|
| Salgsinntekter | 2 400 000 kr |
| Varekostnad | -840 000 kr |
| **Dekningsbidrag** | **1 560 000 kr** |
| Lønnskostnader | -971 219 kr |
| Husleie | -144 000 kr |
| Markedsføring | -85 000 kr |
| Andre kostnader | -120 000 kr |
| **Driftsresultat** | **239 781 kr** |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-3-2-ex6',
      type: 'exercise',
      title: 'Oppgave 6 - Samleoppgave',
      content: `"MatGlede AS" driver matbutikk. I 2023 hadde de omsetning 4 200 000 kr, varekostnad 1 680 000 kr, lønnskostnader 1 450 000 kr, andre kostnader 780 000 kr (resultat: 290 000 kr).

For 2024 planlegger de:
- Omsetningen øker 12% (flere kunder)
- Varekostnadprosenten reduseres fra 40% til 38% (bedre innkjøpsavtaler)
- En ny ansatt ansettes med grunnlønn 340 000 kr fra 1. januar
- Eksisterende lønnskostnader øker 4% (lønnsoppgjør)
- Andre kostnader øker 6% (generell prisstigning)

Lag resultatbudsjett for 2024 og sammenlign med 2023.`,
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**Beregninger for 2024:**

Omsetning: 4 200 000 × 1,12 = **4 704 000 kr**

Varekostnad (38%): 4 704 000 × 0,38 = **1 787 520 kr**

Lønnskostnader:
- Eksisterende: 1 450 000 × 1,04 = 1 508 000 kr
- Ny ansatt, grunnlønn: 340 000 kr
- Feriepenger (12%): 40 800 kr
- Arbeidsgiveravgift (14,1% av 380 800): 53 693 kr
- Total ny ansatt: 434 493 kr
- **Total lønn 2024:** 1 508 000 + 434 493 = **1 942 493 kr**

Andre kostnader: 780 000 × 1,06 = **826 800 kr**

**Resultatbudsjett 2024:**

| Post | 2024 | 2023 | Endring |
|------|-----:|-----:|--------:|
| Omsetning | 4 704 000 | 4 200 000 | +504 000 |
| Varekostnad | -1 787 520 | -1 680 000 | -107 520 |
| **Dekningsbidrag** | **2 916 480** | **2 520 000** | **+396 480** |
| Lønnskostnader | -1 942 493 | -1 450 000 | -492 493 |
| Andre kostnader | -826 800 | -780 000 | -46 800 |
| **Resultat** | **147 187** | **290 000** | **-142 813** |

**Analyse:**
- Omsetningen øker med 12% (positivt)
- Dekningsbidraget øker med 396 480 kr takket være høyere salg og bedre varekostnadprosent
- Men resultatet synker med 143 000 kr på grunn av høyere lønnskostnader
- Den nye ansatte koster 434 000 kr, men gir kanskje ikke full inntektseffekt første året
- Bedriften bør vurdere om nyansettelsen er nødvendig nå`,
    },
    {
      id: 'oks-3-2-ex7',
      type: 'exercise',
      title: 'Oppgave 7 - Samleoppgave',
      content: `Du skal starte en enkel nettbutikk som selger designede t-skjorter. Basert på markedsundersøkelse og konkurrentanalyse estimerer du:
- Salgspris per t-skjorte: 299 kr
- Innkjøpspris per t-skjorte: 120 kr
- Første år: Salg av 800 t-skjorter

Andre kostnader første år:
- Nettside og webhotell: 15 000 kr
- Markedsføring (Facebook/Instagram): 60 000 kr
- Frakt og emballasje: 35 kr per solgt t-skjorte
- Diverse kostnader: 12 000 kr

Du tar ikke ut lønn første året (driver ved siden av annen jobb).

a) Lag resultatbudsjett for første år
b) Hvor mange t-skjorter må du selge for å gå i null? (Break-even)`,
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**a) Resultatbudsjett første år:**

Salgsinntekter: 800 × 299 = **239 200 kr**

Variable kostnader:
- Innkjøp t-skjorter: 800 × 120 = 96 000 kr
- Frakt og emballasje: 800 × 35 = 28 000 kr
- **Sum variable kostnader:** 124 000 kr

Faste kostnader:
- Nettside: 15 000 kr
- Markedsføring: 60 000 kr
- Diverse: 12 000 kr
- **Sum faste kostnader:** 87 000 kr

**Resultatbudsjett:**

| Post | Beløp |
|------|------:|
| Salgsinntekter | 239 200 kr |
| Variable kostnader | -124 000 kr |
| **Dekningsbidrag** | **115 200 kr** |
| Faste kostnader | -87 000 kr |
| **Resultat** | **28 200 kr** |

**b) Break-even analyse:**

Dekningsbidrag per t-skjorte: 299 - 120 - 35 = 144 kr

Break-even volum: Faste kostnader / DB per enhet
= 87 000 / 144 = 604,17 → **605 t-skjorter**

**Svar:** Du må selge minst 605 t-skjorter for å gå i null. Med budsjettert salg på 800 stykker har du en sikkerhetsmargin på 195 t-skjorter (24%).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Likviditetsbudsjett
// ============================================================================

const CHAPTER_OKONOMISTYRING_3_3: TextbookChapter = {
  id: 'oks-3-3',
  title: 'Likviditetsbudsjett',
  subject: 'okonomistyring',
  gradeLevel: 'VG2',
  estimatedTime: '25 minutter',
  curriculum: 'LK20',
  content: [
    {
      id: 'oks-3-3-intro',
      type: 'text',
      title: 'Hva er et likviditetsbudsjett?',
      content: `Et likviditetsbudsjett viser når pengene kommer inn og ut av virksomheten. Mens resultatbudsjettet viser planlagt overskudd, viser likviditetsbudsjettet om virksomheten har nok kontanter til å betale regningene sine.

En virksomhet kan ha et budsjettert overskudd i resultatbudsjettet, men likevel få likviditetsproblemer hvis:
- Kundene betaler sent (lang kredittid)
- Man må betale leverandører raskt (kort kredittid)
- Store investeringer må betales kontant
- Eieren tar ut høye privatuttak

Likviditetsbudsjettet lages måned for måned (eller uke for uke) for å sikre at virksomheten alltid har nok penger på konto.`,
    },
    {
      id: 'oks-3-3-forskjell',
      type: 'text',
      title: 'Forskjell mellom resultat og likviditet',
      content: `Det er viktig å forstå forskjellen mellom **regnskapsmessige størrelser** (i resultatbudsjettet) og **kontantstrømmer** (i likviditetsbudsjettet):

**Resultatbudsjett:**
- Viser inntekter når de er **opptjent** (når kunden får varen)
- Viser kostnader når de er **pådratt** (når varen leveres til deg)

**Likviditetsbudsjett:**
- Viser innbetalinger når pengene faktisk **kommer inn på kontoen**
- Viser utbetalinger når pengene faktisk **går ut av kontoen**

**Eksempel:**
En bedrift selger varer for 100 000 kr i januar med 30 dagers kreditt.
- I resultatbudsjettet: Inntekt 100 000 kr i januar
- I likviditetsbudsjettet: Innbetaling 100 000 kr i februar

**Poster som påvirker resultat, men IKKE likviditet:**
- Avskrivninger (regnskapsmessig kostnad, ingen utbetaling)
- Varelagerendringer (varer kan være kjøpt tidligere)

**Poster som påvirker likviditet, men IKKE resultat:**
- Investeringer i maskiner (utbetaling nå, avskrives over mange år)
- Lånopptak og -nedbetalinger
- Privatuttak fra eier`,
    },
    {
      id: 'oks-3-3-oppbygging',
      type: 'text',
      title: 'Oppbygging av likviditetsbudsjett',
      content: `Et likviditetsbudsjett bygges vanligvis opp slik for hver måned:

$$\\begin{array}{lr}
\\text{Innbetalinger:} & \\\\
\\text{Kundeinnbetalinger} & \\text{XXX} \\\\
\\text{Andre innbetalinger} & \\text{XXX} \\\\
\\hline
\\text{Sum innbetalinger (A)} & \\text{XXX} \\\\
\\hline
\\text{Utbetalinger:} & \\\\
\\text{Varekjøp} & \\text{XXX} \\\\
\\text{Lønnsutbetalinger} & \\text{XXX} \\\\
\\text{Andre driftsutbetalinger} & \\text{XXX} \\\\
\\text{Investeringer} & \\text{XXX} \\\\
\\hline
\\text{Sum utbetalinger (B)} & \\text{XXX} \\\\
\\hline
\\text{Netto kontantstrøm (A - B)} & \\text{XXX} \\\\
\\text{+ Inngående likviditet} & \\text{XXX} \\\\
\\hline
\\text{= Utgående likviditet} & \\text{XXX} \\\\
\\hline
\\end{array}$$

Utgående likviditet denne måneden blir inngående likviditet neste måned.`,
    },
    {
      id: 'oks-3-3-innbetalinger',
      type: 'text',
      title: 'Budsjettere innbetalinger',
      content: `**Kundeinnbetalinger** er hovedkilden til innbetalinger. Her må man ta hensyn til betalingsbetingelser:

**Kontantsalg:** Innbetaling samme måned som salget.
- En butikk selger for 200 000 kr kontant i januar → Innbetaling 200 000 kr i januar.

**Kredittid 30 dager:** Innbetaling måneden etter salget.
- Salg i januar 200 000 kr → Innbetaling i februar 200 000 kr.

**Kredittid 60 dager:** Innbetaling to måneder etter salget.
- Salg i januar 200 000 kr → Innbetaling i mars 200 000 kr.

**Delbetalinger:** Noen kunder betaler delvis nå, delvis senere.
- Salg 100 000 kr: 40% ved levering, 60% etter 30 dager
- Januar salg 100 000 kr → Januar innbetaling 40 000 kr, februar innbetaling 60 000 kr.

**Tap på fordringer:** Noen kunder betaler aldri. Hvis historisk 2% ikke betaler, må dette tas med.

**Andre innbetalinger:**
- Forsikringsutbetalinger
- Salg av gamle driftsmidler
- Lån som tas opp
- Tilskudd fra det offentlige`,
    },
    {
      id: 'oks-3-3-utbetalinger',
      type: 'text',
      title: 'Budsjettere utbetalinger',
      content: `**Utbetalinger for varekjøp:** Når betaler vi leverandørene?

Vanlige betalingsbetingelser:
- Kontant ved levering
- 30 dagers kreditt (betaler måneden etter)
- 14 dagers kreditt (betaler i samme måned for kjøp tidlig i måneden)

**Lønnsutbetalinger:** Vanligvis utbetalt hver måned, 12 ganger i året. Feriepenger utbetales i juni (10,2% av fjorårets lønn).

**Andre driftsutbetalinger:**
- Husleie (månedlig)
- Strøm (månedlig eller kvartalsvis)
- Markedsføring (når kampanjene kjøres)
- Forsikringer (årlig eller kvartalsvis)
- Regnskapshonorar (kvartalsvis eller årlig)

**Investeringer:** Utbetales når maskinen/utstyret kjøpes og leveres.

**Låneutbetalinger:** Avdrag og renter betales etter avtale (månedlig, kvartalsvis).

**Skatt:** Forskuddsskatt betales i 5 terminer (februar, april, juni, august, oktober). Restskatt betales i mai/juni.

**Merverdiavgift (mva):** Betales hver 2. måned (mindre bedrifter) eller hver måned (større bedrifter). Mva som betales = mva på salg minus mva på kjøp.`,
    },
    {
      id: 'oks-3-3-example',
      type: 'example',
      title: 'Eksempel: Likviditetsbudsjett',
      content: `**"Moteriktig AS" - Likviditetsbudsjett januar-mars**

Moteriktig selger klær på nett. De har disse forutsetningene:

**Salg (budsjettert):**
- Januar: 180 000 kr
- Februar: 220 000 kr
- Mars: 260 000 kr
- 60% av kundene betaler kontant (samme måned), 40% med 30 dagers kreditt

**Varekjøp (budsjettert):**
- Januar: 80 000 kr
- Februar: 95 000 kr
- Mars: 110 000 kr
- Betales med 30 dagers kreditt

**Andre utbetalinger hver måned:**
- Lønn: 45 000 kr
- Husleie: 8 000 kr
- Markedsføring: 12 000 kr
- Diverse: 5 000 kr

**Inngående likviditet 1. januar: 50 000 kr**

**Beregninger:**

**Januar innbetalinger:**
- Kontantsalg januar: 180 000 × 0,60 = 108 000 kr
- Sum: 108 000 kr

**Januar utbetalinger:**
- Varekjøp desember (ikke oppgitt, anta 75 000 kr): 75 000 kr
- Lønn: 45 000 kr
- Husleie: 8 000 kr
- Markedsføring: 12 000 kr
- Diverse: 5 000 kr
- Sum: 145 000 kr

**Februar innbetalinger:**
- Kontantsalg februar: 220 000 × 0,60 = 132 000 kr
- Kredittsalg januar: 180 000 × 0,40 = 72 000 kr
- Sum: 204 000 kr

**Februar utbetalinger:**
- Varekjøp januar: 80 000 kr
- Lønn: 45 000 kr
- Husleie: 8 000 kr
- Markedsføring: 12 000 kr
- Diverse: 5 000 kr
- Sum: 150 000 kr

**Mars innbetalinger:**
- Kontantsalg mars: 260 000 × 0,60 = 156 000 kr
- Kredittsalg februar: 220 000 × 0,40 = 88 000 kr
- Sum: 244 000 kr

**Mars utbetalinger:**
- Varekjøp februar: 95 000 kr
- Lønn: 45 000 kr
- Husleie: 8 000 kr
- Markedsføring: 12 000 kr
- Diverse: 5 000 kr
- Sum: 165 000 kr

**Likviditetsbudsjett:**

| Post | Januar | Februar | Mars |
|------|-------:|--------:|-----:|
| **Innbetalinger:** | | | |
| Kundeinnbetalinger | 108 000 | 204 000 | 244 000 |
| **Sum innbetalinger** | **108 000** | **204 000** | **244 000** |
| **Utbetalinger:** | | | |
| Varekjøp | 75 000 | 80 000 | 95 000 |
| Lønn | 45 000 | 45 000 | 45 000 |
| Husleie | 8 000 | 8 000 | 8 000 |
| Markedsføring | 12 000 | 12 000 | 12 000 |
| Diverse | 5 000 | 5 000 | 5 000 |
| **Sum utbetalinger** | **145 000** | **150 000** | **165 000** |
| **Netto kontantstrøm** | **-37 000** | **54 000** | **79 000** |
| Inngående likviditet | 50 000 | 13 000 | 67 000 |
| **Utgående likviditet** | **13 000** | **67 000** | **146 000** |

**Analyse:** Januar er stram (utgående likviditet bare 13 000 kr), men likviditeten bedres i februar og mars.`,
    },
    {
      id: 'oks-3-3-ex1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'En bedrift selger varer for 150 000 kr i mars med 30 dagers kreditt. Når kommer pengene inn på kontoen?',
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      options: [
        'I mars',
        'I april',
        'I mai',
        'I juni',
      ],
      correctAnswer: 1,
      explanation: 'Med 30 dagers kreditt betaler kundene måneden etter salget. Salg i mars → innbetaling i april.',
    },
    {
      id: 'oks-3-3-ex2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'Hvilke av disse postene påvirker likviditetsbudsjettet, men IKKE resultatbudsjettet?',
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'multiple-choice',
      options: [
        'Lønnskostnader',
        'Kjøp av ny maskin',
        'Varekostnad',
        'Markedsføringskostnader',
      ],
      correctAnswer: 1,
      explanation: 'Kjøp av maskin er en investering som påvirker likviditeten (utbetaling), men ikke resultatregnskapet direkte. Maskinen avskrives over tid i resultatregnskapet.',
    },
    {
      id: 'oks-3-3-ex3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: `En bedrift har disse opplysningene for april:
- Salg i april: 200 000 kr (70% kontant, 30% kreditt 30 dager)
- Salg i mars var: 180 000 kr (samme fordeling)

Beregn kundeinnbetalinger i april.`,
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'classic',
      solution: `**Kundeinnbetalinger april:**

Kontantsalg april: 200 000 × 0,70 = 140 000 kr
Kredittsalg mars (betales i april): 180 000 × 0,30 = 54 000 kr

**Sum innbetalinger april:** 140 000 + 54 000 = **194 000 kr**

Merk: Selv om salget i april er 200 000 kr, er innbetalingene bare 194 000 kr fordi 30% av aprilsalget (60 000 kr) betales først i mai.`,
    },
    {
      id: 'oks-3-3-ex4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: `En virksomhet har:
- Inngående likviditet 1. mai: 35 000 kr
- Innbetalinger mai: 185 000 kr
- Utbetalinger mai: 210 000 kr

a) Beregn utgående likviditet 31. mai
b) Hva blir inngående likviditet 1. juni?`,
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'classic',
      solution: `**a) Utgående likviditet 31. mai:**

Inngående likviditet: 35 000 kr
+ Innbetalinger: 185 000 kr
- Utbetalinger: 210 000 kr
= **Utgående likviditet: 10 000 kr**

**b) Inngående likviditet 1. juni:**

Utgående likviditet en måned blir inngående likviditet neste måned.

**Inngående likviditet 1. juni: 10 000 kr**

Merk: Likviditeten er positiv, men lav. Bedriften bør overvåke dette nøye.`,
    },
    {
      id: 'oks-3-3-ex5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: `"ServicePartner" har disse budsjetterte tallene for juni:

**Innbetalinger:**
- Kontantsalg juni: 95 000 kr
- Kredittsalg fra mai (30 dager): 78 000 kr

**Utbetalinger:**
- Varekjøp mai (betales i juni): 42 000 kr
- Lønn: 68 000 kr
- Husleie: 15 000 kr
- Diverse: 8 000 kr
- Kjøp av ny datamaskin: 12 000 kr

Inngående likviditet 1. juni: 25 000 kr

Lag likviditetsbudsjett for juni.`,
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'classic',
      solution: `**Likviditetsbudsjett juni:**

| Post | Beløp |
|------|------:|
| **Innbetalinger:** | |
| Kontantsalg juni | 95 000 kr |
| Kredittsalg mai | 78 000 kr |
| **Sum innbetalinger** | **173 000 kr** |
| **Utbetalinger:** | |
| Varekjøp | 42 000 kr |
| Lønn | 68 000 kr |
| Husleie | 15 000 kr |
| Diverse | 8 000 kr |
| Investering (datamaskin) | 12 000 kr |
| **Sum utbetalinger** | **145 000 kr** |
| **Netto kontantstrøm** | **28 000 kr** |
| Inngående likviditet | 25 000 kr |
| **Utgående likviditet** | **53 000 kr** |

Positiv kontantstrøm på 28 000 kr, og utgående likviditet er god på 53 000 kr.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-3-3-ex6',
      type: 'exercise',
      title: 'Oppgave 6 - Samleoppgave',
      content: `"TeknoHandel AS" lager likviditetsbudsjett for Q1 2024. De har disse opplysningene:

**Salg (budsjettert):**
- Januar: 320 000 kr, Februar: 380 000 kr, Mars: 420 000 kr
- 50% betaler kontant, 30% med 30 dagers kreditt, 20% med 60 dagers kreditt
- Desember 2023 salg var 280 000 kr (samme fordeling)

**Varekjøp (budsjettert):**
- Januar: 140 000 kr, Februar: 165 000 kr, Mars: 180 000 kr
- Betales med 30 dagers kreditt
- Desember 2023 kjøp: 125 000 kr

**Faste månedlige utbetalinger:**
- Lønn: 95 000 kr
- Husleie: 22 000 kr
- Andre kostnader: 18 000 kr

**Inngående likviditet 1. januar: 85 000 kr**

Lag komplett likviditetsbudsjett for januar, februar og mars.`,
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**Beregning av innbetalinger:**

**Januar:**
- Kontant jan: 320 000 × 0,50 = 160 000 kr
- 30 dager des: 280 000 × 0,30 = 84 000 kr
- 60 dager nov: (ikke oppgitt, anta 260 000): 260 000 × 0,20 = 52 000 kr
- Sum: 296 000 kr

**Februar:**
- Kontant feb: 380 000 × 0,50 = 190 000 kr
- 30 dager jan: 320 000 × 0,30 = 96 000 kr
- 60 dager des: 280 000 × 0,20 = 56 000 kr
- Sum: 342 000 kr

**Mars:**
- Kontant mars: 420 000 × 0,50 = 210 000 kr
- 30 dager feb: 380 000 × 0,30 = 114 000 kr
- 60 dager jan: 320 000 × 0,20 = 64 000 kr
- Sum: 388 000 kr

**Beregning av utbetalinger:**

Hver måned:
- Varekjøp forrige måned
- Lønn: 95 000 kr
- Husleie: 22 000 kr
- Andre: 18 000 kr

**Likviditetsbudsjett Q1 2024:**

| Post | Januar | Februar | Mars |
|------|-------:|--------:|-----:|
| **Innbetalinger** | 296 000 | 342 000 | 388 000 |
| **Utbetalinger:** | | | |
| Varekjøp | 125 000 | 140 000 | 165 000 |
| Lønn | 95 000 | 95 000 | 95 000 |
| Husleie | 22 000 | 22 000 | 22 000 |
| Andre | 18 000 | 18 000 | 18 000 |
| **Sum utbetalinger** | **260 000** | **275 000** | **300 000** |
| **Netto kontantstrøm** | **36 000** | **67 000** | **88 000** |
| Inngående likviditet | 85 000 | 121 000 | 188 000 |
| **Utgående likviditet** | **121 000** | **188 000** | **276 000** |

God likviditetsutvikling gjennom hele Q1!`,
    },
    {
      id: 'oks-3-3-ex7',
      type: 'exercise',
      title: 'Oppgave 7 - Samleoppgave',
      content: `En gründer planlegger å starte webbutikk 1. april. Hun har spart 120 000 kr som startkapital.

**Investeringer i april:**
- Nettside og design: 35 000 kr
- Første varelager: 80 000 kr (betales kontant)
- Utstyr: 15 000 kr

**Budsjett april-juni:**
- Salg: April 45 000, Mai 75 000, Juni 95 000 (80% kontant, 20% kreditt 30 dager)
- Varekjøp: April 80 000 (allerede betalt), Mai 35 000, Juni 40 000 (betales måneden etter)
- Markedsføring: 8 000 kr/måned
- Diverse kostnader: 4 000 kr/måned
- Ikke lønn (driver selv)

Lag likviditetsbudsjett for april, mai og juni. Vil gründeren klare seg med startkapitalen, eller trenger hun lån?`,
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**April:**
Innbetalinger: Kontantsalg 45 000 × 0,80 = 36 000 kr

Utbetalinger:
- Nettside: 35 000 kr
- Varelager: 80 000 kr (allerede inkludert)
- Utstyr: 15 000 kr
- Markedsføring: 8 000 kr
- Diverse: 4 000 kr
- Sum: 142 000 kr

**Mai:**
Innbetalinger:
- Kontant mai: 75 000 × 0,80 = 60 000 kr
- Kreditt april: 45 000 × 0,20 = 9 000 kr
- Sum: 69 000 kr

Utbetalinger:
- Varekjøp mai: 35 000 kr (betales i juni, ikke nå!)
- Markedsføring: 8 000 kr
- Diverse: 4 000 kr
- Sum: 12 000 kr

**Juni:**
Innbetalinger:
- Kontant juni: 95 000 × 0,80 = 76 000 kr
- Kreditt mai: 75 000 × 0,20 = 15 000 kr
- Sum: 91 000 kr

Utbetalinger:
- Varekjøp mai: 35 000 kr
- Varekjøp juni: 40 000 kr (betales i juli, ikke nå!)
- Markedsføring: 8 000 kr
- Diverse: 4 000 kr
- Sum: 47 000 kr

**Likviditetsbudsjett:**

| Post | April | Mai | Juni |
|------|------:|----:|-----:|
| Innbetalinger | 36 000 | 69 000 | 91 000 |
| Utbetalinger | 142 000 | 12 000 | 47 000 |
| **Netto** | **-106 000** | **57 000** | **44 000** |
| Inngående likviditet | 120 000 | 14 000 | 71 000 |
| **Utgående likviditet** | **14 000** | **71 000** | **115 000** |

**Konklusjon:** Gründeren klarer seg med startkapitalen! April er tøff (utgående bare 14 000 kr), men likviditeten bedres raskt. Ved slutten av juni har hun 115 000 kr på konto.

**Anbefaling:** Likviditeten i april er svært lav. Hun bør vurdere å:
- Utsette noen investeringer til mai
- Ha en trekkrettighet på 20-30 000 kr som sikkerhet
- Fase innkjøpene bedre`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Budsjettkontroll og avviksanalyse
// ============================================================================

const CHAPTER_OKONOMISTYRING_3_4: TextbookChapter = {
  id: 'oks-3-4',
  title: 'Budsjettkontroll og avviksanalyse',
  subject: 'okonomistyring',
  gradeLevel: 'VG2',
  estimatedTime: '20 minutter',
  curriculum: 'LK20',
  content: [
    {
      id: 'oks-3-4-intro',
      type: 'text',
      title: 'Hva er budsjettkontroll?',
      content: `Budsjettkontroll handler om å sammenligne de faktiske tallene med de budsjetterte tallene underveis i året. Dette er en av de viktigste funksjonene til et budsjett.

En virksomhet lager ikke budsjett bare for å ha en plan - budsjettet skal brukes aktivt for å styre virksomheten. Ved å sammenligne budsjett med faktiske tall kan ledelsen:
- Oppdage problemer tidlig
- Sette inn korrigerende tiltak
- Justere planene hvis nødvendig
- Lære hva som fungerer og ikke fungerer

Budsjettkontroll gjøres normalt hver måned eller hvert kvartal. Jo oftere, desto raskere kan man reagere på avvik.`,
    },
    {
      id: 'oks-3-4-avvik',
      type: 'text',
      title: 'Hva er et avvik?',
      content: `Et avvik er forskjellen mellom budsjettert tall og faktisk tall:

$$\\text{Avvik} = \\text{Faktisk tall} - \\text{Budsjett}$$

**Positive avvik** (gunstige):
- Høyere inntekter enn budsjettert
- Lavere kostnader enn budsjettert
- Høyere resultat enn budsjettert

**Negative avvik** (ugunstige):
- Lavere inntekter enn budsjettert
- Høyere kostnader enn budsjettert
- Lavere resultat enn budsjettert

**Eksempel:**
- Budsjettert salg: 500 000 kr
- Faktisk salg: 530 000 kr
- Avvik: +30 000 kr (positivt/gunstig)

**OBS:** For kostnader er logikken motsatt. Lavere kostnader enn budsjettert er positivt!
- Budsjettert lønnskostnad: 400 000 kr
- Faktisk lønnskostnad: 380 000 kr
- Avvik: -20 000 kr (men dette er gunstig!)

Mange bedrifter viser derfor avvik med farger: grønn for gunstig, rød for ugunstig.`,
    },
    {
      id: 'oks-3-4-typer',
      type: 'text',
      title: 'Typer avvik',
      content: `Vi skiller mellom ulike typer avvik:

**Volumavvik:** Avvik forårsaket av at vi selger mer eller mindre enn budsjettert.
- Budsjett: Selge 1000 enheter à 500 kr = 500 000 kr
- Faktisk: Solgt 1100 enheter à 500 kr = 550 000 kr
- Volumavvik: +100 enheter = +50 000 kr i inntekt

**Prisavvik:** Avvik forårsaket av at prisen er annerledes enn budsjettert.
- Budsjett: Selge 1000 enheter à 500 kr = 500 000 kr
- Faktisk: Solgt 1000 enheter à 520 kr = 520 000 kr
- Prisavvik: +20 kr per enhet × 1000 = +20 000 kr

**Kostnadsavvik:** Avvik i kostnader kan skyldes:
- Høyere/lavere aktivitet enn planlagt (produserte mer/mindre)
- Høyere/lavere priser på innsatsfaktorer (strøm, råvarer)
- Mer/mindre effektiv bruk av ressurser (svinn, produktivitet)

**Blandingsavvik:** Hvis vi selger en annen produktmiks enn planlagt (mer av produkter med lav margin, mindre av produkter med høy margin).`,
    },
    {
      id: 'oks-3-4-example',
      type: 'example',
      title: 'Eksempel: Budsjettoppfølging',
      content: `**"TrendKlær AS" - Budsjettoppfølging 1. kvartal**

De laget budsjett for Q1 (januar-mars) og sammenligner nå med faktiske tall:

| Post | Budsjett Q1 | Faktisk Q1 | Avvik | Vurdering |
|------|------------:|-----------:|------:|-----------|
| Salgsinntekter | 900 000 | 870 000 | -30 000 | Ugunstig |
| Varekostnad | -360 000 | -340 000 | +20 000 | Gunstig |
| **Dekningsbidrag** | **540 000** | **530 000** | **-10 000** | **Ugunstig** |
| Lønnskostnader | -280 000 | -290 000 | -10 000 | Ugunstig |
| Husleie | -60 000 | -60 000 | 0 | I tråd med plan |
| Markedsføring | -45 000 | -52 000 | -7 000 | Ugunstig |
| Andre kostnader | -35 000 | -33 000 | +2 000 | Gunstig |
| **Resultat** | **120 000** | **95 000** | **-25 000** | **Ugunstig** |

**Analyse:**
- Salget er 30 000 kr lavere enn budsjettert (3,3% under). Dette er det største problemet.
- Varekostnaden er lavere enn budsjettert, men det skyldes lavere salg
- Lønnskostnadene er 10 000 kr høyere enn budsjettert - hvorfor?
- Markedsføringen er 7 000 kr høyere. Ekstra markedsføring ga ikke forventet salgsøkning
- Samlet resultat 25 000 kr under budsjett (21% lavere enn planlagt)

**Korrigerende tiltak:**
- Analysere hvorfor salget er lavere: Færre kunder? Lavere gjennomsnittskjøp? Konkurranse?
- Vurdere om markedsføringsstrategien fungerer (bruker mer penger, men selger mindre)
- Sjekke hvorfor lønnskostnadene er høyere: Overtid? Flere ansatte enn planlagt?`,
    },
    {
      id: 'oks-3-4-tiltak',
      type: 'text',
      title: 'Korrigerende tiltak',
      content: `Når man oppdager avvik, må man vurdere om det kreves tiltak:

**Små avvik (1-5%):**
- Kan skyldes normale variasjoner
- Ofte ikke nødvendig med tiltak
- Fortsette å overvåke

**Moderate avvik (5-15%):**
- Krever oppmerksomhet og analyse
- Identifisere årsak
- Vurdere korrigerende tiltak
- Justere budsjett hvis forutsetningene har endret seg varig

**Store avvik (>15%):**
- Krever umiddelbare tiltak
- Grundig analyse av årsaker
- Korrigerende tiltak må iverksettes raskt
- Ofte nødvendig å revidere budsjettet

**Mulige tiltak ved negative avvik:**

**Lavere salg enn budsjett:**
- Øke markedsføringen
- Tilby kampanjer eller rabatter
- Forbedre produktene/tjenestene
- Finne nye salgskanaler
- Justere prisene

**Høyere kostnader enn budsjett:**
- Analysere hvor kostnadene er høye
- Forhandle bedre priser med leverandører
- Redusere ikke-nødvendige kostnader
- Forbedre effektiviteten
- Redusere svinn

**Viktig:** Ikke alle avvik er negative! Positive avvik (høyere salg, lavere kostnader) bør også analyseres for å forstå hva som fungerer godt.`,
    },
    {
      id: 'oks-3-4-ex1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'En bedrift budsjetterte med salg på 600 000 kr, men det faktiske salget ble 580 000 kr. Hva er avviket?',
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      options: [
        '+20 000 kr (gunstig)',
        '-20 000 kr (ugunstig)',
        '+20 000 kr (ugunstig)',
        '-20 000 kr (gunstig)',
      ],
      correctAnswer: 1,
      explanation: 'Avvik = Faktisk - Budsjett = 580 000 - 600 000 = -20 000 kr. Negativt avvik på salg er ugunstig.',
    },
    {
      id: 'oks-3-4-ex2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: 'En bedrift budsjetterte med varekostnad 240 000 kr, men faktisk varekostnad ble 225 000 kr. Er dette gunstig eller ugunstig?',
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      options: [
        'Gunstig - lavere kostnader er bra',
        'Ugunstig - avviket er negativt',
        'Nøytralt - ingen forskjell',
        'Kan ikke vurderes uten mer informasjon',
      ],
      correctAnswer: 0,
      explanation: 'Lavere kostnader enn budsjettert er gunstig for bedriften, selv om det matematiske avviket er negativt (-15 000 kr).',
    },
    {
      id: 'oks-3-4-ex3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: `En butikk har disse tallene for april:

| Post | Budsjett | Faktisk | Avvik |
|------|----------|---------|-------|
| Salg | 180 000 | 195 000 | ? |
| Varekostnad | 70 000 | 75 000 | ? |
| Lønnskostnader | 65 000 | 65 000 | ? |
| Andre kostnader | 30 000 | 28 000 | ? |
| Resultat | ? | ? | ? |

Beregn alle avvik og vurder om de er gunstige eller ugunstige.`,
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'classic',
      solution: `**Beregning av avvik:**

Salg: 195 000 - 180 000 = **+15 000 kr (gunstig)**
Varekostnad: 75 000 - 70 000 = **+5 000 kr (ugunstig)** - høyere kostnader
Lønnskostnader: 65 000 - 65 000 = **0 kr (nøytral)** - i tråd med budsjett
Andre kostnader: 28 000 - 30 000 = **-2 000 kr (gunstig)** - lavere kostnader

Budsjettert resultat: 180 000 - 70 000 - 65 000 - 30 000 = 15 000 kr
Faktisk resultat: 195 000 - 75 000 - 65 000 - 28 000 = 27 000 kr
Resultatavvik: 27 000 - 15 000 = **+12 000 kr (gunstig)**

**Oppsummering:**
- Salget er 8,3% høyere enn budsjettert (positivt)
- Varekostnaden økte, trolig på grunn av høyere salgsvolum
- Resultatet er 80% bedre enn budsjettert - svært bra!`,
    },
    {
      id: 'oks-3-4-ex4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'En bedrift budsjetterte å selge 500 enheter à 800 kr (totalt 400 000 kr). De solgte faktisk 480 enheter à 850 kr (totalt 408 000 kr). Beregn volumavvik og prisavvik.',
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**Volumavvik:**
Faktisk volum - Budsjettert volum = 480 - 500 = -20 enheter
Volumavvik = -20 × 800 kr (budsjettert pris) = **-16 000 kr (ugunstig)**

Vi solgte 20 enheter færre enn planlagt, som koster oss 16 000 kr i tapte inntekter.

**Prisavvik:**
Faktisk pris - Budsjettert pris = 850 - 800 = +50 kr per enhet
Prisavvik = +50 kr × 480 (faktisk volum) = **+24 000 kr (gunstig)**

Vi solgte til høyere pris enn planlagt, som ga oss 24 000 kr ekstra.

**Totalt avvik:**
Faktisk omsetning - Budsjettert omsetning = 408 000 - 400 000 = **+8 000 kr**

Sjekk: Volumavvik + Prisavvik = -16 000 + 24 000 = 8 000 kr ✓

**Konklusjon:** Selv om vi solgte færre enheter enn budsjettert, kompenserte høyere pris for dette og ga et positivt totalt avvik.`,
    },
    {
      id: 'oks-3-4-ex5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: `En bedrift har dette budsjettavviket for mai:
- Salg: -12% (lavere enn budsjett)
- Varekostnad: -15% (lavere enn budsjett)
- Lønnskostnader: +8% (høyere enn budsjett)
- Resultat: -35% (lavere enn budsjett)

Forklar hva som kan ha skjedd, og foreslå to konkrete tiltak.`,
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'classic',
      solution: `**Analyse av situasjonen:**

Salget er 12% lavere enn budsjettert, noe som er betydelig. Varekostnaden er også lavere (15%), noe som er naturlig når vi selger mindre. Men lønnskostnadene er 8% høyere enn budsjettert, selv om salget er lavere. Dette gir et stort negativt resultatavvik på 35%.

**Mulige årsaker:**
- Lavere kundetrafikk eller etterspørsel enn forventet
- Sesongsvingning som ikke var tatt høyde for i budsjettet
- Ny konkurranse i markedet
- Lønnskostnadene er økt (overtid? Nyansettelse som ikke var nødvendig?)
- Faste lønnskostnader fordeler seg dårligere når salget er lavt

**Forslag til tiltak:**

1. **Øke salget:**
   - Igangsette markedsføringskampanje for å trekke flere kunder
   - Tilby tidsbegrenset kampanje eller rabatter
   - Kontakte eksisterende kunder for mersalg
   - Analysere hvorfor salget er lavt og justere produkttilbudet

2. **Kontrollere lønnskostnadene:**
   - Analysere hvorfor lønnskostnadene er 8% høyere enn budsjett
   - Redusere overtid hvis mulig
   - Vurdere om alle nyansettelser var nødvendige
   - Tilpasse bemanningen til lavere aktivitetsnivå

Bedriften bør fokusere mest på å øke salget, da dette vil forbedre både inntekter og dekningsgrad.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-3-4-ex6',
      type: 'exercise',
      title: 'Oppgave 6 - Samleoppgave',
      content: `"SportGear AS" har gjennomført budsjettkontroll for 1. halvår:

| Post | Budsjett H1 | Faktisk H1 | Avvik |
|------|------------:|-----------:|------:|
| Salgsinntekter | 2 400 000 | 2 280 000 | ? |
| Varekostnad | 960 000 | 890 000 | ? |
| Dekningsbidrag | 1 440 000 | ? | ? |
| Lønnskostnader | 720 000 | 765 000 | ? |
| Lokalkostnader | 180 000 | 185 000 | ? |
| Markedsføring | 120 000 | 145 000 | ? |
| Andre kostnader | 95 000 | 88 000 | ? |
| Resultat | 325 000 | ? | ? |

a) Fyll ut alle tall og avvik
b) Beregn avvik i prosent for salg, varekostnad og resultat
c) Gjør en helhetlig vurdering og foreslå tre konkrete tiltak`,
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**a) Utfylling av tabell:**

Faktisk dekningsbidrag: 2 280 000 - 890 000 = 1 390 000 kr
Faktisk resultat: 1 390 000 - 765 000 - 185 000 - 145 000 - 88 000 = 207 000 kr

| Post | Budsjett H1 | Faktisk H1 | Avvik | Vurdering |
|------|------------:|-----------:|------:|-----------|
| Salgsinntekter | 2 400 000 | 2 280 000 | -120 000 | Ugunstig |
| Varekostnad | 960 000 | 890 000 | -70 000 | Gunstig |
| Dekningsbidrag | 1 440 000 | 1 390 000 | -50 000 | Ugunstig |
| Lønnskostnader | 720 000 | 765 000 | +45 000 | Ugunstig |
| Lokalkostnader | 180 000 | 185 000 | +5 000 | Ugunstig |
| Markedsføring | 120 000 | 145 000 | +25 000 | Ugunstig |
| Andre kostnader | 95 000 | 88 000 | -7 000 | Gunstig |
| **Resultat** | **325 000** | **207 000** | **-118 000** | **Ugunstig** |

**b) Prosentvis avvik:**

Salg: -120 000 / 2 400 000 × 100% = **-5,0%**
Varekostnad: -70 000 / 960 000 × 100% = **-7,3%** (gunstig)
Resultat: -118 000 / 325 000 × 100% = **-36,3%**

**c) Helhetlig vurdering:**

Situasjonen er alvorlig:
- Salget er 5% under budsjett, som er moderat negativt
- Varekostnaden er lavere enn budsjett (7,3%), delvis fordi vi solgte mindre
- Dekningsbidraget er 50 000 kr lavere enn planlagt
- Det store problemet er kostnadssiden: Lønn (+45k), markedsføring (+25k) og lokalkostnader (+5k) er alle høyere enn budsjett
- Resultatet er 36% lavere enn budsjettert - dette er kritisk!

**Tre konkrete tiltak:**

1. **Øke salget (høyeste prioritet):**
   - Analyse: Hvorfor er salget 5% lavere? Færre kunder? Lavere kjøpsbeløp?
   - Iverksett målrettet salgskampanje innen aktive kategorier
   - Vurder om markedsføringsbudsjettet på 145 000 kr gir god nok effekt
   - Mål: Øke salget med 8-10% i H2 for å ta igjen H1

2. **Redusere lønnskostnadene:**
   - Undersøk hvorfor lønnskostnadene er 6,3% høyere enn budsjett (45 000 kr)
   - Er det nyansettelser, overtid eller lønnsøkninger?
   - Tilpasse bemanning til faktisk aktivitetsnivå
   - Mål: Redusere lønnskostnader til budsjettert nivå i H2

3. **Evaluere markedsføringseffektivitet:**
   - Markedsføringen er 21% over budsjett (25 000 kr mer), men salget er lavere
   - Analysere ROI på markedsføringskanalene
   - Fokusere på de kanalene som gir best resultat
   - Mål: Bedre markedsføringseffekt uten å øke kostnaden ytterligere`,
    },
    {
      id: 'oks-3-4-ex7',
      type: 'exercise',
      title: 'Oppgave 7 - Samleoppgave',
      content: `En nettbutikk budsjetterte å selge 2400 produkter i Q2 til gjennomsnittspris 450 kr (totalt 1 080 000 kr). Faktisk solgte de 2600 produkter til gjennomsnittspris 420 kr (totalt 1 092 000 kr).

Varekostnaden var budsjettert til 40% av salget, men ble faktisk 42% på grunn av høyere innkjøpspriser.

a) Beregn volumavvik og prisavvik for salget
b) Beregn varekostnad (budsjett og faktisk) og avvik
c) Beregn dekningsbidrag (budsjett og faktisk) og avvik
d) Vurder resultatene: Er det bra eller dårlig at volumet er høyere, men prisen lavere?`,
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**a) Volumavvik og prisavvik for salget:**

Volumavvik:
- Faktisk volum - Budsjett volum = 2600 - 2400 = +200 enheter
- Volumavvik = 200 × 450 kr (budsjettert pris) = **+90 000 kr (gunstig)**

Prisavvik:
- Faktisk pris - Budsjettert pris = 420 - 450 = -30 kr per enhet
- Prisavvik = -30 kr × 2600 (faktisk volum) = **-78 000 kr (ugunstig)**

Totalt avvik salg: 1 092 000 - 1 080 000 = **+12 000 kr**
Sjekk: 90 000 - 78 000 = 12 000 kr ✓

**b) Varekostnad:**

Budsjettert varekostnad: 1 080 000 × 0,40 = **432 000 kr**
Faktisk varekostnad: 1 092 000 × 0,42 = **458 640 kr**
Avvik varekostnad: 458 640 - 432 000 = **+26 640 kr (ugunstig)**

**c) Dekningsbidrag:**

Budsjettert DB: 1 080 000 - 432 000 = **648 000 kr** (60%)
Faktisk DB: 1 092 000 - 458 640 = **633 360 kr** (58%)
Avvik DB: 633 360 - 648 000 = **-14 640 kr (ugunstig)**

**d) Vurdering:**

**Positivt:**
- Vi solgte 200 enheter mer enn budsjettert (+8,3% volum)
- Total omsetning økte med 12 000 kr

**Negativt:**
- Gjennomsnittsprisen sank med 30 kr per enhet (-6,7%)
- Dekningsbidraget sank fra 60% til 58%
- Absolutt dekningsbidrag er 14 640 kr lavere enn budsjettert
- Høyere innkjøpspriser bidro også til lavere margin

**Konklusjon:**
Resultatet er **dårlig**. Selv om volumet økte, kompenserer ikke dette for lavere pris og høyere varekostnadprosent. Dekningsbidraget, som er det viktigste målet, er 14 640 kr lavere enn budsjettert.

**Mulige årsaker:**
- Priskutt for å øke volumet (bevisst strategi?)
- Konkurransesituasjonen tvang ned prisene
- Mer rabatter/kampanjer enn planlagt
- Leverandører økte prisene (varekost 42% vs. budsjettert 40%)

**Anbefaling:**
Bedriften bør vurdere prisstrategi nøye. Volumøkning er bra, men ikke hvis det går på bekostning av lønnsomhet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Budsjett som styringsverktøy
// ============================================================================

const CHAPTER_OKONOMISTYRING_3_5: TextbookChapter = {
  id: 'oks-3-5',
  title: 'Budsjett som styringsverktøy',
  subject: 'okonomistyring',
  gradeLevel: 'VG2',
  estimatedTime: '20 minutter',
  curriculum: 'LK20',
  content: [
    {
      id: 'oks-3-5-intro',
      type: 'text',
      title: 'Budsjett i moderne virksomheter',
      content: `Tradisjonell budsjettering har vært kritisert for å være for stiv og tidkrevende. Mange virksomheter bruker flere måneder på å lage et budsjett som er utdatert allerede når året starter.

Moderne virksomheter bruker derfor mer fleksible budsjetteringsmetoder som kan tilpasses endringer underveis. Vi skal se på tre viktige utviklinger:
- Fleksible budsjetter
- Rullerende budsjetter
- Beyond Budgeting

Målet er at budsjettet skal være et nyttig styringsverktøy, ikke bare en årlig øvelse som legges i en skuff.`,
    },
    {
      id: 'oks-3-5-fleksibel',
      type: 'text',
      title: 'Fleksible budsjetter',
      content: `Et fleksibelt budsjett justeres for faktisk aktivitetsnivå før man beregner avvik.

**Problemet med statiske budsjetter:**
En produksjonsbedrift budsjetterer for produksjon av 1000 enheter med totale kostnader 500 000 kr. Hvis de faktisk produserer 1200 enheter og har kostnader på 580 000 kr, ser det ut som et negativt avvik på 80 000 kr. Men er det rettferdig å sammenligne kostnader for 1200 enheter med budsjett for 1000 enheter?

**Fleksibelt budsjett løser dette:**
Man skiller mellom faste og variable kostnader:
- Faste kostnader: 200 000 kr (uansett volum)
- Variable kostnader: 300 kr per enhet

**Statisk budsjett (1000 enheter):**
- Faste: 200 000 kr
- Variable: 1000 × 300 = 300 000 kr
- Totalt: 500 000 kr

**Fleksibelt budsjett (1200 enheter):**
- Faste: 200 000 kr (samme)
- Variable: 1200 × 300 = 360 000 kr
- Totalt: 560 000 kr

**Faktisk kostnad:** 580 000 kr

**Riktig avvik:** 580 000 - 560 000 = 20 000 kr (ikke 80 000 kr)

Fleksible budsjetter gir mer rettferdige sammenligninger når aktivitetsnivået avviker fra planen.`,
    },
    {
      id: 'oks-3-5-rullerende',
      type: 'text',
      title: 'Rullerende budsjetter',
      content: `Et rullerende budsjett oppdateres kontinuerlig, vanligvis hvert kvartal.

**Tradisjonelt budsjett:**
- Lages i november for hele neste år (januar-desember)
- Detaljert for Q1, mindre detaljert for Q2-Q4
- I juli er budsjettet for H2 basert på antagelser fra forrige november
- Budsjettet kan være utdatert og irrelevant

**Rullerende budsjett (12-måneders horisont):**
- **Januar:** Budsjett for januar-desember
- **April:** Revidere april-desember, legge til januar-mars neste år
- **Juli:** Revidere juli-desember dette år + hele Q1 neste år
- **Oktober:** Revidere oktober-desember + Q1-Q2 neste år

**Fordeler:**
- Alltid relevant og oppdatert budsjett
- Kan justere for endrede forutsetninger
- Bedre planleggingshorisont (alltid 12 måneder fremover)
- Mer realistiske tall

**Ulemper:**
- Mer tidkrevende (budsjetterer fire ganger i året)
- Krever god systemstøtte
- Kan bli for mange versjoner av budsjettet

**Eksempel:**
En nettbutikk legger til rette for Black Friday i november. I januar budsjetterte de 500 000 kr i salg for november. I august ser de at Black Friday blir større enn antatt, og justerer novemberbudsjettet til 750 000 kr når de rullerer budsjettet.`,
    },
    {
      id: 'oks-3-5-beyond',
      type: 'text',
      title: 'Beyond Budgeting',
      content: `Beyond Budgeting er en radikal tilnærming som argumenterer for å fjerne det tradisjonelle budsjettet helt.

**Kritikk av tradisjonell budsjettering:**
- Tar for lang tid (måneder av arbeid)
- Er utdatert før året starter
- Skaper feil atferd (bruk-eller-tap mentalitet)
- Hemmer fleksibilitet og innovasjon
- Fokuserer på å nå budsjetterte tall fremfor å skape verdi

**Beyond Budgeting erstatter budsjett med:**

**1. Relative mål:**
Sammenligne med konkurrenter, ikke fjorårets budsjett.
- Eksempel: "Vokse 2% mer enn bransjesnittet" i stedet for "Vokse 10%"

**2. Rullende prognoser:**
Kontinuerlig oppdaterte estimater for neste 4-6 kvartaler, ikke årlige budsjetter.

**3. Trendanalyser:**
Fokusere på utvikling over tid, ikke på å nå spesifikke tall.

**4. Desentralisert beslutningsmyndighet:**
Gi team og avdelinger mer frihet til å tilpasse seg markedet.

**5. Dynamisk ressursallokering:**
Tildele ressurser når behovet oppstår, ikke basert på årlige budsjetter.

**Eksempler på selskaper som bruker Beyond Budgeting:**
- Handelsbanken (Sverige) - har ikke hatt budsjett siden 1970
- Statoil/Equinor (Norge) - bruker rullerende prognoser

**Utfordringer:**
- Krever stor kulturendring
- Kan være vanskelig i regulerte bransjer
- Kan skape usikkerhet for ansatte
- Krever modne organisasjoner`,
    },
    {
      id: 'oks-3-5-example',
      type: 'example',
      title: 'Eksempel: Valg av budsjetteringsmetode',
      content: `**Tre ulike virksomheter velger budsjettmetode:**

**1. "StableRetail AS" - Dagligvarebutikk:**
Velger tradisjonelt årlig budsjett.
- Stabil bransje med forutsigbare kostnader
- Sesongvariasjoner følger samme mønster hvert år
- Enkelt å planlegge 12 måneder frem
- Budsjetterer i oktober for neste år
- Foretar bare mindre justeringer underveis

**2. "TechGrow AS" - IT-konsulentselskap:**
Velger rullerende budsjett.
- Prosjektbasert virksomhet med varierende inntekter
- Vanskelig å forutsi hele året på forhånd
- Rullerer budsjettet hvert kvartal
- Legger alltid til neste kvartal, oppdaterer resten
- Gir bedre kontroll og fleksibilitet

**3. "InnovateLab AS" - Tech startup:**
Velger Beyond Budgeting.
- Svært dynamisk marked med rask endring
- Tradisjonelt budsjett ville vært irrelevant etter kort tid
- Bruker månedlige prognoser for neste 6 måneder
- Fokuserer på vekst sammenlignet med konkurrenter
- Gir team stor frihet til å tilpasse seg markedet

**Konklusjon:** Det er ikke én riktig metode. Valg av budsjettmetode avhenger av virksomhetens situasjon, bransje og modenhet.`,
    },
    {
      id: 'oks-3-5-ex1',
      type: 'exercise',
      title: 'Oppgave 1',
      content: 'Hva er hovedforskjellen mellom et statisk og et fleksibelt budsjett?',
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      options: [
        'Statisk budsjett er for store bedrifter, fleksibelt for små',
        'Fleksibelt budsjett justeres for faktisk aktivitetsnivå før avviksberegning',
        'Statisk budsjett bruker faste kostnader, fleksibelt bruker variable',
        'Det er ingen forskjell, bare ulike navn',
      ],
      correctAnswer: 1,
      explanation: 'Fleksibelt budsjett justerer budsjetterte kostnader basert på faktisk aktivitetsnivå, slik at man får mer rettferdige sammenligninger.',
    },
    {
      id: 'oks-3-5-ex2',
      type: 'exercise',
      title: 'Oppgave 2',
      content: `En produksjonsbedrift budsjetterte disse kostnadene for produksjon av 800 enheter:
- Faste kostnader: 160 000 kr
- Variable kostnader: 250 kr per enhet

De produserte faktisk 900 enheter med totale kostnader 390 000 kr. Beregn avviket ved bruk av fleksibelt budsjett.`,
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'classic',
      solution: `**Fleksibelt budsjett for 900 enheter:**

Faste kostnader: 160 000 kr (uendret)
Variable kostnader: 900 × 250 = 225 000 kr
Totalt fleksibelt budsjett: 160 000 + 225 000 = **385 000 kr**

**Faktiske kostnader:** 390 000 kr

**Avvik:** 390 000 - 385 000 = **5 000 kr (ugunstig)**

Uten fleksibelt budsjett ville avviket sett ut som:
Statisk budsjett (800 enheter): 160 000 + (800 × 250) = 360 000 kr
Faktisk: 390 000 kr
Feil avvik: 30 000 kr (ugunstig)

Med fleksibelt budsjett ser vi at det reelle avviket bare er 5 000 kr. Resten av "avviket" (25 000 kr) skyldes høyere produksjonsvolum, noe som er naturlig.`,
    },
    {
      id: 'oks-3-5-ex3',
      type: 'exercise',
      title: 'Oppgave 3',
      content: 'Hva er hovedideen bak rullerende budsjetter?',
      subject: 'okonomistyring',
      difficulty: 'easy',
      exerciseType: 'multiple-choice',
      options: [
        'Lage budsjett for de neste 5 årene',
        'Oppdatere budsjettet kontinuerlig, alltid ha 12 måneders horisont',
        'Rulle budsjettet videre fra ett år til neste uten endringer',
        'Lage flere alternative budsjetter og velge det beste',
      ],
      correctAnswer: 1,
      explanation: 'Rullerende budsjetter oppdateres regelmessig (f.eks. hvert kvartal) slik at man alltid har et oppdatert budsjett for de neste 12 månedene.',
    },
    {
      id: 'oks-3-5-ex4',
      type: 'exercise',
      title: 'Oppgave 4',
      content: 'Forklar to hovedkritikker mot tradisjonell budsjettering som Beyond Budgeting-bevegelsen fremmer.',
      subject: 'okonomistyring',
      difficulty: 'medium',
      exerciseType: 'classic',
      solution: `**To hovedkritikker mot tradisjonell budsjettering:**

**1. Tidkrevende og utdatert:**
Mange virksomheter bruker 3-4 måneder (september-desember) på å lage et budsjett for neste år. Når januar kommer, er budsjettet allerede basert på forutsetninger som kan være utdaterte. Når man kommer til oktober-desember, er det nesten et år siden forutsetningene ble laget, og markedet kan ha endret seg dramatisk. Ressursene brukt på budsjettering kunne vært brukt mer produktivt.

**2. Skaper feil atferd:**
Tradisjonell budsjettering kan skape "bruk-eller-tap" mentalitet. Hvis en avdeling har 100 000 kr i markedsføringsbudsjett, kan de føle press til å bruke hele beløpet selv om det ikke er nødvendig - for hvis de ikke bruker det, kan de få mindre neste år. Det skaper også fokus på å "nå budsjettet" fremfor å skape verdi for kunder. Avdelinger kan holde tilbake informasjon eller forhandle om lave budsjettmål for å se bedre ut.

Andre kritikker inkluderer:
- Hemmer fleksibilitet (vanskelig å justere underveis)
- Intern konkurranse om budsjettmidler fremfor samarbeid
- Fokus på kostnader fremfor verdiskaping`,
    },
    {
      id: 'oks-3-5-ex5',
      type: 'exercise',
      title: 'Oppgave 5',
      content: 'En ny daglig leder vil innføre Beyond Budgeting i en etablert produksjonsbedrift. Nevn to utfordringer hun kan møte, og ett argument for hvorfor Beyond Budgeting kan passe dårlig for akkurat produksjonsbedrifter.',
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**To utfordringer:**

**1. Kulturendring og motstand:**
Ansatte og ledere er vant til det tradisjonelle budsjettet som styringsverktøy. Å fjerne dette kan skape stor usikkerhet. "Hvordan skal vi vite om vi gjør det bra uten budsjett?" Mange vil oppleve dette som tap av kontroll. Det krever grundig opplæring og endringsledelse over lang tid (1-3 år) for å lykkes med en slik omstilling.

**2. Tap av forutsigbarhet:**
Uten budsjett kan det være vanskeligere å planlegge investeringer, bemanning og andre viktige beslutninger. Banker og eiere kan kreve budsjetter for å vurdere virksomheten. Leverandører kan trenge prognoser. Ansatte kan miste tryggheten som kommer med klare, budsjetterte mål.

**Hvorfor Beyond Budgeting kan passe dårlig for produksjonsbedrifter:**

Produksjonsbedrifter har ofte:
- **Lang planleggingshorisont:** Må bestille råvarer måneder i forveien, planlegge produksjonskapasitet
- **Kapitalkrevende investeringer:** Maskiner og utstyr må planlegges og budsjetteres langt frem i tid
- **Stabil og forutsigbar drift:** Produksjonen følger ofte kjente mønstre, noe som gjør tradisjonell budsjettering mer relevant
- **Behov for kapasitetsplanlegging:** Må vite hvor mye som skal produseres for å dimensjonere anlegg og bemanning

Beyond Budgeting passer bedre for kunnskapsvirksomheter (konsulenter, tech-selskaper) med rask endring og lav kapitalintensitet.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'oks-3-5-ex6',
      type: 'exercise',
      title: 'Oppgave 6 - Samleoppgave',
      content: `En transportbedrift har budsjettert disse kostnadene for 10 000 kjørte kilometer per måned:
- Faste kostnader: 180 000 kr (lønn sjåfører, forsikring, avdrag)
- Variable kostnader: 12 kr per km (drivstoff, vedlikehold)

I mars kjørte de 11 500 km med totale kostnader 330 000 kr.

a) Beregn budsjettert kostnad (statisk budsjett for 10 000 km)
b) Beregn fleksibelt budsjett for 11 500 km
c) Beregn avvik mot statisk budsjett og mot fleksibelt budsjett
d) Hvilken sammenligning gir best informasjon for ledelsen? Hvorfor?`,
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**a) Statisk budsjett (10 000 km):**

Faste kostnader: 180 000 kr
Variable kostnader: 10 000 × 12 = 120 000 kr
**Totalt:** 180 000 + 120 000 = **300 000 kr**

**b) Fleksibelt budsjett (11 500 km):**

Faste kostnader: 180 000 kr (uendret)
Variable kostnader: 11 500 × 12 = 138 000 kr
**Totalt:** 180 000 + 138 000 = **318 000 kr**

**c) Avvik:**

**Avvik mot statisk budsjett:**
Faktisk - Statisk budsjett = 330 000 - 300 000 = **+30 000 kr (ugunstig)**

**Avvik mot fleksibelt budsjett:**
Faktisk - Fleksibelt budsjett = 330 000 - 318 000 = **+12 000 kr (ugunstig)**

**d) Beste sammenligning:**

**Fleksibelt budsjett gir best informasjon.**

Begrunnelse:
Det statiske budsjettet viser 30 000 kr avvik, men dette inkluderer effekten av å kjøre 1500 km mer enn planlagt. Disse ekstra kilometerne skulle naturlig koste 1500 × 12 = 18 000 kr mer i variable kostnader.

Det fleksible budsjettet justerer for dette og viser at det "ekte" avviket er 12 000 kr. Dette kan skyldes:
- Høyere drivstoffpriser enn budsjettert
- Mer vedlikehold enn forventet per km
- Ineffektiv kjøring (høyere drivstofforbruk)
- Høyere faste kostnader (overtid for sjåfører?)

Med denne informasjonen kan ledelsen fokusere på å finne ut hvorfor kostnadene per km eller de faste kostnadene er høyere, i stedet for å bekymre seg over volumavvik som er naturlig når aktivitetsnivået endrer seg.`,
    },
    {
      id: 'oks-3-5-ex7',
      type: 'exercise',
      title: 'Oppgave 7 - Samleoppgave',
      content: `Du er nyansatt controller i et IT-konsulentselskap med 25 ansatte. Daglig leder forteller at de bruker tradisjonelt årsbudsjett, laget i november for hele neste år. Hun er misfornøyd fordi:
- Budsjettet tar 6 uker å lage
- Allerede i mars er det ofte ikke relevant lenger (nye prosjekter, tapte kunder)
- Konsulentene klager over at budsjetterte timesatser ikke matcher markedet
- I november er det vanskelig å vite hvilke prosjekter man har i august neste år

a) Anbefal en alternativ budsjettmetode som passer bedre
b) Forklar konkret hvordan denne metoden vil løse minst tre av problemene beskrevet over
c) Nevn én utfordring ved å innføre denne nye metoden`,
      subject: 'okonomistyring',
      difficulty: 'hard',
      exerciseType: 'classic',
      solution: `**a) Anbefaling:**

Jeg anbefaler **rullerende budsjett med 12-måneders horisont** som rulleres hvert kvartal.

Alternativt kan man vurdere en hybrid-løsning med rullerende prognoser kombinert med enkelte Beyond Budgeting-prinsipper.

**b) Hvordan metoden løser problemene:**

**Problem 1: "Budsjettet tar 6 uker å lage"**
**Løsning:** Med rullerende budsjett lager man ikke hele året på nytt hver gang. I januar lager man detaljert budsjett for Q1, mindre detaljert for Q2-Q4. I april oppdaterer man Q2-Q4 og legger til Q1 neste år. Hver rulleringsrunde tar 1-2 uker i stedet for 6 uker, og arbeidet fordeles utover året.

**Problem 2: "Allerede i mars er budsjettet ikke relevant"**
**Løsning:** Med kvartalsvis rullering vil budsjettet aldri være mer enn 3 måneder gammelt for neste kvartal. Når mars kommer, har man akkurat oppdatert Q1-prognoser i januar. I april rullerer man igjen og kan justere for ny kunnskap. Dette holder budsjettet relevant.

**Problem 3: "Timesatser matcher ikke markedet"**
**Løsning:** Ved hver rullering (hvert kvartal) kan man justere timesatsene basert på faktisk markedssituasjon. Hvis konkurrentene senker prisene i februar, kan man justere Q2-Q4 budsjett i aprilrulleringen. Man er ikke låst til satser bestemt i november foregående år.

**Problem 4: "Vanskelig å vite hvilke prosjekter man har i august neste år"**
**Løsning:** I november trenger man ikke detaljert budsjett for august neste år. Man lager grove anslag for H2. Når man kommer til aprilrulleringen, har man mye bedre oversikt over sommeren og kan lage realistiske budsjetter. Planleggingshorisonten er alltid 3-12 måneder fremover, som er overkommelig for et konsulentselskap.

**c) Utfordring ved innføring:**

**Utfordring: Tidsbruk og disiplin**

Selv om hver rulleringsrunde er kortere, må selskapet nå budsjettere fire ganger per år i stedet for én gang. Dette krever:
- God disiplin og rutiner for når og hvordan man rullerer
- Ansatte må sette av tid hvert kvartal til budsjettering
- Godt IT-system for å holde oversikt over ulike versjoner
- Kultur for kontinuerlig planlegging i stedet for "ferdig med budsjett i desember"

Faren er at budsjettering blir oppfattet som en "evig prosess" som tar fokus fra kjernevirksomheten. Dette kan motvirkes ved å:
- Ha klare tidsfrister (f.eks. "andre uke i januar, april, juli, oktober")
- Bruke maler og systemer som effektiviserer prosessen
- Fokusere rulleringen på de viktigste endringene, ikke lage alt på nytt`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Export
// ============================================================================

export const OKONOMISTYRING_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMISTYRING_3_1,
  CHAPTER_OKONOMISTYRING_3_2,
  CHAPTER_OKONOMISTYRING_3_3,
  CHAPTER_OKONOMISTYRING_3_4,
  CHAPTER_OKONOMISTYRING_3_5,
];
