/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for Elektro og datateknologi på VG1
 * 29 kapitler totalt (dette er del 1: kapittel 1-10)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Elektronikk grunnleggende
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_1: TextbookChapter = {
  id: 'elektro-data-vg1-1',
  courseId: 'elektro-data-vg1',
  chapterNumber: '1',
  title: 'Elektronikk grunnleggende',
  description: 'Grunnleggende elektroniske prinsipper og komponenter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå grunnleggende elektriske størrelser',
    'kjenne til ulike elektroniske komponenter',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-1-intro',
      type: 'text',
      content: `## Introduksjon til elektronikk

Elektronikk handler om kontrollert strøm av elektroner i kretser og komponenter. Fra enkle lyspærer til avanserte datamaskiner – alt bygger på de samme grunnprinsippene. I dette kapittelet skal vi utforske de grunnleggende konseptene som danner fundamentet for alt elektronisk arbeid.

Elektronikk er en del av hverdagen vår. I en mobiltelefon, datamaskin, TV og til og med i moderne biler finner vi elektroniske kretser. For å kunne arbeide med elektronikk må vi først forstå hva elektrisitet er og hvordan den oppfører seg i kretser.`,
    },

    // BLOKK 1: Elektriske grunnbegreper
    {
      id: 'elektro-data-vg1-1-def-1',
      type: 'definition',
      title: 'Spenning (U)',
      content: `Spenning måles i volt (V) og er forskjellen i elektrisk potensial mellom to punkter. Man kan tenke på spenning som "trykket" som driver elektronene gjennom en leder. Typiske spenninger vi møter er:
- Batteri: 1,5V, 9V
- Stikkontakt i hus: 230V
- USB-lader: 5V`,
    },
    {
      id: 'elektro-data-vg1-1-def-2',
      type: 'definition',
      title: 'Strøm (I)',
      content: `Strøm måles i ampere (A) og er mengden elektroner som passerer et punkt per tidsenhet. Jo mer strøm, jo flere elektroner er i bevegelse. Vi skiller mellom:
- Likestrøm (DC): Strømmen går alltid i samme retning
- Vekselstrøm (AC): Strømmen skifter retning periodisk`,
    },
    {
      id: 'elektro-data-vg1-1-def-3',
      type: 'definition',
      title: 'Motstand (R)',
      content: `Motstand måles i ohm (Ω) og er materialets evne til å motsette seg strøm. Alle materialer har en viss motstand. Ledere som kobber har lav motstand, isolatorer som plast har høy motstand.`,
    },
    {
      id: 'elektro-data-vg1-1-def-4',
      type: 'definition',
      title: 'Effekt (P)',
      content: `Effekt måles i watt (W) og beskriver hvor mye energi som omsettes per tid. Effekt beregnes som: P = U × I`,
    },
    {
      id: 'elektro-data-vg1-1-example-1',
      type: 'example',
      title: 'Beregne effekt i en krets',
      problem: 'En lyspære koblet til 230V trekker 0,26A strøm. Hva er effekten til lyspæren?',
      solution: `Vi bruker formelen P = U × I:
P = 230V × 0,26A = 59,8W ≈ 60W

Lyspæren har en effekt på ca. 60 watt.`,
    },
    {
      id: 'elektro-data-vg1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er enheten for elektrisk strøm?',
        options: [
          { id: 'a', text: 'Volt (V)', correct: false },
          { id: 'b', text: 'Ampere (A)', correct: true },
          { id: 'c', text: 'Ohm (Ω)', correct: false },
          { id: 'd', text: 'Watt (W)', correct: false },
        ],
        solution: 'Elektrisk strøm måles i ampere (A). Volt er enhet for spenning, ohm for motstand, og watt for effekt.',
      },
    },
    {
      id: 'elektro-data-vg1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er forskjellen på likestrøm (DC) og vekselstrøm (AC)?',
        solution: 'Likestrøm (DC) går alltid i samme retning, som i batterier. Vekselstrøm (AC) skifter retning periodisk, som i stikkontakter (230V i Norge). AC er lettere å transformere og transportere over lange avstander.',
      },
    },

    // BLOKK 2: Ohms lov
    {
      id: 'elektro-data-vg1-1-def-5',
      type: 'definition',
      title: 'Ohms lov',
      content: `Ohms lov er den mest grunnleggende sammenhengen i elektronikk. Den beskriver forholdet mellom spenning, strøm og motstand:

**U = I × R**

Der:
- U er spenning i volt (V)
- I er strøm i ampere (A)
- R er motstand i ohm (Ω)

Hvis vi kjenner to av de tre størrelsene, kan vi beregne den tredje:
- I = U / R (strøm = spenning delt på motstand)
- R = U / I (motstand = spenning delt på strøm)`,
    },
    {
      id: 'elektro-data-vg1-1-example-2',
      type: 'example',
      title: 'Beregne strøm med Ohms lov',
      problem: 'En lysdiode trenger 2V spenning og 20mA strøm. Hva er motstanden?',
      solution: `Vi bruker Ohms lov omformet til R = U / I:
R = 2V / 0,02A = 100Ω

Motstanden er 100 ohm.`,
    },
    {
      id: 'elektro-data-vg1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'En krets har en spenning på 12V og en motstand på 4Ω. Beregn strømmen.',
        solution: 'Ved bruk av Ohms lov: I = U / R = 12V / 4Ω = 3A. Strømmen er 3 ampere.',
      },
    },
    {
      id: 'elektro-data-vg1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'En krets har 9V spenning og 0,5A strøm. Hva er motstanden?',
        options: [
          { id: 'a', text: '4,5 Ω', correct: false },
          { id: 'b', text: '9 Ω', correct: false },
          { id: 'c', text: '18 Ω', correct: true },
          { id: 'd', text: '36 Ω', correct: false },
        ],
        solution: 'R = U / I = 9V / 0,5A = 18Ω. Motstanden er 18 ohm.',
      },
    },

    // BLOKK 3: Elektroniske komponenter
    {
      id: 'elektro-data-vg1-1-def-6',
      type: 'definition',
      title: 'Motstander',
      content: `Motstander begrenser strømmen i en krets. De kommer i faste verdier og har ofte fargekodet verdi (med fargebånd). Motstander brukes for å:
- Begrense strøm til komponenter
- Dele opp spenning
- Trekke signaler høyt eller lavt (pull-up/pull-down)`,
    },
    {
      id: 'elektro-data-vg1-1-def-7',
      type: 'definition',
      title: 'Kondensatorer',
      content: `Kondensatorer lagrer elektrisk ladning. De består av to ledende plater med en isolator imellom. Kapasitans måles i farad (F), vanligvis mikrofarad (µF) eller pikofarad (pF). Brukes til:
- Jevne ut spenning
- Filtrere signaler
- Midlertidig energilagring`,
    },
    {
      id: 'elektro-data-vg1-1-def-8',
      type: 'definition',
      title: 'Dioder og LED',
      content: `Dioder lar strøm passere i kun én retning. LED (light-emitting diode) er en spesiell diode som lyser når strøm går gjennom den. Dioder brukes til:
- Ensretting av vekselstrøm
- Beskyttelse mot feil polaritet
- Indikatorlys (LED)`,
    },
    {
      id: 'elektro-data-vg1-1-def-9',
      type: 'definition',
      title: 'Transistorer',
      content: `Transistorer kan forsterke signaler eller fungere som brytere. Den vanligste typen er bipolare transistorer (NPN og PNP) og felteffekttransistorer (MOSFET). Brukes til:
- Elektroniske brytere
- Signalforsterkning
- Digitale logiske kretser`,
    },
    {
      id: 'elektro-data-vg1-1-example-3',
      type: 'example',
      title: 'Beregne motstand for LED-beskyttelse',
      problem: 'En LED trenger 2V spenning og trekker 15mA strøm. Du har en 9V strømkilde. Hvilken motstand må du bruke i serie med LED for å beskytte den?',
      solution: `Motstanden må ta opp spenningsdifferansen:
Uspenning over motstand = 9V - 2V = 7V

Ved Ohms lov:
R = U / I = 7V / 0,015A = 466,7Ω

Velg nærmeste standardverdi: 470Ω`,
    },
    {
      id: 'elektro-data-vg1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Beskriv hva en kondensator gjør i en elektronisk krets.',
        solution: 'En kondensator lagrer elektrisk ladning mellom to ledende plater. Den kan lade opp og utlade, og brukes til å jevne ut spenning, filtrere støy og lagre energi midlertidig. Kondensatoren slipper gjennom vekselstrøm men blokkerer likestrøm.',
      },
    },
    {
      id: 'elektro-data-vg1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken komponent lar strøm passere i kun én retning?',
        options: [
          { id: 'a', text: 'Motstand', correct: false },
          { id: 'b', text: 'Kondensator', correct: false },
          { id: 'c', text: 'Diode', correct: true },
          { id: 'd', text: 'Transistor', correct: false },
        ],
        solution: 'En diode lar strøm passere i kun én retning. Dette gjør den nyttig for å ensrette vekselstrøm og beskytte mot feil polaritet.',
      },
    },
    {
      id: 'elektro-data-vg1-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'middels',
        task: 'Hvorfor er transistoren en så viktig komponent i elektronikk?',
        solution: 'Transistoren kan fungere både som forsterker og bryter. Den kan kontrollere stor strøm med et lite signal, og er grunnlaget for alle digitale kretser. I moderne prosessorer er det milliarder av transistorer som jobber sammen for å utføre beregninger.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært om de grunnleggende elektriske størrelsene:
- **Spenning (U)** måles i volt og er "trykket" som driver elektronene
- **Strøm (I)** måles i ampere og er mengden elektroner som passerer per tid
- **Motstand (R)** måles i ohm og beskriver hvor mye materialet motsetter seg strøm
- **Effekt (P)** måles i watt og beskriver energiomsetting per tid

**Ohms lov** (U = I × R) er den fundamentale sammenhengen som knytter disse størrelsene sammen.

Vi har også sett på viktige elektroniske komponenter:
- **Motstander** begrenser strøm
- **Kondensatorer** lagrer ladning
- **Dioder** lar strøm passere i kun én retning
- **Transistorer** fungerer som forsterkere og brytere`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal bygge en krets med en rød LED som lyser når du trykker på en knapp. Du har et 5V batteri, en LED som krever 2V og 10mA, en knapp og motstander. Beskriv kretsen og beregn hvilken motstandsverdi du trenger.',
        solution: `Kretsen kobles slik: Batteriets + pol → motstand → LED (+ side) → LED (- side) → knapp → batteriets - pol.

Beregning av motstand:
Spenning over motstanden: 5V - 2V = 3V
Strøm: 10mA = 0,01A
R = U / I = 3V / 0,01A = 300Ω

Du trenger en motstand på 300Ω (eller nærmeste standardverdi 330Ω).`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Spenning', definition: 'Forskjell i elektrisk potensial mellom to punkter, målt i volt (V).' },
    { term: 'Strøm', definition: 'Mengden elektroner som passerer et punkt per tid, målt i ampere (A).' },
    { term: 'Motstand', definition: 'Materialets evne til å motsette seg strøm, målt i ohm (Ω).' },
    { term: 'Ohms lov', definition: 'Grunnleggende sammenheng: U = I × R (spenning = strøm × motstand).' },
    { term: 'LED', definition: 'Light-Emitting Diode, en diode som lyser når strøm går gjennom den.' },
    { term: 'Transistor', definition: 'Elektronisk komponent som kan forsterke signaler eller fungere som bryter.' },
    { term: 'Likestrøm (DC)', definition: 'Elektrisk strøm som alltid går i samme retning.' },
    { term: 'Vekselstrøm (AC)', definition: 'Elektrisk strøm som skifter retning periodisk.' },
  ],
};

// ============================================================================
// Kapittel 2: Kretser og komponenter
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_2: TextbookChapter = {
  id: 'elektro-data-vg1-2',
  courseId: 'elektro-data-vg1',
  chapterNumber: '2',
  title: 'Kretser og komponenter',
  description: 'Bygging og analyse av elektriske kretser.',
  estimatedMinutes: 65,
  competenceGoals: [
    'bygge og analysere elektriske kretser',
    'forstå serie- og parallellkobling',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-2-intro',
      type: 'text',
      content: `## Introduksjon til elektriske kretser

En elektrisk krets er en lukket bane som strømmen kan gå gjennom. For at strøm skal kunne flyte, må kretsen være komplett – et brudd i kretsen stopper strømmen. Alle elektriske kretser består av:
- Spenningskilde (batteri, strømforsyning)
- Ledere (kabler, kobberstriper)
- Last (komponenter som bruker energi)
- Eventuelt brytere for kontroll

Vi tegner kretser med symboler som representerer hver komponent. Dette kalles et kretsdiagram eller skjematisk diagram. Alle symbolene følger internasjonale standarder slik at alle forstår tegningene.`,
    },

    // BLOKK 1: Seriekobling
    {
      id: 'elektro-data-vg1-2-def-1',
      type: 'definition',
      title: 'Seriekobling',
      content: `I en seriekobling er komponentene koblet etter hverandre i en kjede. Strømmen må gå gjennom alle komponentene i tur og orden.

**Egenskaper ved seriekobling:**
- Samme strøm gjennom alle komponenter (I₁ = I₂ = I₃)
- Total spenning er summen av spenningene (Utot = U₁ + U₂ + U₃)
- Total motstand er summen av motstandene (Rtot = R₁ + R₂ + R₃)
- Hvis én komponent svikter, stopper hele kretsen

**Bruksområder:** Lysdiodekjeder (julelys), spenningsdeler, strømbegrensning`,
    },
    {
      id: 'elektro-data-vg1-2-example-1',
      type: 'example',
      title: 'Motstander i serie',
      problem: 'Tre motstander på 100Ω, 200Ω og 300Ω er koblet i serie. Hva er den totale motstanden?',
      solution: `I seriekobling summeres motstandene:
Rtot = R₁ + R₂ + R₃
Rtot = 100Ω + 200Ω + 300Ω = 600Ω

Total motstand er 600Ω.`,
    },
    {
      id: 'elektro-data-vg1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'middels',
        task: 'Tre motstander på 10Ω, 20Ω og 30Ω er koblet i serie med et 12V batteri. Beregn total motstand og strøm i kretsen.',
        solution: 'Rtot = 10Ω + 20Ω + 30Ω = 60Ω. Strøm: I = U/R = 12V/60Ω = 0,2A = 200mA. Total motstand er 60Ω og strømmen er 200mA.',
      },
    },
    {
      id: 'elektro-data-vg1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer med strømmen i en seriekobling hvis én komponent svikter?',
        options: [
          { id: 'a', text: 'Strømmen fortsetter uforandret', correct: false },
          { id: 'b', text: 'Strømmen stopper i hele kretsen', correct: true },
          { id: 'c', text: 'Strømmen dobles', correct: false },
          { id: 'd', text: 'Strømmen halveres', correct: false },
        ],
        solution: 'I en seriekobling må strømmen gå gjennom alle komponentene. Hvis én komponent svikter (åpen krets), stopper strømmen i hele kretsen.',
      },
    },

    // BLOKK 2: Parallellkobling
    {
      id: 'elektro-data-vg1-2-def-2',
      type: 'definition',
      title: 'Parallellkobling',
      content: `I parallellkobling er komponentene koblet ved siden av hverandre. Strømmen fordeler seg mellom de ulike grenene.

**Egenskaper ved parallellkobling:**
- Samme spenning over alle komponenter (U₁ = U₂ = U₃)
- Total strøm er summen av strømmene (Itot = I₁ + I₂ + I₃)
- Total motstand beregnes: 1/Rtot = 1/R₁ + 1/R₂ + 1/R₃
- Hvis én komponent svikter, fortsetter resten å fungere

**Bruksområder:** Stikkontakter i hus, parallelle batterier (øker kapasitet), redundante systemer`,
    },
    {
      id: 'elektro-data-vg1-2-example-2',
      type: 'example',
      title: 'Motstander i parallell',
      problem: 'To motstander på 100Ω er parallellkoblet. Hva er den totale motstanden?',
      solution: `Ved parallellkobling:
1/Rtot = 1/R₁ + 1/R₂
1/Rtot = 1/100Ω + 1/100Ω = 2/100Ω
Rtot = 100Ω/2 = 50Ω

Total motstand er 50Ω. Merk at total motstand i parallell alltid er mindre enn den minste enkeltmotstanden.`,
    },
    {
      id: 'elektro-data-vg1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'To motstander på 50Ω og 150Ω er parallellkoblet over en 9V spenningskilde. Beregn total motstand og strøm fra kilden.',
        solution: '1/Rtot = 1/50 + 1/150 = 3/150 + 1/150 = 4/150. Rtot = 150/4 = 37,5Ω. Strøm: I = 9V/37,5Ω = 0,24A = 240mA.',
      },
    },
    {
      id: 'elektro-data-vg1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar fordelen med parallellkobling av lys i et hus fremfor seriekobling.',
        solution: 'I parallellkobling får alle lysene samme spenning (230V) og fungerer uavhengig av hverandre. Hvis én lyspære går, fungerer resten fortsatt. I seriekobling ville alle lysene bli mørkere når man legger til flere, og hvis én går vil alle slukke.',
      },
    },

    // BLOKK 3: Kombinerte kretser og Kirchhoffs lover
    {
      id: 'elektro-data-vg1-2-def-3',
      type: 'definition',
      title: 'Kirchhoffs strømlov (KCL)',
      content: `Total strøm inn i et knutepunkt er lik total strøm ut. Strøm kan verken oppstå eller forsvinne.

**Σ Iinn = Σ Iut**

Et knutepunkt er et punkt hvor tre eller flere ledere møtes i en krets.`,
    },
    {
      id: 'elektro-data-vg1-2-def-4',
      type: 'definition',
      title: 'Kirchhoffs spenningslov (KVL)',
      content: `Summen av spenningsfall i en lukket krets er null. Energien som spenningskilden leverer brukes opp i kretsen.

**Σ U = 0**

Dette betyr at spenningen fra kilden er lik summen av spenningsfallene over alle komponentene.`,
    },
    {
      id: 'elektro-data-vg1-2-example-3',
      type: 'example',
      title: 'Kombinert krets',
      problem: 'En 100Ω motstand og en 200Ω motstand er i serie, koblet parallelt med en 300Ω motstand. Hva er total motstand?',
      solution: `Steg 1: Beregn seriedelen først:
Rserie = 100Ω + 200Ω = 300Ω

Steg 2: Denne 300Ω motstanden er parallell med den andre 300Ω motstanden:
1/Rtot = 1/300 + 1/300 = 2/300
Rtot = 300/2 = 150Ω

Total motstand er 150Ω.`,
    },
    {
      id: 'elektro-data-vg1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Tre motstander på 60Ω hver er parallellkoblet. Hva er den totale motstanden?',
        options: [
          { id: 'a', text: '180 Ω', correct: false },
          { id: 'b', text: '60 Ω', correct: false },
          { id: 'c', text: '30 Ω', correct: false },
          { id: 'd', text: '20 Ω', correct: true },
        ],
        solution: '1/Rtot = 1/60 + 1/60 + 1/60 = 3/60. Rtot = 60/3 = 20Ω. Generelt: For n like motstander R i parallell er Rtot = R/n.',
      },
    },
    {
      id: 'elektro-data-vg1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Hva sier Kirchhoffs strømlov, og gi et praktisk eksempel.',
        solution: 'Kirchhoffs strømlov sier at total strøm inn i et knutepunkt er lik total strøm ut. Eksempel: Hvis 2A kommer inn i et knutepunkt og deler seg i to grener, kan det være 1,3A i den ene grenen og 0,7A i den andre. Summen er fortsatt 2A.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært om hvordan elektriske kretser er bygd opp og analyseres.

**Seriekobling:**
- Samme strøm gjennom alle komponenter
- Total motstand = summen av motstandene
- Én sviktende komponent stopper hele kretsen

**Parallellkobling:**
- Samme spenning over alle komponenter
- 1/Rtot = 1/R₁ + 1/R₂ + ...
- Komponenter fungerer uavhengig av hverandre

**Kirchhoffs lover:**
- **Strømlov (KCL):** Strøm inn = strøm ut i et knutepunkt
- **Spenningslov (KVL):** Summen av spenninger i en lukket krets = 0

Kombinerte kretser analyseres ved å forenkle steg for steg, og alltid bruke Ohms lov og Kirchhoffs lover.`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En krets består av et 12V batteri. Fra batteriet går to parallelle grener: Gren A har to motstander på 20Ω og 40Ω i serie. Gren B har én motstand på 30Ω. Beregn: a) Total motstand i kretsen, b) Total strøm fra batteriet, c) Strømmen i hver gren.',
        solution: `a) Total motstand:
Gren A: 20Ω + 40Ω = 60Ω
Parallell med gren B (30Ω): 1/Rtot = 1/60 + 1/30 = 1/60 + 2/60 = 3/60
Rtot = 60/3 = 20Ω

b) Total strøm:
Itot = U/Rtot = 12V/20Ω = 0,6A = 600mA

c) Strøm i hver gren (samme spenning = 12V over begge grener):
Gren A: IA = 12V/60Ω = 0,2A = 200mA
Gren B: IB = 12V/30Ω = 0,4A = 400mA

Kontroll: 200mA + 400mA = 600mA (stemmer med total strøm)`,
      },
    },
    {
      id: 'elektro-data-vg1-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'middels',
        task: 'Tegn et kretsdiagram for en enkel krets med batteri, bryter, motstand og LED i serie. Beskriv hvert symbol.',
        solution: 'Kretsen tegnes med symbolene: Batteri (to streker, lang positiv), bryter (åpen/lukket gap), motstand (sikksakk-linje eller rektangel), LED (trekant med pil), og ledninger som forbinder alt i en lukket sløyfe. Alle symbolene følger internasjonale standarder.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Seriekobling', definition: 'Komponenter koblet etter hverandre, samme strøm gjennom alle.' },
    { term: 'Parallellkobling', definition: 'Komponenter koblet ved siden av hverandre, samme spenning over alle.' },
    { term: 'Kretsdiagram', definition: 'Tegning av en elektrisk krets med standardiserte symboler.' },
    { term: 'Kirchhoffs strømlov', definition: 'Total strøm inn i et knutepunkt er lik total strøm ut.' },
    { term: 'Kirchhoffs spenningslov', definition: 'Summen av spenningsfall i en lukket krets er null.' },
    { term: 'Knutepunkt', definition: 'Punkt hvor tre eller flere ledere møtes i en krets.' },
  ],
};

