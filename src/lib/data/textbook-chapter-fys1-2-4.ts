/**
 * Fysikk 1 - Kapittel 2.4: Todimensjonal bevegelse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_2_4: TextbookChapter = {
  id: 'fys1-2-4',
  courseId: 'fys1',
  chapterNumber: '2.4',
  title: 'Todimensjonal bevegelse',
  description: 'Lær om todimensjonal bevegelse, vektoroppløsning og skrå kast med horisontal og vertikal bevegelse.',
  estimatedMinutes: 65,
  competenceGoals: [
    'løse opp vektorer i x- og y-komponenter',
    'analysere todimensjonal bevegelse uavhengig i hver retning',
    'løse problemer med skrå kast',
    'finne rekkevidde og maksimal høyde for skrå kast',
  ],
  content: [
    {
      id: 'fys1-2-4-intro',
      type: 'text',
      content: `# Todimensjonal bevegelse

Når et objekt beveger seg i to dimensjoner (x-y plan), må vi behandle bevegelsen i hver retning separat.

## Prinsipp om uavhengige komponenter

**Nøkkelprinsipp:** Bevegelsen i x-retning og y-retning er **uavhengige** av hverandre.

Dette betyr:
- Vi kan analysere x-bevegelse og y-bevegelse separat
- Bevegelseslikningene gjelder for hver retning
- Vi kombinerer komponentene for å finne total bevegelse

**Eksempel:**
- Horisontal bevegelse: Konstant fart (ingen akselerasjon)
- Vertikal bevegelse: Fritt fall (akselerasjon $-g$)`,
    },
    {
      id: 'fys1-2-4-vektoropploesning',
      type: 'text',
      content: `# Vektoroppløsning

For å analysere todimensjonal bevegelse må vi **løse opp** vektorer i komponenter.

## Fra vektor til komponenter

Gitt en vektor med beløp $v$ og vinkel $\\theta$ med x-aksen:

**X-komponent:**
$$v_x = v \\cos \\theta$$

**Y-komponent:**
$$v_y = v \\sin \\theta$$

**Viktige vinkler:**
- $\\cos 0° = 1$, $\\sin 0° = 0$ (horisontal)
- $\\cos 30° \\approx 0.866$, $\\sin 30° = 0.5$
- $\\cos 45° \\approx 0.707$, $\\sin 45° \\approx 0.707$
- $\\cos 60° = 0.5$, $\\sin 60° \\approx 0.866$
- $\\cos 90° = 0$, $\\sin 90° = 1$ (vertikal)

## Fra komponenter til vektor

Gitt komponenter $(v_x, v_y)$:

**Beløp:**
$$v = \\sqrt{v_x^2 + v_y^2}$$

**Vinkel:**
$$\\theta = \\arctan\\left(\\frac{v_y}{v_x}\\right)$$`,
    },
    {
      id: 'fys1-2-4-def-vektoropploesning',
      type: 'definition',
      title: 'Vektoroppløsning',
      content: 'En vektor med beløp $v$ og vinkel $\\theta$ har komponenter $v_x = v\\cos\\theta$ og $v_y = v\\sin\\theta$. Omvendt: $v = \\sqrt{v_x^2 + v_y^2}$ og $\\theta = \\arctan(v_y/v_x)$.',
    },
    {
      id: 'fys1-2-4-skraa-kast',
      type: 'text',
      content: `# Skrå kast

**Skrå kast** er et klassisk eksempel på todimensjonal bevegelse. Et objekt kastes med starthastighet $v_0$ i vinkel $\\theta$ over horisonten.

## Komponenter av starthastighet

**Horisontal komponent:**
$$v_{0x} = v_0 \\cos \\theta$$

**Vertikal komponent:**
$$v_{0y} = v_0 \\sin \\theta$$

## Bevegelse i x-retning (horisontal)

**Ingen horisontal akselerasjon** (neglisjerer luftmotstand):
$$a_x = 0$$

**Horisontal hastighet** (konstant):
$$v_x = v_{0x} = v_0 \\cos \\theta$$

**Horisontal posisjon:**
$$x = v_{0x} t = v_0 \\cos \\theta \\cdot t$$

## Bevegelse i y-retning (vertikal)

**Akselerasjon** (tyngdekraft):
$$a_y = -g = -9.81 \\text{ m/s}^2$$

**Vertikal hastighet:**
$$v_y = v_{0y} - gt = v_0 \\sin \\theta - gt$$

**Vertikal posisjon:**
$$y = v_{0y} t - \\frac{1}{2}gt^2 = v_0 \\sin \\theta \\cdot t - \\frac{1}{2}gt^2$$

## Baneform

Banen til et skrå kast er en **parabel**.

**Banelikning** (eliminere tid):
$$y = x \\tan \\theta - \\frac{g x^2}{2 v_0^2 \\cos^2 \\theta}$$

Dette er en andregradslikning i $x$, som gir en parabel.`,
    },
    {
      id: 'fys1-2-4-rekkevidde',
      type: 'text',
      content: `# Rekkevidde og maksimal høyde

## Rekkevidde (R)

**Rekkevidde** er horisontal distanse når objektet lander på samme høyde som det ble kastet fra.

**Tid i luften:**

Objektet lander når $y = 0$:
$$0 = v_0 \\sin \\theta \\cdot t - \\frac{1}{2}gt^2$$
$$t(v_0 \\sin \\theta - \\frac{1}{2}gt) = 0$$

$t = 0$ (start) eller $t = \\frac{2v_0 \\sin \\theta}{g}$ (landing)

**Rekkevidde:**
$$R = x(t) = v_0 \\cos \\theta \\cdot \\frac{2v_0 \\sin \\theta}{g}$$

Bruk $\\sin(2\\theta) = 2 \\sin \\theta \\cos \\theta$:

$$R = \\frac{v_0^2 \\sin(2\\theta)}{g}$$

**Maksimal rekkevidde:**

Siden $\\sin(2\\theta)$ er maksimal når $2\\theta = 90°$, er rekkevidde maksimal ved:
$$\\theta = 45°$$

$$R_{\\text{maks}} = \\frac{v_0^2}{g}$$

## Maksimal høyde (H)

**Maksimal høyde** nås når $v_y = 0$:

$$v_y = v_0 \\sin \\theta - gt = 0$$
$$t = \\frac{v_0 \\sin \\theta}{g}$$

**Høyde:**
$$H = v_0 \\sin \\theta \\cdot t - \\frac{1}{2}gt^2$$

Sett inn $t$:
$$H = v_0 \\sin \\theta \\cdot \\frac{v_0 \\sin \\theta}{g} - \\frac{1}{2}g \\left(\\frac{v_0 \\sin \\theta}{g}\\right)^2$$

$$H = \\frac{v_0^2 \\sin^2 \\theta}{g} - \\frac{v_0^2 \\sin^2 \\theta}{2g}$$

$$H = \\frac{v_0^2 \\sin^2 \\theta}{2g}$$`,
    },
    {
      id: 'fys1-2-4-note-rekkevidde',
      type: 'note',
      title: 'Viktige formler for skrå kast',
      content: `**Rekkevidde:** $R = \\frac{v_0^2 \\sin(2\\theta)}{g}$ (maksimal ved $\\theta = 45°$)

**Maksimal høyde:** $H = \\frac{v_0^2 \\sin^2 \\theta}{2g}$

**Tid i luften:** $T = \\frac{2v_0 \\sin \\theta}{g}$`,
    },
    {
      id: 'fys1-2-4-ex-1',
      type: 'example',
      title: 'Eksempel 1: Vektoroppløsning',
      problem: 'En ball kastes med hastighet 20 m/s i vinkel 30° over horisonten. Finn: a) horisontal komponent av hastigheten, b) vertikal komponent av hastigheten.',
      solution: `**Gitt:**
- $v_0 = 20$ m/s
- $\\theta = 30°$

**a) Horisontal komponent:**

$$v_{0x} = v_0 \\cos \\theta = 20 \\cos 30° = 20 \\cdot 0.866 \\approx 17.3 \\text{ m/s}$$

**Svar a):** 17.3 m/s

**b) Vertikal komponent:**

$$v_{0y} = v_0 \\sin \\theta = 20 \\sin 30° = 20 \\cdot 0.5 = 10 \\text{ m/s}$$

**Svar b):** 10 m/s`,
    },
    {
      id: 'fys1-2-4-ex-2',
      type: 'example',
      title: 'Eksempel 2: Skrå kast - rekkevidde og høyde',
      problem: 'En ball kastes med hastighet 30 m/s i vinkel 45°. Finn: a) maksimal høyde, b) rekkevidde, c) tid i luften. Bruk $g = 10$ m/s².',
      solution: `**Gitt:**
- $v_0 = 30$ m/s
- $\\theta = 45°$
- $g = 10$ m/s²

**a) Maksimal høyde:**

$$H = \\frac{v_0^2 \\sin^2 \\theta}{2g} = \\frac{30^2 \\cdot \\sin^2 45°}{2 \\cdot 10}$$

$$H = \\frac{900 \\cdot (0.707)^2}{20} = \\frac{900 \\cdot 0.5}{20} = \\frac{450}{20} = 22.5 \\text{ m}$$

**Svar a):** 22.5 m

**b) Rekkevidde:**

$$R = \\frac{v_0^2 \\sin(2\\theta)}{g} = \\frac{30^2 \\cdot \\sin(90°)}{10}$$

$$R = \\frac{900 \\cdot 1}{10} = 90 \\text{ m}$$

**Svar b):** 90 m

**c) Tid i luften:**

$$T = \\frac{2v_0 \\sin \\theta}{g} = \\frac{2 \\cdot 30 \\cdot \\sin 45°}{10}$$

$$T = \\frac{60 \\cdot 0.707}{10} = \\frac{42.4}{10} = 4.24 \\text{ s}$$

Alternativt: $T = \\frac{R}{v_{0x}} = \\frac{90}{30 \\cos 45°} = \\frac{90}{21.2} \\approx 4.24$ s

**Svar c):** 4.24 sekunder`,
    },
    {
      id: 'fys1-2-4-ex-3',
      type: 'example',
      title: 'Eksempel 3: Horisontal kast fra høyde',
      problem: 'En ball kastes horisontalt med hastighet 15 m/s fra en klippe 80 m høy. Finn: a) tiden til ballen treffer bakken, b) horisontal rekkevidde. Bruk $g = 10$ m/s².',
      solution: `**Gitt:**
- $v_{0x} = 15$ m/s (horisontal)
- $v_{0y} = 0$ m/s (kastes horisontalt)
- $y_0 = 80$ m
- $y = 0$ m (bakken)
- $g = 10$ m/s²

**a) Tid til bakken:**

Bruk vertikal bevegelse:
$$y = y_0 + v_{0y} t - \\frac{1}{2}gt^2$$
$$0 = 80 + 0 - 5t^2$$
$$5t^2 = 80$$
$$t^2 = 16$$
$$t = 4 \\text{ s}$$

**Svar a):** 4 sekunder

**b) Horisontal rekkevidde:**

$$x = v_{0x} t = 15 \\cdot 4 = 60 \\text{ m}$$

**Svar b):** 60 m`,
    },
  ],
  exercises: [
    {
      id: 'fys1-2-4-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'En hastighetsvektor har beløp 25 m/s og retning 60° over horisonten. Finn: a) horisontal komponent, b) vertikal komponent.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn horisontal komponent $v_x$.',
          solution: '$v_x = 25 \\cos 60° = 25 \\cdot 0.5 = 12.5$ m/s',
          answer: 12.5,
        },
        {
          label: 'b',
          task: 'Finn vertikal komponent $v_y$.',
          solution: '$v_y = 25 \\sin 60° = 25 \\cdot 0.866 \\approx 21.65$ m/s',
          answer: [21.6, 21.65],
        },
      ],
      solution: `**Gitt:**
- $v = 25$ m/s
- $\\theta = 60°$

**a) Horisontal komponent:**
$$v_x = v \\cos \\theta = 25 \\cos 60° = 25 \\cdot 0.5 = 12.5 \\text{ m/s}$$

**b) Vertikal komponent:**
$$v_y = v \\sin \\theta = 25 \\sin 60° = 25 \\cdot 0.866 \\approx 21.65 \\text{ m/s}$$`,
      hints: ['Bruk $v_x = v \\cos \\theta$ og $v_y = v \\sin \\theta$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-4-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En vektor har komponenter $(v_x, v_y) = (12, 16)$ m/s. Finn: a) beløpet av vektoren, b) retningsvinkelen.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn beløpet.',
          solution: '$v = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$ m/s',
          answer: 20,
        },
        {
          label: 'b',
          task: 'Finn retningsvinkelen.',
          solution: '$\\theta = \\arctan(16/12) = \\arctan(1.333) \\approx 53.1°$',
          answer: [53, 53.1, 53.13],
        },
      ],
      solution: `**Gitt:**
- $(v_x, v_y) = (12, 16)$ m/s

**a) Beløp:**
$$v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20 \\text{ m/s}$$

**b) Retningsvinkel:**
$$\\theta = \\arctan\\left(\\frac{v_y}{v_x}\\right) = \\arctan\\left(\\frac{16}{12}\\right) = \\arctan(1.333) \\approx 53.1°$$`,
      hints: ['Bruk Pythagoras for beløp', 'Bruk arctan for vinkel'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-4-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En ball kastes horisontalt med hastighet 10 m/s fra høyde 20 m. Finn tiden til ballen treffer bakken. Bruk $g = 10$ m/s².',
      solution: `**Gitt:**
- $v_{0x} = 10$ m/s
- $v_{0y} = 0$ m/s
- $y_0 = 20$ m
- $y = 0$ m

**Løsning:**

Vertikal bevegelse:
$$y = y_0 - \\frac{1}{2}gt^2$$
$$0 = 20 - 5t^2$$
$$t^2 = 4$$
$$t = 2 \\text{ s}$$

**Svar:** 2 sekunder`,
      hints: ['Kun vertikal bevegelse påvirker tiden', 'Bruk $y = y_0 - \\frac{1}{2}gt^2$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 2,
    },
    {
      id: 'fys1-2-4-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En ball kastes horisontalt med hastighet 12 m/s fra en bygning 45 m høy. Finn: a) tiden i luften, b) horisontal rekkevidde. Bruk $g = 10$ m/s².',
      subTasks: [
        {
          label: 'a',
          task: 'Finn tiden i luften.',
          solution: '$0 = 45 - 5t^2 \\Rightarrow t^2 = 9 \\Rightarrow t = 3$ s',
          answer: 3,
        },
        {
          label: 'b',
          task: 'Finn horisontal rekkevidde.',
          solution: '$x = v_{0x} t = 12 \\cdot 3 = 36$ m',
          answer: 36,
        },
      ],
      solution: `**Gitt:**
- $v_{0x} = 12$ m/s
- $y_0 = 45$ m
- $g = 10$ m/s²

**a) Tid:**
$$0 = 45 - 5t^2$$
$$t = 3 \\text{ s}$$

**b) Rekkevidde:**
$$x = 12 \\cdot 3 = 36 \\text{ m}$$`,
      hints: ['Først finn tiden fra vertikal bevegelse', 'Deretter bruk $x = v_{0x} t$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-4-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En ball kastes med hastighet 20 m/s i vinkel 30°. Finn maksimal høyde. Bruk $g = 10$ m/s².',
      solution: `**Gitt:**
- $v_0 = 20$ m/s
- $\\theta = 30°$
- $g = 10$ m/s²

**Løsning:**

$$H = \\frac{v_0^2 \\sin^2 \\theta}{2g} = \\frac{20^2 \\cdot (\\sin 30°)^2}{2 \\cdot 10}$$

$$H = \\frac{400 \\cdot 0.5^2}{20} = \\frac{400 \\cdot 0.25}{20} = \\frac{100}{20} = 5 \\text{ m}$$

**Svar:** 5 m`,
      hints: ['Bruk $H = \\frac{v_0^2 \\sin^2 \\theta}{2g}$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 5,
    },
    {
      id: 'fys1-2-4-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En ball kastes med hastighet 25 m/s i vinkel 37° (der $\\sin 37° \\approx 0.6$ og $\\cos 37° \\approx 0.8$). Finn rekkevidde. Bruk $g = 10$ m/s².',
      solution: `**Gitt:**
- $v_0 = 25$ m/s
- $\\theta = 37°$
- $\\sin 37° \\approx 0.6$, $\\cos 37° \\approx 0.8$
- $g = 10$ m/s²

**Løsning:**

$$R = \\frac{v_0^2 \\sin(2\\theta)}{g}$$

Bruk $\\sin(2\\theta) = 2 \\sin \\theta \\cos \\theta$:

$$\\sin(74°) = 2 \\cdot 0.6 \\cdot 0.8 = 0.96$$

$$R = \\frac{25^2 \\cdot 0.96}{10} = \\frac{625 \\cdot 0.96}{10} = \\frac{600}{10} = 60 \\text{ m}$$

**Svar:** 60 m`,
      hints: ['Bruk $R = \\frac{v_0^2 \\sin(2\\theta)}{g}$', 'Bruk $\\sin(2\\theta) = 2 \\sin \\theta \\cos \\theta$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 60,
    },
    {
      id: 'fys1-2-4-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'En ball kastes med hastighet 40 m/s i vinkel 45°. Finn: a) maksimal høyde, b) rekkevidde, c) tid i luften. Bruk $g = 10$ m/s².',
      subTasks: [
        {
          label: 'a',
          task: 'Finn maksimal høyde.',
          solution: '$H = \\frac{40^2 \\cdot 0.5}{20} = \\frac{800}{20} = 40$ m',
          answer: 40,
        },
        {
          label: 'b',
          task: 'Finn rekkevidde.',
          solution: '$R = \\frac{40^2 \\cdot 1}{10} = \\frac{1600}{10} = 160$ m',
          answer: 160,
        },
        {
          label: 'c',
          task: 'Finn tid i luften.',
          solution: '$T = \\frac{2 \\cdot 40 \\cdot 0.707}{10} \\approx 5.66$ s',
          answer: [5.6, 5.66],
        },
      ],
      solution: `**Gitt:**
- $v_0 = 40$ m/s
- $\\theta = 45°$
- $g = 10$ m/s²

**a) Maksimal høyde:**
$$H = \\frac{v_0^2 \\sin^2 45°}{2g} = \\frac{1600 \\cdot 0.5}{20} = 40 \\text{ m}$$

**b) Rekkevidde:**
$$R = \\frac{v_0^2 \\sin 90°}{g} = \\frac{1600}{10} = 160 \\text{ m}$$

**c) Tid i luften:**
$$T = \\frac{2 \\cdot 40 \\cdot 0.707}{10} \\approx 5.66 \\text{ s}$$`,
      hints: ['Ved 45° er $\\sin 45° = \\cos 45° \\approx 0.707$', '$\\sin 90° = 1$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-4-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En fotballspiller sparker en ball med hastighet 20 m/s i vinkel 53° (der $\\sin 53° \\approx 0.8$ og $\\cos 53° \\approx 0.6$). Ballen må gå over en 3 m høy mur 12 m unna. Går ballen over muren? Bruk $g = 10$ m/s².',
      solution: `**Gitt:**
- $v_0 = 20$ m/s
- $\\theta = 53°$
- $\\sin 53° \\approx 0.8$, $\\cos 53° \\approx 0.6$
- Mur: $x = 12$ m, høyde = 3 m
- $g = 10$ m/s²

**Komponenter:**
$$v_{0x} = 20 \\cdot 0.6 = 12 \\text{ m/s}$$
$$v_{0y} = 20 \\cdot 0.8 = 16 \\text{ m/s}$$

**Tid til muren:**
$$t = \\frac{x}{v_{0x}} = \\frac{12}{12} = 1 \\text{ s}$$

**Høyde ved muren:**
$$y = v_{0y} t - \\frac{1}{2}gt^2 = 16 \\cdot 1 - 5 \\cdot 1^2 = 16 - 5 = 11 \\text{ m}$$

**Konklusjon:**
Ballen er 11 m høy ved muren, som er mye høyere enn 3 m.

**Svar:** Ja, ballen går over muren (med god margin: 11 - 3 = 8 m).`,
      hints: ['Finn tiden til å nå muren fra horisontal bevegelse', 'Finn høyden ved den tiden'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-4-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En ball kastes fra bakken med hastighet 30 m/s. Hvilken vinkel gir maksimal rekkevidde, og hva er denne rekkevidden? Bruk $g = 10$ m/s².',
      solution: `**Teori:**

Rekkevidde er gitt ved:
$$R = \\frac{v_0^2 \\sin(2\\theta)}{g}$$

Siden $\\sin(2\\theta)$ er maksimal når $2\\theta = 90°$, er rekkevidde maksimal ved:
$$\\theta = 45°$$

**Løsning:**

**Vinkel:** $\\theta = 45°$

**Maksimal rekkevidde:**
$$R_{\\text{maks}} = \\frac{v_0^2}{g} = \\frac{30^2}{10} = \\frac{900}{10} = 90 \\text{ m}$$

**Svar:** 45° gir maksimal rekkevidde på 90 m.`,
      hints: ['Rekkevidde er maksimal ved 45°', 'Bruk $R = \\frac{v_0^2}{g}$ ved 45°'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-4-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En kanon avfyres fra en klippe 100 m over havet med starthastighet 50 m/s i vinkel 37° over horisonten (der $\\sin 37° \\approx 0.6$ og $\\cos 37° \\approx 0.8$). Finn: a) maksimal høyde over havet, b) horisontal rekkevidde når prosjektilet treffer havet. Bruk $g = 10$ m/s².',
      subTasks: [
        {
          label: 'a',
          task: 'Finn maksimal høyde over havet.',
          solution: 'Høyde over startpunkt: $H = \\frac{50^2 \\cdot 0.6^2}{20} = 45$ m. Total: $100 + 45 = 145$ m',
          answer: 145,
        },
        {
          label: 'b',
          task: 'Finn horisontal rekkevidde.',
          solution: 'Tid: løs $-100 = 30t - 5t^2$. Rekkevidde: $x = 40t$',
        },
      ],
      solution: `**Gitt:**
- $v_0 = 50$ m/s
- $\\theta = 37°$
- $y_0 = 100$ m
- $\\sin 37° \\approx 0.6$, $\\cos 37° \\approx 0.8$
- $g = 10$ m/s²

**Komponenter:**
$$v_{0x} = 50 \\cdot 0.8 = 40 \\text{ m/s}$$
$$v_{0y} = 50 \\cdot 0.6 = 30 \\text{ m/s}$$

**a) Maksimal høyde:**

Høyde over startpunkt:
$$H = \\frac{v_{0y}^2}{2g} = \\frac{30^2}{20} = \\frac{900}{20} = 45 \\text{ m}$$

Maksimal høyde over havet:
$$y_{\\text{maks}} = y_0 + H = 100 + 45 = 145 \\text{ m}$$

**Svar a):** 145 m

**b) Horisontal rekkevidde:**

Finn tiden når $y = 0$ (havet):
$$y = y_0 + v_{0y} t - \\frac{1}{2}gt^2$$
$$0 = 100 + 30t - 5t^2$$
$$5t^2 - 30t - 100 = 0$$
$$t^2 - 6t - 20 = 0$$

Abc-formel:
$$t = \\frac{6 + \\sqrt{36 + 80}}{2} = \\frac{6 + \\sqrt{116}}{2} = \\frac{6 + 10.77}{2} \\approx 8.39 \\text{ s}$$

Rekkevidde:
$$x = v_{0x} t = 40 \\cdot 8.39 \\approx 335.6 \\text{ m}$$

**Svar b):** 336 m`,
      hints: ['Maksimal høyde = starthøyde + ekstra høyde', 'Bruk abc-formelen for å finne tiden'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
