/**
 * Tekstbok kapitler for s2 - Kapittel 4 (Sannsynlighetsfordelinger)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_S2_4_1: TextbookChapter = {
  id: 's2-4-1',
  courseId: 's2',
  chapterNumber: '4.1',
  title: 'Sannsynlighetsfordelinger',
  description: 'Lær om diskrete stokastiske variabler, sannsynlighetsfordelinger, forventningsverdi, varians og standardavvik.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne forventningsverdi, varians og standardavvik til stokastiske variabler',
    'bruke sannsynlighetsfordelinger i modellering'
  ],
  content: [
    {
      id: 's2-4-1-intro',
      type: 'text',
      content: `## Stokastiske variabler

I mange situasjoner er utfallet av et forsøk et tall - for eksempel antall riktige på en prøve, antall kunder i en butikk, eller gevinsten i et spill. Slike tallverdier som er bestemt av tilfeldigheter, kalles **stokastiske variabler**.

En stokastisk variabel er en variabel som kan ta ulike verdier med ulike sannsynligheter. Vi bruker vanligvis store bokstaver ($X$, $Y$, $Z$) for stokastiske variabler.`
    },
    {
      id: 's2-4-1-def-1',
      type: 'definition',
      title: 'Diskret stokastisk variabel',
      content: `En **diskret stokastisk variabel** $X$ er en variabel som kan ta et endelig (eller tellbart) antall verdier $x_1, x_2, \\ldots, x_n$.

**Sannsynlighetsfordelingen** til $X$ er en tabell eller formel som angir sannsynligheten $P(X = x_i)$ for hver verdi $x_i$.

**Krav:**
1. $0 \\leq P(X = x_i) \\leq 1$ for alle $i$
2. $\\sum_{i=1}^{n} P(X = x_i) = 1$ (summen av alle sannsynligheter er 1)`
    },
    {
      id: 's2-4-1-example-1',
      type: 'example',
      title: 'Sannsynlighetsfordeling for terningkast',
      problem: `En vanlig terning kastes. La $X$ være antall øyne. Sett opp sannsynlighetsfordelingen.`,
      solution: `$X$ kan ta verdiene $1, 2, 3, 4, 5, 6$.

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 |
|-----|---|---|---|---|---|---|
| $P(X = x)$ | $\\frac{1}{6}$ | $\\frac{1}{6}$ | $\\frac{1}{6}$ | $\\frac{1}{6}$ | $\\frac{1}{6}$ | $\\frac{1}{6}$ |

**Sjekk:** $6 \\cdot \\frac{1}{6} = 1$ ✓

Dette er en **uniform fordeling** - alle utfall er like sannsynlige.`
    },
    {
      id: 's2-4-1-def-2',
      type: 'definition',
      title: 'Forventningsverdi',
      content: `**Forventningsverdien** (eller gjennomsnittsverdien) til en diskret stokastisk variabel $X$ er:

$$E(X) = \\mu = \\sum_{i=1}^{n} x_i \\cdot P(X = x_i)$$

Forventningsverdien er det **vektede gjennomsnittet** av alle mulige verdier, der vektene er sannsynlighetene.

**Tolkning:** Hvis vi gjentar forsøket mange ganger, vil gjennomsnittet av resultatene nærme seg $E(X)$.`
    },
    {
      id: 's2-4-1-example-2',
      type: 'example',
      title: 'Forventningsverdi',
      problem: `Et lotteri har følgende gevinster:

| Gevinst (kr) | 0 | 50 | 100 | 500 |
|--------|---|-----|-----|-----|
| Sannsynlighet | 0,60 | 0,25 | 0,10 | 0,05 |

Et lodd koster 40 kr. Hva er forventet gevinst? Er lotteriet «rettferdig»?`,
      solution: `La $X$ = gevinst.

$$E(X) = 0 \\cdot 0{,}60 + 50 \\cdot 0{,}25 + 100 \\cdot 0{,}10 + 500 \\cdot 0{,}05$$
$$= 0 + 12{,}50 + 10 + 25 = 47{,}50 \\text{ kr}$$

**Forventet nettogevinst:** $47{,}50 - 40 = 7{,}50$ kr.

Lotteriet er ikke «rettferdig» (forventet gevinst $\\neq$ pris). I gjennomsnitt tjener spilleren 7,50 kr per lodd. (I praksis har arrangøren et underskudd og ville satt prisen høyere eller justert sannsynlighetene.)`
    },
    {
      id: 's2-4-1-theorem-1',
      type: 'theorem',
      title: 'Regneregler for forventningsverdi',
      content: `For stokastiske variabler $X$ og $Y$ og konstanter $a$ og $b$:

$$E(aX + b) = aE(X) + b$$

$$E(X + Y) = E(X) + E(Y)$$

Forventningsverdien er **lineær** - vi kan flytte konstanter ut og splitte summer.`
    },
    {
      id: 's2-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'To mynter kastes. La $X$ være antall mynt. Sett opp sannsynlighetsfordelingen til $X$.', solution: '$X \\in \\{0, 1, 2\\}$. $P(X=0) = \\frac{1}{4}$, $P(X=1) = \\frac{2}{4} = \\frac{1}{2}$, $P(X=2) = \\frac{1}{4}$.' },
          { label: 'b', task: 'Finn $E(X)$.', solution: '$E(X) = 0 \\cdot \\frac{1}{4} + 1 \\cdot \\frac{1}{2} + 2 \\cdot \\frac{1}{4} = 0 + \\frac{1}{2} + \\frac{1}{2} = 1$' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn forventningsverdien til $X$ med fordeling: $P(X=1) = 0{,}3$, $P(X=2) = 0{,}5$, $P(X=3) = 0{,}2$.', solution: '$E(X) = 1 \\cdot 0{,}3 + 2 \\cdot 0{,}5 + 3 \\cdot 0{,}2 = 0{,}3 + 1 + 0{,}6 = 1{,}9$' },
          { label: 'b', task: 'Sjekk at sannsynlighetene summerer til 1.', solution: '$0{,}3 + 0{,}5 + 0{,}2 = 1{,}0$ ✓' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et spill gir gevinsten $2X + 10$ kroner, der $X$ har forventningsverdi $E(X) = 3$. Hva er forventet gevinst?', solution: '$E(2X + 10) = 2E(X) + 10 = 2 \\cdot 3 + 10 = 16$ kr.' }
        ]
      }
    },
    {
      id: 's2-4-1-def-3',
      type: 'definition',
      title: 'Varians og standardavvik',
      content: `**Variansen** til en diskret stokastisk variabel $X$ er:

$$\\text{Var}(X) = \\sigma^2 = E[(X - \\mu)^2] = \\sum_{i=1}^{n} (x_i - \\mu)^2 \\cdot P(X = x_i)$$

**Alternativ beregningsformel:**
$$\\text{Var}(X) = E(X^2) - [E(X)]^2$$

der $E(X^2) = \\sum x_i^2 \\cdot P(X = x_i)$.

**Standardavviket** er:
$$\\sigma = \\text{SD}(X) = \\sqrt{\\text{Var}(X)}$$

**Tolkning:**
- Variansen måler **spredningen** i fordelingen
- Stor varians = stor usikkerhet / stor variasjon
- Standardavviket har **samme enhet** som $X$ (variansen har enheten i andre)`
    },
    {
      id: 's2-4-1-example-3',
      type: 'example',
      title: 'Beregne varians og standardavvik',
      problem: `En terning kastes. Finn variansen og standardavviket til antall øyne $X$.`,
      solution: `**Steg 1:** Vi har allerede $E(X)$:
$$E(X) = 1 \\cdot \\frac{1}{6} + 2 \\cdot \\frac{1}{6} + \\cdots + 6 \\cdot \\frac{1}{6} = \\frac{21}{6} = 3{,}5$$

**Steg 2:** Finn $E(X^2)$:
$$E(X^2) = 1^2 \\cdot \\frac{1}{6} + 2^2 \\cdot \\frac{1}{6} + 3^2 \\cdot \\frac{1}{6} + 4^2 \\cdot \\frac{1}{6} + 5^2 \\cdot \\frac{1}{6} + 6^2 \\cdot \\frac{1}{6}$$
$$= \\frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\frac{91}{6} \\approx 15{,}17$$

**Steg 3:** Bruk formelen:
$$\\text{Var}(X) = E(X^2) - [E(X)]^2 = \\frac{91}{6} - \\left(\\frac{7}{2}\\right)^2 = \\frac{91}{6} - \\frac{49}{4} = \\frac{182 - 147}{12} = \\frac{35}{12} \\approx 2{,}92$$

**Steg 4:** Standardavvik:
$$\\sigma = \\sqrt{\\frac{35}{12}} \\approx 1{,}71$$`
    },
    {
      id: 's2-4-1-theorem-2',
      type: 'theorem',
      title: 'Regneregler for varians',
      content: `For en stokastisk variabel $X$ og konstanter $a$ og $b$:

$$\\text{Var}(aX + b) = a^2 \\cdot \\text{Var}(X)$$

Merk: Konstanten $b$ påvirker **ikke** variansen (den forskyver bare fordelingen, men endrer ikke spredningen).

For **uavhengige** stokastiske variabler $X$ og $Y$:
$$\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$$`
    },
    {
      id: 's2-4-1-example-4',
      type: 'example',
      title: 'Regneregler i praksis',
      problem: `$X$ har $E(X) = 5$ og $\\text{Var}(X) = 4$. Finn $E(Y)$ og $\\text{Var}(Y)$ der $Y = 3X - 2$.`,
      solution: `**Forventningsverdi:**
$$E(Y) = E(3X - 2) = 3E(X) - 2 = 3 \\cdot 5 - 2 = 13$$

**Varians:**
$$\\text{Var}(Y) = \\text{Var}(3X - 2) = 3^2 \\cdot \\text{Var}(X) = 9 \\cdot 4 = 36$$

**Standardavvik:**
$$\\text{SD}(Y) = \\sqrt{36} = 6$$`
    },
    {
      id: 's2-4-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\text{Var}(X)$ for fordelingen: $P(X=0) = 0{,}5$, $P(X=1) = 0{,}3$, $P(X=2) = 0{,}2$.', solution: '$E(X) = 0 \\cdot 0{,}5 + 1 \\cdot 0{,}3 + 2 \\cdot 0{,}2 = 0{,}7$. $E(X^2) = 0 + 1 \\cdot 0{,}3 + 4 \\cdot 0{,}2 = 1{,}1$. $\\text{Var}(X) = 1{,}1 - 0{,}49 = 0{,}61$.' },
          { label: 'b', task: 'Finn standardavviket $\\sigma$.', solution: '$\\sigma = \\sqrt{0{,}61} \\approx 0{,}78$' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'To uavhengige terninger kastes. La $S = X_1 + X_2$ (summen). Finn $E(S)$ og $\\text{Var}(S)$.', solution: '$E(S) = E(X_1) + E(X_2) = 3{,}5 + 3{,}5 = 7$. $\\text{Var}(S) = \\text{Var}(X_1) + \\text{Var}(X_2) = \\frac{35}{12} + \\frac{35}{12} = \\frac{35}{6} \\approx 5{,}83$. $\\text{SD}(S) = \\sqrt{\\frac{35}{6}} \\approx 2{,}42$.' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En aksje gir avkastningen $X$ med $E(X) = 8\\%$ og $\\text{SD}(X) = 12\\%$. Du investerer 100 000 kr. La $Y$ = beløpet etter ett år. Finn $E(Y)$ og $\\text{SD}(Y)$.', solution: '$Y = 100000(1 + X/100) = 1000X + 100000$. $E(Y) = 1000 \\cdot 8 + 100000 = 108000$ kr. $\\text{SD}(Y) = 1000 \\cdot 12 = 12000$ kr.' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et forsikringsselskap tilbyr en forsikring som koster 1200 kr. Med sannsynlighet 0,02 utbetales 50 000 kr, med sannsynlighet 0,005 utbetales 100 000 kr, ellers utbetales ingenting. Hva er selskapets forventede fortjeneste per forsikring?', solution: 'La $X$ = utbetaling. $E(X) = 50000 \\cdot 0{,}02 + 100000 \\cdot 0{,}005 = 1000 + 500 = 1500$ kr. Forventet fortjeneste: $1200 - 1500 = -300$ kr (tap!). Selskapet bør heve prisen til over 1500 kr.' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Tabellen viser $X$ = antall kunder i en butikk per time: $P(X=0)=0{,}1$, $P(X=1)=0{,}3$, $P(X=2)=0{,}3$, $P(X=3)=0{,}2$, $P(X=4)=0{,}1$. Finn $E(X)$, $\\text{Var}(X)$ og $\\text{SD}(X)$.', solution: '$E(X) = 0(0{,}1) + 1(0{,}3) + 2(0{,}3) + 3(0{,}2) + 4(0{,}1) = 0 + 0{,}3 + 0{,}6 + 0{,}6 + 0{,}4 = 1{,}9$. $E(X^2) = 0 + 0{,}3 + 1{,}2 + 1{,}8 + 1{,}6 = 4{,}9$. $\\text{Var}(X) = 4{,}9 - 1{,}9^2 = 4{,}9 - 3{,}61 = 1{,}29$. $\\text{SD}(X) = \\sqrt{1{,}29} \\approx 1{,}14$.' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at $\\text{Var}(X) = E(X^2) - [E(X)]^2$ ved å utvide definisjonen $\\text{Var}(X) = E[(X-\\mu)^2]$.', solution: '$\\text{Var}(X) = E[(X-\\mu)^2] = E[X^2 - 2\\mu X + \\mu^2] = E(X^2) - 2\\mu E(X) + \\mu^2 = E(X^2) - 2\\mu^2 + \\mu^2 = E(X^2) - \\mu^2 = E(X^2) - [E(X)]^2$.' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Du har to investeringsalternativer. A: $E(X) = 10\\%$, $\\sigma = 5\\%$. B: $E(Y) = 15\\%$, $\\sigma = 15\\%$. Beregn variasjonskoeffisienten $CV = \\frac{\\sigma}{\\mu}$ for begge. Hvilken investering har relativt sett minst risiko?', solution: '$CV_A = \\frac{5}{10} = 0{,}5$. $CV_B = \\frac{15}{15} = 1{,}0$. Investering A har lavest variasjonskoeffisient og dermed relativt sett minst risiko per prosent forventet avkastning.' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En stokastisk variabel $X$ tar verdien $-1$ med sannsynlighet $p$ og verdien $1$ med sannsynlighet $1-p$. Finn $p$ slik at $\\text{Var}(X) = 1$.', solution: '$E(X) = -p + (1-p) = 1-2p$. $E(X^2) = p + (1-p) = 1$. $\\text{Var}(X) = 1 - (1-2p)^2 = 1 - 1 + 4p - 4p^2 = 4p(1-p) = 1$. $4p^2 - 4p + 1 = 0 \\Rightarrow (2p-1)^2 = 0 \\Rightarrow p = \\frac{1}{2}$.' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: '$X$ har $E(X) = 4$ og $\\text{Var}(X) = 9$. Finn $E(3X + 5)$ og $\\text{Var}(3X + 5)$.', solution: '$E(3X+5) = 3 \\cdot 4 + 5 = 17$. $\\text{Var}(3X+5) = 9 \\cdot 9 = 81$. $\\text{SD}(3X+5) = 9$.' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I et spill kaster du en terning. Du vinner $X^2$ kr, der $X$ er antall øyne. Innsatsen er 15 kr. Finn forventet nettogevinst.', solution: '$E(X^2) = \\frac{1+4+9+16+25+36}{6} = \\frac{91}{6} \\approx 15{,}17$ kr. Forventet nettogevinst: $15{,}17 - 15 = 0{,}17$ kr. Spillet er omtrent «rettferdig».' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Du kaster to terninger og beregner differansen $D = |X_1 - X_2|$. Sett opp sannsynlighetsfordelingen til $D$ og finn $E(D)$.', solution: '$D \\in \\{0,1,2,3,4,5\\}$. $P(D=0) = \\frac{6}{36}$, $P(D=1) = \\frac{10}{36}$, $P(D=2) = \\frac{8}{36}$, $P(D=3) = \\frac{6}{36}$, $P(D=4) = \\frac{4}{36}$, $P(D=5) = \\frac{2}{36}$. $E(D) = 0 \\cdot \\frac{6}{36} + 1 \\cdot \\frac{10}{36} + 2 \\cdot \\frac{8}{36} + 3 \\cdot \\frac{6}{36} + 4 \\cdot \\frac{4}{36} + 5 \\cdot \\frac{2}{36} = \\frac{70}{36} = \\frac{35}{18} \\approx 1{,}94$.' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En portefølje består av to uavhengige aksjer. Aksje 1: $E(R_1) = 8\\%$, $\\sigma_1 = 10\\%$. Aksje 2: $E(R_2) = 12\\%$, $\\sigma_2 = 20\\%$. Du investerer 60% i aksje 1 og 40% i aksje 2. Finn forventet avkastning og standardavvik for porteføljen $R = 0{,}6R_1 + 0{,}4R_2$.', solution: '$E(R) = 0{,}6 \\cdot 8 + 0{,}4 \\cdot 12 = 4{,}8 + 4{,}8 = 9{,}6\\%$. $\\text{Var}(R) = 0{,}36 \\cdot 100 + 0{,}16 \\cdot 400 = 36 + 64 = 100$. $\\text{SD}(R) = \\sqrt{100} = 10\\%$.' }
        ]
      }
    },
    {
      id: 's2-4-1-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's2-4-1-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'La $X$ være antall defekte produkter i en pakke med 10. Fordelingen er: $P(X=0)=0{,}50$, $P(X=1)=0{,}30$, $P(X=2)=0{,}15$, $P(X=3)=0{,}05$. Beregn $E(X)$ og $\\sigma$.', solution: '$E(X) = 0(0{,}5) + 1(0{,}3) + 2(0{,}15) + 3(0{,}05) = 0{,}75$. $E(X^2) = 0 + 0{,}3 + 0{,}6 + 0{,}45 = 1{,}35$. $\\text{Var}(X) = 1{,}35 - 0{,}5625 = 0{,}7875$. $\\sigma \\approx 0{,}89$.' }
        ]
      }
    },
    {
      id: 's2-4-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Sentrale begreper:**
- **Stokastisk variabel** $X$: variabel styrt av tilfeldigheter
- **Sannsynlighetsfordeling:** oversikt over $P(X = x)$ for alle verdier
- **Forventningsverdi:** $E(X) = \\sum x_i P(X = x_i)$ - «langtidsgjennomsnittet»
- **Varians:** $\\text{Var}(X) = E(X^2) - [E(X)]^2$ - mål på spredning
- **Standardavvik:** $\\sigma = \\sqrt{\\text{Var}(X)}$ - spredning i samme enhet som $X$

**Regneregler:**
- $E(aX+b) = aE(X) + b$
- $\\text{Var}(aX+b) = a^2 \\text{Var}(X)$
- For uavhengige $X, Y$: $\\text{Var}(X+Y) = \\text{Var}(X) + \\text{Var}(Y)$`
    },
    {
      id: 's2-4-1-note-1',
      type: 'note',
      content: `**Husk på eksamen:** Bruk alltid den alternative variansformelen $\\text{Var}(X) = E(X^2) - [E(X)]^2$. Den er raskere å beregne enn definisjonen $\\text{Var}(X) = E[(X-\\mu)^2]$ fordi du slipper å beregne avvik for hver verdi.`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_4_2: TextbookChapter = {
  id: 's2-4-2',
  courseId: 's2',
  chapterNumber: '4.2',
  title: 'Hypergeometrisk og binomisk fordeling',
  description: 'Lær om hypergeometrisk fordeling (trekking uten tilbakelegging) og binomisk fordeling (uavhengige forsøk med to utfall).',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke binomisk og hypergeometrisk fordeling i modellering og beregninger',
    'vurdere når de ulike fordelingene er hensiktsmessige'
  ],
  content: [
    {
      id: 's2-4-2-intro',
      type: 'text',
      content: `## To viktige fordelinger

I dette kapittelet lærer vi om to av de viktigste diskrete sannsynlighetsfordelingene:

1. **Hypergeometrisk fordeling** - for trekking **uten tilbakelegging** fra en endelig populasjon
2. **Binomisk fordeling** - for gjentatte **uavhengige** forsøk med to mulige utfall

Disse fordelingene brukes i svært mange praktiske situasjoner og er sentrale på S2-eksamen.`
    },
    {
      id: 's2-4-2-def-1',
      type: 'definition',
      title: 'Hypergeometrisk fordeling',
      content: `Vi trekker $n$ objekter **uten tilbakelegging** fra en populasjon med $N$ objekter, der $M$ er «suksesser» og $N - M$ er «fiaskoer».

La $X$ = antall suksesser blant de $n$ som trekkes. Da er:

$$P(X = k) = \\frac{\\binom{M}{k} \\cdot \\binom{N-M}{n-k}}{\\binom{N}{n}}$$

der $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ er binomialkoeffisienten.

**Forventningsverdi og varians:**
$$E(X) = n \\cdot \\frac{M}{N}$$
$$\\text{Var}(X) = n \\cdot \\frac{M}{N} \\cdot \\frac{N-M}{N} \\cdot \\frac{N-n}{N-1}$$`
    },
    {
      id: 's2-4-2-example-1',
      type: 'example',
      title: 'Hypergeometrisk fordeling i praksis',
      problem: `I en klasse med 30 elever er 12 jenter. Det trekkes tilfeldig ut 5 elever til en komite. Hva er sannsynligheten for at nøyaktig 2 av de 5 er jenter?`,
      solution: `Vi har:
- $N = 30$ (totalt antall elever)
- $M = 12$ (antall jenter)
- $n = 5$ (antall som trekkes)
- $k = 2$ (ønsket antall jenter)

$$P(X = 2) = \\frac{\\binom{12}{2} \\cdot \\binom{18}{3}}{\\binom{30}{5}}$$

**Beregner binomialkoeffisientene:**
$$\\binom{12}{2} = \\frac{12!}{2! \\cdot 10!} = \\frac{12 \\cdot 11}{2} = 66$$

$$\\binom{18}{3} = \\frac{18!}{3! \\cdot 15!} = \\frac{18 \\cdot 17 \\cdot 16}{6} = 816$$

$$\\binom{30}{5} = \\frac{30!}{5! \\cdot 25!} = 142506$$

$$P(X = 2) = \\frac{66 \\cdot 816}{142506} = \\frac{53856}{142506} \\approx 0{,}378$$

**Svar:** Sannsynligheten er ca. 37,8%.

**Forventningsverdi:** $E(X) = 5 \\cdot \\frac{12}{30} = 2$ jenter.`
    },
    {
      id: 's2-4-2-text-overgang',
      type: 'text',
      content: `## Fra hypergeometrisk til binomisk

Hypergeometrisk fordeling gjelder for trekking **uten tilbakelegging**, der sannsynligheten endrer seg fra trekning til trekning. Men dersom populasjonen er **svært stor** sammenlignet med utvalget, blir endringen i sannsynlighet neglisjerbar.

**Tommelfingerregel:** Hvis $n < 0{,}05 \\cdot N$ (utvalget er mindre enn 5% av populasjonen), kan vi bruke binomisk fordeling som approksimasjon.

Binomisk fordeling gjelder **eksakt** når vi trekker **med tilbakelegging** eller gjør uavhengige forsøk.`
    },
    {
      id: 's2-4-2-def-2',
      type: 'definition',
      title: 'Binomisk fordeling',
      content: `Et **binomisk forsøk** har følgende kjennetegn:
1. Vi gjør $n$ **uavhengige** forsøk
2. Hvert forsøk har to utfall: «suksess» (sannsynlighet $p$) eller «fiasko» (sannsynlighet $1-p$)
3. Sannsynligheten $p$ er den **samme** i hvert forsøk

La $X$ = antall suksesser. Da er $X$ **binomisk fordelt**: $X \\sim B(n, p)$.

**Punktsannsynligheten:**
$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, 2, \\ldots, n$$

**Forventningsverdi og varians:**
$$E(X) = np$$
$$\\text{Var}(X) = np(1-p)$$
$$\\text{SD}(X) = \\sqrt{np(1-p)}$$`
    },
    {
      id: 's2-4-2-example-2',
      type: 'example',
      title: 'Binomisk fordeling - flervalgsoppgave',
      problem: `En flervalgstest har 10 spørsmål med 4 alternativer. En elev gjetter tilfeldig på alle spørsmålene. Finn sannsynligheten for at eleven har:
a) Nøyaktig 3 riktige
b) Minst 5 riktige (som er bestått)`,
      solution: `$X$ = antall riktige. $X \\sim B(10, 0{,}25)$.

**a) $P(X = 3)$:**
$$P(X = 3) = \\binom{10}{3} \\cdot 0{,}25^3 \\cdot 0{,}75^7$$
$$= 120 \\cdot 0{,}015625 \\cdot 0{,}13348 \\approx 0{,}250$$

**b) $P(X \\geq 5)$:**
$$P(X \\geq 5) = \\sum_{k=5}^{10} \\binom{10}{k} \\cdot 0{,}25^k \\cdot 0{,}75^{10-k}$$

Vi beregner ledd for ledd:
$$P(X=5) = \\binom{10}{5}(0{,}25)^5(0{,}75)^5 = 252 \\cdot 0{,}000977 \\cdot 0{,}2373 \\approx 0{,}0584$$
$$P(X=6) \\approx 0{,}0162$$
$$P(X=7) \\approx 0{,}0031$$
$$P(X \\geq 8) \\approx 0{,}0004$$

$$P(X \\geq 5) \\approx 0{,}0584 + 0{,}0162 + 0{,}0031 + 0{,}0004 = 0{,}078$$

**Forventet antall riktige:** $E(X) = 10 \\cdot 0{,}25 = 2{,}5$ (langt fra bestått!).

**Svar:** Det er ca. 25% sjanse for nøyaktig 3 riktige, og bare ca. 7,8% sjanse for å bestå ved ren gjetting.`
    },
    {
      id: 's2-4-2-example-3',
      type: 'example',
      title: 'Hypergeometrisk vs. binomisk',
      problem: `En boks inneholder 100 lyspærer, og 10 av dem er defekte. Vi trekker 5 pærer. Beregn $P(X = 1)$ med:
a) Hypergeometrisk fordeling (uten tilbakelegging)
b) Binomisk approksimasjon`,
      solution: `**a) Hypergeometrisk:**
$N = 100$, $M = 10$, $n = 5$, $k = 1$.
$$P(X = 1) = \\frac{\\binom{10}{1}\\binom{90}{4}}{\\binom{100}{5}} = \\frac{10 \\cdot 2555190}{75287520} \\approx 0{,}3394$$

**b) Binomisk approksimasjon:**
$p = \\frac{10}{100} = 0{,}1$, $n = 5$.
$$P(X = 1) = \\binom{5}{1}(0{,}1)^1(0{,}9)^4 = 5 \\cdot 0{,}1 \\cdot 0{,}6561 = 0{,}3281$$

**Sammenligning:** Den binomiske approksimasjonen ($0{,}328$) er nær den eksakte verdien ($0{,}339$). Siden $n = 5 = 5\\%$ av $N = 100$, er vi akkurat på grensen av tommelfingerregelen.`
    },
    {
      id: 's2-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\binom{8}{3}$.', solution: '$\\binom{8}{3} = \\frac{8!}{3! \\cdot 5!} = \\frac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1} = 56$' },
          { label: 'b', task: 'Beregn $\\binom{10}{2}$ og $\\binom{10}{8}$. Hva legger du merke til?', solution: '$\\binom{10}{2} = \\frac{10 \\cdot 9}{2} = 45$. $\\binom{10}{8} = \\frac{10!}{8! \\cdot 2!} = 45$. De er like! Generelt: $\\binom{n}{k} = \\binom{n}{n-k}$.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kortstokk har 52 kort. Du trekker 5 kort. Hva er sannsynligheten for nøyaktig 2 ess? (Hypergeometrisk)', solution: '$P(X=2) = \\frac{\\binom{4}{2}\\binom{48}{3}}{\\binom{52}{5}} = \\frac{6 \\cdot 17296}{2598960} \\approx 0{,}0399 \\approx 4\\%$' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En mynt kastes 6 ganger. La $X$ = antall mynt. Finn $P(X = 4)$.', solution: '$X \\sim B(6, 0{,}5)$. $P(X=4) = \\binom{6}{4}(0{,}5)^4(0{,}5)^2 = 15 \\cdot \\frac{1}{64} = \\frac{15}{64} \\approx 0{,}234$.' },
          { label: 'b', task: 'Finn $E(X)$ og $\\text{SD}(X)$.', solution: '$E(X) = 6 \\cdot 0{,}5 = 3$. $\\text{Var}(X) = 6 \\cdot 0{,}5 \\cdot 0{,}5 = 1{,}5$. $\\text{SD}(X) = \\sqrt{1{,}5} \\approx 1{,}22$.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En terning kastes 12 ganger. La $X$ = antall seksere. Finn $P(X = 0)$ og $P(X \\geq 1)$.', solution: '$X \\sim B(12, \\frac{1}{6})$. $P(X=0) = (\\frac{5}{6})^{12} \\approx 0{,}112$. $P(X \\geq 1) = 1 - P(X=0) = 1 - 0{,}112 = 0{,}888$.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en eske med 20 kuler er 5 røde og 15 blå. Du trekker 4 kuler uten tilbakelegging. Finn $P(X = 2)$ der $X$ er antall røde.', solution: '$P(X=2) = \\frac{\\binom{5}{2}\\binom{15}{2}}{\\binom{20}{4}} = \\frac{10 \\cdot 105}{4845} = \\frac{1050}{4845} \\approx 0{,}217$' },
          { label: 'b', task: 'Finn $E(X)$.', solution: '$E(X) = 4 \\cdot \\frac{5}{20} = 1$.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et firma produserer skruer, og 3% er defekte. En pakke inneholder 20 skruer. Hva er sannsynligheten for at pakken inneholder minst én defekt skrue?', solution: '$X \\sim B(20, 0{,}03)$. $P(X \\geq 1) = 1 - P(X=0) = 1 - (0{,}97)^{20} = 1 - 0{,}5438 = 0{,}456$. Ca. 46% sjanse for minst én defekt.' },
          { label: 'b', task: 'Hva er forventet antall defekte skruer per pakke?', solution: '$E(X) = 20 \\cdot 0{,}03 = 0{,}6$ skruer.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: '80% av kundehenvendelsene til en nettbutikk fører til salg. Av de neste 8 henvendelsene, finn sannsynligheten for at nøyaktig 6 fører til salg.', solution: '$X \\sim B(8, 0{,}8)$. $P(X=6) = \\binom{8}{6}(0{,}8)^6(0{,}2)^2 = 28 \\cdot 0{,}2621 \\cdot 0{,}04 \\approx 0{,}294$.' },
          { label: 'b', task: 'Finn sannsynligheten for at alle 8 fører til salg.', solution: '$P(X=8) = (0{,}8)^8 \\approx 0{,}168$.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kvalitetskontroll plukker ut 10 produkter fra et parti med 200 produkter, der 20 er defekte. Bør vi bruke hypergeometrisk eller binomisk fordeling? Begrunn.', solution: 'Siden $n = 10$ og $N = 200$, er $\\frac{n}{N} = 5\\%$. Vi er akkurat på grensen. Korrekt er hypergeometrisk (uten tilbakelegging), men binomisk med $p = 0{,}10$ gir en god approksimasjon.' },
          { label: 'b', task: 'Beregn $P(X = 0)$ med begge metoder og sammenlign.', solution: 'Hyper: $P(X=0) = \\frac{\\binom{20}{0}\\binom{180}{10}}{\\binom{200}{10}} \\approx 0{,}327$. Binom: $P(X=0) = (0{,}9)^{10} = 0{,}349$. Forskjellen er liten (ca. 2 prosentpoeng).' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at $E(X) = np$ for $X \\sim B(n, p)$ ved å bruke definisjonen $E(X) = \\sum_{k=0}^n k \\binom{n}{k} p^k (1-p)^{n-k}$.', solution: '$E(X) = \\sum_{k=1}^n k \\frac{n!}{k!(n-k)!} p^k q^{n-k} = np \\sum_{k=1}^n \\frac{(n-1)!}{(k-1)!(n-k)!} p^{k-1} q^{n-k}$. La $j = k-1$ og $m = n-1$: $= np \\sum_{j=0}^m \\binom{m}{j} p^j q^{m-j} = np \\cdot (p+q)^m = np \\cdot 1 = np$.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Lotto: 7 tall trekkes fra 34. Du har 7 tall. Finn sannsynligheten for å få nøyaktig 4 riktige.', solution: '$P(X=4) = \\frac{\\binom{7}{4}\\binom{27}{3}}{\\binom{34}{7}} = \\frac{35 \\cdot 2925}{5379616} = \\frac{102375}{5379616} \\approx 0{,}019 \\approx 1{,}9\\%$.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn den mest sannsynlige verdien (modus) av $X \\sim B(10, 0{,}3)$. Beregn $P(X = k)$ for $k = 2, 3, 4$ og sammenlign.', solution: '$P(X=2) = \\binom{10}{2}(0{,}3)^2(0{,}7)^8 = 45 \\cdot 0{,}09 \\cdot 0{,}0576 \\approx 0{,}233$. $P(X=3) = \\binom{10}{3}(0{,}3)^3(0{,}7)^7 = 120 \\cdot 0{,}027 \\cdot 0{,}0824 \\approx 0{,}267$. $P(X=4) = 210 \\cdot 0{,}0081 \\cdot 0{,}1176 \\approx 0{,}200$. Modus er $k = 3$. (Generelt: modus $\\approx \\lfloor (n+1)p \\rfloor$.)' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En medikamentstudie viser at 70% av pasientene responderer positivt. Av 15 pasienter, finn $P(X \\geq 12)$.', solution: '$X \\sim B(15, 0{,}7)$. $P(X=12) = \\binom{15}{12}(0{,}7)^{12}(0{,}3)^3 = 455 \\cdot 0{,}01384 \\cdot 0{,}027 \\approx 0{,}170$. $P(X=13) = 105 \\cdot 0{,}00968 \\cdot 0{,}09 \\approx 0{,}092$. $P(X=14) = 15 \\cdot 0{,}00678 \\cdot 0{,}3 \\approx 0{,}031$. $P(X=15) = 0{,}7^{15} \\approx 0{,}005$. $P(X \\geq 12) \\approx 0{,}170 + 0{,}092 + 0{,}031 + 0{,}005 = 0{,}298 \\approx 30\\%$.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: '$X \\sim B(20, 0{,}4)$. Finn $E(X)$, $\\text{Var}(X)$ og $\\text{SD}(X)$.', solution: '$E(X) = 20 \\cdot 0{,}4 = 8$. $\\text{Var}(X) = 20 \\cdot 0{,}4 \\cdot 0{,}6 = 4{,}8$. $\\text{SD}(X) = \\sqrt{4{,}8} \\approx 2{,}19$.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en populasjon med 50 dyr er 15 merket. En forsker fanger 10 dyr tilfeldig. Finn sannsynligheten for at nøyaktig 3 er merket, og beregn $E(X)$ og $\\text{SD}(X)$.', solution: '$P(X=3) = \\frac{\\binom{15}{3}\\binom{35}{7}}{\\binom{50}{10}} = \\frac{455 \\cdot 6724520}{10272278170} \\approx 0{,}298$. $E(X) = 10 \\cdot \\frac{15}{50} = 3$. $\\text{Var}(X) = 10 \\cdot \\frac{15}{50} \\cdot \\frac{35}{50} \\cdot \\frac{40}{49} = 3 \\cdot 0{,}7 \\cdot \\frac{40}{49} = 1{,}714$. $\\text{SD}(X) \\approx 1{,}31$.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Hvor mange ganger må du kaste en terning for at sannsynligheten for minst én sekser skal være over 90%?', solution: '$P(\\text{minst 1 sekser}) = 1 - (\\frac{5}{6})^n > 0{,}90$. $(\\frac{5}{6})^n < 0{,}10$. $n \\ln(\\frac{5}{6}) < \\ln(0{,}10)$. $n > \\frac{\\ln 0{,}10}{\\ln(5/6)} = \\frac{-2{,}303}{-0{,}1823} \\approx 12{,}6$. Altså $n \\geq 13$ kast.' }
        ]
      }
    },
    {
      id: 's2-4-2-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's2-4-2-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Avgjør for hvert tilfelle om det er hypergeometrisk eller binomisk fordeling: (i) Trekke 5 kort fra en kortstokk. (ii) Kaste en mynt 10 ganger. (iii) Velge 3 elever fra en klasse med 25.', solution: '(i) Hypergeometrisk (uten tilbakelegging, endelig populasjon). (ii) Binomisk (uavhengige forsøk, fast $p = 0{,}5$). (iii) Hypergeometrisk (uten tilbakelegging fra endelig klasse).' }
        ]
      }
    },
    {
      id: 's2-4-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

| | Hypergeometrisk | Binomisk |
|---|------|------|
| **Situasjon** | Uten tilbakelegging | Uavhengige forsøk |
| **Populasjon** | Endelig ($N$) | Kan være uendelig |
| **Parameter** | $N$, $M$, $n$ | $n$, $p$ |
| **$P(X=k)$** | $\\frac{\\binom{M}{k}\\binom{N-M}{n-k}}{\\binom{N}{n}}$ | $\\binom{n}{k}p^k(1-p)^{n-k}$ |
| **$E(X)$** | $n\\frac{M}{N}$ | $np$ |
| **$\\text{Var}(X)$** | $n\\frac{M}{N}\\frac{N-M}{N}\\frac{N-n}{N-1}$ | $np(1-p)$ |

**Tommelfingerregel:** Bruk binomisk approksimasjon når $n < 0{,}05N$.`
    },
    {
      id: 's2-4-2-note-1',
      type: 'note',
      content: `**Typisk eksamensspørsmål:** «Forklar hvorfor dette kan modelleres med binomisk fordeling.» Du må vise at:
1. Det er et fast antall forsøk $n$
2. Hvert forsøk har to utfall (suksess/fiasko)
3. Sannsynligheten $p$ er konstant
4. Forsøkene er uavhengige`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_4_3: TextbookChapter = {
  id: 's2-4-3',
  courseId: 's2',
  chapterNumber: '4.3',
  title: 'Normalfordeling og sentralgrensesetningen',
  description: 'Lær om normalfordelingen, standardnormalfordelingen, z-verdier, sentralgrensesetningen og normalapproksimasjon til binomisk fordeling.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke normalfordelingen til å beregne sannsynligheter',
    'bruke sentralgrensesetningen til å vurdere fordelinger til summer og gjennomsnitt',
    'bruke normalapproksimasjon til binomisk fordeling'
  ],
  content: [
    {
      id: 's2-4-3-intro',
      type: 'text',
      content: `## Normalfordelingen - den viktigste fordelingen

**Normalfordelingen** er den mest brukte sannsynlighetsfordelingen i statistikk. Den dukker opp overalt: høyde, vekt, testresultater, målefeil, og mye mer.

Grunnen til at normalfordelingen er så viktig, er **sentralgrensesetningen**: summen (eller gjennomsnittet) av mange uavhengige stokastiske variabler er tilnærmet normalfordelt - uansett hva den opprinnelige fordelingen er!`
    },
    {
      id: 's2-4-3-def-1',
      type: 'definition',
      title: 'Normalfordelingen',
      content: `En **kontinuerlig** stokastisk variabel $X$ er **normalfordelt** med forventningsverdi $\\mu$ og varians $\\sigma^2$ dersom tetthetsfunksjonen er:

$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\quad -\\infty < x < \\infty$$

Vi skriver $X \\sim N(\\mu, \\sigma^2)$.

**Egenskaper:**
- Kurven er **klokkeformet** og **symmetrisk** om $\\mu$
- Toppunktet er i $x = \\mu$
- Vendepunktene er i $x = \\mu \\pm \\sigma$
- Arealet under hele kurven er 1
- $P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx$ (areal under kurven)`
    },
    {
      id: 's2-4-3-theorem-1',
      type: 'theorem',
      title: 'Empirisk regel (68-95-99,7-regelen)',
      content: `For en normalfordelt variabel $X \\sim N(\\mu, \\sigma^2)$:

$$P(\\mu - \\sigma < X < \\mu + \\sigma) \\approx 0{,}68 \\quad (68\\%)$$
$$P(\\mu - 2\\sigma < X < \\mu + 2\\sigma) \\approx 0{,}95 \\quad (95\\%)$$
$$P(\\mu - 3\\sigma < X < \\mu + 3\\sigma) \\approx 0{,}997 \\quad (99{,}7\\%)$$

**Tolkning:** Ca. 68% av observasjonene ligger innenfor $\\pm 1\\sigma$ fra gjennomsnittet, ca. 95% innenfor $\\pm 2\\sigma$, og nesten alle (99,7%) innenfor $\\pm 3\\sigma$.`
    },
    {
      id: 's2-4-3-example-1',
      type: 'example',
      title: 'Bruke empirisk regel',
      problem: `Høyden til norske menn er tilnærmet normalfordelt med $\\mu = 180$ cm og $\\sigma = 7$ cm.

a) Hvilken andel er mellom 173 cm og 187 cm?
b) Hvilken andel er over 194 cm?`,
      solution: `**a)** $173 = 180 - 7 = \\mu - \\sigma$ og $187 = 180 + 7 = \\mu + \\sigma$.
Ifølge 68-95-99,7-regelen: ca. **68%** er mellom 173 og 187 cm.

**b)** $194 = 180 + 2 \\cdot 7 = \\mu + 2\\sigma$.
Ca. 95% er mellom $\\mu - 2\\sigma$ og $\\mu + 2\\sigma$.
Altså er ca. 5% utenfor, og halvparten (2,5%) er over $\\mu + 2\\sigma = 194$ cm.

Svar: Ca. **2,5%** av norske menn er over 194 cm.`
    },
    {
      id: 's2-4-3-def-2',
      type: 'definition',
      title: 'Standardnormalfordelingen og z-verdier',
      content: `**Standardnormalfordelingen** er normalfordelingen med $\\mu = 0$ og $\\sigma = 1$:

$$Z \\sim N(0, 1)$$

Enhver normalfordelt variabel kan **standardiseres** (transformeres til standardnormal):

$$Z = \\frac{X - \\mu}{\\sigma}$$

$Z$-verdien forteller **hvor mange standardavvik** $X$ er fra gjennomsnittet.

**Bruk av z-tabell / kalkulator:**
$\\Phi(z) = P(Z \\leq z)$ er den kumulative fordelingsfunksjonen.

$$P(X \\leq a) = P\\left(Z \\leq \\frac{a - \\mu}{\\sigma}\\right) = \\Phi\\left(\\frac{a - \\mu}{\\sigma}\\right)$$`
    },
    {
      id: 's2-4-3-example-2',
      type: 'example',
      title: 'Beregne sannsynligheter med z-verdier',
      problem: `Vekten til nyfødte er normalfordelt med $\\mu = 3{,}5$ kg og $\\sigma = 0{,}5$ kg.

a) Finn sannsynligheten for at en nyfødt veier mellom 3,0 og 4,0 kg.
b) Finn vekten som bare 5% overstiger.`,
      solution: `**a)** Standardiser:
$$z_1 = \\frac{3{,}0 - 3{,}5}{0{,}5} = -1{,}0 \\qquad z_2 = \\frac{4{,}0 - 3{,}5}{0{,}5} = 1{,}0$$

$$P(3{,}0 < X < 4{,}0) = P(-1 < Z < 1) = \\Phi(1) - \\Phi(-1)$$
$$= 0{,}8413 - 0{,}1587 = 0{,}6827 \\approx 68{,}3\\%$$

(Stemmer med 68-95-99,7-regelen!)

**b)** Vi søker $a$ slik at $P(X > a) = 0{,}05$, altså $P(X \\leq a) = 0{,}95$.

$$\\Phi\\left(\\frac{a - 3{,}5}{0{,}5}\\right) = 0{,}95$$

Fra tabell: $\\Phi(1{,}645) \\approx 0{,}95$, så:

$$\\frac{a - 3{,}5}{0{,}5} = 1{,}645 \\Rightarrow a = 3{,}5 + 0{,}5 \\cdot 1{,}645 = 4{,}32 \\text{ kg}$$

**Svar:** 95% veier 4,32 kg eller mindre. Bare 5% veier mer enn 4,32 kg.`
    },
    {
      id: 's2-4-3-text-sentralgrense',
      type: 'text',
      content: `## Sentralgrensesetningen

Sentralgrensesetningen (SGS) er et av de viktigste resultatene i statistikk. Den forklarer hvorfor normalfordelingen dukker opp overalt.`
    },
    {
      id: 's2-4-3-theorem-2',
      type: 'theorem',
      title: 'Sentralgrensesetningen',
      content: `La $X_1, X_2, \\ldots, X_n$ være uavhengige stokastiske variabler med samme fordeling, $E(X_i) = \\mu$ og $\\text{Var}(X_i) = \\sigma^2$.

Da gjelder for store $n$:

**Summen:**
$$S_n = X_1 + X_2 + \\cdots + X_n \\approx N(n\\mu, n\\sigma^2)$$

**Gjennomsnittet:**
$$\\bar{X} = \\frac{S_n}{n} \\approx N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$$

**Tolkning:** Uansett hva den opprinnelige fordelingen er, blir summen og gjennomsnittet av mange uavhengige observasjoner tilnærmet normalfordelt når $n$ er stor nok.

**Tommelfingerregel:** $n \\geq 30$ er vanligvis tilstrekkelig for at approksimasjonen er god.`
    },
    {
      id: 's2-4-3-example-3',
      type: 'example',
      title: 'Sentralgrensesetningen i praksis',
      problem: `En fabrikk produserer bolter med gjennomsnittslengde $\\mu = 50$ mm og standardavvik $\\sigma = 2$ mm. Vi måler 100 bolter. Hva er sannsynligheten for at gjennomsnittslengden er mellom 49,5 og 50,5 mm?`,
      solution: `Ifølge sentralgrensesetningen:
$$\\bar{X} \\approx N\\left(50, \\frac{4}{100}\\right) = N(50, 0{,}04)$$

Standardavviket til gjennomsnittet: $\\sigma_{\\bar{X}} = \\frac{2}{\\sqrt{100}} = 0{,}2$ mm.

**Standardiser:**
$$z_1 = \\frac{49{,}5 - 50}{0{,}2} = -2{,}5 \\qquad z_2 = \\frac{50{,}5 - 50}{0{,}2} = 2{,}5$$

$$P(49{,}5 < \\bar{X} < 50{,}5) = P(-2{,}5 < Z < 2{,}5)$$
$$= \\Phi(2{,}5) - \\Phi(-2{,}5) = 0{,}9938 - 0{,}0062 = 0{,}9876$$

**Svar:** Det er ca. 98,8% sannsynlighet for at gjennomsnittet ligger mellom 49,5 og 50,5 mm.

**Merk:** Selv om vi ikke vet fordelingen til enkeltboltene, kan vi bruke normalfordelingen for gjennomsnittet takket være sentralgrensesetningen.`
    },
    {
      id: 's2-4-3-text-normalapproks',
      type: 'text',
      content: `## Normalapproksimasjon til binomisk fordeling

Binomisk fordeling med store $n$ kan beregnes med normalfordelingen. Dette følger av sentralgrensesetningen, siden binomisk fordeling er summen av $n$ uavhengige Bernoulli-variabler.

**Når kan vi bruke approksimasjonen?**
$X \\sim B(n, p)$ kan approksimeres med $N(np, np(1-p))$ når:
- $np \\geq 5$ **og** $n(1-p) \\geq 5$`
    },
    {
      id: 's2-4-3-def-3',
      type: 'definition',
      title: 'Normalapproksimasjon med kontinuitetskorreksjon',
      content: `For $X \\sim B(n, p)$ med $np \\geq 5$ og $n(1-p) \\geq 5$:

$$P(X \\leq k) \\approx \\Phi\\left(\\frac{k + 0{,}5 - np}{\\sqrt{np(1-p)}}\\right)$$

$$P(X = k) \\approx \\Phi\\left(\\frac{k + 0{,}5 - np}{\\sqrt{np(1-p)}}\\right) - \\Phi\\left(\\frac{k - 0{,}5 - np}{\\sqrt{np(1-p)}}\\right)$$

**Kontinuitetskorreksjon** ($\\pm 0{,}5$) brukes fordi vi approksimerer en diskret fordeling med en kontinuerlig. Den gir bedre nøyaktighet, men kan utelates for store $n$.`
    },
    {
      id: 's2-4-3-example-4',
      type: 'example',
      title: 'Normalapproksimasjon til binomisk',
      problem: `En mynt kastes 200 ganger. Bruk normalapproksimasjon til å finne sannsynligheten for mellom 90 og 110 mynt (inklusivt).`,
      solution: `$X \\sim B(200, 0{,}5)$.
$\\mu = np = 100$, $\\sigma = \\sqrt{np(1-p)} = \\sqrt{50} \\approx 7{,}07$.

Sjekk: $np = 100 \\geq 5$ ✓ og $n(1-p) = 100 \\geq 5$ ✓

**Med kontinuitetskorreksjon:**
$$P(90 \\leq X \\leq 110) \\approx \\Phi\\left(\\frac{110{,}5 - 100}{7{,}07}\\right) - \\Phi\\left(\\frac{89{,}5 - 100}{7{,}07}\\right)$$
$$= \\Phi(1{,}48) - \\Phi(-1{,}48)$$
$$= 0{,}9306 - 0{,}0694 = 0{,}8612$$

**Svar:** Sannsynligheten for mellom 90 og 110 mynt er ca. 86,1%.

**Kontroll med 68-95-99,7-regelen:**
$[\\mu - \\sigma, \\mu + \\sigma] = [93, 107]$ gir ca. 68%, og $[90, 110]$ er litt bredere, så 86% virker rimelig.`
    },
    {
      id: 's2-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'IQ-skårer er normalfordelt med $\\mu = 100$ og $\\sigma = 15$. Bruk 68-95-99,7-regelen til å finne andelen med IQ mellom 85 og 115.', solution: '$85 = 100 - 15 = \\mu - \\sigma$ og $115 = \\mu + \\sigma$. Ca. 68% har IQ mellom 85 og 115.' },
          { label: 'b', task: 'Hvilken andel har IQ over 130?', solution: '$130 = 100 + 2 \\cdot 15 = \\mu + 2\\sigma$. Ca. 95% er innenfor $\\pm 2\\sigma$, altså ca. 2,5% over 130.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: '$X \\sim N(50, 16)$. Finn $P(X < 54)$.', solution: '$\\sigma = \\sqrt{16} = 4$. $z = \\frac{54 - 50}{4} = 1{,}0$. $P(X < 54) = \\Phi(1{,}0) = 0{,}8413$.' },
          { label: 'b', task: 'Finn $P(44 < X < 56)$.', solution: '$z_1 = \\frac{44-50}{4} = -1{,}5$. $z_2 = \\frac{56-50}{4} = 1{,}5$. $P = \\Phi(1{,}5) - \\Phi(-1{,}5) = 0{,}9332 - 0{,}0668 = 0{,}8664$.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: '$X \\sim N(10, 9)$. Finn $a$ slik at $P(X < a) = 0{,}90$.', solution: '$\\sigma = 3$. Fra tabell: $\\Phi(1{,}28) \\approx 0{,}90$, så $\\frac{a-10}{3} = 1{,}28 \\Rightarrow a = 10 + 3{,}84 = 13{,}84$.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Standardiser følgende: $X \\sim N(20, 25)$. Finn z-verdien for $x = 30$.', solution: '$\\sigma = 5$. $z = \\frac{30 - 20}{5} = 2{,}0$. Verdien 30 ligger 2 standardavvik over gjennomsnittet.' },
          { label: 'b', task: 'Finn z-verdien for $x = 12$.', solution: '$z = \\frac{12 - 20}{5} = -1{,}6$. Verdien 12 ligger 1,6 standardavvik under gjennomsnittet.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Levetiden til en lyspære er normalfordelt med $\\mu = 1200$ timer og $\\sigma = 100$ timer. Finn sannsynligheten for at en lyspære varer i mer enn 1350 timer.', solution: '$z = \\frac{1350 - 1200}{100} = 1{,}5$. $P(X > 1350) = 1 - \\Phi(1{,}5) = 1 - 0{,}9332 = 0{,}0668 \\approx 6{,}7\\%$.' },
          { label: 'b', task: 'Produsenten garanterer pærene i $t$ timer og vil at høyst 1% skal gå i stykker i garantitiden. Finn $t$.', solution: '$P(X < t) = 0{,}01 \\Rightarrow \\Phi(\\frac{t-1200}{100}) = 0{,}01$. $\\frac{t-1200}{100} = -2{,}326 \\Rightarrow t = 1200 - 232{,}6 \\approx 967$ timer.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Resultater på en matematikkeksamen er normalfordelt med $\\mu = 55$ og $\\sigma = 12$. Finn andelen som scorer mellom 40 og 70.', solution: '$z_1 = \\frac{40-55}{12} = -1{,}25$. $z_2 = \\frac{70-55}{12} = 1{,}25$. $P = \\Phi(1{,}25) - \\Phi(-1{,}25) = 0{,}8944 - 0{,}1056 = 0{,}7887 \\approx 78{,}9\\%$.' },
          { label: 'b', task: 'Hva må du score for å være blant de 10% beste?', solution: '$P(X > a) = 0{,}10 \\Rightarrow \\Phi(\\frac{a-55}{12}) = 0{,}90$. $\\frac{a-55}{12} = 1{,}28 \\Rightarrow a = 55 + 15{,}4 = 70{,}4 \\approx 70$ poeng.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En maskin fyller poser med 500 g mel. Vekten er normalfordelt med $\\sigma = 5$ g. Hvilket gjennomsnitt $\\mu$ bør brukes for at høyst 2% av posene skal veie under 490 g?', solution: '$P(X < 490) = 0{,}02 \\Rightarrow \\frac{490 - \\mu}{5} = -2{,}054 \\Rightarrow \\mu = 490 + 10{,}27 = 500{,}3$ g. Maskinen bør stilles inn på ca. 500,3 g.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Gjennomsnittlig ventetid i en kø er $\\mu = 8$ min med $\\sigma = 3$ min. For et utvalg på 36 kunder, finn sannsynligheten for at gjennomsnittlig ventetid er over 9 minutter. (Bruk sentralgrensesetningen.)', solution: '$\\bar{X} \\sim N(8, \\frac{9}{36}) = N(8, 0{,}25)$. $\\sigma_{\\bar{X}} = 0{,}5$. $z = \\frac{9-8}{0{,}5} = 2{,}0$. $P(\\bar{X} > 9) = 1 - \\Phi(2) = 1 - 0{,}9772 = 0{,}0228 \\approx 2{,}3\\%$.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: '$X \\sim B(100, 0{,}4)$. Bruk normalapproksimasjon til å finne $P(X \\leq 45)$.', solution: '$\\mu = 40$, $\\sigma = \\sqrt{24} \\approx 4{,}90$. Sjekk: $np = 40 \\geq 5$, $nq = 60 \\geq 5$. Med korreksjon: $P(X \\leq 45) \\approx \\Phi(\\frac{45{,}5 - 40}{4{,}90}) = \\Phi(1{,}12) = 0{,}8686$.' },
          { label: 'b', task: 'Finn $P(35 \\leq X \\leq 45)$ med normalapproksimasjon.', solution: '$P(35 \\leq X \\leq 45) \\approx \\Phi(\\frac{45{,}5 - 40}{4{,}90}) - \\Phi(\\frac{34{,}5 - 40}{4{,}90}) = \\Phi(1{,}12) - \\Phi(-1{,}12) = 0{,}8686 - 0{,}1314 = 0{,}737$.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en meningsmåling svarer 55% ja. Utvalget er 400 personer. Bruk sentralgrensesetningen til å finne sannsynligheten for at andelen ja-svar i utvalget er mellom 50% og 60%.', solution: 'La $\\hat{p} = \\frac{X}{n}$. $E(\\hat{p}) = 0{,}55$, $\\text{SD}(\\hat{p}) = \\sqrt{\\frac{0{,}55 \\cdot 0{,}45}{400}} = \\sqrt{\\frac{0{,}2475}{400}} \\approx 0{,}0249$. $z_1 = \\frac{0{,}50 - 0{,}55}{0{,}0249} = -2{,}01$. $z_2 = \\frac{0{,}60 - 0{,}55}{0{,}0249} = 2{,}01$. $P = \\Phi(2{,}01) - \\Phi(-2{,}01) = 0{,}9778 - 0{,}0222 = 0{,}9556 \\approx 95{,}6\\%$.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at dersom $X \\sim N(\\mu, \\sigma^2)$ og $Y = aX + b$, så er $Y \\sim N(a\\mu + b, a^2\\sigma^2)$.', solution: 'Generelt: $E(Y) = aE(X) + b = a\\mu + b$. $\\text{Var}(Y) = a^2\\text{Var}(X) = a^2\\sigma^2$. Siden lineære transformasjoner av normalfordelte variabler er normalfordelte: $Y \\sim N(a\\mu + b, a^2\\sigma^2)$.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En kaffemaskin fyller kopper med $\\mu = 200$ ml og $\\sigma = 8$ ml (normalfordelt). Koppene rommer 220 ml. Finn sannsynligheten for at en kopp renner over.', solution: '$z = \\frac{220 - 200}{8} = 2{,}5$. $P(X > 220) = 1 - \\Phi(2{,}5) = 1 - 0{,}9938 = 0{,}0062 \\approx 0{,}6\\%$.' },
          { label: 'b', task: 'Av 500 kopper, hvor mange forventer vi renner over?', solution: '$E = 500 \\cdot 0{,}0062 = 3{,}1 \\approx 3$ kopper.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Daglig salg i en butikk har $\\mu = 50000$ kr og $\\sigma = 8000$ kr. Finn sannsynligheten for at totalomsetningen over 30 dager overstiger 1 600 000 kr. Bruk sentralgrensesetningen.', solution: '$S_{30} \\sim N(30 \\cdot 50000, 30 \\cdot 8000^2) = N(1500000, 1920000000)$. $\\sigma_S = \\sqrt{1920000000} \\approx 43818$ kr. $z = \\frac{1600000 - 1500000}{43818} = 2{,}28$. $P(S > 1600000) = 1 - \\Phi(2{,}28) = 1 - 0{,}9887 = 0{,}0113 \\approx 1{,}1\\%$.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: '$Z \\sim N(0,1)$. Finn $P(Z > 1{,}96)$.', solution: '$P(Z > 1{,}96) = 1 - \\Phi(1{,}96) = 1 - 0{,}975 = 0{,}025$.' },
          { label: 'b', task: 'Finn $P(-1{,}96 < Z < 1{,}96)$.', solution: '$P(-1{,}96 < Z < 1{,}96) = 2 \\cdot 0{,}975 - 1 = 0{,}95 = 95\\%$. (Dette er grunnlaget for 95%-konfidensintervall.)' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et politisk parti har oppslutning 25%. I en meningsmåling med 600 respondenter, bruk normalapproksimasjon til å finne $P(X \\geq 165)$ der $X$ = antall som støtter partiet.', solution: '$X \\sim B(600, 0{,}25)$. $\\mu = 150$, $\\sigma = \\sqrt{600 \\cdot 0{,}25 \\cdot 0{,}75} = \\sqrt{112{,}5} \\approx 10{,}61$. $P(X \\geq 165) \\approx 1 - \\Phi(\\frac{164{,}5 - 150}{10{,}61}) = 1 - \\Phi(1{,}37) = 1 - 0{,}9147 = 0{,}0853 \\approx 8{,}5\\%$.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at for $X \\sim B(n, p)$ med store $n$, er $\\frac{X - np}{\\sqrt{np(1-p)}} \\approx N(0, 1)$. Forklar sammenhengen med sentralgrensesetningen.', solution: '$X = X_1 + X_2 + \\cdots + X_n$ der $X_i \\sim \\text{Bernoulli}(p)$ er uavhengige med $E(X_i) = p$ og $\\text{Var}(X_i) = p(1-p)$. Ifølge SGS: $\\frac{X - np}{\\sqrt{np(1-p)}} = \\frac{\\sum X_i - n\\mu}{\\sqrt{n\\sigma^2}} \\to N(0,1)$ når $n \\to \\infty$. Binomisk fordeling er en sum av Bernoulli-variabler, så SGS gir normalapproksimasjonen direkte.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-17',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-17',
        number: '17',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vekten til epler er normalfordelt med $\\mu = 180$ g og $\\sigma = 30$ g. Epler under 150 g sorteres bort. Finn andelen som sorteres bort, og finn den gjennomsnittlige vekten til de eplene som IKKE sorteres bort.', solution: 'Andel bort: $P(X < 150) = \\Phi(\\frac{150-180}{30}) = \\Phi(-1) = 0{,}1587 \\approx 15{,}9\\%$. For å finne betinget gjennomsnitt $E(X | X \\geq 150)$: $E(X|X \\geq 150) = \\mu + \\sigma \\cdot \\frac{\\phi(z_0)}{1 - \\Phi(z_0)}$ der $z_0 = -1$. $\\phi(-1) = 0{,}2420$, $1 - \\Phi(-1) = 0{,}8413$. $E(X|X \\geq 150) = 180 + 30 \\cdot \\frac{0{,}2420}{0{,}8413} = 180 + 8{,}6 = 188{,}6$ g.' }
        ]
      }
    },
    {
      id: 's2-4-3-ex-block-18',
      type: 'exercise',
      exercise: {
        id: 's2-4-3-ex-18',
        number: '18',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En terning kastes 360 ganger. Bruk normalapproksimasjon til å finne sannsynligheten for at antall seksere er mellom 50 og 70.', solution: '$X \\sim B(360, \\frac{1}{6})$. $\\mu = 60$, $\\sigma = \\sqrt{360 \\cdot \\frac{1}{6} \\cdot \\frac{5}{6}} = \\sqrt{50} \\approx 7{,}07$. $P(50 \\leq X \\leq 70) \\approx \\Phi(\\frac{70{,}5-60}{7{,}07}) - \\Phi(\\frac{49{,}5-60}{7{,}07}) = \\Phi(1{,}48) - \\Phi(-1{,}48) = 0{,}9306 - 0{,}0694 = 0{,}861 \\approx 86\\%$.' }
        ]
      }
    },
    {
      id: 's2-4-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Normalfordelingen $N(\\mu, \\sigma^2)$:**
- Klokkeformet, symmetrisk om $\\mu$
- Standardisering: $Z = \\frac{X - \\mu}{\\sigma}$
- 68-95-99,7-regelen for $\\pm 1\\sigma$, $\\pm 2\\sigma$, $\\pm 3\\sigma$

**Sentralgrensesetningen:**
- Gjennomsnitt av $n$ uavhengige variabler: $\\bar{X} \\sim N(\\mu, \\frac{\\sigma^2}{n})$
- Gjelder for store $n$ ($\\geq 30$) uansett opprinnelig fordeling

**Normalapproksimasjon til binomisk:**
- $B(n, p) \\approx N(np, np(1-p))$ når $np \\geq 5$ og $n(1-p) \\geq 5$
- Bruk kontinuitetskorreksjon ($\\pm 0{,}5$) for bedre nøyaktighet

**Viktige z-verdier:** $z_{0{,}025} = 1{,}96$ (95%), $z_{0{,}05} = 1{,}645$ (90%), $z_{0{,}005} = 2{,}576$ (99%)`
    },
    {
      id: 's2-4-3-note-1',
      type: 'note',
      content: `**Eksamensstrategi for normalfordeling:**

1. **Tegn alltid en skisse** av normalfordelingskurven og marker det skraverte området
2. **Standardiser** til $Z$ og bruk tabell eller kalkulator
3. **Sjekk svaret** med 68-95-99,7-regelen for rimelighet
4. For binomisk approksimasjon: sjekk $np \\geq 5$ og $n(1-p) \\geq 5$ **før** du bruker approksimasjonen
5. Husk kontinuitetskorreksjon ($\\pm 0{,}5$) ved binomisk $\\to$ normal`
    }
  ],
  exercises: []
};

export const S2_KAP4_CHAPTERS: TextbookChapter[] = [CHAPTER_S2_4_1, CHAPTER_S2_4_2, CHAPTER_S2_4_3];
