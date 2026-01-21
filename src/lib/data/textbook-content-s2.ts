/**
 * Tekstbok kapitler for s2
 * Autogenerert fra textbook-content.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_S2_1_1: TextbookChapter = {
  id: 's2-1-1',
  courseId: 's2',
  chapterNumber: '1.1',
  title: 'Ubestemte integraler',
  description: 'Lær om antideriverte og grunnleggende integrasjonsregler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke integrasjon i praktiske anvendelser',
    'beregne og tolke integraler'
  ],
  content: [
    {
      id: 's2-1-1-intro',
      type: 'text',
      content: `## Hva er et integral?

**Integrasjon** er den omvendte operasjonen av derivasjon. Hvis vi vet den deriverte $f'(x)$, kan vi finne tilbake til $f(x)$ ved integrasjon.

En **antiderivert** (eller primitiv funksjon) til $f(x)$ er en funksjon $F(x)$ slik at $F'(x) = f(x)$.`
    },
    {
      id: 's2-1-1-def',
      type: 'definition',
      title: 'Ubestemt integral',
      content: `Det **ubestemte integralet** av $f(x)$ skrives:
$$\\int f(x) \\, dx = F(x) + C$$

der $F(x)$ er en antiderivert til $f(x)$ og $C$ er en vilkårlig konstant (integrasjonskonstanten).

**Notasjon:**
- $\\int$ er integraltegnet
- $f(x)$ er integranden
- $dx$ indikerer integrasjonsvariabelen
- $C$ er nødvendig fordi $F(x) + C$ har samme deriverte som $F(x)$`
    },
    {
      id: 's2-1-1-grunnregler',
      type: 'theorem',
      title: 'Grunnleggende integrasjonsregler',
      content: `$$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$

$$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$$

$$\\int e^x \\, dx = e^x + C$$

$$\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$$

$$\\int k \\cdot f(x) \\, dx = k \\int f(x) \\, dx$$

$$\\int [f(x) + g(x)] \\, dx = \\int f(x) \\, dx + \\int g(x) \\, dx$$`
    },
    {
      id: 's2-1-1-example-1',
      type: 'example',
      title: 'Enkle integraler',
      problem: `Beregn:
a) $\\int x^3 \\, dx$
b) $\\int \\frac{1}{x^2} \\, dx$
c) $\\int (3x^2 - 2x + 5) \\, dx$`,
      solution: `a) $\\int x^3 \\, dx = \\frac{x^4}{4} + C$

b) $\\int \\frac{1}{x^2} \\, dx = \\int x^{-2} \\, dx = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C$

c) $\\int (3x^2 - 2x + 5) \\, dx = 3 \\cdot \\frac{x^3}{3} - 2 \\cdot \\frac{x^2}{2} + 5x + C = x^3 - x^2 + 5x + C$`
    },
    {
      id: 's2-1-1-example-2',
      type: 'example',
      title: 'Eksponential- og logaritmefunksjoner',
      problem: `Beregn $\\int (e^x + \\frac{2}{x}) \\, dx$.`,
      solution: `$$\\int (e^x + \\frac{2}{x}) \\, dx = \\int e^x \\, dx + 2\\int \\frac{1}{x} \\, dx$$
$$= e^x + 2\\ln|x| + C$$`
    },
    {
      id: 's2-1-1-substitusjon',
      type: 'text',
      content: `## Substitusjon (innsetting)

For å integrere sammensatte funksjoner bruker vi **substitusjon**:
$$\\int f(g(x)) \\cdot g'(x) \\, dx = \\int f(u) \\, du$$

der $u = g(x)$ og $du = g'(x) \\, dx$.`
    },
    {
      id: 's2-1-1-example-3',
      type: 'example',
      title: 'Substitusjon',
      problem: `Beregn $\\int 2x \\cdot e^{x^2} \\, dx$.`,
      solution: `La $u = x^2$. Da er $du = 2x \\, dx$.

$$\\int 2x \\cdot e^{x^2} \\, dx = \\int e^u \\, du = e^u + C = e^{x^2} + C$$`
    },
    {
      id: 's2-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int x^5 \\, dx$.', solution: '$\\frac{x^6}{6} + C$' },
          { label: 'b', task: 'Beregn $\\int 4x^3 \\, dx$.', solution: '$x^4 + C$' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int (2x + 3) \\, dx$.', solution: '$x^2 + 3x + C$' },
          { label: 'b', task: 'Beregn $\\int (x^2 - 4x + 1) \\, dx$.', solution: '$\\frac{x^3}{3} - 2x^2 + x + C$' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int \\sqrt{x} \\, dx$.', solution: '$\\int x^{1/2} \\, dx = \\frac{x^{3/2}}{3/2} + C = \\frac{2}{3}x\\sqrt{x} + C$' },
          { label: 'b', task: 'Beregn $\\int \\frac{1}{\\sqrt{x}} \\, dx$.', solution: '$\\int x^{-1/2} \\, dx = 2\\sqrt{x} + C$' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int 3e^x \\, dx$.', solution: '$3e^x + C$' },
          { label: 'b', task: 'Beregn $\\int 2^x \\, dx$.', solution: '$\\frac{2^x}{\\ln 2} + C$' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int \\frac{3}{x} \\, dx$.', solution: '$3\\ln|x| + C$' },
          { label: 'b', task: 'Beregn $\\int (e^x - \\frac{1}{x}) \\, dx$.', solution: '$e^x - \\ln|x| + C$' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $f(x)$ hvis $f\'(x) = 2x - 1$ og $f(0) = 3$.', solution: '$f(x) = x^2 - x + C$. $f(0) = C = 3$. Svar: $f(x) = x^2 - x + 3$' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bruk substitusjon til å beregne $\\int 6x(x^2+1)^2 \\, dx$.', solution: 'La $u = x^2+1$, $du = 2x\\,dx$. $\\int 3u^2 \\, du = u^3 + C = (x^2+1)^3 + C$' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int e^{3x} \\, dx$.', solution: 'La $u = 3x$, $du = 3dx$. $\\int e^u \\cdot \\frac{1}{3} \\, du = \\frac{1}{3}e^{3x} + C$' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int \\frac{2x}{x^2+1} \\, dx$.', solution: 'La $u = x^2+1$, $du = 2x\\,dx$. $\\int \\frac{1}{u} \\, du = \\ln|u| + C = \\ln(x^2+1) + C$' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int x\\sqrt{x+1} \\, dx$ med substitusjon $u = x+1$.', solution: 'La $u = x+1$, $x = u-1$, $dx = du$. $\\int (u-1)\\sqrt{u} \\, du = \\int (u^{3/2} - u^{1/2}) \\, du = \\frac{2}{5}u^{5/2} - \\frac{2}{3}u^{3/2} + C$' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Verifiser at $\\int \\ln x \\, dx = x\\ln x - x + C$ ved å derivere høyre side.', solution: '$(x\\ln x - x + C)\' = \\ln x + x \\cdot \\frac{1}{x} - 1 = \\ln x + 1 - 1 = \\ln x$ ✓' }
        ]
      }
    },
    {
      id: 's2-1-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-1-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hastigheten til en partikkel er $v(t) = 3t^2 - 2t$ m/s. Finn posisjonen $s(t)$ hvis $s(0) = 4$ m.', solution: '$s(t) = \\int v(t) \\, dt = t^3 - t^2 + C$. $s(0) = C = 4$. Svar: $s(t) = t^3 - t^2 + 4$ m' }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S2_1_2: TextbookChapter = {
  id: 's2-1-2',
  courseId: 's2',
  chapterNumber: '1.2',
  title: 'Bestemte integraler',
  description: 'Lær om bestemte integraler og analysens fundamentalteorem.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke integrasjon i praktiske anvendelser',
    'beregne og tolke integraler'
  ],
  content: [
    {
      id: 's2-1-2-intro',
      type: 'text',
      content: `## Det bestemte integralet

Et **bestemt integral** beregner "summen" av funksjonsverdier over et intervall:
$$\\int_a^b f(x) \\, dx$$

der $a$ er nedre grense og $b$ er øvre grense.`
    },
    {
      id: 's2-1-2-theorem',
      type: 'theorem',
      title: 'Analysens fundamentalteorem',
      content: `Hvis $F(x)$ er en antiderivert til $f(x)$, så er:
$$\\int_a^b f(x) \\, dx = F(b) - F(a) = [F(x)]_a^b$$

Dette kobler sammen derivasjon og integrasjon!`
    },
    {
      id: 's2-1-2-example-1',
      type: 'example',
      title: 'Beregne bestemt integral',
      problem: `Beregn $\\int_1^3 (2x + 1) \\, dx$.`,
      solution: `**Finn antiderivert:** $F(x) = x^2 + x$

**Bruk fundamentalteoremet:**
$$\\int_1^3 (2x + 1) \\, dx = [x^2 + x]_1^3 = (9 + 3) - (1 + 1) = 12 - 2 = 10$$`
    },
    {
      id: 's2-1-2-egenskaper',
      type: 'text',
      content: `## Egenskaper

$$\\int_a^a f(x) \\, dx = 0$$

$$\\int_a^b f(x) \\, dx = -\\int_b^a f(x) \\, dx$$

$$\\int_a^b f(x) \\, dx = \\int_a^c f(x) \\, dx + \\int_c^b f(x) \\, dx$$

$$\\int_a^b kf(x) \\, dx = k\\int_a^b f(x) \\, dx$$`
    },
    {
      id: 's2-1-2-example-2',
      type: 'example',
      title: 'Eksempel med eksponentialfunksjon',
      problem: `Beregn $\\int_0^2 e^x \\, dx$.`,
      solution: `$$\\int_0^2 e^x \\, dx = [e^x]_0^2 = e^2 - e^0 = e^2 - 1 \\approx 6{,}39$$`
    },
    {
      id: 's2-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^2 3x^2 \\, dx$.', solution: '$[x^3]_0^2 = 8 - 0 = 8$' },
          { label: 'b', task: 'Beregn $\\int_1^4 2x \\, dx$.', solution: '$[x^2]_1^4 = 16 - 1 = 15$' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_{-1}^1 x^2 \\, dx$.', solution: '$[\\frac{x^3}{3}]_{-1}^1 = \\frac{1}{3} - (-\\frac{1}{3}) = \\frac{2}{3}$' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^1 (x^3 - x) \\, dx$.', solution: '$[\\frac{x^4}{4} - \\frac{x^2}{2}]_0^1 = (\\frac{1}{4} - \\frac{1}{2}) - 0 = -\\frac{1}{4}$' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_1^e \\frac{1}{x} \\, dx$.', solution: '$[\\ln|x|]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^{\\ln 2} e^x \\, dx$.', solution: '$[e^x]_0^{\\ln 2} = e^{\\ln 2} - e^0 = 2 - 1 = 1$' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_1^4 \\sqrt{x} \\, dx$.', solution: '$[\\frac{2}{3}x^{3/2}]_1^4 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^1 2xe^{x^2} \\, dx$.', solution: 'La $u = x^2$: $[e^{x^2}]_0^1 = e - 1$' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_0^2 \\frac{x}{x^2+1} \\, dx$.', solution: '$[\\frac{1}{2}\\ln(x^2+1)]_0^2 = \\frac{1}{2}(\\ln 5 - \\ln 1) = \\frac{\\ln 5}{2}$' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at $\\int_{-a}^a f(x) \\, dx = 0$ hvis $f$ er en odde funksjon.', solution: 'For odde $f$: $f(-x) = -f(x)$. $\\int_{-a}^0 f(x)\\,dx = -\\int_0^a f(x)\\,dx$, så summen er 0.' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $k$ slik at $\\int_0^k 2x \\, dx = 8$.', solution: '$[x^2]_0^k = k^2 = 8 \\Rightarrow k = 2\\sqrt{2}$' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\int_1^2 (x + \\frac{1}{x})^2 \\, dx$.', solution: 'Utvid: $\\int_1^2 (x^2 + 2 + \\frac{1}{x^2}) \\, dx = [\\frac{x^3}{3} + 2x - \\frac{1}{x}]_1^2 = (\\frac{8}{3} + 4 - \\frac{1}{2}) - (\\frac{1}{3} + 2 - 1) = \\frac{17}{6}$' }
        ]
      }
    },
    {
      id: 's2-1-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-1-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomsnittsverdien av $f$ på $[a,b]$ er $\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$. Finn gjennomsnittsverdien av $f(x) = x^2$ på $[0, 3]$.', solution: '$\\bar{f} = \\frac{1}{3}\\int_0^3 x^2 \\, dx = \\frac{1}{3}[\\frac{x^3}{3}]_0^3 = \\frac{1}{3} \\cdot 9 = 3$' }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S2_1_3: TextbookChapter = {
  id: 's2-1-3',
  courseId: 's2',
  chapterNumber: '1.3',
  title: 'Areal',
  description: 'Lær å beregne arealer ved hjelp av integraler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke integrasjon i praktiske anvendelser',
    'beregne arealer under og mellom kurver'
  ],
  content: [
    {
      id: 's2-1-3-intro',
      type: 'text',
      content: `## Areal under en kurve

Det bestemte integralet $\\int_a^b f(x) \\, dx$ gir **med fortegn** arealet mellom grafen til $f$ og $x$-aksen fra $x = a$ til $x = b$.

- Der $f(x) > 0$: positivt bidrag
- Der $f(x) < 0$: negativt bidrag`
    },
    {
      id: 's2-1-3-def',
      type: 'definition',
      title: 'Areal under kurve',
      content: `Arealet mellom grafen til $f$ og $x$-aksen på $[a, b]$:
$$A = \\int_a^b |f(x)| \\, dx$$

Hvis $f(x) \\geq 0$ på hele $[a, b]$:
$$A = \\int_a^b f(x) \\, dx$$

Hvis $f$ skifter fortegn, må vi dele opp integralet.`
    },
    {
      id: 's2-1-3-example-1',
      type: 'example',
      title: 'Areal under parabel',
      problem: `Finn arealet mellom grafen til $f(x) = 4 - x^2$ og $x$-aksen.`,
      solution: `**Nullpunkter:** $4 - x^2 = 0 \\Rightarrow x = \\pm 2$

$f(x) \\geq 0$ for $x \\in [-2, 2]$, så:
$$A = \\int_{-2}^2 (4 - x^2) \\, dx = [4x - \\frac{x^3}{3}]_{-2}^2$$
$$= (8 - \\frac{8}{3}) - (-8 + \\frac{8}{3}) = \\frac{16}{3} + \\frac{16}{3} = \\frac{32}{3}$$`
    },
    {
      id: 's2-1-3-mellom',
      type: 'definition',
      title: 'Areal mellom to kurver',
      content: `Arealet mellom grafene til $f$ og $g$ på $[a, b]$, der $f(x) \\geq g(x)$:
$$A = \\int_a^b [f(x) - g(x)] \\, dx$$

Generelt (når vi ikke vet hvilken som er størst):
$$A = \\int_a^b |f(x) - g(x)| \\, dx$$`
    },
    {
      id: 's2-1-3-example-2',
      type: 'example',
      title: 'Areal mellom kurver',
      problem: `Finn arealet mellom $f(x) = x^2$ og $g(x) = x$.`,
      solution: `**Skjæringspunkter:** $x^2 = x \\Rightarrow x(x-1) = 0 \\Rightarrow x = 0$ eller $x = 1$

For $x \\in [0, 1]$: $x > x^2$, så $g(x) > f(x)$.

$$A = \\int_0^1 (x - x^2) \\, dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}$$`
    },
    {
      id: 's2-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet under $f(x) = x$ fra $x = 0$ til $x = 4$.', solution: '$A = \\int_0^4 x \\, dx = [\\frac{x^2}{2}]_0^4 = 8$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet under $f(x) = x^2$ fra $x = 0$ til $x = 2$.', solution: '$A = \\int_0^2 x^2 \\, dx = [\\frac{x^3}{3}]_0^2 = \\frac{8}{3}$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet under $f(x) = e^x$ fra $x = 0$ til $x = 1$.', solution: '$A = \\int_0^1 e^x \\, dx = [e^x]_0^1 = e - 1 \\approx 1{,}72$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet mellom $f(x) = x^2$ og $x$-aksen fra $x = -1$ til $x = 2$.', solution: '$A = \\int_{-1}^2 x^2 \\, dx = [\\frac{x^3}{3}]_{-1}^2 = \\frac{8}{3} + \\frac{1}{3} = 3$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet mellom $y = x$ og $y = x^2$ fra $x = 0$ til $x = 1$.', solution: '$A = \\int_0^1 (x - x^2) \\, dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{6}$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet begrenset av $y = 6 - x$ og $y = x^2$.', solution: 'Skjæring: $x^2 = 6-x \\Rightarrow x^2+x-6=0 \\Rightarrow x=-3, 2$. $A = \\int_{-3}^2 (6-x-x^2)\\,dx = [6x-\\frac{x^2}{2}-\\frac{x^3}{3}]_{-3}^2 = \\frac{125}{6}$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet under $f(x) = x^3$ fra $x = -1$ til $x = 1$. Hva blir integralet?', solution: 'Integralet: $\\int_{-1}^1 x^3\\,dx = 0$ (odde funksjon). Men arealet = $2\\int_0^1 x^3\\,dx = 2 \\cdot \\frac{1}{4} = \\frac{1}{2}$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet mellom $y = x^2 - 4$ og $x$-aksen.', solution: 'Nullpunkter: $x = \\pm 2$. Under aksen for $|x| < 2$. $A = -\\int_{-2}^2 (x^2-4)\\,dx = [4x-\\frac{x^3}{3}]_{-2}^2 = \\frac{32}{3}$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet mellom $y = x^3 - x$ og $x$-aksen.', solution: 'Nullpunkter: $x = -1, 0, 1$. $A = -\\int_{-1}^0 (x^3-x)\\,dx + \\int_0^1 |x^3-x|\\,dx = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $k > 0$ slik at arealet under $y = x^2$ fra $0$ til $k$ er 9.', solution: '$\\int_0^k x^2\\,dx = \\frac{k^3}{3} = 9 \\Rightarrow k^3 = 27 \\Rightarrow k = 3$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet mellom $y = e^x$, $y = e^{-x}$ og $x = 1$.', solution: 'For $x > 0$: $e^x > e^{-x}$. $A = \\int_0^1 (e^x - e^{-x})\\,dx = [e^x + e^{-x}]_0^1 = (e + e^{-1}) - 2 = e + \\frac{1}{e} - 2$' }
        ]
      }
    },
    {
      id: 's2-1-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-1-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn arealet begrenset av $y = \\sqrt{x}$, $y = x^2$.', solution: 'Skjæring: $\\sqrt{x} = x^2 \\Rightarrow x = x^4 \\Rightarrow x(x^3-1) = 0$, så $x = 0, 1$. $A = \\int_0^1 (\\sqrt{x} - x^2)\\,dx = [\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{3}$' }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S2_1_4: TextbookChapter = {
  id: 's2-1-4',
  courseId: 's2',
  chapterNumber: '1.4',
  title: 'Anvendelser av integrasjon',
  description: 'Lær om praktiske anvendelser av integrasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke integrasjon i praktiske anvendelser',
    'tolke og bruke integraler i ulike kontekster'
  ],
  content: [
    {
      id: 's2-1-4-intro',
      type: 'text',
      content: `## Praktiske anvendelser

Integrasjon brukes til å løse mange praktiske problemer:
- Finne total mengde fra en rate
- Beregne arbeid fra kraft over avstand
- Finne gjennomsnittsverdi av en funksjon
- Beregne forbrukernes og produsentenes overskudd i økonomi`
    },
    {
      id: 's2-1-4-integral-okonomi-bilde',
      type: 'image',
      src: '/images/s2/integral-okonomi.svg',
      alt: 'Illustrasjon av integrasjon i okonomiske sammenhenger',
      caption: 'Integrasjon i okonomi - beregning av akkumulerte storrelser',
    },
    {
      id: 's2-1-4-konsumentoverskudd-bilde',
      type: 'image',
      src: '/images/s2/konsumentoverskudd.svg',
      alt: 'Illustrasjon av konsumentoverskudd',
      caption: 'Konsumentoverskudd - gevinst for forbrukere under markedspris',
    },
    {
      id: 's2-1-4-produsentoverskudd-bilde',
      type: 'image',
      src: '/images/s2/produsentoverskudd.svg',
      alt: 'Illustrasjon av produsentoverskudd',
      caption: 'Produsentoverskudd - gevinst for produsenter over markedspris',
    },
    {
      id: 's2-1-4-indeks-bilde',
      type: 'image',
      src: '/images/s2/indeks-prisutvikling.svg',
      alt: 'Illustrasjon av prisindeks og prisutvikling',
      caption: 'Prisindeks - mal pa relativ prisutvikling over tid',
    },
    {
      id: 's2-1-4-gjennomsnitt',
      type: 'definition',
      title: 'Gjennomsnittsverdi',
      content: `**Gjennomsnittsverdien** av $f$ på intervallet $[a, b]$:
$$\\bar{f} = \\frac{1}{b-a} \\int_a^b f(x) \\, dx$$

Dette er det "typiske" verdien av funksjonen på intervallet.`
    },
    {
      id: 's2-1-4-example-1',
      type: 'example',
      title: 'Gjennomsnittstemperatur',
      problem: `Temperaturen en dag er gitt ved $T(t) = 20 + 8\\sin(\\frac{\\pi t}{12})$ grader der $t$ er timer etter midnatt. Finn gjennomsnittstemperaturen fra kl. 6 til kl. 18.`,
      solution: `$$\\bar{T} = \\frac{1}{18-6} \\int_6^{18} (20 + 8\\sin(\\frac{\\pi t}{12})) \\, dt$$

$$= \\frac{1}{12} [20t - 8 \\cdot \\frac{12}{\\pi}\\cos(\\frac{\\pi t}{12})]_6^{18}$$

$$= \\frac{1}{12} [(360 - \\frac{96}{\\pi} \\cdot (-1)) - (120 - \\frac{96}{\\pi} \\cdot 0)]$$

$$= \\frac{1}{12} [360 + \\frac{96}{\\pi} - 120] = \\frac{240 + \\frac{96}{\\pi}}{12} \\approx 22{,}5°\\text{C}$$`
    },
    {
      id: 's2-1-4-overskudd',
      type: 'text',
      content: `## Konsument- og produsentoverskudd

I økonomi kan integrasjon brukes til å beregne:

**Konsumentoverskudd**: Differansen mellom hva forbrukere er villige til å betale og hva de faktisk betaler.

**Produsentoverskudd**: Differansen mellom hva produsenter mottar og hva de er villige til å produsere for.`
    },
    {
      id: 's2-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn gjennomsnittsverdien av $f(x) = x^2$ på $[0, 3]$.', solution: '$\\bar{f} = \\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3} \\cdot 9 = 3$' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn gjennomsnittsverdien av $f(x) = 2x + 1$ på $[0, 4]$.', solution: '$\\bar{f} = \\frac{1}{4}\\int_0^4 (2x+1)\\,dx = \\frac{1}{4}[x^2+x]_0^4 = \\frac{20}{4} = 5$' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vanntilførsel til et basseng er $r(t) = 100 + 20t$ liter/time. Hvor mye vann tilføres de første 3 timene?', solution: '$V = \\int_0^3 (100+20t)\\,dt = [100t + 10t^2]_0^3 = 300 + 90 = 390$ liter' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Befolkningsveksten er $P\'(t) = 1000e^{0{,}02t}$ per år. Finn økningen de første 10 årene.', solution: '$\\Delta P = \\int_0^{10} 1000e^{0{,}02t}\\,dt = [50000e^{0{,}02t}]_0^{10} = 50000(e^{0{,}2} - 1) \\approx 11070$' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hastighet er $v(t) = 3t^2$ m/s. Finn total tilbakelagt avstand fra $t = 0$ til $t = 4$.', solution: '$s = \\int_0^4 3t^2\\,dt = [t^3]_0^4 = 64$ m' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn gjennomsnittsverdien av $f(x) = e^x$ på $[0, 2]$.', solution: '$\\bar{f} = \\frac{1}{2}\\int_0^2 e^x\\,dx = \\frac{1}{2}[e^x]_0^2 = \\frac{e^2-1}{2} \\approx 3{,}19$' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Marginalkostnaden er $K\'(x) = 20 + 0{,}1x$ kr. Finn kostnadsøkningen når produksjonen øker fra 100 til 200 enheter.', solution: '$\\Delta K = \\int_{100}^{200} (20+0{,}1x)\\,dx = [20x+0{,}05x^2]_{100}^{200} = (4000+2000)-(2000+500) = 3500$ kr' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Temperatur varierer som $T(t) = 15 + 10\\cos(\\frac{\\pi t}{12})$ over et døgn ($t$ i timer). Finn gjennomsnittstemperaturen.', solution: '$\\bar{T} = \\frac{1}{24}\\int_0^{24} (15+10\\cos(\\frac{\\pi t}{12}))\\,dt = \\frac{1}{24}[15t + \\frac{120}{\\pi}\\sin(\\frac{\\pi t}{12})]_0^{24} = 15°C$' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bakteriekoloni vokser med rate $r(t) = 100 \\cdot 2^{t/3}$ per time. Hvor mange bakterier tilføres fra time 0 til time 6?', solution: '$N = \\int_0^6 100 \\cdot 2^{t/3}\\,dt = [\\frac{100 \\cdot 3}{\\ln 2} \\cdot 2^{t/3}]_0^6 = \\frac{300}{\\ln 2}(4-1) = \\frac{900}{\\ln 2} \\approx 1299$' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Strømforbruk varierer som $P(t) = 2000 + 500\\sin(\\frac{\\pi t}{12})$ W. Finn energiforbruket (i kWh) over 24 timer.', solution: '$E = \\int_0^{24} P(t)\\,dt = [2000t - \\frac{6000}{\\pi}\\cos(\\frac{\\pi t}{12})]_0^{24} = 48000$ Wh = 48 kWh' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Akselerasjon $a(t) = 6t$ m/s². Finn hastighet og posisjon som funksjoner av $t$ hvis $v(0) = 5$ m/s og $s(0) = 0$ m.', solution: '$v(t) = \\int 6t\\,dt = 3t^2 + C_1$, $v(0) = 5 \\Rightarrow C_1 = 5$. $s(t) = \\int (3t^2+5)\\,dt = t^3 + 5t + C_2$, $s(0) = 0 \\Rightarrow C_2 = 0$.' }
        ]
      }
    },
    {
      id: 's2-1-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-1-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at gjennomsnittsverdien av en lineær funksjon $f(x) = ax + b$ på $[c, d]$ er lik funksjonsverdien i midtpunktet.', solution: '$\\bar{f} = \\frac{1}{d-c}\\int_c^d (ax+b)\\,dx = \\frac{1}{d-c}[\\frac{ax^2}{2}+bx]_c^d = \\frac{a(d+c)}{2} + b = a \\cdot \\frac{c+d}{2} + b = f(\\frac{c+d}{2})$ ✓' }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S2_2_1: TextbookChapter = {
  id: 's2-2-1',
  courseId: 's2',
  chapterNumber: '2.1',
  title: 'Introduksjon til differensiallikninger',
  description: 'Lær hva differensiallikninger er og hvordan de brukes.',
  estimatedMinutes: 55,
  competenceGoals: [
    'løse differensiallikninger med separable variabler',
    'bruke differensiallikninger til å modellere praktiske situasjoner'
  ],
  content: [
    {
      id: 's2-2-1-intro',
      type: 'text',
      content: `## Hva er en differensiallikning?

En **differensiallikning** er en likning som inneholder en ukjent funksjon og dens deriverte. Vi vil finne funksjonen som tilfredsstiller likningen.

**Eksempel:** $y' = 2x$ er en differensiallikning. Løsningen er $y = x^2 + C$.`
    },
    {
      id: 's2-2-1-differensiallikning-bilde',
      type: 'image',
      src: '/images/r2/differensiallikning.svg',
      alt: 'Illustrasjon av losningskurver for en differensiallikning',
      caption: 'Differensiallikninger - losningskurver viser hvordan funksjonen oppforer seg',
    },
    {
      id: 's2-2-1-def',
      type: 'definition',
      title: 'Differensiallikning',
      content: `En **differensiallikning** er en likning som inneholder en ukjent funksjon $y = y(x)$ og en eller flere av dens deriverte.

**Orden:** Den høyeste deriverte som forekommer.
- $y' = f(x)$ er første ordens
- $y'' = f(x)$ er andre ordens

**Generell løsning:** Inneholder en vilkårlig konstant $C$.
**Partikulær løsning:** Én bestemt løsning (der $C$ er bestemt av initialbetingelse).`
    },
    {
      id: 's2-2-1-example-1',
      type: 'example',
      title: 'Enkel differensiallikning',
      problem: `Løs $y' = 3x^2$ med initialbetingelse $y(0) = 5$.`,
      solution: `**Generell løsning:** Integrer begge sider.
$$y = \\int 3x^2 \\, dx = x^3 + C$$

**Partikulær løsning:** Bruk $y(0) = 5$:
$$5 = 0^3 + C \\Rightarrow C = 5$$

**Svar:** $y = x^3 + 5$`
    },
    {
      id: 's2-2-1-anvendelser',
      type: 'text',
      content: `## Anvendelser

Differensiallikninger brukes til å modellere:
- Befolkningsvekst
- Radioaktivt forfall
- Temperaturendring (Newtons avkjølingslov)
- Økonomisk vekst
- Spredning av sykdommer`
    },
    {
      id: 's2-2-1-example-2',
      type: 'example',
      title: 'Vekstmodell',
      problem: `En bakteriekultur vokser med en rate proporsjonal med størrelsen. Sett opp differensiallikningen.`,
      solution: `La $N(t)$ være antall bakterier ved tid $t$.

"Rate proporsjonal med størrelsen" betyr:
$$\\frac{dN}{dt} = kN$$

der $k > 0$ er vekstkonstanten.

Dette er den klassiske **eksponentiell vekst**-modellen.`
    },
    {
      id: 's2-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' = 4x$.', solution: '$y = \\int 4x\\,dx = 2x^2 + C$' },
          { label: 'b', task: 'Finn den partikulære løsningen der $y(0) = 3$.', solution: '$3 = 0 + C \\Rightarrow C = 3$. Svar: $y = 2x^2 + 3$' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' = e^x$ med $y(0) = 2$.', solution: '$y = e^x + C$. $y(0) = 1 + C = 2 \\Rightarrow C = 1$. Svar: $y = e^x + 1$' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' = \\frac{1}{x}$ for $x > 0$ med $y(1) = 0$.', solution: '$y = \\ln x + C$. $y(1) = 0 + C = 0 \\Rightarrow C = 0$. Svar: $y = \\ln x$' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Verifiser at $y = Ce^{2x}$ er løsning av $y\' = 2y$.', solution: '$y\' = 2Ce^{2x} = 2y$ ✓' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' = x + 1$ med $y(2) = 0$.', solution: '$y = \\frac{x^2}{2} + x + C$. $y(2) = 2 + 2 + C = 0 \\Rightarrow C = -4$. Svar: $y = \\frac{x^2}{2} + x - 4$' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hastigheten til en partikkel er $v(t) = 6t - 2$. Finn posisjon $s(t)$ hvis $s(0) = 5$.', solution: '$s(t) = \\int (6t-2)\\,dt = 3t^2 - 2t + C$. $s(0) = C = 5$. Svar: $s(t) = 3t^2 - 2t + 5$' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Sett opp differensiallikningen for radioaktivt forfall der nedbrytningsraten er proporsjonal med mengden.', solution: '$\\frac{dm}{dt} = -km$ der $k > 0$' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\'\' = 6x$ med $y\'(0) = 2$ og $y(0) = 1$.', solution: '$y\' = 3x^2 + C_1$, $y\'(0) = C_1 = 2$. $y = x^3 + 2x + C_2$, $y(0) = C_2 = 1$. Svar: $y = x^3 + 2x + 1$' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Verifiser at $y = x^2 + Cx$ tilfredsstiller $xy\' - y = x^2$.', solution: '$y\' = 2x + C$. $xy\' - y = x(2x + C) - (x^2 + Cx) = 2x^2 + Cx - x^2 - Cx = x^2$ ✓' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Akselerasjonen til et fallende objekt med luftmotstand kan modelleres som $a = g - kv$. Sett opp differensiallikningen for $v(t)$.', solution: '$\\frac{dv}{dt} = g - kv$ der $g$ er tyngdeakselerasjon og $k$ er motstandskoeffisient.' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn alle funksjoner $f$ slik at $f\'(x) = f(x)$ og $f(0) = 1$.', solution: 'Fra teorien vet vi at løsningen er $f(x) = Ce^x$. Med $f(0) = 1$: $C = 1$. Svar: $f(x) = e^x$' }
        ]
      }
    },
    {
      id: 's2-2-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-2-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En funksjon tilfredsstiller $y\' = 2xy$ og $y(0) = 1$. Verifiser at $y = e^{x^2}$ er løsningen.', solution: '$y\' = 2xe^{x^2} = 2x \\cdot y$ ✓ og $y(0) = e^0 = 1$ ✓' }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S2_2_2: TextbookChapter = {
  id: 's2-2-2',
  courseId: 's2',
  chapterNumber: '2.2',
  title: 'Separable differensiallikninger',
  description: 'Lær å løse differensiallikninger ved separasjon av variable.',
  estimatedMinutes: 55,
  competenceGoals: [
    'løse differensiallikninger med separable variabler',
    'bruke differensiallikninger til å modellere praktiske situasjoner'
  ],
  content: [
    {
      id: 's2-2-2-intro',
      type: 'text',
      content: `## Separable differensiallikninger

En differensiallikning er **separabel** hvis den kan skrives på formen:
$$\\frac{dy}{dx} = f(x) \\cdot g(y)$$

Vi kan da separere variablene og integrere hver side for seg.`
    },
    {
      id: 's2-2-2-metode',
      type: 'definition',
      title: 'Separasjonsmetoden',
      content: `For å løse $\\frac{dy}{dx} = f(x) \\cdot g(y)$:

1. **Separer:** $\\frac{dy}{g(y)} = f(x) \\, dx$

2. **Integrer:** $\\int \\frac{1}{g(y)} \\, dy = \\int f(x) \\, dx$

3. **Løs for $y$** (hvis mulig)

4. **Finn partikulær løsning** ved å bruke initialbetingelse`
    },
    {
      id: 's2-2-2-example-1',
      type: 'example',
      title: 'Eksponentiell vekst',
      problem: `Løs $\\frac{dy}{dx} = ky$ med $y(0) = y_0$.`,
      solution: `**Separer:**
$$\\frac{dy}{y} = k \\, dx$$

**Integrer:**
$$\\int \\frac{1}{y} \\, dy = \\int k \\, dx$$
$$\\ln|y| = kx + C_1$$

**Løs for $y$:**
$$|y| = e^{kx + C_1} = e^{C_1} e^{kx}$$
$$y = Ce^{kx}$$ (der $C = \\pm e^{C_1}$)

**Bruk initialbetingelse:** $y(0) = C = y_0$

**Svar:** $y = y_0 e^{kx}$`
    },
    {
      id: 's2-2-2-example-2',
      type: 'example',
      title: 'Annen type',
      problem: `Løs $\\frac{dy}{dx} = xy$ med $y(0) = 2$.`,
      solution: `**Separer:**
$$\\frac{dy}{y} = x \\, dx$$

**Integrer:**
$$\\ln|y| = \\frac{x^2}{2} + C_1$$

**Løs for $y$:**
$$y = Ce^{x^2/2}$$

**Bruk initialbetingelse:** $y(0) = C = 2$

**Svar:** $y = 2e^{x^2/2}$`
    },
    {
      id: 's2-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' = 3y$.', solution: '$\\frac{dy}{y} = 3dx \\Rightarrow \\ln|y| = 3x + C_1 \\Rightarrow y = Ce^{3x}$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' = -2y$ med $y(0) = 5$.', solution: '$y = Ce^{-2x}$. $y(0) = C = 5$. Svar: $y = 5e^{-2x}$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $\\frac{dy}{dx} = \\frac{y}{x}$ for $x > 0$.', solution: '$\\frac{dy}{y} = \\frac{dx}{x} \\Rightarrow \\ln|y| = \\ln|x| + C_1 \\Rightarrow y = Cx$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' = y^2$ med $y(0) = 1$.', solution: '$\\frac{dy}{y^2} = dx \\Rightarrow -\\frac{1}{y} = x + C$. $y(0) = 1 \\Rightarrow C = -1$. $y = \\frac{1}{1-x}$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $\\frac{dy}{dx} = xe^{-y}$.', solution: '$e^y dy = x dx \\Rightarrow e^y = \\frac{x^2}{2} + C$. $y = \\ln(\\frac{x^2}{2} + C)$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' = \\frac{x}{y}$ med $y(0) = 2$.', solution: '$y dy = x dx \\Rightarrow \\frac{y^2}{2} = \\frac{x^2}{2} + C$. $y(0) = 2 \\Rightarrow C = 2$. $y = \\sqrt{x^2 + 4}$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En befolkning vokser med $P\' = 0{,}03P$. Hvis $P(0) = 1000$, finn $P(t)$ og $P(10)$.', solution: '$P = 1000e^{0{,}03t}$. $P(10) = 1000e^{0{,}3} \\approx 1350$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' = y(1-y)$ (logistisk vekst).', solution: 'Partialbrøk: $\\frac{1}{y(1-y)} = \\frac{1}{y} + \\frac{1}{1-y}$. $\\ln|\\frac{y}{1-y}| = x + C$. $y = \\frac{Ae^x}{1+Ae^x}$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et radioaktivt stoff har halveringstid 5 år. Sett opp og løs differensiallikningen. Hvor mye er igjen etter 12 år?', solution: '$m\' = -km$. $m = m_0 e^{-kt}$. $\\frac{1}{2} = e^{-5k} \\Rightarrow k = \\frac{\\ln 2}{5}$. Etter 12 år: $m = m_0 e^{-12\\ln 2/5} \\approx 0{,}19m_0$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $\\frac{dy}{dx} = \\frac{1+y^2}{1+x^2}$.', solution: '$\\frac{dy}{1+y^2} = \\frac{dx}{1+x^2} \\Rightarrow \\arctan y = \\arctan x + C$. $y = \\tan(\\arctan x + C)$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Newtons avkjølingslov: $\\frac{dT}{dt} = -k(T - T_s)$. Løs med $T(0) = T_0$.', solution: 'La $u = T - T_s$. $u\' = -ku \\Rightarrow u = Ce^{-kt}$. $T = T_s + (T_0 - T_s)e^{-kt}$' }
        ]
      }
    },
    {
      id: 's2-2-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-2-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kopp kaffe med 80°C plasseres i rom med 20°C. Etter 10 min er den 60°C. Finn temperaturen etter 30 min.', solution: 'Fra Newtons lov: $T = 20 + 60e^{-kt}$. $60 = 20 + 60e^{-10k} \\Rightarrow k = \\frac{\\ln 1{,}5}{10}$. $T(30) = 20 + 60e^{-3\\ln 1{,}5} \\approx 37{,}8°C$' }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S2_2_3: TextbookChapter = {
  id: 's2-2-3',
  courseId: 's2',
  chapterNumber: '2.3',
  title: 'Lineære differensiallikninger',
  description: 'Lær å løse første ordens lineære differensiallikninger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'løse lineære differensiallikninger',
    'bruke differensiallikninger i modellering'
  ],
  content: [
    {
      id: 's2-2-3-intro',
      type: 'text',
      content: `## Lineære første ordens differensiallikninger

En **lineær første ordens** differensiallikning har formen:
$$y' + p(x)y = q(x)$$

der $p(x)$ og $q(x)$ er kjente funksjoner.`
    },
    {
      id: 's2-2-3-metode',
      type: 'theorem',
      title: 'Løsningsmetode',
      content: `For å løse $y' + p(x)y = q(x)$:

1. Finn **integrerende faktor:** $\\mu(x) = e^{\\int p(x)\\,dx}$

2. Multipliser likningen med $\\mu(x)$:
   $$\\mu y' + \\mu p y = \\mu q$$
   $$\\frac{d}{dx}(\\mu y) = \\mu q$$

3. Integrer: $\\mu y = \\int \\mu q \\, dx + C$

4. Løs for $y$: $y = \\frac{1}{\\mu}\\int \\mu q \\, dx + \\frac{C}{\\mu}$`
    },
    {
      id: 's2-2-3-example-1',
      type: 'example',
      title: 'Lineær differensiallikning',
      problem: `Løs $y' + 2y = 4$.`,
      solution: `Her er $p(x) = 2$ og $q(x) = 4$.

**Integrerende faktor:**
$$\\mu = e^{\\int 2\\,dx} = e^{2x}$$

**Multipliser:**
$$e^{2x}y' + 2e^{2x}y = 4e^{2x}$$
$$\\frac{d}{dx}(e^{2x}y) = 4e^{2x}$$

**Integrer:**
$$e^{2x}y = 2e^{2x} + C$$

**Løs for $y$:**
$$y = 2 + Ce^{-2x}$$`
    },
    {
      id: 's2-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' + y = 2$.', solution: '$\\mu = e^x$. $(e^x y)\' = 2e^x$. $e^x y = 2e^x + C$. $y = 2 + Ce^{-x}$' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' - y = 0$.', solution: '$\\mu = e^{-x}$. $(e^{-x}y)\' = 0$. $y = Ce^x$' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' + 3y = 6$ med $y(0) = 0$.', solution: '$y = 2 + Ce^{-3x}$. $y(0) = 2 + C = 0 \\Rightarrow C = -2$. $y = 2(1 - e^{-3x})$' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' + y = e^x$.', solution: '$\\mu = e^x$. $(e^x y)\' = e^{2x}$. $e^x y = \\frac{1}{2}e^{2x} + C$. $y = \\frac{1}{2}e^x + Ce^{-x}$' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' - 2y = 4x$.', solution: '$\\mu = e^{-2x}$. $(e^{-2x}y)\' = 4xe^{-2x}$. Integrer med delvis integrasjon. $y = -2x - 1 + Ce^{2x}$' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $xy\' + y = x^2$ for $x > 0$.', solution: 'Skriv om: $y\' + \\frac{1}{x}y = x$. $\\mu = x$. $(xy)\' = x^2$. $xy = \\frac{x^3}{3} + C$. $y = \\frac{x^2}{3} + \\frac{C}{x}$' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et innskudd vokser med rente $r$ og får årlige innskudd $A$: $\\frac{dP}{dt} = rP + A$. Løs med $P(0) = P_0$.', solution: '$P = -\\frac{A}{r} + Ce^{rt}$. $P(0) = -\\frac{A}{r} + C = P_0$. $P = (P_0 + \\frac{A}{r})e^{rt} - \\frac{A}{r}$' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' + 2xy = x$.', solution: '$\\mu = e^{x^2}$. $(e^{x^2}y)\' = xe^{x^2}$. $e^{x^2}y = \\frac{1}{2}e^{x^2} + C$. $y = \\frac{1}{2} + Ce^{-x^2}$' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En tank med 100 L vann får tilført saltløsning (20 g/L) med 5 L/min. Blanding renner ut med 5 L/min. Finn saltmengden $S(t)$ hvis $S(0) = 0$.', solution: '$\\frac{dS}{dt} = 100 - \\frac{5S}{100}$. $S\' + 0{,}05S = 100$. $S = 2000(1 - e^{-0{,}05t})$ g' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' + \\frac{2y}{x} = \\frac{1}{x^2}$ for $x > 0$ med $y(1) = 0$.', solution: '$\\mu = x^2$. $(x^2 y)\' = 1$. $x^2 y = x + C$. $y(1) = 1 + C = 0 \\Rightarrow C = -1$. $y = \\frac{x-1}{x^2}$' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn likevektsløsningen til $y\' + 2y = 6$ og beskriv oppførselen til andre løsninger.', solution: 'Likevekt: $y\' = 0 \\Rightarrow y = 3$. Generell: $y = 3 + Ce^{-2t}$. Alle løsninger $\\to 3$ når $t \\to \\infty$.' }
        ]
      }
    },
    {
      id: 's2-2-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-2-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Løs $y\' + y\\tan x = \\sec x$ for $-\\frac{\\pi}{2} < x < \\frac{\\pi}{2}$.', solution: '$\\mu = \\sec x$. $(y\\sec x)\' = \\sec^2 x$. $y\\sec x = \\tan x + C$. $y = \\sin x + C\\cos x$' }
        ]
      }
    }
  ],
  exercises: []
};

export const CHAPTER_S2_2_4: TextbookChapter = {
  id: 's2-2-4',
  courseId: 's2',
  chapterNumber: '2.4',
  title: 'Modellering med differensiallikninger',
  description: 'Lær å bruke differensiallikninger til å modellere praktiske situasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke differensiallikninger til å modellere praktiske situasjoner',
    'tolke og analysere løsninger av differensiallikninger'
  ],
  content: [
    {
      id: 's2-2-4-intro',
      type: 'text',
      content: `## Modellering med differensiallikninger

Differensiallikninger er kraftige verktøy for å modellere prosesser der endringsraten avhenger av nåværende tilstand:
- Befolkningsdynamikk
- Epidemimodeller
- Økonomiske modeller
- Fysiske prosesser`
    },
    {
      id: 's2-2-4-vekstmodeller-bilde',
      type: 'image',
      src: '/images/s2/vekstmodeller.svg',
      alt: 'Illustrasjon av ulike vekstmodeller',
      caption: 'Vekstmodeller - eksponentiell og logistisk vekst',
    },
    {
      id: 's2-2-4-eksponentiell',
      type: 'definition',
      title: 'Eksponentiell vekst/nedgang',
      content: `$$\\frac{dN}{dt} = kN$$

**Løsning:** $N(t) = N_0 e^{kt}$

- $k > 0$: Eksponentiell vekst
- $k < 0$: Eksponentiell nedgang (forfall)

**Doblingstid:** $T_d = \\frac{\\ln 2}{k}$
**Halveringstid:** $T_{1/2} = \\frac{\\ln 2}{|k|}$`
    },
    {
      id: 's2-2-4-logistisk',
      type: 'definition',
      title: 'Logistisk vekst',
      content: `$$\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)$$

der $K$ er **bæreevnen** (maksimal populasjon).

**Løsning:** $N(t) = \\frac{K}{1 + (\\frac{K-N_0}{N_0})e^{-rt}}$

Veksten starter eksponentielt men avtar når $N$ nærmer seg $K$.`
    },
    {
      id: 's2-2-4-example-1',
      type: 'example',
      title: 'Befolkningsmodell',
      problem: `En by har 100 000 innbyggere og vokser med 2% per år. Modeller befolkningen og finn når den når 150 000.`,
      solution: `**Modell:** $\\frac{dP}{dt} = 0{,}02P$

**Løsning:** $P(t) = 100000 \\cdot e^{0{,}02t}$

**Når $P = 150000$:**
$$150000 = 100000 \\cdot e^{0{,}02t}$$
$$1{,}5 = e^{0{,}02t}$$
$$t = \\frac{\\ln 1{,}5}{0{,}02} \\approx 20{,}3 \\text{ år}$$`
    },
    {
      id: 's2-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kultur med 500 bakterier dobler seg hver time. Sett opp modellen og finn antall etter 5 timer.', solution: '$N\' = kN$ med $k = \\ln 2$. $N(5) = 500 \\cdot 2^5 = 16000$' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et radioaktivt stoff har halveringstid 10 dager. Finn nedbrytningskonstanten $k$.', solution: '$\\frac{1}{2} = e^{-10k} \\Rightarrow k = \\frac{\\ln 2}{10} \\approx 0{,}069$ per dag' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Doblingstiden for en investering er 12 år. Finn årlig rente (kontinuerlig).', solution: '$2 = e^{12r} \\Rightarrow r = \\frac{\\ln 2}{12} \\approx 0{,}058 = 5{,}8\\%$' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kaffekopp (80°C) avkjøles i et rom (20°C). Etter 10 min er den 60°C. Finn temp etter 20 min.', solution: 'Fra Newton: $T = 20 + 60e^{-kt}$. $60 = 20 + 60e^{-10k}$. $k = \\frac{\\ln 1{,}5}{10}$. $T(20) = 20 + 60e^{-20k} \\approx 46{,}7°C$' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En befolkning på 1000 vokser logistisk med $r = 0{,}1$ og $K = 5000$. Finn $N(10)$.', solution: '$N(t) = \\frac{5000}{1 + 4e^{-0{,}1t}}$. $N(10) = \\frac{5000}{1 + 4e^{-1}} \\approx 2036$' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Karbon-14 har halveringstid 5730 år. En prøve har 75% av opprinnelig C-14. Hvor gammel er den?', solution: '$0{,}75 = e^{-kt}$ med $k = \\frac{\\ln 2}{5730}$. $t = -\\frac{\\ln 0{,}75}{k} = \\frac{5730 \\ln(4/3)}{\\ln 2} \\approx 2380$ år' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Ved logistisk vekst, når vokser befolkningen raskest?', solution: 'Maks vekst når $\\frac{dN}{dt}$ er størst. Derivér og sett lik null: ved $N = K/2$.' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et lån på 500000 kr forrentes med 5% årlig, og man betaler ned 30000 kr/år. Sett opp modell og finn når lånet er nedbetalt.', solution: '$\\frac{dL}{dt} = 0{,}05L - 30000$. $L = 600000 - 100000e^{0{,}05t}$. $L = 0$ gir $t = \\frac{\\ln 6}{0{,}05} \\approx 36$ år' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en epidemimodell spres sykdom med rate $\\frac{dI}{dt} = kI(N-I)$ der $N$ er total befolkning. Forklar modellen.', solution: 'Smittespredning er proporsjonal med antall smittede ($I$) ganger antall mottakelige ($N-I$). Logistisk type modell.' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'To populasjoner samhandler: $\\frac{dx}{dt} = 2x - xy$, $\\frac{dy}{dt} = -y + xy$. Hva representerer dette?', solution: 'Rovdyr-byttedyr: $x$ er bytter (vokser alene, reduseres av møter), $y$ er rovdyr (dør alene, vokser av møter). Lotka-Volterra.' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et medisinpreparat elimineres fra kroppen med rate proporsjonal med mengden. Etter 4 timer er halvparten borte. Etter hvor lang tid er 90% borte?', solution: '$T_{1/2} = 4$ timer. $0{,}1 = e^{-kt}$ med $k = \\frac{\\ln 2}{4}$. $t = \\frac{\\ln 10}{k} = \\frac{4\\ln 10}{\\ln 2} \\approx 13{,}3$ timer' }
        ]
      }
    },
    {
      id: 's2-2-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-2-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Sammenlign eksponentiell og logistisk vekst. Når er logistisk modell mer realistisk?', solution: 'Eksponentiell: ubegrenset vekst ($N \\to \\infty$). Logistisk: begrenset av ressurser ($N \\to K$). Logistisk er realistisk når ressurser er begrenset, f.eks. mat, plass, energi.' }
        ]
      }
    }
  ],
  exercises: []
};

// Eksporter alle kapitler som et objekt
export const CHAPTERS_S2: Record<string, TextbookChapter> = {
  's2-1-1': CHAPTER_S2_1_1,
  's2-1-2': CHAPTER_S2_1_2,
  's2-1-3': CHAPTER_S2_1_3,
  's2-1-4': CHAPTER_S2_1_4,
  's2-2-1': CHAPTER_S2_2_1,
  's2-2-2': CHAPTER_S2_2_2,
  's2-2-3': CHAPTER_S2_2_3,
  's2-2-4': CHAPTER_S2_2_4,
};
