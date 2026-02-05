/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2 - Del 4: Vulkaner og jordskjelv
 *
 * Dekker LK20-kompetansemaal for geofag 1 (GEO01-01)
 * Kapittel 4 med 5 underkapitler
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Vulkanenes oppbygging og typer
// ============================================================================

export const CHAPTER_GEOFAG_1_4_1: TextbookChapter = {
  id: 'geofag-1-4-1',
  courseId: 'geofag-1',
  chapterNumber: '4.1',
  title: 'Vulkanenes oppbygging og typer',
  description: 'Vulkaners struktur, magmakammere og ulike vulkantyper.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hvordan vulkaner er bygd opp',
    'beskrive de ulike vulkantypene og deres kjennetegn',
    'gjore rede for sammenhengen mellom magmatype og vulkanform',
  ],
  content: [
    {
      id: 'geo1-4-1-intro',
      type: 'text',
      content: `# Vulkanenes oppbygging og typer

Vulkaner er naturens mest imponerende vinduer inn til jordens indre. De er apninger i jordskorpen der smeltet bergart, gasser og fast materiale kan na overflaten. For aa forsta vulkaner maa vi forst forsta hvordan de er bygd opp.

## Vulkanens anatomi

En vulkan bestar av flere hovedkomponenter:

- **Magmakammer**: Reservoaret av smeltet bergart under vulkanen
- **Roret (conduit)**: Kanalen som forbinder magmakammeret med overflaten
- **Krateret**: Apningen pa toppen av vulkanen
- **Kjegleform**: Selve vulkanbygget, dannet av utbruddsprodukter`,
    },
    {
      id: 'geo1-4-1-def-magmakammer',
      type: 'definition',
      title: 'Magmakammer',
      content: 'Et magmakammer er et underjordisk reservoar fylt med smeltet bergart (magma). Magmakammeret ligger vanligvis 1-10 km under vulkanen og fungerer som en "tank" der magma samler seg for utbrudd. Trykket i kammeret bestemmer nar og hvordan utbrudd skjer.',
    },
    {
      id: 'geo1-4-1-komponenter',
      type: 'text',
      content: `## Vulkanens indre struktur

### Magmakammeret
- Ligger typisk 1-10 km under overflaten
- Kan ha volum fra noen kubikkilometer til hundrevis
- Magma kan oppholde seg her i tusenvis av aar
- Differensiasjon: Tyngre mineraler synker, lettere stiger

### Ror og sprekker
- Hovedroret (conduit): Vertikal kanal til krateret
- Sideror: Kan gi utbrudd pa vulkanens flanker
- Sprekksystemer: Nettverk av mindre kanaler
- Dikes: Vertikale magmaganger gjennom bergarter

### Krateret og caldera
- **Krater**: Skalformet forsenkning pa toppen (< 1 km diameter)
- **Caldera**: Stort innsynkningskrater (> 1 km diameter)
- Caldera dannes nar magmakammeret tommes og taket kollapser
- Eksempel: Yellowstone caldera er 70 km lang`,
    },
    {
      id: 'geo1-4-1-def-caldera',
      type: 'definition',
      title: 'Caldera',
      content: 'En caldera er et stort, grytelignenede krater dannet ved kollaps av vulkanens topp etter et stort utbrudd har tomt magmakammeret. Calderas kan vaere flere titalls kilometer i diameter og kan fylles med vann og danne innsjor.',
    },
    {
      id: 'geo1-4-1-typer',
      type: 'text',
      content: `## Vulkantyper

Vulkaners form og storrelse avhenger av magmatype og utbruddshistorie.

### Skjoldvulkaner
- **Form**: Bred, flat kuppel med slake sider
- **Helningsvinkel**: 2-10 grader
- **Magma**: Basaltisk (lav viskositet)
- **Utbrudd**: Rolige lavastrommer
- **Storrelse**: Kan bli enormt store
- **Eksempler**: Mauna Loa og Kilauea (Hawaii), Skaeldbreidur (Island)

### Stratovulkaner (sammensatte vulkaner)
- **Form**: Bratt, symmetrisk kjegle
- **Helningsvinkel**: 30-35 grader
- **Oppbygging**: Vekslende lag av lava og tefra
- **Magma**: Andesittisk til ryolittisk
- **Utbrudd**: Vekslende eksplosive og effusive
- **Eksempler**: Fuji (Japan), Vesuvius (Italia), Mount St. Helens (USA)

### Slagkjeglevulkaner
- **Form**: Liten, bratt kjegle
- **Hoyde**: Vanligvis under 300 meter
- **Oppbygging**: Hovedsakelig tefra (slagg)
- **Levetid**: Ofte kun ett utbrudd
- **Eksempler**: Paricutin (Mexico), smaakratere pa Island

### Lavadomvulkaner
- **Form**: Rund, bratt haug
- **Magma**: Seig (hoy viskositet)
- **Dannelse**: Lava for tyktflytende til aa renne
- **Fare**: Kan kollapse og gi pyroklastiske strommer
- **Eksempler**: Mount St. Helens' dome, Merapi (Indonesia)`,
    },
    {
      id: 'geo1-4-1-supervulkaner',
      type: 'text',
      content: `## Supervulkaner

Supervulkaner er vulkanske systemer som kan produsere ekstremt store utbrudd.

### Kjennetegn
- Utbrudd med volum over 1000 kubikkilometer
- Danner enorme calderaer
- Kan pavirke globalt klima i aaratier
- Svart sjeldne (ett per 100 000-200 000 aar)

### Kjente supervulkaner
| Vulkan | Plassering | Siste store utbrudd |
|--------|------------|---------------------|
| Yellowstone | USA | 640 000 aar siden |
| Toba | Indonesia | 74 000 aar siden |
| Taupo | New Zealand | 26 500 aar siden |
| Campi Flegrei | Italia | 40 000 aar siden |

### Yellowstone
- Ligger over en mantelpylme (hotspot)
- Calderas storrelse: 70 x 45 km
- Har hatt tre supervulkanutbrudd siste 2.1 mill. aar
- Overvakes noye av USGS`,
    },
    {
      id: 'geo1-4-1-example',
      type: 'example',
      title: 'Sammenligne vulkantyper',
      problem: 'Sammenlign en skjoldvulkan (Mauna Loa) med en stratovulkan (Fuji) med tanke pa form, magmatype og utbruddstype.',
      solution: `**Sammenligning av Mauna Loa og Fuji:**

**Form og storrelse:**
- Mauna Loa: Bred og flat, 4169 m over havet (9170 m fra havbunnen)
- Fuji: Bratt kjegle, 3776 m, klassisk vulkanform

**Helningsvinkel:**
- Mauna Loa: 2-10 grader (veldig slak)
- Fuji: 30-35 grader (bratt)

**Magmatype:**
- Mauna Loa: Basaltisk - lav viskositet, hoy temperatur (1100-1200 grader C)
- Fuji: Andesittisk - medium viskositet, lavere temperatur

**Utbruddstype:**
- Mauna Loa: Hovedsakelig rolige lavastrommer
- Fuji: Vekslende eksplosive og effusive utbrudd

**Oppbygging:**
- Mauna Loa: Lag pa lag med lava
- Fuji: Vekslende lag av lava og tefra (aske, lapilli)

**Konklusjon:**
Forskjellene skyldes magmaens kjemi og viskositet. Tyntflytende basaltisk magma gir flate skjoldvulkaner, mens seigere magma gir bratte stratovulkaner.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-4-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et magmakammer?',
      options: [
        { id: 'a', text: 'Et underjordisk reservoar med smeltet bergart', isCorrect: true },
        { id: 'b', text: 'Krateret pa toppen av vulkanen', isCorrect: false },
        { id: 'c', text: 'En type lava', isCorrect: false },
        { id: 'd', text: 'Et vulkansk utbrudd', isCorrect: false },
      ],
      solution: 'Et magmakammer er et underjordisk reservoar fylt med smeltet bergart (magma). Det ligger typisk 1-10 km under vulkanen og fungerer som en tank der magma samler seg for utbrudd.',
    },
    {
      id: 'geo1-4-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv forskjellen mellom et krater og en caldera.',
      solution: 'Et krater er en relativt liten, skalformet forsenkning pa toppen av vulkanen (under 1 km diameter), dannet av eksplosive utbrudd eller kollaps. En caldera er et mye storre innsynkningskrater (over 1 km, ofte titalls kilometer i diameter) som dannes nar magmakammeret tommes og taket kollapser. Calderas kan fylles med vann og danne innsjor, som Crater Lake i USA.',
    },
    {
      id: 'geo1-4-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken vulkantype har den bratteste kjegleformen?',
      options: [
        { id: 'a', text: 'Stratovulkan', isCorrect: true },
        { id: 'b', text: 'Skjoldvulkan', isCorrect: false },
        { id: 'c', text: 'Supervulkan', isCorrect: false },
        { id: 'd', text: 'Alle vulkaner har lik helning', isCorrect: false },
      ],
      solution: 'Stratovulkaner har den bratteste kjegleformen med helningsvinkel pa 30-35 grader. Skjoldvulkaner har svart slake sider (2-10 grader). Slagkjeglevulkaner kan ogsa vaere bratte, men de er mye mindre.',
    },
    {
      id: 'geo1-4-1-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar sammenhengen mellom magmaens viskositet og vulkanens form.',
      solution: 'Magmaens viskositet bestemmer hvor langt lava kan flyte for den storkner. Tyntflytende basaltisk magma med lav viskositet kan flyte langt og danner derfor brede, flate skjoldvulkaner. Seig magma med hoy viskositet (andesittisk/ryolittisk) flyter kort og hoper seg opp naer utbruddsstedet, noe som gir bratte stratovulkaner. Ekstremt seig magma kan danne lavadomvulkaner der lavaen knapt flyter i det hele tatt.',
    },
    {
      id: 'geo1-4-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken vulkantype finnes pa Hawaii?',
      options: [
        { id: 'a', text: 'Skjoldvulkan', isCorrect: true },
        { id: 'b', text: 'Stratovulkan', isCorrect: false },
        { id: 'c', text: 'Slagkjeglevulkan', isCorrect: false },
        { id: 'd', text: 'Lavadomvulkan', isCorrect: false },
      ],
      solution: 'Hawaii har skjoldvulkaner som Mauna Loa og Kilauea. De dannes av tyntflytende basaltisk lava fra hotspotet under oyen og har karakteristisk bred, flat form.',
    },
  ],
};

// ============================================================================
// Kapittel 4.2: Vulkansk aktivitet og utbrudd
// ============================================================================

export const CHAPTER_GEOFAG_1_4_2: TextbookChapter = {
  id: 'geofag-1-4-2',
  courseId: 'geofag-1',
  chapterNumber: '4.2',
  title: 'Vulkansk aktivitet og utbrudd',
  description: 'Utbruddstyper, vulkanske produkter og varsling av utbrudd.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive ulike typer vulkanske utbrudd',
    'forklare dannelsen av vulkanske produkter som lava, tefra og gasser',
    'gjore rede for hvordan vulkanutbrudd kan forutsies',
  ],
  content: [
    {
      id: 'geo1-4-2-intro',
      type: 'text',
      content: `# Vulkansk aktivitet og utbrudd

Vulkanutbrudd varierer enormt i kraft og karakter. Fra rolige lavastrommer pa Hawaii til katastrofale eksplosjoner som Krakatau - hva bestemmer utbruddstypen?

## Hva styrer utbruddstypen?

To hovedfaktorer bestemmer utbruddets karakter:

1. **Magmaens viskositet**: Jo seigere magma, jo mer eksplosivt utbrudd
2. **Gassinnhold**: Jo mer gass, jo storre eksplosjonspotensial

Nar seig magma med hoyt gassinnhold stiger mot overflaten, kan ikke gassene unnslippe - trykket bygger seg opp til eksplosjon.`,
    },
    {
      id: 'geo1-4-2-def-effusiv',
      type: 'definition',
      title: 'Effusivt utbrudd',
      content: 'Et effusivt utbrudd er et ikke-eksplosivt vulkanutbrudd der tyntflytende lava stromme rolig ut fra vulkanen. Gasser slipper lett ut av den lavviskose magmaen, sa trykk bygges ikke opp. Effusive utbrudd er typiske for skjoldvulkaner.',
    },
    {
      id: 'geo1-4-2-utbruddstyper',
      type: 'text',
      content: `## Utbruddstyper

### Effusive utbrudd
- Rolige lavastrommer
- Lav viskositet magma
- Gasser slipper lett ut
- Typisk for basaltisk magma
- Eksempel: Hawaii, Island

### Eksplosive utbrudd
- Voldsom utkasting av materiale
- Hoy viskositet magma
- Gasser fanget under trykk
- Typisk for andesittisk/ryolittisk magma
- Eksempel: Vesuvius, Pinatubo

### Klassifisering etter eksplosivitet (VEI)

Volcanic Explosivity Index (VEI) maler utbruddsstorrelse:

| VEI | Beskrivelse | Volum | Eksempel |
|-----|-------------|-------|----------|
| 0-1 | Ikke-eksplosivt | < 0.01 km3 | Kilauea |
| 2-3 | Eksplosivt | 0.01-0.1 km3 | Stromboli |
| 4-5 | Katastrofalt | 0.1-10 km3 | Mount St. Helens |
| 6-7 | Kolossalt | 10-100 km3 | Pinatubo, Krakatau |
| 8 | Superutbrudd | > 1000 km3 | Yellowstone, Toba |`,
    },
    {
      id: 'geo1-4-2-produkter',
      type: 'text',
      content: `## Vulkanske produkter

### Lava
Smeltet bergart som nar overflaten.

**Pahoehoe-lava:**
- Glatt, taulignende overflate
- Hoy temperatur, lav viskositet
- Rask flyting

**Aa-lava (blokkava):**
- Ru, blokkete overflate
- Lavere temperatur
- Tregere flyting

**Putelava:**
- Puteformede strukturer
- Dannes under vann
- Vanlig ved midthavsrygger

### Tefra
Fast materiale kastet ut fra vulkanen.

| Type | Storrelse | Beskrivelse |
|------|-----------|-------------|
| Aske | < 2 mm | Finkornet glass og mineraler |
| Lapilli | 2-64 mm | "Sma steiner" |
| Bomber | > 64 mm | Store fragmenter, avrundet |
| Blokker | > 64 mm | Store fragmenter, kantet |

### Vulkanske gasser
- Vanndamp (H2O): 70-95%
- Karbondioksid (CO2): 5-25%
- Svoveldioksid (SO2): Danner sur nedbor
- Hydrogensulfid (H2S): Ratten egg-lukt`,
    },
    {
      id: 'geo1-4-2-def-pyroklastisk',
      type: 'definition',
      title: 'Pyroklastisk strom',
      content: 'En pyroklastisk strom er en dodeligere blanding av varm gass, aske og bergartsfragmenter som beveger seg nedover vulkanens sider med hastigheter opp til 700 km/t og temperaturer pa 200-700 grader C. De er den mest dodelige vulkanske faren.',
    },
    {
      id: 'geo1-4-2-farer',
      type: 'text',
      content: `## Vulkanske farer

### Primaere farer (under utbrudd)

**Pyroklastiske strommer:**
- Dodeligste vulkanske faren
- Hastighet: 100-700 km/t
- Temperatur: 200-700 grader C
- Odela Pompeii i 79 e.Kr.

**Lavastrommer:**
- Relativt lav hastighet
- Odelegger alt i sin vei
- Folk kan vanligvis evakuere

**Tefrafall:**
- Kan kollapse tak
- Farlig for luftveier
- Skaadelig for flytrafikk

### Sekundaere farer (etter utbrudd)

**Laharer (vulkanske gjormestrommer):**
- Blanding av vann og vulkansk materiale
- Kan reise langs elvedaler
- Nevado del Ruiz 1985: 23 000 dode

**Jordskred og kollapser:**
- Ustabile vulkansider kan rase
- Kan utlose tsunamier`,
    },
    {
      id: 'geo1-4-2-varsling',
      type: 'text',
      content: `## Varsling av vulkanutbrudd

I motsetning til jordskjelv kan vulkanutbrudd ofte varsles.

### Varseltegn
1. **Seismisk aktivitet**: Sma jordskjelv fra magmabevegelser
2. **Deformasjon**: Vulkanen "puster" - sveller eller synker
3. **Gassutslipp**: Okt SO2 og CO2 for utbrudd
4. **Temperaturendringer**: Varme kilder blir varmere

### Overvakingsmetoder
- **Seismografer**: Registrerer jordskjelv
- **GPS og tiltmetre**: Maler deformasjon
- **Gassmaalere**: Analyserer gassutslipp
- **Satellitter**: Overvaker temperatur og deformasjon
- **Termiske kameraer**: Maler varme

### Suksesshistorier
- **Pinatubo 1991**: Evakuering reddet 20 000+ liv
- **Eyjafjallajokull 2010**: God varsling, ingen dode

### Utfordringer
- Varsling gir ikke eksakt tidspunkt
- Falske alarmer kan fore til at folk ignorerer varsler
- Fattige land mangler overvakingsutstyr`,
    },
    {
      id: 'geo1-4-2-example',
      type: 'example',
      title: 'Pinatubo-utbruddet 1991',
      problem: 'Analyser Pinatubo-utbruddet i 1991 og forklar hvordan varsling reddet liv.',
      solution: `**Pinatubo-utbruddet 15. juni 1991 (Filippinene):**

**Bakgrunn:**
- Hadde vaert i dvale i 500 aar
- Mange bodde pa og rundt vulkanen
- US Clark Air Base like ved

**Varseltegn (april-juni 1991):**
1. Sma jordskjelv begynte i april
2. Dampeksplosjoner fra krateret
3. Okende SO2-utslipp
4. Vulkanen begynte aa svelle

**Respons:**
- Filippinske og amerikanske vulkanologer samarbeidet
- Faresoner ble definert
- Evakuering av 200 000+ mennesker
- US-basen ble evakuert

**Selve utbruddet:**
- VEI 6 - et av de storste i det 20. arhundre
- 10 km3 materiale ble kastet ut
- Askeskyen naadde 40 km hoyde

**Dodsfall:**
- Ca. 800 dode (de fleste av takkollapser fra aske)
- Uten varsling: Anslagsvis 20 000+ dode

**Globale effekter:**
- SO2 i stratosfaeren ga 0.5 grader C global avkjoling
- Spektakulaere solnedganger i 2 aar

**Laerdommer:**
Varsling virker nar myndigheter lytter til eksperter og handler raskt.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-4-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva bestemmer om et vulkanutbrudd blir eksplosivt eller effusivt?',
      options: [
        { id: 'a', text: 'Magmaens viskositet og gassinnhold', isCorrect: true },
        { id: 'b', text: 'Vulkanens hoyde', isCorrect: false },
        { id: 'c', text: 'Avstanden til havet', isCorrect: false },
        { id: 'd', text: 'Aarstiden', isCorrect: false },
      ],
      solution: 'Magmaens viskositet og gassinnhold bestemmer utbruddstypen. Seig magma med hoyt gassinnhold gir eksplosive utbrudd fordi gassene ikke kan unnslippe. Tyntflytende magma med lavt gassinnhold gir rolige, effusive utbrudd.',
    },
    {
      id: 'geo1-4-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv forskjellen mellom pahoehoe- og aa-lava.',
      solution: 'Pahoehoe-lava har glatt, taulignende overflate og dannes nar lava har hoy temperatur og lav viskositet, slik at den flyter raskt og jevnt. Aa-lava har ru, blokkete overflate og dannes nar lavaen har lavere temperatur og hoyere viskositet. Pahoehoe kan gradvis ga over til aa-lava nar den kjoler ned. Begge typene er vanlige pa Hawaii.',
    },
    {
      id: 'geo1-4-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den dodeligste vulkanske faren?',
      options: [
        { id: 'a', text: 'Pyroklastiske strommer', isCorrect: true },
        { id: 'b', text: 'Lavastrommer', isCorrect: false },
        { id: 'c', text: 'Askefall', isCorrect: false },
        { id: 'd', text: 'Vulkanske bomber', isCorrect: false },
      ],
      solution: 'Pyroklastiske strommer er den dodeligste vulkanske faren. De beveger seg med hastigheter opp til 700 km/t og har temperaturer pa 200-700 grader C. Det er umulig aa flykte fra dem, og de dreper umiddelbart alle i sin vei.',
    },
    {
      id: 'geo1-4-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor vulkanutbrudd kan varsles, men ikke jordskjelv.',
      solution: 'Vulkanutbrudd kan varsles fordi magma maa bevege seg fra magmakammeret til overflaten for et utbrudd. Denne bevegelsen gir mange varseltegn: sma jordskjelv fra magmabevegelser, deformasjon av vulkanen (svelling), okt gassutslipp, og temperaturendringer. Jordskjelv skjer derimot plutselig nar spenninger i jordskorpen overskrider bruddstyrken - det er ingen gradvis prosess vi kan overvake. Vi kan beregne langsiktig sannsynlighet for jordskjelv, men ikke tidspunktet.',
    },
    {
      id: 'geo1-4-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken vulkansk gass er vanligst?',
      options: [
        { id: 'a', text: 'Vanndamp (H2O)', isCorrect: true },
        { id: 'b', text: 'Karbondioksid (CO2)', isCorrect: false },
        { id: 'c', text: 'Svoveldioksid (SO2)', isCorrect: false },
        { id: 'd', text: 'Hydrogensulfid (H2S)', isCorrect: false },
      ],
      solution: 'Vanndamp utgjor 70-95% av alle vulkanske gasser. Karbondioksid er nest vanligst med 5-25%. Svoveldioksid og andre gasser utgjor mindre andeler.',
    },
  ],
};

