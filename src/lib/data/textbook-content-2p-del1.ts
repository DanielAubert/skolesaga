/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Seksjon 1: Økonomi
 * Kapittel 1.1–1.4
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Personlig økonomi
// ============================================================================

export const CHAPTER_2P_1_1: TextbookChapter = {
  id: '2p-1-1',
  courseId: '2p',
  chapterNumber: '1.1',
  title: 'Personlig økonomi',
  description: 'Inntekt, utgifter, budsjett og regnskap for privatpersoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'vurdere valg knyttet til personlig økonomi og reflektere over konsekvenser av å ta opp lån og å bruke kredittkort',
    'utforske og forklare sammenhenger mellom prisindeks, kroneverdi, reallønn, nominell lønn og brutto- og nettoinntekt',
  ],
  content: [
    // INTRO
    {
      id: '2p-1-1-intro',
      type: 'text',
      content: `## Personlig økonomi

God økonomistyring er grunnlaget for et stabilt voksenliv. Enten du jobber deltid ved siden av skolen eller planlegger fremtidig karriere, er det viktig å forstå hvordan inntekter, utgifter og budsjett henger sammen.

I dette kapittelet skal du lære:
- Forskjellen mellom brutto- og nettoinntekt
- Hvordan sette opp og bruke et budsjett
- Hva likviditet betyr og hvorfor det er viktig
- Forskjellen mellom nominell lønn og reallønn`,
    },

    // BLOKK 1: Inntekt
    {
      id: '2p-1-1-def-brutto-netto',
      type: 'definition',
      title: 'Bruttoinntekt og nettoinntekt',
      content: `**Bruttoinntekt** er den samlede inntekten din før skatt og andre trekk.

**Nettoinntekt** er det du faktisk får utbetalt etter at skatt, pensjonsinnskudd og andre trekk er trukket fra.

$$\\text{Nettoinntekt} = \\text{Bruttoinntekt} - \\text{Skatt} - \\text{Andre trekk}$$`,
    },
    {
      id: '2p-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregne nettoinntekt',
      problem: 'Sara har en brutto månedslønn på 35 000 kr. Skattetrekket hennes er 30 %, og hun betaler 2 % i pensjonsinnskudd. Hva er nettoinntekten?',
      solution: `**Løsning:**

Skattetrekk: $35\\,000 \\cdot 0{,}30 = 10\\,500$ kr

Pensjonsinnskudd: $35\\,000 \\cdot 0{,}02 = 700$ kr

Nettoinntekt: $35\\,000 - 10\\,500 - 700 = 23\\,800$ kr

**Svar:** Sara får utbetalt 23 800 kr per måned.`,
    },
    {
      id: '2p-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Ola har en brutto månedslønn på 42 000 kr. Skattetrekket er 33 % og pensjonsinnskuddet er 2 %. Hva er nettoinntekten hans?',
        options: [
          { id: 'a', text: '27 300 kr', isCorrect: true },
          { id: 'b', text: '28 140 kr', isCorrect: false },
          { id: 'c', text: '29 400 kr', isCorrect: false },
          { id: 'd', text: '26 460 kr', isCorrect: false },
        ],
        solution: 'Skattetrekk: 42 000 · 0,33 = 13 860 kr. Pensjon: 42 000 · 0,02 = 840 kr. Netto: 42 000 − 13 860 − 840 = 27 300 kr.',
      },
    },
    {
      id: '2p-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Kari har en nettoinntekt på 28 000 kr per måned. Skattetrekket er 32 % og pensjonsinnskuddet er 2 % av bruttolønnen. Finn bruttolønnen hennes.',
        hints: ['Netto = Brutto − 32 % av Brutto − 2 % av Brutto = Brutto · (1 − 0,32 − 0,02)'],
        solution: 'Brutto · (1 − 0,32 − 0,02) = 28 000. Brutto · 0,66 = 28 000. Brutto = 28 000 / 0,66 ≈ 42 424 kr.',
      },
    },

    // BLOKK 2: Budsjett
    {
      id: '2p-1-1-def-budsjett',
      type: 'definition',
      title: 'Budsjett',
      content: `Et **budsjett** er en plan for hvordan du vil bruke pengene dine i en bestemt periode. Det viser forventede inntekter og utgifter.

Et budsjett har to hovedkategorier:
- **Faste utgifter**: Utgifter som er like store hver måned (husleie, forsikring, abonnementer)
- **Variable utgifter**: Utgifter som varierer fra måned til måned (mat, klær, transport, fritid)`,
    },
    {
      id: '2p-1-1-example-2',
      type: 'example',
      title: 'Eksempel: Sette opp et månedsbudsjett',
      problem: 'Jonas har en nettoinntekt på 25 000 kr per måned. Han har følgende utgifter: husleie 8 500 kr, strøm 1 200 kr, mobil og internett 600 kr, forsikring 400 kr, mat 4 000 kr, transport 1 500 kr, klær 800 kr, fritid 2 000 kr. Sett opp budsjettet og finn ut hvor mye han kan spare.',
      solution: `**Løsning:**

| Post | Beløp |
|------|-------|
| **Inntekt** | 25 000 kr |
| **Faste utgifter:** | |
| Husleie | 8 500 kr |
| Strøm | 1 200 kr |
| Mobil/internett | 600 kr |
| Forsikring | 400 kr |
| **Sum faste** | **10 700 kr** |
| **Variable utgifter:** | |
| Mat | 4 000 kr |
| Transport | 1 500 kr |
| Klær | 800 kr |
| Fritid | 2 000 kr |
| **Sum variable** | **8 300 kr** |
| **Sum utgifter** | **19 000 kr** |
| **Til sparing** | **6 000 kr** |

**Svar:** Jonas kan spare 6 000 kr per måned.`,
    },
    {
      id: '2p-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Maria har en nettoinntekt på 22 000 kr per måned. Faste utgifter er 9 800 kr og variable utgifter er 7 500 kr. a) Hvor mye har hun igjen til sparing? b) Hvilken prosentandel av inntekten går til sparing?',
        hints: ['Sparing = Inntekt − Faste − Variable. Prosent: (Sparing / Inntekt) · 100 %'],
        solution: 'a) Sparing = 22 000 − 9 800 − 7 500 = 4 700 kr. b) 4 700 / 22 000 · 100 % ≈ 21,4 %.',
      },
    },
    {
      id: '2p-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Ifølge 50/30/20-regelen, hvor stor andel av nettoinntekten bør gå til sparing og nedbetaling av gjeld?',
        options: [
          { id: 'a', text: '20 %', isCorrect: true },
          { id: 'b', text: '30 %', isCorrect: false },
          { id: 'c', text: '50 %', isCorrect: false },
          { id: 'd', text: '10 %', isCorrect: false },
        ],
        solution: '50/30/20-regelen: 50 % til nødvendige utgifter, 30 % til ønsker, 20 % til sparing og gjeldsbetaling.',
      },
    },

    // BLOKK 3: Likviditet
    {
      id: '2p-1-1-def-likviditet',
      type: 'definition',
      title: 'Likviditet',
      content: `**Likviditet** betyr evnen til å betale regninger og utgifter når de forfaller.

Du har god likviditet hvis du har nok penger tilgjengelig til å dekke løpende utgifter. Selv om du har penger bundet i fond eller eiendom, kan du ha dårlig likviditet dersom du ikke har kontanter tilgjengelig.

**Likviditetsoversikt** = Innbetalinger − Utbetalinger i en bestemt periode`,
    },
    {
      id: '2p-1-1-example-3',
      type: 'example',
      title: 'Eksempel: Likviditetsoversikt',
      problem: 'I januar har Erik 5 000 kr på konto. Han får lønn 25 000 kr den 15. januar. Husleien på 9 000 kr forfaller 1. januar, og strømregningen på 2 500 kr forfaller 10. januar. Har han nok penger til alle utgiftene?',
      solution: `**Løsning:**

1. januar: Saldo 5 000 − Husleie 9 000 = **−4 000 kr** (negativt!)

Erik har ikke nok penger til å betale husleien 1. januar, selv om han får 25 000 kr den 15. januar. Han har et **likviditetsproblem**.

**Løsning for Erik:** Flytte forfallsdato på husleien, eller ha en bufferkonto.`,
    },
    {
      id: '2p-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lise har 3 000 kr på konto 1. mars. Hun får utbetalt 20 000 kr den 15. mars. Utgiftene er: husleie 8 000 kr (1. mars), strøm 1 800 kr (5. mars), forsikring 600 kr (20. mars), mat og annet 5 000 kr (jevnt fordelt). Lag en likviditetsoversikt og vurder om hun har et likviditetsproblem.',
        hints: ['Sjekk saldoen etter hver utgift, i kronologisk rekkefølge.'],
        solution: '1. mars: 3 000 − 8 000 = −5 000 kr (negativt!). Lise har et likviditetsproblem allerede 1. mars. Hun bør ha minst 8 000 kr i buffer ved månedsstart.',
      },
    },

    // BLOKK 4: Nominell lønn og reallønn
    {
      id: '2p-1-1-def-nominell-reallonn',
      type: 'definition',
      title: 'Nominell lønn og reallønn',
      content: `**Nominell lønn** er lønnen målt i kroner – det beløpet som står på lønnsslippen.

**Reallønn** er kjøpekraften til lønnen – altså hva lønnen faktisk kan kjøpe av varer og tjenester. Reallønn tar hensyn til prisstigning (inflasjon).

Hvis lønnen øker med 4 % og prisene øker med 3 %, har reallønnen økt med omtrent 1 %.

$$\\text{Reallønnsvekst} \\approx \\text{Nominell lønnsvekst} - \\text{Prisstigning}$$`,
    },
    {
      id: '2p-1-1-example-4',
      type: 'example',
      title: 'Eksempel: Reallønnsvekst',
      problem: 'I fjor hadde Per en årslønn på 500 000 kr. I år økte lønnen til 525 000 kr. Konsumprisindeksen (KPI) økte fra 120,0 til 124,8 i samme periode. Har Per fått økt reallønn?',
      solution: `**Løsning:**

Nominell lønnsvekst: $\\frac{525\\,000 - 500\\,000}{500\\,000} \\cdot 100\\% = 5{,}0\\%$

Prisstigning: $\\frac{124{,}8 - 120{,}0}{120{,}0} \\cdot 100\\% = 4{,}0\\%$

Reallønnsvekst: $5{,}0\\% - 4{,}0\\% = 1{,}0\\%$

**Svar:** Ja, Per har fått økt reallønn med ca. 1 %. Kjøpekraften hans har økt.`,
    },
    {
      id: '2p-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'En arbeidstaker fikk 3,5 % lønnsøkning. Prisveksten i samme periode var 4,2 %. Hva skjedde med reallønnen?',
        options: [
          { id: 'a', text: 'Reallønnen gikk ned med ca. 0,7 %', isCorrect: true },
          { id: 'b', text: 'Reallønnen økte med 3,5 %', isCorrect: false },
          { id: 'c', text: 'Reallønnen økte med 0,7 %', isCorrect: false },
          { id: 'd', text: 'Reallønnen var uendret', isCorrect: false },
        ],
        solution: 'Reallønnsvekst ≈ 3,5 % − 4,2 % = −0,7 %. Siden prisveksten er høyere enn lønnsveksten, har kjøpekraften gått ned.',
      },
    },
    {
      id: '2p-1-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'KPI var 108,5 i 2020 og 115,2 i 2023. a) Beregn prisveksten i prosent. b) Hva måtte en lønn på 450 000 kr i 2020 minst øke til i 2023 for å opprettholde samme kjøpekraft?',
        hints: ['Prisvekst = (Ny KPI − Gammel KPI) / Gammel KPI · 100 %. For å beholde kjøpekraften må lønnen øke med minst like mye som prisene.'],
        solution: 'a) Prisvekst = (115,2 − 108,5) / 108,5 · 100 % ≈ 6,18 %. b) Ny lønn = 450 000 · (115,2 / 108,5) ≈ 450 000 · 1,0618 ≈ 477 810 kr.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bruttoinntekt vs. nettoinntekt**: Brutto er før skatt, netto er det du får utbetalt
