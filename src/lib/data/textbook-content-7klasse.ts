/**
 * Tekstbok kapitler for Matematikk 7. klasse
 * Innhold tilpasset elever på 7. trinn - forberedelse til ungdomsskolen
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: TALL OG TALLFORSTÅELSE
// ============================================================================

export const CHAPTER_7_1_1: TextbookChapter = {
  id: '7-1-1',
  courseId: '7',
  chapterNumber: '1.1',
  title: 'Negative tall',
  description: 'Addisjon og subtraksjon med negative tall.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning med heile tal, desimaltal, brøkar og prosent',
  ],
  content: [
    {
      id: '7-1-1-intro',
      type: 'text',
      content: `## Hva er negative tall?

Negative tall er tall som er mindre enn null. Vi skriver dem med et minustegn foran, for eksempel $-3$, $-7$ eller $-15$.

Vi møter negative tall mange steder:
- **Temperatur:** $-10°C$ betyr 10 grader under null
- **Høyde:** $-50$ meter betyr 50 meter under havoverflaten
- **Økonomi:** $-200$ kr betyr at du skylder 200 kroner`,
    },
    {
      id: '7-1-1-tallinje',
      type: 'definition',
      title: 'Tallinjen',
      content: `På tallinjen ligger negative tall til venstre for null:

$$\\cdots, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, \\cdots$$

**Viktig:**
- Jo lenger til venstre, jo mindre er tallet
- $-5 < -2$ (minus fem er mindre enn minus to)
- Avstanden fra et tall til null kalles **tallverdien** eller **absoluttverdi**`,
    },
    {
      id: '7-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Ordne tall etter størrelse',
      problem: `Sett tallene i stigende rekkefølge (minst først): $3, -5, 0, -2, 7, -7$`,
      solution: `**Løsning:**
Tenk på tallinjen - jo lenger til venstre, jo mindre:

$$-7 < -5 < -2 < 0 < 3 < 7$$

**Svar:** $-7, -5, -2, 0, 3, 7$`,
    },
    {
      id: '7-1-1-addisjon',
      type: 'text',
      content: `## Addisjon med negative tall

Når vi legger sammen tall med negative tall, kan vi tenke på det som bevegelse på tallinjen:
- **Legge til positivt tall:** Gå til høyre
- **Legge til negativt tall:** Gå til venstre

**Eksempler:**
- $5 + (-3) = 5 - 3 = 2$ (start på 5, gå 3 til venstre)
- $-4 + 7 = 3$ (start på -4, gå 7 til høyre)
- $-3 + (-5) = -8$ (start på -3, gå 5 til venstre)`,
    },
    {
      id: '7-1-1-regel-add',
      type: 'definition',
      title: 'Regler for addisjon',
      content: `**Samme fortegn:** Legg sammen tallene og behold fortegnet
- $(-3) + (-5) = -(3 + 5) = -8$

**Forskjellig fortegn:** Finn differansen og bruk fortegnet til det største tallet
- $(-8) + 5 = -(8-5) = -3$
- $(-3) + 7 = +(7-3) = 4$`,
    },
    {
      id: '7-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$5 + (-3)$', solution: '$2$' },
          { label: 'b', task: '$-4 + 7$', solution: '$3$' },
          { label: 'c', task: '$-6 + (-2)$', solution: '$-8$' },
          { label: 'd', task: '$-10 + 10$', solution: '$0$' },
        ],
        solution: 'a) 2, b) 3, c) -8, d) 0',
        hints: ['Tenk på tallinjen: positivt = gå høyre, negativt = gå venstre'],
      },
    },
    {
      id: '7-1-1-subtraksjon',
      type: 'text',
      content: `## Subtraksjon med negative tall

**Viktig regel:** Å trekke fra et tall er det samme som å legge til det motsatte tallet!

$$a - b = a + (-b)$$
$$a - (-b) = a + b$$

**Eksempler:**
- $5 - 8 = 5 + (-8) = -3$
- $3 - (-4) = 3 + 4 = 7$ (minus og minus blir pluss!)
- $-2 - 5 = -2 + (-5) = -7$
- $-6 - (-3) = -6 + 3 = -3$`,
    },
    {
      id: '7-1-1-regel-sub',
      type: 'definition',
      title: 'Fortegnsregler',
      content: `Når to fortegn står ved siden av hverandre:
- $+ (+) = +$ (pluss pluss blir pluss)
- $+ (-) = -$ (pluss minus blir minus)
- $- (+) = -$ (minus pluss blir minus)
- $- (-) = +$ (minus minus blir pluss!)

**Huskeregel:** Like fortegn gir pluss, ulike fortegn gir minus.`,
    },
    {
      id: '7-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Subtraksjon',
      problem: `Regn ut: $-8 - (-5) + (-3)$`,
      solution: `**Løsning:**
$$-8 - (-5) + (-3)$$
$$= -8 + 5 + (-3)$$
$$= -8 + 5 - 3$$
$$= -3 - 3$$
$$= -6$$

**Svar:** $-6$`,
    },
    {
      id: '7-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$7 - 10$', solution: '$-3$' },
          { label: 'b', task: '$-5 - (-8)$', solution: '$3$' },
          { label: 'c', task: '$-3 - 4 + 2$', solution: '$-5$' },
          { label: 'd', task: '$-6 - (-6) - 6$', solution: '$-6$' },
        ],
        solution: 'a) -3, b) 3, c) -5, d) -6',
        hints: ['Husk: minus minus blir pluss'],
      },
    },
    {
      id: '7-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '7-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Temperaturen var $-12°C$ om morgenen. I løpet av dagen steg den med $18°C$, men om kvelden sank den med $7°C$. Hva var temperaturen om kvelden?',
        solution: '$-12 + 18 - 7 = 6 - 7 = -1°C$',
        hints: ['Start med -12, legg til 18, trekk fra 7'],
      },
    },
  ],
};

export const CHAPTER_7_1_2: TextbookChapter = {
  id: '7-1-2',
  courseId: '7',
  chapterNumber: '1.2',
  title: 'Regnerekkefølgeregler',
  description: 'PEMDAS, parenteser, potenser.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning',
  ],
  content: [
    {
      id: '7-1-2-intro',
      type: 'text',
      content: `## Hvorfor trenger vi regler?

Hva er svaret på $2 + 3 \\cdot 4$?
- Hvis vi regner fra venstre: $(2 + 3) \\cdot 4 = 20$
- Hvis vi ganger først: $2 + (3 \\cdot 4) = 14$

Vi trenger klare regler slik at alle får samme svar!`,
    },
    {
      id: '7-1-2-pemdas',
      type: 'definition',
      title: 'Regnerekkefølgen (PEMDAS)',
      content: `Regn alltid i denne rekkefølgen:

1. **P**arenteser - regn ut det som står i parenteser først
2. **E**ksponenter (potenser) - regn ut potenser
3. **M**ultiplikasjon og **D**ivisjon - fra venstre mot høyre
4. **A**ddisjon og **S**ubtraksjon - fra venstre mot høyre

**Huskeregel:** "Please Excuse My Dear Aunt Sally" eller på norsk: **Parenteser → Potenser → Gange/Dele → Pluss/Minus**`,
    },
    {
      id: '7-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Bruk regnerekkefølgen',
      problem: `Regn ut: $3 + 4 \\cdot 2 - 6 \\div 3$`,
      solution: `**Løsning:**
Følg PEMDAS:

1. Ingen parenteser
2. Ingen potenser
3. Multiplikasjon og divisjon (fra venstre):
   - $4 \\cdot 2 = 8$
   - $6 \\div 3 = 2$
4. Addisjon og subtraksjon:
   - $3 + 8 - 2 = 9$

**Svar:** $9$`,
    },
    {
      id: '7-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$5 + 3 \\cdot 2$', solution: '$11$' },
          { label: 'b', task: '$20 - 8 \\div 4$', solution: '$18$' },
          { label: 'c', task: '$6 \\cdot 3 + 4 \\cdot 2$', solution: '$26$' },
          { label: 'd', task: '$15 - 3 \\cdot 4 + 2$', solution: '$5$' },
        ],
        solution: 'a) 11, b) 18, c) 26, d) 5',
        hints: ['Gange og dele før pluss og minus'],
      },
    },
    {
      id: '7-1-2-parenteser',
      type: 'text',
      content: `## Parenteser

Parenteser brukes til å endre regnerekkefølgen. Det som står i parentes regnes alltid ut først.

**Eksempel:**
- $2 + 3 \\cdot 4 = 2 + 12 = 14$ (ganger først)
- $(2 + 3) \\cdot 4 = 5 \\cdot 4 = 20$ (parentes først)

Ved flere nivåer av parenteser, start med den innerste.`,
    },
    {
      id: '7-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Flere parenteser',
      problem: `Regn ut: $2 \\cdot [3 + (4 - 1) \\cdot 2]$`,
      solution: `**Løsning:**
Start med innerste parentes:

$$2 \\cdot [3 + (4 - 1) \\cdot 2]$$
$$= 2 \\cdot [3 + 3 \\cdot 2]$$
$$= 2 \\cdot [3 + 6]$$
$$= 2 \\cdot 9$$
$$= 18$$

**Svar:** $18$`,
    },
    {
      id: '7-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$(5 + 3) \\cdot 2$', solution: '$16$' },
          { label: 'b', task: '$4 \\cdot (10 - 6) + 3$', solution: '$19$' },
          { label: 'c', task: '$(8 - 2) \\cdot (3 + 1)$', solution: '$24$' },
          { label: 'd', task: '$2 \\cdot [(6 + 2) - 3]$', solution: '$10$' },
        ],
        solution: 'a) 16, b) 19, c) 24, d) 10',
        hints: ['Regn ut parentesen først'],
      },
    },
    {
      id: '7-1-2-potenser',
      type: 'text',
      content: `## Potenser i regnestykker

Potenser regnes ut etter parenteser, men før ganging og deling.

**Eksempel:**
$3 + 2^3 \\cdot 4 = 3 + 8 \\cdot 4 = 3 + 32 = 35$

**Merk:** $2^3 = 2 \\cdot 2 \\cdot 2 = 8$ (potensen regnes først)`,
    },
    {
      id: '7-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '7-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$2^2 + 3^2$', solution: '$13$' },
          { label: 'b', task: '$5 \\cdot 2^3 - 10$', solution: '$30$' },
          { label: 'c', task: '$(2 + 3)^2$', solution: '$25$' },
          { label: 'd', task: '$2^2 \\cdot 3^2$', solution: '$36$' },
        ],
        solution: 'a) 13, b) 30, c) 25, d) 36',
        hints: ['Regn ut potensen først: $2^2 = 4$, $3^2 = 9$, $2^3 = 8$'],
      },
    },
  ],
};

export const CHAPTER_7_1_3: TextbookChapter = {
  id: '7-1-3',
  courseId: '7',
  chapterNumber: '1.3',
  title: 'Multiplikasjon og divisjon med brøk',
  description: 'Gange og dele brøker.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning med heile tal, desimaltal, brøkar og prosent',
  ],
  content: [
    {
      id: '7-1-3-intro',
      type: 'text',
      content: `## Multiplikasjon av brøker

Å gange brøker er enklere enn å legge dem sammen! Vi ganger bare teller med teller og nevner med nevner.`,
    },
    {
      id: '7-1-3-mult-regel',
      type: 'definition',
      title: 'Multiplikasjon av brøker',
      content: `$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$$

**Eksempel:**
$$\\frac{2}{3} \\cdot \\frac{4}{5} = \\frac{2 \\cdot 4}{3 \\cdot 5} = \\frac{8}{15}$$`,
    },
    {
      id: '7-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Gange brøker',
      problem: `Regn ut: $\\frac{3}{4} \\cdot \\frac{2}{5}$`,
      solution: `**Løsning:**
$$\\frac{3}{4} \\cdot \\frac{2}{5} = \\frac{3 \\cdot 2}{4 \\cdot 5} = \\frac{6}{20}$$

Vi kan forkorte med 2:
$$\\frac{6}{20} = \\frac{3}{10}$$

**Svar:** $\\frac{3}{10}$`,
    },
    {
      id: '7-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut og forkort hvis mulig',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2} \\cdot \\frac{3}{4}$', solution: '$\\frac{3}{8}$' },
          { label: 'b', task: '$\\frac{2}{5} \\cdot \\frac{1}{3}$', solution: '$\\frac{2}{15}$' },
          { label: 'c', task: '$\\frac{3}{4} \\cdot \\frac{4}{5}$', solution: '$\\frac{3}{5}$' },
          { label: 'd', task: '$\\frac{2}{3} \\cdot \\frac{3}{8}$', solution: '$\\frac{1}{4}$' },
        ],
        solution: 'a) 3/8, b) 2/15, c) 3/5, d) 1/4',
        hints: ['Teller ganger teller, nevner ganger nevner'],
      },
    },
    {
      id: '7-1-3-heltall',
      type: 'text',
      content: `## Gange brøk med heltall

Et heltall kan skrives som brøk med nevner 1:

$$3 = \\frac{3}{1}$$

**Eksempel:**
$$\\frac{2}{5} \\cdot 3 = \\frac{2}{5} \\cdot \\frac{3}{1} = \\frac{6}{5} = 1\\frac{1}{5}$$`,
    },
    {
      id: '7-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$\\frac{3}{4} \\cdot 8$', solution: '$6$' },
          { label: 'b', task: '$5 \\cdot \\frac{2}{3}$', solution: '$3\\frac{1}{3}$' },
          { label: 'c', task: '$\\frac{5}{6} \\cdot 12$', solution: '$10$' },
          { label: 'd', task: '$4 \\cdot \\frac{3}{8}$', solution: '$1\\frac{1}{2}$' },
        ],
        solution: 'a) 6, b) 3 1/3, c) 10, d) 1 1/2',
        hints: ['Skriv heltallet som brøk med nevner 1'],
      },
    },
    {
      id: '7-1-3-divisjon',
      type: 'text',
      content: `## Divisjon med brøk

Å dele med en brøk er det samme som å gange med den omvendte brøken (bytter teller og nevner).`,
    },
    {
      id: '7-1-3-div-regel',
      type: 'definition',
      title: 'Divisjon med brøk',
      content: `$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$$

**Å dele med en brøk = å gange med den omvendte**

**Eksempel:**
$$\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\cdot \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$$`,
    },
    {
      id: '7-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Dele brøker',
      problem: `Regn ut: $\\frac{2}{3} \\div \\frac{4}{9}$`,
      solution: `**Løsning:**
Gang med den omvendte brøken:
$$\\frac{2}{3} \\div \\frac{4}{9} = \\frac{2}{3} \\cdot \\frac{9}{4}$$

$$= \\frac{2 \\cdot 9}{3 \\cdot 4} = \\frac{18}{12}$$

Forkort med 6:
$$= \\frac{3}{2} = 1\\frac{1}{2}$$

**Svar:** $1\\frac{1}{2}$`,
    },
    {
      id: '7-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '7-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{2} \\div \\frac{1}{4}$', solution: '$2$' },
          { label: 'b', task: '$\\frac{3}{5} \\div \\frac{2}{5}$', solution: '$1\\frac{1}{2}$' },
          { label: 'c', task: '$\\frac{4}{9} \\div \\frac{2}{3}$', solution: '$\\frac{2}{3}$' },
          { label: 'd', task: '$6 \\div \\frac{3}{4}$', solution: '$8$' },
        ],
        solution: 'a) 2, b) 1 1/2, c) 2/3, d) 8',
        hints: ['Snu brøken du deler med og gang i stedet'],
      },
    },
  ],
};

export const CHAPTER_7_1_4: TextbookChapter = {
  id: '7-1-4',
  courseId: '7',
  chapterNumber: '1.4',
  title: 'Potenser',
  description: 'Grunntall, eksponent, potensregler.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  content: [
    {
      id: '7-1-4-intro',
      type: 'text',
      content: `## Hva er en potens?

En potens er en kort måte å skrive gjentatt multiplikasjon på.

I stedet for å skrive $2 \\cdot 2 \\cdot 2 \\cdot 2$, skriver vi $2^4$ (leses "to i fjerde").`,
    },
    {
      id: '7-1-4-def',
      type: 'definition',
      title: 'Potens, grunntall og eksponent',
      content: `$$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ faktorer}}$$

- **Grunntallet** ($a$) er tallet som ganges med seg selv
- **Eksponenten** ($n$) forteller hvor mange ganger

**Eksempler:**
- $3^2 = 3 \\cdot 3 = 9$
- $2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$
- $10^3 = 10 \\cdot 10 \\cdot 10 = 1000$`,
    },
    {
      id: '7-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut potensene',
        subTasks: [
          { label: 'a', task: '$2^3$', solution: '$8$' },
          { label: 'b', task: '$5^2$', solution: '$25$' },
          { label: 'c', task: '$3^4$', solution: '$81$' },
          { label: 'd', task: '$10^4$', solution: '$10\\,000$' },
        ],
        solution: 'a) 8, b) 25, c) 81, d) 10 000',
        hints: ['$a^n$ betyr å gange $a$ med seg selv $n$ ganger'],
      },
    },
    {
      id: '7-1-4-tierp',
      type: 'text',
      content: `## Tierpotenser

Tierpotenser er spesielt nyttige fordi de gir oss runde tall:

| Potens | Verdi | Navn |
|--------|-------|------|
| $10^1$ | 10 | Ti |
| $10^2$ | 100 | Hundre |
| $10^3$ | 1 000 | Tusen |
| $10^4$ | 10 000 | Ti tusen |
| $10^5$ | 100 000 | Hundre tusen |
| $10^6$ | 1 000 000 | Million |

**Merk:** Eksponenten forteller hvor mange nuller!`,
    },
    {
      id: '7-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv som tierpotens',
        subTasks: [
          { label: 'a', task: '1000', solution: '$10^3$' },
          { label: 'b', task: '100 000', solution: '$10^5$' },
          { label: 'c', task: '10 000 000', solution: '$10^7$' },
          { label: 'd', task: '100', solution: '$10^2$' },
        ],
        solution: 'a) $10^3$, b) $10^5$, c) $10^7$, d) $10^2$',
        hints: ['Tell antall nuller - det er eksponenten'],
      },
    },
    {
      id: '7-1-4-regler',
      type: 'definition',
      title: 'Potensregler',
      content: `**Regel 1: Gange potenser med samme grunntall**
$$a^m \\cdot a^n = a^{m+n}$$
Eksempel: $2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128$

**Regel 2: Dele potenser med samme grunntall**
$$a^m \\div a^n = a^{m-n}$$
Eksempel: $5^6 \\div 5^2 = 5^{6-2} = 5^4 = 625$

**Regel 3: Potens av potens**
$$(a^m)^n = a^{m \\cdot n}$$
Eksempel: $(2^3)^2 = 2^{3 \\cdot 2} = 2^6 = 64$`,
    },
    {
      id: '7-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Bruk potensreglene',
      problem: `Forenkle: $3^4 \\cdot 3^2$`,
      solution: `**Løsning:**
Bruk regel 1 (legg sammen eksponentene):
$$3^4 \\cdot 3^2 = 3^{4+2} = 3^6$$

Hvis vi vil finne verdien:
$$3^6 = 729$$

**Svar:** $3^6 = 729$`,
    },
    {
      id: '7-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '7-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle ved hjelp av potensreglene',
        subTasks: [
          { label: 'a', task: '$2^4 \\cdot 2^3$', solution: '$2^7 = 128$' },
          { label: 'b', task: '$5^5 \\div 5^3$', solution: '$5^2 = 25$' },
          { label: 'c', task: '$(4^2)^3$', solution: '$4^6 = 4096$' },
          { label: 'd', task: '$10^3 \\cdot 10^4$', solution: '$10^7$' },
        ],
        solution: 'a) $2^7 = 128$, b) $5^2 = 25$, c) $4^6 = 4096$, d) $10^7$',
        hints: ['Gange: legg sammen eksponentene. Dele: trekk fra eksponentene'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 2: ALGEBRA
// ============================================================================

export const CHAPTER_7_2_1: TextbookChapter = {
  id: '7-2-1',
  courseId: '7',
  chapterNumber: '2.1',
  title: 'Bokstavregning',
  description: 'Addere, subtrahere, multiplisere uttrykk.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  content: [
    {
      id: '7-2-1-intro',
      type: 'text',
      content: `## Hva er bokstavregning?

I algebra bruker vi bokstaver for å representere ukjente tall eller tall som kan variere. Dette kalles **variabler**.

**Eksempel:** Hvis en boks koster $x$ kroner, koster 3 bokser $3 \\cdot x = 3x$ kroner.`,
    },
    {
      id: '7-2-1-def',
      type: 'definition',
      title: 'Algebraiske uttrykk',
      content: `Et **algebraisk uttrykk** inneholder tall og bokstaver (variabler).

**Eksempler:**
- $3x$ betyr $3 \\cdot x$
- $2a + 5$ betyr "to ganger a pluss fem"
- $xy$ betyr $x \\cdot y$

**Merk:** Vi skriver ikke gangetegnet mellom tall og bokstav, eller mellom bokstaver.`,
    },
    {
      id: '7-2-1-ledd',
      type: 'text',
      content: `## Like ledd

**Like ledd** er ledd som har samme bokstavdel. Bare like ledd kan legges sammen.

- $3x$ og $5x$ er like ledd (begge har $x$)
- $2x$ og $2y$ er IKKE like ledd
- $4x^2$ og $3x$ er IKKE like ledd`,
    },
    {
      id: '7-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Forenkle uttrykk',
      problem: `Forenkle: $4x + 3y + 2x - y$`,
      solution: `**Løsning:**
Samle like ledd:
- $x$-ledd: $4x + 2x = 6x$
- $y$-ledd: $3y - y = 2y$

$$4x + 3y + 2x - y = 6x + 2y$$

**Svar:** $6x + 2y$`,
    },
    {
      id: '7-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forenkle uttrykkene',
        subTasks: [
          { label: 'a', task: '$5x + 3x$', solution: '$8x$' },
          { label: 'b', task: '$7a - 4a$', solution: '$3a$' },
          { label: 'c', task: '$2x + 4y + 3x$', solution: '$5x + 4y$' },
          { label: 'd', task: '$6b - 2b + 3b$', solution: '$7b$' },
        ],
        solution: 'a) 8x, b) 3a, c) 5x + 4y, d) 7b',
        hints: ['Bare like ledd kan legges sammen'],
      },
    },
    {
      id: '7-2-1-mult',
      type: 'text',
      content: `## Multiplikasjon med variabler

Når vi ganger uttrykk, ganger vi tallene for seg og bokstavene for seg.

**Eksempler:**
- $3 \\cdot 4x = 12x$
- $2x \\cdot 5x = 10x^2$
- $3a \\cdot 2b = 6ab$`,
    },
    {
      id: '7-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$4 \\cdot 3x$', solution: '$12x$' },
          { label: 'b', task: '$2x \\cdot 3x$', solution: '$6x^2$' },
          { label: 'c', task: '$5a \\cdot 4b$', solution: '$20ab$' },
          { label: 'd', task: '$3x \\cdot 2y \\cdot x$', solution: '$6x^2y$' },
        ],
        solution: 'a) 12x, b) $6x^2$, c) 20ab, d) $6x^2y$',
        hints: ['Gang tallene, gang bokstavene'],
      },
    },
    {
      id: '7-2-1-innsetting',
      type: 'text',
      content: `## Sette inn verdier

Vi kan finne verdien av et uttrykk ved å sette inn tall for variablene.

**Eksempel:** Finn verdien av $3x + 5$ når $x = 4$

$$3x + 5 = 3 \\cdot 4 + 5 = 12 + 5 = 17$$`,
    },
    {
      id: '7-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '7-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn verdien av uttrykkene når $x = 3$ og $y = 2$',
        subTasks: [
          { label: 'a', task: '$4x + 1$', solution: '$13$' },
          { label: 'b', task: '$2x + 3y$', solution: '$12$' },
          { label: 'c', task: '$x^2 - y$', solution: '$7$' },
          { label: 'd', task: '$xy + x$', solution: '$9$' },
        ],
        solution: 'a) 13, b) 12, c) 7, d) 9',
        hints: ['Bytt ut $x$ med 3 og $y$ med 2, og regn ut'],
      },
    },
  ],
};

export const CHAPTER_7_2_2: TextbookChapter = {
  id: '7-2-2',
  courseId: '7',
  chapterNumber: '2.2',
  title: 'Likninger',
  description: 'Førstegradslikninger, balanseprinsippet.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'løyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend',
  ],
  content: [
    {
      id: '7-2-2-intro',
      type: 'text',
      content: `## Hva er en likning?

En **likning** er en matematisk setning som sier at to uttrykk er like. Den inneholder et likhetstegn (=).

**Eksempler:**
- $x + 3 = 7$
- $2x - 5 = 9$
- $3x = 15$

Å **løse** en likning betyr å finne verdien av den ukjente (variabelen).`,
    },
    {
      id: '7-2-2-balanse',
      type: 'definition',
      title: 'Balanseprinsippet',
      content: `En likning er som en vekt i balanse. For å holde balansen må vi gjøre det samme på begge sider.

**Tillatte operasjoner:**
- Legge til samme tall på begge sider
- Trekke fra samme tall på begge sider
- Gange begge sider med samme tall
- Dele begge sider med samme tall (ikke med 0!)`,
    },
    {
      id: '7-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkel likning',
      problem: `Løs likningen: $x + 5 = 12$`,
      solution: `**Løsning:**
Vi vil ha $x$ alene på venstre side.

$$x + 5 = 12$$

Trekk fra 5 på begge sider:
$$x + 5 - 5 = 12 - 5$$
$$x = 7$$

**Prøve:** $7 + 5 = 12$ ✓

**Svar:** $x = 7$`,
    },
    {
      id: '7-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$x + 4 = 10$', solution: '$x = 6$' },
          { label: 'b', task: '$x - 3 = 8$', solution: '$x = 11$' },
          { label: 'c', task: '$x + 7 = 7$', solution: '$x = 0$' },
          { label: 'd', task: '$x - 5 = -2$', solution: '$x = 3$' },
        ],
        solution: 'a) x = 6, b) x = 11, c) x = 0, d) x = 3',
        hints: ['For å flytte et tall, gjør motsatt operasjon på begge sider'],
      },
    },
    {
      id: '7-2-2-mult',
      type: 'text',
      content: `## Likninger med multiplikasjon og divisjon

Når $x$ er ganget med et tall, deler vi begge sider med det tallet.

**Eksempel:** $3x = 15$
$$\\frac{3x}{3} = \\frac{15}{3}$$
$$x = 5$$`,
    },
    {
      id: '7-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Likning med flere steg',
      problem: `Løs likningen: $2x + 3 = 11$`,
      solution: `**Løsning:**
Steg 1: Flytt tallet (trekk fra 3 på begge sider)
$$2x + 3 - 3 = 11 - 3$$
$$2x = 8$$

Steg 2: Del på 2 (koeffisienten til x)
$$\\frac{2x}{2} = \\frac{8}{2}$$
$$x = 4$$

**Prøve:** $2 \\cdot 4 + 3 = 8 + 3 = 11$ ✓

**Svar:** $x = 4$`,
    },
    {
      id: '7-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$3x = 18$', solution: '$x = 6$' },
          { label: 'b', task: '$5x - 4 = 16$', solution: '$x = 4$' },
          { label: 'c', task: '$4x + 7 = 31$', solution: '$x = 6$' },
          { label: 'd', task: '$\\frac{x}{2} = 8$', solution: '$x = 16$' },
        ],
        solution: 'a) x = 6, b) x = 4, c) x = 6, d) x = 16',
        hints: ['Flytt tall først, så del på koeffisienten'],
      },
    },
    {
      id: '7-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '7-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningene',
        subTasks: [
          { label: 'a', task: '$2x - 5 = x + 3$', solution: '$x = 8$' },
          { label: 'b', task: '$3x + 2 = 2x + 7$', solution: '$x = 5$' },
          { label: 'c', task: '$4x - 3 = 2x + 9$', solution: '$x = 6$' },
          { label: 'd', task: '$5x + 1 = 3x + 11$', solution: '$x = 5$' },
        ],
        solution: 'a) x = 8, b) x = 5, c) x = 6, d) x = 5',
        hints: ['Samle x-ledd på én side og tall på den andre'],
      },
    },
  ],
};

export const CHAPTER_7_2_3: TextbookChapter = {
  id: '7-2-3',
  courseId: '7',
  chapterNumber: '2.3',
  title: 'Ulikheter - introduksjon',
  description: 'Større enn, mindre enn.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'løyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend',
  ],
  content: [
    {
      id: '7-2-3-intro',
      type: 'text',
      content: `## Hva er en ulikhet?

En **ulikhet** er en matematisk setning som sammenligner to uttrykk med symbolene:
- $<$ (mindre enn)
- $>$ (større enn)
- $\\leq$ (mindre enn eller lik)
- $\\geq$ (større enn eller lik)`,
    },
    {
      id: '7-2-3-def',
      type: 'definition',
      title: 'Ulikhetstegn',
      content: `| Symbol | Betydning | Eksempel |
|--------|-----------|----------|
| $<$ | mindre enn | $3 < 5$ |
| $>$ | større enn | $7 > 2$ |
| $\\leq$ | mindre enn eller lik | $x \\leq 4$ |
| $\\geq$ | større enn eller lik | $x \\geq -2$ |

**Huskeregel:** Tegnet "peker" mot det minste tallet.`,
    },
    {
      id: '7-2-3-tallinje',
      type: 'text',
      content: `## Løsningsmengde på tallinjen

Løsningen på en ulikhet er ofte mange tall. Vi viser dette på tallinjen:

- $x > 3$: Alle tall større enn 3 (åpen sirkel på 3)
- $x \\leq 5$: Alle tall ≤ 5 (fylt sirkel på 5)

**Åpen sirkel (○):** Tallet er IKKE med
**Fylt sirkel (●):** Tallet ER med`,
    },
    {
      id: '7-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Løse ulikhet',
      problem: `Løs ulikheten: $x + 3 > 7$`,
      solution: `**Løsning:**
Trekk fra 3 på begge sider:
$$x + 3 - 3 > 7 - 3$$
$$x > 4$$

**Løsning:** Alle tall større enn 4.

**Eksempler på løsninger:** 5, 6, 4.5, 10, 100, ...`,
    },
    {
      id: '7-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs ulikhetene',
        subTasks: [
          { label: 'a', task: '$x + 2 > 5$', solution: '$x > 3$' },
          { label: 'b', task: '$x - 4 < 3$', solution: '$x < 7$' },
          { label: 'c', task: '$x + 1 \\leq 6$', solution: '$x \\leq 5$' },
          { label: 'd', task: '$x - 3 \\geq 0$', solution: '$x \\geq 3$' },
        ],
        solution: 'a) x > 3, b) x < 7, c) x ≤ 5, d) x ≥ 3',
        hints: ['Løs som en vanlig likning - hold ulikheten'],
      },
    },
    {
      id: '7-2-3-varsel',
      type: 'definition',
      title: 'Viktig regel!',
      content: `Når du **ganger eller deler med et negativt tall**, må du **snu ulikhetstegnet**!

**Eksempel:**
$$-2x > 6$$
Del på $-2$ og snu tegnet:
$$x < -3$$`,
    },
    {
      id: '7-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs ulikhetene',
        subTasks: [
          { label: 'a', task: '$2x > 10$', solution: '$x > 5$' },
          { label: 'b', task: '$3x \\leq 15$', solution: '$x \\leq 5$' },
          { label: 'c', task: '$-x < 4$', solution: '$x > -4$' },
          { label: 'd', task: '$2x + 1 < 9$', solution: '$x < 4$' },
        ],
        solution: 'a) x > 5, b) x ≤ 5, c) x > -4, d) x < 4',
        hints: ['Del med negativt tall → snu tegnet'],
      },
    },
  ],
};

export const CHAPTER_7_2_4: TextbookChapter = {
  id: '7-2-4',
  courseId: '7',
  chapterNumber: '2.4',
  title: 'Praktiske likninger',
  description: 'Tekstoppgaver, sette opp likninger.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  content: [
    {
      id: '7-2-4-intro',
      type: 'text',
      content: `## Fra tekst til likning

Mange praktiske problemer kan løses ved å sette opp og løse en likning.

**Fremgangsmåte:**
1. Les teksten nøye
2. Definer den ukjente ($x$)
3. Sett opp likningen
4. Løs likningen
5. Sjekk svaret og svar med tekst`,
    },
    {
      id: '7-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Aldersgåte',
      problem: `Emma er dobbelt så gammel som boren sin. Til sammen er de 18 år. Hvor gammel er Emma?`,
      solution: `**Løsning:**

**Steg 1:** La $x$ = brorens alder

**Steg 2:** Emma er dobbelt så gammel = $2x$

**Steg 3:** Sett opp likning (sammen er de 18):
$$x + 2x = 18$$

**Steg 4:** Løs likningen:
$$3x = 18$$
$$x = 6$$

**Steg 5:** Broren er 6 år, Emma er $2 \\cdot 6 = 12$ år.

**Sjekk:** $6 + 12 = 18$ ✓

**Svar:** Emma er 12 år.`,
    },
    {
      id: '7-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Jonas kjøpte 3 like bøker og betalte 135 kr. Hva kostet én bok?',
        solution: 'La $x$ = pris per bok. $3x = 135$, så $x = 45$. En bok kostet 45 kr.',
        hints: ['La x være prisen på én bok, gang med 3'],
      },
    },
    {
      id: '7-2-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Geometrisk problem',
      problem: `Et rektangel har omkrets 28 cm. Lengden er 3 cm mer enn bredden. Finn lengden og bredden.`,
      solution: `**Løsning:**

La $x$ = bredden. Da er lengden = $x + 3$.

Omkrets av rektangel: $2 \\cdot \\text{lengde} + 2 \\cdot \\text{bredde}$

$$2(x + 3) + 2x = 28$$
$$2x + 6 + 2x = 28$$
$$4x + 6 = 28$$
$$4x = 22$$
$$x = 5.5$$

**Svar:** Bredden er 5,5 cm og lengden er 8,5 cm.`,
    },
    {
      id: '7-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En trekant har omkrets 30 cm. Den ene siden er dobbelt så lang som en annen, og den tredje er 6 cm. Finn de to ukjente sidene.',
        solution: 'La $x$ = den korte siden. $x + 2x + 6 = 30$, så $3x = 24$, $x = 8$. Sidene er 8 cm og 16 cm.',
        hints: ['La x være den korteste siden, den andre er 2x'],
      },
    },
    {
      id: '7-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '7-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et tog og en bil starter samtidig fra samme sted. Toget kjører 90 km/t og bilen 60 km/t. Etter hvor mange timer er avstanden mellom dem 120 km?',
        solution: 'Toget: $90t$ km, bilen: $60t$ km. Differanse: $90t - 60t = 120$, så $30t = 120$, $t = 4$. Etter 4 timer.',
        hints: ['Avstand = fart × tid. Finn forskjellen i avstand'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3: FUNKSJONER OG GRAFER
// ============================================================================

export const CHAPTER_7_3_1: TextbookChapter = {
  id: '7-3-1',
  courseId: '7',
  chapterNumber: '3.1',
  title: 'Koordinatsystemet',
  description: 'Fire kvadranter, negative koordinater.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive funksjonar knytte til praktiske situasjonar',
  ],
  content: [
    {
      id: '7-3-1-intro',
      type: 'text',
      content: `## Koordinatsystemet

Et koordinatsystem brukes til å beskrive posisjoner i et plan. Det består av:
- **x-aksen:** Den horisontale linjen
- **y-aksen:** Den vertikale linjen
- **Origo:** Punktet der aksene krysser, med koordinatene $(0, 0)$`,
    },
    {
      id: '7-3-1-def',
      type: 'definition',
      title: 'Koordinater',
      content: `Et punkt beskrives med koordinatene $(x, y)$:
- **x-koordinaten** (første tall): Hvor langt til høyre/venstre
- **y-koordinaten** (andre tall): Hvor langt opp/ned

**Eksempel:** Punktet $(3, 2)$ ligger 3 til høyre og 2 opp fra origo.`,
    },
    {
      id: '7-3-1-kvadranter',
      type: 'text',
      content: `## De fire kvadrantene

Koordinatsystemet deles inn i fire områder (kvadranter):

| Kvadrant | x-verdi | y-verdi | Eksempel |
|----------|---------|---------|----------|
| I | + | + | $(3, 2)$ |
| II | - | + | $(-4, 1)$ |
| III | - | - | $(-2, -3)$ |
| IV | + | - | $(5, -1)$ |`,
    },
    {
      id: '7-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Plassere punkter',
      problem: `Plasser punktene $A(2, 3)$, $B(-3, 1)$, $C(-2, -4)$ og $D(4, -2)$ i koordinatsystemet. Hvilken kvadrant ligger hvert punkt i?`,
      solution: `**Løsning:**
- $A(2, 3)$: x positiv, y positiv → **Kvadrant I**
- $B(-3, 1)$: x negativ, y positiv → **Kvadrant II**
- $C(-2, -4)$: x negativ, y negativ → **Kvadrant III**
- $D(4, -2)$: x positiv, y negativ → **Kvadrant IV**`,
    },
    {
      id: '7-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'I hvilken kvadrant ligger punktene?',
        subTasks: [
          { label: 'a', task: '$(5, 7)$', solution: 'Kvadrant I' },
          { label: 'b', task: '$(-2, 4)$', solution: 'Kvadrant II' },
          { label: 'c', task: '$(-6, -1)$', solution: 'Kvadrant III' },
          { label: 'd', task: '$(3, -5)$', solution: 'Kvadrant IV' },
        ],
        solution: 'a) I, b) II, c) III, d) IV',
        hints: ['Sjekk fortegn: I (+,+), II (-,+), III (-,-), IV (+,-)'],
      },
    },
    {
      id: '7-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et punkt ligger 4 enheter til venstre og 3 enheter ned fra origo. Hva er koordinatene?',
        solution: '$(-4, -3)$ - venstre gir negativ x, ned gir negativ y',
        hints: ['Venstre = negativ x, ned = negativ y'],
      },
    },
  ],
};

export const CHAPTER_7_3_2: TextbookChapter = {
  id: '7-3-2',
  courseId: '7',
  chapterNumber: '3.2',
  title: 'Lineære sammenhenger',
  description: 'Rett linje, stigning.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive funksjonar knytte til praktiske situasjonar',
  ],
  content: [
    {
      id: '7-3-2-intro',
      type: 'text',
      content: `## Lineære sammenhenger

En **lineær sammenheng** er en sammenheng der grafen blir en rett linje. Vi kan skrive den som:

$$y = ax + b$$

- $a$ = **stigningstallet** (hvor bratt linjen er)
- $b$ = **konstantleddet** (hvor linjen krysser y-aksen)`,
    },
    {
      id: '7-3-2-def',
      type: 'definition',
      title: 'Stigningstall',
      content: `**Stigningstallet** $a$ forteller hvor mye $y$ øker når $x$ øker med 1.

$$a = \\frac{\\text{endring i } y}{\\text{endring i } x} = \\frac{\\Delta y}{\\Delta x}$$

- $a > 0$: Linjen går oppover (voksende)
- $a < 0$: Linjen går nedover (avtakende)
- $a = 0$: Horisontal linje`,
    },
    {
      id: '7-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Tegne en lineær graf',
      problem: `Tegn grafen til $y = 2x + 1$`,
      solution: `**Løsning:**
Lag en verditabell:

| $x$ | $y = 2x + 1$ |
|-----|--------------|
| -1 | $2(-1) + 1 = -1$ |
| 0 | $2(0) + 1 = 1$ |
| 1 | $2(1) + 1 = 3$ |
| 2 | $2(2) + 1 = 5$ |

Punktene $(-1, -1)$, $(0, 1)$, $(1, 3)$, $(2, 5)$ ligger på en rett linje.

**Stigningstall:** $a = 2$ (y øker med 2 for hver 1 i x)
**Konstantledd:** $b = 1$ (krysser y-aksen i 1)`,
    },
    {
      id: '7-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn stigningstall og konstantledd',
        subTasks: [
          { label: 'a', task: '$y = 3x + 2$', solution: '$a = 3$, $b = 2$' },
          { label: 'b', task: '$y = -2x + 5$', solution: '$a = -2$, $b = 5$' },
          { label: 'c', task: '$y = x - 4$', solution: '$a = 1$, $b = -4$' },
          { label: 'd', task: '$y = 4$', solution: '$a = 0$, $b = 4$' },
        ],
        solution: 'a) a=3, b=2, b) a=-2, b=5, c) a=1, b=-4, d) a=0, b=4',
        hints: ['I $y = ax + b$ er $a$ tallet foran $x$ og $b$ er tallet uten $x$'],
      },
    },
    {
      id: '7-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en verditabell for $y = -x + 3$ med x-verdier fra -2 til 2',
        solution: 'x: -2, -1, 0, 1, 2 gir y: 5, 4, 3, 2, 1',
        hints: ['Sett inn hver x-verdi og regn ut y'],
      },
    },
  ],
};

export const CHAPTER_7_3_3: TextbookChapter = {
  id: '7-3-3',
  courseId: '7',
  chapterNumber: '3.3',
  title: 'Tolke grafer',
  description: 'Praktiske situasjoner, avlesning.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive funksjonar knytte til praktiske situasjonar',
  ],
  content: [
    {
      id: '7-3-3-intro',
      type: 'text',
      content: `## Lese grafer

Grafer brukes ofte til å vise sammenhenger i praktiske situasjoner:
- Temperatur over tid
- Avstand over tid
- Pris som funksjon av mengde
- Høyde over tid

Å **tolke** en graf betyr å forstå hva den forteller oss.`,
    },
    {
      id: '7-3-3-def',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**Voksende:** Grafen går oppover fra venstre mot høyre
**Avtakende:** Grafen går nedover fra venstre mot høyre
**Konstant:** Grafen er horisontal (flat)
**Bratt:** Stor endring i y for liten endring i x
**Slak:** Liten endring i y for stor endring i x`,
    },
    {
      id: '7-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Tolke avstand-tid-graf',
      problem: `En graf viser Lises avstand fra hjemmet over tid. Grafen starter i origo, stiger bratt de første 10 minuttene, er flat i 5 minutter, og går så nedover tilbake til 0. Beskriv turen.`,
      solution: `**Tolkning:**
1. **0-10 min:** Grafen stiger bratt → Lisa går raskt bort fra hjemmet
2. **10-15 min:** Grafen er flat → Lisa stopper (står stille)
3. **15-? min:** Grafen synker → Lisa går tilbake mot hjemmet
4. **Til slutt:** Grafen når 0 → Lisa er hjemme igjen`,
    },
    {
      id: '7-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'En graf viser temperaturen i et rom over 6 timer. Temperaturen starter på 18°C, stiger til 22°C etter 2 timer, holder seg der i 3 timer, og synker til 20°C den siste timen. Beskriv hva som kan ha skjedd.',
        solution: 'Noen skrudde på varmen, temperaturen steg. Den holdt seg stabil mens varmen var på. Så ble varmen skrudd ned/av og temperaturen sank.',
        hints: ['Tenk på hva som kan få temperaturen til å stige, være stabil, og synke'],
      },
    },
    {
      id: '7-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et basseng fylles med vann. Grafen viser vannstanden (cm) over tid (minutter). Etter 0 min: 0 cm, etter 5 min: 25 cm, etter 10 min: 50 cm. Hvor fort fylles bassenget?',
        solution: '5 cm per minutt (25 cm på 5 min = 5 cm/min)',
        hints: ['Fart = endring i høyde / endring i tid'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 4: GEOMETRI
// ============================================================================

export const CHAPTER_7_4_1: TextbookChapter = {
  id: '7-4-1',
  courseId: '7',
  chapterNumber: '4.1',
  title: 'Vinkler i trekanter',
  description: 'Vinkelsum, ukjent vinkel.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei',
  ],
  content: [
    {
      id: '7-4-1-intro',
      type: 'text',
      content: `## Vinkler i trekanter

En trekant har tre vinkler. Et viktig resultat i geometri er at disse tre vinklene alltid har en bestemt sum.`,
    },
    {
      id: '7-4-1-def',
      type: 'definition',
      title: 'Vinkelsummen i en trekant',
      content: `Summen av de tre vinklene i en trekant er alltid **180°**.

$$\\angle A + \\angle B + \\angle C = 180°$$

Dette gjelder for ALLE trekanter: likesidede, likebeinte, rettvinklede, og andre.`,
    },
    {
      id: '7-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Finn ukjent vinkel',
      problem: `En trekant har to vinkler på 65° og 50°. Finn den tredje vinkelen.`,
      solution: `**Løsning:**
Summen er 180°:
$$65° + 50° + x = 180°$$
$$115° + x = 180°$$
$$x = 180° - 115°$$
$$x = 65°$$

**Svar:** Den tredje vinkelen er 65°.`,
    },
    {
      id: '7-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den ukjente vinkelen i trekantene',
        subTasks: [
          { label: 'a', task: 'To vinkler er 70° og 60°', solution: '$50°$' },
          { label: 'b', task: 'To vinkler er 90° og 45°', solution: '$45°$' },
          { label: 'c', task: 'To vinkler er 30° og 30°', solution: '$120°$' },
          { label: 'd', task: 'To vinkler er 100° og 35°', solution: '$45°$' },
        ],
        solution: 'a) 50°, b) 45°, c) 120°, d) 45°',
        hints: ['Trekk summen av de to kjente vinklene fra 180°'],
      },
    },
    {
      id: '7-4-1-typer',
      type: 'text',
      content: `## Typer trekanter etter vinkler

- **Spissvinket trekant:** Alle vinkler er under 90°
- **Rettvinklet trekant:** Én vinkel er nøyaktig 90°
- **Stumpvinket trekant:** Én vinkel er over 90°`,
    },
    {
      id: '7-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en likebent trekant er de to like vinklene 70° hver. Finn toppvinkelen og avgjør hvilken type trekant dette er.',
        solution: 'Toppvinkel: $180° - 70° - 70° = 40°$. Alle vinkler under 90° → spissvinket trekant.',
        hints: ['Likebent = to like sider og to like vinkler'],
      },
    },
  ],
};

export const CHAPTER_7_4_2: TextbookChapter = {
  id: '7-4-2',
  courseId: '7',
  chapterNumber: '4.2',
  title: 'Konstruksjoner',
  description: 'Passer og linjal, midtnormal.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei',
  ],
  content: [
    {
      id: '7-4-2-intro',
      type: 'text',
      content: `## Geometriske konstruksjoner

I geometri bruker vi **passer** og **linjal** (uten målmerker) til å konstruere figurer nøyaktig. Dette er en eldgammel teknikk som går tilbake til de gamle grekerne.`,
    },
    {
      id: '7-4-2-midtnormal',
      type: 'definition',
      title: 'Midtnormal',
      content: `**Midtnormalen** til en linje er en linje som:
1. Går gjennom midtpunktet
2. Står vinkelrett (90°) på linjen

Alle punkter på midtnormalen har lik avstand til linjens endepunkter.`,
    },
    {
      id: '7-4-2-konstr-midtn',
      type: 'text',
      content: `## Konstruere midtnormal

**Fremgangsmåte:**
1. Sett passerspissen i punkt A og slå en bue
2. Med samme radius: sett passerspissen i B og slå en bue
3. Buene krysser hverandre i to punkter
4. Trekk en linje gjennom disse to punktene

Denne linjen er midtnormalen til AB.`,
    },
    {
      id: '7-4-2-halvering',
      type: 'definition',
      title: 'Halveringslinje for vinkel',
      content: `**Halveringslinjen** deler en vinkel i to like store vinkler.

**Konstruksjon:**
1. Slå en bue fra vinkelpunktet som krysser begge vinkelbeinene
2. Fra hvert krysspunkt: slå buer med lik radius som krysser hverandre
3. Trekk linje fra vinkelpunktet til skjæringspunktet`,
    },
    {
      id: '7-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn et linjestykke AB = 6 cm. Konstruer midtnormalen til AB med passer og linjal.',
        solution: 'Sett passer med radius > 3 cm. Slå buer fra A og B som krysser over og under linjen. Trekk linje gjennom krysspunktene.',
        hints: ['Passeråpningen må være større enn halve linjen'],
      },
    },
    {
      id: '7-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tegn en vinkel på 90° (rett vinkel) ved å konstruere midtnormalen til et linjestykke.',
        solution: 'Konstruer midtnormalen til en horisontal linje - den står vinkelrett og lager 90° vinkel.',
        hints: ['Midtnormalen står alltid vinkelrett (90°) på linjen'],
      },
    },
  ],
};

export const CHAPTER_7_4_3: TextbookChapter = {
  id: '7-4-3',
  courseId: '7',
  chapterNumber: '4.3',
  title: 'Pytagoras - introduksjon',
  description: 'Rettvinklet trekant, hypotenus.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum',
  ],
  content: [
    {
      id: '7-4-3-intro',
      type: 'text',
      content: `## Pytagoras' setning

En av de mest kjente setningene i matematikk! Den gjelder for **rettvinklede trekanter** - trekanter med én vinkel på 90°.`,
    },
    {
      id: '7-4-3-def',
      type: 'definition',
      title: 'Pytagoras setning',
      content: `I en rettvinklet trekant med kateter $a$ og $b$, og hypotenus $c$:

$$a^2 + b^2 = c^2$$

- **Katetene** ($a$ og $b$): De to sidene som danner den rette vinkelen
- **Hypotenusen** ($c$): Den lengste siden, ligger overfor den rette vinkelen`,
    },
    {
      id: '7-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Finn hypotenusen',
      problem: `En rettvinklet trekant har kateter 3 cm og 4 cm. Finn hypotenusen.`,
      solution: `**Løsning:**
Bruk Pytagoras:
$$c^2 = a^2 + b^2$$
$$c^2 = 3^2 + 4^2$$
$$c^2 = 9 + 16$$
$$c^2 = 25$$
$$c = \\sqrt{25} = 5$$

**Svar:** Hypotenusen er 5 cm.`,
    },
    {
      id: '7-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn hypotenusen i de rettvinklede trekantene',
        subTasks: [
          { label: 'a', task: 'Kateter: 6 cm og 8 cm', solution: '$10$ cm' },
          { label: 'b', task: 'Kateter: 5 cm og 12 cm', solution: '$13$ cm' },
          { label: 'c', task: 'Kateter: 8 cm og 15 cm', solution: '$17$ cm' },
          { label: 'd', task: 'Kateter: 9 cm og 12 cm', solution: '$15$ cm' },
        ],
        solution: 'a) 10, b) 13, c) 17, d) 15',
        hints: ['$c = \\sqrt{a^2 + b^2}$'],
      },
    },
    {
      id: '7-4-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Finn en katet',
      problem: `En rettvinklet trekant har hypotenus 13 cm og én katet 5 cm. Finn den andre kateten.`,
      solution: `**Løsning:**
$$a^2 + b^2 = c^2$$
$$5^2 + b^2 = 13^2$$
$$25 + b^2 = 169$$
$$b^2 = 169 - 25 = 144$$
$$b = \\sqrt{144} = 12$$

**Svar:** Den andre kateten er 12 cm.`,
    },
    {
      id: '7-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den ukjente kateten',
        subTasks: [
          { label: 'a', task: 'Hypotenus: 10, katet: 6', solution: '$8$' },
          { label: 'b', task: 'Hypotenus: 15, katet: 9', solution: '$12$' },
        ],
        solution: 'a) 8, b) 12',
        hints: ['$b = \\sqrt{c^2 - a^2}$'],
      },
    },
  ],
};

export const CHAPTER_7_4_4: TextbookChapter = {
  id: '7-4-4',
  courseId: '7',
  chapterNumber: '4.4',
  title: 'Areal og volum',
  description: 'Sammensatte figurer, sylinder.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum',
  ],
  content: [
    {
      id: '7-4-4-intro',
      type: 'text',
      content: `## Sammensatte figurer

Mange figurer i virkeligheten er satt sammen av enklere figurer. For å finne arealet:
1. Del figuren opp i kjente figurer
2. Beregn arealet av hver del
3. Legg sammen (eller trekk fra)`,
    },
    {
      id: '7-4-4-formler',
      type: 'definition',
      title: 'Arealformler',
      content: `**Rektangel:** $A = l \\cdot b$
**Trekant:** $A = \\frac{g \\cdot h}{2}$
**Sirkel:** $A = \\pi r^2$
**Parallellogram:** $A = g \\cdot h$
**Trapes:** $A = \\frac{(a + b) \\cdot h}{2}$`,
    },
    {
      id: '7-4-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Sammensatt figur',
      problem: `En L-formet figur kan deles i to rektangler: ett som er 8 cm × 3 cm og ett som er 4 cm × 5 cm. Finn totalarealet.`,
      solution: `**Løsning:**
Rektangel 1: $8 \\cdot 3 = 24$ cm²
Rektangel 2: $4 \\cdot 5 = 20$ cm²

Totalt areal: $24 + 20 = 44$ cm²

**Svar:** 44 cm²`,
    },
    {
      id: '7-4-4-sylinder',
      type: 'definition',
      title: 'Volum av sylinder',
      content: `En **sylinder** er en 3D-figur med sirkulært tverrsnitt.

**Volum:** $V = \\pi r^2 \\cdot h$

Der $r$ er radius i bunnen og $h$ er høyden.

**Overflate:** $O = 2\\pi r^2 + 2\\pi r h$`,
    },
    {
      id: '7-4-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Volum av sylinder',
      problem: `En sylinder har radius 5 cm og høyde 10 cm. Finn volumet. (Bruk $\\pi \\approx 3.14$)`,
      solution: `**Løsning:**
$$V = \\pi r^2 \\cdot h$$
$$V = 3.14 \\cdot 5^2 \\cdot 10$$
$$V = 3.14 \\cdot 25 \\cdot 10$$
$$V = 785 \\text{ cm}^3$$

**Svar:** 785 cm³`,
    },
    {
      id: '7-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn volumet av sylindrene (bruk $\\pi = 3.14$)',
        subTasks: [
          { label: 'a', task: '$r = 3$ cm, $h = 7$ cm', solution: '$197.82$ cm³' },
          { label: 'b', task: '$r = 4$ cm, $h = 5$ cm', solution: '$251.2$ cm³' },
        ],
        solution: 'a) 197.82 cm³, b) 251.2 cm³',
        hints: ['$V = \\pi r^2 h$'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 5: STATISTIKK OG ØKONOMI
// ============================================================================

export const CHAPTER_7_5_1: TextbookChapter = {
  id: '7-5-1',
  courseId: '7',
  chapterNumber: '5.1',
  title: 'Statistiske undersøkelser',
  description: 'Utvalg, populasjon, analyse.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'planleggje og gjennomføre statistiske undersøkingar og presentere resultat',
  ],
  content: [
    {
      id: '7-5-1-intro',
      type: 'text',
      content: `## Hva er statistikk?

**Statistikk** handler om å samle inn, organisere, analysere og tolke data. Vi bruker statistikk for å finne ut noe om en gruppe.`,
    },
    {
      id: '7-5-1-def',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**Populasjon:** Hele gruppen vi vil undersøke (f.eks. alle elever i Norge)
**Utvalg:** En mindre del av populasjonen som vi faktisk undersøker
**Representativt utvalg:** Et utvalg som gjenspeiler hele populasjonen godt
**Tilfeldig utvalg:** Alle i populasjonen har lik sjanse til å bli med`,
    },
    {
      id: '7-5-1-steg',
      type: 'text',
      content: `## Gjennomføre en undersøkelse

1. **Planlegge:** Hva vil vi finne ut? Hvem skal vi spørre?
2. **Samle inn:** Spørreskjema, observasjon, måling
3. **Organisere:** Sett dataene i tabeller
4. **Analysere:** Beregn gjennomsnitt, median, osv.
5. **Presentere:** Diagrammer, konklusjon`,
    },
    {
      id: '7-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Planlegge undersøkelse',
      problem: `Du vil finne ut hvor lang tid elevene i klassen bruker på lekser hver dag.`,
      solution: `**Planlegging:**
- **Populasjon:** Alle elever i klassen
- **Datainnsamling:** Spørreskjema med spørsmål om leksetid
- **Spørsmål:** "Hvor mange minutter bruker du på lekser i gjennomsnitt per dag?"
- **Svaralternativer:** 0-15 min, 15-30 min, 30-60 min, mer enn 60 min`,
    },
    {
      id: '7-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du vil undersøke hvilken sport som er mest populær blant ungdom i byen din. Beskriv populasjon, et passende utvalg, og hvordan du vil samle inn data.',
        solution: 'Populasjon: Alle ungdommer i byen. Utvalg: Elever fra flere ulike skoler. Datainnsamling: Spørreskjema med liste over sporter å velge mellom.',
        hints: ['Tenk på hvem som skal svare og hvordan du når dem'],
      },
    },
  ],
};

export const CHAPTER_7_5_2: TextbookChapter = {
  id: '7-5-2',
  courseId: '7',
  chapterNumber: '5.2',
  title: 'Diagrammer i regneark',
  description: 'Lage og tolke diagrammer digitalt.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'planleggje og gjennomføre statistiske undersøkingar og presentere resultat',
  ],
  content: [
    {
      id: '7-5-2-intro',
      type: 'text',
      content: `## Diagrammer

Diagrammer gjør det lettere å se mønstre og sammenhenger i data. Ulike typer diagrammer passer til ulike typer data.`,
    },
    {
      id: '7-5-2-typer',
      type: 'definition',
      title: 'Diagramtyper',
      content: `**Søylediagram:** Viser kategorier. Høyden på søylen viser verdien.
**Stolpediagram:** Som søylediagram, men horisontale søyler.
**Sektordiagram (kakediagram):** Viser andeler av en helhet (100%).
**Linjediagram:** Viser utvikling over tid.
**Punktdiagram:** Viser sammenheng mellom to variabler.`,
    },
    {
      id: '7-5-2-regneark',
      type: 'text',
      content: `## Lage diagrammer i regneark

I programmer som Excel eller Google Sheets:
1. Skriv inn dataene i tabellform
2. Marker dataene
3. Velg "Sett inn diagram"
4. Velg diagramtype
5. Tilpass tittel, aksenavn og farger`,
    },
    {
      id: '7-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken diagramtype passer best?',
        subTasks: [
          { label: 'a', task: 'Temperatur i en by hver måned i ett år', solution: 'Linjediagram' },
          { label: 'b', task: 'Favorittfarge i klassen', solution: 'Søylediagram eller sektordiagram' },
          { label: 'c', task: 'Hvor stor andel av budsjettet som går til ulike poster', solution: 'Sektordiagram' },
          { label: 'd', task: 'Sammenheng mellom høyde og skostørrelse', solution: 'Punktdiagram' },
        ],
        solution: 'a) Linjediagram, b) Søyle/sektor, c) Sektor, d) Punktdiagram',
        hints: ['Tid → linjediagram, kategorier → søyle, andeler → sektor'],
      },
    },
  ],
};

export const CHAPTER_7_5_3: TextbookChapter = {
  id: '7-5-3',
  courseId: '7',
  chapterNumber: '5.3',
  title: 'Personlig økonomi',
  description: 'Budsjett, spare.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  content: [
    {
      id: '7-5-3-intro',
      type: 'text',
      content: `## Personlig økonomi

Å forstå personlig økonomi handler om å ha oversikt over pengene dine - hva du tjener, hva du bruker, og hva du kan spare.`,
    },
    {
      id: '7-5-3-budsjett',
      type: 'definition',
      title: 'Budsjett',
      content: `Et **budsjett** er en plan for inntekter og utgifter.

**Inntekter:** Penger du får (lønn, lommepenger, gaver)
**Utgifter:** Penger du bruker (mat, klær, transport, sparing)

**Viktig:** Utgifter skal ikke være større enn inntektene!`,
    },
    {
      id: '7-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Månedsbudsjett',
      problem: `Ole får 500 kr i lommepenger per måned. Han vil bruke 200 kr på hobbyer, 150 kr på snacks/godteri, og spare resten. Hvor mye sparer han?`,
      solution: `**Løsning:**
Inntekt: 500 kr
Utgifter: $200 + 150 = 350$ kr
Sparing: $500 - 350 = 150$ kr

**Svar:** Ole sparer 150 kr per måned.`,
    },
    {
      id: '7-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lisa får 800 kr i månedslønn fra strøjobben. Hun bruker 40% på klær, 25% på sparing, og resten på aktiviteter. Hvor mye bruker hun på hver kategori?',
        solution: 'Klær: $800 \\cdot 0.40 = 320$ kr. Sparing: $800 \\cdot 0.25 = 200$ kr. Aktiviteter: $800 - 320 - 200 = 280$ kr.',
        hints: ['40% = 0.40, 25% = 0.25'],
      },
    },
  ],
};

export const CHAPTER_7_5_4: TextbookChapter = {
  id: '7-5-4',
  courseId: '7',
  chapterNumber: '5.4',
  title: 'Prosentregning',
  description: 'Rabatt, påslag, prosentvis endring.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  content: [
    {
      id: '7-5-4-intro',
      type: 'text',
      content: `## Prosentregning i praksis

Prosent brukes mye i hverdagen: rabatter, renter, skatter, prisøkninger. Å forstå prosentregning er viktig!`,
    },
    {
      id: '7-5-4-def',
      type: 'definition',
      title: 'Rabatt og påslag',
      content: `**Rabatt:** Prisavslag i prosent
- Ny pris = Gammel pris × (1 - rabatt/100)
- 20% rabatt: Ny pris = Gammel pris × 0.80

**Påslag:** Prisøkning i prosent
- Ny pris = Gammel pris × (1 + påslag/100)
- 25% påslag: Ny pris = Gammel pris × 1.25`,
    },
    {
      id: '7-5-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Rabatt',
      problem: `En jakke koster 800 kr. Den er på salg med 30% rabatt. Hva er salgsprisen?`,
      solution: `**Løsning:**
Rabatt: $800 \\cdot 0.30 = 240$ kr

Salgspris: $800 - 240 = 560$ kr

Eller direkte: $800 \\cdot 0.70 = 560$ kr

**Svar:** Salgsprisen er 560 kr.`,
    },
    {
      id: '7-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '7-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn salgsprisen',
        subTasks: [
          { label: 'a', task: 'Pris 500 kr, 20% rabatt', solution: '400 kr' },
          { label: 'b', task: 'Pris 1200 kr, 25% rabatt', solution: '900 kr' },
          { label: 'c', task: 'Pris 350 kr, 10% rabatt', solution: '315 kr' },
          { label: 'd', task: 'Pris 2000 kr, 15% rabatt', solution: '1700 kr' },
        ],
        solution: 'a) 400, b) 900, c) 315, d) 1700',
        hints: ['Gang prisen med (1 - rabatt som desimaltall)'],
      },
    },
    {
      id: '7-5-4-endring',
      type: 'definition',
      title: 'Prosentvis endring',
      content: `For å finne hvor mange prosent noe har økt eller minket:

$$\\text{Prosentvis endring} = \\frac{\\text{Ny verdi} - \\text{Gammel verdi}}{\\text{Gammel verdi}} \\cdot 100\\%$$`,
    },
    {
      id: '7-5-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Prosentvis økning',
      problem: `Prisen på en vare økte fra 200 kr til 250 kr. Hvor mange prosent økte prisen?`,
      solution: `**Løsning:**
$$\\text{Økning} = \\frac{250 - 200}{200} \\cdot 100\\%$$
$$= \\frac{50}{200} \\cdot 100\\%$$
$$= 0.25 \\cdot 100\\%$$
$$= 25\\%$$

**Svar:** Prisen økte med 25%.`,
    },
    {
      id: '7-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '7-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den prosentvise endringen',
        subTasks: [
          { label: 'a', task: 'Fra 100 til 125', solution: '25% økning' },
          { label: 'b', task: 'Fra 80 til 60', solution: '25% nedgang' },
          { label: 'c', task: 'Fra 400 til 500', solution: '25% økning' },
          { label: 'd', task: 'Fra 150 til 120', solution: '20% nedgang' },
        ],
        solution: 'a) 25% økning, b) 25% nedgang, c) 25% økning, d) 20% nedgang',
        hints: ['(Ny - Gammel) / Gammel × 100%'],
      },
    },
  ],
};

// ============================================================================
// EKSPORTERE ALLE KAPITLER
// ============================================================================

export const CHAPTERS_7KLASSE: TextbookChapter[] = [
  // Kapittel 1: Tall og tallforståelse
  CHAPTER_7_1_1,
  CHAPTER_7_1_2,
  CHAPTER_7_1_3,
  CHAPTER_7_1_4,
  // Kapittel 2: Algebra
  CHAPTER_7_2_1,
  CHAPTER_7_2_2,
  CHAPTER_7_2_3,
  CHAPTER_7_2_4,
  // Kapittel 3: Funksjoner og grafer
  CHAPTER_7_3_1,
  CHAPTER_7_3_2,
  CHAPTER_7_3_3,
  // Kapittel 4: Geometri
  CHAPTER_7_4_1,
  CHAPTER_7_4_2,
  CHAPTER_7_4_3,
  CHAPTER_7_4_4,
  // Kapittel 5: Statistikk og økonomi
  CHAPTER_7_5_1,
  CHAPTER_7_5_2,
  CHAPTER_7_5_3,
  CHAPTER_7_5_4,
];
