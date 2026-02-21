/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Seksjon 2: Funksjoner i praksis
 * Kapittel 2.1–2.3
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Lineære modeller
// ============================================================================

export const CHAPTER_2P_2_1: TextbookChapter = {
  id: '2p-2-1',
  courseId: '2p',
  chapterNumber: '2.1',
  title: 'Lineære modeller',
  description: 'Lineære sammenhenger og modeller i praktiske situasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
    'utforske strategier for å løse ligninger, ligningssystemer og ulikheter og argumentere for tankemåtene sine',
  ],
  content: [
    {
      id: '2p-2-1-intro',
      type: 'text',
      content: `## Lineære modeller

Mange sammenhenger i hverdagen kan beskrives med lineære funksjoner. Et mobilabonnement med fast pris pluss pris per GB, en taxitur med startpris pluss pris per km, eller en spareavtale med fast beløp per måned – alle er lineære modeller.

I dette kapittelet skal du lære:
- Hva en lineær funksjon er og hva stigningstall og konstantledd betyr
- Hvordan sette opp lineære modeller fra praktiske situasjoner
- Hvordan løse likninger og likningssett grafisk og algebraisk
- Hvordan tolke skjæringspunkter`,
    },

    // BLOKK 1: Lineær funksjon
    {
      id: '2p-2-1-def-lineær',
      type: 'definition',
      title: 'Lineær funksjon',
      content: `En **lineær funksjon** har formen:

$$f(x) = ax + b$$

- $a$ er **stigningstallet** – forteller hvor mye $y$ øker når $x$ øker med 1
- $b$ er **konstantleddet** – verdien av $f(x)$ når $x = 0$ (skjæring med $y$-aksen)

Stigningstallet beregnes fra to punkter $(x_1, y_1)$ og $(x_2, y_2)$:

$$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}$$`,
    },
    {
      id: '2p-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Mobilabonnement',
      problem: 'Et mobilabonnement koster 149 kr i måneden pluss 49 kr per GB data. Sett opp en lineær modell for månedskostnaden og finn kostnaden ved 5 GB.',
      solution: `**Løsning:**

La $x$ = antall GB og $f(x)$ = månedskostnad i kroner.

$f(x) = 49x + 149$

- Stigningstall $a = 49$ betyr at kostnaden øker med 49 kr per GB
- Konstantledd $b = 149$ er den faste månedsprisen

Kostnad ved 5 GB: $f(5) = 49 \\cdot 5 + 149 = 245 + 149 = 394$ kr

**Svar:** Månedskostnaden er 394 kr ved 5 GB.`,
    },
    {
      id: '2p-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En taxi tar 60 kr i startpris og 15 kr per km. Hva koster en tur på 12 km?',
        options: [
          { id: 'a', text: '240 kr', isCorrect: true },
          { id: 'b', text: '180 kr', isCorrect: false },
          { id: 'c', text: '195 kr', isCorrect: false },
          { id: 'd', text: '300 kr', isCorrect: false },
        ],
        solution: 'f(x) = 15x + 60. f(12) = 15 · 12 + 60 = 180 + 60 = 240 kr.',
      },
    },
    {
      id: '2p-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Et leiebilselskap tar 500 kr per dag pluss 3,50 kr per km. a) Sett opp en lineær modell for kostnaden ved å leie bil i én dag. b) Hva koster det å kjøre 200 km? c) Du har budsjettert 1 200 kr. Hvor langt kan du kjøre?',
        hints: ['c) Sett opp ulikheten 500 + 3,50x ≤ 1 200 og løs for x.'],
        solution: 'a) f(x) = 3,50x + 500. b) f(200) = 3,50 · 200 + 500 = 700 + 500 = 1 200 kr. c) 3,50x + 500 ≤ 1 200 → 3,50x ≤ 700 → x ≤ 200 km.',
      },
    },

    // BLOKK 2: Finne funksjonsuttrykk
    {
      id: '2p-2-1-text-finne',
      type: 'text',
      content: `### Finne funksjonsuttrykk fra to punkter

Hvis du kjenner to punkter på grafen, kan du finne funksjonsuttrykket:

1. Beregn stigningstallet: $a = \\frac{y_2 - y_1}{x_2 - x_1}$
2. Sett inn ett av punktene i $y = ax + b$ og løs for $b$`,
    },
    {
      id: '2p-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Finne funksjonsuttrykk',
      problem: 'En svømmehall har følgende priser: 5 besøk koster 350 kr og 12 besøk koster 630 kr. Sett opp en lineær modell.',
      solution: `**Løsning:**

To punkter: $(5, 350)$ og $(12, 630)$

Stigningstall: $a = \\frac{630 - 350}{12 - 5} = \\frac{280}{7} = 40$ kr per besøk

Finn $b$: $350 = 40 \\cdot 5 + b \\Rightarrow b = 350 - 200 = 150$

Modell: $f(x) = 40x + 150$

**Tolkning:** Det koster 150 kr i «grunnpris» (f.eks. årskort) og 40 kr per besøk.`,
    },
    {
      id: '2p-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'En strømleverandør har følgende månedspriser: Ved 100 kWh forbruk er prisen 850 kr, ved 300 kWh er prisen 1 450 kr. a) Finn en lineær modell for prisen. b) Hva er den faste månedsprisen? c) Hva koster strømmen per kWh?',
        solution: 'a) a = (1 450 − 850) / (300 − 100) = 600 / 200 = 3 kr/kWh. b = 850 − 3 · 100 = 550 kr. f(x) = 3x + 550. b) 550 kr. c) 3 kr/kWh.',
      },
    },

    // BLOKK 3: Likninger og skjæringspunkt
    {
      id: '2p-2-1-def-skjaering',
      type: 'definition',
      title: 'Skjæringspunkt mellom to lineære funksjoner',
      content: `To lineære funksjoner $f(x) = a_1 x + b_1$ og $g(x) = a_2 x + b_2$ skjærer hverandre der $f(x) = g(x)$.

$$a_1 x + b_1 = a_2 x + b_2$$

Skjæringspunktet forteller oss ofte der to alternativer koster det samme, eller der tilbud og etterspørsel møtes.`,
    },
    {
      id: '2p-2-1-example-3',
      type: 'example',
      title: 'Eksempel: Sammenligne to abonnementer',
      problem: 'Abonnement A koster 199 kr/mnd pluss 9 kr per GB. Abonnement B koster 349 kr/mnd med fri data. Når lønner det seg å velge B?',
      solution: `**Løsning:**

$A(x) = 9x + 199$ og $B(x) = 349$

Skjæringspunkt: $9x + 199 = 349$

$9x = 150$

$x = 16{,}7$ GB

For $x > 16{,}7$ GB er B billigst. For $x < 16{,}7$ GB er A billigst.

**Svar:** Bruker du mer enn ca. 17 GB per måned, lønner B seg.`,
    },
    {
      id: '2p-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Treningssenter X koster 299 kr/mnd uten bindingstid. Treningssenter Y koster 3 000 kr i innmeldingsavgift + 199 kr/mnd. a) Sett opp lineære modeller for totalkostnaden etter x måneder. b) Etter hvor mange måneder har Y blitt billigere enn X? c) Hva er totalkostnaden for hvert senter etter 12 måneder?',
        solution: 'a) X(x) = 299x. Y(x) = 199x + 3 000. b) 299x = 199x + 3 000 → 100x = 3 000 → x = 30 måneder. c) X(12) = 3 588 kr. Y(12) = 199 · 12 + 3 000 = 5 388 kr. Etter 12 måneder er X billigst.',
      },
    },
    {
      id: '2p-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Grafen til f(x) = −3x + 12 krysser x-aksen. Hva er nullpunktet?',
        options: [
          { id: 'a', text: 'x = 4', isCorrect: true },
          { id: 'b', text: 'x = 12', isCorrect: false },
          { id: 'c', text: 'x = −3', isCorrect: false },
          { id: 'd', text: 'x = −4', isCorrect: false },
        ],
        solution: 'Nullpunkt: −3x + 12 = 0 → −3x = −12 → x = 4.',
      },
    },

    // BLOKK 4: Likningssett
    {
      id: '2p-2-1-text-likningssett',
      type: 'text',
      content: `### Likningssett

Når vi har to ukjente, trenger vi to likninger. Dette kalles et **likningssett**.

**Innsettingsmetoden:** Løs én likning for én variabel, sett inn i den andre.

**Addisjonsmetoden:** Kombiner likningene slik at én variabel forsvinner.

**Grafisk løsning:** Tegn grafene og finn skjæringspunktet.`,
    },
    {
      id: '2p-2-1-example-4',
      type: 'example',
      title: 'Eksempel: Likningssett i praksis',
      problem: 'På en kantine koster en baguett og en juice til sammen 95 kr. To baguetter og en juice koster 145 kr. Hva koster hver?',
      solution: `**Løsning:**

La $b$ = pris baguett og $j$ = pris juice.

$b + j = 95$ ... (1)
$2b + j = 145$ ... (2)

Trekk (1) fra (2): $(2b + j) - (b + j) = 145 - 95$

$b = 50$

Sett inn i (1): $50 + j = 95 \\Rightarrow j = 45$

**Svar:** En baguett koster 50 kr og en juice koster 45 kr.`,
    },
    {
      id: '2p-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'En billett til voksen og en til barn koster til sammen 180 kr på kino. Tre voksne og to barn koster 470 kr. Finn prisen for hver billettype.',
        hints: ['Sett opp to likninger med v = voksenpris og b = barnepris.'],
        solution: 'v + b = 180 og 3v + 2b = 470. Fra (1): b = 180 − v. Sett inn i (2): 3v + 2(180 − v) = 470 → 3v + 360 − 2v = 470 → v = 110 kr. b = 180 − 110 = 70 kr.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Lineær funksjon**: $f(x) = ax + b$ med stigningstall $a$ og konstantledd $b$
- **Stigningstall fra to punkter**: $a = \\Delta y / \\Delta x$
- **Skjæringspunkt**: Der to funksjoner er like – løs $f(x) = g(x)$
- **Likningssett**: To likninger med to ukjente – løs med innsetting eller addisjon

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Stigningstall | Hvor mye $y$ øker når $x$ øker med 1 |
| Konstantledd | Verdien av funksjonen når $x = 0$ |
| Nullpunkt | $x$-verdi der $f(x) = 0$ |
| Skjæringspunkt | Der to grafer krysser hverandre |`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-2-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift produserer lamper. Faste kostnader er 60 000 kr/mnd. Variable kostnader er 120 kr/lampe. Salgsprisen er 250 kr/lampe. a) Sett opp lineære modeller for inntekt og kostnad. b) Finn nullpunktet grafisk og algebraisk. c) Hva er overskuddet ved produksjon av 600 lamper?',
        solution: 'a) I(x) = 250x. TK(x) = 120x + 60 000. b) 250x = 120x + 60 000 → 130x = 60 000 → x ≈ 462 lamper. c) R(600) = 250 · 600 − (120 · 600 + 60 000) = 150 000 − 132 000 = 18 000 kr.',
      },
    },
    {
      id: '2p-2-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-2-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du vurderer å kjøpe elbil eller bensinbil. Elbil: kjøpspris 350 000 kr, driftskostnader 0,30 kr/km. Bensinbil: kjøpspris 250 000 kr, driftskostnader 1,10 kr/km. a) Sett opp lineære modeller for totalkostnaden. b) Etter hvor mange km er elbilen billigere totalt sett? c) Du kjører 15 000 km/år. Etter hvor mange år har elbilen tjent seg inn?',
        solution: 'a) E(x) = 0,30x + 350 000. B(x) = 1,10x + 250 000. b) 0,30x + 350 000 = 1,10x + 250 000 → 100 000 = 0,80x → x = 125 000 km. c) 125 000 / 15 000 ≈ 8,3 år.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Lineær funksjon', definition: 'f(x) = ax + b – rett linje i koordinatsystemet' },
    { term: 'Stigningstall', definition: 'Koeffisienten a – endring i y per enhet x' },
    { term: 'Konstantledd', definition: 'Verdien b – der grafen krysser y-aksen' },
    { term: 'Nullpunkt', definition: 'x-verdien der f(x) = 0' },
    { term: 'Likningssett', definition: 'To eller flere likninger med felles ukjente' },
  ],
};

// ============================================================================
// Kapittel 2.2: Eksponentielle modeller
// ============================================================================

export const CHAPTER_2P_2_2: TextbookChapter = {
  id: '2p-2-2',
  courseId: '2p',
  chapterNumber: '2.2',
  title: 'Eksponentielle modeller',
  description: 'Vekst og nedgang – eksponentiell modellering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
  ],
  content: [
    {
      id: '2p-2-2-intro',
      type: 'text',
      content: `## Eksponentielle modeller

Ikke alt vokser med et fast beløp – noen ting vokser med en fast prosent. Et bankinnskudd med rente, befolkningsvekst og verdifall på biler følger eksponentiell utvikling.

I dette kapittelet skal du lære:
- Forskjellen mellom lineær og eksponentiell vekst
- Bruke vekstfaktor i eksponentielle modeller
- Beregne doblingstid og halveringstid
- Modellere praktiske situasjoner med eksponentielle funksjoner`,
    },

    // BLOKK 1: Eksponentiell vekst
    {
      id: '2p-2-2-def-eksponentiell',
      type: 'definition',
      title: 'Eksponentiell funksjon',
      content: `En **eksponentiell funksjon** har formen:

$$f(x) = a \\cdot b^x$$

- $a$ er **startverdien** (verdien når $x = 0$)
- $b$ er **vekstfaktoren** per tidsenhet

Sammenhengen med prosent:
- Vekst på $p\\%$: $b = 1 + p/100$
- Nedgang på $p\\%$: $b = 1 - p/100$

| Type | Eksempel | Vekstfaktor |
|------|----------|-------------|
| 5 % vekst | $b = 1{,}05$ | $> 1$ |
| 3 % nedgang | $b = 0{,}97$ | $< 1$ |
| Uendret | $b = 1{,}00$ | $= 1$ |`,
    },
    {
      id: '2p-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Befolkningsvekst',
      problem: 'En by har 80 000 innbyggere og vokser med 1,5 % per år. a) Sett opp en eksponentiell modell. b) Hvor mange innbyggere er det om 10 år?',
      solution: `**Løsning:**

a) Vekstfaktor: $b = 1 + 0{,}015 = 1{,}015$

