/**
 * Tekstbok kapitler for R2 - Kapittel 1: Følger og rekker
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_R2_1_1: TextbookChapter = {
  id: 'r2-1-1',
  courseId: 'r2',
  chapterNumber: '1.1',
  title: 'Folger og tallmonstre',
  description: 'Introduksjon til følger, notasjon og eksplisitte formler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske rekursive sammenhenger og bruke ulike representasjoner',
    'forsta og bruke folgenotasjon',
    'finne eksplisitte formler for tallmonstre',
  ],
  content: [
    {
      id: 'r2-1-1-intro',
      type: 'text',
      content: `## Hva er en folge?

Har du noen gang lagt merke til monstre i tall?

- $2, 4, 6, 8, 10, \\ldots$ (partall)
- $1, 4, 9, 16, 25, \\ldots$ (kvadrattall)
- $1, 1, 2, 3, 5, 8, 13, \\ldots$ (Fibonacci-tall)

Slike ordnede lister av tall kalles **følger**. Folger dukker opp overalt - fra renter og befolkningsvekst til spiralmonstre i naturen.`,
    },
    {
      id: 'r2-1-1-def-1',
      type: 'definition',
      title: 'Folge',
      content: `En **folge** er en ordnet liste av tall der hvert tall har en bestemt plass (indeks).

Leddene skrives $a_1, a_2, a_3, \\ldots, a_n, \\ldots$

- $a_1$ er det **forste leddet**
- $a_n$ er det **n-te leddet** (generelle leddet)
- $n$ kalles **indeksen**`,
    },
    {
      id: 'r2-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese av ledd',
      problem: 'La folgen være $1, 4, 9, 16, 25, \\ldots$. Finn $a_1$, $a_3$ og $a_5$.',
      solution: `$a_1 = 1$, $a_3 = 9$, $a_5 = 25$

Dette er kvadrattallene: $a_n = n^2$.`,
    },
    {
      id: 'r2-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'La $a_n = 2n + 3$. Finn $a_1$, $a_5$ og $a_{10}$.',
        solution: '$a_1 = 5$, $a_5 = 13$, $a_{10} = 23$',
        hints: ['Sett inn verdien av n i formelen.'],
      },
    },
    {
      id: 'r2-1-1-def-2',
      type: 'definition',
      title: 'Eksplisitt formel',
      content: `En **eksplisitt formel** $a_n = f(n)$ gir det n-te leddet direkte.

**Eksempler:**
- $a_n = 2n$ gir $2, 4, 6, 8, \\ldots$
- $a_n = n^2$ gir $1, 4, 9, 16, \\ldots$
- $a_n = 2^n$ gir $2, 4, 8, 16, \\ldots$`,
    },
    {
      id: 'r2-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruke eksplisitt formel',
      problem: 'Gitt $a_n = 3n - 1$. a) Finn de fem forste leddene. b) Finn $a_{100}$.',
      solution: `a) $a_1 = 2$, $a_2 = 5$, $a_3 = 8$, $a_4 = 11$, $a_5 = 14$

b) $a_{100} = 3 \\cdot 100 - 1 = 299$`,
    },
    {
      id: 'r2-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv de fem forste leddene for $a_n = n^2$ og $a_n = 2^n$.',
        solution: '$n^2$: 1, 4, 9, 16, 25. $2^n$: 2, 4, 8, 16, 32',
        hints: ['Sett inn n = 1, 2, 3, 4, 5.'],
      },
    },
    {
      id: 'r2-1-1-def-3',
      type: 'definition',
      title: 'Rekursiv formel',
      content: `En **rekursiv formel** beskriver et ledd ved hjelp av foregaende ledd.

**Eksempel:**
- $a_1 = 2$
- $a_{n+1} = a_n + 3$

Gir folgen $2, 5, 8, 11, 14, \\ldots$`,
    },
    {
      id: 'r2-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Fra rekursiv til eksplisitt',
      problem: 'Gitt $a_1 = 5$ og $a_{n+1} = a_n + 4$. Finn eksplisitt formel.',
      solution: `Folgen er $5, 9, 13, 17, 21, \\ldots$

$a_n = 5 + 4(n-1) = 4n + 1$`,
    },
    {
      id: 'r2-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gitt $a_1 = 2$ og $a_{n+1} = a_n + 5$. Finn eksplisitt formel og $a_{20}$.',
        solution: '$a_n = 5n - 3$, $a_{20} = 97$',
        hints: ['Folgen er aritmetisk med d = 5.'],
      },
    },
    {
      id: 'r2-1-1-theorem-1',
      type: 'theorem',
      title: 'Viktige tallmonstre',
      content: `**Partall:** $a_n = 2n$

**Oddetall:** $a_n = 2n - 1$

**Kvadrattall:** $a_n = n^2$

**Trekanttall:** $a_n = \\frac{n(n+1)}{2}$`,
    },
    {
      id: 'r2-1-1-example-4',
      type: 'example',
      title: 'Eksempel 4: Finne formel fra monster',
      problem: 'Finn eksplisitt formel for $5, 8, 11, 14, \\ldots$',
      solution: `Differansen mellom leddene er konstant: $8-5 = 3$, $11-8 = 3$, osv.

Forste ledd er 5. Formelen blir:
$a_n = 5 + 3(n-1) = 3n + 2$`,
    },
    {
      id: 'r2-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn eksplisitt formel for $7, 11, 15, 19, \\ldots$',
        solution: '$a_n = 4n + 3$',
        hints: ['Finn differansen mellom leddene.'],
      },
    },
    {
      id: 'r2-1-1-def-4',
      type: 'definition',
      title: 'Fibonacci-folgen',
      content: `$F_1 = 1$, $F_2 = 1$, $F_n = F_{n-1} + F_{n-2}$

Gir: $1, 1, 2, 3, 5, 8, 13, 21, 34, \\ldots$`,
    },
    {
      id: 'r2-1-1-example-5',
      type: 'example',
      title: 'Eksempel 5: Fibonacci-tall',
      problem: 'Finn $F_8$ i Fibonacci-folgen.',
      solution: `$F_1 = 1, F_2 = 1$
$F_3 = 1+1 = 2$
$F_4 = 1+2 = 3$
$F_5 = 2+3 = 5$
$F_6 = 3+5 = 8$
$F_7 = 5+8 = 13$
$F_8 = 8+13 = 21$`,
    },
    {
      id: 'r2-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn $F_{10}$ i Fibonacci-folgen.',
        solution: '$F_{10} = 55$',
        hints: ['Bygg opp folgen steg for steg fra $F_8 = 21$.'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_1_2: TextbookChapter = {
  id: 'r2-1-2',
  courseId: 'r2',
  chapterNumber: '1.2',
  title: 'Aritmetiske følger',
  description: 'Folger med konstant differanse mellom hvert ledd.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forsta og bruke formler for aritmetiske følger',
    'anvende aritmetiske følger i praktiske situasjoner',
  ],
  content: [
    {
      id: 'r2-1-2-intro',
      type: 'text',
      content: `## Hva er en aritmetisk folge?

Tenk deg at du sparer 500 kr hver maned. Sparesaldoen utvikler seg slik:
$$500, 1000, 1500, 2000, 2500, \\ldots$$

Differansen mellom hvert ledd er konstant (500 kr). Dette er en **aritmetisk folge**.`,
    },
    {
      id: 'r2-1-2-def-1',
      type: 'definition',
      title: 'Aritmetisk folge',
      content: `En **aritmetisk folge** er en folge der differansen mellom pafolgende ledd er konstant.

Differansen betegnes $d$: $d = a_{n+1} - a_n$

**Eksempler:**
- $3, 7, 11, 15, \\ldots$ har $d = 4$
- $20, 17, 14, 11, \\ldots$ har $d = -3$`,
    },
    {
      id: 'r2-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Er folgen aritmetisk?',
      problem: 'Avgjer om $2, 5, 8, 11, 14, \\ldots$ er en aritmetisk folge.',
      solution: `Vi sjekker differansene:
$5 - 2 = 3$
$8 - 5 = 3$
$11 - 8 = 3$

Differansen er konstant, sa folgen er **aritmetisk** med $d = 3$.`,
    },
    {
      id: 'r2-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjer om $100, 90, 80, 70, \\ldots$ er en aritmetisk folge. Finn i sa fall $d$.',
        solution: 'Ja, aritmetisk med $d = -10$',
        hints: ['Sjekk om differansen er konstant.'],
      },
    },
    {
      id: 'r2-1-2-theorem-1',
      type: 'theorem',
      title: 'Eksplisitt formel',
      content: `For en aritmetisk folge med forste ledd $a_1$ og differanse $d$:

$$a_n = a_1 + (n-1) \\cdot d$$`,
    },
    {
      id: 'r2-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne et bestemt ledd',
      problem: 'En aritmetisk folge har $a_1 = 7$ og $d = 4$. Finn $a_{50}$.',
      solution: `$a_{50} = 7 + (50-1) \\cdot 4 = 7 + 196 = 203$`,
    },
    {
      id: 'r2-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En aritmetisk folge har $a_1 = 5$ og $d = 3$. Finn $a_{100}$.',
        solution: '$a_{100} = 5 + 99 \\cdot 3 = 302$',
        hints: ['Bruk formelen $a_n = a_1 + (n-1)d$.'],
      },
    },
    {
      id: 'r2-1-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Finne differansen',
      problem: 'I en aritmetisk folge er $a_3 = 11$ og $a_7 = 27$. Finn $d$.',
      solution: `Fra $a_3$ til $a_7$ er det $7 - 3 = 4$ steg.

$a_7 = a_3 + 4d$
$27 = 11 + 4d$
$d = 4$`,
    },
    {
      id: 'r2-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en aritmetisk folge er $a_5 = 20$ og $a_{10} = 35$. Finn $d$ og $a_1$.',
        solution: '$d = 3$, $a_1 = 8$',
        hints: ['Bruk at $a_{10} = a_5 + 5d$.', 'Deretter finn $a_1$ fra $a_5$.'],
      },
    },
    {
      id: 'r2-1-2-theorem-2',
      type: 'theorem',
      title: 'Sum av aritmetisk folge',
      content: `Summen av de $n$ forste leddene i en aritmetisk folge:

$$S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n}{2}(2a_1 + (n-1)d)$$`,
    },
    {
      id: 'r2-1-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Summen av en aritmetisk folge',
      problem: 'Finn summen $1 + 2 + 3 + \\ldots + 100$.',
      solution: `Dette er en aritmetisk folge med $a_1 = 1$, $a_{100} = 100$, $n = 100$.

$S_{100} = \\frac{100(1 + 100)}{2} = \\frac{100 \\cdot 101}{2} = 5050$`,
    },
    {
      id: 'r2-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn summen $2 + 4 + 6 + \\ldots + 200$.',
        solution: '$S = \\frac{100(2 + 200)}{2} = 10100$',
        hints: ['Hvor mange ledd er det?'],
      },
    },
    {
      id: 'r2-1-2-example-5',
      type: 'example',
      title: 'Eksempel 5: Praktisk anvendelse',
      problem: 'Du sparer 1000 kr forste maned, og oker med 200 kr hver maned. Hvor mye har du spart etter 12 måneder?',
      solution: `$a_1 = 1000$, $d = 200$, $n = 12$

$S_{12} = \\frac{12}{2}(2 \\cdot 1000 + 11 \\cdot 200) = 6(2000 + 2200) = 25200$ kr`,
    },
    {
      id: 'r2-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et kinosal har 20 seter i forste rad, og hver rad har 2 seter mer enn raden foran. Hvor mange seter er det totalt i 15 rader?',
        solution: '$S_{15} = \\frac{15}{2}(2 \\cdot 20 + 14 \\cdot 2) = 510$ seter',
        hints: ['$a_1 = 20$, $d = 2$, $n = 15$.'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_1_3: TextbookChapter = {
  id: 'r2-1-3',
  courseId: 'r2',
  chapterNumber: '1.3',
  title: 'Geometriske følger',
  description: 'Folger med konstant kvotient mellom hvert ledd.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forsta og bruke formler for geometriske følger',
    'anvende geometriske følger i praktiske situasjoner',
  ],
  content: [
    {
      id: 'r2-1-3-intro',
      type: 'text',
      content: `## Hva er en geometrisk folge?

I forrige kapittel sa vi på aritmetiske følger, der vi adderer en fast differanse $d$ for a ga fra ett ledd til det neste. Na skal vi se på **geometriske følger**.

I en geometrisk folge gar vi fra ett ledd til det neste ved a **multiplisere** med et fast tall $k$, som kalles **kvotienten**.

**Eksempler fra hverdagen:**
- Rentes rente (banksparing og lan)
- Befolkningsvekst
- Radioaktiv nedbrytning`,
    },
    {
      id: 'r2-1-3-def-1',
      type: 'definition',
      title: 'Geometrisk folge',
      content: `En **geometrisk folge** er en folge der forholdet mellom pafolgende ledd er konstant.

Kvotienten betegnes $k$: $k = \\frac{a_{n+1}}{a_n}$

**Eksempler:**
- $2, 6, 18, 54, \\ldots$ har $k = 3$
- $100, 50, 25, \\ldots$ har $k = 0{,}5$`,
    },
    {
      id: 'r2-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Er folgen geometrisk?',
      problem: 'Avgjer om $3, 6, 12, 24, 48, \\ldots$ er en geometrisk folge.',
      solution: `Vi sjekker forholdene:
$\\frac{6}{3} = 2$
$\\frac{12}{6} = 2$
$\\frac{24}{12} = 2$

Forholdet er konstant, sa folgen er **geometrisk** med $k = 2$.`,
    },
    {
      id: 'r2-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjer om $81, 27, 9, 3, \\ldots$ er en geometrisk folge. Finn i sa fall $k$.',
        solution: 'Ja, geometrisk med $k = \\frac{1}{3}$',
        hints: ['Sjekk om forholdet mellom pafolgende ledd er konstant.'],
      },
    },
    {
      id: 'r2-1-3-theorem-1',
      type: 'theorem',
      title: 'Eksplisitt formel',
      content: `For en geometrisk folge med forste ledd $a_1$ og kvotient $k$:

$$a_n = a_1 \\cdot k^{n-1}$$`,
    },
    {
      id: 'r2-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne et bestemt ledd',
      problem: 'En geometrisk folge har $a_1 = 5$ og $k = 2$. Finn $a_8$.',
      solution: `$a_8 = 5 \\cdot 2^{8-1} = 5 \\cdot 2^7 = 5 \\cdot 128 = 640$`,
    },
    {
      id: 'r2-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En geometrisk folge har $a_1 = 4$ og $k = 3$. Finn $a_6$.',
        solution: '$a_6 = 4 \\cdot 3^5 = 4 \\cdot 243 = 972$',
        hints: ['Bruk formelen $a_n = a_1 \\cdot k^{n-1}$.'],
      },
    },
    {
      id: 'r2-1-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Finne kvotienten',
      problem: 'I en geometrisk folge er $a_2 = 12$ og $a_5 = 324$. Finn $k$.',
      solution: `Fra $a_2$ til $a_5$ er det $5 - 2 = 3$ steg.

$a_5 = a_2 \\cdot k^3$
$324 = 12 \\cdot k^3$
$k^3 = 27$
$k = 3$`,
    },
    {
      id: 'r2-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en geometrisk folge er $a_3 = 20$ og $a_6 = 540$. Finn $k$ og $a_1$.',
        solution: '$k = 3$, $a_1 = \\frac{20}{9}$',
        hints: ['Bruk at $a_6 = a_3 \\cdot k^3$.', 'Deretter finn $a_1$ fra $a_3$.'],
      },
    },
    {
      id: 'r2-1-3-text-vekst',
      type: 'text',
      content: `## Vekstfaktor og prosentvis endring

Kvotienten $k$ kalles ofte **vekstfaktoren**:

$$k = 1 + \\frac{p}{100}$$

der $p$ er prosentvis endring.

**Eksempler:**
- 5% okning: $k = 1{,}05$
- 3% nedgang: $k = 0{,}97$`,
    },
    {
      id: 'r2-1-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Rentes rente',
      problem: 'Du setter 10 000 kr i banken med 4% arlig rente. Hvor mye har du etter 5 ar?',
      solution: `Vekstfaktoren er $k = 1{,}04$.

$a_5 = 10\\,000 \\cdot 1{,}04^5 = 10\\,000 \\cdot 1{,}2167 \\approx 12\\,167$ kr`,
    },
    {
      id: 'r2-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bil mister 15% av verdien hvert ar. Den kostet 300 000 kr ny. Hva er den verdt etter 3 ar?',
        solution: '$k = 0{,}85$, verdi = $300\\,000 \\cdot 0{,}85^3 \\approx 184\\,109$ kr',
        hints: ['15% nedgang betyr $k = 1 - 0{,}15 = 0{,}85$.'],
      },
    },
    {
      id: 'r2-1-3-example-5',
      type: 'example',
      title: 'Eksempel 5: Halveringstid',
      problem: 'Et radioaktivt stoff har halveringstid på 10 ar. Du starter med 200 gram. Hvor mye er igjen etter 30 år?',
      solution: `Halveringstid betyr $k = 0{,}5$ per periode.

30 år = 3 halveringsperioder.

$a_3 = 200 \\cdot 0{,}5^3 = 200 \\cdot 0{,}125 = 25$ gram`,
    },
    {
      id: 'r2-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bakterier dobler seg hver time. Du starter med 100 bakterier. Nar er det over 10 000?',
        solution: '$100 \\cdot 2^n > 10\\,000 \\Rightarrow 2^n > 100 \\Rightarrow n > 6{,}64$. Etter 7 timer.',
        hints: ['Dobling betyr $k = 2$. Los $100 \\cdot 2^n > 10\\,000$.'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_1_4: TextbookChapter = {
  id: 'r2-1-4',
  courseId: 'r2',
  chapterNumber: '1.4',
  title: 'Rekker og summasjon',
  description: 'Summer av følger og sigmanotasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke sigmanotasjon til a skrive summer',
    'beregne summer av aritmetiske og geometriske følger',
  ],
  content: [
    {
      id: 'r2-1-4-intro',
      type: 'text',
      content: `## Fra følger til rekker

En **rekke** er summen av leddene i en folge.

Tenk deg at du sparer 1000 kr hver maned. Etter 6 måneder har du spart:
$$1000 + 1000 + 1000 + 1000 + 1000 + 1000 = 6000 \\text{ kr}$$

Dette er et eksempel på en rekke.`,
    },
    {
      id: 'r2-1-4-def-1',
      type: 'definition',
      title: 'Sigmanotasjon',
      content: `Summer skrives med det greske bokstaven sigma: $\\Sigma$

$$\\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \\cdots + a_n$$

- $k$ er summeringsindeksen
- 1 er nedre grense
- $n$ er ovre grense`,
    },
    {
      id: 'r2-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne en sum',
      problem: 'Beregn $\\displaystyle\\sum_{k=1}^{4} k^2$.',
      solution: `Vi setter inn $k = 1, 2, 3, 4$:

$\\sum_{k=1}^{4} k^2 = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30$`,
    },
    {
      id: 'r2-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'r2-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn $\\displaystyle\\sum_{k=1}^{5} 2k$.',
        solution: '$2 + 4 + 6 + 8 + 10 = 30$',
        hints: ['Sett inn $k = 1, 2, 3, 4, 5$ og legg sammen.'],
      },
    },
    {
      id: 'r2-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Skrive med sigmanotasjon',
      problem: 'Skriv summen $5 + 10 + 15 + 20 + 25$ med sigmanotasjon.',
      solution: `Leddene er $5 \\cdot 1, 5 \\cdot 2, 5 \\cdot 3, 5 \\cdot 4, 5 \\cdot 5$.

Det generelle leddet er $a_k = 5k$.

$$5 + 10 + 15 + 20 + 25 = \\sum_{k=1}^{5} 5k$$`,
    },
    {
      id: 'r2-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'r2-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv summen $1 + 4 + 9 + 16 + 25 + 36$ med sigmanotasjon.',
        solution: '$\\sum_{k=1}^{6} k^2$',
        hints: ['Dette er kvadrattallene.'],
      },
    },
    {
      id: 'r2-1-4-theorem-1',
      type: 'theorem',
      title: 'Sum av aritmetisk rekke',
      content: `For en aritmetisk folge:

$$S_n = \\frac{n(a_1 + a_n)}{2}$$

**Alternativt:**
$$S_n = \\frac{n}{2}(2a_1 + (n-1)d)$$`,
    },
    {
      id: 'r2-1-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Sum av aritmetisk rekke',
      problem: 'Finn summen $1 + 2 + 3 + \\ldots + 100$.',
      solution: `$a_1 = 1$, $a_{100} = 100$, $n = 100$

$S_{100} = \\frac{100(1 + 100)}{2} = \\frac{100 \\cdot 101}{2} = 5050$`,
    },
    {
      id: 'r2-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'r2-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn summen $3 + 6 + 9 + \\ldots + 99$.',
        solution: 'Det er 33 ledd. $S = \\frac{33(3 + 99)}{2} = \\frac{33 \\cdot 102}{2} = 1683$',
        hints: ['Finn forst hvor mange ledd det er.'],
      },
    },
    {
      id: 'r2-1-4-theorem-2',
      type: 'theorem',
      title: 'Sum av geometrisk rekke',
      content: `For en geometrisk folge med $k \\neq 1$:

$$S_n = a_1 \\cdot \\frac{k^n - 1}{k - 1}$$`,
    },
    {
      id: 'r2-1-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Sum av geometrisk rekke',
      problem: 'Finn summen $2 + 4 + 8 + 16 + 32$.',
      solution: `$a_1 = 2$, $k = 2$, $n = 5$

$S_5 = 2 \\cdot \\frac{2^5 - 1}{2 - 1} = 2 \\cdot \\frac{31}{1} = 62$`,
    },
    {
      id: 'r2-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'r2-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn summen $1 + 3 + 9 + 27 + 81 + 243$.',
        solution: '$a_1 = 1$, $k = 3$, $n = 6$. $S_6 = 1 \\cdot \\frac{3^6 - 1}{3 - 1} = \\frac{728}{2} = 364$',
        hints: ['Bruk formelen $S_n = a_1 \\cdot \\frac{k^n - 1}{k - 1}$.'],
      },
    },
    {
      id: 'r2-1-4-example-5',
      type: 'example',
      title: 'Eksempel 5: Praktisk anvendelse',
      problem: 'Du sparer 500 kr forste maned, og oker med 100 kr hver maned. Hvor mye har du spart etter 12 måneder?',
      solution: `Dette er en aritmetisk folge: $a_1 = 500$, $d = 100$, $n = 12$.

$a_{12} = 500 + 11 \\cdot 100 = 1600$

$S_{12} = \\frac{12(500 + 1600)}{2} = \\frac{12 \\cdot 2100}{2} = 12\\,600$ kr`,
    },
    {
      id: 'r2-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'r2-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et kinosal har 15 seter i forste rad og 3 flere i hver rad. Det er 10 rader. Hvor mange seter er det totalt?',
        solution: '$a_1 = 15$, $d = 3$, $n = 10$. $a_{10} = 15 + 27 = 42$. $S_{10} = \\frac{10(15 + 42)}{2} = 285$ seter',
        hints: ['Dette er en aritmetisk rekke.'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_1_5: TextbookChapter = {
  id: 'r2-1-5',
  courseId: 'r2',
  chapterNumber: '1.5',
  title: 'Uendelige rekker og konvergens',
  description: 'Lar om uendelige rekker, konvergens og divergens.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske eigenskapar ved ulike foljer'],
  content: [
    {
      id: 'r2-1-5-intro',
      type: 'text',
      content: `## Uendelige rekker

I forrige kapittel sa vi på endelige rekker - summer med et bestemt antall ledd. Men hva skjer nar vi lar antall ledd ga mot uendelig?

Tenk på rekken $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$. Selv om vi legger sammen uendelig mange ledd, vokser ikke summen over alle grenser - den narmer seg tallet 2.`,
    },
    {
      id: 'r2-1-5-def-1',
      type: 'definition',
      title: 'Uendelig rekke',
      content: `En **uendelig rekke** er summen av uendelig mange ledd:

$$\\sum_{n=1}^{\\infty} a_n = a_1 + a_2 + a_3 + \\cdots$$

Den $n$-te **delsummen** er $S_n = a_1 + a_2 + \\cdots + a_n$.`,
    },
    {
      id: 'r2-1-5-def-2',
      type: 'definition',
      title: 'Konvergens og divergens',
      content: `En uendelig rekke **konvergerer** hvis folgen av delsummer $\\{S_n\\}$ har en endelig grenseverdi:

$$S = \\lim_{n \\to \\infty} S_n$$

Da sier vi at rekken har **summen** $S$. Hvis grenseverdien ikke eksisterer eller er uendelig, sier vi at rekken **divergerer**.`,
    },
    {
      id: 'r2-1-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Geometrisk rekke',
      problem: 'Finn summen av den uendelige geometriske rekken $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$',
      solution: `Vi har $a_1 = 1$ og $k = \\frac{1}{2}$.

**Delsummene:**
- $S_1 = 1$
- $S_2 = 1{,}5$
- $S_3 = 1{,}75$
- $S_4 = 1{,}875$

Nar $n \\to \\infty$, gar $(\\frac{1}{2})^n \\to 0$, sa:
$$S = \\frac{1}{1 - \\frac{1}{2}} = 2$$

**Svar:** Rekken konvergerer mot $2$.`,
    },
    {
      id: 'r2-1-5-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'r2-1-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn summen av den uendelige geometriske rekken $3 + 1 + \\frac{1}{3} + \\frac{1}{9} + \\cdots$',
        solution: 'Her er $a_1 = 3$ og $k = \\frac{1}{3}$. Summen blir $S = \\frac{3}{1 - \\frac{1}{3}} = \\frac{3}{\\frac{2}{3}} = \\frac{9}{2} = 4{,}5$',
        hints: ['Identifiser $a_1$ og $k$.', 'Bruk formelen $S = \\frac{a_1}{1-k}$.'],
      },
    },
    {
      id: 'r2-1-5-theorem-1',
      type: 'theorem',
      title: 'Uendelig geometrisk rekke',
      content: `For en geometrisk rekke med forste ledd $a_1$ og kvotient $k$ der $|k| < 1$:

$$\\sum_{n=1}^{\\infty} a_1 \\cdot k^{n-1} = \\frac{a_1}{1 - k}$$

Hvis $|k| \\geq 1$, divergerer rekken.`,
    },
    {
      id: 'r2-1-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Sprettball',
      problem: 'En ball slippes fra 10 m og spretter til 60% av forrige høyde. Finn total strekning.',
      solution: `Forste fall: 10 m ned.
Forste sprett: 6 m opp + 6 m ned = 12 m
Andre sprett: 3,6 m opp + 3,6 m ned = 7,2 m

Total strekning:
$$S = 10 + 2(6 + 3{,}6 + 2{,}16 + \\cdots)$$

Rekken $6 + 3{,}6 + \\cdots$ er geometrisk med $a_1 = 6$, $k = 0{,}6$:
$$S = 10 + 2 \\cdot \\frac{6}{1-0{,}6} = 10 + 2 \\cdot 15 = 40 \\text{ m}$$`,
    },
    {
      id: 'r2-1-5-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'r2-1-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En pendel svinger med avtagende amplitude. Forste utslag er 20 cm, og hvert pafolgende utslag er 75% av det forrige. Finn den totale strekningen pendelen tilbakelegger.',
        solution: 'Total strekning = $20 + 2 \\cdot \\frac{15}{1-0{,}75} = 20 + 2 \\cdot 60 = 140$ cm',
        hints: ['Hvert utslag telles dobbelt (begge veier).'],
      },
    },
    {
      id: 'r2-1-5-text-2',
      type: 'text',
      content: `## Divergente rekker

Ikke alle uendelige rekker konvergerer. Den **harmoniske rekken** $1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$ divergerer, selv om leddene gar mot null.`,
    },
    {
      id: 'r2-1-5-theorem-2',
      type: 'theorem',
      title: 'Nodvendig betingelse for konvergens',
      content: `Hvis rekken $\\sum_{n=1}^{\\infty} a_n$ konvergerer, sa ma $\\lim_{n \\to \\infty} a_n = 0$.

**Merk:** Dette er nodvendig, men ikke tilstrekkelig. At $a_n \\to 0$ garanterer ikke konvergens!`,
    },
    {
      id: 'r2-1-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Harmonisk rekke',
      problem: 'Undersok om den harmoniske rekken $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ konvergerer.',
      solution: `Leddene gar mot null: $\\lim_{n \\to \\infty} \\frac{1}{n} = 0$

Men rekken divergerer! Vi kan gruppere leddene:
$$1 + \\frac{1}{2} + \\left(\\frac{1}{3} + \\frac{1}{4}\\right) + \\left(\\frac{1}{5} + \\cdots + \\frac{1}{8}\\right) + \\cdots$$

Hver gruppe er storre enn $\\frac{1}{2}$, sa summen vokser uten grense.`,
    },
    {
      id: 'r2-1-5-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'r2-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjer om rekken $\\sum_{n=1}^{\\infty} \\frac{n}{n+1}$ konvergerer eller divergerer.',
        solution: '$\\lim_{n \\to \\infty} \\frac{n}{n+1} = 1 \\neq 0$, sa rekken divergerer.',
        hints: ['Finn grenseverdien til leddene.'],
      },
    },
    {
      id: 'r2-1-5-theorem-3',
      type: 'theorem',
      title: 'p-rekker',
      content: `Rekken $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ konvergerer hvis $p > 1$ og divergerer hvis $p \\leq 1$.`,
    },
    {
      id: 'r2-1-5-example-4',
      type: 'example',
      title: 'Eksempel 4: p-rekker',
      problem: 'Avgjer om $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ og $\\sum_{n=1}^{\\infty} \\frac{1}{\\sqrt{n}}$ konvergerer.',
      solution: `**Rekke 1:** $p = 2 > 1$, sa rekken **konvergerer**.

**Rekke 2:** $p = \\frac{1}{2} < 1$, sa rekken **divergerer**.`,
    },
    {
      id: 'r2-1-5-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'r2-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjer om rekken $\\sum_{n=1}^{\\infty} \\frac{1}{n^{1{,}5}}$ konvergerer.',
        solution: '$p = 1{,}5 > 1$, sa rekken konvergerer.',
        hints: ['Bruk setningen om p-rekker.'],
      },
    },
    {
      id: 'r2-1-5-text-3',
      type: 'text',
      content: `## Oppsummering

| Type rekke | Betingelse | Konklusjon |
|------------|------------|------------|
| Geometrisk | $|k| < 1$ | Konvergerer, sum $= \\frac{a_1}{1-k}$ |
| Geometrisk | $|k| \\geq 1$ | Divergerer |
| p-rekke | $p > 1$ | Konvergerer |
| p-rekke | $p \\leq 1$ | Divergerer |`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_1_6: TextbookChapter = {
  id: 'r2-1-6',
  courseId: 'r2',
  chapterNumber: '1.6',
  title: 'Induksjonsbevis',
  description: 'Lar matematisk induksjon - en bevismetode for pastand som gjelder for alle naturlige tall.',
  estimatedMinutes: 60,
  competenceGoals: ['analysere og forsta matematiske bevis'],
  content: [
    {
      id: 'r2-1-6-intro',
      type: 'text',
      content: `## Matematisk induksjon

Hvordan kan vi bevise at en formel gjelder for *alle* naturlige tall? Vi kan ikke sjekke uendelig mange tilfeller.

**Matematisk induksjon** lar oss bevise pastander for alle naturlige tall ved a bruke et endelig argument. Tenk på dominobrikker: hvis den forste faller og hver brikke velter den neste, faller alle.`,
    },
    {
      id: 'r2-1-6-def-1',
      type: 'definition',
      title: 'Matematisk induksjon',
      content: `For a bevise at $P(n)$ gjelder for alle $n \\geq n_0$:

**1. Basisteg:** Vis at $P(n_0)$ er sann (vanligvis $n_0 = 1$)

**2. Induksjonssteg:** Anta at $P(k)$ er sann. Vis at dette medforer at $P(k+1)$ er sann.

**Konklusjon:** Da gjelder $P(n)$ for alle $n \\geq n_0$.`,
    },
    {
      id: 'r2-1-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Sumformel',
      problem: 'Bevis at $1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$ for alle $n \\geq 1$.',
      solution: `La $P(n)$: $1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$

**Basisteg ($n = 1$):**
VS: $1$, HS: $\\frac{1 \\cdot 2}{2} = 1$ ✓

**Induksjonssteg:**
Anta $P(k)$: $1 + 2 + \\cdots + k = \\frac{k(k+1)}{2}$

Vis $P(k+1)$:
$$1 + 2 + \\cdots + k + (k+1) = \\frac{k(k+1)}{2} + (k+1)$$
$$= \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2}$$

Dette er $P(k+1)$! ✓`,
    },
    {
      id: 'r2-1-6-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'r2-1-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bevis ved induksjon at $1 + 3 + 5 + \\cdots + (2n-1) = n^2$ for alle $n \\geq 1$.',
        solution: 'Basisteg: $1 = 1^2$ ✓. Induksjonssteg: $k^2 + (2k+1) = (k+1)^2$ ✓',
        hints: ['Sjekk formelen for $n = 1$.', 'Legg til $(2k+1)$ på begge sider.'],
      },
    },
    {
      id: 'r2-1-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Ulikhet',
      problem: 'Bevis ved induksjon at $2^n > n$ for alle $n \\geq 1$.',
      solution: `**Basisteg ($n = 1$):**
$2^1 = 2 > 1$ ✓

**Induksjonssteg:**
Anta $2^k > k$.

$$2^{k+1} = 2 \\cdot 2^k > 2k \\geq k + 1$$
(siden $k \\geq 1$)

Altsa $2^{k+1} > k + 1$ ✓`,
    },
    {
      id: 'r2-1-6-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'r2-1-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bevis ved induksjon at $n! > 2^n$ for alle $n \\geq 4$.',
        solution: 'Basisteg: $4! = 24 > 16 = 2^4$ ✓. Induksjonssteg: $(k+1)! = (k+1) \\cdot k! > (k+1) \\cdot 2^k > 2 \\cdot 2^k = 2^{k+1}$',
        hints: ['Basisteg: Sjekk $n = 4$.', 'Bruk at $k+1 > 2$ for $k \\geq 4$.'],
      },
    },
    {
      id: 'r2-1-6-example-3',
      type: 'example',
      title: 'Eksempel 3: Delelighet',
      problem: 'Bevis at $n^3 - n$ er delelig med 6 for alle $n \\geq 1$.',
      solution: `**Basisteg ($n = 1$):**
$1^3 - 1 = 0$, og $6 | 0$ ✓

**Induksjonssteg:**
$(k+1)^3 - (k+1) = (k^3 - k) + 3k(k+1)$

- $(k^3 - k)$ er delelig med 6 (indukhyp)
- $k(k+1)$ er delelig med 2 (to pafolgende tall)
- Dermed er $3k(k+1)$ delelig med 6

Summen er delelig med 6. ✓`,
    },
    {
      id: 'r2-1-6-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'r2-1-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bevis at $4^n - 1$ er delelig med 3 for alle $n \\geq 1$.',
        solution: 'Basisteg: $4^1 - 1 = 3$ ✓. Induksjonssteg: $4^{k+1} - 1 = 4(4^k - 1) + 3$, begge ledd delelig med 3.',
        hints: ['Skriv om $4^{k+1}$ som $4 \\cdot 4^k$.'],
      },
    },
    {
      id: 'r2-1-6-text-2',
      type: 'text',
      content: `## Oppsummering

**Tips for induksjonsbevis:**
- Formuler pastanden $P(n)$ klart
- Sjekk alltid basisteget forst
- Bruk induksjonshypotesen eksplisitt
- Vis tydelig hvordan du far $P(k+1)$ fra $P(k)$`,
    },
  ],
  exercises: [],
};

export const CHAPTER_R2_1_7: TextbookChapter = {
  id: 'r2-1-7',
  courseId: 'r2',
  chapterNumber: '1.7',
  title: 'Rekursive sammenhenger og programmering',
  description: 'Bruk programmering til å utforske følger og rekker.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske rekursive samanhengar ved a bruke programmering'],
  content: [
    {
      id: 'r2-1-7-intro',
      type: 'text',
      content: `## Programmering og rekursjon

Programmering er et kraftig verktøy for å utforske matematiske sammenhenger. Vi kan bruke Python til å generere følger, beregne summer og simulere rekursive prosesser.`,
    },
    {
      id: 'r2-1-7-def-1',
      type: 'definition',
      title: 'Rekursjon',
      content: `En **rekursiv definisjon** definerer en verdi ved hjelp av tidligere verdier.

For følger: $a_n = f(a_{n-1}, a_{n-2}, \\ldots)$

En rekursiv definisjon trenger alltid **startverdier** (basiskasus).`,
    },
    {
      id: 'r2-1-7-example-1',
      type: 'example',
      title: 'Eksempel 1: Aritmetisk folge i Python',
      problem: 'Skriv et program som genererer de 10 forste leddene i folgen $a_n = 3 + 5(n-1)$.',
      solution: `\`\`\`python
# Rekursiv metode
a = 3  # Startverdi
for n in range(1, 11):
    print(f"a_{n} = {a}")
    a = a + 5  # a_n = a_{n-1} + 5
\`\`\`

**Utskrift:**
a_1 = 3, a_2 = 8, a_3 = 13, ..., a_10 = 48`,
    },
    {
      id: 'r2-1-7-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'r2-1-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et Python-program som genererer de 15 forste leddene i folgen med $a_1 = 10$ og $d = -3$.',
        solution: 'Programmet skal gi: 10, 7, 4, 1, -2, -5, ..., -32',
        hints: ['Bruk en for-lokke.', 'Oppdater $a$ med $a = a - 3$.'],
      },
    },
    {
      id: 'r2-1-7-example-2',
      type: 'example',
      title: 'Eksempel 2: Fibonacci i Python',
      problem: 'Skriv et program som beregner de 20 forste Fibonacci-tallene.',
      solution: `\`\`\`python
fib = [1, 1]
for i in range(2, 20):
    fib.append(fib[i-1] + fib[i-2])

for i, f in enumerate(fib, 1):
    print(f"F_{i} = {f}")
\`\`\`

**Utskrift:** F_1 = 1, F_2 = 1, F_3 = 2, ..., F_20 = 6765`,
    },
    {
      id: 'r2-1-7-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'r2-1-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn forholdet $\\frac{F_n}{F_{n-1}}$ for store $n$. Hva skjer?',
        solution: 'Forholdet konvergerer mot det gylne snitt $\\phi \\approx 1{,}618$.',
        hints: ['Legg til beregning av fib[i]/fib[i-1].'],
      },
    },
    {
      id: 'r2-1-7-text-2',
      type: 'text',
      content: `## Rekursive funksjoner

En **rekursiv funksjon** er en funksjon som kaller seg selv. Den ma ha et basiskasus som stopper rekursjonen.`,
    },
    {
      id: 'r2-1-7-example-3',
      type: 'example',
      title: 'Eksempel 3: Fakultet rekursivt',
      problem: 'Implementer fakultet $n! = n \\cdot (n-1)!$ som en rekursiv funksjon.',
      solution: `\`\`\`python
def fakultet(n):
    if n <= 1:
        return 1
    return n * fakultet(n - 1)

for i in range(10):
    print(f"{i}! = {fakultet(i)}")
\`\`\``,
    },
    {
      id: 'r2-1-7-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'r2-1-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en rekursiv funksjon for det n-te Fibonacci-tallet.',
        solution: 'def fib(n): return 1 if n <= 2 else fib(n-1) + fib(n-2)',
        hints: ['Basiskasus: $F_1 = F_2 = 1$.'],
      },
    },
    {
      id: 'r2-1-7-example-4',
      type: 'example',
      title: 'Eksempel 4: Simulere sprettball',
      problem: 'Simuler en ball fra 10 m som spretter til 80% av forrige høyde.',
      solution: `\`\`\`python
h = 10
total = h
while h > 0.001:
    h = h * 0.8
    total += 2 * h

print(f"Total strekning: {total:.2f} m")
\`\`\`

**Utskrift:** Total strekning: 90.00 m (narmer seg teoretisk 90)`,
    },
    {
      id: 'r2-1-7-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'r2-1-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Modifiser programmet til å finne nar ballen spretter under 1 cm.',
        solution: 'Med sprettfaktor 0.8 trengs det 42 sprett.',
        hints: ['Tell antall iterasjoner.'],
      },
    },
    {
      id: 'r2-1-7-text-3',
      type: 'text',
      content: `## Oppsummering

**Rekursjon i programmering:**
- Rekursive definisjoner kan implementeres som rekursive funksjoner
- Alternativt bruker vi lokker (iterasjon)
- Rekursive funksjoner ma alltid ha et basiskasus

**Typiske anvendelser:**
| Problem | Rekursiv formel |
|---------|-----------------|
| Aritmetisk folge | $a_n = a_{n-1} + d$ |
| Geometrisk folge | $a_n = k \\cdot a_{n-1}$ |
| Fibonacci | $F_n = F_{n-1} + F_{n-2}$ |
| Fakultet | $n! = n \\cdot (n-1)!$ |`,
    },
  ],
  exercises: [],
};

