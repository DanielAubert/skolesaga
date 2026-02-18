/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Seksjon 1: Økonomi – NARRATIV VERSJON
 * Kapittel 1.1–1.4
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1 NARRATIV: Personlig økonomi
// ============================================================================

export const CHAPTER_2P_1_1_NARRATIV: TextbookChapter = {
  id: '2p-1-1-narrativ',
  courseId: '2p',
  chapterNumber: '1.1',
  title: 'Personlig økonomi',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om lønnsslipp, budsjett og kjøpekraft – alt du trenger for å ta kontroll over egen lommebok.',
  estimatedMinutes: 35,
  competenceGoals: [
    'vurdere valg knyttet til personlig økonomi og reflektere over konsekvenser av å ta opp lån og å bruke kredittkort',
    'utforske og forklare sammenhenger mellom prisindeks, kroneverdi, reallønn, nominell lønn og brutto- og nettoinntekt',
  ],
  linkedChapterId: '2p-1-1',
  content: [
    {
      id: '2p-1-1-n-audio-1',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/2p/2p-1-1-narrativ-del1.mp3',
      description: 'Lydfil som leser opp teksten frem til første quiz.',
    },
    {
      id: '2p-1-1-n-intro',
      type: 'text',
      content: `## Den første lønnsslippen

Tenk deg at du nettopp har fått din første jobb. Du har skrevet under kontrakten – 35 000 kroner i måneden! Du begynner allerede å planlegge hva du skal bruke pengene på. Men så kommer den første lønnsslippen, og der står det bare 23 800 kroner. Hva skjedde med resten?

Velkommen til personlig økonomi. I dette kapittelet skal vi følge deg gjennom det viktigste du trenger å vite for å ha kontroll på pengene dine. Vi snakker om hva som trekkes fra lønnen din, hvordan du setter opp et budsjett, og hvorfor lønnsøkning ikke alltid betyr at du har mer å rutte med.`,
    },
    {
      id: '2p-1-1-n-section1',
      type: 'text',
      content: `## Brutto og netto – der pengene forsvinner

Det tallet som står i arbeidskontrakten din, kalles **bruttoinntekt**. Det er det du tjener *før* noe som helst trekkes fra. Men mellom bruttoinntekt og det som faktisk havner på kontoen din, skjer det en del.

Først trekkes **skatt**. I Norge betaler vi skatt til staten, og skattetrekket varierer, men for mange ligger det på rundt 30–35 prosent. Deretter trekkes gjerne **pensjonsinnskudd** – typisk 2 prosent av bruttolønnen – som settes av til fremtidig pensjon.

Det du sitter igjen med etter alle trekk, kalles **nettoinntekt**. Det er dette beløpet som havner på kontoen din, og det er dette du faktisk kan bruke.

Formelen er enkel: $$\\text{Nettoinntekt} = \\text{Bruttoinntekt} - \\text{Skatt} - \\text{Andre trekk}$$

La oss ta et konkret eksempel. Sara har en brutto månedslønn på 35 000 kroner. Skattetrekket hennes er 30 prosent, og hun betaler 2 prosent i pensjonsinnskudd. Skattetrekket blir $35\\,000 \\cdot 0{,}30 = 10\\,500$ kroner, og pensjonsinnskuddet blir $35\\,000 \\cdot 0{,}02 = 700$ kroner. Nettoinntekten blir dermed $35\\,000 - 10\\,500 - 700 = 23\\,800$ kroner. Det er dette Sara faktisk får utbetalt.

Det kan virke som mye som forsvinner, men tenk på det slik: skatten finansierer skoler, sykehus, veier og trygdeordninger. Pensjonsinnskuddet sørger for at du har penger å leve av når du blir gammel. Det er en investering i fremtiden din.`,
    },
    {
      id: '2p-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på brutto og netto:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-1-n-quiz1-q0',
            task: 'Ola har en brutto månedslønn på 42 000 kr. Skattetrekket er 33 % og pensjonsinnskuddet er 2 %. Hva er nettoinntekten hans?',
            options: [
              { id: 'a', text: '29 400 kr', isCorrect: false },
              { id: 'b', text: '27 300 kr', isCorrect: true },
              { id: 'c', text: '28 140 kr', isCorrect: false },
              { id: 'd', text: '26 460 kr', isCorrect: false },
            ],
            solution: 'Skattetrekk: $42\\,000 \\cdot 0{,}33 = 13\\,860$ kr. Pensjon: $42\\,000 \\cdot 0{,}02 = 840$ kr. Netto: $42\\,000 - 13\\,860 - 840 = 27\\,300$ kr.',
          },
          {
            id: '2p-1-1-n-quiz1-q1',
            task: 'Hva er forskjellen mellom bruttoinntekt og nettoinntekt?',
            options: [
              { id: 'a', text: 'Bruttoinntekt er det du får utbetalt, nettoinntekt er det som står i kontrakten', isCorrect: false },
              { id: 'b', text: 'Det er ingen forskjell, begge begrepene betyr det samme', isCorrect: false },
              { id: 'c', text: 'Bruttoinntekt er lønnen før trekk, nettoinntekt er det du faktisk får utbetalt', isCorrect: true },
              { id: 'd', text: 'Nettoinntekt er alltid høyere enn bruttoinntekt', isCorrect: false },
            ],
            solution: 'Bruttoinntekt er den fulle lønnen før skatt og andre trekk. Nettoinntekt er det som faktisk havner på kontoen din etter at skatt, pensjon og eventuelle andre trekk er trukket fra.',
          },
          {
            id: '2p-1-1-n-quiz1-q2',
            task: 'Lise har en bruttoinntekt på 38 000 kr. Skattetrekket er 31 % og pensjonsinnskuddet er 2 %. Hvor mye utgjør skattetrekket i kroner?',
            options: [
              { id: 'a', text: '11 400 kr', isCorrect: false },
              { id: 'b', text: '12 540 kr', isCorrect: false },
              { id: 'c', text: '11 780 kr', isCorrect: true },
              { id: 'd', text: '12 160 kr', isCorrect: false },
            ],
            solution: 'Skattetrekk: $38\\,000 \\cdot 0{,}31 = 11\\,780$ kr.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-1-n-audio-2',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/2p/2p-1-1-narrativ-del2.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '2p-1-1-n-section2',
      type: 'text',
      content: `## Budsjettet – din økonomiske GPS

Nå vet du hva du får utbetalt. Men hvordan sikrer du at pengene faktisk strekker til? Svaret er et **budsjett** – en plan for hvordan du vil bruke pengene i en bestemt periode.

Et budsjett deler utgiftene dine i to hovedkategorier. **Faste utgifter** er de som er like store hver måned: husleie, forsikring, abonnementer. **Variable utgifter** varierer: mat, klær, transport, fritidsaktiviteter.

La oss se på Jonas som har en nettoinntekt på 25 000 kroner i måneden. Han setter opp budsjettet sitt: husleie 8 500 kr, strøm 1 200 kr, mobil og internett 600 kr, forsikring 400 kr. Det gir faste utgifter på 10 700 kroner. I tillegg regner han med mat for 4 000 kr, transport 1 500 kr, klær 800 kr og fritid 2 000 kr – variable utgifter på 8 300 kroner. Totale utgifter: 19 000 kroner. Det betyr at Jonas kan spare 6 000 kroner i måneden – hele 24 prosent av inntekten.

En populær tommelfingerregel er **50/30/20-regelen**: 50 prosent av nettoinntekten til nødvendige utgifter, 30 prosent til ønsker, og 20 prosent til sparing og gjeldsbetaling. Det er ikke en fasit, men et godt utgangspunkt for å få oversikt. Poenget er enkelt: vet du hvor pengene går, kan du ta bevisste valg i stedet for å lure på hvor alt ble av.`,
    },
    {
      id: '2p-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på budsjett:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-1-n-quiz2-q0',
            task: 'Ifølge 50/30/20-regelen, hvor stor andel av nettoinntekten bør gå til sparing og nedbetaling av gjeld?',
            options: [
              { id: 'a', text: '30 %', isCorrect: false },
              { id: 'b', text: '50 %', isCorrect: false },
              { id: 'c', text: '20 %', isCorrect: true },
              { id: 'd', text: '10 %', isCorrect: false },
            ],
            solution: '50/30/20-regelen: 50 % til nødvendige utgifter, 30 % til ønsker, 20 % til sparing og gjeldsbetaling.',
          },
          {
            id: '2p-1-1-n-quiz2-q1',
            task: 'Jonas har nettoinntekt 25 000 kr. Faste utgifter er 10 700 kr og variable utgifter er 8 300 kr. Hvor mye kan Jonas spare per måned?',
            options: [
              { id: 'a', text: '4 000 kr', isCorrect: false },
              { id: 'b', text: '6 000 kr', isCorrect: true },
              { id: 'c', text: '8 300 kr', isCorrect: false },
              { id: 'd', text: '14 300 kr', isCorrect: false },
            ],
            solution: 'Totale utgifter: $10\\,700 + 8\\,300 = 19\\,000$ kr. Sparing: $25\\,000 - 19\\,000 = 6\\,000$ kr per måned.',
          },
          {
            id: '2p-1-1-n-quiz2-q2',
            task: 'Hvilken av disse er en variabel utgift?',
            options: [
              { id: 'a', text: 'Husleie', isCorrect: false },
              { id: 'b', text: 'Forsikring', isCorrect: false },
              { id: 'c', text: 'Matutgifter', isCorrect: true },
              { id: 'd', text: 'Mobilabonnement', isCorrect: false },
            ],
            solution: 'Matutgifter varierer fra måned til måned avhengig av hva og hvor mye du handler. Husleie, forsikring og mobilabonnement er faste utgifter som er like store hver måned.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-1-n-audio-3',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/2p/2p-1-1-narrativ-del3.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '2p-1-1-n-section3',
      type: 'text',
      content: `## Likviditet – har du penger når du trenger dem?

Her kommer et begrep som mange glemmer: **likviditet**. Likviditet betyr evnen til å betale regninger og utgifter *når de forfaller*. Du kan ha masse penger totalt sett, men hvis de er bundet opp i fond eller fast eiendom og ikke tilgjengelige akkurat når husleien skal betales, har du et likviditetsproblem.

Tenk deg Erik: Han har 5 000 kroner på kontoen 1. januar. Husleien på 9 000 kroner forfaller samme dag. Lønnen på 25 000 kroner kommer ikke før den 15. januar. Selv om Erik har mer enn nok penger til å dekke husleien når lønnen kommer, har han et akutt problem akkurat nå – kontoen vil gå i minus med 4 000 kroner.

En **likviditetsoversikt** hjelper deg å planlegge dette. Du setter opp alle innbetalinger og utbetalinger i kronologisk rekkefølge gjennom måneden, og sjekker at saldoen aldri blir negativ. Hvis den gjør det, må du enten flytte forfallsdatoer, bruke en bufferkonto, eller rett og slett sørge for å ha litt ekstra stående til enhver tid.

Tommelfingerregel: Ha alltid minst én månedslønn i lett tilgjengelige midler som buffer. Det gir deg trygghet mot uforutsette utgifter – enten det er en tannlegeregning eller en knust mobilskjerm.`,
    },
    {
      id: '2p-1-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på likviditet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-1-n-quiz3-q0',
            task: 'Erik har 5 000 kr på konto 1. januar. Husleien på 9 000 kr forfaller 1. januar, men lønnen på 25 000 kr kommer 15. januar. Hva er Eriks situasjon?',
            options: [
              { id: 'a', text: 'Han har god likviditet fordi lønnen er høyere enn husleien', isCorrect: false },
              { id: 'b', text: 'Han har et likviditetsproblem fordi han mangler penger 1. januar', isCorrect: true },
              { id: 'c', text: 'Han har ingen økonomiske problemer', isCorrect: false },
              { id: 'd', text: 'Han bør investere i fond for å tjene mer', isCorrect: false },
            ],
            solution: 'Erik har et likviditetsproblem fordi husleien forfaller 1. januar ($5\\,000 - 9\\,000 = -4\\,000$ kr), selv om han har nok penger totalt sett når lønnen kommer 15. januar. Likviditet handler om å ha penger tilgjengelig *når* de trengs.',
          },
          {
            id: '2p-1-1-n-quiz3-q1',
            task: 'Hva betyr begrepet likviditet?',
            options: [
              { id: 'a', text: 'Hvor mye penger du har totalt i formue', isCorrect: false },
              { id: 'b', text: 'Hvor mye gjeld du har', isCorrect: false },
              { id: 'c', text: 'Evnen til å betale regninger og utgifter når de forfaller', isCorrect: true },
              { id: 'd', text: 'Hvor mye skatt du betaler', isCorrect: false },
            ],
            solution: 'Likviditet betyr evnen til å betale utgifter og regninger *når de forfaller*. Du kan ha mye penger totalt, men likevel ha et likviditetsproblem hvis pengene ikke er tilgjengelige på riktig tidspunkt.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-1-n-audio-4',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/2p/2p-1-1-narrativ-del4.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '2p-1-1-n-section4',
      type: 'text',
      content: `## Nominell lønn vs. reallønn – den usynlige tyven

Her kommer et av de viktigste begrepene i personlig økonomi, og det er noe de fleste overser. Tenk deg at du får 4 prosent lønnsøkning. Flott, ikke sant? Men hva om prisene på alt du kjøper også har økt med 4 prosent? Da kan du kjøpe nøyaktig like mye som før – lønnsøkningen har i praksis ingen verdi.

**Nominell lønn** er ganske enkelt lønnen din målt i kroner – tallet på lønnsslippen. **Reallønn** derimot handler om *kjøpekraft* – altså hva lønnen din faktisk kan kjøpe av varer og tjenester. Reallønn tar hensyn til prisstigning, som vi kaller **inflasjon**.

Sammenhengen er overraskende enkel: $$\\text{Reallønnsvekst} \\approx \\text{Nominell lønnsvekst} - \\text{Prisstigning}$$

La oss se på Per. I fjor tjente han 500 000 kroner. I år økte lønnen til 525 000 – en nominell vekst på 5 prosent. Men konsumprisindeksen (**KPI**), som måler prisnivået i samfunnet, økte fra 120,0 til 124,8. Prisveksten var $(124{,}8 - 120{,}0) / 120{,}0 \\cdot 100\\% = 4{,}0\\%$. Reallønnen økte altså med omtrent $5{,}0\\% - 4{,}0\\% = 1{,}0\\%$. Per har fått litt mer kjøpekraft, men langt fra de 5 prosentene det så ut som.

Og det kan gå andre veien: Får du 3,5 prosent lønnsøkning mens prisene stiger med 4,2 prosent, har reallønnen din faktisk *gått ned* med 0,7 prosent. Du tjener mer i kroner, men kan kjøpe *mindre*. Inflasjon er en usynlig tyv.`,
    },
    {
      id: '2p-1-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på reallønn og nominell lønn:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-1-n-quiz4-q0',
            task: 'En arbeidstaker fikk 3,5 % lønnsøkning. Prisveksten i samme periode var 4,2 %. Hva skjedde med reallønnen?',
            options: [
              { id: 'a', text: 'Reallønnen økte med 3,5 %', isCorrect: false },
              { id: 'b', text: 'Reallønnen økte med 0,7 %', isCorrect: false },
              { id: 'c', text: 'Reallønnen gikk ned med ca. 0,7 %', isCorrect: true },
              { id: 'd', text: 'Reallønnen var uendret', isCorrect: false },
            ],
            solution: 'Reallønnsvekst $\\approx 3{,}5\\% - 4{,}2\\% = -0{,}7\\%$. Siden prisveksten er høyere enn lønnsveksten, har kjøpekraften gått ned.',
          },
          {
            id: '2p-1-1-n-quiz4-q1',
            task: 'Hva er forskjellen mellom nominell lønn og reallønn?',
            options: [
              { id: 'a', text: 'Nominell lønn er nettoinntekten, reallønn er bruttoinntekten', isCorrect: false },
              { id: 'b', text: 'Nominell lønn er kronebeløpet, reallønn tar hensyn til prisstigning og viser kjøpekraft', isCorrect: true },
              { id: 'c', text: 'Reallønn er alltid høyere enn nominell lønn', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell -- begge betyr det samme', isCorrect: false },
            ],
            solution: 'Nominell lønn er lønnen målt i kroner (tallet på lønnsslippen). Reallønn tar hensyn til prisstigning og viser hva lønnen faktisk kan kjøpe av varer og tjenester -- altså kjøpekraften.',
          },
          {
            id: '2p-1-1-n-quiz4-q2',
            task: 'Per tjente 500 000 kr i fjor og 525 000 kr i år. KPI gikk fra 120,0 til 124,8. Hva er omtrent reallønnsveksten?',
            options: [
              { id: 'a', text: 'Ca. 5,0 %', isCorrect: false },
              { id: 'b', text: 'Ca. 4,0 %', isCorrect: false },
              { id: 'c', text: 'Ca. 1,0 %', isCorrect: true },
              { id: 'd', text: 'Ca. 9,0 %', isCorrect: false },
            ],
            solution: 'Nominell lønnsvekst: $(525\\,000 - 500\\,000)/500\\,000 = 5{,}0\\%$. Prisvekst: $(124{,}8 - 120{,}0)/120{,}0 = 4{,}0\\%$. Reallønnsvekst $\\approx 5{,}0\\% - 4{,}0\\% = 1{,}0\\%$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-1-n-audio-5',
      type: 'audio',
      title: 'Lytt til denne delen',
      src: '/audio/2p/2p-1-1-narrativ-del5.mp3',
      description: 'Lydfil som leser opp teksten frem til neste quiz.',
    },
    {
      id: '2p-1-1-n-section5',
      type: 'text',
      content: `## KPI – termometeret for prisnivået

Vi nevnte konsumprisindeksen, **KPI**, som måler prisnivået i samfunnet. Men hva er den egentlig? KPI er en indeks som følger prisene på en «handlekurv» av varer og tjenester som norske husholdninger typisk kjøper – alt fra melk og brød til strøm, klær og kinobesøk. Statistisk sentralbyrå (SSB) oppdaterer den hver måned.

Når vi sier at KPI økte fra 108,5 til 115,2 fra 2020 til 2023, betyr det at prisnivået steg med $(115{,}2 - 108{,}5) / 108{,}5 \\cdot 100\\% \\approx 6{,}2\\%$ i løpet av tre år. Hvis du hadde en lønn på 450 000 kroner i 2020, måtte den ha økt til minst $450\\,000 \\cdot (115{,}2 / 108{,}5) \\approx 477\\,810$ kroner i 2023 bare for å holde tritt med prisveksten.

Sammenhengen mellom KPI og **kroneverdi** er også verdt å forstå. Når KPI øker, synker kroneverdien – du får mindre for pengene dine. En hundrelapp i dag kjøper ikke like mye som en hundrelapp for ti år siden. Derfor er det så viktig å ikke bare se på nominelle tall, men alltid tenke på hva pengene faktisk er verdt i kjøpekraft.

Forståelsen av bruttoinntekt, nettoinntekt, budsjett, likviditet og reallønn gir deg verktøyene til å ta kontroll over egen økonomi. Det handler ikke om å bli rik – det handler om å vite hvor pengene dine går, og ta bevisste valg.`,
    },
    {
      id: '2p-1-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på KPI og kroneverdi:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-1-n-quiz5-q0',
            task: 'KPI var 108,5 i 2020 og 115,2 i 2023. Hva var den omtrentlige prisveksten?',
            options: [
              { id: 'a', text: 'Ca. 3,5 %', isCorrect: false },
              { id: 'b', text: 'Ca. 6,7 %', isCorrect: false },
              { id: 'c', text: 'Ca. 6,2 %', isCorrect: true },
              { id: 'd', text: 'Ca. 8,0 %', isCorrect: false },
            ],
            solution: 'Prisvekst $= (115{,}2 - 108{,}5) / 108{,}5 \\cdot 100\\% \\approx 6{,}18\\%$, altså ca. $6{,}2\\%$.',
          },
          {
            id: '2p-1-1-n-quiz5-q1',
            task: 'Hva skjer med kroneverdien når KPI øker?',
            options: [
              { id: 'a', text: 'Kroneverdien øker -- du får mer for pengene', isCorrect: false },
              { id: 'b', text: 'Kroneverdien synker -- du får mindre for pengene', isCorrect: true },
              { id: 'c', text: 'Kroneverdien er uavhengig av KPI', isCorrect: false },
              { id: 'd', text: 'Kroneverdien dobler seg', isCorrect: false },
            ],
            solution: 'Når KPI øker, stiger prisnivået. Det betyr at en hundrelapp kjøper mindre enn før -- altså synker kroneverdien.',
          },
          {
            id: '2p-1-1-n-quiz5-q2',
            task: 'En person tjente 450 000 kr i 2020 da KPI var 108,5. Hva måtte lønnen vært i 2023 (KPI = 115,2) for å beholde samme kjøpekraft?',
            options: [
              { id: 'a', text: 'Ca. 450 000 kr', isCorrect: false },
              { id: 'b', text: 'Ca. 477 810 kr', isCorrect: true },
              { id: 'c', text: 'Ca. 518 400 kr', isCorrect: false },
              { id: 'd', text: 'Ca. 422 630 kr', isCorrect: false },
            ],
            solution: 'For å beholde kjøpekraften: $450\\,000 \\cdot (115{,}2 / 108{,}5) = 450\\,000 \\cdot 1{,}0618 \\approx 477\\,810$ kr.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-1-n-audio-6',
      type: 'audio',
      title: 'Lytt til oppsummeringen',
      src: '/audio/2p/2p-1-1-narrativ-del6.mp3',
      description: 'Lydfil som leser opp oppsummeringen.',
    },
    {
      id: '2p-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett på det grunnleggende i personlig økonomi:

**Bruttoinntekt** er lønnen din før skatt og trekk, mens **nettoinntekt** er det du faktisk får utbetalt. Forskjellen skyldes skatt, pensjonsinnskudd og andre trekk. Et **budsjett** gir deg oversikt over faste og variable utgifter, og 50/30/20-regelen er et godt utgangspunkt. **Likviditet** handler om å ha penger tilgjengelig når regningene forfaller – ikke bare totalt sett. Og til slutt: **nominell lønn** er kronebeløpet, mens **reallønn** er justert for prisvekst. **KPI** (konsumprisindeksen) måler prisnivået, og reallønnsvekst er omtrent lik nominell lønnsvekst minus prisstigning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2 NARRATIV: Lån og sparing
// ============================================================================

export const CHAPTER_2P_1_2_NARRATIV: TextbookChapter = {
  id: '2p-1-2-narrativ',
  courseId: '2p',
  chapterNumber: '1.2',
  title: 'Lån og sparing',
  subtitle: 'Narrativ versjon',
  description: 'Historien om renter, lån og kredittkort – og hvorfor Albert Einstein kalte renters rente for verdens åttende underverk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'vurdere valg knyttet til personlig økonomi og reflektere over konsekvenser av å ta opp lån og å bruke kredittkort',
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
  ],
  linkedChapterId: '2p-1-2',
  content: [
    {
      id: '2p-1-2-n-intro',
      type: 'text',
      content: `## Rente – prisen på å låne tid

De aller fleste av oss vil på et tidspunkt ta opp lån. Studielån, billån, boliglån – det er en naturlig del av økonomien. Men det er en enorm forskjell på å låne smart og å låne dumt. Forskjellen ligger i å forstå *rente* – prisen du betaler for å bruke andres penger.

I dette kapittelet skal vi utforske hvordan renter fungerer, se på to helt ulike måter å betale ned et lån på, og forstå hvorfor kredittkortgjeld kan bli en felle. Vi skal også se den lyse siden: hvordan renters rente kan gjøre deg rikere over tid.`,
    },
    {
      id: '2p-1-2-n-section1',
      type: 'text',
      content: `## Vekstfaktor og renters rente

Kjernen i all renteberegning er **vekstfaktoren**. Hvis renten er $p$ prosent, er vekstfaktoren $v = 1 + p/100$. For 3 prosent rente er vekstfaktoren $1{,}03$. Det betyr at for hver krone du har i banken, har du $1{,}03$ kroner etter ett år.

Men det virkelig magiske skjer når rentene begynner å jobbe *for hverandre*. Etter ett år har du tjent renter. Etter to år tjener du renter på *rentene* også. Dette kalles **renters rente** (eller sammensatt rente), og over tid skaper det en eksponentiell vekst.

Formelen er: $$K_n = K_0 \\cdot v^n$$

Her er $K_0$ startkapitalen, $v$ er vekstfaktoren, og $n$ er antall perioder.

La oss si at du setter inn 50 000 kroner i banken til 4 prosent årlig rente. Etter 6 år har du: $K_6 = 50\\,000 \\cdot 1{,}04^6 = 50\\,000 \\cdot 1{,}2653 \\approx 63\\,265$ kroner. Renteinntekten er 13 265 kroner. Med *enkel* rente (uten renters rente-effekten) ville du bare fått $50\\,000 \\cdot 0{,}04 \\cdot 6 = 12\\,000$ kroner. Renters rente ga deg altså 1 265 kroner ekstra – bare fordi rentene fikk jobbe for seg selv. Over lengre tid blir forskjellen dramatisk.`,
    },
    {
      id: '2p-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på vekstfaktor og renters rente:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-2-n-quiz1-q0',
            task: 'Du setter inn 100 000 kr til 3,5 % årlig rente. Hvor mye har du etter 4 år?',
            options: [
              { id: 'a', text: '114 000 kr', isCorrect: false },
              { id: 'b', text: '103 500 kr', isCorrect: false },
              { id: 'c', text: '114 752 kr', isCorrect: true },
              { id: 'd', text: '135 000 kr', isCorrect: false },
            ],
            solution: '$K = 100\\,000 \\cdot 1{,}035^4 = 100\\,000 \\cdot 1{,}14752 \\approx 114\\,752$ kr. Renters rente gir litt mer enn enkel rente (som ville gitt $114\\,000$ kr).',
          },
          {
            id: '2p-1-2-n-quiz1-q1',
            task: 'Hva er vekstfaktoren for en rente på 4 %?',
            options: [
              { id: 'a', text: '$0{,}04$', isCorrect: false },
              { id: 'b', text: '$1{,}04$', isCorrect: true },
              { id: 'c', text: '$4{,}00$', isCorrect: false },
              { id: 'd', text: '$0{,}96$', isCorrect: false },
            ],
            solution: 'Vekstfaktoren er $v = 1 + p/100 = 1 + 4/100 = 1{,}04$. Vi legger alltid 1 til prosentandelen uttrykt som desimaltall.',
          },
          {
            id: '2p-1-2-n-quiz1-q2',
            task: 'Hva er formelen for kapital etter $n$ perioder med renters rente?',
            options: [
              { id: 'a', text: '$K_n = K_0 + v \\cdot n$', isCorrect: false },
              { id: 'b', text: '$K_n = K_0 \\cdot v^n$', isCorrect: true },
              { id: 'c', text: '$K_n = K_0 \\cdot n \\cdot v$', isCorrect: false },
              { id: 'd', text: '$K_n = K_0 / v^n$', isCorrect: false },
            ],
            solution: 'Formelen for renters rente er $K_n = K_0 \\cdot v^n$, der $K_0$ er startkapitalen, $v$ er vekstfaktoren og $n$ er antall perioder. Den eksponentielle veksten gir «rente på renten».',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-2-n-section2',
      type: 'text',
      content: `## Annuitetslån – den forutsigbare veien

Nå snur vi mynten. I stedet for å tjene renter, skal vi betale dem. De fleste boliglån i Norge er enten **annuitetslån** eller **serielån**.

Et **annuitetslån** har like store terminbeløp gjennom hele nedbetalingstiden. Hver betaling inneholder to deler: renter og avdrag. I starten er rentedelen stor og avdragsdelen liten, fordi du skylder mye. Mot slutten er det omvendt – avdragene er store og rentene små.

Terminbeløpet beregnes med formelen: $$T = L \\cdot \\frac{r \\cdot (1+r)^n}{(1+r)^n - 1}$$

Her er $L$ lånebeløpet, $r$ renten per termin, og $n$ antall terminer.

La oss se på et eksempel. Du tar opp 200 000 kroner med 5 prosent årlig rente over 5 år med årlige terminer. Da er $L = 200\\,000$, $r = 0{,}05$ og $n = 5$. Terminbeløpet blir: $T = 200\\,000 \\cdot \\frac{0{,}05 \\cdot 1{,}05^5}{1{,}05^5 - 1} \\approx 46\\,194$ kroner. Over 5 år betaler du $5 \\cdot 46\\,194 = 230\\,970$ kroner totalt. Det betyr at de totale rentekostnadene er $230\\,970 - 200\\,000 = 30\\,970$ kroner.

Fordelen med annuitetslån er forutsigbarhet: du vet nøyaktig hva du skal betale hver termin.`,
    },
    {
      id: '2p-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på annuitetslån:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-2-n-quiz2-q0',
            task: 'Hva kjennetegner et annuitetslån?',
            options: [
              { id: 'a', text: 'Like store avdrag, men synkende terminbeløp', isCorrect: false },
              { id: 'b', text: 'Like store terminbeløp gjennom hele nedbetalingstiden', isCorrect: true },
              { id: 'c', text: 'Man betaler kun renter og nedbetaler alt til slutt', isCorrect: false },
              { id: 'd', text: 'Terminbeløpet øker for hver termin', isCorrect: false },
            ],
            solution: 'Et annuitetslån har like store terminbeløp. Innenfor hvert terminbeløp endres fordelingen mellom renter og avdrag over tid.',
          },
          {
            id: '2p-1-2-n-quiz2-q1',
            task: 'I et annuitetslån: hva skjer med rentedelen og avdragsdelen over tid?',
            options: [
              { id: 'a', text: 'Begge holder seg konstante', isCorrect: false },
              { id: 'b', text: 'Rentedelen øker og avdragsdelen synker', isCorrect: false },
              { id: 'c', text: 'Rentedelen synker og avdragsdelen øker', isCorrect: true },
              { id: 'd', text: 'Begge synker jevnt', isCorrect: false },
            ],
            solution: 'I starten er restlånet stort, så rentedelen er stor og avdragsdelen liten. Etter hvert som du betaler ned gjelden, synker restlånet, rentene blir mindre, og en større del av terminbeløpet går til avdrag.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-2-n-section3',
      type: 'text',
      content: `## Serielån – dyrt i starten, billig til slutt

Et **serielån** fungerer annerledes. Her er *avdragene* like store, men terminbeløpene *synker* over tid fordi restlånet – og dermed rentene – blir mindre for hver betaling.

Avdraget per termin er ganske enkelt: $$\\text{Avdrag} = \\frac{\\text{Lånebeløp}}{\\text{Antall terminer}}$$

Og renten beregnes av restlånet: $$\\text{Rente}_k = \\text{Restlån}_k \\cdot r$$

La oss sammenligne med det samme lånet: 200 000 kroner, 5 prosent rente, 5 år. Avdrag per år blir $200\\,000 / 5 = 40\\,000$ kroner. Første år er rentene $200\\,000 \\cdot 0{,}05 = 10\\,000$ kroner, så terminbeløpet er 50 000 kroner. Andre år: restlån 160 000, renter 8 000, terminbeløp 48 000 kroner. Og slik synker det helt ned til 42 000 kroner siste år.

Totale renter med serielån: $10\\,000 + 8\\,000 + 6\\,000 + 4\\,000 + 2\\,000 = 30\\,000$ kroner. Sammenlign med annuitetslånets 30 970 kroner – serielånet sparer deg 970 kroner. Fordelen med serielån er altså lavere totale rentekostnader, men ulempen er høyere terminbeløp i starten, da du kanskje har minst å rutte med.`,
    },
    {
      id: '2p-1-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på serielån:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-2-n-quiz3-q0',
            task: 'Hvilken lånetype gir lavest totale rentekostnader?',
            options: [
              { id: 'a', text: 'Annuitetslån, fordi terminbeløpene er like', isCorrect: false },
              { id: 'b', text: 'Det er alltid likt uansett lånetype', isCorrect: false },
              { id: 'c', text: 'Kredittkortlån, fordi renten er fast', isCorrect: false },
              { id: 'd', text: 'Serielån, fordi du betaler ned gjelden raskere', isCorrect: true },
            ],
            solution: 'Serielån gir lavere totale rentekostnader fordi du betaler ned gjelden raskere (like store avdrag fra starten). Med annuitetslån er avdragene små i begynnelsen, så restlånet forblir høyere lenger.',
          },
          {
            id: '2p-1-2-n-quiz3-q1',
            task: 'Et serielån på 200 000 kr over 5 år har et årlig avdrag på 40 000 kr. Hva er terminbeløpet det første året med 5 % rente?',
            options: [
              { id: 'a', text: '40 000 kr', isCorrect: false },
              { id: 'b', text: '50 000 kr', isCorrect: true },
              { id: 'c', text: '46 194 kr', isCorrect: false },
              { id: 'd', text: '42 000 kr', isCorrect: false },
            ],
            solution: 'Rente første år: $200\\,000 \\cdot 0{,}05 = 10\\,000$ kr. Terminbeløp: $40\\,000 + 10\\,000 = 50\\,000$ kr.',
          },
          {
            id: '2p-1-2-n-quiz3-q2',
            task: 'Hva kjennetegner et serielån sammenlignet med et annuitetslån?',
            options: [
              { id: 'a', text: 'Like store terminbeløp hele veien', isCorrect: false },
              { id: 'b', text: 'Like store avdrag, men synkende terminbeløp', isCorrect: true },
              { id: 'c', text: 'Terminbeløpene stiger over tid', isCorrect: false },
              { id: 'd', text: 'Du betaler bare renter, aldri avdrag', isCorrect: false },
            ],
            solution: 'Et serielån har like store avdrag, men terminbeløpene synker over tid fordi rentedelen avtar etter hvert som restlånet blir mindre.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-2-n-section4',
      type: 'text',
      content: `## Kredittkort – den dyreste formen for lån

Nå kommer vi til noe viktig. Et **kredittkort** gir deg en kredittramme du kan handle for. Hvis du betaler hele beløpet innen forfallsdato, koster det ingenting. Men – og dette er et stort men – hvis du bare betaler minimumsbeløpet, påløper det *svært* høye renter, typisk 20–25 prosent per år.

La oss ta Mia som eksempel. Hun har 30 000 kroner i kredittkortgjeld med 22 prosent årlig rente. Hun betaler bare minimumsbeløpet på 500 kroner per måned. Månedlig rente er $22\\% / 12 \\approx 1{,}833\\%$. Rentene den første måneden blir $30\\,000 \\cdot 0{,}01833 = 550$ kroner. Men Mia betaler bare 500 kroner! Det betyr at gjelden hennes faktisk *øker* med 50 kroner den måneden. Hun betaler ikke engang nok til å dekke rentene.

**Forbrukslån** er usikrede lån med tilsvarende høye renter, ofte 15–25 prosent. De bør brukes med stor forsiktighet. **Effektiv rente** inkluderer alle kostnader som gebyrer og termingebyr, og er det reelle målet på hvor dyrt et lån er.

Tommelfingerregelen er enkel: Betal alltid hele kredittkortregningen. Og hvis du har kredittkortgjeld – betal den ned *først*, før du tenker på sparing. Ingen sparekonto gir deg 22 prosent avkastning.`,
    },
    {
      id: '2p-1-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på kredittkort og forbrukslån:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-2-n-quiz4-q0',
            task: 'Thomas har 50 000 kr i kredittkortgjeld til 24 % årlig rente. Hvor mye er rentekostnadene den første måneden?',
            options: [
              { id: 'a', text: '500 kr', isCorrect: false },
              { id: 'b', text: '1 000 kr', isCorrect: true },
              { id: 'c', text: '12 000 kr', isCorrect: false },
              { id: 'd', text: '2 000 kr', isCorrect: false },
            ],
            solution: 'Månedlig rente $= 24\\% / 12 = 2\\%$. Renter $= 50\\,000 \\cdot 0{,}02 = 1\\,000$ kr per måned.',
          },
          {
            id: '2p-1-2-n-quiz4-q1',
            task: 'Mia har 30 000 kr i kredittkortgjeld med 22 % årlig rente og betaler 500 kr per måned. Hva skjer med gjelden?',
            options: [
              { id: 'a', text: 'Gjelden synker med 500 kr per måned', isCorrect: false },
              { id: 'b', text: 'Gjelden holder seg stabil', isCorrect: false },
              { id: 'c', text: 'Gjelden øker fordi rentene er høyere enn betalingen', isCorrect: true },
              { id: 'd', text: 'Gjelden blir betalt ned på 60 måneder', isCorrect: false },
            ],
            solution: 'Månedlig rente: $22\\%/12 \\approx 1{,}833\\%$. Renter første måned: $30\\,000 \\cdot 0{,}01833 = 550$ kr. Mia betaler bare 500 kr, som er mindre enn rentene. Gjelden øker med 50 kr.',
          },
          {
            id: '2p-1-2-n-quiz4-q2',
            task: 'Hva måler effektiv rente?',
            options: [
              { id: 'a', text: 'Bare rentebeløpet per år', isCorrect: false },
              { id: 'b', text: 'Kun gebyrer og omkostninger', isCorrect: false },
              { id: 'c', text: 'De totale lånekostnadene inkludert renter, gebyrer og andre kostnader', isCorrect: true },
              { id: 'd', text: 'Inflasjonsjustert rente', isCorrect: false },
            ],
            solution: 'Effektiv rente inkluderer alle kostnader forbundet med lånet: renter, gebyrer, termingebyr og andre kostnader. Det er det reelle målet på hvor dyrt et lån faktisk er.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-2-n-section5',
      type: 'text',
      content: `## BSU og sparing – la pengene jobbe for deg

Heldigvis finnes det også en lysere side av rentehistorien. Når du *sparer*, jobber renters rente *for* deg i stedet for mot deg.

Den beste spareordningen for unge i Norge er **BSU** – Boligsparing for ungdom. Den er tilgjengelig for personer under 34 år som ikke eier bolig. Du kan spare inntil 27 500 kroner per år, og totalt 300 000 kroner. I tillegg til ofte ekstra god rente fra banken, får du et **skattefradrag** på 10 prosent av det du sparer. Sparer du 20 000 kroner, får du altså 2 000 kroner tilbake på skatten. Det er som å få garantert 10 prosent avkastning på toppen av renten – det finnes ingen bedre deal.

Andre spareformer inkluderer **høyrentekonto** for trygg sparing med moderat rente og **fond** for de som tåler litt risiko men ønsker potensielt høyere avkastning over tid.

La oss regne på BSU. Sparer du 20 000 kroner per år med 3,8 prosent rente i 4 år, bruker vi formelen for annuitetssparing: $S = a \\cdot \\frac{v^n - 1}{v - 1} = 20\\,000 \\cdot \\frac{1{,}038^4 - 1}{0{,}038} \\approx 84\\,895$ kroner. I tillegg får du $4 \\cdot 20\\,000 \\cdot 0{,}10 = 8\\,000$ kroner i skattefradrag. Kombinert med renter gir BSU en fantastisk start på boligdrømmen.`,
    },
    {
      id: '2p-1-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på BSU og sparing:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-2-n-quiz5-q0',
            task: 'Hva er skattefradraget du får ved å spare 25 000 kr i BSU?',
            options: [
              { id: 'a', text: '5 000 kr', isCorrect: false },
              { id: 'b', text: '2 500 kr', isCorrect: true },
              { id: 'c', text: '1 250 kr', isCorrect: false },
              { id: 'd', text: '25 000 kr', isCorrect: false },
            ],
            solution: 'BSU gir 10 % skattefradrag av sparebeløpet. $25\\,000 \\cdot 0{,}10 = 2\\,500$ kr tilbake på skatten.',
          },
          {
            id: '2p-1-2-n-quiz5-q1',
            task: 'Hva er maksimalt årlig sparebeløp i BSU?',
            options: [
              { id: 'a', text: '20 000 kr', isCorrect: false },
              { id: 'b', text: '25 000 kr', isCorrect: false },
              { id: 'c', text: '27 500 kr', isCorrect: true },
              { id: 'd', text: '50 000 kr', isCorrect: false },
            ],
            solution: 'I BSU kan du spare inntil 27 500 kr per år, med et totaltak på 300 000 kr.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Renters rente** ($K_n = K_0 \\cdot v^n$) gir eksponentiell vekst – det er kraften som gjør sparing effektiv over tid. **Annuitetslån** har like terminbeløp og er forutsigbart, mens **serielån** har like avdrag, synkende terminbeløp og lavere total rentekostnad. **Kredittkort** og forbrukslån har svært høy rente (20–25 %) og bør betales ned først. **Effektiv rente** er det reelle målet på lånekostnader. **BSU** gir 10 prosent skattefradrag og er den beste spareordningen for unge.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3 NARRATIV: Skatt og avgifter
// ============================================================================

export const CHAPTER_2P_1_3_NARRATIV: TextbookChapter = {
  id: '2p-1-3-narrativ',
  courseId: '2p',
  chapterNumber: '1.3',
  title: 'Skatt og avgifter',
  subtitle: 'Narrativ versjon',
  description: 'Følg pengene fra lønnsslippen til statskassen – og lær hvorfor 25 % mva ikke betyr at staten tar en fjerdedel.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og forklare sammenhenger mellom prisindeks, kroneverdi, reallønn, nominell lønn og brutto- og nettoinntekt',
    'vurdere valg knyttet til personlig økonomi og reflektere over konsekvenser av å ta opp lån og å bruke kredittkort',
  ],
  linkedChapterId: '2p-1-3',
  content: [
    {
      id: '2p-1-3-n-intro',
      type: 'text',
      content: `## Pengene ingen liker å betale

Ingen jubler når de ser skatten på lønnsslippen. Men tenk deg et samfunn uten skatt: ingen gratis skole, ingen ambulanse som kommer når du ringer 113, ingen brøytebil om vinteren. Skatter og avgifter er statens viktigste inntektskilde, og de finansierer alt vi tar for gitt.

I dette kapittelet skal vi følge pengene fra lønnsslippen din gjennom skattesystemet. Vi skal forstå trinnskatten, lære hva fradrag betyr for lommeboken, og til slutt se på merverdiavgiften – den skatten du betaler *uten* å merke det.`,
    },
    {
      id: '2p-1-3-n-section1',
      type: 'text',
      content: `## Inntektsskatt og trinnskatt – jo mer du tjener, jo mer betaler du

**Inntektsskatt** er skatt du betaler på inntekt fra arbeid, pensjon eller næring. Grunnprinsippet er at du betaler 22 prosent skatt av det som kalles **alminnelig inntekt** – bruttoinntekten din minus diverse fradrag.

Men i tillegg til denne baseskatten finnes det noe som heter **trinnskatt**. Dette er en *progressiv* skatt, som betyr at satsen øker stegvis med inntekten. Tanken er enkel: de som tjener mest, bærer en større del av byrden.

Trinnskatten fungerer slik: Inntekt opp til 208 050 kroner er fritatt. Fra 208 050 til 292 850 betaler du 1,7 prosent. Fra 292 850 til 670 000 betaler du 4,0 prosent. Og det fortsetter oppover med trinn på 13,6 prosent, 16,6 prosent og 17,6 prosent for de aller høyeste inntektene.

La oss beregne trinnskatten for en person som tjener 500 000 kroner. Trinn 1 (208 050 til 292 850): $(292\\,850 - 208\\,050) \\cdot 0{,}017 = 84\\,800 \\cdot 0{,}017 = 1\\,442$ kroner. Trinn 2 (292 850 til 500 000): $(500\\,000 - 292\\,850) \\cdot 0{,}040 = 207\\,150 \\cdot 0{,}040 = 8\\,286$ kroner. Trinn 3 er ikke aktuelt, for inntekten er under 670 000. Total trinnskatt: $1\\,442 + 8\\,286 = 9\\,728$ kroner.

Det viktige å forstå er at de høyere satsene bare gjelder for den *delen* av inntekten som overstiger grensen – ikke hele inntekten.`,
    },
    {
      id: '2p-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på trinnskatt:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-3-n-quiz1-q0',
            task: 'Hva menes med at trinnskatten er «progressiv»?',
            options: [
              { id: 'a', text: 'Alle betaler like mye i kroner', isCorrect: false },
              { id: 'b', text: 'Skatten er lik for alle inntektsnivåer', isCorrect: false },
              { id: 'c', text: 'Skatteprosenten øker med høyere inntekt', isCorrect: true },
              { id: 'd', text: 'Skatten trekkes automatisk fra lønnen', isCorrect: false },
            ],
            solution: 'Progressiv skatt betyr at skattesatsen øker stegvis med inntekten. De med høyere inntekt betaler en høyere andel i skatt.',
          },
          {
            id: '2p-1-3-n-quiz1-q1',
            task: 'En person tjener 500 000 kr. Trinnskatt trinn 1 (208 050 til 292 850) er 1,7 %. Hva blir trinnskatten for dette trinnet?',
            options: [
              { id: 'a', text: '8 500 kr', isCorrect: false },
              { id: 'b', text: '1 442 kr', isCorrect: true },
              { id: 'c', text: '3 536 kr', isCorrect: false },
              { id: 'd', text: '4 978 kr', isCorrect: false },
            ],
            solution: 'Trinnskatt trinn 1: $(292\\,850 - 208\\,050) \\cdot 0{,}017 = 84\\,800 \\cdot 0{,}017 = 1\\,442$ kr. De høyere satsene gjelder bare for den delen av inntekten som overstiger trinngrensen.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-3-n-section2',
      type: 'text',
      content: `## Fradrag – det som redder lommeboken

Heldigvis betaler du ikke skatt av *hele* bruttoinntekten. **Fradrag** reduserer beregningsgrunnlaget, og det finnes flere typer.

Det viktigste er **minstefradraget**, som alle arbeidstakere får automatisk. Det beregnes som 46 prosent av bruttolønnen, men har et tak på ca. 109 950 kroner. Tjener du mer enn ca. 239 000 kroner, treffer du taket og får maks fradrag.

I tillegg finnes **personfradraget** – et bunnfradrag på ca. 73 150 kroner som alle skatteytere får. Og har du lån, gir **renteutgiftene** et fradrag på 22 prosent av rentebeløpet.

La oss beregne skatten for en person med 450 000 kroner i bruttoinntekt. Først finner vi alminnelig inntekt: $450\\,000 - 109\\,950 = 340\\,050$ kroner (minstefradraget). Så trekker vi fra personfradraget: $340\\,050 - 73\\,150 = 266\\,900$ kroner. Skatten på alminnelig inntekt blir: $266\\,900 \\cdot 0{,}22 = 58\\,718$ kroner. I tillegg kommer trinnskatt og trygdeavgift.

Fradragene gjør at den *reelle* skatteprosenten er mye lavere enn de 22 prosentene det ser ut som. En person med 450 000 i inntekt betaler ikke 22 prosent av alt – fradragene beskytter en betydelig del.`,
    },
    {
      id: '2p-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fradrag:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-3-n-quiz2-q0',
            task: 'En person har bruttoinntekt 380 000 kr. Minstefradraget er 46 % (maks 109 950 kr). Hva blir minstefradraget?',
            options: [
              { id: 'a', text: '174 800 kr', isCorrect: false },
              { id: 'b', text: '109 950 kr', isCorrect: true },
              { id: 'c', text: '73 150 kr', isCorrect: false },
              { id: 'd', text: '380 000 kr', isCorrect: false },
            ],
            solution: '$46\\%$ av $380\\,000 = 174\\,800$ kr, men dette overstiger taket på $109\\,950$ kr. Derfor brukes maks-beløpet $109\\,950$ kr.',
          },
          {
            id: '2p-1-3-n-quiz2-q1',
            task: 'En person har bruttoinntekt 200 000 kr. Hva blir minstefradraget (46 %, maks 109 950 kr)?',
            options: [
              { id: 'a', text: '109 950 kr', isCorrect: false },
              { id: 'b', text: '92 000 kr', isCorrect: true },
              { id: 'c', text: '100 000 kr', isCorrect: false },
              { id: 'd', text: '73 150 kr', isCorrect: false },
            ],
            solution: '$46\\%$ av $200\\,000 = 92\\,000$ kr. Siden $92\\,000 < 109\\,950$, brukes det beregnede beløpet $92\\,000$ kr (taket gjelder ikke).',
          },
          {
            id: '2p-1-3-n-quiz2-q2',
            task: 'Hva er satsen for skatt på alminnelig inntekt i Norge?',
            options: [
              { id: 'a', text: '30 %', isCorrect: false },
              { id: 'b', text: '25 %', isCorrect: false },
              { id: 'c', text: '22 %', isCorrect: true },
              { id: 'd', text: '15 %', isCorrect: false },
            ],
            solution: 'Satsen for skatt på alminnelig inntekt er 22 %. Alminnelig inntekt er bruttoinntekten fratrukket fradrag (minstefradrag, personfradrag m.m.).',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-3-n-section3',
      type: 'text',
      content: `## Merverdiavgift – den usynlige skatten

Mens inntektsskatten er synlig på lønnsslippen, er **merverdiavgiften** (mva) noe du betaler *uten å tenke over det*. Hver gang du handler i butikken, er mva allerede bakt inn i prisen.

Norge har tre mva-satser. Den **generelle satsen** er 25 prosent og gjelder de fleste varer og tjenester. **Matvarer** har redusert sats på 15 prosent. Og **transport, overnatting og kultur** har 12 prosent.

Å regne med mva er ganske rett frem. Hvis en vare koster 12 000 kroner ekskl. mva med generell sats: $$\\text{Pris inkl. mva} = 12\\,000 \\cdot 1{,}25 = 15\\,000 \\text{ kr}$$

Mva-beløpet er 3 000 kroner. Det andre veien: Hvis en matvare koster 89,90 kroner inkl. 15 prosent mva, er prisen uten mva: $$\\text{Pris ekskl. mva} = \\frac{89{,}90}{1{,}15} \\approx 78{,}17 \\text{ kr}$$

Det er forbrukeren som betaler mva, men det er bedriften som krever den inn og sender den til staten. Mva er faktisk den største enkeltinntekten for den norske stat – større enn inntektsskatten.`,
    },
    {
      id: '2p-1-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på merverdiavgift:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-3-n-quiz3-q0',
            task: 'En matvare koster 89,90 kr inkl. 15 % mva. Hva er prisen ekskl. mva?',
            options: [
              { id: 'a', text: '76,42 kr', isCorrect: false },
              { id: 'b', text: '78,17 kr', isCorrect: true },
              { id: 'c', text: '74,90 kr', isCorrect: false },
              { id: 'd', text: '67,43 kr', isCorrect: false },
            ],
            solution: 'Pris ekskl. mva $= 89{,}90 / 1{,}15 \\approx 78{,}17$ kr. Vi deler på vekstfaktoren $(1 + \\text{mva-sats})$.',
          },
          {
            id: '2p-1-3-n-quiz3-q1',
            task: 'Hvilken mva-sats gjelder for matvarer i Norge?',
            options: [
              { id: 'a', text: '25 %', isCorrect: false },
              { id: 'b', text: '12 %', isCorrect: false },
              { id: 'c', text: '15 %', isCorrect: true },
              { id: 'd', text: '8 %', isCorrect: false },
            ],
            solution: 'Matvarer har redusert mva-sats på 15 %. Den generelle satsen er 25 %, og transport/kultur har 12 %.',
          },
          {
            id: '2p-1-3-n-quiz3-q2',
            task: 'En vare koster 8 000 kr ekskl. mva (25 %). Hva er prisen inkl. mva?',
            options: [
              { id: 'a', text: '8 250 kr', isCorrect: false },
              { id: 'b', text: '9 600 kr', isCorrect: false },
              { id: 'c', text: '10 000 kr', isCorrect: true },
              { id: 'd', text: '10 400 kr', isCorrect: false },
            ],
            solution: 'Pris inkl. mva $= 8\\,000 \\cdot 1{,}25 = 10\\,000$ kr.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-3-n-section4',
      type: 'text',
      content: `## Hele skattebildet – en forenklet beregning

La oss nå sette alt sammen og gjøre en forenklet skatteberegning for en person med 520 000 kroner i bruttoinntekt.

Først **minstefradraget**: 46 prosent av 520 000 er 239 200, men taket er 109 950 – vi bruker taket. **Alminnelig inntekt**: $520\\,000 - 109\\,950 = 410\\,050$ kroner. **Skattbar inntekt** etter personfradrag: $410\\,050 - 73\\,150 = 336\\,900$ kroner. **Skatt på alminnelig inntekt**: $336\\,900 \\cdot 0{,}22 = 74\\,118$ kroner.

Så **trinnskatt**: Trinn 1 (208 050 – 292 850): $84\\,800 \\cdot 0{,}017 = 1\\,442$ kroner. Trinn 2 (292 850 – 520 000): $227\\,150 \\cdot 0{,}040 = 9\\,086$ kroner. Sum trinnskatt: 10 528 kroner.

**Total skatt**: $74\\,118 + 10\\,528 = 84\\,646$ kroner. Gjennomsnittlig skatteprosent: $84\\,646 / 520\\,000 \\cdot 100\\% \\approx 16{,}3\\%$.

Legg merke til at selv om satsen på alminnelig inntekt er 22 prosent, er den *reelle* gjennomsnittsskatten bare 16,3 prosent – takket være fradragene. I tillegg kommer trygdeavgift som vi har utelatt her, men prinsippet er det samme.`,
    },
    {
      id: '2p-1-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på skatteberegning:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-3-n-quiz4-q0',
            task: 'En håndverker sender en faktura på 12 000 kr ekskl. mva (25 %). Hva blir totalprisen?',
            options: [
              { id: 'a', text: '14 400 kr', isCorrect: false },
              { id: 'b', text: '15 000 kr', isCorrect: true },
              { id: 'c', text: '12 250 kr', isCorrect: false },
              { id: 'd', text: '15 600 kr', isCorrect: false },
            ],
            solution: 'Pris inkl. mva $= 12\\,000 \\cdot 1{,}25 = 15\\,000$ kr. Mva-beløpet er $3\\,000$ kr.',
          },
          {
            id: '2p-1-3-n-quiz4-q1',
            task: 'En person med bruttoinntekt 520 000 kr har alminnelig inntekt 336 900 kr etter fradrag. Skatten på alminnelig inntekt (22 %) blir ca. 74 118 kr. Hva er omtrentlig gjennomsnittlig skatteprosent bare for denne delen?',
            options: [
              { id: 'a', text: 'Ca. 22 %', isCorrect: false },
              { id: 'b', text: 'Ca. 14,3 %', isCorrect: true },
              { id: 'c', text: 'Ca. 10 %', isCorrect: false },
              { id: 'd', text: 'Ca. 18 %', isCorrect: false },
            ],
            solution: 'Gjennomsnittlig skatteprosent $= 74\\,118 / 520\\,000 \\cdot 100\\% \\approx 14{,}3\\%$. Takket være fradragene er den reelle prosenten mye lavere enn de 22 % satsen.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-3-n-section5',
      type: 'text',
      content: `## Hvorfor betaler vi egentlig skatt?

Det er naturlig å lure på: Hvorfor har vi et progressivt skattesystem? Argumentene *for* er blant annet at de som tjener mest, har størst bærekraft og derfor bør bidra mest. En person som tjener 300 000 kroner, trenger en større andel av inntekten til nødvendige utgifter enn en som tjener 1 000 000. Progressiv skatt bidrar til omfordeling og finansierer fellesgoder alle nyter godt av.

Argumentene *mot* handler blant annet om at svært høy marginalskatt kan dempe arbeidsincentiver for høyere inntekter og potensielt føre til skatteplanlegging. Noen hevder at en flatere skatt ville vært enklere og mer rettferdig.

Men uansett syn på skattepolitikk – det å forstå *hvordan* skatten beregnes gir deg kontroll. Du kan planlegge bedre, forstå lønnsslippen din, og vite hva du faktisk sitter igjen med.

Nøkkelbegrepene å huske er: **inntektsskatt** (22 % av alminnelig inntekt), **trinnskatt** (progressiv tilleggsskatt), **fradrag** (minstefradrag og personfradrag som reduserer skatten), og **merverdiavgift** (25 %, 15 % eller 12 % på varer og tjenester).`,
    },
    {
      id: '2p-1-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på mva-beregning:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-3-n-quiz5-q0',
            task: 'En TV koster 15 990 kr inkl. 25 % mva. Hva er mva-beløpet?',
            options: [
              { id: 'a', text: '3 997,50 kr', isCorrect: false },
              { id: 'b', text: '3 198 kr', isCorrect: true },
              { id: 'c', text: '2 665 kr', isCorrect: false },
              { id: 'd', text: '4 000 kr', isCorrect: false },
            ],
            solution: 'Pris ekskl. mva $= 15\\,990 / 1{,}25 = 12\\,792$ kr. Mva-beløp $= 15\\,990 - 12\\,792 = 3\\,198$ kr.',
          },
          {
            id: '2p-1-3-n-quiz5-q1',
            task: 'Et hotellopphold koster 1 500 kr inkl. 12 % mva. Hva er prisen ekskl. mva?',
            options: [
              { id: 'a', text: 'Ca. 1 320 kr', isCorrect: false },
              { id: 'b', text: 'Ca. 1 339 kr', isCorrect: true },
              { id: 'c', text: 'Ca. 1 380 kr', isCorrect: false },
              { id: 'd', text: 'Ca. 1 200 kr', isCorrect: false },
            ],
            solution: 'Pris ekskl. mva $= 1\\,500 / 1{,}12 \\approx 1\\,339$ kr. Overnatting har redusert mva-sats på 12 %.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Inntektsskatt** beregnes som 22 % av alminnelig inntekt (etter fradrag). **Trinnskatt** er en progressiv tilleggsskatt der satsen øker stegvis med inntekten. **Minstefradrag** (46 % av lønn, maks 109 950 kr) og **personfradrag** (73 150 kr) reduserer beregningsgrunnlaget. **Merverdiavgift** betales på kjøp av varer og tjenester – 25 % generelt, 15 % på matvarer, 12 % på transport/kultur. Prisen inkl. mva finner du ved å multiplisere med vekstfaktoren, og prisen ekskl. mva ved å dele.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4 NARRATIV: Bedriftsøkonomi
// ============================================================================

export const CHAPTER_2P_1_4_NARRATIV: TextbookChapter = {
  id: '2p-1-4-narrativ',
  courseId: '2p',
  chapterNumber: '1.4',
  title: 'Bedriftsøkonomi',
  subtitle: 'Narrativ versjon',
  description: 'Start en kafé på papiret – og lær om kostnader, nullpunkt og fortjeneste gjennom en praktisk historie.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
    'utforske strategier for å løse ligninger, ligningssystemer og ulikheter og argumentere for tankemåtene sine',
  ],
  linkedChapterId: '2p-1-4',
  content: [
    {
      id: '2p-1-4-n-intro',
      type: 'text',
      content: `## Drømmen om egen kafé

Tenk deg at du vurderer å åpne en kafé. Du har funnet et flott lokale, du kan lage fantastisk kaffe, og du drømmer om å bli din egen sjef. Men før du skriver under leiekontrakten, bør du stille deg ett kritisk spørsmål: Vil dette gå rundt økonomisk?

I dette kapittelet skal vi bruke din tenkte kafé som gjennomgangseksempel for å forstå bedriftsøkonomi. Vi lærer om kostnader, inntekter, nullpunktet – og ikke minst fortjeneste og avanse.`,
    },
    {
      id: '2p-1-4-n-section1',
      type: 'text',
      content: `## Faste og variable kostnader – det som koster uansett, og det som koster per kopp

Alle bedrifter har to typer kostnader. **Faste kostnader** er utgifter som løper uansett hvor mye du produserer: husleie, forsikring, fastlønn til ansatte. Selger du null kopper kaffe en dag, koster husleien like mye.

**Variable kostnader** derimot endrer seg med produksjonen: kaffebønner, melk, engangskopper – jo flere kopper du lager, jo mer koster det. Hvis den variable kostnaden per kopp kaffe er $v$ kroner, og du selger $x$ kopper, er de totale variable kostnadene $v \\cdot x$.

**Totale kostnader** er summen: $$TK = FK + VK = FK + v \\cdot x$$

La oss sette tall på kaféen din. Faste kostnader: 40 000 kroner i måneden (husleie, forsikring, fastlønn). Variabel kostnad: 15 kroner per kopp kaffe (bønner, melk, kopp). Selger du 3 000 kopper i måneden, blir totalkostnaden: $TK = 40\\,000 + 15 \\cdot 3\\,000 = 40\\,000 + 45\\,000 = 85\\,000$ kroner.

Det å forstå forskjellen mellom faste og variable kostnader er avgjørende. Husleien må du betale uansett – men de variable kostnadene kan du påvirke gjennom innkjøpsavtaler, effektivitet og svinnreduksjon.`,
    },
    {
      id: '2p-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på faste og variable kostnader:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-4-n-quiz1-q0',
            task: 'Hvilken av disse er en fast kostnad for en frisørsalong?',
            options: [
              { id: 'a', text: 'Sjampo og hårprodukter', isCorrect: false },
              { id: 'b', text: 'Provisjonslønn til frisørene', isCorrect: false },
              { id: 'c', text: 'Husleie for lokalet', isCorrect: true },
              { id: 'd', text: 'Strøm til hårtørkere', isCorrect: false },
            ],
            solution: 'Husleie er en fast kostnad -- den er lik uansett hvor mange kunder salongen har. Sjampo, provisjonslønn og strøm til produksjon varierer med antall kunder.',
          },
          {
            id: '2p-1-4-n-quiz1-q1',
            task: 'En kafé har faste kostnader 40 000 kr/mnd og variabel kostnad 15 kr per kopp. Hva er totalkostnaden ved salg av 3 000 kopper?',
            options: [
              { id: 'a', text: '45 000 kr', isCorrect: false },
              { id: 'b', text: '85 000 kr', isCorrect: true },
              { id: 'c', text: '55 000 kr', isCorrect: false },
              { id: 'd', text: '40 000 kr', isCorrect: false },
            ],
            solution: 'TK $= FK + v \\cdot x = 40\\,000 + 15 \\cdot 3\\,000 = 40\\,000 + 45\\,000 = 85\\,000$ kr.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-4-n-section2',
      type: 'text',
      content: `## Inntekter og resultat – tjener kafeen penger?

Nå til den spennende delen. **Inntekten** er det du tjener på salg: $$I = p \\cdot x$$

der $p$ er salgsprisen per enhet og $x$ er antall solgte enheter.

**Resultatet** er forskjellen mellom inntekter og kostnader: $$R = I - TK = p \\cdot x - (FK + v \\cdot x)$$

Hvis $R > 0$, har du overskudd – bedriften tjener penger. Hvis $R = 0$, er du på nullpunktet. Og hvis $R < 0$, har du underskudd.

Tilbake til kaféen: du selger kaffe for 45 kroner per kopp. Med 3 000 kopper solgt blir inntekten $45 \\cdot 3\\,000 = 135\\,000$ kroner. Vi vet allerede at totalkostnaden er 85 000 kroner. Resultatet: $R = 135\\,000 - 85\\,000 = 50\\,000$ kroner i overskudd.

50 000 kroner i måneden – det høres bra ut! Men husk at dette er et forenklet regnestykke. I virkeligheten må du kanskje betale deg selv lønn fra dette, investere i vedlikehold, betale skatt av overskuddet, og ha en buffer for dårlige måneder.`,
    },
    {
      id: '2p-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på inntekter og resultat:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-4-n-quiz2-q0',
            task: 'En bedrift har faste kostnader 90 000 kr, salgspris 200 kr og variabel kostnad 120 kr per enhet. Hva er resultatet ved salg av 1 500 enheter?',
            options: [
              { id: 'a', text: '120 000 kr overskudd', isCorrect: false },
              { id: 'b', text: '30 000 kr overskudd', isCorrect: true },
              { id: 'c', text: '30 000 kr underskudd', isCorrect: false },
              { id: 'd', text: '210 000 kr overskudd', isCorrect: false },
            ],
            solution: '$I = 200 \\cdot 1\\,500 = 300\\,000$ kr. $TK = 90\\,000 + 120 \\cdot 1\\,500 = 270\\,000$ kr. $R = 300\\,000 - 270\\,000 = 30\\,000$ kr overskudd.',
          },
          {
            id: '2p-1-4-n-quiz2-q1',
            task: 'Hva er formelen for resultatet (overskudd/underskudd) i en bedrift?',
            options: [
              { id: 'a', text: '$R = I + TK$', isCorrect: false },
              { id: 'b', text: '$R = TK - I$', isCorrect: false },
              { id: 'c', text: '$R = I - TK$', isCorrect: true },
              { id: 'd', text: '$R = I \\cdot TK$', isCorrect: false },
            ],
            solution: 'Resultatet er $R = I - TK$ (inntekter minus totale kostnader). Når $R > 0$ har bedriften overskudd, og når $R < 0$ har den underskudd.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-4-n-section3',
      type: 'text',
      content: `## Nullpunktet – der drømmen møter virkeligheten

Det kanskje viktigste tallet for enhver bedriftseier er **nullpunktet** (break-even). Det er det antallet enheter du må selge for at inntekter og kostnader skal gå akkurat i null – ikke overskudd, ikke underskudd.

Ved nullpunktet gjelder $I = TK$, altså $p \\cdot x = FK + v \\cdot x$. Løser vi for $x$: $$x_{\\text{null}} = \\frac{FK}{p - v}$$

Forskjellen $p - v$ kalles **dekningsbidraget per enhet**. Det er beløpet som hver solgte enhet bidrar med til å dekke de faste kostnadene. Først når de faste kostnadene er dekket, begynner du å tjene penger.

For kaféen: Dekningsbidraget per kopp er $45 - 15 = 30$ kroner. Nullpunktet: $x = 40\\,000 / 30 = 1\\,333{,}3$. Siden du ikke kan selge en tredjedels kopp, runder vi opp: **1 334 kopper**. Det er omtrent 45 kopper om dagen hvis du har åpent 30 dager i måneden.

Er det realistisk? Det er det viktige spørsmålet. 45 kopper om dagen bare for å gå i null – alt over det er ren fortjeneste. Med 3 000 kopper i måneden (100 om dagen) har du god margin. Men hva om det er stille vintermåneder? Da ser du verdien av å kjenne nullpunktet.`,
    },
    {
      id: '2p-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på nullpunkt og dekningsbidrag:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-4-n-quiz3-q0',
            task: 'En bedrift har faste kostnader 150 000 kr, salgspris 250 kr og variabel kostnad 100 kr per enhet. Hvor mange enheter må selges for å nå nullpunktet?',
            options: [
              { id: 'a', text: '600 enheter', isCorrect: false },
              { id: 'b', text: '1 500 enheter', isCorrect: false },
              { id: 'c', text: '1 000 enheter', isCorrect: true },
              { id: 'd', text: '750 enheter', isCorrect: false },
            ],
            solution: 'Dekningsbidrag $= 250 - 100 = 150$ kr per enhet. Nullpunkt $= 150\\,000 / 150 = 1\\,000$ enheter.',
          },
          {
            id: '2p-1-4-n-quiz3-q1',
            task: 'Hva er dekningsbidraget per enhet?',
            options: [
              { id: 'a', text: 'Salgspris pluss variabel kostnad', isCorrect: false },
              { id: 'b', text: 'Salgspris minus variabel kostnad', isCorrect: true },
              { id: 'c', text: 'Faste kostnader delt på antall enheter', isCorrect: false },
              { id: 'd', text: 'Totalkostnaden delt på antall enheter', isCorrect: false },
            ],
            solution: 'Dekningsbidraget per enhet er $p - v$ (salgspris minus variabel kostnad). Det er beløpet som hver solgte enhet bidrar med til å dekke de faste kostnadene.',
          },
          {
            id: '2p-1-4-n-quiz3-q2',
            task: 'Hva er formelen for nullpunktet (antall enheter for å gå i null)?',
            options: [
              { id: 'a', text: '$x = FK \\cdot (p - v)$', isCorrect: false },
              { id: 'b', text: '$x = (p - v) / FK$', isCorrect: false },
              { id: 'c', text: '$x = FK / p$', isCorrect: false },
              { id: 'd', text: '$x = FK / (p - v)$', isCorrect: true },
            ],
            solution: 'Nullpunktet er $x = FK / (p - v)$, der $FK$ er faste kostnader, $p$ er salgspris og $v$ er variabel kostnad per enhet.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-4-n-section4',
      type: 'text',
      content: `## Fortjeneste og avanse – hvor mye tjener du egentlig?

Til slutt skal vi se på to begreper som ofte forveksles: **avanse** og **bruttofortjeneste**. Begge handler om fortjeneste, men de beregnes ulikt.

**Fortjeneste** (også kalt påslag) er ganske enkelt salgspris minus innkjøpspris. **Avanse** er fortjenesten uttrykt i prosent av *innkjøpsprisen*: $$\\text{Avanse} = \\frac{\\text{Fortjeneste}}{\\text{Innkjøpspris}} \\cdot 100\\%$$

**Bruttofortjeneste** er fortjenesten i prosent av *salgsprisen*: $$\\text{Bruttofortjeneste} = \\frac{\\text{Fortjeneste}}{\\text{Salgspris}} \\cdot 100\\%$$

En butikk kjøper inn en jakke for 400 kroner og selger den for 699 kroner. Fortjenesten er $699 - 400 = 299$ kroner. Avansen er $299 / 400 \\cdot 100\\% = 74{,}75\\%$. Bruttofortjenesten er $299 / 699 \\cdot 100\\% \\approx 42{,}8\\%$.

Legg merke til at avansen er mye høyere enn bruttofortjenesten – det er fordi de beregnes ut fra ulike grunnlag. Butikker oppgir gjerne avanse for å vise hvor mye de legger på, mens økonomer foretrekker bruttofortjeneste for å vise hva andelen av salgsprisen utgjør.`,
    },
    {
      id: '2p-1-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på avanse og fortjeneste:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-4-n-quiz4-q0',
            task: 'En sportsbutikk kjøper inn løpesko for 650 kr og legger på 120 % avanse. Hva blir salgsprisen?',
            options: [
              { id: 'a', text: '780 kr', isCorrect: false },
              { id: 'b', text: '1 430 kr', isCorrect: true },
              { id: 'c', text: '1 300 kr', isCorrect: false },
              { id: 'd', text: '1 560 kr', isCorrect: false },
            ],
            solution: 'Salgspris $= \\text{Innkjøpspris} \\cdot (1 + \\text{avanse}/100) = 650 \\cdot (1 + 1{,}20) = 650 \\cdot 2{,}20 = 1\\,430$ kr.',
          },
          {
            id: '2p-1-4-n-quiz4-q1',
            task: 'En butikk kjøper inn en jakke for 400 kr og selger den for 699 kr. Hva er avansen?',
            options: [
              { id: 'a', text: 'Ca. 42,8 %', isCorrect: false },
              { id: 'b', text: 'Ca. 74,75 %', isCorrect: true },
              { id: 'c', text: 'Ca. 57,2 %', isCorrect: false },
              { id: 'd', text: 'Ca. 100 %', isCorrect: false },
            ],
            solution: 'Fortjeneste $= 699 - 400 = 299$ kr. Avanse $= 299 / 400 \\cdot 100\\% = 74{,}75\\%$. Avanse beregnes i prosent av *innkjøpsprisen*.',
          },
          {
            id: '2p-1-4-n-quiz4-q2',
            task: 'Hva er forskjellen mellom avanse og bruttofortjeneste?',
            options: [
              { id: 'a', text: 'De er det samme begrepet', isCorrect: false },
              { id: 'b', text: 'Avanse beregnes av innkjøpspris, bruttofortjeneste av salgspris', isCorrect: true },
              { id: 'c', text: 'Avanse beregnes av salgspris, bruttofortjeneste av innkjøpspris', isCorrect: false },
              { id: 'd', text: 'Bruttofortjeneste er alltid høyere enn avanse', isCorrect: false },
            ],
            solution: 'Avanse er fortjeneste i prosent av *innkjøpspris*, mens bruttofortjeneste er fortjeneste i prosent av *salgspris*. Avansen vil alltid være høyere enn bruttofortjenesten for samme vare.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-4-n-section5',
      type: 'text',
      content: `## Kafédnøklet – alt henger sammen

La oss ta et siste, helhetlig blikk på kaféen. Vi kan nå stille presise spørsmål: Hva om du senker prisen med 20 prosent for å trekke flere kunder? Ny pris: $45 \\cdot 0{,}80 = 36$ kroner. Nytt dekningsbidrag: $36 - 15 = 21$ kroner. Nytt nullpunkt: $40\\,000 / 21 \\approx 1\\,905$ kopper. Plutselig må du selge nesten dobbelt så mange kopper bare for å gå i null!

Eller hva om du forhandler ned den variable kostnaden fra 15 til 12 kroner per kopp ved å bytte leverandør? Dekningsbidrag: $45 - 12 = 33$ kroner. Nullpunkt: $40\\,000 / 33 \\approx 1\\,212$ kopper. Nå trenger du færre kopper for å komme i pluss.

Dette er kraften i å forstå bedriftsøkonomi. Med enkle formler kan du modellere ulike scenarioer og ta informerte beslutninger. Skal du senke prisen, må du kompensere med volum. Kan du kutte variable kostnader, synker nullpunktet. Kan du redusere faste kostnader, synker det enda mer.

Bedriftsøkonomi handler ikke bare om store selskaper. Selger du hjemmelagde smykker på nett, driver du foodtruck eller tilbyr klippetjenester – de samme prinsippene gjelder. Kjenner du tallene dine, tar du bedre beslutninger.`,
    },
    {
      id: '2p-1-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på bedriftsøkonomi:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-1-4-n-quiz5-q0',
            task: 'Et bakeri selger brød for 42 kr med variabel kostnad 18 kr og faste kostnader 55 000 kr/mnd. Hva er dekningsbidraget per brød?',
            options: [
              { id: 'a', text: '18 kr', isCorrect: false },
              { id: 'b', text: '42 kr', isCorrect: false },
              { id: 'c', text: '24 kr', isCorrect: true },
              { id: 'd', text: '60 kr', isCorrect: false },
            ],
            solution: 'Dekningsbidrag $= \\text{Salgspris} - \\text{Variabel kostnad} = 42 - 18 = 24$ kr per brød.',
          },
          {
            id: '2p-1-4-n-quiz5-q1',
            task: 'Samme bakeri: Hvor mange brød må selges per måned for å nå nullpunktet?',
            options: [
              { id: 'a', text: 'Ca. 1 310 brød', isCorrect: false },
              { id: 'b', text: 'Ca. 2 292 brød', isCorrect: true },
              { id: 'c', text: 'Ca. 3 056 brød', isCorrect: false },
              { id: 'd', text: 'Ca. 1 833 brød', isCorrect: false },
            ],
            solution: 'Nullpunkt $= FK / (p - v) = 55\\,000 / 24 \\approx 2\\,292$ brød per måned.',
          },
          {
            id: '2p-1-4-n-quiz5-q2',
            task: 'Hva skjer med nullpunktet hvis kaféen senker prisen per kopp fra 45 kr til 36 kr (med variabel kostnad 15 kr og faste kostnader 40 000 kr)?',
            options: [
              { id: 'a', text: 'Nullpunktet synker fra 1 334 til ca. 1 000 kopper', isCorrect: false },
              { id: 'b', text: 'Nullpunktet er uendret', isCorrect: false },
              { id: 'c', text: 'Nullpunktet stiger fra ca. 1 334 til ca. 1 905 kopper', isCorrect: true },
              { id: 'd', text: 'Nullpunktet halveres', isCorrect: false },
            ],
            solution: 'Med pris 45 kr: dekningsbidrag $= 45 - 15 = 30$ kr, nullpunkt $= 40\\,000/30 \\approx 1\\,334$. Med pris 36 kr: dekningsbidrag $= 36 - 15 = 21$ kr, nullpunkt $= 40\\,000/21 \\approx 1\\,905$. Lavere pris betyr lavere dekningsbidrag og dermed høyere nullpunkt.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Faste kostnader** løper uansett produksjon (husleie, forsikring), mens **variable kostnader** endrer seg med produksjonen (råvarer, emballasje). **Totalkostnaden** er $TK = FK + v \\cdot x$. **Inntekten** er $I = p \\cdot x$. **Nullpunktet** finner du ved $x = FK / (p - v)$, der $p - v$ er **dekningsbidraget per enhet**. **Avanse** er fortjeneste i prosent av innkjøpspris, mens **bruttofortjeneste** er fortjeneste i prosent av salgspris.`,
    },
  ],
  exercises: [],
};
