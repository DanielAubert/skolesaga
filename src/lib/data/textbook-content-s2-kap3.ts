/**
 * Tekstbok kapitler for s2 - Kapittel 3 (Funksjonsdrøfting)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_S2_3_1: TextbookChapter = {
  id: 's2-3-1',
  courseId: 's2',
  chapterNumber: '3.1',
  title: 'Fullstendig funksjonsdrøfting',
  description: 'Lær systematisk drøfting av funksjoner: definisjonsmengde, nullpunkter, asympoter, monotoni, ekstremalpunkter, vendepunkter og skisse.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske og beskrive egenskapene ved polynomfunksjoner, rasjonale funksjoner, eksponentialfunksjoner og potensfunksjoner',
    'bruke derivasjon til å analysere og drøfte funksjoner'
  ],
  content: [
    {
      id: 's2-3-1-intro',
      type: 'text',
      content: `## Hva er funksjonsdrøfting?

En **fullstendig funksjonsdrøfting** er en systematisk analyse av en funksjon. Vi undersøker alle viktige egenskaper for å forstå funksjonens oppførsel og kunne tegne en nøyaktig skisse.

Funksjonsdrøfting er et sentralt tema i S2 og dukker opp på nesten alle eksamener. Ved å følge en fast fremgangsmåte kan du løse slike oppgaver effektivt og komplett.`
    },
    {
      id: 's2-3-1-def-1',
      type: 'definition',
      title: 'Fullstendig funksjonsdrøfting',
      content: `En **fullstendig funksjonsdrøfting** av $f(x)$ inneholder:

1. **Definisjonsmengde** $D_f$ - for hvilke $x$-verdier er $f$ definert?
2. **Nullpunkter** - løs $f(x) = 0$
3. **Fortegn** - for hvilke $x$ er $f(x) > 0$ og $f(x) < 0$?
4. **Asympoter** - vertikale, horisontale og/eller skrå
5. **$f'(x) = 0$** - finn stasjonære punkter
6. **Monotoni** - fortegnskjema for $f'(x)$ (voksende/avtagende)
7. **Ekstremalpunkter** - toppunkter og bunnpunkter
8. **$f''(x) = 0$** - finn kandidater for vendepunkter
9. **Krumning** - fortegnsskjema for $f''(x)$ (konkav/konveks)
10. **Vendepunkter** - der $f''(x)$ skifter fortegn
11. **Skisse** - tegn grafen basert på all informasjon`
    },
    {
      id: 's2-3-1-theorem-1',
      type: 'theorem',
      title: 'Kriterier for ekstremal- og vendepunkter',
      content: `**Stasjonære punkter:** $f'(a) = 0$

**Ekstremalpunkter:**
- $f$ har **toppunkt** i $x = a$ dersom $f'(x)$ skifter fra positiv til negativ i $x = a$
- $f$ har **bunnpunkt** i $x = a$ dersom $f'(x)$ skifter fra negativ til positiv i $x = a$

**Vendepunkter:**
- $f$ har **vendepunkt** i $x = a$ dersom $f''(x)$ skifter fortegn i $x = a$

**Andrederivert-testen (alternativ for ekstremalpunkter):**
- Hvis $f'(a) = 0$ og $f''(a) < 0$, har $f$ **toppunkt** i $x = a$
- Hvis $f'(a) = 0$ og $f''(a) > 0$, har $f$ **bunnpunkt** i $x = a$
- Hvis $f'(a) = 0$ og $f''(a) = 0$, er testen inkonklusiv`
    },
    {
      id: 's2-3-1-example-1',
      type: 'example',
      title: 'Fullstendig drøfting av polynomfunksjon',
      problem: `Gjennomfør en fullstendig funksjonsdrøfting av $f(x) = x^3 - 3x^2 + 4$.`,
      solution: `**1. Definisjonsmengde:**
$D_f = \\mathbb{R}$ (polynom er definert for alle $x$)

**2. Nullpunkter:** $f(x) = x^3 - 3x^2 + 4 = 0$
Vi prøver $x = -1$: $(-1)^3 - 3(-1)^2 + 4 = -1 - 3 + 4 = 0$ ✓
Polynomdivisjon: $x^3 - 3x^2 + 4 = (x + 1)(x^2 - 4x + 4) = (x + 1)(x - 2)^2$
Nullpunkter: $x = -1$ og $x = 2$ (dobbelt)

**3. Fortegn:**
- $f(x) > 0$ for $x > -1$ (unntatt $x = 2$ der $f = 0$)
- $f(x) < 0$ for $x < -1$

**4. Asympoter:** Ingen (polynom)

**5. Den deriverte:** $f'(x) = 3x^2 - 6x = 3x(x - 2)$
$f'(x) = 0 \\ \\Rightarrow \\ x = 0$ eller $x = 2$

**6. Monotoni (fortegnsskjema for $f'(x)$):**

| $x$ | $x < 0$ | $x = 0$ | $0 < x < 2$ | $x = 2$ | $x > 2$ |
|-----|---------|---------|-------------|---------|---------|
| $f'(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| $f$ | voksende | | avtagende | | voksende |

**7. Ekstremalpunkter:**
- Toppunkt i $(0, f(0)) = (0, 4)$
- Bunnpunkt i $(2, f(2)) = (2, 0)$

**8. Andrederiverte:** $f''(x) = 6x - 6 = 6(x - 1)$
$f''(x) = 0 \\ \\Rightarrow \\ x = 1$

**9-10. Krumning og vendepunkt:**

| $x$ | $x < 1$ | $x = 1$ | $x > 1$ |
|-----|---------|---------|---------|
| $f''(x)$ | $-$ | $0$ | $+$ |
| Krumning | konkav | | konveks |

$f''(x)$ skifter fortegn i $x = 1$, så vendepunkt i $(1, f(1)) = (1, 2)$.

**11. Skisse:** Grafen starter fra $-\\infty$ (nedenfra), krysser $x$-aksen i $x = -1$, har toppunkt $(0, 4)$, vendepunkt $(1, 2)$, bunnpunkt/tangerer $x$-aksen i $(2, 0)$, og vokser mot $+\\infty$.`
    },
    {
      id: 's2-3-1-text-fortegnsskjema',
      type: 'text',
      content: `## Fortegnsskjema - det viktigste verktøyet

Et **fortegnsskjema** er en oversikt over fortegnene til $f'(x)$ (eller $f''(x)$) i ulike intervaller. Det er det viktigste hjelpemidlet i funksjonsdrøfting.

**Slik lager du fortegnsskjema for $f'(x)$:**
1. Finn alle $x$-verdier der $f'(x) = 0$ (stasjonære punkter)
2. Disse deler tallinjen i intervaller
3. Sjekk fortegnet til $f'(x)$ i hvert intervall (sett inn en testverdi)
4. $f'(x) > 0$ betyr at $f$ er voksende
5. $f'(x) < 0$ betyr at $f$ er avtagende

Samme prinsipp gjelder for $f''(x)$:
- $f''(x) > 0$: $f$ er konveks (smiler)
- $f''(x) < 0$: $f$ er konkav (sur)`
    },
    {
      id: 's2-3-1-example-2',
      type: 'example',
      title: 'Drøfting av rasjonell funksjon',
      problem: `Drøft funksjonen $f(x) = \\frac{x^2 - 1}{x - 2}$.`,
      solution: `**1. Definisjonsmengde:** $D_f = \\mathbb{R} \\setminus \\{2\\}$ (nevneren kan ikke være null)

**2. Nullpunkter:** $x^2 - 1 = 0 \\ \\Rightarrow \\ x = \\pm 1$

**3. Fortegn:** Analyse av $\\frac{(x-1)(x+1)}{x-2}$:
- $f(x) > 0$ for $x \\in (-1, 1) \\cup (2, \\infty)$
- $f(x) < 0$ for $x \\in (-\\infty, -1) \\cup (1, 2)$

**4. Asympoter:**
Vertikal asymptote: $x = 2$ (nevneren er null)

Polynomdivisjon: $\\frac{x^2 - 1}{x - 2} = x + 2 + \\frac{3}{x - 2}$

Skrå asymptote: $y = x + 2$ (når $x \\to \\pm\\infty$)

**5. Den deriverte:**
$$f'(x) = \\frac{2x(x-2) - (x^2-1)}{(x-2)^2} = \\frac{x^2 - 4x + 1}{(x-2)^2}$$

$f'(x) = 0$ når $x^2 - 4x + 1 = 0 \\ \\Rightarrow \\ x = 2 \\pm \\sqrt{3}$

Altså $x_1 = 2 - \\sqrt{3} \\approx 0{,}27$ og $x_2 = 2 + \\sqrt{3} \\approx 3{,}73$.

**6. Monotoni:**
$f'(x) > 0$ for $x < 2 - \\sqrt{3}$ og $x > 2 + \\sqrt{3}$ (voksende)
$f'(x) < 0$ for $2 - \\sqrt{3} < x < 2 + \\sqrt{3}$, $x \\neq 2$ (avtagende)

**7. Ekstremalpunkter:**
- Toppunkt i $x = 2 - \\sqrt{3}$: $f(2 - \\sqrt{3}) = 4 - 2\\sqrt{3} \\approx 0{,}54$
- Bunnpunkt i $x = 2 + \\sqrt{3}$: $f(2 + \\sqrt{3}) = 4 + 2\\sqrt{3} \\approx 7{,}46$`
    },
    {
      id: 's2-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn nullpunktene til $f(x) = x^3 - 4x$.', solution: '$x^3 - 4x = x(x^2 - 4) = x(x-2)(x+2) = 0 \\Rightarrow x = 0, x = 2, x = -2$' },
          { label: 'b', task: 'Finn definisjonsmengden til $g(x) = \\frac{x+1}{x^2 - 9}$.', solution: '$x^2 - 9 = 0 \\Rightarrow x = \\pm 3$. $D_g = \\mathbb{R} \\setminus \\{-3, 3\\}$' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $f\'(x)$ og de stasjonære punktene til $f(x) = x^3 - 6x^2 + 9x + 1$.', solution: '$f\'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$. Stasjonære punkter: $x = 1$ og $x = 3$.' },
          { label: 'b', task: 'Bruk fortegnsskjema for $f\'(x)$ til å avgjøre om de stasjonære punktene er topp- eller bunnpunkter.', solution: '$f\'(x) > 0$ for $x < 1$, $f\'(x) < 0$ for $1 < x < 3$, $f\'(x) > 0$ for $x > 3$. Toppunkt i $x = 1$: $f(1) = 5$. Bunnpunkt i $x = 3$: $f(3) = 1$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn asymptotene til $f(x) = \\frac{2x + 1}{x - 3}$.', solution: 'Vertikal asymptote: $x = 3$. Horisontal asymptote: $y = \\frac{2}{1} = 2$ (graden i teller = graden i nevner).' },
          { label: 'b', task: 'Finn asymptotene til $g(x) = \\frac{x^2}{x + 1}$.', solution: 'Vertikal: $x = -1$. Polynomdivisjon: $\\frac{x^2}{x+1} = x - 1 + \\frac{1}{x+1}$. Skrå asymptote: $y = x - 1$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Lag et fortegnsskjema for $f\'(x) = (x+2)(x-1)$.', solution: '$f\'(x) = 0$ for $x = -2$ og $x = 1$. $f\'(x) > 0$ for $x < -2$ og $x > 1$. $f\'(x) < 0$ for $-2 < x < 1$. Toppunkt i $x = -2$, bunnpunkt i $x = 1$.' },
          { label: 'b', task: 'Bestem monotoniegenskapene til $f$ basert på fortegnsskjemaet i a).', solution: '$f$ er voksende for $x < -2$ og $x > 1$. $f$ er avtagende for $-2 < x < 1$.' }
        ]
      }
    },
    {
      id: 's2-3-1-text-strategi',
      type: 'text',
      content: `## Strategi for eksamensoppgaver

På eksamen er det viktig å vise **systematikk**. Skriv ned hvert steg tydelig, selv om noen steg er korte. Sensor gir poeng for hvert element du inkluderer.

**Typisk eksamensoppgave:** «Drøft funksjonen $f(x) = ...$» eller «Gjennomfør en fullstendig funksjonsdrøfting.»

**Sjekkliste:**
- Definisjonsmengde ✓
- Nullpunkter ✓
- Asympoter (dersom relevant) ✓
- $f'(x)$ og stasjonære punkter ✓
- Fortegnsskjema for $f'(x)$ ✓
- Ekstremalverdier (topp/bunn med $y$-verdier) ✓
- $f''(x)$ og vendepunkter ✓
- Skisse med alle viktige punkter markert ✓`
    },
    {
      id: 's2-3-1-example-3',
      type: 'example',
      title: 'Drøfting av eksponentialfunksjon',
      problem: `Drøft $f(x) = x \\cdot e^{-x}$.`,
      solution: `**1. Definisjonsmengde:** $D_f = \\mathbb{R}$

**2. Nullpunkter:** $x \\cdot e^{-x} = 0$. Siden $e^{-x} > 0$ for alle $x$, får vi $x = 0$.

**3. Fortegn:** $f(x) > 0$ for $x > 0$, $f(x) < 0$ for $x < 0$.

**4. Asympoter:**
- Når $x \\to \\infty$: $f(x) = \\frac{x}{e^x} \\to 0$ (eksponentialvekst dominerer). Horisontal asymptote $y = 0$ mot høyre.
- Når $x \\to -\\infty$: $f(x) \\to -\\infty$ (ingen asymptote mot venstre).

**5. Derivasjon:** $f'(x) = e^{-x} + x \\cdot (-e^{-x}) = e^{-x}(1 - x)$
$f'(x) = 0 \\Rightarrow 1 - x = 0 \\Rightarrow x = 1$

**6. Monotoni:**
$f'(x) > 0$ for $x < 1$ (voksende), $f'(x) < 0$ for $x > 1$ (avtagende)

**7. Ekstremalpunkter:**
Toppunkt i $(1, f(1)) = (1, e^{-1}) = (1, \\frac{1}{e}) \\approx (1, 0{,}37)$

**8. Andrederiverte:** $f''(x) = -e^{-x}(1-x) + e^{-x}(-1) = e^{-x}(x - 2)$
$f''(x) = 0 \\Rightarrow x = 2$

**9-10. Vendepunkt:**
$f''(x) < 0$ for $x < 2$ (konkav), $f''(x) > 0$ for $x > 2$ (konveks).
Vendepunkt i $(2, f(2)) = (2, 2e^{-2}) \\approx (2, 0{,}27)$.`
    },
    {
      id: 's2-3-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomfør en fullstendig funksjonsdrøfting av $f(x) = x^3 - 3x$.', solution: '$D_f = \\mathbb{R}$. Nullpunkter: $x(x^2-3) = 0 \\Rightarrow x = 0, \\pm\\sqrt{3}$. $f\'(x) = 3x^2 - 3 = 3(x-1)(x+1)$. Toppunkt $(-1, 2)$, bunnpunkt $(1, -2)$. $f\'\'(x) = 6x$. Vendepunkt $(0, 0)$.' },
          { label: 'b', task: 'Tegn en skisse av grafen til $f$ med alle viktige punkter markert.', solution: 'Skissen viser en kubisk kurve med toppunkt $(-1, 2)$, vendepunkt $(0, 0)$ og bunnpunkt $(1, -2)$. Nullpunkter i $x = -\\sqrt{3}, 0, \\sqrt{3}$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = x^4 - 8x^2 + 12$. Finn nullpunkter, ekstremalpunkter og vendepunkter.', solution: '$f(x) = (x^2-2)(x^2-6)$. Nullpunkter: $x = \\pm\\sqrt{2}, \\pm\\sqrt{6}$. $f\'(x) = 4x^3 - 16x = 4x(x^2-4)$. Stasjonære: $x = 0, \\pm 2$. $f(0) = 12$ (topp), $f(\\pm 2) = -4$ (bunn). $f\'\'(x) = 12x^2 - 16 = 0 \\Rightarrow x = \\pm\\frac{2\\sqrt{3}}{3}$. Vendepunkter: $(\\pm\\frac{2\\sqrt{3}}{3}, \\frac{20}{9})$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = \\frac{x}{x^2 + 1}$. Finn definisjonsmengde, nullpunkter, asympoter, ekstremalpunkter og vendepunkter.', solution: '$D_f = \\mathbb{R}$. Nullpunkt: $x = 0$. Horisontal asymptote: $y = 0$. $f\'(x) = \\frac{1-x^2}{(x^2+1)^2}$. $f\'(x) = 0 \\Rightarrow x = \\pm 1$. Toppunkt $(1, \\frac{1}{2})$, bunnpunkt $(-1, -\\frac{1}{2})$. $f\'\'(x) = \\frac{2x(x^2-3)}{(x^2+1)^3}$. Vendepunkter: $x = 0, \\pm\\sqrt{3}$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = xe^{x}$. Finn ekstremalpunkter og vendepunkter.', solution: '$f\'(x) = e^x + xe^x = e^x(1+x)$. $f\'(x) = 0 \\Rightarrow x = -1$. Bunnpunkt $(-1, -e^{-1}) \\approx (-1, -0{,}37)$. $f\'\'(x) = e^x(2+x)$. $f\'\'(x) = 0 \\Rightarrow x = -2$. Vendepunkt $(-2, -2e^{-2}) \\approx (-2, -0{,}27)$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = \\frac{2x}{x - 1}$. Finn asympoter, ekstremalpunkter og tegn skisse.', solution: 'Vertikal asymptote: $x = 1$. $\\frac{2x}{x-1} = 2 + \\frac{2}{x-1}$, så horisontal asymptote: $y = 2$. Nullpunkt: $x = 0$. $f\'(x) = \\frac{-2}{(x-1)^2} < 0$ for alle $x \\neq 1$. Ingen ekstremalpunkter. $f$ er strengt avtagende på $(-\\infty, 1)$ og $(1, \\infty)$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomfør en fullstendig drøfting av $f(x) = x^2 e^{-x}$ for $x \\geq 0$.', solution: '$D_f = [0, \\infty)$. Nullpunkt: $x = 0$. $f(x) \\to 0$ når $x \\to \\infty$ (horisontal asymptote $y = 0$). $f\'(x) = e^{-x}(2x - x^2) = xe^{-x}(2-x)$. $f\'(x) = 0 \\Rightarrow x = 0$ eller $x = 2$. Toppunkt $(2, 4e^{-2}) \\approx (2, 0{,}54)$. $f\'\'(x) = e^{-x}(x^2 - 4x + 2)$. $f\'\'(x) = 0 \\Rightarrow x = 2 \\pm \\sqrt{2}$. Vendepunkter i $x = 2 - \\sqrt{2} \\approx 0{,}59$ og $x = 2 + \\sqrt{2} \\approx 3{,}41$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = \\frac{x^2 + 1}{x}$ for $x > 0$. Finn eventuelle ekstremalverdier og asympoter.', solution: '$f(x) = x + \\frac{1}{x}$. Skrå asymptote: $y = x$. $f\'(x) = 1 - \\frac{1}{x^2} = \\frac{x^2-1}{x^2}$. $f\'(x) = 0 \\Rightarrow x = 1$. $f\'\'(x) = \\frac{2}{x^3} > 0$ for $x > 0$, så bunnpunkt i $(1, 2)$. Ingen vendepunkter for $x > 0$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomfør en fullstendig drøfting av $f(x) = \\ln(x^2 + 1)$.', solution: '$D_f = \\mathbb{R}$. Nullpunkt: $\\ln(x^2+1) = 0 \\Rightarrow x^2+1 = 1 \\Rightarrow x = 0$. Ingen asympoter. Symmetri: $f(-x) = f(x)$, så $f$ er en par funksjon. $f\'(x) = \\frac{2x}{x^2+1}$. $f\'(x) = 0 \\Rightarrow x = 0$. Bunnpunkt $(0, 0)$. $f\'\'(x) = \\frac{2(1-x^2)}{(x^2+1)^2}$. $f\'\'(x) = 0 \\Rightarrow x = \\pm 1$. Vendepunkter $(\\pm 1, \\ln 2)$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = \\frac{x^2 - 4}{x^2 - 1}$. Finn alle asympoter, ekstremalpunkter og vendepunkter.', solution: 'Vertikale asympoter: $x = \\pm 1$. Horisontal asymptote: $y = 1$. Nullpunkter: $x = \\pm 2$. $f\'(x) = \\frac{6x}{(x^2-1)^2}$. $f\'(x) = 0 \\Rightarrow x = 0$. Toppunkt $(0, 4)$. $f\'\'(x) = \\frac{6(1+3x^2)(1-x^2) - 6x \\cdot 2(x^2-1) \\cdot 2x}{(x^2-1)^4}$. Forenklet: $f\'\'(x) = \\frac{-6(3x^2+1)}{(x^2-1)^3}$. $f\'\'(x) = 0$ har ingen løsning ($3x^2+1 > 0$), altså ingen vendepunkter.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En funksjon $f$ er gitt ved $f(x) = ax^3 + bx^2 + cx + d$. Funksjonen har toppunkt i $(-1, 5)$ og vendepunkt i $(1, 1)$. Bestem $a$, $b$, $c$ og $d$.', solution: 'Fra vendepunkt: $f\'\'(1) = 0 \\Rightarrow 6a + 2b = 0 \\Rightarrow b = -3a$. Fra vendepunkt: $f(1) = a - 3a + c + d = 1$. Fra toppunkt: $f\'(-1) = 0 \\Rightarrow 3a - 6a + c = 0 \\Rightarrow c = 3a$. Fra toppunkt: $f(-1) = -a - 3a - 3a + d = 5$. Altså $-a + 3a + d = 1$ og $-7a + d = 5$. Fra første: $d = 1 - 2a$. Inn i andre: $-7a + 1 - 2a = 5 \\Rightarrow a = -\\frac{4}{9}$. Dermed $b = \\frac{4}{3}$, $c = -\\frac{4}{3}$, $d = \\frac{17}{9}$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Drøft $f(x) = (x-1)^2 e^{-x}$ fullstendig.', solution: '$D_f = \\mathbb{R}$. Nullpunkt: $x = 1$ (dobbelt). $f(x) \\geq 0$ for alle $x$. $f(x) \\to 0$ når $x \\to \\infty$. $f\'(x) = e^{-x}[2(x-1) - (x-1)^2] = e^{-x}(x-1)(1-x+2) = -e^{-x}(x-1)(x-3)$. Stasjonære: $x = 1$ og $x = 3$. Bunnpunkt $(1, 0)$, toppunkt $(3, 4e^{-3}) \\approx (3, 0{,}20)$. $f\'\'(x) = e^{-x}(x^2 - 6x + 7)$. $f\'\'(x) = 0 \\Rightarrow x = 3 \\pm \\sqrt{2}$. Vendepunkter: $(3-\\sqrt{2}, f(3-\\sqrt{2}))$ og $(3+\\sqrt{2}, f(3+\\sqrt{2}))$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Funksjonen $f$ er gitt ved $f(x) = 2x^3 - 9x^2 + 12x - 4$. Finn $f\'(x)$ og $f\'\'(x)$.', solution: '$f\'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x-1)(x-2)$. $f\'\'(x) = 12x - 18 = 6(2x-3)$.' },
          { label: 'b', task: 'Finn ekstremalpunktene og vendepunktet til $f$.', solution: '$f\'(x) = 0 \\Rightarrow x = 1$ eller $x = 2$. $f(1) = 1$, $f(2) = 0$. $f\'\'(1) = -6 < 0$: toppunkt $(1, 1)$. $f\'\'(2) = 6 > 0$: bunnpunkt $(2, 0)$. $f\'\'(x) = 0 \\Rightarrow x = \\frac{3}{2}$. Vendepunkt $(\\frac{3}{2}, \\frac{1}{2})$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-17',
        number: '17',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bestem alle stasjonære punkter til $f(x) = x + \\frac{4}{x}$ for $x > 0$, og klassifiser dem.', solution: '$f\'(x) = 1 - \\frac{4}{x^2}$. $f\'(x) = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = 2$ (for $x > 0$). $f\'\'(x) = \\frac{8}{x^3}$. $f\'\'(2) = 1 > 0$: bunnpunkt. $f(2) = 2 + 2 = 4$. Bunnpunkt $(2, 4)$.' }
        ]
      }
    },
    {
      id: 's2-3-1-ex-block-18',
      type: 'exercise',
      exercise: {
        id: 's2-3-1-ex-18',
        number: '18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomfør en fullstendig funksjonsdrøfting av $f(x) = \\frac{e^x}{x}$ for $x > 0$.', solution: '$D_f = (0, \\infty)$. Ingen nullpunkter ($e^x > 0$). Vertikal asymptote: $x = 0^+$ ($f \\to +\\infty$). $f(x) \\to +\\infty$ når $x \\to \\infty$. $f\'(x) = \\frac{e^x(x-1)}{x^2}$. $f\'(x) = 0 \\Rightarrow x = 1$. Bunnpunkt $(1, e)$. $f\'\'(x) = \\frac{e^x(x^2 - 2x + 2)}{x^3}$. Diskriminant: $4 - 8 < 0$, ingen reelle løsninger. $f\'\'(x) > 0$ for alle $x > 0$: alltid konveks, ingen vendepunkter.' }
        ]
      }
    },
    {
      id: 's2-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Fremgangsmåte for fullstendig funksjonsdrøfting:**
1. Bestem definisjonsmengden $D_f$
2. Finn nullpunkter: $f(x) = 0$
3. Finn asympoter (vertikale, horisontale, skrå)
4. Deriver: $f'(x)$ og finn stasjonære punkter
5. Lag fortegnsskjema for $f'(x)$ og bestem monotoni
6. Klassifiser ekstremalpunkter (topp/bunn)
7. Finn $f''(x)$ og løs $f''(x) = 0$
8. Lag fortegnsskjema for $f''(x)$ og bestem krumning
9. Identifiser vendepunkter der $f''(x)$ skifter fortegn
10. Tegn skisse med alle viktige punkter

**Husk:** Oppgi alltid både $x$- og $y$-koordinat for alle punkter!`
    },
    {
      id: 's2-3-1-note-1',
      type: 'note',
      content: `**Vanlige feil på eksamen:**

- Glemme å oppgi $y$-verdien til ekstremalpunkter og vendepunkter
- Forveksle stasjonære punkter med ekstremalpunkter ($f'(a) = 0$ betyr ikke alltid ekstremalverdi)
- Glemme å sjekke definisjonsmengden for rasjonelle funksjoner
- Ikke markere asympoter på skissen
- Blande sammen konkav og konveks`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_3_2: TextbookChapter = {
  id: 's2-3-2',
  courseId: 's2',
  chapterNumber: '3.2',
  title: 'Andrederiverte og vendepunkter',
  description: 'Lær om andrederiverten, konkav og konveks krumning, vendepunkter og andrederivert-testen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke derivasjon til å analysere og drøfte funksjoner',
    'tolke andrederiverten geometrisk og bruke den til å bestemme krumning'
  ],
  content: [
    {
      id: 's2-3-2-intro',
      type: 'text',
      content: `## Andrederiverten $f''(x)$

Vi har lært at den deriverte $f'(x)$ forteller oss om funksjonens stigning. Men hva forteller **andrederiverten** $f''(x)$ oss?

Andrederiverten er den deriverte av den deriverte:
$$f''(x) = \\frac{d}{dx}[f'(x)]$$

Mens $f'(x)$ beskriver *hvor bratt* funksjonen er, beskriver $f''(x)$ **hvor raskt stigningen endrer seg**. Dette gir oss informasjon om funksjonens **krumning**.`
    },
    {
      id: 's2-3-2-def-1',
      type: 'definition',
      title: 'Konkav og konveks',
      content: `En funksjon $f$ er:

- **Konveks** (buer oppover / «smiler») på et intervall dersom $f''(x) > 0$ i hele intervallet
- **Konkav** (buer nedover / «sur») på et intervall dersom $f''(x) < 0$ i hele intervallet

**Huskeregel:**
- Konveks: «koppen holder vann» (U-form)
- Konkav: «koppen søler vann» (n-form)`
    },
    {
      id: 's2-3-2-def-2',
      type: 'definition',
      title: 'Vendepunkt',
      content: `Et **vendepunkt** er et punkt der funksjonen skifter mellom konkav og konveks krumning.

Formelt: $f$ har vendepunkt i $x = a$ dersom $f''(a) = 0$ (eller $f''(a)$ er udefinert) **og** $f''(x)$ skifter fortegn i $x = a$.

**Merk:** $f''(a) = 0$ alene er **ikke** nok til å garantere vendepunkt. Vi må verifisere at $f''(x)$ faktisk skifter fortegn.`
    },
    {
      id: 's2-3-2-example-1',
      type: 'example',
      title: 'Finne vendepunkter',
      problem: `Finn vendepunktene til $f(x) = x^4 - 6x^2 + 8x + 1$.`,
      solution: `**Steg 1:** Finn $f''(x)$.
$f'(x) = 4x^3 - 12x + 8$
$f''(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$

**Steg 2:** Løs $f''(x) = 0$.
$12(x-1)(x+1) = 0 \\Rightarrow x = -1$ eller $x = 1$

**Steg 3:** Lag fortegnsskjema for $f''(x)$:

| $x$ | $x < -1$ | $x = -1$ | $-1 < x < 1$ | $x = 1$ | $x > 1$ |
|-----|----------|----------|--------------|---------|---------|
| $f''(x)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
| Krumning | konveks | | konkav | | konveks |

$f''(x)$ skifter fortegn i både $x = -1$ og $x = 1$.

**Steg 4:** Finn $y$-verdiene.
$f(-1) = 1 - 6 - 8 + 1 = -12$
$f(1) = 1 - 6 + 8 + 1 = 4$

**Vendepunkter:** $(-1, -12)$ og $(1, 4)$.`
    },
    {
      id: 's2-3-2-theorem-1',
      type: 'theorem',
      title: 'Andrederivert-testen for ekstremalverdi',
      content: `La $f'(a) = 0$ (stasjonært punkt). Da gjelder:

1. Hvis $f''(a) < 0$, har $f$ **lokalt toppunkt** (maksimum) i $x = a$
2. Hvis $f''(a) > 0$, har $f$ **lokalt bunnpunkt** (minimum) i $x = a$
3. Hvis $f''(a) = 0$, er testen **inkonklusiv** - bruk fortegnsskjema for $f'(x)$ i stedet

**Forklaring:**
- $f''(a) < 0$ betyr at grafen er konkav (bøyer ned) rundt $a$ - altså et toppunkt
- $f''(a) > 0$ betyr at grafen er konveks (bøyer opp) rundt $a$ - altså et bunnpunkt`
    },
    {
      id: 's2-3-2-example-2',
      type: 'example',
      title: 'Andrederivert-testen',
      problem: `Bruk andrederivert-testen til å klassifisere de stasjonære punktene til $f(x) = 2x^3 - 3x^2 - 12x + 5$.`,
      solution: `**Steg 1:** Finn $f'(x)$ og stasjonære punkter.
$f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x-2)(x+1)$
$f'(x) = 0 \\Rightarrow x = 2$ eller $x = -1$

**Steg 2:** Finn $f''(x)$.
$f''(x) = 12x - 6$

**Steg 3:** Evaluer $f''$ i de stasjonære punktene.

For $x = -1$: $f''(-1) = 12(-1) - 6 = -18 < 0$ $\\Rightarrow$ **Toppunkt**
$f(-1) = -2 - 3 + 12 + 5 = 12$
Toppunkt: $(-1, 12)$

For $x = 2$: $f''(2) = 12(2) - 6 = 18 > 0$ $\\Rightarrow$ **Bunnpunkt**
$f(2) = 16 - 12 - 24 + 5 = -15$
Bunnpunkt: $(2, -15)$`
    },
    {
      id: 's2-3-2-text-2',
      type: 'text',
      content: `## Når andrederivert-testen svikter

Andrederivert-testen er inkonklusiv når $f''(a) = 0$. I slike tilfeller må vi bruke **fortegnsskjema for $f'(x)$**.

**Eksempel:** For $f(x) = x^4$ har vi $f'(x) = 4x^3$ og $f''(x) = 12x^2$.
$f'(0) = 0$ og $f''(0) = 0$ - testen er inkonklusiv.
Men fra fortegnsskjemaet: $f'(x) < 0$ for $x < 0$ og $f'(x) > 0$ for $x > 0$, altså bunnpunkt i $x = 0$.

**Eksempel:** For $g(x) = x^3$ har vi $g'(0) = 0$ og $g''(0) = 0$ - testen er inkonklusiv.
Fra fortegnsskjemaet: $g'(x)$ skifter ikke fortegn (begge sider positive), altså er $x = 0$ et vendepunkt, **ikke** et ekstremalpunkt.`
    },
    {
      id: 's2-3-2-example-3',
      type: 'example',
      title: 'Krumningsanalyse',
      problem: `Bestem krumningen til $f(x) = e^{-x^2}$ og finn eventuelle vendepunkter.`,
      solution: `**Steg 1:** Deriver.
$f'(x) = -2x \\cdot e^{-x^2}$

**Steg 2:** Deriver igjen (produktregelen).
$f''(x) = -2 \\cdot e^{-x^2} + (-2x) \\cdot (-2x) \\cdot e^{-x^2}$
$f''(x) = e^{-x^2}(-2 + 4x^2) = 2e^{-x^2}(2x^2 - 1)$

**Steg 3:** Løs $f''(x) = 0$.
Siden $e^{-x^2} > 0$, trenger vi $2x^2 - 1 = 0$:
$x^2 = \\frac{1}{2} \\Rightarrow x = \\pm \\frac{1}{\\sqrt{2}} = \\pm \\frac{\\sqrt{2}}{2}$

**Steg 4:** Fortegnsskjema for $f''(x)$:

| $x$ | $x < -\\frac{\\sqrt{2}}{2}$ | $-\\frac{\\sqrt{2}}{2} < x < \\frac{\\sqrt{2}}{2}$ | $x > \\frac{\\sqrt{2}}{2}$ |
|-----|-------|-------|------|
| $f''(x)$ | $+$ | $-$ | $+$ |
| Krumning | konveks | konkav | konveks |

**Vendepunkter:**
$f(\\pm\\frac{\\sqrt{2}}{2}) = e^{-1/2} = \\frac{1}{\\sqrt{e}} \\approx 0{,}61$

Vendepunkter: $(-\\frac{\\sqrt{2}}{2}, \\frac{1}{\\sqrt{e}})$ og $(\\frac{\\sqrt{2}}{2}, \\frac{1}{\\sqrt{e}})$.`
    },
    {
      id: 's2-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $f\'\'(x)$ når $f(x) = x^3 - 6x^2 + 9x - 2$.', solution: '$f\'(x) = 3x^2 - 12x + 9$, $f\'\'(x) = 6x - 12$' },
          { label: 'b', task: 'For hvilke verdier av $x$ er $f$ konveks? Konkav?', solution: '$f\'\'(x) > 0 \\Rightarrow 6x - 12 > 0 \\Rightarrow x > 2$: konveks. $x < 2$: konkav.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn vendepunktene til $f(x) = x^3 - 3x + 1$.', solution: '$f\'(x) = 3x^2 - 3$. $f\'\'(x) = 6x$. $f\'\'(x) = 0 \\Rightarrow x = 0$. $f\'\'$ skifter fortegn (negativ til positiv). Vendepunkt: $(0, 1)$.' },
          { label: 'b', task: 'Er vendepunktet et terrassepunkt?', solution: 'Nei. Et terrassepunkt har $f\'(a) = 0$ og $f\'\'(a) = 0$ uten ekstremalverdi. Her er $f\'(0) = -3 \\neq 0$, så det er et vanlig vendepunkt.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bruk andrederivert-testen til å klassifisere de stasjonære punktene til $f(x) = x^3 - 12x + 5$.', solution: '$f\'(x) = 3x^2 - 12 = 3(x-2)(x+2)$. Stasjonære: $x = \\pm 2$. $f\'\'(x) = 6x$. $f\'\'(-2) = -12 < 0$: toppunkt $(-2, 21)$. $f\'\'(2) = 12 > 0$: bunnpunkt $(2, -11)$.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $f\'\'(x)$ for $f(x) = xe^x$.', solution: '$f\'(x) = e^x + xe^x = e^x(1+x)$. $f\'\'(x) = e^x(1+x) + e^x = e^x(2+x)$.' },
          { label: 'b', task: 'Finn vendepunktet til $f$.', solution: '$f\'\'(x) = 0 \\Rightarrow x = -2$. $f\'\'$ skifter fra positiv ($x < -2$: sjekk $f\'\'(-3) = e^{-3}(-1) < 0$... vent, la oss sjekke: $f\'\'(-3) = e^{-3}(2+(-3)) = -e^{-3} < 0$ og $f\'\'(0) = 2 > 0$. Skifter fra negativ til positiv. Vendepunkt: $(-2, -2e^{-2}) \\approx (-2, -0{,}27)$.' }
        ]
      }
    },
    {
      id: 's2-3-2-text-3',
      type: 'text',
      content: `## Sammenhengen mellom $f$, $f'$ og $f''$

Det er viktig å forstå sammenhengen mellom en funksjon og dens deriverte:

| $f'(x)$ | $f''(x)$ | Funksjonens oppførsel |
|---------|---------|----------------------|
| $> 0$ | $> 0$ | Voksende og konveks (stadig brattere oppover) |
| $> 0$ | $< 0$ | Voksende og konkav (vokser saktere) |
| $< 0$ | $> 0$ | Avtagende og konveks (avtar saktere) |
| $< 0$ | $< 0$ | Avtagende og konkav (stadig brattere nedover) |
| $= 0$ | $< 0$ | Toppunkt |
| $= 0$ | $> 0$ | Bunnpunkt |

Denne tabellen er et nyttig hjelpemiddel for å tolke fortegnsskjemaer.`
    },
    {
      id: 's2-3-2-example-4',
      type: 'example',
      title: 'Praktisk tolkning av $f\'\'(x)$',
      problem: `Temperaturen $T$ (i $°C$) i et rom $t$ timer etter at varmeovnen slås på er gitt ved:
$$T(t) = 20 - 15e^{-0{,}3t}$$

a) Finn $T'(t)$ og $T''(t)$.
b) Hva forteller fortegnene til $T'$ og $T''$ om temperaturutviklingen?`,
      solution: `**a)**
$T'(t) = -15 \\cdot (-0{,}3) \\cdot e^{-0{,}3t} = 4{,}5 e^{-0{,}3t}$

$T''(t) = 4{,}5 \\cdot (-0{,}3) \\cdot e^{-0{,}3t} = -1{,}35 e^{-0{,}3t}$

**b)**
- $T'(t) > 0$ for alle $t > 0$: Temperaturen **stiger** hele tiden.
- $T''(t) < 0$ for alle $t > 0$: Temperaturstigningen **avtar** (grafen er konkav).

**Tolkning:** Temperaturen stiger raskt i starten, men stigningen blir stadig mindre. Temperaturen nærmer seg gradvis $20°C$ (horisontal asymptote), men når aldri helt opp.`
    },
    {
      id: 's2-3-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn vendepunktene til $f(x) = x^4 - 4x^3 + 6x^2$.', solution: '$f\'(x) = 4x^3 - 12x^2 + 12x = 4x(x^2 - 3x + 3)$. $f\'\'(x) = 12x^2 - 24x + 12 = 12(x-1)^2$. $f\'\'(x) = 0 \\Rightarrow x = 1$. Men $f\'\'(x) = 12(x-1)^2 \\geq 0$ for alle $x$, og skifter IKKE fortegn. Dermed har $f$ **ingen vendepunkter**.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at $f(x) = x^3$ har vendepunkt i origo, selv om $f\'(0) = 0$.', solution: '$f\'(x) = 3x^2$, $f\'\'(x) = 6x$. $f\'\'(0) = 0$ og $f\'\'$ skifter fra negativ til positiv i $x = 0$, så vendepunkt i $(0, 0)$. Dette er et terrassepunkt: stasjonært punkt som er vendepunkt.' },
          { label: 'b', task: 'Er origo et ekstremalpunkt for $f(x) = x^3$? Begrunn svaret.', solution: 'Nei. $f\'(x) = 3x^2 \\geq 0$ for alle $x$, og $f\'(x)$ skifter ikke fortegn i $x = 0$ (positiv på begge sider). Altså er $(0,0)$ ikke et ekstremal-, men et vendepunkt (terrassepunkt).' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bestem krumning og vendepunkter til $f(x) = \\frac{x}{x^2+4}$.', solution: '$f\'(x) = \\frac{4-x^2}{(x^2+4)^2}$. $f\'\'(x) = \\frac{2x(x^2-12)}{(x^2+4)^3}$. $f\'\'(x) = 0 \\Rightarrow x = 0$ eller $x = \\pm 2\\sqrt{3}$. Tre vendepunkter: $(0, 0)$, $(2\\sqrt{3}, \\frac{\\sqrt{3}}{8})$, $(-2\\sqrt{3}, -\\frac{\\sqrt{3}}{8})$.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Antall bakterier i en kultur er gitt ved $N(t) = \\frac{1000}{1 + 9e^{-0{,}5t}}$. Finn vendepunktet og forklar hva det betyr.', solution: '$N\'(t) = \\frac{4500e^{-0{,}5t}}{(1+9e^{-0{,}5t})^2}$. Vendepunkt der vekstraten er størst: $N\'\'(t) = 0$ når $1 + 9e^{-0{,}5t} = 2 \\cdot 9e^{-0{,}5t}$, dvs. $9e^{-0{,}5t} = 1$, $t = \\frac{\\ln 9}{0{,}5} = 2\\ln 9 \\approx 4{,}4$ timer. $N(2\\ln 9) = 500$. Vendepunktet $(4{,}4, \\ 500)$ er der veksten er raskest - halvparten av kapasiteten.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Klassifiser de stasjonære punktene til $f(x) = x^5 - 5x$ med andrederivert-testen.', solution: '$f\'(x) = 5x^4 - 5 = 5(x^4-1) = 5(x^2-1)(x^2+1) = 5(x-1)(x+1)(x^2+1)$. Stasjonære: $x = \\pm 1$. $f\'\'(x) = 20x^3$. $f\'\'(1) = 20 > 0$: bunnpunkt $(1, -4)$. $f\'\'(-1) = -20 < 0$: toppunkt $(-1, 4)$.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn alle vendepunkter til $f(x) = x^2 \\ln x$ for $x > 0$.', solution: '$f\'(x) = 2x\\ln x + x = x(2\\ln x + 1)$. $f\'\'(x) = 2\\ln x + 1 + 2 = 2\\ln x + 3$. $f\'\'(x) = 0 \\Rightarrow \\ln x = -\\frac{3}{2} \\Rightarrow x = e^{-3/2} \\approx 0{,}22$. $f\'\'$ skifter fra negativ til positiv. Vendepunkt: $(e^{-3/2}, e^{-3} \\cdot (-\\frac{3}{2})) = (e^{-3/2}, -\\frac{3}{2}e^{-3}) \\approx (0{,}22, -0{,}075)$.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at vendepunktet til en tredjegradsfunksjon $f(x) = ax^3 + bx^2 + cx + d$ alltid ligger midt mellom de to stasjonære punktene (dersom de finnes).', solution: '$f\'\'(x) = 6ax + 2b = 0 \\Rightarrow x_v = -\\frac{b}{3a}$. Stasjonære punkter: $f\'(x) = 3ax^2 + 2bx + c = 0$ gir $x = \\frac{-2b \\pm \\sqrt{4b^2 - 12ac}}{6a}$. Midtpunktet: $\\frac{x_1 + x_2}{2} = \\frac{-2b}{6a} = -\\frac{b}{3a} = x_v$. Vendepunktet ligger alltid midt mellom de stasjonære punktene.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Funksjonen $f(x) = ax^4 + bx^2$ har vendepunkter i $x = \\pm 1$. Finn sammenhengen mellom $a$ og $b$.', solution: '$f\'\'(x) = 12ax^2 + 2b$. $f\'\'(1) = 0 \\Rightarrow 12a + 2b = 0 \\Rightarrow b = -6a$. (Merk: $f\'\'(-1) = 12a + 2b = 0$ gir samme betingelse.) Sammenhengen er $b = -6a$.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'For $f(x) = \\frac{1}{1+x^2}$, finn alle vendepunkter og bestem intervallene der $f$ er konveks og konkav.', solution: '$f\'(x) = \\frac{-2x}{(1+x^2)^2}$. $f\'\'(x) = \\frac{6x^2 - 2}{(1+x^2)^3}$. $f\'\'(x) = 0 \\Rightarrow 6x^2 - 2 = 0 \\Rightarrow x = \\pm \\frac{1}{\\sqrt{3}}$. Konveks for $|x| > \\frac{1}{\\sqrt{3}}$, konkav for $|x| < \\frac{1}{\\sqrt{3}}$. Vendepunkter: $(\\pm\\frac{1}{\\sqrt{3}}, \\frac{3}{4})$.' }
        ]
      }
    },
    {
      id: 's2-3-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-3-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Avgjør om $x = 0$ er et vendepunkt for $f(x) = x^4$.', solution: '$f\'\'(x) = 12x^2$. $f\'\'(0) = 0$, men $f\'\'(x) = 12x^2 \\geq 0$ for alle $x$ og skifter ikke fortegn. Altså er $x = 0$ **ikke** et vendepunkt.' },
          { label: 'b', task: 'Hva slags punkt er $x = 0$ for $f(x) = x^4$?', solution: '$f\'(x) = 4x^3$. $f\'(0) = 0$. $f\'(x) < 0$ for $x < 0$ og $f\'(x) > 0$ for $x > 0$. Altså er $x = 0$ et bunnpunkt.' }
        ]
      }
    },
    {
      id: 's2-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Andrederiverten $f''(x)$ forteller om:**
- **Krumning:** $f''(x) > 0$ betyr konveks, $f''(x) < 0$ betyr konkav
- **Vendepunkter:** Der $f''(x)$ skifter fortegn
- **Klassifisering av stasjonære punkter:** $f''(a) < 0 \\Rightarrow$ topp, $f''(a) > 0 \\Rightarrow$ bunn

**Viktig å huske:**
- $f''(a) = 0$ garanterer IKKE vendepunkt - sjekk fortegnskifte
- Andrederivert-testen er inkonklusiv når $f''(a) = 0$
- Vendepunktet til en tredjegradsfunksjon ligger midt mellom ekstremalpunktene`
    },
    {
      id: 's2-3-2-note-1',
      type: 'note',
      content: `**Eksamensstrategi:** Hvis oppgaven ber deg om å «finne vendepunktene», må du alltid:
1. Finne $f''(x)$
2. Løse $f''(x) = 0$
3. Verifisere at $f''(x)$ skifter fortegn (fortegnsskjema!)
4. Beregne $y$-verdien

Uten steg 3 risikerer du å oppgi punkter som IKKE er vendepunkter.`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_3_3: TextbookChapter = {
  id: 's2-3-3',
  courseId: 's2',
  chapterNumber: '3.3',
  title: 'Optimering',
  description: 'Lær å løse praktiske optimeringsproblemer ved hjelp av derivasjon.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke derivasjon til å løse praktiske optimeringsproblemer',
    'modellere praktiske situasjoner med funksjoner og bruke modellene til å løse problemer'
  ],
  content: [
    {
      id: 's2-3-3-intro',
      type: 'text',
      content: `## Optimering med derivasjon

**Optimering** handler om å finne den beste løsningen - ofte den **største** eller **minste** verdien av en størrelse. Derivasjon er det perfekte verktøyet for dette!

Typiske optimeringsproblemer:
- Maksimere areal, volum, profitt eller inntekt
- Minimere kostnad, materialbruk eller avstand
- Finne den mest effektive utformingen av emballasje
- Optimere produksjonsmengde i økonomi`
    },
    {
      id: 's2-3-3-def-1',
      type: 'definition',
      title: 'Fremgangsmåte for optimeringsproblemer',
      content: `**Steg for å løse optimeringsproblemer:**

1. **Les oppgaven nøye** - hva skal optimeres? Hvilke begrensninger finnes?
2. **Innfør variabler** og tegn figur (hvis aktuelt)
3. **Sett opp funksjonsuttrykket** for størrelsen som skal optimeres
4. **Bruk begrensningene** til å uttrykke funksjonen med én variabel
5. **Bestem definisjonsmengden** - hvilke verdier gir fysisk mening?
6. **Deriver og sett $f'(x) = 0$** for å finne stasjonære punkter
7. **Verifiser** at løsningen er maks/min (andrederivert-test eller fortegnslinje)
8. **Svar på spørsmålet** med riktig enhet`
    },
    {
      id: 's2-3-3-example-1',
      type: 'example',
      title: 'Innhegning med gjerde',
      problem: `En bonde har 100 meter gjerde og vil lage en rektangulær innhegning langs en elv. Elven fungerer som den ene langsiden, så gjerdet trengs bare for tre sider. Hvilke dimensjoner gir størst areal?`,
      solution: `**Steg 1-2:** La $x$ være bredden (de to kortsidene) og $y$ lengden (den ene langsiden).

**Steg 3:** Arealet er $A = x \\cdot y$.

**Steg 4:** Begrensning: $2x + y = 100 \\Rightarrow y = 100 - 2x$

Arealet som funksjon av $x$:
$$A(x) = x(100 - 2x) = 100x - 2x^2$$

**Steg 5:** Definisjonsmengde: $x > 0$ og $y > 0$, altså $0 < x < 50$.

**Steg 6:** $A'(x) = 100 - 4x = 0 \\Rightarrow x = 25$

**Steg 7:** $A''(x) = -4 < 0$ - toppunkt bekreftet (maks areal).

**Steg 8:** $x = 25$ m og $y = 100 - 50 = 50$ m.
Største areal: $A = 25 \\cdot 50 = 1250$ m$^2$.

**Svar:** Innhegningen bør være 25 m bred og 50 m lang, noe som gir et areal på 1250 m$^2$.`
    },
    {
      id: 's2-3-3-example-2',
      type: 'example',
      title: 'Optimering av emballasje',
      problem: `En sylinder uten lokk skal ha volum $500 \\text{ cm}^3$. Hvilke dimensjoner gir minst materialforbruk (minst overflate)?`,
      solution: `**Steg 1-2:** La $r$ være radius og $h$ høyden til sylinderen.

**Steg 3:** Overflaten (bunn + sideflate, uten lokk):
$$S = \\pi r^2 + 2\\pi r h$$

**Steg 4:** Begrensning fra volumet: $V = \\pi r^2 h = 500 \\Rightarrow h = \\frac{500}{\\pi r^2}$

Sett inn:
$$S(r) = \\pi r^2 + 2\\pi r \\cdot \\frac{500}{\\pi r^2} = \\pi r^2 + \\frac{1000}{r}$$

**Steg 5:** $r > 0$

**Steg 6:** Deriver:
$$S'(r) = 2\\pi r - \\frac{1000}{r^2}$$

$S'(r) = 0$:
$$2\\pi r = \\frac{1000}{r^2} \\Rightarrow r^3 = \\frac{1000}{2\\pi} = \\frac{500}{\\pi}$$
$$r = \\sqrt[3]{\\frac{500}{\\pi}} \\approx 5{,}42 \\text{ cm}$$

**Steg 7:** $S''(r) = 2\\pi + \\frac{2000}{r^3} > 0$ for alle $r > 0$ - bunnpunkt bekreftet.

**Steg 8:** $h = \\frac{500}{\\pi \\cdot (\\frac{500}{\\pi})^{2/3}} = \\frac{500}{(\\frac{500}{\\pi})^{2/3} \\cdot \\pi} = \\sqrt[3]{\\frac{500}{\\pi}} = r \\approx 5{,}42$ cm.

**Svar:** Radius $\\approx 5{,}42$ cm og høyde $\\approx 5{,}42$ cm (dvs. $h = r$).
Minste overflate: $S \\approx 277$ cm$^2$.`
    },
    {
      id: 's2-3-3-text-okonomi',
      type: 'text',
      content: `## Optimering i økonomi

I økonomiske problemer er det vanlig å optimere:
- **Inntekt:** $I(x) = p(x) \\cdot x$ der $p(x)$ er pris som funksjon av antall
- **Kostnad:** $K(x)$ - totalkostnad ved å produsere $x$ enheter
- **Overskudd (profitt):** $O(x) = I(x) - K(x)$
- **Grensekostnad:** $K'(x)$ - kostnaden for å produsere én enhet til
- **Grenseinntekt:** $I'(x)$ - inntekten fra å selge én enhet til

**Viktig resultat:** Maksimalt overskudd oppnås når **grenseinntekten er lik grensekostnaden**: $I'(x) = K'(x)$.`
    },
    {
      id: 's2-3-3-example-3',
      type: 'example',
      title: 'Optimering av profitt',
      problem: `En bedrift selger et produkt til pris $p(x) = 200 - 2x$ kr per enhet, der $x$ er antall enheter (i tusen). Kostnadsfunksjonen er $K(x) = x^3 - 6x^2 + 15x + 50$ (tusen kr). Finn produksjonsmengden som gir størst overskudd.`,
      solution: `**Inntekt:**
$$I(x) = p(x) \\cdot x = (200 - 2x) \\cdot x = 200x - 2x^2$$

**Overskudd:**
$$O(x) = I(x) - K(x) = 200x - 2x^2 - x^3 + 6x^2 - 15x - 50$$
$$O(x) = -x^3 + 4x^2 + 185x - 50$$

**Deriver:**
$$O'(x) = -3x^2 + 8x + 185$$

$O'(x) = 0$:
$$3x^2 - 8x - 185 = 0$$
$$x = \\frac{8 \\pm \\sqrt{64 + 2220}}{6} = \\frac{8 \\pm \\sqrt{2284}}{6} = \\frac{8 \\pm 47{,}8}{6}$$

$x = \\frac{55{,}8}{6} \\approx 9{,}3$ (tusen enheter)

(Den negative løsningen $x \\approx -6{,}6$ gir ikke mening.)

**Verifisering:** $O''(x) = -6x + 8$. $O''(9{,}3) = -6(9{,}3) + 8 = -47{,}8 < 0$. Toppunkt bekreftet.

**Svar:** Størst overskudd ved produksjon av ca. 9300 enheter.`
    },
    {
      id: 's2-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn det største arealet til et rektangel med omkrets 40 cm.', solution: 'La bredde = $x$, lengde = $y$. $2x + 2y = 40 \\Rightarrow y = 20 - x$. $A(x) = x(20-x) = 20x - x^2$. $A\'(x) = 20 - 2x = 0 \\Rightarrow x = 10$. $A\'\'(x) = -2 < 0$: toppunkt. Størst areal: $A = 10 \\cdot 10 = 100$ cm$^2$ (et kvadrat).' },
          { label: 'b', task: 'Hva er det minste omkretsen til et rektangel med areal 64 cm$^2$?', solution: '$xy = 64 \\Rightarrow y = \\frac{64}{x}$. $O(x) = 2x + \\frac{128}{x}$. $O\'(x) = 2 - \\frac{128}{x^2} = 0 \\Rightarrow x = 8$. $O\'\'(8) = \\frac{256}{512} > 0$: bunnpunkt. Minste omkrets: $O = 16 + 16 = 32$ cm.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn det største produktet av to positive tall med sum 20.', solution: 'La tallene være $x$ og $20-x$. $P(x) = x(20-x) = 20x - x^2$. $P\'(x) = 20 - 2x = 0 \\Rightarrow x = 10$. Størst produkt: $P = 100$. Tallene er 10 og 10.' },
          { label: 'b', task: 'Finn det minste summen av et positivt tall og dets inverse.', solution: '$S(x) = x + \\frac{1}{x}$ for $x > 0$. $S\'(x) = 1 - \\frac{1}{x^2} = 0 \\Rightarrow x = 1$. $S\'\'(1) = \\frac{2}{1} > 0$: bunnpunkt. Minste sum: $S(1) = 2$.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En ball kastes opp med høyde $h(t) = 20t - 5t^2$ meter etter $t$ sekunder. Finn den største høyden.', solution: '$h\'(t) = 20 - 10t = 0 \\Rightarrow t = 2$. $h\'\'(t) = -10 < 0$: toppunkt. Største høyde: $h(2) = 40 - 20 = 20$ meter.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et rektangel er innskrevet i en sirkel med radius $r$. Finn dimensjonene som gir størst areal.', solution: 'La halv-bredde = $x$ og halv-høyde = $y$. Fra sirkelen: $x^2 + y^2 = r^2 \\Rightarrow y = \\sqrt{r^2-x^2}$. $A = 4xy = 4x\\sqrt{r^2-x^2}$. $A\'(x) = 4\\sqrt{r^2-x^2} + 4x \\cdot \\frac{-x}{\\sqrt{r^2-x^2}} = \\frac{4(r^2-2x^2)}{\\sqrt{r^2-x^2}} = 0$. $x = \\frac{r}{\\sqrt{2}}$. Da $y = \\frac{r}{\\sqrt{2}}$, altså et kvadrat med sidelengde $r\\sqrt{2}$. Maks areal: $A = 2r^2$.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En eske uten lokk skal lages av et rektangulært ark papp som er 30 cm bredt og 40 cm langt, ved å klippe like store kvadrater med side $x$ fra hvert hjørne og brette opp. Finn $x$ som gir størst volum.', solution: 'Volum: $V(x) = x(30-2x)(40-2x) = x(1200 - 140x + 4x^2) = 4x^3 - 140x^2 + 1200x$. $V\'(x) = 12x^2 - 280x + 1200 = 4(3x^2 - 70x + 300) = 0$. $x = \\frac{70 \\pm \\sqrt{4900 - 3600}}{6} = \\frac{70 \\pm \\sqrt{1300}}{6}$. $x \\approx \\frac{70 - 36{,}06}{6} \\approx 5{,}66$ cm (den andre løsningen gir $x > 15$, umulig). $V(5{,}66) \\approx 3032$ cm$^3$.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En gardinfabrikk har kostnadsfunksjonen $K(x) = 0{,}01x^2 + 10x + 5000$ kr for $x$ meter stoff. Finn produksjonsmengden som gir lavest enhetskostnad $E(x) = \\frac{K(x)}{x}$.', solution: '$E(x) = 0{,}01x + 10 + \\frac{5000}{x}$. $E\'(x) = 0{,}01 - \\frac{5000}{x^2} = 0 \\Rightarrow x^2 = 500000 \\Rightarrow x \\approx 707$ meter. $E\'\'(x) = \\frac{10000}{x^3} > 0$: bunnpunkt. Lavest enhetskostnad: $E(707) \\approx 0{,}01(707) + 10 + 7{,}07 \\approx 24{,}1$ kr/m.' }
        ]
      }
    },
    {
      id: 's2-3-3-example-4',
      type: 'example',
      title: 'Korteste avstand',
      problem: `Finn det punktet på parabelen $y = x^2$ som har kortest avstand til punktet $(0, 1)$.`,
      solution: `**Avstanden** fra $(x, x^2)$ til $(0, 1)$ er:
$$d = \\sqrt{x^2 + (x^2 - 1)^2}$$

Det er enklere å minimere $d^2$ (som har minimum på samme sted):
$$D(x) = d^2 = x^2 + (x^2 - 1)^2 = x^2 + x^4 - 2x^2 + 1 = x^4 - x^2 + 1$$

**Deriver:**
$$D'(x) = 4x^3 - 2x = 2x(2x^2 - 1)$$

$D'(x) = 0$: $x = 0$ eller $x^2 = \\frac{1}{2}$, dvs. $x = \\pm \\frac{1}{\\sqrt{2}}$.

**Verifiser med $D''(x) = 12x^2 - 2$:**
$D''(0) = -2 < 0$ (lokalt maks, ikke det vi leter etter)
$D''(\\pm\\frac{1}{\\sqrt{2}}) = 6 - 2 = 4 > 0$ (lokalt min!)

**Svaret:** Punktene $(\\pm\\frac{1}{\\sqrt{2}}, \\frac{1}{2})$ på parabelen har kortest avstand til $(0, 1)$.
Avstanden er $d = \\sqrt{\\frac{1}{2} - \\frac{1}{4} + 1} = \\sqrt{\\frac{3}{4}} = \\frac{\\sqrt{3}}{2} \\approx 0{,}87$.`
    },
    {
      id: 's2-3-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bonde vil innhegne to like store rektangulære beiteområder side om side (med en felles skillevegg). Han har 300 m gjerde. Hvilke dimensjoner gir størst totalt areal?', solution: 'La $x$ = bredde, $y$ = lengde. Gjerde: $3x + 2y = 300 \\Rightarrow y = \\frac{300 - 3x}{2}$. $A = 2xy = 2x \\cdot \\frac{300-3x}{2} = 300x - 3x^2$. $A\'(x) = 300 - 6x = 0 \\Rightarrow x = 50$ m. $y = 75$ m. Maks areal: $A = 2 \\cdot 50 \\cdot 75 = 7500$ m$^2$.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Prisen på en vare er $p = 500 - 5x$ kr, der $x$ er antall solgte enheter (i hundre). Finn antallet som gir størst inntekt.', solution: '$I(x) = px = (500-5x)x = 500x - 5x^2$. $I\'(x) = 500 - 10x = 0 \\Rightarrow x = 50$. $I\'\'(x) = -10 < 0$: toppunkt. Størst inntekt ved $x = 50$ (dvs. 5000 enheter). $I_{\\max} = 12500$ (dvs. 12 500 hundre kr = 1 250 000 kr).' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En lukket sylinder skal ha volum $1000 \\text{ cm}^3$. Finn dimensjonene som gir minst overflate.', solution: 'Overflate: $S = 2\\pi r^2 + 2\\pi rh$. Volum: $\\pi r^2 h = 1000 \\Rightarrow h = \\frac{1000}{\\pi r^2}$. $S(r) = 2\\pi r^2 + \\frac{2000}{r}$. $S\'(r) = 4\\pi r - \\frac{2000}{r^2} = 0 \\Rightarrow r^3 = \\frac{500}{\\pi} \\Rightarrow r = \\sqrt[3]{\\frac{500}{\\pi}} \\approx 5{,}42$ cm. $h = \\frac{1000}{\\pi r^2} = \\frac{1000}{\\pi (\\frac{500}{\\pi})^{2/3}} = 2\\sqrt[3]{\\frac{500}{\\pi}} = 2r \\approx 10{,}84$ cm. Minste overflate når $h = 2r$ (høyden er lik diameteren).' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift har overskuddsfunksjonen $O(x) = -x^3 + 12x^2 - 36x + 20$ (tusen kr), der $x$ er antall tusen enheter produsert. Finn produksjonsmengden som gir størst overskudd.', solution: '$O\'(x) = -3x^2 + 24x - 36 = -3(x^2 - 8x + 12) = -3(x-2)(x-6)$. Stasjonære: $x = 2$ og $x = 6$. $O\'\'(x) = -6x + 24$. $O\'\'(2) = 12 > 0$: bunnpunkt. $O\'\'(6) = -12 < 0$: toppunkt. Størst overskudd ved $x = 6$: $O(6) = -216 + 432 - 216 + 20 = 20$ (tusen kr).' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn det punktet på grafen til $y = \\sqrt{x}$ som har kortest avstand til punktet $(4, 0)$.', solution: '$D(x) = (x-4)^2 + x = x^2 - 7x + 16$ (minimerer $d^2$, $x \\geq 0$). $D\'(x) = 2x - 7 = 0 \\Rightarrow x = 3{,}5$. $D\'\'(x) = 2 > 0$: bunnpunkt. Punktet $(3{,}5, \\sqrt{3{,}5}) \\approx (3{,}5, \\ 1{,}87)$. Avstand: $\\sqrt{0{,}25 + 3{,}5} = \\sqrt{3{,}75} \\approx 1{,}94$.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kjegle er innskrevet i en kule med radius $R$. Finn kjeglevolumet uttrykt ved høyden $h$, og finn hvilken høyde som gir størst kjeglevolumet.', solution: 'La kulens sentrum være i origo. Kjeglen har topp i $(0, R)$ og bunn i $y = R - h$. Bunnradius: $r^2 = R^2 - (R-h)^2 = 2Rh - h^2$. Volum: $V = \\frac{1}{3}\\pi r^2 h = \\frac{\\pi}{3}h(2Rh - h^2) = \\frac{\\pi}{3}(2Rh^2 - h^3)$, for $0 < h < 2R$. $V\'(h) = \\frac{\\pi}{3}(4Rh - 3h^2) = \\frac{\\pi h}{3}(4R - 3h) = 0 \\Rightarrow h = \\frac{4R}{3}$. $V\'\'(h) = \\frac{\\pi}{3}(4R - 6h)$. $V\'\'(\\frac{4R}{3}) = \\frac{\\pi}{3}(4R - 8R) < 0$: toppunkt. Størst volum ved $h = \\frac{4R}{3}$.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et tall og dets kvadrat har sum 12. Finn tallet som gjør produktet av tallet og kvadratet størst mulig.', solution: 'La tallet være $x$. $x + x^2 = 12$ gir ikke mening for optimering. Omformulering: $x + y = 12$. Maks $P = xy^2 = x(12-x)^2$. $P\'(x) = (12-x)^2 - 2x(12-x) = (12-x)(12-3x) = 0$. $x = 4$ (eller $x = 12$). $P(4) = 4 \\cdot 64 = 256$.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et vindu har form som et rektangel med en halvsirkel på toppen. Omkretsen er 6 meter. Finn dimensjonene som gir størst lysinnslipp (størst areal).', solution: 'La $x$ = bredde og $y$ = høyde på rektangelet. Halvdiameter: $r = \\frac{x}{2}$. Omkrets: $x + 2y + \\frac{\\pi x}{2} = 6 \\Rightarrow y = \\frac{6 - x - \\frac{\\pi x}{2}}{2} = 3 - \\frac{x}{2}(1 + \\frac{\\pi}{2})$. Areal: $A = xy + \\frac{\\pi x^2}{8}$. Sett inn og deriver. $A\'(x) = 0$ gir $x = \\frac{6}{2 + \\frac{\\pi}{2} + \\frac{\\pi}{4}} = \\frac{12}{4 + \\pi} \\approx 1{,}68$ m.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Etterspørselen etter en vare er $q = 1000e^{-0{,}02p}$, der $p$ er prisen i kroner. Finn prisen som gir størst inntekt.', solution: '$I(p) = pq = 1000pe^{-0{,}02p}$. $I\'(p) = 1000e^{-0{,}02p}(1 - 0{,}02p) = 0 \\Rightarrow p = 50$ kr. $I\'\'(p) = 1000e^{-0{,}02p}(-0{,}02 - 0{,}02 + 0{,}0004p)$. $I\'\'(50) < 0$: toppunkt. Størst inntekt ved pris 50 kr: $I(50) = 50000e^{-1} \\approx 18\\ 394$ kr.' }
        ]
      }
    },
    {
      id: 's2-3-3-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's2-3-3-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En rektangulær boks uten lokk skal ha volum $4000 \\text{ cm}^3$. Bunnen er et rektangel der lengden er dobbelt så lang som bredden. Finn dimensjonene som gir minst materialforbruk.', solution: 'La $x$ = bredde, $2x$ = lengde, $h$ = høyde. Volum: $2x^2 h = 4000 \\Rightarrow h = \\frac{2000}{x^2}$. Overflate: $S = 2x^2 + 2xh + 2(2x)h = 2x^2 + 6xh = 2x^2 + \\frac{12000}{x}$. $S\'(x) = 4x - \\frac{12000}{x^2} = 0 \\Rightarrow x^3 = 3000 \\Rightarrow x = \\sqrt[3]{3000} \\approx 14{,}4$ cm. Lengde $\\approx 28{,}8$ cm, høyde $= \\frac{2000}{207} \\approx 9{,}6$ cm. $S\'\'(x) = 4 + \\frac{24000}{x^3} > 0$: bunnpunkt.' }
        ]
      }
    },
    {
      id: 's2-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Optimeringsprosessen:**
1. Forstå problemet og identifiser hva som skal optimeres
2. Innfør variabler og sett opp funksjonsuttrykk
3. Bruk begrensninger til å redusere til én variabel
4. Deriver, sett $f'(x) = 0$, og løs
5. Verifiser med $f''(x)$ eller fortegnslinje
6. Svar med riktige enheter

**Vanlige optimeringsproblemer i S2:**
- Geometri: areal, volum, overflate
- Økonomi: inntekt, kostnad, overskudd
- Avstand: korteste avstand til en kurve
- Emballasje: minst materiale for gitt volum`
    },
    {
      id: 's2-3-3-note-1',
      type: 'note',
      content: `**Typiske feil i optimeringsproblemer:**

- Glemme å sjekke at løsningen ligger innenfor definisjonsmengden
- Ikke verifisere at det er maks og ikke min (eller omvendt)
- Glemme endepunktene - noen ganger er maks/min i et endepunkt av det tillatte intervallet
- Blande enheter (f.eks. cm og m)
- Glemme å svare på det som spørres om i oppgaven`
    }
  ],
  exercises: []
};

export const S2_KAP3_CHAPTERS: TextbookChapter[] = [CHAPTER_S2_3_1, CHAPTER_S2_3_2, CHAPTER_S2_3_3];
