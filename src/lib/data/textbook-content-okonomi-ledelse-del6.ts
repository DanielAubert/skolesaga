/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og ledelse (VG2) - Del 6: Grunnleggende bedriftsøkonomi
 *
 * Kapittel 6.1–6.5
 *
 * LK20-kompetansemål:
 * - gjøre rede for grunnleggende økonomiske begreper
 * - beregne dekningsbidrag og finne nullpunktet
 * - lese og tolke resultatregnskap og balanse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Inntekter og kostnader
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_6_1: TextbookChapter = {
  id: 'okonomi-ledelse-6-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '6.1',
  title: 'Inntekter og kostnader',
  description: 'Salgsinntekter, driftsinntekter, driftskostnader og resultat — de grunnleggende byggesteinene i bedriftsøkonomien.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for grunnleggende økonomiske begreper',
  ],
  content: [
    {
      id: 'ol-6-1-intro',
      type: 'text',
      content: `## Inntekter og kostnader — grunnlaget for lønnsomhet

For å forstå om en bedrift tjener penger, må vi først forstå hva inntekter og kostnader er. Alle virksomheter — fra en liten kiosk til store konsern — har inntekter som strømmer inn og kostnader som går ut. Forskjellen mellom disse bestemmer om bedriften går med overskudd eller underskudd.

I dette kapittelet skal du lære:
- Hva salgsinntekter og andre driftsinntekter er
- Hvilke typer kostnader en bedrift har
- Hvordan vi beregner resultat
- Forskjellen mellom inntekt og innbetaling`,
    },
    {
      id: 'ol-6-1-def-1',
      type: 'definition',
      title: 'Salgsinntekter',
      content: `**Salgsinntekter** er inntektene en bedrift får fra salg av varer og tjenester. Dette er vanligvis den viktigste inntektskilden. Salgsinntektene beregnes som pris per enhet ganget med antall solgte enheter: $\\text{Salgsinntekt} = \\text{Pris} \\times \\text{Antall solgt}$.`,
    },
    {
      id: 'ol-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av salgsinntekter',
      problem: 'En kafé selger 120 kopper kaffe til kr 49 per kopp og 80 kanelboller til kr 39 per stykk i løpet av en dag. Hva er dagens salgsinntekt?',
      solution: `**Steg 1:** Inntekt fra kaffe: $120 \\times 49 = 5\\,880$ kr

**Steg 2:** Inntekt fra kanelboller: $80 \\times 39 = 3\\,120$ kr

**Steg 3:** Total salgsinntekt: $5\\,880 + 3\\,120 = 9\\,000$ kr

Kaféen hadde altså kr 9 000 i salgsinntekter denne dagen.`,
    },
    {
      id: 'ol-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En nettbutikk selger 200 t-skjorter til kr 299 per stykk. Hva er salgsinntekten?',
        options: [
          { id: 'a', text: 'kr 29 900', isCorrect: false },
          { id: 'b', text: 'kr 59 800', isCorrect: true },
          { id: 'c', text: 'kr 49 900', isCorrect: false },
          { id: 'd', text: 'kr 69 800', isCorrect: false },
        ],
        solution: '$200 \\times 299 = 59\\,800$ kr. Salgsinntekten er kr 59 800.',
      },
    },
    {
      id: 'ol-6-1-def-2',
      type: 'definition',
      title: 'Driftsinntekter og driftskostnader',
      content: `**Driftsinntekter** omfatter alle inntekter knyttet til bedriftens ordinære drift — både salgsinntekter og andre driftsinntekter (f.eks. leieinntekter, provisjoner eller offentlige tilskudd).

**Driftskostnader** er alle kostnader knyttet til den daglige driften, som varekostnad, lønn, husleie, strøm, forsikring, avskrivninger og markedsføring.`,
    },
    {
      id: 'ol-6-1-text-2',
      type: 'text',
      content: `### Typiske driftskostnader

En bedrift har mange ulike kostnader. De viktigste kategoriene er:

| Kostnadstype | Eksempler |
|---|---|
| Varekostnad | Innkjøp av varer for videresalg |
| Lønnskostnad | Lønn, feriepenger, arbeidsgiveravgift |
| Husleie | Leie av lokaler, lager |
| Avskrivninger | Verdifall på maskiner, utstyr, kjøretøy |
| Andre driftskostnader | Strøm, forsikring, regnskap, markedsføring |

Summen av alle disse utgjør bedriftens totale driftskostnader.`,
    },
    {
      id: 'ol-6-1-formula-1',
      type: 'formula',
      title: 'Driftsresultat',
      latex: '\\text{Driftsresultat} = \\text{Driftsinntekter} - \\text{Driftskostnader}',
      description: 'Driftsresultatet viser om den daglige driften gir overskudd eller underskudd, før finansposter og skatt.',
    },
    {
      id: 'ol-6-1-example-2',
      type: 'example',
      title: 'Eksempel: Beregning av driftsresultat',
      problem: 'En frisørsalong har følgende tall for en måned:\n- Salgsinntekter: kr 280 000\n- Varekostnad (produkter): kr 35 000\n- Lønn: kr 150 000\n- Husleie: kr 25 000\n- Andre driftskostnader: kr 20 000\n\nHva er driftsresultatet?',
      solution: `**Steg 1:** Summer driftskostnadene:
$35\\,000 + 150\\,000 + 25\\,000 + 20\\,000 = 230\\,000$ kr

**Steg 2:** Beregn driftsresultatet:
$280\\,000 - 230\\,000 = 50\\,000$ kr

Frisørsalongen har et driftsresultat på kr 50 000. Det betyr at den ordinære driften gir et overskudd.`,
    },
    {
      id: 'ol-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'En bilverksted har driftsinntekter på kr 1 200 000 per år. Driftskostnadene er: varekostnad kr 320 000, lønn kr 580 000, husleie kr 120 000 og andre driftskostnader kr 95 000.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn totale driftskostnader.',
            solution: '$320\\,000 + 580\\,000 + 120\\,000 + 95\\,000 = 1\\,115\\,000$ kr',
            answer: 1115000,
          },
          {
            label: 'b',
            task: 'Beregn driftsresultatet.',
            solution: '$1\\,200\\,000 - 1\\,115\\,000 = 85\\,000$ kr',
            answer: 85000,
          },
        ],
        solution: 'Totale driftskostnader er kr 1 115 000. Driftsresultatet blir kr 1 200 000 − kr 1 115 000 = kr 85 000.',
      },
    },
    {
      id: 'ol-6-1-warning-1',
      type: 'warning',
      title: 'Inntekt er ikke det samme som innbetaling',
      content: `Det er viktig å skille mellom **inntekt** og **innbetaling**. En inntekt oppstår når en vare leveres eller en tjeneste utføres — uavhengig av når pengene faktisk kommer inn på konto. Hvis du selger varer på kreditt (faktura med 30 dagers betalingsfrist), registreres inntekten ved leveringstidspunktet, men innbetalingen skjer først når kunden betaler.`,
    },
    {
      id: 'ol-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-6-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er driftsresultatet dersom driftsinntektene er kr 500 000 og driftskostnadene er kr 530 000?',
        options: [
          { id: 'a', text: 'kr 30 000 i overskudd', isCorrect: false },
          { id: 'b', text: 'kr −30 000 (underskudd)', isCorrect: true },
          { id: 'c', text: 'kr 1 030 000', isCorrect: false },
          { id: 'd', text: 'kr 530 000', isCorrect: false },
        ],
        solution: '$500\\,000 - 530\\,000 = -30\\,000$ kr. Driftskostnadene er høyere enn driftsinntektene, noe som gir et underskudd på kr 30 000.',
      },
    },
    {
      id: 'ol-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom salgsinntekter og driftsinntekter. Gi et eksempel på en driftsinntekt som ikke er salgsinntekt.',
        hints: ['Tenk på inntekter som ikke kommer direkte fra salg av varer eller tjenester.'],
        solution: 'Salgsinntekter er inntekter fra salg av bedriftens varer og tjenester. Driftsinntekter inkluderer salgsinntekter pluss andre inntekter knyttet til driften, som f.eks. leieinntekter fra utleie av et lagerrom, offentlige tilskudd eller provisjonsinntekter.',
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'ol-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bedrift har følgende informasjon for et kvartal:\n- Solgt 5 000 enheter til kr 120 per enhet\n- Varekostnad: kr 45 per enhet\n- Fast lønn: kr 180 000\n- Husleie: kr 60 000\n- Markedsføring: kr 35 000\n- Leieinntekter (utleie av del av lokalet): kr 15 000\n\nBeregn salgsinntekter, totale driftsinntekter, totale driftskostnader og driftsresultat.',
        hints: ['Husk at leieinntektene er en driftsinntekt som legges til salgsinntektene.'],
        solution: 'Salgsinntekter: $5\\,000 \\times 120 = 600\\,000$ kr. Totale driftsinntekter: $600\\,000 + 15\\,000 = 615\\,000$ kr. Varekostnad: $5\\,000 \\times 45 = 225\\,000$ kr. Totale driftskostnader: $225\\,000 + 180\\,000 + 60\\,000 + 35\\,000 = 500\\,000$ kr. Driftsresultat: $615\\,000 - 500\\,000 = 115\\,000$ kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-6-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En gründer driver en nettbutikk med salgsinntekter på kr 800 000 i året. Driftskostnadene er kr 750 000. Hun vurderer å ansette en deltidsmedarbeider til kr 120 000 i året for å øke salget med anslagsvis 25 %. Er dette lønnsomt? Begrunn svaret med beregninger.',
        hints: ['Beregn nytt driftsresultat med og uten den nye ansettelsen.'],
        solution: 'Nåværende driftsresultat: $800\\,000 - 750\\,000 = 50\\,000$ kr. Med ny ansatt: Salgsinntekter øker med 25 %: $800\\,000 \\times 1{,}25 = 1\\,000\\,000$ kr. Nye driftskostnader: $750\\,000 + 120\\,000 = 870\\,000$ kr. Nytt driftsresultat: $1\\,000\\,000 - 870\\,000 = 130\\,000$ kr. Ja, det er lønnsomt — driftsresultatet øker fra kr 50 000 til kr 130 000.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Salgsinntekter** beregnes som pris ganger antall solgte enheter
- **Driftsinntekter** inkluderer salgsinntekter og andre driftsrelaterte inntekter
- **Driftskostnader** omfatter varekostnad, lønn, husleie og andre kostnader knyttet til drift
- **Driftsresultat** = driftsinntekter − driftskostnader
- Inntekt og innbetaling er ikke det samme

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Salgsinntekt | Inntekt fra salg av varer og tjenester |
| Driftsinntekt | Alle inntekter knyttet til ordinær drift |
| Driftskostnad | Alle kostnader knyttet til daglig drift |
| Driftsresultat | Driftsinntekter minus driftskostnader |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 6.2: Faste og variable kostnader
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_6_2: TextbookChapter = {
  id: 'okonomi-ledelse-6-2',
  courseId: 'okonomi-ledelse',
  chapterNumber: '6.2',
  title: 'Faste og variable kostnader',
  description: 'Definisjon av faste og variable kostnader, enhetskostnader og stordriftsfordeler — sentrale begreper for å forstå kostnadsstruktur.',
  estimatedMinutes: 24,
  competenceGoals: [
    'gjøre rede for grunnleggende økonomiske begreper',
  ],
  content: [
    {
      id: 'ol-6-2-intro',
      type: 'text',
      content: `## Faste og variable kostnader

For å styre en bedrift godt må vi forstå hvordan kostnadene oppfører seg. Noen kostnader er de samme uansett om bedriften produserer mye eller lite, mens andre kostnader øker i takt med produksjonen. Denne inndelingen er helt sentral i bedriftsøkonomien.

I dette kapittelet skal du lære:
- Forskjellen mellom faste og variable kostnader
- Hvordan beregne totale kostnader
- Hva enhetskostnader er og hvorfor de er viktige
- Hva stordriftsfordeler innebærer`,
    },
    {
      id: 'ol-6-2-def-1',
      type: 'definition',
      title: 'Faste kostnader (FK)',
      content: `**Faste kostnader** er kostnader som ikke endrer seg med produksjons- eller salgsvolum på kort sikt. Eksempler er husleie, forsikring, fast lønn til administrasjon og avskrivninger. Selv om bedriften ikke selger noe, påløper de faste kostnadene.`,
    },
    {
      id: 'ol-6-2-def-2',
      type: 'definition',
      title: 'Variable kostnader (VK)',
      content: `**Variable kostnader** er kostnader som endrer seg proporsjonalt med produksjons- eller salgsvolum. Eksempler er råvarer, emballasje, provisjonslønn og fraktkostnader per enhet. Selger bedriften dobbelt så mange enheter, dobles de variable kostnadene.`,
    },
    {
      id: 'ol-6-2-formula-1',
      type: 'formula',
      title: 'Totale kostnader',
      latex: 'TK = FK + VK = FK + (VK_{\\text{per enhet}} \\times \\text{antall})',
      description: 'Totale kostnader er summen av faste kostnader og variable kostnader.',
    },
    {
      id: 'ol-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Faste og variable kostnader i en bakeri',
      problem: 'Et bakeri har faste kostnader på kr 80 000 per måned (husleie, forsikring, fast lønn). Den variable kostnaden per brød er kr 12 (mel, gjær, emballasje). Bakeriet baker 6 000 brød i måneden. Hva er de totale kostnadene?',
      solution: `**Steg 1:** Faste kostnader (FK): kr 80 000

**Steg 2:** Variable kostnader (VK): $12 \\times 6\\,000 = 72\\,000$ kr

**Steg 3:** Totale kostnader (TK): $80\\,000 + 72\\,000 = 152\\,000$ kr

Bakeriets totale kostnader er kr 152 000 per måned.`,
    },
    {
      id: 'ol-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av disse er en fast kostnad?',
        options: [
          { id: 'a', text: 'Råvarekostnad per produsert enhet', isCorrect: false },
          { id: 'b', text: 'Husleie for butikklokalet', isCorrect: true },
          { id: 'c', text: 'Emballasje per solgt produkt', isCorrect: false },
          { id: 'd', text: 'Fraktkostnad per forsendelse', isCorrect: false },
        ],
        solution: 'Husleie er en fast kostnad fordi den er den samme uansett hvor mye bedriften selger. Råvarer, emballasje og frakt per enhet varierer med salgsvolum og er variable kostnader.',
      },
    },
    {
      id: 'ol-6-2-text-2',
      type: 'text',
      title: 'Enhetskostnader — kostnad per produsert enhet',
      content: `Enhetskostnaden viser hva det koster å produsere én enhet. Vi deler den i to:

- **Variabel enhetskostnad** ($VK_{\\text{per enhet}}$): Lik for hver enhet, f.eks. kr 12 per brød.
- **Fast enhetskostnad** ($FK_{\\text{per enhet}}$): Endrer seg med volum — jo flere enheter, desto lavere fast kostnad per enhet.

$$FK_{\\text{per enhet}} = \\frac{FK}{\\text{antall enheter}}$$

$$\\text{Total enhetskostnad} = FK_{\\text{per enhet}} + VK_{\\text{per enhet}}$$

Dette er grunnen til at det ofte lønner seg å produsere og selge mye — de faste kostnadene fordeles på flere enheter.`,
    },
    {
      id: 'ol-6-2-example-2',
      type: 'example',
      title: 'Eksempel: Enhetskostnader ved ulike volum',
      problem: 'Bakeriet fra forrige eksempel har FK = kr 80 000 og VK per brød = kr 12. Beregn total enhetskostnad ved 4 000 og 8 000 brød.',
      solution: `**Ved 4 000 brød:**
- Fast enhetskostnad: $\\frac{80\\,000}{4\\,000} = 20$ kr
- Variabel enhetskostnad: kr 12
- **Total enhetskostnad:** $20 + 12 = 32$ kr per brød

**Ved 8 000 brød:**
- Fast enhetskostnad: $\\frac{80\\,000}{8\\,000} = 10$ kr
- Variabel enhetskostnad: kr 12
- **Total enhetskostnad:** $10 + 12 = 22$ kr per brød

Enhetskostnaden synker fra kr 32 til kr 22 når volumet dobles. De faste kostnadene «smøres tynnere utover».`,
    },
    {
      id: 'ol-6-2-def-3',
      type: 'definition',
      title: 'Stordriftsfordeler',
      content: `**Stordriftsfordeler** (economies of scale) oppstår når enhetskostnaden synker ved økt produksjonsvolum. Dette skjer fordi faste kostnader fordeles på flere enheter, og fordi større innkjøpsvolum ofte gir lavere priser fra leverandører (kvantumsrabatt).`,
    },
    {
      id: 'ol-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'En møbelprodusent har faste kostnader på kr 600 000 per måned og variable kostnader på kr 1 500 per stol.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn totale kostnader ved produksjon av 200 stoler.',
            solution: '$TK = 600\\,000 + (1\\,500 \\times 200) = 600\\,000 + 300\\,000 = 900\\,000$ kr',
            answer: 900000,
          },
          {
            label: 'b',
            task: 'Beregn total enhetskostnad per stol ved 200 stoler og ved 500 stoler.',
            solution: 'Ved 200 stoler: $\\frac{600\\,000}{200} + 1\\,500 = 3\\,000 + 1\\,500 = 4\\,500$ kr. Ved 500 stoler: $\\frac{600\\,000}{500} + 1\\,500 = 1\\,200 + 1\\,500 = 2\\,700$ kr.',
          },
          {
            label: 'c',
            task: 'Forklar hvorfor enhetskostnaden synker ved økt volum.',
            solution: 'De faste kostnadene er uendret uansett antall stoler produsert. Når vi fordeler kr 600 000 på 500 stoler i stedet for 200, synker den faste kostnaden per stol fra kr 3 000 til kr 1 200. Dette er stordriftsfordeler.',
          },
        ],
        solution: 'Totale kostnader ved 200 stoler er kr 900 000. Enhetskostnad synker fra kr 4 500 til kr 2 700 når volumet øker fra 200 til 500, fordi faste kostnader fordeles på flere enheter.',
      },
    },
    {
      id: 'ol-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-6-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'En bedrift har faste kostnader på kr 200 000 og variable kostnader på kr 50 per enhet. Hva er totale kostnader ved 1 000 enheter?',
        options: [
          { id: 'a', text: 'kr 200 000', isCorrect: false },
          { id: 'b', text: 'kr 250 000', isCorrect: true },
          { id: 'c', text: 'kr 50 000', isCorrect: false },
          { id: 'd', text: 'kr 200 050', isCorrect: false },
        ],
        solution: '$TK = 200\\,000 + (50 \\times 1\\,000) = 200\\,000 + 50\\,000 = 250\\,000$ kr.',
      },
    },
    {
      id: 'ol-6-2-tip-1',
      type: 'tip',
      title: 'Semivariale kostnader',
      content: `Noen kostnader er verken helt faste eller helt variable. **Semivariable kostnader** har en fast del og en variabel del. Strøm er et typisk eksempel: du betaler et fast nettleiebeløp pluss en variabel kostnad per kilowattime brukt. Telefonabonnement med fast månedspris pluss ringekostnad er et annet eksempel.`,
    },
    {
      id: 'ol-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Klassifiser følgende kostnader som faste (F) eller variable (V) for en pizzarestaurant: (1) Husleie, (2) Mel og ost, (3) Forsikring, (4) Pizzaesker for takeaway, (5) Lønn til fast kokk, (6) Timebasert ekstrahjelp i helger.',
        hints: ['Tenk på om kostnaden endrer seg når restauranten selger flere eller færre pizzaer.'],
        solution: '(1) Husleie: F — samme uansett antall pizzaer. (2) Mel og ost: V — øker med antall pizzaer. (3) Forsikring: F — fast beløp. (4) Pizzaesker: V — flere esker ved mer takeaway. (5) Lønn fast kokk: F — fast månedslønn. (6) Timebasert ekstrahjelp: V — varierer med aktivitetsnivå.',
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'ol-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En sjokoladeprodusent har faste kostnader på kr 450 000 per måned. Variabel kostnad per sjokoladeplate er kr 18. Sjokoladen selges til butikkene for kr 45 per plate.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn totale kostnader og total enhetskostnad ved produksjon av 15 000 plater.',
            solution: '$TK = 450\\,000 + (18 \\times 15\\,000) = 450\\,000 + 270\\,000 = 720\\,000$ kr. Enhetskostnad: $\\frac{720\\,000}{15\\,000} = 48$ kr.',
          },
          {
            label: 'b',
            task: 'Er produksjonen lønnsom ved 15 000 plater? Begrunn svaret.',
            solution: 'Salgspris er kr 45, men enhetskostnaden er kr 48. Bedriften taper kr 3 per plate og er ikke lønnsom ved dette volumet.',
          },
          {
            label: 'c',
            task: 'Hvor mange plater må produseres for at enhetskostnaden skal bli lavere enn salgsprisen kr 45?',
            solution: '$\\frac{450\\,000}{x} + 18 \\leq 45 \\Rightarrow \\frac{450\\,000}{x} \\leq 27 \\Rightarrow x \\geq \\frac{450\\,000}{27} \\approx 16\\,667$. Produsenten må lage minst 16 667 plater for at enhetskostnaden skal være lavere enn salgsprisen.',
          },
        ],
        solution: 'Ved 15 000 plater er enhetskostnaden kr 48, som er høyere enn salgsprisen kr 45, og produksjonen er ulønnsom. Minst 16 667 plater må produseres for å oppnå lønnsomhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-6-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar med egne ord hvorfor store kjeder som Rema 1000 kan selge varer billigere enn en liten nærbutikk. Bruk begrepene faste kostnader, variable kostnader, enhetskostnader og stordriftsfordeler i forklaringen.',
        hints: ['Tenk på hvordan volumet påvirker enhetskostnadene, og hvilke fordeler store innkjøpsvolum gir.'],
        solution: 'Store kjeder oppnår stordriftsfordeler på flere måter: (1) Faste kostnader som sentrallager, IT-systemer og markedsføring fordeles på et enormt antall solgte enheter, noe som gir lav fast enhetskostnad. (2) Store innkjøpsvolum gir lavere variable kostnader gjennom kvantumsrabatter fra leverandører. (3) Resultatet er lavere total enhetskostnad, som gjør at kjeden kan sette lavere priser og fortsatt tjene penger — noe en liten nærbutikk med få kunder og høye enhetskostnader ikke kan konkurrere med.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Faste kostnader** er uendret uansett volum (husleie, forsikring, fast lønn)