Modell: $f(t) = 80\\,000 \\cdot 1{,}015^t$ der $t$ er antall år.

b) $f(10) = 80\\,000 \\cdot 1{,}015^{10} = 80\\,000 \\cdot 1{,}1610 \\approx 92\\,880$

**Svar:** Byen har ca. 92 880 innbyggere om 10 år.`,
    },
    {
      id: '2p-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Et bankinnskudd på 100 000 kr har 4 % årlig rente. Hva er innskuddet verdt etter 8 år?',
        options: [
          { id: 'a', text: '136 857 kr', isCorrect: true },
          { id: 'b', text: '132 000 kr', isCorrect: false },
          { id: 'c', text: '140 000 kr', isCorrect: false },
          { id: 'd', text: '125 600 kr', isCorrect: false },
        ],
        solution: 'f(8) = 100 000 · 1,04⁸ = 100 000 · 1,36857 ≈ 136 857 kr.',
      },
    },
    {
      id: '2p-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Antall elever ved en skole har økt fra 400 til 520 på 5 år. a) Finn den årlige vekstfaktoren. b) Hva er den prosentvise årlige veksten? c) Hvor mange elever vil skolen ha om ytterligere 3 år med samme veksttakt?',
        hints: ['520 = 400 · b⁵. Løs for b.'],
        solution: 'a) b⁵ = 520/400 = 1,3. b = 1,3^(1/5) ≈ 1,054. b) Vekst ≈ 5,4 % per år. c) f(8) = 400 · 1,054⁸ ≈ 400 · 1,520 ≈ 608 elever (eller 520 · 1,054³ ≈ 608).',
      },
    },

    // BLOKK 2: Eksponentiell nedgang
    {
      id: '2p-2-2-text-nedgang',
      type: 'text',
      content: `### Eksponentiell nedgang