// ============================================================================
// Kapittel 3: Digital elektronikk
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_3: TextbookChapter = {
  id: 'elektro-data-vg1-3',
  courseId: 'elektro-data-vg1',
  chapterNumber: '3',
  title: 'Digital elektronikk',
  description: 'Digitale signaler og logiske porter.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå digitale signaler og tallsystemer',
    'arbeide med logiske porter',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-3-intro',
      type: 'text',
      content: `## Introduksjon til digital elektronikk

Digital elektronikk er grunnlaget for all moderne teknologi. Fra datamaskiner og smarttelefoner til biler og medisinsk utstyr – alt bruker digitale kretser. I motsetning til analog elektronikk, som arbeider med kontinuerlige signaler, bruker digital elektronikk diskrete verdier: 1 og 0.

I dette kapittelet lærer du om forskjellen mellom analoge og digitale signaler, hvordan tallsystemer fungerer, og hvordan logiske porter bygger opp komplekse digitale systemer.`,
    },

    // BLOKK 1: Analoge og digitale signaler
    {
      id: 'elektro-data-vg1-3-def-1',
      type: 'definition',
      title: 'Analogt signal',
      content: `Et analogt signal kan ha hvilken som helst verdi innenfor et område. Temperaturen utendørs er analog – den kan være 15,3°C eller 15,4°C eller enhver verdi imellom. Lysstyrke, lydvolum og vekt er andre eksempler på analoge størrelser.`,
    },
    {
      id: 'elektro-data-vg1-3-def-2',
      type: 'definition',
      title: 'Digitalt signal',
      content: `Et digitalt signal har bare to nivåer: På eller Av, Høy eller Lav, 1 eller 0. Dette kalles binære signaler. Moderne datamaskiner bruker digitale signaler fordi de er:
- Lettere å behandle
- Mer motstandsdyktige mot støy
- Enklere å lagre og kopiere
- Kan representere all type informasjon

**Spenningsnivåer i digital elektronikk:**
- Logisk 0: 0V til 0,8V (lav)
- Logisk 1: 2V til 5V (høy)`,
    },
    {
      id: 'elektro-data-vg1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse er et eksempel på et analogt signal?',
        options: [
          { id: 'a', text: 'En bryter som er på eller av', correct: false },
          { id: 'b', text: 'Temperaturen i et rom', correct: true },
          { id: 'c', text: 'Et binært tall', correct: false },
          { id: 'd', text: 'En LED som lyser eller ikke', correct: false },
        ],
        solution: 'Temperatur er et analogt signal fordi det kan ha hvilken som helst verdi innenfor et område (f.eks. 21,3°C). De andre alternativene er digitale – de har bare to tilstander.',
      },
    },

    // BLOKK 2: Tallsystemer
    {
      id: 'elektro-data-vg1-3-def-3',
      type: 'definition',
      title: 'Binært tallsystem (base 2)',
      content: `Binære tall bruker bare sifrene 0 og 1. Hver posisjon representerer en potens av 2:

Eksempel: 1011₂
- 1 × 2³ = 1 × 8 = 8
- 0 × 2² = 0 × 4 = 0
- 1 × 2¹ = 1 × 2 = 2
- 1 × 2⁰ = 1 × 1 = 1
- Sum: 8 + 0 + 2 + 1 = 11₁₀

**Konvertering desimal til binær:**
Del på 2 gjentatte ganger og les restene baklengs.`,
    },
    {
      id: 'elektro-data-vg1-3-def-4',
      type: 'definition',
      title: 'Heksadesimalt tallsystem (base 16)',
      content: `Heksadesimale tall bruker sifrene 0-9 og bokstavene A-F:
- A = 10, B = 11, C = 12, D = 13, E = 14, F = 15

Fire binære siffer tilsvarer ett heksadesimalt siffer:
- 1011₂ = B₁₆
- FF₁₆ = 255₁₀ = 11111111₂

Heksadesimale tall brukes ofte i programmering fordi de er mer kompakte enn binære tall.`,
    },
    {
      id: 'elektro-data-vg1-3-example-1',
      type: 'example',
      title: 'Konvertere binært til desimalt',
      problem: 'Konverter binærtallet 1101₂ til desimalt tall.',
      solution: `Posisjonsverdi fra høyre: 2⁰=1, 2¹=2, 2²=4, 2³=8

1101₂ = 1×8 + 1×4 + 0×2 + 1×1
      = 8 + 4 + 0 + 1
      = 13₁₀

Svaret er 13.`,
    },
    {
      id: 'elektro-data-vg1-3-example-2',
      type: 'example',
      title: 'Konvertere desimalt til binært',
      problem: 'Konverter desimaltallet 25 til binært.',
      solution: `Del på 2 og noter restene:
25 ÷ 2 = 12 rest 1
12 ÷ 2 = 6 rest 0
6 ÷ 2 = 3 rest 0
3 ÷ 2 = 1 rest 1
1 ÷ 2 = 0 rest 1

Les restene baklengs: 25₁₀ = 11001₂`,
    },
    {
      id: 'elektro-data-vg1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Konverter binærtallet 10110₂ til desimalt tall.',
        solution: '10110₂ = 1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 16 + 0 + 4 + 2 + 0 = 22₁₀. Svaret er 22.',
      },
    },
    {
      id: 'elektro-data-vg1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er desimaltallet 15 i binær form?',
        options: [
          { id: 'a', text: '1110₂', correct: false },
          { id: 'b', text: '1111₂', correct: true },
          { id: 'c', text: '10000₂', correct: false },
          { id: 'd', text: '1101₂', correct: false },
        ],
        solution: '15₁₀ = 8+4+2+1 = 1×8 + 1×4 + 1×2 + 1×1 = 1111₂',
      },
    },

    // BLOKK 3: Logiske porter
    {
      id: 'elektro-data-vg1-3-def-5',
      type: 'definition',
      title: 'AND-port (OG)',
      content: `Utgangen er 1 bare hvis ALLE inngangene er 1.
- 0 AND 0 = 0
- 0 AND 1 = 0
- 1 AND 0 = 0
- 1 AND 1 = 1

Eksempel: En dør som krever BÅDE kode OG nøkkel for å åpnes.`,
    },
    {
      id: 'elektro-data-vg1-3-def-6',
      type: 'definition',
      title: 'OR-port (ELLER)',
      content: `Utgangen er 1 hvis MINST ÉN inngang er 1.
- 0 OR 0 = 0
- 0 OR 1 = 1
- 1 OR 0 = 1
- 1 OR 1 = 1

Eksempel: En alarm som går hvis ENTEN døren ELLER vinduet åpnes.`,
    },
    {
      id: 'elektro-data-vg1-3-def-7',
      type: 'definition',
      title: 'NOT-port (IKKE)',
      content: `Inverterer signalet (snur det).
- NOT 0 = 1
- NOT 1 = 0

Eksempel: Rombelysning som slår seg på når det er IKKE lyst ute.`,
    },
    {
      id: 'elektro-data-vg1-3-def-8',
      type: 'definition',
      title: 'XOR-port (Eksklusiv OR)',
      content: `Utgangen er 1 hvis inngangene er FORSKJELLIGE.
- 0 XOR 0 = 0
- 0 XOR 1 = 1
- 1 XOR 0 = 1
- 1 XOR 1 = 0

Forskjell fra OR: XOR gir 0 når begge inngangene er 1.`,
    },
    {
      id: 'elektro-data-vg1-3-example-3',
      type: 'example',
      title: 'Sannhetstabell for AND-port',
      problem: 'Lag en sannhetstabell for en AND-port med to innganger A og B.',
      solution: `| A | B | Utgang |
|---|---|--------|
| 0 | 0 | 0      |
| 0 | 1 | 0      |
| 1 | 0 | 0      |
| 1 | 1 | 1      |

Utgangen er 1 bare når BÅDE A OG B er 1.`,
    },
    {
      id: 'elektro-data-vg1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar forskjellen mellom en OR-port og en XOR-port.',
        solution: 'OR-porten gir 1 hvis minst én inngang er 1 (inkludert når begge er 1). XOR-porten gir 1 bare når inngangene er FORSKJELLIGE. OR: 1+1=1, XOR: 1+1=0.',
      },
    },
    {
      id: 'elektro-data-vg1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er resultatet av 1 AND 0?',
        options: [
          { id: 'a', text: '1', correct: false },
          { id: 'b', text: '0', correct: true },
          { id: 'c', text: '2', correct: false },
          { id: 'd', text: 'Udefinert', correct: false },
        ],
        solution: 'AND-porten gir 1 bare hvis ALLE inngangene er 1. Siden én inngang er 0, blir resultatet 0.',
      },
    },
    {
      id: 'elektro-data-vg1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Du skal lage en krets som aktiverer en alarm hvis ENTEN døren ELLER vinduet åpnes. Hvilken logisk port trenger du?',
        solution: 'Du trenger en OR-port. Dørsensor og vindussensor er inngangene. Hvis minst én av dem er aktivert (1), skal alarmen gå (utgang = 1). OR-porten gir akkurat denne funksjonen.',
      },
    },

    // BLOKK 4: Boolsk algebra
    {
      id: 'elektro-data-vg1-3-def-9',
      type: 'definition',
      title: 'Boolsk algebra',
      content: `Boolsk algebra er matematikken bak digital logikk. Den ble utviklet av George Boole på 1800-tallet.

**Grunnleggende lover:**
- **Kommutativ:** A AND B = B AND A, A OR B = B OR A
- **Assosiativ:** (A AND B) AND C = A AND (B AND C)
- **Distributiv:** A AND (B OR C) = (A AND B) OR (A AND C)

**De Morgans lover:**
- NOT(A AND B) = (NOT A) OR (NOT B)
- NOT(A OR B) = (NOT A) AND (NOT B)

Disse lovene brukes til å forenkle logiske uttrykk og optimalisere digitale kretser.`,
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Signaltyper:**
- Analoge signaler kan ha enhver verdi (kontinuerlig)
- Digitale signaler har kun to nivåer: 0 eller 1 (diskret)

**Tallsystemer:**
- Binært (base 2): Bruker 0 og 1
- Heksadesimalt (base 16): Bruker 0-9 og A-F
- Fire binære siffer = ett heksadesimalt siffer

**Logiske porter:**
- **AND:** Utgang 1 kun hvis alle innganger er 1
- **OR:** Utgang 1 hvis minst én inngang er 1
- **NOT:** Inverterer signalet
- **XOR:** Utgang 1 hvis inngangene er forskjellige

**Boolsk algebra** gir oss matematiske regler for å analysere og forenkle logiske uttrykk.`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Design en logisk krets for en bil som bare starter hvis: (1) nøkkelen er i tenningen OG (2) setebelte er festet ELLER passasjersetet er tomt. Beskriv hvilke porter du trenger.',
        solution: `La oss definere inngangene:
- N = Nøkkel i tenning (1 = ja, 0 = nei)
- S = Setebelte festet (1 = ja, 0 = nei)
- T = Passasjersete tomt (1 = ja, 0 = nei)

Logisk uttrykk: Start = N AND (S OR T)

Kretsen trenger:
1. En OR-port for (S OR T) - setebelte ELLER tomt sete
2. En AND-port som tar nøkkel-signalet og utgangen fra OR-porten

Resultat: Bilen starter kun når nøkkelen er i OG (setebelte er på ELLER setet er tomt).`,
      },
    },
    {
      id: 'elektro-data-vg1-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'middels',
        task: 'Konverter det heksadesimale tallet 2A₁₆ til desimalt og binært.',
        solution: `Til desimal:
2A₁₆ = 2×16 + A×1 = 2×16 + 10×1 = 32 + 10 = 42₁₀

Til binær:
2₁₆ = 0010₂
A₁₆ = 1010₂
2A₁₆ = 00101010₂ = 101010₂

Svar: 2A₁₆ = 42₁₀ = 101010₂`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Binært tallsystem', definition: 'Tallsystem med base 2, bruker bare sifrene 0 og 1.' },
    { term: 'Logisk port', definition: 'Elektronisk krets som utfører en logisk operasjon på digitale signaler.' },
    { term: 'Sannhetstabell', definition: 'Tabell som viser alle mulige kombinasjoner av innganger og utganger.' },
    { term: 'AND-port', definition: 'Logisk port der utgangen er 1 bare hvis alle inngangene er 1.' },
    { term: 'OR-port', definition: 'Logisk port der utgangen er 1 hvis minst én inngang er 1.' },
    { term: 'XOR-port', definition: 'Logisk port der utgangen er 1 hvis inngangene er forskjellige.' },
    { term: 'Boolsk algebra', definition: 'Matematisk system for logiske operasjoner med sann/usann verdier.' },
  ],
};

// ============================================================================
// Kapittel 4: Programmering grunnleggende
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_4: TextbookChapter = {
  id: 'elektro-data-vg1-4',
  courseId: 'elektro-data-vg1',
  chapterNumber: '4',
  title: 'Programmering grunnleggende',
  description: 'Introduksjon til programmering og algoritmer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå grunnleggende programmeringskonsepter',
    'skrive enkle programmer',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-4-intro',
      type: 'text',
      content: `## Introduksjon til programmering

Programmering er å gi instruksjoner til en datamaskin. En datamaskin er ekstremt rask til å utføre enkle operasjoner, men den trenger nøyaktige instruksjoner for hva den skal gjøre. Et program er en samling slike instruksjoner.

**Hvorfor lære programmering?**
- Automatisere repetitive oppgaver
- Kontrollere elektroniske systemer
- Løse komplekse problemer
- Lage produkter og tjenester
- Forstå teknologien rundt oss

**Programmeringsspråk i elektrofag:**
- Python: Lett å lære, allsidig bruk
- C/C++: Embedded systemer og mikrokontrollere
- JavaScript: Nettsider og webapper`,
    },

    // BLOKK 1: Variabler og datatyper
    {
      id: 'elektro-data-vg1-4-def-1',
      type: 'definition',
      title: 'Variabel',
      content: `En variabel er et navngitt sted i minnet hvor vi kan lagre data. Vi kan tenke på det som en boks med en etikett. Variabelen har:
- Et navn (f.eks. temperatur)
- En verdi (f.eks. 22.5)
- En datatype (f.eks. desimaltall)`,
    },
    {
      id: 'elektro-data-vg1-4-def-2',
      type: 'definition',
      title: 'Datatyper',
      content: `**Heltall (integer/int):** Tall uten desimaler: -2, 0, 42, 1000

**Desimaltall (float/double):** Tall med desimaler: 3.14, -0.5, 22.7

**Tekst (string):** Tekst i anførselstegn: "Hei", "Arduino", "Sensor aktivert"

**Boolske verdier (boolean/bool):** Sant eller usant: true/false, 1/0`,
    },
    {
      id: 'elektro-data-vg1-4-example-1',
      type: 'example',
      title: 'Opprette variabler i Python',
      problem: 'Hvordan oppretter vi variabler av forskjellige typer i Python?',
      solution: `\`\`\`python
temperatur = 22.5  # Desimaltall (float)
navn = "Arduino"   # Tekst (string)
aktivert = True    # Boolsk (boolean)
teller = 0         # Heltall (int)
\`\`\`

Python bestemmer automatisk datatypen basert på verdien du tilordner.`,
    },
    {
      id: 'elektro-data-vg1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken datatype brukes for å lagre tekst?',
        options: [
          { id: 'a', text: 'int', correct: false },
          { id: 'b', text: 'float', correct: false },
          { id: 'c', text: 'string', correct: true },
          { id: 'd', text: 'boolean', correct: false },
        ],
        solution: 'String (tekst) brukes for å lagre tekst. Int er for heltall, float for desimaltall, og boolean for sant/usant.',
      },
    },
    {
      id: 'elektro-data-vg1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv et program som beregner arealet av et rektangel med lengde 5 og bredde 3.',
        solution: `\`\`\`python
lengde = 5
bredde = 3
areal = lengde * bredde
print("Arealet er:", areal)
\`\`\`

Output: Arealet er: 15`,
      },
    },

    // BLOKK 2: Operatorer
    {
      id: 'elektro-data-vg1-4-def-3',
      type: 'definition',
      title: 'Aritmetiske operatorer',
      content: `- \`+\` Addisjon: 5 + 3 = 8
- \`-\` Subtraksjon: 5 - 3 = 2
- \`*\` Multiplikasjon: 5 * 3 = 15
- \`/\` Divisjon: 6 / 2 = 3
- \`%\` Modulo (rest): 7 % 3 = 1`,
    },
    {
      id: 'elektro-data-vg1-4-def-4',
      type: 'definition',
      title: 'Sammenlignings- og logiske operatorer',
      content: `**Sammenligningsoperatorer:**
- \`==\` Lik: 5 == 5 er sant
- \`!=\` Ulik: 5 != 3 er sant
- \`>\` Større enn, \`<\` Mindre enn
- \`>=\` Større eller lik, \`<=\` Mindre eller lik

**Logiske operatorer:**
- \`and\`: Sant hvis begge er sanne
- \`or\`: Sant hvis minst én er sann
- \`not\`: Snur verdien`,
    },
    {
      id: 'elektro-data-vg1-4-example-2',
      type: 'example',
      title: 'Bruke operatorer',
      problem: 'Sjekk om en person kan kjøre bil (alder >= 18 og har førerkort).',
      solution: `\`\`\`python
alder = 17
har_lappen = False
kan_kjore = (alder >= 18) and har_lappen
# kan_kjore blir False fordi alder < 18
print(kan_kjore)  # Output: False
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er resultatet av 10 % 3 (modulo)?',
        options: [
          { id: 'a', text: '3', correct: false },
          { id: 'b', text: '1', correct: true },
          { id: 'c', text: '0', correct: false },
          { id: 'd', text: '10', correct: false },
        ],
        solution: 'Modulo (%) gir resten etter divisjon. 10 / 3 = 3 med rest 1. Derfor er 10 % 3 = 1.',
      },
    },

    // BLOKK 3: Kontrollstrukturer - If-setninger
    {
      id: 'elektro-data-vg1-4-def-5',
      type: 'definition',
      title: 'If-setninger',
      content: `If-setninger lar programmet ta beslutninger basert på betingelser.

**Syntaks:**
\`\`\`python
if betingelse:
    # kjør denne koden hvis betingelsen er sann
elif annen_betingelse:
    # kjør denne koden hvis første er usann, men denne er sann
else:
    # kjør denne koden hvis ingen betingelser er sanne
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-4-example-3',
      type: 'example',
      title: 'Temperatursjekk med if-setning',
      problem: 'Lag en if-setning som gir beskjed om temperaturen er varm, behagelig eller kald.',
      solution: `\`\`\`python
temperatur = 25

if temperatur > 30:
    print("Veldig varmt!")
elif temperatur > 20:
    print("Behagelig")
else:
    print("Kaldt")
\`\`\`

Med temperatur = 25 blir output "Behagelig".`,
    },
    {
      id: 'elektro-data-vg1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Lag en if-setning som sjekker om et tall er positivt, negativt eller null.',
        solution: `\`\`\`python
tall = -5

if tall > 0:
    print("Positivt")
elif tall < 0:
    print("Negativt")
else:
    print("Null")
\`\`\``,
      },
    },
    {
      id: 'elektro-data-vg1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Lag et program som leser en temperatur og gir beskjed hvis den er utenfor området 18-25 grader.',
        solution: `\`\`\`python
temperatur = 30  # Eksempelverdi

if temperatur < 18:
    print("For kaldt!")
elif temperatur > 25:
    print("For varmt!")
else:
    print("Temperatur OK")
\`\`\``,
      },
    },

    // BLOKK 4: Løkker
    {
      id: 'elektro-data-vg1-4-def-6',
      type: 'definition',
      title: 'For-løkke',
      content: `For-løkker brukes når vi vet på forhånd hvor mange ganger koden skal gjentas.

\`\`\`python
for i in range(5):
    print(i)  # Skriver ut 0, 1, 2, 3, 4
\`\`\`

range(5) gir tallene 0 til 4. range(start, stopp, steg) gir mer kontroll.`,
    },
    {
      id: 'elektro-data-vg1-4-def-7',
      type: 'definition',
      title: 'While-løkke',
      content: `While-løkker fortsetter så lenge en betingelse er sann.

\`\`\`python
teller = 0
while teller < 5:
    print(teller)
    teller = teller + 1
\`\`\`

Brukes når vi ikke vet på forhånd hvor mange gjentagelser som trengs.`,
    },
    {
      id: 'elektro-data-vg1-4-example-4',
      type: 'example',
      title: 'Nedtelling med for-løkke',
      problem: 'Skriv et program som teller ned fra 10 til 1, og så skriver "Start!".',
      solution: `\`\`\`python
for i in range(10, 0, -1):
    print(i)
print("Start!")
\`\`\`

Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Start!

range(10, 0, -1) starter på 10, stopper før 0, og går bakover med steg -1.`,
    },
    {
      id: 'elektro-data-vg1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv en for-løkke som skriver ut alle partall fra 0 til 10.',
        solution: `\`\`\`python
for i in range(0, 11, 2):
    print(i)
\`\`\`

Eller:

\`\`\`python
for i in range(11):
    if i % 2 == 0:
        print(i)
\`\`\`

Output: 0, 2, 4, 6, 8, 10`,
      },
    },
    {
      id: 'elektro-data-vg1-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom en for-løkke og en while-løkke?',
        solution: 'En for-løkke brukes når vi vet på forhånd hvor mange ganger koden skal gjentas. En while-løkke brukes når vi skal gjenta kode til en betingelse ikke lenger er oppfylt, og vi vet ikke på forhånd hvor mange ganger det blir.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Variabler og datatyper:**
- Variabler lagrer data med navn og verdi
- Datatyper: int (heltall), float (desimaltall), string (tekst), boolean (sant/usant)

**Operatorer:**
- Aritmetiske: +, -, *, /, %
- Sammenligning: ==, !=, >, <, >=, <=
- Logiske: and, or, not

**Kontrollstrukturer:**
- **If-setninger:** Tar beslutninger basert på betingelser
- **For-løkker:** Gjentar kode et bestemt antall ganger
- **While-løkker:** Gjentar kode så lenge en betingelse er sann

Med disse grunnleggende byggeklossene kan du lage programmer som løser mange forskjellige oppgaver!`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-4-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et program som beregner summen av alle tall fra 1 til 100 ved hjelp av en løkke.',
        solution: `\`\`\`python
sum = 0
for i in range(1, 101):
    sum = sum + i
print("Summen er:", sum)
\`\`\`

Output: Summen er: 5050

Alternativt med while-løkke:
\`\`\`python
sum = 0
tall = 1
while tall <= 100:
    sum = sum + tall
    tall = tall + 1
print("Summen er:", sum)
\`\`\``,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Variabel', definition: 'Navngitt lagringsplass for data i et program.' },
    { term: 'Datatype', definition: 'Type data en variabel kan inneholde (heltall, desimaltall, tekst, etc.).' },
    { term: 'If-setning', definition: 'Kontrollstruktur som utfører kode basert på en betingelse.' },
    { term: 'Løkke', definition: 'Kontrollstruktur som gjentar kode flere ganger.' },
    { term: 'For-løkke', definition: 'Løkke som gjentar kode et bestemt antall ganger.' },
    { term: 'While-løkke', definition: 'Løkke som gjentar kode så lenge en betingelse er sann.' },
    { term: 'Algoritme', definition: 'Steg-for-steg prosedyre for å løse et problem.' },
  ],
};

// ============================================================================
// Kapittel 5: Nettverk og kommunikasjon
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_5: TextbookChapter = {
  id: 'elektro-data-vg1-5',
  courseId: 'elektro-data-vg1',
  chapterNumber: '5',
  title: 'Nettverk og kommunikasjon',
  description: 'Nettverksteknologi og datakommunikasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå grunnleggende nettverksteknologi',
    'kjenne til kommunikasjonsprotokoller',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-5-intro',
      type: 'text',
      content: `## Introduksjon til nettverk og kommunikasjon

Et nettverk er to eller flere enheter koblet sammen for å dele informasjon og ressurser. Nettverk finnes overalt i moderne samfunn – fra det lokale nettverket hjemme til det globale internett.

**Hvorfor nettverk?**
- Dele ressurser (skrivere, filer)
- Kommunikasjon (e-post, chat, videosamtaler)
- Samarbeid og informasjonsdeling
- Fjernstyring av systemer
- Overvåking og datainnsamling

I dette kapittelet lærer du om nettverkstyper, topologier, protokoller og trådløs kommunikasjon.`,
    },

    // BLOKK 1: Nettverkstyper
    {
      id: 'elektro-data-vg1-5-def-1',
      type: 'definition',
      title: 'PAN (Personal Area Network)',
      content: `Veldig kort rekkevidde, typisk Bluetooth-enheter rundt én person. Eksempel: Smartklokke koblet til mobiltelefon.`,
    },
    {
      id: 'elektro-data-vg1-5-def-2',
      type: 'definition',
      title: 'LAN (Local Area Network)',
      content: `Lokalt nettverk, f.eks. hjemme eller på en skole. Dekker vanligvis én bygning. Bruker ofte Ethernet-kabler eller Wi-Fi.`,
    },
    {
      id: 'elektro-data-vg1-5-def-3',
      type: 'definition',
      title: 'WAN (Wide Area Network)',
      content: `Stort nettverk over store geografiske avstander. Internett er det største WAN. Forbinder flere LAN på tvers av byer, land og kontinenter.`,
    },
    {
      id: 'elektro-data-vg1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom LAN og WAN?',
        solution: 'LAN (Local Area Network) er et lokalt nettverk som dekker et begrenset område som et hjem eller kontor. WAN (Wide Area Network) dekker store geografiske områder og kan forbinde flere LAN. Internett er det største eksemplet på WAN.',
      },
    },
    {
      id: 'elektro-data-vg1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket nettverkstype dekker vanligvis ett hjem eller én bygning?',
        options: [
          { id: 'a', text: 'PAN', correct: false },
          { id: 'b', text: 'LAN', correct: true },
          { id: 'c', text: 'WAN', correct: false },
          { id: 'd', text: 'MAN', correct: false },
        ],
        solution: 'LAN (Local Area Network) er et lokalt nettverk som typisk dekker ett hjem, ett kontor eller én bygning.',
      },
    },

    // BLOKK 2: Nettverkstopologier
    {
      id: 'elektro-data-vg1-5-def-4',
      type: 'definition',
      title: 'Nettverkstopologi',
      content: `Topologi beskriver hvordan enheter er koblet sammen i et nettverk. De vanligste topologiene er:

**Stjernetopologi:** Alle enheter kobles til en sentral enhet (switch/router). Hvis én enhet feiler, påvirker det ikke de andre.

**Busstopologi:** Alle enheter kobles til én felles kabel (buss). Hele nettverket feiler hvis kabelen ryker.

**Mesh-topologi:** Enheter har flere forbindelser til hverandre. Veldig pålitelig – alternative veier finnes hvis én kobling feiler.`,
    },
    {
      id: 'elektro-data-vg1-5-example-1',
      type: 'example',
      title: 'Sammenligne topologier',
      problem: 'Et firma skal sette opp et nettverk. Hvorfor bør de velge stjernetopologi fremfor busstopologi?',
      solution: `**Stjernetopologi fordeler:**
- Feil på én enhet påvirker ikke andre enheter
- Enkel å feilsøke (problemet isoleres til én kobling)
- Enkelt å legge til eller fjerne enheter
- Sentralt utstyr kan byttes eller oppgraderes

**Busstopologi ulemper:**
- Ett brudd på kabelen stopper hele nettverket
- Vanskelig å feilsøke
- Begrenset skalerbarhet

Konklusjon: Stjernetopologi er mer robust og fleksibel.`,
    },
    {
      id: 'elektro-data-vg1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar fordelen med stjernetopologi sammenlignet med busstopologi.',
        solution: 'I stjernetopologi påvirker ikke feil på én enhet de andre enhetene. I busstopologi vil et brudd på hovedkabelen ta ned hele nettverket. Stjernetopologi er også lettere å feilsøke og utvide.',
      },
    },

    // BLOKK 3: OSI-modellen og TCP/IP
    {
      id: 'elektro-data-vg1-5-def-5',
      type: 'definition',
      title: 'OSI-modellen',
      content: `OSI (Open Systems Interconnection) er en modell med 7 lag som beskriver hvordan data sendes over nettverk:

1. **Fysisk lag:** Elektriske signaler, kabler, radiobølger
2. **Datalinklag:** MAC-adresser, rammehåndtering
3. **Nettverkslag:** IP-adresser, ruting
4. **Transportlag:** TCP/UDP, pålitelighet
5. **Sesjonslag:** Oppretthold forbindelser
6. **Presentasjonslag:** Datakoding, kryptering
7. **Applikasjonslag:** HTTP, FTP, e-post`,
    },
    {
      id: 'elektro-data-vg1-5-def-6',
      type: 'definition',
      title: 'IP-adresse',
      content: `En IP-adresse er en unik identifikator for hver enhet på et nettverk, som en postadresse.

**IPv4:** 192.168.1.1 (4 tall fra 0-255, separert med punktum)
**IPv6:** 2001:0db8:85a3::8a2e:0370:7334 (lengre format, flere mulige adresser)

Vi trenger IP-adresser for at data skal finne riktig vei til riktig enhet.`,
    },
    {
      id: 'elektro-data-vg1-5-def-7',
      type: 'definition',
      title: 'TCP vs UDP',
      content: `**TCP (Transmission Control Protocol):**
- Pålitelig: Garanterer at alle data kommer frem
- Ordnet: Data kommer i riktig rekkefølge
- Tregere: Krever bekreftelse på levering
- Brukes til: Nettsider, e-post, filoverføring

**UDP (User Datagram Protocol):**
- Upålitelig: Ingen garanti for levering
- Raskere: Ingen ventetid på bekreftelser
- Brukes til: Streaming, spill, videosamtaler`,
    },
    {
      id: 'elektro-data-vg1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Hva er en IP-adresse, og hvorfor trenger vi den?',
        solution: 'En IP-adresse er en unik identifikator for hver enhet på et nettverk, som en postadresse. Vi trenger IP-adresser for at data skal finne riktig vei til riktig enhet. IPv4-format: 192.168.1.1',
      },
    },
    {
      id: 'elektro-data-vg1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken protokoll brukes typisk for videostreaming?',
        options: [
          { id: 'a', text: 'TCP', correct: false },
          { id: 'b', text: 'UDP', correct: true },
          { id: 'c', text: 'HTTP', correct: false },
          { id: 'd', text: 'FTP', correct: false },
        ],
        solution: 'UDP brukes for videostreaming fordi hastighet er viktigere enn perfekt levering. Hvis noen få datapakker mistes, merkes det knapt i videoen, men forsinkelser ville ødelegge opplevelsen.',
      },
    },

    // BLOKK 4: Trådløs kommunikasjon
    {
      id: 'elektro-data-vg1-5-def-8',
      type: 'definition',
      title: 'Wi-Fi (IEEE 802.11)',
      content: `Trådløst LAN. Standard for hjemme- og bedriftsnettverk.
- Frekvens: 2,4 GHz og 5 GHz
- Rekkevidde: 30-100m innendørs
- Hastighet: Opp til flere Gbps (Wi-Fi 6/7)`,
    },
    {
      id: 'elektro-data-vg1-5-def-9',
      type: 'definition',
      title: 'Bluetooth',
      content: `Kort-rekkvidde trådløs kommunikasjon.
- Rekkevidde: 10-100m
- Lavt strømforbruk
- Brukes til: headset, sensorer, smartklokker`,
    },
    {
      id: 'elektro-data-vg1-5-def-10',
      type: 'definition',
      title: 'Andre trådløse teknologier',
      content: `**Zigbee:** Lavt strømforbruk, mesh-nettverk for smarthus-enheter.

**LoRa/LoRaWAN:** Lang rekkevidde (2-15 km), lavt strømforbruk for IoT-sensorer.

**NFC (Near Field Communication):** Veldig kort rekkevidde (få cm) for kontaktløs betaling og adgangskontroll.`,
    },
    {
      id: 'elektro-data-vg1-5-example-2',
      type: 'example',
      title: 'Velge riktig trådløs teknologi',
      problem: 'Du skal koble trådløse hodetelefoner til telefonen. Hvilken teknologi er best egnet?',
      solution: `Bluetooth er best egnet fordi:
- Kort rekkevidde er nok (telefon og hodetelefoner er nære)
- Lavt strømforbruk forlenger batteritiden
- Standardisert og støttet av alle telefoner
- Enkel paring

Wi-Fi ville vært overkill (høyere strømforbruk, ikke nødvendig hastighet for lyd).
NFC har for kort rekkevidde (krever kontakt).`,
    },
    {
      id: 'elektro-data-vg1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Når vil du velge Bluetooth fremfor Wi-Fi?',
        solution: 'Bluetooth er bedre for kort-rekkvidde kommunikasjon mellom få enheter med lavt strømforbruk, som trådløse hodetelefoner eller sensorer. Wi-Fi er bedre for høyere hastigheter, flere enheter og tilkobling til internett.',
      },
    },
    {
      id: 'elektro-data-vg1-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar forskjellen mellom TCP og UDP.',
        solution: 'TCP (Transmission Control Protocol) garanterer at alle data kommer frem i riktig rekkefølge, men er tregere. UDP (User Datagram Protocol) sender data raskt uten garantier, og brukes til streaming og spill hvor hastighet er viktigere enn perfekt levering.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Nettverkstyper:**
- **PAN:** Personlig nettverk (Bluetooth-enheter)
- **LAN:** Lokalt nettverk (hjem, kontor)
- **WAN:** Stort nettverk over geografiske avstander (Internett)

**Topologier:**
- **Stjerne:** Sentral hub, robust mot enkeltfeil
- **Buss:** Enkel kabel, sårbar for brudd
- **Mesh:** Flere forbindelser, høy pålitelighet

**Protokoller:**
- **TCP:** Pålitelig, ordnet levering (nettsider, e-post)
- **UDP:** Rask, ingen garanti (streaming, spill)

**Trådløse teknologier:**
- **Wi-Fi:** Høy hastighet, LAN-dekkning
- **Bluetooth:** Kort rekkevidde, lavt strømforbruk
- **LoRa:** Lang rekkevidde, IoT-sensorer`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et landbruksforetak vil overvåke temperatur og fuktighet i ulike deler av en stor gård (flere kilometer). Hvilken trådløs teknologi bør de bruke, og hvorfor?',
        solution: `De bør bruke LoRa/LoRaWAN fordi:
- **Lang rekkevidde:** 2-15 km, dekker hele gården
- **Lavt strømforbruk:** Sensorene kan gå på batteri i flere år
- **Lav datarate er OK:** Temperatur og fuktighet krever ikke mye data
- **Mesh-nettverk:** Sensorene kan videresende data for bedre dekning

Wi-Fi har for kort rekkevidde og høyere strømforbruk.
Bluetooth har for kort rekkevidde.
Mobildata (4G/5G) er dyrt for mange sensorer.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'LAN', definition: 'Local Area Network - lokalt nettverk i begrenset område.' },
    { term: 'WAN', definition: 'Wide Area Network - nettverk over stort geografisk område.' },
    { term: 'IP-adresse', definition: 'Unik identifikator for en enhet på et nettverk.' },
    { term: 'TCP', definition: 'Transmission Control Protocol - pålitelig transportprotokoll.' },
    { term: 'UDP', definition: 'User Datagram Protocol - rask, upålitelig transportprotokoll.' },
    { term: 'Wi-Fi', definition: 'Trådløs nettverksteknologi for LAN (IEEE 802.11).' },
    { term: 'Bluetooth', definition: 'Trådløs kort-rekkvidde kommunikasjonsteknologi.' },
    { term: 'Topologi', definition: 'Måten enheter er koblet sammen i et nettverk.' },
  ],
};