- **Budsjett**: En plan for inntekter og utgifter med faste og variable poster
- **Likviditet**: Evnen til å betale regninger når de forfaller
- **Nominell lønn vs. reallønn**: Nominell lønn er i kroner, reallønn er justert for prisvekst

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Bruttoinntekt | Inntekt før skatt |
| Nettoinntekt | Inntekt etter skatt og trekk |
| Budsjett | Plan for pengebruk |
| Likviditet | Betalingsevne |
| Nominell lønn | Lønn i kroner |
| Reallønn | Lønn justert for prisvekst |
| KPI | Konsumprisindeks – måler prisutviklingen |`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-1-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp et realistisk månedsbudsjett for en student som bor alene i en by og jobber deltid. Bruttoinntekten er 12 000 kr per måned med 20 % skattetrekk. Inkluder minst 6 utgiftsposter og begrunn valgene dine.',
        hints: ['Start med nettoinntekten. Tenk på faste og variable utgifter. Sjekk at det går i null eller i pluss.'],
        solution: 'Netto: 12 000 · 0,80 = 9 600 kr. Eksempelbudsjett: Husleie 4 500, Strøm 500, Mat 2 500, Mobil 300, Transport 800, Fritid 500 = 9 100 kr. Til sparing: 500 kr. Budsjettet bør balansere og helst gi et lite overskudd.',
      },
    },
    {
      id: '2p-1-1-ex-9',
      type: 'exercise',
      exercise: {
        id: '2p-1-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En arbeidstaker hadde en årslønn på 480 000 kr i 2020 og 530 000 kr i 2024. KPI var 107,7 i 2020 og 120,3 i 2024. a) Beregn den nominelle lønnsveksten i prosent. b) Beregn prisveksten i prosent. c) Beregn reallønnsveksten. d) Drøft hva det betyr for arbeidstakerens kjøpekraft.',
        solution: 'a) Nominell vekst = (530 000 − 480 000) / 480 000 · 100 % ≈ 10,4 %. b) Prisvekst = (120,3 − 107,7) / 107,7 · 100 % ≈ 11,7 %. c) Reallønnsvekst ≈ 10,4 % − 11,7 % = −1,3 %. d) Til tross for en nominell lønnsøkning på over 10 %, har kjøpekraften gått ned med ca. 1,3 %. Det betyr at arbeidstakeren i praksis kan kjøpe færre varer og tjenester enn i 2020.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Bruttoinntekt', definition: 'Inntekt før skatt og andre trekk' },
    { term: 'Nettoinntekt', definition: 'Inntekt etter skatt og trekk – det du får utbetalt' },
    { term: 'Budsjett', definition: 'Plan for inntekter og utgifter i en periode' },
    { term: 'Likviditet', definition: 'Evne til å betale regninger når de forfaller' },
    { term: 'Nominell lønn', definition: 'Lønnen målt i kroner' },
    { term: 'Reallønn', definition: 'Lønnen justert for prisvekst (kjøpekraft)' },
    { term: 'KPI', definition: 'Konsumprisindeks – måler prisnivået i samfunnet' },
  ],
};

// ============================================================================
// Kapittel 1.2: Lån og sparing
// ============================================================================

export const CHAPTER_2P_1_2: TextbookChapter = {
  id: '2p-1-2',
  courseId: '2p',
  chapterNumber: '1.2',
  title: 'Lån og sparing',
  description: 'Annuitetslån, serielån, nedbetaling og spareordninger.',
  estimatedMinutes: 60,
  prerequisites: ['2p-1-1'],
  competenceGoals: [
    'vurdere valg knyttet til personlig økonomi og reflektere over konsekvenser av å ta opp lån og å bruke kredittkort',
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
  ],
  content: [
    // INTRO
    {
      id: '2p-1-2-intro',
      type: 'text',
      content: `## Lån og sparing

