/**
 * Fysikk 1 - Kapittel 2.3: Rettlinjet bevegelse med konstant akselerasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_2_3: TextbookChapter = {
  id: 'fys1-2-3',
  courseId: 'fys1',
  chapterNumber: '2.3',
  title: 'Rettlinjet bevegelse med konstant akselerasjon',
  description: 'Lær om bevegelseslikningene for konstant akselerasjon og fritt fall med tyngdeakselerasjonen.',
  estimatedMinutes: 70,
  competenceGoals: [
    'bruke bevegelseslikningene for konstant akselerasjon',
    'løse problemer med rettlinjet bevegelse med konstant akselerasjon',
    'anvende bevegelseslikningene på fritt fall',
    'forklare tyngdeakselerasjonen $g = 9.81$ m/s²',
  ],
  content: [
    {
      id: 'fys1-2-3-intro',
      type: 'text',
      content: `# Rettlinjet bevegelse med konstant akselerasjon

Når et objekt beveger seg langs en rett linje med **konstant akselerasjon**, endrer hastigheten seg med en konstant rate over tid.

## Hva er konstant akselerasjon?

**Konstant akselerasjon** betyr at akselerasjonen ikke endrer seg over tid:
- Akselerasjonen $a$ er konstant
- Hastigheten endrer seg lineært med tiden
- Posisjonen endrer seg kvadratisk med tiden

**Eksempler:**
- Bil som akselererer jevnt fra stans
- Bil som bremser jevnt
- Objekt i fritt fall (tyngdeakselerasjon)
- Rakett med konstant thrust`,
    },
    {
      id: 'fys1-2-3-likninger',
      type: 'text',
      content: `# Bevegelseslikningene for konstant akselerasjon

Det finnes tre hovedlikninger for rettlinjet bevegelse med konstant akselerasjon:

## 1. Hastighetsligning

$$v = v_0 + at$$

der:
- $v$ = hastighet ved tid $t$ (m/s)
- $v_0$ = starthastighet (m/s)
- $a$ = akselerasjon (m/s²)
- $t$ = tid (s)

**Forklaring:** Hastigheten øker lineært med tiden når akselerasjonen er konstant.

## 2. Posisjonsligning

$$s = s_0 + v_0 t + \\frac{1}{2}at^2$$

der:
- $s$ = posisjon ved tid $t$ (m)
- $s_0$ = startposisjon (m)
- $v_0$ = starthastighet (m/s)
- $a$ = akselerasjon (m/s²)
- $t$ = tid (s)

**Forklaring:** Posisjonen endrer seg kvadratisk med tiden når akselerasjonen er konstant.

## 3. Hastighetsligning uten tid

$$v^2 = v_0^2 + 2a(s - s_0)$$

eller

$$v^2 = v_0^2 + 2as$$

(når $s_0 = 0$)

der:
- $v$ = sluttfart (m/s)
- $v_0$ = startfart (m/s)
- $a$ = akselerasjon (m/s²)
- $s$ = tilbakelagt strekning (m)

**Forklaring:** Denne likningen kobler fart, akselerasjon og strekning uten å involvere tid.

## Når bruker vi hvilken likning?

**Bruk likning 1** ($v = v_0 + at$) når:
- Du har $v_0$, $a$, $t$ og skal finne $v$
- Du har $v$, $v_0$, $a$ og skal finne $t$

**Bruk likning 2** ($s = s_0 + v_0 t + \\frac{1}{2}at^2$) når:
- Du har $s_0$, $v_0$, $a$, $t$ og skal finne $s$
- Du har $s$, $s_0$, $v_0$, $a$ og skal finne $t$

**Bruk likning 3** ($v^2 = v_0^2 + 2as$) når:
- Du ikke har eller trenger tid $t$
- Du har $v_0$, $a$, $s$ og skal finne $v$
- Du har $v$, $v_0$, $a$ og skal finne $s$`,
    },
    {
      id: 'fys1-2-3-def-bevegelseslikninger',
      type: 'definition',
      title: 'Bevegelseslikningene for konstant akselerasjon',
      content: 'For rettlinjet bevegelse med konstant akselerasjon $a$ gjelder: (1) $v = v_0 + at$, (2) $s = s_0 + v_0 t + \\frac{1}{2}at^2$, (3) $v^2 = v_0^2 + 2a(s - s_0)$.',
    },
    {
      id: 'fys1-2-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Bil som akselererer',
      problem: 'En bil akselererer fra stans med akselerasjon $a = 2$ m/s². Finn: a) hastigheten etter 10 sekunder, b) tilbakelagt strekning etter 10 sekunder.',
      solution: `**Gitt:**
- Starthastighet: $v_0 = 0$ m/s (stans)
- Akselerasjon: $a = 2$ m/s²
- Tid: $t = 10$ s

**a) Hastighet etter 10 sekunder:**

Bruk $v = v_0 + at$:

$$v = 0 + 2 \\cdot 10 = 20 \\text{ m/s}$$

**Svar a):** 20 m/s

**b) Tilbakelagt strekning:**

Bruk $s = v_0 t + \\frac{1}{2}at^2$ (med $s_0 = 0$):

$$s = 0 \\cdot 10 + \\frac{1}{2} \\cdot 2 \\cdot 10^2 = 0 + 1 \\cdot 100 = 100 \\text{ m}$$

**Svar b):** 100 m`,
    },
    {
      id: 'fys1-2-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Bil som bremser',
      problem: 'En bil kjører med hastighet 25 m/s og bremser med akselerasjon $a = -5$ m/s². Finn: a) tiden det tar til bilen stopper, b) bremselengden.',
      solution: `**Gitt:**
- Starthastighet: $v_0 = 25$ m/s
- Sluttfart: $v = 0$ m/s (stopper)
- Akselerasjon: $a = -5$ m/s² (negativ = retardasjon)

**a) Tid til stans:**

Bruk $v = v_0 + at$:

$$0 = 25 + (-5)t$$
$$5t = 25$$
$$t = 5 \\text{ s}$$

**Svar a):** 5 sekunder

**b) Bremselengde:**

Bruk $v^2 = v_0^2 + 2as$:

$$0^2 = 25^2 + 2 \\cdot (-5) \\cdot s$$
$$0 = 625 - 10s$$
$$10s = 625$$
$$s = 62.5 \\text{ m}$$

**Svar b):** 62.5 m`,
    },
    {
      id: 'fys1-2-3-fritt-fall',
      type: 'text',
      content: `# Fritt fall

**Fritt fall** er bevegelse under påvirkning av bare tyngdekraften, uten luftmotstand.

## Tyngdeakselerasjon

Alle objekter i fritt fall nær jordoverflaten har samme akselerasjon:

$$g = 9.81 \\text{ m/s}^2$$

Dette kalles **tyngdeakselerasjonen** eller **gravitasjonsakselerasjonen**.

**Viktig:**
- $g$ er alltid **positiv** (9.81 m/s²)
- Retningen velges ved å definere koordinatsystemet
- Hvis vi velger opp som positiv retning, er $a = -g = -9.81$ m/s²
- Hvis vi velger ned som positiv retning, er $a = +g = +9.81$ m/s²

## Bevegelseslikninger for fritt fall

**Med opp som positiv retning:**

$$v = v_0 - gt$$
$$y = y_0 + v_0 t - \\frac{1}{2}gt^2$$
$$v^2 = v_0^2 - 2g(y - y_0)$$

der $y$ er høyde.

**Med ned som positiv retning:**

$$v = v_0 + gt$$
$$y = y_0 + v_0 t + \\frac{1}{2}gt^2$$
$$v^2 = v_0^2 + 2g(y - y_0)$$

## Egenskaper ved fritt fall

**1. Symmetri:**
- Tiden opp = tiden ned
- Starthastighet = slutthastighet (motsatt retning)

**2. Toppunkt:**
- Hastigheten er null ved høyeste punkt
- Akselerasjonen er fortsatt $-g$ (ikke null!)

**3. Uavhengig av masse:**
- Alle objekter faller like raskt (uten luftmotstand)
- En fjær og en stein faller like raskt i vakuum`,
    },
    {
      id: 'fys1-2-3-note-g',
      type: 'note',
      title: 'Merk',
      content: 'I oppgaver bruker vi ofte $g = 10$ m/s² for å forenkle regningen, men det nøyaktige verdien er $g = 9.81$ m/s² (eller 9.807 m/s² for enda mer presisjon).',
    },
    {
      id: 'fys1-2-3-ex-3',
      type: 'example',
      title: 'Eksempel 3: Fritt fall fra hvile',
      problem: 'En stein slippes fra en klippe 45 m over bakken. Finn: a) tiden det tar til steinen treffer bakken, b) farten når den treffer bakken. Bruk $g = 10$ m/s².',
      solution: `**Gitt:**
- Starthøyde: $y_0 = 45$ m
- Slutthøyde: $y = 0$ m (bakken)
- Starthastighet: $v_0 = 0$ m/s (slippes)
- Akselerasjon: $a = -g = -10$ m/s² (opp er positiv retning)

**a) Tid til bakken:**

Bruk $y = y_0 + v_0 t + \\frac{1}{2}at^2$:

$$0 = 45 + 0 \\cdot t + \\frac{1}{2} \\cdot (-10) \\cdot t^2$$
$$0 = 45 - 5t^2$$
$$5t^2 = 45$$
$$t^2 = 9$$
$$t = 3 \\text{ s}$$

(Vi tar positiv rot siden tid må være positiv)

**Svar a):** 3 sekunder

**b) Fart ved bakken:**

Bruk $v = v_0 + at$:

$$v = 0 + (-10) \\cdot 3 = -30 \\text{ m/s}$$

Beløp: $|v| = 30$ m/s

Alternativt, bruk $v^2 = v_0^2 + 2a(y - y_0)$:

$$v^2 = 0^2 + 2 \\cdot (-10) \\cdot (0 - 45)$$
$$v^2 = -20 \\cdot (-45) = 900$$
$$v = -30 \\text{ m/s}$$

(Negativ fordi steinen beveger seg nedover)

**Svar b):** 30 m/s nedover`,
    },
    {
      id: 'fys1-2-3-ex-4',
      type: 'example',
      title: 'Eksempel 4: Kaste ball oppover',
      problem: 'En ball kastes rett opp med starthastighet 20 m/s fra bakken. Finn: a) maksimal høyde, b) tiden til ballen når maksimal høyde, c) tiden til ballen er tilbake på bakken. Bruk $g = 10$ m/s².',
      solution: `**Gitt:**
- Starthøyde: $y_0 = 0$ m (bakken)
- Starthastighet: $v_0 = 20$ m/s (oppover)
- Akselerasjon: $a = -g = -10$ m/s²

**a) Maksimal høyde:**

Ved maksimal høyde er $v = 0$ m/s. Bruk $v^2 = v_0^2 + 2a(y - y_0)$:

$$0^2 = 20^2 + 2 \\cdot (-10) \\cdot (y - 0)$$
$$0 = 400 - 20y$$
$$20y = 400$$
$$y = 20 \\text{ m}$$

**Svar a):** 20 m

**b) Tid til maksimal høyde:**

Bruk $v = v_0 + at$:

$$0 = 20 + (-10)t$$
$$10t = 20$$
$$t = 2 \\text{ s}$$

**Svar b):** 2 sekunder

**c) Tid tilbake til bakken:**

Ved symmetri: Tid opp = tid ned

Total tid = $2 \\times 2 = 4$ s

Alternativt, bruk $y = y_0 + v_0 t + \\frac{1}{2}at^2$:

$$0 = 0 + 20t + \\frac{1}{2} \\cdot (-10) \\cdot t^2$$
$$0 = 20t - 5t^2$$
$$5t^2 = 20t$$
$$t(5t - 20) = 0$$
$$t = 0 \\text{ eller } t = 4 \\text{ s}$$

($t = 0$ er starttidspunkt, $t = 4$ s er når ballen er tilbake)

**Svar c):** 4 sekunder`,
    },
  ],
  exercises: [
    {
      id: 'fys1-2-3-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'En bil akselererer fra stans med akselerasjon 3 m/s². Finn hastigheten etter 8 sekunder.',
      solution: `**Gitt:**
- $v_0 = 0$ m/s
- $a = 3$ m/s²
- $t = 8$ s

**Løsning:**

$$v = v_0 + at = 0 + 3 \\cdot 8 = 24 \\text{ m/s}$$

**Svar:** 24 m/s`,
      hints: ['Bruk $v = v_0 + at$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 24,
    },
    {
      id: 'fys1-2-3-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En motorsykkel akselererer fra 10 m/s til 30 m/s på 4 sekunder. Finn akselerasjonen.',
      solution: `**Gitt:**
- $v_0 = 10$ m/s
- $v = 30$ m/s
- $t = 4$ s

**Løsning:**

Fra $v = v_0 + at$:

$$a = \\frac{v - v_0}{t} = \\frac{30 - 10}{4} = \\frac{20}{4} = 5 \\text{ m/s}^2$$

**Svar:** 5 m/s²`,
      hints: ['Bruk $v = v_0 + at$ og løs for $a$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 5,
    },
    {
      id: 'fys1-2-3-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En bil kjører med hastighet 20 m/s og bremser med akselerasjon -4 m/s². Finn: a) tiden til bilen stopper, b) bremselengden.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn tiden til bilen stopper.',
          solution: '$v = v_0 + at \\Rightarrow 0 = 20 + (-4)t \\Rightarrow t = 5$ s',
          answer: 5,
        },
        {
          label: 'b',
          task: 'Finn bremselengden.',
          solution: '$v^2 = v_0^2 + 2as \\Rightarrow 0 = 20^2 + 2(-4)s \\Rightarrow s = 50$ m',
          answer: 50,
        },
      ],
      solution: `**Gitt:**
- $v_0 = 20$ m/s
- $v = 0$ m/s (stopper)
- $a = -4$ m/s²

**a) Tid til stans:**

$$v = v_0 + at$$
$$0 = 20 + (-4)t$$
$$4t = 20$$
$$t = 5 \\text{ s}$$

**Svar a):** 5 sekunder

**b) Bremselengde:**

$$v^2 = v_0^2 + 2as$$
$$0 = 20^2 + 2 \\cdot (-4) \\cdot s$$
$$0 = 400 - 8s$$
$$s = 50 \\text{ m}$$

**Svar b):** 50 m`,
      hints: ['For a): Bruk $v = v_0 + at$', 'For b): Bruk $v^2 = v_0^2 + 2as$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-3-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bil akselererer fra stans med akselerasjon 2.5 m/s². Finn tilbakelagt strekning etter 6 sekunder.',
      solution: `**Gitt:**
- $v_0 = 0$ m/s
- $a = 2.5$ m/s²
- $t = 6$ s

**Løsning:**

$$s = v_0 t + \\frac{1}{2}at^2 = 0 + \\frac{1}{2} \\cdot 2.5 \\cdot 6^2 = 1.25 \\cdot 36 = 45 \\text{ m}$$

**Svar:** 45 m`,
      hints: ['Bruk $s = v_0 t + \\frac{1}{2}at^2$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 45,
    },
    {
      id: 'fys1-2-3-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bil akselererer fra 15 m/s til 35 m/s over en strekning på 200 m. Finn akselerasjonen.',
      solution: `**Gitt:**
- $v_0 = 15$ m/s
- $v = 35$ m/s
- $s = 200$ m

**Løsning:**

Bruk $v^2 = v_0^2 + 2as$:

$$35^2 = 15^2 + 2 \\cdot a \\cdot 200$$
$$1225 = 225 + 400a$$
$$1000 = 400a$$
$$a = 2.5 \\text{ m/s}^2$$

**Svar:** 2.5 m/s²`,
      hints: ['Bruk $v^2 = v_0^2 + 2as$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 2.5,
    },
    {
      id: 'fys1-2-3-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En stein slippes fra en bro 80 m over vannet. Finn: a) tiden til steinen treffer vannet, b) farten når den treffer vannet. Bruk $g = 10$ m/s².',
      subTasks: [
        {
          label: 'a',
          task: 'Finn tiden til steinen treffer vannet.',
          solution: '$0 = 80 - 5t^2 \\Rightarrow t^2 = 16 \\Rightarrow t = 4$ s',
          answer: 4,
        },
        {
          label: 'b',
          task: 'Finn farten når steinen treffer vannet.',
          solution: '$v = 0 + 10 \\cdot 4 = 40$ m/s (eller $v^2 = 0 + 2 \\cdot 10 \\cdot 80 = 1600 \\Rightarrow v = 40$ m/s)',
          answer: 40,
        },
      ],
      solution: `**Gitt:**
- $y_0 = 80$ m
- $y = 0$ m
- $v_0 = 0$ m/s
- $a = -g = -10$ m/s² (opp er positiv)

**a) Tid:**

$$y = y_0 + v_0 t + \\frac{1}{2}at^2$$
$$0 = 80 + 0 - 5t^2$$
$$5t^2 = 80$$
$$t^2 = 16$$
$$t = 4 \\text{ s}$$

**Svar a):** 4 sekunder

**b) Fart:**

$$v = v_0 + at = 0 + (-10) \\cdot 4 = -40 \\text{ m/s}$$

Beløp: 40 m/s nedover

**Svar b):** 40 m/s`,
      hints: ['Bruk $y = y_0 + v_0 t + \\frac{1}{2}at^2$', 'Bruk $v = v_0 + at$ eller $v^2 = v_0^2 + 2a\\Delta y$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-3-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'En ball kastes rett opp med starthastighet 15 m/s. Finn maksimal høyde. Bruk $g = 10$ m/s².',
      solution: `**Gitt:**
- $v_0 = 15$ m/s
- $v = 0$ m/s (ved topp)
- $a = -g = -10$ m/s²
- $y_0 = 0$ m

**Løsning:**

$$v^2 = v_0^2 + 2a(y - y_0)$$
$$0 = 15^2 + 2 \\cdot (-10) \\cdot y$$
$$0 = 225 - 20y$$
$$y = 11.25 \\text{ m}$$

**Svar:** 11.25 m`,
      hints: ['Ved maksimal høyde er $v = 0$', 'Bruk $v^2 = v_0^2 + 2a\\Delta y$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
      answer: 11.25,
    },
    {
      id: 'fys1-2-3-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'medium',
      task: 'En rakett akselererer oppover fra stans med akselerasjon 20 m/s² i 5 sekunder. Deretter slås motoren av. Finn: a) hastigheten når motoren slås av, b) høyden når motoren slås av, c) maksimal høyde (bruk $g = 10$ m/s²).',
      subTasks: [
        {
          label: 'a',
          task: 'Finn hastigheten når motoren slås av.',
          solution: '$v = 0 + 20 \\cdot 5 = 100$ m/s',
          answer: 100,
        },
        {
          label: 'b',
          task: 'Finn høyden når motoren slås av.',
          solution: '$y = 0 + \\frac{1}{2} \\cdot 20 \\cdot 5^2 = 250$ m',
          answer: 250,
        },
        {
          label: 'c',
          task: 'Finn maksimal høyde.',
          solution: 'Etter motor av: $0 = 100^2 + 2(-10)\\Delta y \\Rightarrow \\Delta y = 500$ m. Total: $250 + 500 = 750$ m',
          answer: 750,
        },
      ],
      solution: `**Fase 1: Motor på (0-5 s)**

**Gitt:**
- $v_0 = 0$ m/s
- $a = 20$ m/s²
- $t = 5$ s

**a) Hastighet når motor slås av:**

$$v = v_0 + at = 0 + 20 \\cdot 5 = 100 \\text{ m/s}$$

**Svar a):** 100 m/s

**b) Høyde når motor slås av:**

$$y = v_0 t + \\frac{1}{2}at^2 = 0 + \\frac{1}{2} \\cdot 20 \\cdot 25 = 250 \\text{ m}$$

**Svar b):** 250 m

**Fase 2: Motor av (etter 5 s)**

**Gitt:**
- $v_0 = 100$ m/s (hastighet fra fase 1)
- $v = 0$ m/s (ved topp)
- $a = -g = -10$ m/s²

**c) Maksimal høyde:**

Ekstra høyde etter motor slås av:

$$v^2 = v_0^2 + 2a\\Delta y$$
$$0 = 100^2 + 2 \\cdot (-10) \\cdot \\Delta y$$
$$0 = 10000 - 20\\Delta y$$
$$\\Delta y = 500 \\text{ m}$$

Total høyde:
$$y_{\\text{maks}} = 250 + 500 = 750 \\text{ m}$$

**Svar c):** 750 m`,
      hints: ['Del opp i to faser: motor på og motor av', 'For fase 2: $v_0 = 100$ m/s og $a = -g$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-3-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En bil kjører med hastighet 25 m/s når føreren ser et hinder 50 m foran. Reaksjonstiden er 0.5 s, deretter bremser bilen med akselerasjon -8 m/s². Rekker bilen å stoppe før hinderet?',
      solution: `**Fase 1: Reaksjonstid (konstant fart)**

**Gitt:**
- $v = 25$ m/s
- $t = 0.5$ s

**Strekning under reaksjonstid:**
$$s_1 = vt = 25 \\cdot 0.5 = 12.5 \\text{ m}$$

**Fase 2: Bremsing**

**Gitt:**
- $v_0 = 25$ m/s
- $v = 0$ m/s (stopper)
- $a = -8$ m/s²

**Bremselengde:**
$$v^2 = v_0^2 + 2as$$
$$0 = 25^2 + 2 \\cdot (-8) \\cdot s$$
$$0 = 625 - 16s$$
$$s = 39.06 \\text{ m}$$

**Total stoppstrekning:**
$$s_{\\text{total}} = s_1 + s_2 = 12.5 + 39.06 = 51.56 \\text{ m}$$

**Konklusjon:**
Bilen rekker **ikke** å stoppe før hinderet (trenger 51.56 m, har bare 50 m).

**Svar:** Nei, bilen rekker ikke å stoppe. Den treffer hinderet med hastighet ca. 5 m/s.`,
      hints: ['Del opp i to faser: reaksjonstid og bremsing', 'Under reaksjonstid er farten konstant'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-3-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En ball kastes nedover fra en klippe 100 m høy med starthastighet 10 m/s. Finn: a) tiden til ballen treffer bakken, b) farten når den treffer bakken. Bruk $g = 10$ m/s².',
      subTasks: [
        {
          label: 'a',
          task: 'Finn tiden til ballen treffer bakken.',
          solution: '$0 = 100 - 10t - 5t^2 \\Rightarrow 5t^2 + 10t - 100 = 0 \\Rightarrow t^2 + 2t - 20 = 0 \\Rightarrow t = \\frac{-2 + \\sqrt{84}}{2} \\approx 3.58$ s',
          answer: [3.5, 3.58, 3.583],
        },
        {
          label: 'b',
          task: 'Finn farten når ballen treffer bakken.',
          solution: '$v^2 = 10^2 + 2 \\cdot 10 \\cdot 100 = 100 + 2000 = 2100 \\Rightarrow v = \\sqrt{2100} \\approx 45.8$ m/s',
          answer: [45.8, 45.83],
        },
      ],
      solution: `**Gitt:**
- $y_0 = 100$ m
- $y = 0$ m (bakken)
- $v_0 = -10$ m/s (nedover, hvis opp er positiv)
- $a = -g = -10$ m/s²

**a) Tid:**

$$y = y_0 + v_0 t + \\frac{1}{2}at^2$$
$$0 = 100 + (-10)t + \\frac{1}{2}(-10)t^2$$
$$0 = 100 - 10t - 5t^2$$
$$5t^2 + 10t - 100 = 0$$
$$t^2 + 2t - 20 = 0$$

Bruk abc-formelen:
$$t = \\frac{-2 \\pm \\sqrt{4 + 80}}{2} = \\frac{-2 \\pm \\sqrt{84}}{2} = \\frac{-2 \\pm 9.17}{2}$$

Ta positiv løsning:
$$t = \\frac{-2 + 9.17}{2} \\approx 3.58 \\text{ s}$$

**Svar a):** 3.58 sekunder

**b) Fart:**

$$v^2 = v_0^2 + 2a(y - y_0)$$
$$v^2 = (-10)^2 + 2 \\cdot (-10) \\cdot (0 - 100)$$
$$v^2 = 100 + 2000 = 2100$$
$$v = -\\sqrt{2100} \\approx -45.8 \\text{ m/s}$$

Beløp: 45.8 m/s nedover

**Svar b):** 45.8 m/s`,
      hints: ['Ballen kastes nedover, så $v_0$ er negativ', 'Bruk abc-formelen for å løse andregradslikningen'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-3-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En ball kastes rett opp med hastighet 30 m/s fra en klippe 20 m over bakken. Finn: a) maksimal høyde over bakken, b) tiden til ballen treffer bakken. Bruk $g = 10$ m/s².',
      subTasks: [
        {
          label: 'a',
          task: 'Finn maksimal høyde over bakken.',
          solution: 'Maksimal høyde over startpunkt: $\\Delta y = \\frac{v_0^2}{2g} = \\frac{900}{20} = 45$ m. Total: $20 + 45 = 65$ m',
          answer: 65,
        },
        {
          label: 'b',
          task: 'Finn tiden til ballen treffer bakken.',
          solution: '$-20 = 30t - 5t^2 \\Rightarrow 5t^2 - 30t - 20 = 0 \\Rightarrow t^2 - 6t - 4 = 0 \\Rightarrow t = \\frac{6 + \\sqrt{52}}{2} \\approx 6.61$ s',
          answer: [6.6, 6.61, 6.606],
        },
      ],
      solution: `**Gitt:**
- $y_0 = 20$ m (over bakken)
- $v_0 = 30$ m/s (oppover)
- $a = -g = -10$ m/s²

**a) Maksimal høyde:**

Først finn høyde over startpunkt ved topp ($v = 0$):

$$v^2 = v_0^2 + 2a\\Delta y$$
$$0 = 30^2 + 2 \\cdot (-10) \\cdot \\Delta y$$
$$0 = 900 - 20\\Delta y$$
$$\\Delta y = 45 \\text{ m}$$

Maksimal høyde over bakken:
$$y_{\\text{maks}} = y_0 + \\Delta y = 20 + 45 = 65 \\text{ m}$$

**Svar a):** 65 m

**b) Tid til bakken:**

$$y = y_0 + v_0 t + \\frac{1}{2}at^2$$
$$0 = 20 + 30t + \\frac{1}{2}(-10)t^2$$
$$0 = 20 + 30t - 5t^2$$
$$5t^2 - 30t - 20 = 0$$
$$t^2 - 6t - 4 = 0$$

Abc-formel:
$$t = \\frac{6 \\pm \\sqrt{36 + 16}}{2} = \\frac{6 \\pm \\sqrt{52}}{2} = \\frac{6 \\pm 7.21}{2}$$

Ta positiv løsning:
$$t = \\frac{6 + 7.21}{2} \\approx 6.61 \\text{ s}$$

**Svar b):** 6.61 sekunder`,
      hints: ['Maksimal høyde = starthøyde + ekstra høyde', 'Bruk $y = y_0 + v_0 t + \\frac{1}{2}at^2$ med $y = 0$ (bakken)'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-3-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'To biler starter fra stans ved samme posisjon. Bil A akselererer med 3 m/s², bil B akselererer med 4 m/s². Finn: a) forskjellen i tilbakelagt strekning etter 10 sekunder, b) når bil B er 50 m foran bil A.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn forskjellen i strekning etter 10 sekunder.',
          solution: '$s_A = \\frac{1}{2} \\cdot 3 \\cdot 100 = 150$ m, $s_B = \\frac{1}{2} \\cdot 4 \\cdot 100 = 200$ m. Forskjell: $50$ m',
          answer: 50,
        },
        {
          label: 'b',
          task: 'Finn tiden når bil B er 50 m foran bil A.',
          solution: '$s_B - s_A = 50 \\Rightarrow 2t^2 - 1.5t^2 = 50 \\Rightarrow 0.5t^2 = 50 \\Rightarrow t = 10$ s',
          answer: 10,
        },
      ],
      solution: `**Gitt:**
- Begge starter fra stans: $v_0 = 0$ m/s
- Bil A: $a_A = 3$ m/s²
- Bil B: $a_B = 4$ m/s²

**Bevegelseslikninger:**
$$s_A = \\frac{1}{2} \\cdot 3 \\cdot t^2 = 1.5t^2$$
$$s_B = \\frac{1}{2} \\cdot 4 \\cdot t^2 = 2t^2$$

**a) Forskjell etter 10 sekunder:**

$$s_A = 1.5 \\cdot 100 = 150 \\text{ m}$$
$$s_B = 2 \\cdot 100 = 200 \\text{ m}$$
$$\\Delta s = 200 - 150 = 50 \\text{ m}$$

**Svar a):** 50 m

**b) Når er bil B 50 m foran:**

$$s_B - s_A = 50$$
$$2t^2 - 1.5t^2 = 50$$
$$0.5t^2 = 50$$
$$t^2 = 100$$
$$t = 10 \\text{ s}$$

**Svar b):** 10 sekunder

**Merk:** Svaret for a) og b) er det samme fordi vi tilfeldigvis valgte 10 s i oppgave a).`,
      hints: ['Begge starter fra stans, så $v_0 = 0$', 'Bruk $s = \\frac{1}{2}at^2$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
