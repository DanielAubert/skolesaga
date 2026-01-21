/**
 * Fysikk 1 - Kapittel 2.2: Rettlinjet bevegelse med konstant fart
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_2_2: TextbookChapter = {
  id: 'fys1-2-2',
  courseId: 'fys1',
  chapterNumber: '2.2',
  title: 'Rettlinjet bevegelse med konstant fart',
  description: 'Lær om rettlinjet bevegelse med konstant fart, bevegelseslikninger og tolkning av s-t og v-t diagrammer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke bevegelseslikningen $s = vt$ for konstant fart',
    'tegne og tolke s-t diagrammer',
    'tegne og tolke v-t diagrammer',
    'finne strekning fra v-t diagrammer',
  ],
  content: [
    {
      id: 'fys1-2-2-intro',
      type: 'text',
      content: `# Rettlinjet bevegelse med konstant fart

Når et objekt beveger seg langs en rett linje med **konstant fart**, er dette den enkleste formen for bevegelse i kinematikk.

## Hva er konstant fart?

**Konstant fart** betyr at hastigheten ikke endrer seg over tid:
- Beløpet av hastigheten er konstant
- Retningen av hastigheten er konstant
- Akselerasjonen er null ($a = 0$)

**Eksempler:**
- Bil på motorvei med fartsholder (cruise control)
- Tog som kjører med jevn hastighet
- Flyet i horisontal flukt med konstant fart`,
    },
    {
      id: 'fys1-2-2-likning',
      type: 'text',
      content: `# Bevegelseslikningen for konstant fart

Når farten er konstant, er sammenhengen mellom tilbakelagt strekning, fart og tid gitt ved:

$$s = v \\cdot t$$

der:
- $s$ = tilbakelagt strekning (m)
- $v$ = konstant fart (m/s)
- $t$ = tid (s)

## Utvidelse med startposisjon

Hvis objektet starter ved posisjon $s_0$ (ikke ved origo), blir likningen:

$$s = s_0 + vt$$

der:
- $s$ = posisjon ved tid $t$ (m)
- $s_0$ = startposisjon (m)
- $v$ = konstant fart (m/s)
- $t$ = tid (s)

**Merk:** Dette er en **lineær likning** på formen $y = mx + c$, der $s$ tilsvarer $y$, $t$ tilsvarer $x$, $v$ er stigningstallet (helning), og $s_0$ er konstantleddet.`,
    },
    {
      id: 'fys1-2-2-def-konstant-fart',
      type: 'definition',
      title: 'Bevegelseslikning for konstant fart',
      content: 'For et objekt som beveger seg med konstant fart $v$ fra startposisjon $s_0$, er posisjonen ved tid $t$ gitt ved: $s = s_0 + vt$.',
    },
    {
      id: 'fys1-2-2-ex-1',
      type: 'example',
      title: 'Eksempel 1: Bil med konstant fart',
      problem: 'En bil kjører med konstant fart 20 m/s. Bilen starter ved posisjon $s_0 = 100$ m. Finn: a) posisjonen etter 10 sekunder, b) tiden det tar å komme til posisjon 500 m.',
      solution: `**Gitt:**
- Fart: $v = 20$ m/s
- Startposisjon: $s_0 = 100$ m

**a) Posisjon etter 10 sekunder:**

Bruk $s = s_0 + vt$:

$$s = 100 + 20 \\cdot 10 = 100 + 200 = 300 \\text{ m}$$

**Svar a):** 300 m

**b) Tid til posisjon 500 m:**

Bruk $s = s_0 + vt$ og løs for $t$:

$$500 = 100 + 20t$$
$$400 = 20t$$
$$t = \\frac{400}{20} = 20 \\text{ s}$$

**Svar b):** 20 sekunder`,
    },
    {
      id: 'fys1-2-2-st-diagram',
      type: 'text',
      content: `# s-t diagram (posisjon-tid diagram)

Et **s-t diagram** viser hvordan posisjonen $s$ endrer seg med tiden $t$.

## Diagram for konstant fart

For konstant fart ($s = s_0 + vt$) er s-t diagrammet en **rett linje**.

**Egenskaper:**
- **Stigningstall (helning):** Farten $v$
- **Y-skjæring:** Startposisjonen $s_0$
- **Rett linje:** Konstant fart

**Tolkning:**

**Positiv helning ($v > 0$):**
- Objektet beveger seg i positiv retning
- Posisjonen øker med tiden

**Negativ helning ($v < 0$):**
- Objektet beveger seg i negativ retning
- Posisjonen minker med tiden

**Horisontal linje ($v = 0$):**
- Objektet står stille
- Posisjonen er konstant

**Bratt linje:**
- Høy fart
- Stor endring i posisjon per tidsenhet

**Slak linje:**
- Lav fart
- Liten endring i posisjon per tidsenhet

## Finne fart fra s-t diagram

Farten kan finnes fra stigningstallet (helningen) i s-t diagrammet:

$$v = \\frac{\\Delta s}{\\Delta t} = \\frac{s_2 - s_1}{t_2 - t_1}$$

Dette er **helningen** av linjen i diagrammet.`,
    },
    {
      id: 'fys1-2-2-vt-diagram',
      type: 'text',
      content: `# v-t diagram (hastighet-tid diagram)

Et **v-t diagram** viser hvordan hastigheten $v$ endrer seg med tiden $t$.

## Diagram for konstant fart

For konstant fart er v-t diagrammet en **horisontal linje**.

**Egenskaper:**
- **Horisontal linje:** Hastigheten er konstant
- **Høyde:** Farten $v$
- **Arealet under kurven:** Tilbakelagt strekning

## Finne strekning fra v-t diagram

Tilbakelagt strekning kan finnes fra **arealet under kurven** i v-t diagrammet.

**For konstant fart:**

$$s = \\text{Areal} = v \\cdot t$$

Dette er arealet av rektangelet mellom kurven og t-aksen.

**Eksempel:**
- Fart: $v = 15$ m/s
- Tid: $t = 8$ s
- Strekning: $s = 15 \\cdot 8 = 120$ m

**Tolkning:**

**Positiv hastighet ($v > 0$):**
- Bevegelse i positiv retning
- Areal over t-aksen

**Negativ hastighet ($v < 0$):**
- Bevegelse i negativ retning
- Areal under t-aksen

**$v = 0$:**
- Objektet står stille
- Ingen strekning tilbakelagt`,
    },
    {
      id: 'fys1-2-2-note-areal',
      type: 'note',
      title: 'Viktig regel',
      content: 'I et v-t diagram representerer **arealet under kurven** tilbakelagt strekning. Dette gjelder for alle typer bevegelse, ikke bare konstant fart.',
    },
    {
      id: 'fys1-2-2-ex-2',
      type: 'example',
      title: 'Eksempel 2: Tolkning av s-t diagram',
      problem: 'Et s-t diagram viser en rett linje fra $(0, 50)$ til $(10, 150)$. Finn: a) startposisjonen, b) farten, c) posisjonen ved $t = 15$ s.',
      solution: `**Gitt fra diagram:**
- Punkt 1: $(t_1, s_1) = (0, 50)$
- Punkt 2: $(t_2, s_2) = (10, 150)$

**a) Startposisjon:**

Ved $t = 0$ er $s = 50$ m.

**Svar a):** $s_0 = 50$ m

**b) Fart:**

Farten er helningen av linjen:

$$v = \\frac{\\Delta s}{\\Delta t} = \\frac{s_2 - s_1}{t_2 - t_1} = \\frac{150 - 50}{10 - 0} = \\frac{100}{10} = 10 \\text{ m/s}$$

**Svar b):** $v = 10$ m/s

**c) Posisjon ved $t = 15$ s:**

Bruk $s = s_0 + vt$:

$$s = 50 + 10 \\cdot 15 = 50 + 150 = 200 \\text{ m}$$

**Svar c):** 200 m`,
    },
    {
      id: 'fys1-2-2-ex-3',
      type: 'example',
      title: 'Eksempel 3: v-t diagram og strekning',
      problem: 'Et v-t diagram viser konstant hastighet $v = 12$ m/s fra $t = 0$ s til $t = 15$ s. Finn tilbakelagt strekning.',
      solution: `**Gitt:**
- Hastighet: $v = 12$ m/s (konstant)
- Tid: $t = 15$ s

**Løsning:**

Tilbakelagt strekning = arealet under kurven i v-t diagrammet.

For konstant fart er dette et rektangel:

$$s = v \\cdot t = 12 \\cdot 15 = 180 \\text{ m}$$

**Svar:** 180 m

**Visualisering:**
- Bredde av rektangel: 15 s
- Høyde av rektangel: 12 m/s
- Areal: $15 \\times 12 = 180$ m`,
    },
  ],
  exercises: [
    {
      id: 'fys1-2-2-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'En bil kjører med konstant fart 25 m/s. Hvor langt kjører bilen på 8 sekunder?',
      solution: `**Gitt:**
- Fart: $v = 25$ m/s
- Tid: $t = 8$ s

**Løsning:**

$$s = vt = 25 \\cdot 8 = 200 \\text{ m}$$

**Svar:** 200 m`,
      hints: ['Bruk $s = vt$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 200,
    },
    {
      id: 'fys1-2-2-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En syklist sykler 600 m på 40 sekunder med konstant fart. Finn farten.',
      solution: `**Gitt:**
- Strekning: $s = 600$ m
- Tid: $t = 40$ s

**Løsning:**

$$v = \\frac{s}{t} = \\frac{600}{40} = 15 \\text{ m/s}$$

**Svar:** 15 m/s`,
      hints: ['Bruk $v = \\frac{s}{t}$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 15,
    },
    {
      id: 'fys1-2-2-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Et tog kjører med konstant fart 30 m/s. Hvor lang tid tar det å kjøre 2100 m?',
      solution: `**Gitt:**
- Fart: $v = 30$ m/s
- Strekning: $s = 2100$ m

**Løsning:**

$$t = \\frac{s}{v} = \\frac{2100}{30} = 70 \\text{ s}$$

**Svar:** 70 sekunder`,
      hints: ['Bruk $t = \\frac{s}{v}$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 70,
    },
    {
      id: 'fys1-2-2-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bil starter ved posisjon $s_0 = 200$ m og kjører med konstant fart $v = 18$ m/s. Finn: a) posisjonen etter 12 sekunder, b) tiden når bilen er ved posisjon 500 m.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn posisjonen etter 12 sekunder.',
          solution: '$s = s_0 + vt = 200 + 18 \\cdot 12 = 200 + 216 = 416$ m',
          answer: 416,
        },
        {
          label: 'b',
          task: 'Finn tiden når bilen er ved posisjon 500 m.',
          solution: '$500 = 200 + 18t \\Rightarrow 300 = 18t \\Rightarrow t = \\frac{300}{18} = 16.67$ s',
          answer: [16.6, 16.67],
        },
      ],
      solution: `**Gitt:**
- Startposisjon: $s_0 = 200$ m
- Fart: $v = 18$ m/s

**a) Posisjon etter 12 sekunder:**

$$s = s_0 + vt = 200 + 18 \\cdot 12 = 200 + 216 = 416 \\text{ m}$$

**Svar a):** 416 m

**b) Tid til posisjon 500 m:**

$$s = s_0 + vt$$
$$500 = 200 + 18t$$
$$300 = 18t$$
$$t = \\frac{300}{18} \\approx 16.67 \\text{ s}$$

**Svar b):** 16.67 sekunder`,
      hints: ['Bruk $s = s_0 + vt$', 'For b): Løs likningen for $t$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-2-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Et s-t diagram viser en rett linje fra punkt $(0, 0)$ til punkt $(20, 300)$. Finn: a) farten, b) posisjonen ved $t = 25$ s.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn farten.',
          solution: '$v = \\frac{\\Delta s}{\\Delta t} = \\frac{300 - 0}{20 - 0} = \\frac{300}{20} = 15$ m/s',
          answer: 15,
        },
        {
          label: 'b',
          task: 'Finn posisjonen ved $t = 25$ s.',
          solution: '$s = vt = 15 \\cdot 25 = 375$ m',
          answer: 375,
        },
      ],
      solution: `**Gitt fra diagram:**
- Punkt 1: $(t_1, s_1) = (0, 0)$
- Punkt 2: $(t_2, s_2) = (20, 300)$

**a) Fart:**

Farten er helningen av linjen:

$$v = \\frac{\\Delta s}{\\Delta t} = \\frac{s_2 - s_1}{t_2 - t_1} = \\frac{300 - 0}{20 - 0} = \\frac{300}{20} = 15 \\text{ m/s}$$

**Svar a):** 15 m/s

**b) Posisjon ved $t = 25$ s:**

$$s = vt = 15 \\cdot 25 = 375 \\text{ m}$$

**Svar b):** 375 m`,
      hints: ['Fart = helning i s-t diagram', 'Bruk $v = \\frac{\\Delta s}{\\Delta t}$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-2-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Et v-t diagram viser konstant hastighet $v = 8$ m/s fra $t = 5$ s til $t = 20$ s. Finn tilbakelagt strekning i dette tidsintervallet.',
      solution: `**Gitt:**
- Hastighet: $v = 8$ m/s (konstant)
- Starttid: $t_1 = 5$ s
- Sluttid: $t_2 = 20$ s
- Tidsintervall: $\\Delta t = 20 - 5 = 15$ s

**Løsning:**

Strekning = areal under kurven = $v \\cdot \\Delta t$

$$s = 8 \\cdot 15 = 120 \\text{ m}$$

**Svar:** 120 m`,
      hints: ['Areal under kurven i v-t diagram = strekning', 'Bruk $s = v \\cdot \\Delta t$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 120,
    },
    {
      id: 'fys1-2-2-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'To biler kjører i samme retning. Bil A starter ved $s_0 = 0$ m med fart 20 m/s. Bil B starter ved $s_0 = 300$ m med fart 15 m/s. Når og hvor møtes bilene?',
      solution: `**Gitt:**
- Bil A: $s_A = 0 + 20t$
- Bil B: $s_B = 300 + 15t$

**Løsning:**

Bilene møtes når $s_A = s_B$:

$$20t = 300 + 15t$$
$$20t - 15t = 300$$
$$5t = 300$$
$$t = 60 \\text{ s}$$

**Posisjon:**
$$s_A = 20 \\cdot 60 = 1200 \\text{ m}$$

**Kontroll:**
$$s_B = 300 + 15 \\cdot 60 = 300 + 900 = 1200 \\text{ m}$$ ✓

**Svar:** Bilene møtes etter 60 sekunder ved posisjon 1200 m.`,
      hints: ['Sett opp likninger for begge bilene', 'Bilene møtes når $s_A = s_B$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-2-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et s-t diagram viser to linjer: Linje A går fra $(0, 0)$ til $(10, 100)$. Linje B går fra $(0, 150)$ til $(10, 50)$. Finn: a) farten til objekt A, b) farten til objekt B, c) når og hvor objektene møtes.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn farten til objekt A.',
          solution: '$v_A = \\frac{100 - 0}{10 - 0} = 10$ m/s',
          answer: 10,
        },
        {
          label: 'b',
          task: 'Finn farten til objekt B.',
          solution: '$v_B = \\frac{50 - 150}{10 - 0} = \\frac{-100}{10} = -10$ m/s',
          answer: -10,
        },
        {
          label: 'c',
          task: 'Finn tidspunkt og posisjon der objektene møtes.',
          solution: '$s_A = 10t$ og $s_B = 150 - 10t$. Møtes når $10t = 150 - 10t \\Rightarrow 20t = 150 \\Rightarrow t = 7.5$ s. Posisjon: $s = 75$ m',
        },
      ],
      solution: `**Gitt:**
- Linje A: $(0, 0)$ til $(10, 100)$
- Linje B: $(0, 150)$ til $(10, 50)$

**a) Fart til objekt A:**

$$v_A = \\frac{\\Delta s}{\\Delta t} = \\frac{100 - 0}{10 - 0} = 10 \\text{ m/s}$$

Likning: $s_A = 10t$

**Svar a):** 10 m/s

**b) Fart til objekt B:**

$$v_B = \\frac{\\Delta s}{\\Delta t} = \\frac{50 - 150}{10 - 0} = \\frac{-100}{10} = -10 \\text{ m/s}$$

Likning: $s_B = 150 - 10t$

**Svar b):** -10 m/s (negativ = beveger seg i negativ retning)

**c) Når og hvor møtes objektene:**

Møtes når $s_A = s_B$:

$$10t = 150 - 10t$$
$$20t = 150$$
$$t = 7.5 \\text{ s}$$

Posisjon:
$$s = 10 \\cdot 7.5 = 75 \\text{ m}$$

**Kontroll:**
$$s_B = 150 - 10 \\cdot 7.5 = 150 - 75 = 75 \\text{ m}$$ ✓

**Svar c):** Objektene møtes etter 7.5 sekunder ved posisjon 75 m.`,
      hints: ['Negativ fart betyr bevegelse i negativ retning', 'Finn bevegelseslikninger for begge', 'Møtes når $s_A = s_B$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
