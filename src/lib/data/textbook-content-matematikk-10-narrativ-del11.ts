/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 11
 * Kapittel 11.1–11.3: Programmering og digitale verktoy
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * a lese og lytte til, med quiz-sporsmal for selvtest.
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 11.1 NARRATIV: Algoritmer og pseudokode
// ============================================================================

export const CHAPTER_10_11_1_NARRATIV: TextbookChapter = {
  id: '10-11-1-narrativ',
  courseId: '10',
  chapterNumber: '11.1',
  title: 'Algoritmer og pseudokode',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om algoritmer, flytdiagrammer og pseudokode -- fra kakeoppskrifter til Euklids geniale metode for a finne storste felles divisor.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske matematiske eigenskapar og samanhengar ved a bruke programmering',
  ],
  linkedChapterId: '10-11-1',
  content: [
    // --- INTRO ---
    {
      id: '10-11-1-n-intro',
      type: 'text',
      content: `## Fra kakeoppskrift til algoritme

Har du noen gang bakt en kake? Da har du allerede brukt en algoritme uten a vite det. En kakeoppskrift er nemlig en steg-for-steg-beskrivelse av hva du skal gjore for a oppna et bestemt resultat -- akkurat som en **algoritme** i matematikken.

En algoritme er en presis, endelig oppskrift for a lose et problem. Den har tre viktige egenskaper: den er **presis** (hvert steg er entydig beskrevet), den er **endelig** (den stopper etter et endelig antall steg), og den er **generell** (den fungerer for alle gyldige inndata, ikke bare ett spesifikt tilfelle).

Du bruker faktisk algoritmer i matematikk hele tiden. Nar du deler to tall med lang divisjon, folger du en algoritme. Nar du finner fellesnevner, folger du en algoritme. I dette kapittelet skal vi se narmere pa hvordan vi kan beskrive slike fremgangsma ter pa tre ulike mater: med vanlig tekst, med **flytdiagrammer** og med **pseudokode**. Vi skal ogsa utforske noen klassiske algoritmer, som Euklids algoritme for a finne storste felles divisor og boblsortering for a sortere en liste.

La oss starte med noe enkelt. Tenk deg at du har tre tall -- $a$, $b$ og $c$ -- og du vil finne det storste av dem. Hvordan vil du ga frem? En mulig algoritme er:

1. Sett $\\text{storst} = a$
2. Hvis $b > \\text{storst}$, sett $\\text{storst} = b$
3. Hvis $c > \\text{storst}$, sett $\\text{storst} = c$
4. Na er $\\text{storst}$ det storste av de tre tallene

La oss teste med $a = 7$, $b = 12$, $c = 5$. Forst setter vi storst $= 7$. Sa sjekker vi: er $12 > 7$? Ja, sa storst $= 12$. Er $5 > 12$? Nei, sa storst er fortsatt $12$. Svaret er $12$. Enkelt og presist!`,
    },

    // --- FLYTDIAGRAMMER ---
    {
      id: '10-11-1-n-section1',
      type: 'text',
      content: `## Flytdiagrammer -- algoritmer du kan se

Noen ganger er det lettere a forsta en algoritme hvis du kan *se* den. Det er her **flytdiagrammer** kommer inn. Et flytdiagram er en grafisk fremstilling av en algoritme der vi bruker standardiserte symboler:

- **Oval** (avrundet rektangel): Start og stopp
- **Rektangel**: Prosess eller beregning
- **Diamant** (rombe): Beslutning -- et ja/nei-sporsmal
- **Parallellogram**: Inn- eller utdata
- **Pil**: Viser retningen flyten gar i

Flytdiagrammer er spesielt nyttige nar det er **forgreninger** (if/else) eller **lokker** (gjentakelser), fordi du kan folge pilene og se noyaktig hva som skjer.

La oss lage et flytdiagram som sjekker om et tall er partall eller oddetall. Vi starter med [Start], gar til [Les inn tall n], sa til en diamant [Er n delelig med 2?]. Hvis ja, folger vi pilen til [Skriv ut "Partall"] og deretter [Stopp]. Hvis nei, gar vi til [Skriv ut "Oddetall"] og deretter [Stopp].

Matematisk sjekker vi dette med modulo-operasjonen: $n \\mod 2 = 0$ betyr at $n$ er et partall. For eksempel: $14 \\mod 2 = 0$, sa 14 er et partall.`,
    },

    // --- QUIZ 1 ---
    {
      id: '10-11-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-11-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa algoritmer og flytdiagrammer:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-11-1-n-quiz1-q0',
            task: 'Hvilke tre egenskaper ma en god algoritme ha?',
            options: [
              { id: 'a', text: 'Rask, moderne og digital', isCorrect: false },
              { id: 'b', text: 'Presis, endelig og generell', isCorrect: true },
              { id: 'c', text: 'Kort, enkel og morsom', isCorrect: false },
              { id: 'd', text: 'Presis, uendelig og spesifikk', isCorrect: false },
            ],
            solution: 'En god algoritme er presis (hvert steg er entydig), endelig (den stopper etter et endelig antall steg) og generell (den fungerer for alle gyldige inndata).',
          },
          {
            id: '10-11-1-n-quiz1-q1',
            task: 'Hvilket symbol brukes for en beslutning (ja/nei-sporsmal) i et flytdiagram?',
            options: [
              { id: 'a', text: 'Rektangel', isCorrect: false },
              { id: 'b', text: 'Oval', isCorrect: false },
              { id: 'c', text: 'Parallellogram', isCorrect: false },
              { id: 'd', text: 'Diamant (rombe)', isCorrect: true },
            ],
            solution: 'Diamanten (romben) brukes for beslutninger i flytdiagrammer. Den har to utganger: ja og nei.',
          },
          {
            id: '10-11-1-n-quiz1-q2',
            task: 'Hva er $17 \\mod 3$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$2$', isCorrect: true },
              { id: 'c', text: '$3$', isCorrect: false },
              { id: 'd', text: '$1$', isCorrect: false },
            ],
            solution: '$17 = 5 \\cdot 3 + 2$, sa $17 \\mod 3 = 2$. Modulo gir resten ved heltallsdivisjon.',
          },
        ],
        solution: '',
      },
    },

    // --- PSEUDOKODE ---
    {
      id: '10-11-1-n-section2',
      type: 'text',
      content: `## Pseudokode -- skriv algoritmen som nesten-kode

Mellom vanlig tekst og ekte programmeringssprak finnes **pseudokode**. Det er en forenklet, uformell mate a skrive en algoritme pa som ligner et programmeringssprak, men som er skrevet pa vanlig sprak slik at den er lett a forsta.

De vanligste elementene i pseudokode er:
- **LES** / **SKRIV**: For inn- og utdata
- **SETT** / **LA**: For a tilordne verdier
- **HVIS ... SA ... ELLERS**: For betingelser (forgreninger)
- **GJENTA ... MENS** / **FOR ... TIL**: For lokker (gjentakelser)
- **RETURNER**: For a gi tilbake et resultat

La oss skrive pseudokode for a beregne summen $1 + 2 + 3 + \\ldots + n$:

\`\`\`
LES n
SETT sum = 0
FOR i = 1 TIL n
    SETT sum = sum + i
SLUTT FOR
SKRIV "Summen er " + sum
\`\`\`

Hvis vi tester med $n = 5$: Vi starter med sum $= 0$. Sa legger vi til 1 (sum $= 1$), deretter 2 (sum $= 3$), deretter 3 (sum $= 6$), deretter 4 (sum $= 10$), og til slutt 5 (sum $= 15$). Summen av tallene fra 1 til 5 er $15$.

Vi kan sjekke med formelen: $\\frac{n(n+1)}{2} = \\frac{5 \\cdot 6}{2} = 15$. Stemmer!

Legg merke til at pseudokode ikke trenger a folge strenge syntaksregler. Den bor bare vare presis nok til at noen kan oversette den til et ekte programmeringssprak.`,
    },

    // --- EUKLIDS ALGORITME ---
    {
      id: '10-11-1-n-section3',
      type: 'text',
      content: `## Euklids algoritme -- 2300 ar gammel og fortsatt genial

En av de eldste kjente algoritmene i verden er **Euklids algoritme**, oppkalt etter den greske matematikeren Euklid som beskrev den rundt 300 f.Kr. Tenk pa det -- en algoritme som er over 2300 ar gammel, og som fortsatt brukes i dag!

Euklids algoritme finner den **storste felles divisor** (SFD) av to tall. Den storste felles divisor av to tall $a$ og $b$ er det storste tallet som gar opp i begge. Vi skriver $\\text{SFD}(a, b)$. For eksempel er $\\text{SFD}(12, 8) = 4$ fordi 4 er det storste tallet som deler bade 12 og 8.

Algoritmen er overraskende enkel:

1. Hvis $b = 0$, er $\\text{SFD}(a, b) = a$. Stopp.
2. Beregn resten $r = a \\mod b$.
3. Sett $a = b$ og $b = r$.
4. Ga til steg 1.

I pseudokode:

\`\`\`
LES a, b
GJENTA MENS b \u2260 0
    SETT r = a mod b
    SETT a = b
    SETT b = r
SLUTT GJENTA
SKRIV "SFD er " + a
\`\`\`

La oss prove med $\\text{SFD}(48, 18)$. Forst: $48 \\mod 18 = 12$, sa vi setter $a = 18$, $b = 12$. Neste runde: $18 \\mod 12 = 6$, sa $a = 12$, $b = 6$. Neste: $12 \\mod 6 = 0$, sa $a = 6$, $b = 0$. Stopp! $\\text{SFD}(48, 18) = 6$.

Vi kan sjekke: $48 = 6 \\cdot 8$ og $18 = 6 \\cdot 3$. Stemmer! Euklids algoritme er ogsa nyttig for a forkorte broker -- du deler teller og nevner med SFD. For eksempel: $\\frac{48}{36}$ forkortes ved a finne $\\text{SFD}(48, 36) = 12$, sa $\\frac{48}{36} = \\frac{4}{3}$.`,
    },

    // --- QUIZ 2 ---
    {
      id: '10-11-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-11-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa pseudokode og Euklids algoritme:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-11-1-n-quiz2-q0',
            task: 'Hva er $\\text{SFD}(84, 36)$?',
            options: [
              { id: 'a', text: '$6$', isCorrect: false },
              { id: 'b', text: '$12$', isCorrect: true },
              { id: 'c', text: '$4$', isCorrect: false },
              { id: 'd', text: '$18$', isCorrect: false },
            ],
            solution: 'Euklids algoritme: $84 \\mod 36 = 12$, $36 \\mod 12 = 0$. Stopp! $\\text{SFD}(84, 36) = 12$.',
          },
          {
            id: '10-11-1-n-quiz2-q1',
            task: 'I pseudokode, hva betyr "GJENTA MENS b \u2260 0"?',
            options: [
              { id: 'a', text: 'Kjor koden inne i lokken sa lenge b ikke er lik 0', isCorrect: true },
              { id: 'b', text: 'Kjor koden inne i lokken noyaktig b ganger', isCorrect: false },
              { id: 'c', text: 'Hopp over koden hvis b er 0', isCorrect: false },
              { id: 'd', text: 'Sett b til 0 og kjor koden en gang', isCorrect: false },
            ],
            solution: '"GJENTA MENS" er en lokke som gjentar instruksjonene sa lenge betingelsen er sann. Her betyr det: fortsett sa lenge $b$ ikke er lik null.',
          },
          {
            id: '10-11-1-n-quiz2-q2',
            task: 'Hva vil denne pseudokoden skrive ut nar n = 4? LES n. SETT produkt = 1. FOR i = 1 TIL n: SETT produkt = produkt * i. SKRIV produkt.',
            options: [
              { id: 'a', text: '$10$', isCorrect: false },
              { id: 'b', text: '$4$', isCorrect: false },
              { id: 'c', text: '$24$', isCorrect: true },
              { id: 'd', text: '$16$', isCorrect: false },
            ],
            solution: 'Pseudokoden beregner $n! = 4! = 1 \\cdot 2 \\cdot 3 \\cdot 4 = 24$ (n fakultet).',
          },
          {
            id: '10-11-1-n-quiz2-q3',
            task: 'Hva er $\\text{SFD}(105, 45)$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$3$', isCorrect: false },
              { id: 'c', text: '$9$', isCorrect: false },
              { id: 'd', text: '$15$', isCorrect: true },
            ],
            solution: '$105 \\mod 45 = 15$, $45 \\mod 15 = 0$. $\\text{SFD}(105, 45) = 15$.',
          },
        ],
        solution: '',
      },
    },

    // --- BOBLSORTERING ---
    {
      id: '10-11-1-n-section4',
      type: 'text',
      content: `## Boblsortering -- nar tall bobler opp pa riktig plass

**Sortering** er en av de vanligste oppgavene i programmering. Hver gang du soker etter noe pa nettet, sorterer et digitalt musikkbibliotek eller rangerer en tabell, brukes sorteringsalgoritmer bak kulissene.

En av de enkleste sorteringsalgoritmene er **boblsortering** (bubble sort). Navnet kommer av at de storste verdiene gradvis "bobler" opp til riktig posisjon, litt som luftbobler i vann. Ideen er:

1. Ga gjennom listen og sammenlign hvert par av naboelementer
2. Hvis to naboer er i feil rekkefolgje, bytt dem
3. Gjenta til hele listen er sortert

La oss sortere listen $[5, 3, 8, 1, 2]$:

**Runde 1:** Vi sammenligner 5 og 3 -- $5 > 3$, bytt! $\\rightarrow [3, 5, 8, 1, 2]$. Sa 5 og 8 -- ok. Sa 8 og 1 -- bytt! $\\rightarrow [3, 5, 1, 8, 2]$. Sa 8 og 2 -- bytt! $\\rightarrow [3, 5, 1, 2, 8]$. Na har 8 "boblet" opp til riktig plass!

**Runde 2:** $3 < 5$, ok. $5 > 1$, bytt! $\\rightarrow [3, 1, 5, 2, 8]$. $5 > 2$, bytt! $\\rightarrow [3, 1, 2, 5, 8]$.

**Runde 3:** $3 > 1$, bytt! $\\rightarrow [1, 3, 2, 5, 8]$. $3 > 2$, bytt! $\\rightarrow [1, 2, 3, 5, 8]$.

**Runde 4:** $1 < 2$, ok. Ingen bytter -- ferdig! Sortert liste: $[1, 2, 3, 5, 8]$.

Boblsortering er kanskje ikke den mest effektive algoritmen for store datamengder, men den er enkel a forsta og viser grunnprinsippet bak sortering.`,
    },

    // --- QUIZ 3 ---
    {
      id: '10-11-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-11-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa boblsortering:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-11-1-n-quiz3-q0',
            task: 'Etter forste runde med boblsortering av listen $[7, 2, 9, 4, 1]$, hva er listen?',
            options: [
              { id: 'a', text: '$[1, 2, 4, 7, 9]$', isCorrect: false },
              { id: 'b', text: '$[2, 7, 4, 1, 9]$', isCorrect: true },
              { id: 'c', text: '$[2, 7, 9, 1, 4]$', isCorrect: false },
              { id: 'd', text: '$[7, 2, 4, 1, 9]$', isCorrect: false },
            ],
            solution: 'Runde 1: $7 > 2$, bytt $\\rightarrow [2, 7, 9, 4, 1]$. $7 < 9$, ok. $9 > 4$, bytt $\\rightarrow [2, 7, 4, 9, 1]$. $9 > 1$, bytt $\\rightarrow [2, 7, 4, 1, 9]$.',
          },
          {
            id: '10-11-1-n-quiz3-q1',
            task: 'Hvorfor heter algoritmen "boblsortering"?',
            options: [
              { id: 'a', text: 'Fordi den ble oppfunnet i en sapebukkefabrikk', isCorrect: false },
              { id: 'b', text: 'Fordi de storste verdiene gradvis bobler opp til riktig posisjon', isCorrect: true },
              { id: 'c', text: 'Fordi de minste verdiene forsvinner som bobler', isCorrect: false },
              { id: 'd', text: 'Fordi listen deles i bobler som sorteres hver for seg', isCorrect: false },
            ],
            solution: 'Navnet kommer av at de storste verdiene gradvis "bobler" oppover til riktig posisjon i listen, slik luftbobler stiger i vann.',
          },
        ],
        solution: '',
      },
    },

    // --- OPPSUMMERING ---
    {
      id: '10-11-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett at algoritmer er overalt -- fra kakeoppskrifter til avansert matematikk. Her er det viktigste du bor ta med deg:

- En **algoritme** er en presis, endelig oppskrift for a lose et problem. Den ma vare presis, endelig og generell.
- **Flytdiagrammer** bruker standardiserte symboler (ovaler, rektangler, diamanter, parallellogrammer) for a visualisere algoritmer grafisk.
- **Pseudokode** er en uformell tekstbeskrivelse av en algoritme som ligner et programmeringssprak, med elementer som LES, SKRIV, SETT, HVIS, GJENTA og FOR.
- **Euklids algoritme** finner storste felles divisor (SFD) ved gjentatt divisjon med rest. Den er over 2300 ar gammel og brukes fortsatt i dag.
- **Boblsortering** sorterer en liste ved a sammenligne og bytte naboer gjentatte ganger, slik at de storste verdiene "bobler" opp til riktig plass.
- **Modulo** ($a \\mod b$) gir resten ved heltallsdivisjon og er et sentralt verktoy i mange algoritmer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.2 NARRATIV: Programmering med Python
// ============================================================================

export const CHAPTER_10_11_2_NARRATIV: TextbookChapter = {
  id: '10-11-2-narrativ',
  courseId: '10',
  chapterNumber: '11.2',
  title: 'Programmering med Python',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om ditt forste mote med Python -- fra variabler og utskrift til lokker og lister, alt med matematiske eksempler.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske matematiske eigenskapar og samanhengar ved a bruke programmering',
  ],
  linkedChapterId: '10-11-2',
  content: [
    // --- INTRO ---
    {
      id: '10-11-2-n-intro',
      type: 'text',
      content: `## Velkommen til Python

Na som du kan lage algoritmer med pseudokode, er det pa tide a ta steget videre til et ekte programmeringssprak! **Python** er et av verdens mest populare programmeringssprak, og det er spesielt populart i matematikk og vitenskap fordi det er lett a lare og kraftig a bruke.

Med Python kan du la datamaskinen gjore utregninger for deg, tegne grafer, simulere tilfeldige hendelser og mye mer. Det fineste er at Python-kode ligner veldig pa pseudokode -- sa overgangen blir enkel.

I dette kapittelet skal vi dekke alt du trenger for a komme i gang: variabler og datatyper, utskrift og inndata, betingelser, lokker og lister. Alt med matematiske eksempler, selvfolgelig!`,
    },

    // --- VARIABLER OG UTSKRIFT ---
    {
      id: '10-11-2-n-section1',
      type: 'text',
      content: `## Variabler -- bokser for verdier

I Python er en **variabel** et navn som lagrer en verdi. Tenk pa det som en merket boks der du kan legge noe oppi. Du lager en variabel ved a gi den et navn og en verdi:

\`\`\`python
alder = 15
navn = "Emma"
hoyde = 1.68
er_elev = True
\`\`\`

Python har flere **datatyper**: \`int\` for heltall (som $42$ eller $-7$), \`float\` for desimaltall (som $3{,}14$ eller $0{,}5$), \`str\` for tekst (som \`"Hei"\`), og \`bool\` for sannhetsverdier (\`True\` eller \`False\`). Merk at Python bruker **punktum** som desimaltegn, ikke komma!

For a vise noe pa skjermen bruker vi funksjonen \`print()\`:

\`\`\`python
print("Hei, verden!")
print(42)
print("Svaret er", 7 + 3)
\`\`\`

En spesielt nyttig funksjon er **f-strenger**, som lar deg sette variabler rett inn i tekst:

\`\`\`python
navn = "Ola"
alder = 15
print(f"{navn} er {alder} ar gammel.")
\`\`\`

Dette gir utskriften: \`Ola er 15 ar gammel.\`

La oss prove noe mer matematisk. Anta at vi vil beregne arealet av en sirkel med radius $r = 5$:

\`\`\`python
import math

radius = 5
areal = math.pi * radius**2
print(f"Arealet av sirkelen er {areal:.2f}")
\`\`\`

Her bruker vi \`import math\` for a fa tilgang til $\\pi$, og \`**2\` betyr "opphøyd i 2". Utskriften blir: \`Arealet av sirkelen er 78.54\`.`,
    },

    // --- QUIZ 1 ---
    {
      id: '10-11-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-11-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa variabler og utskrift:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-11-2-n-quiz1-q0',
            task: 'Hva er datatypen til verdien 3.14 i Python?',
            options: [
              { id: 'a', text: 'int', isCorrect: false },
              { id: 'b', text: 'str', isCorrect: false },
              { id: 'c', text: 'float', isCorrect: true },
              { id: 'd', text: 'bool', isCorrect: false },
            ],
            solution: '$3.14$ er et desimaltall, og desimaltall har datatypen \`float\` i Python.',
          },
          {
            id: '10-11-2-n-quiz1-q1',
            task: 'Hva skriver denne koden ut? print(f"Summen er {3 + 4}")',
            options: [
              { id: 'a', text: 'Summen er {3 + 4}', isCorrect: false },
              { id: 'b', text: 'Summen er 7', isCorrect: true },
              { id: 'c', text: 'f"Summen er 7"', isCorrect: false },
              { id: 'd', text: 'Feilmelding', isCorrect: false },
            ],
            solution: 'I en f-streng beregnes uttrykk inne i krollparenteser. $3 + 4 = 7$, sa utskriften blir "Summen er 7".',
          },
          {
            id: '10-11-2-n-quiz1-q2',
            task: 'Hva betyr `**` i Python?',
            options: [
              { id: 'a', text: 'Multiplikasjon', isCorrect: false },
              { id: 'b', text: 'Divisjon', isCorrect: false },
              { id: 'c', text: 'Kommentar', isCorrect: false },
              { id: 'd', text: 'Potens (opphøyd i)', isCorrect: true },
            ],
            solution: 'I Python betyr \`**\` potens. For eksempel er \`2**3\` det samme som $2^3 = 8$.',
          },
        ],
        solution: '',
      },
    },

    // --- INPUT OG MATEMATIKK ---
    {
      id: '10-11-2-n-section2',
      type: 'text',
      content: `## Inndata og matematiske operatorer

For a lese inn data fra brukeren bruker vi \`input()\`. Denne funksjonen returnerer alltid en **tekststreng**, sa vi ma konvertere til tall med \`int()\` eller \`float()\`:

\`\`\`python
navn = input("Hva heter du? ")
alder = int(input("Hvor gammel er du? "))
hoyde = float(input("Hvor hoy er du (i meter)? "))
\`\`\`

Python har disse matematiske operatorene:

- \`+\` addisjon, \`-\` subtraksjon, \`*\` multiplikasjon
- \`/\` vanlig divisjon (gir desimaltall): $7 / 3 = 2{,}333...$
- \`//\` heltallsdivisjon: $7 // 3 = 2$
- \`%\` modulo (rest): $7 \\% 3 = 1$
- \`**\` potens: $2^3$ skrives \`2**3\`

Merk forskjellen mellom \`/\` og \`//\`. Og \`%\` (modulo) gir resten -- det samme som vi brukte i Euklids algoritme!

## Betingelser -- nar programmet tar valg

**Betingelser** lar programmet ta valg basert pa hva som er sant. Vi bruker \`if\`, \`elif\` (forkortelse for "else if") og \`else\`:

\`\`\`python
tall = int(input("Skriv inn et tall: "))

if tall > 0:
    print("Tallet er positivt")
elif tall < 0:
    print("Tallet er negativt")
else:
    print("Tallet er null")
\`\`\`

Viktig: Legg merke til **innrykket** (4 mellomrom). Python bruker innrykk for a vise hva som horer til en betingelse. Sammenligningsoperatorene er: \`==\` (lik), \`!=\` (ikke lik), \`>\`, \`<\`, \`>=\` og \`<=\`.

Her er et klassisk eksempel -- sjekke om et tall er partall eller oddetall:

\`\`\`python
tall = int(input("Skriv inn et heltall: "))

if tall % 2 == 0:
    print(f"{tall} er et partall")
else:
    print(f"{tall} er et oddetall")
\`\`\`

Vi bruker \`tall % 2\` for a finne resten nar tallet deles pa 2. Hvis resten er 0, er tallet et partall.`,
    },

    // --- QUIZ 2 ---
    {
      id: '10-11-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-11-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa input og betingelser:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-11-2-n-quiz2-q0',
            task: 'Hva er resultatet av 17 // 5 i Python?',
            options: [
              { id: 'a', text: '3.4', isCorrect: false },
              { id: 'b', text: '3', isCorrect: true },
              { id: 'c', text: '2', isCorrect: false },
              { id: 'd', text: '4', isCorrect: false },
            ],
            solution: '\`//\` er heltallsdivisjon. $17 / 5 = 3{,}4$, men heltallsdivisjon gir bare heltallsdelen: $3$.',
          },
          {
            id: '10-11-2-n-quiz2-q1',
            task: 'Hvorfor ma vi bruke int() eller float() rundt input()?',
            options: [
              { id: 'a', text: 'Fordi input() alltid returnerer en tekststreng, og vi trenger tall for a regne', isCorrect: true },
              { id: 'b', text: 'Fordi input() ikke fungerer uten det', isCorrect: false },
              { id: 'c', text: 'Fordi Python krever det for sikkerhet', isCorrect: false },
              { id: 'd', text: 'Det er valgfritt -- man trenger det egentlig ikke', isCorrect: false },
            ],
            solution: 'Funksjonen \`input()\` returnerer alltid en tekststreng. Hvis vi vil regne med verdien, ma vi konvertere den til tall med \`int()\` (heltall) eller \`float()\` (desimaltall).',
          },
          {
            id: '10-11-2-n-quiz2-q2',
            task: 'Hva er 17 % 5 i Python?',
            options: [
              { id: 'a', text: '3', isCorrect: false },
              { id: 'b', text: '5', isCorrect: false },
              { id: 'c', text: '2', isCorrect: true },
              { id: 'd', text: '3.4', isCorrect: false },
            ],
            solution: '\`%\` er modulo (rest). $17 = 3 \\cdot 5 + 2$, sa $17 \\% 5 = 2$.',
          },
        ],
        solution: '',
      },
    },

    // --- LOKKER OG LISTER ---
    {
      id: '10-11-2-n-section3',
      type: 'text',
      content: `## Lokker -- nar kode gjentar seg

En av de kraftigste tingene med programmering er evnen til a gjenta kode. Det finnes to typer lokker i Python: **for-lokker** og **while-lokker**.

En **for-lokke** gjentar kode et bestemt antall ganger. Vi bruker \`range()\`:

\`\`\`python
for i in range(5):
    print(i)  # Skriver ut: 0, 1, 2, 3, 4
\`\`\`

\`range()\` kan brukes pa tre mater: \`range(n)\` gir tall fra 0 til $n-1$, \`range(a, b)\` gir tall fra $a$ til $b-1$, og \`range(a, b, steg)\` gir tall med et bestemt steg.

La oss bruke en for-lokke til a beregne summen $1 + 2 + 3 + \\ldots + 100$:

\`\`\`python
sum_tall = 0
for i in range(1, 101):
    sum_tall = sum_tall + i
print(f"Summen er {sum_tall}")
\`\`\`

Utskriften er: \`Summen er 5050\`. Vi kan sjekke med formelen: $\\frac{100 \\cdot 101}{2} = 5050$. Stemmer!

En **while-lokke** gjentar kode sa lenge en betingelse er sann:

\`\`\`python
tall = 1
while tall <= 10:
    print(tall)
    tall = tall + 1
\`\`\`

Pass pa at betingelsen til slutt blir usann, ellers far du en **uendelig lokke** (programmet stopper aldri)!

## Lister -- samlinger av verdier

En **liste** er en samling av verdier i en bestemt rekkefolgje:

\`\`\`python
tall = [3, 7, 1, 9, 4]
navn = ["Ola", "Kari", "Per"]
\`\`\`

Nyttige listeoperasjoner: \`len(liste)\` gir antall elementer, \`liste[i]\` gir element nummer $i$ (starter pa 0!), \`liste.append(x)\` legger til et element, \`sum(liste)\` gir summen, \`min(liste)\` gir minste element og \`max(liste)\` gir storste.

Her er et program som finner gjennomsnittet av en talliste:

\`\`\`python
tall = [4, 7, 2, 9, 5, 8]
gjennomsnitt = sum(tall) / len(tall)
print(f"Gjennomsnittet er {gjennomsnitt:.2f}")
\`\`\`

Utskrift: \`Gjennomsnittet er 5.83\`. Manuell sjekk: $\\frac{4 + 7 + 2 + 9 + 5 + 8}{6} = \\frac{35}{6} \\approx 5{,}83$.`,
    },

    // --- QUIZ 3 ---
    {
      id: '10-11-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-11-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa lokker og lister:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-11-2-n-quiz3-q0',
            task: 'Hva gir range(2, 7)?',
            options: [
              { id: 'a', text: '2, 3, 4, 5, 6, 7', isCorrect: false },
              { id: 'b', text: '2, 3, 4, 5, 6', isCorrect: true },
              { id: 'c', text: '3, 4, 5, 6', isCorrect: false },
              { id: 'd', text: '2, 3, 4, 5', isCorrect: false },
            ],
            solution: '\`range(2, 7)\` gir tallene fra 2 til $7 - 1 = 6$, altsa $2, 3, 4, 5, 6$.',
          },
          {
            id: '10-11-2-n-quiz3-q1',
            task: 'Gitt listen tall = [10, 20, 30, 40]. Hva er tall[1]?',
            options: [
              { id: 'a', text: '10', isCorrect: false },
              { id: 'b', text: '20', isCorrect: true },
              { id: 'c', text: '30', isCorrect: false },
              { id: 'd', text: '40', isCorrect: false },
            ],
            solution: 'Lister i Python starter pa indeks 0. tall[0] = 10, tall[1] = 20, tall[2] = 30, tall[3] = 40.',
          },
          {
            id: '10-11-2-n-quiz3-q2',
            task: 'Hva skrives ut? sum_t = 0. for i in range(1, 4): sum_t = sum_t + i. print(sum_t)',
            options: [
              { id: 'a', text: '10', isCorrect: false },
              { id: 'b', text: '3', isCorrect: false },
              { id: 'c', text: '6', isCorrect: true },
              { id: 'd', text: '4', isCorrect: false },
            ],
            solution: '\`range(1, 4)\` gir $1, 2, 3$. Summen: $0 + 1 + 2 + 3 = 6$.',
          },
          {
            id: '10-11-2-n-quiz3-q3',
            task: 'Hva er forskjellen mellom en for-lokke og en while-lokke?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'For-lokker kan bare telle oppover, while-lokker kan bare telle nedover', isCorrect: false },
              { id: 'c', text: 'For-lokker gjentar et bestemt antall ganger, while-lokker gjentar sa lenge en betingelse er sann', isCorrect: true },
              { id: 'd', text: 'While-lokker er raskere enn for-lokker', isCorrect: false },
            ],
            solution: 'For-lokker brukes nar vi vet pa forhand hvor mange ganger vi skal gjenta. While-lokker brukes nar vi gjenta sa lenge en betingelse er sann -- vi vet ikke nødvendigvis antall ganger pa forhand.',
          },
        ],
        solution: '',
      },
    },

    // --- OPPSUMMERING ---
    {
      id: '10-11-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har na lart det grunnleggende i Python! Her er en oversikt:

- **Variabler** lagrer verdier med datatyper som \`int\` (heltall), \`float\` (desimaltall), \`str\` (tekst) og \`bool\` (sannhetsverdi). Bruk punktum som desimaltegn i Python.
- \`print()\` skriver ut verdier, og **f-strenger** (\`f"tekst {variabel}"\`) lar deg sette variabler rett inn i tekst.
- \`input()\` leser inn data fra brukeren. Husk a konvertere til tall med \`int()\` eller \`float()\`.
- **Betingelser** (\`if\`/\`elif\`/\`else\`) lar programmet ta valg basert pa sammenligninger (\`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`). Innrykk er viktig!
- **For-lokker** gjentar kode et bestemt antall ganger med \`range()\`. Husk at \`range(a, b)\` gar fra $a$ til $b - 1$.
- **While-lokker** gjentar kode sa lenge en betingelse er sann. Pass pa uendelige lokker!
- **Lister** samler verdier med nyttige funksjoner som \`sum()\`, \`len()\`, \`min()\`, \`max()\` og \`append()\`. Indeksering starter pa 0.
- Matematiske operatorer: \`+\`, \`-\`, \`*\`, \`/\` (divisjon), \`//\` (heltallsdivisjon), \`%\` (modulo), \`**\` (potens).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 11.3 NARRATIV: Matematisk programmering
// ============================================================================

export const CHAPTER_10_11_3_NARRATIV: TextbookChapter = {
  id: '10-11-3-narrativ',
  courseId: '10',
  chapterNumber: '11.3',
  title: 'Matematisk programmering',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan Python kan lose likninger, plotte funksjoner, simulere terningkast, jakte primtall og knuse statistikk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske matematiske eigenskapar og samanhengar ved a bruke programmering',
    'bruke programmering til a utforske sannsyn',
  ],
  linkedChapterId: '10-11-3',
  content: [
    // --- INTRO ---
    {
      id: '10-11-3-n-intro',
      type: 'text',
      content: `## Nar Python moter matematikk