Når noe minsker med en fast prosent per periode, har vi **eksponentiell nedgang**. Vekstfaktoren er da mellom 0 og 1.

Vanlige eksempler:
- Verdifall på biler og elektronikk
- Nedbrytning av legemidler i kroppen
- Radioaktiv nedbrytning`,
    },
    {
      id: '2p-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Verdifall på bil',
      problem: 'En bil koster 450 000 kr ny og mister 18 % av verdien hvert år. Hva er bilen verdt etter 5 år?',
      solution: `**Løsning:**

Vekstfaktor: $b = 1 - 0{,}18 = 0{,}82$

$f(5) = 450\\,000 \\cdot 0{,}82^5 = 450\\,000 \\cdot 0{,}3707 \\approx 166\\,800$ kr

**Svar:** Bilen er verdt ca. 166 800 kr etter 5 år. Den har tapt $450\\,000 - 166\\,800 = 283\\,200$ kr i verdi.`,
    },
    {
      id: '2p-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'En mobiltelefon koster 12 000 kr og mister 30 % av verdien hvert år. a) Sett opp en eksponentiell modell. b) Hva er telefonen verdt etter 3 år? c) Etter hvor mange år er den verdt mindre enn 2 000 kr?',
        hints: ['c) Løs 12 000 · 0,70^t < 2 000 ved å prøve ulike verdier av t.'],
        solution: 'a) f(t) = 12 000 · 0,70^t. b) f(3) = 12 000 · 0,343 = 4 116 kr. c) 12 000 · 0,70^t < 2 000 → 0,70^t < 1/6 ≈ 0,1667. Prøving: 0,70⁴ = 0,2401, 0,70⁵ = 0,1681, 0,70⁶ = 0,1176. Etter 5 år er den verdt ca. 2 017 kr, etter 6 år ca. 1 412 kr. Svar: Etter 6 år.',
      },
    },
    {
      id: '2p-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Vekstfaktoren for en prosess er 0,92. Hva betyr dette?',
        options: [
          { id: 'a', text: 'Mengden minker med 8 % per periode', isCorrect: true },
          { id: 'b', text: 'Mengden øker med 92 % per periode', isCorrect: false },
          { id: 'c', text: 'Mengden minker med 92 % per periode', isCorrect: false },
          { id: 'd', text: 'Mengden øker med 8 % per periode', isCorrect: false },
        ],
        solution: 'b = 0,92 = 1 − 0,08. Det betyr 8 % nedgang per periode.',
      },
    },

    // BLOKK 3: Doblingstid og halveringstid
    {
      id: '2p-2-2-def-dobling-halvering',
      type: 'definition',
      title: 'Doblingstid og halveringstid',
      content: `**Doblingstid** er tiden det tar før en verdi er doblet.