De aller fleste av oss vil på et tidspunkt ta opp lån – for eksempel studielån, billån eller boliglån. Å forstå hvordan lån fungerer og hva det koster, er avgjørende for å ta gode økonomiske valg.

I dette kapittelet skal du lære:
- Hva rente og renters rente betyr
- Forskjellen mellom annuitetslån og serielån
- Hvorfor kredittkort kan bli dyrt
- Hvordan sparing med rentes rente-effekten virker`,
    },

    // BLOKK 1: Rente og vekstfaktor
    {
      id: '2p-1-2-def-rente',
      type: 'definition',
      title: 'Rente og vekstfaktor',
      content: `**Rente** er prisen du betaler for å låne penger, eller avkastningen du får på sparepenger.

**Vekstfaktor** brukes for å beregne ny verdi etter renteendring:

$$\\text{Vekstfaktor} = 1 + \\frac{\\text{renteprosent}}{100}$$

For et innskudd på 3 % rente: Vekstfaktor $= 1 + 0{,}03 = 1{,}03$

**Renters rente** (sammensatt rente): Når rentene legges til kapitalen og selv gir rente:

$$K_n = K_0 \\cdot v^n$$

der $K_0$ er startkapitalen, $v$ er vekstfaktoren og $n$ er antall perioder.`,
    },
    {
      id: '2p-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Sparing med renters rente',
      problem: 'Du setter inn 50 000 kr i banken til 4 % årlig rente. Hvor mye har du etter 6 år?',
      solution: `**Løsning:**

Vekstfaktor: $v = 1{,}04$

Etter 6 år: $K_6 = 50\\,000 \\cdot 1{,}04^6 = 50\\,000 \\cdot 1{,}2653 \\approx 63\\,265$ kr

Renteinntekt: $63\\,265 - 50\\,000 = 13\\,265$ kr

**Svar:** Du har 63 265 kr etter 6 år.

(Med enkel rente ville du bare fått $50\\,000 \\cdot 0{,}04 \\cdot 6 = 12\\,000$ kr i rente. Renters rente gir deg 1 265 kr ekstra.)`,
    },
    {
      id: '2p-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Du setter inn 100 000 kr til 3,5 % årlig rente. Hvor mye har du etter 4 år?',
        options: [
          { id: 'a', text: '114 752 kr', isCorrect: true },
          { id: 'b', text: '114 000 kr', isCorrect: false },
          { id: 'c', text: '103 500 kr', isCorrect: false },
          { id: 'd', text: '135 000 kr', isCorrect: false },
        ],
        solution: 'K = 100 000 · 1,035⁴ = 100 000 · 1,14752 ≈ 114 752 kr.',
      },
    },
    {
      id: '2p-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Et innskudd på 80 000 kr har vokst til 95 600 kr etter 5 år med renters rente. Finn den årlige renten.',
        hints: ['Bruk formelen K = K₀ · v^n og løs for v. Renten er (v − 1) · 100 %.'],
        solution: '95 600 = 80 000 · v⁵. v⁵ = 95 600 / 80 000 = 1,195. v = 1,195^(1/5) ≈ 1,0363. Rente ≈ 3,63 %.',
      },
    },

    // BLOKK 2: Annuitetslån
    {
      id: '2p-1-2-def-annuitet',
      type: 'definition',
      title: 'Annuitetslån',
      content: `Et **annuitetslån** har like store terminbeløp gjennom hele nedbetalingstiden. Hvert terminbeløp består av renter og avdrag:
- I starten er rentedelen stor og avdragsdelen liten
- Mot slutten er avdragsdelen stor og rentedelen liten

**Terminbeløp for annuitetslån:**

$$T = L \\cdot \\frac{r \\cdot (1+r)^n}{(1+r)^n - 1}$$

der $L$ er lånebeløpet, $r$ er rente per termin og $n$ er antall terminer.`,
    },
    {
      id: '2p-1-2-example-2',
      type: 'example',
      title: 'Eksempel: Annuitetslån',
      problem: 'Du tar opp et lån på 200 000 kr med 5 % årlig rente. Lånet skal betales ned over 5 år med årlige terminer. Beregn terminbeløpet og de totale rentekostnadene.',
      solution: `**Løsning:**

$L = 200\\,000$, $r = 0{,}05$, $n = 5$

$$T = 200\\,000 \\cdot \\frac{0{,}05 \\cdot 1{,}05^5}{1{,}05^5 - 1} = 200\\,000 \\cdot \\frac{0{,}05 \\cdot 1{,}2763}{1{,}2763 - 1}$$

$$= 200\\,000 \\cdot \\frac{0{,}06381}{0{,}2763} = 200\\,000 \\cdot 0{,}23097 = 46\\,194 \\text{ kr}$$

Total tilbakebetaling: $5 \\cdot 46\\,194 = 230\\,970$ kr

Totale rentekostnader: $230\\,970 - 200\\,000 = 30\\,970$ kr