Na som du kan grunnleggende Python, er det pa tide a bruke det til noe virkelig spennende: a utforske matematikk! Med et program kan du gjore tusenvis av beregninger pa sekunder -- noe som ville tatt timer for hand.

Tenk deg at du vil finne losningen av en vanskelig likning, tegne grafen til en funksjon, simulere 10 000 terningkast eller finne alle primtall opp til 100. Alt dette er et lite Python-program unna. La oss dykke inn!`,
    },

    // --- NUMERISK LIKNINGSLOSNING ---
    {
      id: '10-11-3-n-section1',
      type: 'text',
      content: `## Lose likninger numerisk -- prove og feile med stil

Noen likninger er vanskelige a lose analytisk med formler, men vi kan bruke programmering til a finne losninger **numerisk**. Det betyr at vi prover oss frem systematisk.

En **numerisk losning** finner en tilnarmet verdi av svaret ved a teste mange verdier. Vi definerer $f(x)$ som venstre side minus hoyre side av likningen, og leter etter $x$-verdier der $f(x)$ er veldig nar null -- eller skifter fortegn.

La oss prove med likningen $x^3 - 2x - 5 = 0$. Vi soker mellom $x = 1$ og $x = 3$:

\`\`\`python
def f(x):
    return x**3 - 2*x - 5

x = 1.0
steg = 0.001

while x <= 3.0:
    if abs(f(x)) < 0.01:
        print(f"Mulig losning: x = {x:.3f}, f(x) = {f(x):.4f}")
    x += steg
\`\`\`

Programmet finner at losningen er omtrent $x \\approx 2{,}094$. Vi kan sjekke: $2{,}094^3 - 2 \\cdot 2{,}094 - 5 \\approx 0$. Stemmer!

Denne metoden fungerer fordi datamaskinen kan teste tusenvis av verdier pa et oyeblikk. For likningen $x^2 - 4x + 1 = 0$ finner vi losningene $x \\approx 0{,}268$ og $x \\approx 3{,}732$, som stemmer med abc-formelen: $x = 2 \\pm \\sqrt{3}$.`,
    },

    // --- PLOTTE FUNKSJONER ---
    {
      id: '10-11-3-n-section2',
      type: 'text',
      content: `## Plotte funksjoner -- se matematikken

En av de kraftigste tingene vi kan gjore med programmering er a **tegne grafer**. Vi kan lage en enkel tekstgraf rett i terminalen:

\`\`\`python
for x in range(-5, 6):
    y = x**2
    stolper = "*" * y
    print(f"x = {x:3d} | {stolper} ({y})")
\`\`\`

Dette tegner $f(x) = x^2$ med stjerner. Du kan tydelig se parabelformen: grafen er symmetrisk om $x = 0$ og stiger raskt for store $|x|$.

For finere grafer kan du bruke biblioteket **matplotlib**:

\`\`\`python
import matplotlib.pyplot as plt

x_verdier = []
y_verdier = []

for i in range(-50, 51):
    x = i / 10
    x_verdier.append(x)
    y_verdier.append(x**2)

plt.plot(x_verdier, y_verdier)
plt.xlabel("x")
plt.ylabel("f(x)")
plt.title("f(x) = x^2")
plt.grid(True)
plt.show()
\`\`\`

Med matplotlib kan du ogsa plotte flere funksjoner i samme graf, legge til rutenett og aksetitler, og eksportere grafen som bilde. Det er et uvurderlig verktoy for a visualisere matematikk!`,
    },

    // --- QUIZ 1 ---
    {
      id: '10-11-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-11-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa numerisk losning og plotting:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-11-3-n-quiz1-q0',
            task: 'Hva betyr det a lose en likning "numerisk"?',
            options: [
              { id: 'a', text: 'A bruke formler til a finne eksakt svar', isCorrect: false },
              { id: 'b', text: 'A teste mange verdier systematisk for a finne en tilnarmet losning', isCorrect: true },
              { id: 'c', text: 'A gjette pa svaret', isCorrect: false },
              { id: 'd', text: 'A bruke GeoGebra', isCorrect: false },
            ],
            solution: 'En numerisk losning finner en tilnarmet verdi ved a teste mange $x$-verdier systematisk og se nar $f(x)$ er nar null.',
          },
          {
            id: '10-11-3-n-quiz1-q1',
            task: 'Nar vi soker etter losninger av $f(x) = 0$ numerisk, hva ser vi etter?',
            options: [
              { id: 'a', text: 'Der $f(x)$ er storst mulig', isCorrect: false },
              { id: 'b', text: 'Der $f(x)$ er lik 1', isCorrect: false },
              { id: 'c', text: 'Der $x$ er lik 0', isCorrect: false },
              { id: 'd', text: 'Der $f(x)$ skifter fortegn eller er veldig nar null', isCorrect: true },
            ],
            solution: 'Vi leter etter $x$-verdier der $|f(x)|$ er veldig liten (nar null), eller der $f(x)$ skifter fortegn fra positivt til negativt.',
          },
          {
            id: '10-11-3-n-quiz1-q2',
            task: 'Hva gir koden: "*" * 5 i Python?',
            options: [
              { id: 'a', text: '"*****"', isCorrect: true },
              { id: 'b', text: '"*5"', isCorrect: false },
              { id: 'c', text: '5', isCorrect: false },
              { id: 'd', text: 'Feilmelding', isCorrect: false },
            ],
            solution: 'I Python gjentar \`"*" * 5\` stjernetegnet 5 ganger, og gir strengen \`"*****"\`.',
          },
        ],
        solution: '',
      },
    },

    // --- MONTE CARLO ---
    {
      id: '10-11-3-n-section3',
      type: 'text',
      content: `## Monte Carlo-simulering -- terningkast pa datamaskinen

En av de mest spennende bruksomradene for programmering i matematikk er a **simulere tilfeldige forsok**. I stedet for a beregne sannsynlighet med formler, kan vi la datamaskinen gjenta forsoket tusenvis av ganger og telle utfallene. Denne metoden kalles **Monte Carlo-simulering**, oppkalt etter det berommte kasinoet i Monte Carlo.

Prinsippet er enkelt:

$$P(\\text{hendelse}) \\approx \\frac{\\text{antall gunstige utfall}}{\\text{totalt antall forsok}}$$

Jo flere forsok vi gjor, desto narmere kommer vi den eksakte sannsynligheten. Med 10 000 forsok far vi vanligvis et godt estimat.

I Python bruker vi \`random\`-modulen:

\`\`\`python
import random

terning = random.randint(1, 6)     # Tilfeldig heltall fra 1 til 6
mynt = random.choice(["kron", "mynt"])  # Tilfeldig valg
\`\`\`

La oss simulere 10 000 kast med to terninger og finne sannsynligheten for a fa summen 7:

\`\`\`python
import random

antall_forsok = 10000
antall_syv = 0

for i in range(antall_forsok):
    terning1 = random.randint(1, 6)
    terning2 = random.randint(1, 6)
    if terning1 + terning2 == 7:
        antall_syv += 1

sannsynlighet = antall_syv / antall_forsok
print(f"Estimert sannsynlighet: {sannsynlighet:.4f}")
\`\`\`

Typisk utskrift: ca. $0{,}167$. Den eksakte sannsynligheten er $\\frac{6}{36} = \\frac{1}{6} \\approx 0{,}1667$ (det er 6 gunstige utfall: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ av totalt $36$ mulige). Simuleringen stemmer!

Du kan ogsa bruke Monte Carlo til a estimere $\\pi$! Generer tilfeldige punkter $(x, y)$ i et enhetskvadrat og tell hvor mange som havner innenfor kvartsirkelen $x^2 + y^2 \\leq 1$. Da er $\\pi \\approx 4 \\cdot \\frac{\\text{innenfor}}{\\text{totalt}}$, fordi arealet av kvartsirkelen er $\\frac{\\pi}{4}$.`,
    },

    // --- QUIZ 2 ---
    {
      id: '10-11-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-11-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Monte Carlo-simulering:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-11-3-n-quiz2-q0',
            task: 'Hva er en Monte Carlo-simulering?',
            options: [
              { id: 'a', text: 'En metode for a lose likninger analytisk', isCorrect: false },
              { id: 'b', text: 'En metode som bruker tilfeldige tall til a estimere et resultat gjennom mange forsok', isCorrect: true },
              { id: 'c', text: 'En sorteringsalgoritme', isCorrect: false },
              { id: 'd', text: 'En metode for a tegne grafer', isCorrect: false },
            ],
            solution: 'Monte Carlo-simulering bruker tilfeldige tall til a gjenta et forsok mange ganger og estimere sannsynligheter eller andre resultater.',
          },
          {
            id: '10-11-3-n-quiz2-q1',
            task: 'Hva gir random.randint(1, 6) i Python?',
            options: [
              { id: 'a', text: 'Et tilfeldig desimaltall mellom 1 og 6', isCorrect: false },
              { id: 'b', text: 'Alltid tallet 6', isCorrect: false },
              { id: 'c', text: 'Et tilfeldig heltall fra 1 til 6 (inkludert begge)', isCorrect: true },
              { id: 'd', text: 'Et tilfeldig heltall fra 1 til 5', isCorrect: false },
            ],
            solution: '\`random.randint(1, 6)\` gir et tilfeldig heltall fra og med 1 til og med 6. Perfekt for a simulere et terningkast!',
          },
          {
            id: '10-11-3-n-quiz2-q2',
            task: 'Vi kaster to terninger. Hva er den eksakte sannsynligheten for a fa minst en sekser?',
            options: [
              { id: 'a', text: '$\\frac{1}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{3}$', isCorrect: false },
              { id: 'c', text: '$\\frac{11}{36}$', isCorrect: true },
              { id: 'd', text: '$\\frac{12}{36}$', isCorrect: false },
            ],
            solution: '$P(\\text{minst en 6}) = 1 - P(\\text{ingen 6}) = 1 - \\frac{5}{6} \\cdot \\frac{5}{6} = 1 - \\frac{25}{36} = \\frac{11}{36} \\approx 0{,}306$.',
          },
        ],
        solution: '',
      },
    },

    // --- PRIMTALL OG STATISTIKK ---
    {
      id: '10-11-3-n-section4',
      type: 'text',
      content: `## Primtallsjakt med Python

Et **primtall** er et tall storre enn 1 som bare er delelig med 1 og seg selv. De forste primtallene er $2, 3, 5, 7, 11, 13, 17, 19, 23, \\ldots$ A finne store primtall er viktig i kryptografi -- det er primtall som gor at nettbank og passord er trygge!

Her er et smart triks: for a sjekke om $n$ er et primtall, trenger vi bare a teste divisorer opp til $\\sqrt{n}$. Hvorfor? Fordi hvis $n = a \\cdot b$ og begge er storre enn $\\sqrt{n}$, ville $a \\cdot b > n$.

\`\`\`python
import math

tall = int(input("Skriv inn et tall: "))

if tall < 2:
    print(f"{tall} er ikke et primtall")
else:
    er_primtall = True
    for i in range(2, int(math.sqrt(tall)) + 1):
        if tall % i == 0:
            er_primtall = False
            break
    if er_primtall:
        print(f"{tall} er et primtall")
    else:
        print(f"{tall} er ikke et primtall")
\`\`\`

For $n = 97$: $\\sqrt{97} \\approx 9{,}8$, sa vi sjekker bare 2, 3, 4, 5, 6, 7, 8, 9. Ingen deler 97, sa 97 er et primtall! Det er 25 primtall mellom 2 og 100.

## Statistikk med Python

Nar vi har store datamengder, er programmering uvurderlig for a beregne statistiske mal. De viktigste er:

- **Gjennomsnitt**: $\\bar{x} = \\frac{x_1 + x_2 + \\ldots + x_n}{n}$
- **Median**: Den midterste verdien i sortert rekkefolgje (for oddetall $n$: element nr. $n//2$; for partall $n$: gjennomsnittet av de to midterste)
- **Typetall**: Verdien som forekommer oftest
- **Variasjonsbredde**: Storste verdi minus minste verdi

\`\`\`python
karakterer = [4, 5, 3, 6, 5, 4, 5, 3, 4, 6]
sortert = sorted(karakterer)
n = len(sortert)

gjennomsnitt = sum(karakterer) / n
if n % 2 == 1:
    median = sortert[n // 2]
else:
    median = (sortert[n // 2 - 1] + sortert[n // 2]) / 2

typetall = max(set(karakterer), key=karakterer.count)
variasjonsbredde = max(karakterer) - min(karakterer)

print(f"Gjennomsnitt: {gjennomsnitt:.1f}")
print(f"Median: {median}")
print(f"Typetall: {typetall}")
print(f"Variasjonsbredde: {variasjonsbredde}")
\`\`\`

Resultatet: Gjennomsnitt $= 4{,}5$, median $= 4{,}5$, typetall $= 4$ (og 5, begge forekommer 3 ganger), variasjonsbredde $= 3$.`,
    },

    // --- QUIZ 3 ---
    {
      id: '10-11-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-11-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa primtall og statistikk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-11-3-n-quiz3-q0',
            task: 'Hvorfor trenger vi bare sjekke divisorer opp til $\\sqrt{n}$ nar vi tester om $n$ er et primtall?',
            options: [
              { id: 'a', text: 'Fordi det er en tommelfingerregel uten matematisk begrunnelse', isCorrect: false },
              { id: 'b', text: 'Fordi alle primtall er mindre enn $\\sqrt{n}$', isCorrect: false },
              { id: 'c', text: 'Fordi hvis $n = a \\cdot b$ og begge er storre enn $\\sqrt{n}$, sa ville $a \\cdot b > n$', isCorrect: true },
              { id: 'd', text: 'Fordi Python ikke klarer a sjekke flere tall', isCorrect: false },
            ],
            solution: 'Hvis $n$ har en faktor $a > \\sqrt{n}$, ma den andre faktoren $b = n/a$ vare mindre enn $\\sqrt{n}$, og vi ville allerede ha funnet den.',
          },
          {
            id: '10-11-3-n-quiz3-q1',
            task: 'Hva er medianen av tallene $3, 7, 2, 9, 5$?',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$5{,}2$', isCorrect: false },
              { id: 'c', text: '$5$', isCorrect: true },
              { id: 'd', text: '$3$', isCorrect: false },
            ],
            solution: 'Sorter: $2, 3, 5, 7, 9$. Med 5 tall (oddetall) er medianen det midterste elementet, som er $5$.',
          },
          {
            id: '10-11-3-n-quiz3-q2',
            task: 'Hvor mange primtall er det mellom 2 og 20?',
            options: [
              { id: 'a', text: '6', isCorrect: false },
              { id: 'b', text: '7', isCorrect: false },
              { id: 'c', text: '8', isCorrect: true },
              { id: 'd', text: '9', isCorrect: false },
            ],
            solution: 'Primtallene mellom 2 og 20 er: $2, 3, 5, 7, 11, 13, 17, 19$ -- det er 8 stykker.',
          },
          {
            id: '10-11-3-n-quiz3-q3',
            task: 'Hva er variasjonsbredden til tallene $[2, 8, 3, 15, 6]$?',
            options: [
              { id: 'a', text: '$6{,}8$', isCorrect: false },
              { id: 'b', text: '$15$', isCorrect: false },
              { id: 'c', text: '$12$', isCorrect: false },
              { id: 'd', text: '$13$', isCorrect: true },
            ],
            solution: 'Variasjonsbredde = storste verdi minus minste verdi = $15 - 2 = 13$.',
          },
        ],
        solution: '',
      },
    },

    // --- OPPSUMMERING ---
    {
      id: '10-11-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du sett hvor kraftig kombinasjonen av Python og matematikk er:

- **Numerisk likningslosning**: Vi kan teste mange $x$-verdier systematisk for a finne der $f(x) \\approx 0$, selv for likninger som er vanskelige a lose med formler.
- **Plotte funksjoner**: Vi kan lage tekstgrafer med stjerner eller bruke matplotlib for profesjonelle grafer som visualiserer matematiske sammenhenger.
- **Monte Carlo-simulering**: Ved a bruke tilfeldige tall kan vi estimere sannsynligheter gjennom mange forsok. Jo flere forsok, desto bedre estimat. Formelen er $P \\approx \\frac{\\text{gunstige}}{\\text{totalt}}$.
- **Primtall**: Vi kan sjekke om tall er primtall ved a teste divisorer opp til $\\sqrt{n}$. Det er 25 primtall mellom 2 og 100.
- **Statistikk**: Python gjor det enkelt a beregne gjennomsnitt, median, typetall og variasjonsbredde for store datamengder med funksjoner som \`sum()\`, \`len()\`, \`sorted()\`, \`min()\` og \`max()\`.

Programmering er ikke bare et hjelpemiddel -- det er en mate a tenke pa. Nar du larer a programmere, larer du a bryte ned problemer i sma steg, tenke logisk og automatisere losninger. Det er ferdigheter du far bruk for langt utover matematikktimene!`,
    },
  ],
  exercises: [],
};

// Eksporter alle narrative kapitler i seksjon 11
export const MATEMATIKK_10_NARRATIV_DEL11_CHAPTERS = [
  CHAPTER_10_11_1_NARRATIV,
  CHAPTER_10_11_2_NARRATIV,
  CHAPTER_10_11_3_NARRATIV,
];