// ============================================================================
// Kapittel 6: Elektrisk energi
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_6: TextbookChapter = {
  id: 'elektro-data-vg1-6',
  courseId: 'elektro-data-vg1',
  chapterNumber: '6',
  title: 'Elektrisk energi',
  description: 'Energiproduksjon, overføring og forbruk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå energiproduksjon og distribusjon',
    'beregne elektrisk effekt og energiforbruk',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-6-intro',
      type: 'text',
      content: `## Introduksjon til elektrisk energi

Elektrisk energi er grunnlaget for moderne samfunn. Fra lys og oppvarming til transport og industri – alt avhenger av pålitelig tilgang på elektrisitet. I dette kapittelet lærer du om hvordan elektrisk energi produseres, transporteres og forbrukes.

Norge har en unik posisjon med nesten 100% fornybar strømproduksjon fra vannkraft, og forståelse av energisystemer er viktig for alle som jobber med elektrofag.`,
    },

    // BLOKK 1: Energi og effekt
    {
      id: 'elektro-data-vg1-6-def-1',
      type: 'definition',
      title: 'Elektrisk energi',
      content: `Energi er evnen til å utføre arbeid. Elektrisk energi er energi transportert av elektrisk strøm.

**Måleenheter:**
- Joule (J): SI-enhet for energi
- Kilowattime (kWh): Praktisk enhet for strømforbruk

**Omregning:**
1 kWh = 3 600 000 J = 3,6 MJ

Kilowattimen er enheten vi ser på strømregningen.`,
    },
    {
      id: 'elektro-data-vg1-6-def-2',
      type: 'definition',
      title: 'Elektrisk effekt',
      content: `Effekt er hvor raskt energi omsettes. Effekt måles i watt (W).

**Formel:** P = U × I
- P = effekt i watt (W)
- U = spenning i volt (V)
- I = strøm i ampere (A)

**Energi = Effekt × Tid**
E = P × t

Enheter: kWh = kW × timer`,
    },
    {
      id: 'elektro-data-vg1-6-example-1',
      type: 'example',
      title: 'Beregne effekt og energi',
      problem: 'En stekeovn koblet til 230V trekker 10A. Hva er effekten? Hvor mye energi bruker den på 2 timer?',
      solution: `**Effekt:**
P = U × I = 230V × 10A = 2300W = 2,3 kW

**Energi:**
E = P × t = 2,3 kW × 2 h = 4,6 kWh

Stekeovnen har effekt 2,3 kW og bruker 4,6 kWh på 2 timer.`,
    },
    {
      id: 'elektro-data-vg1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'middels',
        task: 'En lyspære på 60W er på i 5 timer. Hvor mye energi bruker den i kWh?',
        solution: 'Energi = Effekt × Tid = 0,06 kW × 5 h = 0,3 kWh. Lyspæren bruker 0,3 kilowattimer.',
      },
    },
    {
      id: 'elektro-data-vg1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Beregn effekten til en vannkoker koblet til 230V som trekker 8A.',
        solution: 'P = U × I = 230V × 8A = 1840W = 1,84 kW. Vannkokeren har en effekt på 1840 watt.',
      },
    },
    {
      id: 'elektro-data-vg1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken enhet brukes typisk på strømregningen?',
        options: [
          { id: 'a', text: 'Watt (W)', correct: false },
          { id: 'b', text: 'Joule (J)', correct: false },
          { id: 'c', text: 'Kilowattime (kWh)', correct: true },
          { id: 'd', text: 'Ampere (A)', correct: false },
        ],
        solution: 'Kilowattime (kWh) er den praktiske energienheten som brukes på strømregningen. 1 kWh = 1000 watt i 1 time.',
      },
    },

    // BLOKK 2: Energiproduksjon
    {
      id: 'elektro-data-vg1-6-def-3',
      type: 'definition',
      title: 'Vannkraft',
      content: `Norges viktigste energikilde. Vann renner ned fra høye steder og driver turbiner som driver generatorer.
- Fornybar og bærekraftig
- Ingen CO2-utslipp under drift
- Fleksibel (kan reguleres etter behov)
- Ca. 90% av norsk strømproduksjon`,
    },
    {
      id: 'elektro-data-vg1-6-def-4',
      type: 'definition',
      title: 'Vindkraft og solenergi',
      content: `**Vindkraft:** Vinden driver turbinblader som driver generatorer.
- Fornybar, ingen utslipp
- Variabel produksjon (avhengig av vind)

**Solenergi:** Solceller konverterer sollys direkte til elektrisitet.
- Fornybar, ingen utslipp
- Variabel (avhengig av vær og tid på døgnet)
- Økende bruk på tak og i solparker`,
    },
    {
      id: 'elektro-data-vg1-6-def-5',
      type: 'definition',
      title: 'Fossil energi og kjernekraft',
      content: `**Fossil energi (kull, olje, gass):**
- Brennes for å varme vann til damp som driver turbiner
- Ikke fornybar, CO2-utslipp
- Brukes mye globalt, lite i Norge

**Kjernekraft:**
- Atomkjerner spaltes og frigjør varme
- Ingen CO2-utslipp, men radioaktivt avfall
- Høy effekt, brukes ikke i Norge`,
    },
    {
      id: 'elektro-data-vg1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Nevn to fordeler og en ulempe med vannkraft som energikilde.',
        solution: 'Fordeler: 1) Fornybar og bærekraftig, 2) Ingen CO2-utslipp under drift. Ulempe: Påvirker natur og vassdrag, dambygging kan ødelegge økosystemer.',
      },
    },

    // BLOKK 3: Kraftoverføring
    {
      id: 'elektro-data-vg1-6-def-6',
      type: 'definition',
      title: 'Transformatorer og høyspenning',
      content: `For å transportere kraft over lange avstander bruker vi høy spenning. Transformatorer øker eller senker spenning.

**Fordeler med høy spenning:**
- Lavere strøm ved samme effekt (P = U × I)
- Mindre tap i ledningene (tap = I² × R)
- Tynnere kabler kan brukes

**Spenningsnivåer:**
- Produksjon: 10-25 kV
- Overføring: 132-420 kV (høyspent)
- Distribusjon: 11-22 kV
- Husholdning: 230V (lavspenning)`,
    },
    {
      id: 'elektro-data-vg1-6-example-2',
      type: 'example',
      title: 'Hvorfor høyspenning reduserer tap',
      problem: 'Hvorfor bruker vi høy spenning for kraftoverføring?',
      solution: `La oss sammenligne overføring av 1 MW (1.000.000 W):

**Ved 1000 V:**
I = P/U = 1.000.000W / 1000V = 1000 A
Tap = I² × R = 1000² × R = 1.000.000 × R

**Ved 100.000 V:**
I = P/U = 1.000.000W / 100.000V = 10 A
Tap = I² × R = 10² × R = 100 × R

Tapet er 10.000 ganger mindre ved 100× høyere spenning!`,
    },
    {
      id: 'elektro-data-vg1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Hvorfor bruker vi høy spenning for å transportere kraft over lange avstander?',
        solution: 'Ved høy spenning kan vi bruke lavere strøm for samme effekt (P=U×I). Lavere strøm gir mindre tap i ledningene fordi tap = I²×R. Dermed sparer vi energi og kan bruke tynnere kabler.',
      },
    },
    {
      id: 'elektro-data-vg1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken spenning har vi i vanlige stikkontakter i Norge?',
        options: [
          { id: 'a', text: '110 V', correct: false },
          { id: 'b', text: '230 V', correct: true },
          { id: 'c', text: '400 V', correct: false },
          { id: 'd', text: '12 V', correct: false },
        ],
        solution: 'I Norge har vi 230V i vanlige stikkontakter. 400V brukes for trefase (f.eks. stekeovn), og 12V er typisk for batterier og bilsystemer.',
      },
    },

    // BLOKK 4: Energiforbruk
    {
      id: 'elektro-data-vg1-6-def-7',
      type: 'definition',
      title: 'Forbruk i husholdning',
      content: `**Typisk forbruk i en norsk husholdning:**
- Oppvarming: 40-50%
- Varmtvann: 15-20%
- Hvitevarer: 10-15%
- Elektriske apparater: 15-20%
- Belysning: 5-10%

**Forbruk av vanlige apparater:**
- LED-pære: 10W (0,01 kW)
- TV: 150W (0,15 kW)
- Stekeovn: 2000W (2 kW)
- Elbil-lading: 11 kW`,
    },
    {
      id: 'elektro-data-vg1-6-example-3',
      type: 'example',
      title: 'Beregne strømkostnad',
      problem: 'En TV på 150W går 4 timer daglig. Hva koster strømmen per måned med strømpris 1,50 kr/kWh?',
      solution: `**Per dag:**
E = 0,15 kW × 4 h = 0,6 kWh

**Per måned (30 dager):**
E = 0,6 kWh × 30 = 18 kWh

**Kostnad:**
Kostnad = 18 kWh × 1,50 kr/kWh = 27 kr/måned`,
    },
    {
      id: 'elektro-data-vg1-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'middels',
        task: 'En husholdning bruker 20 kWh på en dag. Strømprisen er 1,20 kr/kWh. Hva koster strømmen for denne dagen?',
        solution: 'Kostnad = 20 kWh × 1,20 kr/kWh = 24 kroner. Strømmen koster 24 kr for denne dagen.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Energi og effekt:**
- Effekt (P) = U × I, måles i watt (W)
- Energi (E) = P × t, måles i kilowattimer (kWh)
- 1 kWh = 3,6 MJ

**Energiproduksjon i Norge:**
- Vannkraft: ~90% av produksjonen, fornybar
- Vindkraft og sol: Økende andel
- Fossil og kjernekraft: Brukes ikke/lite i Norge

**Kraftoverføring:**
- Høy spenning gir lavere strøm og mindre tap
- Transformatorer endrer spenningsnivå
- Kraftnettet: Sentralnett → Regionalnett → Distribusjonsnett

**Energiforbruk:**
- Oppvarming utgjør størst andel
- Kostnad = Energi (kWh) × Pris (kr/kWh)`,
    },

    // SAMLEOPPGAVER
    {
      id: 'elektro-data-vg1-6-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En familie har følgende daglige strømforbruk: Kjøleskap (100W, 24 timer), TV (150W, 5 timer), vaskemaskin (2000W, 1 time), LED-lys (60W totalt, 6 timer). Beregn det totale daglige forbruket i kWh og månedlig kostnad med strømpris 1,50 kr/kWh.',
        solution: `**Daglig forbruk:**
- Kjøleskap: 0,1 kW × 24 h = 2,4 kWh
- TV: 0,15 kW × 5 h = 0,75 kWh
- Vaskemaskin: 2 kW × 1 h = 2 kWh
- LED-lys: 0,06 kW × 6 h = 0,36 kWh
- **Totalt per dag:** 2,4 + 0,75 + 2 + 0,36 = 5,51 kWh

**Månedlig forbruk (30 dager):**
5,51 kWh × 30 = 165,3 kWh

**Månedlig kostnad:**
165,3 kWh × 1,50 kr/kWh = 247,95 kr ≈ 248 kr/måned`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Effekt', definition: 'Hvor raskt energi omsettes, målt i watt (W).' },
    { term: 'Energi', definition: 'Evne til å utføre arbeid, målt i joule (J) eller kilowattimer (kWh).' },
    { term: 'Kilowattime (kWh)', definition: 'Praktisk energienhet: energi ved 1 kW effekt i 1 time.' },
    { term: 'Transformator', definition: 'Enhet som øker eller senker spenning i et kraftnett.' },
    { term: 'Vannkraft', definition: 'Elektrisitetsproduksjon ved å utnytte vannets fallhøyde.' },
    { term: 'Solcelle', definition: 'Enhet som konverterer sollys direkte til elektrisitet.' },
  ],
};

// ============================================================================
// Kapittel 7: Sikkerhet og HMS
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_7: TextbookChapter = {
  id: 'elektro-data-vg1-7',
  courseId: 'elektro-data-vg1',
  chapterNumber: '7',
  title: 'Sikkerhet og HMS',
  description: 'Sikker arbeidsmetode og HMS-rutiner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'arbeide sikkert med elektriske anlegg',
    'forstå HMS-regelverk',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-7-intro',
      type: 'text',
      content: `## Introduksjon til sikkerhet og HMS

HMS handler om å ivareta helse, miljø og sikkerhet på arbeidsplassen. I elektriske fag er dette spesielt viktig fordi feil kan ha alvorlige konsekvenser - fra personskader til brann og i verste fall død.

Arbeid med elektrisitet krever respekt, kunnskap og riktige rutiner. I dette kapittelet skal vi lære om:
- HMS-regelverket og ansvar
- Elektriske farer og hvordan unngå dem
- Sikre arbeidsmetoder
- Førstehjelp ved strømulykker`,
    },
    {
      id: 'elektro-data-vg1-7-def-1',
      type: 'definition',
      title: 'HMS - Helse, Miljø og Sikkerhet',
      content: `**HMS** er en forkortelse for Helse, Miljø og Sikkerhet. Det er et systematisk arbeid for å sikre trygge arbeidsforhold.

**Formål med HMS:**
- Forebygge ulykker og skader
- Sikre et godt arbeidsmiljø
- Beskytte miljøet
- Overholde lovverk
- Redusere kostnader ved skader og sykefravær`,
    },
    {
      id: 'elektro-data-vg1-7-text-regelverk',
      type: 'text',
      content: `## HMS-regelverket

I Norge er HMS regulert av flere lover og forskrifter:

**Arbeidsmiljøloven (AML)**
Hovedloven som stiller krav til arbeidsmiljø, organisering og ledelse.

**Internkontrollforskriften**
Krever at alle virksomheter har et system for å sikre at HMS-arbeidet fungerer.

**Forskrift om elektriske lavspenningsanlegg (FEL)**
Spesifikke krav til elektriske installasjoner og arbeid på disse.

**Ansvar i HMS:**
- **Arbeidsgiver** har hovedansvaret for HMS
- **Arbeidstaker** har plikt til å følge HMS-regler
- **Verneombud** representerer arbeidstakerne og skal sikre at HMS ivaretas`,
    },
    {
      id: 'elektro-data-vg1-7-def-2',
      type: 'definition',
      title: 'Strømgjennomgang',
      content: `**Strømgjennomgang** er når elektrisk strøm går gjennom kroppen. Dette kan føre til:
- **Muskelkramper** - kroppen kan ikke slippe tak
- **Hjertestans** - ved strøm gjennom hjertet
- **Forbrenninger** - både utvendig og innvendig
- **Åndedrettsstans** - lammelse av pustemuskulatur

**Farlige spenninger:**
- Over 50V AC eller 120V DC regnes som farlig
- 230V i stikkontakt kan være dødelig
- Fare avhenger av strømstyrke, varighet og strømvei`,
    },
    {
      id: 'elektro-data-vg1-7-text-stromvei',
      type: 'text',
      content: `## Strømvei og fare

Hvor farlig en strømgjennomgang er, avhenger av hvilken vei strømmen tar gjennom kroppen.

**Farligste strømveier:**
- **Hånd til hånd**: Strømmen går tvers gjennom brystkassen og hjertet
- **Hånd til fot**: Også gjennom hjerteområdet

**Minst farlig:**
- **Fot til fot**: Går ikke gjennom vitale organer

**Faktorer som påvirker farlighetsgrad:**
- **Fuktig hud** leder bedre enn tørr - øker faren
- **Metallgjenstander** (ringer, klokker) kan øke strømgjennomgang
- **Varighet** - jo lengre eksponering, jo farligere`,
    },
    {
      id: 'elektro-data-vg1-7-example-1',
      type: 'example',
      title: 'Eksempel: HMS i praksis',
      problem: 'En elektriker skal utføre arbeid i et sikringsskap. Hvilke HMS-tiltak bør iverksettes?',
      solution: `**Før arbeidet starter:**
1. Risikovurdering - identifiser farer (spenning, trange forhold)
2. Planlegg arbeidet og velg riktig verktøy
3. Sørg for at alt personlig verneutstyr er tilgjengelig

**Under arbeidet:**
1. Følg de 5 sikkerhetsreglene
2. Bruk isolert verktøy
3. Ha god belysning

**Etter arbeidet:**
1. Rydd arbeidsplassen
2. Dokumenter utført arbeid
3. Rapporter eventuelle avvik`,
    },
    {
      id: 'elektro-data-vg1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står HMS for?',
        options: [
          'Helse, Miljø og Sikkerhet',
          'Håndverk, Maskiner og Service',
          'Hovedverneombud, Miljøsjef og Sikkerhetsansvarlig',
          'Hjelp, Medisin og Støtte',
        ],
        solution: 'HMS står for Helse, Miljø og Sikkerhet.',
      },
    },
    {
      id: 'elektro-data-vg1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken strømvei gjennom kroppen er mest farlig?',
        options: [
          'Hånd til hånd',
          'Fot til fot',
          'Finger til finger på samme hånd',
          'Tå til hæl på samme fot',
        ],
        solution: 'Hånd til hånd er farligst fordi strømmen går tvers gjennom brystkassen og hjertet.',
      },
    },
    {
      id: 'elektro-data-vg1-7-def-3',
      type: 'definition',
      title: 'De 5 sikkerhetsreglene',
      content: `**De 5 sikkerhetsreglene** er grunnleggende prosedyrer ved arbeid på elektriske anlegg:

1. **Koble fra** - Bryt all spenning til anlegget
2. **Sikre mot innkobling** - Lås eller merk brytere
3. **Kontroller spenningsfriheten** - Bruk spenningssøker
4. **Jord og kortslut** - På høyspente anlegg
5. **Dekk til eller skjerm** - Nærliggende spenningssatte deler`,
    },
    {
      id: 'elektro-data-vg1-7-text-pvu',
      type: 'text',
      content: `## Personlig verneutstyr (PVU)

**Hjelm** - Beskytter mot fall og støt
**Vernesko** - Ståltå, sklisikre såler
**Vernebriller** - Ved boring, saging, sliping
**Hørselsvern** - Ved støyende arbeid (over 85 dB)
**Hansker** - Isolerende ved arbeid nær spenning
**Verneklær** - Flammehemmende ved risiko for lysbue`,
    },
    {
      id: 'elektro-data-vg1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Nevn de 5 sikkerhetsreglene ved arbeid på elektriske anlegg.',
        solution: '1. Koble fra all spenning, 2. Sikre mot innkobling, 3. Kontroller spenningsfriheten, 4. Jord og kortslut (høyspent), 5. Dekk til eller skjerm nærliggende spenningssatte deler.',
      },
    },
    {
      id: 'elektro-data-vg1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket verneutstyr bør brukes ved arbeid der det er risiko for lysbue?',
        options: [
          'Flammehemmende verneklær',
          'Refleksvest',
          'Vanlige arbeidsklær',
          'Regntøy',
        ],
        solution: 'Flammehemmende verneklær er nødvendig ved arbeid der det er risiko for lysbue.',
      },
    },
    {
      id: 'elektro-data-vg1-7-def-4',
      type: 'definition',
      title: 'HLR - Hjerte-lungeredning',
      content: `**HLR** (Hjerte-lungeredning) er førstehjelp ved hjertestans.

**Prosedyren:**
1. Sjekk bevissthet - rist forsiktig, spør høyt
2. Sjekk pust - lytt, kjenn, se (maks 10 sekunder)
3. Ring 113 - be om hjelp
4. Start brystkompresjoner - 30 kompresjoner
5. Gi innblåsninger - 2 innblåsninger
6. Fortsett 30:2 til hjelp kommer`,
    },
    {
      id: 'elektro-data-vg1-7-text-stromulykke',
      type: 'text',
      content: `## Førstehjelp ved strømulykke

**VIKTIG: Sikre situasjonen først!**
IKKE berør den skadelidte hvis de fortsatt er i kontakt med strømkilden.

**Fremgangsmåte:**
1. Koble fra strømmen - Slå av bryter eller trekk ut støpsel
2. Ring 113 - Opplys om strømulykke
3. Sjekk bevissthet og pust
4. Start HLR hvis personen ikke puster normalt
5. Bruk hjertestarter (AED) hvis tilgjengelig`,
    },
    {
      id: 'elektro-data-vg1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Hva skal du gjøre først hvis du finner en person som har fått strømsjokk og fortsatt er i kontakt med strømkilden?',
        solution: 'SIKRE SITUASJONEN! Aldri berør personen hvis de fortsatt er i kontakt med strømkilden. Koble fra strømmen først (bryter, sikring, trekk ut støpsel). Hvis dette ikke er mulig, bruk et ikke-ledende materiale til å flytte personen eller ledningen vekk.',
      },
    },
    {
      id: 'elektro-data-vg1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig forhold mellom brystkompresjoner og innblåsninger ved HLR?',
        options: [
          '30 kompresjoner, 2 innblåsninger',
          '15 kompresjoner, 2 innblåsninger',
          '30 kompresjoner, 5 innblåsninger',
          '10 kompresjoner, 1 innblåsning',
        ],
        solution: 'Ved HLR brukes forholdet 30:2 - det vil si 30 brystkompresjoner etterfulgt av 2 innblåsninger.',
      },
    },
    {
      id: 'elektro-data-vg1-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

**HMS-regelverket:**
- HMS står for Helse, Miljø og Sikkerhet
- Arbeidsgiver har hovedansvar, men alle har et ansvar

**Elektriske farer:**
- Strømgjennomgang kan gi muskelkramper, hjertestans og forbrenninger
- Over 50V AC regnes som farlig spenning
- Strøm fra hånd til hånd er farligst

**Sikre arbeidsmetoder:**
- De 5 sikkerhetsreglene må alltid følges
- Riktig verneutstyr er essensielt

**Førstehjelp:**
- Sikre situasjonen før du hjelper
- Ring 113 ved strømulykker
- Kunne HLR - 30:2`,
    },
    {
      id: 'elektro-data-vg1-7-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er lærling og skal utføre arbeid i et sikringsskap på en byggeplass. Beskriv hele prosessen fra planlegging til ferdig arbeid, med fokus på HMS og sikkerhet.',
        solution: 'Planlegging: Gjennomfør risikovurdering, planlegg arbeidet. Verneutstyr: Hjelm, vernesko, vernebriller, isolerende hansker. Gjennomføring: 1. Koble fra, 2. Sikre mot innkobling med lås og skilt, 3. Kontroller spenningsfriheten, 4. Jord og kortslut (hvis nødvendig), 5. Dekk til nærliggende spenningssatte deler. Etter arbeidet: Rydd, fjern lås og skilt, test installasjonen, dokumenter.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'HMS', definition: 'Helse, Miljø og Sikkerhet – systematisk arbeid for sikker arbeidsplass.' },
    { term: 'Strømgjennomgang', definition: 'Når elektrisk strøm går gjennom kroppen, kan gi alvorlige skader.' },
    { term: 'Personlig verneutstyr', definition: 'Utstyr som beskytte arbeidstaker mot farer (hjelm, sko, briller, etc.).' },
    { term: 'Spenningsfri', definition: 'Tilstand der ingen elektrisk spenning er til stede.' },
    { term: 'HLR', definition: 'Hjerte-lungeredning – førstehjelp ved hjertestans.' },
    { term: 'FEL', definition: 'Forskrift om Elektriske Lavspenningsanlegg – regelverk for el-installasjoner.' },
  ],
};

// ============================================================================
// Kapittel 8: Måleteknikk
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_8: TextbookChapter = {
  id: 'elektro-data-vg1-8',
  courseId: 'elektro-data-vg1',
  chapterNumber: '8',
  title: 'Måleteknikk',
  description: 'Bruk av måleinstrumenter og måling av elektriske størrelser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke måleinstrumenter korrekt',
    'måle elektriske størrelser',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-8-intro',
      type: 'text',
      content: `## Introduksjon til måleteknikk

Målinger er grunnleggende i elektroarbeid. Vi må kunne måle spenning, strøm, motstand og andre størrelser for å:
- Kontrollere at anlegg fungerer
- Finne feil
- Verifisere beregninger
- Dokumentere arbeid

I dette kapittelet lærer vi om måleinstrumenter og hvordan de brukes korrekt.`,
    },
    // BLOKK 1: Måleinstrumenter
    {
      id: 'elektro-data-vg1-8-def-1',
      type: 'definition',
      title: 'Multimeter',
      content: `**Multimeter** er det mest brukte måleinstrumentet i elektrofag. Det kan måle:
- **Spenning (volt)** - både AC og DC
- **Strøm (ampere)** - både AC og DC
- **Motstand (ohm)**
- Ofte også kontinuitet (piping ved gjennomgang)
- Noen kan måle kapasitans, frekvens, temperatur

**Digitale vs analoge:**
- Digitale: Viser tall på skjerm, mer nøyaktige
- Analoge: Viser på skala med nål, lettere å se trender`,
    },
    {
      id: 'elektro-data-vg1-8-def-2',
      type: 'definition',
      title: 'Klemmetang',
      content: `**Klemmetang** måler strøm uten å bryte kretsen. Den klemmes rundt en leder og måler magnetfeltet som strømmen skaper.

**Fordeler:**
- Raskere enn vanlig multimeter
- Tryggere - trenger ikke bryte kretsen
- Kan måle høye strømmer

**Ulemper:**
- Mindre nøyaktig på lave strømmer`,
    },
    {
      id: 'elektro-data-vg1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kan et multimeter måle?',
        options: [
          'Spenning, strøm og motstand',
          'Bare spenning',
          'Bare motstand',
          'Temperatur og luftfuktighet',
        ],
        solution: 'Et multimeter kan måle spenning, strøm og motstand. Noen avanserte modeller kan også måle kapasitans, frekvens og temperatur.',
      },
    },
    // BLOKK 2: Spenningmåling
    {
      id: 'elektro-data-vg1-8-text-spenning',
      type: 'text',
      content: `## Måling av spenning

Spenning måles **parallellt** med komponenten eller mellom to punkter.

**Fremgangsmåte:**
1. Velg riktig måleområde (hvis ikke autorange)
2. Koble rødt kabel til V/Ω-inngangen
3. Koble svart kabel til COM (common/masse)
4. Berør målepunktene med probene
5. Les av verdien

**Viktig:**
- Velg AC eller DC riktig
- Vær forsiktig med høye spenninger
- Sjekk at multimeteret tåler spenningen du måler`,
    },
    {
      id: 'elektro-data-vg1-8-example-1',
      type: 'example',
      title: 'Eksempel: Måle spenning over en motstand',
      problem: 'Du skal måle spenningen over en motstand i en krets. Beskriv fremgangsmåten.',
      solution: `1. Sett multimeteret på DC volt (V=) eller AC volt (V~) avhengig av kretsen
2. Koble rødt kabel til V/Ω-inngangen
3. Koble svart kabel til COM
4. Berør den ene enden av motstanden med rød probe
5. Berør den andre enden med svart probe
6. Les av spenningen på displayet

Husk: Multimeteret kobles parallellt med motstanden, ikke i serie!`,
    },
    {
      id: 'elektro-data-vg1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Hvordan kobles et multimeter for å måle spenning over en motstand?',
        solution: 'Multimeteret kobles parallellt med motstanden. Rødt kabel til V/Ω-inngangen, svart til COM. Probene berører hver sin side av motstanden. Velg riktig måleområde (AC eller DC volt).',
      },
    },
    // BLOKK 3: Strømmåling
    {
      id: 'elektro-data-vg1-8-text-strom',
      type: 'text',
      content: `## Måling av strøm

Strøm måles **i serie** med kretsen - multimeteret må være en del av strømveien.

**Fremgangsmåte med multimeter:**
1. Koble FRA spenningen
2. Bryt kretsen der du vil måle
3. Velg riktig måleområde (A eller mA)
4. Koble rødt kabel til A- eller mA-inngangen
5. Koble svart kabel til COM
6. Koble multimeteret i serie (i det brukne punktet)
7. Koble TIL spenningen
8. Les av verdien

**Med klemmetang:**
1. Velg AC eller DC
2. Klem rundt én leder
3. Les av verdien`,
    },
    {
      id: 'elektro-data-vg1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Du skal måle strømmen i en krets. Beskriv steg-for-steg hvordan du gjør det med et multimeter.',
        solution: '1. Koble fra spenningen, 2. Bryt kretsen der du vil måle, 3. Velg riktig måleområde (A eller mA), 4. Koble rødt kabel til A/mA-inngang og svart til COM, 5. Koble multimeteret i serie (i bruddet), 6. Koble til spenning, 7. Les av verdien.',
      },
    },
    {
      id: 'elektro-data-vg1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er fordelen med å bruke klemmetang fremfor vanlig multimeter for å måle strøm?',
        options: [
          'Du slipper å bryte kretsen',
          'Den er mer nøyaktig på lave strømmer',
          'Den er billigere',
          'Den kan måle motstand samtidig',
        ],
        solution: 'Klemmetang måler strøm uten å bryte kretsen - du klemmer bare rundt lederen. Dette er raskere og tryggere.',
      },
    },
    // BLOKK 4: Motstandsmåling
    {
      id: 'elektro-data-vg1-8-text-motstand',
      type: 'text',
      content: `## Måling av motstand

Motstand måles på en komponent som IKKE er koblet til en krets under spenning.

**Fremgangsmåte:**
1. Koble FRA all spenning
2. Løft ut komponenten eller koble den fra kretsen (minst én side)
3. Velg motstandsmåling (Ω)
4. Koble probene til komponentens ender
5. Les av verdien

**VIKTIG:**
- ALLTID koble fra spenning før motstandsmåling
- Motstandsmåling med spenning kan ødelegge multimeteret`,
    },
    {
      id: 'elektro-data-vg1-8-def-3',
      type: 'definition',
      title: 'Kontinuitetstest',
      content: `**Kontinuitetstest** sjekker om det er elektrisk gjennomgang mellom to punkter.

Multimeteret piper hvis motstanden er lav (vanligvis under 50Ω).

**Brukes til å:**
- Sjekke om kabler er hele
- Teste sikringer
- Finne kortslutninger
- Verifisere forbindelser`,
    },
    {
      id: 'elektro-data-vg1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva må du alltid gjøre før du måler motstand på en komponent?',
        solution: 'Du må alltid koble fra all spenning og helst løfte komponenten ut av kretsen (minst én side). Motstandsmåling med spenning til stede kan ødelegge multimeteret og gi feil målinger.',
      },
    },
    {
      id: 'elektro-data-vg1-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'middels',
        task: 'Hva er kontinuitetstest, og når brukes den?',
        solution: 'Kontinuitetstest sjekker om det er elektrisk gjennomgang mellom to punkter. Multimeteret piper hvis motstanden er lav. Brukes til å sjekke om kabler, sikringer og forbindelser er i orden, eller for å finne kortslutninger.',
      },
    },
    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Måleinstrumenter:**
