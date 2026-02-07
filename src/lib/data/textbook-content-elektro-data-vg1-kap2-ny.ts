/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Kapittel 2: Nye delkapitler
 *
 * Dekker: 2.3, 2.4, 2.6, 2.7
 * Temaer: Boolsk algebra, kombinatorisk logikk, tellere/registre, AD/DA-omforming
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.3: Boolsk algebra
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_2_3: TextbookChapter = {
  id: 'elektro-data-vg1-2-3',
  courseId: 'elektro-data-vg1',
  chapterNumber: '2.3',
  title: 'Boolsk algebra',
  description: 'Boolske uttrykk og operatorer (AND, OR, NOT), De Morgans lover og forenkling av logiske uttrykk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke boolsk algebra til å forenkle logiske uttrykk',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-2-3-intro',
      type: 'text',
      content: `## Boolsk algebra

Boolsk algebra er et matematisk system som bare bruker to verdier: **1** (sant/høy) og **0** (usant/lav). Det er oppkalt etter den engelske matematikeren George Boole (1815–1864), som utviklet reglene for logisk tenkning i matematisk form.

I digital elektronikk er boolsk algebra helt grunnleggende. Alle digitale kretser – fra en enkel lysbryter til en avansert prosessor – bygger på boolske operasjoner. Når vi designer digitale kretser, bruker vi boolsk algebra til å:
- Beskrive hva kretsen skal gjøre
- Forenkle uttrykk for å bruke færre komponenter
- Verifisere at kretsen fungerer som ønsket

I dette kapittelet skal du lære:
- De tre grunnleggende boolske operatorene: AND, OR og NOT
- Hvordan du setter opp sannhetsttabeller
- De Morgans lover for omskriving av uttrykk
- Forenkling av logiske uttrykk med boolske regler`,
    },

    // BLOKK 1: Grunnleggende operatorer
    {
      id: 'elektro-data-vg1-2-3-def-1',
      type: 'definition',
      title: 'Boolske grunnoperatorer',
      content: `De tre grunnleggende boolske operatorene er:

**AND (OG) – skrevet som · eller ∧**
Utgangen er 1 bare når **alle** inngangene er 1.

| A | B | A · B |
|---|---|-------|
| 0 | 0 |   0   |
| 0 | 1 |   0   |
| 1 | 0 |   0   |
| 1 | 1 |   1   |

**OR (ELLER) – skrevet som + eller ∨**
Utgangen er 1 når **minst én** inngang er 1.

| A | B | A + B |
|---|---|-------|
| 0 | 0 |   0   |
| 0 | 1 |   1   |
| 1 | 0 |   1   |
| 1 | 1 |   1   |

**NOT (IKKE) – skrevet som Ā eller ¬A**
Inverterer verdien: 0 blir 1, og 1 blir 0.

| A | Ā |
|---|---|
| 0 | 1 |
| 1 | 0 |`,
    },
    {
      id: 'elektro-data-vg1-2-3-example-1',
      type: 'example',
      title: 'Sannhetstabell for et sammensatt uttrykk',
      problem: 'Sett opp sannhetstabellen for uttrykket Y = A · B + Ā · C, der A, B og C er boolske variabler.',
      solution: `Vi beregner steg for steg for alle mulige kombinasjoner av A, B og C:

| A | B | C | Ā | A·B | Ā·C | Y = A·B + Ā·C |
|---|---|---|---|-----|-----|----------------|
| 0 | 0 | 0 | 1 |  0  |  0  |       0        |
| 0 | 0 | 1 | 1 |  0  |  1  |       1        |
| 0 | 1 | 0 | 1 |  0  |  0  |       0        |
| 0 | 1 | 1 | 1 |  0  |  1  |       1        |
| 1 | 0 | 0 | 0 |  0  |  0  |       0        |
| 1 | 0 | 1 | 0 |  0  |  0  |       0        |
| 1 | 1 | 0 | 0 |  1  |  0  |       1        |
| 1 | 1 | 1 | 0 |  1  |  0  |       1        |

Uttrykket Y er 1 i fire tilfeller: når A=0 og C=1, eller når A=1 og B=1.`,
    },
    {
      id: 'elektro-data-vg1-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er resultatet av det boolske uttrykket 1 · 0 + 1?',
        options: [
          { id: 'a', text: '0', correct: false },
          { id: 'b', text: '1', correct: true },
          { id: 'c', text: '10', correct: false },
          { id: 'd', text: 'Uttrykket er ugyldig', correct: false },
        ],
        solution: 'Vi regner ut steg for steg: Først AND: 1 · 0 = 0. Deretter OR: 0 + 1 = 1. AND har høyere prioritet enn OR, akkurat som ganging har høyere prioritet enn addisjon i vanlig matematikk.',
      },
    },

    // BLOKK 2: Boolske regler
    {
      id: 'elektro-data-vg1-2-3-def-2',
      type: 'definition',
      title: 'Grunnleggende boolske regler',
      content: `Boolsk algebra har flere nyttige regler for forenkling:

**Identitetsregler:**
- A + 0 = A
- A · 1 = A

**Nullregler:**
- A + 1 = 1
- A · 0 = 0

**Idempotensregler:**
- A + A = A
- A · A = A

**Komplementregler:**
- A + Ā = 1
- A · Ā = 0

**Absorpsjonsregler:**
- A + A · B = A
- A · (A + B) = A

**Distributive regler:**
- A · (B + C) = A · B + A · C
- A + B · C = (A + B) · (A + C)

Disse reglene kan brukes til å forenkle komplekse uttrykk, slik at vi trenger færre logiske porter i kretsen.`,
    },
    {
      id: 'elektro-data-vg1-2-3-example-2',
      type: 'example',
      title: 'Forenkling med boolske regler',
      problem: 'Forenkle uttrykket Y = A · B + A · B̄ ved hjelp av boolske regler.',
      solution: `**Steg 1:** Vi ser at A er felles faktor. Vi faktoriserer (distributiv lov):
Y = A · (B + B̄)

**Steg 2:** Vi bruker komplementregelen B + B̄ = 1:
Y = A · 1

**Steg 3:** Vi bruker identitetsregelen A · 1 = A:
Y = A

Uttrykket A · B + A · B̄ kan altså forenkles til bare **A**. Det betyr at kretsen bare trenger å sjekke verdien av A – variabelen B spiller ingen rolle.`,
    },
    {
      id: 'elektro-data-vg1-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forenkle uttrykket Y = A · B · C + A · B · C̄ ved hjelp av boolske regler. Vis hvert steg og oppgi hvilken regel du bruker.',
        hints: ['Se etter felles faktorer som kan faktoriseres ut.', 'Husk komplementregelen: X + X̄ = 1.'],
        solution: 'Steg 1: Faktoriser ut A · B (distributiv lov): Y = A · B · (C + C̄). Steg 2: Bruk komplementregelen C + C̄ = 1: Y = A · B · 1. Steg 3: Bruk identitetsregelen A · B · 1 = A · B: Y = A · B. Uttrykket forenkles til Y = A · B.',
      },
    },

    // BLOKK 3: De Morgans lover
    {
      id: 'elektro-data-vg1-2-3-def-3',
      type: 'definition',
      title: 'De Morgans lover',
      content: `**De Morgans lover** er to viktige regler som beskriver sammenhengen mellom AND, OR og NOT:

**Første lov:**
$\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$

«NOT av (A AND B) er det samme som (NOT A) OR (NOT B)»

**Andre lov:**
$\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$

«NOT av (A OR B) er det samme som (NOT A) AND (NOT B)»

**Praktisk huskeregel:** Når du «bryter streken» over et uttrykk:
- AND (·) blir til OR (+)
- OR (+) blir til AND (·)
- Hver variabel får sin egen strek (inverteres)

De Morgans lover er svært nyttige når vi skal:
- Konvertere mellom NAND/NOR-porter og AND/OR/NOT
- Forenkle uttrykk med inverterte sammensatte uttrykk
- Verifisere at to kretser er likeverdige`,
    },
    {
      id: 'elektro-data-vg1-2-3-example-3',
      type: 'example',
      title: 'Bruk av De Morgans lov',
      problem: 'Bruk De Morgans lov til å skrive om uttrykket Y = $\\overline{A \\cdot B \\cdot C}$ til et uttrykk med bare OR og NOT.',
      solution: `Vi bruker De Morgans første lov utvidet til tre variabler:

$\\overline{A \\cdot B \\cdot C} = \\bar{A} + \\bar{B} + \\bar{C}$

**Forklaring:** Vi «bryter streken» – AND blir til OR, og hver variabel inverteres.

**Verifisering med sannhetstabell (for to variabler som eksempel):**

| A | B | A·B | $\\overline{A \\cdot B}$ | Ā | B̄ | Ā + B̄ |
|---|---|-----|---------|---|---|-------|
| 0 | 0 |  0  |    1    | 1 | 1 |   1   |
| 0 | 1 |  0  |    1    | 1 | 0 |   1   |
| 1 | 0 |  0  |    1    | 0 | 1 |   1   |
| 1 | 1 |  1  |    0    | 0 | 0 |   0   |

Kolonnene for $\\overline{A \\cdot B}$ og Ā + B̄ er identiske, noe som bekrefter De Morgans lov.`,
    },
    {
      id: 'elektro-data-vg1-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er $\\overline{A + B}$ ifølge De Morgans lov?',
        options: [
          { id: 'a', text: 'Ā + B̄', correct: false },
          { id: 'b', text: 'Ā · B̄', correct: true },
          { id: 'c', text: 'A · B', correct: false },
          { id: 'd', text: '$\\overline{A} + B$', correct: false },
        ],
        solution: 'Ifølge De Morgans andre lov: NOT av (A OR B) = (NOT A) AND (NOT B), altså $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$. Streken brytes: OR (+) blir til AND (·), og hver variabel inverteres.',
      },
    },
    {
      id: 'elektro-data-vg1-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forenkle uttrykket Y = $\\overline{\\overline{A} \\cdot \\overline{B}}$ ved hjelp av De Morgans lov. Vis alle steg.',
        hints: ['Bruk De Morgans lov «innenfra og ut».', 'Husk at dobbel inversjon opphever seg: $\\overline{\\overline{A}} = A$.'],
        solution: 'Steg 1: Bruk De Morgans lov på det ytre uttrykket: $\\overline{\\overline{A} \\cdot \\overline{B}} = \\overline{\\overline{A}} + \\overline{\\overline{B}}$. Steg 2: Dobbel inversjon opphever seg: $\\overline{\\overline{A}} = A$ og $\\overline{\\overline{B}} = B$. Steg 3: Dermed er Y = A + B. Uttrykket forenkles til Y = A + B.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om boolsk algebra – det matematiske fundamentet for alle digitale kretser:

- **AND (·):** Utgangen er 1 bare når alle innganger er 1
- **OR (+):** Utgangen er 1 når minst én inngang er 1
- **NOT (Ā):** Inverterer verdien – 0 blir 1 og 1 blir 0
- **Boolske regler** (identitet, komplement, absorpsjon, distribusjon) brukes til å forenkle uttrykk
- **De Morgans lover** lar oss konvertere mellom AND/OR med inversjon:
  - $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$
  - $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Boolsk algebra | Matematisk system med bare to verdier: 0 og 1 |
| AND-operator | Gir 1 bare når alle innganger er 1 |
| OR-operator | Gir 1 når minst én inngang er 1 |
| NOT-operator | Inverterer verdien |
| Sannhetstabell | Tabell som viser alle mulige inn/ut-kombinasjoner |
| De Morgans lover | Regler for å omskrive inverterte AND/OR-uttrykk |`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle uttrykket Y = A · B + Ā · B + A · B̄ ved hjelp av boolske regler. Vis hvert steg og oppgi hvilke regler du bruker. Sett opp sannhetstabell for å verifisere resultatet.',
        hints: ['Start med å gruppere de to første leddene.', 'Se etter komplementregelen.'],
        solution: 'Steg 1: Grupper de to første leddene: Y = (A · B + Ā · B) + A · B̄. Steg 2: Faktoriser B (distributiv lov): Y = B · (A + Ā) + A · B̄. Steg 3: Komplementregelen A + Ā = 1: Y = B · 1 + A · B̄ = B + A · B̄. Steg 4: Distributiv lov: Y = B + A · B̄ = (B + A) · (B + B̄) = (A + B) · 1 = A + B. Svar: Y = A + B. Verifikasjon: Y er 0 bare når A=0 og B=0, ellers er Y=1 – dette er OR-funksjonen.',
      },
    },
    {
      id: 'elektro-data-vg1-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et alarmsystem skal aktiveres (Y=1) dersom vinduet er åpent (A=1) OG det er natt (B=1), ELLER dersom døren er åpen (C=1). Skriv det boolske uttrykket for Y. Sett opp sannhetstabellen og bruk De Morgans lov til å finne et uttrykk for når alarmen IKKE er aktiv ($\\overline{Y}$).',
        solution: 'Uttrykket er Y = A · B + C. Sannhetstabell (8 rader for 3 variabler): Y=0 bare når A·B=0 OG C=0, dvs. radene (0,0,0), (0,1,0), (1,0,0). For $\\overline{Y}$: $\\overline{Y} = \\overline{A \\cdot B + C}$. Med De Morgans lov: $\\overline{Y} = \\overline{A \\cdot B} \\cdot \\overline{C}$. Videre: $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$. Svar: $\\overline{Y} = (\\bar{A} + \\bar{B}) \\cdot \\bar{C}$. Alarmen er IKKE aktiv når døren er lukket OG (vinduet er lukket ELLER det er dag).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Boolsk algebra', definition: 'Matematisk system med to verdier (0 og 1) og logiske operatorer.' },
    { term: 'AND (·)', definition: 'Logisk OG-operator. Utgangen er 1 bare når alle innganger er 1.' },
    { term: 'OR (+)', definition: 'Logisk ELLER-operator. Utgangen er 1 når minst én inngang er 1.' },
    { term: 'NOT (Ā)', definition: 'Logisk IKKE-operator. Inverterer verdien.' },
    { term: 'Sannhetstabell', definition: 'Tabell som viser utgangsverdier for alle kombinasjoner av inngangsverdier.' },
    { term: 'De Morgans lover', definition: 'Regler for omskriving: NOT(A·B) = Ā+B̄ og NOT(A+B) = Ā·B̄.' },
  ],
};

// ============================================================================
// Kapittel 2.4: Kombinatorisk logikk
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_2_4: TextbookChapter = {
  id: 'elektro-data-vg1-2-4',
  courseId: 'elektro-data-vg1',
  chapterNumber: '2.4',
  title: 'Kombinatorisk logikk',
  description: 'Multipleksere, dekodere, halvaddere og heladdere – design av kombinatoriske kretser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'designe enkle kombinatoriske kretser',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-2-4-intro',
      type: 'text',
      content: `## Kombinatorisk logikk

I **kombinatoriske kretser** bestemmes utgangen utelukkende av de nåværende inngangsverdiene. Kretsen har ingen hukommelse – den «husker» ikke hva som skjedde tidligere. Dette skiller kombinatoriske kretser fra sekvensiell logikk (som vi ser på i senere kapitler), der utgangen også avhenger av tidligere tilstander.

Kombinatoriske kretser er byggesteinene i alle digitale systemer. Fra enkle velgere (multipleksere) til aritmetiske enheter – alle er bygd opp av logiske porter i ulike kombinasjoner.

I dette kapittelet skal du lære:
- Hva multipleksere (MUX) og dekodere er
- Hvordan halvaddere og heladdere fungerer
- Å designe enkle kombinatoriske kretser fra en sannhetstabell`,
    },

    // BLOKK 1: Multipleksere og dekodere
    {
      id: 'elektro-data-vg1-2-4-def-1',
      type: 'definition',
      title: 'Multiplekser (MUX)',
      content: `En **multiplekser** (MUX) er en digital velger – den velger én av flere innganger og sender den videre til utgangen.

**2-til-1 MUX:**
- Har to datainnganger (D₀ og D₁), én velgerinngang (S) og én utgang (Y)
- Når S = 0, sendes D₀ til utgangen: Y = D₀
- Når S = 1, sendes D₁ til utgangen: Y = D₁

**Boolsk uttrykk for 2-til-1 MUX:**
Y = S̄ · D₀ + S · D₁

**4-til-1 MUX:**
- Har fire datainnganger (D₀–D₃), to velgerinnganger (S₁, S₀) og én utgang
- Velgerinngangene danner et 2-bits binærtall som velger inngang

| S₁ | S₀ | Y |
|----|-----|---|
|  0 |  0  | D₀ |
|  0 |  1  | D₁ |
|  1 |  0  | D₂ |
|  1 |  1  | D₃ |

**Bruksområder:** Dataseleksjon, rutingsystemer, implementering av logiske funksjoner.`,
    },
    {
      id: 'elektro-data-vg1-2-4-def-2',
      type: 'definition',
      title: 'Dekoder',
      content: `En **dekoder** konverterer et binært inngangssignal til ett av flere utgangssignaler. Bare én utgang er aktiv (høy) om gangen.

**2-til-4 dekoder:**
- Har to innganger (A₁, A₀) og fire utganger (Y₀–Y₃)
- Inngangene tolkes som et 2-bits binærtall, og den tilsvarende utgangen aktiveres

| A₁ | A₀ | Y₀ | Y₁ | Y₂ | Y₃ |
|----|----|----|----|----|----|
|  0 |  0 |  1 |  0 |  0 |  0 |
|  0 |  1 |  0 |  1 |  0 |  0 |
|  1 |  0 |  0 |  0 |  1 |  0 |
|  1 |  1 |  0 |  0 |  0 |  1 |

**Boolske uttrykk:**
- Y₀ = Ā₁ · Ā₀
- Y₁ = Ā₁ · A₀
- Y₂ = A₁ · Ā₀
- Y₃ = A₁ · A₀

**Bruksområder:** Adressedekodering i hukommelseskretser, sjusegment-display, valg av enhet i datasystemer.`,
    },
    {
      id: 'elektro-data-vg1-2-4-example-1',
      type: 'example',
      title: 'Velge mellom to sensorer med MUX',
      problem: 'Et system har to temperatursensorer (Sensor A og Sensor B). En bryter S bestemmer hvilken sensor som leses. Beskriv hvordan en 2-til-1 MUX kan brukes, og skriv det boolske uttrykket.',
      solution: `Vi kobler:
- Sensor A til inngang D₀
- Sensor B til inngang D₁
- Bryteren til velgerinngang S

**Boolsk uttrykk:**
Y = S̄ · A + S · B

**Funksjon:**
- Bryter av (S = 0): Y = 1 · A + 0 · B = A → Sensor A leses
- Bryter på (S = 1): Y = 0 · A + 1 · B = B → Sensor B leses

Multiplekseren fungerer som en elektronisk bryter som velger mellom de to sensorene basert på styringsinngang S.`,
    },
    {
      id: 'elektro-data-vg1-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En 4-til-1 MUX har velgerinngangene S₁ = 1 og S₀ = 0. Hvilken datainngang kobles til utgangen?',
        options: [
          { id: 'a', text: 'D₀', correct: false },
          { id: 'b', text: 'D₁', correct: false },
          { id: 'c', text: 'D₂', correct: true },
          { id: 'd', text: 'D₃', correct: false },
        ],
        solution: 'Velgerinngangene S₁S₀ = 10 i binær er 2 i desimal. Dermed velges inngang D₂. Tabellen for en 4-til-1 MUX: 00→D₀, 01→D₁, 10→D₂, 11→D₃.',
      },
    },

    // BLOKK 2: Halvadder og heladder
    {
      id: 'elektro-data-vg1-2-4-def-3',
      type: 'definition',
      title: 'Halvadder (Half Adder)',
      content: `En **halvadder** legger sammen to enkeltbiter og gir et sum-bit (S) og et mente-bit (C, carry).

**Innganger:** A og B (én bit hver)
**Utganger:** S (sum) og C (mente/carry)

**Sannhetstabell:**

| A | B | S (sum) | C (mente) |
|---|---|---------|-----------|
| 0 | 0 |    0    |     0     |
| 0 | 1 |    1    |     0     |
| 1 | 0 |    1    |     0     |
| 1 | 1 |    0    |     1     |

**Boolske uttrykk:**
- S = A ⊕ B (XOR – eksklusiv ELLER)
- C = A · B (AND)

Halvadderen kalles «halv» fordi den ikke har inngang for mente fra et tidligere siffer.`,
    },
    {
      id: 'elektro-data-vg1-2-4-def-4',
      type: 'definition',
      title: 'Heladder (Full Adder)',
      content: `En **heladder** legger sammen to biter pluss en innkommende mente (carry in). Den er nødvendig for å legge sammen flersifrede binærtall.

**Innganger:** A, B og Cᵢₙ (carry in)
**Utganger:** S (sum) og Cᵤₜ (carry out)

**Sannhetstabell:**

| A | B | Cᵢₙ | S (sum) | Cᵤₜ (carry out) |
|---|---|------|---------|------------------|
| 0 | 0 |  0   |    0    |        0         |
| 0 | 0 |  1   |    1    |        0         |
| 0 | 1 |  0   |    1    |        0         |
| 0 | 1 |  1   |    0    |        1         |
| 1 | 0 |  0   |    1    |        0         |
| 1 | 0 |  1   |    0    |        1         |
| 1 | 1 |  0   |    0    |        1         |
| 1 | 1 |  1   |    1    |        1         |

**Boolske uttrykk:**
- S = A ⊕ B ⊕ Cᵢₙ
- Cᵤₜ = A · B + Cᵢₙ · (A ⊕ B)

En heladder kan bygges av to halvaddere og en OR-port.`,
    },
    {
      id: 'elektro-data-vg1-2-4-example-2',
      type: 'example',
      title: 'Addisjon med halvadder og heladder',
      problem: 'Bruk halvaddere og heladdere til å legge sammen de 2-bits binærtallene A₁A₀ = 11 og B₁B₀ = 01. Vis hvordan bitene behandles steg for steg.',
      solution: `Vi legger sammen 11₂ + 01₂ (3 + 1 = 4 i desimal).

**Steg 1 – Minst signifikante bit (posisjon 0): Halvadder**
- A₀ = 1, B₀ = 1
- S₀ = 1 ⊕ 1 = 0
- C₀ = 1 · 1 = 1 (mente til neste posisjon)

**Steg 2 – Posisjon 1: Heladder**
- A₁ = 1, B₁ = 0, Cᵢₙ = 1 (fra forrige steg)
- S₁ = 1 ⊕ 0 ⊕ 1 = 0
- Cᵤₜ = 1 · 0 + 1 · (1 ⊕ 0) = 0 + 1 · 1 = 1

**Resultat:** Cᵤₜ S₁ S₀ = 1 0 0 = 100₂ = **4** i desimal. ✓`,
    },
    {
      id: 'elektro-data-vg1-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'En halvadder har inngangene A = 1 og B = 0. Beregn sum (S) og mente (C). Bruk deretter resultatet i en heladder der den andre inngangen er B = 1 og carry in = 0.',
        hints: ['Halvadder: S = A ⊕ B, C = A · B.', 'Heladder: S = A ⊕ B ⊕ Cᵢₙ, Cᵤₜ = A·B + Cᵢₙ·(A⊕B).'],
        solution: 'Halvadder: A=1, B=0. S = 1 ⊕ 0 = 1, C = 1 · 0 = 0. Heladder: A=1 (fra halvadderens S), B=1, Cᵢₙ=0. S = 1 ⊕ 1 ⊕ 0 = 0, Cᵤₜ = 1·1 + 0·(1⊕1) = 1 + 0 = 1. Resultat fra heladderet: S=0, Cᵤₜ=1.',
      },
    },
    {
      id: 'elektro-data-vg1-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er forskjellen mellom en halvadder og en heladder?',
        options: [
          { id: 'a', text: 'En halvadder har dobbelt så mange porter som en heladder', correct: false },
          { id: 'b', text: 'En heladder kan ta imot en innkommende mente (carry in), det kan ikke halvadderen', correct: true },
          { id: 'c', text: 'En halvadder bruker bare AND-porter, en heladder bruker bare OR-porter', correct: false },
          { id: 'd', text: 'En heladder kan legge sammen 4-bits tall, en halvadder bare 2-bits tall', correct: false },
        ],
        solution: 'Den viktigste forskjellen er at heladdderen har en ekstra inngang for carry in (Cᵢₙ). Dette gjør det mulig å kjede flere heladdere sammen for å legge sammen flersifrede binærtall. Halvadderen brukes kun for den minst signifikante biten (posisjon 0) der det ikke er noen innkommende mente.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om viktige kombinatoriske kretser:

- **Multiplekser (MUX):** En digital velger som sender én av flere innganger til utgangen, styrt av velgerinnganger
- **Dekoder:** Konverterer et binærtall til aktivering av én bestemt utgang
- **Halvadder:** Legger sammen to enkeltbiter → gir sum og mente
- **Heladder:** Legger sammen to biter pluss innkommende mente → kan kjedes sammen for flersifrede tall

### Viktige uttrykk
| Krets | Uttrykk |
|-------|---------|
| 2-til-1 MUX | Y = S̄·D₀ + S·D₁ |
| Halvadder sum | S = A ⊕ B |
| Halvadder mente | C = A · B |
| Heladder sum | S = A ⊕ B ⊕ Cᵢₙ |
| Heladder mente | Cᵤₜ = A·B + Cᵢₙ·(A⊕B) |`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk én halvadder og én heladder til å legge sammen de 2-bits binærtallene 10 og 11. Vis beregningen for hver adder steg for steg, og oppgi det endelige svaret i binært og desimalt.',
        solution: 'Vi legger sammen 10₂ (2) + 11₂ (3). Steg 1 – Halvadder (posisjon 0): A₀=0, B₀=1. S₀ = 0⊕1 = 1, C₀ = 0·1 = 0. Steg 2 – Heladder (posisjon 1): A₁=1, B₁=1, Cᵢₙ=0. S₁ = 1⊕1⊕0 = 0, Cᵤₜ = 1·1 + 0·(1⊕1) = 1. Resultat: Cᵤₜ S₁ S₀ = 101₂ = 5 i desimal. Kontroll: 2 + 3 = 5. ✓',
      },
    },
    {
      id: 'elektro-data-vg1-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal designe en krets som styrer et trafikklys. Kretsen har to innganger (S₁, S₀) som koder for tilstanden: 00=rødt, 01=rødt+gult, 10=grønt, 11=gult. Design en dekoder med tre utganger (R, G, Gu) for rød, grønn og gul lampe. Sett opp sannhetstabellen og skriv de boolske uttrykkene for hver utgang.',
        hints: ['Start med å lage sannhetstabellen for alle fire tilstander.', 'Husk at rød lyser i to tilstander (00 og 01).'],
        solution: 'Sannhetstabell: S₁S₀=00: R=1,G=0,Gu=0. S₁S₀=01: R=1,G=0,Gu=1. S₁S₀=10: R=0,G=1,Gu=0. S₁S₀=11: R=0,G=0,Gu=1. Boolske uttrykk: R = S̄₁ (rød lyser når S₁=0). G = S₁·S̄₀ (grønn lyser kun i tilstand 10). Gu = S₀ (gul lyser når S₀=1). Kretsen kan bygges med én NOT-port (for S̄₁), én AND-port (for G) og direkte kobling (for Gu).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kombinatorisk krets', definition: 'Digital krets der utgangen kun avhenger av nåværende inngangsverdier.' },
    { term: 'Multiplekser (MUX)', definition: 'Digital velger som sender én av flere innganger til utgangen.' },
    { term: 'Dekoder', definition: 'Krets som konverterer et binærtall til aktivering av én bestemt utgang.' },
    { term: 'Halvadder', definition: 'Krets som legger sammen to enkeltbiter og gir sum og mente.' },
    { term: 'Heladder', definition: 'Krets som legger sammen to biter pluss innkommende mente.' },
    { term: 'XOR (⊕)', definition: 'Eksklusiv ELLER – gir 1 når inngangene er forskjellige.' },
  ],
};