- **Variable kostnader** øker proporsjonalt med volum (råvarer, emballasje)
- **Totale kostnader** = FK + VK
- **Enhetskostnad** synker ved økt volum fordi FK fordeles på flere enheter
- **Stordriftsfordeler** oppstår når enhetskostnaden synker ved økt produksjon

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Faste kostnader (FK) | Kostnader som er uavhengige av volum |
| Variable kostnader (VK) | Kostnader som varierer med volum |
| Enhetskostnad | Total kostnad delt på antall enheter |
| Stordriftsfordeler | Lavere enhetskostnad ved økt volum |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 6.3: Dekningsbidrag og nullpunkt
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_6_3: TextbookChapter = {
  id: 'okonomi-ledelse-6-3',
  courseId: 'okonomi-ledelse',
  chapterNumber: '6.3',
  title: 'Dekningsbidrag og nullpunkt',
  description: 'Dekningsbidrag per enhet, totalt dekningsbidrag, dekningsgrad og nullpunktsanalyse — sentrale verktøy for å vurdere lønnsomhet.',
  estimatedMinutes: 24,
  competenceGoals: [
    'beregne dekningsbidrag og finne nullpunktet',
  ],
  content: [
    {
      id: 'ol-6-3-intro',
      type: 'text',
      content: `## Dekningsbidrag og nullpunkt

Hvor mange enheter må en bedrift selge for å gå i null? Og hvor mye bidrar hvert enkelt salg til å dekke de faste kostnadene? Dekningsbidragsanalyse gir svar på disse viktige spørsmålene. Det er et av de mest brukte verktøyene i bedriftsøkonomien.

I dette kapittelet skal du lære:
- Hva dekningsbidrag per enhet er og hvordan det beregnes
- Hva totalt dekningsbidrag og dekningsgrad er
- Hvordan finne nullpunktet (break-even)
- Nullpunktsomsetning og nullpunktsmengde`,
    },
    {
      id: 'ol-6-3-def-1',
      type: 'definition',
      title: 'Dekningsbidrag (DB)',
      content: `**Dekningsbidrag per enhet** er differansen mellom salgsprisen og den variable kostnaden per enhet. Det viser hvor mye hvert solgt produkt bidrar med til å dekke de faste kostnadene — og til slutt til overskudd.

$$DB_{\\text{per enhet}} = \\text{Salgspris} - VK_{\\text{per enhet}}$$`,
    },
    {
      id: 'ol-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Dekningsbidrag per enhet',
      problem: 'En bedrift selger lamper til kr 350 per stykk. Variabel kostnad per lampe er kr 140 (materialer, emballasje, frakt). Hva er dekningsbidraget per lampe?',
      solution: `$DB = 350 - 140 = 210$ kr per lampe

Hver solgt lampe bidrar med kr 210 til å dekke de faste kostnadene. Etter at alle faste kostnader er dekket, går kr 210 per lampe rett til overskudd.`,
    },
    {
      id: 'ol-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En butikk selger jakker til kr 1 200 per stykk. Variabel kostnad per jakke er kr 680. Hva er dekningsbidraget per jakke?',
        options: [
          { id: 'a', text: 'kr 680', isCorrect: false },
          { id: 'b', text: 'kr 1 200', isCorrect: false },
          { id: 'c', text: 'kr 520', isCorrect: true },
          { id: 'd', text: 'kr 1 880', isCorrect: false },
        ],
        solution: '$DB = 1\\,200 - 680 = 520$ kr per jakke.',
      },
    },
    {
      id: 'ol-6-3-text-2',
      type: 'text',
      content: `### Totalt dekningsbidrag og resultat

Når vi ganger dekningsbidrag per enhet med antall solgte enheter, får vi **totalt dekningsbidrag** (TDB). Resultatet finner vi ved å trekke fra de faste kostnadene:

$$TDB = DB_{\\text{per enhet}} \\times \\text{antall solgt}$$

$$\\text{Resultat} = TDB - FK$$

Hvis TDB er større enn FK, går bedriften med overskudd. Hvis TDB er mindre enn FK, går bedriften med underskudd.`,
    },
    {
      id: 'ol-6-3-def-2',
      type: 'definition',
      title: 'Dekningsgrad (DG)',
      content: `**Dekningsgrad** viser dekningsbidraget som en prosentandel av salgsprisen. Den forteller hvor mange prosent av hver omsatt krone som bidrar til å dekke faste kostnader og overskudd.

$$DG = \\frac{DB_{\\text{per enhet}}}{\\text{Salgspris}} \\times 100\\,\\%$$`,
    },
    {
      id: 'ol-6-3-example-2',
      type: 'example',
      title: 'Eksempel: TDB, resultat og dekningsgrad',
      problem: 'Lampebedriften fra forrige eksempel har FK = kr 420 000 per år. De selger 3 000 lamper. DB per lampe er kr 210. Beregn totalt dekningsbidrag, resultat og dekningsgrad.',
      solution: `**Totalt dekningsbidrag:**
$TDB = 210 \\times 3\\,000 = 630\\,000$ kr

**Resultat:**
$\\text{Resultat} = 630\\,000 - 420\\,000 = 210\\,000$ kr (overskudd)

**Dekningsgrad:**
$DG = \\frac{210}{350} \\times 100\\,\\% = 60\\,\\%$

60 % av hver omsatt krone bidrar til å dekke faste kostnader og overskudd.`,
    },
    {
      id: 'ol-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'En sykkelbutikk selger sykler til kr 8 000 per stykk. Variabel kostnad per sykkel er kr 5 200. De faste kostnadene er kr 560 000 per år og de selger 250 sykler.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn dekningsbidrag per sykkel.',
            solution: '$DB = 8\\,000 - 5\\,200 = 2\\,800$ kr per sykkel.',
            answer: 2800,
          },
          {
            label: 'b',
            task: 'Beregn totalt dekningsbidrag og resultat.',
            solution: '$TDB = 2\\,800 \\times 250 = 700\\,000$ kr. Resultat: $700\\,000 - 560\\,000 = 140\\,000$ kr (overskudd).',
          },
          {
            label: 'c',
            task: 'Beregn dekningsgraden.',
            solution: '$DG = \\frac{2\\,800}{8\\,000} \\times 100\\,\\% = 35\\,\\%$',
          },
        ],
        solution: 'DB per sykkel er kr 2 800. TDB er kr 700 000, og resultatet er kr 140 000 i overskudd. Dekningsgraden er 35 %.',
      },
    },
    {
      id: 'ol-6-3-text-3',
      type: 'text',
      title: 'Nullpunktsanalyse — når går bedriften i null?',
      content: `**Nullpunktet** (break-even) er det punktet der inntektene er akkurat like store som kostnadene — bedriften verken tjener eller taper penger. Vi kan beregne dette på to måter:

**Nullpunktsmengde** — hvor mange enheter må selges?

$$\\text{Nullpunktsmengde} = \\frac{FK}{DB_{\\text{per enhet}}}$$

**Nullpunktsomsetning** — hvor stor omsetning trengs?

$$\\text{Nullpunktsomsetning} = \\frac{FK}{DG} = \\frac{FK \\times 100}{DG\\,\\%}$$`,
    },
    {
      id: 'ol-6-3-example-3',
      type: 'example',
      title: 'Eksempel: Nullpunktsberegning',
      problem: 'Lampebedriften har FK = kr 420 000, DB per lampe = kr 210 og DG = 60 %. Beregn nullpunktsmengde og nullpunktsomsetning.',
      solution: `**Nullpunktsmengde:**
$\\frac{420\\,000}{210} = 2\\,000$ lamper

**Nullpunktsomsetning:**
$\\frac{420\\,000}{0{,}60} = 700\\,000$ kr

Bedriften må selge minst 2 000 lamper (tilsvarende kr 700 000 i omsetning) for å gå i null. Hvert salg utover dette gir kr 210 rett i overskudd.`,
    },
    {
      id: 'ol-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-6-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'En bedrift har faste kostnader på kr 300 000 og dekningsbidrag per enhet på kr 150. Hva er nullpunktsmengden?',
        options: [
          { id: 'a', text: '1 000 enheter', isCorrect: false },
          { id: 'b', text: '1 500 enheter', isCorrect: false },
          { id: 'c', text: '2 000 enheter', isCorrect: true },
          { id: 'd', text: '3 000 enheter', isCorrect: false },
        ],
        solution: '$\\frac{300\\,000}{150} = 2\\,000$ enheter. Bedriften må selge 2 000 enheter for å dekke alle faste kostnader.',
      },
    },
    {
      id: 'ol-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'En bedrift har en dekningsgrad på 40 % og faste kostnader på kr 800 000. Beregn nullpunktsomsetningen.',
        hints: ['Bruk formelen: Nullpunktsomsetning = FK / DG'],
        solution: '$\\text{Nullpunktsomsetning} = \\frac{800\\,000}{0{,}40} = 2\\,000\\,000$ kr. Bedriften trenger kr 2 000 000 i omsetning for å gå i null.',
      },
    },
    {
      id: 'ol-6-3-note-1',
      type: 'note',
      title: 'Sikkerhetsmargin',
      content: `**Sikkerhetsmarginen** viser hvor mye salget kan falle før bedriften havner i minus. Den beregnes som faktisk omsetning minus nullpunktsomsetning. Eksempel: Omsetning kr 1 000 000, nullpunktsomsetning kr 700 000. Sikkerhetsmargin: $1\\,000\\,000 - 700\\,000 = 300\\,000$ kr, eller 30 % av omsetningen. Jo høyere sikkerhetsmargin, desto mer robust er bedriften.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'ol-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kafé selger en kopp spesialkaffe til kr 65. Variabel kostnad per kopp er kr 20. De faste kostnadene er kr 270 000 per år.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn dekningsbidrag per kopp og dekningsgrad.',
            solution: '$DB = 65 - 20 = 45$ kr. $DG = \\frac{45}{65} \\times 100\\,\\% \\approx 69{,}2\\,\\%$',
          },
          {
            label: 'b',
            task: 'Beregn nullpunktsmengde og nullpunktsomsetning.',
            solution: 'Nullpunktsmengde: $\\frac{270\\,000}{45} = 6\\,000$ kopper. Nullpunktsomsetning: $\\frac{270\\,000}{0{,}692} \\approx 390\\,173$ kr.',
          },
          {
            label: 'c',
            task: 'Kaféen selger 8 500 kopper per år. Beregn resultatet og sikkerhetsmarginen.',
            solution: '$TDB = 45 \\times 8\\,500 = 382\\,500$ kr. Resultat: $382\\,500 - 270\\,000 = 112\\,500$ kr. Faktisk omsetning: $65 \\times 8\\,500 = 552\\,500$ kr. Sikkerhetsmargin: $552\\,500 - 390\\,173 = 162\\,327$ kr, eller ca. 29,4 %.',
          },
        ],
        solution: 'DB er kr 45 per kopp (DG 69,2 %). Nullpunkt ved 6 000 kopper / kr 390 173. Ved 8 500 kopper er resultatet kr 112 500 med en sikkerhetsmargin på ca. 29 %.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-6-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bedrift vurderer å senke prisen fra kr 500 til kr 400 for å øke salget. Variable kostnader er kr 250 per enhet og faste kostnader er kr 500 000. Nåværende salg er 3 000 enheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn nåværende nullpunktsmengde og resultat.',
            solution: 'DB = $500 - 250 = 250$ kr. Nullpunkt: $\\frac{500\\,000}{250} = 2\\,000$ enheter. TDB: $250 \\times 3\\,000 = 750\\,000$. Resultat: $750\\,000 - 500\\,000 = 250\\,000$ kr.',
          },
          {
            label: 'b',
            task: 'Beregn ny nullpunktsmengde med redusert pris.',
            solution: 'Ny DB = $400 - 250 = 150$ kr. Ny nullpunktsmengde: $\\frac{500\\,000}{150} \\approx 3\\,334$ enheter.',
          },
          {
            label: 'c',
            task: 'Hvor mange enheter må selges med ny pris for å oppnå samme resultat som i dag (kr 250 000)?',
            solution: 'TDB trengs: $500\\,000 + 250\\,000 = 750\\,000$ kr. Antall: $\\frac{750\\,000}{150} = 5\\,000$ enheter. Salget må øke fra 3 000 til 5 000 enheter (67 % økning) for å oppnå samme resultat.',
          },
        ],
        solution: 'Prisreduksjonen krever at bedriften selger 5 000 enheter for å oppnå samme resultat — en økning på 67 %. Nullpunktet øker fra 2 000 til 3 334 enheter. Bedriften bør vurdere om en slik salgsøkning er realistisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'ol-6-3-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvorfor øker nullpunktsmengden når salgsprisen reduseres (med uendrede kostnader)?',
        options: [
          { id: 'a', text: 'Fordi de faste kostnadene øker', isCorrect: false },
          { id: 'b', text: 'Fordi dekningsbidraget per enhet synker, og det trengs flere salg for å dekke FK', isCorrect: true },
          { id: 'c', text: 'Fordi de variable kostnadene øker', isCorrect: false },
          { id: 'd', text: 'Fordi dekningsgraden øker', isCorrect: false },
        ],
        solution: 'Når salgsprisen synker mens VK er uendret, synker DB per enhet. Nullpunktsmengde = FK / DB, så lavere DB gir høyere nullpunktsmengde. Bedriften trenger flere salg for å dekke de faste kostnadene.',
      },
    },
    {
      id: 'ol-6-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Dekningsbidrag per enhet** = salgspris − variabel kostnad per enhet
- **Totalt dekningsbidrag** = DB per enhet × antall solgt
- **Resultat** = TDB − faste kostnader
- **Dekningsgrad** = (DB / salgspris) × 100 %
- **Nullpunktsmengde** = FK / DB per enhet
- **Nullpunktsomsetning** = FK / DG
- **Sikkerhetsmargin** = faktisk omsetning − nullpunktsomsetning

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Dekningsbidrag (DB) | Salgspris minus variabel kostnad |
| Dekningsgrad (DG) | DB i prosent av salgsprisen |
| Nullpunkt (break-even) | Punktet der inntekter = kostnader |
| Sikkerhetsmargin | Hvor mye salget kan falle før underskudd |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 6.4: Resultatregnskap
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_6_4: TextbookChapter = {
  id: 'okonomi-ledelse-6-4',
  courseId: 'okonomi-ledelse',
  chapterNumber: '6.4',
  title: 'Resultatregnskap',
  description: 'Oppstilling av resultatregnskap, driftsresultat, finansposter, årsresultat og enkel analyse av lønnsomhet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'lese og tolke resultatregnskap og balanse',
  ],
  content: [
    {
      id: 'ol-6-4-intro',
      type: 'text',
      content: `## Resultatregnskapet — bedriftens «karakterkort»

Resultatregnskapet er en av de viktigste finansielle rapportene en bedrift utarbeider. Det viser om virksomheten har tjent penger eller gått med underskudd i løpet av en periode (vanligvis ett år). Å kunne lese og tolke et resultatregnskap er en grunnleggende ferdighet for alle som jobber med økonomi.

I dette kapittelet skal du lære:
- Hvordan et resultatregnskap er bygd opp
- Hva driftsresultat, finansresultat og årsresultat er
- Hvordan tolke og analysere tallene
- Viktige nøkkeltall fra resultatregnskapet`,
    },
    {
      id: 'ol-6-4-def-1',
      type: 'definition',
      title: 'Resultatregnskap',
      content: `Et **resultatregnskap** er en oppstilling som viser en bedrifts inntekter og kostnader i en bestemt periode. Det er bygd opp i tre hoveddeler: (1) driftsresultat, (2) finansresultat og (3) årsresultat. Resultatregnskapet viser strømmen av inntekter og kostnader — det er som en film av et helt år, ikke et øyeblikksbilde.`,
    },
    {
      id: 'ol-6-4-text-2',
      type: 'text',
      content: `### Oppstillingen av et resultatregnskap

Et forenklet resultatregnskap ser slik ut:

| Post | Beløp |
|------|-------|
| **Salgsinntekter** | + |
| Andre driftsinntekter | + |
| **= Driftsinntekter** | |
| Varekostnad | − |
| Lønnskostnad | − |
| Avskrivninger | − |
| Andre driftskostnader | − |
| **= Driftsresultat** | |
| Finansinntekter | + |
| Finanskostnader | − |
| **= Resultat før skatt** | |
| Skattekostnad | − |
| **= Årsresultat** | |

Legg merke til at regnskapet er hierarkisk oppbygd: først driftsresultat, så finansposter, og til slutt årsresultat etter skatt.`,
    },
    {
      id: 'ol-6-4-def-2',
      type: 'definition',
      title: 'Finansposter',
      content: `**Finansinntekter** er inntekter fra finansielle aktiviteter, som renteinntekter fra bankinnskudd, utbytte fra aksjer eller gevinst ved salg av verdipapirer. **Finanskostnader** er kostnader knyttet til finansiering, først og fremst rentekostnader på lån. **Finansresultatet** er differansen mellom finansinntekter og finanskostnader.`,
    },
    {
      id: 'ol-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Lese et resultatregnskap',
      problem: 'Her er resultatregnskapet for Solsiden Kafé AS for 2025:\n\n| Post | Beløp (kr) |\n|------|------|\n| Salgsinntekter | 2 400 000 |\n| Andre driftsinntekter | 0 |\n| **Driftsinntekter** | **2 400 000** |\n| Varekostnad | 720 000 |\n| Lønnskostnad | 1 100 000 |\n| Avskrivninger | 80 000 |\n| Andre driftskostnader | 300 000 |\n| **Driftsresultat** | **200 000** |\n| Finansinntekter | 5 000 |\n| Finanskostnader | 45 000 |\n| **Resultat før skatt** | **160 000** |\n| Skattekostnad (22 %) | 35 200 |\n| **Årsresultat** | **124 800** |\n\nForklar hva tallene forteller oss.',
      solution: `**Driftsinntekter:** Kaféen omsatte for kr 2 400 000 i løpet av året.

**Driftskostnader:** $720\\,000 + 1\\,100\\,000 + 80\\,000 + 300\\,000 = 2\\,200\\,000$ kr

**Driftsresultat:** $2\\,400\\,000 - 2\\,200\\,000 = 200\\,000$ kr — selve driften gir et overskudd.

**Finansresultat:** $5\\,000 - 45\\,000 = -40\\,000$ kr — kaféen betaler mer i renter på lån enn den tjener i renter.

**Resultat før skatt:** $200\\,000 + (-40\\,000) = 160\\,000$ kr

**Årsresultat:** $160\\,000 - 35\\,200 = 124\\,800$ kr — dette er det endelige overskuddet etter skatt.`,
    },
    {
      id: 'ol-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva viser driftsresultatet?',
        options: [
          { id: 'a', text: 'Resultatet etter skatt', isCorrect: false },
          { id: 'b', text: 'Hvor mye penger bedriften har på konto', isCorrect: false },
          { id: 'c', text: 'Resultatet fra den ordinære driften, før finansposter og skatt', isCorrect: true },
          { id: 'd', text: 'Summen av alle inntekter', isCorrect: false },
        ],
        solution: 'Driftsresultatet viser om den daglige driften er lønnsom. Det beregnes som driftsinntekter minus driftskostnader, og inkluderer ikke finansposter eller skatt.',
      },
    },
    {
      id: 'ol-6-4-text-3',
      type: 'text',
      title: 'Analyse av resultatregnskapet',
      content: `### Viktige nøkkeltall

Resultatregnskapet gir grunnlag for å beregne flere nøkkeltall som sier noe om bedriftens lønnsomhet:

**Resultatgrad** (driftsmargin) — viser hvor stor del av omsetningen som blir igjen som driftsresultat:
$$\\text{Resultatgrad} = \\frac{\\text{Driftsresultat}}{\\text{Driftsinntekter}} \\times 100\\,\\%$$

For Solsiden Kafé: $\\frac{200\\,000}{2\\,400\\,000} \\times 100\\,\\% = 8{,}3\\,\\%$

En resultatgrad på 8,3 % betyr at kaféen sitter igjen med 8,3 øre for hver krone i omsetning etter alle driftskostnader er betalt. Hva som er «godt nok» varierer mellom bransjer, men de fleste bedrifter sikter mot minst 5–10 %.`,
    },
    {
      id: 'ol-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sett opp et forenklet resultatregnskap for Fjordglass AS og beregn driftsresultat, resultat før skatt og årsresultat (22 % skatt):\n- Salgsinntekter: kr 5 000 000\n- Varekostnad: kr 1 800 000\n- Lønnskostnad: kr 2 000 000\n- Avskrivninger: kr 200 000\n- Andre driftskostnader: kr 500 000\n- Finansinntekter: kr 10 000\n- Finanskostnader: kr 80 000',
        hints: ['Regn ut driftsresultat først, legg deretter til finansposter, og trekk til slutt fra skatt.'],
        solution: 'Driftskostnader: $1\\,800\\,000 + 2\\,000\\,000 + 200\\,000 + 500\\,000 = 4\\,500\\,000$ kr. Driftsresultat: $5\\,000\\,000 - 4\\,500\\,000 = 500\\,000$ kr. Finansresultat: $10\\,000 - 80\\,000 = -70\\,000$ kr. Resultat før skatt: $500\\,000 - 70\\,000 = 430\\,000$ kr. Skatt: $430\\,000 \\times 0{,}22 = 94\\,600$ kr. Årsresultat: $430\\,000 - 94\\,600 = 335\\,400$ kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-6-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilken av disse postene hører til under finanskostnader?',
        options: [
          { id: 'a', text: 'Lønn til ansatte', isCorrect: false },
          { id: 'b', text: 'Rentekostnader på banklån', isCorrect: true },
          { id: 'c', text: 'Varekostnad', isCorrect: false },
          { id: 'd', text: 'Avskrivninger på maskiner', isCorrect: false },
        ],
        solution: 'Rentekostnader på banklån er en finanskostnad. Lønn, varekostnad og avskrivninger er driftskostnader.',
      },
    },
    {
      id: 'ol-6-4-tip-1',
      type: 'tip',
      title: 'Sammenligning over tid',
      content: `Resultatregnskapet blir mest nyttig når du sammenligner med tidligere år. Se etter trender: Vokser omsetningen? Øker kostnadene raskere enn inntektene? Er resultatgraden stabil, stigende eller fallende? Det er også nyttig å sammenligne med andre bedrifter i samme bransje.`,
    },
    {
      id: 'ol-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beregn resultatgraden for Fjordglass AS fra oppgave 2 og vurder om den er god.',
        hints: ['Resultatgrad = driftsresultat / driftsinntekter × 100 %'],
        solution: '$\\text{Resultatgrad} = \\frac{500\\,000}{5\\,000\\,000} \\times 100\\,\\% = 10\\,\\%$. En resultatgrad på 10 % er generelt sett god. Det betyr at bedriften sitter igjen med 10 øre for hver krone i omsetning etter driftskostnader.',
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'ol-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-6-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To bedrifter i samme bransje har følgende resultatregnskap:\n\n**Bedrift A:** Driftsinntekter kr 10 000 000, driftskostnader kr 9 200 000, finanskostnader kr 300 000, finansinntekter kr 20 000.\n\n**Bedrift B:** Driftsinntekter kr 4 000 000, driftskostnader kr 3 400 000, finanskostnader kr 50 000, finansinntekter kr 10 000.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn driftsresultat og årsresultat (22 % skatt) for begge bedriftene.',
            solution: 'Bedrift A: Driftsresultat: $10\\,000\\,000 - 9\\,200\\,000 = 800\\,000$. Resultat før skatt: $800\\,000 + 20\\,000 - 300\\,000 = 520\\,000$. Årsresultat: $520\\,000 \\times 0{,}78 = 405\\,600$ kr. Bedrift B: Driftsresultat: $4\\,000\\,000 - 3\\,400\\,000 = 600\\,000$. Resultat før skatt: $600\\,000 + 10\\,000 - 50\\,000 = 560\\,000$. Årsresultat: $560\\,000 \\times 0{,}78 = 436\\,800$ kr.',
          },
          {
            label: 'b',
            task: 'Beregn resultatgraden for begge og vurder hvilken bedrift som drives mest lønnsomt.',
            solution: 'Bedrift A: $\\frac{800\\,000}{10\\,000\\,000} \\times 100\\,\\% = 8\\,\\%$. Bedrift B: $\\frac{600\\,000}{4\\,000\\,000} \\times 100\\,\\% = 15\\,\\%$. Bedrift B har høyere resultatgrad og drives mer lønnsomt i forhold til omsetningen, selv om bedrift A har høyere driftsresultat i kroner.',
          },
        ],
        solution: 'Bedrift A har høyere omsetning og driftsresultat i absolutte tall, men bedrift B har bedre resultatgrad (15 % vs. 8 %) og høyere årsresultat. Bedrift B bruker også mindre gjeld (lavere finanskostnader), noe som gir lavere risiko.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-6-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor en bedrift kan ha positivt driftsresultat, men negativt årsresultat. Gi et konkret talleksempel.',
        hints: ['Tenk på hva som skjer mellom driftsresultat og årsresultat — finansposter og skatt.'],
        solution: 'En bedrift kan ha positivt driftsresultat, men negativt årsresultat dersom finanskostnadene er større enn summen av driftsresultat og finansinntekter. Eksempel: Driftsresultat kr 100 000, finansinntekter kr 5 000, finanskostnader kr 150 000. Resultat før skatt: $100\\,000 + 5\\,000 - 150\\,000 = -45\\,000$ kr (underskudd). Dette kan skje når bedriften har mye gjeld med høye renter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Resultatregnskapet** viser inntekter og kostnader for en periode
- **Driftsresultat** = driftsinntekter − driftskostnader
- **Finansresultat** = finansinntekter − finanskostnader
- **Årsresultat** = resultat før skatt − skattekostnad
- **Resultatgrad** måler hvor stor del av omsetningen som blir driftsresultat
- Sammenligning over tid og mellom bedrifter gir verdifull innsikt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Resultatregnskap | Oppstilling av inntekter og kostnader for en periode |
| Driftsresultat | Resultat fra den ordinære driften |
| Finansposter | Finansinntekter og finanskostnader (renter m.m.) |
| Årsresultat | Endelig resultat etter skatt |
| Resultatgrad | Driftsresultat / driftsinntekter × 100 % |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 6.5: Balanse og likviditet
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_6_5: TextbookChapter = {
  id: 'okonomi-ledelse-6-5',
  courseId: 'okonomi-ledelse',
  chapterNumber: '6.5',
  title: 'Balanse og likviditet',
  description: 'Eiendeler, gjeld og egenkapital i balansen, samt likviditetsgrad og arbeidskapital — verktøy for å vurdere bedriftens økonomiske helse.',
  estimatedMinutes: 24,
  competenceGoals: [
    'lese og tolke resultatregnskap og balanse',
  ],
  content: [
    {
      id: 'ol-6-5-intro',
      type: 'text',
      content: `## Balanse og likviditet

Mens resultatregnskapet viser inntekter og kostnader over tid (som en film), er balansen et øyeblikksbilde av bedriftens økonomiske stilling på en bestemt dato. Den viser hva bedriften eier, hva den skylder, og hva eierne har skutt inn. I tillegg er det avgjørende at bedriften har nok penger til å betale regningene sine — det handler om likviditet.

I dette kapittelet skal du lære:
- Hva en balanse er og hvordan den er oppbygd
- Forskjellen mellom eiendeler, gjeld og egenkapital
- Hva likviditet betyr og hvorfor det er viktig
- Hvordan beregne likviditetsgrad og arbeidskapital`,
    },
    {
      id: 'ol-6-5-def-1',
      type: 'definition',
      title: 'Balanse',
      content: `**Balansen** er en oppstilling som viser bedriftens økonomiske stilling på et bestemt tidspunkt. Den har to sider som alltid er like store (derav navnet «balanse»):
- **Eiendeler** (venstre side / aktiva): Hva bedriften eier og har til disposisjon
- **Gjeld og egenkapital** (høyre side / passiva): Hvordan eiendelene er finansiert

**Balanselikningen:** $\\text{Eiendeler} = \\text{Gjeld} + \\text{Egenkapital}$`,
    },
    {
      id: 'ol-6-5-text-2',
      type: 'text',
      content: `### Oppbygning av balansen

**Eiendeler (aktiva)** deles i to:

| Type | Eksempler | Kjennetegn |
|------|-----------|------------|
| **Anleggsmidler** | Bygninger, maskiner, kjøretøy, goodwill | Brukes i driften over tid (> 1 år) |
| **Omløpsmidler** | Varelager, kundefordringer, bankinnskudd, kontanter | Kortsiktige eiendeler (< 1 år) |

**Gjeld og egenkapital (passiva)** deles i tre:

| Type | Eksempler | Kjennetegn |
|------|-----------|------------|
| **Egenkapital** | Aksjekapital, opptjent egenkapital | Eiernes investering + opptjent overskudd |
| **Langsiktig gjeld** | Banklån, pantelån | Gjeld med forfall > 1 år |
| **Kortsiktig gjeld** | Leverandørgjeld, skyldig skatt, kassekreditt | Gjeld med forfall < 1 år |`,
    },
    {
      id: 'ol-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Lese en balanse',
      problem: 'Her er balansen for Solsiden Kafé AS per 31.12.2025:\n\n**Eiendeler:**\n| Post | Beløp (kr) |\n|------|------|\n| Inventar og utstyr | 400 000 |\n| Varelager | 80 000 |\n| Kundefordringer | 30 000 |\n| Bankinnskudd | 190 000 |\n| **Sum eiendeler** | **700 000** |\n\n**Gjeld og egenkapital:**\n| Post | Beløp (kr) |\n|------|------|\n| Aksjekapital | 200 000 |\n| Opptjent egenkapital | 150 000 |\n| Langsiktig banklån | 250 000 |\n| Leverandørgjeld | 60 000 |\n| Skyldig skatt | 40 000 |\n| **Sum gjeld og EK** | **700 000** |\n\nForklar hva balansen forteller oss.',
      solution: `**Eiendeler:** Kaféen eier inventar verdt kr 400 000 (anleggsmidler) og har kr 300 000 i omløpsmidler (varelager, kundefordringer og bankinnskudd).

**Egenkapital:** Eierne har investert kr 200 000 (aksjekapital) og bedriften har opptjent kr 150 000 over tid. Total egenkapital: kr 350 000.

**Gjeld:** Kr 250 000 i langsiktig gjeld og kr 100 000 i kortsiktig gjeld ($60\\,000 + 40\\,000$).

**Balansesjekk:** Eiendeler $= 700\\,000$. Gjeld + EK $= 350\\,000 + 250\\,000 + 100\\,000 = 700\\,000$. Balansen stemmer!`,
    },
    {
      id: 'ol-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva viser balanselikningen?',
        options: [
          { id: 'a', text: 'Inntekter = Kostnader + Resultat', isCorrect: false },
          { id: 'b', text: 'Eiendeler = Gjeld + Egenkapital', isCorrect: true },
          { id: 'c', text: 'Omsetning = Varekostnad + Fortjeneste', isCorrect: false },
          { id: 'd', text: 'Driftsresultat = Driftsinntekter − Driftskostnader', isCorrect: false },
        ],
        solution: 'Balanselikningen sier at Eiendeler = Gjeld + Egenkapital. Den viser at alt bedriften eier er finansiert enten med gjeld (lånte penger) eller egenkapital (eiernes penger).',
      },
    },
    {
      id: 'ol-6-5-def-2',
      type: 'definition',
      title: 'Likviditet',
      content: `**Likviditet** er bedriftens evne til å betale regningene sine når de forfaller. En bedrift kan være lønnsom (positivt resultat) men likevel ha likviditetsproblemer dersom pengene er bundet i varelager eller utestående fordringer. Likviditetsproblemer er den vanligste årsaken til at bedrifter går konkurs.`,
    },
    {
      id: 'ol-6-5-text-3',
      type: 'text',
      title: 'Likviditetsgrad — kan bedriften betale det den skylder?',
      content: `Det viktigste nøkkeltallet for likviditet er **likviditetsgrad 1**:

$$\\text{Likviditetsgrad 1} = \\frac{\\text{Omløpsmidler}}{\\text{Kortsiktig gjeld}}$$

| Verdi | Tolkning |
|-------|----------|
| Over 2,0 | God likviditet |
| 1,5–2,0 | Tilfredsstillende |
| 1,0–1,5 | Svak — krever oppmerksomhet |
| Under 1,0 | Kritisk — kan ikke betale kortsiktig gjeld med omløpsmidler |

**Likviditetsgrad 2** er strengere og ser kun på de mest likvide midlene (uten varelager):

$$\\text{Likviditetsgrad 2} = \\frac{\\text{Omløpsmidler} - \\text{Varelager}}{\\text{Kortsiktig gjeld}}$$

Likviditetsgrad 2 bør være over 1,0.`,
    },
    {
      id: 'ol-6-5-example-2',
      type: 'example',
      title: 'Eksempel: Beregning av likviditetsgrad',
      problem: 'Beregn likviditetsgrad 1 og 2 for Solsiden Kafé AS med tallene fra balansen.\n\nOmløpsmidler: kr 300 000 (varelager kr 80 000 + kundefordringer kr 30 000 + bank kr 190 000)\nKortsiktig gjeld: kr 100 000 (leverandørgjeld kr 60 000 + skyldig skatt kr 40 000)',
      solution: `**Likviditetsgrad 1:**
$\\frac{300\\,000}{100\\,000} = 3{,}0$

**Likviditetsgrad 2:**
$\\frac{300\\,000 - 80\\,000}{100\\,000} = \\frac{220\\,000}{100\\,000} = 2{,}2$

Begge nøkkeltallene er gode. Kaféen har mer enn nok omløpsmidler til å dekke sin kortsiktige gjeld, selv uten å selge varelageret.`,
    },
    {
      id: 'ol-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'En bedrift har omløpsmidler på kr 600 000 (hvorav varelager kr 250 000) og kortsiktig gjeld på kr 400 000.',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn likviditetsgrad 1.',
            solution: '$\\frac{600\\,000}{400\\,000} = 1{,}5$',
          },
          {
            label: 'b',
            task: 'Beregn likviditetsgrad 2.',
            solution: '$\\frac{600\\,000 - 250\\,000}{400\\,000} = \\frac{350\\,000}{400\\,000} = 0{,}875$',
          },
          {
            label: 'c',
            task: 'Vurder bedriftens likviditet.',
            solution: 'Likviditetsgrad 1 er 1,5 — tilfredsstillende, men ikke sterkt. Likviditetsgrad 2 er under 1,0, noe som betyr at bedriften ikke kan betale all kortsiktig gjeld uten å selge deler av varelageret. Bedriften bør jobbe med å forbedre likviditeten.',
          },
        ],
        solution: 'Likviditetsgrad 1 er 1,5 (tilfredsstillende). Likviditetsgrad 2 er 0,875 (for lav). Bedriften bør forbedre likviditeten, for eksempel ved å redusere varelageret eller forhandle lengre betalingsfrister.',
      },
    },
    {
      id: 'ol-6-5-def-3',
      type: 'definition',
      title: 'Arbeidskapital',
      content: `**Arbeidskapital** er differansen mellom omløpsmidler og kortsiktig gjeld. Den viser hvor mye av omløpsmidlene som er finansiert med langsiktig kapital (egenkapital og langsiktig gjeld).

$$\\text{Arbeidskapital} = \\text{Omløpsmidler} - \\text{Kortsiktig gjeld}$$

Positiv arbeidskapital betyr at bedriften har en buffer. Negativ arbeidskapital er et advarselstegn.`,
    },
    {
      id: 'ol-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-6-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'En bedrift har omløpsmidler på kr 500 000 og kortsiktig gjeld på kr 350 000. Hva er arbeidskapitalen?',
        options: [
          { id: 'a', text: 'kr 850 000', isCorrect: false },
          { id: 'b', text: 'kr 150 000', isCorrect: true },
          { id: 'c', text: 'kr 500 000', isCorrect: false },
          { id: 'd', text: 'kr −150 000', isCorrect: false },
        ],
        solution: '$500\\,000 - 350\\,000 = 150\\,000$ kr. Positiv arbeidskapital betyr at bedriften har en buffer ut over det som trengs for å betale kortsiktig gjeld.',
      },
    },
    {
      id: 'ol-6-5-warning-1',
      type: 'warning',
      title: 'Lønnsom, men likevel konkurs?',
      content: `En vanlig felle for voksende bedrifter: Salget øker, resultatregnskapet viser overskudd, men likviditeten er dårlig fordi penger er bundet opp i store varelager eller kundene betaler sent. Bedriften kan da ikke betale sine egne regninger og leverandører, selv om den «på papiret» tjener penger. Dette kalles en likviditetskrise og kan føre til konkurs.`,
    },
    {
      id: 'ol-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-6-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom lønnsomhet og likviditet med et praktisk eksempel.',
        hints: ['Tenk på en bedrift som tjener penger, men som likevel sliter med å betale regningene.'],
        solution: 'Lønnsomhet handler om at inntektene er større enn kostnadene (positivt resultat). Likviditet handler om å ha nok penger tilgjengelig til å betale regninger når de forfaller. Eksempel: En byggmester har fakturert kr 2 000 000 i arbeid (lønnsomt), men kundene har ikke betalt ennå. Samtidig forfaller regninger fra materialeleverandører på kr 500 000 denne uken. Byggmesteren er lønnsom, men mangler likviditet.',
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'ol-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-6-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fjordglass AS har følgende balanse per 31.12.2025:\n\n**Eiendeler:** Maskiner kr 1 200 000, varelager kr 350 000, kundefordringer kr 280 000, bank kr 170 000.\n**Gjeld og EK:** Aksjekapital kr 500 000, opptjent EK kr 400 000, langsiktig lån kr 600 000, leverandørgjeld kr 320 000, skyldig skatt kr 180 000.',
        subTasks: [
          {
            label: 'a',
            task: 'Kontroller at balansen stemmer (eiendeler = gjeld + egenkapital).',
            solution: 'Eiendeler: $1\\,200\\,000 + 350\\,000 + 280\\,000 + 170\\,000 = 2\\,000\\,000$. Passiva: $500\\,000 + 400\\,000 + 600\\,000 + 320\\,000 + 180\\,000 = 2\\,000\\,000$. Balansen stemmer.',
          },
          {
            label: 'b',
            task: 'Beregn likviditetsgrad 1, likviditetsgrad 2 og arbeidskapital.',
            solution: 'Omløpsmidler: $350\\,000 + 280\\,000 + 170\\,000 = 800\\,000$. Kortsiktig gjeld: $320\\,000 + 180\\,000 = 500\\,000$. LG1: $\\frac{800\\,000}{500\\,000} = 1{,}6$. LG2: $\\frac{800\\,000 - 350\\,000}{500\\,000} = \\frac{450\\,000}{500\\,000} = 0{,}9$. Arbeidskapital: $800\\,000 - 500\\,000 = 300\\,000$ kr.',
          },
          {
            label: 'c',
            task: 'Vurder bedriftens likviditetssituasjon og foreslå tiltak for forbedring.',
            solution: 'LG1 er 1,6 (tilfredsstillende), men LG2 er 0,9 (under anbefalt nivå på 1,0). Mye kapital er bundet i varelager. Tiltak: (1) Redusere varelageret gjennom bedre innkjøpsplanlegging, (2) Fakturere raskere og følge opp utestående fordringer, (3) Forhandle lengre betalingsfrister med leverandører, (4) Vurdere å refinansiere noe kortsiktig gjeld til langsiktig lån.',
          },
        ],
        solution: 'Balansen stemmer (begge sider = kr 2 000 000). LG1 = 1,6, LG2 = 0,9, arbeidskapital = kr 300 000. Likviditeten er tilfredsstillende men kan forbedres, spesielt ved å redusere varelageret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-6-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar sammenhengen mellom resultatregnskapet og balansen. Hva skjer i balansen dersom bedriften har et årsresultat på kr 200 000?',
        hints: ['Tenk på hvor overskuddet havner og hvordan det påvirker balanselikningen.'],
        solution: 'Resultatregnskapet og balansen henger sammen gjennom egenkapitalen. Når bedriften tjener kr 200 000 (årsresultat), øker opptjent egenkapital i balansen med kr 200 000 (med mindre det deles ut som utbytte). Samtidig øker eiendelene med like mye — enten som økt bankinnskudd, økt varelager, eller redusert gjeld. Balanselikningen holder alltid: Eiendeler = Gjeld + Egenkapital.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ol-6-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'ol-6-5-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'En bedrift har likviditetsgrad 1 på 0,8. Hva betyr dette i praksis?',
        options: [
          { id: 'a', text: 'Bedriften er svært lønnsom', isCorrect: false },
          { id: 'b', text: 'Bedriften har mer omløpsmidler enn kortsiktig gjeld', isCorrect: false },
          { id: 'c', text: 'Bedriften kan ikke dekke all kortsiktig gjeld med omløpsmidlene sine', isCorrect: true },
          { id: 'd', text: 'Bedriften har negativ egenkapital', isCorrect: false },
        ],
        solution: 'Likviditetsgrad 1 under 1,0 betyr at kortsiktig gjeld er større enn omløpsmidlene. Bedriften har ikke nok likvide midler til å betale all kortsiktig gjeld, noe som er en alvorlig situasjon. Det betyr ikke nødvendigvis at bedriften er ulønnsom eller har negativ egenkapital — det handler spesifikt om betalingsevnen på kort sikt.',
      },
    },
    {
      id: 'ol-6-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Balansen** viser eiendeler på den ene siden og gjeld + egenkapital på den andre
- **Balanselikningen:** Eiendeler = Gjeld + Egenkapital
- **Anleggsmidler** brukes over lang tid, **omløpsmidler** omsettes innen ett år
- **Likviditet** er evnen til å betale regninger når de forfaller
- **Likviditetsgrad 1** = omløpsmidler / kortsiktig gjeld (bør være over 2)
- **Likviditetsgrad 2** = (omløpsmidler − varelager) / kortsiktig gjeld (bør være over 1)
- **Arbeidskapital** = omløpsmidler − kortsiktig gjeld
- En bedrift kan være lønnsom og likevel ha likviditetsproblemer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Balanse | Oversikt over eiendeler, gjeld og egenkapital |
| Egenkapital | Eiernes investering + opptjent overskudd |
| Likviditet | Evnen til å betale regninger ved forfall |
| Likviditetsgrad | Omløpsmidler delt på kortsiktig gjeld |
| Arbeidskapital | Omløpsmidler minus kortsiktig gjeld |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport: Alle kapitler i Del 6
// ============================================================================

export const OKONOMI_LEDELSE_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMI_LEDELSE_6_1,
  CHAPTER_OKONOMI_LEDELSE_6_2,
  CHAPTER_OKONOMI_LEDELSE_6_3,
  CHAPTER_OKONOMI_LEDELSE_6_4,
  CHAPTER_OKONOMI_LEDELSE_6_5,
];
