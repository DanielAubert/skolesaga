/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 10
 *
 * Kapittel 9.1: Lengdeenheter og arealenheter
 * Kapittel 9.2: Volumenheter og omgjøring
 * Kapittel 9.3: Sammensatte enheter (km/t, kg/m³, kr/kg)
 * Kapittel 9.4: Praktiske oppgaver med måleenheter
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1 NARRATIV: Lengdeenheter og arealenheter
// ============================================================================

export const CHAPTER_8_9_1_NARRATIV: TextbookChapter = {
  id: '8-9-1-narrativ',
  courseId: '8',
  chapterNumber: '9.1',
  title: 'Lengdeenheter og arealenheter',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av lengdeenheter og arealenheter -- fra millimeter til kilometer og fra kvadratmillimeter til kvadratkilometer -- der vi lærer systemet bak enhetstrappa.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke og gjere om mellom ulike måleiningar',
  ],
  linkedChapterId: '8-9-1',
  content: [
    {
      id: '8-9-1-n-intro',
      type: 'text',
      content: `## Hvorfor trenger vi enheter?

Tenk deg at noen sier «banen er $400$ lang». $400$ hva? Meter? Centimeter? Mil? Uten en **enhet** er tallet meningsløst. Enheter forteller oss hva vi måler og i hvilken skala.

For lengde bruker vi **metersystemet** -- et elegant system der alt henger sammen med tierpotenser. $1$ kilometer er $1000$ meter, $1$ meter er $100$ centimeter, $1$ centimeter er $10$ millimeter. Systemet ble innført under den franske revolusjonen og brukes nå i nesten hele verden.

Men hva skjer når vi måler **areal** -- altså flater? Hvis $1$ m $= 100$ cm, betyr det at $1$ m$^2$ $= 100$ cm$^2$? Nei! Og det er akkurat denne fellen mange går i. La oss finne ut hvorfor.`,
    },

    {
      id: '8-9-1-n-section1',
      type: 'text',
      content: `## Lengdeenheter -- enhetstrappa

Lengdeenhetene i metersystemet er ordnet i en trapp der hvert steg er en faktor $10$:

$$\\text{km} \\xrightarrow{\\times 1000} \\text{m} \\xrightarrow{\\times 10} \\text{dm} \\xrightarrow{\\times 10} \\text{cm} \\xrightarrow{\\times 10} \\text{mm}$$

Her er de viktigste omgjøringene:
- $1 \\text{ km} = 1000 \\text{ m}$
- $1 \\text{ m} = 10 \\text{ dm} = 100 \\text{ cm} = 1000 \\text{ mm}$
- $1 \\text{ dm} = 10 \\text{ cm} = 100 \\text{ mm}$
- $1 \\text{ cm} = 10 \\text{ mm}$

**Fra stor enhet til liten enhet:** Vi ganger. $3{,}5 \\text{ m} = 3{,}5 \\cdot 100 = 350 \\text{ cm}$.
**Fra liten enhet til stor enhet:** Vi deler. $4500 \\text{ m} = 4500 \\div 1000 = 4{,}5 \\text{ km}$.

**Noen nyttige knagger:**
- Tykkelsen på en fyrstikk: ca. $2$ mm
- Lengden på en finger: ca. $8$ cm
- Høyden til en dør: ca. $2$ m
- Strekningen Bergen--Oslo: ca. $460$ km

Et vanlig triks for å unngå feil: tell antall steg i trappa og gang/del med $10$ for hvert steg. Fra cm til m er det $2$ steg opp, altså deler vi med $10^2 = 100$.`,
    },

    {
      id: '8-9-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-9-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på lengdeenheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-1-n-quiz1-q0',
            task: 'Hvor mange millimeter er $2{,}7$ meter?',
            options: [
              { id: 'a', text: '$27$ mm', isCorrect: false },
              { id: 'b', text: '$270$ mm', isCorrect: false },
              { id: 'c', text: '$2700$ mm', isCorrect: true },
              { id: 'd', text: '$27\\,000$ mm', isCorrect: false },
            ],
            solution: '$1 \\text{ m} = 1000 \\text{ mm}$, så $2{,}7 \\text{ m} = 2{,}7 \\cdot 1000 = 2700 \\text{ mm}$.',
          },
          {
            id: '8-9-1-n-quiz1-q1',
            task: 'Gjør om $8450$ cm til meter.',
            options: [
              { id: 'a', text: '$845$ m', isCorrect: false },
              { id: 'b', text: '$84{,}5$ m', isCorrect: true },
              { id: 'c', text: '$8{,}45$ m', isCorrect: false },
              { id: 'd', text: '$0{,}845$ m', isCorrect: false },
            ],
            solution: '$1 \\text{ m} = 100 \\text{ cm}$, så $8450 \\text{ cm} = 8450 \\div 100 = 84{,}5 \\text{ m}$.',
          },
          {
            id: '8-9-1-n-quiz1-q2',
            task: 'En løype er $3{,}2$ km. Hvor mange meter gjenstår etter at du har løpt $1800$ m?',
            options: [
              { id: 'a', text: '$1200$ m', isCorrect: false },
              { id: 'b', text: '$1400$ m', isCorrect: true },
              { id: 'c', text: '$1600$ m', isCorrect: false },
              { id: 'd', text: '$2800$ m', isCorrect: false },
            ],
            solution: '$3{,}2 \\text{ km} = 3200 \\text{ m}$. Gjenstår: $3200 - 1800 = 1400 \\text{ m}$.',
          },
        ],
      },
    },

    {
      id: '8-9-1-n-section2',
      type: 'text',
      content: `## Arealenheter -- den viktige forskjellen

Nå kommer vi til poenget som forvirrer mange: **arealenheter oppfører seg annerledes enn lengdeenheter**. Grunnen er enkel -- areal er todimensjonalt.

Tenk deg et kvadrat med side $1$ m $= 100$ cm. Arealet er:
- I meter: $1 \\text{ m} \\times 1 \\text{ m} = 1 \\text{ m}^2$
- I centimeter: $100 \\text{ cm} \\times 100 \\text{ cm} = 10\\,000 \\text{ cm}^2$

Altså: $1 \\text{ m}^2 = 10\\,000 \\text{ cm}^2$, **ikke** $100 \\text{ cm}^2$!

Når vi gjør om arealenheter, må vi kvadrere omregningsfaktoren. Siden $1 \\text{ m} = 100 \\text{ cm}$, er $1 \\text{ m}^2 = 100^2 \\text{ cm}^2 = 10\\,000 \\text{ cm}^2$.

Her er omregningene for areal:

| Omgjøring | Faktor |
|-----------|--------|
| $1 \\text{ km}^2$ til $\\text{m}^2$ | $\\times 1\\,000\\,000$ ($1000^2$) |
| $1 \\text{ m}^2$ til $\\text{dm}^2$ | $\\times 100$ ($10^2$) |
| $1 \\text{ m}^2$ til $\\text{cm}^2$ | $\\times 10\\,000$ ($100^2$) |
| $1 \\text{ dm}^2$ til $\\text{cm}^2$ | $\\times 100$ ($10^2$) |
| $1 \\text{ cm}^2$ til $\\text{mm}^2$ | $\\times 100$ ($10^2$) |

Det finnes også noen spesielle arealenheter som er mye brukt:
- $1 \\text{ dekar (daa)} = 1000 \\text{ m}^2$ (brukes for jordbruksareal i Norge)
- $1 \\text{ hektar (ha)} = 10\\,000 \\text{ m}^2 = 10 \\text{ daa}$
- $1 \\text{ km}^2 = 100 \\text{ ha} = 1000 \\text{ daa}$

En fotballbane er omtrent $7000 \\text{ m}^2 \\approx 7 \\text{ daa} \\approx 0{,}7 \\text{ ha}$.`,
    },

    {
      id: '8-9-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-9-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på arealenheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-1-n-quiz2-q0',
            task: 'Hvor mange $\\text{cm}^2$ er $3{,}5 \\text{ m}^2$?',
            options: [
              { id: 'a', text: '$350 \\text{ cm}^2$', isCorrect: false },
              { id: 'b', text: '$3500 \\text{ cm}^2$', isCorrect: false },
              { id: 'c', text: '$35\\,000 \\text{ cm}^2$', isCorrect: true },
              { id: 'd', text: '$350\\,000 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: '$1 \\text{ m}^2 = 10\\,000 \\text{ cm}^2$. Altså $3{,}5 \\text{ m}^2 = 3{,}5 \\cdot 10\\,000 = 35\\,000 \\text{ cm}^2$.',
          },
          {
            id: '8-9-1-n-quiz2-q1',
            task: 'Et rektangulært rom er $5$ m langt og $4$ m bredt. Hva er arealet i $\\text{dm}^2$?',
            options: [
              { id: 'a', text: '$200 \\text{ dm}^2$', isCorrect: false },
              { id: 'b', text: '$2000 \\text{ dm}^2$', isCorrect: true },
              { id: 'c', text: '$20 \\text{ dm}^2$', isCorrect: false },
              { id: 'd', text: '$20\\,000 \\text{ dm}^2$', isCorrect: false },
            ],
            solution: 'Arealet er $5 \\cdot 4 = 20 \\text{ m}^2$. Og $20 \\text{ m}^2 = 20 \\cdot 100 = 2000 \\text{ dm}^2$.',
          },
          {
            id: '8-9-1-n-quiz2-q2',
            task: 'Hvorfor er $1 \\text{ m}^2 = 10\\,000 \\text{ cm}^2$ og ikke $100 \\text{ cm}^2$?',
            options: [
              { id: 'a', text: 'Fordi metersystemet er laget slik', isCorrect: false },
              { id: 'b', text: 'Fordi areal er todimensjonalt, så vi må kvadrere omregningsfaktoren: $100^2 = 10\\,000$', isCorrect: true },
              { id: 'c', text: 'Fordi $1 \\text{ m}^2$ er mye større enn folk tror', isCorrect: false },
              { id: 'd', text: 'Fordi det finnes $100$ desimeter i en meter', isCorrect: false },
            ],
            solution: 'Areal måler flater, og en flate har to dimensjoner. Et $1 \\text{ m} \\times 1 \\text{ m}$ kvadrat er $100 \\text{ cm} \\times 100 \\text{ cm} = 10\\,000 \\text{ cm}^2$. Omregningsfaktoren for lengde ($100$) må kvadreres for areal.',
          },
        ],
      },
    },

    {
      id: '8-9-1-n-section3',
      type: 'text',
      content: `## Praktiske omgjøringer -- tips og triks

Her er noen strategier som gjør enhetsmregning enklere:

**Enhetstrapp-metoden:**
Skriv opp enhetene i en trapp og tell steg. For lengde ganger/deler du med $10$ per steg. For areal ganger/deler du med $100$ per steg ($10^2$).

$$\\text{km} \\leftarrow \\text{m} \\leftarrow \\text{dm} \\leftarrow \\text{cm} \\leftarrow \\text{mm}$$

For lengde: hvert steg er $\\times 10$ (nedover) eller $\\div 10$ (oppover).
For areal: hvert steg er $\\times 100$ (nedover) eller $\\div 100$ (oppover).

**Brøk-metoden (enhetsbrøker):**
Skriv omregningen som en brøk lik $1$ og gang med den:

$$250 \\text{ cm} = 250 \\text{ cm} \\cdot \\frac{1 \\text{ m}}{100 \\text{ cm}} = 2{,}5 \\text{ m}$$

Cm-ene «forkortes bort» og vi sitter igjen med meter.

For areal:

$$5 \\text{ m}^2 = 5 \\text{ m}^2 \\cdot \\left(\\frac{100 \\text{ cm}}{1 \\text{ m}}\\right)^2 = 5 \\cdot 10\\,000 \\text{ cm}^2 = 50\\,000 \\text{ cm}^2$$

**Husk:**
- Overestimer heller enn å underestimer -- er svaret rimelig? $3 \\text{ m}^2 = 30\\,000 \\text{ cm}^2$, ikke $300$.
- Tegn gjerne et lite kvadrat for å visualisere: et kvadrat med side $1$ m består av $100 \\times 100 = 10\\,000$ små ruter med side $1$ cm.`,
    },

    {
      id: '8-9-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-9-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på omgjøring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-1-n-quiz3-q0',
            task: 'Gjør om $0{,}5 \\text{ km}^2$ til $\\text{m}^2$.',
            options: [
              { id: 'a', text: '$500 \\text{ m}^2$', isCorrect: false },
              { id: 'b', text: '$5000 \\text{ m}^2$', isCorrect: false },
              { id: 'c', text: '$50\\,000 \\text{ m}^2$', isCorrect: false },
              { id: 'd', text: '$500\\,000 \\text{ m}^2$', isCorrect: true },
            ],
            solution: '$1 \\text{ km}^2 = 1000^2 \\text{ m}^2 = 1\\,000\\,000 \\text{ m}^2$. Altså $0{,}5 \\text{ km}^2 = 500\\,000 \\text{ m}^2$.',
          },
          {
            id: '8-9-1-n-quiz3-q1',
            task: 'En hage er $15$ m lang og $8$ m bred. Hvor mange dekar ($\\text{daa}$) er den?',
            options: [
              { id: 'a', text: '$12 \\text{ daa}$', isCorrect: false },
              { id: 'b', text: '$1{,}2 \\text{ daa}$', isCorrect: false },
              { id: 'c', text: '$0{,}12 \\text{ daa}$', isCorrect: true },
              { id: 'd', text: '$0{,}012 \\text{ daa}$', isCorrect: false },
            ],
            solution: 'Arealet er $15 \\cdot 8 = 120 \\text{ m}^2$. Og $1 \\text{ daa} = 1000 \\text{ m}^2$, så $120 \\text{ m}^2 = 0{,}12 \\text{ daa}$.',
          },
          {
            id: '8-9-1-n-quiz3-q2',
            task: 'Hvor mange $\\text{mm}^2$ er $4 \\text{ cm}^2$?',
            options: [
              { id: 'a', text: '$40 \\text{ mm}^2$', isCorrect: false },
              { id: 'b', text: '$400 \\text{ mm}^2$', isCorrect: true },
              { id: 'c', text: '$4000 \\text{ mm}^2$', isCorrect: false },
              { id: 'd', text: '$4 \\text{ mm}^2$', isCorrect: false },
            ],
            solution: '$1 \\text{ cm}^2 = 10^2 \\text{ mm}^2 = 100 \\text{ mm}^2$. Altså $4 \\text{ cm}^2 = 400 \\text{ mm}^2$.',
          },
        ],
      },
    },

    {
      id: '8-9-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har utforsket lengdeenheter og arealenheter, og den viktige forskjellen mellom dem.

**Lengdeenheter** (endimensjonal):

| Omgjøring | Faktor |
|-----------|--------|
| km $\\to$ m | $\\times 1000$ |
| m $\\to$ cm | $\\times 100$ |
| m $\\to$ mm | $\\times 1000$ |
| cm $\\to$ mm | $\\times 10$ |

**Arealenheter** (todimensjonal) -- omregningsfaktoren **kvadreres**:

| Omgjøring | Faktor |
|-----------|--------|
| $\\text{m}^2 \\to \\text{cm}^2$ | $\\times 10\\,000$ ($100^2$) |
| $\\text{m}^2 \\to \\text{dm}^2$ | $\\times 100$ ($10^2$) |
| $\\text{cm}^2 \\to \\text{mm}^2$ | $\\times 100$ ($10^2$) |
| $\\text{km}^2 \\to \\text{m}^2$ | $\\times 1\\,000\\,000$ ($1000^2$) |

Nøkkelinnsikt: For areal kvadrerer vi omregningsfaktoren, fordi areal har **to** dimensjoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2 NARRATIV: Volumenheter og omgjøring
// ============================================================================

export const CHAPTER_8_9_2_NARRATIV: TextbookChapter = {
  id: '8-9-2-narrativ',
  courseId: '8',
  chapterNumber: '9.2',
  title: 'Volumenheter og omgjøring',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av volumenheter -- fra kubikkcentimeter og liter til kubikkmeter -- der vi oppdager at en terning med side $10$ cm rommer nøyaktig $1$ liter.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke og gjere om mellom ulike måleiningar',
  ],
  linkedChapterId: '8-9-2',
  content: [
    {
      id: '8-9-2-n-intro',
      type: 'text',
      content: `## Tre dimensjoner -- tre ganger mer forvirring?

I forrige kapittel lærte vi at arealenheter oppfører seg annerledes enn lengdeenheter fordi areal er todimensjonalt. Nå tar vi steget videre til **volum** -- den tredimensjonale verden. Og ja, det blir enda mer dramatisk!

Husker du at $1 \\text{ m}^2 = 10\\,000 \\text{ cm}^2$? For volum må vi kuber omregningsfaktoren:

$$1 \\text{ m}^3 = 100^3 \\text{ cm}^3 = 1\\,000\\,000 \\text{ cm}^3$$

En million! Det høres kanskje overraskende ut, men tenk deg en kube med side $1$ m. Den inneholder $100 \\times 100 \\times 100 = 1\\,000\\,000$ bittesmå kuber med side $1$ cm.

Heldigvis har vi en enhet som gjør hverdagen enklere: **literen**. Og her er den magiske forbindelsen: $1 \\text{ liter} = 1 \\text{ dm}^3$.`,
    },

    {
      id: '8-9-2-n-section1',
      type: 'text',
      content: `## Kubikkenheter og trappa

Volumenheter følger det samme mønsteret som lengde og areal, men nå med **tredje potens**:

$$\\text{m}^3 \\xrightarrow{\\times 1000} \\text{dm}^3 \\xrightarrow{\\times 1000} \\text{cm}^3 \\xrightarrow{\\times 1000} \\text{mm}^3$$

Legg merke til mønsteret: mellom hvert nabosteg i enhetstrappa ganger vi med $10^3 = 1000$ for volum (mot $10^2 = 100$ for areal og $10^1 = 10$ for lengde).

Her er de viktigste omgjøringene:

| Omgjøring | Faktor |
|-----------|--------|
| $1 \\text{ m}^3$ til $\\text{dm}^3$ | $\\times 1000$ ($10^3$) |
| $1 \\text{ m}^3$ til $\\text{cm}^3$ | $\\times 1\\,000\\,000$ ($100^3$) |
| $1 \\text{ dm}^3$ til $\\text{cm}^3$ | $\\times 1000$ ($10^3$) |
| $1 \\text{ cm}^3$ til $\\text{mm}^3$ | $\\times 1000$ ($10^3$) |

La oss prøve: $0{,}5 \\text{ m}^3 = 0{,}5 \\cdot 1000 = 500 \\text{ dm}^3$. Og $2{,}4 \\text{ dm}^3 = 2{,}4 \\cdot 1000 = 2400 \\text{ cm}^3$.

Andre veien: $750\\,000 \\text{ cm}^3 = 750\\,000 \\div 1\\,000\\,000 = 0{,}75 \\text{ m}^3$.`,
    },

    {
      id: '8-9-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-9-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kubikkenheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-2-n-quiz1-q0',
            task: 'Hvor mange $\\text{cm}^3$ er $3 \\text{ dm}^3$?',
            options: [
              { id: 'a', text: '$30 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$300 \\text{ cm}^3$', isCorrect: false },
              { id: 'c', text: '$3000 \\text{ cm}^3$', isCorrect: true },
              { id: 'd', text: '$30\\,000 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$1 \\text{ dm}^3 = 10^3 \\text{ cm}^3 = 1000 \\text{ cm}^3$. Altså $3 \\text{ dm}^3 = 3000 \\text{ cm}^3$.',
          },
          {
            id: '8-9-2-n-quiz1-q1',
            task: 'Gjør om $2{,}5 \\text{ m}^3$ til $\\text{dm}^3$.',
            options: [
              { id: 'a', text: '$25 \\text{ dm}^3$', isCorrect: false },
              { id: 'b', text: '$250 \\text{ dm}^3$', isCorrect: false },
              { id: 'c', text: '$2500 \\text{ dm}^3$', isCorrect: true },
              { id: 'd', text: '$25\\,000 \\text{ dm}^3$', isCorrect: false },
            ],
            solution: '$1 \\text{ m}^3 = 1000 \\text{ dm}^3$. Altså $2{,}5 \\text{ m}^3 = 2500 \\text{ dm}^3$.',
          },
          {
            id: '8-9-2-n-quiz1-q2',
            task: 'Hva er sammenhengen mellom omregningsfaktorene for lengde, areal og volum når vi går fra m til cm?',
            options: [
              { id: 'a', text: 'Alle er $\\times 100$', isCorrect: false },
              { id: 'b', text: 'Lengde: $\\times 100$, areal: $\\times 10\\,000$, volum: $\\times 1\\,000\\,000$', isCorrect: true },
              { id: 'c', text: 'Lengde: $\\times 10$, areal: $\\times 100$, volum: $\\times 1000$', isCorrect: false },
              { id: 'd', text: 'Alle er $\\times 1000$', isCorrect: false },
            ],
            solution: 'Fra m til cm er det faktor $100$. For lengde: $100^1 = 100$. For areal: $100^2 = 10\\,000$. For volum: $100^3 = 1\\,000\\,000$. Eksponenten følger antall dimensjoner!',
          },
        ],
      },
    },

    {
      id: '8-9-2-n-section2',
      type: 'text',
      content: `## Liter og forbindelsen til kubikkenheter

I hverdagen måler vi væsker i **liter** -- melk, vann, bensin. Men i matematikken bruker vi gjerne kubikkenheter. Heldigvis henger disse perfekt sammen:

$$1 \\text{ liter (L)} = 1 \\text{ dm}^3$$

Dette betyr at en kube med side $1 \\text{ dm} = 10 \\text{ cm}$ rommer nøyaktig $1$ liter. Og videre:

| Literenhet | Kubikkenhet |
|------------|-------------|
| $1 \\text{ L} = 1 \\text{ dm}^3$ | $= 1000 \\text{ cm}^3$ |
| $1 \\text{ dL} = 0{,}1 \\text{ L}$ | $= 100 \\text{ cm}^3$ |
| $1 \\text{ cL} = 0{,}01 \\text{ L}$ | $= 10 \\text{ cm}^3$ |
| $1 \\text{ mL} = 0{,}001 \\text{ L}$ | $= 1 \\text{ cm}^3$ |

Den siste er spesielt nyttig: **$1$ milliliter er nøyaktig $1$ kubikkcentimeter**. Når du tar en tablett på $500$ mg med et glass vann ($2$ dL $= 200$ mL $= 200 \\text{ cm}^3$), holder du altså $200$ kubikkcentimeter vann i glasset.

Og for store volumer:

$$1 \\text{ m}^3 = 1000 \\text{ dm}^3 = 1000 \\text{ L}$$

En kubikkmeter er altså $1000$ liter! Et badekar rommer ca. $200$ L $= 0{,}2 \\text{ m}^3$.

La oss prøve en oppgave: En fiskestank er $60$ cm lang, $30$ cm bred og $40$ cm høy. Volumet er $60 \\cdot 30 \\cdot 40 = 72\\,000 \\text{ cm}^3 = 72 \\text{ dm}^3 = 72 \\text{ L}$.`,
    },

    {
      id: '8-9-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-9-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på liter og kubikkenheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-2-n-quiz2-q0',
            task: 'Hvor mange milliliter er $3{,}5$ liter?',
            options: [
              { id: 'a', text: '$35$ mL', isCorrect: false },
              { id: 'b', text: '$350$ mL', isCorrect: false },
              { id: 'c', text: '$3500$ mL', isCorrect: true },
              { id: 'd', text: '$35\\,000$ mL', isCorrect: false },
            ],
            solution: '$1 \\text{ L} = 1000 \\text{ mL}$, så $3{,}5 \\text{ L} = 3500 \\text{ mL}$.',
          },
          {
            id: '8-9-2-n-quiz2-q1',
            task: 'En vannbeholder rommer $0{,}8 \\text{ m}^3$. Hvor mange liter er det?',
            options: [
              { id: 'a', text: '$8$ liter', isCorrect: false },
              { id: 'b', text: '$80$ liter', isCorrect: false },
              { id: 'c', text: '$800$ liter', isCorrect: true },
              { id: 'd', text: '$8000$ liter', isCorrect: false },
            ],
            solution: '$1 \\text{ m}^3 = 1000 \\text{ L}$, så $0{,}8 \\text{ m}^3 = 800 \\text{ L}$.',
          },
          {
            id: '8-9-2-n-quiz2-q2',
            task: 'En boks har volum $500 \\text{ cm}^3$. Hvor mange desiliter rommer den?',
            options: [
              { id: 'a', text: '$5$ dL', isCorrect: true },
              { id: 'b', text: '$50$ dL', isCorrect: false },
              { id: 'c', text: '$0{,}5$ dL', isCorrect: false },
              { id: 'd', text: '$500$ dL', isCorrect: false },
            ],
            solution: '$500 \\text{ cm}^3 = 500 \\text{ mL} = 0{,}5 \\text{ L} = 5 \\text{ dL}$.',
          },
        ],
      },
    },

    {
      id: '8-9-2-n-section3',
      type: 'text',
      content: `## Overraskende størrelser

Volumenheter kan gi noen overraskelser. Her er noen tankevekkere:

**Hvor tungt er en kubikkmeter vann?**
$1 \\text{ m}^3$ vann $= 1000 \\text{ L}$. Og $1$ liter vann veier $1$ kg. Altså veier $1 \\text{ m}^3$ vann **ett tonn** ($1000$ kg)!

**Hvor stor er egentlig en kubikkmeter?**
Tenk deg en kube med side $1$ m -- omtrent som et stort oppvaskskap. Den rommer $1000$ literflasker med vann. Det er ganske mye!

**Regndråper og drikkevann:**
En regndråpe har volum ca. $0{,}05 \\text{ mL} = 0{,}05 \\text{ cm}^3$. Du trenger altså $20\\,000$ regndråper for å fylle én liter!

**Tips for å tenke i volum:**
- $1 \\text{ cm}^3$ (= $1$ mL): omtrent en stor sukkerbit
- $1 \\text{ dm}^3$ (= $1$ L): en standard melkekartong
- $1 \\text{ m}^3$ (= $1000$ L): et stort kjøleskap

Når du gjør om enheter i oppgaver, spør deg alltid: **er svaret rimelig?** Hvis du beregner at et drikkeglass rommer $200\\,000$ liter, har du sannsynligvis gått feil vei i omgjøringen!`,
    },

    {
      id: '8-9-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-9-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på volum i praksis:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-2-n-quiz3-q0',
            task: 'Et svømmebasseng er $25$ m langt, $12{,}5$ m bredt og $2$ m dypt. Hvor mange liter vann rommer det?',
            options: [
              { id: 'a', text: '$625$ liter', isCorrect: false },
              { id: 'b', text: '$62\\,500$ liter', isCorrect: false },
              { id: 'c', text: '$625\\,000$ liter', isCorrect: true },
              { id: 'd', text: '$6\\,250\\,000$ liter', isCorrect: false },
            ],
            solution: '$V = 25 \\cdot 12{,}5 \\cdot 2 = 625 \\text{ m}^3 = 625 \\cdot 1000 = 625\\,000 \\text{ L}$.',
          },
          {
            id: '8-9-2-n-quiz3-q1',
            task: 'Hvor mye veier vannet i svømmebassenget fra forrige spørsmål?',
            options: [
              { id: 'a', text: '$625$ kg', isCorrect: false },
              { id: 'b', text: '$62{,}5$ tonn', isCorrect: false },
              { id: 'c', text: '$625$ tonn', isCorrect: true },
              { id: 'd', text: '$6250$ tonn', isCorrect: false },
            ],
            solution: '$625\\,000 \\text{ L} = 625\\,000 \\text{ kg} = 625$ tonn (fordi $1$ L vann veier $1$ kg).',
          },
          {
            id: '8-9-2-n-quiz3-q2',
            task: 'En terning har side $20$ cm. Hva er volumet i liter?',
            options: [
              { id: 'a', text: '$0{,}8$ L', isCorrect: false },
              { id: 'b', text: '$8$ L', isCorrect: true },
              { id: 'c', text: '$80$ L', isCorrect: false },
              { id: 'd', text: '$800$ L', isCorrect: false },
            ],
            solution: '$V = 20^3 = 8000 \\text{ cm}^3 = 8000 \\text{ mL} = 8 \\text{ L}$. (Eller: $20 \\text{ cm} = 2 \\text{ dm}$, $V = 2^3 = 8 \\text{ dm}^3 = 8 \\text{ L}$.)',
          },
        ],
      },
    },

    {
      id: '8-9-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Volum er tredimensjonalt, og omregningsfaktorene er **kuben** av lengdefaktorene.

**Kubikkenheter:**

| Omgjøring | Faktor |
|-----------|--------|
| $\\text{m}^3 \\to \\text{dm}^3$ | $\\times 1000$ ($10^3$) |
| $\\text{dm}^3 \\to \\text{cm}^3$ | $\\times 1000$ ($10^3$) |
| $\\text{cm}^3 \\to \\text{mm}^3$ | $\\times 1000$ ($10^3$) |
| $\\text{m}^3 \\to \\text{cm}^3$ | $\\times 1\\,000\\,000$ ($100^3$) |

**Sammenhengen med liter:**

| Kubikkenhet | Literenhet |
|-------------|------------|
| $1 \\text{ cm}^3$ | $= 1 \\text{ mL}$ |
| $1 \\text{ dm}^3$ | $= 1 \\text{ L}$ |
| $1 \\text{ m}^3$ | $= 1000 \\text{ L}$ |

**Huskeregel:** Dimensjon $d$ betyr at omregningsfaktoren opphøyes i $d$:
- Lengde ($d=1$): $\\times 10$ per steg
- Areal ($d=2$): $\\times 100$ per steg
- Volum ($d=3$): $\\times 1000$ per steg`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.3 NARRATIV: Sammensatte enheter (km/t, kg/m³, kr/kg)
// ============================================================================

export const CHAPTER_8_9_3_NARRATIV: TextbookChapter = {
  id: '8-9-3-narrativ',
  courseId: '8',
  chapterNumber: '9.3',
  title: 'Sammensatte enheter (km/t, kg/m³, kr/kg)',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av sammensatte enheter -- fart, tetthet og pris per enhet -- der vi lærer å jobbe med enheter som er bygd opp av andre enheter.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke og gjere om mellom ulike måleiningar',
  ],
  linkedChapterId: '8-9-3',
  content: [
    {
      id: '8-9-3-n-intro',
      type: 'text',
      content: `## Enheter som er delt på hverandre

Noen størrelser kan ikke beskrives med bare én enhet. **Fart** er ikke bare «meter» eller bare «sekund» -- den er meter **per** sekund. Fart er et eksempel på en **sammensatt enhet**: en enhet bygd opp av to (eller flere) andre enheter.

Vi møter sammensatte enheter overalt i hverdagen:
- **Fart:** km/t (kilometer per time), m/s (meter per sekund)
- **Tetthet:** kg/m$^3$ (kilogram per kubikkmeter), g/cm$^3$ (gram per kubikkcentimeter)
- **Pris per enhet:** kr/kg (kroner per kilo), kr/L (kroner per liter)
- **Forbruk:** L/mil (liter per mil), kWh (kilowattimer)

Det lille ordet **«per»** er nøkkelen -- det betyr «delt på». Km/t betyr kilometer delt på timer. Å forstå dette åpner for å gjøre om mellom enhetene og løse praktiske problemer.`,
    },

    {
      id: '8-9-3-n-section1',
      type: 'text',
      content: `## Fart -- kilometer per time og meter per sekund

**Fart** $=$ **strekning** $\\div$ **tid**, med formel:

$$v = \\frac{s}{t}$$

der $v$ er farten, $s$ er strekningen og $t$ er tiden. Herfra kan vi også utlede:

$$s = v \\cdot t \\qquad \\text{og} \\qquad t = \\frac{s}{v}$$

De to vanligste fartsenhetene er **km/t** og **m/s**. Hvordan gjør vi om mellom dem?

$1 \\text{ km} = 1000 \\text{ m}$ og $1 \\text{ t} = 3600 \\text{ s}$, så:

$$1 \\text{ km/t} = \\frac{1000 \\text{ m}}{3600 \\text{ s}} = \\frac{1}{3{,}6} \\text{ m/s} \\approx 0{,}278 \\text{ m/s}$$

Og omvendt: $1 \\text{ m/s} = 3{,}6 \\text{ km/t}$.

**Huskeregel:**
- Fra km/t til m/s: **del med $3{,}6$**
- Fra m/s til km/t: **gang med $3{,}6$**

Noen eksempler:
- Gåfart: $5 \\text{ km/t} = \\frac{5}{3{,}6} \\approx 1{,}4 \\text{ m/s}$
- Sykkelfart: $20 \\text{ km/t} = \\frac{20}{3{,}6} \\approx 5{,}6 \\text{ m/s}$
- Fartsgrense i boligfelt: $30 \\text{ km/t} = \\frac{30}{3{,}6} \\approx 8{,}3 \\text{ m/s}$
- Usain Bolt: ca. $10{,}4 \\text{ m/s} = 10{,}4 \\cdot 3{,}6 \\approx 37{,}4 \\text{ km/t}$`,
    },

    {
      id: '8-9-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-9-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på fart:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-3-n-quiz1-q0',
            task: 'Gjør om $90 \\text{ km/t}$ til m/s.',
            options: [
              { id: 'a', text: '$324 \\text{ m/s}$', isCorrect: false },
              { id: 'b', text: '$25 \\text{ m/s}$', isCorrect: true },
              { id: 'c', text: '$15 \\text{ m/s}$', isCorrect: false },
              { id: 'd', text: '$9 \\text{ m/s}$', isCorrect: false },
            ],
            solution: '$90 \\div 3{,}6 = 25 \\text{ m/s}$.',
          },
          {
            id: '8-9-3-n-quiz1-q1',
            task: 'En bil kjører $80 \\text{ km/t}$ i $2{,}5$ timer. Hvor langt kommer den?',
            options: [
              { id: 'a', text: '$160$ km', isCorrect: false },
              { id: 'b', text: '$200$ km', isCorrect: true },
              { id: 'c', text: '$32$ km', isCorrect: false },
              { id: 'd', text: '$240$ km', isCorrect: false },
            ],
            solution: '$s = v \\cdot t = 80 \\cdot 2{,}5 = 200 \\text{ km}$.',
          },
          {
            id: '8-9-3-n-quiz1-q2',
            task: 'En løper springer $12 \\text{ km}$ på $48$ minutter. Hva er gjennomsnittsfarten i km/t?',
            options: [
              { id: 'a', text: '$12 \\text{ km/t}$', isCorrect: false },
              { id: 'b', text: '$15 \\text{ km/t}$', isCorrect: true },
              { id: 'c', text: '$4 \\text{ km/t}$', isCorrect: false },
              { id: 'd', text: '$18 \\text{ km/t}$', isCorrect: false },
            ],
            solution: '$48 \\text{ min} = 0{,}8 \\text{ t}$. $v = \\frac{12}{0{,}8} = 15 \\text{ km/t}$.',
          },
        ],
      },
    },

    {
      id: '8-9-3-n-section2',
      type: 'text',
      content: `## Tetthet -- masse per volum

**Tetthet** forteller oss hvor «tungt» et stoff er for sin størrelse. Formelen er:

$$\\rho = \\frac{m}{V}$$

der $\\rho$ (den greske bokstaven «rho») er tettheten, $m$ er massen og $V$ er volumet. Herfra kan vi utlede:

$$m = \\rho \\cdot V \\qquad \\text{og} \\qquad V = \\frac{m}{\\rho}$$

Vanlige tetthetsenheter:
- **kg/m$^3$**: brukes for store volumer (byggematerialer, gasser)
- **g/cm$^3$**: brukes for småskala-beregninger (laboratorie, kjemi)

Sammenhengen: $1 \\text{ g/cm}^3 = 1000 \\text{ kg/m}^3$.

Noen vanlige tettheter:
- Vann: $1 \\text{ g/cm}^3 = 1000 \\text{ kg/m}^3$
- Jern: $7{,}87 \\text{ g/cm}^3 = 7870 \\text{ kg/m}^3$
- Tre (furu): $0{,}5 \\text{ g/cm}^3 = 500 \\text{ kg/m}^3$
- Luft: ca. $1{,}2 \\text{ kg/m}^3$
- Gull: $19{,}3 \\text{ g/cm}^3 = 19\\,300 \\text{ kg/m}^3$

En kule av gull med radius $5$ cm har volum $V = \\frac{4}{3}\\pi \\cdot 5^3 \\approx 524 \\text{ cm}^3$. Massen er $m = 19{,}3 \\cdot 524 \\approx 10\\,113 \\text{ g} \\approx 10{,}1 \\text{ kg}$. En liten gullkule veier over $10$ kilo!

Gjenstander som er **lettere enn vann** (tetthet under $1 \\text{ g/cm}^3$) flyter. Tre flyter fordi $0{,}5 < 1$. Jern synker fordi $7{,}87 > 1$.`,
    },

    {
      id: '8-9-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-9-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på tetthet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-3-n-quiz2-q0',
            task: 'En blokk av aluminium har volum $200 \\text{ cm}^3$ og tetthet $2{,}7 \\text{ g/cm}^3$. Hva er massen?',
            options: [
              { id: 'a', text: '$74$ g', isCorrect: false },
              { id: 'b', text: '$540$ g', isCorrect: true },
              { id: 'c', text: '$5{,}4$ kg', isCorrect: false },
              { id: 'd', text: '$270$ g', isCorrect: false },
            ],
            solution: '$m = \\rho \\cdot V = 2{,}7 \\cdot 200 = 540 \\text{ g}$.',
          },
          {
            id: '8-9-3-n-quiz2-q1',
            task: 'En stein veier $450$ g og har volum $150 \\text{ cm}^3$. Flyter eller synker steinen i vann?',
            options: [
              { id: 'a', text: 'Flyter -- tettheten er under $1 \\text{ g/cm}^3$', isCorrect: false },
              { id: 'b', text: 'Synker -- tettheten er over $1 \\text{ g/cm}^3$', isCorrect: true },
              { id: 'c', text: 'Svever -- tettheten er nøyaktig $1 \\text{ g/cm}^3$', isCorrect: false },
              { id: 'd', text: 'Vi kan ikke avgjøre det', isCorrect: false },
            ],
            solution: '$\\rho = \\frac{450}{150} = 3 \\text{ g/cm}^3$. Siden $3 > 1$ (vannets tetthet), synker steinen.',
          },
          {
            id: '8-9-3-n-quiz2-q2',
            task: 'Gjør om $800 \\text{ kg/m}^3$ til $\\text{g/cm}^3$.',
            options: [
              { id: 'a', text: '$800 \\text{ g/cm}^3$', isCorrect: false },
              { id: 'b', text: '$8 \\text{ g/cm}^3$', isCorrect: false },
              { id: 'c', text: '$0{,}8 \\text{ g/cm}^3$', isCorrect: true },
              { id: 'd', text: '$80 \\text{ g/cm}^3$', isCorrect: false },
            ],
            solution: '$1 \\text{ g/cm}^3 = 1000 \\text{ kg/m}^3$, altså $800 \\text{ kg/m}^3 = \\frac{800}{1000} = 0{,}8 \\text{ g/cm}^3$.',
          },
        ],
      },
    },

    {
      id: '8-9-3-n-section3',
      type: 'text',
      content: `## Pris per enhet -- smart shopping

Den tredje viktige sammensatte enheten er **pris per enhet**: kr/kg, kr/L, kr/stk. Denne enheten hjelper oss å sammenligne priser:

**Eksempel: Hvilken yoghurt er billigst?**
- Yoghurt A: $500$ g for $35$ kr. Pris per kg: $\\frac{35}{0{,}5} = 70 \\text{ kr/kg}$.
- Yoghurt B: $750$ g for $48$ kr. Pris per kg: $\\frac{48}{0{,}75} = 64 \\text{ kr/kg}$.

Yoghurt B er billigst per kilo, selv om den koster mer i butikken.

**Eksempel: Bensinforbruk**
En bil bruker $0{,}7$ L/mil. Bensinen koster $20$ kr/L. Hva koster det å kjøre $35$ mil?

Forbruk: $0{,}7 \\cdot 35 = 24{,}5$ L. Kostnad: $24{,}5 \\cdot 20 = 490$ kr.

**Eksempel: Strømforbruk**
En varmeovn bruker $1{,}5 \\text{ kW}$ (kilowatt). Den står på i $8$ timer. Forbruket er $1{,}5 \\cdot 8 = 12 \\text{ kWh}$ (kilowattimer). Strømmen koster $2$ kr/kWh, så kostnaden er $12 \\cdot 2 = 24$ kr.

Legg merke til at vi kan **kjede sammen** enheter. Når vi ganger kr/L med L, forkortes L bort og vi sitter igjen med kr. Denne metoden kalles **enhetsanalyse** og er veldig nyttig for å sjekke at beregningen gir mening.`,
    },

    {
      id: '8-9-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-9-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på pris per enhet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-3-n-quiz3-q0',
            task: 'Hvilken juice er billigst per liter? A: $1{,}5$ L for $36$ kr. B: $2$ L for $44$ kr.',
            options: [
              { id: 'a', text: 'Juice A ($24$ kr/L)', isCorrect: false },
              { id: 'b', text: 'Juice B ($22$ kr/L)', isCorrect: true },
              { id: 'c', text: 'De koster likt per liter', isCorrect: false },
              { id: 'd', text: 'Juice A ($18$ kr/L)', isCorrect: false },
            ],
            solution: 'A: $\\frac{36}{1{,}5} = 24$ kr/L. B: $\\frac{44}{2} = 22$ kr/L. Juice B er billigst per liter.',
          },
          {
            id: '8-9-3-n-quiz3-q1',
            task: 'En elbil bruker $1{,}8$ kWh per mil. Strømmen koster $1{,}50$ kr/kWh. Hva koster det å kjøre $20$ mil?',
            options: [
              { id: 'a', text: '$36$ kr', isCorrect: false },
              { id: 'b', text: '$54$ kr', isCorrect: true },
              { id: 'c', text: '$60$ kr', isCorrect: false },
              { id: 'd', text: '$27$ kr', isCorrect: false },
            ],
            solution: 'Forbruk: $1{,}8 \\cdot 20 = 36$ kWh. Kostnad: $36 \\cdot 1{,}50 = 54$ kr.',
          },
          {
            id: '8-9-3-n-quiz3-q2',
            task: 'Ost koster $120$ kr/kg. Hvor mye koster $350$ g?',
            options: [
              { id: 'a', text: '$35$ kr', isCorrect: false },
              { id: 'b', text: '$42$ kr', isCorrect: true },
              { id: 'c', text: '$48$ kr', isCorrect: false },
              { id: 'd', text: '$120$ kr', isCorrect: false },
            ],
            solution: '$350 \\text{ g} = 0{,}35 \\text{ kg}$. Pris: $120 \\cdot 0{,}35 = 42$ kr.',
          },
        ],
      },
    },

    {
      id: '8-9-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Sammensatte enheter kombinerer to eller flere grunnenheter og beskriver forholdet mellom dem.

| Størrelse | Formel | Enhet | Omgjøring |
|-----------|--------|-------|-----------|
| Fart | $v = \\frac{s}{t}$ | km/t, m/s | km/t $\\div 3{,}6$ = m/s |
| Tetthet | $\\rho = \\frac{m}{V}$ | g/cm$^3$, kg/m$^3$ | g/cm$^3$ $\\times 1000$ = kg/m$^3$ |
| Pris/enhet | Pris $\\div$ mengde | kr/kg, kr/L | Sammenlign ved å dele |

**Nøkkelprinsipper:**
- **«Per»** betyr «delt på»: km/**t** = kilometer **delt på** timer
- Bruk **enhetsanalyse** for å sjekke beregninger: enhetene skal «forkortes bort» til den enheten du ønsker
- Fra km/t til m/s: del med $3{,}6$. Fra m/s til km/t: gang med $3{,}6$
- Gjenstander med tetthet under $1 \\text{ g/cm}^3$ flyter i vann
- For å sammenligne priser: regn ut pris per enhet`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.4 NARRATIV: Praktiske oppgaver med måleenheter
// ============================================================================

export const CHAPTER_8_9_4_NARRATIV: TextbookChapter = {
  id: '8-9-4-narrativ',
  courseId: '8',
  chapterNumber: '9.4',
  title: 'Praktiske oppgaver med måleenheter',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av praktiske problemer der vi kombinerer ulike måleenheter -- fra matlaging og bygging til reiser og økonomi -- der alt vi har lært settes ut i livet.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke og gjere om mellom ulike måleiningar',
  ],
  linkedChapterId: '8-9-4',
  content: [
    {
      id: '8-9-4-n-intro',
      type: 'text',
      content: `## Alt henger sammen

I de forrige kapitlene lærte vi om lengdeenheter, arealenheter, volumenheter og sammensatte enheter -- hver for seg. Men i virkeligheten dukker de opp **sammen** i oppgaver. Du trenger kanskje å beregne volumet av en dam i liter, finne vekten av vannet, og deretter regne ut kostnaden for å fylle den.

Dette kapittelet handler om å **kombinere** alt vi har lært. Vi skal løse problemer fra ulike deler av hverdagen:
- Byggeprosjekter (areal, volum, materialkostnader)
- Reiser (fart, tid, strekning, drivstoff)
- Matlaging (oppskrifter, omregning av mengder)
- Økonomi (priser, forbruk, sammenligning)

Nøkkelen er å **jobbe systematisk**: identifiser hvilke enheter du har, hvilke du trenger, og gjør om steg for steg.`,
    },

    {
      id: '8-9-4-n-section1',
      type: 'text',
      content: `## Byggeprosjekter -- fra mål til materialer

Tenk deg at familien skal bygge en platting i hagen. Plattingen skal være $4$ m lang, $3$ m bred og bestå av terrassebord.

**Steg 1: Areal**
$A = 4 \\cdot 3 = 12 \\text{ m}^2$

**Steg 2: Materialbehov**
Terrassebordene er $12 \\text{ cm} = 0{,}12 \\text{ m}$ brede. Antall bord i bredden: $\\frac{3}{0{,}12} = 25$ bord. Hvert bord er $4$ m langt. Totalt trenger vi $25$ bord à $4$ m.

**Steg 3: Kostnad**
Terrassebord koster $89$ kr per meter. Totalt: $25 \\cdot 4 \\cdot 89 = 8900$ kr.

La oss ta et annet eksempel: **Betonggulv i garasjen**. Garasjen er $6$ m $\\times$ $4$ m, og betongen skal være $10$ cm $= 0{,}1$ m tykk.

Volum betong: $V = 6 \\cdot 4 \\cdot 0{,}1 = 2{,}4 \\text{ m}^3$.

Betong veier ca. $2400 \\text{ kg/m}^3$. Vekt: $2{,}4 \\cdot 2400 = 5760 \\text{ kg} = 5{,}76$ tonn.

Betong selges for $1200$ kr/m$^3$. Kostnad: $2{,}4 \\cdot 1200 = 2880$ kr.

Legg merke til at vi måtte gjøre om $10$ cm til $0{,}1$ m for at alle målene skulle ha **samme enhet** -- det er den vanligste kilden til feil!`,
    },

    {
      id: '8-9-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-9-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på byggeprosjekter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-4-n-quiz1-q0',
            task: 'Et rom er $5$ m $\\times$ $4$ m. Gulvet skal males med maling som dekker $8 \\text{ m}^2$ per liter. Malingen koster $350$ kr for $3$ L. Hvor mye koster malingen for hele gulvet?',
            options: [
              { id: 'a', text: '$350$ kr', isCorrect: true },
              { id: 'b', text: '$700$ kr', isCorrect: false },
              { id: 'c', text: '$1050$ kr', isCorrect: false },
              { id: 'd', text: '$233$ kr', isCorrect: false },
            ],
            solution: 'Areal: $20 \\text{ m}^2$. Malingbehov: $\\frac{20}{8} = 2{,}5$ L. Vi trenger $1$ boks à $3$ L ($350$ kr) siden $2{,}5 < 3$.',
          },
          {
            id: '8-9-4-n-quiz1-q1',
            task: 'Et sandlag på $8$ cm skal legges over et areal på $15 \\text{ m}^2$. Sand veier $1500 \\text{ kg/m}^3$. Hvor mye veier sanden?',
            options: [
              { id: 'a', text: '$180$ kg', isCorrect: false },
              { id: 'b', text: '$1800$ kg', isCorrect: true },
              { id: 'c', text: '$18\\,000$ kg', isCorrect: false },
              { id: 'd', text: '$1200$ kg', isCorrect: false },
            ],
            solution: '$V = 15 \\cdot 0{,}08 = 1{,}2 \\text{ m}^3$. Vekt: $1{,}2 \\cdot 1500 = 1800 \\text{ kg} = 1{,}8$ tonn.',
          },
          {
            id: '8-9-4-n-quiz1-q2',
            task: 'En hage på $200 \\text{ m}^2$ skal gjødsles med $50$ g gjødsel per $\\text{m}^2$. Gjødsel selges i $5$ kg-sekker til $159$ kr. Hvor mange sekker trengs?',
            options: [
              { id: 'a', text: '$1$ sekk', isCorrect: false },
              { id: 'b', text: '$2$ sekker', isCorrect: true },
              { id: 'c', text: '$3$ sekker', isCorrect: false },
              { id: 'd', text: '$10$ sekker', isCorrect: false },
            ],
            solution: 'Total gjødsel: $200 \\cdot 50 = 10\\,000 \\text{ g} = 10 \\text{ kg}$. Antall sekker: $\\frac{10}{5} = 2$ sekker.',
          },
        ],
      },
    },

    {
      id: '8-9-4-n-section2',
      type: 'text',
      content: `## Reiser -- fart, tid og drivstoff

Reiseoppgaver kombinerer fart, strekning, tid og drivstoffkostnader. La oss ta en lengre oppgave:

**Biltur Oslo--Trondheim ($500$ km)**

Del 1 ($300$ km): motorvei med gjennomsnittsfart $80$ km/t.
Del 2 ($200$ km): landevei med gjennomsnittsfart $60$ km/t.

**Tid:**
- Del 1: $t_1 = \\frac{300}{80} = 3{,}75 \\text{ t} = 3 \\text{ t } 45 \\text{ min}$
- Del 2: $t_2 = \\frac{200}{60} = 3{,}\\overline{3} \\text{ t} \\approx 3 \\text{ t } 20 \\text{ min}$
- Totalt: ca. $7$ timer $5$ minutter kjøretid

**Drivstoff:**
Bilen bruker $0{,}65 \\text{ L/mil} = 0{,}065 \\text{ L/km}$.
Totalforbruk: $500 \\cdot 0{,}065 = 32{,}5$ L.
Bensin koster $21$ kr/L: $32{,}5 \\cdot 21 = 682{,}50$ kr.

**Gjennomsnittsfart for hele turen:**
Mange tror at snittet av $80$ og $60$ er $70$. Men det stemmer ikke! Vi kjørte **lengre** med $80$ km/t enn med $60$ km/t, men det tok **lengre tid** med $60$ km/t.

Riktig beregning: $v_{\\text{snitt}} = \\frac{\\text{total strekning}}{\\text{total tid}} = \\frac{500}{7{,}08} \\approx 70{,}6 \\text{ km/t}$.

I dette tilfellet er det tilfeldigvis nær $70$, men det er ikke fordi vi kan ta gjennomsnittet av fartene -- det er fordi strekningen var fordelt slik at det tilfeldigvis ga nesten samme svar.`,
    },

    {
      id: '8-9-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-9-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på reiseoppgaver:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-4-n-quiz2-q0',
            task: 'En syklist sykler $45$ km på $2$ timer og $15$ minutter. Hva er gjennomsnittsfarten?',
            options: [
              { id: 'a', text: '$22{,}5 \\text{ km/t}$', isCorrect: false },
              { id: 'b', text: '$20 \\text{ km/t}$', isCorrect: true },
              { id: 'c', text: '$18 \\text{ km/t}$', isCorrect: false },
              { id: 'd', text: '$25 \\text{ km/t}$', isCorrect: false },
            ],
            solution: '$2$ t $15$ min $= 2{,}25$ t. $v = \\frac{45}{2{,}25} = 20 \\text{ km/t}$.',
          },
          {
            id: '8-9-4-n-quiz2-q1',
            task: 'En elbil bruker $2$ kWh/mil. Strøm koster $1{,}20$ kr/kWh. En tilsvarende bensinbil bruker $0{,}6$ L/mil, og bensin koster $21$ kr/L. Hvor mye sparer du per mil med elbil?',
            options: [
              { id: 'a', text: '$10{,}20$ kr/mil', isCorrect: true },
              { id: 'b', text: '$8{,}40$ kr/mil', isCorrect: false },
              { id: 'c', text: '$12{,}60$ kr/mil', isCorrect: false },
              { id: 'd', text: '$5{,}00$ kr/mil', isCorrect: false },
            ],
            solution: 'Elbil: $2 \\cdot 1{,}20 = 2{,}40$ kr/mil. Bensinbil: $0{,}6 \\cdot 21 = 12{,}60$ kr/mil. Besparelse: $12{,}60 - 2{,}40 = 10{,}20$ kr/mil.',
          },
          {
            id: '8-9-4-n-quiz2-q2',
            task: 'Et tog kjører $180$ km med $120 \\text{ km/t}$ og deretter $120$ km med $80 \\text{ km/t}$. Hva er gjennomsnittsfarten?',
            options: [
              { id: 'a', text: '$100 \\text{ km/t}$', isCorrect: true },
              { id: 'b', text: '$96 \\text{ km/t}$', isCorrect: false },
              { id: 'c', text: '$104 \\text{ km/t}$', isCorrect: false },
              { id: 'd', text: '$90 \\text{ km/t}$', isCorrect: false },
            ],
            solution: 'Tid del 1: $\\frac{180}{120} = 1{,}5$ t. Tid del 2: $\\frac{120}{80} = 1{,}5$ t. Total: $\\frac{300}{3} = 100 \\text{ km/t}$.',
          },
        ],
      },
    },

    {
      id: '8-9-4-n-section3',
      type: 'text',
      content: `## Matlaging og hverdagsmatematikk

Til slutt noen eksempler fra kjøkkenet og hverdagen.

**Oppskriftsomregning:**
En oppskrift for $4$ personer bruker $600$ g kjøttdeig, $400$ g pasta og $3$ dL fløte. Du skal lage mat til $6$ personer. Faktoren er $\\frac{6}{4} = 1{,}5$.

- Kjøttdeig: $600 \\cdot 1{,}5 = 900 \\text{ g}$
- Pasta: $400 \\cdot 1{,}5 = 600 \\text{ g}$
- Fløte: $3 \\cdot 1{,}5 = 4{,}5 \\text{ dL}$

**Drikkevann:**
Et menneske trenger ca. $2$ L vann per dag. Hvor mye er det per år?
$2 \\cdot 365 = 730 \\text{ L} = 0{,}73 \\text{ m}^3$.

Vann koster ca. $40$ kr/m$^3$ i Norge. Årlig kostnad for drikkevannet: $0{,}73 \\cdot 40 \\approx 29$ kr. Ganske billig!

**Maling av et rom:**
Et rom er $4$ m $\\times$ $3$ m med takhøyde $2{,}5$ m. To kortvegger og to langvegger. Arealet av veggene (minus en dør på $2$ m $\\times$ $0{,}9$ m og et vindu på $1{,}2$ m $\\times$ $1$ m):

Veggareal: $2 \\cdot (4 \\cdot 2{,}5) + 2 \\cdot (3 \\cdot 2{,}5) = 20 + 15 = 35 \\text{ m}^2$.
Minus dør og vindu: $35 - 1{,}8 - 1{,}2 = 32 \\text{ m}^2$.

Malingen dekker $10 \\text{ m}^2$ per liter og skal ha to strøk: $\\frac{32 \\cdot 2}{10} = 6{,}4$ L.

Dette er hverdagsmatematikk -- en kombinasjon av lengde, areal, volum og enhetspriser.`,
    },

    {
      id: '8-9-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-9-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på hverdagsoppgaver:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-9-4-n-quiz3-q0',
            task: 'En oppskrift for $8$ boller bruker $4$ dL melk. Hvor mange liter melk trengs for $30$ boller?',
            options: [
              { id: 'a', text: '$1{,}2$ L', isCorrect: false },
              { id: 'b', text: '$1{,}5$ L', isCorrect: true },
              { id: 'c', text: '$2{,}0$ L', isCorrect: false },
              { id: 'd', text: '$0{,}75$ L', isCorrect: false },
            ],
            solution: 'Faktor: $\\frac{30}{8} = 3{,}75$. Melk: $4 \\cdot 3{,}75 = 15 \\text{ dL} = 1{,}5 \\text{ L}$.',
          },
          {
            id: '8-9-4-n-quiz3-q1',
            task: 'En svømmehall har et basseng som er $25$ m $\\times$ $12{,}5$ m $\\times$ $1{,}8$ m. Vann koster $40$ kr/$\\text{m}^3$. Hva koster det å fylle bassenget?',
            options: [
              { id: 'a', text: '$22\\,500$ kr', isCorrect: true },
              { id: 'b', text: '$56\\,250$ kr', isCorrect: false },
              { id: 'c', text: '$12\\,500$ kr', isCorrect: false },
              { id: 'd', text: '$9000$ kr', isCorrect: false },
            ],
            solution: '$V = 25 \\cdot 12{,}5 \\cdot 1{,}8 = 562{,}5 \\text{ m}^3$. Kostnad: $562{,}5 \\cdot 40 = 22\\,500$ kr.',
          },
          {
            id: '8-9-4-n-quiz3-q2',
            task: 'En jernkloss er $10$ cm $\\times$ $5$ cm $\\times$ $3$ cm. Jern har tetthet $7{,}87 \\text{ g/cm}^3$. Hva veier klossen?',
            options: [
              { id: 'a', text: '$1{,}18$ kg', isCorrect: true },
              { id: 'b', text: '$11{,}8$ kg', isCorrect: false },
              { id: 'c', text: '$0{,}118$ kg', isCorrect: false },
              { id: 'd', text: '$2{,}36$ kg', isCorrect: false },
            ],
            solution: '$V = 10 \\cdot 5 \\cdot 3 = 150 \\text{ cm}^3$. Masse: $150 \\cdot 7{,}87 = 1180{,}5 \\text{ g} \\approx 1{,}18 \\text{ kg}$.',
          },
        ],
      },
    },

    {
      id: '8-9-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett hvordan vi kombinerer alle typer måleenheter for å løse virkelige problemer.

**Nøkkelstrategi for sammensatte oppgaver:**
1. **Les oppgaven nøye** og identifiser hva du skal finne
2. **Skriv opp** alle gitte mål med enheter
3. **Gjør om** til samme enhetssystem (alt i meter, alt i cm, osv.)
4. **Beregn** steg for steg -- areal, volum, masse, kostnad
5. **Sjekk** at svaret er rimelig og har riktig enhet

**Vanlige feller:**
- Blande enheter ($3$ m $\\times$ $50$ cm -- husk å gjøre om først!)
- Glemme å kvadrere/kubere omregningsfaktoren for areal/volum
- Bruke feil retning i omgjøringen (gange i stedet for å dele)
- Glemme at gjennomsnittsfart $\\neq$ gjennomsnittet av fartene

**Enhetsanalyse er din venn:** Sjekk alltid at enhetene i beregningen gir mening. Hvis du ender opp med $\\text{m}^2$ når du skulle hatt $\\text{m}^3$, har du glemt en dimensjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_9_1_NARRATIV,
  CHAPTER_8_9_2_NARRATIV,
  CHAPTER_8_9_3_NARRATIV,
  CHAPTER_8_9_4_NARRATIV,
];