**Svar:** Terminbeløpet er 46 194 kr. Du betaler 30 970 kr i renter.`,
    },
    {
      id: '2p-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Et annuitetslån på 150 000 kr har 4 % årlig rente og betales ned over 3 år med årlige terminer. a) Beregn terminbeløpet. b) Beregn de totale rentekostnadene.',
        hints: ['Bruk formelen T = L · r(1+r)^n / ((1+r)^n − 1) med L = 150 000, r = 0,04 og n = 3.'],
        solution: 'a) T = 150 000 · 0,04 · 1,04³ / (1,04³ − 1) = 150 000 · 0,04 · 1,12486 / 0,12486 = 150 000 · 0,36035 ≈ 54 053 kr. b) Total: 3 · 54 053 = 162 158 kr. Renter: 162 158 − 150 000 = 12 158 kr.',
      },
    },
    {
      id: '2p-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner et annuitetslån?',
        options: [
          { id: 'a', text: 'Like store terminbeløp gjennom hele nedbetalingstiden', isCorrect: true },
          { id: 'b', text: 'Like store avdrag, men synkende terminbeløp', isCorrect: false },
          { id: 'c', text: 'Man betaler kun renter og nedbetaler alt til slutt', isCorrect: false },
          { id: 'd', text: 'Terminbeløpet øker for hver termin', isCorrect: false },
        ],
        solution: 'Et annuitetslån har like store terminbeløp. Innenfor hvert terminbeløp endres fordelingen mellom renter og avdrag.',
      },
    },

    // BLOKK 3: Serielån
    {
      id: '2p-1-2-def-serielaan',
      type: 'definition',
      title: 'Serielån',
      content: `Et **serielån** har like store avdrag, men terminbeløpene synker over tid fordi restlånet (og dermed rentene) blir mindre.

**Avdrag per termin:**
$$\\text{Avdrag} = \\frac{\\text{Lånebeløp}}{\\text{Antall terminer}}$$

**Rente per termin:**
$$\\text{Rente}_k = \\text{Restlån}_k \\cdot r$$

Serielån gir **lavere totale rentekostnader** enn annuitetslån, men har høyere terminbeløp i starten.`,
    },
    {
      id: '2p-1-2-example-3',
      type: 'example',
      title: 'Eksempel: Serielån',
      problem: 'Du tar opp et serielån på 200 000 kr med 5 % årlig rente og betaler ned over 5 år med årlige terminer. Lag en nedbetalingsplan.',
      solution: `**Løsning:**

Avdrag per år: $200\\,000 / 5 = 40\\,000$ kr

| År | Restlån | Rente | Avdrag | Terminbeløp |
|----|---------|-------|--------|-------------|
| 1 | 200 000 | 10 000 | 40 000 | 50 000 |
| 2 | 160 000 | 8 000 | 40 000 | 48 000 |
| 3 | 120 000 | 6 000 | 40 000 | 46 000 |
| 4 | 80 000 | 4 000 | 40 000 | 44 000 |
| 5 | 40 000 | 2 000 | 40 000 | 42 000 |

Sum renter: $10\\,000 + 8\\,000 + 6\\,000 + 4\\,000 + 2\\,000 = 30\\,000$ kr

**Sammenlignet med annuitetslånet** (30 970 kr i renter) sparer du 970 kr med serielån.`,
    },
    {
      id: '2p-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Et serielån på 120 000 kr har 6 % årlig rente og betales ned over 4 år med årlige terminer. a) Hva er avdraget per år? b) Hva er terminbeløpet det første året? c) Hva er terminbeløpet det siste året? d) Hva er de totale rentekostnadene?',
        solution: 'a) Avdrag = 120 000 / 4 = 30 000 kr. b) År 1: Rente = 120 000 · 0,06 = 7 200. Termin = 30 000 + 7 200 = 37 200 kr. c) År 4: Restlån = 30 000. Rente = 30 000 · 0,06 = 1 800. Termin = 30 000 + 1 800 = 31 800 kr. d) Totale renter = 7 200 + 5 400 + 3 600 + 1 800 = 18 000 kr.',
      },
    },

    // BLOKK 4: Kredittkort
    {
      id: '2p-1-2-def-kredittkort',
      type: 'definition',
      title: 'Kredittkort og forbrukslån',
      content: `Et **kredittkort** gir deg en kredittramme du kan handle for. Hvis du betaler hele beløpet innen forfallsdato, koster det ingenting. Hvis du bare betaler minimumsbeløpet, påløper det **høye renter** (typisk 20–25 % per år).

**Forbrukslån** er usikrede lån med svært høy rente (ofte 15–25 %). De bør brukes med stor forsiktighet.

**Effektiv rente** inkluderer alle kostnader (gebyrer, termingebyr osv.) og er det reelle mål på hvor dyrt et lån er.`,
    },
    {
      id: '2p-1-2-example-4',
      type: 'example',
      title: 'Eksempel: Kredittkortgjeld',
      problem: 'Mia har 30 000 kr i kredittkortgjeld med 22 % årlig rente. Hun betaler bare minimumsbeløpet på 500 kr per måned. Hvor mye renter påløper den første måneden?',
      solution: `**Løsning:**

Månedlig rente: $22\\% / 12 \\approx 1{,}833\\%$

Renter første måned: $30\\,000 \\cdot 0{,}01833 = 550$ kr

Merk: Mia betaler 500 kr, men rentene er 550 kr! Det betyr at gjelden **øker** med 50 kr den første måneden. Hun betaler ikke engang nok til å dekke rentene.

**Svar:** 550 kr i renter. Med kun 500 kr i betaling øker gjelden.`,
    },
    {
      id: '2p-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Thomas har 50 000 kr i kredittkortgjeld til 24 % årlig rente. Hvor mye er rentekostnadene den første måneden?',
        options: [
          { id: 'a', text: '1 000 kr', isCorrect: true },
          { id: 'b', text: '12 000 kr', isCorrect: false },
          { id: 'c', text: '500 kr', isCorrect: false },
          { id: 'd', text: '2 000 kr', isCorrect: false },
        ],
        solution: 'Månedlig rente = 24 % / 12 = 2 %. Renter = 50 000 · 0,02 = 1 000 kr.',
      },
    },

    // BLOKK 5: Sparing
    {
      id: '2p-1-2-text-sparing',
      type: 'text',
      content: `### Spareordninger

De vanligste spareformene for unge:

**BSU (Boligsparing for ungdom):**
- For personer under 34 år som ikke eier bolig
- Maks sparebeløp: 27 500 kr per år (totalt 300 000 kr)
- Skattefradrag på 10 % av sparebeløpet
- Ofte ekstra god rente fra banken

**Høyrentekonto:** Trygg sparing med lav risiko og moderat rente.