- Multimeter måler spenning, strøm og motstand
- Klemmetang måler strøm uten å bryte kretsen

**Målemetoder:**
- Spenning måles parallellt med komponenten
- Strøm måles i serie (multimeteret må være del av strømveien)
- Motstand måles med spenning avslått

**Sikkerhet:**
- Velg riktig måleområde
- Koble alltid fra spenning før motstandsmåling
- Bruk riktig inngang (mA vs A) for strømmåling`,
    },
    // SAMLEOPPGAVE
    {
      id: 'elektro-data-vg1-8-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du får utlevert et multimeter og skal feilsøke en enkel krets med batteri, bryter, motstand og LED som ikke lyser. Beskriv systematisk hvordan du bruker multimeteret for å finne feilen.',
        solution: '1. Visuell inspeksjon - se etter løse forbindelser. 2. Mål batterispenningen - skal være ca. 9V (eller merket verdi). 3. Mål spenning over LED med bryter på - hvis 0V er det brudd før LED. 4. Mål kontinuitet på bryteren - skal pipe når bryteren er på. 5. Mål motstandsverdien (spenning av først) - skal matche merket verdi. 6. Test LED i en kjent krets. Systematisk tilnærming: Del kretsen i seksjoner og mål for å lokalisere feilen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Multimeter', definition: 'Måleinstrument som kan måle spenning, strøm og motstand.' },
    { term: 'Klemmetang', definition: 'Måleinstrument som måler strøm ved å klemmes rundt en leder.' },
    { term: 'Spenningsfall', definition: 'Spenning over en komponent i en krets.' },
    { term: 'Kontinuitet', definition: 'Elektrisk gjennomgang, lav motstand mellom to punkter.' },
    { term: 'Isolasjonsmotstand', definition: 'Motstand i isolasjonen til et elektrisk anlegg, måles med megger.' },
    { term: 'COM', definition: 'Common - felles referansepunkt (minus/masse) på multimeter.' },
  ],
};

// ============================================================================
// Kapittel 9: Automasjon
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_9: TextbookChapter = {
  id: 'elektro-data-vg1-9',
  courseId: 'elektro-data-vg1',
  chapterNumber: '9',
  title: 'Automasjon',
  description: 'Automatiserte systemer og styring.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå automatiserte systemer',
    'kjenne til sensorer og aktuatorer',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-9-intro',
      type: 'text',
      content: `## Introduksjon til automasjon

Automasjon er å få maskiner og systemer til å fungere automatisk, uten konstant menneskelig inngrep. Automatisering øker effektivitet, nøyaktighet og sikkerhet.

**Eksempler på automasjon:**
- Industri: Produksjonslinjer, roboter
- Hjemmet: Varmestyring, belysning, røykvarsler
- Bil: ABS-bremser, adaptiv cruisekontroll
- Bygg: Ventilasjonsanlegg, brannsikring`,
    },
    // BLOKK 1: Automatiseringssystem
    {
      id: 'elektro-data-vg1-9-def-1',
      type: 'definition',
      title: 'Automatiseringssystem',
      content: `Et **automatiseringssystem** består av tre hoveddeler:

**1. Sensorer (Input)** - Måler fysiske størrelser
**2. Styringsenhet (Prosessering)** - Tar beslutninger
**3. Aktuatorer (Output)** - Utfører fysisk arbeid

I et **closed-loop system** måler sensorer resultatet og styringen justerer kontinuerlig.`,
    },
    {
      id: 'elektro-data-vg1-9-example-1',
      type: 'example',
      title: 'Eksempel: Automatisk gatelys',
      problem: 'Beskriv hvordan et automatisk gatelys-system fungerer.',
      solution: `1. **Sensor:** Fotocelle måler lysintensiteten
2. **Styring:** Når lysnivået faller under terskel, sendes signal
3. **Aktuator:** Lyset (lampen) slås på
4. **Tilbakekobling:** Om morgenen øker lysintensiteten, fotocellen registrerer dette, og lyset slås av

Dette er et closed-loop system med automatisk tilpasning.`,
    },
    {
      id: 'elektro-data-vg1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-9-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nevn de tre hovedelementene i et automatiseringssystem og forklar deres rolle.',
        solution: '1. Sensorer (input) - måler fysiske størrelser, 2. Styringsenhet (prosessering) - behandler data og tar beslutninger, 3. Aktuatorer (output) - utfører fysisk arbeid.',
      },
    },
    {
      id: 'elektro-data-vg1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-9-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva kjennetegner et closed-loop styringssystem?',
        options: [
          'Sensorer måler resultatet og styringen justerer',
          'Styringen sender kommando uten tilbakemelding',
          'Systemet fungerer kun manuelt',
          'Det brukes bare i industrien',
        ],
        solution: 'Closed-loop betyr at sensorer måler resultatet og sender tilbake til styringsenheten som kan justere. Dette gir mer nøyaktig og selvkorrigerende styring.',
      },
    },
    // BLOKK 2: Sensorer
    {
      id: 'elektro-data-vg1-9-def-2',
      type: 'definition',
      title: 'Sensorer',
      content: `**Sensorer** er "sansene" til automatiseringssystemet. De måler fysiske størrelser og konverterer til elektriske signaler.

**Vanlige sensortyper:**
- **Temperatur:** NTC, PT100, termoelement
- **Lys:** Fotocelle, fotodiode
- **Bevegelse:** PIR, ultrasonisk
- **Trykk:** Piezosensor
- **Nærhet:** Induksjonssensor, kapasitiv`,
    },
    {
      id: 'elektro-data-vg1-9-text-sensorer',
      type: 'text',
      content: `## Sensortyper i detalj

**Temperatursensorer:**
- **NTC:** Motstand synker ved høyere temperatur
- **PT100:** Presisjonssensor, motstand øker med temperatur

**Bevegelsessensorer:**
- **PIR:** Passive Infrared - detekterer varmestråling
- **Ultrasonisk:** Sender lydbølger og måler tid tilbake

**Lyssensorer:**
- **Fotocelle:** Endrer motstand med lysstyrke
- Brukes i gatebelysning, kameraer`,
    },
    {
      id: 'elektro-data-vg1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-9-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken sensor brukes typisk for bevegelsesdeteksjon i alarmsystemer?',
        options: [
          'PIR-sensor',
          'NTC-sensor',
          'PT100',
          'Fotocelle',
        ],
        solution: 'PIR (Passive Infrared) sensor detekterer varmestråling fra bevegelse og brukes mye i alarmsystemer og automatisk belysning.',
      },
    },
    // BLOKK 3: Aktuatorer
    {
      id: 'elektro-data-vg1-9-def-3',
      type: 'definition',
      title: 'Aktuatorer',
      content: `**Aktuatorer** er "musklene" til automatiseringssystemet. De utfører fysisk arbeid basert på styresignaler.

**Typer aktuatorer:**
- **Elektromotorer:** DC, AC, servo, stepper
- **Ventiler:** Magnetventil, proporsjonalventil
- **Sylindere:** Pneumatisk, hydraulisk
- **Andre:** Varmeovner, pumper, lys, lydgivere`,
    },
    {
      id: 'elektro-data-vg1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-9-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Du skal lage et system som holder temperaturen i et rom konstant på 22 grader C. Hvilke komponenter trenger du?',
        solution: 'Sensor: Temperatursensor (NTC eller PT100). Styringsenhet: Mikrokontroller eller termostat. Aktuator: Varmeovn og eventuelt vifte/kjøling. Systemet måler temperatur kontinuerlig og slår på/av varmen for å holde 22 grader.',
      },
    },
    {
      id: 'elektro-data-vg1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-9-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken motor brukes når du trenger presis posisjonskontroll?',
        options: [
          'Servomotor',
          'DC-motor',
          'AC-motor',
          'Universalmotor',
        ],
        solution: 'Servomotor brukes for presis posisjonskontroll fordi den har innebygd tilbakekobling som gir nøyaktig styring av vinkel og posisjon.',
      },
    },
    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-9-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Automasjon:**
- Systemer som fungerer automatisk
- Øker effektivitet, nøyaktighet og sikkerhet

**Automatiseringssystem:**
- Sensor (input) - måler fysiske størrelser
- Styring (prosessering) - tar beslutninger
- Aktuator (output) - utfører handling

**Closed-loop vs Open-loop:**
- Closed-loop har tilbakekobling - mer nøyaktig
- Open-loop har ingen tilbakekobling`,
    },
    // SAMLEOPPGAVE
    {
      id: 'elektro-data-vg1-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-9-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Design et automatisk vanningsanlegg for en hage. Beskriv hvilke sensorer, styringsenhet og aktuatorer du vil bruke, og forklar hvordan systemet fungerer.',
        solution: 'Sensorer: Fuktighetssensor i jorda (måler vanninnhold), regnsensor (detekterer nedbør). Styringsenhet: Mikrokontroller (f.eks. Arduino) som behandler sensordata. Aktuatorer: Magnetventil for å åpne/stenge vanntilførsel, pumpe hvis nødvendig. Funksjon: Fuktighetssensoren måler jordas vanninnhold. Hvis for tørt og ingen regn detekteres, åpner styringsenheten magnetventilen. Når fuktighetsnivået er OK, stenges ventilen. Dette er et closed-loop system med automatisk tilpasning.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Automasjon', definition: 'Systemer som fungerer automatisk uten konstant menneskelig inngrep.' },
    { term: 'Sensor', definition: 'Enhet som måler fysiske størrelser og konverterer til elektriske signaler.' },
    { term: 'Aktuator', definition: 'Enhet som utfører fysisk arbeid basert på elektriske signaler.' },
    { term: 'Closed-loop', definition: 'Styringssystem med tilbakekobling fra sensorer.' },
    { term: 'PIR', definition: 'Passive Infrared - bevegelsessensor som detekterer varmestråling.' },
    { term: 'NTC', definition: 'Negative Temperature Coefficient - temperatursensor der motstand synker med temp.' },
  ],
};

// ============================================================================
// Kapittel 10: Styringssystemer
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_10: TextbookChapter = {
  id: 'elektro-data-vg1-10',
  courseId: 'elektro-data-vg1',
  chapterNumber: '10',
  title: 'Styringssystemer',
  description: 'Programmering og drift av styringssystemer.',
  estimatedMinutes: 65,
  competenceGoals: [
    'forstå styringssystemer',
    'programmere enkle styringssekvenser',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-10-intro',
      type: 'text',
      content: `## Introduksjon til styringssystemer

Et styringssystem er hjernen i automatisering. Det mottar informasjon fra sensorer, behandler denne informasjonen, og sender kommandoer til aktuatorer.

**Typer styringssystemer:**
- **Sekvensstyring:** Fast sekvens av handlinger
- **Betingelsesstyring:** Beslutninger basert på betingelser
- **Tidsstyring:** Aktiverer på bestemte tider
- **Reguleringsstyring:** Holder verdi konstant`,
    },
    {
      id: 'elektro-data-vg1-10-def-1',
      type: 'definition',
      title: 'PLS - Programmerbar Logisk Styring',
      content: `## PLS - Programmerbar Logisk Styring

PLS (på engelsk PLC – Programmable Logic Controller) er en industriell datamaskin designet for å styre maskiner og prosesser.

**Fordeler med PLS:**
- Robust og pålitelig
- Tåler støv, fukt, temperatur
- Lett å omprogrammere
- Mange inn- og utganger
- Standardisert programmering

**Oppbygging:**
- CPU: Behandler programmet
- Input-moduler: Kobles til sensorer, brytere
- Output-moduler: Styrer aktuatorer, motorer, lys
- Strømforsyning: Leverer spenning
- Programmeringsenhet: PC eller panel

**Programmeringsspråk:**
- Ladder Logic (Stige-diagram): Grafisk, ligner rele-logikk
- Function Block Diagram (FBD): Blokkdiagram
- Structured Text (ST): Tekstbasert, ligner programmering
- Sequential Function Chart (SFC): Flytdiagram

Ladder Logic er mest brukt i Norge.`,
    },
    // BLOKK 2: Ladder Logic
    {
      id: 'elektro-data-vg1-10-def-2',
      type: 'definition',
      title: 'Ladder Logic (Stigediagram)',
      content: `**Ladder Logic** er et grafisk programmeringsspråk for PLS basert på elektriske relédiagrammer. Programmet ser ut som en stige med "trinn".

**Grunnleggende elementer:**

**Kontakter (Inputs)**
- Normally Open (NO): —| |— Leder når aktiv
- Normally Closed (NC): —|/|— Leder når ikke aktiv

**Spoler (Outputs)**
- Output: —( )— Aktiverer utgang
- Set: —(S)— Setter utgang på (holder)
- Reset: —(R)— Nullstiller utgang

**Timere og tellere:**
- TON (Timer On Delay): Forsinkelse før aktivering
- TOF (Timer Off Delay): Forsinkelse før deaktivering
- CTU (Count Up): Teller opp
- CTD (Count Down): Teller ned`,
    },
    {
      id: 'elektro-data-vg1-10-example-1',
      type: 'example',
      title: 'Eksempel: Enkel lysbryter i Ladder Logic',
      problem: 'Tegn et Ladder Logic-diagram for en enkel lysbryter der lys L1 tennes når bryter S1 trykkes.',
      solution: `**Diagram:**
\`\`\`
|—| S1 |—————————( L1 )|
\`\`\`

**Forklaring:** Når S1 (bryter) er trykket, går "strøm" gjennom kretsen og L1 (lys) aktiveres. Når bryteren slippes, stopper strømmen og lyset slukkes.`,
    },
    {
      id: 'elektro-data-vg1-10-example-2',
      type: 'example',
      title: 'Eksempel: Start/Stopp med selvholding',
      problem: 'Design et Ladder Logic-diagram for en motor som startes med en startknapp og stoppes med en stoppknapp. Motoren skal holde seg aktivert etter at startknappen slippes.',
      solution: `**Diagram:**
\`\`\`
|—| Start |—|/| Stopp |—| Motor |—( Motor )|
|            |—| Motor |——————————|
\`\`\`

**Forklaring:**
1. Start-knappen aktiverer motoren første gang
2. Motor-kontakten i parallell holder kretsen aktiv (selvholding)
3. Stopp-knappen (NC) bryter kretsen og stopper motoren
4. Dette er et klassisk start/stopp-mønster brukt i industrien`,
    },
    {
      id: 'elektro-data-vg1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-10-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr en "Normally Open" (NO) kontakt i Ladder Logic?',
        options: [
          { id: 'a', text: 'Kontakten leder strøm hele tiden', isCorrect: false },
          { id: 'b', text: 'Kontakten leder kun når den er aktivert', isCorrect: true },
          { id: 'c', text: 'Kontakten leder kun når den IKKE er aktivert', isCorrect: false },
          { id: 'd', text: 'Kontakten er alltid åpen og leder aldri', isCorrect: false },
        ],
        solution: 'En Normally Open (NO) kontakt er normalt åpen (leder ikke) og lukkes (leder) kun når den aktiveres. Dette er som en vanlig trykknapp.',
      },
    },
    {
      id: 'elektro-data-vg1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-10-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hva dette Ladder Logic-programmet gjør:\n|—| S1 |—| S2 |—( L1 )|',
        hints: ['Se på hvordan kontaktene er koblet', 'Tenk på logiske operasjoner'],
        solution: 'Dette er en AND-operasjon (serie-kobling). Lyset L1 tennes bare når BÅDE S1 OG S2 er aktivert samtidig. Begge brytere må være trykket for at strømmen skal gå gjennom.',
      },
    },
    // BLOKK 3: Mikrokontrollere
    {
      id: 'elektro-data-vg1-10-def-3',
      type: 'definition',
      title: 'Mikrokontroller',
      content: `**Mikrokontrollere** er små datamaskiner på én brikke, designet for å styre elektroniske systemer. De er hjernen i mange hverdagsprodukter som vaskemaskiner, biler og smart-hjem.

**Arduino** - Populær mikrokontroller-plattform for læring og prototyping:
- Lett å bruke
- Mange sensorer og moduler tilgjengelig
- Programmeres i C/C++
- Stor community og support
- Billig

**Raspberry Pi** - Mer kraftig "minicomputer":
- Kjører Linux operativsystem
- Kan programmeres i Python, C++, etc.
- Nettverkstilkobling, HDMI-utgang
- Brukes til mer komplekse prosjekter

**Forskjell Arduino vs Raspberry Pi:**
- Arduino: Sanntidsstyring, lavt strømforbruk, enkle oppgaver
- Raspberry Pi: Datakraft, multimedia, komplekse oppgaver`,
    },
    {
      id: 'elektro-data-vg1-10-example-3',
      type: 'example',
      title: 'Eksempel: Blink LED med Arduino',
      problem: 'Skriv et Arduino-program som blinker en LED koblet til pin 13 med 1 sekunds intervall.',
      solution: `**Kode:**
\`\`\`cpp
// Blink LED på pin 13
void setup() {
  pinMode(13, OUTPUT);  // Sett pin 13 som utgang
}

void loop() {
  digitalWrite(13, HIGH);  // Slå på LED
  delay(1000);             // Vent 1 sekund
  digitalWrite(13, LOW);   // Slå av LED
  delay(1000);             // Vent 1 sekund
}
\`\`\`

**Forklaring:**
- \`setup()\` kjører én gang ved oppstart - her setter vi pin 13 som utgang
- \`loop()\` kjører kontinuerlig - her veksler vi LED på/av
- \`delay(1000)\` pauser programmet i 1000 millisekunder (1 sekund)`,
    },
    {
      id: 'elektro-data-vg1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-10-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom sekvensstyring og reguleringsstyring?',
        options: [
          { id: 'a', text: 'Sekvensstyring er raskere enn reguleringsstyring', isCorrect: false },
          { id: 'b', text: 'Sekvensstyring følger en fast rekkefølge, reguleringsstyring holder en verdi konstant', isCorrect: true },
          { id: 'c', text: 'Reguleringsstyring bruker bare digitale sensorer', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
        ],
        solution: 'Sekvensstyring utfører handlinger i en bestemt rekkefølge (f.eks. vaskemaskinsyklus). Reguleringsstyring måler og justerer kontinuerlig for å holde en verdi konstant (f.eks. termostat).',
      },
    },
    {
      id: 'elektro-data-vg1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-10-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Når bør du velge Arduino fremfor Raspberry Pi i et prosjekt?',
        options: [
          { id: 'a', text: 'Når du trenger mye datakraft og multimedia', isCorrect: false },
          { id: 'b', text: 'Når du skal kjøre Linux og webservere', isCorrect: false },
          { id: 'c', text: 'Når du trenger sanntidsstyring og lavt strømforbruk', isCorrect: true },
          { id: 'd', text: 'Når du trenger nettverkstilkobling', isCorrect: false },
        ],
        solution: 'Arduino er best for enkle sanntidsstyringsoppgaver med lavt strømforbruk, som robotbiler, temperaturloggere eller lyskontroll. Raspberry Pi er bedre for kompleks databehandling, multimedia og nettverkstunge oppgaver.',
      },
    },
    {
      id: 'elektro-data-vg1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-10-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv et enkelt Arduino-program som leser en bryter på pin 2 og slår på en LED på pin 13 når bryteren trykkes.',
        hints: ['Bruk pinMode() i setup()', 'Bruk digitalRead() for å lese bryteren', 'Bruk digitalWrite() for å styre LED-en'],
        solution: `void setup() {
  pinMode(2, INPUT);   // Bryter som input
  pinMode(13, OUTPUT); // LED som output
}

void loop() {
  if (digitalRead(2) == HIGH) {
    digitalWrite(13, HIGH);  // LED på
  } else {
    digitalWrite(13, LOW);   // LED av
  }
}`,
      },
    },
    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-10-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Styringssystemer** er hjernen i automatisering - de mottar sensordata, behandler det, og sender kommandoer
- **PLS** (Programmerbar Logisk Styring) er den vanligste industrielle styringsenheten
- **Ladder Logic** er et visuelt programmeringsspråk basert på elektriske relédiagrammer
- **Mikrokontrollere** (Arduino, Raspberry Pi) brukes til prototyping og læring

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| PLS | Industriell styringsdatamaskin |
| Ladder Logic | Grafisk programmeringsspråk for PLS |
| Selvholding | Utgang holder seg aktiv etter start |
| Mikrokontroller | Liten datamaskin på én brikke |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-10-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Design et komplett styringssystem for en automatisk garasjeport. Beskriv hvilke sensorer og aktuatorer du ville brukt, og tegn et enkelt Ladder Logic-diagram for åpne/lukke-funksjonen.',
        hints: ['Tenk på sikkerhet', 'Hva skjer hvis noe er i veien?', 'Bruk selvholding'],
        solution: `**Sensorer:**
- Trykkbryter for åpne/lukke
- Endestoppbrytere (åpen/lukket posisjon)
- Fotoelektrisk sensor (hindring)

**Aktuatorer:**
- Motor (åpne/lukke)
- Lampe (advarsel)

**Ladder Logic (forenklet):**
|—| Åpne |—|/| Stopp |—|/| Hindring |—( Motor_opp )|
|—| Lukke |—|/| Stopp |—|/| Hindring |—( Motor_ned )|

Sikkerhet prioriteres: Hindringssensor stopper all bevegelse.`,
      },
    },
    {
      id: 'elektro-data-vg1-10-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-10-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign PLS og mikrokontrollere (Arduino). Når vil du velge PLS fremfor Arduino i et industriprosjekt? Gi minst tre argumenter.',
        solution: `**Velg PLS når:**
1. **Robusthet:** PLS er designet for industrielle miljøer med støv, vibrasjon, temperaturvariasjoner
2. **Pålitelighet:** Industriell kvalitet med lang levetid og minimal nedetid
3. **Standardisering:** Standardiserte programmeringsspråk (IEC 61131-3) gjør det lett å finne kompetanse
4. **Sikkerhet:** Ofte sertifisert for sikkerhetskritiske applikasjoner
5. **I/O kapasitet:** Mange inn- og utganger med industrielle signalnivåer

**Velg Arduino når:**
- Prototyping og læring
- Små prosjekter med begrenset budsjett
- Ikke-kritiske applikasjoner`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'PLS', definition: 'Programmerbar Logisk Styring – industriell styringsdatamaskin.' },
    { term: 'Ladder Logic', definition: 'Grafisk programmeringsspråk for PLS basert på rele-logikk.' },
    { term: 'Sekvensstyring', definition: 'Styring som utfører handlinger i en fast rekkefølge.' },
    { term: 'Mikrokontroller', definition: 'Liten datamaskin på én brikke for å styre elektroniske systemer.' },
    { term: 'Arduino', definition: 'Populær mikrokontroller-plattform for læring og prototyping.' },
    { term: 'Selvholding', definition: 'Teknikk der en utgang holder seg selv aktiv etter at startbetingelsen forsvinner.' },
  ],
};

// ============================================================================
// Kapittel 11: Energiforsyning
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_11: TextbookChapter = {
  id: 'elektro-data-vg1-11',
  courseId: 'elektro-data-vg1',
  chapterNumber: '11',
  title: 'Energiforsyning',
  description: 'Fornybar energi og energiforvaltning.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå fornybare energikilder',
    'kjenne til energisparing og bærekraft',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-11-intro',
      type: 'text',
      content: `## Introduksjon til energiforsyning

Energi er grunnlaget for moderne samfunn. Hvordan vi produserer, distribuerer og bruker energi har store konsekvenser for miljøet og økonomien.

I dette kapittelet skal du lære:
- Hvordan fornybare energikilder fungerer
- Hvorfor og hvordan vi kan spare energi
- Hvordan smarte systemer optimaliserer energibruk
- Hva energimerking betyr for deg som forbruker`,
    },
    // BLOKK 1: Fornybare energikilder
    {
      id: 'elektro-data-vg1-11-def-1',
      type: 'definition',
      title: 'Fornybar energi',
      content: `**Fornybar energi** er energi fra kilder som fornyes naturlig og ikke går tomme. Disse energikildene er bærekraftige og har lave eller ingen klimagassutslipp.

**Vannkraft** - Vann driver turbiner som produserer elektrisitet:
- 95% av norsk strømproduksjon
- Kan reguleres etter behov
- Lange levetider (50-100 år)

**Vindkraft** - Vind driver rotorblader koblet til generator:
- Variabel produksjon (avhengig av vind)
- Økende andel i Norge og Europa

**Solenergi** - Sollys konverteres til elektrisitet i solceller:
- Effektivitet 15-22%
- Kan monteres på tak

**Bioenergi** - Forbrenning av biomasse:
- CO2-nøytral ved bærekraftig drift
- Brukes mye til oppvarming`,
    },
    {
      id: 'elektro-data-vg1-11-example-1',
      type: 'example',
      title: 'Eksempel: Norges energimiks',
      problem: 'Forklar hvorfor Norge har en unik posisjon innen fornybar energi sammenlignet med andre land.',
      solution: `**Norges posisjon:**
- 95% av strømproduksjonen kommer fra vannkraft
- Stor magasinkapasitet i fjell gir regulerbar kraft
- Kan eksportere overskudd til Europa via kabler
- Kombinerer nå med vindkraft på land og til havs

**Fordel:** Norge kan fungere som "Europas batteri" ved å lagre vannkraft når sol/vind produserer mye, og eksportere når andre land trenger strøm.`,
    },
    {
      id: 'elektro-data-vg1-11-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-11-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken energikilde står for ca. 95% av norsk strømproduksjon?',
        options: [
          { id: 'a', text: 'Vindkraft', isCorrect: false },
          { id: 'b', text: 'Vannkraft', isCorrect: true },
          { id: 'c', text: 'Solenergi', isCorrect: false },
          { id: 'd', text: 'Kjernekraft', isCorrect: false },
        ],
        solution: 'Vannkraft står for ca. 95% av norsk strømproduksjon. Norge har en unik posisjon med store vannressurser og fjell som gir mulighet for magasinering.',
      },
    },
    // BLOKK 2: Energisparing
    {
      id: 'elektro-data-vg1-11-def-2',
      type: 'definition',
      title: 'Energisparing',
      content: `**Energisparing** handler om å bruke mindre energi for samme nytte. Det mest bærekraftige er energien vi ikke bruker.

**Hvorfor spare energi?**
- Redusere klimagassutslipp
- Spare penger på strømregningen
- Redusere press på kraftnettet
- Bevare ressurser for fremtiden

**Praktiske tiltak:**
- **Belysning:** LED-pærer bruker 80% mindre enn glødelamper
- **Oppvarming:** Senk temperaturen 1°C = spar 5% energi
- **Hvitevarer:** Velg A-merket utstyr
- **Elektronikk:** Slå av helt, unngå standby`,
    },
    {
      id: 'elektro-data-vg1-11-example-2',
      type: 'example',
      title: 'Eksempel: Energibesparelse med LED',
      problem: 'En husholdning har 20 glødelamper på 60W som brukes 4 timer daglig. Hvor mye energi og penger sparer de ved å bytte til LED-pærer på 10W? Strømpris: 1,50 kr/kWh.',
      solution: `**Beregning:**

**Glødelamper:**
- Effekt: 20 × 60W = 1200W = 1,2 kW
- Daglig forbruk: 1,2 kW × 4 timer = 4,8 kWh/dag
- Årlig forbruk: 4,8 × 365 = 1752 kWh/år
- Kostnad: 1752 × 1,50 kr = 2628 kr/år

**LED-pærer:**
- Effekt: 20 × 10W = 200W = 0,2 kW
- Daglig forbruk: 0,2 kW × 4 timer = 0,8 kWh/dag
- Årlig forbruk: 0,8 × 365 = 292 kWh/år
- Kostnad: 292 × 1,50 kr = 438 kr/år

**Besparelse: 2628 - 438 = 2190 kr/år (83% reduksjon)**`,
    },
    {
      id: 'elektro-data-vg1-11-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-11-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Du har et kjøleskap merket D (300 kWh/år) og vurderer å kjøpe nytt merket A (120 kWh/år). Strømprisen er 1,20 kr/kWh. a) Hvor mye sparer du per år? b) Hvis det nye kjøleskapet koster 5000 kr, hvor lang tid tar det før du har spart inn prisen?',
        hints: ['Beregn differansen i forbruk først', 'Gang med strømpris for årlig besparelse', 'Del pris på årlig besparelse for inntjeningstid'],
        solution: `a) Besparelse: 300 - 120 = 180 kWh/år
   Kostnad spart: 180 × 1,20 kr = 216 kr/år

b) Inntjeningstid: 5000 kr ÷ 216 kr/år = 23,1 år

(I praksis må man også vurdere levetid og om gammelt kjøleskap fortsatt fungerer)`,
      },
    },
    // BLOKK 3: Smarte energisystemer
    {
      id: 'elektro-data-vg1-11-def-3',
      type: 'definition',
      title: 'Smarte energisystemer',
      content: `**Smarte energisystemer** bruker teknologi for å optimalisere energibruk automatisk.

**Smarthus** - Automatisert styring av energibruk:
- Intelligente termostater som lærer dine vaner
- Tidstyrt belysning
- Energimonitorering i sanntid
- Fjernkontroll via app

**AMS (Avanserte Måle- og Styringssystemer):**
- Smart strømmåler i alle norske hjem
- Måler forbruk time for time
- Sender data automatisk til nettselskap
- Muliggjør timepris

**Energilagring:**
- Batterier lagrer energi for senere bruk
- Utjevner variasjon i fornybar produksjon
- Kan gi backup ved strømbrudd`,
    },
    {
      id: 'elektro-data-vg1-11-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-11-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er formålet med AMS (Avanserte Måle- og Styringssystemer)?',
        options: [
          { id: 'a', text: 'Å produsere mer strøm', isCorrect: false },
          { id: 'b', text: 'Å måle forbruk time for time og sende data automatisk', isCorrect: true },
          { id: 'c', text: 'Å erstatte sikringsskap', isCorrect: false },
          { id: 'd', text: 'Å lagre strøm i batterier', isCorrect: false },
        ],
        solution: 'AMS måler strømforbruket time for time og sender data automatisk til nettselskapet. Dette gir deg innsikt i ditt eget forbruk og muliggjør timespris.',
      },
    },
    {
      id: 'elektro-data-vg1-11-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-11-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Forklar hvordan et batterisystem i et smarthus kan redusere strømregningen.',
        hints: ['Tenk på varierende strømpriser gjennom døgnet', 'Når er det billig å lade?', 'Når er det dyrt å bruke strøm?'],
        solution: 'Batteriet lader når strømprisen er lav (f.eks. om natten eller når solcellene produserer overskudd). Når prisen er høy (f.eks. morgen og ettermiddag), bruker man strøm fra batteriet i stedet for å kjøpe fra nettet. Dette kalles "peak shaving" og kan spare betydelige beløp med timepris.',
      },
    },
    // BLOKK 4: Energimerking
    {
      id: 'elektro-data-vg1-11-def-4',
      type: 'definition',
      title: 'Energimerking',
      content: `**Energimerking** er en merkeordning som viser hvor energieffektivt et produkt er.

**EU-energimerke** - Skala fra A til G:
- **A-C (grønn):** Svært energieffektiv
- **D-E (gul):** Middels
- **F-G (rød):** Dårlig energieffektivitet

**Produkter som merkes:**
- Kjøleskap og frysere
- Vaskemaskiner og tørketromler
- Oppvaskmaskiner
- TV og skjermer
- Lyspærer
- Varmepumper

**Bygg må også energimerkes** med energiattest (A-G skala).`,
    },
    {
      id: 'elektro-data-vg1-11-example-3',
      type: 'example',
      title: 'Eksempel: Sammenligne energimerking',
      problem: 'Du skal velge mellom to kjøleskap: Modell X (energimerke B, 100 kWh/år, pris 8000 kr) og Modell Y (energimerke D, 200 kWh/år, pris 5000 kr). Strømpris er 1,50 kr/kWh. Hvilket er mest økonomisk over 10 år?',
      solution: `**Modell X (B-merket):**
- Kjøpspris: 8000 kr
- Strømkostnad: 100 kWh × 1,50 kr × 10 år = 1500 kr
- Totalkostnad: 8000 + 1500 = **9500 kr**

**Modell Y (D-merket):**
- Kjøpspris: 5000 kr
- Strømkostnad: 200 kWh × 1,50 kr × 10 år = 3000 kr
- Totalkostnad: 5000 + 3000 = **8000 kr**

**Konklusjon:** D-merket kjøleskap er billigst over 10 år i dette tilfellet. Men med høyere strømpriser eller lengre levetid kan B-merket bli billigere.`,
    },
    {
      id: 'elektro-data-vg1-11-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-11-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket energimerke er best?',
        options: [
          { id: 'a', text: 'G', isCorrect: false },
          { id: 'b', text: 'D', isCorrect: false },
          { id: 'c', text: 'A', isCorrect: true },
          { id: 'd', text: 'F', isCorrect: false },
        ],
        solution: 'A er det beste energimerket og indikerer høyest energieffektivitet. G er dårligst. Jo nærmere A, jo mindre energi bruker produktet for samme ytelse.',
      },
    },
    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-11-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Fornybare energikilder** som vannkraft, vindkraft, solenergi og bioenergi fornyes naturlig
