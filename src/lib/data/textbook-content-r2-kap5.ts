/**
 * Tekstbok kapitler for R2 - Kapittel 5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_R2_5_1: TextbookChapter = {
  id: 'r2-5-1',
  courseId: 'r2',
  chapterNumber: '5.1',
  title: 'Vektorer i tre dimensjoner',
  description: 'Introduksjon til romvektorer, koordinatsystemer i tre dimensjoner og vektornotasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå og bruke et tredimensjonalt koordinatsystem',
    'representere vektorer i rommet med koordinater',
    'beregne lengden av en vektor i rommet',
    'finne enhetsvektorer i tre dimensjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-5-1-intro',
      type: 'text',
      content: `## Fra planet til rommet

I R1 lærte du om vektorer i planet, altså i to dimensjoner. Nå skal vi utvide dette til tre dimensjoner - rommet vi lever i.

Mange praktiske problemer krever at vi arbeider i tre dimensjoner:
- Fly og droner som beveger seg i luftrommet
- Krefter som virker på konstruksjoner i alle retninger
- Molekyler og krystallstrukturer i kjemi
- Grafikk i dataspill og animasjonsfilmer
- GPS og navigasjon

Heldigvis er overgangen fra to til tre dimensjoner ganske naturlig. De fleste regnereglene fra R1 gjelder fortsatt - vi legger bare til en ekstra koordinat.`,
    },

    // ========== KOORDINATSYSTEMET ==========
    {
      id: 'r2-5-1-koordinatsystem',
      type: 'text',
      content: `## Det tredimensjonale koordinatsystemet

I to dimensjoner brukte vi $x$-aksen og $y$-aksen. I tre dimensjoner legger vi til en $z$-akse som star vinkelrett på de to andre.

Vi bruker et **rettvinklet** (eller **ortogonalt**) koordinatsystem der alle tre aksene star vinkelrett på hverandre. Det vanligste er et **høyrehåndssystem**:

**Høyrehåndsregelen:**
Hold høyre hånd med fingrene pekende langs positiv $x$-akse. Krøll fingrene mot positiv $y$-akse. Da peker tommelen i retning av positiv $z$-akse.

Et punkt $P$ i rommet angis med tre koordinater: $P = (x, y, z)$

- $x$-koordinaten angir avstanden langs $x$-aksen
- $y$-koordinaten angir avstanden langs $y$-aksen
- $z$-koordinaten angir høyden over $xy$-planet`,
    },

    // Definisjon: Koordinater i rommet
    {
      id: 'r2-5-1-def-koordinater',
      type: 'definition',
      title: 'Koordinater i rommet',
      content: `Et punkt $P$ i rommet beskrives entydig ved tre koordinater $(x, y, z)$.

- $xy$-planet er planet der $z = 0$
- $xz$-planet er planet der $y = 0$
- $yz$-planet er planet der $x = 0$
- Origo er punktet $O = (0, 0, 0)$`,
    },

    // Eksempel 1: Plotte punkter
    {
      id: 'r2-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Punkter i rommet',
      problem: `Beskriv plasseringen av punktene:

a) $A = (3, 0, 0)$
b) $B = (2, 4, 0)$
c) $C = (1, 2, 3)$
d) $D = (0, 0, -2)$`,
      solution: `**Løsning:**

a) $A = (3, 0, 0)$ ligger på $x$-aksen, 3 enheter fra origo i positiv $x$-retning.

b) $B = (2, 4, 0)$ ligger i $xy$-planet (siden $z = 0$), 2 enheter langs $x$-aksen og 4 enheter langs $y$-aksen.

c) $C = (1, 2, 3)$ ligger 1 enhet langs $x$-aksen, 2 enheter langs $y$-aksen, og 3 enheter over $xy$-planet.

d) $D = (0, 0, -2)$ ligger på $z$-aksen, 2 enheter under $xy$-planet (negativ $z$-verdi).`,
    },

    // ========== VEKTORER I ROMMET ==========
    {
      id: 'r2-5-1-vektorer-intro',
      type: 'text',
      content: `## Vektorer i rommet

En **vektor** i rommet er, akkurat som i planet, en størrelse med både **lengde** og **retning**.

Vi skriver vektorer med pil over: $\\vec{a}$, $\\vec{b}$, $\\vec{v}$, eller med fete bokstaver: $\\mathbf{a}$, $\\mathbf{b}$, $\\mathbf{v}$.

En vektor fra punkt $A$ til punkt $B$ skrives $\\overrightarrow{AB}$.`,
    },

    // Definisjon: Vektor i rommet
    {
      id: 'r2-5-1-def-vektor',
      type: 'definition',
      title: 'Vektor i rommet',
      content: `En vektor $\\vec{a}$ i rommet kan skrives på komponentform:

$$\\vec{a} = [a_1, a_2, a_3]$$

der $a_1$, $a_2$ og $a_3$ er vektorens komponenter i henholdsvis $x$-, $y$- og $z$-retning.

Alternativt kan vi skrive vektoren som en lineærkombinasjon av enhetsvektorene:

$$\\vec{a} = a_1\\vec{i} + a_2\\vec{j} + a_3\\vec{k}$$

der $\\vec{i} = [1, 0, 0]$, $\\vec{j} = [0, 1, 0]$ og $\\vec{k} = [0, 0, 1]$ er enhetsvektorene langs aksene.`,
    },

    // ========== POSISJONSVEKTOR OG VEKTOR MELLOM PUNKTER ==========
    {
      id: 'r2-5-1-posisjonsvektor',
      type: 'text',
      content: `## Posisjonsvektor og vektor mellom to punkter

**Posisjonsvektoren** til et punkt $P = (x, y, z)$ er vektoren fra origo til $P$:

$$\\vec{OP} = [x, y, z]$$

For å finne vektoren $\\overrightarrow{AB}$ fra punkt $A = (a_1, a_2, a_3)$ til punkt $B = (b_1, b_2, b_3)$, bruker vi samme regel som i to dimensjoner:

$$\\overrightarrow{AB} = \\vec{OB} - \\vec{OA} = [b_1 - a_1, b_2 - a_2, b_3 - a_3]$$

Med andre ord: **slutt minus start** for hver koordinat.`,
    },

    // Eksempel 2: Vektor mellom punkter
    {
      id: 'r2-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne vektor mellom to punkter',
      problem: `La $A = (1, 3, 2)$ og $B = (4, -1, 5)$.

a) Finn vektoren $\\overrightarrow{AB}$
b) Finn vektoren $\\overrightarrow{BA}$`,
      solution: `**Løsning:**

a) Vi bruker formelen slutt minus start:
$$\\overrightarrow{AB} = [4-1, -1-3, 5-2] = [3, -4, 3]$$

b) Vektoren $\\overrightarrow{BA}$ går motsatt vei:
$$\\overrightarrow{BA} = [1-4, 3-(-1), 2-5] = [-3, 4, -3]$$

Vi ser at $\\overrightarrow{BA} = -\\overrightarrow{AB}$, akkurat som forventet.`,
    },

    // ========== LENGDE AV VEKTOR ==========
    {
      id: 'r2-5-1-lengde-intro',
      type: 'text',
      content: `## Lengden av en vektor

Lengden (eller **normen**) til en vektor $\\vec{a} = [a_1, a_2, a_3]$ er en naturlig utvidelse av formelen fra to dimensjoner. Vi bruker Pytagoras' setning to ganger.`,
    },

    // Teorem: Lengdeformel
    {
      id: 'r2-5-1-theorem-lengde',
      type: 'theorem',
      title: 'Lengden av en vektor i rommet',
      content: `For en vektor $\\vec{a} = [a_1, a_2, a_3]$ er lengden gitt ved:

$$|\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}$$

**Utledning:**
Tenk på vektoren $\\vec{a}$ som diagonalen i en eske med sider $a_1$, $a_2$ og $a_3$.

1. Først finner vi diagonalen i bunnen (i $xy$-planet): $d = \\sqrt{a_1^2 + a_2^2}$
2. Så bruker vi Pytagoras igjen med denne diagonalen og høyden $a_3$:
   $$|\\vec{a}| = \\sqrt{d^2 + a_3^2} = \\sqrt{a_1^2 + a_2^2 + a_3^2}$$`,
    },

    // Eksempel 3: Beregne lengde
    {
      id: 'r2-5-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Lengde av vektor',
      problem: `Finn lengden av vektoren $\\vec{v} = [2, -3, 6]$.`,
      solution: `**Løsning:**

Vi bruker lengdeformelen:

$$|\\vec{v}| = \\sqrt{2^2 + (-3)^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$$

Lengden av $\\vec{v}$ er 7.`,
    },

    // ========== AVSTAND MELLOM PUNKTER ==========
    {
      id: 'r2-5-1-avstand',
      type: 'text',
      content: `## Avstand mellom to punkter

Avstanden mellom to punkter $A$ og $B$ er det samme som lengden av vektoren $\\overrightarrow{AB}$.`,
    },

    // Teorem: Avstandsformel
    {
      id: 'r2-5-1-theorem-avstand',
      type: 'theorem',
      title: 'Avstand mellom to punkter i rommet',
      content: `Avstanden mellom punktene $A = (a_1, a_2, a_3)$ og $B = (b_1, b_2, b_3)$ er:

$$|AB| = \\sqrt{(b_1-a_1)^2 + (b_2-a_2)^2 + (b_3-a_3)^2}$$`,
    },

    // Eksempel 4: Avstand mellom punkter
    {
      id: 'r2-5-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Avstand mellom punkter',
      problem: `Finn avstanden mellom punktene $P = (1, -2, 3)$ og $Q = (4, 2, -1)$.`,
      solution: `**Løsning:**

Vi bruker avstandsformelen:

$$|PQ| = \\sqrt{(4-1)^2 + (2-(-2))^2 + (-1-3)^2}$$
$$= \\sqrt{3^2 + 4^2 + (-4)^2}$$
$$= \\sqrt{9 + 16 + 16}$$
$$= \\sqrt{41}$$

Avstanden er $\\sqrt{41} \\approx 6{,}40$.`,
    },

    // ========== ENHETSVEKTOR ==========
    {
      id: 'r2-5-1-enhetsvektor-intro',
      type: 'text',
      content: `## Enhetsvektor

En **enhetsvektor** er en vektor med lengde 1. Enhetsvektoren i samme retning som $\\vec{a}$ finner vi ved å dele $\\vec{a}$ på sin egen lengde.`,
    },

    // Definisjon: Enhetsvektor
    {
      id: 'r2-5-1-def-enhetsvektor',
      type: 'definition',
      title: 'Enhetsvektor',
      content: `Enhetsvektoren $\\hat{a}$ i samme retning som $\\vec{a}$ er:

$$\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|} = \\frac{1}{|\\vec{a}|} \\cdot \\vec{a}$$

Merk: $|\\hat{a}| = 1$`,
    },

    // Eksempel 5: Enhetsvektor
    {
      id: 'r2-5-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Finne enhetsvektor',
      problem: `Finn enhetsvektoren i samme retning som $\\vec{u} = [3, 4, 0]$.`,
      solution: `**Løsning:**

Først finner vi lengden:
$$|\\vec{u}| = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

Enhetsvektoren blir:
$$\\hat{u} = \\frac{1}{5}[3, 4, 0] = \\left[\\frac{3}{5}, \\frac{4}{5}, 0\\right]$$

**Kontroll:** $|\\hat{u}| = \\sqrt{\\left(\\frac{3}{5}\\right)^2 + \\left(\\frac{4}{5}\\right)^2 + 0^2} = \\sqrt{\\frac{9}{25} + \\frac{16}{25}} = \\sqrt{1} = 1$ ✓`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'r2-5-1-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // Oppgave 1
    {
      id: 'r2-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-5-1-ex-1',
        number: '5.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv plasseringen av følgende punkter:',
        subTasks: [
          { label: 'a', task: '$P = (2, 3, 1)$', solution: '$P$ ligger 2 enheter langs $x$-aksen, 3 enheter langs $y$-aksen og 1 enhet over $xy$-planet.' },
          { label: 'b', task: '$Q = (0, 4, 0)$', solution: '$Q$ ligger på $y$-aksen, 4 enheter fra origo.' },
          { label: 'c', task: '$R = (-1, 2, 5)$', solution: '$R$ ligger 1 enhet i negativ $x$-retning, 2 enheter langs $y$-aksen og 5 enheter over $xy$-planet.' },
          { label: 'd', task: '$S = (3, 0, -2)$', solution: '$S$ ligger i $xz$-planet (siden $y = 0$), 3 enheter langs $x$-aksen og 2 enheter under $xy$-planet.' },
        ],
        solution: 'Se deloppgavene for beskrivelser.',
        hints: ['Hvilken akse eller hvilket plan ligger punktet på eller i?', 'Negativ $z$-verdi betyr under $xy$-planet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r2-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-5-1-ex-2',
        number: '5.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vektoren $\\overrightarrow{AB}$ når:',
        subTasks: [
          { label: 'a', task: '$A = (1, 2, 3)$ og $B = (4, 5, 6)$', solution: '$\\overrightarrow{AB} = [4-1, 5-2, 6-3] = [3, 3, 3]$' },
          { label: 'b', task: '$A = (0, 0, 0)$ og $B = (1, -2, 3)$', solution: '$\\overrightarrow{AB} = [1-0, -2-0, 3-0] = [1, -2, 3]$' },
          { label: 'c', task: '$A = (2, -1, 4)$ og $B = (-1, 3, 2)$', solution: '$\\overrightarrow{AB} = [-1-2, 3-(-1), 2-4] = [-3, 4, -2]$' },
          { label: 'd', task: '$A = (5, 2, -3)$ og $B = (5, 2, 4)$', solution: '$\\overrightarrow{AB} = [5-5, 2-2, 4-(-3)] = [0, 0, 7]$' },
        ],
        solution: 'a) $[3, 3, 3]$, b) $[1, -2, 3]$, c) $[-3, 4, -2]$, d) $[0, 0, 7]$',
        hints: ['Bruk formelen: slutt minus start for hver koordinat.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r2-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn lengden av vektorene:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [1, 2, 2]$', solution: '$|\\vec{a}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$' },
          { label: 'b', task: '$\\vec{b} = [4, 0, 3]$', solution: '$|\\vec{b}| = \\sqrt{4^2 + 0^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$' },
          { label: 'c', task: '$\\vec{c} = [1, 1, 1]$', solution: '$|\\vec{c}| = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$' },
          { label: 'd', task: '$\\vec{d} = [6, -2, 3]$', solution: '$|\\vec{d}| = \\sqrt{6^2 + (-2)^2 + 3^2} = \\sqrt{36 + 4 + 9} = \\sqrt{49} = 7$' },
        ],
        solution: 'a) 3, b) 5, c) $\\sqrt{3}$, d) 7',
        hints: ['Bruk formelen $|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r2-5-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn avstanden mellom punktene:',
        subTasks: [
          { label: 'a', task: '$A = (1, 0, 2)$ og $B = (3, 4, 2)$', solution: '$|AB| = \\sqrt{(3-1)^2 + (4-0)^2 + (2-2)^2} = \\sqrt{4 + 16 + 0} = \\sqrt{20} = 2\\sqrt{5}$' },
          { label: 'b', task: '$C = (2, -1, 3)$ og $D = (-1, 2, 7)$', solution: '$|CD| = \\sqrt{(-1-2)^2 + (2-(-1))^2 + (7-3)^2} = \\sqrt{9 + 9 + 16} = \\sqrt{34}$' },
          { label: 'c', task: '$E = (0, 0, 0)$ og $F = (1, 2, 2)$', solution: '$|EF| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$' },
        ],
        solution: 'a) $2\\sqrt{5}$, b) $\\sqrt{34}$, c) $3$',
        hints: ['Avstand = lengden av vektoren mellom punktene', 'Alternativt: bruk avstandsformelen direkte'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r2-5-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn enhetsvektoren i samme retning som:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [4, 0, 3]$', solution: '$|\\vec{a}| = 5$, så $\\hat{a} = \\frac{1}{5}[4, 0, 3] = \\left[\\frac{4}{5}, 0, \\frac{3}{5}\\right]$' },
          { label: 'b', task: '$\\vec{b} = [1, 2, 2]$', solution: '$|\\vec{b}| = 3$, så $\\hat{b} = \\frac{1}{3}[1, 2, 2] = \\left[\\frac{1}{3}, \\frac{2}{3}, \\frac{2}{3}\\right]$' },
          { label: 'c', task: '$\\vec{c} = [2, -2, 1]$', solution: '$|\\vec{c}| = \\sqrt{4 + 4 + 1} = 3$, så $\\hat{c} = \\frac{1}{3}[2, -2, 1] = \\left[\\frac{2}{3}, -\\frac{2}{3}, \\frac{1}{3}\\right]$' },
        ],
        solution: 'a) $\\left[\\frac{4}{5}, 0, \\frac{3}{5}\\right]$, b) $\\left[\\frac{1}{3}, \\frac{2}{3}, \\frac{2}{3}\\right]$, c) $\\left[\\frac{2}{3}, -\\frac{2}{3}, \\frac{1}{3}\\right]$',
        hints: ['Finn først lengden, så del hver komponent på lengden.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r2-5-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-5-1-ex-6',
        number: '5.1.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et punkt $P$ har posisjonsvektor $\\vec{OP} = [2, 3, 1]$ og et punkt $Q$ har posisjonsvektor $\\vec{OQ} = [5, -1, 4]$.',
        subTasks: [
          { label: 'a', task: 'Finn koordinatene til $P$ og $Q$.', solution: '$P = (2, 3, 1)$ og $Q = (5, -1, 4)$' },
          { label: 'b', task: 'Finn vektoren $\\overrightarrow{PQ}$.', solution: '$\\overrightarrow{PQ} = [5-2, -1-3, 4-1] = [3, -4, 3]$' },
          { label: 'c', task: 'Finn lengden $|PQ|$.', solution: '$|PQ| = \\sqrt{3^2 + (-4)^2 + 3^2} = \\sqrt{9 + 16 + 9} = \\sqrt{34}$' },
          { label: 'd', task: 'Finn midtpunktet $M$ på linjestykket $PQ$.', solution: '$M = \\left(\\frac{2+5}{2}, \\frac{3+(-1)}{2}, \\frac{1+4}{2}\\right) = \\left(\\frac{7}{2}, 1, \\frac{5}{2}\\right)$' },
        ],
        solution: 'a) $P = (2, 3, 1)$, $Q = (5, -1, 4)$, b) $[3, -4, 3]$, c) $\\sqrt{34}$, d) $\\left(\\frac{7}{2}, 1, \\frac{5}{2}\\right)$',
        hints: ['Posisjonsvektoren har samme koordinater som punktet.', 'Midtpunktet: gjennomsnitt av koordinatene.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r2-5-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-5-1-ex-7',
        number: '5.1.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vis at trekanten med hjørner $A = (1, 0, 1)$, $B = (3, 2, 1)$ og $C = (1, 2, 3)$ er likebeint.',
        subTasks: [
          { label: 'a', task: 'Finn lengdene $|AB|$, $|BC|$ og $|AC|$.', solution: '$|AB| = \\sqrt{(3-1)^2 + (2-0)^2 + (1-1)^2} = \\sqrt{4+4+0} = \\sqrt{8} = 2\\sqrt{2}$\n\n$|BC| = \\sqrt{(1-3)^2 + (2-2)^2 + (3-1)^2} = \\sqrt{4+0+4} = \\sqrt{8} = 2\\sqrt{2}$\n\n$|AC| = \\sqrt{(1-1)^2 + (2-0)^2 + (3-1)^2} = \\sqrt{0+4+4} = \\sqrt{8} = 2\\sqrt{2}$' },
          { label: 'b', task: 'Hva slags trekant er dette?', solution: 'Siden $|AB| = |BC| = |AC| = 2\\sqrt{2}$, er alle sidene like lange. Dette er altså en **likesidet** trekant (som er et spesialtilfelle av likebeint).' },
        ],
        solution: 'Alle tre sidelengdene er $2\\sqrt{2}$, så trekanten er likesidet.',
        hints: ['Beregn alle tre sidelengdene.', 'Sammenlign lengdene.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r2-5-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-5-1-ex-8',
        number: '5.1.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Punktet $A = (1, 2, 3)$ og punktet $B = (4, 6, 3)$ er gitt. Finn alle punkter $P$ på $z$-aksen som har lik avstand til $A$ og $B$.',
        subTasks: [
          { label: 'a', task: 'Skriv opp koordinatene til et generelt punkt $P$ på $z$-aksen.', solution: 'Et punkt på $z$-aksen har formen $P = (0, 0, z)$ for en eller annen $z$-verdi.' },
          { label: 'b', task: 'Sett opp likningen $|PA| = |PB|$.', solution: '$|PA|^2 = (1-0)^2 + (2-0)^2 + (3-z)^2 = 1 + 4 + (3-z)^2$\n\n$|PB|^2 = (4-0)^2 + (6-0)^2 + (3-z)^2 = 16 + 36 + (3-z)^2$\n\nSetter $|PA|^2 = |PB|^2$:\n$1 + 4 + (3-z)^2 = 16 + 36 + (3-z)^2$' },
          { label: 'c', task: 'Løs likningen og finn $P$.', solution: 'Fra likningen ser vi at $(3-z)^2$ kansellerer:\n$5 = 52$\n\nDette er en selvmotsigelse! Dermed finnes det **ingen** punkter på $z$-aksen med lik avstand til $A$ og $B$.' },
        ],
        solution: 'Det finnes ingen punkter på $z$-aksen med lik avstand til $A$ og $B$.',
        hints: ['Punkter på $z$-aksen har $x = y = 0$.', 'Kvadrer begge sider for å unngå røtter.', 'Hva skjer hvis likningen ikke har løsning?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r2-5-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-5-1-ex-9',
        number: '5.1.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kule har sentrum i $S = (2, 1, 3)$ og går gjennom punktet $P = (4, 3, 6)$.',
        subTasks: [
          { label: 'a', task: 'Finn radien $r$ til kulen.', solution: '$r = |SP| = \\sqrt{(4-2)^2 + (3-1)^2 + (6-3)^2} = \\sqrt{4 + 4 + 9} = \\sqrt{17}$' },
          { label: 'b', task: 'Bestem om punktet $Q = (2, 1, 3 + \\sqrt{17})$ ligger på kulen.', solution: '$|SQ| = \\sqrt{(2-2)^2 + (1-1)^2 + (3+\\sqrt{17}-3)^2} = \\sqrt{0 + 0 + 17} = \\sqrt{17} = r$\n\nJa, $Q$ ligger på kulen.' },
          { label: 'c', task: 'Finn et punkt på kulen som ligger i $xy$-planet.', solution: 'I $xy$-planet er $z = 0$. Vi søker $(x, y, 0)$ slik at $|S(x,y,0)| = \\sqrt{17}$.\n\n$(x-2)^2 + (y-1)^2 + (0-3)^2 = 17$\n$(x-2)^2 + (y-1)^2 + 9 = 17$\n$(x-2)^2 + (y-1)^2 = 8$\n\nVelger f.eks. $x = 2$: $(y-1)^2 = 8 \\Rightarrow y = 1 + 2\\sqrt{2}$\n\nEtt punkt er $(2, 1 + 2\\sqrt{2}, 0)$.' },
        ],
        solution: 'a) $r = \\sqrt{17}$, b) Ja, c) F.eks. $(2, 1 + 2\\sqrt{2}, 0)$',
        hints: ['Radien er avstanden fra sentrum til et punkt på kulen.', 'Et punkt ligger på kulen hvis avstanden til sentrum er lik radien.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r2-5-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-5-1-ex-10',
        number: '5.1.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv vektoren $\\vec{v} = [6, 3, -6]$ som summen av en vektor parallell med $\\vec{a} = [2, 1, -2]$ og en vektor ortogonal på $\\vec{a}$.',
        subTasks: [
          { label: 'a', task: 'Finn en vektor $\\vec{v}_{\\parallel}$ parallell med $\\vec{a}$ slik at $\\vec{v}_{\\parallel} = k\\vec{a}$ for et tall $k$.', solution: 'Hvis $\\vec{v} = k\\vec{a}$, må $[6, 3, -6] = k[2, 1, -2]$.\nFra første komponent: $6 = 2k \\Rightarrow k = 3$.\nSjekk: $3 \\cdot [2, 1, -2] = [6, 3, -6] = \\vec{v}$ ✓\n\nDermed er $\\vec{v}_{\\parallel} = \\vec{v} = [6, 3, -6]$.' },
          { label: 'b', task: 'Hva blir $\\vec{v}_{\\perp}$?', solution: 'Siden $\\vec{v} = \\vec{v}_{\\parallel} + \\vec{v}_{\\perp}$ og $\\vec{v}_{\\parallel} = \\vec{v}$, får vi:\n\n$\\vec{v}_{\\perp} = \\vec{v} - \\vec{v}_{\\parallel} = [6, 3, -6] - [6, 3, -6] = [0, 0, 0]$\n\nDen ortogonale komponenten er nullvektoren. Dette betyr at $\\vec{v}$ allerede er parallell med $\\vec{a}$.' },
        ],
        solution: '$\\vec{v}$ er allerede parallell med $\\vec{a}$ (med $k = 3$), så $\\vec{v}_{\\parallel} = [6, 3, -6]$ og $\\vec{v}_{\\perp} = [0, 0, 0]$.',
        hints: ['Sjekk om $\\vec{v}$ er et multiplum av $\\vec{a}$.', 'Hvis $\\vec{v} = k\\vec{a}$, så er hele $\\vec{v}$ parallell med $\\vec{a}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_5_2: TextbookChapter = {
  id: 'r2-5-2',
  courseId: 'r2',
  chapterNumber: '5.2',
  title: 'Vektorkoordinater og regning',
  description: 'Addisjon, subtraksjon og skalarmultiplikasjon av vektorer i rommet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'addere og subtrahere vektorer i rommet',
    'multiplisere vektorer med skalarer',
    'forstå og anvende lineærkombinasjoner',
    'avgjøre om vektorer er parallelle',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-5-2-intro',
      type: 'text',
      content: `## Regning med vektorer i rommet

Vektorregning i tre dimensjoner fungerer på samme måte som i to dimensjoner. Vi utfører operasjonene komponent for komponent. I dette kapittelet ser vi på de grunnleggende regneoperasjonene: addisjon, subtraksjon og skalarmultiplikasjon.`,
    },

    // ========== ADDISJON ==========
    {
      id: 'r2-5-2-addisjon-intro',
      type: 'text',
      content: `## Addisjon av vektorer

Når vi adderer to vektorer, legger vi sammen tilsvarende komponenter.`,
    },

    // Definisjon: Vektoraddisjon
    {
      id: 'r2-5-2-def-addisjon',
      type: 'definition',
      title: 'Addisjon av vektorer',
      content: `For vektorer $\\vec{a} = [a_1, a_2, a_3]$ og $\\vec{b} = [b_1, b_2, b_3]$ er summen:

$$\\vec{a} + \\vec{b} = [a_1 + b_1, a_2 + b_2, a_3 + b_3]$$

**Geometrisk tolkning:** Legg $\\vec{b}$ i enden av $\\vec{a}$. Summen $\\vec{a} + \\vec{b}$ er vektoren fra starten av $\\vec{a}$ til enden av $\\vec{b}$.`,
    },

    // Eksempel 1: Addisjon
    {
      id: 'r2-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Addisjon av vektorer',
      problem: `La $\\vec{a} = [2, -1, 3]$ og $\\vec{b} = [1, 4, -2]$. Finn $\\vec{a} + \\vec{b}$.`,
      solution: `**Løsning:**

Vi adderer komponent for komponent:

$$\\vec{a} + \\vec{b} = [2+1, -1+4, 3+(-2)] = [3, 3, 1]$$`,
    },

    // ========== SUBTRAKSJON ==========
    {
      id: 'r2-5-2-subtraksjon-intro',
      type: 'text',
      content: `## Subtraksjon av vektorer

Subtraksjon fungerer analogt med addisjon.`,
    },

    // Definisjon: Vektorsubtraksjon
    {
      id: 'r2-5-2-def-subtraksjon',
      type: 'definition',
      title: 'Subtraksjon av vektorer',
      content: `For vektorer $\\vec{a} = [a_1, a_2, a_3]$ og $\\vec{b} = [b_1, b_2, b_3]$ er differansen:

$$\\vec{a} - \\vec{b} = [a_1 - b_1, a_2 - b_2, a_3 - b_3]$$

**Geometrisk tolkning:** $\\vec{a} - \\vec{b}$ er vektoren fra enden av $\\vec{b}$ til enden av $\\vec{a}$ (når begge starter i samme punkt).`,
    },

    // Eksempel 2: Subtraksjon
    {
      id: 'r2-5-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Subtraksjon av vektorer',
      problem: `La $\\vec{a} = [5, 2, -1]$ og $\\vec{b} = [3, -1, 4]$. Finn $\\vec{a} - \\vec{b}$ og $\\vec{b} - \\vec{a}$.`,
      solution: `**Løsning:**

$$\\vec{a} - \\vec{b} = [5-3, 2-(-1), -1-4] = [2, 3, -5]$$

$$\\vec{b} - \\vec{a} = [3-5, -1-2, 4-(-1)] = [-2, -3, 5]$$

Merk at $\\vec{b} - \\vec{a} = -(\\vec{a} - \\vec{b})$, akkurat som forventet.`,
    },

    // ========== SKALARMULTIPLIKASJON ==========
    {
      id: 'r2-5-2-skalar-intro',
      type: 'text',
      content: `## Skalarmultiplikasjon

Når vi multipliserer en vektor med et tall (en **skalar**), multipliserer vi hver komponent med dette tallet.`,
    },

    // Definisjon: Skalarmultiplikasjon
    {
      id: 'r2-5-2-def-skalar',
      type: 'definition',
      title: 'Skalarmultiplikasjon',
      content: `For en vektor $\\vec{a} = [a_1, a_2, a_3]$ og et tall $k$ er:

$$k\\vec{a} = [ka_1, ka_2, ka_3]$$

**Geometrisk tolkning:**
- $|k| > 1$: Vektoren blir lengre
- $|k| < 1$: Vektoren blir kortere
- $k < 0$: Vektoren snur retning
- $k = 0$: Gir nullvektoren $\\vec{0} = [0, 0, 0]$`,
    },

    // Eksempel 3: Skalarmultiplikasjon
    {
      id: 'r2-5-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Skalarmultiplikasjon',
      problem: `La $\\vec{v} = [2, -3, 1]$. Finn:
a) $3\\vec{v}$
b) $-2\\vec{v}$
c) $\\frac{1}{2}\\vec{v}$`,
      solution: `**Løsning:**

a) $3\\vec{v} = 3[2, -3, 1] = [6, -9, 3]$

b) $-2\\vec{v} = -2[2, -3, 1] = [-4, 6, -2]$

c) $\\frac{1}{2}\\vec{v} = \\frac{1}{2}[2, -3, 1] = \\left[1, -\\frac{3}{2}, \\frac{1}{2}\\right]$`,
    },

    // ========== REGNEREGLER ==========
    {
      id: 'r2-5-2-regneregler',
      type: 'theorem',
      title: 'Regneregler for vektorer',
      content: `For vektorer $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ og skalarer $k$, $m$ gjelder:

**Addisjon:**
1. $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$ (kommutativ)
2. $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$ (assosiativ)
3. $\\vec{a} + \\vec{0} = \\vec{a}$ (nullvektor)
4. $\\vec{a} + (-\\vec{a}) = \\vec{0}$ (motsatt vektor)

**Skalarmultiplikasjon:**
5. $k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}$ (distributiv)
6. $(k + m)\\vec{a} = k\\vec{a} + m\\vec{a}$ (distributiv)
7. $k(m\\vec{a}) = (km)\\vec{a}$ (assosiativ)
8. $1 \\cdot \\vec{a} = \\vec{a}$`,
    },

    // Eksempel 4: Kombinerte operasjoner
    {
      id: 'r2-5-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Kombinerte operasjoner',
      problem: `La $\\vec{a} = [1, 2, -1]$ og $\\vec{b} = [3, 0, 2]$. Regn ut $2\\vec{a} - 3\\vec{b}$.`,
      solution: `**Løsning:**

Først regner vi ut hver del:
$$2\\vec{a} = 2[1, 2, -1] = [2, 4, -2]$$
$$3\\vec{b} = 3[3, 0, 2] = [9, 0, 6]$$

Så subtraherer vi:
$$2\\vec{a} - 3\\vec{b} = [2, 4, -2] - [9, 0, 6] = [2-9, 4-0, -2-6] = [-7, 4, -8]$$`,
    },

    // ========== LINEÆRKOMBINASJONER ==========
    {
      id: 'r2-5-2-linearkomb-intro',
      type: 'text',
      content: `## Lineærkombinasjoner

En **lineærkombinasjon** av vektorer er en sum der hver vektor er multiplisert med en skalar.`,
    },

    // Definisjon: Lineærkombinasjon
    {
      id: 'r2-5-2-def-linearkomb',
      type: 'definition',
      title: 'Lineærkombinasjon',
      content: `En **lineærkombinasjon** av vektorene $\\vec{v}_1, \\vec{v}_2, \\ldots, \\vec{v}_n$ er et uttrykk på formen:

$$k_1\\vec{v}_1 + k_2\\vec{v}_2 + \\cdots + k_n\\vec{v}_n$$

der $k_1, k_2, \\ldots, k_n$ er skalarer (tall).`,
    },

    // Eksempel 5: Lineærkombinasjon
    {
      id: 'r2-5-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Lineærkombinasjon',
      problem: `Skriv vektoren $\\vec{w} = [7, 5, 3]$ som en lineærkombinasjon av $\\vec{u} = [1, 1, 1]$ og $\\vec{v} = [2, 1, 0]$.`,
      solution: `**Løsning:**

Vi søker $a$ og $b$ slik at $a\\vec{u} + b\\vec{v} = \\vec{w}$:

$$a[1, 1, 1] + b[2, 1, 0] = [7, 5, 3]$$
$$[a + 2b, a + b, a] = [7, 5, 3]$$

Fra tredje komponent: $a = 3$

Fra andre komponent: $3 + b = 5 \\Rightarrow b = 2$

**Kontroll:** $3[1, 1, 1] + 2[2, 1, 0] = [3, 3, 3] + [4, 2, 0] = [7, 5, 3]$ ✓

Altså: $\\vec{w} = 3\\vec{u} + 2\\vec{v}$`,
    },

    // ========== PARALLELLE VEKTORER ==========
    {
      id: 'r2-5-2-parallell-intro',
      type: 'text',
      content: `## Parallelle vektorer

To vektorer er **parallelle** hvis den ene er et skalarmultiplum av den andre.`,
    },

    // Definisjon: Parallelle vektorer
    {
      id: 'r2-5-2-def-parallell',
      type: 'definition',
      title: 'Parallelle vektorer',
      content: `Vektorene $\\vec{a}$ og $\\vec{b}$ (der $\\vec{b} \\neq \\vec{0}$) er **parallelle** hvis det finnes et tall $k$ slik at:

$$\\vec{a} = k\\vec{b}$$

Vi skriver $\\vec{a} \\parallel \\vec{b}$.

- Hvis $k > 0$: Vektorene peker i samme retning
- Hvis $k < 0$: Vektorene peker i motsatt retning`,
    },

    // Eksempel 6: Parallelle vektorer
    {
      id: 'r2-5-2-example-6',
      type: 'example',
      title: 'Eksempel 6: Avgjøre om vektorer er parallelle',
      problem: `Undersøk om følgende vektorpar er parallelle:
a) $\\vec{a} = [2, 4, 6]$ og $\\vec{b} = [1, 2, 3]$
b) $\\vec{c} = [3, -1, 2]$ og $\\vec{d} = [6, -2, 5]$`,
      solution: `**Løsning:**

a) Vi sjekker om $\\vec{a} = k\\vec{b}$ for et tall $k$:
$$[2, 4, 6] = k[1, 2, 3]$$

Fra første komponent: $2 = k \\cdot 1 \\Rightarrow k = 2$

Sjekk: $2 \\cdot [1, 2, 3] = [2, 4, 6] = \\vec{a}$ ✓

**Ja, $\\vec{a} \\parallel \\vec{b}$ med $k = 2$.**

b) Vi sjekker om $\\vec{c} = k\\vec{d}$:
- Fra første komponent: $3 = 6k \\Rightarrow k = \\frac{1}{2}$
- Fra andre komponent: $-1 = -2k \\Rightarrow k = \\frac{1}{2}$
- Fra tredje komponent: $2 = 5k \\Rightarrow k = \\frac{2}{5}$

Siden $k$-verdiene ikke er like, er vektorene **ikke parallelle**.`,
    },

    // ========== DELING AV LINJESTYKKE ==========
    {
      id: 'r2-5-2-deling-intro',
      type: 'text',
      content: `## Deling av linjestykke

Ved hjelp av vektorregning kan vi finne punkter som deler et linjestykke i et gitt forhold.`,
    },

    // Teorem: Delingspunkt
    {
      id: 'r2-5-2-theorem-deling',
      type: 'theorem',
      title: 'Delingspunkt på linjestykke',
      content: `La $A$ og $B$ være to punkter. Punktet $P$ som deler $AB$ i forholdet $m:n$ (der $|AP|:|PB| = m:n$) har posisjonsvektor:

$$\\vec{OP} = \\frac{n \\cdot \\vec{OA} + m \\cdot \\vec{OB}}{m + n}$$

**Spesialtilfelle:** Midtpunktet $M$ (der $m = n = 1$):
$$\\vec{OM} = \\frac{\\vec{OA} + \\vec{OB}}{2}$$`,
    },

    // Eksempel 7: Midtpunkt
    {
      id: 'r2-5-2-example-7',
      type: 'example',
      title: 'Eksempel 7: Midtpunkt og delingspunkt',
      problem: `La $A = (1, 3, 5)$ og $B = (7, -1, 2)$.

a) Finn midtpunktet $M$ på $AB$.
b) Finn punktet $P$ som deler $AB$ i forholdet $2:1$.`,
      solution: `**Løsning:**

a) Midtpunktet har koordinater:
$$M = \\left(\\frac{1+7}{2}, \\frac{3+(-1)}{2}, \\frac{5+2}{2}\\right) = \\left(4, 1, \\frac{7}{2}\\right)$$

b) For forholdet $2:1$ (med $m = 2$ og $n = 1$):
$$\\vec{OP} = \\frac{1 \\cdot \\vec{OA} + 2 \\cdot \\vec{OB}}{2 + 1} = \\frac{[1, 3, 5] + 2[7, -1, 2]}{3}$$
$$= \\frac{[1, 3, 5] + [14, -2, 4]}{3} = \\frac{[15, 1, 9]}{3} = [5, \\frac{1}{3}, 3]$$

Så $P = \\left(5, \\frac{1}{3}, 3\\right)$.`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'r2-5-2-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // Oppgave 1
    {
      id: 'r2-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-5-2-ex-1',
        number: '5.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $\\vec{a} = [3, -1, 2]$ og $\\vec{b} = [1, 4, -3]$. Regn ut:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} + \\vec{b}$', solution: '$\\vec{a} + \\vec{b} = [3+1, -1+4, 2+(-3)] = [4, 3, -1]$' },
          { label: 'b', task: '$\\vec{a} - \\vec{b}$', solution: '$\\vec{a} - \\vec{b} = [3-1, -1-4, 2-(-3)] = [2, -5, 5]$' },
          { label: 'c', task: '$\\vec{b} - \\vec{a}$', solution: '$\\vec{b} - \\vec{a} = [1-3, 4-(-1), -3-2] = [-2, 5, -5]$' },
          { label: 'd', task: '$2\\vec{a} + 3\\vec{b}$', solution: '$2\\vec{a} + 3\\vec{b} = [6, -2, 4] + [3, 12, -9] = [9, 10, -5]$' },
        ],
        solution: 'a) $[4, 3, -1]$, b) $[2, -5, 5]$, c) $[-2, 5, -5]$, d) $[9, 10, -5]$',
        hints: ['Regn komponent for komponent.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r2-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-5-2-ex-2',
        number: '5.2.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $\\vec{u} = [2, 0, -1]$, $\\vec{v} = [-1, 3, 2]$ og $\\vec{w} = [0, 1, 1]$. Regn ut:',
        subTasks: [
          { label: 'a', task: '$\\vec{u} + \\vec{v} + \\vec{w}$', solution: '$\\vec{u} + \\vec{v} + \\vec{w} = [2-1+0, 0+3+1, -1+2+1] = [1, 4, 2]$' },
          { label: 'b', task: '$2\\vec{u} - \\vec{v}$', solution: '$2\\vec{u} - \\vec{v} = [4, 0, -2] - [-1, 3, 2] = [5, -3, -4]$' },
          { label: 'c', task: '$\\vec{u} - 2\\vec{v} + 3\\vec{w}$', solution: '$\\vec{u} - 2\\vec{v} + 3\\vec{w} = [2, 0, -1] - [-2, 6, 4] + [0, 3, 3] = [4, -3, -2]$' },
        ],
        solution: 'a) $[1, 4, 2]$, b) $[5, -3, -4]$, c) $[4, -3, -2]$',
        hints: ['Beregn skalarmultiplikasjon først, så addisjon/subtraksjon.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r2-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Undersøk om følgende vektorpar er parallelle:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [4, -2, 6]$ og $\\vec{b} = [2, -1, 3]$', solution: '$\\vec{a} = 2\\vec{b}$, så **ja, de er parallelle**.' },
          { label: 'b', task: '$\\vec{c} = [1, 2, 3]$ og $\\vec{d} = [2, 4, 5]$', solution: 'Fra komponent 1 og 2: $k = 2$. Fra komponent 3: $k = 5/3$. Ulike $k$-verdier, så **nei, ikke parallelle**.' },
          { label: 'c', task: '$\\vec{e} = [3, -6, 9]$ og $\\vec{f} = [-1, 2, -3]$', solution: '$\\vec{e} = -3\\vec{f}$, så **ja, de er parallelle** (motsatt retning).' },
        ],
        solution: 'a) Ja ($k = 2$), b) Nei, c) Ja ($k = -3$)',
        hints: ['Sjekk om forholdet mellom tilsvarende komponenter er det samme.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r2-5-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn $x$, $y$ og $z$ slik at $\\vec{a} + \\vec{b} = \\vec{c}$ når:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [x, 2, 3]$, $\\vec{b} = [1, y, -1]$, $\\vec{c} = [4, 5, z]$', solution: '$x + 1 = 4 \\Rightarrow x = 3$\n$2 + y = 5 \\Rightarrow y = 3$\n$3 + (-1) = z \\Rightarrow z = 2$' },
          { label: 'b', task: '$\\vec{a} = [2x, 1, -2]$, $\\vec{b} = [3, y-1, z]$, $\\vec{c} = [7, 4, 1]$', solution: '$2x + 3 = 7 \\Rightarrow x = 2$\n$1 + (y-1) = 4 \\Rightarrow y = 4$\n$-2 + z = 1 \\Rightarrow z = 3$' },
        ],
        solution: 'a) $x = 3$, $y = 3$, $z = 2$. b) $x = 2$, $y = 4$, $z = 3$.',
        hints: ['Sett opp en likning for hver komponent.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r2-5-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn midtpunktet $M$ på linjestykket $AB$ når:',
        subTasks: [
          { label: 'a', task: '$A = (2, 4, 6)$ og $B = (8, 2, 4)$', solution: '$M = \\left(\\frac{2+8}{2}, \\frac{4+2}{2}, \\frac{6+4}{2}\\right) = (5, 3, 5)$' },
          { label: 'b', task: '$A = (-1, 3, 5)$ og $B = (5, -1, 3)$', solution: '$M = \\left(\\frac{-1+5}{2}, \\frac{3-1}{2}, \\frac{5+3}{2}\\right) = (2, 1, 4)$' },
          { label: 'c', task: '$A = (0, 0, 0)$ og $B = (4, -2, 6)$', solution: '$M = \\left(\\frac{0+4}{2}, \\frac{0-2}{2}, \\frac{0+6}{2}\\right) = (2, -1, 3)$' },
        ],
        solution: 'a) $(5, 3, 5)$, b) $(2, 1, 4)$, c) $(2, -1, 3)$',
        hints: ['Midtpunktet: gjennomsnitt av koordinatene.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r2-5-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-5-2-ex-6',
        number: '5.2.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv vektoren $\\vec{w} = [5, 4, 7]$ som en lineærkombinasjon av $\\vec{u} = [1, 0, 1]$ og $\\vec{v} = [1, 1, 2]$.',
        subTasks: [
          { label: 'a', task: 'Sett opp likningssystemet.', solution: 'Vi søker $a$ og $b$ slik at $a\\vec{u} + b\\vec{v} = \\vec{w}$:\n$a[1, 0, 1] + b[1, 1, 2] = [5, 4, 7]$\n$[a + b, b, a + 2b] = [5, 4, 7]$\n\nLikninger:\n(1) $a + b = 5$\n(2) $b = 4$\n(3) $a + 2b = 7$' },
          { label: 'b', task: 'Løs systemet og skriv svaret.', solution: 'Fra (2): $b = 4$\nFra (1): $a + 4 = 5 \\Rightarrow a = 1$\nSjekk i (3): $1 + 2 \\cdot 4 = 9 \\neq 7$\n\n**Systemet er inkonsistent!** $\\vec{w}$ kan ikke skrives som lineærkombinasjon av $\\vec{u}$ og $\\vec{v}$.' },
        ],
        solution: '$\\vec{w}$ kan ikke skrives som en lineærkombinasjon av $\\vec{u}$ og $\\vec{v}$.',
        hints: ['Sett opp tre likninger, en for hver komponent.', 'Hva skjer hvis likningene ikke stemmer?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r2-5-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-5-2-ex-7',
        number: '5.2.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Punktene $A = (1, 2, 3)$ og $B = (7, 5, 9)$ er gitt. Finn punktet $P$ som deler $AB$ i forholdet:',
        subTasks: [
          { label: 'a', task: '$1:2$ (fra $A$)', solution: 'Med $m = 1$ og $n = 2$:\n$\\vec{OP} = \\frac{2 \\cdot \\vec{OA} + 1 \\cdot \\vec{OB}}{3} = \\frac{2[1,2,3] + [7,5,9]}{3} = \\frac{[9, 9, 15]}{3} = [3, 3, 5]$\n\n$P = (3, 3, 5)$' },
          { label: 'b', task: '$2:1$ (fra $A$)', solution: 'Med $m = 2$ og $n = 1$:\n$\\vec{OP} = \\frac{1 \\cdot \\vec{OA} + 2 \\cdot \\vec{OB}}{3} = \\frac{[1,2,3] + 2[7,5,9]}{3} = \\frac{[15, 12, 21]}{3} = [5, 4, 7]$\n\n$P = (5, 4, 7)$' },
        ],
        solution: 'a) $P = (3, 3, 5)$, b) $P = (5, 4, 7)$',
        hints: ['Bruk formelen for delingspunkt.', 'Vekten på $B$ er $m$, vekten på $A$ er $n$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r2-5-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-5-2-ex-8',
        number: '5.2.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I en trekant $ABC$ har vi $A = (1, 0, 2)$, $B = (3, 4, 0)$ og $C = (5, 2, 6)$. Tyngdepunktet $T$ i trekanten er gjennomsnittet av hjørnene.',
        subTasks: [
          { label: 'a', task: 'Finn koordinatene til tyngdepunktet $T$.', solution: '$T = \\left(\\frac{1+3+5}{3}, \\frac{0+4+2}{3}, \\frac{2+0+6}{3}\\right) = (3, 2, \\frac{8}{3})$' },
          { label: 'b', task: 'Vis at $\\overrightarrow{TA} + \\overrightarrow{TB} + \\overrightarrow{TC} = \\vec{0}$.', solution: '$\\overrightarrow{TA} = [1-3, 0-2, 2-\\frac{8}{3}] = [-2, -2, -\\frac{2}{3}]$\n\n$\\overrightarrow{TB} = [3-3, 4-2, 0-\\frac{8}{3}] = [0, 2, -\\frac{8}{3}]$\n\n$\\overrightarrow{TC} = [5-3, 2-2, 6-\\frac{8}{3}] = [2, 0, \\frac{10}{3}]$\n\nSum: $[-2+0+2, -2+2+0, -\\frac{2}{3}-\\frac{8}{3}+\\frac{10}{3}] = [0, 0, 0] = \\vec{0}$ ✓' },
        ],
        solution: 'a) $T = (3, 2, \\frac{8}{3})$, b) Se utregning.',
        hints: ['Tyngdepunktet er gjennomsnittet av hjørnenes koordinater.', 'Dette resultatet gjelder for alle trekanter.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r2-5-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-5-2-ex-9',
        number: '5.2.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vektorene $\\vec{a} = [2, -1, 3]$, $\\vec{b} = [1, 2, -1]$ og $\\vec{c} = [k, 5, 1]$ er gitt. Finn verdien av $k$ slik at $\\vec{c}$ kan skrives som en lineærkombinasjon av $\\vec{a}$ og $\\vec{b}$.',
        subTasks: [
          { label: 'a', task: 'Sett opp likningssystemet $s\\vec{a} + t\\vec{b} = \\vec{c}$.', solution: '$s[2, -1, 3] + t[1, 2, -1] = [k, 5, 1]$\n\nGir likningene:\n(1) $2s + t = k$\n(2) $-s + 2t = 5$\n(3) $3s - t = 1$' },
          { label: 'b', task: 'Løs for $s$ og $t$ fra likning (2) og (3).', solution: 'Fra (2): $-s + 2t = 5$\nFra (3): $3s - t = 1$\n\nGang (3) med 2: $6s - 2t = 2$\nLegg til (2): $5s = 7 \\Rightarrow s = \\frac{7}{5}$\n\nSett inn i (3): $3 \\cdot \\frac{7}{5} - t = 1 \\Rightarrow t = \\frac{21}{5} - 1 = \\frac{16}{5}$' },
          { label: 'c', task: 'Finn $k$.', solution: 'Sett $s = \\frac{7}{5}$ og $t = \\frac{16}{5}$ inn i (1):\n$k = 2s + t = 2 \\cdot \\frac{7}{5} + \\frac{16}{5} = \\frac{14 + 16}{5} = 6$\n\n**Svar: $k = 6$**' },
        ],
        solution: '$k = 6$',
        hints: ['Bruk to av likningene til å finne $s$ og $t$.', 'Sett inn i den tredje likningen for å finne $k$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r2-5-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-5-2-ex-10',
        number: '5.2.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et parallellogram $ABCD$ har hjørner $A = (1, 2, 3)$, $B = (4, 3, 5)$ og $C = (6, 7, 8)$. Finn koordinatene til $D$.',
        subTasks: [
          { label: 'a', task: 'Bruk at $\\overrightarrow{AB} = \\overrightarrow{DC}$ til å finne $D$.', solution: '$\\overrightarrow{AB} = [4-1, 3-2, 5-3] = [3, 1, 2]$\n\n$\\overrightarrow{DC} = \\overrightarrow{AB}$ betyr at $C - D = [3, 1, 2]$\n\nDermed: $D = C - [3, 1, 2] = [6-3, 7-1, 8-2] = [3, 6, 6]$\n\n$D = (3, 6, 6)$' },
          { label: 'b', task: 'Verifiser at $\\overrightarrow{AD} = \\overrightarrow{BC}$.', solution: '$\\overrightarrow{AD} = [3-1, 6-2, 6-3] = [2, 4, 3]$\n\n$\\overrightarrow{BC} = [6-4, 7-3, 8-5] = [2, 4, 3]$\n\n$\\overrightarrow{AD} = \\overrightarrow{BC}$ ✓' },
        ],
        solution: '$D = (3, 6, 6)$',
        hints: ['I et parallellogram er motstående sider parallelle og like lange.', '$\\overrightarrow{AB} = \\overrightarrow{DC}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_5_3: TextbookChapter = {
  id: 'r2-5-3',
  courseId: 'r2',
  chapterNumber: '5.3',
  title: 'Skalarproduktet',
  description: 'Prikkproduktet av vektorer og dets anvendelser: vinkler og ortogonalitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne skalarproduktet av to vektorer i rommet',
    'bruke skalarproduktet til å finne vinkler mellom vektorer',
    'avgjøre om vektorer er ortogonale',
    'projisere en vektor på en annen',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-5-3-intro',
      type: 'text',
      content: `## Hva er skalarproduktet?

Skalarproduktet (også kalt **prikkproduktet** eller **indreproduktet**) er en måte å "multiplisere" to vektorer på som gir et **tall** (en skalar) som resultat.

Skalarproduktet har mange viktige anvendelser:
- Finne vinkelen mellom to vektorer
- Avgjøre om to vektorer er ortogonale (vinkelrette)
- Projisere en vektor på en annen
- Beregne arbeid i fysikk ($W = \\vec{F} \\cdot \\vec{s}$)`,
    },

    // ========== DEFINISJON ==========
    {
      id: 'r2-5-3-def-skalarprodukt',
      type: 'definition',
      title: 'Skalarproduktet',
      content: `For vektorer $\\vec{a} = [a_1, a_2, a_3]$ og $\\vec{b} = [b_1, b_2, b_3]$ er **skalarproduktet** definert som:

$$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

Merk: Resultatet er et **tall**, ikke en vektor.

Vi bruker notasjonen $\\vec{a} \\cdot \\vec{b}$ (med prikk) eller $\\langle \\vec{a}, \\vec{b} \\rangle$.`,
    },

    // Eksempel 1: Beregne skalarprodukt
    {
      id: 'r2-5-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne skalarproduktet',
      problem: `Regn ut skalarproduktet $\\vec{a} \\cdot \\vec{b}$ når:

a) $\\vec{a} = [2, 3, 1]$ og $\\vec{b} = [4, -1, 2]$
b) $\\vec{a} = [1, 0, -2]$ og $\\vec{b} = [3, 5, 1]$`,
      solution: `**Løsning:**

a) $\\vec{a} \\cdot \\vec{b} = 2 \\cdot 4 + 3 \\cdot (-1) + 1 \\cdot 2 = 8 - 3 + 2 = 7$

b) $\\vec{a} \\cdot \\vec{b} = 1 \\cdot 3 + 0 \\cdot 5 + (-2) \\cdot 1 = 3 + 0 - 2 = 1$`,
    },

    // ========== REGNEREGLER ==========
    {
      id: 'r2-5-3-regneregler',
      type: 'theorem',
      title: 'Regneregler for skalarproduktet',
      content: `For vektorer $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ og skalar $k$ gjelder:

1. $\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$ (kommutativ)
2. $\\vec{a} \\cdot (\\vec{b} + \\vec{c}) = \\vec{a} \\cdot \\vec{b} + \\vec{a} \\cdot \\vec{c}$ (distributiv)
3. $(k\\vec{a}) \\cdot \\vec{b} = k(\\vec{a} \\cdot \\vec{b}) = \\vec{a} \\cdot (k\\vec{b})$
4. $\\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2$ (lengde kvadrert)
5. $\\vec{a} \\cdot \\vec{0} = 0$`,
    },

    // ========== GEOMETRISK TOLKNING ==========
    {
      id: 'r2-5-3-geometrisk',
      type: 'text',
      content: `## Geometrisk tolkning av skalarproduktet

Det finnes en alternativ formel for skalarproduktet som involverer vinkelen mellom vektorene.`,
    },

    // Teorem: Geometrisk formel
    {
      id: 'r2-5-3-theorem-geometrisk',
      type: 'theorem',
      title: 'Geometrisk formel for skalarproduktet',
      content: `For vektorer $\\vec{a}$ og $\\vec{b}$ med vinkel $\\theta$ mellom seg:

$$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos\\theta$$

Denne formelen gir oss sammenhengen mellom skalarproduktet og vinkelen.`,
    },

    // ========== VINKEL MELLOM VEKTORER ==========
    {
      id: 'r2-5-3-vinkel-intro',
      type: 'text',
      content: `## Vinkel mellom to vektorer

Ved å kombinere de to formlene for skalarproduktet kan vi finne vinkelen mellom to vektorer.`,
    },

    // Teorem: Vinkelformel
    {
      id: 'r2-5-3-theorem-vinkel',
      type: 'theorem',
      title: 'Vinkel mellom to vektorer',
      content: `Vinkelen $\\theta$ mellom vektorene $\\vec{a}$ og $\\vec{b}$ er gitt ved:

$$\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| \\cdot |\\vec{b}|}$$

der $0° \\leq \\theta \\leq 180°$ (eller $0 \\leq \\theta \\leq \\pi$ i radianer).`,
    },

    // Eksempel 2: Finne vinkel
    {
      id: 'r2-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne vinkelen mellom to vektorer',
      problem: `Finn vinkelen mellom $\\vec{a} = [1, 2, 2]$ og $\\vec{b} = [3, 0, 4]$.`,
      solution: `**Løsning:**

**Steg 1:** Beregn skalarproduktet:
$$\\vec{a} \\cdot \\vec{b} = 1 \\cdot 3 + 2 \\cdot 0 + 2 \\cdot 4 = 3 + 0 + 8 = 11$$

**Steg 2:** Finn lengdene:
$$|\\vec{a}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$$
$$|\\vec{b}| = \\sqrt{3^2 + 0^2 + 4^2} = \\sqrt{25} = 5$$

**Steg 3:** Bruk vinkelformelen:
$$\\cos\\theta = \\frac{11}{3 \\cdot 5} = \\frac{11}{15}$$

$$\\theta = \\arccos\\left(\\frac{11}{15}\\right) \\approx 42{,}8°$$`,
    },

    // ========== ORTOGONALE VEKTORER ==========
    {
      id: 'r2-5-3-ortogonal-intro',
      type: 'text',
      content: `## Ortogonale vektorer

Når vinkelen mellom to vektorer er $90°$, sier vi at de er **ortogonale** (vinkelrette).`,
    },

    // Teorem: Ortogonalitet
    {
      id: 'r2-5-3-theorem-ortogonal',
      type: 'theorem',
      title: 'Ortogonalitet',
      content: `To vektorer $\\vec{a}$ og $\\vec{b}$ er **ortogonale** hvis og bare hvis:

$$\\vec{a} \\cdot \\vec{b} = 0$$

Vi skriver $\\vec{a} \\perp \\vec{b}$.

**Forklaring:** Når $\\theta = 90°$ er $\\cos 90° = 0$, så $\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}| \\cdot 0 = 0$.`,
    },

    // Eksempel 3: Ortogonalitet
    {
      id: 'r2-5-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Sjekke ortogonalitet',
      problem: `Undersøk om vektorene er ortogonale:

a) $\\vec{a} = [2, 1, -1]$ og $\\vec{b} = [1, -3, -1]$
b) $\\vec{c} = [1, 2, 3]$ og $\\vec{d} = [3, 0, -1]$`,
      solution: `**Løsning:**

a) $\\vec{a} \\cdot \\vec{b} = 2 \\cdot 1 + 1 \\cdot (-3) + (-1) \\cdot (-1) = 2 - 3 + 1 = 0$

Siden $\\vec{a} \\cdot \\vec{b} = 0$, er $\\vec{a} \\perp \\vec{b}$. **Ja, de er ortogonale.**

b) $\\vec{c} \\cdot \\vec{d} = 1 \\cdot 3 + 2 \\cdot 0 + 3 \\cdot (-1) = 3 + 0 - 3 = 0$

Siden $\\vec{c} \\cdot \\vec{d} = 0$, er $\\vec{c} \\perp \\vec{d}$. **Ja, de er ortogonale.**`,
    },

    // Eksempel 4: Finne ortogonal vektor
    {
      id: 'r2-5-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Finne en ortogonal vektor',
      problem: `Finn alle verdier av $k$ slik at $\\vec{u} = [2, k, 1]$ er ortogonal på $\\vec{v} = [3, -1, k]$.`,
      solution: `**Løsning:**

For at $\\vec{u} \\perp \\vec{v}$ må $\\vec{u} \\cdot \\vec{v} = 0$:

$$\\vec{u} \\cdot \\vec{v} = 2 \\cdot 3 + k \\cdot (-1) + 1 \\cdot k = 6 - k + k = 6$$

Vi får $6 = 0$, som er umulig.

**Konklusjon:** Det finnes ingen verdi av $k$ som gjør vektorene ortogonale.`,
    },

    // ========== PROJEKSJON ==========
    {
      id: 'r2-5-3-projeksjon-intro',
      type: 'text',
      content: `## Projeksjon av en vektor på en annen

Projeksjonen av $\\vec{a}$ på $\\vec{b}$ er den komponenten av $\\vec{a}$ som ligger langs $\\vec{b}$.`,
    },

    // Definisjon: Projeksjon
    {
      id: 'r2-5-3-def-projeksjon',
      type: 'definition',
      title: 'Projeksjonen av en vektor',
      content: `**Skalar projeksjon** av $\\vec{a}$ på $\\vec{b}$:
$$\\text{comp}_{\\vec{b}} \\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}$$

**Vektor projeksjon** av $\\vec{a}$ på $\\vec{b}$:
$$\\text{proj}_{\\vec{b}} \\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\vec{b} = \\frac{\\vec{a} \\cdot \\vec{b}}{\\vec{b} \\cdot \\vec{b}} \\vec{b}$$

Den skalare projeksjonen er et tall (lengden med fortegn), mens vektorprojeksjonen er en vektor parallell med $\\vec{b}$.`,
    },

    // Eksempel 5: Projeksjon
    {
      id: 'r2-5-3-example-5',
      type: 'example',
      title: 'Eksempel 5: Projeksjon av vektor',
      problem: `Finn projeksjonen av $\\vec{a} = [4, 3, 0]$ på $\\vec{b} = [2, 0, 0]$.`,
      solution: `**Løsning:**

**Steg 1:** Beregn skalarproduktet og lengden av $\\vec{b}$:
$$\\vec{a} \\cdot \\vec{b} = 4 \\cdot 2 + 3 \\cdot 0 + 0 \\cdot 0 = 8$$
$$|\\vec{b}|^2 = 2^2 + 0^2 + 0^2 = 4$$
$$|\\vec{b}| = 2$$

**Steg 2:** Skalar projeksjon:
$$\\text{comp}_{\\vec{b}} \\vec{a} = \\frac{8}{2} = 4$$

**Steg 3:** Vektor projeksjon:
$$\\text{proj}_{\\vec{b}} \\vec{a} = \\frac{8}{4} \\cdot [2, 0, 0] = 2 \\cdot [2, 0, 0] = [4, 0, 0]$$

Projeksjonen er vektoren $[4, 0, 0]$, som er komponenten av $\\vec{a}$ langs $x$-aksen.`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'r2-5-3-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // Oppgave 1
    {
      id: 'r2-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-5-3-ex-1',
        number: '5.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut skalarproduktet $\\vec{a} \\cdot \\vec{b}$:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [1, 2, 3]$, $\\vec{b} = [4, 5, 6]$', solution: '$\\vec{a} \\cdot \\vec{b} = 1 \\cdot 4 + 2 \\cdot 5 + 3 \\cdot 6 = 4 + 10 + 18 = 32$' },
          { label: 'b', task: '$\\vec{a} = [2, -1, 3]$, $\\vec{b} = [3, 2, -1]$', solution: '$\\vec{a} \\cdot \\vec{b} = 2 \\cdot 3 + (-1) \\cdot 2 + 3 \\cdot (-1) = 6 - 2 - 3 = 1$' },
          { label: 'c', task: '$\\vec{a} = [1, 0, -1]$, $\\vec{b} = [2, 5, 2]$', solution: '$\\vec{a} \\cdot \\vec{b} = 1 \\cdot 2 + 0 \\cdot 5 + (-1) \\cdot 2 = 2 + 0 - 2 = 0$' },
          { label: 'd', task: '$\\vec{a} = [4, -3, 0]$, $\\vec{b} = [0, 0, 5]$', solution: '$\\vec{a} \\cdot \\vec{b} = 4 \\cdot 0 + (-3) \\cdot 0 + 0 \\cdot 5 = 0$' },
        ],
        solution: 'a) 32, b) 1, c) 0, d) 0',
        hints: ['Multipliser tilsvarende komponenter og summer.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r2-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-5-3-ex-2',
        number: '5.3.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om vektorparene er ortogonale:',
        subTasks: [
          { label: 'a', task: '$\\vec{u} = [1, 2, -2]$, $\\vec{v} = [2, 1, 2]$', solution: '$\\vec{u} \\cdot \\vec{v} = 2 + 2 - 4 = 0$. **Ja, ortogonale.**' },
          { label: 'b', task: '$\\vec{u} = [3, 1, 2]$, $\\vec{v} = [1, -1, -1]$', solution: '$\\vec{u} \\cdot \\vec{v} = 3 - 1 - 2 = 0$. **Ja, ortogonale.**' },
          { label: 'c', task: '$\\vec{u} = [1, 1, 1]$, $\\vec{v} = [1, 1, -2]$', solution: '$\\vec{u} \\cdot \\vec{v} = 1 + 1 - 2 = 0$. **Ja, ortogonale.**' },
          { label: 'd', task: '$\\vec{u} = [2, 3, 1]$, $\\vec{v} = [1, -1, 1]$', solution: '$\\vec{u} \\cdot \\vec{v} = 2 - 3 + 1 = 0$. **Ja, ortogonale.**' },
        ],
        solution: 'Alle fire parene er ortogonale.',
        hints: ['Vektorene er ortogonale hvis $\\vec{u} \\cdot \\vec{v} = 0$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r2-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn vinkelen mellom vektorene:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [1, 0, 0]$, $\\vec{b} = [0, 1, 0]$', solution: '$\\vec{a} \\cdot \\vec{b} = 0$, $|\\vec{a}| = 1$, $|\\vec{b}| = 1$\n$\\cos\\theta = 0 \\Rightarrow \\theta = 90°$' },
          { label: 'b', task: '$\\vec{a} = [1, 1, 0]$, $\\vec{b} = [1, 0, 0]$', solution: '$\\vec{a} \\cdot \\vec{b} = 1$, $|\\vec{a}| = \\sqrt{2}$, $|\\vec{b}| = 1$\n$\\cos\\theta = \\frac{1}{\\sqrt{2}} \\Rightarrow \\theta = 45°$' },
          { label: 'c', task: '$\\vec{a} = [1, 1, 1]$, $\\vec{b} = [1, 1, 1]$', solution: '$\\vec{a} \\cdot \\vec{b} = 3$, $|\\vec{a}| = |\\vec{b}| = \\sqrt{3}$\n$\\cos\\theta = \\frac{3}{3} = 1 \\Rightarrow \\theta = 0°$' },
          { label: 'd', task: '$\\vec{a} = [2, 1, 2]$, $\\vec{b} = [1, -2, 0]$', solution: '$\\vec{a} \\cdot \\vec{b} = 2 - 2 + 0 = 0$, så $\\theta = 90°$' },
        ],
        solution: 'a) $90°$, b) $45°$, c) $0°$, d) $90°$',
        hints: ['Bruk $\\cos\\theta = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}||\\vec{b}|}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r2-5-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn vinkelen mellom vektorene $\\vec{u} = [3, -1, 2]$ og $\\vec{v} = [1, 2, 1]$. Gi svaret i grader.',
        subTasks: [
          { label: 'a', task: 'Beregn $\\vec{u} \\cdot \\vec{v}$.', solution: '$\\vec{u} \\cdot \\vec{v} = 3 \\cdot 1 + (-1) \\cdot 2 + 2 \\cdot 1 = 3 - 2 + 2 = 3$' },
          { label: 'b', task: 'Beregn $|\\vec{u}|$ og $|\\vec{v}|$.', solution: '$|\\vec{u}| = \\sqrt{9 + 1 + 4} = \\sqrt{14}$\n$|\\vec{v}| = \\sqrt{1 + 4 + 1} = \\sqrt{6}$' },
          { label: 'c', task: 'Finn vinkelen $\\theta$.', solution: '$\\cos\\theta = \\frac{3}{\\sqrt{14} \\cdot \\sqrt{6}} = \\frac{3}{\\sqrt{84}} = \\frac{3}{2\\sqrt{21}}$\n$\\theta = \\arccos\\left(\\frac{3}{2\\sqrt{21}}\\right) \\approx 70{,}9°$' },
        ],
        solution: '$\\theta \\approx 70{,}9°$',
        hints: ['Bruk vinkelformelen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r2-5-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn verdien av $t$ slik at vektorene er ortogonale:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [t, 2, 1]$, $\\vec{b} = [3, -1, 1]$', solution: '$\\vec{a} \\cdot \\vec{b} = 3t - 2 + 1 = 3t - 1 = 0 \\Rightarrow t = \\frac{1}{3}$' },
          { label: 'b', task: '$\\vec{a} = [1, t, 2]$, $\\vec{b} = [4, 2, t]$', solution: '$\\vec{a} \\cdot \\vec{b} = 4 + 2t + 2t = 4 + 4t = 0 \\Rightarrow t = -1$' },
          { label: 'c', task: '$\\vec{a} = [t, t, 1]$, $\\vec{b} = [1, -1, t]$', solution: '$\\vec{a} \\cdot \\vec{b} = t - t + t = t = 0 \\Rightarrow t = 0$' },
        ],
        solution: 'a) $t = \\frac{1}{3}$, b) $t = -1$, c) $t = 0$',
        hints: ['Sett $\\vec{a} \\cdot \\vec{b} = 0$ og løs for $t$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r2-5-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-5-3-ex-6',
        number: '5.3.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn projeksjonen av $\\vec{a}$ på $\\vec{b}$:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [3, 4, 0]$, $\\vec{b} = [1, 0, 0]$', solution: '$\\text{proj}_{\\vec{b}} \\vec{a} = \\frac{3 \\cdot 1 + 4 \\cdot 0 + 0 \\cdot 0}{1}[1, 0, 0] = 3[1, 0, 0] = [3, 0, 0]$' },
          { label: 'b', task: '$\\vec{a} = [1, 2, 3]$, $\\vec{b} = [1, 1, 1]$', solution: '$\\vec{a} \\cdot \\vec{b} = 6$, $|\\vec{b}|^2 = 3$\n$\\text{proj}_{\\vec{b}} \\vec{a} = \\frac{6}{3}[1, 1, 1] = [2, 2, 2]$' },
          { label: 'c', task: '$\\vec{a} = [4, 3, 2]$, $\\vec{b} = [2, 0, 1]$', solution: '$\\vec{a} \\cdot \\vec{b} = 8 + 0 + 2 = 10$, $|\\vec{b}|^2 = 5$\n$\\text{proj}_{\\vec{b}} \\vec{a} = \\frac{10}{5}[2, 0, 1] = [4, 0, 2]$' },
        ],
        solution: 'a) $[3, 0, 0]$, b) $[2, 2, 2]$, c) $[4, 0, 2]$',
        hints: ['$\\text{proj}_{\\vec{b}} \\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|^2} \\vec{b}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r2-5-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-5-3-ex-7',
        number: '5.3.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En trekant har hjørner $A = (1, 0, 0)$, $B = (0, 2, 0)$ og $C = (0, 0, 3)$. Finn vinkelen i hjørnet $A$.',
        subTasks: [
          { label: 'a', task: 'Finn vektorene $\\overrightarrow{AB}$ og $\\overrightarrow{AC}$.', solution: '$\\overrightarrow{AB} = [-1, 2, 0]$\n$\\overrightarrow{AC} = [-1, 0, 3]$' },
          { label: 'b', task: 'Beregn vinkelen mellom $\\overrightarrow{AB}$ og $\\overrightarrow{AC}$.', solution: '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC} = 1 + 0 + 0 = 1$\n$|\\overrightarrow{AB}| = \\sqrt{5}$, $|\\overrightarrow{AC}| = \\sqrt{10}$\n$\\cos\\theta = \\frac{1}{\\sqrt{50}} = \\frac{1}{5\\sqrt{2}}$\n$\\theta = \\arccos\\left(\\frac{1}{5\\sqrt{2}}\\right) \\approx 81{,}9°$' },
        ],
        solution: 'Vinkelen i $A$ er ca. $81{,}9°$.',
        hints: ['Vinkelen i $A$ er vinkelen mellom $\\overrightarrow{AB}$ og $\\overrightarrow{AC}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r2-5-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-5-3-ex-8',
        number: '5.3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn alle verdier av $k$ slik at vinkelen mellom $\\vec{a} = [1, 1, k]$ og $\\vec{b} = [1, k, 1]$ er $60°$.',
        subTasks: [
          { label: 'a', task: 'Sett opp likningen ved hjelp av vinkelformelen.', solution: '$\\vec{a} \\cdot \\vec{b} = 1 + k + k = 1 + 2k$\n$|\\vec{a}| = \\sqrt{2 + k^2}$, $|\\vec{b}| = \\sqrt{2 + k^2}$\n$\\cos 60° = \\frac{1}{2}$\n\nLikning: $\\frac{1 + 2k}{2 + k^2} = \\frac{1}{2}$' },
          { label: 'b', task: 'Løs likningen.', solution: '$2(1 + 2k) = 2 + k^2$\n$2 + 4k = 2 + k^2$\n$k^2 - 4k = 0$\n$k(k - 4) = 0$\n$k = 0$ eller $k = 4$' },
        ],
        solution: '$k = 0$ eller $k = 4$',
        hints: ['Bruk at $\\cos 60° = \\frac{1}{2}$.', 'Sett inn i vinkelformelen og løs den kvadratiske likningen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r2-5-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-5-3-ex-9',
        number: '5.3.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vektoren $\\vec{v} = [3, 1, 2]$ skal dekomponeres i en komponent parallell med $\\vec{u} = [1, 1, 0]$ og en komponent ortogonal på $\\vec{u}$.',
        subTasks: [
          { label: 'a', task: 'Finn $\\vec{v}_{\\parallel}$, den parallelle komponenten.', solution: '$\\vec{v}_{\\parallel} = \\text{proj}_{\\vec{u}} \\vec{v} = \\frac{\\vec{v} \\cdot \\vec{u}}{|\\vec{u}|^2}\\vec{u} = \\frac{3 + 1 + 0}{2}[1, 1, 0] = 2[1, 1, 0] = [2, 2, 0]$' },
          { label: 'b', task: 'Finn $\\vec{v}_{\\perp}$, den ortogonale komponenten.', solution: '$\\vec{v}_{\\perp} = \\vec{v} - \\vec{v}_{\\parallel} = [3, 1, 2] - [2, 2, 0] = [1, -1, 2]$' },
          { label: 'c', task: 'Verifiser at $\\vec{v}_{\\perp} \\perp \\vec{u}$.', solution: '$\\vec{v}_{\\perp} \\cdot \\vec{u} = 1 \\cdot 1 + (-1) \\cdot 1 + 2 \\cdot 0 = 1 - 1 + 0 = 0$ ✓' },
        ],
        solution: '$\\vec{v}_{\\parallel} = [2, 2, 0]$, $\\vec{v}_{\\perp} = [1, -1, 2]$',
        hints: ['Den parallelle komponenten er projeksjonen.', 'Den ortogonale komponenten er $\\vec{v} - \\vec{v}_{\\parallel}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r2-5-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-5-3-ex-10',
        number: '5.3.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at for alle vektorer $\\vec{a}$ og $\\vec{b}$ gjelder: $|\\vec{a} + \\vec{b}|^2 + |\\vec{a} - \\vec{b}|^2 = 2(|\\vec{a}|^2 + |\\vec{b}|^2)$ (parallellogramidentiteten).',
        subTasks: [
          { label: 'a', task: 'Utvid $|\\vec{a} + \\vec{b}|^2$ ved hjelp av skalarproduktet.', solution: '$|\\vec{a} + \\vec{b}|^2 = (\\vec{a} + \\vec{b}) \\cdot (\\vec{a} + \\vec{b})$\n$= \\vec{a} \\cdot \\vec{a} + 2\\vec{a} \\cdot \\vec{b} + \\vec{b} \\cdot \\vec{b}$\n$= |\\vec{a}|^2 + 2\\vec{a} \\cdot \\vec{b} + |\\vec{b}|^2$' },
          { label: 'b', task: 'Utvid $|\\vec{a} - \\vec{b}|^2$ tilsvarende.', solution: '$|\\vec{a} - \\vec{b}|^2 = (\\vec{a} - \\vec{b}) \\cdot (\\vec{a} - \\vec{b})$\n$= |\\vec{a}|^2 - 2\\vec{a} \\cdot \\vec{b} + |\\vec{b}|^2$' },
          { label: 'c', task: 'Adder uttrykkene og vis identiteten.', solution: '$|\\vec{a} + \\vec{b}|^2 + |\\vec{a} - \\vec{b}|^2$\n$= (|\\vec{a}|^2 + 2\\vec{a} \\cdot \\vec{b} + |\\vec{b}|^2) + (|\\vec{a}|^2 - 2\\vec{a} \\cdot \\vec{b} + |\\vec{b}|^2)$\n$= 2|\\vec{a}|^2 + 2|\\vec{b}|^2$\n$= 2(|\\vec{a}|^2 + |\\vec{b}|^2)$ ✓' },
        ],
        solution: 'Se utledning i deloppgavene.',
        hints: ['Bruk at $|\\vec{v}|^2 = \\vec{v} \\cdot \\vec{v}$.', 'Bruk de distributive lovene for skalarprodukt.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_5_4: TextbookChapter = {
  id: 'r2-5-4',
  courseId: 'r2',
  chapterNumber: '5.4',
  title: 'Kryssproduktet',
  description: 'Vektorproduktet og dets geometriske egenskaper.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beregne kryssproduktet av to vektorer',
    'forstå den geometriske tolkningen av kryssproduktet',
    'bruke kryssproduktet til å finne normalvektorer',
    'anvende høyrehåndsregelen for å bestemme retning',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-5-4-intro',
      type: 'text',
      content: `## Hva er kryssproduktet?

Kryssproduktet (også kalt **vektorproduktet**) er en annen måte å "multiplisere" to vektorer på. I motsetning til skalarproduktet, som gir et **tall**, gir kryssproduktet en ny **vektor**.

Den resulterende vektoren står **vinkelrett** på begge de opprinnelige vektorene, noe som gjør kryssproduktet svært nyttig for å finne normalvektorer til plan.

**Viktig:** Kryssproduktet er kun definert i tre dimensjoner!`,
    },

    // ========== DEFINISJON ==========
    {
      id: 'r2-5-4-def-kryssprodukt',
      type: 'definition',
      title: 'Kryssproduktet',
      content: `For vektorer $\\vec{a} = [a_1, a_2, a_3]$ og $\\vec{b} = [b_1, b_2, b_3]$ er **kryssproduktet** definert som:

$$\\vec{a} \\times \\vec{b} = [a_2 b_3 - a_3 b_2, \\, a_3 b_1 - a_1 b_3, \\, a_1 b_2 - a_2 b_1]$$

**Huskeregel med determinant:**
$$\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}$$

der $\\vec{i}$, $\\vec{j}$, $\\vec{k}$ er enhetsvektorene langs aksene.`,
    },

    // Merknad om huskeregel
    {
      id: 'r2-5-4-huskeregel',
      type: 'note',
      content: `**Praktisk huskeregel for kryssproduktet:**

Tenk på komponentene syklisk: $1 \\to 2 \\to 3 \\to 1 \\to 2 \\to ...$

- Første komponent: $(a_2 b_3 - a_3 b_2)$ - "hopp over 1, bruk 2 og 3"
- Andre komponent: $(a_3 b_1 - a_1 b_3)$ - "hopp over 2, bruk 3 og 1"
- Tredje komponent: $(a_1 b_2 - a_2 b_1)$ - "hopp over 3, bruk 1 og 2"`,
    },

    // Eksempel 1: Beregne kryssprodukt
    {
      id: 'r2-5-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne kryssproduktet',
      problem: `Finn $\\vec{a} \\times \\vec{b}$ når $\\vec{a} = [2, 3, 1]$ og $\\vec{b} = [1, -1, 2]$.`,
      solution: `**Løsning:**

Vi bruker formelen komponent for komponent:

**Første komponent:** $a_2 b_3 - a_3 b_2 = 3 \\cdot 2 - 1 \\cdot (-1) = 6 + 1 = 7$

**Andre komponent:** $a_3 b_1 - a_1 b_3 = 1 \\cdot 1 - 2 \\cdot 2 = 1 - 4 = -3$

**Tredje komponent:** $a_1 b_2 - a_2 b_1 = 2 \\cdot (-1) - 3 \\cdot 1 = -2 - 3 = -5$

$$\\vec{a} \\times \\vec{b} = [7, -3, -5]$$`,
    },

    // ========== GEOMETRISKE EGENSKAPER ==========
    {
      id: 'r2-5-4-geometri-intro',
      type: 'text',
      content: `## Geometriske egenskaper`,
    },

    // Teorem: Kryssproduktet står vinkelrett
    {
      id: 'r2-5-4-theorem-vinkelrett',
      type: 'theorem',
      title: 'Kryssproduktet står vinkelrett på begge vektorer',
      content: `For alle vektorer $\\vec{a}$ og $\\vec{b}$ gjelder:

1. $(\\vec{a} \\times \\vec{b}) \\perp \\vec{a}$
2. $(\\vec{a} \\times \\vec{b}) \\perp \\vec{b}$

Med andre ord: Kryssproduktet $\\vec{a} \\times \\vec{b}$ er **ortogonalt** på både $\\vec{a}$ og $\\vec{b}$.`,
    },

    // Eksempel 2: Verifisere ortogonalitet
    {
      id: 'r2-5-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Verifisere at kryssproduktet er ortogonalt',
      problem: `Verifiser at $\\vec{a} \\times \\vec{b}$ fra forrige eksempel er ortogonalt på både $\\vec{a}$ og $\\vec{b}$.`,
      solution: `**Løsning:**

Vi har $\\vec{a} = [2, 3, 1]$, $\\vec{b} = [1, -1, 2]$ og $\\vec{a} \\times \\vec{b} = [7, -3, -5]$.

**Sjekk 1:** Er $(\\vec{a} \\times \\vec{b}) \\perp \\vec{a}$?
$$(\\vec{a} \\times \\vec{b}) \\cdot \\vec{a} = 7 \\cdot 2 + (-3) \\cdot 3 + (-5) \\cdot 1 = 14 - 9 - 5 = 0 \\checkmark$$

**Sjekk 2:** Er $(\\vec{a} \\times \\vec{b}) \\perp \\vec{b}$?
$$(\\vec{a} \\times \\vec{b}) \\cdot \\vec{b} = 7 \\cdot 1 + (-3) \\cdot (-1) + (-5) \\cdot 2 = 7 + 3 - 10 = 0 \\checkmark$$

Bekreftet! Kryssproduktet er ortogonalt på begge vektorene.`,
    },

    // ========== HØYREHÅNDSREGELEN ==========
    {
      id: 'r2-5-4-hoyrehand-intro',
      type: 'text',
      content: `## Høyrehåndsregelen

Retningen til $\\vec{a} \\times \\vec{b}$ bestemmes av **høyrehåndsregelen**:

1. Pek fingrene på høyre hånd i retning av $\\vec{a}$
2. Krøll fingrene mot $\\vec{b}$
3. Tommelen peker nå i retning av $\\vec{a} \\times \\vec{b}$

**Alternativ:** Tenk på en skrue. Hvis du skrur fra $\\vec{a}$ mot $\\vec{b}$, beveger skruen seg i retning av $\\vec{a} \\times \\vec{b}$.`,
    },

    // ========== LENGDEN AV KRYSSPRODUKTET ==========
    {
      id: 'r2-5-4-lengde-intro',
      type: 'text',
      content: `## Lengden av kryssproduktet`,
    },

    // Teorem: Lengde
    {
      id: 'r2-5-4-theorem-lengde',
      type: 'theorem',
      title: 'Lengden av kryssproduktet',
      content: `Lengden av kryssproduktet er:

$$|\\vec{a} \\times \\vec{b}| = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\sin\\theta$$

der $\\theta$ er vinkelen mellom $\\vec{a}$ og $\\vec{b}$.

**Geometrisk tolkning:** $|\\vec{a} \\times \\vec{b}|$ er lik arealet av parallellogrammet utspent av $\\vec{a}$ og $\\vec{b}$.`,
    },

    // ========== REGNEREGLER ==========
    {
      id: 'r2-5-4-regneregler',
      type: 'theorem',
      title: 'Regneregler for kryssproduktet',
      content: `For vektorer $\\vec{a}$, $\\vec{b}$, $\\vec{c}$ og skalar $k$ gjelder:

1. $\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$ (**antikommutativ** - rekkefølgen betyr noe!)
2. $\\vec{a} \\times (\\vec{b} + \\vec{c}) = \\vec{a} \\times \\vec{b} + \\vec{a} \\times \\vec{c}$ (distributiv)
3. $(k\\vec{a}) \\times \\vec{b} = k(\\vec{a} \\times \\vec{b}) = \\vec{a} \\times (k\\vec{b})$
4. $\\vec{a} \\times \\vec{a} = \\vec{0}$
5. $\\vec{a} \\times \\vec{0} = \\vec{0}$

**Viktig:** $\\vec{a} \\times \\vec{b} \\neq \\vec{b} \\times \\vec{a}$ (med mindre begge er $\\vec{0}$)`,
    },

    // Eksempel 3: Antikommutativitet
    {
      id: 'r2-5-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Antikommutativitet',
      problem: `Vis at $\\vec{b} \\times \\vec{a} = -(\\vec{a} \\times \\vec{b})$ for $\\vec{a} = [1, 0, 2]$ og $\\vec{b} = [0, 1, 1]$.`,
      solution: `**Løsning:**

**Beregn $\\vec{a} \\times \\vec{b}$:**
- Første: $0 \\cdot 1 - 2 \\cdot 1 = -2$
- Andre: $2 \\cdot 0 - 1 \\cdot 1 = -1$
- Tredje: $1 \\cdot 1 - 0 \\cdot 0 = 1$

$\\vec{a} \\times \\vec{b} = [-2, -1, 1]$

**Beregn $\\vec{b} \\times \\vec{a}$:**
- Første: $1 \\cdot 2 - 1 \\cdot 0 = 2$
- Andre: $1 \\cdot 1 - 0 \\cdot 2 = 1$
- Tredje: $0 \\cdot 0 - 1 \\cdot 1 = -1$

$\\vec{b} \\times \\vec{a} = [2, 1, -1]$

Vi ser at $[2, 1, -1] = -[-2, -1, 1]$, så $\\vec{b} \\times \\vec{a} = -(\\vec{a} \\times \\vec{b})$ ✓`,
    },

    // ========== ENHETSVEKTORER ==========
    {
      id: 'r2-5-4-enhetsvektorer',
      type: 'text',
      content: `## Kryssprodukt av enhetsvektorene

De standard enhetsvektorene $\\vec{i}$, $\\vec{j}$, $\\vec{k}$ oppfyller:

$$\\vec{i} \\times \\vec{j} = \\vec{k}, \\quad \\vec{j} \\times \\vec{k} = \\vec{i}, \\quad \\vec{k} \\times \\vec{i} = \\vec{j}$$

Og omvendt rekkefølge gir negative resultater:

$$\\vec{j} \\times \\vec{i} = -\\vec{k}, \\quad \\vec{k} \\times \\vec{j} = -\\vec{i}, \\quad \\vec{i} \\times \\vec{k} = -\\vec{j}$$

**Huskeregel:** Syklisk rekkefølge ($i \\to j \\to k \\to i$) gir pluss, motsatt rekkefølge gir minus.`,
    },

    // ========== NORMALVEKTOR ==========
    {
      id: 'r2-5-4-normalvektor-intro',
      type: 'text',
      content: `## Finne normalvektor til et plan

En viktig anvendelse av kryssproduktet er å finne en **normalvektor** til et plan. Hvis vi har to vektorer $\\vec{u}$ og $\\vec{v}$ som ligger i planet, vil $\\vec{n} = \\vec{u} \\times \\vec{v}$ stå vinkelrett på planet.`,
    },

    // Eksempel 4: Normalvektor
    {
      id: 'r2-5-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Finne normalvektor til et plan',
      problem: `Tre punkter $A = (1, 0, 2)$, $B = (3, 1, 1)$ og $C = (2, 2, 3)$ definerer et plan. Finn en normalvektor til dette planet.`,
      solution: `**Løsning:**

**Steg 1:** Finn to vektorer i planet:
$$\\overrightarrow{AB} = [3-1, 1-0, 1-2] = [2, 1, -1]$$
$$\\overrightarrow{AC} = [2-1, 2-0, 3-2] = [1, 2, 1]$$

**Steg 2:** Beregn kryssproduktet:
$$\\vec{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC}$$

- Første: $1 \\cdot 1 - (-1) \\cdot 2 = 1 + 2 = 3$
- Andre: $(-1) \\cdot 1 - 2 \\cdot 1 = -1 - 2 = -3$
- Tredje: $2 \\cdot 2 - 1 \\cdot 1 = 4 - 1 = 3$

$$\\vec{n} = [3, -3, 3]$$

Dette kan forenkles til $\\vec{n} = [1, -1, 1]$ (delt på 3).`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'r2-5-4-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // Oppgave 1
    {
      id: 'r2-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-5-4-ex-1',
        number: '5.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut kryssproduktet $\\vec{a} \\times \\vec{b}$:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [1, 0, 0]$, $\\vec{b} = [0, 1, 0]$', solution: '$\\vec{a} \\times \\vec{b} = [0 \\cdot 0 - 0 \\cdot 1, 0 \\cdot 0 - 1 \\cdot 0, 1 \\cdot 1 - 0 \\cdot 0] = [0, 0, 1]$' },
          { label: 'b', task: '$\\vec{a} = [1, 2, 0]$, $\\vec{b} = [0, 0, 3]$', solution: '$\\vec{a} \\times \\vec{b} = [2 \\cdot 3 - 0 \\cdot 0, 0 \\cdot 0 - 1 \\cdot 3, 1 \\cdot 0 - 2 \\cdot 0] = [6, -3, 0]$' },
          { label: 'c', task: '$\\vec{a} = [1, 1, 1]$, $\\vec{b} = [2, 2, 2]$', solution: '$\\vec{a} \\times \\vec{b} = [1 \\cdot 2 - 1 \\cdot 2, 1 \\cdot 2 - 1 \\cdot 2, 1 \\cdot 2 - 1 \\cdot 2] = [0, 0, 0]$' },
        ],
        solution: 'a) $[0, 0, 1]$, b) $[6, -3, 0]$, c) $[0, 0, 0]$',
        hints: ['Bruk formelen komponent for komponent.', 'I c) er vektorene parallelle.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r2-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-5-4-ex-2',
        number: '5.4.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut kryssproduktet $\\vec{u} \\times \\vec{v}$:',
        subTasks: [
          { label: 'a', task: '$\\vec{u} = [2, 1, 3]$, $\\vec{v} = [1, -1, 2]$', solution: '$(1 \\cdot 2 - 3 \\cdot (-1), 3 \\cdot 1 - 2 \\cdot 2, 2 \\cdot (-1) - 1 \\cdot 1) = (5, -1, -3)$' },
          { label: 'b', task: '$\\vec{u} = [3, 0, -1]$, $\\vec{v} = [2, 4, 0]$', solution: '$(0 \\cdot 0 - (-1) \\cdot 4, (-1) \\cdot 2 - 3 \\cdot 0, 3 \\cdot 4 - 0 \\cdot 2) = (4, -2, 12)$' },
        ],
        solution: 'a) $[5, -1, -3]$, b) $[4, -2, 12]$',
        hints: ['Første komponent: $u_2 v_3 - u_3 v_2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r2-5-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-5-4-ex-3',
        number: '5.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'La $\\vec{a} = [1, 2, -1]$ og $\\vec{b} = [3, 0, 2]$.',
        subTasks: [
          { label: 'a', task: 'Beregn $\\vec{a} \\times \\vec{b}$.', solution: '$(2 \\cdot 2 - (-1) \\cdot 0, (-1) \\cdot 3 - 1 \\cdot 2, 1 \\cdot 0 - 2 \\cdot 3) = (4, -5, -6)$' },
          { label: 'b', task: 'Verifiser at resultatet er ortogonalt på $\\vec{a}$.', solution: '$[4, -5, -6] \\cdot [1, 2, -1] = 4 - 10 + 6 = 0$ ✓' },
          { label: 'c', task: 'Verifiser at resultatet er ortogonalt på $\\vec{b}$.', solution: '$[4, -5, -6] \\cdot [3, 0, 2] = 12 + 0 - 12 = 0$ ✓' },
        ],
        solution: '$\\vec{a} \\times \\vec{b} = [4, -5, -6]$, og dette er ortogonalt på både $\\vec{a}$ og $\\vec{b}$.',
        hints: ['Bruk skalarproduktet for å sjekke ortogonalitet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r2-5-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn en vektor som er ortogonal på både $\\vec{u} = [1, 1, 0]$ og $\\vec{v} = [1, 0, 1]$.',
        subTasks: [
          { label: 'a', task: 'Beregn $\\vec{u} \\times \\vec{v}$.', solution: '$\\vec{u} \\times \\vec{v} = (1 \\cdot 1 - 0 \\cdot 0, 0 \\cdot 1 - 1 \\cdot 1, 1 \\cdot 0 - 1 \\cdot 1) = (1, -1, -1)$' },
          { label: 'b', task: 'Finn en enhetsvektor i samme retning.', solution: '$|\\vec{n}| = \\sqrt{1 + 1 + 1} = \\sqrt{3}$\n$\\hat{n} = \\frac{1}{\\sqrt{3}}[1, -1, -1]$' },
        ],
        solution: '$\\vec{n} = [1, -1, -1]$ er ortogonal på begge. Enhetsvektoren er $\\frac{1}{\\sqrt{3}}[1, -1, -1]$.',
        hints: ['Kryssproduktet gir en vektor ortogonal på begge.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r2-5-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tre punkter $A = (1, 0, 0)$, $B = (0, 2, 0)$ og $C = (0, 0, 3)$ definerer et plan. Finn en normalvektor til planet.',
        subTasks: [
          { label: 'a', task: 'Finn $\\overrightarrow{AB}$ og $\\overrightarrow{AC}$.', solution: '$\\overrightarrow{AB} = [-1, 2, 0]$\n$\\overrightarrow{AC} = [-1, 0, 3]$' },
          { label: 'b', task: 'Beregn normalvektoren $\\vec{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC}$.', solution: '$\\vec{n} = (2 \\cdot 3 - 0 \\cdot 0, 0 \\cdot (-1) - (-1) \\cdot 3, (-1) \\cdot 0 - 2 \\cdot (-1))$\n$= (6, 3, 2)$' },
        ],
        solution: '$\\vec{n} = [6, 3, 2]$',
        hints: ['Normalvektoren står vinkelrett på planet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r2-5-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-5-4-ex-6',
        number: '5.4.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk regnereglene til å forenkle uttrykkene:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} \\times \\vec{a}$', solution: '$\\vec{a} \\times \\vec{a} = \\vec{0}$ (en vektor krysset med seg selv er alltid null)' },
          { label: 'b', task: '$\\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{a}$', solution: '$\\vec{a} \\times \\vec{b} + \\vec{b} \\times \\vec{a} = \\vec{a} \\times \\vec{b} - \\vec{a} \\times \\vec{b} = \\vec{0}$' },
          { label: 'c', task: '$2(\\vec{a} \\times \\vec{b}) - \\vec{a} \\times (2\\vec{b})$', solution: '$2(\\vec{a} \\times \\vec{b}) - 2(\\vec{a} \\times \\vec{b}) = \\vec{0}$' },
        ],
        solution: 'Alle uttrykkene forenkles til $\\vec{0}$.',
        hints: ['Bruk antikommutativitet: $\\vec{b} \\times \\vec{a} = -(\\vec{a} \\times \\vec{b})$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r2-5-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-5-4-ex-7',
        number: '5.4.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn lengden av $\\vec{a} \\times \\vec{b}$ når $|\\vec{a}| = 3$, $|\\vec{b}| = 4$ og vinkelen mellom dem er $30°$.',
        subTasks: [
          { label: 'a', task: 'Bruk formelen $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$.', solution: '$|\\vec{a} \\times \\vec{b}| = 3 \\cdot 4 \\cdot \\sin 30° = 12 \\cdot \\frac{1}{2} = 6$' },
        ],
        solution: '$|\\vec{a} \\times \\vec{b}| = 6$',
        hints: ['$\\sin 30° = \\frac{1}{2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r2-5-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-5-4-ex-8',
        number: '5.4.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at for alle vektorer $\\vec{a}$, $\\vec{b}$ og $\\vec{c}$ gjelder: $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{c} = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$.',
        subTasks: [
          { label: 'a', task: 'Regn ut begge sider for $\\vec{a} = [1, 0, 0]$, $\\vec{b} = [0, 1, 0]$, $\\vec{c} = [0, 0, 1]$.', solution: 'Venstre side: $\\vec{a} \\times \\vec{b} = [0, 0, 1]$, så $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{c} = 1$.\n\nHøyre side: $\\vec{b} \\times \\vec{c} = [1, 0, 0]$, så $\\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = 1$.\n\nBegge sider gir 1. ✓' },
          { label: 'b', task: 'Hva representerer dette tallet geometrisk?', solution: 'Tallet $(\\vec{a} \\times \\vec{b}) \\cdot \\vec{c}$ er volumet av parallellpipedumet (den tredimensjonale parallellogrammet) utspent av $\\vec{a}$, $\\vec{b}$ og $\\vec{c}$.' },
        ],
        solution: 'Identiteten holder, og representerer volumet av parallellpipedumet.',
        hints: ['Dette kalles "trippelproduktet" eller "skalart trippelprodukt".'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r2-5-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-5-4-ex-9',
        number: '5.4.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn alle vektorer $\\vec{v} = [x, y, z]$ som er ortogonale på både $\\vec{a} = [1, 2, 1]$ og $\\vec{b} = [2, 1, -1]$.',
        subTasks: [
          { label: 'a', task: 'Metode 1: Bruk kryssproduktet.', solution: '$\\vec{a} \\times \\vec{b} = (2 \\cdot (-1) - 1 \\cdot 1, 1 \\cdot 2 - 1 \\cdot (-1), 1 \\cdot 1 - 2 \\cdot 2)$\n$= (-3, 3, -3) = -3(1, -1, 1)$\n\nAlle vektorer $\\vec{v} = t[1, -1, 1]$ for $t \\in \\mathbb{R}$ er ortogonale på begge.' },
          { label: 'b', task: 'Metode 2: Sett opp likningssystemet.', solution: '$\\vec{v} \\cdot \\vec{a} = 0: x + 2y + z = 0$\n$\\vec{v} \\cdot \\vec{b} = 0: 2x + y - z = 0$\n\nFra andre: $z = 2x + y$. Sett inn i første:\n$x + 2y + 2x + y = 0 \\Rightarrow 3x + 3y = 0 \\Rightarrow y = -x$\nDa: $z = 2x - x = x$\n\n$\\vec{v} = [x, -x, x] = x[1, -1, 1]$' },
        ],
        solution: 'Alle vektorer på formen $\\vec{v} = t[1, -1, 1]$ for $t \\neq 0$.',
        hints: ['Kryssproduktet gir én slik vektor. Alle multipla er også ortogonale på begge.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r2-5-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-5-4-ex-10',
        number: '5.4.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'La $\\vec{a}$, $\\vec{b}$ og $\\vec{c}$ være vilkårlige vektorer. Vis at $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$ (BAC-CAB-regelen).',
        subTasks: [
          { label: 'a', task: 'Verifiser formelen for $\\vec{a} = [1, 0, 0]$, $\\vec{b} = [0, 1, 0]$, $\\vec{c} = [0, 0, 1]$.', solution: 'Venstre side:\n$\\vec{b} \\times \\vec{c} = [1, 0, 0]$\n$\\vec{a} \\times [1, 0, 0] = [0, 0, 0]$\n\nHøyre side:\n$\\vec{a} \\cdot \\vec{c} = 0$, $\\vec{a} \\cdot \\vec{b} = 0$\n$0 \\cdot \\vec{b} - 0 \\cdot \\vec{c} = [0, 0, 0]$\n\nBegge sider gir $\\vec{0}$. ✓' },
          { label: 'b', task: 'Verifiser for $\\vec{a} = [1, 1, 0]$, $\\vec{b} = [1, 0, 1]$, $\\vec{c} = [0, 1, 1]$.', solution: 'Venstre side:\n$\\vec{b} \\times \\vec{c} = [-1, -1, 1]$\n$\\vec{a} \\times [-1, -1, 1] = [1, -1, 0]$\n\nHøyre side:\n$\\vec{a} \\cdot \\vec{c} = 1$, $\\vec{a} \\cdot \\vec{b} = 1$\n$1 \\cdot [1, 0, 1] - 1 \\cdot [0, 1, 1] = [1, -1, 0]$ ✓' },
        ],
        solution: 'Formelen er verifisert i begge tilfeller.',
        hints: ['Denne formelen kalles "vector triple product expansion" eller BAC-CAB.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_5_5: TextbookChapter = {
  id: 'r2-5-5',
  courseId: 'r2',
  chapterNumber: '5.5',
  title: 'Areal og volum med vektorer',
  description: 'Beregne areal og volum ved hjelp av kryss- og skalarprodukt.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne arealet av et parallellogram med vektorer',
    'beregne arealet av en trekant i rommet',
    'beregne volumet av et parallellpipedum',
    'bruke trippelproduktet til volumberegning',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-5-5-intro',
      type: 'text',
      content: `## Areal og volum med vektorer

Vektorregning gir oss elegante metoder for å beregne areal og volum av geometriske figurer i rommet. I dette kapittelet lærer vi hvordan kryssproduktet og trippelproduktet brukes til slike beregninger.`,
    },

    // ========== AREAL AV PARALLELLOGRAM ==========
    {
      id: 'r2-5-5-parallellogram-intro',
      type: 'text',
      content: `## Arealet av et parallellogram

Et parallellogram utspent av vektorene $\\vec{a}$ og $\\vec{b}$ har et åreal som kan beregnes ved hjelp av kryssproduktet.`,
    },

    // Teorem: Areal av parallellogram
    {
      id: 'r2-5-5-theorem-parallellogram',
      type: 'theorem',
      title: 'Arealet av et parallellogram',
      content: `Arealet $A$ av parallellogrammet utspent av $\\vec{a}$ og $\\vec{b}$ er:

$$A = |\\vec{a} \\times \\vec{b}|$$

**Forklaring:** Fra formelen $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$ ser vi at dette er grunnlinje ganget med høyde, som er formelen for arealet av et parallellogram.`,
    },

    // Eksempel 1: Areal av parallellogram
    {
      id: 'r2-5-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Areal av parallellogram',
      problem: `Finn arealet av parallellogrammet utspent av $\\vec{a} = [1, 2, 0]$ og $\\vec{b} = [3, 0, 4]$.`,
      solution: `**Løsning:**

**Steg 1:** Beregn kryssproduktet:
$$\\vec{a} \\times \\vec{b} = [2 \\cdot 4 - 0 \\cdot 0, \\, 0 \\cdot 3 - 1 \\cdot 4, \\, 1 \\cdot 0 - 2 \\cdot 3]$$
$$= [8, -4, -6]$$

**Steg 2:** Finn lengden:
$$|\\vec{a} \\times \\vec{b}| = \\sqrt{8^2 + (-4)^2 + (-6)^2} = \\sqrt{64 + 16 + 36} = \\sqrt{116} = 2\\sqrt{29}$$

Arealet er $2\\sqrt{29} \\approx 10{,}77$.`,
    },

    // ========== AREAL AV TREKANT ==========
    {
      id: 'r2-5-5-trekant-intro',
      type: 'text',
      content: `## Arealet av en trekant

En trekant er halvparten av et parallellogram, så vi får en enkel formel.`,
    },

    // Teorem: Areal av trekant
    {
      id: 'r2-5-5-theorem-trekant',
      type: 'theorem',
      title: 'Arealet av en trekant',
      content: `Arealet $A$ av trekanten med hjørner $A$, $B$ og $C$ er:

$$A = \\frac{1}{2}|\\overrightarrow{AB} \\times \\overrightarrow{AC}|$$

Alternativt kan vi bruke hvilke som helst to sidevektorer fra samme hjørne.`,
    },

    // Eksempel 2: Areal av trekant
    {
      id: 'r2-5-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Areal av trekant i rommet',
      problem: `Finn arealet av trekanten med hjørner $A = (1, 0, 0)$, $B = (0, 2, 0)$ og $C = (0, 0, 3)$.`,
      solution: `**Løsning:**

**Steg 1:** Finn sidevektorene fra $A$:
$$\\overrightarrow{AB} = [-1, 2, 0]$$
$$\\overrightarrow{AC} = [-1, 0, 3]$$

**Steg 2:** Beregn kryssproduktet:
$$\\overrightarrow{AB} \\times \\overrightarrow{AC} = [2 \\cdot 3 - 0 \\cdot 0, \\, 0 \\cdot (-1) - (-1) \\cdot 3, \\, (-1) \\cdot 0 - 2 \\cdot (-1)]$$
$$= [6, 3, 2]$$

**Steg 3:** Finn lengden og del på 2:
$$|\\overrightarrow{AB} \\times \\overrightarrow{AC}| = \\sqrt{36 + 9 + 4} = \\sqrt{49} = 7$$

$$A = \\frac{1}{2} \\cdot 7 = 3{,}5$$

Arealet av trekanten er $3{,}5$.`,
    },

    // ========== VOLUM AV PARALLELLPIPEDUM ==========
    {
      id: 'r2-5-5-volum-intro',
      type: 'text',
      content: `## Volumet av et parallellpipedum

Et **parallellpipedum** er en tredimensjonal figur der alle seks sideflater er parallellogrammer. Tenk på det som en "skjev boks" utspent av tre vektorer.`,
    },

    // Definisjon: Trippelprodukt
    {
      id: 'r2-5-5-def-trippelprodukt',
      type: 'definition',
      title: 'Det skalare trippelproduktet',
      content: `**Trippelproduktet** av tre vektorer $\\vec{a}$, $\\vec{b}$ og $\\vec{c}$ er:

$$[\\vec{a}, \\vec{b}, \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\times \\vec{b}) \\cdot \\vec{c}$$

Dette kan også beregnes som en $3 \\times 3$ determinant:

$$[\\vec{a}, \\vec{b}, \\vec{c}] = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}$$`,
    },

    // Teorem: Volum av parallellpipedum
    {
      id: 'r2-5-5-theorem-volum',
      type: 'theorem',
      title: 'Volumet av et parallellpipedum',
      content: `Volumet $V$ av parallellpipedumet utspent av $\\vec{a}$, $\\vec{b}$ og $\\vec{c}$ er:

$$V = |[\\vec{a}, \\vec{b}, \\vec{c}]| = |\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$$

**Merk:** Vi tar absoluttverdien fordi trippelproduktet kan være negativt (avhengig av orienteringen av vektorene).`,
    },

    // Eksempel 3: Volum av parallellpipedum
    {
      id: 'r2-5-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Volum av parallellpipedum',
      problem: `Finn volumet av parallellpipedumet utspent av $\\vec{a} = [1, 0, 0]$, $\\vec{b} = [1, 2, 0]$ og $\\vec{c} = [1, 2, 3]$.`,
      solution: `**Løsning:**

**Steg 1:** Beregn $\\vec{b} \\times \\vec{c}$:
$$\\vec{b} \\times \\vec{c} = [2 \\cdot 3 - 0 \\cdot 2, \\, 0 \\cdot 1 - 1 \\cdot 3, \\, 1 \\cdot 2 - 2 \\cdot 1] = [6, -3, 0]$$

**Steg 2:** Beregn skalarproduktet $\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$:
$$\\vec{a} \\cdot [6, -3, 0] = 1 \\cdot 6 + 0 \\cdot (-3) + 0 \\cdot 0 = 6$$

**Steg 3:** Ta absoluttverdien:
$$V = |6| = 6$$

Volumet er 6.`,
    },

    // ========== VOLUM AV TETRAEDER ==========
    {
      id: 'r2-5-5-tetraeder-intro',
      type: 'text',
      content: `## Volumet av et tetraeder

Et **tetraeder** er en pyramide med fire trekantflater. Volumet er en sjettedel av det tilsvarende parallellpipedumet.`,
    },

    // Teorem: Volum av tetraeder
    {
      id: 'r2-5-5-theorem-tetraeder',
      type: 'theorem',
      title: 'Volumet av et tetraeder',
      content: `Et tetraeder med hjørner $A$, $B$, $C$ og $D$ har volum:

$$V = \\frac{1}{6}|\\overrightarrow{AB} \\cdot (\\overrightarrow{AC} \\times \\overrightarrow{AD})|$$

Dette følger av at et tetraeder har volum $\\frac{1}{3}$ av en prismebase, og at prismen har volum $\\frac{1}{2}$ av parallellpipedumet.`,
    },

    // Eksempel 4: Volum av tetraeder
    {
      id: 'r2-5-5-example-4',
      type: 'example',
      title: 'Eksempel 4: Volum av tetraeder',
      problem: `Finn volumet av tetraederet med hjørner $A = (0, 0, 0)$, $B = (1, 0, 0)$, $C = (0, 1, 0)$ og $D = (0, 0, 1)$.`,
      solution: `**Løsning:**

**Steg 1:** Finn kantvektorene fra $A$:
$$\\overrightarrow{AB} = [1, 0, 0]$$
$$\\overrightarrow{AC} = [0, 1, 0]$$
$$\\overrightarrow{AD} = [0, 0, 1]$$

**Steg 2:** Beregn $\\overrightarrow{AC} \\times \\overrightarrow{AD}$:
$$\\overrightarrow{AC} \\times \\overrightarrow{AD} = [1 \\cdot 1 - 0 \\cdot 0, \\, 0 \\cdot 0 - 0 \\cdot 1, \\, 0 \\cdot 0 - 1 \\cdot 0] = [1, 0, 0]$$

**Steg 3:** Beregn trippelproduktet:
$$\\overrightarrow{AB} \\cdot [1, 0, 0] = 1$$

**Steg 4:** Finn volumet:
$$V = \\frac{1}{6}|1| = \\frac{1}{6}$$

Volumet av tetraederet er $\\frac{1}{6}$.`,
    },

    // ========== KOPLANARE VEKTORER ==========
    {
      id: 'r2-5-5-koplanar-intro',
      type: 'text',
      content: `## Koplanare vektorer

Tre vektorer er **koplanare** hvis de alle ligger i samme plan. Dette skjer når trippelproduktet er null.`,
    },

    // Teorem: Koplanaritet
    {
      id: 'r2-5-5-theorem-koplanar',
      type: 'theorem',
      title: 'Test for koplanaritet',
      content: `Tre vektorer $\\vec{a}$, $\\vec{b}$ og $\\vec{c}$ er koplanare hvis og bare hvis:

$$[\\vec{a}, \\vec{b}, \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c}) = 0$$

**Geometrisk tolkning:** Hvis vektorene er koplanare, har parallellpipedumet volum null - det er "flatt".`,
    },

    // Eksempel 5: Koplanaritet
    {
      id: 'r2-5-5-example-5',
      type: 'example',
      title: 'Eksempel 5: Undersøke koplanaritet',
      problem: `Undersøk om vektorene $\\vec{a} = [1, 2, 3]$, $\\vec{b} = [4, 5, 6]$ og $\\vec{c} = [7, 8, 9]$ er koplanare.`,
      solution: `**Løsning:**

Vi beregner trippelproduktet:

**Steg 1:** Finn $\\vec{b} \\times \\vec{c}$:
$$\\vec{b} \\times \\vec{c} = [5 \\cdot 9 - 6 \\cdot 8, \\, 6 \\cdot 7 - 4 \\cdot 9, \\, 4 \\cdot 8 - 5 \\cdot 7]$$
$$= [45 - 48, 42 - 36, 32 - 35] = [-3, 6, -3]$$

**Steg 2:** Finn $\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$:
$$[1, 2, 3] \\cdot [-3, 6, -3] = -3 + 12 - 9 = 0$$

Siden trippelproduktet er 0, er vektorene **koplanare**.

(Dette gir mening fordi $\\vec{c} = \\vec{a} + \\vec{b}$: $[1,2,3] + [4,5,6] + [2,1,0] = [7,8,9]$... Nei, la oss sjekke: de ligger faktisk i et plan fordi $\\vec{c} - \\vec{b} = [3, 3, 3]$ og $\\vec{b} - \\vec{a} = [3, 3, 3]$, så de er i aritmetisk progresjon.)`,
    },

    // ========== OPPGAVER ==========
    {
      id: 'r2-5-5-oppgaver-intro',
      type: 'text',
      content: `## Oppgaver`,
    },

    // Oppgave 1
    {
      id: 'r2-5-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-5-5-ex-1',
        number: '5.5.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av parallellogrammet utspent av vektorene:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [1, 0, 0]$ og $\\vec{b} = [0, 2, 0]$', solution: '$\\vec{a} \\times \\vec{b} = [0, 0, 2]$, $|\\vec{a} \\times \\vec{b}| = 2$. Areal = 2.' },
          { label: 'b', task: '$\\vec{a} = [3, 0, 0]$ og $\\vec{b} = [0, 0, 4]$', solution: '$\\vec{a} \\times \\vec{b} = [0, -12, 0]$, $|\\vec{a} \\times \\vec{b}| = 12$. Areal = 12.' },
          { label: 'c', task: '$\\vec{a} = [1, 1, 0]$ og $\\vec{b} = [0, 1, 1]$', solution: '$\\vec{a} \\times \\vec{b} = [1, -1, 1]$, $|\\vec{a} \\times \\vec{b}| = \\sqrt{3}$. Areal = $\\sqrt{3}$.' },
        ],
        solution: 'a) 2, b) 12, c) $\\sqrt{3}$',
        hints: ['Areal = $|\\vec{a} \\times \\vec{b}|$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r2-5-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-5-5-ex-2',
        number: '5.5.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av trekanten med hjørner:',
        subTasks: [
          { label: 'a', task: '$A = (0, 0, 0)$, $B = (1, 0, 0)$, $C = (0, 1, 0)$', solution: '$\\overrightarrow{AB} \\times \\overrightarrow{AC} = [0, 0, 1]$. Areal = $\\frac{1}{2} \\cdot 1 = \\frac{1}{2}$.' },
          { label: 'b', task: '$A = (1, 1, 1)$, $B = (2, 1, 1)$, $C = (1, 2, 1)$', solution: '$\\overrightarrow{AB} = [1, 0, 0]$, $\\overrightarrow{AC} = [0, 1, 0]$. Kryssprodukt = $[0, 0, 1]$. Areal = $\\frac{1}{2}$.' },
        ],
        solution: 'a) $\\frac{1}{2}$, b) $\\frac{1}{2}$',
        hints: ['Trekantareal = $\\frac{1}{2}|\\overrightarrow{AB} \\times \\overrightarrow{AC}|$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r2-5-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-5-5-ex-3',
        number: '5.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet av trekanten med hjørner $A = (1, 2, 3)$, $B = (4, 0, 5)$ og $C = (2, 1, 0)$.',
        subTasks: [
          { label: 'a', task: 'Finn $\\overrightarrow{AB}$ og $\\overrightarrow{AC}$.', solution: '$\\overrightarrow{AB} = [3, -2, 2]$, $\\overrightarrow{AC} = [1, -1, -3]$' },
          { label: 'b', task: 'Beregn $\\overrightarrow{AB} \\times \\overrightarrow{AC}$.', solution: '$\\overrightarrow{AB} \\times \\overrightarrow{AC} = [(-2)(-3) - 2(-1), 2(1) - 3(-3), 3(-1) - (-2)(1)]$\n$= [6 + 2, 2 + 9, -3 + 2] = [8, 11, -1]$' },
          { label: 'c', task: 'Finn arealet.', solution: '$|[8, 11, -1]| = \\sqrt{64 + 121 + 1} = \\sqrt{186}$\nAreal = $\\frac{1}{2}\\sqrt{186} \\approx 6{,}82$' },
        ],
        solution: 'Arealet er $\\frac{1}{2}\\sqrt{186}$.',
        hints: ['Husk å dele på 2 for trekant.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r2-5-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn volumet av parallellpipedumet utspent av:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [1, 0, 0]$, $\\vec{b} = [0, 1, 0]$, $\\vec{c} = [0, 0, 1]$', solution: '$\\vec{b} \\times \\vec{c} = [1, 0, 0]$\n$\\vec{a} \\cdot [1, 0, 0] = 1$\nVolum = $|1| = 1$' },
          { label: 'b', task: '$\\vec{a} = [2, 0, 0]$, $\\vec{b} = [0, 3, 0]$, $\\vec{c} = [0, 0, 4]$', solution: '$\\vec{b} \\times \\vec{c} = [12, 0, 0]$\n$\\vec{a} \\cdot [12, 0, 0] = 24$\nVolum = 24' },
        ],
        solution: 'a) 1, b) 24',
        hints: ['Volum = $|\\vec{a} \\cdot (\\vec{b} \\times \\vec{c})|$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r2-5-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn volumet av tetraederet med hjørner $A = (0, 0, 0)$, $B = (2, 0, 0)$, $C = (0, 3, 0)$ og $D = (0, 0, 4)$.',
        subTasks: [
          { label: 'a', task: 'Finn kantvektorene fra $A$.', solution: '$\\overrightarrow{AB} = [2, 0, 0]$, $\\overrightarrow{AC} = [0, 3, 0]$, $\\overrightarrow{AD} = [0, 0, 4]$' },
          { label: 'b', task: 'Beregn trippelproduktet.', solution: '$\\overrightarrow{AC} \\times \\overrightarrow{AD} = [12, 0, 0]$\n$\\overrightarrow{AB} \\cdot [12, 0, 0] = 24$' },
          { label: 'c', task: 'Finn volumet.', solution: '$V = \\frac{1}{6}|24| = 4$' },
        ],
        solution: 'Volumet er 4.',
        hints: ['Tetraedervolum = $\\frac{1}{6}$ ganger trippelproduktet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r2-5-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r2-5-5-ex-6',
        number: '5.5.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk om vektorene er koplanare:',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [1, 0, 1]$, $\\vec{b} = [0, 1, 1]$, $\\vec{c} = [1, 1, 2]$', solution: '$\\vec{b} \\times \\vec{c} = [1 \\cdot 2 - 1 \\cdot 1, 1 \\cdot 1 - 0 \\cdot 2, 0 \\cdot 1 - 1 \\cdot 1] = [1, 1, -1]$\n$\\vec{a} \\cdot [1, 1, -1] = 1 + 0 - 1 = 0$\n**Ja, koplanare.** (Merk: $\\vec{c} = \\vec{a} + \\vec{b}$)' },
          { label: 'b', task: '$\\vec{a} = [1, 0, 0]$, $\\vec{b} = [0, 1, 0]$, $\\vec{c} = [1, 1, 1]$', solution: '$\\vec{b} \\times \\vec{c} = [-1, 0, 1]$\n$\\vec{a} \\cdot [-1, 0, 1] = -1 \\neq 0$\n**Nei, ikke koplanare.**' },
        ],
        solution: 'a) Ja, b) Nei',
        hints: ['Vektorene er koplanare hvis trippelproduktet er 0.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r2-5-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r2-5-5-ex-7',
        number: '5.5.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et parallellogram har hjørner $A = (1, 0, 2)$, $B = (3, 1, 1)$, $C$ og $D = (2, 2, 3)$, der $ABCD$ er et parallellogram (i den rekkefølgen).',
        subTasks: [
          { label: 'a', task: 'Finn koordinatene til $C$.', solution: 'I et parallellogram er $\\overrightarrow{AB} = \\overrightarrow{DC}$.\n$\\overrightarrow{AB} = [2, 1, -1]$\n$C = D + \\overrightarrow{AB} = (2+2, 2+1, 3-1) = (4, 3, 2)$' },
          { label: 'b', task: 'Finn arealet av parallellogrammet.', solution: '$\\overrightarrow{AB} = [2, 1, -1]$, $\\overrightarrow{AD} = [1, 2, 1]$\n$\\overrightarrow{AB} \\times \\overrightarrow{AD} = [1 \\cdot 1 - (-1) \\cdot 2, (-1) \\cdot 1 - 2 \\cdot 1, 2 \\cdot 2 - 1 \\cdot 1] = [3, -3, 3]$\nAreal = $|[3, -3, 3]| = 3\\sqrt{3}$' },
        ],
        solution: 'a) $C = (4, 3, 2)$, b) Areal = $3\\sqrt{3}$',
        hints: ['Bruk at motstående sider i et parallellogram er like.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r2-5-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r2-5-5-ex-8',
        number: '5.5.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at arealet av trekanten med hjørner $(x_1, y_1)$, $(x_2, y_2)$ og $(x_3, y_3)$ i $xy$-planet er $\\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$.',
        subTasks: [
          { label: 'a', task: 'Skriv hjørnene som 3D-punkter med $z = 0$.', solution: '$A = (x_1, y_1, 0)$, $B = (x_2, y_2, 0)$, $C = (x_3, y_3, 0)$' },
          { label: 'b', task: 'Finn kryssproduktet $\\overrightarrow{AB} \\times \\overrightarrow{AC}$.', solution: '$\\overrightarrow{AB} = [x_2 - x_1, y_2 - y_1, 0]$\n$\\overrightarrow{AC} = [x_3 - x_1, y_3 - y_1, 0]$\n$\\overrightarrow{AB} \\times \\overrightarrow{AC} = [0, 0, (x_2-x_1)(y_3-y_1) - (y_2-y_1)(x_3-x_1)]$' },
          { label: 'c', task: 'Utvid og forenkle $z$-komponenten.', solution: '$(x_2-x_1)(y_3-y_1) - (y_2-y_1)(x_3-x_1)$\n$= x_2 y_3 - x_2 y_1 - x_1 y_3 + x_1 y_1 - y_2 x_3 + y_2 x_1 + y_1 x_3 - y_1 x_1$\n$= x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)$' },
        ],
        solution: 'Arealet blir $\\frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$.',
        hints: ['I planet har kryssproduktet bare $z$-komponent.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r2-5-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r2-5-5-ex-9',
        number: '5.5.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn volumet av tetraederet med hjørner $A = (1, 1, 1)$, $B = (2, 3, 1)$, $C = (1, 2, 3)$ og $D = (3, 1, 2)$.',
        subTasks: [
          { label: 'a', task: 'Finn kantvektorene fra $A$.', solution: '$\\overrightarrow{AB} = [1, 2, 0]$\n$\\overrightarrow{AC} = [0, 1, 2]$\n$\\overrightarrow{AD} = [2, 0, 1]$' },
          { label: 'b', task: 'Beregn trippelproduktet.', solution: '$\\overrightarrow{AC} \\times \\overrightarrow{AD} = [1 \\cdot 1 - 2 \\cdot 0, 2 \\cdot 2 - 0 \\cdot 1, 0 \\cdot 0 - 1 \\cdot 2] = [1, 4, -2]$\n$\\overrightarrow{AB} \\cdot [1, 4, -2] = 1 + 8 + 0 = 9$' },
          { label: 'c', task: 'Finn volumet.', solution: '$V = \\frac{1}{6}|9| = \\frac{3}{2}$' },
        ],
        solution: 'Volumet er $\\frac{3}{2}$.',
        hints: ['Bruk tetraederformelen med $\\frac{1}{6}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r2-5-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r2-5-5-ex-10',
        number: '5.5.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fire punkter $A = (0, 0, 0)$, $B = (1, 0, 0)$, $C = (0, 1, 0)$ og $D = (a, b, c)$ danner et tetraeder med volum $\\frac{1}{3}$. Finn en sammenheng mellom $a$, $b$ og $c$.',
        subTasks: [
          { label: 'a', task: 'Sett opp volumformelen.', solution: '$\\overrightarrow{AB} = [1, 0, 0]$, $\\overrightarrow{AC} = [0, 1, 0]$, $\\overrightarrow{AD} = [a, b, c]$\n$\\overrightarrow{AC} \\times \\overrightarrow{AD} = [c, 0, -a]$ (sjekk: $[1 \\cdot c - 0 \\cdot b, 0 \\cdot a - 0 \\cdot c, 0 \\cdot b - 1 \\cdot a] = [c, 0, -a]$)\n$\\overrightarrow{AB} \\cdot [c, 0, -a] = c$' },
          { label: 'b', task: 'Løs for sammenhengen.', solution: '$V = \\frac{1}{6}|c| = \\frac{1}{3}$\n$|c| = 2$\n$c = 2$ eller $c = -2$\n\nSammenhengen er at $c = \\pm 2$ (uavhengig av $a$ og $b$).' },
        ],
        solution: '$c = 2$ eller $c = -2$',
        hints: ['Volumet avhenger bare av høyden over grunnflaten.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_5_6: TextbookChapter = {
  id: 'r2-5-6',
  courseId: 'r2',
  chapterNumber: '5.6',
  title: 'Ligninger for plan',
  description: 'Lær om ulike måter å beskrive plan i rommet: parameterframstilling, normalvektorform og determinantform.',
  estimatedMinutes: 55,
  competenceGoals: [
    'Kunne sette opp parameterframstilling for et plan',
    'Kunne finne normalvektoren til et plan',
    'Kunne skrive planligninger på normalform',
    'Kunne avgjøre om punkter ligger i et plan',
  ],
  content: [
    {
      id: 'r2-5-6-intro',
      type: 'text',
      content: `## Innledning

Et plan i rommet kan beskrives på flere måter. I dette kapittelet skal vi lære tre hovedmetoder:

1. **Parameterframstilling** - ved hjelp av et punkt og to retningsvektorer
2. **Normalvektorform** - ved hjelp av et punkt og en normalvektor
3. **Determinantform** - ved hjelp av tre punkter

Alle disse metodene gir oss verktøy til å arbeide med plan i rommet, for eksempel for å finne skjæringspunkter, vinkler og avstander.`,
    },
    {
      id: 'r2-5-6-def-param',
      type: 'definition',
      title: 'Parameterframstilling for et plan',
      content: `Et plan gjennom punktet $P_0 = (x_0, y_0, z_0)$ med retningsvektorer $\\vec{u} = [u_1, u_2, u_3]$ og $\\vec{v} = [v_1, v_2, v_3]$ (som ikke er parallelle) kan skrives:

$$\\vec{r} = \\vec{r_0} + s \\cdot \\vec{u} + t \\cdot \\vec{v}$$

hvor $s$ og $t$ er reelle tall (parametere).

På koordinatform:
$$\\begin{cases} x = x_0 + s \\cdot u_1 + t \\cdot v_1 \\\\ y = y_0 + s \\cdot u_2 + t \\cdot v_2 \\\\ z = z_0 + s \\cdot u_3 + t \\cdot v_3 \\end{cases}$$`,
    },
    {
      id: 'r2-5-6-example1',
      type: 'example',
      title: 'Parameterframstilling gjennom tre punkter',
      problem: 'Finn parameterframstillingen for planet gjennom punktene $A = (1, 2, 3)$, $B = (4, 2, 1)$ og $C = (2, 5, 0)$.',
      solution: `Vi velger $A$ som basispunkt og finner retningsvektorene:

$\\vec{u} = \\overrightarrow{AB} = [4-1, 2-2, 1-3] = [3, 0, -2]$

$\\vec{v} = \\overrightarrow{AC} = [2-1, 5-2, 0-3] = [1, 3, -3]$

**Parameterframstillingen** blir:
$$\\vec{r} = [1, 2, 3] + s \\cdot [3, 0, -2] + t \\cdot [1, 3, -3]$$

På koordinatform:
$$\\begin{cases} x = 1 + 3s + t \\\\ y = 2 + 3t \\\\ z = 3 - 2s - 3t \\end{cases}$$`,
    },
    {
      id: 'r2-5-6-def-normal',
      type: 'definition',
      title: 'Normalvektor og normalform',
      content: `En **normalvektor** $\\vec{n}$ til et plan er en vektor som står vinkelrett på planet.

Hvis $\\vec{u}$ og $\\vec{v}$ er retningsvektorer for planet, er normalvektoren:
$$\\vec{n} = \\vec{u} \\times \\vec{v}$$

**Planligningen på normalform**: Et plan med normalvektor $\\vec{n} = [a, b, c]$ gjennom punktet $(x_0, y_0, z_0)$ har ligningen:
$$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$$

eller på **standardform**:
$$ax + by + cz = d$$
hvor $d = ax_0 + by_0 + cz_0$.`,
    },
    {
      id: 'r2-5-6-example2',
      type: 'example',
      title: 'Fra parameterframstilling til normalform',
      problem: 'Finn normalformen for planet fra forrige eksempel, gjennom $A = (1, 2, 3)$, $B = (4, 2, 1)$ og $C = (2, 5, 0)$.',
      solution: `Vi har retningsvektorene $\\vec{u} = [3, 0, -2]$ og $\\vec{v} = [1, 3, -3]$.

**Normalvektoren** finner vi med kryssproduktet:
$$\\vec{n} = \\vec{u} \\times \\vec{v} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 3 & 0 & -2 \\\\ 1 & 3 & -3 \\end{vmatrix}$$

$$= \\vec{i}(0 \\cdot (-3) - (-2) \\cdot 3) - \\vec{j}(3 \\cdot (-3) - (-2) \\cdot 1) + \\vec{k}(3 \\cdot 3 - 0 \\cdot 1)$$
$$= \\vec{i}(0 + 6) - \\vec{j}(-9 + 2) + \\vec{k}(9 - 0)$$
$$= [6, 7, 9]$$

**Planligningen** med $A = (1, 2, 3)$ og $\\vec{n} = [6, 7, 9]$:
$$6(x - 1) + 7(y - 2) + 9(z - 3) = 0$$
$$6x - 6 + 7y - 14 + 9z - 27 = 0$$
$$6x + 7y + 9z = 47$$`,
    },
    {
      id: 'r2-5-6-theorem',
      type: 'theorem',
      title: 'Avlesning av normalvektor',
      content: `For et plan med ligning $ax + by + cz = d$ er normalvektoren:
$$\\vec{n} = [a, b, c]$$

Koeffisientene foran $x$, $y$ og $z$ gir altså direkte normalvektoren.`,
    },
    {
      id: 'r2-5-6-example3',
      type: 'example',
      title: 'Parallelle plan',
      problem: 'Undersøk om planene $\\alpha: 2x - 4y + 6z = 12$ og $\\beta: x - 2y + 3z = 5$ er parallelle.',
      solution: `Vi finner normalvektorene:

$\\vec{n}_\\alpha = [2, -4, 6]$

$\\vec{n}_\\beta = [1, -2, 3]$

Vi ser at $\\vec{n}_\\alpha = 2 \\cdot \\vec{n}_\\beta$, så normalvektorene er parallelle.

**Konklusjon**: Planene er **parallelle**.

For å sjekke om de er identiske, tester vi om et punkt i det ene planet også ligger i det andre:
- Fra $\\alpha$ med $x = 0, y = 0$: $6z = 12 \\Rightarrow z = 2$. Punktet $(0, 0, 2)$ ligger i $\\alpha$.
- Setter vi inn i $\\beta$: $0 - 0 + 3 \\cdot 2 = 6 \\neq 5$.

Planene er **parallelle, men ikke identiske**.`,
    },
    {
      id: 'r2-5-6-example4',
      type: 'example',
      title: 'Plan gjennom punkt med gitt normalvektor',
      problem: 'Finn ligningen for planet gjennom $P = (2, -1, 4)$ med normalvektor $\\vec{n} = [3, 1, -2]$.',
      solution: `Vi bruker normalformen direkte:
$$3(x - 2) + 1(y - (-1)) + (-2)(z - 4) = 0$$
$$3x - 6 + y + 1 - 2z + 8 = 0$$
$$3x + y - 2z = -3$$

**Svar**: $3x + y - 2z = -3$`,
    },
    {
      id: 'r2-5-6-def-det',
      type: 'definition',
      title: 'Determinantform for plan',
      content: `Et plan gjennom tre punkter $P_1 = (x_1, y_1, z_1)$, $P_2 = (x_2, y_2, z_2)$ og $P_3 = (x_3, y_3, z_3)$ kan skrives som:

$$\\begin{vmatrix} x - x_1 & y - y_1 & z - z_1 \\\\ x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\\\ x_3 - x_1 & y_3 - y_1 & z_3 - z_1 \\end{vmatrix} = 0$$

Denne determinanten utvides til en lineær ligning i $x$, $y$ og $z$.`,
    },
    {
      id: 'r2-5-6-example5',
      type: 'example',
      title: 'Punkt i planet?',
      problem: 'Ligger punktet $Q = (3, 5, 1)$ i planet $2x - y + 3z = 4$?',
      solution: `Vi setter inn koordinatene til $Q$ i planligningen:
$$2 \\cdot 3 - 5 + 3 \\cdot 1 = 6 - 5 + 3 = 4 \\checkmark$$

Siden venstre side er lik høyre side, ligger $Q$ **i planet**.`,
    },
    {
      id: 'r2-5-6-note',
      type: 'note',
      content: `**Sjekke om et punkt ligger i et plan:**

Et punkt $(x_0, y_0, z_0)$ ligger i planet $ax + by + cz = d$ hvis og bare hvis:
$$ax_0 + by_0 + cz_0 = d$$`,
    },
    {
      id: 'r2-5-6-exercise1',
      type: 'exercise',
      exercise: {
        id: 'r2-5-6-ex1',
        number: '5.6.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn normalvektoren til planet $4x - 2y + 5z = 10$.',
        solution: 'Normalvektoren avleses direkte fra koeffisientene: $\\vec{n} = [4, -2, 5]$.',
        hints: ['Koeffisientene foran x, y og z gir normalvektoren.'],
      },
    },
    {
      id: 'r2-5-6-exercise2',
      type: 'exercise',
      exercise: {
        id: 'r2-5-6-ex2',
        number: '5.6.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv opp parameterframstillingen for planet gjennom $P = (2, 1, 0)$ med retningsvektorer $\\vec{u} = [1, 0, 1]$ og $\\vec{v} = [0, 1, -1]$.',
        solution: `Parameterframstillingen blir:
$$\\vec{r} = [2, 1, 0] + s \\cdot [1, 0, 1] + t \\cdot [0, 1, -1]$$

På koordinatform:
$$\\begin{cases} x = 2 + s \\\\ y = 1 + t \\\\ z = s - t \\end{cases}$$`,
      },
    },
    {
      id: 'r2-5-6-exercise3',
      type: 'exercise',
      exercise: {
        id: 'r2-5-6-ex3',
        number: '5.6.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn ligningen for planet gjennom punktene $A = (1, 0, 0)$, $B = (0, 2, 0)$ og $C = (0, 0, 3)$.',
        solution: `**Retningsvektorer**:
$\\vec{u} = \\overrightarrow{AB} = [-1, 2, 0]$
$\\vec{v} = \\overrightarrow{AC} = [-1, 0, 3]$

**Normalvektor** (kryssprodukt):
$\\vec{n} = \\vec{u} \\times \\vec{v} = [2 \\cdot 3 - 0 \\cdot 0, 0 \\cdot (-1) - (-1) \\cdot 3, (-1) \\cdot 0 - 2 \\cdot (-1)]$
$= [6, 3, 2]$

**Planligning** med $A = (1, 0, 0)$:
$6(x - 1) + 3(y - 0) + 2(z - 0) = 0$
$6x + 3y + 2z = 6$`,
        hints: ['Finn først retningsvektorene, deretter normalvektoren med kryssproduktet.'],
      },
    },
    {
      id: 'r2-5-6-exercise4',
      type: 'exercise',
      exercise: {
        id: 'r2-5-6-ex4',
        number: '5.6.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om punktet $Q = (2, 1, -1)$ ligger i planet $3x - 2y + 4z = 0$.',
        solution: `Vi setter inn koordinatene:
$3 \\cdot 2 - 2 \\cdot 1 + 4 \\cdot (-1) = 6 - 2 - 4 = 0 \\checkmark$

Siden uttrykket er lik 0 (høyre side), ligger $Q$ **i planet**.`,
      },
    },
    {
      id: 'r2-5-6-exercise5',
      type: 'exercise',
      exercise: {
        id: 'r2-5-6-ex5',
        number: '5.6.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn ligningen for planet som går gjennom $P = (1, 2, 3)$ og er parallelt med planet $2x + y - z = 5$.',
        solution: `Et parallelt plan har samme normalvektor: $\\vec{n} = [2, 1, -1]$.

Planligningen med punktet $P = (1, 2, 3)$:
$2(x - 1) + 1(y - 2) - 1(z - 3) = 0$
$2x - 2 + y - 2 - z + 3 = 0$
$2x + y - z = 1$`,
        hints: ['Parallelle plan har samme normalvektor.'],
      },
    },
    {
      id: 'r2-5-6-exercise6',
      type: 'exercise',
      exercise: {
        id: 'r2-5-6-ex6',
        number: '5.6.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn ligningen for planet gjennom origo som inneholder vektorene $\\vec{a} = [1, 2, 1]$ og $\\vec{b} = [2, 1, -1]$.',
        solution: `**Normalvektor**:
$\\vec{n} = \\vec{a} \\times \\vec{b} = [2 \\cdot (-1) - 1 \\cdot 1, 1 \\cdot 2 - 1 \\cdot (-1), 1 \\cdot 1 - 2 \\cdot 2]$
$= [-2 - 1, 2 + 1, 1 - 4] = [-3, 3, -3]$

Vi kan forenkle til $\\vec{n} = [1, -1, 1]$.

**Planligning** gjennom origo:
$1 \\cdot x - 1 \\cdot y + 1 \\cdot z = 0$
$x - y + z = 0$`,
      },
    },
    {
      id: 'r2-5-6-exercise7',
      type: 'exercise',
      exercise: {
        id: 'r2-5-6-ex7',
        number: '5.6.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn skjæringspunktet mellom planet $2x - y + z = 4$ og linjen som går gjennom $A = (1, 0, 1)$ med retningsvektor $\\vec{v} = [1, 1, 1]$.',
        solution: `**Parameterframstilling for linjen**:
$\\begin{cases} x = 1 + t \\\\ y = t \\\\ z = 1 + t \\end{cases}$

**Setter inn i planligningen**:
$2(1 + t) - t + (1 + t) = 4$
$2 + 2t - t + 1 + t = 4$
$3 + 2t = 4$
$t = \\frac{1}{2}$

**Skjæringspunktet**:
$x = 1 + \\frac{1}{2} = \\frac{3}{2}$, $y = \\frac{1}{2}$, $z = 1 + \\frac{1}{2} = \\frac{3}{2}$

**Svar**: $\\left(\\frac{3}{2}, \\frac{1}{2}, \\frac{3}{2}\\right)$`,
        hints: ['Sett opp parameterframstilling for linjen og sett inn i planligningen.'],
      },
    },
    {
      id: 'r2-5-6-exercise8',
      type: 'exercise',
      exercise: {
        id: 'r2-5-6-ex8',
        number: '5.6.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn ligningen for planet som inneholder linjen $\\ell: \\vec{r} = [1, 0, 2] + t[1, 1, 0]$ og punktet $P = (0, 2, 1)$.',
        solution: `**Punkter på linjen**: $A = (1, 0, 2)$ (for $t = 0$) og retningsvektor $\\vec{u} = [1, 1, 0]$.

**Andre retningsvektor**: $\\vec{v} = \\overrightarrow{AP} = [0-1, 2-0, 1-2] = [-1, 2, -1]$

**Normalvektor**:
$\\vec{n} = \\vec{u} \\times \\vec{v} = [1 \\cdot (-1) - 0 \\cdot 2, 0 \\cdot (-1) - 1 \\cdot (-1), 1 \\cdot 2 - 1 \\cdot (-1)]$
$= [-1, 1, 3]$

**Planligning** med $A = (1, 0, 2)$:
$-1(x - 1) + 1(y - 0) + 3(z - 2) = 0$
$-x + 1 + y + 3z - 6 = 0$
$-x + y + 3z = 5$

Eller: $x - y - 3z = -5$`,
      },
    },
    {
      id: 'r2-5-6-exercise9',
      type: 'exercise',
      exercise: {
        id: 'r2-5-6-ex9',
        number: '5.6.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn skjæringslinjen mellom planene $\\alpha: x + 2y - z = 3$ og $\\beta: 2x - y + z = 1$.',
        solution: `**Metode**: Finn retningsvektor og ett punkt på linjen.

**Retningsvektoren** er parallell med begge plan, altså vinkelrett på begge normalvektorer:
$\\vec{n}_\\alpha = [1, 2, -1]$, $\\vec{n}_\\beta = [2, -1, 1]$

$\\vec{v} = \\vec{n}_\\alpha \\times \\vec{n}_\\beta = [2 \\cdot 1 - (-1) \\cdot (-1), (-1) \\cdot 2 - 1 \\cdot 1, 1 \\cdot (-1) - 2 \\cdot 2]$
$= [2 - 1, -2 - 1, -1 - 4] = [1, -3, -5]$

**Finn et punkt** ved å sette $z = 0$:
$x + 2y = 3$ og $2x - y = 1$

Fra andre ligning: $y = 2x - 1$. Sett inn i første: $x + 2(2x - 1) = 3 \\Rightarrow 5x = 5 \\Rightarrow x = 1$, $y = 1$.

Punkt: $(1, 1, 0)$

**Skjæringslinje**:
$$\\vec{r} = [1, 1, 0] + t[1, -3, -5]$$`,
        hints: ['Retningsvektoren til skjæringslinjen er kryssproduktet av normalvektorene.'],
      },
    },
    {
      id: 'r2-5-6-exercise10',
      type: 'exercise',
      exercise: {
        id: 'r2-5-6-ex10',
        number: '5.6.10',
        type: 'upload',
        difficulty: 'vanskelig',
        task: `Et tetraeder har hjørner i $A = (0, 0, 0)$, $B = (4, 0, 0)$, $C = (0, 3, 0)$ og $D = (0, 0, 5)$.

a) Finn ligningen for planet gjennom $B$, $C$ og $D$.
b) Finn vinkelen mellom dette planet og $xy$-planet.`,
        solution: `**a)** Retningsvektorer:
$\\vec{u} = \\overrightarrow{BC} = [-4, 3, 0]$, $\\vec{v} = \\overrightarrow{BD} = [-4, 0, 5]$

Normalvektor:
$\\vec{n} = \\vec{u} \\times \\vec{v} = [3 \\cdot 5 - 0 \\cdot 0, 0 \\cdot (-4) - (-4) \\cdot 5, (-4) \\cdot 0 - 3 \\cdot (-4)]$
$= [15, 20, 12]$

Planligning med $B = (4, 0, 0)$:
$15(x - 4) + 20y + 12z = 0$
$15x + 20y + 12z = 60$

**b)** $xy$-planet har normalvektor $\\vec{n}_{xy} = [0, 0, 1]$.

Vinkelen $\\theta$ mellom planene:
$\\cos \\theta = \\frac{|\\vec{n} \\cdot \\vec{n}_{xy}|}{|\\vec{n}| \\cdot |\\vec{n}_{xy}|} = \\frac{|12|}{\\sqrt{15^2 + 20^2 + 12^2} \\cdot 1} = \\frac{12}{\\sqrt{769}}$

$\\theta = \\arccos\\left(\\frac{12}{\\sqrt{769}}\\right) \\approx 64.4°$`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_5_7: TextbookChapter = {
  id: 'r2-5-7',
  courseId: 'r2',
  chapterNumber: '5.7',
  title: 'Linjer i rommet',
  description: 'Lær om parameterframstilling for linjer i rommet, skjæring mellom linjer, og vinkler mellom linjer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'Kunne sette opp parameterframstilling for en linje i rommet',
    'Kunne finne skjæringspunktet mellom to linjer',
    'Kunne avgjøre om linjer er parallelle, skjærende eller vindskjeve',
    'Kunne beregne vinkelen mellom to linjer',
  ],
  content: [
    {
      id: 'r2-5-7-intro',
      type: 'text',
      content: `## Innledning

En linje i rommet kan ikke beskrives med én enkelt ligning slik som i planet. I stedet bruker vi **parameterframstilling**, som beskriver alle punkter på linjen ved hjelp av én parameter.

I dette kapittelet skal vi lære å:
- Sette opp parameterframstilling for linjer
- Finne skjæringspunkter mellom linjer
- Klassifisere linjepar (parallelle, skjærende, vindskjeve)
- Beregne vinkler mellom linjer`,
    },
    {
      id: 'r2-5-7-def-param',
      type: 'definition',
      title: 'Parameterframstilling for en linje',
      content: `En linje gjennom punktet $P_0 = (x_0, y_0, z_0)$ med retningsvektor $\\vec{v} = [a, b, c]$ kan skrives:

$$\\vec{r} = \\vec{r_0} + t \\cdot \\vec{v}$$

hvor $t$ er en reell parameter.

**På koordinatform**:
$$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases}$$

Ulike verdier av $t$ gir ulike punkter på linjen.`,
    },
    {
      id: 'r2-5-7-example1',
      type: 'example',
      title: 'Linje gjennom to punkter',
      problem: 'Finn parameterframstillingen for linjen gjennom $A = (1, 2, 3)$ og $B = (4, -1, 5)$.',
      solution: `**Retningsvektoren** er:
$$\\vec{v} = \\overrightarrow{AB} = [4-1, -1-2, 5-3] = [3, -3, 2]$$

Med $A$ som basispunkt får vi:
$$\\vec{r} = [1, 2, 3] + t[3, -3, 2]$$

**På koordinatform**:
$$\\begin{cases} x = 1 + 3t \\\\ y = 2 - 3t \\\\ z = 3 + 2t \\end{cases}$$

**Kontroll**: For $t = 0$ får vi $A = (1, 2, 3)$. For $t = 1$ får vi $(4, -1, 5) = B$. `,
    },
    {
      id: 'r2-5-7-note1',
      type: 'note',
      content: `**Samme linje, ulike framstillinger:**

En linje kan beskrives på uendelig mange måter ved å velge:
- Forskjellige basispunkt på linjen
- Forskjellige retningsvektorer (parallelle vektorer)

For eksempel beskriver $\\vec{r} = [4, -1, 5] + t[-6, 6, -4]$ samme linje som i eksempelet over.`,
    },
    {
      id: 'r2-5-7-def-class',
      type: 'definition',
      title: 'Klassifisering av linjepar',
      content: `To linjer i rommet kan være:

1. **Parallelle**: Retningsvektorene er parallelle ($\\vec{v}_1 = k \\cdot \\vec{v}_2$)
   - *Sammenfallende*: Linjene er identiske
   - *Ekte parallelle*: Linjene skjærer ikke

2. **Skjærende**: Linjene har nøyaktig ett felles punkt

3. **Vindskjeve**: Linjene ligger ikke i samme plan og har ingen felles punkter`,
    },
    {
      id: 'r2-5-7-example2',
      type: 'example',
      title: 'Finne skjæringspunkt',
      problem: `Finn eventuelt skjæringspunkt mellom linjene:
- $\\ell_1: \\vec{r} = [1, 2, 0] + s[1, 1, 1]$
- $\\ell_2: \\vec{r} = [2, 1, 1] + t[1, -1, 0]$`,
      solution: `For at linjene skal skjære, må det finnes $s$ og $t$ slik at punktene er like:

$$\\begin{cases} 1 + s = 2 + t \\\\ 2 + s = 1 - t \\\\ 0 + s = 1 + 0 \\cdot t \\end{cases}$$

Fra tredje ligning: $s = 1$

Setter inn i første ligning: $1 + 1 = 2 + t \\Rightarrow t = 0$

**Kontroll** i andre ligning: $2 + 1 = 3$ og $1 - 0 = 1$. Dette stemmer **ikke**!

**Konklusjon**: Linjene skjærer ikke.

Siden retningsvektorene $[1, 1, 1]$ og $[1, -1, 0]$ ikke er parallelle, er linjene **vindskjeve**.`,
    },
    {
      id: 'r2-5-7-example3',
      type: 'example',
      title: 'Skjærende linjer',
      problem: `Finn skjæringspunktet mellom:
- $\\ell_1: \\vec{r} = [0, 1, 2] + s[1, 2, 1]$
- $\\ell_2: \\vec{r} = [3, 5, 1] + t[1, 1, -1]$`,
      solution: `Vi setter koordinatene like:

$$\\begin{cases} s = 3 + t \\\\ 1 + 2s = 5 + t \\\\ 2 + s = 1 - t \\end{cases}$$

Fra første: $s = 3 + t$

Setter inn i andre: $1 + 2(3 + t) = 5 + t \\Rightarrow 1 + 6 + 2t = 5 + t \\Rightarrow t = -2$

Da er $s = 3 + (-2) = 1$

**Kontroll** i tredje: $2 + 1 = 3$ og $1 - (-2) = 3$. Stemmer!

**Skjæringspunktet** (sett inn $s = 1$ i $\\ell_1$):
$$(0 + 1, 1 + 2, 2 + 1) = (1, 3, 3)$$`,
    },
    {
      id: 'r2-5-7-theorem',
      type: 'theorem',
      title: 'Vinkel mellom linjer',
      content: `Vinkelen $\\theta$ mellom to linjer med retningsvektorer $\\vec{v}_1$ og $\\vec{v}_2$ er gitt ved:

$$\\cos \\theta = \\frac{|\\vec{v}_1 \\cdot \\vec{v}_2|}{|\\vec{v}_1| \\cdot |\\vec{v}_2|}$$

Vi bruker absoluttverdi fordi vi ønsker den spisse vinkelen ($0° \\leq \\theta \\leq 90°$).`,
    },
    {
      id: 'r2-5-7-example4',
      type: 'example',
      title: 'Vinkel mellom linjer',
      problem: `Finn vinkelen mellom linjene:
- $\\ell_1: \\vec{r} = [1, 0, 2] + s[2, 1, 1]$
- $\\ell_2: \\vec{r} = [0, 1, 0] + t[1, -1, 2]$`,
      solution: `**Retningsvektorer**: $\\vec{v}_1 = [2, 1, 1]$ og $\\vec{v}_2 = [1, -1, 2]$

**Skalarprodukt**:
$$\\vec{v}_1 \\cdot \\vec{v}_2 = 2 \\cdot 1 + 1 \\cdot (-1) + 1 \\cdot 2 = 2 - 1 + 2 = 3$$

**Lengder**:
$$|\\vec{v}_1| = \\sqrt{4 + 1 + 1} = \\sqrt{6}$$
$$|\\vec{v}_2| = \\sqrt{1 + 1 + 4} = \\sqrt{6}$$

**Vinkelen**:
$$\\cos \\theta = \\frac{|3|}{\\sqrt{6} \\cdot \\sqrt{6}} = \\frac{3}{6} = 0.5$$

$$\\theta = \\arccos(0.5) = 60°$$`,
    },
    {
      id: 'r2-5-7-example5',
      type: 'example',
      title: 'Er linjene parallelle?',
      problem: `Undersøk om linjene er parallelle:
- $\\ell_1: \\vec{r} = [1, 2, 3] + s[2, -4, 6]$
- $\\ell_2: \\vec{r} = [0, 0, 1] + t[-1, 2, -3]$`,
      solution: `Vi sjekker om retningsvektorene er parallelle:

$\\vec{v}_1 = [2, -4, 6]$ og $\\vec{v}_2 = [-1, 2, -3]$

Vi ser at $\\vec{v}_1 = -2 \\cdot \\vec{v}_2$:
$$[2, -4, 6] = -2 \\cdot [-1, 2, -3] = [2, -4, 6] \\checkmark$$

**Konklusjon**: Linjene er **parallelle**.

For å sjekke om de er identiske, tester vi om et punkt fra $\\ell_2$ ligger på $\\ell_1$:

Punktet $(0, 0, 1)$ fra $\\ell_2$: Ligger det på $\\ell_1$?
$$\\begin{cases} 0 = 1 + 2s \\Rightarrow s = -\\frac{1}{2} \\\\ 0 = 2 - 4s \\Rightarrow s = \\frac{1}{2} \\end{cases}$$

Ulike verdier av $s$ betyr at punktet **ikke** ligger på $\\ell_1$.

Linjene er **parallelle, men ikke sammenfallende**.`,
    },
    {
      id: 'r2-5-7-warning',
      type: 'warning',
      title: 'Vindskjeve linjer',
      content: `I tre dimensjoner kan to linjer være **vindskjeve** - de skjærer ikke og er ikke parallelle. Dette er en viktig forskjell fra planet, der to linjer enten er parallelle eller skjærende.

Vindskjeve linjer ligger i ulike plan og "passerer forbi hverandre" uten å møtes.`,
    },
    {
      id: 'r2-5-7-exercise1',
      type: 'exercise',
      exercise: {
        id: 'r2-5-7-ex1',
        number: '5.7.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv parameterframstillingen for linjen gjennom $P = (2, -1, 3)$ med retningsvektor $\\vec{v} = [1, 4, -2]$.',
        solution: `Parameterframstillingen blir:
$$\\vec{r} = [2, -1, 3] + t[1, 4, -2]$$

På koordinatform:
$$\\begin{cases} x = 2 + t \\\\ y = -1 + 4t \\\\ z = 3 - 2t \\end{cases}$$`,
      },
    },
    {
      id: 'r2-5-7-exercise2',
      type: 'exercise',
      exercise: {
        id: 'r2-5-7-ex2',
        number: '5.7.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn parameterframstillingen for linjen gjennom $A = (3, 1, 2)$ og $B = (1, 4, -1)$.',
        solution: `Retningsvektor: $\\vec{v} = \\overrightarrow{AB} = [1-3, 4-1, -1-2] = [-2, 3, -3]$

Parameterframstilling:
$$\\vec{r} = [3, 1, 2] + t[-2, 3, -3]$$`,
      },
    },
    {
      id: 'r2-5-7-exercise3',
      type: 'exercise',
      exercise: {
        id: 'r2-5-7-ex3',
        number: '5.7.3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Ligger punktet $Q = (5, 7, 0)$ på linjen $\\ell: \\vec{r} = [1, 3, 2] + t[2, 2, -1]$?',
        solution: `Vi sjekker om det finnes en $t$-verdi som gir $Q$:

$$\\begin{cases} 5 = 1 + 2t \\Rightarrow t = 2 \\\\ 7 = 3 + 2t \\Rightarrow t = 2 \\\\ 0 = 2 - t \\Rightarrow t = 2 \\end{cases}$$

Alle ligninger gir $t = 2$, så $Q$ **ligger på linjen**.`,
        hints: ['Sett inn koordinatene og løs for t. Hvis alle ligninger gir samme t, ligger punktet på linjen.'],
      },
    },
    {
      id: 'r2-5-7-exercise4',
      type: 'exercise',
      exercise: {
        id: 'r2-5-7-ex4',
        number: '5.7.4',
        type: 'classic',
        difficulty: 'medium',
        task: `Avgjør om linjene er parallelle, skjærende eller vindskjeve:
- $\\ell_1: \\vec{r} = [1, 0, 1] + s[1, 2, 3]$
- $\\ell_2: \\vec{r} = [2, 2, 4] + t[2, 4, 6]$`,
        solution: `Retningsvektorer: $\\vec{v}_1 = [1, 2, 3]$ og $\\vec{v}_2 = [2, 4, 6]$

Vi ser at $\\vec{v}_2 = 2 \\cdot \\vec{v}_1$, så linjene er **parallelle**.

Sjekk om de er identiske - ligger $(2, 2, 4)$ på $\\ell_1$?
$$\\begin{cases} 2 = 1 + s \\Rightarrow s = 1 \\\\ 2 = 0 + 2s \\Rightarrow s = 1 \\\\ 4 = 1 + 3s \\Rightarrow s = 1 \\end{cases}$$

Alle gir $s = 1$, så linjene er **identiske/sammenfallende**.`,
      },
    },
    {
      id: 'r2-5-7-exercise5',
      type: 'exercise',
      exercise: {
        id: 'r2-5-7-ex5',
        number: '5.7.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Finn skjæringspunktet mellom:
- $\\ell_1: \\vec{r} = [2, 1, 0] + s[1, -1, 2]$
- $\\ell_2: \\vec{r} = [4, 0, 3] + t[1, 0, -1]$`,
        solution: `Setter koordinatene like:
$$\\begin{cases} 2 + s = 4 + t \\\\ 1 - s = 0 \\\\ 2s = 3 - t \\end{cases}$$

Fra andre ligning: $s = 1$

Fra første: $2 + 1 = 4 + t \\Rightarrow t = -1$

Kontroll i tredje: $2 \\cdot 1 = 2$ og $3 - (-1) = 4$. Stemmer **ikke**.

**Konklusjon**: Linjene er **vindskjeve**.`,
        hints: ['Sett opp likningssystem og sjekk om løsningen er konsistent.'],
      },
    },
    {
      id: 'r2-5-7-exercise6',
      type: 'exercise',
      exercise: {
        id: 'r2-5-7-ex6',
        number: '5.7.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn vinkelen mellom linjene $\\ell_1: \\vec{r} = [0, 0, 0] + s[1, 1, 0]$ og $\\ell_2: \\vec{r} = [1, 0, 1] + t[0, 1, 1]$.',
        solution: `Retningsvektorer: $\\vec{v}_1 = [1, 1, 0]$ og $\\vec{v}_2 = [0, 1, 1]$

Skalarprodukt: $\\vec{v}_1 \\cdot \\vec{v}_2 = 0 + 1 + 0 = 1$

Lengder: $|\\vec{v}_1| = \\sqrt{2}$, $|\\vec{v}_2| = \\sqrt{2}$

Vinkel: $\\cos \\theta = \\frac{|1|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$

$\\theta = \\arccos(0.5) = 60°$`,
      },
    },
    {
      id: 'r2-5-7-exercise7',
      type: 'exercise',
      exercise: {
        id: 'r2-5-7-ex7',
        number: '5.7.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn ligningen for linjen som går gjennom $P = (1, 2, 3)$ og er parallell med linjen $\\ell: \\vec{r} = [0, 1, 0] + t[2, -1, 4]$.',
        solution: `En parallell linje har samme retningsvektor: $\\vec{v} = [2, -1, 4]$

Parameterframstilling med basispunkt $P$:
$$\\vec{r} = [1, 2, 3] + t[2, -1, 4]$$

På koordinatform:
$$\\begin{cases} x = 1 + 2t \\\\ y = 2 - t \\\\ z = 3 + 4t \\end{cases}$$`,
      },
    },
    {
      id: 'r2-5-7-exercise8',
      type: 'exercise',
      exercise: {
        id: 'r2-5-7-ex8',
        number: '5.7.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Finn skjæringspunktet mellom:
- $\\ell_1: \\vec{r} = [1, 2, 1] + s[2, 1, 3]$
- $\\ell_2: \\vec{r} = [3, 0, 4] + t[-1, 2, 0]$`,
        solution: `Setter koordinatene like:
$$\\begin{cases} 1 + 2s = 3 - t \\\\ 2 + s = 2t \\\\ 1 + 3s = 4 \\end{cases}$$

Fra tredje: $3s = 3 \\Rightarrow s = 1$

Fra andre: $2 + 1 = 2t \\Rightarrow t = \\frac{3}{2}$

Kontroll i første: $1 + 2 = 3$ og $3 - \\frac{3}{2} = \\frac{3}{2}$. Stemmer **ikke**.

**Konklusjon**: Linjene er **vindskjeve**.`,
        hints: ['Løs likningssystemet og sjekk alle tre ligninger.'],
      },
    },
    {
      id: 'r2-5-7-exercise9',
      type: 'exercise',
      exercise: {
        id: 'r2-5-7-ex9',
        number: '5.7.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Finn parameterframstillingen for linjen som går gjennom punktet $P = (2, 1, -1)$ og skjærer begge linjene:
- $\\ell_1$: $x$-aksen
- $\\ell_2$: Linjen $\\vec{r} = [0, 1, 1] + t[1, 0, 0]$`,
        solution: `$x$-aksen har framstilling $\\vec{r} = t[1, 0, 0]$, så punkter på $x$-aksen er $(a, 0, 0)$.

Linjen $\\ell_2$ har punkter $(t, 1, 1)$.

Linjen gjennom $P = (2, 1, -1)$ og $(a, 0, 0)$ har retningsvektor $[a-2, -1, 1]$.

For at denne linjen også skal gå gjennom $(t, 1, 1)$, må:
$$\\overrightarrow{P(t,1,1)} = k \\cdot [a-2, -1, 1]$$
$$[t-2, 0, 2] = k \\cdot [a-2, -1, 1]$$

Fra andre komponent: $0 = -k \\Rightarrow k = 0$

Men $k = 0$ gir $[t-2, 0, 2] = [0, 0, 0]$, som krever $t = 2$ og $2 = 0$. Umulig!

**Konklusjon**: Det finnes ingen slik linje.`,
      },
    },
    {
      id: 'r2-5-7-exercise10',
      type: 'exercise',
      exercise: {
        id: 'r2-5-7-ex10',
        number: '5.7.10',
        type: 'upload',
        difficulty: 'vanskelig',
        task: `En linje $\\ell$ går gjennom punktet $A = (1, 2, 3)$ og er vinkelrett på planet $\\alpha: 2x - y + 2z = 5$.

a) Finn parameterframstillingen for $\\ell$.
b) Finn skjæringspunktet mellom $\\ell$ og $\\alpha$.
c) Finn avstanden fra $A$ til planet $\\alpha$.`,
        solution: `**a)** Normalvektoren til planet er $\\vec{n} = [2, -1, 2]$.

Siden linjen er vinkelrett på planet, er den parallell med normalvektoren.

Parameterframstilling:
$$\\vec{r} = [1, 2, 3] + t[2, -1, 2]$$

**b)** Setter inn i planligningen:
$2(1 + 2t) - (2 - t) + 2(3 + 2t) = 5$
$2 + 4t - 2 + t + 6 + 4t = 5$
$6 + 9t = 5$
$t = -\\frac{1}{9}$

Skjæringspunkt:
$x = 1 - \\frac{2}{9} = \\frac{7}{9}$, $y = 2 + \\frac{1}{9} = \\frac{19}{9}$, $z = 3 - \\frac{2}{9} = \\frac{25}{9}$

**Skjæringspunkt**: $\\left(\\frac{7}{9}, \\frac{19}{9}, \\frac{25}{9}\\right)$

**c)** Avstanden fra $A$ til skjæringspunktet:
$d = |t| \\cdot |\\vec{n}| = \\frac{1}{9} \\cdot \\sqrt{4 + 1 + 4} = \\frac{1}{9} \\cdot 3 = \\frac{1}{3}$`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_5_8: TextbookChapter = {
  id: 'r2-5-8',
  courseId: 'r2',
  chapterNumber: '5.8',
  title: 'Avstand punkt-linje og punkt-plan',
  description: 'Lær formler og metoder for å beregne avstanden fra et punkt til en linje eller et plan i rommet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'Kunne beregne avstanden fra et punkt til et plan',
    'Kunne beregne avstanden fra et punkt til en linje',
    'Kunne beregne avstanden mellom parallelle linjer',
    'Kunne beregne avstanden mellom vindskjeve linjer',
  ],
  content: [
    {
      id: 'r2-5-8-intro',
      type: 'text',
      content: `## Innledning

I dette kapittelet skal vi lære å beregne avstander i rommet:
- Avstand fra et punkt til et plan
- Avstand fra et punkt til en linje
- Avstand mellom parallelle plan og linjer
- Avstand mellom vindskjeve linjer

Disse avstandsberegningene har mange praktiske anvendelser, fra arkitektur og ingeniørfag til datagrafikk og fysikk.`,
    },
    {
      id: 'r2-5-8-theorem-plan',
      type: 'theorem',
      title: 'Avstand fra punkt til plan',
      content: `Avstanden $d$ fra punktet $P = (x_0, y_0, z_0)$ til planet $ax + by + cz = e$ er:

$$d = \\frac{|ax_0 + by_0 + cz_0 - e|}{\\sqrt{a^2 + b^2 + c^2}}$$

Formelen kan huskes som: **|Venstre side minus høyre side| delt på lengden av normalvektoren**.`,
    },
    {
      id: 'r2-5-8-example1',
      type: 'example',
      title: 'Avstand fra punkt til plan',
      problem: 'Finn avstanden fra punktet $P = (2, 3, 1)$ til planet $\\alpha: 2x - 2y + z = 6$.',
      solution: `Vi bruker formelen med $a = 2$, $b = -2$, $c = 1$, $e = 6$ og $(x_0, y_0, z_0) = (2, 3, 1)$:

$$d = \\frac{|2 \\cdot 2 + (-2) \\cdot 3 + 1 \\cdot 1 - 6|}{\\sqrt{2^2 + (-2)^2 + 1^2}}$$

$$= \\frac{|4 - 6 + 1 - 6|}{\\sqrt{4 + 4 + 1}}$$

$$= \\frac{|-7|}{\\sqrt{9}} = \\frac{7}{3}$$

**Svar**: Avstanden er $\\frac{7}{3} \\approx 2.33$ lengdeenheter.`,
    },
    {
      id: 'r2-5-8-note1',
      type: 'note',
      content: `**Geometrisk tolkning:**

Avstanden fra punkt til plan måles langs normalen til planet. Fotpunktet (det nærmeste punktet i planet) finner vi ved å gå fra punktet i retning $\\pm\\vec{n}$ til vi treffer planet.`,
    },
    {
      id: 'r2-5-8-example2',
      type: 'example',
      title: 'Finn fotpunktet',
      problem: 'Finn det nærmeste punktet (fotpunktet) i planet $x + 2y + 2z = 9$ til punktet $P = (1, 0, 2)$.',
      solution: `**Steg 1**: Normalvektoren til planet er $\\vec{n} = [1, 2, 2]$.

**Steg 2**: Linjen gjennom $P$ vinkelrett på planet:
$$\\vec{r} = [1, 0, 2] + t[1, 2, 2]$$

**Steg 3**: Finn $t$ der linjen treffer planet:
$$(1 + t) + 2(2t) + 2(2 + 2t) = 9$$
$$1 + t + 4t + 4 + 4t = 9$$
$$5 + 9t = 9$$
$$t = \\frac{4}{9}$$

**Steg 4**: Fotpunktet:
$$F = \\left(1 + \\frac{4}{9}, 0 + \\frac{8}{9}, 2 + \\frac{8}{9}\\right) = \\left(\\frac{13}{9}, \\frac{8}{9}, \\frac{26}{9}\\right)$$`,
    },
    {
      id: 'r2-5-8-def-linje',
      type: 'definition',
      title: 'Avstand fra punkt til linje',
      content: `Avstanden fra punktet $P$ til linjen $\\ell: \\vec{r} = \\vec{r_0} + t\\vec{v}$ kan beregnes slik:

La $Q$ være et vilkårlig punkt på linjen (f.eks. $\\vec{r_0}$). Da er:

$$d = \\frac{|\\overrightarrow{QP} \\times \\vec{v}|}{|\\vec{v}|}$$

Alternativt kan vi bruke projeksjon:
1. Finn projeksjonen av $\\overrightarrow{QP}$ på $\\vec{v}$
2. Avstanden er lengden av komponenten vinkelrett på $\\vec{v}$`,
    },
    {
      id: 'r2-5-8-example3',
      type: 'example',
      title: 'Avstand fra punkt til linje',
      problem: 'Finn avstanden fra punktet $P = (3, 4, 5)$ til linjen $\\ell: \\vec{r} = [1, 1, 1] + t[1, 2, 2]$.',
      solution: `Vi velger $Q = (1, 1, 1)$ på linjen og $\\vec{v} = [1, 2, 2]$.

**Vektor fra Q til P**:
$$\\overrightarrow{QP} = [3-1, 4-1, 5-1] = [2, 3, 4]$$

**Kryssprodukt** $\\overrightarrow{QP} \\times \\vec{v}$:
$$= \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ 2 & 3 & 4 \\\\ 1 & 2 & 2 \\end{vmatrix}$$
$$= \\vec{i}(3 \\cdot 2 - 4 \\cdot 2) - \\vec{j}(2 \\cdot 2 - 4 \\cdot 1) + \\vec{k}(2 \\cdot 2 - 3 \\cdot 1)$$
$$= \\vec{i}(6 - 8) - \\vec{j}(4 - 4) + \\vec{k}(4 - 3)$$
$$= [-2, 0, 1]$$

**Lengder**:
$$|\\overrightarrow{QP} \\times \\vec{v}| = \\sqrt{4 + 0 + 1} = \\sqrt{5}$$
$$|\\vec{v}| = \\sqrt{1 + 4 + 4} = 3$$

**Avstand**:
$$d = \\frac{\\sqrt{5}}{3} \\approx 0.745$$`,
    },
    {
      id: 'r2-5-8-theorem-parallelle',
      type: 'theorem',
      title: 'Avstand mellom parallelle plan',
      content: `Avstanden mellom de parallelle planene $ax + by + cz = e_1$ og $ax + by + cz = e_2$ er:

$$d = \\frac{|e_1 - e_2|}{\\sqrt{a^2 + b^2 + c^2}}$$

**Merk**: Planene må ha samme normalvektor (samme koeffisienter) for å være parallelle.`,
    },
    {
      id: 'r2-5-8-example4',
      type: 'example',
      title: 'Avstand mellom parallelle plan',
      problem: 'Finn avstanden mellom planene $\\alpha: 2x - y + 2z = 3$ og $\\beta: 2x - y + 2z = 12$.',
      solution: `Planene har samme normalvektor $\\vec{n} = [2, -1, 2]$, så de er parallelle.

**Avstand**:
$$d = \\frac{|3 - 12|}{\\sqrt{4 + 1 + 4}} = \\frac{9}{3} = 3$$

**Svar**: Avstanden mellom planene er 3 lengdeenheter.`,
    },
    {
      id: 'r2-5-8-example5',
      type: 'example',
      title: 'Avstand mellom parallelle linjer',
      problem: `Finn avstanden mellom de parallelle linjene:
- $\\ell_1: \\vec{r} = [1, 0, 0] + s[2, 1, 2]$
- $\\ell_2: \\vec{r} = [0, 3, 1] + t[2, 1, 2]$`,
      solution: `Siden linjene er parallelle, bruker vi avstand punkt-linje.

Vi finner avstanden fra et punkt på $\\ell_2$ (f.eks. $(0, 3, 1)$) til $\\ell_1$.

$Q = (1, 0, 0)$ på $\\ell_1$, $\\vec{v} = [2, 1, 2]$

$\\overrightarrow{QP} = [0-1, 3-0, 1-0] = [-1, 3, 1]$

**Kryssprodukt**:
$$\\overrightarrow{QP} \\times \\vec{v} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ -1 & 3 & 1 \\\\ 2 & 1 & 2 \\end{vmatrix}$$
$$= [3 \\cdot 2 - 1 \\cdot 1, 1 \\cdot 2 - (-1) \\cdot 2, (-1) \\cdot 1 - 3 \\cdot 2]$$
$$= [5, 4, -7]$$

**Avstand**:
$$d = \\frac{\\sqrt{25 + 16 + 49}}{\\sqrt{4 + 1 + 4}} = \\frac{\\sqrt{90}}{3} = \\frac{3\\sqrt{10}}{3} = \\sqrt{10} \\approx 3.16$$`,
    },
    {
      id: 'r2-5-8-def-vindskjeve',
      type: 'definition',
      title: 'Avstand mellom vindskjeve linjer',
      content: `For to vindskjeve linjer $\\ell_1: \\vec{r} = \\vec{a} + s\\vec{u}$ og $\\ell_2: \\vec{r} = \\vec{b} + t\\vec{v}$ er den korteste avstanden:

$$d = \\frac{|(\\vec{b} - \\vec{a}) \\cdot (\\vec{u} \\times \\vec{v})|}{|\\vec{u} \\times \\vec{v}|}$$

**Tolkning**: Vektoren $\\vec{u} \\times \\vec{v}$ er vinkelrett på begge linjer. Vi projiserer forbindelsesvektoren på denne normalen.`,
    },
    {
      id: 'r2-5-8-example6',
      type: 'example',
      title: 'Avstand mellom vindskjeve linjer',
      problem: `Finn avstanden mellom de vindskjeve linjene:
- $\\ell_1: \\vec{r} = [1, 0, 0] + s[1, 1, 0]$
- $\\ell_2: \\vec{r} = [0, 0, 1] + t[0, 1, 1]$`,
      solution: `Vi har $\\vec{a} = [1, 0, 0]$, $\\vec{b} = [0, 0, 1]$, $\\vec{u} = [1, 1, 0]$, $\\vec{v} = [0, 1, 1]$.

**Kryssprodukt** $\\vec{u} \\times \\vec{v}$:
$$= [1 \\cdot 1 - 0 \\cdot 1, 0 \\cdot 0 - 1 \\cdot 1, 1 \\cdot 1 - 1 \\cdot 0] = [1, -1, 1]$$

**Forbindelsesvektor**:
$$\\vec{b} - \\vec{a} = [0-1, 0-0, 1-0] = [-1, 0, 1]$$

**Skalarprodukt**:
$$(\\vec{b} - \\vec{a}) \\cdot (\\vec{u} \\times \\vec{v}) = (-1) \\cdot 1 + 0 \\cdot (-1) + 1 \\cdot 1 = -1 + 0 + 1 = 0$$

Vent, dette gir $d = 0$! La oss sjekke om linjene faktisk skjærer...

$[1 + s, s, 0] = [0, t, 1 + t]$

Fra tredje komponent: $0 = 1 + t \\Rightarrow t = -1$

Fra første: $1 + s = 0 \\Rightarrow s = -1$

Fra andre: $-1 = -1 \\checkmark$

**Linjene skjærer i punktet $(0, -1, 0)$!**`,
    },
    {
      id: 'r2-5-8-warning',
      type: 'warning',
      title: 'Kontroller alltid',
      content: `Når du beregner avstand mellom linjer:
1. Sjekk først om linjene er parallelle (samme retningsvektor opp til skalering)
2. Hvis ikke parallelle, sjekk om de skjærer (avstand = 0)
3. Hvis de verken er parallelle eller skjærer, er de vindskjeve`,
    },
    {
      id: 'r2-5-8-example7',
      type: 'example',
      title: 'Ekte vindskjeve linjer',
      problem: `Finn avstanden mellom:
- $\\ell_1: \\vec{r} = [0, 0, 0] + s[1, 0, 0]$ ($x$-aksen)
- $\\ell_2: \\vec{r} = [0, 1, 1] + t[0, 0, 1]$`,
      solution: `$\\vec{a} = [0, 0, 0]$, $\\vec{b} = [0, 1, 1]$, $\\vec{u} = [1, 0, 0]$, $\\vec{v} = [0, 0, 1]$

**Kryssprodukt** $\\vec{u} \\times \\vec{v}$:
$$= [0 \\cdot 1 - 0 \\cdot 0, 0 \\cdot 0 - 1 \\cdot 1, 1 \\cdot 0 - 0 \\cdot 0] = [0, -1, 0]$$

**Forbindelsesvektor**:
$$\\vec{b} - \\vec{a} = [0, 1, 1]$$

**Skalarprodukt**:
$$(\\vec{b} - \\vec{a}) \\cdot (\\vec{u} \\times \\vec{v}) = 0 \\cdot 0 + 1 \\cdot (-1) + 1 \\cdot 0 = -1$$

**Avstand**:
$$d = \\frac{|-1|}{\\sqrt{0 + 1 + 0}} = \\frac{1}{1} = 1$$`,
    },
    {
      id: 'r2-5-8-exercise1',
      type: 'exercise',
      exercise: {
        id: 'r2-5-8-ex1',
        number: '5.8.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn avstanden fra punktet $P = (1, 2, 3)$ til planet $x + y + z = 0$.',
        solution: `$$d = \\frac{|1 + 2 + 3 - 0|}{\\sqrt{1 + 1 + 1}} = \\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3} \\approx 3.46$$`,
      },
    },
    {
      id: 'r2-5-8-exercise2',
      type: 'exercise',
      exercise: {
        id: 'r2-5-8-ex2',
        number: '5.8.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn avstanden fra origo til planet $3x - 4y + 12z = 26$.',
        solution: `$$d = \\frac{|3 \\cdot 0 - 4 \\cdot 0 + 12 \\cdot 0 - 26|}{\\sqrt{9 + 16 + 144}} = \\frac{26}{\\sqrt{169}} = \\frac{26}{13} = 2$$`,
        hints: ['Origo har koordinater (0, 0, 0).'],
      },
    },
    {
      id: 'r2-5-8-exercise3',
      type: 'exercise',
      exercise: {
        id: 'r2-5-8-ex3',
        number: '5.8.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn avstanden fra punktet $P = (2, 1, 0)$ til linjen $\\ell: \\vec{r} = [0, 0, 0] + t[1, 1, 1]$.',
        solution: `$Q = (0, 0, 0)$, $\\vec{v} = [1, 1, 1]$, $\\overrightarrow{QP} = [2, 1, 0]$

Kryssprodukt:
$\\overrightarrow{QP} \\times \\vec{v} = [1 \\cdot 1 - 0 \\cdot 1, 0 \\cdot 1 - 2 \\cdot 1, 2 \\cdot 1 - 1 \\cdot 1] = [1, -2, 1]$

Avstand:
$d = \\frac{\\sqrt{1 + 4 + 1}}{\\sqrt{3}} = \\frac{\\sqrt{6}}{\\sqrt{3}} = \\sqrt{2} \\approx 1.41$`,
        hints: ['Bruk formelen med kryssprodukt.'],
      },
    },
    {
      id: 'r2-5-8-exercise4',
      type: 'exercise',
      exercise: {
        id: 'r2-5-8-ex4',
        number: '5.8.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn avstanden mellom de parallelle planene $2x + 2y + z = 10$ og $2x + 2y + z = 1$.',
        solution: `$$d = \\frac{|10 - 1|}{\\sqrt{4 + 4 + 1}} = \\frac{9}{3} = 3$$`,
      },
    },
    {
      id: 'r2-5-8-exercise5',
      type: 'exercise',
      exercise: {
        id: 'r2-5-8-ex5',
        number: '5.8.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Finn det nærmeste punktet (fotpunktet) i planet $2x + y - 2z = 1$ til punktet $P = (3, 1, 2)$.`,
        solution: `Normalvektor: $\\vec{n} = [2, 1, -2]$

Linje gjennom $P$ vinkelrett på planet:
$\\vec{r} = [3, 1, 2] + t[2, 1, -2]$

Setter inn i planligningen:
$2(3 + 2t) + (1 + t) - 2(2 - 2t) = 1$
$6 + 4t + 1 + t - 4 + 4t = 1$
$3 + 9t = 1$
$t = -\\frac{2}{9}$

Fotpunkt:
$F = \\left(3 - \\frac{4}{9}, 1 - \\frac{2}{9}, 2 + \\frac{4}{9}\\right) = \\left(\\frac{23}{9}, \\frac{7}{9}, \\frac{22}{9}\\right)$`,
      },
    },
    {
      id: 'r2-5-8-exercise6',
      type: 'exercise',
      exercise: {
        id: 'r2-5-8-ex6',
        number: '5.8.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn avstanden fra punktet $P = (4, 5, 6)$ til linjen $\\ell: \\vec{r} = [1, 2, 3] + t[1, 1, 1]$.',
        solution: `$Q = (1, 2, 3)$, $\\vec{v} = [1, 1, 1]$, $\\overrightarrow{QP} = [3, 3, 3]$

Kryssprodukt:
$\\overrightarrow{QP} \\times \\vec{v} = [3 \\cdot 1 - 3 \\cdot 1, 3 \\cdot 1 - 3 \\cdot 1, 3 \\cdot 1 - 3 \\cdot 1] = [0, 0, 0]$

Kryssproduktet er null, som betyr at $\\overrightarrow{QP}$ er parallell med $\\vec{v}$.

**Punktet $P$ ligger på linjen!** Avstanden er $0$.`,
      },
    },
    {
      id: 'r2-5-8-exercise7',
      type: 'exercise',
      exercise: {
        id: 'r2-5-8-ex7',
        number: '5.8.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Avgjør om linjene er parallelle, skjærende eller vindskjeve, og finn eventuelt avstanden:
- $\\ell_1: \\vec{r} = [1, 1, 0] + s[1, 0, 1]$
- $\\ell_2: \\vec{r} = [0, 2, 0] + t[1, 0, 1]$`,
        solution: `Retningsvektorene er like: $\\vec{v} = [1, 0, 1]$. Linjene er **parallelle**.

Avstand fra $(0, 2, 0)$ til $\\ell_1$:

$\\overrightarrow{QP} = [0-1, 2-1, 0-0] = [-1, 1, 0]$

$\\overrightarrow{QP} \\times \\vec{v} = [1 \\cdot 1 - 0 \\cdot 0, 0 \\cdot 1 - (-1) \\cdot 1, (-1) \\cdot 0 - 1 \\cdot 1] = [1, 1, -1]$

$d = \\frac{\\sqrt{1 + 1 + 1}}{\\sqrt{1 + 0 + 1}} = \\frac{\\sqrt{3}}{\\sqrt{2}} = \\sqrt{\\frac{3}{2}} \\approx 1.22$`,
        hints: ['Sjekk først om retningsvektorene er parallelle.'],
      },
    },
    {
      id: 'r2-5-8-exercise8',
      type: 'exercise',
      exercise: {
        id: 'r2-5-8-ex8',
        number: '5.8.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Finn avstanden mellom de vindskjeve linjene:
- $\\ell_1: \\vec{r} = [2, 0, 1] + s[1, 1, 0]$
- $\\ell_2: \\vec{r} = [0, 1, 0] + t[0, 1, 1]$`,
        solution: `$\\vec{a} = [2, 0, 1]$, $\\vec{b} = [0, 1, 0]$, $\\vec{u} = [1, 1, 0]$, $\\vec{v} = [0, 1, 1]$

Kryssprodukt $\\vec{u} \\times \\vec{v}$:
$= [1 \\cdot 1 - 0 \\cdot 1, 0 \\cdot 0 - 1 \\cdot 1, 1 \\cdot 1 - 1 \\cdot 0] = [1, -1, 1]$

Forbindelsesvektor:
$\\vec{b} - \\vec{a} = [-2, 1, -1]$

Skalarprodukt:
$(\\vec{b} - \\vec{a}) \\cdot (\\vec{u} \\times \\vec{v}) = -2 \\cdot 1 + 1 \\cdot (-1) + (-1) \\cdot 1 = -2 - 1 - 1 = -4$

Avstand:
$d = \\frac{|-4|}{\\sqrt{1 + 1 + 1}} = \\frac{4}{\\sqrt{3}} = \\frac{4\\sqrt{3}}{3} \\approx 2.31$`,
      },
    },
    {
      id: 'r2-5-8-exercise9',
      type: 'exercise',
      exercise: {
        id: 'r2-5-8-ex9',
        number: '5.8.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et plan $\\alpha$ går gjennom punktet $A = (1, 1, 1)$ og er parallelt med vektorene $\\vec{u} = [1, 2, 0]$ og $\\vec{v} = [0, 1, 1]$. Finn avstanden fra origo til dette planet.',
        solution: `Normalvektor:
$\\vec{n} = \\vec{u} \\times \\vec{v} = [2 \\cdot 1 - 0 \\cdot 1, 0 \\cdot 0 - 1 \\cdot 1, 1 \\cdot 1 - 2 \\cdot 0] = [2, -1, 1]$

Planligning med $A = (1, 1, 1)$:
$2(x - 1) - 1(y - 1) + 1(z - 1) = 0$
$2x - 2 - y + 1 + z - 1 = 0$
$2x - y + z = 2$

Avstand fra origo:
$d = \\frac{|2 \\cdot 0 - 0 + 0 - 2|}{\\sqrt{4 + 1 + 1}} = \\frac{2}{\\sqrt{6}} = \\frac{2\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{3} \\approx 0.82$`,
      },
    },
    {
      id: 'r2-5-8-exercise10',
      type: 'exercise',
      exercise: {
        id: 'r2-5-8-ex10',
        number: '5.8.10',
        type: 'upload',
        difficulty: 'vanskelig',
        task: `Et tetraeder har hjørner i $A = (0, 0, 0)$, $B = (3, 0, 0)$, $C = (0, 4, 0)$ og $D = (0, 0, 5)$.

a) Finn ligningen for planet gjennom $B$, $C$ og $D$.
b) Finn avstanden fra $A$ til dette planet.
c) Bruk resultatet til å beregne volumet av tetraederet.`,
        solution: `**a)** Retningsvektorer fra $B$:
$\\vec{u} = \\overrightarrow{BC} = [-3, 4, 0]$, $\\vec{v} = \\overrightarrow{BD} = [-3, 0, 5]$

Normalvektor:
$\\vec{n} = \\vec{u} \\times \\vec{v} = [4 \\cdot 5 - 0 \\cdot 0, 0 \\cdot (-3) - (-3) \\cdot 5, (-3) \\cdot 0 - 4 \\cdot (-3)]$
$= [20, 15, 12]$

Planligning med $B = (3, 0, 0)$:
$20(x - 3) + 15y + 12z = 0$
$20x + 15y + 12z = 60$

**b)** Avstand fra $A = (0, 0, 0)$:
$d = \\frac{|20 \\cdot 0 + 15 \\cdot 0 + 12 \\cdot 0 - 60|}{\\sqrt{400 + 225 + 144}} = \\frac{60}{\\sqrt{769}}$

$d \\approx 2.16$

**c)** Areal av trekant $BCD$:
$|\\vec{u} \\times \\vec{v}| = \\sqrt{769}$
$\\text{Areal} = \\frac{\\sqrt{769}}{2}$

Volum:
$V = \\frac{1}{3} \\cdot \\text{Areal} \\cdot h = \\frac{1}{3} \\cdot \\frac{\\sqrt{769}}{2} \\cdot \\frac{60}{\\sqrt{769}} = \\frac{60}{6} = 10$

**Svar**: Volumet er $10$ kubikkenheter.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