// ============================================================================
// Kapittel 4.3: Jordskjelv og seismiske bolger
// ============================================================================

export const CHAPTER_GEOFAG_1_4_3: TextbookChapter = {
  id: 'geofag-1-4-3',
  courseId: 'geofag-1',
  chapterNumber: '4.3',
  title: 'Jordskjelv og seismiske bolger',
  description: 'Arsaker til jordskjelv, seismiske bolgetyper og maling av jordskjelv.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare hvordan jordskjelv oppstar',
    'beskrive de ulike typene seismiske bolger og deres egenskaper',
    'gjore rede for hvordan jordskjelv males og klassifiseres',
  ],
  content: [
    {
      id: 'geo1-4-3-intro',
      type: 'text',
      content: `# Jordskjelv og seismiske bolger

Jordskjelv er plutselige rystelser i jordskorpen forarsake av frigjoring av opplagret energi. Hvert aar registreres over 500 000 jordskjelv verden over, men bare rundt 100 forasaker betydelig skade.

## Hvor oppstar jordskjelv?

De fleste jordskjelv skjer langs plategrenser:
- **90%** rundt Stillehavet (Ildringen)
- Konvergerende grenser gir de sterkeste skjelvene
- Transform grenser gir hyppige, grunne skjelv
- Divergerende grenser gir moderate skjelv`,
    },
    {
      id: 'geo1-4-3-def-jordskjelv',
      type: 'definition',
      title: 'Jordskjelv',
      content: 'Et jordskjelv er plutselig frigjoring av opplagret elastisk energi i jordskorpen, som forasaker seismiske bolger. Energien frigjores nar spenninger overskrider bergartenes bruddstyrke langs en forkastning.',
    },
    {
      id: 'geo1-4-3-arsaker',
      type: 'text',
      content: `## Arsaker til jordskjelv

### Den elastiske rekylmodellen
1. Platebevegelser skaper spenninger i bergarter
2. Bergarter deformeres elastisk (som en spent fjae)
3. Spenningen oker til bruddstyrken nas
4. Plutselig brudd langs en forkastning
5. Bergartene rekylerer tilbake (frigjor energi)
6. Prosessen starter pa nytt

### Viktige begreper

**Hyposenter (fokus):**
- Stedet inne i jorden der bruddet starter
- Der energien frigjores
- Kan vaere fra overflaten til 700 km dyp

**Episenter:**
- Punktet pa overflaten rett over hyposenteret
- Ofte der skadene er storst
- Det som rapporteres i nyheter

**Forkastning:**
- Bruddflaten der bevegelsen skjer
- Kan vaere kilometer lang

### Klassifisering etter dybde
| Dybde | Klassifisering | Forekomst |
|-------|----------------|-----------|
| 0-70 km | Grunn | Vanligst, farligst |
| 70-300 km | Intermediar | Ved subduksjon |
| 300-700 km | Dyp | Kun subduksjonssoner |`,
    },
    {
      id: 'geo1-4-3-def-seismisk',
      type: 'definition',
      title: 'Seismiske bolger',
      content: 'Seismiske bolger er energibolger som forplanter seg gjennom jorden etter et jordskjelv. De deles inn i kroppsbolger (P- og S-bolger) som gar gjennom jordens indre, og overflatebolger som folger jordoverflaten.',
    },
    {
      id: 'geo1-4-3-bolger',
      type: 'text',
      content: `## Seismiske bolgetyper

### Kroppsbolger

**P-bolger (primaere bolger):**
- **Type**: Kompressjonsbolger (trykk)
- **Bevegelse**: Parallelt med utbredelsesretningen
- **Hastighet**: 5-8 km/s i skorpen
- **Medium**: Gar gjennom fast, flytende og gass
- **Foler**: Rysting fram og tilbake

**S-bolger (sekundaere bolger):**
- **Type**: Skjaerbolger
- **Bevegelse**: Vinkelrett pa utbredelsesretningen
- **Hastighet**: 3-5 km/s (langsommere enn P)
- **Medium**: Kun gjennom faste stoffer
- **Foler**: Rysting opp-ned og sideveis
- **Viktig**: Stoppes av jordens flytende ytre kjerne

### Overflatebolger

**Love-bolger:**
- Horisontal skjaerbevegelse
- Skader bygninger fra siden

**Rayleigh-bolger:**
- Rullende bevegelse
- Kombinasjon av vertikal og horisontal
- Gjor mest skade pa bygninger`,
    },
    {
      id: 'geo1-4-3-maling',
      type: 'text',
      content: `## Maling av jordskjelv

### Seismograf
- Instrument som registrerer jordvibrasjoner
- Treghetsbasert: Masse som forblir i ro mens bakken beveger seg
- Moderne seismografer er digitale

### Magnitudskalaer (styrke)

**Richter-skalaen (Ml):**
- Utviklet 1935
- Logaritmisk: +1 magnitud = 10x sterkere amplitude
- Energi: +1 magnitud = 32x mer energi

**Momentmagnitud (Mw):**
- Moderne standard
- Basert pa seismisk moment
- Fungerer for alle storrelser

| Magnitud | Effekt | Antall per aar |
|----------|--------|----------------|
| < 2 | Ikke folt | ca. 1.3 mill. |
| 2-4 | Folt, lite skade | ca. 100 000 |
| 4-6 | Moderat skade | ca. 1500 |
| 6-7 | Sterk, odelagt | ca. 120 |
| 7-8 | Katastrofal | ca. 15 |
| > 8 | Enorm odeleggelse | ca. 1 |

### Intensitetsskala (virkning)

**Modifisert Mercalli-skala (MMI):**
- I-XII (romertall)
- Basert pa observasjoner og skader
- Varierer med avstand og grunnforhold`,
    },
    {
      id: 'geo1-4-3-example',
      type: 'example',
      title: 'Energiforskjell mellom jordskjelv',
      problem: 'Et jordskjelv har magnitud 7.0 og et annet har magnitud 5.0. Hvor mye mer energi frigir det sterke jordskjelvet?',
      solution: `**Beregning av energiforskjell:**

**Formler:**
- Amplitude: +1 magnitud = 10x sterkere
- Energi: +1 magnitud = ca. 32x mer (10^1.5)

**Steg 1: Finn magnitudforskjellen**
7.0 - 5.0 = 2.0 magnitudenheter

**Steg 2: Beregn energiforskjellen**
Energifaktor per magnitudenhet = 10^1.5 ≈ 31.6

For 2 magnitudenheter:
31.6 x 31.6 = ca. 1000

**Svar:**
Et jordskjelv med magnitud 7.0 frigjor omtrent 1000 ganger mer energi enn et med magnitud 5.0.

**Perspektiv:**
- M5: Kan gi moderat skade lokalt
- M7: Kan odelegge en hel by

Dette forklarer hvorfor oke i magnitud med bare 1-2 enheter gir dramatisk mer odeleggelse.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-4-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom hyposenter og episenter?',
      options: [
        { id: 'a', text: 'Hyposenteret er inne i jorden, episenteret er pa overflaten', isCorrect: true },
        { id: 'b', text: 'Hyposenteret er pa overflaten, episenteret er inne i jorden', isCorrect: false },
        { id: 'c', text: 'De er det samme', isCorrect: false },
        { id: 'd', text: 'Begge er pa overflaten', isCorrect: false },
      ],
      solution: 'Hyposenteret (fokus) er stedet inne i jorden der jordskjelvet starter og energien frigjores. Episenteret er punktet pa jordoverflaten rett over hyposenteret - det er dette som vanligvis rapporteres i nyheter.',
    },
    {
      id: 'geo1-4-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar den elastiske rekylmodellen for jordskjelv.',
      solution: 'Den elastiske rekylmodellen forklarer hvordan jordskjelv oppstar: 1) Platebevegelser skaper spenninger i bergarter langs forkastninger. 2) Bergartene deformeres elastisk som en spent fjae. 3) Spenningen oker gradvis over tid (aar til arhundrer). 4) Nar spenningen overskrider bergartens bruddstyrke, bryter den plutselig. 5) Bergartene rekylerer tilbake til opprinnelig form og frigjor energien som seismiske bolger. 6) Prosessen starter deretter pa nytt.',
    },
    {
      id: 'geo1-4-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke seismiske bolger kan ikke ga gjennom vaesker?',
      options: [
        { id: 'a', text: 'S-bolger', isCorrect: true },
        { id: 'b', text: 'P-bolger', isCorrect: false },
        { id: 'c', text: 'Rayleigh-bolger', isCorrect: false },
        { id: 'd', text: 'Alle bolger kan ga gjennom vaesker', isCorrect: false },
      ],
      solution: 'S-bolger (skjaerbolger) kan kun ga gjennom faste stoffer fordi vaesker ikke har skjaerstyrke. Dette er viktig bevis for at jordens ytre kjerne er flytende - S-bolger stoppes der. P-bolger kan derimot ga gjennom bade faste stoffer, vaesker og gasser.',
    },
    {
      id: 'geo1-4-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan seismiske bolger har gitt oss kunnskap om jordens indre struktur.',
      solution: 'Seismiske bolger endrer hastighet og retning nar de passerer gjennom ulike materialer. Ved a analysere ankomsttider ved seismiske stasjoner verden over, har vi laert at: 1) Jorden har lagdelt struktur (skorpe, mantel, kjerne). 2) Ytre kjerne er flytende (S-bolger stoppes). 3) Indre kjerne er fast (P-bolger reflekteres). 4) Mantelens tetthet oker med dypet. Det finnes "skyggesoner" der visse bolger ikke ankommer, som forteller om grensene mellom lagene. Seismologien er vart viktigste verktoy for a "se" inne i jorden.',
    },
    {
      id: 'geo1-4-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mye mer energi frigir et jordskjelv med magnitud 6 sammenlignet med magnitud 5?',
      options: [
        { id: 'a', text: 'Ca. 32 ganger', isCorrect: true },
        { id: 'b', text: '10 ganger', isCorrect: false },
        { id: 'c', text: '100 ganger', isCorrect: false },
        { id: 'd', text: '2 ganger', isCorrect: false },
      ],
      solution: 'For hver oekning pa 1.0 i magnitud, oker energien med en faktor pa ca. 32 (10^1.5). Amplituden oker med faktor 10 per magnitudenhet.',
    },
  ],
};

// ============================================================================
// Kapittel 4.4: Tsunamier
// ============================================================================

export const CHAPTER_GEOFAG_1_4_4: TextbookChapter = {
  id: 'geofag-1-4-4',
  courseId: 'geofag-1',
  chapterNumber: '4.4',
  title: 'Tsunamier',
  description: 'Hvordan tsunamier dannes, sprer seg og hvordan man varsler dem.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hvordan tsunamier dannes',
    'beskrive tsunamiers oppforsel i dypt og grunt vann',
    'gjore rede for varslingssystemer og sikkerhetstiltak',
  ],
  content: [
    {
      id: 'geo1-4-4-intro',
      type: 'text',
      content: `# Tsunamier

Tsunami er et japansk ord som betyr "havnebølge". Tsunamier er serier av enorme bolger forarsake av plutselige forstyrrelser av havbunnen. De kan krysse hele hav og devastere kystsamfunn.

## Tsunami vs. vanlige bolger

| Egenskap | Vanlige bolger | Tsunami |
|----------|---------------|---------|
| Aarsak | Vind | Jordskjelv, skred |
| Bolgelengde | 100-200 m | 100-200 km |
| Periode | 5-20 sekunder | 10-60 minutter |
| Dybde pavirket | Overflaten | Hele vannsoylen |
| Hastighet | 20-80 km/t | 500-800 km/t |`,
    },
    {
      id: 'geo1-4-4-def-tsunami',
      type: 'definition',
      title: 'Tsunami',
      content: 'En tsunami er en serie lange bolger forarsake av stor forflytning av vann, vanligvis pa grunn av undersjoi jordskjelv, undersjoi skred eller vulkanutbrudd. Tsunamier beveger seg gjennom hele vannsoylen, ikke bare overflaten.',
    },
    {
      id: 'geo1-4-4-dannelse',
      type: 'text',
      content: `## Hvordan tsunamier dannes

### 1. Undersjoi jordskjelv (75% av alle tsunamier)
- Maa vaere grunt (< 100 km dypt)
- Maa vaere sterkt (vanligvis > M7.5)
- Havbunnen maa forflyttes vertikalt
- Subduksjonsjordskjelv er typiske

**Mekanisme:**
1. Plutselig vertikal forflytning av havbunnen
2. Hele vannsoylen over forflyttes
3. Tyngdekraften trekker vannet tilbake
4. Bolger sprer seg ut i alle retninger

### 2. Undersjoi skred
- Ustabile sedimenter pa kontinentskraningen
- Kan utloses av jordskjelv
- Storegga-skredet (8200 aar siden) ga 20 m tsunami i Norge

### 3. Vulkansk aktivitet
- Vulkanske eksplosjoner
- Kalderakollaps
- Pyroklastiske strommer som nar havet
- Krakatau 1883: 36 m hoye bolger

### 4. Meteorittnedslag
- Ekstremt sjeldent
- Kan gi katastrofale tsunamier`,
    },
    {
      id: 'geo1-4-4-spredning',
      type: 'text',
      content: `## Tsunamiers oppforsel

### I dypt hav
- **Hastighet**: Opp til 800 km/t (som jetfly)
- **Bolgehoyde**: Bare 0.5-1 meter
- **Bolgelengde**: 100-200 km
- Nesten umulig aa oppdage fra skip
- Hastighet beregnes: v = sqrt(g x d)

### Nar tsunamien nar grunt vann (shoaling)

1. Hastigheten avtar (ned til 50 km/t)
2. Bolgelengden forkortes
3. Bolgehoyden oker dramatisk
4. Energien komprimeres

### Bolgehoyde ved land
- Avhenger av kystens form
- Trange bukter forsterker bolgene
- Kan naa 30-40 meter i ekstreme tilfeller
- Ofte flere bolger (bolgetog)
- Den forste bolgen er ikke alltid den storste

### Naturlige varseltegn
- Sterkt jordskjelv naer kysten
- Havet trekker seg unormalt langt tilbake
- Sterk bruselyd fra havet`,
    },
    {
      id: 'geo1-4-4-varsling',
      type: 'text',
      content: `## Varslingssystemer

### Stillehavets tsunamivarslingssenter (PTWC)
- Etablert 1949 etter Alaska-tsunami
- Overvaker hele Stillehavet
- Kombinerer seismiske data og havnivamalinger
- Kan varsle innen minutter

### DART-systemet
(Deep-ocean Assessment and Reporting of Tsunamis)
- Boyer pa havbunnen maler trykk (vannstand)
- Sender data via satellitt
- Bekrefter om tsunami faktisk er generert
- Over 50 boyer verden over

### Varslingskjeden
1. Jordskjelv registreres
2. Storrelse og plassering beregnes
3. Risiko for tsunami vurderes
4. Varsel sendes til nasjoner
5. Lokale myndigheter evakuerer

### Utfordringer
- Naerliggende kyster: Lite tid til varsling
- Fattige land: Mangler infrastruktur
- Falske alarmer: Kan fore til at folk ignorerer varsler`,
    },
    {
      id: 'geo1-4-4-historiske',
      type: 'text',
      content: `## Historiske tsunamier

### Det indiske hav 2004
- **Dato**: 26. desember
- **Jordskjelv**: M9.1 vest for Sumatra
- **Bolgehoyde**: Opp til 30 meter
- **Dodsfall**: 230 000+ i 14 land
- **Laerdom**: Indiahavsvarslingsystem etablert

### Japan 2011 (Tohoku)
- **Dato**: 11. mars
- **Jordskjelv**: M9.1
- **Bolgehoyde**: Opp til 40 meter
- **Rekkevidde**: 10 km inn i landet
- **Fukushima**: Utloste atomulykke
- **Dodsfall**: 18 000+

### Storegga-skredet (ca. 8200 aar siden)
- Enormt undersjoi skred utenfor Norge
- Tsunami opp til 20 m pa Shetland
- 10-12 m pa norskekysten
- Kan ha pavirket steinalderbosetninger`,
    },
    {
      id: 'geo1-4-4-example',
      type: 'example',
      title: 'Beregne tsunami-hastighet',
      problem: 'Stillehavet har gjennomsnittsdybde 4000 m. Hvor lang tid tar det for en tsunami a krysse fra Japan til Hawaii (6000 km)?',
      solution: `**Beregning av tsunami-hastighet og reisetid:**

**Steg 1: Beregn hastigheten**
Formel: v = sqrt(g x d)
- g = 9.81 m/s^2 (tyngdeakselerasjonen)
- d = 4000 m (havdybde)

v = sqrt(9.81 x 4000)
v = sqrt(39 240)
v = 198 m/s

Omregnet til km/t:
v = 198 x 3.6 = 713 km/t

**Steg 2: Beregn reisetiden**
Tid = Avstand / Hastighet
Tid = 6000 km / 713 km/t
Tid = 8.4 timer

**Svar:**
Tsunamien bruker ca. 8-9 timer pa aa krysse fra Japan til Hawaii.

**Betydning:**
Dette gir god tid til varsling og evakuering. Men for kyster naermere episenteret kan varslingstiden vaere mye kortere - kanskje bare 10-30 minutter.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-4-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den vanligste arsaken til tsunamier?',
      options: [
        { id: 'a', text: 'Undersjoi jordskjelv', isCorrect: true },
        { id: 'b', text: 'Storm', isCorrect: false },
        { id: 'c', text: 'Tidevann', isCorrect: false },
        { id: 'd', text: 'Vind', isCorrect: false },
      ],
      solution: 'Ca. 75% av alle tsunamier forasakes av undersjoi jordskjelv, saerlig subduksjonsjordskjelv der havbunnen forflyttes vertikalt.',
    },
    {
      id: 'geo1-4-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor tsunamier nesten ikke ses i dypt hav, men blir enorme naer land.',
      solution: 'I dypt hav har tsunamier lang bolgelengde (100-200 km) men lav hoyde (under 1 m). Energien er spredt over hele vannsoylen ned til bunnen. Nar tsunamien nar grunt vann, bremses bunnen av bolgen mens toppen fortsetter - dette kalles shoaling. Bolgelengden forkortes, og all energien komprimeres til et mindre volum, noe som oker bolgehoyden dramatisk til potensielt titalls meter.',
    },
    {
      id: 'geo1-4-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er et naturlig varseltegn pa en innkommende tsunami?',
      options: [
        { id: 'a', text: 'Havet trekker seg unormalt langt tilbake', isCorrect: true },
        { id: 'b', text: 'Kraftig regn', isCorrect: false },
        { id: 'c', text: 'Tett taake', isCorrect: false },
        { id: 'd', text: 'Stigende lufttemperatur', isCorrect: false },
      ],
      solution: 'Nar havet plutselig trekker seg langt tilbake (mye mer enn vanlig lavvann), er det ofte tegn pa en innkommende tsunami. Mange som har overvaaket dette fenomenet med nysgjerrighet, har dessverre omkommet nar bolgene kom.',
    },
    {
      id: 'geo1-4-4-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan DART-systemet bidrar til tsunamivarsling.',
      solution: 'DART (Deep-ocean Assessment and Reporting of Tsunamis) bestar av boyer plassert pa havbunnen i strategiske omrader. Boyene maler vanntrykket, som endres nar en tsunami passerer over. Data sendes via en overflateboy til satellitter og videre til varslingssentraler. DART er viktig fordi seismiske data alene bare forteller at et jordskjelv har skjedd, ikke om det faktisk har generert en tsunami. DART bekrefter om en tsunami er generert og hvor stor den er, noe som gjor varsler mer presise og reduserer falske alarmer.',
    },
    {
      id: 'geo1-4-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor raskt kan en tsunami bevege seg i dypt hav?',
      options: [
        { id: 'a', text: 'Opp til 800 km/t', isCorrect: true },
        { id: 'b', text: 'Ca. 50 km/t', isCorrect: false },
        { id: 'c', text: 'Ca. 200 km/t', isCorrect: false },
        { id: 'd', text: 'Over 2000 km/t', isCorrect: false },
      ],
      solution: 'I dypt hav (4000-5000 m) kan tsunamier naa hastigheter pa 700-800 km/t, omtrent som et jetfly. Hastigheten avtar til ca. 50 km/t i grunt vann naer kysten.',
    },
  ],
};