- **Norge** er verdensledende på vannkraft (95% av strømproduksjonen)
- **Energisparing** gir både økonomiske og miljømessige gevinster
- **LED-pærer** bruker 80% mindre energi enn glødelamper
- **Smarte energisystemer** (AMS, smarthus, batterier) optimaliserer forbruket
- **Energimerking** (A-G) hjelper deg velge effektive produkter

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Fornybar energi | Energi fra kilder som fornyes naturlig |
| AMS | Smart strømmåler som måler forbruk per time |
| Energimerking | A-G skala som viser energieffektivitet |
| Smarthus | Automatisert styring av energibruk |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-11-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-11-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en energiplan for et tenkt smarthus. Beskriv: a) Hvilke fornybare energikilder du ville installert, b) Hvilke smarte systemer for å optimalisere forbruk, c) Hvordan du ville brukt batterier til å spare penger med timepris.',
        solution: `**Forslag til energiplan:**

**a) Fornybare energikilder:**
- Solceller på taket (sørvendt, 6 kW)
- Eventuelt liten vindturbin hvis lokale forhold tillater

**b) Smarte systemer:**
- Intelligent termostat (Ecobee/Nest) som lærer rutiner
- Automatisk belysning med bevegelsessensorer
- Energimonitor som viser forbruk i sanntid
- Tidsur på varmtvannsbereder

**c) Batteristrategi:**
- 10 kWh hjemmebatteri (f.eks. Tesla Powerwall)
- Lade om natten når strømpris er lav (typisk 22-06)
- Lade fra solceller midt på dagen
- Bruke batteristrøm morgen (07-09) og ettermiddag (16-20) når prisen er høy
- Kan spare 30-50% på strømregningen`,
      },
    },
    {
      id: 'elektro-data-vg1-11-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-11-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper med å bygge ut mer vindkraft i Norge. Ta med både tekniske, økonomiske og miljømessige perspektiver.',
        solution: `**Fordeler:**
- Ingen drivstoffkostnader eller utslipp under drift
- Økende effektivitet og synkende priser
- Kan bygges raskt sammenlignet med vannkraft
- Skaper arbeidsplasser
- Diversifiserer energimiksen

**Ulemper:**
- Visuell påvirkning på landskap
- Støy for naboer
- Risiko for fugler og flaggermus
- Variabel produksjon (avhengig av vind)
- Krever backup eller lagring
- Konflikt med reindrift og friluftsliv

**Balansert konklusjon:**
Vindkraft kan være et viktig supplement til vannkraft, men utbygging må skje med grundig lokal forankring og hensyn til natur og lokalsamfunn.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fornybar energi', definition: 'Energi fra kilder som fornyes naturlig og ikke går tomme.' },
    { term: 'Solcelle', definition: 'Enhet som konverterer sollys direkte til elektrisitet (fotovoltaisk effekt).' },
    { term: 'Energimerking', definition: 'Merkeordning som viser hvor energieffektivt et produkt er (A-G skala).' },
    { term: 'AMS', definition: 'Avanserte Måle- og Styringssystemer – smart strømmåler som måler forbruk per time.' },
    { term: 'Smarthus', definition: 'Bolig med automatiserte systemer for å optimalisere energibruk og komfort.' },
    { term: 'Energilagring', definition: 'Lagring av elektrisk energi i batterier for senere bruk.' },
    { term: 'Mikronett', definition: 'Lokalt energinett med lokal produksjon og lagring.' },
  ],
};

// ============================================================================
// Kapittel 12: Dokumentasjon og tegning
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_12: TextbookChapter = {
  id: 'elektro-data-vg1-12',
  courseId: 'elektro-data-vg1',
  chapterNumber: '12',
  title: 'Dokumentasjon og tegning',
  description: 'Teknisk dokumentasjon og elektroniske kretsskjemaer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese og tegne kretsskjemaer',
    'dokumentere teknisk arbeid',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-12-intro',
      type: 'text',
      content: `## Introduksjon til dokumentasjon og tegning

Kretsskjemaer og teknisk dokumentasjon er språket som elektronikkingeniører kommuniserer med. Uten god dokumentasjon kan ingen andre forstå, vedlikeholde eller videreutvikle det du har laget.

I dette kapittelet skal du lære:
- Standardiserte symboler for elektroniske komponenter
- Hvordan tegne profesjonelle kretsskjemaer
- Prosessen fra kretsskjema til ferdig PCB
- Hva som inngår i god teknisk dokumentasjon`,
    },
    // BLOKK 1: Kretsskjemaer og symboler
    {
      id: 'elektro-data-vg1-12-def-1',
      type: 'definition',
      title: 'Kretsskjema',
      content: `**Kretsskjema** er en tegning som viser hvordan elektriske komponenter er koblet sammen, uten å vise fysisk plassering.

**Hvorfor bruke kretsskjemaer?**
- Universelt forståelig (internasjonale standarder)
- Enklere enn fotografier
- Viser funksjonen tydelig
- Nødvendig for feilsøking og PCB-design

**Grunnleggende symboler:**

**Strømkilder:**
- Batteri: To streker (lang = +, kort = -)
- Jord/masse: Tre horisontale streker

**Passive komponenter:**
- Motstand: Sikksakk-linje eller rektangel
- Kondensator: To parallelle streker
- Spole: Spirallinje

**Halvledere:**
- Diode: Trekant med strek
- LED: Diode med piler ut
- Transistor: Sirkel med tre ben`,
    },
    {
      id: 'elektro-data-vg1-12-example-1',
      type: 'example',
      title: 'Eksempel: Les et kretsskjema',
      problem: 'Hva gjør denne kretsen?\n\n[Batteri]---[R1 1kΩ]---[LED]---[Jord]',
      solution: `**Analyse:**
Dette er en enkel LED-krets:
1. **Batteri** gir spenning (f.eks. 9V)
2. **R1 (1kΩ motstand)** begrenser strømmen
3. **LED** lyser når strøm går gjennom
4. **Jord** er returveien for strømmen

**Strømberegning (Ohms lov):**
Anta 9V batteri, LED tar 2V, da er spenning over motstand: 9V - 2V = 7V
Strøm: I = U/R = 7V / 1000Ω = 7mA

Dette er trygg strøm for en LED.`,
    },
    {
      id: 'elektro-data-vg1-12-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-12-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan tegnes symbolet for en motstand i et kretsskjema?',
        options: [
          { id: 'a', text: 'To parallelle streker', isCorrect: false },
          { id: 'b', text: 'Sikksakk-linje eller rektangel', isCorrect: true },
          { id: 'c', text: 'Trekant med strek', isCorrect: false },
          { id: 'd', text: 'Sirkel med M', isCorrect: false },
        ],
        solution: 'Motstand tegnes som en sikksakk-linje (amerikansk standard) eller et rektangel (europeisk standard). Begge er akseptert.',
      },
    },
    {
      id: 'elektro-data-vg1-12-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-12-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'middels',
        task: 'Hvorfor tegner vi kretsskjemaer fremfor å bare ta bilde av den fysiske kretsen?',
        solution: 'Kretsskjemaer viser funksjonen klart og tydelig uten rot fra fysisk plassering, kabler og komponenter. De bruker standardiserte symboler som alle forstår internasjonalt, viser tilkoblinger tydeligere, og er enklere å bruke for feilsøking, analyse og PCB-design.',
      },
    },
    // BLOKK 2: Tegning av kretsskjemaer
    {
      id: 'elektro-data-vg1-12-def-2',
      type: 'definition',
      title: 'Regler for kretsskjemaer',
      content: `**Regler for gode kretsskjemaer:**

**1. Klarhet:** Tegn oversiktlig med horisontale/vertikale linjer

**2. Standarder:**
- Positive spenninger øverst
- Jord/masse nederst
- Signal går fra venstre til høyre

**3. Merking:**
- Komponentnavn: R1, C1, Q1, osv.
- Verdier: 1kΩ, 100µF, osv.

**4. Forbindelser:**
- Punkt der linjer møtes = koblet sammen
- Kryssende linjer uten punkt = ikke koblet

**Verktøy:**
- KiCad (gratis, open source)
- Fritzing (visuelt, bra for Arduino)
- EasyEDA (nettbasert)`,
    },
    {
      id: 'elektro-data-vg1-12-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-12-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I et kretsskjema, hva betyr det når to linjer krysser hverandre UTEN et punkt i krysningen?',
        options: [
          { id: 'a', text: 'De er koblet sammen', isCorrect: false },
          { id: 'b', text: 'De er IKKE koblet sammen', isCorrect: true },
          { id: 'c', text: 'Det er en feil i tegningen', isCorrect: false },
          { id: 'd', text: 'Det betyr jord', isCorrect: false },
        ],
        solution: 'Kryssende linjer uten punkt betyr at ledningene ikke er koblet - de krysser bare visuelt. Et punkt (dot) i krysningen indikerer at de ER koblet sammen.',
      },
    },
    // BLOKK 3: PCB-design
    {
      id: 'elektro-data-vg1-12-def-3',
      type: 'definition',
      title: 'PCB (Printed Circuit Board)',
      content: `**PCB** (Printed Circuit Board) er et trykt kretskort med kobberstriper som forbinder komponenter.

**Fra kretsskjema til PCB:**

1. **Kretsskjema** - Tegn elektrisk funksjon
2. **Footprints** - Velg fysisk størrelse for hver komponent
3. **Layout** - Plasser komponenter på kortet
4. **Ruting** - Trekk kobberstriper mellom komponenter
5. **DRC** - Design Rule Check (sjekk for feil)
6. **Produksjon** - Generer Gerber-filer, send til fabrikk

**PCB-typer:**
- Single-layer: Ett kobberlag
- Double-layer: Topp og bunn
- Multi-layer: 4, 6, 8+ lag`,
    },
    {
      id: 'elektro-data-vg1-12-example-2',
      type: 'example',
      title: 'Eksempel: Komponeplassering på PCB',
      problem: 'Du skal plassere en spenningsregulator (som blir varm), en sensitiv analog krets, og USB-kontakt på et PCB. Hvordan bør du tenke?',
      solution: `**Plasseringsstrategi:**

1. **Spenningsregulator (varm):**
   - Plasser i kanten av kortet
   - Ikke ved temperaturfølsomme komponenter
   - Vurder kjøleribbe

2. **Analog krets (støyfølsom):**
   - Hold borte fra digital elektronikk
   - Korte signalveier
   - Egen jord-plan hvis mulig

3. **USB-kontakt:**
   - I kanten for tilgjengelighet
   - Nær prosessor/IC som styrer USB
   - Korteste mulige signalveier

**Generell regel:** Tenk på varme, støy og tilgjengelighet.`,
    },
    {
      id: 'elektro-data-vg1-12-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-12-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: 'Hva er forskjellen på et kretsskjema og et PCB-layout?',
        hints: ['Tenk på hva hver tegning viser', 'Hvilken viser funksjon? Hvilken viser fysisk plassering?'],
        solution: 'Kretsskjemaet viser den elektriske funksjonen - hvordan komponenter er koblet sammen logisk. PCB-layoutet viser den fysiske plasseringen av komponenter på kretskortet og hvordan kobberstriper forbinder dem. Samme kretsskjema kan ha mange forskjellige layout-løsninger.',
      },
    },
    {
      id: 'elektro-data-vg1-12-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-12-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'middels',
        task: 'Nevn tre ting du bør tenke på når du plasserer komponenter på et PCB.',
        solution: '1) Varme: Hold varme komponenter borte fra temperaturfølsomme deler. 2) Støy: Separer digital og analog elektronikk. 3) Tilgjengelighet: Plasser kontakter, brytere og justeringspunkter synlig og tilgjengelig. Bonus: Strømforsyning nær innganger, korte signalveier.',
      },
    },
    // BLOKK 4: Dokumentasjon
    {
      id: 'elektro-data-vg1-12-def-4',
      type: 'definition',
      title: 'BOM (Bill of Materials)',
      content: `**BOM** (Bill of Materials) er en deliste som inneholder alle komponenter i et prosjekt.

**En BOM inneholder:**
- Referanse (R1, C2, U1, osv.)
- Verdi (1kΩ, 100µF, etc.)
- Type/beskrivelse
- Antall
- Leverandør og bestillingsnummer
- Pris

**Annen viktig dokumentasjon:**
- Kretsskjema
- Monteringsanvisning
- Testprosedyre
- Brukermanual

**Verktøy:**
- Excel/Google Sheets (BOM)
- Git/GitHub (versjonskontroll)
- Word/Docs (rapporter)`,
    },
    {
      id: 'elektro-data-vg1-12-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-12-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en BOM?',
        options: [
          { id: 'a', text: 'En type kretskort', isCorrect: false },
          { id: 'b', text: 'En deliste med alle komponenter i et prosjekt', isCorrect: true },
          { id: 'c', text: 'Et program for å tegne kretsskjemaer', isCorrect: false },
          { id: 'd', text: 'En type motstand', isCorrect: false },
        ],
        solution: 'BOM (Bill of Materials) er en deliste som inneholder alle komponenter med verdier, typer, antall og leverandører. Den er viktig for bestilling, reproduksjon og kostnadsberegning.',
      },
    },
    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-12-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kretsskjemaer** viser hvordan komponenter er koblet sammen med standardiserte symboler
- **PCB-layout** viser fysisk plassering av komponenter på kretskortet
- **BOM** (Bill of Materials) er en komplett liste over alle komponenter
- God **dokumentasjon** er avgjørende for vedlikehold og samarbeid

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kretsskjema | Tegning av elektriske koblinger |
| PCB | Printed Circuit Board - trykt kretskort |
| BOM | Bill of Materials - deliste |
| Footprint | Fysisk størrelse/form for komponent |
| Gerber-fil | Filformat for PCB-produksjon |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'elektro-data-vg1-12-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-12-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du har laget en enkel Arduino-basert temperatursensor. Lag en komplett dokumentasjonspakke som inneholder: a) En kort beskrivelse av hva produktet gjør, b) En BOM med minst 5 komponenter, c) En enkel testprosedyre.',
        solution: `**a) Produktbeskrivelse:**
Arduino-basert temperatursensor som måler romtemperatur og viser resultatet på et LCD-display. Oppdateres hvert 2. sekund.

**b) BOM:**
| Ref | Komponent | Verdi | Antall |
|-----|-----------|-------|--------|
| U1 | Arduino Nano | - | 1 |
| U2 | DS18B20 | Temp sensor | 1 |
| R1 | Motstand | 4,7kΩ | 1 |
| LCD1 | LCD Display | 16x2 | 1 |
| J1 | USB-kabel | Mini-B | 1 |

**c) Testprosedyre:**
1. Koble til USB - sjekk at Arduino lyser
2. Vent 5 sekunder for oppstart
3. Les temperatur på display
4. Sammenlign med referansetermometer (±1°C akseptert)
5. Hold finger på sensor - temperatur skal øke`,
      },
    },
    {
      id: 'elektro-data-vg1-12-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-12-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter hvorfor versjonskontroll (f.eks. Git) er viktig for elektronikkprosjekter. Gi minst tre konkrete fordeler.',
        solution: `**Fordeler med versjonskontroll:**

1. **Historikk:** Du kan gå tilbake til tidligere versjoner hvis noe går galt. Hvis ny PCB-versjon har feil, kan du raskt finne hva som ble endret.

2. **Samarbeid:** Flere kan jobbe på samme prosjekt uten å overskrive hverandres arbeid. Endringer kan slås sammen systematisk.

3. **Dokumentasjon:** Hver endring har en beskrivelse (commit message) som forklarer hvorfor endringen ble gjort.

4. **Backup:** Koden/filene lagres på flere steder (lokal maskin + server), så du mister ikke alt hvis datamaskinen krasjer.

5. **Eksperimentering:** Du kan lage "branches" for å teste nye ideer uten å påvirke hovedprosjektet.`,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kretsskjema', definition: 'Tegning som viser hvordan elektriske komponenter er koblet sammen.' },
    { term: 'PCB', definition: 'Printed Circuit Board – trykt kretskort med kobberstriper.' },
    { term: 'BOM', definition: 'Bill of Materials – deliste med alle komponenter i et prosjekt.' },
    { term: 'Footprint', definition: 'Fysisk størrelse og ben-arrangement for en komponent på PCB.' },
    { term: 'Gerber-fil', definition: 'Filformat som beskriver PCB-layout for produksjon.' },
    { term: 'DRC', definition: 'Design Rule Check – automatisk sjekk av PCB-design for feil.' },
  ],
};

// ============================================================================
// Kapittel 13: Baerekraft og teknologi
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_13: TextbookChapter = {
  id: 'elektro-data-vg1-13',
  courseId: 'elektro-data-vg1',
  chapterNumber: '13',
  title: 'Baerekraft og teknologi',
  description: 'Baerekraftig bruk av elektronikk og energi.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstaa baerekraftig bruk av teknologi',
    'kjenne til miljoutfordringer i elektronikk',
  ],
  content: [
    {
      id: 'elektro-data-vg1-13-intro',
      type: 'text',
      content: `## Introduksjon til baerekraft og teknologi

Moderne teknologi har revolusjonert livene vaare, men den kommer ogsaa med betydelige miljoutfordringer. I dette kapittelet skal vi se paa hvordan elektronikk paavirker miljoet, og hva vi kan gjore for aa bruke teknologi paa en mer baerekraftig maate.

**Viktige spoersmaal vi skal besvare:**
- Hva er e-avfall og hvorfor er det et problem?
- Hva er sirkulaer oekonomi og hvordan kan den hjelpe?
- Hva betyr "rett til reparasjon" og hvorfor er det viktig?
- Hvilke valg kan vi ta for aa redusere miljopaavirkningen?`,
    },
    {
      id: 'elektro-data-vg1-13-def-1',
      type: 'definition',
      title: 'E-avfall (elektronisk avfall)',
      content: `**E-avfall** er kassert elektronikk - alt fra mobiltelefoner og datamaskiner til kjoleskap og lyspaerer.

**Fakta om e-avfall:**
- 50 millioner tonn e-avfall globalt per aar
- Raskest voksende avfallstype i verden
- Bare 20% resirkuleres korrekt
- Inneholder giftige stoffer: bly, kvikksolv, kadmium
- Inneholder verdifulle metaller: gull, solv, kobber, palladium

**Problemene:**
| Problem | Konsekvens |
|---------|------------|
| Deponering | Giftstoffer lekker til jord og grunnvann |
| Forbrenning | Frigir giftige gasser til atmosfaeren |
| Ulovlig eksport | Sendes til land med daarlige arbeidsforhold |
| Ressursslosing | Verdifulle materialer gaar tapt |`,
    },
    {
      id: 'elektro-data-vg1-13-example-1',
      type: 'example',
      title: 'Eksempel: Ressurser i en smarttelefon',
      problem: 'Hva skjer med ressursene i en smarttelefon som kastes i vanlig soppel?',
      solution: `En gjennomsnittlig smarttelefon inneholder over 60 forskjellige grunnstoff:
- **Gull (0,034g):** Korrosjonsbestandig, brukes i kretskort
- **Solv (0,35g):** Leder elektrisitet godt
- **Kobber (15g):** Hovedleder i kabler
- **Kobolt (6g):** Brukes i batteri
- **Sjeldne jordarter:** Neodym, dysprosium, terbium

**Hvis telefonen kastes:**
1. Paa deponi: Stoffene lekker ut over tid og forurenser
2. Ved forbrenning: Metalldamper slippes ut i luften
3. I naturen: Tar 1000+ aar aa bryte ned

**Hvis telefonen resirkuleres:**
- 90% av materialene kan gjenvinnes
- Gull fra 1 million telefoner = 34 kg rent gull
- Sparer enorme mengder energi sammenlignet med utvinning`,
    },
    {
      id: 'elektro-data-vg1-13-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-13-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor stor andel av verdens e-avfall blir resirkulert korrekt?',
        options: ['Ca. 5%', 'Ca. 20%', 'Ca. 50%', 'Ca. 80%'],
        answer: 1,
        solution: 'Bare ca. 20% av e-avfall i verden resirkuleres korrekt. Resten havner paa deponier, blir forbrent, eller eksporteres til land med daarlige miljostandarder.',
      },
    },
    {
      id: 'elektro-data-vg1-13-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-13-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor e-avfall er et miljoproblem. Nevn minst tre forskjellige problemer.',
        hints: ['Tenk paa hva e-avfall inneholder', 'Tenk paa hva som skjer naar det kastes'],
        solution: 'E-avfall er et miljoproblem fordi: 1) Det inneholder giftige stoffer som bly, kvikksolv og kadmium som kan lekke ut og forurense jord og grunnvann. 2) Ved forbrenning frigis giftige gasser til atmosfaeren. 3) Verdifulle metaller som gull, solv og kobber gaar tapt i stedet for aa resirkuleres. 4) Ulovlig eksport forer til at fattige land maa haandtere vaar forurensning under daarlige arbeidsforhold.',
      },
    },
    {
      id: 'elektro-data-vg1-13-def-2',
      type: 'definition',
      title: 'Sirkulaer oekonomi',
      content: `**Sirkulaer oekonomi** er en okonomisk modell der produkter og materialer holdes i bruk lengst mulig.

**Lineaer oekonomi (tradisjonell):**
Ta - Produser - Bruk - Kast

**Sirkulaer oekonomi:**
Design - Produser - Bruk - Reparer - Gjenbruk - Resirkler - (tilbake til produksjon)

**De tre prinsippene:**

**1. Design for lang levetid**
- Modulaert design (komponenter kan byttes ut)
- Robuste materialer
- Tilgang til reservedeler og dokumentasjon

**2. Maksimer brukstiden**
- Reparasjon fremfor utskifting
- Oppgradering av enkeltkomponenter
- Videresalg og gjenbruk

**3. Effektiv gjenvinning**
- Design for enkel demontering
- Bruk resirkulerbare materialer
- Unngaa giftige stoffer som hindrer gjenvinning`,
    },
    {
      id: 'elektro-data-vg1-13-example-2',
      type: 'example',
      title: 'Eksempel: Fairphone - sirkulaer elektronikk i praksis',
      problem: 'Hvordan kan en telefon designes for sirkulaer oekonomi?',
      solution: `**Fairphone** er et nederlandsk selskap som lager modulaere telefoner:

**Design for reparasjon:**
- Telefonen kan aapnes med en vanlig skrutrekker
- Komponenter som batteri, skjerm og kamera er moduler
- Reservedeler selges til forbrukere
- Reparasjonsveiledninger er gratis tilgjengelig

**Resultat:**
- Gjennomsnittlig levetid oker fra 2-3 aar til 5+ aar
- Brukere kan selv bytte batteri paa 5 minutter
- Skjermbytte tar 10 minutter hjemme
- Oppgradering av kamera uten aa bytte hele telefonen

**Andre eksempler:**
- **Framework Laptop:** Modulaer laptop med utbyttbare deler
- **iFixit:** Reparasjonsmanualer for tusenvis av produkter
- **Restarters:** Frivillige som hjelper folk aa reparere`,
    },
    {
      id: 'elektro-data-vg1-13-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-13-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom lineaer og sirkulaer oekonomi?',
        options: [
          'Sirkulaer oekonomi bruker mer energi',
          'Lineaer oekonomi fokuserer paa gjenbruk',
          'Sirkulaer oekonomi holder produkter i bruk lengst mulig',
          'Det er ingen forskjell',
        ],
        answer: 2,
        solution: 'Hovedforskjellen er at sirkulaer oekonomi fokuserer paa aa holde produkter og materialer i bruk lengst mulig gjennom reparasjon, gjenbruk og resirkulering, mens lineaer oekonomi folger en "ta-bruk-kast"-modell.',
      },
    },
    {
      id: 'elektro-data-vg1-13-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-13-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de tre hovedprinsippene i sirkulaer oekonomi og gi et eksempel paa hvert.',
        solution: '1) Design for lang levetid: Produkter designes med moduler som kan byttes ut, f.eks. Fairphone der batteriet enkelt kan skiftes. 2) Maksimer brukstiden: Reparere og oppgradere fremfor aa kaste, f.eks. bytte ut en odelagt skjerm i stedet for aa kjope ny telefon. 3) Effektiv gjenvinning: Bruke resirkulerbare materialer og designe for demontering, f.eks. unngaa aa lime komponenter fast slik at de kan skilles ved resirkulering.',
      },
    },
    {
      id: 'elektro-data-vg1-13-def-3',
      type: 'definition',
      title: 'Right to Repair (Rett til reparasjon)',
      content: `**Right to Repair** er en internasjonal bevegelse for forbrukernes rett til aa reparere produktene de eier.

