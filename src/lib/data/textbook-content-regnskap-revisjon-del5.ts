/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Regnskap og revisjon (VG3) - Del 5: MVA og skatt
 *
 * Kapittel 5.1–5.5
 *
 * LK20-kompetansemål:
 * - gjøre rede for regelverket for merverdiavgift og beregne MVA
 * - utføre MVA-oppgjør og bokføre MVA-transaksjoner
 * - gjøre rede for foretaksskatt og skattemessige avskrivninger
 * - utføre lønnsberegninger med arbeidsgiveravgift og forskuddstrekk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Merverdiavgift – grunnlag
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_5_1: TextbookChapter = {
  id: 'regnskap-revisjon-5-1',
  courseId: 'regnskap-revisjon',
  chapterNumber: '5.1',
  title: 'Merverdiavgift – grunnlag',
  description: 'En innføring i merverdiavgiftssystemet i Norge, hvem som er avgiftspliktig, hva som er avgiftsgrunnlaget, og hvilke unntak som gjelder. Du lærer hvordan MVA virker i verdikjeden.',
  estimatedMinutes: 22,
  competenceGoals: ['gjøre rede for regelverket for merverdiavgift og beregne MVA'],
  content: [
    {
      id: 'rr-5-1-intro',
      type: 'text',
      content: `## Merverdiavgiftssystemet i Norge

Merverdiavgift (MVA) er en avgift på forbruk av varer og tjenester. MVA er statens viktigste inntektskilde og utgjør omtrent en fjerdedel av statsbudsjettet. I dette kapittelet ser vi på hvordan MVA-systemet fungerer, hvem som er avgiftspliktig, og hvilke unntak som finnes.

I dette kapittelet skal du lære:
- Hva merverdiavgift er og hvordan systemet fungerer
- Hvem som er registreringspliktig i Merverdiavgiftsregisteret
- Forskjellen mellom utgående og inngående MVA
- Hvilke varer og tjenester som er unntatt avgiftsplikt`,
    },
    {
      id: 'rr-5-1-def-1',
      type: 'definition',
      title: 'Merverdiavgift (MVA)',
      content: `**Merverdiavgift (MVA)** er en indirekte skatt som legges på omsetning av varer og tjenester i alle ledd av verdikjeden. Det er sluttforbrukeren som til syvende og sist bærer avgiften, mens næringsdrivende fungerer som innkrevere for staten. MVA beregnes av merverdien som skapes i hvert ledd.`,
    },
    {
      id: 'rr-5-1-text-1',
      type: 'text',
      content: `### Avgiftspliktig omsetning

For at en virksomhet skal være MVA-pliktig, må den oppfylle visse krav:

**Registreringsgrensen:**
- Omsetning over 50 000 kr i løpet av en 12-månedersperiode
- Veldedige og allmennyttige organisasjoner: 140 000 kr
- Registrering i Merverdiavgiftsregisteret er påkrevd

**Hva utløser avgiftsplikt:**
- Omsetning av varer og tjenester i næring
- Uttak av varer og tjenester til privat bruk
- Import av varer og tjenester

**Hvem er avgiftssubjekt:**
- Enkeltpersonforetak, AS, ANS, DA og andre selskapsformer
- Utenlandske virksomheter som selger til norske forbrukere
- Også offentlige virksomheter som driver avgiftspliktig virksomhet`,
    },
    {
      id: 'rr-5-1-def-2',
      type: 'definition',
      title: 'Utgående og inngående MVA',
      content: `**Utgående MVA** er avgiften en virksomhet legger på ved salg av varer og tjenester til sine kunder. Denne avgiften kreves inn og skal betales videre til staten.\n\n**Inngående MVA** er avgiften virksomheten betaler ved kjøp av varer og tjenester fra sine leverandører. Denne kan trekkes fra (fradragsrett) mot utgående MVA.`,
    },
    {
      id: 'rr-5-1-text-2',
      type: 'text',
      content: `### MVA i verdikjeden

MVA beregnes i hvert omsetningsledd, men det er kun merverdien som beskattes:

**Eksempel – fra produsent til forbruker:**

| Ledd | Salgspris eks. MVA | Utgående MVA (25 %) | Inngående MVA | MVA til staten |
|------|-------------------|---------------------|---------------|----------------|
| Produsent | 200 kr | 50 kr | 0 kr | 50 kr |
| Grossist | 350 kr | 87,50 kr | 50 kr | 37,50 kr |
| Butikk | 500 kr | 125 kr | 87,50 kr | 37,50 kr |
| **Sum til staten** | | | | **125 kr** |

Sluttforbrukeren betaler 625 kr (500 + 125 MVA). Staten mottar totalt 125 kr, som tilsvarer 25 % av sluttproduktet.`,
    },
    {
      id: 'rr-5-1-text-3',
      type: 'text',
      content: `### Unntak fra avgiftsplikt

Enkelte varer og tjenester er **unntatt** fra merverdiavgiftsloven. Det betyr at det ikke beregnes MVA ved omsetning, og virksomheten har heller ikke fradragsrett for inngående MVA.

**Viktige unntak:**
- Helsetjenester (lege, tannlege, fysioterapi)
- Undervisning og utdanning
- Finansielle tjenester (bank, forsikring, verdipapirhandel)
- Fast eiendom (salg og utleie av bolig)
- Kunst og kultur (kunstnerisk fremføring, museer)
- Offentlig myndighetsutøvelse

**Merk forskjellen:**
- **Unntatt** = ikke MVA-pliktig omsetning, ingen fradragsrett
- **Fritatt** = MVA-sats på 0 %, men virksomheten beholder fradragsretten (se kapittel 5.2)`,
    },
    {
      id: 'rr-5-1-note-1',
      type: 'note',
      title: 'Delt virksomhet',
      content: `Mange virksomheter har både avgiftspliktig og unntatt omsetning. For eksempel kan en lege ha avgiftspliktig salg av kosmetiske produkter i tillegg til unntatt helsebehandling. I slike tilfeller må virksomheten fordele inngående MVA forholdsmessig, og har kun fradragsrett for den delen som gjelder avgiftspliktig virksomhet.`,
    },
    {
      id: 'rr-5-1-example-1',
      type: 'example',
      title: 'Eksempel: MVA i et enkelt salg',
      problem: 'En møbelbutikk kjøper inn en sofa fra grossist for 8 000 kr eks. MVA. Butikken selger sofaen til en kunde for 14 000 kr eks. MVA. Beregn utgående MVA, inngående MVA og beløpet butikken skal betale til staten.',
      solution: `**Innkjøp fra grossist:**
- Varekostnad: 8 000 kr
- Inngående MVA (25 %): 8 000 × 0,25 = 2 000 kr
- Betalt til grossist: 10 000 kr inkl. MVA

**Salg til kunde:**
- Salgspris eks. MVA: 14 000 kr
- Utgående MVA (25 %): 14 000 × 0,25 = 3 500 kr
- Kunden betaler: 17 500 kr inkl. MVA

**MVA-oppgjør for butikken:**
- Utgående MVA: 3 500 kr
- Inngående MVA: 2 000 kr
- **Betales til staten: 3 500 − 2 000 = 1 500 kr**

Beløpet 1 500 kr tilsvarer 25 % av merverdien (14 000 − 8 000 = 6 000 kr × 25 % = 1 500 kr).`,
    },
    {
      id: 'rr-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        task: 'Hva er registreringsgrensen for MVA for ordinære næringsdrivende?',
        options: [
          { id: 'a', text: '25 000 kr i omsetning over 12 måneder', isCorrect: false },
          { id: 'b', text: '50 000 kr i omsetning over 12 måneder', isCorrect: true },
          { id: 'c', text: '100 000 kr i omsetning over 12 måneder', isCorrect: false },
          { id: 'd', text: '140 000 kr i omsetning over 12 måneder', isCorrect: false },
        ],
        solution: 'Registreringsgrensen er 50 000 kr i avgiftspliktig omsetning i løpet av en 12-månedersperiode. Grensen på 140 000 kr gjelder for veldedige og allmennyttige organisasjoner.',
      },
    },
    {
      id: 'rr-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-5-1-ex-2',
        number: '5.1.2',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom «unntatt» og «fritatt» omsetning i MVA-sammenheng?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell, begge betyr at det ikke beregnes MVA', isCorrect: false },
          { id: 'b', text: 'Unntatt betyr 0 % MVA med fradragsrett, fritatt betyr ingen MVA uten fradragsrett', isCorrect: false },
          { id: 'c', text: 'Unntatt betyr ingen MVA-plikt og ingen fradragsrett, fritatt betyr 0 % MVA men med fradragsrett', isCorrect: true },
          { id: 'd', text: 'Unntatt gjelder kun offentlige virksomheter, fritatt gjelder alle', isCorrect: false },
        ],
        solution: 'Unntatt omsetning faller helt utenfor merverdiavgiftsloven – det beregnes ikke MVA og virksomheten har ingen fradragsrett. Fritatt omsetning har MVA-sats på 0 %, men virksomheten beholder fradragsretten for sine innkjøp. Eksport er det viktigste eksempelet på fritatt omsetning.',
      },
    },
    {
      id: 'rr-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        task: 'En produsent selger varer for 120 000 kr eks. MVA til en grossist. Grossisten selger varene videre til en butikk for 200 000 kr eks. MVA. Butikken selger til sluttkunder for 340 000 kr eks. MVA. Beregn MVA-beløpet hvert ledd betaler til staten, og vis at summen tilsvarer 25 % av sluttprisen.',
        hints: ['Husk at hvert ledd trekker fra inngående MVA fra utgående MVA'],
        solution: 'Produsent: Utgående MVA = 120 000 × 0,25 = 30 000. Inngående MVA = 0. Til staten: 30 000 kr. Grossist: Utgående MVA = 200 000 × 0,25 = 50 000. Inngående MVA = 30 000. Til staten: 20 000 kr. Butikk: Utgående MVA = 340 000 × 0,25 = 85 000. Inngående MVA = 50 000. Til staten: 35 000 kr. Totalt til staten: 30 000 + 20 000 + 35 000 = 85 000 kr. Kontroll: 340 000 × 0,25 = 85 000 kr. Stemmer!',
      },
    },
    {
      id: 'rr-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        task: 'Forklar hvorfor det er sluttforbrukeren som egentlig bærer MVA-kostnaden, selv om virksomhetene betaler avgiften til staten.',
        solution: 'Virksomheter i verdikjeden fungerer som innkrevere av MVA for staten. De legger MVA på salgsprisen og får fradrag for MVA på sine innkjøp. Netto effekt for hver virksomhet er null – de betaler bare inn differansen mellom utgående og inngående MVA. Sluttforbrukeren har derimot ingen fradragsrett og bærer dermed hele avgiftsbelastningen. MVA inngår i den endelige prisen forbrukeren betaler.',
      },
    },
    {
      id: 'rr-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        task: 'En tannlegeklinikk har inntekter fra tannbehandling på 1 200 000 kr og salg av tannpleieprodukter på 80 000 kr eks. MVA. Klinikken har innkjøp med MVA for 150 000 kr eks. MVA. Forklar hvordan MVA-fradragsretten fungerer for denne virksomheten.',
        hints: ['Helsetjenester er unntatt MVA, mens varesalg er avgiftspliktig'],
        solution: 'Tannbehandling er unntatt MVA, mens salg av tannpleieprodukter er avgiftspliktig. Klinikken har delt virksomhet. Utgående MVA: 80 000 × 0,25 = 20 000 kr. Inngående MVA: 150 000 × 0,25 = 37 500 kr. Klinikken kan ikke kreve fradrag for all inngående MVA – kun den forholdsmessige andelen som gjelder avgiftspliktig omsetning. Andel avgiftspliktig: 80 000 / (1 200 000 + 80 000) = 6,25 %. Fradragsberettiget inngående MVA: 37 500 × 6,25 % = 2 344 kr. Betales til staten: 20 000 − 2 344 = 17 656 kr.',
      },
    },
    {
      id: 'rr-5-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Merverdiavgift** er en forbruksavgift som beregnes i alle omsetningsledd
- **Registreringsgrensen** er 50 000 kr i avgiftspliktig omsetning over 12 måneder
- **Utgående MVA** kreves inn ved salg, **inngående MVA** betales ved kjøp
- Virksomheter betaler **differansen** mellom utgående og inngående MVA til staten
- Enkelte varer og tjenester er **unntatt** (helsetjenester, finans, utdanning)
- Det er forskjell mellom **unntatt** (ingen fradragsrett) og **fritatt** (fradragsrett)`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 5.2: MVA-satser og fritak
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_5_2: TextbookChapter = {
  id: 'regnskap-revisjon-5-2',
  courseId: 'regnskap-revisjon',
  chapterNumber: '5.2',
  title: 'MVA-satser og fritak',
  description: 'En gjennomgang av de ulike MVA-satsene i Norge: alminnelig sats (25 %), redusert sats for næringsmidler (15 %), lav sats for persontransport og kultur (12 %), nullsats og fritak. Du lærer å beregne MVA med riktig sats.',
  estimatedMinutes: 20,
  competenceGoals: ['gjøre rede for regelverket for merverdiavgift og beregne MVA'],
  content: [
    {
      id: 'rr-5-2-intro',
      type: 'text',
      content: `## MVA-satsene i Norge

Norge har fire ulike MVA-satser: alminnelig sats (25 %), redusert sats for næringsmidler (15 %), lav sats for persontransport og kultur (12 %) og nullsats (0 %). I tillegg finnes det fritaksregler for visse typer omsetning. Riktig satsvalg er avgjørende for korrekt fakturering og MVA-rapportering.

I dette kapittelet skal du lære:
- Hvilke MVA-satser som gjelder i Norge
- Hva som beskattes med de ulike satsene
- Hva nullsats og fritak innebærer
- Å beregne MVA-beløp med ulike satser`,
    },
    {
      id: 'rr-5-2-def-1',
      type: 'definition',
      title: 'Alminnelig sats (25 %)',
      content: `**Alminnelig sats** på 25 % er hovedsatsen for merverdiavgift i Norge. Denne satsen gjelder for alle varer og tjenester som ikke er omfattet av redusert sats, lav sats, nullsats, fritak eller unntak. De fleste varer og tjenester i Norge beskattes med alminnelig sats.`,
    },
    {
      id: 'rr-5-2-text-1',
      type: 'text',
      content: `### Oversikt over MVA-satser

| Sats | Prosent | Hva den gjelder |
|------|---------|-----------------|
| Alminnelig sats | 25 % | De fleste varer og tjenester |
| Redusert sats | 15 % | Næringsmidler (mat og drikke) |
| Lav sats | 12 % | Persontransport, kino, museer, idrettsarrangementer, NRK-lisens |
| Nullsats | 0 % | Eksport, elektrisk kraft til husholdninger i Nord-Norge, elbiler |

**Alminnelig sats (25 %):**
- Klær, elektronikk, møbler, biler
- Håndverkertjenester, konsulenttjenester
- Hotellovernatting (endret fra 12 % til 25 % for visse tjenester)

**Redusert sats (15 %):**
- Matvarer og drikkevarer
- Gjelder ikke alkohol og tobakk (25 %)
- Gjelder ikke serveringstjenester (25 %)

**Lav sats (12 %):**
- Persontransport (buss, tog, fly, ferge)
- Overnatting i hoteller og lignende
- Kino, museer, fornøyelsesparker
- Idrettsarrangementer`,
    },
    {
      id: 'rr-5-2-warning-1',
      type: 'warning',
      title: 'Mat i butikk vs. restaurant',
      content: `Det er viktig å skille mellom kjøp av mat i butikk og servering på restaurant. Mat kjøpt i butikk har redusert sats (15 %), mens servering på restaurant beskattes med alminnelig sats (25 %). Serveringsstedet må derfor beregne 25 % MVA på maten, selv om råvarene er kjøpt inn med 15 % MVA.`,
    },
    {
      id: 'rr-5-2-text-2',
      type: 'text',
      content: `### Nullsats og fritak

**Nullsats (0 %):**
Nullsatsen innebærer at det beregnes 0 % MVA på omsetningen, men virksomheten beholder fradragsretten for inngående MVA. Dette er gunstigere enn unntak.

Eksempler på nullsats:
- Eksport av varer og tjenester
- Omsetning til Svalbard og Jan Mayen
- Visse elektroniske nyhetstjenester (aviser, tidsskrifter)

**Fritak etter merverdiavgiftsloven:**
Fritak betyr i praksis det samme som nullsats – virksomheten beregner ikke MVA, men har fradragsrett.

**Eksportfritaket:**
Det viktigste fritaket er eksportfritaket. Norske virksomheter som selger varer og tjenester til utlandet, beregner ikke MVA, men har full fradragsrett for inngående MVA. Dette sikrer at norske varer er konkurransedyktige i utlandet.`,
    },
    {
      id: 'rr-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Faktura med ulike MVA-satser',
      problem: 'En grossist selger følgende varer til en dagligvarebutikk: matvarer for 50 000 kr eks. MVA, rengjøringsmidler for 12 000 kr eks. MVA, og tobakksvarer for 8 000 kr eks. MVA. Sett opp fakturaen med riktige MVA-satser.',
      solution: `**Faktura:**

| Varelinje | Beløp eks. MVA | MVA-sats | MVA-beløp |
|-----------|---------------|----------|-----------|
| Matvarer | 50 000 kr | 15 % | 7 500 kr |
| Rengjøringsmidler | 12 000 kr | 25 % | 3 000 kr |
| Tobakksvarer | 8 000 kr | 25 % | 2 000 kr |
| **Sum** | **70 000 kr** | | **12 500 kr** |

**Totalbeløp inkl. MVA: 70 000 + 12 500 = 82 500 kr**

Merk: Matvarer har 15 % MVA, mens rengjøringsmidler og tobakksvarer har 25 %. Tobakk er ikke næringsmiddel og beskattes med alminnelig sats.`,
    },
    {
      id: 'rr-5-2-example-2',
      type: 'example',
      title: 'Eksempel: Beregne pris eks. MVA fra inkl.-pris',
      problem: 'En vare i butikken koster 499 kr inkl. MVA. Varen er et næringsmiddel (15 % MVA). Hva er prisen eks. MVA, og hvor mye er MVA-beløpet?',
      solution: `**Formel for å beregne pris eks. MVA:**

Pris eks. MVA = Pris inkl. MVA ÷ (1 + MVA-sats)

**Beregning:**
- Pris eks. MVA = 499 ÷ 1,15 = 433,91 kr
- MVA-beløp = 499 − 433,91 = 65,09 kr

**Kontroll:** 433,91 × 1,15 = 499,00 kr ✓

Alternativ metode: MVA-beløp = 499 × (15 / 115) = 65,09 kr`,
    },
    {
      id: 'rr-5-2-tip-1',
      type: 'tip',
      title: 'Hurtigformel for MVA-beregning',
      content: `For å finne MVA-beløpet fra en pris inkludert MVA kan du bruke disse faktorene:\n\n- **25 % MVA:** Pris inkl. × (25/125) = MVA-beløp\n- **15 % MVA:** Pris inkl. × (15/115) = MVA-beløp\n- **12 % MVA:** Pris inkl. × (12/112) = MVA-beløp\n\nDisse faktorene er nyttige når du skal trekke ut MVA fra kvitteringer og fakturaer.`,
    },
    {
      id: 'rr-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        task: 'Hvilken MVA-sats gjelder for salg av mat på en restaurant?',
        options: [
          { id: 'a', text: '12 % (lav sats)', isCorrect: false },
          { id: 'b', text: '15 % (redusert sats for næringsmidler)', isCorrect: false },
          { id: 'c', text: '25 % (alminnelig sats)', isCorrect: true },
          { id: 'd', text: '0 % (nullsats)', isCorrect: false },
        ],
        solution: 'Servering av mat på restaurant beskattes med alminnelig sats (25 %), selv om matvarer i butikk har 15 %. Det avgjørende er at det er en serveringstjeneste, ikke bare salg av næringsmidler.',
      },
    },
    {
      id: 'rr-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        task: 'En hotellgjest betaler 1 850 kr inkl. MVA for én natt. Overnatting har 12 % MVA. Beregn prisen eks. MVA og MVA-beløpet.',
        hints: ['Bruk formelen: Pris eks. MVA = Pris inkl. MVA ÷ (1 + MVA-sats)'],
        solution: 'Pris eks. MVA = 1 850 ÷ 1,12 = 1 651,79 kr. MVA-beløp = 1 850 − 1 651,79 = 198,21 kr. Kontroll: 1 651,79 × 1,12 = 1 850,00 kr.',
      },
    },
    {
      id: 'rr-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        task: 'Et firma kjøper inn kontorrekvisita for 3 200 kr eks. MVA (25 %), kaffe og brus til pauserommet for 1 800 kr eks. MVA (15 %), og billetter til en firmatur med buss for 6 400 kr eks. MVA (12 %). Beregn total MVA og totalt beløp inkl. MVA.',
        solution: 'Kontorrekvisita: 3 200 × 0,25 = 800 kr MVA. Kaffe og brus: 1 800 × 0,15 = 270 kr MVA. Bussbilletter: 6 400 × 0,12 = 768 kr MVA. Total MVA: 800 + 270 + 768 = 1 838 kr. Totalt eks. MVA: 3 200 + 1 800 + 6 400 = 11 400 kr. Totalt inkl. MVA: 11 400 + 1 838 = 13 238 kr.',
      },
    },
    {
      id: 'rr-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-5-2-ex-4',
        number: '5.2.4',
        type: 'multiple-choice',
        task: 'En norsk bedrift eksporterer varer til Tyskland. Hvilken MVA-sats gjelder?',
        options: [
          { id: 'a', text: '25 % (alminnelig norsk sats)', isCorrect: false },
          { id: 'b', text: '19 % (tysk MVA-sats)', isCorrect: false },
          { id: 'c', text: '0 % (eksportfritak med fradragsrett)', isCorrect: true },
          { id: 'd', text: 'Ingen MVA og ingen fradragsrett', isCorrect: false },
        ],
        solution: 'Ved eksport gjelder nullsats (0 % MVA) med full fradragsrett for inngående MVA. Varene beskattes i mottakerlandet med det landets MVA-sats. Eksportfritaket sikrer at norske varer ikke dobbeltbeskattes.',
      },
    },
    {
      id: 'rr-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        task: 'Forklar hvorfor eksportfritaket er viktig for norsk næringsliv, og beskriv den praktiske forskjellen mellom fritak (nullsats) og unntak.',
        solution: 'Eksportfritaket er viktig fordi det sikrer at norske varer kan selges til utlandet uten norsk MVA, slik at de er konkurransedyktige. Virksomheten beholder fradragsretten for inngående MVA, slik at MVA på innkjøp ikke blir en kostnad. Forskjellen mellom fritak og unntak: Med fritak (nullsats) beregnes 0 % MVA, men virksomheten kan kreve fradrag for inngående MVA på sine innkjøp. Med unntak beregnes heller ikke MVA, men virksomheten mister fradragsretten – inngående MVA blir da en endelig kostnad.',
      },
    },
    {
      id: 'rr-5-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Alminnelig sats (25 %)** gjelder de fleste varer og tjenester
- **Redusert sats (15 %)** gjelder næringsmidler, men ikke servering eller alkohol/tobakk
- **Lav sats (12 %)** gjelder persontransport, overnatting, kino og kultur
- **Nullsats (0 %)** gjelder eksport og gir fradragsrett for inngående MVA
- Forskjellen mellom **mat i butikk** (15 %) og **servering** (25 %) er viktig
- Man kan beregne MVA fra inkl.-pris med formelen: Pris inkl. ÷ (1 + sats)`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 5.3: MVA-oppgjør og bokføring
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_5_3: TextbookChapter = {
  id: 'regnskap-revisjon-5-3',
  courseId: 'regnskap-revisjon',
  chapterNumber: '5.3',
  title: 'MVA-oppgjør og bokføring',
  description: 'MVA-meldingen, terminforfall, fradragsrett for inngående MVA og kontering av MVA-transaksjoner. Du lærer å sette opp MVA-oppgjør og bokføre salg og kjøp med MVA.',
  estimatedMinutes: 24,
  competenceGoals: ['utføre MVA-oppgjør og bokføre MVA-transaksjoner'],
  content: [
    {
      id: 'rr-5-3-intro',
      type: 'text',
      content: `## MVA-oppgjøret

Alle MVA-registrerte virksomheter må rapportere og betale merverdiavgift til staten gjennom MVA-meldingen. I dette kapittelet lærer du om terminfrister, hvordan MVA-oppgjøret beregnes, og hvordan MVA-transaksjoner bokføres i regnskapet.

I dette kapittelet skal du lære:
- Hva MVA-meldingen inneholder og når den skal leveres
- Hvordan MVA-oppgjøret beregnes
- Fradragsrett for inngående MVA
- Kontering av MVA i regnskapet`,
    },
    {
      id: 'rr-5-3-def-1',
      type: 'definition',
      title: 'MVA-meldingen',
      content: `**MVA-meldingen** (tidligere omsetningsoppgaven) er den rapporten virksomheten sender til Skatteetaten med oversikt over utgående og inngående MVA for en bestemt termin. Meldingen danner grunnlaget for innbetaling eller tilbakebetaling av merverdiavgift.`,
    },
    {
      id: 'rr-5-3-text-1',
      type: 'text',
      content: `### MVA-terminer og frister

De fleste virksomheter rapporterer MVA annenhver måned (seks terminer per år):

| Termin | Periode | Leveringsfrist |
|--------|---------|----------------|
| 1. termin | Januar–februar | 10. april |
| 2. termin | Mars–april | 10. juni |
| 3. termin | Mai–juni | 31. august |
| 4. termin | Juli–august | 10. oktober |
| 5. termin | September–oktober | 10. desember |
| 6. termin | November–desember | 10. februar (neste år) |

**Spesielle ordninger:**
- **Årlig levering:** Virksomheter med omsetning under 1 million kr kan søke om årlig MVA-melding (frist 10. mars)
- **Primærnæring:** Landbruk og fiske har årlig rapportering (frist 10. april)
- **Ukentlig levering:** Kan søkes ved jevnlig tilgodehavende (eksportbedrifter)`,
    },
    {
      id: 'rr-5-3-text-2',
      type: 'text',
      content: `### MVA-oppgjøret steg for steg

**1. Samle alle bilag for terminen**
- Utgående fakturaer (salg)
- Inngående fakturaer (kjøp)
- Kassarapporter
- Kreditnotaer

**2. Summere utgående MVA**
Fordelt på satser: 25 %, 15 %, 12 %

**3. Summere inngående MVA**
All MVA betalt på fradragsberettigede innkjøp

**4. Beregne MVA til betaling/tilgode**
- Utgående MVA − Inngående MVA = Beløp til betaling
- Hvis inngående MVA > utgående MVA → tilgodehavende

**5. Levere MVA-melding og betale**
- Elektronisk via Altinn
- Betaling til skatteoppkreveren`,
    },
    {
      id: 'rr-5-3-text-3',
      type: 'text',
      content: `### Fradragsrett for inngående MVA

Virksomheten har fradragsrett for inngående MVA på innkjøp som er til bruk i den avgiftspliktige virksomheten.

**Full fradragsrett:**
- Varekjøp til videresalg
- Driftsmidler brukt i virksomheten
- Kontorrekvisita, strøm, husleie (avgiftspliktig)
- Reklame og markedsføring

**Ingen fradragsrett:**
- Kost og naturalavlønning til ansatte
- Gaver og representasjon (over 100 kr)
- Personbiler (med unntak for næringskjøretøy)
- Innkjøp til bruk i unntatt virksomhet

**Delvis fradragsrett:**
- Innkjøp brukt delvis i avgiftspliktig og delvis i unntatt virksomhet
- Fordeles forholdsmessig etter bruk`,
    },
    {
      id: 'rr-5-3-def-2',
      type: 'definition',
      title: 'Kontering av MVA',
      content: `I regnskapet brukes egne konti for MVA:\n\n- **Konto 2700** – Utgående merverdiavgift (kreditsaldo = gjeld til staten)\n- **Konto 2710** – Inngående merverdiavgift (debetsaldo = fordring på staten)\n- **Konto 2740** – Oppgjørskonto for merverdiavgift (netto skyldig/tilgode)\n\nVed terminoppgjøret overføres saldoene på 2700 og 2710 til oppgjørskontoen 2740, som deretter gjøres opp med betaling.`,
    },
    {
      id: 'rr-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Bokføring av salg med MVA',
      problem: 'Et firma selger varer for 40 000 kr eks. MVA (25 %) på kreditt. Vis bokføringen.',
      solution: `**Bilag: Utgående faktura**

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 1500 Kundefordringer | Faktura til kunde | 50 000 | |
| 3000 Salgsinntekt | Salg av varer | | 40 000 |
| 2700 Utgående MVA | 25 % MVA | | 10 000 |

Kundefordringen debiteres med totalbeløpet inkl. MVA (50 000 kr). Salgsinntekten krediteres med beløpet eks. MVA (40 000 kr). Utgående MVA krediteres med MVA-beløpet (10 000 kr) – dette er gjeld til staten.`,
    },
    {
      id: 'rr-5-3-example-2',
      type: 'example',
      title: 'Eksempel: Bokføring av kjøp med MVA',
      problem: 'Firmaet kjøper kontorrekvisita for 6 000 kr eks. MVA (25 %) på kreditt. Vis bokføringen.',
      solution: `**Bilag: Inngående faktura**

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 6800 Kontorrekvisita | Innkjøp | 6 000 | |
| 2710 Inngående MVA | 25 % MVA | 1 500 | |
| 2400 Leverandørgjeld | Faktura fra leverandør | | 7 500 |

Kostnaden debiteres med beløpet eks. MVA (6 000 kr). Inngående MVA debiteres med MVA-beløpet (1 500 kr) – dette er en fordring på staten. Leverandørgjelden krediteres med totalbeløpet inkl. MVA (7 500 kr).`,
    },
    {
      id: 'rr-5-3-example-3',
      type: 'example',
      title: 'Eksempel: MVA-oppgjør ved terminens slutt',
      problem: 'Ved slutten av 1. termin har firmaet følgende saldoer: Konto 2700 (utgående MVA) = 85 000 kr kredit, konto 2710 (inngående MVA) = 32 000 kr debet. Vis bokføringen av MVA-oppgjøret.',
      solution: `**Steg 1: Overføre til oppgjørskonto**

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 2700 Utgående MVA | Overføring til oppgjør | 85 000 | |
| 2710 Inngående MVA | Overføring til oppgjør | | 32 000 |
| 2740 MVA-oppgjørskonto | Skyldig MVA | | 53 000 |

**Steg 2: Betaling til skatteoppkreveren**

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 2740 MVA-oppgjørskonto | Innbetaling MVA | 53 000 | |
| 1920 Bankinnskudd | Betaling | | 53 000 |

Virksomheten betaler 85 000 − 32 000 = 53 000 kr til staten.`,
    },
    {
      id: 'rr-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        task: 'Hvor ofte leverer de fleste virksomheter MVA-melding?',
        options: [
          { id: 'a', text: 'Hver måned (12 ganger per år)', isCorrect: false },
          { id: 'b', text: 'Annenhver måned (6 ganger per år)', isCorrect: true },
          { id: 'c', text: 'Hvert kvartal (4 ganger per år)', isCorrect: false },
          { id: 'd', text: 'Én gang per år', isCorrect: false },
        ],
        solution: 'De fleste virksomheter leverer MVA-melding annenhver måned, altså seks terminer per år. Virksomheter med lav omsetning (under 1 million) kan søke om årlig levering.',
      },
    },
    {
      id: 'rr-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        task: 'Et firma selger konsulenttjenester for 120 000 kr eks. MVA (25 %) på kreditt. Vis den fullstendige bokføringen med kontonummer og beløp.',
        hints: ['Husk å debitere kundefordring med totalbeløpet inkl. MVA'],
        solution: 'Debet 1500 Kundefordringer 150 000 kr, kredit 3000 Salgsinntekt 120 000 kr, kredit 2700 Utgående MVA 30 000 kr. Kunden skylder 150 000 kr (120 000 + 30 000 MVA). Salgsinntekten føres eks. MVA. Utgående MVA er gjeld til staten.',
      },
    },
    {
      id: 'rr-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        task: 'I løpet av en termin har en virksomhet hatt: Salg 25 % MVA: 600 000 kr eks. MVA. Salg 15 % MVA: 200 000 kr eks. MVA. Innkjøp 25 % MVA: 280 000 kr eks. MVA. Innkjøp 15 % MVA: 80 000 kr eks. MVA. Beregn MVA-oppgjøret for terminen.',
        solution: 'Utgående MVA: (600 000 × 0,25) + (200 000 × 0,15) = 150 000 + 30 000 = 180 000 kr. Inngående MVA: (280 000 × 0,25) + (80 000 × 0,15) = 70 000 + 12 000 = 82 000 kr. MVA til betaling: 180 000 − 82 000 = 98 000 kr.',
      },
    },
    {
      id: 'rr-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        task: 'Et firma kjøper en ny printer for 12 000 kr eks. MVA (25 %) og et representasjonsmåltid for 2 500 kr inkl. MVA (25 %). Forklar fradragsretten og bokfør begge transaksjonene.',
        hints: ['Representasjon gir ikke fradragsrett for inngående MVA'],
        solution: 'Printer: Full fradragsrett. Debet 1280 Inventar 12 000, debet 2710 Inngående MVA 3 000, kredit 2400 Leverandørgjeld 15 000. Representasjon: Ingen fradragsrett for MVA. Pris eks. MVA: 2 500 ÷ 1,25 = 2 000. MVA: 500 kr. Debet 7350 Representasjon 2 500 (hele beløpet inkl. MVA blir kostnad), kredit 2400 Leverandørgjeld 2 500. MVA-beløpet på 500 kr kan ikke trekkes fra og blir en del av kostnaden.',
      },
    },
    {
      id: 'rr-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-5-3-ex-5',
        number: '5.3.5',
        type: 'multiple-choice',
        task: 'Hva skjer dersom inngående MVA er høyere enn utgående MVA i en termin?',
        options: [
          { id: 'a', text: 'Virksomheten må likevel betale et minimumsbeløp til staten', isCorrect: false },
          { id: 'b', text: 'Differansen overføres til neste termin', isCorrect: false },
          { id: 'c', text: 'Virksomheten får tilgodehavende som utbetales av Skatteetaten', isCorrect: true },
          { id: 'd', text: 'Virksomheten mister fradragsretten for overskytende MVA', isCorrect: false },
        ],
        solution: 'Dersom inngående MVA overstiger utgående MVA, har virksomheten et tilgodehavende som Skatteetaten utbetaler. Dette er vanlig for eksportbedrifter og virksomheter som har store investeringer.',
      },
    },
    {
      id: 'rr-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'rr-5-3-ex-6',
        number: '5.3.6',
        type: 'classic',
        task: 'Vis den fullstendige bokføringen av MVA-oppgjøret ved terminens slutt der utgående MVA er 145 000 kr og inngående MVA er 62 000 kr. Inkluder overføring til oppgjørskonto og betaling fra bank.',
        solution: 'Overføring: Debet 2700 Utgående MVA 145 000, kredit 2710 Inngående MVA 62 000, kredit 2740 MVA-oppgjørskonto 83 000. Betaling: Debet 2740 MVA-oppgjørskonto 83 000, kredit 1920 Bankinnskudd 83 000. Etter posteringene er alle MVA-konti nullstilt og klar for neste termin.',
      },
    },
    {
      id: 'rr-5-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **MVA-meldingen** leveres annenhver måned (6 terminer per år)
- **MVA-oppgjøret** = utgående MVA minus inngående MVA
- **Fradragsrett** gjelder innkjøp til bruk i avgiftspliktig virksomhet
- **Representasjon og personbiler** gir ikke fradragsrett
- MVA bokføres på konto **2700** (utgående), **2710** (inngående) og **2740** (oppgjør)
- Ved terminoppgjøret overføres MVA-saldoene til oppgjørskontoen`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 5.4: Foretaksskatt
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_5_4: TextbookChapter = {
  id: 'regnskap-revisjon-5-4',
  courseId: 'regnskap-revisjon',
  chapterNumber: '5.4',
  title: 'Foretaksskatt',
  description: 'Beregning av alminnelig inntekt for foretak, skattemessige avskrivninger etter saldometoden, og forskjeller mellom regnskapsmessig og skattemessig resultat. Du lærer å beregne skattepliktig inntekt.',
  estimatedMinutes: 22,
  competenceGoals: ['gjøre rede for foretaksskatt og skattemessige avskrivninger'],
  content: [
    {
      id: 'rr-5-4-intro',
      type: 'text',
      content: `## Beskatning av foretak

Aksjeselskaper og andre foretak betaler skatt på sin alminnelige inntekt. Skattesatsen for selskaper er 22 %. I dette kapittelet ser vi på hvordan skattepliktig inntekt beregnes, hvilke fradrag som gjelder, og hvordan skattemessige avskrivninger skiller seg fra regnskapsmessige.

I dette kapittelet skal du lære:
- Hva alminnelig inntekt er og hvordan den beregnes
- Skattemessige avskrivninger etter saldometoden
- Forskjeller mellom regnskapsmessig og skattemessig resultat
- Å beregne skattekostnaden for et foretak`,
    },
    {
      id: 'rr-5-4-def-1',
      type: 'definition',
      title: 'Alminnelig inntekt',
      content: `**Alminnelig inntekt** er det skattemessige overskuddet som danner grunnlaget for beregning av foretaksskatt. Alminnelig inntekt beregnes med utgangspunkt i regnskapsmessig resultat, justert for permanente og midlertidige forskjeller mellom regnskap og skatt. Skattesatsen på alminnelig inntekt er 22 %.`,
    },
    {
      id: 'rr-5-4-text-1',
      type: 'text',
      content: `### Fra regnskapsmessig resultat til skattepliktig inntekt

Regnskapsmessig resultat og skattepliktig inntekt er sjelden identiske. Forskjellene skyldes at regnskapsregler og skatteregler behandler enkelte poster ulikt.

**Beregningsmodell:**

| Post | Beløp |
|------|-------|
| Regnskapsmessig resultat før skatt | + / − |
| + Ikke-fradragsberettigede kostnader | + |
| − Ikke-skattepliktige inntekter | − |
| + Regnskapsmessige avskrivninger | + |
| − Skattemessige avskrivninger | − |
| + / − Andre forskjeller | + / − |
| = **Alminnelig inntekt (skattepliktig)** | = |
| × Skattesats 22 % | |
| = **Betalbar skatt** | |`,
    },
    {
      id: 'rr-5-4-text-2',
      type: 'text',
      content: `### Permanente og midlertidige forskjeller

**Permanente forskjeller** er forskjeller som aldri utlignes over tid:
- Representasjonskostnader (ikke fradragsberettiget skattemessig)
- Gaver til ansatte (begrenset fradrag skattemessig)
- Bøter og forelegg (ikke fradragsberettiget)
- Skattefrie inntekter etter fritaksmetoden (aksjeutbytte mellom selskaper)

**Midlertidige forskjeller** er forskjeller som utlignes over tid:
- Forskjellige avskrivningssatser i regnskap og skatt
- Ulik periodisering av inntekter og kostnader
- Forskjeller i verdsettelse av eiendeler

Midlertidige forskjeller gir opphav til **utsatt skatt** (skattegjeld) eller **utsatt skattefordel** (skattefordring) i balansen.`,
    },
    {
      id: 'rr-5-4-def-2',
      type: 'definition',
      title: 'Saldoavskrivning',
      content: `**Saldoavskrivning** er den skattemessige metoden for avskrivning av driftsmidler. Driftsmidlene grupperes i saldogrupper (a til j) med fastsatte maksimale avskrivningssatser. Avskrivningen beregnes som en prosent av saldoverdien (bokført verdi) ved årets begynnelse, noe som gir avtagende avskrivningsbeløp over tid.`,
    },
    {
      id: 'rr-5-4-text-3',
      type: 'text',
      content: `### Saldogrupper og avskrivningssatser

| Gruppe | Type driftsmidler | Maks sats |
|--------|-------------------|-----------|
| a | Kontormaskiner o.l. | 30 % |
| b | Ervervet goodwill | 20 % |
| c | Vogntog, lastebiler, busser o.l. | 24 % |
| d | Personbiler, maskiner, inventar o.l. | 20 % |
| e | Skip, fartøyer, rigger o.l. | 14 % |
| f | Fly, helikopter | 12 % |
| g | Anlegg for overføring og distribusjon av elektrisitet | 5 % |
| h | Bygg og anlegg, hoteller o.l. | 4 % |
| i | Forretningsbygg | 2 % |
| j | Tekniske installasjoner i forretningsbygg | 10 % |

Avskrivningen beregnes av saldoverdien: **Avskrivning = Saldoverdi × Sats**`,
    },
    {
      id: 'rr-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Skattemessig avskrivning',
      problem: 'Et firma kjøper en maskin (saldogruppe d, 20 %) for 500 000 kr. Beregn skattemessige avskrivninger for de tre første årene.',
      solution: `**År 1:**
- Saldoverdi 01.01: 500 000 kr
- Avskrivning: 500 000 × 20 % = 100 000 kr
- Saldoverdi 31.12: 500 000 − 100 000 = 400 000 kr

**År 2:**
- Saldoverdi 01.01: 400 000 kr
- Avskrivning: 400 000 × 20 % = 80 000 kr
- Saldoverdi 31.12: 400 000 − 80 000 = 320 000 kr

**År 3:**
- Saldoverdi 01.01: 320 000 kr
- Avskrivning: 320 000 × 20 % = 64 000 kr
- Saldoverdi 31.12: 320 000 − 64 000 = 256 000 kr

Merk at avskrivningsbeløpet synker for hvert år, i motsetning til lineær avskrivning.`,
    },
    {
      id: 'rr-5-4-example-2',
      type: 'example',
      title: 'Eksempel: Beregning av betalbar skatt',
      problem: 'Et AS har regnskapsmessig resultat før skatt på 1 200 000 kr. Regnskapsmessige avskrivninger er 150 000 kr, skattemessige avskrivninger er 200 000 kr. Selskapet har representasjonskostnader på 30 000 kr (ikke fradragsberettiget). Beregn alminnelig inntekt og betalbar skatt.',
      solution: `**Beregning av alminnelig inntekt:**

| Post | Beløp |
|------|-------|
| Regnskapsmessig resultat før skatt | 1 200 000 |
| + Representasjonskostnader (permanent forskjell) | + 30 000 |
| + Regnskapsmessige avskrivninger (tilbakeført) | + 150 000 |
| − Skattemessige avskrivninger | − 200 000 |
| = **Alminnelig inntekt** | **1 180 000** |

**Betalbar skatt:** 1 180 000 × 22 % = **259 600 kr**

Representasjonskostnadene er en permanent forskjell – de er kostnadsført i regnskapet, men ikke fradragsberettiget skattemessig. Avskrivningsforskjellen (50 000 kr) er en midlertidig forskjell som utlignes over tid.`,
    },
    {
      id: 'rr-5-4-note-1',
      type: 'note',
      title: 'Fritaksmetoden',
      content: `Fritaksmetoden innebærer at aksjeselskaper i hovedsak er fritatt for skatt på aksjeutbytte og gevinst ved salg av aksjer i andre selskaper. Formålet er å unngå kjedebeskatning der samme overskudd beskattes flere ganger gjennom en eierkjede. 3 % av fritatt utbytte tilbakeføres likevel som skattepliktig inntekt.`,
    },
    {
      id: 'rr-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        task: 'Hva er skattesatsen på alminnelig inntekt for aksjeselskaper i Norge?',
        options: [
          { id: 'a', text: '20 %', isCorrect: false },
          { id: 'b', text: '22 %', isCorrect: true },
          { id: 'c', text: '25 %', isCorrect: false },
          { id: 'd', text: '28 %', isCorrect: false },
        ],
        solution: 'Skattesatsen på alminnelig inntekt for selskaper er 22 %. Denne satsen har vært gradvis redusert fra 28 % (før 2014) til dagens nivå.',
      },
    },
    {
      id: 'rr-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        task: 'En kontormaskin (saldogruppe a, 30 %) kjøpes for 80 000 kr. Beregn skattemessige avskrivninger og saldoverdi for de fire første årene.',
        solution: 'År 1: Avskrivning = 80 000 × 30 % = 24 000. Saldoverdi = 56 000. År 2: Avskrivning = 56 000 × 30 % = 16 800. Saldoverdi = 39 200. År 3: Avskrivning = 39 200 × 30 % = 11 760. Saldoverdi = 27 440. År 4: Avskrivning = 27 440 × 30 % = 8 232. Saldoverdi = 19 208.',
      },
    },
    {
      id: 'rr-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-5-4-ex-3',
        number: '5.4.3',
        type: 'classic',
        task: 'Et AS har regnskapsmessig resultat før skatt på 850 000 kr. Selskapet har bøter på 15 000 kr (ikke fradragsberettiget), regnskapsmessige avskrivninger på 120 000 kr og skattemessige avskrivninger på 95 000 kr. Beregn alminnelig inntekt og betalbar skatt.',
        hints: ['Bøter er en permanent forskjell som tilbakeføres skattemessig'],
        solution: 'Alminnelig inntekt: 850 000 + 15 000 (bøter) + 120 000 (tilbakeført regnsk. avskr.) − 95 000 (skattemessige avskr.) = 890 000 kr. Betalbar skatt: 890 000 × 22 % = 195 800 kr.',
      },
    },
    {
      id: 'rr-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-5-4-ex-4',
        number: '5.4.4',
        type: 'multiple-choice',
        task: 'Hva er en midlertidig forskjell mellom regnskap og skatt?',
        options: [
          { id: 'a', text: 'En forskjell som aldri utlignes', isCorrect: false },
          { id: 'b', text: 'En forskjell som utlignes over tid, for eksempel ulike avskrivningssatser', isCorrect: true },
          { id: 'c', text: 'En forskjell som bare gjelder det første regnskapsåret', isCorrect: false },
          { id: 'd', text: 'En forskjell som bare oppstår ved salg av eiendeler', isCorrect: false },
        ],
        solution: 'Midlertidige forskjeller er forskjeller mellom regnskapsmessig og skattemessig verdi som utlignes over tid. Det vanligste eksempelet er ulike avskrivningssatser – driftsmidlet avskrives over tid i begge systemer, men med ulikt tempo.',
      },
    },
    {
      id: 'rr-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom lineær avskrivning (regnskapsmessig) og saldoavskrivning (skattemessig). Bruk et driftsmiddel med kostpris 200 000 kr, levetid 5 år (lineært) og saldogruppe d (20 %) som eksempel, og vis avskrivningene for de tre første årene med begge metoder.',
        solution: 'Lineær avskrivning: Årlig avskrivning = 200 000 / 5 = 40 000 kr hvert år. Saldoavskrivning: År 1 = 200 000 × 20 % = 40 000. År 2 = 160 000 × 20 % = 32 000. År 3 = 128 000 × 20 % = 25 600. Lineær gir like store avskrivninger hvert år. Saldo gir avtagende avskrivninger – størst i begynnelsen. Etter 3 år er lineær restverdien 80 000 kr, mens saldoverdien er 102 400 kr. Saldometoden avskriver aldri driftsmidlet helt til null.',
      },
    },
    {
      id: 'rr-5-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Alminnelig inntekt** er grunnlaget for foretaksskatt, beregnet fra regnskapsmessig resultat med justeringer
- **Skattesatsen** for selskaper er 22 %
- **Permanente forskjeller** (representasjon, bøter) utlignes aldri
- **Midlertidige forskjeller** (avskrivninger) utlignes over tid
- **Saldoavskrivning** gir avtagende avskrivninger basert på saldoverdien
- Driftsmidler grupperes i **saldogrupper a–j** med ulike satser`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 5.5: Arbeidsgiveravgift og forskuddstrekk
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_5_5: TextbookChapter = {
  id: 'regnskap-revisjon-5-5',
  courseId: 'regnskap-revisjon',
  chapterNumber: '5.5',
  title: 'Arbeidsgiveravgift og forskuddstrekk',
  description: 'A-meldingen, beregning av arbeidsgiveravgift (AGA), forskuddstrekk, feriepenger og innrapportering av lønn. Du lærer å beregne de totale lønnskostnadene for en arbeidsgiver.',
  estimatedMinutes: 22,
  competenceGoals: ['utføre lønnsberegninger med arbeidsgiveravgift og forskuddstrekk'],
  content: [
    {
      id: 'rr-5-5-intro',
      type: 'text',
      content: `## Arbeidsgivers plikter ved lønnsutbetaling

Arbeidsgivere har en rekke plikter knyttet til lønnsutbetaling. I tillegg til selve lønnen må arbeidsgiver beregne og innberette forskuddstrekk, arbeidsgiveravgift og feriepenger. Alt dette rapporteres gjennom a-meldingen. I dette kapittelet lærer du om de ulike elementene og hvordan de beregnes og bokføres.

I dette kapittelet skal du lære:
- Hva a-meldingen inneholder og når den skal leveres
- Beregning av arbeidsgiveravgift (AGA)
- Forskuddstrekk av skatt
- Feriepenger og avsetning
- Bokføring av lønn og tilhørende kostnader`,
    },
    {
      id: 'rr-5-5-def-1',
      type: 'definition',
      title: 'A-meldingen',
      content: `**A-meldingen** er den månedlige rapporten arbeidsgivere sender til Skatteetaten, NAV og Statistisk sentralbyrå. Den inneholder opplysninger om alle ansattes lønn, forskuddstrekk, arbeidsgiveravgift, pensjonsinnbetalinger og andre ytelser. A-meldingen leveres elektronisk innen den 5. i hver måned for foregående måned.`,
    },
    {
      id: 'rr-5-5-text-1',
      type: 'text',
      content: `### Arbeidsgiveravgift (AGA)

Arbeidsgiveravgiften er en avgift arbeidsgivere betaler til folketrygden basert på utbetalt lønn og andre godtgjørelser. Satsen varierer etter sone:

| Sone | Område | Sats |
|------|--------|------|
| Sone 1 | Sentrale strøk (Oslo, Bergen, Stavanger osv.) | 14,1 % |
| Sone 1a | Mellomstore byer | 10,6 % |
| Sone 2 | Distriktsområder | 10,6 % |
| Sone 3 | Utkantstrøk | 6,4 % |
| Sone 4 | Finnmark og Nord-Troms | 5,1 % |
| Sone 4a | Tiltakssonen | 7,9 % |
| Sone 5 | Finnmark og Nord-Troms (deler) | 0 % |

**AGA-grunnlaget:**
- Bruttolønn
- Feriepenger
- Naturalytelser (fri bil, fri telefon, etc.)
- Styrehonorar, bonuser og andre godtgjørelser`,
    },
    {
      id: 'rr-5-5-def-2',
      type: 'definition',
      title: 'Forskuddstrekk',
      content: `**Forskuddstrekk** er den skatten arbeidsgiver trekker fra den ansattes brutto lønn og innbetaler til Skatteetaten på vegne av den ansatte. Trekkprosenten fastsettes av Skatteetaten basert på den ansattes skattekort. Forskuddstrekket skal settes inn på en egen skattetrekkskonto innen lønnsutbetalingen.`,
    },
    {
      id: 'rr-5-5-text-2',
      type: 'text',
      content: `### Lønnsberegning – fra brutto til netto

**Arbeidsgivers perspektiv:**

| Post | Beregning |
|------|-----------|
| Bruttolønn | Avtalt lønn |
| − Forskuddstrekk | Bruttolønn × trekkprosent |
| − Pensjonsinnskudd (ansattes del) | Eventuelt |
| − Andre trekk | Fagforeningskontingent, etc. |
| = **Utbetalt lønn (netto)** | Til ansattes konto |

**Arbeidsgivers totale kostnad:**

| Post | Beregning |
|------|-----------|
| Bruttolønn | Avtalt lønn |
| + Arbeidsgiveravgift | Bruttolønn × AGA-sats |
| + Feriepengeavsetning | Bruttolønn × 12 % (eller 14,3 %) |
| + AGA på feriepenger | Feriepengeavsetning × AGA-sats |
| + Pensjonskostnad (arbeidsgivers del) | Eventuelt |
| = **Total lønnskostnad** | |`,
    },
    {
      id: 'rr-5-5-text-3',
      type: 'text',
      content: `### Feriepenger

Alle ansatte har krav på feriepenger. Feriepengene beregnes av fjorårets lønn:

**Feriepengegrunnlaget:**
- Ordinær lønn
- Overtidstillegg
- Provisjoner og bonuser
- Skifttillegg og andre variable tillegg

**Feriepengegrunnlaget inkluderer IKKE:**
- Feriepengene selv
- Naturalytelser (fri bil, etc.)
- Reiseutgifter og diett

**Satser:**
- Vanlig: 10,2 % av feriepengegrunnlaget (4 uker + 1 dag ferie)
- Tariffestet: 12,0 % (5 uker ferie)
- Over 60 år: Tillegg på 2,3 prosentpoeng

Feriepenger avsettes månedlig i regnskapet og utbetales normalt i juni.`,
    },
    {
      id: 'rr-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Lønnsberegning med alle elementer',
      problem: 'En ansatt har bruttolønn 45 000 kr per måned. Forskuddstrekk er 35 %. Bedriften er i sone 1 (AGA 14,1 %) og har tariffestet 5 ukers ferie (12 % feriepenger). Beregn netto utbetaling til den ansatte og arbeidsgivers totale lønnskostnad.',
      solution: `**Utbetaling til ansatt:**
- Bruttolønn: 45 000 kr
- Forskuddstrekk: 45 000 × 35 % = 15 750 kr
- **Netto utbetalt: 45 000 − 15 750 = 29 250 kr**

**Arbeidsgivers totale kostnad:**
- Bruttolønn: 45 000 kr
- Feriepengeavsetning: 45 000 × 12 % = 5 400 kr
- AGA av lønn: 45 000 × 14,1 % = 6 345 kr
- AGA av feriepenger: 5 400 × 14,1 % = 761,40 kr
- **Total lønnskostnad: 45 000 + 5 400 + 6 345 + 761,40 = 57 506,40 kr**

Arbeidsgivers reelle kostnad er altså 57 506 kr, mens den ansatte mottar 29 250 kr utbetalt. Differansen går til skatt, feriepenger og arbeidsgiveravgift.`,
    },
    {
      id: 'rr-5-5-example-2',
      type: 'example',
      title: 'Eksempel: Bokføring av lønnsutbetaling',
      problem: 'Bokfør lønnsutbetalingen fra eksempelet ovenfor (bruttolønn 45 000, forskuddstrekk 15 750, feriepengeavsetning 5 400, AGA av lønn 6 345, AGA av feriepenger 761).',
      solution: `**Bilag: Lønnsutbetaling**

| Konto | Tekst | Debet | Kredit |
|-------|-------|-------|--------|
| 5000 Lønn | Bruttolønn | 45 000 | |
| 5020 Feriepenger | Avsetning | 5 400 | |
| 5400 AGA | AGA av lønn | 6 345 | |
| 5400 AGA | AGA av feriepenger | 761 | |
| 1920 Bank | Netto utbetalt | | 29 250 |
| 2600 Forskuddstrekk | Skyldig trekk | | 15 750 |
| 2910 Skyldig feriepenger | Avsetning | | 5 400 |
| 2770 Skyldig AGA | AGA sum | | 7 106 |

Debet sum = 57 506 kr. Kredit sum = 57 506 kr. ✓`,
    },
    {
      id: 'rr-5-5-warning-1',
      type: 'warning',
      title: 'Skattetrekkskonto',
      content: `Arbeidsgiver er lovpålagt å sette forskuddstrekket inn på en egen skattetrekkskonto i banken senest ved lønnsutbetalingen. Pengene på skattetrekkskontoen tilhører den ansatte og staten, og kan ikke brukes av arbeidsgiveren. Manglende oppfyllelse av denne plikten er straffbart og kan føre til personlig ansvar for daglig leder.`,
    },
    {
      id: 'rr-5-5-text-4',
      type: 'text',
      content: `### Innbetalingsfrister

| Hva | Frist |
|-----|-------|
| A-meldingen | 5. i måneden etter |
| Forskuddstrekk | Annenhver måned (sammen med AGA) |
| Arbeidsgiveravgift | Annenhver måned |
| Feriepenger | Utbetales til ansatte normalt i juni |

**Terminer for innbetaling av skattetrekk og AGA:**
- 1. termin (jan–feb): 15. mars
- 2. termin (mar–apr): 15. mai
- 3. termin (mai–jun): 15. juli
- 4. termin (jul–aug): 15. september
- 5. termin (sep–okt): 15. november
- 6. termin (nov–des): 15. januar (neste år)`,
    },
    {
      id: 'rr-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        task: 'Når er fristen for å levere a-meldingen?',
        options: [
          { id: 'a', text: 'Den 1. i hver måned', isCorrect: false },
          { id: 'b', text: 'Den 5. i hver måned for foregående måned', isCorrect: true },
          { id: 'c', text: 'Den 10. i hver måned', isCorrect: false },
          { id: 'd', text: 'Annenhver måned', isCorrect: false },
        ],
        solution: 'A-meldingen skal leveres elektronisk innen den 5. i hver måned for foregående måned. Den inneholder opplysninger om lønn, forskuddstrekk, arbeidsgiveravgift og pensjonsinnbetalinger for alle ansatte.',
      },
    },
    {
      id: 'rr-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-5-5-ex-2',
        number: '5.5.2',
        type: 'classic',
        task: 'En ansatt har bruttolønn 52 000 kr per måned. Forskuddstrekk er 38 %. Bedriften har AGA-sats 14,1 % og feriepengesats 10,2 %. Beregn: a) Netto utbetaling til den ansatte. b) Total månedlig lønnskostnad for arbeidsgiver.',
        hints: ['Husk å beregne AGA på feriepengene også'],
        solution: 'a) Netto: 52 000 − (52 000 × 38 %) = 52 000 − 19 760 = 32 240 kr. b) Feriepenger: 52 000 × 10,2 % = 5 304 kr. AGA av lønn: 52 000 × 14,1 % = 7 332 kr. AGA av feriepenger: 5 304 × 14,1 % = 747,86 kr. Total: 52 000 + 5 304 + 7 332 + 747,86 = 65 383,86 kr.',
      },
    },
    {
      id: 'rr-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-5-5-ex-3',
        number: '5.5.3',
        type: 'classic',
        task: 'Bokfør lønnsutbetalingen for følgende: Bruttolønn 38 000 kr, forskuddstrekk 33 %, feriepengeavsetning 12 %, AGA 14,1 %. Bruk kontonumrene fra eksempelet i teksten.',
        solution: 'Forskuddstrekk: 38 000 × 33 % = 12 540. Netto: 38 000 − 12 540 = 25 460. Feriepenger: 38 000 × 12 % = 4 560. AGA av lønn: 38 000 × 14,1 % = 5 358. AGA av feriepenger: 4 560 × 14,1 % = 642,96 ≈ 643. Debet 5000 Lønn 38 000, debet 5020 Feriepenger 4 560, debet 5400 AGA 6 001. Kredit 1920 Bank 25 460, kredit 2600 Forskuddstrekk 12 540, kredit 2910 Skyldig feriepenger 4 560, kredit 2770 Skyldig AGA 6 001.',
      },
    },
    {
      id: 'rr-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-5-5-ex-4',
        number: '5.5.4',
        type: 'multiple-choice',
        task: 'Hva er arbeidsgiveravgiftssatsen i sone 1 (sentrale strøk)?',
        options: [
          { id: 'a', text: '10,6 %', isCorrect: false },
          { id: 'b', text: '12,0 %', isCorrect: false },
          { id: 'c', text: '14,1 %', isCorrect: true },
          { id: 'd', text: '22,0 %', isCorrect: false },
        ],
        solution: 'Arbeidsgiveravgiften i sone 1 (sentrale strøk som Oslo, Bergen og Stavanger) er 14,1 %. Satsen er differensiert etter geografi – lavere satser i distriktene for å stimulere sysselsetting.',
      },
    },
    {
      id: 'rr-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        task: 'Et firma i sone 1 (14,1 % AGA) har 3 ansatte med bruttolønn på henholdsvis 42 000, 48 000 og 55 000 kr per måned. Alle har 12 % feriepengeavsetning. Beregn bedriftens totale månedlige lønnskostnad.',
        solution: 'Total bruttolønn: 42 000 + 48 000 + 55 000 = 145 000 kr. Feriepenger: 145 000 × 12 % = 17 400 kr. AGA av lønn: 145 000 × 14,1 % = 20 445 kr. AGA av feriepenger: 17 400 × 14,1 % = 2 453,40 kr. Total lønnskostnad: 145 000 + 17 400 + 20 445 + 2 453,40 = 185 298,40 kr per måned.',
      },
    },
    {
      id: 'rr-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'rr-5-5-ex-6',
        number: '5.5.6',
        type: 'classic',
        task: 'Forklar hvorfor den totale lønnskostnaden for arbeidsgiver er vesentlig høyere enn bruttolønnen til den ansatte. Gi en oversikt over alle elementene som inngår.',
        solution: 'Arbeidsgiver betaler mer enn bruttolønnen fordi det tilkommer flere lovpålagte kostnader: 1) Arbeidsgiveravgift (14,1 % i sone 1) beregnes av bruttolønnen og betales til folketrygden. 2) Feriepengeavsetning (10,2 % eller 12 %) settes av månedlig og utbetales i ferieåret. 3) AGA beregnes også av feriepengene. 4) Obligatorisk tjenestepensjon (minimum 2 % av lønn). 5) Yrkesskadeforsikring og eventuelle andre personalforsikringer. Totalt kan de påslagene utgjøre 30–40 % over bruttolønnen. En ansatt med 500 000 kr i årslønn koster arbeidsgiver gjerne 650 000–700 000 kr totalt.',
      },
    },
    {
      id: 'rr-5-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **A-meldingen** leveres den 5. i hver måned med lønnsopplysninger
- **Arbeidsgiveravgift** beregnes av brutto lønn og feriepenger, satsen varierer etter sone
- **Forskuddstrekk** trekkes fra bruttolønnen og settes på skattetrekkskonto
- **Feriepenger** avsettes månedlig (10,2 % eller 12 %) og utbetales i juni
- Den totale **lønnskostnaden** for arbeidsgiver er vesentlig høyere enn bruttolønnen
- Lønn bokføres med debet på **lønnskostnader** og kredit på **bank, skyldig trekk, skyldig AGA og skyldig feriepenger**`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const REGNSKAP_REVISJON_DEL5_CHAPTERS = [
  CHAPTER_REGNSKAP_REVISJON_5_1,
  CHAPTER_REGNSKAP_REVISJON_5_2,
  CHAPTER_REGNSKAP_REVISJON_5_3,
  CHAPTER_REGNSKAP_REVISJON_5_4,
  CHAPTER_REGNSKAP_REVISJON_5_5,
];
