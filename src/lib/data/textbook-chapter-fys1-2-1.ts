/**
 * Fysikk 1 - Kapittel 2.1: Posisjon, fart og akselerasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_2_1: TextbookChapter = {
  id: 'fys1-2-1',
  courseId: 'fys1',
  chapterNumber: '2.1',
  title: 'Posisjon, fart og akselerasjon',
  description: 'Lær om grunnleggende kinematiske størrelser som posisjon, forflytning, fart og akselerasjon med vektornotasjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive posisjon og forflytning som vektorer',
    'forklare forskjellen mellom gjennomsnittlig og momentan fart',
    'forklare forskjellen mellom gjennomsnittlig og momentan akselerasjon',
    'bruke vektornotasjon for kinematiske størrelser',
  ],
  content: [
    {
      id: 'fys1-2-1-intro',
      type: 'text',
      content: `# Posisjon, fart og akselerasjon

**Kinematikk** er læren om bevegelse uten å ta hensyn til årsaken til bevegelsen. Vi beskriver hvordan objekter beveger seg ved hjelp av størrelser som posisjon, fart og akselerasjon.

## Hva er bevegelse?

Et objekt er i **bevegelse** når det endrer posisjon i forhold til et referansepunkt over tid. For å beskrive bevegelse trenger vi:

1. **Et referansesystem** (koordinatsystem)
2. **En tidsskala**
3. **En måte å angi retning** (vektorer)

## Skalarer vs. vektorer

**Skalar:**
- En størrelse med bare **tallverdi**
- Eksempler: masse (5 kg), temperatur (20°C), tid (10 s)

**Vektor:**
- En størrelse med både **tallverdi** (beløp) og **retning**
- Eksempler: forflytning (5 m mot nord), hastighet (10 m/s mot øst)
- Skrives med pil over: $\\vec{v}$ eller fet skrift: **v**

I kinematikk bruker vi vektorer for å beskrive posisjon, forflytning, fart og akselerasjon.`,
    },
    {
      id: 'fys1-2-1-posisjon',
      type: 'text',
      content: `# Posisjon og forflytning

## Posisjon

**Posisjon** er plasseringen av et objekt i forhold til et referansepunkt (origo).

**Én dimensjon (x-aksen):**
$$x$$

**To dimensjoner (x-y plan):**
$$\\vec{r} = (x, y)$$

**Tre dimensjoner:**
$$\\vec{r} = (x, y, z)$$

**Enheter:** meter (m)

## Forflytning

**Forflytning** er endringen i posisjon fra starttidspunkt til sluttidspunkt.

**Definisjon:**
$$\\Delta \\vec{r} = \\vec{r}_2 - \\vec{r}_1$$

der:
- $\\vec{r}_1$ = startposisjon
- $\\vec{r}_2$ = sluttposisjon
- $\\Delta \\vec{r}$ = forflytning (vektor)

**Viktig forskjell:**

**Forflytning vs. tilbakelagt distanse:**
- **Forflytning:** Rett linje fra start til slutt (vektor)
- **Tilbakelagt distanse:** Total lengde langs banen (skalar)

**Eksempel:**
Du går 3 m mot øst, så 4 m mot nord.
- **Tilbakelagt distanse:** 3 + 4 = 7 m
- **Forflytning:** $\\sqrt{3^2 + 4^2} = 5$ m (nord-øst retning)`,
    },
    {
      id: 'fys1-2-1-def-forflytning',
      type: 'definition',
      title: 'Forflytning',
      content: 'Forflytning $\\Delta \\vec{r}$ er endringen i posisjon fra ett tidspunkt til et annet. Det er en vektor som peker fra startposisjon til sluttposisjon: $\\Delta \\vec{r} = \\vec{r}_2 - \\vec{r}_1$.',
    },
    {
      id: 'fys1-2-1-fart',
      type: 'text',
      content: `# Fart og hastighet

## Gjennomsnittlig fart

**Gjennomsnittlig fart** beskriver hvor raskt et objekt beveger seg i gjennomsnitt over et tidsintervall.

**Skalar (tilbakelagt distanse):**
$$v_{\\text{gj}} = \\frac{s}{\\Delta t}$$

der:
- $s$ = tilbakelagt distanse (m)
- $\\Delta t$ = tidsintervall (s)
- $v_{\\text{gj}}$ = gjennomsnittlig fart (m/s)

## Gjennomsnittlig hastighet

**Gjennomsnittlig hastighet** er forflytning per tidsenhet.

**Vektor (forflytning):**
$$\\vec{v}_{\\text{gj}} = \\frac{\\Delta \\vec{r}}{\\Delta t}$$

der:
- $\\Delta \\vec{r}$ = forflytning (m)
- $\\Delta t$ = tidsintervall (s)
- $\\vec{v}_{\\text{gj}}$ = gjennomsnittlig hastighet (m/s)

**Viktig:** Gjennomsnittlig hastighet er en vektor i samme retning som forflytningen.

## Momentan fart

**Momentan fart** er farten ved ett bestemt tidspunkt.

**Definisjon:**
$$v = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t} = \\frac{ds}{dt}$$

Momentan fart er den deriverte av posisjonen med hensyn på tid.

## Momentan hastighet

**Momentan hastighet** er hastighetsvektoren ved ett bestemt tidspunkt.

**Definisjon:**
$$\\vec{v} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta \\vec{r}}{\\Delta t} = \\frac{d\\vec{r}}{dt}$$

**Retning:** Momentan hastighet er alltid tangent til banen (retning av bevegelsen).

**Komponentform (to dimensjoner):**
$$\\vec{v} = (v_x, v_y) = \\left(\\frac{dx}{dt}, \\frac{dy}{dt}\\right)$$

**Fart (beløp av hastighet):**
$$v = |\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$$`,
    },
    {
      id: 'fys1-2-1-def-hastighet',
      type: 'definition',
      title: 'Momentan hastighet',
      content: 'Momentan hastighet $\\vec{v}$ er den deriverte av posisjon med hensyn på tid: $\\vec{v} = \\frac{d\\vec{r}}{dt}$. Den beskriver hvor raskt og i hvilken retning et objekt beveger seg ved et bestemt tidspunkt.',
    },
    {
      id: 'fys1-2-1-akselerasjon',
      type: 'text',
      content: `# Akselerasjon

**Akselerasjon** er endringen i hastighet per tidsenhet.

## Gjennomsnittlig akselerasjon

**Gjennomsnittlig akselerasjon** over et tidsintervall:

$$\\vec{a}_{\\text{gj}} = \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{\\vec{v}_2 - \\vec{v}_1}{t_2 - t_1}$$

der:
- $\\Delta \\vec{v}$ = endring i hastighet (m/s)
- $\\Delta t$ = tidsintervall (s)
- $\\vec{a}_{\\text{gj}}$ = gjennomsnittlig akselerasjon (m/s²)

**Enheter:** meter per sekund i andre (m/s²)

## Momentan akselerasjon

**Momentan akselerasjon** er akselerasjonen ved ett bestemt tidspunkt.

**Definisjon:**
$$\\vec{a} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{d\\vec{v}}{dt}$$

Akselerasjon er den deriverte av hastighet med hensyn på tid.

**Komponentform (to dimensjoner):**
$$\\vec{a} = (a_x, a_y) = \\left(\\frac{dv_x}{dt}, \\frac{dv_y}{dt}\\right)$$

**Beløp av akselerasjon:**
$$a = |\\vec{a}| = \\sqrt{a_x^2 + a_y^2}$$

## Typer akselerasjon

**Positiv akselerasjon:**
- Hastigheten øker
- Akselerasjon i samme retning som hastigheten
- Eksempel: Bil øker farten

**Negativ akselerasjon (retardasjon):**
- Hastigheten minker
- Akselerasjon i motsatt retning av hastigheten
- Eksempel: Bil bremser

**Akselerasjon i retning:**
- Endring i retning, ikke nødvendigvis fart
- Eksempel: Bil svinger (endrer retning)`,
    },
    {
      id: 'fys1-2-1-def-akselerasjon',
      type: 'definition',
      title: 'Momentan akselerasjon',
      content: 'Momentan akselerasjon $\\vec{a}$ er den deriverte av hastighet med hensyn på tid: $\\vec{a} = \\frac{d\\vec{v}}{dt}$. Den beskriver hvor raskt hastigheten endrer seg ved et bestemt tidspunkt.',
    },
    {
      id: 'fys1-2-1-vektornotasjon',
      type: 'text',
      content: `# Vektornotasjon

## Én dimensjon (x-aksen)

Når bevegelsen kun skjer langs én akse, bruker vi fortegn for å angi retning.

**Eksempel:**
- $v = +10$ m/s (beveger seg i positiv x-retning)
- $v = -10$ m/s (beveger seg i negativ x-retning)

## To dimensjoner (x-y plan)

**Komponentform:**
$$\\vec{r} = (x, y)$$
$$\\vec{v} = (v_x, v_y)$$
$$\\vec{a} = (a_x, a_y)$$

**Enhetsvektorform:**
$$\\vec{r} = x\\hat{i} + y\\hat{j}$$
$$\\vec{v} = v_x\\hat{i} + v_y\\hat{j}$$
$$\\vec{a} = a_x\\hat{i} + a_y\\hat{j}$$

der $\\hat{i}$ er enhetsvektor i x-retning og $\\hat{j}$ er enhetsvektor i y-retning.

## Beløp og retning

**Beløp (lengde) av vektor:**
$$|\\vec{v}| = v = \\sqrt{v_x^2 + v_y^2}$$

**Retning (vinkel med x-aksen):**
$$\\theta = \\arctan\\left(\\frac{v_y}{v_x}\\right)$$

**Fra beløp og retning til komponenter:**
$$v_x = v \\cos \\theta$$
$$v_y = v \\sin \\theta$$`,
    },
    {
      id: 'fys1-2-1-ex-1',
      type: 'example',
      title: 'Eksempel 1: Forflytning og gjennomsnittlig hastighet',
      problem: 'En bil kjører fra posisjon $\\vec{r}_1 = (0, 0)$ m til posisjon $\\vec{r}_2 = (60, 80)$ m på 10 sekunder. Finn: a) forflytningen, b) tilbakelagt distanse hvis bilen kjører rett linje, c) gjennomsnittlig hastighet.',
      solution: `**Gitt:**
- Startposisjon: $\\vec{r}_1 = (0, 0)$ m
- Sluttposisjon: $\\vec{r}_2 = (60, 80)$ m
- Tid: $\\Delta t = 10$ s

**a) Forflytning:**

$$\\Delta \\vec{r} = \\vec{r}_2 - \\vec{r}_1 = (60, 80) - (0, 0) = (60, 80) \\text{ m}$$

**Beløp av forflytning:**
$$|\\Delta \\vec{r}| = \\sqrt{60^2 + 80^2} = \\sqrt{3600 + 6400} = \\sqrt{10000} = 100 \\text{ m}$$

**Svar a):** Forflytningen er $(60, 80)$ m med beløp 100 m.

**b) Tilbakelagt distanse (rett linje):**

Siden bilen kjører rett linje, er tilbakelagt distanse lik beløpet av forflytningen.

$$s = 100 \\text{ m}$$

**Svar b):** 100 m

**c) Gjennomsnittlig hastighet:**

$$\\vec{v}_{\\text{gj}} = \\frac{\\Delta \\vec{r}}{\\Delta t} = \\frac{(60, 80)}{10} = (6, 8) \\text{ m/s}$$

**Beløp:**
$$|\\vec{v}_{\\text{gj}}| = \\frac{100}{10} = 10 \\text{ m/s}$$

**Svar c):** Gjennomsnittlig hastighet er $(6, 8)$ m/s med beløp 10 m/s.`,
    },
    {
      id: 'fys1-2-1-ex-2',
      type: 'example',
      title: 'Eksempel 2: Gjennomsnittlig akselerasjon',
      problem: 'En bil øker hastigheten fra $\\vec{v}_1 = (10, 0)$ m/s til $\\vec{v}_2 = (25, 0)$ m/s på 5 sekunder. Finn gjennomsnittlig akselerasjon.',
      solution: `**Gitt:**
- Starthastighet: $\\vec{v}_1 = (10, 0)$ m/s
- Slutthastighet: $\\vec{v}_2 = (25, 0)$ m/s
- Tid: $\\Delta t = 5$ s

**Løsning:**

$$\\vec{a}_{\\text{gj}} = \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{\\vec{v}_2 - \\vec{v}_1}{\\Delta t}$$

$$\\Delta \\vec{v} = (25, 0) - (10, 0) = (15, 0) \\text{ m/s}$$

$$\\vec{a}_{\\text{gj}} = \\frac{(15, 0)}{5} = (3, 0) \\text{ m/s}^2$$

**Beløp:**
$$|\\vec{a}_{\\text{gj}}| = 3 \\text{ m/s}^2$$

**Svar:** Gjennomsnittlig akselerasjon er $(3, 0)$ m/s² med beløp 3 m/s² i positiv x-retning.`,
    },
  ],
  exercises: [
    {
      id: 'fys1-2-1-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar forskjellen mellom forflytning og tilbakelagt distanse. Gi et eksempel der de er forskjellige.',
      solution: `**Forskjell:**

**Forflytning ($\\Delta \\vec{r}$):**
- **Vektor** (har både størrelse og retning)
- Rett linje fra startposisjon til sluttposisjon
- Uavhengig av veien som er tatt
- Kan være null selv om objektet har beveget seg

**Tilbakelagt distanse ($s$):**
- **Skalar** (kun størrelse, ingen retning)
- Total lengde langs banen
- Avhenger av veien som er tatt
- Aldri negativ

**Eksempel:**

Du går rundt en firkantet fotballbane (100 m × 100 m) og kommer tilbake til startpunktet.

**Tilbakelagt distanse:**
$$s = 100 + 100 + 100 + 100 = 400 \\text{ m}$$

**Forflytning:**
$$\\Delta \\vec{r} = \\vec{r}_{\\text{slutt}} - \\vec{r}_{\\text{start}} = 0$$

Siden du endte opp på samme sted som du startet, er forflytningen null, men du har gått 400 m.`,
      hints: ['Tenk på vektor vs. skalar', 'Hva skjer hvis du går i en sirkel?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-1-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En løper løper fra posisjon $\\vec{r}_1 = (0, 0)$ m til $\\vec{r}_2 = (30, 40)$ m på 10 sekunder. Finn: a) forflytningen, b) beløpet av forflytningen, c) gjennomsnittlig hastighet.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn forflytningen $\\Delta \\vec{r}$.',
          solution: '$\\Delta \\vec{r} = \\vec{r}_2 - \\vec{r}_1 = (30, 40) - (0, 0) = (30, 40)$ m',
        },
        {
          label: 'b',
          task: 'Finn beløpet av forflytningen.',
          solution: '$|\\Delta \\vec{r}| = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50$ m',
          answer: 50,
        },
        {
          label: 'c',
          task: 'Finn gjennomsnittlig hastighet.',
          solution: '$\\vec{v}_{\\text{gj}} = \\frac{\\Delta \\vec{r}}{\\Delta t} = \\frac{(30, 40)}{10} = (3, 4)$ m/s. Beløp: $|\\vec{v}_{\\text{gj}}| = \\frac{50}{10} = 5$ m/s',
          answer: 5,
        },
      ],
      solution: `**Gitt:**
- $\\vec{r}_1 = (0, 0)$ m
- $\\vec{r}_2 = (30, 40)$ m
- $\\Delta t = 10$ s

**a) Forflytning:**
$$\\Delta \\vec{r} = \\vec{r}_2 - \\vec{r}_1 = (30, 40) - (0, 0) = (30, 40) \\text{ m}$$

**b) Beløp:**
$$|\\Delta \\vec{r}| = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50 \\text{ m}$$

**c) Gjennomsnittlig hastighet:**
$$\\vec{v}_{\\text{gj}} = \\frac{\\Delta \\vec{r}}{\\Delta t} = \\frac{(30, 40)}{10} = (3, 4) \\text{ m/s}$$

Beløp: $|\\vec{v}_{\\text{gj}}| = 5$ m/s`,
      hints: ['Bruk $\\Delta \\vec{r} = \\vec{r}_2 - \\vec{r}_1$', 'Bruk Pythagoras for beløp', 'Gjennomsnittlig hastighet = forflytning/tid'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-1-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En bil kjører 100 m mot nord, deretter 100 m mot øst. Hele turen tar 40 sekunder. Finn: a) tilbakelagt distanse, b) forflytning, c) gjennomsnittlig fart, d) beløp av gjennomsnittlig hastighet.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn tilbakelagt distanse.',
          solution: '$s = 100 + 100 = 200$ m',
          answer: 200,
        },
        {
          label: 'b',
          task: 'Finn beløpet av forflytningen.',
          solution: '$|\\Delta \\vec{r}| = \\sqrt{100^2 + 100^2} = \\sqrt{20000} = 141.4$ m',
          answer: [141, 141.4, 141.42],
        },
        {
          label: 'c',
          task: 'Finn gjennomsnittlig fart.',
          solution: '$v_{\\text{gj}} = \\frac{s}{\\Delta t} = \\frac{200}{40} = 5$ m/s',
          answer: 5,
        },
        {
          label: 'd',
          task: 'Finn beløp av gjennomsnittlig hastighet.',
          solution: '$|\\vec{v}_{\\text{gj}}| = \\frac{|\\Delta \\vec{r}|}{\\Delta t} = \\frac{141.4}{40} = 3.54$ m/s',
          answer: [3.5, 3.53, 3.535, 3.54],
        },
      ],
      solution: `**Gitt:**
- 100 m nord, deretter 100 m øst
- Tid: 40 s

**a) Tilbakelagt distanse:**
$$s = 100 + 100 = 200 \\text{ m}$$

**b) Forflytning:**
Bruk Pythagoras (nord = y-retning, øst = x-retning):
$$|\\Delta \\vec{r}| = \\sqrt{100^2 + 100^2} = \\sqrt{20000} \\approx 141.4 \\text{ m}$$

**c) Gjennomsnittlig fart:**
$$v_{\\text{gj}} = \\frac{s}{\\Delta t} = \\frac{200}{40} = 5 \\text{ m/s}$$

**d) Beløp av gjennomsnittlig hastighet:**
$$|\\vec{v}_{\\text{gj}}| = \\frac{|\\Delta \\vec{r}|}{\\Delta t} = \\frac{141.4}{40} \\approx 3.54 \\text{ m/s}$$

**Merk:** Gjennomsnittlig fart (5 m/s) er større enn beløpet av gjennomsnittlig hastighet (3.54 m/s) fordi tilbakelagt distanse er større enn forflytning.`,
      hints: ['Tilbakelagt distanse = sum av alle delstrekninger', 'Forflytning = rett linje fra start til slutt', 'Bruk Pythagoras'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-1-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bil akselererer fra $v_1 = 15$ m/s til $v_2 = 30$ m/s på 5 sekunder. Finn gjennomsnittlig akselerasjon.',
      solution: `**Gitt:**
- $v_1 = 15$ m/s
- $v_2 = 30$ m/s
- $\\Delta t = 5$ s

**Løsning:**

$$a_{\\text{gj}} = \\frac{\\Delta v}{\\Delta t} = \\frac{v_2 - v_1}{\\Delta t}$$

$$\\Delta v = 30 - 15 = 15 \\text{ m/s}$$

$$a_{\\text{gj}} = \\frac{15}{5} = 3 \\text{ m/s}^2$$

**Svar:** Gjennomsnittlig akselerasjon er 3 m/s².`,
      hints: ['Bruk $a = \\frac{\\Delta v}{\\Delta t}$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-1-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En hastighetsvektor er gitt ved $\\vec{v} = (6, 8)$ m/s. Finn: a) beløpet av hastigheten, b) retningsvinkelen (vinkel med x-aksen).',
      subTasks: [
        {
          label: 'a',
          task: 'Finn beløpet av hastigheten.',
          solution: '$|\\vec{v}| = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ m/s',
          answer: 10,
        },
        {
          label: 'b',
          task: 'Finn retningsvinkelen $\\theta$ med x-aksen.',
          solution: '$\\theta = \\arctan\\left(\\frac{v_y}{v_x}\\right) = \\arctan\\left(\\frac{8}{6}\\right) = \\arctan(1.333) \\approx 53.1°$',
          answer: [53, 53.1, 53.13],
        },
      ],
      solution: `**Gitt:**
- $\\vec{v} = (6, 8)$ m/s

**a) Beløp av hastighet:**
$$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ m/s}$$

**b) Retningsvinkel:**
$$\\theta = \\arctan\\left(\\frac{v_y}{v_x}\\right) = \\arctan\\left(\\frac{8}{6}\\right) = \\arctan(1.333) \\approx 53.1°$$

**Svar:** a) 10 m/s, b) 53.1° over x-aksen.`,
      hints: ['Bruk Pythagoras for beløp', 'Bruk arctan for vinkel'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-1-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Et objekts hastighet er gitt ved $\\vec{v}(t) = (3t, 4)$ m/s, der $t$ er tid i sekunder. Finn: a) hastigheten ved $t = 2$ s, b) akselerasjonen.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn hastigheten ved $t = 2$ s.',
          solution: '$\\vec{v}(2) = (3 \\cdot 2, 4) = (6, 4)$ m/s. Beløp: $|\\vec{v}| = \\sqrt{6^2 + 4^2} = \\sqrt{52} \\approx 7.21$ m/s',
          answer: [7.2, 7.21, 7.211],
        },
        {
          label: 'b',
          task: 'Finn akselerasjonen.',
          solution: '$\\vec{a} = \\frac{d\\vec{v}}{dt} = \\left(\\frac{d(3t)}{dt}, \\frac{d(4)}{dt}\\right) = (3, 0)$ m/s²',
        },
      ],
      solution: `**Gitt:**
- $\\vec{v}(t) = (3t, 4)$ m/s

**a) Hastighet ved $t = 2$ s:**
$$\\vec{v}(2) = (3 \\cdot 2, 4) = (6, 4) \\text{ m/s}$$

Beløp:
$$|\\vec{v}| = \\sqrt{6^2 + 4^2} = \\sqrt{36 + 16} = \\sqrt{52} \\approx 7.21 \\text{ m/s}$$

**b) Akselerasjon:**
$$\\vec{a} = \\frac{d\\vec{v}}{dt} = \\left(\\frac{d(3t)}{dt}, \\frac{d(4)}{dt}\\right) = (3, 0) \\text{ m/s}^2$$

**Svar:** a) $(6, 4)$ m/s med beløp 7.21 m/s, b) $(3, 0)$ m/s².`,
      hints: ['Sett inn $t = 2$ s', 'Akselerasjon = derivert av hastighet'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-1-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bil kjører med hastighet 20 m/s mot nord. Den svinger mot øst og kjører med 20 m/s mot øst. Svingen tar 4 sekunder. Finn gjennomsnittlig akselerasjon under svingen.',
      solution: `**Gitt:**
- Starthastighet: $\\vec{v}_1 = (0, 20)$ m/s (nord = y-retning)
- Slutthastighet: $\\vec{v}_2 = (20, 0)$ m/s (øst = x-retning)
- Tid: $\\Delta t = 4$ s

**Løsning:**

$$\\vec{a}_{\\text{gj}} = \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{\\vec{v}_2 - \\vec{v}_1}{\\Delta t}$$

$$\\Delta \\vec{v} = (20, 0) - (0, 20) = (20, -20) \\text{ m/s}$$

$$\\vec{a}_{\\text{gj}} = \\frac{(20, -20)}{4} = (5, -5) \\text{ m/s}^2$$

**Beløp:**
$$|\\vec{a}_{\\text{gj}}| = \\sqrt{5^2 + (-5)^2} = \\sqrt{50} \\approx 7.07 \\text{ m/s}^2$$

**Svar:** Gjennomsnittlig akselerasjon er $(5, -5)$ m/s² med beløp 7.07 m/s².

**Forklaring:** Selv om farten (20 m/s) er konstant, er det akselerasjon fordi retningen endres.`,
      hints: ['Nord = positiv y-retning, øst = positiv x-retning', 'Akselerasjon oppstår når retning endres'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-1-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et objekts posisjon er gitt ved $\\vec{r}(t) = (2t^2, 3t)$ m, der $t$ er tid i sekunder. Finn: a) hastigheten som funksjon av tid, b) akselerasjonen, c) hastigheten ved $t = 3$ s.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn hastigheten $\\vec{v}(t)$.',
          solution: '$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = \\left(\\frac{d(2t^2)}{dt}, \\frac{d(3t)}{dt}\\right) = (4t, 3)$ m/s',
        },
        {
          label: 'b',
          task: 'Finn akselerasjonen $\\vec{a}(t)$.',
          solution: '$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\left(\\frac{d(4t)}{dt}, \\frac{d(3)}{dt}\\right) = (4, 0)$ m/s²',
        },
        {
          label: 'c',
          task: 'Finn beløpet av hastigheten ved $t = 3$ s.',
          solution: '$\\vec{v}(3) = (4 \\cdot 3, 3) = (12, 3)$ m/s. Beløp: $|\\vec{v}| = \\sqrt{12^2 + 3^2} = \\sqrt{153} \\approx 12.37$ m/s',
          answer: [12.3, 12.37],
        },
      ],
      solution: `**Gitt:**
- $\\vec{r}(t) = (2t^2, 3t)$ m

**a) Hastighet:**
$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = \\left(\\frac{d(2t^2)}{dt}, \\frac{d(3t)}{dt}\\right) = (4t, 3) \\text{ m/s}$$

**b) Akselerasjon:**
$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = \\left(\\frac{d(4t)}{dt}, \\frac{d(3)}{dt}\\right) = (4, 0) \\text{ m/s}^2$$

**c) Hastighet ved $t = 3$ s:**
$$\\vec{v}(3) = (4 \\cdot 3, 3) = (12, 3) \\text{ m/s}$$

Beløp:
$$|\\vec{v}| = \\sqrt{12^2 + 3^2} = \\sqrt{144 + 9} = \\sqrt{153} \\approx 12.37 \\text{ m/s}$$

**Svar:** a) $(4t, 3)$ m/s, b) $(4, 0)$ m/s², c) 12.37 m/s.`,
      hints: ['Hastighet = derivert av posisjon', 'Akselerasjon = derivert av hastighet', 'Deriver komponentvis'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-1-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En hastighetsvektor har beløp 15 m/s og danner en vinkel på 60° med x-aksen. Finn komponentene $v_x$ og $v_y$.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn $v_x$.',
          solution: '$v_x = v \\cos \\theta = 15 \\cos 60° = 15 \\cdot 0.5 = 7.5$ m/s',
          answer: 7.5,
        },
        {
          label: 'b',
          task: 'Finn $v_y$.',
          solution: '$v_y = v \\sin \\theta = 15 \\sin 60° = 15 \\cdot 0.866 = 13.0$ m/s',
          answer: [12.99, 13, 13.0],
        },
      ],
      solution: `**Gitt:**
- Beløp: $v = 15$ m/s
- Vinkel: $\\theta = 60°$ med x-aksen

**Løsning:**

$$v_x = v \\cos \\theta = 15 \\cos 60° = 15 \\cdot 0.5 = 7.5 \\text{ m/s}$$

$$v_y = v \\sin \\theta = 15 \\sin 60° = 15 \\cdot 0.866 \\approx 13.0 \\text{ m/s}$$

**Svar:** $\\vec{v} = (7.5, 13.0)$ m/s.

**Kontroll:**
$$|\\vec{v}| = \\sqrt{7.5^2 + 13.0^2} = \\sqrt{56.25 + 169} = \\sqrt{225.25} \\approx 15 \\text{ m/s}$$ ✓`,
      hints: ['Bruk $v_x = v \\cos \\theta$ og $v_y = v \\sin \\theta$', '$\\cos 60° = 0.5$, $\\sin 60° \\approx 0.866$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-2-1-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En partikkel beveger seg slik at posisjonen er gitt ved $\\vec{r}(t) = (5\\cos(2t), 5\\sin(2t))$ m, der $t$ er tid i sekunder. Finn: a) hastigheten ved $t = 0$ s, b) akselerasjonen ved $t = 0$ s, c) beskriv banen til partikkelen.',
      subTasks: [
        {
          label: 'a',
          task: 'Finn hastigheten $\\vec{v}(0)$.',
          solution: '$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = (-10\\sin(2t), 10\\cos(2t))$ m/s. Ved $t=0$: $\\vec{v}(0) = (0, 10)$ m/s',
        },
        {
          label: 'b',
          task: 'Finn akselerasjonen $\\vec{a}(0)$.',
          solution: '$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = (-20\\cos(2t), -20\\sin(2t))$ m/s². Ved $t=0$: $\\vec{a}(0) = (-20, 0)$ m/s²',
        },
        {
          label: 'c',
          task: 'Beskriv banen.',
          solution: 'Sirkelbevegelse med radius 5 m. $x^2 + y^2 = 25\\cos^2(2t) + 25\\sin^2(2t) = 25$',
        },
      ],
      solution: `**Gitt:**
- $\\vec{r}(t) = (5\\cos(2t), 5\\sin(2t))$ m

**a) Hastighet:**
$$\\vec{v}(t) = \\frac{d\\vec{r}}{dt} = \\left(\\frac{d(5\\cos(2t))}{dt}, \\frac{d(5\\sin(2t))}{dt}\\right)$$

$$\\vec{v}(t) = (-10\\sin(2t), 10\\cos(2t)) \\text{ m/s}$$

Ved $t = 0$:
$$\\vec{v}(0) = (-10\\sin(0), 10\\cos(0)) = (0, 10) \\text{ m/s}$$

**b) Akselerasjon:**
$$\\vec{a}(t) = \\frac{d\\vec{v}}{dt} = (-20\\cos(2t), -20\\sin(2t)) \\text{ m/s}^2$$

Ved $t = 0$:
$$\\vec{a}(0) = (-20\\cos(0), -20\\sin(0)) = (-20, 0) \\text{ m/s}^2$$

**c) Banen:**
$$x^2 + y^2 = (5\\cos(2t))^2 + (5\\sin(2t))^2 = 25\\cos^2(2t) + 25\\sin^2(2t) = 25$$

Dette er en sirkel med radius 5 m sentrert i origo. Partikkelen beveger seg i **sirkelbevegelse**.

**Svar:** a) $(0, 10)$ m/s, b) $(-20, 0)$ m/s², c) Sirkelbevegelse med radius 5 m.`,
      hints: ['Deriver posisjon for hastighet', 'Deriver hastighet for akselerasjon', 'Bruk $\\cos^2 x + \\sin^2 x = 1$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
