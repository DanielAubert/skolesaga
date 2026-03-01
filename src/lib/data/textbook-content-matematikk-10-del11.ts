/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Del 11: Programmering og digitale verktøy
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 11.1: Algoritmer og pseudokode
// ============================================================================

export const CHAPTER_10_11_1: TextbookChapter = {
  id: '10-11-1',
  courseId: '10',
  chapterNumber: '11.1',
  title: 'Algoritmer og pseudokode',
  description: 'Lær hva en algoritme er, hvordan du lager flytdiagrammer og skriver pseudokode for å løse matematiske problemer steg for steg.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske matematiske eigenskapar og samanhengar ved å bruke programmering',
  ],
  content: [
    // INTRO
    {
      id: '10-11-1-intro',
      type: 'text',
      content: `## Algoritmer og pseudokode

Har du noen gang tenkt over at en oppskrift på en kake egentlig er en algoritme? En oppskrift er en steg-for-steg-beskrivelse av hva du skal gjøre for å oppnå et bestemt resultat. På samme måte er en **algoritme** en presis oppskrift for å løse et problem.

I matematikk bruker vi algoritmer hele tiden, for eksempel når vi deler to tall med lang divisjon, eller når vi finner fellesnevner. I dette kapittelet skal du lære:

- Hva en algoritme er og hvorfor det er nyttig
- Hvordan du lager flytdiagrammer
- Hvordan du skriver pseudokode
- Klassiske algoritmer som Euklids algoritme`,
    },

    // BLOKK 1: Hva er en algoritme?
    {
      id: '10-11-1-def-algoritme',
      type: 'definition',
      title: 'Algoritme',
      content: `En **algoritme** er en endelig, presis beskrivelse av en fremgangsmåte for å løse et problem eller utføre en oppgave.

En god algoritme har disse egenskapene:
- **Presis**: Hvert steg er entydig beskrevet
- **Endelig**: Algoritmen stopper etter et endelig antall steg
- **Generell**: Den fungerer for alle gyldige inndata, ikke bare ett spesifikt tilfelle

Algoritmer kan beskrives med vanlig tekst, med **pseudokode** eller med **flytdiagrammer**.`,
    },
    {
      id: '10-11-1-example-1',
      type: 'example',
      title: 'Eksempel: Algoritme for å finne det største tallet',
      problem: 'Beskriv en algoritme som finner det største av tre tall $a$, $b$ og $c$.',
      solution: `**Løsning:**

**Steg 1:** Sett $\\text{størst} = a$

**Steg 2:** Hvis $b > \\text{størst}$, sett $\\text{størst} = b$

**Steg 3:** Hvis $c > \\text{størst}$, sett $\\text{størst} = c$

**Steg 4:** $\\text{størst}$ er nå det største av de tre tallene

La oss teste med $a = 7$, $b = 12$, $c = 5$:
- Steg 1: størst $= 7$
- Steg 2: $12 > 7$, så størst $= 12$
- Steg 3: $5 > 12$ er usant, så størst er fortsatt $12$
- Svar: Det største tallet er $12$.`,
    },
    {
      id: '10-11-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-11-1-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv en algoritme (med vanlig tekst) som avgjør om et tall er positivt, negativt eller null.',
        solution: 'Steg 1: Les inn tallet $n$. Steg 2: Hvis $n > 0$, skriv "Tallet er positivt". Steg 3: Hvis $n < 0$, skriv "Tallet er negativt". Steg 4: Hvis $n = 0$, skriv "Tallet er null".',
        hints: ['Tenk på hvilke tre muligheter et tall har: det kan være positivt, negativt eller null.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 2: Flytdiagrammer
    {
      id: '10-11-1-def-flytdiagram',
      type: 'definition',
      title: 'Flytdiagram',
      content: `Et **flytdiagram** er en grafisk fremstilling av en algoritme. Vi bruker standardiserte symboler:

| Symbol | Betydning |
|--------|-----------|
| Oval (avrundet rektangel) | Start / Stopp |
| Rektangel | Prosess / Beregning |
| Diamant (rombe) | Beslutning (ja/nei) |
| Parallellogram | Inn-/utdata |
| Pil | Flyt / retning |

Flytdiagrammer gjør det lettere å se **strukturen** i en algoritme og er spesielt nyttige når det er **forgreninger** (if/else) eller **løkker** (gjentakelser).`,
    },
    {
      id: '10-11-1-example-2',
      type: 'example',
      title: 'Eksempel: Flytdiagram for partall/oddetall',
      problem: 'Beskriv et flytdiagram som avgjør om et tall er partall eller oddetall.',
      solution: `**Løsning:**

Flytdiagrammet ser slik ut i tekstform:

1. **[Start]**
2. **[Les inn tall n]** (parallellogram)
3. **[Er n delelig med 2?]** (diamant)
   - **Ja** $\\rightarrow$ **[Skriv ut "Partall"]** $\\rightarrow$ **[Stopp]**
   - **Nei** $\\rightarrow$ **[Skriv ut "Oddetall"]** $\\rightarrow$ **[Stopp]**

Vi sjekker om $n$ er delelig med 2 ved å se om resten ved divisjon er 0:

$$n \\mod 2 = 0 \\implies \\text{partall}$$

For eksempel: $n = 14$: $14 \\mod 2 = 0$, altså er 14 et partall.`,
    },
    {
      id: '10-11-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-11-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Tegn et flytdiagram som sjekker om et tall er positivt, negativt eller null. Bruk diamantsymboler for beslutninger og parallellogrammer for inn- og utdata.',
        solution: 'Flytdiagrammet starter med [Start], går til [Les inn n], deretter til en diamant [n > 0?]. Hvis ja: [Skriv "Positivt"] -> [Stopp]. Hvis nei: ny diamant [n < 0?]. Hvis ja: [Skriv "Negativt"] -> [Stopp]. Hvis nei: [Skriv "Null"] -> [Stopp].',
        hints: ['Du trenger to beslutningssymboler (diamanter): en for å sjekke om tallet er positivt, og en for å sjekke om det er negativt.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 3: Pseudokode
    {
      id: '10-11-1-def-pseudokode',
      type: 'definition',
      title: 'Pseudokode',
      content: `**Pseudokode** er en forenklet, uformell måte å beskrive en algoritme på. Den ligner på et programmeringsspråk, men er skrevet på vanlig språk slik at den er lett å forstå.

Vanlige elementer i pseudokode:
- **LES** / **SKRIV**: Inn- og utdata
- **SETT** / **LA**: Tilordne verdier
- **HVIS ... SÅ ... ELLERS**: Betingelser (forgreninger)
- **GJENTA ... MENS** / **FOR ... TIL**: Løkker (gjentakelser)
- **RETURNER**: Gi tilbake et resultat

Pseudokode trenger ikke følge strenge syntaksregler, men den bør være presis nok til at noen kan oversette den til et ekte programmeringsspråk.`,
    },
    {
      id: '10-11-1-example-3',
      type: 'example',
      title: 'Eksempel: Pseudokode for summen av tall fra 1 til n',
      problem: 'Skriv pseudokode som beregner summen $1 + 2 + 3 + \\ldots + n$.',
      solution: `**Løsning:**

\`\`\`
LES n
SETT sum = 0
FOR i = 1 TIL n
    SETT sum = sum + i
SLUTT FOR
SKRIV "Summen er " + sum
\`\`\`

**Test med $n = 5$:**

| Steg | $i$ | $\\text{sum}$ |
|------|-----|---------------|
| Start | — | 0 |
| 1 | 1 | $0 + 1 = 1$ |
| 2 | 2 | $1 + 2 = 3$ |
| 3 | 3 | $3 + 3 = 6$ |
| 4 | 4 | $6 + 4 = 10$ |
| 5 | 5 | $10 + 5 = 15$ |

Summen av tallene fra 1 til 5 er $15$.

Vi kan sjekke med formelen: $\\frac{n(n+1)}{2} = \\frac{5 \\cdot 6}{2} = 15$ \\checkmark`,
    },
    {
      id: '10-11-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-11-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv pseudokode som beregner produktet $1 \\cdot 2 \\cdot 3 \\cdot \\ldots \\cdot n$ (altså $n!$ — n fakultet). Test pseudokoden din for $n = 4$.',
        subTasks: [
          { label: 'a', task: 'Skriv pseudokoden.', solution: 'LES n, SETT produkt = 1, FOR i = 1 TIL n: SETT produkt = produkt * i, SKRIV produkt.' },
          { label: 'b', task: 'Test pseudokoden for $n = 4$ ved å lage en tabell over verdiene i hvert steg.', solution: 'Steg 1: i=1, produkt=1. Steg 2: i=2, produkt=2. Steg 3: i=3, produkt=6. Steg 4: i=4, produkt=24. Svar: $4! = 24$.' },
        ],
        solution: 'Pseudokode: LES n. SETT produkt = 1. FOR i = 1 TIL n: SETT produkt = produkt * i. SKRIV produkt. For n = 4: produkt blir 1 -> 1 -> 2 -> 6 -> 24. Svaret er $4! = 24$.',
        hints: ['Produktet av tall ligner på summen, men i stedet for å legge til, ganger du. Start med produkt = 1 (ikke 0).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 4: Euklids algoritme
    {
      id: '10-11-1-text-euklid',
      type: 'text',
      content: `## Euklids algoritme

En av de eldste kjente algoritmene er **Euklids algoritme**, oppkalt etter den greske matematikeren Euklid som beskrev den rundt 300 f.Kr. Denne algoritmen finner den **største felles divisor** (SFD) av to tall.

Den største felles divisor av to tall $a$ og $b$ er det største tallet som går opp i begge. Vi skriver $\\text{SFD}(a, b)$.

For eksempel er $\\text{SFD}(12, 8) = 4$ fordi 4 er det største tallet som deler både 12 og 8.`,
    },
    {
      id: '10-11-1-def-euklid',
      type: 'definition',
      title: 'Euklids algoritme',
      content: `**Euklids algoritme** for å finne $\\text{SFD}(a, b)$:

1. Hvis $b = 0$, er $\\text{SFD}(a, b) = a$. Stopp.
2. Beregn resten $r = a \\mod b$ (resten når $a$ deles på $b$).
3. Sett $a = b$ og $b = r$.
4. Gå til steg 1.

I pseudokode:

\`\`\`
LES a, b
GJENTA MENS b ≠ 0
    SETT r = a mod b
    SETT a = b
    SETT b = r
SLUTT GJENTA
SKRIV "SFD er " + a
\`\`\``,
    },
    {
      id: '10-11-1-example-4',
      type: 'example',
      title: 'Eksempel: Euklids algoritme for SFD(48, 18)',
      problem: 'Bruk Euklids algoritme til å finne $\\text{SFD}(48, 18)$.',
      solution: `**Løsning:**

| Steg | $a$ | $b$ | $r = a \\mod b$ |
|------|-----|-----|-----------------|
| 1 | 48 | 18 | $48 \\mod 18 = 12$ |
| 2 | 18 | 12 | $18 \\mod 12 = 6$ |
| 3 | 12 | 6 | $12 \\mod 6 = 0$ |
| 4 | 6 | 0 | Stopp! |

Når $b = 0$, er svaret $a = 6$.

**Svar:** $\\text{SFD}(48, 18) = 6$.

Vi kan sjekke: $48 = 6 \\cdot 8$ og $18 = 6 \\cdot 3$. Stemmer! \\checkmark`,
    },
    {
      id: '10-11-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-11-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Euklids algoritme til å finne den største felles divisor.',
        subTasks: [
          { label: 'a', task: 'Finn $\\text{SFD}(84, 36)$.', solution: '$84 \\mod 36 = 12$, $36 \\mod 12 = 0$. $\\text{SFD}(84, 36) = 12$.' },
          { label: 'b', task: 'Finn $\\text{SFD}(105, 45)$.', solution: '$105 \\mod 45 = 15$, $45 \\mod 15 = 0$. $\\text{SFD}(105, 45) = 15$.' },
          { label: 'c', task: 'Finn $\\text{SFD}(252, 198)$.', solution: '$252 \\mod 198 = 54$, $198 \\mod 54 = 36$, $54 \\mod 36 = 18$, $36 \\mod 18 = 0$. $\\text{SFD}(252, 198) = 18$.' },
        ],
        solution: 'a) SFD(84, 36) = 12. b) SFD(105, 45) = 15. c) SFD(252, 198) = 18.',
        hints: ['Husk: Beregn resten, bytt verdier, gjenta til resten er 0.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 5: Sorteringsalgoritmer
    {
      id: '10-11-1-text-sortering',
      type: 'text',
      content: `## Sorteringsalgoritmer

**Sortering** er en av de vanligste oppgavene i programmering. Når du søker etter noe på nettet, sorterer et digitalt musikkbibliotek, eller rangerer en tabell, brukes sorteringsalgoritmer.

En enkel sorteringsalgoritme er **boblsortering** (bubble sort). Ideen er:
1. Gå gjennom listen og sammenlign hvert par av naboelementer
2. Hvis to naboer er i feil rekkefølge, bytt dem
3. Gjenta til hele listen er sortert

Navnet "boblsortering" kommer av at de største verdiene gradvis "bobler" opp til riktig posisjon, litt som luftbobler i vann.`,
    },
    {
      id: '10-11-1-example-5',
      type: 'example',
      title: 'Eksempel: Boblsortering',
      problem: 'Sorter listen $[5, 3, 8, 1, 2]$ med boblsortering. Vis hvert steg.',
      solution: `**Løsning:**

**Runde 1** (gå gjennom listen):
- Sammenlign 5 og 3: $5 > 3$, bytt $\\rightarrow [3, 5, 8, 1, 2]$
- Sammenlign 5 og 8: $5 < 8$, ok $\\rightarrow [3, 5, 8, 1, 2]$
- Sammenlign 8 og 1: $8 > 1$, bytt $\\rightarrow [3, 5, 1, 8, 2]$
- Sammenlign 8 og 2: $8 > 2$, bytt $\\rightarrow [3, 5, 1, 2, 8]$

**Runde 2:**
- $3 < 5$, ok $\\rightarrow [3, 5, 1, 2, 8]$
- $5 > 1$, bytt $\\rightarrow [3, 1, 5, 2, 8]$
- $5 > 2$, bytt $\\rightarrow [3, 1, 2, 5, 8]$

**Runde 3:**
- $3 > 1$, bytt $\\rightarrow [1, 3, 2, 5, 8]$
- $3 > 2$, bytt $\\rightarrow [1, 2, 3, 5, 8]$

**Runde 4:**
- $1 < 2$, ok. Ingen bytter $\\rightarrow$ ferdig!

**Svar:** Sortert liste: $[1, 2, 3, 5, 8]$.`,
    },
    {
      id: '10-11-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-11-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sorter listen $[7, 2, 9, 4, 1]$ med boblsortering. Skriv ned listen etter hver runde.',
        solution: 'Runde 1: [2, 7, 4, 1, 9]. Runde 2: [2, 4, 1, 7, 9]. Runde 3: [2, 1, 4, 7, 9]. Runde 4: [1, 2, 4, 7, 9]. Sortert!',
        hints: ['Gå gjennom listen fra venstre. Sammenlign hvert par av naboer. Bytt hvis de er i feil rekkefølge. Gjenta til ingen bytter trengs.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-11-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-11-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv pseudokode for en algoritme som finner det minste tallet i en liste med $n$ tall.',
        solution: 'LES liste med n tall. SETT minst = liste[1]. FOR i = 2 TIL n: HVIS liste[i] < minst: SETT minst = liste[i]. SKRIV "Det minste tallet er " + minst.',
        hints: ['Start med å anta at det første tallet er det minste. Gå deretter gjennom resten og oppdater hvis du finner noe mindre.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // OPPSUMMERING
    {
      id: '10-11-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **algoritme** er en presis, endelig oppskrift for å løse et problem
- **Flytdiagrammer** bruker standardiserte symboler (ovaler, rektangler, diamanter, parallellogrammer) for å visualisere algoritmer
- **Pseudokode** er en uformell tekstbeskrivelse av en algoritme som ligner et programmeringsspråk
- **Euklids algoritme** finner største felles divisor ved gjentatt divisjon med rest
- **Boblsortering** sorterer en liste ved å sammenligne og bytte naboer gjentatte ganger

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Algoritme | Presis, endelig fremgangsmåte for å løse et problem |
| Flytdiagram | Grafisk fremstilling av en algoritme med standardsymboler |
| Pseudokode | Uformell tekstbeskrivelse som ligner programmeringsspråk |
| SFD | Største felles divisor – det største tallet som deler begge tall |
| Boblsortering | Sorteringsalgoritme som bytter naboer i feil rekkefølge |`,
    },

    // --- Samleoppgaver ---
    {
      id: '10-11-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-11-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv pseudokode for en algoritme som sjekker om et tall $n$ er et primtall. Test pseudokoden din for $n = 17$ og $n = 15$.',
        subTasks: [
          { label: 'a', task: 'Skriv pseudokoden.', solution: 'LES n. HVIS n < 2: SKRIV "Ikke primtall". FOR i = 2 TIL n-1: HVIS n mod i = 0: SKRIV "Ikke primtall", STOPP. SKRIV "Primtall".' },
          { label: 'b', task: 'Test for $n = 17$.', solution: 'Vi sjekker: $17 \\mod 2 = 1$, $17 \\mod 3 = 2$, $17 \\mod 4 = 1$, ..., $17 \\mod 16 = 1$. Ingen deler, så 17 er et primtall.' },
          { label: 'c', task: 'Test for $n = 15$.', solution: 'Vi sjekker: $15 \\mod 2 = 1$, $15 \\mod 3 = 0$. Stopp! 3 deler 15, så 15 er ikke et primtall.' },
        ],
        solution: 'Pseudokode: LES n. FOR i = 2 TIL n-1: HVIS n mod i = 0, skriv "Ikke primtall" og stopp. Ellers: skriv "Primtall". Test: 17 er primtall (ingen divisorer). 15 er ikke primtall (delelig med 3).',
        hints: ['Et primtall er bare delelig med 1 og seg selv. Sjekk om noen tall fra 2 til $n-1$ deler $n$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-11-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-11-1-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En brøk $\\frac{a}{b}$ kan forkortes ved å dele teller og nevner med $\\text{SFD}(a, b)$. Skriv en algoritme (pseudokode eller flytdiagram) som leser inn en brøk og skriver ut den forkortede brøken. Test med $\\frac{48}{36}$.',
        solution: 'LES a, b. Bruk Euklids algoritme til å finne SFD(a, b). SETT ny_teller = a / SFD. SETT ny_nevner = b / SFD. SKRIV ny_teller + "/" + ny_nevner. Test: SFD(48, 36) = 12. Forkortet brøk: $48/12 = 4$, $36/12 = 3$. Svar: $\\frac{4}{3}$.',
        hints: ['Først: Finn SFD med Euklids algoritme. Deretter: Del både teller og nevner med SFD.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Algoritme', definition: 'Presis, endelig oppskrift for å løse et problem' },
    { term: 'Flytdiagram', definition: 'Grafisk fremstilling av en algoritme med standardsymboler' },
    { term: 'Pseudokode', definition: 'Uformell tekstbeskrivelse av en algoritme' },
    { term: 'Største felles divisor (SFD)', definition: 'Det største tallet som deler to tall' },
    { term: 'Boblsortering', definition: 'Sorteringsalgoritme som gjentatte ganger bytter naboer i feil rekkefølge' },
    { term: 'Modulo', definition: 'Resten ved heltallsdivisjon, skrevet a mod b' },
  ],
  nextChapter: '10-11-2',
};

// ============================================================================
// Kapittel 11.2: Programmering med Python
// ============================================================================

export const CHAPTER_10_11_2: TextbookChapter = {
  id: '10-11-2',
  courseId: '10',
  chapterNumber: '11.2',
  title: 'Programmering med Python',
  description: 'Lær grunnleggende Python-programmering: variabler, utskrift, brukerinndata, betingelser, løkker og lister – med matematiske eksempler.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske matematiske eigenskapar og samanhengar ved å bruke programmering',
  ],
  content: [
    // INTRO
    {
      id: '10-11-2-intro',
      type: 'text',
      content: `## Programmering med Python

Nå som du kan lage algoritmer med pseudokode, er det på tide å lære et ekte programmeringsspråk! **Python** er et populært programmeringsspråk som er lett å lære og mye brukt i matematikk og vitenskap.

I dette kapittelet skal du lære:

- Variabler og datatyper
- Utskrift med \`print()\` og inndata med \`input()\`
- Betingelser med \`if\`, \`elif\` og \`else\`
- Løkker med \`for\` og \`while\`
- Lister
- Matematiske operatorer i Python`,
    },

    // BLOKK 1: Variabler og utskrift
    {
      id: '10-11-2-def-variabler',
      type: 'definition',
      title: 'Variabler og datatyper i Python',
      content: `En **variabel** er et navn som lagrer en verdi. I Python lager du en variabel ved å gi den et navn og en verdi:

\`\`\`python
alder = 15
navn = "Emma"
hoyde = 1.68
er_elev = True
\`\`\`

Python har flere **datatyper**:
| Type | Beskrivelse | Eksempel |
|------|-------------|----------|
| \`int\` | Heltall | \`42\`, \`-7\`, \`0\` |
| \`float\` | Desimaltall | \`3.14\`, \`0.5\` |
| \`str\` | Tekst (streng) | \`"Hei"\`, \`"Python"\` |
| \`bool\` | Sannhetsverdi | \`True\`, \`False\` |

Merk: I Python bruker vi **punktum** som desimaltegn (ikke komma).`,
    },
    {
      id: '10-11-2-text-print',
      type: 'text',
      content: `### Utskrift med print()

Funksjonen \`print()\` skriver ut tekst og verdier til skjermen:

\`\`\`python
print("Hei, verden!")
print(42)
print("Svaret er", 7 + 3)
\`\`\`

Gir utskriften:
\`\`\`
Hei, verden!
42
Svaret er 10
\`\`\`

Du kan kombinere tekst og variabler med **f-strenger**:

\`\`\`python
navn = "Ola"
alder = 15
print(f"{navn} er {alder} år gammel.")
\`\`\`

Gir utskriften:
\`\`\`
Ola er 15 år gammel.
\`\`\``,
    },
    {
      id: '10-11-2-example-1',
      type: 'example',
      title: 'Eksempel: Beregne areal av en sirkel',
      problem: 'Skriv et Python-program som beregner arealet av en sirkel med radius $r = 5$.',
      solution: `**Løsning:**

\`\`\`python
import math

radius = 5
areal = math.pi * radius**2
print(f"Arealet av sirkelen er {areal:.2f}")
\`\`\`

Utskrift:
\`\`\`
Arealet av sirkelen er 78.54
\`\`\`

Forklaring:
- \`import math\` gir tilgang til matematiske funksjoner og konstanter
- \`math.pi\` er verdien av $\\pi \\approx 3{,}14159$
- \`**2\` betyr "opphøyd i 2" (kvadrat)
- \`:.2f\` betyr at vi viser 2 desimaler`,
    },
    {
      id: '10-11-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-11-2-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et Python-program som lagrer lengden og bredden til et rektangel i variabler, beregner arealet og omkretsen, og skriver ut begge.',
        solution: `\`\`\`python
lengde = 8
bredde = 5
areal = lengde * bredde
omkrets = 2 * (lengde + bredde)
print(f"Areal: {areal}")
print(f"Omkrets: {omkrets}")
\`\`\`
Utskrift: Areal: 40, Omkrets: 26.`,
        hints: ['Areal = lengde * bredde. Omkrets = 2 * (lengde + bredde).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 2: Input og matematikk
    {
      id: '10-11-2-text-input',
      type: 'text',
      content: `### Brukerinndata med input()

Funksjonen \`input()\` lar brukeren skrive inn data. Den returnerer alltid en **tekststreng**, så vi må konvertere til tall med \`int()\` eller \`float()\`:

\`\`\`python
navn = input("Hva heter du? ")
alder = int(input("Hvor gammel er du? "))
hoyde = float(input("Hvor høy er du (i meter)? "))
\`\`\`

### Matematiske operatorer i Python

| Operator | Betydning | Eksempel | Resultat |
|----------|-----------|----------|----------|
| \`+\` | Addisjon | \`7 + 3\` | \`10\` |
| \`-\` | Subtraksjon | \`7 - 3\` | \`4\` |
| \`*\` | Multiplikasjon | \`7 * 3\` | \`21\` |
| \`/\` | Divisjon | \`7 / 3\` | \`2.333...\` |
| \`//\` | Heltallsdivisjon | \`7 // 3\` | \`2\` |
| \`%\` | Modulo (rest) | \`7 % 3\` | \`1\` |
| \`**\` | Potens | \`2 ** 3\` | \`8\` |

Merk forskjellen mellom \`/\` (vanlig divisjon) og \`//\` (heltallsdivisjon). Og \`%\` (modulo) gir resten – det samme som vi brukte i Euklids algoritme!`,
    },
    {
      id: '10-11-2-example-2',
      type: 'example',
      title: 'Eksempel: Program med brukerinndata',
      problem: 'Skriv et program som ber brukeren om to tall og skriver ut summen, differansen, produktet og kvotienten.',
      solution: `**Løsning:**

\`\`\`python
tall1 = float(input("Skriv inn det første tallet: "))
tall2 = float(input("Skriv inn det andre tallet: "))

print(f"Sum: {tall1 + tall2}")
print(f"Differanse: {tall1 - tall2}")
print(f"Produkt: {tall1 * tall2}")
print(f"Kvotient: {tall1 / tall2}")
\`\`\`

Eksempel på kjøring:
\`\`\`
Skriv inn det første tallet: 12
Skriv inn det andre tallet: 5
Sum: 17.0
Differanse: 7.0
Produkt: 60.0
Kvotient: 2.4
\`\`\``,
    },
    {
      id: '10-11-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-11-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et Python-program som ber brukeren om radius til en sirkel, og deretter beregner og skriver ut arealet og omkretsen.',
        solution: `\`\`\`python
import math
radius = float(input("Skriv inn radius: "))
areal = math.pi * radius**2
omkrets = 2 * math.pi * radius
print(f"Areal: {areal:.2f}")
print(f"Omkrets: {omkrets:.2f}")
\`\`\``,
        hints: ['Bruk `float(input(...))` for å lese inn radius. Arealet er $\\pi r^2$ og omkretsen er $2\\pi r$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 3: Betingelser (if/elif/else)
    {
      id: '10-11-2-def-betingelser',
      type: 'definition',
      title: 'Betingelser: if, elif og else',
      content: `**Betingelser** lar programmet ta valg. Vi bruker \`if\`, \`elif\` (forkortelse for "else if") og \`else\`:

\`\`\`python
tall = int(input("Skriv inn et tall: "))

if tall > 0:
    print("Tallet er positivt")
elif tall < 0:
    print("Tallet er negativt")
else:
    print("Tallet er null")
\`\`\`

**Sammenligningsoperatorer:**
| Operator | Betydning |
|----------|-----------|
| \`==\` | Er lik |
| \`!=\` | Er ikke lik |
| \`>\` | Større enn |
| \`<\` | Mindre enn |
| \`>=\` | Større enn eller lik |
| \`<=\` | Mindre enn eller lik |

**Viktig:** Legg merke til **innrykk** (4 mellomrom eller 1 tabulatortast). Python bruker innrykk for å vise hva som hører til en betingelse.`,
    },
    {
      id: '10-11-2-example-3',
      type: 'example',
      title: 'Eksempel: Sjekke om tall er partall eller oddetall',
      problem: 'Skriv et program som sjekker om et tall er partall eller oddetall.',
      solution: `**Løsning:**

\`\`\`python
tall = int(input("Skriv inn et heltall: "))

if tall % 2 == 0:
    print(f"{tall} er et partall")
else:
    print(f"{tall} er et oddetall")
\`\`\`

Forklaring: \`tall % 2\` gir resten når tallet deles på 2. Hvis resten er 0, er tallet et partall.

Eksempel på kjøring:
\`\`\`
Skriv inn et heltall: 17
17 er et oddetall
\`\`\``,
    },
    {
      id: '10-11-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-11-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som ber brukeren om tre tall og skriver ut det største av dem. Bruk `if`, `elif` og `else`.',
        solution: `\`\`\`python
a = float(input("Tall 1: "))
b = float(input("Tall 2: "))
c = float(input("Tall 3: "))

if a >= b and a >= c:
    print(f"Det største tallet er {a}")
elif b >= a and b >= c:
    print(f"Det største tallet er {b}")
else:
    print(f"Det største tallet er {c}")
\`\`\``,
        hints: ['Sammenlign tallene parvis. Du kan bruke `and` for å sjekke to betingelser samtidig.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 4: For-løkker
    {
      id: '10-11-2-def-for',
      type: 'definition',
      title: 'For-løkker',
      content: `En **for-løkke** gjentar en kodeblokk et bestemt antall ganger. I Python bruker vi \`for\` sammen med \`range()\`:

\`\`\`python
for i in range(5):
    print(i)
\`\`\`

Gir utskriften: 0, 1, 2, 3, 4

\`range()\` kan brukes på tre måter:
| Uttrykk | Betydning | Tall som genereres |
|---------|-----------|-------------------|
| \`range(n)\` | Fra 0 til $n-1$ | \`0, 1, 2, ..., n-1\` |
| \`range(a, b)\` | Fra $a$ til $b-1$ | \`a, a+1, ..., b-1\` |
| \`range(a, b, steg)\` | Fra $a$ til $b-1$ med gitt steg | Avhenger av steg |

Eksempler:
\`\`\`python
for i in range(1, 6):     # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 11, 2): # 0, 2, 4, 6, 8, 10
    print(i)
\`\`\``,
    },
    {
      id: '10-11-2-example-4',
      type: 'example',
      title: 'Eksempel: Summere tall med for-løkke',
      problem: 'Skriv et program som beregner summen $1 + 2 + 3 + \\ldots + 100$.',
      solution: `**Løsning:**

\`\`\`python
sum_tall = 0
for i in range(1, 101):
    sum_tall = sum_tall + i

print(f"Summen av tallene fra 1 til 100 er {sum_tall}")
\`\`\`

Utskrift:
\`\`\`
Summen av tallene fra 1 til 100 er 5050
\`\`\`

Vi kan sjekke med formelen: $\\frac{100 \\cdot 101}{2} = 5050$ \\checkmark

**Merk:** Vi bruker variabelnavnet \`sum_tall\` i stedet for \`sum\`, fordi \`sum\` er en innebygd funksjon i Python.`,
    },
    {
      id: '10-11-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-11-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som skriver ut gangetabellen for et tall brukeren velger (fra 1 til 10).',
        solution: `\`\`\`python
tall = int(input("Hvilken gangetabell vil du se? "))
for i in range(1, 11):
    resultat = tall * i
    print(f"{tall} * {i} = {resultat}")
\`\`\`
Eksempel for tall = 7: 7 * 1 = 7, 7 * 2 = 14, ..., 7 * 10 = 70.`,
        hints: ['Bruk `range(1, 11)` for å gå fra 1 til 10. Gang tallet med løkkevariabelen i hvert steg.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 5: While-løkker og lister
    {
      id: '10-11-2-def-while',
      type: 'definition',
      title: 'While-løkker',
      content: `En **while-løkke** gjentar en kodeblokk **så lenge** en betingelse er sann:

\`\`\`python
tall = 1
while tall <= 10:
    print(tall)
    tall = tall + 1
\`\`\`

Dette skriver ut tallene 1 til 10.

**Viktig:** Pass på at betingelsen til slutt blir usann, ellers får du en **uendelig løkke** (programmet stopper aldri).

While-løkker er nyttige når vi **ikke vet** på forhånd hvor mange ganger vi skal gjenta. For eksempel i Euklids algoritme vet vi ikke hvor mange steg som trengs.`,
    },
    {
      id: '10-11-2-def-lister',
      type: 'definition',
      title: 'Lister i Python',
      content: `En **liste** er en samling av verdier i en bestemt rekkefølge:

\`\`\`python
tall = [3, 7, 1, 9, 4]
navn = ["Ola", "Kari", "Per"]
\`\`\`

Nyttige listeoperasjoner:
| Operasjon | Beskrivelse | Eksempel |
|-----------|-------------|----------|
| \`len(liste)\` | Antall elementer | \`len([3,7,1])\` $\\rightarrow$ \`3\` |
| \`liste[i]\` | Element nr. $i$ (starter på 0) | \`tall[0]\` $\\rightarrow$ \`3\` |
| \`liste.append(x)\` | Legg til element | \`tall.append(5)\` |
| \`sum(liste)\` | Summen av alle elementer | \`sum([3,7,1])\` $\\rightarrow$ \`11\` |
| \`min(liste)\` | Minste element | \`min([3,7,1])\` $\\rightarrow$ \`1\` |
| \`max(liste)\` | Største element | \`max([3,7,1])\` $\\rightarrow$ \`9\` |

Du kan gå gjennom en liste med en for-løkke:

\`\`\`python
karakterer = [4, 5, 3, 6, 5]
for karakter in karakterer:
    print(karakter)
\`\`\``,
    },
    {
      id: '10-11-2-example-5',
      type: 'example',
      title: 'Eksempel: Gjennomsnitt av en liste',
      problem: 'Skriv et program som finner gjennomsnittet av tallene $[4, 7, 2, 9, 5, 8]$.',
      solution: `**Løsning:**

\`\`\`python
tall = [4, 7, 2, 9, 5, 8]
gjennomsnitt = sum(tall) / len(tall)
print(f"Gjennomsnittet er {gjennomsnitt:.2f}")
\`\`\`

Utskrift:
\`\`\`
Gjennomsnittet er 5.83
\`\`\`

Manuell sjekk: $\\frac{4 + 7 + 2 + 9 + 5 + 8}{6} = \\frac{35}{6} \\approx 5{,}83$ \\checkmark`,
    },
    {
      id: '10-11-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-11-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som bruker en while-løkke til å implementere Euklids algoritme. Programmet skal be brukeren om to tall og skrive ut den største felles divisor.',
        solution: `\`\`\`python
a = int(input("Skriv inn tall a: "))
b = int(input("Skriv inn tall b: "))
opprinnelig_a = a
opprinnelig_b = b

while b != 0:
    r = a % b
    a = b
    b = r

print(f"SFD({opprinnelig_a}, {opprinnelig_b}) = {a}")
\`\`\``,
        hints: ['Bruk `while b != 0` som betingelse. I løkken: beregn resten, flytt verdier.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-11-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-11-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som ber brukeren skrive inn tall til de skriver 0. Programmet skal deretter skrive ut hvor mange tall som ble skrevet inn, summen og gjennomsnittet.',
        solution: `\`\`\`python
tall_liste = []
tall = int(input("Skriv inn et tall (0 for å avslutte): "))

while tall != 0:
    tall_liste.append(tall)
    tall = int(input("Skriv inn et tall (0 for å avslutte): "))

if len(tall_liste) > 0:
    print(f"Antall tall: {len(tall_liste)}")
    print(f"Sum: {sum(tall_liste)}")
    print(f"Gjennomsnitt: {sum(tall_liste) / len(tall_liste):.2f}")
else:
    print("Ingen tall ble skrevet inn.")
\`\`\``,
        hints: ['Bruk en tom liste og `append()` for å samle tallene. While-løkken kjører så lenge tallet ikke er 0.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // OPPSUMMERING
    {
      id: '10-11-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Variabler** lagrer verdier (\`int\`, \`float\`, \`str\`, \`bool\`)
- \`print()\` skriver ut og \`input()\` leser inn data
- **Betingelser** (\`if\`/\`elif\`/\`else\`) lar programmet ta valg
- **For-løkker** gjentar kode et bestemt antall ganger med \`range()\`
- **While-løkker** gjentar kode så lenge en betingelse er sann
- **Lister** samler flere verdier og har nyttige funksjoner som \`sum()\`, \`len()\`, \`min()\`, \`max()\`
- Matematiske operatorer: \`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`, \`**\`

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Variabel | Et navn som lagrer en verdi |
| Datatype | Type verdi (heltall, desimaltall, tekst, sannhetsverdi) |
| Betingelse | Kode som bare kjører hvis et vilkår er oppfylt |
| For-løkke | Gjentakelse med et bestemt antall repetisjoner |
| While-løkke | Gjentakelse så lenge en betingelse er sann |
| Liste | En ordnet samling av verdier |
| f-streng | Formateringsstreng i Python: \`f"tekst {variabel}"\` |`,
    },

    // --- Samleoppgaver ---
    {
      id: '10-11-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-11-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et Python-program som løser andregradsligningen $ax^2 + bx + c = 0$. Programmet skal be brukeren om $a$, $b$ og $c$, beregne diskriminanten, og skrive ut løsningen(e) eller melde fra hvis det ikke finnes reelle løsninger.',
        solution: `\`\`\`python
import math

a = float(input("a = "))
b = float(input("b = "))
c = float(input("c = "))

diskriminant = b**2 - 4*a*c

if diskriminant > 0:
    x1 = (-b + math.sqrt(diskriminant)) / (2*a)
    x2 = (-b - math.sqrt(diskriminant)) / (2*a)
    print(f"To løsninger: x1 = {x1:.2f}, x2 = {x2:.2f}")
elif diskriminant == 0:
    x = -b / (2*a)
    print(f"Én løsning: x = {x:.2f}")
else:
    print("Ingen reelle løsninger (diskriminanten er negativ)")
\`\`\`
Forklaring: Diskriminanten $D = b^2 - 4ac$ avgjør antall løsninger. $D > 0$: to løsninger, $D = 0$: én løsning, $D < 0$: ingen reelle løsninger.`,
        hints: ['Bruk abc-formelen: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Sjekk først om diskriminanten er positiv, null eller negativ.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-11-2-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-11-2-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et Python-program som tar inn en liste med tall fra brukeren og sorterer listen fra minst til størst med boblsortering. Ikke bruk Pythons innebygde `sort()`-funksjon.',
        solution: `\`\`\`python
# Les inn tall
antall = int(input("Hvor mange tall? "))
liste = []
for i in range(antall):
    tall = float(input(f"Tall {i+1}: "))
    liste.append(tall)

print(f"Usortert: {liste}")

# Boblsortering
n = len(liste)
for i in range(n - 1):
    for j in range(n - 1 - i):
        if liste[j] > liste[j + 1]:
            # Bytt elementene
            liste[j], liste[j + 1] = liste[j + 1], liste[j]

print(f"Sortert: {liste}")
\`\`\`
Programmet leser inn tall, og bruker to for-løkker for å sammenligne og bytte naboer. Etter sortering skrives den sorterte listen ut.`,
        hints: ['Bruk to for-løkker inne i hverandre. Den ytre løkken kjører $n-1$ ganger. Den indre sammenligner nabopar.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Variabel', definition: 'Et navn som lagrer en verdi i et program' },
    { term: 'Datatype', definition: 'Type verdi: int (heltall), float (desimaltall), str (tekst), bool (sannhetsverdi)' },
    { term: 'print()', definition: 'Funksjon som skriver ut tekst og verdier til skjermen' },
    { term: 'input()', definition: 'Funksjon som leser inn data fra brukeren' },
    { term: 'if/elif/else', definition: 'Betingelser som styrer programmets flyt' },
    { term: 'for-løkke', definition: 'Gjentakelse med bestemt antall repetisjoner' },
    { term: 'while-løkke', definition: 'Gjentakelse som kjører så lenge betingelsen er sann' },
    { term: 'Liste', definition: 'Ordnet samling av verdier, laget med hakeparenteser []' },
  ],
  prevChapter: '10-11-1',
  nextChapter: '10-11-3',
};

// ============================================================================
// Kapittel 11.3: Matematisk programmering
// ============================================================================

export const CHAPTER_10_11_3: TextbookChapter = {
  id: '10-11-3',
  courseId: '10',
  chapterNumber: '11.3',
  title: 'Matematisk programmering',
  description: 'Bruk Python til å løse likninger, plotte funksjoner, simulere sannsynlighet, finne primtall og beregne statistikk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske matematiske eigenskapar og samanhengar ved å bruke programmering',
    'bruke programmering til å utforske sannsyn',
  ],
  content: [
    // INTRO
    {
      id: '10-11-3-intro',
      type: 'text',
      content: `## Matematisk programmering

Nå som du kan grunnleggende Python, er det på tide å bruke programmering til å utforske matematikk! Med et program kan du gjøre tusenvis av beregninger på sekunder – noe som ville tatt timer for hånd.

I dette kapittelet skal du:

- Løse likninger med programmering
- Plotte funksjoner
- Simulere sannsynlighet med tilfeldige tall
- Finne primtall
- Beregne statistikk fra datamengder`,
    },

    // BLOKK 1: Løse likninger
    {
      id: '10-11-3-text-likninger',
      type: 'text',
      content: `## Løse likninger med programmering

Noen likninger er vanskelige å løse analytisk (med formler), men vi kan bruke programmering til å finne løsninger **numerisk** – det vil si ved å prøve oss frem systematisk.

En enkel metode er **systematisk prøving**: Vi tester mange $x$-verdier og ser når venstre side er omtrent lik høyre side. Vi kan gjøre dette fordi datamaskinen kan teste tusenvis av verdier på et øyeblikk.`,
    },
    {
      id: '10-11-3-def-numerisk',
      type: 'definition',
      title: 'Numerisk løsning av likninger',
      content: `En **numerisk løsning** finner en tilnærmet verdi av svaret ved å teste mange verdier. Vi sier at $x$ er en løsning av $f(x) = 0$ hvis $|f(x)|$ er veldig liten (nær null).

**Metode:** Definer $f(x)$ som venstre side minus høyre side av likningen. Søk etter $x$-verdier der $f(x)$ skifter fortegn (fra positiv til negativ eller omvendt). Mellom to slike verdier finnes en løsning.`,
    },
    {
      id: '10-11-3-example-1',
      type: 'example',
      title: 'Eksempel: Løse likningen $x^3 - 2x - 5 = 0$',
      problem: 'Bruk Python til å finne en løsning av $x^3 - 2x - 5 = 0$ mellom $x = 1$ og $x = 3$.',
      solution: `**Løsning:**

\`\`\`python
def f(x):
    return x**3 - 2*x - 5

# Søk mellom 1 og 3 med liten steglengde
x = 1.0
steg = 0.001

while x <= 3.0:
    if abs(f(x)) < 0.01:
        print(f"Mulig løsning: x = {x:.3f}, f(x) = {f(x):.4f}")
    x += steg
\`\`\`

Utskrift:
\`\`\`
Mulig løsning: x = 2.094, f(x) = -0.0053
Mulig løsning: x = 2.095, f(x) = 0.0079
\`\`\`

Løsningen er omtrent $x \\approx 2{,}094$.

Vi kan sjekke: $2{,}094^3 - 2 \\cdot 2{,}094 - 5 = 9{,}19 - 4{,}19 - 5 = -0{,}005 \\approx 0$ \\checkmark`,
    },
    {
      id: '10-11-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-11-3-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Python til å finne løsningene av $x^2 - 4x + 1 = 0$ ved å teste $x$-verdier fra $-1$ til $5$ med steglengde $0{,}001$.',
        subTasks: [
          { label: 'a', task: 'Skriv programmet og finn de to løsningene.', solution: 'Programmet finner $x \\approx 0{,}268$ og $x \\approx 3{,}732$.' },
          { label: 'b', task: 'Sjekk svaret med abc-formelen: $x = \\frac{4 \\pm \\sqrt{16 - 4}}{2}$.', solution: '$x = \\frac{4 \\pm \\sqrt{12}}{2} = 2 \\pm \\sqrt{3} \\approx 0{,}268$ og $\\approx 3{,}732$.' },
        ],
        solution: 'Programmet gir $x \\approx 0{,}268$ og $x \\approx 3{,}732$. Med abc-formelen: $x = 2 \\pm \\sqrt{3}$, som stemmer.',
        hints: ['Definer `f(x) = x**2 - 4*x + 1`. Let etter der `f(x)` skifter fortegn.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 2: Plotte funksjoner
    {
      id: '10-11-3-text-plotting',
      type: 'text',
      content: `## Plotte funksjoner

En av de kraftigste tingene vi kan gjøre med programmering er å **tegne grafer**. Vi beregner mange funksjonsverdier og tegner dem som punkter.

I Python kan vi lage en enkel "tekst-graf" uten å installere ekstra biblioteker, eller vi kan bruke biblioteket **matplotlib** for fine grafer.

Her viser vi en enkel måte å lage en graf med tegn i terminalen:`,
    },
    {
      id: '10-11-3-example-2',
      type: 'example',
      title: 'Eksempel: Enkel tekstgraf av $f(x) = x^2$',
      problem: 'Lag en tekstbasert graf av $f(x) = x^2$ for $x$ fra $-5$ til $5$.',
      solution: `**Løsning:**

\`\`\`python
# Enkel tekstgraf av f(x) = x^2
for x in range(-5, 6):
    y = x**2
    stolper = "*" * y
    print(f"x = {x:3d} | {stolper} ({y})")
\`\`\`

Utskrift:
\`\`\`
x =  -5 | ************************* (25)
x =  -4 | **************** (16)
x =  -3 | ********* (9)
x =  -2 | **** (4)
x =  -1 | * (1)
x =   0 |  (0)
x =   1 | * (1)
x =   2 | **** (4)
x =   3 | ********* (9)
x =   4 | **************** (16)
x =   5 | ************************* (25)
\`\`\`

Vi kan tydelig se parabelformen: grafen er symmetrisk om $x = 0$ og stiger raskt for store $|x|$.

For en finere graf kan du bruke matplotlib:

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
plt.title("f(x) = x²")
plt.grid(True)
plt.show()
\`\`\``,
    },
    {
      id: '10-11-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-11-3-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som lager en tekstgraf (med stjerner) av funksjonen $f(x) = 2x + 3$ for heltallsverdier av $x$ fra $-3$ til $5$. Beregn funksjonsverdien for hver $x$ og vis resultatet visuelt.',
        solution: `\`\`\`python
for x in range(-3, 6):
    y = 2*x + 3
    if y >= 0:
        stolper = "*" * y
    else:
        stolper = "(negativ)"
    print(f"x = {x:3d} | {stolper} ({y})")
\`\`\`
Utskrift viser verdiene: f(-3)=-3, f(-2)=-1, f(-1)=1, f(0)=3, f(1)=5, f(2)=7, f(3)=9, f(4)=11, f(5)=13. Den lineære veksten er tydelig synlig.`,
        hints: ['Bruk `for x in range(-3, 6)` og beregn `y = 2*x + 3`. Skriv ut stjerner med `"*" * y`.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 3: Simulere sannsynlighet
    {
      id: '10-11-3-text-sannsynlighet',
      type: 'text',
      content: `## Simulere sannsynlighet

En av de mest spennende bruksområdene for programmering i matematikk er å **simulere tilfeldige forsøk**. I stedet for å beregne sannsynlighet med formler, kan vi la datamaskinen gjenta forsøket tusenvis av ganger og telle utfallene.

Denne metoden kalles **Monte Carlo-simulering**, oppkalt etter kasinoet i Monte Carlo.

I Python bruker vi \`random\`-modulen for tilfeldige tall:

\`\`\`python
import random

terning = random.randint(1, 6)   # Tilfeldig heltall fra 1 til 6
mynt = random.choice(["kron", "mynt"])  # Tilfeldig valg
\`\`\``,
    },
    {
      id: '10-11-3-def-simulering',
      type: 'definition',
      title: 'Monte Carlo-simulering',
      content: `En **Monte Carlo-simulering** er en metode der vi bruker tilfeldige tall til å estimere et resultat. Vi gjentar et tilfeldig forsøk mange ganger (f.eks. 10 000 ganger) og beregner andelen av gunstige utfall.

$$P(\\text{hendelse}) \\approx \\frac{\\text{antall gunstige utfall}}{\\text{totalt antall forsøk}}$$

Jo flere forsøk vi gjør, desto nærmere kommer vi den eksakte sannsynligheten. Med 10 000 forsøk får vi vanligvis et godt estimat.`,
    },
    {
      id: '10-11-3-example-3',
      type: 'example',
      title: 'Eksempel: Simulere terningkast',
      problem: 'Bruk Python til å simulere 10 000 kast med to terninger og finn sannsynligheten for å få summen 7.',
      solution: `**Løsning:**

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
print(f"Antall ganger sum = 7: {antall_syv}")
print(f"Estimert sannsynlighet: {sannsynlighet:.4f}")
\`\`\`

Typisk utskrift:
\`\`\`
Antall ganger sum = 7: 1674
Estimert sannsynlighet: 0.1674
\`\`\`

**Eksakt sannsynlighet:** Det er 6 gunstige utfall for sum 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. Totalt $6 \\times 6 = 36$ utfall.

$$P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6} \\approx 0{,}1667$$

Simuleringen gir et resultat nær den eksakte verdien! \\checkmark`,
    },
    {
      id: '10-11-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-11-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som simulerer 10 000 myntkast og finner sannsynligheten for å få "kron".',
        subTasks: [
          { label: 'a', task: 'Skriv programmet og kjør det.', solution: 'Programmet gir ca. 0,50 (nær den teoretiske verdien 0,5).' },
          { label: 'b', task: 'Hva er den eksakte (teoretiske) sannsynligheten? Sammenlign med simuleringen.', solution: 'Eksakt: $P(\\text{kron}) = \\frac{1}{2} = 0{,}5$. Simuleringen gir omtrent 0,50, som stemmer godt.' },
        ],
        solution: `\`\`\`python
import random
antall_kron = 0
for i in range(10000):
    if random.choice(["kron", "mynt"]) == "kron":
        antall_kron += 1
print(f"Sannsynlighet for kron: {antall_kron / 10000:.4f}")
\`\`\`
Typisk resultat: ca. 0,50. Eksakt: $P = 0{,}5$.`,
        hints: ['Bruk `random.choice(["kron", "mynt"])` og tell antall "kron".'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-11-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-11-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som simulerer 10 000 kast med to terninger og finner sannsynligheten for å få minst én sekser.',
        solution: `\`\`\`python
import random
antall_gunstige = 0
for i in range(10000):
    t1 = random.randint(1, 6)
    t2 = random.randint(1, 6)
    if t1 == 6 or t2 == 6:
        antall_gunstige += 1
print(f"P(minst én 6) = {antall_gunstige / 10000:.4f}")
\`\`\`
Typisk resultat: ca. 0,306. Eksakt: $P = 1 - \\frac{5}{6} \\cdot \\frac{5}{6} = 1 - \\frac{25}{36} = \\frac{11}{36} \\approx 0{,}306$.`,
        hints: ['Sjekk om `t1 == 6 or t2 == 6`. Alternativt kan du beregne $P = 1 - P(\\text{ingen sekser})$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 4: Primtall
    {
      id: '10-11-3-text-primtall',
      type: 'text',
      content: `## Finne primtall med programmering

Et **primtall** er et tall større enn 1 som bare er delelig med 1 og seg selv. De første primtallene er: $2, 3, 5, 7, 11, 13, 17, 19, 23, \\ldots$

Å finne store primtall er viktig i kryptografi (sikker kommunikasjon på nett). Med programmering kan vi raskt sjekke om tall er primtall og finne alle primtall opp til en gitt grense.`,
    },
    {
      id: '10-11-3-example-4',
      type: 'example',
      title: 'Eksempel: Sjekke om et tall er primtall',
      problem: 'Skriv et Python-program som sjekker om et gitt tall er et primtall.',
      solution: `**Løsning:**

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

**Triks:** Vi trenger bare å sjekke divisorer opp til $\\sqrt{n}$, fordi hvis $n = a \\cdot b$ og begge er større enn $\\sqrt{n}$, ville $a \\cdot b > n$.

For $n = 97$: $\\sqrt{97} \\approx 9{,}8$, så vi sjekker 2, 3, 4, 5, 6, 7, 8, 9. Ingen deler 97, altså er 97 et primtall.`,
    },
    {
      id: '10-11-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-11-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et Python-program som finner og skriver ut alle primtall fra 2 til 100.',
        subTasks: [
          { label: 'a', task: 'Skriv programmet.', solution: '```python\nimport math\nfor tall in range(2, 101):\n    er_primtall = True\n    for i in range(2, int(math.sqrt(tall)) + 1):\n        if tall % i == 0:\n            er_primtall = False\n            break\n    if er_primtall:\n        print(tall, end=" ")\n```' },
          { label: 'b', task: 'Hvor mange primtall er det mellom 2 og 100?', solution: 'Det er 25 primtall mellom 2 og 100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.' },
        ],
        solution: 'Det er 25 primtall fra 2 til 100. Programmet bruker en ytre løkke for hvert tall og en indre løkke for å sjekke delbarhet.',
        hints: ['Bruk en for-løkke fra 2 til 100. For hvert tall, sjekk om det er delelig med noe mellom 2 og $\\sqrt{\\text{tall}}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // BLOKK 5: Statistikk
    {
      id: '10-11-3-text-statistikk',
      type: 'text',
      content: `## Beregne statistikk med programmering

Når vi har store datamengder, er programmering uvurderlig for å beregne statistiske mål. Med Python kan vi enkelt finne gjennomsnitt, median, typetall og standardavvik.`,
    },
    {
      id: '10-11-3-def-statistikk',
      type: 'definition',
      title: 'Statistiske mål i Python',
      content: `De viktigste statistiske målene og hvordan vi beregner dem:

**Gjennomsnitt** (middelverdien):
$$\\bar{x} = \\frac{x_1 + x_2 + \\ldots + x_n}{n}$$

**Median** (den midterste verdien i sortert rekkefølge):
- Hvis $n$ er oddetall: medianen er det midterste elementet
- Hvis $n$ er partall: medianen er gjennomsnittet av de to midterste

**Typetall** (den verdien som forekommer oftest):
- Telles ved å gå gjennom listen og finne hyppigste verdi

**Variasjonsbredde**: Største verdi minus minste verdi`,
    },
    {
      id: '10-11-3-example-5',
      type: 'example',
      title: 'Eksempel: Statistikkprogram',
      problem: 'Skriv et Python-program som beregner gjennomsnitt, median og variasjonsbredde for karakterene $[4, 5, 3, 6, 5, 4, 5, 3, 4, 5]$.',
      solution: `**Løsning:**

\`\`\`python
karakterer = [4, 5, 3, 6, 5, 4, 5, 3, 4, 5]

# Gjennomsnitt
gjennomsnitt = sum(karakterer) / len(karakterer)

# Sorterer for median
sortert = sorted(karakterer)
n = len(sortert)
if n % 2 == 1:
    median = sortert[n // 2]
else:
    median = (sortert[n // 2 - 1] + sortert[n // 2]) / 2

# Variasjonsbredde
variasjonsbredde = max(karakterer) - min(karakterer)

# Typetall (enkel metode)
typetall = max(set(karakterer), key=karakterer.count)

print(f"Karakterer: {karakterer}")
print(f"Sortert: {sortert}")
print(f"Gjennomsnitt: {gjennomsnitt:.1f}")
print(f"Median: {median}")
print(f"Typetall: {typetall}")
print(f"Variasjonsbredde: {variasjonsbredde}")
\`\`\`

Utskrift:
\`\`\`
Karakterer: [4, 5, 3, 6, 5, 4, 5, 3, 4, 5]
Sortert: [3, 3, 4, 4, 4, 5, 5, 5, 5, 6]
Gjennomsnitt: 4.4
Median: 4.5
Typetall: 5
Variasjonsbredde: 3
\`\`\`

Sjekk: Gjennomsnitt $= \\frac{4+5+3+6+5+4+5+3+4+5}{10} = \\frac{44}{10} = 4{,}4$ \\checkmark

Median: De to midterste er 4 og 5, median $= \\frac{4+5}{2} = 4{,}5$ \\checkmark`,
    },
    {
      id: '10-11-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-11-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Brukerne av en app har gitt disse vurderingene (1–5 stjerner): $[5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 5, 3, 4, 4]$. Skriv et Python-program som beregner gjennomsnitt, median, typetall og variasjonsbredde.',
        solution: `\`\`\`python
data = [5, 3, 4, 5, 2, 4, 5, 4, 3, 5, 4, 5, 3, 4, 4]
sortert = sorted(data)
n = len(sortert)
gjennomsnitt = sum(data) / n
median = sortert[n // 2]  # n=15, oddetall
typetall = max(set(data), key=data.count)
variasjonsbredde = max(data) - min(data)
print(f"Gjennomsnitt: {gjennomsnitt:.2f}")
print(f"Median: {median}")
print(f"Typetall: {typetall}")
print(f"Variasjonsbredde: {variasjonsbredde}")
\`\`\`
Gjennomsnitt: $60/15 = 4{,}00$. Median: 4 (det 8. elementet i sortert liste). Typetall: 4 (forekommer 6 ganger). Variasjonsbredde: $5 - 2 = 3$.`,
        hints: ['Bruk `sorted()` for å sortere. For median med oddetall $n$, er det element nr. $n//2$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // OPPSUMMERING
    {
      id: '10-11-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Numerisk likningsløsning**: Teste mange $x$-verdier systematisk for å finne der $f(x) \\approx 0$
- **Plotte funksjoner**: Lage tekstgrafer med Python, eventuelt bruke matplotlib for fine grafer
- **Monte Carlo-simulering**: Bruke tilfeldige tall til å estimere sannsynligheter
- **Primtall**: Sjekke om tall er primtall ved å teste divisorer opp til $\\sqrt{n}$
- **Statistikk**: Beregne gjennomsnitt, median, typetall og variasjonsbredde med Python

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Numerisk løsning | Tilnærmet løsning funnet ved systematisk prøving |
| Monte Carlo-simulering | Estimere resultater ved hjelp av tilfeldige forsøk |
| Primtall | Tall > 1 som bare er delelig med 1 og seg selv |
| Gjennomsnitt | Summen av alle verdier delt på antall verdier |
| Median | Den midterste verdien i en sortert datamengde |
| Typetall | Den verdien som forekommer oftest |
| Variasjonsbredde | Forskjellen mellom største og minste verdi |`,
    },

    // --- Samleoppgaver ---
    {
      id: '10-11-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-11-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du kaster tre terninger. Bruk Python til å simulere 10 000 forsøk og estimer sannsynligheten for at summen er nøyaktig 10.',
        subTasks: [
          { label: 'a', task: 'Skriv programmet og finn den estimerte sannsynligheten.', solution: 'Programmet gir ca. $P \\approx 0{,}125$.' },
          { label: 'b', task: 'Den eksakte sannsynligheten er $P = \\frac{27}{216} = 0{,}125$. Sammenlign med simuleringen din.', solution: 'Det er 27 gunstige utfall av 216 mulige. Simuleringen bør gi et resultat nær $0{,}125$.' },
        ],
        solution: `\`\`\`python
import random
antall_ti = 0
for i in range(10000):
    t1 = random.randint(1, 6)
    t2 = random.randint(1, 6)
    t3 = random.randint(1, 6)
    if t1 + t2 + t3 == 10:
        antall_ti += 1
print(f"P(sum = 10) = {antall_ti / 10000:.4f}")
\`\`\`
Typisk resultat: ca. 0,125. Eksakt: $27/216 = 0{,}125$.`,
        hints: ['Kast tre terninger med `random.randint(1, 6)` tre ganger. Sjekk om summen er 10.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '10-11-3-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-11-3-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et Python-program som bruker Monte Carlo-simulering til å estimere verdien av $\\pi$. Metoden: Generer tilfeldige punkter $(x, y)$ der $0 \\leq x \\leq 1$ og $0 \\leq y \\leq 1$. Tell hvor mange som havner innenfor kvartssirkelen $x^2 + y^2 \\leq 1$. Da er $\\pi \\approx 4 \\cdot \\frac{\\text{innenfor}}{\\text{totalt}}$.',
        subTasks: [
          { label: 'a', task: 'Skriv programmet med 100 000 tilfeldige punkter.', solution: '```python\nimport random\ninnenfor = 0\ntotalt = 100000\nfor i in range(totalt):\n    x = random.random()\n    y = random.random()\n    if x**2 + y**2 <= 1:\n        innenfor += 1\npi_estimat = 4 * innenfor / totalt\nprint(f"Estimat av pi: {pi_estimat:.4f}")\n```' },
          { label: 'b', task: 'Kjør programmet flere ganger. Hvor nær $\\pi = 3{,}14159\\ldots$ kommer du?', solution: 'Typisk resultat: ca. $3{,}14$. Med 100 000 punkter er estimatet vanligvis riktig til 2 desimaler.' },
          { label: 'c', task: 'Forklar hvorfor denne metoden fungerer.', solution: 'Arealet av kvartsirkelen er $\\frac{\\pi r^2}{4} = \\frac{\\pi}{4}$ (med $r = 1$). Arealet av kvadratet er $1$. Andelen punkter innenfor sirkelen tilnærmer $\\frac{\\pi}{4}$, så $\\pi \\approx 4 \\cdot \\text{andel}$.' },
        ],
        solution: 'Programmet genererer tilfeldige punkter i et enhetskvadrat og sjekker om de er innenfor kvartsirkelen. Forholdet mellom antall innenfor og totalt gir $\\pi/4$. Typisk resultat: ca. $3{,}14$.',
        hints: ['Bruk `random.random()` for tilfeldige desimaltall mellom 0 og 1. Et punkt $(x,y)$ er innenfor sirkelen hvis $x^2 + y^2 \\leq 1$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Numerisk løsning', definition: 'Tilnærmet løsning av en likning funnet ved systematisk prøving' },
    { term: 'Monte Carlo-simulering', definition: 'Metode som bruker tilfeldige tall til å estimere sannsynligheter' },
    { term: 'random-modulen', definition: 'Pythons bibliotek for å generere tilfeldige tall' },
    { term: 'Primtall', definition: 'Tall større enn 1 som bare er delelig med 1 og seg selv' },
    { term: 'Gjennomsnitt', definition: 'Sum av alle verdier delt på antall verdier' },
    { term: 'Median', definition: 'Den midterste verdien i en sortert datamengde' },
    { term: 'Typetall', definition: 'Verdien som forekommer oftest i en datamengde' },
  ],
  prevChapter: '10-11-2',
};

// Eksporter alle kapitler i seksjon 11
export const MATEMATIKK_10_DEL11_CHAPTERS: TextbookChapter[] = [
  CHAPTER_10_11_1,
  CHAPTER_10_11_2,
  CHAPTER_10_11_3,
];
