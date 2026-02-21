/**
 * Tekstbok kapitler for S2 - Kapittel 7 (Rekker og serier)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_S2_7_1: TextbookChapter = {
  id: 's2-7-1',
  courseId: 's2',
  chapterNumber: '7.1',
  title: 'Aritmetiske følger og rekker',
  description: 'Lær om aritmetiske følger, eksplisitt formel for det n-te leddet, og sum av aritmetisk rekke.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for begrepene rekker, konvergens og divergens, og bruke rekker i modellering',
    'beregne summen av endelige aritmetiske og geometriske rekker og bruke dette i praktiske situasjoner'
  ],
  content: [
    {
      id: 's2-7-1-intro',
      type: 'text',
      content: `## Hva er en følge?

En **følge** er en ordnet liste med tall som følger et bestemt mønster. Vi skriver følgen som $a_1, a_2, a_3, \\ldots$ der $a_n$ betegner det $n$-te leddet.

I dette kapittelet skal vi studere **aritmetiske følger**, der differansen mellom hvert ledd og det foregående er konstant. Denne konstante differansen kaller vi $d$. Aritmetiske følger dukker opp i mange sammenhenger, for eksempel i lineær vekst, avdrag på serielån og nummerering.`
    },
    {
      id: 's2-7-1-def-1',
      type: 'definition',
      title: 'Aritmetisk følge',
      content: `En **aritmetisk følge** er en tallrekke der differansen mellom hvert ledd og det foregående er konstant:

$$a_{n+1} - a_n = d \\quad \\text{for alle } n \\geq 1$$

Her er $d$ den **faste differansen**. Følgen er voksende dersom $d > 0$ og avtagende dersom $d < 0$.

**Eksempler:**
- $2, 5, 8, 11, 14, \\ldots$ har $d = 3$
- $20, 17, 14, 11, \\ldots$ har $d = -3$`
    },
    {
      id: 's2-7-1-def-2',
      type: 'definition',
      title: 'Eksplisitt formel for aritmetisk følge',
      content: `Det $n$-te leddet i en aritmetisk følge med første ledd $a_1$ og differanse $d$ er gitt ved:

$$a_n = a_1 + (n - 1) \\cdot d$$

Denne formelen lar oss beregne et vilkårlig ledd direkte uten å kjenne alle de foregående leddene.`
    },
    {
      id: 's2-7-1-example-1',
      type: 'example',
      title: 'Finn formel og bestemte ledd',
      problem: `En aritmetisk følge har $a_1 = 4$ og $d = 3$. Finn det 20. leddet og det $n$-te leddet.`,
      solution: `Vi bruker formelen $a_n = a_1 + (n-1) \\cdot d$.

**Det $n$-te leddet:**
$$a_n = 4 + (n-1) \\cdot 3 = 4 + 3n - 3 = 3n + 1$$

**Det 20. leddet:**
$$a_{20} = 3 \\cdot 20 + 1 = 61$$

**Kontroll:** De første leddene er $4, 7, 10, 13, \\ldots$ som stemmer med $a_n = 3n + 1$.`
    },
    {
      id: 's2-7-1-text-rekker',
      type: 'text',
      content: `## Fra følger til rekker

Når vi legger sammen leddene i en følge, får vi en **rekke**. Summen av de $n$ første leddene i en aritmetisk følge kaller vi $S_n$:

$$S_n = a_1 + a_2 + a_3 + \\cdots + a_n$$

Gauss oppdaget som barn en elegant formel for denne summen. Trikset er å skrive summen to ganger - én gang forlengs og én gang baklengs - og legge dem sammen. Da blir hvert par lik $a_1 + a_n$, og det er $n$ slike par.`
    },
    {
      id: 's2-7-1-theorem-1',
      type: 'theorem',
      title: 'Sum av aritmetisk rekke',
      content: `Summen av de $n$ første leddene i en aritmetisk følge er:

$$S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}\\bigl(2a_1 + (n-1)d\\bigr)$$

**Bevis:** Skriv summen forlengs og baklengs:
$$S_n = a_1 + (a_1 + d) + \\cdots + a_n$$
$$S_n = a_n + (a_n - d) + \\cdots + a_1$$
Legg sammen: $2S_n = n(a_1 + a_n)$, altså $S_n = \\frac{n(a_1 + a_n)}{2}$.`
    },
    {
      id: 's2-7-1-example-2',
      type: 'example',
      title: 'Beregn sum av aritmetisk rekke',
      problem: `Finn summen $S_{50}$ av de 50 første leddene i følgen $3, 7, 11, 15, \\ldots$`,
      solution: `Vi identifiserer $a_1 = 3$ og $d = 4$.

**Finn $a_{50}$:**
$$a_{50} = 3 + (50-1) \\cdot 4 = 3 + 196 = 199$$

**Beregn summen:**
$$S_{50} = \\frac{50}{2}(a_1 + a_{50}) = 25 \\cdot (3 + 199) = 25 \\cdot 202 = 5050$$

**Alternativ metode:**
$$S_{50} = \\frac{50}{2}(2 \\cdot 3 + 49 \\cdot 4) = 25 \\cdot (6 + 196) = 25 \\cdot 202 = 5050$$`
    },
    {
      id: 's2-7-1-def-3',
      type: 'definition',
      title: 'Summetegnet (sigma-notasjon)',
      content: `Vi bruker det greske bokstaven sigma ($\\Sigma$) for å skrive summer kompakt:

$$\\sum_{k=1}^{n} a_k = a_1 + a_2 + a_3 + \\cdots + a_n$$

Her er $k$ **summeindeksen**, $1$ er **nedre grense** og $n$ er **øvre grense**.

**Eksempel:** $\\sum_{k=1}^{5} (2k+1) = 3 + 5 + 7 + 9 + 11 = 35$`
    },
    {
      id: 's2-7-1-text-anvendelser',
      type: 'text',
      content: `## Anvendelser av aritmetiske rekker

Aritmetiske rekker dukker opp i mange praktiske sammenhenger:

- **Serielån:** Avdragene er like store, og terminbeløpet avtar med en fast differanse
- **Lineær vekst:** Antall nye kunder per måned øker med et fast antall
- **Trappemønster:** Antall blokker i en trappefigur med jevnt økende rader

Nøkkelen er å identifisere at differansen mellom påfølgende verdier er konstant. Da kan du bruke formlene for aritmetiske følger og rekker.`
    },
    {
      id: 's2-7-1-example-3',
      type: 'example',
      title: 'Praktisk anvendelse: møtesal med rader',
      problem: `En møtesal har rader med stoler. Første rad har 12 stoler, og hver rad har 2 stoler mer enn raden foran. Det er 20 rader totalt. Hvor mange stoler er det i salen?`,
      solution: `Dette er en aritmetisk rekke med $a_1 = 12$, $d = 2$ og $n = 20$.

**Antall stoler i siste rad:**
$$a_{20} = 12 + (20-1) \\cdot 2 = 12 + 38 = 50$$

**Totalt antall stoler:**
$$S_{20} = \\frac{20}{2}(12 + 50) = 10 \\cdot 62 = 620$$

Det er **620 stoler** i salen.`
    },
    {
      id: 's2-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Avgjør om følgen $5, 9, 13, 17, 21, \\ldots$ er aritmetisk. Bestem i så fall $d$.', solution: 'Differansen mellom hvert ledd: $9-5 = 4$, $13-9 = 4$, $17-13 = 4$. Differansen er konstant, så følgen er aritmetisk med $d = 4$.' },
          { label: 'b', task: 'Finn det 30. leddet i følgen fra oppgave a).', solution: '$a_{30} = 5 + (30-1) \\cdot 4 = 5 + 116 = 121$' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En aritmetisk følge har $a_1 = 100$ og $d = -7$. Finn en formel for $a_n$.', solution: '$a_n = 100 + (n-1)(-7) = 100 - 7n + 7 = 107 - 7n$' },
          { label: 'b', task: 'For hvilken verdi av $n$ er $a_n = 2$?', solution: '$107 - 7n = 2 \\Rightarrow 7n = 105 \\Rightarrow n = 15$' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn summen $1 + 2 + 3 + \\cdots + 100$.', solution: '$S_{100} = \\frac{100}{2}(1 + 100) = 50 \\cdot 101 = 5050$' },
          { label: 'b', task: 'Finn summen $2 + 4 + 6 + \\cdots + 200$.', solution: 'Aritmetisk rekke med $a_1 = 2$, $d = 2$, $a_n = 200 \\Rightarrow n = 100$. $S_{100} = \\frac{100}{2}(2 + 200) = 50 \\cdot 202 = 10\\,100$' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Skriv ut de fem første leddene i følgen gitt ved $a_n = 3n - 2$.', solution: '$a_1 = 1$, $a_2 = 4$, $a_3 = 7$, $a_4 = 10$, $a_5 = 13$. Følgen er $1, 4, 7, 10, 13$.' },
          { label: 'b', task: 'Vis at følgen i a) er aritmetisk og bestem $d$.', solution: '$a_{n+1} - a_n = 3(n+1) - 2 - (3n - 2) = 3n + 3 - 2 - 3n + 2 = 3$. Differansen er konstant lik $d = 3$, så følgen er aritmetisk.' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en aritmetisk følge er $a_3 = 14$ og $a_7 = 30$. Finn $a_1$ og $d$.', solution: '$a_7 - a_3 = 4d \\Rightarrow 30 - 14 = 4d \\Rightarrow d = 4$. $a_3 = a_1 + 2d \\Rightarrow 14 = a_1 + 8 \\Rightarrow a_1 = 6$.' },
          { label: 'b', task: 'Finn $S_{20}$ for følgen i a).', solution: '$a_{20} = 6 + 19 \\cdot 4 = 82$. $S_{20} = \\frac{20}{2}(6 + 82) = 10 \\cdot 88 = 880$.' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Beregn $\\sum_{k=1}^{40}(3k + 2)$.', solution: 'Dette er en aritmetisk rekke med $a_1 = 5$, $d = 3$, $n = 40$. $a_{40} = 3 \\cdot 40 + 2 = 122$. $S_{40} = \\frac{40}{2}(5 + 122) = 20 \\cdot 127 = 2540$.' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Summen av de $n$ første leddene i en aritmetisk rekke er $S_n = 2n^2 + 3n$. Finn $a_1$ og $d$.', solution: '$a_1 = S_1 = 2 + 3 = 5$. $a_2 = S_2 - S_1 = (8+6) - 5 = 9$. $d = a_2 - a_1 = 9 - 5 = 4$.' },
          { label: 'b', task: 'Finn en formel for $a_n$.', solution: '$a_n = S_n - S_{n-1} = (2n^2 + 3n) - (2(n-1)^2 + 3(n-1)) = 2n^2 + 3n - 2n^2 + 4n - 2 - 3n + 3 = 4n + 1$.' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et amfiteater har 30 rader. Første rad har 20 seter, og hver rad har 3 seter mer enn den foregående. Finn det totale antallet seter.', solution: 'Aritmetisk rekke med $a_1 = 20$, $d = 3$, $n = 30$. $a_{30} = 20 + 29 \\cdot 3 = 107$. $S_{30} = \\frac{30}{2}(20 + 107) = 15 \\cdot 127 = 1905$ seter.' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Tre tall i en aritmetisk følge har sum 27 og produkt 504. Finn tallene.', solution: 'La tallene være $a-d$, $a$, $a+d$. Sum: $3a = 27 \\Rightarrow a = 9$. Produkt: $(9-d) \\cdot 9 \\cdot (9+d) = 504 \\Rightarrow 9(81 - d^2) = 504 \\Rightarrow 81 - d^2 = 56 \\Rightarrow d^2 = 25 \\Rightarrow d = \\pm 5$. Tallene er $4, 9, 14$ (eller $14, 9, 4$).' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at summen av de $n$ første oddetallene er $n^2$.', solution: 'De $n$ første oddetallene er $1, 3, 5, \\ldots, (2n-1)$. Dette er en aritmetisk rekke med $a_1 = 1$, $a_n = 2n-1$. $S_n = \\frac{n}{2}(1 + 2n - 1) = \\frac{n \\cdot 2n}{2} = n^2$.' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en aritmetisk følge er $S_{10} = 200$ og $S_{20} = 800$. Finn $a_1$ og $d$.', solution: '$S_{10} = \\frac{10}{2}(2a_1 + 9d) = 5(2a_1 + 9d) = 200 \\Rightarrow 2a_1 + 9d = 40$. $S_{20} = \\frac{20}{2}(2a_1 + 19d) = 10(2a_1 + 19d) = 800 \\Rightarrow 2a_1 + 19d = 80$. Trekk fra: $10d = 40 \\Rightarrow d = 4$. Da $2a_1 = 40 - 36 = 4 \\Rightarrow a_1 = 2$.' },
          { label: 'b', task: 'Finn $S_{30}$ for følgen i a).', solution: '$S_{30} = \\frac{30}{2}(2 \\cdot 2 + 29 \\cdot 4) = 15(4 + 116) = 15 \\cdot 120 = 1800$.' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En bedrift planlegger å øke produksjonen lineært. I januar produseres 500 enheter, og produksjonen øker med 30 enheter per måned. Finn total produksjon for hele året.', solution: 'Aritmetisk rekke med $a_1 = 500$, $d = 30$, $n = 12$. $a_{12} = 500 + 11 \\cdot 30 = 830$. $S_{12} = \\frac{12}{2}(500 + 830) = 6 \\cdot 1330 = 7980$ enheter.' },
          { label: 'b', task: 'Etter hvor mange måneder har bedriften produsert totalt 10\\,000 enheter?', solution: '$S_n = \\frac{n}{2}(2 \\cdot 500 + (n-1) \\cdot 30) = \\frac{n}{2}(1000 + 30n - 30) = \\frac{n}{2}(970 + 30n) = 15n^2 + 485n$. Sett $15n^2 + 485n = 10\\,000$. $15n^2 + 485n - 10\\,000 = 0$. $3n^2 + 97n - 2000 = 0$. $n = \\frac{-97 + \\sqrt{9409 + 24000}}{6} = \\frac{-97 + \\sqrt{33409}}{6} \\approx \\frac{-97 + 182{,}8}{6} \\approx 14{,}3$. Etter 15 måneder.' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn verdien av $\\sum_{k=1}^{n} k = 1 + 2 + 3 + \\cdots + n$ uttrykt ved $n$.', solution: 'Aritmetisk rekke med $a_1 = 1$, $a_n = n$. $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$.' },
          { label: 'b', task: 'Bruk resultatet i a) til å finne $\\sum_{k=1}^{n}(2k-1)$.', solution: '$\\sum_{k=1}^{n}(2k-1) = 2\\sum_{k=1}^{n} k - \\sum_{k=1}^{n} 1 = 2 \\cdot \\frac{n(n+1)}{2} - n = n^2 + n - n = n^2$.' }
        ]
      }
    },
    {
      id: 's2-7-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-7-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at dersom $a$, $b$ og $c$ er tre påfølgende ledd i en aritmetisk følge, så er $b = \\frac{a+c}{2}$.', solution: 'Siden $b - a = c - b = d$, får vi $2b = a + c$, altså $b = \\frac{a+c}{2}$. Vi kaller $b$ det **aritmetiske middelet** av $a$ og $c$.' }
        ]
      }
    },
    {
      id: 's2-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Aritmetisk følge:** Differansen $d = a_{n+1} - a_n$ er konstant.

**Eksplisitt formel:** $a_n = a_1 + (n-1)d$

**Sum av aritmetisk rekke:**
$$S_n = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}(2a_1 + (n-1)d)$$

**Tips for oppgaveløsning:**
- Identifiser $a_1$ og $d$ fra oppgaveteksten
- Bruk den eksplisitte formelen for å finne enkeltledd
- Bruk sumformelen for å finne summen av flere ledd
- Sjekk svaret ved å beregne de første leddene manuelt`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_7_2: TextbookChapter = {
  id: 's2-7-2',
  courseId: 's2',
  chapterNumber: '7.2',
  title: 'Geometriske følger og rekker',
  description: 'Lær om geometriske følger, kvotienten mellom ledd, og sum av endelig geometrisk rekke.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for begrepene rekker, konvergens og divergens, og bruke rekker i modellering',
    'beregne summen av endelige aritmetiske og geometriske rekker og bruke dette i praktiske situasjoner'
  ],
  content: [
    {
      id: 's2-7-2-intro',
      type: 'text',
      content: `## Fra addisjon til multiplikasjon

I forrige kapittel så vi på aritmetiske følger der vi la til et fast tall for å komme til neste ledd. I en **geometrisk følge** multipliserer vi i stedet med et fast tall. Geometriske følger modellerer eksponentiell vekst og er helt sentrale i økonomi (renter, lån, investeringer).`
    },
    {
      id: 's2-7-2-def-1',
      type: 'definition',
      title: 'Geometrisk følge',
      content: `En **geometrisk følge** er en tallrekke der forholdet (kvotienten) mellom hvert ledd og det foregående er konstant:

$$\\frac{a_{n+1}}{a_n} = k \\quad \\text{for alle } n \\geq 1, \\ a_n \\neq 0$$

Her er $k$ den **faste kvotienten** (også kalt fellesforholdet).

**Eksempler:**
- $2, 6, 18, 54, \\ldots$ har $k = 3$
- $100, 50, 25, 12{,}5, \\ldots$ har $k = \\frac{1}{2}$
- $1, -2, 4, -8, 16, \\ldots$ har $k = -2$`
    },
    {
      id: 's2-7-2-def-2',
      type: 'definition',
      title: 'Eksplisitt formel for geometrisk følge',
      content: `Det $n$-te leddet i en geometrisk følge med første ledd $a_1$ og kvotient $k$ er:

$$a_n = a_1 \\cdot k^{n-1}$$

Merk likheten med eksponentiell vekst: $f(x) = a \\cdot b^x$.`
    },
    {
      id: 's2-7-2-example-1',
      type: 'example',
      title: 'Finn formel og bestemte ledd',
      problem: `En geometrisk følge har $a_1 = 5$ og $k = 2$. Finn $a_{10}$ og en formel for $a_n$.`,
      solution: `**Det $n$-te leddet:**
$$a_n = 5 \\cdot 2^{n-1}$$

**Det 10. leddet:**
$$a_{10} = 5 \\cdot 2^{9} = 5 \\cdot 512 = 2560$$

**Kontroll:** De første leddene er $5, 10, 20, 40, 80, \\ldots$ som stemmer med $a_n = 5 \\cdot 2^{n-1}$.`
    },
    {
      id: 's2-7-2-text-sum',
      type: 'text',
      content: `## Sum av geometrisk rekke

For å finne summen av en geometrisk rekke bruker vi et elegant triks. Vi multipliserer summen $S_n$ med kvotienten $k$ og trekker fra:

$$S_n = a_1 + a_1 k + a_1 k^2 + \\cdots + a_1 k^{n-1}$$
$$k \\cdot S_n = a_1 k + a_1 k^2 + \\cdots + a_1 k^n$$

Nesten alle ledd kansellerer, og vi står igjen med en enkel formel.`
    },
    {
      id: 's2-7-2-theorem-1',
      type: 'theorem',
      title: 'Sum av endelig geometrisk rekke',
      content: `Summen av de $n$ første leddene i en geometrisk følge med $k \\neq 1$ er:

$$S_n = a_1 \\cdot \\frac{k^n - 1}{k - 1}$$

**Bevis:** La $S_n = a_1 + a_1k + a_1k^2 + \\cdots + a_1k^{n-1}$.

Multipliser med $k$: $kS_n = a_1k + a_1k^2 + \\cdots + a_1k^n$.

Trekk fra: $kS_n - S_n = a_1k^n - a_1$, altså $S_n(k-1) = a_1(k^n - 1)$.

Dermed: $S_n = a_1 \\cdot \\frac{k^n - 1}{k - 1}$.`
    },
    {
      id: 's2-7-2-example-2',
      type: 'example',
      title: 'Beregn sum av geometrisk rekke',
      problem: `Finn summen $S_8$ av de 8 første leddene i følgen $3, 6, 12, 24, \\ldots$`,
      solution: `Vi identifiserer $a_1 = 3$ og $k = 2$.

$$S_8 = 3 \\cdot \\frac{2^8 - 1}{2 - 1} = 3 \\cdot \\frac{256 - 1}{1} = 3 \\cdot 255 = 765$$

**Kontroll:** $3 + 6 + 12 + 24 + 48 + 96 + 192 + 384 = 765$ ✓`
    },
    {
      id: 's2-7-2-def-3',
      type: 'definition',
      title: 'Vekstfaktor og prosentvis endring',
      content: `I økonomiske sammenhenger er kvotienten $k$ ofte en **vekstfaktor**:

- **Vekst på $p\\%$:** $k = 1 + \\frac{p}{100}$
- **Reduksjon på $p\\%$:** $k = 1 - \\frac{p}{100}$

**Eksempel:** En investering som vokser $5\\%$ per år har $k = 1{,}05$. Etter $n$ år er verdien $a_n = a_1 \\cdot 1{,}05^{n-1}$.`
    },
    {
      id: 's2-7-2-text-anvendelser',
      type: 'text',
      content: `## Geometriske rekker i økonomi

Geometriske rekker er helt sentrale i finansmatematikk:

- **Sammensatt rente:** Innskudd som vokser med fast rentesats
- **Regelmessig sparing:** Faste innskudd med renter gir en geometrisk rekke
- **Avskrivning:** Verdien av utstyr som synker med fast prosent

Vi skal utforske disse økonomiske anvendelsene grundig i kapittel 7.4.`
    },
    {
      id: 's2-7-2-example-3',
      type: 'example',
      title: 'Praktisk anvendelse: bakterievekst',
      problem: `En bakteriekultur dobler seg hver time. Det er 500 bakterier ved start. Finn det totale antallet bakterier som har eksistert i løpet av de første 10 timene.`,
      solution: `Antall bakterier per time danner en geometrisk følge med $a_1 = 500$ og $k = 2$.

**Antall etter 10 timer:**
$$a_{10} = 500 \\cdot 2^{9} = 500 \\cdot 512 = 256\\,000$$

**Totalt antall som har eksistert (sum):**
$$S_{10} = 500 \\cdot \\frac{2^{10} - 1}{2 - 1} = 500 \\cdot (1024 - 1) = 500 \\cdot 1023 = 511\\,500$$

Totalt har $511\\,500$ bakterier eksistert i løpet av de 10 timene.`
    },
    {
      id: 's2-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Avgjør om følgen $4, 12, 36, 108, \\ldots$ er geometrisk. Bestem i så fall $k$.', solution: '$\\frac{12}{4} = 3$, $\\frac{36}{12} = 3$, $\\frac{108}{36} = 3$. Kvotienten er konstant, så følgen er geometrisk med $k = 3$.' },
          { label: 'b', task: 'Finn det 8. leddet i følgen fra oppgave a).', solution: '$a_8 = 4 \\cdot 3^{7} = 4 \\cdot 2187 = 8748$' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En geometrisk følge har $a_1 = 1000$ og $k = 0{,}5$. Finn $a_5$.', solution: '$a_5 = 1000 \\cdot 0{,}5^{4} = 1000 \\cdot 0{,}0625 = 62{,}5$' },
          { label: 'b', task: 'Finn $S_5$ for følgen i a).', solution: '$S_5 = 1000 \\cdot \\frac{0{,}5^5 - 1}{0{,}5 - 1} = 1000 \\cdot \\frac{-0{,}96875}{-0{,}5} = 1000 \\cdot 1{,}9375 = 1937{,}5$' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Skriv ut de fem første leddene i følgen gitt ved $a_n = 3 \\cdot 2^n$.', solution: '$a_1 = 6$, $a_2 = 12$, $a_3 = 24$, $a_4 = 48$, $a_5 = 96$.' },
          { label: 'b', task: 'Vis at følgen i a) er geometrisk og bestem $k$.', solution: '$\\frac{a_{n+1}}{a_n} = \\frac{3 \\cdot 2^{n+1}}{3 \\cdot 2^n} = 2$. Kvotienten er konstant lik $k = 2$, så følgen er geometrisk.' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn summen $1 + 3 + 9 + 27 + \\cdots + 3^9$.', solution: 'Geometrisk rekke med $a_1 = 1$, $k = 3$, $n = 10$. $S_{10} = 1 \\cdot \\frac{3^{10} - 1}{3 - 1} = \\frac{59049 - 1}{2} = \\frac{59048}{2} = 29524$.' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en geometrisk følge er $a_2 = 6$ og $a_5 = 162$. Finn $a_1$ og $k$.', solution: '$a_5 = a_2 \\cdot k^3 \\Rightarrow 162 = 6 \\cdot k^3 \\Rightarrow k^3 = 27 \\Rightarrow k = 3$. $a_2 = a_1 \\cdot k \\Rightarrow 6 = 3a_1 \\Rightarrow a_1 = 2$.' },
          { label: 'b', task: 'Finn $S_8$ for følgen i a).', solution: '$S_8 = 2 \\cdot \\frac{3^8 - 1}{3 - 1} = 2 \\cdot \\frac{6561 - 1}{2} = 6560$.' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En maskin koster 200\\,000 kr og mister $20\\%$ av sin verdi hvert år. Hva er verdien etter 5 år?', solution: '$k = 1 - 0{,}20 = 0{,}80$. $a_6 = 200\\,000 \\cdot 0{,}80^5 = 200\\,000 \\cdot 0{,}32768 = 65\\,536$ kr. (Her er $a_1$ verdien ved start, $a_6$ etter 5 år.)' },
          { label: 'b', task: 'Etter hvor mange hele år er verdien under 50\\,000 kr?', solution: '$200\\,000 \\cdot 0{,}80^n < 50\\,000 \\Rightarrow 0{,}80^n < 0{,}25 \\Rightarrow n \\ln(0{,}80) < \\ln(0{,}25) \\Rightarrow n > \\frac{\\ln(0{,}25)}{\\ln(0{,}80)} \\approx \\frac{-1{,}386}{-0{,}223} \\approx 6{,}21$. Etter 7 hele år.' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn summen $\\sum_{k=0}^{7} 5 \\cdot 2^k$.', solution: '$\\sum_{k=0}^{7} 5 \\cdot 2^k = 5 \\cdot \\sum_{k=0}^{7} 2^k = 5 \\cdot \\frac{2^8 - 1}{2 - 1} = 5 \\cdot 255 = 1275$.' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et smittestoff sprer seg slik at antall smittede tredobles hver uke. I uke 1 er det 10 smittede. Hvor mange er smittet totalt etter 6 uker?', solution: '$S_6 = 10 \\cdot \\frac{3^6 - 1}{3 - 1} = 10 \\cdot \\frac{729 - 1}{2} = 10 \\cdot 364 = 3640$ smittede totalt.' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Tre tall i en geometrisk følge har sum 21 og produkt 216. Finn tallene.', solution: 'La tallene være $\\frac{a}{k}$, $a$, $ak$. Produkt: $\\frac{a}{k} \\cdot a \\cdot ak = a^3 = 216 \\Rightarrow a = 6$. Sum: $\\frac{6}{k} + 6 + 6k = 21 \\Rightarrow \\frac{6}{k} + 6k = 15 \\Rightarrow 6 + 6k^2 = 15k \\Rightarrow 6k^2 - 15k + 6 = 0 \\Rightarrow 2k^2 - 5k + 2 = 0 \\Rightarrow (2k-1)(k-2) = 0$. $k = 2$ eller $k = \\frac{1}{2}$. Tallene er $3, 6, 12$.' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at dersom $a$, $b$ og $c$ er tre påfølgende ledd i en geometrisk følge, så er $b^2 = ac$.', solution: 'Siden $\\frac{b}{a} = \\frac{c}{b} = k$, har vi $b = ak$ og $c = bk = ak^2$. Da er $ac = a \\cdot ak^2 = a^2k^2 = (ak)^2 = b^2$.' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En investering på 50\\,000 kr vokser $8\\%$ per år. Etter hvor mange år er investeringen verdt mer enn 100\\,000 kr?', solution: '$50\\,000 \\cdot 1{,}08^n > 100\\,000 \\Rightarrow 1{,}08^n > 2 \\Rightarrow n > \\frac{\\ln 2}{\\ln 1{,}08} \\approx \\frac{0{,}693}{0{,}077} \\approx 9{,}01$. Etter 10 år.' },
          { label: 'b', task: 'Hva er den totale verdiskapningen (sum av verdier ved slutten av hvert år) de første 10 årene?', solution: 'Verdien ved slutten av år $n$ er $50\\,000 \\cdot 1{,}08^n$. $S = \\sum_{n=1}^{10} 50\\,000 \\cdot 1{,}08^n = 50\\,000 \\cdot 1{,}08 \\cdot \\frac{1{,}08^{10} - 1}{1{,}08 - 1} = 54\\,000 \\cdot \\frac{2{,}1589 - 1}{0{,}08} \\approx 54\\,000 \\cdot 14{,}487 \\approx 782\\,268$ kr.' }
        ]
      }
    },
    {
      id: 's2-7-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-7-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en geometrisk rekke er $S_3 = 7$ og $S_6 = 63$. Finn $k$ og $a_1$.', solution: '$S_6 = S_3 + a_1 k^3 \\cdot \\frac{k^3 - 1}{k-1}$. Alternativt: $\\frac{S_6}{S_3} = \\frac{a_1(k^6-1)/(k-1)}{a_1(k^3-1)/(k-1)} = \\frac{k^6-1}{k^3-1} = \\frac{(k^3-1)(k^3+1)}{k^3-1} = k^3 + 1$. $\\frac{63}{7} = 9 = k^3 + 1 \\Rightarrow k^3 = 8 \\Rightarrow k = 2$. $S_3 = a_1 \\cdot \\frac{8-1}{1} = 7a_1 = 7 \\Rightarrow a_1 = 1$.' }
        ]
      }
    },
    {
      id: 's2-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Geometrisk følge:** Kvotienten $k = \\frac{a_{n+1}}{a_n}$ er konstant.

**Eksplisitt formel:** $a_n = a_1 \\cdot k^{n-1}$

**Sum av endelig geometrisk rekke ($k \\neq 1$):**
$$S_n = a_1 \\cdot \\frac{k^n - 1}{k - 1}$$

**Sammenheng med eksponentiell vekst:**
- Vekst på $p\\%$: $k = 1 + \\frac{p}{100}$
- Geometriske følger modellerer multiplikativ (eksponentiell) endring

**Forskjell mellom aritmetisk og geometrisk:**
- Aritmetisk: vi **legger til** en fast verdi $d$ (lineær vekst)
- Geometrisk: vi **multipliserer** med en fast verdi $k$ (eksponentiell vekst)`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_7_3: TextbookChapter = {
  id: 's2-7-3',
  courseId: 's2',
  chapterNumber: '7.3',
  title: 'Uendelige geometriske rekker',
  description: 'Lær om konvergens og divergens, sum av uendelig geometrisk rekke, og praktiske anvendelser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for begrepene rekker, konvergens og divergens, og bruke rekker i modellering',
    'avgjøre om en uendelig geometrisk rekke konvergerer, og i så fall beregne summen'
  ],
  content: [
    {
      id: 's2-7-3-intro',
      type: 'text',
      content: `## Kan en uendelig sum bli endelig?

Et av de mest fascinerende resultatene i matematikken er at vi kan legge sammen **uendelig mange** tall og likevel få et **endelig** svar. Tenk deg at du går halvparten av veien til en vegg, deretter halvparten av den gjenstående avstanden, og så videre. Du legger altså sammen $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$ Intuitivt nærmer du deg veggen, og summen nærmer seg $1$.

I dette kapittelet skal vi formalisere denne ideen og finne ut nøyaktig når en uendelig geometrisk rekke har en endelig sum.`
    },
    {
      id: 's2-7-3-def-1',
      type: 'definition',
      title: 'Konvergens og divergens',
      content: `En uendelig rekke $\\sum_{n=1}^{\\infty} a_n = a_1 + a_2 + a_3 + \\cdots$ er **konvergent** dersom delsummene

$$S_n = a_1 + a_2 + \\cdots + a_n$$

nærmer seg en bestemt verdi $S$ når $n \\to \\infty$. Vi skriver da:

$$\\sum_{n=1}^{\\infty} a_n = S$$

Dersom delsummene ikke nærmer seg noen bestemt verdi, er rekken **divergent**.`
    },
    {
      id: 's2-7-3-theorem-1',
      type: 'theorem',
      title: 'Sum av uendelig geometrisk rekke',
      content: `En uendelig geometrisk rekke med første ledd $a_1$ og kvotient $k$ **konvergerer** dersom $|k| < 1$, og summen er:

$$S = \\frac{a_1}{1 - k} \\quad \\text{når } |k| < 1$$

Dersom $|k| \\geq 1$, **divergerer** rekken.

**Bevis:** Vi starter med $S_n = a_1 \\cdot \\frac{k^n - 1}{k - 1} = \\frac{a_1}{1-k}(1 - k^n)$.

Når $|k| < 1$, har vi $k^n \\to 0$ når $n \\to \\infty$, slik at:
$$S = \\lim_{n \\to \\infty} S_n = \\frac{a_1}{1-k}(1 - 0) = \\frac{a_1}{1-k}$$`
    },
    {
      id: 's2-7-3-example-1',
      type: 'example',
      title: 'Sum av uendelig geometrisk rekke',
      problem: `Avgjør om rekken $\\sum_{n=0}^{\\infty} 6 \\cdot \\left(\\frac{1}{3}\\right)^n$ konvergerer, og finn i så fall summen.`,
      solution: `Vi identifiserer $a_1 = 6$ (leddet for $n=0$) og $k = \\frac{1}{3}$.

Siden $|k| = \\frac{1}{3} < 1$, **konvergerer** rekken.

$$S = \\frac{a_1}{1 - k} = \\frac{6}{1 - \\frac{1}{3}} = \\frac{6}{\\frac{2}{3}} = 6 \\cdot \\frac{3}{2} = 9$$

**Kontroll med delsummer:**
- $S_1 = 6$
- $S_2 = 6 + 2 = 8$
- $S_3 = 8 + \\frac{2}{3} = 8{,}\\overline{6}$
- $S_4 = 8{,}\\overline{6} + \\frac{2}{9} \\approx 8{,}89$

Delsummene nærmer seg $9$. ✓`
    },
    {
      id: 's2-7-3-def-2',
      type: 'definition',
      title: 'Nødvendig betingelse for konvergens',
      content: `Dersom rekken $\\sum_{n=1}^{\\infty} a_n$ konvergerer, må $a_n \\to 0$ når $n \\to \\infty$.

**Viktig:** Betingelsen $a_n \\to 0$ er **nødvendig**, men **ikke tilstrekkelig**. Det betyr at $a_n \\to 0$ alene ikke garanterer konvergens.

**Moteksempel:** Den harmoniske rekken $1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots$ divergerer selv om $\\frac{1}{n} \\to 0$.`
    },
    {
      id: 's2-7-3-text-desimaltall',
      type: 'text',
      content: `## Periodiske desimaltall som rekker

Et spennende bruksområde for uendelige geometriske rekker er å vise at periodiske desimaltall er rasjonale tall (brøker).

For eksempel kan vi skrive $0{,}\\overline{3} = 0{,}333\\ldots$ som:

$$0{,}333\\ldots = \\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\cdots = \\frac{\\frac{3}{10}}{1 - \\frac{1}{10}} = \\frac{\\frac{3}{10}}{\\frac{9}{10}} = \\frac{3}{9} = \\frac{1}{3}$$

Dette bekrefter at $0{,}\\overline{3} = \\frac{1}{3}$.`
    },
    {
      id: 's2-7-3-example-2',
      type: 'example',
      title: 'Periodisk desimaltall som brøk',
      problem: `Skriv $0{,}\\overline{27} = 0{,}272727\\ldots$ som en brøk.`,
      solution: `Vi skriver desimaltallet som en uendelig geometrisk rekke:

$$0{,}272727\\ldots = \\frac{27}{100} + \\frac{27}{10\\,000} + \\frac{27}{1\\,000\\,000} + \\cdots$$

Her er $a_1 = \\frac{27}{100}$ og $k = \\frac{1}{100}$.

$$S = \\frac{\\frac{27}{100}}{1 - \\frac{1}{100}} = \\frac{\\frac{27}{100}}{\\frac{99}{100}} = \\frac{27}{99} = \\frac{3}{11}$$

Altså er $0{,}\\overline{27} = \\frac{3}{11}$.`
    },
    {
      id: 's2-7-3-def-3',
      type: 'definition',
      title: 'Geometrisk rekke med startindeks 0',
      content: `En uendelig geometrisk rekke som starter med $n = 0$ skrives:

$$\\sum_{n=0}^{\\infty} a \\cdot k^n = a + ak + ak^2 + \\cdots = \\frac{a}{1-k} \\quad \\text{for } |k| < 1$$

Merk at $a = a_1$ (det første leddet). Formen med startindeks $0$ er den vanligste i teori og på eksamen.`
    },
    {
      id: 's2-7-3-example-3',
      type: 'example',
      title: 'Praktisk anvendelse: sprettball',
      problem: `En ball slippes fra 10 meters høyde. Hver gang den treffer bakken, spretter den tilbake til $60\\%$ av forrige høyde. Finn den totale distansen ballen tilbakelegger.`,
      solution: `**Nedover:** Ballen faller 10 m, deretter $10 \\cdot 0{,}6 = 6$ m, deretter $6 \\cdot 0{,}6 = 3{,}6$ m, osv.

**Oppover:** Ballen spretter opp $6$ m, deretter $3{,}6$ m, osv.

Total distanse nedover: $10 + 6 + 3{,}6 + \\cdots = \\frac{10}{1 - 0{,}6} = \\frac{10}{0{,}4} = 25$ m

Total distanse oppover: $6 + 3{,}6 + \\cdots = \\frac{6}{1 - 0{,}6} = \\frac{6}{0{,}4} = 15$ m

**Total distanse:** $25 + 15 = 40$ m.

Alternativt: Total $= 10 + 2(6 + 3{,}6 + \\cdots) = 10 + 2 \\cdot 15 = 40$ m.`
    },
    {
      id: 's2-7-3-text-anvendelser',
      type: 'text',
      content: `## Konvergensbetingelsen i praksis

Betingelsen $|k| < 1$ betyr at hvert ledd er **mindre enn det foregående** i absoluttverdi. Leddene blir stadig mindre og bidrar mindre og mindre til summen.

For $|k| \\geq 1$ vokser leddene (eller forblir like store), og summen vokser uten grense:
- $k = 1$: $a + a + a + \\cdots \\to \\infty$
- $k = -1$: $a - a + a - a + \\cdots$ oscillerer (alternerer uten å nærme seg en verdi)
- $|k| > 1$: leddene vokser i absoluttverdi, rekken divergerer`
    },
    {
      id: 's2-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Avgjør om rekken $\\sum_{n=0}^{\\infty} \\left(\\frac{2}{3}\\right)^n$ konvergerer. Finn i så fall summen.', solution: '$|k| = \\frac{2}{3} < 1$, rekken konvergerer. $S = \\frac{1}{1 - \\frac{2}{3}} = \\frac{1}{\\frac{1}{3}} = 3$.' },
          { label: 'b', task: 'Avgjør om rekken $\\sum_{n=1}^{\\infty} 3 \\cdot 1{,}5^n$ konvergerer.', solution: '$|k| = 1{,}5 > 1$, rekken divergerer.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn summen av $8 + 4 + 2 + 1 + \\frac{1}{2} + \\cdots$', solution: '$a_1 = 8$, $k = \\frac{1}{2}$. $|k| < 1$. $S = \\frac{8}{1 - \\frac{1}{2}} = \\frac{8}{\\frac{1}{2}} = 16$.' },
          { label: 'b', task: 'Finn summen av $12 - 4 + \\frac{4}{3} - \\frac{4}{9} + \\cdots$', solution: '$a_1 = 12$, $k = -\\frac{1}{3}$. $|k| = \\frac{1}{3} < 1$. $S = \\frac{12}{1 - (-\\frac{1}{3})} = \\frac{12}{\\frac{4}{3}} = 9$.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Skriv $0{,}\\overline{5} = 0{,}555\\ldots$ som en brøk.', solution: '$0{,}555\\ldots = \\frac{5}{10} + \\frac{5}{100} + \\cdots = \\frac{\\frac{5}{10}}{1 - \\frac{1}{10}} = \\frac{\\frac{5}{10}}{\\frac{9}{10}} = \\frac{5}{9}$.' },
          { label: 'b', task: 'Skriv $0{,}\\overline{12} = 0{,}121212\\ldots$ som en brøk.', solution: '$0{,}\\overline{12} = \\frac{12}{100} + \\frac{12}{10000} + \\cdots = \\frac{\\frac{12}{100}}{1 - \\frac{1}{100}} = \\frac{12}{99} = \\frac{4}{33}$.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn summen av $\\sum_{n=1}^{\\infty} 10 \\cdot 0{,}2^n$.', solution: '$a_1 = 10 \\cdot 0{,}2 = 2$, $k = 0{,}2$. $S = \\frac{2}{1 - 0{,}2} = \\frac{2}{0{,}8} = 2{,}5$.' },
          { label: 'b', task: 'Finn summen av $\\sum_{n=0}^{\\infty} \\frac{5}{4^n}$.', solution: '$a_1 = 5$, $k = \\frac{1}{4}$. $S = \\frac{5}{1 - \\frac{1}{4}} = \\frac{5}{\\frac{3}{4}} = \\frac{20}{3}$.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En uendelig geometrisk rekke har $a_1 = 12$ og sum $S = 18$. Finn $k$.', solution: '$S = \\frac{a_1}{1-k} \\Rightarrow 18 = \\frac{12}{1-k} \\Rightarrow 1-k = \\frac{12}{18} = \\frac{2}{3} \\Rightarrow k = \\frac{1}{3}$.' },
          { label: 'b', task: 'Finn $a_2$ og $a_3$ for rekken i a).', solution: '$a_2 = 12 \\cdot \\frac{1}{3} = 4$ og $a_3 = 4 \\cdot \\frac{1}{3} = \\frac{4}{3}$.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'For hvilke verdier av $x$ konvergerer rekken $\\sum_{n=0}^{\\infty} x^n$?', solution: 'Rekken konvergerer når $|k| = |x| < 1$, altså for $-1 < x < 1$. Summen er da $\\frac{1}{1-x}$.' },
          { label: 'b', task: 'For hvilke verdier av $x$ konvergerer rekken $\\sum_{n=0}^{\\infty} \\left(\\frac{x-1}{3}\\right)^n$?', solution: 'Konvergerer når $\\left|\\frac{x-1}{3}\\right| < 1 \\Rightarrow |x-1| < 3 \\Rightarrow -3 < x-1 < 3 \\Rightarrow -2 < x < 4$.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En ball slippes fra 5 meters høyde og spretter tilbake til $70\\%$ av forrige høyde hver gang. Finn den totale distansen ballen tilbakelegger.', solution: 'Nedover: $\\frac{5}{1-0{,}7} = \\frac{5}{0{,}3} = \\frac{50}{3}$ m. Oppover: $\\frac{5 \\cdot 0{,}7}{1-0{,}7} = \\frac{3{,}5}{0{,}3} = \\frac{35}{3}$ m. Total: $\\frac{50}{3} + \\frac{35}{3} = \\frac{85}{3} \\approx 28{,}3$ m.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at $0{,}\\overline{9} = 0{,}999\\ldots = 1$.', solution: '$0{,}999\\ldots = \\frac{9}{10} + \\frac{9}{100} + \\cdots = \\frac{\\frac{9}{10}}{1 - \\frac{1}{10}} = \\frac{\\frac{9}{10}}{\\frac{9}{10}} = 1$.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'I en uendelig geometrisk rekke er summen dobbelt så stor som det første leddet. Finn $k$.', solution: '$S = \\frac{a_1}{1-k} = 2a_1 \\Rightarrow \\frac{1}{1-k} = 2 \\Rightarrow 1-k = \\frac{1}{2} \\Rightarrow k = \\frac{1}{2}$.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn $\\sum_{n=0}^{\\infty} \\frac{2^n + 3^n}{6^n}$.', solution: '$\\sum_{n=0}^{\\infty} \\frac{2^n + 3^n}{6^n} = \\sum_{n=0}^{\\infty} \\left(\\frac{2}{6}\\right)^n + \\sum_{n=0}^{\\infty} \\left(\\frac{3}{6}\\right)^n = \\sum_{n=0}^{\\infty} \\left(\\frac{1}{3}\\right)^n + \\sum_{n=0}^{\\infty} \\left(\\frac{1}{2}\\right)^n = \\frac{1}{1-\\frac{1}{3}} + \\frac{1}{1-\\frac{1}{2}} = \\frac{3}{2} + 2 = \\frac{7}{2}$.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Summen av en uendelig geometrisk rekke er $20$, og summen av de tre første leddene er $19$. Finn $a_1$ og $k$.', solution: '$S = \\frac{a_1}{1-k} = 20$, altså $a_1 = 20(1-k)$. $S_3 = a_1 \\cdot \\frac{1-k^3}{1-k} = \\frac{a_1(1-k^3)}{1-k} = 19$. Sett inn: $\\frac{20(1-k)(1-k^3)}{1-k} = 20(1-k^3) = 19$. $1-k^3 = \\frac{19}{20} \\Rightarrow k^3 = \\frac{1}{20} \\Rightarrow k = \\frac{1}{\\sqrt[3]{20}} \\approx 0{,}368$. $a_1 = 20(1 - \\frac{1}{\\sqrt[3]{20}}) \\approx 20 \\cdot 0{,}632 \\approx 12{,}64$.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En pendel svinger $40$ cm i første sving, og hver sving er $95\\%$ av den forrige. Finn den totale distansen pendelen tilbakelegger.', solution: 'Geometrisk rekke med $a_1 = 40$ og $k = 0{,}95$. $S = \\frac{40}{1 - 0{,}95} = \\frac{40}{0{,}05} = 800$ cm $= 8$ m.' },
          { label: 'b', task: 'Hvor mange hele svingninger gjennomfører pendelen før den totale distansen overstiger 700 cm?', solution: '$S_n = 40 \\cdot \\frac{1 - 0{,}95^n}{1 - 0{,}95} = 800(1 - 0{,}95^n) > 700$. $1 - 0{,}95^n > 0{,}875$. $0{,}95^n < 0{,}125$. $n \\ln(0{,}95) < \\ln(0{,}125)$. $n > \\frac{\\ln(0{,}125)}{\\ln(0{,}95)} \\approx \\frac{-2{,}079}{-0{,}0513} \\approx 40{,}5$. Etter 41 svingninger.' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at $\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)} = 1$. (Hint: skriv $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$.)', solution: 'Delbrøkoppspalting: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Teleskopsum: $S_N = \\sum_{n=1}^{N}\\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = 1 - \\frac{1}{N+1}$. Når $N \\to \\infty$: $S = 1 - 0 = 1$. (Merk: dette er ikke en geometrisk rekke, men en teleskoprekke.)' }
        ]
      }
    },
    {
      id: 's2-7-3-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-7-3-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et medisinpreparat har en halveringstid på 6 timer. En pasient tar $200$ mg hver 6. time. Finn den totale mengden medisin i kroppen rett etter den $n$-te dosen.', solution: 'Rett etter dose $n$: $M_n = 200 + 200 \\cdot \\frac{1}{2} + 200 \\cdot \\frac{1}{4} + \\cdots + 200 \\cdot \\left(\\frac{1}{2}\\right)^{n-1} = 200 \\cdot \\frac{1 - (\\frac{1}{2})^n}{1 - \\frac{1}{2}} = 400\\left(1 - \\frac{1}{2^n}\\right)$.' },
          { label: 'b', task: 'Hva er den stabile mengden medisin i kroppen på lang sikt (rett etter en dose)?', solution: 'Når $n \\to \\infty$: $M = 400(1 - 0) = 400$ mg. Den stabile mengden er $400$ mg rett etter en dose.' }
        ]
      }
    },
    {
      id: 's2-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Konvergens:** En uendelig rekke konvergerer dersom delsummene nærmer seg en bestemt verdi.

**Sum av uendelig geometrisk rekke:**
$$S = \\frac{a_1}{1-k} \\quad \\text{for } |k| < 1$$

**Konvergensbetingelse:** $|k| < 1$ (leddene må avta mot null).

**Nyttige resultater:**
- Nødvendig betingelse for konvergens: $a_n \\to 0$
- Periodiske desimaltall kan skrives som brøker ved hjelp av geometriske rekker
- Praktiske anvendelser: sprettball, medisin, pendel, økonomi`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_7_4: TextbookChapter = {
  id: 's2-7-4',
  courseId: 's2',
  chapterNumber: '7.4',
  title: 'Annuitetslån og sparing',
  description: 'Lær om annuitetsformelen, nåverdi av betalingsrekker, og forskjellen mellom serielån og annuitetslån.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beregne summen av endelige aritmetiske og geometriske rekker og bruke dette i praktiske situasjoner',
    'bruke rekker til å modellere lån, sparing og andre økonomiske situasjoner'
  ],
  content: [
    {
      id: 's2-7-4-intro',
      type: 'text',
      content: `## Rekker i personlig økonomi

Geometriske rekker er grunnlaget for det meste av finansmatematikk. Når du sparer regelmessig med fast rente, eller betaler ned et lån, er det geometriske rekker som ligger bak beregningene.

I dette kapittelet skal vi utlede formler for **sparing med faste innskudd**, **annuitetslån** og **serielån**. Dette er svært relevant for S2-eksamen og for din egen personlige økonomi.

Vi bruker følgende notasjon:
- $r$ er renten per termin (f.eks. $r = 0{,}05$ for $5\\%$)
- Vekstfaktoren per termin er $v = 1 + r$`
    },
    {
      id: 's2-7-4-def-1',
      type: 'definition',
      title: 'Sparing med faste innskudd',
      content: `Dersom du setter inn et fast beløp $b$ ved slutten av hver termin i $n$ terminer, og renten per termin er $r$ (vekstfaktor $v = 1 + r$), er **sluttkapitalen** (verdien etter $n$ terminer):

$$K_n = b \\cdot \\frac{v^n - 1}{v - 1} = b \\cdot \\frac{(1+r)^n - 1}{r}$$

Dette er summen av en geometrisk rekke der hvert innskudd vokser med renter over ulik tid.`
    },
    {
      id: 's2-7-4-example-1',
      type: 'example',
      title: 'Sparing til bolig',
      problem: `Du sparer 5000 kr per måned i 10 år. Månedlig rente er $0{,}3\\%$ (dvs. $r = 0{,}003$). Hvor mye har du spart totalt?`,
      solution: `Vi har $b = 5000$, $r = 0{,}003$, $v = 1{,}003$ og $n = 120$ (måneder).

$$K_{120} = 5000 \\cdot \\frac{1{,}003^{120} - 1}{0{,}003}$$

Beregn $1{,}003^{120}$: $1{,}003^{120} \\approx 1{,}4308$

$$K_{120} = 5000 \\cdot \\frac{1{,}4308 - 1}{0{,}003} = 5000 \\cdot \\frac{0{,}4308}{0{,}003} = 5000 \\cdot 143{,}6 \\approx 718\\,000 \\text{ kr}$$

**Totalt innskudd:** $5000 \\cdot 120 = 600\\,000$ kr
**Opptjente renter:** $718\\,000 - 600\\,000 = 118\\,000$ kr`
    },
    {
      id: 's2-7-4-theorem-1',
      type: 'theorem',
      title: 'Annuitetsformelen',
      content: `Et **annuitetslån** er et lån der terminbeløpet (summen av avdrag og renter) er **konstant** gjennom hele lånets løpetid.

Dersom lånebeløpet er $L$, renten per termin er $r$ (vekstfaktor $v = 1 + r$) og antall terminer er $n$, er det faste terminbeløpet:

$$T = L \\cdot \\frac{r \\cdot v^n}{v^n - 1} = L \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}$$

**Utledning:** Etter $n$ terminer skal restgjelden være null. Lånet med renter etter $n$ terminer er $L \\cdot v^n$. Innbetalingene $T$ per termin med renter utgjør en geometrisk rekke med sum $T \\cdot \\frac{v^n - 1}{r}$. Sett lik: $L \\cdot v^n = T \\cdot \\frac{v^n - 1}{r}$, og løs for $T$.`
    },
    {
      id: 's2-7-4-def-2',
      type: 'definition',
      title: 'Nåverdi',
      content: `**Nåverdien** av et beløp $B$ som mottas om $n$ terminer ved rente $r$ er:

$$\\text{NV} = \\frac{B}{(1+r)^n}$$

Nåverdien av en rekke like betalinger $T$ over $n$ terminer er:

$$\\text{NV} = T \\cdot \\frac{1 - (1+r)^{-n}}{r}$$

Nåverdi brukes til å sammenligne betalingsstrømmer som skjer på ulike tidspunkter.`
    },
    {
      id: 's2-7-4-text-serielån',
      type: 'text',
      content: `## Serielån vs. annuitetslån

I et **serielån** er **avdragene** (ikke terminbeløpet) konstante. Siden restgjelden synker, synker også rentedelen, og dermed synker terminbeløpet over tid.

| Egenskap | Annuitetslån | Serielån |
|----------|-------------|----------|
| Terminbeløp | Konstant | Synker over tid |
| Avdrag | Øker over tid | Konstant |
| Rentedel | Synker over tid | Synker over tid |
| Total rente | Høyere | Lavere |
| Populært til | Boliglån (forutsigbarhet) | Bedriftslån |

Serielånet gir **lavere total rentekostnad** fordi du betaler ned raskere i starten.`
    },
    {
      id: 's2-7-4-example-2',
      type: 'example',
      title: 'Beregn terminbeløp for annuitetslån',
      problem: `Et boliglån på 3\\,000\\,000 kr har årlig rente $4\\%$ og løpetid 25 år med årlige terminer. Finn terminbeløpet.`,
      solution: `Vi har $L = 3\\,000\\,000$, $r = 0{,}04$, $v = 1{,}04$ og $n = 25$.

$$T = 3\\,000\\,000 \\cdot \\frac{0{,}04 \\cdot 1{,}04^{25}}{1{,}04^{25} - 1}$$

Beregn $1{,}04^{25} \\approx 2{,}6658$.

$$T = 3\\,000\\,000 \\cdot \\frac{0{,}04 \\cdot 2{,}6658}{2{,}6658 - 1} = 3\\,000\\,000 \\cdot \\frac{0{,}10663}{1{,}6658}$$

$$T = 3\\,000\\,000 \\cdot 0{,}06401 \\approx 192\\,040 \\text{ kr}$$

**Total innbetaling:** $192\\,040 \\cdot 25 = 4\\,801\\,000$ kr
**Total rente:** $4\\,801\\,000 - 3\\,000\\,000 = 1\\,801\\,000$ kr`
    },
    {
      id: 's2-7-4-def-3',
      type: 'definition',
      title: 'Restgjeld etter m terminer',
      content: `Restgjelden på et annuitetslån etter $m$ terminer (av totalt $n$) er:

$$R_m = L \\cdot v^m - T \\cdot \\frac{v^m - 1}{r}$$

der $T$ er terminbeløpet, $v = 1 + r$ er vekstfaktoren.

Alternativt kan restgjelden uttrykkes som nåverdien av de gjenstående $n - m$ terminbeløpene:

$$R_m = T \\cdot \\frac{1 - v^{-(n-m)}}{r}$$`
    },
    {
      id: 's2-7-4-example-3',
      type: 'example',
      title: 'Sammenligning av serielån og annuitetslån',
      problem: `Et lån på 500\\,000 kr skal tilbakebetales over 5 år med årlig rente $6\\%$. Sammenlign total rentekostnad for annuitetslån og serielån.`,
      solution: `**Annuitetslån:**
$T = 500\\,000 \\cdot \\frac{0{,}06 \\cdot 1{,}06^5}{1{,}06^5 - 1} = 500\\,000 \\cdot \\frac{0{,}06 \\cdot 1{,}3382}{0{,}3382} = 500\\,000 \\cdot 0{,}23740 = 118\\,698$ kr

Total: $118\\,698 \\cdot 5 = 593\\,490$ kr. Rente: $93\\,490$ kr.

**Serielån:**
Avdrag per år: $\\frac{500\\,000}{5} = 100\\,000$ kr.

| År | Restgjeld | Rente | Avdrag | Termin |
|----|-----------|-------|--------|--------|
| 1 | 500 000 | 30 000 | 100 000 | 130 000 |
| 2 | 400 000 | 24 000 | 100 000 | 124 000 |
| 3 | 300 000 | 18 000 | 100 000 | 118 000 |
| 4 | 200 000 | 12 000 | 100 000 | 112 000 |
| 5 | 100 000 | 6 000 | 100 000 | 106 000 |

Total rente serielån: $30\\,000 + 24\\,000 + 18\\,000 + 12\\,000 + 6\\,000 = 90\\,000$ kr.

**Serielånet gir $3\\,490$ kr lavere total rentekostnad.**`
    },
    {
      id: 's2-7-4-text-eksamenstips',
      type: 'text',
      content: `## Tips for eksamen

Oppgaver om lån og sparing er svært vanlige på S2-eksamen. Noen viktige punkter:

1. **Vær nøye med terminlengde:** Sjekk om renten er årlig og terminene er månedlige (da må du dele renten på 12)
2. **Skille mellom spareformel og låneformel:** Sparing gir sluttkapital, lån gir terminbeløp
3. **Nåverdi:** Bruk nåverdi for å sammenligne betalinger på ulike tidspunkter
4. **Vis utledningen:** Sensor gir poeng for å vise hvordan formlene fremkommer fra geometriske rekker`
    },
    {
      id: 's2-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Du setter inn 2000 kr per måned i 5 år. Månedlig rente er $0{,}4\\%$. Finn sluttkapitalen.', solution: '$b = 2000$, $r = 0{,}004$, $n = 60$. $K_{60} = 2000 \\cdot \\frac{1{,}004^{60} - 1}{0{,}004} = 2000 \\cdot \\frac{1{,}2706 - 1}{0{,}004} = 2000 \\cdot 67{,}65 \\approx 135\\,300$ kr.' },
          { label: 'b', task: 'Hvor mye av sluttkapitalen er opptjente renter?', solution: 'Totalt innskudd: $2000 \\cdot 60 = 120\\,000$ kr. Renter: $135\\,300 - 120\\,000 = 15\\,300$ kr.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et lån på 200\\,000 kr har årlig rente $5\\%$ og løpetid 10 år med årlige terminer. Finn det årlige terminbeløpet.', solution: '$T = 200\\,000 \\cdot \\frac{0{,}05 \\cdot 1{,}05^{10}}{1{,}05^{10} - 1} = 200\\,000 \\cdot \\frac{0{,}05 \\cdot 1{,}6289}{0{,}6289} = 200\\,000 \\cdot 0{,}12950 \\approx 25\\,901$ kr.' },
          { label: 'b', task: 'Finn total rentekostnad over hele lånets løpetid.', solution: 'Total: $25\\,901 \\cdot 10 = 259\\,010$ kr. Rente: $259\\,010 - 200\\,000 = 59\\,010$ kr.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn nåverdien av 100\\,000 kr som mottas om 8 år, gitt $6\\%$ årlig rente.', solution: '$\\text{NV} = \\frac{100\\,000}{1{,}06^8} = \\frac{100\\,000}{1{,}5938} \\approx 62\\,741$ kr.' },
          { label: 'b', task: 'Hva betyr svaret i a) praktisk?', solution: 'Det betyr at 62\\,741 kr investert i dag til $6\\%$ rente vil ha vokst til 100\\,000 kr etter 8 år. De to beløpene er likeverdige.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et serielån på 300\\,000 kr betales tilbake over 6 år med årlig rente $4\\%$. Beregn terminbeløpet for det første og siste året.', solution: 'Avdrag: $\\frac{300\\,000}{6} = 50\\,000$ kr. År 1: rente $= 300\\,000 \\cdot 0{,}04 = 12\\,000$, termin $= 62\\,000$ kr. År 6: rente $= 50\\,000 \\cdot 0{,}04 = 2\\,000$, termin $= 52\\,000$ kr.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Du ønsker å ha 1\\,000\\,000 kr om 15 år. Hvor mye må du spare per måned dersom månedlig rente er $0{,}35\\%$?', solution: '$K_n = b \\cdot \\frac{v^n - 1}{r}$. $1\\,000\\,000 = b \\cdot \\frac{1{,}0035^{180} - 1}{0{,}0035}$. $1{,}0035^{180} \\approx 1{,}8776$. $b = \\frac{1\\,000\\,000 \\cdot 0{,}0035}{0{,}8776} = \\frac{3500}{0{,}8776} \\approx 3989$ kr per måned.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et annuitetslån på 1\\,500\\,000 kr har årlig rente $3{,}5\\%$ og løpetid 20 år. Finn terminbeløpet.', solution: '$T = 1\\,500\\,000 \\cdot \\frac{0{,}035 \\cdot 1{,}035^{20}}{1{,}035^{20} - 1} = 1\\,500\\,000 \\cdot \\frac{0{,}035 \\cdot 1{,}9898}{0{,}9898} = 1\\,500\\,000 \\cdot 0{,}07036 \\approx 105\\,541$ kr.' },
          { label: 'b', task: 'Finn restgjelden etter 10 år.', solution: '$R_{10} = 1\\,500\\,000 \\cdot 1{,}035^{10} - 105\\,541 \\cdot \\frac{1{,}035^{10} - 1}{0{,}035} = 1\\,500\\,000 \\cdot 1{,}4106 - 105\\,541 \\cdot \\frac{0{,}4106}{0{,}035} = 2\\,115\\,900 - 105\\,541 \\cdot 11{,}731 = 2\\,115\\,900 - 1\\,238\\,100 \\approx 877\\,800$ kr.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Utled spareformelen $K_n = b \\cdot \\frac{v^n - 1}{v - 1}$ fra en geometrisk rekke.', solution: 'Innskudd $b$ ved slutten av termin 1, 2, ..., $n$. Etter $n$ terminer har innskudd $k$ fått renter i $n-k$ terminer: verdi $b \\cdot v^{n-k}$. Total: $K_n = b \\cdot v^{n-1} + b \\cdot v^{n-2} + \\cdots + b \\cdot v + b = b(1 + v + v^2 + \\cdots + v^{n-1}) = b \\cdot \\frac{v^n - 1}{v - 1}$.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn nåverdien av 20 årlige utbetalinger på 80\\,000 kr, gitt $4\\%$ årlig rente.', solution: '$\\text{NV} = 80\\,000 \\cdot \\frac{1 - 1{,}04^{-20}}{0{,}04} = 80\\,000 \\cdot \\frac{1 - 0{,}4564}{0{,}04} = 80\\,000 \\cdot \\frac{0{,}5436}{0{,}04} = 80\\,000 \\cdot 13{,}590 \\approx 1\\,087\\,200$ kr.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et lån på 400\\,000 kr med $5\\%$ årlig rente skal tilbakebetales over 4 år. Beregn total rentekostnad for henholdsvis annuitetslån og serielån.', solution: 'Annuitet: $T = 400\\,000 \\cdot \\frac{0{,}05 \\cdot 1{,}05^4}{1{,}05^4 - 1} = 400\\,000 \\cdot \\frac{0{,}05 \\cdot 1{,}2155}{0{,}2155} = 400\\,000 \\cdot 0{,}28201 = 112\\,804$. Total rente: $112\\,804 \\cdot 4 - 400\\,000 = 51\\,216$ kr. Serielån: avdrag $= 100\\,000$. Renter: $20\\,000 + 15\\,000 + 10\\,000 + 5\\,000 = 50\\,000$ kr. Differanse: $1\\,216$ kr.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et boliglån på 4\\,000\\,000 kr har månedlige terminer og nominell rente $3{,}6\\%$. Løpetiden er 30 år. Finn det månedlige terminbeløpet.', solution: 'Månedlig rente: $r = \\frac{0{,}036}{12} = 0{,}003$, $n = 360$. $T = 4\\,000\\,000 \\cdot \\frac{0{,}003 \\cdot 1{,}003^{360}}{1{,}003^{360} - 1}$. $1{,}003^{360} \\approx 2{,}9408$. $T = 4\\,000\\,000 \\cdot \\frac{0{,}003 \\cdot 2{,}9408}{1{,}9408} = 4\\,000\\,000 \\cdot 0{,}004547 \\approx 18\\,187$ kr.' },
          { label: 'b', task: 'Hvor mye betaler du totalt i renter over hele lånets løpetid?', solution: 'Total: $18\\,187 \\cdot 360 = 6\\,547\\,320$ kr. Rente: $6\\,547\\,320 - 4\\,000\\,000 = 2\\,547\\,320$ kr.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En pensjonist ønsker å ta ut 15\\,000 kr per måned i 20 år fra en sparekonto med $0{,}3\\%$ månedlig rente. Hvor mye må stå på kontoen ved pensjonsstart?', solution: 'Nåverdien av utbetalingene: $\\text{NV} = 15\\,000 \\cdot \\frac{1 - 1{,}003^{-240}}{0{,}003} = 15\\,000 \\cdot \\frac{1 - 0{,}4878}{0{,}003} = 15\\,000 \\cdot \\frac{0{,}5122}{0{,}003} = 15\\,000 \\cdot 170{,}73 \\approx 2\\,561\\,000$ kr.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et annuitetslån på 600\\,000 kr med $4\\%$ årlig rente og 15 års løpetid har vært betjent i 8 år. Låntakeren ønsker å øke terminbeløpet for å nedbetale resten av lånet på 5 år (i stedet for 7). Finn det nye terminbeløpet.', solution: 'Opprinnelig: $T = 600\\,000 \\cdot \\frac{0{,}04 \\cdot 1{,}04^{15}}{1{,}04^{15} - 1} = 600\\,000 \\cdot 0{,}08994 = 53\\,963$ kr. Restgjeld etter 8 år: $R_8 = 600\\,000 \\cdot 1{,}04^8 - 53\\,963 \\cdot \\frac{1{,}04^8 - 1}{0{,}04} = 820\\,997 - 53\\,963 \\cdot 9{,}2142 = 820\\,997 - 497\\,204 = 323\\,793$ kr. Nytt terminbeløp over 5 år: $T_{\\text{ny}} = 323\\,793 \\cdot \\frac{0{,}04 \\cdot 1{,}04^5}{1{,}04^5 - 1} = 323\\,793 \\cdot 0{,}22463 \\approx 72\\,751$ kr.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at terminbeløpet for et serielån med $n$ terminer danner en aritmetisk følge, og finn differansen.', solution: 'Avdrag per termin: $A = \\frac{L}{n}$. Restgjeld etter termin $m$: $R_m = L - mA = L(1 - \\frac{m}{n})$. Rente i termin $m+1$: $r \\cdot R_m = rL(1 - \\frac{m}{n})$. Terminbeløp $m+1$: $T_{m+1} = A + rL(1 - \\frac{m}{n}) = \\frac{L}{n} + rL - \\frac{rLm}{n}$. Differanse: $T_{m+2} - T_{m+1} = -\\frac{rL}{n}$. Terminbeløpene danner en aritmetisk følge med $d = -\\frac{rL}{n}$.' }
        ]
      }
    },
    {
      id: 's2-7-4-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-7-4-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'To investeringer tilbys: A) 50\\,000 kr nå, eller B) 10\\,000 kr per år i 6 år (første betaling om ett år). Hvilken er best ved $5\\%$ rente?', solution: 'Nåverdi A: $50\\,000$ kr. Nåverdi B: $10\\,000 \\cdot \\frac{1 - 1{,}05^{-6}}{0{,}05} = 10\\,000 \\cdot \\frac{1 - 0{,}7462}{0{,}05} = 10\\,000 \\cdot 5{,}076 = 50\\,760$ kr. Alternativ B har høyest nåverdi ($760$ kr mer), og er dermed best.' }
        ]
      }
    },
    {
      id: 's2-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Spareformel (faste innskudd):**
$$K_n = b \\cdot \\frac{(1+r)^n - 1}{r}$$

**Annuitetsformel (fast terminbeløp):**
$$T = L \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}$$

**Nåverdi av betalingsrekke:**
$$\\text{NV} = T \\cdot \\frac{1 - (1+r)^{-n}}{r}$$

**Serielån:** Konstant avdrag $A = \\frac{L}{n}$, avtagende terminbeløp.

**Husk:**
- Sjekk om renten er per termin eller per år
- Bruk nåverdi for å sammenligne betalingsalternativer
- Vis utledning fra geometriske rekker på eksamen`
    }
  ],
  exercises: []
};

export const CHAPTER_S2_7_5: TextbookChapter = {
  id: 's2-7-5',
  courseId: 's2',
  chapterNumber: '7.5',
  title: 'Rekursive sammenhenger',
  description: 'Lær om rekursive formler, sammenhengen mellom rekursive og eksplisitte uttrykk, og berømte følger som Fibonacci.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for begrepene rekker, konvergens og divergens, og bruke rekker i modellering',
    'modellere situasjoner ved hjelp av rekursive sammenhenger og gjøre rede for begrensninger ved modellene'
  ],
  content: [
    {
      id: 's2-7-5-intro',
      type: 'text',
      content: `## Å definere følger steg for steg

Til nå har vi i hovedsak brukt **eksplisitte formler** for å beskrive følger: en formel som gir $a_n$ direkte som funksjon av $n$. Men noen ganger er det mer naturlig å beskrive en følge ved å fortelle hvordan hvert ledd beregnes fra de(t) foregående. En slik beskrivelse kalles en **rekursiv formel**.

I en rekursiv definisjon trenger vi:
1. En **starverdi** (eller flere): $a_1 = \\ldots$
2. En **rekursiv sammenheng**: $a_{n+1} = f(a_n)$

Rekursive modeller brukes mye i biologi, økonomi og informatikk.`
    },
    {
      id: 's2-7-5-def-1',
      type: 'definition',
      title: 'Rekursiv formel',
      content: `En **rekursiv formel** for en følge angir:
- **Startverdi(er):** $a_1$ (og eventuelt $a_2$, etc.)
- **Rekursjonsrelasjon:** En formel som uttrykker $a_{n+1}$ ved hjelp av ett eller flere foregående ledd

**Eksempler:**
- $a_1 = 3, \\quad a_{n+1} = a_n + 5$ (aritmetisk følge med $d = 5$)
- $a_1 = 2, \\quad a_{n+1} = 3a_n$ (geometrisk følge med $k = 3$)
- $a_1 = 1, \\ a_2 = 1, \\quad a_{n+2} = a_{n+1} + a_n$ (Fibonacci-følgen)`
    },
    {
      id: 's2-7-5-text-eksplisitt',
      type: 'text',
      content: `## Sammenhengen mellom rekursiv og eksplisitt form

For aritmetiske og geometriske følger kan vi alltid finne en eksplisitt formel:

| Følgetype | Rekursiv form | Eksplisitt form |
|-----------|--------------|-----------------|
| Aritmetisk | $a_{n+1} = a_n + d$ | $a_n = a_1 + (n-1)d$ |
| Geometrisk | $a_{n+1} = k \\cdot a_n$ | $a_n = a_1 \\cdot k^{n-1}$ |

For mer kompliserte rekursive sammenhenger er det ikke alltid mulig å finne en eksplisitt formel. Da må vi beregne leddene steg for steg.`
    },
    {
      id: 's2-7-5-example-1',
      type: 'example',
      title: 'Fra rekursiv til eksplisitt formel',
      problem: `En følge er definert ved $a_1 = 7$ og $a_{n+1} = a_n + 4$. Finn en eksplisitt formel for $a_n$ og beregn $a_{50}$.`,
      solution: `Vi gjenkjenner dette som en aritmetisk følge med $a_1 = 7$ og $d = 4$.

**Eksplisitt formel:**
$$a_n = 7 + (n-1) \\cdot 4 = 4n + 3$$

**Kontroll:** $a_1 = 4 \\cdot 1 + 3 = 7$ ✓, $a_2 = 4 \\cdot 2 + 3 = 11 = 7 + 4$ ✓

**Beregning:**
$$a_{50} = 4 \\cdot 50 + 3 = 203$$`
    },
    {
      id: 's2-7-5-def-2',
      type: 'definition',
      title: 'Fibonacci-følgen',
      content: `**Fibonacci-følgen** er definert rekursivt ved:

$$F_1 = 1, \\quad F_2 = 1, \\quad F_{n+2} = F_{n+1} + F_n$$

De første leddene er: $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \\ldots$

Fibonacci-følgen dukker opp i mange sammenhenger i naturen (bladstillinger, skjellmønstre, spiraler) og har den bemerkelsesverdig egenskapen at forholdet $\\frac{F_{n+1}}{F_n}$ nærmer seg **det gylne snitt** $\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1{,}618$ når $n \\to \\infty$.`
    },
    {
      id: 's2-7-5-theorem-1',
      type: 'theorem',
      title: 'Lineære rekursive sammenhenger av første orden',
      content: `En lineær rekursiv sammenheng av første orden har formen:

$$a_{n+1} = p \\cdot a_n + q$$

der $p$ og $q$ er konstanter.

- Dersom $q = 0$: geometrisk følge med $k = p$
- Dersom $p = 1$: aritmetisk følge med $d = q$
- Generelt ($p \\neq 1$): følgen har et **likevektspunkt** $a^* = \\frac{q}{1 - p}$, og den eksplisitte formelen er:

$$a_n = (a_1 - a^*) \\cdot p^{n-1} + a^*$$

Følgen konvergerer mot $a^*$ dersom $|p| < 1$.`
    },
    {
      id: 's2-7-5-example-2',
      type: 'example',
      title: 'Rekursiv modell: medisinering',
      problem: `En pasient tar 100 mg av et medikament daglig. Kroppen bryter ned $40\\%$ av medikamentet i løpet av et døgn. La $a_n$ være mengden medisin i kroppen rett etter den $n$-te dosen. Sett opp en rekursiv formel og finn den stabile mengden.`,
      solution: `**Rekursiv formel:**
Etter en dag er $60\\%$ av forrige mengde igjen, pluss ny dose:
$$a_1 = 100, \\quad a_{n+1} = 0{,}6 \\cdot a_n + 100$$

**Beregn de første leddene:**
- $a_1 = 100$
- $a_2 = 0{,}6 \\cdot 100 + 100 = 160$
- $a_3 = 0{,}6 \\cdot 160 + 100 = 196$
- $a_4 = 0{,}6 \\cdot 196 + 100 = 217{,}6$

**Likevektspunkt (stabil mengde):**
$$a^* = \\frac{q}{1 - p} = \\frac{100}{1 - 0{,}6} = \\frac{100}{0{,}4} = 250 \\text{ mg}$$

Siden $|p| = 0{,}6 < 1$, konvergerer mengden mot **250 mg**.

**Eksplisitt formel:**
$$a_n = (100 - 250) \\cdot 0{,}6^{n-1} + 250 = 250 - 150 \\cdot 0{,}6^{n-1}$$`
    },
    {
      id: 's2-7-5-text-modellering',
      type: 'text',
      content: `## Rekursive modeller i praksis

Rekursive modeller er kraftige verktøy for å beskrive systemer som utvikler seg over tid:

- **Befolkningsmodeller:** $P_{n+1} = r \\cdot P_n \\cdot (1 - P_n/K)$ (logistisk vekst)
- **Medisinering:** Daglig dose med nedbrytning
- **Økonomi:** Lån med renter og avdrag: $R_{n+1} = R_n \\cdot (1+r) - T$
- **Rekursive algoritmer:** Mange algoritmer i informatikk er naturlig rekursive

En fordel med rekursive modeller er at de er lette å implementere i regneark eller programmering. Du trenger bare å kjenne startverdien og regelen for å beregne neste ledd.`
    },
    {
      id: 's2-7-5-example-3',
      type: 'example',
      title: 'Rekursiv modell: befolkningsvekst',
      problem: `En dyrepopulasjon vokser med $10\\%$ per år, men det høstes 50 individer hvert år. Ved start er det 400 dyr. Sett opp en rekursiv modell og finn likevektspunktet.`,
      solution: `**Rekursiv formel:**
$$a_1 = 400, \\quad a_{n+1} = 1{,}1 \\cdot a_n - 50$$

Her er $p = 1{,}1$ og $q = -50$.

**Likevektspunkt:**
$$a^* = \\frac{-50}{1 - 1{,}1} = \\frac{-50}{-0{,}1} = 500$$

**Analyse:** Siden $|p| = 1{,}1 > 1$, er likevektspunktet **ustabilt**:
- Dersom $a_n > 500$: populasjonen vokser uten grense
- Dersom $a_n < 500$: populasjonen avtar mot null

**Sjekk med startverdien $a_1 = 400 < 500$:**
- $a_2 = 1{,}1 \\cdot 400 - 50 = 390$
- $a_3 = 1{,}1 \\cdot 390 - 50 = 379$

Populasjonen avtar. For å opprettholde populasjonen trengs minst 500 dyr.`
    },
    {
      id: 's2-7-5-def-3',
      type: 'definition',
      title: 'Stabil og ustabil likevekt',
      content: `For rekursjonen $a_{n+1} = p \\cdot a_n + q$ med likevektspunkt $a^* = \\frac{q}{1-p}$:

- **Stabil likevekt** ($|p| < 1$): Følgen konvergerer mot $a^*$ uansett startverdi. Små avvik fra $a^*$ dempes ut.
- **Ustabil likevekt** ($|p| > 1$): Små avvik fra $a^*$ forsterkes. Følgen divergerer fra $a^*$.
- **Grensetilfelle** ($|p| = 1$): Aritmetisk følge (ingen likevekt) eller oscillasjon.`
    },
    {
      id: 's2-7-5-theorem-2',
      type: 'theorem',
      title: 'Binets formel for Fibonacci-tall',
      content: `Det $n$-te Fibonacci-tallet kan uttrykkes eksplisitt:

$$F_n = \\frac{1}{\\sqrt{5}}\\left[\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n\\right] = \\frac{\\varphi^n - \\psi^n}{\\sqrt{5}}$$

der $\\varphi = \\frac{1+\\sqrt{5}}{2} \\approx 1{,}618$ (det gylne snitt) og $\\psi = \\frac{1-\\sqrt{5}}{2} \\approx -0{,}618$.

Siden $|\\psi| < 1$, er $\\psi^n \\to 0$, slik at $F_n \\approx \\frac{\\varphi^n}{\\sqrt{5}}$ for store $n$.`
    },
    {
      id: 's2-7-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn de fem første leddene i følgen gitt ved $a_1 = 2$, $a_{n+1} = 3a_n - 1$.', solution: '$a_1 = 2$, $a_2 = 3 \\cdot 2 - 1 = 5$, $a_3 = 3 \\cdot 5 - 1 = 14$, $a_4 = 3 \\cdot 14 - 1 = 41$, $a_5 = 3 \\cdot 41 - 1 = 122$.' },
          { label: 'b', task: 'Er følgen i a) aritmetisk eller geometrisk?', solution: 'Differansene: $3, 9, 27, 81$ (ikke konstant). Kvotientene: $\\frac{5}{2}, \\frac{14}{5}, \\frac{41}{14}$ (ikke konstant). Følgen er hverken aritmetisk eller geometrisk.' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Skriv opp en rekursiv formel for den aritmetiske følgen $10, 16, 22, 28, \\ldots$', solution: '$a_1 = 10$, $a_{n+1} = a_n + 6$.' },
          { label: 'b', task: 'Skriv opp en rekursiv formel for den geometriske følgen $3, 12, 48, 192, \\ldots$', solution: '$a_1 = 3$, $a_{n+1} = 4a_n$.' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn de ti første Fibonacci-tallene.', solution: '$1, 1, 2, 3, 5, 8, 13, 21, 34, 55$.' },
          { label: 'b', task: 'Beregn forholdet $\\frac{F_{n+1}}{F_n}$ for $n = 5, 6, 7, 8, 9$ og observer at det nærmer seg det gylne snitt.', solution: '$\\frac{8}{5} = 1{,}600$, $\\frac{13}{8} = 1{,}625$, $\\frac{21}{13} \\approx 1{,}615$, $\\frac{34}{21} \\approx 1{,}619$, $\\frac{55}{34} \\approx 1{,}618$. Forholdene nærmer seg $\\varphi \\approx 1{,}618$.' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En følge er gitt ved $a_1 = 5$, $a_{n+1} = 0{,}5 \\cdot a_n + 3$. Beregn $a_2$, $a_3$, $a_4$ og $a_5$.', solution: '$a_2 = 0{,}5 \\cdot 5 + 3 = 5{,}5$, $a_3 = 0{,}5 \\cdot 5{,}5 + 3 = 5{,}75$, $a_4 = 0{,}5 \\cdot 5{,}75 + 3 = 5{,}875$, $a_5 = 0{,}5 \\cdot 5{,}875 + 3 = 5{,}9375$.' },
          { label: 'b', task: 'Finn likevektspunktet og forklar hva som skjer med følgen.', solution: '$a^* = \\frac{3}{1 - 0{,}5} = \\frac{3}{0{,}5} = 6$. Siden $|p| = 0{,}5 < 1$, konvergerer følgen mot $6$.' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Finn en eksplisitt formel for følgen $a_1 = 10$, $a_{n+1} = 0{,}8 \\cdot a_n + 4$.', solution: 'Likevekt: $a^* = \\frac{4}{1-0{,}8} = 20$. $a_n = (10-20) \\cdot 0{,}8^{n-1} + 20 = 20 - 10 \\cdot 0{,}8^{n-1}$.' },
          { label: 'b', task: 'Beregn $\\lim_{n \\to \\infty} a_n$.', solution: 'Siden $|0{,}8| < 1$: $\\lim_{n \\to \\infty} a_n = 20 - 10 \\cdot 0 = 20$.' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Et vannbasseng inneholder 1000 liter. Hver dag fjernes $20\\%$ av vannet og det tilsettes 150 liter ferskt vann. Sett opp en rekursiv modell.', solution: '$a_1 = 1000$, $a_{n+1} = 0{,}8 \\cdot a_n + 150$.' },
          { label: 'b', task: 'Finn den stabile vannmengden i bassenget.', solution: '$a^* = \\frac{150}{1 - 0{,}8} = \\frac{150}{0{,}2} = 750$ liter.' },
          { label: 'c', task: 'Finn en eksplisitt formel for $a_n$ og beregn $a_{10}$.', solution: '$a_n = (1000 - 750) \\cdot 0{,}8^{n-1} + 750 = 250 \\cdot 0{,}8^{n-1} + 750$. $a_{10} = 250 \\cdot 0{,}8^9 + 750 = 250 \\cdot 0{,}1342 + 750 \\approx 33{,}6 + 750 = 783{,}6$ liter.' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En følge er gitt ved $a_1 = 200$, $a_{n+1} = 1{,}05 \\cdot a_n - 20$. Finn likevektspunktet.', solution: '$a^* = \\frac{-20}{1 - 1{,}05} = \\frac{-20}{-0{,}05} = 400$.' },
          { label: 'b', task: 'Er likevekten stabil? Begrunn svaret.', solution: '$|p| = 1{,}05 > 1$, så likevekten er ustabil. Siden $a_1 = 200 < 400$, vil følgen avta (avvik fra 400 forsterkes nedover).' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Vis at summen av to påfølgende Fibonacci-tall $F_n + F_{n+1}$ gir det neste Fibonacci-tallet $F_{n+2}$.', solution: 'Dette følger direkte fra definisjonen: $F_{n+2} = F_{n+1} + F_n$. Altså $F_n + F_{n+1} = F_{n+2}$.' },
          { label: 'b', task: 'Vis at $F_1 + F_2 + F_3 + \\cdots + F_n = F_{n+2} - 1$.', solution: 'Bevis ved induksjon. Basis: $F_1 = 1 = F_3 - 1 = 2 - 1$. ✓ Steg: anta $\\sum_{k=1}^n F_k = F_{n+2} - 1$. Da $\\sum_{k=1}^{n+1} F_k = F_{n+2} - 1 + F_{n+1} = F_{n+3} - 1$. ✓' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Restgjelden på et annuitetslån kan beskrives rekursivt: $R_0 = L$, $R_{n+1} = R_n \\cdot (1+r) - T$. Vis at dette er en lineær rekursjon av formen $a_{n+1} = p \\cdot a_n + q$ og finn likevektspunktet.', solution: 'Her er $p = 1+r$ og $q = -T$. Likevekt: $R^* = \\frac{-T}{1 - (1+r)} = \\frac{-T}{-r} = \\frac{T}{r}$. (Ved likevekt betales bare renter, og gjelden endrer seg ikke.)' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En fiskepopulasjon modelleres med $P_1 = 500$, $P_{n+1} = 1{,}15 \\cdot P_n - 80$. Finn likevektspunktet og avgjør om det er stabilt.', solution: '$P^* = \\frac{-80}{1 - 1{,}15} = \\frac{-80}{-0{,}15} = 533{,}3$. Siden $|p| = 1{,}15 > 1$, er likevekten ustabil. Med $P_1 = 500 < 533{,}3$ vil populasjonen avta mot null.' },
          { label: 'b', task: 'Hvor mange fisk må høstes årlig (i stedet for 80) for at en startpopulasjon på 500 fisk skal være i likevekt?', solution: 'Likevekt: $P^* = 500 = \\frac{-q}{-0{,}15} \\Rightarrow q = -500 \\cdot 0{,}15 = -75$. Det kan høstes 75 fisk per år for å holde populasjonen stabil ved 500.' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Bruk Binets formel til å beregne $F_{10}$ og sjekk svaret mot den rekursive beregningen.', solution: '$\\varphi = \\frac{1+\\sqrt{5}}{2} \\approx 1{,}6180$, $\\psi = \\frac{1-\\sqrt{5}}{2} \\approx -0{,}6180$. $F_{10} = \\frac{\\varphi^{10} - \\psi^{10}}{\\sqrt{5}} = \\frac{122{,}991 - 0{,}0090}{2{,}2361} \\approx \\frac{122{,}982}{2{,}2361} \\approx 55$. Rekursivt: $1, 1, 2, 3, 5, 8, 13, 21, 34, 55$. ✓' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'En epidemimodell er gitt ved $S_{n+1} = S_n - 0{,}001 \\cdot S_n \\cdot I_n$ og $I_{n+1} = I_n + 0{,}001 \\cdot S_n \\cdot I_n - 0{,}1 \\cdot I_n$, der $S_n$ er antall mottakelige og $I_n$ er antall smittede. Med $S_1 = 990$ og $I_1 = 10$, beregn $S_2$, $I_2$, $S_3$ og $I_3$.', solution: '$S_2 = 990 - 0{,}001 \\cdot 990 \\cdot 10 = 990 - 9{,}9 = 980{,}1$. $I_2 = 10 + 0{,}001 \\cdot 990 \\cdot 10 - 0{,}1 \\cdot 10 = 10 + 9{,}9 - 1 = 18{,}9$. $S_3 = 980{,}1 - 0{,}001 \\cdot 980{,}1 \\cdot 18{,}9 = 980{,}1 - 18{,}52 = 961{,}6$. $I_3 = 18{,}9 + 0{,}001 \\cdot 980{,}1 \\cdot 18{,}9 - 0{,}1 \\cdot 18{,}9 = 18{,}9 + 18{,}52 - 1{,}89 = 35{,}5$.' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'La $a_1 = c$ og $a_{n+1} = p \\cdot a_n + q$. Vis at den eksplisitte formelen er $a_n = (c - a^*) \\cdot p^{n-1} + a^*$ der $a^* = \\frac{q}{1-p}$ for $p \\neq 1$.', solution: 'La $b_n = a_n - a^*$. Da $b_{n+1} = a_{n+1} - a^* = pa_n + q - a^* = p(a_n - a^*) + (pa^* + q - a^*) = pb_n + 0$ (siden $a^* = pa^* + q$). Altså $b_{n+1} = pb_n$, en geometrisk følge med $b_1 = c - a^*$. Dermed $b_n = (c - a^*) \\cdot p^{n-1}$, og $a_n = b_n + a^* = (c - a^*) \\cdot p^{n-1} + a^*$.' }
        ]
      }
    },
    {
      id: 's2-7-5-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 's2-7-5-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene:',
        subTasks: [
          { label: 'a', task: 'Tårnene i Hanoi: med $n$ skiver, er minimum antall trekk gitt ved $T_1 = 1$, $T_{n+1} = 2T_n + 1$. Finn de fem første leddene.', solution: '$T_1 = 1$, $T_2 = 3$, $T_3 = 7$, $T_4 = 15$, $T_5 = 31$.' },
          { label: 'b', task: 'Finn en eksplisitt formel for $T_n$.', solution: 'Likevekt: $T^* = \\frac{1}{1-2} = -1$. $T_n = (1-(-1)) \\cdot 2^{n-1} + (-1) = 2 \\cdot 2^{n-1} - 1 = 2^n - 1$. Kontroll: $T_1 = 2^1 - 1 = 1$ ✓, $T_5 = 2^5 - 1 = 31$ ✓.' }
        ]
      }
    },
    {
      id: 's2-7-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Rekursiv formel:** Definerer $a_{n+1}$ ut fra $a_n$ (og eventuelt $a_{n-1}$, ...).

**Lineær rekursjon:** $a_{n+1} = p \\cdot a_n + q$
- Likevektspunkt: $a^* = \\frac{q}{1-p}$ (for $p \\neq 1$)
- Eksplisitt: $a_n = (a_1 - a^*) \\cdot p^{n-1} + a^*$
- Stabil likevekt: $|p| < 1$

**Fibonacci-følgen:** $F_{n+2} = F_{n+1} + F_n$, $F_1 = F_2 = 1$
- Forholdet $F_{n+1}/F_n \\to \\varphi \\approx 1{,}618$

**Bruksområder:** Medisinering, befolkningsmodeller, økonomi (lån), algoritmer. Rekursive modeller er ideelle for implementering i regneark og programmering.`
    }
  ],
  exercises: []
};

export const S2_KAP7_CHAPTERS: TextbookChapter[] = [CHAPTER_S2_7_1, CHAPTER_S2_7_2, CHAPTER_S2_7_3, CHAPTER_S2_7_4, CHAPTER_S2_7_5];