**Fond:** Høyere risiko, men potensielt høyere avkastning over tid.`,
    },
    {
      id: '2p-1-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'Du sparer 20 000 kr per år i BSU med 3,8 % rente i 4 år. a) Beregn sluttverdien ved å bruke formelen for annuitetssparing. b) Hvor mye får du i skattefradrag totalt?',
        hints: ['Annuitetssparing: S = a · ((v^n − 1) / (v − 1)) der a er årlig sparebeløp og v er vekstfaktoren. Skattefradrag = 10 % av årlig innskudd.'],
        solution: 'a) S = 20 000 · ((1,038⁴ − 1) / 0,038) = 20 000 · (1,1613 − 1) / 0,038 = 20 000 · 4,245 ≈ 84 895 kr. b) Skattefradrag: 4 · 20 000 · 0,10 = 8 000 kr.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Renters rente**: $K_n = K_0 \\cdot v^n$ – renter som legges til kapitalen gir eksponentiell vekst
- **Annuitetslån**: Like terminbeløp, men fordelingen mellom renter og avdrag endrer seg
- **Serielån**: Like avdrag, synkende terminbeløp, lavere total rentekostnad
- **Kredittkort**: Svært høy rente ved ikke å betale hele beløpet
- **Sparing**: BSU gir skattefradrag og god rente for unge

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Vekstfaktor | $1 + r/100$ – brukes til renteberegning |
| Annuitetslån | Like terminbeløp |
| Serielån | Like avdrag, synkende terminbeløp |
| Effektiv rente | Rente inkludert alle kostnader |
| BSU | Boligsparing for ungdom med skattefordel |`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-1-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign et annuitetslån og et serielån på 300 000 kr med 5 % rente over 5 år (årlige terminer). Beregn de totale rentekostnadene for begge og forklar hvilken lånetype du ville valgt.',
        solution: 'Serielån: Avdrag = 60 000 kr/år. Renter: 15 000 + 12 000 + 9 000 + 6 000 + 3 000 = 45 000 kr. Annuitetslån: T = 300 000 · 0,05·1,05⁵/(1,05⁵−1) ≈ 69 291 kr. Total: 5 · 69 291 = 346 456 kr. Renter: 46 456 kr. Serielån er ca. 1 456 kr billigere, men har høyere startterminer (75 000 vs. 69 291).',
      },
    },
    {
      id: '2p-1-2-ex-9',
      type: 'exercise',
      exercise: {
        id: '2p-1-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Emma vurderer to alternativer: a) Betale ned 40 000 kr i kredittkortgjeld med 22 % rente, eller b) Sette 40 000 kr i fond med forventet 8 % avkastning. Begge over 3 år. Beregn hva hvert alternativ koster/gir, og drøft hva som er smartest.',
        solution: 'Kredittkortgjeld etter 3 år (uten nedbetaling): 40 000 · 1,22³ = 40 000 · 1,8158 = 72 634 kr (32 634 kr i renter). Fond etter 3 år: 40 000 · 1,08³ = 40 000 · 1,2597 = 50 389 kr (10 389 kr gevinst). Å betale ned gjelden sparer 32 634 kr, mens fondet gir 10 389 kr. Å betale ned kredittkortgjeld først er alltid smartest når renten er høyere enn forventet avkastning.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Rente', definition: 'Prisen for å låne penger, eller avkastningen på sparepenger' },
    { term: 'Vekstfaktor', definition: '1 + r/100 – brukes i renteberegninger' },
    { term: 'Renters rente', definition: 'Renter som legges til kapitalen og selv gir rente' },
    { term: 'Annuitetslån', definition: 'Lån med like store terminbeløp' },
    { term: 'Serielån', definition: 'Lån med like store avdrag' },
    { term: 'Kredittkort', definition: 'Betalingskort med kredittramme og høy rente' },
    { term: 'BSU', definition: 'Boligsparing for ungdom med skattefordel' },
  ],
};

// ============================================================================
// Kapittel 1.3: Skatt og avgifter
// ============================================================================

