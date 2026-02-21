/**
 * Tekstbok kapitler for R1 - Kapittel 6.4-6.6, 8.7, 9.3
 * Utvidelse av seksjoner 6 (Vektorer), 8 (Kombinatorikk) og 9 (Bevisfoering)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.4: Vektorlengde og avstand
// ============================================================================

export const CHAPTER_R1_6_4: TextbookChapter = {
  id: 'r1-6-4',
  courseId: 'r1',
  chapterNumber: '6.4',
  title: 'Vektorlengde og avstand',
  description: 'Lær om vektorlengde, avstand mellom punkter, avstand fra punkt til linje, avstand mellom parallelle linjer og midtpunktsformelen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne lengden av en vektor ved hjelp av koordinatene',
    'beregne avstanden mellom to punkter i planet',
    'beregne avstanden fra et punkt til en linje',
    'beregne avstanden mellom to parallelle linjer',
    'finne midtpunktet mellom to punkter',
    'anvende projeksjonsformelen på avstandsproblemer',
  ],
  content: [
    {
      id: 'r1-6-4-intro',
      type: 'text',
      content: `## Vektorlengde og avstand

Lengden av en vektor er et maal på hvor langt vi forflyttes når vi bruker vektoren. Vi bruker Pythagoras' setning for å beregne lengden direkte fra koordinatene.

Avstand mellom to punkter er det samme som lengden av differansvektoren mellom dem. I tillegg kan vi beregne avstand fra et punkt til en linje, og mellom to parallelle linjer. Disse begrepene er nært knyttet til hverandre og brukes hyppig i geometri, fysikk og analysen.`,
    },
    {
      id: 'r1-6-4-def-vektorlengde',
      type: 'definition',
      title: 'Vektorlengde (absoluttverdi)',
      content: `La $\\vec{v} = (x, y)$ være en vektor i planet. **Lengden** av $\\vec{v}$, skrevet $|\\vec{v}|$, er definert som:

$$|\\vec{v}| = \\sqrt{x^2 + y^2}$$

Lengden kalles også vektorens **absoluttverdi** eller **norm**. Den er alltid ikke-negativ, og $|\\vec{v}| = 0$ hvis og bare hvis $\\vec{v} = \\vec{0}$.

**Egenskaper:**
- $|k\\vec{v}| = |k| \\cdot |\\vec{v}|$ for alle skalarer $k$
- $|\\vec{v}| \\geq 0$ med likhet bare for nullvektoren`,
    },
    {
      id: 'r1-6-4-def-avstand',
      type: 'definition',
      title: 'Avstand mellom to punkter',
      content: `La $A = (x_1, y_1)$ og $B = (x_2, y_2)$ være to punkter i planet. **Avstanden** mellom $A$ og $B$ er:

$$|AB| = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

Dette er lengden av vektoren $\\overrightarrow{AB} = (x_2 - x_1,\\; y_2 - y_1)$.`,
    },
    {
      id: 'r1-6-4-example-lengde-avstand',
      type: 'example',
      title: 'Eksempel 1: Vektorlengde og avstand',
      problem: `a) Finn lengden av $\\vec{u} = (3, -4)$.

b) Finn avstanden mellom $A = (1, 2)$ og $B = (5, -1)$.

c) Finn lengden av $\\vec{w} = (-2, 2\\sqrt{3})$.`,
      solution: `**a)** $|\\vec{u}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$

**b)** $|AB| = \\sqrt{(5-1)^2 + (-1-2)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$

**c)** $|\\vec{w}| = \\sqrt{(-2)^2 + (2\\sqrt{3})^2} = \\sqrt{4 + 12} = \\sqrt{16} = 4$`,
    },
    {
      id: 'r1-6-4-def-midtpunkt',
      type: 'definition',
      title: 'Midtpunktsformelen',
      content: `Midtpunktet $M$ mellom to punkter $A = (x_1, y_1)$ og $B = (x_2, y_2)$ er:

$$M = \\left(\\frac{x_1 + x_2}{2},\\; \\frac{y_1 + y_2}{2}\\right)$$

Midtpunktet er posisjonen til enden av vektoren $\\frac{1}{2}(\\overrightarrow{OA} + \\overrightarrow{OB})$, der $O$ er origo.`,
    },
    {
      id: 'r1-6-4-example-midtpunkt',
      type: 'example',
      title: 'Eksempel 2: Midtpunktsformelen',
      problem: `a) Finn midtpunktet mellom $A = (-3, 5)$ og $B = (7, -1)$.

b) Midtpunktet av en strekning $AB$ er $M = (4, 1)$, og $A = (1, 3)$. Finn $B$.`,
      solution: `**a)** $M = \\left(\\frac{-3+7}{2}, \\frac{5+(-1)}{2}\\right) = (2, 2)$

**b)** Vi bruker at $M = \\frac{1}{2}(A + B)$, så $B = 2M - A$:

$$B = (2 \\cdot 4 - 1,\\; 2 \\cdot 1 - 3) = (7, -1)$$`,
    },
    {
      id: 'r1-6-4-theorem-avstand-linje',
      type: 'theorem',
      title: 'Avstand fra punkt til linje',
      content: `Gitt en linje $\\ell$ med likning $ax + by + c = 0$ og et punkt $P = (x_0, y_0)$.

Avstanden fra $P$ til $\\ell$ er:

$$d(P, \\ell) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$$`,
      proof: `Linjen $ax + by + c = 0$ har normalvektor $\\vec{n} = (a, b)$. La $Q$ være et vilkaarlig punkt på $\\ell$. Den korteste avstanden fra $P$ til $\\ell$ er den ortogonale projeksjonen av $\\overrightarrow{QP}$ på $\\vec{n}$:

$$d = \\frac{|\\overrightarrow{QP} \\cdot \\vec{n}|}{|\\vec{n}|}$$

La $Q = (x_Q, y_Q)$ ligge på $\\ell$, så $ax_Q + by_Q + c = 0$.

$$\\overrightarrow{QP} \\cdot \\vec{n} = a(x_0 - x_Q) + b(y_0 - y_Q) = ax_0 + by_0 - (ax_Q + by_Q) = ax_0 + by_0 + c$$

Dermed: $d = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$. $\\square$`,
    },
    {
      id: 'r1-6-4-example-avstand-linje',
      type: 'example',
      title: 'Eksempel 3: Avstand fra punkt til linje',
      problem: `Finn avstanden fra punktet $P = (3, 1)$ til linjen $2x - y + 4 = 0$.`,
      solution: `Her er $a = 2$, $b = -1$, $c = 4$, og $(x_0, y_0) = (3, 1)$:

$$d = \\frac{|2 \\cdot 3 + (-1) \\cdot 1 + 4|}{\\sqrt{2^2 + (-1)^2}} = \\frac{|6 - 1 + 4|}{\\sqrt{5}} = \\frac{9}{\\sqrt{5}} = \\frac{9\\sqrt{5}}{5}$$`,
    },
    {
      id: 'r1-6-4-theorem-parallell-avstand',
      type: 'theorem',
      title: 'Avstand mellom parallelle linjer',
      content: `To parallelle linjer $\\ell_1: ax + by + c_1 = 0$ og $\\ell_2: ax + by + c_2 = 0$ har avstand:

$$d(\\ell_1, \\ell_2) = \\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}}$$

Vi kan også finne denne avstanden ved å velge et vilkaarlig punkt på den ene linjen og bruke punkt-til-linje-formelen for den andre.`,
    },
    {
      id: 'r1-6-4-example-parallell',
      type: 'example',
      title: 'Eksempel 4: Avstand mellom parallelle linjer',
      problem: `Finn avstanden mellom linjene $3x + 4y - 5 = 0$ og $3x + 4y + 10 = 0$.`,
      solution: `Linjene er parallelle (samme normalvektor $(3, 4)$).

$$d = \\frac{|-5 - 10|}{\\sqrt{9 + 16}} = \\frac{15}{5} = 3$$

**Kontroll med punkt på linje:** Vi velger $P = (5/3, 0)$ på $\\ell_1$ (sjekk: $3 \\cdot 5/3 + 0 - 5 = 0$ ✓). Avstand fra $P$ til $\\ell_2$:

$$d = \\frac{|3 \\cdot 5/3 + 4 \\cdot 0 + 10|}{5} = \\frac{|5 + 10|}{5} = 3 \\quad \\checkmark$$`,
    },
    {
      id: 'r1-6-4-note-projeksjonsmetode',
      type: 'note',
      title: 'Projeksjonsmetoden for avstand',
      content: `Avstandsformelen for punkt til linje kan forstaaes via **ortogonal projeksjon**. Projeksjonen av en vektor $\\vec{u}$ på en vektor $\\vec{n}$ er:

$$\\text{proj}_{\\vec{n}} \\vec{u} = \\frac{\\vec{u} \\cdot \\vec{n}}{|\\vec{n}|^2} \\vec{n}$$

Lengden av denne projeksjonen er $\\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{n}|}$, som er nøyaktig avstandsformelen.

Denne metoden generaliserer: den fungerer også i tre dimensjoner og for avstand mellom vilkaarlige geometriske objekter.`,
    },
    {
      id: 'r1-6-4-tip-trekantareal',
      type: 'tip',
      content: `**Areal av trekant med avstandsformelen:** Gitt en trekant med grunnlinje $g$ og høyde $h$, er arealet $A = \\frac{1}{2}gh$. Du kan finne $g$ som avstanden mellom to hjørner, og $h$ som avstanden fra det tredje hjørnet til linjen gjennom grunnlinjen.`,
    },
    {
      id: 'r1-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-6-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn vektorlengder og avstand mellom punkter.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $|\\vec{v}|$ for $\\vec{v} = (5, 12)$.',
            solution: '$|\\vec{v}| = \\sqrt{25 + 144} = \\sqrt{169} = 13$',
          },
          {
            label: 'b',
            task: 'Finn $|\\vec{w}|$ for $\\vec{w} = (-6, 8)$.',
            solution: '$|\\vec{w}| = \\sqrt{36 + 64} = \\sqrt{100} = 10$',
          },
          {
            label: 'c',
            task: 'Finn avstanden mellom $A = (-1, 3)$ og $B = (4, -9)$.',
            solution: '$|AB| = \\sqrt{(4-(-1))^2 + (-9-3)^2} = \\sqrt{25 + 144} = 13$',
          },
        ],
        hints: ['Bruk $|\\vec{v}| = \\sqrt{x^2 + y^2}$', 'Kjenner du igjen pythagoraeiske tripler?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-6-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Midtpunkt og enkel avstand.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn midtpunktet mellom $A = (2, 6)$ og $B = (8, -2)$.',
            solution: '$M = \\left(\\frac{2+8}{2}, \\frac{6+(-2)}{2}\\right) = (5, 2)$',
          },
          {
            label: 'b',
            task: 'Midtpunktet av $AB$ er $M = (3, 5)$ og $A = (-1, 2)$. Finn $B$.',
            solution: '$B = 2M - A = (6 - (-1),\\; 10 - 2) = (7, 8)$',
          },
          {
            label: 'c',
            task: 'Finn lengden av $\\vec{u} = (1, -1)$ og enhetsvektor $\\hat{u}$ i samme retning.',
            solution: '$|\\vec{u}| = \\sqrt{1+1} = \\sqrt{2}$. $\\hat{u} = \\frac{1}{\\sqrt{2}}(1, -1) = \\left(\\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2}\\right)$.',
          },
        ],
        hints: ['Midtpunkt: gjennomsnittet av koordinatene', 'Enhetsvektor: $\\hat{u} = \\frac{\\vec{u}}{|\\vec{u}|}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-6-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avstand fra punkt til linje.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn avstanden fra $P = (0, 0)$ til linjen $3x + 4y - 10 = 0$.',
            solution: '$d = \\frac{|3 \\cdot 0 + 4 \\cdot 0 - 10|}{\\sqrt{9 + 16}} = \\frac{10}{5} = 2$',
          },
          {
            label: 'b',
            task: 'Finn avstanden fra $Q = (-1, 4)$ til linjen $x - 2y + 7 = 0$.',
            solution: '$d = \\frac{|(-1) - 2 \\cdot 4 + 7|}{\\sqrt{1 + 4}} = \\frac{|-2|}{\\sqrt{5}} = \\frac{2}{\\sqrt{5}} = \\frac{2\\sqrt{5}}{5}$',
          },
          {
            label: 'c',
            task: 'Finn avstanden fra $R = (2, 3)$ til linjen $y = 3x - 1$.',
            solution: 'Normalform: $3x - y - 1 = 0$. $d = \\frac{|3 \\cdot 2 - 3 - 1|}{\\sqrt{9 + 1}} = \\frac{2}{\\sqrt{10}} = \\frac{\\sqrt{10}}{5}$.',
          },
        ],
        hints: ['Husk å skrive linjen på formen $ax + by + c = 0$ først', 'Bruk $d = \\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-6-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avstand mellom parallelle linjer og geometriske problemer.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn avstanden mellom $\\ell_1: 2x - y + 3 = 0$ og $\\ell_2: 2x - y - 7 = 0$.',
            solution: '$d = \\frac{|3 - (-7)|}{\\sqrt{4+1}} = \\frac{10}{\\sqrt{5}} = 2\\sqrt{5}$',
          },
          {
            label: 'b',
            task: 'Et trekants hjoerner er $A = (0,0)$, $B = (6,0)$ og $C = (2,4)$. Finn høyden fra $C$ ned på $AB$.',
            solution: 'Linjen $AB$ er $x$-aksen, dvs. $y = 0$ eller $0x + y + 0 = 0$. Avstand: $d = \\frac{|0 \\cdot 2 + 1 \\cdot 4 + 0|}{\\sqrt{0+1}} = 4$.',
          },
          {
            label: 'c',
            task: 'Finn arealet av trekanten i oppgave b).',
            solution: 'Grunnlinje $|AB| = 6$, hoeyde $h = 4$. $A = \\frac{1}{2} \\cdot 6 \\cdot 4 = 12$.',
          },
        ],
        hints: ['For parallelle linjer: bruk $\\frac{|c_1 - c_2|}{\\sqrt{a^2+b^2}}$', 'Areal av trekant: $\\frac{1}{2} \\cdot \\text{grunnlinje} \\cdot \\text{hoyde}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-6-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte avstandsproblemer.',
        subTasks: [
          {
            label: 'a',
            task: 'Punktet $P = (k, 2)$ har avstand $5$ fra punktet $Q = (1, -2)$. Finn alle mulige verdier av $k$.',
            solution: '$\\sqrt{(k-1)^2 + (2-(-2))^2} = 5 \\Rightarrow (k-1)^2 + 16 = 25 \\Rightarrow (k-1)^2 = 9 \\Rightarrow k = 4$ eller $k = -2$.',
          },
          {
            label: 'b',
            task: 'Finn alle punkter på $x$-aksen som har lik avstand til $A = (1, 3)$ og $B = (5, -1)$.',
            solution: 'La $P = (x, 0)$. $|PA|^2 = |PB|^2 \\Rightarrow (x-1)^2 + 9 = (x-5)^2 + 1 \\Rightarrow x^2-2x+10 = x^2-10x+26 \\Rightarrow 8x = 16 \\Rightarrow x = 2$. Svaret er $(2, 0)$.',
          },
          {
            label: 'c',
            task: 'Vis at trekanten med hjoerner $A=(0,0)$, $B=(4,0)$, $C=(2,2\\sqrt{3})$ er likesidet.',
            solution: '$|AB| = 4$, $|BC| = \\sqrt{(4-2)^2+(0-2\\sqrt{3})^2} = \\sqrt{4+12} = 4$, $|AC| = \\sqrt{4+12} = 4$. Alle sider like lange. $\\square$',
          },
          {
            label: 'd',
            task: 'Finn verdien av $k$ slik at avstanden fra $P = (2, -1)$ til linjen $kx + 3y - 6 = 0$ er $\\sqrt{2}$.',
            solution: '$\\frac{|2k - 3 - 6|}{\\sqrt{k^2 + 9}} = \\sqrt{2} \\Rightarrow (2k-9)^2 = 2(k^2+9) \\Rightarrow 4k^2 - 36k + 81 = 2k^2 + 18 \\Rightarrow 2k^2 - 36k + 63 = 0$. Diskriminant: $1296 - 504 = 792$. $k = \\frac{36 \\pm \\sqrt{792}}{4} = \\frac{36 \\pm 6\\sqrt{22}}{4} = \\frac{18 \\pm 3\\sqrt{22}}{2}$.',
          },
        ],
        hints: [
          'For oppgave a: sett opp likning med avstandsformelen og loes for $k$',
          'For oppgave b: kvadrer begge avstandene og sett dem like hverandre',
          'For oppgave d: bruk avstandsformelen og loes andregradslikningen',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5: Linjer og sirkler i planet
// ============================================================================

export const CHAPTER_R1_6_5: TextbookChapter = {
  id: 'r1-6-5',
  courseId: 'r1',
  chapterNumber: '6.5',
  title: 'Linjer og sirkler i planet',
  description: 'Lær om linjens normalform ax+by+c=0, sirkellikningen (x-a)^2+(y-b)^2=r^2, tangenter til sirkler og skjaeringspunkter.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive linjelikning på normalformen $ax + by + c = 0$',
    'bestemme normalvektoren til en linje',
    'skrive og tolke sirkellikninger på standardform',
    'omskrive generell sirkellikning til standardform ved fullfoering av kvadrat',
    'finne skjaeringspunkt mellom linjer og sirkler',
    'bestemme tangenter til sirkler',
  ],
  content: [
    {
      id: 'r1-6-5-intro',
      type: 'text',
      content: `## Linjer og sirkler i planet

Vi kjenner linjer på formen $y = ax + b$ fra tidligere. I vektorgeometrien er det ofte mer naturlig å bruke **normalformen** $ax + by + c = 0$, som behandler $x$- og $y$-koordinater på en symmetrisk maate.

Sirkler beskrives ved sentrum og radius. Sirkellikningen på standardform gjoer det lett å lese av disse størrelsene direkte. Vi skal også lære å finne tangenter til sirkler og skjaeringspunkter mellom linjer og sirkler.`,
    },
    {
      id: 'r1-6-5-def-linje-normalform',
      type: 'definition',
      title: 'Linjelikning på normalform',
      content: `En linje $\\ell$ i planet kan skrives på **normalformen**:

$$ax + by + c = 0 \\quad (a, b \\text{ ikke begge null})$$

Vektoren $\\vec{n} = (a, b)$ er en **normalvektor** til linjen -- den står vinkelrett på linjens retning.

Retningsvektoren til linjen er $\\vec{r} = (-b, a)$, siden $\\vec{n} \\cdot \\vec{r} = a(-b) + b(a) = 0$.

**Fremgangsmaate** for å finne linjelikning på normalform:
1. Gitt normalvektor $\\vec{n} = (a, b)$ og punkt $P = (x_0, y_0)$ på linjen:
2. $a(x - x_0) + b(y - y_0) = 0$
3. Forenkle til $ax + by + c = 0$`,
    },
    {
      id: 'r1-6-5-example-linje',
      type: 'example',
      title: 'Eksempel 1: Linje på normalform',
      problem: `a) Skriv linjen $y = 2x - 3$ på normalform og finn normalvektoren.

b) Finn likningen til linjen gjennom $A = (1, 2)$ med normalvektor $\\vec{n} = (3, -1)$.

c) Finn normalformen til linjen gjennom $P = (2, 5)$ og $Q = (4, 1)$.`,
      solution: `**a)** $y = 2x - 3 \\Rightarrow 2x - y - 3 = 0$. Normalvektor: $\\vec{n} = (2, -1)$.

**b)** Linjen gjennom $A = (1, 2)$ med normalvektor $(3, -1)$:

$$3(x - 1) + (-1)(y - 2) = 0 \\Rightarrow 3x - y - 1 = 0$$

**c)** Retningsvektoren er $\\overrightarrow{PQ} = (2, -4)$. Normalvektoren er $\\vec{n} = (4, 2)$ (eller $(2, 1)$). Gjennom $P = (2, 5)$:

$$2(x - 2) + 1(y - 5) = 0 \\Rightarrow 2x + y - 9 = 0$$`,
    },
    {
      id: 'r1-6-5-def-sirkel',
      type: 'definition',
      title: 'Sirkellikning på standardform',
      content: `En sirkel med sentrum $S = (a, b)$ og radius $r > 0$ har likning:

$$(x - a)^2 + (y - b)^2 = r^2$$

Alle punkter $(x, y)$ som tilfredsstiller likningen har avstand $r$ fra sentrum $S$.

**Spesialtilfelle:** Sirkelen med sentrum i origo: $x^2 + y^2 = r^2$.

**Posisjon relativt til sirkelen:**
- $(x_0 - a)^2 + (y_0 - b)^2 < r^2$: Punktet $(x_0, y_0)$ er **innenfor** sirkelen
- $(x_0 - a)^2 + (y_0 - b)^2 = r^2$: Punktet ligger **paa** sirkelen
- $(x_0 - a)^2 + (y_0 - b)^2 > r^2$: Punktet er **utenfor** sirkelen`,
    },
    {
      id: 'r1-6-5-note-omskriving',
      type: 'note',
      title: 'Omskriving til standardform',
      content: `Sirkellikninger kan også komme på formen $x^2 + y^2 + Dx + Ey + F = 0$. Vi omskriver til standardform ved å fullfoere kvadrater:

$$x^2 + Dx + y^2 + Ey = -F$$
$$\\left(x + \\frac{D}{2}\\right)^2 + \\left(y + \\frac{E}{2}\\right)^2 = \\frac{D^2 + E^2}{4} - F$$

Dette gir sentrum $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ og radius $r = \\sqrt{\\frac{D^2+E^2}{4} - F}$ (forutsatt $r > 0$).`,
    },
    {
      id: 'r1-6-5-example-sirkel',
      type: 'example',
      title: 'Eksempel 2: Sirkelen',
      problem: `a) Skriv likningen til sirkelen med sentrum $S = (3, -2)$ og radius $4$.

b) Omskriv $x^2 + y^2 - 6x + 4y - 12 = 0$ til standardform og finn sentrum og radius.`,
      solution: `**a)** $(x - 3)^2 + (y + 2)^2 = 16$

**b)** Gruppering og fullfoering av kvadrat:

$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$

$(x - 3)^2 + (y + 2)^2 = 25$

Sentrum $S = (3, -2)$, radius $r = 5$.`,
    },
    {
      id: 'r1-6-5-theorem-tangent',
      type: 'theorem',
      title: 'Tangent til sirkel',
      content: `La sirkelen ha sentrum $S = (a, b)$ og radius $r$. La $P = (x_0, y_0)$ være et punkt på sirkelen.

Tangenten til sirkelen i $P$ er vinkelrett på radiusen $SP$, og har likning:

$$(x_0 - a)(x - a) + (y_0 - b)(y - b) = r^2$$

Alternativt: normalvektoren til tangenten er $\\overrightarrow{SP} = (x_0 - a,\\; y_0 - b)$.`,
    },
    {
      id: 'r1-6-5-example-tangent',
      type: 'example',
      title: 'Eksempel 3: Tangent til sirkel',
      problem: `Sirkelen $K$ har likning $(x-2)^2 + (y+1)^2 = 25$.

a) Finn sentrum og radius.

b) Avgjør om $P = (5, 3)$ ligger på sirkelen.

c) Finn tangentlinjen til $K$ i $P = (5, 3)$.`,
      solution: `**a)** Sentrum $S = (2, -1)$, radius $r = 5$.

**b)** $(5-2)^2 + (3+1)^2 = 9 + 16 = 25$ ✓. $P$ ligger på sirkelen.

**c)** Normalvektoren til tangenten er $\\overrightarrow{SP} = (5-2, 3-(-1)) = (3, 4)$. Tangenten gjennom $P = (5, 3)$:

$$3(x - 5) + 4(y - 3) = 0 \\Rightarrow 3x + 4y - 27 = 0$$`,
    },
    {
      id: 'r1-6-5-text-skjaering',
      type: 'text',
      content: `## Skjaeringspunkt mellom linje og sirkel

For å finne skjaeringspunktene mellom en linje og en sirkel, setter vi linjens uttrykk inn i sirkellikningen. Vi får en andregradslikning som kan ha:

- **To løsninger**: Linjen skjaerer sirkelen i to punkter (sekant)
- **Én løsning**: Linjen tangerer sirkelen (tangent)
- **Ingen løsning**: Linjen treffer ikke sirkelen

Antall løsninger kan avgjoeeres ved å se på diskriminanten, eller ved å sammenligne avstanden fra sentrum til linjen med radius.`,
    },
    {
      id: 'r1-6-5-example-skjaering',
      type: 'example',
      title: 'Eksempel 4: Skjaeringspunkter',
      problem: `Finn skjaeringspunktene mellom linjen $y = x + 1$ og sirkelen $x^2 + y^2 = 13$.`,
      solution: `Sett inn $y = x + 1$ i sirkellikningen:

$$x^2 + (x+1)^2 = 13$$
$$x^2 + x^2 + 2x + 1 = 13$$
$$2x^2 + 2x - 12 = 0$$
$$x^2 + x - 6 = 0$$
$$(x+3)(x-2) = 0$$

$x = -3 \\Rightarrow y = -2$ og $x = 2 \\Rightarrow y = 3$.

Skjaeringspunktene er $(-3, -2)$ og $(2, 3)$.`,
    },
    {
      id: 'r1-6-5-warning-sjekk',
      type: 'warning',
      content: `**Husk å sjekke svaret!** Når du finner tangentlikning eller skjaeringspunkter, er det lurt å verifisere at punktene faktisk ligger på både linjen og sirkelen. Sett koordinatene tilbake inn i likningene.`,
    },
    {
      id: 'r1-6-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-6-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Arbeid med normalform og sirkellikninger.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv linjen $y = -3x + 7$ på normalform og oppgi normalvektoren.',
            solution: '$3x + y - 7 = 0$. Normalvektor: $\\vec{n} = (3, 1)$.',
          },
          {
            label: 'b',
            task: 'Les av sentrum og radius for sirkelen $(x+3)^2 + (y-2)^2 = 16$.',
            solution: 'Sentrum $S = (-3, 2)$, radius $r = 4$.',
          },
          {
            label: 'c',
            task: 'Avgjør om $Q = (0, 6)$ ligger innenfor, på eller utenfor sirkelen $(x+1)^2 + (y-2)^2 = 25$.',
            solution: '$(0+1)^2 + (6-2)^2 = 1 + 16 = 17 < 25$. $Q$ ligger **innenfor** sirkelen.',
          },
        ],
        hints: ['Flytt alle ledd til venstre side for normalform', 'Sammenlign med $(x-a)^2+(y-b)^2=r^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-6-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv sirkellikninger og finn normalform for linjer.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv likningen til sirkelen med sentrum $(0, 0)$ og radius $7$.',
            solution: '$x^2 + y^2 = 49$.',
          },
          {
            label: 'b',
            task: 'Skriv likningen til sirkelen med sentrum $(-1, 4)$ som går gjennom origo.',
            solution: 'Radius: $r = \\sqrt{(-1)^2 + 4^2} = \\sqrt{17}$. Likning: $(x+1)^2 + (y-4)^2 = 17$.',
          },
          {
            label: 'c',
            task: 'Finn normalformen til linjen gjennom $A = (3, 1)$ med retningsvektor $\\vec{r} = (2, -5)$.',
            solution: 'Normalvektor: $\\vec{n} = (5, 2)$. $5(x-3) + 2(y-1) = 0 \\Rightarrow 5x + 2y - 17 = 0$.',
          },
        ],
        hints: ['Radius = avstand fra sentrum til et punkt på sirkelen', 'Normalvektor er vinkelrett på retningsvektoren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-6-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Omskriving og tangenter.',
        subTasks: [
          {
            label: 'a',
            task: 'Omskriv $x^2 + y^2 + 8x - 2y + 8 = 0$ til standardform. Finn sentrum og radius.',
            solution: '$(x^2+8x+16) + (y^2-2y+1) = -8+16+1 \\Rightarrow (x+4)^2 + (y-1)^2 = 9$. Sentrum $(-4, 1)$, radius $3$.',
          },
          {
            label: 'b',
            task: 'Finn tangenten til sirkelen $x^2 + y^2 = 25$ i punktet $P = (-3, 4)$.',
            solution: 'Normalvektor: $\\overrightarrow{OP} = (-3, 4)$. Tangent: $-3(x+3) + 4(y-4) = 0 \\Rightarrow -3x + 4y - 25 = 0$, eller $-3x + 4y = 25$.',
          },
          {
            label: 'c',
            task: 'Finn tangenten til $(x-1)^2 + (y-2)^2 = 10$ i punktet $P = (4, 3)$.',
            solution: 'Sjekk: $(4-1)^2 + (3-2)^2 = 9+1 = 10$ ✓. Normalvektor: $(3, 1)$. Tangent: $3(x-4) + 1(y-3) = 0 \\Rightarrow 3x + y - 15 = 0$.',
          },
        ],
        hints: [
          'Fullfoering av kvadrat: legg til $(D/2)^2$ og $(E/2)^2$ på begge sider',
          'For tangent: normalvektoren er retningen fra sentrum til tangentpunktet',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-6-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skjaeringspunkter mellom linje og sirkel.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn skjaeringspunktene mellom $y = 2x$ og $x^2 + y^2 = 20$.',
            solution: '$x^2 + 4x^2 = 20 \\Rightarrow 5x^2 = 20 \\Rightarrow x = \\pm 2$. Punkter: $(2, 4)$ og $(-2, -4)$.',
          },
          {
            label: 'b',
            task: 'Avgjør uten å løse likningen om linjen $y = x + 5$ skjaerer sirkelen $x^2 + y^2 = 9$.',
            solution: 'Normalform: $x - y + 5 = 0$. Avstand fra origo: $\\frac{|5|}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2} \\approx 3{,}54 > 3 = r$. Linjen treffer **ikke** sirkelen.',
          },
          {
            label: 'c',
            task: 'For hvilke verdier av $k$ tangerer linjen $y = x + k$ sirkelen $x^2 + y^2 = 8$?',
            solution: 'Avstand fra origo: $\\frac{|k|}{\\sqrt{2}} = \\sqrt{8} = 2\\sqrt{2} \\Rightarrow |k| = 4 \\Rightarrow k = 4$ eller $k = -4$.',
          },
        ],
        hints: ['For skjaering: sett inn linjen i sirkellikningen', 'For tangering: avstand fra sentrum = radius'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-6-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte sirkel- og linjeproblemer.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn alle linjer med stigningstall $1$ som er tangenter til sirkelen $(x-2)^2 + (y-1)^2 = 8$.',
            solution: 'Linje: $y = x + c$, dvs. $x - y + c = 0$. Avstand fra $(2,1)$: $\\frac{|2-1+c|}{\\sqrt{2}} = 2\\sqrt{2} \\Rightarrow |c+1| = 4 \\Rightarrow c = 3$ eller $c = -5$. Tangenter: $y = x + 3$ og $y = x - 5$.',
          },
          {
            label: 'b',
            task: 'Finn likningen til sirkelen med sentrum $S = (1, -2)$ som er tangent til $x$-aksen.',
            solution: 'Radiusen er lik $|y|$-koordinaten til sentrum: $r = |-2| = 2$. Likning: $(x-1)^2 + (y+2)^2 = 4$.',
          },
          {
            label: 'c',
            task: 'Finn likningen til sirkelen som har $A = (1, 3)$ og $B = (7, -1)$ som endepunkter for en diameter.',
            solution: 'Sentrum: $S = \\left(\\frac{1+7}{2}, \\frac{3+(-1)}{2}\\right) = (4, 1)$. Radius: $r = |SA| = \\sqrt{9+4} = \\sqrt{13}$. Likning: $(x-4)^2 + (y-1)^2 = 13$.',
          },
          {
            label: 'd',
            task: 'Vis at linjen $3x + 4y = 25$ tangerer sirkelen $x^2 + y^2 = 25$, og finn tangentpunktet.',
            solution: 'Avstand fra origo til linjen: $\\frac{|25|}{\\sqrt{9+16}} = \\frac{25}{5} = 5 = r$ ✓. Tangentpunktet: Vi loser $3x + 4y = 25$ og $x^2 + y^2 = 25$ simultant. Fra linjen: $x = \\frac{25-4y}{3}$. Innsetting: $\\frac{(25-4y)^2}{9} + y^2 = 25 \\Rightarrow 25y^2 - 200y + 625 = 225 \\Rightarrow y^2 - 8y + 16 = 0 \\Rightarrow (y-4)^2 = 0$. Altså $y = 4$, $x = 3$. Tangentpunkt: $(3, 4)$.',
          },
        ],
        hints: [
          'For tangent fra linje: avstand fra sentrum til linjen skal være lik radius',
          'Diameter gir sentrum som midtpunkt, og radius som halve diameteren',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.6: Vektorer i naturvitenskapelige problemer
// ============================================================================

export const CHAPTER_R1_6_6: TextbookChapter = {
  id: 'r1-6-6',
  courseId: 'r1',
  chapterNumber: '6.6',
  title: 'Vektorer i naturvitenskapelige problemer',
  description: 'Anvend vektorer på problemer fra fysikk: hastighet, kraft, vind/stroem, bevegelse og kollisjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'representere hastighet og kraft som vektorer',
    'addere og dekomponere kraftvektorer',
    'løse bevegelsesoppgaver med vind og stroem',
    'tolke skalarproduktet som arbeid i fysikk',
    'anvende parameterframstilling på bevegelse',
    'løse kollisjonsproblemet med vektorer',
  ],
  content: [
    {
      id: 'r1-6-6-intro',
      type: 'text',
      content: `## Vektorer i naturvitenskapelige problemer

Vektorer er uvurderlige i fysikken. Størrelser som hastighet, akselerasjon og kraft har både en størrelse og en retning -- de er nettopp vektorer.

I dette kapittelet ser vi på typiske problemer der vi bruker vektorregning til å modellere og løse fysiske situasjoner: baater mot stroem, fly mot vind, resulterende krefter, bevegelse i planet og kollisjonsproblemet.`,
    },
    {
      id: 'r1-6-6-def-hastighetskraft',
      type: 'definition',
      title: 'Hastighet og kraft som vektorer',
      content: `**Hastighetsvektor**: $\\vec{v} = (v_x, v_y)$ der $v_x$ og $v_y$ er hastigheten i henholdsvis $x$- og $y$-retning. Farten (skalar) er $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$.

**Kraftvektor**: $\\vec{F} = (F_x, F_y)$ der komponentene er kraft i koordinatretningene. Den resulterende kraften av to krefter $\\vec{F}_1$ og $\\vec{F}_2$ er $\\vec{F}_{\\text{res}} = \\vec{F}_1 + \\vec{F}_2$.

**Arbeid**: $W = \\vec{F} \\cdot \\vec{s}$ der $\\vec{s}$ er forflytningsvektoren. I komponentform: $W = F_x s_x + F_y s_y$.`,
    },
    {
      id: 'r1-6-6-text-parameterframstilling',
      type: 'text',
      content: `## Parameterframstilling for bevegelse

Posisjonen til et objekt som beveger seg med konstant hastighet kan beskrives med en **parameterframstilling**:

$$\\vec{p}(t) = \\vec{p}_0 + t \\cdot \\vec{v}$$

der $\\vec{p}_0$ er startposisjonen ved $t = 0$ og $\\vec{v}$ er hastighetsvektoren.

I komponentform:

$$x(t) = x_0 + v_x \\cdot t \\qquad y(t) = y_0 + v_y \\cdot t$$

Med konstant akselerasjon $\\vec{a}$ (f.eks. tyngdekraft) får vi:

$$\\vec{p}(t) = \\vec{p}_0 + t \\cdot \\vec{v}_0 + \\frac{1}{2}t^2 \\cdot \\vec{a}$$`,
    },
    {
      id: 'r1-6-6-example-stroem',
      type: 'example',
      title: 'Eksempel 1: Baat mot stroem',
      problem: `En baat kan gaa med fart 5 m/s i stille vann. Baaten skal over en elv der stroemmen går med hastighetsvektor $\\vec{s} = (2, 0)$ m/s (dvs. 2 m/s i $x$-retning).

Baatfoereren sikter rett over elva (i $y$-retning). Finn den faktiske hastighetsvektoren og den faktiske farten til baaten.`,
      solution: `Baatens hastighetsvektor relativt til vannet: $\\vec{v}_{\\text{baat}} = (0, 5)$ m/s.

Den faktiske hastigheten (relativt til land) er summen:

$$\\vec{v}_{\\text{total}} = \\vec{v}_{\\text{baat}} + \\vec{s} = (0, 5) + (2, 0) = (2, 5) \\text{ m/s}$$

Faktisk fart: $|\\vec{v}_{\\text{total}}| = \\sqrt{4 + 25} = \\sqrt{29} \\approx 5{,}4$ m/s.

Baaten forflyttes både rett over elva og nedstroems.`,
    },
    {
      id: 'r1-6-6-example-vind',
      type: 'example',
      title: 'Eksempel 2: Fly mot vind -- kurskorreksjon',
      problem: `Et fly vil fly rett nordover med fart 200 km/h i forhold til bakken. Det blaaer en vind fra vest med fart 50 km/h (vindvektor: $\\vec{w} = (50, 0)$ km/h).

Hvilken kurs (vinkel vest for nord) må piloten fly, og hva blir flyets faktiske fart nordover?`,
      solution: `La $\\vec{v}_{\\text{fly}} = (v_x, v_y)$ være flyets hastighetsvektor relativt til luften, med $|\\vec{v}_{\\text{fly}}| = 200$.

Resulterende hastighet: $\\vec{v}_{\\text{total}} = \\vec{v}_{\\text{fly}} + \\vec{w} = (v_x + 50,\\; v_y)$.

For å gaa rett nord: $v_x + 50 = 0 \\Rightarrow v_x = -50$ km/h.

$v_y = \\sqrt{200^2 - 50^2} = \\sqrt{40000 - 2500} = \\sqrt{37500} = 50\\sqrt{15} \\approx 194$ km/h.

Vinkel vest for nord: $\\sin\\theta = 50/200 = 0{,}25 \\Rightarrow \\theta \\approx 14{,}5°$.`,
    },
    {
      id: 'r1-6-6-example-kraft',
      type: 'example',
      title: 'Eksempel 3: Resulterende kraft og arbeid',
      problem: `To krefter virker på et legeme: $\\vec{F}_1 = (3, 4)$ N og $\\vec{F}_2 = (-1, 2)$ N.

a) Finn den resulterende kraften $\\vec{F}_{\\text{res}}$.

b) Finn størrelsen av den resulterende kraften.

c) Finn arbeidet dersom legemet forflyttes $\\vec{s} = (2, -1)$ m.`,
      solution: `**a)** $\\vec{F}_{\\text{res}} = (3-1,\\; 4+2) = (2, 6)$ N

**b)** $|\\vec{F}_{\\text{res}}| = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10} \\approx 6{,}3$ N

**c)** $W = \\vec{F}_{\\text{res}} \\cdot \\vec{s} = 2 \\cdot 2 + 6 \\cdot (-1) = 4 - 6 = -2$ J

Negativt arbeid betyr at kraften motvirker forflytningen.`,
    },
    {
      id: 'r1-6-6-note-kollisjon',
      type: 'note',
      title: 'Kollisjonsproblemet',
      content: `To objekter $A$ og $B$ har posisjoner $\\vec{p}_A(t) = \\vec{p}_{A0} + t\\vec{v}_A$ og $\\vec{p}_B(t) = \\vec{p}_{B0} + t\\vec{v}_B$.

De kolliderer når $\\vec{p}_A(t) = \\vec{p}_B(t)$, dvs. når:

$$\\vec{p}_{A0} - \\vec{p}_{B0} + t(\\vec{v}_A - \\vec{v}_B) = \\vec{0}$$

Vi loser dette som et likningssystem i $t$ ved å sette komponentene lik null. Systemet har løsning bare hvis begge komponentene gir **samme** verdi av $t$.`,
    },
    {
      id: 'r1-6-6-example-kollisjon',
      type: 'example',
      title: 'Eksempel 4: Kollisjonsproblemet',
      problem: `Skip $A$ er i posisjon $(0, 10)$ med hastighetsvektor $\\vec{v}_A = (3, -1)$ km/t. Skip $B$ er i posisjon $(12, 0)$ med hastighetsvektor $\\vec{v}_B = (-1, 2)$ km/t.

Vil skipene kollidere? Hvis ja, når og hvor?`,
      solution: `Posisjoner: $\\vec{p}_A(t) = (3t,\\; 10-t)$ og $\\vec{p}_B(t) = (12-t,\\; 2t)$.

Sett lik:
- $x$: $3t = 12 - t \\Rightarrow 4t = 12 \\Rightarrow t = 3$
- $y$: $10 - t = 2t \\Rightarrow 10 = 3t \\Rightarrow t = 10/3$

Siden $t = 3 \\neq 10/3$, kolliderer skipene **ikke**.

Men vi kan finne nærmeste avstand: ved $t = 3$ er $A = (9, 7)$ og $B = (9, 6)$, avstand $= 1$ km.`,
    },
    {
      id: 'r1-6-6-tip-dekomponering',
      type: 'tip',
      content: `**Kraftdekomponering:** Når en kraft $\\vec{F}$ virker på et skraaplan med vinkel $\\theta$, dekomponerer vi i en komponent **langs** planet og en komponent **vinkelrett** på planet:

- Langs planet: $F_{\\parallel} = |\\vec{F}| \\sin\\theta$
- Vinkelrett på planet: $F_{\\perp} = |\\vec{F}| \\cos\\theta$

Dette er essensielt i fysikk og ingenioeerfag.`,
    },
    {
      id: 'r1-6-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-6-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende hastighets- og kraftoppgaver.',
        subTasks: [
          {
            label: 'a',
            task: 'En ball kastes med hastighetsvektor $\\vec{v} = (6, 8)$ m/s. Finn farten $|\\vec{v}|$.',
            solution: '$|\\vec{v}| = \\sqrt{36 + 64} = \\sqrt{100} = 10$ m/s',
          },
          {
            label: 'b',
            task: 'Finn den resulterende kraften av $\\vec{F}_1 = (5, -2)$ N og $\\vec{F}_2 = (-3, 7)$ N, og størrelsen.',
            solution: '$\\vec{F}_{\\text{res}} = (2, 5)$ N. $|\\vec{F}_{\\text{res}}| = \\sqrt{29} \\approx 5{,}4$ N.',
          },
          {
            label: 'c',
            task: 'Finn arbeidet når kraften $\\vec{F} = (4, 3)$ N virker langs forflytningen $\\vec{s} = (5, 0)$ m.',
            solution: '$W = \\vec{F} \\cdot \\vec{s} = 4 \\cdot 5 + 3 \\cdot 0 = 20$ J',
          },
        ],
        hints: ['Fart = lengden av hastighetsvektoren', 'Arbeid = skalarproduktet av kraft og forflytning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-6-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Parameterframstilling for bevegelse.',
        subTasks: [
          {
            label: 'a',
            task: 'Et objekt starter i $(2, 3)$ og beveger seg med hastighet $\\vec{v} = (1, -2)$ m/s. Skriv parameterframstillingen og finn posisjonen etter $t = 4$ s.',
            solution: '$\\vec{p}(t) = (2+t,\\; 3-2t)$. $\\vec{p}(4) = (6, -5)$.',
          },
          {
            label: 'b',
            task: 'Et objekt har posisjon $\\vec{p}(t) = (3t, 10 - 2t)$. Finn startposisjonen, hastighetsvektoren og når objektet krysser $x$-aksen.',
            solution: 'Start: $\\vec{p}(0) = (0, 10)$. Hastighet: $\\vec{v} = (3, -2)$. $y = 0$: $10 - 2t = 0 \\Rightarrow t = 5$ s. Posisjon: $(15, 0)$.',
          },
        ],
        hints: ['$\\vec{p}(t) = \\vec{p}_0 + t\\vec{v}$', '$x$-aksen er der $y(t) = 0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-6-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Stroem- og vindoppgaver.',
        subTasks: [
          {
            label: 'a',
            task: 'En kajakist padler med fart 3 m/s rett nord i stille vann. Elven stroemmer med $\\vec{s} = (1, -1)$ m/s. Finn den faktiske hastighetsvektoren og farten.',
            solution: '$\\vec{v}_{\\text{total}} = (0,3) + (1,-1) = (1, 2)$ m/s. Fart: $\\sqrt{5} \\approx 2{,}24$ m/s.',
          },
          {
            label: 'b',
            task: 'En svoemmer vil svoemme rett over en elv (i $y$-retning). Farten i stille vann er 2 m/s. Stroemmen er $\\vec{s} = (1{,}5,\\; 0)$ m/s. Hvilken retning må svoemeren sikte, og hva blir farten rett over?',
            solution: 'Sikte: $v_x + 1{,}5 = 0 \\Rightarrow v_x = -1{,}5$. $v_y = \\sqrt{4 - 2{,}25} = \\sqrt{1{,}75} \\approx 1{,}32$ m/s.',
          },
          {
            label: 'c',
            task: 'Et fly vil fly rett oestover med fart 300 km/h. Vinden blaeser fra soer med $\\vec{w} = (0, -40)$ km/h. Finn kursen piloten må fly.',
            solution: 'La $\\vec{v} = (v_x, v_y)$, $|\\vec{v}| = 300$. For rett oest: $v_y - 40 = 0 \\Rightarrow v_y = 40$. $v_x = \\sqrt{300^2 - 40^2} = \\sqrt{88400} \\approx 297{,}3$ km/h. Vinkel: $\\sin\\theta = 40/300 \\Rightarrow \\theta \\approx 7{,}7°$ nord for oest.',
          },
        ],
        hints: ['Faktisk hastighet = egen hastighet + vind/stroem', 'For kurskorreksjon: sett den uoenskede komponenten lik null'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-6-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-6-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bevegelse, kollisjon og tyngdekraft.',
        subTasks: [
          {
            label: 'a',
            task: 'Bil $A$ er i $(0, 0)$ med $\\vec{v}_A = (4, 3)$ og bil $B$ er i $(20, 0)$ med $\\vec{v}_B = (0, 3)$. Kolliderer de? Finn i så fall tidspunkt og sted.',
            solution: '$x$: $4t = 20 \\Rightarrow t = 5$. $y$: $3t = 3t$ (sant for alle $t$). De kolliderer ved $t = 5$ i punktet $(20, 15)$.',
          },
          {
            label: 'b',
            task: 'En stein skytes med $\\vec{v}_0 = (15, 20)$ m/s fra origo. Akselerasjon $\\vec{a} = (0, -10)$ m/s$^2$. Finn når steinen treffer bakken og maks hoyde.',
            solution: '$\\vec{p}(t) = (15t,\\; 20t - 5t^2)$. Bakken: $5t(4-t) = 0 \\Rightarrow t = 4$ s ved $(60, 0)$. Maks hoyde: $v_y = 20-10t = 0 \\Rightarrow t = 2$, $y(2) = 20$ m.',
          },
          {
            label: 'c',
            task: 'Tre krefter $\\vec{F}_1 = (10, 0)$ N, $\\vec{F}_2 = (0, 8)$ N og $\\vec{F}_3 = (-4, -3)$ N virker på et legeme som beveger seg $\\vec{s} = (3, 2)$ m. Finn resultantkraft og arbeid.',
            solution: '$\\vec{F}_{\\text{res}} = (6, 5)$ N. $|\\vec{F}_{\\text{res}}| = \\sqrt{61} \\approx 7{,}8$ N. $W = 6 \\cdot 3 + 5 \\cdot 2 = 28$ J.',
          },
        ],
        hints: [
          'Kollisjon: sett posisjonene lik hverandre komponentvis og sjekk om $t$-verdiene stemmer',
          'Tyngdekraft: $\\vec{p}(t) = \\vec{p}_0 + t\\vec{v}_0 + \\frac{1}{2}t^2\\vec{a}$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.7: Binomisk og hypergeometrisk fordeling
// ============================================================================

export const CHAPTER_R1_8_7: TextbookChapter = {
  id: 'r1-8-7',
  courseId: 'r1',
  chapterNumber: '8.7',
  title: 'Binomisk og hypergeometrisk fordeling',
  description: 'Lær om binomisk fordeling B(n,p), hypergeometrisk fordeling, forventningsverdi, varians og når man bruker hvilken fordeling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjenkjenne situasjoner der binomisk fordeling passer',
    'beregne sannsynligheter med binomisk fordeling',
    'beregne forventet verdi og varians for binomisk fordeling',
    'gjenkjenne situasjoner der hypergeometrisk fordeling passer',
    'beregne sannsynligheter med hypergeometrisk fordeling',
    'velge riktig fordeling for ulike situasjoner',
  ],
  content: [
    {
      id: 'r1-8-7-intro',
      type: 'text',
      content: `## Binomisk og hypergeometrisk fordeling

I mange praktiske situasjoner gjentar vi et forsøk mange ganger og teller antall "suksesser". To viktige fordelinger beskriver slike situasjoner:

- **Binomisk fordeling**: Vi trekker **med** tilbakelegging (eller populasjonen er så stor at tilbakelegging ikke spiller noen rolle). Sannsynligheten for suksess er konstant ved hvert forsøk.

- **Hypergeometrisk fordeling**: Vi trekker **uten** tilbakelegging fra en endelig populasjon. Sannsynligheten endres for hvert trekk.

Aa velge riktig fordeling er like viktig som selve beregningen.`,
    },
    {
      id: 'r1-8-7-def-binomisk',
      type: 'definition',
      title: 'Binomisk fordeling',
      content: `La $X$ være antall suksesser i $n$ uavhengige forsøk der hvert forsøk har suksesssannsynlighet $p$.

Da er $X$ **binomisk fordelt**, skrevet $X \\sim B(n, p)$, og:

$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, \\ldots, n$$

**Forutsetninger:**
1. Fast antall forsøk $n$
2. Hvert forsøk er uavhengig
3. Konstant sannsynlighet $p$ for suksess i hvert forsøk
4. To mulige utfall: suksess eller fiasko`,
    },
    {
      id: 'r1-8-7-theorem-binomisk-ev',
      type: 'theorem',
      title: 'Forventningsverdi og varians for binomisk fordeling',
      content: `La $X \\sim B(n, p)$. Da er:

**Forventet verdi:** $E(X) = np$

**Varians:** $\\text{Var}(X) = np(1-p)$

**Standardavvik:** $\\sigma(X) = \\sqrt{np(1-p)}$

Forventningsverdien $np$ er det "typiske" antall suksesser vi forventer. Variansen forteller hvor mye resultatet typisk avviker fra forventningen.`,
    },
    {
      id: 'r1-8-7-example-terning',
      type: 'example',
      title: 'Eksempel 1: Terningkast',
      problem: `En rettferdig terning kastes 10 ganger. La $X$ være antall seksere.

a) Hvilken fordeling har $X$?

b) Beregn $P(X = 3)$.

c) Finn $E(X)$ og $\\text{Var}(X)$.`,
      solution: `**a)** Hvert kast er uavhengig med $p = 1/6$. Dermed $X \\sim B(10, 1/6)$.

**b)**
$$P(X = 3) = \\binom{10}{3} \\left(\\frac{1}{6}\\right)^3 \\left(\\frac{5}{6}\\right)^7 = 120 \\cdot \\frac{1}{216} \\cdot \\frac{78125}{279936} \\approx 0{,}155$$

**c)** $E(X) = 10 \\cdot \\frac{1}{6} = \\frac{5}{3} \\approx 1{,}67$

$\\text{Var}(X) = 10 \\cdot \\frac{1}{6} \\cdot \\frac{5}{6} = \\frac{25}{18} \\approx 1{,}39$`,
    },
    {
      id: 'r1-8-7-example-binomisk-minst',
      type: 'example',
      title: 'Eksempel 2: Minst-sannsynlighet',
      problem: `En eksamen har 8 flervalgsspøersmaal med 4 alternativer. En elev gjetter tilfeldig på alle. Finn sannsynligheten for at eleven får minst 3 riktige.`,
      solution: `$X \\sim B(8, 0{,}25)$. Vi søker $P(X \\geq 3)$.

Det er enklere å bruke komplementet: $P(X \\geq 3) = 1 - P(X \\leq 2)$.

$$P(X = 0) = \\binom{8}{0}(0{,}25)^0(0{,}75)^8 = (0{,}75)^8 \\approx 0{,}1001$$

$$P(X = 1) = \\binom{8}{1}(0{,}25)^1(0{,}75)^7 = 8 \\cdot 0{,}25 \\cdot (0{,}75)^7 \\approx 0{,}2670$$

$$P(X = 2) = \\binom{8}{2}(0{,}25)^2(0{,}75)^6 = 28 \\cdot 0{,}0625 \\cdot (0{,}75)^6 \\approx 0{,}3115$$

$$P(X \\geq 3) = 1 - 0{,}1001 - 0{,}2670 - 0{,}3115 \\approx 0{,}321$$`,
    },
    {
      id: 'r1-8-7-def-hypergeometrisk',
      type: 'definition',
      title: 'Hypergeometrisk fordeling',
      content: `En populasjon inneholder $N$ elementer, der $M$ er av type "suksess" og $N - M$ er av type "fiasko". Vi trekker $n$ elementer **uten tilbakelegging**.

La $X$ være antall suksesser i utvalget. Da er $X$ **hypergeometrisk fordelt**, skrevet $X \\sim H(N, M, n)$, og:

$$P(X = k) = \\frac{\\dbinom{M}{k}\\dbinom{N-M}{n-k}}{\\dbinom{N}{n}}, \\quad k = 0, 1, \\ldots, \\min(n, M)$$

**Forventet verdi:** $E(X) = n \\cdot \\dfrac{M}{N}$

**Varians:** $\\text{Var}(X) = n \\cdot \\dfrac{M}{N} \\cdot \\dfrac{N-M}{N} \\cdot \\dfrac{N-n}{N-1}$`,
    },
    {
      id: 'r1-8-7-example-kort',
      type: 'example',
      title: 'Eksempel 3: Kortspill',
      problem: `Fra en standard kortstokk på 52 kort trekker vi 5 kort uten tilbakelegging. La $X$ være antall hjerter (det er 13 hjerter i kortstokken).

a) Hvilken fordeling har $X$?

b) Beregn $P(X = 2)$.

c) Finn $E(X)$.`,
      solution: `**a)** Trekking uten tilbakelegging fra endelig populasjon: $X \\sim H(52, 13, 5)$.

**b)**
$$P(X = 2) = \\frac{\\binom{13}{2}\\binom{39}{3}}{\\binom{52}{5}} = \\frac{78 \\cdot 9139}{2598960} = \\frac{712842}{2598960} \\approx 0{,}274$$

**c)** $E(X) = 5 \\cdot \\frac{13}{52} = 5 \\cdot \\frac{1}{4} = 1{,}25$`,
    },
    {
      id: 'r1-8-7-note-velge-fordeling',
      type: 'note',
      title: 'Når bruker vi hvilken fordeling?',
      content: `**Binomisk fordeling** passer når:
- Forsøkene er uavhengige (med tilbakelegging, eller stor populasjon)
- Konstant sannsynlighet $p$ for suksess i hvert forsøk
- Eksempel: terningkast, myntkast, stikkprøve fra stor populasjon

**Hypergeometrisk fordeling** passer når:
- Vi trekker uten tilbakelegging fra en liten, endelig populasjon
- Sannsynligheten endres fra trekk til trekk
- Eksempel: kortspill, kvalitetskontroll av en liten batch, lotteri

**Tommelfingerregel:** Hvis populasjonen er mer enn 10 ganger så stor som utvalget, kan binomisk fordeling brukes som tilnærming til hypergeometrisk.`,
    },
    {
      id: 'r1-8-7-example-kvalitet',
      type: 'example',
      title: 'Eksempel 4: Kvalitetskontroll',
      problem: `Et parti inneholder 20 produkter, der 4 er defekte. Vi trekker tilfeldig 3 produkter for kontroll (uten tilbakelegging).

a) Beregn sannsynligheten for at nøyaktig 1 av de 3 er defekt.

b) Beregn sannsynligheten for at ingen er defekte.

c) Finn forventet antall defekte.`,
      solution: `$X \\sim H(20, 4, 3)$.

**a)**
$$P(X = 1) = \\frac{\\binom{4}{1}\\binom{16}{2}}{\\binom{20}{3}} = \\frac{4 \\cdot 120}{1140} = \\frac{480}{1140} \\approx 0{,}421$$

**b)**
$$P(X = 0) = \\frac{\\binom{4}{0}\\binom{16}{3}}{\\binom{20}{3}} = \\frac{1 \\cdot 560}{1140} = \\frac{560}{1140} \\approx 0{,}491$$

**c)** $E(X) = 3 \\cdot \\frac{4}{20} = 0{,}6$`,
    },
    {
      id: 'r1-8-7-warning-forutsetninger',
      type: 'warning',
      content: `**Sjekk alltid forutsetningene før du velger fordeling!**

Binomisk fordeling krever:
- Fast antall forsøk ($n$ er kjent på forhånd)
- Uavhengige forsøk
- Konstant $p$

Hvis du trekker fra en eske med 10 kuler uten tilbakelegging, er forsøkene **ikke** uavhengige -- da må du bruke hypergeometrisk fordeling.`,
    },
    {
      id: 'r1-8-7-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-8-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende binomisk fordeling.',
        subTasks: [
          {
            label: 'a',
            task: 'En mynt kastes 8 ganger. La $X$ være antall kron. Skriv fordelingen til $X$ og beregn $P(X = 4)$.',
            solution: '$X \\sim B(8, 0{,}5)$. $P(X=4) = \\binom{8}{4}(0{,}5)^8 = 70 \\cdot \\frac{1}{256} = \\frac{70}{256} \\approx 0{,}273$.',
          },
          {
            label: 'b',
            task: 'I et spill er sannsynligheten for å vinne en runde $p = 0{,}3$. Vi spiller 6 runder. Finn forventet antall seire og standardavviket.',
            solution: '$X \\sim B(6, 0{,}3)$. $E(X) = 1{,}8$. $\\sigma = \\sqrt{6 \\cdot 0{,}3 \\cdot 0{,}7} = \\sqrt{1{,}26} \\approx 1{,}12$.',
          },
          {
            label: 'c',
            task: 'Sannsynligheten for å treffe blinken med et skudd er $0{,}8$. Du skyter 5 skudd. Finn $P(X = 5)$, dvs. at alle treffer.',
            solution: '$X \\sim B(5, 0{,}8)$. $P(X=5) = (0{,}8)^5 = 0{,}32768 \\approx 0{,}328$.',
          },
        ],
        hints: ['$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$', '$E(X) = np$, $\\sigma = \\sqrt{np(1-p)}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-8-7-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-8-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Grunnleggende hypergeometrisk fordeling.',
        subTasks: [
          {
            label: 'a',
            task: 'I en skuff ligger det 5 roede og 7 blaa kuler. Vi trekker 4 uten tilbakelegging. Finn sannsynligheten for nøyaktig 2 roede.',
            solution: '$X \\sim H(12, 5, 4)$. $P(X=2) = \\frac{\\binom{5}{2}\\binom{7}{2}}{\\binom{12}{4}} = \\frac{10 \\cdot 21}{495} = \\frac{210}{495} \\approx 0{,}424$.',
          },
          {
            label: 'b',
            task: 'Et lotteri har 50 lodd der 10 er premielodd. Du kjoeper 3 lodd. Finn $P(X = 0)$ og $E(X)$.',
            solution: '$X \\sim H(50, 10, 3)$. $P(X=0) = \\frac{\\binom{10}{0}\\binom{40}{3}}{\\binom{50}{3}} = \\frac{9880}{19600} \\approx 0{,}504$. $E(X) = 3 \\cdot 10/50 = 0{,}6$.',
          },
        ],
        hints: ['Hypergeometrisk: trekking uten tilbakelegging fra endelig populasjon', '$E(X) = n \\cdot M/N$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-8-7-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-8-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig fordeling og beregn.',
        subTasks: [
          {
            label: 'a',
            task: 'En fabrikk produserer batterier der 5 % er defekte. Vi trekker tilfeldig 20 batterier fra et stort lager. Hvilken fordeling passer? Finn $P(X = 1)$.',
            solution: 'Stor populasjon: $X \\sim B(20, 0{,}05)$. $P(X=1) = \\binom{20}{1}(0{,}05)^1(0{,}95)^{19} \\approx 20 \\cdot 0{,}05 \\cdot 0{,}377 \\approx 0{,}377$.',
          },
          {
            label: 'b',
            task: 'En liten kasse inneholder 10 lodd, 3 av dem er premielodd. Vi trekker 4 lodd uten tilbakelegging. Hvilken fordeling passer? Finn $P(X \\geq 1)$.',
            solution: 'Liten populasjon: $X \\sim H(10, 3, 4)$. $P(X=0) = \\frac{\\binom{3}{0}\\binom{7}{4}}{\\binom{10}{4}} = \\frac{35}{210} = \\frac{1}{6}$. $P(X \\geq 1) = 1 - 1/6 = 5/6 \\approx 0{,}833$.',
          },
          {
            label: 'c',
            task: 'En klasse har 30 elever, 12 jenter og 18 gutter. Vi velger tilfeldig en komité på 4 elever. La $X$ være antall jenter. Finn $P(X = 2)$ og $E(X)$.',
            solution: '$X \\sim H(30, 12, 4)$. $P(X=2) = \\frac{\\binom{12}{2}\\binom{18}{2}}{\\binom{30}{4}} = \\frac{66 \\cdot 153}{27405} \\approx 0{,}368$. $E(X) = 4 \\cdot 12/30 = 1{,}6$.',
          },
        ],
        hints: ['Spoer deg selv: er populasjonen stor eller liten? Er det tilbakelegging?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-8-7-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-8-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Binomisk fordeling med komplement.',
        subTasks: [
          {
            label: 'a',
            task: 'En terning kastes 5 ganger. Finn sannsynligheten for minst én sekser.',
            solution: '$X \\sim B(5, 1/6)$. $P(X \\geq 1) = 1 - P(X=0) = 1 - (5/6)^5 = 1 - 3125/7776 \\approx 0{,}598$.',
          },
          {
            label: 'b',
            task: 'I en spoerreundersøkelse sier 60 % ja. Vi spoer 12 tilfeldig valgte personer. Finn $P(X \\leq 5)$.',
            solution: '$X \\sim B(12, 0{,}6)$. $P(X \\leq 5) = \\sum_{k=0}^{5} \\binom{12}{k}(0{,}6)^k(0{,}4)^{12-k}$. Beregning: $\\approx 0{,}0003 + 0{,}0025 + 0{,}0125 + 0{,}0420 + 0{,}1009 + 0{,}1766 \\approx 0{,}335$.',
          },
        ],
        hints: ['$P(X \\geq 1) = 1 - P(X=0)$ er ofte enklere', 'For kumulativ: summer opp $P(X=0) + P(X=1) + \\ldots$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-8-7-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-8-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte sannsynlighetsoppgaver.',
        subTasks: [
          {
            label: 'a',
            task: 'Vi kaster en rettferdig terning inntil vi får en sekser, men maks 5 ganger. La $Y$ være antall kast. Er $Y$ binomisk fordelt? Forklar. Finn $P(Y \\leq 3)$.',
            solution: 'Nei, $Y$ er ikke binomisk (antall forsøk er ikke fast). $P(Y=1)=1/6$, $P(Y=2)=5/36$, $P(Y=3)=25/216$. $P(Y \\leq 3) = 36/216 + 30/216 + 25/216 = 91/216 \\approx 0{,}421$.',
          },
          {
            label: 'b',
            task: 'I et lotteri er det 100 lodd, 10 premielodd. Anna kjoeper 5 lodd. Bruk hypergeometrisk fordeling til å finne $P(X \\geq 2)$.',
            solution: '$X \\sim H(100, 10, 5)$. $P(X=0) = \\frac{\\binom{10}{0}\\binom{90}{5}}{\\binom{100}{5}} \\approx 0{,}584$. $P(X=1) = \\frac{\\binom{10}{1}\\binom{90}{4}}{\\binom{100}{5}} \\approx 0{,}339$. $P(X \\geq 2) \\approx 1 - 0{,}584 - 0{,}339 = 0{,}077$.',
          },
          {
            label: 'c',
            task: 'En basketballspiller treffer 70 % av sine frikast. I en kamp tar hun 10 frikast. Finn sannsynligheten for at hun treffer mellom 6 og 8 (inklusiv).',
            solution: '$X \\sim B(10, 0{,}7)$. $P(6 \\leq X \\leq 8) = P(X=6) + P(X=7) + P(X=8)$. $P(X=6) = \\binom{10}{6}(0{,}7)^6(0{,}3)^4 \\approx 0{,}200$. $P(X=7) = \\binom{10}{7}(0{,}7)^7(0{,}3)^3 \\approx 0{,}267$. $P(X=8) = \\binom{10}{8}(0{,}7)^8(0{,}3)^2 \\approx 0{,}233$. Sum $\\approx 0{,}700$.',
          },
        ],
        hints: [
          'For a: binomisk krever fast antall forsøk og konstant sannsynlighet',
          'For b: beregn $P(X=0)$ og $P(X=1)$ separat, bruk komplement',
          'For c: summer enkeltesannsynligheter for $k = 6, 7, 8$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.3: Kontrapositiv og kontradiksjon
// ============================================================================

export const CHAPTER_R1_9_3: TextbookChapter = {
  id: 'r1-9-3',
  courseId: 'r1',
  chapterNumber: '9.3',
  title: 'Kontrapositiv og kontradiksjon',
  description: 'Lær om kontrapositiv bevisfoering og bevis ved kontradiksjon (selvmotsigelse), inkludert bevis for at sqrt(2) er irrasjonell og at det finnes uendelig mange primtall.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utføre kontrapositiv bevisfoering',
    'utføre bevis ved kontradiksjon (selvmotsigelse)',
    'bevise at sqrt(2) er irrasjonell',
    'forstaa Euklids bevis for uendelig mange primtall',
  ],
  content: [
    {
      id: 'r1-9-3-intro',
      type: 'text',
      content: `## Kontrapositiv og kontradiksjon

I kapittel 9.1 laerte du direkte bevis, og i 9.2 bevis ved induksjon. Noen ganger er det vanskelig eller umulig å bevise en paastand direkte. Da kan vi bruke to kraftige **indirekte bevismetoder**:

- **Kontrapositiv**: I stedet for å bevise «dersom $P$, så $Q$», beviser vi den logisk ekvivalente paastanden «dersom ikke $Q$, så ikke $P$».
- **Kontradiksjon** (selvmotsigelse): Vi antar at paastanden er usann, og utleder en selvmotsigelse. Da må paastanden være sann.

Disse metodene er spesielt nyttige for å bevise eksistensresultater og egenskaper ved irrasjonale tall.`,
    },
    {
      id: 'r1-9-3-def-kontrapositiv',
      type: 'definition',
      title: 'Kontrapositiv',
      content: `En implikasjon $P \\Rightarrow Q$ er **logisk ekvivalent** med sin kontrapositiv $\\neg Q \\Rightarrow \\neg P$.

Det betyr at for å bevise «dersom $P$, så $Q$», kan vi i stedet bevise «dersom ikke $Q$, så ikke $P$». De to utsagnene er alltid enten begge sanne eller begge usanne.

**Eksempel på logikken:**
- Original: «Dersom det regner, er bakken vaat.»
- Kontrapositiv: «Dersom bakken ikke er vaat, regner det ikke.»

Begge utsagnene er ekvivalente.`,
    },
    {
      id: 'r1-9-3-example-kontrapositiv',
      type: 'example',
      title: 'Eksempel 1: Kontrapositiv bevisfoering',
      problem: `Bevis: Dersom $n^2$ er odde, så er $n$ odde (der $n$ er et heltall).`,
      solution: `**Bevis (kontrapositiv):**

Vi beviser kontrapositivet: «Dersom $n$ er partall, så er $n^2$ partall.»

La $n$ være partall. Da finnes det et heltall $k$ slik at $n = 2k$.

$$n^2 = (2k)^2 = 4k^2 = 2(2k^2)$$

Siden $2k^2$ er et heltall, er $n^2$ partall. $\\square$

Vi har vist at $\\neg Q \\Rightarrow \\neg P$, som er ekvivalent med $P \\Rightarrow Q$.`,
    },
    {
      id: 'r1-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Kontrapositiv bevisfoering.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv kontrapositivet til: «Dersom $n$ er delelig med 6, så er $n$ delelig med 3.»',
            solution: '«Dersom $n$ ikke er delelig med 3, så er $n$ ikke delelig med 6.»',
          },
          {
            label: 'b',
            task: 'Bevis ved kontrapositiv: Dersom $n^2$ er delelig med 3, så er $n$ delelig med 3.',
            solution: 'Kontrapositiv: Dersom $n$ ikke er delelig med 3, så er $n^2$ ikke delelig med 3. La $n = 3k + r$ der $r = 1$ eller $r = 2$. Hvis $r=1$: $n^2 = 9k^2 + 6k + 1 = 3(3k^2+2k) + 1$. Hvis $r=2$: $n^2 = 9k^2+12k+4 = 3(3k^2+4k+1)+1$. I begge tilfeller gir $n^2$ rest 1 ved divisjon med 3, så $n^2$ er ikke delelig med 3. $\\square$',
          },
        ],
        hints: [
          'Kontrapositivet til $P \\Rightarrow Q$ er $\\neg Q \\Rightarrow \\neg P$',
          'Ethvert heltall kan skrives som $3k$, $3k+1$ eller $3k+2$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-9-3-def-kontradiksjon',
      type: 'definition',
      title: 'Bevis ved kontradiksjon (selvmotsigelse)',
      content: `For å bevise en paastand $P$ ved **kontradiksjon**:

1. **Anta** at $P$ er usann (dvs. anta $\\neg P$).
2. **Utled** logisk fra $\\neg P$ til vi når en **selvmotsigelse** -- et utsagn som er aapenbart falskt eller som motsier antagelsen.
3. **Konkluder** at antagelsen $\\neg P$ må være feil, altså er $P$ sann.

Prinsippet bygger på loven om det utelatte tredje: en paastand er enten sann eller usann.`,
    },
    {
      id: 'r1-9-3-example-sqrt2',
      type: 'example',
      title: 'Eksempel 2: sqrt(2) er irrasjonell',
      problem: `Bevis at $\\sqrt{2}$ er et irrasjonelt tall.`,
      solution: `**Bevis (ved kontradiksjon):**

**Anta** at $\\sqrt{2}$ er rasjonell. Da kan vi skrive $\\sqrt{2} = \\frac{a}{b}$ der $a$ og $b$ er heltall med $b \\neq 0$ og brøken er **maksimalt forkortet** (dvs. $\\gcd(a, b) = 1$).

Kvadrer begge sider:
$$2 = \\frac{a^2}{b^2} \\quad \\Rightarrow \\quad a^2 = 2b^2$$

Altså er $a^2$ partall. Fra Eksempel 1 (kontrapositiv) vet vi at dette betyr at $a$ er partall. Skriv $a = 2k$:

$$4k^2 = 2b^2 \\quad \\Rightarrow \\quad b^2 = 2k^2$$

Altså er $b^2$ partall, som betyr at $b$ også er partall.

Men hvis både $a$ og $b$ er partall, er brøken $\\frac{a}{b}$ **ikke** maksimalt forkortet. Dette **motsier** antagelsen.

Altså er $\\sqrt{2}$ irrasjonell. $\\square$`,
    },
    {
      id: 'r1-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Irrasjonale tall.',
        subTasks: [
          {
            label: 'a',
            task: 'Bevis at $\\sqrt{3}$ er irrasjonell. (Hint: Du trenger først å vise at $n^2$ delelig med 3 medforer at $n$ er delelig med 3.)',
            solution: 'Anta $\\sqrt{3} = a/b$ med $\\gcd(a,b) = 1$. Da $a^2 = 3b^2$, så $3 | a^2$, altså $3 | a$ (fra oppgave 1b). Skriv $a = 3k$: $9k^2 = 3b^2$, dvs. $b^2 = 3k^2$, så $3 | b$. Både $a$ og $b$ delelig med 3 motsier $\\gcd(a,b)=1$. $\\square$',
          },
          {
            label: 'b',
            task: 'Bevis at $\\sqrt{2} + \\sqrt{3}$ er irrasjonell. (Hint: Anta at summen er rasjonell og vis at dette foerer til at $\\sqrt{2}$ er rasjonell.)',
            solution: 'Anta $\\sqrt{2}+\\sqrt{3} = r \\in \\mathbb{Q}$. Da $\\sqrt{3} = r - \\sqrt{2}$. Kvadrer: $3 = r^2 - 2r\\sqrt{2} + 2$, så $\\sqrt{2} = \\frac{r^2-1}{2r}$, som er rasjonell. Men vi vet at $\\sqrt{2}$ er irrasjonell. Selvmotsigelse. $\\square$',
          },
        ],
        hints: [
          'Bruk samme struktur som beviset for sqrt(2): anta rasjonell, kvadrer, utled selvmotsigelse',
          'For b: isoler en rotuttrykk og vis at det må være rasjonelt',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-9-3-theorem-euklid',
      type: 'theorem',
      title: 'Euklids teorem: Det finnes uendelig mange primtall',
      content: `**Teorem (Euklid, ca. 300 f.Kr.):** Det finnes uendelig mange primtall.

**Bevis (ved kontradiksjon):**

**Anta** at det finnes endelig mange primtall: $p_1, p_2, \\ldots, p_n$.

Konstruer tallet:
$$N = p_1 \\cdot p_2 \\cdot \\ldots \\cdot p_n + 1$$

Da er $N > 1$, så $N$ har minst en primfaktor $p$. Men $N$ gir rest 1 ved divisjon med hvert av primtallene $p_1, p_2, \\ldots, p_n$. Altså er $p$ et primtall som **ikke** er blant $p_1, \\ldots, p_n$.

Dette **motsier** antagelsen om at listen inneholder alle primtall.

Altså finnes det uendelig mange primtall. $\\square$`,
    },
    {
      id: 'r1-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Primtall og Euklids bevis.',
        subTasks: [
          {
            label: 'a',
            task: 'I Euklids bevis: Hvis vi starter med primtallene $p_1 = 2, p_2 = 3, p_3 = 5$, hva er $N$? Er $N$ selv et primtall?',
            solution: '$N = 2 \\cdot 3 \\cdot 5 + 1 = 31$. Ja, 31 er et primtall.',
          },
          {
            label: 'b',
            task: 'Gjenta med $p_1 = 2, p_2 = 3, p_3 = 5, p_4 = 7$. Er $N$ et primtall?',
            solution: '$N = 2 \\cdot 3 \\cdot 5 \\cdot 7 + 1 = 211$. Vi sjekker: 211 er ikke delelig med 2, 3, 5, 7, 11, 13 (og $14^2 = 196 < 211 < 225 = 15^2$). Altså er 211 et primtall.',
          },
          {
            label: 'c',
            task: 'Gjenta med $p_1 = 2, p_2 = 3, p_3 = 5, p_4 = 7, p_5 = 11, p_6 = 13$. Er $N$ et primtall? Hvis ikke, faktoriser.',
            solution: '$N = 2 \\cdot 3 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 + 1 = 30031$. $30031 = 59 \\cdot 509$. $N$ er ikke selv et primtall, men primfaktorene 59 og 509 er ikke blant de opprinnelige.',
          },
        ],
        hints: [
          'Beregn produktet først, legg til 1',
          'N trenger ikke være et primtall, men primfaktorene er nye',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-9-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du laert to indirekte bevismetoder:

- **Kontrapositiv**: For å bevise $P \\Rightarrow Q$, bevis $\\neg Q \\Rightarrow \\neg P$ i stedet.
- **Kontradiksjon**: Anta at paastanden er usann, og utled en selvmotsigelse.

### Når bruker du hvilken metode?

| Metode | Når |
|--------|------|
| **Direkte bevis** | Naturlig vei fra antagelse til konklusjon |
| **Kontrapositiv** | Enklere å starte fra negasjonen av konklusjonen |
| **Kontradiksjon** | Paastanden handler om «umulighet» eller «ikke-eksistens» |
| **Induksjon** | Paastand om alle naturlige tall |

Beviset for at $\\sqrt{2}$ er irrasjonell og Euklids bevis er to av de mest kjente eksemplene i matematikkens historie.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'r1-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte bevis.',
        subTasks: [
          {
            label: 'a',
            task: 'Bevis ved kontradiksjon at det ikke finnes noe største partall.',
            solution: 'Anta at $n$ er det største partallet. Da er $n + 2$ også partall (sum av to partall) og $n + 2 > n$. Dette motsier at $n$ er størst. $\\square$',
          },
          {
            label: 'b',
            task: 'Bevis ved kontrapositiv: For heltall $a$ og $b$, dersom $ab$ er odde, så er både $a$ og $b$ odde.',
            solution: 'Kontrapositiv: Dersom $a$ er partall eller $b$ er partall, så er $ab$ partall. Anta $a$ er partall: $a = 2k$, så $ab = 2kb$ som er partall. Tilsvarende for $b$. $\\square$',
          },
          {
            label: 'c',
            task: 'Bevis at $\\log_2 3$ er irrasjonell.',
            solution: 'Anta $\\log_2 3 = a/b$ med $a, b \\in \\mathbb{Z}$, $b > 0$. Da $2^{a/b} = 3$, altså $2^a = 3^b$. Men $2^a$ er partall og $3^b$ er odde for alle positive heltall $a, b$. Selvmotsigelse. $\\square$',
          },
        ],
        hints: [
          'For a: Bruk at partall + 2 er partall',
          'For c: Skriv om til eksponentialform og sammenlign partall/odde',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-9-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-9-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken bevismetode er mest hensiktsmessig for å vise at $\\sqrt{5}$ er irrasjonell?',
        options: [
          { id: 'a', text: 'Direkte bevis', isCorrect: false },
          { id: 'b', text: 'Bevis ved induksjon', isCorrect: false },
          { id: 'c', text: 'Bevis ved kontradiksjon', isCorrect: true },
          { id: 'd', text: 'Bevis ved kontrapositiv', isCorrect: false },
        ],
        solution: 'Bevis ved kontradiksjon: Vi antar at $\\sqrt{5}$ er rasjonell ($\\sqrt{5} = a/b$ forkortet), og utleder at både $a$ og $b$ må være delelig med 5, som gir selvmotsigelse. Direkte bevis og induksjon passer ikke for slike eksistens-/umulighetspaastand.',
      },
    },
  ],
  exercises: [],
};