For vekstfaktor $b > 1$: $b^T = 2$, altså:
$$T_{\\text{dobling}} = \\frac{\\ln 2}{\\ln b} \\approx \\frac{70}{p}$$

der $p$ er veksten i prosent (tommelfingerregel: «70-regelen»).

**Halveringstid** er tiden det tar før verdien er halvert.

For vekstfaktor $b < 1$: $b^T = 0{,}5$, altså:
$$T_{\\text{halvering}} = \\frac{\\ln 0{,}5}{\\ln b}$$`,
    },
    {
      id: '2p-2-2-example-3',
      type: 'example',
      title: 'Eksempel: Doblingstid',
      problem: 'En investering vokser med 6 % per år. Hvor lang tid tar det før verdien er doblet?',
      solution: `**Løsning:**

Med tommelfingerregelen: $T \\approx 70/6 \\approx 11{,}7$ år

Eksakt: $1{,}06^T = 2$

$T = \\frac{\\ln 2}{\\ln 1{,}06} = \\frac{0{,}693}{0{,}0583} \\approx 11{,}9$ år

**Svar:** Det tar ca. 12 år å doble investeringen.`,
    },
    {
      id: '2p-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'En bil mister 15 % av verdien hvert år. a) Hva er halveringstiden? b) En bil kostet 500 000 kr ny. Når er den verdt under 100 000 kr?',
        hints: ['a) Løs 0,85^T = 0,5. b) Løs 500 000 · 0,85^t < 100 000.'],
        solution: 'a) T = ln(0,5)/ln(0,85) = −0,693/(−0,1625) ≈ 4,3 år. b) 0,85^t < 100 000/500 000 = 0,2. Prøving: 0,85⁹ ≈ 0,232, 0,85¹⁰ ≈ 0,197. Svar: Etter ca. 10 år.',
      },
    },
    {
      id: '2p-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'En befolkning vokser med 2 % per år. Omtrent hvor lang tid tar det å doble befolkningen? (Bruk 70-regelen)',
        options: [
          { id: 'a', text: '35 år', isCorrect: true },
          { id: 'b', text: '50 år', isCorrect: false },
          { id: 'c', text: '70 år', isCorrect: false },
          { id: 'd', text: '20 år', isCorrect: false },
        ],
        solution: '70-regelen: T ≈ 70/2 = 35 år.',
      },
    },

    // BLOKK 4: Lineær vs. eksponentiell
    {
      id: '2p-2-2-text-sammenligning',
      type: 'text',
      content: `### Lineær vs. eksponentiell vekst