// ============================================================================
// Kapittel 2.6: Tellere og registre
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_2_6: TextbookChapter = {
  id: 'elektro-data-vg1-2-6',
  courseId: 'elektro-data-vg1',
  chapterNumber: '2.6',
  title: 'Tellere og registre',
  description: 'Binære tellere (asynkrone og synkrone), skiftregistre og anvendelser i digitale systemer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare oppbygning og bruk av tellere og registre',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-2-6-intro',
      type: 'text',
      content: `## Tellere og registre

I forrige kapitler har vi sett på kombinatorisk logikk, der utgangen bare avhenger av nåværende innganger. Nå skal vi se på **sekvensiell logikk** – kretser som har **hukommelse**. De kan «huske» hva som skjedde ved forrige klokkepuls, og dermed telle hendelser eller lagre data.

**Tellere** teller opp eller ned i et bestemt tallsystem, typisk binært. De brukes overalt: i digitale klokker, frekvenstenkere, adressetellere i datamaskiner og i styresystemer.

**Registre** er grupper av vipper (flip-flops) som lagrer flere biter samtidig. Skiftregistre kan i tillegg flytte bitene fra posisjon til posisjon.

I dette kapittelet skal du lære:
- Forskjellen på asynkrone og synkrone tellere
- Hvordan binære tellere teller fra 0 til et maksverdi
- Hva skiftregistre er og hvordan de brukes
- Praktiske anvendelser av tellere og registre`,
    },

    // BLOKK 1: Binære tellere
    {
      id: 'elektro-data-vg1-2-6-def-1',
      type: 'definition',
      title: 'Binær teller',
      content: `En **binær teller** er en sekvensiell krets som teller klokkepulser i binært tallsystem.

**En n-bits teller:**
- Teller fra 0 til 2ⁿ − 1
- En 3-bits teller teller 0, 1, 2, 3, 4, 5, 6, 7 (0 til 7) og begynner på nytt
- En 4-bits teller teller 0 til 15

**Asynkron teller (ripple counter):**
- Klokkesignalet kobles bare til den første vippen
- Hver vippe trigger den neste → signalet «bølger» gjennom kretsen
- Enkel konstruksjon, men langsom pga. akkumulert forsinkelse
- Utgangene endrer seg ikke samtidig (risiko for feillesing)

**Synkron teller:**
- Alle vipper har **samme** klokkesignal
- Ekstra logikk bestemmer når hver vippe skal endre tilstand
- Raskere og mer pålitelig enn asynkrone tellere
- Utgangene endrer seg samtidig
- Brukes i de fleste praktiske systemer`,
    },
    {
      id: 'elektro-data-vg1-2-6-example-1',
      type: 'example',
      title: 'Telling med en 3-bits binær teller',
      problem: 'En 3-bits oppover-teller starter på 000. Vis tellesekvensen for de åtte første klokkepulsene. Oppgi hvert trinn i binært og desimalt.',
      solution: `En 3-bits teller har utgangene Q₂ Q₁ Q₀ og teller fra 000 til 111:

| Klokkepuls | Q₂ | Q₁ | Q₀ | Desimal |
|------------|----|----|-----|---------|
|     0      |  0 |  0 |  0  |    0    |
|     1      |  0 |  0 |  1  |    1    |
|     2      |  0 |  1 |  0  |    2    |
|     3      |  0 |  1 |  1  |    3    |
|     4      |  1 |  0 |  0  |    4    |
|     5      |  1 |  0 |  1  |    5    |
|     6      |  1 |  1 |  0  |    6    |
|     7      |  1 |  1 |  1  |    7    |

Etter klokkepuls 7 begynner telleren på nytt (wraps around) til 000. Legg merke til mønsteret: Q₀ endres ved hver puls, Q₁ ved annenhver, Q₂ ved hver fjerde.`,
    },
    {
      id: 'elektro-data-vg1-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange ulike tilstander kan en 4-bits binær teller ha?',
        options: [
          { id: 'a', text: '4', correct: false },
          { id: 'b', text: '8', correct: false },
          { id: 'c', text: '16', correct: true },
          { id: 'd', text: '32', correct: false },
        ],
        solution: 'En n-bits teller har 2ⁿ tilstander. For n = 4: 2⁴ = 16 tilstander, fra 0000 (0) til 1111 (15).',
      },
    },
    {
      id: 'elektro-data-vg1-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar forskjellen mellom en asynkron og en synkron teller. Nevn én fordel og én ulempe med hver type.',
        hints: ['Tenk på hvordan klokkesignalet distribueres til vippene.', 'Vurder hastighet og pålitelighet.'],
        solution: 'Asynkron teller: Klokkesignalet går kun til første vippe, de andre trigges av foregående vippe. Fordel: Enkel å bygge (få porter). Ulempe: Langsom pga. akkumulert forsinkelse, og utgangene endres ikke samtidig (glitch-risiko). Synkron teller: Alle vipper deler samme klokkesignal. Fordel: Rask og pålitelig – alle utganger endres samtidig. Ulempe: Mer kompleks design (trenger ekstra logikk for å styre vippene).',
      },
    },

    // BLOKK 2: Skiftregistre
    {
      id: 'elektro-data-vg1-2-6-def-2',
      type: 'definition',
      title: 'Skiftregister',
      content: `Et **skiftregister** er en rekke med vipper (flip-flops) der data flyttes én posisjon for hver klokkepuls.

**Typer skiftregistre:**
- **SISO (Serial In, Serial Out):** Data mates inn serielt og leses ut serielt. Brukes som forsinkelseslinje.
- **SIPO (Serial In, Parallel Out):** Data mates inn serielt, men alle biter kan leses ut samtidig. Brukes for seriell-til-parallell konvertering.
- **PISO (Parallel In, Serial Out):** Alle biter lastes inn samtidig og skyves ut serielt. Brukes for parallell-til-seriell konvertering.
- **PIPO (Parallel In, Parallel Out):** Data lastes inn og leses ut parallelt. Fungerer som et vanlig lagringsregister.

**Bruksområder:**
- Seriell datakommunikasjon (UART, SPI)
- Forsinkelseslinjer i signalbehandling
- Datakonvertering mellom seriell og parallell overføring
- LED-styring (skifteregister 74HC595)`,
    },
    {
      id: 'elektro-data-vg1-2-6-example-2',
      type: 'example',
      title: 'Data gjennom et 4-bits SIPO-skiftregister',
      problem: 'Et 4-bits SIPO-skiftregister starter med innhold 0000. Databitene 1, 0, 1, 1 mates inn serielt (1 først). Vis tilstanden etter hver klokkepuls.',
      solution: `Data skyves inn fra venstre (MSB-siden), og alt flyttes ett steg til høyre for hver klokkepuls:

| Klokkepuls | Inn | Q₃ | Q₂ | Q₁ | Q₀ |
|------------|-----|----|----|----|----|
| Start      |  —  |  0 |  0 |  0 |  0 |
|     1      |  1  |  1 |  0 |  0 |  0 |
|     2      |  0  |  0 |  1 |  0 |  0 |
|     3      |  1  |  1 |  0 |  1 |  0 |
|     4      |  1  |  1 |  1 |  0 |  1 |

Etter 4 klokkepulser inneholder registeret 1101₂. Alle fire bitene kan nå leses ut parallelt. Slik konverterer SIPO-registeret seriell data til parallell.`,
    },
    {
      id: 'elektro-data-vg1-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken type skiftregister brukes for å konvertere parallelle data til seriell overføring?',
        options: [
          { id: 'a', text: 'SISO (Serial In, Serial Out)', correct: false },
          { id: 'b', text: 'SIPO (Serial In, Parallel Out)', correct: false },
          { id: 'c', text: 'PISO (Parallel In, Serial Out)', correct: true },
          { id: 'd', text: 'PIPO (Parallel In, Parallel Out)', correct: false },
        ],
        solution: 'PISO (Parallel In, Serial Out) laster inn alle biter samtidig (parallelt) og skyver dem ut én etter én (serielt). Dette brukes for eksempel når en mikrokontroller skal sende et byte med data over en seriell kommunikasjonslinje.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-2-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om tellere og registre – viktige byggeblokker i sekvensiell logikk:

- **Binære tellere** teller klokkepulser i binært: en n-bits teller teller fra 0 til 2ⁿ − 1
- **Asynkrone tellere** er enkle men har akkumulert forsinkelse
- **Synkrone tellere** er raskere og mer pålitelige – alle vipper klokkes samtidig
- **Skiftregistre** flytter data én posisjon per klokkepuls
- De fire typene: SISO, SIPO, PISO og PIPO – brukes til datalagring og konvertering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Binær teller | Sekvensiell krets som teller i binært tallsystem |
| Asynkron teller | Teller der klokkesignalet «bølger» gjennom vippene |
| Synkron teller | Teller der alle vipper har felles klokkesignal |
| Skiftregister | Rekke vipper der data flyttes én posisjon per klokke |
| Flip-flop (vippe) | Grunnleggende lagrings­element som kan lagre én bit |`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En 4-bits synkron oppover-teller teller fra 0000 til 1111. Etter tellerverdi 1001 (9) ønsker vi at telleren skal nullstilles til 0000 i stedet for å fortsette til 1010 (10). Denne modifiserte telleren kalles en dekade-teller (teller 0–9). Forklar hvordan du kan oppnå dette med ekstra logikk, og oppgi hvor mange tilstander denne telleren har.',
        hints: ['Tenk på hvilken logisk kombinasjon av utgangene som gir verdien 1010.', 'Bruk en AND-port som detekterer neste uønskede tilstand og nullstiller telleren.'],
        solution: 'Etter tilstand 1001 (9) vil neste tilstand normalt være 1010 (10). Vi kobler en AND-port til Q₃ og Q₁ (de to bitene som er 1 i 1010). Når AND-porten gir 1, sender den et nullstillingssignal (RESET) til alle vippene. Telleren springer dermed fra 9 direkte tilbake til 0. Antall tilstander: 10 (0 til 9). Denne telleren kalles BCD-teller (Binary Coded Decimal) og brukes blant annet i digitale klokker og display-drivere.',
      },
    },
    {
      id: 'elektro-data-vg1-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et 8-bits SIPO-skiftregister brukes til å styre 8 lysdioder (LEDer) i et «løpelys»-mønster. Forklar hvordan du kan koble systemet slik at bare én LED lyser om gangen, og lyset «løper» fra venstre til høyre. Hva må inn-signalet til registeret være etter at den ene 1-biten er lastet inn?',
        solution: 'Vi mater først inn én 1-bit etterfulgt av 0-biter. Starttilstand: 00000000. Etter 1. puls: 10000000 (LED 7 lyser). Etter 2. puls (inn=0): 01000000 (LED 6 lyser). Etter 3. puls (inn=0): 00100000 (LED 5 lyser). Osv. For hvert klokkesteg skyves 1-biten ett steg til høyre. Inn-signalet må være 0 etter at 1-biten er lastet inn, slik at bare én 1 er i registeret. Etter 8 pulser har 1-biten falt ut (00000000), og vi kan mate inn en ny 1 for å starte på nytt. Frekvensen på klokkesignalet bestemmer «løpehastigheten». Typisk brukes 74HC595 til dette.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Binær teller', definition: 'Sekvensiell krets som teller klokkepulser i binært. En n-bits teller har 2ⁿ tilstander.' },
    { term: 'Asynkron teller', definition: 'Teller der klokkesignalet bølger gjennom vippene sekvensielt. Enkel men langsom.' },
    { term: 'Synkron teller', definition: 'Teller der alle vipper deler samme klokkesignal. Rask og pålitelig.' },
    { term: 'Skiftregister', definition: 'Rekke med vipper som flytter data én posisjon for hver klokkepuls.' },
    { term: 'Flip-flop', definition: 'Grunnleggende minneelement som lagrer én bit. Byggeblokk for tellere og registre.' },
  ],
};

// ============================================================================
// Kapittel 2.7: AD- og DA-omforming
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_2_7: TextbookChapter = {
  id: 'elektro-data-vg1-2-7',
  courseId: 'elektro-data-vg1',
  chapterNumber: '2.7',
  title: 'AD- og DA-omforming',
  description: 'Analog-til-digital og digital-til-analog konvertering, oppløsning, samplingsfrekvens og Nyquist-teoremet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare prinsippene for analog-digital og digital-analog omforming',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-2-7-intro',
      type: 'text',
      content: `## AD- og DA-omforming

Den virkelige verden er **analog** – temperatur, lyd, lys og trykk varierer jevnt og kontinuerlig. Digitale systemer derimot jobber med **diskrete** verdier – bare 0 og 1. For at digitale systemer skal kunne måle, behandle og gjengi analoge signaler, trenger vi omformere:

- **AD-omformer (ADC):** Konverterer et analogt signal til et digitalt tall
- **DA-omformer (DAC):** Konverterer et digitalt tall tilbake til et analogt signal

Disse omformerne finnes overalt: i mikrofonen på telefonen (ADC), i høyttalerne (DAC), i temperaturmålere, medisinske instrumenter og musikkavspillere.

I dette kapittelet skal du lære:
- Hvordan AD-omforming (sampling og kvantisering) fungerer
- Hvordan DA-omforming fungerer
- Hva oppløsning betyr og hvordan den påvirker nøyaktigheten
- Samplingsfrekvens og Nyquist-teoremet`,
    },

    // BLOKK 1: AD-omforming
    {
      id: 'elektro-data-vg1-2-7-def-1',
      type: 'definition',
      title: 'AD-omforming (Analog til Digital)',
      content: `**AD-omforming** konverterer et kontinuerlig analogt signal til diskrete digitale verdier. Prosessen har to steg:

**1. Sampling (prøvetaking)**
Det analoge signalet måles med jevne tidsintervaller. Antall målinger per sekund kalles **samplingsfrekvens** (fₛ), målt i Hz (hertz).

Eksempler:
- CD-kvalitet lyd: fₛ = 44 100 Hz (44,1 kHz)
- Telefon: fₛ = 8 000 Hz
- Mikrokontroller (Arduino): typisk fₛ = 10 000 Hz

**2. Kvantisering**
Hver måling avrunder til nærmeste digitale verdi. Antall mulige verdier bestemmes av **oppløsningen** (antall bits).

- 8-bits ADC: 2⁸ = 256 nivåer
- 10-bits ADC: 2¹⁰ = 1024 nivåer
- 12-bits ADC: 2¹² = 4096 nivåer

**Kvantiseringsfeil** er forskjellen mellom den faktiske analoge verdien og den nærmeste digitale verdien. Flere bits gir mindre kvantiseringsfeil og høyere nøyaktighet.`,
    },
    {
      id: 'elektro-data-vg1-2-7-example-1',
      type: 'example',
      title: 'Beregne oppløsning for en ADC',
      problem: 'En 10-bits ADC har et måleområde fra 0 V til 5 V. Beregn spenningsoppløsningen (minste målbare spenningsendring) og den digitale verdien for en inngangs­spenning på 3,2 V.',
      solution: `**Steg 1:** Beregn spenningsoppløsningen:
Oppløsning = Måleområde / (2ⁿ − 1) = 5 V / (1024 − 1) = 5 / 1023 ≈ **0,00489 V ≈ 4,89 mV**

**Steg 2:** Beregn digital verdi for 3,2 V:
Digital verdi = Inngangs­spenning / Oppløsning = 3,2 / 0,00489 ≈ **654**

**Steg 3:** Verifisering – hva tilsvarer digital verdi 654?
Spenning = 654 × 0,00489 ≈ 3,198 V

Kvantiseringsfeilen er 3,2 − 3,198 = 0,002 V = 2 mV. Med 10 bits kan vi altså måle spenningen med en nøyaktighet på ca. 5 mV.`,
    },
    {
      id: 'elektro-data-vg1-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange ulike spenningsnivåer kan en 8-bits ADC skille mellom?',
        options: [
          { id: 'a', text: '8', correct: false },
          { id: 'b', text: '64', correct: false },
          { id: 'c', text: '256', correct: true },
          { id: 'd', text: '1024', correct: false },
        ],
        solution: 'En n-bits ADC har 2ⁿ nivåer. For 8 bits: 2⁸ = 256 nivåer. Hvert nivå representerer et trinn i spenningen. Jo flere bits, jo finere oppløsning.',
      },
    },
    {
      id: 'elektro-data-vg1-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-7-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'En 12-bits ADC har et måleområde fra 0 V til 3,3 V. Beregn spenningsoppløsningen. Hva blir den digitale verdien for en inngangsspenning på 1,65 V?',
        hints: ['Oppløsning = Måleområde / (2ⁿ − 1).', 'Digital verdi = Inngangsspenning / Oppløsning.'],
        solution: 'Oppløsning = 3,3 V / (2¹² − 1) = 3,3 / 4095 ≈ 0,000806 V ≈ 0,806 mV. Digital verdi for 1,65 V: 1,65 / 0,000806 ≈ 2047. (Merk: 1,65 V er nøyaktig halvparten av 3,3 V, og 2047 er omtrent halvparten av 4095, noe som gir mening.)',
      },
    },

    // BLOKK 2: Nyquist-teoremet
    {
      id: 'elektro-data-vg1-2-7-def-2',
      type: 'definition',
      title: 'Nyquist-teoremet',
      content: `**Nyquist-teoremet** (også kalt Nyquist-Shannon-teoremet) sier at:

> Samplingsfrekvensen må være **minst dobbelt så høy** som den høyeste frekvensen i det analoge signalet for å unngå informasjonstap.

**fₛ ≥ 2 × fₘₐₓ**

Der:
- fₛ = samplingsfrekvens
- fₘₐₓ = høyeste frekvens i signalet

**Nyquist-frekvensen** er halvparten av samplingsfrekvensen: fₙ = fₛ / 2. Signaler med frekvens over Nyquist-frekvensen kan ikke gjengis korrekt.

**Aliasing** oppstår når signalet inneholder frekvenser over Nyquist-frekvensen. Da «forkleds» høye frekvenser som lave frekvenser – signalet forvrenger seg. For å unngå dette brukes et **anti-aliasing-filter** (lavpassfilter) før AD-omformeren.

**Eksempel:**
- Menneskets hørsel: opptil ca. 20 000 Hz
- CD-sampling: 44 100 Hz (> 2 × 20 000 Hz) → Nyquist-kravet er oppfylt`,
    },
    {
      id: 'elektro-data-vg1-2-7-example-2',
      type: 'example',
      title: 'Bestemme samplingsfrekvens',
      problem: 'Et temperatursignal fra en sensor varierer med frekvenser opptil 50 Hz. Hva er minimum samplingsfrekvens ifølge Nyquist-teoremet? I praksis anbefales det å sample 5–10 ganger høyeste frekvens. Hva er en fornuftig samplingsfrekvens?',
      solution: `**Minimum samplingsfrekvens (Nyquist):**
fₛ ≥ 2 × fₘₐₓ = 2 × 50 Hz = **100 Hz**

Under 100 Hz vil vi miste informasjon om de raskeste endringene i temperatursignalet (aliasing).

**Praktisk samplingsfrekvens:**
5 × 50 Hz = 250 Hz til 10 × 50 Hz = 500 Hz

En fornuftig samplingsfrekvens er rundt **250–500 Hz**. Oversampling gir bedre signalkvalitet og gjør det enklere å filtrere bort støy.`,
    },
    {
      id: 'elektro-data-vg1-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Et lydsignal inneholder frekvenser opptil 15 000 Hz. Hva er minimum samplingsfrekvens ifølge Nyquist-teoremet?',
        options: [
          { id: 'a', text: '15 000 Hz', correct: false },
          { id: 'b', text: '30 000 Hz', correct: true },
          { id: 'c', text: '44 100 Hz', correct: false },
          { id: 'd', text: '7 500 Hz', correct: false },
        ],
        solution: 'Ifølge Nyquist-teoremet: fₛ ≥ 2 × fₘₐₓ = 2 × 15 000 Hz = 30 000 Hz. Samplingsfrekvensen må være minst 30 kHz for å gjengi alle frekvenser opp til 15 kHz uten aliasing.',
      },
    },

    // BLOKK 3: DA-omforming
    {
      id: 'elektro-data-vg1-2-7-def-3',
      type: 'definition',
      title: 'DA-omforming (Digital til Analog)',
      content: `**DA-omforming** konverterer et digitalt tall tilbake til en analog spenning.

**Prinsipp:**
Hvert bit i det digitale tallet representerer en vektet spenningsbidrag. Bitene summeres for å gi utgangsspenningen.

For en n-bits DAC med referansespenning Vᵣₑf:

**Vᵤₜ = (Digital verdi / 2ⁿ) × Vᵣₑf**

**Eksempel med 8-bits DAC (Vᵣₑf = 5 V):**
- Digital verdi 0 (00000000): Vᵤₜ = 0 V
- Digital verdi 128 (10000000): Vᵤₜ = (128/256) × 5 = 2,5 V
- Digital verdi 255 (11111111): Vᵤₜ = (255/256) × 5 ≈ 4,98 V

**Bruksområder:**
- Lydavspilling (CD-spiller, DAP, mobil)
- Motorstyring (analoge styresignaler)
- Signalgeneratorer
- Grafikkort (analog videoutgang)

DA-utgangen er trappetrinnsformet. Et **rekonstruksjonsfilter** (lavpassfilter) glatter signalet til en jevn bølgeform.`,
    },
    {
      id: 'elektro-data-vg1-2-7-example-3',
      type: 'example',
      title: 'Beregne utgangsspenning fra en DAC',
      problem: 'En 8-bits DAC har referansespenning Vᵣₑf = 3,3 V. Hva er utgangsspenningen når den digitale inngangen er 200 (desimalt)?',
      solution: `**Formel:** Vᵤₜ = (Digital verdi / 2ⁿ) × Vᵣₑf

**Beregning:**
Vᵤₜ = (200 / 256) × 3,3 V = 0,78125 × 3,3 V ≈ **2,578 V**

**Minste spenningstrinn (oppløsning):**
ΔV = Vᵣₑf / 2ⁿ = 3,3 / 256 ≈ 0,0129 V ≈ 12,9 mV

Den digitale verdien 200 gir en utgangsspenning på ca. 2,58 V, med en nøyaktighet på ca. 13 mV per trinn.`,
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-2-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om broen mellom den analoge og digitale verden:

- **AD-omformer (ADC):** Konverterer analoge signaler til digitale tall via sampling og kvantisering
- **Oppløsning:** Antall bits bestemmer nøyaktigheten. En n-bits ADC har 2ⁿ nivåer
- **Nyquist-teoremet:** Samplingsfrekvensen må være ≥ 2 × høyeste signalfrekvens
- **Aliasing:** Oppstår ved for lav samplingsfrekvens – unngås med anti-aliasing-filter
- **DA-omformer (DAC):** Konverterer digitale tall tilbake til analoge spenninger
- **Rekonstruksjonsfilter** glatter den trappetrinnsformede DAC-utgangen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| ADC | Analog-til-digital omformer |
| DAC | Digital-til-analog omformer |
| Sampling | Måling av analogt signal med jevne tidsintervaller |
| Kvantisering | Avrunding av samplet verdi til nærmeste digitale nivå |
| Oppløsning | Antall bits i omformeren – bestemmer nøyaktighet |
| Nyquist-teoremet | fₛ ≥ 2 × fₘₐₓ for å unngå informasjonstap |
| Aliasing | Forvrengning som oppstår ved for lav samplingsfrekvens |`,
    },

    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En mikrokontroller (Arduino Uno) har en 10-bits ADC med måleområde 0–5 V. Du kobler til en temperatursensor som gir 10 mV per °C (0 mV ved 0 °C). a) Hva er spenningsoppløsningen til ADC-en? b) Hva er temperaturoppløsningen (minste temperaturendring som kan registreres)? c) Hva er den digitale verdien ved 25 °C?',
        hints: ['Oppløsning = 5 V / 1023.', 'Spenning ved 25 °C = 25 × 10 mV = 250 mV = 0,25 V.'],
        solution: 'a) Spenningsoppløsning = 5 V / (2¹⁰ − 1) = 5 / 1023 ≈ 4,89 mV. b) Temperatursensoren gir 10 mV/°C, og ADC-oppløsningen er 4,89 mV, altså kan vi registrere temperaturendringer ned til ca. 4,89/10 ≈ 0,49 °C. c) Ved 25 °C: Spenning = 25 × 10 mV = 250 mV = 0,250 V. Digital verdi = 0,250 / 0,00489 ≈ 51.',
      },
    },
    {
      id: 'elektro-data-vg1-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et digitalt lydsystem skal spille inn og spille av lyd med frekvenser opptil 20 kHz. a) Hva er minimum samplingsfrekvens ifølge Nyquist? b) CD-standarden bruker 44 100 Hz og 16 bits. Beregn antall mulige lydnivåer. c) Hvor mange bytes data genereres per sekund for én kanal med CD-kvalitet?',
        hints: ['1 byte = 8 bits.', 'Data per sekund = samplingsfrekvens × bytes per sample.'],
        solution: 'a) Minimum samplingsfrekvens: fₛ ≥ 2 × 20 000 Hz = 40 000 Hz. CD bruker 44 100 Hz, som gir litt margin. b) Antall lydnivåer: 2¹⁶ = 65 536 nivåer. Dette gir et dynamikkområde på ca. 96 dB. c) 16 bits = 2 bytes per sample. Data per sekund = 44 100 samples/s × 2 bytes/sample = 88 200 bytes/s ≈ 86,1 kB/s per kanal. For stereo (2 kanaler): 176 400 bytes/s ≈ 172,3 kB/s.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'AD-omformer (ADC)', definition: 'Konverterer analoge signaler til digitale tall via sampling og kvantisering.' },
    { term: 'DA-omformer (DAC)', definition: 'Konverterer digitale tall tilbake til analoge spenninger.' },
    { term: 'Sampling', definition: 'Måling av et analogt signal med jevne tidsintervaller.' },
    { term: 'Kvantisering', definition: 'Avrunding av hver måling til nærmeste digitale verdi.' },
    { term: 'Oppløsning', definition: 'Antall bits i omformeren, bestemmer antall nivåer (2ⁿ).' },
    { term: 'Nyquist-teoremet', definition: 'Samplingsfrekvensen må være minst 2× høyeste signalfrekvens.' },
    { term: 'Aliasing', definition: 'Forvrengning som oppstår når samplingsfrekvensen er for lav.' },
  ],
};

// ============================================================================
// Eksportarray
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_KAP2_NY = [
  CHAPTER_ELEKTRO_DATA_VG1_2_3,
  CHAPTER_ELEKTRO_DATA_VG1_2_4,
  CHAPTER_ELEKTRO_DATA_VG1_2_6,
  CHAPTER_ELEKTRO_DATA_VG1_2_7,
];
