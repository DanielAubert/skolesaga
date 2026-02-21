/**
 * Tekstbok kapitler for R1 - Kapittel 2.4-2.5, 3.6, 4.9
 * Utvidelse av seksjoner 2 (Funksjoner), 3 (Grenseverdi) og 4 (Derivasjon)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.4: Delte funksjonsuttrykk
// ============================================================================

export const CHAPTER_R1_2_4: TextbookChapter = {
  id: 'r1-2-4',
  courseId: 'r1',
  chapterNumber: '2.4',
  title: 'Delte funksjonsuttrykk',
  description: 'Lær om stykkevis definerte funksjoner, diskontinuitet, trappefunksjoner og absoluttverdifunksjonen som delt uttrykk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'definere og tolke stykkevis definerte funksjoner',
    'avgoere kontinuitet for stykkevis definerte funksjoner',
    'skissere grafen til stykkevis definerte funksjoner',
    'uttrykke absoluttverdifunksjonen som delt funksjonsuttrykk',
    'løse likninger og ulikheter med stykkevis definerte funksjoner',
  ],
  content: [
    {
      id: 'r1-2-4-intro',
      type: 'text',
      content: `## Stykkevis definerte funksjoner

Ikke alle funksjoner kan beskrives med ett enkelt uttrykk på hele definisjonsmengden. En **stykkevis definert funksjon** bruker forskjellige uttrykk på forskjellige intervaller. Slike funksjoner dukker opp naturlig i mange praktiske sammenhenger -- for eksempel trinnvis prising, skattesatser og fysiske modeller med faseoverganger.

I dette kapittelet lærer du å definere, analysere og skissere stykkevis definerte funksjoner, og vi studerer begrepet **kontinuitet** i denne sammenhengen.`,
    },
    {
      id: 'r1-2-4-def-stykkevis',
      type: 'definition',
      title: 'Stykkevis definert funksjon',
      content: `En **stykkevis definert funksjon** er en funksjon som er definert ved forskjellige uttrykk på forskjellige deler av definisjonsmengden:

$$f(x) = \\begin{cases} f_1(x) & \\text{når } x \\in I_1 \\\\ f_2(x) & \\text{når } x \\in I_2 \\\\ \\vdots & \\vdots \\\\ f_n(x) & \\text{når } x \\in I_n \\end{cases}$$

der $I_1, I_2, \\ldots, I_n$ er intervaller som til sammen utgjør definisjonsmengden, og $f_1, f_2, \\ldots, f_n$ er funksjonsuttrykk.`,
    },
    {
      id: 'r1-2-4-example-enkel',
      type: 'example',
      title: 'Eksempel 1: Enkel stykkevis funksjon',
      problem: `La $f(x) = \\begin{cases} x^2 & \\text{når } x < 1 \\\\ 2x - 1 & \\text{når } x \\geq 1 \\end{cases}$

a) Finn $f(0)$, $f(1)$ og $f(3)$.
b) Skisser grafen til $f$.
c) Er $f$ kontinuerlig i $x = 1$?`,
      solution: `**Løsning:**

a) $f(0) = 0^2 = 0$ (bruker $x^2$ siden $0 < 1$)
$f(1) = 2 \\cdot 1 - 1 = 1$ (bruker $2x - 1$ siden $1 \\geq 1$)
$f(3) = 2 \\cdot 3 - 1 = 5$ (bruker $2x - 1$ siden $3 \\geq 1$)

b) For $x < 1$ tegner vi parabelen $y = x^2$. For $x \\geq 1$ tegner vi linja $y = 2x - 1$. Delene møtes i punktet $(1, 1)$.

c) Vi sjekker:
- Venstregrense: $\\lim_{x \\to 1^-} x^2 = 1$
- Høyeregrense: $\\lim_{x \\to 1^+} (2x - 1) = 1$
- Funksjonsverdi: $f(1) = 1$

Alle tre er like, så $f$ er kontinuerlig i $x = 1$.`,
    },
    {
      id: 'r1-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $f(x) = \\begin{cases} -x & \\text{når } x < 0 \\\\ x^2 & \\text{når } 0 \\leq x < 2 \\\\ 4 & \\text{når } x \\geq 2 \\end{cases}$. Regn ut funksjonsverdiene.',
        subTasks: [
          { label: 'a', task: '$f(-3)$', solution: '$f(-3) = -(-3) = 3$' },
          { label: 'b', task: '$f(0)$', solution: '$f(0) = 0^2 = 0$' },
          { label: 'c', task: '$f(1)$', solution: '$f(1) = 1^2 = 1$' },
          { label: 'd', task: '$f(2)$', solution: '$f(2) = 4$' },
          { label: 'e', task: '$f(5)$', solution: '$f(5) = 4$' },
        ],
        hints: ['Finn ut hvilket intervall $x$-verdien tilhører, og bruk det tilsvarende uttrykket'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-4-def-kontinuitet',
      type: 'definition',
      title: 'Kontinuitet i et punkt',
      content: `En funksjon $f$ er **kontinuerlig** i $x = a$ dersom:

1. $f(a)$ er definert
2. $\\lim_{x \\to a} f(x)$ eksisterer
3. $\\lim_{x \\to a} f(x) = f(a)$

For stykkevis definerte funksjoner må vi sjekke kontinuitet i **skjoetepunktene** -- der funksjonsuttrykket skifter. Funksjonen er kontinuerlig i skjoetepunktet $x = a$ dersom:

$$\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$$`,
    },
    {
      id: 'r1-2-4-example-diskontinuitet',
      type: 'example',
      title: 'Eksempel 2: Diskontinuerlig funksjon',
      problem: `Undersoesk om $g(x) = \\begin{cases} x + 1 & \\text{når } x < 2 \\\\ x^2 - 1 & \\text{når } x \\geq 2 \\end{cases}$ er kontinuerlig i $x = 2$.`,
      solution: `**Løsning:**

Vi beregner grenseverdiene fra begge sider:

- Venstregrense: $\\lim_{x \\to 2^-} (x + 1) = 3$
- Høyeregrense: $\\lim_{x \\to 2^+} (x^2 - 1) = 3$
- Funksjonsverdi: $g(2) = 2^2 - 1 = 3$

Alle tre verdiene er like ($= 3$), så $g$ **er kontinuerlig** i $x = 2$.`,
    },
    {
      id: 'r1-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgoer om funksjonen er kontinuerlig i det angitte punktet.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\begin{cases} 2x & \\text{når } x < 1 \\\\ 3 - x & \\text{når } x \\geq 1 \\end{cases}$ i $x = 1$', solution: 'Venstregrense: $2$. Høyeregrense: $2$. $f(1) = 2$. Kontinuerlig.' },
          { label: 'b', task: '$f(x) = \\begin{cases} x^2 & \\text{når } x < 2 \\\\ 5 - x & \\text{når } x \\geq 2 \\end{cases}$ i $x = 2$', solution: 'Venstregrense: $4$. Høyeregrense: $3$. Grensene er ulike, så $f$ er diskontinuerlig i $x = 2$.' },
          { label: 'c', task: '$f(x) = \\begin{cases} \\sin x & \\text{når } x \\leq 0 \\\\ x & \\text{når } x > 0 \\end{cases}$ i $x = 0$', solution: 'Venstregrense: $\\sin(0) = 0$. Høyeregrense: $0$. $f(0) = 0$. Kontinuerlig.' },
        ],
        hints: ['Beregn venstregrense, høyeregrense og funksjonsverdi separat'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bestem verdien av konstanten $a$ slik at funksjonen blir kontinuerlig overalt.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\begin{cases} ax + 1 & \\text{når } x < 2 \\\\ x^2 & \\text{når } x \\geq 2 \\end{cases}$', solution: 'Krav: $2a + 1 = 4$, så $a = \\frac{3}{2}$.' },
          { label: 'b', task: '$f(x) = \\begin{cases} x^2 + a & \\text{når } x < 1 \\\\ 3x & \\text{når } x \\geq 1 \\end{cases}$', solution: 'Krav: $1 + a = 3$, så $a = 2$.' },
        ],
        hints: ['Sett venstregrense lik høyeregrense i skjoetepunktet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-4-text-absoluttverdi',
      type: 'text',
      content: `## Absoluttverdifunksjonen som delt uttrykk

Absoluttverdifunksjonen $|x|$ er det enkleste eksempelet på en stykkevis definert funksjon:

$$|x| = \\begin{cases} x & \\text{når } x \\geq 0 \\\\ -x & \\text{når } x < 0 \\end{cases}$$

Mer generelt kan vi skrive:

$$|f(x)| = \\begin{cases} f(x) & \\text{når } f(x) \\geq 0 \\\\ -f(x) & \\text{når } f(x) < 0 \\end{cases}$$

For å fjerne absoluttverditegn må vi altså finne ut hvor uttrykket inni er positivt og hvor det er negativt.`,
    },
    {
      id: 'r1-2-4-example-absoluttverdi',
      type: 'example',
      title: 'Eksempel 3: Funksjon med absoluttverdi',
      problem: `Skriv $f(x) = |2x - 4|$ som en stykkevis definert funksjon og skisser grafen.`,
      solution: `**Løsning:**

Vi finner nullpunktet til uttrykket inni: $2x - 4 = 0 \\Rightarrow x = 2$.

- Når $x \\geq 2$: $2x - 4 \\geq 0$, så $|2x - 4| = 2x - 4$
- Når $x < 2$: $2x - 4 < 0$, så $|2x - 4| = -(2x - 4) = 4 - 2x$

Altsaa:

$$f(x) = \\begin{cases} 4 - 2x & \\text{når } x < 2 \\\\ 2x - 4 & \\text{når } x \\geq 2 \\end{cases}$$

Grafen er en V-form med bunnpunkt i $(2, 0)$.`,
    },
    {
      id: 'r1-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv funksjonen som et stykkevis definert uttrykk (uten absoluttverditegn).',
        subTasks: [
          { label: 'a', task: '$f(x) = |x - 3|$', solution: '$f(x) = \\begin{cases} 3 - x & \\text{når } x < 3 \\\\ x - 3 & \\text{når } x \\geq 3 \\end{cases}$' },
          { label: 'b', task: '$g(x) = |x| + x$', solution: '$g(x) = \\begin{cases} 0 & \\text{når } x < 0 \\\\ 2x & \\text{når } x \\geq 0 \\end{cases}$' },
          { label: 'c', task: '$h(x) = |x + 1| + |x - 1|$', solution: 'Tre intervaller: $h(x) = \\begin{cases} -2x & \\text{når } x < -1 \\\\ 2 & \\text{når } -1 \\leq x \\leq 1 \\\\ 2x & \\text{når } x > 1 \\end{cases}$' },
        ],
        hints: ['Finn nullpunktene til uttrykkene inni absoluttverditegnene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-4-text-trappefunksjoner',
      type: 'text',
      content: `## Trappefunksjoner

En **trappefunksjon** er en stykkevis konstant funksjon -- den har en fast verdi på hvert intervall. Et vanlig eksempel er **gulvfunksjonen** (heltallsdelen):

$$\\lfloor x \\rfloor = \\text{største hele tall som er} \\leq x$$

For eksempel: $\\lfloor 2{,}7 \\rfloor = 2$, $\\lfloor -1{,}3 \\rfloor = -2$, $\\lfloor 5 \\rfloor = 5$.

Trappefunksjoner har mange praktiske anvendelser: portotabeller, trinnvis skatt, parkeringsavgifter og taksameter.`,
    },
    {
      id: 'r1-2-4-example-trappefunksjon',
      type: 'example',
      title: 'Eksempel 4: Portotabell som trappefunksjon',
      problem: `Et postselskap tar betalt for brev etter vekten $w$ (i gram):

$$P(w) = \\begin{cases} 15 & \\text{når } 0 < w \\leq 20 \\\\ 25 & \\text{når } 20 < w \\leq 50 \\\\ 35 & \\text{når } 50 < w \\leq 100 \\\\ 50 & \\text{når } 100 < w \\leq 250 \\end{cases}$$

a) Hva koster det å sende et brev på 45 g?
b) Skisser grafen til $P$.`,
      solution: `**Løsning:**

a) $45 \\in (20, 50]$, så $P(45) = 25$ kr.

b) Grafen består av horisontale linjestykker. Hvert linjestykke har et aapent endepunkt til venstre (aapen sirkel) og et lukket endepunkt til høyre (fylt sirkel), unntatt det første som er lukket i begge ender for $w > 0$.`,
    },
    {
      id: 'r1-2-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-2-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En parkeringsplass tar 20 kr per paabegynt time, med maks 120 kr per doegn.',
        subTasks: [
          { label: 'a', task: 'Skriv prisen $P(t)$ som en stykkevis definert funksjon for $0 < t \\leq 24$ timer.', solution: '$P(t) = \\begin{cases} 20 & \\text{når } 0 < t \\leq 1 \\\\ 40 & \\text{når } 1 < t \\leq 2 \\\\ \\vdots \\\\ 120 & \\text{når } 5 < t \\leq 24 \\end{cases}$ eller $P(t) = \\min(20 \\lceil t \\rceil, 120)$' },
          { label: 'b', task: 'Hva er prisen for 3 timer og 15 minutter?', solution: '$t = 3{,}25$ timer, paabegynt 4. time: $P = 4 \\cdot 20 = 80$ kr.' },
        ],
        hints: ['Paabegynt time betyr at vi runder opp til nærmeste hele time'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-4-tip-grafskissering',
      type: 'tip',
      content: `**Tips for grafskissering av stykkevis funksjoner:**
1. Tegn hvert deluttrykk på sitt intervall
2. Marker skjoetepunktene tydelig med fylt sirkel (inkludert) eller aapen sirkel (ekskludert)
3. Sjekk om delene henger sammen (kontinuitet)
4. Bruk stiplet linje for å antyde fortsettelsen av hvert uttrykk utenfor sitt intervall`,
    },
    {
      id: 'r1-2-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-2-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skisser grafen og bestem verdimengden til funksjonen.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\begin{cases} x + 2 & \\text{når } x \\leq -1 \\\\ x^2 & \\text{når } -1 < x < 1 \\\\ 2 - x & \\text{når } x \\geq 1 \\end{cases}$', solution: 'Verdimengden er $(-\\infty, 1]$. Funksjonen er kontinuerlig i $x = -1$ (begge gir $1$) og $x = 1$ (begge gir $1$).' },
          { label: 'b', task: '$g(x) = \\begin{cases} -1 & \\text{når } x < 0 \\\\ 0 & \\text{når } x = 0 \\\\ 1 & \\text{når } x > 0 \\end{cases}$', solution: 'Dette er signumfunksjonen $\\text{sgn}(x)$. Verdimengden er $\\{-1, 0, 1\\}$. Diskontinuerlig i $x = 0$.' },
        ],
        hints: ['Tegn hvert stykke for seg og sett dem sammen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-2-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Loes likningene.',
        subTasks: [
          { label: 'a', task: '$|2x - 6| = x$', solution: 'For $x \\geq 3$: $2x - 6 = x \\Rightarrow x = 6$. For $x < 3$: $6 - 2x = x \\Rightarrow x = 2$. Begge er gyldige. $x = 2$ eller $x = 6$.' },
          { label: 'b', task: '$|x - 1| = |x + 3|$', solution: 'Kvadrer begge sider: $(x-1)^2 = (x+3)^2 \\Rightarrow x^2 - 2x + 1 = x^2 + 6x + 9 \\Rightarrow -8x = 8 \\Rightarrow x = -1$.' },
          { label: 'c', task: '$|x^2 - 4| = 3x$', solution: 'For $x^2 - 4 \\geq 0$: $x^2 - 3x - 4 = 0 \\Rightarrow x = 4$ (forkast $x = -1$). For $x^2 - 4 < 0$: $-x^2 + 3x + 4 = 0 \\Rightarrow x = 4$ (grense) eller $x = -1$ (ugyldig). Eneste løsning: $x = 4$.' },
        ],
        hints: ['Del opp i tilfeller basert på når uttrykket inni absoluttverditegnet er positivt/negativt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-2-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bestem konstantene $a$ og $b$.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\begin{cases} ax + b & \\text{når } x < 1 \\\\ x^2 & \\text{når } 1 \\leq x \\leq 3 \\\\ ax + b & \\text{når } x > 3 \\end{cases}$ skal være kontinuerlig overalt.', solution: 'I $x = 1$: $a + b = 1$. I $x = 3$: $3a + b = 9$. Trekk fra: $2a = 8$, så $a = 4, b = -3$.' },
        ],
        hints: ['To skjoetepunkter gir to likninger med to ukjente'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-2-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bestem alle verdier av $x$ som oppfyller ulikheten $|x^2 - 5x + 4| < 2$.',
        hints: [
          'Faktoriser: $x^2 - 5x + 4 = (x-1)(x-4)$',
          'Del opp etter fortegnet til $(x-1)(x-4)$',
          'Du får to andregradslikheter å løse',
        ],
        solution: 'Vi får $(x-1)(x-4) \\in (-2, 2)$. For $1 < x < 4$: $-(x^2-5x+4) < 2$ gir $x^2 - 5x + 2 > 0$. For $x \\leq 1$ eller $x \\geq 4$: $x^2 - 5x + 4 < 2$ gir $x^2 - 5x + 2 < 0$. Løsningene kombineres: $x \\in \\left(\\frac{5-\\sqrt{17}}{2}, 1\\right) \\cup \\left(4, \\frac{5+\\sqrt{17}}{2}\\right) \\cup \\{x \\in (1,4) : x^2 - 5x + 2 > 0\\}$.',
      },
    },
    {
      id: 'r1-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- En **stykkevis definert funksjon** bruker ulike uttrykk på ulike intervaller
- I skjoetepunktene sjekker vi **kontinuitet** ved å sammenligne venstre- og høyeregrense med funksjonsverdien
- **Absoluttverdifunksjonen** $|f(x)|$ skrives stykkevis ved å finne nullpunktene til $f(x)$
- **Trappefunksjoner** er stykkevis konstante funksjoner med mange praktiske bruksomraader
- Ved likninger og ulikheter med absoluttverdi: del opp i tilfeller`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Stykkevis definert funksjon', definition: 'Funksjon definert ved ulike uttrykk på ulike intervaller' },
    { term: 'Kontinuitet', definition: 'Funksjon der grenseverdien i et punkt er lik funksjonsverdien' },
    { term: 'Diskontinuitet', definition: 'Punkt der funksjonen ikke er kontinuerlig (sprang eller hull)' },
    { term: 'Trappefunksjon', definition: 'Stykkevis konstant funksjon' },
    { term: 'Gulvfunksjon', definition: 'Funksjonen $\\lfloor x \\rfloor$ som gir største hele tall $\\leq x$' },
  ],
};

// ============================================================================
// KAPITTEL 2.5: Gjennomsnittlig og momentan vekstfart
// ============================================================================

export const CHAPTER_R1_2_5: TextbookChapter = {
  id: 'r1-2-5',
  courseId: 'r1',
  chapterNumber: '2.5',
  title: 'Gjennomsnittlig og momentan vekstfart',
  description: 'Forstaa sammenhengen mellom sekanter og tangenter, differansekvotienten og overgangen til den deriverte.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne gjennomsnittlig vekstfart for en funksjon på et intervall',
    'tolke gjennomsnittlig vekstfart geometrisk som stigningstallet til en sekant',
    'forstaa momentan vekstfart som grenseverdi av gjennomsnittlig vekstfart',
    'bruke definisjonen av den deriverte til å finne $f\'(a)$',
    'finne tangentens likning i et punkt på grafen',
  ],
  content: [
    {
      id: 'r1-2-5-intro',
      type: 'text',
      content: `## Fra gjennomsnittlig til momentan vekstfart

I dagliglivet snakker vi ofte om gjennomsnittsfart: "Vi kjoerte 300 km på 4 timer, altså var gjennomsnittsfarten 75 km/h." Men på et bestemt tidspunkt kan farten være høyere eller lavere enn gjennomsnittet.

**Momentan vekstfart** (oeyeblikksfart) er farten i ett bestemt punkt. Matematisk definerer vi dette som en grenseverdi, og det leder oss til begrepet **derivasjon**.`,
    },
    {
      id: 'r1-2-5-def-gjennomsnittvekst',
      type: 'definition',
      title: 'Gjennomsnittlig vekstfart',
      content: `Den **gjennomsnittlige vekstfarten** til $f$ på intervallet $[a, b]$ er:

$$\\frac{\\Delta f}{\\Delta x} = \\frac{f(b) - f(a)}{b - a}$$

Geometrisk er dette **stigningstallet til sekanten** gjennom punktene $(a, f(a))$ og $(b, f(b))$ på grafen til $f$.

Med $b = a + h$ skriver vi gjerne:

$$\\frac{f(a + h) - f(a)}{h}$$

Dette kalles også **differansekvotienten** til $f$ i $x = a$.`,
    },
    {
      id: 'r1-2-5-example-gjennomsnitt',
      type: 'example',
      title: 'Eksempel 1: Gjennomsnittlig vekstfart',
      problem: `En ball kastes rett opp. Høyden etter $t$ sekunder er $h(t) = 20t - 5t^2$ (i meter).

a) Finn gjennomsnittlig vekstfart (gjennomsnittsfart) på $[1, 3]$.
b) Finn gjennomsnittlig vekstfart på $[1, 1{,}5]$.`,
      solution: `**Løsning:**

a) $h(1) = 20 - 5 = 15$, $h(3) = 60 - 45 = 15$.

$$\\frac{h(3) - h(1)}{3 - 1} = \\frac{15 - 15}{2} = 0 \\text{ m/s}$$

b) $h(1{,}5) = 30 - 11{,}25 = 18{,}75$.

$$\\frac{h(1{,}5) - h(1)}{1{,}5 - 1} = \\frac{18{,}75 - 15}{0{,}5} = 7{,}5 \\text{ m/s}$$

Gjennomsnittsfarten avhenger altså av hvilket intervall vi ser på.`,
    },
    {
      id: 'r1-2-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-2-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn gjennomsnittlig vekstfart for $f(x) = x^2$ på de gitte intervallene.',
        subTasks: [
          { label: 'a', task: '$[1, 3]$', solution: '$\\frac{9 - 1}{3 - 1} = 4$' },
          { label: 'b', task: '$[1, 2]$', solution: '$\\frac{4 - 1}{2 - 1} = 3$' },
          { label: 'c', task: '$[1, 1{,}1]$', solution: '$\\frac{1{,}21 - 1}{0{,}1} = 2{,}1$' },
          { label: 'd', task: '$[1, 1{,}01]$', solution: '$\\frac{1{,}0201 - 1}{0{,}01} = 2{,}01$' },
        ],
        hints: ['Hva ser det ut til at den momentane vekstfarten i $x = 1$ er?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-5-def-momentanvekst',
      type: 'definition',
      title: 'Momentan vekstfart (den deriverte)',
      content: `Den **momentane vekstfarten** til $f$ i $x = a$ er definert som grenseverdien:

$$f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}$$

forutsatt at grenseverdien eksisterer.

Geometrisk er $f'(a)$ **stigningstallet til tangenten** til grafen i punktet $(a, f(a))$.

Når sekantpunktet nærmer seg tangentpunktet ($h \\to 0$), går sekanten over til tangenten.`,
    },
    {
      id: 'r1-2-5-example-defderiverte',
      type: 'example',
      title: 'Eksempel 2: Derivasjon fra definisjonen',
      problem: `Bruk definisjonen til å finne $f'(x)$ når $f(x) = x^2$.`,
      solution: `**Løsning:**

$$f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h}$$

$$= \\lim_{h \\to 0} \\frac{2xh + h^2}{h} = \\lim_{h \\to 0} (2x + h) = 2x$$

Altså $f'(x) = 2x$. I $x = 1$ får vi $f'(1) = 2$, som stemmer med moenstrene vi så i oppgave 1.`,
    },
    {
      id: 'r1-2-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-2-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk definisjonen av den deriverte til å finne $f\'(x)$.',
        subTasks: [
          { label: 'a', task: '$f(x) = 3x - 1$', solution: '$f\'(x) = \\lim_{h \\to 0} \\frac{3(x+h) - 1 - (3x - 1)}{h} = \\lim_{h \\to 0} \\frac{3h}{h} = 3$' },
          { label: 'b', task: '$f(x) = x^2 + x$', solution: '$f\'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 + (x+h) - x^2 - x}{h} = \\lim_{h \\to 0} (2x + h + 1) = 2x + 1$' },
          { label: 'c', task: '$f(x) = x^3$', solution: '$f\'(x) = \\lim_{h \\to 0} \\frac{(x+h)^3 - x^3}{h} = \\lim_{h \\to 0} (3x^2 + 3xh + h^2) = 3x^2$' },
        ],
        hints: ['Utvid $(x+h)^n$, trekk fra $f(x)$, forkort $h$, og la $h \\to 0$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-5-theorem-tangentlikning',
      type: 'theorem',
      title: 'Tangentens likning',
      content: `Tangentlinjen til grafen til $f$ i punktet $(a, f(a))$ har likningen:

$$y = f(a) + f'(a)(x - a)$$

Dette er ettpunktsformelen for en rett linje gjennom $(a, f(a))$ med stigningstall $f'(a)$.`,
    },
    {
      id: 'r1-2-5-example-tangent',
      type: 'example',
      title: 'Eksempel 3: Tangentlikning',
      problem: `Finn tangentens likning til $f(x) = x^2 - 3x + 2$ i punktet der $x = 2$.`,
      solution: `**Løsning:**

Funksjonsverdi: $f(2) = 4 - 6 + 2 = 0$, så tangentpunktet er $(2, 0)$.

Derivert: $f'(x) = 2x - 3$, så $f'(2) = 1$.

Tangentens likning:
$$y = f(2) + f'(2)(x - 2) = 0 + 1 \\cdot (x - 2) = x - 2$$`,
    },
    {
      id: 'r1-2-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-2-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn tangentens likning i det angitte punktet.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2$ i $x = 3$', solution: '$f(3) = 9$, $f\'(3) = 6$. Tangent: $y = 9 + 6(x - 3) = 6x - 9$.' },
          { label: 'b', task: '$f(x) = \\frac{1}{x}$ i $x = 2$', solution: '$f(2) = \\frac{1}{2}$, $f\'(x) = -\\frac{1}{x^2}$, $f\'(2) = -\\frac{1}{4}$. Tangent: $y = \\frac{1}{2} - \\frac{1}{4}(x-2) = -\\frac{1}{4}x + 1$.' },
          { label: 'c', task: '$f(x) = \\sqrt{x}$ i $x = 4$', solution: '$f(4) = 2$, $f\'(x) = \\frac{1}{2\\sqrt{x}}$, $f\'(4) = \\frac{1}{4}$. Tangent: $y = 2 + \\frac{1}{4}(x-4) = \\frac{1}{4}x + 1$.' },
        ],
        hints: ['Bruk formelen $y = f(a) + f\'(a)(x - a)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-5-note-geometrisk',
      type: 'note',
      title: 'Geometrisk tolkning',
      content: `Overgangen fra sekant til tangent er noekkelen til forstaaelsen av derivasjon:

- **Sekanten** gjennom $(a, f(a))$ og $(a+h, f(a+h))$ har stigningstall $\\frac{f(a+h) - f(a)}{h}$
- Når $h \\to 0$, nærmer det andre punktet seg det første
- Sekanten "vrir seg" mot tangenten
- **Tangenten** har stigningstall $f'(a) = \\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$

Denne overgangen er fundamentet for hele differensialregningen.`,
    },
    {
      id: 'r1-2-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-2-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk definisjonen av den deriverte.',
        subTasks: [
          { label: 'a', task: 'Vis at $f\'(x) = \\frac{1}{2\\sqrt{x}}$ når $f(x) = \\sqrt{x}$, for $x > 0$.', solution: '$\\lim_{h \\to 0} \\frac{\\sqrt{x+h} - \\sqrt{x}}{h} = \\lim_{h \\to 0} \\frac{(x+h) - x}{h(\\sqrt{x+h}+\\sqrt{x})} = \\frac{1}{2\\sqrt{x}}$ (konjugatsetningen).' },
          { label: 'b', task: 'Vis at $f\'(x) = -\\frac{1}{x^2}$ når $f(x) = \\frac{1}{x}$, for $x \\neq 0$.', solution: '$\\lim_{h \\to 0} \\frac{\\frac{1}{x+h} - \\frac{1}{x}}{h} = \\lim_{h \\to 0} \\frac{x - (x+h)}{hx(x+h)} = \\lim_{h \\to 0} \\frac{-1}{x(x+h)} = -\\frac{1}{x^2}$.' },
        ],
        hints: ['For a): Gang med konjugaten $\\frac{\\sqrt{x+h}+\\sqrt{x}}{\\sqrt{x+h}+\\sqrt{x}}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-2-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et firma selger $x$ enheter av et produkt. Inntektsfunksjonen er $I(x) = 500x - 2x^2$ (i kroner).',
        subTasks: [
          { label: 'a', task: 'Finn gjennomsnittlig inntektsøkning per enhet når produksjonen økes fra 50 til 60 enheter.', solution: '$\\frac{I(60) - I(50)}{10} = \\frac{(30000 - 7200) - (25000 - 5000)}{10} = \\frac{22800 - 20000}{10} = 280$ kr/enhet.' },
          { label: 'b', task: 'Finn den momentane inntektsendringen når $x = 50$ (marginalinntekten).', solution: '$I\'(x) = 500 - 4x$, så $I\'(50) = 500 - 200 = 300$ kr/enhet.' },
          { label: 'c', task: 'For hvilken verdi av $x$ er marginalinntekten lik null?', solution: '$500 - 4x = 0 \\Rightarrow x = 125$. Dette er produksjonsnivaaet som gir maksimal inntekt.' },
        ],
        hints: ['Marginalinntekt er den deriverte av inntektsfunksjonen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-2-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-2-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'La $f(x) = x^2 + 1$. Finn ligningen for den rette linjen gjennom $(0, -3)$ som er tangent til grafen til $f$.',
        hints: [
          'La tangentpunktet være $(a, a^2 + 1)$',
          'Tangenten har stigningstall $f\'(a) = 2a$',
          'Tangenten går også gjennom $(0, -3)$',
        ],
        solution: 'Tangent i $(a, a^2+1)$: $y = a^2 + 1 + 2a(x - a) = 2ax - a^2 + 1$. Går gjennom $(0,-3)$: $-3 = -a^2 + 1 \\Rightarrow a^2 = 4 \\Rightarrow a = \\pm 2$. To tangenter: $y = 4x - 3$ og $y = -4x - 3$.',
      },
    },
    {
      id: 'r1-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Gjennomsnittlig vekstfart** = stigningstall til sekant = $\\frac{f(b)-f(a)}{b-a}$
- **Momentan vekstfart** = stigningstall til tangent = $f'(a) = \\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$
- Overgangen fra sekant til tangent er grunnlaget for derivasjon
- **Tangentens likning**: $y = f(a) + f'(a)(x-a)$
- Den deriverte gir oss fart, marginalinntekt og andre endringsrater`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Gjennomsnittlig vekstfart', definition: 'Endring i funksjonsverdi per endring i $x$: $\\frac{\\Delta f}{\\Delta x}$' },
    { term: 'Differansekvotient', definition: 'Uttrykket $\\frac{f(a+h)-f(a)}{h}$, stigningstallet til sekanten' },
    { term: 'Momentan vekstfart', definition: 'Grenseverdien av differansekvotienten når $h \\to 0$' },
    { term: 'Sekant', definition: 'Rett linje gjennom to punkter på grafen' },
    { term: 'Tangent', definition: 'Rett linje som beroerer grafen i nøyaktig ett punkt, med stigningstall $f\'(a)$' },
  ],
};

// ============================================================================
// KAPITTEL 3.6: Numerisk derivasjon med digitale verktoey
// ============================================================================

export const CHAPTER_R1_3_6: TextbookChapter = {
  id: 'r1-3-6',
  courseId: 'r1',
  chapterNumber: '3.6',
  title: 'Numerisk derivasjon med digitale verktoey',
  description: 'Lær å tilnærme den deriverte numerisk med differansekvotienter, regneark og CAS-verktoey, og forstaa feilkildene.',
  estimatedMinutes: 45,
  competenceGoals: [
    'tilnærme den deriverte numerisk med fremover-, bakover- og sentraldifferanse',
    'bruke regneark til å beregne numeriske deriverte',
    'bruke CAS-verktoey for symbolsk og numerisk derivasjon',
    'vurdere noeyyaktigheten av numeriske tilnærminger',
    'sammenligne analytisk og numerisk derivasjon',
  ],
  content: [
    {
      id: 'r1-3-6-intro',
      type: 'text',
      content: `## Numerisk derivasjon

Ikke alle funksjoner kan deriveres analytisk på en enkel maate. I praksis har vi ofte bare maaledata (tabellverdier) uten et eksplisitt funksjonsuttrykk. Da må vi tilnærme den deriverte **numerisk**.

Ideen er enkel: vi bruker differansekvotienten $\\frac{f(a+h) - f(a)}{h}$ med en liten, men endelig $h$ i stedet for å ta grenseverdien $h \\to 0$. Spoersmaalet er: hvilken differanseformel gir best tilnærming?`,
    },
    {
      id: 'r1-3-6-def-differanseformler',
      type: 'definition',
      title: 'Tre differanseformler',
      content: `For en funksjon $f$ i $x = a$ med steglengde $h > 0$:

**Framoverdifferanse:**
$$f'(a) \\approx \\frac{f(a+h) - f(a)}{h}$$

**Bakoverdifferanse:**
$$f'(a) \\approx \\frac{f(a) - f(a-h)}{h}$$

**Sentraldifferanse:**
$$f'(a) \\approx \\frac{f(a+h) - f(a-h)}{2h}$$

Sentraldifferansen er som regel den mest noeyyaktige av de tre.`,
    },
    {
      id: 'r1-3-6-example-sammenligning',
      type: 'example',
      title: 'Eksempel 1: Sammenligning av differanseformler',
      problem: `La $f(x) = x^3$. Tilnaerm $f'(2) = 12$ med $h = 0{,}1$ ved hjelp av de tre differanseformlene.`,
      solution: `**Løsning:**

$f(2) = 8$, $f(2{,}1) = 9{,}261$, $f(1{,}9) = 6{,}859$.

**Framoverdifferanse:**
$$\\frac{9{,}261 - 8}{0{,}1} = 12{,}61 \\quad \\text{(feil: } 0{,}61\\text{)}$$

**Bakoverdifferanse:**
$$\\frac{8 - 6{,}859}{0{,}1} = 11{,}41 \\quad \\text{(feil: } 0{,}59\\text{)}$$

**Sentraldifferanse:**
$$\\frac{9{,}261 - 6{,}859}{0{,}2} = 12{,}01 \\quad \\text{(feil: } 0{,}01\\text{)}$$

Sentraldifferansen gir en mye bedre tilnærming!`,
    },
    {
      id: 'r1-3-6-theorem-feilorden',
      type: 'theorem',
      title: 'Feilorden for differanseformlene',
      content: `Feilen i tilnærmingene har følgende størrelseorden:

- **Framoverdifferanse:** Feil $\\sim O(h)$ (proporsjonalt med $h$)
- **Bakoverdifferanse:** Feil $\\sim O(h)$ (proporsjonalt med $h$)
- **Sentraldifferanse:** Feil $\\sim O(h^2)$ (proporsjonalt med $h^2$)

Det betyr at når vi halverer $h$:
- Framover/bakover: feilen halveres omtrent
- Sentral: feilen reduseres til omtrent en fjerdedel

Sentraldifferansen konvergerer altså mye raskere mot den eksakte verdien.`,
    },
    {
      id: 'r1-3-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-3-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $f(x) = \\sin x$. Tilnaerm $f\'(\\pi/4)$ med sentraldifferanse.',
        subTasks: [
          { label: 'a', task: 'Bruk $h = 0{,}1$.', solution: '$\\frac{\\sin(\\pi/4 + 0{,}1) - \\sin(\\pi/4 - 0{,}1)}{0{,}2} \\approx 0{,}70356$. Eksakt: $\\cos(\\pi/4) \\approx 0{,}70711$. Feil $\\approx 0{,}004$.' },
          { label: 'b', task: 'Bruk $h = 0{,}01$.', solution: '$\\frac{\\sin(\\pi/4 + 0{,}01) - \\sin(\\pi/4 - 0{,}01)}{0{,}02} \\approx 0{,}70707$. Feil $\\approx 0{,}00004$.' },
          { label: 'c', task: 'Sammenlign feilene. Stemmer $O(h^2)$-estimatet?', solution: 'Når $h$ går fra $0{,}1$ til $0{,}01$ (faktor 10), går feilen fra $0{,}004$ til $0{,}00004$ (faktor 100). Ja, $O(h^2)$ stemmer.' },
        ],
        hints: ['Bruk kalkulator eller CAS for å beregne sinusverdiene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-3-6-text-regneark',
      type: 'text',
      content: `## Numerisk derivasjon med regneark

I et regneark kan vi sette opp numerisk derivasjon systematisk:

| A | B | C |
|---|---|---|
| $x$ | $f(x)$ | $f'(x) \\approx$ |
| $a - h$ | $=f(A2)$ | |
| $a$ | $=f(A3)$ | $=(B4-B2)/(A4-A2)$ |
| $a + h$ | $=f(A4)$ | |

Kolonne C bruker sentraldifferanse: $\\frac{f(a+h) - f(a-h)}{2h}$.

**Eksempel i regneark-syntaks:**
- Celle A2: \`=A3-0.001\`
- Celle B2: \`=A2^3\` (for $f(x) = x^3$)
- Celle C3: \`=(B4-B2)/(A4-A2)\``,
    },
    {
      id: 'r1-3-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-3-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp et regneark for å tilnærme den deriverte.',
        subTasks: [
          { label: 'a', task: 'Lag en tabell med $x$-verdier fra $0$ til $5$ med steglengde $0{,}5$ for $f(x) = x^2 - 3x + 1$. Beregn sentraldifferansen i hvert indre punkt.', solution: 'I hvert punkt $x_i$ (unntatt endepunktene): $f\'(x_i) \\approx \\frac{f(x_{i+1}) - f(x_{i-1})}{2 \\cdot 0{,}5}$. Sammenlign med $f\'(x) = 2x - 3$.' },
          { label: 'b', task: 'Gjenta med steglengde $0{,}1$. Hvor mye bedre blir tilnærmingen?', solution: 'Feilen blir omtrent $25$ ganger mindre (steget er $5$ ganger mindre, $O(h^2)$).' },
        ],
        hints: ['Sentraldifferansen i endepunktene er ikke definert -- bruk fremover- eller bakoverdifferanse der'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-3-6-text-cas',
      type: 'text',
      content: `## Numerisk og symbolsk derivasjon med CAS

CAS-verktoey (Computer Algebra System) kan både:

1. **Derivere symbolsk** -- finne det eksakte uttrykket for $f'(x)$
2. **Beregne numerisk** -- gi en tilnærmet verdi av $f'(a)$

I GeoGebra CAS:
- Symbolsk: \`Derivative[x^3 + sin(x)]\` gir \`3x^2 + cos(x)\`
- Numerisk: \`NDerivative[x^3 + sin(x), 2]\` gir en numerisk tilnærming av $f'(2)$

I Python med SymPy:
\`\`\`python
from sympy import *
x = symbols('x')
f = x**3 + sin(x)
diff(f, x)        # Symbolsk: 3*x**2 + cos(x)
diff(f, x).subs(x, 2).evalf()  # Numerisk verdi i x=2
\`\`\``,
    },
    {
      id: 'r1-3-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-3-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk CAS eller regneark til å løse oppgavene.',
        subTasks: [
          { label: 'a', task: 'Finn $f\'(x)$ symbolsk for $f(x) = x \\cdot e^{-x^2}$.', solution: '$f\'(x) = e^{-x^2}(1 - 2x^2)$' },
          { label: 'b', task: 'Bruk numerisk derivasjon (sentraldifferanse med $h = 0{,}001$) til å tilnærme $f\'(1)$.', solution: '$f\'(1) = e^{-1}(1 - 2) = -e^{-1} \\approx -0{,}3679$. Numerisk: $\\frac{f(1{,}001) - f(0{,}999)}{0{,}002} \\approx -0{,}3679$.' },
          { label: 'c', task: 'Sammenlign det numeriske og analytiske svaret.', solution: 'De stemmer overens til minst 4 desimaler med $h = 0{,}001$.' },
        ],
        hints: ['Produktregelen: $(u \\cdot v)\' = u\' \\cdot v + u \\cdot v\'$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-3-6-warning-avrunding',
      type: 'warning',
      title: 'Avrundingsfeil ved veldig liten h',
      content: `Man skulle tro at mindre $h$ alltid gir bedre resultat. Men i praksis får vi problemer med **avrundingsfeil** når $h$ er veldig liten:

$$\\frac{f(a + h) - f(a)}{h} \\approx \\frac{\\text{nesten like tall}}{\\text{lite tall}}$$

Når $f(a+h) \\approx f(a)$, taper vi gjeldende siffer i subtraksjonen. For dobbeltpresisjon (\`float64\`) er $h \\approx 10^{-8}$ typisk et bra valg for sentraldifferanse.

**Tommelregel:** Bruk $h \\approx \\sqrt{\\varepsilon}$ for framover/bakover og $h \\approx \\varepsilon^{1/3}$ for sentral, der $\\varepsilon \\approx 10^{-16}$ er maskinpresisjonen.`,
    },
    {
      id: 'r1-3-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-3-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersoesk effekten av steglengde på noeyyaktigheten.',
        subTasks: [
          { label: 'a', task: 'La $f(x) = e^x$. Beregn sentraldifferansen for $f\'(1) = e$ med $h = 10^{-1}, 10^{-2}, \\ldots, 10^{-8}$. Lag en tabell over $h$ og feil.', solution: 'Feilen minker som $O(h^2)$ ned til $h \\approx 10^{-5}$, deretter begynner avrundingsfeil å dominere.' },
          { label: 'b', task: 'For hvilken $h$ får du den minste feilen?', solution: 'Typisk rundt $h \\approx 10^{-5}$ til $10^{-6}$ for sentraldifferanse i dobbeltpresisjon.' },
        ],
        hints: ['Bruk Python eller regneark for beregningene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-3-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-3-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gitt tabellverdier, tilnaerm den deriverte.',
        subTasks: [
          { label: 'a', task: 'Tabellen viser $f(x)$: $f(1) = 3{,}0$, $f(1{,}5) = 4{,}2$, $f(2) = 5{,}8$, $f(2{,}5) = 7{,}9$, $f(3) = 10{,}5$. Tilnaerm $f\'(2)$.', solution: 'Sentraldifferanse: $f\'(2) \\approx \\frac{f(2{,}5) - f(1{,}5)}{1{,}0} = \\frac{7{,}9 - 4{,}2}{1{,}0} = 3{,}7$.' },
          { label: 'b', task: 'Tilnaerm $f\'(1)$ og $f\'(3)$.', solution: '$f\'(1) \\approx \\frac{f(1{,}5) - f(1)}{0{,}5} = 2{,}4$ (framoverdifferanse). $f\'(3) \\approx \\frac{f(3) - f(2{,}5)}{0{,}5} = 5{,}2$ (bakoverdifferanse).' },
        ],
        hints: ['I endepunktene kan du bare bruke framover- eller bakoverdifferanse'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-3-6-tip-valg',
      type: 'tip',
      content: `**Når bruker vi numerisk vs. analytisk derivasjon?**

- **Analytisk** (for haand eller CAS): Når vi har et funksjonsuttrykk og trenger et eksakt svar. Gir fullstendig informasjon om $f'(x)$ for alle $x$.
- **Numerisk**: Når vi bare har tabelldata, når funksjonsuttrykket er for komplisert, eller når vi trenger en rask tilnærming i ett punkt.

I praksis brukes ofte en kombinasjon: CAS finner det analytiske uttrykket, som så evalueres numerisk i oenskede punkter.`,
    },
    {
      id: 'r1-3-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Den deriverte kan tilnærmes numerisk med differansekvotienter
- **Sentraldifferansen** $\\frac{f(a+h) - f(a-h)}{2h}$ er mest noeyyaktig ($O(h^2)$-feil)
- Regneark og CAS er nyttige verktoey for numerisk derivasjon
- For liten $h$ gir avrundingsfeil -- det finnes en optimal steglengde
- Numerisk derivasjon brukes når analytisk derivasjon er upraktisk eller umulig`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Framoverdifferanse', definition: 'Tilnaerming $\\frac{f(a+h)-f(a)}{h}$ med feil $O(h)$' },
    { term: 'Bakoverdifferanse', definition: 'Tilnaerming $\\frac{f(a)-f(a-h)}{h}$ med feil $O(h)$' },
    { term: 'Sentraldifferanse', definition: 'Tilnaerming $\\frac{f(a+h)-f(a-h)}{2h}$ med feil $O(h^2)$' },
    { term: 'Avrundingsfeil', definition: 'Feil som oppstår når datamaskinen representerer tall med begrenset presisjon' },
    { term: 'CAS', definition: 'Computer Algebra System -- programvare for symbolsk matematikk' },
  ],
};

// ============================================================================
// KAPITTEL 4.9: Optimering i praksis
// ============================================================================

export const CHAPTER_R1_4_9: TextbookChapter = {
  id: 'r1-4-9',
  courseId: 'r1',
  chapterNumber: '4.9',
  title: 'Optimering i praksis',
  description: 'Loes optimeringsproblemer fra geometri, økonomi og naturvitenskap ved hjelp av derivasjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'sette opp funksjonsuttrykk fra tekstoppgaver med optimeringskrav',
    'bruke derivasjon til å finne maksimums- og minimumsverdier',
    'løse geometriske optimeringsproblemer (areal, volum, omkrets)',
    'anvende optimering på økonomiske og naturvitenskapelige problemer',
    'verifisere at løsningen er et maksimum eller minimum',
  ],
  content: [
    {
      id: 'r1-4-9-intro',
      type: 'text',
      content: `## Optimering -- å finne det beste

Mange praktiske problemer handler om å finne den **beste** løsningen: størst volum, minst materialbruk, hoeyest fortjeneste, kortest reisetid. Derivasjon gir oss et kraftig verktoey for å løse slike problemer systematisk.

Noekkelen er aa:
1. Formulere problemet som en funksjon av een variabel
2. Derivere og finne kritiske punkter
3. Avgoere om det er maks eller min
4. Tolke svaret i kontekst`,
    },
    {
      id: 'r1-4-9-text-fremgangsmaate',
      type: 'text',
      content: `## Systematisk fremgangsmaate

**Steg 1: Forstaa problemet**
Les oppgaven noeye. Tegn en figur. Identifiser hva som skal optimeres og hvilke begrensninger som gjelder.

**Steg 2: Innfør variable**
La $x$ betegne den ukjente størrelsen. Uttrykk maalfunksjonen $f(x)$ (det vi vil optimere) og finn definisjonsmengden.

**Steg 3: Deriver og finn kritiske punkter**
Sett $f'(x) = 0$ og loes. Sjekk også endepunktene av definisjonsmengden.

**Steg 4: Klassifiser**
Bruk fortegnsskjema for $f'(x)$, andrederivert-testen, eller sammenlign funksjonsverdier i kritiske punkter og endepunkter.

**Steg 5: Svar**
Gi svaret med riktig enhet og sjekk at det er rimelig.`,
    },
    {
      id: 'r1-4-9-example-boks',
      type: 'example',
      title: 'Eksempel 1: Aapen boks',
      problem: `Fra et rektangulaert ark papp med maal $20 \\text{ cm} \\times 30 \\text{ cm}$ skal vi lage en aapen boks ved å klippe ut like store kvadrater fra hjoernene og brette opp kantene. Hvilken størrelse på kvadratene gir størst mulig volum?`,
      solution: `**Løsning:**

**Steg 1:** La $x$ cm være sidelengden til kvadratene som klippes ut. Da får boksen:
- Lengde: $30 - 2x$
- Bredde: $20 - 2x$
- Hoeyde: $x$

**Steg 2:** Volumet er:
$$V(x) = x(30 - 2x)(20 - 2x) = 4x^3 - 100x^2 + 600x$$

Definisjonsmengde: $0 < x < 10$ (bredden må være positiv).

**Steg 3:** $V'(x) = 12x^2 - 200x + 600 = 4(3x^2 - 50x + 150) = 0$

$$x = \\frac{50 \\pm \\sqrt{2500 - 1800}}{6} = \\frac{50 \\pm \\sqrt{700}}{6} \\approx \\frac{50 \\pm 26{,}46}{6}$$

$x_1 \\approx 3{,}92$ cm (gyldig) eller $x_2 \\approx 12{,}74$ cm (utenfor $[0, 10]$).

**Steg 4:** $V''(x) = 24x - 200$. $V''(3{,}92) = 24 \\cdot 3{,}92 - 200 = -105{,}9 < 0$ (maksimum).

**Steg 5:** $V(3{,}92) \\approx 3{,}92 \\cdot 22{,}16 \\cdot 12{,}16 \\approx 1056$ cm$^3$.`,
    },
    {
      id: 'r1-4-9-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-4-9-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et gjerde på 120 m skal avgrense et rektangulaert omraade langs en elv (gjerdet trengs ikke langs elven). Finn dimensjonene som gir størst mulig areal.',
        hints: [
          'La bredden (vinkelrett på elven) være $x$',
          'Da er lengden (langs elven) $120 - 2x$',
          'Arealet blir $A(x) = x(120 - 2x)$',
        ],
        solution: '$A(x) = 120x - 2x^2$, $A\'(x) = 120 - 4x = 0$, så $x = 30$ m. Lengde: $120 - 60 = 60$ m. Maks areal: $30 \\cdot 60 = 1800$ m$^2$. $A\'\'(30) = -4 < 0$ bekrefter maks.',
      },
    },
    {
      id: 'r1-4-9-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-4-9-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bonde vil lage to like store, sammenhengende rektangulære innhegninger med totalt 300 m gjerde. Finn dimensjonene som gir størst totalt areal.',
        hints: [
          'Tegn figuren: to rektangler side om side deler en felles vegg',
          'La $x$ være bredden og $y$ lengden. Gjerdeforbruk: $3x + 2y = 300$',
        ],
        solution: '$y = \\frac{300 - 3x}{2}$. $A = 2xy = 2x \\cdot \\frac{300-3x}{2} = 300x - 3x^2$. $A\'(x) = 300 - 6x = 0 \\Rightarrow x = 50$ m. $y = 75$ m. Areal: $2 \\cdot 50 \\cdot 75 = 7500$ m$^2$.',
      },
    },
    {
      id: 'r1-4-9-example-sylinder',
      type: 'example',
      title: 'Eksempel 2: Optimal sylinder',
      problem: `En lukket sylindrisk boks skal ha volum $1$ liter ($1000$ cm$^3$). Finn radius og hoeyde som gir minst mulig overflate (materialbruk).`,
      solution: `**Løsning:**

**Steg 1-2:** La $r$ være radius og $h$ hoeyde. Volumkravet gir:
$$\\pi r^2 h = 1000 \\quad \\Rightarrow \\quad h = \\frac{1000}{\\pi r^2}$$

Overflaten er:
$$S(r) = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + 2\\pi r \\cdot \\frac{1000}{\\pi r^2} = 2\\pi r^2 + \\frac{2000}{r}$$

Definisjonsmengde: $r > 0$.

**Steg 3:**
$$S'(r) = 4\\pi r - \\frac{2000}{r^2} = 0 \\quad \\Rightarrow \\quad 4\\pi r^3 = 2000 \\quad \\Rightarrow \\quad r = \\sqrt[3]{\\frac{500}{\\pi}} \\approx 5{,}42 \\text{ cm}$$

**Steg 4:** $S''(r) = 4\\pi + \\frac{4000}{r^3} > 0$ for alle $r > 0$, så dette er et minimum.

**Steg 5:** $h = \\frac{1000}{\\pi \\cdot 5{,}42^2} \\approx 10{,}84$ cm.

Vi merker at $h = 2r$ -- den optimale sylinderen har hoeyde lik diameteren!`,
    },
    {
      id: 'r1-4-9-note-sylinder',
      type: 'note',
      title: 'Generelt resultat for sylinderen',
      content: `For en lukket sylinder med gitt volum er overflaten minst når $h = 2r$ (høyden er lik diameteren).

Dette kan vises generelt: med $V = \\pi r^2 h$ får vi $h = \\frac{V}{\\pi r^2}$, og

$$S'(r) = 0 \\quad \\Rightarrow \\quad r^3 = \\frac{V}{2\\pi} \\quad \\Rightarrow \\quad h = \\frac{V}{\\pi r^2} = 2r$$

Brusboker i virkeligheten avviker litt fra dette pga. produksjonskostnader (bunn og lokk er dyrere enn sidene).`,
    },
    {
      id: 'r1-4-9-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-4-9-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En aapen sylindrisk boks (uten lokk) skal ha volum 500 cm$^3$. Finn dimensjonene som gir minst materialbruk.',
        hints: [
          'Overflaten av aapen sylinder: $S = \\pi r^2 + 2\\pi rh$',
          'Sett inn $h = \\frac{500}{\\pi r^2}$',
        ],
        solution: '$S(r) = \\pi r^2 + \\frac{1000}{r}$. $S\'(r) = 2\\pi r - \\frac{1000}{r^2} = 0 \\Rightarrow r = \\sqrt[3]{\\frac{500}{\\pi}} \\approx 5{,}42$ cm. $h = \\frac{500}{\\pi \\cdot 5{,}42^2} \\approx 5{,}42$ cm. For aapen sylinder: $h = r$.',
      },
    },
    {
      id: 'r1-4-9-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-4-9-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et rektangel er innskrevet i en halvsirkel med radius $r = 10$. Bunnlinjen ligger langs diameteren. Finn det rektangelet som har størst areal.',
        hints: [
          'La halvparten av bunnlinjen være $x$. Høyden er $y = \\sqrt{100 - x^2}$',
          'Arealet: $A = 2x \\cdot \\sqrt{100 - x^2}$',
        ],
        solution: '$A(x) = 2x\\sqrt{100 - x^2}$. Enklere: maksimer $A^2 = 4x^2(100 - x^2)$. La $u = x^2$: $g(u) = 4u(100 - u) = 400u - 4u^2$. $g\'(u) = 400 - 8u = 0 \\Rightarrow u = 50$, så $x = 5\\sqrt{2}$, $y = 5\\sqrt{2}$. Maks areal: $A = 2 \\cdot 5\\sqrt{2} \\cdot 5\\sqrt{2} = 100$.',
      },
    },
    {
      id: 'r1-4-9-example-okonomi',
      type: 'example',
      title: 'Eksempel 3: Økonomisk optimering',
      problem: `Et firma produserer $x$ enheter per dag. Kostnadsfunksjonen er $K(x) = 0{,}01x^3 - 0{,}6x^2 + 15x + 200$ (kroner) og salgsprisen er $50$ kr per enhet.

a) Finn fortjenestefunksjonen.
b) Hvor mange enheter gir størst fortjeneste?
c) Hva er den største fortjenesten?`,
      solution: `**Løsning:**

a) Inntekt: $I(x) = 50x$. Fortjeneste:
$$F(x) = I(x) - K(x) = 50x - 0{,}01x^3 + 0{,}6x^2 - 15x - 200 = -0{,}01x^3 + 0{,}6x^2 + 35x - 200$$

b) $F'(x) = -0{,}03x^2 + 1{,}2x + 35 = 0$

$$x = \\frac{-1{,}2 \\pm \\sqrt{1{,}44 + 4{,}2}}{-0{,}06} = \\frac{-1{,}2 \\pm \\sqrt{5{,}64}}{-0{,}06}$$

$x \\approx 50$ (den positive løsningen innenfor rimelig produksjon).

c) $F(50) = -0{,}01 \\cdot 125000 + 0{,}6 \\cdot 2500 + 35 \\cdot 50 - 200 = -1250 + 1500 + 1750 - 200 = 1800$ kr.`,
    },
    {
      id: 'r1-4-9-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-4-9-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Økonomisk optimering.',
        subTasks: [
          { label: 'a', task: 'Et firma har kostnadsfunksjonen $K(x) = 2x^2 + 100x + 5000$ og inntektsfunksjonen $I(x) = 500x - x^2$. Finn produksjonen som gir størst fortjeneste.', solution: '$F(x) = -3x^2 + 400x - 5000$. $F\'(x) = -6x + 400 = 0 \\Rightarrow x \\approx 66{,}7$. Runder til $x = 67$ enheter.' },
          { label: 'b', task: 'Hva er grensekostnaden når $x = 67$? Hva er grenseinntekten?', solution: '$K\'(67) = 4 \\cdot 67 + 100 = 368$ kr. $I\'(67) = 500 - 2 \\cdot 67 = 366$ kr. De er tilnærmet like, som forventet ved optimal produksjon.' },
        ],
        hints: ['Ved optimal produksjon er grenseinntekt = grensekostnad, dvs. $I\'(x) = K\'(x)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'r1-4-9-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-4-9-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn det punktet på parabelen $y = x^2$ som har kortest avstand til punktet $(3, 0)$.',
        hints: [
          'Avstanden fra $(x, x^2)$ til $(3, 0)$ er $d = \\sqrt{(x-3)^2 + x^4}$',
          'Det er enklere å minimere $d^2 = (x-3)^2 + x^4$',
        ],
        solution: 'La $g(x) = (x-3)^2 + x^4$. $g\'(x) = 2(x-3) + 4x^3 = 4x^3 + 2x - 6 = 2(2x^3 + x - 3)$. Vi ser at $x = 1$ er en løsning (innsetting). Faktorisering: $2x^3 + x - 3 = (x-1)(2x^2+2x+3)$, der $2x^2+2x+3 > 0$ for alle $x$. Altså $x = 1$. Punktet er $(1, 1)$ med avstand $\\sqrt{4+1} = \\sqrt{5}$.',
      },
    },
    {
      id: 'r1-4-9-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-4-9-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kjegle skal innskrivast i en kule med radius $R$. Finn kjeglen med størst volum.',
        hints: [
          'La kjeglen ha hoeyde $h$ og grunnflateradius $r$. Kulesenteret er i høyden $R$ over bunnflaten',
          'Pytagoras: $r^2 = R^2 - (h - R)^2 = 2Rh - h^2$',
          'Volumet: $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi h}{3}(2Rh - h^2)$',
        ],
        solution: '$V(h) = \\frac{\\pi}{3}(2Rh^2 - h^3)$, der $0 < h < 2R$. $V\'(h) = \\frac{\\pi}{3}(4Rh - 3h^2) = \\frac{\\pi h}{3}(4R - 3h) = 0$. Altså $h = \\frac{4R}{3}$. Da $r^2 = 2R \\cdot \\frac{4R}{3} - \\frac{16R^2}{9} = \\frac{8R^2}{9}$. $V_{\\text{maks}} = \\frac{\\pi}{3} \\cdot \\frac{8R^2}{9} \\cdot \\frac{4R}{3} = \\frac{32\\pi R^3}{81}$.',
      },
    },
    {
      id: 'r1-4-9-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-4-9-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'En lyskaster står 3 m fra en vegg. En person som er 1,8 m høy går mot veggen med fart 1 m/s. Når personen er 2 m fra veggen, hvor fort vokser skyggenlengden på veggen?',
        hints: [
          'Bruk liknende trekanter',
          'La $x$ være personens avstand fra lyskasteren og $s$ skyggenlengden på veggen',
          'Deriver med hensyn på tid',
        ],
        solution: 'Liknende trekanter: $\\frac{s}{3} = \\frac{1{,}8}{x}$, der $x$ er avstand fra lyskaster til person. $s = \\frac{5{,}4}{x}$. Personen er 2 m fra veggen, altså $x = 1$ m fra lyskasteren. $\\frac{ds}{dt} = -\\frac{5{,}4}{x^2} \\cdot \\frac{dx}{dt}$. Personen går mot veggen (bort fra lyskasteren), så $\\frac{dx}{dt} = 1$ m/s. $\\frac{ds}{dt} = -\\frac{5{,}4}{1} \\cdot 1 = -5{,}4$ m/s. Skyggenlengden minker med $5{,}4$ m/s.',
      },
    },
    {
      id: 'r1-4-9-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-4-9-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et 4 m langt bord skal bæres rundt et hjoerne i en korridor der begge gangene er 2 m brede. Bordet holdes vannrett. Vis at bordet akkurat går rundt hjoernet.',
        hints: [
          'Modeller bordets posisjon med en vinkel $\\theta$ som bordet danner med den ene veggen',
          'Lengden av en stang som rekker fra vegg til vegg gjennom hjoernet: $L(\\theta) = \\frac{2}{\\sin\\theta} + \\frac{2}{\\cos\\theta}$',
          'Finn minimumsverdien av $L(\\theta)$ for $0 < \\theta < \\pi/2$',
        ],
        solution: '$L(\\theta) = \\frac{2}{\\sin\\theta} + \\frac{2}{\\cos\\theta}$. $L\'(\\theta) = -\\frac{2\\cos\\theta}{\\sin^2\\theta} + \\frac{2\\sin\\theta}{\\cos^2\\theta} = 0$. Gir $\\sin^3\\theta = \\cos^3\\theta$, så $\\theta = \\pi/4$. $L_{\\min} = \\frac{2}{\\sin(\\pi/4)} + \\frac{2}{\\cos(\\pi/4)} = 4\\sqrt{2} \\approx 5{,}66$ m. Siden $4 < 4\\sqrt{2}$, går bordet rundt.',
      },
    },
    {
      id: 'r1-4-9-warning-endepunkter',
      type: 'warning',
      title: 'Husk å sjekke endepunktene!',
      content: `Når definisjonsmengden er et lukket intervall $[a, b]$, kan maksimum og minimum like gjerne ligge i endepunktene som i de kritiske punktene.

**Strategi for lukket intervall:**
1. Finn alle kritiske punkter ($f'(x) = 0$) i $(a, b)$
2. Beregn $f$ i alle kritiske punkter og i endepunktene $a$ og $b$
3. Stoerste verdi = globalt maksimum, minste verdi = globalt minimum

For åpne intervaller eller ubegrensede omraader må vi argumentere mer omhyggelig (f.eks. med $f(x) \\to \\infty$ ved grensene).`,
    },
    {
      id: 'r1-4-9-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-4-9-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn globalt maks og min for $f(x) = x^3 - 3x + 1$ på intervallet $[-2, 3]$.',
        hints: ['Finn kritiske punkter, beregn funksjonsverdier i alle kandidatpunkter'],
        solution: '$f\'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$. $f(-2) = -1$, $f(-1) = 3$, $f(1) = -1$, $f(3) = 19$. Globalt maks: $f(3) = 19$. Globalt min: $f(-2) = f(1) = -1$.',
      },
    },
    {
      id: 'r1-4-9-tip-modellering',
      type: 'tip',
      content: `**Tips for optimeringsproblemer:**
- **Tegn alltid en figur** -- det hjelper å forstaa sammenhengen mellom variablene
- **Navngi variablene tydelig** og skriv ned alle betingelser
- Når maalfunksjonen har to variable, bruk betingelsen til å **eliminere en variabel**
- Sjekk at svaret er **rimelig** -- får du et fornuftig tall med riktig enhet?
- Husk at $f'(x) = 0$ kan gi både maks, min og terrassepunkt -- **verifiser** svaret!`,
    },
    {
      id: 'r1-4-9-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Optimeringsproblemer** handler om å finne maks eller min av en funksjon under gitte betingelser
- **Fremgangsmaaten** er: forstaa problemet, sett opp funksjon, deriver, finn kritiske punkter, klassifiser, svar
- **Geometriske problemer**: Bruk geometriske sammenhenger (Pytagoras, formler for areal/volum) til å sette opp maalfunksjonen
- **Økonomiske problemer**: Fortjeneste = inntekt $-$ kostnad, optimer ved $F'(x) = 0$
- **Sjekk endepunkter** på lukket intervall
- **Verifiser** med andrederiverten eller fortegnsskjema`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Maalfunksjon', definition: 'Funksjonen vi vil finne maks eller min av' },
    { term: 'Bibetingelse', definition: 'Begrensning som reduserer antall frie variable' },
    { term: 'Kritisk punkt', definition: 'Punkt der $f\'(x) = 0$ eller $f\'(x)$ ikke eksisterer' },
    { term: 'Andrederivert-testen', definition: '$f\'\'(a) > 0$ gir min, $f\'\'(a) < 0$ gir maks' },
    { term: 'Grensekostnad', definition: 'Den deriverte av kostnadsfunksjonen, $K\'(x)$' },
    { term: 'Marginalinntekt', definition: 'Den deriverte av inntektsfunksjonen, $I\'(x)$' },
  ],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const R1_KAP2B_CHAPTERS = [CHAPTER_R1_2_4, CHAPTER_R1_2_5, CHAPTER_R1_3_6, CHAPTER_R1_4_9];