| | Lineær | Eksponentiell |
|---|--------|---------------|
| Formel | $f(x) = ax + b$ | $f(x) = a \\cdot b^x$ |
| Endring | Fast beløp per periode | Fast prosent per periode |
| Graf | Rett linje | Kurve |
| Eksempel | Lønn + fast årlig tillegg | Sparing med rente |

**Viktig:** Eksponentiell vekst starter sakte, men blir etter hvert mye kraftigere enn lineær vekst.`,
    },
    {
      id: '2p-2-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'To spareavtaler: A) 50 000 kr startbeløp, øker med 5 000 kr per år. B) 50 000 kr startbeløp, øker med 8 % per år. a) Sett opp modeller for begge. b) Beregn verdien etter 5 og 15 år for begge. c) Etter hvor mange år er B verdt mer enn A?',
        solution: 'a) A(t) = 5 000t + 50 000. B(t) = 50 000 · 1,08^t. b) A(5) = 75 000, B(5) = 73 466. A(15) = 125 000, B(15) = 158 608. c) Prøving: A(10) = 100 000, B(10) = 107 946. A(9) = 95 000, B(9) = 99 950. Rundt t = 9 år passerer B over A.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Eksponentiell funksjon**: $f(x) = a \\cdot b^x$ – vekst/nedgang med fast prosent
- **Vekstfaktor**: $b = 1 + p/100$ for vekst, $b = 1 - p/100$ for nedgang
- **Doblingstid**: $T \\approx 70/p$ (70-regelen)
- **Halveringstid**: Tiden for halvering av verdien
- Eksponentiell vekst overgår lineær vekst over tid`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-2-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norge hadde ca. 5,4 millioner innbyggere i 2022 og vokser med ca. 0,5 % per år. a) Sett opp en eksponentiell modell. b) Bruk 70-regelen til å estimere når befolkningen passerer 7 millioner. c) Drøft om modellen er realistisk på lang sikt.',
        solution: 'a) f(t) = 5 400 000 · 1,005^t. b) Doblingstid ≈ 70/0,5 = 140 år. Vi trenger økning med faktor 7/5,4 ≈ 1,296. Siden 1,005^t = 1,296: t = ln(1,296)/ln(1,005) ≈ 52 år. c) Modellen forutsetter konstant vekst, men innvandring, fødselsrate og politikk endrer seg. Realistisk kun for noen tiår fremover.',
      },
    },
    {
      id: '2p-2-2-ex-9',
      type: 'exercise',
      exercise: {
        id: '2p-2-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et legemiddel har en halveringstid på 6 timer i kroppen. En pasient tar 400 mg. a) Sett opp en eksponentiell modell. b) Hvor mye er igjen etter 18 timer? c) Pasienten skal ta ny dose når det er under 50 mg igjen. Etter hvor mange timer bør pasienten ta ny dose?',
        solution: 'a) Vekstfaktor per time: b = 0,5^(1/6) ≈ 0,891. f(t) = 400 · 0,891^t. Eller: f(t) = 400 · 0,5^(t/6). b) f(18) = 400 · 0,5³ = 400 · 0,125 = 50 mg. c) 400 · 0,5^(t/6) < 50. 0,5^(t/6) < 0,125 = 0,5³. t/6 > 3. t > 18 timer. Svar: Etter 18 timer.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Eksponentiell funksjon', definition: 'f(x) = a · b^x – vekst/nedgang med fast prosent' },
    { term: 'Vekstfaktor', definition: 'Tallet b – multipliseres for hver periode' },
    { term: 'Doblingstid', definition: 'Tid for dobling av verdien' },
    { term: 'Halveringstid', definition: 'Tid for halvering av verdien' },
    { term: '70-regelen', definition: 'Doblingstid ≈ 70 / vekstprosent' },
  ],
};

