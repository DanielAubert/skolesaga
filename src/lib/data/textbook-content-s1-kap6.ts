/**
 * Tekstbok kapitler for S1 - Kapittel 6 (Statistikk) og Kapittel 7 (Regresjon og korrelasjon)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Diskrete sannsynlighetsfordelinger
// ============================================================================

export const CHAPTER_S1_6_1: TextbookChapter = {
  id: 's1-6-1',
  courseId: 's1',
  chapterNumber: '6.1',
  title: 'Diskrete sannsynlighetsfordelinger',
  description: 'Lær om stokastiske variabler, sannsynlighetsfordelinger, forventningsverdi, varians og standardavvik.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne forventningsverdi, varians og standardavvik til sannsynlighetsfordelinger',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-6-1-intro',
      type: 'text',
      content: `## Stokastiske variabler

Når vi kaster en terning, trekker et kort eller måler noe tilfeldig, kan vi beskrive utfallet med en **stokastisk variabel**. En stokastisk variabel er en variabel som kan ta ulike verdier, der hver verdi har en bestemt sannsynlighet.

Vi bruker store bokstaver (som $X$, $Y$, $Z$) for stokastiske variabler og små bokstaver ($x$, $y$, $z$) for de konkrete verdiene de kan ta.

**Eksempler:**
- $X$ = antall øyne ved kast av én terning. Mulige verdier: $1, 2, 3, 4, 5, 6$
- $Y$ = antall kron ved tre myntkast. Mulige verdier: $0, 1, 2, 3$
- $Z$ = antall rette svar på en prøve med 10 spørsmål`,
    },

    {
      id: 's1-6-1-def-stokastisk',
      type: 'definition',
      title: 'Stokastisk variabel',
      content: `En **stokastisk variabel** $X$ er en funksjon som tilordner hvert utfall i et utfallsrom en tallverdi.

En stokastisk variabel er **diskret** dersom den kan ta et endelig antall verdier (eller tellbart mange).`,
    },

    // ========== SANNSYNLIGHETSFORDELING ==========
    {
      id: 's1-6-1-fordeling',
      type: 'text',
      content: `## Sannsynlighetsfordeling

En **sannsynlighetsfordeling** viser alle verdiene en stokastisk variabel kan ta, sammen med sannsynligheten for hver verdi.

For en diskret stokastisk variabel $X$ som kan ta verdiene $x_1, x_2, \\ldots, x_n$, setter vi opp en tabell:

| $x$ | $x_1$ | $x_2$ | $\\cdots$ | $x_n$ |
|---|---|---|---|---|
| $P(X = x)$ | $p_1$ | $p_2$ | $\\cdots$ | $p_n$ |

**Krav til sannsynlighetsfordeling:**
1. $0 \\leq P(X = x_i) \\leq 1$ for alle $i$
2. $\\sum_{i=1}^{n} P(X = x_i) = 1$ (summen av alle sannsynlighetene er 1)`,
    },

    {
      id: 's1-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Sannsynlighetsfordeling for to terninger',
      problem: `La $X$ være summen av øynene ved kast av to terninger. Sett opp sannsynlighetsfordelingen til $X$.`,
      solution: `**Løsning:**

$X$ kan ta verdiene $2, 3, 4, \\ldots, 12$.

Vi teller antall gunstige utfall for hver sum (totalt $6 \\times 6 = 36$ utfall):

| $x$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Antall | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |
| $P(X=x)$ | $\\frac{1}{36}$ | $\\frac{2}{36}$ | $\\frac{3}{36}$ | $\\frac{4}{36}$ | $\\frac{5}{36}$ | $\\frac{6}{36}$ | $\\frac{5}{36}$ | $\\frac{4}{36}$ | $\\frac{3}{36}$ | $\\frac{2}{36}$ | $\\frac{1}{36}$ |

**Kontroll:** $\\frac{1+2+3+4+5+6+5+4+3+2+1}{36} = \\frac{36}{36} = 1$ ✓`,
    },

    // ========== FORVENTNINGSVERDI ==========
    {
      id: 's1-6-1-forventning',
      type: 'text',
      content: `## Forventningsverdi

**Forventningsverdien** (eller **forventet verdi**) til en stokastisk variabel $X$ er det vektede gjennomsnittet av verdiene, der hver verdi vektes med sin sannsynlighet. Forventningsverdien angir hva vi «forventer» å få i gjennomsnitt over mange forsøk.`,
    },

    {
      id: 's1-6-1-def-forventning',
      type: 'definition',
      title: 'Forventningsverdi',
      content: `For en diskret stokastisk variabel $X$ med verdier $x_1, x_2, \\ldots, x_n$ og sannsynligheter $P(X = x_i) = p_i$ er forventningsverdien:

$$E(X) = \\mu = \\sum_{i=1}^{n} x_i \\cdot P(X = x_i) = x_1 p_1 + x_2 p_2 + \\cdots + x_n p_n$$

Forventningsverdien kalles også **$\\mu$** (mu).`,
    },

    {
      id: 's1-6-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Forventningsverdi',
      problem: `En stokastisk variabel $X$ har følgende sannsynlighetsfordeling:

| $x$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $P(X=x)$ | 0,1 | 0,3 | 0,4 | 0,2 |

Finn forventningsverdien $E(X)$.`,
      solution: `**Løsning:**

$$E(X) = 1 \\cdot 0{,}1 + 2 \\cdot 0{,}3 + 3 \\cdot 0{,}4 + 4 \\cdot 0{,}2$$
$$= 0{,}1 + 0{,}6 + 1{,}2 + 0{,}8 = 2{,}7$$

Forventningsverdien er $E(X) = 2{,}7$.

**Tolkning:** Over mange forsøk vil gjennomsnittsverdien nærme seg $2{,}7$.`,
    },

    // ========== OPPGAVER 1-4 ==========
    {
      id: 's1-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En stokastisk variabel $X$ har verdiene $0, 1, 2$ med $P(X=0) = 0{,}2$, $P(X=1) = 0{,}5$ og $P(X=2) = 0{,}3$. Finn $E(X)$.',
            solution: '$E(X) = 0 \\cdot 0{,}2 + 1 \\cdot 0{,}5 + 2 \\cdot 0{,}3 = 0 + 0{,}5 + 0{,}6 = 1{,}1$'
          },
          {
            label: 'b',
            task: 'Kontroller at summen av sannsynlighetene er 1.',
            solution: '$0{,}2 + 0{,}5 + 0{,}3 = 1{,}0$ ✓'
          }
        ],
        solution: 'a) $E(X) = 1{,}1$, b) Summen er 1',
        hints: ['Bruk formelen $E(X) = \\sum x_i \\cdot P(X = x_i)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Ved kast av en rettferdig terning, la $X$ være antall øyne. Finn $E(X)$.`,
        solution: `$E(X) = 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + 3 \\cdot \\frac{1}{6} + 4 \\cdot \\frac{1}{6} + 5 \\cdot \\frac{1}{6} + 6 \\cdot \\frac{1}{6} = \\frac{21}{6} = 3{,}5$`,
        hints: ['Alle utfall har lik sannsynlighet $\\frac{1}{6}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: `Et lotteri har 100 lodd. Hovedgevinsten er 500 kr (1 lodd), det er 4 gevinster på 100 kr og 10 gevinster på 50 kr. Resten er nitenlodd. Hvert lodd koster 20 kr. La $X$ være gevinsten. Finn forventningsverdien $E(X)$ og avgjør om lotteriet er «lønnsomt» for spilleren.`,
        solution: `$P(X = 500) = \\frac{1}{100}$, $P(X = 100) = \\frac{4}{100}$, $P(X = 50) = \\frac{10}{100}$, $P(X = 0) = \\frac{85}{100}$

$E(X) = 500 \\cdot 0{,}01 + 100 \\cdot 0{,}04 + 50 \\cdot 0{,}10 + 0 \\cdot 0{,}85 = 5 + 4 + 5 + 0 = 14$ kr

Forventet gevinst er 14 kr, men loddet koster 20 kr. Forventet netto = $14 - 20 = -6$ kr. Lotteriet er **ikke lønnsomt** for spilleren.`,
        hints: ['Sett opp sannsynlighetsfordelingen først', 'Sammenlign forventet gevinst med prisen per lodd'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `La $X$ være antall kron ved tre myntkast med en rettferdig mynt. Sett opp sannsynlighetsfordelingen til $X$ og finn $E(X)$.`,
        solution: `Mulige verdier: $X = 0, 1, 2, 3$.

$P(X=0) = \\frac{1}{8}$, $P(X=1) = \\frac{3}{8}$, $P(X=2) = \\frac{3}{8}$, $P(X=3) = \\frac{1}{8}$

$E(X) = 0 \\cdot \\frac{1}{8} + 1 \\cdot \\frac{3}{8} + 2 \\cdot \\frac{3}{8} + 3 \\cdot \\frac{1}{8} = \\frac{0 + 3 + 6 + 3}{8} = \\frac{12}{8} = 1{,}5$`,
        hints: ['Det er $2^3 = 8$ like sannsynlige utfall', 'Bruk binomialkoeffisienter $\\binom{3}{k}$ for å telle'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VARIANS OG STANDARDAVVIK ==========
    {
      id: 's1-6-1-varians',
      type: 'text',
      content: `## Varians og standardavvik

Forventningsverdien forteller oss hvor «senteret» av fordelingen ligger. Men vi trenger også et mål på hvor mye verdiene **sprer seg** rundt forventningsverdien.

**Variansen** måler gjennomsnittlig kvadratisk avstand fra forventningsverdien. **Standardavviket** er kvadratroten av variansen og har samme enhet som $X$.`,
    },

    {
      id: 's1-6-1-def-varians',
      type: 'definition',
      title: 'Varians og standardavvik',
      content: `**Variansen** til en diskret stokastisk variabel $X$ er:
$$\\text{Var}(X) = \\sigma^2 = E\\big[(X - \\mu)^2\\big] = \\sum_{i=1}^{n}(x_i - \\mu)^2 \\cdot P(X = x_i)$$

**Alternativ beregningsformel** (ofte enklere å bruke):
$$\\text{Var}(X) = E(X^2) - [E(X)]^2$$

der $E(X^2) = \\sum_{i=1}^{n} x_i^2 \\cdot P(X = x_i)$.

**Standardavviket** er:
$$\\sigma = \\text{SD}(X) = \\sqrt{\\text{Var}(X)}$$`,
    },

    {
      id: 's1-6-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Beregning av varians og standardavvik',
      problem: `Bruk sannsynlighetsfordelingen fra eksempel 2:

| $x$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $P(X=x)$ | 0,1 | 0,3 | 0,4 | 0,2 |

Vi fant $E(X) = 2{,}7$. Finn $\\text{Var}(X)$ og $\\sigma$.`,
      solution: `**Løsning med alternativ formel:**

**Steg 1:** Finn $E(X^2)$:
$$E(X^2) = 1^2 \\cdot 0{,}1 + 2^2 \\cdot 0{,}3 + 3^2 \\cdot 0{,}4 + 4^2 \\cdot 0{,}2$$
$$= 0{,}1 + 1{,}2 + 3{,}6 + 3{,}2 = 8{,}1$$

**Steg 2:** Beregn variansen:
$$\\text{Var}(X) = E(X^2) - [E(X)]^2 = 8{,}1 - 2{,}7^2 = 8{,}1 - 7{,}29 = 0{,}81$$

**Steg 3:** Beregn standardavviket:
$$\\sigma = \\sqrt{0{,}81} = 0{,}9$$

Standardavviket er $\\sigma = 0{,}9$.`,
    },

    {
      id: 's1-6-1-note-tolkning',
      type: 'note',
      title: 'Tolkning av standardavvik',
      content: `**Standardavviket** forteller oss hvor mye verdiene til $X$ typisk avviker fra forventningsverdien.

- **Lite standardavvik** → verdiene ligger tett rundt $\\mu$
- **Stort standardavvik** → verdiene er spredt langt fra $\\mu$

Standardavviket har **samme enhet** som den stokastiske variabelen, noe som gjør det lettere å tolke enn variansen.`,
    },

    // ========== OPPGAVER 5-10 ==========
    {
      id: 's1-6-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn $\\text{Var}(X)$ og $\\sigma$ for en rettferdig terning ($X$ = antall øyne).',
            solution: `$E(X) = 3{,}5$ (fra oppgave 2).

$E(X^2) = 1^2 \\cdot \\frac{1}{6} + 2^2 \\cdot \\frac{1}{6} + 3^2 \\cdot \\frac{1}{6} + 4^2 \\cdot \\frac{1}{6} + 5^2 \\cdot \\frac{1}{6} + 6^2 \\cdot \\frac{1}{6} = \\frac{91}{6} \\approx 15{,}167$

$\\text{Var}(X) = \\frac{91}{6} - 3{,}5^2 = \\frac{91}{6} - \\frac{49}{4} = \\frac{182 - 147}{12} = \\frac{35}{12} \\approx 2{,}917$

$\\sigma = \\sqrt{\\frac{35}{12}} \\approx 1{,}708$`
          },
          {
            label: 'b',
            task: 'Hva betyr dette standardavviket i praksis?',
            solution: 'Verdiene ved terningkast avviker typisk ca. 1,7 fra gjennomsnittet 3,5.'
          }
        ],
        solution: 'a) $\\text{Var}(X) = \\frac{35}{12} \\approx 2{,}92$, $\\sigma \\approx 1{,}71$',
        hints: ['Bruk formelen $\\text{Var}(X) = E(X^2) - [E(X)]^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `En stokastisk variabel $X$ har fordelingen:

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $P(X=x)$ | 0,1 | 0,2 | $k$ | 0,3 |

Finn verdien av $k$, og beregn $E(X)$, $\\text{Var}(X)$ og $\\sigma$.`,
        solution: `$k = 1 - 0{,}1 - 0{,}2 - 0{,}3 = 0{,}4$

$E(X) = 0 \\cdot 0{,}1 + 1 \\cdot 0{,}2 + 2 \\cdot 0{,}4 + 3 \\cdot 0{,}3 = 0 + 0{,}2 + 0{,}8 + 0{,}9 = 1{,}9$

$E(X^2) = 0 \\cdot 0{,}1 + 1 \\cdot 0{,}2 + 4 \\cdot 0{,}4 + 9 \\cdot 0{,}3 = 0 + 0{,}2 + 1{,}6 + 2{,}7 = 4{,}5$

$\\text{Var}(X) = 4{,}5 - 1{,}9^2 = 4{,}5 - 3{,}61 = 0{,}89$

$\\sigma = \\sqrt{0{,}89} \\approx 0{,}943$`,
        hints: ['Summen av alle sannsynlighetene må være 1'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har følgende fordeling av antall feil ($X$) per produksjonsserie:

| $x$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $P(X=x)$ | 0,40 | 0,30 | 0,15 | 0,10 | 0,05 |

Finn forventet antall feil og standardavviket.`,
        solution: `$E(X) = 0 \\cdot 0{,}40 + 1 \\cdot 0{,}30 + 2 \\cdot 0{,}15 + 3 \\cdot 0{,}10 + 4 \\cdot 0{,}05 = 0 + 0{,}30 + 0{,}30 + 0{,}30 + 0{,}20 = 1{,}10$

$E(X^2) = 0 \\cdot 0{,}40 + 1 \\cdot 0{,}30 + 4 \\cdot 0{,}15 + 9 \\cdot 0{,}10 + 16 \\cdot 0{,}05 = 0 + 0{,}30 + 0{,}60 + 0{,}90 + 0{,}80 = 2{,}60$

$\\text{Var}(X) = 2{,}60 - 1{,}10^2 = 2{,}60 - 1{,}21 = 1{,}39$

$\\sigma = \\sqrt{1{,}39} \\approx 1{,}18$

Forventet antall feil er $1{,}10$ med standardavvik ca. $1{,}18$.`,
        hints: ['Sett opp en systematisk tabell med $x_i$, $P(X=x_i)$, $x_i \\cdot P(X=x_i)$ og $x_i^2 \\cdot P(X=x_i)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== UNIFORM FORDELING ==========
    {
      id: 's1-6-1-uniform',
      type: 'text',
      content: `## Uniform fordeling

En spesielt enkel sannsynlighetsfordeling er den **uniforme fordelingen**, der alle verdier har lik sannsynlighet.`,
    },

    {
      id: 's1-6-1-def-uniform',
      type: 'definition',
      title: 'Diskret uniform fordeling',
      content: `Dersom $X$ har en **uniform fordeling** over verdiene $x_1, x_2, \\ldots, x_n$, har vi:

$$P(X = x_i) = \\frac{1}{n} \\quad \\text{for alle } i$$

Forventningsverdi: $E(X) = \\frac{x_1 + x_2 + \\cdots + x_n}{n}$

En rettferdig terning er et eksempel på en uniform fordeling over $\\{1, 2, 3, 4, 5, 6\\}$.`,
    },

    // ========== OPPGAVER 8-16 ==========
    {
      id: 's1-6-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: `$X$ er uniformt fordelt over $\\{1, 2, 3, 4, 5\\}$. Finn $E(X)$ og $\\text{Var}(X)$.`,
        solution: `$P(X = k) = \\frac{1}{5}$ for $k = 1, 2, 3, 4, 5$.

$E(X) = \\frac{1+2+3+4+5}{5} = \\frac{15}{5} = 3$

$E(X^2) = \\frac{1+4+9+16+25}{5} = \\frac{55}{5} = 11$

$\\text{Var}(X) = 11 - 9 = 2$, $\\sigma = \\sqrt{2} \\approx 1{,}41$`,
        hints: ['Alle verdier har lik sannsynlighet $\\frac{1}{5}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'La $X$ ha fordelingen $P(X = -1) = 0{,}25$, $P(X = 0) = 0{,}50$, $P(X = 1) = 0{,}25$. Finn $E(X)$.',
            solution: '$E(X) = (-1)(0{,}25) + 0(0{,}50) + 1(0{,}25) = -0{,}25 + 0 + 0{,}25 = 0$'
          },
          {
            label: 'b',
            task: 'Finn $\\text{Var}(X)$ og $\\sigma$.',
            solution: '$E(X^2) = 1(0{,}25) + 0(0{,}50) + 1(0{,}25) = 0{,}50$. $\\text{Var}(X) = 0{,}50 - 0 = 0{,}50$. $\\sigma = \\sqrt{0{,}50} \\approx 0{,}707$'
          }
        ],
        solution: 'a) $E(X) = 0$, b) $\\text{Var}(X) = 0{,}5$, $\\sigma \\approx 0{,}707$',
        hints: ['Forventningsverdien kan være 0 selv om $X$ ikke alltid er 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: `I et spill koster det 10 kr å delta. Du kaster to mynter. Får du to kron, vinner du 30 kr. Får du én kron, vinner du 10 kr. Får du null kron, vinner du ingenting. La $X$ være nettogevinsten. Finn $E(X)$ og avgjør om spillet er rettferdig.`,
        solution: `Nettogevinst: $X = \\text{gevinst} - 10$

$P(\\text{to kron}) = \\frac{1}{4}$, nettogevinst = $30 - 10 = 20$ kr
$P(\\text{én kron}) = \\frac{2}{4} = \\frac{1}{2}$, nettogevinst = $10 - 10 = 0$ kr
$P(\\text{null kron}) = \\frac{1}{4}$, nettogevinst = $0 - 10 = -10$ kr

$E(X) = 20 \\cdot \\frac{1}{4} + 0 \\cdot \\frac{1}{2} + (-10) \\cdot \\frac{1}{4} = 5 + 0 - 2{,}5 = 2{,}5$ kr

$E(X) = 2{,}5 > 0$, så spillet er **gunstig for spilleren** (ikke rettferdig for arrangøren).`,
        hints: ['Husk å trekke fra innsatsen for å finne nettogevinsten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: `Vis at $\\text{Var}(X) = E(X^2) - [E(X)]^2$ ved å starte med definisjonen $\\text{Var}(X) = E[(X - \\mu)^2]$.`,
        solution: `$\\text{Var}(X) = E[(X - \\mu)^2] = E[X^2 - 2\\mu X + \\mu^2]$

$= E(X^2) - 2\\mu \\cdot E(X) + \\mu^2$

Siden $E(X) = \\mu$:

$= E(X^2) - 2\\mu^2 + \\mu^2 = E(X^2) - \\mu^2 = E(X^2) - [E(X)]^2$`,
        hints: ['Bruk at $(X - \\mu)^2 = X^2 - 2\\mu X + \\mu^2$', 'Forventningsverdien av en konstant er konstanten selv'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En forsikring koster 2000 kr per år. Sannsynligheten for skade er 5 %, og forsikringen dekker 50 000 kr ved skade. La $X$ være forsikringsselskapets fortjeneste per kunde. Finn $E(X)$.',
            solution: `$X = 2000$ (ingen skade) eller $X = 2000 - 50000 = -48000$ (skade).

$P(X = 2000) = 0{,}95$, $P(X = -48000) = 0{,}05$

$E(X) = 2000 \\cdot 0{,}95 + (-48000) \\cdot 0{,}05 = 1900 - 2400 = -500$ kr

Nei, dette stemmer ikke. La oss regne om:
$E(X) = 2000 - 50000 \\cdot 0{,}05 = 2000 - 2500 = -500$ kr

Vent — la oss tenke nøyere. Fortjeneste = premie − utbetaling.
$E(\\text{fortjeneste}) = 2000 - E(\\text{utbetaling}) = 2000 - 50000 \\cdot 0{,}05 = 2000 - 2500 = -500$ kr

Med disse tallene taper selskapet i snitt 500 kr per kunde. I praksis ville premien vært høyere.`
          },
          {
            label: 'b',
            task: 'Hva bør premien minst være for at selskapet ikke taper penger i gjennomsnitt?',
            solution: 'Premie $\\geq E(\\text{utbetaling}) = 50000 \\cdot 0{,}05 = 2500$ kr.'
          }
        ],
        solution: 'a) $E(X) = -500$ kr (tap), b) Premien bør være minst 2500 kr',
        hints: ['Fortjeneste = premie minus forventet utbetaling'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Sammenlign to investeringer:

Investering A: $P(X_A = 100) = 0{,}5$, $P(X_A = 200) = 0{,}5$

Investering B: $P(X_B = 0) = 0{,}5$, $P(X_B = 300) = 0{,}5$

Finn $E(X)$, $\\text{Var}(X)$ og $\\sigma$ for begge og diskuter hvilken som er best.`,
        solution: `**Investering A:**
$E(X_A) = 100 \\cdot 0{,}5 + 200 \\cdot 0{,}5 = 150$
$E(X_A^2) = 10000 \\cdot 0{,}5 + 40000 \\cdot 0{,}5 = 25000$
$\\text{Var}(X_A) = 25000 - 150^2 = 25000 - 22500 = 2500$
$\\sigma_A = 50$

**Investering B:**
$E(X_B) = 0 \\cdot 0{,}5 + 300 \\cdot 0{,}5 = 150$
$E(X_B^2) = 0 \\cdot 0{,}5 + 90000 \\cdot 0{,}5 = 45000$
$\\text{Var}(X_B) = 45000 - 150^2 = 45000 - 22500 = 22500$
$\\sigma_B = 150$

Begge har $E(X) = 150$, men B har mye høyere varians og standardavvik. A er tryggere. Valget avhenger av risikovilje.`,
        hints: ['To investeringer kan ha lik forventningsverdi men ulik risiko (varians)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Vis at dersom $Y = aX + b$, så er $E(Y) = aE(X) + b$.',
            solution: `$E(Y) = E(aX + b) = \\sum (ax_i + b) \\cdot P(X = x_i)$
$= a \\sum x_i P(X = x_i) + b \\sum P(X = x_i) = aE(X) + b \\cdot 1 = aE(X) + b$`
          },
          {
            label: 'b',
            task: 'Vis at $\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)$.',
            solution: `$\\text{Var}(aX+b) = E[(aX+b)^2] - [E(aX+b)]^2$
$= E[a^2X^2 + 2abX + b^2] - [aE(X) + b]^2$
$= a^2E(X^2) + 2abE(X) + b^2 - a^2[E(X)]^2 - 2abE(X) - b^2$
$= a^2[E(X^2) - [E(X)]^2] = a^2 \\text{Var}(X)$`
          }
        ],
        solution: 'a) $E(aX+b) = aE(X) + b$, b) $\\text{Var}(aX+b) = a^2 \\text{Var}(X)$',
        hints: ['Bruk at forventningsverdien er lineær'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En skole har en test med 5 flervalgsspørsmål, hvert med 4 alternativer (ett riktig). En elev gjetter tilfeldig på alle. La $X$ = antall riktige. Sett opp sannsynlighetsfordelingen (bruk binomisk modell), og finn $E(X)$ og $\\sigma$.`,
        solution: `$n = 5$, $p = 0{,}25$. $P(X=k) = \\binom{5}{k} \\cdot 0{,}25^k \\cdot 0{,}75^{5-k}$

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $P(X=k)$ | 0,2373 | 0,3955 | 0,2637 | 0,0879 | 0,0146 | 0,0010 |

$E(X) = np = 5 \\cdot 0{,}25 = 1{,}25$

$\\text{Var}(X) = np(1-p) = 5 \\cdot 0{,}25 \\cdot 0{,}75 = 0{,}9375$

$\\sigma = \\sqrt{0{,}9375} \\approx 0{,}968$

Forventet antall riktige ved ren gjetting er $1{,}25$ av 5.`,
        hints: ['Hvert spørsmål er et uavhengig forsøk med sannsynlighet $p = \\frac{1}{4}$', 'Vi kommer tilbake til binomisk fordeling i neste kapittel'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-1-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En butikk registrerer antall kunder per time ($X$):

| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $P(X=x)$ | 0,05 | 0,10 | 0,25 | 0,30 | 0,20 | 0,10 |

Butikken trenger minst 3 kunder per time for å dekke driftskostnadene. Finn sannsynligheten for at dette oppfylles, og finn $E(X)$ og $\\sigma$.`,
        solution: `$P(X \\geq 3) = P(X=3) + P(X=4) + P(X=5) = 0{,}30 + 0{,}20 + 0{,}10 = 0{,}60$

Det er 60 % sjanse for å dekke kostnadene i en gitt time.

$E(X) = 0(0{,}05) + 1(0{,}10) + 2(0{,}25) + 3(0{,}30) + 4(0{,}20) + 5(0{,}10)$
$= 0 + 0{,}10 + 0{,}50 + 0{,}90 + 0{,}80 + 0{,}50 = 2{,}80$

$E(X^2) = 0(0{,}05) + 1(0{,}10) + 4(0{,}25) + 9(0{,}30) + 16(0{,}20) + 25(0{,}10)$
$= 0 + 0{,}10 + 1{,}00 + 2{,}70 + 3{,}20 + 2{,}50 = 9{,}50$

$\\text{Var}(X) = 9{,}50 - 2{,}80^2 = 9{,}50 - 7{,}84 = 1{,}66$

$\\sigma = \\sqrt{1{,}66} \\approx 1{,}29$`,
        hints: ['$P(X \\geq 3) = 1 - P(X \\leq 2)$ er en alternativ måte å regne på'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 's1-6-1-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Stokastisk variabel:** En variabel $X$ der verdiene bestemmes av tilfeldighet.

**Sannsynlighetsfordeling:** Tabell som viser alle verdier med tilhørende sannsynligheter. Summen av sannsynlighetene er alltid 1.

**Forventningsverdi:** $E(X) = \\sum x_i \\cdot P(X = x_i)$

**Varians:** $\\text{Var}(X) = E(X^2) - [E(X)]^2$

**Standardavvik:** $\\sigma = \\sqrt{\\text{Var}(X)}$

**Regneregler:**
- $E(aX + b) = aE(X) + b$
- $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2: Binomisk fordeling
// ============================================================================

export const CHAPTER_S1_6_2: TextbookChapter = {
  id: 's1-6-2',
  courseId: 's1',
  chapterNumber: '6.2',
  title: 'Binomisk fordeling',
  description: 'Lær om binomiske forsøk, binomisk sannsynlighetsfordeling, forventningsverdi og varians.',
  estimatedMinutes: 55,
  competenceGoals: [
    'modellere situasjonar med binomisk sannsynlighetsfordeling og berekne sannsynlegheiter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-6-2-intro',
      type: 'text',
      content: `## Binomiske forsøk

Mange situasjoner i virkeligheten kan beskrives som gjentatte forsøk der vi er interessert i antall «suksesser». For eksempel:
- Antall seksere ved 10 terningkast
- Antall riktige svar på en prøve med flervalgsspørsmål
- Antall defekte produkter i en produksjonsserie
- Antall pasienter som blir friske av en behandling

Disse situasjonene har noe til felles: Vi gjør et forsøk flere ganger, og hvert forsøk har to mulige utfall.`,
    },

    {
      id: 's1-6-2-def-binomisk',
      type: 'definition',
      title: 'Binomisk forsøk',
      content: `Et **binomisk forsøk** oppfyller disse kravene:
1. Vi utfører $n$ **uavhengige** delforsøk
2. Hvert delforsøk har nøyaktig **to mulige utfall**: suksess (S) eller fiasko (F)
3. Sannsynligheten for suksess, $p$, er **konstant** i hvert delforsøk
4. Vi er interessert i $X$ = **antall suksesser** blant de $n$ forsøkene

Vi skriver $X \\sim \\text{Bin}(n, p)$ og sier at $X$ er **binomisk fordelt** med parametere $n$ og $p$.`,
    },

    {
      id: 's1-6-2-note-uavhengighet',
      type: 'note',
      title: 'Viktig om uavhengighet',
      content: `For at modellen skal gjelde, må forsøkene være **uavhengige**. Det betyr at utfallet av ett forsøk ikke påvirker sannsynligheten i de andre.

**Eksempel:** Hvis du trekker kuler fra en urne **med tilbakelegging**, er trekkene uavhengige. Uten tilbakelegging er de avhengige, og da gjelder ikke binomisk fordeling (da bruker vi hypergeometrisk fordeling).

**Tommelfingerregel:** Trekking uten tilbakelegging kan tilnærmes med binomisk fordeling dersom utvalget er lite sammenlignet med populasjonen (under 10 %).`,
    },

    // ========== BINOMISK SANNSYNLIGHET ==========
    {
      id: 's1-6-2-formel',
      type: 'text',
      content: `## Binomisk sannsynlighet

For å finne sannsynligheten for nøyaktig $k$ suksesser i $n$ forsøk, trenger vi to ting:
1. **Sannsynligheten for én bestemt rekkefølge** med $k$ suksesser: $p^k \\cdot (1-p)^{n-k}$
2. **Antall rekkefølger** med $k$ suksesser blant $n$ forsøk: $\\binom{n}{k}$`,
    },

    {
      id: 's1-6-2-theorem-binomisk',
      type: 'theorem',
      title: 'Binomisk sannsynlighetsformel',
      content: `Dersom $X \\sim \\text{Bin}(n, p)$, er sannsynligheten for nøyaktig $k$ suksesser:

$$P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}, \\quad k = 0, 1, 2, \\ldots, n$$

der $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ er binomialkoeffisienten.`,
    },

    {
      id: 's1-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Terningkast',
      problem: `Du kaster en rettferdig terning 4 ganger. Finn sannsynligheten for å få nøyaktig 2 seksere.`,
      solution: `**Løsning:**

Her er $n = 4$, $p = \\frac{1}{6}$ (sannsynlighet for sekser), $k = 2$.

$$P(X = 2) = \\binom{4}{2} \\cdot \\left(\\frac{1}{6}\\right)^2 \\cdot \\left(\\frac{5}{6}\\right)^2$$

$$= 6 \\cdot \\frac{1}{36} \\cdot \\frac{25}{36} = \\frac{150}{1296} \\approx 0{,}1157$$

Sannsynligheten er ca. $11{,}6\\%$.`,
    },

    {
      id: 's1-6-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Flervalgstest',
      problem: `En flervalgstest har 8 spørsmål, hvert med 4 alternativer (ett riktig). En elev gjetter tilfeldig. Finn sannsynligheten for at eleven får minst 5 riktige.`,
      solution: `**Løsning:**

$X \\sim \\text{Bin}(8, 0{,}25)$

$P(X \\geq 5) = P(X = 5) + P(X = 6) + P(X = 7) + P(X = 8)$

$P(X=5) = \\binom{8}{5} \\cdot 0{,}25^5 \\cdot 0{,}75^3 = 56 \\cdot 0{,}000977 \\cdot 0{,}4219 \\approx 0{,}0231$

$P(X=6) = \\binom{8}{6} \\cdot 0{,}25^6 \\cdot 0{,}75^2 = 28 \\cdot 0{,}000244 \\cdot 0{,}5625 \\approx 0{,}00385$

$P(X=7) = \\binom{8}{7} \\cdot 0{,}25^7 \\cdot 0{,}75^1 = 8 \\cdot 0{,}0000610 \\cdot 0{,}75 \\approx 0{,}000366$

$P(X=8) = \\binom{8}{8} \\cdot 0{,}25^8 \\cdot 0{,}75^0 = 1 \\cdot 0{,}0000153 \\approx 0{,}0000153$

$P(X \\geq 5) \\approx 0{,}0231 + 0{,}00385 + 0{,}000366 + 0{,}0000153 \\approx 0{,}0273$

Sannsynligheten er ca. $2{,}7\\%$. Ren gjetting gir svært sjelden 5 eller flere riktige.`,
    },

    // ========== OPPGAVER 1-5 ==========
    {
      id: 's1-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'En mynt kastes 5 ganger. Finn sannsynligheten for nøyaktig 3 kron.',
            solution: `$X \\sim \\text{Bin}(5, 0{,}5)$

$P(X=3) = \\binom{5}{3} \\cdot 0{,}5^3 \\cdot 0{,}5^2 = 10 \\cdot 0{,}03125 = 0{,}3125$`
          },
          {
            label: 'b',
            task: 'Finn sannsynligheten for minst 4 kron.',
            solution: `$P(X \\geq 4) = P(X=4) + P(X=5) = \\binom{5}{4} \\cdot 0{,}5^5 + \\binom{5}{5} \\cdot 0{,}5^5 = 5 \\cdot 0{,}03125 + 1 \\cdot 0{,}03125 = 0{,}1875$`
          }
        ],
        solution: 'a) $0{,}3125$, b) $0{,}1875$',
        hints: ['$\\binom{5}{3} = \\frac{5!}{3!2!} = 10$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Avgjør om følgende er binomiske forsøk. Begrunn svaret.`,
        subTasks: [
          {
            label: 'a',
            task: 'Antall seksere ved 10 terningkast.',
            solution: 'Ja. $n = 10$, $p = \\frac{1}{6}$, uavhengige kast, to utfall (sekser/ikke sekser).'
          },
          {
            label: 'b',
            task: 'Antall røde kuler ved trekking av 5 kuler uten tilbakelegging fra en urne med 20 kuler.',
            solution: 'Nei, strengt tatt. Uten tilbakelegging endres sannsynligheten for hvert trekk, så forsøkene er ikke uavhengige. (Men kan tilnærmes binomisk hvis populasjonen er stor nok.)'
          },
          {
            label: 'c',
            task: 'Antall gutter blant 6 nyfødte ved et sykehus.',
            solution: 'Ja (tilnærmet). Fødslene er uavhengige og sannsynligheten for gutt er omtrent konstant ($\\approx 0{,}51$).'
          }
        ],
        solution: 'a) Ja, b) Nei (avhengige trekk), c) Ja (tilnærmet)',
        hints: ['Sjekk de fire kravene: uavhengighet, to utfall, konstant $p$, fast $n$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-6-1-ex-3b',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: `$X \\sim \\text{Bin}(6, 0{,}3)$. Beregn $P(X = 0)$, $P(X = 1)$ og $P(X = 2)$.`,
        solution: `$P(X=0) = \\binom{6}{0} \\cdot 0{,}3^0 \\cdot 0{,}7^6 = 1 \\cdot 1 \\cdot 0{,}1176 = 0{,}1176$

$P(X=1) = \\binom{6}{1} \\cdot 0{,}3^1 \\cdot 0{,}7^5 = 6 \\cdot 0{,}3 \\cdot 0{,}1681 = 0{,}3025$

$P(X=2) = \\binom{6}{2} \\cdot 0{,}3^2 \\cdot 0{,}7^4 = 15 \\cdot 0{,}09 \\cdot 0{,}2401 = 0{,}3241$`,
        hints: ['Husk at $\\binom{n}{0} = 1$ og $0{,}3^0 = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `En kvalitetskontroll viser at 5 % av produktene fra en fabrikk er defekte. Det trekkes et utvalg på 10 produkter. Finn sannsynligheten for at det er nøyaktig 1 defekt produkt i utvalget.`,
        solution: `$X \\sim \\text{Bin}(10, 0{,}05)$

$P(X = 1) = \\binom{10}{1} \\cdot 0{,}05^1 \\cdot 0{,}95^9$
$= 10 \\cdot 0{,}05 \\cdot 0{,}6302 = 0{,}3151$

Sannsynligheten er ca. $31{,}5\\%$.`,
        hints: ['$n = 10$, $p = 0{,}05$, $k = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Et legemiddel har 70 % sjanse for å virke. 8 pasienter behandles. Finn sannsynligheten for at legemiddelet virker på minst 6 av dem.`,
        solution: `$X \\sim \\text{Bin}(8, 0{,}7)$

$P(X \\geq 6) = P(X=6) + P(X=7) + P(X=8)$

$P(X=6) = \\binom{8}{6} \\cdot 0{,}7^6 \\cdot 0{,}3^2 = 28 \\cdot 0{,}1176 \\cdot 0{,}09 = 0{,}2965$

$P(X=7) = \\binom{8}{7} \\cdot 0{,}7^7 \\cdot 0{,}3^1 = 8 \\cdot 0{,}0824 \\cdot 0{,}3 = 0{,}1977$

$P(X=8) = \\binom{8}{8} \\cdot 0{,}7^8 \\cdot 0{,}3^0 = 1 \\cdot 0{,}0576 = 0{,}0576$

$P(X \\geq 6) = 0{,}2965 + 0{,}1977 + 0{,}0576 = 0{,}5518$

Sannsynligheten er ca. $55{,}2\\%$.`,
        hints: ['«Minst 6» betyr $P(X \\geq 6)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FORVENTNINGSVERDI OG VARIANS ==========
    {
      id: 's1-6-2-ev-var',
      type: 'text',
      content: `## Forventningsverdi og varians for binomisk fordeling

For binomisk fordeling finnes det enkle formler for forventningsverdi og varians.`,
    },

    {
      id: 's1-6-2-theorem-ev',
      type: 'theorem',
      title: 'Forventningsverdi og varians for binomisk fordeling',
      content: `Dersom $X \\sim \\text{Bin}(n, p)$, er:

$$E(X) = np$$
$$\\text{Var}(X) = np(1-p)$$
$$\\sigma = \\sqrt{np(1-p)}$$

**Eksempel:** For $X \\sim \\text{Bin}(100, 0{,}3)$:
- $E(X) = 100 \\cdot 0{,}3 = 30$
- $\\text{Var}(X) = 100 \\cdot 0{,}3 \\cdot 0{,}7 = 21$
- $\\sigma = \\sqrt{21} \\approx 4{,}58$`,
    },

    {
      id: 's1-6-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Forventningsverdi og standardavvik',
      problem: `En skarpskytter treffer blinken 80 % av gangene. Hun skyter 50 skudd. Hva er forventet antall treff, og hva er standardavviket?`,
      solution: `**Løsning:**

$X \\sim \\text{Bin}(50, 0{,}8)$

$E(X) = np = 50 \\cdot 0{,}8 = 40$

$\\text{Var}(X) = np(1-p) = 50 \\cdot 0{,}8 \\cdot 0{,}2 = 8$

$\\sigma = \\sqrt{8} \\approx 2{,}83$

Vi forventer ca. 40 treff, med et standardavvik på ca. 2,8 treff.`,
    },

    // ========== KUMULATIV SANNSYNLIGHET ==========
    {
      id: 's1-6-2-kumulativ',
      type: 'text',
      content: `## Kumulative sannsynligheter

Ofte er vi interessert i $P(X \\leq k)$ eller $P(X \\geq k)$ i stedet for $P(X = k)$.

**Kumulativ sannsynlighet:**
$$P(X \\leq k) = \\sum_{i=0}^{k} P(X = i) = P(X=0) + P(X=1) + \\cdots + P(X=k)$$

**Nyttige sammenhenger:**
- $P(X \\geq k) = 1 - P(X \\leq k-1)$
- $P(X < k) = P(X \\leq k-1)$
- $P(a \\leq X \\leq b) = P(X \\leq b) - P(X \\leq a-1)$

I praksis bruker vi **kalkulator** eller **tabell** for kumulative binomiske sannsynligheter når $n$ er stor.`,
    },

    // ========== OPPGAVER 6-16 ==========
    {
      id: 's1-6-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: '$X \\sim \\text{Bin}(20, 0{,}4)$. Finn $E(X)$ og $\\sigma$.',
            solution: '$E(X) = 20 \\cdot 0{,}4 = 8$. $\\sigma = \\sqrt{20 \\cdot 0{,}4 \\cdot 0{,}6} = \\sqrt{4{,}8} \\approx 2{,}19$'
          },
          {
            label: 'b',
            task: '$Y \\sim \\text{Bin}(50, 0{,}1)$. Finn $E(Y)$ og $\\sigma$.',
            solution: '$E(Y) = 50 \\cdot 0{,}1 = 5$. $\\sigma = \\sqrt{50 \\cdot 0{,}1 \\cdot 0{,}9} = \\sqrt{4{,}5} \\approx 2{,}12$'
          }
        ],
        solution: 'a) $E(X) = 8$, $\\sigma \\approx 2{,}19$. b) $E(Y) = 5$, $\\sigma \\approx 2{,}12$',
        hints: ['Bruk formlene $E(X) = np$ og $\\sigma = \\sqrt{np(1-p)}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `En vaksine har 90 % effektivitet. 15 personer vaksineres. Finn sannsynligheten for at alle 15 blir beskyttet.`,
        solution: `$X \\sim \\text{Bin}(15, 0{,}9)$

$P(X = 15) = \\binom{15}{15} \\cdot 0{,}9^{15} \\cdot 0{,}1^0 = 0{,}9^{15} \\approx 0{,}2059$

Sannsynligheten er ca. $20{,}6\\%$.`,
        hints: ['$P(X = n) = p^n$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `Sannsynligheten for at en tilfeldig valgt nordmann er venstrehendt er ca. 10 %. I en klasse med 25 elever, finn sannsynligheten for at det er nøyaktig 3 venstrehendte.`,
        solution: `$X \\sim \\text{Bin}(25, 0{,}1)$

$P(X = 3) = \\binom{25}{3} \\cdot 0{,}1^3 \\cdot 0{,}9^{22}$
$= 2300 \\cdot 0{,}001 \\cdot 0{,}0985 = 0{,}2265$

Sannsynligheten er ca. $22{,}7\\%$.`,
        hints: ['$\\binom{25}{3} = \\frac{25!}{3! \\cdot 22!} = 2300$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: '$X \\sim \\text{Bin}(10, 0{,}5)$. Finn $P(X \\leq 3)$.',
            solution: `$P(X \\leq 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3)$
$= \\binom{10}{0}0{,}5^{10} + \\binom{10}{1}0{,}5^{10} + \\binom{10}{2}0{,}5^{10} + \\binom{10}{3}0{,}5^{10}$
$= (1 + 10 + 45 + 120) \\cdot 0{,}5^{10} = 176 \\cdot \\frac{1}{1024} \\approx 0{,}1719$`
          },
          {
            label: 'b',
            task: 'Finn $P(X \\geq 7)$.',
            solution: `$P(X \\geq 7) = P(X=7) + P(X=8) + P(X=9) + P(X=10)$
$= (120 + 45 + 10 + 1) \\cdot 0{,}5^{10} = 176 \\cdot \\frac{1}{1024} \\approx 0{,}1719$

Merk: Ved $p = 0{,}5$ er fordelingen symmetrisk, så $P(X \\geq 7) = P(X \\leq 3)$.`
          }
        ],
        solution: 'a) $\\approx 0{,}172$, b) $\\approx 0{,}172$',
        hints: ['Ved $p = 0{,}5$ er binomisk fordeling symmetrisk rundt $\\frac{n}{2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: `I en spørreundersøkelse svarer 60 % at de støtter et forslag. Du spør 12 tilfeldige personer. Finn sannsynligheten for at færre enn halvparten i utvalget støtter forslaget.`,
        solution: `$X \\sim \\text{Bin}(12, 0{,}6)$. Vi skal finne $P(X < 6) = P(X \\leq 5)$.

$P(X=0) = 0{,}4^{12} \\approx 0{,}0000168$
$P(X=1) = 12 \\cdot 0{,}6 \\cdot 0{,}4^{11} \\approx 0{,}000302$
$P(X=2) = 66 \\cdot 0{,}36 \\cdot 0{,}4^{10} \\approx 0{,}00249$
$P(X=3) = 220 \\cdot 0{,}216 \\cdot 0{,}4^9 \\approx 0{,}01244$
$P(X=4) = 495 \\cdot 0{,}1296 \\cdot 0{,}4^8 \\approx 0{,}04204$
$P(X=5) = 792 \\cdot 0{,}07776 \\cdot 0{,}4^7 \\approx 0{,}1009$

$P(X \\leq 5) \\approx 0{,}158$

Det er ca. 15,8 % sjanse for at færre enn halvparten støtter forslaget.`,
        hints: ['«Færre enn halvparten» betyr $X < 6$, altså $X \\leq 5$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: `Hva er den mest sannsynlige verdien (typetallet) for $X \\sim \\text{Bin}(10, 0{,}3)$? Beregn $P(X = k)$ for $k = 0, 1, 2, 3, 4, 5$ og finn den høyeste.`,
        solution: `$P(X=0) = 0{,}7^{10} \\approx 0{,}0282$
$P(X=1) = 10 \\cdot 0{,}3 \\cdot 0{,}7^9 \\approx 0{,}1211$
$P(X=2) = 45 \\cdot 0{,}09 \\cdot 0{,}7^8 \\approx 0{,}2335$
$P(X=3) = 120 \\cdot 0{,}027 \\cdot 0{,}7^7 \\approx \\mathbf{0{,}2668}$
$P(X=4) = 210 \\cdot 0{,}0081 \\cdot 0{,}7^6 \\approx 0{,}2001$
$P(X=5) = 252 \\cdot 0{,}00243 \\cdot 0{,}7^5 \\approx 0{,}1029$

Den mest sannsynlige verdien er $k = 3$, med $P(X = 3) \\approx 0{,}267$. Dette gir mening: $E(X) = 10 \\cdot 0{,}3 = 3$.`,
        hints: ['Den mest sannsynlige verdien ligger ofte nær $E(X)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et flyselskap vet at 5 % av passasjerene ikke møter opp. Flyet har 200 seter, og de selger 210 billetter. La $X$ = antall som ikke møter opp.`,
        subTasks: [
          {
            label: 'a',
            task: 'Finn $E(X)$ og $\\sigma$.',
            solution: '$X \\sim \\text{Bin}(210, 0{,}05)$. $E(X) = 210 \\cdot 0{,}05 = 10{,}5$. $\\sigma = \\sqrt{210 \\cdot 0{,}05 \\cdot 0{,}95} = \\sqrt{9{,}975} \\approx 3{,}16$.'
          },
          {
            label: 'b',
            task: 'Flyet er overbooket hvis færre enn 10 ikke møter. Finn $P(X < 10)$ med kalkulator.',
            solution: '$P(X < 10) = P(X \\leq 9)$. Med kalkulator: $P(X \\leq 9) \\approx 0{,}393$. Det er altså ca. 39 % sjanse for overbooking.'
          }
        ],
        solution: 'a) $E(X) = 10{,}5$, $\\sigma \\approx 3{,}16$. b) $P(X < 10) \\approx 0{,}39$',
        hints: ['Bruk kalkulator for kumulative binomiske sannsynligheter når $n$ er stor'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En urne inneholder 3 røde og 7 blå kuler. Du trekker 5 kuler med tilbakelegging. Finn sannsynligheten for at du trekker nøyaktig 2 røde kuler, og sammenlign med resultatet uten tilbakelegging (hypergeometrisk).`,
        solution: `**Med tilbakelegging (binomisk):**
$X \\sim \\text{Bin}(5, 0{,}3)$

$P(X=2) = \\binom{5}{2} \\cdot 0{,}3^2 \\cdot 0{,}7^3 = 10 \\cdot 0{,}09 \\cdot 0{,}343 = 0{,}3087$

**Uten tilbakelegging (hypergeometrisk):**
$P(X=2) = \\frac{\\binom{3}{2} \\cdot \\binom{7}{3}}{\\binom{10}{5}} = \\frac{3 \\cdot 35}{252} = \\frac{105}{252} \\approx 0{,}4167$

Sannsynlighetene er forskjellige fordi trekking uten tilbakelegging gir avhengige forsøk.`,
        hints: ['Med tilbakelegging: $p = 0{,}3$ er konstant. Uten tilbakelegging: $p$ endres etter hvert trekk.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En kvalitetskontrollør godkjenner et parti dersom det er høyst 2 defekte i et utvalg på 20. Defektandelen i produksjonen er 8 %. Finn sannsynligheten for at partiet godkjennes.`,
        solution: `$X \\sim \\text{Bin}(20, 0{,}08)$

$P(X \\leq 2) = P(X=0) + P(X=1) + P(X=2)$

$P(X=0) = 0{,}92^{20} \\approx 0{,}1887$
$P(X=1) = 20 \\cdot 0{,}08 \\cdot 0{,}92^{19} \\approx 0{,}3282$
$P(X=2) = 190 \\cdot 0{,}0064 \\cdot 0{,}92^{18} \\approx 0{,}2711$

$P(X \\leq 2) \\approx 0{,}189 + 0{,}328 + 0{,}271 = 0{,}788$

Partiet godkjennes med ca. $78{,}8\\%$ sannsynlighet.`,
        hints: ['«Høyst 2» betyr $P(X \\leq 2)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `I en familie med 4 barn, la $X$ være antall jenter (anta $p = 0{,}5$). Sett opp hele sannsynlighetsfordelingen og tegn et stolpediagram. Beregn $E(X)$ og $\\sigma$ både med formelen og direkte fra fordelingen.`,
        solution: `$X \\sim \\text{Bin}(4, 0{,}5)$

| $k$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $P(X=k)$ | $\\frac{1}{16}$ | $\\frac{4}{16}$ | $\\frac{6}{16}$ | $\\frac{4}{16}$ | $\\frac{1}{16}$ |

**Med formel:** $E(X) = np = 4 \\cdot 0{,}5 = 2$, $\\sigma = \\sqrt{4 \\cdot 0{,}5 \\cdot 0{,}5} = 1$

**Direkte:** $E(X) = 0 \\cdot \\frac{1}{16} + 1 \\cdot \\frac{4}{16} + 2 \\cdot \\frac{6}{16} + 3 \\cdot \\frac{4}{16} + 4 \\cdot \\frac{1}{16} = \\frac{32}{16} = 2$ ✓

$E(X^2) = 0 + \\frac{4}{16} + \\frac{24}{16} + \\frac{36}{16} + \\frac{16}{16} = \\frac{80}{16} = 5$, $\\text{Var}(X) = 5 - 4 = 1$, $\\sigma = 1$ ✓`,
        hints: ['$\\binom{4}{k}$ gir koeffisientene: 1, 4, 6, 4, 1'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-2-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's1-6-2-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et firma tilbyr en garanti: Hvis mer enn 3 av 20 produkter er defekte, erstattes hele partiet (verdi 10 000 kr). Defektandelen er 10 %. Hva er forventet erstatningskostnad per parti?`,
        solution: `$X \\sim \\text{Bin}(20, 0{,}1)$

Firmaet betaler 10 000 kr hvis $X > 3$, altså $X \\geq 4$.

$P(X \\geq 4) = 1 - P(X \\leq 3)$

$P(X=0) = 0{,}9^{20} \\approx 0{,}1216$
$P(X=1) = 20 \\cdot 0{,}1 \\cdot 0{,}9^{19} \\approx 0{,}2702$
$P(X=2) = 190 \\cdot 0{,}01 \\cdot 0{,}9^{18} \\approx 0{,}2852$
$P(X=3) = 1140 \\cdot 0{,}001 \\cdot 0{,}9^{17} \\approx 0{,}1901$

$P(X \\leq 3) \\approx 0{,}867$

$P(X \\geq 4) \\approx 0{,}133$

Forventet kostnad $= 10000 \\cdot 0{,}133 = 1330$ kr per parti.`,
        hints: ['Forventet kostnad = kostnad $\\times$ sannsynlighet for at garantien utløses'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 's1-6-2-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Binomisk forsøk:** $n$ uavhengige forsøk, to utfall, konstant $p$.

**Binomisk sannsynlighet:**
$$P(X = k) = \\binom{n}{k} \\cdot p^k \\cdot (1-p)^{n-k}$$

**Forventningsverdi og varians:**
$$E(X) = np, \\quad \\text{Var}(X) = np(1-p), \\quad \\sigma = \\sqrt{np(1-p)}$$

**Kumulative sannsynligheter:**
- $P(X \\leq k)$ finnes ved å summere, eller bruke kalkulator/tabell
- $P(X \\geq k) = 1 - P(X \\leq k - 1)$

**Husk:** Sjekk alltid at betingelsene for binomisk forsøk er oppfylt før du bruker formelen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3: Normalfordelingen
// ============================================================================

export const CHAPTER_S1_6_3: TextbookChapter = {
  id: 's1-6-3',
  courseId: 's1',
  chapterNumber: '6.3',
  title: 'Normalfordelingen',
  description: 'Lær om normalfordelingen, standardnormalfordelingen, z-score og normalapproksimasjon til binomisk fordeling.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke normalfordelinga til å berekne sannsynlegheiter og tolke resultat',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-6-3-intro',
      type: 'text',
      content: `## Normalfordelingen

Normalfordelingen er den viktigste sannsynlighetsfordelingen i statistikk. Den beskriver mange naturlige fenomener:
- Høyde og vekt i en befolkning
- Måleusikkerhet i eksperimenter
- IQ-score og testresultater
- Antall feil i produksjon (ved store tall)

Normalfordelingen er en **kontinuerlig** fordeling, i motsetning til binomisk fordeling som er diskret. Grafen kalles en **klokkeformet kurve** (Gausskurve).`,
    },

    {
      id: 's1-6-3-def-normal',
      type: 'definition',
      title: 'Normalfordeling',
      content: `En stokastisk variabel $X$ er **normalfordelt** med forventningsverdi $\\mu$ og standardavvik $\\sigma$ dersom sannsynlighetstetthetsfunksjonen er:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\cdot e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$

Vi skriver $X \\sim N(\\mu, \\sigma^2)$.

**Egenskaper:**
- Kurven er symmetrisk om $\\mu$
- Toppunktet er i $x = \\mu$
- Kurven nærmer seg, men berører aldri, $x$-aksen
- Arealet under hele kurven er 1`,
    },

    // ========== 68-95-99.7-REGELEN ==========
    {
      id: 's1-6-3-empirisk',
      type: 'text',
      content: `## 68-95-99,7-regelen

Normalfordelingen har en svært nyttig egenskap som gir oss en tommelfingerregel for hvor stor andel av verdiene som faller innenfor ulike intervaller rundt gjennomsnittet.`,
    },

    {
      id: 's1-6-3-theorem-empirisk',
      type: 'theorem',
      title: '68-95-99,7-regelen (den empiriske regelen)',
      content: `For en normalfordelt variabel $X \\sim N(\\mu, \\sigma^2)$ gjelder:

$$P(\\mu - \\sigma < X < \\mu + \\sigma) \\approx 0{,}683 \\quad (68{,}3\\%)$$
$$P(\\mu - 2\\sigma < X < \\mu + 2\\sigma) \\approx 0{,}954 \\quad (95{,}4\\%)$$
$$P(\\mu - 3\\sigma < X < \\mu + 3\\sigma) \\approx 0{,}997 \\quad (99{,}7\\%)$$

**Tolkning:**
- Ca. 68 % av verdiene ligger innenfor 1 standardavvik fra gjennomsnittet
- Ca. 95 % ligger innenfor 2 standardavvik
- Ca. 99,7 % ligger innenfor 3 standardavvik`,
    },

    {
      id: 's1-6-3-example-1',
      type: 'example',
      title: 'Eksempel 1: 68-95-99,7-regelen',
      problem: `Høyden til voksne menn i Norge er tilnærmet normalfordelt med $\\mu = 180$ cm og $\\sigma = 7$ cm. Bruk 68-95-99,7-regelen til å finne omtrentlig andel menn med høyde mellom 166 cm og 194 cm.`,
      solution: `**Løsning:**

$166 = 180 - 2 \\cdot 7 = \\mu - 2\\sigma$
$194 = 180 + 2 \\cdot 7 = \\mu + 2\\sigma$

Intervallet $[166, 194]$ er $\\mu \\pm 2\\sigma$.

Ifølge 68-95-99,7-regelen ligger ca. **95,4 %** av verdiene i dette intervallet.

Omtrent 95 % av norske menn har altså høyde mellom 166 cm og 194 cm.`,
    },

    // ========== OPPGAVER 1-4 ==========
    {
      id: 's1-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Vekten til nyfødte er normalfordelt med $\\mu = 3{,}5$ kg og $\\sigma = 0{,}5$ kg. Bruk 68-95-99,7-regelen til å finne andelen nyfødte med vekt mellom 3,0 kg og 4,0 kg.`,
        solution: `$3{,}0 = 3{,}5 - 1 \\cdot 0{,}5 = \\mu - \\sigma$ og $4{,}0 = 3{,}5 + 1 \\cdot 0{,}5 = \\mu + \\sigma$.

Intervallet er $\\mu \\pm \\sigma$, så ca. **68 %** av nyfødte har vekt i dette intervallet.`,
        hints: ['Finn hvor mange standardavvik grensene er fra gjennomsnittet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Med $\\mu = 180$ og $\\sigma = 7$, bruk 68-95-99,7-regelen til å finne andelen menn som er over 194 cm.',
            solution: '194 = $\\mu + 2\\sigma$. Ca. 95,4 % er innenfor $\\pm 2\\sigma$, altså ca. 4,6 % utenfor. Siden fordelingen er symmetrisk, er ca. $\\frac{4{,}6}{2} = 2{,}3\\%$ over 194 cm.'
          },
          {
            label: 'b',
            task: 'Finn andelen menn under 173 cm.',
            solution: '173 = $180 - 7 = \\mu - \\sigma$. Ca. 68 % er innenfor $\\pm \\sigma$, altså ca. 32 % utenfor. Halvparten er under: ca. $\\frac{32}{2} = 16\\%$.'
          }
        ],
        solution: 'a) ca. 2,3 %, b) ca. 16 %',
        hints: ['Bruk symmetrien: andelen over $\\mu + k\\sigma$ er lik andelen under $\\mu - k\\sigma$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: `En maskin fyller flasker med brus. Volumet er normalfordelt med $\\mu = 500$ ml og $\\sigma = 3$ ml. Omtrent hvor stor andel av flaskene har mellom 494 og 506 ml?`,
        solution: `$494 = 500 - 2 \\cdot 3 = \\mu - 2\\sigma$ og $506 = 500 + 2 \\cdot 3 = \\mu + 2\\sigma$.

Intervallet er $\\mu \\pm 2\\sigma$, så ca. **95 %** av flaskene har mellom 494 og 506 ml.`,
        hints: ['Beregn hvor mange standardavvik grensene er fra $\\mu$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `IQ-score er normalfordelt med $\\mu = 100$ og $\\sigma = 15$. Finn omtrentlig andel av befolkningen med IQ over 130.`,
        solution: `$130 = 100 + 2 \\cdot 15 = \\mu + 2\\sigma$.

Ca. 95,4 % ligger innenfor $\\mu \\pm 2\\sigma$, altså ca. 4,6 % utenfor. Halvparten er over: ca. **2,3 %** har IQ over 130.`,
        hints: ['$130 = \\mu + 2\\sigma$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== Z-SCORE ==========
    {
      id: 's1-6-3-zscore',
      type: 'text',
      content: `## Standardnormalfordeling og z-score

For å beregne sannsynligheter nøyaktig (ikke bare med tommelfingerregelen), standardiserer vi til **standardnormalfordelingen** $Z \\sim N(0, 1)$.`,
    },

    {
      id: 's1-6-3-def-zscore',
      type: 'definition',
      title: 'Z-score (standardisering)',
      content: `Dersom $X \\sim N(\\mu, \\sigma^2)$, kan vi **standardisere** til $Z \\sim N(0, 1)$ ved:

$$Z = \\frac{X - \\mu}{\\sigma}$$

$Z$-verdien kalles **z-score** og angir hvor mange standardavvik $X$ er fra gjennomsnittet.

- $z > 0$: $X$ er over gjennomsnittet
- $z < 0$: $X$ er under gjennomsnittet
- $z = 0$: $X$ er lik gjennomsnittet

$$P(X \\leq x) = P\\left(Z \\leq \\frac{x - \\mu}{\\sigma}\\right)$$`,
    },

    {
      id: 's1-6-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Beregning med z-score',
      problem: `Høyden til voksne menn er $X \\sim N(180, 7^2)$. Finn sannsynligheten for at en tilfeldig mann er kortere enn 172 cm.`,
      solution: `**Løsning:**

**Steg 1:** Beregn z-score:
$$z = \\frac{172 - 180}{7} = \\frac{-8}{7} \\approx -1{,}14$$

**Steg 2:** Slå opp i normalfordelingstabell (eller bruk kalkulator):
$$P(X < 172) = P(Z < -1{,}14) \\approx 0{,}1271$$

Ca. **12,7 %** av menn er kortere enn 172 cm.`,
    },

    {
      id: 's1-6-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Sannsynlighet for et intervall',
      problem: `$X \\sim N(180, 7^2)$. Finn $P(175 < X < 190)$.`,
      solution: `**Løsning:**

**Steg 1:** Standardiser begge grensene:
$$z_1 = \\frac{175 - 180}{7} = -0{,}714 \\quad \\text{og} \\quad z_2 = \\frac{190 - 180}{7} = 1{,}429$$

**Steg 2:** Bruk tabell/kalkulator:
$$P(175 < X < 190) = P(-0{,}714 < Z < 1{,}429)$$
$$= P(Z < 1{,}429) - P(Z < -0{,}714)$$
$$\\approx 0{,}9234 - 0{,}2376 = 0{,}6858$$

Ca. **68,6 %** av menn har høyde mellom 175 og 190 cm.`,
    },

    // ========== OPPGAVER 5-10 ==========
    {
      id: 's1-6-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: '$X \\sim N(50, 8^2)$. Finn $P(X < 62)$.',
            solution: '$z = \\frac{62 - 50}{8} = 1{,}5$. $P(Z < 1{,}5) \\approx 0{,}9332$'
          },
          {
            label: 'b',
            task: 'Finn $P(X > 42)$.',
            solution: '$z = \\frac{42 - 50}{8} = -1{,}0$. $P(X > 42) = 1 - P(Z < -1{,}0) = 1 - 0{,}1587 = 0{,}8413$'
          },
          {
            label: 'c',
            task: 'Finn $P(46 < X < 58)$.',
            solution: '$z_1 = \\frac{46-50}{8} = -0{,}5$, $z_2 = \\frac{58-50}{8} = 1{,}0$. $P(-0{,}5 < Z < 1{,}0) = 0{,}8413 - 0{,}3085 = 0{,}5328$'
          }
        ],
        solution: 'a) $0{,}933$, b) $0{,}841$, c) $0{,}533$',
        hints: ['Standardiser med $z = \\frac{x - \\mu}{\\sigma}$ og bruk tabell'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Levetiden til en type lyspære er normalfordelt med $\\mu = 1200$ timer og $\\sigma = 100$ timer. Finn sannsynligheten for at en tilfeldig lyspære varer lenger enn 1350 timer.`,
        solution: `$z = \\frac{1350 - 1200}{100} = 1{,}5$

$P(X > 1350) = 1 - P(Z < 1{,}5) = 1 - 0{,}9332 = 0{,}0668$

Ca. **6,7 %** av lyspærene varer lenger enn 1350 timer.`,
        hints: ['$P(X > x) = 1 - P(X < x)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `En eksamen har normalfordelte resultater med $\\mu = 52$ poeng og $\\sigma = 12$ poeng. Det kreves 40 poeng for å bestå. Finn andelen som stryker.`,
        solution: `$z = \\frac{40 - 52}{12} = -1{,}0$

$P(X < 40) = P(Z < -1{,}0) \\approx 0{,}1587$

Ca. **15,9 %** stryker.`,
        hints: ['De som stryker har $X < 40$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `$X \\sim N(100, 15^2)$. Finn verdien $x_0$ slik at $P(X < x_0) = 0{,}90$.`,
        solution: `Vi finner $z$-verdien der $P(Z < z) = 0{,}90$. Fra tabell: $z \\approx 1{,}282$.

$x_0 = \\mu + z \\cdot \\sigma = 100 + 1{,}282 \\cdot 15 = 100 + 19{,}23 = 119{,}2$

$P(X < 119{,}2) = 0{,}90$.`,
        hints: ['Finn z-verdien først, deretter regn tilbake til $x$: $x = \\mu + z\\sigma$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Anna fikk 78 poeng på en norskprøve ($\\mu = 65$, $\\sigma = 10$) og 82 poeng på en matteprøve ($\\mu = 70$, $\\sigma = 8$). På hvilken prøve presterte hun relativt sett best?',
            solution: `Norsk: $z = \\frac{78 - 65}{10} = 1{,}3$
Matte: $z = \\frac{82 - 70}{8} = 1{,}5$

Anna presterte relativt best i matte, med z-score 1,5 mot 1,3 i norsk.`
          },
          {
            label: 'b',
            task: 'Hvilken prosentandel av elevene fikk dårligere enn Anna i hvert fag?',
            solution: 'Norsk: $P(Z < 1{,}3) \\approx 0{,}9032$, altså ca. 90 %. Matte: $P(Z < 1{,}5) \\approx 0{,}9332$, altså ca. 93 %.'
          }
        ],
        solution: 'a) Matte (z = 1,5 > 1,3), b) Norsk: ca. 90 %, Matte: ca. 93 %',
        hints: ['Z-score gjør det mulig å sammenligne resultater fra ulike fordelinger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: `En maskin produserer skruer med lengde $X \\sim N(50{,}0\\text{ mm}, 0{,}2^2)$. Skruer utenfor intervallet $[49{,}5, 50{,}5]$ mm kasseres. Finn andelen som kasseres.`,
        solution: `$z_1 = \\frac{49{,}5 - 50{,}0}{0{,}2} = -2{,}5$ og $z_2 = \\frac{50{,}5 - 50{,}0}{0{,}2} = 2{,}5$

$P(49{,}5 < X < 50{,}5) = P(-2{,}5 < Z < 2{,}5) = 0{,}9938 - 0{,}0062 = 0{,}9876$

Andel som kasseres: $1 - 0{,}9876 = 0{,}0124 \\approx 1{,}24\\%$.`,
        hints: ['Skruer som kasseres er utenfor intervallet, altså $P(X < 49{,}5) + P(X > 50{,}5)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NORMALAPPROKSIMASJON ==========
    {
      id: 's1-6-3-approks',
      type: 'text',
      content: `## Normalapproksimasjon til binomisk fordeling

Når $n$ er stor, er binomisk fordeling vanskelig å beregne direkte. Heldigvis kan vi bruke normalfordelingen som en tilnærming.`,
    },

    {
      id: 's1-6-3-theorem-approks',
      type: 'theorem',
      title: 'Normalapproksimasjon til binomisk fordeling',
      content: `Dersom $X \\sim \\text{Bin}(n, p)$ og $n$ er tilstrekkelig stor, kan $X$ tilnærmes med:

$$X \\approx N(np, np(1-p))$$

**Tommelfingerregel:** Approksimasjonen er god når:
$$np \\geq 5 \\quad \\text{og} \\quad n(1-p) \\geq 5$$

**Kontinuitetskorreksjon:** Siden vi tilnærmer en diskret fordeling med en kontinuerlig, bør vi bruke korreksjon:
$$P(X \\leq k) \\approx P\\left(Z \\leq \\frac{k + 0{,}5 - np}{\\sqrt{np(1-p)}}\\right)$$`,
    },

    {
      id: 's1-6-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Normalapproksimasjon',
      problem: `$X \\sim \\text{Bin}(100, 0{,}4)$. Finn $P(X \\leq 45)$ ved hjelp av normalapproksimasjon.`,
      solution: `**Løsning:**

**Steg 1:** Beregn parametere:
$\\mu = np = 100 \\cdot 0{,}4 = 40$
$\\sigma = \\sqrt{np(1-p)} = \\sqrt{100 \\cdot 0{,}4 \\cdot 0{,}6} = \\sqrt{24} \\approx 4{,}899$

Sjekk: $np = 40 \\geq 5$ ✓ og $n(1-p) = 60 \\geq 5$ ✓

**Steg 2:** Standardiser med kontinuitetskorreksjon:
$$z = \\frac{45{,}5 - 40}{4{,}899} = \\frac{5{,}5}{4{,}899} \\approx 1{,}123$$

**Steg 3:** Slå opp:
$$P(X \\leq 45) \\approx P(Z \\leq 1{,}123) \\approx 0{,}8693$$`,
    },

    // ========== OPPGAVER 11-18 ==========
    {
      id: 's1-6-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: `$X \\sim \\text{Bin}(200, 0{,}3)$. Bruk normalapproksimasjon til å finne $P(X \\geq 70)$.`,
        solution: `$\\mu = 200 \\cdot 0{,}3 = 60$, $\\sigma = \\sqrt{200 \\cdot 0{,}3 \\cdot 0{,}7} = \\sqrt{42} \\approx 6{,}48$

Med kontinuitetskorreksjon: $P(X \\geq 70) \\approx P(Z \\geq \\frac{69{,}5 - 60}{6{,}48}) = P(Z \\geq 1{,}47) = 1 - 0{,}9292 = 0{,}0708$

Ca. 7,1 % sjanse.`,
        hints: ['$P(X \\geq 70)$ med korreksjon: bruk $69{,}5$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: `Et parti med 60 % støtte i befolkningen. I en undersøkelse med 150 personer, hva er sannsynligheten for at mellom 80 og 100 støtter partiet?`,
        solution: `$X \\sim \\text{Bin}(150, 0{,}6)$. $\\mu = 90$, $\\sigma = \\sqrt{150 \\cdot 0{,}6 \\cdot 0{,}4} = \\sqrt{36} = 6$

$P(80 \\leq X \\leq 100) \\approx P\\left(\\frac{79{,}5 - 90}{6} \\leq Z \\leq \\frac{100{,}5 - 90}{6}\\right)$
$= P(-1{,}75 \\leq Z \\leq 1{,}75) = 0{,}9599 - 0{,}0401 = 0{,}9198$

Ca. 92 % sannsynlighet.`,
        hints: ['Bruk kontinuitetskorreksjon: $P(80 \\leq X \\leq 100) \\approx P(79{,}5 < Y < 100{,}5)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: `En fabrikk har 2 % feilrate. I et parti på 500 enheter, finn sannsynligheten for at det er mer enn 15 defekte.`,
        solution: `$X \\sim \\text{Bin}(500, 0{,}02)$. $\\mu = 10$, $\\sigma = \\sqrt{500 \\cdot 0{,}02 \\cdot 0{,}98} = \\sqrt{9{,}8} \\approx 3{,}13$

$P(X > 15) = P(X \\geq 16) \\approx P\\left(Z \\geq \\frac{15{,}5 - 10}{3{,}13}\\right) = P(Z \\geq 1{,}76) = 1 - 0{,}9608 = 0{,}0392$

Ca. 3,9 % sjanse for mer enn 15 defekte.`,
        hints: ['Sjekk at $np = 10 \\geq 5$ og $n(1-p) = 490 \\geq 5$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor 68-95-99,7-regelen er et spesialtilfelle av z-score-beregning.',
            solution: `$P(\\mu - \\sigma < X < \\mu + \\sigma) = P(-1 < Z < 1) = 0{,}8413 - 0{,}1587 = 0{,}6826 \\approx 68\\%$

$P(\\mu - 2\\sigma < X < \\mu + 2\\sigma) = P(-2 < Z < 2) = 0{,}9772 - 0{,}0228 = 0{,}9544 \\approx 95\\%$

$P(\\mu - 3\\sigma < X < \\mu + 3\\sigma) = P(-3 < Z < 3) = 0{,}9987 - 0{,}0013 = 0{,}9974 \\approx 99{,}7\\%$

Regelen følger direkte av normalfordelingstabellen.`
          },
          {
            label: 'b',
            task: 'Finn den eksakte sannsynligheten for å være innenfor 1,5 standardavvik fra gjennomsnittet.',
            solution: '$P(-1{,}5 < Z < 1{,}5) = 0{,}9332 - 0{,}0668 = 0{,}8664 \\approx 86{,}6\\%$'
          }
        ],
        solution: 'a) Regelen følger av $P(-k < Z < k)$ for $k = 1, 2, 3$. b) ca. 86,6 %',
        hints: ['68-95-99,7 svarer til $z = \\pm 1, \\pm 2, \\pm 3$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Temperaturen en gitt dag er normalfordelt med $\\mu = 15°C$ og $\\sigma = 4°C$.`,
        subTasks: [
          {
            label: 'a',
            task: 'Finn sannsynligheten for at temperaturen er over 20°C.',
            solution: '$z = \\frac{20 - 15}{4} = 1{,}25$. $P(X > 20) = 1 - P(Z < 1{,}25) = 1 - 0{,}8944 = 0{,}1056 \\approx 10{,}6\\%$'
          },
          {
            label: 'b',
            task: 'Finn temperaturen som bare 5 % av dagene overstiger.',
            solution: '$P(Z > z) = 0{,}05$ gir $z \\approx 1{,}645$. $x = 15 + 1{,}645 \\cdot 4 = 15 + 6{,}58 = 21{,}6°C$'
          },
          {
            label: 'c',
            task: 'Finn det symmetriske intervallet rundt $\\mu$ som inneholder 90 % av dagene.',
            solution: '$P(-z < Z < z) = 0{,}90$ gir $z \\approx 1{,}645$. Intervallet er $[15 - 1{,}645 \\cdot 4, 15 + 1{,}645 \\cdot 4] = [8{,}4, 21{,}6]°C$.'
          }
        ],
        solution: 'a) ca. 10,6 %, b) 21,6°C, c) [8,4, 21,6]°C',
        hints: ['For b og c, bruk «invers» normalfordeling: finn $z$ fra sannsynligheten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En mynt kastes 400 ganger. Bruk normalapproksimasjon til å finne sannsynligheten for mellom 190 og 210 kron (inkludert).`,
        solution: `$X \\sim \\text{Bin}(400, 0{,}5)$. $\\mu = 200$, $\\sigma = \\sqrt{400 \\cdot 0{,}25} = 10$

Med korreksjon: $P(190 \\leq X \\leq 210) \\approx P\\left(\\frac{189{,}5 - 200}{10} \\leq Z \\leq \\frac{210{,}5 - 200}{10}\\right)$
$= P(-1{,}05 \\leq Z \\leq 1{,}05) = 0{,}8531 - 0{,}1469 = 0{,}7062$

Ca. 70,6 % sannsynlighet.`,
        hints: ['$\\sigma = \\sqrt{np(1-p)} = \\sqrt{100} = 10$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-17',
        number: '17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `I en by bor det 10 000 personer. 30 % er under 18 år. I et tilfeldig utvalg på 300 personer, finn sannsynligheten for at mellom 80 og 100 er under 18 år.`,
        solution: `$X \\sim \\text{Bin}(300, 0{,}3)$ (utvalget er lite nok i forhold til populasjonen).

$\\mu = 90$, $\\sigma = \\sqrt{300 \\cdot 0{,}3 \\cdot 0{,}7} = \\sqrt{63} \\approx 7{,}94$

$P(80 \\leq X \\leq 100) \\approx P\\left(\\frac{79{,}5 - 90}{7{,}94} \\leq Z \\leq \\frac{100{,}5 - 90}{7{,}94}\\right)$
$= P(-1{,}32 \\leq Z \\leq 1{,}32) = 0{,}9066 - 0{,}0934 = 0{,}8132$

Ca. 81 % sannsynlighet.`,
        hints: ['Utvalget (300) er under 10 % av populasjonen (10 000), så binomisk modell er rimelig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-6-3-ex-block-18',
      type: 'exercise',
      exercise: {
        id: 's1-6-3-ex-18',
        number: '18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Reaksjonstiden for en sjåfør er normalfordelt med $\\mu = 0{,}8$ s og $\\sigma = 0{,}15$ s. En sjåfør anses som «treg» dersom reaksjonstiden er over 1,1 s.`,
        subTasks: [
          {
            label: 'a',
            task: 'Finn andelen sjåfører som anses som trege.',
            solution: '$z = \\frac{1{,}1 - 0{,}8}{0{,}15} = 2{,}0$. $P(X > 1{,}1) = 1 - P(Z < 2{,}0) = 1 - 0{,}9772 = 0{,}0228 \\approx 2{,}3\\%$'
          },
          {
            label: 'b',
            task: 'Finn grensen for de raskeste 10 % av sjåførene.',
            solution: '$P(Z < z) = 0{,}10$ gir $z \\approx -1{,}282$. $x = 0{,}8 + (-1{,}282) \\cdot 0{,}15 = 0{,}8 - 0{,}192 = 0{,}608$ s.'
          },
          {
            label: 'c',
            task: 'Blant 500 sjåfører, hvor mange forventes å ha reaksjonstid mellom 0,6 s og 1,0 s?',
            solution: `$z_1 = \\frac{0{,}6 - 0{,}8}{0{,}15} = -1{,}33$, $z_2 = \\frac{1{,}0 - 0{,}8}{0{,}15} = 1{,}33$

$P(0{,}6 < X < 1{,}0) = P(-1{,}33 < Z < 1{,}33) = 0{,}9082 - 0{,}0918 = 0{,}8164$

Antall: $500 \\cdot 0{,}8164 \\approx 408$ sjåfører.`
          }
        ],
        solution: 'a) ca. 2,3 %, b) 0,608 s, c) ca. 408 sjåfører',
        hints: ['For c, multipliser sannsynligheten med antall personer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 's1-6-3-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Normalfordeling** $N(\\mu, \\sigma^2)$: Klokkeformet, symmetrisk kurve.

**68-95-99,7-regelen:** Ca. 68 %, 95 % og 99,7 % av verdiene innenfor 1, 2 og 3 standardavvik.

**Z-score:** $z = \\frac{x - \\mu}{\\sigma}$ standardiserer til $N(0,1)$.

**Normalapproksimasjon:** $\\text{Bin}(n,p) \\approx N(np, np(1-p))$ når $np \\geq 5$ og $n(1-p) \\geq 5$.

**Kontinuitetskorreksjon:** Legg til/trekk fra 0,5 ved tilnærming av diskret med kontinuerlig fordeling.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.1: Lineær regresjon
// ============================================================================

export const CHAPTER_S1_7_1: TextbookChapter = {
  id: 's1-7-1',
  courseId: 's1',
  chapterNumber: '7.1',
  title: 'Lineær regresjon',
  description: 'Lær om spredningsplott, minste kvadraters metode, regresjonslinje, residualer og forklart varians.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjere greie for og bruke lineær regresjon og korrelasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-7-1-intro',
      type: 'text',
      content: `## Spredningsplott og sammenheng mellom variabler

I statistikk er vi ofte interessert i å undersøke om det er en **sammenheng** mellom to variabler. For eksempel:
- Er det sammenheng mellom studietimer og eksamensresultat?
- Henger mengden gjødsel sammen med avling?
- Påvirker temperatur salget av is?

Vi starter med å lage et **spredningsplott** (eller punktdiagram), der vi plotter datapunktene $(x_i, y_i)$ i et koordinatsystem. Variabelen $x$ kalles **forklaringsvariabelen** (uavhengig variabel) og $y$ kalles **responsvariabelen** (avhengig variabel).`,
    },

    {
      id: 's1-7-1-def-spredning',
      type: 'definition',
      title: 'Spredningsplott',
      content: `Et **spredningsplott** viser datapunktene $(x_1, y_1), (x_2, y_2), \\ldots, (x_n, y_n)$ i et koordinatsystem.

Fra spredningsplottet kan vi vurdere:
- **Retning:** Positiv (oppover), negativ (nedover) eller ingen sammenheng
- **Form:** Lineær, krummet eller ingen klar form
- **Styrke:** Hvor tett punktene ligger langs en linje/kurve
- **Uteliggere:** Punkter som skiller seg markant fra resten`,
    },

    // ========== MINSTE KVADRATERS METODE ==========
    {
      id: 's1-7-1-mkm',
      type: 'text',
      content: `## Minste kvadraters metode

Dersom spredningsplottet antyder en **lineær sammenheng**, ønsker vi å finne den rette linjen som best tilpasser dataene. Denne linjen kalles **regresjonslinjen**.

**Idé:** Vi vil minimere summen av de kvadrerte avstandene mellom de observerte $y$-verdiene og de tilsvarende verdiene på linjen. Disse avstandene kalles **residualer**.`,
    },

    {
      id: 's1-7-1-def-regresjon',
      type: 'definition',
      title: 'Regresjonslinjen',
      content: `**Regresjonslinjen** er den linjen $\\hat{y} = ax + b$ som minimerer summen av kvadrerte residualer:

$$S = \\sum_{i=1}^{n}(y_i - \\hat{y}_i)^2 = \\sum_{i=1}^{n}(y_i - ax_i - b)^2$$

Koeffisientene er:
$$a = \\frac{n\\sum x_i y_i - \\sum x_i \\sum y_i}{n\\sum x_i^2 - (\\sum x_i)^2} = \\frac{S_{xy}}{S_{xx}}$$

$$b = \\bar{y} - a\\bar{x}$$

der $\\bar{x} = \\frac{1}{n}\\sum x_i$ og $\\bar{y} = \\frac{1}{n}\\sum y_i$ er gjennomsnittene.`,
    },

    {
      id: 's1-7-1-note-mkm',
      type: 'note',
      title: 'Viktig egenskap',
      content: `Regresjonslinjen går alltid gjennom punktet $(\\bar{x}, \\bar{y})$, altså gjennom gjennomsnittet av begge variablene.

I praksis bruker vi **kalkulator** eller **regneark** til å finne $a$ og $b$, men det er viktig å forstå hva formlene betyr.`,
    },

    {
      id: 's1-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Finne regresjonslinjen',
      problem: `En lærer registrerer antall studietimer ($x$) og poeng på prøve ($y$) for 6 elever:

| Elev | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| $x$ (timer) | 2 | 3 | 5 | 6 | 8 | 10 |
| $y$ (poeng) | 45 | 55 | 60 | 72 | 78 | 90 |

Finn regresjonslinjen $\\hat{y} = ax + b$.`,
      solution: `**Løsning:**

$n = 6$, $\\sum x_i = 34$, $\\sum y_i = 400$

$\\bar{x} = \\frac{34}{6} \\approx 5{,}667$, $\\bar{y} = \\frac{400}{6} \\approx 66{,}667$

$\\sum x_i^2 = 4+9+25+36+64+100 = 238$

$\\sum x_i y_i = 90+165+300+432+624+900 = 2511$

$$a = \\frac{6 \\cdot 2511 - 34 \\cdot 400}{6 \\cdot 238 - 34^2} = \\frac{15066 - 13600}{1428 - 1156} = \\frac{1466}{272} \\approx 5{,}39$$

$$b = 66{,}667 - 5{,}39 \\cdot 5{,}667 = 66{,}667 - 30{,}55 \\approx 36{,}12$$

**Regresjonslinje:** $\\hat{y} = 5{,}39x + 36{,}12$

**Tolkning:** For hver ekstra studietime øker poengsummen i gjennomsnitt med ca. 5,4 poeng. En elev som ikke studerer, forventes å få ca. 36 poeng.`,
    },

    // ========== OPPGAVER 1-4 ==========
    {
      id: 's1-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Gitt datapunktene $(1, 3)$, $(2, 5)$, $(3, 7)$, $(4, 9)$, $(5, 11)$. Finn regresjonslinjen $\\hat{y} = ax + b$.`,
        solution: `$n = 5$, $\\bar{x} = 3$, $\\bar{y} = 7$

$\\sum x_i^2 = 1+4+9+16+25 = 55$, $\\sum x_i y_i = 3+10+21+36+55 = 125$

$a = \\frac{5 \\cdot 125 - 15 \\cdot 35}{5 \\cdot 55 - 225} = \\frac{625 - 525}{275 - 225} = \\frac{100}{50} = 2$

$b = 7 - 2 \\cdot 3 = 1$

$\\hat{y} = 2x + 1$

(Punktene ligger eksakt på en linje.)`,
        hints: ['Sett opp en tabell med $x_i$, $y_i$, $x_i^2$, $x_i y_i$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva forteller stigningstallet $a$ i en regresjonslinje?',
            solution: '$a$ angir forventet endring i $y$ når $x$ øker med 1 enhet.'
          },
          {
            label: 'b',
            task: 'Hva forteller konstantleddet $b$?',
            solution: '$b$ er den predikerte verdien av $y$ når $x = 0$. (Ikke alltid meningsfylt å tolke.)'
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig at regresjonslinjen går gjennom $(\\bar{x}, \\bar{y})$?',
            solution: 'Det betyr at modellen treffer «riktig i gjennomsnitt»: for gjennomsnittlig $x$-verdi gir modellen gjennomsnittlig $y$-verdi.'
          }
        ],
        solution: 'a) Endring i $y$ per enhet $x$, b) $y$-verdi når $x=0$, c) Modellen treffer i gjennomsnitt',
        hints: ['Tenk på linjen $\\hat{y} = ax + b$ som en prediksjon av $y$ basert på $x$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Gjødslingsmengde ($x$ kg/dekar) og avling ($y$ kg/dekar):

| $x$ | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|
| $y$ | 250 | 300 | 380 | 420 | 470 |

Finn regresjonslinjen og estimer avlingen ved 35 kg gjødsel per dekar.`,
        solution: `$n = 5$, $\\bar{x} = 30$, $\\bar{y} = 364$

$\\sum x_i^2 = 100+400+900+1600+2500 = 5500$
$\\sum x_i y_i = 2500+6000+11400+16800+23500 = 60200$

$a = \\frac{5 \\cdot 60200 - 150 \\cdot 1820}{5 \\cdot 5500 - 22500} = \\frac{301000 - 273000}{27500 - 22500} = \\frac{28000}{5000} = 5{,}6$

$b = 364 - 5{,}6 \\cdot 30 = 364 - 168 = 196$

$\\hat{y} = 5{,}6x + 196$

Ved $x = 35$: $\\hat{y} = 5{,}6 \\cdot 35 + 196 = 196 + 196 = 392$ kg/dekar.`,
        hints: ['For estimering, sett inn $x$-verdien i regresjonslinjen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk regresjonslinjen fra eksempel 1 ($\\hat{y} = 5{,}39x + 36{,}12$) til å predikere poengsummen for en elev som studerer 7 timer. Er det rimelig å bruke modellen for å predikere resultatet til en elev som studerer 25 timer?`,
        solution: `Ved $x = 7$: $\\hat{y} = 5{,}39 \\cdot 7 + 36{,}12 = 37{,}73 + 36{,}12 = 73{,}85 \\approx 74$ poeng.

For $x = 25$: $\\hat{y} = 5{,}39 \\cdot 25 + 36{,}12 = 134{,}75 + 36{,}12 = 170{,}9$ poeng.

Dette er **ikke rimelig** fordi:
1. $x = 25$ er langt utenfor dataområdet ($x$ fra 2 til 10). Prediksjon utenfor dataområdet kalles **ekstrapolasjon** og er upålitelig.
2. Maksimal poengsum på prøven er trolig 100, og modellen gir over 100.`,
        hints: ['Ekstrapolasjon = prediksjon utenfor dataområdet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== RESIDUALER ==========
    {
      id: 's1-7-1-residualer',
      type: 'text',
      content: `## Residualer

**Residualet** for et datapunkt er differansen mellom den observerte verdien og den predikerte verdien fra regresjonslinjen.`,
    },

    {
      id: 's1-7-1-def-residual',
      type: 'definition',
      title: 'Residual',
      content: `**Residualet** for datapunkt $i$ er:
$$e_i = y_i - \\hat{y}_i = y_i - (ax_i + b)$$

**Egenskaper:**
- $e_i > 0$: Observert verdi er **over** regresjonslinjen
- $e_i < 0$: Observert verdi er **under** regresjonslinjen
- $e_i = 0$: Observert verdi er **på** regresjonslinjen
- Summen av residualene er alltid 0: $\\sum e_i = 0$

**Residualplott:** Plot residualene $e_i$ mot $x_i$ (eller $\\hat{y}_i$). Hvis den lineære modellen passer godt, bør residualplottet vise tilfeldig spredning uten mønster.`,
    },

    // ========== R² ==========
    {
      id: 's1-7-1-r2',
      type: 'text',
      content: `## Determinasjonskoeffisienten $R^2$

For å vurdere hvor god regresjonsmodellen er, bruker vi **determinasjonskoeffisienten** $R^2$.`,
    },

    {
      id: 's1-7-1-def-r2',
      type: 'definition',
      title: 'Determinasjonskoeffisienten $R^2$',
      content: `$$R^2 = 1 - \\frac{\\text{SS}_{\\text{res}}}{\\text{SS}_{\\text{tot}}} = 1 - \\frac{\\sum(y_i - \\hat{y}_i)^2}{\\sum(y_i - \\bar{y})^2}$$

der:
- $\\text{SS}_{\\text{res}} = \\sum(y_i - \\hat{y}_i)^2$ er **residualkvadratsummen** (uforklart variasjon)
- $\\text{SS}_{\\text{tot}} = \\sum(y_i - \\bar{y})^2$ er **totalkvadratsummen** (total variasjon)

**Tolkning:**
- $R^2$ angir andelen av variasjonen i $y$ som **forklares** av den lineære modellen
- $0 \\leq R^2 \\leq 1$
- $R^2 = 1$: Alle punkter ligger eksakt på linjen (perfekt tilpasning)
- $R^2 = 0$: Modellen forklarer ingenting av variasjonen
- $R^2 = 0{,}85$ betyr at 85 % av variasjonen i $y$ forklares av $x$`,
    },

    {
      id: 's1-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Beregning av residualer og $R^2$',
      problem: `Bruk dataene og regresjonslinjen $\\hat{y} = 5{,}39x + 36{,}12$ fra eksempel 1. Beregn residualene og $R^2$.`,
      solution: `**Residualer:**

| $x$ | $y$ | $\\hat{y}$ | $e = y - \\hat{y}$ |
|---|---|---|---|
| 2 | 45 | 46,90 | $-1{,}90$ |
| 3 | 55 | 52,29 | 2,71 |
| 5 | 60 | 63,07 | $-3{,}07$ |
| 6 | 72 | 68,46 | 3,54 |
| 8 | 78 | 79,24 | $-1{,}24$ |
| 10 | 90 | 90,02 | $-0{,}02$ |

Kontroll: $\\sum e_i \\approx 0$ ✓

$\\text{SS}_{\\text{res}} = 1{,}90^2 + 2{,}71^2 + 3{,}07^2 + 3{,}54^2 + 1{,}24^2 + 0{,}02^2 \\approx 32{,}4$

$\\text{SS}_{\\text{tot}} = (45-66{,}7)^2 + (55-66{,}7)^2 + \\cdots + (90-66{,}7)^2 \\approx 1333{,}3$

$R^2 = 1 - \\frac{32{,}4}{1333{,}3} \\approx 1 - 0{,}024 = 0{,}976$

$R^2 \\approx 0{,}976$: Studietimer forklarer ca. **97,6 %** av variasjonen i poengsum. Svært god tilpasning.`,
    },

    // ========== OPPGAVER 5-14 ==========
    {
      id: 's1-7-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Gitt regresjonslinjen $\\hat{y} = 3x + 10$ og datapunktene $(2, 17)$, $(4, 21)$, $(6, 29)$, $(8, 33)$. Beregn residualene og $\\text{SS}_{\\text{res}}$.`,
        solution: `| $x$ | $y$ | $\\hat{y}$ | $e$ |
|---|---|---|---|
| 2 | 17 | 16 | 1 |
| 4 | 21 | 22 | $-1$ |
| 6 | 29 | 28 | 1 |
| 8 | 33 | 34 | $-1$ |

$\\text{SS}_{\\text{res}} = 1^2 + (-1)^2 + 1^2 + (-1)^2 = 4$`,
        hints: ['$\\hat{y}_i = 3x_i + 10$, deretter $e_i = y_i - \\hat{y}_i$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr det at et residualplott viser et krummet mønster?',
            solution: 'Det betyr at den lineære modellen ikke passer godt. Sammenhengen er trolig ikke-lineær, og en annen modell (f.eks. andregradsfunksjon) kan passe bedre.'
          },
          {
            label: 'b',
            task: 'Hva betyr det at residualplottet viser en vifteform (spredningen øker)?',
            solution: 'Det betyr at variansen i $y$ øker med $x$ (heteroskedastisitet). Modellen er mer usikker for store $x$-verdier.'
          }
        ],
        solution: 'a) Ikke-lineær sammenheng, b) Ulik varians (heteroskedastisitet)',
        hints: ['Residualplottet bør vise tilfeldig spredning for at modellen skal passe godt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `Temperatur ($x$, °C) og issalg ($y$, antall):

| $x$ | 15 | 18 | 20 | 23 | 25 | 28 | 30 |
|---|---|---|---|---|---|---|---|
| $y$ | 30 | 45 | 50 | 65 | 80 | 90 | 100 |

Bruk kalkulator/regneark til å finne regresjonslinjen og $R^2$. Tolk resultatene.`,
        solution: `Med kalkulator: $\\hat{y} = 4{,}72x - 42{,}1$, $R^2 \\approx 0{,}99$

**Tolkning:**
- Stigningstall: For hver grad varmere selges det ca. 4,7 flere is.
- $R^2 = 0{,}99$: Temperatur forklarer ca. 99 % av variasjonen i issalg.
- Svært sterk lineær sammenheng.`,
        hints: ['Bruk GeoGebra eller regneark for regresjonsanalyse'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har følgende data for annonsering ($x$, tusen kr) og salg ($y$, tusen kr):

| $x$ | 5 | 10 | 15 | 20 | 25 |
|---|---|---|---|---|---|
| $y$ | 80 | 120 | 150 | 180 | 220 |

Finn regresjonslinjen og bruk den til å predikere salget ved et annonsebudsjett på 18 tusen kr.`,
        solution: `$n = 5$, $\\bar{x} = 15$, $\\bar{y} = 150$

$\\sum x_i^2 = 25+100+225+400+625 = 1375$
$\\sum x_i y_i = 400+1200+2250+3600+5500 = 12950$

$a = \\frac{5 \\cdot 12950 - 75 \\cdot 750}{5 \\cdot 1375 - 75^2} = \\frac{64750 - 56250}{6875 - 5625} = \\frac{8500}{1250} = 6{,}8$

$b = 150 - 6{,}8 \\cdot 15 = 150 - 102 = 48$

$\\hat{y} = 6{,}8x + 48$

Ved $x = 18$: $\\hat{y} = 6{,}8 \\cdot 18 + 48 = 122{,}4 + 48 = 170{,}4$ tusen kr.`,
        hints: ['Prediksjonen er interpolasjon (18 er innenfor dataområdet 5-25)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Vis at $\\sum_{i=1}^{n} e_i = 0$ for regresjonslinjen $\\hat{y} = ax + b$ der $b = \\bar{y} - a\\bar{x}$.`,
        solution: `$\\sum e_i = \\sum (y_i - \\hat{y}_i) = \\sum (y_i - ax_i - b)$

$= \\sum y_i - a \\sum x_i - nb$

$= n\\bar{y} - an\\bar{x} - nb$

$= n\\bar{y} - an\\bar{x} - n(\\bar{y} - a\\bar{x})$

$= n\\bar{y} - an\\bar{x} - n\\bar{y} + an\\bar{x} = 0$ ✓`,
        hints: ['Sett inn $b = \\bar{y} - a\\bar{x}$ og bruk at $\\sum x_i = n\\bar{x}$, $\\sum y_i = n\\bar{y}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Beregn $R^2$ for oppgave 5 ($\\hat{y} = 3x + 10$, data: $(2,17), (4,21), (6,29), (8,33)$).`,
        solution: `Vi fant $\\text{SS}_{\\text{res}} = 4$.

$\\bar{y} = \\frac{17+21+29+33}{4} = 25$

$\\text{SS}_{\\text{tot}} = (17-25)^2 + (21-25)^2 + (29-25)^2 + (33-25)^2 = 64 + 16 + 16 + 64 = 160$

$R^2 = 1 - \\frac{4}{160} = 1 - 0{,}025 = 0{,}975$

Modellen forklarer 97,5 % av variasjonen.`,
        hints: ['$\\text{SS}_{\\text{tot}} = \\sum (y_i - \\bar{y})^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En forsker samler data om alder ($x$) og blodtrykk ($y$) for 8 personer:

| $x$ | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 |
|---|---|---|---|---|---|---|---|---|
| $y$ | 115 | 120 | 118 | 125 | 130 | 128 | 138 | 140 |

Finn regresjonslinjen med kalkulator, beregn $R^2$ og diskuter om alder er en god prediktor for blodtrykk.`,
        solution: `Med kalkulator: $\\hat{y} = 0{,}66x + 98{,}6$, $R^2 \\approx 0{,}94$

**Tolkning:**
- For hvert ekstra leveår øker blodtrykket i gjennomsnitt med ca. 0,66 mmHg.
- $R^2 = 0{,}94$: Alder forklarer ca. 94 % av variasjonen i blodtrykk i dette utvalget.
- Modellen passer godt, men husk at korrelasjon ikke nødvendigvis betyr kausalitet (se kap 7.2).`,
        hints: ['Bruk GeoGebra: skriv inn datapunktene og bruk RegLin-kommandoen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen på interpolasjon og ekstrapolasjon?',
            solution: 'Interpolasjon er prediksjon innenfor dataområdet (pålitelig). Ekstrapolasjon er prediksjon utenfor dataområdet (upålitelig, fordi vi ikke vet om trenden fortsetter).'
          },
          {
            label: 'b',
            task: 'Gi et eksempel der ekstrapolasjon gir meningsløse resultater.',
            solution: 'Eksempel: Regresjonslinjen for barns høyde fra 0-12 år kan gi meningsløse prediksjoner for voksne. En modell $\\hat{y} = 6x + 50$ (cm) gir $\\hat{y} = 170$ cm ved 20 år, men $\\hat{y} = 290$ cm ved 40 år.'
          }
        ],
        solution: 'a) Innenfor vs. utenfor dataområdet, b) Barns vekst ekstrapolert til voksne',
        hints: ['Tenk på situasjoner der trenden ikke kan fortsette lineært'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To regresjonsmodeller for sammenheng mellom CO$_2$-utslipp ($x$) og temperaturavvik ($y$):

Modell A: $\\hat{y} = 0{,}005x + 0{,}2$, $R^2 = 0{,}88$
Modell B: $\\hat{y} = 0{,}004x + 0{,}5$, $R^2 = 0{,}72$

Hvilken modell vil du foretrekke, og hvorfor?`,
        solution: `Modell A har $R^2 = 0{,}88$, som betyr at 88 % av variasjonen i temperaturavvik forklares av CO$_2$-utslipp. Modell B forklarer bare 72 %.

Vi foretrekker **Modell A** fordi den har høyere $R^2$. Men vi bør også sjekke residualplottene og vurdere om den lineære modellen er hensiktsmessig for begge datasettene.`,
        hints: ['Høyere $R^2$ betyr bedre tilpasning, men sjekk også residualplottet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's1-7-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `For datasettet i oppgave 3 (gjødsel og avling), beregn alle residualene og tegn et residualplott. Vurder om den lineære modellen passer godt.`,
        solution: `Med $\\hat{y} = 5{,}6x + 196$:

| $x$ | $y$ | $\\hat{y}$ | $e$ |
|---|---|---|---|
| 10 | 250 | 252 | $-2$ |
| 20 | 300 | 308 | $-8$ |
| 30 | 380 | 364 | 16 |
| 40 | 420 | 420 | 0 |
| 50 | 470 | 476 | $-6$ |

Residualene viser et svakt krummet mønster (negativt, negativt, positivt, null, negativt), men med bare 5 datapunkter er det vanskelig å konkludere. Modellen er rimelig god, men med flere data kunne vi undersøkt om en svak krumning er til stede.`,
        hints: ['Se etter mønstre: tilfeldig spredning = god modell, systematisk mønster = dårlig modell'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 's1-7-1-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Regresjonslinje:** $\\hat{y} = ax + b$ der $a$ og $b$ finnes med minste kvadraters metode.

**Residual:** $e_i = y_i - \\hat{y}_i$ (avstand fra datapunkt til linje). Summen er alltid 0.

**$R^2$:** Andel av variasjonen i $y$ som forklares av modellen. Nær 1 = god tilpasning.

**Residualplott:** Sjekk for mønstre. Tilfeldig spredning = lineær modell passer.

**Viktig:** Unngå ekstrapolasjon. Regresjonslinjen er bare gyldig innenfor dataområdet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Korrelasjon og kausalitet
// ============================================================================

export const CHAPTER_S1_7_2: TextbookChapter = {
  id: 's1-7-2',
  courseId: 's1',
  chapterNumber: '7.2',
  title: 'Korrelasjon og kausalitet',
  description: 'Lær om Pearsons korrelasjonskoeffisient, tolkning av korrelasjon, og hvorfor korrelasjon ikke betyr kausalitet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjere greie for og bruke lineær regresjon og korrelasjon',
    'vurdere feilkjelder og drøfte resultat kritisk',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-7-2-intro',
      type: 'text',
      content: `## Pearsons korrelasjonskoeffisient

I forrige kapittel lærte vi om $R^2$ som et mål på hvor godt regresjonslinjen passer. Nå skal vi se på et annet viktig mål: **korrelasjonskoeffisienten** $r$, som måler styrken og retningen av den lineære sammenhengen mellom to variabler.`,
    },

    {
      id: 's1-7-2-def-pearson',
      type: 'definition',
      title: 'Pearsons korrelasjonskoeffisient',
      content: `**Pearsons korrelasjonskoeffisient** $r$ for et datasett $(x_1, y_1), \\ldots, (x_n, y_n)$ er:

$$r = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum_{i=1}^{n}(x_i - \\bar{x})^2 \\cdot \\sum_{i=1}^{n}(y_i - \\bar{y})^2}} = \\frac{S_{xy}}{\\sqrt{S_{xx} \\cdot S_{yy}}}$$

**Egenskaper:**
- $-1 \\leq r \\leq 1$
- $r > 0$: Positiv lineær sammenheng (begge øker)
- $r < 0$: Negativ lineær sammenheng (en øker, den andre synker)
- $r = 0$: Ingen lineær sammenheng
- $|r|$ nær 1: Sterk lineær sammenheng
- $|r|$ nær 0: Svak lineær sammenheng

**Sammenheng med $R^2$:** For enkel lineær regresjon gjelder $R^2 = r^2$.`,
    },

    {
      id: 's1-7-2-tolkning',
      type: 'text',
      content: `## Tolkning av $r$

En vanlig tommelfingerregel for styrken av korrelasjonen:

| $|r|$ | Styrke |
|---|---|
| $0{,}0 - 0{,}3$ | Svak |
| $0{,}3 - 0{,}7$ | Moderat |
| $0{,}7 - 1{,}0$ | Sterk |

**Viktig:** $r$ måler bare **lineær** sammenheng. To variabler kan ha en sterk ikke-lineær sammenheng selv om $r \\approx 0$.`,
    },

    {
      id: 's1-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregning av $r$',
      problem: `Beregn korrelasjonskoeffisienten for datasettet fra kapittel 7.1:

| $x$ (timer) | 2 | 3 | 5 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| $y$ (poeng) | 45 | 55 | 60 | 72 | 78 | 90 |`,
      solution: `**Løsning:**

Vi fant $R^2 \\approx 0{,}976$ i forrige kapittel.

$$r = \\sqrt{R^2} = \\sqrt{0{,}976} \\approx 0{,}988$$

Siden sammenhengen er positiv (mer studietid gir høyere poengsum), er $r \\approx +0{,}988$.

**Tolkning:** Det er en svært sterk positiv lineær sammenheng mellom studietimer og poengsum.`,
    },

    // ========== OPPGAVER 1-4 ==========
    {
      id: 's1-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvis $R^2 = 0{,}81$, hva er $|r|$?',
            solution: '$|r| = \\sqrt{0{,}81} = 0{,}9$'
          },
          {
            label: 'b',
            task: 'Hvis $r = -0{,}6$, hva er $R^2$?',
            solution: '$R^2 = (-0{,}6)^2 = 0{,}36$'
          },
          {
            label: 'c',
            task: 'Hvis $r = 0{,}95$, beskriv sammenhengen.',
            solution: 'Sterk positiv lineær sammenheng. Når den ene variabelen øker, øker den andre også.'
          }
        ],
        solution: 'a) $0{,}9$, b) $0{,}36$, c) Sterk positiv lineær sammenheng',
        hints: ['$R^2 = r^2$ og $r = \\pm\\sqrt{R^2}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Vurder om følgende sammenhenger trolig har positiv, negativ eller ingen korrelasjon:`,
        subTasks: [
          {
            label: 'a',
            task: 'Alder og reaksjonstid hos voksne.',
            solution: 'Positiv korrelasjon: Eldre personer har gjerne lengre reaksjonstid.'
          },
          {
            label: 'b',
            task: 'Temperatur og strømforbruk til oppvarming.',
            solution: 'Negativ korrelasjon: Høyere temperatur gir lavere oppvarmingsbehov.'
          },
          {
            label: 'c',
            task: 'Skostørrelse og IQ.',
            solution: 'Ingen korrelasjon (eller svært svak): Det er ingen logisk sammenheng.'
          }
        ],
        solution: 'a) Positiv, b) Negativ, c) Ingen',
        hints: ['Tenk på hva som skjer med den ene variabelen når den andre øker'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Gitt datapunktene $(1, 10)$, $(2, 8)$, $(3, 6)$, $(4, 4)$, $(5, 2)$. Beregn $r$ manuelt.`,
        solution: `$n = 5$, $\\bar{x} = 3$, $\\bar{y} = 6$

$S_{xy} = \\sum(x_i - 3)(y_i - 6) = (-2)(4) + (-1)(2) + (0)(0) + (1)(-2) + (2)(-4) = -8-2+0-2-8 = -20$

$S_{xx} = \\sum(x_i - 3)^2 = 4+1+0+1+4 = 10$

$S_{yy} = \\sum(y_i - 6)^2 = 16+4+0+4+16 = 40$

$r = \\frac{-20}{\\sqrt{10 \\cdot 40}} = \\frac{-20}{\\sqrt{400}} = \\frac{-20}{20} = -1$

$r = -1$: Perfekt negativ lineær sammenheng (alle punkter ligger på en linje med negativ stigning).`,
        hints: ['Beregn avvikene $(x_i - \\bar{x})$ og $(y_i - \\bar{y})$ først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Fire spredningsplott gir følgende $r$-verdier: $0{,}02$, $-0{,}85$, $0{,}55$, $0{,}98$. Ranger dem fra svakest til sterkest lineær sammenheng.`,
        solution: `Vi ser på $|r|$:

$|0{,}02| = 0{,}02$ (svakest)
$|0{,}55| = 0{,}55$
$|-0{,}85| = 0{,}85$
$|0{,}98| = 0{,}98$ (sterkest)

**Rangering:** $r = 0{,}02$ (svakest), $r = 0{,}55$, $r = -0{,}85$, $r = 0{,}98$ (sterkest).

Merk: $r = -0{,}85$ har sterkere lineær sammenheng enn $r = 0{,}55$, selv om den er negativ.`,
        hints: ['Styrken avgjøres av $|r|$, ikke av fortegnet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KORRELASJON vs. KAUSALITET ==========
    {
      id: 's1-7-2-kausalitet',
      type: 'text',
      content: `## Korrelasjon betyr ikke kausalitet

En av de viktigste innsiktene i statistikk er at **korrelasjon ikke betyr årsakssammenheng**. Bare fordi to variabler korrelerer, betyr det ikke at den ene *forårsaker* endringer i den andre.

Det finnes flere grunner til at to variabler kan korrelere uten at den ene forårsaker den andre:`,
    },

    {
      id: 's1-7-2-def-konfunderende',
      type: 'definition',
      title: 'Konfunderende variabel',
      content: `En **konfunderende variabel** (lurende variabel, bakenforliggende variabel) er en tredje variabel som påvirker *begge* variablene vi studerer, og som dermed skaper en **tilsynelatende** sammenheng.

**Eksempel:** Det er korrelasjon mellom issalg og drukningsulykker. Men is *forårsaker* ikke drukningsulykker. Den konfunderende variabelen er **temperatur/sommer**: Varmt vær fører til både mer issalg og mer bading (og dermed flere drukningsulykker).`,
    },

    {
      id: 's1-7-2-def-spurios',
      type: 'definition',
      title: 'Spuriøs korrelasjon',
      content: `En **spuriøs korrelasjon** er en statistisk sammenheng som oppstår tilfeldig eller på grunn av en konfunderende variabel, uten at det finnes noen reell årsakssammenheng.

**Kjente eksempler:**
- Antall filmer Nicolas Cage spilte i per år korrelerer med antall drukningsulykker i svømmebasseng
- Per capita forbruk av margarin korrelerer med skilsmisseraten i Maine
- Utgifter til romforskning korrelerer med antall selvmord

Disse korrrelasjonene er **tilfeldige** og har ingen kausal forklaring.`,
    },

    {
      id: 's1-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Identifisere konfunderende variabel',
      problem: `Forskning viser en positiv korrelasjon mellom antall brannmenn som sendes ut og størrelsen på brannskadene. Kan vi konkludere med at flere brannmenn forårsaker mer skade?`,
      solution: `**Løsning:**

Nei! Den konfunderende variabelen er **brannens størrelse**.

- Store branner fører til at mange brannmenn sendes ut
- Store branner gir også store skader

Det er brannen selv (og dens størrelse) som forårsaker *begge* de observerte variablene. Det ville vært absurd å redusere antall brannmenn for å redusere skade.

**Diagram:**
Brannens størrelse → Flere brannmenn
Brannens størrelse → Større skade

Korrelasjonen mellom brannmenn og skade er **spuriøs** — den forklares av den felles årsaken.`,
    },

    // ========== OPPGAVER 5-12 ==========
    {
      id: 's1-7-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `For hvert par av variabler, identifiser en mulig konfunderende variabel:`,
        subTasks: [
          {
            label: 'a',
            task: 'Solkremsalg og hudkreft (positiv korrelasjon).',
            solution: 'Konfunderende variabel: **Mengde soleksponering/UV-stråling**. Mye sol fører til at folk kjøper mer solkrem, men også til mer hudkreft.'
          },
          {
            label: 'b',
            task: 'Antall sykehus i en by og antall forbrytelser (positiv korrelasjon).',
            solution: 'Konfunderende variabel: **Befolkningsstørrelse**. Store byer har både flere sykehus og flere forbrytelser.'
          },
          {
            label: 'c',
            task: 'Barns skostørrelse og leseferdighet (positiv korrelasjon).',
            solution: 'Konfunderende variabel: **Alder**. Eldre barn har større føtter og bedre leseferdigheter.'
          }
        ],
        solution: 'a) Soleksponering, b) Befolkningsstørrelse, c) Alder',
        hints: ['Tenk: Hva kan forårsake endring i *begge* variablene?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `En avisartikkel skriver: «Studie viser: Barn som spiser frokost får bedre karakterer.» Diskuter om vi kan konkludere med at frokosten *forårsaker* bedre karakterer.`,
        solution: `Vi kan **ikke** uten videre konkludere med kausalitet. Mulige konfunderende variabler:

1. **Familiens sosioøkonomiske status:** Familier med høy inntekt gir oftere barna frokost og investerer mer i barnas utdanning.
2. **Generelle vaner og struktur:** Barn som spiser frokost har kanskje mer strukturerte hjem generelt, noe som påvirker skoleresultater.
3. **Helse og søvn:** Barn som spiser frokost sover kanskje mer regelmessig, noe som også påvirker konsentrasjon.

For å påvise kausalitet trengs et **randomisert kontrollert eksperiment**, der man tilfeldig deler barn i to grupper (med og uten frokost) og sammenligner resultatene.`,
        hints: ['Observasjonsstudier kan aldri bevise kausalitet alene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `En studie av 1000 personer finner $r = 0{,}45$ mellom antall timer trening per uke og selvrapportert livskvalitet. Tolk denne korrelasjonen og diskuter begrensninger.`,
        solution: `**Tolkning:** Moderat positiv korrelasjon. Personer som trener mer, rapporterer generelt høyere livskvalitet.

**Begrensninger:**
1. **Kausalitet:** Vi vet ikke retningen. Kanskje folk med høy livskvalitet har mer energi og motivasjon til å trene (omvendt kausalitet).
2. **Konfunderende variabler:** Inntekt, sosial tilhørighet, generell helse kan påvirke begge.
3. **Selvrapportering:** Livskvalitet er subjektivt og kan være upålitelig.
4. **$R^2 = 0{,}45^2 = 0{,}20$:** Trening forklarer bare 20 % av variasjonen i livskvalitet.`,
        hints: ['Vurder retning, konfunderende variabler, måleproblemer og $R^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom en observasjonsstudie og et eksperiment.',
            solution: 'I en **observasjonsstudie** observerer man variablene uten å gripe inn. I et **eksperiment** manipulerer forskeren forklaringsvariabelen og ser effekten. Bare eksperimenter kan påvise kausalitet.'
          },
          {
            label: 'b',
            task: 'Hvorfor er randomisering viktig i eksperimenter?',
            solution: 'Randomisering sørger for at gruppene er like på alle andre måter (kjente og ukjente konfunderende variabler), slik at forskjeller i utfall kan tilskrives den manipulerte variabelen.'
          }
        ],
        solution: 'a) Observasjon vs. manipulasjon, b) Eliminerer konfunderende variabler',
        hints: ['Tenk på hva som trengs for å isolere effekten av én enkelt variabel'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Variabler $X$ og $Y$ har verdiene:

| $X$ | $-3$ | $-2$ | $-1$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|---|---|
| $Y$ | 9 | 4 | 1 | 0 | 1 | 4 | 9 |

Beregn $r$. Er det en sterk sammenheng mellom $X$ og $Y$? Forklar.`,
        solution: `$\\bar{x} = 0$, $\\bar{y} = 4$

$S_{xy} = (-3)(5) + (-2)(0) + (-1)(-3) + (0)(-4) + (1)(-3) + (2)(0) + (3)(5) = -15+0+3+0-3+0+15 = 0$

$r = 0$

Men det er en **perfekt** sammenheng: $Y = X^2$!

**Poeng:** $r = 0$ betyr bare ingen *lineær* sammenheng. Det kan likevel være en svært sterk ikke-lineær sammenheng. Sjekk alltid spredningsplottet!`,
        hints: ['$Y = X^2$ er en perfekt, men ikke-lineær, sammenheng'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En avis rapporterer: «Kommuner med flere vinmonopol har lavere kriminalitet.» Gi minst tre alternative forklaringer på denne korrelasjonen.`,
        solution: `Alternative forklaringer:

1. **Inntektsnivå:** Rikere kommuner kan ha råd til flere vinmonopol og har også lavere kriminalitet av andre grunner.
2. **Urbanitet/bystørrelse:** Større byer har flere vinmonopol, men forholdet mellom urbanitet og kriminalitet er komplekst.
3. **Utdanningsnivå:** Kommuner med høyt utdanningsnivå kan ha både større etterspørsel etter vin (og dermed flere vinmonopol) og lavere kriminalitet.
4. **Omvendt kausalitet:** Det er lite sannsynlig at vinmonopol reduserer kriminalitet. Det er mer sannsynlig at tryggere kommuner tiltrekker seg butikker generelt.

Korrelasjonen er trolig spuriøs, drevet av sosioøkonomiske faktorer.`,
        hints: ['Tenk på hva slags kommuner som har mange vinmonopol'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forklar hva som menes med «omvendt kausalitet» og gi to eksempler fra virkeligheten.`,
        solution: `**Omvendt kausalitet** betyr at årsaksretningen er motsatt av det man først antar. I stedet for at $X$ forårsaker $Y$, er det $Y$ som forårsaker $X$.

**Eksempel 1:** Studie finner korrelasjon mellom antall politibetjenter og kriminalitet. Man kan tro at politiet *forårsaker* kriminalitet, men det er omvendt: høy kriminalitet fører til at kommunen ansetter *flere* politibetjenter.

**Eksempel 2:** Korrelasjon mellom nødhjelp og fattigdom. Det er ikke nødhjelpen som forårsaker fattigdom — det er fattigdom som fører til mer nødhjelp.`,
        hints: ['Tenk: Kan det være at «effekten» egentlig er «årsaken»?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-7-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En studie finner $r = -0{,}72$ mellom antall timer brukt på sosiale medier og søvnkvalitet. Drøft resultatet grundig: tolkning, mulige forklaringer, og hva som trengs for å konkludere med kausalitet.`,
        solution: `**Tolkning:** Sterk negativ korrelasjon: Mer tid på sosiale medier henger sammen med dårligere søvnkvalitet.

**Mulige forklaringer:**
1. **Direkte kausalitet:** Skjermbruk før leggetid (blått lys, mental stimulering) kan forstyrre søvnen.
2. **Omvendt kausalitet:** Dårlig søvnkvalitet kan føre til at folk bruker mer tid på sosiale medier (fordi de ikke får sove).
3. **Konfunderende variabler:** Stress, angst, depresjon kan føre til *både* mer skjermbruk og dårligere søvn.
4. **Alder:** Unge bruker mer sosiale medier og har andre søvnmønstre.

**For kausalitet trengs:**
- Randomisert kontrollert studie (tilfeldig tildele ulik skjermtid)
- Kontrollere for konfunderende variabler
- Longitudinelle studier (måle endring over tid)

$R^2 = 0{,}52$: Sosiale medier forklarer 52 % av variansen, men dette beviser ikke kausalitet.`,
        hints: ['Bruk strukturen: tolkning → alternative forklaringer → hva trengs for kausalitet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 's1-7-2-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Pearsons $r$:** Måler styrke og retning av lineær sammenheng. $-1 \\leq r \\leq 1$.

**Sammenheng med $R^2$:** $R^2 = r^2$, altså $r = \\pm \\sqrt{R^2}$.

**Korrelasjon ≠ kausalitet:** Statistisk sammenheng betyr ikke årsakssammenheng.

**Tre grunner til korrelasjon uten kausalitet:**
1. **Konfunderende variabel:** En tredje variabel påvirker begge
2. **Omvendt kausalitet:** Årsaksretningen er motsatt
3. **Tilfeldig korrelasjon (spuriøs):** Ren tilfeldighet, spesielt i store datasett

**For å påvise kausalitet:** Randomisert kontrollert eksperiment, kontroll for konfunderende variabler, og replikasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Ikke-lineær regresjon
// ============================================================================

export const CHAPTER_S1_7_3: TextbookChapter = {
  id: 's1-7-3',
  courseId: 's1',
  chapterNumber: '7.3',
  title: 'Ikke-lineær regresjon',
  description: 'Lær om eksponentiell, potensiell og logaritmisk regresjon, og hvordan du velger beste modell.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke digitale verktøy til regresjonsanalyse og modellvurdering',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 's1-7-3-intro',
      type: 'text',
      content: `## Når lineær regresjon ikke er nok

Ikke alle sammenhenger er lineære. Mange fenomener i naturen og samfunnet følger andre mønstre:
- **Eksponentiell vekst:** Bakterievekst, rentes rente, smittespredning
- **Potenssammenheng:** Bremselengde og fart, areal og sidelengde
- **Logaritmisk vekst:** Lydstyrke (desibel), jordskjelvstyrke (Richter)

Dersom spredningsplottet eller residualplottet viser at en lineær modell ikke passer, prøver vi **ikke-lineære modeller**.`,
    },

    // ========== EKSPONENTIELL REGRESJON ==========
    {
      id: 's1-7-3-eksponentiell',
      type: 'text',
      content: `## Eksponentiell regresjon

En **eksponentiell modell** har formen:
$$y = a \\cdot b^x \\quad \\text{eller} \\quad y = a \\cdot e^{kx}$$

der $a > 0$ er startverdien og $b > 0$ (eller $k$) bestemmer vekstraten.

**Kjennetegn i spredningsplottet:**
- Kurven stiger stadig raskere ($b > 1$) eller avtar stadig saktere ($0 < b < 1$)
- Ser ut som en «J-form» (vekst) eller «fallende kurve» (nedgang)`,
    },

    {
      id: 's1-7-3-def-logtransform',
      type: 'definition',
      title: 'Logaritmisk transformasjon',
      content: `For å bruke lineær regresjon på en eksponentiell modell $y = a \\cdot b^x$, tar vi logaritmen av begge sider:

$$\\ln y = \\ln a + x \\cdot \\ln b$$

Setter vi $Y = \\ln y$, $A = \\ln a$ og $B = \\ln b$, får vi:
$$Y = Bx + A$$

som er en **lineær** sammenheng mellom $x$ og $\\ln y$.

**Framgangsmåte:**
1. Transformer $y$-verdiene til $\\ln y$
2. Utfør lineær regresjon på $(x, \\ln y)$
3. Finn $a = e^A$ og $b = e^B$`,
    },

    {
      id: 's1-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Eksponentiell regresjon',
      problem: `En bakteriekultur dobles omtrent hvert 3. time. Antall bakterier ble målt:

| Timer ($x$) | 0 | 3 | 6 | 9 | 12 |
|---|---|---|---|---|---|
| Antall ($y$) | 100 | 210 | 420 | 870 | 1750 |

Finn en eksponentiell modell $y = a \\cdot b^x$.`,
      solution: `**Løsning:**

**Steg 1:** Transformer $y$ til $\\ln y$:

| $x$ | 0 | 3 | 6 | 9 | 12 |
|---|---|---|---|---|---|
| $\\ln y$ | 4,605 | 5,347 | 6,040 | 6,768 | 7,467 |

**Steg 2:** Lineær regresjon på $(x, \\ln y)$:

Med kalkulator: $\\ln y = 0{,}237x + 4{,}610$

**Steg 3:** Tilbake til eksponentiell form:
$a = e^{4{,}610} \\approx 100{,}5 \\approx 100$
$b = e^{0{,}237} \\approx 1{,}267$

**Modell:** $y = 100 \\cdot 1{,}267^x$

**Tolkning:** Startantallet er ca. 100 bakterier, og antallet øker med ca. 26,7 % per time.

**Kontroll:** $y(3) = 100 \\cdot 1{,}267^3 \\approx 203$ (nær observert 210) ✓`,
    },

    // ========== OPPGAVER 1-3 ==========
    {
      id: 's1-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken type sammenheng (lineær, eksponentiell, potens) passer best for befolkningsvekst over tid?',
            solution: 'Eksponentiell: Befolkningsvekst er typisk proporsjonal med nåværende befolkning, noe som gir eksponentiell vekst.'
          },
          {
            label: 'b',
            task: 'Hvilken passer for sammenhengen mellom radius og areal av en sirkel?',
            solution: 'Potens: $A = \\pi r^2$, altså en potenssammenheng med eksponent 2.'
          },
          {
            label: 'c',
            task: 'Hvilken passer for lydstyrke (desibel) som funksjon av avstand?',
            solution: 'Logaritmisk (eller potens med negativ eksponent): Desibel avtar logaritmisk med avstand.'
          }
        ],
        solution: 'a) Eksponentiell, b) Potens, c) Logaritmisk/potens',
        hints: ['Tenk på formen: konstant prosentvis vekst → eksponentiell, $y \\propto x^n$ → potens'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: `Verdien av en bil ($y$, tusen kr) som funksjon av alder ($x$, år):

| $x$ | 0 | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| $y$ | 350 | 270 | 210 | 160 | 125 | 95 |

Finn en eksponentiell modell $y = a \\cdot b^x$.`,
        solution: `Transformer til $\\ln y$:

| $x$ | 0 | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| $\\ln y$ | 5,858 | 5,598 | 5,347 | 5,075 | 4,828 | 4,554 |

Lineær regresjon på $(x, \\ln y)$: $\\ln y = -0{,}130x + 5{,}862$

$a = e^{5{,}862} \\approx 350{,}7 \\approx 351$
$b = e^{-0{,}130} \\approx 0{,}878$

**Modell:** $y = 351 \\cdot 0{,}878^x$

Bilen mister ca. 12,2 % av verdien per år (verdifall).`,
        hints: ['Fallende eksponentiell har $0 < b < 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Antall brukere ($y$, millioner) av en app over tid ($x$, måneder):

| $x$ | 1 | 3 | 6 | 9 | 12 |
|---|---|---|---|---|---|
| $y$ | 0,5 | 1,2 | 4,0 | 13 | 42 |

Vis at en eksponentiell modell passer bedre enn en lineær. Bruk kalkulator.`,
        solution: `**Lineær modell:** $\\hat{y} = 3{,}5x - 8{,}0$, $R^2 \\approx 0{,}82$

**Eksponentiell modell:** $y = 0{,}21 \\cdot 1{,}42^x$, $R^2 \\approx 0{,}99$

Den eksponentielle modellen har mye høyere $R^2$ (0,99 vs. 0,82), og den lineære modellen gir negative prediksjoner for lave $x$-verdier, noe som er umulig for antall brukere.`,
        hints: ['Sammenlign $R^2$ for begge modellene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== POTENSIELL REGRESJON ==========
    {
      id: 's1-7-3-potens',
      type: 'text',
      content: `## Potensiell regresjon

En **potensmodell** har formen:
$$y = a \\cdot x^b$$

**Logaritmisk transformasjon:**
$$\\ln y = \\ln a + b \\cdot \\ln x$$

Setter vi $Y = \\ln y$ og $X = \\ln x$, får vi lineær sammenheng:
$$Y = bX + \\ln a$$

**Framgangsmåte:**
1. Transformer begge variablene: $(\\ln x, \\ln y)$
2. Utfør lineær regresjon
3. Eksponenten $b$ er stigningstallet, og $a = e^{\\text{konstantledd}}$`,
    },

    {
      id: 's1-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Potensiell regresjon',
      problem: `Bremselengden ($y$, meter) som funksjon av fart ($x$, km/t):

| $x$ | 30 | 50 | 70 | 90 | 110 |
|---|---|---|---|---|---|
| $y$ | 6 | 16 | 32 | 53 | 79 |

Finn en potensmodell $y = a \\cdot x^b$.`,
      solution: `**Løsning:**

Transformer til $\\ln$-verdier:

| $\\ln x$ | 3,401 | 3,912 | 4,248 | 4,500 | 4,700 |
|---|---|---|---|---|---|
| $\\ln y$ | 1,792 | 2,773 | 3,466 | 3,970 | 4,369 |

Lineær regresjon på $(\\ln x, \\ln y)$: $\\ln y = 1{,}97 \\cdot \\ln x - 4{,}92$

$b = 1{,}97 \\approx 2$ og $a = e^{-4{,}92} \\approx 0{,}0073$

**Modell:** $y \\approx 0{,}0073 \\cdot x^2$

**Tolkning:** Bremselengden er tilnærmet proporsjonal med kvadratet av farten. Dobles farten, firedobles bremselengden.`,
    },

    // ========== OPPGAVER 4-8 ==========
    {
      id: 's1-7-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Perioden ($y$, sekunder) til en pendel som funksjon av lengden ($l$, meter):

| $l$ | 0,25 | 0,50 | 1,00 | 1,50 | 2,00 |
|---|---|---|---|---|---|
| $y$ | 1,00 | 1,41 | 2,00 | 2,45 | 2,83 |

Finn en potensmodell og sammenlign med den teoretiske formelen $T = 2\\pi\\sqrt{\\frac{l}{g}}$.`,
        solution: `Lineær regresjon på $(\\ln l, \\ln y)$:

| $\\ln l$ | $-1{,}386$ | $-0{,}693$ | 0 | 0,405 | 0,693 |
|---|---|---|---|---|---|
| $\\ln y$ | 0 | 0,344 | 0,693 | 0,896 | 1,040 |

$\\ln y = 0{,}50 \\cdot \\ln l + 0{,}693$

$b = 0{,}50$ og $a = e^{0{,}693} \\approx 2{,}00$

**Modell:** $y = 2{,}00 \\cdot l^{0{,}5} = 2\\sqrt{l}$

**Teoretisk:** $T = 2\\pi\\sqrt{\\frac{l}{g}} = \\frac{2\\pi}{\\sqrt{9{,}81}} \\cdot \\sqrt{l} \\approx 2{,}01 \\cdot \\sqrt{l}$

Modellen stemmer utmerket med teorien! Koeffisienten $\\approx 2{,}01$ og eksponenten $= 0{,}5$.`,
        hints: ['Den teoretiske formelen gir $y \\propto l^{0{,}5}$, altså $b = 0{,}5$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan kan du visuelt avgjøre om en eksponentiell eller en potensmodell passer best?',
            solution: 'Lag to plott: (1) $x$ mot $\\ln y$ — hvis dette er lineært, passer eksponentiell modell. (2) $\\ln x$ mot $\\ln y$ — hvis dette er lineært, passer potensmodell.'
          },
          {
            label: 'b',
            task: 'Hva er forskjellen mellom eksponentiell og potensiell vekst for store $x$-verdier?',
            solution: 'Eksponentiell vekst ($a \\cdot b^x$) vokser **mye raskere** enn potensiell vekst ($a \\cdot x^n$) for store $x$. For eksempel: $2^x$ overgår $x^{100}$ for tilstrekkelig store $x$.'
          }
        ],
        solution: 'a) Bruk log-plott, b) Eksponentiell vokser raskere for store $x$',
        hints: ['Logaritmisk transformasjon gjør kurver til rette linjer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Kroppsoverflaten ($y$, m²) som funksjon av kroppsvekten ($x$, kg):

| $x$ | 40 | 50 | 60 | 70 | 80 | 90 | 100 |
|---|---|---|---|---|---|---|---|
| $y$ | 1,25 | 1,42 | 1,56 | 1,68 | 1,80 | 1,90 | 2,00 |

Bruk kalkulator til å finne den beste modellen blant lineær, eksponentiell og potens. Sammenlign $R^2$-verdiene.`,
        solution: `Med kalkulator:

**Lineær:** $\\hat{y} = 0{,}0122x + 0{,}78$, $R^2 = 0{,}994$
**Eksponentiell:** $y = 0{,}76 \\cdot 1{,}0098^x$, $R^2 = 0{,}997$
**Potens:** $y = 0{,}102 \\cdot x^{0{,}456}$, $R^2 = 0{,}999$

Potensmodellen gir høyest $R^2$ og er kjent fra medisin (Mosteller-formelen bruker en potensmodell). Men alle tre modellene gir god tilpasning i dette dataområdet.`,
        hints: ['Bruk GeoGebra: RegExp for eksponentiell, RegPot for potens'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== VELGE BESTE MODELL ==========
    {
      id: 's1-7-3-modellvalg',
      type: 'text',
      content: `## Velge beste modell

Når du har flere kandidatmodeller, bør du bruke flere kriterier for å velge den beste:

**1. $R^2$-verdien:** Høyere er bedre, men vær forsiktig med overtilpasning.

**2. Residualplott:** Den beste modellen har residualer uten systematisk mønster.

**3. Faglig rimelighet:** Velg en modell som gir mening i konteksten.

**4. Prediksjon:** Sjekk at modellen gir rimelige verdier, spesielt utenfor dataområdet.`,
    },

    {
      id: 's1-7-3-note-digitale',
      type: 'note',
      title: 'Bruke digitale verktøy',
      content: `I GeoGebra kan du bruke følgende kommandoer for regresjonsanalyse:

- **RegLin(liste)** — Lineær regresjon
- **RegExp(liste)** — Eksponentiell regresjon
- **RegPot(liste)** — Potensiell regresjon
- **RegLog(liste)** — Logaritmisk regresjon
- **RegPoly(liste, grad)** — Polynomregresjon

**I regneark (Excel/Google Sheets):**
- Legg inn data og lag et spredningsplott
- Høyreklikk på dataserien → Legg til trendlinje
- Velg type (lineær, eksponentiell, polynom, potens)
- Kryss av for «Vis likning» og «Vis $R^2$-verdi»`,
    },

    // ========== OPPGAVER 7-12 ==========
    {
      id: 's1-7-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `BNP per innbygger ($x$, tusen dollar) og forventet levealder ($y$, år) for 7 land:

| $x$ | 2 | 5 | 10 | 20 | 30 | 40 | 60 |
|---|---|---|---|---|---|---|---|
| $y$ | 55 | 63 | 70 | 75 | 78 | 80 | 82 |

Finn lineær og logaritmisk modell ($y = a + b \\cdot \\ln x$), og avgjør hvilken som passer best.`,
        solution: `**Lineær:** $\\hat{y} = 0{,}44x + 62{,}0$, $R^2 = 0{,}87$

**Logaritmisk:** Bruk $X = \\ln x$:

| $\\ln x$ | 0,69 | 1,61 | 2,30 | 3,00 | 3,40 | 3,69 | 4,09 |
|---|---|---|---|---|---|---|---|
| $y$ | 55 | 63 | 70 | 75 | 78 | 80 | 82 |

Lineær regresjon: $y = 7{,}9 \\cdot \\ln x + 49{,}4$, $R^2 = 0{,}99$

**Logaritmisk modell passer klart best** ($R^2 = 0{,}99$ vs. $0{,}87$). Økning i BNP har avtagende effekt på levealder (mye å vinne for fattige land, lite for rike).`,
        hints: ['Logaritmisk modell: erstatt $x$ med $\\ln x$ og gjør lineær regresjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Norges befolkning (i millioner):

| År | 1900 | 1925 | 1950 | 1975 | 2000 | 2024 |
|---|---|---|---|---|---|---|
| Innbyggere | 2,24 | 2,81 | 3,28 | 4,01 | 4,49 | 5,50 |

La $x$ = år etter 1900. Finn lineær og eksponentiell modell. Hvilken foretrekker du, og hvorfor?`,
        solution: `La $x = 0, 25, 50, 75, 100, 124$ og $y$ = befolkning.

**Lineær:** $\\hat{y} = 0{,}0255x + 2{,}23$, $R^2 = 0{,}995$
**Eksponentiell:** $y = 2{,}21 \\cdot 1{,}0073^x$, $R^2 = 0{,}997$

Begge modellene passer godt, men den eksponentielle er marginalt bedre. For befolkningsvekst er eksponentiell modell faglig mer rimelig (prosentvis vekst). Men merk at vekstraten har variert over tid, så ingen enkel modell er perfekt.

Den lineære modellen predikerer 0 befolkning i ca. år 1812, noe som er urimelig. Den eksponentielle gir en evigvarende, stadig raskere vekst, som heller ikke er realistisk på lang sikt.`,
        hints: ['Faglig rimelighet er like viktig som $R^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Følgende data viser mengden av et radioaktivt stoff ($y$, mg) etter $x$ timer:

| $x$ | 0 | 5 | 10 | 15 | 20 | 25 |
|---|---|---|---|---|---|---|
| $y$ | 100 | 71 | 50 | 35 | 25 | 18 |

Finn en eksponentiell modell og bestem halveringstiden.`,
        solution: `Transformert: $\\ln y$-verdier: $4{,}605$, $4{,}263$, $3{,}912$, $3{,}555$, $3{,}219$, $2{,}890$

Lineær regresjon på $(x, \\ln y)$: $\\ln y = -0{,}0693x + 4{,}605$

$a = e^{4{,}605} = 100$, $b = e^{-0{,}0693} \\approx 0{,}933$

**Modell:** $y = 100 \\cdot 0{,}933^x$ (eller $y = 100 \\cdot e^{-0{,}0693x}$)

**Halveringstid:** $y = 50$ når $100 \\cdot 0{,}933^x = 50$

$0{,}933^x = 0{,}5$
$x \\ln 0{,}933 = \\ln 0{,}5$
$x = \\frac{\\ln 0{,}5}{\\ln 0{,}933} = \\frac{-0{,}693}{-0{,}0693} = 10{,}0$ timer

Halveringstiden er ca. **10 timer**.`,
        hints: ['Halveringstiden er $x$-verdien der $y$ er halvparten av startverdien'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et datasett gir følgende $R^2$-verdier for ulike modeller:

- Lineær: $R^2 = 0{,}72$
- Eksponentiell: $R^2 = 0{,}68$
- Potens: $R^2 = 0{,}91$
- Andegradspolynom: $R^2 = 0{,}95$

Hvilken modell velger du? Diskuter fordeler og ulemper med å velge modellen med høyest $R^2$.`,
        solution: `Andregradspolynomet har høyest $R^2$, men valget er ikke opplagt:

**Argumenter for andregradspolynom:**
- Best tilpasning ($R^2 = 0{,}95$)
- Kan fange krumning i dataene

**Argumenter mot:**
- Polynomer kan gi urimelige prediksjoner utenfor dataområdet (ekstrapolasjon)
- Et polynom av høy grad vil alltid gi høy $R^2$ (overtilpasning)
- Potensmodellen ($R^2 = 0{,}91$) kan være bedre hvis den har faglig grunnlag

**Anbefaling:** Velg potensmodellen ($R^2 = 0{,}91$) dersom den har faglig støtte, fordi den er enklere og mer generaliserbar. Høy $R^2$ alene er ikke tilstrekkelig grunn.`,
        hints: ['Enklere modeller med god tilpasning er ofte bedre enn komplekse modeller med perfekt tilpasning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Energiforbruket ($y$, kWh) i en bygning som funksjon av utetemperatur ($x$, °C):

| $x$ | $-10$ | $-5$ | 0 | 5 | 10 | 15 | 20 |
|---|---|---|---|---|---|---|---|
| $y$ | 450 | 380 | 300 | 230 | 170 | 120 | 90 |

Bruk digitale verktøy til å finne den beste modellen blant lineær, eksponentiell og potens. Tolk modellen.`,
        solution: `Merk: Potensregresjon krever $x > 0$, så vi bruker bare lineær og eksponentiell.

**Lineær:** $\\hat{y} = -12{,}0x + 311$, $R^2 = 0{,}996$
**Eksponentiell:** $y = 299 \\cdot 0{,}948^x$ (eller $y = 299 \\cdot e^{-0{,}053x}$), $R^2 = 0{,}998$

Begge passer meget godt. Den eksponentielle er marginalt bedre og gir også mer mening fysisk (forbruket nærmer seg en nedre grense, det kan ikke bli negativt).

**Tolkning:** For hver grad temperaturøkning synker energiforbruket med ca. 5,3 % (eksponentiell) eller ca. 12 kWh (lineær).`,
        hints: ['Potensmodell fungerer ikke for negative $x$-verdier'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 's1-7-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's1-7-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor logaritmisk transformasjon gjør en eksponentiell kurve til en rett linje.',
            solution: `Eksponentiell: $y = a \\cdot b^x$. Tar vi $\\ln$: $\\ln y = \\ln a + x \\ln b$. Setter vi $Y = \\ln y$, er dette $Y = (\\ln b)x + \\ln a$, som er en rett linje i $x$-$Y$-planet med stigning $\\ln b$ og konstantledd $\\ln a$.`
          },
          {
            label: 'b',
            task: 'Forklar tilsvarende for potensmodellen $y = a \\cdot x^b$.',
            solution: `$\\ln y = \\ln a + b \\ln x$. Setter vi $X = \\ln x$ og $Y = \\ln y$: $Y = bX + \\ln a$, en rett linje i $X$-$Y$-planet (log-log-plott) med stigning $b$ og konstantledd $\\ln a$.`
          },
          {
            label: 'c',
            task: 'Hva er fordelen med å bruke digitale verktøy fremfor manuell beregning for ikke-lineær regresjon?',
            solution: 'Digitale verktøy kan raskt prøve mange modeller, beregne $R^2$, vise residualplott, og gi nøyaktige koeffisienter. De bruker ofte mer avanserte optimeringsmetoder enn enkel log-transformasjon.'
          }
        ],
        solution: 'a) Log-transformasjon lineariserer, b) Log-log lineariserer, c) Raskere, mer nøyaktig, lettere å sammenligne',
        hints: ['Nøkkelen er at $\\ln(a \\cdot b^x) = \\ln a + x \\cdot \\ln b$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 's1-7-3-oppsummering',
      type: 'note',
      content: `## Oppsummering

**Eksponentiell regresjon:** $y = a \\cdot b^x$. Lineariseres ved $\\ln y = \\ln a + x \\cdot \\ln b$.

**Potensiell regresjon:** $y = a \\cdot x^b$. Lineariseres ved $\\ln y = \\ln a + b \\cdot \\ln x$.

**Logaritmisk regresjon:** $y = a + b \\cdot \\ln x$. Allerede lineær i $(\\ln x, y)$.

**Velge modell:**
1. Sammenlign $R^2$-verdier
2. Sjekk residualplott for mønstre
3. Vurder faglig rimelighet
4. Vurder prediksjon utenfor dataområdet

**Digitale verktøy:** GeoGebra (RegExp, RegPot), regneark (trendlinjer), Python/R.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const S1_KAP6_CHAPTERS = [
  CHAPTER_S1_6_1,
  CHAPTER_S1_6_2,
  CHAPTER_S1_6_3,
  CHAPTER_S1_7_1,
  CHAPTER_S1_7_2,
  CHAPTER_S1_7_3,
];