// ============================================================================
// Kapittel 4.5: Ildringen og naturfare
// ============================================================================

export const CHAPTER_GEOFAG_1_4_5: TextbookChapter = {
  id: 'geofag-1-4-5',
  courseId: 'geofag-1',
  chapterNumber: '4.5',
  title: 'Ildringen og naturfare',
  description: 'Ildringen rundt Stillehavet, risikovurdering og beredskap mot geofarer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hva Ildringen er og hvorfor den er sa aktiv',
    'vurdere naturfare knyttet til vulkaner og jordskjelv',
    'gjore rede for prinsipper for risikohandtering og beredskap',
  ],
  content: [
    {
      id: 'geo1-4-5-intro',
      type: 'text',
      content: `# Ildringen og naturfare

Ildringen, eller "Ring of Fire", er et 40 000 km langt belt rundt Stillehavet der mesteparten av verdens vulkanske og seismiske aktivitet skjer. Aa forsta denne regionen er sentralt for aa forsta geofarer globalt.

## Ildringen i tall

- **75%** av verdens aktive vulkaner
- **90%** av verdens jordskjelv
- **Ca. 450** vulkaner
- Strekker seg fra New Zealand via Indonesia, Japan, Alaska til Chile`,
    },
    {
      id: 'geo1-4-5-def-ildringen',
      type: 'definition',
      title: 'Ildringen (Ring of Fire)',
      content: 'Ildringen er en heskeformet sone rundt Stillehavet kjennetegnet av intens vulkansk og seismisk aktivitet. Den folger grensene der Stillehavsplaten og andre oseaniske plater subduserer under omkringliggende kontinentale plater.',
    },
    {
      id: 'geo1-4-5-ildringen',
      type: 'text',
      content: `## Hvorfor er Ildringen sa aktiv?

### Platetektonisk forklaring
Stillehavsplaten er omgitt av konvergerende plategrenser:

**Vestlig del (Asia):**
- Subduksjon under Filippinplaten og Eurasiaplasten
- Vulkaner: Pinatubo, Krakatau, Fuji
- Dyphavsgaver: Marianegraven (11 034 m)

**Nordlig del (Nord-Amerika):**
- Subduksjon under den nordamerikanske platen
- Vulkaner: Aleutene
- Alaskas jordskjelvaktivitet

**Ostlig del (Amerika):**
- Subduksjon under Nord- og Sor-Amerika
- Vulkaner: Mount St. Helens, Andene
- Chile og Peru: Hyppige store jordskjelv

### Subduksjonsprosessen
1. Oseanisk plate moter kontinental plate
2. Oseanisk plate (tyngre) dykker under
3. Friksjon gir sterke jordskjelv
4. Platen smelter delvis pa 100-150 km dyp
5. Magma stiger opp og danner vulkaner`,
    },
    {
      id: 'geo1-4-5-risiko',
      type: 'text',
      content: `## Risikovurdering

### Risikoformelen
**Risiko = Fare x Sarbarhet x Eksponering**

- **Fare**: Sannsynlighet for at en hendelse skjer
- **Sarbarhet**: Hvor utsatt samfunnet er
- **Eksponering**: Verdier som kan rammes (mennesker, bygg, infrastruktur)

### Hvem er utsatt?

Omrader med hoy risiko:
- **Japan**: 127 mill. mennesker, 111 aktive vulkaner
- **Indonesia**: 270 mill. mennesker, 147 aktive vulkaner
- **Filippinene**: 110 mill. mennesker, 24 aktive vulkaner
- **Stillehavskystene av Amerika**: Hundrevis av millioner

### Sammensatte farer
Et jordskjelv kan utlose:
- Tsunamier
- Jordskred
- Likviefaksjon (jord blir flytende)
- Branner fra brutte gassledninger
- Dambrudd`,
    },
    {
      id: 'geo1-4-5-def-risiko',
      type: 'definition',
      title: 'Risiko',
      content: 'Risiko er sannsynligheten for at en hendelse inntreffer multiplisert med konsekvensene. I geofag beregnes risiko ofte som: Fare x Sarbarhet x Eksponering. Ved aa redusere sarbarhet eller eksponering kan risikoen senkes selv om faren er konstant.',
    },
    {
      id: 'geo1-4-5-beredskap',
      type: 'text',
      content: `## Beredskap og risikereduksjon

### Faresonekart
- Kartlegger omrader med ulik risiko
- Brukes i arealplanlegging
- Byggerestriksjoner i fareomrader
- Evakueringsruter planlegges

### Bygningsstandarder
- Jordskjelvsikre konstruksjoner
- Fleksible materialer som absorberer energi
- Forsterket fundamentering
- Automatiske gassavstengnere

### Varslingssystemer
**Vulkaner:**
- Seismisk overvaking
- Gassmalinger
- Deformasjonsovervaking
- Kan varsles timer til dager forut

**Jordskjelv:**
- Kan ikke varsles pa forhand
- Tidlig varsling (P-bolger) gir sekunder
- Nok til aa stoppe tog, stenge gassventiler

**Tsunami:**
- DART-boyer og seismiske data
- Varsling minutter til timer forut

### Japans suksesshistorie
- Verdens beste jordskjelvberedskap
- Strenge bygningskoder siden 1981
- Regelmessige ovelser fra barnehage
- Tidlig varslingssystem pa mobil
- Tohoku 2011: Uten beredskap hadde tapene vaert mye hoyere`,
    },
    {
      id: 'geo1-4-5-klima',
      type: 'text',
      content: `## Vulkaner og klima

Store vulkanutbrudd kan pavirke det globale klimaet.

### Mekanisme
1. SO2 kastes opp i stratosfaeren
2. Danner sulfatpartikler (aerosoler)
3. Partiklene reflekterer sollys
4. Global avkjoling i 1-3 aar

### Historiske eksempler

| Utbrudd | Aar | Global avkjoling |
|---------|-----|------------------|
| Tambora | 1815 | 0.5-1 grader C, "Aaret uten sommer" |
| Krakatau | 1883 | 0.3 grader C |
| Pinatubo | 1991 | 0.5 grader C |

### "Aaret uten sommer" 1816
- Tambora-utbruddet 1815 (Indonesia)
- Storste utbrudd pa 1000 aar
- Global avkjoling forte til avlingssvikt
- Hungersnod i Europa og Nord-Amerika
- Masseutvandring til Amerika`,
    },
    {
      id: 'geo1-4-5-example',
      type: 'example',
      title: 'Risikovurdering for en kystby',
      problem: 'En kystby med 100 000 innbyggere ligger 30 km fra en subduksjonssone. Gjennomfor en enkel risikovurdering.',
      solution: `**Risikovurdering for kystby naer subduksjonssone:**

**1. Identifisere farer**
- Jordskjelv fra subduksjonssonen
- Tsunami hvis jordskjelv > M7.5
- Mulig vulkan i naerheten
- Sekundaerfarer: skred, brann, likviefaksjon

**2. Vurdere fare (sannsynlighet)**
- Subduksjonssoner gir M8+ skjelv hvert 100-500 aar
- Arlig sannsynlighet for stort skjelv: 0.5-1%
- Over 50 aar: 25-40% sjanse

**3. Vurdere sarbarhet**
- Bygningskvalitet? Jordskjelvsikre eller ikke?
- Bevissthet i befolkningen?
- Varslingssystemer?
- Evakueringsinfrastruktur?

**4. Vurdere eksponering**
- 100 000 mennesker i faresonen
- Kritisk infrastruktur (sykehus, skoler)?
- Okonomiske verdier?

**5. Beregne risiko**
Hvis sarbarhet og eksponering er hoye:
Risiko = Hoy x Hoy x Hoy = KRITISK

**6. Anbefalte tiltak**
- Innfore strenge bygningskoder
- Etablere tsunamivarsling og evakueringsruter
- Utdanningsprogram for befolkningen
- Flytte kritisk infrastruktur fra kysten
- Regelmessige ovelser`,
    },
  ],
  exercises: [
    {
      id: 'geo1-4-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Ildringen?',
      options: [
        { id: 'a', text: 'Et belt rundt Stillehavet med intens vulkansk og seismisk aktivitet', isCorrect: true },
        { id: 'b', text: 'En vulkan pa Hawaii', isCorrect: false },
        { id: 'c', text: 'En type jordskjelv', isCorrect: false },
        { id: 'd', text: 'Et tsunamivarslingssystem', isCorrect: false },
      ],
      solution: 'Ildringen (Ring of Fire) er et 40 000 km langt belt rundt Stillehavet der 75% av verdens aktive vulkaner og 90% av verdens jordskjelv finnes. Aktiviteten skyldes subduksjon av oseaniske plater.',
    },
    {
      id: 'geo1-4-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Ildringen har sa mye vulkansk og seismisk aktivitet.',
      solution: 'Ildringen folger grensene der Stillehavsplaten og andre oseaniske plater subduserer under kontinentale plater. Subduksjon gir: 1) Sterke jordskjelv fra friksjonen mellom platene. 2) Vulkanisme nar den subduserende platen smelter delvis pa ca. 100-150 km dyp og magma stiger opp. 3) Dyphavsgaver der platene dykker ned. Nesten hele Stillehavsplaten omringes av subduksjonssoner, noe som forklarer den intense aktiviteten langs hele Ildringen.',
    },
    {
      id: 'geo1-4-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er formelen for risiko i geofag?',
      options: [
        { id: 'a', text: 'Risiko = Fare x Sarbarhet x Eksponering', isCorrect: true },
        { id: 'b', text: 'Risiko = Fare + Eksponering', isCorrect: false },
        { id: 'c', text: 'Risiko = Magnitud x Intensitet', isCorrect: false },
        { id: 'd', text: 'Risiko = Sarbarhet / Fare', isCorrect: false },
      ],
      solution: 'Risiko beregnes ved aa multiplisere fare (sannsynlighet for hendelse), sarbarhet (hvor utsatt samfunnet er) og eksponering (verdier som kan rammes). Dette betyr at risiko kan reduseres ved aa senke sarbarhet eller eksponering, selv om selve faren er konstant.',
    },
    {
      id: 'geo1-4-5-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv hvordan store vulkanutbrudd kan pavirke det globale klimaet.',
      solution: 'Store vulkanutbrudd kan forasake global avkjoling gjennom folgende mekanisme: 1) Utbruddet kaster svoveldioksid (SO2) opp i stratosfaeren (over 10 km hoyde). 2) SO2 reagerer med vanndamp og danner sulfatpartikler (aerosoler). 3) Partiklene sprer seg rundt hele kloden i lopet av uker. 4) De reflekterer innkommende sollys tilbake til verdensrommet. 5) Mindre solenergi nar jordoverflaten, og global temperatur synker. Effekten varer 1-3 aar for partiklene faller ned. Tambora (1815) ga 0.5-1 grader C avkjoling og "aaret uten sommer" i 1816.',
    },
    {
      id: 'geo1-4-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilke vulkanske og seismiske farer kan ikke varsles pa forhand?',
      options: [
        { id: 'a', text: 'Jordskjelv', isCorrect: true },
        { id: 'b', text: 'Vulkanutbrudd', isCorrect: false },
        { id: 'c', text: 'Tsunamier', isCorrect: false },
        { id: 'd', text: 'Pyroklastiske strommer', isCorrect: false },
      ],
      solution: 'Jordskjelv kan ikke varsles pa forhand fordi de skjer plutselig nar spenninger i jordskorpen overstiger bruddstyrken. Vi kan beregne langsiktig sannsynlighet, men ikke tidspunkt. Vulkanutbrudd og tsunamier kan derimot varsles timer til dager forut.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler i Del 4
// ============================================================================

export const GEOFAG_1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_4_1,
  CHAPTER_GEOFAG_1_4_2,
  CHAPTER_GEOFAG_1_4_3,
  CHAPTER_GEOFAG_1_4_4,
  CHAPTER_GEOFAG_1_4_5,
];

export function getGeofag1Del4Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_DEL4_CHAPTERS.find(chapter => chapter.id === chapterId);
}
