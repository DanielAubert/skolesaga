/**
 * Fysikk 1 - Kapittel 5.1: Temperatur og varme
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_5_1: TextbookChapter = {
  id: 'fys1-5-1',
  courseId: 'fys1',
  chapterNumber: '5.1',
  title: 'Temperatur og varme',
  description: 'Lær om temperatur, varme som energioverføring, termisk likevekt og spesifikk varmekapasitet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare forskjellen mellom temperatur og varme',
    'gjøre om mellom celsius og kelvin',
    'forklare hva termisk likevekt er',
    'bruke formelen Q = mcΔT til beregninger',
    'beskrive hva spesifikk varmekapasitet er',
  ],
  content: [
    {
      id: 'fys1-5-1-intro',
      type: 'text',
      content: `# Temperatur og varme

**Temperatur** og **varme** er sentrale begreper i fysikk. Selv om de ofte brukes om hverandre i dagligtalen, har de forskjellige betydninger i fysikk.

## Hva er temperatur?

**Temperatur** er et mål på hvor raskt molekylene i et stoff beveger seg. Jo høyere temperatur, desto raskere beveger molekylene seg.

**Mikroskopisk forklaring:**
- Alle molekyler er i konstant bevegelse
- Denne bevegelsen kalles **termisk bevegelse**
- Temperaturen er et mål på gjennomsnittlig **kinetisk energi** per molekyl
- Høy temperatur = rask molekylbevegelse = høy kinetisk energi
- Lav temperatur = langsom molekylbevegelse = lav kinetisk energi

**Ved absolutt nullpunkt (0 K = -273,15°C):**
- Molekylenes bevegelse er minimal (ikke fullstendig stoppet pga. kvantemekanikk)
- Dette er den laveste mulige temperaturen

## Hva er varme?

**Varme** er energi som overføres fra et legeme med høy temperatur til et legeme med lav temperatur.

**Viktige punkter:**
- Varme er **energi i bevegelse** (ikke en tilstand)
- Varme overføres alltid fra varmere til kaldere
- Varme er **ikke** det samme som temperatur
- Varme måles i **joule (J)**
- Varme er et resultat av temperaturforskjell

**Analogi:**
- Temperatur = høyden på et vannspeil
- Varme = vannstrømmen mellom to kar
- Vann strømmer fra høyt nivå til lavt nivå
- Varme strømmer fra høy temperatur til lav temperatur`,
    },
    {
      id: 'fys1-5-1-def-temperatur',
      type: 'definition',
      title: 'Temperatur',
      content: 'Temperatur er et mål på gjennomsnittlig kinetisk energi per molekyl i et stoff. Det forteller oss hvor raskt molekylene beveger seg.',
    },
    {
      id: 'fys1-5-1-def-varme',
      type: 'definition',
      title: 'Varme',
      content: 'Varme er energi som overføres fra et legeme med høy temperatur til et legeme med lav temperatur. Varme måles i joule (J) og er energi i bevegelse, ikke en tilstand.',
    },
    {
      id: 'fys1-5-1-temperaturskalaer',
      type: 'text',
      content: `# Temperaturskalaer

Det finnes flere temperaturskalaer. De to viktigste er **Celsius** og **Kelvin**.

## Celsius-skalaen (°C)

**Celsius-skalaen** er basert på vannets frysepunkt og kokepunkt ved normalt lufttrykk (1 atm = 101 325 Pa).

**Referansepunkter:**
- **0°C:** Vannets frysepunkt (is smelter)
- **100°C:** Vannets kokepunkt

**Fordeler:**
- Praktisk for dagliglivet
- Vannet fryser ved 0°C, koker ved 100°C
- Brukes i værmelding og hverdagslige sammenhenger

**Ulemper:**
- Negative temperaturer kan være upraktiske i beregninger
- Ikke basert på absolutt nullpunkt

## Kelvin-skalaen (K)

**Kelvin-skalaen** er den vitenskapelige temperaturskalaen. Den er basert på absolutt nullpunkt.

**Referansepunkter:**
- **0 K:** Absolutt nullpunkt (-273,15°C)
- **273,15 K:** Vannets frysepunkt
- **373,15 K:** Vannets kokepunkt

**Fordeler:**
- Basert på absolutt nullpunkt
- Ingen negative temperaturer
- Brukes i vitenskapelige beregninger
- SI-enheten for temperatur

**Viktig:**
- Vi sier "kelvin", ikke "grader kelvin"
- Vi skriver "K", ikke "°K"

## Omregning mellom Celsius og Kelvin

**Fra Celsius til Kelvin:**

$$T_{\\text{K}} = T_{\\text{°C}} + 273{,}15$$

**Fra Kelvin til Celsius:**

$$T_{\\text{°C}} = T_{\\text{K}} - 273{,}15$$

**Forenklet (ofte brukt):**

$$T_{\\text{K}} = T_{\\text{°C}} + 273$$

**Viktig:**
- Temperatur**forskjeller** er like store i begge skalaer
- Eksempel: Forskjellen mellom 20°C og 30°C er 10°C = 10 K
- $\\Delta T_{\\text{K}} = \\Delta T_{\\text{°C}}$`,
    },
    {
      id: 'fys1-5-1-ex-omregning',
      type: 'example',
      title: 'Eksempel: Omregning mellom temperaturskalaer',
      problem: 'a) Romtemperatur er 22°C. Hva er dette i kelvin?\n\nb) Flytende nitrogen koker ved 77 K. Hva er dette i celsius?',
      solution: `**a) 22°C til kelvin:**

Bruker formelen:

$$T_{\\text{K}} = T_{\\text{°C}} + 273{,}15$$

$$T_{\\text{K}} = 22 + 273{,}15 = 295{,}15 \\text{ K}$$

**Svar:** 22°C = 295,15 K (eller omtrent 295 K)

**b) 77 K til celsius:**

Bruker formelen:

$$T_{\\text{°C}} = T_{\\text{K}} - 273{,}15$$

$$T_{\\text{°C}} = 77 - 273{,}15 = -196{,}15 \\text{°C}$$

**Svar:** 77 K = -196,15°C (eller omtrent -196°C)

**Tolkning:** Flytende nitrogen er ekstremt kaldt!`,
    },
    {
      id: 'fys1-5-1-termisk-likevekt',
      type: 'text',
      content: `# Termisk likevekt

Når to legemer med forskjellig temperatur kommer i kontakt, vil varme overføres fra det varmere til det kaldere legemet.

## Hva skjer?

**Før kontakt:**
- Legeme A har høy temperatur $T_A$
- Legeme B har lav temperatur $T_B$
- $T_A > T_B$

**Under kontakt:**
- Varme overføres fra A til B
- A avkjøles (temperatur synker)
- B varmes opp (temperatur stiger)
- Varmeoverføringen fortsetter

**Ved termisk likevekt:**
- Begge legemer har samme temperatur: $T_A = T_B$
- Ingen netto varmeoverføring
- **Termisk likevekt er oppnådd**

## Energibevaring

Total energi er bevart under prosessen:

$$Q_{\\text{tapt av A}} = Q_{\\text{mottatt av B}}$$

Den varmen A mister, får B. Det er ingen energi som "forsvinner".

**Isolert system:**
- Ingen varme overføres til eller fra omgivelsene
- Total energi i systemet er konstant
- $Q_{\\text{inn}} = Q_{\\text{ut}}$`,
    },
    {
      id: 'fys1-5-1-def-termisk-likevekt',
      type: 'definition',
      title: 'Termisk likevekt',
      content: 'Termisk likevekt oppstår når to legemer i kontakt har samme temperatur. Ved termisk likevekt er det ingen netto varmeoverføring mellom legemene.',
    },
    {
      id: 'fys1-5-1-spesifikk-varmekapasitet',
      type: 'text',
      content: `# Spesifikk varmekapasitet

Hvor mye varme trengs for å varme opp et stoff? Det avhenger av:
1. **Masse** ($m$): Mer masse krever mer varme
2. **Temperaturendring** ($\\Delta T$): Større endring krever mer varme
3. **Stoffets natur**: Noen stoff varmes lettere opp enn andre

Det tredje punktet uttrykkes med **spesifikk varmekapasitet**.

## Definisjon

**Spesifikk varmekapasitet** ($c$) er varmen som trengs for å varme opp 1 kg av et stoff med 1°C (eller 1 K).

**Enhet:** J/(kg·°C) eller J/(kg·K)

**Forskjellige stoff:**
- Vann har høy spesifikk varmekapasitet: $c_{\\text{vann}} = 4180 \\text{ J/(kg·°C)}$
- Metaller har lav spesifikk varmekapasitet
  - Aluminium: $c_{\\text{Al}} = 900 \\text{ J/(kg·°C)}$
  - Jern: $c_{\\text{Fe}} = 450 \\text{ J/(kg·°C)}$
  - Kobber: $c_{\\text{Cu}} = 385 \\text{ J/(kg·°C)}$

**Betydning:**
- **Høy** spesifikk varmekapasitet: Vanskelig å varme opp, men holder på varmen lenge
  - Eksempel: Vann (hav, innsjøer regulerer klima)
- **Lav** spesifikk varmekapasitet: Lett å varme opp, men avkjøles raskt
  - Eksempel: Metaller (stekepanne blir raskt varm)

## Formelen for varme

Varmen $Q$ som trengs for å endre temperaturen til et legeme er:

$$Q = mc\\Delta T$$

**Der:**
- $Q$ = varme (J)
- $m$ = masse (kg)
- $c$ = spesifikk varmekapasitet (J/(kg·°C))
- $\\Delta T$ = temperaturendring (°C eller K)

**Temperaturendring:**

$$\\Delta T = T_{\\text{slutt}} - T_{\\text{start}}$$

**Viktig:**
- Hvis $\\Delta T > 0$: Stoffet varmes opp, $Q > 0$
- Hvis $\\Delta T < 0$: Stoffet avkjøles, $Q < 0$ (avgir varme)

## Spesifikk varmekapasitet for noen stoff

| Stoff | $c$ (J/(kg·°C)) |
|-------|-----------------|
| Vann (flytende) | 4180 |
| Is | 2100 |
| Vanndamp | 2000 |
| Aluminium | 900 |
| Luft (ved konstant trykk) | 1005 |
| Jern | 450 |
| Kobber | 385 |
| Gull | 129 |
| Kvikksølv | 139 |`,
    },
    {
      id: 'fys1-5-1-ex-spesifikk-varmekapasitet',
      type: 'example',
      title: 'Eksempel: Varme opp vann',
      problem: 'Hvor mye energi trengs for å varme opp 2,0 kg vann fra 20°C til 80°C?\n\nSpesifikk varmekapasitet for vann: $c = 4180 \\text{ J/(kg·°C)}$',
      solution: `**Gitt:**
- $m = 2{,}0 \\text{ kg}$
- $T_{\\text{start}} = 20 \\text{°C}$
- $T_{\\text{slutt}} = 80 \\text{°C}$
- $c = 4180 \\text{ J/(kg·°C)}$

**Finn temperaturendring:**

$$\\Delta T = T_{\\text{slutt}} - T_{\\text{start}} = 80 - 20 = 60 \\text{°C}$$

**Bruk formelen:**

$$Q = mc\\Delta T$$

$$Q = 2{,}0 \\cdot 4180 \\cdot 60$$

$$Q = 501\\,600 \\text{ J} = 502 \\text{ kJ}$$

**Svar:** Det trengs omtrent 502 kJ for å varme opp vannet.

**Tolkning:** Dette er mye energi! Det viser at vann har høy spesifikk varmekapasitet og krever mye energi for temperaturendringer.`,
    },
    {
      id: 'fys1-5-1-ex-termisk-likevekt-beregning',
      type: 'example',
      title: 'Eksempel: Termisk likevekt - blandingstemperatur',
      problem: 'En aluminiumskloss på 0,50 kg med temperatur 100°C senkes ned i 1,0 kg vann med temperatur 20°C. Hva blir slutttemperaturen når termisk likevekt er oppnådd?\n\nAntatt at varmetap til omgivelsene er neglisjerbart.\n\n**Spesifikk varmekapasitet:**\n- Aluminium: $c_{\\text{Al}} = 900 \\text{ J/(kg·°C)}$\n- Vann: $c_{\\text{vann}} = 4180 \\text{ J/(kg·°C)}$',
      solution: `**Gitt:**
- Aluminium: $m_{\\text{Al}} = 0{,}50 \\text{ kg}$, $T_{\\text{Al,start}} = 100 \\text{°C}$, $c_{\\text{Al}} = 900 \\text{ J/(kg·°C)}$
- Vann: $m_{\\text{vann}} = 1{,}0 \\text{ kg}$, $T_{\\text{vann,start}} = 20 \\text{°C}$, $c_{\\text{vann}} = 4180 \\text{ J/(kg·°C)}$
- Slutttemperatur: $T$ (ukjent)

**Prinsipp:**
Varmen som aluminium avgir = Varmen som vann mottar

$$Q_{\\text{Al}} = -Q_{\\text{vann}}$$

**Aluminiums temperatur synker (avgir varme):**

$$Q_{\\text{Al}} = m_{\\text{Al}} c_{\\text{Al}} (T - T_{\\text{Al,start}})$$

$$Q_{\\text{Al}} = 0{,}50 \\cdot 900 \\cdot (T - 100)$$

**Vannets temperatur stiger (mottar varme):**

$$Q_{\\text{vann}} = m_{\\text{vann}} c_{\\text{vann}} (T - T_{\\text{vann,start}})$$

$$Q_{\\text{vann}} = 1{,}0 \\cdot 4180 \\cdot (T - 20)$$

**Energibevaring:**

$$Q_{\\text{Al}} + Q_{\\text{vann}} = 0$$

$$0{,}50 \\cdot 900 \\cdot (T - 100) + 1{,}0 \\cdot 4180 \\cdot (T - 20) = 0$$

$$450(T - 100) + 4180(T - 20) = 0$$

$$450T - 45\\,000 + 4180T - 83\\,600 = 0$$

$$4630T = 128\\,600$$

$$T = \\frac{128\\,600}{4630} \\approx 27{,}8 \\text{°C}$$

**Svar:** Slutttemperaturen blir omtrent 28°C.

**Tolkning:** Temperaturen øker lite (fra 20°C til 28°C) fordi vann har mye høyere spesifikk varmekapasitet enn aluminium. Vannet "dominerer" temperaturendringen.`,
    },
  ],
  exercises: [
    {
      id: 'fys1-5-1-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar forskjellen mellom temperatur og varme.',
      solution: `**Temperatur:**
- Mål på gjennomsnittlig kinetisk energi per molekyl
- Forteller oss hvor raskt molekylene beveger seg
- Måles i °C (celsius) eller K (kelvin)
- Egenskapen til et legeme

**Varme:**
- Energi som overføres mellom legemer med forskjellig temperatur
- Strømmer fra høy temperatur til lav temperatur
- Måles i J (joule)
- Energi i bevegelse, ikke en tilstand

**Analogi:**
- Temperatur = høyden på et vannspeil
- Varme = vannstrømmen mellom to kar

**Eksempel:**
To kopper vann kan ha samme temperatur (50°C), men hvis den ene inneholder mer vann, har den mer **termisk energi** (større total energi). Varme er energien som overføres hvis de hadde forskjellige temperaturer.`,
      hints: ['Hva måles i joule?', 'Hva er en tilstand vs. energioverføring?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-1-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Gjør om følgende temperaturer:\n\na) 25°C til kelvin\n\nb) 300 K til celsius\n\nc) -40°C til kelvin',
      solution: `**a) 25°C til kelvin:**

$$T_K = T_{°C} + 273{,}15 = 25 + 273{,}15 = 298{,}15 \\text{ K}$$

**Svar:** 298 K (eller 298,15 K)

**b) 300 K til celsius:**

$$T_{°C} = T_K - 273{,}15 = 300 - 273{,}15 = 26{,}85 \\text{°C}$$

**Svar:** 27°C (eller 26,85°C)

**c) -40°C til kelvin:**

$$T_K = T_{°C} + 273{,}15 = -40 + 273{,}15 = 233{,}15 \\text{ K}$$

**Svar:** 233 K (eller 233,15 K)`,
      hints: ['Bruk $T_K = T_{°C} + 273$', 'Omvendt: $T_{°C} = T_K - 273$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-1-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva betyr det at to legemer er i termisk likevekt?',
      solution: `**Termisk likevekt:**

To legemer er i termisk likevekt når de har **samme temperatur**.

**Egenskaper ved termisk likevekt:**
- Ingen netto varmeoverføring mellom legemene
- Temperaturen er den samme i begge
- Tilstanden forblir stabil uten ytre påvirkning

**Før termisk likevekt:**
- Legeme A: høy temperatur
- Legeme B: lav temperatur
- Varme strømmer fra A til B

**Under prosessen:**
- A kjøles ned
- B varmes opp
- Varmeoverføring pågår

**Ved termisk likevekt:**
- Begge har samme temperatur
- Ingen netto varmeoverføring
- System er i likevekt

**Eksempel:**
Når du setter en varm kopp kaffe på bordet, vil kaffen avkjøles og bordet varmes opp (lokalt). Når de har samme temperatur, er termisk likevekt oppnådd.`,
      hints: ['Hva skjer med temperaturen?', 'Hva skjer med varmeoverføringen?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-1-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hvor mye energi trengs for å varme opp 1,5 kg vann fra 15°C til 65°C?\n\nSpesifikk varmekapasitet for vann: $c = 4180 \\text{ J/(kg·°C)}$',
      solution: `**Gitt:**
- $m = 1{,}5 \\text{ kg}$
- $T_{\\text{start}} = 15 \\text{°C}$
- $T_{\\text{slutt}} = 65 \\text{°C}$
- $c = 4180 \\text{ J/(kg·°C)}$

**Temperaturendring:**

$$\\Delta T = T_{\\text{slutt}} - T_{\\text{start}} = 65 - 15 = 50 \\text{°C}$$

**Bruk formelen:**

$$Q = mc\\Delta T$$

$$Q = 1{,}5 \\cdot 4180 \\cdot 50$$

$$Q = 313\\,500 \\text{ J} = 314 \\text{ kJ}$$

**Svar:** Det trengs omtrent 314 kJ (eller 313,5 kJ).`,
      hints: ['Bruk $Q = mc\\Delta T$', 'Finn temperaturendringen først'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-1-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En jernkloss på 2,0 kg varmes opp fra 20°C til 120°C. Hvor mye energi er brukt?\n\nSpesifikk varmekapasitet for jern: $c_{\\text{Fe}} = 450 \\text{ J/(kg·°C)}$',
      solution: `**Gitt:**
- $m = 2{,}0 \\text{ kg}$
- $T_{\\text{start}} = 20 \\text{°C}$
- $T_{\\text{slutt}} = 120 \\text{°C}$
- $c_{\\text{Fe}} = 450 \\text{ J/(kg·°C)}$

**Temperaturendring:**

$$\\Delta T = 120 - 20 = 100 \\text{°C}$$

**Bruk formelen:**

$$Q = mc\\Delta T$$

$$Q = 2{,}0 \\cdot 450 \\cdot 100$$

$$Q = 90\\,000 \\text{ J} = 90 \\text{ kJ}$$

**Svar:** 90 kJ er brukt.`,
      hints: ['Bruk $Q = mc\\Delta T$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-1-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvorfor tar det lengre tid å koke 2 liter vann enn 1 liter vann (med samme varmekilde)?',
      solution: `**Årsak:**

Varmen som trengs for å koke vann er gitt av:

$$Q = mc\\Delta T$$

**1 liter vann:**
- $m_1 = 1 \\text{ kg}$ (1 liter vann = 1 kg)
- $Q_1 = 1 \\cdot c \\cdot \\Delta T$

**2 liter vann:**
- $m_2 = 2 \\text{ kg}$
- $Q_2 = 2 \\cdot c \\cdot \\Delta T$

**Sammenligning:**

$$Q_2 = 2 \\cdot Q_1$$

2 liter vann trenger **dobbelt så mye energi** som 1 liter.

Hvis varmekilden leverer samme effekt (samme energi per tid), vil det ta **dobbelt så lang tid** å koke 2 liter.

**Konklusjon:** Mer masse krever mer energi for samme temperaturendring, derfor lengre tid med samme varmekilde.`,
      hints: ['Hva er formelen for varme?', 'Hva skjer når massen dobles?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-1-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'En kopp aluminium på 0,20 kg med temperatur 80°C settes ned i 0,50 kg vann med temperatur 20°C. Hva blir slutttemperaturen?\n\n**Spesifikk varmekapasitet:**\n- Aluminium: $c_{\\text{Al}} = 900 \\text{ J/(kg·°C)}$\n- Vann: $c_{\\text{vann}} = 4180 \\text{ J/(kg·°C)}$',
      solution: `**Gitt:**
- Aluminium: $m_{\\text{Al}} = 0{,}20 \\text{ kg}$, $T_{\\text{Al}} = 80 \\text{°C}$, $c_{\\text{Al}} = 900 \\text{ J/(kg·°C)}$
- Vann: $m_{\\text{vann}} = 0{,}50 \\text{ kg}$, $T_{\\text{vann}} = 20 \\text{°C}$, $c_{\\text{vann}} = 4180 \\text{ J/(kg·°C)}$
- Slutttemperatur: $T$ (ukjent)

**Energibevaring:**

$$Q_{\\text{Al}} + Q_{\\text{vann}} = 0$$

$$m_{\\text{Al}} c_{\\text{Al}} (T - 80) + m_{\\text{vann}} c_{\\text{vann}} (T - 20) = 0$$

$$0{,}20 \\cdot 900 \\cdot (T - 80) + 0{,}50 \\cdot 4180 \\cdot (T - 20) = 0$$

$$180(T - 80) + 2090(T - 20) = 0$$

$$180T - 14\\,400 + 2090T - 41\\,800 = 0$$

$$2270T = 56\\,200$$

$$T = \\frac{56\\,200}{2270} \\approx 24{,}8 \\text{°C}$$

**Svar:** Slutttemperaturen blir omtrent 25°C.`,
      hints: ['Bruk energibevaring', 'Varme tapt = Varme mottatt'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-1-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvorfor har vann høy spesifikk varmekapasitet, og hvordan påvirker dette klimaet ved kysten?',
      solution: `**Hvorfor vann har høy spesifikk varmekapasitet:**

Vann har høy spesifikk varmekapasitet ($c = 4180 \\text{ J/(kg·°C)}$) fordi:

1. **Hydrogenbindinger:** Vannmolekyler er bundet sammen med sterke hydrogenbindinger
2. **Energi til å bryte bindinger:** Mye energi trengs for å øke molekylenes kinetiske energi fordi energien også brukes til å svekke hydrogenbindinger
3. **Små molekyler:** Vann har relativt mange molekyler per kg (høy antall frihetsgrader)

**Effekt på klima ved kysten:**

**1. Stabile temperaturer:**
- Havet varmes langsomt opp om sommeren
- Havet avkjøles langsomt om vinteren
- Kysten har mindre temperatursvingninger enn innlandet

**2. Mild vinter:**
- Havet avgir varme langsomt
- Holder kysten varmere om vinteren

**3. Kjølig sommer:**
- Havet tar opp mye varme
- Holder kysten kjøligere om sommeren

**4. Moderat klima:**
- Mindre ekstreme temperaturer
- "Maritimt klima" ved kysten
- "Kontinentalt klima" inne i landet (store temperatursvingninger)

**Eksempel:**
- Bergen (kyst): Vinter ~0°C, Sommer ~16°C (forskjell 16°C)
- Karasjok (innland): Vinter ~-15°C, Sommer ~13°C (forskjell 28°C)

**Konklusjon:** Vannets høye spesifikke varmekapasitet gjør at havet fungerer som en "termostat" som stabiliserer temperaturene ved kysten.`,
      hints: ['Hva betyr høy spesifikk varmekapasitet?', 'Hvordan påvirker havet temperaturen?'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-1-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En elkoker har effekt 2000 W. Hvor lang tid tar det å koke 1,5 liter vann fra 20°C til 100°C?\n\nAnta at all energi går til å varme vannet (ingen tap).\n\nSpesifikk varmekapasitet for vann: $c = 4180 \\text{ J/(kg·°C)}$',
      solution: `**Gitt:**
- Effekt: $P = 2000 \\text{ W} = 2000 \\text{ J/s}$
- Volum: $V = 1{,}5 \\text{ L} = 1{,}5 \\text{ kg}$ (1 liter vann = 1 kg)
- $T_{\\text{start}} = 20 \\text{°C}$
- $T_{\\text{slutt}} = 100 \\text{°C}$
- $c = 4180 \\text{ J/(kg·°C)}$

**Steg 1: Finn varmen som trengs**

$$\\Delta T = 100 - 20 = 80 \\text{°C}$$

$$Q = mc\\Delta T = 1{,}5 \\cdot 4180 \\cdot 80 = 501\\,600 \\text{ J}$$

**Steg 2: Finn tid**

Effekt er energi per tid:

$$P = \\frac{Q}{t}$$

Løs for tid:

$$t = \\frac{Q}{P} = \\frac{501\\,600}{2000} = 250{,}8 \\text{ s}$$

Omregning til minutter:

$$t = \\frac{250{,}8}{60} \\approx 4{,}2 \\text{ min}$$

**Svar:** Det tar omtrent 4,2 minutter (eller 251 sekunder).`,
      hints: ['Finn først energien $Q = mc\\Delta T$', 'Bruk $P = Q/t$ til å finne tid'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-5-1-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et stykke kobber på 0,30 kg med ubestemt temperatur senkes ned i 0,80 kg vann med temperatur 18°C. Slutttemperaturen blir 25°C. Hva var kobberets starttemperatur?\n\n**Spesifikk varmekapasitet:**\n- Kobber: $c_{\\text{Cu}} = 385 \\text{ J/(kg·°C)}$\n- Vann: $c_{\\text{vann}} = 4180 \\text{ J/(kg·°C)}$',
      solution: `**Gitt:**
- Kobber: $m_{\\text{Cu}} = 0{,}30 \\text{ kg}$, $T_{\\text{Cu,start}} = ?$, $c_{\\text{Cu}} = 385 \\text{ J/(kg·°C)}$
- Vann: $m_{\\text{vann}} = 0{,}80 \\text{ kg}$, $T_{\\text{vann,start}} = 18 \\text{°C}$, $c_{\\text{vann}} = 4180 \\text{ J/(kg·°C)}$
- Slutttemperatur: $T = 25 \\text{°C}$

**Energibevaring:**

$$Q_{\\text{Cu}} + Q_{\\text{vann}} = 0$$

**Varmen som kobber avgir:**

$$Q_{\\text{Cu}} = m_{\\text{Cu}} c_{\\text{Cu}} (T - T_{\\text{Cu,start}})$$

$$Q_{\\text{Cu}} = 0{,}30 \\cdot 385 \\cdot (25 - T_{\\text{Cu,start}})$$

**Varmen som vann mottar:**

$$Q_{\\text{vann}} = m_{\\text{vann}} c_{\\text{vann}} (T - T_{\\text{vann,start}})$$

$$Q_{\\text{vann}} = 0{,}80 \\cdot 4180 \\cdot (25 - 18)$$

$$Q_{\\text{vann}} = 3344 \\cdot 7 = 23\\,408 \\text{ J}$$

**Energibevaring:**

$$Q_{\\text{Cu}} + Q_{\\text{vann}} = 0$$

$$0{,}30 \\cdot 385 \\cdot (25 - T_{\\text{Cu,start}}) + 23\\,408 = 0$$

$$115{,}5 \\cdot (25 - T_{\\text{Cu,start}}) = -23\\,408$$

$$25 - T_{\\text{Cu,start}} = \\frac{-23\\,408}{115{,}5}$$

$$25 - T_{\\text{Cu,start}} = -202{,}6$$

$$T_{\\text{Cu,start}} = 25 + 202{,}6 = 227{,}6 \\text{°C}$$

**Svar:** Kobberets starttemperatur var omtrent 228°C.`,
      hints: ['Bruk energibevaring', 'Finn først varmen som vann mottar', 'Løs for ukjent starttemperatur'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
