/**
 * Tekstbok kapitler for R1 - Kapittel 7: Trigonometri
 * Seksjon 7: Trigonometriske funksjoner, grafer, likninger, identiteter, derivasjon og setninger
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1: Trigonometriske funksjoner og enhetssirkelen
// ============================================================================

export const CHAPTER_R1_7_1: TextbookChapter = {
  id: 'r1-7-1',
  courseId: 'r1',
  chapterNumber: '7.1',
  title: 'Trigonometriske funksjoner og enhetssirkelen',
  description: 'Lær om enhetssirkelen, radianer, eksakte verdier og den grunnleggende sammenhengen sin²x + cos²x = 1.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke enhetssirkelen til å definere sinus, cosinus og tangens for alle vinkler',
    'regne om mellom radianer og grader',
    'kjenne eksakte verdier for trigonometriske funksjoner ved standardvinkler',
    'bruke sammenhengen sin²x + cos²x = 1',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-7-1-intro',
      type: 'text',
      content: `## Trigonometriske funksjoner

Trigonometri handler om sammenhengen mellom vinkler og sidelengder. Fra ungdomsskolen kjenner du sinus, cosinus og tangens definert i rettvinklede trekanter. Nå skal vi utvide definisjonene slik at de gjelder for alle vinkler, ikke bare for vinkler mellom $0°$ og $90°$.

Nøkkelen til denne utvidelsen er **enhetssirkelen** -- en sirkel med sentrum i origo og radius $1$.`,
    },

    // ========== REPETISJON ==========
    {
      id: 'r1-7-1-repetisjon',
      type: 'text',
      content: `## Repetisjon: Trigonometri i rettvinklede trekanter

I en rettvinklet trekant med en spiss vinkel $v$, hypotenus $h$, motstående katet $m$ og hosliggende katet $k$ har vi:

$$\\sin v = \\frac{m}{h}, \\quad \\cos v = \\frac{k}{h}, \\quad \\tan v = \\frac{m}{k}$$

Disse definisjonene gjelder bare for $0° < v < 90°$. For å kunne jobbe med vinkler utenfor dette intervallet trenger vi en ny definisjon.`,
    },

    // Oppgave 1 - Repetisjon
    {
      id: 'r1-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En rettvinklet trekant har hypotenus $10$ og en vinkel på $30°$. Finn de to katetene.',
        solution: `Motstående katet: $m = 10 \\cdot \\sin 30° = 10 \\cdot 0{,}5 = 5$

Hosliggende katet: $k = 10 \\cdot \\cos 30° = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8{,}66$`,
        hints: ['Bruk $\\sin 30° = 0{,}5$ og $\\cos 30° = \\frac{\\sqrt{3}}{2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ENHETSSIRKELEN ==========
    {
      id: 'r1-7-1-enhetssirkel-intro',
      type: 'text',
      content: `## Enhetssirkelen

Enhetssirkelen er en sirkel med sentrum i origo og radius $1$ i et koordinatsystem. Vi bruker den til å definere sinus og cosinus for alle vinkler.

Tenk deg en peker som starter langs den positive $x$-aksen og roterer mot klokka. Vinkelen $v$ måler hvor langt pekeren har rotert. Punktet der pekeren treffer sirkelen har koordinater $(\\cos v, \\sin v)$.`,
    },

    // Definisjon: Sinus og cosinus via enhetssirkelen
    {
      id: 'r1-7-1-def-sincos',
      type: 'definition',
      title: 'Sinus og cosinus (enhetssirkelen)',
      content: `La $v$ være en vinkel målt fra den positive $x$-aksen mot klokka. Punktet $P$ på enhetssirkelen som svarer til vinkelen $v$ har koordinatene:

$$P = (\\cos v, \\sin v)$$

- $\\cos v$ er **$x$-koordinaten** til $P$
- $\\sin v$ er **$y$-koordinaten** til $P$

Denne definisjonen gjelder for **alle** reelle verdier av $v$, ikke bare for $0° < v < 90°$.`,
    },

    // Definisjon: Tangens
    {
      id: 'r1-7-1-def-tan',
      type: 'definition',
      title: 'Tangens',
      content: `Tangens er definert som forholdet mellom sinus og cosinus:

$$\\tan v = \\frac{\\sin v}{\\cos v}, \\quad \\cos v \\neq 0$$

Tangens er ikke definert for vinkler der $\\cos v = 0$, dvs. $v = 90° + n \\cdot 180°$ for $n \\in \\mathbb{Z}$.`,
    },

    // Fortegn i de fire kvadrantene
    {
      id: 'r1-7-1-kvadranter',
      type: 'note',
      title: 'Fortegn i de fire kvadrantene',
      content: `Enhetssirkelen deles inn i fire **kvadranter**:

| Kvadrant | Vinkel | $\\sin v$ | $\\cos v$ | $\\tan v$ |
|----------|--------|-----------|-----------|-----------|
| I   | $0° < v < 90°$   | $+$ | $+$ | $+$ |
| II  | $90° < v < 180°$  | $+$ | $-$ | $-$ |
| III | $180° < v < 270°$ | $-$ | $-$ | $+$ |
| IV  | $270° < v < 360°$ | $-$ | $+$ | $-$ |

**Huskeregel:** «**A**lle **S**tudenter **T**ar **C**affe» (All, Sin, Tan, Cos er positive i henholdsvis I, II, III, IV kvadrant).`,
    },

    // Eksempel: Avlesning fra enhetssirkelen
    {
      id: 'r1-7-1-example-avlesning',
      type: 'example',
      title: 'Eksempel 1: Verdier fra enhetssirkelen',
      problem: `Finn $\\sin 150°$, $\\cos 150°$ og $\\tan 150°$.`,
      solution: `**Losning:**

Vinkelen $150°$ ligger i andre kvadrant. Referansevinkelen er $180° - 150° = 30°$.

I andre kvadrant er sinus positiv og cosinus negativ, så:

$$\\sin 150° = \\sin 30° = \\frac{1}{2}$$

$$\\cos 150° = -\\cos 30° = -\\frac{\\sqrt{3}}{2}$$

$$\\tan 150° = \\frac{\\sin 150°}{\\cos 150°} = \\frac{\\frac{1}{2}}{-\\frac{\\sqrt{3}}{2}} = -\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$$`,
    },

    // Oppgave 2
    {
      id: 'r1-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk enhetssirkelen til å finne verdiene. Oppgi eksakte verdier.',
        subTasks: [
          { label: 'a', task: '$\\sin 210°$ og $\\cos 210°$', solution: '$\\sin 210° = -\\frac{1}{2}$, $\\cos 210° = -\\frac{\\sqrt{3}}{2}$' },
          { label: 'b', task: '$\\sin 315°$ og $\\cos 315°$', solution: '$\\sin 315° = -\\frac{\\sqrt{2}}{2}$, $\\cos 315° = \\frac{\\sqrt{2}}{2}$' },
          { label: 'c', task: '$\\tan 120°$', solution: '$\\tan 120° = \\frac{\\sin 120°}{\\cos 120°} = \\frac{\\frac{\\sqrt{3}}{2}}{-\\frac{1}{2}} = -\\sqrt{3}$' },
          { label: 'd', task: '$\\sin 270°$ og $\\cos 270°$', solution: '$\\sin 270° = -1$, $\\cos 270° = 0$' },
        ],
        hints: ['Finn referansevinkelen', 'Bestem fortegn ut fra hvilken kvadrant vinkelen ligger i'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== RADIANER ==========
    {
      id: 'r1-7-1-radianer-intro',
      type: 'text',
      content: `## Radianer

I matematikk bruker vi ofte **radianer** som vinkelmål i stedet for grader. Radianer er den naturlige vinkelenheten fordi den forenkler mange formler, spesielt innen derivasjon og integrasjon.

En radian er definert som vinkelen som spenner ut en bue med lengde lik radiusen. Siden omkretsen til en sirkel med radius $r$ er $2\\pi r$, tilsvarer en hel omdreining $2\\pi$ radianer.`,
    },

    // Definisjon: Radianer
    {
      id: 'r1-7-1-def-radianer',
      type: 'definition',
      title: 'Radianer',
      content: `**Sammenhengen mellom grader og radianer:**

$$\\pi \\text{ rad} = 180°$$

**Omregningsformler:**

Fra grader til radianer: $\\quad v_{\\text{rad}} = v° \\cdot \\frac{\\pi}{180}$

Fra radianer til grader: $\\quad v° = v_{\\text{rad}} \\cdot \\frac{180}{\\pi}$`,
    },

    // Viktige vinkler
    {
      id: 'r1-7-1-viktige-vinkler',
      type: 'note',
      title: 'Viktige vinkler i radianer',
      content: `| Grader | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ | $180°$ | $270°$ | $360°$ |
|--------|------|-------|-------|-------|-------|--------|--------|--------|
| Radianer | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ | $\\pi$ | $\\frac{3\\pi}{2}$ | $2\\pi$ |`,
    },

    // Eksempel: Omregning
    {
      id: 'r1-7-1-example-omregning',
      type: 'example',
      title: 'Eksempel 2: Omregning mellom grader og radianer',
      problem: `a) Gjor om $135°$ til radianer.
b) Gjor om $\\frac{5\\pi}{4}$ radianer til grader.`,
      solution: `**Losning:**

a) $135° = 135 \\cdot \\frac{\\pi}{180} = \\frac{135\\pi}{180} = \\frac{3\\pi}{4}$

b) $\\frac{5\\pi}{4} = \\frac{5\\pi}{4} \\cdot \\frac{180}{\\pi} = \\frac{5 \\cdot 180}{4} = 225°$`,
    },

    // Oppgave 3
    {
      id: 'r1-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn om mellom grader og radianer.',
        subTasks: [
          { label: 'a', task: 'Gjor om $60°$ til radianer', solution: '$60° = \\frac{\\pi}{3}$' },
          { label: 'b', task: 'Gjor om $240°$ til radianer', solution: '$240° = \\frac{4\\pi}{3}$' },
          { label: 'c', task: 'Gjor om $\\frac{2\\pi}{3}$ til grader', solution: '$\\frac{2\\pi}{3} = 120°$' },
          { label: 'd', task: 'Gjor om $\\frac{7\\pi}{6}$ til grader', solution: '$\\frac{7\\pi}{6} = 210°$' },
        ],
        hints: ['Bruk $\\pi \\text{ rad} = 180°$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r1-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn om til radianer og oppgi svaret som en brok med $\\pi$.',
        subTasks: [
          { label: 'a', task: '$15°$', solution: '$15° = \\frac{\\pi}{12}$' },
          { label: 'b', task: '$75°$', solution: '$75° = \\frac{5\\pi}{12}$' },
          { label: 'c', task: '$330°$', solution: '$330° = \\frac{11\\pi}{6}$' },
          { label: 'd', task: '$225°$', solution: '$225° = \\frac{5\\pi}{4}$' },
        ],
        hints: ['Del gradtallet pa 180 og forenkle broken'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSAKTE VERDIER ==========
    {
      id: 'r1-7-1-eksakte-intro',
      type: 'text',
      content: `## Eksakte trigonometriske verdier

For standardvinklene $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$ og $\\frac{\\pi}{2}$ kan vi finne eksakte verdier for sinus og cosinus. Disse verdiene ma du kunne utenat.`,
    },

    // Tabell over eksakte verdier
    {
      id: 'r1-7-1-tabell-eksakte',
      type: 'theorem',
      title: 'Eksakte verdier for standardvinklene',
      content: `| $v$ | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ |
|-----|-----|-----|-----|-----|-----|
| $\\sin v$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ |
| $\\cos v$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ |
| $\\tan v$ | $0$ | $\\frac{\\sqrt{3}}{3}$ | $1$ | $\\sqrt{3}$ | udef. |

**Huskeregel for sinus:** Tellerfolgen $\\sqrt{0}, \\sqrt{1}, \\sqrt{2}, \\sqrt{3}, \\sqrt{4}$ delt pa $2$.`,
    },

    // Eksempel: Eksakte verdier
    {
      id: 'r1-7-1-example-eksakte',
      type: 'example',
      title: 'Eksempel 3: Eksakte verdier for vinkler utenfor forste kvadrant',
      problem: `Finn eksakte verdier for:
a) $\\sin \\frac{2\\pi}{3}$
b) $\\cos \\frac{5\\pi}{4}$
c) $\\tan \\frac{11\\pi}{6}$`,
      solution: `**Losning:**

a) $\\frac{2\\pi}{3}$ ligger i andre kvadrant. Referansevinkel: $\\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$.

$$\\sin \\frac{2\\pi}{3} = \\sin \\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$$

(Sinus er positiv i andre kvadrant.)

b) $\\frac{5\\pi}{4}$ ligger i tredje kvadrant. Referansevinkel: $\\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$.

$$\\cos \\frac{5\\pi}{4} = -\\cos \\frac{\\pi}{4} = -\\frac{\\sqrt{2}}{2}$$

(Cosinus er negativ i tredje kvadrant.)

c) $\\frac{11\\pi}{6}$ ligger i fjerde kvadrant. Referansevinkel: $2\\pi - \\frac{11\\pi}{6} = \\frac{\\pi}{6}$.

$$\\tan \\frac{11\\pi}{6} = -\\tan \\frac{\\pi}{6} = -\\frac{\\sqrt{3}}{3}$$

(Tangens er negativ i fjerde kvadrant.)`,
    },

    // Oppgave 5
    {
      id: 'r1-7-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksakte verdier uten kalkulator.',
        subTasks: [
          { label: 'a', task: '$\\sin \\frac{3\\pi}{4}$', solution: '$\\sin \\frac{3\\pi}{4} = \\frac{\\sqrt{2}}{2}$' },
          { label: 'b', task: '$\\cos \\frac{5\\pi}{3}$', solution: '$\\cos \\frac{5\\pi}{3} = \\frac{1}{2}$' },
          { label: 'c', task: '$\\tan \\frac{4\\pi}{3}$', solution: '$\\tan \\frac{4\\pi}{3} = \\tan \\frac{\\pi}{3} = \\sqrt{3}$' },
          { label: 'd', task: '$\\sin \\frac{7\\pi}{6}$', solution: '$\\sin \\frac{7\\pi}{6} = -\\frac{1}{2}$' },
        ],
        hints: ['Finn referansevinkelen forst', 'Bestem fortegn fra kvadranten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PYTAGOREISK IDENTITET ==========
    {
      id: 'r1-7-1-identitet-intro',
      type: 'text',
      content: `## Den pytagoreiske identiteten

Det finnes en grunnleggende sammenheng mellom sinus og cosinus som gjelder for **alle** vinkler. Denne sammenhengen folger direkte fra Pytagoras' setning og enhetssirkelen.`,
    },

    // Teorem: sin^2 + cos^2 = 1
    {
      id: 'r1-7-1-theorem-pytagoras',
      type: 'theorem',
      title: 'Den pytagoreiske identiteten',
      content: `For alle vinkler $x$ gjelder:

$$\\sin^2 x + \\cos^2 x = 1$$

**Bevis:** Punktet $(\\cos x, \\sin x)$ ligger pa enhetssirkelen $x^2 + y^2 = 1$. Ved a sette inn far vi $(\\cos x)^2 + (\\sin x)^2 = 1$.`,
    },

    // Omskrivninger
    {
      id: 'r1-7-1-omskrivninger',
      type: 'note',
      title: 'Nyttige omskrivninger',
      content: `Fra $\\sin^2 x + \\cos^2 x = 1$ kan vi utlede:

$$\\sin^2 x = 1 - \\cos^2 x$$
$$\\cos^2 x = 1 - \\sin^2 x$$

Disse omskrivningene er svart nyttige nar vi skal forenkle trigonometriske uttrykk.`,
    },

    // Eksempel: Bruk av identiteten
    {
      id: 'r1-7-1-example-identitet',
      type: 'example',
      title: 'Eksempel 4: Bruk av den pytagoreiske identiteten',
      problem: `Gitt at $\\sin x = \\frac{3}{5}$ og $x$ ligger i andre kvadrant. Finn $\\cos x$ og $\\tan x$.`,
      solution: `**Losning:**

Vi bruker $\\sin^2 x + \\cos^2 x = 1$:

$$\\left(\\frac{3}{5}\\right)^2 + \\cos^2 x = 1$$
$$\\frac{9}{25} + \\cos^2 x = 1$$
$$\\cos^2 x = 1 - \\frac{9}{25} = \\frac{16}{25}$$
$$\\cos x = \\pm \\frac{4}{5}$$

Siden $x$ er i andre kvadrant, er $\\cos x < 0$, sa:

$$\\cos x = -\\frac{4}{5}$$

Da blir:

$$\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{\\frac{3}{5}}{-\\frac{4}{5}} = -\\frac{3}{4}$$`,
    },

    // Oppgave 6
    {
      id: 'r1-7-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk den pytagoreiske identiteten til a finne de ukjente verdiene.',
        subTasks: [
          { label: 'a', task: '$\\cos x = \\frac{5}{13}$, $x$ i forste kvadrant. Finn $\\sin x$.', solution: '$\\sin x = \\frac{12}{13}$' },
          { label: 'b', task: '$\\sin x = -\\frac{7}{25}$, $x$ i tredje kvadrant. Finn $\\cos x$.', solution: '$\\cos x = -\\frac{24}{25}$' },
          { label: 'c', task: '$\\cos x = -\\frac{1}{3}$, $x$ i andre kvadrant. Finn $\\sin x$ og $\\tan x$.', solution: '$\\sin x = \\frac{2\\sqrt{2}}{3}$, $\\tan x = -2\\sqrt{2}$' },
        ],
        hints: ['Bruk $\\sin^2 x + \\cos^2 x = 1$', 'Fortegnet bestemmes av hvilken kvadrant vinkelen er i'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-7-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle uttrykkene.',
        subTasks: [
          { label: 'a', task: '$\\sin^2 x + \\cos^2 x + \\tan^2 x$', solution: '$1 + \\tan^2 x = \\frac{1}{\\cos^2 x}$' },
          { label: 'b', task: '$\\frac{\\sin^2 x}{1 - \\cos x}$', solution: '$\\frac{\\sin^2 x}{1 - \\cos x} = \\frac{1 - \\cos^2 x}{1 - \\cos x} = \\frac{(1-\\cos x)(1+\\cos x)}{1 - \\cos x} = 1 + \\cos x$' },
          { label: 'c', task: '$(\\sin x + \\cos x)^2 - 1$', solution: '$\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x - 1 = 1 + 2\\sin x \\cos x - 1 = 2\\sin x \\cos x$' },
        ],
        hints: ['Bruk $\\sin^2 x + \\cos^2 x = 1$', 'Faktoriser nar det er mulig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8 - GeoGebra
    {
      id: 'r1-7-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-8',
        number: '8',
        type: 'interactive',
        difficulty: 'lett',
        tool: 'geogebra-graph',
        task: 'Bruk GeoGebra til a tegne enhetssirkelen og verifiser at punktet $(\\cos 45°, \\sin 45°)$ ligger pa sirkelen.',
        solution: 'Punktet $(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}) \\approx (0{,}707,\\; 0{,}707)$ ligger pa sirkelen $x^2 + y^2 = 1$ fordi $(\\frac{\\sqrt{2}}{2})^2 + (\\frac{\\sqrt{2}}{2})^2 = \\frac{1}{2} + \\frac{1}{2} = 1$.',
        hints: ['Skriv inn x^2 + y^2 = 1 i GeoGebra'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9 - Vanskelig
    {
      id: 'r1-7-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at for alle vinkler $x$ gjelder:',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$', solution: 'Vi starter med hoyre side: $1 + \\tan^2 x = 1 + \\frac{\\sin^2 x}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$' },
          { label: 'b', task: '$\\frac{\\cos x}{1 + \\sin x} + \\frac{1 + \\sin x}{\\cos x} = \\frac{2}{\\cos x}$', solution: 'Fellesnevner: $\\frac{\\cos^2 x + (1 + \\sin x)^2}{(1+\\sin x)\\cos x} = \\frac{\\cos^2 x + 1 + 2\\sin x + \\sin^2 x}{(1+\\sin x)\\cos x} = \\frac{2 + 2\\sin x}{(1+\\sin x)\\cos x} = \\frac{2(1+\\sin x)}{(1+\\sin x)\\cos x} = \\frac{2}{\\cos x}$' },
        ],
        hints: ['Skriv alt med sinus og cosinus', 'Bruk $\\sin^2 x + \\cos^2 x = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10-12 - Blandede
    {
      id: 'r1-7-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut uten kalkulator.',
        subTasks: [
          { label: 'a', task: '$\\sin 0 + \\cos 0 + \\tan 0$', solution: '$0 + 1 + 0 = 1$' },
          { label: 'b', task: '$\\sin \\frac{\\pi}{2} + \\cos \\pi + \\tan \\frac{\\pi}{4}$', solution: '$1 + (-1) + 1 = 1$' },
          { label: 'c', task: '$2\\sin \\frac{\\pi}{6} \\cdot \\cos \\frac{\\pi}{6}$', solution: '$2 \\cdot \\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{\\sqrt{3}}{2}$' },
        ],
        hints: ['Bruk tabellen over eksakte verdier'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle vinkler $v \\in [0, 2\\pi)$ som oppfyller:',
        subTasks: [
          { label: 'a', task: '$\\cos v = 0$', solution: '$v = \\frac{\\pi}{2}$ og $v = \\frac{3\\pi}{2}$' },
          { label: 'b', task: '$\\sin v = -1$', solution: '$v = \\frac{3\\pi}{2}$' },
          { label: 'c', task: '$\\tan v = 0$', solution: '$v = 0$ og $v = \\pi$' },
          { label: 'd', task: '$\\sin v = \\cos v$', solution: '$\\tan v = 1$, sa $v = \\frac{\\pi}{4}$ og $v = \\frac{5\\pi}{4}$' },
        ],
        hints: ['Bruk enhetssirkelen', 'For d): del begge sider pa $\\cos v$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den eksakte verdien av $\\sin^2 \\frac{\\pi}{3} + \\cos^2 \\frac{\\pi}{6} + \\tan^2 \\frac{\\pi}{4}$.',
        solution: '$\\left(\\frac{\\sqrt{3}}{2}\\right)^2 + \\left(\\frac{\\sqrt{3}}{2}\\right)^2 + 1^2 = \\frac{3}{4} + \\frac{3}{4} + 1 = \\frac{5}{2}$',
        hints: ['Sett inn eksakte verdier for hver standardvinkel'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gitt at $\\tan x = 2$ og $x \\in (0, \\frac{\\pi}{2})$. Finn eksakte verdier for $\\sin x$ og $\\cos x$.',
        solution: `Fra $\\tan x = 2$ har vi $\\sin x = 2\\cos x$. Setter inn i $\\sin^2 x + \\cos^2 x = 1$:

$(2\\cos x)^2 + \\cos^2 x = 1$
$4\\cos^2 x + \\cos^2 x = 1$
$5\\cos^2 x = 1$
$\\cos x = \\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$ (positiv fordi $x$ er i forste kvadrant)

$\\sin x = 2 \\cdot \\frac{\\sqrt{5}}{5} = \\frac{2\\sqrt{5}}{5}$`,
        hints: ['Skriv $\\sin x = \\tan x \\cdot \\cos x$', 'Bruk $\\sin^2 x + \\cos^2 x = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at $\\sin(\\pi - x) = \\sin x$ og $\\cos(\\pi - x) = -\\cos x$ for alle $x$.',
        solution: `Punktet for vinkelen $\\pi - x$ pa enhetssirkelen har koordinater $(-\\cos x, \\sin x)$ fordi det er speilingen av $(\\cos x, \\sin x)$ om $y$-aksen. Dermed er $\\sin(\\pi - x) = \\sin x$ og $\\cos(\\pi - x) = -\\cos x$.`,
        hints: ['Tenk pa hva som skjer med et punkt pa enhetssirkelen nar du speiler om $y$-aksen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjor om paskanden er sann eller usann, og begrunn svaret.',
        subTasks: [
          { label: 'a', task: '$\\sin 90° = 1$', solution: 'Sann. Punktet pa enhetssirkelen for $90°$ er $(0, 1)$, sa $\\sin 90° = 1$.' },
          { label: 'b', task: '$\\cos(-x) = -\\cos x$', solution: 'Usann. $\\cos(-x) = \\cos x$ (cosinus er en partall-funksjon).' },
          { label: 'c', task: '$\\tan 180° = 0$', solution: 'Sann. $\\tan 180° = \\frac{\\sin 180°}{\\cos 180°} = \\frac{0}{-1} = 0$.' },
        ],
        hints: ['Bruk enhetssirkelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-1-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r1-7-1-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle uttrykket $\\frac{\\sin^4 x - \\cos^4 x}{\\sin^2 x - \\cos^2 x}$.',
        solution: `Telleren er en differanse mellom to kvadrater:

$\\sin^4 x - \\cos^4 x = (\\sin^2 x)^2 - (\\cos^2 x)^2 = (\\sin^2 x - \\cos^2 x)(\\sin^2 x + \\cos^2 x)$

Siden $\\sin^2 x + \\cos^2 x = 1$:

$\\frac{(\\sin^2 x - \\cos^2 x) \\cdot 1}{\\sin^2 x - \\cos^2 x} = 1$

Svaret er $1$ (for $\\sin^2 x \\neq \\cos^2 x$).`,
        hints: ['Bruk konjugatsetningen $a^2 - b^2 = (a-b)(a+b)$ med $a = \\sin^2 x$ og $b = \\cos^2 x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Enhetssirkelen:** Punktet pa enhetssirkelen for vinkel $v$ er $(\\cos v, \\sin v)$.

**Radianer og grader:** $\\pi \\text{ rad} = 180°$

**Eksakte verdier:** Du ma kunne verdiene for $0$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{4}$, $\\frac{\\pi}{3}$ og $\\frac{\\pi}{2}$.

**Pytagoreisk identitet:** $\\sin^2 x + \\cos^2 x = 1$

**Tangens:** $\\tan x = \\frac{\\sin x}{\\cos x}$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Trigonometriske grafer
// ============================================================================

export const CHAPTER_R1_7_2: TextbookChapter = {
  id: 'r1-7-2',
  courseId: 'r1',
  chapterNumber: '7.2',
  title: 'Trigonometriske grafer',
  description: 'Lær om grafene til sinus, cosinus og tangens, og hvordan amplitude, periode og faseforskyvning pavirker grafen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'tegne og gjenkjenne grafene til y = sin x, y = cos x og y = tan x',
    'forstå begrepene amplitude, periode og faseforskyvning',
    'analysere funksjoner pa formen y = a sin(bx + c) + d',
    'lese av egenskaper fra grafen til en trigonometrisk funksjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-7-2-intro',
      type: 'text',
      content: `## Trigonometriske grafer

Nar vi plotter $\\sin x$ og $\\cos x$ som funksjoner av $x$, far vi periodiske kurver -- de gjentar seg med jevne mellomrom. I dette kapittelet skal vi studere disse grafene og lare hvordan ulike parametere endrer formen pa kurven.`,
    },

    // ========== SINUSFUNKSJONEN ==========
    {
      id: 'r1-7-2-sinus-graf',
      type: 'text',
      content: `## Grafen til $y = \\sin x$

Sinusfunksjonen er en bolgelignende kurve med disse egenskapene:

- **Periode:** $2\\pi$ (grafen gjentar seg etter $2\\pi$)
- **Amplitude:** $1$ (storste avstand fra $x$-aksen)
- **Verdimengde:** $[-1, 1]$
- **Nullpunkter:** $x = n\\pi$ for $n \\in \\mathbb{Z}$
- **Toppunkt:** $x = \\frac{\\pi}{2} + 2n\\pi$ (der $\\sin x = 1$)
- **Bunnpunkt:** $x = \\frac{3\\pi}{2} + 2n\\pi$ (der $\\sin x = -1$)`,
    },

    // GeoGebra: sinusgraf
    {
      id: 'r1-7-2-geogebra-sinus',
      type: 'geogebra',
      title: 'Grafen til y = sin x',
      description: 'Utforsk sinusfunksjonen interaktivt.',
      appType: 'graphing',
      commands: [
        'f(x) = sin(x)',
        'SetColor(f, "Blue")',
      ],
    },

    // ========== COSINUSFUNKSJONEN ==========
    {
      id: 'r1-7-2-cosinus-graf',
      type: 'text',
      content: `## Grafen til $y = \\cos x$

Cosinusfunksjonen har samme form som sinusfunksjonen, men er forskjovet $\\frac{\\pi}{2}$ mot venstre:

- **Periode:** $2\\pi$
- **Amplitude:** $1$
- **Verdimengde:** $[-1, 1]$
- **Nullpunkter:** $x = \\frac{\\pi}{2} + n\\pi$ for $n \\in \\mathbb{Z}$
- **Toppunkt:** $x = 2n\\pi$ (der $\\cos x = 1$)
- **Bunnpunkt:** $x = \\pi + 2n\\pi$ (der $\\cos x = -1$)

**Sammenheng:** $\\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right)$`,
    },

    // ========== TANGENSFUNKSJONEN ==========
    {
      id: 'r1-7-2-tangens-graf',
      type: 'text',
      content: `## Grafen til $y = \\tan x$

Tangensfunksjonen har en helt annen form enn sinus og cosinus:

- **Periode:** $\\pi$ (ikke $2\\pi$!)
- **Verdimengde:** $(-\\infty, \\infty)$ -- alle reelle tall
- **Nullpunkter:** $x = n\\pi$ for $n \\in \\mathbb{Z}$
- **Vertikale asymptoter:** $x = \\frac{\\pi}{2} + n\\pi$ (der $\\cos x = 0$)
- **Monotont voksende** pa hvert intervall mellom to asymptoter`,
    },

    // Oppgave 1
    {
      id: 'r1-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oppgi periode, amplitude og verdimengde for hver funksjon.',
        subTasks: [
          { label: 'a', task: '$y = \\sin x$', solution: 'Periode: $2\\pi$, amplitude: $1$, verdimengde: $[-1, 1]$' },
          { label: 'b', task: '$y = \\cos x$', solution: 'Periode: $2\\pi$, amplitude: $1$, verdimengde: $[-1, 1]$' },
          { label: 'c', task: '$y = \\tan x$', solution: 'Periode: $\\pi$, ingen amplitude (ubegrenset), verdimengde: $(-\\infty, \\infty)$' },
        ],
        hints: ['Amplitude = storste avstand fra midtlinjen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TRANSFORMASJONER ==========
    {
      id: 'r1-7-2-transformasjon-intro',
      type: 'text',
      content: `## Den generelle sinusfunksjonen

Ved a endre parameterne i sinusfunksjonen kan vi kontrollere bolgens form:

$$y = a \\cdot \\sin(bx + c) + d$$

Hver parameter har en bestemt effekt pa grafen.`,
    },

    // Definisjon: Parameterne
    {
      id: 'r1-7-2-def-parametere',
      type: 'definition',
      title: 'Parameterne i $y = a \\sin(bx + c) + d$',
      content: `| Parameter | Navn | Effekt |
|-----------|------|--------|
| $a$ | **Amplitude** | $|a|$ = storste avstand fra midtlinjen. Negativ $a$ speiler grafen. |
| $b$ | **Vinkelfrekvens** | Bestemmer perioden: $T = \\frac{2\\pi}{|b|}$ |
| $c$ | **Faseforskyvning** | Forskyver grafen horisontalt: $-\\frac{c}{b}$ enheter |
| $d$ | **Vertikal forskyvning** | Forskyver grafen vertikalt (midtlinjen er $y = d$) |`,
    },

    // Teorem: Periode
    {
      id: 'r1-7-2-theorem-periode',
      type: 'theorem',
      title: 'Periode for trigonometriske funksjoner',
      content: `For $y = a \\sin(bx + c) + d$ og $y = a \\cos(bx + c) + d$:

$$\\text{Periode} = T = \\frac{2\\pi}{|b|}$$

For $y = a \\tan(bx + c) + d$:

$$\\text{Periode} = T = \\frac{\\pi}{|b|}$$`,
    },

    // Eksempel: Analyse av transformasjoner
    {
      id: 'r1-7-2-example-analyse',
      type: 'example',
      title: 'Eksempel 1: Analyse av transformert sinusfunksjon',
      problem: `Bestem amplitude, periode, faseforskyvning og vertikal forskyvning for funksjonen:

$$f(x) = 3\\sin(2x - \\frac{\\pi}{3}) + 1$$`,
      solution: `**Losning:**

Vi sammenligner med $y = a \\sin(bx + c) + d$:

$a = 3$, $b = 2$, $c = -\\frac{\\pi}{3}$, $d = 1$

- **Amplitude:** $|a| = 3$
- **Periode:** $T = \\frac{2\\pi}{|b|} = \\frac{2\\pi}{2} = \\pi$
- **Faseforskyvning:** $-\\frac{c}{b} = -\\frac{-\\pi/3}{2} = \\frac{\\pi}{6}$ (mot hoyre)
- **Vertikal forskyvning:** $d = 1$ (opp)
- **Verdimengde:** $[1 - 3, 1 + 3] = [-2, 4]$
- **Midtlinje:** $y = 1$`,
    },

    // Oppgave 2
    {
      id: 'r1-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bestem amplitude, periode, faseforskyvning og verdimengde for hver funksjon.',
        subTasks: [
          { label: 'a', task: '$f(x) = 2\\sin(3x)$', solution: 'Amplitude: $2$, periode: $\\frac{2\\pi}{3}$, faseforskyvning: $0$, verdimengde: $[-2, 2]$' },
          { label: 'b', task: '$g(x) = -\\cos(x - \\frac{\\pi}{4}) + 2$', solution: 'Amplitude: $1$, periode: $2\\pi$, faseforskyvning: $\\frac{\\pi}{4}$ mot hoyre, verdimengde: $[1, 3]$' },
          { label: 'c', task: '$h(x) = 4\\sin(\\frac{x}{2} + \\pi)$', solution: 'Amplitude: $4$, periode: $4\\pi$, faseforskyvning: $2\\pi$ mot venstre, verdimengde: $[-4, 4]$' },
        ],
        hints: ['Skriv pa formen $a\\sin(bx + c) + d$ forst', 'Periode $= \\frac{2\\pi}{|b|}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel: Fra graf til funksjonsuttrykk
    {
      id: 'r1-7-2-example-fragrad',
      type: 'example',
      title: 'Eksempel 2: Finn funksjonsuttrykket fra grafen',
      problem: `En sinuslignende graf har folgende egenskaper:
- Storste verdi: $5$, minste verdi: $1$
- Periode: $\\pi$
- Toppunkt i $x = \\frac{\\pi}{4}$

Finn funksjonsuttrykket pa formen $f(x) = a\\sin(bx + c) + d$.`,
      solution: `**Losning:**

**Steg 1: Finn $a$ og $d$**

Midtlinjen: $d = \\frac{5 + 1}{2} = 3$

Amplitude: $a = \\frac{5 - 1}{2} = 2$

**Steg 2: Finn $b$**

Periode $= \\frac{2\\pi}{b} = \\pi$, sa $b = 2$.

**Steg 3: Finn $c$**

Sinusfunksjonen har toppunkt nar argumentet er $\\frac{\\pi}{2}$. Vi trenger:

$2 \\cdot \\frac{\\pi}{4} + c = \\frac{\\pi}{2}$
$\\frac{\\pi}{2} + c = \\frac{\\pi}{2}$
$c = 0$

**Svar:**

$$f(x) = 2\\sin(2x) + 3$$`,
    },

    // Oppgave 3
    {
      id: 'r1-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn et funksjonsuttrykk pa formen $f(x) = a\\sin(bx + c) + d$ med de gitte egenskapene.',
        subTasks: [
          { label: 'a', task: 'Amplitude $3$, periode $4\\pi$, ingen forskyvning', solution: '$f(x) = 3\\sin(\\frac{x}{2})$' },
          { label: 'b', task: 'Storste verdi $7$, minste verdi $-1$, periode $2\\pi$', solution: '$a = 4$, $d = 3$, sa $f(x) = 4\\sin(x) + 3$' },
          { label: 'c', task: 'Amplitude $2$, periode $\\pi$, toppunkt i $x = 0$', solution: '$b = 2$, toppunkt nar $bx + c = \\frac{\\pi}{2}$ gir $c = \\frac{\\pi}{2}$, sa $f(x) = 2\\sin(2x + \\frac{\\pi}{2})$' },
        ],
        hints: ['Amplitude: $a = \\frac{\\text{maks} - \\text{min}}{2}$', 'Vertikal forskyvning: $d = \\frac{\\text{maks} + \\text{min}}{2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r1-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn perioden til hver funksjon.',
        subTasks: [
          { label: 'a', task: '$y = \\sin(4x)$', solution: '$T = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$' },
          { label: 'b', task: '$y = \\cos(\\frac{x}{3})$', solution: '$T = \\frac{2\\pi}{1/3} = 6\\pi$' },
          { label: 'c', task: '$y = \\tan(2x)$', solution: '$T = \\frac{\\pi}{2}$' },
          { label: 'd', task: '$y = \\sin(\\pi x)$', solution: '$T = \\frac{2\\pi}{\\pi} = 2$' },
        ],
        hints: ['For sinus og cosinus: $T = \\frac{2\\pi}{|b|}$', 'For tangens: $T = \\frac{\\pi}{|b|}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel: Negativ amplitude
    {
      id: 'r1-7-2-example-negativ',
      type: 'example',
      title: 'Eksempel 3: Negativ amplitude og speiling',
      problem: `Beskriv hvordan grafen til $g(x) = -2\\cos(x) + 1$ er transformert i forhold til $y = \\cos x$.`,
      solution: `**Losning:**

Vi sammenligner med $y = a\\cos(bx + c) + d$:

$a = -2$, $b = 1$, $c = 0$, $d = 1$

Transformasjonene (i rekkefølge):
1. **Strekk vertikalt** med faktor $2$: amplituden okes fra $1$ til $2$
2. **Speiling om $x$-aksen** (fordi $a < 0$): grafen snus opp-ned
3. **Flytt opp** med $1$: midtlinjen flyttes fra $y = 0$ til $y = 1$

Verdimengde: $[1 - 2, 1 + 2] = [-1, 3]$

Merk: $g(0) = -2 \\cdot 1 + 1 = -1$ (bunnpunkt, ikke toppunkt, fordi grafen er speilet).`,
    },

    // Oppgave 5-8
    {
      id: 'r1-7-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv transformasjonene fra $y = \\sin x$ til den gitte funksjonen.',
        subTasks: [
          { label: 'a', task: '$y = 3\\sin(x) - 2$', solution: 'Strekk vertikalt med faktor $3$, flytt ned $2$. Verdimengde: $[-5, 1]$.' },
          { label: 'b', task: '$y = \\sin(x - \\frac{\\pi}{2})$', solution: 'Forskyv $\\frac{\\pi}{2}$ mot hoyre. (Tilsvarer $y = -\\cos x$.)' },
          { label: 'c', task: '$y = -\\sin(2x) + 3$', solution: 'Halver perioden, speil om $x$-aksen, flytt opp $3$. Verdimengde: $[2, 4]$.' },
        ],
        hints: ['Les av $a$, $b$, $c$ og $d$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-6',
        number: '6',
        type: 'interactive',
        difficulty: 'medium',
        tool: 'geogebra-graph',
        task: 'Bruk GeoGebra til a tegne $f(x) = 2\\sin(3x - \\frac{\\pi}{2}) + 1$. Les av toppunkter, bunnpunkter og nullpunkter fra grafen.',
        solution: 'Amplitude: $2$, periode: $\\frac{2\\pi}{3}$, faseforskyvning: $\\frac{\\pi}{6}$ mot hoyre, midtlinje $y = 1$. Toppunkt: $(\\frac{\\pi}{3} + \\frac{2n\\pi}{3}, 3)$, bunnpunkt: $(\\frac{2\\pi}{3} + \\frac{2n\\pi}{3}, -1)$.',
        hints: ['Skriv inn funksjonsuttrykket direkte i GeoGebra'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En sinuslignende funksjon har toppunkter i $(-\\frac{\\pi}{4}, 6)$ og bunnpunkter i $(\\frac{\\pi}{4}, 2)$. Finn funksjonsuttrykket.',
        solution: `Amplitude: $a = \\frac{6 - 2}{2} = 2$

Vertikal forskyvning: $d = \\frac{6 + 2}{2} = 4$

Halv periode fra topp til bunn: $\\frac{\\pi}{4} - (-\\frac{\\pi}{4}) = \\frac{\\pi}{2}$, sa hel periode $T = \\pi$, som gir $b = \\frac{2\\pi}{\\pi} = 2$.

Toppunkt nar $2x + c = \\frac{\\pi}{2}$: $2 \\cdot (-\\frac{\\pi}{4}) + c = \\frac{\\pi}{2}$ gir $c = \\pi$.

Svar: $f(x) = 2\\sin(2x + \\pi) + 4$`,
        hints: ['Avstand fra topp til bunn er en halv periode', 'Amplitude = halvparten av differansen mellom maks og min'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Temperaturen i en by kan tilnarmet beskrives med funksjonen $T(t) = 10\\sin\\left(\\frac{\\pi}{6}(t - 4)\\right) + 12$ der $T$ er temperaturen i $°C$ og $t$ er maneden (januar = 1).',
        subTasks: [
          { label: 'a', task: 'Finn amplitude, periode og gjennomsnittlig temperatur.', solution: 'Amplitude: $10°C$, periode: $\\frac{2\\pi}{\\pi/6} = 12$ maneder, gjennomsnitt: $12°C$.' },
          { label: 'b', task: 'Finn temperaturen i januar ($t = 1$) og juli ($t = 7$).', solution: '$T(1) = 10\\sin(\\frac{\\pi}{6}(1-4)) + 12 = 10\\sin(-\\frac{\\pi}{2}) + 12 = 10 \\cdot (-1) + 12 = 2°C$. $T(7) = 10\\sin(\\frac{\\pi}{6} \\cdot 3) + 12 = 10\\sin(\\frac{\\pi}{2}) + 12 = 22°C$.' },
          { label: 'c', task: 'I hvilke maneder er temperaturen over $17°C$?', solution: '$10\\sin(\\frac{\\pi}{6}(t-4)) + 12 > 17$ gir $\\sin(\\frac{\\pi}{6}(t-4)) > 0{,}5$. Losning: ca. maned 5 til maned 9 (mai-september).' },
        ],
        hints: ['Periode $12$ betyr at monsteret gjentar seg hvert ar', 'For c): los likningen $\\sin(u) > 0{,}5$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skisser grafen til funksjonen for $x \\in [0, 2\\pi]$ og merk av viktige punkter.',
        subTasks: [
          { label: 'a', task: '$y = \\sin(x) + 1$', solution: 'Sinuskurve forskjovet 1 opp. Toppunkt $(\\frac{\\pi}{2}, 2)$, bunnpunkt $(\\frac{3\\pi}{2}, 0)$, nullpunkt: aldri (minste verdi er $0$).' },
          { label: 'b', task: '$y = 2\\cos(x)$', solution: 'Cosinuskurve med amplitude $2$. Toppunkt $(0, 2)$, bunnpunkt $(\\pi, -2)$.' },
        ],
        hints: ['Start med a tegne standardgrafen, deretter transformer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjor om funksjonen er periodisk. Hvis ja, oppgi perioden.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sin(x) + \\cos(x)$', solution: 'Ja, periode $2\\pi$. (Kan skrives som $\\sqrt{2}\\sin(x + \\frac{\\pi}{4})$.)' },
          { label: 'b', task: '$g(x) = \\sin(x) \\cdot \\cos(x)$', solution: 'Ja, periode $\\pi$. (Fordi $\\sin(x)\\cos(x) = \\frac{1}{2}\\sin(2x)$.)' },
          { label: 'c', task: '$h(x) = x \\cdot \\sin(x)$', solution: 'Nei, ikke periodisk. Amplituden vokser med $x$.' },
        ],
        hints: ['En funksjon er periodisk hvis $f(x + T) = f(x)$ for alle $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at $\\sin x + \\cos x = \\sqrt{2}\\sin(x + \\frac{\\pi}{4})$.',
        solution: `Vi bruker addisjonsformelen for sinus:

$\\sqrt{2}\\sin(x + \\frac{\\pi}{4}) = \\sqrt{2}\\left[\\sin x \\cos \\frac{\\pi}{4} + \\cos x \\sin \\frac{\\pi}{4}\\right]$

$= \\sqrt{2}\\left[\\sin x \\cdot \\frac{\\sqrt{2}}{2} + \\cos x \\cdot \\frac{\\sqrt{2}}{2}\\right]$

$= \\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2}(\\sin x + \\cos x)$

$= 1 \\cdot (\\sin x + \\cos x) = \\sin x + \\cos x$`,
        hints: ['Bruk $\\sin(u + v) = \\sin u \\cos v + \\cos u \\sin v$', '$\\cos \\frac{\\pi}{4} = \\sin \\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble funksjonsuttrykket med riktig beskrivelse.',
        subTasks: [
          { label: 'a', task: '$y = 3\\cos(x)$ -- Hva er verdimengden?', solution: '$[-3, 3]$' },
          { label: 'b', task: '$y = \\sin(\\frac{x}{2})$ -- Hva er perioden?', solution: '$4\\pi$' },
          { label: 'c', task: '$y = \\cos(x) - 5$ -- Hva er midtlinjen?', solution: '$y = -5$' },
        ],
        hints: ['Verdimengde: $[d - |a|, d + |a|]$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv $f(x) = -3\\cos(2x - \\pi) + 1$ pa formen $a\\sin(bx + c) + d$.',
        solution: `$-3\\cos(2x - \\pi) + 1$

Bruker at $\\cos(u) = \\sin(u + \\frac{\\pi}{2})$:

$= -3\\sin(2x - \\pi + \\frac{\\pi}{2}) + 1 = -3\\sin(2x - \\frac{\\pi}{2}) + 1$

Eller: $= 3\\sin(2x - \\frac{\\pi}{2} + \\pi) + 1 = 3\\sin(2x + \\frac{\\pi}{2}) + 1$

Sa $a = 3$, $b = 2$, $c = \\frac{\\pi}{2}$, $d = 1$.`,
        hints: ['Bruk $\\cos u = \\sin(u + \\frac{\\pi}{2})$', '$-\\sin u = \\sin(u + \\pi)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vannstanden i en havn varierer mellom $0{,}5$ m og $3{,}5$ m med en periode pa $12{,}4$ timer. Hoyvannet var kl. 06:00.',
        subTasks: [
          { label: 'a', task: 'Sett opp en modell $h(t) = a\\sin(bt + c) + d$ der $t$ er antall timer etter midnatt.', solution: '$a = 1{,}5$, $d = 2$, $T = 12{,}4$ sa $b = \\frac{2\\pi}{12{,}4} \\approx 0{,}507$. Hoyvann kl. 06 gir $bt + c = \\frac{\\pi}{2}$ nar $t = 6$: $c = \\frac{\\pi}{2} - 6b \\approx -1{,}542$. Svar: $h(t) = 1{,}5\\sin(0{,}507t - 1{,}542) + 2$.' },
          { label: 'b', task: 'Finn vannstanden kl. 12:00.', solution: '$h(12) = 1{,}5\\sin(0{,}507 \\cdot 12 - 1{,}542) + 2 \\approx 1{,}5\\sin(4{,}542) + 2 \\approx 1{,}5 \\cdot (-0{,}988) + 2 \\approx 0{,}52$ m.' },
        ],
        hints: ['Amplitude = halve forskjellen mellom hoy- og lavvann', 'Midtlinjen = gjennomsnittet av hoy- og lavvann'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvor mange losninger har likningen $\\sin x = 0{,}5$ pa intervallet $[0, 4\\pi]$?',
        solution: 'Pa intervallet $[0, 2\\pi]$ er det to losninger: $x = \\frac{\\pi}{6}$ og $x = \\frac{5\\pi}{6}$. Pa $[0, 4\\pi]$ gjentar monsteret seg, sa det er $4$ losninger totalt.',
        hints: ['Tenk pa hvor mange ganger sinusgrafen krysser den horisontale linjen $y = 0{,}5$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-2-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r1-7-2-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Funksjonen $f(x) = a\\cos(bx) + d$ gar gjennom punktene $(0, 5)$, $(\\frac{\\pi}{2}, 1)$ og $(\\pi, -3)$. Finn $a$, $b$ og $d$.',
        solution: `Fra $f(0) = 5$: $a\\cos(0) + d = a + d = 5$

Fra $f(\\pi) = -3$: $a\\cos(b\\pi) + d = -3$

Fra $f(\\frac{\\pi}{2}) = 1$: $a\\cos(\\frac{b\\pi}{2}) + d = 1$

Antar $b = 1$: $f(\\pi) = a\\cos(\\pi) + d = -a + d = -3$.

Fra $a + d = 5$ og $-a + d = -3$: legger sammen gir $2d = 2$, sa $d = 1$ og $a = 4$.

Sjekk: $f(\\frac{\\pi}{2}) = 4\\cos(\\frac{\\pi}{2}) + 1 = 0 + 1 = 1$ ✓

Svar: $a = 4$, $b = 1$, $d = 1$, altsa $f(x) = 4\\cos(x) + 1$.`,
        hints: ['Sett inn hvert punkt i funksjonsuttrykket for a fa tre likninger', 'Start med a anta $b = 1$ og se om det gir konsistente losninger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Standardgrafene:** $y = \\sin x$ og $y = \\cos x$ har periode $2\\pi$ og amplitude $1$. $y = \\tan x$ har periode $\\pi$.

**Den generelle formen:** $y = a\\sin(bx + c) + d$

- Amplitude: $|a|$
- Periode: $\\frac{2\\pi}{|b|}$
- Faseforskyvning: $-\\frac{c}{b}$
- Vertikal forskyvning: $d$
- Verdimengde: $[d - |a|, d + |a|]$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Trigonometriske likninger
// ============================================================================

export const CHAPTER_R1_7_3: TextbookChapter = {
  id: 'r1-7-3',
  courseId: 'r1',
  chapterNumber: '7.3',
  title: 'Trigonometriske likninger',
  description: 'Lær a lose likninger med sinus, cosinus og tangens ved hjelp av enhetssirkelen og generelle losningsformler.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lose grunnleggende trigonometriske likninger av typen sin x = k, cos x = k og tan x = k',
    'bruke enhetssirkelen til a finne alle losninger',
    'anvende generelle losningsformler',
    'lose likninger med faseforskyvning og substitusjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-7-3-intro',
      type: 'text',
      content: `## Trigonometriske likninger

En trigonometrisk likning er en likning som inneholder trigonometriske funksjoner. Siden sinus og cosinus er periodiske, har slike likninger typisk **uendelig mange losninger**.

Nokkelen til a lose trigonometriske likninger er a:
1. Finne losningene i ett intervall (f.eks. $[0, 2\\pi)$) ved hjelp av enhetssirkelen
2. Legge til perioden for a finne alle losninger`,
    },

    // ========== SIN X = K ==========
    {
      id: 'r1-7-3-sinx-intro',
      type: 'text',
      content: `## Likninger pa formen $\\sin x = k$

Likningen $\\sin x = k$ har losning bare nar $-1 \\leq k \\leq 1$ (fordi sinusverdier ligger mellom $-1$ og $1$).

Pa enhetssirkelen svarer $\\sin x = k$ til de punktene der $y$-koordinaten er lik $k$. Vi tegner en horisontal linje $y = k$ og finner der den krysser sirkelen.`,
    },

    // Generell losningsformel for sin
    {
      id: 'r1-7-3-theorem-sin',
      type: 'theorem',
      title: 'Losning av $\\sin x = k$',
      content: `Dersom $\\sin v = k$ (der $v$ er en kjent vinkel), sa er den generelle losningen:

$$x = v + 2n\\pi \\quad \\text{eller} \\quad x = \\pi - v + 2n\\pi$$

der $n \\in \\mathbb{Z}$ (et vilkarlig heltall).

**Kortform:** $x = v + 2n\\pi \\;\\lor\\; x = (\\pi - v) + 2n\\pi$`,
    },

    // Eksempel: sin x = 1/2
    {
      id: 'r1-7-3-example-sinx',
      type: 'example',
      title: 'Eksempel 1: Los $\\sin x = \\frac{1}{2}$',
      problem: `Finn alle losninger av $\\sin x = \\frac{1}{2}$.`,
      solution: `**Losning:**

**Steg 1:** Finn en vinkel $v$ slik at $\\sin v = \\frac{1}{2}$.

Vi vet at $\\sin \\frac{\\pi}{6} = \\frac{1}{2}$, sa $v = \\frac{\\pi}{6}$.

**Steg 2:** Bruk den generelle losningsformelen:

$$x = \\frac{\\pi}{6} + 2n\\pi \\quad \\text{eller} \\quad x = \\pi - \\frac{\\pi}{6} + 2n\\pi = \\frac{5\\pi}{6} + 2n\\pi$$

**Svar:** $x = \\frac{\\pi}{6} + 2n\\pi$ eller $x = \\frac{5\\pi}{6} + 2n\\pi$, $n \\in \\mathbb{Z}$

Pa intervallet $[0, 2\\pi)$: $x = \\frac{\\pi}{6}$ og $x = \\frac{5\\pi}{6}$.`,
    },

    // Oppgave 1
    {
      id: 'r1-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningene og oppgi alle losninger pa intervallet $[0, 2\\pi)$.',
        subTasks: [
          { label: 'a', task: '$\\sin x = \\frac{\\sqrt{3}}{2}$', solution: '$x = \\frac{\\pi}{3}$ og $x = \\frac{2\\pi}{3}$' },
          { label: 'b', task: '$\\sin x = -\\frac{1}{2}$', solution: '$x = \\frac{7\\pi}{6}$ og $x = \\frac{11\\pi}{6}$' },
          { label: 'c', task: '$\\sin x = -1$', solution: '$x = \\frac{3\\pi}{2}$' },
          { label: 'd', task: '$\\sin x = \\frac{\\sqrt{2}}{2}$', solution: '$x = \\frac{\\pi}{4}$ og $x = \\frac{3\\pi}{4}$' },
        ],
        hints: ['Finn referansevinkelen forst', 'Bruk enhetssirkelen til a bestemme i hvilke kvadranter losningene finnes'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== COS X = K ==========
    {
      id: 'r1-7-3-cosx-intro',
      type: 'text',
      content: `## Likninger pa formen $\\cos x = k$

Likningen $\\cos x = k$ har losning bare nar $-1 \\leq k \\leq 1$. Pa enhetssirkelen svarer dette til de punktene der $x$-koordinaten er lik $k$.`,
    },

    // Generell losningsformel for cos
    {
      id: 'r1-7-3-theorem-cos',
      type: 'theorem',
      title: 'Losning av $\\cos x = k$',
      content: `Dersom $\\cos v = k$ (der $v$ er en kjent vinkel), sa er den generelle losningen:

$$x = v + 2n\\pi \\quad \\text{eller} \\quad x = -v + 2n\\pi$$

der $n \\in \\mathbb{Z}$.

**Kortform:** $x = \\pm v + 2n\\pi$`,
    },

    // Eksempel: cos x = -sqrt(3)/2
    {
      id: 'r1-7-3-example-cosx',
      type: 'example',
      title: 'Eksempel 2: Los $\\cos x = -\\frac{\\sqrt{3}}{2}$',
      problem: `Finn alle losninger av $\\cos x = -\\frac{\\sqrt{3}}{2}$.`,
      solution: `**Losning:**

**Steg 1:** Finn en vinkel $v$ slik at $\\cos v = -\\frac{\\sqrt{3}}{2}$.

Vi vet at $\\cos \\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$. Cosinus er negativ i andre og tredje kvadrant, sa:

$v = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$

**Steg 2:** Generell losning:

$$x = \\frac{5\\pi}{6} + 2n\\pi \\quad \\text{eller} \\quad x = -\\frac{5\\pi}{6} + 2n\\pi = \\frac{7\\pi}{6} + 2n\\pi$$

**Svar:** $x = \\pm \\frac{5\\pi}{6} + 2n\\pi$, $n \\in \\mathbb{Z}$

Pa intervallet $[0, 2\\pi)$: $x = \\frac{5\\pi}{6}$ og $x = \\frac{7\\pi}{6}$.`,
    },

    // Oppgave 2
    {
      id: 'r1-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningene og oppgi alle losninger pa intervallet $[0, 2\\pi)$.',
        subTasks: [
          { label: 'a', task: '$\\cos x = \\frac{1}{2}$', solution: '$x = \\frac{\\pi}{3}$ og $x = \\frac{5\\pi}{3}$' },
          { label: 'b', task: '$\\cos x = -\\frac{\\sqrt{2}}{2}$', solution: '$x = \\frac{3\\pi}{4}$ og $x = \\frac{5\\pi}{4}$' },
          { label: 'c', task: '$\\cos x = 0$', solution: '$x = \\frac{\\pi}{2}$ og $x = \\frac{3\\pi}{2}$' },
          { label: 'd', task: '$\\cos x = 1$', solution: '$x = 0$' },
        ],
        hints: ['$\\cos x = k$ gir $x = \\pm v + 2n\\pi$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TAN X = K ==========
    {
      id: 'r1-7-3-tanx-intro',
      type: 'text',
      content: `## Likninger pa formen $\\tan x = k$

Tangensfunksjonen har periode $\\pi$, sa losningsformelen er enklere enn for sinus og cosinus. Tangens tar alle reelle verdier, sa $\\tan x = k$ har alltid losning.`,
    },

    // Generell losningsformel for tan
    {
      id: 'r1-7-3-theorem-tan',
      type: 'theorem',
      title: 'Losning av $\\tan x = k$',
      content: `Dersom $\\tan v = k$ (der $v$ er en kjent vinkel), sa er den generelle losningen:

$$x = v + n\\pi$$

der $n \\in \\mathbb{Z}$.

Merk at perioden er $\\pi$ (ikke $2\\pi$), sa det er bare en losningsgren.`,
    },

    // Eksempel: tan x = 1
    {
      id: 'r1-7-3-example-tanx',
      type: 'example',
      title: 'Eksempel 3: Los $\\tan x = 1$',
      problem: `Finn alle losninger av $\\tan x = 1$.`,
      solution: `**Losning:**

Vi vet at $\\tan \\frac{\\pi}{4} = 1$.

Generell losning:

$$x = \\frac{\\pi}{4} + n\\pi, \\quad n \\in \\mathbb{Z}$$

Pa intervallet $[0, 2\\pi)$: $x = \\frac{\\pi}{4}$ og $x = \\frac{\\pi}{4} + \\pi = \\frac{5\\pi}{4}$.`,
    },

    // Oppgave 3
    {
      id: 'r1-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Los likningene og oppgi den generelle losningen.',
        subTasks: [
          { label: 'a', task: '$\\tan x = \\sqrt{3}$', solution: '$x = \\frac{\\pi}{3} + n\\pi$' },
          { label: 'b', task: '$\\tan x = -1$', solution: '$x = -\\frac{\\pi}{4} + n\\pi = \\frac{3\\pi}{4} + n\\pi$' },
          { label: 'c', task: '$\\tan x = 0$', solution: '$x = n\\pi$' },
          { label: 'd', task: '$\\tan x = \\frac{\\sqrt{3}}{3}$', solution: '$x = \\frac{\\pi}{6} + n\\pi$' },
        ],
        hints: ['Bruk at $\\tan x$ har periode $\\pi$', 'Bare en losningsgren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LIKNINGER MED FASEFORSKYVNING ==========
    {
      id: 'r1-7-3-fase-intro',
      type: 'text',
      content: `## Likninger med sammensatt argument

Nar argumentet til den trigonometriske funksjonen er mer enn bare $x$, bruker vi substitusjon. Vi setter $u = bx + c$ og loser for $u$ forst, deretter for $x$.`,
    },

    // Eksempel: sin(2x + pi/3) = 0.5
    {
      id: 'r1-7-3-example-fase',
      type: 'example',
      title: 'Eksempel 4: Likning med faseforskyvning',
      problem: `Los likningen $\\sin\\left(2x + \\frac{\\pi}{3}\\right) = \\frac{1}{2}$ for $x \\in [0, 2\\pi)$.`,
      solution: `**Losning:**

**Steg 1:** Sett $u = 2x + \\frac{\\pi}{3}$.

Vi loser $\\sin u = \\frac{1}{2}$:
$$u = \\frac{\\pi}{6} + 2n\\pi \\quad \\text{eller} \\quad u = \\frac{5\\pi}{6} + 2n\\pi$$

**Steg 2:** Sett tilbake $u = 2x + \\frac{\\pi}{3}$:

**Gren 1:** $2x + \\frac{\\pi}{3} = \\frac{\\pi}{6} + 2n\\pi$
$2x = \\frac{\\pi}{6} - \\frac{\\pi}{3} + 2n\\pi = -\\frac{\\pi}{6} + 2n\\pi$
$x = -\\frac{\\pi}{12} + n\\pi$

**Gren 2:** $2x + \\frac{\\pi}{3} = \\frac{5\\pi}{6} + 2n\\pi$
$2x = \\frac{5\\pi}{6} - \\frac{\\pi}{3} + 2n\\pi = \\frac{\\pi}{2} + 2n\\pi$
$x = \\frac{\\pi}{4} + n\\pi$

**Steg 3:** Finn losninger i $[0, 2\\pi)$:

Gren 1: $n = 0$: $x = -\\frac{\\pi}{12}$ (utenfor). $n = 1$: $x = \\frac{11\\pi}{12}$ ✓. $n = 2$: $x = \\frac{23\\pi}{12}$ ✓.

Gren 2: $n = 0$: $x = \\frac{\\pi}{4}$ ✓. $n = 1$: $x = \\frac{5\\pi}{4}$ ✓.

**Svar:** $x = \\frac{\\pi}{4}$, $x = \\frac{11\\pi}{12}$, $x = \\frac{5\\pi}{4}$, $x = \\frac{23\\pi}{12}$`,
    },

    // Viktig tips
    {
      id: 'r1-7-3-tip-intervall',
      type: 'tip',
      content: `**Viktig ved sammensatte argumenter:**

Nar du loser $\\sin(bx + c) = k$ og trenger losninger i $[0, 2\\pi)$, ma du soke gjennom flere verdier av $n$ enn vanlig! Hvis $b = 2$, far du typisk **dobbelt sa mange** losninger som for en enkel likning.

Generelt: med $b$ i argumentet far du inntil $2|b|$ losninger i $[0, 2\\pi)$ for sinus og cosinus.`,
    },

    // Oppgave 4
    {
      id: 'r1-7-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningene for $x \\in [0, 2\\pi)$.',
        subTasks: [
          { label: 'a', task: '$\\cos(2x) = \\frac{1}{2}$', solution: '$2x = \\pm \\frac{\\pi}{3} + 2n\\pi$. Losninger: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$' },
          { label: 'b', task: '$\\sin(3x) = 0$', solution: '$3x = n\\pi$, sa $x = \\frac{n\\pi}{3}$. Losninger: $x = 0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$' },
          { label: 'c', task: '$\\tan(2x) = -\\sqrt{3}$', solution: '$2x = -\\frac{\\pi}{3} + n\\pi$, sa $x = -\\frac{\\pi}{6} + \\frac{n\\pi}{2}$. Losninger: $x = \\frac{\\pi}{3}, \\frac{5\\pi}{6}, \\frac{4\\pi}{3}, \\frac{11\\pi}{6}$' },
        ],
        hints: ['Sett $u = bx$ og los for $u$ forst', 'Husk a prove nok verdier av $n$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-7-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningene for $x \\in [0, 2\\pi)$.',
        subTasks: [
          { label: 'a', task: '$\\sin(x - \\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$', solution: '$x - \\frac{\\pi}{4} = \\frac{\\pi}{4} + 2n\\pi$ eller $x - \\frac{\\pi}{4} = \\frac{3\\pi}{4} + 2n\\pi$. Losninger: $x = \\frac{\\pi}{2}$ og $x = \\pi$.' },
          { label: 'b', task: '$\\cos(x + \\frac{\\pi}{6}) = -\\frac{1}{2}$', solution: '$x + \\frac{\\pi}{6} = \\pm \\frac{2\\pi}{3} + 2n\\pi$. Losninger: $x = \\frac{\\pi}{2}$ og $x = \\frac{7\\pi}{6}$.' },
        ],
        hints: ['Bruk substitusjon: sett $u = x + c$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== LIKNINGER SOM KREVER SUBSTITUSJON ==========
    {
      id: 'r1-7-3-substitusjon-intro',
      type: 'text',
      content: `## Likninger som krever omskriving

Noen trigonometriske likninger ma skrives om for de kan loses. Vanlige teknikker er:

- Bruk av $\\sin^2 x + \\cos^2 x = 1$ for a fa alt pa en trigonometrisk funksjon
- Faktorisering
- Substitusjon (f.eks. $t = \\cos x$) for a fa en algebraisk likning`,
    },

    // Eksempel: Andregradslikning i cos
    {
      id: 'r1-7-3-example-andregr',
      type: 'example',
      title: 'Eksempel 5: Andregradslikning i cosinus',
      problem: `Los likningen $2\\cos^2 x - \\cos x - 1 = 0$ for $x \\in [0, 2\\pi)$.`,
      solution: `**Losning:**

**Steg 1:** Sett $t = \\cos x$. Da far vi:
$$2t^2 - t - 1 = 0$$

**Steg 2:** Faktoriser (eller bruk abc-formelen):
$$2t^2 - t - 1 = (2t + 1)(t - 1) = 0$$

Sa $t = -\\frac{1}{2}$ eller $t = 1$.

**Steg 3:** Los for $x$:

$\\cos x = 1 \\Rightarrow x = 0$

$\\cos x = -\\frac{1}{2} \\Rightarrow x = \\frac{2\\pi}{3}$ eller $x = \\frac{4\\pi}{3}$

**Svar:** $x = 0$, $x = \\frac{2\\pi}{3}$, $x = \\frac{4\\pi}{3}$`,
    },

    // Eksempel: Bruk av identitet
    {
      id: 'r1-7-3-example-identitet',
      type: 'example',
      title: 'Eksempel 6: Bruk av pytagoreisk identitet',
      problem: `Los likningen $\\sin^2 x + \\sin x = \\cos^2 x$ for $x \\in [0, 2\\pi)$.`,
      solution: `**Losning:**

Erstatt $\\cos^2 x = 1 - \\sin^2 x$:

$$\\sin^2 x + \\sin x = 1 - \\sin^2 x$$
$$2\\sin^2 x + \\sin x - 1 = 0$$

Sett $t = \\sin x$:
$$(2t - 1)(t + 1) = 0$$

$t = \\frac{1}{2}$ eller $t = -1$.

$\\sin x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{6}$ eller $x = \\frac{5\\pi}{6}$

$\\sin x = -1 \\Rightarrow x = \\frac{3\\pi}{2}$

**Svar:** $x = \\frac{\\pi}{6}$, $x = \\frac{5\\pi}{6}$, $x = \\frac{3\\pi}{2}$`,
    },

    // Oppgave 6
    {
      id: 'r1-7-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningene for $x \\in [0, 2\\pi)$.',
        subTasks: [
          { label: 'a', task: '$2\\sin^2 x - \\sin x = 0$', solution: '$\\sin x(2\\sin x - 1) = 0$. $\\sin x = 0 \\Rightarrow x = 0, \\pi$. $\\sin x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$. Svar: $x = 0, \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\pi$.' },
          { label: 'b', task: '$\\cos^2 x = \\frac{3}{4}$', solution: '$\\cos x = \\pm \\frac{\\sqrt{3}}{2}$. Losninger: $x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$.' },
          { label: 'c', task: '$\\tan^2 x - 3 = 0$', solution: '$\\tan x = \\pm \\sqrt{3}$. Losninger: $x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$.' },
        ],
        hints: ['Faktoriser nar mulig', 'Husk a sjekke alle muligheter for $\\pm$-tegnet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-7-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningene for $x \\in [0, 2\\pi)$. Bruk $\\sin^2 x + \\cos^2 x = 1$ der det trengs.',
        subTasks: [
          { label: 'a', task: '$2\\cos^2 x + 3\\sin x = 3$', solution: 'Erstatt $\\cos^2 x = 1 - \\sin^2 x$: $2 - 2\\sin^2 x + 3\\sin x = 3$ gir $2\\sin^2 x - 3\\sin x + 1 = 0$. $(2\\sin x - 1)(\\sin x - 1) = 0$. Losninger: $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$.' },
          { label: 'b', task: '$\\sin^2 x - \\cos^2 x = \\frac{1}{2}$', solution: 'Bruker $\\cos^2 x = 1 - \\sin^2 x$: $2\\sin^2 x - 1 = \\frac{1}{2}$, $\\sin^2 x = \\frac{3}{4}$, $\\sin x = \\pm \\frac{\\sqrt{3}}{2}$. Losninger: $x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$.' },
        ],
        hints: ['Erstatt $\\cos^2 x$ med $1 - \\sin^2 x$ for a fa en likning i $\\sin x$ alene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r1-7-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oppgi den generelle losningen.',
        subTasks: [
          { label: 'a', task: '$\\sin x = 0$', solution: '$x = n\\pi, \\quad n \\in \\mathbb{Z}$' },
          { label: 'b', task: '$\\cos x = -1$', solution: '$x = \\pi + 2n\\pi, \\quad n \\in \\mathbb{Z}$' },
          { label: 'c', task: '$\\tan x = -\\sqrt{3}$', solution: '$x = -\\frac{\\pi}{3} + n\\pi = \\frac{2\\pi}{3} + n\\pi, \\quad n \\in \\mathbb{Z}$' },
        ],
        hints: ['Generell losning betyr alle losninger, med $n \\in \\mathbb{Z}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r1-7-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn antall losninger av likningen pa det gitte intervallet.',
        subTasks: [
          { label: 'a', task: '$\\sin(2x) = \\frac{1}{2}$ pa $[0, 2\\pi)$', solution: '$2x = \\frac{\\pi}{6} + 2n\\pi$ eller $2x = \\frac{5\\pi}{6} + 2n\\pi$. Fire losninger: $x = \\frac{\\pi}{12}, \\frac{5\\pi}{12}, \\frac{13\\pi}{12}, \\frac{17\\pi}{12}$.' },
          { label: 'b', task: '$\\cos(3x) = 0$ pa $[0, \\pi]$', solution: '$3x = \\frac{\\pi}{2} + n\\pi$, sa $x = \\frac{\\pi}{6} + \\frac{n\\pi}{3}$. Tre losninger: $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}$.' },
        ],
        hints: ['Med $bx$ i argumentet far du $b$ ganger sa mange losninger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r1-7-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los likningen $\\sin x + \\cos x = 1$ for $x \\in [0, 2\\pi)$.',
        solution: `Kvadrer begge sider: $(\\sin x + \\cos x)^2 = 1$
$\\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = 1$
$1 + 2\\sin x \\cos x = 1$
$\\sin x \\cos x = 0$

Sa $\\sin x = 0$ eller $\\cos x = 0$.

$\\sin x = 0 \\Rightarrow x = 0$ eller $x = \\pi$. Sjekk: $\\sin 0 + \\cos 0 = 1$ ✓. $\\sin \\pi + \\cos \\pi = -1$ ✗.

$\\cos x = 0 \\Rightarrow x = \\frac{\\pi}{2}$ eller $x = \\frac{3\\pi}{2}$. Sjekk: $\\sin \\frac{\\pi}{2} + \\cos \\frac{\\pi}{2} = 1$ ✓. $\\sin \\frac{3\\pi}{2} + \\cos \\frac{3\\pi}{2} = -1$ ✗.

Svar: $x = 0$ og $x = \\frac{\\pi}{2}$.

(Vi ma sjekke losningene fordi kvadrering kan gi falske losninger.)`,
        hints: ['Kvadrer begge sider og bruk $\\sin^2 x + \\cos^2 x = 1$', 'Husk a sjekke alle losninger i den opprinnelige likningen!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r1-7-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los likningen $2\\sin x \\cos x = \\sin x$ for $x \\in [0, 2\\pi)$.',
        solution: `$2\\sin x \\cos x - \\sin x = 0$
$\\sin x(2\\cos x - 1) = 0$

$\\sin x = 0 \\Rightarrow x = 0, \\pi$

$\\cos x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$

Svar: $x = 0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$.`,
        hints: ['Ikke del pa $\\sin x$ -- da mister du losninger! Flytt alt til en side og faktoriser.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Advarsel
    {
      id: 'r1-7-3-warning-del',
      type: 'warning',
      title: 'Ikke del pa trigonometriske uttrykk!',
      content: `Hvis du har $\\sin x \\cdot (\\text{noe}) = 0$, **ikke del pa $\\sin x$**. Da mister du losningene der $\\sin x = 0$. Flytt alt til en side og faktoriser i stedet.`,
    },

    // Oppgave 12-18
    {
      id: 'r1-7-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningene. Oppgi den generelle losningen.',
        subTasks: [
          { label: 'a', task: '$2\\sin x = \\sqrt{3}$', solution: '$\\sin x = \\frac{\\sqrt{3}}{2}$. Generell losning: $x = \\frac{\\pi}{3} + 2n\\pi$ eller $x = \\frac{2\\pi}{3} + 2n\\pi$.' },
          { label: 'b', task: '$4\\cos x + 2 = 0$', solution: '$\\cos x = -\\frac{1}{2}$. Generell losning: $x = \\pm \\frac{2\\pi}{3} + 2n\\pi$.' },
        ],
        hints: ['Isoler den trigonometriske funksjonen forst'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-3-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los likningen $\\sin(2x) = \\cos x$ for $x \\in [0, 2\\pi)$.',
        solution: `Bruker $\\sin(2x) = 2\\sin x \\cos x$:
$2\\sin x \\cos x = \\cos x$
$2\\sin x \\cos x - \\cos x = 0$
$\\cos x(2\\sin x - 1) = 0$

$\\cos x = 0 \\Rightarrow x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$

$\\sin x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$

Svar: $x = \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}, \\frac{3\\pi}{2}$.`,
        hints: ['Bruk $\\sin(2x) = 2\\sin x \\cos x$', 'Faktoriser -- ikke del pa $\\cos x$!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-3-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los $\\sin\\left(x + \\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$ for $x \\in [0, 2\\pi)$.',
        solution: `$x + \\frac{\\pi}{6} = \\frac{\\pi}{3} + 2n\\pi$ eller $x + \\frac{\\pi}{6} = \\frac{2\\pi}{3} + 2n\\pi$

Gren 1: $x = \\frac{\\pi}{3} - \\frac{\\pi}{6} = \\frac{\\pi}{6}$

Gren 2: $x = \\frac{2\\pi}{3} - \\frac{\\pi}{6} = \\frac{\\pi}{2}$

Svar: $x = \\frac{\\pi}{6}$ og $x = \\frac{\\pi}{2}$.`,
        hints: ['Sett $u = x + \\frac{\\pi}{6}$ og los $\\sin u = \\frac{\\sqrt{3}}{2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-3-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los $\\cos^2 x - 3\\cos x + 2 = 0$ for $x \\in [0, 2\\pi)$.',
        solution: `Sett $t = \\cos x$: $t^2 - 3t + 2 = 0$, $(t-1)(t-2) = 0$.

$t = 1$ eller $t = 2$.

$\\cos x = 1 \\Rightarrow x = 0$.

$\\cos x = 2$: Ingen losning (cosinus er mellom $-1$ og $1$).

Svar: $x = 0$.`,
        hints: ['Sett $t = \\cos x$ og los andregradslikningen', 'Husk at $-1 \\leq \\cos x \\leq 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-3-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los $\\sin(2x + \\frac{\\pi}{4}) = -\\frac{\\sqrt{2}}{2}$ for $x \\in [0, \\pi]$.',
        solution: `Sett $u = 2x + \\frac{\\pi}{4}$. Nar $x \\in [0, \\pi]$: $u \\in [\\frac{\\pi}{4}, \\frac{9\\pi}{4}]$.

$\\sin u = -\\frac{\\sqrt{2}}{2}$ gir $u = \\frac{5\\pi}{4}$ eller $u = \\frac{7\\pi}{4}$ (innenfor intervallet).

$2x + \\frac{\\pi}{4} = \\frac{5\\pi}{4} \\Rightarrow x = \\frac{\\pi}{2}$

$2x + \\frac{\\pi}{4} = \\frac{7\\pi}{4} \\Rightarrow x = \\frac{3\\pi}{4}$

Svar: $x = \\frac{\\pi}{2}$ og $x = \\frac{3\\pi}{4}$.`,
        hints: ['Finn intervallet for $u$ nar $x \\in [0, \\pi]$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-3-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-17',
        number: '17',
        type: 'interactive',
        difficulty: 'medium',
        tool: 'geogebra-graph',
        task: 'Bruk GeoGebra til a verifisere losningene dine av $2\\cos^2 x - \\cos x - 1 = 0$ fra eksempel 5. Tegn $f(x) = 2\\cos^2(x) - \\cos(x) - 1$ og finn nullpunktene.',
        solution: 'Grafen krysser $x$-aksen i $x = 0$, $x = \\frac{2\\pi}{3}$ og $x = \\frac{4\\pi}{3}$ pa intervallet $[0, 2\\pi)$.',
        hints: ['Skriv inn 2cos(x)^2 - cos(x) - 1 i GeoGebra'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: 'r1-7-3-ex-block-18',
      type: 'exercise',
      exercise: {
        id: 'r1-7-3-ex-18',
        number: '18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En ball kastes opp med startfart $v_0 = 20$ m/s i en vinkel $\\theta$ med horisontalen. Rekkevidden er gitt ved $R = \\frac{v_0^2 \\sin(2\\theta)}{g}$ der $g = 9{,}81$ m/s². Finn vinkelen(e) som gir rekkevidde $R = 35$ m.',
        solution: `$35 = \\frac{20^2 \\sin(2\\theta)}{9{,}81} = \\frac{400 \\sin(2\\theta)}{9{,}81}$

$\\sin(2\\theta) = \\frac{35 \\cdot 9{,}81}{400} = \\frac{343{,}35}{400} = 0{,}858$

$2\\theta = \\arcsin(0{,}858) \\approx 59{,}1°$ eller $2\\theta \\approx 120{,}9°$

$\\theta \\approx 29{,}6°$ eller $\\theta \\approx 60{,}4°$

To vinkler gir samme rekkevidde (en flat og en bratt bane).`,
        hints: ['Isoler $\\sin(2\\theta)$', 'Husk at $\\sin u = k$ har to losninger for $u \\in (0°, 180°)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Losningsformler:**
- $\\sin x = k$: $x = v + 2n\\pi$ eller $x = (\\pi - v) + 2n\\pi$
- $\\cos x = k$: $x = \\pm v + 2n\\pi$
- $\\tan x = k$: $x = v + n\\pi$

**Sammensatte argumenter:** Sett $u = bx + c$, los for $u$, deretter for $x$.

**Omskriving:** Bruk $\\sin^2 x + \\cos^2 x = 1$ og faktorisering.

**Aldri del pa** $\\sin x$ eller $\\cos x$ -- faktoriser i stedet!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Trigonometriske identiteter
// ============================================================================

export const CHAPTER_R1_7_4: TextbookChapter = {
  id: 'r1-7-4',
  courseId: 'r1',
  chapterNumber: '7.4',
  title: 'Trigonometriske identiteter',
  description: 'Lær om de viktigste trigonometriske identitetene: addisjonsformler, dobbeltvinkelformler og bevisfoering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne og anvende addisjonsformlene for sinus og cosinus',
    'utlede og bruke formlene for dobbelt vinkel',
    'bevise trigonometriske identiteter',
    'forenkle trigonometriske uttrykk ved hjelp av identiteter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-7-4-intro',
      type: 'text',
      content: `## Trigonometriske identiteter

En **identitet** er en likning som er sann for alle verdier av variablene (der uttrykkene er definert). Vi har allerede sett den pytagoreiske identiteten $\\sin^2 x + \\cos^2 x = 1$. Na skal vi utvide verktøykassen med kraftige addisjonsformler og doble vinkelformler.`,
    },

    // ========== GRUNNLEGGENDE IDENTITETER ==========
    {
      id: 'r1-7-4-grunnleggende',
      type: 'theorem',
      title: 'Grunnleggende identiteter',
      content: `**Pytagoreisk identitet:**
$$\\sin^2 x + \\cos^2 x = 1$$

**Tangensdefinisjon:**
$$\\tan x = \\frac{\\sin x}{\\cos x}$$

**Symmetriegenskaper:**
$$\\sin(-x) = -\\sin x \\quad \\text{(odde funksjon)}$$
$$\\cos(-x) = \\cos x \\quad \\text{(partall-funksjon)}$$
$$\\tan(-x) = -\\tan x \\quad \\text{(odde funksjon)}$$`,
    },

    // ========== ADDISJONSFORMLER ==========
    {
      id: 'r1-7-4-addisjon-intro',
      type: 'text',
      content: `## Addisjonsformlene

Addisjonsformlene forteller oss hvordan vi kan finne sinus og cosinus av en sum eller differanse av to vinkler. Disse formlene er blant de viktigste verktøyene i trigonometrien.`,
    },

    // Teorem: Addisjonsformler
    {
      id: 'r1-7-4-theorem-addisjon',
      type: 'theorem',
      title: 'Addisjonsformlene',
      content: `For alle vinkler $u$ og $v$ gjelder:

**Sinus:**
$$\\sin(u + v) = \\sin u \\cos v + \\cos u \\sin v$$
$$\\sin(u - v) = \\sin u \\cos v - \\cos u \\sin v$$

**Cosinus:**
$$\\cos(u + v) = \\cos u \\cos v - \\sin u \\sin v$$
$$\\cos(u - v) = \\cos u \\cos v + \\sin u \\sin v$$

**Tangens:**
$$\\tan(u + v) = \\frac{\\tan u + \\tan v}{1 - \\tan u \\tan v}$$`,
    },

    // Tips for a huske
    {
      id: 'r1-7-4-tip-addisjon',
      type: 'tip',
      content: `**Husketriks for addisjonsformlene:**

- **Sinus** av sum: «sin-cos-cos-sin» med **likt** fortegn
- **Cosinus** av sum: «cos-cos-sin-sin» med **motsatt** fortegn
- Tegnet i sinus-formelen folger tegnet i argumentet ($+$ gir $+$)
- Tegnet i cosinus-formelen er **motsatt** av argumentet ($+$ gir $-$)`,
    },

    // Eksempel: Eksakt verdi med addisjonsformel
    {
      id: 'r1-7-4-example-eksakt',
      type: 'example',
      title: 'Eksempel 1: Eksakt verdi med addisjonsformel',
      problem: `Finn den eksakte verdien av $\\sin 75°$.`,
      solution: `**Losning:**

Vi skriver $75° = 45° + 30°$ og bruker addisjonsformelen:

$$\\sin 75° = \\sin(45° + 30°)$$
$$= \\sin 45° \\cos 30° + \\cos 45° \\sin 30°$$
$$= \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2}$$
$$= \\frac{\\sqrt{6}}{4} + \\frac{\\sqrt{2}}{4}$$
$$= \\frac{\\sqrt{6} + \\sqrt{2}}{4}$$`,
    },

    // Oppgave 1
    {
      id: 'r1-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk addisjonsformlene til a finne eksakte verdier.',
        subTasks: [
          { label: 'a', task: '$\\cos 75°$', solution: '$\\cos(45° + 30°) = \\cos 45° \\cos 30° - \\sin 45° \\sin 30° = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$' },
          { label: 'b', task: '$\\sin 15°$', solution: '$\\sin(45° - 30°) = \\sin 45° \\cos 30° - \\cos 45° \\sin 30° = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$' },
          { label: 'c', task: '$\\cos 15°$', solution: '$\\cos(45° - 30°) = \\cos 45° \\cos 30° + \\sin 45° \\sin 30° = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$' },
          { label: 'd', task: '$\\tan 75°$', solution: '$\\frac{\\sin 75°}{\\cos 75°} = \\frac{\\sqrt{6}+\\sqrt{2}}{\\sqrt{6}-\\sqrt{2}} = 2 + \\sqrt{3}$' },
        ],
        hints: ['Skriv vinkelen som en sum eller differanse av $30°$, $45°$ og $60°$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel: Beregning med ukjente vinkler
    {
      id: 'r1-7-4-example-ukjent',
      type: 'example',
      title: 'Eksempel 2: Addisjonsformler med ukjente verdier',
      problem: `Gitt at $\\sin u = \\frac{3}{5}$ ($u$ i forste kvadrant) og $\\cos v = -\\frac{5}{13}$ ($v$ i andre kvadrant). Finn $\\sin(u + v)$.`,
      solution: `**Losning:**

**Steg 1: Finn manglende verdier.**

Fra $\\sin u = \\frac{3}{5}$ og $u$ i forste kvadrant:
$\\cos u = \\sqrt{1 - \\sin^2 u} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$

Fra $\\cos v = -\\frac{5}{13}$ og $v$ i andre kvadrant:
$\\sin v = \\sqrt{1 - \\cos^2 v} = \\sqrt{1 - \\frac{25}{169}} = \\frac{12}{13}$

**Steg 2: Bruk addisjonsformelen.**

$$\\sin(u + v) = \\sin u \\cos v + \\cos u \\sin v$$
$$= \\frac{3}{5} \\cdot \\left(-\\frac{5}{13}\\right) + \\frac{4}{5} \\cdot \\frac{12}{13}$$
$$= -\\frac{15}{65} + \\frac{48}{65} = \\frac{33}{65}$$`,
    },

    // Oppgave 2
    {
      id: 'r1-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gitt at $\\sin u = \\frac{4}{5}$ (forste kvadrant) og $\\sin v = \\frac{5}{13}$ (forste kvadrant). Finn:',
        subTasks: [
          { label: 'a', task: '$\\sin(u + v)$', solution: '$\\cos u = \\frac{3}{5}$, $\\cos v = \\frac{12}{13}$. $\\sin(u+v) = \\frac{4}{5} \\cdot \\frac{12}{13} + \\frac{3}{5} \\cdot \\frac{5}{13} = \\frac{48}{65} + \\frac{15}{65} = \\frac{63}{65}$.' },
          { label: 'b', task: '$\\cos(u - v)$', solution: '$\\cos(u-v) = \\cos u \\cos v + \\sin u \\sin v = \\frac{3}{5} \\cdot \\frac{12}{13} + \\frac{4}{5} \\cdot \\frac{5}{13} = \\frac{36}{65} + \\frac{20}{65} = \\frac{56}{65}$.' },
          { label: 'c', task: '$\\sin(u - v)$', solution: '$\\sin(u-v) = \\frac{4}{5} \\cdot \\frac{12}{13} - \\frac{3}{5} \\cdot \\frac{5}{13} = \\frac{48}{65} - \\frac{15}{65} = \\frac{33}{65}$.' },
        ],
        hints: ['Finn forst $\\cos u$ og $\\cos v$ ved hjelp av $\\sin^2 + \\cos^2 = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DOBLE VINKLER ==========
    {
      id: 'r1-7-4-dobbel-intro',
      type: 'text',
      content: `## Formler for dobbelt vinkel

Ved a sette $u = v$ i addisjonsformlene far vi formler for dobbelt vinkel. Disse er svart nyttige i mange sammenhenger.`,
    },

    // Teorem: Doble vinkler
    {
      id: 'r1-7-4-theorem-dobbel',
      type: 'theorem',
      title: 'Formlene for dobbelt vinkel',
      content: `**Sinus:**
$$\\sin 2x = 2 \\sin x \\cos x$$

**Cosinus** (tre ekvivalente former):
$$\\cos 2x = \\cos^2 x - \\sin^2 x$$
$$\\cos 2x = 2\\cos^2 x - 1$$
$$\\cos 2x = 1 - 2\\sin^2 x$$

**Tangens:**
$$\\tan 2x = \\frac{2\\tan x}{1 - \\tan^2 x}$$`,
    },

    // Bevis
    {
      id: 'r1-7-4-proof-dobbel',
      type: 'proof',
      title: 'Utledning av $\\sin 2x$',
      content: `Vi setter $u = v = x$ i addisjonsformelen for sinus:

$$\\sin(x + x) = \\sin x \\cos x + \\cos x \\sin x = 2\\sin x \\cos x$$

Tilsvarende for cosinus:

$$\\cos(x + x) = \\cos x \\cos x - \\sin x \\sin x = \\cos^2 x - \\sin^2 x$$

De to andre formene for $\\cos 2x$ fas ved a erstatte $\\sin^2 x = 1 - \\cos^2 x$ eller $\\cos^2 x = 1 - \\sin^2 x$.`,
    },

    // Eksempel: Dobbelt vinkel
    {
      id: 'r1-7-4-example-dobbel',
      type: 'example',
      title: 'Eksempel 3: Bruk av dobbeltvinkelformlene',
      problem: `Gitt at $\\cos x = \\frac{3}{5}$ og $x \\in (0, \\frac{\\pi}{2})$. Finn $\\sin 2x$ og $\\cos 2x$.`,
      solution: `**Losning:**

Forst finner vi $\\sin x$. Siden $x$ er i forste kvadrant:
$$\\sin x = \\sqrt{1 - \\cos^2 x} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5}$$

Na bruker vi dobbeltvinkelformlene:

$$\\sin 2x = 2\\sin x \\cos x = 2 \\cdot \\frac{4}{5} \\cdot \\frac{3}{5} = \\frac{24}{25}$$

$$\\cos 2x = \\cos^2 x - \\sin^2 x = \\frac{9}{25} - \\frac{16}{25} = -\\frac{7}{25}$$

(Merk: $\\cos 2x < 0$ fordi $2x > \\frac{\\pi}{2}$ nar $\\cos x = \\frac{3}{5}$.)`,
    },

    // Oppgave 3
    {
      id: 'r1-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk dobbeltvinkelformlene.',
        subTasks: [
          { label: 'a', task: 'Gitt $\\sin x = \\frac{5}{13}$, $x$ i forste kvadrant. Finn $\\sin 2x$.', solution: '$\\cos x = \\frac{12}{13}$. $\\sin 2x = 2 \\cdot \\frac{5}{13} \\cdot \\frac{12}{13} = \\frac{120}{169}$.' },
          { label: 'b', task: 'Gitt $\\cos x = -\\frac{1}{3}$, $x$ i andre kvadrant. Finn $\\cos 2x$.', solution: '$\\cos 2x = 2\\cos^2 x - 1 = 2 \\cdot \\frac{1}{9} - 1 = -\\frac{7}{9}$.' },
          { label: 'c', task: 'Finn den eksakte verdien av $2\\sin \\frac{\\pi}{8} \\cos \\frac{\\pi}{8}$.', solution: '$2\\sin\\frac{\\pi}{8}\\cos\\frac{\\pi}{8} = \\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$.' },
        ],
        hints: ['$\\sin 2x = 2\\sin x \\cos x$', '$\\cos 2x = 2\\cos^2 x - 1$ er nyttig nar du kjenner $\\cos x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r1-7-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forenkle uttrykkene ved hjelp av dobbeltvinkelformler.',
        subTasks: [
          { label: 'a', task: '$2\\sin 3x \\cos 3x$', solution: '$= \\sin(2 \\cdot 3x) = \\sin 6x$' },
          { label: 'b', task: '$\\cos^2 4x - \\sin^2 4x$', solution: '$= \\cos(2 \\cdot 4x) = \\cos 8x$' },
          { label: 'c', task: '$1 - 2\\sin^2 \\frac{x}{2}$', solution: '$= \\cos(2 \\cdot \\frac{x}{2}) = \\cos x$' },
        ],
        hints: ['$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$', '$\\cos 2\\alpha = \\cos^2\\alpha - \\sin^2\\alpha = 1 - 2\\sin^2\\alpha$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BEVISFOERING ==========
    {
      id: 'r1-7-4-bevis-intro',
      type: 'text',
      content: `## Bevisfoering med identiteter

A bevise en identitet betyr a vise at venstre og hoyre side av likningen er like for alle (tillatte) verdier av variabelen. Vanlige strategier:

1. **Start med den mest kompliserte siden** og forenkle
2. **Skriv alt med sinus og cosinus**
3. **Bruk kjente identiteter** ($\\sin^2 x + \\cos^2 x = 1$, addisjonsformler, osv.)
4. **Fellesnevner** nar det er broker involvert`,
    },

    // Eksempel: Bevis
    {
      id: 'r1-7-4-example-bevis',
      type: 'example',
      title: 'Eksempel 4: Bevis av en identitet',
      problem: `Vis at $\\frac{\\sin 2x}{1 + \\cos 2x} = \\tan x$.`,
      solution: `**Bevis:**

Vi starter med venstre side og bruker dobbeltvinkelformler:

$$\\frac{\\sin 2x}{1 + \\cos 2x} = \\frac{2\\sin x \\cos x}{1 + (2\\cos^2 x - 1)}$$

$$= \\frac{2\\sin x \\cos x}{2\\cos^2 x}$$

$$= \\frac{\\sin x}{\\cos x}$$

$$= \\tan x \\quad \\square$$`,
    },

    // Oppgave 5
    {
      id: 'r1-7-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vis at identitetene stemmer.',
        subTasks: [
          { label: 'a', task: '$\\frac{1 - \\cos 2x}{\\sin 2x} = \\tan x$', solution: '$\\frac{1 - (1 - 2\\sin^2 x)}{2\\sin x \\cos x} = \\frac{2\\sin^2 x}{2\\sin x \\cos x} = \\frac{\\sin x}{\\cos x} = \\tan x$' },
          { label: 'b', task: '$\\sin 2x = \\frac{2\\tan x}{1 + \\tan^2 x}$', solution: 'HS: $\\frac{2 \\cdot \\frac{\\sin x}{\\cos x}}{1 + \\frac{\\sin^2 x}{\\cos^2 x}} = \\frac{\\frac{2\\sin x}{\\cos x}}{\\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}} = \\frac{2\\sin x}{\\cos x} \\cdot \\frac{\\cos^2 x}{1} = 2\\sin x \\cos x = \\sin 2x$' },
        ],
        hints: ['Bruk $\\sin 2x = 2\\sin x\\cos x$ og $\\cos 2x = 1 - 2\\sin^2 x$', 'Skriv $\\tan x = \\frac{\\sin x}{\\cos x}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r1-7-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk addisjonsformlene til a forenkle.',
        subTasks: [
          { label: 'a', task: '$\\sin(x + \\pi)$', solution: '$\\sin x \\cos \\pi + \\cos x \\sin \\pi = -\\sin x$' },
          { label: 'b', task: '$\\cos(x - \\frac{\\pi}{2})$', solution: '$\\cos x \\cos \\frac{\\pi}{2} + \\sin x \\sin \\frac{\\pi}{2} = \\sin x$' },
          { label: 'c', task: '$\\sin(\\frac{\\pi}{2} - x)$', solution: '$\\sin \\frac{\\pi}{2} \\cos x - \\cos \\frac{\\pi}{2} \\sin x = \\cos x$' },
        ],
        hints: ['Sett inn verdiene for $\\sin \\pi$, $\\cos \\pi$, osv.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-7-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv uttrykket som et enkelt trigonometrisk uttrykk.',
        subTasks: [
          { label: 'a', task: '$\\sin 3x \\cos x - \\cos 3x \\sin x$', solution: '$= \\sin(3x - x) = \\sin 2x$' },
          { label: 'b', task: '$\\cos 2x \\cos x + \\sin 2x \\sin x$', solution: '$= \\cos(2x - x) = \\cos x$' },
          { label: 'c', task: '$\\sin 5x \\cos 3x + \\cos 5x \\sin 3x$', solution: '$= \\sin(5x + 3x) = \\sin 8x$' },
        ],
        hints: ['Gjenkjenn addisjonsformlene «baklengs»'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r1-7-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle uttrykket $\\cos^2 x - \\sin^2 x + 2\\sin x \\cos x$.',
        solution: '$\\cos 2x + \\sin 2x$. Dette kan ogsa skrives som $\\sqrt{2}\\sin(2x + \\frac{\\pi}{4})$.',
        hints: ['Gjenkjenn $\\cos^2 x - \\sin^2 x = \\cos 2x$ og $2\\sin x \\cos x = \\sin 2x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r1-7-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis identitetene.',
        subTasks: [
          { label: 'a', task: '$\\cos 3x = 4\\cos^3 x - 3\\cos x$', solution: '$\\cos 3x = \\cos(2x + x) = \\cos 2x \\cos x - \\sin 2x \\sin x = (2\\cos^2 x - 1)\\cos x - 2\\sin x \\cos x \\cdot \\sin x = 2\\cos^3 x - \\cos x - 2\\sin^2 x \\cos x = 2\\cos^3 x - \\cos x - 2(1-\\cos^2 x)\\cos x = 4\\cos^3 x - 3\\cos x$' },
          { label: 'b', task: '$\\sin 3x = 3\\sin x - 4\\sin^3 x$', solution: '$\\sin 3x = \\sin(2x+x) = \\sin 2x \\cos x + \\cos 2x \\sin x = 2\\sin x \\cos^2 x + (1-2\\sin^2 x)\\sin x = 2\\sin x(1-\\sin^2 x) + \\sin x - 2\\sin^3 x = 3\\sin x - 4\\sin^3 x$' },
        ],
        hints: ['Skriv $\\cos 3x = \\cos(2x + x)$ og bruk addisjonsformelen', 'Bruk dobbeltvinkelformler for $\\sin 2x$ og $\\cos 2x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r1-7-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut den eksakte verdien.',
        subTasks: [
          { label: 'a', task: '$\\sin \\frac{\\pi}{12}$ (hint: $\\frac{\\pi}{12} = \\frac{\\pi}{3} - \\frac{\\pi}{4}$)', solution: '$\\sin(\\frac{\\pi}{3} - \\frac{\\pi}{4}) = \\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{2}}{2} - \\frac{1}{2} \\cdot \\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$' },
          { label: 'b', task: '$\\cos \\frac{5\\pi}{12}$ (hint: $\\frac{5\\pi}{12} = \\frac{\\pi}{4} + \\frac{\\pi}{6}$)', solution: '$\\cos(\\frac{\\pi}{4} + \\frac{\\pi}{6}) = \\frac{\\sqrt{2}}{2} \\cdot \\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2} \\cdot \\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$' },
        ],
        hints: ['Skriv vinkelen som sum/differanse av standardvinkler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r1-7-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los likningen $\\sin 2x = \\sin x$ for $x \\in [0, 2\\pi)$ ved hjelp av dobbeltvinkelformelen.',
        solution: `$2\\sin x \\cos x = \\sin x$
$2\\sin x \\cos x - \\sin x = 0$
$\\sin x(2\\cos x - 1) = 0$

$\\sin x = 0 \\Rightarrow x = 0, \\pi$

$\\cos x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}$

Svar: $x = 0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}$.`,
        hints: ['Bruk $\\sin 2x = 2\\sin x \\cos x$', 'Faktoriser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r1-7-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vis at $\\cos 4x = 8\\cos^4 x - 8\\cos^2 x + 1$.',
        solution: `$\\cos 4x = \\cos(2 \\cdot 2x) = 2\\cos^2(2x) - 1$

$= 2(2\\cos^2 x - 1)^2 - 1$

$= 2(4\\cos^4 x - 4\\cos^2 x + 1) - 1$

$= 8\\cos^4 x - 8\\cos^2 x + 2 - 1$

$= 8\\cos^4 x - 8\\cos^2 x + 1 \\quad \\square$`,
        hints: ['Bruk dobbeltvinkelformelen to ganger: $\\cos 4x = \\cos(2 \\cdot 2x)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r1-7-4-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at $\\frac{\\sin(u+v)}{\\sin(u-v)} = \\frac{\\tan u + \\tan v}{\\tan u - \\tan v}$.',
        solution: `HS: $\\frac{\\frac{\\sin u}{\\cos u} + \\frac{\\sin v}{\\cos v}}{\\frac{\\sin u}{\\cos u} - \\frac{\\sin v}{\\cos v}} = \\frac{\\frac{\\sin u \\cos v + \\cos u \\sin v}{\\cos u \\cos v}}{\\frac{\\sin u \\cos v - \\cos u \\sin v}{\\cos u \\cos v}} = \\frac{\\sin u \\cos v + \\cos u \\sin v}{\\sin u \\cos v - \\cos u \\sin v} = \\frac{\\sin(u+v)}{\\sin(u-v)}$ = VS $\\square$`,
        hints: ['Start med hoyre side og skriv $\\tan$ som $\\frac{\\sin}{\\cos}$', 'Fa fellesnevner og forenkle'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r1-7-4-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle $(\\sin x + \\cos x)^2$ og $(\\sin x - \\cos x)^2$.',
        subTasks: [
          { label: 'a', task: '$(\\sin x + \\cos x)^2$', solution: '$\\sin^2 x + 2\\sin x\\cos x + \\cos^2 x = 1 + \\sin 2x$' },
          { label: 'b', task: '$(\\sin x - \\cos x)^2$', solution: '$\\sin^2 x - 2\\sin x\\cos x + \\cos^2 x = 1 - \\sin 2x$' },
        ],
        hints: ['Bruk $\\sin^2 x + \\cos^2 x = 1$ og $2\\sin x\\cos x = \\sin 2x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15
    {
      id: 'r1-7-4-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gitt at $\\tan x = t$. Uttrykk folgende med $t$:',
        subTasks: [
          { label: 'a', task: '$\\sin 2x$', solution: '$\\sin 2x = \\frac{2t}{1 + t^2}$' },
          { label: 'b', task: '$\\cos 2x$', solution: '$\\cos 2x = \\frac{1 - t^2}{1 + t^2}$' },
          { label: 'c', task: '$\\sin^2 x$', solution: '$\\sin^2 x = \\frac{t^2}{1 + t^2}$' },
        ],
        hints: ['Bruk at $\\sin x = \\frac{t}{\\sqrt{1+t^2}}$ og $\\cos x = \\frac{1}{\\sqrt{1+t^2}}$ (i forste kvadrant)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 16
    {
      id: 'r1-7-4-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r1-7-4-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at $\\sin^4 x + \\cos^4 x = \\frac{3 + \\cos 4x}{4}$.',
        solution: `VS: $\\sin^4 x + \\cos^4 x = (\\sin^2 x + \\cos^2 x)^2 - 2\\sin^2 x \\cos^2 x$

$= 1 - 2\\sin^2 x \\cos^2 x = 1 - \\frac{1}{2}(2\\sin x \\cos x)^2 = 1 - \\frac{1}{2}\\sin^2 2x$

$= 1 - \\frac{1}{2} \\cdot \\frac{1 - \\cos 4x}{2} = 1 - \\frac{1-\\cos 4x}{4} = \\frac{4 - 1 + \\cos 4x}{4} = \\frac{3 + \\cos 4x}{4} \\quad \\square$`,
        hints: ['Bruk $(a+b)^2 = a^2 + 2ab + b^2$ med $a = \\sin^2 x$, $b = \\cos^2 x$', 'Bruk $\\sin^2 2x = \\frac{1 - \\cos 4x}{2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Addisjonsformler:**
- $\\sin(u \\pm v) = \\sin u \\cos v \\pm \\cos u \\sin v$
- $\\cos(u \\pm v) = \\cos u \\cos v \\mp \\sin u \\sin v$

**Dobbelt vinkel:**
- $\\sin 2x = 2\\sin x \\cos x$
- $\\cos 2x = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x$

**Bevisstrategi:** Start med den mest kompliserte siden, skriv alt med $\\sin$ og $\\cos$, bruk kjente identiteter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.5: Derivasjon av trigonometriske funksjoner
// ============================================================================

export const CHAPTER_R1_7_5: TextbookChapter = {
  id: 'r1-7-5',
  courseId: 'r1',
  chapterNumber: '7.5',
  title: 'Derivasjon av trigonometriske funksjoner',
  description: 'Lær a derivere sinus, cosinus og tangens, bruke kjerneregelen, og drofte trigonometriske funksjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'derivere sinus, cosinus og tangens',
    'bruke kjerneregelen pa trigonometriske funksjoner',
    'drofte trigonometriske funksjoner med derivasjon',
    'finne ekstremalpunkter og vendepunkter for trigonometriske funksjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-7-5-intro',
      type: 'text',
      content: `## Derivasjon av trigonometriske funksjoner

Na som vi kjenner de trigonometriske funksjonene godt, skal vi lære a derivere dem. Derivasjonsreglene for sinus og cosinus er elegante og nart knyttet til hverandre.

**Viktig:** Derivasjonsreglene gjelder bare nar vinkelen er malt i **radianer**. Dette er hovedgrunnen til at vi bruker radianer i matematikken.`,
    },

    // ========== DERIVASJON AV SIN OG COS ==========
    {
      id: 'r1-7-5-def-derivasjon',
      type: 'theorem',
      title: 'Derivasjon av sinus og cosinus',
      content: `$$(\\sin x)' = \\cos x$$

$$(\\cos x)' = -\\sin x$$

Merk det negative fortegnet i den deriverte av cosinus!`,
    },

    // Note om intuisjon
    {
      id: 'r1-7-5-note-intuisjon',
      type: 'note',
      title: 'Intuitiv forstaelse',
      content: `Tenk pa grafen til $\\sin x$:
- I $x = 0$ stiger grafen bratt oppover, sa $f'(0) > 0$. Og $\\cos 0 = 1$ ✓
- I $x = \\frac{\\pi}{2}$ er grafen pa toppunktet (horisontal tangent), sa $f'(\\frac{\\pi}{2}) = 0$. Og $\\cos \\frac{\\pi}{2} = 0$ ✓
- I $x = \\pi$ synker grafen bratt, sa $f'(\\pi) < 0$. Og $\\cos \\pi = -1$ ✓`,
    },

    // Derivasjon av tangens
    {
      id: 'r1-7-5-theorem-tan',
      type: 'theorem',
      title: 'Derivasjon av tangens',
      content: `$$(\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$$

**Utledning:** Vi bruker kvotientregelen pa $\\tan x = \\frac{\\sin x}{\\cos x}$:

$$(\\tan x)' = \\frac{\\cos x \\cdot \\cos x - \\sin x \\cdot (-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x}$$`,
    },

    // Samletabell
    {
      id: 'r1-7-5-formel-tabell',
      type: 'definition',
      title: 'Oppsummering av derivasjonsregler',
      content: `| $f(x)$ | $f'(x)$ |
|---------|---------|
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\frac{1}{\\cos^2 x}$ |`,
    },

    // Eksempel: Enkel derivasjon
    {
      id: 'r1-7-5-example-enkel',
      type: 'example',
      title: 'Eksempel 1: Enkel derivasjon',
      problem: `Deriver funksjonene:
a) $f(x) = 3\\sin x$
b) $g(x) = x^2 + \\cos x$
c) $h(x) = \\sin x \\cdot \\cos x$`,
      solution: `**Losning:**

a) $f'(x) = 3\\cos x$

b) $g'(x) = 2x - \\sin x$

c) Vi bruker produktregelen:
$h'(x) = \\cos x \\cdot \\cos x + \\sin x \\cdot (-\\sin x) = \\cos^2 x - \\sin^2 x = \\cos 2x$

(Alternativt: $h(x) = \\frac{1}{2}\\sin 2x$, sa $h'(x) = \\frac{1}{2} \\cdot 2\\cos 2x = \\cos 2x$.)`,
    },

    // Oppgave 1
    {
      id: 'r1-7-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = 5\\sin x$', solution: '$f\'(x) = 5\\cos x$' },
          { label: 'b', task: '$g(x) = -2\\cos x$', solution: '$g\'(x) = 2\\sin x$' },
          { label: 'c', task: '$h(x) = x + \\sin x$', solution: '$h\'(x) = 1 + \\cos x$' },
          { label: 'd', task: '$p(x) = 3x^2 - 4\\cos x + 1$', solution: '$p\'(x) = 6x + 4\\sin x$' },
        ],
        hints: ['$(\\sin x)\' = \\cos x$', '$(\\cos x)\' = -\\sin x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KJERNEREGELEN ==========
    {
      id: 'r1-7-5-kjerne-intro',
      type: 'text',
      content: `## Kjerneregelen med trigonometriske funksjoner

Nar argumentet til den trigonometriske funksjonen er en sammensatt funksjon, bruker vi kjerneregelen:

$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$`,
    },

    // Teorem: Kjerneregelen
    {
      id: 'r1-7-5-theorem-kjerne',
      type: 'theorem',
      title: 'Kjerneregelen for trigonometriske funksjoner',
      content: `La $u = u(x)$ være en deriverbar funksjon. Da gjelder:

$$(\\sin u)' = \\cos u \\cdot u'$$
$$(\\cos u)' = -\\sin u \\cdot u'$$
$$(\\tan u)' = \\frac{u'}{\\cos^2 u}$$

Man «deriverer den ytre funksjonen og ganger med den deriverte av kjernen».`,
    },

    // Eksempel: Kjerneregelen
    {
      id: 'r1-7-5-example-kjerne',
      type: 'example',
      title: 'Eksempel 2: Kjerneregelen',
      problem: `Deriver:
a) $f(x) = \\sin(3x)$
b) $g(x) = \\cos(x^2)$
c) $h(x) = \\tan(2x + 1)$`,
      solution: `**Losning:**

a) $f'(x) = \\cos(3x) \\cdot 3 = 3\\cos(3x)$

Ytre funksjon: $\\sin u$, kjerne: $u = 3x$, $u' = 3$.

b) $g'(x) = -\\sin(x^2) \\cdot 2x = -2x\\sin(x^2)$

Ytre funksjon: $\\cos u$, kjerne: $u = x^2$, $u' = 2x$.

c) $h'(x) = \\frac{1}{\\cos^2(2x+1)} \\cdot 2 = \\frac{2}{\\cos^2(2x+1)}$

Ytre funksjon: $\\tan u$, kjerne: $u = 2x+1$, $u' = 2$.`,
    },

    // Oppgave 2
    {
      id: 'r1-7-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver ved hjelp av kjerneregelen.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sin(2x)$', solution: '$f\'(x) = 2\\cos(2x)$' },
          { label: 'b', task: '$g(x) = \\cos(5x - 1)$', solution: '$g\'(x) = -5\\sin(5x - 1)$' },
          { label: 'c', task: '$h(x) = \\sin(x^3)$', solution: '$h\'(x) = 3x^2 \\cos(x^3)$' },
          { label: 'd', task: '$p(x) = \\cos(\\sqrt{x})$', solution: '$p\'(x) = -\\sin(\\sqrt{x}) \\cdot \\frac{1}{2\\sqrt{x}} = -\\frac{\\sin(\\sqrt{x})}{2\\sqrt{x}}$' },
        ],
        hints: ['Identifiser kjernen $u(x)$ og den ytre funksjonen', 'Husk a gange med $u\'(x)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r1-7-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver funksjonene. Bruk produkt- eller kvotientregelen der det trengs.',
        subTasks: [
          { label: 'a', task: '$f(x) = x \\sin x$', solution: '$f\'(x) = \\sin x + x\\cos x$' },
          { label: 'b', task: '$g(x) = x^2 \\cos x$', solution: '$g\'(x) = 2x\\cos x - x^2 \\sin x$' },
          { label: 'c', task: '$h(x) = \\frac{\\sin x}{x}$', solution: '$h\'(x) = \\frac{x\\cos x - \\sin x}{x^2}$' },
        ],
        hints: ['Produktregelen: $(uv)\' = u\'v + uv\'$', 'Kvotientregelen: $(\\frac{u}{v})\' = \\frac{u\'v - uv\'}{v^2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel: Mer avansert
    {
      id: 'r1-7-5-example-avansert',
      type: 'example',
      title: 'Eksempel 3: Kombinert derivasjon',
      problem: `Deriver $f(x) = \\sin^2(3x)$.`,
      solution: `**Losning:**

Vi skriver $f(x) = [\\sin(3x)]^2$ og bruker kjerneregelen to ganger:

**Ytre:** $u^2$, **midtre kjerne:** $\\sin(v)$, **indre kjerne:** $v = 3x$

$$f'(x) = 2\\sin(3x) \\cdot [\\sin(3x)]' = 2\\sin(3x) \\cdot \\cos(3x) \\cdot 3$$

$$= 6\\sin(3x)\\cos(3x) = 3\\sin(6x)$$

(I siste steg brukte vi $2\\sin u \\cos u = \\sin 2u$ med $u = 3x$.)`,
    },

    // Oppgave 4
    {
      id: 'r1-7-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Deriver funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\cos^3(x)$', solution: '$f\'(x) = 3\\cos^2(x) \\cdot (-\\sin x) = -3\\cos^2(x)\\sin(x)$' },
          { label: 'b', task: '$g(x) = \\sin^2(2x)$', solution: '$g\'(x) = 2\\sin(2x) \\cdot \\cos(2x) \\cdot 2 = 4\\sin(2x)\\cos(2x) = 2\\sin(4x)$' },
          { label: 'c', task: '$h(x) = \\sqrt{\\sin x}$', solution: '$h\'(x) = \\frac{\\cos x}{2\\sqrt{\\sin x}}$' },
        ],
        hints: ['Skriv $\\cos^3 x = [\\cos x]^3$ og bruk kjerneregelen', 'For c): $\\sqrt{u} = u^{1/2}$, sa $(\\sqrt{u})\' = \\frac{u\'}{2\\sqrt{u}}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FUNKSJONSDRØFTING ==========
    {
      id: 'r1-7-5-drofting-intro',
      type: 'text',
      content: `## Funksjonsdrøfting med trigonometriske funksjoner

Vi kan bruke derivasjon til a finne ekstremalpunkter og studere vekst/avtak for trigonometriske funksjoner, akkurat som for andre funksjoner.

**Framgangsmate:**
1. Finn $f'(x)$
2. Los $f'(x) = 0$ for a finne kritiske punkter
3. Undersok fortegnet til $f'(x)$ for a bestemme topp- og bunnpunkter
4. Finn eventuelt $f''(x)$ for vendepunkter`,
    },

    // Eksempel: Drøfting
    {
      id: 'r1-7-5-example-drofting',
      type: 'example',
      title: 'Eksempel 4: Funksjonsdrøfting',
      problem: `Drofte funksjonen $f(x) = 2\\sin x + \\cos(2x)$ for $x \\in [0, 2\\pi]$.`,
      solution: `**Losning:**

**Steg 1: Derivasjon**
$f'(x) = 2\\cos x - 2\\sin(2x) = 2\\cos x - 4\\sin x \\cos x = 2\\cos x(1 - 2\\sin x)$

**Steg 2: Kritiske punkter**
$f'(x) = 0$ nar $\\cos x = 0$ eller $\\sin x = \\frac{1}{2}$.

$\\cos x = 0 \\Rightarrow x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$

$\\sin x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$

**Steg 3: Funksjonsverdierne**
- $f(\\frac{\\pi}{6}) = 2 \\cdot \\frac{1}{2} + \\cos \\frac{\\pi}{3} = 1 + \\frac{1}{2} = \\frac{3}{2}$
- $f(\\frac{\\pi}{2}) = 2 + \\cos \\pi = 2 - 1 = 1$
- $f(\\frac{5\\pi}{6}) = 2 \\cdot \\frac{1}{2} + \\cos \\frac{5\\pi}{3} = 1 + \\frac{1}{2} = \\frac{3}{2}$
- $f(\\frac{3\\pi}{2}) = -2 + \\cos 3\\pi = -2 - 1 = -3$

**Steg 4:** Ved a sjekke fortegnet til $f'(x)$ i intervallene finner vi:
- $x = \\frac{\\pi}{6}$ og $x = \\frac{5\\pi}{6}$: lokale toppunkter (begge $\\frac{3}{2}$)
- $x = \\frac{\\pi}{2}$: lokalt bunnpunkt ($1$)
- $x = \\frac{3\\pi}{2}$: globalt bunnpunkt ($-3$)`,
    },

    // Oppgave 5
    {
      id: 'r1-7-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eventuelle ekstremalpunkter for $f(x) = \\sin x + \\cos x$ pa $[0, 2\\pi]$.',
        solution: `$f'(x) = \\cos x - \\sin x = 0$ gir $\\sin x = \\cos x$, altsa $\\tan x = 1$.

$x = \\frac{\\pi}{4}$ og $x = \\frac{5\\pi}{4}$.

$f(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\sqrt{2}$ (toppunkt)

$f(\\frac{5\\pi}{4}) = -\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} = -\\sqrt{2}$ (bunnpunkt)`,
        hints: ['$f\'(x) = 0$ gir $\\cos x = \\sin x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r1-7-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tangentlinjen til $f(x) = \\sin(2x)$ i punktet $x = \\frac{\\pi}{6}$.',
        solution: `$f(\\frac{\\pi}{6}) = \\sin(\\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2}$

$f'(x) = 2\\cos(2x)$, sa $f'(\\frac{\\pi}{6}) = 2\\cos(\\frac{\\pi}{3}) = 2 \\cdot \\frac{1}{2} = 1$.

Tangentlinjen: $y - \\frac{\\sqrt{3}}{2} = 1 \\cdot (x - \\frac{\\pi}{6})$, altsa $y = x - \\frac{\\pi}{6} + \\frac{\\sqrt{3}}{2}$.`,
        hints: ['Tangentlinje: $y - f(a) = f\'(a)(x - a)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-7-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver.',
        subTasks: [
          { label: 'a', task: '$f(x) = 4\\sin(3x) - 2\\cos(x)$', solution: '$f\'(x) = 12\\cos(3x) + 2\\sin(x)$' },
          { label: 'b', task: '$g(x) = \\sin(x) + \\tan(x)$', solution: '$g\'(x) = \\cos(x) + \\frac{1}{\\cos^2(x)}$' },
          { label: 'c', task: '$h(x) = \\frac{1}{2}\\sin(2x) - \\frac{1}{3}\\cos(3x)$', solution: '$h\'(x) = \\cos(2x) + \\sin(3x)$' },
        ],
        hints: ['Deriver ledd for ledd', 'Husk kjerneregelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r1-7-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den andrederiverte.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\sin x$. Finn $f\'\'(x)$.', solution: '$f\'(x) = \\cos x$, $f\'\'(x) = -\\sin x$' },
          { label: 'b', task: '$g(x) = \\cos(2x)$. Finn $g\'\'(x)$.', solution: '$g\'(x) = -2\\sin(2x)$, $g\'\'(x) = -4\\cos(2x)$' },
          { label: 'c', task: 'Vis at $f(x) = \\sin x$ oppfyller $f\'\'(x) + f(x) = 0$.', solution: '$f\'\'(x) + f(x) = -\\sin x + \\sin x = 0$ ✓' },
        ],
        hints: ['Deriver den deriverte en gang til'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r1-7-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn storste og minste verdi av $f(x) = 3\\sin x + 4\\cos x$ (uten a begrense intervallet).',
        solution: `$f'(x) = 3\\cos x - 4\\sin x = 0$ gir $\\tan x = \\frac{3}{4}$.

Maks- og minimumsverdier: Vi kan skrive $f(x) = 5\\sin(x + v)$ der $\\sin v = \\frac{4}{5}$ og $\\cos v = \\frac{3}{5}$.

(Fordi $a\\sin x + b\\cos x = \\sqrt{a^2+b^2}\\sin(x + v)$ der $\\tan v = \\frac{b}{a}$.)

Amplitude: $\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.

Storste verdi: $5$. Minste verdi: $-5$.`,
        hints: ['Bruk at $a\\sin x + b\\cos x$ har amplitude $\\sqrt{a^2 + b^2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r1-7-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle $x \\in [0, 2\\pi]$ der tangentlinjen til $f(x) = \\cos x$ er horisontal.',
        solution: '$f\'(x) = -\\sin x = 0$ gir $\\sin x = 0$, sa $x = 0, \\pi, 2\\pi$. I disse punktene: $f(0) = 1$ (toppunkt), $f(\\pi) = -1$ (bunnpunkt), $f(2\\pi) = 1$ (toppunkt).',
        hints: ['Horisontal tangent betyr $f\'(x) = 0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r1-7-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En partikkel beveger seg langs en rett linje med posisjon $s(t) = 3\\sin(2t) + 4\\cos(2t)$ (i meter, $t$ i sekunder).',
        subTasks: [
          { label: 'a', task: 'Finn farten $v(t) = s\'(t)$.', solution: '$v(t) = 6\\cos(2t) - 8\\sin(2t)$' },
          { label: 'b', task: 'Finn akselerasjonen $a(t) = v\'(t)$.', solution: '$a(t) = -12\\sin(2t) - 16\\cos(2t)$' },
          { label: 'c', task: 'Vis at $a(t) = -4s(t)$.', solution: '$a(t) = -12\\sin(2t) - 16\\cos(2t) = -4(3\\sin(2t) + 4\\cos(2t)) = -4s(t)$ ✓' },
        ],
        hints: ['Deriver posisjon for a fa fart, deriver fart for a fa akselerasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r1-7-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Deriver $f(x) = e^x \\sin x$.',
        solution: '$f\'(x) = e^x \\sin x + e^x \\cos x = e^x(\\sin x + \\cos x)$',
        hints: ['Bruk produktregelen: $(uv)\' = u\'v + uv\'$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r1-7-5-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-13',
        number: '13',
        type: 'interactive',
        difficulty: 'medium',
        tool: 'geogebra-graph',
        task: 'Tegn $f(x) = \\sin(2x)$ og dens deriverte $f\'(x) = 2\\cos(2x)$ i GeoGebra. Verifiser at $f\'(x) = 0$ i topp- og bunnpunktene til $f$.',
        solution: 'Toppunktene til $\\sin(2x)$ er i $x = \\frac{\\pi}{4} + n\\pi$. Der er $2\\cos(2 \\cdot \\frac{\\pi}{4}) = 2\\cos(\\frac{\\pi}{2}) = 0$ ✓.',
        hints: ['Skriv inn begge funksjonene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r1-7-5-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-7-5-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et rektangel er innskrevet i en halvsirkel med radius $r$. Den ene siden ligger langs diameteren. Uttrykk arealet som funksjon av en vinkel, og finn det maksimale arealet.',
        solution: `La $\\theta$ være vinkelen fra sentrum til hjornet. Da er bredden $2r\\cos\\theta$ og hoyden $r\\sin\\theta$.

$A(\\theta) = 2r\\cos\\theta \\cdot r\\sin\\theta = r^2 \\sin(2\\theta)$

$A'(\\theta) = 2r^2 \\cos(2\\theta) = 0$ gir $\\theta = \\frac{\\pi}{4}$.

Maksimalt areal: $A(\\frac{\\pi}{4}) = r^2 \\sin(\\frac{\\pi}{2}) = r^2$.`,
        hints: ['Bruk en vinkelparametrisering', 'Bruk $2\\sin\\theta\\cos\\theta = \\sin(2\\theta)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-7-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Derivasjonsregler (kun i radianer!):**
- $(\\sin x)' = \\cos x$
- $(\\cos x)' = -\\sin x$
- $(\\tan x)' = \\frac{1}{\\cos^2 x}$

**Kjerneregelen:**
- $(\\sin u)' = u' \\cos u$
- $(\\cos u)' = -u' \\sin u$

**Funksjonsdrøfting:** Finn $f'(x) = 0$, undersok fortegn, bestem topp-/bunnpunkter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.6: Sinussetningen og cosinussetningen
// ============================================================================

export const CHAPTER_R1_7_6: TextbookChapter = {
  id: 'r1-7-6',
  courseId: 'r1',
  chapterNumber: '7.6',
  title: 'Sinussetningen og cosinussetningen',
  description: 'Lær a bruke sinussetningen, cosinussetningen og arealsetningen til a lose trekanter og praktiske problemer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke sinussetningen til a lose trekanter',
    'bruke cosinussetningen til a lose trekanter',
    'beregne areal med arealsetningen',
    'handtere tvetydighetsproblemet',
    'anvende setningene pa praktiske problemer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-7-6-intro',
      type: 'text',
      content: `## Sinussetningen og cosinussetningen

Pytagoras' setning gjelder bare for **rettvinklede** trekanter. Men i mange praktiske situasjoner har vi trekanter uten rette vinkler. Da trenger vi mer generelle verktøy: **sinussetningen** og **cosinussetningen**.

I en vilkarlig trekant $ABC$ bruker vi notasjonen:
- Sidene $a$, $b$, $c$ er motstaende til vinklene $A$, $B$, $C$
- Side $a$ er motstaende til vinkel $A$, osv.`,
    },

    // ========== SINUSSETNINGEN ==========
    {
      id: 'r1-7-6-sinus-intro',
      type: 'text',
      content: `## Sinussetningen

Sinussetningen gir en sammenheng mellom sider og motstaende vinkler i en trekant.`,
    },

    // Teorem: Sinussetningen
    {
      id: 'r1-7-6-theorem-sinus',
      type: 'theorem',
      title: 'Sinussetningen',
      content: `I en vilkarlig trekant $ABC$ gjelder:

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

Ekvivalent:

$$\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$$

**Nar brukes sinussetningen?** Nar du kjenner en side og den motstaende vinkelen, pluss en ekstra opplysning (en annen side eller vinkel).`,
    },

    // Eksempel: Sinussetningen
    {
      id: 'r1-7-6-example-sinus',
      type: 'example',
      title: 'Eksempel 1: Bruk av sinussetningen',
      problem: `I trekant $ABC$ er $A = 40°$, $B = 75°$ og $a = 12$. Finn $b$ og $c$.`,
      solution: `**Losning:**

**Steg 1:** Finn vinkel $C$:
$C = 180° - 40° - 75° = 65°$

**Steg 2:** Bruk sinussetningen til a finne $b$:
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$$
$$\\frac{12}{\\sin 40°} = \\frac{b}{\\sin 75°}$$
$$b = \\frac{12 \\cdot \\sin 75°}{\\sin 40°} = \\frac{12 \\cdot 0{,}9659}{0{,}6428} \\approx 18{,}03$$

**Steg 3:** Finn $c$:
$$c = \\frac{12 \\cdot \\sin 65°}{\\sin 40°} = \\frac{12 \\cdot 0{,}9063}{0{,}6428} \\approx 16{,}92$$`,
    },

    // Oppgave 1
    {
      id: 'r1-7-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk sinussetningen til a finne de ukjente storrelsene i trekant $ABC$.',
        subTasks: [
          { label: 'a', task: '$A = 50°$, $B = 60°$, $a = 10$. Finn $b$.', solution: '$b = \\frac{10 \\sin 60°}{\\sin 50°} = \\frac{10 \\cdot 0{,}866}{0{,}766} \\approx 11{,}31$' },
          { label: 'b', task: '$A = 35°$, $C = 80°$, $c = 15$. Finn $a$ og $b$.', solution: '$B = 65°$. $a = \\frac{15 \\sin 35°}{\\sin 80°} \\approx 8{,}74$. $b = \\frac{15 \\sin 65°}{\\sin 80°} \\approx 13{,}80$.' },
        ],
        hints: ['Finn den tredje vinkelen forst', '$\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TVETYDIGHETSPROBLEMET ==========
    {
      id: 'r1-7-6-tvetydighet-intro',
      type: 'text',
      content: `## Tvetydighetsproblemet

Nar vi kjenner to sider og en motstaende vinkel (SSV-tilfellet), kan det oppsta to mulige trekanter. Dette kalles **tvetydighetsproblemet**.

Problemet oppstar fordi likningen $\\sin B = k$ (med $0 < k < 1$) har to losninger i $(0°, 180°)$: en spiss og en stump vinkel.`,
    },

    // Note om tvetydighet
    {
      id: 'r1-7-6-note-tvetydighet',
      type: 'warning',
      title: 'Nar oppstar tvetydighet?',
      content: `Gitt: side $a$, side $b$ og vinkel $A$ (motstaende $a$).

- Hvis $A \\geq 90°$: **Ingen tvetydighet** (bare en mulig trekant, eller ingen losning)
- Hvis $A < 90°$ og $a \\geq b$: **Ingen tvetydighet** (storste side motstaende storste vinkel)
- Hvis $A < 90°$ og $a < b$: **Mulig tvetydighet** -- sjekk om bade $B$ og $180° - B$ gir en gyldig trekant`,
    },

    // Eksempel: Tvetydighet
    {
      id: 'r1-7-6-example-tvetydighet',
      type: 'example',
      title: 'Eksempel 2: Tvetydighetsproblemet',
      problem: `I trekant $ABC$ er $a = 8$, $b = 12$ og $A = 30°$. Finn mulige verdier for vinkel $B$.`,
      solution: `**Losning:**

Sinussetningen gir:
$$\\frac{\\sin B}{b} = \\frac{\\sin A}{a} \\Rightarrow \\sin B = \\frac{b \\sin A}{a} = \\frac{12 \\cdot \\sin 30°}{8} = \\frac{12 \\cdot 0{,}5}{8} = 0{,}75$$

$B = \\arcsin(0{,}75) \\approx 48{,}6°$ eller $B \\approx 180° - 48{,}6° = 131{,}4°$

**Sjekk begge:**
- $B \\approx 48{,}6°$: $C \\approx 180° - 30° - 48{,}6° = 101{,}4°$ ✓ (gyldig trekant)
- $B \\approx 131{,}4°$: $C \\approx 180° - 30° - 131{,}4° = 18{,}6°$ ✓ (ogsa gyldig trekant)

**Det er to mulige trekanter!**`,
    },

    // Oppgave 2
    {
      id: 'r1-7-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjor om det er null, en eller to mulige trekanter, og finn losningen(e).',
        subTasks: [
          { label: 'a', task: '$a = 5$, $b = 8$, $A = 30°$', solution: '$\\sin B = \\frac{8 \\sin 30°}{5} = 0{,}8$. $B \\approx 53{,}1°$ eller $B \\approx 126{,}9°$. Begge gir gyldig trekant. To losninger.' },
          { label: 'b', task: '$a = 3$, $b = 7$, $A = 40°$', solution: '$\\sin B = \\frac{7 \\sin 40°}{3} \\approx 1{,}50 > 1$. Ingen losning (ingen trekant mulig).' },
          { label: 'c', task: '$a = 10$, $b = 6$, $A = 50°$', solution: '$\\sin B = \\frac{6 \\sin 50°}{10} \\approx 0{,}460$. $B \\approx 27{,}4°$. $180° - 27{,}4° = 152{,}6°$ er ugyldig ($50° + 152{,}6° > 180°$). En losning.' },
        ],
        hints: ['Regn ut $\\sin B = \\frac{b\\sin A}{a}$', 'Hvis $\\sin B > 1$: ingen losning. Ellers: sjekk om bade $B$ og $180° - B$ er gyldige.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== COSINUSSETNINGEN ==========
    {
      id: 'r1-7-6-cosinus-intro',
      type: 'text',
      content: `## Cosinussetningen

Cosinussetningen er en generalisering av Pytagoras' setning til vilkarlige trekanter. Den er spesielt nyttig nar vi kjenner tre sider (SSS) eller to sider og den mellomliggende vinkelen (SVS).`,
    },

    // Teorem: Cosinussetningen
    {
      id: 'r1-7-6-theorem-cosinus',
      type: 'theorem',
      title: 'Cosinussetningen',
      content: `I en vilkarlig trekant $ABC$ gjelder:

$$c^2 = a^2 + b^2 - 2ab\\cos C$$

Tilsvarende for de andre sidene:
$$a^2 = b^2 + c^2 - 2bc\\cos A$$
$$b^2 = a^2 + c^2 - 2ac\\cos B$$

**Spesialtilfelle:** Nar $C = 90°$ far vi $c^2 = a^2 + b^2$ (Pytagoras).`,
    },

    // Eksempel: Finn en side
    {
      id: 'r1-7-6-example-side',
      type: 'example',
      title: 'Eksempel 3: Finn en ukjent side',
      problem: `I trekant $ABC$ er $a = 7$, $b = 10$ og $C = 60°$. Finn $c$.`,
      solution: `**Losning:**

$$c^2 = a^2 + b^2 - 2ab\\cos C$$
$$= 7^2 + 10^2 - 2 \\cdot 7 \\cdot 10 \\cdot \\cos 60°$$
$$= 49 + 100 - 140 \\cdot 0{,}5$$
$$= 149 - 70 = 79$$

$$c = \\sqrt{79} \\approx 8{,}89$$`,
    },

    // Eksempel: Finn en vinkel
    {
      id: 'r1-7-6-example-vinkel',
      type: 'example',
      title: 'Eksempel 4: Finn en ukjent vinkel',
      problem: `I trekant $ABC$ er $a = 5$, $b = 7$ og $c = 9$. Finn vinkel $C$.`,
      solution: `**Losning:**

Vi loser cosinussetningen for $\\cos C$:

$$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{25 + 49 - 81}{2 \\cdot 5 \\cdot 7} = \\frac{-7}{70} = -0{,}1$$

$$C = \\arccos(-0{,}1) \\approx 95{,}7°$$

Vinkel $C$ er stump, noe som gir mening fordi $c$ er den lengste siden.`,
    },

    // Oppgave 3
    {
      id: 'r1-7-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk cosinussetningen.',
        subTasks: [
          { label: 'a', task: '$a = 5$, $b = 8$, $C = 45°$. Finn $c$.', solution: '$c^2 = 25 + 64 - 80\\cos 45° = 89 - 56{,}57 = 32{,}43$. $c \\approx 5{,}69$.' },
          { label: 'b', task: '$a = 6$, $b = 8$, $c = 10$. Finn vinkel $C$.', solution: '$\\cos C = \\frac{36 + 64 - 100}{96} = 0$. $C = 90°$.' },
          { label: 'c', task: '$a = 4$, $b = 5$, $c = 8$. Finn storste vinkel.', solution: 'Storste side er $c$, sa storste vinkel er $C$. $\\cos C = \\frac{16+25-64}{40} = -\\frac{23}{40}$. $C \\approx 125{,}1°$.' },
        ],
        hints: ['$c^2 = a^2 + b^2 - 2ab\\cos C$', 'For a finne vinkel: los for $\\cos C$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== AREALSETNINGEN ==========
    {
      id: 'r1-7-6-areal-intro',
      type: 'text',
      content: `## Arealsetningen

Arealsetningen gir oss en elegant formel for arealet av en trekant nar vi kjenner to sider og den mellomliggende vinkelen.`,
    },

    // Teorem: Arealsetningen
    {
      id: 'r1-7-6-theorem-areal',
      type: 'theorem',
      title: 'Arealsetningen',
      content: `Arealet av en trekant med sider $a$ og $b$ og mellomliggende vinkel $C$ er:

$$A = \\frac{1}{2}ab\\sin C$$

Tilsvarende: $A = \\frac{1}{2}ac\\sin B = \\frac{1}{2}bc\\sin A$

**Spesialtilfelle:** Nar $C = 90°$: $A = \\frac{1}{2}ab$ (den vanlige arealformelen).`,
    },

    // Eksempel: Areal
    {
      id: 'r1-7-6-example-areal',
      type: 'example',
      title: 'Eksempel 5: Areal med arealsetningen',
      problem: `Finn arealet av trekant $ABC$ der $a = 8$, $b = 11$ og $C = 50°$.`,
      solution: `**Losning:**

$$A = \\frac{1}{2}ab\\sin C = \\frac{1}{2} \\cdot 8 \\cdot 11 \\cdot \\sin 50°$$

$$= 44 \\cdot 0{,}766 = 33{,}7$$

Arealet er ca. $33{,}7$ arealenheter.`,
    },

    // Oppgave 4
    {
      id: 'r1-7-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av trekantene.',
        subTasks: [
          { label: 'a', task: '$a = 6$, $b = 9$, $C = 30°$', solution: '$A = \\frac{1}{2} \\cdot 6 \\cdot 9 \\cdot \\sin 30° = 27 \\cdot 0{,}5 = 13{,}5$' },
          { label: 'b', task: '$b = 10$, $c = 12$, $A = 120°$', solution: '$A = \\frac{1}{2} \\cdot 10 \\cdot 12 \\cdot \\sin 120° = 60 \\cdot \\frac{\\sqrt{3}}{2} = 30\\sqrt{3} \\approx 51{,}96$' },
          { label: 'c', task: 'Likesidet trekant med side $s = 8$', solution: 'Alle vinkler er $60°$: $A = \\frac{1}{2} \\cdot 8 \\cdot 8 \\cdot \\sin 60° = 32 \\cdot \\frac{\\sqrt{3}}{2} = 16\\sqrt{3} \\approx 27{,}71$' },
        ],
        hints: ['$A = \\frac{1}{2}ab\\sin C$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VALG AV METODE ==========
    {
      id: 'r1-7-6-valg-metode',
      type: 'note',
      title: 'Hvilken setning skal du bruke?',
      content: `| Kjent informasjon | Metode |
|-------------------|--------|
| To vinkler + en side (VVS) | **Sinussetningen** |
| To sider + motstaende vinkel (SSV) | **Sinussetningen** (obs: tvetydighet!) |
| To sider + mellomliggende vinkel (SVS) | **Cosinussetningen** |
| Tre sider (SSS) | **Cosinussetningen** |
| To sider + mellomliggende vinkel (areal) | **Arealsetningen** |`,
    },

    // ========== ANVENDELSER ==========
    {
      id: 'r1-7-6-anvendelser-intro',
      type: 'text',
      content: `## Praktiske anvendelser

Sinussetningen og cosinussetningen brukes i mange praktiske sammenhenger: landmaling, navigasjon, kartlegging, konstruksjon og fysikk.`,
    },

    // Eksempel: Anvendelse
    {
      id: 'r1-7-6-example-anvendelse',
      type: 'example',
      title: 'Eksempel 6: Landmaling',
      problem: `Fra to punkter $A$ og $B$ pa bakken, som er $200$ m fra hverandre, males vinklene til et tarn $C$ pa en oy. Fra $A$ er vinkelen $\\angle BAC = 63°$ og fra $B$ er vinkelen $\\angle ABC = 72°$. Finn avstanden fra $A$ til tarnet.`,
      solution: `**Losning:**

**Steg 1:** Finn vinkel $C$:
$C = 180° - 63° - 72° = 45°$

**Steg 2:** Vi kjenner $c = AB = 200$ m og skal finne $b = AC$. Bruker sinussetningen:

$$\\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

$$b = \\frac{c \\cdot \\sin B}{\\sin C} = \\frac{200 \\cdot \\sin 72°}{\\sin 45°} = \\frac{200 \\cdot 0{,}9511}{0{,}7071} \\approx 269 \\text{ m}$$

Avstanden fra $A$ til tarnet er ca. $269$ m.`,
    },

    // Oppgave 5
    {
      id: 'r1-7-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'To veier gar ut fra et kryss med en vinkel pa $65°$ mellom seg. Person $A$ gar $300$ m langs den ene veien og person $B$ gar $400$ m langs den andre. Finn avstanden mellom $A$ og $B$.',
        solution: `$c^2 = 300^2 + 400^2 - 2 \\cdot 300 \\cdot 400 \\cdot \\cos 65°$
$= 90000 + 160000 - 240000 \\cdot 0{,}4226$
$= 250000 - 101424 = 148576$
$c = \\sqrt{148576} \\approx 385{,}5$ m.`,
        hints: ['Dette er et SVS-tilfelle -- bruk cosinussetningen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r1-7-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et skip seiler fra havn $A$ til havn $B$ (avstand $80$ km). Skipet seiler forst $50$ km i retning $N30°O$ til et punkt $P$, og deretter videre til $B$. Vinkelen $\\angle APB = 110°$. Finn avstanden $PB$.',
        solution: `I trekant $APB$: $AP = 50$ km, $AB = 80$ km, vinkel $P = 110°$.

Bruk cosinussetningen for a finne $\\angle A$:
$PB^2 = AP^2 + AB^2 - 2 \\cdot AP \\cdot AB \\cdot \\cos A$ -- nei, vi kjenner ikke vinkel $A$.

Bruk sinussetningen: $\\frac{AB}{\\sin P} = \\frac{AP}{\\sin B}$

$\\sin B = \\frac{50 \\sin 110°}{80} = \\frac{50 \\cdot 0{,}9397}{80} \\approx 0{,}587$

$B \\approx 36{,}0°$. Da $A = 180° - 110° - 36° = 34°$.

$PB = \\frac{80 \\sin 34°}{\\sin 110°} = \\frac{80 \\cdot 0{,}5592}{0{,}9397} \\approx 47{,}6$ km.`,
        hints: ['Tegn en figur', 'Bruk sinussetningen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-7-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn alle vinklene i trekant $ABC$ med sider $a = 5$, $b = 6$, $c = 7$.',
        solution: `Storste vinkel motstar storste side, sa $C$ er storst.

$\\cos C = \\frac{25 + 36 - 49}{60} = \\frac{12}{60} = 0{,}2$, $C \\approx 78{,}5°$.

$\\cos B = \\frac{25 + 49 - 36}{70} = \\frac{38}{70} \\approx 0{,}543$, $B \\approx 57{,}1°$.

$A = 180° - 78{,}5° - 57{,}1° = 44{,}4°$.`,
        hints: ['Bruk cosinussetningen for a finne to vinkler', 'Den tredje vinkelen: $A + B + C = 180°$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r1-7-6-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en parallellogram er sidene $8$ cm og $12$ cm, og den minste vinkelen er $55°$. Finn lengden av begge diagonalene.',
        solution: `Diagonalene deler parallellogrammet i trekanter.

Kort diagonal (motstar den spisse vinkelen $55°$):
$d_1^2 = 8^2 + 12^2 - 2 \\cdot 8 \\cdot 12 \\cdot \\cos 55° = 64 + 144 - 110{,}0 = 98{,}0$
$d_1 \\approx 9{,}9$ cm.

Lang diagonal (motstar den stumpe vinkelen $125°$):
$d_2^2 = 8^2 + 12^2 - 2 \\cdot 8 \\cdot 12 \\cdot \\cos 125° = 208 + 110{,}0 = 318{,}0$
$d_2 \\approx 17{,}8$ cm.`,
        hints: ['Motstaende vinkler i en parallellogram er supplementaere: $180° - 55° = 125°$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r1-7-6-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet av trekant $ABC$ med sider $a = 7$, $b = 9$ og $c = 12$.',
        solution: `Forst finner vi en vinkel med cosinussetningen:
$\\cos C = \\frac{49 + 81 - 144}{126} = \\frac{-14}{126} = -\\frac{1}{9}$

$\\sin C = \\sqrt{1 - \\frac{1}{81}} = \\sqrt{\\frac{80}{81}} = \\frac{4\\sqrt{5}}{9}$

$A = \\frac{1}{2}ab\\sin C = \\frac{1}{2} \\cdot 7 \\cdot 9 \\cdot \\frac{4\\sqrt{5}}{9} = 14\\sqrt{5} \\approx 31{,}3$`,
        hints: ['Finn forst en vinkel med cosinussetningen, bruk deretter arealsetningen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r1-7-6-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et fly flyr fra by $A$ med kurs $N40°O$ i $250$ km til by $B$, og deretter med kurs $S70°O$ i $180$ km til by $C$. Finn avstanden fra $A$ til $C$.',
        solution: `Vinkelen ved $B$: Retningen endres fra $N40°O$ (som er $40°$ fra nord) til $S70°O$ (som er $180° - 70° = 110°$ fra nord).

Vinkel mellom veiene: $180° - 40° + (180° - 110°) = 180° - 40° + 70° = 210°$... Nei.

Tenker vi pa det som retningsvinkler: innkommende retning $40°$, utgaende $110°$. Vinkelen i trekanten: $180° - (110° - 40°) = 180° - 70° = 110°$.

$AC^2 = 250^2 + 180^2 - 2 \\cdot 250 \\cdot 180 \\cdot \\cos 110°$
$= 62500 + 32400 - 90000 \\cdot (-0{,}342)$
$= 94900 + 30780 = 125680$
$AC \\approx 354{,}5$ km.`,
        hints: ['Tegn en figur med kompassretninger', 'Finn vinkelen i trekanten mellom de to flutstrekningene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r1-7-6-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bevis cosinussetningen ved hjelp av vektorer.',
        solution: `La $\\vec{a}$, $\\vec{b}$ være vektorer langs sidene $BC$ og $BA$. Da er $\\vec{c} = \\vec{a} - \\vec{b}$ (fra $B$ til $A$ via $C$... eller la oss være presise).

Definer $\\vec{a} = \\overrightarrow{CB}$, $\\vec{b} = \\overrightarrow{CA}$, sa $\\overrightarrow{BA} = \\vec{b} - \\vec{a}$.

$c^2 = |\\vec{b} - \\vec{a}|^2 = (\\vec{b} - \\vec{a}) \\cdot (\\vec{b} - \\vec{a})$
$= |\\vec{b}|^2 - 2\\vec{a}\\cdot\\vec{b} + |\\vec{a}|^2$
$= b^2 + a^2 - 2|\\vec{a}||\\vec{b}|\\cos C$
$= a^2 + b^2 - 2ab\\cos C \\quad \\square$`,
        hints: ['Bruk at $|\\vec{u}|^2 = \\vec{u} \\cdot \\vec{u}$', 'Bruk at $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos \\theta$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r1-7-6-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et rektangulaert tomt har diagonaler pa $30$ m og $40$ m som krysser hverandre med en vinkel pa $55°$. Finn arealet av tomten.',
        solution: `Diagonalene deler tomten i fire trekanter. Arealet av hele tomten:

$A = \\frac{1}{2}d_1 \\cdot d_2 \\cdot \\sin\\theta = \\frac{1}{2} \\cdot 30 \\cdot 40 \\cdot \\sin 55° \\approx 600 \\cdot 0{,}819 \\approx 491{,}5$ m².`,
        hints: ['Arealet av en firkant med diagonaler $d_1$, $d_2$ og vinkel $\\theta$: $A = \\frac{1}{2}d_1 d_2 \\sin\\theta$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r1-7-6-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-13',
        number: '13',
        type: 'interactive',
        difficulty: 'lett',
        tool: 'geogebra-geometry',
        task: 'Bruk GeoGebra til a konstruere trekant $ABC$ med $a = 7$, $b = 10$, $C = 60°$. Mal $c$ og verifiser svaret med cosinussetningen.',
        solution: 'Cosinussetningen gir $c^2 = 49 + 100 - 140 \\cdot 0{,}5 = 79$, sa $c = \\sqrt{79} \\approx 8{,}89$.',
        hints: ['Bruk verktøyene for a lage en vinkel pa $60°$ og sette av sidelengdene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r1-7-6-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-7-6-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et regulaert femkantomrade (pentagon) har sidelengde $s$. Vis at arealet er $A = \\frac{5s^2}{4}\\tan 54°$.',
        solution: `En regulaer femkant kan deles i $5$ likebente trekanter fra sentrum. Toppvinkelen i hver trekant er $\\frac{360°}{5} = 72°$.

Hoyden fra sentrum til midtpunktet pa en side (apotemet) er $h = \\frac{s}{2}\\tan 54°$ (der $54° = 90° - 36°$, halve toppvinkelen er $36°$).

Areal av en trekant: $\\frac{1}{2} \\cdot s \\cdot h = \\frac{s^2}{4}\\tan 54°$.

Totalt areal: $5 \\cdot \\frac{s^2}{4}\\tan 54° = \\frac{5s^2}{4}\\tan 54° \\quad \\square$`,
        hints: ['Del femkanten i $5$ trekanter fra sentrum', 'Finn apotemet (avstand fra sentrum til midtpunktet pa en side)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-7-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Sinussetningen:** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$
Brukes ved VVS og SSV (obs: tvetydighet!).

**Cosinussetningen:** $c^2 = a^2 + b^2 - 2ab\\cos C$
Brukes ved SVS og SSS.

**Arealsetningen:** $A = \\frac{1}{2}ab\\sin C$

**Tvetydighetsproblemet:** Nar $\\sin B = k$ ($0 < k < 1$) har to losninger, sjekk om begge gir gyldige trekanter.

**Velg metode ut fra hva som er kjent** -- se tabellen for valg av setning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITTEL 7 KAPITLER
// ============================================================================

export const R1_KAP7_CHAPTERS = [
  CHAPTER_R1_7_1,
  CHAPTER_R1_7_2,
  CHAPTER_R1_7_3,
  CHAPTER_R1_7_4,
  CHAPTER_R1_7_5,
  CHAPTER_R1_7_6,
];
