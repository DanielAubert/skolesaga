/**
 * Tekstbok kapitler for 1P - Geometri (Måleenheter og Formlikhet)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.4: MÅLEENHETER OG ENHETSOMREGNING
// ============================================================================

export const CHAPTER_1P_4_4: TextbookChapter = {
  id: '1p-4-4',
  courseId: '1p',
  chapterNumber: '4.4',
  title: 'Måleenheter og enhetsomregning',
  description: 'Lær om SI-systemet, prefikser og hvordan du regner om mellom ulike enheter for lengde, areal, volum, masse, tid og fart.',
  estimatedMinutes: 50,
  competenceGoals: [
    'velje høvelege einingar og rekne om mellom einingar',
  ],
  content: [
    // --- Blokk 1: Introduksjon ---
    {
      id: '1p-4-4-intro',
      type: 'text',
      content: `## Hvorfor trenger vi måleenheter?

I hverdagen måler vi mange ulike størrelser: lengden på et bord, arealet av en tomt, volumet i en boks, vekten av en pakke, og farten på en bil. For å kunne kommunisere tydelig om slike størrelser, trenger vi felles måleenheter.

I Norge og de fleste land bruker vi **SI-systemet** (Systeme International d'Unites). SI-systemet bygger på grunnenheter som meter (m), kilogram (kg) og sekund (s), og bruker **prefikser** for å lage større og mindre enheter.`,
    },
    // --- Blokk 2: Definisjon av prefikser ---
    {
      id: '1p-4-4-def-prefikser',
      type: 'definition',
      title: 'SI-prefikser',
      content: `Prefiksene forteller hvor mange ganger vi ganger eller deler grunnenheten:

| Prefiks | Symbol | Faktor |
|---------|--------|--------|
| kilo    | k      | $1000 = 10^3$ |
| hekto   | h      | $100 = 10^2$ |
| deka    | da     | $10 = 10^1$ |
| (grunn) |        | $1 = 10^0$ |
| desi    | d      | $0{,}1 = 10^{-1}$ |
| centi   | c      | $0{,}01 = 10^{-2}$ |
| milli   | m      | $0{,}001 = 10^{-3}$ |

**Eksempel:** 1 kilometer = 1000 meter, 1 centimeter = 0,01 meter.`,
    },
    // --- Blokk 3: Lengdeenheter ---
    {
      id: '1p-4-4-lengde',
      type: 'text',
      content: `## Lengdeenheter

De vanligste lengdeenhetene er:

$$\\text{km} \\xrightarrow{\\times 1000} \\text{m} \\xrightarrow{\\times 10} \\text{dm} \\xrightarrow{\\times 10} \\text{cm} \\xrightarrow{\\times 10} \\text{mm}$$

For å gå **nedover** (fra stor til liten enhet) **ganger** vi.
For å gå **oppover** (fra liten til stor enhet) **deler** vi.

- $1 \\text{ km} = 1000 \\text{ m}$
- $1 \\text{ m} = 10 \\text{ dm} = 100 \\text{ cm} = 1000 \\text{ mm}$
- $1 \\text{ cm} = 10 \\text{ mm}$`,
    },
    // --- Blokk 4: Eksempel lengde ---
    {
      id: '1p-4-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Omregning av lengdeenheter',
      problem: `Regn om:
a) 3,5 km til meter
b) 4200 mm til meter
c) 85 cm til meter`,
      solution: `**Losning:**

a) $3{,}5 \\text{ km} = 3{,}5 \\cdot 1000 \\text{ m} = 3500 \\text{ m}$

b) $4200 \\text{ mm} = \\frac{4200}{1000} \\text{ m} = 4{,}2 \\text{ m}$

c) $85 \\text{ cm} = \\frac{85}{100} \\text{ m} = 0{,}85 \\text{ m}$`,
    },
    // --- Blokk 5: Oppgave lengde ---
    {
      id: '1p-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-4-4-ex-1',
        number: '4.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn om til den angitte enheten:',
        subTasks: [
          { label: 'a', task: '2,8 km til m', solution: '$2{,}8 \\cdot 1000 = 2800$ m', answer: 2800, multipleChoiceOptions: ['2800 m', '280 m', '28 m', '28 000 m'] },
          { label: 'b', task: '560 cm til m', solution: '$\\frac{560}{100} = 5{,}6$ m', answer: 5.6, multipleChoiceOptions: ['5,6 m', '56 m', '0,56 m', '56 000 m'] },
          { label: 'c', task: '7 m til mm', solution: '$7 \\cdot 1000 = 7000$ mm', answer: 7000, multipleChoiceOptions: ['7000 mm', '700 mm', '70 mm', '70 000 mm'] },
          { label: 'd', task: '45 dm til m', solution: '$\\frac{45}{10} = 4{,}5$ m', answer: 4.5, multipleChoiceOptions: ['4,5 m', '45 m', '0,45 m', '450 m'] },
        ],
        solution: 'a) 2800 m  b) 5,6 m  c) 7000 mm  d) 4,5 m',
        hints: ['Fra km til m: gang med 1000', 'Fra cm til m: del på 100', 'Fra m til mm: gang med 1000'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 6: Arealenheter ---
    {
      id: '1p-4-4-areal',
      type: 'text',
      content: `## Arealenheter

Areal er lengde ganger lengde. Derfor blir omregningsfaktoren **kvadrert** (opphøyd i andre).

$$\\text{km}^2 \\xrightarrow{\\times 10^6} \\text{m}^2 \\xrightarrow{\\times 100} \\text{dm}^2 \\xrightarrow{\\times 100} \\text{cm}^2 \\xrightarrow{\\times 100} \\text{mm}^2$$

Mellom hvert trinn i areal er faktoren **100** (fordi $10^2 = 100$).

- $1 \\text{ m}^2 = 100 \\text{ dm}^2 = 10\\,000 \\text{ cm}^2$
- $1 \\text{ km}^2 = 1\\,000\\,000 \\text{ m}^2$
- $1 \\text{ cm}^2 = 100 \\text{ mm}^2$`,
    },
    // --- Blokk 7: Definisjon areal ---
    {
      id: '1p-4-4-def-areal',
      type: 'definition',
      title: 'Omregning av arealenheter',
      content: `Når vi regner om arealenheter, bruker vi at arealet er todimensjonalt:

$$1 \\text{ m}^2 = (100 \\text{ cm})^2 = 10\\,000 \\text{ cm}^2$$

**Huskeregel:** For arealenheter er faktoren mellom naboenhetene $10^2 = 100$.

Noen nyttige mål:
- $1 \\text{ ar} = 100 \\text{ m}^2$ (brukes for tomter)
- $1 \\text{ dekar (mål)} = 1000 \\text{ m}^2$
- $1 \\text{ hektar} = 10\\,000 \\text{ m}^2 = 10 \\text{ dekar}$`,
    },
    // --- Blokk 8: Eksempel areal ---
    {
      id: '1p-4-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Omregning av arealenheter',
      problem: `a) En stue har areal 24 m². Hvor mange cm² er det?

b) Et stykke stoff er 4500 cm². Hvor mange dm² er det?

c) En tomt er 850 m². Hvor mange dekar er det?`,
      solution: `**Losning:**

a) $24 \\text{ m}^2 = 24 \\cdot 10\\,000 \\text{ cm}^2 = 240\\,000 \\text{ cm}^2$

b) $4500 \\text{ cm}^2 = \\frac{4500}{100} \\text{ dm}^2 = 45 \\text{ dm}^2$

c) $850 \\text{ m}^2 = \\frac{850}{1000} \\text{ dekar} = 0{,}85 \\text{ dekar}$`,
    },
    // --- Blokk 9: Oppgave areal ---
    {
      id: '1p-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-4-4-ex-2',
        number: '4.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn om arealenheter:',
        subTasks: [
          { label: 'a', task: '3 m² til cm²', solution: '$3 \\cdot 10\\,000 = 30\\,000$ cm²', answer: 30000, multipleChoiceOptions: ['30 000 cm²', '300 cm²', '3000 cm²', '300 000 cm²'] },
          { label: 'b', task: '5000 mm² til cm²', solution: '$\\frac{5000}{100} = 50$ cm²', answer: 50, multipleChoiceOptions: ['50 cm²', '500 cm²', '5 cm²', '0,5 cm²'] },
          { label: 'c', task: '0,5 km² til m²', solution: '$0{,}5 \\cdot 1\\,000\\,000 = 500\\,000$ m²', answer: 500000, multipleChoiceOptions: ['500 000 m²', '5000 m²', '50 000 m²', '5 000 000 m²'] },
          { label: 'd', task: '2400 m² til dekar', solution: '$\\frac{2400}{1000} = 2{,}4$ dekar', answer: 2.4, multipleChoiceOptions: ['2,4 dekar', '24 dekar', '0,24 dekar', '240 dekar'] },
        ],
        solution: 'a) 30 000 cm²  b) 50 cm²  c) 500 000 m²  d) 2,4 dekar',
        hints: ['Mellom m² og cm²: faktor 10 000', 'Mellom mm² og cm²: faktor 100', '1 dekar = 1000 m²'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 10: Volumenheter ---
    {
      id: '1p-4-4-volum',
      type: 'text',
      content: `## Volumenheter

Volum er lengde ganger lengde ganger lengde. Faktoren mellom naboenhetene er **1000** (fordi $10^3 = 1000$).

$$\\text{m}^3 \\xrightarrow{\\times 1000} \\text{dm}^3 \\xrightarrow{\\times 1000} \\text{cm}^3 \\xrightarrow{\\times 1000} \\text{mm}^3$$

- $1 \\text{ m}^3 = 1000 \\text{ dm}^3 = 1\\,000\\,000 \\text{ cm}^3$
- $1 \\text{ dm}^3 = 1000 \\text{ cm}^3$`,
    },
    // --- Blokk 11: Definisjon liter ---
    {
      id: '1p-4-4-def-liter',
      type: 'definition',
      title: 'Sammenhengen mellom volum og liter',
      content: `Det er en svært viktig sammenheng mellom volumenheter og literenheter:

$$1 \\text{ dm}^3 = 1 \\text{ liter (L)}$$

$$1 \\text{ cm}^3 = 1 \\text{ milliliter (mL)}$$

$$1 \\text{ m}^3 = 1000 \\text{ L}$$

**Huskeregel:** En terning med sider 10 cm (= 1 dm) rommer noyaktig 1 liter.`,
    },
    // --- Blokk 12: Eksempel volum ---
    {
      id: '1p-4-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Volum og liter',
      problem: `Et akvarium er 60 cm langt, 30 cm bredt og 40 cm hoyt.

a) Finn volumet i cm³.
b) Hvor mange liter vann rommer akvariet?`,
      solution: `**Losning:**

a) $V = 60 \\cdot 30 \\cdot 40 = 72\\,000 \\text{ cm}^3$

b) Vi vet at $1 \\text{ L} = 1000 \\text{ cm}^3$ (fordi $1 \\text{ L} = 1 \\text{ dm}^3 = 1000 \\text{ cm}^3$)

$72\\,000 \\text{ cm}^3 = \\frac{72\\,000}{1000} \\text{ L} = 72 \\text{ L}$

Akvariet rommer 72 liter.`,
    },
    // --- Blokk 13: Oppgave volum ---
    {
      id: '1p-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn om volumenheter:',
        subTasks: [
          { label: 'a', task: '5 dm³ til cm³', solution: '$5 \\cdot 1000 = 5000$ cm³', answer: 5000, multipleChoiceOptions: ['5000 cm³', '500 cm³', '50 cm³', '50 000 cm³'] },
          { label: 'b', task: '3,5 L til mL', solution: '$3{,}5 \\cdot 1000 = 3500$ mL', answer: 3500, multipleChoiceOptions: ['3500 mL', '350 mL', '35 mL', '35 000 mL'] },
          { label: 'c', task: '250 mL til dm³', solution: '$250 \\text{ mL} = 250 \\text{ cm}^3 = \\frac{250}{1000} \\text{ dm}^3 = 0{,}25 \\text{ dm}^3$', answer: 0.25, multipleChoiceOptions: ['0,25 dm³', '2,5 dm³', '25 dm³', '0,025 dm³'] },
          { label: 'd', task: '0,8 m³ til liter', solution: '$0{,}8 \\cdot 1000 = 800$ L', answer: 800, multipleChoiceOptions: ['800 L', '80 L', '8000 L', '8 L'] },
        ],
        solution: 'a) 5000 cm³  b) 3500 mL  c) 0,25 dm³  d) 800 L',
        hints: ['1 dm³ = 1000 cm³ = 1 L', '1 cm³ = 1 mL', '1 m³ = 1000 L'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 14: Masseenheter ---
    {
      id: '1p-4-4-masse',
      type: 'text',
      content: `## Masseenheter

De vanligste masseenhetene er:

$$\\text{tonn} \\xrightarrow{\\times 1000} \\text{kg} \\xrightarrow{\\times 1000} \\text{g} \\xrightarrow{\\times 1000} \\text{mg}$$

- $1 \\text{ tonn} = 1000 \\text{ kg}$
- $1 \\text{ kg} = 1000 \\text{ g}$
- $1 \\text{ g} = 1000 \\text{ mg}$

Et hektogram (hg) kalles ofte et \"ons\" i dagligtale: $1 \\text{ hg} = 100 \\text{ g}$.`,
    },
    // --- Blokk 15: Oppgave masse ---
    {
      id: '1p-4-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn om masseenheter:',
        subTasks: [
          { label: 'a', task: '2,5 kg til g', solution: '$2{,}5 \\cdot 1000 = 2500$ g', answer: 2500, multipleChoiceOptions: ['2500 g', '250 g', '25 g', '25 000 g'] },
          { label: 'b', task: '3200 g til kg', solution: '$\\frac{3200}{1000} = 3{,}2$ kg', answer: 3.2, multipleChoiceOptions: ['3,2 kg', '32 kg', '0,32 kg', '320 kg'] },
          { label: 'c', task: '4,7 tonn til kg', solution: '$4{,}7 \\cdot 1000 = 4700$ kg', answer: 4700, multipleChoiceOptions: ['4700 kg', '470 kg', '47 kg', '47 000 kg'] },
          { label: 'd', task: '500 mg til g', solution: '$\\frac{500}{1000} = 0{,}5$ g', answer: 0.5, multipleChoiceOptions: ['0,5 g', '5 g', '50 g', '0,05 g'] },
        ],
        solution: 'a) 2500 g  b) 3,2 kg  c) 4700 kg  d) 0,5 g',
        hints: ['Mellom tonn, kg, g og mg er faktoren alltid 1000'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 16: Tid ---
    {
      id: '1p-4-4-tid',
      type: 'text',
      content: `## Tidsenheter

Tidsenheter folger ikke 10-tallssystemet, men vi bruker dem daglig:

- $1 \\text{ time (h)} = 60 \\text{ minutter (min)}$
- $1 \\text{ minutt} = 60 \\text{ sekunder (s)}$
- $1 \\text{ time} = 3600 \\text{ sekunder}$

For å gjore om minutter til timer, deler vi på 60. For å gjore om timer til minutter, ganger vi med 60.`,
    },
    // --- Blokk 17: Eksempel tid ---
    {
      id: '1p-4-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Omregning av tid',
      problem: `a) Gjor om 2 timer og 45 minutter til bare minutter.
b) Gjor om 195 minutter til timer og minutter.
c) Gjor om 1,75 timer til timer og minutter.`,
      solution: `**Losning:**

a) $2 \\text{ h } 45 \\text{ min} = 2 \\cdot 60 + 45 = 120 + 45 = 165 \\text{ min}$

b) $195 \\div 60 = 3 \\text{ rest } 15$, altså $195 \\text{ min} = 3 \\text{ h } 15 \\text{ min}$

c) $0{,}75 \\text{ h} = 0{,}75 \\cdot 60 = 45 \\text{ min}$, altså $1{,}75 \\text{ h} = 1 \\text{ h } 45 \\text{ min}$`,
    },
    // --- Blokk 18: Fart ---
    {
      id: '1p-4-4-fart',
      type: 'text',
      content: `## Fart: km/h og m/s

Fart er strekning delt på tid. De to vanligste fartenhetene er:

- **km/h** (kilometer per time) -- brukes i trafikken
- **m/s** (meter per sekund) -- brukes i fysikk og vitenskap`,
    },
    // --- Blokk 19: Definisjon fart ---
    {
      id: '1p-4-4-def-fart',
      type: 'definition',
      title: 'Omregning mellom km/h og m/s',
      content: `For å regne om mellom km/h og m/s bruker vi:

$$1 \\text{ km/h} = \\frac{1000 \\text{ m}}{3600 \\text{ s}} = \\frac{1}{3{,}6} \\text{ m/s}$$

Dermed:
- **Fra km/h til m/s:** Del på $3{,}6$
- **Fra m/s til km/h:** Gang med $3{,}6$`,
    },
    // --- Blokk 20: Eksempel fart ---
    {
      id: '1p-4-4-example-5',
      type: 'example',
      title: 'Eksempel 5: Omregning av fart',
      problem: `a) En bil kjorer i 90 km/h. Hva er farten i m/s?
b) En sprinter loper med en fart på 10 m/s. Hva er det i km/h?
c) Fartsgrensen i et boligområde er 30 km/h. Hva er det i m/s?`,
      solution: `**Losning:**

a) $90 \\text{ km/h} = \\frac{90}{3{,}6} \\text{ m/s} = 25 \\text{ m/s}$

b) $10 \\text{ m/s} = 10 \\cdot 3{,}6 \\text{ km/h} = 36 \\text{ km/h}$

c) $30 \\text{ km/h} = \\frac{30}{3{,}6} \\text{ m/s} \\approx 8{,}3 \\text{ m/s}$`,
    },
    // --- Blokk 21: Oppgave fart og tid ---
    {
      id: '1p-4-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1p-4-4-ex-5',
        number: '4.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn om mellom fartsenheter:',
        subTasks: [
          { label: 'a', task: '72 km/h til m/s', solution: '$\\frac{72}{3{,}6} = 20$ m/s', answer: 20, multipleChoiceOptions: ['20 m/s', '200 m/s', '7,2 m/s', '259 m/s'] },
          { label: 'b', task: '15 m/s til km/h', solution: '$15 \\cdot 3{,}6 = 54$ km/h', answer: 54, multipleChoiceOptions: ['54 km/h', '4,17 km/h', '150 km/h', '5,4 km/h'] },
          { label: 'c', task: '108 km/h til m/s', solution: '$\\frac{108}{3{,}6} = 30$ m/s', answer: 30, multipleChoiceOptions: ['30 m/s', '300 m/s', '10,8 m/s', '389 m/s'] },
          { label: 'd', task: '5 m/s til km/h', solution: '$5 \\cdot 3{,}6 = 18$ km/h', answer: 18, multipleChoiceOptions: ['18 km/h', '1,39 km/h', '50 km/h', '1,8 km/h'] },
        ],
        solution: 'a) 20 m/s  b) 54 km/h  c) 30 m/s  d) 18 km/h',
        hints: ['Fra km/h til m/s: del på 3,6', 'Fra m/s til km/h: gang med 3,6'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 22: Tip ---
    {
      id: '1p-4-4-tip',
      type: 'tip',
      title: 'Huskeregel for enhetsomregning',
      content: `**Lengde:** Faktor 10 mellom naboenhetene (dm, cm, mm)

**Areal:** Faktor $10^2 = 100$ mellom naboenhetene

**Volum:** Faktor $10^3 = 1000$ mellom naboenhetene

Tenk på det slik: Areal er todimensjonalt (lengde $\\times$ lengde), så vi opphøyer faktoren i 2. Volum er tredimensjonalt (lengde $\\times$ lengde $\\times$ lengde), så vi opphøyer faktoren i 3.`,
    },
    // --- Blokk 23: Praktisk oppgave ---
    {
      id: '1p-4-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: '1p-4-4-ex-6',
        number: '4.4.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver med enhetsomregning:',
        subTasks: [
          { label: 'a', task: 'Et svommebasseng er 25 m langt, 12,5 m bredt og 1,8 m dypt. Hvor mange liter vann rommer det?', solution: '$V = 25 \\cdot 12{,}5 \\cdot 1{,}8 = 562{,}5 \\text{ m}^3 = 562{,}5 \\cdot 1000 = 562\\,500$ L', answer: 562500, multipleChoiceOptions: ['562 500 L', '56 250 L', '5 625 L', '5 625 000 L'] },
          { label: 'b', task: 'En lastebil kan frakte 3,5 tonn. Hvor mange kasser på 25 kg kan den frakte?', solution: '$3{,}5 \\text{ tonn} = 3500 \\text{ kg}$. Antall kasser: $\\frac{3500}{25} = 140$', answer: 140, multipleChoiceOptions: ['140 kasser', '14 kasser', '350 kasser', '1400 kasser'] },
          { label: 'c', task: 'En syklist sykler 45 km på 1 time og 30 minutter. Hva er gjennomsnittsfarten i km/h?', solution: '$1 \\text{ h } 30 \\text{ min} = 1{,}5 \\text{ h}$. Fart $= \\frac{45}{1{,}5} = 30$ km/h', answer: 30, multipleChoiceOptions: ['30 km/h', '45 km/h', '67,5 km/h', '22,5 km/h'] },
        ],
        solution: 'a) 562 500 L  b) 140 kasser  c) 30 km/h',
        hints: ['a) Finn volumet i m³ forst, deretter gang med 1000 for å få liter', 'b) Regn om tonn til kg forst', 'c) Regn om tid til desimaltimer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 24: Warning ---
    {
      id: '1p-4-4-warning',
      type: 'warning',
      title: 'Vanlig feil ved arealomregning',
      content: `Det er lett å glemme at arealenheter har faktor 100 (ikke 10) mellom naboenhetene.

**Feil:** $1 \\text{ m}^2 = 100 \\text{ cm}^2$ (dette stemmer IKKE!)

**Riktig:** $1 \\text{ m}^2 = (100 \\text{ cm})^2 = 10\\,000 \\text{ cm}^2$

Tilsvarende for volum: $1 \\text{ m}^3 = (100 \\text{ cm})^3 = 1\\,000\\,000 \\text{ cm}^3$`,
    },
    // --- Blokk 25: Oppsummering ---
    {
      id: '1p-4-4-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- **Lengde:** faktor 10 mellom dm, cm, mm; faktor 1000 mellom km og m
- **Areal:** faktor 100 mellom naboenhetene (m$^2$, dm$^2$, cm$^2$, mm$^2$)
- **Volum:** faktor 1000 mellom naboenhetene (m$^3$, dm$^3$, cm$^3$, mm$^3$)
- $1 \\text{ dm}^3 = 1 \\text{ L}$ og $1 \\text{ cm}^3 = 1 \\text{ mL}$
- **Masse:** faktor 1000 mellom tonn, kg, g, mg
- **Fart:** km/h til m/s: del på $3{,}6$; m/s til km/h: gang med $3{,}6$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5: FORMLIKHET
// ============================================================================

export const CHAPTER_1P_4_5: TextbookChapter = {
  id: '1p-4-5',
  courseId: '1p',
  chapterNumber: '4.5',
  title: 'Formlikhet',
  description: 'Lær om formlike figurer, formlikhetsfaktoren og hvordan du beregner ukjente sider, areal og volum ved hjelp av formlikhet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke formlikskap og målestokk til berekningar',
  ],
  content: [
    // --- Blokk 1: Introduksjon ---
    {
      id: '1p-4-5-intro',
      type: 'text',
      content: `## Hva er formlikhet?

Har du noen gang sett et fotografi i ulike storrelser? Et lite passfoto og en stor plakat kan vise det samme bildet -- bare i forskjellig storrelse. Proporsjonene er de samme, men målene er ulike. Vi sier at figurene er **formlike**.

Formlikhet er et viktig begrep i geometri og har mange praktiske bruksområder: kart, arkitekttegninger, modeller og mye mer.`,
    },
    // --- Blokk 2: Definisjon formlikhet ---
    {
      id: '1p-4-5-def-formlik',
      type: 'definition',
      title: 'Formlike figurer',
      content: `To figurer er **formlike** dersom:
1. Alle tilsvarende vinkler er like store.
2. Alle tilsvarende sider har samme forholdstall.

Det felles forholdstallet kaller vi **formlikhetsfaktoren** (eller skaleringsfaktoren) $k$.

$$k = \\frac{\\text{side i den store figuren}}{\\text{tilsvarende side i den lille figuren}}$$

Hvis $k > 1$, er figuren forstoret. Hvis $0 < k < 1$, er figuren forminsket.`,
    },
    // --- Blokk 3: Eksempel formlikhetsfaktor ---
    {
      id: '1p-4-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Finne formlikhetsfaktoren',
      problem: `To rektangler er formlike. Det lille rektangelet har sider 3 cm og 5 cm. Det store rektangelet har sider 9 cm og 15 cm.

Finn formlikhetsfaktoren.`,
      solution: `**Losning:**

Vi finner forholdet mellom tilsvarende sider:

$$k = \\frac{9}{3} = 3 \\quad \\text{og} \\quad k = \\frac{15}{5} = 3$$

Begge forholdene gir $k = 3$, som bekrefter at rektanglene er formlike med formlikhetsfaktor $k = 3$.

Det store rektangelet er 3 ganger så stort som det lille.`,
    },
    // --- Blokk 4: Oppgave formlikhetsfaktor ---
    {
      id: '1p-4-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-4-5-ex-1',
        number: '4.5.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn formlikhetsfaktoren mellom figurene:',
        subTasks: [
          { label: 'a', task: 'Trekant A har sider 4 cm, 6 cm og 8 cm. Trekant B har sider 10 cm, 15 cm og 20 cm.', solution: '$k = \\frac{10}{4} = \\frac{15}{6} = \\frac{20}{8} = 2{,}5$', answer: 2.5, multipleChoiceOptions: ['2,5', '2', '3', '1,5'] },
          { label: 'b', task: 'Rektangel A har sider 12 cm og 8 cm. Rektangel B har sider 6 cm og 4 cm.', solution: '$k = \\frac{6}{12} = \\frac{4}{8} = 0{,}5$', answer: 0.5, multipleChoiceOptions: ['0,5', '2', '0,25', '4'] },
          { label: 'c', task: 'Kvadrat A har side 7 cm. Kvadrat B har side 21 cm.', solution: '$k = \\frac{21}{7} = 3$', answer: 3, multipleChoiceOptions: ['3', '14', '7', '0,33'] },
        ],
        solution: 'a) 2,5  b) 0,5  c) 3',
        hints: ['Formlikhetsfaktor = side i ny figur / tilsvarende side i original figur'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 5: Beregne ukjente sider ---
    {
      id: '1p-4-5-ukjente-sider',
      type: 'text',
      content: `## Beregne ukjente sider

Når vi vet at to figurer er formlike, kan vi bruke formlikhetsfaktoren til å finne ukjente sider. Vi setter opp forholdstall mellom tilsvarende sider:

$$\\frac{\\text{side}_1 \\text{ i figur B}}{\\text{side}_1 \\text{ i figur A}} = \\frac{\\text{side}_2 \\text{ i figur B}}{\\text{side}_2 \\text{ i figur A}}$$

Fra dette kan vi finne den ukjente siden ved kryssregning.`,
    },
    // --- Blokk 6: Eksempel ukjente sider ---
    {
      id: '1p-4-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne en ukjent side',
      problem: `To trekanter er formlike. I den forste trekanten er sidene 5 cm, 8 cm og 10 cm. I den andre trekanten er den korteste siden 7,5 cm. Finn de to andre sidene i den andre trekanten.`,
      solution: `**Losning:**

Forst finner vi formlikhetsfaktoren med den kjente siden:

$$k = \\frac{7{,}5}{5} = 1{,}5$$

Deretter ganger vi de andre sidene med formlikhetsfaktoren:

Side 2: $8 \\cdot 1{,}5 = 12$ cm

Side 3: $10 \\cdot 1{,}5 = 15$ cm

Den andre trekanten har sider 7,5 cm, 12 cm og 15 cm.`,
    },
    // --- Blokk 7: Oppgave ukjente sider ---
    {
      id: '1p-4-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-4-5-ex-2',
        number: '4.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Figurene er formlike. Finn den ukjente siden $x$:',
        subTasks: [
          { label: 'a', task: 'Trekant A: sider 6 og 9. Trekant B: sider 10 og $x$.', solution: '$k = \\frac{10}{6}$. Da er $x = 9 \\cdot \\frac{10}{6} = 15$', answer: 15, multipleChoiceOptions: ['15', '5,4', '13', '12'] },
          { label: 'b', task: 'Rektangel A: sider 4 og 7. Rektangel B: sider $x$ og 21.', solution: '$k = \\frac{21}{7} = 3$. Da er $x = 4 \\cdot 3 = 12$', answer: 12, multipleChoiceOptions: ['12', '14', '8', '28'] },
          { label: 'c', task: 'Trekant A: sider 15 og 20. Trekant B: sider 9 og $x$.', solution: '$k = \\frac{9}{15} = 0{,}6$. Da er $x = 20 \\cdot 0{,}6 = 12$', answer: 12, multipleChoiceOptions: ['12', '18', '10', '33,3'] },
        ],
        solution: 'a) 15  b) 12  c) 12',
        hints: ['Finn formlikhetsfaktoren forst ved å dele tilsvarende kjente sider', 'Gang den ukjente sidens motpart med formlikhetsfaktoren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 8: Formlike trekanter ---
    {
      id: '1p-4-5-trekanter',
      type: 'text',
      content: `## Formlike trekanter i praksis

Formlike trekanter oppstår ofte i naturen og i praktiske situasjoner. Et klassisk eksempel er **skyggeberegning**: Når solen skinner, lager en person og en stolpe skygger. Personen, stolpen og skyggene danner formlike trekanter fordi solstrålene er tilnormet parallelle.

Vi kan bruke dette til å beregne hoyden på gjenstander vi ikke kan måle direkte.`,
    },
    // --- Blokk 9: Eksempel skyggeberegning ---
    {
      id: '1p-4-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Skyggeberegning',
      problem: `En stolpe kaster en skygge som er 12 m lang. Samtidig kaster en person som er 1,8 m hoy en skygge som er 2,4 m lang. Hvor hoy er stolpen?`,
      solution: `**Losning:**

Personen og stolpen med sine skygger danner formlike trekanter. Vi setter opp forholdet:

$$\\frac{\\text{hoyde stolpe}}{\\text{skygge stolpe}} = \\frac{\\text{hoyde person}}{\\text{skygge person}}$$

$$\\frac{h}{12} = \\frac{1{,}8}{2{,}4}$$

$$h = 12 \\cdot \\frac{1{,}8}{2{,}4} = 12 \\cdot 0{,}75 = 9 \\text{ m}$$

Stolpen er 9 meter hoy.`,
    },
    // --- Blokk 10: Oppgave praktisk formlikhet ---
    {
      id: '1p-4-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-4-5-ex-3',
        number: '4.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los oppgavene med formlike trekanter:',
        subTasks: [
          { label: 'a', task: 'Et flaggstang kaster en skygge på 8 m. En pinne som er 1,5 m hoy kaster en skygge på 2 m. Hvor hoy er flaggstangen?', solution: '$\\frac{h}{8} = \\frac{1{,}5}{2}$, $h = 8 \\cdot 0{,}75 = 6$ m', answer: 6, multipleChoiceOptions: ['6 m', '8 m', '10,67 m', '4 m'] },
          { label: 'b', task: 'Et tre kaster en skygge på 15 m. En person (1,7 m) som står ved treet kaster en skygge på 3 m. Hvor hoyt er treet?', solution: '$\\frac{h}{15} = \\frac{1{,}7}{3}$, $h = 15 \\cdot \\frac{1{,}7}{3} = 8{,}5$ m', answer: 8.5, multipleChoiceOptions: ['8,5 m', '7,5 m', '26,5 m', '5,1 m'] },
        ],
        solution: 'a) 6 m  b) 8,5 m',
        hints: ['Sett opp forholdet: hoyde/skygge for begge figurene', 'Los likningen ved kryssregning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 11: Areal og formlikhet ---
    {
      id: '1p-4-5-areal',
      type: 'text',
      content: `## Formlikhet og areal

Når to figurer er formlike med formlikhetsfaktor $k$, gjelder folgende sammenheng for arealene:

$$\\frac{A_{\\text{stor}}}{A_{\\text{liten}}} = k^2$$

Arealet endres med **kvadratet** av formlikhetsfaktoren. Hvis alle sider dobles ($k = 2$), blir arealet $2^2 = 4$ ganger så stort.`,
    },
    // --- Blokk 12: Definisjon areal og volum ---
    {
      id: '1p-4-5-def-areal-volum',
      type: 'definition',
      title: 'Formlikhetsfaktor, areal og volum',
      content: `For formlike figurer med formlikhetsfaktor $k$ gjelder:

**Lengder:** Alle tilsvarende lengder har forholdet $k$.

**Areal:** $A_{\\text{ny}} = k^2 \\cdot A_{\\text{original}}$

**Volum:** $V_{\\text{ny}} = k^3 \\cdot V_{\\text{original}}$

Eksempel med $k = 3$:
- Lengder blir $3$ ganger så store
- Areal blir $3^2 = 9$ ganger så stort
- Volum blir $3^3 = 27$ ganger så stort`,
    },
    // --- Blokk 13: Eksempel areal/volum ---
    {
      id: '1p-4-5-example-4',
      type: 'example',
      title: 'Eksempel 4: Areal og volum ved formlikhet',
      problem: `En arkitekt lager en modell av et hus i målestokk 1 : 50.

a) En vegg på modellen er 16 cm lang. Hvor lang er den virkelige veggen?
b) Taket på modellen har et areal på 120 cm². Hva er arealet av det virkelige taket?
c) Modellhuset har et volum på 4800 cm³. Hva er volumet av det virkelige huset?`,
      solution: `**Losning:**

Formlikhetsfaktoren er $k = 50$ (fra modell til virkelighet).

a) Virkelig vegg $= 16 \\cdot 50 = 800 \\text{ cm} = 8 \\text{ m}$

b) Virkelig takareal $= 120 \\cdot 50^2 = 120 \\cdot 2500 = 300\\,000 \\text{ cm}^2 = 30 \\text{ m}^2$

c) Virkelig volum $= 4800 \\cdot 50^3 = 4800 \\cdot 125\\,000 = 600\\,000\\,000 \\text{ cm}^3 = 600 \\text{ m}^3$`,
    },
    // --- Blokk 14: Oppgave areal/volum ---
    {
      id: '1p-4-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los oppgavene om formlikhet og areal/volum:',
        subTasks: [
          { label: 'a', task: 'To formlike trekanter har formlikhetsfaktor $k = 4$. Den lille trekanten har areal 5 cm². Finn arealet av den store trekanten.', solution: '$A = 5 \\cdot 4^2 = 5 \\cdot 16 = 80$ cm²', answer: 80, multipleChoiceOptions: ['80 cm²', '20 cm²', '320 cm²', '40 cm²'] },
          { label: 'b', task: 'To formlike bokser har formlikhetsfaktor $k = 2$. Den lille boksen har volum 30 cm³. Finn volumet av den store boksen.', solution: '$V = 30 \\cdot 2^3 = 30 \\cdot 8 = 240$ cm³', answer: 240, multipleChoiceOptions: ['240 cm³', '60 cm³', '120 cm³', '480 cm³'] },
          { label: 'c', task: 'En liten statue er 15 cm hoy og veier 200 g. En formlik kopi er 45 cm hoy. Hvor mye veier kopien?', solution: '$k = \\frac{45}{15} = 3$. Vekt $\\propto$ volum $\\propto k^3 = 27$. Vekt $= 200 \\cdot 27 = 5400$ g $= 5{,}4$ kg', answer: 5400, multipleChoiceOptions: ['5400 g', '600 g', '1800 g', '16 200 g'] },
        ],
        solution: 'a) 80 cm²  b) 240 cm³  c) 5400 g = 5,4 kg',
        hints: ['Areal skaleres med k²', 'Volum (og vekt) skaleres med k³'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 15: Målestokk ---
    {
      id: '1p-4-5-malestokk',
      type: 'text',
      content: `## Målestokk som formlikhet

Målestokk er et spesialtilfelle av formlikhet. Et kart i målestokk 1 : 10 000 betyr at 1 cm på kartet tilsvarer 10 000 cm = 100 m i virkeligheten.

Generelt: Målestokk $1 : n$ betyr at formlikhetsfaktoren er $k = n$.

- **Fra kart til virkelighet:** Gang med $n$
- **Fra virkelighet til kart:** Del på $n$`,
    },
    // --- Blokk 16: Eksempel målestokk ---
    {
      id: '1p-4-5-example-5',
      type: 'example',
      title: 'Eksempel 5: Målestokk',
      problem: `Et kart har målestokk 1 : 25 000.

a) Avstanden mellom to hytter er 6 cm på kartet. Hvor langt er det i virkeligheten?
b) En innsjø er 800 m lang i virkeligheten. Hvor lang er innsjoen på kartet?
c) Et skogsområde måler 2 cm $\\times$ 3 cm på kartet. Hva er det virkelige arealet i m²?`,
      solution: `**Losning:**

a) Virkelig avstand $= 6 \\cdot 25\\,000 = 150\\,000 \\text{ cm} = 1500 \\text{ m} = 1{,}5 \\text{ km}$

b) $800 \\text{ m} = 80\\,000 \\text{ cm}$. På kartet: $\\frac{80\\,000}{25\\,000} = 3{,}2 \\text{ cm}$

c) Virkelig lengde: $2 \\cdot 25\\,000 = 50\\,000 \\text{ cm} = 500 \\text{ m}$
   Virkelig bredde: $3 \\cdot 25\\,000 = 75\\,000 \\text{ cm} = 750 \\text{ m}$
   Areal: $500 \\cdot 750 = 375\\,000 \\text{ m}^2 = 375 \\text{ dekar}$

Alternativt for areal: $A_{\\text{kart}} = 6 \\text{ cm}^2$, $A_{\\text{virkelig}} = 6 \\cdot 25\\,000^2 = 3{,}75 \\cdot 10^9 \\text{ cm}^2 = 375\\,000 \\text{ m}^2$.`,
    },
    // --- Blokk 17: Oppgave målestokk ---
    {
      id: '1p-4-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: '1p-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los oppgavene om målestokk:',
        subTasks: [
          { label: 'a', task: 'Et kart har målestokk 1 : 50 000. Avstanden mellom to steder er 4,5 cm på kartet. Finn avstanden i km.', solution: '$4{,}5 \\cdot 50\\,000 = 225\\,000$ cm $= 2{,}25$ km', answer: 2.25, multipleChoiceOptions: ['2,25 km', '22,5 km', '225 m', '0,225 km'] },
          { label: 'b', task: 'En bygning er 18 m lang. Hvor lang blir den på en tegning i målestokk 1 : 200?', solution: '$18 \\text{ m} = 1800 \\text{ cm}$. $\\frac{1800}{200} = 9$ cm', answer: 9, multipleChoiceOptions: ['9 cm', '0,9 cm', '90 cm', '36 cm'] },
          { label: 'c', task: 'En hage er 3 cm $\\times$ 4 cm på en tegning med målestokk 1 : 100. Finn det virkelige arealet i m².', solution: 'Virkelig: $300 \\text{ cm} \\times 400 \\text{ cm} = 3 \\text{ m} \\times 4 \\text{ m} = 12$ m²', answer: 12, multipleChoiceOptions: ['12 m²', '1200 m²', '1,2 m²', '120 m²'] },
        ],
        solution: 'a) 2,25 km  b) 9 cm  c) 12 m²',
        hints: ['Gang kartavstand med målestokkfaktoren for å finne virkelig avstand', 'Del virkelig avstand med målestokkfaktoren for å finne kartavstand', 'For areal: bruk k² eller regn om lengdene forst'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Blokk 18: Warning ---
    {
      id: '1p-4-5-warning',
      type: 'warning',
      title: 'Husk å bruke riktig potens!',
      content: `Når du bruker formlikhetsfaktor:
- **Lengder** skaleres med $k$
- **Areal** skaleres med $k^2$
- **Volum** skaleres med $k^3$

En vanlig feil er å bruke $k$ for areal og volum i stedet for $k^2$ og $k^3$.

**Eksempel:** Hvis $k = 3$, blir arealet $3^2 = 9$ ganger så stort, IKKE 3 ganger.`,
    },
    // --- Blokk 19: Oppsummering ---
    {
      id: '1p-4-5-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Formlike figurer har like vinkler og proporsjonale sider.
- Formlikhetsfaktor: $k = \\frac{\\text{side i ny figur}}{\\text{tilsvarende side i original}}$
- Ukjente sider finnes ved å gange med $k$.
- Areal skaleres med $k^2$, volum skaleres med $k^3$.
- Målestokk $1 : n$ betyr at formlikhetsfaktoren er $k = n$.
- Praktisk bruk: skyggeberegning, kart, modeller, arkitektur.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER
// ============================================================================

export const CHAPTERS_1P_GEOMETRI = [CHAPTER_1P_4_4, CHAPTER_1P_4_5];