**Utfordringer i dag:**
- Produkter designes for aa vaere vanskelige aa reparere
- Limte enheter (kan ikke aapnes uten aa odelegge)
- Proprietaere skruer (krever spesialverktoy)
- Ingen tilgang til reservedeler
- Ingen reparasjonsmanualer
- Programvarelaasing (produktet nekter aa fungere med tredjepartsdeler)

**EU-lovgivning (2021+):**
| Krav | Beskrivelse |
|------|-------------|
| Reservedeler | Maa tilbys i 7-10 aar etter kjop |
| Dokumentasjon | Reparasjonsveiledninger maa vaere tilgjengelige |
| Reparerbarhetsindeks | Produkter maa merkes med hvor enkle de er aa reparere |
| Design | Produkter skal kunne demonteres med standard verktoy |`,
    },
    {
      id: 'elektro-data-vg1-13-example-3',
      type: 'example',
      title: 'Eksempel: Reparerbarhetsindeks',
      problem: 'Hva er en reparerbarhetsindeks og hvordan brukes den?',
      solution: `**Reparerbarhetsindeks** er et poengsystem fra 0-10 som viser hvor enkelt et produkt er aa reparere.

**Frankrike innforte dette i 2021:**
- Alle nye smarttelefoner, laptoper og vaskemaskiner maa merkes
- Poeng beregnes basert paa:
  - Tilgang til dokumentasjon (20%)
  - Mulighet for demontering (20%)
  - Tilgang til reservedeler (20%)
  - Pris paa reservedeler (20%)
  - Produktspesifikke kriterier (20%)

**Eksempel paa skaar:**
- iPhone 13: 6,0/10
- Fairphone 4: 9,3/10
- Samsung Galaxy S21: 5,5/10

**Effekt:**
- Forbrukere kan ta informerte valg
- Produsenter motiveres til aa forbedre reparerbarhet
- Hoyere skaar kan brukes i markedsforing`,
    },
    {
      id: 'elektro-data-vg1-13-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-13-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse er IKKE en vanlig hindring for reparasjon av moderne elektronikk?',
        options: [
          'Limte batterier som ikke kan tas ut',
          'Proprietaere skruer som krever spesialverktoy',
          'Standardiserte komponenter',
          'Programvarelaasing som nekter tredjepartsdeler',
        ],
        answer: 2,
        solution: 'Standardiserte komponenter er faktisk det motsatte av en hindring - det gjor reparasjon enklere. De andre alternativene (limte batterier, proprietaere skruer, og programvarelaasing) er alle vanlige metoder produsenter bruker som gjor reparasjon vanskelig.',
      },
    },
    {
      id: 'elektro-data-vg1-13-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-13-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva "Right to Repair" betyr og hvorfor det er viktig for miljoet.',
        hints: ['Tenk paa sammenhengen mellom reparasjon og e-avfall'],
        solution: 'Right to Repair er forbrukernes rett til aa reparere produktene de eier selv eller hos uavhengige reparatorer. Det er viktig for miljoet fordi: 1) Reparasjon forlenger produktets levetid, noe som reduserer e-avfall. 2) Faerre nye produkter trenger aa produseres, som sparer ressurser og energi. 3) Verdifulle materialer holdes i bruk lenger i stedet for aa kastes. 4) Det skaper jobber i reparasjonsbransjen lokalt.',
      },
    },
    {
      id: 'elektro-data-vg1-13-def-4',
      type: 'definition',
      title: 'Baerekraftige valg ved elektronikk',
      content: `**For kjop - Still deg disse sporsmaalene:**
- Trenger jeg virkelig dette produktet?
- Kan jeg reparere det jeg allerede har?
- Kan jeg kjope brukt? (Finn.no, gjenbruksbutikker)
- Er produktet reparerbart? (Sjekk reparerbarhetsindeks)

**Ved kjop - Se etter:**
- God reparerbarhetsindeks (6+/10)
- Lang garantitid
- Tilgjengelige reservedeler
- God energimerking (A+++)
- Produsent med baerekraftfokus

**I bruk - Ta vare paa produktene:**
- Bruk beskyttelse (deksel, skjermfilm)
- Oppdater programvare regelmessig
- Unngaa ekstreme temperaturer
- Slaa av naar ikke i bruk

**Etter bruk - Riktig avhending:**
- Reparer hvis mulig
- Selg eller gi bort hvis funksjonelt
- Lever til godkjent e-returpunkt
- ALDRI kast elektronikk i vanlig soppel`,
    },
    {
      id: 'elektro-data-vg1-13-example-4',
      type: 'example',
      title: 'Eksempel: Livslopet til en laptop',
      problem: 'Hvordan kan man forlenge levetiden til en laptop maksimalt?',
      solution: `**Situasjon:** Du har en 4 aar gammel laptop som begynner aa bli treg.

**Tradisjonell tilnaerming:** Kjop ny laptop (miljokostnad: ca. 400 kg CO2)

**Baerekraftig tilnaerming:**

**Steg 1: Diagnose**
- Er det maskinvare eller programvare som er problemet?
- Ofte er det bare at SSD er full eller RAM er for lite

**Steg 2: Oppgradering**
- Bytt HDD til SSD: 500 kr, 30 min jobb, foles som ny maskin
- Oppgrader RAM: 400 kr, 15 min jobb, bedre multitasking
- Ny termalpasta: 50 kr, forhindrer overoppheting
- Nytt batteri: 600 kr, full mobilitet igjen

**Steg 3: Programvare**
- Installer lett operativsystem (Linux) paa eldre maskin
- Fjern unodvendige programmer
- Bruk nettleserutvidelser som blokkerer ressurskrevende annonser

**Resultat:**
- Total kostnad: ca. 1500 kr vs. ca. 10 000 kr for ny laptop
- Forlenget levetid: 3-5 aar ekstra
- Spart CO2: ca. 400 kg`,
    },
    {
      id: 'elektro-data-vg1-13-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-13-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nevn tre tiltak du kan gjore for aa forlenge levetiden til elektroniske produkter.',
        solution: '1) Bruk beskyttelse som deksel og skjermfilm for aa unngaa fysisk skade. 2) Oppdater programvare regelmessig for aa holde produktet sikkert og optimalisert. 3) Reparer naar noe gaar i stykker i stedet for aa kjope nytt - mange reparasjoner er enkle aa gjore selv eller koster lite hos reparator. Andre gode tiltak: unngaa ekstreme temperaturer, slaa av naar ikke i bruk, rengjor jevnlig.',
      },
    },
    {
      id: 'elektro-data-vg1-13-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-13-ex-8',
        number: '8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor skal du levere gammel elektronikk som ikke lenger fungerer?',
        options: [
          'I vanlig restavfall',
          'I plastgjenvinning',
          'Til godkjent e-returpunkt eller gjenvinningsstasjon',
          'I naturen',
        ],
        answer: 2,
        solution: 'Gammel elektronikk skal alltid leveres til godkjente e-returpunkter, som finnes i elektronikkbutikker (Elretur) eller paa gjenvinningsstasjoner. Det er ulovlig aa kaste elektronikk i vanlig soppel fordi det inneholder giftige stoffer.',
      },
    },
    {
      id: 'elektro-data-vg1-13-oppsummering',
      type: 'text',
      content: `## Oppsummering

**E-avfall** er et voksende miljoproblem med 50 millioner tonn aarlig globalt. Det inneholder baade giftige stoffer og verdifulle metaller, men bare 20% resirkuleres korrekt.

**Sirkulaer oekonomi** er losningen: Design produkter for lang levetid, maksimer brukstiden gjennom reparasjon og gjenbruk, og resirkler effektivt.

**Right to Repair** gir forbrukere rett til aa reparere produktene sine. EU har innfort lovgivning som krever tilgang til reservedeler, dokumentasjon og reparerbart design.

**Dine valg betyr noe:**
- Tenk for du kjoper - trenger du det virkelig?
- Velg produkter som kan repareres
- Ta vare paa det du har
- Lever til riktig mottak naar produktet er utslitt

Ved aa ta bevisste valg kan hver av oss bidra til en mer baerekraftig teknologibruk.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'E-avfall', definition: 'Elektronisk avfall - kasserte elektriske og elektroniske produkter.' },
    { term: 'Sirkulaer oekonomi', definition: 'Okonomisk modell hvor produkter og materialer holdes i bruk lengst mulig.' },
    { term: 'Right to Repair', definition: 'Forbrukernes rett til aa reparere produktene sine.' },
    { term: 'Resirkulering', definition: 'Gjenvinning av materialer fra kasserte produkter til nye produkter.' },
    { term: 'Konfliktmineraler', definition: 'Mineraler utvunnet under uetiske forhold, ofte i konfliktomraader.' },
    { term: 'Modulaert design', definition: 'Design hvor komponenter lett kan byttes ut og oppgraderes.' },
    { term: 'Reparerbarhetsindeks', definition: 'Poengskala 0-10 som viser hvor enkelt et produkt er aa reparere.' },
  ],
};

// ============================================================================
// Kapittel 14: Yrkesmuligheter
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_14: TextbookChapter = {
  id: 'elektro-data-vg1-14',
  courseId: 'elektro-data-vg1',
  chapterNumber: '14',
  title: 'Yrkesmuligheter',
  description: 'Karriereveier innen elektro og data.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til ulike yrker i elektro og data',
    'forstaa utdanningsveier og karrieremuligheter',
  ],
  content: [
    {
      id: 'elektro-data-vg1-14-intro',
      type: 'text',
      content: `## Introduksjon til yrkesmuligheter

Elektro- og datafagene gir deg mange spennende karrieremuligheter. I dette kapittelet skal vi utforske hvilke yrker som finnes, hvilke utdanningsveier du kan velge, og hvordan arbeidsmarkedet ser ut.

**Dette kapittelet dekker:**
- Yrker innen elektrofag
- Yrker innen IT og data
- Utdanningsveier (fagbrev, fagskole, hoyere utdanning)
- Arbeidsmarkedet og lonnsnivaa`,
    },
    {
      id: 'elektro-data-vg1-14-def-1',
      type: 'definition',
      title: 'Yrker innen elektrofag',
      content: `**Elektriker**
Installerer og vedlikeholder elektriske anlegg i boliger, bedrifter og industri.
- Laeretid: 2 aar + fagbrev
- Laerlinglonn: Ca. 60-80% av fagarbeiderlonn
- Fagarbeiderlonn: 450 000 - 650 000 kr/aar
- Muligheter: Bli egen bedrift, spesialisere deg

**Automasjonstekniker**
Jobber med styringssystemer i industri og bygg.
- Programmerer PLS-systemer
- Feilsoker automatiserte systemer
- Vedlikeholder roboter
- Lonn: 500 000 - 700 000 kr/aar

**Montorer**
- Kabelmontor: Telenett, fibernett
- Solcelletekniker: Installasjon av solceller
- Vindindustritekniker: Service paa vindturbiner

**Anleggselektriker**
Jobber med kraftnett og hoyspenning.
- Installerer transformatorer
- Trekker kraftlinjer
- Hoye krav til sikkerhet`,
    },
    {
      id: 'elektro-data-vg1-14-example-1',
      type: 'example',
      title: 'Eksempel: En dag som elektriker',
      problem: 'Hva gjor en elektriker i lopet av en typisk arbeidsdag?',
      solution: `**Eksempel paa en typisk dag for elektriker Ole:**

**07:00** - Moter paa byggeplass, gjennomgaar dagens oppgaver med sjefen
**07:30** - Trekker kabler i nybygg, folger elektriske tegninger
**09:00** - Pause
**09:15** - Installerer sikringsskap, kobler til kurser
**11:30** - Lunsj
**12:00** - Feilsoker problem i eksisterende anlegg
**14:00** - Dokumenterer arbeidet, oppdaterer tegninger
**15:00** - Rydder verktoy, planlegger neste dag
**15:30** - Ferdig for dagen

**Variasjon i arbeidet:**
- Noen dager: Nyinstallasjon i bygg
- Andre dager: Service og vedlikehold
- Innimellom: Feilsoking og akutt reparasjon`,
    },
    {
      id: 'elektro-data-vg1-14-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-14-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen paa en elektriker og en automasjonstekniker?',
        options: [
          'Det er ingen forskjell',
          'Elektriker installerer anlegg, automasjonstekniker programmerer styringssystemer',
          'Automasjonstekniker jobber bare med roboter',
          'Elektriker jobber bare i boliger',
        ],
        answer: 1,
        solution: 'Elektriker installerer og vedlikeholder elektriske anlegg (lys, stikkontakter, tavler), mens automasjonstekniker jobber med styringssystemer, programmerer PLS, og vedlikeholder automatiserte systemer i industri og avanserte bygg.',
      },
    },
    {
      id: 'elektro-data-vg1-14-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-14-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv tre forskjellige elektroyrker og hva som kjennetegner hvert av dem.',
        solution: '1) Elektriker: Installerer og vedlikeholder elektriske anlegg i boliger og bedrifter, leser tegninger, kobler sikringsskap. 2) Automasjonstekniker: Programmerer PLS-systemer, feilsoker automatiserte prosesser, vedlikeholder roboter i industrien. 3) Solcelletekniker: Installerer solcelleanlegg paa tak, kobler til inverter og nett, dimensjonerer anlegg etter behov.',
      },
    },
    {
      id: 'elektro-data-vg1-14-def-2',
      type: 'definition',
      title: 'Yrker innen data og IT',
      content: `**Programmerer / Utvikler**
Lager programvare, apper og nettsider.
- Webutvikler: Frontend (det du ser) eller Backend (server)
- Apputvikler: iOS, Android apper
- Spillutvikler: Spill og simulasjoner
- Lonn: 500 000 - 900 000 kr/aar

**Datasikkerhet / Cybersikkerhet**
Beskytter systemer mot angrep og databrudd.
- Etisk hacker (penetrasjonstester)
- Sikkerhetskonsulent
- Dataforensiker
- Hoy ettersporsel, god lonn

**Nettverksadministrator**
Bygger og vedlikeholder datanettverk.
- Installerer servere og switcher
- Konfigurerer brannmurer
- Sikkerhetsoppdateringer
- Lonn: 450 000 - 700 000 kr/aar

**IoT-tekniker**
Jobber med Internet of Things - tilkoblede enheter.
- Smarthus installasjoner
- Industrielle sensornett
- Fremtidsrettet felt`,
    },
    {
      id: 'elektro-data-vg1-14-example-2',
      type: 'example',
      title: 'Eksempel: Karrierevei som utvikler',
      problem: 'Hvordan kan man bli webutvikler og hva gjor man i jobben?',
      solution: `**Karrierevei til webutvikler:**

**Utdanning:**
- Yrkesfag: Fagbrev i IKT-servicefag + erfaring
- Hoyere utdanning: Bachelor i informatikk/IT (3 aar)
- Selvlaert: Nettkurs + portefolje av prosjekter

**Typiske arbeidsoppgaver:**
- Lage nettsider og webapplikasjoner
- Skrive kode i JavaScript, Python, PHP
- Designe brukergrensesnitt
- Teste og feilsoke programvare
- Samarbeide med designere og kunder

**Karrierestige:**
1. Junior utvikler (0-2 aar erfaring): 450 000 - 550 000 kr
2. Utvikler (2-5 aar erfaring): 550 000 - 700 000 kr
3. Senior utvikler (5+ aar erfaring): 700 000 - 900 000 kr
4. Tech Lead / Arkitekt: 800 000 - 1 200 000 kr`,
    },
    {
      id: 'elektro-data-vg1-14-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-14-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gjor en cybersikkerhetsekspert?',
        options: [
          'Lager nettsider',
          'Beskytter systemer mot angrep og databrudd',
          'Installerer kabler',
          'Reparerer datamaskiner',
        ],
        answer: 1,
        solution: 'En cybersikkerhetsekspert beskytter IT-systemer mot hacking, databrudd og andre digitale trusler. De kan jobbe som etiske hackere, sikkerhetskonsulenter eller dataforensikere.',
      },
    },
    {
      id: 'elektro-data-vg1-14-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-14-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre yrker innen IT/data og hva de gjor.',
        solution: '1) Programmerer: Lager programvare, apper og nettsider ved aa skrive kode. 2) Nettverksadministrator: Bygger og vedlikeholder datanettverk, installerer servere, konfigurerer brannmurer. 3) Cybersikkerhet: Beskytter systemer mot angrep, tester sikkerhet, etterforsker datainnbrudd.',
      },
    },
    {
      id: 'elektro-data-vg1-14-def-3',
      type: 'definition',
      title: 'Utdanningsveier',
      content: `**Fagbrev (yrkesfaglig)**
VG1 - VG2 - 2 aar laere - Fagbrev
- Praktisk arbeid fra dag en
- Laerlinglonn
- Raskeste veien til jobb
- Mulig paabygging til generell studiekompetanse

**Fagskole**
Fagbrev + 1-2 aar fagskole = Fagskoleutdanning
- Spesialisering (f.eks. automasjon, fornybar energi)
- Hoyere lonn
- Lederstillinger
- Kombinerer praksis og teori

**Hoyere utdanning (universitet/hogskole)**
Generell studiekompetanse + 3-5 aar = Bachelor/Master
- Bachelor: 3 aar (180 studiepoeng)
- Master: 5 aar (300 studiepoeng)
- Elektroingenjor, Dataingenjor, IT-sikkerhet
- Forskning, utvikling, ledelse

**Kombinasjonslopet**
- Fagbrev - Fagskole
- Fagbrev - Ingenjor (Y-vei)
- Fagskole - Bachelor (paabygging)`,
    },
    {
      id: 'elektro-data-vg1-14-example-3',
      type: 'example',
      title: 'Eksempel: Utdanningsveien til elektriker',
      problem: 'Hvordan blir man elektriker med fagbrev?',
      solution: `**Veien til fagbrev som elektriker:**

**Aar 1-2: Videregaaende skole**
- VG1: Elektro og datateknologi (dette kurset!)
- VG2: Elenergi (spesialisering mot elektriker)

**Aar 3-4: Laerling i bedrift**
- 2 aar som laerling hos elektrikerfirma
- Laerlinglonn: ca. 200 000 - 350 000 kr/aar
- Praktisk opplaering under veiledning
- Etter hvert mer selvstendig arbeid

**Fagprove**
- Praktisk prove paa 3-4 dager
- Planlegge, utfore og dokumentere et prosjekt
- Muntlig gjennomgang med sensor

**Etter fagbrev:**
- Jobb som elektriker (lonn: 450 000+)
- Mulig videreutdanning: Fagskole, ingenjor
- Kan starte egen bedrift etter noen aars erfaring`,
    },
    {
      id: 'elektro-data-vg1-14-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-14-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv utdanningsveien for aa bli elektriker med fagbrev.',
        solution: 'VG1 Elektro og datateknologi - VG2 Elenergi - 2 aar laeretid hos bedrift med opplaering - Fagprove - Fagbrev som elektriker. Total tid: 4 aar etter ungdomsskolen.',
      },
    },
    {
      id: 'elektro-data-vg1-14-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-14-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Kan du ta hoyere utdanning etter fagbrev?',
        options: [
          'Nei, det er umulig',
          'Ja, men bare fagskole',
          'Ja, gjennom paabygging eller Y-vei til ingenjor',
          'Ja, men du maa begynne helt paa nytt',
        ],
        answer: 2,
        solution: 'Ja! Etter fagbrev kan du ta paabygging til generell studiekompetanse og deretter bachelor/master, eller bruke Y-vei direkte til ingenjorutdanning. Du kan ogsaa ta fagskole.',
      },
    },
    {
      id: 'elektro-data-vg1-14-def-4',
      type: 'definition',
      title: 'Arbeidsmarkedet',
      content: `**Ettersporsel**
- Stor mangel paa fagarbeidere
- Hoy ettersporsel paa IT-kompetanse
- Fornybar energi vokser raskt
- Automatisering oker i industrien

**Lonnsnivaa (2024)**
| Stilling | Lonn/aar |
|----------|----------|
| Laerling | 200 000 - 350 000 kr |
| Nyutdannet fagarbeider | 400 000 - 500 000 kr |
| Erfaren fagarbeider | 500 000 - 650 000 kr |
| Ingenjor (bachelor) | 500 000 - 700 000 kr |
| Erfaren ingenjor | 700 000 - 1 000 000+ kr |

**Fremtidsutsikter**
- Smart city og smarte bygg
- Fornybar energi og klimateknologi
- Kunstig intelligens
- Automatisering og robotikk
- Cybersikkerhet`,
    },
    {
      id: 'elektro-data-vg1-14-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-14-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvorfor er det gode jobbmuligheter innen elektro- og datafagene?',
        solution: 'Det er gode jobbmuligheter fordi: 1) Det er stor mangel paa fagarbeidere i Norge. 2) Fornybar energi (sol, vind) vokser raskt og trenger installatorer. 3) Automatisering og digitalisering oker behovet for IT- og automasjonskompetanse. 4) Cybersikkerhet er et voksende felt med hoey ettersporsel.',
      },
    },
    {
      id: 'elektro-data-vg1-14-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-14-ex-8',
        number: '8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Omtrent hva kan en erfaren elektriker forvente i aarslonn?',
        options: [
          '250 000 - 350 000 kr',
          '350 000 - 450 000 kr',
          '500 000 - 650 000 kr',
          '800 000 - 1 000 000 kr',
        ],
        answer: 2,
        solution: 'En erfaren elektriker kan forvente 500 000 - 650 000 kr i aarslonn. Lonnen varierer med erfaring, arbeidsgiver, overtid og geografisk omraade.',
      },
    },
    {
      id: 'elektro-data-vg1-14-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Elektroyrker** inkluderer elektriker, automasjonstekniker, montor og anleggselektriker. Alle krever fagbrev og gir god lonn.

**IT-yrker** inkluderer programmerer, nettverksadministrator, cybersikkerhet og IoT-tekniker. Mange veier inn - fagbrev, hoyere utdanning eller selvlaert.

**Utdanningsveier:**
- Fagbrev: VG1 - VG2 - 2 aar laere - fagprove
- Fagskole: 1-2 aar etter fagbrev
- Hoyere utdanning: Bachelor (3 aar) eller Master (5 aar)
- Kombinasjonslop: Y-vei fra fagbrev til ingenjor

**Arbeidsmarkedet** er godt med stor ettersporsel etter fagfolk. Fornybar energi, automatisering og digitalisering driver veksten.

Uansett hvilken vei du velger, gir elektro- og datafagene gode karrieremuligheter med interessante arbeidsoppgaver og konkurransedyktig lonn.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fagbrev', definition: 'Yrkeskompetanse oppnaadd etter VG2 og 2 aars laeretid med fagprove.' },
    { term: 'Laerling', definition: 'Person som laerer et yrke gjennom praktisk arbeid i bedrift.' },
    { term: 'Fagskole', definition: 'Hoyere yrkesutdanning (1-2 aar) som bygger paa fagbrev.' },
    { term: 'Paabygging', definition: 'Ett aar studie for aa faa generell studiekompetanse etter fagbrev.' },
    { term: 'Y-vei', definition: 'Vei fra fagbrev direkte til ingenjorutdanning.' },
    { term: 'IoT', definition: 'Internet of Things - tilkoblede enheter som kommuniserer over nettverk.' },
    { term: 'PLS', definition: 'Programmerbar Logisk Styring - brukt i automasjon og industri.' },
  ],
};

