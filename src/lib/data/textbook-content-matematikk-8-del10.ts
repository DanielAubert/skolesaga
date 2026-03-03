/**
 * Matematikk 8. klasse - Del 10: Sammensatte måleenheter (KM242)
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Kapittel 9.1: Lengdeenheter og arealenheter
 * Kapittel 9.2: Volumenheter og omgjøring
 * Kapittel 9.3: Sammensatte enheter (km/t, kg/m³, kr/kg)
 * Kapittel 9.4: Praktiske oppgaver med måleenheter
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Lengdeenheter og arealenheter
// ============================================================================

export const CHAPTER_8_9_1: TextbookChapter = {
  id: '8-9-1',
  courseId: '8',
  chapterNumber: '9.1',
  title: 'Lengdeenheter og arealenheter',
  description: 'Omgjøring mellom lengdeenheter (mm, cm, dm, m, km) og arealenheter (mm², cm², dm², m², km²).',
  estimatedMinutes: 40,
  competenceGoals: ['bruke og gjere om mellom ulike måleiningar'],
  content: [
    {
      id: '8-9-1-intro',
      type: 'text',
      content: `## Hvorfor trenger vi ulike måleenheter?

Når vi måler lengde, bruker vi ulike enheter avhengig av hva vi måler. Det gir ikke mening å oppgi avstanden mellom Oslo og Bergen i millimeter, like lite som det gir mening å måle tykkelsen på et hårstrå i kilometer.

I dette kapittelet repeterer og utvider vi kunnskapene om:
- **Lengdeenheter:** mm, cm, dm, m og km
- **Arealenheter:** mm², cm², dm², m² og km²
- Hvordan vi gjør om mellom enhetene

Det viktigste er å forstå **sammenhengen** mellom enhetene og å kunne gjøre om riktig.`,
    },
    {
      id: '8-9-1-def-1',
      type: 'definition',
      title: 'Lengdeenheter',
      content: `De vanligste lengdeenhetene og sammenhengen mellom dem:

$$1 \\text{ km} = 1000 \\text{ m}$$
$$1 \\text{ m} = 10 \\text{ dm}$$
$$1 \\text{ dm} = 10 \\text{ cm}$$
$$1 \\text{ cm} = 10 \\text{ mm}$$

Vi kan også skrive:
$$1 \\text{ m} = 100 \\text{ cm} = 1000 \\text{ mm}$$
$$1 \\text{ km} = 1000 \\text{ m} = 100\\,000 \\text{ cm}$$

**Huskeregel:** Mellom hver lengdeenhet er faktoren **10** (unntatt km til m, som er **1000**).

**Omgjøring:**
- Fra **stor** enhet til **liten** enhet: **ganger** med omregningsfaktoren.
- Fra **liten** enhet til **stor** enhet: **deler** med omregningsfaktoren.`,
    },
    {
      id: '8-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1 - Omgjøring av lengdeenheter',
      problem: `Gjør om:

a) $3{,}5 \\text{ m}$ til cm

b) $450 \\text{ mm}$ til cm

c) $2{,}75 \\text{ km}$ til m`,
      solution: `**a)** Vi vet at $1 \\text{ m} = 100 \\text{ cm}$. Vi går fra stor enhet til liten, altså ganger vi:

$$3{,}5 \\text{ m} = 3{,}5 \\cdot 100 \\text{ cm} = 350 \\text{ cm}$$

**b)** Vi vet at $1 \\text{ cm} = 10 \\text{ mm}$. Vi går fra liten enhet til stor, altså deler vi:

$$450 \\text{ mm} = \\frac{450}{10} \\text{ cm} = 45 \\text{ cm}$$

**c)** Vi vet at $1 \\text{ km} = 1000 \\text{ m}$. Vi går fra stor enhet til liten, altså ganger vi:

$$2{,}75 \\text{ km} = 2{,}75 \\cdot 1000 \\text{ m} = 2750 \\text{ m}$$`,
    },
    {
      id: '8-9-1-def-2',
      type: 'definition',
      title: 'Arealenheter',
      content: `Areal måler hvor stor en flate er. Siden areal er lengde ganget med lengde, blir omregningsfaktoren mellom arealenheter **kvadratet** av omregningsfaktoren for lengde.

$$1 \\text{ cm}^2 = 10 \\text{ mm} \\cdot 10 \\text{ mm} = 100 \\text{ mm}^2$$
$$1 \\text{ dm}^2 = 10 \\text{ cm} \\cdot 10 \\text{ cm} = 100 \\text{ cm}^2$$
$$1 \\text{ m}^2 = 10 \\text{ dm} \\cdot 10 \\text{ dm} = 100 \\text{ dm}^2$$
$$1 \\text{ m}^2 = 100 \\text{ cm} \\cdot 100 \\text{ cm} = 10\\,000 \\text{ cm}^2$$
$$1 \\text{ km}^2 = 1000 \\text{ m} \\cdot 1000 \\text{ m} = 1\\,000\\,000 \\text{ m}^2$$

**Huskeregel:** Mellom naboenhetene for areal er faktoren **100** (unntatt km² til m², som er **1 000 000**).

Andre vanlige arealenheter:
- $1 \\text{ ar} = 100 \\text{ m}^2$ (en firkant på $10 \\text{ m} \\times 10 \\text{ m}$)
- $1 \\text{ dekar (mål)} = 1000 \\text{ m}^2$
- $1 \\text{ hektar (ha)} = 10\\,000 \\text{ m}^2$ (en firkant på $100 \\text{ m} \\times 100 \\text{ m}$)`,
    },
    {
      id: '8-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2 - Omgjøring av arealenheter',
      problem: `Gjør om:

a) $5 \\text{ m}^2$ til cm²

b) $3200 \\text{ mm}^2$ til cm²

c) $0{,}5 \\text{ km}^2$ til m²`,
      solution: `**a)** Vi vet at $1 \\text{ m}^2 = 10\\,000 \\text{ cm}^2$:

$$5 \\text{ m}^2 = 5 \\cdot 10\\,000 \\text{ cm}^2 = 50\\,000 \\text{ cm}^2$$

**b)** Vi vet at $1 \\text{ cm}^2 = 100 \\text{ mm}^2$:

$$3200 \\text{ mm}^2 = \\frac{3200}{100} \\text{ cm}^2 = 32 \\text{ cm}^2$$

**c)** Vi vet at $1 \\text{ km}^2 = 1\\,000\\,000 \\text{ m}^2$:

$$0{,}5 \\text{ km}^2 = 0{,}5 \\cdot 1\\,000\\,000 \\text{ m}^2 = 500\\,000 \\text{ m}^2$$`,
    },
    {
      id: '8-9-1-tip-1',
      type: 'tip',
      title: 'Enhetstrappa',
      content: `En god måte å huske omgjøringene på er å tenke på en **enhetstrapp**:

**Lengde:** km → m → dm → cm → mm

Mellom hvert trinn ganger du med 10 (nedover) eller deler med 10 (oppover). Unntaket er km → m der faktoren er 1000.

**Areal:** km² → m² → dm² → cm² → mm²

Mellom hvert trinn ganger du med 100 (nedover) eller deler med 100 (oppover). Unntaket er km² → m² der faktoren er 1 000 000.

**Tips:** Arealtfaktoren er alltid **kvadratet** av lengdefaktoren. Lengde: $\\times 10$, Areal: $\\times 10^2 = 100$.`,
    },
    {
      id: '8-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3 - Blanding av enheter',
      problem: `Et rektangel har lengde $2{,}5 \\text{ m}$ og bredde $80 \\text{ cm}$. Finn arealet i m² og i cm².`,
      solution: `**Løsning:**

Vi må først sørge for at begge målene har **samme enhet** før vi regner ut arealet.

**Metode 1 – regn i meter:**
$$80 \\text{ cm} = 0{,}80 \\text{ m}$$
$$A = 2{,}5 \\text{ m} \\cdot 0{,}80 \\text{ m} = 2{,}0 \\text{ m}^2$$

**Metode 2 – regn i centimeter:**
$$2{,}5 \\text{ m} = 250 \\text{ cm}$$
$$A = 250 \\text{ cm} \\cdot 80 \\text{ cm} = 20\\,000 \\text{ cm}^2$$

**Kontroll:** $2{,}0 \\text{ m}^2 = 2{,}0 \\cdot 10\\,000 \\text{ cm}^2 = 20\\,000 \\text{ cm}^2$ ✓`,
    },
    {
      id: '8-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør om mellom enhetene.',
        subTasks: [
          { label: 'a', task: '$3{,}5 \\text{ m} = \\text{? cm}$', solution: '$3{,}5 \\cdot 100 = 350 \\text{ cm}$', answer: 350 },
          { label: 'b', task: '$720 \\text{ mm} = \\text{? cm}$', solution: '$720 \\div 10 = 72 \\text{ cm}$', answer: 72 },
          { label: 'c', task: '$4{,}2 \\text{ km} = \\text{? m}$', solution: '$4{,}2 \\cdot 1000 = 4200 \\text{ m}$', answer: 4200 },
          { label: 'd', task: '$850 \\text{ cm} = \\text{? m}$', solution: '$850 \\div 100 = 8{,}5 \\text{ m}$', answer: 8.5 },
          { label: 'e', task: '$6500 \\text{ m} = \\text{? km}$', solution: '$6500 \\div 1000 = 6{,}5 \\text{ km}$', answer: 6.5 },
          { label: 'f', task: '$0{,}45 \\text{ m} = \\text{? mm}$', solution: '$0{,}45 \\cdot 1000 = 450 \\text{ mm}$', answer: 450 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['$1 \\text{ m} = 100 \\text{ cm} = 1000 \\text{ mm}$', '$1 \\text{ km} = 1000 \\text{ m}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør om mellom arealenhetene.',
        subTasks: [
          { label: 'a', task: '$3 \\text{ m}^2 = \\text{? cm}^2$', solution: '$3 \\cdot 10\\,000 = 30\\,000 \\text{ cm}^2$', answer: 30000 },
          { label: 'b', task: '$500 \\text{ mm}^2 = \\text{? cm}^2$', solution: '$500 \\div 100 = 5 \\text{ cm}^2$', answer: 5 },
          { label: 'c', task: '$2{,}5 \\text{ dm}^2 = \\text{? cm}^2$', solution: '$2{,}5 \\cdot 100 = 250 \\text{ cm}^2$', answer: 250 },
          { label: 'd', task: '$45\\,000 \\text{ cm}^2 = \\text{? m}^2$', solution: '$45\\,000 \\div 10\\,000 = 4{,}5 \\text{ m}^2$', answer: 4.5 },
          { label: 'e', task: '$0{,}8 \\text{ km}^2 = \\text{? m}^2$', solution: '$0{,}8 \\cdot 1\\,000\\,000 = 800\\,000 \\text{ m}^2$', answer: 800000 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Husk: mellom naboenhetene for areal er faktoren 100.', '$1 \\text{ m}^2 = 10\\,000 \\text{ cm}^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Sett inn riktig enhet:

a) Lengden av en blyant: $19$ ____

b) Avstanden mellom to byer: $85$ ____

c) Arealet av et klasserom: $60$ ____

d) Arealet av et frimerke: $5$ ____

e) Arealet av en fotballbane: $7000$ ____`,
        subTasks: [
          { label: 'a', task: 'Lengden av en blyant: $19$ ____', solution: 'cm' },
          { label: 'b', task: 'Avstanden mellom to byer: $85$ ____', solution: 'km' },
          { label: 'c', task: 'Arealet av et klasserom: $60$ ____', solution: 'm²' },
          { label: 'd', task: 'Arealet av et frimerke: $5$ ____', solution: 'cm²' },
          { label: 'e', task: 'Arealet av en fotballbane: $7000$ ____', solution: 'm²' },
        ],
        solution: 'a) cm, b) km, c) m², d) cm², e) m²',
        hints: ['Tenk på størrelsen på det du måler. Hva gir mening?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Et rektangulært bord er $1{,}2 \\text{ m}$ langt og $75 \\text{ cm}$ bredt.

a) Finn arealet av bordet i cm².
b) Finn arealet av bordet i m².
c) Gjør om svaret i a) til m² og kontroller at det stemmer med b).`,
        subTasks: [
          { label: 'a', task: 'Finn arealet i cm².', solution: '$120 \\text{ cm} \\cdot 75 \\text{ cm} = 9000 \\text{ cm}^2$', answer: 9000 },
          { label: 'b', task: 'Finn arealet i m².', solution: '$1{,}2 \\text{ m} \\cdot 0{,}75 \\text{ m} = 0{,}9 \\text{ m}^2$', answer: 0.9 },
          { label: 'c', task: 'Kontroller at svarene stemmer.', solution: '$9000 \\text{ cm}^2 \\div 10\\,000 = 0{,}9 \\text{ m}^2$ ✓' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Husk å gjøre om til samme enhet før du regner ut arealet.', '$1{,}2 \\text{ m} = 120 \\text{ cm}$ og $75 \\text{ cm} = 0{,}75 \\text{ m}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-9-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar hvorfor $1 \\text{ m}^2 \\neq 100 \\text{ cm}^2$, selv om $1 \\text{ m} = 100 \\text{ cm}$.

Bruk gjerne en tegning for å forklare.`,
        solution: `$1 \\text{ m}^2$ er arealet av et kvadrat med sider $1 \\text{ m} = 100 \\text{ cm}$.

$$1 \\text{ m}^2 = 100 \\text{ cm} \\times 100 \\text{ cm} = 10\\,000 \\text{ cm}^2$$

Når vi gjør om areal, må vi gjøre om **begge dimensjonene**. Tenk deg et kvadrat med side 1 m. Det er 100 cm langt og 100 cm bredt. Altså rommer det $100 \\times 100 = 10\\,000$ små kvadrater som hver er $1 \\text{ cm}^2$.

Derfor er omregningsfaktoren for areal **kvadratet** av omregningsfaktoren for lengde: $100^2 = 10\\,000$.`,
        hints: ['Tegn et kvadrat med side 1 m. Hvor mange ruter på 1 cm × 1 cm får du plass til?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-9-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En gårdbruker har en åker som er $250 \\text{ m}$ lang og $160 \\text{ m}$ bred.

a) Finn arealet av åkeren i m².
b) Gjør om arealet til dekar.
c) Gjør om arealet til hektar.
d) Gjør om arealet til km².`,
        subTasks: [
          { label: 'a', task: 'Finn arealet i m².', solution: '$250 \\cdot 160 = 40\\,000 \\text{ m}^2$', answer: 40000 },
          { label: 'b', task: 'Gjør om til dekar.', solution: '$40\\,000 \\div 1000 = 40 \\text{ dekar}$', answer: 40 },
          { label: 'c', task: 'Gjør om til hektar.', solution: '$40\\,000 \\div 10\\,000 = 4 \\text{ hektar}$', answer: 4 },
          { label: 'd', task: 'Gjør om til km².', solution: '$40\\,000 \\div 1\\,000\\,000 = 0{,}04 \\text{ km}^2$', answer: 0.04 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['$1 \\text{ dekar} = 1000 \\text{ m}^2$, $1 \\text{ hektar} = 10\\,000 \\text{ m}^2$, $1 \\text{ km}^2 = 1\\,000\\,000 \\text{ m}^2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-9-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Ranger disse arealene fra minst til størst:

$0{,}5 \\text{ m}^2$, $\\; 4500 \\text{ cm}^2$, $\\; 48 \\text{ dm}^2$, $\\; 520\\,000 \\text{ mm}^2$

Gjør om alle til cm² før du sammenligner.`,
        solution: `Vi gjør om alle til cm²:

- $0{,}5 \\text{ m}^2 = 0{,}5 \\cdot 10\\,000 = 5000 \\text{ cm}^2$
- $4500 \\text{ cm}^2 = 4500 \\text{ cm}^2$
- $48 \\text{ dm}^2 = 48 \\cdot 100 = 4800 \\text{ cm}^2$
- $520\\,000 \\text{ mm}^2 = 520\\,000 \\div 100 = 5200 \\text{ cm}^2$

Rangert fra minst til størst:
$$4500 \\text{ cm}^2 < 48 \\text{ dm}^2 < 0{,}5 \\text{ m}^2 < 520\\,000 \\text{ mm}^2$$`,
        hints: ['Gjør om alle til samme enhet, for eksempel cm², slik at du kan sammenligne direkte.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-9-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et hus har et gulvareal på $120 \\text{ m}^2$. Gulvet skal legges med fliser som er $30 \\text{ cm} \\times 30 \\text{ cm}$.

a) Finn arealet av én flis i cm².
b) Gjør om gulvarealet til cm².
c) Hvor mange fliser trengs det for å dekke hele gulvet?
d) Flisene selges i pakker med 25 stk. Hvor mange pakker må kjøpes?`,
        subTasks: [
          { label: 'a', task: 'Finn arealet av én flis.', solution: '$30 \\cdot 30 = 900 \\text{ cm}^2$', answer: 900 },
          { label: 'b', task: 'Gjør om gulvarealet til cm².', solution: '$120 \\cdot 10\\,000 = 1\\,200\\,000 \\text{ cm}^2$', answer: 1200000 },
          { label: 'c', task: 'Hvor mange fliser trengs?', solution: '$1\\,200\\,000 \\div 900 = 1333{,}3\\ldots \\approx 1334$ fliser (runder opp)', answer: 1334 },
          { label: 'd', task: 'Hvor mange pakker?', solution: '$1334 \\div 25 = 53{,}36 \\approx 54$ pakker (runder opp)', answer: 54 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Husk å runde opp til hele fliser og hele pakker - du kan ikke kjøpe halve fliser!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '8-9-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '8-9-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '8-9-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gjør om mellom lengdeenheter.',
            subTasks: [
              { label: 'a', task: '$3{,}2 \\text{ m}$ til cm', solution: '$3{,}2 \\cdot 100 = 320 \\text{ cm}$' },
              { label: 'b', task: '$5600 \\text{ mm}$ til m', solution: '$5600 \\div 1000 = 5{,}6 \\text{ m}$' },
              { label: 'c', task: '$0{,}45 \\text{ km}$ til m', solution: '$0{,}45 \\cdot 1000 = 450 \\text{ m}$' },
              { label: 'd', task: '$82 \\text{ cm}$ til mm', solution: '$82 \\cdot 10 = 820 \\text{ mm}$' },
              { label: 'e', task: '$7500 \\text{ m}$ til km', solution: '$7500 \\div 1000 = 7{,}5 \\text{ km}$' },
              { label: 'f', task: '$1{,}8 \\text{ dm}$ til cm', solution: '$1{,}8 \\cdot 10 = 18 \\text{ cm}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Fra stor til liten enhet: gang. Fra liten til stor enhet: del.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '8-9-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gjør om mellom arealenheter.',
            subTasks: [
              { label: 'a', task: '$5 \\text{ m}^2$ til cm²', solution: '$5 \\cdot 10\\,000 = 50\\,000 \\text{ cm}^2$' },
              { label: 'b', task: '$300 \\text{ cm}^2$ til dm²', solution: '$300 \\div 100 = 3 \\text{ dm}^2$' },
              { label: 'c', task: '$2{,}5 \\text{ dm}^2$ til cm²', solution: '$2{,}5 \\cdot 100 = 250 \\text{ cm}^2$' },
              { label: 'd', task: '$4\\,000\\,000 \\text{ m}^2$ til km²', solution: '$4\\,000\\,000 \\div 1\\,000\\,000 = 4 \\text{ km}^2$' },
              { label: 'e', task: '$0{,}08 \\text{ m}^2$ til cm²', solution: '$0{,}08 \\cdot 10\\,000 = 800 \\text{ cm}^2$' },
              { label: 'f', task: '$1{,}2 \\text{ km}^2$ til m²', solution: '$1{,}2 \\cdot 1\\,000\\,000 = 1\\,200\\,000 \\text{ m}^2$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Mellom naboenhetene for areal er faktoren 100 (unntatt km² til m² som er 1 000 000).'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '8-9-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gjør om mellom lengde- og arealenheter, og velg riktig enhet.',
            subTasks: [
              { label: 'a', task: '$4{,}7 \\text{ m}$ til dm', solution: '$4{,}7 \\cdot 10 = 47 \\text{ dm}$' },
              { label: 'b', task: '$12\\,500 \\text{ cm}^2$ til m²', solution: '$12\\,500 \\div 10\\,000 = 1{,}25 \\text{ m}^2$' },
              { label: 'c', task: 'Hvilken enhet passer best for arealet av et klasserom?', solution: '$\\text{m}^2$' },
              { label: 'd', task: '$3 \\text{ dekar}$ til m²', solution: '$3 \\cdot 1000 = 3000 \\text{ m}^2$' },
              { label: 'e', task: '$25\\,000 \\text{ m}^2$ til hektar', solution: '$25\\,000 \\div 10\\,000 = 2{,}5 \\text{ hektar}$' },
              { label: 'f', task: 'Hvilken enhet passer best for arealet av et frimerke?', solution: '$\\text{cm}^2$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['$1 \\text{ dekar} = 1000 \\text{ m}^2$, $1 \\text{ hektar} = 10\\,000 \\text{ m}^2$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '8-9-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut arealer og gjør om til riktig enhet.',
            subTasks: [
              { label: 'a', task: 'Et rektangel er $2{,}5 \\text{ m}$ langt og $80 \\text{ cm}$ bredt. Finn arealet i m².', solution: '$80 \\text{ cm} = 0{,}8 \\text{ m}$. $A = 2{,}5 \\cdot 0{,}8 = 2{,}0 \\text{ m}^2$' },
              { label: 'b', task: 'Et kvadrat har side $150 \\text{ cm}$. Finn arealet i m².', solution: '$150 \\text{ cm} = 1{,}5 \\text{ m}$. $A = 1{,}5^2 = 2{,}25 \\text{ m}^2$' },
              { label: 'c', task: 'En trekant har grunnlinje $4 \\text{ dm}$ og høyde $30 \\text{ cm}$. Finn arealet i cm².', solution: '$4 \\text{ dm} = 40 \\text{ cm}$. $A = \\frac{40 \\cdot 30}{2} = 600 \\text{ cm}^2$' },
              { label: 'd', task: 'En fotballbane er $105 \\text{ m} \\times 68 \\text{ m}$. Finn arealet i dekar.', solution: '$A = 105 \\cdot 68 = 7140 \\text{ m}^2 = 7{,}14 \\text{ dekar}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Gjør om til samme enhet før du regner ut arealet.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '8-9-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs praktiske problemer med enhetsomgjøring.',
            subTasks: [
              { label: 'a', task: 'Et rom er $5{,}2 \\text{ m} \\times 3{,}8 \\text{ m}$. Hvor mange fliser på $30 \\text{ cm} \\times 30 \\text{ cm}$ trengs for gulvet?', solution: '$A_{\\text{rom}} = 5{,}2 \\cdot 3{,}8 = 19{,}76 \\text{ m}^2 = 197\\,600 \\text{ cm}^2$. $A_{\\text{flis}} = 30 \\cdot 30 = 900 \\text{ cm}^2$. Antall: $197\\,600 \\div 900 \\approx 219{,}6 \\Rightarrow 220$ fliser.' },
              { label: 'b', task: 'En gårdseier har en tomt på $2{,}4 \\text{ hektar}$. Hvor mange dekar er dette?', solution: '$2{,}4 \\text{ hektar} = 2{,}4 \\cdot 10 = 24 \\text{ dekar}$' },
              { label: 'c', task: 'Et bilde er $25 \\text{ cm} \\times 18 \\text{ cm}$. Hvor stort er arealet i dm²?', solution: '$A = 25 \\cdot 18 = 450 \\text{ cm}^2 = 450 \\div 100 = 4{,}5 \\text{ dm}^2$' },
              { label: 'd', task: 'Norges areal er ca. $385\\,207 \\text{ km}^2$. Hvor mange m² er dette?', solution: '$385\\,207 \\cdot 1\\,000\\,000 = 385\\,207\\,000\\,000 \\text{ m}^2$' },
              { label: 'e', task: 'Et rektangulært teppe er $1{,}6 \\text{ m} \\times 2{,}4 \\text{ m}$. Prisen er 450 kr per m². Hva koster teppet?', solution: '$A = 1{,}6 \\cdot 2{,}4 = 3{,}84 \\text{ m}^2$. Pris: $3{,}84 \\cdot 450 = 1728 \\text{ kr}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Gjør om til samme enhet først, og husk å runde opp når du kjøper hele fliser.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '8-9-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver med lengde- og arealenheter.',
            subTasks: [
              { label: 'a', task: 'Et rektangulært rom har areal $24 \\text{ m}^2$. Lengden er $3 \\text{ m}$ mer enn bredden. Finn lengden og bredden.', solution: 'La bredden være $b$. Da er lengden $b + 3$. $b(b + 3) = 24 \\Rightarrow b^2 + 3b - 24 = 0$. Løser med ABC-formelen: $b = \\frac{-3 + \\sqrt{9 + 96}}{2} = \\frac{-3 + \\sqrt{105}}{2} \\approx 3{,}62 \\text{ m}$. Lengden: $3{,}62 + 3 = 6{,}62 \\text{ m}$.' },
              { label: 'b', task: 'En sirkelformet dam har diameter $14 \\text{ m}$. Regn ut arealet i m² og gjør om til ar.', solution: '$r = 7 \\text{ m}$. $A = \\pi \\cdot 7^2 = 49\\pi \\approx 153{,}9 \\text{ m}^2$. $153{,}9 \\div 100 \\approx 1{,}54 \\text{ ar}$.' },
              { label: 'c', task: 'Et kart har målestokk $1:50\\,000$. En strekning er $3{,}4 \\text{ cm}$ på kartet. Hvor lang er strekningen i virkeligheten (i km)?', solution: '$3{,}4 \\cdot 50\\,000 = 170\\,000 \\text{ cm} = 1\\,700 \\text{ m} = 1{,}7 \\text{ km}$' },
              { label: 'd', task: 'Et areal på kartet (målestokk $1:50\\,000$) er $2 \\text{ cm}^2$. Hvor stort er arealet i virkeligheten i km²?', solution: 'Arealskala: $(50\\,000)^2 = 2{,}5 \\cdot 10^9$. $2 \\cdot 2{,}5 \\cdot 10^9 = 5 \\cdot 10^9 \\text{ cm}^2 = 500\\,000 \\text{ m}^2 = 0{,}5 \\text{ km}^2$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['I målestokk-oppgaver ganges avstanden med målestokken. For areal ganges med målestokken i andre potens.'],
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
// Kapittel 9.2: Volumenheter og omgjøring
// ============================================================================

export const CHAPTER_8_9_2: TextbookChapter = {
  id: '8-9-2',
  courseId: '8',
  chapterNumber: '9.2',
  title: 'Volumenheter og omgjøring',
  description: 'Omgjøring mellom volumenheter (cm³, dm³, m³) og romenheter (liter, desiliter, milliliter).',
  estimatedMinutes: 40,
  competenceGoals: ['bruke og gjere om mellom ulike måleiningar'],
  content: [
    {
      id: '8-9-2-intro',
      type: 'text',
      content: `## Volum - tredimensjonale mål

Mens areal måler flater (to dimensjoner), måler **volum** hvor mye plass noe tar i tre dimensjoner. Volum handler om rominnhold - hvor mye som får plass inni noe.

Vi bruker volumenheter i mange situasjoner:
- Hvor mye vann er det i et svømmebasseng?
- Hvor stor er pakken som skal sendes?
- Hvor mye jord trengs til et blomsterbed?

I dette kapittelet lærer vi om:
- **Kubiske enheter:** cm³, dm³ og m³
- **Romenheter:** liter (L), desiliter (dL) og milliliter (mL)
- Sammenhengen mellom kubiske enheter og romenheter`,
    },
    {
      id: '8-9-2-def-1',
      type: 'definition',
      title: 'Kubiske enheter (volumenheter)',
      content: `Volum måler rominnhold i tre dimensjoner. Omregningsfaktoren mellom naboenhetene er **kuben** (tredje potens) av lengdefaktoren.

$$1 \\text{ cm}^3 = 10 \\text{ mm} \\cdot 10 \\text{ mm} \\cdot 10 \\text{ mm} = 1000 \\text{ mm}^3$$
$$1 \\text{ dm}^3 = 10 \\text{ cm} \\cdot 10 \\text{ cm} \\cdot 10 \\text{ cm} = 1000 \\text{ cm}^3$$
$$1 \\text{ m}^3 = 10 \\text{ dm} \\cdot 10 \\text{ dm} \\cdot 10 \\text{ dm} = 1000 \\text{ dm}^3$$

**Huskeregel:** Mellom naboenhetene for volum er faktoren alltid **1000**.

Vi kan også skrive:
$$1 \\text{ m}^3 = 1\\,000\\,000 \\text{ cm}^3$$

Faktoren er $10^3 = 1000$ mellom hvert trinn, fordi volum har **tre dimensjoner**.`,
    },
    {
      id: '8-9-2-def-2',
      type: 'definition',
      title: 'Romenheter (liter)',
      content: `I hverdagen bruker vi ofte **liter** for å måle volum, spesielt for væsker:

$$1 \\text{ L} = 10 \\text{ dL} = 100 \\text{ cL} = 1000 \\text{ mL}$$

**Den viktigste sammenhengen:**

$$\\boxed{1 \\text{ dm}^3 = 1 \\text{ L}}$$

Dette betyr at:
- $1 \\text{ cm}^3 = 1 \\text{ mL}$ (én kubikkcentimeter er én milliliter)
- $1 \\text{ dm}^3 = 1 \\text{ L}$ (én kubikkdesimeter er én liter)
- $1 \\text{ m}^3 = 1000 \\text{ L}$ (én kubikkmeter er tusen liter)

**Tips:** En kube med sider $1 \\text{ dm} = 10 \\text{ cm}$ rommer nøyaktig 1 liter. Tenk på en melkekartong!`,
    },
    {
      id: '8-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1 - Omgjøring av volumenheter',
      problem: `Gjør om:

a) $3{,}5 \\text{ L}$ til mL

b) $4500 \\text{ cm}^3$ til dm³

c) $2{,}8 \\text{ m}^3$ til liter`,
      solution: `**a)** Vi vet at $1 \\text{ L} = 1000 \\text{ mL}$:

$$3{,}5 \\text{ L} = 3{,}5 \\cdot 1000 \\text{ mL} = 3500 \\text{ mL}$$

**b)** Vi vet at $1 \\text{ dm}^3 = 1000 \\text{ cm}^3$:

$$4500 \\text{ cm}^3 = \\frac{4500}{1000} \\text{ dm}^3 = 4{,}5 \\text{ dm}^3$$

**c)** Vi vet at $1 \\text{ m}^3 = 1000 \\text{ L}$:

$$2{,}8 \\text{ m}^3 = 2{,}8 \\cdot 1000 \\text{ L} = 2800 \\text{ L}$$`,
    },
    {
      id: '8-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2 - Fra liter til kubiske enheter',
      problem: `En fiskebeholder rommer 50 liter. Hvor mange cm³ er dette?`,
      solution: `**Løsning:**

Vi bruker sammenhengen $1 \\text{ L} = 1 \\text{ dm}^3 = 1000 \\text{ cm}^3$:

$$50 \\text{ L} = 50 \\cdot 1000 \\text{ cm}^3 = 50\\,000 \\text{ cm}^3$$

Alternativt kan vi gå via dm³:
$$50 \\text{ L} = 50 \\text{ dm}^3$$
$$50 \\text{ dm}^3 = 50 \\cdot 1000 \\text{ cm}^3 = 50\\,000 \\text{ cm}^3$$`,
    },
    {
      id: '8-9-2-note-1',
      type: 'note',
      title: 'Lengde, areal og volum - omregningsfaktorer',
      content: `**Oversikt over omregningsfaktorer mellom naboenheter:**

| Type | Dimensjoner | Faktor | Eksempel |
|------|------------|--------|----------|
| Lengde | 1D | $\\times 10$ | $1 \\text{ dm} = 10 \\text{ cm}$ |
| Areal | 2D | $\\times 100$ | $1 \\text{ dm}^2 = 100 \\text{ cm}^2$ |
| Volum | 3D | $\\times 1000$ | $1 \\text{ dm}^3 = 1000 \\text{ cm}^3$ |

Mønsteret: Faktoren er $10^n$ der $n$ er antall dimensjoner.`,
    },
    {
      id: '8-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3 - Praktisk beregning',
      problem: `Et akvarium har form som et rektangulært prisme med lengde $60 \\text{ cm}$, bredde $30 \\text{ cm}$ og høyde $40 \\text{ cm}$.

a) Finn volumet i cm³.
b) Hvor mange liter vann rommer akvariet?
c) Vannet fylles til $5 \\text{ cm}$ under kanten. Hvor mange liter vann er det da i akvariet?`,
      solution: `**a)** Volum av rektangulært prisme:

$$V = l \\cdot b \\cdot h = 60 \\cdot 30 \\cdot 40 = 72\\,000 \\text{ cm}^3$$

**b)** Vi gjør om til liter ($1 \\text{ L} = 1000 \\text{ cm}^3$):

$$72\\,000 \\text{ cm}^3 = \\frac{72\\,000}{1000} \\text{ L} = 72 \\text{ L}$$

**c)** Vannhøyden er $40 - 5 = 35 \\text{ cm}$:

$$V_{\\text{vann}} = 60 \\cdot 30 \\cdot 35 = 63\\,000 \\text{ cm}^3 = 63 \\text{ L}$$`,
    },
    {
      id: '8-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-9-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør om mellom enhetene.',
        subTasks: [
          { label: 'a', task: '$5 \\text{ L} = \\text{? dL}$', solution: '$5 \\cdot 10 = 50 \\text{ dL}$', answer: 50 },
          { label: 'b', task: '$2{,}5 \\text{ L} = \\text{? mL}$', solution: '$2{,}5 \\cdot 1000 = 2500 \\text{ mL}$', answer: 2500 },
          { label: 'c', task: '$300 \\text{ mL} = \\text{? dL}$', solution: '$300 \\div 100 = 3 \\text{ dL}$', answer: 3 },
          { label: 'd', task: '$45 \\text{ dL} = \\text{? L}$', solution: '$45 \\div 10 = 4{,}5 \\text{ L}$', answer: 4.5 },
          { label: 'e', task: '$8000 \\text{ mL} = \\text{? L}$', solution: '$8000 \\div 1000 = 8 \\text{ L}$', answer: 8 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['$1 \\text{ L} = 10 \\text{ dL} = 1000 \\text{ mL}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-9-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør om mellom kubiske enheter og liter.',
        subTasks: [
          { label: 'a', task: '$3 \\text{ dm}^3 = \\text{? L}$', solution: '$1 \\text{ dm}^3 = 1 \\text{ L}$, altså $3 \\text{ dm}^3 = 3 \\text{ L}$', answer: 3 },
          { label: 'b', task: '$500 \\text{ cm}^3 = \\text{? mL}$', solution: '$1 \\text{ cm}^3 = 1 \\text{ mL}$, altså $500 \\text{ cm}^3 = 500 \\text{ mL}$', answer: 500 },
          { label: 'c', task: '$2 \\text{ m}^3 = \\text{? L}$', solution: '$1 \\text{ m}^3 = 1000 \\text{ L}$, altså $2 \\text{ m}^3 = 2000 \\text{ L}$', answer: 2000 },
          { label: 'd', task: '$750 \\text{ mL} = \\text{? cm}^3$', solution: '$1 \\text{ mL} = 1 \\text{ cm}^3$, altså $750 \\text{ mL} = 750 \\text{ cm}^3$', answer: 750 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['$1 \\text{ dm}^3 = 1 \\text{ L}$ og $1 \\text{ cm}^3 = 1 \\text{ mL}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-9-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Sett inn riktig enhet:

a) En bøtte rommer $10$ ____

b) En medisinsprøyte rommer $5$ ____

c) Et badekar rommer $200$ ____

d) Et svømmebasseng rommer $250$ ____`,
        subTasks: [
          { label: 'a', task: 'En bøtte rommer $10$ ____', solution: 'L (liter)' },
          { label: 'b', task: 'En medisinsprøyte rommer $5$ ____', solution: 'mL (milliliter)' },
          { label: 'c', task: 'Et badekar rommer $200$ ____', solution: 'L (liter)' },
          { label: 'd', task: 'Et svømmebasseng rommer $250$ ____', solution: 'm³ (kubikkmeter)' },
        ],
        solution: 'a) L, b) mL, c) L, d) m³',
        hints: ['Tenk på størrelsen av det du fyller. Hva virker rimelig?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-9-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `En kasse har form som et rektangulært prisme med lengde $50 \\text{ cm}$, bredde $30 \\text{ cm}$ og høyde $25 \\text{ cm}$.

a) Finn volumet i cm³.
b) Gjør om volumet til dm³.
c) Hvor mange liter rommer kassen?`,
        subTasks: [
          { label: 'a', task: 'Finn volumet i cm³.', solution: '$V = 50 \\cdot 30 \\cdot 25 = 37\\,500 \\text{ cm}^3$', answer: 37500 },
          { label: 'b', task: 'Gjør om til dm³.', solution: '$37\\,500 \\div 1000 = 37{,}5 \\text{ dm}^3$', answer: 37.5 },
          { label: 'c', task: 'Hvor mange liter?', solution: '$37{,}5 \\text{ dm}^3 = 37{,}5 \\text{ L}$', answer: 37.5 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Volumet av et rektangulært prisme er $V = l \\cdot b \\cdot h$.', '$1 \\text{ dm}^3 = 1000 \\text{ cm}^3 = 1 \\text{ L}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-9-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar med egne ord hvorfor $1 \\text{ m}^3 \\neq 100 \\text{ cm}^3$, men $1 \\text{ m}^3 = 1\\,000\\,000 \\text{ cm}^3$.`,
        solution: `$1 \\text{ m} = 100 \\text{ cm}$

$1 \\text{ m}^3$ er en kube med sider $1 \\text{ m} = 100 \\text{ cm}$.

$$1 \\text{ m}^3 = 100 \\text{ cm} \\times 100 \\text{ cm} \\times 100 \\text{ cm} = 1\\,000\\,000 \\text{ cm}^3$$

Akkurat som vi ganger to ganger for areal ($100 \\times 100 = 10\\,000$), må vi gange tre ganger for volum fordi volum har tre dimensjoner: lengde, bredde og høyde. $100^3 = 1\\,000\\,000$.`,
        hints: ['Tenk på en kube med side 1 m. Hvor mange cm er det langs hver side?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-9-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et basseng er $12 \\text{ m}$ langt, $6 \\text{ m}$ bredt og $1{,}8 \\text{ m}$ dypt.

a) Finn volumet i m³.
b) Hvor mange liter vann rommer bassenget?
c) En hageslange fyller $15$ liter per minutt. Hvor lang tid tar det å fylle bassenget? Oppgi svaret i timer og minutter.`,
        subTasks: [
          { label: 'a', task: 'Finn volumet i m³.', solution: '$V = 12 \\cdot 6 \\cdot 1{,}8 = 129{,}6 \\text{ m}^3$', answer: 129.6 },
          { label: 'b', task: 'Hvor mange liter?', solution: '$129{,}6 \\cdot 1000 = 129\\,600 \\text{ L}$', answer: 129600 },
          { label: 'c', task: 'Tid for å fylle bassenget.', solution: '$129\\,600 \\div 15 = 8640$ minutter $= 144$ timer $= 6$ døgn' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['$1 \\text{ m}^3 = 1000 \\text{ L}$', 'Del antall liter på liter per minutt for å finne antall minutter.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-9-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Ranger disse volumene fra minst til størst:

$2{,}5 \\text{ L}$, $\\; 3000 \\text{ cm}^3$, $\\; 0{,}003 \\text{ m}^3$, $\\; 28 \\text{ dL}$

Gjør om alle til mL (eller cm³) for å sammenligne.`,
        solution: `Vi gjør om alle til mL (som er det samme som cm³):

- $2{,}5 \\text{ L} = 2500 \\text{ mL}$
- $3000 \\text{ cm}^3 = 3000 \\text{ mL}$
- $0{,}003 \\text{ m}^3 = 0{,}003 \\cdot 1\\,000\\,000 \\text{ cm}^3 = 3000 \\text{ mL}$
- $28 \\text{ dL} = 28 \\cdot 100 \\text{ mL} = 2800 \\text{ mL}$

Rangert fra minst til størst:
$$2{,}5 \\text{ L} < 28 \\text{ dL} < 3000 \\text{ cm}^3 = 0{,}003 \\text{ m}^3$$`,
        hints: ['Gjør om alle til samme enhet for å kunne sammenligne direkte.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-9-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En terning har sider $15 \\text{ cm}$. Terningen fylles med vann og vannet helles over i flasker som rommer $3{,}3 \\text{ dL}$ hver.

a) Finn volumet av terningen i cm³.
b) Gjør om volumet til liter.
c) Gjør om flaskevolumet til liter.
d) Hvor mange flasker kan du fylle helt?`,
        subTasks: [
          { label: 'a', task: 'Finn volumet av terningen i cm³.', solution: '$V = 15^3 = 3375 \\text{ cm}^3$', answer: 3375 },
          { label: 'b', task: 'Gjør om til liter.', solution: '$3375 \\div 1000 = 3{,}375 \\text{ L}$', answer: 3.375 },
          { label: 'c', task: 'Gjør om flaskevolumet til liter.', solution: '$3{,}3 \\text{ dL} = 0{,}33 \\text{ L}$', answer: 0.33 },
          { label: 'd', task: 'Hvor mange flasker?', solution: '$3{,}375 \\div 0{,}33 \\approx 10{,}23$, altså **10 hele flasker**', answer: 10 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Volumet av en terning er $V = s^3$.', 'Husk å runde ned - du kan ikke fylle en flaske delvis.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '8-9-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '8-9-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '8-9-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gjør om mellom volumenheter.',
            subTasks: [
              { label: 'a', task: '$3 \\text{ L}$ til mL', solution: '$3 \\cdot 1000 = 3000 \\text{ mL}$' },
              { label: 'b', task: '$500 \\text{ mL}$ til dL', solution: '$500 \\div 100 = 5 \\text{ dL}$' },
              { label: 'c', task: '$2{,}5 \\text{ dL}$ til mL', solution: '$2{,}5 \\cdot 100 = 250 \\text{ mL}$' },
              { label: 'd', task: '$4200 \\text{ mL}$ til L', solution: '$4200 \\div 1000 = 4{,}2 \\text{ L}$' },
              { label: 'e', task: '$0{,}75 \\text{ L}$ til dL', solution: '$0{,}75 \\cdot 10 = 7{,}5 \\text{ dL}$' },
              { label: 'f', task: '$18 \\text{ dL}$ til L', solution: '$18 \\div 10 = 1{,}8 \\text{ L}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['$1 \\text{ L} = 10 \\text{ dL} = 100 \\text{ cL} = 1000 \\text{ mL}$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '8-9-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gjør om mellom cm³, dm³ og m³.',
            subTasks: [
              { label: 'a', task: '$5 \\text{ dm}^3$ til cm³', solution: '$5 \\cdot 1000 = 5000 \\text{ cm}^3$' },
              { label: 'b', task: '$3500 \\text{ cm}^3$ til dm³', solution: '$3500 \\div 1000 = 3{,}5 \\text{ dm}^3$' },
              { label: 'c', task: '$2 \\text{ m}^3$ til dm³', solution: '$2 \\cdot 1000 = 2000 \\text{ dm}^3$' },
              { label: 'd', task: '$800 \\text{ dm}^3$ til m³', solution: '$800 \\div 1000 = 0{,}8 \\text{ m}^3$' },
              { label: 'e', task: '$0{,}5 \\text{ m}^3$ til cm³', solution: '$0{,}5 \\cdot 1\\,000\\,000 = 500\\,000 \\text{ cm}^3$' },
              { label: 'f', task: '$4{,}2 \\text{ dm}^3$ til L', solution: '$4{,}2 \\text{ dm}^3 = 4{,}2 \\text{ L}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['$1 \\text{ dm}^3 = 1000 \\text{ cm}^3 = 1 \\text{ L}$. $1 \\text{ m}^3 = 1000 \\text{ dm}^3$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '8-9-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk sammenhengen mellom liter og kubikkenheter.',
            subTasks: [
              { label: 'a', task: '$7 \\text{ L}$ til cm³', solution: '$7 \\text{ L} = 7 \\text{ dm}^3 = 7000 \\text{ cm}^3$' },
              { label: 'b', task: '$250 \\text{ mL}$ til cm³', solution: '$250 \\text{ mL} = 250 \\text{ cm}^3$' },
              { label: 'c', task: '$1{,}5 \\text{ m}^3$ til L', solution: '$1{,}5 \\text{ m}^3 = 1500 \\text{ dm}^3 = 1500 \\text{ L}$' },
              { label: 'd', task: '$600 \\text{ cm}^3$ til dL', solution: '$600 \\text{ cm}^3 = 600 \\text{ mL} = 6 \\text{ dL}$' },
              { label: 'e', task: 'Velg riktig enhet: volumet av et akvarium.', solution: '$\\text{L}$ (eventuelt dm³)' },
              { label: 'f', task: 'Velg riktig enhet: volumet av en medisinsprøyte.', solution: '$\\text{mL}$ (eventuelt cm³)' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['$1 \\text{ cm}^3 = 1 \\text{ mL}$, $1 \\text{ dm}^3 = 1 \\text{ L}$, $1 \\text{ m}^3 = 1000 \\text{ L}$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '8-9-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn ut volum og gjør om til riktig enhet.',
            subTasks: [
              { label: 'a', task: 'En eske er $30 \\text{ cm} \\times 20 \\text{ cm} \\times 15 \\text{ cm}$. Finn volumet i liter.', solution: '$V = 30 \\cdot 20 \\cdot 15 = 9000 \\text{ cm}^3 = 9000 \\text{ mL} = 9 \\text{ L}$' },
              { label: 'b', task: 'Et basseng er $5 \\text{ m} \\times 3 \\text{ m} \\times 1{,}2 \\text{ m}$. Hvor mange liter vann rommer det?', solution: '$V = 5 \\cdot 3 \\cdot 1{,}2 = 18 \\text{ m}^3 = 18\\,000 \\text{ L}$' },
              { label: 'c', task: 'En terning har side $4 \\text{ dm}$. Finn volumet i liter.', solution: '$V = 4^3 = 64 \\text{ dm}^3 = 64 \\text{ L}$' },
              { label: 'd', task: 'Et sylinderglass har volum $3{,}5 \\text{ dL}$. Hvor mange glass fyller $2{,}1 \\text{ L}$?', solution: '$2{,}1 \\text{ L} = 21 \\text{ dL}$. $21 \\div 3{,}5 = 6$ glass.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['$V = l \\cdot b \\cdot h$ for et rektangulært prisme. Bruk sammenhengen $1 \\text{ dm}^3 = 1 \\text{ L}$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '8-9-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs praktiske volumoppgaver.',
            subTasks: [
              { label: 'a', task: 'En vannkran fyller $8 \\text{ L}$ per minutt. Hvor lang tid tar det å fylle et badekar på $150 \\text{ L}$?', solution: '$150 \\div 8 = 18{,}75 \\text{ min} \\approx 18 \\text{ min } 45 \\text{ s}$' },
              { label: 'b', task: 'En akvarietank er $60 \\text{ cm} \\times 30 \\text{ cm} \\times 40 \\text{ cm}$. Tanken fylles til $\\frac{3}{4}$. Hvor mange liter vann er i tanken?', solution: '$V_{\\text{full}} = 60 \\cdot 30 \\cdot 40 = 72\\,000 \\text{ cm}^3 = 72 \\text{ L}$. $\\frac{3}{4} \\cdot 72 = 54 \\text{ L}$' },
              { label: 'c', task: 'Du har $2 \\text{ m}^3$ sand. Hvor mange bøtter med volum $12 \\text{ L}$ kan du fylle?', solution: '$2 \\text{ m}^3 = 2000 \\text{ L}$. $2000 \\div 12 \\approx 166{,}7$, altså $166$ hele bøtter.' },
              { label: 'd', task: 'En melkekartong er $7 \\text{ cm} \\times 7 \\text{ cm} \\times 20{,}4 \\text{ cm}$. Stemmer det at den rommer $1 \\text{ L}$?', solution: '$V = 7 \\cdot 7 \\cdot 20{,}4 = 999{,}6 \\text{ cm}^3 \\approx 1000 \\text{ mL} = 1 \\text{ L}$. Ja, det stemmer.' },
              { label: 'e', task: 'En tankbil rommer $15 \\text{ m}^3$ diesel. Hvor mange liter er dette?', solution: '$15 \\text{ m}^3 = 15 \\cdot 1000 = 15\\,000 \\text{ L}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Gjør om alle enheter til liter eller cm³ for å sammenligne.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '8-9-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver med volumenheter.',
            subTasks: [
              { label: 'a', task: 'En sylinder har radius $10 \\text{ cm}$ og høyde $25 \\text{ cm}$. Finn volumet i liter. Bruk $\\pi \\approx 3{,}14$.', solution: '$V = \\pi r^2 h = 3{,}14 \\cdot 10^2 \\cdot 25 = 7850 \\text{ cm}^3 = 7{,}85 \\text{ L}$' },
              { label: 'b', task: 'En kube med side $s$ har volum $27 \\text{ dm}^3$. Finn $s$ og gjør om til cm.', solution: '$s^3 = 27 \\Rightarrow s = 3 \\text{ dm} = 30 \\text{ cm}$' },
              { label: 'c', task: 'Et svømmebasseng er $25 \\text{ m} \\times 12{,}5 \\text{ m} \\times 2 \\text{ m}$. Det fylles med en slange som gir $120 \\text{ L/min}$. Hvor mange timer tar det å fylle bassenget?', solution: '$V = 25 \\cdot 12{,}5 \\cdot 2 = 625 \\text{ m}^3 = 625\\,000 \\text{ L}$. $t = \\frac{625\\,000}{120} \\approx 5208 \\text{ min} \\approx 86{,}8 \\text{ timer}$' },
              { label: 'd', task: 'To terninger har sider på henholdsvis $2 \\text{ dm}$ og $4 \\text{ dm}$. Hvor mange ganger større er volumet av den store terningen?', solution: '$V_1 = 2^3 = 8 \\text{ dm}^3$. $V_2 = 4^3 = 64 \\text{ dm}^3$. $\\frac{64}{8} = 8$ ganger større.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Volumet av en sylinder er $V = \\pi r^2 h$. Når siden dobles, øker volumet $2^3 = 8$ ganger.'],
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
// Kapittel 9.3: Sammensatte enheter
// ============================================================================

export const CHAPTER_8_9_3: TextbookChapter = {
  id: '8-9-3',
  courseId: '8',
  chapterNumber: '9.3',
  title: 'Sammensatte enheter',
  description: 'Fart (km/t, m/s), tetthet (kg/m³, g/cm³) og pris per enhet (kr/kg, kr/L).',
  estimatedMinutes: 45,
  competenceGoals: ['bruke og gjere om mellom ulike måleiningar'],
  content: [
    {
      id: '8-9-3-intro',
      type: 'text',
      content: `## Hva er en sammensatt enhet?

Noen størrelser beskrives med enheter som er satt sammen av to eller flere grunnenheter. Disse kalles **sammensatte enheter**.

Eksempler du kjenner fra hverdagen:
- **Fart:** kilometer per time (km/t) eller meter per sekund (m/s)
- **Tetthet:** kilogram per kubikkmeter (kg/m³) eller gram per kubikkcentimeter (g/cm³)
- **Pris:** kroner per kilogram (kr/kg) eller kroner per liter (kr/L)

Alle disse har formen **«noe» per «noe annet»**, og skrives med en brøkstrek eller skråstrek.

I dette kapittelet lærer vi å:
- Forstå hva sammensatte enheter betyr
- Bruke formler med sammensatte enheter
- Gjøre om mellom ulike sammensatte enheter`,
    },
    {
      id: '8-9-3-def-1',
      type: 'definition',
      title: 'Fart',
      content: `**Fart** forteller oss hvor langt noe beveger seg per tidsenhet.

$$\\text{fart} = \\frac{\\text{strekning}}{\\text{tid}}$$

Eller med symboler:

$$v = \\frac{s}{t}$$

der $v$ er farten, $s$ er strekningen og $t$ er tiden.

Vi kan også skrive om formelen:
$$s = v \\cdot t \\qquad \\text{og} \\qquad t = \\frac{s}{v}$$

**Vanlige enheter for fart:**
- $\\text{km/t}$ (kilometer per time) - brukes om biler, sykler, fly
- $\\text{m/s}$ (meter per sekund) - brukes i fysikk og om vind
- $\\text{m/min}$ (meter per minutt) - brukes om gange`,
    },
    {
      id: '8-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1 - Beregne fart, strekning og tid',
      problem: `a) En bil kjører $180 \\text{ km}$ på $2{,}5$ timer. Hva er gjennomsnittsfarten?

b) En syklist sykler med farten $20 \\text{ km/t}$ i $45$ minutter. Hvor langt kommer syklisten?

c) Hvor lang tid bruker et tog som kjører $120 \\text{ km/t}$ på å tilbakelegge $450 \\text{ km}$?`,
      solution: `**a)** Vi bruker formelen $v = \\frac{s}{t}$:

$$v = \\frac{180}{2{,}5} = 72 \\text{ km/t}$$

**b)** Vi må først gjøre om $45$ minutter til timer: $45 \\text{ min} = \\frac{45}{60} \\text{ t} = 0{,}75 \\text{ t}$

$$s = v \\cdot t = 20 \\cdot 0{,}75 = 15 \\text{ km}$$

**c)** Vi bruker formelen $t = \\frac{s}{v}$:

$$t = \\frac{450}{120} = 3{,}75 \\text{ t} = 3 \\text{ t } 45 \\text{ min}$$`,
    },
    {
      id: '8-9-3-def-2',
      type: 'definition',
      title: 'Omregning mellom km/t og m/s',
      content: `For å gjøre om mellom km/t og m/s bruker vi:

$$1 \\text{ km/t} = \\frac{1000 \\text{ m}}{3600 \\text{ s}} = \\frac{1}{3{,}6} \\text{ m/s}$$

Dermed:

$$\\boxed{\\text{km/t} \\div 3{,}6 = \\text{m/s}}$$
$$\\boxed{\\text{m/s} \\times 3{,}6 = \\text{km/t}}$$

**Eksempler:**
- $90 \\text{ km/t} = \\frac{90}{3{,}6} = 25 \\text{ m/s}$
- $10 \\text{ m/s} = 10 \\cdot 3{,}6 = 36 \\text{ km/t}$

**Huskeregel:** Del med $3{,}6$ når du går fra den \"store\" enheten (km/t) til den \"lille\" (m/s). Gang med $3{,}6$ den andre veien.`,
    },
    {
      id: '8-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2 - Omregning mellom km/t og m/s',
      problem: `a) En bil kjører $80 \\text{ km/t}$. Hva er farten i m/s?

b) En sprinter løper $12 \\text{ m/s}$. Hva er farten i km/t?

c) Fartsgrensen i en skolesone er $30 \\text{ km/t}$. Hva er det i m/s?`,
      solution: `**a)** Fra km/t til m/s: del med $3{,}6$:

$$80 \\div 3{,}6 \\approx 22{,}2 \\text{ m/s}$$

**b)** Fra m/s til km/t: gang med $3{,}6$:

$$12 \\cdot 3{,}6 = 43{,}2 \\text{ km/t}$$

**c)** Fra km/t til m/s: del med $3{,}6$:

$$30 \\div 3{,}6 \\approx 8{,}3 \\text{ m/s}$$

En bil i en skolesone kjører altså ca. $8{,}3$ meter i sekundet. Det betyr at for hvert sekund en sjåfør er uoppmerksom, beveger bilen seg over 8 meter!`,
    },
    {
      id: '8-9-3-def-3',
      type: 'definition',
      title: 'Tetthet',
      content: `**Tetthet** (massetetthet) forteller oss hvor mye masse det er per volumenhet av et stoff.

$$\\text{tetthet} = \\frac{\\text{masse}}{\\text{volum}}$$

Eller med symboler:

$$\\rho = \\frac{m}{V}$$

der $\\rho$ (rho) er tettheten, $m$ er massen og $V$ er volumet.

Vi kan skrive om formelen:
$$m = \\rho \\cdot V \\qquad \\text{og} \\qquad V = \\frac{m}{\\rho}$$

**Vanlige enheter:**
- $\\text{kg/m}^3$ (kilogram per kubikkmeter)
- $\\text{g/cm}^3$ (gram per kubikkcentimeter)

**Sammenhengen:** $1 \\text{ g/cm}^3 = 1000 \\text{ kg/m}^3$

**Eksempler på tetthet:**
- Vann: $1{,}0 \\text{ g/cm}^3 = 1000 \\text{ kg/m}^3$
- Jern: $7{,}87 \\text{ g/cm}^3$
- Luft: $1{,}2 \\text{ kg/m}^3$`,
    },
    {
      id: '8-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3 - Tetthet',
      problem: `En jernklump har masse $394 \\text{ g}$ og volum $50 \\text{ cm}^3$.

a) Finn tettheten til jernklumpen i g/cm³.
b) Gjør om tettheten til kg/m³.
c) En annen jernklump har volum $120 \\text{ cm}^3$. Hva er massen?`,
      solution: `**a)** $\\rho = \\frac{m}{V} = \\frac{394}{50} = 7{,}88 \\text{ g/cm}^3$

**b)** $1 \\text{ g/cm}^3 = 1000 \\text{ kg/m}^3$, altså:

$$7{,}88 \\text{ g/cm}^3 = 7{,}88 \\cdot 1000 = 7880 \\text{ kg/m}^3$$

**c)** $m = \\rho \\cdot V = 7{,}88 \\cdot 120 = 945{,}6 \\text{ g} \\approx 946 \\text{ g}$`,
    },
    {
      id: '8-9-3-text-2',
      type: 'text',
      content: `## Pris per enhet

En annen viktig sammensatt enhet er **pris per enhet**, som vi bruker når vi handler:
- **kr/kg** (kroner per kilogram) - for frukt, grønnsaker, kjøtt
- **kr/L** (kroner per liter) - for bensin, melk, brus
- **kr/stk** (kroner per stykk) - for enkeltgjenstander

For å finne ut hvilken vare som er billigst, regner vi ut **enhetsprisen** (prisen per kg, per liter, osv.):

$$\\text{enhetspris} = \\frac{\\text{totalpris}}{\\text{mengde}}$$`,
    },
    {
      id: '8-9-3-example-4',
      type: 'example',
      title: 'Eksempel 4 - Enhetspris',
      problem: `I butikken finner du to pakker med ost:
- Pakke A: $750 \\text{ g}$ til $89$ kr
- Pakke B: $1{,}2 \\text{ kg}$ til $135$ kr

Hvilken pakke er billigst per kilogram?`,
      solution: `**Løsning:**

Vi regner ut kiloprisen for begge:

**Pakke A:** Først gjør vi om til kg: $750 \\text{ g} = 0{,}75 \\text{ kg}$
$$\\text{Kilopris}_A = \\frac{89}{0{,}75} \\approx 118{,}67 \\text{ kr/kg}$$

**Pakke B:**
$$\\text{Kilopris}_B = \\frac{135}{1{,}2} = 112{,}50 \\text{ kr/kg}$$

**Pakke B er billigst** per kilogram ($112{,}50$ kr/kg mot $118{,}67$ kr/kg).`,
    },
    {
      id: '8-9-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut fart, strekning eller tid.',
        subTasks: [
          { label: 'a', task: 'En bil kjører $240 \\text{ km}$ på $3$ timer. Finn farten.', solution: '$v = \\frac{240}{3} = 80 \\text{ km/t}$', answer: 80 },
          { label: 'b', task: 'En jogger løper med $8 \\text{ km/t}$ i $1{,}5$ timer. Finn strekningen.', solution: '$s = 8 \\cdot 1{,}5 = 12 \\text{ km}$', answer: 12 },
          { label: 'c', task: 'Hvor lang tid bruker en syklist på $60 \\text{ km}$ med fart $15 \\text{ km/t}$?', solution: '$t = \\frac{60}{15} = 4 \\text{ timer}$', answer: 4 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Bruk formelen $v = \\frac{s}{t}$, $s = v \\cdot t$, $t = \\frac{s}{v}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør om mellom km/t og m/s.',
        subTasks: [
          { label: 'a', task: '$108 \\text{ km/t} = \\text{? m/s}$', solution: '$108 \\div 3{,}6 = 30 \\text{ m/s}$', answer: 30 },
          { label: 'b', task: '$54 \\text{ km/t} = \\text{? m/s}$', solution: '$54 \\div 3{,}6 = 15 \\text{ m/s}$', answer: 15 },
          { label: 'c', task: '$5 \\text{ m/s} = \\text{? km/t}$', solution: '$5 \\cdot 3{,}6 = 18 \\text{ km/t}$', answer: 18 },
          { label: 'd', task: '$25 \\text{ m/s} = \\text{? km/t}$', solution: '$25 \\cdot 3{,}6 = 90 \\text{ km/t}$', answer: 90 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['km/t til m/s: del med $3{,}6$. m/s til km/t: gang med $3{,}6$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `En løper deltar i et mosjonsløp på $10 \\text{ km}$ og bruker $52$ minutter.

a) Gjør om tiden til timer.
b) Finn gjennomsnittsfarten i km/t.
c) Gjør om farten til m/s.`,
        subTasks: [
          { label: 'a', task: 'Gjør om til timer.', solution: '$52 \\text{ min} = \\frac{52}{60} \\approx 0{,}867 \\text{ t}$' },
          { label: 'b', task: 'Finn farten i km/t.', solution: '$v = \\frac{10}{0{,}867} \\approx 11{,}5 \\text{ km/t}$' },
          { label: 'c', task: 'Gjør om til m/s.', solution: '$11{,}5 \\div 3{,}6 \\approx 3{,}2 \\text{ m/s}$' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Husk å gjøre om minutter til timer: del antall minutter på 60.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `En kloss av et ukjent materiale har masse $540 \\text{ g}$ og volumet er $200 \\text{ cm}^3$.

a) Finn tettheten i g/cm³.
b) Gjør om tettheten til kg/m³.
c) Sammenlign med tettheten til vann ($1{,}0 \\text{ g/cm}^3$). Vil klossen flyte eller synke i vann?`,
        subTasks: [
          { label: 'a', task: 'Finn tettheten.', solution: '$\\rho = \\frac{540}{200} = 2{,}7 \\text{ g/cm}^3$', answer: 2.7 },
          { label: 'b', task: 'Gjør om til kg/m³.', solution: '$2{,}7 \\cdot 1000 = 2700 \\text{ kg/m}^3$', answer: 2700 },
          { label: 'c', task: 'Flyter eller synker den?', solution: 'Klossen har tetthet $2{,}7 \\text{ g/cm}^3$, som er høyere enn vannets tetthet $1{,}0 \\text{ g/cm}^3$. Klossen vil derfor **synke** i vann.' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['$\\rho = \\frac{m}{V}$', 'Gjenstander med tetthet høyere enn $1{,}0 \\text{ g/cm}^3$ synker i vann.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-9-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Du skal handle appelsinjuice. Butikken har tre alternativer:
- Liten kartong: $0{,}5 \\text{ L}$ for $18$ kr
- Stor kartong: $1{,}5 \\text{ L}$ for $42$ kr
- Flaske: $1 \\text{ L}$ for $32$ kr

a) Finn literprisen for hvert alternativ.
b) Hvilket alternativ er billigst per liter?
c) Hvis du trenger $3$ liter, hva er den billigste måten å kjøpe det på?`,
        subTasks: [
          { label: 'a', task: 'Finn literprisene.', solution: 'Liten: $\\frac{18}{0{,}5} = 36$ kr/L. Stor: $\\frac{42}{1{,}5} = 28$ kr/L. Flaske: $\\frac{32}{1} = 32$ kr/L.' },
          { label: 'b', task: 'Billigst per liter?', solution: 'Den store kartongen er billigst: $28$ kr/L.' },
          { label: 'c', task: 'Billigste kombinasjon for 3 L?', solution: '$2 \\times$ stor kartong = $3 \\text{ L}$ for $84$ kr. Det er billigere enn $3 \\times$ flaske ($96$ kr) eller $6 \\times$ liten ($108$ kr).' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Enhetspris = totalpris delt på mengde.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-9-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et tog kjører fra Oslo til Bergen. Strekningen er $496 \\text{ km}$. Toget bruker $6$ timer og $40$ minutter.

a) Finn gjennomsnittsfarten i km/t.
b) Gjør om til m/s.
c) Underveis passerer toget en tunnel som er $1{,}2 \\text{ km}$ lang. Toget kjører $60 \\text{ km/t}$ gjennom tunnelen. Hvor lang tid tar det å kjøre gjennom tunnelen? Oppgi svaret i minutter og sekunder.`,
        subTasks: [
          { label: 'a', task: 'Gjennomsnittsfart i km/t.', solution: '$t = 6 \\text{ t } 40 \\text{ min} = 6\\frac{2}{3} \\text{ t} \\approx 6{,}667 \\text{ t}$. $v = \\frac{496}{6{,}667} \\approx 74{,}4 \\text{ km/t}$' },
          { label: 'b', task: 'Gjør om til m/s.', solution: '$74{,}4 \\div 3{,}6 \\approx 20{,}7 \\text{ m/s}$' },
          { label: 'c', task: 'Tid gjennom tunnelen.', solution: '$t = \\frac{1{,}2}{60} = 0{,}02 \\text{ t} = 0{,}02 \\cdot 60 = 1{,}2 \\text{ min} = 1 \\text{ min } 12 \\text{ s}$' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Gjør om 6 t 40 min til timer: $6 + \\frac{40}{60}$.', 'For å gjøre om desimaler av timer til minutter: gang med 60.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-9-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En gullbarre har dimensjonene $25 \\text{ cm} \\times 8 \\text{ cm} \\times 4 \\text{ cm}$. Tettheten til gull er $19{,}3 \\text{ g/cm}^3$.

a) Finn volumet av gullbarren i cm³.
b) Finn massen i gram.
c) Gjør om massen til kilogram.
d) Gullprisen er ca. $650$ kr per gram. Hva er verdien av barren?`,
        subTasks: [
          { label: 'a', task: 'Finn volumet.', solution: '$V = 25 \\cdot 8 \\cdot 4 = 800 \\text{ cm}^3$', answer: 800 },
          { label: 'b', task: 'Finn massen i gram.', solution: '$m = \\rho \\cdot V = 19{,}3 \\cdot 800 = 15\\,440 \\text{ g}$', answer: 15440 },
          { label: 'c', task: 'Gjør om til kg.', solution: '$15\\,440 \\text{ g} = 15{,}44 \\text{ kg}$', answer: 15.44 },
          { label: 'd', task: 'Finn verdien.', solution: '$15\\,440 \\cdot 650 = 10\\,036\\,000$ kr, altså ca. $10$ millioner kroner' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Bruk $m = \\rho \\cdot V$ for å finne massen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-9-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En elv renner med en fart på $2 \\text{ m/s}$. En robåt kan ro med farten $5 \\text{ m/s}$ i stille vann. Elven er $1{,}5 \\text{ km}$ lang.

a) Hva er båtens fart når den ror **med** strømmen? Oppgi svaret i m/s og km/t.
b) Hva er båtens fart når den ror **mot** strømmen? Oppgi svaret i m/s og km/t.
c) Hvor lang tid bruker båten på å ro de $1{,}5 \\text{ km}$ med strømmen? Oppgi i minutter.
d) Hvor lang tid bruker båten mot strømmen? Oppgi i minutter.`,
        subTasks: [
          { label: 'a', task: 'Fart med strømmen.', solution: '$5 + 2 = 7 \\text{ m/s} = 7 \\cdot 3{,}6 = 25{,}2 \\text{ km/t}$' },
          { label: 'b', task: 'Fart mot strømmen.', solution: '$5 - 2 = 3 \\text{ m/s} = 3 \\cdot 3{,}6 = 10{,}8 \\text{ km/t}$' },
          { label: 'c', task: 'Tid med strømmen.', solution: '$1{,}5 \\text{ km} = 1500 \\text{ m}$. $t = \\frac{1500}{7} \\approx 214 \\text{ s} \\approx 3{,}6 \\text{ min}$' },
          { label: 'd', task: 'Tid mot strømmen.', solution: '$t = \\frac{1500}{3} = 500 \\text{ s} \\approx 8{,}3 \\text{ min}$' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Med strømmen: fartene legges sammen. Mot strømmen: strømfarten trekkes fra.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '8-9-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '8-9-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '8-9-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gjør om mellom km/t og m/s.',
            subTasks: [
              { label: 'a', task: '$90 \\text{ km/t}$ til m/s', solution: '$90 \\div 3{,}6 = 25 \\text{ m/s}$' },
              { label: 'b', task: '$15 \\text{ m/s}$ til km/t', solution: '$15 \\cdot 3{,}6 = 54 \\text{ km/t}$' },
              { label: 'c', task: '$36 \\text{ km/t}$ til m/s', solution: '$36 \\div 3{,}6 = 10 \\text{ m/s}$' },
              { label: 'd', task: '$8 \\text{ m/s}$ til km/t', solution: '$8 \\cdot 3{,}6 = 28{,}8 \\text{ km/t}$' },
              { label: 'e', task: '$120 \\text{ km/t}$ til m/s', solution: '$120 \\div 3{,}6 \\approx 33{,}3 \\text{ m/s}$' },
              { label: 'f', task: '$340 \\text{ m/s}$ (lydens hastighet) til km/t', solution: '$340 \\cdot 3{,}6 = 1224 \\text{ km/t}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['km/t til m/s: del med $3{,}6$. m/s til km/t: gang med $3{,}6$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '8-9-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk sammenhengen $v = \\frac{s}{t}$ til å finne fart, strekning eller tid.',
            subTasks: [
              { label: 'a', task: 'En bil kjører $240 \\text{ km}$ på $3 \\text{ timer}$. Finn farten.', solution: '$v = \\frac{240}{3} = 80 \\text{ km/t}$' },
              { label: 'b', task: 'En syklist sykler i $45 \\text{ km/t}$ i $2 \\text{ timer}$. Hvor langt?', solution: '$s = 45 \\cdot 2 = 90 \\text{ km}$' },
              { label: 'c', task: 'En løper løper $5000 \\text{ m}$ med fart $4 \\text{ m/s}$. Hvor lang tid?', solution: '$t = \\frac{5000}{4} = 1250 \\text{ s} = 20 \\text{ min } 50 \\text{ s}$' },
              { label: 'd', task: 'En tog kjører $180 \\text{ km}$ med fart $90 \\text{ km/t}$. Finn tiden.', solution: '$t = \\frac{180}{90} = 2 \\text{ timer}$' },
              { label: 'e', task: 'En jogger løper i $8 \\text{ km/t}$ i $45 \\text{ min}$. Hvor langt?', solution: '$45 \\text{ min} = 0{,}75 \\text{ t}$. $s = 8 \\cdot 0{,}75 = 6 \\text{ km}$' },
              { label: 'f', task: 'Et fly flyr $850 \\text{ km/t}$ i $2{,}5 \\text{ timer}$. Finn strekningen.', solution: '$s = 850 \\cdot 2{,}5 = 2125 \\text{ km}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['$v = \\frac{s}{t}$, $s = v \\cdot t$, $t = \\frac{s}{v}$. Husk å gjøre om minutter til timer ved å dele på 60.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '8-9-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn med enhetspriser (kr/kg, kr/L, kr/stk).',
            subTasks: [
              { label: 'a', task: '3 kg epler koster 59,70 kr. Finn kiloprisen.', solution: '$\\frac{59{,}70}{3} = 19{,}90 \\text{ kr/kg}$' },
              { label: 'b', task: '2 L melk koster 39,80 kr. Finn literprisen.', solution: '$\\frac{39{,}80}{2} = 19{,}90 \\text{ kr/L}$' },
              { label: 'c', task: 'Bananer koster 24,90 kr/kg. Hva koster 1,5 kg?', solution: '$24{,}90 \\cdot 1{,}5 = 37{,}35 \\text{ kr}$' },
              { label: 'd', task: 'Bensin koster 19,50 kr/L. Hva koster 42 L?', solution: '$19{,}50 \\cdot 42 = 819 \\text{ kr}$' },
              { label: 'e', task: 'Hvilken pakke er billigst per kg: 400 g ost til 59 kr eller 750 g ost til 99 kr?', solution: '400 g: $\\frac{59}{0{,}4} = 147{,}50$ kr/kg. 750 g: $\\frac{99}{0{,}75} = 132$ kr/kg. 750 g-pakken er billigst.' },
              { label: 'f', task: 'Strømpris er 1,20 kr/kWh. Hvor mye koster det å bruke en 2000 W varmeovn i 5 timer?', solution: '$2000 \\text{ W} = 2 \\text{ kW}$. $E = 2 \\cdot 5 = 10 \\text{ kWh}$. Pris: $10 \\cdot 1{,}20 = 12 \\text{ kr}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Enhetspris = totalpris delt på mengde. Husk å gjøre om gram til kilogram.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '8-9-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Regn med tetthet ($\\rho = \\frac{m}{V}$).',
            subTasks: [
              { label: 'a', task: 'En gjenstand har masse $540 \\text{ g}$ og volum $200 \\text{ cm}^3$. Finn tettheten.', solution: '$\\rho = \\frac{540}{200} = 2{,}7 \\text{ g/cm}^3$' },
              { label: 'b', task: 'Flyter gjenstanden i a) i vann ($\\rho_{\\text{vann}} = 1{,}0 \\text{ g/cm}^3$)?', solution: 'Nei, $2{,}7 > 1{,}0$, så gjenstanden synker.' },
              { label: 'c', task: 'En gullbarre har masse $1 \\text{ kg}$ og tetthet $19{,}3 \\text{ g/cm}^3$. Finn volumet.', solution: '$V = \\frac{m}{\\rho} = \\frac{1000}{19{,}3} \\approx 51{,}8 \\text{ cm}^3$' },
              { label: 'd', task: 'En beholder rommer $500 \\text{ cm}^3$ honning. Tettheten til honning er $1{,}4 \\text{ g/cm}^3$. Finn massen i gram.', solution: '$m = \\rho \\cdot V = 1{,}4 \\cdot 500 = 700 \\text{ g}$' },
              { label: 'e', task: 'Olje har tetthet $0{,}85 \\text{ g/cm}^3$. Hva veier $2 \\text{ L}$ olje?', solution: '$2 \\text{ L} = 2000 \\text{ cm}^3$. $m = 0{,}85 \\cdot 2000 = 1700 \\text{ g} = 1{,}7 \\text{ kg}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['$\\rho = \\frac{m}{V}$, $m = \\rho \\cdot V$, $V = \\frac{m}{\\rho}$. Gjenstander med tetthet over $1{,}0 \\text{ g/cm}^3$ synker i vann.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '8-9-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sammensatte enheter i praksis.',
            subTasks: [
              { label: 'a', task: 'En bil bruker $0{,}6 \\text{ L/mil}$. Hvor mange liter trengs for en tur på $35 \\text{ mil}$?', solution: '$0{,}6 \\cdot 35 = 21 \\text{ L}$' },
              { label: 'b', task: 'Bensin koster $19{,}50 \\text{ kr/L}$. Hva koster turen i a)?', solution: '$21 \\cdot 19{,}50 = 409{,}50 \\text{ kr}$' },
              { label: 'c', task: 'Et tog bruker $45 \\text{ min}$ på $120 \\text{ km}$. Finn farten i km/t.', solution: '$45 \\text{ min} = 0{,}75 \\text{ t}$. $v = \\frac{120}{0{,}75} = 160 \\text{ km/t}$' },
              { label: 'd', task: 'Gjør om farten i c) til m/s.', solution: '$160 \\div 3{,}6 \\approx 44{,}4 \\text{ m/s}$' },
              { label: 'e', task: 'Et vannrør leverer $3{,}5 \\text{ L/s}$. Hvor mange m³ vann leveres på $1 \\text{ time}$?', solution: '$1 \\text{ t} = 3600 \\text{ s}$. $3{,}5 \\cdot 3600 = 12\\,600 \\text{ L} = 12{,}6 \\text{ m}^3$' },
              { label: 'f', task: 'Betong har tetthet $2{,}3 \\text{ tonn/m}^3$. Hva veier $0{,}5 \\text{ m}^3$ betong i kg?', solution: '$0{,}5 \\cdot 2{,}3 = 1{,}15 \\text{ tonn} = 1150 \\text{ kg}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Bruk riktig formel: $v = \\frac{s}{t}$, $\\rho = \\frac{m}{V}$. Gjør om minutter til timer ved å dele på 60.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '8-9-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver med sammensatte enheter.',
            subTasks: [
              { label: 'a', task: 'En båt kjører $5 \\text{ m/s}$ i stille vann. Strømmen er $2 \\text{ m/s}$. Båten skal krysse en elv som er $200 \\text{ m}$ bred. Hvor lang tid tar det å krysse, og hvor langt nedstrøms driver båten?', solution: 'Tid å krysse: $t = \\frac{200}{5} = 40 \\text{ s}$. Drift nedstrøms: $s = 2 \\cdot 40 = 80 \\text{ m}$.' },
              { label: 'b', task: 'En blanding lages med $3 \\text{ dL}$ saft ($\\rho = 1{,}05 \\text{ g/cm}^3$) og $9 \\text{ dL}$ vann ($\\rho = 1{,}0 \\text{ g/cm}^3$). Finn massen av blandingen.', solution: '$3 \\text{ dL} = 300 \\text{ cm}^3$, $9 \\text{ dL} = 900 \\text{ cm}^3$. $m = 300 \\cdot 1{,}05 + 900 \\cdot 1{,}0 = 315 + 900 = 1215 \\text{ g}$' },
              { label: 'c', task: 'To biler starter fra samme sted. Bil A kjører nordover i $80 \\text{ km/t}$, bil B kjører østover i $60 \\text{ km/t}$. Hvor langt fra hverandre er de etter $1{,}5 \\text{ timer}$?', solution: 'Bil A: $80 \\cdot 1{,}5 = 120 \\text{ km}$. Bil B: $60 \\cdot 1{,}5 = 90 \\text{ km}$. Avstand: $\\sqrt{120^2 + 90^2} = \\sqrt{14400 + 8100} = \\sqrt{22500} = 150 \\text{ km}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Tenk på hastigheter i ulike retninger separat. Bruk Pytagoras for avstand i rette vinkler.'],
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
// Kapittel 9.4: Praktiske oppgaver med måleenheter
// ============================================================================

export const CHAPTER_8_9_4: TextbookChapter = {
  id: '8-9-4',
  courseId: '8',
  chapterNumber: '9.4',
  title: 'Praktiske oppgaver med måleenheter',
  description: 'Hverdagsproblemer med matlaging, reiser og bygging der vi kombinerer ulike enheter i beregninger.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke og gjere om mellom ulike måleiningar'],
  content: [
    {
      id: '8-9-4-intro',
      type: 'text',
      content: `## Måleenheter i hverdagen

Vi har nå lært om lengde-, areal-, volum- og sammensatte enheter. I dette kapittelet skal vi bruke alt dette i **praktiske situasjoner** fra hverdagen.

Nøkkelen til å løse praktiske oppgaver med måleenheter er:
1. **Les oppgaven nøye** og finn ut hvilke enheter som er involvert.
2. **Gjør om til samme enhet** der det trengs, før du regner.
3. **Kontroller svaret** - er det rimelig? Gir enheten mening?

Vi skal jobbe med:
- **Matlaging** - oppskrifter, mengder og omregning
- **Reiser** - avstander, tid og fart
- **Bygging og oppussing** - areal, volum og materialer`,
    },
    {
      id: '8-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1 - Matlaging',
      problem: `En oppskrift på pannekaker til 4 personer krever:
- $3 \\text{ dL}$ melk
- $150 \\text{ g}$ hvetemel
- $2$ egg

Du skal lage pannekaker til 10 personer. Hvor mye trenger du av hver ingrediens?`,
      solution: `**Løsning:**

Vi må **skalere opp** oppskriften. Faktoren er $\\frac{10}{4} = 2{,}5$.

**Melk:** $3 \\text{ dL} \\cdot 2{,}5 = 7{,}5 \\text{ dL} = 0{,}75 \\text{ L}$

**Hvetemel:** $150 \\text{ g} \\cdot 2{,}5 = 375 \\text{ g}$

**Egg:** $2 \\cdot 2{,}5 = 5$ egg

Du trenger altså $7{,}5 \\text{ dL}$ melk ($0{,}75 \\text{ L}$), $375 \\text{ g}$ hvetemel og $5$ egg.`,
    },
    {
      id: '8-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2 - Reise med ulike transportmidler',
      problem: `Ole skal reise $450 \\text{ km}$ fra byen sin til hytta. Han kjører bil med fart $80 \\text{ km/t}$ de første $300 \\text{ km}$, deretter tar han ferge med fart $30 \\text{ km/t}$ i $50 \\text{ km}$, og til slutt kjører han $100 \\text{ km}$ med fart $60 \\text{ km/t}$ på en fjellvei.

a) Finn tiden for hver del av reisen.
b) Finn den totale reisetiden.
c) Finn gjennomsnittsfarten for hele reisen.`,
      solution: `**a) Tid for hver del:**

**Bil:** $t_1 = \\frac{300}{80} = 3{,}75 \\text{ t} = 3 \\text{ t } 45 \\text{ min}$

**Ferge:** $t_2 = \\frac{50}{30} \\approx 1{,}667 \\text{ t} = 1 \\text{ t } 40 \\text{ min}$

**Fjellvei:** $t_3 = \\frac{100}{60} \\approx 1{,}667 \\text{ t} = 1 \\text{ t } 40 \\text{ min}$

**b) Total reisetid:**

$$t_{\\text{total}} = 3{,}75 + 1{,}667 + 1{,}667 \\approx 7{,}08 \\text{ t} \\approx 7 \\text{ t } 5 \\text{ min}$$

**c) Gjennomsnittsfart:**

$$v_{\\text{snitt}} = \\frac{s_{\\text{total}}}{t_{\\text{total}}} = \\frac{450}{7{,}08} \\approx 63{,}6 \\text{ km/t}$$

**Merk:** Gjennomsnittsfarten er **ikke** gjennomsnittet av de tre fartene! Vi deler total strekning på total tid.`,
    },
    {
      id: '8-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3 - Oppussing',
      problem: `Et rom er $4{,}5 \\text{ m}$ langt, $3{,}5 \\text{ m}$ bredt og $2{,}4 \\text{ m}$ høyt. Rommet har én dør ($0{,}9 \\text{ m} \\times 2{,}1 \\text{ m}$) og ett vindu ($1{,}2 \\text{ m} \\times 1{,}0 \\text{ m}$).

a) Finn arealet av gulvet.
b) Finn det totale arealet av de fire veggene (uten dør og vindu).
c) $1 \\text{ L}$ maling dekker $10 \\text{ m}^2$. Hvor mange liter maling trengs for å male veggene (to strøk)?`,
      solution: `**a) Gulvareal:**

$$A_{\\text{gulv}} = 4{,}5 \\cdot 3{,}5 = 15{,}75 \\text{ m}^2$$

**b) Veggareal:**

To lange vegger: $2 \\cdot (4{,}5 \\cdot 2{,}4) = 2 \\cdot 10{,}8 = 21{,}6 \\text{ m}^2$

To korte vegger: $2 \\cdot (3{,}5 \\cdot 2{,}4) = 2 \\cdot 8{,}4 = 16{,}8 \\text{ m}^2$

Totalt veggareal: $21{,}6 + 16{,}8 = 38{,}4 \\text{ m}^2$

Areal dør: $0{,}9 \\cdot 2{,}1 = 1{,}89 \\text{ m}^2$

Areal vindu: $1{,}2 \\cdot 1{,}0 = 1{,}2 \\text{ m}^2$

Veggareal som skal males: $38{,}4 - 1{,}89 - 1{,}2 = 35{,}31 \\text{ m}^2$

**c) Maling (to strøk):**

Totalt areal å male: $35{,}31 \\cdot 2 = 70{,}62 \\text{ m}^2$

Antall liter: $\\frac{70{,}62}{10} \\approx 7{,}1 \\text{ L}$

Du trenger minst **8 liter** maling (runder opp til hele liter).`,
    },
    {
      id: '8-9-4-warning-1',
      type: 'warning',
      title: 'Pass på enhetene!',
      content: `Den vanligste feilen i praktiske oppgaver er å blande enheter. Sørg alltid for at **alle tall har samme enhet** før du regner.

**Eksempel på feil:**
- Areal: $2 \\text{ m} \\cdot 50 \\text{ cm} = 100$ ← Hva er enheten? m²? cm²? Meningsløst!
- Riktig: $2 \\text{ m} \\cdot 0{,}5 \\text{ m} = 1 \\text{ m}^2$ eller $200 \\text{ cm} \\cdot 50 \\text{ cm} = 10\\,000 \\text{ cm}^2$

**Tips:** Skriv alltid enheten ved siden av hvert tall i utregningen. Da oppdager du fort om noe er feil.`,
    },
    {
      id: '8-9-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-9-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `En oppskrift på smoothie til 2 personer trenger:
- $2 \\text{ dL}$ yoghurt
- $1{,}5 \\text{ dL}$ appelsinjuice
- $1$ banan
- $100 \\text{ g}$ blåbær

Hvor mye trenger du av hver ingrediens til 5 personer?`,
        subTasks: [
          { label: 'a', task: 'Yoghurt', solution: '$2 \\cdot \\frac{5}{2} = 5 \\text{ dL}$' },
          { label: 'b', task: 'Appelsinjuice', solution: '$1{,}5 \\cdot 2{,}5 = 3{,}75 \\text{ dL}$' },
          { label: 'c', task: 'Bananer', solution: '$1 \\cdot 2{,}5 = 2{,}5$ bananer (3 bananer i praksis)' },
          { label: 'd', task: 'Blåbær', solution: '$100 \\cdot 2{,}5 = 250 \\text{ g}$', answer: 250 },
        ],
        solution: 'Faktoren er $\\frac{5}{2} = 2{,}5$. Gang alle mengder med $2{,}5$.',
        hints: ['Finn skalafaktoren: $\\frac{\\text{antall personer du lager til}}{\\text{antall i oppskriften}}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-9-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `En familie skal kjøre fra Stavanger til Kristiansand, en strekning på $230 \\text{ km}$. De kjører med gjennomsnittsfart $90 \\text{ km/t}$.

a) Hvor lang tid tar turen?
b) De tar en $20$ minutters pause underveis. Når er de framme hvis de starter kl. 09:00?`,
        subTasks: [
          { label: 'a', task: 'Finn kjøretiden.', solution: '$t = \\frac{230}{90} \\approx 2{,}56 \\text{ t} = 2 \\text{ t } 33 \\text{ min}$' },
          { label: 'b', task: 'Ankomsttid.', solution: '$2 \\text{ t } 33 \\text{ min} + 20 \\text{ min} = 2 \\text{ t } 53 \\text{ min}$. Avgang 09:00, ankomst ca. kl. **11:53**.' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['$t = \\frac{s}{v}$. Husk å legge til pausen!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-9-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `En snekker skal legge parkett i et rom som er $5{,}2 \\text{ m}$ langt og $4{,}0 \\text{ m}$ bredt.

a) Finn arealet av rommet i m².
b) Parketten selges i pakker som dekker $2{,}5 \\text{ m}^2$ hver. Hvor mange pakker trengs?
c) Hver pakke koster $399$ kr. Hva blir den totale kostnaden for parketten?
d) Snekkeren regner med $10\\%$ ekstra for kapp og svinn. Hvor mange pakker trengs da?`,
        subTasks: [
          { label: 'a', task: 'Finn arealet.', solution: '$A = 5{,}2 \\cdot 4{,}0 = 20{,}8 \\text{ m}^2$', answer: 20.8 },
          { label: 'b', task: 'Antall pakker.', solution: '$20{,}8 \\div 2{,}5 = 8{,}32$, altså **9 pakker** (runder opp)', answer: 9 },
          { label: 'c', task: 'Total kostnad.', solution: '$9 \\cdot 399 = 3591$ kr', answer: 3591 },
          { label: 'd', task: 'Med 10 % ekstra.', solution: '$20{,}8 \\cdot 1{,}10 = 22{,}88 \\text{ m}^2$. $22{,}88 \\div 2{,}5 = 9{,}15$, altså **10 pakker**', answer: 10 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Husk å runde opp til hele pakker.', 'Med svinn: gang arealet med $1{,}10$ (10 % ekstra).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-9-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `En vanntank har form som en sylinder med radius $50 \\text{ cm}$ og høyde $1{,}2 \\text{ m}$. (Volumet av en sylinder er $V = \\pi r^2 h$.)

a) Gjør om radius til meter.
b) Finn volumet i m³. Bruk $\\pi \\approx 3{,}14$.
c) Hvor mange liter rommer tanken?
d) Tanken fylles med en slange som leverer $20 \\text{ L/min}$. Hvor lang tid tar det å fylle tanken?`,
        subTasks: [
          { label: 'a', task: 'Radius i meter.', solution: '$50 \\text{ cm} = 0{,}50 \\text{ m}$', answer: 0.5 },
          { label: 'b', task: 'Volum i m³.', solution: '$V = 3{,}14 \\cdot 0{,}50^2 \\cdot 1{,}2 = 3{,}14 \\cdot 0{,}25 \\cdot 1{,}2 = 0{,}942 \\text{ m}^3$' },
          { label: 'c', task: 'Volum i liter.', solution: '$0{,}942 \\cdot 1000 = 942 \\text{ L}$' },
          { label: 'd', task: 'Tid for å fylle.', solution: '$\\frac{942}{20} = 47{,}1 \\text{ min} \\approx 47$ minutter' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Husk å gjøre om til samme enhet. $V = \\pi r^2 h$.', '$1 \\text{ m}^3 = 1000 \\text{ L}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-4-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-9-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Til en klassefest skal du lage $5 \\text{ L}$ saft. Blandingsforholdet er $1$ del saftkonsentrat til $6$ deler vann.

a) Hvor mange deler er det totalt?
b) Hvor mye saftkonsentrat trengs (i dL)?
c) Hvor mye vann trengs (i liter)?
d) En flaske saftkonsentrat rommer $0{,}5 \\text{ L}$. Har du nok med én flaske?`,
        subTasks: [
          { label: 'a', task: 'Antall deler totalt.', solution: '$1 + 6 = 7$ deler', answer: 7 },
          { label: 'b', task: 'Saftkonsentrat i dL.', solution: '$\\frac{1}{7} \\cdot 5 \\text{ L} \\approx 0{,}714 \\text{ L} \\approx 7{,}1 \\text{ dL}$' },
          { label: 'c', task: 'Vann i liter.', solution: '$\\frac{6}{7} \\cdot 5 \\approx 4{,}286 \\text{ L} \\approx 4{,}3 \\text{ L}$' },
          { label: 'd', task: 'Rekker én flaske?', solution: 'Du trenger ca. $0{,}71 \\text{ L}$ saftkonsentrat, men flasken rommer bare $0{,}5 \\text{ L}$. Nei, du trenger **to flasker**.' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Total mengde deles i 7 like deler. 1 del er saft, 6 deler er vann.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-4-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-9-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En familie planlegger en biltur fra Oslo til Trondheim ($490 \\text{ km}$). Bilen bruker $0{,}65 \\text{ L}$ bensin per mil ($10 \\text{ km}$). Bensinprisen er $18{,}50$ kr/L.

a) Hvor mange mil er strekningen?
b) Hvor mange liter bensin brukes på turen?
c) Hva koster bensinen for turen?
d) Bilen kjører med gjennomsnittsfart $85 \\text{ km/t}$. Familien tar to pauser på $15$ minutter. Når er de framme hvis de starter kl. 07:30?`,
        subTasks: [
          { label: 'a', task: 'Strekning i mil.', solution: '$490 \\div 10 = 49$ mil', answer: 49 },
          { label: 'b', task: 'Bensinforbruk.', solution: '$49 \\cdot 0{,}65 = 31{,}85 \\text{ L}$' },
          { label: 'c', task: 'Bensinkostnad.', solution: '$31{,}85 \\cdot 18{,}50 \\approx 589$ kr' },
          { label: 'd', task: 'Ankomsttid.', solution: 'Kjøretid: $\\frac{490}{85} \\approx 5{,}76 \\text{ t} = 5 \\text{ t } 46 \\text{ min}$. Pauser: $2 \\cdot 15 = 30$ min. Totalt: $6 \\text{ t } 16 \\text{ min}$. Avgang 07:30, ankomst ca. **kl. 13:46**.' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['$1$ mil $= 10$ km.', 'Husk å legge til pausene!'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-4-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-9-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En gartner skal fylle et opphøyd blomsterbed med jord. Bedet er formet som et rektangel med lengde $3 \\text{ m}$, bredde $1{,}2 \\text{ m}$ og dybde $40 \\text{ cm}$.

a) Gjør om dybden til meter.
b) Finn volumet av bedet i m³.
c) Jord selges i sekker på $50 \\text{ L}$ for $79$ kr per sekk. Hvor mange sekker trengs?
d) Hva er den totale kostnaden for jorden?
e) Jorden har tetthet $1200 \\text{ kg/m}^3$. Hva er den totale massen av jorden i kilogram?`,
        subTasks: [
          { label: 'a', task: 'Dybde i meter.', solution: '$40 \\text{ cm} = 0{,}40 \\text{ m}$', answer: 0.4 },
          { label: 'b', task: 'Volum i m³.', solution: '$V = 3 \\cdot 1{,}2 \\cdot 0{,}4 = 1{,}44 \\text{ m}^3$', answer: 1.44 },
          { label: 'c', task: 'Antall sekker.', solution: '$1{,}44 \\text{ m}^3 = 1440 \\text{ L}$. $1440 \\div 50 = 28{,}8$, altså **29 sekker**', answer: 29 },
          { label: 'd', task: 'Total kostnad.', solution: '$29 \\cdot 79 = 2291$ kr', answer: 2291 },
          { label: 'e', task: 'Total masse.', solution: '$m = 1200 \\cdot 1{,}44 = 1728 \\text{ kg}$', answer: 1728 },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['$1 \\text{ m}^3 = 1000 \\text{ L}$', 'Rund opp til hele sekker.', '$m = \\rho \\cdot V$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-9-4-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-9-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Mia jogger en runde i nabolaget. Hun bruker en GPS-klokke som viser:
- Total distanse: $5{,}4 \\text{ km}$
- Total tid: $32$ minutter
- Høyeste fart: $14 \\text{ km/t}$
- Laveste fart: $8 \\text{ km/t}$

a) Finn Mias gjennomsnittsfart i km/t.
b) Gjør om gjennomsnittsfarten til m/s.
c) Gjennomsnittsfarten er lavere enn gjennomsnittet av høyeste og laveste fart. Forklar hvorfor.
d) Mia vil forbedre tiden sin med $10\\%$. Hva må den nye tiden være, og hva blir den nye gjennomsnittsfarten?`,
        subTasks: [
          { label: 'a', task: 'Gjennomsnittsfart i km/t.', solution: '$t = \\frac{32}{60} \\approx 0{,}533 \\text{ t}$. $v = \\frac{5{,}4}{0{,}533} \\approx 10{,}1 \\text{ km/t}$' },
          { label: 'b', task: 'Gjør om til m/s.', solution: '$10{,}1 \\div 3{,}6 \\approx 2{,}8 \\text{ m/s}$' },
          { label: 'c', task: 'Forklar forskjellen.', solution: 'Gjennomsnitt av høyeste og laveste: $\\frac{14 + 8}{2} = 11 \\text{ km/t}$. Gjennomsnittsfarten ($10{,}1$ km/t) er lavere fordi Mia bruker mer tid på de langsomme delene enn på de raske. Gjennomsnittsfart er total strekning delt på total tid, ikke gjennomsnittet av fartene.' },
          { label: 'd', task: 'Ny tid og fart.', solution: 'Ny tid: $32 \\cdot 0{,}90 = 28{,}8 \\text{ min} \\approx 0{,}48 \\text{ t}$. Ny fart: $\\frac{5{,}4}{0{,}48} = 11{,}25 \\text{ km/t}$.' },
        ],
        solution: 'Se deloppgavene over.',
        hints: ['Gjennomsnittsfart = total strekning delt på total tid.', '$10\\%$ forbedring betyr $90\\%$ av opprinnelig tid.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '8-9-4-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '8-9-4-rep-1',
          type: 'exercise',
          exercise: {
            id: '8-9-4-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Velg riktig enhet og gjør enkle omgjøringer.',
            subTasks: [
              { label: 'a', task: 'Hvilken enhet passer best for vekten av en bil?', solution: '$\\text{kg}$ (eventuelt tonn)' },
              { label: 'b', task: 'Hvilken enhet passer for farten til en fotgjenger?', solution: '$\\text{km/t}$ (eller m/s)' },
              { label: 'c', task: '$3{,}5 \\text{ km}$ til m', solution: '$3{,}5 \\cdot 1000 = 3500 \\text{ m}$' },
              { label: 'd', task: '$7200 \\text{ mL}$ til L', solution: '$7200 \\div 1000 = 7{,}2 \\text{ L}$' },
              { label: 'e', task: '$45 \\text{ km/t}$ til m/s', solution: '$45 \\div 3{,}6 = 12{,}5 \\text{ m/s}$' },
              { label: 'f', task: '$2{,}4 \\text{ m}^2$ til cm²', solution: '$2{,}4 \\cdot 10\\,000 = 24\\,000 \\text{ cm}^2$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Tenk på hva som er rimelig størrelse for det du måler.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-4-rep-2',
          type: 'exercise',
          exercise: {
            id: '8-9-4-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn med enheter i hverdagssituasjoner.',
            subTasks: [
              { label: 'a', task: 'Du handler 2,5 kg poteter til 15,90 kr/kg. Hva koster potetene?', solution: '$2{,}5 \\cdot 15{,}90 = 39{,}75 \\text{ kr}$' },
              { label: 'b', task: 'En sykkeltur er 12 km. Du sykler i 20 km/t. Hvor lang tid bruker du?', solution: '$t = \\frac{12}{20} = 0{,}6 \\text{ t} = 36 \\text{ min}$' },
              { label: 'c', task: 'En oppskrift trenger 3 dL melk. Du skal lage dobbel porsjon. Hvor mange liter trenger du?', solution: '$3 \\cdot 2 = 6 \\text{ dL} = 0{,}6 \\text{ L}$' },
              { label: 'd', task: 'Et rom er 4 m langt og 3,5 m bredt. Hva er arealet i m²?', solution: '$A = 4 \\cdot 3{,}5 = 14 \\text{ m}^2$' },
              { label: 'e', task: 'Du fyller 35 L bensin til 19,80 kr/L. Hva betaler du?', solution: '$35 \\cdot 19{,}80 = 693 \\text{ kr}$' },
              { label: 'f', task: 'En løpetur tar 28 min for 5 km. Hva er farten i km/t?', solution: '$28 \\text{ min} = \\frac{28}{60} \\text{ t}$. $v = \\frac{5}{\\frac{28}{60}} = \\frac{5 \\cdot 60}{28} \\approx 10{,}7 \\text{ km/t}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Bruk formlene: pris = mengde $\\cdot$ enhetspris, $v = \\frac{s}{t}$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-4-rep-3',
          type: 'exercise',
          exercise: {
            id: '8-9-4-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Sammenlign størrelser ved å gjøre om til samme enhet.',
            subTasks: [
              { label: 'a', task: 'Hva er mest: $2{,}5 \\text{ L}$ eller $280 \\text{ mL}$?', solution: '$2{,}5 \\text{ L} = 2500 \\text{ mL}$. $2500 > 280$, så $2{,}5 \\text{ L}$ er mest.' },
              { label: 'b', task: 'Hva er lengst: $1{,}2 \\text{ km}$ eller $1150 \\text{ m}$?', solution: '$1{,}2 \\text{ km} = 1200 \\text{ m}$. $1200 > 1150$, så $1{,}2 \\text{ km}$ er lengst.' },
              { label: 'c', task: 'Hva er størst areal: $3 \\text{ m}^2$ eller $25\\,000 \\text{ cm}^2$?', solution: '$3 \\text{ m}^2 = 30\\,000 \\text{ cm}^2$. $30\\,000 > 25\\,000$, så $3 \\text{ m}^2$ er størst.' },
              { label: 'd', task: 'Hva er raskest: $60 \\text{ km/t}$ eller $18 \\text{ m/s}$?', solution: '$18 \\text{ m/s} = 18 \\cdot 3{,}6 = 64{,}8 \\text{ km/t}$. $64{,}8 > 60$, så $18 \\text{ m/s}$ er raskest.' },
              { label: 'e', task: 'Hva er billigst per kg: 500 g til 29 kr eller 1,2 kg til 65 kr?', solution: '500 g: $\\frac{29}{0{,}5} = 58$ kr/kg. 1,2 kg: $\\frac{65}{1{,}2} \\approx 54{,}17$ kr/kg. 1,2 kg-pakken er billigst.' },
              { label: 'f', task: 'Hva er tyngst: $3 \\text{ dm}^3$ jern ($\\rho = 7{,}8 \\text{ g/cm}^3$) eller $5 \\text{ dm}^3$ tre ($\\rho = 0{,}6 \\text{ g/cm}^3$)?', solution: 'Jern: $3000 \\cdot 7{,}8 = 23\\,400 \\text{ g}$. Tre: $5000 \\cdot 0{,}6 = 3000 \\text{ g}$. Jernet er tyngst.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Gjør om til samme enhet før du sammenligner.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-4-rep-4',
          type: 'exercise',
          exercise: {
            id: '8-9-4-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Praktisk oppgave: Planlegg en handletur.',
            subTasks: [
              { label: 'a', task: 'Du skal kjøpe: 1,5 kg kylling (89,90 kr/kg), 2 L melk (19,90 kr/L), 0,5 kg ost (109 kr/kg), og 3 brød (29,90 kr/stk). Regn ut totalprisen.', solution: 'Kylling: $1{,}5 \\cdot 89{,}90 = 134{,}85$. Melk: $2 \\cdot 19{,}90 = 39{,}80$. Ost: $0{,}5 \\cdot 109 = 54{,}50$. Brød: $3 \\cdot 29{,}90 = 89{,}70$. Total: $134{,}85 + 39{,}80 + 54{,}50 + 89{,}70 = 318{,}85 \\text{ kr}$' },
              { label: 'b', task: 'Butikken er $3{,}2 \\text{ km}$ unna. Du kjører bil med fart $40 \\text{ km/t}$ i snitt. Hvor lang tid bruker du tur-retur?', solution: 'Tur-retur: $2 \\cdot 3{,}2 = 6{,}4 \\text{ km}$. $t = \\frac{6{,}4}{40} = 0{,}16 \\text{ t} = 9{,}6 \\text{ min} \\approx 10 \\text{ min}$' },
              { label: 'c', task: 'Bilen bruker $0{,}7 \\text{ L/mil}$. Bensinpris er $19{,}50 \\text{ kr/L}$. Hva koster bensinen tur-retur?', solution: '$6{,}4 \\text{ km} = 0{,}64 \\text{ mil}$. Forbruk: $0{,}7 \\cdot 0{,}64 = 0{,}448 \\text{ L}$. Pris: $0{,}448 \\cdot 19{,}50 \\approx 8{,}74 \\text{ kr}$' },
              { label: 'd', task: 'Du handler for 4 personer i 1 uke. Omtrent hva blir matutgiftene per person per dag?', solution: '$\\frac{318{,}85}{4 \\cdot 7} = \\frac{318{,}85}{28} \\approx 11{,}39 \\text{ kr/person/dag}$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Regn ut hver vare for seg og summer. Husk å gjøre om km til mil.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-4-rep-5',
          type: 'exercise',
          exercise: {
            id: '8-9-4-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Praktisk oppgave: Maling av rom.',
            subTasks: [
              { label: 'a', task: 'Et rom er $4{,}5 \\text{ m} \\times 3{,}8 \\text{ m}$ med takhøyde $2{,}4 \\text{ m}$. Regn ut arealet av alle fire vegger.', solution: 'To vegger: $2 \\cdot (4{,}5 \\cdot 2{,}4) = 21{,}6 \\text{ m}^2$. To vegger: $2 \\cdot (3{,}8 \\cdot 2{,}4) = 18{,}24 \\text{ m}^2$. Totalt: $21{,}6 + 18{,}24 = 39{,}84 \\text{ m}^2$' },
              { label: 'b', task: 'Rommet har en dør ($0{,}9 \\text{ m} \\times 2{,}1 \\text{ m}$) og et vindu ($1{,}2 \\text{ m} \\times 1{,}0 \\text{ m}$). Trekk fra disse arealene.', solution: 'Dør: $0{,}9 \\cdot 2{,}1 = 1{,}89 \\text{ m}^2$. Vindu: $1{,}2 \\cdot 1{,}0 = 1{,}2 \\text{ m}^2$. Maleareal: $39{,}84 - 1{,}89 - 1{,}2 = 36{,}75 \\text{ m}^2$' },
              { label: 'c', task: 'Malingen dekker $10 \\text{ m}^2$ per liter, og du skal male to strøk. Hvor mange liter trenger du?', solution: '$\\frac{36{,}75}{10} \\cdot 2 = 7{,}35 \\text{ L}$' },
              { label: 'd', task: 'Maling selges i 3 L-bokser til 299 kr og 0,75 L-bokser til 89 kr. Hva er billigst?', solution: '3 L-boks: $\\frac{299}{3} \\approx 99{,}67$ kr/L. 0,75 L-boks: $\\frac{89}{0{,}75} \\approx 118{,}67$ kr/L. 3 L-boksen er billigst per liter.' },
              { label: 'e', task: 'Du trenger 7,35 L. Hvor mange bokser av hver type trengs for å få nok, og hva blir billigst?', solution: 'Alt i 3 L: 3 bokser = $3 \\cdot 299 = 897$ kr (9 L). Alt i 0,75 L: 10 bokser = $10 \\cdot 89 = 890$ kr (7,5 L). Blanding: 2 store + 2 små = $598 + 178 = 776$ kr (7,5 L). Blandingen er billigst.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Regn ut veggarealet, trekk fra dør og vindu, og husk å doble for to strøk.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-9-4-rep-6',
          type: 'exercise',
          exercise: {
            id: '8-9-4-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgave: Biltur fra Oslo til Trondheim.',
            subTasks: [
              { label: 'a', task: 'Avstanden er ca. $490 \\text{ km}$. Bilen kjører med gjennomsnittsfart $80 \\text{ km/t}$. Hvor lang tid tar turen uten pauser?', solution: '$t = \\frac{490}{80} = 6{,}125 \\text{ t} = 6 \\text{ t } 7{,}5 \\text{ min}$' },
              { label: 'b', task: 'Du tar tre pauser på henholdsvis 15 min, 30 min og 10 min. Hva blir total reisetid?', solution: 'Pauser: $15 + 30 + 10 = 55 \\text{ min}$. Total: $6 \\text{ t } 7{,}5 \\text{ min} + 55 \\text{ min} = 7 \\text{ t } 2{,}5 \\text{ min}$' },
              { label: 'c', task: 'Bilen bruker $0{,}65 \\text{ L/mil}$ bensin. Bensin koster $20{,}10 \\text{ kr/L}$. Hva koster drivstoffet for hele turen?', solution: '$490 \\text{ km} = 49 \\text{ mil}$. Forbruk: $0{,}65 \\cdot 49 = 31{,}85 \\text{ L}$. Pris: $31{,}85 \\cdot 20{,}10 \\approx 640{,}19 \\text{ kr}$' },
              { label: 'd', task: 'En elbil bruker $0{,}18 \\text{ kWh/km}$ og strøm koster $2{,}50 \\text{ kr/kWh}$. Sammenlign kostnadene.', solution: 'Elbil: $490 \\cdot 0{,}18 = 88{,}2 \\text{ kWh}$. Pris: $88{,}2 \\cdot 2{,}50 = 220{,}50 \\text{ kr}$. Elbilen er $640{,}19 - 220{,}50 = 419{,}69 \\text{ kr}$ billigere.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Gjør om km til mil ($1 \\text{ mil} = 10 \\text{ km}$). Husk å legge til pausetiden.'],
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
// Eksporter alle kapitler
// ============================================================================

export const MATEMATIKK_8_DEL10_CHAPTERS = [
  CHAPTER_8_9_1,
  CHAPTER_8_9_2,
  CHAPTER_8_9_3,
  CHAPTER_8_9_4,
];