// ============================================================================
// Kapittel 2.3: Regresjon
// ============================================================================

export const CHAPTER_2P_2_3: TextbookChapter = {
  id: '2p-2-3',
  courseId: '2p',
  chapterNumber: '2.3',
  title: 'Regresjon',
  description: 'Tilpasse funksjoner til data med digitale verktøy.',
  estimatedMinutes: 50,
  prerequisites: ['2p-2-1', '2p-2-2'],
  competenceGoals: [
    'forklare og bruke prosent, prosentpoeng og vekstfaktor til modellering av praktiske situasjoner med digitale verktøy',
    'analysere og presentere funn i datasett fra lokalsamfunn og media',
  ],
  content: [
    {
      id: '2p-2-3-intro',
      type: 'text',
      content: `## Regresjon

I praksis har vi ofte datapunkter fra observasjoner eller målinger, og vi ønsker å finne en funksjon som passer best mulig til dataene. Denne prosessen kalles **regresjon**.

I dette kapittelet skal du lære:
- Hva regresjon er og hvorfor vi bruker det
- Lineær regresjon og korrelasjonskoeffisienten $r$
- Eksponentiell regresjon
- Hvordan velge riktig modell
- Bruke digitale verktøy (regneark/GeoGebra) til regresjon`,
    },

    // BLOKK 1: Lineær regresjon
    {
      id: '2p-2-3-def-lineær-regresjon',
      type: 'definition',
      title: 'Lineær regresjon',
      content: `**Lineær regresjon** finner den rette linjen $y = ax + b$ som passer best til et sett med datapunkter.

«Best» betyr at summen av de kvadrerte avvikene mellom datapunktene og linjen er minst mulig (**minste kvadraters metode**).

Digitale verktøy beregner $a$ og $b$ automatisk. Du trenger ikke gjøre dette for hånd.`,
    },
    {
      id: '2p-2-3-def-korrelasjon',
      type: 'definition',
      title: 'Korrelasjon',
      content: `**Korrelasjonskoeffisienten $r$** måler hvor godt en rett linje passer til dataene:

- $r = 1$: Perfekt positiv sammenheng (alle punkter på en stigende linje)
- $r = -1$: Perfekt negativ sammenheng (alle punkter på en synkende linje)
- $r = 0$: Ingen lineær sammenheng
- $|r| > 0{,}9$: Sterk korrelasjon
- $0{,}7 < |r| < 0{,}9$: Middels korrelasjon
- $|r| < 0{,}5$: Svak korrelasjon

**$r^2$ (forklart varians)** forteller hvor stor andel av variasjonen i data som forklares av modellen.`,
    },
    {
      id: '2p-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Lineær regresjon',
      problem: 'Temperaturen ble målt hver time fra kl. 08 til kl. 14:\n\n| Tid (t) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n|---------|---|---|---|---|---|---|---|\n| Temp (°C) | 5 | 7 | 8 | 11 | 12 | 13 | 15 |\n\nFinn en lineær modell og bruk den til å estimere temperaturen kl. 16 (t = 8).',
      solution: `**Løsning (med digitalt verktøy):**

Lineær regresjon gir: $f(t) = 1{,}61t + 5{,}14$

$r = 0{,}995$ (veldig sterk korrelasjon)

Estimat for kl. 16: $f(8) = 1{,}61 \\cdot 8 + 5{,}14 = 12{,}88 + 5{,}14 = 18{,}0°C$

**Tolkning:** Temperaturen stiger med ca. 1,6 °C per time. Modellen passer svært godt til dataene ($r \\approx 1$), men den gjelder trolig bare for dette tidsintervallet.`,
    },
    {
      id: '2p-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'En lineær regresjonsmodell har r = −0,85. Hva betyr dette?',
        options: [
          { id: 'a', text: 'Middels sterk negativ sammenheng', isCorrect: true },
          { id: 'b', text: 'Svak positiv sammenheng', isCorrect: false },
          { id: 'c', text: 'Sterk positiv sammenheng', isCorrect: false },
          { id: 'd', text: 'Ingen sammenheng', isCorrect: false },
        ],
        solution: 'r = −0,85 betyr middels til sterk negativ korrelasjon: når x øker, avtar y.',
      },
    },
    {
      id: '2p-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenhengen mellom timer med trening per uke og hvilepuls ble undersøkt:\n\n| Timer trening | 0 | 2 | 4 | 6 | 8 | 10 |\n|---|---|---|---|---|---|---|\n| Hvilepuls | 78 | 72 | 68 | 63 | 60 | 56 |\n\nBruk digitalt verktøy til å finne en lineær modell. Hva blir estimert hvilepuls for en person som trener 7 timer per uke?',
        hints: ['Bruk GeoGebra eller regneark til å gjøre regresjonen.'],
        solution: 'Lineær regresjon gir ca. f(x) = −2,13x + 77,5 med r ≈ −0,998 (sterk negativ). f(7) = −2,13 · 7 + 77,5 ≈ 62,6 slag/min.',
      },
    },

    // BLOKK 2: Eksponentiell regresjon
    {
      id: '2p-2-3-text-eksp-regresjon',
      type: 'text',
      content: `### Eksponentiell regresjon

Når dataene ikke følger en rett linje men kurver oppover eller nedover, kan eksponentiell regresjon gi bedre tilpasning.

Eksponentiell regresjon finner $a$ og $b$ i modellen $f(x) = a \\cdot b^x$.

**Når velge eksponentiell?**
- Data som øker/avtar med tilnærmet fast prosent
- Grafen bøyer oppover (vekst) eller nedover (nedgang)
- $r^2$ er høyere for eksponentiell enn for lineær modell`,
    },
    {
      id: '2p-2-3-example-2',
      type: 'example',
      title: 'Eksempel: Eksponentiell regresjon',
      problem: 'Verdien av en bil ble registrert over flere år:\n\n| År | 0 | 1 | 2 | 3 | 4 | 5 |\n|----|---|---|---|---|---|---|\n| Verdi (1000 kr) | 350 | 290 | 245 | 200 | 168 | 140 |\n\nFinn en eksponentiell modell.',
      solution: `**Løsning (med digitalt verktøy):**

Eksponentiell regresjon: $f(t) = 349 \\cdot 0{,}833^t$

$r^2 = 0{,}998$ (svært god tilpasning)

**Tolkning:** Bilen mister ca. $1 - 0{,}833 = 16{,}7\\%$ av verdien hvert år.

Startverdi ≈ 349 000 kr (nær den faktiske 350 000 kr).`,
    },
    {
      id: '2p-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Antall bakterier i en kultur ble telt:\n\n| Timer | 0 | 1 | 2 | 3 | 4 | 5 |\n|-------|---|---|---|---|---|---|\n| Antall | 100 | 150 | 230 | 340 | 510 | 780 |\n\na) Bruk digitalt verktøy til å finne en eksponentiell modell. b) Hva er den estimerte vekstprosenten per time? c) Estimer antall bakterier etter 8 timer.',
        hints: ['Bruk GeoGebra: FitExp-kommandoen.'],
        solution: 'a) Eksponentiell regresjon gir ca. f(t) = 99,5 · 1,51^t. b) Vekstprosent ≈ 51 % per time. c) f(8) = 99,5 · 1,51⁸ ≈ 99,5 · 25,6 ≈ 2 547 bakterier.',
      },
    },
    {
      id: '2p-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Når bør man velge eksponentiell regresjon fremfor lineær?',
        options: [
          { id: 'a', text: 'Når datapunktene kurver oppover eller nedover i stedet for å følge en rett linje', isCorrect: true },
          { id: 'b', text: 'Alltid, fordi eksponentiell er bedre', isCorrect: false },
          { id: 'c', text: 'Bare når vi har mer enn 10 datapunkter', isCorrect: false },
          { id: 'd', text: 'Når r er negativ', isCorrect: false },
        ],
        solution: 'Eksponentiell regresjon passer bedre når dataene ikke følger en rett linje, men i stedet bøyer opp (vekst) eller ned (nedgang).',
      },
    },

    // BLOKK 3: Modellvalg
    {
      id: '2p-2-3-text-modellvalg',
      type: 'text',
      content: `### Velge riktig modell

Når du skal velge mellom modeller:

1. **Plot dataene** – se om de følger en rett linje eller kurve
2. **Kjør begge regresjoner** – sammenlign $r^2$-verdiene
3. **Vurder konteksten** – hva gir mening i situasjonen?
4. **Vær forsiktig med ekstrapolering** – å bruke modellen langt utenfor dataintervallet er usikkert

**Tommelfingerregel:** Velg den enkleste modellen som gir god tilpasning ($r^2 > 0{,}9$).`,
    },
    {
      id: '2p-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'For et datasett gir lineær regresjon r² = 0,87 og eksponentiell regresjon r² = 0,96. a) Hvilken modell passer best? b) Hva betyr det at r² = 0,96?',
        solution: 'a) Eksponentiell modell passer best fordi r² = 0,96 > 0,87. b) r² = 0,96 betyr at 96 % av variasjonen i dataene forklares av den eksponentielle modellen. Bare 4 % er uforklart variasjon.',
      },
    },

    // OPPSUMMERING
    {
      id: '2p-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Regresjon** finner funksjonen som passer best til datapunkter
- **Lineær regresjon**: $y = ax + b$ – for data som følger en rett linje
- **Eksponentiell regresjon**: $y = a \\cdot b^x$ – for data med fast prosentvis endring
- **Korrelasjonskoeffisienten $r$**: Måler styrken på den lineære sammenhengen
- **$r^2$**: Andel av variasjon forklart av modellen
- Velg modellen med høyest $r^2$ og som gir mening i konteksten`,
    },

    // --- Samleoppgaver ---
    {
      id: '2p-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Strømforbruket i en bolig ble registrert:\n\n| Måned | Jan | Feb | Mar | Apr | Mai | Jun |\n|-------|-----|-----|-----|-----|-----|-----|\n| kWh | 2400 | 2100 | 1700 | 1200 | 800 | 600 |\n\nBruk digitalt verktøy til å prøve lineær og eksponentiell regresjon. Hvilken modell passer best? Bruk modellen til å estimere forbruket i juli.',
        solution: 'Med x = 1 for jan osv. Lineær: f(x) ≈ −360x + 2720, r² ≈ 0,99. Eksponentiell: f(x) ≈ 3070 · 0,77^x, r² ≈ 0,99. Begge gir god tilpasning. Lineær f(7) ≈ 200 kWh. Eksponentiell f(7) ≈ 3070 · 0,77⁷ ≈ 480 kWh. Lineær gir urealistisk lavt forbruk, eksponentiell er mer realistisk da forbruket flater ut.',
      },
    },
    {
      id: '2p-2-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '2p-2-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn et datasett fra SSB (f.eks. befolkningsutvikling, strømpris, bilsalg) med minst 6 datapunkter. a) Lag et punktdiagram. b) Utfør lineær og eksponentiell regresjon. c) Velg den beste modellen og begrunn valget. d) Bruk modellen til å gjøre en prediksjon og vurder om prediksjonen er rimelig.',
        solution: 'Oppgaven er åpen. Eleven vurderes på: Riktig gjennomført regresjon, fornuftig sammenligning av r²-verdier, god begrunnelse for modellvalg, og kritisk vurdering av prediksjonens rimelighet (spesielt ved ekstrapolering langt utenfor dataintervallet).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Regresjon', definition: 'Metode for å finne en funksjon som passer best til data' },
    { term: 'Korrelasjonskoeffisient', definition: 'r – måler styrken på lineær sammenheng (−1 til 1)' },
    { term: 'r²', definition: 'Andel av variasjon i data som forklares av modellen' },
    { term: 'Ekstrapolering', definition: 'Å bruke modellen utenfor dataintervallet – usikkert' },
  ],
};

// Eksporter alle kapitler i seksjon 2
export const MATEMATIKK_2P_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_2P_2_1,
  CHAPTER_2P_2_2,
  CHAPTER_2P_2_3,
];
