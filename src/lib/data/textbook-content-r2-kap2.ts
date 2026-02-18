/**
 * Tekstbok kapitler for R2 - Kapittel 2
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_R2_2_1: TextbookChapter = {
  id: 'r2-2-1',
  courseId: 'r2',
  chapterNumber: '2.1',
  title: 'Repetisjon av derivasjon',
  description: 'Gjennomgang av derivasjonsregler fra R1.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beherske grunnleggende derivasjonsregler',
    'kunne derivere sammensatte funksjoner',
    'anvende produkt- og kvotientregelen',
    'bruke kjerneregelen på sammensatte funksjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-2-1-intro',
      type: 'text',
      content: `## Derivasjon - en oversikt

I R1 lærte du å derivere funksjoner. Derivasjon handler om å finne den momentane endringsraten til en funksjon, altså hvor raskt funksjonen endrer seg i et bestemt punkt.

I dette kapittelet repeterer vi de viktigste derivasjonsreglene før vi går videre til nye temaer i R2.`,
    },

    // ========== GRUNNLEGGENDE REGLER ==========
    {
      id: 'r2-2-1-grunnleggende-intro',
      type: 'text',
      content: `## Grunnleggende derivasjonsregler

Vi starter med de enkleste reglene som danner grunnlaget for all derivasjon.`,
    },

    // Definisjon: Konstantregel
    {
      id: 'r2-2-1-def-konstantregel',
      type: 'definition',
      title: 'Konstantregelen',
      content: `Hvis $f(x) = c$ der $c$ er en konstant, så er

$$f'(x) = 0$$

En konstant funksjon har ingen endring, derfor er den deriverte lik null.`,
    },

    // Definisjon: Potensregel
    {
      id: 'r2-2-1-def-potensregel',
      type: 'definition',
      title: 'Potensregelen',
      content: `Hvis $f(x) = x^n$ der $n$ er et reelt tall, så er

$$f'(x) = n \\cdot x^{n-1}$$

Eksponenten flyttes ned som en faktor, og den nye eksponenten blir én mindre.`,
    },

    // Definisjon: Sumregel
    {
      id: 'r2-2-1-def-sumregel',
      type: 'definition',
      title: 'Sumregelen',
      content: `Hvis $f(x) = g(x) + h(x)$, så er

$$f'(x) = g'(x) + h'(x)$$

Den deriverte av en sum er summen av de deriverte. Tilsvarende gjelder for differanser.`,
    },

    // Definisjon: Konstantfaktor
    {
      id: 'r2-2-1-def-konstantfaktor',
      type: 'definition',
      title: 'Konstantfaktorregel',
      content: `Hvis $f(x) = c \\cdot g(x)$ der $c$ er en konstant, så er

$$f'(x) = c \\cdot g'(x)$$

En konstant faktor kan "tas utenfor" derivasjonen.`,
    },

    // Eksempel 1: Grunnleggende derivasjon
    {
      id: 'r2-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Grunnleggende derivasjon',
      problem: `Deriver følgende funksjoner:

a) $f(x) = 5$
b) $g(x) = x^4$
c) $h(x) = 3x^5 - 2x^3 + 7x - 4$`,
      solution: `**Løsning:**

a) $f(x) = 5$ er en konstant, så:
$$f'(x) = 0$$

b) $g(x) = x^4$

Vi bruker potensregelen:
$$g'(x) = 4x^{4-1} = 4x^3$$

c) $h(x) = 3x^5 - 2x^3 + 7x - 4$

Vi bruker sum- og konstantfaktorregelen på hvert ledd:
$$h'(x) = 3 \\cdot 5x^4 - 2 \\cdot 3x^2 + 7 \\cdot 1 - 0 = 15x^4 - 6x^2 + 7$$`,
    },

    // Oppgave 1
    {
      id: 'r2-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Deriver funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^7$', solution: '$f\'(x) = 7x^6$' },
          { label: 'b', task: '$g(x) = 4x^3 - 2x^2 + x$', solution: '$g\'(x) = 12x^2 - 4x + 1$' },
          { label: 'c', task: '$h(x) = \\frac{1}{2}x^6 - 3x^4 + 5$', solution: '$h\'(x) = 3x^5 - 12x^3$' },
          { label: 'd', task: '$p(x) = x^{-2} + x^{-1}$', solution: '$p\'(x) = -2x^{-3} - x^{-2} = -\\frac{2}{x^3} - \\frac{1}{x^2}$' },
        ],
        hints: [
          'Bruk potensregelen: $(x^n)\' = nx^{n-1}$',
          'Husk at en konstant derivert gir 0',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRODUKTREGEL OG KVOTIENTREGEL ==========
    {
      id: 'r2-2-1-prodkvot-intro',
      type: 'text',
      content: `## Produktregel og kvotientregel

Når vi skal derivere produkter eller brøker av funksjoner, trenger vi egne regler.`,
    },

    // Definisjon: Produktregel
    {
      id: 'r2-2-1-def-produktregel',
      type: 'definition',
      title: 'Produktregelen',
      content: `Hvis $f(x) = g(x) \\cdot h(x)$, så er

$$f'(x) = g'(x) \\cdot h(x) + g(x) \\cdot h'(x)$$

Huskeregel: "Den deriverte av den første ganger den andre, pluss den første ganger den deriverte av den andre."`,
    },

    // Definisjon: Kvotientregel
    {
      id: 'r2-2-1-def-kvotientregel',
      type: 'definition',
      title: 'Kvotientregelen',
      content: `Hvis $f(x) = \\frac{g(x)}{h(x)}$ der $h(x) \\neq 0$, så er

$$f'(x) = \\frac{g'(x) \\cdot h(x) - g(x) \\cdot h'(x)}{[h(x)]^2}$$

Huskeregel: "Deriverte av teller ganger nevner, minus teller ganger deriverte av nevner, alt delt på nevner i andre."`,
    },

    // Eksempel 2: Produktregel
    {
      id: 'r2-2-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Produktregelen',
      problem: `Deriver $f(x) = (x^2 + 1)(x^3 - 2x)$ ved hjelp av produktregelen.`,
      solution: `**Løsning:**

La $g(x) = x^2 + 1$ og $h(x) = x^3 - 2x$.

Da er $g'(x) = 2x$ og $h'(x) = 3x^2 - 2$.

Vi bruker produktregelen:
$$f'(x) = g'(x) \\cdot h(x) + g(x) \\cdot h'(x)$$

$$f'(x) = 2x \\cdot (x^3 - 2x) + (x^2 + 1) \\cdot (3x^2 - 2)$$

$$f'(x) = 2x^4 - 4x^2 + 3x^4 - 2x^2 + 3x^2 - 2$$

$$f'(x) = 5x^4 - 3x^2 - 2$$

**Kontroll:** Vi kan også gange ut først: $f(x) = x^5 - 2x^3 + x^3 - 2x = x^5 - x^3 - 2x$, og derivere: $f'(x) = 5x^4 - 3x^2 - 2$ ✓`,
    },

    // Oppgave 2
    {
      id: 'r2-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk produktregelen til å derivere funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 \\cdot (x + 1)$', solution: '$f\'(x) = 2x(x+1) + x^2 \\cdot 1 = 2x^2 + 2x + x^2 = 3x^2 + 2x$' },
          { label: 'b', task: '$g(x) = (2x - 1)(x^2 + 3)$', solution: '$g\'(x) = 2(x^2 + 3) + (2x-1) \\cdot 2x = 2x^2 + 6 + 4x^2 - 2x = 6x^2 - 2x + 6$' },
          { label: 'c', task: '$h(x) = (x^3 + 2)(x^2 - 1)$', solution: '$h\'(x) = 3x^2(x^2 - 1) + (x^3 + 2) \\cdot 2x = 3x^4 - 3x^2 + 2x^4 + 4x = 5x^4 - 3x^2 + 4x$' },
        ],
        hints: [
          'Identifiser $g(x)$ og $h(x)$, og finn $g\'(x)$ og $h\'(x)$',
          'Husk: $f\'(x) = g\'(x) \\cdot h(x) + g(x) \\cdot h\'(x)$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 3: Kvotientregel
    {
      id: 'r2-2-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Kvotientregelen',
      problem: `Deriver $f(x) = \\frac{x^2 + 1}{x - 1}$ ved hjelp av kvotientregelen.`,
      solution: `**Løsning:**

La $g(x) = x^2 + 1$ (teller) og $h(x) = x - 1$ (nevner).

Da er $g'(x) = 2x$ og $h'(x) = 1$.

Vi bruker kvotientregelen:
$$f'(x) = \\frac{g'(x) \\cdot h(x) - g(x) \\cdot h'(x)}{[h(x)]^2}$$

$$f'(x) = \\frac{2x \\cdot (x - 1) - (x^2 + 1) \\cdot 1}{(x - 1)^2}$$

$$f'(x) = \\frac{2x^2 - 2x - x^2 - 1}{(x - 1)^2}$$

$$f'(x) = \\frac{x^2 - 2x - 1}{(x - 1)^2}$$`,
    },

    // Oppgave 3
    {
      id: 'r2-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk kvotientregelen til å derivere funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{x}{x + 2}$', solution: '$f\'(x) = \\frac{1 \\cdot (x+2) - x \\cdot 1}{(x+2)^2} = \\frac{x + 2 - x}{(x+2)^2} = \\frac{2}{(x+2)^2}$' },
          { label: 'b', task: '$g(x) = \\frac{x^2}{x - 1}$', solution: '$g\'(x) = \\frac{2x(x-1) - x^2 \\cdot 1}{(x-1)^2} = \\frac{2x^2 - 2x - x^2}{(x-1)^2} = \\frac{x^2 - 2x}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2}$' },
          { label: 'c', task: '$h(x) = \\frac{x^2 - 4}{x + 3}$', solution: '$h\'(x) = \\frac{2x(x+3) - (x^2-4) \\cdot 1}{(x+3)^2} = \\frac{2x^2 + 6x - x^2 + 4}{(x+3)^2} = \\frac{x^2 + 6x + 4}{(x+3)^2}$' },
        ],
        hints: [
          'Identifiser teller $g(x)$ og nevner $h(x)$',
          'Husk: teller derivert ganger nevner, minus teller ganger nevner derivert',
          'Del på nevner i andre',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KJERNEREGELEN ==========
    {
      id: 'r2-2-1-kjerne-intro',
      type: 'text',
      content: `## Kjerneregelen (chain rule)

Kjerneregelen brukes når vi skal derivere sammensatte funksjoner, altså funksjoner der en funksjon er satt inn i en annen.`,
    },

    // Definisjon: Kjerneregelen
    {
      id: 'r2-2-1-def-kjerneregel',
      type: 'definition',
      title: 'Kjerneregelen',
      content: `Hvis $f(x) = g(u)$ der $u = h(x)$ (en "kjerne"), så er

$$f'(x) = g'(u) \\cdot h'(x)$$

eller skrevet på en annen måte:

$$\\frac{df}{dx} = \\frac{dg}{du} \\cdot \\frac{du}{dx}$$

Huskeregel: "Deriver ytre funksjon med hensyn på kjernen, gang med den deriverte av kjernen."`,
    },

    // Eksempel 4: Kjerneregelen
    {
      id: 'r2-2-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Kjerneregelen',
      problem: `Deriver følgende funksjoner ved hjelp av kjerneregelen:

a) $f(x) = (3x + 2)^5$
b) $g(x) = \\sqrt{x^2 + 1}$`,
      solution: `**Løsning:**

a) $f(x) = (3x + 2)^5$

La kjernen være $u = 3x + 2$, så $f = u^5$.

Ytre derivert: $\\frac{df}{du} = 5u^4$

Indre derivert (kjernens deriverte): $\\frac{du}{dx} = 3$

Kjerneregelen gir:
$$f'(x) = 5u^4 \\cdot 3 = 5(3x + 2)^4 \\cdot 3 = 15(3x + 2)^4$$

b) $g(x) = \\sqrt{x^2 + 1} = (x^2 + 1)^{1/2}$

La kjernen være $u = x^2 + 1$, så $g = u^{1/2}$.

Ytre derivert: $\\frac{dg}{du} = \\frac{1}{2}u^{-1/2} = \\frac{1}{2\\sqrt{u}}$

Indre derivert: $\\frac{du}{dx} = 2x$

Kjerneregelen gir:
$$g'(x) = \\frac{1}{2\\sqrt{x^2 + 1}} \\cdot 2x = \\frac{x}{\\sqrt{x^2 + 1}}$$`,
    },

    // Oppgave 4
    {
      id: 'r2-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk kjerneregelen til å derivere funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = (2x - 5)^4$', solution: '$u = 2x - 5$. $f\'(x) = 4(2x-5)^3 \\cdot 2 = 8(2x-5)^3$' },
          { label: 'b', task: '$g(x) = (x^3 + 2x)^3$', solution: '$u = x^3 + 2x$. $g\'(x) = 3(x^3 + 2x)^2 \\cdot (3x^2 + 2)$' },
          { label: 'c', task: '$h(x) = \\sqrt{4x + 1}$', solution: '$u = 4x + 1$. $h\'(x) = \\frac{1}{2\\sqrt{4x+1}} \\cdot 4 = \\frac{2}{\\sqrt{4x+1}}$' },
          { label: 'd', task: '$p(x) = \\frac{1}{(x^2 + 1)^2}$', solution: '$p(x) = (x^2+1)^{-2}$. $p\'(x) = -2(x^2+1)^{-3} \\cdot 2x = \\frac{-4x}{(x^2+1)^3}$' },
        ],
        hints: [
          'Identifiser kjernen $u$',
          'Deriver ytre funksjon med hensyn på $u$',
          'Gang med $u\' = \\frac{du}{dx}$',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SPESIELLE FUNKSJONER ==========
    {
      id: 'r2-2-1-spesielle-intro',
      type: 'text',
      content: `## Derivasjon av spesielle funksjoner

Noen funksjoner har spesielle derivasjonsregler som vi må kunne utenat.`,
    },

    // Teorem: Eksponentialfunksjon
    {
      id: 'r2-2-1-theorem-exp',
      type: 'theorem',
      title: 'Derivasjon av eksponentialfunksjoner',
      content: `$$\\frac{d}{dx}(e^x) = e^x$$

$$\\frac{d}{dx}(a^x) = a^x \\cdot \\ln a \\quad \\text{(for } a > 0, a \\neq 1\\text{)}$$

Med kjerneregelen: $\\frac{d}{dx}(e^{u}) = e^{u} \\cdot u'$`,
    },

    // Teorem: Logaritmefunksjon
    {
      id: 'r2-2-1-theorem-ln',
      type: 'theorem',
      title: 'Derivasjon av logaritmefunksjoner',
      content: `$$\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$$

$$\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\ln a}$$

Med kjerneregelen: $\\frac{d}{dx}(\\ln u) = \\frac{1}{u} \\cdot u' = \\frac{u'}{u}$`,
    },

    // Teorem: Trigonometriske funksjoner
    {
      id: 'r2-2-1-theorem-trig',
      type: 'theorem',
      title: 'Derivasjon av trigonometriske funksjoner',
      content: `$$\\frac{d}{dx}(\\sin x) = \\cos x$$

$$\\frac{d}{dx}(\\cos x) = -\\sin x$$

$$\\frac{d}{dx}(\\tan x) = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$$

Med kjerneregelen:
- $(\\sin u)' = \\cos u \\cdot u'$
- $(\\cos u)' = -\\sin u \\cdot u'$`,
    },

    // Eksempel 5: Spesielle funksjoner
    {
      id: 'r2-2-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Derivasjon av spesielle funksjoner',
      problem: `Deriver følgende funksjoner:

a) $f(x) = e^{3x}$
b) $g(x) = \\ln(x^2 + 1)$
c) $h(x) = \\sin(2x)$
d) $p(x) = x^2 \\cdot e^x$`,
      solution: `**Løsning:**

a) $f(x) = e^{3x}$

La $u = 3x$, så $u' = 3$.
$$f'(x) = e^{3x} \\cdot 3 = 3e^{3x}$$

b) $g(x) = \\ln(x^2 + 1)$

La $u = x^2 + 1$, så $u' = 2x$.
$$g'(x) = \\frac{1}{x^2 + 1} \\cdot 2x = \\frac{2x}{x^2 + 1}$$

c) $h(x) = \\sin(2x)$

La $u = 2x$, så $u' = 2$.
$$h'(x) = \\cos(2x) \\cdot 2 = 2\\cos(2x)$$

d) $p(x) = x^2 \\cdot e^x$

Her må vi bruke produktregelen med $g(x) = x^2$ og $h(x) = e^x$.
$$p'(x) = 2x \\cdot e^x + x^2 \\cdot e^x = e^x(2x + x^2) = e^x \\cdot x(x + 2)$$`,
    },

    // Oppgave 5
    {
      id: 'r2-2-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Deriver funksjonene. Bruk kjerneregelen der det er nødvendig.',
        subTasks: [
          { label: 'a', task: '$f(x) = e^{-x^2}$', solution: '$u = -x^2$, $u\' = -2x$. $f\'(x) = e^{-x^2} \\cdot (-2x) = -2x \\cdot e^{-x^2}$' },
          { label: 'b', task: '$g(x) = \\ln(\\sin x)$', solution: '$u = \\sin x$, $u\' = \\cos x$. $g\'(x) = \\frac{\\cos x}{\\sin x} = \\cot x$' },
          { label: 'c', task: '$h(x) = \\cos(x^3)$', solution: '$u = x^3$, $u\' = 3x^2$. $h\'(x) = -\\sin(x^3) \\cdot 3x^2 = -3x^2 \\sin(x^3)$' },
          { label: 'd', task: '$p(x) = e^x \\cdot \\sin x$', solution: 'Produktregel: $p\'(x) = e^x \\sin x + e^x \\cos x = e^x(\\sin x + \\cos x)$' },
          { label: 'e', task: '$q(x) = \\frac{\\ln x}{x}$', solution: 'Kvotientregel: $q\'(x) = \\frac{\\frac{1}{x} \\cdot x - \\ln x \\cdot 1}{x^2} = \\frac{1 - \\ln x}{x^2}$' },
        ],
        hints: [
          'For sammensetninger, identifiser kjernen først',
          'Ved produkt av funksjoner, bruk produktregelen',
          'Ved brøker, bruk kvotientregelen',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering av derivasjonsregler

**Grunnleggende regler:**
- Konstantregelen: $(c)' = 0$
- Potensregelen: $(x^n)' = nx^{n-1}$
- Sumregelen: $(f + g)' = f' + g'$
- Konstantfaktorregel: $(c \\cdot f)' = c \\cdot f'$

**Produkt- og kvotientregler:**
- Produktregelen: $(f \\cdot g)' = f' \\cdot g + f \\cdot g'$
- Kvotientregelen: $\\left(\\frac{f}{g}\\right)' = \\frac{f' \\cdot g - f \\cdot g'}{g^2}$

**Kjerneregelen:**
- $(g(u))' = g'(u) \\cdot u'$ der $u = h(x)$

**Spesielle funksjoner:**
- $(e^x)' = e^x$
- $(\\ln x)' = \\frac{1}{x}$
- $(\\sin x)' = \\cos x$
- $(\\cos x)' = -\\sin x$`,
    },

    // Formelsamling
    {
      id: 'r2-2-1-formler',
      type: 'collapsible',
      title: 'Komplett formelsamling for derivasjon',
      buttonText: 'Vis formelsamling',
      content: [
        {
          id: 'r2-2-1-formel-tabell',
          type: 'text',
          content: `| Funksjon $f(x)$ | Derivert $f'(x)$ |
|-----------------|------------------|
| $c$ (konstant) | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \\ln a$ |
| $\\ln x$ | $\\frac{1}{x}$ |
| $\\log_a x$ | $\\frac{1}{x \\ln a}$ |
| $\\sin x$ | $\\cos x$ |
| $\\cos x$ | $-\\sin x$ |
| $\\tan x$ | $\\frac{1}{\\cos^2 x}$ |`,
        },
      ],
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_2_2: TextbookChapter = {
  id: 'r2-2-2',
  courseId: 'r2',
  chapterNumber: '2.2',
  title: 'Ubestemt integral',
  description: 'Antiderivasjon og grunnleggende integrasjonsregler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forsta sammenhengen mellom derivasjon og integrasjon',
    'beherske grunnleggende integrasjonsregler',
  ],
  content: [
    // ========== INNLEDNING ==========
    {
      id: 'r2-2-2-intro',
      type: 'text',
      content: `## Hva er integrasjon?

I forrige kapittel lærte vi å derivere funksjoner. Nå skal vi lære den *omvendte* operasjonen: **integrasjon**.

Derivasjon svarer på spørsmålet: *Hva er vekstfarten til en funksjon?*

Integrasjon svarer på spørsmålet: *Hvilken funksjon har denne vekstfarten?*

Hvis vi vet at $f'(x) = 2x$, hvilken funksjon $f(x)$ ga denne deriverte? Vi vet at $(x^2)' = 2x$, så $f(x) = x^2$ er én løsning. Men det finnes flere!`,
    },

    // ========== DEFINISJON: ANTIDERIVERT ==========
    {
      id: 'r2-2-2-def-antiderivert',
      type: 'definition',
      title: 'Antiderivert',
      content: `En funksjon $F(x)$ kalles en **antiderivert** til $f(x)$ dersom

$$F'(x) = f(x)$$

Vi sier at $F(x)$ er en antiderivert til $f(x)$ fordi derivasjon av $F$ gir tilbake $f$.`,
    },

    // ========== EKSEMPEL 1: Finne antiderivert ==========
    {
      id: 'r2-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Finne en antiderivert',
      problem: `Finn en antiderivert til $f(x) = 3x^2$.`,
      solution: `**Løsning:**

Vi leter etter en funksjon $F(x)$ slik at $F'(x) = 3x^2$.

Vi vet at $(x^3)' = 3x^2$.

Derfor er $F(x) = x^3$ en antiderivert til $f(x) = 3x^2$.

**Sjekk:** $F'(x) = (x^3)' = 3x^2 = f(x)$ ✓`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'r2-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn en antiderivert til hver funksjon. Sjekk svaret ved å derivere.',
        subTasks: [
          { label: 'a', task: '$f(x) = 4x^3$', solution: '$F(x) = x^4$ fordi $(x^4)\' = 4x^3$' },
          { label: 'b', task: '$f(x) = 5x^4$', solution: '$F(x) = x^5$ fordi $(x^5)\' = 5x^4$' },
          { label: 'c', task: '$f(x) = 2x$', solution: '$F(x) = x^2$ fordi $(x^2)\' = 2x$' },
          { label: 'd', task: '$f(x) = 6x^5$', solution: '$F(x) = x^6$ fordi $(x^6)\' = 6x^5$' },
        ],
        solution: 'a) $x^4$, b) $x^5$, c) $x^2$, d) $x^6$',
        hints: [
          'Tenk: Hvilken funksjon blir $f(x)$ når vi deriverer?',
          'Husk at $(x^n)\' = nx^{n-1}$',
        ],
      },
    },

    // ========== INTEGRASJONSKONSTANTEN ==========
    {
      id: 'r2-2-2-konstant-intro',
      type: 'text',
      content: `## Integrasjonskonstanten $C$

La oss se på funksjonene $F_1(x) = x^2$, $F_2(x) = x^2 + 5$ og $F_3(x) = x^2 - 3$.

Alle disse har samme derivert:
- $F_1'(x) = 2x$
- $F_2'(x) = 2x$
- $F_3'(x) = 2x$

Dette betyr at alle tre er antideriverte til $f(x) = 2x$!

Generelt: Hvis $F(x)$ er en antiderivert til $f(x)$, så er også $F(x) + C$ en antiderivert for enhver konstant $C$.`,
    },

    // ========== DEFINISJON: UBESTEMT INTEGRAL ==========
    {
      id: 'r2-2-2-def-ubestemt-integral',
      type: 'definition',
      title: 'Ubestemt integral',
      content: `Det **ubestemte integralet** til $f(x)$ skrives

$$\\int f(x) \\, dx = F(x) + C$$

der $F(x)$ er en antiderivert til $f(x)$ og $C$ er en vilkårlig konstant kalt **integrasjonskonstanten**.

Symbolet $\\int$ kalles integraltegnet, $f(x)$ kalles integranden, og $dx$ viser hvilken variabel vi integrerer med hensyn på.`,
    },

    // ========== EKSEMPEL 2: Ubestemt integral med konstant ==========
    {
      id: 'r2-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Ubestemt integral',
      problem: `Finn det ubestemte integralet $\\displaystyle\\int 6x^5 \\, dx$.`,
      solution: `**Løsning:**

Vi leter etter en funksjon $F(x)$ slik at $F'(x) = 6x^5$.

Vi vet at $(x^6)' = 6x^5$.

Derfor er:

$$\\int 6x^5 \\, dx = x^6 + C$$

Integrasjonskonstanten $C$ må alltid være med fordi $x^6 + C$ er en antiderivert for alle verdier av $C$.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'r2-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn det ubestemte integralet. Husk integrasjonskonstanten $C$.',
        subTasks: [
          { label: 'a', task: '$\\displaystyle\\int 2x \\, dx$', solution: '$\\int 2x \\, dx = x^2 + C$' },
          { label: 'b', task: '$\\displaystyle\\int 4x^3 \\, dx$', solution: '$\\int 4x^3 \\, dx = x^4 + C$' },
          { label: 'c', task: '$\\displaystyle\\int 7x^6 \\, dx$', solution: '$\\int 7x^6 \\, dx = x^7 + C$' },
          { label: 'd', task: '$\\displaystyle\\int 10x^9 \\, dx$', solution: '$\\int 10x^9 \\, dx = x^{10} + C$' },
        ],
        solution: 'a) $x^2 + C$, b) $x^4 + C$, c) $x^7 + C$, d) $x^{10} + C$',
        hints: [
          'Hva må du derivere for å få integranden?',
          'Ikke glem $+ C$ på slutten!',
        ],
      },
    },

    // ========== POTENSREGELEN FOR INTEGRASJON ==========
    {
      id: 'r2-2-2-potensregel-intro',
      type: 'text',
      content: `## Potensregelen for integrasjon

Nå skal vi utlede en generell regel for å integrere potensfunksjoner.

Vi vet at $(x^n)' = nx^{n-1}$. Hva om vi vil integrere $x^n$?

Hvis $(x^{n+1})' = (n+1)x^n$, så er $x^{n+1}$ nesten en antiderivert til $x^n$.

Men vi får faktoren $(n+1)$ som vi må kvitte oss med. Løsningen er å dele på $(n+1)$:

$$\\left(\\frac{x^{n+1}}{n+1}\\right)' = \\frac{(n+1)x^n}{n+1} = x^n$$`,
    },

    // ========== TEOREM: POTENSREGELEN ==========
    {
      id: 'r2-2-2-theorem-potens',
      type: 'theorem',
      title: 'Potensregelen for integrasjon',
      content: `For alle $n \\neq -1$ gjelder:

$$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$$

**Spesialtilfelle:** For $n = 0$ får vi $\\int 1 \\, dx = x + C$.

**Merk:** Regelen gjelder ikke for $n = -1$ fordi vi da ville delt på null. Integralet $\\int x^{-1} \\, dx = \\int \\frac{1}{x} \\, dx$ behandles senere.`,
    },

    // ========== EKSEMPEL 3: Bruke potensregelen ==========
    {
      id: 'r2-2-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Bruke potensregelen',
      problem: `Finn integralene:

a) $\\displaystyle\\int x^4 \\, dx$

b) $\\displaystyle\\int x^{-3} \\, dx$

c) $\\displaystyle\\int \\sqrt{x} \\, dx$`,
      solution: `**Løsning:**

**a)** Vi bruker potensregelen med $n = 4$:
$$\\int x^4 \\, dx = \\frac{x^{4+1}}{4+1} + C = \\frac{x^5}{5} + C$$

**b)** Vi bruker potensregelen med $n = -3$:
$$\\int x^{-3} \\, dx = \\frac{x^{-3+1}}{-3+1} + C = \\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C$$

**c)** Først skriver vi om: $\\sqrt{x} = x^{1/2}$. Potensregelen med $n = \\frac{1}{2}$:
$$\\int x^{1/2} \\, dx = \\frac{x^{1/2+1}}{1/2+1} + C = \\frac{x^{3/2}}{3/2} + C = \\frac{2}{3}x^{3/2} + C = \\frac{2}{3}\\sqrt{x^3} + C$$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'r2-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk potensregelen til å finne integralene.',
        subTasks: [
          { label: 'a', task: '$\\displaystyle\\int x^5 \\, dx$', solution: '$\\int x^5 \\, dx = \\frac{x^6}{6} + C$' },
          { label: 'b', task: '$\\displaystyle\\int x^{-2} \\, dx$', solution: '$\\int x^{-2} \\, dx = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C$' },
          { label: 'c', task: '$\\displaystyle\\int x^{-4} \\, dx$', solution: '$\\int x^{-4} \\, dx = \\frac{x^{-3}}{-3} + C = -\\frac{1}{3x^3} + C$' },
          { label: 'd', task: '$\\displaystyle\\int \\sqrt[3]{x} \\, dx$', solution: '$\\sqrt[3]{x} = x^{1/3}$, så $\\int x^{1/3} \\, dx = \\frac{x^{4/3}}{4/3} + C = \\frac{3}{4}x^{4/3} + C$' },
          { label: 'e', task: '$\\displaystyle\\int \\frac{1}{x^5} \\, dx$', solution: '$\\frac{1}{x^5} = x^{-5}$, så $\\int x^{-5} \\, dx = \\frac{x^{-4}}{-4} + C = -\\frac{1}{4x^4} + C$' },
        ],
        solution: 'a) $\\frac{x^6}{6} + C$, b) $-\\frac{1}{x} + C$, c) $-\\frac{1}{3x^3} + C$, d) $\\frac{3}{4}x^{4/3} + C$, e) $-\\frac{1}{4x^4} + C$',
        hints: [
          'Skriv om røtter og brøker til potensform først',
          'Husk formelen: $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$',
          'Å dele på en brøk er det samme som å gange med den omvendte brøken',
        ],
      },
    },

    // ========== REGNEREGLER FOR INTEGRALER ==========
    {
      id: 'r2-2-2-regneregler-intro',
      type: 'text',
      content: `## Regneregler for integraler

Akkurat som for derivasjon har vi nyttige regneregler som gjør integrasjon enklere.`,
    },

    // ========== TEOREM: SUMREGEL OG KONSTANTFAKTORREGEL ==========
    {
      id: 'r2-2-2-theorem-regler',
      type: 'theorem',
      title: 'Sumregel og konstantfaktorregel',
      content: `**Sumregelen:**
$$\\int \\bigl(f(x) + g(x)\\bigr) \\, dx = \\int f(x) \\, dx + \\int g(x) \\, dx$$

**Differansregelen:**
$$\\int \\bigl(f(x) - g(x)\\bigr) \\, dx = \\int f(x) \\, dx - \\int g(x) \\, dx$$

**Konstantfaktorregelen:**
$$\\int k \\cdot f(x) \\, dx = k \\cdot \\int f(x) \\, dx$$

der $k$ er en konstant.`,
    },

    // ========== EKSEMPEL 4: Bruke regnereglene ==========
    {
      id: 'r2-2-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Bruke regnereglene',
      problem: `Finn integralene:

a) $\\displaystyle\\int 5x^3 \\, dx$

b) $\\displaystyle\\int (x^2 + 3x) \\, dx$

c) $\\displaystyle\\int (4x^3 - 2x + 7) \\, dx$`,
      solution: `**Løsning:**

**a)** Konstantfaktorregelen:
$$\\int 5x^3 \\, dx = 5 \\int x^3 \\, dx = 5 \\cdot \\frac{x^4}{4} + C = \\frac{5x^4}{4} + C$$

**b)** Sumregelen:
$$\\int (x^2 + 3x) \\, dx = \\int x^2 \\, dx + \\int 3x \\, dx = \\frac{x^3}{3} + 3 \\cdot \\frac{x^2}{2} + C = \\frac{x^3}{3} + \\frac{3x^2}{2} + C$$

**c)** Sum- og konstantfaktorregelen:
$$\\int (4x^3 - 2x + 7) \\, dx = 4 \\cdot \\frac{x^4}{4} - 2 \\cdot \\frac{x^2}{2} + 7x + C = x^4 - x^2 + 7x + C$$

**Merk:** Vi trenger bare én integrasjonskonstant $C$ til slutt.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'r2-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn integralene ved å bruke sum- og konstantfaktorregelen.',
        subTasks: [
          { label: 'a', task: '$\\displaystyle\\int 3x^2 \\, dx$', solution: '$\\int 3x^2 \\, dx = 3 \\cdot \\frac{x^3}{3} + C = x^3 + C$' },
          { label: 'b', task: '$\\displaystyle\\int (x^4 + x^2) \\, dx$', solution: '$\\int (x^4 + x^2) \\, dx = \\frac{x^5}{5} + \\frac{x^3}{3} + C$' },
          { label: 'c', task: '$\\displaystyle\\int (6x^2 - 4x + 1) \\, dx$', solution: '$\\int (6x^2 - 4x + 1) \\, dx = 6 \\cdot \\frac{x^3}{3} - 4 \\cdot \\frac{x^2}{2} + x + C = 2x^3 - 2x^2 + x + C$' },
          { label: 'd', task: '$\\displaystyle\\int (2x^5 - 3x^3 + x) \\, dx$', solution: '$\\int (2x^5 - 3x^3 + x) \\, dx = 2 \\cdot \\frac{x^6}{6} - 3 \\cdot \\frac{x^4}{4} + \\frac{x^2}{2} + C = \\frac{x^6}{3} - \\frac{3x^4}{4} + \\frac{x^2}{2} + C$' },
          { label: 'e', task: '$\\displaystyle\\int \\left(\\frac{1}{2}x^4 - \\frac{2}{3}x^3\\right) \\, dx$', solution: '$\\int \\left(\\frac{1}{2}x^4 - \\frac{2}{3}x^3\\right) \\, dx = \\frac{1}{2} \\cdot \\frac{x^5}{5} - \\frac{2}{3} \\cdot \\frac{x^4}{4} + C = \\frac{x^5}{10} - \\frac{x^4}{6} + C$' },
        ],
        solution: 'a) $x^3 + C$, b) $\\frac{x^5}{5} + \\frac{x^3}{3} + C$, c) $2x^3 - 2x^2 + x + C$, d) $\\frac{x^6}{3} - \\frac{3x^4}{4} + \\frac{x^2}{2} + C$, e) $\\frac{x^5}{10} - \\frac{x^4}{6} + C$',
        hints: [
          'Integrer ledd for ledd',
          'Trekk ut konstantfaktorer først',
          'Forenkle svaret hvis mulig',
        ],
      },
    },

    // ========== INTEGRASJON AV POLYNOMER ==========
    {
      id: 'r2-2-2-polynom-intro',
      type: 'text',
      content: `## Integrasjon av polynomer

Med potensregelen og regnereglene kan vi nå integrere alle polynomer.

**Generell metode:**
1. Skriv polynomet som en sum av ledd
2. Integrer hvert ledd for seg med potensregelen
3. Legg til integrasjonskonstanten $C$

For et polynom $p(x) = a_nx^n + a_{n-1}x^{n-1} + \\cdots + a_1x + a_0$ får vi:

$$\\int p(x) \\, dx = \\frac{a_n x^{n+1}}{n+1} + \\frac{a_{n-1} x^n}{n} + \\cdots + \\frac{a_1 x^2}{2} + a_0 x + C$$`,
    },

    // ========== EKSEMPEL 5: Integrasjon av polynomer ==========
    {
      id: 'r2-2-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Integrasjon av polynomer',
      problem: `Finn integralene:

a) $\\displaystyle\\int (x^3 - 4x^2 + 5x - 2) \\, dx$

b) $\\displaystyle\\int (x+2)(x-3) \\, dx$

c) $\\displaystyle\\int \\frac{x^3 - 2x}{x} \\, dx$`,
      solution: `**Løsning:**

**a)** Integrer ledd for ledd:
$$\\int (x^3 - 4x^2 + 5x - 2) \\, dx = \\frac{x^4}{4} - \\frac{4x^3}{3} + \\frac{5x^2}{2} - 2x + C$$

**b)** Først utvider vi parentesene:
$$(x+2)(x-3) = x^2 - 3x + 2x - 6 = x^2 - x - 6$$

Så integrerer vi:
$$\\int (x^2 - x - 6) \\, dx = \\frac{x^3}{3} - \\frac{x^2}{2} - 6x + C$$

**c)** Først forenkler vi ved å dele hvert ledd på $x$:
$$\\frac{x^3 - 2x}{x} = \\frac{x^3}{x} - \\frac{2x}{x} = x^2 - 2$$

Så integrerer vi:
$$\\int (x^2 - 2) \\, dx = \\frac{x^3}{3} - 2x + C$$`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'r2-2-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn integralene. Forenkle uttrykket først hvis nødvendig.',
        subTasks: [
          { label: 'a', task: '$\\displaystyle\\int (2x^4 - 3x^3 + x^2 - 5) \\, dx$', solution: '$\\int (2x^4 - 3x^3 + x^2 - 5) \\, dx = \\frac{2x^5}{5} - \\frac{3x^4}{4} + \\frac{x^3}{3} - 5x + C$' },
          { label: 'b', task: '$\\displaystyle\\int (x+1)^2 \\, dx$', solution: '$(x+1)^2 = x^2 + 2x + 1$, så $\\int (x^2 + 2x + 1) \\, dx = \\frac{x^3}{3} + x^2 + x + C$' },
          { label: 'c', task: '$\\displaystyle\\int (2x-1)(x+3) \\, dx$', solution: '$(2x-1)(x+3) = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3$, så $\\int (2x^2 + 5x - 3) \\, dx = \\frac{2x^3}{3} + \\frac{5x^2}{2} - 3x + C$' },
          { label: 'd', task: '$\\displaystyle\\int \\frac{x^4 + x^2}{x^2} \\, dx$', solution: '$\\frac{x^4 + x^2}{x^2} = x^2 + 1$, så $\\int (x^2 + 1) \\, dx = \\frac{x^3}{3} + x + C$' },
          { label: 'e', task: '$\\displaystyle\\int \\frac{(x+1)(x-1)}{x} \\, dx$', solution: '$(x+1)(x-1) = x^2 - 1$, så $\\frac{x^2-1}{x} = x - \\frac{1}{x}$. Da får vi $\\int \\left(x - \\frac{1}{x}\\right) \\, dx = \\frac{x^2}{2} - \\ln|x| + C$' },
        ],
        solution: 'a) $\\frac{2x^5}{5} - \\frac{3x^4}{4} + \\frac{x^3}{3} - 5x + C$, b) $\\frac{x^3}{3} + x^2 + x + C$, c) $\\frac{2x^3}{3} + \\frac{5x^2}{2} - 3x + C$, d) $\\frac{x^3}{3} + x + C$, e) $\\frac{x^2}{2} - \\ln|x| + C$',
        hints: [
          'Utvid parenteser eller forenkle brøker før du integrerer',
          'Husk at $\\frac{a+b}{c} = \\frac{a}{c} + \\frac{b}{c}$',
          'I oppgave e) dukker $\\ln|x|$ opp fordi $\\int \\frac{1}{x} \\, dx = \\ln|x| + C$',
        ],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Antiderivert:** $F(x)$ er en antiderivert til $f(x)$ hvis $F'(x) = f(x)$

**Ubestemt integral:** $\\displaystyle\\int f(x) \\, dx = F(x) + C$

**Potensregelen:** $\\displaystyle\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ for $n \\neq -1$

**Sumregelen:** $\\displaystyle\\int (f + g) \\, dx = \\int f \\, dx + \\int g \\, dx$

**Konstantfaktorregelen:** $\\displaystyle\\int k \\cdot f \\, dx = k \\cdot \\int f \\, dx$

**Tips:**
- Sjekk alltid svaret ved å derivere!
- Ikke glem integrasjonskonstanten $C$
- Forenkle uttrykket før du integrerer`,
    },

    // ========== ADVARSEL ==========
    {
      id: 'r2-2-2-warning',
      type: 'warning',
      title: 'Vanlige feil',
      content: `- **Glemme $C$**: Det ubestemte integralet inneholder alltid en integrasjonskonstant.
- **Feil i potensregelen**: Husk at eksponenten økes med 1, og vi deler på den nye eksponenten.
- **$\\int \\frac{1}{x} \\, dx \\neq \\frac{x^0}{0}$**: Potensregelen gjelder ikke for $n = -1$. Her er svaret $\\ln|x| + C$.`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_2_3: TextbookChapter = {
  id: 'r2-2-3',
  courseId: 'r2',
  chapterNumber: '2.3',
  title: 'Integrasjon av 1/x og eksponentialfunksjoner',
  description: 'Spesielle integraler med ln og e^x.',
  estimatedMinutes: 50,
  competenceGoals: [
    'integrere 1/x og eksponentialfunksjoner',
    'bruke kjerneregelen ved integrasjon',
  ],
  content: [
    {
      id: 'r2-2-3-intro',
      type: 'text',
      content: `## Integrasjon av spesielle funksjoner

I dette kapittelet skal vi se på integrasjon av funksjoner som gir logaritmer og eksponentialfunksjoner som resultat. Disse integralene dukker opp i mange praktiske sammenhenger, blant annet ved modellering av vekst, forfall og strømning.

Vi starter med det viktige integralet av $\\frac{1}{x}$, som gir den naturlige logaritmen.`,
    },
    {
      id: 'r2-2-3-def-1',
      type: 'definition',
      title: 'Integralet av 1/x',
      content: `For $x \\neq 0$ har vi:

$$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$$

Vi bruker **absoluttverdi** fordi $\\ln x$ bare er definert for $x > 0$, men $\\frac{1}{x}$ er definert for alle $x \\neq 0$.

**Verifisering:** Vi kan sjekke dette ved å derivere: $\\frac{d}{dx}[\\ln|x|] = \\frac{1}{x}$`,
    },
    {
      id: 'r2-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Grunnleggende integral med 1/x',
      problem: 'Regn ut $\\displaystyle\\int \\frac{3}{x} \\, dx$.',
      solution: `Vi trekker konstanten utenfor integralet:

$$\\int \\frac{3}{x} \\, dx = 3 \\int \\frac{1}{x} \\, dx = 3\\ln|x| + C$$`,
    },
    {
      id: 'r2-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut $\\displaystyle\\int \\frac{5}{x} \\, dx$.',
        solution: '$5\\ln|x| + C$',
        hints: ['Trekk konstanten 5 utenfor integralet.'],
      },
    },
    {
      id: 'r2-2-3-def-2',
      type: 'definition',
      title: 'Integralet av e^x',
      content: `Den naturlige eksponentialfunksjonen $e^x$ er sin egen deriverte, og dermed også sitt eget integral:

$$\\int e^x \\, dx = e^x + C$$

Dette er en av de enkleste og viktigste integralformlene.`,
    },
    {
      id: 'r2-2-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Integral med e^x',
      problem: 'Regn ut $\\displaystyle\\int (e^x + 2x) \\, dx$.',
      solution: `Vi integrerer ledd for ledd:

$$\\int (e^x + 2x) \\, dx = \\int e^x \\, dx + \\int 2x \\, dx = e^x + x^2 + C$$`,
    },
    {
      id: 'r2-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut $\\displaystyle\\int (3e^x - 4x) \\, dx$.',
        solution: '$3e^x - 2x^2 + C$',
        hints: ['Integrer ledd for ledd. Husk at $\\int x \\, dx = \\frac{x^2}{2}$.'],
      },
    },
    {
      id: 'r2-2-3-def-3',
      type: 'definition',
      title: 'Integralet av e^(kx)',
      content: `For en konstant $k \\neq 0$:

$$\\int e^{kx} \\, dx = \\frac{1}{k} e^{kx} + C$$

**Verifisering:** $\\frac{d}{dx}\\left[\\frac{1}{k} e^{kx}\\right] = \\frac{1}{k} \\cdot k \\cdot e^{kx} = e^{kx}$`,
    },
    {
      id: 'r2-2-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Integral med e^(kx)',
      problem: 'Regn ut $\\displaystyle\\int e^{3x} \\, dx$ og $\\displaystyle\\int e^{-2x} \\, dx$.',
      solution: `**a)** For $e^{3x}$ har vi $k = 3$:
$$\\int e^{3x} \\, dx = \\frac{1}{3} e^{3x} + C$$

**b)** For $e^{-2x}$ har vi $k = -2$:
$$\\int e^{-2x} \\, dx = \\frac{1}{-2} e^{-2x} + C = -\\frac{1}{2} e^{-2x} + C$$`,
    },
    {
      id: 'r2-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut $\\displaystyle\\int 4e^{5x} \\, dx$ og $\\displaystyle\\int e^{-x} \\, dx$.',
        solution: '$\\frac{4}{5}e^{5x} + C$ og $-e^{-x} + C$',
        hints: ['Bruk formelen $\\int e^{kx} \\, dx = \\frac{1}{k}e^{kx} + C$.'],
      },
    },
    {
      id: 'r2-2-3-def-4',
      type: 'definition',
      title: 'Integralet av a^x',
      content: `For en konstant $a > 0$, $a \\neq 1$:

$$\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$$

**Verifisering:** Vi vet at $\\frac{d}{dx}[a^x] = a^x \\ln a$, derfor:
$$\\frac{d}{dx}\\left[\\frac{a^x}{\\ln a}\\right] = \\frac{a^x \\ln a}{\\ln a} = a^x$$`,
    },
    {
      id: 'r2-2-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Integral med a^x',
      problem: 'Regn ut $\\displaystyle\\int 2^x \\, dx$.',
      solution: `Vi bruker formelen med $a = 2$:

$$\\int 2^x \\, dx = \\frac{2^x}{\\ln 2} + C$$

Dette kan skrives som $\\frac{2^x}{\\ln 2} + C \\approx 1{,}44 \\cdot 2^x + C$`,
    },
    {
      id: 'r2-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut $\\displaystyle\\int 3^x \\, dx$ og $\\displaystyle\\int 5 \\cdot 2^x \\, dx$.',
        solution: '$\\frac{3^x}{\\ln 3} + C$ og $\\frac{5 \\cdot 2^x}{\\ln 2} + C$',
        hints: ['Bruk formelen $\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$.'],
      },
    },
    {
      id: 'r2-2-3-theorem-1',
      type: 'theorem',
      title: 'Kjerneregelen for integrasjon',
      content: `Hvis $u = g(x)$ er en deriverbar funksjon, så har vi:

$$\\int f(g(x)) \\cdot g'(x) \\, dx = F(g(x)) + C$$

der $F$ er en antiderivert av $f$.

**Spesielt for logaritmer:**
$$\\int \\frac{g'(x)}{g(x)} \\, dx = \\ln|g(x)| + C$$

**Spesielt for eksponentialfunksjoner:**
$$\\int g'(x) \\cdot e^{g(x)} \\, dx = e^{g(x)} + C$$`,
    },
    {
      id: 'r2-2-3-example-5',
      type: 'example',
      title: 'Eksempel 5: Kjerneregelen med ln',
      problem: 'Regn ut $\\displaystyle\\int \\frac{2x}{x^2 + 1} \\, dx$.',
      solution: `Vi setter $g(x) = x^2 + 1$. Da er $g'(x) = 2x$.

Integralet har formen $\\int \\frac{g'(x)}{g(x)} \\, dx$, så vi bruker kjerneregelen:

$$\\int \\frac{2x}{x^2 + 1} \\, dx = \\ln|x^2 + 1| + C = \\ln(x^2 + 1) + C$$

(Vi slipper absoluttverdi siden $x^2 + 1 > 0$ for alle $x$.)`,
    },
    {
      id: 'r2-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut $\\displaystyle\\int \\frac{3x^2}{x^3 + 5} \\, dx$ og $\\displaystyle\\int \\frac{\\cos x}{\\sin x} \\, dx$.',
        solution: '$\\ln|x^3 + 5| + C$ og $\\ln|\\sin x| + C$',
        hints: [
          'For det forste: Hva er den deriverte av $x^3 + 5$?',
          'For det andre: Hva er den deriverte av $\\sin x$?',
          'Begge har formen $\\int \\frac{g\'(x)}{g(x)} \\, dx = \\ln|g(x)| + C$.',
        ],
      },
    },
    {
      id: 'r2-2-3-note-1',
      type: 'note',
      content: `**Tips for a gjenkjenne kjerneregel-integraler:**

1. Se etter en brok der telleren er den deriverte av nevneren
2. Se etter et produkt der den ene faktoren er den deriverte av "kjernen" i den andre faktoren
3. Hvis du ser $e^{\\text{noe}}$, sjekk om "noe" sin deriverte ogsa er til stede`,
    },
    {
      id: 'r2-2-3-example-6',
      type: 'example',
      title: 'Eksempel 6: Kjerneregelen med e^x',
      problem: 'Regn ut $\\displaystyle\\int 2x \\cdot e^{x^2} \\, dx$.',
      solution: `Vi setter $g(x) = x^2$. Da er $g'(x) = 2x$.

Integralet har formen $\\int g'(x) \\cdot e^{g(x)} \\, dx$, sa:

$$\\int 2x \\cdot e^{x^2} \\, dx = e^{x^2} + C$$

**Kontroll:** $\\frac{d}{dx}[e^{x^2}] = e^{x^2} \\cdot 2x = 2x \\cdot e^{x^2}$ \\checkmark`,
    },
    {
      id: 'r2-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'r2-2-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut $\\displaystyle\\int (3x^2 + 2) \\cdot e^{x^3 + 2x} \\, dx$.',
        solution: '$e^{x^3 + 2x} + C$',
        hints: [
          'Hva er den deriverte av eksponenten $x^3 + 2x$?',
          'Sammenlign med formelen $\\int g\'(x) \\cdot e^{g(x)} \\, dx = e^{g(x)} + C$.',
        ],
      },
    },
    {
      id: 'r2-2-3-def-5',
      type: 'definition',
      title: 'Bestemt integral med ln og e^x',
      content: `For bestemte integraler bruker vi analysens fundamentalteorem:

$$\\int_a^b \\frac{1}{x} \\, dx = \\Big[\\ln|x|\\Big]_a^b = \\ln|b| - \\ln|a|$$

$$\\int_a^b e^x \\, dx = \\Big[e^x\\Big]_a^b = e^b - e^a$$

**Merk:** For $\\int \\frac{1}{x} \\, dx$ ma $a$ og $b$ ha samme fortegn (begge positive eller begge negative).`,
    },
    {
      id: 'r2-2-3-example-7',
      type: 'example',
      title: 'Eksempel 7: Bestemt integral',
      problem: 'Regn ut $\\displaystyle\\int_1^e \\frac{1}{x} \\, dx$ og $\\displaystyle\\int_0^2 e^x \\, dx$.',
      solution: `**a)** $\\displaystyle\\int_1^e \\frac{1}{x} \\, dx = \\Big[\\ln|x|\\Big]_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$

**b)** $\\displaystyle\\int_0^2 e^x \\, dx = \\Big[e^x\\Big]_0^2 = e^2 - e^0 = e^2 - 1 \\approx 6{,}39$`,
    },
    {
      id: 'r2-2-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'r2-2-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut $\\displaystyle\\int_1^4 \\frac{2}{x} \\, dx$ og $\\displaystyle\\int_0^1 3e^{2x} \\, dx$.',
        solution: '$2\\ln 4 = 4\\ln 2 \\approx 2{,}77$ og $\\frac{3}{2}(e^2 - 1) \\approx 9{,}60$',
        hints: [
          'For det forste: Trekk ut konstanten 2, bruk sa formelen.',
          'For det andre: $\\int e^{2x} \\, dx = \\frac{1}{2}e^{2x}$.',
        ],
      },
    },
    {
      id: 'r2-2-3-summary',
      type: 'text',
      content: `## Oppsummering

| Funksjon | Integral |
|----------|----------|
| $\\frac{1}{x}$ | $\\ln|x| + C$ |
| $e^x$ | $e^x + C$ |
| $e^{kx}$ | $\\frac{1}{k}e^{kx} + C$ |
| $a^x$ | $\\frac{a^x}{\\ln a} + C$ |
| $\\frac{g'(x)}{g(x)}$ | $\\ln|g(x)| + C$ |
| $g'(x) \\cdot e^{g(x)}$ | $e^{g(x)} + C$ |`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_2_4: TextbookChapter = {
  id: 'r2-2-4',
  courseId: 'r2',
  chapterNumber: '2.4',
  title: 'Bestemt integral som grenseverdi',
  description: 'Integralet som grense for en sum av rektangler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forsta integralet som en grenseverdi av summer',
    'beregne Riemannsummer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-2-4-intro',
      type: 'text',
      content: `## Areal under en kurve

Hvordan finner vi arealet under en kurve? For rektangler og trekanter har vi enkle formler, men hva med arealet under en buet kurve som $f(x) = x^2$?

Ideen er gammel - allerede Arkimedes (ca. 250 f.Kr.) brukte en genial metode: **Del opp arealet i mange smale rektangler**, og la antallet rektangler ga mot uendelig.

Denne ideen er selve grunnlaget for integrasjon og kalles **Riemannsummen**, oppkalt etter den tyske matematikeren Bernhard Riemann (1826-1866).`,
    },

    // ========== DEFINISJON 1: Inndeling ==========
    {
      id: 'r2-2-4-def-1',
      type: 'definition',
      title: 'Inndeling av et intervall',
      content: `La $[a, b]$ være et lukket intervall. En **inndeling** av $[a, b]$ i $n$ delintervaller er gitt ved punktene:

$$a = x_0 < x_1 < x_2 < \\cdots < x_{n-1} < x_n = b$$

Hvert delintervall har bredde:
$$\\Delta x = \\frac{b - a}{n}$$

nar vi bruker **lik inndeling** (alle delintervaller like brede).`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'r2-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Inndeling av et intervall',
      problem: 'Del intervallet $[0, 4]$ inn i 4 like delintervaller. Finn delingspunktene og bredden $\\Delta x$.',
      solution: `**Løsning:**

Bredden av hvert delintervall:
$$\\Delta x = \\frac{b - a}{n} = \\frac{4 - 0}{4} = 1$$

Delingspunktene blir:
- $x_0 = 0$
- $x_1 = 1$
- $x_2 = 2$
- $x_3 = 3$
- $x_4 = 4$

Delintervallene er: $[0, 1]$, $[1, 2]$, $[2, 3]$, $[3, 4]$.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'r2-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Del intervallet $[1, 5]$ inn i 8 like delintervaller. Finn $\\Delta x$ og skriv opp alle delingspunktene $x_0, x_1, \\ldots, x_8$.',
        solution: '$\\Delta x = \\frac{5-1}{8} = 0{,}5$. Delingspunkter: $x_0 = 1$, $x_1 = 1{,}5$, $x_2 = 2$, $x_3 = 2{,}5$, $x_4 = 3$, $x_5 = 3{,}5$, $x_6 = 4$, $x_7 = 4{,}5$, $x_8 = 5$.',
        hints: ['Bruk formelen $\\Delta x = \\frac{b-a}{n}$.', 'Hvert delingspunkt er $x_i = a + i \\cdot \\Delta x$.'],
      },
    },

    // ========== DEFINISJON 2: Riemannsum ==========
    {
      id: 'r2-2-4-def-2',
      type: 'definition',
      title: 'Riemannsum',
      content: `La $f$ være en funksjon definert på $[a, b]$, og la intervallet være delt i $n$ like delintervaller med bredde $\\Delta x = \\frac{b-a}{n}$.

En **Riemannsum** er summen av arealene til $n$ rektangler:

$$S_n = \\sum_{i=1}^{n} f(x_i^*) \\cdot \\Delta x$$

der $x_i^*$ er et punkt i det $i$-te delintervallet.

**Vanlige valg for $x_i^*$:**
- **Venstresum**: $x_i^* = x_{i-1}$ (venstre endepunkt)
- **Hoyresum**: $x_i^* = x_i$ (hoyre endepunkt)
- **Midtpunktsum**: $x_i^* = \\frac{x_{i-1} + x_i}{2}$ (midtpunktet)`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'r2-2-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Beregne en Riemannsum',
      problem: 'La $f(x) = x^2$ på $[0, 2]$. Beregn hoyresummen $S_4$ med $n = 4$ delintervaller.',
      solution: `**Løsning:**

**Steg 1:** Finn $\\Delta x$:
$$\\Delta x = \\frac{2 - 0}{4} = 0{,}5$$

**Steg 2:** Finn delingspunktene:
$$x_0 = 0, \\quad x_1 = 0{,}5, \\quad x_2 = 1, \\quad x_3 = 1{,}5, \\quad x_4 = 2$$

**Steg 3:** For hoyresum bruker vi $x_1, x_2, x_3, x_4$:
$$S_4 = f(0{,}5) \\cdot 0{,}5 + f(1) \\cdot 0{,}5 + f(1{,}5) \\cdot 0{,}5 + f(2) \\cdot 0{,}5$$

**Steg 4:** Beregn funksjonsverdiene:
$$S_4 = 0{,}25 \\cdot 0{,}5 + 1 \\cdot 0{,}5 + 2{,}25 \\cdot 0{,}5 + 4 \\cdot 0{,}5$$
$$S_4 = 0{,}125 + 0{,}5 + 1{,}125 + 2 = 3{,}75$$

**Kommentar:** Den eksakte verdien av $\\int_0^2 x^2 \\, dx = \\frac{8}{3} \\approx 2{,}67$. Hoyresummen overestimerer fordi $f(x) = x^2$ er voksende.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'r2-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'La $f(x) = x^2$ på $[0, 2]$. Beregn **venstresummen** $S_4$ med $n = 4$ delintervaller.',
        solution: 'Venstresummen bruker $x_0, x_1, x_2, x_3$: $S_4 = f(0) \\cdot 0{,}5 + f(0{,}5) \\cdot 0{,}5 + f(1) \\cdot 0{,}5 + f(1{,}5) \\cdot 0{,}5 = 0 + 0{,}125 + 0{,}5 + 1{,}125 = 1{,}75$.',
        hints: ['Venstresummen bruker venstre endepunkt i hvert delintervall.', 'Funksjonsverdiene er $f(0) = 0$, $f(0{,}5) = 0{,}25$, $f(1) = 1$, $f(1{,}5) = 2{,}25$.'],
      },
    },

    // ========== TEOREM: Over- og undersum ==========
    {
      id: 'r2-2-4-theorem-1',
      type: 'theorem',
      title: 'Over- og undersum',
      content: `For en **voksende** funksjon $f$ på $[a, b]$:
- **Venstresummen** er en **undersum** (underestimerer arealet)
- **Hoyresummen** er en **oversum** (overestimerer arealet)

For en **avtagende** funksjon er det motsatt.

**Viktig observasjon:** Nar $n \\to \\infty$, vil bade over- og undersummen konvergere mot det eksakte arealet.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'r2-2-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Sigmanotasjon for Riemannsum',
      problem: 'Skriv hoyresummen for $f(x) = x^2$ på $[0, 3]$ med $n$ delintervaller ved hjelp av sigmanotasjon.',
      solution: `**Løsning:**

**Steg 1:** Finn $\\Delta x$ og delingspunktene:
$$\\Delta x = \\frac{3 - 0}{n} = \\frac{3}{n}$$
$$x_i = 0 + i \\cdot \\frac{3}{n} = \\frac{3i}{n}$$

**Steg 2:** Skriv hoyresummen:
$$S_n = \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x = \\sum_{i=1}^{n} \\left(\\frac{3i}{n}\\right)^2 \\cdot \\frac{3}{n}$$

**Steg 3:** Forenkle:
$$S_n = \\sum_{i=1}^{n} \\frac{9i^2}{n^2} \\cdot \\frac{3}{n} = \\frac{27}{n^3} \\sum_{i=1}^{n} i^2$$`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'r2-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv hoyresummen for $f(x) = 2x$ på $[0, 4]$ med $n$ delintervaller ved hjelp av sigmanotasjon. Forenkle uttrykket.',
        solution: '$\\Delta x = \\frac{4}{n}$, $x_i = \\frac{4i}{n}$. Hoyresummen: $S_n = \\sum_{i=1}^{n} 2 \\cdot \\frac{4i}{n} \\cdot \\frac{4}{n} = \\frac{32}{n^2} \\sum_{i=1}^{n} i$.',
        hints: ['Finn forst $\\Delta x$ og $x_i$.', 'Sett inn i formelen $S_n = \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x$.'],
      },
    },

    // ========== DEFINISJON 3: Viktige summeformler ==========
    {
      id: 'r2-2-4-def-3',
      type: 'definition',
      title: 'Viktige summeformler',
      content: `For å beregne Riemannsummer trenger vi disse summeformlene:

$$\\sum_{i=1}^{n} 1 = n$$

$$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

$$\\sum_{i=1}^{n} i^3 = \\left(\\frac{n(n+1)}{2}\\right)^2$$`,
    },

    // ========== EKSEMPEL 4 ==========
    {
      id: 'r2-2-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Beregne grenseverdi av Riemannsum',
      problem: 'Finn $\\displaystyle\\int_0^3 x^2 \\, dx$ ved a ta grenseverdien $\\lim_{n \\to \\infty} S_n$.',
      solution: `**Løsning:**

Fra Eksempel 3 har vi:
$$S_n = \\frac{27}{n^3} \\sum_{i=1}^{n} i^2 = \\frac{27}{n^3} \\cdot \\frac{n(n+1)(2n+1)}{6}$$

**Forenkle:**
$$S_n = \\frac{27 \\cdot n(n+1)(2n+1)}{6n^3} = \\frac{27(n+1)(2n+1)}{6n^2}$$

**Utvid telleren:**
$$S_n = \\frac{27(2n^2 + 3n + 1)}{6n^2} = \\frac{27 \\cdot 2n^2 + 27 \\cdot 3n + 27}{6n^2}$$

$$S_n = \\frac{54n^2 + 81n + 27}{6n^2} = 9 + \\frac{13{,}5}{n} + \\frac{4{,}5}{n^2}$$

**Ta grenseverdien:**
$$\\lim_{n \\to \\infty} S_n = \\lim_{n \\to \\infty} \\left(9 + \\frac{13{,}5}{n} + \\frac{4{,}5}{n^2}\\right) = 9$$

**Svar:** $\\displaystyle\\int_0^3 x^2 \\, dx = 9$`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'r2-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk grenseverdien av en Riemannsum til a vise at $\\displaystyle\\int_0^4 2x \\, dx = 16$.',
        solution: 'Fra oppgave 3: $S_n = \\frac{32}{n^2} \\sum_{i=1}^{n} i = \\frac{32}{n^2} \\cdot \\frac{n(n+1)}{2} = \\frac{16(n+1)}{n} = 16 + \\frac{16}{n}$. Grenseverdi: $\\lim_{n \\to \\infty} S_n = 16$.',
        hints: ['Bruk summeformelen $\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$.', 'Del opp broket og finn grenseverdien nar $n \\to \\infty$.'],
      },
    },

    // ========== DEFINISJON 4: Bestemt integral ==========
    {
      id: 'r2-2-4-def-4',
      type: 'definition',
      title: 'Det bestemte integralet',
      content: `La $f$ være en kontinuerlig funksjon på $[a, b]$. Det **bestemte integralet** av $f$ fra $a$ til $b$ er definert som:

$$\\int_a^b f(x) \\, dx = \\lim_{n \\to \\infty} \\sum_{i=1}^{n} f(x_i^*) \\cdot \\Delta x$$

der $\\Delta x = \\frac{b-a}{n}$ og $x_i^*$ er et vilkarlig punkt i det $i$-te delintervallet.

**Tolkning:**
- Hvis $f(x) \\geq 0$ på $[a, b]$, gir integralet **arealet** mellom grafen og $x$-aksen.
- Hvis $f(x) < 0$ noen steder, far vi **fortegnsarealet** (negativt bidrag under $x$-aksen).`,
    },

    // ========== EKSEMPEL 5 ==========
    {
      id: 'r2-2-4-example-5',
      type: 'example',
      title: 'Eksempel 5: Integral som areal',
      problem: 'Beregn $\\displaystyle\\int_0^2 3 \\, dx$ bade geometrisk og ved Riemannsum.',
      solution: `**Løsning:**

**Geometrisk:**
Funksjonen $f(x) = 3$ er en horisontal linje. Arealet er et rektangel med bredde $2 - 0 = 2$ og høyde $3$:
$$A = 2 \\cdot 3 = 6$$

**Ved Riemannsum:**
$$S_n = \\sum_{i=1}^{n} f(x_i) \\cdot \\Delta x = \\sum_{i=1}^{n} 3 \\cdot \\frac{2}{n} = \\frac{6}{n} \\sum_{i=1}^{n} 1 = \\frac{6}{n} \\cdot n = 6$$

$$\\lim_{n \\to \\infty} S_n = 6$$

**Svar:** $\\displaystyle\\int_0^2 3 \\, dx = 6$`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'r2-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-2-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn $\\displaystyle\\int_1^4 5 \\, dx$ bade geometrisk og ved a bruke definisjonen av det bestemte integralet (Riemannsum).',
        solution: 'Geometrisk: Rektangel med bredde $4-1=3$ og høyde $5$, sa $A = 15$. Riemannsum: $S_n = \\sum_{i=1}^{n} 5 \\cdot \\frac{3}{n} = \\frac{15}{n} \\cdot n = 15$. Svar: $\\int_1^4 5 \\, dx = 15$.',
        hints: ['Tegn grafen til $f(x) = 5$ og finn arealet av rektangelet.', 'For Riemannsum: $\\Delta x = \\frac{4-1}{n} = \\frac{3}{n}$.'],
      },
    },

    // ========== AVSLUTTENDE MERKNAD ==========
    {
      id: 'r2-2-4-note',
      type: 'note',
      content: `**Oppsummering:**

Definisjonen av det bestemte integralet som grenseverdi av en Riemannsum gir oss en presis matematisk forstaelse av hva et integral er. I praksis bruker vi imidlertid **analysens fundamentalteorem** (som vi ser i neste kapittel) for å beregne integraler - det er mye enklere enn a ta grenseverdier av summer!

Riemannsummer er likevel viktige:
- De gir **intuisjon** for hva et integral betyr
- De brukes i **numerisk integrasjon** nar vi ikke kan finne en antiderivert
- De danner grunnlaget for **flerdimensjonale integraler**`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_2_5: TextbookChapter = {
  id: 'r2-2-5',
  courseId: 'r2',
  chapterNumber: '2.5',
  title: 'Analysens fundamentalsetning',
  description: 'Sammenhengen mellom derivasjon og integrasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forsta og anvende analysens fundamentalsetning',
    'beregne bestemte integraler ved hjelp av antideriverte',
  ],
  content: [
    {
      id: 'r2-2-5-intro',
      type: 'text',
      content: `## Sammenhengen mellom derivasjon og integrasjon

Derivasjon og integrasjon er de to grunnleggende operasjonene i kalkulus. Men er de egentlig to helt uavhengige operasjoner?

**Analysens fundamentalsetning** gir et oppsiktsvekkende svar: Derivasjon og integrasjon er *inverse operasjoner* - de opphever hverandre!

Dette betyr at vi kan beregne bestemte integraler (arealer) ved hjelp av antideriverte, noe som forenkler mange beregninger dramatisk.`,
    },
    {
      id: 'r2-2-5-def-1',
      type: 'definition',
      title: 'Antiderivert',
      content: `En funksjon $F(x)$ kalles en **antiderivert** (eller primitiv funksjon) til $f(x)$ dersom:
$$F'(x) = f(x)$$

**Eksempler:**
- $F(x) = x^2$ er en antiderivert til $f(x) = 2x$ fordi $(x^2)' = 2x$
- $F(x) = \\sin x$ er en antiderivert til $f(x) = \\cos x$ fordi $(\\sin x)' = \\cos x$

**Merk:** Hvis $F(x)$ er en antiderivert til $f(x)$, er ogsa $F(x) + C$ en antiderivert for enhver konstant $C$.`,
    },
    {
      id: 'r2-2-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Finne antideriverte',
      problem: 'Finn en antiderivert til $f(x) = 3x^2 + 2x$.',
      solution: `Vi soker $F(x)$ slik at $F'(x) = 3x^2 + 2x$.

For $3x^2$: Siden $(x^3)' = 3x^2$, er $x^3$ en antiderivert.

For $2x$: Siden $(x^2)' = 2x$, er $x^2$ en antiderivert.

Dermed er:
$$F(x) = x^3 + x^2$$

**Kontroll:** $F'(x) = 3x^2 + 2x = f(x)$ \\checkmark`,
    },
    {
      id: 'r2-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-2-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn en antiderivert til $f(x) = 4x^3 - 6x$.',
        solution: '$F(x) = x^4 - 3x^2$ (eller $F(x) = x^4 - 3x^2 + C$)',
        hints: ['Hva ma du derivere for a fa $4x^3$?', 'Hva ma du derivere for a fa $6x$?'],
      },
    },
    {
      id: 'r2-2-5-theorem-1',
      type: 'theorem',
      title: 'Analysens fundamentalsetning - del 1',
      content: `La $f$ være en kontinuerlig funksjon på $[a, b]$. Definer funksjonen $F$ ved:
$$F(x) = \\int_a^x f(t) \\, dt$$

Da er $F$ deriverbar på $(a, b)$, og:
$$F'(x) = f(x)$$

**Med andre ord:** Integralet av $f$ fra $a$ til $x$ gir en funksjon som har $f$ som sin deriverte.

Dette betyr at integrasjon og derivasjon er inverse operasjoner!`,
    },
    {
      id: 'r2-2-5-text-1',
      type: 'text',
      content: `### Geometrisk tolkning

Tenk deg at $F(x) = \\int_a^x f(t) \\, dt$ representerer arealet under grafen til $f$ fra $a$ til $x$.

Nar vi oker $x$ litt, oker arealet med omtrent $f(x) \\cdot \\Delta x$ (et smalt rektangel).

Endringsraten til arealet er derfor:
$$F'(x) = \\lim_{\\Delta x \\to 0} \\frac{F(x + \\Delta x) - F(x)}{\\Delta x} = f(x)$$`,
    },
    {
      id: 'r2-2-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruke fundamentalsetningen del 1',
      problem: 'La $F(x) = \\int_1^x (t^2 + 1) \\, dt$. Finn $F\'(x)$.',
      solution: `Ifølge analysens fundamentalsetning del 1:
$$F'(x) = f(x)$$

der $f(t) = t^2 + 1$.

Dermed:
$$F'(x) = x^2 + 1$$

**Merk:** Vi trenger ikke å beregne integralet! Fundamentalsetningen sier at den deriverte av integralet er integranden (med $t$ erstattet av $x$).`,
    },
    {
      id: 'r2-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-2-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $G(x) = \\int_0^x \\sin t \\, dt$. Finn $G\'(x)$.',
        solution: '$G\'(x) = \\sin x$',
        hints: ['Bruk fundamentalsetningen del 1 direkte.', 'Du trenger ikke å beregne integralet.'],
      },
    },
    {
      id: 'r2-2-5-theorem-2',
      type: 'theorem',
      title: 'Analysens fundamentalsetning - del 2',
      content: `La $f$ være en kontinuerlig funksjon på $[a, b]$, og la $F$ være en antiderivert til $f$. Da er:
$$\\int_a^b f(x) \\, dx = F(b) - F(a)$$

**Dette er hovedresultatet:** For å beregne et bestemt integral, finner vi en antiderivert og evaluerer forskjellen $F(b) - F(a)$.`,
    },
    {
      id: 'r2-2-5-def-2',
      type: 'definition',
      title: 'Newton-Leibniz-notasjon',
      content: `Vi skriver:
$$\\left[F(x)\\right]_a^b = F(b) - F(a)$$

Hakeparentesen med grenser kalles **evalueringsnotasjon** eller **Newton-Leibniz-notasjon**.

**Eksempel:**
$$\\left[x^2\\right]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$$`,
    },
    {
      id: 'r2-2-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Beregne bestemt integral',
      problem: 'Beregn $\\int_1^4 2x \\, dx$.',
      solution: `**Steg 1:** Finn en antiderivert til $f(x) = 2x$.

$F(x) = x^2$ (siden $(x^2)' = 2x$)

**Steg 2:** Bruk fundamentalsetningen del 2.

$$\\int_1^4 2x \\, dx = \\left[x^2\\right]_1^4 = 4^2 - 1^2 = 16 - 1 = 15$$

**Svar:** $\\int_1^4 2x \\, dx = 15$`,
    },
    {
      id: 'r2-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-2-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn $\\int_0^3 6x^2 \\, dx$.',
        solution: '$\\left[2x^3\\right]_0^3 = 2 \\cdot 27 - 0 = 54$',
        hints: ['Finn antiderivert til $6x^2$.', 'Bruk formelen $\\int x^n dx = \\frac{x^{n+1}}{n+1}$.'],
      },
    },
    {
      id: 'r2-2-5-example-4',
      type: 'example',
      title: 'Eksempel 4: Integral med flere ledd',
      problem: 'Beregn $\\int_1^2 (3x^2 - 4x + 1) \\, dx$.',
      solution: `**Steg 1:** Finn antiderivert ledd for ledd.

For $3x^2$: antiderivert er $x^3$
For $-4x$: antiderivert er $-2x^2$
For $1$: antiderivert er $x$

$F(x) = x^3 - 2x^2 + x$

**Steg 2:** Evaluer.

$$\\int_1^2 (3x^2 - 4x + 1) \\, dx = \\left[x^3 - 2x^2 + x\\right]_1^2$$

$$= (2^3 - 2 \\cdot 2^2 + 2) - (1^3 - 2 \\cdot 1^2 + 1)$$

$$= (8 - 8 + 2) - (1 - 2 + 1)$$

$$= 2 - 0 = 2$$`,
    },
    {
      id: 'r2-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-2-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn $\\int_0^1 (4x^3 + 3x^2 - 2x) \\, dx$.',
        solution: '$\\left[x^4 + x^3 - x^2\\right]_0^1 = (1 + 1 - 1) - 0 = 1$',
        hints: ['Integrer ledd for ledd.', 'Antiderivert til $x^n$ er $\\frac{x^{n+1}}{n+1}$.'],
      },
    },
    {
      id: 'r2-2-5-note-1',
      type: 'note',
      content: `**Viktig observasjon:**

Konstanten $C$ i ubestemte integraler forsvinner nar vi beregner bestemte integraler!

$(F(b) + C) - (F(a) + C) = F(b) - F(a)$

Derfor trenger vi ikke skrive $+C$ nar vi regner bestemte integraler.`,
    },
    {
      id: 'r2-2-5-example-5',
      type: 'example',
      title: 'Eksempel 5: Areal under graf',
      problem: 'Finn arealet under grafen til $f(x) = x^2$ mellom $x = 0$ og $x = 3$.',
      solution: `Arealet er gitt ved det bestemte integralet:
$$A = \\int_0^3 x^2 \\, dx$$

**Steg 1:** Antiderivert til $x^2$ er $\\frac{x^3}{3}$.

**Steg 2:** Evaluer.
$$A = \\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{3^3}{3} - \\frac{0^3}{3} = \\frac{27}{3} - 0 = 9$$

**Svar:** Arealet er 9 arealenheter.

**Geometrisk:** Dette er arealet mellom parabelen $y = x^2$, $x$-aksen, og de vertikale linjene $x = 0$ og $x = 3$.`,
    },
    {
      id: 'r2-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-2-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet under grafen til $f(x) = \\sqrt{x} = x^{1/2}$ mellom $x = 1$ og $x = 4$.',
        solution: '$A = \\left[\\frac{2x^{3/2}}{3}\\right]_1^4 = \\frac{2 \\cdot 8}{3} - \\frac{2 \\cdot 1}{3} = \\frac{16}{3} - \\frac{2}{3} = \\frac{14}{3}$',
        hints: [
          'Skriv $\\sqrt{x}$ som $x^{1/2}$.',
          'Antiderivert til $x^{1/2}$ er $\\frac{x^{3/2}}{3/2} = \\frac{2x^{3/2}}{3}$.',
          'Husk at $4^{3/2} = (\\sqrt{4})^3 = 8$.',
        ],
      },
    },
    {
      id: 'r2-2-5-theorem-3',
      type: 'theorem',
      title: 'Sammendrag av integrasjonsregler',
      content: `Med fundamentalsetningen kan vi beregne bestemte integraler ved hjelp av disse antideriverte:

| $f(x)$ | $F(x)$ (antiderivert) |
|--------|----------------------|
| $x^n$ ($n \\neq -1$) | $\\frac{x^{n+1}}{n+1}$ |
| $\\frac{1}{x}$ | $\\ln |x|$ |
| $e^x$ | $e^x$ |
| $\\sin x$ | $-\\cos x$ |
| $\\cos x$ | $\\sin x$ |

**Regneregler:**
- $\\int_a^b k \\cdot f(x) \\, dx = k \\cdot \\int_a^b f(x) \\, dx$
- $\\int_a^b [f(x) \\pm g(x)] \\, dx = \\int_a^b f(x) \\, dx \\pm \\int_a^b g(x) \\, dx$`,
    },
    {
      id: 'r2-2-5-warning-1',
      type: 'warning',
      title: 'Vanlige feil',
      content: `**Feil 1:** Glemme a bytte fortegn ved nedre grense.
- Riktig: $[x^2]_1^3 = 3^2 - 1^2 = 8$
- Feil: $[x^2]_1^3 = 3^2 + 1^2 = 10$

**Feil 2:** Glemme potensregelen ved integrasjon.
- Riktig: $\\int x^2 dx = \\frac{x^3}{3}$
- Feil: $\\int x^2 dx = \\frac{x^2}{2}$

**Feil 3:** Sette inn grensene i feil rekkefolge.
- Riktig: $[F(x)]_a^b = F(b) - F(a)$ (ovre minus nedre)
- Feil: $[F(x)]_a^b = F(a) - F(b)$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_2_6: TextbookChapter = {
  id: 'r2-2-6',
  courseId: 'r2',
  chapterNumber: '2.6',
  title: 'Areal under grafer',
  description: 'Beregne areal ved hjelp av bestemt integral.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne areal under grafer',
    'handtere negative funksjonsverdier ved arealberegning',
    'bruke integralregning til å finne arealer mellom kurver og akser',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r2-2-6-intro',
      type: 'text',
      content: `## Areal og integrasjon

En av de viktigste anvendelsene av integralregning er arealberegning. Historisk sett var det nettopp problemet med å finne arealer under kurver som ledet til utviklingen av integralregning.

I dette kapittelet skal vi se hvordan det bestemte integralet kan brukes til å beregne arealer, og hva vi ma ta hensyn til nar funksjonen tar negative verdier.`,
    },

    // ========== AREAL NAR f(x) >= 0 ==========
    {
      id: 'r2-2-6-positiv-intro',
      type: 'text',
      content: `## Areal nar $f(x) \\geq 0$

Nar en funksjon $f(x)$ er ikke-negativ på et intervall $[a, b]$, gir det bestemte integralet direkte arealet av omradet mellom grafen og $x$-aksen.`,
    },

    // Definisjon: Areal under graf
    {
      id: 'r2-2-6-def-areal-positiv',
      type: 'definition',
      title: 'Areal under graf (positiv funksjon)',
      content: `La $f$ være en kontinuerlig funksjon med $f(x) \\geq 0$ for alle $x \\in [a, b]$.

Da er arealet $A$ av omradet mellom grafen til $f$, $x$-aksen og linjene $x = a$ og $x = b$ gitt ved:

$$A = \\int_a^b f(x) \\, dx$$`,
    },

    // Eksempel 1: Enkelt areal
    {
      id: 'r2-2-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Areal under parabel',
      problem: `Finn arealet av omradet begrenset av grafen til $f(x) = x^2$, $x$-aksen og linjene $x = 0$ og $x = 3$.`,
      solution: `**Løsning:**

Funksjonen $f(x) = x^2$ er ikke-negativ for alle $x$, sa vi kan bruke integralet direkte.

$$A = \\int_0^3 x^2 \\, dx$$

Vi finner en antiderivert: $F(x) = \\frac{x^3}{3}$

$$A = \\left[ \\frac{x^3}{3} \\right]_0^3 = \\frac{3^3}{3} - \\frac{0^3}{3} = \\frac{27}{3} - 0 = 9$$

**Svar:** Arealet er $9$ arealenheter.`,
    },

    // Oppgave 1
    {
      id: 'r2-2-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r2-2-6-ex-1',
        number: '2.6.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av omradet begrenset av grafen, $x$-aksen og de oppgitte linjene.',
        subTasks: [
          {
            label: 'a',
            task: '$f(x) = x^3$ fra $x = 0$ til $x = 2$',
            solution: '$A = \\int_0^2 x^3 \\, dx = \\left[ \\frac{x^4}{4} \\right]_0^2 = \\frac{16}{4} - 0 = 4$',
          },
          {
            label: 'b',
            task: '$f(x) = \\sqrt{x}$ fra $x = 0$ til $x = 4$',
            solution: '$A = \\int_0^4 \\sqrt{x} \\, dx = \\int_0^4 x^{1/2} \\, dx = \\left[ \\frac{2x^{3/2}}{3} \\right]_0^4 = \\frac{2 \\cdot 8}{3} - 0 = \\frac{16}{3}$',
          },
          {
            label: 'c',
            task: '$f(x) = e^x$ fra $x = 0$ til $x = 2$',
            solution: '$A = \\int_0^2 e^x \\, dx = \\left[ e^x \\right]_0^2 = e^2 - e^0 = e^2 - 1 \\approx 6{,}39$',
          },
        ],
        solution: 'a) $4$, b) $\\frac{16}{3}$, c) $e^2 - 1$',
        hints: [
          'Sjekk at funksjonen er ikke-negativ på intervallet.',
          'Finn antiderivert og bruk innsettingsformelen.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NAR INTEGRALET BLIR NEGATIVT ==========
    {
      id: 'r2-2-6-negativ-intro',
      type: 'text',
      content: `## Nar integralet blir negativt

Hva skjer nar funksjonen er negativ på hele eller deler av intervallet? Da gir det bestemte integralet en **negativ verdi** for de omradene der grafen ligger under $x$-aksen.

Dette er fordi integralet maler "fortegnsareal" - positivt over aksen og negativt under.`,
    },

    // Eksempel 2: Negativt integral
    {
      id: 'r2-2-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Integral under x-aksen',
      problem: `Regn ut $\\int_0^2 (x - 3) \\, dx$ og forklar resultatet geometrisk.`,
      solution: `**Løsning:**

$$\\int_0^2 (x - 3) \\, dx = \\left[ \\frac{x^2}{2} - 3x \\right]_0^2 = \\left( \\frac{4}{2} - 6 \\right) - (0 - 0) = 2 - 6 = -4$$

Integralet er negativt!

**Geometrisk forklaring:**
Funksjonen $f(x) = x - 3$ er negativ for $x < 3$. Pa intervallet $[0, 2]$ ligger hele grafen under $x$-aksen.

Integralet $-4$ representerer "fortegnsarealet". Det faktiske arealet mellom grafen og $x$-aksen er $|{-4}| = 4$ arealenheter.`,
    },

    // Definisjon: Fortegnsareal
    {
      id: 'r2-2-6-def-fortegnsareal',
      type: 'definition',
      title: 'Fortegnsareal',
      content: `Det bestemte integralet $\\int_a^b f(x) \\, dx$ gir **fortegnsarealet** mellom grafen til $f$ og $x$-aksen:

- Omrader der $f(x) > 0$ bidrar med **positivt** areal
- Omrader der $f(x) < 0$ bidrar med **negativt** areal

Integralet kan derfor være null selv om det faktiske arealet er stort, dersom positive og negative bidrag kansellerer hverandre.`,
    },

    // Oppgave 2
    {
      id: 'r2-2-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r2-2-6-ex-2',
        number: '2.6.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut integralene og forklar fortegnet på svaret.',
        subTasks: [
          {
            label: 'a',
            task: '$\\int_0^4 (x - 4) \\, dx$',
            solution: '$\\int_0^4 (x - 4) \\, dx = \\left[ \\frac{x^2}{2} - 4x \\right]_0^4 = (8 - 16) - 0 = -8$. Negativt fordi $f(x) = x - 4 < 0$ for $x < 4$.',
          },
          {
            label: 'b',
            task: '$\\int_{-2}^0 x^3 \\, dx$',
            solution: '$\\int_{-2}^0 x^3 \\, dx = \\left[ \\frac{x^4}{4} \\right]_{-2}^0 = 0 - \\frac{16}{4} = -4$. Negativt fordi $x^3 < 0$ for $x < 0$.',
          },
          {
            label: 'c',
            task: '$\\int_{-1}^1 x \\, dx$',
            solution: '$\\int_{-1}^1 x \\, dx = \\left[ \\frac{x^2}{2} \\right]_{-1}^1 = \\frac{1}{2} - \\frac{1}{2} = 0$. Null fordi de positive og negative bidragene kansellerer.',
          },
        ],
        solution: 'a) $-8$, b) $-4$, c) $0$',
        hints: [
          'Tenk på hvor funksjonen er positiv og hvor den er negativ.',
          'Integralet av en odde funksjon over et symmetrisk intervall er null.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ABSOLUTT AREAL ==========
    {
      id: 'r2-2-6-absolutt-intro',
      type: 'text',
      content: `## Absolutt areal

Nar vi skal finne det **faktiske arealet** (i arealenheter) mellom en graf og $x$-aksen, ma vi ta hensyn til at arealet alltid er positivt.

Vi bruker da absoluttverdien av funksjonen for a sikre at alle bidrag teller positivt.`,
    },

    // Definisjon: Absolutt areal
    {
      id: 'r2-2-6-def-absolutt-areal',
      type: 'definition',
      title: 'Absolutt areal',
      content: `Det **absolutte arealet** mellom grafen til $f$ og $x$-aksen på intervallet $[a, b]$ er:

$$A = \\int_a^b |f(x)| \\, dx$$

I praksis beregner vi dette ved a:
1. Finne nullpunktene til $f$ på $[a, b]$
2. Dele opp i delintervaller der $f$ har konstant fortegn
3. Ta absoluttverdien av hvert delintegral
4. Summere alle bidragene`,
    },

    // Eksempel 3: Absolutt areal
    {
      id: 'r2-2-6-example-3',
      type: 'example',
      title: 'Eksempel 3: Absolutt areal',
      problem: `Finn det absolutte arealet mellom grafen til $f(x) = x^2 - 4$ og $x$-aksen på intervallet $[-3, 3]$.`,
      solution: `**Løsning:**

**Steg 1: Finn nullpunktene**
$x^2 - 4 = 0$
$x^2 = 4$
$x = \\pm 2$

**Steg 2: Bestem fortegn på hvert delintervall**
- For $x \\in [-3, -2]$: $f(x) > 0$ (over $x$-aksen)
- For $x \\in [-2, 2]$: $f(x) < 0$ (under $x$-aksen)
- For $x \\in [2, 3]$: $f(x) > 0$ (over $x$-aksen)

**Steg 3: Beregn hvert delintegral**

$I_1 = \\int_{-3}^{-2} (x^2 - 4) \\, dx = \\left[ \\frac{x^3}{3} - 4x \\right]_{-3}^{-2}$
$= \\left( -\\frac{8}{3} + 8 \\right) - \\left( -9 + 12 \\right) = \\frac{16}{3} - 3 = \\frac{7}{3}$

$I_2 = \\int_{-2}^{2} (x^2 - 4) \\, dx = \\left[ \\frac{x^3}{3} - 4x \\right]_{-2}^{2}$
$= \\left( \\frac{8}{3} - 8 \\right) - \\left( -\\frac{8}{3} + 8 \\right) = -\\frac{16}{3} - \\frac{16}{3} = -\\frac{32}{3}$

$I_3 = \\int_{2}^{3} (x^2 - 4) \\, dx = \\left[ \\frac{x^3}{3} - 4x \\right]_{2}^{3}$
$= \\left( 9 - 12 \\right) - \\left( \\frac{8}{3} - 8 \\right) = -3 + \\frac{16}{3} = \\frac{7}{3}$

**Steg 4: Summer absoluttverdiene**
$A = |I_1| + |I_2| + |I_3| = \\frac{7}{3} + \\frac{32}{3} + \\frac{7}{3} = \\frac{46}{3}$

**Svar:** Det absolutte arealet er $\\frac{46}{3} \\approx 15{,}3$ arealenheter.`,
    },

    // Oppgave 3
    {
      id: 'r2-2-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r2-2-6-ex-3',
        number: '2.6.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn det absolutte arealet mellom grafen og $x$-aksen på det oppgitte intervallet.',
        subTasks: [
          {
            label: 'a',
            task: '$f(x) = x^2 - 1$ på $[-2, 2]$',
            solution: `Nullpunkter: $x = \\pm 1$.
$I_1 = \\int_{-2}^{-1} (x^2 - 1) \\, dx = \\frac{4}{3}$
$I_2 = \\int_{-1}^{1} (x^2 - 1) \\, dx = -\\frac{4}{3}$
$I_3 = \\int_{1}^{2} (x^2 - 1) \\, dx = \\frac{4}{3}$
$A = \\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4$`,
          },
          {
            label: 'b',
            task: '$f(x) = \\sin x$ på $[0, 2\\pi]$',
            solution: `Nullpunkter: $x = 0, \\pi, 2\\pi$.
$I_1 = \\int_{0}^{\\pi} \\sin x \\, dx = [-\\cos x]_0^{\\pi} = 2$
$I_2 = \\int_{\\pi}^{2\\pi} \\sin x \\, dx = [-\\cos x]_{\\pi}^{2\\pi} = -2$
$A = |2| + |-2| = 4$`,
          },
        ],
        solution: 'a) $4$, b) $4$',
        hints: [
          'Finn forst nullpunktene til funksjonen.',
          'Del opp integralet ved nullpunktene.',
          'Husk a ta absoluttverdien av hvert delintegral.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SYSTEMATISK METODE ==========
    {
      id: 'r2-2-6-metode-intro',
      type: 'text',
      content: `## Systematisk fremgangsmate

Nar du skal beregne areal mellom en graf og $x$-aksen, er det viktig a folge en systematisk metode. Her er en oppskrift som fungerer i alle tilfeller.`,
    },

    // Teorem: Fremgangsmate
    {
      id: 'r2-2-6-theorem-metode',
      type: 'theorem',
      title: 'Fremgangsmate for arealberegning',
      content: `For å finne arealet mellom grafen til $f(x)$ og $x$-aksen på $[a, b]$:

**1. Finn nullpunktene**
Los $f(x) = 0$ for $x \\in [a, b]$. Kall nullpunktene $x_1, x_2, \\ldots, x_n$ (i stigende rekkefolge).

**2. Del opp intervallet**
Intervallet deles opp i: $[a, x_1], [x_1, x_2], \\ldots, [x_n, b]$

**3. Beregn hvert delintegral**
For hvert delintervall $[x_i, x_{i+1}]$, beregn $\\int_{x_i}^{x_{i+1}} f(x) \\, dx$

**4. Summer absoluttverdiene**
$$A = \\sum |\\text{delintegral}|$$`,
    },

    // Eksempel 4: Tredjegradspolynom
    {
      id: 'r2-2-6-example-4',
      type: 'example',
      title: 'Eksempel 4: Areal for tredjegradsfunksjon',
      problem: `Finn arealet mellom grafen til $f(x) = x^3 - 4x$ og $x$-aksen.`,
      solution: `**Løsning:**

**Steg 1: Finn nullpunktene**
$x^3 - 4x = 0$
$x(x^2 - 4) = 0$
$x(x-2)(x+2) = 0$
$x = -2, 0, 2$

**Steg 2: Bestem fortegn**
Vi tester et punkt i hvert intervall:
- $f(-3) = -27 + 12 = -15 < 0$ (under aksen)
- $f(-1) = -1 + 4 = 3 > 0$ (over aksen)
- $f(1) = 1 - 4 = -3 < 0$ (under aksen)
- $f(3) = 27 - 12 = 15 > 0$ (over aksen)

Vi beregner arealet på $[-2, 2]$:

**Steg 3: Beregn delintegralene**

$I_1 = \\int_{-2}^{0} (x^3 - 4x) \\, dx = \\left[ \\frac{x^4}{4} - 2x^2 \\right]_{-2}^{0}$
$= 0 - (4 - 8) = 0 - (-4) = 4$

$I_2 = \\int_{0}^{2} (x^3 - 4x) \\, dx = \\left[ \\frac{x^4}{4} - 2x^2 \\right]_{0}^{2}$
$= (4 - 8) - 0 = -4$

**Steg 4: Summer absoluttverdiene**
$A = |4| + |-4| = 4 + 4 = 8$

**Svar:** Arealet er $8$ arealenheter.

**Merk:** Grafen er symmetrisk om origo (odde funksjon), sa de to omradene har like stort areal.`,
    },

    // Oppgave 4
    {
      id: 'r2-2-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r2-2-6-ex-4',
        number: '2.6.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn arealet mellom grafen og $x$-aksen.',
        subTasks: [
          {
            label: 'a',
            task: '$f(x) = x^3 - x$ på $[-1, 1]$',
            solution: `Nullpunkter: $x(x^2-1) = 0 \\Rightarrow x = -1, 0, 1$.
$I_1 = \\int_{-1}^{0} (x^3 - x) \\, dx = \\left[ \\frac{x^4}{4} - \\frac{x^2}{2} \\right]_{-1}^{0} = 0 - (\\frac{1}{4} - \\frac{1}{2}) = \\frac{1}{4}$
$I_2 = \\int_{0}^{1} (x^3 - x) \\, dx = (\\frac{1}{4} - \\frac{1}{2}) - 0 = -\\frac{1}{4}$
$A = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$`,
          },
          {
            label: 'b',
            task: '$f(x) = x^2 - 3x + 2$ på $[0, 3]$',
            solution: `Nullpunkter: $(x-1)(x-2) = 0 \\Rightarrow x = 1, 2$.
$I_1 = \\int_{0}^{1} (x^2 - 3x + 2) \\, dx = [\\frac{x^3}{3} - \\frac{3x^2}{2} + 2x]_0^1 = \\frac{1}{3} - \\frac{3}{2} + 2 = \\frac{5}{6}$
$I_2 = \\int_{1}^{2} (x^2 - 3x + 2) \\, dx = -\\frac{1}{6}$
$I_3 = \\int_{2}^{3} (x^2 - 3x + 2) \\, dx = \\frac{5}{6}$
$A = \\frac{5}{6} + \\frac{1}{6} + \\frac{5}{6} = \\frac{11}{6}$`,
          },
        ],
        solution: 'a) $\\frac{1}{2}$, b) $\\frac{11}{6}$',
        hints: [
          'Faktoriser for å finne nullpunktene.',
          'Vurderer fortegnet til funksjonen mellom nullpunktene.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRAKTISKE ANVENDELSER ==========
    {
      id: 'r2-2-6-anvendelser-intro',
      type: 'text',
      content: `## Praktiske anvendelser

Arealberegning med integraler har mange praktiske anvendelser:

- **Fysikk:** Arbeid utfort av en variabel kraft, strekning fra hastighetsfunksjon
- **Okonomi:** Totalt overskudd, konsumentoverskudd
- **Biologi:** Populasjonsvekst over tid
- **Teknikk:** Beregning av materialmengder

La oss se på noen eksempler.`,
    },

    // Eksempel 5: Praktisk anvendelse
    {
      id: 'r2-2-6-example-5',
      type: 'example',
      title: 'Eksempel 5: Hastighet og strekning',
      problem: `En bil har hastighet gitt ved $v(t) = 20 - 4t$ (m/s) der $t$ er tiden i sekunder.

a) Finn den totale tilbakelagte strekningen for $t \\in [0, 10]$.
b) Finn bilens posisjon etter 10 sekunder dersom den starter i $x = 0$.`,
      solution: `**Løsning:**

Forst finner vi nar bilen stopper og snur:
$v(t) = 0 \\Rightarrow 20 - 4t = 0 \\Rightarrow t = 5$ s

**a) Total tilbakelagt strekning**

Strekning er alltid positiv, sa vi ma ta absoluttverdien:

For $t \\in [0, 5]$: $v(t) > 0$ (bilen kjorer fremover)
For $t \\in [5, 10]$: $v(t) < 0$ (bilen rygger)

$s_1 = \\int_0^5 (20 - 4t) \\, dt = [20t - 2t^2]_0^5 = 100 - 50 = 50$ m

$s_2 = \\int_5^{10} (20 - 4t) \\, dt = [20t - 2t^2]_5^{10} = (200 - 200) - (100 - 50) = -50$ m

Total strekning $= |50| + |-50| = 100$ m

**b) Posisjon etter 10 sekunder**

Posisjon = startposisjon + netto forflytning:

$x(10) = 0 + \\int_0^{10} (20 - 4t) \\, dt = 50 + (-50) = 0$ m

Bilen er tilbake ved startposisjonen!

**Svar:** a) 100 m, b) 0 m (tilbake ved start)`,
    },

    // Oppgave 5
    {
      id: 'r2-2-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r2-2-6-ex-5',
        number: '2.6.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Los oppgavene.',
        subTasks: [
          {
            label: 'a',
            task: 'En partikkel beveger seg langs en linje med hastighet $v(t) = t^2 - 4t + 3$ (m/s). Finn den totale tilbakelagte strekningen for $t \\in [0, 4]$.',
            solution: `Nullpunkter: $t^2 - 4t + 3 = (t-1)(t-3) = 0 \\Rightarrow t = 1, 3$.
$I_1 = \\int_0^1 (t^2 - 4t + 3) \\, dt = [\\frac{t^3}{3} - 2t^2 + 3t]_0^1 = \\frac{1}{3} - 2 + 3 = \\frac{4}{3}$
$I_2 = \\int_1^3 (t^2 - 4t + 3) \\, dt = -\\frac{4}{3}$
$I_3 = \\int_3^4 (t^2 - 4t + 3) \\, dt = \\frac{4}{3}$
Strekning $= \\frac{4}{3} + \\frac{4}{3} + \\frac{4}{3} = 4$ m`,
          },
          {
            label: 'b',
            task: 'Vannstanden i en elv endrer seg med $h\'(t) = \\cos(\\frac{\\pi t}{6})$ (cm/time) der $t$ er timer etter midnatt. Finn den totale endringen i vannstand fra $t = 0$ til $t = 12$.',
            solution: `$\\int_0^{12} \\cos(\\frac{\\pi t}{6}) \\, dt = [\\frac{6}{\\pi} \\sin(\\frac{\\pi t}{6})]_0^{12} = \\frac{6}{\\pi}(\\sin(2\\pi) - \\sin(0)) = 0$ cm.
Netto endring er 0, men total bevegelse: nullpunkter ved $t = 3, 9$.
$I_1 = \\int_0^3 \\cos(\\frac{\\pi t}{6}) \\, dt = \\frac{6}{\\pi}$
$I_2 = \\int_3^9 \\cos(\\frac{\\pi t}{6}) \\, dt = -\\frac{12}{\\pi}$
$I_3 = \\int_9^{12} \\cos(\\frac{\\pi t}{6}) \\, dt = \\frac{6}{\\pi}$
Total $= \\frac{6}{\\pi} + \\frac{12}{\\pi} + \\frac{6}{\\pi} = \\frac{24}{\\pi} \\approx 7{,}64$ cm`,
          },
        ],
        solution: 'a) 4 m, b) $\\frac{24}{\\pi} \\approx 7{,}64$ cm',
        hints: [
          'Finn forst nullpunktene til hastighetsfunksjonen.',
          'Strekning krever absoluttverdier, posisjon/forflytning gjor det ikke.',
          'Husk substitusjon for trigonometriske integraler.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'r2-2-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi laert:

1. **Areal under positiv graf:** $A = \\int_a^b f(x) \\, dx$ nar $f(x) \\geq 0$

2. **Fortegnsareal:** Integralet gir positivt bidrag over $x$-aksen og negativt under

3. **Absolutt areal:** $A = \\int_a^b |f(x)| \\, dx$
   - Finn nullpunktene
   - Del opp ved nullpunktene
   - Summer absoluttverdiene av delintegralene

4. **Praktiske anvendelser:** Strekning vs. forflytning, totale mengder`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_2_7: TextbookChapter = {
  id: 'r2-2-7',
  courseId: 'r2',
  chapterNumber: '2.7',
  title: 'Areal mellom kurver',
  description: 'Beregne areal mellom to grafer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne areal mellom to kurver',
    'finne skjaeringspunkter og sette opp integraler',
  ],
  content: [
    {
      id: 'r2-2-7-intro',
      type: 'text',
      content: `## Areal mellom kurver

I tidligere kapitler har vi lart å beregne arealet mellom en graf og $x$-aksen ved hjelp av bestemte integraler. Na skal vi utvide dette til å beregne arealet mellom **to kurver**.

Dette er nyttig i mange praktiske sammenhenger:
- Finne arealet av et omrade begrenset av to funksjoner
- Beregne differansen mellom to storrelser over tid
- Analysere omrader i okonomi, fysikk og biologi

For å beregne areal mellom kurver ma vi:
1. Finne skjaeringspunktene (integrasjonsgrensene)
2. Avgjore hvilken funksjon som ligger overst
3. Sette opp og lose integralet`,
    },
    {
      id: 'r2-2-7-def-1',
      type: 'definition',
      title: 'Areal mellom to kurver',
      content: `Nar $f(x) \\geq g(x)$ for alle $x$ i intervallet $[a, b]$, er arealet mellom grafene til $f$ og $g$ gitt ved:

$$A = \\int_a^b \\left( f(x) - g(x) \\right) \\, dx$$

Her er $f(x)$ den **ovre** funksjonen og $g(x)$ den **nedre** funksjonen.

**Viktig:** Vi trekker alltid den nedre funksjonen fra den ovre, slik at integranden blir positiv.`,
    },
    {
      id: 'r2-2-7-example-1',
      type: 'example',
      title: 'Eksempel 1: Areal mellom parabel og linje',
      problem: `Finn arealet av omradet begrenset av $f(x) = 4 - x^2$ og $g(x) = 0$ (x-aksen) for $x \\in [-2, 2]$.`,
      solution: `**Steg 1: Identifiser ovre og nedre funksjon**

For $x \\in [-2, 2]$ er $f(x) = 4 - x^2 \\geq 0$, sa $f(x)$ er den ovre funksjonen og $g(x) = 0$ er den nedre.

**Steg 2: Sett opp integralet**

$$A = \\int_{-2}^{2} \\left( (4 - x^2) - 0 \\right) \\, dx = \\int_{-2}^{2} (4 - x^2) \\, dx$$

**Steg 3: Beregn integralet**

$$A = \\left[ 4x - \\frac{x^3}{3} \\right]_{-2}^{2}$$

$$= \\left( 4 \\cdot 2 - \\frac{2^3}{3} \\right) - \\left( 4 \\cdot (-2) - \\frac{(-2)^3}{3} \\right)$$

$$= \\left( 8 - \\frac{8}{3} \\right) - \\left( -8 + \\frac{8}{3} \\right)$$

$$= 8 - \\frac{8}{3} + 8 - \\frac{8}{3} = 16 - \\frac{16}{3} = \\frac{48 - 16}{3} = \\frac{32}{3}$$

**Svar:** Arealet er $\\frac{32}{3}$ areal enheter.`,
    },
    {
      id: 'r2-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-2-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Finn arealet av omradet begrenset av $f(x) = x^2$ og $g(x) = 0$ (x-aksen) for $x \\in [0, 3]$.`,
        solution: `$A = \\int_0^3 x^2 \\, dx = \\left[ \\frac{x^3}{3} \\right]_0^3 = \\frac{27}{3} - 0 = 9$`,
        hints: [
          'Her er $f(x) = x^2$ den ovre funksjonen og $g(x) = 0$ den nedre.',
          'Integrer $x^2$ fra 0 til 3.',
        ],
      },
    },
    {
      id: 'r2-2-7-def-2',
      type: 'definition',
      title: 'Finne skjaeringspunkter',
      content: `For å finne **skjaeringspunktene** mellom to kurver $f(x)$ og $g(x)$, loser vi ligningen:

$$f(x) = g(x)$$

Løsningene gir $x$-koordinatene til skjaeringspunktene. Disse brukes som **integrasjonsgrenser** nar vi beregner arealet mellom kurvene.`,
    },
    {
      id: 'r2-2-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Finn skjaeringspunkter og beregn areal',
      problem: `Finn arealet av omradet begrenset av $f(x) = x + 2$ og $g(x) = x^2$.`,
      solution: `**Steg 1: Finn skjaeringspunktene**

Setter $f(x) = g(x)$:
$$x + 2 = x^2$$
$$x^2 - x - 2 = 0$$
$$(x - 2)(x + 1) = 0$$
$$x = 2 \\quad \\text{eller} \\quad x = -1$$

**Steg 2: Avgjor hvilken funksjon som er overst**

For $x = 0$ (et punkt mellom $-1$ og $2$):
- $f(0) = 0 + 2 = 2$
- $g(0) = 0^2 = 0$

Siden $f(0) > g(0)$, er $f(x) = x + 2$ den ovre funksjonen i intervallet $[-1, 2]$.

**Steg 3: Sett opp og beregn integralet**

$$A = \\int_{-1}^{2} \\left( (x + 2) - x^2 \\right) \\, dx = \\int_{-1}^{2} (x + 2 - x^2) \\, dx$$

$$= \\left[ \\frac{x^2}{2} + 2x - \\frac{x^3}{3} \\right]_{-1}^{2}$$

For $x = 2$:
$$\\frac{4}{2} + 4 - \\frac{8}{3} = 2 + 4 - \\frac{8}{3} = 6 - \\frac{8}{3} = \\frac{18 - 8}{3} = \\frac{10}{3}$$

For $x = -1$:
$$\\frac{1}{2} - 2 + \\frac{1}{3} = \\frac{3 + 2}{6} - 2 = \\frac{5}{6} - 2 = -\\frac{7}{6}$$

$$A = \\frac{10}{3} - \\left( -\\frac{7}{6} \\right) = \\frac{10}{3} + \\frac{7}{6} = \\frac{20}{6} + \\frac{7}{6} = \\frac{27}{6} = \\frac{9}{2}$$

**Svar:** Arealet er $\\frac{9}{2}$ arealenheter.`,
    },
    {
      id: 'r2-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-2-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: `Finn arealet av omradet begrenset av $f(x) = 6 - x$ og $g(x) = x^2$.`,
        solution: `Skjaeringspunkter: $6 - x = x^2 \\Rightarrow x^2 + x - 6 = 0 \\Rightarrow (x+3)(x-2) = 0 \\Rightarrow x = -3$ eller $x = 2$.

$f(x)$ er overst i $[-3, 2]$.

$A = \\int_{-3}^{2} (6 - x - x^2) \\, dx = \\left[ 6x - \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_{-3}^{2} = \\frac{125}{6}$`,
        hints: [
          'Los $6 - x = x^2$ for å finne skjaeringspunktene.',
          'Sjekk hvilken funksjon som er størst for en $x$-verdi mellom skjaeringspunktene.',
        ],
      },
    },
    {
      id: 'r2-2-7-theorem-1',
      type: 'theorem',
      title: 'Nar kurvene krysser hverandre',
      content: `Dersom kurvene $f(x)$ og $g(x)$ **krysser hverandre** i intervallet $[a, b]$, ma vi dele opp integralet.

La $c$ være et skjaeringspunkt der $a < c < b$.

- Hvis $f(x) \\geq g(x)$ på $[a, c]$ og $g(x) \\geq f(x)$ på $[c, b]$:

$$A = \\int_a^c (f(x) - g(x)) \\, dx + \\int_c^b (g(x) - f(x)) \\, dx$$

**Alternativt** kan vi bruke absoluttverdi:

$$A = \\int_a^b |f(x) - g(x)| \\, dx$$`,
    },
    {
      id: 'r2-2-7-example-3',
      type: 'example',
      title: 'Eksempel 3: Kurver som krysser hverandre',
      problem: `Finn arealet mellom $f(x) = x^3$ og $g(x) = x$ for $x \\in [-1, 1]$.`,
      solution: `**Steg 1: Finn skjaeringspunktene**

$$x^3 = x$$
$$x^3 - x = 0$$
$$x(x^2 - 1) = 0$$
$$x(x-1)(x+1) = 0$$
$$x = -1, \\quad x = 0, \\quad x = 1$$

**Steg 2: Avgjor hvilken funksjon som er overst i hvert delintervall**

For $x = -0.5$ (mellom $-1$ og $0$):
- $f(-0.5) = (-0.5)^3 = -0.125$
- $g(-0.5) = -0.5$

Siden $-0.125 > -0.5$, er $f(x) = x^3$ overst på $[-1, 0]$.

For $x = 0.5$ (mellom $0$ og $1$):
- $f(0.5) = 0.125$
- $g(0.5) = 0.5$

Siden $0.5 > 0.125$, er $g(x) = x$ overst på $[0, 1]$.

**Steg 3: Del opp integralet**

$$A = \\int_{-1}^{0} (x^3 - x) \\, dx + \\int_{0}^{1} (x - x^3) \\, dx$$

**Forste integral:**
$$\\int_{-1}^{0} (x^3 - x) \\, dx = \\left[ \\frac{x^4}{4} - \\frac{x^2}{2} \\right]_{-1}^{0} = 0 - \\left( \\frac{1}{4} - \\frac{1}{2} \\right) = 0 - \\left( -\\frac{1}{4} \\right) = \\frac{1}{4}$$

**Andre integral:**
$$\\int_{0}^{1} (x - x^3) \\, dx = \\left[ \\frac{x^2}{2} - \\frac{x^4}{4} \\right]_{0}^{1} = \\left( \\frac{1}{2} - \\frac{1}{4} \\right) - 0 = \\frac{1}{4}$$

**Totalt areal:**
$$A = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}$$

**Svar:** Arealet er $\\frac{1}{2}$ arealenheter.`,
    },
    {
      id: 'r2-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-2-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Finn arealet mellom $f(x) = x^2$ og $g(x) = 2x$ for $x \\in [0, 3]$.`,
        solution: `Skjaeringspunkter i $[0, 3]$: $x^2 = 2x \\Rightarrow x(x-2) = 0 \\Rightarrow x = 0$ eller $x = 2$.

Pa $[0, 2]$ er $g(x) = 2x$ overst. Pa $[2, 3]$ er $f(x) = x^2$ overst.

$A = \\int_0^2 (2x - x^2) \\, dx + \\int_2^3 (x^2 - 2x) \\, dx$

$= \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 + \\left[ \\frac{x^3}{3} - x^2 \\right]_2^3$

$= \\left( 4 - \\frac{8}{3} \\right) + \\left( 9 - 9 - \\frac{8}{3} + 4 \\right) = \\frac{4}{3} + \\frac{4}{3} = \\frac{8}{3}$`,
        hints: [
          'Finn forst hvor $x^2 = 2x$ i intervallet $[0, 3]$.',
          'Kurvene krysser hverandre, sa du ma dele opp integralet.',
        ],
      },
    },
    {
      id: 'r2-2-7-tip-1',
      type: 'tip',
      content: `**Praktisk tips for a avgjore hvilken funksjon som er overst:**

1. Velg en $x$-verdi mellom skjaeringspunktene
2. Beregn $f(x)$ og $g(x)$ for denne verdien
3. Den funksjonen med størst verdi er den ovre

Alternativt kan du tegne en skisse av grafene.`,
    },
    {
      id: 'r2-2-7-example-4',
      type: 'example',
      title: 'Eksempel 4: Areal mellom to parabler',
      problem: `Finn arealet av omradet begrenset av $f(x) = 4 - x^2$ og $g(x) = x^2 - 2$.`,
      solution: `**Steg 1: Finn skjaeringspunktene**

$$4 - x^2 = x^2 - 2$$
$$6 = 2x^2$$
$$x^2 = 3$$
$$x = \\pm\\sqrt{3}$$

**Steg 2: Avgjor hvilken funksjon som er overst**

For $x = 0$:
- $f(0) = 4$
- $g(0) = -2$

Siden $4 > -2$, er $f(x) = 4 - x^2$ den ovre funksjonen.

**Steg 3: Beregn integralet**

$$A = \\int_{-\\sqrt{3}}^{\\sqrt{3}} \\left( (4 - x^2) - (x^2 - 2) \\right) \\, dx$$

$$= \\int_{-\\sqrt{3}}^{\\sqrt{3}} (6 - 2x^2) \\, dx$$

Siden integranden er en **partall-funksjon** (symmetrisk om $y$-aksen), kan vi forenkle:

$$A = 2 \\int_{0}^{\\sqrt{3}} (6 - 2x^2) \\, dx$$

$$= 2 \\left[ 6x - \\frac{2x^3}{3} \\right]_{0}^{\\sqrt{3}}$$

$$= 2 \\left( 6\\sqrt{3} - \\frac{2(\\sqrt{3})^3}{3} \\right)$$

$$= 2 \\left( 6\\sqrt{3} - \\frac{2 \\cdot 3\\sqrt{3}}{3} \\right)$$

$$= 2 \\left( 6\\sqrt{3} - 2\\sqrt{3} \\right)$$

$$= 2 \\cdot 4\\sqrt{3} = 8\\sqrt{3}$$

**Svar:** Arealet er $8\\sqrt{3}$ arealenheter.`,
    },
    {
      id: 'r2-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-2-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Finn arealet av omradet begrenset av $f(x) = 9 - x^2$ og $g(x) = x^2 + 1$.`,
        solution: `Skjaeringspunkter: $9 - x^2 = x^2 + 1 \\Rightarrow 8 = 2x^2 \\Rightarrow x = \\pm 2$.

$f(x)$ er overst.

$A = \\int_{-2}^{2} ((9-x^2) - (x^2+1)) \\, dx = \\int_{-2}^{2} (8 - 2x^2) \\, dx$

$= 2 \\int_0^2 (8 - 2x^2) \\, dx = 2 \\left[ 8x - \\frac{2x^3}{3} \\right]_0^2$

$= 2 \\left( 16 - \\frac{16}{3} \\right) = 2 \\cdot \\frac{32}{3} = \\frac{64}{3}$`,
        hints: [
          'Sett $9 - x^2 = x^2 + 1$ og los for $x$.',
          'Integranden er symmetrisk, sa du kan bruke egenskapen for partallsfunksjoner.',
        ],
      },
    },
    {
      id: 'r2-2-7-note-1',
      type: 'note',
      content: `**Symmetri kan forenkle beregninger!**

Hvis integranden $f(x) - g(x)$ er en **partallsfunksjon** (symmetrisk om $y$-aksen), og integrasjonsgrensene er $[-a, a]$, kan vi bruke:

$$\\int_{-a}^{a} h(x) \\, dx = 2 \\int_{0}^{a} h(x) \\, dx$$

Dette halverer arbeidet med beregningene.`,
    },
    {
      id: 'r2-2-7-example-5',
      type: 'example',
      title: 'Eksempel 5: Praktisk anvendelse',
      problem: `En bedrift har inntektsfunksjon $I(x) = 100x - x^2$ og kostnadsfunksjon $K(x) = 20x + 100$ (i tusen kroner), der $x$ er antall enheter produsert (i hundre).

Finn den totale fortjenesten nar produksjonen gar fra 10 til 60 enheter (hundre).`,
      solution: `**Steg 1: Finn skjaeringspunktene (nullpunkt for fortjeneste)**

Fortjenesten er positiv nar $I(x) > K(x)$:
$$100x - x^2 > 20x + 100$$
$$-x^2 + 80x - 100 > 0$$
$$x^2 - 80x + 100 < 0$$

Ved abc-formelen: $x = \\frac{80 \\pm \\sqrt{6400 - 400}}{2} = \\frac{80 \\pm \\sqrt{6000}}{2} \\approx \\frac{80 \\pm 77.5}{2}$

$x \\approx 1.3$ eller $x \\approx 78.7$

Sa for $x \\in [10, 60]$ er $I(x) > K(x)$ (inntekt storre enn kostnad).

**Steg 2: Beregn total fortjeneste som areal mellom kurvene**

$$\\text{Total fortjeneste} = \\int_{10}^{60} (I(x) - K(x)) \\, dx$$

$$= \\int_{10}^{60} ((100x - x^2) - (20x + 100)) \\, dx$$

$$= \\int_{10}^{60} (80x - x^2 - 100) \\, dx$$

$$= \\left[ 40x^2 - \\frac{x^3}{3} - 100x \\right]_{10}^{60}$$

For $x = 60$:
$$40 \\cdot 3600 - \\frac{216000}{3} - 6000 = 144000 - 72000 - 6000 = 66000$$

For $x = 10$:
$$40 \\cdot 100 - \\frac{1000}{3} - 1000 = 4000 - \\frac{1000}{3} - 1000 = 3000 - \\frac{1000}{3} = \\frac{8000}{3}$$

$$\\text{Total fortjeneste} = 66000 - \\frac{8000}{3} = \\frac{198000 - 8000}{3} = \\frac{190000}{3} \\approx 63333$$

**Svar:** Den totale fortjenesten er ca. 63 333 tusen kroner, eller ca. 63,3 millioner kroner.`,
    },
    {
      id: 'r2-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-2-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En partikkel beveger seg langs en rett linje. Hastighetene til to partikler er gitt ved $v_1(t) = 6t$ og $v_2(t) = t^2 + 2$ (i m/s).

Finn den totale forskjellen i tilbakelagt strekning mellom partiklene fra $t = 0$ til $t = 4$ sekunder.`,
        solution: `Skjaeringspunkt: $6t = t^2 + 2 \\Rightarrow t^2 - 6t + 2 = 0 \\Rightarrow t = 3 \\pm \\sqrt{7}$.

$t = 3 - \\sqrt{7} \\approx 0.35$ og $t = 3 + \\sqrt{7} \\approx 5.65$.

Pa $[0, 3-\\sqrt{7}]$ er $v_2 > v_1$. Pa $[3-\\sqrt{7}, 4]$ er $v_1 > v_2$.

$A = \\int_0^{3-\\sqrt{7}} (t^2+2-6t) \\, dt + \\int_{3-\\sqrt{7}}^4 (6t-t^2-2) \\, dt$

Etter beregning: $A \\approx 18.67$ meter.`,
        hints: [
          'Forskjell i tilbakelagt strekning er arealet mellom hastighetskurvene.',
          'Finn forst hvor kurvene krysser hverandre i intervallet $[0, 4]$.',
        ],
      },
    },
    {
      id: 'r2-2-7-summary',
      type: 'text',
      content: `## Oppsummering

**Areal mellom to kurver:**
$$A = \\int_a^b |f(x) - g(x)| \\, dx$$

**Fremgangsmate:**
1. **Finn skjaeringspunktene** ved å løse $f(x) = g(x)$
2. **Avgjor hvilken funksjon som er overst** i hvert delintervall
3. **Sett opp integralet** med ovre funksjon minus nedre funksjon
4. **Del opp integralet** hvis kurvene krysser hverandre
5. **Beregn integralet**

**Husk:**
- Alltid trekk nedre funksjon fra ovre for a fa positiv integrand
- Nar kurvene krysser, ma integralet deles opp
- Symmetri kan forenkle beregninger betydelig`,
    },
  ],
  exercises: [],
};

