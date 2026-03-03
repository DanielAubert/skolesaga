/**
 * Matematikk 9. klasse - Del 7: Mønster og generalisering (KM241)
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Kapittel 7.1: Tallmønstre og tallfølger
 * Kapittel 7.2: Figurtall og geometriske mønstre
 * Kapittel 7.3: Generalisering med algebra
 * Kapittel 7.4: Rekursive og eksplisitte formler
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1: Tallmønstre og tallfølger
// LK20 KM241: Utforske og beskrive strukturar og forandringar i geometriske
//              mønster og tallmønster med figurar, ord og formlar
// ============================================================================

export const CHAPTER_9_7_1: TextbookChapter = {
  id: '9-7-1',
  courseId: '9',
  chapterNumber: '7.1',
  title: 'Tallmønstre og tallfølger',
  description: 'Lær å gjenkjenne og beskrive mønstre i tallfølger, inkludert aritmetiske og geometriske følger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive strukturar og forandringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '9-7-1-intro',
      type: 'text',
      content: `## Tallmønstre og tallfølger

Mennesker har alltid vært fascinert av mønstre. Vi finner mønstre overalt: i naturen, i musikk, i kunst og i matematikk. Når vi oppdager et mønster, kan vi forutsi hva som kommer videre. Akkurat dette er en av matematikkens superkrefter.

En **tallfølge** er en ordnet liste med tall som følger et bestemt mønster eller en regel. Hvert tall i følgen kaller vi et **ledd**.

For eksempel:
- $2, 4, 6, 8, 10, \\ldots$ (partallene)
- $1, 4, 9, 16, 25, \\ldots$ (kvadrattallene)
- $1, 1, 2, 3, 5, 8, 13, \\ldots$ (Fibonacci-tallene)

I dette kapittelet skal du lære å:
- Gjenkjenne mønstre i tallfølger
- Skille mellom aritmetiske og geometriske følger
- Finne neste ledd i en følge
- Beskrive mønsteret med ord og enkle formler`,
    },

    // ========== DEFINISJON: TALLFØLGE ==========
    {
      id: '9-7-1-def-1',
      type: 'definition',
      title: 'Tallfølge',
      content: `En **tallfølge** er en ordnet rekke med tall som følger en bestemt regel.

Vi bruker bokstaven $a$ med indeks for å betegne leddene:

$$a_1, \\, a_2, \\, a_3, \\, a_4, \\, \\ldots$$

Her er $a_1$ det første leddet, $a_2$ det andre leddet, og så videre. $a_n$ betegner det $n$-te leddet (et vilkårlig ledd i følgen).

**Eksempel:** I følgen $3, 7, 11, 15, 19, \\ldots$ er:
- $a_1 = 3$ (første ledd)
- $a_2 = 7$ (andre ledd)
- $a_3 = 11$ (tredje ledd)
- og så videre`,
    },

    // ========== DEFINISJON: ARITMETISK FØLGE ==========
    {
      id: '9-7-1-def-2',
      type: 'definition',
      title: 'Aritmetisk følge',
      content: `En **aritmetisk følge** er en tallfølge der differansen mellom hvert påfølgende ledd er konstant. Denne faste differansen kaller vi **differansen** $d$.

$$d = a_{n+1} - a_n$$

**Eksempel:** Følgen $5, 8, 11, 14, 17, \\ldots$

Her er differansen $d = 8 - 5 = 3$. Vi legger til $3$ for hvert steg.

I en aritmetisk følge kan vi finne det $n$-te leddet med formelen:

$$a_n = a_1 + (n - 1) \\cdot d$$

der $a_1$ er det første leddet og $d$ er differansen.`,
    },

    // ========== DEFINISJON: GEOMETRISK FØLGE ==========
    {
      id: '9-7-1-def-3',
      type: 'definition',
      title: 'Geometrisk følge',
      content: `En **geometrisk følge** er en tallfølge der forholdet (kvotienten) mellom hvert påfølgende ledd er konstant. Denne faste kvotienten kaller vi **kvotienten** $k$.

$$k = \\frac{a_{n+1}}{a_n}$$

**Eksempel:** Følgen $2, 6, 18, 54, 162, \\ldots$

Her er kvotienten $k = \\frac{6}{2} = 3$. Vi ganger med $3$ for hvert steg.

I en geometrisk følge kan vi finne det $n$-te leddet med formelen:

$$a_n = a_1 \\cdot k^{n-1}$$

der $a_1$ er det første leddet og $k$ er kvotienten.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '9-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Aritmetisk følge',
      problem: 'En tallfølge starter med $4, 9, 14, 19, \\ldots$\n\na) Vis at dette er en aritmetisk følge.\nb) Finn de tre neste leddene.\nc) Finn det 20. leddet i følgen.',
      solution: `**a) Vis at følgen er aritmetisk:**

Vi regner ut differansen mellom hvert par av påfølgende ledd:

$9 - 4 = 5$
$14 - 9 = 5$
$19 - 14 = 5$

Differansen er konstant lik $d = 5$, så følgen er aritmetisk.

**b) De tre neste leddene:**

Vi legger til $5$ for hvert nytt ledd:

$a_5 = 19 + 5 = 24$
$a_6 = 24 + 5 = 29$
$a_7 = 29 + 5 = 34$

De tre neste leddene er $24, 29, 34$.

**c) Det 20. leddet:**

Vi bruker formelen $a_n = a_1 + (n-1) \\cdot d$:

$$a_{20} = 4 + (20 - 1) \\cdot 5 = 4 + 19 \\cdot 5 = 4 + 95 = 99$$

Det 20. leddet er $99$.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '9-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Geometrisk følge',
      problem: 'En bakteriekultur dobler seg hver time. Det starter med 50 bakterier.\n\na) Skriv opp de fem første leddene i tallfølgen.\nb) Er dette en aritmetisk eller geometrisk følge? Begrunn svaret.\nc) Hvor mange bakterier er det etter 10 timer?',
      solution: `**a) De fem første leddene:**

| Time | Antall bakterier |
|------|-----------------|
| $0$ | $50$ |
| $1$ | $100$ |
| $2$ | $200$ |
| $3$ | $400$ |
| $4$ | $800$ |

Tallfølgen er $50, 100, 200, 400, 800, \\ldots$

**b) Aritmetisk eller geometrisk?**

Vi sjekker differansen: $100 - 50 = 50$, men $200 - 100 = 100$. Differansen er ikke konstant, så det er **ikke** aritmetisk.

Vi sjekker kvotienten: $\\frac{100}{50} = 2$, $\\frac{200}{100} = 2$, $\\frac{400}{200} = 2$. Kvotienten er konstant $k = 2$, så dette er en **geometrisk følge**.

**c) Etter 10 timer:**

Med $a_1 = 50$ og $k = 2$ bruker vi formelen $a_n = a_1 \\cdot k^{n-1}$:

$$a_{11} = 50 \\cdot 2^{10} = 50 \\cdot 1024 = 51\\,200$$

Etter 10 timer (det 11. leddet, siden vi starter fra time 0) er det $51\\,200$ bakterier.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '9-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Ukjent mønster',
      problem: 'Se på tallfølgen $1, 4, 9, 16, 25, \\ldots$\n\na) Hva er mønsteret?\nb) Finn det neste leddet.\nc) Hva er det 12. leddet?',
      solution: `**a) Mønsteret:**

La oss se på tallene: $1, 4, 9, 16, 25, \\ldots$

Vi gjenkjenner dette som kvadrattallene:
$1 = 1^2$, $4 = 2^2$, $9 = 3^2$, $16 = 4^2$, $25 = 5^2$

Mønsteret er $a_n = n^2$.

**Merk:** Dette er verken en aritmetisk eller geometrisk følge! Differansene er $3, 5, 7, 9, \\ldots$ (ikke konstant) og kvotientene er $4, 2{,}25, 1{,}78, \\ldots$ (heller ikke konstant).

**b) Det neste leddet:**

$a_6 = 6^2 = 36$

**c) Det 12. leddet:**

$a_{12} = 12^2 = 144$`,
    },

    // ========== OPPGAVER ==========

    {
      id: '9-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-7-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn de neste tre tallene i følgen: $2, 5, 8, 11, \\ldots$',
        solution: '$14, 17, 20$. Mønsteret er $+3$ for hvert steg. Dette er en aritmetisk følge med $d = 3$.',
        hints: ['Se på forskjellen mellom hvert tall.'],
      },
    },

    {
      id: '9-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-7-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn de neste tre tallene i følgen: $100, 90, 80, 70, \\ldots$',
        solution: '$60, 50, 40$. Mønsteret er $-10$ for hvert steg. Aritmetisk følge med $d = -10$.',
        hints: ['Hva skjer med tallene? Øker de eller minker de?'],
      },
    },

    {
      id: '9-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-7-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om følgen $3, 6, 12, 24, 48, \\ldots$ er aritmetisk eller geometrisk. Begrunn svaret ditt.',
        solution: 'Geometrisk følge. Kvotienten er $k = \\frac{6}{3} = 2$. Hvert ledd er det dobbelte av det forrige. Differansene er $3, 6, 12, 24$ (ikke konstant), så det er ikke aritmetisk.',
        hints: ['Sjekk om differansen mellom leddene er konstant (aritmetisk) eller om forholdet mellom leddene er konstant (geometrisk).'],
      },
    },

    {
      id: '9-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-7-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En aritmetisk følge har $a_1 = 7$ og $d = 4$.\n\na) Skriv opp de fem første leddene.\nb) Finn $a_{10}$.\nc) Finn $a_{50}$.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv opp de fem første leddene.',
            solution: '$7, 11, 15, 19, 23$. Vi legger til $4$ for hvert steg.',
          },
          {
            label: 'b',
            task: 'Finn $a_{10}$.',
            solution: '$a_{10} = 7 + (10 - 1) \\cdot 4 = 7 + 36 = 43$',
          },
          {
            label: 'c',
            task: 'Finn $a_{50}$.',
            solution: '$a_{50} = 7 + (50 - 1) \\cdot 4 = 7 + 196 = 203$',
          },
        ],
        solution: 'a) $7, 11, 15, 19, 23$. b) $a_{10} = 43$. c) $a_{50} = 203$.',
        hints: ['Bruk formelen $a_n = a_1 + (n - 1) \\cdot d$.'],
      },
    },

    {
      id: '9-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-7-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En geometrisk følge har $a_1 = 5$ og $k = 3$.\n\na) Skriv opp de fire første leddene.\nb) Finn $a_6$.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv opp de fire første leddene.',
            solution: '$5, 15, 45, 135$. Vi ganger med $3$ for hvert steg.',
          },
          {
            label: 'b',
            task: 'Finn $a_6$.',
            solution: '$a_6 = 5 \\cdot 3^{6-1} = 5 \\cdot 3^5 = 5 \\cdot 243 = 1215$',
          },
        ],
        solution: 'a) $5, 15, 45, 135$. b) $a_6 = 1215$.',
        hints: ['Bruk formelen $a_n = a_1 \\cdot k^{n-1}$.'],
      },
    },

    {
      id: '9-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-7-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en aritmetisk følge er $a_3 = 14$ og $a_7 = 30$. Finn $a_1$ og $d$.',
        solution: 'Vi vet at $a_7 - a_3 = 4d$, altså $30 - 14 = 4d$, som gir $d = 4$. Da er $a_1 = a_3 - 2d = 14 - 8 = 6$. Følgen starter på $6$ med differanse $4$.',
        hints: [
          'Bruk at $a_7 = a_3 + 4d$ for å finne $d$ først.',
          'Når du har $d$, bruk $a_1 = a_3 - 2d$ for å finne $a_1$.',
        ],
      },
    },

    {
      id: '9-7-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-7-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bestem om hver følge er aritmetisk, geometrisk, eller ingen av delene. Begrunn svaret.\n\na) $1, 3, 9, 27, 81, \\ldots$\nb) $2, 5, 10, 17, 26, \\ldots$\nc) $50, 45, 40, 35, 30, \\ldots$\nd) $1, 1, 2, 3, 5, 8, \\ldots$',
        subTasks: [
          {
            label: 'a',
            task: '$1, 3, 9, 27, 81, \\ldots$',
            solution: 'Geometrisk med $k = 3$. Forholdet mellom hvert ledd er konstant: $\\frac{3}{1} = \\frac{9}{3} = \\frac{27}{9} = 3$.',
          },
          {
            label: 'b',
            task: '$2, 5, 10, 17, 26, \\ldots$',
            solution: 'Ingen av delene. Differansene er $3, 5, 7, 9$ (ikke konstant). Mønsteret er $a_n = n^2 + 1$.',
          },
          {
            label: 'c',
            task: '$50, 45, 40, 35, 30, \\ldots$',
            solution: 'Aritmetisk med $d = -5$. Differansen mellom hvert ledd er konstant: $45 - 50 = 40 - 45 = -5$.',
          },
          {
            label: 'd',
            task: '$1, 1, 2, 3, 5, 8, \\ldots$',
            solution: 'Ingen av delene. Dette er Fibonacci-følgen: hvert ledd er summen av de to forrige ($1 + 1 = 2$, $1 + 2 = 3$, $2 + 3 = 5$ osv.).',
          },
        ],
        solution: 'a) Geometrisk ($k = 3$). b) Ingen av delene ($a_n = n^2 + 1$). c) Aritmetisk ($d = -5$). d) Ingen av delene (Fibonacci).',
        hints: ['Sjekk både differanse og kvotient for hver følge.'],
      },
    },

    {
      id: '9-7-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-7-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Anna sparer penger. Den første måneden sparer hun 200 kr, og hver måned øker hun beløpet med 50 kr.\n\na) Hvor mye sparer hun den 6. måneden?\nb) Hvor mye har hun spart totalt etter 12 måneder?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye sparer hun den 6. måneden?',
            solution: 'Dette er en aritmetisk følge med $a_1 = 200$ og $d = 50$. $a_6 = 200 + (6-1) \\cdot 50 = 200 + 250 = 450$ kr.',
          },
          {
            label: 'b',
            task: 'Hvor mye har hun spart totalt etter 12 måneder?',
            solution: 'Vi finner $a_{12} = 200 + 11 \\cdot 50 = 750$ kr. Summen av en aritmetisk følge: $S_{12} = \\frac{12 \\cdot (200 + 750)}{2} = \\frac{12 \\cdot 950}{2} = 5700$ kr.',
          },
        ],
        solution: 'a) 450 kr. b) 5700 kr totalt.',
        hints: [
          'Beløpene utgjør en aritmetisk følge: 200, 250, 300, ...',
          'For total sparing, legg sammen alle 12 leddene. Tips: Summen av en aritmetisk følge er $S_n = \\frac{n \\cdot (a_1 + a_n)}{2}$.',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '9-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Tallfølger
- En **tallfølge** er en ordnet rekke med tall som følger en bestemt regel
- Leddene betegnes $a_1, a_2, a_3, \\ldots$

### Aritmetisk følge
- Konstant **differanse** $d$ mellom leddene
- Formel: $a_n = a_1 + (n - 1) \\cdot d$
- Eksempel: $3, 7, 11, 15, \\ldots$ ($d = 4$)

### Geometrisk følge
- Konstant **kvotient** $k$ mellom leddene
- Formel: $a_n = a_1 \\cdot k^{n-1}$
- Eksempel: $2, 6, 18, 54, \\ldots$ ($k = 3$)

### Tips
- Sjekk differansene først for å se om følgen er aritmetisk
- Sjekk kvotientene for å se om følgen er geometrisk
- Noen følger er verken aritmetiske eller geometriske (f.eks. kvadrattall, Fibonacci)`,
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-7-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-7-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-7-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Avgjør om følgene er aritmetiske, geometriske eller ingen av delene. Finn i så fall differansen $d$ eller kvotienten $k$.',
            subTasks: [
              { label: 'a', task: '$3, 7, 11, 15, 19, \\ldots$', solution: 'Aritmetisk med $d = 4$' },
              { label: 'b', task: '$2, 6, 18, 54, 162, \\ldots$', solution: 'Geometrisk med $k = 3$' },
              { label: 'c', task: '$100, 90, 80, 70, 60, \\ldots$', solution: 'Aritmetisk med $d = -10$' },
              { label: 'd', task: '$5, 10, 20, 40, 80, \\ldots$', solution: 'Geometrisk med $k = 2$' },
              { label: 'e', task: '$1, 4, 9, 16, 25, \\ldots$', solution: 'Ingen av delene (kvadrattallene)' },
              { label: 'f', task: '$81, 27, 9, 3, 1, \\ldots$', solution: 'Geometrisk med $k = \\frac{1}{3}$' },
            ],
            solution: 'a) Aritmetisk, $d = 4$ b) Geometrisk, $k = 3$ c) Aritmetisk, $d = -10$ d) Geometrisk, $k = 2$ e) Ingen av delene f) Geometrisk, $k = \\frac{1}{3}$',
            hideInlineSolution: true,
            hints: ['Sjekk om differansen mellom naboverdier er konstant (aritmetisk) eller om kvotienten er konstant (geometrisk).'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-7-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn de tre neste leddene i hver tallfølge.',
            subTasks: [
              { label: 'a', task: '$4, 9, 14, 19, \\ldots$', solution: '$24, 29, 34$ (aritmetisk, $d = 5$)' },
              { label: 'b', task: '$1, 3, 9, 27, \\ldots$', solution: '$81, 243, 729$ (geometrisk, $k = 3$)' },
              { label: 'c', task: '$50, 43, 36, 29, \\ldots$', solution: '$22, 15, 8$ (aritmetisk, $d = -7$)' },
              { label: 'd', task: '$1000, 500, 250, 125, \\ldots$', solution: '$62{,}5, \\; 31{,}25, \\; 15{,}625$ (geometrisk, $k = 0{,}5$)' },
              { label: 'e', task: '$-8, -3, 2, 7, \\ldots$', solution: '$12, 17, 22$ (aritmetisk, $d = 5$)' },
              { label: 'f', task: '$2, 6, 12, 20, 30, \\ldots$', solution: '$42, 56, 72$ (differansene øker med $2$ for hvert steg)' },
            ],
            solution: 'a) $24, 29, 34$ b) $81, 243, 729$ c) $22, 15, 8$ d) $62{,}5, \\; 31{,}25, \\; 15{,}625$ e) $12, 17, 22$ f) $42, 56, 72$',
            hideInlineSolution: true,
            hints: ['Finn mønsteret ved å se på differansene eller kvotientene mellom påfølgende ledd.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-7-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk formelen $a_n = a_1 + (n - 1) \\cdot d$ til å finne det etterspurte leddet i den aritmetiske følgen.',
            subTasks: [
              { label: 'a', task: '$a_1 = 5$, $d = 3$. Finn $a_{10}$.', solution: '$a_{10} = 5 + (10 - 1) \\cdot 3 = 5 + 27 = 32$' },
              { label: 'b', task: '$a_1 = 100$, $d = -4$. Finn $a_{20}$.', solution: '$a_{20} = 100 + (20 - 1) \\cdot (-4) = 100 - 76 = 24$' },
              { label: 'c', task: '$a_1 = -7$, $d = 6$. Finn $a_{15}$.', solution: '$a_{15} = -7 + (15 - 1) \\cdot 6 = -7 + 84 = 77$' },
              { label: 'd', task: '$a_1 = 2{,}5$, $d = 1{,}5$. Finn $a_{12}$.', solution: '$a_{12} = 2{,}5 + (12 - 1) \\cdot 1{,}5 = 2{,}5 + 16{,}5 = 19$' },
              { label: 'e', task: 'En følge begynner med $a_1 = 8$ og $a_2 = 13$. Finn $a_{50}$.', solution: '$d = 13 - 8 = 5$. $a_{50} = 8 + 49 \\cdot 5 = 8 + 245 = 253$' },
              { label: 'f', task: 'I en aritmetisk følge er $a_5 = 22$ og $d = 4$. Finn $a_1$.', solution: '$a_5 = a_1 + 4d \\Rightarrow 22 = a_1 + 16 \\Rightarrow a_1 = 6$' },
            ],
            solution: 'a) $32$ b) $24$ c) $77$ d) $19$ e) $253$ f) $a_1 = 6$',
            hideInlineSolution: true,
            hints: ['Sett inn verdiene i formelen $a_n = a_1 + (n - 1) \\cdot d$ og regn ut.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-7-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk formelen $a_n = a_1 \\cdot k^{n-1}$ for geometriske følger.',
            subTasks: [
              { label: 'a', task: '$a_1 = 3$, $k = 2$. Finn $a_8$.', solution: '$a_8 = 3 \\cdot 2^7 = 3 \\cdot 128 = 384$' },
              { label: 'b', task: '$a_1 = 1000$, $k = 0{,}5$. Finn $a_6$.', solution: '$a_6 = 1000 \\cdot 0{,}5^5 = 1000 \\cdot 0{,}03125 = 31{,}25$' },
              { label: 'c', task: 'En bakteriekultur dobles hver time. Ved start er det $500$ bakterier. Hvor mange er det etter $10$ timer?', solution: '$a_{11} = 500 \\cdot 2^{10} = 500 \\cdot 1024 = 512\\,000$' },
              { label: 'd', task: 'En ball slippes fra $2$ m høyde og spretter tilbake til $\\frac{3}{4}$ av forrige høyde. Hvor høyt spretter den etter det 5. sprettet?', solution: '$h_5 = 2 \\cdot \\left(\\frac{3}{4}\\right)^5 = 2 \\cdot \\frac{243}{1024} \\approx 0{,}47 \\text{ m}$' },
              { label: 'e', task: 'I en geometrisk følge er $a_1 = 4$ og $a_4 = 108$. Finn kvotienten $k$.', solution: '$a_4 = a_1 \\cdot k^3 \\Rightarrow 108 = 4 \\cdot k^3 \\Rightarrow k^3 = 27 \\Rightarrow k = 3$' },
              { label: 'f', task: 'Et beløp på $10\\,000$ kr vokser med $5\\%$ per år. Hvor stort er beløpet etter $3$ år?', solution: '$a_4 = 10\\,000 \\cdot 1{,}05^3 = 10\\,000 \\cdot 1{,}157625 = 11\\,576{,}25$ kr' },
            ],
            solution: 'a) $384$ b) $31{,}25$ c) $512\\,000$ d) $\\approx 0{,}47$ m e) $k = 3$ f) $11\\,576{,}25$ kr',
            hideInlineSolution: true,
            hints: ['Husk at $k$ er det tallet du ganger med for hvert steg. I praktiske oppgaver kan det hjelpe å tenke på hva som skjer fra et ledd til det neste.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-7-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bestem om følgen er aritmetisk eller geometrisk, finn formelen for $a_n$, og bruk den til å svare på spørsmålet.',
            subTasks: [
              { label: 'a', task: '$6, 10, 14, 18, \\ldots$ Finn $a_{30}$.', solution: 'Aritmetisk, $d = 4$, $a_1 = 6$. $a_n = 6 + (n-1) \\cdot 4 = 4n + 2$. $a_{30} = 4 \\cdot 30 + 2 = 122$' },
              { label: 'b', task: '$5, 15, 45, 135, \\ldots$ Finn $a_7$.', solution: 'Geometrisk, $k = 3$, $a_1 = 5$. $a_n = 5 \\cdot 3^{n-1}$. $a_7 = 5 \\cdot 3^6 = 5 \\cdot 729 = 3645$' },
              { label: 'c', task: '$200, 185, 170, 155, \\ldots$ Når blir leddet negativt for første gang?', solution: 'Aritmetisk, $d = -15$, $a_1 = 200$. $a_n = 200 - 15(n-1) = 215 - 15n$. $a_n < 0$ når $215 - 15n < 0 \\Rightarrow n > 14{,}\\overline{3}$. Første negative ledd er $a_{15} = 215 - 225 = -10$.' },
              { label: 'd', task: '$1, 2, 4, 8, \\ldots$ Hvilket ledd passerer $1\\,000\\,000$ først?', solution: 'Geometrisk, $k = 2$. $a_n = 2^{n-1}$. Vi trenger $2^{n-1} > 1\\,000\\,000$. $2^{19} = 524\\,288$ og $2^{20} = 1\\,048\\,576$. Svar: $a_{21} = 2^{20} = 1\\,048\\,576$.' },
            ],
            solution: 'a) $122$ b) $3645$ c) $a_{15} = -10$ d) $a_{21}$',
            hideInlineSolution: true,
            hints: ['Sjekk differansene og kvotientene for å bestemme type. Sett deretter opp formelen og løs for det ukjente.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-7-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Løs sammensatte oppgaver om tallfølger.',
            subTasks: [
              { label: 'a', task: 'I en aritmetisk følge er $a_3 = 14$ og $a_7 = 30$. Finn $a_1$, $d$ og $a_{20}$.', solution: '$a_7 - a_3 = 4d \\Rightarrow 30 - 14 = 4d \\Rightarrow d = 4$. $a_1 = a_3 - 2d = 14 - 8 = 6$. $a_{20} = 6 + 19 \\cdot 4 = 82$.' },
              { label: 'b', task: 'I en geometrisk følge er $a_2 = 12$ og $a_5 = 324$. Finn $k$ og $a_1$.', solution: '$\\frac{a_5}{a_2} = k^3 \\Rightarrow \\frac{324}{12} = 27 \\Rightarrow k = 3$. $a_1 = \\frac{a_2}{k} = \\frac{12}{3} = 4$.' },
              { label: 'c', task: 'Summen av de tre første leddene i en aritmetisk følge er $36$, og det fjerde leddet er $18$. Finn følgen.', solution: '$a_1 + a_2 + a_3 = 36$. I en aritmetisk følge er summen $3 \\cdot a_2 = 36 \\Rightarrow a_2 = 12$. $a_4 = 18 = a_2 + 2d \\Rightarrow d = 3$. $a_1 = 12 - 3 = 9$. Følgen: $9, 12, 15, 18, \\ldots$' },
              { label: 'd', task: 'En aritmetisk og en geometrisk følge har begge $a_1 = 1$ og $a_4 = 8$. Finn $a_6$ for begge følgene. Hvilken følge vokser raskest?', solution: 'Aritmetisk: $a_4 = 1 + 3d = 8 \\Rightarrow d = \\frac{7}{3}$. $a_6 = 1 + 5 \\cdot \\frac{7}{3} = 1 + \\frac{35}{3} = \\frac{38}{3} \\approx 12{,}67$.\n\nGeometrisk: $a_4 = k^3 = 8 \\Rightarrow k = 2$. $a_6 = 1 \\cdot 2^5 = 32$.\n\nDen geometriske følgen vokser raskest.' },
            ],
            solution: 'a) $a_1 = 6$, $d = 4$, $a_{20} = 82$ b) $k = 3$, $a_1 = 4$ c) $9, 12, 15, 18, \\ldots$ d) Aritmetisk: $a_6 \\approx 12{,}67$; Geometrisk: $a_6 = 32$',
            hideInlineSolution: true,
            hints: ['Bruk sammenhengene mellom leddene og formlene for å sette opp ligninger. To ukjente krever to ligninger.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Figurtall og geometriske mønstre
// LK20 KM241: Utforske og beskrive strukturar og forandringar i geometriske
//              mønster og tallmønster med figurar, ord og formlar
// ============================================================================

export const CHAPTER_9_7_2: TextbookChapter = {
  id: '9-7-2',
  courseId: '9',
  chapterNumber: '7.2',
  title: 'Figurtall og geometriske mønstre',
  description: 'Utforsk figurtall som trekant-, kvadrat- og femkanttall, og lær å se sammenhengen mellom figurer og tallfølger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive strukturar og forandringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '9-7-2-intro',
      type: 'text',
      content: `## Figurtall og geometriske mønstre

Noen tallfølger kan vi se for oss som figurer bygget opp av prikker, ruter eller andre former. Slike tall kaller vi **figurtall**. Ved å studere hvordan figurene vokser, kan vi oppdage mønstre og finne formler som beskriver dem.

Figurtall har blitt studert helt tilbake til antikkens Hellas. Pythagoras og hans tilhengere var spesielt opptatt av tall som kunne ordnes i geometriske figurer.

I dette kapittelet skal du lære om:
- Trekanttall, kvadrattall og femkanttall
- Hvordan du bygger opp figurtall steg for steg
- Sammenhengen mellom figurens form og formelen
- Hvordan du bruker figurer til å finne generelle formler`,
    },

    // ========== DEFINISJON: TREKANTTALL ==========
    {
      id: '9-7-2-def-1',
      type: 'definition',
      title: 'Trekanttall',
      content: `**Trekanttallene** er tall som kan ordnes som prikker i en likesidet trekant:

$$T_1 = 1, \\quad T_2 = 3, \\quad T_3 = 6, \\quad T_4 = 10, \\quad T_5 = 15, \\quad \\ldots$$

Figur 1: $\\bullet$ (1 prikk)
Figur 2: 3 prikker i en trekant
Figur 3: 6 prikker i en trekant
Figur 4: 10 prikker i en trekant

Mønsteret: For hvert steg legger vi til en ny rad nederst. Rad $n$ har $n$ prikker.

$$T_n = 1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$

**Eksempler:**
- $T_5 = \\frac{5 \\cdot 6}{2} = 15$
- $T_{10} = \\frac{10 \\cdot 11}{2} = 55$
- $T_{100} = \\frac{100 \\cdot 101}{2} = 5050$`,
    },

    // ========== DEFINISJON: KVADRATTALL ==========
    {
      id: '9-7-2-def-2',
      type: 'definition',
      title: 'Kvadrattall',
      content: `**Kvadrattallene** er tall som kan ordnes som prikker i et kvadrat:

$$K_1 = 1, \\quad K_2 = 4, \\quad K_3 = 9, \\quad K_4 = 16, \\quad K_5 = 25, \\quad \\ldots$$

Mønsteret: Figur $n$ er et $n \\times n$ kvadrat.

$$K_n = n^2$$

**En fin sammenheng:** Vi kan bygge opp et kvadrattall ved å legge til oddetall:

$K_1 = 1$
$K_2 = 1 + 3 = 4$
$K_3 = 1 + 3 + 5 = 9$
$K_4 = 1 + 3 + 5 + 7 = 16$

Altså: summen av de $n$ første oddetallene er $n^2$.`,
    },

    // ========== DEFINISJON: FEMKANTTALL ==========
    {
      id: '9-7-2-def-3',
      type: 'definition',
      title: 'Femkanttall (pentagonale tall)',
      content: `**Femkanttallene** er tall som kan ordnes som prikker i en femkant (pentagon):

$$P_1 = 1, \\quad P_2 = 5, \\quad P_3 = 12, \\quad P_4 = 22, \\quad P_5 = 35, \\quad \\ldots$$

Forskjellene mellom leddene er: $4, 7, 10, 13, \\ldots$ (øker med $3$ hver gang).

Formelen for det $n$-te femkanttallet er:

$$P_n = \\frac{n(3n - 1)}{2}$$

**Eksempler:**
- $P_3 = \\frac{3(3 \\cdot 3 - 1)}{2} = \\frac{3 \\cdot 8}{2} = 12$
- $P_5 = \\frac{5(3 \\cdot 5 - 1)}{2} = \\frac{5 \\cdot 14}{2} = 35$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '9-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Trekanttall i praksis',
      problem: 'Emilie stabler bokser i en pyramideform. Nederste rad har 8 bokser, neste har 7, så 6, og så videre helt opp til 1 boks på toppen.\n\na) Hvor mange bokser bruker hun totalt?\nb) Hvilket trekanttall er dette?',
      solution: `**a) Totalt antall bokser:**

Vi legger sammen alle radene:

$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = \\frac{8 \\cdot 9}{2} = 36$

Emilie bruker **36 bokser** totalt.

**b) Hvilket trekanttall:**

$T_8 = \\frac{8 \\cdot 9}{2} = 36$

Dette er det **8. trekanttallet**.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '9-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Fra figur til formel',
      problem: 'Se på følgende figurer bygget av fyrstikker:\n\n- Figur 1: En enkelt firkant (4 fyrstikker)\n- Figur 2: To firkanter ved siden av hverandre (7 fyrstikker)\n- Figur 3: Tre firkanter ved siden av hverandre (10 fyrstikker)\n\na) Tegn figur 4 og tell antall fyrstikker.\nb) Finn en formel for antall fyrstikker i figur $n$.\nc) Hvor mange fyrstikker trengs for figur 20?',
      solution: `**a) Figur 4:**

Figur 4 har fire firkanter ved siden av hverandre. De deler sider, så vi trenger:

$4 + 3 + 3 + 3 = 13$ fyrstikker

**b) Finn formelen:**

La oss se på mønsteret:

| Figur $n$ | Fyrstikker $F_n$ |
|-----------|-----------------|
| $1$ | $4$ |
| $2$ | $7$ |
| $3$ | $10$ |
| $4$ | $13$ |

Differansen er $3$ for hvert steg. Dette er en aritmetisk følge med $a_1 = 4$ og $d = 3$:

$$F_n = 4 + (n - 1) \\cdot 3 = 4 + 3n - 3 = 3n + 1$$

**Forklaring med figuren:** Den første firkanten trenger 4 fyrstikker. Hver ny firkant trenger bare 3 nye fyrstikker (fordi den deler en side med den forrige). Altså: $4 + 3(n-1) = 3n + 1$.

**c) Figur 20:**

$$F_{20} = 3 \\cdot 20 + 1 = 61$$

Vi trenger **61 fyrstikker** for figur 20.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '9-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Sammenheng mellom figurtall',
      problem: 'Vis at summen av to påfølgende trekanttall alltid gir et kvadrattall.',
      solution: `Vi bruker formelen for trekanttall: $T_n = \\frac{n(n+1)}{2}$

La oss legge sammen $T_n$ og $T_{n-1}$:

$$T_{n-1} + T_n = \\frac{(n-1)n}{2} + \\frac{n(n+1)}{2}$$

Vi setter på felles brøkstrek:

$$= \\frac{(n-1)n + n(n+1)}{2} = \\frac{n[(n-1) + (n+1)]}{2} = \\frac{n \\cdot 2n}{2} = n^2$$

Altså: $T_{n-1} + T_n = n^2 = K_n$

**Sjekk med tall:**
- $T_1 + T_2 = 1 + 3 = 4 = 2^2$ \\checkmark
- $T_2 + T_3 = 3 + 6 = 9 = 3^2$ \\checkmark
- $T_3 + T_4 = 6 + 10 = 16 = 4^2$ \\checkmark`,
    },

    // ========== OPPGAVER ==========

    {
      id: '9-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-7-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut disse trekanttallene:\n\na) $T_6$\nb) $T_9$\nc) $T_{15}$',
        subTasks: [
          {
            label: 'a',
            task: '$T_6$',
            solution: '$T_6 = \\frac{6 \\cdot 7}{2} = 21$',
            answer: 21,
          },
          {
            label: 'b',
            task: '$T_9$',
            solution: '$T_9 = \\frac{9 \\cdot 10}{2} = 45$',
            answer: 45,
          },
          {
            label: 'c',
            task: '$T_{15}$',
            solution: '$T_{15} = \\frac{15 \\cdot 16}{2} = 120$',
            answer: 120,
          },
        ],
        solution: 'a) $T_6 = 21$. b) $T_9 = 45$. c) $T_{15} = 120$.',
        hints: ['Bruk formelen $T_n = \\frac{n(n+1)}{2}$.'],
      },
    },

    {
      id: '9-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-7-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Vis at summen av de 7 første oddetallene er $7^2 = 49$.',
        solution: 'De 7 første oddetallene er $1, 3, 5, 7, 9, 11, 13$. Summen er $1 + 3 + 5 + 7 + 9 + 11 + 13 = 49 = 7^2$. Dette stemmer med regelen om at summen av de $n$ første oddetallene er $n^2$.',
        hints: ['Skriv opp de 7 første oddetallene og legg dem sammen.'],
      },
    },

    {
      id: '9-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-7-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En figur er bygget opp av prikker slik:\n\n- Figur 1: 1 prikk\n- Figur 2: 5 prikker (en i midten + 4 rundt)\n- Figur 3: 13 prikker\n- Figur 4: 25 prikker\n\na) Finn mønsteret i differansene.\nb) Hvor mange prikker har figur 5?\nc) Hvor mange prikker har figur 10?',
        subTasks: [
          {
            label: 'a',
            task: 'Finn mønsteret i differansene.',
            solution: 'Differansene er $4, 8, 12, \\ldots$ som øker med $4$ for hvert steg.',
          },
          {
            label: 'b',
            task: 'Hvor mange prikker har figur 5?',
            solution: 'Neste differanse er $16$, så figur 5 har $25 + 16 = 41$ prikker.',
            answer: 41,
          },
          {
            label: 'c',
            task: 'Hvor mange prikker har figur 10?',
            solution: 'Formelen er $a_n = 2n^2 - 2n + 1$. For $n = 10$: $a_{10} = 2 \\cdot 100 - 20 + 1 = 181$.',
            answer: 181,
          },
        ],
        solution: 'a) Differansene er $4, 8, 12, 16, \\ldots$ (øker med 4). b) 41 prikker. c) 181 prikker.',
        hints: ['Se på differansene mellom tallene. Hva er mønsteret i differansene?'],
      },
    },

    {
      id: '9-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-7-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sara bygger trapper med klosser. Trapp 1 har 1 kloss, trapp 2 har 3 klosser (2+1), trapp 3 har 6 klosser (3+2+1), og så videre.\n\na) Hvor mange klosser har trapp 7?\nb) Sara har 55 klosser. Hvor høy trapp kan hun bygge?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange klosser har trapp 7?',
            solution: '$T_7 = \\frac{7 \\cdot 8}{2} = 28$ klosser.',
            answer: 28,
          },
          {
            label: 'b',
            task: 'Sara har 55 klosser. Hvor høy trapp kan hun bygge?',
            solution: 'Vi løser $\\frac{n(n+1)}{2} = 55$, altså $n(n+1) = 110$. Vi prøver: $10 \\cdot 11 = 110$. Trapp 10!',
            answer: 10,
          },
        ],
        solution: 'a) 28 klosser. b) Trapp 10 (som bruker alle 55 klossene).',
        hints: ['Trappetallene er trekanttall!', 'For b): Prøv forskjellige verdier av $n$ i formelen $T_n = \\frac{n(n+1)}{2}$.'],
      },
    },

    {
      id: '9-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-7-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En figur er bygget med fyrstikker i trekantform:\n\n- Figur 1: 3 fyrstikker (en trekant)\n- Figur 2: 9 fyrstikker (fire trekanter)\n- Figur 3: 18 fyrstikker\n\nHvor mange fyrstikker trengs til figur 6?',
        solution: 'Differansene: $6, 9, \\ldots$ som øker med $3$. Vi fortsetter: figur 4: $18 + 12 = 30$, figur 5: $30 + 15 = 45$, figur 6: $45 + 18 = 63$. Formelen er $F_n = \\frac{3n(n+1)}{2} = 3T_n$. For $n = 6$: $F_6 = \\frac{3 \\cdot 6 \\cdot 7}{2} = 63$ fyrstikker.',
        hints: ['Se om du finner et mønster i differansene mellom figurene.', 'Sammenlign med trekanttallene.'],
      },
    },

    {
      id: '9-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-7-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut de fem første femkanttallene ved å bruke formelen $P_n = \\frac{n(3n-1)}{2}$, og kontroller at differansene mellom påfølgende ledd øker med $3$ for hvert steg.',
        solution: '$P_1 = \\frac{1 \\cdot 2}{2} = 1$, $P_2 = \\frac{2 \\cdot 5}{2} = 5$, $P_3 = \\frac{3 \\cdot 8}{2} = 12$, $P_4 = \\frac{4 \\cdot 11}{2} = 22$, $P_5 = \\frac{5 \\cdot 14}{2} = 35$.\n\nDifferansene: $5-1=4$, $12-5=7$, $22-12=10$, $35-22=13$. Differansene $4, 7, 10, 13$ øker med $3$ for hvert steg.',
        hints: ['Sett inn $n = 1, 2, 3, 4, 5$ i formelen.'],
      },
    },

    {
      id: '9-7-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-7-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at det 8. kvadrattallet er lik summen av det 7. og 8. trekanttallet. Generaliser dette til en regel.',
        solution: '$T_7 = \\frac{7 \\cdot 8}{2} = 28$ og $T_8 = \\frac{8 \\cdot 9}{2} = 36$. Summen: $28 + 36 = 64 = 8^2 = K_8$.\n\nGenerelt: $T_{n-1} + T_n = \\frac{(n-1)n}{2} + \\frac{n(n+1)}{2} = \\frac{n(n-1+n+1)}{2} = \\frac{n \\cdot 2n}{2} = n^2 = K_n$.\n\nRegelen: Summen av to påfølgende trekanttall er alltid et kvadrattall.',
        hints: ['Regn ut $T_7$ og $T_8$ med formelen, og sjekk om summen gir $8^2$.'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '9-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Figurtall
Figurtall er tall som kan representeres som prikker i en geometrisk figur.

### Trekanttall
$$T_n = \\frac{n(n+1)}{2}$$
De første: $1, 3, 6, 10, 15, 21, \\ldots$

### Kvadrattall
$$K_n = n^2$$
De første: $1, 4, 9, 16, 25, 36, \\ldots$
Også lik summen av de $n$ første oddetallene.

### Femkanttall
$$P_n = \\frac{n(3n-1)}{2}$$
De første: $1, 5, 12, 22, 35, \\ldots$

### Nyttig sammenheng
To påfølgende trekanttall gir alltid et kvadrattall: $T_{n-1} + T_n = n^2$.

### Tips for å finne formler
1. Skriv opp tallene i en tabell
2. Se på differansene (og differansene av differansene)
3. Konstant differanse betyr lineær formel
4. Lineært økende differanser betyr kvadratisk formel`,
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-7-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-7-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-7-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bestem de fem første trekanttallene, kvadrattallene og femkanttallene ved hjelp av formlene.',
            subTasks: [
              { label: 'a', task: 'Regn ut $T_1, T_2, T_3, T_4, T_5$ der $T_n = \\frac{n(n+1)}{2}$.', solution: '$T_1 = 1$, $T_2 = 3$, $T_3 = 6$, $T_4 = 10$, $T_5 = 15$' },
              { label: 'b', task: 'Regn ut $K_1, K_2, K_3, K_4, K_5$ der $K_n = n^2$.', solution: '$K_1 = 1$, $K_2 = 4$, $K_3 = 9$, $K_4 = 16$, $K_5 = 25$' },
              { label: 'c', task: 'Regn ut $P_1, P_2, P_3, P_4, P_5$ der $P_n = \\frac{n(3n - 1)}{2}$.', solution: '$P_1 = 1$, $P_2 = 5$, $P_3 = 12$, $P_4 = 22$, $P_5 = 35$' },
              { label: 'd', task: 'Verifiser at $T_3 + T_4 = K_4$.', solution: '$T_3 + T_4 = 6 + 10 = 16 = 4^2 = K_4$ ✓' },
              { label: 'e', task: 'Verifiser at $K_4 = 1 + 3 + 5 + 7$ (summen av de 4 første oddetallene).', solution: '$1 + 3 + 5 + 7 = 16 = 4^2 = K_4$ ✓' },
              { label: 'f', task: 'Finn differansene $T_2 - T_1$, $T_3 - T_2$, $T_4 - T_3$, $T_5 - T_4$. Hva legger du merke til?', solution: '$2, 3, 4, 5$. Differansene øker med $1$ for hvert steg.' },
            ],
            solution: 'a) $1, 3, 6, 10, 15$ b) $1, 4, 9, 16, 25$ c) $1, 5, 12, 22, 35$ d) $6 + 10 = 16$ ✓ e) $1 + 3 + 5 + 7 = 16$ ✓ f) Differansene er $2, 3, 4, 5$',
            hideInlineSolution: true,
            hints: ['Sett inn $n = 1, 2, 3, 4, 5$ i formlene.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-7-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Et figurtallmønster viser antall prikker i hvert steg. Bruk tabellen til å finne mønsteret.',
            subTasks: [
              { label: 'a', task: 'Figur 1 har $1$ prikk, figur 2 har $4$, figur 3 har $9$, figur 4 har $16$. Hva slags figurtall er dette?', solution: 'Kvadrattall: $a_n = n^2$' },
              { label: 'b', task: 'Figur 1 har $1$ prikk, figur 2 har $3$, figur 3 har $6$, figur 4 har $10$. Hva slags figurtall er dette?', solution: 'Trekanttall: $a_n = \\frac{n(n+1)}{2}$' },
              { label: 'c', task: 'Figur 1 har $2$ prikker, figur 2 har $6$, figur 3 har $12$, figur 4 har $20$. Finn formelen.', solution: 'Differanser: $4, 6, 8$ (øker med $2$). $a_n = n(n+1)$ (doble trekanttall).' },
              { label: 'd', task: 'Figur 1 har $4$ prikker, figur 2 har $8$, figur 3 har $12$, figur 4 har $16$. Finn formelen.', solution: 'Aritmetisk: $d = 4$, $a_1 = 4$. $a_n = 4n$.' },
              { label: 'e', task: 'Bruk formelen fra c) til å finne antall prikker i figur $10$.', solution: '$a_{10} = 10 \\cdot 11 = 110$' },
              { label: 'f', task: 'Bruk formelen fra d) til å finne figurnummeret som har $100$ prikker.', solution: '$4n = 100 \\Rightarrow n = 25$. Figur $25$.' },
            ],
            solution: 'a) Kvadrattall b) Trekanttall c) $a_n = n(n+1)$ d) $a_n = 4n$ e) $110$ f) Figur $25$',
            hideInlineSolution: true,
            hints: ['Se på differansene mellom påfølgende tall. Konstant differanse gir lineær formel; jevnt økende differanser gir kvadratisk formel.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-7-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Tegn de fire første figurene i hvert figurtallmønster og skriv opp tallene.',
            subTasks: [
              { label: 'a', task: 'Lag trekanttall ved å stable prikker i trekanter. Skriv opp $T_1, T_2, T_3, T_4$.', solution: '$T_1 = 1$, $T_2 = 3$, $T_3 = 6$, $T_4 = 10$. Prikkene danner trekanter med $1, 2, 3, 4$ prikker i bunnen.' },
              { label: 'b', task: 'Lag L-formede figurer der figur $n$ har $n$ prikker i rad og $n$ prikker i kolonne med ett felles hjørneprikk. Skriv opp tallene.', solution: 'Figur 1: $1$, Figur 2: $3$, Figur 3: $5$, Figur 4: $7$. Formel: $a_n = 2n - 1$ (oddetallene).' },
              { label: 'c', task: 'Lag kors-figurer der figur $n$ har $4$ armer med $n$ prikker i hver pluss $1$ i midten. Skriv opp tallene.', solution: 'Figur 1: $5$, Figur 2: $9$, Figur 3: $13$, Figur 4: $17$. Formel: $a_n = 4n + 1$.' },
              { label: 'd', task: 'Lag rammer av prikker: et rektangel med $n+1$ prikker langs lengden og $n$ langs bredden, der bare kantene har prikker. Skriv opp tallene for $n = 1, 2, 3, 4$.', solution: 'Figur 1: $4$, Figur 2: $8$, Figur 3: $12$, Figur 4: $16$. Ramme: $2(n+1) + 2(n-1) = 4n$ for $n \\geq 2$; $a_1 = 4$.' },
              { label: 'e', task: 'Se på mønsteret $1, 5, 13, 25, \\ldots$ Finn differansene og differansene av differansene.', solution: 'Differanser: $4, 8, 12$. Andre differanser: $4, 4$ (konstant). Mønsteret er kvadratisk.' },
              { label: 'f', task: 'Forklar med egne ord hva sammenhengen mellom et geometrisk mønster og en tallformel er.', solution: 'Et geometrisk mønster viser hvordan en figur vokser fra steg til steg. Tallformelen beskriver antall prikker (eller enheter) som funksjon av figurnummeret $n$, slik at vi kan finne verdien for et hvilket som helst steg uten å tegne figuren.' },
            ],
            solution: 'Se deloppgavene for detaljer.',
            hideInlineSolution: true,
            hints: ['Tegn prikkene systematisk og tell nøye. Se etter hvordan figuren vokser fra ett steg til neste.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-7-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk differansetabeller til å finne formelen for figurtallene.',
            subTasks: [
              { label: 'a', task: 'Tallene $2, 5, 10, 17, 26, \\ldots$. Sett opp differansetabell og finn formelen.', solution: 'Diff: $3, 5, 7, 9$. Andre diff: $2, 2, 2$. Halvparten av $2$ gir $a_n = n^2 + 1$. Sjekk: $1 + 1 = 2$, $4 + 1 = 5$, $9 + 1 = 10$ ✓' },
              { label: 'b', task: 'Tallene $0, 3, 8, 15, 24, \\ldots$. Finn formelen.', solution: 'Diff: $3, 5, 7, 9$. Andre diff: $2, 2, 2$. $a_n = n^2 - 1$. Sjekk: $1 - 1 = 0$, $4 - 1 = 3$, $9 - 1 = 8$ ✓' },
              { label: 'c', task: 'Tallene $3, 8, 15, 24, 35, \\ldots$. Finn formelen og beregn $a_{20}$.', solution: 'Diff: $5, 7, 9, 11$. Andre diff: $2, 2, 2$. $a_n = n^2 + 2n = n(n+2)$. $a_{20} = 20 \\cdot 22 = 440$.' },
              { label: 'd', task: 'Tallene $1, 6, 15, 28, 45, \\ldots$. Finn formelen.', solution: 'Diff: $5, 9, 13, 17$. Andre diff: $4, 4, 4$. $a_n = 2n^2 - n$. Sjekk: $2 - 1 = 1$, $8 - 2 = 6$, $18 - 3 = 15$ ✓' },
              { label: 'e', task: 'Verifiser at formelen fra d) stemmer for $n = 1, 2, 3, 4, 5$.', solution: '$a_1 = 2(1) - 1 = 1$ ✓, $a_2 = 8 - 2 = 6$ ✓, $a_3 = 18 - 3 = 15$ ✓, $a_4 = 32 - 4 = 28$ ✓, $a_5 = 50 - 5 = 45$ ✓' },
            ],
            solution: 'a) $n^2 + 1$ b) $n^2 - 1$ c) $n(n+2)$, $a_{20} = 440$ d) $2n^2 - n$ e) Alle verdier stemmer',
            hideInlineSolution: true,
            hints: ['Sett opp en tabell med $n$, $a_n$, første differanser ($\\Delta_1$) og andre differanser ($\\Delta_2$). Hvis $\\Delta_2$ er konstant, er formelen kvadratisk.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-7-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk figurmønstre til å løse praktiske problemer.',
            subTasks: [
              { label: 'a', task: 'Du legger border i en lang rekke. Rundt hvert bord kan det sitte $4$ personer, men der bordene møtes deles en side. Hvor mange kan sitte rundt $n$ bord?', solution: 'Bord 1: $4$, Bord 2: $6$, Bord 3: $8$. Formel: $a_n = 2n + 2$. (Aritmetisk, $d = 2$.)' },
              { label: 'b', task: 'Hvor mange kan sitte rundt $15$ bord i rekken fra a)?', solution: '$a_{15} = 2 \\cdot 15 + 2 = 32$ personer.' },
              { label: 'c', task: 'Et rutenett har $n$ ruter langs hver side. Hvor mange ruter er i rammen (bare ytterste rad/kolonne)?', solution: 'For $n \\geq 2$: Rammen har $4n - 4$ ruter. Sjekk: $n = 3$: $4 \\cdot 3 - 4 = 8$ ✓, $n = 4$: $4 \\cdot 4 - 4 = 12$ ✓.' },
              { label: 'd', task: 'Hvor mange ruter er det i rammen av et $50 \\times 50$-rutenett?', solution: '$4 \\cdot 50 - 4 = 196$ ruter.' },
              { label: 'e', task: 'Sjakkbrettet har $8 \\times 8$ ruter. Hvor mange $1 \\times 1$-ruter, $2 \\times 2$-ruter og $3 \\times 3$-ruter finner du?', solution: '$1 \\times 1$: $8^2 = 64$. $2 \\times 2$: $7^2 = 49$. $3 \\times 3$: $6^2 = 36$. Generelt: $(9 - k)^2$ ruter av størrelse $k \\times k$.' },
            ],
            solution: 'a) $a_n = 2n + 2$ b) $32$ c) $4n - 4$ d) $196$ e) $64$, $49$, $36$',
            hideInlineSolution: true,
            hints: ['Tegn de første tilfellene og tell. Se etter hva som er likt og hva som endres fra steg til steg.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-7-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utforsk sammensatte figurtallmønstre.',
            subTasks: [
              { label: 'a', task: 'Vis algebraisk at $T_{n-1} + T_n = n^2$, der $T_n = \\frac{n(n+1)}{2}$.', solution: '$T_{n-1} + T_n = \\frac{(n-1)n}{2} + \\frac{n(n+1)}{2} = \\frac{n(n-1) + n(n+1)}{2} = \\frac{n^2 - n + n^2 + n}{2} = \\frac{2n^2}{2} = n^2$' },
              { label: 'b', task: 'Vis at summen av de $n$ første oddetallene alltid er $n^2$.', solution: 'De $n$ første oddetallene er $1, 3, 5, \\ldots, (2n - 1)$. Summen er $\\frac{n(1 + (2n-1))}{2} = \\frac{n \\cdot 2n}{2} = n^2$.' },
              { label: 'c', task: 'En figur er bygget opp slik at steg $n$ legger til $3n - 2$ nye prikker. Figur $1$ har $1$ prikk. Finn en formel for det totale antall prikker etter $n$ steg.', solution: 'Total = $\\sum_{i=1}^{n} (3i - 2) = 3 \\cdot \\frac{n(n+1)}{2} - 2n = \\frac{3n^2 + 3n - 4n}{2} = \\frac{3n^2 - n}{2} = \\frac{n(3n - 1)}{2}$. (Dette er femkanttallene!)' },
              { label: 'd', task: 'Finn en formel for $1^2 + 2^2 + 3^2 + \\cdots + n^2$ ved å bruke at summen av de $n$ første kvadrattallene er $\\frac{n(n+1)(2n+1)}{6}$. Verifiser for $n = 4$.', solution: 'For $n = 4$: $\\frac{4 \\cdot 5 \\cdot 9}{6} = \\frac{180}{6} = 30$. Sjekk: $1 + 4 + 9 + 16 = 30$ ✓.' },
            ],
            solution: 'a) $n^2$ b) $n^2$ c) $\\frac{n(3n-1)}{2}$ d) $30$ ✓',
            hideInlineSolution: true,
            hints: ['Bruk algebraiske identiteter og formelen for aritmetiske summer. Sjekk alltid ved å sette inn verdier.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Generalisering med algebra
// LK20 KM241: Utforske og beskrive strukturar og forandringar i geometriske
//              mønster og tallmønster med figurar, ord og formlar
// ============================================================================

export const CHAPTER_9_7_3: TextbookChapter = {
  id: '9-7-3',
  courseId: '9',
  chapterNumber: '7.3',
  title: 'Generalisering med algebra',
  description: 'Lær å gå fra konkrete mønstre til generelle algebraiske uttrykk og formler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive strukturar og forandringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '9-7-3-intro',
      type: 'text',
      content: `## Generalisering med algebra

Å **generalisere** betyr å finne en regel som gjelder for alle tilfeller, ikke bare de vi har sett. I matematikken bruker vi algebra til å uttrykke slike generelle regler.

Tenk deg at du har bygget figur 1, 2, 3 og 4 i et mønster. Du kan telle antall klosser i hver figur, men hva om noen spør: «Hvor mange klosser er det i figur 100?» Da er det upraktisk å tegne alle figurene. Vi trenger en **formel** -- et algebraisk uttrykk som fungerer for alle figurnumre.

I dette kapittelet skal du lære å:
- Finne formler for tallmønstre ved å studere differanser
- Bruke tabeller systematisk for å oppdage struktur
- Sette opp lineære og kvadratiske formler fra mønstre
- Bevise at en formel stemmer ved å teste den`,
    },

    // ========== DEFINISJON: GENERALISERING ==========
    {
      id: '9-7-3-def-1',
      type: 'definition',
      title: 'Generalisering',
      content: `**Generalisering** i matematikk betyr å finne et generelt uttrykk (formel) som beskriver et mønster for alle verdier av $n$.

Vi går fra det **spesielle** til det **generelle**:

| Spesielt | Generelt |
|----------|----------|
| $a_1 = 5, a_2 = 8, a_3 = 11$ | $a_n = 3n + 2$ |
| Figur 1 har 4 prikker, figur 2 har 7 | $a_n = 3n + 1$ |
| $1, 4, 9, 16, 25$ | $a_n = n^2$ |

Når vi har funnet den generelle formelen, kan vi beregne **ethvert** ledd i følgen uten å telle fra starten.`,
    },

    // ========== DEFINISJON: LINEÆR FORMEL ==========
    {
      id: '9-7-3-def-2',
      type: 'definition',
      title: 'Lineær formel for et mønster',
      content: `Hvis differansen mellom påfølgende ledd er **konstant** (lik $d$), er formelen **lineær**:

$$a_n = dn + c$$

der $d$ er den konstante differansen og $c$ er en konstant vi finner ved å sette inn en kjent verdi.

**Fremgangsmåte:**
1. Regn ut differansen $d$ mellom påfølgende ledd
2. Sett opp formelen $a_n = dn + c$
3. Sett inn $n = 1$ og $a_1$ for å finne $c$

**Eksempel:** Følgen $5, 8, 11, 14, \\ldots$

$d = 3$, så $a_n = 3n + c$. For $n = 1$: $5 = 3 \\cdot 1 + c$, altså $c = 2$.

$$a_n = 3n + 2$$`,
    },

    // ========== DEFINISJON: KVADRATISK FORMEL ==========
    {
      id: '9-7-3-def-3',
      type: 'definition',
      title: 'Kvadratisk formel for et mønster',
      content: `Hvis de første differansene **ikke** er konstante, men de andre differansene (differansene av differansene) er konstante og lik $2a$, er formelen **kvadratisk**:

$$a_n = an^2 + bn + c$$

**Fremgangsmåte:**
1. Regn ut de første differansene ($\\Delta_1$)
2. Regn ut de andre differansene ($\\Delta_2$)
3. Hvis $\\Delta_2$ er konstant, er formelen kvadratisk
4. $a = \\frac{\\Delta_2}{2}$
5. Finn $b$ og $c$ ved å sette inn kjente verdier

**Eksempel:** Følgen $2, 6, 12, 20, 30, \\ldots$

| $n$ | $a_n$ | $\\Delta_1$ | $\\Delta_2$ |
|-----|--------|-------------|-------------|
| 1 | 2 | | |
| 2 | 6 | 4 | |
| 3 | 12 | 6 | 2 |
| 4 | 20 | 8 | 2 |
| 5 | 30 | 10 | 2 |

$\\Delta_2 = 2$ er konstant, så $a = \\frac{2}{2} = 1$. Formelen er $a_n = n^2 + bn + c$. Vi setter inn $n = 1$ og $n = 2$ for å finne $b$ og $c$:

$n = 1$: $2 = 1 + b + c$
$n = 2$: $6 = 4 + 2b + c$

Fra ligning 1: $b + c = 1$. Fra ligning 2: $2b + c = 2$. Trekker vi ligning 1 fra ligning 2: $b = 1$, og da $c = 0$.

$$a_n = n^2 + n = n(n + 1)$$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '9-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Fra mønster til lineær formel',
      problem: 'En figur er bygget av fyrstikker. Figur 1 har 6 fyrstikker, figur 2 har 11, figur 3 har 16, og figur 4 har 21.\n\na) Finn formelen for antall fyrstikker i figur $n$.\nb) Hvor mange fyrstikker har figur 30?\nc) Hvilken figur har 201 fyrstikker?',
      solution: `**a) Finn formelen:**

| $n$ | Fyrstikker $F_n$ | Differanse |
|-----|-------------------|-----------|
| 1 | 6 | |
| 2 | 11 | 5 |
| 3 | 16 | 5 |
| 4 | 21 | 5 |

Differansen er konstant $d = 5$, så formelen er lineær: $F_n = 5n + c$.

Setter inn $n = 1$: $6 = 5 \\cdot 1 + c$, altså $c = 1$.

$$F_n = 5n + 1$$

**Kontroll:** $F_2 = 5 \\cdot 2 + 1 = 11$ \\checkmark, $F_3 = 5 \\cdot 3 + 1 = 16$ \\checkmark

**b) Figur 30:**

$$F_{30} = 5 \\cdot 30 + 1 = 151$$

**c) Hvilken figur har 201 fyrstikker?**

Vi løser $5n + 1 = 201$:

$5n = 200$

$n = 40$

Figur **40** har 201 fyrstikker.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '9-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Fra mønster til kvadratisk formel',
      problem: 'Se på tallfølgen $3, 8, 15, 24, 35, \\ldots$\n\nFinn en formel for det $n$-te leddet.',
      solution: `Vi setter opp differansetabell:

| $n$ | $a_n$ | $\\Delta_1$ | $\\Delta_2$ |
|-----|--------|-------------|-------------|
| 1 | 3 | | |
| 2 | 8 | 5 | |
| 3 | 15 | 7 | 2 |
| 4 | 24 | 9 | 2 |
| 5 | 35 | 11 | 2 |

De andre differansene er konstante ($\\Delta_2 = 2$), så formelen er kvadratisk.

$a = \\frac{\\Delta_2}{2} = \\frac{2}{2} = 1$

Formelen har formen $a_n = n^2 + bn + c$.

Setter inn kjente verdier:
- $n = 1$: $3 = 1 + b + c \\quad \\Rightarrow \\quad b + c = 2$
- $n = 2$: $8 = 4 + 2b + c \\quad \\Rightarrow \\quad 2b + c = 4$

Trekker vi den første fra den andre: $b = 2$, og da $c = 0$.

$$a_n = n^2 + 2n = n(n + 2)$$

**Kontroll:**
- $a_1 = 1 \\cdot 3 = 3$ \\checkmark
- $a_3 = 3 \\cdot 5 = 15$ \\checkmark
- $a_5 = 5 \\cdot 7 = 35$ \\checkmark`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '9-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Generalisering fra en visuell figur',
      problem: 'Prikker er ordnet i et L-formet mønster:\n\n- Figur 1: 3 prikker (2+1 i en L)\n- Figur 2: 5 prikker (3+2 i en L)\n- Figur 3: 7 prikker (4+3 i en L)\n\na) Beskriv mønsteret med ord.\nb) Finn en formel for antall prikker i figur $n$.\nc) Forklar formelen ut fra figuren.',
      solution: `**a) Beskrivelse med ord:**

Figur $n$ har en vertikal kolonne med $(n+1)$ prikker og en horisontal rad med $n$ prikker. Den nederste prikken er felles for begge, så totalen er $(n+1) + n - 1 = 2n$.

Vent -- la oss telle nøyere. Figur 1: 3, figur 2: 5, figur 3: 7. Differansen er $2$.

**b) Formel:**

Konstant differanse $d = 2$, så $a_n = 2n + c$.

$n = 1$: $3 = 2 + c$, altså $c = 1$.

$$a_n = 2n + 1$$

**Kontroll:** $a_2 = 5$ \\checkmark, $a_3 = 7$ \\checkmark

**c) Forklaring ut fra figuren:**

L-figuren har en vertikal del med $(n+1)$ prikker og en horisontal del med $(n+1)$ prikker, der hjørneprikken er felles. Totalt: $2(n+1) - 1 = 2n + 1$.`,
    },

    // ========== OPPGAVER ==========

    {
      id: '9-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-7-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn formelen for tallfølgen $4, 7, 10, 13, 16, \\ldots$ og bruk den til å finne $a_{25}$.',
        solution: 'Konstant differanse $d = 3$. Formelen: $a_n = 3n + c$. For $n = 1$: $4 = 3 + c$, altså $c = 1$. Formel: $a_n = 3n + 1$. For $n = 25$: $a_{25} = 3 \\cdot 25 + 1 = 76$.',
        hints: ['Finn differansen mellom leddene først.'],
      },
    },

    {
      id: '9-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-7-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Følgen $10, 7, 4, 1, -2, \\ldots$ har en bestemt formel. Finn formelen og bruk den til å finne $a_{15}$.',
        solution: 'Differansen er $d = -3$. Formelen: $a_n = -3n + c$. For $n = 1$: $10 = -3 + c$, altså $c = 13$. Formel: $a_n = -3n + 13$. For $n = 15$: $a_{15} = -3 \\cdot 15 + 13 = -45 + 13 = -32$.',
        hints: ['Differansen kan være negativ.', 'Sett inn $n = 1$ for å finne $c$.'],
      },
    },

    {
      id: '9-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-7-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp en differansetabell for følgen $0, 3, 8, 15, 24, \\ldots$ og finn formelen for $a_n$.',
        solution: 'Første differanser: $3, 5, 7, 9$ (ikke konstant). Andre differanser: $2, 2, 2$ (konstant). Så $a = \\frac{2}{2} = 1$. Formelen: $a_n = n^2 + bn + c$. $n = 1$: $0 = 1 + b + c$, $n = 2$: $3 = 4 + 2b + c$. Fra ligning 1: $b + c = -1$. Fra ligning 2: $2b + c = -1$. Da $b = 0$ og $c = -1$. Formel: $a_n = n^2 - 1 = (n-1)(n+1)$.',
        hints: [
          'Lag en tabell med $n$, $a_n$, første differanse og andre differanse.',
          'Hvis de andre differansene er konstante, er formelen kvadratisk.',
        ],
      },
    },

    {
      id: '9-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-7-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et mønster av klosser bygges slik:\n\n- Figur 1: 2 klosser\n- Figur 2: 6 klosser\n- Figur 3: 12 klosser\n- Figur 4: 20 klosser\n\na) Finn formelen for antall klosser.\nb) Hvor mange klosser har figur 15?',
        subTasks: [
          {
            label: 'a',
            task: 'Finn formelen.',
            solution: 'Differanser: $4, 6, 8$ (øker med 2). Andre differanser: $2, 2$. Kvadratisk med $a = 1$. $a_n = n^2 + bn + c$. $n=1$: $2 = 1 + b + c$, $n=2$: $6 = 4 + 2b + c$. $b+c=1$, $2b+c=2$, altså $b=1$, $c=0$. Formel: $a_n = n^2 + n = n(n+1)$.',
          },
          {
            label: 'b',
            task: 'Hvor mange klosser har figur 15?',
            solution: '$a_{15} = 15 \\cdot 16 = 240$ klosser.',
            answer: 240,
          },
        ],
        solution: 'a) $a_n = n(n+1)$. b) 240 klosser.',
        hints: ['Lag en differansetabell for å avgjøre om formelen er lineær eller kvadratisk.'],
      },
    },

    {
      id: '9-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-7-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En følge har formelen $a_n = 2n^2 - 1$.\n\na) Beregn de fem første leddene.\nb) Vis at de andre differansene er konstante.\nc) Hva er den konstante andre differansen?',
        subTasks: [
          {
            label: 'a',
            task: 'Beregn de fem første leddene.',
            solution: '$a_1 = 1$, $a_2 = 7$, $a_3 = 17$, $a_4 = 31$, $a_5 = 49$.',
          },
          {
            label: 'b',
            task: 'Vis at de andre differansene er konstante.',
            solution: 'Første differanser: $6, 10, 14, 18$. Andre differanser: $4, 4, 4$. Alle er like, altså konstant.',
          },
          {
            label: 'c',
            task: 'Hva er den konstante andre differansen?',
            solution: 'Den andre differansen er $4$. Generelt: for $a_n = an^2 + bn + c$ er den andre differansen alltid $2a$. Her: $2 \\cdot 2 = 4$.',
            answer: 4,
          },
        ],
        solution: 'a) $1, 7, 17, 31, 49$. b) Andre differanser: $4, 4, 4$ (konstant). c) $4$.',
        hints: ['Sett inn $n = 1, 2, 3, 4, 5$ i formelen.'],
      },
    },

    {
      id: '9-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-7-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En tallfølge starter med $2, 5, 10, 17, 26, \\ldots$\n\na) Sett opp differansetabell og finn formelen.\nb) Vis at formelen $a_n = n^2 + 1$ stemmer for alle de fem oppgitte leddene.\nc) Finn $a_{100}$.',
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp differansetabell og finn formelen.',
            solution: 'Første differanser: $3, 5, 7, 9$. Andre differanser: $2, 2, 2$. Kvadratisk med $a = 1$. $a_n = n^2 + bn + c$. $n=1$: $2 = 1 + b + c$, $n=2$: $5 = 4 + 2b + c$. $b+c=1$, $2b+c=1$. Da $b=0$, $c=1$. Formel: $a_n = n^2 + 1$.',
          },
          {
            label: 'b',
            task: 'Vis at formelen stemmer for alle de fem leddene.',
            solution: '$a_1 = 1+1 = 2$ \\checkmark, $a_2 = 4+1 = 5$ \\checkmark, $a_3 = 9+1 = 10$ \\checkmark, $a_4 = 16+1 = 17$ \\checkmark, $a_5 = 25+1 = 26$ \\checkmark.',
          },
          {
            label: 'c',
            task: 'Finn $a_{100}$.',
            solution: '$a_{100} = 100^2 + 1 = 10\\,001$.',
            answer: 10001,
          },
        ],
        solution: 'a) $a_n = n^2 + 1$. b) Alle fem ledd stemmer. c) $a_{100} = 10\\,001$.',
        hints: ['Lag differansetabell og bruk metoden for å finne kvadratiske formler.'],
      },
    },

    {
      id: '9-7-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-7-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Morten setter opp stoler i rader til en forestilling. Første rad har 12 stoler, og for hver ny rad legger han til 2 stoler.\n\na) Finn en formel for antall stoler i rad $n$.\nb) Hvor mange stoler er det i rad 20?\nc) Han har 25 rader totalt. Hvor mange stoler er det til sammen?\n\n*Tips: Summen av en aritmetisk følge er $S_n = \\frac{n(a_1 + a_n)}{2}$.*',
        subTasks: [
          {
            label: 'a',
            task: 'Finn formelen for antall stoler i rad $n$.',
            solution: 'Aritmetisk følge med $a_1 = 12$ og $d = 2$. $a_n = 12 + (n-1) \\cdot 2 = 2n + 10$.',
          },
          {
            label: 'b',
            task: 'Hvor mange stoler i rad 20?',
            solution: '$a_{20} = 2 \\cdot 20 + 10 = 50$ stoler.',
            answer: 50,
          },
          {
            label: 'c',
            task: 'Totalt antall stoler i 25 rader.',
            solution: '$a_{25} = 2 \\cdot 25 + 10 = 60$. $S_{25} = \\frac{25 \\cdot (12 + 60)}{2} = \\frac{25 \\cdot 72}{2} = 900$ stoler.',
            answer: 900,
          },
        ],
        solution: 'a) $a_n = 2n + 10$. b) 50 stoler. c) 900 stoler totalt.',
        hints: ['Radene utgjør en aritmetisk følge.', 'For totalen, bruk summeformelen for aritmetiske følger.'],
      },
    },

    {
      id: '9-7-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-7-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn formelen for tallfølgen $1, 5, 13, 25, 41, \\ldots$ ved hjelp av differansetabell.',
        solution: 'Første differanser: $4, 8, 12, 16$. Andre differanser: $4, 4, 4$ (konstant). $a = \\frac{4}{2} = 2$. Formelen: $a_n = 2n^2 + bn + c$. $n=1$: $1 = 2 + b + c$, $n=2$: $5 = 8 + 2b + c$. $b + c = -1$, $2b + c = -3$. Da $b = -2$, $c = 1$. Formel: $a_n = 2n^2 - 2n + 1$. Kontroll: $a_3 = 18 - 6 + 1 = 13$ \\checkmark, $a_5 = 50 - 10 + 1 = 41$ \\checkmark.',
        hints: [
          'Sett opp en tabell med $n$, $a_n$, $\\Delta_1$ og $\\Delta_2$.',
          'Når $\\Delta_2$ er konstant, er formelen på formen $a_n = an^2 + bn + c$.',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '9-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Generalisering
Vi går fra spesielle tilfeller til en generell formel for det $n$-te leddet.

### Lineær formel ($a_n = dn + c$)
- Brukes når de **første differansene** er konstante
- $d$ er den konstante differansen
- Finn $c$ ved å sette inn en kjent verdi

### Kvadratisk formel ($a_n = an^2 + bn + c$)
- Brukes når de **andre differansene** er konstante
- $a = \\frac{\\Delta_2}{2}$
- Finn $b$ og $c$ ved å sette inn to kjente verdier

### Differansetabell
En nyttig metode for å analysere mønstre:

| $n$ | $a_n$ | $\\Delta_1$ | $\\Delta_2$ |
|-----|--------|-------------|-------------|
| 1 | ... | | |
| 2 | ... | ... | |
| 3 | ... | ... | ... |

### Sjekk alltid svaret!
Sett formelen tilbake inn for å kontrollere at den gir riktige verdier for alle kjente ledd.`,
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-7-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-7-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-7-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Sett opp en differansetabell og avgjør om formelen er lineær eller kvadratisk.',
            subTasks: [
              { label: 'a', task: '$3, 5, 7, 9, 11, \\ldots$', solution: 'Diff: $2, 2, 2, 2$. Konstant $\\Rightarrow$ lineær formel.' },
              { label: 'b', task: '$2, 5, 10, 17, 26, \\ldots$', solution: 'Diff: $3, 5, 7, 9$. Andre diff: $2, 2, 2$. Konstant andre diff $\\Rightarrow$ kvadratisk.' },
              { label: 'c', task: '$4, 7, 10, 13, 16, \\ldots$', solution: 'Diff: $3, 3, 3, 3$. Konstant $\\Rightarrow$ lineær formel.' },
              { label: 'd', task: '$1, 4, 9, 16, 25, \\ldots$', solution: 'Diff: $3, 5, 7, 9$. Andre diff: $2, 2, 2$. Kvadratisk.' },
              { label: 'e', task: '$0, 3, 10, 21, 36, \\ldots$', solution: 'Diff: $3, 7, 11, 15$. Andre diff: $4, 4, 4$. Kvadratisk.' },
              { label: 'f', task: '$10, 7, 4, 1, -2, \\ldots$', solution: 'Diff: $-3, -3, -3, -3$. Konstant $\\Rightarrow$ lineær formel.' },
            ],
            solution: 'a) Lineær b) Kvadratisk c) Lineær d) Kvadratisk e) Kvadratisk f) Lineær',
            hideInlineSolution: true,
            hints: ['Regn ut differansene $\\Delta_1 = a_{n+1} - a_n$. Hvis $\\Delta_1$ er konstant, er formelen lineær. Ellers regner du ut $\\Delta_2$ (differansene av differansene).'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-7-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn den lineære formelen $a_n = dn + c$ for tallfølgen.',
            subTasks: [
              { label: 'a', task: '$5, 8, 11, 14, \\ldots$', solution: '$d = 3$. $a_1 = 5$: $3 \\cdot 1 + c = 5 \\Rightarrow c = 2$. $a_n = 3n + 2$.' },
              { label: 'b', task: '$1, 6, 11, 16, \\ldots$', solution: '$d = 5$. $5 \\cdot 1 + c = 1 \\Rightarrow c = -4$. $a_n = 5n - 4$.' },
              { label: 'c', task: '$20, 17, 14, 11, \\ldots$', solution: '$d = -3$. $-3 \\cdot 1 + c = 20 \\Rightarrow c = 23$. $a_n = -3n + 23$.' },
              { label: 'd', task: '$-2, 1, 4, 7, \\ldots$', solution: '$d = 3$. $3 \\cdot 1 + c = -2 \\Rightarrow c = -5$. $a_n = 3n - 5$.' },
              { label: 'e', task: '$0{,}5, \\; 1, \\; 1{,}5, \\; 2, \\ldots$', solution: '$d = 0{,}5$. $0{,}5 \\cdot 1 + c = 0{,}5 \\Rightarrow c = 0$. $a_n = 0{,}5n$.' },
              { label: 'f', task: '$100, 93, 86, 79, \\ldots$', solution: '$d = -7$. $-7 \\cdot 1 + c = 100 \\Rightarrow c = 107$. $a_n = -7n + 107$.' },
            ],
            solution: 'a) $3n + 2$ b) $5n - 4$ c) $-3n + 23$ d) $3n - 5$ e) $0{,}5n$ f) $-7n + 107$',
            hideInlineSolution: true,
            hints: ['Differansen $d$ er den konstante forskjellen. Sett inn $n = 1$ og $a_1$ for å finne $c$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-7-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Skriv et uttrykk med variabelen $n$ for mønsteret, og bruk det til å beregne den etterspurte verdien.',
            subTasks: [
              { label: 'a', task: 'Antall fyrstikker for å lage $n$ sammenhengende kvadrater i en rekke. Finn antallet for $n = 10$.', solution: '$a_n = 3n + 1$. $a_{10} = 31$.' },
              { label: 'b', task: 'Antall prikker i et $n \\times (n+1)$-rektangel. Finn antallet for $n = 8$.', solution: '$a_n = n(n + 1)$. $a_8 = 8 \\cdot 9 = 72$.' },
              { label: 'c', task: 'Antall håndtrykk mellom $n$ personer (alle hilser på alle). Finn antallet for $n = 12$.', solution: '$a_n = \\frac{n(n - 1)}{2}$. $a_{12} = \\frac{12 \\cdot 11}{2} = 66$.' },
              { label: 'd', task: 'Et tog med $n$ vogner har $40n + 20$ seter (hver vogn $40$ seter, pluss $20$ i lokomotivet). Hvor mange seter i et tog med $8$ vogner?', solution: '$a_8 = 40 \\cdot 8 + 20 = 340$ seter.' },
              { label: 'e', task: 'En pyramide av bokser har $n$ rader, der rad $k$ har $k$ bokser. Finn totalt antall bokser for $n = 7$.', solution: '$\\text{Totalt} = \\frac{n(n+1)}{2} = \\frac{7 \\cdot 8}{2} = 28$ bokser.' },
              { label: 'f', task: 'En sirkulær pizza deles med $n$ rette snitt (hvert snitt krysser alle forrige). Maks antall biter er $\\frac{n^2 + n + 2}{2}$. Finn antall biter med $6$ snitt.', solution: '$a_6 = \\frac{36 + 6 + 2}{2} = \\frac{44}{2} = 22$ biter.' },
            ],
            solution: 'a) $31$ b) $72$ c) $66$ d) $340$ e) $28$ f) $22$',
            hideInlineSolution: true,
            hints: ['Undersøk de første tilfellene ($n = 1, 2, 3$), se etter et mønster, og generaliser med en formel.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-7-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Finn den kvadratiske formelen $a_n = an^2 + bn + c$ for tallfølgen.',
            subTasks: [
              { label: 'a', task: '$3, 8, 15, 24, 35, \\ldots$', solution: '$\\Delta_1$: $5, 7, 9, 11$. $\\Delta_2$: $2, 2, 2$. $a = \\frac{2}{2} = 1$. Test $n^2$: $1, 4, 9, 16, 25$. Resten: $2, 4, 6, 8, 10 = 2n$. $a_n = n^2 + 2n$.' },
              { label: 'b', task: '$2, 8, 18, 32, 50, \\ldots$', solution: '$\\Delta_1$: $6, 10, 14, 18$. $\\Delta_2$: $4, 4, 4$. $a = 2$. Test $2n^2$: $2, 8, 18, 32, 50$. Resten: $0, 0, 0, 0, 0$. $a_n = 2n^2$.' },
              { label: 'c', task: '$0, 5, 14, 27, 44, \\ldots$', solution: '$\\Delta_1$: $5, 9, 13, 17$. $\\Delta_2$: $4, 4, 4$. $a = 2$. Test $2n^2$: $2, 8, 18, 32, 50$. Resten: $-2, -3, -4, -5, -6 = -(n+1)$. $a_n = 2n^2 - n - 1$.' },
              { label: 'd', task: '$4, 11, 22, 37, 56, \\ldots$', solution: '$\\Delta_1$: $7, 11, 15, 19$. $\\Delta_2$: $4, 4, 4$. $a = 2$. Test $2n^2$: $2, 8, 18, 32, 50$. Resten: $2, 3, 4, 5, 6 = n+1$. $a_n = 2n^2 + n + 1$.' },
              { label: 'e', task: 'Bruk formelen fra a) til å finne $a_{100}$.', solution: '$a_{100} = 100^2 + 2 \\cdot 100 = 10\\,000 + 200 = 10\\,200$.' },
              { label: 'f', task: 'Bruk formelen fra b) til å finne hvilken $n$ som gir $a_n = 200$.', solution: '$2n^2 = 200 \\Rightarrow n^2 = 100 \\Rightarrow n = 10$.' },
            ],
            solution: 'a) $n^2 + 2n$ b) $2n^2$ c) $2n^2 - n - 1$ d) $2n^2 + n + 1$ e) $10\\,200$ f) $n = 10$',
            hideInlineSolution: true,
            hints: ['Bruk differansetabell. $a = \\frac{\\Delta_2}{2}$. Trekk $an^2$ fra $a_n$ og se om resten er lineær.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-7-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Generaliser mønstrene algebraisk og svar på spørsmålene.',
            subTasks: [
              { label: 'a', task: 'Vis at summen av tre påfølgende hele tall alltid er delelig med $3$. (Kall det minste tallet $n$.)', solution: '$n + (n+1) + (n+2) = 3n + 3 = 3(n + 1)$, som er delelig med $3$ for alle hele tall $n$.' },
              { label: 'b', task: 'Vis at differansen mellom kvadratene av to påfølgende hele tall alltid er et oddetall.', solution: '$(n+1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$, som er et oddetall for alle hele tall $n$.' },
              { label: 'c', task: 'Vis at produktet av to påfølgende hele tall alltid er et partall.', solution: '$n(n+1)$: Et av tallene $n$ og $n+1$ er alltid partall, så produktet er delelig med $2$.' },
              { label: 'd', task: 'Et rektangulært mønster av fliser har $n$ rader og $2n + 1$ kolonner. Finn en formel for antall fliser og regn ut for $n = 12$.', solution: '$A = n(2n + 1) = 2n^2 + n$. $A_{12} = 2 \\cdot 144 + 12 = 300$ fliser.' },
            ],
            solution: 'a) $3(n+1)$ er delelig med $3$ b) $2n+1$ er oddetall c) Ett av tallene er alltid partall d) $2n^2 + n$, $A_{12} = 300$',
            hideInlineSolution: true,
            hints: ['Skriv uttrykkene med variabelen $n$ og forenkle algebraisk. Faktoriser for å vise delelighetene.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-7-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Bruk generalisering til å bevise påstander og løse sammensatte problemer.',
            subTasks: [
              { label: 'a', task: 'Vis at $(2n-1)^2 + (2n)^2 + (2n+1)^2 = 12n^2 + 2$ for alle positive hele tall $n$. Sjekk for $n = 3$.', solution: '$(2n-1)^2 + (2n)^2 + (2n+1)^2 = (4n^2 - 4n + 1) + 4n^2 + (4n^2 + 4n + 1) = 12n^2 + 2$. For $n = 3$: $5^2 + 6^2 + 7^2 = 25 + 36 + 49 = 110 = 12 \\cdot 9 + 2 = 110$ ✓' },
              { label: 'b', task: 'En trapp bygges av klosser. Trinn $k$ bruker $k$ klosser i bredden og $k$ klosser i høyden, altså $k^2$ klosser. En trapp med $n$ trinn bruker $1^2 + 2^2 + \\cdots + n^2 = \\frac{n(n+1)(2n+1)}{6}$ klosser. Hvor mange klosser trengs for en trapp med $10$ trinn?', solution: '$\\frac{10 \\cdot 11 \\cdot 21}{6} = \\frac{2310}{6} = 385$ klosser.' },
              { label: 'c', task: 'Finn en formel for $2 + 4 + 6 + \\cdots + 2n$ og vis at den stemmer.', solution: '$2 + 4 + 6 + \\cdots + 2n = 2(1 + 2 + 3 + \\cdots + n) = 2 \\cdot \\frac{n(n+1)}{2} = n(n+1)$. Sjekk $n = 4$: $2 + 4 + 6 + 8 = 20 = 4 \\cdot 5$ ✓.' },
              { label: 'd', task: 'Et figurtallmønster har tallene $2, 10, 24, 44, 70, \\ldots$ Finn formelen og beregn $a_{15}$.', solution: '$\\Delta_1$: $8, 14, 20, 26$. $\\Delta_2$: $6, 6, 6$. $a = 3$. $3n^2$: $3, 12, 27, 48, 75$. Rest: $-1, -2, -3, -4, -5 = -n$. $a_n = 3n^2 - n$. $a_{15} = 3 \\cdot 225 - 15 = 660$.' },
            ],
            solution: 'a) $12n^2 + 2$ ✓ b) $385$ c) $n(n+1)$ d) $3n^2 - n$, $a_{15} = 660$',
            hideInlineSolution: true,
            hints: ['Utvid parentesene nøye og samle like ledd. For summene kan du bruke kjente summeformler.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Rekursive og eksplisitte formler
// LK20 KM241: Utforske og beskrive strukturar og forandringar i geometriske
//              mønster og tallmønster med figurar, ord og formlar
// ============================================================================

export const CHAPTER_9_7_4: TextbookChapter = {
  id: '9-7-4',
  courseId: '9',
  chapterNumber: '7.4',
  title: 'Rekursive og eksplisitte formler',
  description: 'Forstå forskjellen mellom rekursive formler (hvert ledd avhenger av det forrige) og eksplisitte formler (hvert ledd kan beregnes direkte).',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive strukturar og forandringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '9-7-4-intro',
      type: 'text',
      content: `## Rekursive og eksplisitte formler

Tenk deg at du skal forklare noen veien til skolen. Du kan gjøre det på to måter:

**Steg-for-steg (rekursivt):** «Gå 200 meter, sving til høyre, gå 300 meter, sving til venstre...» For å komme til steg 5 må du ha fullført steg 1 til 4 først.

**Direkte (eksplisitt):** «Skolen ligger på adressen Storgata 15.» Du kan gå rett dit uten å tenke på alle stegene.

Tallfølger kan beskrives på akkurat disse to måtene:
- **Rekursivt:** Vi forklarer hvordan hvert ledd lages fra det forrige
- **Eksplisitt:** Vi gir en formel som beregner hvert ledd direkte fra $n$

Begge metodene har fordeler, og i dette kapittelet skal du lære å bruke begge -- og gå mellom dem.`,
    },

    // ========== DEFINISJON: REKURSIV FORMEL ==========
    {
      id: '9-7-4-def-1',
      type: 'definition',
      title: 'Rekursiv formel',
      content: `En **rekursiv formel** beskriver hvert ledd ved hjelp av ett eller flere av de foregående leddene. Vi trenger også å vite startverdien(e).

**Form:**
$$a_{n+1} = f(a_n) \\quad \\text{og} \\quad a_1 = \\text{startverdi}$$

**Eksempler:**

**Aritmetisk følge:**
$a_1 = 3, \\quad a_{n+1} = a_n + 5$

Gir følgen: $3, 8, 13, 18, 23, \\ldots$

**Geometrisk følge:**
$a_1 = 2, \\quad a_{n+1} = 3 \\cdot a_n$

Gir følgen: $2, 6, 18, 54, 162, \\ldots$

**Fibonacci-følgen:**
$a_1 = 1, \\quad a_2 = 1, \\quad a_{n+2} = a_n + a_{n+1}$

Gir følgen: $1, 1, 2, 3, 5, 8, 13, \\ldots$`,
    },

    // ========== DEFINISJON: EKSPLISITT FORMEL ==========
    {
      id: '9-7-4-def-2',
      type: 'definition',
      title: 'Eksplisitt formel',
      content: `En **eksplisitt formel** gir det $n$-te leddet direkte som en funksjon av $n$, uten at vi trenger å vite de foregående leddene.

**Form:**
$$a_n = f(n)$$

**Eksempler:**

**Aritmetisk følge:** $a_n = 3 + (n-1) \\cdot 5 = 5n - 2$

$a_1 = 3$, $a_2 = 8$, $a_{10} = 48$, $a_{100} = 498$

**Geometrisk følge:** $a_n = 2 \\cdot 3^{n-1}$

$a_1 = 2$, $a_2 = 6$, $a_5 = 162$

**Kvadrattallene:** $a_n = n^2$

$a_1 = 1$, $a_5 = 25$, $a_{100} = 10\\,000$

Den store fordelen med eksplisitte formler er at vi kan beregne $a_{1000}$ uten å kjenne alle de foregående leddene.`,
    },

    // ========== DEFINISJON: SAMMENLIGNING ==========
    {
      id: '9-7-4-def-3',
      type: 'definition',
      title: 'Sammenligning: Rekursiv vs. eksplisitt',
      content: `| Egenskap | Rekursiv formel | Eksplisitt formel |
|----------|-----------------|-------------------|
| **Beskrivelse** | Neste ledd ut fra forrige | Leddet direkte fra $n$ |
| **Trenger startverdi?** | Ja, alltid | Nei |
| **Beregne $a_{100}$** | Må kjenne $a_1$ til $a_{99}$ | Sett inn $n = 100$ |
| **Lett å oppdage?** | Ofte ja (se på endringen) | Kan kreve mer arbeid |
| **Eksempel (aritm.)** | $a_{n+1} = a_n + 5$ | $a_n = 5n - 2$ |
| **Eksempel (geom.)** | $a_{n+1} = 3a_n$ | $a_n = 2 \\cdot 3^{n-1}$ |

**Tommelfingerregel:** En rekursiv formel er ofte enklere å sette opp (se på hva som skjer fra et ledd til det neste), mens en eksplisitt formel er mer praktisk for beregninger (du kan hoppe rett til leddet du vil ha).`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '9-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Fra rekursiv til eksplisitt',
      problem: 'En tallfølge er gitt rekursivt:\n\n$a_1 = 4, \\quad a_{n+1} = a_n + 6$\n\na) Skriv opp de fem første leddene.\nb) Finn en eksplisitt formel for $a_n$.\nc) Beregn $a_{50}$ med den eksplisitte formelen.',
      solution: `**a) De fem første leddene:**

$a_1 = 4$
$a_2 = a_1 + 6 = 4 + 6 = 10$
$a_3 = a_2 + 6 = 10 + 6 = 16$
$a_4 = a_3 + 6 = 16 + 6 = 22$
$a_5 = a_4 + 6 = 22 + 6 = 28$

Følgen: $4, 10, 16, 22, 28, \\ldots$

**b) Eksplisitt formel:**

Dette er en aritmetisk følge med $a_1 = 4$ og $d = 6$.

$$a_n = a_1 + (n-1) \\cdot d = 4 + (n-1) \\cdot 6 = 4 + 6n - 6 = 6n - 2$$

**Kontroll:** $a_1 = 6 \\cdot 1 - 2 = 4$ \\checkmark, $a_3 = 6 \\cdot 3 - 2 = 16$ \\checkmark

**c) $a_{50}$:**

$$a_{50} = 6 \\cdot 50 - 2 = 300 - 2 = 298$$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '9-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Fra eksplisitt til rekursiv',
      problem: 'Tallfølgen er gitt med den eksplisitte formelen $a_n = 3 \\cdot 2^{n-1}$.\n\na) Skriv opp de fem første leddene.\nb) Finn en rekursiv formel for følgen.',
      solution: `**a) De fem første leddene:**

$a_1 = 3 \\cdot 2^0 = 3 \\cdot 1 = 3$
$a_2 = 3 \\cdot 2^1 = 3 \\cdot 2 = 6$
$a_3 = 3 \\cdot 2^2 = 3 \\cdot 4 = 12$
$a_4 = 3 \\cdot 2^3 = 3 \\cdot 8 = 24$
$a_5 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$

Følgen: $3, 6, 12, 24, 48, \\ldots$

**b) Rekursiv formel:**

Vi ser at hvert ledd er det dobbelte av det forrige. La oss bekrefte:

$\\frac{a_{n+1}}{a_n} = \\frac{3 \\cdot 2^n}{3 \\cdot 2^{n-1}} = 2^{n-(n-1)} = 2^1 = 2$

Altså: $a_{n+1} = 2 \\cdot a_n$.

**Rekursiv formel:**

$$a_1 = 3, \\quad a_{n+1} = 2a_n$$`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '9-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Fibonacci-følgen (kun rekursiv)',
      problem: 'Fibonacci-følgen er definert rekursivt:\n\n$a_1 = 1, \\quad a_2 = 1, \\quad a_{n+2} = a_n + a_{n+1}$\n\na) Skriv opp de 10 første leddene.\nb) Finn forholdet $\\frac{a_{n+1}}{a_n}$ for $n = 3, 4, 5, 6, 7, 8, 9$. Hva legger du merke til?',
      solution: `**a) De 10 første leddene:**

$a_1 = 1$
$a_2 = 1$
$a_3 = 1 + 1 = 2$
$a_4 = 1 + 2 = 3$
$a_5 = 2 + 3 = 5$
$a_6 = 3 + 5 = 8$
$a_7 = 5 + 8 = 13$
$a_8 = 8 + 13 = 21$
$a_9 = 13 + 21 = 34$
$a_{10} = 21 + 34 = 55$

Følgen: $1, 1, 2, 3, 5, 8, 13, 21, 34, 55$

**b) Forholdene:**

| $n$ | $a_n$ | $a_{n+1}$ | $\\frac{a_{n+1}}{a_n}$ |
|-----|--------|-----------|----------------------|
| 3 | 2 | 3 | $1{,}500$ |
| 4 | 3 | 5 | $1{,}667$ |
| 5 | 5 | 8 | $1{,}600$ |
| 6 | 8 | 13 | $1{,}625$ |
| 7 | 13 | 21 | $1{,}615$ |
| 8 | 21 | 34 | $1{,}619$ |
| 9 | 34 | 55 | $1{,}618$ |

Forholdet nærmer seg tallet $\\frac{1 + \\sqrt{5}}{2} \\approx 1{,}618$, som kalles **det gylne snitt** ($\\varphi$). Dette er et av de mest berømte tallene i matematikken!

**Merk:** Fibonacci-følgen har ingen enkel eksplisitt formel (den eksakte formelen inneholder $\\sqrt{5}$ og er ganske avansert). Derfor er den rekursive formelen den naturlige måten å beskrive den på.`,
    },

    // ========== OPPGAVER ==========

    {
      id: '9-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-7-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv opp de fem første leddene i følgen gitt ved:\n\n$a_1 = 10, \\quad a_{n+1} = a_n - 3$',
        solution: '$a_1 = 10$, $a_2 = 7$, $a_3 = 4$, $a_4 = 1$, $a_5 = -2$. Vi trekker fra 3 for hvert steg.',
        hints: ['Start med $a_1 = 10$ og trekk fra 3 gjentatte ganger.'],
      },
    },

    {
      id: '9-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-7-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv opp de fem første leddene i følgen gitt ved:\n\n$a_1 = 1, \\quad a_{n+1} = 2a_n + 1$',
        solution: '$a_1 = 1$, $a_2 = 2 \\cdot 1 + 1 = 3$, $a_3 = 2 \\cdot 3 + 1 = 7$, $a_4 = 2 \\cdot 7 + 1 = 15$, $a_5 = 2 \\cdot 15 + 1 = 31$.',
        hints: ['Bruk formelen: gang forrige ledd med 2 og legg til 1.'],
      },
    },

    {
      id: '9-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-7-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør om den eksplisitte formelen $a_n = 4n + 3$ til en rekursiv formel.',
        solution: 'Vi regner: $a_{n+1} = 4(n+1) + 3 = 4n + 7$ og $a_n = 4n + 3$. Differansen: $a_{n+1} - a_n = 4$. Altså: $a_1 = 7$, $a_{n+1} = a_n + 4$.',
        hints: ['Finn differansen mellom $a_{n+1}$ og $a_n$.', 'Husk å oppgi startverdien $a_1$.'],
      },
    },

    {
      id: '9-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-7-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En følge er gitt rekursivt: $a_1 = 5, \\quad a_{n+1} = a_n + 2n + 1$.\n\na) Finn de fem første leddene.\nb) Finn en eksplisitt formel for $a_n$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn de fem første leddene.',
            solution: '$a_1 = 5$, $a_2 = 5 + 3 = 8$, $a_3 = 8 + 5 = 13$, $a_4 = 13 + 7 = 20$, $a_5 = 20 + 9 = 29$.',
          },
          {
            label: 'b',
            task: 'Finn en eksplisitt formel for $a_n$.',
            solution: 'Differanser: $3, 5, 7, 9$ (lineært økende). Andre differanser: $2, 2, 2$ (konstant). Kvadratisk formel: $a_n = n^2 + bn + c$. $n=1$: $5 = 1 + b + c$, $n=2$: $8 = 4 + 2b + c$. $b+c=4$, $2b+c=4$. Da $b=0$, $c=4$. Formel: $a_n = n^2 + 4$.',
          },
        ],
        solution: 'a) $5, 8, 13, 20, 29$. b) $a_n = n^2 + 4$.',
        hints: ['For b): Lag en differansetabell av de fem leddene du fant i a).'],
      },
    },

    {
      id: '9-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-7-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En geometrisk følge er gitt eksplisitt: $a_n = 5 \\cdot 2^n$.\n\na) Finn de fire første leddene.\nb) Skriv følgen på rekursiv form.\nc) Finn $a_{10}$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn de fire første leddene.',
            solution: '$a_1 = 5 \\cdot 2 = 10$, $a_2 = 5 \\cdot 4 = 20$, $a_3 = 5 \\cdot 8 = 40$, $a_4 = 5 \\cdot 16 = 80$.',
          },
          {
            label: 'b',
            task: 'Skriv følgen på rekursiv form.',
            solution: '$a_1 = 10$, $a_{n+1} = 2a_n$. Hvert ledd er det dobbelte av det forrige.',
          },
          {
            label: 'c',
            task: 'Finn $a_{10}$.',
            solution: '$a_{10} = 5 \\cdot 2^{10} = 5 \\cdot 1024 = 5120$.',
            answer: 5120,
          },
        ],
        solution: 'a) $10, 20, 40, 80$. b) $a_1 = 10$, $a_{n+1} = 2a_n$. c) $a_{10} = 5120$.',
        hints: ['Sett inn $n = 1, 2, 3, 4$ i formelen.'],
      },
    },

    {
      id: '9-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-7-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om utsagnene er sanne eller usanne. Begrunn svarene.\n\na) Alle aritmetiske følger kan skrives med eksplisitt formel.\nb) Alle følger som har eksplisitt formel, kan også skrives rekursivt.\nc) Fibonacci-følgen kan enkelt skrives med en eksplisitt formel.',
        subTasks: [
          {
            label: 'a',
            task: 'Alle aritmetiske følger kan skrives med eksplisitt formel.',
            solution: 'Sant. En aritmetisk følge med $a_1$ og $d$ har alltid den eksplisitte formelen $a_n = a_1 + (n-1)d$.',
          },
          {
            label: 'b',
            task: 'Alle følger som har eksplisitt formel, kan også skrives rekursivt.',
            solution: 'Sant. Hvis vi har $a_n = f(n)$, kan vi alltid skrive $a_{n+1} = f(n+1)$ som uttrykkes via $a_n = f(n)$. I praksis bruker vi $a_1 = f(1)$ og $a_{n+1} = a_n + [f(n+1) - f(n)]$.',
          },
          {
            label: 'c',
            task: 'Fibonacci-følgen kan enkelt skrives med en eksplisitt formel.',
            solution: 'Usant. Den eksakte eksplisitte formelen for Fibonacci-tallene (Binets formel) inneholder $\\sqrt{5}$ og er ganske komplisert. Den rekursive definisjonen er mye enklere.',
          },
        ],
        solution: 'a) Sant. b) Sant. c) Usant.',
        hints: ['Tenk på hva som kjennetegner de ulike typene formler.'],
      },
    },

    {
      id: '9-7-4-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-7-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En populasjon kaniner vokser slik at antall kaninpar hvert kvartal følger Fibonacci-mønsteret: $1, 1, 2, 3, 5, 8, 13, \\ldots$\n\na) Skriv opp den rekursive formelen.\nb) Hvor mange kaninpar er det etter 2 år (8 kvartaler)?\nc) Beregn forholdstallet $\\frac{a_8}{a_7}$ og sammenlign med det gylne snitt ($\\approx 1{,}618$).',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv opp den rekursive formelen.',
            solution: '$a_1 = 1$, $a_2 = 1$, $a_{n+2} = a_n + a_{n+1}$ for $n \\geq 1$.',
          },
          {
            label: 'b',
            task: 'Hvor mange kaninpar etter 8 kvartaler?',
            solution: 'Vi regner ut: $1, 1, 2, 3, 5, 8, 13, 21$. Etter 8 kvartaler er det $21$ kaninpar.',
            answer: 21,
          },
          {
            label: 'c',
            task: 'Beregn $\\frac{a_8}{a_7}$ og sammenlign med det gylne snitt.',
            solution: '$\\frac{a_8}{a_7} = \\frac{21}{13} \\approx 1{,}615$. Det gylne snitt er $\\approx 1{,}618$. Forholdet er svært nær det gylne snitt!',
          },
        ],
        solution: 'a) $a_1 = 1$, $a_2 = 1$, $a_{n+2} = a_n + a_{n+1}$. b) 21 kaninpar. c) $\\frac{21}{13} \\approx 1{,}615 \\approx \\varphi$.',
        hints: ['Husk at Fibonacci-følgen legger sammen de to foregående leddene.'],
      },
    },

    {
      id: '9-7-4-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-7-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En følge er definert rekursivt: $a_1 = 1000, \\quad a_{n+1} = 1{,}05 \\cdot a_n$.\n\nDette kan modellere et bankinnskudd på 1000 kr med 5 % rente per år.\n\na) Finn beløpet etter 1, 2, 3 og 4 år.\nb) Finn en eksplisitt formel for $a_n$.\nc) Hvor mye er det på kontoen etter 20 år? Bruk gjerne kalkulator.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn beløpet etter 1, 2, 3 og 4 år.',
            solution: '$a_1 = 1000$, $a_2 = 1050$, $a_3 = 1102{,}50$, $a_4 = 1157{,}63$ kr.',
          },
          {
            label: 'b',
            task: 'Finn en eksplisitt formel.',
            solution: 'Geometrisk følge med $a_1 = 1000$ og $k = 1{,}05$. $a_n = 1000 \\cdot 1{,}05^{n-1}$.',
          },
          {
            label: 'c',
            task: 'Beløp etter 20 år.',
            solution: '$a_{21} = 1000 \\cdot 1{,}05^{20} \\approx 1000 \\cdot 2{,}653 \\approx 2653$ kr.',
          },
        ],
        solution: 'a) 1000, 1050, 1102,50, 1157,63 kr. b) $a_n = 1000 \\cdot 1{,}05^{n-1}$. c) Ca. 2653 kr.',
        hints: [
          'Hvert år ganges beløpet med $1{,}05$ (100 % + 5 %).',
          'En geometrisk følge med kvotient $k$ har eksplisitt formel $a_n = a_1 \\cdot k^{n-1}$.',
        ],
      },
    },

    {
      id: '9-7-4-ex-9',
      type: 'exercise',
      exercise: {
        id: '9-7-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag både en rekursiv og en eksplisitt formel for følgende tallfølger:\n\na) $7, 12, 17, 22, 27, \\ldots$\nb) $3, 9, 27, 81, 243, \\ldots$\nc) $0, 3, 8, 15, 24, \\ldots$',
        subTasks: [
          {
            label: 'a',
            task: '$7, 12, 17, 22, 27, \\ldots$',
            solution: 'Rekursiv: $a_1 = 7$, $a_{n+1} = a_n + 5$. Eksplisitt: $a_n = 5n + 2$ (aritmetisk med $d = 5$).',
          },
          {
            label: 'b',
            task: '$3, 9, 27, 81, 243, \\ldots$',
            solution: 'Rekursiv: $a_1 = 3$, $a_{n+1} = 3a_n$. Eksplisitt: $a_n = 3^n$ (geometrisk med $k = 3$).',
          },
          {
            label: 'c',
            task: '$0, 3, 8, 15, 24, \\ldots$',
            solution: 'Eksplisitt: $a_n = n^2 - 1$ (differansetabell gir konstant $\\Delta_2 = 2$). Rekursiv: $a_1 = 0$, $a_{n+1} = a_n + 2n + 1$.',
          },
        ],
        solution: 'a) $a_n = 5n + 2$, $a_{n+1} = a_n + 5$. b) $a_n = 3^n$, $a_{n+1} = 3a_n$. c) $a_n = n^2 - 1$, $a_{n+1} = a_n + 2n + 1$.',
        hints: [
          'For a) og b): Sjekk om følgen er aritmetisk eller geometrisk.',
          'For c): Bruk differansetabell for å finne den eksplisitte formelen.',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '9-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Rekursiv formel
- Beskriver neste ledd ut fra forrige ledd
- Trenger alltid en startverdi ($a_1$)
- Enkel å sette opp, men upraktisk for store $n$
- Eksempel: $a_1 = 3$, $a_{n+1} = a_n + 5$

### Eksplisitt formel
- Gir leddet direkte fra $n$
- Trenger ikke foregående ledd
- Praktisk for beregninger
- Eksempel: $a_n = 5n - 2$

### Viktige typer
| Type | Rekursiv | Eksplisitt |
|------|----------|-----------|
| Aritmetisk | $a_{n+1} = a_n + d$ | $a_n = a_1 + (n-1)d$ |
| Geometrisk | $a_{n+1} = k \\cdot a_n$ | $a_n = a_1 \\cdot k^{n-1}$ |
| Fibonacci | $a_{n+2} = a_n + a_{n+1}$ | (komplisert) |

### Praktisk bruk
- **Renter:** Geometrisk følge med $k = 1 + \\frac{r}{100}$
- **Lineær vekst:** Aritmetisk følge (fast tillegg)
- **Befolkningsvekst:** Ofte geometrisk (fast prosentvis økning)`,
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-7-4-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-7-4-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-7-4-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Avgjør om formelen er rekursiv eller eksplisitt, og bruk den til å finne de fem første leddene.',
            subTasks: [
              { label: 'a', task: '$a_n = 4n - 1$', solution: 'Eksplisitt. $a_1 = 3$, $a_2 = 7$, $a_3 = 11$, $a_4 = 15$, $a_5 = 19$.' },
              { label: 'b', task: '$a_1 = 2$, $a_{n+1} = a_n + 5$', solution: 'Rekursiv. $a_1 = 2$, $a_2 = 7$, $a_3 = 12$, $a_4 = 17$, $a_5 = 22$.' },
              { label: 'c', task: '$a_n = 3 \\cdot 2^{n-1}$', solution: 'Eksplisitt. $a_1 = 3$, $a_2 = 6$, $a_3 = 12$, $a_4 = 24$, $a_5 = 48$.' },
              { label: 'd', task: '$a_1 = 100$, $a_{n+1} = a_n - 8$', solution: 'Rekursiv. $a_1 = 100$, $a_2 = 92$, $a_3 = 84$, $a_4 = 76$, $a_5 = 68$.' },
              { label: 'e', task: '$a_n = n^2 + 1$', solution: 'Eksplisitt. $a_1 = 2$, $a_2 = 5$, $a_3 = 10$, $a_4 = 17$, $a_5 = 26$.' },
              { label: 'f', task: '$a_1 = 1$, $a_{n+1} = 3 \\cdot a_n$', solution: 'Rekursiv. $a_1 = 1$, $a_2 = 3$, $a_3 = 9$, $a_4 = 27$, $a_5 = 81$.' },
            ],
            solution: 'a) Eksplisitt: $3, 7, 11, 15, 19$ b) Rekursiv: $2, 7, 12, 17, 22$ c) Eksplisitt: $3, 6, 12, 24, 48$ d) Rekursiv: $100, 92, 84, 76, 68$ e) Eksplisitt: $2, 5, 10, 17, 26$ f) Rekursiv: $1, 3, 9, 27, 81$',
            hideInlineSolution: true,
            hints: ['En eksplisitt formel gir $a_n$ direkte fra $n$. En rekursiv formel beskriver neste ledd ut fra forrige, og trenger en startverdi.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-4-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-7-4-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Skriv om mellom rekursiv og eksplisitt formel.',
            subTasks: [
              { label: 'a', task: 'Gjør om til eksplisitt: $a_1 = 3$, $a_{n+1} = a_n + 4$.', solution: 'Aritmetisk med $d = 4$: $a_n = 3 + (n-1) \\cdot 4 = 4n - 1$.' },
              { label: 'b', task: 'Gjør om til eksplisitt: $a_1 = 5$, $a_{n+1} = 2 \\cdot a_n$.', solution: 'Geometrisk med $k = 2$: $a_n = 5 \\cdot 2^{n-1}$.' },
              { label: 'c', task: 'Gjør om til rekursiv: $a_n = 7n + 2$.', solution: '$a_1 = 9$, $a_{n+1} = a_n + 7$ (differansen er $7$).' },
              { label: 'd', task: 'Gjør om til rekursiv: $a_n = 4 \\cdot 3^{n-1}$.', solution: '$a_1 = 4$, $a_{n+1} = 3 \\cdot a_n$ (kvotienten er $3$).' },
              { label: 'e', task: 'Gjør om til eksplisitt: $a_1 = 50$, $a_{n+1} = a_n - 6$.', solution: 'Aritmetisk med $d = -6$: $a_n = 50 + (n-1)(-6) = 56 - 6n$.' },
              { label: 'f', task: 'Gjør om til rekursiv: $a_n = 1000 \\cdot 0{,}5^{n-1}$.', solution: '$a_1 = 1000$, $a_{n+1} = 0{,}5 \\cdot a_n$ (kvotienten er $0{,}5$).' },
            ],
            solution: 'a) $4n - 1$ b) $5 \\cdot 2^{n-1}$ c) $a_1 = 9$, $a_{n+1} = a_n + 7$ d) $a_1 = 4$, $a_{n+1} = 3a_n$ e) $56 - 6n$ f) $a_1 = 1000$, $a_{n+1} = 0{,}5 \\cdot a_n$',
            hideInlineSolution: true,
            hints: ['For aritmetiske følger er differansen $d$ den du legger til. For geometriske er kvotienten $k$ den du ganger med.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-4-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-7-4-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk den oppgitte formelen til å svare på spørsmålene.',
            subTasks: [
              { label: 'a', task: '$a_n = 2n + 3$. Finn $a_1$, $a_{10}$ og $a_{100}$.', solution: '$a_1 = 5$, $a_{10} = 23$, $a_{100} = 203$.' },
              { label: 'b', task: '$a_n = 5 \\cdot 2^{n-1}$. Finn $a_1$, $a_5$ og $a_{10}$.', solution: '$a_1 = 5$, $a_5 = 80$, $a_{10} = 2560$.' },
              { label: 'c', task: '$a_n = n^2 - n$. Finn $a_1$, $a_6$ og $a_{10}$.', solution: '$a_1 = 0$, $a_6 = 30$, $a_{10} = 90$.' },
              { label: 'd', task: '$a_n = 100 - 7n$. Finn for hvilken $n$ $a_n$ blir negativ første gang.', solution: '$100 - 7n < 0 \\Rightarrow n > \\frac{100}{7} \\approx 14{,}3$. Første negative: $a_{15} = 100 - 105 = -5$.' },
              { label: 'e', task: '$a_n = 3 \\cdot 2^{n-1}$. Finn for hvilken $n$ $a_n$ overstiger $1000$.', solution: '$3 \\cdot 2^{n-1} > 1000 \\Rightarrow 2^{n-1} > 333{,}3$. $2^8 = 256$, $2^9 = 512$. Svar: $n = 10$ ($a_{10} = 1536$).' },
              { label: 'f', task: '$a_n = \\frac{n(n+1)}{2}$. Finn for hvilken $n$ $a_n = 55$.', solution: '$\\frac{n(n+1)}{2} = 55 \\Rightarrow n(n+1) = 110 \\Rightarrow n = 10$ (siden $10 \\cdot 11 = 110$).' },
            ],
            solution: 'a) $5, 23, 203$ b) $5, 80, 2560$ c) $0, 30, 90$ d) $n = 15$ e) $n = 10$ f) $n = 10$',
            hideInlineSolution: true,
            hints: ['Sett inn verdien for $n$ direkte i formelen. For å finne $n$, sett opp en ligning og løs.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-4-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-7-4-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sett opp rekursiv og eksplisitt formel for praktiske situasjoner.',
            subTasks: [
              { label: 'a', task: 'Du setter inn $5000$ kr i banken til $3\\%$ årlig rente. Sett opp rekursiv og eksplisitt formel for beløpet etter $n$ år.', solution: 'Rekursiv: $a_0 = 5000$, $a_{n+1} = 1{,}03 \\cdot a_n$. Eksplisitt: $a_n = 5000 \\cdot 1{,}03^n$.' },
              { label: 'b', task: 'Hvor mye har du i banken etter $10$ år (fra a)?', solution: '$a_{10} = 5000 \\cdot 1{,}03^{10} \\approx 5000 \\cdot 1{,}3439 \\approx 6720$ kr.' },
              { label: 'c', task: 'En bil mister $15\\%$ av verdien hvert år. Ny pris er $350\\,000$ kr. Sett opp begge formler.', solution: 'Rekursiv: $a_0 = 350\\,000$, $a_{n+1} = 0{,}85 \\cdot a_n$. Eksplisitt: $a_n = 350\\,000 \\cdot 0{,}85^n$.' },
              { label: 'd', task: 'Hva er bilen verdt etter $5$ år (fra c)?', solution: '$a_5 = 350\\,000 \\cdot 0{,}85^5 \\approx 350\\,000 \\cdot 0{,}4437 \\approx 155\\,300$ kr.' },
              { label: 'e', task: 'En løper trener og øker distansen med $0{,}5$ km per uke. Uke $1$ løper hun $3$ km. Sett opp begge formler og finn distansen i uke $20$.', solution: 'Rekursiv: $a_1 = 3$, $a_{n+1} = a_n + 0{,}5$. Eksplisitt: $a_n = 3 + (n-1) \\cdot 0{,}5 = 0{,}5n + 2{,}5$. $a_{20} = 12{,}5$ km.' },
            ],
            solution: 'a) $a_n = 5000 \\cdot 1{,}03^n$ b) $\\approx 6720$ kr c) $a_n = 350\\,000 \\cdot 0{,}85^n$ d) $\\approx 155\\,300$ kr e) $12{,}5$ km',
            hideInlineSolution: true,
            hints: ['Prosentvis endring gir geometrisk følge med $k = 1 \\pm \\frac{p}{100}$. Fast endring gir aritmetisk følge.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-4-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-7-4-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Arbeid med Fibonacci-lignende følger og andre rekursive mønstre.',
            subTasks: [
              { label: 'a', task: 'Fibonacci-følgen er definert ved $a_1 = 1$, $a_2 = 1$, $a_{n+2} = a_n + a_{n+1}$. Finn $a_3, a_4, \\ldots, a_{10}$.', solution: '$1, 1, 2, 3, 5, 8, 13, 21, 34, 55$.' },
              { label: 'b', task: 'En følge er definert ved $a_1 = 2$, $a_2 = 3$, $a_{n+2} = a_n + a_{n+1}$. Finn de $8$ første leddene.', solution: '$2, 3, 5, 8, 13, 21, 34, 55$.' },
              { label: 'c', task: 'En følge er definert ved $a_1 = 1$, $a_{n+1} = 2a_n + 1$. Finn de $6$ første leddene.', solution: '$1, 3, 7, 15, 31, 63$.' },
              { label: 'd', task: 'Se på følgen fra c). Finn sammenhengen mellom $a_n$ og potenser av $2$. Foreslå en eksplisitt formel.', solution: '$a_n = 2^n - 1$. Sjekk: $2^1 - 1 = 1$ ✓, $2^2 - 1 = 3$ ✓, $2^3 - 1 = 7$ ✓, $2^6 - 1 = 63$ ✓.' },
              { label: 'e', task: 'Tårnene i Hanoi: Med $n$ skiver er minste antall trekk $a_n = 2^n - 1$. Hvor mange trekk trengs for $n = 10$ skiver?', solution: '$a_{10} = 2^{10} - 1 = 1024 - 1 = 1023$ trekk.' },
            ],
            solution: 'a) $1, 1, 2, 3, 5, 8, 13, 21, 34, 55$ b) $2, 3, 5, 8, 13, 21, 34, 55$ c) $1, 3, 7, 15, 31, 63$ d) $a_n = 2^n - 1$ e) $1023$',
            hideInlineSolution: true,
            hints: ['For rekursive følger: bruk forrige ledd til å beregne neste. Se etter kjente tallmønstre i leddene.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-7-4-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-7-4-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Løs sammensatte oppgaver om rekursive og eksplisitte formler.',
            subTasks: [
              { label: 'a', task: 'En populasjon starter på $100$ individer. Hvert år dobles populasjonen, men $20$ individer dør. Sett opp en rekursiv formel og finn populasjonen etter $5$ år.', solution: '$a_0 = 100$, $a_{n+1} = 2a_n - 20$. $a_1 = 180$, $a_2 = 340$, $a_3 = 660$, $a_4 = 1300$, $a_5 = 2580$.' },
              { label: 'b', task: 'Vis at den eksplisitte formelen for følgen i a) er $a_n = 120 \\cdot 2^n - 20$. Sjekk for $n = 0, 1, 2$.', solution: '$a_0 = 120 \\cdot 1 - 20 = 100$ ✓, $a_1 = 120 \\cdot 2 - 20 = 220$. Men dette stemmer ikke med $180$. La oss beregne på nytt: $a_n = 80 \\cdot 2^n + 20$. $a_0 = 80 + 20 = 100$ ✓, $a_1 = 160 + 20 = 180$ ✓, $a_2 = 320 + 20 = 340$ ✓. Korrekt formel: $a_n = 80 \\cdot 2^n + 20$.' },
              { label: 'c', task: 'Et lån på $200\\,000$ kr har $4\\%$ rente. Du betaler $20\\,000$ kr per år. Sett opp rekursiv formel og finn gjelden etter $3$ år.', solution: '$a_0 = 200\\,000$, $a_{n+1} = 1{,}04 \\cdot a_n - 20\\,000$. $a_1 = 208\\,000 - 20\\,000 = 188\\,000$. $a_2 = 195\\,520 - 20\\,000 = 175\\,520$. $a_3 = 182\\,540{,}8 - 20\\,000 = 162\\,540{,}80$ kr.' },
              { label: 'd', task: 'To følger er definert slik: $a_n = 3n + 1$ og $b_n = 2^n$. For hvilken minste $n \\geq 1$ er $b_n > a_n$?', solution: '$n = 1$: $a_1 = 4$, $b_1 = 2$. $n = 2$: $a_2 = 7$, $b_2 = 4$. $n = 3$: $a_3 = 10$, $b_3 = 8$. $n = 4$: $a_4 = 13$, $b_4 = 16$. Svar: $n = 4$.' },
            ],
            solution: 'a) $a_5 = 2580$ b) $a_n = 80 \\cdot 2^n + 20$ c) $\\approx 162\\,541$ kr d) $n = 4$',
            hideInlineSolution: true,
            hints: ['For a) og c): bruk den rekursive formelen steg for steg. For b): test den eksplisitte formelen mot de kjente verdiene. For d): sammenlign tabellverdier.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 7
// ============================================================================

export const MATEMATIKK_9_DEL7_CHAPTERS = [
  CHAPTER_9_7_1,
  CHAPTER_9_7_2,
  CHAPTER_9_7_3,
  CHAPTER_9_7_4,
];
