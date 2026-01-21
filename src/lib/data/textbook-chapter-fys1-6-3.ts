/**
 * Fysikk 1 - Kapittel 6.3: Effekt og energi i elektriske kretser
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_6_3: TextbookChapter = {
  id: 'fys1-6-3',
  courseId: 'fys1',
  chapterNumber: '6.3',
  title: 'Effekt og energi i elektriske kretser',
  description: 'Lær om elektrisk effekt, energiforbruk, kilowattime og virkningsgrad.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne elektrisk effekt',
    'forstå energiforbruk og kilowattime',
    'beregne virkningsgrad i elektriske systemer',
    'analysere energiomsetning i husholdninger',
  ],
  content: [
    {
      id: 'fys1-6-3-intro',
      type: 'text',
      content: `# Effekt og energi i elektriske kretser

Elektrisk energi driver moderne samfunn. Fra lysstoffer til datamaskiner - alt krever elektrisk energi.

## Elektrisk effekt

**Effekt** er energi per tidsenhet:

$$P = \\frac{E}{t}$$

hvor:
- $P$ = effekt (watt, W)
- $E$ = energi (joule, J)
- $t$ = tid (sekunder, s)

**Enhet:** 1 watt (W) = 1 joule per sekund (J/s)

## Elektrisk effekt i kretser

For en elektrisk komponent:

$$P = UI$$

hvor:
- $U$ = spenning over komponenten (V)
- $I$ = strøm gjennom komponenten (A)

**Tolkning:** Effekt er "hvor fort" elektrisk energi omsettes.

**Alternative uttrykk (ved bruk av Ohms lov $U = RI$):**

$$P = UI = (RI) \\cdot I = I^2 R$$

$$P = UI = U \\cdot \\frac{U}{R} = \\frac{U^2}{R}$$

**Oppsummert:**

$$P = UI = I^2 R = \\frac{U^2}{R}$$

**Når brukes hvilken formel?**
- Kjent $U$ og $I$: Bruk $P = UI$
- Kjent $I$ og $R$: Bruk $P = I^2 R$
- Kjent $U$ og $R$: Bruk $P = \\frac{U^2}{R}$`,
    },
    {
      id: 'fys1-6-3-def-effekt',
      type: 'definition',
      title: 'Elektrisk effekt',
      content: 'Elektrisk effekt: $P = UI = I^2 R = \\frac{U^2}{R}$. Måles i watt (W). 1 W = 1 J/s.',
    },
    {
      id: 'fys1-6-3-ex-effekt',
      type: 'example',
      title: 'Eksempel: Effekt i en resistor',
      problem: 'En resistor på 50 Ω er koblet til et 10 V batteri. Beregn effekten i resistoren.',
      solution: `**Gitt:**
- $R = 50$ Ω
- $U = 10$ V

**Søkt:** $P$

**Løsning:**

Metode 1 (med strøm):

$$I = \\frac{U}{R} = \\frac{10}{50} = 0.20 \\text{ A}$$

$$P = UI = 10 \\cdot 0.20 = 2.0 \\text{ W}$$

Metode 2 (direkte):

$$P = \\frac{U^2}{R} = \\frac{10^2}{50} = \\frac{100}{50} = 2.0 \\text{ W}$$

**Svar:** 2.0 W.`,
    },
    {
      id: 'fys1-6-3-energi',
      type: 'text',
      content: `# Elektrisk energi

**Energi** er effekt ganget med tid:

$$E = Pt$$

hvor:
- $E$ = energi (joule, J)
- $P$ = effekt (watt, W)
- $t$ = tid (sekunder, s)

**Alternative uttrykk:**

$$E = Pt = UIt = I^2 Rt = \\frac{U^2}{R} t$$

**Eksempel:** En 100 W lyspære som lyser i 10 timer:

$$E = Pt = 100 \\cdot (10 \\cdot 3600) = 3.6 \\times 10^6 \\text{ J} = 3.6 \\text{ MJ}$$

## Kilowattime (kWh)

I praksis brukes ofte **kilowattime** (kWh) som energienhet:

**Definisjon:** Energien som omsettes av en effekt på 1 kW i løpet av 1 time.

$$1 \\text{ kWh} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3.6 \\times 10^6 \\text{ J} = 3.6 \\text{ MJ}$$

**Eksempel (fortsettelse):** 100 W lyspære i 10 timer:

$$E = 100 \\text{ W} \\times 10 \\text{ h} = 1000 \\text{ Wh} = 1.0 \\text{ kWh}$$

**Strømregning:**

Hvis strømprisen er 1.50 kr/kWh:

$$\\text{Kostnad} = 1.0 \\text{ kWh} \\times 1.50 \\text{ kr/kWh} = 1.50 \\text{ kr}$$

## Typiske effekter

- **Mobiltelefon:** 5-10 W (lading)
- **Laptop:** 30-100 W
- **LED-lyspære:** 5-15 W
- **Glødelampe:** 40-100 W
- **TV:** 50-300 W
- **Kjøleskap:** 100-400 W
- **Varmtvannsbereder:** 2000-3000 W (2-3 kW)
- **Oppvaskmaskin:** 1800-2500 W
- **Elektrisk komfyr:** 5000-10000 W (5-10 kW)
- **Elbil (lading):** 3600-22000 W (3.6-22 kW)`,
    },
    {
      id: 'fys1-6-3-def-kwh',
      type: 'definition',
      title: 'Kilowattime',
      content: 'Kilowattime (kWh) er energi omsatt av 1 kW effekt på 1 time: 1 kWh = 3.6 MJ.',
    },
    {
      id: 'fys1-6-3-virkningsgrad',
      type: 'text',
      content: `# Virkningsgrad

**Virkningsgrad** er forholdet mellom nyttig energi og tilført energi:

$$\\eta = \\frac{E_{\\text{nyttig}}}{E_{\\text{tilført}}} = \\frac{P_{\\text{nyttig}}}{P_{\\text{tilført}}}$$

Ofte uttrykt i prosent:

$$\\eta = \\frac{E_{\\text{nyttig}}}{E_{\\text{tilført}}} \\times 100\\%$$

**Viktig:** $\\eta \\leq 1$ (eller $\\leq 100\\%$). Perfekt virkningsgrad er 1 (100%).

**Tapte energi:**

$$E_{\\text{tapt}} = E_{\\text{tilført}} - E_{\\text{nyttig}}$$

I elektriske systemer blir tapte energi vanligvis til varme.

## Typiske virkningsgrader

- **Glødelampe:** 5% (95% blir til varme!)
- **Lysstoffrør:** 20-30%
- **LED-pære:** 40-50%
- **Elektromotor:** 70-95%
- **Transformator:** 95-99%
- **Varmtvannsbereder:** ~99% (varme er "nyttig")
- **Kraftverk (kull):** 33-40%
- **Kraftverk (gass):** 50-60%
- **Vannkraftverk:** 85-95%
- **Solcelle:** 15-22%`,
    },
    {
      id: 'fys1-6-3-def-virkningsgrad',
      type: 'definition',
      title: 'Virkningsgrad',
      content: 'Virkningsgrad: $\\eta = \\frac{E_{\\text{nyttig}}}{E_{\\text{tilført}}}$ eller $\\eta = \\frac{P_{\\text{nyttig}}}{P_{\\text{tilført}}}$. Ofte uttrykt i prosent.',
    },
    {
      id: 'fys1-6-3-ex-virkningsgrad',
      type: 'example',
      title: 'Eksempel: Virkningsgrad',
      problem: 'En elektrisk motor tar inn 2.0 kW effekt og leverer 1.6 kW mekanisk effekt. a) Hva er virkningsgraden? b) Hvor mye energi går tapt som varme på 1 time?',
      solution: `**Gitt:**
- $P_{\\text{tilført}} = 2.0$ kW
- $P_{\\text{nyttig}} = 1.6$ kW
- $t = 1$ time

**a) Virkningsgrad:**

$$\\eta = \\frac{P_{\\text{nyttig}}}{P_{\\text{tilført}}} = \\frac{1.6}{2.0} = 0.80 = 80\\%$$

**b) Tapt effekt:**

$$P_{\\text{tapt}} = P_{\\text{tilført}} - P_{\\text{nyttig}} = 2.0 - 1.6 = 0.4 \\text{ kW}$$

Energi tapt på 1 time:

$$E_{\\text{tapt}} = P_{\\text{tapt}} \\times t = 0.4 \\text{ kW} \\times 1 \\text{ h} = 0.4 \\text{ kWh}$$

**Svar:**
a) 80%
b) 0.4 kWh (1.44 MJ)`,
    },
    {
      id: 'fys1-6-3-sikringer',
      type: 'text',
      content: `# Sikringer og sikkerhet

## Sikringer

**Sikring** er en sikkerhetsanordning som bryter kretsen hvis strømmen blir for høy.

**Funksjon:** En tynn metalltråd smelter hvis strømmen overstiger en grenseverdi.

**Eksempel:** 10 A sikring smelter hvis strømmen overstiger 10 A.

**Hvorfor viktig?**
- Beskytter mot brann (overoppheting)
- Beskytter utstyr mot skade

## Maksimal effekt på en sikring

Typisk husholdsikring: 230 V, 10 A eller 16 A

**Maksimal effekt (10 A):**

$$P_{\\text{max}} = UI = 230 \\cdot 10 = 2300 \\text{ W} = 2.3 \\text{ kW}$$

**Maksimal effekt (16 A):**

$$P_{\\text{max}} = 230 \\cdot 16 = 3680 \\text{ W} \\approx 3.7 \\text{ kW}$$

**Eksempel:** En stekeovn på 3000 W + en kjele på 1500 W = 4500 W overstiger 3.7 kW → sikringen går!

## Elektrisk sikkerhet

**Farlig strøm:**
- **1 mA:** Merkbar
- **5 mA:** Ubehagelig
- **10-20 mA:** Muskelkramper
- **50 mA:** Kan være dødelig
- **100 mA:** Hjertestans

**Jordfeil-bryter (jordfeilautomat):**
- Bryter kretsen hvis strøm lekker til jord
- Beskytter mot elektrisk støt
- Raskere enn sikring (30 ms)`,
    },
    {
      id: 'fys1-6-3-note-led',
      type: 'note',
      title: 'Hvorfor er LED-pærer så effektive?',
      content: `**Glødelamper:** Sender elektrisk strøm gjennom en tynnfilament av wolfram. Filamentet blir glødende varm (ca. 2500°C) og utsender lys. Men 95% av energien blir til varme!

**LED (Light Emitting Diode):** Når strøm går gjennom en halvleder, rekombinerer elektroner og hull, og frigjør energi som lys. Langt mindre varme utvikles.

**Resultat:** LED-pærer bruker 1/5 til 1/10 av energien til en glødelampe for samme lysstyrke. En 10 W LED-pære gir samme lys som en 60 W glødelampe!`,
    },
  ],
  exercises: [
    {
      id: 'fys1-6-3-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'En lyspære på 60 W er koblet til 230 V. Hva er strømmen gjennom lyspæren?',
      solution: `**Gitt:**
- $P = 60$ W
- $U = 230$ V

**Søkt:** $I$

**Løsning:**

$$P = UI$$

$$I = \\frac{P}{U} = \\frac{60}{230} = 0.26 \\text{ A}$$

**Svar:** 0.26 A (260 mA).`,
      hints: ['Bruk $P = UI$', 'Løs for $I$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-3-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En resistor på 25 Ω har en strøm på 2.0 A gjennom seg. Hva er effekten i resistoren?',
      solution: `**Gitt:**
- $R = 25$ Ω
- $I = 2.0$ A

**Søkt:** $P$

**Løsning:**

$$P = I^2 R = (2.0)^2 \\cdot 25 = 4.0 \\cdot 25 = 100 \\text{ W}$$

**Svar:** 100 W.`,
      hints: ['Bruk $P = I^2 R$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-3-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En varmtvannsbereder på 2000 W er på i 3 timer. Hvor mye energi brukes i kWh?',
      solution: `**Gitt:**
- $P = 2000$ W = 2.0 kW
- $t = 3$ timer

**Søkt:** $E$ (i kWh)

**Løsning:**

$$E = Pt = 2.0 \\text{ kW} \\times 3 \\text{ h} = 6.0 \\text{ kWh}$$

**Svar:** 6.0 kWh.`,
      hints: ['Bruk $E = Pt$', 'Konverter W til kW'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-3-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En elektrisk kjele på 2200 W er koblet til 230 V. a) Hva er strømmen? b) Hva er resistansen i kjelens varmeelement?',
      solution: `**Gitt:**
- $P = 2200$ W
- $U = 230$ V

**a) Strøm:**

$$I = \\frac{P}{U} = \\frac{2200}{230} = 9.57 \\text{ A}$$

**b) Resistans:**

$$R = \\frac{U}{I} = \\frac{230}{9.57} = 24.0 \\text{ Ω}$$

Eller direkte:

$$P = \\frac{U^2}{R}$$

$$R = \\frac{U^2}{P} = \\frac{230^2}{2200} = \\frac{52900}{2200} = 24.0 \\text{ Ω}$$

**Svar:**
a) 9.6 A
b) 24 Ω`,
      hints: ['Bruk $P = UI$', 'Bruk Ohms lov'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-3-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En husholdning bruker 15 kWh på en dag. Strømprisen er 1.20 kr/kWh. Hva blir strømkostnaden for en måned (30 dager)?',
      solution: `**Gitt:**
- Daglig forbruk: 15 kWh
- Pris: 1.20 kr/kWh
- Antall dager: 30

**Løsning:**

Månedlig forbruk:

$$E = 15 \\text{ kWh/dag} \\times 30 \\text{ dager} = 450 \\text{ kWh}$$

Kostnad:

$$\\text{Kostnad} = 450 \\text{ kWh} \\times 1.20 \\text{ kr/kWh} = 540 \\text{ kr}$$

**Svar:** 540 kr.`,
      hints: ['Finn totalt forbruk', 'Multipliser med pris'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-3-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En motor tar inn 1500 W elektrisk effekt og leverer 1200 W mekanisk effekt. a) Hva er virkningsgraden? b) Hvor mye effekt går tapt som varme?',
      solution: `**Gitt:**
- $P_{\\text{inn}} = 1500$ W
- $P_{\\text{ut}} = 1200$ W

**a) Virkningsgrad:**

$$\\eta = \\frac{P_{\\text{ut}}}{P_{\\text{inn}}} = \\frac{1200}{1500} = 0.80 = 80\\%$$

**b) Tapt effekt:**

$$P_{\\text{tapt}} = P_{\\text{inn}} - P_{\\text{ut}} = 1500 - 1200 = 300 \\text{ W}$$

**Svar:**
a) 80%
b) 300 W`,
      hints: ['Virkningsgrad: $\\eta = \\frac{P_{\\text{ut}}}{P_{\\text{inn}}}$', 'Tapt = inn - ut'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-3-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'En 100 W glødelampe har virkningsgrad 5%. Hvor mye av effekten blir til lys, og hvor mye blir til varme?',
      solution: `**Gitt:**
- $P_{\\text{total}} = 100$ W
- $\\eta = 5\\% = 0.05$

**Løsning:**

Lyseffekt:

$$P_{\\text{lys}} = \\eta \\times P_{\\text{total}} = 0.05 \\times 100 = 5 \\text{ W}$$

Varmeeffekt:

$$P_{\\text{varme}} = P_{\\text{total}} - P_{\\text{lys}} = 100 - 5 = 95 \\text{ W}$$

**Svar:** 5 W blir til lys, 95 W blir til varme.`,
      hints: ['Nyttig effekt = virkningsgrad × total effekt', 'Tapt effekt = rest'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-3-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'medium',
      task: 'En husholdsikring på 16 A er koblet til 230 V. a) Hva er maksimal effekt sikringen tåler? b) Kan du bruke en stekeovn på 2500 W og en oppvaskmaskin på 2000 W samtidig?',
      solution: `**Gitt:**
- $I_{\\text{max}} = 16$ A
- $U = 230$ V
- Stekeovn: 2500 W
- Oppvaskmaskin: 2000 W

**a) Maksimal effekt:**

$$P_{\\text{max}} = UI_{\\text{max}} = 230 \\cdot 16 = 3680 \\text{ W}$$

**b) Total effekt ved samtidig bruk:**

$$P_{\\text{total}} = 2500 + 2000 = 4500 \\text{ W}$$

Sammenligning:

$$P_{\\text{total}} = 4500 \\text{ W} > P_{\\text{max}} = 3680 \\text{ W}$$

**Svar:**
a) 3680 W
b) Nei, sikringen går (4500 W > 3680 W).`,
      hints: ['Maksimal effekt: $P = UI$', 'Sammenlign total med maksimal'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-3-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En LED-pære på 10 W og en glødelampe på 60 W gir samme lysstyrke. Begge lyser 5 timer per dag i 365 dager. Strømprisen er 1.50 kr/kWh. Hvor mye sparer du på et år ved å bruke LED?',
      solution: `**Gitt:**
- LED: 10 W
- Glødelampe: 60 W
- Tid: 5 timer/dag × 365 dager = 1825 timer/år
- Pris: 1.50 kr/kWh

**Energi (LED):**

$$E_{\\text{LED}} = 10 \\text{ W} \\times 1825 \\text{ h} = 18250 \\text{ Wh} = 18.25 \\text{ kWh}$$

**Energi (glødelampe):**

$$E_{\\text{gløde}} = 60 \\text{ W} \\times 1825 \\text{ h} = 109500 \\text{ Wh} = 109.5 \\text{ kWh}$$

**Kostnad (LED):**

$$\\text{Kostnad}_{\\text{LED}} = 18.25 \\times 1.50 = 27.4 \\text{ kr}$$

**Kostnad (glødelampe):**

$$\\text{Kostnad}_{\\text{gløde}} = 109.5 \\times 1.50 = 164.3 \\text{ kr}$$

**Besparelse:**

$$\\text{Besparelse} = 164.3 - 27.4 = 136.9 \\text{ kr}$$

**Svar:** Du sparer ca. 137 kr per år.`,
      hints: ['Beregn energi for hver', 'Beregn kostnad', 'Finn differansen'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-3-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et kraftverk produserer 1000 MW effekt. Elektrisk energi overføres i høyspentlinjer ved 300 kV til en by 100 km unna. Linjenes resistans er 0.10 Ω/km. a) Hva er total resistans? b) Hva er strømmen? c) Hvor mye effekt tapes i linjene? d) Hva blir virkningsgraden?',
      solution: `**Gitt:**
- $P = 1000$ MW = $10^9$ W
- $U = 300$ kV = $3 \\times 10^5$ V
- Lengde: 100 km
- Resistans: 0.10 Ω/km

**a) Total resistans:**

$$R = 0.10 \\text{ Ω/km} \\times 100 \\text{ km} = 10 \\text{ Ω}$$

**b) Strøm:**

$$I = \\frac{P}{U} = \\frac{10^9}{3 \\times 10^5} = 3333 \\text{ A}$$

**c) Effekttap:**

$$P_{\\text{tap}} = I^2 R = (3333)^2 \\times 10 = 1.11 \\times 10^8 \\text{ W} = 111 \\text{ MW}$$

**d) Virkningsgrad:**

$$\\eta = \\frac{P - P_{\\text{tap}}}{P} = \\frac{1000 - 111}{1000} = 0.889 = 88.9\\%$$

**Svar:**
a) 10 Ω
b) 3333 A
c) 111 MW
d) 88.9%

**Kommentar:** Dette er hvorfor vi bruker høyspenning - lavere strøm gir mindre tap!`,
      hints: ['Total R = R per km × antall km', 'Strøm: $I = \\frac{P}{U}$', 'Tap: $P = I^2R$'],
      allowsUpload: true,
    },
  ],
};
