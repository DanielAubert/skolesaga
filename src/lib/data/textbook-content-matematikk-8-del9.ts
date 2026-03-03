/**
 * Matematikk 8. klasse - Del 9: Mønstre og generalisering (KM202)
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Kapittel 8.1: Tallmønstre og tallfølger
 * Kapittel 8.2: Figurtall og geometriske mønstre
 * Kapittel 8.3: Generalisering med variabler og formler
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8.1: Tallmønstre og tallfølger
// LK20 KM202: Utforske og beskrive strukturar og endringar i geometriske
//              mønster og tallmønster med figurar, ord og formlar
// ============================================================================

export const CHAPTER_8_8_1: TextbookChapter = {
  id: '8-8-1',
  courseId: '8',
  chapterNumber: '8.1',
  title: 'Tallmønstre og tallfølger',
  description: 'Lær å gjenkjenne mønstre i tallfølger, finne neste ledd og beskrive regelen med ord.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-8-1-intro',
      type: 'text',
      content: `## Tallmønstre og tallfølger

Overalt rundt oss finner vi mønstre. Tenk på bladene på en plante, mønstrene i en solsikke eller rytmen i en sang. Også i matematikken finnes det mange spennende mønstre.

Når vi skriver opp tall i en bestemt rekkefølge, kaller vi det en **tallfølge**. Hvert tall i følgen kaller vi et **ledd**. Å finne mønsteret i en tallfølge er litt som å løse et puslespill -- vi leter etter regelen som binder tallene sammen.

Her er noen eksempler på tallfølger:
- $2, 4, 6, 8, 10, \\ldots$ (partallene)
- $5, 10, 15, 20, 25, \\ldots$ (fem-gangen)
- $1, 4, 9, 16, 25, \\ldots$ (kvadrattallene)

I dette kapittelet skal du lære å:
- Gjenkjenne mønstre i tallfølger
- Finne neste ledd i en følge
- Beskrive mønsteret med ord
- Jobbe med aritmetiske følger (der vi legger til det samme tallet hver gang)`,
    },

    // ========== DEFINISJON: TALLFØLGE ==========
    {
      id: '8-8-1-def-1',
      type: 'definition',
      title: 'Tallfølge',
      content: `En **tallfølge** er en rekke med tall som følger et bestemt mønster eller en regel.

Hvert tall i følgen kaller vi et **ledd**. Vi nummererer leddene slik:

- Det **første** leddet kaller vi $a_1$
- Det **andre** leddet kaller vi $a_2$
- Det **tredje** leddet kaller vi $a_3$
- og så videre ...

Vi skriver: $a_1, \\, a_2, \\, a_3, \\, a_4, \\, \\ldots$

**Eksempel:** I tallfølgen $3, 7, 11, 15, \\ldots$ er:
- $a_1 = 3$ (første ledd)
- $a_2 = 7$ (andre ledd)
- $a_3 = 11$ (tredje ledd)
- $a_4 = 15$ (fjerde ledd)`,
    },

    // ========== DEFINISJON: ARITMETISK FØLGE ==========
    {
      id: '8-8-1-def-2',
      type: 'definition',
      title: 'Aritmetisk følge',
      content: `En **aritmetisk følge** er en tallfølge der vi legger til (eller trekker fra) **det samme tallet** for å komme fra ett ledd til det neste.

Det faste tallet vi legger til, kaller vi **differansen** og skriver $d$.

**Eksempler:**

| Følge | Differanse $d$ | Beskrivelse |
|-------|---------------|-------------|
| $2, 5, 8, 11, 14, \\ldots$ | $d = 3$ | Vi legger til $3$ |
| $20, 17, 14, 11, \\ldots$ | $d = -3$ | Vi trekker fra $3$ |
| $10, 10{,}5, \\, 11, \\, 11{,}5, \\ldots$ | $d = 0{,}5$ | Vi legger til $0{,}5$ |

**Slik finner vi differansen:** Vi trekker et ledd fra det neste:

$$d = a_2 - a_1$$

Dersom differansen er den samme mellom alle par av nabotall, er følgen aritmetisk.`,
    },

    // ========== DEFINISJON: FINNE NESTE LEDD ==========
    {
      id: '8-8-1-def-3',
      type: 'definition',
      title: 'Å finne neste ledd',
      content: `Når vi kjenner mønsteret i en tallfølge, kan vi finne neste ledd.

**For en aritmetisk følge:**

$$\\text{neste ledd} = \\text{forrige ledd} + d$$

**Eksempel:** Følgen $4, 9, 14, 19, \\ldots$

Differansen er $d = 9 - 4 = 5$.

- Neste ledd: $19 + 5 = 24$
- Deretter: $24 + 5 = 29$
- Deretter: $29 + 5 = 34$

Følgen fortsetter: $4, 9, 14, 19, 24, 29, 34, \\ldots$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Gjenkjenne mønsteret',
      problem: 'Se på tallfølgen $6, 10, 14, 18, \\ldots$\n\na) Hva er differansen?\nb) Beskriv mønsteret med ord.\nc) Finn de tre neste leddene.',
      solution: `**a) Differansen:**

Vi regner ut forskjellen mellom nabotallene:

$10 - 6 = 4$
$14 - 10 = 4$
$18 - 14 = 4$

Differansen er $d = 4$.

**b) Mønsteret med ord:**

Vi starter på $6$ og legger til $4$ for hvert nytt ledd. Tallfølgen er en aritmetisk følge med differanse $4$.

**c) De tre neste leddene:**

$a_5 = 18 + 4 = 22$
$a_6 = 22 + 4 = 26$
$a_7 = 26 + 4 = 30$

De tre neste leddene er $22, 26, 30$.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Synkende følge',
      problem: 'En tallfølge starter slik: $50, 43, 36, 29, \\ldots$\n\na) Er dette en aritmetisk følge? Begrunn svaret.\nb) Finn de tre neste leddene.\nc) Vil følgen noen gang nå $0$? Forklar.',
      solution: `**a) Er det en aritmetisk følge?**

Vi sjekker differansene:

$43 - 50 = -7$
$36 - 43 = -7$
$29 - 36 = -7$

Differansen er konstant $d = -7$. Ja, dette er en aritmetisk følge. Vi trekker fra $7$ for hvert steg.

**b) De tre neste leddene:**

$a_5 = 29 - 7 = 22$
$a_6 = 22 - 7 = 15$
$a_7 = 15 - 7 = 8$

De tre neste leddene er $22, 15, 8$.

**c) Vil følgen nå $0$?**

Vi fortsetter: $8 - 7 = 1$ og $1 - 7 = -6$.

Følgen passerer gjennom $1$, men hopper over $0$ (fordi $1 - 7 = -6$). Altså vil følgen **aldri** bli nøyaktig $0$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Mer enn bare aritmetiske følger',
      problem: 'Se på tallfølgen $1, 4, 9, 16, 25, \\ldots$\n\na) Er dette en aritmetisk følge?\nb) Hva er mønsteret?\nc) Finn det neste leddet.',
      solution: `**a) Er det en aritmetisk følge?**

Vi sjekker differansene:

$4 - 1 = 3$
$9 - 4 = 5$
$16 - 9 = 7$
$25 - 16 = 9$

Differansene er $3, 5, 7, 9$ -- de er **ikke** like. Altså er dette **ikke** en aritmetisk følge.

**b) Mønsteret:**

Hvis vi ser nøyere på tallene:
$1 = 1 \\cdot 1 = 1^2$
$4 = 2 \\cdot 2 = 2^2$
$9 = 3 \\cdot 3 = 3^2$
$16 = 4 \\cdot 4 = 4^2$
$25 = 5 \\cdot 5 = 5^2$

Dette er **kvadrattallene** -- vi ganger hvert tall med seg selv!

**c) Det neste leddet:**

$a_6 = 6^2 = 36$

Det neste leddet er $36$.`,
    },

    // ========== TIPS ==========
    {
      id: '8-8-1-tip-1',
      type: 'tip',
      title: 'Tips for å finne mønstre',
      content: `Når du skal finne mønsteret i en tallfølge, prøv dette:

1. **Regn ut differansene** mellom nabotallene. Er de like? Da er det en aritmetisk følge.
2. **Se etter kjente tall.** Er det partall, oddetall, kvadrattall eller tall fra gangetabellen?
3. **Prøv å beskrive med ord.** Kan du forklare regelen med en setning?
4. **Test regelen din.** Sjekk at den fungerer for alle leddene du kjenner.`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-8-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn de tre neste leddene i tallfølgen.',
        subTasks: [
          {
            label: 'a',
            task: '$2, 5, 8, 11, \\ldots$',
            solution: '$14, 17, 20$ (legger til $3$ hver gang)',
          },
          {
            label: 'b',
            task: '$10, 20, 30, 40, \\ldots$',
            solution: '$50, 60, 70$ (legger til $10$ hver gang)',
          },
          {
            label: 'c',
            task: '$100, 93, 86, 79, \\ldots$',
            solution: '$72, 65, 58$ (trekker fra $7$ hver gang)',
          },
        ],
        solution: 'a) $14, 17, 20$. b) $50, 60, 70$. c) $72, 65, 58$.',
        hints: ['Se på differansen mellom hvert ledd.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-8-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn differansen $d$ i hver aritmetiske følge.',
        subTasks: [
          {
            label: 'a',
            task: '$3, 8, 13, 18, \\ldots$',
            solution: '$d = 8 - 3 = 5$',
            answer: 5,
          },
          {
            label: 'b',
            task: '$40, 35, 30, 25, \\ldots$',
            solution: '$d = 35 - 40 = -5$',
            answer: -5,
          },
          {
            label: 'c',
            task: '$1, 4, 7, 10, \\ldots$',
            solution: '$d = 4 - 1 = 3$',
            answer: 3,
          },
          {
            label: 'd',
            task: '$0{,}5, \\, 1, \\, 1{,}5, \\, 2, \\ldots$',
            solution: '$d = 1 - 0{,}5 = 0{,}5$',
          },
        ],
        solution: 'a) $d = 5$. b) $d = -5$. c) $d = 3$. d) $d = 0{,}5$.',
        hints: ['Trekk det første leddet fra det andre for å finne differansen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-8-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv mønsteret med ord, og finn de to neste leddene.',
        subTasks: [
          {
            label: 'a',
            task: '$1, 3, 5, 7, 9, \\ldots$',
            solution: 'Oddetallene. Vi legger til $2$ hver gang. Neste: $11, 13$.',
          },
          {
            label: 'b',
            task: '$4, 8, 12, 16, 20, \\ldots$',
            solution: 'Fire-gangen. Vi legger til $4$ hver gang. Neste: $24, 28$.',
          },
          {
            label: 'c',
            task: '$30, 27, 24, 21, \\ldots$',
            solution: 'Vi trekker fra $3$ hver gang. Neste: $18, 15$.',
          },
        ],
        solution: 'a) Oddetallene, $11, 13$. b) Fire-gangen, $24, 28$. c) Trekker fra $3$, $18, 15$.',
        hints: ['Se på om tallene øker eller minker, og med hvor mye.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-8-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om følgen er aritmetisk eller ikke. Begrunn svaret.',
        subTasks: [
          {
            label: 'a',
            task: '$6, 11, 16, 21, 26, \\ldots$',
            solution: 'Aritmetisk. Differansene er $5, 5, 5, 5$ -- konstant $d = 5$.',
          },
          {
            label: 'b',
            task: '$2, 4, 8, 16, 32, \\ldots$',
            solution: 'Ikke aritmetisk. Differansene er $2, 4, 8, 16$ -- de er ikke like. (Her dobler vi tallet for hvert steg.)',
          },
          {
            label: 'c',
            task: '$1, 4, 9, 16, 25, \\ldots$',
            solution: 'Ikke aritmetisk. Differansene er $3, 5, 7, 9$ -- de er ikke like. (Dette er kvadrattallene.)',
          },
        ],
        solution: 'a) Aritmetisk ($d = 5$). b) Ikke aritmetisk (tallene dobles). c) Ikke aritmetisk (kvadrattall).',
        hints: ['Regn ut differansen mellom hvert par av nabotall. Er differansene like?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-8-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Magnus trener til en løpekonkurranse. Den første uka løper han 2 km. Hver uke øker han med 1,5 km.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv opp hvor langt han løper de fem første ukene.',
            solution: '$2, \\, 3{,}5, \\, 5, \\, 6{,}5, \\, 8$ km.',
          },
          {
            label: 'b',
            task: 'Er dette en aritmetisk følge? Begrunn svaret.',
            solution: 'Ja, det er en aritmetisk følge med $d = 1{,}5$ km. Han legger til $1{,}5$ km hver uke.',
          },
          {
            label: 'c',
            task: 'Hvor langt løper han i uke 10?',
            solution: 'Vi legger til $1{,}5$ ni ganger: $2 + 9 \\cdot 1{,}5 = 2 + 13{,}5 = 15{,}5$ km.',
          },
        ],
        solution: 'a) $2, \\, 3{,}5, \\, 5, \\, 6{,}5, \\, 8$ km. b) Ja, $d = 1{,}5$. c) $15{,}5$ km.',
        hints: ['Start med 2 km og legg til 1,5 km for hver uke.', 'For c): Du kan telle deg frem, eller bruke at uke 10 er 9 steg fra uke 1.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-8-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Tallfølge
- En **tallfølge** er en rekke med tall som følger et bestemt mønster
- Hvert tall i følgen kaller vi et **ledd**
- Vi bruker $a_1, a_2, a_3, \\ldots$ for å betegne leddene

### Aritmetisk følge
- I en aritmetisk følge legger vi til **det samme tallet** hver gang
- Det faste tallet kaller vi **differansen** $d$
- Vi finner differansen ved å regne: $d = a_2 - a_1$
- Neste ledd = forrige ledd $+ \\, d$

### Huskeregel
- Positiv differanse ($d > 0$): Følgen **øker**
- Negativ differanse ($d < 0$): Følgen **synker**
- Ikke alle tallfølger er aritmetiske! (f.eks. kvadrattallene)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2: Figurtall og geometriske mønstre
// LK20 KM202: Utforske og beskrive strukturar og endringar i geometriske
//              mønster og tallmønster med figurar, ord og formlar
// ============================================================================

export const CHAPTER_8_8_2: TextbookChapter = {
  id: '8-8-2',
  courseId: '8',
  chapterNumber: '8.2',
  title: 'Figurtall og geometriske mønstre',
  description: 'Utforsk trekanttall, kvadrattall og andre figurtall, og lær å se sammenhengen mellom figurer og tall.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-8-2-intro',
      type: 'text',
      content: `## Figurtall og geometriske mønstre

Noen tallfølger kan vi se for oss som figurer. Tenk deg at du bygger figurer med brikker, kuler eller prikker. For hver ny figur legger du til flere brikker etter et bestemt mønster. Tallene som forteller hvor mange brikker du trenger, kaller vi **figurtall**.

Figurtall har blitt studert av matematikere i over 2500 år! Allerede i det gamle Hellas oppdaget Pythagoras og vennene hans at man kunne ordne prikker i trekanter, firkanter og andre former.

I dette kapittelet skal du:
- Lære om trekanttall og kvadrattall
- Tegne figurer og telle brikker
- Finne mønsteret i hvordan figurene vokser
- Bruke tabeller til å holde oversikt`,
    },

    // ========== DEFINISJON: FIGURTALL ==========
    {
      id: '8-8-2-def-1',
      type: 'definition',
      title: 'Figurtall',
      content: `Et **figurtall** er et tall som kan vises som prikker ordnet i en geometrisk figur.

Vi bygger figurene steg for steg. For hvert steg lager vi en større figur og teller hvor mange prikker vi trenger.

| Figurnummer ($n$) | Figur | Antall prikker |
|-------------------|-------|----------------|
| $1$ | Figur 1 (liten) | $a_1$ |
| $2$ | Figur 2 (større) | $a_2$ |
| $3$ | Figur 3 (enda større) | $a_3$ |
| $\\vdots$ | $\\vdots$ | $\\vdots$ |

Ved å studere hvordan antallet prikker vokser, kan vi finne et mønster og forutsi hvor mange prikker vi trenger for store figurer.`,
    },

    // ========== DEFINISJON: TREKANTTALL ==========
    {
      id: '8-8-2-def-2',
      type: 'definition',
      title: 'Trekanttall',
      content: `**Trekanttallene** er tall som kan ordnes som prikker i en trekant.

Vi bygger trekanten rad for rad:

- **Figur 1:** 1 prikk (bare toppen)
- **Figur 2:** $1 + 2 = 3$ prikker (toppen + en rad med 2)
- **Figur 3:** $1 + 2 + 3 = 6$ prikker
- **Figur 4:** $1 + 2 + 3 + 4 = 10$ prikker

De første trekanttallene er:

$$1, \\, 3, \\, 6, \\, 10, \\, 15, \\, 21, \\, 28, \\, \\ldots$$

**Mønsteret:** Figur $n$ har $n$ rader, og rad $k$ har $k$ prikker.

Trekanttall nr. $n$ er summen av tallene fra $1$ til $n$:

$$T_n = 1 + 2 + 3 + \\cdots + n = \\frac{n \\cdot (n + 1)}{2}$$`,
    },

    // ========== DEFINISJON: KVADRATTALL ==========
    {
      id: '8-8-2-def-3',
      type: 'definition',
      title: 'Kvadrattall',
      content: `**Kvadrattallene** er tall som kan ordnes som prikker i et kvadrat.

- **Figur 1:** $1 \\times 1 = 1$ prikk
- **Figur 2:** $2 \\times 2 = 4$ prikker
- **Figur 3:** $3 \\times 3 = 9$ prikker
- **Figur 4:** $4 \\times 4 = 16$ prikker

De første kvadrattallene er:

$$1, \\, 4, \\, 9, \\, 16, \\, 25, \\, 36, \\, 49, \\, \\ldots$$

**Mønsteret:** Figur $n$ er et $n \\times n$ kvadrat, altså:

$$K_n = n^2$$

**En artig oppdagelse:** Vi kan bygge kvadrattall ved å legge sammen oddetall:

- $1 = 1$
- $1 + 3 = 4$
- $1 + 3 + 5 = 9$
- $1 + 3 + 5 + 7 = 16$

Summen av de $n$ første oddetallene er alltid $n^2$!`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Trekanttall',
      problem: 'a) Finn det 5. og 6. trekanttallet.\nb) Emilie stabler hermetikkbokser i en pyramide. Nederste rad har 6 bokser, neste har 5, og så videre opp til 1 boks øverst. Hvor mange bokser bruker hun totalt?',
      solution: `**a) Det 5. og 6. trekanttallet:**

$T_5 = 1 + 2 + 3 + 4 + 5 = 15$

eller med formelen: $T_5 = \\frac{5 \\cdot 6}{2} = 15$

$T_6 = 1 + 2 + 3 + 4 + 5 + 6 = 21$

eller med formelen: $T_6 = \\frac{6 \\cdot 7}{2} = 21$

**b) Emilies pyramide:**

Antall bokser er $1 + 2 + 3 + 4 + 5 + 6$. Dette er trekanttall nr. 6:

$$T_6 = \\frac{6 \\cdot 7}{2} = 21$$

Emilie bruker **21 bokser** totalt.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Figurer med fyrstikker',
      problem: 'Oliver bygger figurer med fyrstikker:\n\n- Figur 1: En enkelt trekant (3 fyrstikker)\n- Figur 2: To trekanter ved siden av hverandre (5 fyrstikker)\n- Figur 3: Tre trekanter ved siden av hverandre (7 fyrstikker)\n\na) Tegn figur 4 og tell antall fyrstikker.\nb) Lag en tabell for figur 1 til 5.\nc) Hva er mønsteret?',
      solution: `**a) Figur 4:**

Figur 4 har fire trekanter ved siden av hverandre. De deler sider, så vi trenger:

$3 + 2 + 2 + 2 = 9$ fyrstikker

**b) Tabell:**

| Figur $n$ | Antall fyrstikker |
|-----------|------------------|
| $1$ | $3$ |
| $2$ | $5$ |
| $3$ | $7$ |
| $4$ | $9$ |
| $5$ | $11$ |

**c) Mønsteret:**

Vi legger til $2$ fyrstikker for hver ny figur. Dette er en aritmetisk følge med $d = 2$.

Den første trekanten trenger $3$ fyrstikker. Hver ny trekant deler en side med den forrige, så vi trenger bare $2$ nye fyrstikker for hver ny trekant.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: L-form',
      problem: 'Se på figurer bygget av ruter i L-form:\n\n- Figur 1: 3 ruter (en L med 2 nedover og 2 bortover, der hjørneruta deles)\n- Figur 2: 5 ruter\n- Figur 3: 7 ruter\n- Figur 4: 9 ruter\n\na) Finn mønsteret.\nb) Hvor mange ruter har figur 10?\nc) Hvilken figur har 31 ruter?',
      solution: `**a) Mønsteret:**

Vi ser på differansene: $5 - 3 = 2$, $7 - 5 = 2$, $9 - 7 = 2$.

Differansen er konstant $d = 2$. Det er en aritmetisk følge som starter på $3$.

Mønsteret med ord: Figur 1 har 3 ruter, og vi legger til 2 ruter for hver ny figur.

**b) Figur 10:**

Vi starter på $3$ og legger til $2$ ni ganger (fra figur 1 til figur 10):

$3 + 9 \\cdot 2 = 3 + 18 = 21$

Figur 10 har **21 ruter**.

**c) Hvilken figur har 31 ruter?**

Vi trenger å finne $n$ slik at $3 + (n - 1) \\cdot 2 = 31$.

$3 + 2n - 2 = 31$
$2n + 1 = 31$
$2n = 30$
$n = 15$

**Figur 15** har 31 ruter.`,
    },

    // ========== TIPS ==========
    {
      id: '8-8-2-tip-1',
      type: 'tip',
      title: 'Slik analyserer du en figur',
      content: `Når du jobber med figurtall, kan det hjelpe å:

1. **Tegn figurene.** Tegn de 3--4 første figurene og studer dem.
2. **Lag en tabell.** Skriv figurnummer og antall brikker i en tabell.
3. **Se på differansene.** Regn ut forskjellen mellom nabotallene.
4. **Beskriv veksten.** Forklar med ord hva som legges til for hvert steg.
5. **Se etter kjente tall.** Er tallene trekanttall? Kvadrattall? Oddetall?`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-8-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut trekanttallene.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $T_4$.',
            solution: '$T_4 = \\frac{4 \\cdot 5}{2} = 10$',
            answer: 10,
          },
          {
            label: 'b',
            task: 'Finn $T_7$.',
            solution: '$T_7 = \\frac{7 \\cdot 8}{2} = 28$',
            answer: 28,
          },
          {
            label: 'c',
            task: 'Finn $T_{10}$.',
            solution: '$T_{10} = \\frac{10 \\cdot 11}{2} = 55$',
            answer: 55,
          },
        ],
        solution: 'a) $T_4 = 10$. b) $T_7 = 28$. c) $T_{10} = 55$.',
        hints: ['Bruk formelen $T_n = \\frac{n \\cdot (n+1)}{2}$, eller legg sammen tallene fra $1$ til $n$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-8-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv opp de 6 første kvadrattallene. Regn ut differansene mellom nabotallene. Hva legger du merke til?',
        solution: 'De 6 første kvadrattallene: $1, 4, 9, 16, 25, 36$.\n\nDifferansene: $4-1=3$, $9-4=5$, $16-9=7$, $25-16=9$, $36-25=11$.\n\nDifferansene er $3, 5, 7, 9, 11$ -- de er oddetall som øker med $2$ for hvert steg.',
        hints: ['Kvadrattall: $1^2, 2^2, 3^2, \\ldots$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-8-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En figur bygges med fyrstikker slik at figur 1 er en firkant (4 fyrstikker), figur 2 er to firkanter ved siden av hverandre (7 fyrstikker), og figur 3 er tre firkanter (10 fyrstikker).',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange fyrstikker trengs til figur 4?',
            solution: 'Differansen er $3$. Figur 4: $10 + 3 = 13$ fyrstikker.',
            answer: 13,
          },
          {
            label: 'b',
            task: 'Hvor mange fyrstikker trengs til figur 7?',
            solution: 'Vi fortsetter: figur 5: $16$, figur 6: $19$, figur 7: $22$ fyrstikker.',
            answer: 22,
          },
          {
            label: 'c',
            task: 'Forklar med ord hvorfor vi legger til nøyaktig 3 fyrstikker for hver ny firkant.',
            solution: 'Hver ny firkant deler en side med den forrige. En firkant har 4 sider, men 1 side er allerede der. Derfor trenger vi bare $4 - 1 = 3$ nye fyrstikker.',
          },
        ],
        solution: 'a) 13 fyrstikker. b) 22 fyrstikker. c) Hver ny firkant deler en side med den forrige, så vi trenger bare 3 nye fyrstikker.',
        hints: ['Finn differansen mellom figurene.', 'Tenk på at naboliggende firkanter deler en felles side.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-8-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nora lager figurer med prikker:',
        subTasks: [
          {
            label: 'a',
            task: 'Figur 1 har 1 prikk, figur 2 har 4 prikker, figur 3 har 9 prikker, figur 4 har 16 prikker. Hva slags figurtall er dette?',
            solution: 'Dette er kvadrattallene. $1 = 1^2$, $4 = 2^2$, $9 = 3^2$, $16 = 4^2$.',
          },
          {
            label: 'b',
            task: 'Hvor mange prikker har figur 8?',
            solution: '$8^2 = 64$ prikker.',
            answer: 64,
          },
          {
            label: 'c',
            task: 'Hvilken figur har 100 prikker?',
            solution: '$n^2 = 100$, altså $n = 10$. Det er figur 10.',
            answer: 10,
          },
        ],
        solution: 'a) Kvadrattall. b) 64 prikker. c) Figur 10.',
        hints: ['Se om du gjenkjenner tallene. Hva er $1 \\cdot 1$, $2 \\cdot 2$, $3 \\cdot 3$, ...?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-8-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Se på denne tallfølgen av figurtall: $2, 6, 12, 20, 30, \\ldots$',
        subTasks: [
          {
            label: 'a',
            task: 'Finn differansene mellom nabotallene. Hva legger du merke til?',
            solution: 'Differansene er $4, 6, 8, 10, \\ldots$ De øker med $2$ for hvert steg.',
          },
          {
            label: 'b',
            task: 'Finn det neste leddet i følgen.',
            solution: 'Neste differanse er $12$, så neste ledd er $30 + 12 = 42$.',
            answer: 42,
          },
          {
            label: 'c',
            task: 'Sammenlign tallene med trekanttallene $1, 3, 6, 10, 15, \\ldots$. Hva oppdager du?',
            solution: 'Hvert tall i følgen er det dobbelte av et trekanttall: $2 = 2 \\cdot 1$, $6 = 2 \\cdot 3$, $12 = 2 \\cdot 6$, $20 = 2 \\cdot 10$, $30 = 2 \\cdot 15$.',
          },
        ],
        solution: 'a) Differansene $4, 6, 8, 10$ øker med $2$. b) $42$. c) Hvert tall er det dobbelte av et trekanttall.',
        hints: ['Regn ut differansene og se etter et mønster i differansene.', 'Prøv å dele hvert tall på 2.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-8-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at summen av de 5 første oddetallene er lik $5^2 = 25$. Regn deretter ut summen av de 8 første oddetallene, og sjekk at svaret er $8^2$.',
        solution: 'De 5 første oddetallene: $1 + 3 + 5 + 7 + 9 = 25 = 5^2$. Stemmer!\n\nDe 8 første oddetallene: $1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 = 64 = 8^2$. Stemmer!\n\nRegelen er at summen av de $n$ første oddetallene alltid er $n^2$.',
        hints: ['Skriv opp oddetallene: $1, 3, 5, 7, 9, \\ldots$ og legg dem sammen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-8-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Figurtall
- Et **figurtall** er et tall vi finner ved å telle prikker i en geometrisk figur
- Vi bygger figurene steg for steg og leter etter mønsteret

### Trekanttall
- Prikker ordnet i en trekant
- $T_n = \\frac{n(n+1)}{2}$
- De første: $1, 3, 6, 10, 15, 21, \\ldots$

### Kvadrattall
- Prikker ordnet i et kvadrat
- $K_n = n^2$
- De første: $1, 4, 9, 16, 25, 36, \\ldots$
- Summen av de $n$ første oddetallene er $n^2$

### Tips
- Tegn figurene og lag tabeller for å finne mønsteret
- Se på differansene -- de forteller deg mye om mønsteret
- Konstante differanser betyr at det er en aritmetisk følge
- Differanser som øker jevnt kan bety trekanttall eller kvadrattall`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3: Generalisering med variabler og formler
// LK20 KM202: Utforske og beskrive strukturar og endringar i geometriske
//              mønster og tallmønster med figurar, ord og formlar
// ============================================================================

export const CHAPTER_8_8_3: TextbookChapter = {
  id: '8-8-3',
  courseId: '8',
  chapterNumber: '8.3',
  title: 'Generalisering med variabler og formler',
  description: 'Lær å gå fra konkrete mønstre til generelle formler med variabelen n, og bruk formlene til å regne ut figurtall.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-8-3-intro',
      type: 'text',
      content: `## Generalisering med variabler og formler

I de forrige kapitlene har du funnet mønstre i tallfølger og figurtall. Du har funnet neste ledd ved å legge til den riktige differansen. Men hva om noen spør: «Hvor mange brikker er det i figur 100?» Da er det tungvint å telle seg helt dit.

Løsningen er å finne en **formel** -- en regel som bruker en variabel (vanligvis $n$) til å beregne svaret direkte.

Å gå fra spesielle tilfeller til en generell regel kaller vi **generalisering**. Det er en av de viktigste tingene vi gjør i matematikk!

I dette kapittelet skal du lære å:
- Finne formler for mønstre ved hjelp av variabelen $n$
- Sjekke at formelen stemmer ved å sette inn kjente verdier
- Bruke formler til å beregne store figurtall`,
    },

    // ========== DEFINISJON: GENERALISERING ==========
    {
      id: '8-8-3-def-1',
      type: 'definition',
      title: 'Generalisering',
      content: `**Generalisering** betyr å finne en formel som fungerer for **alle** verdier, ikke bare de vi har prøvd.

Vi bruker bokstaven $n$ som en **variabel** for figurnummeret. Formelen gir oss antall brikker i figur $n$.

**Eksempel:**

| Figur $n$ | Antall brikker |
|-----------|----------------|
| $1$ | $5$ |
| $2$ | $8$ |
| $3$ | $11$ |
| $4$ | $14$ |

Mønsteret: Vi legger til $3$ for hvert steg, og starter på $5$.

Formelen er: $a_n = 3n + 2$

**Sjekk:** $a_1 = 3 \\cdot 1 + 2 = 5$ \\checkmark, $a_2 = 3 \\cdot 2 + 2 = 8$ \\checkmark, $a_3 = 3 \\cdot 3 + 2 = 11$ \\checkmark

Nå kan vi finne **ethvert** ledd: $a_{100} = 3 \\cdot 100 + 2 = 302$.`,
    },

    // ========== DEFINISJON: FINNE EN LINEÆR FORMEL ==========
    {
      id: '8-8-3-def-2',
      type: 'definition',
      title: 'Slik finner du en lineær formel',
      content: `Når differansen mellom leddene er **konstant** (det samme tallet hver gang), kan vi finne en formel på formen:

$$a_n = d \\cdot n + c$$

der $d$ er differansen og $c$ er en konstant.

**Fremgangsmåte:**

1. **Finn differansen $d$:** Regn $a_2 - a_1$.
2. **Sett opp formelen:** $a_n = d \\cdot n + c$ (vi kjenner $d$, men ikke $c$ ennå).
3. **Finn $c$:** Sett inn $n = 1$ og verdien $a_1$, og løs for $c$.
4. **Sjekk formelen:** Sett inn $n = 2$ og $n = 3$ for å kontrollere.

**Eksempel:** Følgen $7, 12, 17, 22, \\ldots$

1. $d = 12 - 7 = 5$
2. $a_n = 5n + c$
3. For $n = 1$: $7 = 5 \\cdot 1 + c$, altså $c = 2$
4. Formel: $a_n = 5n + 2$. Sjekk: $a_2 = 5 \\cdot 2 + 2 = 12$ \\checkmark`,
    },

    // ========== DEFINISJON: SJEKKE EN FORMEL ==========
    {
      id: '8-8-3-def-3',
      type: 'definition',
      title: 'Å sjekke en formel ved innsetting',
      content: `Når du har funnet en formel, må du alltid **sjekke** at den stemmer. Det gjør du ved å **sette inn** kjente verdier av $n$ og se om du får riktig svar.

**Eksempel:** Vi tror formelen er $a_n = 2n + 3$.

Sjekk med tabellen:

| $n$ | Formel: $2n + 3$ | Kjent verdi | Stemmer? |
|-----|-------------------|-------------|----------|
| $1$ | $2 \\cdot 1 + 3 = 5$ | $5$ | \\checkmark |
| $2$ | $2 \\cdot 2 + 3 = 7$ | $7$ | \\checkmark |
| $3$ | $2 \\cdot 3 + 3 = 9$ | $9$ | \\checkmark |
| $4$ | $2 \\cdot 4 + 3 = 11$ | $11$ | \\checkmark |

Formelen stemmer for alle kjente verdier, så vi kan stole på den.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Fra mønster til formel',
      problem: 'Figurer bygges med prikker:\n\n| Figur $n$ | Antall prikker |\n|-----------|----------------|\n| $1$ | $4$ |\n| $2$ | $7$ |\n| $3$ | $10$ |\n| $4$ | $13$ |\n\nFinn en formel for antall prikker i figur $n$.',
      solution: `**Steg 1: Finn differansen.**

$7 - 4 = 3$, $10 - 7 = 3$, $13 - 10 = 3$.

Differansen er $d = 3$.

**Steg 2: Sett opp formelen.**

$a_n = 3n + c$

**Steg 3: Finn $c$.**

For $n = 1$ vet vi at $a_1 = 4$:

$4 = 3 \\cdot 1 + c$
$4 = 3 + c$
$c = 1$

**Formel:** $a_n = 3n + 1$

**Steg 4: Sjekk.**

$a_2 = 3 \\cdot 2 + 1 = 7$ \\checkmark
$a_3 = 3 \\cdot 3 + 1 = 10$ \\checkmark
$a_4 = 3 \\cdot 4 + 1 = 13$ \\checkmark

Formelen stemmer! Nå kan vi for eksempel finne $a_{50} = 3 \\cdot 50 + 1 = 151$.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Fyrstikker og formler',
      problem: 'Vi bygger figurer med fyrstikker i firkantform:\n\n- Figur 1: 4 fyrstikker (1 firkant)\n- Figur 2: 7 fyrstikker (2 firkanter)\n- Figur 3: 10 fyrstikker (3 firkanter)\n\na) Finn en formel for antall fyrstikker i figur $n$.\nb) Hvor mange fyrstikker trengs til figur 15?\nc) Figur $n$ har 61 fyrstikker. Finn $n$.',
      solution: `**a) Finn formelen:**

Differansen er $d = 7 - 4 = 3$.

$a_n = 3n + c$

For $n = 1$: $4 = 3 \\cdot 1 + c$, altså $c = 1$.

$$a_n = 3n + 1$$

Sjekk: $a_2 = 3 \\cdot 2 + 1 = 7$ \\checkmark, $a_3 = 3 \\cdot 3 + 1 = 10$ \\checkmark.

**b) Figur 15:**

$$a_{15} = 3 \\cdot 15 + 1 = 46$$

Vi trenger **46 fyrstikker**.

**c) Finn $n$ når $a_n = 61$:**

$$3n + 1 = 61$$
$$3n = 60$$
$$n = 20$$

Det er **figur 20** som har 61 fyrstikker.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Formel for trekanttall',
      problem: 'Vi vet at trekanttallene er $1, 3, 6, 10, 15, \\ldots$\n\nFormelen er $T_n = \\frac{n(n+1)}{2}$.\n\na) Bruk formelen til å finne $T_8$.\nb) Bruk formelen til å finne $T_{20}$.\nc) Hvilket trekanttall er lik $45$?',
      solution: `**a) $T_8$:**

$$T_8 = \\frac{8 \\cdot (8 + 1)}{2} = \\frac{8 \\cdot 9}{2} = \\frac{72}{2} = 36$$

**b) $T_{20}$:**

$$T_{20} = \\frac{20 \\cdot 21}{2} = \\frac{420}{2} = 210$$

**c) Hvilket trekanttall er $45$?**

Vi løser $\\frac{n(n+1)}{2} = 45$, altså $n(n+1) = 90$.

Vi prøver oss frem:
- $n = 8$: $8 \\cdot 9 = 72$ (for lite)
- $n = 9$: $9 \\cdot 10 = 90$ \\checkmark

Altså er $T_9 = 45$. Trekanttall nr. 9 er $45$.`,
    },

    // ========== NOTAT ==========
    {
      id: '8-8-3-note-1',
      type: 'note',
      title: 'Husk: Formel vs. mønster',
      content: `En **formel** og et **mønster** er nært beslektet, men ikke helt det samme:

- **Mønsteret** er det vi ser: «Vi legger til 3 hver gang.»
- **Formelen** er den matematiske regelen: $a_n = 3n + 1$.

Fordelen med formelen er at vi kan hoppe rett til det leddet vi ønsker, uten å telle oss gjennom alle leddene foran.

For eksempel: Med mønsteret «legg til 3 hver gang» må vi telle oss gjennom alle 99 stegene for å finne ledd nr. 100. Med formelen $a_n = 3n + 1$ kan vi bare sette inn $n = 100$ og få $a_{100} = 301$ med en gang!`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-8-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sjekk om formelen $a_n = 2n + 1$ stemmer med tallfølgen $3, 5, 7, 9, 11, \\ldots$',
        subTasks: [
          {
            label: 'a',
            task: 'Sett inn $n = 1$ i formelen. Hva får du?',
            solution: '$a_1 = 2 \\cdot 1 + 1 = 3$. Stemmer med første ledd.',
            answer: 3,
          },
          {
            label: 'b',
            task: 'Sett inn $n = 2$ og $n = 3$. Stemmer det?',
            solution: '$a_2 = 2 \\cdot 2 + 1 = 5$ \\checkmark. $a_3 = 2 \\cdot 3 + 1 = 7$ \\checkmark. Ja, det stemmer.',
          },
          {
            label: 'c',
            task: 'Bruk formelen til å finne $a_{30}$.',
            solution: '$a_{30} = 2 \\cdot 30 + 1 = 61$.',
            answer: 61,
          },
        ],
        solution: 'a) $a_1 = 3$. b) $a_2 = 5$, $a_3 = 7$, stemmer. c) $a_{30} = 61$.',
        hints: ['Sett verdien av $n$ inn i formelen $2n + 1$ og regn ut.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-8-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn en formel for følgen $5, 9, 13, 17, 21, \\ldots$',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er differansen $d$?',
            solution: '$d = 9 - 5 = 4$.',
            answer: 4,
          },
          {
            label: 'b',
            task: 'Sett opp formelen $a_n = dn + c$ og finn $c$.',
            solution: '$a_n = 4n + c$. For $n = 1$: $5 = 4 \\cdot 1 + c$, altså $c = 1$. Formel: $a_n = 4n + 1$.',
          },
          {
            label: 'c',
            task: 'Sjekk formelen for $n = 3$ og $n = 5$.',
            solution: '$a_3 = 4 \\cdot 3 + 1 = 13$ \\checkmark. $a_5 = 4 \\cdot 5 + 1 = 21$ \\checkmark.',
          },
        ],
        solution: 'a) $d = 4$. b) $a_n = 4n + 1$. c) $a_3 = 13$, $a_5 = 21$, stemmer.',
        hints: ['Bruk fremgangsmåten: finn $d$, sett opp $a_n = dn + c$, finn $c$ med $n = 1$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-8-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn en formel for hver tallfølge.',
        subTasks: [
          {
            label: 'a',
            task: '$3, 6, 9, 12, 15, \\ldots$',
            solution: '$d = 3$. $a_n = 3n + c$. $3 = 3 \\cdot 1 + c$, $c = 0$. Formel: $a_n = 3n$.',
          },
          {
            label: 'b',
            task: '$1, 5, 9, 13, 17, \\ldots$',
            solution: '$d = 4$. $a_n = 4n + c$. $1 = 4 \\cdot 1 + c$, $c = -3$. Formel: $a_n = 4n - 3$.',
          },
          {
            label: 'c',
            task: '$10, 8, 6, 4, 2, \\ldots$',
            solution: '$d = -2$. $a_n = -2n + c$. $10 = -2 \\cdot 1 + c$, $c = 12$. Formel: $a_n = -2n + 12$.',
          },
        ],
        solution: 'a) $a_n = 3n$. b) $a_n = 4n - 3$. c) $a_n = -2n + 12$.',
        hints: ['Finn differansen først, sett deretter opp formelen og bruk $n = 1$ for å finne $c$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-8-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ida bygger tårn med klosser. Tårn 1 har 5 klosser, tårn 2 har 8 klosser, tårn 3 har 11 klosser.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en formel for antall klosser i tårn $n$.',
            solution: '$d = 3$. $a_n = 3n + c$. $5 = 3 \\cdot 1 + c$, $c = 2$. Formel: $a_n = 3n + 2$.',
          },
          {
            label: 'b',
            task: 'Hvor mange klosser har tårn 20?',
            solution: '$a_{20} = 3 \\cdot 20 + 2 = 62$ klosser.',
            answer: 62,
          },
          {
            label: 'c',
            task: 'Ida har 50 klosser. Hvor høyt tårn kan hun bygge?',
            solution: '$3n + 2 = 50$, $3n = 48$, $n = 16$. Hun kan bygge tårn 16 (med $50$ klosser). Tårn 17 ville kreve $53$ klosser, som er mer enn hun har.',
            answer: 16,
          },
        ],
        solution: 'a) $a_n = 3n + 2$. b) $62$ klosser. c) Tårn 16.',
        hints: ['Finn differansen mellom antall klosser i hvert tårn.', 'For c): Sett formelen lik 50 og løs for $n$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-8-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk formelen for trekanttall $T_n = \\frac{n(n+1)}{2}$.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $T_{12}$.',
            solution: '$T_{12} = \\frac{12 \\cdot 13}{2} = \\frac{156}{2} = 78$.',
            answer: 78,
          },
          {
            label: 'b',
            task: 'Finn $T_{15}$.',
            solution: '$T_{15} = \\frac{15 \\cdot 16}{2} = \\frac{240}{2} = 120$.',
            answer: 120,
          },
          {
            label: 'c',
            task: 'Finn $n$ når $T_n = 36$.',
            solution: '$\\frac{n(n+1)}{2} = 36$, $n(n+1) = 72$. Vi prøver: $8 \\cdot 9 = 72$, altså $n = 8$.',
            answer: 8,
          },
        ],
        solution: 'a) $T_{12} = 78$. b) $T_{15} = 120$. c) $n = 8$.',
        hints: ['Sett inn verdien av $n$ i formelen og regn ut.', 'For c): Prøv forskjellige verdier av $n$ til du finner riktig.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-8-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Se på tabellen og finn en formel.',
        subTasks: [
          {
            label: 'a',
            task: 'Følgen er $2, 8, 18, 32, 50, \\ldots$. Regn ut differansene og differansene av differansene.',
            solution: 'Differansene: $6, 10, 14, 18$. Andre differanser: $4, 4, 4$ -- konstant!',
          },
          {
            label: 'b',
            task: 'Er dette en lineær eller kvadratisk formel?',
            solution: 'De første differansene er ikke konstante, men de andre differansene er konstante ($= 4$). Derfor er formelen kvadratisk.',
          },
          {
            label: 'c',
            task: 'Sjekk om formelen $a_n = 2n^2$ stemmer.',
            solution: '$a_1 = 2 \\cdot 1^2 = 2$ \\checkmark, $a_2 = 2 \\cdot 2^2 = 8$ \\checkmark, $a_3 = 2 \\cdot 3^2 = 18$ \\checkmark, $a_4 = 2 \\cdot 4^2 = 32$ \\checkmark, $a_5 = 2 \\cdot 5^2 = 50$ \\checkmark. Formelen stemmer!',
          },
        ],
        solution: 'a) Andre differanser er konstant $4$. b) Kvadratisk formel. c) $a_n = 2n^2$ stemmer for alle verdier.',
        hints: ['Regn ut differansene mellom nabotallene. Regn deretter ut differansene mellom disse differansene.', 'Prøv å se om tallene har noe med kvadrattall å gjøre.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-8-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-8-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et amfiteater har rader med seter. Rad 1 har 12 seter, rad 2 har 16 seter, rad 3 har 20 seter.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn en formel for antall seter i rad $n$.',
            solution: '$d = 4$. $a_n = 4n + c$. $12 = 4 \\cdot 1 + c$, $c = 8$. Formel: $a_n = 4n + 8$.',
          },
          {
            label: 'b',
            task: 'Hvor mange seter har rad 25?',
            solution: '$a_{25} = 4 \\cdot 25 + 8 = 108$ seter.',
            answer: 108,
          },
          {
            label: 'c',
            task: 'Amfiteateret har 15 rader. Hvor mange seter er det totalt? (Tips: Legg sammen alle leddene fra rad 1 til rad 15.)',
            solution: 'Vi finner $a_{15} = 4 \\cdot 15 + 8 = 68$. Summen av en aritmetisk følge: $S = \\frac{\\text{antall ledd} \\cdot (\\text{første} + \\text{siste})}{2} = \\frac{15 \\cdot (12 + 68)}{2} = \\frac{15 \\cdot 80}{2} = 600$ seter.',
            answer: 600,
          },
        ],
        solution: 'a) $a_n = 4n + 8$. b) 108 seter. c) 600 seter totalt.',
        hints: ['Finn differansen mellom antall seter i radene.', 'For c): Du kan legge sammen alle leddene, eller bruke formelen for summen av en aritmetisk følge.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-8-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Generalisering
- Å **generalisere** er å finne en formel som fungerer for alle verdier av $n$
- Vi bruker variabelen $n$ for figurnummeret

### Lineær formel
- Brukes når differansen mellom leddene er **konstant**
- Formen er $a_n = d \\cdot n + c$
- $d$ er differansen, $c$ finner vi ved innsetting

### Fremgangsmåte
1. Finn differansen $d$
2. Sett opp $a_n = d \\cdot n + c$
3. Sett inn $n = 1$ og verdien av $a_1$ for å finne $c$
4. Sjekk formelen med andre kjente verdier

### Sjekke formler
- **Sett inn** kjente verdier av $n$ i formelen
- Kontroller at du får riktig svar for alle kjente ledd

### Viktige formler
| Figurtall | Formel |
|-----------|--------|
| Trekanttall | $T_n = \\frac{n(n+1)}{2}$ |
| Kvadrattall | $K_n = n^2$ |
| Aritmetisk følge | $a_n = d \\cdot n + c$ |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 9
// ============================================================================

export const MATEMATIKK_8_DEL9_CHAPTERS = [
  CHAPTER_8_8_1,
  CHAPTER_8_8_2,
  CHAPTER_8_8_3,
];
