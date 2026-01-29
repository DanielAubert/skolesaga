/**
 * Tekstbok kapitler for 1P - Potenser, røtter og proporsjonalitet
 * Følger LK20 læreplan
 *
 * Kapittel 2.4: Potenser og potensregler
 * Kapittel 2.5: Røtter og standardform
 * Kapittel 2.6: Proporsjonalitet
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.4: POTENSER OG POTENSREGLER
// ============================================================================

export const CHAPTER_1P_2_4: TextbookChapter = {
  id: '1p-2-4',
  courseId: '1p',
  chapterNumber: '2.4',
  title: 'Potenser og potensregler',
  description:
    'Lær hva potenser er, og hvordan du bruker potensreglene til å forenkle uttrykk med potenser.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke potensrekneregler'],
  content: [
    // ---- Block 1: Intro ----
    {
      id: '1p-2-4-intro',
      type: 'text',
      content: `## Hva er en potens?

Når vi ganger et tall med seg selv flere ganger, kan vi skrive det som en **potens**.

For eksempel:

$$2 \\cdot 2 \\cdot 2 = 2^3 = 8$$

Her er $2$ **grunntallet** og $3$ er **eksponenten**. Eksponenten forteller hvor mange ganger grunntallet skal ganges med seg selv.

Potenser dukker opp i mange sammenhenger: areal ($m^2$), volum ($m^3$), datamengder (kilobyte, megabyte), og vekst av pengebeløp med rentes rente.`,
    },
    // ---- Block 2: Definition ----
    {
      id: '1p-2-4-def-potens',
      type: 'definition',
      title: 'Potens',
      content: `En **potens** er et uttrykk på formen $a^n$, der

- $a$ er **grunntallet**
- $n$ er **eksponenten** (eller «potensen»)

$$a^n = \\underbrace{a \\cdot a \\cdot a \\cdots a}_{n \\text{ faktorer}}$$

Eksempel: $5^4 = 5 \\cdot 5 \\cdot 5 \\cdot 5 = 625$`,
    },
    // ---- Block 3: Eksempel 1 ----
    {
      id: '1p-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne potenser',
      problem: `Regn ut:
a) $3^4$
b) $10^3$
c) $(-2)^3$
d) $(-2)^4$`,
      solution: `**Løsning:**

a) $3^4 = 3 \\cdot 3 \\cdot 3 \\cdot 3 = 81$

b) $10^3 = 10 \\cdot 10 \\cdot 10 = 1000$

c) $(-2)^3 = (-2) \\cdot (-2) \\cdot (-2) = -8$
Odde eksponent gir negativt svar når grunntallet er negativt.

d) $(-2)^4 = (-2) \\cdot (-2) \\cdot (-2) \\cdot (-2) = 16$
Like eksponent gir positivt svar når grunntallet er negativt.`,
    },
    // ---- Block 4: Exercise 1 ----
    {
      id: '1p-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-2-4-ex-1',
        number: '2.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut potensene:',
        subTasks: [
          {
            label: 'a',
            task: '$2^5$',
            solution: '$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$',
            answer: 32,
            multipleChoiceOptions: ['32', '10', '25', '64'],
          },
          {
            label: 'b',
            task: '$4^3$',
            solution: '$4^3 = 4 \\cdot 4 \\cdot 4 = 64$',
            answer: 64,
            multipleChoiceOptions: ['64', '12', '43', '256'],
          },
          {
            label: 'c',
            task: '$(-3)^3$',
            solution: '$(-3)^3 = (-3) \\cdot (-3) \\cdot (-3) = -27$',
            answer: -27,
            multipleChoiceOptions: ['-27', '27', '-9', '9'],
          },
          {
            label: 'd',
            task: '$(-5)^2$',
            solution: '$(-5)^2 = (-5) \\cdot (-5) = 25$',
            answer: 25,
            multipleChoiceOptions: ['25', '-25', '10', '-10'],
          },
        ],
        solution: 'a) 32  b) 64  c) -27  d) 25',
        hints: [
          'Skriv potensen som gjentatt multiplikasjon og regn ut steg for steg.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 5: Spesielle potenser ----
    {
      id: '1p-2-4-spesielle',
      type: 'text',
      content: `## Spesielle potenser

Det finnes to viktige spesialtilfeller:

- $a^1 = a$ — et tall opphøyd i 1 er seg selv
- $a^0 = 1$ — et tall opphøyd i 0 er alltid 1 (for $a \\neq 0$)

Hvorfor er $a^0 = 1$? Se på mønsteret:

$$2^3 = 8, \\quad 2^2 = 4, \\quad 2^1 = 2, \\quad 2^0 = \\, ?$$

Hver gang eksponenten går ned med 1, deler vi på grunntallet: $8 \\div 2 = 4$, $4 \\div 2 = 2$, $2 \\div 2 = 1$.

Altså $2^0 = 1$.`,
    },
    // ---- Block 6: Definition spesielle potenser ----
    {
      id: '1p-2-4-def-spesielle',
      type: 'definition',
      title: 'Spesielle potenser',
      content: `For alle tall $a \\neq 0$ gjelder:

$$a^1 = a \\qquad \\text{og} \\qquad a^0 = 1$$

Eksempler:
- $7^1 = 7$
- $100^0 = 1$
- $(-4)^0 = 1$`,
    },
    // ---- Block 7: Negative eksponenter ----
    {
      id: '1p-2-4-neg-eks',
      type: 'text',
      content: `## Potenser med negative eksponenter

Når eksponenten er negativ, snur vi brøken. En negativ eksponent betyr at vi tar den **inverse** (den omvendte):

$$a^{-n} = \\frac{1}{a^n}$$

Vi fortsetter mønsteret fra før:

$$2^2 = 4, \\quad 2^1 = 2, \\quad 2^0 = 1, \\quad 2^{-1} = \\frac{1}{2}, \\quad 2^{-2} = \\frac{1}{4}$$`,
    },
    // ---- Block 8: Definition negative eksponenter ----
    {
      id: '1p-2-4-def-neg',
      type: 'definition',
      title: 'Negativ eksponent',
      content: `For $a \\neq 0$ og en positiv heltallseksponent $n$:

$$a^{-n} = \\frac{1}{a^n}$$

Eksempler:
- $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$
- $10^{-3} = \\frac{1}{10^3} = \\frac{1}{1000} = 0{,}001$`,
    },
    // ---- Block 9: Eksempel 2 ----
    {
      id: '1p-2-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Negative eksponenter',
      problem: `Skriv som brøk eller desimaltall:
a) $5^{-2}$
b) $10^{-4}$
c) $2^{-3}$`,
      solution: `**Løsning:**

a) $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25} = 0{,}04$

b) $10^{-4} = \\frac{1}{10^4} = \\frac{1}{10\\,000} = 0{,}0001$

c) $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8} = 0{,}125$`,
    },
    // ---- Block 10: Potensregler ----
    {
      id: '1p-2-4-regler',
      type: 'text',
      content: `## Potensregler

Når vi regner med potenser, har vi fire viktige regler. Disse gjør det enklere å forenkle uttrykk uten å måtte skrive ut alle faktorene.`,
    },
    // ---- Block 11: Definition potensregler ----
    {
      id: '1p-2-4-def-regler',
      type: 'definition',
      title: 'Potensregler',
      content: `**Regel 1 — Multiplikasjon med likt grunntall:**
$$a^n \\cdot a^m = a^{n+m}$$

**Regel 2 — Divisjon med likt grunntall:**
$$\\frac{a^n}{a^m} = a^{n-m}$$

**Regel 3 — Potens av potens:**
$$(a^n)^m = a^{n \\cdot m}$$

**Regel 4 — Potens av produkt:**
$$(a \\cdot b)^n = a^n \\cdot b^n$$

Alle reglene gjelder for $a \\neq 0$ (og $b \\neq 0$ i regel 4).`,
    },
    // ---- Block 12: Eksempel 3 ----
    {
      id: '1p-2-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Bruk av potensregler',
      problem: `Forenkle uttrykkene:
a) $3^4 \\cdot 3^2$
b) $\\frac{5^7}{5^3}$
c) $(2^3)^4$
d) $(3 \\cdot 4)^2$`,
      solution: `**Løsning:**

a) $3^4 \\cdot 3^2 = 3^{4+2} = 3^6 = 729$ (regel 1)

b) $\\frac{5^7}{5^3} = 5^{7-3} = 5^4 = 625$ (regel 2)

c) $(2^3)^4 = 2^{3 \\cdot 4} = 2^{12} = 4096$ (regel 3)

d) $(3 \\cdot 4)^2 = 3^2 \\cdot 4^2 = 9 \\cdot 16 = 144$ (regel 4)`,
    },
    // ---- Block 13: Exercise 2 ----
    {
      id: '1p-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-2-4-ex-2',
        number: '2.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle uttrykkene ved hjelp av potensreglene:',
        subTasks: [
          {
            label: 'a',
            task: '$2^3 \\cdot 2^5$',
            solution: '$2^3 \\cdot 2^5 = 2^{3+5} = 2^8 = 256$',
            answer: 256,
            multipleChoiceOptions: ['256', '128', '64', '512'],
          },
          {
            label: 'b',
            task: '$\\frac{7^6}{7^4}$',
            solution: '$\\frac{7^6}{7^4} = 7^{6-4} = 7^2 = 49$',
            answer: 49,
            multipleChoiceOptions: ['49', '7', '14', '343'],
          },
          {
            label: 'c',
            task: '$(5^2)^3$',
            solution: '$(5^2)^3 = 5^{2 \\cdot 3} = 5^6 = 15\\,625$',
            answer: 15625,
            multipleChoiceOptions: ['15 625', '125', '625', '3125'],
          },
          {
            label: 'd',
            task: '$(2 \\cdot 5)^3$',
            solution:
              '$(2 \\cdot 5)^3 = 2^3 \\cdot 5^3 = 8 \\cdot 125 = 1000$',
            answer: 1000,
            multipleChoiceOptions: ['1000', '30', '100', '500'],
          },
        ],
        solution: 'a) 256  b) 49  c) 15 625  d) 1000',
        hints: [
          'Bruk potensreglene: likt grunntall → legg sammen eller trekk fra eksponentene.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 14: Tierpotenser ----
    {
      id: '1p-2-4-tier',
      type: 'text',
      content: `## Tierpotenser

Tierpotenser brukes svært ofte i dagliglivet og i vitenskapen. Mønsteret er enkelt:

| Potens | Verdi | Navn |
|--------|-------|------|
| $10^6$ | $1\\,000\\,000$ | en million |
| $10^3$ | $1\\,000$ | et tusen |
| $10^2$ | $100$ | et hundre |
| $10^1$ | $10$ | ti |
| $10^0$ | $1$ | en |
| $10^{-1}$ | $0{,}1$ | en tidel |
| $10^{-2}$ | $0{,}01$ | en hundredel |
| $10^{-3}$ | $0{,}001$ | en tusendel |

**Huskeregel:** Eksponenten til 10 forteller antall nuller bak 1-tallet (for positive eksponenter), eller antall desimaler (for negative eksponenter).`,
    },
    // ---- Block 15: Eksempel 4 – Praktiske eksempler ----
    {
      id: '1p-2-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Praktisk bruk av potenser',
      problem: `a) En harddisk har kapasitet på $2^{10}$ megabyte. Hvor mange megabyte er det?

b) Skriv $4\\,000\\,000$ som et produkt med en tierpotens.

c) Etter 6 år med 5 % årlig rente har et beløp vokst med faktoren $1{,}05^6$. Regn ut denne faktoren (avrund til to desimaler).`,
      solution: `**Løsning:**

a) $2^{10} = 1024$ megabyte (dette kalles 1 gigabyte i dagligtale).

b) $4\\,000\\,000 = 4 \\cdot 1\\,000\\,000 = 4 \\cdot 10^6$

c) $1{,}05^6 = 1{,}05 \\cdot 1{,}05 \\cdot 1{,}05 \\cdot 1{,}05 \\cdot 1{,}05 \\cdot 1{,}05 \\approx 1{,}34$

Beløpet har altså vokst med 34 % på 6 år.`,
    },
    // ---- Block 16: Exercise 3 ----
    {
      id: '1p-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-2-4-ex-3',
        number: '2.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene om tierpotenser og praktisk bruk:',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv $10^5$ som et vanlig tall.',
            solution: '$10^5 = 100\\,000$',
            answer: 100000,
            multipleChoiceOptions: ['100 000', '10 000', '1 000 000', '50'],
          },
          {
            label: 'b',
            task: 'Skriv $3\\,000$ ved hjelp av en tierpotens.',
            solution: '$3\\,000 = 3 \\cdot 10^3$',
            answer: '3 * 10^3',
            multipleChoiceOptions: [
              '$3 \\cdot 10^3$',
              '$3 \\cdot 10^4$',
              '$30 \\cdot 10^3$',
              '$3 \\cdot 10^2$',
            ],
          },
          {
            label: 'c',
            task: 'Regn ut $10^{-2} \\cdot 10^5$.',
            solution: '$10^{-2} \\cdot 10^5 = 10^{-2+5} = 10^3 = 1000$',
            answer: 1000,
            multipleChoiceOptions: ['1000', '100', '10 000', '10'],
          },
          {
            label: 'd',
            task: 'En USB-minnepinne rommer $2^{13}$ megabyte. Hvor mange megabyte er dette?',
            solution: '$2^{13} = 8192$ megabyte',
            answer: 8192,
            multipleChoiceOptions: ['8192', '4096', '16384', '2048'],
          },
        ],
        solution: 'a) 100 000  b) $3 \\cdot 10^3$  c) 1000  d) 8192',
        hints: [
          'Husk at eksponenten til 10 angir antall nuller. For multiplikasjon: legg sammen eksponentene.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 17: Warning ----
    {
      id: '1p-2-4-warning',
      type: 'warning',
      title: 'Vanlig feil med negative grunntall',
      content: `Pass på forskjellen mellom $-3^2$ og $(-3)^2$:

- $-3^2 = -(3^2) = -9$ — her kvadreres bare 3, og minustegnet står foran
- $(-3)^2 = (-3) \\cdot (-3) = 9$ — her kvadreres hele $(-3)$

Parentesen er avgjørende!`,
    },
    // ---- Block 18: Exercise 4 ----
    {
      id: '1p-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle uttrykkene så langt som mulig:',
        subTasks: [
          {
            label: 'a',
            task: '$\\frac{2^5 \\cdot 2^3}{2^4}$',
            solution:
              '$\\frac{2^5 \\cdot 2^3}{2^4} = \\frac{2^{8}}{2^4} = 2^{8-4} = 2^4 = 16$',
            answer: 16,
            multipleChoiceOptions: ['16', '8', '32', '64'],
          },
          {
            label: 'b',
            task: '$(3^2)^2 \\cdot 3^{-1}$',
            solution:
              '$(3^2)^2 \\cdot 3^{-1} = 3^4 \\cdot 3^{-1} = 3^{4-1} = 3^3 = 27$',
            answer: 27,
            multipleChoiceOptions: ['27', '81', '9', '243'],
          },
          {
            label: 'c',
            task: '$\\frac{(5 \\cdot 2)^3}{10^2}$',
            solution:
              '$\\frac{(5 \\cdot 2)^3}{10^2} = \\frac{10^3}{10^2} = 10^{3-2} = 10^1 = 10$',
            answer: 10,
            multipleChoiceOptions: ['10', '100', '1000', '1'],
          },
          {
            label: 'd',
            task: '$4^3 \\cdot 4^{-5}$',
            solution:
              '$4^3 \\cdot 4^{-5} = 4^{3-5} = 4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$',
            answer: '1/16',
            multipleChoiceOptions: [
              '$\\frac{1}{16}$',
              '$\\frac{1}{4}$',
              '$16$',
              '$-16$',
            ],
          },
        ],
        solution: 'a) 16  b) 27  c) 10  d) $\\frac{1}{16}$',
        hints: [
          'Bruk potensreglene steg for steg. Begynn med å forenkle teller og nevner hver for seg.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 19: Oppsummering ----
    {
      id: '1p-2-4-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- En potens $a^n$ betyr at grunntallet $a$ ganges med seg selv $n$ ganger
- $a^0 = 1$ og $a^1 = a$
- $a^{-n} = \\frac{1}{a^n}$
- Potensregler: $a^n \\cdot a^m = a^{n+m}$, $\\frac{a^n}{a^m} = a^{n-m}$, $(a^n)^m = a^{n \\cdot m}$, $(ab)^n = a^n b^n$
- Tierpotenser: eksponenten angir antall nuller (positive) eller desimaler (negative)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5: RØTTER OG STANDARDFORM
// ============================================================================

export const CHAPTER_1P_2_5: TextbookChapter = {
  id: '1p-2-5',
  courseId: '1p',
  chapterNumber: '2.5',
  title: 'Røtter og standardform',
  description:
    'Lær om kvadratrøtter, tredjerøtter og standardform for å uttrykke store og små tall.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke standardform til å uttrykkje store og små tal'],
  content: [
    // ---- Block 1: Intro ----
    {
      id: '1p-2-5-intro',
      type: 'text',
      content: `## Hva er en rot?

Å ta roten av et tall er det **motsatte** av å opphøye i en potens.

Når vi vet at $5^2 = 25$, kan vi si at **kvadratroten** av 25 er 5:

$$\\sqrt{25} = 5$$

Røtter brukes blant annet i geometri (for eksempel Pytagoras' setning), i statistikk (standardavvik) og i mange formler fra naturfag.`,
    },
    // ---- Block 2: Definition kvadratrot ----
    {
      id: '1p-2-5-def-kvrot',
      type: 'definition',
      title: 'Kvadratrot',
      content: `**Kvadratroten** av et tall $a \\geq 0$ er det ikke-negative tallet som ganget med seg selv gir $a$:

$$\\sqrt{a} = b \\quad \\Longleftrightarrow \\quad b^2 = a, \\; b \\geq 0$$

Eksempler:
- $\\sqrt{9} = 3$ fordi $3^2 = 9$
- $\\sqrt{49} = 7$ fordi $7^2 = 49$
- $\\sqrt{0} = 0$ fordi $0^2 = 0$`,
    },
    // ---- Block 3: Eksempel 1 ----
    {
      id: '1p-2-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne kvadratrøtter',
      problem: `Regn ut uten kalkulator:
a) $\\sqrt{16}$
b) $\\sqrt{144}$
c) $\\sqrt{0{,}04}$`,
      solution: `**Løsning:**

a) $\\sqrt{16} = 4$ fordi $4^2 = 16$

b) $\\sqrt{144} = 12$ fordi $12^2 = 144$

c) $\\sqrt{0{,}04} = 0{,}2$ fordi $0{,}2^2 = 0{,}04$`,
    },
    // ---- Block 4: Exercise 1 ----
    {
      id: '1p-2-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-2-5-ex-1',
        number: '2.5.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut kvadratrøttene:',
        subTasks: [
          {
            label: 'a',
            task: '$\\sqrt{36}$',
            solution: '$\\sqrt{36} = 6$',
            answer: 6,
            multipleChoiceOptions: ['6', '18', '9', '12'],
          },
          {
            label: 'b',
            task: '$\\sqrt{81}$',
            solution: '$\\sqrt{81} = 9$',
            answer: 9,
            multipleChoiceOptions: ['9', '8', '27', '41'],
          },
          {
            label: 'c',
            task: '$\\sqrt{100}$',
            solution: '$\\sqrt{100} = 10$',
            answer: 10,
            multipleChoiceOptions: ['10', '50', '20', '100'],
          },
          {
            label: 'd',
            task: '$\\sqrt{1}$',
            solution: '$\\sqrt{1} = 1$',
            answer: 1,
            multipleChoiceOptions: ['1', '0', '2', '0,5'],
          },
        ],
        solution: 'a) 6  b) 9  c) 10  d) 1',
        hints: ['Spør deg selv: hvilket tall ganget med seg selv gir dette?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 5: Tredjerot ----
    {
      id: '1p-2-5-tredjerot',
      type: 'text',
      content: `## Tredjerøtter

**Tredjeroten** (kubikkroten) er det motsatte av å opphøye i tredje. Vi skriver den med symbolet $\\sqrt[3]{\\phantom{x}}$.

$$\\sqrt[3]{27} = 3 \\quad \\text{fordi} \\quad 3^3 = 27$$

I motsetning til kvadratrøtter kan vi ta tredjeroten av negative tall:

$$\\sqrt[3]{-8} = -2 \\quad \\text{fordi} \\quad (-2)^3 = -8$$`,
    },
    // ---- Block 6: Definition tredjerot ----
    {
      id: '1p-2-5-def-tredjerot',
      type: 'definition',
      title: 'Tredjerot',
      content: `**Tredjeroten** av et tall $a$ er det tallet $b$ som oppfyller $b^3 = a$:

$$\\sqrt[3]{a} = b \\quad \\Longleftrightarrow \\quad b^3 = a$$

Eksempler:
- $\\sqrt[3]{64} = 4$ fordi $4^3 = 64$
- $\\sqrt[3]{125} = 5$ fordi $5^3 = 125$
- $\\sqrt[3]{-1} = -1$ fordi $(-1)^3 = -1$`,
    },
    // ---- Block 7: Sammenheng røtter og potenser ----
    {
      id: '1p-2-5-sammenheng',
      type: 'text',
      content: `## Sammenhengen mellom røtter og potenser

Røtter kan skrives som potenser med brøkeksponent:

$$\\sqrt{a} = a^{1/2} \\qquad \\text{og} \\qquad \\sqrt[3]{a} = a^{1/3}$$

Generelt:

$$\\sqrt[n]{a} = a^{1/n}$$

Dette betyr at alle potensreglene også gjelder for røtter! For eksempel:

$$\\sqrt{a} \\cdot \\sqrt{b} = a^{1/2} \\cdot b^{1/2} = (a \\cdot b)^{1/2} = \\sqrt{a \\cdot b}$$`,
    },
    // ---- Block 8: Eksempel 2 ----
    {
      id: '1p-2-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Forenkling av rotuttrykk',
      problem: `Forenkle:
a) $\\sqrt{4 \\cdot 9}$
b) $\\sqrt{50}$
c) $\\frac{\\sqrt{72}}{\\sqrt{2}}$`,
      solution: `**Løsning:**

a) $\\sqrt{4 \\cdot 9} = \\sqrt{4} \\cdot \\sqrt{9} = 2 \\cdot 3 = 6$

Alternativt: $\\sqrt{36} = 6$

b) $\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$

c) $\\frac{\\sqrt{72}}{\\sqrt{2}} = \\sqrt{\\frac{72}{2}} = \\sqrt{36} = 6$`,
    },
    // ---- Block 9: Exercise 2 ----
    {
      id: '1p-2-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-2-5-ex-2',
        number: '2.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle rotuttrykkene:',
        subTasks: [
          {
            label: 'a',
            task: '$\\sqrt{25 \\cdot 4}$',
            solution:
              '$\\sqrt{25 \\cdot 4} = \\sqrt{25} \\cdot \\sqrt{4} = 5 \\cdot 2 = 10$',
            answer: 10,
            multipleChoiceOptions: ['10', '100', '50', '29'],
          },
          {
            label: 'b',
            task: '$\\sqrt{18}$',
            solution:
              '$\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2} \\approx 4{,}24$',
            answer: '3*sqrt(2)',
            multipleChoiceOptions: [
              '$3\\sqrt{2}$',
              '$9\\sqrt{2}$',
              '$2\\sqrt{3}$',
              '$6\\sqrt{3}$',
            ],
          },
          {
            label: 'c',
            task: '$\\sqrt[3]{-27}$',
            solution: '$\\sqrt[3]{-27} = -3$ fordi $(-3)^3 = -27$',
            answer: -3,
            multipleChoiceOptions: ['-3', '3', '-9', '9'],
          },
          {
            label: 'd',
            task: '$\\frac{\\sqrt{200}}{\\sqrt{8}}$',
            solution:
              '$\\frac{\\sqrt{200}}{\\sqrt{8}} = \\sqrt{\\frac{200}{8}} = \\sqrt{25} = 5$',
            answer: 5,
            multipleChoiceOptions: ['5', '25', '10', '50'],
          },
        ],
        solution:
          'a) 10  b) $3\\sqrt{2}$  c) $-3$  d) 5',
        hints: [
          'Prøv å dele opp tallet under rottegnet i et produkt der en av faktorene er et kvadrattall.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 10: Standardform intro ----
    {
      id: '1p-2-5-standardform',
      type: 'text',
      content: `## Standardform

Noen tall er veldig store eller veldig små. Da er det upraktisk å skrive alle sifrene. Vi bruker **standardform** (også kalt vitenskapelig notasjon):

$$a \\cdot 10^n \\quad \\text{der } 1 \\leq a < 10 \\text{ og } n \\text{ er et heltall}$$

Eksempler:
- Avstanden til solen: $149\\,600\\,000$ km $= 1{,}496 \\cdot 10^8$ km
- Tykkelsen på et hårstrå: $0{,}00007$ m $= 7 \\cdot 10^{-5}$ m`,
    },
    // ---- Block 11: Definition standardform ----
    {
      id: '1p-2-5-def-standard',
      type: 'definition',
      title: 'Standardform',
      content: `Et tall er på **standardform** når det er skrevet som

$$a \\cdot 10^n$$

der $1 \\leq a < 10$ og $n$ er et heltall.

- **Stort tall** ($n > 0$): flytt desimalkommaet til høyre $n$ plasser
- **Lite tall** ($n < 0$): flytt desimalkommaet til venstre $|n|$ plasser`,
    },
    // ---- Block 12: Eksempel 3 ----
    {
      id: '1p-2-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Skrive tall på standardform',
      problem: `Skriv på standardform:
a) $47\\,000$
b) $0{,}00032$
c) $8\\,350\\,000$
d) $0{,}0091$`,
      solution: `**Løsning:**

a) $47\\,000 = 4{,}7 \\cdot 10^4$
Vi flytter kommaet 4 plasser til venstre.

b) $0{,}00032 = 3{,}2 \\cdot 10^{-4}$
Vi flytter kommaet 4 plasser til høyre.

c) $8\\,350\\,000 = 8{,}35 \\cdot 10^6$
Vi flytter kommaet 6 plasser til venstre.

d) $0{,}0091 = 9{,}1 \\cdot 10^{-3}$
Vi flytter kommaet 3 plasser til høyre.`,
    },
    // ---- Block 13: Exercise 3 ----
    {
      id: '1p-2-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-2-5-ex-3',
        number: '2.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tallene på standardform:',
        subTasks: [
          {
            label: 'a',
            task: '$560\\,000$',
            solution: '$560\\,000 = 5{,}6 \\cdot 10^5$',
            answer: '5.6e5',
            multipleChoiceOptions: [
              '$5{,}6 \\cdot 10^5$',
              '$56 \\cdot 10^4$',
              '$5{,}6 \\cdot 10^6$',
              '$0{,}56 \\cdot 10^6$',
            ],
          },
          {
            label: 'b',
            task: '$0{,}0045$',
            solution: '$0{,}0045 = 4{,}5 \\cdot 10^{-3}$',
            answer: '4.5e-3',
            multipleChoiceOptions: [
              '$4{,}5 \\cdot 10^{-3}$',
              '$45 \\cdot 10^{-4}$',
              '$4{,}5 \\cdot 10^{-2}$',
              '$4{,}5 \\cdot 10^{-4}$',
            ],
          },
          {
            label: 'c',
            task: '$92\\,000\\,000$',
            solution: '$92\\,000\\,000 = 9{,}2 \\cdot 10^7$',
            answer: '9.2e7',
            multipleChoiceOptions: [
              '$9{,}2 \\cdot 10^7$',
              '$92 \\cdot 10^6$',
              '$9{,}2 \\cdot 10^8$',
              '$9{,}2 \\cdot 10^6$',
            ],
          },
          {
            label: 'd',
            task: '$0{,}000006$',
            solution: '$0{,}000006 = 6 \\cdot 10^{-6}$',
            answer: '6e-6',
            multipleChoiceOptions: [
              '$6 \\cdot 10^{-6}$',
              '$6 \\cdot 10^{-5}$',
              '$60 \\cdot 10^{-7}$',
              '$6 \\cdot 10^{-7}$',
            ],
          },
        ],
        solution:
          'a) $5{,}6 \\cdot 10^5$  b) $4{,}5 \\cdot 10^{-3}$  c) $9{,}2 \\cdot 10^7$  d) $6 \\cdot 10^{-6}$',
        hints: [
          'Flytt desimalkommaet slik at du får ett siffer foran komma. Tell antall plasser du flytter — det blir eksponenten.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 14: Regning med standardform ----
    {
      id: '1p-2-5-regning-std',
      type: 'text',
      content: `## Regning med standardform

Når vi ganger eller deler tall på standardform, bruker vi potensreglene for tierpotenser.

**Multiplikasjon:**
$$(a \\cdot 10^n) \\cdot (b \\cdot 10^m) = (a \\cdot b) \\cdot 10^{n+m}$$

**Divisjon:**
$$\\frac{a \\cdot 10^n}{b \\cdot 10^m} = \\frac{a}{b} \\cdot 10^{n-m}$$

Husk å justere svaret slik at det er på riktig standardform ($1 \\leq a < 10$) til slutt.`,
    },
    // ---- Block 15: Eksempel 4 ----
    {
      id: '1p-2-5-example-4',
      type: 'example',
      title: 'Eksempel 4: Regning med standardform',
      problem: `a) $(3 \\cdot 10^4) \\cdot (2 \\cdot 10^3)$

b) $\\frac{8 \\cdot 10^9}{4 \\cdot 10^3}$

c) Lyset beveger seg med hastigheten $3 \\cdot 10^8$ m/s. Hvor langt reiser lyset på ett minutt (60 sekunder)?`,
      solution: `**Løsning:**

a) $(3 \\cdot 10^4) \\cdot (2 \\cdot 10^3) = (3 \\cdot 2) \\cdot 10^{4+3} = 6 \\cdot 10^7$

b) $\\frac{8 \\cdot 10^9}{4 \\cdot 10^3} = \\frac{8}{4} \\cdot 10^{9-3} = 2 \\cdot 10^6$

c) Strekning $= \\text{fart} \\cdot \\text{tid}$:
$(3 \\cdot 10^8) \\cdot 60 = (3 \\cdot 10^8) \\cdot (6 \\cdot 10^1)$
$= 18 \\cdot 10^9 = 1{,}8 \\cdot 10^{10}$ m

Lyset reiser altså $1{,}8 \\cdot 10^{10}$ m, det vil si 18 milliarder meter, på ett minutt.`,
    },
    // ---- Block 16: Exercise 4 ----
    {
      id: '1p-2-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-2-5-ex-4',
        number: '2.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn med standardform. Gi svaret på standardform.',
        subTasks: [
          {
            label: 'a',
            task: '$(4 \\cdot 10^5) \\cdot (3 \\cdot 10^2)$',
            solution:
              '$(4 \\cdot 10^5) \\cdot (3 \\cdot 10^2) = 12 \\cdot 10^7 = 1{,}2 \\cdot 10^8$',
            answer: '1.2e8',
            multipleChoiceOptions: [
              '$1{,}2 \\cdot 10^8$',
              '$12 \\cdot 10^7$',
              '$1{,}2 \\cdot 10^7$',
              '$1{,}2 \\cdot 10^{10}$',
            ],
          },
          {
            label: 'b',
            task: '$\\frac{6 \\cdot 10^{11}}{3 \\cdot 10^5}$',
            solution:
              '$\\frac{6 \\cdot 10^{11}}{3 \\cdot 10^5} = 2 \\cdot 10^6$',
            answer: '2e6',
            multipleChoiceOptions: [
              '$2 \\cdot 10^6$',
              '$2 \\cdot 10^5$',
              '$2 \\cdot 10^{16}$',
              '$0{,}5 \\cdot 10^6$',
            ],
          },
          {
            label: 'c',
            task: 'En celle er ca. $8 \\cdot 10^{-6}$ m lang. En bakterie er ca. $2 \\cdot 10^{-6}$ m lang. Hvor mange ganger lengre er cellen enn bakterien?',
            solution:
              '$\\frac{8 \\cdot 10^{-6}}{2 \\cdot 10^{-6}} = \\frac{8}{2} \\cdot 10^{-6-(-6)} = 4 \\cdot 10^0 = 4$ ganger',
            answer: 4,
            multipleChoiceOptions: ['4', '6', '16', '0,25'],
          },
          {
            label: 'd',
            task: 'Massen til jorda er ca. $6 \\cdot 10^{24}$ kg. Massen til månen er ca. $7{,}3 \\cdot 10^{22}$ kg. Omtrent hvor mange ganger tyngre er jorda enn månen? Avrund til nærmeste hele tall.',
            solution:
              '$\\frac{6 \\cdot 10^{24}}{7{,}3 \\cdot 10^{22}} = \\frac{6}{7{,}3} \\cdot 10^{24-22} = 0{,}822 \\cdot 10^2 \\approx 82$ ganger',
            answer: 82,
            multipleChoiceOptions: ['82', '8', '820', '12'],
          },
        ],
        solution:
          'a) $1{,}2 \\cdot 10^8$  b) $2 \\cdot 10^6$  c) 4 ganger  d) ca. 82 ganger',
        hints: [
          'Gang/del tallene for seg og tierpotensene for seg. Husk å justere til standardform til slutt.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 17: Tip ----
    {
      id: '1p-2-5-tip',
      type: 'tip',
      title: 'Kalkulator og standardform',
      content: `De fleste kalkulatorer viser standardform med bokstaven **E**.

For eksempel betyr \`3.5E8\` det samme som $3{,}5 \\cdot 10^8$.

På GeoGebra/CAS kan du skrive \`3.5 * 10^8\` direkte.`,
    },
    // ---- Block 18: Oppsummering ----
    {
      id: '1p-2-5-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- $\\sqrt{a}$ er tallet som ganget med seg selv gir $a$
- $\\sqrt[3]{a}$ er tallet som opphøyd i tredje gir $a$
- $\\sqrt{a} = a^{1/2}$ og $\\sqrt[3]{a} = a^{1/3}$
- $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$
- Standardform: $a \\cdot 10^n$ der $1 \\leq a < 10$
- Multiplikasjon: gang tallene, legg sammen eksponentene
- Divisjon: del tallene, trekk fra eksponentene`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6: PROPORSJONALITET
// ============================================================================

export const CHAPTER_1P_2_6: TextbookChapter = {
  id: '1p-2-6',
  courseId: '1p',
  chapterNumber: '2.6',
  title: 'Proporsjonalitet',
  description:
    'Lær om forholdstall, proporsjonale og omvendt proporsjonale størrelser, og bruk av kryssregning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  content: [
    // ---- Block 1: Intro ----
    {
      id: '1p-2-6-intro',
      type: 'text',
      content: `## Forholdstall og forhold

Et **forhold** beskriver sammenhengen mellom to størrelser. Vi skriver det med kolon:

$$a : b$$

For eksempel kan en blandingsoppskrift for saft være 1 del konsentrat og 4 deler vann, altså **1 : 4**.

Forhold kan forkortes akkurat som brøker. Forholdet $6 : 9$ kan forkortes til $2 : 3$ ved å dele begge tallene på 3.`,
    },
    // ---- Block 2: Definition forhold ----
    {
      id: '1p-2-6-def-forhold',
      type: 'definition',
      title: 'Forhold',
      content: `Et **forhold** $a : b$ uttrykker den relative størrelsen mellom to mengder.

To forhold er **like** dersom de kan forkortes til det samme:
$$a : b = c : d \\quad \\Longleftrightarrow \\quad \\frac{a}{b} = \\frac{c}{d}$$

Eksempel: $3 : 5 = 6 : 10 = 12 : 20$`,
    },
    // ---- Block 3: Eksempel 1 ----
    {
      id: '1p-2-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Forholdstall i praksis',
      problem: `a) En oppskrift på pannekaker bruker 3 egg og 6 dl melk. Hva er forholdet mellom egg og melk? Forkort så langt som mulig.

b) Et fotografi skal forstørres i forholdet $3 : 5$. Originalbildet er 12 cm bredt. Hvor bredt blir det forstørrede bildet?`,
      solution: `**Løsning:**

a) Forholdet egg : melk $= 3 : 6 = 1 : 2$ (deler begge på 3).
For hvert egg trengs 2 dl melk.

b) Vi setter opp forholdet:
$\\frac{\\text{original}}{\\text{forstørret}} = \\frac{3}{5}$

$\\frac{12}{x} = \\frac{3}{5}$

$x = \\frac{12 \\cdot 5}{3} = \\frac{60}{3} = 20$ cm

Det forstørrede bildet blir 20 cm bredt.`,
    },
    // ---- Block 4: Exercise 1 ----
    {
      id: '1p-2-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-2-6-ex-1',
        number: '2.6.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oppgaver om forholdstall:',
        subTasks: [
          {
            label: 'a',
            task: 'Forkort forholdet $15 : 25$.',
            solution: '$15 : 25 = 3 : 5$ (deler begge på 5)',
            answer: '3:5',
            multipleChoiceOptions: ['3 : 5', '5 : 3', '1 : 5', '15 : 25'],
          },
          {
            label: 'b',
            task: 'Forkort forholdet $24 : 36$.',
            solution: '$24 : 36 = 2 : 3$ (deler begge på 12)',
            answer: '2:3',
            multipleChoiceOptions: ['2 : 3', '3 : 2', '4 : 6', '12 : 18'],
          },
          {
            label: 'c',
            task: 'En oppskrift for smoothie bruker frukt og yoghurt i forholdet $2 : 3$. Hvor mye yoghurt trengs til 8 dl frukt?',
            solution:
              '$\\frac{2}{3} = \\frac{8}{x} \\Rightarrow x = \\frac{8 \\cdot 3}{2} = 12$ dl',
            answer: 12,
            multipleChoiceOptions: ['12 dl', '6 dl', '16 dl', '24 dl'],
          },
          {
            label: 'd',
            task: 'Forholdet mellom gutter og jenter i en klasse er $3 : 2$. Det er 15 gutter. Hvor mange jenter er det?',
            solution:
              '$\\frac{3}{2} = \\frac{15}{x} \\Rightarrow x = \\frac{15 \\cdot 2}{3} = 10$ jenter',
            answer: 10,
            multipleChoiceOptions: ['10', '9', '12', '6'],
          },
        ],
        solution: 'a) 3 : 5  b) 2 : 3  c) 12 dl  d) 10 jenter',
        hints: [
          'Finn den største felles faktoren for å forkorte. Sett opp en forholdsligning for å finne ukjente størrelser.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 5: Proporsjonale størrelser ----
    {
      id: '1p-2-6-proporsjonalitet',
      type: 'text',
      content: `## Proporsjonale størrelser

To størrelser er **proporsjonale** (rett proporsjonale) dersom den ene er en fast konstant ganget med den andre:

$$y = k \\cdot x$$

Her er $k$ **proporsjonalitetskonstanten**.

Kjennetegn:
- Når $x$ dobles, dobles også $y$
- Grafen er en **rett linje gjennom origo** (nullpunktet)
- Forholdet $\\frac{y}{x} = k$ er alltid det samme

Et dagligdags eksempel: prisen du betaler for bensin er proporsjonal med antall liter du fyller. Fyller du dobbelt så mye, betaler du dobbelt.`,
    },
    // ---- Block 6: Definition proporsjonalitet ----
    {
      id: '1p-2-6-def-prop',
      type: 'definition',
      title: 'Proporsjonale størrelser',
      content: `To størrelser $x$ og $y$ er **proporsjonale** dersom

$$y = k \\cdot x$$

der $k$ er en konstant kalt **proporsjonalitetskonstanten**.

Ekvivalent: $\\frac{y}{x} = k$ for alle verdier av $x \\neq 0$.

Grafen til $y = kx$ er en rett linje gjennom origo med stigningstall $k$.`,
    },
    // ---- Block 7: Eksempel 2 ----
    {
      id: '1p-2-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Proporsjonale størrelser',
      problem: `En kopp kaffe koster 42 kr i en kafe.

a) Sett opp en formel for prisen $P$ som funksjon av antall kopper $n$.

b) Hva er proporsjonalitetskonstanten?

c) Hva koster 7 kopper?`,
      solution: `**Løsning:**

a) $P = 42 \\cdot n$

b) Proporsjonalitetskonstanten er $k = 42$ kr per kopp.

c) $P = 42 \\cdot 7 = 294$ kr`,
    },
    // ---- Block 8: Exercise 2 ----
    {
      id: '1p-2-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-2-6-ex-2',
        number: '2.6.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oppgaver om proporsjonale størrelser:',
        subTasks: [
          {
            label: 'a',
            task: 'En bil kjører med jevn fart. Etter 2 timer har den kjørt 160 km. Finn proporsjonalitetskonstanten $k$ (farten).',
            solution:
              '$k = \\frac{160}{2} = 80$ km/t. Formelen er $s = 80t$.',
            answer: 80,
            multipleChoiceOptions: ['80 km/t', '160 km/t', '40 km/t', '320 km/t'],
          },
          {
            label: 'b',
            task: 'Hvor langt har bilen kjørt etter 3,5 timer med denne farten?',
            solution: '$s = 80 \\cdot 3{,}5 = 280$ km',
            answer: 280,
            multipleChoiceOptions: ['280 km', '240 km', '320 km', '180 km'],
          },
          {
            label: 'c',
            task: 'Vekten av en stålstang er proporsjonal med lengden. En stang på 3 m veier 12 kg. Hva veier en stang på 5 m?',
            solution:
              '$k = \\frac{12}{3} = 4$ kg/m. Vekt $= 4 \\cdot 5 = 20$ kg.',
            answer: 20,
            multipleChoiceOptions: ['20 kg', '15 kg', '24 kg', '60 kg'],
          },
          {
            label: 'd',
            task: 'Er følgende sammenheng proporsjonal? En telefonabonnement koster 199 kr/mnd pluss 0,50 kr per ringt minutt. Begrunn svaret.',
            solution:
              'Nei, sammenhengen er **ikke** proporsjonal. Formelen er $P = 199 + 0{,}50 \\cdot m$, som ikke er på formen $y = kx$ fordi det er et konstantledd (199). Grafen går ikke gjennom origo.',
            answer: 'Nei',
            multipleChoiceOptions: [
              'Nei, pga. fast kostnad 199 kr',
              'Ja, prisen øker med minutter',
              'Ja, det er lineært',
              'Nei, fordi prisen er for høy',
            ],
          },
        ],
        solution:
          'a) 80 km/t  b) 280 km  c) 20 kg  d) Nei, pga. konstantleddet 199 kr.',
        hints: [
          'Proporsjonalitetskonstanten $k$ finner du ved å dele $y$ på $x$. Proporsjonale størrelser har formelen $y = kx$ uten konstantledd.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 9: Omvendt proporsjonale ----
    {
      id: '1p-2-6-omvendt',
      type: 'text',
      content: `## Omvendt proporsjonale størrelser

To størrelser er **omvendt proporsjonale** (også kalt «inversely proportional») dersom produktet av dem er konstant:

$$y = \\frac{k}{x} \\quad \\text{eller} \\quad x \\cdot y = k$$

Kjennetegn:
- Når $x$ dobles, halveres $y$
- Grafen er en **hyperbel** (krum kurve)
- Produktet $x \\cdot y$ er alltid det samme

Eksempel: Hvis 4 malere bruker 6 dager på å male et hus, hvor lang tid bruker 8 malere? Når antall malere dobles, halveres tiden.`,
    },
    // ---- Block 10: Definition omvendt proporsjonalitet ----
    {
      id: '1p-2-6-def-omvendt',
      type: 'definition',
      title: 'Omvendt proporsjonale størrelser',
      content: `To størrelser $x$ og $y$ er **omvendt proporsjonale** dersom

$$y = \\frac{k}{x} \\quad \\text{der } k \\text{ er en konstant}$$

Ekvivalent: $x \\cdot y = k$ for alle verdier.

Eksempel: Fart og tid for en bestemt strekning — kjører du dobbelt så fort, bruker du halvparten av tiden.`,
    },
    // ---- Block 11: Eksempel 3 ----
    {
      id: '1p-2-6-example-3',
      type: 'example',
      title: 'Eksempel 3: Omvendt proporsjonale størrelser',
      problem: `a) 6 arbeidere bruker 10 dager på å bygge en mur. Hvor mange dager bruker 15 arbeidere?

b) En bil kjører en strekning på 240 km. Sett opp en formel for tiden $t$ (i timer) som funksjon av farten $v$ (i km/t). Er størrelsene proporsjonale eller omvendt proporsjonale?`,
      solution: `**Løsning:**

a) Produktet arbeidere $\\cdot$ dager er konstant:
$k = 6 \\cdot 10 = 60$

Med 15 arbeidere: $15 \\cdot d = 60 \\Rightarrow d = \\frac{60}{15} = 4$ dager.

b) $t = \\frac{240}{v}$

Konstanten er $k = 240$. Størrelsene er **omvendt proporsjonale** fordi $t \\cdot v = 240$ er konstant. Kjører du dobbelt så fort, halveres tiden.`,
    },
    // ---- Block 12: Exercise 3 ----
    {
      id: '1p-2-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-2-6-ex-3',
        number: '2.6.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oppgaver om omvendt proporsjonalitet:',
        subTasks: [
          {
            label: 'a',
            task: '3 pumper tømmer et basseng på 8 timer. Hvor lang tid bruker 6 pumper?',
            solution:
              '$k = 3 \\cdot 8 = 24$. Med 6 pumper: $t = \\frac{24}{6} = 4$ timer.',
            answer: 4,
            multipleChoiceOptions: ['4 timer', '2 timer', '16 timer', '6 timer'],
          },
          {
            label: 'b',
            task: 'En bil bruker 3 timer på en strekning med fart 80 km/t. Hvor lang tid tar det med fart 120 km/t?',
            solution:
              '$k = 80 \\cdot 3 = 240$ km. Med 120 km/t: $t = \\frac{240}{120} = 2$ timer.',
            answer: 2,
            multipleChoiceOptions: ['2 timer', '1,5 timer', '4 timer', '2,5 timer'],
          },
          {
            label: 'c',
            task: 'Avgjør om størrelsene er proporsjonale eller omvendt proporsjonale: prisen per person når en regning på 900 kr deles likt.',
            solution:
              'Omvendt proporsjonale. Jo flere personer som deler, desto lavere pris per person. $P = \\frac{900}{n}$.',
            answer: 'Omvendt proporsjonale',
            multipleChoiceOptions: [
              'Omvendt proporsjonale',
              'Proporsjonale',
              'Ingen av delene',
              'Lineære',
            ],
          },
        ],
        solution:
          'a) 4 timer  b) 2 timer  c) Omvendt proporsjonale',
        hints: [
          'Ved omvendt proporsjonalitet er produktet $x \\cdot y$ konstant. Finn $k$ først.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 13: Kryssregning ----
    {
      id: '1p-2-6-kryss',
      type: 'text',
      content: `## Kryssregning

**Kryssregning** (også kalt kryss-multiplikasjon) er en metode for å løse forholdsligning. Når vi har

$$\\frac{a}{b} = \\frac{c}{d}$$

kan vi krysse og gange:

$$a \\cdot d = b \\cdot c$$

Dette er nyttig i mange praktiske situasjoner som skala, valuta og blandingsforhold.`,
    },
    // ---- Block 14: Eksempel 4 ----
    {
      id: '1p-2-6-example-4',
      type: 'example',
      title: 'Eksempel 4: Kryssregning i praksis',
      problem: `a) Et kart har målestokk $1 : 50\\,000$. Avstanden mellom to steder på kartet er 7,4 cm. Hva er den virkelige avstanden?

b) Valutakursen er 1 euro = 11,30 kr. Hvor mange euro får du for 800 kr?`,
      solution: `**Løsning:**

a) Målestokk $1 : 50\\,000$ betyr at 1 cm på kartet tilsvarer 50 000 cm i virkeligheten.

$$\\frac{1}{50\\,000} = \\frac{7{,}4}{x}$$

$x = 7{,}4 \\cdot 50\\,000 = 370\\,000$ cm $= 3{,}7$ km

b) $\\frac{1 \\text{ euro}}{11{,}30 \\text{ kr}} = \\frac{x \\text{ euro}}{800 \\text{ kr}}$

$x = \\frac{800}{11{,}30} \\approx 70{,}80$ euro`,
    },
    // ---- Block 15: Exercise 4 ----
    {
      id: '1p-2-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-2-6-ex-4',
        number: '2.6.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk kryssregning til å løse oppgavene:',
        subTasks: [
          {
            label: 'a',
            task: 'Et kart har målestokk $1 : 25\\,000$. Avstanden mellom to steder på kartet er 4 cm. Finn den virkelige avstanden i meter.',
            solution:
              '$\\frac{1}{25\\,000} = \\frac{4}{x} \\Rightarrow x = 4 \\cdot 25\\,000 = 100\\,000$ cm $= 1000$ m.',
            answer: 1000,
            multipleChoiceOptions: ['1000 m', '100 m', '10 000 m', '250 m'],
          },
          {
            label: 'b',
            task: '1 dollar = 10,50 kr. Hvor mye er 350 dollar i norske kroner?',
            solution:
              '$\\frac{1}{10{,}50} = \\frac{350}{x} \\Rightarrow x = 350 \\cdot 10{,}50 = 3675$ kr.',
            answer: 3675,
            multipleChoiceOptions: ['3675 kr', '3500 kr', '33,3 kr', '3850 kr'],
          },
          {
            label: 'c',
            task: 'I en betongblanding er forholdet mellom sement og sand $1 : 3$. Hvor mange kg sement trengs til 45 kg sand?',
            solution:
              '$\\frac{1}{3} = \\frac{x}{45} \\Rightarrow x = \\frac{45}{3} = 15$ kg sement.',
            answer: 15,
            multipleChoiceOptions: ['15 kg', '135 kg', '9 kg', '45 kg'],
          },
          {
            label: 'd',
            task: 'En oppskrift for 4 personer bruker 300 g kjøttdeig. Hvor mye kjøttdeig trengs til 7 personer?',
            solution:
              '$\\frac{4}{300} = \\frac{7}{x} \\Rightarrow x = \\frac{300 \\cdot 7}{4} = 525$ g.',
            answer: 525,
            multipleChoiceOptions: ['525 g', '400 g', '700 g', '475 g'],
          },
        ],
        solution:
          'a) 1000 m  b) 3675 kr  c) 15 kg  d) 525 g',
        hints: [
          'Sett opp to like brøker med den ukjente. Kryss-multipliser for å løse.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 16: Tip ----
    {
      id: '1p-2-6-tip',
      type: 'tip',
      title: 'Hvordan avgjøre typen proporsjonalitet?',
      content: `Spør deg selv:

- **Øker begge** størrelsene sammen? → Sannsynligvis **proporsjonale** ($y = kx$)
- **Øker den ene** mens **den andre minker**? → Sannsynligvis **omvendt proporsjonale** ($y = k/x$)
- **Tester**: Sjekk om $y/x$ er konstant (proporsjonale) eller om $x \\cdot y$ er konstant (omvendt proporsjonale).`,
    },
    // ---- Block 17: Exercise 5 ----
    {
      id: '1p-2-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1p-2-6-ex-5',
        number: '2.6.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avgjør om størrelsene er proporsjonale, omvendt proporsjonale eller ingen av delene. Begrunn svaret.',
        subTasks: [
          {
            label: 'a',
            task: 'Antall liter bensin og total pris ved pumpen.',
            solution:
              'Proporsjonale. $P = k \\cdot L$ der $k$ er literprisen. Dobbelt så mye bensin koster dobbelt så mye.',
            answer: 'Proporsjonale',
            multipleChoiceOptions: [
              'Proporsjonale',
              'Omvendt proporsjonale',
              'Ingen av delene',
              'Lineære, men ikke proporsjonale',
            ],
          },
          {
            label: 'b',
            task: 'Antall gjester og pris per person når totalprisen for en utleie er fast (2000 kr).',
            solution:
              'Omvendt proporsjonale. $P = \\frac{2000}{n}$. Dobbelt så mange gjester gir halv pris per person.',
            answer: 'Omvendt proporsjonale',
            multipleChoiceOptions: [
              'Omvendt proporsjonale',
              'Proporsjonale',
              'Ingen av delene',
              'Lineære',
            ],
          },
          {
            label: 'c',
            task: 'Alder og høyde hos et menneske.',
            solution:
              'Ingen av delene. Høyde øker med alder i barne- og ungdomsår, men stopper opp ved ca. 18-20 år. Det er ikke et fast forhold mellom alder og høyde.',
            answer: 'Ingen av delene',
            multipleChoiceOptions: [
              'Ingen av delene',
              'Proporsjonale',
              'Omvendt proporsjonale',
              'Lineære',
            ],
          },
        ],
        solution:
          'a) Proporsjonale  b) Omvendt proporsjonale  c) Ingen av delene',
        hints: [
          'Tenk: er forholdet $y/x$ konstant? Er produktet $x \\cdot y$ konstant? Eller ingen av delene?',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ---- Block 18: Oppsummering ----
    {
      id: '1p-2-6-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Et **forhold** $a : b$ beskriver den relative størrelsen mellom to mengder
- **Proporsjonale** størrelser: $y = kx$ (rett linje gjennom origo)
- **Omvendt proporsjonale** størrelser: $y = k/x$ (hyperbel)
- **Kryssregning**: fra $\\frac{a}{b} = \\frac{c}{d}$ får vi $a \\cdot d = b \\cdot c$
- Praktiske bruksområder: skala, valuta, oppskrifter, fart og tid`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const CHAPTERS_1P_POTENSER = [
  CHAPTER_1P_2_4,
  CHAPTER_1P_2_5,
  CHAPTER_1P_2_6,
];