export const CHAPTER_2P_1_3: TextbookChapter = {
  id: '2p-1-3',
  courseId: '2p',
  chapterNumber: '1.3',
  title: 'Skatt og avgifter',
  description: 'Skattesystemet, inntektsskatt, merverdiavgift og særavgifter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og forklare sammenhenger mellom prisindeks, kroneverdi, reallønn, nominell lønn og brutto- og nettoinntekt',
    'vurdere valg knyttet til personlig økonomi og reflektere over konsekvenser av å ta opp lån og å bruke kredittkort',
  ],
  content: [
    // INTRO
    {
      id: '2p-1-3-intro',
      type: 'text',
      content: `## Skatt og avgifter

Skatter og avgifter er statens viktigste inntektskilde. De finansierer offentlige tjenester som skole, helse, veier og forsvar. Å forstå skattesystemet hjelper deg å planlegge din egen økonomi.

I dette kapittelet skal du lære:
- Hvordan inntektsskatt beregnes
- Hva trinnskatt er
- Forskjellen mellom skatt og merverdiavgift (mva)
- Hvordan beregne pris med og uten mva`,
    },

    // BLOKK 1: Inntektsskatt
    {
      id: '2p-1-3-def-inntektsskatt',
      type: 'definition',
      title: 'Inntektsskatt',
      content: `**Inntektsskatt** er skatt på inntekt fra arbeid, pensjon eller næring.

Skatten beregnes av **alminnelig inntekt** (inntekt minus fradrag) med en sats på 22 %.

I tillegg kommer **trinnskatt** – en progressiv skatt som øker med inntekten:

| Trinn | Inntekt fra | Sats |
|-------|-------------|------|
| 1 | 208 050 kr | 1,7 % |
| 2 | 292 850 kr | 4,0 % |
| 3 | 670 000 kr | 13,6 % |
| 4 | 937 900 kr | 16,6 % |
| 5 | 1 573 500 kr | 17,6 % |

(Satsene er eksempelverdier og endres årlig av Stortinget.)`,
    },
    {
      id: '2p-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Beregne trinnskatt',
      problem: 'Beregn trinnskatten for en person med en bruttoinntekt på 500 000 kr.',
      solution: `**Løsning:**

Trinn 1 (208 050 – 292 850): $(292\\,850 - 208\\,050) \\cdot 0{,}017 = 84\\,800 \\cdot 0{,}017 = 1\\,442$ kr

Trinn 2 (292 850 – 500 000): $(500\\,000 - 292\\,850) \\cdot 0{,}040 = 207\\,150 \\cdot 0{,}040 = 8\\,286$ kr

Trinn 3: Ikke aktuelt (inntekten er under 670 000 kr)

**Total trinnskatt:** $1\\,442 + 8\\,286 = 9\\,728$ kr

**Svar:** Trinnskatten blir 9 728 kr.`,
    },
    {
      id: '2p-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beregn trinnskatten for en person med 350 000 kr i bruttoinntekt. Bruk satsene fra tabellen over.',
        hints: ['Du når inn i trinn 1 og trinn 2. Beregn skatten for hvert trinn separat.'],
        solution: 'Trinn 1: (292 850 − 208 050) · 0,017 = 84 800 · 0,017 = 1 442 kr. Trinn 2: (350 000 − 292 850) · 0,040 = 57 150 · 0,040 = 2 286 kr. Total trinnskatt = 1 442 + 2 286 = 3 728 kr.',
      },
    },
    {
      id: '2p-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva menes med at trinnskatten er «progressiv»?',
        options: [
          { id: 'a', text: 'Skatteprosenten øker med høyere inntekt', isCorrect: true },
          { id: 'b', text: 'Alle betaler like mye i kroner', isCorrect: false },
          { id: 'c', text: 'Skatten er lik for alle inntektsnivåer', isCorrect: false },
          { id: 'd', text: 'Skatten trekkes automatisk fra lønnen', isCorrect: false },
        ],
        solution: 'Progressiv skatt betyr at skattesatsen øker stegvis med inntekten. De med høyere inntekt betaler en høyere andel i skatt.',
      },
    },

    // BLOKK 2: Fradrag
    {
      id: '2p-1-3-def-fradrag',
      type: 'definition',
      title: 'Skattefradrag',
      content: `**Fradrag** reduserer beregningsgrunnlaget for skatt. De viktigste fradragene:

- **Minstefradrag**: Et standardfradrag som alle arbeidstakere får (ca. 46 % av lønn, maks ca. 109 950 kr)
- **Personfradrag**: Et bunnfradrag alle skatteytere får (ca. 73 150 kr)
- **Renteutgifter**: Renter på lån gir fradrag (22 % av rentebeløpet)

$$\\text{Alminnelig inntekt} = \\text{Bruttoinntekt} - \\text{Minstefradrag} - \\text{Andre fradrag}$$

$$\\text{Skatt på alm. inntekt} = (\\text{Alminnelig inntekt} - \\text{Personfradrag}) \\cdot 0{,}22$$`,
    },
    {
      id: '2p-1-3-example-2',
      type: 'example',
      title: 'Eksempel: Forenklet skatteberegning',
      problem: 'Beregn skatten på alminnelig inntekt for en person med 450 000 kr i bruttoinntekt. Minstefradraget er 109 950 kr og personfradraget er 73 150 kr.',
      solution: `**Løsning:**

Alminnelig inntekt: $450\\,000 - 109\\,950 = 340\\,050$ kr

Skattbar inntekt: $340\\,050 - 73\\,150 = 266\\,900$ kr

Skatt: $266\\,900 \\cdot 0{,}22 = 58\\,718$ kr

**Svar:** Skatten på alminnelig inntekt er 58 718 kr.

(I tillegg kommer trinnskatt og trygdeavgift.)`,
    },
    {
      id: '2p-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'En person har bruttoinntekt på 380 000 kr. Minstefradraget er 46 % av brutto (maks 109 950 kr). Personfradraget er 73 150 kr. Beregn skatten på alminnelig inntekt (22 %).',
        hints: ['Sjekk om minstefradraget treffer taket. 46 % av 380 000 = 174 800 – dette overstiger maks, bruk 109 950.'],
        solution: 'Minstefradrag: 46 % av 380 000 = 174 800 > 109 950, bruk 109 950. Alm. inntekt: 380 000 − 109 950 = 270 050. Skattbar: 270 050 − 73 150 = 196 900. Skatt: 196 900 · 0,22 = 43 318 kr.',
      },
    },

    // BLOKK 3: Merverdiavgift
    {
      id: '2p-1-3-def-mva',
      type: 'definition',
      title: 'Merverdiavgift (mva)',
      content: `**Merverdiavgift** er en avgift på kjøp av varer og tjenester. Det er forbrukeren som betaler, men bedriften som krever den inn.

Mva-satser i Norge:
- **25 %** – generell sats (de fleste varer og tjenester)
- **15 %** – matvarer
- **12 %** – transport, overnatting, kultur

$$\\text{Pris inkl. mva} = \\text{Pris ekskl. mva} \\cdot (1 + \\text{mva-sats})$$

$$\\text{Pris ekskl. mva} = \\frac{\\text{Pris inkl. mva}}{1 + \\text{mva-sats}}$$`,
    },
    {
      id: '2p-1-3-example-3',
      type: 'example',
      title: 'Eksempel: Beregne mva',
      problem: 'En håndverker sender en faktura på 12 000 kr ekskl. mva (25 %). Hva blir totalprisen inkl. mva? Hvor mye er mva-beløpet?',
      solution: `**Løsning:**

Pris inkl. mva: $12\\,000 \\cdot 1{,}25 = 15\\,000$ kr

Mva-beløp: $15\\,000 - 12\\,000 = 3\\,000$ kr

**Svar:** Totalprisen er 15 000 kr, og mva-beløpet er 3 000 kr.`,
    },
    {
      id: '2p-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'En matvare koster 89,90 kr inkl. 15 % mva. Hva er prisen ekskl. mva?',
        options: [
          { id: 'a', text: '78,17 kr', isCorrect: true },
          { id: 'b', text: '76,42 kr', isCorrect: false },
          { id: 'c', text: '74,90 kr', isCorrect: false },
          { id: 'd', text: '67,43 kr', isCorrect: false },
        ],
        solution: 'Pris ekskl. mva = 89,90 / 1,15 ≈ 78,17 kr.',
      },
    },
    {
      id: '2p-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'En elektronikkbutikk selger en TV til 15 990 kr inkl. 25 % mva. a) Hva er prisen ekskl. mva? b) Hvor mye er mva-beløpet?',
        solution: 'a) Ekskl. mva: 15 990 / 1,25 = 12 792 kr. b) Mva-beløp: 15 990 − 12 792 = 3 198 kr.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Inntektsskatt**: 22 % av alminnelig inntekt etter fradrag
- **Trinnskatt**: Progressiv tilleggsskatt som øker med inntekten
- **Fradrag**: Minstefradrag og personfradrag reduserer skatten
- **Mva**: Avgift på varer og tjenester (25 %, 15 % eller 12 %)

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Progressiv skatt | Skatten øker med inntekten |
| Trinnskatt | Ekstraskatt i trinn over visse inntektsgrenser |
| Minstefradrag | Automatisk fradrag for arbeidstakere |
| Personfradrag | Bunnfradrag alle skatteytere får |
| Merverdiavgift | Avgift på kjøp av varer og tjenester |`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en forenklet skatteberegning for en person med 520 000 kr i bruttoinntekt. Beregn: a) Minstefradrag (46 %, maks 109 950 kr), b) Skatt på alminnelig inntekt (22 % av alm. inntekt minus personfradrag 73 150 kr), c) Trinnskatt, d) Total skatt og gjennomsnittlig skatteprosent.',
        solution: 'a) 46 % av 520 000 = 239 200 > 109 950, bruk 109 950 kr. b) Alm. inntekt: 520 000 − 109 950 = 410 050. Skattbar: 410 050 − 73 150 = 336 900. Skatt: 336 900 · 0,22 = 74 118 kr. c) Trinnskatt: Trinn 1: 84 800 · 0,017 = 1 442. Trinn 2: (520 000 − 292 850) · 0,04 = 227 150 · 0,04 = 9 086. Sum trinnskatt: 10 528 kr. d) Total: 74 118 + 10 528 = 84 646 kr. Gjennomsnitt: 84 646 / 520 000 · 100 % ≈ 16,3 %.',
      },
    },
    {
      id: '2p-1-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-1-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor Norge har et progressivt skattesystem. Hva er argumentene for og mot at de som tjener mest, betaler en høyere andel i skatt? Bruk gjerne talleksempler for å illustrere poengene dine.',
        solution: 'For progressiv skatt: Omfordeling – de med mest bærekraft betaler mest. En person med 300 000 trenger en større andel til livsopphold enn en med 1 000 000. Rettferdighet – bidraget gjenspeiler nytten av fellesgodene. Mot: Kan dempe arbeidsincentiver for høye inntekter. Kan føre til skatteplanlegging og kapitalflukt. Eksempel: Med flat skatt på 30 % betaler en med 300 000 kr 90 000 (har 210 000 igjen), mens en med 1 000 000 betaler 300 000 (har 700 000 igjen). Med progressiv skatt utjevnes forskjellene mer.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Inntektsskatt', definition: 'Skatt på inntekt fra arbeid, pensjon eller næring' },
    { term: 'Trinnskatt', definition: 'Progressiv tilleggsskatt som øker med inntekten' },
    { term: 'Minstefradrag', definition: 'Automatisk fradrag for arbeidstakere' },
    { term: 'Personfradrag', definition: 'Bunnfradrag alle skatteytere får' },
    { term: 'Merverdiavgift', definition: 'Avgift på kjøp av varer og tjenester (25 %, 15 % eller 12 %)' },
  ],
};

// ============================================================================
// Kapittel 1.4: Bedriftsøkonomi
// ============================================================================

export const CHAPTER_2P_1_4: TextbookChapter = {
  id: '2p-1-4',
  courseId: '2p',
  chapterNumber: '1.4',
  title: 'Bedriftsøkonomi',
  description: 'Kostnader, inntekter, resultat og enkle økonomiske analyser.',
  estimatedMinutes: 55,
  prerequisites: ['2p-1-1'],
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
    'utforske strategier for å løse ligninger, ligningssystemer og ulikheter og argumentere for tankemåtene sine',
  ],
  content: [
    // INTRO
    {
      id: '2p-1-4-intro',
      type: 'text',
      content: `## Bedriftsøkonomi

