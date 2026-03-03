/**
 * Matematikk 10. klasse - Del 7: Tall og tallteori
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Kapittel 7.1: Tallmengder og tallsystemer
 * Kapittel 7.2: Standardform
 * Kapittel 7.3: Primtall og primtallsfaktorisering
 * Kapittel 7.4: Forholdstall og proporsjonalitet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1: Tallmengder og tallsystemer
// LK20: Bruke variablar og formlar til å uttrykkje samanhengar i praktiske
//        situasjonar
// ============================================================================

export const CHAPTER_10_7_1: TextbookChapter = {
  id: '10-7-1',
  courseId: '10',
  chapterNumber: '7.1',
  title: 'Tallmengder og tallsystemer',
  description: 'Lær om de ulike tallmengdene: naturlige tall, hele tall, rasjonale tall, irrasjonale tall og reelle tall, og hvordan de henger sammen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-7-1-intro',
      type: 'text',
      content: `## Tallmengder: Tallenes familie

Tenk deg at du sorterer klær i et klesskap. Du har én skuff for sokker, én for t-skjorter, og én for bukser. Noen skuffer er inne i andre — sokkeskuffen er kanskje del av en større skuff for undertøy.

Slik er det med tall også. Matematikere har organisert alle tall i **tallmengder** — grupper av tall med felles egenskaper. Noen tallmengder er «inne i» andre, akkurat som sokkeskuffen er inne i undertøyskuffen.

I dette kapittelet skal du lære om:
- De fem viktigste tallmengdene
- Hvordan tallmengdene henger sammen (Venndiagram)
- Hvordan du avgjør hvilken tallmengde et tall hører til
- Forskjellen mellom rasjonale og irrasjonale tall`,
    },

    // ========== DEFINISJON: NATURLIGE TALL ==========
    {
      id: '10-7-1-def-1',
      type: 'definition',
      title: 'Naturlige tall (ℕ)',
      content: `De **naturlige tallene** er telletallene vi bruker i hverdagen:

$$\\mathbb{N} = \\{1, 2, 3, 4, 5, 6, \\ldots\\}$$

Naturlige tall brukes til å **telle** ting: 3 epler, 7 elever, 12 måneder.

**Merk:** Noen definisjoner inkluderer $0$ i de naturlige tallene, mens andre ikke gjør det. I norsk skole regner vi som regel $0$ med blant de naturlige tallene:

$$\\mathbb{N}_0 = \\{0, 1, 2, 3, 4, \\ldots\\}$$`,
    },

    // ========== DEFINISJON: HELE TALL ==========
    {
      id: '10-7-1-def-2',
      type: 'definition',
      title: 'Hele tall (ℤ)',
      content: `De **hele tallene** er de naturlige tallene pluss null og de negative hele tallene:

$$\\mathbb{Z} = \\{\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots\\}$$

Bokstaven $\\mathbb{Z}$ kommer fra det tyske ordet *Zahlen*, som betyr «tall».

**Eksempler på hele tall:** $-17$, $0$, $42$, $-3$, $1000$

**Ikke hele tall:** $0{,}5$, $\\frac{2}{3}$, $\\sqrt{2}$

Alle naturlige tall er også hele tall, men ikke omvendt. For eksempel er $-5$ et helt tall, men ikke et naturlig tall.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '10-7-1-ex-1',
      type: 'example',
      title: 'Eksempel 1: Naturlige tall og hele tall',
      problem: 'Avgjør om disse tallene er naturlige tall, hele tall, eller ingen av delene: $7$, $-3$, $0{,}5$, $0$, $-12$, $100$',
      solution: `Vi sjekker hvert tall:

| Tall | Naturlig tall ($\\mathbb{N}$)? | Helt tall ($\\mathbb{Z}$)? |
|------|------|------|
| $7$ | Ja | Ja |
| $-3$ | Nei (negativt) | Ja |
| $0{,}5$ | Nei (desimaltall) | Nei |
| $0$ | Ja (med $\\mathbb{N}_0$) | Ja |
| $-12$ | Nei (negativt) | Ja |
| $100$ | Ja | Ja |

**Huskeregel:** Alle naturlige tall er hele tall, men hele tall inkluderer også de negative tallene.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '10-7-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-7-1-oppg-1',
        number: '7.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sorter tallene i riktig tallmengde.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke av disse er naturlige tall? $-4$, $0$, $3$, $\\frac{1}{2}$, $15$, $-1$',
            solution: '$0$, $3$ og $15$ er naturlige tall (med $\\mathbb{N}_0$). De andre er enten negative eller brøker.',
          },
          {
            label: 'b',
            task: 'Hvilke av disse er hele tall? $7$, $-8$, $2{,}5$, $0$, $-100$, $\\frac{3}{4}$',
            solution: '$7$, $-8$, $0$ og $-100$ er hele tall. $2{,}5$ og $\\frac{3}{4}$ er ikke hele tall fordi de har desimaler/er brøker.',
          },
        ],
        solution: 'a) $0$, $3$, $15$. b) $7$, $-8$, $0$, $-100$.',
        hints: ['Naturlige tall er telletallene (0, 1, 2, 3, ...). Hele tall inkluderer også de negative.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: RASJONALE TALL ==========
    {
      id: '10-7-1-def-3',
      type: 'definition',
      title: 'Rasjonale tall (ℚ)',
      content: `De **rasjonale tallene** er alle tall som kan skrives som en brøk $\\frac{a}{b}$ der $a$ og $b$ er hele tall og $b \\neq 0$:

$$\\mathbb{Q} = \\left\\{ \\frac{a}{b} \\,\\middle|\\, a \\in \\mathbb{Z}, \\, b \\in \\mathbb{Z}, \\, b \\neq 0 \\right\\}$$

Bokstaven $\\mathbb{Q}$ kommer fra det engelske ordet *quotient*, som betyr «kvotient» (resultat av divisjon).

**Eksempler:**
- $\\frac{3}{4} = 0{,}75$ — en endelig desimal
- $\\frac{1}{3} = 0{,}333\\ldots$ — en periodisk desimal
- $-\\frac{7}{2} = -3{,}5$
- $5 = \\frac{5}{1}$ — alle hele tall er rasjonale!

**Kjennetegn:** Et rasjonalt tall har enten en **endelig** desimalutvikling ($0{,}75$) eller en **periodisk** desimalutvikling ($0{,}333\\ldots$ eller $0{,}142857142857\\ldots$).`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '10-7-1-ex-2',
      type: 'example',
      title: 'Eksempel 2: Gjøre om mellom brøk og desimaltall',
      problem: 'Skriv $\\frac{5}{8}$ som desimaltall, og skriv $0{,}\\overline{36}$ (dvs. $0{,}363636\\ldots$) som brøk.',
      solution: `**Del 1: Brøk til desimaltall**

Vi deler telleren på nevneren:
$$\\frac{5}{8} = 5 \\div 8 = 0{,}625$$

**Del 2: Periodisk desimaltall til brøk**

La $x = 0{,}363636\\ldots$

Perioden har 2 siffer, så vi ganger med $100$:
$$100x = 36{,}363636\\ldots$$

Trekker fra:
$$100x - x = 36{,}3636\\ldots - 0{,}3636\\ldots$$
$$99x = 36$$
$$x = \\frac{36}{99} = \\frac{4}{11}$$

**Svar:** $\\frac{5}{8} = 0{,}625$ og $0{,}\\overline{36} = \\frac{4}{11}$`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '10-7-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-7-1-oppg-2',
        number: '7.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om mellom brøk og desimaltall.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv $\\frac{3}{8}$ som desimaltall.',
            solution: '$\\frac{3}{8} = 3 \\div 8 = 0{,}375$',
            answer: '0,375',
          },
          {
            label: 'b',
            task: 'Skriv $\\frac{7}{11}$ som desimaltall. Hva slags desimaltall får du?',
            solution: '$\\frac{7}{11} = 0{,}636363\\ldots = 0{,}\\overline{63}$. Vi får et periodisk desimaltall.',
          },
          {
            label: 'c',
            task: 'Skriv $0{,}\\overline{27}$ (dvs. $0{,}272727\\ldots$) som brøk.',
            solution: 'La $x = 0{,}2727\\ldots$. Da er $100x = 27{,}2727\\ldots$. Vi får $99x = 27$, altså $x = \\frac{27}{99} = \\frac{3}{11}$.',
            answer: '3/11',
          },
        ],
        solution: 'a) $0{,}375$, b) $0{,}\\overline{63}$ (periodisk), c) $\\frac{3}{11}$',
        hints: ['For å gjøre periodisk desimaltall om til brøk: Kall tallet $x$, gang med en potens av 10 som flytter perioden, og trekk fra.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: IRRASJONALE TALL ==========
    {
      id: '10-7-1-def-4',
      type: 'definition',
      title: 'Irrasjonale tall',
      content: `Et **irrasjonalt tall** er et tall som **ikke** kan skrives som en brøk med hele tall. Desimalutviklingen til et irrasjonalt tall er **uendelig og ikke-periodisk** — den fortsetter for alltid uten å gjenta seg.

**Kjente irrasjonale tall:**
- $\\pi = 3{,}14159265358979\\ldots$ — forholdet mellom omkrets og diameter i en sirkel
- $\\sqrt{2} = 1{,}41421356\\ldots$ — diagonalen i et kvadrat med sidelengde 1
- $\\sqrt{3} = 1{,}73205080\\ldots$
- $e = 2{,}71828182\\ldots$ — Eulers tall (viktig i videregående)
- Det gylne snitt $\\varphi = \\frac{1 + \\sqrt{5}}{2} = 1{,}61803398\\ldots$

**Viktig:** $\\sqrt{4} = 2$ er **ikke** irrasjonalt, fordi svaret er et helt tall. Det er bare kvadratrøtter av tall som **ikke** er perfekte kvadrater, som gir irrasjonale tall.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '10-7-1-ex-3',
      type: 'example',
      title: 'Eksempel 3: Rasjonalt eller irrasjonalt?',
      problem: 'Avgjør om disse tallene er rasjonale eller irrasjonale: $\\sqrt{9}$, $\\sqrt{7}$, $0{,}75$, $\\pi$, $\\frac{22}{7}$',
      solution: `Vi sjekker hvert tall:

- $\\sqrt{9} = 3$ — dette er et helt tall, altså **rasjonalt**
- $\\sqrt{7} = 2{,}6457513\\ldots$ — uendelig, ikke-periodisk, altså **irrasjonalt**
- $0{,}75 = \\frac{3}{4}$ — kan skrives som brøk, altså **rasjonalt**
- $\\pi = 3{,}14159\\ldots$ — uendelig, ikke-periodisk, altså **irrasjonalt**
- $\\frac{22}{7} = 3{,}142857142857\\ldots$ — dette er en brøk med periodisk desimal, altså **rasjonalt** (selv om det er en tilnærming til $\\pi$, er $\\frac{22}{7}$ selv et rasjonalt tall)

**Viktig poeng:** $\\frac{22}{7} \\neq \\pi$. Brøken $\\frac{22}{7}$ er bare en tilnærming!`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '10-7-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-7-1-oppg-3',
        number: '7.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av disse tallene er irrasjonalt?',
        options: [
          {
            id: 'a',
            text: '$\\frac{1}{3} = 0{,}333\\ldots$',
            isCorrect: false,
            feedback: 'Feil. Selv om desimalen er uendelig, er den periodisk (bare 3-ere). Derfor er $\\frac{1}{3}$ rasjonalt.',
          },
          {
            id: 'b',
            text: '$\\sqrt{16} = 4$',
            isCorrect: false,
            feedback: 'Feil. $\\sqrt{16} = 4$, som er et helt tall og dermed rasjonalt.',
          },
          {
            id: 'c',
            text: '$\\sqrt{5}$',
            isCorrect: true,
            feedback: 'Riktig! $\\sqrt{5} = 2{,}2360679\\ldots$ har en uendelig, ikke-periodisk desimalutvikling og kan ikke skrives som brøk.',
          },
          {
            id: 'd',
            text: '$0{,}125$',
            isCorrect: false,
            feedback: 'Feil. $0{,}125 = \\frac{1}{8}$, som er en brøk og dermed rasjonalt.',
          },
        ],
        solution: '$\\sqrt{5}$ er irrasjonalt fordi 5 ikke er et perfekt kvadrattall.',
      },
    },

    // ========== DEFINISJON: REELLE TALL ==========
    {
      id: '10-7-1-def-5',
      type: 'definition',
      title: 'Reelle tall (ℝ) og Venndiagram',
      content: `De **reelle tallene** er alle rasjonale og irrasjonale tall samlet:

$$\\mathbb{R} = \\mathbb{Q} \\cup \\{\\text{irrasjonale tall}\\}$$

Tallmengdene henger sammen som et sett med bokser:

$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$

Dette betyr:
- Alle **naturlige tall** ($\\mathbb{N}$) er også hele tall
- Alle **hele tall** ($\\mathbb{Z}$) er også rasjonale tall
- Alle **rasjonale tall** ($\\mathbb{Q}$) er også reelle tall
- De **irrasjonale tallene** fyller «resten» av de reelle tallene

**Venndiagram:**
Tenk deg sirkler inni hverandre:
- Innerst: $\\mathbb{N}$ = {0, 1, 2, 3, ...}
- Neste: $\\mathbb{Z}$ legger til {..., -3, -2, -1}
- Neste: $\\mathbb{Q}$ legger til alle brøker ($\\frac{1}{2}$, $-\\frac{3}{7}$, $0{,}\\overline{3}$, ...)
- Ytterst: $\\mathbb{R}$ legger til irrasjonale tall ($\\sqrt{2}$, $\\pi$, ...)`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '10-7-1-ex-4',
      type: 'example',
      title: 'Eksempel 4: Plassere tall i Venndiagrammet',
      problem: 'Plasser hvert tall i den minste tallmengden det hører til: $-5$, $\\frac{2}{3}$, $\\sqrt{2}$, $8$, $0$, $-\\frac{7}{4}$, $\\pi$, $\\sqrt{25}$',
      solution: `Vi finner den **minste** tallmengden for hvert tall:

| Tall | Minste tallmengde | Forklaring |
|------|------|------|
| $8$ | $\\mathbb{N}$ | Positivt heltallig telletall |
| $0$ | $\\mathbb{N}_0$ | Null er naturlig tall (med $\\mathbb{N}_0$) |
| $\\sqrt{25} = 5$ | $\\mathbb{N}$ | Perfekt kvadratrot gir naturlig tall |
| $-5$ | $\\mathbb{Z}$ | Negativt helt tall |
| $\\frac{2}{3}$ | $\\mathbb{Q}$ | Brøk som ikke er et helt tall |
| $-\\frac{7}{4}$ | $\\mathbb{Q}$ | Negativ brøk |
| $\\sqrt{2}$ | Irrasjonalt (i $\\mathbb{R}$) | Ikke-periodisk uendelig desimal |
| $\\pi$ | Irrasjonalt (i $\\mathbb{R}$) | Ikke-periodisk uendelig desimal |

**Husk:** Alle disse tallene tilhører $\\mathbb{R}$ (de reelle tallene), men vi plasserer dem i den **minste** mengden de passer i.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '10-7-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-7-1-oppg-4',
        number: '7.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Plasser hvert tall i den minste tallmengden det hører til ($\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$, eller irrasjonalt).',
        subTasks: [
          {
            label: 'a',
            task: '$12$',
            solution: '$\\mathbb{N}$ (naturlig tall)',
            multipleChoiceOptions: ['ℕ (naturlig tall)', 'ℤ (helt tall)', 'ℚ (rasjonalt tall)', 'Irrasjonalt tall'],
          },
          {
            label: 'b',
            task: '$-\\frac{1}{2}$',
            solution: '$\\mathbb{Q}$ (rasjonalt tall) — det er en negativ brøk',
            multipleChoiceOptions: ['ℚ (rasjonalt tall)', 'ℤ (helt tall)', 'ℕ (naturlig tall)', 'Irrasjonalt tall'],
          },
          {
            label: 'c',
            task: '$\\sqrt{10}$',
            solution: 'Irrasjonalt tall — 10 er ikke et perfekt kvadrat',
            multipleChoiceOptions: ['Irrasjonalt tall', 'ℚ (rasjonalt tall)', 'ℤ (helt tall)', 'ℕ (naturlig tall)'],
          },
          {
            label: 'd',
            task: '$\\sqrt{49}$',
            solution: '$\\mathbb{N}$ (naturlig tall) — fordi $\\sqrt{49} = 7$',
            multipleChoiceOptions: ['ℕ (naturlig tall)', 'Irrasjonalt tall', 'ℚ (rasjonalt tall)', 'ℤ (helt tall)'],
          },
          {
            label: 'e',
            task: '$-8$',
            solution: '$\\mathbb{Z}$ (helt tall) — negativt heltallig',
            multipleChoiceOptions: ['ℤ (helt tall)', 'ℕ (naturlig tall)', 'ℚ (rasjonalt tall)', 'Irrasjonalt tall'],
          },
        ],
        solution: 'a) $\\mathbb{N}$, b) $\\mathbb{Q}$, c) Irrasjonalt, d) $\\mathbb{N}$ ($\\sqrt{49}=7$), e) $\\mathbb{Z}$',
        hints: ['Sjekk alltid om en kvadratrot gir et helt tall først!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TIPS ==========
    {
      id: '10-7-1-tip-1',
      type: 'tip',
      title: 'Hvordan avgjøre om et tall er rasjonalt eller irrasjonalt',
      content: `**Rasjonalt** hvis:
- Det kan skrives som en brøk $\\frac{a}{b}$ med hele tall
- Desimalutviklingen er endelig ($0{,}75$) eller periodisk ($0{,}333\\ldots$)
- Det er en kvadratrot av et perfekt kvadrattall ($\\sqrt{4}$, $\\sqrt{9}$, $\\sqrt{16}$, ...)

**Irrasjonalt** hvis:
- Det **ikke** kan skrives som brøk
- Desimalutviklingen er uendelig og ikke-periodisk
- Det er en kvadratrot av et tall som **ikke** er perfekt kvadrat ($\\sqrt{2}$, $\\sqrt{3}$, $\\sqrt{5}$, ...)
- Det er et kjent irrasjonalt tall ($\\pi$, $e$)`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### De fem tallmengdene
| Symbol | Navn | Eksempler |
|--------|------|-----------|
| $\\mathbb{N}$ | Naturlige tall | $0, 1, 2, 3, \\ldots$ |
| $\\mathbb{Z}$ | Hele tall | $\\ldots, -2, -1, 0, 1, 2, \\ldots$ |
| $\\mathbb{Q}$ | Rasjonale tall | $\\frac{1}{2}, -\\frac{3}{7}, 0{,}75, 0{,}\\overline{3}$ |
| — | Irrasjonale tall | $\\sqrt{2}, \\pi, e$ |
| $\\mathbb{R}$ | Reelle tall | Alle tall på tallinja |

### Viktige sammenhenger
- $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$
- Rasjonale tall har endelig eller periodisk desimalutvikling
- Irrasjonale tall har uendelig, ikke-periodisk desimalutvikling
- Sammen utgjør rasjonale og irrasjonale tall de reelle tallene`,
    },

    // --- Samleoppgaver ---

    {
      id: '10-7-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-7-1-oppg-5',
        number: '7.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor $\\sqrt{2}$ er et irrasjonalt tall.',
        subTasks: [
          {
            label: 'a',
            task: 'Anta at $\\sqrt{2} = \\frac{a}{b}$ der $\\frac{a}{b}$ er en forkortet brøk. Vis at dette fører til en selvmotsigelse (hint: kvadrer begge sider og tenk på partall/oddetall).',
            solution: 'Hvis $\\sqrt{2} = \\frac{a}{b}$, får vi $2 = \\frac{a^2}{b^2}$, altså $a^2 = 2b^2$. Da er $a^2$ partall, som betyr at $a$ er partall. Skriv $a = 2k$. Da får vi $4k^2 = 2b^2$, altså $b^2 = 2k^2$, som betyr at $b$ også er partall. Men da kan brøken $\\frac{a}{b}$ forkortes med 2, som strider mot forutsetningen. Altså kan $\\sqrt{2}$ ikke skrives som brøk.',
          },
          {
            label: 'b',
            task: 'Bruk kalkulatoren til å finne $\\sqrt{2}$ med 10 desimaler. Ser du noe mønster som gjentar seg?',
            solution: '$\\sqrt{2} \\approx 1{,}4142135624$. Nei, det er ingen perioder som gjentar seg — desimalene fortsetter tilfeldig.',
          },
        ],
        solution: 'Beviset viser at hvis $\\sqrt{2}$ var rasjonalt, ville brøken kunne forkortes i det uendelige — en selvmotsigelse. Derfor er $\\sqrt{2}$ irrasjonalt.',
        hints: ['Husk at et kvadrattall $a^2$ er partall bare dersom $a$ er partall.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '10-7-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-7-1-oppg-6',
        number: '7.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utforsk tallmengder med sammensatte uttrykk.',
        subTasks: [
          {
            label: 'a',
            task: 'Er summen av to rasjonale tall alltid rasjonalt? Gi et eksempel.',
            solution: 'Ja. Hvis $\\frac{a}{b}$ og $\\frac{c}{d}$ er rasjonale, er $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$, som også er en brøk med hele tall. Eksempel: $\\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$.',
          },
          {
            label: 'b',
            task: 'Er summen av to irrasjonale tall alltid irrasjonalt? Gi et eksempel eller moteksempel.',
            solution: 'Nei! Moteksempel: $\\sqrt{2} + (-\\sqrt{2}) = 0$, som er rasjonalt. Summen av to irrasjonale tall kan altså bli rasjonalt.',
          },
          {
            label: 'c',
            task: 'Er produktet av et rasjonalt og et irrasjonalt tall alltid irrasjonalt?',
            solution: 'Nei, ikke alltid. Hvis det rasjonale tallet er $0$, blir produktet $0 \\cdot \\sqrt{2} = 0$, som er rasjonalt. Men hvis det rasjonale tallet er ulikt null, så er produktet alltid irrasjonalt. Eksempel: $3 \\cdot \\sqrt{2} = 3\\sqrt{2}$ er irrasjonalt.',
          },
        ],
        solution: 'a) Ja, alltid. b) Nei, ikke alltid ($\\sqrt{2} + (-\\sqrt{2}) = 0$). c) Alltid irrasjonalt dersom det rasjonale tallet er ulikt null.',
        hints: ['For å motbevise en påstand trenger du bare ett moteksempel.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '10-7-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '10-7-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '10-7-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Avgjør hvilken tallmengde hvert tall tilhører. Bruk den minste tallmengden som passer.',
            subTasks: [
              { label: 'a', task: '$14$', solution: '$14 \\in \\mathbb{N}$ (naturlig tall)' },
              { label: 'b', task: '$-7$', solution: '$-7 \\in \\mathbb{Z}$ (helt tall, men ikke naturlig tall)' },
              { label: 'c', task: '$\\frac{5}{3}$', solution: '$\\frac{5}{3} \\in \\mathbb{Q}$ (rasjonalt tall, fordi det kan skrives som brøk)' },
              { label: 'd', task: '$\\sqrt{9}$', solution: '$\\sqrt{9} = 3 \\in \\mathbb{N}$ (naturlig tall, fordi $\\sqrt{9} = 3$)' },
              { label: 'e', task: '$\\sqrt{7}$', solution: '$\\sqrt{7}$ er irrasjonalt, fordi $7$ ikke er et perfekt kvadrattall' },
              { label: 'f', task: '$0{,}\\overline{142857}$', solution: '$0{,}\\overline{142857} = \\frac{1}{7} \\in \\mathbb{Q}$ (rasjonalt tall, fordi det er periodisk)' },
            ],
            solution: 'a) $\\mathbb{N}$, b) $\\mathbb{Z}$, c) $\\mathbb{Q}$, d) $\\mathbb{N}$, e) Irrasjonalt, f) $\\mathbb{Q}$',
            hideInlineSolution: true,
            hints: ['Sjekk alltid om en kvadratrot gir et helt tall. Periodiske desimaltall er rasjonale.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '10-7-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gjør om mellom brøk og desimaltall.',
            subTasks: [
              { label: 'a', task: 'Skriv $\\frac{7}{8}$ som desimaltall.', solution: '$\\frac{7}{8} = 7 \\div 8 = 0{,}875$' },
              { label: 'b', task: 'Skriv $\\frac{5}{6}$ som desimaltall.', solution: '$\\frac{5}{6} = 0{,}8333\\ldots = 0{,}8\\overline{3}$ (periodisk)' },
              { label: 'c', task: 'Skriv $0{,}\\overline{45}$ som brøk.', solution: 'La $x = 0{,}4545\\ldots$. Da er $100x = 45{,}4545\\ldots$, og $99x = 45$, altså $x = \\frac{45}{99} = \\frac{5}{11}$' },
              { label: 'd', task: 'Skriv $0{,}125$ som brøk.', solution: '$0{,}125 = \\frac{125}{1000} = \\frac{1}{8}$' },
              { label: 'e', task: 'Er $0{,}101001000100001\\ldots$ rasjonalt eller irrasjonalt?', solution: 'Irrasjonalt. Desimalutviklingen er ikke periodisk — mønsteret endres hele tiden.' },
              { label: 'f', task: 'Skriv $2{,}\\overline{3}$ som brøk.', solution: 'La $x = 2{,}333\\ldots$. Da er $10x = 23{,}333\\ldots$, og $9x = 21$, altså $x = \\frac{21}{9} = \\frac{7}{3}$' },
            ],
            solution: 'a) $0{,}875$, b) $0{,}8\\overline{3}$, c) $\\frac{5}{11}$, d) $\\frac{1}{8}$, e) Irrasjonalt, f) $\\frac{7}{3}$',
            hideInlineSolution: true,
            hints: ['For periodisk desimaltall til brøk: Kall tallet $x$, gang med en potens av 10 som flytter perioden, og trekk fra.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '10-7-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Sant eller usant? Begrunn svaret.',
            subTasks: [
              { label: 'a', task: 'Alle naturlige tall er hele tall.', solution: 'Sant. $\\mathbb{N} \\subset \\mathbb{Z}$.' },
              { label: 'b', task: 'Alle hele tall er rasjonale tall.', solution: 'Sant. Ethvert helt tall $n$ kan skrives som $\\frac{n}{1}$, altså $\\mathbb{Z} \\subset \\mathbb{Q}$.' },
              { label: 'c', task: 'Alle desimaltall er rasjonale tall.', solution: 'Usant. $\\pi = 3{,}14159\\ldots$ er et desimaltall, men det er irrasjonalt fordi desimalutviklingen aldri blir periodisk.' },
              { label: 'd', task: '$\\sqrt{16}$ er et irrasjonalt tall.', solution: 'Usant. $\\sqrt{16} = 4$, som er et naturlig tall.' },
              { label: 'e', task: 'Summen av to irrasjonale tall er alltid irrasjonalt.', solution: 'Usant. Moteksempel: $\\sqrt{2} + (-\\sqrt{2}) = 0$, som er rasjonalt.' },
              { label: 'f', task: 'Produktet av to rasjonale tall er alltid rasjonalt.', solution: 'Sant. $\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{ac}{bd}$, som er en brøk av hele tall.' },
            ],
            solution: 'a) Sant, b) Sant, c) Usant, d) Usant, e) Usant, f) Sant',
            hideInlineSolution: true,
            hints: ['For å motbevise en påstand, trenger du bare å finne ett moteksempel.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '10-7-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Plasser tallene i riktig tallmengde i et Venndiagram, og begrunn valgene dine.',
            subTasks: [
              { label: 'a', task: '$-\\frac{3}{2}$, $\\sqrt{25}$, $\\pi$, $0$, $-11$, $\\frac{22}{7}$', solution: '$\\sqrt{25} = 5$ og $0$ er naturlige tall ($\\mathbb{N}_0$). $-11$ er helt tall ($\\mathbb{Z}$). $-\\frac{3}{2}$ og $\\frac{22}{7}$ er rasjonale tall ($\\mathbb{Q}$). $\\pi$ er irrasjonalt.' },
              { label: 'b', task: 'Finn et tall som er rasjonalt, men ikke et helt tall.', solution: 'For eksempel $\\frac{1}{2} = 0{,}5$. Det kan skrives som brøk, men det er ikke et helt tall.' },
              { label: 'c', task: 'Finn et tall som er et helt tall, men ikke et naturlig tall.', solution: 'For eksempel $-3$. Det er et helt tall, men negative tall er ikke naturlige.' },
              { label: 'd', task: 'Finn et tall som er reelt, men ikke rasjonalt.', solution: 'For eksempel $\\sqrt{3}$, $\\pi$ eller $e$. Disse er irrasjonale tall.' },
              { label: 'e', task: 'Hvorfor er $\\frac{22}{7}$ rasjonalt, selv om det ofte brukes som tilnærming til $\\pi$?', solution: '$\\frac{22}{7}$ er en brøk av to hele tall, altså rasjonalt. $\\pi$ derimot kan *ikke* skrives som brøk. $\\frac{22}{7} \\approx 3{,}142857\\ldots$ er bare en tilnærming.' },
              { label: 'f', task: 'Er $\\sqrt{0{,}04}$ rasjonalt eller irrasjonalt? Begrunn.', solution: '$\\sqrt{0{,}04} = \\sqrt{\\frac{4}{100}} = \\frac{2}{10} = 0{,}2$. Dette er rasjonalt fordi det kan skrives som brøk $\\frac{1}{5}$.' },
            ],
            solution: 'a) Se deloppgavene. b) F.eks. $\\frac{1}{2}$. c) F.eks. $-3$. d) F.eks. $\\sqrt{3}$. e) $\\frac{22}{7}$ er en brøk, $\\pi$ er ikke det. f) Rasjonalt ($0{,}2$).',
            hideInlineSolution: true,
            hints: ['Sjekk alltid om en kvadratrot forenkles til et helt tall eller en brøk.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '10-7-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Gjør om periodiske desimaltall til brøk, og forkort svaret så mye som mulig.',
            subTasks: [
              { label: 'a', task: '$0{,}\\overline{6}$', solution: 'La $x = 0{,}666\\ldots$. Da er $10x = 6{,}666\\ldots$. $9x = 6$, altså $x = \\frac{6}{9} = \\frac{2}{3}$.' },
              { label: 'b', task: '$0{,}\\overline{123}$', solution: 'La $x = 0{,}123123\\ldots$. Da er $1000x = 123{,}123\\ldots$. $999x = 123$, altså $x = \\frac{123}{999} = \\frac{41}{333}$.' },
              { label: 'c', task: '$0{,}1\\overline{6}$', solution: 'La $x = 0{,}1666\\ldots$. Da er $10x = 1{,}666\\ldots$ og $100x = 16{,}666\\ldots$. $100x - 10x = 15$, altså $90x = 15$, $x = \\frac{15}{90} = \\frac{1}{6}$.' },
              { label: 'd', task: '$1{,}\\overline{54}$', solution: 'La $x = 1{,}5454\\ldots$. Da er $100x = 154{,}5454\\ldots$. $99x = 153$, altså $x = \\frac{153}{99} = \\frac{17}{11}$.' },
            ],
            solution: 'a) $\\frac{2}{3}$, b) $\\frac{41}{333}$, c) $\\frac{1}{6}$, d) $\\frac{17}{11}$',
            hideInlineSolution: true,
            hints: ['Perioden har $n$ siffer → gang med $10^n$. Trekk fra for å fjerne den periodiske delen.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '10-7-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Bevis og utforsk egenskaper ved tallmengdene.',
            subTasks: [
              { label: 'a', task: 'Vis at $\\sqrt{3}$ er irrasjonalt ved å bruke et motsigelsebevis tilsvarende beviset for $\\sqrt{2}$.', solution: 'Anta at $\\sqrt{3} = \\frac{a}{b}$ der $\\gcd(a,b) = 1$. Da er $3 = \\frac{a^2}{b^2}$, altså $a^2 = 3b^2$. Da er $a^2$ delelig med $3$, så $a$ er delelig med $3$. La $a = 3k$. Da er $9k^2 = 3b^2$, altså $b^2 = 3k^2$, og $b$ er også delelig med $3$. Motsigelse fordi $\\gcd(a,b) = 1$.' },
              { label: 'b', task: 'Vis at summen av et rasjonalt og et irrasjonalt tall alltid er irrasjonalt.', solution: 'Anta at $r + s$ er rasjonalt, der $r$ er rasjonalt og $s$ er irrasjonalt. Da ville $s = (r + s) - r$ være differansen mellom to rasjonale tall, altså rasjonalt. Men $s$ er irrasjonalt — motsigelse.' },
              { label: 'c', task: 'Er $\\sqrt{2} + \\sqrt{3}$ rasjonalt eller irrasjonalt? Begrunn.', solution: 'Irrasjonalt. Anta at $\\sqrt{2} + \\sqrt{3} = r$ er rasjonalt. Da er $\\sqrt{3} = r - \\sqrt{2}$. Kvadrering gir $3 = r^2 - 2r\\sqrt{2} + 2$, altså $\\sqrt{2} = \\frac{r^2 - 1}{2r}$, som ville være rasjonalt. Men $\\sqrt{2}$ er irrasjonalt — motsigelse.' },
              { label: 'd', task: 'Mellom to vilkårlige rasjonale tall finnes det alltid et irrasjonalt tall. Forklar hvorfor, og gi et eksempel mellom $1$ og $2$.', solution: 'Mellom $1$ og $2$ finner vi for eksempel $\\sqrt{2} \\approx 1{,}414\\ldots$. Generelt: Hvis $a < b$ er rasjonale, er $a + \\frac{(b-a)\\sqrt{2}}{2}$ et irrasjonalt tall mellom dem (fordi et rasjonalt pluss et irrasjonalt alltid er irrasjonalt).' },
            ],
            solution: 'a-b) Bruk motsigelsebevis. c) Irrasjonalt, bevist med motsigelse. d) F.eks. $\\sqrt{2}$ mellom $1$ og $2$.',
            hideInlineSolution: true,
            hints: ['Motsigelsebevis: Anta det motsatte av det du vil vise, og vis at dette fører til en logisk feil.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Standardform
// LK20: Bruke variablar og formlar til å uttrykkje samanhengar i praktiske
//        situasjonar
// ============================================================================

export const CHAPTER_10_7_2: TextbookChapter = {
  id: '10-7-2',
  courseId: '10',
  chapterNumber: '7.2',
  title: 'Standardform',
  description: 'Lær å skrive veldig store og veldig små tall i standardform (vitenskapelig notasjon), og å regne med tall på standardform.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-7-2-intro',
      type: 'text',
      content: `## Standardform: Når tall blir ekstremt store eller små

Avstanden fra Jorda til Sola er ca. $149\\,600\\,000\\,000$ meter. Massen til et vannmolekyl er ca. $0{,}000\\,000\\,000\\,000\\,000\\,000\\,000\\,03$ kg. Disse tallene er nesten umulige å lese og jobbe med.

Heldigvis finnes det en smartere måte å skrive dem på: **standardform** (også kalt **vitenskapelig notasjon**). I stedet for å skrive ut alle nullene, bruker vi tierpotenser.

I dette kapittelet skal du lære:
- Hva standardform er og hvorfor vi bruker det
- Hvordan du skriver tall på standardform
- Hvordan du gjør om fra standardform til vanlig tall
- Hvordan du regner med tall på standardform`,
    },

    // ========== DEFINISJON: STANDARDFORM ==========
    {
      id: '10-7-2-def-1',
      type: 'definition',
      title: 'Standardform',
      content: `Et tall er skrevet på **standardform** når det har formen:

$$a \\times 10^n$$

der:
- $1 \\leq a < 10$ (tallet $a$ har **nøyaktig ett siffer** foran kommaet, og det sifferet er ikke 0)
- $n$ er et helt tall (kan være positivt, negativt eller null)

**Eksempler:**
- $3{,}5 \\times 10^8$ — standardform (fordi $1 \\leq 3{,}5 < 10$)
- $35 \\times 10^7$ — **ikke** standardform (fordi $35 \\geq 10$)
- $0{,}35 \\times 10^9$ — **ikke** standardform (fordi $0{,}35 < 1$)

**Tierpotenser:**
- $10^1 = 10$, $10^2 = 100$, $10^3 = 1000$, ...
- $10^0 = 1$
- $10^{-1} = 0{,}1$, $10^{-2} = 0{,}01$, $10^{-3} = 0{,}001$, ...`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '10-7-2-ex-1',
      type: 'example',
      title: 'Eksempel 1: Skrive store tall på standardform',
      problem: 'Skriv $4\\,700\\,000$ og $389\\,000\\,000\\,000$ på standardform.',
      solution: `**Tall 1: $4\\,700\\,000$**

Flytt kommaet til du har ett siffer foran:
$$4\\,700\\,000 = 4{,}7 \\times 10^{\\,?}$$

Tell hvor mange plasser kommaet flyttes: 6 plasser til venstre.
$$4\\,700\\,000 = 4{,}7 \\times 10^6$$

**Tall 2: $389\\,000\\,000\\,000$**

Flytt kommaet:
$$389\\,000\\,000\\,000 = 3{,}89 \\times 10^{\\,?}$$

Tell plasser: 11 plasser til venstre.
$$389\\,000\\,000\\,000 = 3{,}89 \\times 10^{11}$$

**Huskeregel for store tall:** Eksponenten $n$ er positiv og lik antall plasser kommaet flyttes til venstre.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '10-7-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-7-2-oppg-1',
        number: '7.7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv tallene på standardform.',
        subTasks: [
          {
            label: 'a',
            task: '$56\\,000$',
            solution: '$56\\,000 = 5{,}6 \\times 10^4$',
            answer: '5,6 × 10^4',
          },
          {
            label: 'b',
            task: '$8\\,300\\,000$',
            solution: '$8\\,300\\,000 = 8{,}3 \\times 10^6$',
            answer: '8,3 × 10^6',
          },
          {
            label: 'c',
            task: '$920\\,000\\,000\\,000$',
            solution: '$920\\,000\\,000\\,000 = 9{,}2 \\times 10^{11}$',
            answer: '9,2 × 10^11',
          },
          {
            label: 'd',
            task: 'Jordens masse: $5\\,972\\,000\\,000\\,000\\,000\\,000\\,000\\,000$ kg',
            solution: '$5{,}972 \\times 10^{24}$ kg',
            answer: '5,972 × 10^24',
          },
        ],
        solution: 'a) $5{,}6 \\times 10^4$, b) $8{,}3 \\times 10^6$, c) $9{,}2 \\times 10^{11}$, d) $5{,}972 \\times 10^{24}$ kg',
        hints: ['Tell antall plasser du flytter kommaet. Det er eksponenten.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '10-7-2-ex-2',
      type: 'example',
      title: 'Eksempel 2: Skrive små tall på standardform',
      problem: 'Skriv $0{,}00045$ og $0{,}000\\,000\\,007\\,1$ på standardform.',
      solution: `**Tall 1: $0{,}00045$**

Flytt kommaet til høyre til du har ett siffer (1–9) foran kommaet:
$$0{,}00045 = 4{,}5 \\times 10^{\\,?}$$

Tell plasser: 4 plasser til høyre. Eksponenten blir **negativ**:
$$0{,}00045 = 4{,}5 \\times 10^{-4}$$

**Tall 2: $0{,}000\\,000\\,007\\,1$**

$$0{,}000\\,000\\,007\\,1 = 7{,}1 \\times 10^{\\,?}$$

Tell plasser: 9 plasser til høyre.
$$0{,}000\\,000\\,007\\,1 = 7{,}1 \\times 10^{-9}$$

**Huskeregel for små tall:** Eksponenten $n$ er negativ og lik antall plasser kommaet flyttes til høyre (med negativt fortegn).`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '10-7-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-7-2-oppg-2',
        number: '7.8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv tallene på standardform.',
        subTasks: [
          {
            label: 'a',
            task: '$0{,}0083$',
            solution: '$0{,}0083 = 8{,}3 \\times 10^{-3}$',
            answer: '8,3 × 10^-3',
          },
          {
            label: 'b',
            task: '$0{,}000\\,000\\,52$',
            solution: '$0{,}000\\,000\\,52 = 5{,}2 \\times 10^{-7}$',
            answer: '5,2 × 10^-7',
          },
          {
            label: 'c',
            task: 'Diameteren til et hydrogenatom: ca. $0{,}000\\,000\\,000\\,12$ m',
            solution: '$1{,}2 \\times 10^{-10}$ m',
            answer: '1,2 × 10^-10',
          },
        ],
        solution: 'a) $8{,}3 \\times 10^{-3}$, b) $5{,}2 \\times 10^{-7}$, c) $1{,}2 \\times 10^{-10}$ m',
        hints: ['For tall mellom 0 og 1: Tell antall plasser kommaet flyttes til høyre, og bruk negativ eksponent.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: FRA STANDARDFORM TIL VANLIG TALL ==========
    {
      id: '10-7-2-text-konvertering',
      type: 'text',
      content: `## Fra standardform til vanlig tall

For å gjøre om fra standardform til vanlig tall gjør vi det motsatte:

**Positiv eksponent** ($10^n$ der $n > 0$): Flytt kommaet $n$ plasser til **høyre**.
$$2{,}5 \\times 10^4 = 25\\,000$$

**Negativ eksponent** ($10^n$ der $n < 0$): Flytt kommaet $|n|$ plasser til **venstre**.
$$3{,}7 \\times 10^{-3} = 0{,}0037$$

**Null som eksponent** ($10^0 = 1$): Tallet endres ikke.
$$6{,}2 \\times 10^0 = 6{,}2$$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '10-7-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-7-2-oppg-3',
        number: '7.9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv som vanlig tall.',
        subTasks: [
          {
            label: 'a',
            task: '$6{,}1 \\times 10^5$',
            solution: '$610\\,000$',
            answer: '610000',
          },
          {
            label: 'b',
            task: '$2{,}45 \\times 10^{-4}$',
            solution: '$0{,}000245$',
            answer: '0,000245',
          },
          {
            label: 'c',
            task: '$9{,}8 \\times 10^7$',
            solution: '$98\\,000\\,000$',
            answer: '98000000',
          },
          {
            label: 'd',
            task: '$1{,}67 \\times 10^{-27}$',
            solution: 'Masse til et proton: $0{,}\\underbrace{00\\ldots0}_{26}\\,167$ kg — et ekstremt lite tall!',
          },
        ],
        solution: 'a) $610\\,000$, b) $0{,}000245$, c) $98\\,000\\,000$, d) Et tall med 26 nuller etter kommaet.',
        hints: ['Positiv eksponent → flytt til høyre. Negativ → flytt til venstre.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: REGNE MED STANDARDFORM ==========
    {
      id: '10-7-2-def-2',
      type: 'definition',
      title: 'Regneregler for standardform',
      content: `**Multiplikasjon:**
$$( a \\times 10^m ) \\cdot ( b \\times 10^n ) = (a \\cdot b) \\times 10^{m+n}$$
Gang tallene foran og **adder** eksponentene.

**Divisjon:**
$$\\frac{a \\times 10^m}{b \\times 10^n} = \\frac{a}{b} \\times 10^{m-n}$$
Del tallene foran og **subtraher** eksponentene.

**Viktig:** Sjekk alltid at svaret er på standardform! Hvis $a \\cdot b \\geq 10$ eller $\\frac{a}{b} < 1$, må du justere.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '10-7-2-ex-3',
      type: 'example',
      title: 'Eksempel 3: Multiplikasjon og divisjon med standardform',
      problem: 'Regn ut og gi svaret på standardform:\na) $(3 \\times 10^4) \\cdot (2 \\times 10^5)$\nb) $\\frac{8 \\times 10^9}{4 \\times 10^3}$\nc) $(5 \\times 10^6) \\cdot (7 \\times 10^3)$',
      solution: `**a)** $(3 \\times 10^4) \\cdot (2 \\times 10^5)$
$$= (3 \\cdot 2) \\times 10^{4+5} = 6 \\times 10^9$$

**b)** $\\frac{8 \\times 10^9}{4 \\times 10^3}$
$$= \\frac{8}{4} \\times 10^{9-3} = 2 \\times 10^6$$

**c)** $(5 \\times 10^6) \\cdot (7 \\times 10^3)$
$$= (5 \\cdot 7) \\times 10^{6+3} = 35 \\times 10^9$$

Men $35 \\times 10^9$ er **ikke** standardform (fordi $35 \\geq 10$). Vi justerer:
$$35 \\times 10^9 = 3{,}5 \\times 10^{10}$$`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '10-7-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-7-2-oppg-4',
        number: '7.10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og gi svaret på standardform.',
        subTasks: [
          {
            label: 'a',
            task: '$(4 \\times 10^3) \\cdot (2 \\times 10^5)$',
            solution: '$(4 \\cdot 2) \\times 10^{3+5} = 8 \\times 10^8$',
            answer: '8 × 10^8',
          },
          {
            label: 'b',
            task: '$\\frac{9 \\times 10^{12}}{3 \\times 10^4}$',
            solution: '$\\frac{9}{3} \\times 10^{12-4} = 3 \\times 10^8$',
            answer: '3 × 10^8',
          },
          {
            label: 'c',
            task: '$(6 \\times 10^5) \\cdot (8 \\times 10^7)$',
            solution: '$(6 \\cdot 8) \\times 10^{5+7} = 48 \\times 10^{12}$. Men $48 \\geq 10$, så vi justerer: $4{,}8 \\times 10^{13}$',
            answer: '4,8 × 10^13',
          },
          {
            label: 'd',
            task: '$\\frac{3{,}6 \\times 10^{-2}}{9 \\times 10^{-5}}$',
            solution: '$\\frac{3{,}6}{9} \\times 10^{-2-(-5)} = 0{,}4 \\times 10^3$. Men $0{,}4 < 1$, så vi justerer: $4 \\times 10^2$',
            answer: '4 × 10^2',
          },
        ],
        solution: 'a) $8 \\times 10^8$, b) $3 \\times 10^8$, c) $4{,}8 \\times 10^{13}$, d) $4 \\times 10^2$',
        hints: ['Gang tallene foran for seg, og adder eksponentene. Husk å sjekke at svaret er på korrekt standardform.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Standardform
- Et tall på standardform skrives som $a \\times 10^n$ der $1 \\leq a < 10$
- **Store tall:** positiv eksponent ($10^6 = 1\\,000\\,000$)
- **Små tall:** negativ eksponent ($10^{-6} = 0{,}000001$)

### Regneregler
- **Multiplikasjon:** Gang $a$-verdiene, adder eksponentene
- **Divisjon:** Del $a$-verdiene, subtraher eksponentene
- **Alltid sjekk** at $1 \\leq a < 10$ i svaret

### Praktisk bruk
Standardform brukes mye i naturvitenskap, astronomi og teknologi for å håndtere ekstremt store og små tall.`,
    },

    // --- Samleoppgaver ---

    {
      id: '10-7-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-7-2-oppg-5',
        number: '7.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk standardform til å løse praktiske problemer.',
        subTasks: [
          {
            label: 'a',
            task: 'Lyset reiser med hastigheten $3 \\times 10^8$ m/s. Hvor langt reiser lyset på ett år (ca. $3{,}15 \\times 10^7$ sekunder)? Gi svaret på standardform.',
            solution: 'Strekning $= 3 \\times 10^8 \\cdot 3{,}15 \\times 10^7 = 9{,}45 \\times 10^{15}$ m. Ett lysår er altså ca. $9{,}45 \\times 10^{15}$ meter.',
            answer: '9,45 × 10^15',
          },
          {
            label: 'b',
            task: 'Jordens masse er ca. $6 \\times 10^{24}$ kg. Solens masse er ca. $2 \\times 10^{30}$ kg. Hvor mange ganger tyngre er Sola enn Jorda?',
            solution: '$\\frac{2 \\times 10^{30}}{6 \\times 10^{24}} = \\frac{2}{6} \\times 10^{30-24} = 0{,}333\\ldots \\times 10^6 \\approx 3{,}3 \\times 10^5$. Sola er ca. $330\\,000$ ganger tyngre enn Jorda.',
            answer: '3,3 × 10^5',
          },
        ],
        solution: 'a) $9{,}45 \\times 10^{15}$ m. b) Ca. $3{,}3 \\times 10^5$ ganger.',
        hints: ['Strekning = fart × tid. For å sammenligne: del det største tallet på det minste.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '10-7-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-7-2-oppg-6',
        number: '7.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avansert regning med standardform.',
        subTasks: [
          {
            label: 'a',
            task: 'Et hydrogenatom har masse $1{,}67 \\times 10^{-27}$ kg. Hvor mye veier $6{,}02 \\times 10^{23}$ hydrogenatomer (ett mol)?',
            solution: '$1{,}67 \\times 10^{-27} \\cdot 6{,}02 \\times 10^{23} = (1{,}67 \\cdot 6{,}02) \\times 10^{-27+23} = 10{,}0534 \\times 10^{-4}$. Vi justerer: $1{,}00534 \\times 10^{-3}$ kg $\\approx 1{,}0 \\times 10^{-3}$ kg $= 1$ gram.',
            answer: '1,0 × 10^-3',
          },
          {
            label: 'b',
            task: 'Norges statsbudsjett er ca. $1{,}7 \\times 10^{12}$ kr. Norge har ca. $5{,}5 \\times 10^6$ innbyggere. Hvor mye er det per innbygger?',
            solution: '$\\frac{1{,}7 \\times 10^{12}}{5{,}5 \\times 10^6} = \\frac{1{,}7}{5{,}5} \\times 10^{12-6} \\approx 0{,}309 \\times 10^6 = 3{,}09 \\times 10^5 \\approx 309\\,000$ kr per innbygger.',
            answer: '3,09 × 10^5',
          },
        ],
        solution: 'a) Ca. $1{,}0 \\times 10^{-3}$ kg (1 gram). b) Ca. $3{,}1 \\times 10^5$ kr (ca. 309 000 kr per innbygger).',
        hints: ['Bruk reglene for multiplikasjon og divisjon med standardform.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '10-7-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '10-7-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '10-7-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Skriv tallene på standardform.',
            subTasks: [
              { label: 'a', task: '$47\\,000$', solution: '$47\\,000 = 4{,}7 \\times 10^4$' },
              { label: 'b', task: '$3\\,200\\,000$', solution: '$3\\,200\\,000 = 3{,}2 \\times 10^6$' },
              { label: 'c', task: '$0{,}00056$', solution: '$0{,}00056 = 5{,}6 \\times 10^{-4}$' },
              { label: 'd', task: '$0{,}0000091$', solution: '$0{,}0000091 = 9{,}1 \\times 10^{-6}$' },
              { label: 'e', task: '$815\\,000\\,000$', solution: '$815\\,000\\,000 = 8{,}15 \\times 10^8$' },
              { label: 'f', task: '$0{,}108$', solution: '$0{,}108 = 1{,}08 \\times 10^{-1}$' },
            ],
            solution: 'a) $4{,}7 \\times 10^4$, b) $3{,}2 \\times 10^6$, c) $5{,}6 \\times 10^{-4}$, d) $9{,}1 \\times 10^{-6}$, e) $8{,}15 \\times 10^8$, f) $1{,}08 \\times 10^{-1}$',
            hideInlineSolution: true,
            hints: ['Flytt kommaet slik at du får et tall mellom 1 og 10. Tell antall plasser — det er eksponenten.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '10-7-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Skriv tallene som vanlige tall (uten standardform).',
            subTasks: [
              { label: 'a', task: '$3{,}5 \\times 10^3$', solution: '$3{,}5 \\times 10^3 = 3\\,500$' },
              { label: 'b', task: '$7{,}08 \\times 10^5$', solution: '$7{,}08 \\times 10^5 = 708\\,000$' },
              { label: 'c', task: '$2{,}1 \\times 10^{-2}$', solution: '$2{,}1 \\times 10^{-2} = 0{,}021$' },
              { label: 'd', task: '$9{,}99 \\times 10^{-5}$', solution: '$9{,}99 \\times 10^{-5} = 0{,}0000999$' },
              { label: 'e', task: '$1{,}0 \\times 10^7$', solution: '$1{,}0 \\times 10^7 = 10\\,000\\,000$' },
              { label: 'f', task: '$6{,}674 \\times 10^{-11}$', solution: '$6{,}674 \\times 10^{-11} = 0{,}00000000006674$' },
            ],
            solution: 'a) $3\\,500$, b) $708\\,000$, c) $0{,}021$, d) $0{,}0000999$, e) $10\\,000\\,000$, f) $0{,}00000000006674$',
            hideInlineSolution: true,
            hints: ['Positiv eksponent: flytt kommaet til høyre. Negativ eksponent: flytt kommaet til venstre.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '10-7-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut og skriv svaret på standardform.',
            subTasks: [
              { label: 'a', task: '$(3 \\times 10^4) \\cdot (2 \\times 10^3)$', solution: '$3 \\cdot 2 \\times 10^{4+3} = 6 \\times 10^7$' },
              { label: 'b', task: '$(8 \\times 10^5) \\div (4 \\times 10^2)$', solution: '$\\frac{8}{4} \\times 10^{5-2} = 2 \\times 10^3$' },
              { label: 'c', task: '$(5 \\times 10^{-3}) \\cdot (6 \\times 10^{-2})$', solution: '$5 \\cdot 6 \\times 10^{-3+(-2)} = 30 \\times 10^{-5} = 3{,}0 \\times 10^{-4}$' },
              { label: 'd', task: '$(9{,}6 \\times 10^8) \\div (1{,}2 \\times 10^3)$', solution: '$\\frac{9{,}6}{1{,}2} \\times 10^{8-3} = 8 \\times 10^5$' },
              { label: 'e', task: '$(4{,}5 \\times 10^3) \\cdot (2 \\times 10^5)$', solution: '$4{,}5 \\cdot 2 \\times 10^{3+5} = 9{,}0 \\times 10^8$' },
              { label: 'f', task: '$(7{,}2 \\times 10^{-4}) \\div (9 \\times 10^{-7})$', solution: '$\\frac{7{,}2}{9} \\times 10^{-4-(-7)} = 0{,}8 \\times 10^3 = 8{,}0 \\times 10^2$' },
            ],
            solution: 'a) $6 \\times 10^7$, b) $2 \\times 10^3$, c) $3{,}0 \\times 10^{-4}$, d) $8 \\times 10^5$, e) $9{,}0 \\times 10^8$, f) $8{,}0 \\times 10^2$',
            hideInlineSolution: true,
            hints: ['Ved multiplikasjon: gang tallene foran og adder eksponentene. Ved divisjon: del tallene foran og trekk fra eksponentene.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '10-7-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs praktiske oppgaver med standardform.',
            subTasks: [
              { label: 'a', task: 'Avstanden fra jorda til sola er ca. $1{,}5 \\times 10^{11}$ m. Lyset beveger seg med hastighet $3 \\times 10^8$ m/s. Hvor lang tid bruker lyset fra sola til jorda?', solution: '$t = \\frac{1{,}5 \\times 10^{11}}{3 \\times 10^8} = 0{,}5 \\times 10^3 = 5{,}0 \\times 10^2 = 500$ sekunder $\\approx 8{,}3$ minutter.' },
              { label: 'b', task: 'Et hydrogenatom har masse ca. $1{,}67 \\times 10^{-27}$ kg. Hvor mange hydrogenatomer er det i $1$ kg hydrogen?', solution: '$\\frac{1}{1{,}67 \\times 10^{-27}} = \\frac{1}{1{,}67} \\times 10^{27} \\approx 5{,}99 \\times 10^{26}$ atomer.' },
              { label: 'c', task: 'En datamaskin utfører $4{,}2 \\times 10^9$ beregninger per sekund. Hvor mange beregninger gjør den på ett døgn?', solution: 'Et døgn har $24 \\cdot 60 \\cdot 60 = 86\\,400 = 8{,}64 \\times 10^4$ sekunder. $4{,}2 \\times 10^9 \\cdot 8{,}64 \\times 10^4 = 36{,}288 \\times 10^{13} \\approx 3{,}63 \\times 10^{14}$ beregninger.' },
              { label: 'd', task: 'Jordens masse er ca. $5{,}97 \\times 10^{24}$ kg og månens masse er ca. $7{,}35 \\times 10^{22}$ kg. Hvor mange ganger tyngre er jorda enn månen?', solution: '$\\frac{5{,}97 \\times 10^{24}}{7{,}35 \\times 10^{22}} = \\frac{5{,}97}{7{,}35} \\times 10^{24-22} \\approx 0{,}812 \\times 10^2 = 81{,}2$. Jorda er ca. 81 ganger tyngre.' },
            ],
            solution: 'a) Ca. 500 s ($\\approx 8{,}3$ min). b) Ca. $6{,}0 \\times 10^{26}$. c) Ca. $3{,}6 \\times 10^{14}$. d) Ca. 81 ganger.',
            hideInlineSolution: true,
            hints: ['Bruk formlene: tid = strekning/fart, antall = totalmasse/masse per enhet.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '10-7-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sorter og sammenlign tall på standardform.',
            subTasks: [
              { label: 'a', task: 'Sorter fra minst til størst: $3{,}1 \\times 10^5$, $9{,}8 \\times 10^4$, $2{,}5 \\times 10^6$, $7{,}7 \\times 10^5$', solution: '$9{,}8 \\times 10^4 < 3{,}1 \\times 10^5 < 7{,}7 \\times 10^5 < 2{,}5 \\times 10^6$' },
              { label: 'b', task: 'Sorter fra minst til størst: $4{,}2 \\times 10^{-3}$, $8{,}1 \\times 10^{-4}$, $1{,}5 \\times 10^{-2}$, $3{,}3 \\times 10^{-3}$', solution: '$8{,}1 \\times 10^{-4} < 3{,}3 \\times 10^{-3} < 4{,}2 \\times 10^{-3} < 1{,}5 \\times 10^{-2}$' },
              { label: 'c', task: 'Hvor mange ganger større er $6 \\times 10^8$ enn $3 \\times 10^5$?', solution: '$\\frac{6 \\times 10^8}{3 \\times 10^5} = 2 \\times 10^3 = 2\\,000$ ganger større.' },
              { label: 'd', task: 'Et rødt blodlegeme har diameter ca. $7 \\times 10^{-6}$ m. Et bakterie har diameter ca. $1 \\times 10^{-6}$ m. Hvor mange ganger større er blodlegemet?', solution: '$\\frac{7 \\times 10^{-6}}{1 \\times 10^{-6}} = 7$ ganger større i diameter.' },
              { label: 'e', task: 'Regn ut $(2{,}5 \\times 10^3) + (3{,}5 \\times 10^3)$ og skriv svaret på standardform.', solution: '$(2{,}5 + 3{,}5) \\times 10^3 = 6{,}0 \\times 10^3$' },
              { label: 'f', task: 'Regn ut $(4{,}8 \\times 10^5) - (2{,}3 \\times 10^4)$. (Tips: gjør om til samme eksponent først.)', solution: '$4{,}8 \\times 10^5 - 0{,}23 \\times 10^5 = 4{,}57 \\times 10^5$' },
            ],
            solution: 'a-b) Se deloppgavene. c) 2000 ganger. d) 7 ganger. e) $6{,}0 \\times 10^3$. f) $4{,}57 \\times 10^5$.',
            hideInlineSolution: true,
            hints: ['Ved sammenligning: se på eksponenten først. Lik eksponent → sammenlign tallene foran. Ved addisjon/subtraksjon: gjør om til lik eksponent.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '10-7-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatte oppgaver med standardform i naturvitenskap.',
            subTasks: [
              { label: 'a', task: 'Melkeveien har ca. $2 \\times 10^{11}$ stjerner. Det observerbare universet har ca. $2 \\times 10^{12}$ galakser. Omtrent hvor mange stjerner er det i det observerbare universet?', solution: '$2 \\times 10^{11} \\cdot 2 \\times 10^{12} = 4 \\times 10^{23}$ stjerner. Til sammenligning er Avogadros tall $6{,}022 \\times 10^{23}$.' },
              { label: 'b', task: 'En menneskecelle har ca. $6{,}4 \\times 10^9$ basepar i DNA-et. Hvert basepar er ca. $3{,}4 \\times 10^{-10}$ m langt. Hvor langt ville DNA-et i én celle være om det ble strukket ut?', solution: '$6{,}4 \\times 10^9 \\cdot 3{,}4 \\times 10^{-10} = 21{,}76 \\times 10^{-1} = 2{,}176$ m $\\approx 2{,}2$ m.' },
              { label: 'c', task: 'Energien i en foton med bølgelengde $\\lambda$ er $E = \\frac{hc}{\\lambda}$, der $h = 6{,}63 \\times 10^{-34}$ J$\\cdot$s og $c = 3{,}0 \\times 10^8$ m/s. Finn energien til en foton med bølgelengde $\\lambda = 5{,}0 \\times 10^{-7}$ m (grønt lys).', solution: '$E = \\frac{6{,}63 \\times 10^{-34} \\cdot 3{,}0 \\times 10^8}{5{,}0 \\times 10^{-7}} = \\frac{19{,}89 \\times 10^{-26}}{5{,}0 \\times 10^{-7}} = 3{,}978 \\times 10^{-19} \\approx 4{,}0 \\times 10^{-19}$ J.' },
            ],
            solution: 'a) Ca. $4 \\times 10^{23}$. b) Ca. $2{,}2$ m. c) Ca. $4{,}0 \\times 10^{-19}$ J.',
            hideInlineSolution: true,
            hints: ['Del opp beregningene: regn med tallene foran for seg, og eksponentene for seg.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Primtall og primtallsfaktorisering
// LK20: Utforske matematiske eigenskapar og samanhengar ved å bruke
//        programmering
// ============================================================================

export const CHAPTER_10_7_3: TextbookChapter = {
  id: '10-7-3',
  courseId: '10',
  chapterNumber: '7.3',
  title: 'Primtall og primtallsfaktorisering',
  description: 'Lær om primtall, sammensatte tall, Eratosthenes\' sil, primtallsfaktorisering, og hvordan du finner MFF (minste felles multiplum) og SFF (største felles faktor).',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske matematiske eigenskapar og samanhengar ved å bruke programmering',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-7-3-intro',
      type: 'text',
      content: `## Primtall: Tallenes byggesteiner

Tenk på LEGO. Med bare noen grunnleggende klosser kan du bygge nesten hva som helst. Primtallene er matematikkens LEGO-klosser — de er de grunnleggende byggesteinene som alle andre tall er satt sammen av.

Tallet $12$ for eksempel kan deles opp i $2 \\times 2 \\times 3$. Du kan ikke dele $2$ eller $3$ videre — de er «udelelige». De er primtall.

I dette kapittelet skal du lære:
- Hva et primtall er og hvordan du gjenkjenner dem
- Eratosthenes' sil — en metode for å finne primtall
- Primtallsfaktorisering — å dele opp tall i primtallsfaktorer
- Hvordan du finner største felles faktor (SFF) og minste felles multiplum (MFF)`,
    },

    // ========== DEFINISJON: PRIMTALL ==========
    {
      id: '10-7-3-def-1',
      type: 'definition',
      title: 'Primtall og sammensatte tall',
      content: `Et **primtall** er et naturlig tall større enn $1$ som bare er delelig med $1$ og seg selv.

De første primtallene er:
$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, \\ldots$$

Et **sammensatt tall** er et naturlig tall større enn $1$ som har flere enn to faktorer (altså kan deles på noe annet enn $1$ og seg selv).

**Eksempler:**
- $7$ er et primtall: faktorene er bare $1$ og $7$
- $12$ er et sammensatt tall: faktorene er $1, 2, 3, 4, 6, 12$
- $1$ er **verken** primtall eller sammensatt tall (spesialtilfelle)
- $2$ er det eneste **partalls-primtallet**

**Merk:** Det finnes uendelig mange primtall. Matematikere har lett etter dem i tusenvis av år!`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '10-7-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Er tallet et primtall?',
      problem: 'Avgjør om $29$, $51$ og $67$ er primtall.',
      solution: `**Sjekk $29$:**
Vi trenger bare å sjekke deling med primtall opp til $\\sqrt{29} \\approx 5{,}4$.
- $29 \\div 2 = 14{,}5$ — nei
- $29 \\div 3 = 9{,}67\\ldots$ — nei
- $29 \\div 5 = 5{,}8$ — nei

$29$ er et **primtall**.

**Sjekk $51$:**
$\\sqrt{51} \\approx 7{,}1$, så vi sjekker primtall opp til $7$:
- $51 \\div 2 = 25{,}5$ — nei
- $51 \\div 3 = 17$ — ja!

$51 = 3 \\times 17$, så $51$ er et **sammensatt tall**.

**Sjekk $67$:**
$\\sqrt{67} \\approx 8{,}2$, så vi sjekker opp til $7$:
- $67 \\div 2 = 33{,}5$ — nei
- $67 \\div 3 = 22{,}33\\ldots$ — nei
- $67 \\div 5 = 13{,}4$ — nei
- $67 \\div 7 = 9{,}57\\ldots$ — nei

$67$ er et **primtall**.

**Huskeregel:** Du trenger bare å sjekke deling med primtall opp til kvadratroten av tallet.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '10-7-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-7-3-oppg-1',
        number: '7.13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om tallene er primtall eller sammensatte tall.',
        subTasks: [
          {
            label: 'a',
            task: '$37$',
            solution: 'Primtall. $\\sqrt{37} \\approx 6{,}1$. Sjekker $2, 3, 5$: ingen går opp.',
            multipleChoiceOptions: ['Primtall', 'Sammensatt tall'],
          },
          {
            label: 'b',
            task: '$49$',
            solution: 'Sammensatt tall. $49 = 7 \\times 7$.',
            multipleChoiceOptions: ['Sammensatt tall', 'Primtall'],
          },
          {
            label: 'c',
            task: '$83$',
            solution: 'Primtall. $\\sqrt{83} \\approx 9{,}1$. Sjekker $2, 3, 5, 7$: ingen går opp.',
            multipleChoiceOptions: ['Primtall', 'Sammensatt tall'],
          },
          {
            label: 'd',
            task: '$91$',
            solution: 'Sammensatt tall. $91 = 7 \\times 13$.',
            multipleChoiceOptions: ['Sammensatt tall', 'Primtall'],
          },
        ],
        solution: 'a) Primtall, b) Sammensatt ($7 \\times 7$), c) Primtall, d) Sammensatt ($7 \\times 13$)',
        hints: ['Sjekk deling med 2, 3, 5, 7 osv. opp til kvadratroten av tallet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: ERATOSTHENES' SIL ==========
    {
      id: '10-7-3-text-sil',
      type: 'text',
      content: `## Eratosthenes' sil

Den greske matematikeren Eratosthenes (276–194 f.Kr.) fant en elegant metode for å finne alle primtall opp til et gitt tall. Metoden kalles **Eratosthenes' sil**.

**Slik fungerer det (for å finne alle primtall opp til 50):**

1. Skriv opp alle tall fra 2 til 50
2. $2$ er primtall. Stryk alle multipler av $2$: $4, 6, 8, 10, \\ldots$
3. Neste tall som ikke er strøket er $3$. Stryk alle multipler av $3$: $6, 9, 12, 15, \\ldots$
4. Neste er $5$. Stryk alle multipler av $5$: $10, 15, 20, 25, \\ldots$
5. Neste er $7$. Stryk alle multipler av $7$: $14, 21, 28, 35, \\ldots$
6. Siden $\\sqrt{50} \\approx 7{,}1$, er vi ferdige!

**Primtallene opp til 50:**
$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$$

Det er 15 primtall mellom 1 og 50.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '10-7-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-7-3-oppg-2',
        number: '7.14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Eratosthenes\' sil.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn alle primtall mellom 50 og 100 ved å bruke Eratosthenes\' sil. Hvor mange er det?',
            solution: 'Primtallene mellom 50 og 100: $53, 59, 61, 67, 71, 73, 79, 83, 89, 97$. Det er 10 primtall.',
          },
          {
            label: 'b',
            task: 'Ser du noen mønstre? Er det like mange primtall mellom 1–50 som mellom 50–100?',
            solution: 'Nei, det er 15 primtall mellom 1–50, men bare 10 mellom 50–100. Primtallene blir «tynnere» jo høyere opp vi kommer — det er større og større avstand mellom dem.',
          },
        ],
        solution: 'a) 10 primtall mellom 50 og 100. b) Primtallene blir sjeldnere for store tall.',
        hints: ['For tall opp til 100 trenger du bare å sjekke deling med 2, 3, 5 og 7 (fordi $\\sqrt{100} = 10$).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: PRIMTALLSFAKTORISERING ==========
    {
      id: '10-7-3-def-2',
      type: 'definition',
      title: 'Primtallsfaktorisering',
      content: `**Primtallsfaktorisering** betyr å skrive et sammensatt tall som et produkt av bare primtall.

Aritmetikkens fundamentalteorem sier at hvert naturlig tall større enn $1$ kan skrives som et produkt av primtall på **nøyaktig én måte** (bortsett fra rekkefølgen).

**Eksempler:**
- $12 = 2 \\times 2 \\times 3 = 2^2 \\times 3$
- $60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$
- $100 = 2 \\times 2 \\times 5 \\times 5 = 2^2 \\times 5^2$

**Metode (faktortre):**
1. Del tallet på det minste primtallet som går opp
2. Del kvotienten på det minste primtallet som går opp
3. Fortsett til du står igjen med $1$

**Eksempel med faktortre for $60$:**
$$60 = 2 \\times 30 = 2 \\times 2 \\times 15 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '10-7-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Primtallsfaktorisering',
      problem: 'Finn primtallsfaktoriseringen av $180$ og $252$.',
      solution: `**$180$:**
$$180 \\div 2 = 90$$
$$90 \\div 2 = 45$$
$$45 \\div 3 = 15$$
$$15 \\div 3 = 5$$
$$5 \\div 5 = 1$$

$$180 = 2^2 \\times 3^2 \\times 5$$

**$252$:**
$$252 \\div 2 = 126$$
$$126 \\div 2 = 63$$
$$63 \\div 3 = 21$$
$$21 \\div 3 = 7$$
$$7 \\div 7 = 1$$

$$252 = 2^2 \\times 3^2 \\times 7$$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '10-7-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-7-3-oppg-3',
        number: '7.15',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn primtallsfaktoriseringen.',
        subTasks: [
          {
            label: 'a',
            task: '$72$',
            solution: '$72 = 2 \\times 36 = 2 \\times 2 \\times 18 = 2 \\times 2 \\times 2 \\times 9 = 2 \\times 2 \\times 2 \\times 3 \\times 3 = 2^3 \\times 3^2$',
            answer: '2^3 × 3^2',
          },
          {
            label: 'b',
            task: '$150$',
            solution: '$150 = 2 \\times 75 = 2 \\times 3 \\times 25 = 2 \\times 3 \\times 5 \\times 5 = 2 \\times 3 \\times 5^2$',
            answer: '2 × 3 × 5^2',
          },
          {
            label: 'c',
            task: '$360$',
            solution: '$360 = 2 \\times 180 = 2^2 \\times 90 = 2^2 \\times 2 \\times 45 = 2^3 \\times 45 = 2^3 \\times 3^2 \\times 5$',
            answer: '2^3 × 3^2 × 5',
          },
          {
            label: 'd',
            task: '$1001$',
            solution: '$1001 \\div 7 = 143$, $143 \\div 11 = 13$. Altså $1001 = 7 \\times 11 \\times 13$',
            answer: '7 × 11 × 13',
          },
        ],
        solution: 'a) $2^3 \\times 3^2$, b) $2 \\times 3 \\times 5^2$, c) $2^3 \\times 3^2 \\times 5$, d) $7 \\times 11 \\times 13$',
        hints: ['Start med å dele på 2 så mange ganger som mulig, deretter 3, deretter 5, osv.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: SFF OG MFF ==========
    {
      id: '10-7-3-def-3',
      type: 'definition',
      title: 'SFF og MFF',
      content: `**Største felles faktor (SFF)** — også kalt GCD — er det **største** tallet som går opp i begge tallene.

**Minste felles multiplum (MFF)** — også kalt LCM — er det **minste** tallet som begge tallene går opp i.

**Metode med primtallsfaktorisering:**

For å finne **SFF**: Velg den **laveste** potensen av hvert felles primtall.

For å finne **MFF**: Velg den **høyeste** potensen av hvert primtall som forekommer.

**Eksempel:** Finn SFF og MFF av $12$ og $18$.
- $12 = 2^2 \\times 3$
- $18 = 2 \\times 3^2$

**SFF**: Felles primtall med laveste potens: $2^1 \\times 3^1 = 6$
**MFF**: Alle primtall med høyeste potens: $2^2 \\times 3^2 = 36$

**Nyttig sammenheng:** $\\text{SFF}(a,b) \\times \\text{MFF}(a,b) = a \\times b$`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '10-7-3-ex-3',
      type: 'example',
      title: 'Eksempel 3: Finne SFF og MFF',
      problem: 'Finn SFF og MFF av $60$ og $84$.',
      solution: `**Steg 1: Primtallsfaktorisering**
$$60 = 2^2 \\times 3 \\times 5$$
$$84 = 2^2 \\times 3 \\times 7$$

**Steg 2: SFF (velg laveste potens av felles primtall)**
Felles primtall: $2$ og $3$
$$\\text{SFF} = 2^2 \\times 3 = 12$$

**Steg 3: MFF (velg høyeste potens av alle primtall)**
Alle primtall: $2, 3, 5, 7$
$$\\text{MFF} = 2^2 \\times 3 \\times 5 \\times 7 = 420$$

**Kontroll:** $\\text{SFF} \\times \\text{MFF} = 12 \\times 420 = 5040 = 60 \\times 84$ ✓`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '10-7-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-7-3-oppg-4',
        number: '7.16',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk primtallsfaktorisering til å finne SFF og MFF.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn SFF og MFF av $24$ og $36$.',
            solution: '$24 = 2^3 \\times 3$, $36 = 2^2 \\times 3^2$. SFF $= 2^2 \\times 3 = 12$. MFF $= 2^3 \\times 3^2 = 72$.',
          },
          {
            label: 'b',
            task: 'Finn SFF og MFF av $45$ og $75$.',
            solution: '$45 = 3^2 \\times 5$, $75 = 3 \\times 5^2$. SFF $= 3 \\times 5 = 15$. MFF $= 3^2 \\times 5^2 = 225$.',
          },
          {
            label: 'c',
            task: 'Finn SFF og MFF av $48$, $60$ og $72$.',
            solution: '$48 = 2^4 \\times 3$, $60 = 2^2 \\times 3 \\times 5$, $72 = 2^3 \\times 3^2$. SFF $= 2^2 \\times 3 = 12$. MFF $= 2^4 \\times 3^2 \\times 5 = 720$.',
          },
        ],
        solution: 'a) SFF $= 12$, MFF $= 72$. b) SFF $= 15$, MFF $= 225$. c) SFF $= 12$, MFF $= 720$.',
        hints: ['Skriv opp primtallsfaktoriseringen av hvert tall først. Sammenlign så potensene.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Primtall
- Et primtall er bare delelig med $1$ og seg selv
- $2$ er det minste (og eneste partalls-) primtallet
- $1$ er verken primtall eller sammensatt tall

### Primtallsfaktorisering
- Hvert tall $> 1$ kan skrives som et unikt produkt av primtall
- Bruk faktortre: del gjentatt på det minste primtallet som går opp

### SFF og MFF
- **SFF:** Velg laveste potens av **felles** primtall
- **MFF:** Velg høyeste potens av **alle** primtall
- Sjekk: $\\text{SFF}(a,b) \\times \\text{MFF}(a,b) = a \\times b$`,
    },

    // --- Samleoppgaver ---

    {
      id: '10-7-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-7-3-oppg-5',
        number: '7.17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk primtall til å løse praktiske problemer.',
        subTasks: [
          {
            label: 'a',
            task: 'Du har 24 røde roser og 36 hvite roser. Du vil lage buketter som har like mange røde og like mange hvite roser i hver bukett, uten at noen roser blir til overs. Hva er det største antallet buketter du kan lage?',
            solution: 'Vi trenger SFF av 24 og 36. $24 = 2^3 \\times 3$, $36 = 2^2 \\times 3^2$. SFF $= 2^2 \\times 3 = 12$. Du kan lage 12 buketter, hver med $24 \\div 12 = 2$ røde og $36 \\div 12 = 3$ hvite roser.',
            answer: '12',
          },
          {
            label: 'b',
            task: 'Buss A går hvert 12. minutt, og buss B går hvert 18. minutt. Begge bussene er ved holdeplassen klokka 08:00. Når er neste gang begge bussene er ved holdeplassen samtidig?',
            solution: 'Vi trenger MFF av 12 og 18. $12 = 2^2 \\times 3$, $18 = 2 \\times 3^2$. MFF $= 2^2 \\times 3^2 = 36$ minutter. Neste gang er kl. 08:36.',
            answer: '08:36',
          },
        ],
        solution: 'a) 12 buketter. b) Kl. 08:36.',
        hints: ['Spørsmål om å dele likt → SFF. Spørsmål om å møtes igjen → MFF.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '10-7-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-7-3-oppg-6',
        number: '7.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utforsk primtall med programmering (valgfritt).',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en algoritme (pseudokode eller Python) som sjekker om et tall $n$ er et primtall. Hint: Du trenger bare å sjekke deling opp til $\\sqrt{n}$.',
            solution: 'Pseudokode:\n1. Hvis $n < 2$: ikke primtall\n2. For $i = 2$ til $\\sqrt{n}$:\n   - Hvis $n \\div i$ gir rest $0$: ikke primtall\n3. Ellers: primtall',
          },
          {
            label: 'b',
            task: 'Bruk algoritmen til å finne alle primtall mellom 100 og 150.',
            solution: 'Primtallene mellom 100 og 150: $101, 103, 107, 109, 113, 127, 131, 137, 139, 149$. Det er 10 stykker.',
          },
          {
            label: 'c',
            task: 'Primtallstvillinger er primtallspar med avstand 2 (f.eks. $11$ og $13$). Finn alle primtallstvillinger mellom 1 og 100.',
            solution: '$(3,5), (5,7), (11,13), (17,19), (29,31), (41,43), (59,61), (71,73)$. Det er 8 par.',
          },
        ],
        solution: 'a) Sjekk deling opp til $\\sqrt{n}$. b) 10 primtall mellom 100 og 150. c) 8 primtallstvillingpar mellom 1 og 100.',
        hints: ['I Python kan du bruke: for i in range(2, int(n**0.5)+1): if n % i == 0: ...'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '10-7-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '10-7-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '10-7-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Avgjør om tallene er primtall eller sammensatte tall.',
            subTasks: [
              { label: 'a', task: '$37$', solution: '$37$ er et primtall. Det er ikke delelig med $2, 3$ eller $5$ (vi trenger bare sjekke opp til $\\sqrt{37} \\approx 6{,}1$).' },
              { label: 'b', task: '$51$', solution: '$51 = 3 \\times 17$, altså sammensatt.' },
              { label: 'c', task: '$67$', solution: '$67$ er et primtall. Ikke delelig med $2, 3, 5$ eller $7$ ($\\sqrt{67} \\approx 8{,}2$).' },
              { label: 'd', task: '$91$', solution: '$91 = 7 \\times 13$, altså sammensatt.' },
              { label: 'e', task: '$2$', solution: '$2$ er et primtall — det minste primtallet, og det eneste partallsprimtallet.' },
              { label: 'f', task: '$119$', solution: '$119 = 7 \\times 17$, altså sammensatt.' },
            ],
            solution: 'a) Primtall, b) Sammensatt, c) Primtall, d) Sammensatt, e) Primtall, f) Sammensatt',
            hideInlineSolution: true,
            hints: ['Sjekk deling med primtall opp til kvadratroten av tallet: $2, 3, 5, 7, 11, \\ldots$'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '10-7-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Skriv tallene som produkt av primtallsfaktorer (primtallsfaktorisering).',
            subTasks: [
              { label: 'a', task: '$60$', solution: '$60 = 2^2 \\times 3 \\times 5$' },
              { label: 'b', task: '$84$', solution: '$84 = 2^2 \\times 3 \\times 7$' },
              { label: 'c', task: '$150$', solution: '$150 = 2 \\times 3 \\times 5^2$' },
              { label: 'd', task: '$252$', solution: '$252 = 2^2 \\times 3^2 \\times 7$' },
              { label: 'e', task: '$500$', solution: '$500 = 2^2 \\times 5^3$' },
              { label: 'f', task: '$1001$', solution: '$1001 = 7 \\times 11 \\times 13$' },
            ],
            solution: 'a) $2^2 \\times 3 \\times 5$, b) $2^2 \\times 3 \\times 7$, c) $2 \\times 3 \\times 5^2$, d) $2^2 \\times 3^2 \\times 7$, e) $2^2 \\times 5^3$, f) $7 \\times 11 \\times 13$',
            hideInlineSolution: true,
            hints: ['Bruk faktortreet: Del på det minste primtallet som går opp, gjenta til du står igjen med et primtall.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '10-7-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn SFF (største felles faktor) og MFF (minste felles flertall).',
            subTasks: [
              { label: 'a', task: 'SFF$(24, 36)$', solution: '$24 = 2^3 \\times 3$ og $36 = 2^2 \\times 3^2$. SFF $= 2^2 \\times 3 = 12$.' },
              { label: 'b', task: 'MFF$(24, 36)$', solution: 'MFF $= 2^3 \\times 3^2 = 72$.' },
              { label: 'c', task: 'SFF$(45, 75)$', solution: '$45 = 3^2 \\times 5$ og $75 = 3 \\times 5^2$. SFF $= 3 \\times 5 = 15$.' },
              { label: 'd', task: 'MFF$(45, 75)$', solution: 'MFF $= 3^2 \\times 5^2 = 225$.' },
              { label: 'e', task: 'SFF$(28, 42, 70)$', solution: '$28 = 2^2 \\times 7$, $42 = 2 \\times 3 \\times 7$, $70 = 2 \\times 5 \\times 7$. SFF $= 2 \\times 7 = 14$.' },
              { label: 'f', task: 'MFF$(28, 42, 70)$', solution: 'MFF $= 2^2 \\times 3 \\times 5 \\times 7 = 420$.' },
            ],
            solution: 'a) $12$, b) $72$, c) $15$, d) $225$, e) $14$, f) $420$',
            hideInlineSolution: true,
            hints: ['SFF: velg laveste potens av felles primfaktorer. MFF: velg høyeste potens av alle primfaktorer.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '10-7-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk SFF og MFF til å løse praktiske problemer.',
            subTasks: [
              { label: 'a', task: 'Sara har 48 røde roser og 36 hvite roser. Hun vil lage like buketter med samme antall røde og hvite roser i hver. Hva er det største antallet buketter hun kan lage?', solution: 'SFF$(48, 36) = 12$. Hun kan lage 12 buketter med 4 røde og 3 hvite roser i hver.' },
              { label: 'b', task: 'To busser kjører fra samme stasjon. Buss A kjører hvert 12. minutt, buss B hvert 18. minutt. De starter samtidig kl. 08:00. Når møtes de neste gang?', solution: 'MFF$(12, 18) = 36$ minutter. De møtes kl. 08:36.' },
              { label: 'c', task: 'En baker har 120 sjokoladebiter og 180 nøtter. Han vil dele dem likt i poser med samme innhold. Hvor mange poser kan han lage, og hva inneholder hver pose?', solution: 'SFF$(120, 180) = 60$. Han lager 60 poser med 2 sjokoladebiter og 3 nøtter i hver.' },
              { label: 'd', task: 'To tannhjul har henholdsvis 24 og 32 tenner. Etter hvor mange omdreininger av det lille tannhjulet er begge tilbake i startposisjonen?', solution: 'MFF$(24, 32) = 96$. Det lille tannhjulet gjør $96 \\div 24 = 4$ omdreininger, det store gjør $96 \\div 32 = 3$ omdreininger.' },
              { label: 'e', task: 'Forkort brøken $\\frac{168}{252}$ ved å bruke SFF.', solution: 'SFF$(168, 252) = 84$. $\\frac{168}{252} = \\frac{168 \\div 84}{252 \\div 84} = \\frac{2}{3}$.' },
            ],
            solution: 'a) 12 buketter. b) Kl. 08:36. c) 60 poser. d) 4 omdreininger. e) $\\frac{2}{3}$.',
            hideInlineSolution: true,
            hints: ['Dele likt → SFF. Møtes igjen / sammenfaller → MFF. Forkorte brøk → SFF av teller og nevner.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '10-7-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Utforsk egenskaper ved primtall og faktorisering.',
            subTasks: [
              { label: 'a', task: 'Finn alle primtall mellom 40 og 60.', solution: '$41, 43, 47, 53, 59$ — det er 5 primtall mellom 40 og 60.' },
              { label: 'b', task: 'Forklar hvorfor $2$ er det eneste partallsprimtallet.', solution: 'Alle andre partall er delelig med $2$, og har dermed $2$ som faktor i tillegg til $1$ og seg selv. Derfor er de ikke primtall.' },
              { label: 'c', task: 'Vis at ethvert sammensatt tall $n$ har en primfaktor $p \\leq \\sqrt{n}$.', solution: 'Hvis $n = a \\cdot b$ med $a, b > 1$, kan ikke begge være større enn $\\sqrt{n}$ (da ville $a \\cdot b > n$). Altså er minst én faktor $\\leq \\sqrt{n}$, og denne inneholder en primfaktor $\\leq \\sqrt{n}$.' },
              { label: 'd', task: 'Finn to tall der SFF $= 1$ (dvs. de er innbyrdes primiske), og vis at MFF da er lik produktet av tallene.', solution: 'Eksempel: SFF$(8, 15) = 1$. MFF$(8, 15) = 120 = 8 \\times 15$. Generelt: Når SFF $= 1$, er MFF $= a \\cdot b$ fordi tallene ikke deler noen primfaktor.' },
            ],
            solution: 'a) $41, 43, 47, 53, 59$. b) Alle andre partall er delelige med 2. c) Bevis med motsigelse. d) Eksempel: $8$ og $15$.',
            hideInlineSolution: true,
            hints: ['For å vise at et tall er primtall, sjekk deling med alle primtall opp til kvadratroten.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '10-7-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Avanserte oppgaver om primtall og tallteori.',
            subTasks: [
              { label: 'a', task: 'Bevis at det finnes uendelig mange primtall (Euklids bevis). Hint: Anta at det bare finnes endelig mange, og vis at dette fører til en motsigelse.', solution: 'Anta at $p_1, p_2, \\ldots, p_n$ er alle primtallene. La $N = p_1 \\cdot p_2 \\cdots p_n + 1$. Da er $N$ ikke delelig med noen av $p_1, \\ldots, p_n$ (rest 1 ved deling). Altså er enten $N$ selv et nytt primtall, eller $N$ har en primfaktor som ikke er blant $p_1, \\ldots, p_n$. Motsigelse.' },
              { label: 'b', task: 'For to positive hele tall $a$ og $b$ gjelder det at SFF$(a,b) \\cdot$ MFF$(a,b) = a \\cdot b$. Verifiser dette for $a = 60$ og $b = 90$, og forklar hvorfor det stemmer.', solution: 'SFF$(60, 90) = 30$ og MFF$(60, 90) = 180$. $30 \\cdot 180 = 5400 = 60 \\cdot 90$ \\checkmark. Forklaring: I primfaktoriseringen velger SFF laveste eksponent og MFF høyeste. Summen av eksponentene i SFF og MFF tilsvarer summen av eksponentene i $a$ og $b$.' },
              { label: 'c', task: 'Goldbach-formodningen sier at ethvert partall $> 2$ kan skrives som summen av to primtall. Vis dette for alle partall fra $4$ til $30$.', solution: '$4 = 2+2$, $6 = 3+3$, $8 = 3+5$, $10 = 3+7$ (eller $5+5$), $12 = 5+7$, $14 = 3+11$ (eller $7+7$), $16 = 3+13$ (eller $5+11$), $18 = 5+13$ (eller $7+11$), $20 = 3+17$ (eller $7+13$), $22 = 3+19$ (eller $5+17$), $24 = 5+19$ (eller $7+17$), $26 = 3+23$ (eller $7+19$), $28 = 5+23$ (eller $11+17$), $30 = 7+23$ (eller $11+19$ eller $13+17$).' },
            ],
            solution: 'a) Euklids bevis ved motsigelse. b) $30 \\times 180 = 5400 = 60 \\times 90$. c) Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['For Euklids bevis: Det avgjørende er at $N = p_1 \\cdot p_2 \\cdots p_n + 1$ gir rest 1 ved deling med hvert kjent primtall.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Forholdstall og proporsjonalitet
// LK20: Utforske og argumentere for korleis rekne med forhold, prosent og
//        vekstfaktor
// ============================================================================

export const CHAPTER_10_7_4: TextbookChapter = {
  id: '10-7-4',
  courseId: '10',
  chapterNumber: '7.4',
  title: 'Forholdstall og proporsjonalitet',
  description: 'Lær om forholdstall, proporsjonale størrelser, rett og omvendt proporsjonalitet, og målestokk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-7-4-intro',
      type: 'text',
      content: `## Forholdstall og proporsjonalitet

Du skal bake boller og oppskriften er til 20 stykker, men du trenger bare 10. Hva gjør du? Du halverer alle ingrediensene. Dette er et eksempel på **proporsjonalitet** — når vi endrer én størrelse, endrer en annen seg tilsvarende.

Forholdstall og proporsjonalitet er overalt i hverdagen:
- Oppskrifter: Doble eller halvere ingredienser
- Kart: $1 : 50\\,000$ betyr at $1$ cm på kartet = $500$ m i virkeligheten
- Valuta: Hvis $1$ dollar = $10{,}50$ kr, hva koster $25$ dollar?
- Blanding: Saftkonsentrat blandes $1 : 4$ med vann

I dette kapittelet lærer du:
- Hva et forholdstall er og hvordan du forenkler det
- Rett proporsjonalitet (jo mer av det ene, jo mer av det andre)
- Omvendt proporsjonalitet (jo mer av det ene, jo mindre av det andre)
- Målestokk og praktiske anvendelser`,
    },

    // ========== DEFINISJON: FORHOLDSTALL ==========
    {
      id: '10-7-4-def-1',
      type: 'definition',
      title: 'Forholdstall',
      content: `Et **forholdstall** (eller **forhold**) beskriver forholdet mellom to størrelser. Vi skriver det som $a : b$ eller $\\frac{a}{b}$.

**Eksempel:** I en klasse med $12$ gutter og $18$ jenter er forholdet mellom gutter og jenter:
$$12 : 18$$

Vi kan **forenkle** forholdet ved å dele på felles faktor:
$$12 : 18 = 6 : 9 = 2 : 3$$

Forholdet $2 : 3$ betyr at for hver $2$ gutter er det $3$ jenter.

**Regler for forholdstall:**
- $a : b$ kan forenkles ved å dele begge med SFF
- $a : b$ kan utvides ved å gange begge med samme tall
- $a : b = ka : kb$ for alle $k \\neq 0$
- Forholdet kan også skrives som en brøk: $a : b = \\frac{a}{b}$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '10-7-4-ex-1',
      type: 'example',
      title: 'Eksempel 1: Forenkle forholdstall',
      problem: 'Forenkle forholdstallene:\na) $24 : 36$\nb) $150 : 200 : 350$\nc) $0{,}5 : 1{,}5$',
      solution: `**a)** $24 : 36$
SFF av $24$ og $36$ er $12$:
$$24 : 36 = \\frac{24}{12} : \\frac{36}{12} = 2 : 3$$

**b)** $150 : 200 : 350$
SFF av $150$, $200$ og $350$ er $50$:
$$150 : 200 : 350 = 3 : 4 : 7$$

**c)** $0{,}5 : 1{,}5$
Gang med $2$ for å fjerne desimaler:
$$0{,}5 : 1{,}5 = 1 : 3$$`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '10-7-4-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-7-4-oppg-1',
        number: '7.19',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forenkle forholdstallene.',
        subTasks: [
          {
            label: 'a',
            task: '$15 : 25$',
            solution: 'SFF $= 5$. $15 : 25 = 3 : 5$',
            answer: '3 : 5',
          },
          {
            label: 'b',
            task: '$48 : 32$',
            solution: 'SFF $= 16$. $48 : 32 = 3 : 2$',
            answer: '3 : 2',
          },
          {
            label: 'c',
            task: '$1{,}2 : 0{,}8$',
            solution: 'Gang med $10$: $12 : 8$. SFF $= 4$. $12 : 8 = 3 : 2$',
            answer: '3 : 2',
          },
          {
            label: 'd',
            task: '$\\frac{3}{4} : \\frac{1}{2}$',
            solution: 'Gang med $4$: $3 : 2$',
            answer: '3 : 2',
          },
        ],
        solution: 'a) $3:5$, b) $3:2$, c) $3:2$, d) $3:2$',
        hints: ['Del begge tallene på den største felles faktoren. For desimaltall: gang med 10 eller 100 først.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: RETT PROPORSJONALITET ==========
    {
      id: '10-7-4-def-2',
      type: 'definition',
      title: 'Rett proporsjonalitet',
      content: `To størrelser $x$ og $y$ er **rett proporsjonale** dersom forholdet mellom dem er konstant:

$$\\frac{y}{x} = k \\quad \\text{(konstant)}$$

eller tilsvarende:

$$y = k \\cdot x$$

der $k$ kalles **proporsjonalitetskonstanten**.

**Kjennetegn på rett proporsjonalitet:**
- Når $x$ dobles, dobles $y$
- Når $x$ tredobles, tredobles $y$
- Grafen er en **rett linje gjennom origo**
- Forholdet $\\frac{y}{x}$ er det **samme** for alle verdier

**Eksempel:** Pris og antall kg epler. Hvis $1$ kg koster $30$ kr:
| kg ($x$) | 1 | 2 | 3 | 5 |
|---|---|---|---|---|
| Pris ($y$) | 30 | 60 | 90 | 150 |

$\\frac{y}{x} = 30$ for alle verdier. Proporsjonalitetskonstanten er $k = 30$.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '10-7-4-ex-2',
      type: 'example',
      title: 'Eksempel 2: Rett proporsjonalitet i praksis',
      problem: 'En bil bruker $0{,}6$ liter bensin per mil. Hvor mye bensin bruker bilen på $35$ mil?',
      solution: `Vi har rett proporsjonalitet mellom avstand og bensinforbruk:
$$y = k \\cdot x$$

der $k = 0{,}6$ liter/mil.

For $x = 35$ mil:
$$y = 0{,}6 \\times 35 = 21 \\text{ liter}$$

**Alternativ metode (forholdsligning):**
$$\\frac{0{,}6 \\text{ l}}{1 \\text{ mil}} = \\frac{y}{35 \\text{ mil}}$$

$$y = 0{,}6 \\times 35 = 21 \\text{ liter}$$

Bilen bruker $21$ liter bensin på $35$ mil.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '10-7-4-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-7-4-oppg-2',
        number: '7.20',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene om rett proporsjonalitet.',
        subTasks: [
          {
            label: 'a',
            task: 'En oppskrift til 4 personer bruker $300$ g mel. Hvor mye mel trenger du til 7 personer?',
            solution: 'Forholdet er $\\frac{300}{4} = 75$ g per person. Til 7 personer: $75 \\times 7 = 525$ g mel.',
            answer: '525',
          },
          {
            label: 'b',
            task: '$1$ euro = $11{,}40$ kr. Hvor mange kroner er $85$ euro?',
            solution: '$85 \\times 11{,}40 = 969$ kr.',
            answer: '969',
          },
          {
            label: 'c',
            task: 'Er tabellen rett proporsjonal? Begrunn.\n\n| $x$ | 2 | 4 | 6 | 8 |\n|---|---|---|---|---|\n| $y$ | 5 | 10 | 15 | 20 |',
            solution: 'Ja! $\\frac{y}{x} = \\frac{5}{2} = 2{,}5$ for alle verdier. Proporsjonalitetskonstanten er $k = 2{,}5$, og $y = 2{,}5x$.',
          },
        ],
        solution: 'a) $525$ g. b) $969$ kr. c) Ja, $k = 2{,}5$.',
        hints: ['Ved rett proporsjonalitet er forholdet $\\frac{y}{x}$ konstant for alle verdier.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: OMVENDT PROPORSJONALITET ==========
    {
      id: '10-7-4-def-3',
      type: 'definition',
      title: 'Omvendt proporsjonalitet',
      content: `To størrelser $x$ og $y$ er **omvendt proporsjonale** dersom produktet av dem er konstant:

$$x \\cdot y = k \\quad \\text{(konstant)}$$

eller tilsvarende:

$$y = \\frac{k}{x}$$

**Kjennetegn på omvendt proporsjonalitet:**
- Når $x$ dobles, halveres $y$
- Når $x$ tredobles, reduseres $y$ til en tredel
- Grafen er en **hyperbel** (buet kurve)
- Produktet $x \\cdot y$ er det **samme** for alle verdier

**Eksempel:** Tid og antall arbeidere som maler et hus.
| Arbeidere ($x$) | 2 | 3 | 4 | 6 |
|---|---|---|---|---|
| Timer ($y$) | 12 | 8 | 6 | 4 |

$x \\cdot y = 24$ for alle verdier. Jo flere arbeidere, jo kortere tid.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '10-7-4-ex-3',
      type: 'example',
      title: 'Eksempel 3: Omvendt proporsjonalitet',
      problem: 'En bil kjører med $80$ km/t og bruker $3$ timer på en strekning. Hvor lang tid bruker bilen hvis den kjører med $60$ km/t?',
      solution: `Strekningen er konstant:
$$\\text{strekning} = \\text{fart} \\times \\text{tid}$$
$$k = 80 \\times 3 = 240 \\text{ km}$$

Fart og tid er omvendt proporsjonale (produktet er konstant):

Med $60$ km/t:
$$60 \\times y = 240$$
$$y = \\frac{240}{60} = 4 \\text{ timer}$$

Bilen bruker $4$ timer med $60$ km/t.

**Sjekk:** $80 \\times 3 = 240$ ✓ og $60 \\times 4 = 240$ ✓`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '10-7-4-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-7-4-oppg-3',
        number: '7.21',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene om omvendt proporsjonalitet.',
        subTasks: [
          {
            label: 'a',
            task: '6 arbeidere bruker 10 dager på et prosjekt. Hvor mange dager bruker 15 arbeidere?',
            solution: '$k = 6 \\times 10 = 60$ persondager. Med 15 arbeidere: $y = \\frac{60}{15} = 4$ dager.',
            answer: '4',
          },
          {
            label: 'b',
            task: 'Er tabellen omvendt proporsjonal?\n\n| $x$ | 2 | 4 | 5 | 10 |\n|---|---|---|---|---|\n| $y$ | 20 | 10 | 8 | 4 |',
            solution: 'Sjekk $x \\cdot y$: $2 \\times 20 = 40$, $4 \\times 10 = 40$, $5 \\times 8 = 40$, $10 \\times 4 = 40$. Ja, omvendt proporsjonal med $k = 40$.',
          },
          {
            label: 'c',
            task: 'Forklar forskjellen mellom rett og omvendt proporsjonalitet med egne ord.',
            solution: 'Rett proporsjonalitet: Begge størrelsene øker sammen (dobler den ene, dobles den andre). Omvendt proporsjonalitet: Når den ene øker, synker den andre (dobler den ene, halveres den andre).',
          },
        ],
        solution: 'a) 4 dager. b) Ja, $k = 40$. c) Se løsningsforslag.',
        hints: ['Ved omvendt proporsjonalitet er produktet $x \\cdot y$ konstant.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TEKST: MÅLESTOKK ==========
    {
      id: '10-7-4-text-malestokk',
      type: 'text',
      content: `## Målestokk

**Målestokk** er forholdet mellom en avstand på kartet (eller tegningen) og den tilsvarende avstanden i virkeligheten.

Målestokk skrives som $1 : n$, som betyr at $1$ enhet på kartet tilsvarer $n$ enheter i virkeligheten.

**Eksempler:**
- $1 : 50\\,000$ — $1$ cm på kartet = $50\\,000$ cm = $500$ m i virkeligheten
- $1 : 100$ — $1$ cm på tegningen = $100$ cm = $1$ m i virkeligheten
- $1 : 1\\,000\\,000$ — $1$ cm = $10$ km

**Formler:**
$$\\text{Virkelig lengde} = \\text{Kartlengde} \\times n$$
$$\\text{Kartlengde} = \\frac{\\text{Virkelig lengde}}{n}$$

**Stor vs. liten målestokk:**
- $1 : 1000$ er en **stor** målestokk (mye detaljer, lite område)
- $1 : 1\\,000\\,000$ er en **liten** målestokk (lite detaljer, stort område)`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: '10-7-4-ex-4',
      type: 'example',
      title: 'Eksempel 4: Målestokk',
      problem: 'Et kart har målestokk $1 : 50\\,000$.\na) Hva er den virkelige avstanden hvis kartavstanden er $3{,}4$ cm?\nb) Hvor lang er kartavstanden hvis den virkelige avstanden er $2{,}5$ km?',
      solution: `**a)** Kartavstand $= 3{,}4$ cm
$$\\text{Virkelig} = 3{,}4 \\times 50\\,000 = 170\\,000 \\text{ cm} = 1\\,700 \\text{ m} = 1{,}7 \\text{ km}$$

**b)** Virkelig avstand $= 2{,}5$ km $= 250\\,000$ cm
$$\\text{Kart} = \\frac{250\\,000}{50\\,000} = 5 \\text{ cm}$$`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '10-7-4-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-7-4-oppg-4',
        number: '7.22',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene om målestokk.',
        subTasks: [
          {
            label: 'a',
            task: 'Et kart har målestokk $1 : 25\\,000$. To byer er $8$ cm fra hverandre på kartet. Hva er den virkelige avstanden?',
            solution: '$8 \\times 25\\,000 = 200\\,000$ cm $= 2\\,000$ m $= 2$ km.',
            answer: '2 km',
          },
          {
            label: 'b',
            task: 'En arkitekt tegner et hus med målestokk $1 : 100$. Huset er $12$ m langt i virkeligheten. Hvor langt er det på tegningen?',
            solution: '$12$ m $= 1200$ cm. $\\frac{1200}{100} = 12$ cm på tegningen.',
            answer: '12 cm',
          },
          {
            label: 'c',
            task: 'Avstanden mellom Oslo og Bergen er ca. $300$ km. Du vil tegne denne avstanden på et kart der den tar opp $15$ cm. Hvilken målestokk har kartet?',
            solution: '$300$ km $= 30\\,000\\,000$ cm. Målestokk $= 15 : 30\\,000\\,000 = 1 : 2\\,000\\,000$.',
            answer: '1 : 2 000 000',
          },
        ],
        solution: 'a) $2$ km. b) $12$ cm. c) $1 : 2\\,000\\,000$.',
        hints: ['Husk å gjøre om til samme enhet (oftest cm) før du regner.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Forholdstall
- Skrives som $a : b$ og forenkles ved å dele på SFF
- Kan brukes til å fordele, sammenligne og beregne

### Rett proporsjonalitet
- $y = k \\cdot x$ (forholdet $\\frac{y}{x} = k$ er konstant)
- Grafen er en rett linje gjennom origo
- Dobler du $x$, dobles $y$

### Omvendt proporsjonalitet
- $y = \\frac{k}{x}$ (produktet $x \\cdot y = k$ er konstant)
- Grafen er en hyperbel
- Dobler du $x$, halveres $y$

### Målestokk
- $1 : n$ betyr at $1$ enhet på kartet = $n$ enheter i virkeligheten
- Gjør alltid om til samme enhet før du regner`,
    },

    // --- Samleoppgaver ---

    {
      id: '10-7-4-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-7-4-oppg-5',
        number: '7.23',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Blandingsoppgaver med forholdstall.',
        subTasks: [
          {
            label: 'a',
            task: 'Saftkonsentrat blandes med vann i forholdet $1 : 4$. Hvor mye saft og vann trenger du for å lage $2{,}5$ liter ferdig saftblanding?',
            solution: 'Forholdet $1:4$ betyr $1 + 4 = 5$ deler totalt. Hver del er $\\frac{2{,}5}{5} = 0{,}5$ liter. Saft: $1 \\times 0{,}5 = 0{,}5$ liter. Vann: $4 \\times 0{,}5 = 2{,}0$ liter.',
          },
          {
            label: 'b',
            task: 'Maling blandes i forholdet rød : hvit $= 3 : 5$. Du har $1{,}2$ liter rød maling. Hvor mye hvit maling trenger du, og hvor mye ferdig maling får du?',
            solution: 'Forholdet er $3 : 5$. Hver del er $\\frac{1{,}2}{3} = 0{,}4$ liter. Hvit: $5 \\times 0{,}4 = 2{,}0$ liter. Totalt: $1{,}2 + 2{,}0 = 3{,}2$ liter.',
          },
          {
            label: 'c',
            task: 'En arv på $600\\,000$ kr skal deles mellom tre søsken i forholdet $2 : 3 : 5$. Hvor mye får hver?',
            solution: 'Totalt $2 + 3 + 5 = 10$ deler. Hver del er $\\frac{600\\,000}{10} = 60\\,000$ kr. Søsken 1: $120\\,000$ kr, Søsken 2: $180\\,000$ kr, Søsken 3: $300\\,000$ kr.',
          },
        ],
        solution: 'a) $0{,}5$ l saft + $2{,}0$ l vann. b) $2{,}0$ l hvit, $3{,}2$ l totalt. c) $120\\,000$, $180\\,000$, $300\\,000$ kr.',
        hints: ['Finn totalt antall deler, og del totalbeløpet/mengden på dette.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '10-7-4-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-7-4-oppg-6',
        number: '7.24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rett eller omvendt proporsjonal? Avgjør og regn ut.',
        subTasks: [
          {
            label: 'a',
            task: 'En skole bestiller $t$-skjorter. Prisen per skjorte er $120$ kr uansett antall. Er totalpris og antall skjorter rett proporsjonale, omvendt proporsjonale, eller ingen av delene?',
            solution: 'Rett proporsjonale. Totalpris $= 120 \\times$ antall. Dobler du antallet, dobles totalprisen.',
            multipleChoiceOptions: ['Rett proporsjonale', 'Omvendt proporsjonale', 'Ingen av delene'],
          },
          {
            label: 'b',
            task: 'En pizza deles likt mellom $n$ personer. Er størrelsen på hvert stykke og antall personer rett proporsjonale, omvendt proporsjonale, eller ingen av delene?',
            solution: 'Omvendt proporsjonale. Stykke-størrelse $= \\frac{\\text{hel pizza}}{n}$. Dobler du personene, halveres stykket.',
            multipleChoiceOptions: ['Omvendt proporsjonale', 'Rett proporsjonale', 'Ingen av delene'],
          },
          {
            label: 'c',
            task: '5 gravemaskiner graver en grøft på 8 dager. Hvor lang tid bruker 4 gravemaskiner?',
            solution: 'Omvendt proporsjonalt. $k = 5 \\times 8 = 40$ maskindager. Med 4 maskiner: $y = \\frac{40}{4} = 10$ dager.',
            answer: '10',
          },
          {
            label: 'd',
            task: 'En joggetur på $5$ km tar $30$ min. Hvor lang tid tar $8$ km med samme fart?',
            solution: 'Rett proporsjonalt. $k = \\frac{30}{5} = 6$ min/km. For $8$ km: $8 \\times 6 = 48$ min.',
            answer: '48',
          },
        ],
        solution: 'a) Rett. b) Omvendt. c) 10 dager. d) 48 minutter.',
        hints: ['Spør deg: Når den ene øker, øker eller synker den andre? Øker = rett. Synker = omvendt.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '10-7-4-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-7-4-oppg-7',
        number: '7.25',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et kart har målestokk $1 : 200\\,000$. To steder er $7{,}5$ cm fra hverandre på kartet. Hva er den virkelige avstanden?',
        options: [
          {
            id: 'a',
            text: '$1{,}5$ km',
            isCorrect: false,
            feedback: 'Feil. Du har kanskje delt i stedet for å gange. Kartlengde ganges med målestokktallet.',
          },
          {
            id: 'b',
            text: '$15$ km',
            isCorrect: true,
            feedback: 'Riktig! $7{,}5 \\times 200\\,000 = 1\\,500\\,000$ cm $= 15\\,000$ m $= 15$ km.',
          },
          {
            id: 'c',
            text: '$150$ km',
            isCorrect: false,
            feedback: 'Feil. Du har kanskje gjort en feil i enhetsomregningen.',
          },
          {
            id: 'd',
            text: '$1\\,500$ km',
            isCorrect: false,
            feedback: 'Feil. Sjekk enhetsomregningen: $1\\,500\\,000$ cm $= 15$ km, ikke $1\\,500$ km.',
          },
        ],
        solution: '$7{,}5 \\times 200\\,000 = 1\\,500\\,000$ cm $= 15$ km.',
      },
    },

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '10-7-4-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '10-7-4-rep-1',
          type: 'exercise',
          exercise: {
            id: '10-7-4-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forenkle forholdstallene.',
            subTasks: [
              { label: 'a', task: '$12 : 18$', solution: '$12 : 18 = 2 : 3$ (deler begge på $6$)' },
              { label: 'b', task: '$45 : 30$', solution: '$45 : 30 = 3 : 2$ (deler begge på $15$)' },
              { label: 'c', task: '$0{,}4 : 1{,}2$', solution: '$0{,}4 : 1{,}2 = 4 : 12 = 1 : 3$ (ganger med $10$, deler på $4$)' },
              { label: 'd', task: '$\\frac{2}{3} : \\frac{5}{6}$', solution: '$\\frac{2}{3} : \\frac{5}{6} = \\frac{2}{3} \\cdot \\frac{6}{5} = \\frac{12}{15} = \\frac{4}{5}$, altså $4 : 5$' },
              { label: 'e', task: '$250 \\text{ g} : 1 \\text{ kg}$', solution: '$250 \\text{ g} : 1000 \\text{ g} = 250 : 1000 = 1 : 4$' },
              { label: 'f', task: '$1{,}5 \\text{ timer} : 45 \\text{ minutter}$', solution: '$90 \\text{ min} : 45 \\text{ min} = 90 : 45 = 2 : 1$' },
            ],
            solution: 'a) $2:3$, b) $3:2$, c) $1:3$, d) $4:5$, e) $1:4$, f) $2:1$',
            hideInlineSolution: true,
            hints: ['Gjør om til samme enhet, og del begge tall på SFF.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-4-rep-2',
          type: 'exercise',
          exercise: {
            id: '10-7-4-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Avgjør om sammenhengene viser rett proporsjonalitet, omvendt proporsjonalitet, eller ingen av delene.',
            subTasks: [
              { label: 'a', task: 'Antall liter bensin og pris (fast literpris)', solution: 'Rett proporsjonalitet. Dobbelt så mange liter gir dobbelt så høy pris.' },
              { label: 'b', task: 'Antall malere og tid for å male et hus', solution: 'Omvendt proporsjonalitet. Dobbelt så mange malere gir halvert tid.' },
              { label: 'c', task: 'Temperatur og tid på døgnet', solution: 'Ingen av delene. Temperaturen varierer uregelmessig gjennom døgnet.' },
              { label: 'd', task: 'Strekning og tid ved konstant fart', solution: 'Rett proporsjonalitet. $s = v \\cdot t$ der $v$ er konstant.' },
              { label: 'e', task: 'Fart og tid for å kjøre en fast strekning', solution: 'Omvendt proporsjonalitet. $v \\cdot t = s$ (konstant). Dobbelt fart gir halvert tid.' },
              { label: 'f', task: 'Alder og høyde hos barn', solution: 'Ingen av delene. Selv om barn vokser, er det ingen fast proporsjonalitetskonstant.' },
            ],
            solution: 'a) Rett, b) Omvendt, c) Ingen, d) Rett, e) Omvendt, f) Ingen',
            hideInlineSolution: true,
            hints: ['Rett: $\\frac{y}{x}$ er konstant. Omvendt: $x \\cdot y$ er konstant.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-4-rep-3',
          type: 'exercise',
          exercise: {
            id: '10-7-4-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Løs oppgavene om proporsjonalitet.',
            subTasks: [
              { label: 'a', task: '$5$ kg epler koster $60$ kr. Hvor mye koster $8$ kg?', solution: 'Pris per kg: $60 \\div 5 = 12$ kr/kg. $8 \\times 12 = 96$ kr.' },
              { label: 'b', task: '$3$ malere bruker $12$ timer. Hvor lang tid bruker $4$ malere?', solution: 'Omvendt proporsjonalitet: $3 \\times 12 = 36$. $4$ malere: $36 \\div 4 = 9$ timer.' },
              { label: 'c', task: 'En bil bruker $0{,}7$ liter per mil. Hvor langt kjører bilen på $35$ liter?', solution: '$35 \\div 0{,}7 = 50$ mil.' },
              { label: 'd', task: 'Oppskriften for $4$ personer krever $300$ g mel. Hvor mye trengs for $6$ personer?', solution: '$\\frac{300}{4} \\cdot 6 = 75 \\cdot 6 = 450$ g mel.' },
              { label: 'e', task: '$y$ er rett proporsjonal med $x$. Når $x = 4$, er $y = 10$. Finn $y$ når $x = 14$.', solution: '$k = \\frac{y}{x} = \\frac{10}{4} = 2{,}5$. Når $x = 14$: $y = 2{,}5 \\cdot 14 = 35$.' },
              { label: 'f', task: '$y$ er omvendt proporsjonal med $x$. Når $x = 6$, er $y = 8$. Finn $y$ når $x = 12$.', solution: '$k = x \\cdot y = 6 \\cdot 8 = 48$. Når $x = 12$: $y = \\frac{48}{12} = 4$.' },
            ],
            solution: 'a) $96$ kr. b) $9$ timer. c) $50$ mil. d) $450$ g. e) $35$. f) $4$.',
            hideInlineSolution: true,
            hints: ['Rett proporsjonalitet: finn konstanten $k = \\frac{y}{x}$. Omvendt: $k = x \\cdot y$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-4-rep-4',
          type: 'exercise',
          exercise: {
            id: '10-7-4-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs oppgaver med målestokk og forholdstall.',
            subTasks: [
              { label: 'a', task: 'Et kart har målestokk $1 : 50\\,000$. To byer er $8$ cm fra hverandre på kartet. Hva er den virkelige avstanden?', solution: '$8 \\times 50\\,000 = 400\\,000$ cm $= 4\\,000$ m $= 4$ km.' },
              { label: 'b', task: 'En bygning er $15$ m høy. På en tegning er den $6$ cm. Hva er målestokken?', solution: '$15$ m $= 1500$ cm. Målestokk: $\\frac{6}{1500} = \\frac{1}{250}$, altså $1 : 250$.' },
              { label: 'c', task: 'En legering av kobber og sink er i forholdet $3 : 2$. Hvor mye av hvert metall trengs for å lage $750$ g legering?', solution: 'Totalt $3 + 2 = 5$ deler. Kobber: $\\frac{3}{5} \\times 750 = 450$ g. Sink: $\\frac{2}{5} \\times 750 = 300$ g.' },
              { label: 'd', task: 'Tre søsken deler arven etter bestemor i forholdet $5 : 3 : 2$. Arven er $200\\,000$ kr. Hvor mye får hver?', solution: 'Totalt $5 + 3 + 2 = 10$ deler. Beløp: $100\\,000$ kr, $60\\,000$ kr og $40\\,000$ kr.' },
              { label: 'e', task: 'En modell av et skip er bygget i målestokk $1 : 200$. Modellen er $45$ cm lang. Hvor langt er det virkelige skipet?', solution: '$45 \\times 200 = 9\\,000$ cm $= 90$ m.' },
            ],
            solution: 'a) $4$ km. b) $1 : 250$. c) $450$ g kobber, $300$ g sink. d) $100\\,000$, $60\\,000$, $40\\,000$ kr. e) $90$ m.',
            hideInlineSolution: true,
            hints: ['Målestokk: modell-mål × målestokk = virkeligheten. Fordeling: finn antall deler totalt.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-4-rep-5',
          type: 'exercise',
          exercise: {
            id: '10-7-4-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Avgjør type proporsjonalitet og sett opp formler.',
            subTasks: [
              { label: 'a', task: 'Tabellen viser sammenhengen mellom $x$ og $y$: $x = 2, 4, 6, 8$ og $y = 15, 7{,}5, 5, 3{,}75$. Er dette rett eller omvendt proporsjonalitet?', solution: '$x \\cdot y = 2 \\cdot 15 = 30$ (konstant). Omvendt proporsjonalitet med $k = 30$. Formel: $y = \\frac{30}{x}$.' },
              { label: 'b', task: 'Tabellen viser: $x = 3, 5, 8, 12$ og $y = 7{,}5, 12{,}5, 20, 30$. Er dette rett eller omvendt proporsjonalitet?', solution: '$\\frac{y}{x} = \\frac{7{,}5}{3} = 2{,}5$ (konstant). Rett proporsjonalitet med $k = 2{,}5$. Formel: $y = 2{,}5x$.' },
              { label: 'c', task: 'Et rektangel har areal $48$ cm$^2$. Skriv opp en formel for bredden $b$ som funksjon av lengden $l$. Er dette rett eller omvendt proporsjonalitet?', solution: '$b = \\frac{48}{l}$. Omvendt proporsjonalitet med $k = 48$.' },
              { label: 'd', task: 'Prisen $y$ for $x$ kg poteter er gitt ved $y = 18x$. Hva koster $3{,}5$ kg?', solution: '$y = 18 \\cdot 3{,}5 = 63$ kr. (Rett proporsjonalitet med $k = 18$ kr/kg.)' },
              { label: 'e', task: 'Det tar $6$ dager for $5$ arbeidere å bygge en mur. Sett opp en formel for antall dager $d$ som funksjon av antall arbeidere $a$. Hvor lang tid tar det med $10$ arbeidere?', solution: '$k = 6 \\cdot 5 = 30$. $d = \\frac{30}{a}$. Med $10$ arbeidere: $d = \\frac{30}{10} = 3$ dager.' },
              { label: 'f', task: 'Er sammenhengen $y = 3x + 2$ proporsjonal? Begrunn.', solution: 'Nei, dette er ikke rett proporsjonalitet fordi grafen ikke går gjennom origo ($y \\neq 0$ når $x = 0$). Det er en lineær sammenheng, men ikke proporsjonal.' },
            ],
            solution: 'a) Omvendt ($k=30$). b) Rett ($k=2{,}5$). c) Omvendt. d) $63$ kr. e) $3$ dager. f) Ikke proporsjonal.',
            hideInlineSolution: true,
            hints: ['Test rett: er $\\frac{y}{x}$ konstant? Test omvendt: er $x \\cdot y$ konstant?'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-7-4-rep-6',
          type: 'exercise',
          exercise: {
            id: '10-7-4-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatte oppgaver om forholdstall og proporsjonalitet.',
            subTasks: [
              { label: 'a', task: 'To byer har avstand $240$ km. På et kart er avstanden $12$ cm. En tredje by ligger $8$ cm fra den første byen på kartet. Hva er den virkelige avstanden, og hva er kartets målestokk?', solution: 'Målestokk: $\\frac{12 \\text{ cm}}{240 \\text{ km}} = \\frac{12}{24\\,000\\,000} = 1 : 2\\,000\\,000$. Virkelig avstand: $8 \\times 2\\,000\\,000 = 16\\,000\\,000$ cm $= 160$ km.' },
              { label: 'b', task: 'En blanding av saft og vann er i forholdet $1 : 4$. Etter å ha tilsatt $2$ dl ekstra saft, er forholdet blitt $1 : 3$. Hvor mye var det av blandingen opprinnelig?', solution: 'La opprinnelig saftmengde være $x$ dl. Da er vann $4x$ dl. Etter tilsetting: $\\frac{x + 2}{4x} = \\frac{1}{3}$. $3(x+2) = 4x$, $3x + 6 = 4x$, $x = 6$. Opprinnelig: $6$ dl saft og $24$ dl vann $= 30$ dl totalt.' },
              { label: 'c', task: 'Gjennomsnittsfarten for en tur-retur-reise er *ikke* gjennomsnittet av hastigheten på tur og retur. Vis at dersom du kjører tur med fart $v_1$ og retur med fart $v_2$, er gjennomsnittsfarten $\\frac{2v_1 v_2}{v_1 + v_2}$. Regn ut gjennomsnittsfarten når $v_1 = 60$ km/t og $v_2 = 40$ km/t.', solution: 'La strekningen hver vei være $d$. Tid tur: $\\frac{d}{v_1}$. Tid retur: $\\frac{d}{v_2}$. Total tid: $\\frac{d}{v_1} + \\frac{d}{v_2} = \\frac{d(v_1 + v_2)}{v_1 v_2}$. Gjennomsnittsfart $= \\frac{2d}{\\frac{d(v_1+v_2)}{v_1 v_2}} = \\frac{2v_1 v_2}{v_1 + v_2}$. Med $v_1 = 60$, $v_2 = 40$: $\\frac{2 \\cdot 60 \\cdot 40}{60 + 40} = \\frac{4800}{100} = 48$ km/t.' },
            ],
            solution: 'a) $1:2\\,000\\,000$, $160$ km. b) $30$ dl. c) $48$ km/t.',
            hideInlineSolution: true,
            hints: ['For c): Total strekning delt på total tid. Sett strekningen til $d$ og utled formelen.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 7
// ============================================================================

export const MATEMATIKK_10_DEL7_CHAPTERS = [
  CHAPTER_10_7_1,
  CHAPTER_10_7_2,
  CHAPTER_10_7_3,
  CHAPTER_10_7_4,
];