// ============================================================================
// Kapittel 15: Digitalteknikk - logiske porter og sannhetstabeller
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_15: TextbookChapter = {
  id: 'elektro-data-vg1-15',
  courseId: 'elektro-data-vg1',
  chapterNumber: '15',
  title: 'Digitalteknikk - logiske porter og sannhetstabeller',
  description: 'Grunnleggende logiske porter og sannhetstabeller.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstaa og bruke logiske porter',
    'lage og tolke sannhetstabeller',
  ],
  content: [
    {
      id: 'elektro-data-vg1-15-intro',
      type: 'text',
      content: `## Introduksjon til digitalteknikk

Digitalteknikk er grunnlaget for all moderne elektronikk - fra datamaskiner til smarttelefoner. I dette kapittelet skal vi laere om logiske porter, sannhetstabeller og boolsk algebra.

**Dette kapittelet dekker:**
- Digitale signaler og logiske nivaaer
- Grunnleggende logiske porter (AND, OR, NOT)
- Sammensatte porter (NAND, NOR, XOR)
- Sannhetstabeller
- Boolsk algebra og forenkling`,
    },
    {
      id: 'elektro-data-vg1-15-def-1',
      type: 'definition',
      title: 'Digitale signaler og logiske nivaaer',
      content: `**Digitale signaler** har bare to tilstander: 0 og 1.

**Logiske nivaaer:**
- **Logisk 0:** Lav spenning (0V - 0,8V), ogsaa kalt LOW eller FALSE
- **Logisk 1:** Hoy spenning (2V - 5V), ogsaa kalt HIGH eller TRUE

**Positiv og negativ logikk:**
- **Positiv logikk:** Hoy spenning = 1, lav spenning = 0 (vanligst)
- **Negativ logikk:** Lav spenning = 1, hoy spenning = 0

**Sannhetstabeller:**
En sannhetstabell viser output for alle mulige kombinasjoner av input.
- For 2 inputs (A og B): 2 opphoeyd i 2 = 4 kombinasjoner
- For 3 inputs (A, B, C): 2 opphoeyd i 3 = 8 kombinasjoner
- For N inputs: 2 opphoeyd i N kombinasjoner`,
    },
    {
      id: 'elektro-data-vg1-15-def-2',
      type: 'definition',
      title: 'Grunnleggende logiske porter',
      content: `**AND-port (OG-port)**
Output er 1 bare hvis ALLE innganger er 1.
| A | B | Output |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   0    |
| 1 | 0 |   0    |
| 1 | 1 |   1    |

**OR-port (ELLER-port)**
Output er 1 hvis MINST EN inngang er 1.
| A | B | Output |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   1    |

**NOT-port (IKKE-port / Inverter)**
Inverterer inngangen.
| A | Output |
|---|--------|
| 0 |   1    |
| 1 |   0    |

**XOR-port (Eksklusiv OR)**
Output er 1 hvis inngangene er FORSKJELLIGE.
| A | B | Output |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   0    |`,
    },
    {
      id: 'elektro-data-vg1-15-example-1',
      type: 'example',
      title: 'Eksempel: Bruk av AND-port',
      problem: 'En alarmkrets skal aktiveres bare naar baade dor-sensoren OG bevegelsessensoren er aktivert. Hvilken port bruker vi?',
      solution: `**Losning:** Vi bruker en AND-port.

**Hvorfor AND?**
- AND-porten gir output 1 bare naar BEGGE innganger er 1
- Dor-sensor = A, Bevegelsessensor = B
- Alarm = A AND B

**Sannhetstabell for alarmen:**
| Dor (A) | Bevegelse (B) | Alarm |
|---------|---------------|-------|
|    0    |       0       |   0   |
|    0    |       1       |   0   |
|    1    |       0       |   0   |
|    1    |       1       |   1   |

Alarmen gaar bare naar begge sensorer er aktive.`,
    },
    {
      id: 'elektro-data-vg1-15-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-15-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er output fra en AND-port naar A=1 og B=0?',
        options: ['0', '1', 'Udefinert', '2'],
        answer: 0,
        solution: 'En AND-port gir output 1 bare naar ALLE innganger er 1. Siden B=0, blir output 0.',
      },
    },
    {
      id: 'elektro-data-vg1-15-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-15-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en sannhetstabell for en 3-inngangs AND-port (A, B, C).',
        solution: '| A | B | C | Output |\n|---|---|---|--------|\n| 0 | 0 | 0 |   0    |\n| 0 | 0 | 1 |   0    |\n| 0 | 1 | 0 |   0    |\n| 0 | 1 | 1 |   0    |\n| 1 | 0 | 0 |   0    |\n| 1 | 0 | 1 |   0    |\n| 1 | 1 | 0 |   0    |\n| 1 | 1 | 1 |   1    |\n\nOutput er 1 bare naar A=1 OG B=1 OG C=1.',
      },
    },
    {
      id: 'elektro-data-vg1-15-def-3',
      type: 'definition',
      title: 'Sammensatte porter',
      content: `**NAND-port (NOT-AND)**
AND-port etterfulgt av en inverter. Output er 0 bare hvis ALLE innganger er 1.
| A | B | Output |
|---|---|--------|
| 0 | 0 |   1    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   0    |

NAND er en "universell port" - alle andre porter kan bygges med bare NAND-porter.

**NOR-port (NOT-OR)**
OR-port etterfulgt av en inverter. Output er 1 bare hvis ALLE innganger er 0.
| A | B | Output |
|---|---|--------|
| 0 | 0 |   1    |
| 0 | 1 |   0    |
| 1 | 0 |   0    |
| 1 | 1 |   0    |

NOR er ogsaa en "universell port".

**XNOR-port (Eksklusiv NOR)**
XOR-port etterfulgt av en inverter. Output er 1 hvis inngangene er LIKE.
| A | B | Output |
|---|---|--------|
| 0 | 0 |   1    |
| 0 | 1 |   0    |
| 1 | 0 |   0    |
| 1 | 1 |   1    |`,
    },
    {
      id: 'elektro-data-vg1-15-example-2',
      type: 'example',
      title: 'Eksempel: OR vs XOR',
      problem: 'Hva er forskjellen mellom en OR-port og en XOR-port?',
      solution: `**Sammenligning av OR og XOR:**

| A | B | OR | XOR |
|---|---|-----|-----|
| 0 | 0 |  0  |  0  |
| 0 | 1 |  1  |  1  |
| 1 | 0 |  1  |  1  |
| 1 | 1 |  1  |  0  |  <-- Forskjellen!

**OR-port:** Gir 1 hvis MINST EN inngang er 1 (inkludert naar begge er 1)
**XOR-port:** Gir 1 bare naar inngangene er FORSKJELLIGE

**Praktisk eksempel:**
- OR: "Vil du ha te ELLER kaffe?" - Du kan svare ja til begge
- XOR: "Vil du ha te ELLER kaffe, men ikke begge?" - Du maa velge en`,
    },
    {
      id: 'elektro-data-vg1-15-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-15-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom en OR-port og en XOR-port?',
        options: [
          'Det er ingen forskjell',
          'OR gir 1 naar begge er 1, XOR gir 0',
          'XOR gir alltid 1',
          'OR gir alltid 0 naar begge er 1',
        ],
        answer: 1,
        solution: 'OR-porten gir 1 hvis MINST en inngang er 1, inkludert naar begge er 1. XOR-porten gir 1 bare naar inngangene er FORSKJELLIGE. For A=1, B=1: OR gir 1, XOR gir 0.',
      },
    },
    {
      id: 'elektro-data-vg1-15-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-15-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva betyr det at NAND er en "universell port"?',
        solution: 'Det betyr at alle andre logiske porter (AND, OR, NOT, XOR, osv.) kan bygges ved aa bare bruke NAND-porter. Dette gjor NAND svært nyttig i praktisk design, siden man kan bruke kun en type IC for aa lage alle mulige logiske funksjoner.',
      },
    },
    {
      id: 'elektro-data-vg1-15-def-4',
      type: 'definition',
      title: 'Boolsk algebra',
      content: `Boolsk algebra brukes til aa forenkle logiske uttrykk.

**Grunnregler:**

**Identitetslover:**
- A AND 1 = A
- A OR 0 = A

**Nullelement og enhet:**
- A AND 0 = 0
- A OR 1 = 1

**Idempotens:**
- A AND A = A
- A OR A = A

**Komplement:**
- A AND (NOT A) = 0
- A OR (NOT A) = 1
- NOT(NOT A) = A

**Kommutativ lov:**
- A AND B = B AND A
- A OR B = B OR A

**De Morgans lover:**
- NOT(A AND B) = (NOT A) OR (NOT B)
- NOT(A OR B) = (NOT A) AND (NOT B)`,
    },
    {
      id: 'elektro-data-vg1-15-example-3',
      type: 'example',
      title: 'Eksempel: Forenkling med boolsk algebra',
      problem: 'Forenkle uttrykket: F = A AND B OR A AND (NOT B)',
      solution: `**Steg for steg forenkling:**

F = A AND B OR A AND (NOT B)

**Steg 1:** Faktoriser ut A (distributiv lov baklengs)
F = A AND (B OR (NOT B))

**Steg 2:** B OR (NOT B) = 1 (komplementregel)
F = A AND 1

**Steg 3:** A AND 1 = A (identitetslov)
F = A

**Konklusjon:** Hele uttrykket forenkles til bare A. Uansett hva B er, er output lik A.`,
    },
    {
      id: 'elektro-data-vg1-15-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-15-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk De Morgans lov til aa forenkle: NOT(A OR B)',
        solution: 'De Morgans lov: NOT(A OR B) = (NOT A) AND (NOT B). Dette betyr at utgangen er 1 bare naar baade A og B er 0.',
      },
    },
    {
      id: 'elektro-data-vg1-15-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-15-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tegn sannhetstabellen for F = (A AND B) OR (NOT C)',
        hints: ['Det er 3 inputs, saa 8 kombinasjoner', 'Regn ut A AND B forst, deretter NOT C, saa OR dem sammen'],
        solution: '| A | B | C | A AND B | NOT C | F |\n|---|---|---|---------|-------|---|\n| 0 | 0 | 0 |    0    |   1   | 1 |\n| 0 | 0 | 1 |    0    |   0   | 0 |\n| 0 | 1 | 0 |    0    |   1   | 1 |\n| 0 | 1 | 1 |    0    |   0   | 0 |\n| 1 | 0 | 0 |    0    |   1   | 1 |\n| 1 | 0 | 1 |    0    |   0   | 0 |\n| 1 | 1 | 0 |    1    |   1   | 1 |\n| 1 | 1 | 1 |    1    |   0   | 1 |',
      },
    },
    {
      id: 'elektro-data-vg1-15-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Digitale signaler** har to tilstander: 0 (lav) og 1 (hoy).

**Grunnleggende porter:**
- **AND:** Output 1 bare naar ALLE inputs er 1
- **OR:** Output 1 naar MINST EN input er 1
- **NOT:** Inverterer inputen
- **XOR:** Output 1 naar inputs er FORSKJELLIGE

**Sammensatte porter:**
- **NAND:** NOT-AND (universell port)
- **NOR:** NOT-OR (universell port)
- **XNOR:** NOT-XOR

**Sannhetstabeller** viser output for alle mulige input-kombinasjoner.

**Boolsk algebra** brukes til aa forenkle logiske uttrykk. Viktige regler inkluderer identitetslover, komplementregler og De Morgans lover.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sannhetstabell', definition: 'Tabell som viser output for alle mulige kombinasjoner av inputs.' },
    { term: 'AND-port', definition: 'Logisk port hvor output er 1 bare hvis alle inputs er 1.' },
    { term: 'OR-port', definition: 'Logisk port hvor output er 1 hvis minst en input er 1.' },
    { term: 'XOR-port', definition: 'Logisk port hvor output er 1 hvis inputs er forskjellige.' },
    { term: 'NAND-port', definition: 'NOT-AND, universell port som kan implementere alle andre porter.' },
    { term: 'De Morgans lover', definition: 'Regler for aa transformere logiske uttrykk.' },
    { term: 'Boolsk algebra', definition: 'Matematisk system for aa manipulere og forenkle logiske uttrykk.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

// ============================================================================
// Kapittel 16: Digitalteknikk - flip-flops og tellere
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_16: TextbookChapter = {
  id: 'elektro-data-vg1-16',
  courseId: 'elektro-data-vg1',
  chapterNumber: '16',
  title: 'Digitalteknikk - flip-flops og tellere',
  description: 'Sekvensiell logikk og tellerkretsers virkemåte.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå flip-flops og sekvensiell logikk',
    'kjenne til tellere og skiftregistre',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-16-intro',
      type: 'text',
      content: `## Introduksjon

I forrige kapittel lærte vi om kombinatoriske kretser som AND, OR og NOT porter. Disse kretsene har én viktig begrensning: de har ingen hukommelse. Output avhenger kun av nåværende input.

I dette kapitlet skal vi utforske **sekvensiell logikk** - kretser som kan huske tidligere tilstander. Dette er fundamentet for alt fra enkle tellere til avanserte prosessorer. Vi skal lære om flip-flops (den grunnleggende minnecellen), tellere som kan holde styr på antall hendelser, og skiftregistre som flytter data bit for bit.`,
    },

    // BLOKK 1: Sekvensiell vs kombinatorisk logikk
    {
      id: 'elektro-data-vg1-16-def-1',
      type: 'definition',
      title: 'Kombinatorisk vs sekvensiell logikk',
      content: `**Kombinatorisk logikk:** Output avhenger BARE av nåværende input. Eksempler er AND, OR, NOT porter. Ingen minnefunksjon - output endres umiddelbart når input endres.

**Sekvensiell logikk:** Output avhenger av BÅDE nåværende input OG tidligere tilstand (minne). Har minnefunksjon, kan lagre informasjon, og brukes i tellere, registre og dataminne. Bygger på flip-flops.

**Klokksignal:** Sekvensiell logikk bruker ofte et klokksignal (clock) - en periodisk puls (f.eks. 1 MHz = 1 million pulser per sekund) som synkroniserer endringer og sikrer at alle deler oppdateres samtidig.`,
    },
    {
      id: 'elektro-data-vg1-16-example-1',
      type: 'example',
      title: 'Kombinatorisk vs sekvensiell - lysbryter vs minnekrets',
      problem: 'Forklar forskjellen mellom en kombinatorisk og sekvensiell krets ved hjelp av praktiske eksempler.',
      solution: `**Kombinatorisk eksempel - Lysbryter:**
Når du trykker på lysbryteren, lyser lampen. Når du slipper, slukker den.
- Input: Bryterposisjon (på/av)
- Output: Lys (på/av)
- Ingen hukommelse - output følger input direkte

**Sekvensiell eksempel - Togglende lysbryter:**
Første trykk: Lyset går på og forblir på
Andre trykk: Lyset går av og forblir av
- Kretsen "husker" forrige tilstand
- Samme input (trykk) gir ulikt resultat avhengig av nåværende tilstand
- Dette krever en flip-flop for å huske om lyset er på eller av`,
    },
    {
      id: 'elektro-data-vg1-16-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-16-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner sekvensiell logikk sammenlignet med kombinatorisk logikk?',
        options: [
          'A) Sekvensiell logikk har ingen minnefunksjon',
          'B) Sekvensiell logikk har output som kun avhenger av nåværende input',
          'C) Sekvensiell logikk har output som avhenger av både nåværende input og tidligere tilstand',
          'D) Sekvensiell logikk bruker bare AND og OR porter',
        ],
        solution: 'Riktig svar: C) Sekvensiell logikk har output som avhenger av både nåværende input og tidligere tilstand. Dette er hovedforskjellen fra kombinatorisk logikk som bare ser på nåværende input. Sekvensiell logikk har minnefunksjon gjennom bruk av flip-flops.',
      },
    },

    // BLOKK 2: Flip-flops
    {
      id: 'elektro-data-vg1-16-def-2',
      type: 'definition',
      title: 'Flip-flops',
      content: `En **flip-flop** er den grunnleggende lagringsenheten i digital elektronikk. Den kan lagre én bit (0 eller 1).

**SR Flip-Flop (Set-Reset):** To innganger S (Set) og R (Reset). S=1 setter Q=1, R=1 resetter Q=0, S=R=0 beholder tilstand, S=R=1 er ugyldig.

**D Flip-Flop (Data):** Én data-inngang (D) og én klokk-inngang (CLK). Ved stigende klokkflanke får Q verdien av D. Brukes til å lagre 1 bit.

**JK Flip-Flop:** To innganger J og K, pluss klokk. J=1,K=0 setter Q=1, J=0,K=1 resetter Q=0, J=K=0 beholder, J=K=1 toggler (bytter tilstand).

**T Flip-Flop (Toggle):** Én inngang T og klokk. T=1 bytter tilstand ved hver klokkpuls. Brukes mye i tellere.

**Edge-Triggered:** Reagerer bare på stigende eller fallende flanke av klokken, ikke på klokkens nivå.`,
    },
    {
      id: 'elektro-data-vg1-16-example-2',
      type: 'example',
      title: 'D Flip-Flop som 1-bit minne',
      problem: 'En D flip-flop har D=1 og får en stigende klokkflanke. Hva skjer med output Q? Deretter endres D til 0, men ingen ny klokkpuls kommer. Hva er Q nå?',
      solution: `**Steg 1:** Ved stigende klokkflanke med D=1
- Q får verdien av D
- Q = 1

**Steg 2:** D endres til 0, men ingen klokkpuls
- Q beholder sin verdi (dette er "minnet")
- Q = 1 (fortsatt!)

**Konklusjon:** D flip-flop lagrer verdien som var på D ved siste stigende klokkflanke. Endringer på D mellom klokkpulser påvirker ikke Q.

Dette er essensielt for synkronisert dataoverføring - data "samples" kun ved klokkflanken.`,
    },
    {
      id: 'elektro-data-vg1-16-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-16-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva en D flip-flop gjør og hvorfor den kalles en "1-bit minnecelle".',
        solution: 'En D flip-flop lagrer verdien på D-inngangen når klokksignalet får en stigende flanke. Output Q får verdien av D og holder denne verdien til neste stigende klokkflanke. Den kalles "1-bit minnecelle" fordi den kan huske én bit informasjon (0 eller 1) mellom klokkpulsene. Endringer på D-inngangen mellom klokkpulser påvirker ikke output.',
      },
    },
    {
      id: 'elektro-data-vg1-16-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-16-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva skjer i en JK flip-flop når J=1 og K=1?',
        options: [
          'A) Output Q blir 0',
          'B) Output Q blir 1',
          'C) Output Q toggler (bytter tilstand)',
          'D) Tilstanden er ugyldig',
        ],
        solution: 'Riktig svar: C) Output Q toggler (bytter tilstand). I en JK flip-flop er J=K=1 en gyldig tilstand som får output til å bytte verdi ved hver klokkpuls. Hvis Q var 0, blir den 1, og omvendt. Dette er i motsetning til SR flip-flop hvor S=R=1 er ugyldig.',
      },
    },

    // BLOKK 3: Tellere
    {
      id: 'elektro-data-vg1-16-def-3',
      type: 'definition',
      title: 'Tellere',
      content: `En **teller** er en krets som teller antall klokkpulser.

**Asynkron teller (Ripple Counter):** Flip-flops kobles i serie, output fra én driver klokken til neste. Enkel å bygge, men har "ripple effect" - forsinkelse gjennom kaskaden.

**Synkron teller:** Alle flip-flops får samme klokksignal. Alle endrer tilstand samtidig - raskere og mer pålitelig, men krever mer logikk.

**Binær teller:** Teller i binære tall: 0000 → 0001 → 0010 → ... → 1111 → 0000. En 4-bits teller teller 0-15.

**BCD-teller:** Teller fra 0-9 (0000-1001), deretter tilbake til 0. Brukes for 7-segment display.

**Opp/ned-teller:** Kan telle både opp (inkrement) og ned (dekrement), kontrollert av retningssignal.`,
    },
    {
      id: 'elektro-data-vg1-16-example-3',
      type: 'example',
      title: '3-bits binær teller',
      problem: 'En 3-bits binær teller starter på 000. Vis alle tilstandene den går gjennom før den starter på nytt.',
      solution: `En 3-bits teller har 2³ = 8 mulige tilstander:

| Klokkpuls | Binær | Desimal |
|-----------|-------|---------|
| Start     | 000   | 0       |
| 1         | 001   | 1       |
| 2         | 010   | 2       |
| 3         | 011   | 3       |
| 4         | 100   | 4       |
| 5         | 101   | 5       |
| 6         | 110   | 6       |
| 7         | 111   | 7       |
| 8         | 000   | 0 (wrap)|

Telleren "wrapper" tilbake til 000 etter å ha nådd 111. Dette kalles overflow.`,
    },
    {
      id: 'elektro-data-vg1-16-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-16-ex-4',
        number: '4',
        type: 'classic',
        task: 'En 4-bits binær teller starter på 1010 (binært). Hva blir verdien etter 3 klokkpulser? Oppgi svaret både binært og desimalt.',
        solution: 'Telleren teller opp:\n- Start: 1010 (10 desimalt)\n- Etter puls 1: 1011 (11 desimalt)\n- Etter puls 2: 1100 (12 desimalt)\n- Etter puls 3: 1101 (13 desimalt)\n\nSvar: Verdien blir 1101 (binært) = 13 (desimalt).',
      },
    },
    {
      id: 'elektro-data-vg1-16-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-16-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom en asynkron og synkron teller?',
        options: [
          'A) Asynkron teller kan bare telle opp, synkron kan telle ned',
          'B) I asynkron teller driver hver flip-flop klokken til neste, i synkron får alle samme klokk',
          'C) Asynkron teller bruker D flip-flops, synkron bruker JK flip-flops',
          'D) Asynkron teller er raskere enn synkron',
        ],
        solution: 'Riktig svar: B) I asynkron teller driver hver flip-flop klokken til neste, i synkron får alle samme klokk. I en asynkron (ripple) teller kobles output fra én flip-flop til klokkinngangen på neste, noe som gir forsinkelse. I synkron teller får alle flip-flops samme klokksignal og endrer tilstand samtidig, noe som er raskere og mer pålitelig.',
      },
    },

    // BLOKK 4: Skiftregistre
    {
      id: 'elektro-data-vg1-16-def-4',
      type: 'definition',
      title: 'Skiftregistre',
      content: `Et **skiftregister** er en krets som flytter data bit for bit ved hver klokkpuls.

**SISO (Serie-Inn, Serie-Ut):** Data mates inn og ut én bit om gangen. Brukes til å forsinke data.

**SIPO (Serie-Inn, Parallell-Ut):** Data mates inn serielt, men alle bits er tilgjengelige ut samtidig. Konverterer seriell til parallell data.

**PISO (Parallell-Inn, Serie-Ut):** Alle bits lastes inn samtidig, kommer ut serielt. Konverterer parallell til seriell data.

**PIPO (Parallell-Inn, Parallell-Ut):** Data lastes inn og ut parallellt. Brukes som dataregister.

**Bruksområder:** Seriell kommunikasjon (UART, SPI), LED-striper (74HC595), datalagring, tidsforsinkning.`,
    },
    {
      id: 'elektro-data-vg1-16-example-4',
      type: 'example',
      title: 'SIPO skiftregister for seriell-til-parallell konvertering',
      problem: 'Du mottar 4 bits serielt: 1, 0, 1, 1 (i den rekkefølgen). Vis hvordan et 4-bits SIPO skiftregister fyller seg opp, og hva den parallelle utgangen blir.',
      solution: `SIPO = Serie-Inn, Parallell-Ut. Data skyves inn fra venstre.

| Klokkpuls | Inn | Q3 | Q2 | Q1 | Q0 |
|-----------|-----|----|----|----|----|
| Start     | -   | 0  | 0  | 0  | 0  |
| 1         | 1   | 1  | 0  | 0  | 0  |
| 2         | 0   | 0  | 1  | 0  | 0  |
| 3         | 1   | 1  | 0  | 1  | 0  |
| 4         | 1   | 1  | 1  | 0  | 1  |

**Parallell utgang etter 4 klokkpulser:** Q3=1, Q2=1, Q1=0, Q0=1

Den serielle datastrømmen 1,0,1,1 er nå tilgjengelig parallellt som 1101.`,
    },
    {
      id: 'elektro-data-vg1-16-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-16-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hva et SIPO skiftregister gjør og gi et praktisk bruksområde.',
        solution: 'SIPO (Serie-Inn, Parallell-Ut) er et skiftregister som tar inn data én bit om gangen serielt, og gjør alle bits tilgjengelige parallellt samtidig på utgangen. For hver klokkpuls skyves dataene ett steg gjennom registeret.\n\nPraktisk bruksområde: Mottak av seriell data via UART eller SPI. For eksempel kan en mikrokontroller sende data serielt over én ledning til en IC som 74HC595, som så gjør 8 bits tilgjengelige parallellt for å styre 8 LED-er eller andre utganger.',
      },
    },
    {
      id: 'elektro-data-vg1-16-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-16-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvilket skiftregister brukes for å konvertere parallell data til seriell data?',
        options: [
          'A) SISO (Serie-Inn, Serie-Ut)',
          'B) SIPO (Serie-Inn, Parallell-Ut)',
          'C) PISO (Parallell-Inn, Serie-Ut)',
          'D) PIPO (Parallell-Inn, Parallell-Ut)',
        ],
        solution: 'Riktig svar: C) PISO (Parallell-Inn, Serie-Ut). PISO tar inn alle bits samtidig (parallelt) og sender dem ut én om gangen (serielt). Dette brukes når du har data på flere parallelle linjer og trenger å sende det over én seriell linje, for eksempel ved seriell datakommunikasjon.',
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-16-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapitlet har vi lært om sekvensiell logikk - kretser med hukommelse:

**Flip-flops** er de grunnleggende byggeklossene:
- D flip-flop lagrer én bit ved klokkflanke
- JK flip-flop har toggle-funksjon (J=K=1)
- T flip-flop toggler ved hver klokk (brukes i tellere)
- SR flip-flop har set/reset funksjonalitet

**Tellere** holder styr på antall hendelser:
- Asynkrone tellere er enkle men har forsinkelse
- Synkrone tellere er raskere og mer presise
- Binære tellere teller 0 til 2^n-1
- BCD-tellere teller 0-9 for display

**Skiftregistre** flytter data:
- SIPO: Seriell inn, parallell ut
- PISO: Parallell inn, seriell ut
- Brukes i seriell kommunikasjon og LED-styring

Sekvensiell logikk er fundamentet for datamaskiner - alt fra enkle tellere til prosessorer bygger på disse prinsippene.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Flip-flop', definition: 'Grunnleggende lagringsenhet som kan lagre 1 bit informasjon.' },
    { term: 'Sekvensiell logikk', definition: 'Logikk hvor output avhenger av både input og tidligere tilstand.' },
    { term: 'Teller', definition: 'Krets som teller klokkpulser, enten binært eller på annen måte.' },
    { term: 'Skiftregister', definition: 'Krets som flytter data bit for bit, serielt eller parallellt.' },
    { term: 'Klokksignal', definition: 'Periodisk puls som synkroniserer endringer i sekvensiell logikk.' },
    { term: 'Edge-triggered', definition: 'Reagerer på stigende eller fallende flanke av klokksignal.' },
  ],
};

