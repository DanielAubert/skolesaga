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
  sections: [
    {
      title: 'Introduksjon til elektronikk',
      content: `## Introduksjon til elektronikk

Elektronikk handler om kontrollert strøm av elektroner i kretser og komponenter. Fra enkle lyspærer til avanserte datamaskiner – alt bygger på de samme grunnprinsippene. I dette kapittelet skal vi utforske de grunnleggende konseptene som danner fundamentet for alt elektronisk arbeid.

Elektronikk er en del av hverdagen vår. I en mobiltelefon, datamaskin, TV og til og med i moderne biler finner vi elektroniske kretser. For å kunne arbeide med elektronikk må vi først forstå hva elektrisitet er og hvordan den oppfører seg i kretser.`,
    },
    {
      title: 'Elektriske grunnbegreper',
      content: `## Elektriske grunnbegreper

**Spenning (U)**
Spenning måles i volt (V) og er forskjellen i elektrisk potensial mellom to punkter. Man kan tenke på spenning som "trykket" som driver elektronene gjennom en leder. Typiske spenninger vi møter er:
- Batteri: 1,5V, 9V
- Stikkontakt i hus: 230V
- USB-lader: 5V

**Strøm (I)**
Strøm måles i ampere (A) og er mengden elektroner som passerer et punkt per tidsenhet. Jo mer strøm, jo flere elektroner er i bevegelse. Vi skiller mellom:
- Likestrøm (DC): Strømmen går alltid i samme retning
- Vekselstrøm (AC): Strømmen skifter retning periodisk

**Motstand (R)**
Motstand måles i ohm (Ω) og er materialets evne til å motsette seg strøm. Alle materialer har en viss motstand. Ledere som kobber har lav motstand, isolatorer som plast har høy motstand.

**Effekt (P)**
Effekt måles i watt (W) og beskriver hvor mye energi som omsettes per tid. Effekt beregnes som: P = U × I`,
    },
    {
      title: 'Ohms lov',
      content: `## Ohms lov

Ohms lov er den mest grunnleggende sammenhengen i elektronikk. Den beskriver forholdet mellom spenning, strøm og motstand:

**U = I × R**

Der:
- U er spenning i volt (V)
- I er strøm i ampere (A)
- R er motstand i ohm (Ω)

**Praktisk bruk**
Hvis vi kjenner to av de tre størrelsene, kan vi beregne den tredje:
- I = U / R (strøm = spenning delt på motstand)
- R = U / I (motstand = spenning delt på strøm)

**Eksempel:**
En lysdiode trenger 2V spenning og 20mA strøm. Hva er motstanden?
R = U / I = 2V / 0,02A = 100Ω`,
    },
    {
      title: 'Elektroniske komponenter',
      content: `## Elektroniske komponenter

**Motstander**
Motstander begrenser strømmen i en krets. De kommer i faste verdier og har ofte fargekodet verdi (med fargebånd). Motstander brukes for å:
- Begrense strøm til komponenter
- Dele opp spenning
- Trekke signaler høyt eller lavt (pull-up/pull-down)

**Kondensatorer**
Kondensatorer lagrer elektrisk ladning. De består av to ledende plater med en isolator imellom. Kapasitans måles i farad (F), vanligvis mikrofarad (µF) eller pikofarad (pF). Brukes til:
- Jevne ut spenning
- Filtrere signaler
- Midlertidig energilagring

**Dioder**
Dioder lar strøm passere i kun én retning. LED (light-emitting diode) er en spesiell diode som lyser når strøm går gjennom den. Dioder brukes til:
- Ensretting av vekselstrøm
- Beskyttelse mot feil polaritet
- Indikatorlys (LED)

**Transistorer**
Transistorer kan forsterke signaler eller fungere som bryters. Den vanligste typen er bipolare transistorer (NPN og PNP) og felteffekttransistorer (MOSFET). Brukes til:
- Elektroniske brytere
- Signalforsterkning
- Digitale logiske kretser`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-1-ex-1',
      task: 'En krets har en spenning på 12V og en motstand på 4Ω. Beregn strømmen.',
      solution: 'Ved bruk av Ohms lov: I = U / R = 12V / 4Ω = 3A. Strømmen er 3 ampere.',
    },
    {
      id: 'elektro-data-vg1-1-ex-2',
      task: 'Hva er forskjellen på likestrøm (DC) og vekselstrøm (AC)?',
      solution: 'Likestrøm (DC) går alltid i samme retning, som i batterier. Vekselstrøm (AC) skifter retning periodisk, som i stikkontakter (230V i Norge). AC er lettere å transformere og transportere over lange avstander.',
    },
    {
      id: 'elektro-data-vg1-1-ex-3',
      task: 'En LED trenger 2V spenning og trekker 15mA strøm. Du har en 9V strømkilde. Hvilken motstand må du bruke i serie med LED for å beskytte den?',
      solution: 'Motstanden må ta opp differansen: 9V - 2V = 7V. Ved Ohms lov: R = U / I = 7V / 0,015A = 467Ω. Velg nærmeste standardverdi, f.eks. 470Ω.',
    },
    {
      id: 'elektro-data-vg1-1-ex-4',
      task: 'Beskriv hva en kondensator gjør i en elektronisk krets.',
      solution: 'En kondensator lagrer elektrisk ladning mellom to ledende plater. Den kan lade opp og utlade, og brukes til å jevne ut spenning, filtrere støy og lagre energi midlertidig. Kondensatoren slipper gjennom vekselstrøm men blokkerer likestrøm.',
    },
    {
      id: 'elektro-data-vg1-1-ex-5',
      task: 'Hvorfor er transistoren en så viktig komponent i elektronikk?',
      solution: 'Transistoren kan fungere både som forsterker og bryter. Den kan kontrollere stor strøm med et lite signal, og er grunnlaget for alle digitale kretser. I moderne prosessorer er det milliarder av transistorer som jobber sammen for å utføre beregninger.',
    },
  ],
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
  sections: [
    {
      title: 'Elektriske kretser',
      content: `## Elektriske kretser

En elektrisk krets er en lukket bane som strømmen kan gå gjennom. For at strøm skal kunne flyte, må kretsen være komplett – en brudd i kretsen stopper strømmen. Alle elektriske kretser består av:
- Spenningskilde (batteri, strømforsyning)
- Ledere (kabler, kobberstriper)
- Last (komponenter som bruker energi)
- Eventuelt brytere for kontroll

**Kretsdiagram**
Vi tegner kretser med symboler som representerer hver komponent. Dette kalles et kretsdiagram eller skjematisk diagram. Alle symbolene følger internasjonale standarder slik at alle forstår tegningene.`,
    },
    {
      title: 'Seriekobling',
      content: `## Seriekobling

I en seriekobling er komponentene koblet etter hverandre i en kjede. Strømmen må gå gjennom alle komponentene i tur og orden.

**Egenskaper ved seriekobling:**
- Samme strøm gjennom alle komponenter (I₁ = I₂ = I₃)
- Total spenning er summen av spenningene (Utot = U₁ + U₂ + U₃)
- Total motstand er summen av motstandene (Rtot = R₁ + R₂ + R₃)
- Hvis én komponent svikter, stopper hele kretsen

**Eksempel:**
Tre motstander på 100Ω, 200Ω og 300Ω i serie gir en total motstand på:
Rtot = 100Ω + 200Ω + 300Ω = 600Ω

**Bruksområder:**
- Lysdiodekjeder (julelys)
- Spenningsdeler
- Strømbegrensning`,
    },
    {
      title: 'Parallellkobling',
      content: `## Parallellkobling

I parallellkobling er komponentene koblet ved siden av hverandre. Strømmen fordeler seg mellom de ulike grenene.

**Egenskaper ved parallellkobling:**
- Samme spenning over alle komponenter (U₁ = U₂ = U₃)
- Total strøm er summen av strømmene (Itot = I₁ + I₂ + I₃)
- Total motstand beregnes: 1/Rtot = 1/R₁ + 1/R₂ + 1/R₃
- Hvis én komponent svikter, fortsetter resten å fungere

**Eksempel:**
To motstander på 100Ω parallellkoblet:
1/Rtot = 1/100Ω + 1/100Ω = 2/100Ω
Rtot = 50Ω

**Bruksområder:**
- Stikkontakter i hus
- Parallelle batterier (øker kapasitet)
- Redundante systemer`,
    },
    {
      title: 'Kombinerte kretser',
      content: `## Kombinerte kretser

I praksis møter vi ofte kretser som kombinerer serie- og parallellkobling. For å analysere slike kretser må vi:

1. Identifisere hvilke komponenter som er i serie og parallell
2. Beregne delsummer steg for steg
3. Forenkle kretsen gradvis
4. Bruke Ohms lov og Kirchhoffs lover

**Kirchhoffs lover:**

**1. Kirchhoffs strømlov (KCL)**
Total strøm inn i et knutepunkt er lik total strøm ut. Strøm kan verken oppstå eller forsvinne.
Σ Iinn = Σ Iut

**2. Kirchhoffs spenningslov (KVL)**
Summen av spenningsfall i en lukket krets er null. Energien som spenningskilden leverer brukes opp i kretsen.
Σ U = 0`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-2-ex-1',
      task: 'Tre motstander på 10Ω, 20Ω og 30Ω er koblet i serie med et 12V batteri. Beregn total motstand og strøm i kretsen.',
      solution: 'Rtot = 10Ω + 20Ω + 30Ω = 60Ω. Strøm: I = U/R = 12V/60Ω = 0,2A = 200mA. Total motstand er 60Ω og strømmen er 200mA.',
    },
    {
      id: 'elektro-data-vg1-2-ex-2',
      task: 'To motstander på 50Ω og 150Ω er parallellkoblet over en 9V spenningskilde. Beregn total motstand og strøm fra kilden.',
      solution: '1/Rtot = 1/50 + 1/150 = 3/150 + 1/150 = 4/150. Rtot = 150/4 = 37,5Ω. Strøm: I = 9V/37,5Ω = 0,24A = 240mA.',
    },
    {
      id: 'elektro-data-vg1-2-ex-3',
      task: 'Forklar fordelen med parallellkobling av lys i et hus fremfor seriekobling.',
      solution: 'I parallellkobling får alle lysene samme spenning (230V) og fungerer uavhengig av hverandre. Hvis én lyspære går, fungerer resten fortsatt. I seriekobling ville alle lysene bli mørkere når man legger til flere, og hvis én går vil alle slukke.',
    },
    {
      id: 'elektro-data-vg1-2-ex-4',
      task: 'En 100Ω motstand og en 200Ω motstand er i serie, koblet parallellt med en 300Ω motstand. Tegn kretsen og beregn total motstand.',
      solution: 'Serie: 100Ω + 200Ω = 300Ω. Denne 300Ω motstanden er parallell med den andre 300Ω motstanden: 1/Rtot = 1/300 + 1/300 = 2/300. Rtot = 150Ω.',
    },
    {
      id: 'elektro-data-vg1-2-ex-5',
      task: 'Hva sier Kirchhoffs strømlov, og gi et praktisk eksempel.',
      solution: 'Kirchhoffs strømlov sier at total strøm inn i et knutepunkt er lik total strøm ut. Eksempel: Hvis 2A kommer inn i et knutepunkt og deler seg i to grener, kan det være 1,3A i den ene grenen og 0,7A i den andre. Summen er fortsatt 2A.',
    },
    {
      id: 'elektro-data-vg1-2-ex-6',
      task: 'Tegn kretsdiagram for en enkel krets med batteri, bryter, motstand og LED i serie.',
      solution: 'Kretsen tegnes med symbolene: Batteri (to streker, lang positiv), bryter (åpen/lukket gap), motstand (sikksakk-linje), LED (trekant med pil), og ledninger som forbinder alt i en lukket sløyfe.',
    },
  ],
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
  sections: [
    {
      title: 'Analoge og digitale signaler',
      content: `## Analoge og digitale signaler

**Analoge signaler**
Et analogt signal kan ha hvilken som helst verdi innenfor et område. Temperaturen utendørs er analog – den kan være 15,3°C eller 15,4°C eller enhver verdi imellom. Lysstyrke, lydvolum og vekt er andre eksempler på analoge størrelser.

**Digitale signaler**
Et digitalt signal har bare to nivåer: På eller Av, Høy eller Lav, 1 eller 0. Dette kalles binære signaler. Moderne datamaskiner bruker digitale signaler fordi de er:
- Lettere å behandle
- Mer motstandsdyktige mot støy
- Enklere å lagre og kopiere
- Kan representere all type informasjon

**Spenningsnivåer**
I digital elektronikk bruker vi vanligvis:
- Logisk 0: 0V til 0,8V (lav)
- Logisk 1: 2V til 5V (høy)
Området imellom er ubestemt og skal unngås.`,
    },
    {
      title: 'Tallsystemer',
      content: `## Tallsystemer

**Binært tallsystem (base 2)**
Binære tall bruker bare sifrene 0 og 1. Hver posisjon representerer en potens av 2:
- 1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 11₁₀

**Heksadesimalt tallsystem (base 16)**
Heksadesimale tall bruker sifrene 0-9 og A-F (A=10, B=11, C=12, D=13, E=14, F=15).
Fire binære siffer tilsvarer ett heksadesimalt siffer:
- 1011₂ = B₁₆
- FF₁₆ = 255₁₀ = 11111111₂

**Konvertering**
Å kunne konvertere mellom tallsystemer er viktig i programmering og elektronikk:
- Binær til desimal: Multipliser hver bit med dens potensvekt og summer
- Desimal til binær: Del på 2 gjentatte ganger og les restene baklengs`,
    },
    {
      title: 'Logiske porter',
      content: `## Logiske porter

Logiske porter er grunnelementene i digital elektronikk. De tar inn digitale signaler og produserer et digitalt signal ut basert på logiske regler.

**AND-port (OG)**
Utgangen er 1 bare hvis ALLE inngangene er 1.
- 0 AND 0 = 0
- 0 AND 1 = 0
- 1 AND 0 = 0
- 1 AND 1 = 1

**OR-port (ELLER)**
Utgangen er 1 hvis MINST ÉN inngang er 1.
- 0 OR 0 = 0
- 0 OR 1 = 1
- 1 OR 0 = 1
- 1 OR 1 = 1

**NOT-port (IKKE)**
Inverterer signalet (snur det).
- NOT 0 = 1
- NOT 1 = 0

**NAND-port (NOT-AND)**
Motsatt av AND. Utgangen er 0 bare hvis alle inngangene er 1.

**NOR-port (NOT-OR)**
Motsatt av OR. Utgangen er 1 bare hvis alle inngangene er 0.

**XOR-port (Eksklusiv OR)**
Utgangen er 1 hvis inngangene er FORSKJELLIGE.
- 0 XOR 0 = 0
- 0 XOR 1 = 1
- 1 XOR 0 = 1
- 1 XOR 1 = 0`,
    },
    {
      title: 'Boolsk algebra',
      content: `## Boolsk algebra

Boolsk algebra er matematikken bak digital logikk. Den ble utviklet av George Boole på 1800-tallet.

**Grunnleggende lover:**

**Kommutativ lov:**
- A AND B = B AND A
- A OR B = B OR A

**Assosiativ lov:**
- (A AND B) AND C = A AND (B AND C)
- (A OR B) OR C = A OR (B OR C)

**Distributiv lov:**
- A AND (B OR C) = (A AND B) OR (A AND C)

**De Morgans lover:**
- NOT(A AND B) = (NOT A) OR (NOT B)
- NOT(A OR B) = (NOT A) AND (NOT B)

Disse lovene brukes til å forenkle logiske uttrykk og optimalisere digitale kretser.`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-3-ex-1',
      task: 'Konverter binærtallet 1101₂ til desimalt tall.',
      solution: '1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 8 + 4 + 0 + 1 = 13₁₀. Svaret er 13.',
    },
    {
      id: 'elektro-data-vg1-3-ex-2',
      task: 'Lag en sannhetstabell for en AND-port med to innganger A og B.',
      solution: 'A | B | Utgang\n0 | 0 | 0\n0 | 1 | 0\n1 | 0 | 0\n1 | 1 | 1\n\nUtgangen er 1 bare når både A og B er 1.',
    },
    {
      id: 'elektro-data-vg1-3-ex-3',
      task: 'Forklar forskjellen mellom en OR-port og en XOR-port.',
      solution: 'OR-porten gir 1 hvis minst én inngang er 1 (inkludert når begge er 1). XOR-porten gir 1 bare når inngangene er FORSKJELLIGE. OR: 1+1=1, XOR: 1+1=0.',
    },
    {
      id: 'elektro-data-vg1-3-ex-4',
      task: 'Konverter desimaltallet 25 til binært.',
      solution: '25 ÷ 2 = 12 rest 1\n12 ÷ 2 = 6 rest 0\n6 ÷ 2 = 3 rest 0\n3 ÷ 2 = 1 rest 1\n1 ÷ 2 = 0 rest 1\n\nLes restene baklengs: 25₁₀ = 11001₂',
    },
    {
      id: 'elektro-data-vg1-3-ex-5',
      task: 'Du skal lage en krets som aktiverer en alarm hvis ENTEN døren ELLER vinduet åpnes. Hvilken logisk port trenger du?',
      solution: 'Du trenger en OR-port. Dørsensor og vindussensor er inngangene. Hvis minst én av dem er aktivert (1), skal alarmen gå (utgang = 1). OR-porten gir akkurat denne funksjonen.',
    },
  ],
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
  sections: [
    {
      title: 'Hva er programmering?',
      content: `## Hva er programmering?

Programmering er å gi instruksjoner til en datamaskin. En datamaskin er ekstremt rask til å utføre enkle operasjoner, men den trenger nøyaktige instruksjoner for hva den skal gjøre. Et program er en samling slike instruksjoner.

**Hvorfor lære programmering?**
- Automatisere repetitive oppgaver
- Kontrollere elektroniske systemer
- Løse komplekse problemer
- Lage produkter og tjenester
- Forstå teknologien rundt oss

**Programmeringsspråk**
Det finnes hundrevis av programmeringsspråk. Noen vanlige er:
- Python: Lett å lære, allsidig bruk
- JavaScript: Nettsider og webapper
- C/C++: Embedded systemer, spill, ytelse
- Java: Store systemer, Android-apper

I elektro bruker vi ofte C/C++ eller Python til å programmere mikrokontrollere.`,
    },
    {
      title: 'Variabler og datatyper',
      content: `## Variabler og datatyper

**Variabler**
En variabel er et navngitt sted i minnet hvor vi kan lagre data. Vi kan tenke på det som en boks med en etikett. Variabelen har:
- Et navn (f.eks. temperatur)
- En verdi (f.eks. 22.5)
- En datatype (f.eks. desimaltall)

**Grunnleggende datatyper:**

**Heltall (integer/int)**
Tall uten desimaler: -2, 0, 42, 1000

**Desimaltall (float/double)**
Tall med desimaler: 3.14, -0.5, 22.7

**Tekst (string)**
Tekst i anførselstegn: "Hei", "Arduino", "Sensor aktivert"

**Boolske verdier (boolean/bool)**
Sant eller usant: true/false, 1/0

**Eksempel (Python):**
\`\`\`python
temperatur = 22.5  # Desimaltall
navn = "Arduino"   # Tekst
aktivert = True    # Boolsk
teller = 0         # Heltall
\`\`\``,
    },
    {
      title: 'Operatorer og uttrykk',
      content: `## Operatorer og uttrykk

**Aritmetiske operatorer:**
- \`+\` Addisjon: 5 + 3 = 8
- \`-\` Subtraksjon: 5 - 3 = 2
- \`*\` Multiplikasjon: 5 * 3 = 15
- \`/\` Divisjon: 6 / 2 = 3
- \`%\` Modulo (rest): 7 % 3 = 1

**Sammenligningsoperatorer:**
- \`==\` Lik: 5 == 5 er sant
- \`!=\` Ulik: 5 != 3 er sant
- \`>\` Større enn: 5 > 3 er sant
- \`<\` Mindre enn: 5 < 3 er usant
- \`>=\` Større eller lik
- \`<=\` Mindre eller lik

**Logiske operatorer:**
- \`and\` (&&): Sant hvis begge er sanne
- \`or\` (||): Sant hvis minst én er sann
- \`not\` (!): Snur verdien

**Eksempel:**
\`\`\`python
alder = 17
har_lappen = False
kan_kjore = (alder >= 18) and har_lappen
# kan_kjore blir False fordi alder < 18
\`\`\``,
    },
    {
      title: 'Kontrollstrukturer',
      content: `## Kontrollstrukturer

**If-setninger**
If-setninger lar programmet ta beslutninger.

\`\`\`python
temperatur = 25

if temperatur > 30:
    print("Veldig varmt!")
elif temperatur > 20:
    print("Behagelig")
else:
    print("Kaldt")
\`\`\`

**Løkker**
Løkker gjentar kode flere ganger.

**For-løkke** (kjent antall gjentagelser):
\`\`\`python
for i in range(5):
    print(i)  # Skriver ut 0, 1, 2, 3, 4
\`\`\`

**While-løkke** (fortsetter mens betingelse er sann):
\`\`\`python
teller = 0
while teller < 5:
    print(teller)
    teller = teller + 1
\`\`\`

**Praktisk eksempel:**
\`\`\`python
# Les sensor til verdien er under 100
verdi = les_sensor()
while verdi >= 100:
    vent(100)  # Vent 100ms
    verdi = les_sensor()
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-4-ex-1',
      task: 'Skriv et program som beregner arealet av et rektangel med lengde 5 og bredde 3.',
      solution: 'lengde = 5\nbredde = 3\nareal = lengde * bredde\nprint("Arealet er:", areal)\n\nOutput: Arealet er: 15',
    },
    {
      id: 'elektro-data-vg1-4-ex-2',
      task: 'Lag en if-setning som sjekker om et tall er positivt, negativt eller null.',
      solution: 'tall = -5\n\nif tall > 0:\n    print("Positivt")\nelif tall < 0:\n    print("Negativt")\nelse:\n    print("Null")',
    },
    {
      id: 'elektro-data-vg1-4-ex-3',
      task: 'Skriv en for-løkke som skriver ut alle partall fra 0 til 10.',
      solution: 'for i in range(0, 11, 2):\n    print(i)\n\nEller:\n\nfor i in range(11):\n    if i % 2 == 0:\n        print(i)\n\nOutput: 0, 2, 4, 6, 8, 10',
    },
    {
      id: 'elektro-data-vg1-4-ex-4',
      task: 'Hva er forskjellen mellom en for-løkke og en while-løkke?',
      solution: 'En for-løkke brukes når vi vet på forhånd hvor mange ganger koden skal gjentas. En while-løkke brukes når vi skal gjenta kode til en betingelse ikke lenger er oppfylt, og vi vet ikke på forhånd hvor mange ganger det blir.',
    },
    {
      id: 'elektro-data-vg1-4-ex-5',
      task: 'Skriv et program som teller ned fra 10 til 1, og så skriver "Start!".',
      solution: 'for i in range(10, 0, -1):\n    print(i)\nprint("Start!")\n\nOutput: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Start!',
    },
    {
      id: 'elektro-data-vg1-4-ex-6',
      task: 'Lag et program som leser en temperatur og gir beskjed hvis den er utenfor området 18-25 grader.',
      solution: 'temperatur = 30  # Eksempelverdi\n\nif temperatur < 18:\n    print("For kaldt!")\nelif temperatur > 25:\n    print("For varmt!")\nelse:\n    print("Temperatur OK")',
    },
  ],
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
  sections: [
    {
      title: 'Introduksjon til nettverk',
      content: `## Introduksjon til nettverk

Et nettverk er to eller flere enheter koblet sammen for å dele informasjon og ressurser. Nettverk finnes overalt i moderne samfunn – fra det lokale nettverket hjemme til det globale internett.

**Hvorfor nettverk?**
- Dele ressurser (skrivere, filer)
- Kommunikasjon (e-post, chat, videosamtaler)
- Samarbeid og informasjonsdeling
- Fjernstyring av systemer
- Overvåking og datainnsamling

**Nettverkstyper:**

**PAN (Personal Area Network)**
Veldig kort rekkevidde, typisk Bluetooth-enheter rundt én person.

**LAN (Local Area Network)**
Lokalt nettverk, f.eks. hjemme eller på en skole. Dekker vanligvis én bygning.

**WAN (Wide Area Network)**
Stort nettverk over store geografiske avstander. Internett er det største WAN.`,
    },
    {
      title: 'Nettverkstopologier',
      content: `## Nettverkstopologier

Topologi beskriver hvordan enheter er koblet sammen i et nettverk.

**Stjernetopologi**
Alle enheter kobles til en sentral enhet (switch/router). Hvis én enhet feiler, påvirker det ikke de andre. Men hvis den sentrale enheten feiler, stopper hele nettverket.

**Busstopologi**
Alle enheter kobles til én felles kabel (buss). Enkel og billig, men hele nettverket feiler hvis kabelen ryker.

**Ringtopologi**
Enheter kobles i en ring. Data går i én retning. Sjelden brukt i moderne nettverk.

**Mesh-topologi**
Enheter har flere forbindelser til hverandre. Veldig pålitelig – hvis én kobling feiler, finnes alternative veier. Brukes i trådløse sensornett.`,
    },
    {
      title: 'OSI-modellen og TCP/IP',
      content: `## OSI-modellen og TCP/IP

**OSI-modellen**
OSI (Open Systems Interconnection) er en modell med 7 lag som beskriver hvordan data sendes over nettverk:

1. **Fysisk lag**: Elektriske signaler, kabler, radiobølger
2. **Datalinklag**: MAC-adresser, rammehåndtering
3. **Nettverkslag**: IP-adresser, ruting
4. **Transportlag**: TCP/UDP, pålitelighet
5. **Sesjonslag**: Oppretthold forbindelser
6. **Presentasjonslag**: Datakoding, kryptering
7. **Applikasjonslag**: HTTP, FTP, e-post

**TCP/IP-modellen**
I praksis brukes TCP/IP-modellen med 4 lag:
1. Nettverkslag (fysisk + datalink)
2. Internettlag (IP)
3. Transportlag (TCP/UDP)
4. Applikasjonslag (HTTP, FTP, etc.)

**IP-adresser**
IPv4: 192.168.1.1 (4 tall 0-255)
IPv6: 2001:0db8:85a3::8a2e:0370:7334 (lengre format, flere adresser)

**TCP vs UDP:**
- TCP: Pålitelig, garantert levering, tregere
- UDP: Raskere, ingen garantier, brukes for streaming`,
    },
    {
      title: 'Trådløs kommunikasjon',
      content: `## Trådløs kommunikasjon

**Wi-Fi (IEEE 802.11)**
Trådløst LAN. Standard for hjemme- og bedriftsnettverk.
- Frekvens: 2,4 GHz og 5 GHz
- Rekkevidde: 30-100m innendørs
- Hastighet: Opp til flere Gbps (Wi-Fi 6/7)

**Bluetooth**
Kort-rekkvidde trådløs kommunikasjon.
- Rekkevidde: 10-100m
- Lavt strømforbruk
- Brukes til headset, sensorer, smartklokker

**Zigbee**
Lavt strømforbruk, mesh-nettverk.
- Smarthus-enheter
- Industrielle sensornett
- Lang batterilevetid

**LoRa/LoRaWAN**
Lang rekkevidde, lavt strømforbruk.
- Rekkevidde: 2-15 km
- IoT-sensorer i landbruket
- Smart bykommunikasjon

**NFC (Near Field Communication)**
Veldig kort rekkevidde (få cm).
- Kontaktløs betaling
- Adgangskontroll
- Smarttelefon-paring`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-5-ex-1',
      task: 'Hva er forskjellen mellom LAN og WAN?',
      solution: 'LAN (Local Area Network) er et lokalt nettverk som dekker et begrenset område som et hjem eller kontor. WAN (Wide Area Network) dekker store geografiske områder og kan forbinde flere LAN. Internett er det største eksemplet på WAN.',
    },
    {
      id: 'elektro-data-vg1-5-ex-2',
      task: 'Forklar fordelen med stjernetopologi sammenlignet med busstopologi.',
      solution: 'I stjernetopologi påvirker ikke feil på én enhet de andre enhetene. I busstopologi vil et brudd på hovedkabelen ta ned hele nettverket. Stjernetopologi er også lettere å feilsøke og utvide.',
    },
    {
      id: 'elektro-data-vg1-5-ex-3',
      task: 'Hva er en IP-adresse, og hvorfor trenger vi den?',
      solution: 'En IP-adresse er en unik identifikator for hver enhet på et nettverk, som en postadresse. Vi trenger IP-adresser for at data skal finne riktig vei til riktig enhet. IPv4-format: 192.168.1.1',
    },
    {
      id: 'elektro-data-vg1-5-ex-4',
      task: 'Når vil du velge Bluetooth fremfor Wi-Fi?',
      solution: 'Bluetooth er bedre for kort-rekkvidde kommunikasjon mellom få enheter med lavt strømforbruk, som trådløse hodetelefoner eller sensorer. Wi-Fi er bedre for høyere hastigheter, flere enheter og tilkobling til internett.',
    },
    {
      id: 'elektro-data-vg1-5-ex-5',
      task: 'Forklar forskjellen mellom TCP og UDP.',
      solution: 'TCP (Transmission Control Protocol) garanterer at alle data kommer frem i riktig rekkefølge, men er tregere. UDP (User Datagram Protocol) sender data raskt uten garantier, og brukes til streaming og spill hvor hastighet er viktigere enn perfekt levering.',
    },
  ],
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
  sections: [
    {
      title: 'Energi og effekt',
      content: `## Energi og effekt

**Elektrisk energi**
Energi er evnen til å utføre arbeid. Elektrisk energi er energi lagret i elektriske felter eller transportert av elektrisk strøm. Energi måles i joule (J) eller kilowattimer (kWh).

**1 kWh = 3 600 000 J = 3,6 MJ**

Kilowattimen (kWh) er den praktiske enheten vi ser på strømregningen.

**Elektrisk effekt**
Effekt er hvor raskt energi omsettes. Effekt måles i watt (W).

**P = U × I**
- P = effekt i watt (W)
- U = spenning i volt (V)
- I = strøm i ampere (A)

**Eksempel:**
En stekeovn koblet til 230V som trekker 10A:
P = 230V × 10A = 2300W = 2,3 kW

**Energi = Effekt × Tid**
E = P × t

Hvis stekeovnen går i 2 timer:
E = 2,3 kW × 2 h = 4,6 kWh`,
    },
    {
      title: 'Energiproduksjon',
      content: `## Energiproduksjon

**Vannkraft**
Norges viktigste energikilde. Vann renner ned fra høye steder og driver turbiner som driver generatorer.
- Fornybar
- Ingen utslipp
- Fleksibel (kan reguleres etter behov)
- Ca. 90% av norsk strømproduksjon

**Vindkraft**
Vinden driver turbinblader som driver generatorer.
- Fornybar
- Ingen utslipp
- Variabel produksjon
- Økende andel i Norge

**Solenergi**
Solceller konverterer sollys direkte til elektrisitet (fotovoltaisk effekt).
- Fornybar
- Ingen utslipp
- Variabel (avhengig av vær og tid på døgnet)
- Økende bruk i Norge

**Fossil energi**
Kull, olje, gass brennes for å varme vann til damp som driver turbiner.
- Ikke fornybar
- CO2-utslipp
- Pålitelig
- Brukes mye globalt, lite i Norge

**Kjernekraft**
Atomkjerner spaltes og frigjør varme som driver turbiner.
- Ikke fornybar (uran)
- Ingen CO2-utslipp
- Høy effekt
- Brukes ikke i Norge`,
    },
    {
      title: 'Kraftoverføring',
      content: `## Kraftoverføring

**Transformatorer**
For å transportere kraft over lange avstander bruker vi høy spenning. Transformatorer øker eller senker spenning.

**Fordeler med høy spenning:**
- Lavere strøm ved samme effekt (P = U × I)
- Mindre tap i ledningene (tap = I² × R)
- Tynnere kabler kan brukes

**Spenningsnivåer:**
- Produksjon: 10-25 kV
- Overføring: 132-420 kV (høyspent)
- Distribusjon: 11-22 kV
- Husholdning: 230V (lav spent)

**Kraftnettet**
Norge har et sammenkoblet kraftnett som distribuerer strøm fra kraftverk til forbrukere.
- Sentralnett: Hovedlinjer med høyeste spenning
- Regionalnett: Distribuerer til fylker og kommuner
- Distribusjonsnett: Leverer til sluttbrukere

**Tap i nettet**
Omtrent 7-10% av energien går tapt som varme i ledninger og transformatorer.`,
    },
    {
      title: 'Energiforbruk',
      content: `## Energiforbruk

**Typisk forbruk i en norsk husholdning:**
- Oppvarming: 40-50%
- Varmtvann: 15-20%
- Hvitevarer: 10-15%
- Elektriske apparater: 15-20%
- Belysning: 5-10%

**Forbruk av vanlige apparater:**
- LED-pære (10W): 0,01 kW
- Datamaskin (100W): 0,1 kW
- TV (150W): 0,15 kW
- Kjøleskap (100W snitt): 0,1 kW
- Varmepumpe (1000W): 1 kW
- Stekeovn (2000W): 2 kW
- Elbil-lading (11 kW): 11 kW

**Beregning av strømkostnad:**
Kostnad = Energi (kWh) × Pris (kr/kWh)

Eksempel: TV på 150W som går 4 timer daglig:
- Per dag: 0,15 kW × 4 h = 0,6 kWh
- Per måned (30 dager): 0,6 kWh × 30 = 18 kWh
- Kostnad (pris 1,50 kr/kWh): 18 kWh × 1,50 kr = 27 kr/mnd`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-6-ex-1',
      task: 'En lyspære på 60W er på i 5 timer. Hvor mye energi bruker den i kWh?',
      solution: 'Energi = Effekt × Tid = 0,06 kW × 5 h = 0,3 kWh. Lyspæren bruker 0,3 kilowattimer.',
    },
    {
      id: 'elektro-data-vg1-6-ex-2',
      task: 'Beregn effekten til en vannkoker koblet til 230V som trekker 8A.',
      solution: 'P = U × I = 230V × 8A = 1840W = 1,84 kW. Vannkokeren har en effekt på 1840 watt.',
    },
    {
      id: 'elektro-data-vg1-6-ex-3',
      task: 'Hvorfor bruker vi høy spenning for å transportere kraft over lange avstander?',
      solution: 'Ved høy spenning kan vi bruke lavere strøm for samme effekt (P=U×I). Lavere strøm gir mindre tap i ledningene fordi tap = I²×R. Dermed sparer vi energi og kan bruke tynnere kabler.',
    },
    {
      id: 'elektro-data-vg1-6-ex-4',
      task: 'En husholdning bruker 20 kWh på en dag. Strømprisen er 1,20 kr/kWh. Hva koster strømmen for denne dagen?',
      solution: 'Kostnad = 20 kWh × 1,20 kr/kWh = 24 kroner. Strømmen koster 24 kr for denne dagen.',
    },
    {
      id: 'elektro-data-vg1-6-ex-5',
      task: 'Nevn to fordeler og en ulempe med vannkraft som energikilde.',
      solution: 'Fordeler: 1) Fornybar og bærekraftig, 2) Ingen CO2-utslipp under drift. Ulempe: Påvirker natur og vassdrag, dambygging kan ødelegge økosystemer.',
    },
  ],
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
  sections: [
    {
      title: 'HMS - Helse, miljø og sikkerhet',
      content: `## HMS - Helse, miljø og sikkerhet

HMS handler om å ivareta helse, miljø og sikkerhet på arbeidsplassen. I elektriske fag er dette spesielt viktig fordi feil kan ha alvorlige konsekvenser.

**Hvorfor HMS?**
- Forebygge ulykker og skader
- Sikre et godt arbeidsmiljø
- Beskytte miljøet
- Overholde lovverk
- Redusere kostnader ved skader og sykefravær

**HMS-regelverket**
- Arbeidsmiljøloven
- Forskrift om sikkerhet og helse i byggverk (SHA)
- Internkontrollforskriften
- Forskrift om elektriske lavspenningsanlegg (FEL)

**Ansvar**
- Arbeidsgiver har hovedansvaret for HMS
- Arbeidstaker har plikt til å følge HMS-regler
- Verneombud skal sikre at HMS ivaretas`,
    },
    {
      title: 'Elektriske farer',
      content: `## Elektriske farer

**Strømgjennomgang**
Når strøm går gjennom kroppen kan det gi:
- Muskelkramper (kan ikke slippe tak)
- Hjertestans (ved strøm gjennom hjertet)
- Forbrenninger (både utvendig og innvendig)
- Åndedrettsstans

**Farlige spenninger**
- Over 50V AC eller 120V DC regnes som farlig
- 230V i stikkontakt kan være dødelig
- Fare avhenger av strømstyrke, varighet og strømvei

**Strømvei**
Farligst når strømmen går gjennom hjertet:
- Hånd til hånd (tvers gjennom brystkassen)
- Hånd til fot
Minst farlig fra fot til fot.

**Faktorer som påvirker fare:**
- Fuktig hud leder bedre enn tørr
- Metallgjenstander (ringer, klokke) øker fare
- Varighet – jo lengre, jo farligere`,
    },
    {
      title: 'Sikre arbeidsmetoder',
      content: `## Sikre arbeidsmetoder

**De 5 sikkerhetsreglene**
Ved arbeid på elektriske anlegg:

1. **Koble fra**: Bryt all spenning til anlegget
2. **Sikre mot innkobling**: Lås eller merk brytere
3. **Kontroller spenningsfriheten**: Bruk spenningssøker
4. **Jord og kortslut**: På høyspente anlegg
5. **Dekk til eller skjerm**: Nærliggende spenningssatte deler

**Personlig verneutstyr (PVU)**
- Hjelm: Beskytter mot fall og støt
- Vernesko: Støttøtte, sklisikre
- Vernebriller: Ved boring, saging, sliping
- Hørselsvern: Ved støyende arbeid
- Hansker: Isolerende eller mekanisk beskyttelse
- Verneklær: Flammehemmende ved nødvendig

**Arbeid under spenning**
Kun fagfolk med spesiell opplæring kan arbeide på anlegg under spenning. Krever:
- Autorisasjon
- Spesialverktøy (isolert)
- Skriftlig arbeidstillatelse`,
    },
    {
      title: 'Førstehjelp',
      content: `## Førstehjelp

**Ved strømulykke:**
1. Sikre situasjonen – IKKE berør skadelidte hvis de fortsatt er i kontakt med strømkilde
2. Koble fra strømmen
3. Ring 113
4. Start førstehjelp

**Hjerte-lungeredning (HLR)**
Ved hjertestans:
1. Sjekk bevissthet og pust
2. Ring 113
3. Start hjertekompresjoner: 30 kompresjoner, 2 innblåsninger
4. Bruk hjertestarter (AED) hvis tilgjengelig
5. Fortsett til ambulanse kommer

**Behandling av forbrenninger:**
1. Fjern person fra varmekilden
2. Fjern klær (hvis de ikke sitter fast)
3. Kjøl med lunkent vann i 20 minutter
4. Dekk med ren duk
5. Søk legehjelp ved alvorlige brannsår

**Husk:**
- Du har ikke ansvar for å kunne alt
- Ring 113 så fort som mulig
- Gjør det du kan – det er bedre enn ingenting`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-7-ex-1',
      task: 'Hva står HMS for, og hvorfor er det viktig?',
      solution: 'HMS står for Helse, Miljø og Sikkerhet. Det er viktig for å forebygge ulykker og skader, sikre et godt arbeidsmiljø, beskytte miljøet, overholde lovverk, og redusere kostnader ved skader og sykefravær.',
    },
    {
      id: 'elektro-data-vg1-7-ex-2',
      task: 'Nevn de 5 sikkerhetsreglene ved arbeid på elektriske anlegg.',
      solution: '1. Koble fra all spenning, 2. Sikre mot innkobling, 3. Kontroller spenningsfriheten, 4. Jord og kortslut (høyspent), 5. Dekk til eller skjerm nærliggende spenningssatte deler.',
    },
    {
      id: 'elektro-data-vg1-7-ex-3',
      task: 'Hvorfor er strøm fra hånd til hånd farligere enn fra fot til fot?',
      solution: 'Strøm fra hånd til hånd går tvers gjennom brystkassen og hjertet, og kan forårsake hjertestans. Strøm fra fot til fot går ikke gjennom de vitale organene og er derfor mindre farlig.',
    },
    {
      id: 'elektro-data-vg1-7-ex-4',
      task: 'Hva skal du gjøre først hvis du finner en person som har fått strømsjokk?',
      solution: 'SIKRE SITUASJONEN! Ikke berør personen hvis de fortsatt er i kontakt med strømkilden. Koble fra strømmen først, eller bruk et ikke-ledende materiale til å flytte personen vekk fra strømkilden. Deretter ring 113 og start førstehjelp.',
    },
  ],
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
  sections: [
    {
      title: 'Måleinstrumenter',
      content: `## Måleinstrumenter

Målinger er grunnleggende i elektroarbeid. Vi må kunne måle spenning, strøm, motstand og andre størrelser for å:
- Kontrollere at anlegg fungerer
- Finne feil
- Verifisere beregninger
- Dokumentere arbeid

**Multimeter**
Det mest brukte måleinstrumentet. Kan måle:
- Spenning (volt) – både AC og DC
- Strøm (ampere) – både AC og DC
- Motstand (ohm)
- Ofte også kontinuitet (piping ved gjennomgang)
- Noen kan måle kapasitans, frekvens, temperatur

**Digitale vs analoge**
- Digitale: Viser tall på skjerm, mer nøyaktige
- Analoge: Viser på skala med nål, lettere å se trender

**Klemmetang**
Måler strøm uten å bryte kretsen. Klemmes rundt en leder og måler magnetfeltet som strømmen skaper.`,
    },
    {
      title: 'Måling av spenning',
      content: `## Måling av spenning

Spenning måles parallellt med komponenten eller mellom to punkter.

**Fremgangsmåte:**
1. Velg riktig måleområde (hvis ikke autorange)
2. Koble rødt kabel til V/Ω-inngangen
3. Koble svart kabel til COM (common/masse)
4. Berør målepunktene med probene
5. Les av verdien

**Spenningsfall**
Spenningen over en komponent kalles spenningsfall. Ifølge Kirchhoffs spenningslov er summen av alle spenningsfall i en krets lik kildespenningen.

**Viktig:**
- Velg AC eller DC riktig
- Vær forsiktig med høye spenninger
- Sjekk at multimeteret tåler spenningen du måler
- Ved høyspenning: Bruk spesialutstyr`,
    },
    {
      title: 'Måling av strøm',
      content: `## Måling av strøm

Strøm måles i serie med kretsen – multimeteret må være en del av strømveien.

**Fremgangsmåte:**
1. Koble FRA spenningen
2. Bryt kretsen der du vil måle
3. Koble multimeteret i serie (i det brukne punktet)
4. Velg riktig måleområde (A eller mA)
5. Koble rødt kabel til A- eller mA-inngangen
6. Koble svart kabel til COM
7. Koble TIL spenningen
8. Les av verdien

**Med klemmetang:**
1. Velg AC eller DC
2. Klem rundt én leder
3. Les av verdien

Klemmetang er raskere og tryggere, men mindre nøyaktig på lave strømmer.

**Viktig:**
- Pass på at multimeteret tåler strømmen
- Bruk riktig inngang (mA for små strømmer, A for store)
- For høye strømmer kan ødelegge multimeteret`,
    },
    {
      title: 'Måling av motstand',
      content: `## Måling av motstand

Motstand måles på en komponent som IKKE er koblet til en krets under spenning.

**Fremgangsmåte:**
1. Koble FRA all spenning
2. Løft ut komponenten eller kople den fra kretsen (minst én side)
3. Velg motstandsmåling (Ω)
4. Koble probene til komponentens ender
5. Les av verdien

**Kontinuitet**
Kontinuitetstest sjekker om det er gjennomgang. Multimeteret piper hvis motstanden er lav (vanligvis under 50Ω).

**Isolasjonsmotstand**
Spesialmåling for å sjekke isolasjon i elektriske anlegg. Bruker spesiell megger (isolasjonstester) med høyere spenning (250V, 500V, 1000V).

**Viktig:**
- ALLTID koble fra spenning før motstandsmåling
- Løft ut komponenter fra kretsen
- Parallelle komponenter påvirker målingen`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-8-ex-1',
      task: 'Hvordan kobles et multimeter for å måle spenning over en motstand?',
      solution: 'Multimeteret kobles parallellt med motstanden. Rødt kabel til V/Ω-inngangen, svart til COM. Probene berører hver sin side av motstanden. Velg riktig måleområde (AC eller DC volt).',
    },
    {
      id: 'elektro-data-vg1-8-ex-2',
      task: 'Hva må du alltid gjøre før du måler motstand på en komponent?',
      solution: 'Du må alltid koble fra all spenning og helst løfte komponenten ut av kretsen (minst én side). Motstandsmåling med spenning til stede kan ødelegge multimeteret og gi feil målinger.',
    },
    {
      id: 'elektro-data-vg1-8-ex-3',
      task: 'Hva er fordelen med å bruke klemmetang for å måle strøm fremfor et vanlig multimeter?',
      solution: 'Klemmetang måler strøm uten å bryte kretsen – du klemmer bare rundt lederen. Dette er raskere, tryggere og du slipper å koble fra spenning. Ulempen er at den er mindre nøyaktig på lave strømmer.',
    },
    {
      id: 'elektro-data-vg1-8-ex-4',
      task: 'Du skal måle strømmen i en krets. Beskriv steg-for-steg hvordan du gjør det med et multimeter.',
      solution: '1. Koble fra spenningen, 2. Bryt kretsen der du vil måle, 3. Velg riktig måleområde (A eller mA), 4. Koble rødt kabel til A/mA-inngang og svart til COM, 5. Koble multimeteret i serie (i bruddet), 6. Koble til spenning, 7. Les av verdien.',
    },
    {
      id: 'elektro-data-vg1-8-ex-5',
      task: 'Hva er kontinuitetstest, og når brukes den?',
      solution: 'Kontinuitetstest sjekker om det er elektrisk gjennomgang mellom to punkter. Multimeteret piper hvis motstanden er lav. Brukes til å sjekke om kabler, sikringer og forbindelser er i orden, eller for å finne kortslutninger.',
    },
    {
      id: 'elektro-data-vg1-8-ex-6',
      task: 'Hvorfor må du bruke riktig måleinngang på multimeteret (mA vs A)?',
      solution: 'mA-inngangen har en sikring for lave strømmer (vanligvis maks 200-400mA). A-inngangen tåler høyere strømmer (typisk 10A). Hvis du bruker mA-inngangen på høye strømmer, brenner sikringen og multimeteret slutter å fungere.',
    },
  ],
  keyTerms: [
    { term: 'Multimeter', definition: 'Måleinstrument som kan måle spenning, strøm og motstand.' },
    { term: 'Klemmetang', definition: 'Måleinstrument som måler strøm ved å klemmes rundt en leder.' },
    { term: 'Spenningsfall', definition: 'Spenning over en komponent i en krets.' },
    { term: 'Kontinuitet', definition: 'Elektrisk gjennomgang, lav motstand mellom to punkter.' },
    { term: 'Isolasjonsmotstand', definition: 'Motstand i isolasjonen til et elektrisk anlegg, måles med megger.' },
    { term: 'COM', definition: 'Common – felles referansepunkt (minus/masse) på multimeter.' },
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
  sections: [
    {
      title: 'Hva er automasjon?',
      content: `## Hva er automasjon?

Automasjon er å få maskiner og systemer til å fungere automatisk, uten konstant menneskelig inngrep. Automatisering øker effektivitet, nøyaktighet og sikkerhet.

**Eksempler på automasjon:**
- Industri: Produksjonslinjer, roboter
- Hjemmet: Varmestyring, belysning, røykvarsler
- Bil: ABS-bremser, adaptiv cruisekontroll
- Bygg: Ventilasjonsanlegg, brannsikring
- Samfunn: Trafikklys, heiser, pumpestasjoner

**Fordeler med automasjon:**
- Økt produktivitet
- Bedre kvalitet og konsistens
- Lavere kostnader over tid
- Tryggere arbeidsmiljø
- Kan gjøre farlige jobber

**Utfordringer:**
- Høye investeringskostnader
- Krever kompetanse å vedlikeholde
- Kan føre til færre arbeidsplasser`,
    },
    {
      title: 'Grunnleggende automatiseringssystem',
      content: `## Grunnleggende automatiseringssystem

Et automatiseringssystem består av tre hoveddeler:

**1. Sensorer (Input)**
Måler fysiske størrelser og konverterer til elektriske signaler.
- Temperatur: NTC, PT100
- Trykk: Piezosensorer
- Bevegelse: PIR, ultrasonisk
- Lys: Fotoceller
- Posisjon: Induksjonssensorer, endebryters

**2. Styringsenhet (Prosessering)**
Behandler signaler fra sensorer og tar beslutninger.
- Mikrokontroller (Arduino, Raspberry Pi)
- PLS (Programmerbar Logisk Styring)
- Relé-logikk
- Dedikerte IC-er

**3. Aktuatorer (Output)**
Utfører fysisk arbeid basert på styresignaler.
- Motorer: DC, AC, servo, stepper
- Ventiler: Åpner/stenger flyt
- Magnetventiler: Pneumatikk, hydraulikk
- Lys, varsler, display

**Tilbakekoblingssløyfe**
I mange systemer måler sensorer resultatet av aktuatorens handling, og styringen justerer. Dette kalles closed-loop system.`,
    },
    {
      title: 'Sensorer',
      content: `## Sensorer

Sensorer er "sansene" til automatiseringssystemet.

**Temperatur sensorer**
- NTC (Negative Temperature Coefficient): Motstand synker ved høyere temp
- PT100: Presisjonssensor, motstand øker med temp
- Termoelement: Genererer spenning fra temperaturforskjell
- Infrarøde: Måler varmestråling kontaktløst

**Lyssensorer**
- Fotocelle: Endrer motstand med lysstyrke
- Fotodiode/fototransistor: Genererer strøm ved lys
- Brukes i gatebelysning, kameraer, solarier

**Trykksensorer**
- Piezoresistive: Motstand endres ved trykk
- Kapasitive: Kapasitans endres
- Brukes i værstasjon, industri, bil (dekktrykk)

**Bevegelsessensorer**
- PIR (Passive Infrared): Detekterer varme fra bevegelse
- Ultrasonisk: Sender lydbølger og måler tid tilbake
- Radar: Mikrobølger
- Brukes i alarm, belysning, automatiske dører

**Nærhetssensorer**
- Induksjonssensor: Detekterer metall
- Kapasitiv: Detekterer alle materialer
- Optisk: Lysstråle
- Brukes i industrielle produksjonslinjer`,
    },
    {
      title: 'Aktuatorer',
      content: `## Aktuatorer

Aktuatorer er "musklene" til automatiseringssystemet.

**Elektromotorer**
- DC-motor: Enkel hastighetskontroll, begge retninger
- AC-motor: Robust, brukes i industri
- Servomotor: Presis posisjonskontroll
- Steppermotor: Diskrete steg, ingen feedback nødvendig

**Ventiler**
- Magnetventil: Åpner/stenger ved elektrisk signal
- Proporsjonalventil: Variabel åpning
- Brukes til vann, luft, olje

**Sylindere**
- Pneumatisk: Trykkluft driver stempel
- Hydraulisk: Olje, større krefter
- Brukes til løfting, pressing, skyving

**Andre aktuatorer**
- Varmeovner: Kontrollert oppvarming
- Kjøleaggregat: Kjøling
- Pumper: Væsketransport
- Lys: Belysning, indikatorer
- Lydgivere: Alarm, varsling`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-9-ex-1',
      task: 'Nevn de tre hovedelementene i et automatiseringssystem og forklar deres rolle.',
      solution: '1. Sensorer (input) - måler fysiske størrelser, 2. Styringsenhet (prosessering) - behandler data og tar beslutninger, 3. Aktuatorer (output) - utfører fysisk arbeid. Sammen danner de et komplett system.',
    },
    {
      id: 'elektro-data-vg1-9-ex-2',
      task: 'Beskriv hvordan et automatisk gatelys-system fungerer.',
      solution: 'En fotocelle (sensor) måler lysintensiteten. Når det blir mørkt, faller motstanden og sender signal til styringsenheten. Styringsenheten slår på lyset (aktuator). Om morgenen øker lysintensiteten, fotocellen registrerer dette, og lyset slås av.',
    },
    {
      id: 'elektro-data-vg1-9-ex-3',
      task: 'Hva er forskjellen mellom en open-loop og en closed-loop styring?',
      solution: 'Open-loop: Styringen sender kommando til aktuator, men får ikke tilbakemelding om resultatet. Closed-loop: Sensorer måler resultatet og sender tilbake til styringsenheten som kan justere. Closed-loop er mer nøyaktig og selvkorrigerende.',
    },
    {
      id: 'elektro-data-vg1-9-ex-4',
      task: 'Du skal lage et system som holder temperaturen i et rom konstant på 22°C. Hvilke komponenter trenger du?',
      solution: 'Sensor: Temperatursensor (f.eks. NTC eller PT100). Styringsenhet: Mikrokontroller eller termostat. Aktuator: Varmeovn og eventuelt vifte/kjøling. Systemet måler temp kontinuerlig og slår på/av varmen for å holde 22°C.',
    },
    {
      id: 'elektro-data-vg1-9-ex-5',
      task: 'Nevn to fordeler og én ulempe med automasjon i industrien.',
      solution: 'Fordeler: 1) Økt produktivitet og effektivitet, 2) Bedre kvalitet og konsistens. Ulempe: Høye investeringskostnader og kan føre til færre arbeidsplasser for ufaglærte.',
    },
  ],
  keyTerms: [
    { term: 'Automasjon', definition: 'Systemer som fungerer automatisk uten konstant menneskelig inngrep.' },
    { term: 'Sensor', definition: 'Enhet som måler fysiske størrelser og konverterer til elektriske signaler.' },
    { term: 'Aktuator', definition: 'Enhet som utfører fysisk arbeid basert på elektriske signaler.' },
    { term: 'Closed-loop', definition: 'Styringssystem med tilbakekobling fra sensorer.' },
    { term: 'PIR', definition: 'Passive Infrared – bevegelsessensor som detekterer varmestråling.' },
    { term: 'NTC', definition: 'Negative Temperature Coefficient – temperatursensor der motstand synker med temp.' },
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
  sections: [
    {
      title: 'Introduksjon til styringssystemer',
      content: `## Introduksjon til styringssystemer

Et styringssystem er hjernen i automatisering. Det mottar informasjon fra sensorer, behandler denne informasjonen, og sender kommandoer til aktuatorer.

**Typer styringssystemer:**

**Sekvensstyring**
Utfører en fast sekvens av handlinger i bestemt rekkefølge. Eksempel: Vaskemaskinsyklus (fylle vann → vaske → skylle → sentrifugere).

**Betingelsesstyring**
Tar beslutninger basert på betingelser. Eksempel: Hvis temp > 25°C, slå på vifte.

**Tidsstyring**
Aktiverer funksjoner på bestemte tider. Eksempel: Skru på lys kl. 18:00, av kl. 23:00.

**Reguleringsstyring**
Holder en verdi konstant ved å justere kontinuerlig. Eksempel: Termostat holder konstant romtemperatur.`,
    },
    {
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
    {
      title: 'Ladder Logic programmering',
      content: `## Ladder Logic programmering

Ladder Logic (stigediagram) er basert på elektriske relédiagrammer. Programmet ser ut som en stige med "trinns".

**Grunnleggende elementer:**

**Kontakter (Inputs)**
- Normally Open (NO): —| |— Leder når aktiv
- Normally Closed (NC): —|/|— Leder når ikke aktiv

**Spoler (Outputs)**
- Output: —( )— Aktiverer utgang
- Set: —(S)— Setter utgang på (holder)
- Reset: —(R)— Nullstiller utgang

**Eksempel – Enkel lysbryter:**
\`\`\`
|—| S1 |—————————( L1 )|
\`\`\`
Når S1 (bryter) er trykket, går strøm og L1 (lys) tennes.

**Eksempel – Start/Stopp med holding:**
\`\`\`
|—| Start |—|/| Stopp |—| Motor |—( Motor )|
|            |—| Motor |——————————|
\`\`\`
Start-knapp starter motor, motor holder seg selv aktivert, stopp-knapp bryter kretsen.

**Timere og tellere:**
- TON (Timer On Delay): Forsinkelse før aktivering
- TOF (Timer Off Delay): Forsinkelse før deaktivering
- CTU (Count Up): Teller opp
- CTD (Count Down): Teller ned`,
    },
    {
      title: 'Mikrokontrollere',
      content: `## Mikrokontrollere

Mikrokontrollere er små datamaskiner på én brikke, designet for å styre elektroniske systemer.

**Arduino**
Populær mikrokontroller-plattform for læring og prototyping.
- Lett å bruke
- Mange sensorer og moduler tilgjengelig
- Programmeres i C/C++
- Stor community og support
- Billig

**Raspberry Pi**
Mer kraftig "minicomputer".
- Kjører Linux
- Kan programmeres i Python, C++, etc.
- Nettverkstilkobling, HDMI
- Brukes til mer komplekse prosjekter

**Forskjell Arduino vs Raspberry Pi:**
- Arduino: Sanntidsstyring, lavt strømforbruk, enkel
- Raspberry Pi: Datakraft, multimedia, komplekse oppgaver

**Eksempel Arduino-program:**
\`\`\`cpp
// Blink LED på pin 13
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);  // På
  delay(1000);             // Vent 1 sekund
  digitalWrite(13, LOW);   // Av
  delay(1000);
}
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-10-ex-1',
      task: 'Hva er forskjellen mellom sekvensstyring og reguleringsstyring?',
      solution: 'Sekvensstyring utfører en fast sekvens av handlinger i bestemt rekkefølge (f.eks. vaskemaskinsyklus). Reguleringsstyring holder en verdi konstant ved kontinuerlig å måle og justere (f.eks. termostat som holder konstant temp).',
    },
    {
      id: 'elektro-data-vg1-10-ex-2',
      task: 'Hva står PLS for, og hva brukes det til?',
      solution: 'PLS står for Programmerbar Logisk Styring (PLC på engelsk). Det er en industriell datamaskin som brukes til å styre maskiner og automatiserte prosesser i industrien. Den er robust, pålitelig og lett å omprogrammere.',
    },
    {
      id: 'elektro-data-vg1-10-ex-3',
      task: 'Forklar hva dette Ladder Logic-programmet gjør:\n|—| S1 |—| S2 |—( L1 )|',
      solution: 'Dette er en AND-operasjon. Lyset L1 tennes bare når BÅDE S1 OG S2 er aktivert (begge brytere trykket inn). Dette er seriekobling av to kontakter.',
    },
    {
      id: 'elektro-data-vg1-10-ex-4',
      task: 'Når vil du velge Arduino fremfor Raspberry Pi i et prosjekt?',
      solution: 'Velg Arduino når du trenger: sanntidsstyring, lavt strømforbruk, enkle sensor-aktuator oppgaver, lavere kostnad. Eksempel: styre en robotbil, temperaturlogger, lyskontroll. Raspberry Pi er bedre for komplekse databehandling, multimedia og nettverkstunge oppgaver.',
    },
    {
      id: 'elektro-data-vg1-10-ex-5',
      task: 'Skriv et enkelt Arduino-program som leser en bryter på pin 2 og slår på en LED på pin 13 når bryteren trykkes.',
      solution: 'void setup() {\n  pinMode(2, INPUT);\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  if (digitalRead(2) == HIGH) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n}',
    },
    {
      id: 'elektro-data-vg1-10-ex-6',
      task: 'Tegn et Ladder Logic-diagram for følgende: En motor startes med en startknapp og stoppes med en stoppknapp. Motoren skal holde seg aktivert etter at startknappen slippes.',
      solution: '|—| Start |—|/| Stopp |—| Motor |—( Motor )|\n|            |—| Motor |——————————|\n\nStartknappen starter motoren, motoren holder seg selv aktivert (selvholding), og stoppknappen (NC) bryter kretsen.',
    },
  ],
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
  sections: [
    {
      title: 'Fornybare energikilder',
      content: `## Fornybare energikilder

Fornybar energi er energi fra kilder som fornyes naturlig og ikke går tomme. Disse energikildene er bærekraftige og har lave eller ingen klimagassutslipp.

**Vannkraft**
Vann fra fjell og elver driver turbiner som produserer elektrisitet. Norge er verdensledende på vannkraft.
- 95% av norsk strømproduksjon
- Kan reguleres etter behov
- Lange levetider (50-100 år)
- Påvirker vassdrag og natur

**Vindkraft**
Vind driver rotorblader som genererer elektrisitet gjennom en generator.
- Variabel produksjon (avhengig av vind)
- Ingen drivstoff nødvendig
- Økende andel i Norge og Europa
- Kan påvirke fugler og landskap

**Solenergi**
Sollys konverteres direkte til elektrisitet i solceller (fotovoltaisk effekt).
- Økende effektivitet (15-22%)
- Kan monteres på tak
- Passer godt i kombinasjon med batterier
- Mindre effektivt i Norge enn sørligere land

**Bølge- og tidevannskraft**
Havets bevegelse kan utnyttes til energiproduksjon.
- Stort potensial i Norge (lang kystlinje)
- Teknologien er fortsatt under utvikling
- Pålitelig (forutsigbare tider)

**Bioenergi**
Forbrenning av biomasse (trevirke, avfall) produserer varme og elektrisitet.
- CO2-nøytral (ved bærekraftig drift)
- Brukes mye til oppvarming
- Kan brukes i eksisterende kraftverk`,
    },
    {
      title: 'Energisparing',
      content: `## Energisparing

Å spare energi er både bra for miljøet og økonomien. Det mest bærekraftige er energien vi ikke bruker.

**Hvorfor spare energi?**
- Redusere CO2-utslipp
- Spare penger
- Redusere press på kraftnettet
- Bevare ressurser for fremtidige generasjoner

**Energisparing i hjemmet:**

**Belysning:**
- Bruk LED-pærer (bruker 80% mindre enn glødelamper)
- Slå av lyset når du forlater rommet
- Utnytt dagslys

**Oppvarming:**
- Senk temperaturen 1°C (sparer 5% energi)
- Isoler vinduer og dører
- Luft raskt, ikke hold vinduer på gløtt
- Bruk termostater

**Hvitevarer:**
- Kjøp energimerket utstyr (A-G skala)
- Kjøleskap/fryser: Hold rengjort, ikke for fullt
- Vask klær på lavere temperatur
- Tørk tøy utendørs når mulig

**Elektronikk:**
- Slå av enheter, ikke la dem stå på standby
- Trekk ut ladere når ikke i bruk
- Kjøp energieffektivt utstyr`,
    },
    {
      title: 'Smarte energisystemer',
      content: `## Smarte energisystemer

Smarte energisystemer bruker teknologi for å optimalisere energibruk og redusere forbruk.

**Smart Home / Smarthus**
Automatiserte systemer som styrer energibruk:
- Intelligente termostater (lærer dine vaner)
- Tidstyrt belysning
- Energimonitorering i sanntid
- Fjernkontroll via smarttelefon

**Smarte målere (AMS)**
I Norge har alle boliger fått smarte strømmålere (AMS – Avanserte Måle- og Styringssystemer):
- Måler forbruk time for time
- Sender data automatisk til nettselskap
- Gir innsikt i eget forbruk
- Mulighet for timepris

**Energilagring**
Batterier lagrer energi for senere bruk:
- Utjevner variasjon i fornybar energi
- Lagrer solenergi fra dag til kveld
- Backup ved strømbrudd
- Tesla Powerwall, LG Chem er eksempler

**Mikronett**
Lokale energinett som kan fungere uavhengig:
- Lokal produksjon (sol, vind)
- Lokal lagring (batterier)
- Kan kobles fra hovednettet
- Øker forsyningssikkerhet`,
    },
    {
      title: 'Energimerking',
      content: `## Energimerking

Energimerking hjelper forbrukere å velge energieffektive produkter.

**EU-energimerke**
Skala fra A (beste) til G (dårligste):
- Grønn (A-C): Svært energieffektiv
- Gul (D-E): Middels
- Rød (F-G): Dårlig energieffektivitet

**Hva merkes?**
- Kjøleskap og frysere
- Vaskemaskiner og tørketromler
- Oppvaskmaskiner
- TV og skjermer
- Lyspærer
- Varmepumper

**Energimerkekrav for bygg**
Boliger og næringsbygg må ha energiattest:
- A-G skala
- Viser energibehov
- Foreslår energitiltak
- Må fornyes hvert 10. år

**Beregning av besparelse**
Energimerket viser årlig energiforbruk i kWh. Ved å sammenligne kan du beregne besparelse:

Eksempel: Kjøleskap A (150 kWh/år) vs D (300 kWh/år)
Besparelse: 150 kWh/år × 1,50 kr/kWh = 225 kr/år
Over 10 år: 2250 kr`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-11-ex-1',
      task: 'Nevn tre fornybare energikilder og én fordel med hver.',
      solution: '1) Vannkraft: Kan reguleres etter behov, 2) Vindkraft: Ingen drivstoff nødvendig, ingen utslipp, 3) Solenergi: Kan monteres på eksisterende bygg, distribuert produksjon.',
    },
    {
      id: 'elektro-data-vg1-11-ex-2',
      task: 'Hvorfor bruker LED-pærer mindre energi enn glødelamper?',
      solution: 'LED-pærer konverterer elektrisk energi direkte til lys med høy effektivitet (ca. 90%). Glødelamper produserer mye varme som "spillenergi" (bare 5% blir til lys). LED bruker derfor rundt 80% mindre energi for samme lysstyrke.',
    },
    {
      id: 'elektro-data-vg1-11-ex-3',
      task: 'Du har et kjøleskap merket D (300 kWh/år) og vurderer å kjøpe nytt merket A (120 kWh/år). Strømprisen er 1,20 kr/kWh. Hvor mye sparer du per år?',
      solution: 'Besparelse: 300 - 120 = 180 kWh/år. Kostnad: 180 kWh × 1,20 kr = 216 kr per år. Over 10 år sparer du 2160 kr.',
    },
    {
      id: 'elektro-data-vg1-11-ex-4',
      task: 'Hva er formålet med AMS (Avanserte Måle- og Styringssystemer)?',
      solution: 'AMS måler strømforbruket time for time og sender data automatisk til nettselskapet. Dette gir deg innsikt i ditt eget forbruk, mulighet for timepris, og hjelper nettselskapet med å balansere nettet mer effektivt.',
    },
    {
      id: 'elektro-data-vg1-11-ex-5',
      task: 'Forklar hvordan et batterisystem i et smarthus kan redusere strømregningen.',
      solution: 'Batteriet lader når strømprisen er lav (f.eks. om natten eller når solcellene produserer overskudd). Når prisen er høy, bruker man strøm fra batteriet i stedet for å kjøpe fra nettet. Dette kalles "peak shaving" og kan spare betydelige beløp med timepris.',
    },
  ],
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
  sections: [
    {
      title: 'Kretsskjemaer og symboler',
      content: `## Kretsskjemaer og symboler

Kretsskjemaer er tegnspråket i elektronikk. De viser hvordan komponenter er koblet sammen uten å vise den fysiske plasseringen.

**Hvorfor bruke kretsskjemaer?**
- Universelt forståelig (internasjonale standarder)
- Enklere enn fotografier eller fysiske kretser
- Viser funksjonen, ikke fysisk plassering
- Nødvendig for feilsøking og reparasjon
- Grunnlag for PCB-design

**Grunnleggende symboler:**

**Strømkilder:**
- Batteri: To streker (lang = +, kort = -)
- DC-kilde: Sirkel med + og -
- AC-kilde: Sirkel med bølge
- Jord/masse: Tre horisontale streker

**Passive komponenter:**
- Motstand: Sikksakk-linje eller rektangel
- Kondensator: To parallelle streker
- Spole: Spirallinje
- Transformer: To spoler ved siden av hverandre

**Halvledere:**
- Diode: Trekant med strek
- LED: Diode med piler ut
- Transistor (NPN): Sirkel med tre ben, pil ut
- Transistor (PNP): Sirkel med tre ben, pil inn

**Andre:**
- Bryter: Åpen/lukket forbindelse
- Pære/lampe: Sirkel med X
- Motor: Sirkel med M
- Mikrofon, høyttaler, osv.`,
    },
    {
      title: 'Tegning av kretsskjemaer',
      content: `## Tegning av kretsskjemaer

**Regler for gode kretsskjemaer:**

1. **Klarhet fremfor alt**
   - Tegn oversiktlig, ikke klemt
   - Bruk rutenett hvis mulig
   - La linjer være horisontale eller vertikale

2. **Standarder**
   - Bruk standardiserte symboler
   - Positive spenninger øverst
   - Jord/masse nederst
   - Signal går fra venstre til høyre

3. **Merking**
   - Komponentnavn: R1, C1, Q1, osv.
   - Verdier: 1kΩ, 100µF, osv.
   - Noder: A, B, C eller nummerert

4. **Forbindelser**
   - Punkt der linjer møtes = koblet sammen
   - Kryssende linjer uten punkt = ikke koblet
   - Unngå fire linjer som møtes i ett punkt

**Verktøy for tegning:**
- Papir og blyant (for enkle skisser)
- KiCad (gratis, open source)
- Eagle (populær, gratis versjon)
- Fritzing (visuelt, bra for Arduino)
- EasyEDA (nettbasert)`,
    },
    {
      title: 'PCB-design',
      content: `## PCB-design

PCB (Printed Circuit Board) er et trykt kretskort hvor komponentene monteres.

**Fra kretsskjema til PCB:**

1. **Kretsskjema (Schematic)**
   Tegn den elektriske funksjonen

2. **Komponenter (Footprints)**
   Velg fysisk størrelse og ben-arrangement

3. **Layout**
   Plasser komponenter på kortet
   - Vurder størrelse og plassering
   - Tenk på varme, støy, tilgjengelighet

4. **Ruting**
   Trekk kobberstriper mellom komponenter
   - Topp og bunn lag (eller flere)
   - Korteste vei, men unngå kryss
   - Tykkelse avhenger av strøm

5. **Design Rule Check (DRC)**
   Sjekk at alt er korrekt
   - Ingen kortslutninger
   - Alle tilkoblinger OK
   - Riktig avstand mellom komponenter

6. **Produksjon**
   Generer Gerber-filer og send til produsent

**Lag i PCB:**
- Single-layer: Ett kobberlag
- Double-layer: Topp og bunn
- Multi-layer: 4, 6, 8+ lag (for komplekse design)`,
    },
    {
      title: 'Dokumentasjon',
      content: `## Dokumentasjon

God dokumentasjon er avgjørende for fremtidig vedlikehold og utvikling.

**Hva skal dokumenteres?**

**1. Kretsskjema**
- Komplett oversikt over tilkoblinger
- Komponentverdier
- Spenninger og strømmer

**2. Deliste (BOM – Bill of Materials)**
Tabell med alle komponenter:
- Navn (R1, C2, osv.)
- Verdi (1kΩ, 100µF)
- Type (1/4W motstand, elektrolytt kondensator)
- Antall
- Leverandør og bestillingsnummer

**3. Monteringsanvisning**
- Rekkefølge for montering
- Spesielle hensyn
- Testpunkter

**4. Testprosedyre**
- Hvordan teste at kretsen fungerer
- Forventede målinger
- Feilsøking

**5. Brukermanual**
- Hvordan bruke produktet
- Sikkerhetsinformasjon
- Vedlikehold

**Verktøy:**
- Word/Google Docs (rapporter)
- Excel/Google Sheets (BOM)
- Git/GitHub (versjonskontroll)
- Wiki (samarbeid, kunnskapsbase)`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-12-ex-1',
      task: 'Tegn symbolet for: a) Batteri, b) Motstand, c) LED, d) Jord',
      solution: 'a) Batteri: To streker (lang positiv, kort negativ), b) Motstand: Sikksakk-linje, c) LED: Trekant med strek og piler ut, d) Jord: Tre horisontale streker, nedoverbredere.',
    },
    {
      id: 'elektro-data-vg1-12-ex-2',
      task: 'Hvorfor tegner vi kretsskjemaer fremfor å bare ta bilde av den fysiske kretsen?',
      solution: 'Kretsskjemaer viser funksjonen klart og tydelig uten rot fra fysisk plassering, kabler og komponenter. De bruker standardiserte symboler som alle forstår, viser tilkoblinger tydeligere, og er enklere å bruke for feilsøking, analyse og PCB-design.',
    },
    {
      id: 'elektro-data-vg1-12-ex-3',
      task: 'Hva er en BOM, og hvorfor er den viktig?',
      solution: 'BOM (Bill of Materials) er en deliste som inneholder alle komponenter i et prosjekt med verdier, typer, antall og leverandører. Den er viktig for å kunne bestille riktige deler, reprodusere kretsen, beregne kostnader, og for vedlikehold.',
    },
    {
      id: 'elektro-data-vg1-12-ex-4',
      task: 'Hva er forskjellen på et kretsskjema og et PCB-layout?',
      solution: 'Kretsskjemaet viser den elektriske funksjonen – hvordan komponenter er koblet sammen logisk. PCB-layoutet viser den fysiske plasseringen av komponenter på kretskortet og hvordan kobberstriper forbinder dem. Samme kretsskjema kan ha mange forskjellige layout-løsninger.',
    },
    {
      id: 'elektro-data-vg1-12-ex-5',
      task: 'Nevn tre ting du bør tenke på når du plasserer komponenter på et PCB.',
      solution: '1) Varme: Hold varme komponenter borte fra temperaturfølsomme deler. 2) Støy: Separer digital og analog elektronikk. 3) Tilgjengelighet: Plasser kontakter, brytere og justering synlig og tilgjengelig. Bonus: Strømforsyning nær innganger, korte signalveier.',
    },
  ],
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
// Kapittel 13: Bærekraft og teknologi
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_13: TextbookChapter = {
  id: 'elektro-data-vg1-13',
  courseId: 'elektro-data-vg1',
  chapterNumber: '13',
  title: 'Bærekraft og teknologi',
  description: 'Bærekraftig bruk av elektronikk og energi.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå bærekraftig bruk av teknologi',
    'kjenne til miljøutfordringer i elektronikk',
  ],
  sections: [
    {
      title: 'Miljøutfordringer i elektronikk',
      content: `## Miljøutfordringer i elektronikk

Moderne teknologi gir oss mange fordeler, men skaper også miljøutfordringer.

**E-avfall (elektronisk avfall)**
Elektronikk som kastes er det raskest voksende avfallsproblemet:
- 50 millioner tonn e-avfall globalt per år
- Inneholder giftige stoffer (bly, kvikksølv, kadmium)
- Verdifulle metaller (gull, sølv, kobber) går tapt
- Bare 20% resirkuleres korrekt

**Problemene med e-avfall:**
- Deponering: Giftstoffer lekker til jord og grunnvann
- Forbrenning: Frigir giftige gasser
- Ulovlig eksport: Sendes til fattige land med dårlige forhold
- Ressurssløsing: Verdifulle materialer går tapt

**Utvinning av råstoffer**
Produksjon av elektronikk krever sjeldne metaller:
- Gruvedrift ødelegger natur
- Høyt energiforbruk
- Uetiske arbeidsforhold (konfliktmineraler)
- Forurensning av vann og jord

**Energiforbruk**
Produksjon og bruk av elektronikk krever mye energi:
- Datasentre: 1-2% av verdens strømforbruk
- Kryptovaluta mining: Enorm energibruk
- Streaming: Økende energibehov
- Standby-forbruk: Sløsing med energi`,
    },
    {
      title: 'Sirkulær økonomi',
      content: `## Sirkulær økonomi

Sirkulær økonomi handler om å holde produkter og materialer i bruk lengst mulig.

**Lineær vs Sirkulær:**

**Lineær økonomi:** Ta – Produser – Kast
Tradisjonell modell hvor produkter kastes etter bruk.

**Sirkulær økonomi:** Reduser – Bruk lenger – Gjenbruk – Resirkler
Produkter designes for lang levetid og resirkulering.

**Prinsipper for sirkulær økonomi:**

**1. Design for lang levetid**
- Modulært design (lett å reparere og oppgradere)
- Robuste materialer
- Tilgang til reservedeler

**2. Maksimer brukstid**
- Reparasjon fremfor utskifting
- Oppgradering av komponenter
- Videresalg og gjenbruk

**3. Gjenvinning**
- Design for demontering
- Bruk resirkulerbare materialer
- Unngå giftige stoffer

**Eksempler på sirkulær elektronikk:**
- Fairphone: Modulær telefon lett å reparere
- Framework laptop: Oppgraderbar og reparerbar
- Reparasjonsveiledninger (iFixit)
- Gjenbruksbutikker for elektronikk`,
    },
    {
      title: 'Rett til reparasjon',
      content: `## Rett til reparasjon

"Right to Repair" er en bevegelse for forbrukernes rett til å reparere produktene sine.

**Utfordringer i dag:**
- Produkter designes for å være vanskelige å reparere
- Limte enheter (kan ikke åpnes uten å ødelegge)
- Proprietære skruer (spesialverktøy nødvendig)
- Ingen tilgang til reservedeler
- Ingen reparasjonsmanualer
- Programvarelåsing

**Fordeler med reparasjon:**
- Forlenger produktets levetid
- Reduserer e-avfall
- Sparer penger
- Bevarer ressurser
- Skaper jobber i reparasjonsbransjen
- Lærer om teknologi

**Lovgivning:**
EU har innført "right to repair" direktiver:
- Produsenter må tilby reservedeler i 7-10 år
- Reparasjonsveiledninger må være tilgjengelig
- Produkter skal være designet for reparasjon

**Hva kan du gjøre?**
- Velg produkter som kan repareres
- Lær å reparere selv
- Støtt reparasjonsvennlige selskaper
- Besøk reparasjonscaféer
- Stem med lommeboken`,
    },
    {
      title: 'Bærekraftige valg',
      content: `## Bærekraftige valg

Hver av oss kan ta valg som reduserer miljøpåvirkningen av teknologien vår.

**Før kjøp:**
- **Trenger jeg dette?** Unngå impulsiv kjøp
- **Kan jeg reparere det jeg har?**
- **Kan jeg kjøpe brukt?** Gjenbruksmarkeder, annonsesider
- **Er produktet reparerbart?** Sjekk reparerbarhetsindeks

**Ved kjøp:**
- Velg kvalitet fremfor pris (holder lenger)
- Sjekk energimerking
- Velg produkter med lang garantitid
- Velg merker som tilbyr reparasjon og reservedeler

**I bruk:**
- Ta vare på produktene dine
- Bruk beskyttelse (deksel på telefon)
- Oppdater programvare (sikkerhet og ytelse)
- Slå av når ikke i bruk

**Etter bruk:**
- Reparer hvis mulig
- Selg eller gi bort hvis funksjonelt
- Lever til godkjent returpunkt
- ALDRI kast elektronikk i vanlig søppel

**Resirkuleringspunkter:**
- Elretur: Butikker som selger elektronikk
- Gjenvinningsstasjoner
- Spesielle innsamlingsaksjoner`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-13-ex-1',
      task: 'Hva er e-avfall, og hvorfor er det et problem?',
      solution: 'E-avfall er kassert elektronikk. Det er problematisk fordi det inneholder giftige stoffer som kan forurense miljøet, verdifulle metaller går tapt, og bare 20% resirkuleres korrekt. Det er det raskest voksende avfallsproblemet globalt.',
    },
    {
      id: 'elektro-data-vg1-13-ex-2',
      task: 'Forklar forskjellen mellom lineær og sirkulær økonomi.',
      solution: 'Lineær økonomi: Ta – Produser – Kast. Produkter kastes etter bruk. Sirkulær økonomi: Produkter designes for lang levetid, reparasjon og gjenbruk. Materialer holdes i bruk lengst mulig gjennom reparasjon, oppgradering og resirkulering.',
    },
    {
      id: 'elektro-data-vg1-13-ex-3',
      task: 'Nevn tre tiltak som kan forlenge levetiden til elektroniske produkter.',
      solution: '1) Bruk beskyttelse (deksel, skjermfilm), 2) Reparer når det går i stykker i stedet for å kjøpe nytt, 3) Oppdater programvare regelmessig for å holde produktet sikkert og funksjonelt. Bonus: Ta vare på produktet, unngå ekstreme temperaturer.',
    },
    {
      id: 'elektro-data-vg1-13-ex-4',
      task: 'Hva betyr "Right to Repair", og hvorfor er det viktig?',
      solution: 'Right to Repair (Rett til reparasjon) er retten til å reparere produktene du eier. Det er viktig fordi det forlenger produktets levetid, reduserer e-avfall, sparer penger, bevarer ressurser, og gir forbrukere kontroll over sine egne ting.',
    },
  ],
  keyTerms: [
    { term: 'E-avfall', definition: 'Elektronisk avfall – kasserte elektriske og elektroniske produkter.' },
    { term: 'Sirkulær økonomi', definition: 'Økonomisk modell hvor produkter og materialer holdes i bruk lengst mulig.' },
    { term: 'Right to Repair', definition: 'Forbrukernes rett til å reparere produktene sine.' },
    { term: 'Resirkulering', definition: 'Gjenvinning av materialer fra kasserte produkter til nye produkter.' },
    { term: 'Konfliktmineraler', definition: 'Mineraler utvunnet under uetiske forhold, ofte i konfliktområder.' },
    { term: 'Modulært design', definition: 'Design hvor komponenter lett kan byttes ut og oppgraderes.' },
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
    'forstå utdanningsveier og karrieremuligheter',
  ],
  sections: [
    {
      title: 'Yrker innen elektro',
      content: `## Yrker innen elektro

Elektrofagene tilbyr et bredt spekter av spennende yrker.

**Elektriker**
Installerer og vedlikeholder elektriske anlegg i boliger, bedrifter og industri.
- Læretid: 2 år + fagbrev
- Lærlinglønn: Ca. 60-80% av fagarbeiderlønn
- Fagarbeiderlønn: 450 000 – 650 000 kr/år
- Muligheter: Bli egen bedrift, spesialisere deg

**Montør**
Installerer og vedlikeholder alt fra telenett til solcelleanlegg.
- Kabelmontør: Telenett, fibernett
- Solcelletekniker: Installasjon av solceller
- Vindindustritekniker: Service på vindturbiner

**Automasjonstekniker**
Jobber med styringssystemer i industri og bygg.
- Programmerer PLS-systemer
- Feilsøker automatiserte systemer
- Vedlikeholder roboter
- Lønn: 500 000 – 700 000 kr/år

**Tavlemontør**
Bygger elektriske tavler og fordelingsskap.
- Nøyaktighetsarbeid
- Leser komplekse tegninger
- Kvalitetskontroll

**Anleggselektriker**
Jobber med kraftnett og høyspenning.
- Installerer transformatorer
- Trekker kraftlinjer
- Høye krav til sikkerhet
- God lønn på grunn av krevende arbeid`,
    },
    {
      title: 'Yrker innen data og IT',
      content: `## Yrker innen data og IT

IT-bransjen vokser raskt og trenger kvalifiserte fagfolk.

**Programmerer / Utvikler**
Lager programvare, apper og nettsider.
- Webutvikler: Frontend (det du ser) eller Backend (server)
- Apputvikler: iOS, Android apper
- Spillutvikler: Spill og simulasjoner
- Lønn: 500 000 – 900 000 kr/år (erfaring avhengig)

**Datasikkerhet / Cybersikkerhet**
Beskytter systemer mot angrep og databrudd.
- Etisk hacker (penetrasjonstester)
- Sikkerhetskonsulent
- Dataforensiker
- Høy etterspørsel, god lønn

**Nettverksadministrator**
Bygger og vedlikeholder datanettverk.
- Installerer servere og switcher
- Konfigurerer brannmurer
- Sikkerhetsoppdateringer
- Lønn: 450 000 – 700 000 kr/år

**Systemadministrator**
Drifter og vedlikeholder IT-systemer.
- Installerer og konfigurerer servere
- Hjelp til brukere
- Backup og gjenoppretting
- "IT-ansvarlig" i bedrifter

**IoT-tekniker**
Jobber med Internet of Things – tilkoblede enheter.
- Smarthus installasjoner
- Industrielle sensornett
- Vedlikehold av tilkoblede systemer
- Fremtidsrettet felt`,
    },
    {
      title: 'Utdanningsveier',
      content: `## Utdanningsveier

Det finnes flere veier til yrket du ønsker.

**Fagbrev (yrkesfaglig)**
VG1 → VG2 → 2 år lære → Fagbrev
- Praktisk arbeid fra dag én
- Lærlinglønn
- Raskeste veien til jobb
- Mulig påbygging til generell studiekompetanse

**Fagskole**
Fagbrev + 1-2 år fagskole = Fagskoleutdanning
- Spesialisering (f.eks. automasjon, fornybar energi)
- Høyere lønn
- Lederstillinger
- Kombinerer praksis og teori

**Høyere utdanning (universitet/høgskole)**
Generell studiekompetanse + 3-5 år = Bachelor/Master
- Bachelor: 3 år (180 studiepoeng)
- Master: 5 år (300 studiepoeng)
- Elektroingeniør, Dataingeniør, IT-sikkerhet
- Forskning, utvikling, ledelse

**Kombinasjonsløp**
Du kan kombinere:
- Fagbrev → Fagskole
- Fagbrev → Ingeniør (Y-vei)
- Fagskole → Bachelor (påbygging)

**Videreutdanning**
Mange tar kurs og sertifiseringer:
- Cisco CCNA (nettverk)
- CompTIA Security+ (sikkerhet)
- Microsoft, Linux sertifiseringer
- Kurser i nye teknologier`,
    },
    {
      title: 'Arbeidsmarkedet',
      content: `## Arbeidsmarkedet

Elektro- og IT-fagene har sterkt arbeidsmarked.

**Etterspørsel**
- Stor mangel på fagarbeidere
- Høy etterspørsel på IT-kompetanse
- Fornybar energi vokser raskt
- Automatisering øker i industrien

**Lønnsnivå (2024)**
Lønn varierer med erfaring, arbeidsgiver og kompetanse:
- Lærling: 200 000 – 350 000 kr/år
- Nyutdannet fagarbeider: 400 000 – 500 000 kr/år
- Erfaren fagarbeider: 500 000 – 650 000 kr/år
- Ingeniør (bachelor): 500 000 – 700 000 kr/år
- Erfaren ingeniør: 700 000 – 1 000 000+ kr/år
- Lederstillinger: 800 000 – 1 500 000+ kr/år

**Arbeidsmiljø**
- Variert arbeid (kontor, byggeplass, industri)
- Problemløsning og kreativitet
- Teamarbeid
- Teknologiutvikling
- Gode karrieremuligheter

**Fremtidsutsikter**
Teknologien utvikler seg raskt:
- Smart city og smarte bygg
- Fornybar energi og klimateknologi
- Kunstig intelligens
- Automatisering og robotikk
- Cybersikkerhet

Det vil alltid være behov for folk som kan bygge, drifte og vedlikeholde teknologi.`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-14-ex-1',
      task: 'Hva er forskjellen på en elektriker og en automasjonstekniker?',
      solution: 'Elektriker installerer og vedlikeholder elektriske anlegg (lys, stikkontakter, tavler) i boliger og bygg. Automasjonstekniker jobber med styringssystemer, programmerer PLS, vedlikeholder roboter og automatiserte systemer i industri og avanserte bygg.',
    },
    {
      id: 'elektro-data-vg1-14-ex-2',
      task: 'Beskriv utdanningsveien for å bli elektriker med fagbrev.',
      solution: 'VG1 Elektro og datateknologi → VG2 Elektrofag → 2 år læretid hos bedrift med opplæring → Fagprøve → Fagbrev som elektriker. Total tid: 4 år etter ungdomsskolen.',
    },
    {
      id: 'elektro-data-vg1-14-ex-3',
      task: 'Nevn tre yrker innen IT/data og hva de gjør.',
      solution: '1) Programmerer: Lager programvare, apper og nettsider, 2) Nettverksadministrator: Bygger og vedlikeholder datanettverk, 3) Cybersikkerhet: Beskytter systemer mot angrep og sikrer data.',
    },
    {
      id: 'elektro-data-vg1-14-ex-4',
      task: 'Kan du ta høyere utdanning etter fagbrev? Hvordan?',
      solution: 'Ja! Etter fagbrev kan du: 1) Ta fagskole (1-2 år spesialisering), 2) Ta påbygging til generell studiekompetanse og deretter bachelor/master, 3) Noen utdanninger aksepterer fagbrev + praksis som opptak (Y-vei til ingeniør).',
    },
  ],
  keyTerms: [
    { term: 'Fagbrev', definition: 'Yrkeskompetanse oppnådd etter VG2 og 2 års læretid med fagprøve.' },
    { term: 'Lærling', definition: 'Person som lærer et yrke gjennom praktisk arbeid i bedrift.' },
    { term: 'Fagskole', definition: 'Høyere yrkesutdanning (1-2 år) som bygger på fagbrev.' },
    { term: 'Påbygging', definition: 'Ett år studie for å få generell studiekompetanse etter fagbrev.' },
    { term: 'IoT', definition: 'Internet of Things – tilkoblede enheter som kommuniserer over nettverk.' },
    { term: 'PLS', definition: 'Programmerbar Logisk Styring – brukt i automasjon og industri.' },
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
    'forstå og bruke logiske porter',
    'lage og tolke sannhetstabeller',
  ],
  sections: [
    {
      title: 'Repetisjon: Digitale signaler',
      content: `## Repetisjon: Digitale signaler

Digitale systemer jobber med to tilstander: 0 og 1.

**Logiske nivåer:**
- **Logisk 0:** Lav spenning (0V – 0,8V), også kalt LOW eller FALSE
- **Logisk 1:** Høy spenning (2V – 5V), også kalt HIGH eller TRUE

**Positive og negative logikk:**
- **Positiv logikk:** Høy spenning = 1, lav spenning = 0 (vanligst)
- **Negativ logikk:** Lav spenning = 1, høy spenning = 0

**Sannhetstabeller**
En sannhetstabell viser output for alle mulige kombinasjoner av input.
For 2 inputs (A og B): 2² = 4 kombinasjoner
For 3 inputs (A, B, C): 2³ = 8 kombinasjoner
For N inputs: 2ᴺ kombinasjoner`,
    },
    {
      title: 'Grunnleggende logiske porter',
      content: `## Grunnleggende logiske porter

**AND-port (OG-port)**
Symbolsk: A · B eller A AND B
Output er 1 bare hvis ALLE innganger er 1.

Sannhetstabell:
| A | B | Output |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   0    |
| 1 | 0 |   0    |
| 1 | 1 |   1    |

**OR-port (ELLER-port)**
Symbolsk: A + B eller A OR B
Output er 1 hvis MINST ÉN inngang er 1.

Sannhetstabell:
| A | B | Output |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   1    |

**NOT-port (IKKE-port / Inverter)**
Symbolsk: Ā eller NOT A
Inverterer inngangen.

Sannhetstabell:
| A | Output |
|---|--------|
| 0 |   1    |
| 1 |   0    |

**XOR-port (Eksklusiv OR)**
Symbolsk: A ⊕ B
Output er 1 hvis inngangene er FORSKJELLIGE.

Sannhetstabell:
| A | B | Output |
|---|---|--------|
| 0 | 0 |   0    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   0    |`,
    },
    {
      title: 'Sammensatte porter',
      content: `## Sammensatte porter

**NAND-port (NOT-AND)**
AND-port etterfulgt av en inverter.
Output er 0 bare hvis ALLE innganger er 1.

Sannhetstabell:
| A | B | Output |
|---|---|--------|
| 0 | 0 |   1    |
| 0 | 1 |   1    |
| 1 | 0 |   1    |
| 1 | 1 |   0    |

NAND er en "universell port" – alle andre porter kan bygges med bare NAND-porter.

**NOR-port (NOT-OR)**
OR-port etterfulgt av en inverter.
Output er 1 bare hvis ALLE innganger er 0.

Sannhetstabell:
| A | B | Output |
|---|---|--------|
| 0 | 0 |   1    |
| 0 | 1 |   0    |
| 1 | 0 |   0    |
| 1 | 1 |   0    |

NOR er også en "universell port".

**XNOR-port (Eksklusiv NOR / Equivalence)**
XOR-port etterfulgt av en inverter.
Output er 1 hvis inngangene er LIKE.

Sannhetstabell:
| A | B | Output |
|---|---|--------|
| 0 | 0 |   1    |
| 0 | 1 |   0    |
| 1 | 0 |   0    |
| 1 | 1 |   1    |`,
    },
    {
      title: 'Boolsk algebra og forenkling',
      content: `## Boolsk algebra og forenkling

Boolsk algebra brukes til å forenkle logiske uttrykk.

**Grunnregler:**

**Identitetslover:**
- A · 1 = A
- A + 0 = A

**Nullelement og enhet:**
- A · 0 = 0
- A + 1 = 1

**Idempotens:**
- A · A = A
- A + A = A

**Komplement:**
- A · Ā = 0
- A + Ā = 1
- NOT(NOT A) = A (dobbel negasjon)

**Kommutativ lov:**
- A · B = B · A
- A + B = B + A

**Assosiativ lov:**
- A · (B · C) = (A · B) · C
- A + (B + C) = (A + B) + C

**Distributiv lov:**
- A · (B + C) = (A · B) + (A · C)
- A + (B · C) = (A + B) · (A + C)

**De Morgans lover:**
- NOT(A AND B) = (NOT A) OR (NOT B)
- NOT(A OR B) = (NOT A) AND (NOT B)

**Eksempel på forenkling:**
F = A · B + A · B̄
F = A · (B + B̄)      [Distributiv lov]
F = A · 1           [Komplement]
F = A               [Identitet]`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-15-ex-1',
      task: 'Lag en sannhetstabell for en 3-inngangs AND-port (A, B, C).',
      solution: '| A | B | C | Output |\n|---|---|---|--------|\n| 0 | 0 | 0 |   0    |\n| 0 | 0 | 1 |   0    |\n| 0 | 1 | 0 |   0    |\n| 0 | 1 | 1 |   0    |\n| 1 | 0 | 0 |   0    |\n| 1 | 0 | 1 |   0    |\n| 1 | 1 | 0 |   0    |\n| 1 | 1 | 1 |   1    |\n\nOutput er 1 bare når A=1 OG B=1 OG C=1.',
    },
    {
      id: 'elektro-data-vg1-15-ex-2',
      task: 'Hva er forskjellen mellom en OR-port og en XOR-port?',
      solution: 'OR-porten gir 1 hvis MINST én inngang er 1, inkludert når begge er 1. XOR-porten gir 1 bare når inngangene er FORSKJELLIGE. For A=1, B=1: OR gir 1, XOR gir 0.',
    },
    {
      id: 'elektro-data-vg1-15-ex-3',
      task: 'Bruk De Morgans lov til å forenkle: NOT(A OR B)',
      solution: 'De Morgans lov: NOT(A OR B) = (NOT A) AND (NOT B) = Ā · B̄\n\nDette betyr at utgangen er 1 bare når både A og B er 0.',
    },
    {
      id: 'elektro-data-vg1-15-ex-4',
      task: 'Hva betyr det at NAND er en "universell port"?',
      solution: 'Det betyr at alle andre logiske porter (AND, OR, NOT, XOR, osv.) kan bygges ved å bare bruke NAND-porter. Dette gjør NAND svært nyttig i praktisk design, siden man kan bruke kun én type IC.',
    },
    {
      id: 'elektro-data-vg1-15-ex-5',
      task: 'Forklar hva dette logiske uttrykket gjør: F = A · B + Ā · B',
      solution: 'F = A · B + Ā · B = B · (A + Ā) = B · 1 = B\n\nUttrykket forenkles til bare B. Utgangen følger B-inngangen uavhengig av A.',
    },
    {
      id: 'elektro-data-vg1-15-ex-6',
      task: 'Tegn sannhetstabellen for F = (A AND B) OR (NOT C)',
      solution: '| A | B | C | A·B | C̄ | F |\n|---|---|---|-----|---|---|\n| 0 | 0 | 0 |  0  | 1 | 1 |\n| 0 | 0 | 1 |  0  | 0 | 0 |\n| 0 | 1 | 0 |  0  | 1 | 1 |\n| 0 | 1 | 1 |  0  | 0 | 0 |\n| 1 | 0 | 0 |  0  | 1 | 1 |\n| 1 | 0 | 1 |  0  | 0 | 0 |\n| 1 | 1 | 0 |  1  | 1 | 1 |\n| 1 | 1 | 1 |  1  | 0 | 1 |',
    },
  ],
  keyTerms: [
    { term: 'Sannhetstabell', definition: 'Tabell som viser output for alle mulige kombinasjoner av inputs.' },
    { term: 'AND-port', definition: 'Logisk port hvor output er 1 bare hvis alle inputs er 1.' },
    { term: 'OR-port', definition: 'Logisk port hvor output er 1 hvis minst én input er 1.' },
    { term: 'XOR-port', definition: 'Logisk port hvor output er 1 hvis inputs er forskjellige.' },
    { term: 'NAND-port', definition: 'NOT-AND, universell port som kan implementere alle andre porter.' },
    { term: 'De Morgans lover', definition: 'Regler for å transformere logiske uttrykk: NOT(A AND B) = Ā OR B̄' },
    { term: 'Boolsk algebra', definition: 'Matematisk system for å manipulere og forenkle logiske uttrykk.' },
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
  sections: [
    {
      title: 'Sekvensiell vs kombinatorisk logikk',
      content: `## Sekvensiell vs kombinatorisk logikk

**Kombinatorisk logikk**
Output avhenger BARE av nåværende input.
- AND, OR, NOT porter
- Ingen minnefunksjon
- Output endres umiddelbart når input endres

**Sekvensiell logikk**
Output avhenger av BÅDE nåværende input OG tidligere tilstand (minne).
- Har minnefunksjon
- Kan lagre informasjon
- Brukes i tellere, registre, minne
- Bygger på flip-flops

**Klokksignal**
Sekvensiell logikk bruker ofte et klokksignal (clock):
- Periodisk puls (f.eks. 1 MHz = 1 million pulser per sekund)
- Synkroniserer endringer
- Sikrer at alle deler oppdateres samtidig`,
    },
    {
      title: 'Flip-flops',
      content: `## Flip-flops

En flip-flop er den grunnleggende lagringsenheten i digital elektronikk.

**SR Flip-Flop (Set-Reset)**
To innganger: S (Set) og R (Reset)
- S=1: Setter output Q=1
- R=1: Resetter output Q=0
- S=R=0: Beholder tilstand
- S=R=1: Ugyldig tilstand (unngås)

**D Flip-Flop (Data)**
Én data-inngang (D) og én klokk-inngang (CLK)
- Når klokken går høy (stigning): Q får verdien av D
- Ellers: Q beholder verdien
- Brukes til å lagre 1 bit

**JK Flip-Flop**
To innganger: J og K, pluss klokk
- J=1, K=0: Setter Q=1
- J=0, K=1: Resetter Q=0
- J=K=0: Beholder tilstand
- J=K=1: Toggle (bytter tilstand)

**T Flip-Flop (Toggle)**
Én inngang (T) og klokk
- T=1: Bytter tilstand ved hver klokk-puls
- T=0: Beholder tilstand
- Brukes i tellere

**Master-Slave og Edge-Triggered**
- Master-Slave: Bruker to lag for å unngå race conditions
- Edge-Triggered: Reagerer bare på stigende eller fallende flanke av klokken`,
    },
    {
      title: 'Tellere',
      content: `## Tellere

Tellere teller antall klokkpulser.

**Asynkron teller (Ripple Counter)**
Flip-flops kobles i serie, output fra én driver klokken til neste.
- Enkel å bygge
- "Ripple effect" – forsinkelse gjennom kaskaden
- Brukes når hastighet ikke er kritisk

**Synkron teller**
Alle flip-flops får samme klokksignal.
- Alle endrer tilstand samtidig
- Raskere og mer pålitelig
- Krever mer logikk

**Binær teller**
Teller i binære tall: 0, 1, 2, 3, 4...
4-bits teller: 0000 → 1111 (0-15), deretter tilbake til 0000

**BCD-teller (Binary Coded Decimal)**
Teller fra 0-9, deretter tilbake til 0.
Brukes for å drive 7-segment display (siffer).

**Opp/ned-teller**
Kan telle både opp og ned.
- Opp: Inkrementer
- Ned: Dekrementer
- Kontrolleres med retningssignal

**Eksempel: 3-bits binær teller**
000 → 001 → 010 → 011 → 100 → 101 → 110 → 111 → 000 (repeat)`,
    },
    {
      title: 'Skiftregistre',
      content: `## Skiftregistre

Skiftregistre flytter data bit for bit.

**Serie-inn, serie-ut (SISO)**
Data mates inn én bit om gangen og kommer ut én bit om gangen.
- Brukes til å forsinke data

**Serie-inn, parallell-ut (SIPO)**
Data mates inn serielt, men alle bits er tilgjengelige samtidig ut.
- Konverterer seriell til parallell data
- Brukes ved mottak av seriell data

**Parallell-inn, serie-ut (PISO)**
Alle bits lastes inn samtidig, kommer ut én om gangen.
- Konverterer parallell til seriell data
- Brukes ved sending av data

**Parallell-inn, parallell-ut (PIPO)**
Data lastes inn og ut parallellt.
- Brukes som dataregister

**Applikasjoner:**
- Seriell kommunikasjon (UART, SPI)
- LED-striper med skiftregistre (f.eks. 74HC595)
- Datalagring
- Tidsforsinkning`,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-16-ex-1',
      task: 'Hva er forskjellen mellom kombinatorisk og sekvensiell logikk?',
      solution: 'Kombinatorisk logikk: Output avhenger bare av nåværende input, ingen minne. Sekvensiell logikk: Output avhenger av både nåværende input og tidligere tilstand (minne). Flip-flops er eksempel på sekvensiell logikk.',
    },
    {
      id: 'elektro-data-vg1-16-ex-2',
      task: 'Hva gjør en D flip-flop?',
      solution: 'En D flip-flop lagrer verdien på D-inngangen når klokksignalet går høyt (stigende flanke). Output Q får verdien av D og holder denne verdien til neste klokk-puls. Den lagrer 1 bit informasjon.',
    },
    {
      id: 'elektro-data-vg1-16-ex-3',
      task: 'En 4-bits binær teller starter på 1010. Hva blir verdien etter 3 klokkpulser?',
      solution: '1010 (10) → 1011 (11) → 1100 (12) → 1101 (13). Verdien blir 1101 (binært) = 13 (desimalt).',
    },
    {
      id: 'elektro-data-vg1-16-ex-4',
      task: 'Hva er forskjellen mellom en asynkron og en synkron teller?',
      solution: 'Asynkron teller: Flip-flops kobles i serie, forsinkelse ("ripple") gjennom kaskaden. Synkron teller: Alle flip-flops får samme klokksignal og endrer tilstand samtidig. Synkron er raskere og mer pålitelig.',
    },
    {
      id: 'elektro-data-vg1-16-ex-5',
      task: 'Forklar hva et SIPO skiftregister gjør og gi et bruksområde.',
      solution: 'SIPO (Serie-Inn, Parallell-Ut) tar inn data én bit om gangen serielt, og gjør alle bits tilgjengelige parallellt samtidig. Brukes til å konvertere seriell data til parallell, for eksempel ved mottak av data via UART eller SPI.',
    },
  ],
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
  sections: [
    {
      title: 'Arduino-plattformen',
      content: `## Arduino-plattformen

Arduino er en populær mikrokontroller-plattform for læring, prototyping og hobbyelektronikk.

**Hva er Arduino?**
- Åpen kildekode hardware og software
- Lett å bruke for nybegynnere
- Stort fellesskap og mange ressurser
- Tusenvis av biblioteker og eksempler

**Populære Arduino-modeller:**

**Arduino Uno**
Den mest brukte modellen.
- ATmega328P mikrokontroller
- 14 digitale I/O pins (6 kan gjøre PWM)
- 6 analoge innganger
- 32 KB flash-minne
- 16 MHz klokkefrekvens
- USB-tilkobling
- Pris: ~200-300 kr

**Arduino Nano**
Mindre versjon av Uno, samme funksjonalitet.
- Breadboard-vennlig
- Mindre størrelse
- Ideell for prosjekter med plassbegrensninger

**Arduino Mega**
Større modell med flere pins.
- 54 digitale I/O pins
- 16 analoge innganger
- 256 KB flash-minne
- For større prosjekter

**Arduino IDE**
Programmeringsmiljø for Arduino:
- Gratis nedlasting fra arduino.cc
- Enkel editor
- Mange eksempelskisser
- Seriemonitor for debugging
- Bibliotekbehandling`,
    },
    {
      title: 'Grunnleggende Arduino-programmering',
      content: `## Grunnleggende Arduino-programmering

Arduino programmeres i C/C++.

**Struktur av en Arduino-skisse:**

\`\`\`cpp
// Globale variabler og konstanter
const int ledPin = 13;

void setup() {
  // Kjører én gang ved oppstart
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Gjentar i det uendelige
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}
\`\`\`

**setup()-funksjonen**
Kjører én gang når Arduino starter eller resettes.
- Initialiserer pins
- Starter seriell kommunikasjon
- Setter startbetingelser

**loop()-funksjonen**
Kjører i det uendelige etter setup().
- Hovedprogrammet
- Leser sensorer
- Kontrollerer aktuatorer
- Tar beslutninger

**Digitale pins**
\`\`\`cpp
pinMode(pin, OUTPUT);     // Sett som utgang
pinMode(pin, INPUT);      // Sett som inngang
digitalWrite(pin, HIGH);  // Skriv høy (5V)
digitalWrite(pin, LOW);   // Skriv lav (0V)
int value = digitalRead(pin); // Les verdi
\`\`\`

**Analoge pins**
\`\`\`cpp
int value = analogRead(A0); // Les analog verdi (0-1023)
analogWrite(pin, value);    // PWM output (0-255)
\`\`\``,
    },
    {
      title: 'Sensorer og Arduino',
      content: `## Sensorer og Arduino

**Temperatursensor (LM35, DHT11, DHT22)**
Måler temperatur.

\`\`\`cpp
#include <DHT.h>
DHT dht(2, DHT11);  // Pin 2, type DHT11

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  float temp = dht.readTemperature();
  Serial.print("Temperatur: ");
  Serial.println(temp);
  delay(2000);
}
\`\`\`

**Ultrasonisk sensor (HC-SR04)**
Måler avstand.

\`\`\`cpp
const int trigPin = 9;
const int echoPin = 10;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  long duration = pulseIn(echoPin, HIGH);
  float distance = duration * 0.034 / 2;

  Serial.print("Avstand: ");
  Serial.println(distance);
  delay(100);
}
\`\`\`

**Lysensor (LDR - Light Dependent Resistor)**
Måler lysstyrke.

\`\`\`cpp
const int ldrPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int lys = analogRead(ldrPin);
  Serial.print("Lysnivå: ");
  Serial.println(lys);
  delay(500);
}
\`\`\``,
    },
    {
      title: 'Aktuatorer og Arduino',
      content: `## Aktuatorer og Arduino

**LED**
Enkleste aktuator.

\`\`\`cpp
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}
\`\`\`

**Servomotor**
Posisjonering 0-180 grader.

\`\`\`cpp
#include <Servo.h>

Servo myservo;

void setup() {
  myservo.attach(9);  // Pin 9
}

void loop() {
  myservo.write(0);    // 0 grader
  delay(1000);
  myservo.write(90);   // 90 grader
  delay(1000);
  myservo.write(180);  // 180 grader
  delay(1000);
}
\`\`\`

**DC-motor (med L298N motor driver)**
Kontrollerer hastighet og retning.

\`\`\`cpp
const int motorPin1 = 5;
const int motorPin2 = 6;
const int enablePin = 9;

void setup() {
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(enablePin, OUTPUT);
}

void loop() {
  // Fremover
  digitalWrite(motorPin1, HIGH);
  digitalWrite(motorPin2, LOW);
  analogWrite(enablePin, 200);  // Hastighet (0-255)
  delay(2000);

  // Stopp
  analogWrite(enablePin, 0);
  delay(1000);
}
\`\`\`

**Relé**
Slår på/av høyere spenning/strøm.

\`\`\`cpp
const int relayPin = 7;

void setup() {
  pinMode(relayPin, OUTPUT);
}

void loop() {
  digitalWrite(relayPin, HIGH);  // På
  delay(5000);
  digitalWrite(relayPin, LOW);   // Av
  delay(5000);
}
\`\`\``,
    },
  ],
  exercises: [
    {
      id: 'elektro-data-vg1-17-ex-1',
      task: 'Hva er forskjellen på setup() og loop() i en Arduino-skisse?',
      solution: 'setup() kjører én gang når Arduino starter eller resettes. Den brukes til å initialisere pins, starte seriell kommunikasjon, etc. loop() kjører i det uendelige etter setup() og inneholder hovedprogrammet.',
    },
    {
      id: 'elektro-data-vg1-17-ex-2',
      task: 'Skriv Arduino-kode som blinker en LED på pin 8 hvert annet sekund.',
      solution: 'const int ledPin = 8;\n\nvoid setup() {\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(ledPin, HIGH);\n  delay(1000);\n  digitalWrite(ledPin, LOW);\n  delay(1000);\n}',
    },
    {
      id: 'elektro-data-vg1-17-ex-3',
      task: 'Hva returnerer analogRead() på Arduino Uno, og hva representerer verdien?',
      solution: 'analogRead() returnerer en verdi fra 0 til 1023. Denne verdien representerer spenningen på den analoge pinnen: 0 = 0V, 1023 = 5V. Hver enhet er ca. 4,9mV (5V / 1024).',
    },
    {
      id: 'elektro-data-vg1-17-ex-4',
      task: 'Hvorfor trenger vi en motor driver (som L298N) for å kontrollere en DC-motor fra Arduino?',
      solution: 'Arduino-pins kan bare levere 40mA og 5V. En DC-motor trenger typisk mye mer strøm (1-5A) og ofte høyere spenning (6-12V). Motor driveren kan håndtere høyere strøm/spenning og beskytte Arduino mot motorens tilbakeslag (back EMF).',
    },
    {
      id: 'elektro-data-vg1-17-ex-5',
      task: 'Skriv Arduino-kode som leser en knapp på pin 2 og slår på LED på pin 13 når knappen trykkes.',
      solution: 'const int buttonPin = 2;\nconst int ledPin = 13;\n\nvoid setup() {\n  pinMode(buttonPin, INPUT);\n  pinMode(ledPin, OUTPUT);\n}\n\nvoid loop() {\n  int buttonState = digitalRead(buttonPin);\n  if (buttonState == HIGH) {\n    digitalWrite(ledPin, HIGH);\n  } else {\n    digitalWrite(ledPin, LOW);\n  }\n}',
    },
    {
      id: 'elektro-data-vg1-17-ex-6',
      task: 'Forklar hva PWM er og hvordan analogWrite() bruker det.',
      solution: 'PWM (Pulse Width Modulation) er en teknikk hvor en digital pin slås raskt av og på for å simulere et analogt signal. analogWrite(pin, value) setter duty cycle (0-255): 0 = alltid av (0V), 255 = alltid på (5V), 128 = 50% på (2,5V gjennomsnitt). Brukes til å dimme LED eller kontrollere motorhastighet.',
    },
  ],
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
  content: '',
  sections: [],
  exercises: [],
  keyTerms: [],
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