Enten du skal starte egen bedrift eller forstå hvordan en arbeidsplass fungerer, er det nyttig å kjenne til grunnleggende bedriftsøkonomi.

I dette kapittelet skal du lære:
- Forskjellen mellom faste og variable kostnader
- Hvordan beregne inntekter og kostnader
- Hva nullpunktet (break-even) betyr
- Hvordan lage og lese et enkelt resultatregnskap`,
    },

    // BLOKK 1: Kostnader
    {
      id: '2p-1-4-def-kostnader',
      type: 'definition',
      title: 'Faste og variable kostnader',
      content: `**Faste kostnader (FK)** er kostnader som ikke endrer seg med produksjonsmengden. Eksempler: husleie, forsikring, lønn til administrasjon.

**Variable kostnader (VK)** endrer seg proporsjonalt med produksjonen. Eksempler: råvarer, emballasje, strøm til produksjon.

**Totale kostnader:**
$$TK = FK + VK$$

Hvis den variable kostnaden per enhet er $v$, og vi produserer $x$ enheter:
$$TK = FK + v \\cdot x$$`,
    },
    {
      id: '2p-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Beregne kostnader',
      problem: 'En kafé har faste kostnader på 40 000 kr per måned (husleie, forsikring, fastlønn). Hver kopp kaffe koster 15 kr å lage (variable kostnader). Hva er totalkostnaden hvis kafeen selger 3 000 kopper i måneden?',
      solution: `**Løsning:**

$FK = 40\\,000$ kr

$VK = 15 \\cdot 3\\,000 = 45\\,000$ kr

$TK = 40\\,000 + 45\\,000 = 85\\,000$ kr

**Svar:** Totalkostnaden er 85 000 kr per måned.`,
    },
    {
      id: '2p-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av disse er en fast kostnad for en frisørsalong?',
        options: [
          { id: 'a', text: 'Husleie for lokalet', isCorrect: true },
          { id: 'b', text: 'Sjampo og hårprodukter', isCorrect: false },
          { id: 'c', text: 'Provisjonslønn til frisørene', isCorrect: false },
          { id: 'd', text: 'Strøm til hårtørkere', isCorrect: false },
        ],
        solution: 'Husleie er en fast kostnad – den er lik uansett hvor mange kunder salongen har. Sjampo, provisjonslønn og strøm til produksjon varierer med antall kunder.',
      },
    },
    {
      id: '2p-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'En bedrift har faste kostnader på 120 000 kr per måned. Variabel kostnad per enhet er 80 kr. a) Sett opp en formel for totalkostnaden. b) Beregn totalkostnaden ved produksjon av 2 500 enheter.',
        solution: 'a) TK(x) = 120 000 + 80x. b) TK(2 500) = 120 000 + 80 · 2 500 = 120 000 + 200 000 = 320 000 kr.',
      },
    },

    // BLOKK 2: Inntekter og overskudd
    {
      id: '2p-1-4-def-inntekter',
      type: 'definition',
      title: 'Inntekter og resultat',
      content: `**Inntekt (I)** er det bedriften tjener på salg:
$$I = p \\cdot x$$
der $p$ er salgsprisen per enhet og $x$ er antall solgte enheter.

**Resultat (R)** er forskjellen mellom inntekter og kostnader:
$$R = I - TK = p \\cdot x - (FK + v \\cdot x)$$

- $R > 0$: Overskudd (bedriften tjener penger)
- $R = 0$: Nullpunkt (break-even)
- $R < 0$: Underskudd (bedriften taper penger)`,
    },
    {
      id: '2p-1-4-example-2',
      type: 'example',
      title: 'Eksempel: Beregne resultat',
      problem: 'Kafeen fra forrige eksempel selger kaffe for 45 kr per kopp. Med faste kostnader på 40 000 kr og variabel kostnad 15 kr per kopp: Hva er resultatet ved salg av 3 000 kopper?',
      solution: `**Løsning:**

Inntekt: $I = 45 \\cdot 3\\,000 = 135\\,000$ kr

Totalkostnad: $TK = 40\\,000 + 15 \\cdot 3\\,000 = 85\\,000$ kr

Resultat: $R = 135\\,000 - 85\\,000 = 50\\,000$ kr

**Svar:** Kafeen har et overskudd på 50 000 kr.`,
    },
    {
      id: '2p-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'En bedrift selger et produkt for 200 kr per enhet. Faste kostnader er 90 000 kr per måned og variabel kostnad er 120 kr per enhet. a) Sett opp uttrykk for inntekt og totalkostnad. b) Beregn resultatet ved salg av 1 500 enheter.',
        solution: 'a) I(x) = 200x. TK(x) = 90 000 + 120x. b) I(1 500) = 300 000. TK(1 500) = 90 000 + 180 000 = 270 000. R = 300 000 − 270 000 = 30 000 kr overskudd.',
      },
    },

    // BLOKK 3: Nullpunkt
    {
      id: '2p-1-4-def-nullpunkt',
      type: 'definition',
      title: 'Nullpunkt (break-even)',
      content: `**Nullpunktet** er der inntektene er lik kostnadene – bedriften verken tjener eller taper penger.

$$I = TK$$
$$p \\cdot x = FK + v \\cdot x$$
$$x_{\\text{null}} = \\frac{FK}{p - v}$$

Forskjellen $p - v$ kalles **dekningsbidrag per enhet** – det hver solgte enhet bidrar med til å dekke faste kostnader.`,
    },
    {
      id: '2p-1-4-example-3',
      type: 'example',
      title: 'Eksempel: Finne nullpunktet',
      problem: 'Kafeen selger kaffe for 45 kr/kopp med variabel kostnad 15 kr/kopp og faste kostnader 40 000 kr/måned. Hvor mange kopper må kafeen selge for å gå i null?',
      solution: `**Løsning:**

Dekningsbidrag per kopp: $45 - 15 = 30$ kr

Nullpunkt: $x = \\frac{40\\,000}{30} = 1\\,333{,}3$

