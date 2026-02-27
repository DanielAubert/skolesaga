/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 8
 *
 * Kapittel 8.1: Multiplikasjon av polynomer
 * Kapittel 8.2: Kvadratsetningene
 * Kapittel 8.3: Algebraisk divisjon og rasjonale uttrykk
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1 NARRATIV: Multiplikasjon av polynomer
// ============================================================================

export const CHAPTER_10_8_1_NARRATIV: TextbookChapter = {
  id: '10-8-1-narrativ',
  courseId: '10',
  chapterNumber: '8.1',
  title: 'Multiplikasjon av polynomer',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av polynom-multiplikasjon -- fra distributiv lov via FOIL-metoden til arealmodellen, der algebra og geometri motes.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og generalisere multiplikasjon av polynom algebraisk og geometrisk',
  ],
  linkedChapterId: '10-8-1',
  content: [
    {
      id: '10-8-1-n-intro',
      type: 'text',
      content: `## Algebra som areal

Tenk deg at du skal finne arealet av et rektangulart rom der sidene er $(x + 3)$ meter og $(x + 5)$ meter. Eller kanskje du skal forenkle et uttrykk i en likning. I begge tilfeller ma du vite hvordan du multipliserer polynomer. Et **polynom** er et algebraisk uttrykk med ett eller flere ledd, for eksempel $2x^2 + 3x - 5$. Et uttrykk med bare ett ledd (som $3x^2$) kalles et **monom**, og et uttrykk med to ledd (som $x + 3$) kalles et **binom**.

I dette kapittelet bygger vi opp ferdighetene steg for steg: forst monom ganger polynom, sa binom ganger binom, og til slutt vilkarlige polynomer.`,
    },

    {
      id: '10-8-1-n-section1',
      type: 'text',
      content: `## Monom ganger polynom -- distributiv lov

Nar vi multipliserer et monom med et polynom, bruker vi den **distributive loven**:

$$a(b + c) = ab + ac$$

Du ganger monomet med hvert ledd i polynomet, ett om gangen. For eksempel: $3x(2x + 5) = 3x \\cdot 2x + 3x \\cdot 5 = 6x^2 + 15x$. Husk at $x \\cdot x = x^2$.

Det fungerer ogsa med flere ledd og negative koeffisienter. $-2x^2(3x^2 - 4x + 1)$: vi ganger $-2x^2$ med hvert ledd og far $-6x^4 + 8x^3 - 2x^2$. Legg merke til at minus ganger minus gir pluss ($-2x^2 \\cdot (-4x) = +8x^3$).

Den generelle regelen er: $a(b_1 + b_2 + \\ldots + b_n) = ab_1 + ab_2 + \\ldots + ab_n$. Uansett hvor mange ledd polynomet har, ganger du monomet med hvert enkelt ledd.`,
    },

    {
      id: '10-8-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-8-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa monom ganger polynom:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-8-1-n-quiz1-q0',
            task: 'Hva er $2x(3x - 1)$?',
            options: [
              { id: 'a', text: '$6x^2 - 2x$', isCorrect: true },
              { id: 'b', text: '$6x - 2x$', isCorrect: false },
              { id: 'c', text: '$5x^2 - 1$', isCorrect: false },
              { id: 'd', text: '$6x^2 - 1$', isCorrect: false },
            ],
            solution: 'Vi bruker distributiv lov: $2x \\cdot 3x = 6x^2$ og $2x \\cdot (-1) = -2x$. Svaret er $6x^2 - 2x$.',
          },
          {
            id: '10-8-1-n-quiz1-q1',
            task: 'Hva er $-3x(x + 7)$?',
            options: [
              { id: 'a', text: '$-3x^2 + 21x$', isCorrect: false },
              { id: 'b', text: '$3x^2 - 21x$', isCorrect: false },
              { id: 'c', text: '$-3x^2 - 21x$', isCorrect: true },
              { id: 'd', text: '$-3x^2 - 7x$', isCorrect: false },
            ],
            solution: '$-3x \\cdot x = -3x^2$ og $-3x \\cdot 7 = -21x$. Minus ganger pluss gir minus. Svaret er $-3x^2 - 21x$.',
          },
          {
            id: '10-8-1-n-quiz1-q2',
            task: 'Hva er $5x^2(2x - 3)$?',
            options: [
              { id: 'a', text: '$10x^2 - 15x^2$', isCorrect: false },
              { id: 'b', text: '$10x^3 - 15x^2$', isCorrect: true },
              { id: 'c', text: '$7x^3 - 8x^2$', isCorrect: false },
              { id: 'd', text: '$10x^3 - 3$', isCorrect: false },
            ],
            solution: '$5x^2 \\cdot 2x = 10x^3$ (legg sammen eksponentene: $x^2 \\cdot x = x^3$) og $5x^2 \\cdot (-3) = -15x^2$.',
          },
        ],
      },
    },

    {
      id: '10-8-1-n-section2',
      type: 'text',
      content: `## Binom ganger binom -- FOIL-metoden

Nar du multipliserer to binomier $(a + b)(c + d)$, ma hvert ledd i den forste parentesen ganges med hvert ledd i den andre. En populaer huskeregel er **FOIL**:

- **F**irst (forste ledd): $a \\cdot c$
- **O**uter (ytre ledd): $a \\cdot d$
- **I**nner (indre ledd): $b \\cdot c$
- **L**ast (siste ledd): $b \\cdot d$

$$(a + b)(c + d) = ac + ad + bc + bd$$

La oss prove: $(x + 3)(x + 5)$. F: $x \\cdot x = x^2$. O: $x \\cdot 5 = 5x$. I: $3 \\cdot x = 3x$. L: $3 \\cdot 5 = 15$. Sa far vi $x^2 + 5x + 3x + 15 = x^2 + 8x + 15$.

Varer noyaktig med fortegnene! $(x - 3)(x + 2)$: F: $x^2$, O: $2x$, I: $-3x$, L: $-6$. Resultat: $x^2 + 2x - 3x - 6 = x^2 - x - 6$. Og $(x - 4)(x - 5)$: F: $x^2$, O: $-5x$, I: $-4x$, L: $+20$ (minus ganger minus gir pluss!). Resultat: $x^2 - 9x + 20$.

Det finnes ogsa en nyttig generell formel: $(x + a)(x + b) = x^2 + (a + b)x + ab$. Midtleddet er summen av $a$ og $b$, og siste ledd er produktet. For $(x + 7)(x - 3)$: $a + b = 7 + (-3) = 4$ og $ab = 7 \\cdot (-3) = -21$, sa svaret er $x^2 + 4x - 21$.`,
    },

    {
      id: '10-8-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-8-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa FOIL-metoden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-8-1-n-quiz2-q0',
            task: 'Hva er $(x + 2)(x + 4)$?',
            options: [
              { id: 'a', text: '$x^2 + 8$', isCorrect: false },
              { id: 'b', text: '$x^2 + 6x + 8$', isCorrect: true },
              { id: 'c', text: '$x^2 + 2x + 8$', isCorrect: false },
              { id: 'd', text: '$2x^2 + 6x + 8$', isCorrect: false },
            ],
            solution: 'FOIL: $x^2 + 4x + 2x + 8 = x^2 + 6x + 8$. Midtleddet: $4 + 2 = 6$, siste ledd: $4 \\cdot 2 = 8$.',
          },
          {
            id: '10-8-1-n-quiz2-q1',
            task: 'Hva er $(x - 4)(x - 5)$?',
            options: [
              { id: 'a', text: '$x^2 - 9x + 20$', isCorrect: true },
              { id: 'b', text: '$x^2 + 9x + 20$', isCorrect: false },
              { id: 'c', text: '$x^2 - 9x - 20$', isCorrect: false },
              { id: 'd', text: '$x^2 - x - 20$', isCorrect: false },
            ],
            solution: 'FOIL: $x^2 - 5x - 4x + 20 = x^2 - 9x + 20$. Minus ganger minus gir pluss, sa siste ledd er $+20$.',
          },
          {
            id: '10-8-1-n-quiz2-q2',
            task: 'Hva er $(4x + 1)(4x - 1)$?',
            options: [
              { id: 'a', text: '$16x^2 + 1$', isCorrect: false },
              { id: 'b', text: '$16x^2 - 1$', isCorrect: true },
              { id: 'c', text: '$8x^2 - 1$', isCorrect: false },
              { id: 'd', text: '$16x^2 - 2$', isCorrect: false },
            ],
            solution: 'FOIL: $16x^2 - 4x + 4x - 1 = 16x^2 - 1$. De to midtleddene slar hverandre ut! (Dette er konjugatsetningen.)',
          },
        ],
      },
    },

    {
      id: '10-8-1-n-section3',
      type: 'text',
      content: `## Arealmodellen og storre polynomer

**Arealmodellen** gir en vakker geometrisk tolkning av polynom-multiplikasjon. Tenk deg et rektangel med sider $(x + 3)$ og $(x + 5)$. Del rektangelet i fire deler:

| | $x$ | $5$ |
|---|---|---|
| $x$ | $x^2$ | $5x$ |
| $3$ | $3x$ | $15$ |

Totalt areal: $x^2 + 5x + 3x + 15 = x^2 + 8x + 15$. Noyaktig det samme som FOIL! Arealmodellen viser *hvorfor* formelen fungerer.

Nar vi multipliserer **storre polynomer** bruker vi samme prinsipp: hvert ledd i det forste polynomet ganges med hvert ledd i det andre. For $(x^2 + 3x + 2)(x + 4)$ tar vi ett ledd om gangen: $x^2(x + 4) + 3x(x + 4) + 2(x + 4) = x^3 + 4x^2 + 3x^2 + 12x + 2x + 8 = x^3 + 7x^2 + 14x + 8$.

Et spesielt fint resultat: $(x + 1)(x^2 - x + 1) = x^3 - x^2 + x + x^2 - x + 1 = x^3 + 1$. Alt forsvinner bortsett fra forste og siste ledd!

For tre parenteser multipliserer du to om gangen: $(x + 2)(x - 3)(x + 1)$ -- forst $(x + 2)(x - 3) = x^2 - x - 6$, sa $(x^2 - x - 6)(x + 1) = x^3 + x^2 - x^2 - x - 6x - 6 = x^3 - 7x - 6$.

Husk alltid a **samle like ledd** til slutt!`,
    },

    {
      id: '10-8-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-8-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa arealmodellen og storre polynomer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-8-1-n-quiz3-q0',
            task: 'Et rom har lengde $(2x + 3)$ m og bredde $(x + 4)$ m. Hva er arealet?',
            options: [
              { id: 'a', text: '$2x^2 + 11x + 12$', isCorrect: true },
              { id: 'b', text: '$2x^2 + 7x + 12$', isCorrect: false },
              { id: 'c', text: '$3x^2 + 11x + 12$', isCorrect: false },
              { id: 'd', text: '$2x^2 + 11x + 7$', isCorrect: false },
            ],
            solution: '$(2x + 3)(x + 4) = 2x^2 + 8x + 3x + 12 = 2x^2 + 11x + 12$.',
          },
          {
            id: '10-8-1-n-quiz3-q1',
            task: 'Hva er $(x + 1)(x^2 - x + 1)$?',
            options: [
              { id: 'a', text: '$x^3 - 1$', isCorrect: false },
              { id: 'b', text: '$x^3 + x^2 - x + 1$', isCorrect: false },
              { id: 'c', text: '$x^3 + 1$', isCorrect: true },
              { id: 'd', text: '$x^3 + 2x + 1$', isCorrect: false },
            ],
            solution: '$x(x^2 - x + 1) + 1(x^2 - x + 1) = x^3 - x^2 + x + x^2 - x + 1 = x^3 + 1$. Alle midtleddene slar hverandre ut.',
          },
          {
            id: '10-8-1-n-quiz3-q2',
            task: 'I arealmodellen for $(x + 2)(x + 7)$, hva er arealet av feltet nede til hoyre?',
            options: [
              { id: 'a', text: '$2x$', isCorrect: false },
              { id: 'b', text: '$7x$', isCorrect: false },
              { id: 'c', text: '$14$', isCorrect: true },
              { id: 'd', text: '$x^2$', isCorrect: false },
            ],
            solution: 'I arealmodellen ligger $2$ langs den ene siden og $7$ langs den andre. Feltet nede til hoyre har areal $2 \\times 7 = 14$.',
          },
        ],
      },
    },

    {
      id: '10-8-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har laert fire teknikker for polynom-multiplikasjon:

1. **Monom ganger polynom**: Distributiv lov -- $a(b + c) = ab + ac$
2. **Binom ganger binom (FOIL)**: $(a + b)(c + d) = ac + ad + bc + bd$
3. **Arealmodellen**: En geometrisk tolkning som viser at multiplikasjonen tilsvarer summen av delarealer i et rektangel
4. **Polynom ganger polynom**: Hvert ledd i den ene faktoren ganges med hvert ledd i den andre

Husk alltid a samle like ledd etter at du har utvidet uttrykket, og varer noyaktig med fortegnene!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2 NARRATIV: Kvadratsetningene
// ============================================================================

export const CHAPTER_10_8_2_NARRATIV: TextbookChapter = {
  id: '10-8-2-narrativ',
  courseId: '10',
  chapterNumber: '8.2',
  title: 'Kvadratsetningene',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende utforskning av de tre kvadratsetningene -- algebraiske snarveier som lar deg utvide og faktorisere uttrykk raskt, med geometriske bevis som gir dyp forstaelse.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og generalisere multiplikasjon av polynom algebraisk og geometrisk',
  ],
  linkedChapterId: '10-8-2',
  content: [
    {
      id: '10-8-2-n-intro',
      type: 'text',
      content: `## Tre snarveier du ma kunne

Nar vi multipliserer polynomer, dukker det opp noen monstre som gar igjen sa ofte at det loenner seg a laere dem utenat. De tre **kvadratsetningene** er slike monstre -- elegante snarveier som sparer deg for mye regning og gir deg et kraftig verktoy for a faktorisere uttrykk.

Disse setningene er blant de viktigste verktoyene i algebra, og du vil bruke dem i mange sammenhenger: likningslosning, funksjonsanalyse og videre i matematikken.`,
    },

    {
      id: '10-8-2-n-section1',
      type: 'text',
      content: `## Forste kvadratsetning: $(a + b)^2 = a^2 + 2ab + b^2$

Den forste kvadratsetningen sier at **kvadratet av en sum** er lik summen av kvadratene pluss det dobbelte av produktet:

$$(a + b)^2 = a^2 + 2ab + b^2$$

Hvorfor? Jo, $(a + b)^2 = (a + b)(a + b)$. Med FOIL far vi $a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$. Det dobbelte produktet $2ab$ kommer fra at vi far $ab$ to ganger.

La oss ta et konkret eksempel: $(x + 4)^2 = x^2 + 2 \\cdot x \\cdot 4 + 4^2 = x^2 + 8x + 16$. Med koeffisienter: $(2x + 1)^2 = (2x)^2 + 2 \\cdot 2x \\cdot 1 + 1^2 = 4x^2 + 4x + 1$. Og $(3x + 2)^2 = 9x^2 + 12x + 4$.

Geometrisk kan vi se dette som et kvadrat med side $(a + b)$ delt i fire deler: et stort kvadrat ($a^2$), to rektangler (hvert med areal $ab$) og et lite kvadrat ($b^2$). De to rektanglene forklarer noyaktig hvorfor $2ab$ dukker opp.

**Vanlig feil!** Mange skriver $(a + b)^2 = a^2 + b^2$ -- men dette er **galt**! Du glemmer det dobbelte produktet $2ab$. En rask sjekk: $(3 + 4)^2 = 49$, men $9 + 16 = 25 \\neq 49$. Det manglende leddet er $2 \\cdot 3 \\cdot 4 = 24$, og $25 + 24 = 49$.`,
    },

    {
      id: '10-8-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-8-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa forste kvadratsetning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-8-2-n-quiz1-q0',
            task: 'Hva er $(x + 5)^2$?',
            options: [
              { id: 'a', text: '$x^2 + 25$', isCorrect: false },
              { id: 'b', text: '$x^2 + 10x + 25$', isCorrect: true },
              { id: 'c', text: '$x^2 + 5x + 25$', isCorrect: false },
              { id: 'd', text: '$2x^2 + 10x + 25$', isCorrect: false },
            ],
            solution: '$(x + 5)^2 = x^2 + 2 \\cdot x \\cdot 5 + 5^2 = x^2 + 10x + 25$. Husk det dobbelte produktet!',
          },
          {
            id: '10-8-2-n-quiz1-q1',
            task: 'Hva er $(3x + 2)^2$?',
            options: [
              { id: 'a', text: '$9x^2 + 12x + 4$', isCorrect: true },
              { id: 'b', text: '$3x^2 + 12x + 4$', isCorrect: false },
              { id: 'c', text: '$9x^2 + 6x + 4$', isCorrect: false },
              { id: 'd', text: '$9x^2 + 4$', isCorrect: false },
            ],
            solution: '$a = 3x, b = 2$. $(3x)^2 = 9x^2$, $2 \\cdot 3x \\cdot 2 = 12x$, $2^2 = 4$. Svaret er $9x^2 + 12x + 4$.',
          },
        ],
      },
    },

    {
      id: '10-8-2-n-section2',
      type: 'text',
      content: `## Andre kvadratsetning: $(a - b)^2 = a^2 - 2ab + b^2$

Den andre kvadratsetningen handler om **kvadratet av en differanse**:

$$(a - b)^2 = a^2 - 2ab + b^2$$

Den ligner veldig pa den forste, men midtleddet er **negativt**. Beviset: $(a - b)^2 = (a - b)(a - b) = a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$. Legg merke til at siste ledd $b^2$ alltid er *positivt*, fordi $(-b)(-b) = b^2$.

Eksempler: $(x - 6)^2 = x^2 - 12x + 36$. $(3x - 4)^2 = 9x^2 - 24x + 16$. $(5x - 1)^2 = 25x^2 - 10x + 1$.

Geometrisk: start med et stort kvadrat med side $a$ og areal $a^2$. Trekk fra to rektangler med areal $ab$ (langs to sider). Men da har du trukket fra hjornekvadratet $b^2$ to ganger, sa du legger det til en gang. Resultatet er $a^2 - 2ab + b^2$, som er arealet av et kvadrat med side $(a - b)$.`,
    },

    {
      id: '10-8-2-n-section3',
      type: 'text',
      content: `## Konjugatsetningen: $(a + b)(a - b) = a^2 - b^2$

Den tredje og siste er **konjugatsetningen** (ogsa kalt tredje kvadratsetning). Den sier at produktet av to **konjugerte** binomier -- uttrykk pa formen $(a + b)$ og $(a - b)$ -- gir differansen av kvadratene:

$$(a + b)(a - b) = a^2 - b^2$$

Beviset er vakkert enkelt: $(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$. De to midtleddene $+ab$ og $-ab$ slar hverandre ut!

Eksempler: $(x + 8)(x - 8) = x^2 - 64$. $(2x + 3)(2x - 3) = 4x^2 - 9$. $(4x + 7)(4x - 7) = 16x^2 - 49$.

Konjugatsetningen er ogsa et fantastisk verktoy for **hoderegning**! $47 \\cdot 53 = (50 - 3)(50 + 3) = 2500 - 9 = 2491$. $99 \\cdot 101 = (100 - 1)(100 + 1) = 10000 - 1 = 9999$. $28 \\cdot 32 = (30 - 2)(30 + 2) = 900 - 4 = 896$. Smart, ikke sant?

Geometrisk: et stort kvadrat med side $a$ mister et lite hjornekvadrat med side $b$. Den L-formede figuren som gjensatar kan omarrangeres til et rektangel med sider $(a + b)$ og $(a - b)$. Arealet er det samme: $a^2 - b^2 = (a + b)(a - b)$.`,
    },

    {
      id: '10-8-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-8-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa alle tre kvadratsetningene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-8-2-n-quiz2-q0',
            task: 'Hvilket uttrykk er lik $(x - 3)^2$?',
            options: [
              { id: 'a', text: '$x^2 - 9$', isCorrect: false },
              { id: 'b', text: '$x^2 + 6x + 9$', isCorrect: false },
              { id: 'c', text: '$x^2 - 6x + 9$', isCorrect: true },
              { id: 'd', text: '$x^2 - 3x + 9$', isCorrect: false },
            ],
            solution: '$(x - 3)^2 = x^2 - 2 \\cdot x \\cdot 3 + 3^2 = x^2 - 6x + 9$. Alternativ a) er $(x + 3)(x - 3)$ (konjugatsetningen), og b) er $(x + 3)^2$.',
          },
          {
            id: '10-8-2-n-quiz2-q1',
            task: 'Hva er $(x + 5)(x - 5)$?',
            options: [
              { id: 'a', text: '$x^2 + 10x - 25$', isCorrect: false },
              { id: 'b', text: '$x^2 - 10x + 25$', isCorrect: false },
              { id: 'c', text: '$x^2 + 25$', isCorrect: false },
              { id: 'd', text: '$x^2 - 25$', isCorrect: true },
            ],
            solution: 'Konjugatsetningen: $(x + 5)(x - 5) = x^2 - 5^2 = x^2 - 25$. Midtleddene slar hverandre ut.',
          },
          {
            id: '10-8-2-n-quiz2-q2',
            task: 'Bruk konjugatsetningen til a regne ut $43 \\cdot 37$ i hodet.',
            options: [
              { id: 'a', text: '$1591$', isCorrect: true },
              { id: 'b', text: '$1601$', isCorrect: false },
              { id: 'c', text: '$1491$', isCorrect: false },
              { id: 'd', text: '$1581$', isCorrect: false },
            ],
            solution: '$43 \\cdot 37 = (40 + 3)(40 - 3) = 40^2 - 3^2 = 1600 - 9 = 1591$.',
          },
          {
            id: '10-8-2-n-quiz2-q3',
            task: 'Hva er $(x + 3)^2 - (x - 3)^2$?',
            options: [
              { id: 'a', text: '$0$', isCorrect: false },
              { id: 'b', text: '$18$', isCorrect: false },
              { id: 'c', text: '$12x$', isCorrect: true },
              { id: 'd', text: '$6x$', isCorrect: false },
            ],
            solution: '$(x^2 + 6x + 9) - (x^2 - 6x + 9) = 6x + 6x = 12x$. Her forsvinner bade $x^2$-leddene og konstantleddene.',
          },
          {
            id: '10-8-2-n-quiz2-q4',
            task: 'Et hagebed har side $x$ m. Eieren utvider med $3$ m i begge retninger. Hvor mye oker arealet?',
            options: [
              { id: 'a', text: '$3x + 9$', isCorrect: false },
              { id: 'b', text: '$6x + 9$', isCorrect: true },
              { id: 'c', text: '$9$', isCorrect: false },
              { id: 'd', text: '$6x$', isCorrect: false },
            ],
            solution: 'Nytt areal: $(x + 3)^2 = x^2 + 6x + 9$. Gammelt areal: $x^2$. Okning: $6x + 9$. De $6x$ kommer fra to rektangler ($3x$ hver) og $9$ fra hjornekvadratet.',
          },
        ],
      },
    },

    {
      id: '10-8-2-n-summary',
      type: 'text',
      content: `## Oppsummering

De tre kvadratsetningene er:

| Setning | Formel |
|---|---|
| Forste kvadratsetning | $(a + b)^2 = a^2 + 2ab + b^2$ |
| Andre kvadratsetning | $(a - b)^2 = a^2 - 2ab + b^2$ |
| Konjugatsetningen | $(a + b)(a - b) = a^2 - b^2$ |

Tips for a huske: I de to forste har svaret **tre ledd** -- ikke glem midtleddet $\\pm 2ab$. I konjugatsetningen er det bare **to ledd** -- midtleddene slar hverandre ut. Siste ledd i forste og andre kvadratsetning er alltid positivt ($b^2$). Alle tre kan vises geometrisk med arealer av kvadrater og rektangler.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3 NARRATIV: Algebraisk divisjon og rasjonale uttrykk
// ============================================================================

export const CHAPTER_10_8_3_NARRATIV: TextbookChapter = {
  id: '10-8-3-narrativ',
  courseId: '10',
  chapterNumber: '8.3',
  title: 'Algebraisk divisjon og rasjonale uttrykk',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av algebraiske broker -- fra a dele polynomer med monomier til a forkorte, addere og multiplisere rasjonale uttrykk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  linkedChapterId: '10-8-3',
  content: [
    {
      id: '10-8-3-n-intro',
      type: 'text',
      content: `## Broker med bokstaver

I de forrige kapitlene larte du a multiplisere polynomer. Na skal vi gjore det motsatte: dele polynomer og arbeide med **algebraiske broker** (ogsa kalt **rasjonale uttrykk**). En algebraisk brok er en brok der teller og/eller nevner inneholder polynomer, for eksempel $\\frac{x + 3}{x - 1}$.

Slike uttrykk dukker opp i mange sammenhenger -- formler for fart, konsentrasjon, okonomi og mye mer. La oss bygge opp ferdighetene steg for steg.`,
    },

    {
      id: '10-8-3-n-section1',
      type: 'text',
      content: `## Dele polynom med monom

Nar vi deler et polynom med et monom, deler vi **hvert ledd i polynomet** for seg:

$$\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$$

For eksempel: $\\frac{6x^3 + 9x^2 - 3x}{3x}$. Vi deler hvert ledd: $\\frac{6x^3}{3x} = 2x^2$, $\\frac{9x^2}{3x} = 3x$, $\\frac{-3x}{3x} = -1$. Svaret er $2x^2 + 3x - 1$ (og vi ma kreve $x \\neq 0$ siden vi ikke kan dele pa null).

Vi bruker potensreglene til a forenkle: $\\frac{x^a}{x^b} = x^{a-b}$. Del koeffisientene for seg og trekk fra eksponentene.

Flere eksempler: $\\frac{8x^2 + 4x}{2x} = 4x + 2$. $\\frac{12x^3 - 6x^2}{3x} = 4x^2 - 2x$. $\\frac{-9x^3 + 6x^2}{-3x^2} = 3x - 2$.`,
    },

    {
      id: '10-8-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-8-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa polynomdivisjon med monom:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-8-3-n-quiz1-q0',
            task: 'Hva er $\\frac{10x^4 + 15x^2 - 5x}{5x}$?',
            options: [
              { id: 'a', text: '$2x^3 + 3x - 1$', isCorrect: true },
              { id: 'b', text: '$2x^4 + 3x^2 - 1$', isCorrect: false },
              { id: 'c', text: '$2x^3 + 3x$', isCorrect: false },
              { id: 'd', text: '$50x^5 + 75x^3 - 25x^2$', isCorrect: false },
            ],
            solution: 'Vi deler hvert ledd: $\\frac{10x^4}{5x} = 2x^3$, $\\frac{15x^2}{5x} = 3x$, $\\frac{-5x}{5x} = -1$. Svaret er $2x^3 + 3x - 1$.',
          },
          {
            id: '10-8-3-n-quiz1-q1',
            task: 'Hva er $\\frac{12x^3 - 6x^2}{3x}$?',
            options: [
              { id: 'a', text: '$4x^3 - 2x^2$', isCorrect: false },
              { id: 'b', text: '$4x - 2$', isCorrect: false },
              { id: 'c', text: '$4x^2 - 2x$', isCorrect: true },
              { id: 'd', text: '$9x^2 - 3x$', isCorrect: false },
            ],
            solution: '$\\frac{12x^3}{3x} = 4x^2$ og $\\frac{-6x^2}{3x} = -2x$. Svaret er $4x^2 - 2x$.',
          },
        ],
      },
    },

    {
      id: '10-8-3-n-section2',
      type: 'text',
      content: `## Forkorte algebraiske broker

For a forkorte en algebraisk brok gjor du to ting: (1) **faktoriser** teller og nevner sa mye som mulig, og (2) **stryk** felles faktorer.

$$\\frac{a \\cdot c}{b \\cdot c} = \\frac{a}{b} \\quad \\text{(nar } c \\neq 0\\text{)}$$

**Viktig regel:** Vi kan bare forkorte **faktorer**, ikke enkeltstaaende ledd! $\\frac{x + 3}{x} \\neq 3$ -- dette er en veldig vanlig feil.

La oss se pa noen eksempler. $\\frac{2x^2 + 6x}{4x}$: vi faktoriserer telleren $= 2x(x + 3)$, sa $\\frac{2x(x + 3)}{4x} = \\frac{x + 3}{2}$ (forkortet med $2x$).

Her kommer kvadratsetningene til nytte! $\\frac{x^2 - 9}{x + 3}$: gjenkjenner du $x^2 - 9$? Det er $x^2 - 3^2$, som vi kan faktorisere med konjugatsetningen: $(x + 3)(x - 3)$. Sa $\\frac{(x + 3)(x - 3)}{x + 3} = x - 3$ (for $x \\neq -3$).

Tilsvarende: $\\frac{x^2 - 4}{x - 2} = \\frac{(x + 2)(x - 2)}{x - 2} = x + 2$. Og det mer avanserte: $\\frac{x^2 - 1}{x^2 + 2x + 1} = \\frac{(x + 1)(x - 1)}{(x + 1)^2} = \\frac{x - 1}{x + 1}$.

Husk: **definisjonsmengden** -- verdiene av $x$ som gjor uttrykket gyldig. Vi kan aldri dele pa null, sa vi ma utelukke verdier som gjor nevneren lik null.`,
    },

    {
      id: '10-8-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-8-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa forkorting av algebraiske broker:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-8-3-n-quiz2-q0',
            task: 'Hva er $\\frac{x^2 - 25}{x + 5}$ forenklet?',
            options: [
              { id: 'a', text: '$x - 5$', isCorrect: true },
              { id: 'b', text: '$x + 5$', isCorrect: false },
              { id: 'c', text: '$x^2 - 5$', isCorrect: false },
              { id: 'd', text: '$x - 25$', isCorrect: false },
            ],
            solution: '$x^2 - 25 = (x + 5)(x - 5)$ (konjugatsetningen). $\\frac{(x + 5)(x - 5)}{x + 5} = x - 5$ for $x \\neq -5$.',
          },
          {
            id: '10-8-3-n-quiz2-q1',
            task: 'Per sier at $\\frac{x^2 + 3x}{x} = x + 3$. Lisa sier svaret er $x^2 + 3$. Hvem har rett?',
            options: [
              { id: 'a', text: 'Lisa', isCorrect: false },
              { id: 'b', text: 'Ingen av dem', isCorrect: false },
              { id: 'c', text: 'Per', isCorrect: true },
              { id: 'd', text: 'Begge', isCorrect: false },
            ],
            solution: 'Per har rett. $x^2 + 3x = x(x + 3)$, sa $\\frac{x(x + 3)}{x} = x + 3$. Lisa har gjort feilen a bare dele forste ledd pa $x$.',
          },
          {
            id: '10-8-3-n-quiz2-q2',
            task: 'Hva er $\\frac{3x^2}{6x}$ forenklet?',
            options: [
              { id: 'a', text: '$3x$', isCorrect: false },
              { id: 'b', text: '$\\frac{x}{2}$', isCorrect: true },
              { id: 'c', text: '$\\frac{1}{2x}$', isCorrect: false },
              { id: 'd', text: '$2x$', isCorrect: false },
            ],
            solution: '$\\frac{3x^2}{6x} = \\frac{3}{6} \\cdot \\frac{x^2}{x} = \\frac{1}{2} \\cdot x = \\frac{x}{2}$.',
          },
        ],
      },
    },

    {
      id: '10-8-3-n-section3',
      type: 'text',
      content: `## De fire regneartene med algebraiske broker

Nar du skal **addere eller subtrahere** algebraiske broker, trenger du fellesnevner -- akkurat som med vanlige broker. Med lik nevner legger du bare sammen tellerne: $\\frac{3}{x} + \\frac{5}{x} = \\frac{8}{x}$. Med ulik nevner ma du forst finne fellesnevneren.

For eksempel: $\\frac{2}{x} + \\frac{3}{x + 1}$. Fellesnevneren er $x(x + 1)$. Vi utvider: $\\frac{2(x + 1)}{x(x + 1)} + \\frac{3x}{x(x + 1)} = \\frac{2x + 2 + 3x}{x(x + 1)} = \\frac{5x + 2}{x(x + 1)}$.

Et elegant eksempel: $\\frac{x + 1}{2x} + \\frac{x - 1}{2x} = \\frac{(x + 1) + (x - 1)}{2x} = \\frac{2x}{2x} = 1$.

For **multiplikasjon** ganger du teller med teller og nevner med nevner: $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$. Tips: faktoriser og forkort *for* du ganger! $\\frac{x^2 - 4}{x + 1} \\cdot \\frac{x + 1}{x - 2} = \\frac{(x + 2)(x - 2)}{x + 1} \\cdot \\frac{x + 1}{x - 2} = x + 2$.

For **divisjon** snur du den andre broken og multipliserer: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$. $\\frac{x}{x + 3} \\div \\frac{2x}{x^2 - 9}$: snu og faktoriser. $x^2 - 9 = (x + 3)(x - 3)$. $\\frac{x}{x + 3} \\cdot \\frac{(x + 3)(x - 3)}{2x} = \\frac{x - 3}{2}$.`,
    },

    {
      id: '10-8-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-8-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa regning med algebraiske broker:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-8-3-n-quiz3-q0',
            task: 'Hva er $\\frac{3}{x} + \\frac{5}{x}$?',
            options: [
              { id: 'a', text: '$\\frac{15}{x^2}$', isCorrect: false },
              { id: 'b', text: '$\\frac{8}{2x}$', isCorrect: false },
              { id: 'c', text: '$\\frac{8}{x}$', isCorrect: true },
              { id: 'd', text: '$\\frac{8}{x^2}$', isCorrect: false },
            ],
            solution: 'Lik nevner: $\\frac{3 + 5}{x} = \\frac{8}{x}$. Vi legger bare sammen tellerne.',
          },
          {
            id: '10-8-3-n-quiz3-q1',
            task: 'Hva er $\\frac{3x}{4} \\cdot \\frac{8}{x^2}$ forenklet?',
            options: [
              { id: 'a', text: '$\\frac{24}{4x^2}$', isCorrect: false },
              { id: 'b', text: '$\\frac{6}{x}$', isCorrect: true },
              { id: 'c', text: '$\\frac{24x}{4x^2}$', isCorrect: false },
              { id: 'd', text: '$6x$', isCorrect: false },
            ],
            solution: '$\\frac{3x \\cdot 8}{4 \\cdot x^2} = \\frac{24x}{4x^2} = \\frac{6}{x}$.',
          },
          {
            id: '10-8-3-n-quiz3-q2',
            task: 'Hva er $\\frac{1}{x - 2} + \\frac{1}{x + 2} - \\frac{4}{x^2 - 4}$ forenklet?',
            options: [
              { id: 'a', text: '$\\frac{2}{x - 2}$', isCorrect: false },
              { id: 'b', text: '$\\frac{2}{x + 2}$', isCorrect: true },
              { id: 'c', text: '$0$', isCorrect: false },
              { id: 'd', text: '$\\frac{2x}{x^2 - 4}$', isCorrect: false },
            ],
            solution: '$x^2 - 4 = (x - 2)(x + 2)$, sa fellesnevner er $(x - 2)(x + 2)$. Teller: $(x + 2) + (x - 2) - 4 = 2x - 4 = 2(x - 2)$. Forkorter: $\\frac{2(x - 2)}{(x - 2)(x + 2)} = \\frac{2}{x + 2}$.',
          },
        ],
      },
    },

    {
      id: '10-8-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har laert a regne med algebraiske broker (rasjonale uttrykk):

1. **Dele polynom med monom**: Del hvert ledd for seg -- $\\frac{a + b}{c} = \\frac{a}{c} + \\frac{b}{c}$
2. **Forkorte**: Faktoriser teller og nevner, stryk felles faktorer
3. **Addere/subtrahere**: Finn fellesnevner, utvid brokene, legg sammen tellerne
4. **Multiplisere**: Teller ganger teller, nevner ganger nevner -- forkort gjerne forst
5. **Dividere**: Snu den andre broken og multipliser

Viktige paminnnelser: vi kan bare forkorte *faktorer*, ikke ledd. Vi kan aldri dele pa null -- sjekk definisjonsmengden. Og bruk kvadratsetningene (spesielt $a^2 - b^2 = (a + b)(a - b)$) aktivt for a faktorisere.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_10_NARRATIV_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_10_8_1_NARRATIV,
  CHAPTER_10_8_2_NARRATIV,
  CHAPTER_10_8_3_NARRATIV,
];