// ============================================================================
// Kapittel 17: Mikrokontrollere og Arduino
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_17: TextbookChapter = {
  id: 'elektro-data-vg1-17',
  courseId: 'elektro-data-vg1',
  chapterNumber: '17',
  title: 'Mikrokontrollere og Arduino',
  description: 'Programmering av mikrokontrollere med Arduino-plattformen.',
  estimatedMinutes: 65,
  competenceGoals: [
    'programmere Arduino',
    'koble sensorer og aktuatorer til mikrokontrollere',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-17-intro',
      type: 'text',
      content: `## Introduksjon

Mikrokontrollere er små datamaskiner på én brikke som styrer alt fra vaskemaskiner til droner. I dette kapitlet skal vi lære å programmere **Arduino** - en av de mest populære mikrokontroller-plattformene for læring og prototyping.

Arduino gjør det enkelt å koble sammen sensorer (som måler temperatur, lys eller avstand) og aktuatorer (som LED, motorer og releer) for å lage interaktive prosjekter. Vi skal lære grunnleggende programmering, hvordan vi leser fra sensorer og hvordan vi styrer aktuatorer.`,
    },

    // BLOKK 1: Arduino-plattformen
    {
      id: 'elektro-data-vg1-17-def-1',
      type: 'definition',
      title: 'Arduino-plattformen',
      content: `**Arduino** er en åpen kildekode mikrokontroller-plattform med både hardware og software.

**Arduino Uno** (mest brukt):
- ATmega328P mikrokontroller
- 14 digitale I/O pins (6 med PWM)
- 6 analoge innganger
- 32 KB flash-minne, 16 MHz klokke
- USB-tilkobling for programmering

**Andre modeller:**
- **Arduino Nano:** Mindre, breadboard-vennlig
- **Arduino Mega:** 54 digitale pins, 256 KB minne

**Arduino IDE:** Gratis programmeringsmiljø med editor, eksempelkode, seriemonitor for debugging, og bibliotekbehandling. Lastes ned fra arduino.cc.`,
    },
    {
      id: 'elektro-data-vg1-17-example-1',
      type: 'example',
      title: 'Arduino Uno spesifikasjoner',
      problem: 'Hva betyr det at Arduino Uno har "14 digitale I/O pins hvorav 6 kan gjøre PWM"?',
      solution: `**Digitale I/O pins:**
- 14 pins som kan være INPUT (lese) eller OUTPUT (skrive)
- Digital betyr bare to tilstander: HIGH (5V) eller LOW (0V)
- Brukes til å lese knapper, styre LED-er, kommunisere med andre komponenter

**PWM (Pulse Width Modulation) på 6 av pinnene:**
- Pins merket med ~ (3, 5, 6, 9, 10, 11)
- Kan simulere analoge verdier ved å slå av/på veldig raskt
- Brukes til å dimme LED-er eller kontrollere motorhastighet
- 256 nivåer (0-255) i stedet for bare av/på

**I praksis:** Du kan koble 14 ting som bare trenger av/på (LED, relé, knapp), men bare 6 av dem kan ha variabel styrke.`,
    },
    {
      id: 'elektro-data-vg1-17-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-17-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken Arduino-modell er best egnet for et prosjekt som trenger 40 digitale utganger?',
        options: [
          'A) Arduino Uno (14 digitale pins)',
          'B) Arduino Nano (14 digitale pins)',
          'C) Arduino Mega (54 digitale pins)',
          'D) Alle modellene fungerer like bra',
        ],
        solution: 'Riktig svar: C) Arduino Mega (54 digitale pins). Arduino Uno og Nano har bare 14 digitale pins, som er for lite for 40 utganger. Arduino Mega har 54 digitale I/O pins og er designet for større prosjekter som krever mange tilkoblinger.',
      },
    },

    // BLOKK 2: Grunnleggende programmering
    {
      id: 'elektro-data-vg1-17-def-2',
      type: 'definition',
      title: 'Arduino-programmering: setup() og loop()',
      content: `Arduino programmeres i C/C++. Hver skisse har to hovedfunksjoner:

**setup()** - Kjører én gang ved oppstart:
- Initialiserer pins med pinMode()
- Starter seriell kommunikasjon
- Setter startverdier

**loop()** - Kjører i det uendelige:
- Hovedprogrammet
- Leser sensorer, tar beslutninger, styrer aktuatorer

**Viktige funksjoner:**
\`\`\`
pinMode(pin, OUTPUT/INPUT)  // Sett pin-modus
digitalWrite(pin, HIGH/LOW) // Skriv digital verdi
digitalRead(pin)            // Les digital verdi
analogRead(pin)             // Les analog (0-1023)
analogWrite(pin, 0-255)     // PWM utgang
delay(ms)                   // Vent millisekunder
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-17-example-2',
      type: 'example',
      title: 'Blinkende LED - Arduino "Hello World"',
      problem: 'Skriv et Arduino-program som blinker en LED på pin 13 med 1 sekunds intervall.',
      solution: `\`\`\`cpp
const int ledPin = 13;  // LED på pin 13

void setup() {
  pinMode(ledPin, OUTPUT);  // Sett pin 13 som utgang
}

void loop() {
  digitalWrite(ledPin, HIGH);  // Slå på LED (5V)
  delay(1000);                 // Vent 1 sekund (1000 ms)
  digitalWrite(ledPin, LOW);   // Slå av LED (0V)
  delay(1000);                 // Vent 1 sekund
}
// loop() starter på nytt automatisk
\`\`\`

**Forklaring:**
1. \`setup()\` kjører én gang og setter pin 13 som OUTPUT
2. \`loop()\` kjører i det uendelige:
   - Slår på LED → venter 1s → slår av LED → venter 1s → gjentar`,
    },
    {
      id: 'elektro-data-vg1-17-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-17-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen på setup() og loop() i en Arduino-skisse.',
        solution: 'setup() kjører én gang når Arduino starter eller resettes. Den brukes til å initialisere pins med pinMode(), starte seriell kommunikasjon med Serial.begin(), og sette startverdier. loop() kjører i det uendelige etter at setup() er ferdig, og inneholder hovedprogrammet som leser sensorer, tar beslutninger og styrer aktuatorer. Når loop() er ferdig, starter den automatisk på nytt fra begynnelsen.',
      },
    },
    {
      id: 'elektro-data-vg1-17-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-17-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv Arduino-kode som blinker en LED på pin 8 hvert annet sekund (1 sekund på, 1 sekund av).',
        solution: `const int ledPin = 8;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}

Forklaring: Vi definerer pin 8 som utgang i setup(). I loop() slår vi på LED-en med HIGH, venter 1000ms (1 sekund), slår av med LOW, venter 1000ms, og gjentar.`,
      },
    },

    // BLOKK 3: Analog lesing og PWM
    {
      id: 'elektro-data-vg1-17-def-3',
      type: 'definition',
      title: 'Analog I/O og PWM',
      content: `**analogRead(pin)** - Leser analog spenning:
- Returnerer verdi 0-1023
- 0 = 0V, 1023 = 5V
- Oppløsning: 5V/1024 ≈ 4.9mV per enhet
- Brukes med analoge sensorer (temperatur, lys, potmeter)

**analogWrite(pin, verdi)** - PWM utgang:
- Verdi 0-255
- 0 = alltid av (0V gjennomsnitt)
- 255 = alltid på (5V gjennomsnitt)
- 128 = 50% duty cycle (2.5V gjennomsnitt)
- Kun på PWM-pins (~3, 5, 6, 9, 10, 11)

**PWM (Pulse Width Modulation):**
Digital pin slås raskt av/på for å simulere analog spenning. Forholdet mellom på-tid og av-tid (duty cycle) bestemmer gjennomsnittlig spenning.`,
    },
    {
      id: 'elektro-data-vg1-17-example-3',
      type: 'example',
      title: 'Lese potmeter og styre LED-lysstyrke',
      problem: 'Lag et program som leser et potmeter på A0 og bruker verdien til å styre lysstyrken på en LED på pin 9.',
      solution: `\`\`\`cpp
const int potPin = A0;   // Potmeter på analog pin A0
const int ledPin = 9;    // LED på PWM-pin 9

void setup() {
  pinMode(ledPin, OUTPUT);
  // Analog pins trenger ikke pinMode
}

void loop() {
  int potValue = analogRead(potPin);    // Les 0-1023
  int brightness = potValue / 4;         // Konverter til 0-255
  analogWrite(ledPin, brightness);       // Sett LED-lysstyrke
  delay(10);                             // Liten forsinkelse
}
\`\`\`

**Forklaring:**
- analogRead() gir 0-1023, men analogWrite() tar 0-255
- Vi deler på 4 for å konvertere: 1023/4 ≈ 255
- Når potmeteret vris, endres LED-lysstyrken jevnt`,
    },
    {
      id: 'elektro-data-vg1-17-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-17-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva returnerer analogRead(A0) på Arduino Uno hvis spenningen på pinnen er 2.5V?',
        options: [
          'A) 0',
          'B) 255',
          'C) 512 (omtrent)',
          'D) 1023',
        ],
        solution: 'Riktig svar: C) 512 (omtrent). analogRead() returnerer en verdi fra 0 til 1023 som representerer spenningen fra 0V til 5V. 2.5V er halvveis, så verdien blir omtrent 1023/2 ≈ 512. Formelen er: verdi = (spenning/5V) × 1023.',
      },
    },
    {
      id: 'elektro-data-vg1-17-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-17-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva PWM er og hvordan analogWrite() bruker det til å dimme en LED.',
        solution: 'PWM (Pulse Width Modulation) er en teknikk hvor en digital pin slås raskt av og på for å simulere et analogt signal. analogWrite(pin, value) setter duty cycle med verdi 0-255: 0 betyr alltid av (0V gjennomsnitt), 255 betyr alltid på (5V gjennomsnitt), og 128 betyr 50% på-tid (2.5V gjennomsnitt). Fordi av/på-skiftingen skjer tusenvis av ganger per sekund, oppfatter øyet det som jevn dimming av LED-en, ikke blinking.',
      },
    },

    // BLOKK 4: Sensorer
    {
      id: 'elektro-data-vg1-17-def-4',
      type: 'definition',
      title: 'Vanlige sensorer for Arduino',
      content: `**Temperatursensor (DHT11/DHT22):**
- Måler temperatur og fuktighet
- Digital kommunikasjon, krever bibliotek
- DHT11: ±2°C nøyaktighet, DHT22: ±0.5°C

**Ultrasonisk avstandssensor (HC-SR04):**
- Måler avstand 2-400 cm
- Sender ultralyd, måler tid til ekko
- Avstand = (tid × lydhastighet) / 2

**Lysensor (LDR - Light Dependent Resistor):**
- Motstand endres med lysnivå
- Kobles som spenningsdeler til analog pin
- Høy verdi = mye lys (eller motsatt, avhengig av kobling)

**Knapp/bryter:**
- Digital input: HIGH eller LOW
- Trenger pull-up eller pull-down motstand
- Kan bruke intern pull-up: pinMode(pin, INPUT_PULLUP)`,
    },
    {
      id: 'elektro-data-vg1-17-example-4',
      type: 'example',
      title: 'Lese knapp og styre LED',
      problem: 'Skriv kode som leser en knapp på pin 2 og slår på LED på pin 13 når knappen trykkes.',
      solution: `\`\`\`cpp
const int buttonPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);  // Intern pull-up
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) {  // LOW = trykket med pull-up
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
\`\`\`

**Forklaring med INPUT_PULLUP:**
- Intern pull-up motstand holder pinnen HIGH når knappen ikke er trykket
- Når knappen trykkes, kobles pinnen til GND (LOW)
- Derfor: buttonState == LOW betyr "knappen er trykket"
- Dette unngår behov for ekstern motstand`,
    },
    {
      id: 'elektro-data-vg1-17-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-17-ex-6',
        number: '6',
        type: 'classic',
        task: 'Skriv Arduino-kode som leser en knapp på pin 2 og slår på LED på pin 13 når knappen trykkes. Bruk INPUT_PULLUP.',
        solution: `const int buttonPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(buttonPin);
  if (buttonState == LOW) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}

Forklaring: Med INPUT_PULLUP er pinnen HIGH når knappen ikke er trykket, og LOW når den trykkes (knappen kobler til GND). Derfor sjekker vi om buttonState == LOW for å vite om knappen er trykket.`,
      },
    },

    // BLOKK 5: Aktuatorer
    {
      id: 'elektro-data-vg1-17-def-5',
      type: 'definition',
      title: 'Aktuatorer for Arduino',
      content: `**LED:** Enkleste aktuator. Styres med digitalWrite() for av/på eller analogWrite() for dimming.

**Servomotor:** Posisjonerer seg 0-180 grader. Krever Servo-biblioteket.
\`\`\`
#include <Servo.h>
Servo myservo;
myservo.attach(pin);
myservo.write(vinkel);  // 0-180 grader
\`\`\`

**DC-motor:** Krever motor driver (L298N) fordi Arduino-pins bare gir 40mA/5V, mens motorer trenger 1-5A og ofte høyere spenning.

**Relé:** Bruker lavstrøm-signal til å slå av/på høyere spenning/strøm. Kan styre 230V apparater med 5V signal fra Arduino.`,
    },
    {
      id: 'elektro-data-vg1-17-example-5',
      type: 'example',
      title: 'Styre servomotor',
      problem: 'Skriv kode som beveger en servo fra 0 til 180 grader og tilbake.',
      solution: `\`\`\`cpp
#include <Servo.h>

Servo myservo;

void setup() {
  myservo.attach(9);  // Servo på pin 9
}

void loop() {
  // Sving fra 0 til 180 grader
  for (int pos = 0; pos <= 180; pos++) {
    myservo.write(pos);
    delay(15);  // Vent litt mellom hver grad
  }

  // Sving tilbake fra 180 til 0 grader
  for (int pos = 180; pos >= 0; pos--) {
    myservo.write(pos);
    delay(15);
  }
}
\`\`\`

**Forklaring:**
- Servo-biblioteket håndterer PWM-signalet servoen trenger
- myservo.write(vinkel) setter posisjonen
- delay(15) gir servoen tid til å bevege seg før neste posisjon`,
    },
    {
      id: 'elektro-data-vg1-17-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-17-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvorfor trenger vi en motor driver (som L298N) for å styre en DC-motor fra Arduino?',
        options: [
          'A) Arduino har ikke nok minne til motorprogrammer',
          'B) Arduino-pins kan bare levere 40mA, mens motorer trenger mye mer strøm',
          'C) DC-motorer krever analogt signal som Arduino ikke kan lage',
          'D) Motor drivere er bare for å gjøre koblingen enklere',
        ],
        solution: 'Riktig svar: B) Arduino-pins kan bare levere 40mA, mens motorer trenger mye mer strøm. En typisk DC-motor trenger 1-5A strøm og ofte høyere spenning (6-12V) enn Arduino kan gi (5V). Motor driveren fungerer som en forsterker og kan håndtere høyere strøm/spenning. Den beskytter også Arduino mot motorens tilbakeslag (back EMF).',
      },
    },
    {
      id: 'elektro-data-vg1-17-ex-8',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-17-ex-8',
        number: '8',
        type: 'classic',
        task: 'Beskriv tre ulike aktuatorer som kan styres fra Arduino, og forklar kort hvordan hver av dem brukes.',
        solution: `1. **LED:** Styres med digitalWrite(pin, HIGH/LOW) for av/på, eller analogWrite(pin, 0-255) for variabel lysstyrke via PWM. Enkleste aktuator, brukes til indikatorer og belysning.

2. **Servomotor:** Bruker Servo-biblioteket. Etter myservo.attach(pin) kan vi sette vinkel 0-180 grader med myservo.write(vinkel). Brukes til presise bevegelser i roboter, dører, kameraer.

3. **Relé:** Styres som en digital utgang med digitalWrite(). Når pinnen er HIGH, aktiveres reléet og slår på en krets med høyere spenning (f.eks. 230V). Brukes til å styre lamper, vifter, og andre apparater som trenger mer strøm enn Arduino kan levere direkte.`,
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-17-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapitlet har vi lært grunnleggende Arduino-programmering:

**Arduino-plattformen:**
- Mikrokontroller-plattform med hardware og software
- Arduino Uno har 14 digitale og 6 analoge pins
- Arduino IDE er programmeringsmiljøet

**Programstruktur:**
- setup() kjører én gang ved oppstart
- loop() kjører i det uendelige
- pinMode(), digitalWrite(), digitalRead() for digitale pins
- analogRead() (0-1023), analogWrite() (0-255) for analog I/O

**Sensorer og aktuatorer:**
- Sensorer: Knapper, temperatursensorer, lyssensorer, avstandsmålere
- Aktuatorer: LED, servomotorer, DC-motorer (via driver), releer
- PWM simulerer analoge verdier med raske av/på-pulser

Arduino er et kraftig verktøy for å lære elektronikk og programmering, og kan brukes til alt fra enkle LED-prosjekter til komplekse roboter og IoT-løsninger.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Arduino', definition: 'Open-source mikrokontroller-plattform for prototyping og læring.' },
    { term: 'Skisse', definition: 'Arduino-program, består av setup() og loop() funksjoner.' },
    { term: 'pinMode()', definition: 'Funksjon som setter en pin som INPUT eller OUTPUT.' },
    { term: 'digitalWrite()', definition: 'Funksjon som skriver HIGH (5V) eller LOW (0V) til en digital pin.' },
    { term: 'analogRead()', definition: 'Funksjon som leser analog spenning (0-1023) fra en analog pin.' },
    { term: 'PWM', definition: 'Pulse Width Modulation – teknikk for å simulere analoge signaler.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

// ============================================================================
// KAPITTEL 18: Signalbehandling og filtre
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_18: TextbookChapter = {
  id: 'elektro-data-vg1-18',
  courseId: 'elektro-data-vg1',
  chapterNumber: '18',
  title: 'Signalbehandling og filtre',
  description: 'Analoge og digitale filtre for signalbehandling.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå signalbehandling og filtre',
    'kjenne til grensefrekvens og filtertyper',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-18-intro',
      type: 'text',
      content: `## Introduksjon

I elektronikk jobber vi ofte med signaler som inneholder mer enn vi trenger. Et lydsignal kan ha uønsket støy, et sensorsignal kan ha forstyrrelser, eller vi trenger bare en del av frekvensspekteret.

**Filtre** er kretser som lar noen frekvenser passere mens de blokkerer andre. I dette kapitlet skal vi lære om de fire hovedtypene av filtre: lavpass, høypass, båndpass og båndstopp. Vi skal også se på hvordan filtre bygges med motstander og kondensatorer, og forstå begrepet grensefrekvens.`,
    },

    // BLOKK 1: Signaler og frekvenser
    {
      id: 'elektro-data-vg1-18-def-1',
      type: 'definition',
      title: 'Signaler og frekvenser',
      content: `Et **signal** er en varierende elektrisk spenning eller strøm over tid.

**Frekvens (f):** Antall svingninger per sekund, måles i Hertz (Hz).
- 1 Hz = 1 svingning per sekund
- 1 kHz = 1000 Hz
- 1 MHz = 1 000 000 Hz

**Periode (T):** Tiden for én komplett svingning. T = 1/f

**Eksempler på signalfrekvenser:**
- Hørbar lyd: 20 Hz - 20 kHz
- AM-radio: 530 kHz - 1700 kHz
- FM-radio: 88 MHz - 108 MHz
- WiFi: 2.4 GHz eller 5 GHz

**Sammensatte signaler:** De fleste virkelige signaler inneholder mange frekvenser samtidig. Et lydsignal fra en gitar inneholder grunnfrekvensen pluss overharmoniske.`,
    },
    {
      id: 'elektro-data-vg1-18-example-1',
      type: 'example',
      title: 'Beregne frekvens og periode',
      problem: 'Et signal har en periode på 2 millisekunder (ms). Hva er frekvensen?',
      solution: `**Gitt:** T = 2 ms = 0.002 s

**Formel:** f = 1/T

**Beregning:**
f = 1 / 0.002 s
f = 500 Hz

**Svar:** Frekvensen er 500 Hz.

**Kontroll:** En frekvens på 500 Hz betyr 500 svingninger per sekund. På 1 sekund får vi 500 × 0.002 s = 1 s. Stemmer!

Dette er innenfor det hørbare området (20 Hz - 20 kHz), så dette kunne vært en lyd med middels tonehøyde.`,
    },
    {
      id: 'elektro-data-vg1-18-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-18-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Et signal har frekvens 1 kHz. Hva er perioden?',
        options: [
          'A) 1 sekund',
          'B) 1 millisekund (ms)',
          'C) 1 mikrosekund (us)',
          'D) 0.1 millisekund',
        ],
        solution: 'Riktig svar: B) 1 millisekund (ms). Perioden T = 1/f = 1/1000 Hz = 0.001 s = 1 ms. Et 1 kHz signal gjennomfører 1000 svingninger per sekund, så hver svingning tar 1/1000 av et sekund.',
      },
    },

    // BLOKK 2: Filtertyper
    {
      id: 'elektro-data-vg1-18-def-2',
      type: 'definition',
      title: 'De fire filtertypene',
      content: `**Lavpassfilter (Low-Pass):**
- Slipper gjennom lave frekvenser
- Blokkerer høye frekvenser
- Brukes til: Fjerne høyfrekvent støy, anti-aliasing

**Høypassfilter (High-Pass):**
- Slipper gjennom høye frekvenser
- Blokkerer lave frekvenser
- Brukes til: Fjerne DC-offset, blokkere rumling

**Båndpassfilter (Band-Pass):**
- Slipper gjennom et bestemt frekvensområde
- Blokkerer frekvenser over og under båndet
- Brukes til: Radiotuning, velge bestemt frekvenskanal

**Båndstoppfilter (Band-Stop/Notch):**
- Blokkerer et bestemt frekvensområde
- Slipper gjennom frekvenser over og under
- Brukes til: Fjerne 50 Hz nettbrumming, fjerne spesifikk interferens`,
    },
    {
      id: 'elektro-data-vg1-18-example-2',
      type: 'example',
      title: 'Velge riktig filtertype',
      problem: 'Du har et lydsignal med uønsket høyfrekvent hvesing. Hvilken filtertype bruker du?',
      solution: `**Analyse:**
- Ønsket signal: Lyden (tale/musikk) - typisk under 10 kHz
- Uønsket signal: Høyfrekvent hvesing - over 10 kHz

**Løsning:** Bruk et **lavpassfilter**.

**Forklaring:**
- Lavpassfilteret slipper gjennom de lave frekvensene (lyden)
- Det blokkerer de høye frekvensene (hvesingen)
- Vi setter grensefrekvensen rett over det vi vil beholde, f.eks. 8-10 kHz

**Andre eksempler:**
- Fjerne DC fra lydsignal → Høypassfilter
- Tune inn FM-radiostasjon → Båndpassfilter
- Fjerne 50 Hz brumming → Båndstoppfilter (notch)`,
    },
    {
      id: 'elektro-data-vg1-18-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-18-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Du vil lytte til én bestemt FM-radiostasjon på 98.5 MHz. Hvilken filtertype brukes for å velge ut denne stasjonen?',
        options: [
          'A) Lavpassfilter',
          'B) Høypassfilter',
          'C) Båndpassfilter',
          'D) Båndstoppfilter',
        ],
        solution: 'Riktig svar: C) Båndpassfilter. Et båndpassfilter slipper gjennom et bestemt frekvensområde (rundt 98.5 MHz) og blokkerer alle andre frekvenser. Dette isolerer signalet fra den ønskede radiostasjonen og fjerner alle andre stasjoner.',
      },
    },

    // BLOKK 3: RC-filtre og grensefrekvens
    {
      id: 'elektro-data-vg1-18-def-3',
      type: 'definition',
      title: 'RC-filtre og grensefrekvens',
      content: `**RC-filter:** Enkelt filter bygget med motstand (R) og kondensator (C).

**RC Lavpassfilter:**
- R i serie, C parallelt til utgangen
- Kondensatoren "kortslutter" høye frekvenser til jord

**RC Høypassfilter:**
- C i serie, R parallelt til utgangen
- Kondensatoren blokkerer DC og lave frekvenser

**Grensefrekvens (fc):** Frekvensen hvor filterets utgang er -3 dB (ca. 70.7%) av inngangen.

**Formel:** fc = 1 / (2π × R × C)

Hvor:
- fc = grensefrekvens i Hz
- R = motstand i ohm (Ω)
- C = kapasitans i farad (F)

**Under grensefrekvensen:** Signalet passerer (lavpass) eller blokkeres (høypass)
**Over grensefrekvensen:** Signalet blokkeres (lavpass) eller passerer (høypass)`,
    },
    {
      id: 'elektro-data-vg1-18-example-3',
      type: 'example',
      title: 'Beregne grensefrekvens for RC-filter',
      problem: 'Du bygger et RC lavpassfilter med R = 10 kΩ og C = 100 nF. Hva blir grensefrekvensen?',
      solution: `**Gitt:**
- R = 10 kΩ = 10 000 Ω
- C = 100 nF = 100 × 10⁻⁹ F = 0.0000001 F

**Formel:** fc = 1 / (2π × R × C)

**Beregning:**
fc = 1 / (2 × 3.14159 × 10000 × 0.0000001)
fc = 1 / (6.28 × 0.001)
fc = 1 / 0.00628
fc ≈ 159 Hz

**Svar:** Grensefrekvensen er ca. 159 Hz.

**Tolkning:** Dette lavpassfilteret slipper gjennom frekvenser under 159 Hz med full styrke, og demper frekvenser over 159 Hz gradvis. Ved 159 Hz er signalet redusert til 70.7% (-3 dB).`,
    },
    {
      id: 'elektro-data-vg1-18-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-18-ex-3',
        number: '3',
        type: 'classic',
        task: 'Et RC lavpassfilter har R = 1 kΩ og C = 1 µF. Beregn grensefrekvensen. Bruk formelen fc = 1/(2π×R×C).',
        solution: `Gitt: R = 1 kΩ = 1000 Ω, C = 1 µF = 1 × 10⁻⁶ F

Formel: fc = 1 / (2π × R × C)

Beregning:
fc = 1 / (2 × 3.14159 × 1000 × 0.000001)
fc = 1 / (6.28 × 0.001)
fc = 1 / 0.00628
fc ≈ 159 Hz

Svar: Grensefrekvensen er cirka 159 Hz. Frekvenser under 159 Hz passerer med liten demping, mens frekvenser over 159 Hz dempes gradvis.`,
      },
    },
    {
      id: 'elektro-data-vg1-18-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-18-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'I et RC lavpassfilter, hva skjer med grensefrekvensen hvis du dobler motstanden R?',
        options: [
          'A) Grensefrekvensen dobles',
          'B) Grensefrekvensen halveres',
          'C) Grensefrekvensen forblir uendret',
          'D) Grensefrekvensen firedobles',
        ],
        solution: 'Riktig svar: B) Grensefrekvensen halveres. Siden fc = 1/(2π×R×C), er grensefrekvensen omvendt proporsjonal med R. Hvis R dobles, blir fc halvert. For å øke grensefrekvensen må du redusere R eller C.',
      },
    },

    // BLOKK 4: Praktiske anvendelser
    {
      id: 'elektro-data-vg1-18-def-4',
      type: 'definition',
      title: 'Praktiske filteranvendelser',
      content: `**Lydteknikk:**
- Lavpass (subwoofer): Slipper bare bassfrekvenser under ~200 Hz
- Høypass (diskant): Slipper bare høye frekvenser over ~2 kHz
- Båndpass (mellomtone): 200 Hz - 2 kHz

**Elektronikk:**
- Anti-aliasing filter: Lavpass før ADC for å unngå feil ved sampling
- Støyfiltrering: Lavpass for å fjerne høyfrekvent støy
- DC-blokkering: Høypass for å fjerne DC-komponent

**Kommunikasjon:**
- Båndpassfilter for å velge radiokanal
- Notch-filter for å fjerne interferens

**Filterorden:**
- 1. orden (enkel RC): -20 dB/dekade dempning
- 2. orden (to RC-ledd): -40 dB/dekade
- Høyere orden gir brattere overgang, men mer kompleks krets`,
    },
    {
      id: 'elektro-data-vg1-18-example-4',
      type: 'example',
      title: 'Designe filter for subwoofer',
      problem: 'Du skal lage et lavpassfilter for en subwoofer som skal spille frekvenser under 150 Hz. Du har en 1 µF kondensator tilgjengelig. Hvilken motstand trenger du?',
      solution: `**Gitt:**
- Ønsket grensefrekvens: fc = 150 Hz
- Kondensator: C = 1 µF = 0.000001 F

**Formel:** fc = 1 / (2π × R × C)

**Løs for R:**
R = 1 / (2π × fc × C)

**Beregning:**
R = 1 / (2 × 3.14159 × 150 × 0.000001)
R = 1 / (0.000942)
R ≈ 1061 Ω

**Svar:** Du trenger en motstand på ca. 1 kΩ (1000 Ω).

**Praktisk:** Bruk en 1 kΩ standardmotstand. Dette gir fc = 159 Hz, som er nær nok ønsket 150 Hz.`,
    },
    {
      id: 'elektro-data-vg1-18-ex-5',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-18-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor et høyttalersystem ofte bruker flere filtre (lavpass, båndpass, høypass) for ulike høyttalerelementer.',
        solution: `Et høyttalersystem bruker flere filtre fordi ulike høyttalerelementer er optimalisert for ulike frekvensområder:

**Subwoofer (lavpassfilter, f.eks. under 200 Hz):**
- Stor høyttaler designet for bassfrekvenser
- Lavpassfilteret sikrer at bare lave frekvenser sendes hit
- Ville forvrenge eller skades av høye frekvenser

**Mellomtone (båndpassfilter, f.eks. 200 Hz - 2 kHz):**
- Middels høyttaler for tale og hovedparten av musikken
- Båndpassfilteret blokkerer både veldig lave og veldig høye frekvenser

**Diskant (høypassfilter, f.eks. over 2 kHz):**
- Liten høyttaler for høye frekvenser
- Høypassfilteret fjerner lave frekvenser som ville overbelaste den lille høyttaleren

Denne oppdeling kalles crossover og sikrer at hver høyttaler bare håndterer frekvenser den er god til.`,
      },
    },
    {
      id: 'elektro-data-vg1-18-ex-6',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-18-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Du har et lydopptak med 50 Hz brumming fra strømnettet. Hvilken filtertype fjerner brummingen mest effektivt?',
        options: [
          'A) Lavpassfilter med fc = 100 Hz',
          'B) Høypassfilter med fc = 100 Hz',
          'C) Båndpassfilter sentrert på 50 Hz',
          'D) Båndstoppfilter (notch) på 50 Hz',
        ],
        solution: 'Riktig svar: D) Båndstoppfilter (notch) på 50 Hz. Et notch-filter fjerner kun frekvenser rundt 50 Hz og lar alle andre frekvenser passere uberørt. Et lavpassfilter ville også fjerne ønskede høye frekvenser i lyden, mens et høypassfilter ville fjerne all bass under 100 Hz. Notch-filteret er presist og fjerner bare den uønskede brummingen.',
      },
    },

    // BLOKK 5: Digitale filtre
    {
      id: 'elektro-data-vg1-18-def-5',
      type: 'definition',
      title: 'Digitale filtre',
      content: `**Digitale filtre** prosesserer signaler etter at de er konvertert til digitale verdier (via ADC).

**Fordeler med digitale filtre:**
- Perfekt repeterbarhet (ingen komponenttoleranser)
- Lett å endre parametre i software
- Kan lage filtre som er vanskelige analogt
- Ingen temperaturavhengighet

**Enkelt glidende gjennomsnitt:**
Enkel lavpassfiltrering ved å ta gjennomsnitt av flere verdier:
\`\`\`
output = (sample[n] + sample[n-1] + sample[n-2] + sample[n-3]) / 4
\`\`\`

**Arduino eksempel:**
\`\`\`cpp
int readings[10];
int index = 0;

int filter(int newValue) {
  readings[index] = newValue;
  index = (index + 1) % 10;
  int sum = 0;
  for (int i = 0; i < 10; i++) sum += readings[i];
  return sum / 10;
}
\`\`\``,
    },
    {
      id: 'elektro-data-vg1-18-example-5',
      type: 'example',
      title: 'Glidende gjennomsnitt som lavpassfilter',
      problem: 'Du har sensoravlesninger: 100, 150, 98, 145, 102. Beregn glidende gjennomsnitt med vindu på 3.',
      solution: `**Glidende gjennomsnitt med vindu 3:** Gjennomsnittet av de 3 siste verdiene.

| Måling | Verdier i vindu | Gjennomsnitt |
|--------|-----------------|--------------|
| 1: 100 | [100]           | 100          |
| 2: 150 | [100, 150]      | 125          |
| 3: 98  | [100, 150, 98]  | 116          |
| 4: 145 | [150, 98, 145]  | 131          |
| 5: 102 | [98, 145, 102]  | 115          |

**Analyse:**
- Originale verdier: 100, 150, 98, 145, 102 (varierer mye)
- Filtrerte verdier: 100, 125, 116, 131, 115 (jevnere)

**Effekt:** Filteret glatter ut raske svingninger (høye frekvenser) og beholder trenden (lave frekvenser). Dette er lavpassfiltrering i digital form.`,
    },
    {
      id: 'elektro-data-vg1-18-ex-7',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-18-ex-7',
        number: '7',
        type: 'classic',
        task: 'Nevn to fordeler med digitale filtre sammenlignet med analoge filtre.',
        solution: `Fordeler med digitale filtre:

1. **Perfekt repeterbarhet:** Digitale filtre gir identiske resultater hver gang, uten variasjoner fra komponenttoleranser. Analoge komponenter (motstander, kondensatorer) har alltid en viss toleranse (f.eks. ±5%) som gjør at to "like" analoge filtre vil oppføre seg litt forskjellig.

2. **Lett å endre parametre:** I et digitalt filter kan grensefrekvens og andre parametre endres ved å endre tall i software, uten fysiske endringer. I et analogt filter må du bytte komponenter for å endre karakteristikken.

Andre fordeler: Ingen temperaturavhengighet, kan lage komplekse filtertyper som er vanskelige analogt, ingen aldring av komponenter.`,
      },
    },

    // OPPSUMMERING
    {
      id: 'elektro-data-vg1-18-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapitlet har vi lært om signalbehandling og filtre:

**Signaler og frekvenser:**
- Frekvens (f) = antall svingninger per sekund (Hz)
- Periode (T) = 1/f
- Signaler kan inneholde mange frekvenser

**Fire filtertyper:**
- **Lavpass:** Slipper lave frekvenser, blokkerer høye
- **Høypass:** Slipper høye frekvenser, blokkerer lave
- **Båndpass:** Slipper et bestemt frekvensområde
- **Båndstopp:** Blokkerer et bestemt frekvensområde

**RC-filtre:**
- Bygges med motstand og kondensator
- Grensefrekvens: fc = 1/(2π×R×C)
- Ved fc er signalet dempet til 70.7% (-3 dB)

**Anvendelser:**
- Lydteknikk: Crossover for høyttalere
- Støyreduksjon: Fjerne uønskede frekvenser
- Kommunikasjon: Velge radiokanaler

**Digitale filtre:**
- Prosesserer signaler i software
- Fordeler: Repeterbarhet, justerbarhet, presisjon

Filtre er essensielle i nesten all elektronikk - fra mobiltelefoner til medisinsk utstyr.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Frekvens', definition: 'Antall svingninger per sekund, måles i Hertz (Hz).' },
    { term: 'Grensefrekvens', definition: 'Frekvensen hvor filterets utgang er -3 dB (70.7%) av inngangen.' },
    { term: 'Lavpassfilter', definition: 'Filter som slipper gjennom lave frekvenser og demper høye.' },
    { term: 'Høypassfilter', definition: 'Filter som slipper gjennom høye frekvenser og demper lave.' },
    { term: 'Båndpassfilter', definition: 'Filter som slipper gjennom et bestemt frekvensområde.' },
    { term: 'RC-filter', definition: 'Enkelt filter bygget med motstand (R) og kondensator (C).' },
  ],
};

export const CHAPTERS_ELEKTRO_DATA_VG1_PART1 = [
  CHAPTER_ELEKTRO_DATA_VG1_1,
  CHAPTER_ELEKTRO_DATA_VG1_2,
  CHAPTER_ELEKTRO_DATA_VG1_3,
  CHAPTER_ELEKTRO_DATA_VG1_4,
  CHAPTER_ELEKTRO_DATA_VG1_5,
  CHAPTER_ELEKTRO_DATA_VG1_6,
  CHAPTER_ELEKTRO_DATA_VG1_7,
  CHAPTER_ELEKTRO_DATA_VG1_8,
  CHAPTER_ELEKTRO_DATA_VG1_9,
  CHAPTER_ELEKTRO_DATA_VG1_10,
  CHAPTER_ELEKTRO_DATA_VG1_11,
  CHAPTER_ELEKTRO_DATA_VG1_12,
  CHAPTER_ELEKTRO_DATA_VG1_13,
  CHAPTER_ELEKTRO_DATA_VG1_14,
  CHAPTER_ELEKTRO_DATA_VG1_15,
  CHAPTER_ELEKTRO_DATA_VG1_16,
  CHAPTER_ELEKTRO_DATA_VG1_17,
  CHAPTER_ELEKTRO_DATA_VG1_18,
];