Siden vi ikke kan selge halve kopper, runder vi opp: **1 334 kopper**

**Svar:** Kafeen må selge minst 1 334 kopper per måned for å gå i null.`,
    },
    {
      id: '2p-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'En bedrift har faste kostnader på 150 000 kr, salgspris 250 kr og variabel kostnad 100 kr per enhet. Hvor mange enheter må selges for å nå nullpunktet?',
        options: [
          { id: 'a', text: '1 000 enheter', isCorrect: true },
          { id: 'b', text: '600 enheter', isCorrect: false },
          { id: 'c', text: '1 500 enheter', isCorrect: false },
          { id: 'd', text: '750 enheter', isCorrect: false },
        ],
        solution: 'Dekningsbidrag = 250 − 100 = 150 kr. Nullpunkt = 150 000 / 150 = 1 000 enheter.',
      },
    },
    {
      id: '2p-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Et bakeri har faste kostnader på 55 000 kr per måned. Hvert brød selges for 42 kr og koster 18 kr å bake. a) Hva er dekningsbidraget per brød? b) Hvor mange brød må selges for å nå nullpunktet? c) Hva er overskuddet ved salg av 3 000 brød?',
        solution: 'a) DB = 42 − 18 = 24 kr. b) Nullpunkt = 55 000 / 24 ≈ 2 292 brød (rund opp). c) R = 3 000 · 24 − 55 000 = 72 000 − 55 000 = 17 000 kr.',
      },
    },

    // BLOKK 4: Fortjeneste og avanse
    {
      id: '2p-1-4-def-avanse',
      type: 'definition',
      title: 'Fortjeneste og avanse',
      content: `**Fortjeneste (påslag)** er forskjellen mellom salgspris og innkjøpspris:
$$\\text{Fortjeneste} = \\text{Salgspris} - \\text{Innkjøpspris}$$

**Avanse** er fortjenesten uttrykt i prosent av innkjøpsprisen:
$$\\text{Avanse} = \\frac{\\text{Fortjeneste}}{\\text{Innkjøpspris}} \\cdot 100\\%$$

**Bruttofortjeneste** er fortjenesten uttrykt i prosent av salgsprisen:
$$\\text{Bruttofortjeneste} = \\frac{\\text{Fortjeneste}}{\\text{Salgspris}} \\cdot 100\\%$$`,
    },
    {
      id: '2p-1-4-example-4',
      type: 'example',
      title: 'Eksempel: Avanse og bruttofortjeneste',
      problem: 'En butikk kjøper inn en jakke for 400 kr og selger den for 699 kr. Beregn avanse og bruttofortjeneste.',
      solution: `**Løsning:**

Fortjeneste: $699 - 400 = 299$ kr

Avanse: $\\frac{299}{400} \\cdot 100\\% = 74{,}75\\%$

Bruttofortjeneste: $\\frac{299}{699} \\cdot 100\\% \\approx 42{,}8\\%$

**Svar:** Avansen er 74,75 % og bruttofortjenesten er 42,8 %.`,
    },
    {
      id: '2p-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'En sportsbutikk kjøper inn løpesko for 650 kr per par og legger på en avanse på 120 %. a) Hva blir salgsprisen? b) Hva er bruttofortjenesten i prosent?',
        hints: ['Salgspris = Innkjøpspris · (1 + avanse/100)'],
        solution: 'a) Salgspris = 650 · (1 + 1,20) = 650 · 2,20 = 1 430 kr. b) Fortjeneste = 1 430 − 650 = 780 kr. Bruttofortjeneste = 780 / 1 430 · 100 % ≈ 54,5 %.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Faste og variable kostnader**: FK er uavhengig av produksjon, VK endrer seg med produksjonen
- **Totalkostnad**: $TK = FK + v \\cdot x$
- **Inntekt**: $I = p \\cdot x$
- **Nullpunkt**: $x = FK / (p - v)$ – der inntekt = kostnad
- **Avanse**: Fortjeneste i prosent av innkjøpspris

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Faste kostnader | Kostnader som er uavhengige av produksjon |
| Variable kostnader | Kostnader som øker med produksjonen |
| Dekningsbidrag | Salgspris minus variabel kostnad per enhet |
| Nullpunkt | Salgsvolum der inntekt = kostnad |
| Avanse | Fortjeneste i prosent av innkjøpspris |`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-1-4-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En nettbutikk selger t-skjorter. Innkjøpspris er 80 kr, avanse 150 %, faste kostnader 25 000 kr/måned. a) Beregn salgsprisen. b) Finn nullpunktet. c) Hva er overskuddet ved salg av 300 skjorter per måned? d) Butikken vurderer å senke prisen med 20 %. Hvordan påvirker det nullpunktet?',
        solution: 'a) Salgspris = 80 · 2,50 = 200 kr. b) DB = 200 − 80 = 120 kr. Nullpunkt = 25 000 / 120 ≈ 209 skjorter. c) R = 300 · 120 − 25 000 = 36 000 − 25 000 = 11 000 kr. d) Ny pris = 200 · 0,80 = 160 kr. Nytt DB = 160 − 80 = 80 kr. Nytt nullpunkt = 25 000 / 80 ≈ 313 skjorter. Nullpunktet øker fra 209 til 313.',
      },
    },
    {
      id: '2p-1-4-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-1-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To ungdommer vurderer å starte en sommervirksomhet med salg av smoothier. De anslår: Utstyr (engangs): 5 000 kr. Leie av torgplass: 500 kr per dag. Ingredienser per smoothie: 18 kr. Salgspris: 55 kr. De planlegger å ha åpent 20 dager. a) Beregn faste og variable kostnader. b) Hvor mange smoothier per dag må de selge for å dekke alle kostnader over hele perioden? c) Drøft hvilke faktorer som kan påvirke om dette er realistisk.',
        solution: 'a) FK: 5 000 + 500 · 20 = 15 000 kr. VK per smoothie: 18 kr. b) Total FK over 20 dager = 15 000 kr. DB = 55 − 18 = 37 kr. Totalt nullpunkt: 15 000 / 37 ≈ 406 smoothier, det vil si 406/20 ≈ 21 smoothier per dag. c) Faktorer: Vær, beliggenhet, konkurranse, sesong, markedsføring, svinn. 21 smoothier per dag er realistisk på en god torgplass i sommersesongen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Faste kostnader', definition: 'Kostnader uavhengig av produksjonsmengde' },
    { term: 'Variable kostnader', definition: 'Kostnader som endrer seg med produksjonen' },
    { term: 'Dekningsbidrag', definition: 'Salgspris minus variabel kostnad per enhet' },
    { term: 'Nullpunkt', definition: 'Antall enheter der inntekt = kostnad' },
    { term: 'Avanse', definition: 'Fortjeneste i prosent av innkjøpspris' },
    { term: 'Bruttofortjeneste', definition: 'Fortjeneste i prosent av salgspris' },
  ],
};

// Eksporter alle kapitler i seksjon 1
export const MATEMATIKK_2P_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_2P_1_1,
  CHAPTER_2P_1_2,
  CHAPTER_2P_1_3,
  CHAPTER_2P_1_4,
];
