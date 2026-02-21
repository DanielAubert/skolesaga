/**
 * Tekstbok kapitler for 1P - Modellering og funksjoner
 * Kapittel 7.3: Lineær regresjon
 * Kapittel 7.4: Eksponentialregresjon
 * Kapittel 7.5: Kjennetegn ved funksjoner
 *
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.3: LINEÆR REGRESJON
// ============================================================================

export const CHAPTER_1P_7_3: TextbookChapter = {
  id: '1p-7-3',
  courseId: '1p',
  chapterNumber: '7.3',
  title: 'Lineær regresjon',
  description:
    'Lær å finne den best tilpassede rette linjen til et datasett, tolke korrelasjonskoeffisienten og bruke modellen til å gjøre prediksjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke digitale verktøy til å finne lineære modellar som passar til datamateriale',
  ],
  content: [
    // --- Blokk 1: Introduksjon ---
    {
      id: '1p-7-3-intro',
      type: 'text',
      content: `## Hva er regresjon?

I mange situasjoner samler vi inn data og ønsker å beskrive sammenhengen mellom to størrelser med et funksjonsuttrykk. Denne prosessen kalles **regresjon**.

For eksempel kan vi måle temperaturen ute til ulike tidspunkt, registrere pris og etterspørsel for en vare, eller se på sammenhengen mellom treningstimer og løpstid. Når vi har et sett med datapunkter, prøver vi å finne en funksjon som passer best mulig til dataene.

Det finnes ulike typer regresjon avhengig av hvilken funksjonstype vi tilpasser:
- **Lineær regresjon** – en rett linje
- **Eksponentiell regresjon** – en eksponentialfunksjon
- **Polynomregresjon** – et polynom av en gitt grad

I dette kapittelet ser vi på lineær regresjon.`,
    },

    // --- Blokk 2: Spredningsdiagram ---
    {
      id: '1p-7-3-spredning',
      type: 'text',
      content: `## Spredningsdiagram

Før vi gjør regresjon, plotter vi datapunktene i et **spredningsdiagram** (også kalt punktdiagram). Dette gir oss et visuelt bilde av dataene og hjelper oss å vurdere om en lineær modell er fornuftig.

Hvert datapunkt har en $x$-verdi og en $y$-verdi, og vi plotter dem som punkter i et koordinatsystem.

**Slik lager du et spredningsdiagram:**
1. Velg hvilken variabel som er den uavhengige ($x$) og hvilken som er den avhengige ($y$).
2. Tegn et koordinatsystem med passende akser.
3. Plott alle datapunktene.
4. Vurder visuelt om punktene ser ut til å følge en rett linje, en kurve, eller om det ikke er noen tydelig sammenheng.`,
    },

    // --- Blokk 3: Eksempel 1 – Spredningsdiagram ---
    {
      id: '1p-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Lage spredningsdiagram',
      problem: `En bonde registrerer hvor mye gjødsel (kg per dekar) han bruker, og avlingen (kg per dekar) han får:

| Gjødsel (kg/daa) | 10 | 15 | 20 | 25 | 30 | 35 | 40 |
|---|---|---|---|---|---|---|---|
| Avling (kg/daa) | 320 | 370 | 450 | 480 | 530 | 560 | 610 |

a) Plott dataene i et spredningsdiagram.
b) Ser det ut til å være en lineær sammenheng?`,
      solution: `**Løsning:**

a) Vi setter gjødsel på $x$-aksen og avling på $y$-aksen, og plotter punktene:
$(10,\\, 320)$, $(15,\\, 370)$, $(20,\\, 450)$, $(25,\\, 480)$, $(30,\\, 530)$, $(35,\\, 560)$, $(40,\\, 610)$.

b) Når vi ser på spredningsdiagrammet, ligger punktene tilnærmet langs en rett linje som stiger fra venstre mot høyre. Det ser altså ut til å være en lineær sammenheng: mer gjødsel gir større avling.`,
    },

    // --- Blokk 4: Definisjon – Lineær regresjon ---
    {
      id: '1p-7-3-def-linreg',
      type: 'definition',
      title: 'Lineær regresjon',
      content: `**Lineær regresjon** er en metode for å finne den rette linjen

$$y = ax + b$$

som passer best til et sett med datapunkter $(x_1, y_1), (x_2, y_2), \\ldots, (x_n, y_n)$.

Den best tilpassede linjen kalles **regresjonslinjen** og finnes ved å minimere summen av de kvadrerte avstandene mellom datapunktene og linjen (minste kvadraters metode).

I praksis bruker vi digitale verktøy som regneark eller GeoGebra til å beregne $a$ og $b$.`,
    },

    // --- Blokk 5: Eksempel 2 – Finne regresjonslinje ---
    {
      id: '1p-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne regresjonslinjen',
      problem: `Bruk dataene fra eksempel 1 (gjødsel og avling) og et digitalt verktøy til å finne regresjonslinjen.

| Gjødsel ($x$) | 10 | 15 | 20 | 25 | 30 | 35 | 40 |
|---|---|---|---|---|---|---|---|
| Avling ($y$) | 320 | 370 | 450 | 480 | 530 | 560 | 610 |`,
      solution: `**Løsning:**

Vi legger inn dataene i GeoGebra eller et regneark og bruker funksjonen for lineær regresjon.

Regresjonslinjen blir:

$$y = 9{,}5x + 237$$

Her betyr:
- $a = 9{,}5$: for hver ekstra kg gjødsel per dekar øker avlingen med ca. $9{,}5$ kg per dekar.
- $b = 237$: modellen anslår en avling på $237$ kg/daa uten gjødsel.

**Kontroll:** For $x = 20$: $y = 9{,}5 \\cdot 20 + 237 = 190 + 237 = 427$. Den faktiske verdien var $450$, så avviket er $23$ kg.`,
    },

    // --- Blokk 6: Korrelasjon ---
    {
      id: '1p-7-3-korrelasjon',
      type: 'text',
      content: `## Korrelasjon

**Korrelasjon** beskriver styrken og retningen av den lineære sammenhengen mellom to variabler.

Det finnes tre hovedtyper:

- **Positiv korrelasjon:** Når $x$ øker, øker også $y$. Punktene i spredningsdiagrammet stiger mot høyre. *Eksempel: Høyere temperatur → mer issalg.*
- **Negativ korrelasjon:** Når $x$ øker, minker $y$. Punktene faller mot høyre. *Eksempel: Flere treningstimer → lavere hvilepuls.*
- **Ingen korrelasjon:** Det er ingen tydelig lineær sammenheng mellom variablene. Punktene er spredt uten mønster. *Eksempel: Skostørrelse og karakterer i matematikk.*`,
    },

    // --- Blokk 7: Definisjon – Korrelasjonskoeffisienten ---
    {
      id: '1p-7-3-def-r',
      type: 'definition',
      title: 'Korrelasjonskoeffisienten r',
      content: `**Korrelasjonskoeffisienten** $r$ er et tall mellom $-1$ og $1$ som angir styrken og retningen til den lineære sammenhengen mellom to variabler.

- $r = 1$: Perfekt positiv lineær sammenheng (alle punkter på en stigende linje)
- $r = -1$: Perfekt negativ lineær sammenheng (alle punkter på en synkende linje)
- $r = 0$: Ingen lineær sammenheng
- $|r|$ nær $1$: Sterk lineær sammenheng
- $|r|$ nær $0$: Svak lineær sammenheng

**Tommelfingerregel:**
| $|r|$ | Styrke |
|---|---|
| $0{,}9 - 1{,}0$ | Svært sterk |
| $0{,}7 - 0{,}9$ | Sterk |
| $0{,}4 - 0{,}7$ | Moderat |
| $0{,}2 - 0{,}4$ | Svak |
| $0{,}0 - 0{,}2$ | Svært svak / ingen |`,
    },

    // --- Blokk 8: Eksempel 3 – Tolke r ---
    {
      id: '1p-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Tolke korrelasjonskoeffisienten',
      problem: `For gjødsel-avling-dataene finner vi $r = 0{,}992$ med et digitalt verktøy.

a) Er korrelasjonen positiv eller negativ?
b) Hvor sterk er den lineære sammenhengen?
c) Hva betyr dette i praksis?`,
      solution: `**Løsning:**

a) $r = 0{,}992 > 0$, så korrelasjonen er **positiv**. Det betyr at mer gjødsel henger sammen med høyere avling.

b) $|r| = 0{,}992$ er svært nær $1$, noe som betyr en **svært sterk** lineær sammenheng.

c) I praksis betyr dette at det er en nesten perfekt lineær sammenheng mellom gjødselmengde og avling i dette området. Regresjonslinjen gir svært gode estimater.`,
    },

    // --- Blokk 9: Oppgave 1 ---
    {
      id: '1p-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-7-3-ex-1',
        number: '7.6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om korrelasjonen er positiv, negativ eller ingen:',
        subTasks: [
          {
            label: 'a',
            task: 'Antall timer plugging og poengsum på en prøve',
            solution: 'Positiv korrelasjon – mer plugging gir vanligvis bedre resultat.',
            multipleChoiceOptions: ['Positiv', 'Negativ', 'Ingen'],
          },
          {
            label: 'b',
            task: 'Bilens alder og salgspris',
            solution: 'Negativ korrelasjon – eldre biler har vanligvis lavere salgspris.',
            multipleChoiceOptions: ['Negativ', 'Positiv', 'Ingen'],
          },
          {
            label: 'c',
            task: 'Hårfarge og kroppshøyde',
            solution: 'Ingen korrelasjon – hårfarge har ikke noe med høyde å gjøre.',
            multipleChoiceOptions: ['Ingen', 'Positiv', 'Negativ'],
          },
          {
            label: 'd',
            task: 'Utetemperatur og strømforbruk til oppvarming',
            solution:
              'Negativ korrelasjon – høyere temperatur betyr mindre behov for oppvarming.',
            multipleChoiceOptions: ['Negativ', 'Positiv', 'Ingen'],
          },
        ],
        solution:
          'a) Positiv  b) Negativ  c) Ingen  d) Negativ',
        hints: [
          'Tenk på om den ene variabelen øker når den andre øker (positiv), minker (negativ), eller om det ikke er sammenheng.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 10: Prediksjon ---
    {
      id: '1p-7-3-prediksjon',
      type: 'text',
      content: `## Bruke regresjonsmodellen til prediksjon

Når vi har funnet regresjonslinjen $y = ax + b$, kan vi bruke den til å **forutsi** (predikere) $y$-verdier for nye $x$-verdier.

**Eksempel:** Hvis regresjonslinjen for gjødsel og avling er $y = 9{,}5x + 237$, kan vi anslå avlingen ved $45$ kg gjødsel per dekar:

$$y = 9{,}5 \\cdot 45 + 237 = 427{,}5 + 237 = 664{,}5 \\text{ kg/daa}$$

Men vi må være forsiktige med å bruke modellen utenfor datasettet vi har brukt til å lage den.`,
    },

    // --- Blokk 11: Interpolering vs. ekstrapolering ---
    {
      id: '1p-7-3-begrensninger',
      type: 'text',
      content: `## Interpolering og ekstrapolering

- **Interpolering:** Vi bruker modellen til å anslå verdier *innenfor* området til dataene vi har. Dette gir vanligvis pålitelige resultater.
- **Ekstrapolering:** Vi bruker modellen til å anslå verdier *utenfor* det kjente dataområdet. Dette er mer usikkert fordi vi ikke vet om sammenhengen fortsetter på samme måte.

**Eksempel:** Gjødseldataene våre går fra $x = 10$ til $x = 40$.
- Å beregne avling for $x = 22$ er **interpolering** (innenfor intervallet).
- Å beregne avling for $x = 80$ er **ekstrapolering** (utenfor intervallet). Kanskje for mye gjødsel skader plantene — da stemmer ikke en lineær modell lenger.`,
    },

    // --- Blokk 12: Advarsel ---
    {
      id: '1p-7-3-warning',
      type: 'warning',
      title: 'Korrelasjon betyr ikke årsak',
      content: `At to størrelser korrelerer, betyr **ikke** nødvendigvis at den ene forårsaker den andre.

Eksempel: Det er en sterk positiv korrelasjon mellom issalg og antall drukningsulykker i løpet av et år. Men det er ikke isen som forårsaker drukning — begge deler skyldes en felles bakenforliggende faktor: varmt vær.

Vær alltid kritisk og tenk over om sammenhengen gir mening i konteksten.`,
    },

    // --- Blokk 13: Eksempel 4 – Komplett regresjon ---
    {
      id: '1p-7-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Regresjon med digitale verktøy',
      problem: `En bedrift selger varmepumper. Tabellen viser gjennomsnittlig utetemperatur i januar ($x$, i $°C$) og antall solgte varmepumper den måneden ($y$) over åtte år:

| Temperatur ($°C$) | $-12$ | $-8$ | $-5$ | $-3$ | $0$ | $2$ | $-10$ | $-6$ |
|---|---|---|---|---|---|---|---|---|
| Antall solgt | 84 | 65 | 52 | 40 | 28 | 18 | 75 | 58 |

a) Bruk et digitalt verktøy til å finne regresjonslinjen.
b) Hva er korrelasjonskoeffisienten? Tolk svaret.
c) Bruk modellen til å anslå salget hvis januartemperaturen er $-7\\,°C$.
d) Ville det vært fornuftig å bruke modellen for å anslå salget ved $25\\,°C$?`,
      solution: `**Løsning:**

a) Vi legger inn dataene i GeoGebra eller et regneark og gjør lineær regresjon. Regresjonslinjen blir:

$$y = -4{,}7x + 28$$

b) Korrelasjonskoeffisienten er $r \\approx -1{,}00$.

- Korrelasjonen er **negativ**: lavere temperatur gir flere solgte varmepumper.
- $|r| \\approx 1{,}00$ betyr en **svært sterk** lineær sammenheng.

c) For $x = -7$:
$$y = -4{,}7 \\cdot (-7) + 28 = 32{,}9 + 28 = 60{,}9$$
Modellen anslår ca. $61$ solgte varmepumper.

Dette er interpolering (innenfor dataområdet $-12$ til $2$), så estimatet er rimelig.

d) $25\\,°C$ er langt utenfor dataområdet. Dette er ekstrapolering:
$y = -4{,}7 \\cdot 25 + 28 = -117{,}5 + 28 = -89{,}5$

Et negativt antall gir ingen mening. Modellen bryter ned utenfor dataområdet, og ekstrapolering er ikke fornuftig her.`,
    },

    // --- Blokk 14: Oppgave 2 ---
    {
      id: '1p-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-7-3-ex-2',
        number: '7.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En sportskjede har registrert sammenhengen mellom annonsekostnader ($x$, i tusen kroner) og omsetning ($y$, i tusen kroner) over seks måneder:

| Annonsekostnader ($x$) | 5 | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|---|
| Omsetning ($y$) | 120 | 180 | 230 | 310 | 350 | 420 |`,
        subTasks: [
          {
            label: 'a',
            task: 'Bruk et digitalt verktøy til å finne regresjonslinjen.',
            solution: 'Regresjonslinjen blir omtrent $y = 11{,}9x + 59$.',
          },
          {
            label: 'b',
            task: 'Finn korrelasjonskoeffisienten og tolk den.',
            solution:
              '$r \\approx 0{,}998$. Det er en svært sterk positiv lineær sammenheng mellom annonsekostnader og omsetning.',
          },
          {
            label: 'c',
            task: 'Bruk modellen til å anslå omsetningen dersom bedriften bruker 18 000 kr på annonser.',
            solution:
              '$y = 11{,}9 \\cdot 18 + 59 = 214{,}2 + 59 = 273{,}2$. Omsetningen anslås til ca. 273 000 kr. Dette er interpolering.',
          },
          {
            label: 'd',
            task: 'Er det fornuftig å bruke modellen til å anslå omsetningen ved annonsekostnader på 100 000 kr? Begrunn svaret.',
            solution:
              'Nei, dette er ekstrapolering langt utenfor dataområdet ($x = 5$ til $x = 30$). Sammenhengen trenger ikke være lineær for så store annonsekostnader.',
          },
        ],
        solution:
          'a) $y \\approx 11{,}9x + 59$  b) $r \\approx 0{,}998$, svært sterk positiv korrelasjon  c) ca. 273 000 kr  d) Nei, ekstrapolering er upålitelig.',
        hints: [
          'Bruk regneark eller GeoGebra til å finne regresjonslinjen.',
          'Sjekk om $x = 18$ ligger innenfor dataområdet for å avgjøre om det er interpolering eller ekstrapolering.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 15: Tips – Digitale verktøy ---
    {
      id: '1p-7-3-tip-verktoy',
      type: 'tip',
      title: 'Lineær regresjon i digitale verktøy',
      content: `**I GeoGebra:**
1. Skriv inn datapunktene som en liste, f.eks. $\\{(10, 320), (15, 370), \\ldots\\}$
2. Bruk kommandoen \`RegLin(<Liste>)\` for å finne regresjonslinjen.
3. GeoGebra viser også korrelasjonskoeffisienten.

**I regneark (Excel/Google Sheets):**
1. Legg inn $x$-verdiene i én kolonne og $y$-verdiene i en annen.
2. Marker dataene og sett inn et spredningsdiagram.
3. Høyreklikk på datapunktene og velg "Legg til trendlinje" → Lineær.
4. Kryss av for "Vis ligning" og "Vis $R^2$-verdi". Merk: $R^2 = r^2$.`,
    },

    // --- Blokk 16: Oppgave 3 ---
    {
      id: '1p-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-7-3-ex-3',
        number: '7.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En forsker undersøker sammenhengen mellom daglig skjermtid ($x$, i timer) og søvnkvalitet ($y$, skala $1$–$10$) hos en gruppe ungdommer:

| Skjermtid (timer) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Søvnkvalitet | 8,5 | 8,0 | 7,2 | 6,8 | 6,0 | 5,5 | 4,8 | 4,2 |`,
        subTasks: [
          {
            label: 'a',
            task: 'Finn regresjonslinjen og korrelasjonskoeffisienten.',
            solution:
              'Regresjonslinjen blir ca. $y = -0{,}62x + 9{,}1$ med $r \\approx -0{,}99$.',
          },
          {
            label: 'b',
            task: 'Tolk stigningstallet og konstantleddet i modellen.',
            solution:
              'Stigningstallet $a = -0{,}62$ betyr at for hver ekstra time skjermtid synker søvnkvaliteten med ca. $0{,}62$ poeng. Konstantleddet $b = 9{,}1$ er modellens anslag for søvnkvaliteten ved null timer skjermtid.',
          },
          {
            label: 'c',
            task: 'Kan vi konkludere med at skjermtid forårsaker dårligere søvn? Begrunn.',
            solution:
              'Nei. Korrelasjon viser bare sammenheng, ikke årsak. Det kan finnes andre faktorer (f.eks. stress, koffein) som påvirker både skjermtid og søvn.',
          },
        ],
        solution:
          'a) $y \\approx -0{,}62x + 9{,}1$, $r \\approx -0{,}99$  b) Stigningstall: søvnkvalitet synker $0{,}62$ per time ekstra skjermtid. Konstantledd: estimert søvnkvalitet ved null skjermtid.  c) Nei, korrelasjon er ikke det samme som kausalitet.',
        hints: [
          'Husk forskjellen mellom korrelasjon og kausalitet.',
          'Stigningstallet forteller hvor mye $y$ endres per enhet økning i $x$.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 17: Oppsummering ---
    {
      id: '1p-7-3-oppsummering',
      type: 'note',
      content: `**Oppsummering – Lineær regresjon:**

- **Spredningsdiagram**: Plott datapunktene for å se etter mønster.
- **Regresjonslinje**: $y = ax + b$ – den best tilpassede rette linjen.
- **Korrelasjon**: Positiv ($r > 0$), negativ ($r < 0$) eller ingen ($r \\approx 0$).
- **Korrelasjonskoeffisienten** $r$: Måler styrke ($|r|$ nær $1$ = sterk) og retning.
- **Interpolering**: Anslå verdier innenfor dataområdet – vanligvis pålitelig.
- **Ekstrapolering**: Anslå verdier utenfor dataområdet – ofte upålitelig.
- **Korrelasjon ≠ kausalitet**: Sammenheng betyr ikke nødvendigvis årsak.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: EKSPONENTIALREGRESJON
// ============================================================================

export const CHAPTER_1P_7_4: TextbookChapter = {
  id: '1p-7-4',
  courseId: '1p',
  chapterNumber: '7.4',
  title: 'Eksponentialregresjon',
  description:
    'Lær å gjenkjenne eksponentiell vekst og nedgang i data, utføre eksponentiell regresjon og velge mellom lineær og eksponentiell modell.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke digitale verktøy til å finne eksponentielle modellar som passar til datamateriale',
  ],
  content: [
    // --- Blokk 1: Introduksjon ---
    {
      id: '1p-7-4-intro',
      type: 'text',
      content: `## Når passer en eksponentiell modell?

Ikke alle datasett følger en rett linje. Noen ganger vokser eller avtar verdiene stadig raskere (eller saktere). Da kan en **eksponentiell modell** passe bedre enn en lineær.

En eksponentiell funksjon har formen:

$$y = a \\cdot b^x$$

der $a$ er startverdien (verdien av $y$ når $x = 0$) og $b$ er vekstfaktoren.
- Hvis $b > 1$: eksponentiell **vekst**
- Hvis $0 < b < 1$: eksponentiell **nedgang** (avtakende)

Typiske situasjoner med eksponentiell oppførsel:
- Befolkningsvekst
- Avkjøling av kaffe
- Batterilading
- Spredning av virus i tidlig fase`,
    },

    // --- Blokk 2: Gjenkjenne eksponentiell vekst ---
    {
      id: '1p-7-4-gjenkjenne',
      type: 'text',
      content: `## Gjenkjenne eksponentiell vekst i data

Du kan gjenkjenne eksponentiell vekst ved å se på **forholdstallet** mellom påfølgende $y$-verdier. Hvis $x$-verdiene øker med like intervaller:

- **Lineær sammenheng:** Differansen $y_{n+1} - y_n$ er tilnærmet konstant.
- **Eksponentiell sammenheng:** Forholdstallet $\\frac{y_{n+1}}{y_n}$ er tilnærmet konstant.

I et spredningsdiagram viser eksponentiell vekst en kurve som bøyer oppover stadig brattere, mens eksponentiell nedgang viser en kurve som flater ut.`,
    },

    // --- Blokk 3: Definisjon – Eksponentiell regresjon ---
    {
      id: '1p-7-4-def-ekspreg',
      type: 'definition',
      title: 'Eksponentiell regresjon',
      content: `**Eksponentiell regresjon** er en metode for å finne den eksponentielle funksjonen

$$y = a \\cdot b^x$$

som passer best til et datasett.

Digitale verktøy beregner verdiene av $a$ og $b$ automatisk. I tillegg oppgis gjerne korrelasjonskoeffisienten $r$ (eller $R^2$), som sier noe om hvor godt modellen passer dataene.`,
    },

    // --- Blokk 4: Eksempel 1 – Bakterievekst ---
    {
      id: '1p-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Bakterievekst',
      problem: `I et laboratorieforsøk ble antall bakterier i en petriskål talt opp hver time:

| Tid (timer) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Antall bakterier | 200 | 310 | 490 | 760 | 1180 | 1850 |

a) Regn ut forholdstallet mellom påfølgende $y$-verdier. Er sammenhengen lineær eller eksponentiell?
b) Bruk et digitalt verktøy til å finne den eksponentielle regresjonsmodellen.`,
      solution: `**Løsning:**

a) Vi regner ut forholdstallene:
- $\\frac{310}{200} = 1{,}55$
- $\\frac{490}{310} \\approx 1{,}58$
- $\\frac{760}{490} \\approx 1{,}55$
- $\\frac{1180}{760} \\approx 1{,}55$
- $\\frac{1850}{1180} \\approx 1{,}57$

Forholdstallene er tilnærmet konstante (ca. $1{,}56$), mens differansene er $110,\\, 180,\\, 270,\\, 420,\\, 670$ som øker. Sammenhengen er **eksponentiell**.

b) Ved eksponentiell regresjon i GeoGebra får vi:

$$y = 198 \\cdot 1{,}56^x$$

Her er $a \\approx 198$ (omtrent startverdien 200) og $b \\approx 1{,}56$ (antallet øker med ca. 56 % per time).`,
    },

    // --- Blokk 5: Oppgave 1 ---
    {
      id: '1p-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-7-4-ex-1',
        number: '7.9',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om dataene passer best til en lineær eller eksponentiell modell ved å se på differanser og forholdstall:',
        subTasks: [
          {
            label: 'a',
            task: '$x$: 0, 1, 2, 3, 4 og $y$: 5, 15, 45, 135, 405',
            solution:
              'Differansene er 10, 30, 90, 270 (ikke konstante). Forholdstallene: $15/5=3$, $45/15=3$, $135/45=3$, $405/135=3$. Konstant forholdstall $\\Rightarrow$ eksponentiell.',
            multipleChoiceOptions: ['Eksponentiell', 'Lineær'],
          },
          {
            label: 'b',
            task: '$x$: 0, 1, 2, 3, 4 og $y$: 12, 19, 26, 33, 40',
            solution:
              'Differansene er 7, 7, 7, 7 (konstante). Forholdstallene: $19/12 \\approx 1{,}58$, $26/19 \\approx 1{,}37$, $33/26 \\approx 1{,}27$ (ikke konstante). $\\Rightarrow$ lineær.',
            multipleChoiceOptions: ['Lineær', 'Eksponentiell'],
          },
          {
            label: 'c',
            task: '$x$: 0, 1, 2, 3, 4 og $y$: 800, 560, 392, 274, 192',
            solution:
              'Forholdstallene: $560/800=0{,}70$, $392/560=0{,}70$, $274/392=0{,}70$, $192/274=0{,}70$. Konstant forholdstall $\\Rightarrow$ eksponentiell (nedgang).',
            multipleChoiceOptions: ['Eksponentiell', 'Lineær'],
          },
        ],
        solution:
          'a) Eksponentiell  b) Lineær  c) Eksponentiell (nedgang)',
        hints: [
          'Konstant differanse → lineær. Konstant forholdstall → eksponentiell.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 6: Eksempel 2 – Avkjøling ---
    {
      id: '1p-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Avkjøling av te',
      problem: `En kopp te hadde temperaturen 85 °C da den ble satt til avkjøling i et rom med temperatur 22 °C. Temperaturen over romtemperatur ($y$) ble målt:

| Tid (min) | 0 | 5 | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|---|---|
| $y$ (°C over romtemp.) | 63 | 49 | 39 | 30 | 24 | 18 | 14 |

a) Utfør eksponentiell regresjon og finn modellen.
b) Bruk modellen til å anslå temperaturen over romtemperatur etter 12 minutter.
c) Hva er den faktiske temperaturen på teen etter 12 minutter ifølge modellen?`,
      solution: `**Løsning:**

a) Eksponentiell regresjon i GeoGebra gir:

$$y = 63{,}2 \\cdot 0{,}95^x$$

der $x$ er tid i minutter og $y$ er grader over romtemperatur.

Vekstfaktoren $b = 0{,}95 < 1$ bekrefter at det er eksponentiell nedgang (avkjøling).

b) For $x = 12$:
$$y = 63{,}2 \\cdot 0{,}95^{12} = 63{,}2 \\cdot 0{,}540 \\approx 34{,}2$$

Temperaturen over romtemperatur er ca. $34{,}2\\,°C$ etter 12 minutter.

c) Faktisk temperatur $= 22 + 34{,}2 = 56{,}2\\,°C$.`,
    },

    // --- Blokk 7: Sammenligne modeller ---
    {
      id: '1p-7-4-sammenligne',
      type: 'text',
      content: `## Sammenligne lineær og eksponentiell tilpasning

Ofte kan vi prøve *begge* modelltypene og se hvilken som passer best. Vi kan bruke korrelasjonskoeffisienten $r$ (eller $R^2$) til å sammenlikne:

1. Gjør lineær regresjon og noter $r$-verdien.
2. Gjør eksponentiell regresjon og noter $r$-verdien.
3. Velg modellen med $|r|$ nærmest $1$.

Vi bør også bruke sunn fornuft:
- Gir modellen mening i konteksten?
- Hva skjer med modellen for store eller små $x$-verdier?
- Er veksten rimelig i lang tid fremover?`,
    },

    // --- Blokk 8: Eksempel 3 – Velge modell ---
    {
      id: '1p-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Velge riktig modell',
      problem: `En nettbutikk registrerer antall bestillinger per måned de første månedene etter oppstart:

| Måned ($x$) | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Bestillinger ($y$) | 40 | 58 | 88 | 130 | 196 | 290 |

a) Prøv lineær regresjon. Hva blir $r$?
b) Prøv eksponentiell regresjon. Hva blir $r$?
c) Hvilken modell passer best?`,
      solution: `**Løsning:**

a) Lineær regresjon gir: $y = 49x - 37$ med $r \\approx 0{,}96$.

b) Eksponentiell regresjon gir: $y = 26{,}5 \\cdot 1{,}49^x$ med $r \\approx 1{,}00$.

c) Begge modellene gir høy korrelasjon, men den eksponentielle modellen har $|r|$ nærmere $1$ ($1{,}00$ vs. $0{,}96$).

I tillegg ser vi at differansene mellom påfølgende $y$-verdier øker ($18, 30, 42, 66, 94$), mens forholdstallene er mer konstante ($1{,}45;\\; 1{,}52;\\; 1{,}48;\\; 1{,}51;\\; 1{,}48$). Eksponentiell modell passer best.

**Merk:** I praksis kan eksponentiell vekst ikke fortsette i det uendelige. Etter hvert vil veksten avta, og en annen modell kan bli mer passende.`,
    },

    // --- Blokk 9: Oppgave 2 ---
    {
      id: '1p-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-7-4-ex-2',
        number: '7.10',
        type: 'classic',
        difficulty: 'medium',
        task: `Verdien av en bruktbil ($y$, i tusen kroner) ble registrert hvert år etter kjøp ($x$):

| År etter kjøp ($x$) | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Verdi ($y$, 1000 kr) | 350 | 290 | 245 | 200 | 168 | 140 |`,
        subTasks: [
          {
            label: 'a',
            task: 'Er dataene best beskrevet av en lineær eller eksponentiell modell? Begrunn med forholdstall.',
            solution:
              'Forholdstall: $290/350=0{,}83$, $245/290=0{,}84$, $200/245=0{,}82$, $168/200=0{,}84$, $140/168=0{,}83$. Tilnærmet konstant $\\Rightarrow$ eksponentiell nedgang.',
          },
          {
            label: 'b',
            task: 'Utfør eksponentiell regresjon og finn modellen.',
            solution:
              'Eksponentiell regresjon gir ca. $y = 349 \\cdot 0{,}833^x$.',
          },
          {
            label: 'c',
            task: 'Hva anslår modellen at bilen er verdt etter 7 år?',
            solution:
              '$y = 349 \\cdot 0{,}833^7 = 349 \\cdot 0{,}278 \\approx 97$. Bilen er verdt ca. 97 000 kr.',
          },
          {
            label: 'd',
            task: 'Hvor mange prosent av verdien mister bilen hvert år ifølge modellen?',
            solution:
              'Vekstfaktoren er $0{,}833$, som betyr at bilen beholder $83{,}3\\%$ av verdien hvert år. Den mister altså ca. $16{,}7\\%$ per år.',
          },
        ],
        solution:
          'a) Eksponentiell (konstant forholdstall ca. 0,83)  b) $y \\approx 349 \\cdot 0{,}833^x$  c) Ca. 97 000 kr  d) Ca. 16,7 % per år.',
        hints: [
          'Regn ut forholdstallet mellom påfølgende $y$-verdier.',
          'Vekstfaktor $b < 1$ betyr nedgang. Prosentvis nedgang $= (1 - b) \\cdot 100\\%$.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 10: Praktiske eksempler ---
    {
      id: '1p-7-4-praktisk',
      type: 'text',
      content: `## Praktiske eksempler på eksponentiell regresjon

**Befolkningsvekst:** Mange land har hatt perioder med tilnærmet eksponentiell befolkningsvekst. Om folkemengden i en by vokser med ca. 3 % per år, kan vi modellere dette med $y = a \\cdot 1{,}03^x$.

**Batterilading:** En mobiltelefon som lades, fyller de siste prosentene saktere enn de første. Gjenværende kapasitet som skal fylles, følger ofte en eksponentiell nedgang.

**Medisinkonsentrasjon:** Når du tar en tablett, brytes virkestoffet gradvis ned i kroppen. Konsentrasjonen i blodet avtar gjerne eksponentielt — for eksempel halveres mengden med en fast halvtid.

I alle tilfeller hjelper eksponentiell regresjon oss å finne den konkrete modellen fra målte data.`,
    },

    // --- Blokk 11: Oppgave 3 ---
    {
      id: '1p-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-7-4-ex-3',
        number: '7.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bygd hadde følgende innbyggertall de siste årene:

| År | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 |
|---|---|---|---|---|---|---|
| Innbyggere | 1240 | 1290 | 1350 | 1405 | 1465 | 1530 |

(Sett $x = 0$ for 2018, $x = 1$ for 2019 osv.)`,
        subTasks: [
          {
            label: 'a',
            task: 'Utfør både lineær og eksponentiell regresjon. Oppgi modellene og korrelasjonskoeffisientene.',
            solution:
              'Lineær: $y = 57{,}4x + 1237$ med $r \\approx 0{,}999$. Eksponentiell: $y = 1237 \\cdot 1{,}043^x$ med $r \\approx 0{,}999$.',
          },
          {
            label: 'b',
            task: 'Begge modellene gir høy $r$-verdi. Bruk modellene til å anslå innbyggertallet i 2030 ($x = 12$). Hvilken gir det mest rimelige svaret?',
            solution:
              'Lineær: $y = 57{,}4 \\cdot 12 + 1237 = 1926$. Eksponentiell: $y = 1237 \\cdot 1{,}043^{12} = 1237 \\cdot 1{,}66 \\approx 2053$. Forskjellen er beskjeden. For en bygd i jevn vekst kan begge gi rimelige svar, men den eksponentielle fanger opp at veksten akselererer.',
          },
          {
            label: 'c',
            task: 'Diskuter hva som skjer med modellene på lang sikt (f.eks. $x = 50$, år 2068).',
            solution:
              'Lineær: $y = 57{,}4 \\cdot 50 + 1237 = 4107$. Eksponentiell: $y = 1237 \\cdot 1{,}043^{50} \\approx 1237 \\cdot 8{,}15 \\approx 10\\,080$. Den eksponentielle veksten gir et langt høyere tall. Om bygda kan bære slik vekst, avhenger av praktiske forhold. Ekstrapolering over lange perioder er svært usikker for begge modeller.',
          },
        ],
        solution:
          'a) Lineær: $y \\approx 57{,}4x + 1237$, $r \\approx 0{,}999$. Eksponentiell: $y \\approx 1237 \\cdot 1{,}043^x$, $r \\approx 0{,}999$.  b) Lineær: 1926, Eksponentiell: 2053. Begge rimelige.  c) På lang sikt gir eksponentiell mye høyere tall; ekstrapolering er usikker.',
        hints: [
          'Husk at $x = 0$ tilsvarer 2018.',
          'Sammenlign $r$-verdier. Hvis de er svært like, se på spredningsdiagrammet og konteksten.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 12: Tips ---
    {
      id: '1p-7-4-tip-verktoy',
      type: 'tip',
      title: 'Eksponentiell regresjon i GeoGebra',
      content: `**Slik gjør du eksponentiell regresjon i GeoGebra:**

1. Skriv inn datapunktene, f.eks.: \`liste = {(0, 200), (1, 310), (2, 490), (3, 760), (4, 1180), (5, 1850)}\`
2. Bruk kommandoen \`RegEksp(liste)\` for eksponentiell regresjon.
3. GeoGebra finner $a$ og $b$ i $y = a \\cdot b^x$.

**For å sammenligne modeller:**
- Gjør \`RegLin(liste)\` og \`RegEksp(liste)\` på samme datasett.
- Se hvilken linje/kurve som følger datapunktene best.
- Sammenlign $r$-verdier (eller $R^2$-verdier).`,
    },

    // --- Blokk 13: Advarsel ---
    {
      id: '1p-7-4-warning',
      type: 'warning',
      title: 'Eksponentiell vekst i virkeligheten',
      content: `Eksponentiell vekst kan ikke vare evig. I praksis vil begrensede ressurser (plass, mat, penger) alltid bremse veksten etter en viss tid.

En eksponentiell regresjonsmodell er derfor best egnet til å beskrive utviklingen over *begrensede tidsperioder* — ikke til langtidsprognoser.

Vær spesielt forsiktig med ekstrapolering: selv om modellen passer dataene svært godt, kan den gi helt urealistiske verdier langt frem i tid.`,
    },

    // --- Blokk 14: Oppsummering ---
    {
      id: '1p-7-4-oppsummering',
      type: 'note',
      content: `**Oppsummering – Eksponentialregresjon:**

- Eksponentiell modell: $y = a \\cdot b^x$, der $a$ er startverdi og $b$ er vekstfaktor.
- $b > 1$: eksponentiell vekst. $0 < b < 1$: eksponentiell nedgang.
- Gjenkjenn eksponentiell sammenheng ved **konstant forholdstall** mellom $y$-verdier.
- Lineær sammenheng kjennes igjen ved **konstant differanse**.
- Bruk $|r|$ til å sammenligne modeller — velg den med høyest $|r|$.
- Eksponentiell vekst kan ikke vare evig — bruk modellen med forsiktighet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.5: KJENNETEGN VED FUNKSJONER
// ============================================================================

export const CHAPTER_1P_7_5: TextbookChapter = {
  id: '1p-7-5',
  courseId: '1p',
  chapterNumber: '7.5',
  title: 'Kjennetegn ved funksjoner',
  description:
    'Lær å analysere funksjoner ved å finne definisjonsmengde, verdimengde, nullpunkter, topp- og bunnpunkter, vekstfart og symmetri.',
  estimatedMinutes: 50,
  competenceGoals: [
    'tolke og bruke funksjonar og drøfte eigenskapane deira',
  ],
  content: [
    // --- Blokk 1: Introduksjon ---
    {
      id: '1p-7-5-intro',
      type: 'text',
      content: `## Hva kjennetegner en funksjon?

Når vi arbeider med funksjoner, ønsker vi å forstå **oppførselen** til funksjonen. I stedet for bare å sette inn $x$-verdier og regne ut $y$-verdier, ser vi på helhetsbildet:

- Hvilke $x$-verdier kan vi bruke?
- Hvilke $y$-verdier kan funksjonen gi?
- Hvor krysser grafen $x$-aksen?
- Har funksjonen høyeste- eller laveste-verdier?
- Hvor stiger grafen, og hvor synker den?

Å svare på disse spørsmålene kalles å **drøfte** funksjonen. I dette kapittelet går vi gjennom de viktigste kjennetegnene.`,
    },

    // --- Blokk 2: Definisjonsmengde og verdimengde ---
    {
      id: '1p-7-5-def-mengder',
      type: 'definition',
      title: 'Definisjonsmengde og verdimengde',
      content: `**Definisjonsmengden** $D_f$ er mengden av alle $x$-verdier vi kan sette inn i funksjonen.

**Verdimengden** $V_f$ er mengden av alle $y$-verdier funksjonen kan gi.

**Eksempler:**
- $f(x) = 2x + 3$: $D_f = \\mathbb{R}$ (alle reelle tall), $V_f = \\mathbb{R}$.
- $g(x) = x^2$: $D_f = \\mathbb{R}$, $V_f = [0, \\to \\rangle$ (aldri negative $y$-verdier).
- $h(x) = \\frac{1}{x}$: $D_f = \\mathbb{R} \\setminus \\{0\\}$ ($x = 0$ er ikke lov), $V_f = \\mathbb{R} \\setminus \\{0\\}$.`,
    },

    // --- Blokk 3: Eksempel 1 – Definisjonsmengde ---
    {
      id: '1p-7-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Finne definisjonsmengde og verdimengde',
      problem: `Finn definisjonsmengden og verdimengden til:
a) $f(x) = -x^2 + 4$
b) $g(x) = 3^x$`,
      solution: `**Løsning:**

a) $f(x) = -x^2 + 4$

**Definisjonsmengde:** Vi kan sette inn alle $x$-verdier, så $D_f = \\mathbb{R}$.

**Verdimengde:** Siden $-x^2 \\leq 0$ for alle $x$, er $f(x) = -x^2 + 4 \\leq 4$.
Toppunktet er $(0,\\, 4)$, og funksjonen kan gi alle verdier $\\leq 4$, så $V_f = \\langle \\leftarrow, 4]$.

b) $g(x) = 3^x$

**Definisjonsmengde:** Vi kan sette inn alle $x$-verdier, så $D_g = \\mathbb{R}$.

**Verdimengde:** $3^x > 0$ for alle $x$. Funksjonen nærmer seg $0$ men når aldri $0$, og den kan bli vilkårlig stor. Så $V_g = \\langle 0, \\to \\rangle$.`,
    },

    // --- Blokk 4: Nullpunkter ---
    {
      id: '1p-7-5-nullpunkter',
      type: 'text',
      content: `## Nullpunkter

Et **nullpunkt** er en $x$-verdi der funksjonen er lik null, altså der grafen krysser eller tangerer $x$-aksen.

Vi finner nullpunktene ved å løse likningen $f(x) = 0$.

**Eksempler:**
- $f(x) = 2x - 6$: $2x - 6 = 0 \\Rightarrow x = 3$. Nullpunkt: $x = 3$.
- $g(x) = x^2 - 9$: $x^2 - 9 = 0 \\Rightarrow x^2 = 9 \\Rightarrow x = \\pm 3$. Nullpunkter: $x = -3$ og $x = 3$.
- $h(x) = 3^x$: $3^x = 0$ har ingen løsning. Eksponentialfunksjoner har **ingen nullpunkter**.`,
    },

    // --- Blokk 5: Definisjon – Nullpunkt ---
    {
      id: '1p-7-5-def-nullpunkt',
      type: 'definition',
      title: 'Nullpunkt',
      content: `Et **nullpunkt** til funksjonen $f$ er en verdi $x_0$ slik at

$$f(x_0) = 0$$

Grafisk er nullpunktene de $x$-verdiene der grafen skjærer $x$-aksen.`,
    },

    // --- Blokk 6: Eksempel 2 – Nullpunkter ---
    {
      id: '1p-7-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne nullpunkter',
      problem: `Finn nullpunktene til:
a) $f(x) = 3x + 12$
b) $g(x) = x^2 - 5x + 6$
c) $h(x) = 2 \\cdot 0{,}5^x - 8$`,
      solution: `**Løsning:**

a) $3x + 12 = 0 \\Rightarrow 3x = -12 \\Rightarrow x = -4$.
Nullpunkt: $x = -4$.

b) $x^2 - 5x + 6 = 0$. Vi bruker abc-formelen eller faktoriserer:
$(x - 2)(x - 3) = 0 \\Rightarrow x = 2$ eller $x = 3$.
Nullpunkter: $x = 2$ og $x = 3$.

c) $2 \\cdot 0{,}5^x - 8 = 0 \\Rightarrow 0{,}5^x = 4 \\Rightarrow 0{,}5^x = 4$.
Vi løser med logaritmer: $x = \\frac{\\ln 4}{\\ln 0{,}5} = \\frac{1{,}386}{-0{,}693} = -2$.
Nullpunkt: $x = -2$.`,
    },

    // --- Blokk 7: Oppgave 1 ---
    {
      id: '1p-7-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-7-5-ex-1',
        number: '7.12',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn nullpunktene til funksjonene:',
        subTasks: [
          {
            label: 'a',
            task: '$f(x) = 5x - 20$',
            solution: '$5x - 20 = 0 \\Rightarrow x = 4$',
            answer: 4,
            multipleChoiceOptions: ['$x = 4$', '$x = 20$', '$x = -4$', '$x = 5$'],
          },
          {
            label: 'b',
            task: '$g(x) = x^2 - 16$',
            solution: '$x^2 = 16 \\Rightarrow x = \\pm 4$',
            multipleChoiceOptions: ['$x = -4$ og $x = 4$', '$x = 4$', '$x = 16$', '$x = -16$ og $x = 16$'],
          },
          {
            label: 'c',
            task: '$h(x) = -2x + 7$',
            solution: '$-2x + 7 = 0 \\Rightarrow x = 3{,}5$',
            answer: 3.5,
            multipleChoiceOptions: ['$x = 3{,}5$', '$x = 7$', '$x = -3{,}5$', '$x = 2$'],
          },
        ],
        solution: 'a) $x = 4$  b) $x = -4$ og $x = 4$  c) $x = 3{,}5$',
        hints: ['Sett $f(x) = 0$ og løs likningen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 8: Topp- og bunnpunkter ---
    {
      id: '1p-7-5-toppbunn',
      type: 'text',
      content: `## Topp- og bunnpunkter

Et **toppunkt** er et punkt der funksjonen har en lokal høyeste verdi. Grafen stiger opp til toppunktet og synker etterpå.

Et **bunnpunkt** er et punkt der funksjonen har en lokal laveste verdi. Grafen synker ned til bunnpunktet og stiger etterpå.

For andregradsfunksjoner $f(x) = ax^2 + bx + c$:
- Hvis $a < 0$: Grafen er en parabel som vender nedover, med ett **toppunkt**.
- Hvis $a > 0$: Grafen er en parabel som vender oppover, med ett **bunnpunkt**.

Topp- eller bunnpunktet har $x$-koordinat: $x = -\\frac{b}{2a}$`,
    },

    // --- Blokk 9: Eksempel 3 – Topp- og bunnpunkt ---
    {
      id: '1p-7-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Finne toppunkt og bunnpunkt',
      problem: `Finn toppunkt eller bunnpunkt for:
a) $f(x) = x^2 - 6x + 5$
b) $g(x) = -2x^2 + 8x + 3$`,
      solution: `**Løsning:**

a) $f(x) = x^2 - 6x + 5$. Her er $a = 1 > 0$, så parabelen vender oppover og har et **bunnpunkt**.

$x = -\\frac{b}{2a} = -\\frac{-6}{2 \\cdot 1} = 3$

$f(3) = 3^2 - 6 \\cdot 3 + 5 = 9 - 18 + 5 = -4$

Bunnpunkt: $(3,\\, -4)$.

b) $g(x) = -2x^2 + 8x + 3$. Her er $a = -2 < 0$, så parabelen vender nedover og har et **toppunkt**.

$x = -\\frac{b}{2a} = -\\frac{8}{2 \\cdot (-2)} = -\\frac{8}{-4} = 2$

$g(2) = -2 \\cdot 4 + 8 \\cdot 2 + 3 = -8 + 16 + 3 = 11$

Toppunkt: $(2,\\, 11)$.`,
    },

    // --- Blokk 10: Vekstfart ---
    {
      id: '1p-7-5-vekstfart',
      type: 'text',
      content: `## Vekstfart – stigende og synkende intervaller

**Vekstfart** (eller stigning) forteller oss hvor raskt funksjonen endrer seg.

- Funksjonen er **stigende** i et intervall dersom $f(x)$ øker når $x$ øker. Grafen går oppover mot høyre.
- Funksjonen er **synkende** i et intervall dersom $f(x)$ minker når $x$ øker. Grafen går nedover mot høyre.

For en lineær funksjon $f(x) = ax + b$ er vekstfarten konstant og lik $a$:
- $a > 0$: funksjonen er alltid stigende.
- $a < 0$: funksjonen er alltid synkende.

For andre funksjonstyper varierer vekstfarten. En andregradsfunksjon med bunnpunkt i $x = 3$ er synkende for $x < 3$ og stigende for $x > 3$.`,
    },

    // --- Blokk 11: Oppgave 2 ---
    {
      id: '1p-7-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-7-5-ex-2',
        number: '7.13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bestem topp-/bunnpunkt og stigende/synkende intervaller:',
        subTasks: [
          {
            label: 'a',
            task: '$f(x) = x^2 + 4x - 5$',
            solution:
              '$a = 1 > 0$: bunnpunkt. $x = -\\frac{4}{2} = -2$. $f(-2) = 4 - 8 - 5 = -9$. Bunnpunkt: $(-2,\\, -9)$. Synkende for $x < -2$, stigende for $x > -2$.',
          },
          {
            label: 'b',
            task: '$g(x) = -x^2 + 2x + 8$',
            solution:
              '$a = -1 < 0$: toppunkt. $x = -\\frac{2}{-2} = 1$. $g(1) = -1 + 2 + 8 = 9$. Toppunkt: $(1,\\, 9)$. Stigende for $x < 1$, synkende for $x > 1$.',
          },
          {
            label: 'c',
            task: '$h(x) = 3x^2 - 12x + 7$',
            solution:
              '$a = 3 > 0$: bunnpunkt. $x = -\\frac{-12}{6} = 2$. $h(2) = 12 - 24 + 7 = -5$. Bunnpunkt: $(2,\\, -5)$. Synkende for $x < 2$, stigende for $x > 2$.',
          },
        ],
        solution:
          'a) Bunnpunkt $(-2, -9)$, synkende $x<-2$, stigende $x>-2$.  b) Toppunkt $(1, 9)$, stigende $x<1$, synkende $x>1$.  c) Bunnpunkt $(2, -5)$, synkende $x<2$, stigende $x>2$.',
        hints: [
          'Finn $x$-koordinaten til ekstrempunktet med $x = -\\frac{b}{2a}$, deretter sett inn for å finne $y$-koordinaten.',
          'Hvis $a > 0$: bunnpunkt. Hvis $a < 0$: toppunkt.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 12: Symmetri ---
    {
      id: '1p-7-5-symmetri',
      type: 'text',
      content: `## Symmetri

En funksjon kan ha **symmetri** som gjør den lettere å tegne og forstå.

**Symmetri om $y$-aksen (partall-funksjon):**
En funksjon er symmetrisk om $y$-aksen dersom $f(-x) = f(x)$ for alle $x$.
Eksempler: $f(x) = x^2$, $f(x) = x^4$, $f(x) = |x|$.

**Symmetri om origo (oddetall-funksjon):**
En funksjon er symmetrisk om origo dersom $f(-x) = -f(x)$ for alle $x$.
Eksempler: $f(x) = x^3$, $f(x) = x$.

**Andregradsfunksjoner** har symmetri om den vertikale linjen $x = -\\frac{b}{2a}$, som går gjennom topp- eller bunnpunktet.`,
    },

    // --- Blokk 13: Asymptoter ---
    {
      id: '1p-7-5-asymptoter',
      type: 'text',
      content: `## Asymptoter

En **asymptote** er en linje som grafen nærmer seg mer og mer, men aldri treffer (eller krysser i noen tilfeller).

**Horisontal asymptote:** Grafen nærmer seg en bestemt $y$-verdi når $x$ blir veldig stor eller veldig liten.
- Eksempel: $f(x) = 3^x$ har horisontal asymptote $y = 0$. Grafen nærmer seg $x$-aksen mot venstre, men krysser aldri.

**Vertikal asymptote:** Grafen "sprenger" oppover eller nedover nær en $x$-verdi der funksjonen ikke er definert.
- Eksempel: $f(x) = \\frac{1}{x}$ har vertikal asymptote $x = 0$ og horisontal asymptote $y = 0$.

Vi møter asymptoter oftest i eksponentialfunksjoner og brøkfunksjoner.`,
    },

    // --- Blokk 14: Eksempel 4 – Drøfting av funksjon ---
    {
      id: '1p-7-5-example-4',
      type: 'example',
      title: 'Eksempel 4: Drøfte en andregradsfunksjon',
      problem: `Gitt funksjonen $f(x) = -x^2 + 4x + 5$.

a) Finn definisjonsmengden og verdimengden.
b) Finn nullpunktene.
c) Finn toppunktet.
d) Bestem hvor funksjonen er stigende og synkende.`,
      solution: `**Løsning:**

a) **Definisjonsmengde:** $D_f = \\mathbb{R}$ (alle $x$-verdier er tillatt).

For verdimengden trenger vi toppunktet (se punkt c).

b) **Nullpunkter:** $-x^2 + 4x + 5 = 0 \\Rightarrow x^2 - 4x - 5 = 0$ (ganger med $-1$).

$(x - 5)(x + 1) = 0 \\Rightarrow x = 5$ eller $x = -1$.

Nullpunkter: $x = -1$ og $x = 5$.

c) **Toppunkt:** $a = -1 < 0$, så funksjonen har toppunkt.

$x = -\\frac{b}{2a} = -\\frac{4}{2 \\cdot (-1)} = 2$

$f(2) = -4 + 8 + 5 = 9$

Toppunkt: $(2,\\, 9)$.

**Verdimengde:** $V_f = \\langle \\leftarrow, 9]$ (funksjonen kan aldri bli større enn $9$).

d) **Stigende** for $x < 2$ (grafen går oppover mot toppunktet).
**Synkende** for $x > 2$ (grafen går nedover etter toppunktet).`,
    },

    // --- Blokk 15: Sammenligne funksjonstyper ---
    {
      id: '1p-7-5-sammenligne',
      type: 'text',
      content: `## Sammenligne funksjonstyper

| Egenskap | Lineær $f(x)=ax+b$ | Kvadratisk $f(x)=ax^2+bx+c$ | Eksponentiell $f(x)=a \\cdot b^x$ |
|---|---|---|---|
| **Graf** | Rett linje | Parabel | Buet kurve |
| **Vekstfart** | Konstant ($=a$) | Varierer | Øker/avtar stadig raskere |
| **Nullpunkter** | Maks 1 | 0, 1 eller 2 | 0 eller 1 (avhenger av $a$) |
| **Topp-/bunnpunkt** | Ingen | Alltid ett | Ingen |
| **Symmetri** | Ingen | Om $x = -\\frac{b}{2a}$ | Ingen |
| **Asymptote** | Ingen | Ingen | Horisontal ($y = 0$ hvis $a > 0$) |
| **Definisjonsmengde** | $\\mathbb{R}$ | $\\mathbb{R}$ | $\\mathbb{R}$ |`,
    },

    // --- Blokk 16: Oppgave 3 – Identifisere funksjonstype ---
    {
      id: '1p-7-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-7-5-ex-3',
        number: '7.14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om funksjonen er lineær, kvadratisk eller eksponentiell basert på tabellen:',
        subTasks: [
          {
            label: 'a',
            task: '$x$: 0, 1, 2, 3, 4. $y$: 3, 7, 11, 15, 19.',
            solution:
              'Differansene er $4, 4, 4, 4$ (konstant). Lineær funksjon: $y = 4x + 3$.',
            multipleChoiceOptions: ['Lineær', 'Kvadratisk', 'Eksponentiell'],
          },
          {
            label: 'b',
            task: '$x$: 0, 1, 2, 3, 4. $y$: 2, 6, 18, 54, 162.',
            solution:
              'Forholdstallene: $6/2=3$, $18/6=3$, $54/18=3$, $162/54=3$ (konstant). Eksponentiell funksjon: $y = 2 \\cdot 3^x$.',
            multipleChoiceOptions: ['Eksponentiell', 'Lineær', 'Kvadratisk'],
          },
          {
            label: 'c',
            task: '$x$: 0, 1, 2, 3, 4. $y$: 1, 4, 9, 16, 25.',
            solution:
              'Differansene: $3, 5, 7, 9$ (ikke konstant). Forholdstall: $4, 2{,}25, 1{,}78, 1{,}56$ (ikke konstant). Andre differanser: $2, 2, 2$ (konstant). Kvadratisk funksjon: $y = (x+1)^2$.',
            multipleChoiceOptions: ['Kvadratisk', 'Lineær', 'Eksponentiell'],
          },
        ],
        solution:
          'a) Lineær  b) Eksponentiell  c) Kvadratisk',
        hints: [
          'Konstant differanse → lineær. Konstant forholdstall → eksponentiell. Konstant andre differanse → kvadratisk.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 17: Oppgave 4 – Helhetlig drøfting ---
    {
      id: '1p-7-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-7-5-ex-4',
        number: '7.15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft funksjonen $f(x) = x^2 - 2x - 8$ fullstendig:',
        subTasks: [
          {
            label: 'a',
            task: 'Finn definisjonsmengden.',
            solution: '$D_f = \\mathbb{R}$ (alle reelle tall).',
            multipleChoiceOptions: ['$\\mathbb{R}$', '$x \\geq 0$', '$x \\neq 0$', '$[-8, \\infty)$'],
          },
          {
            label: 'b',
            task: 'Finn nullpunktene.',
            solution:
              '$x^2 - 2x - 8 = 0 \\Rightarrow (x-4)(x+2) = 0 \\Rightarrow x = 4$ eller $x = -2$.',
            multipleChoiceOptions: ['$x = -2$ og $x = 4$', '$x = 2$ og $x = -4$', '$x = 8$', '$x = -8$'],
          },
          {
            label: 'c',
            task: 'Finn bunnpunktet.',
            solution:
              '$x = -\\frac{-2}{2 \\cdot 1} = 1$. $f(1) = 1 - 2 - 8 = -9$. Bunnpunkt: $(1,\\, -9)$.',
          },
          {
            label: 'd',
            task: 'Finn verdimengden.',
            solution: '$V_f = [-9, \\to \\rangle$ (minste verdi er $-9$).',
            multipleChoiceOptions: ['$[-9, \\infty)$', '$\\mathbb{R}$', '$(-\\infty, -9]$', '$[0, \\infty)$'],
          },
          {
            label: 'e',
            task: 'Bestem hvor funksjonen er stigende og synkende.',
            solution:
              'Synkende for $x < 1$, stigende for $x > 1$.',
          },
        ],
        solution:
          'a) $D_f = \\mathbb{R}$  b) $x = -2$ og $x = 4$  c) Bunnpunkt $(1, -9)$  d) $V_f = [-9, \\to \\rangle$  e) Synkende for $x < 1$, stigende for $x > 1$.',
        hints: [
          'Bruk $x = -\\frac{b}{2a}$ for å finne bunnpunktet.',
          'Nullpunkter: Løs $x^2 - 2x - 8 = 0$ ved faktorisering.',
          'Verdimengden starter fra $y$-verdien i bunnpunktet.',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 18: Oppsummering ---
    {
      id: '1p-7-5-oppsummering',
      type: 'note',
      content: `**Oppsummering – Kjennetegn ved funksjoner:**

- **Definisjonsmengde** $D_f$: Alle tillatte $x$-verdier.
- **Verdimengde** $V_f$: Alle mulige $y$-verdier.
- **Nullpunkter**: $x$-verdier der $f(x) = 0$ (graf krysser $x$-aksen).
- **Toppunkt**: Høyeste punkt (for $a < 0$ i andregradsfunksjoner).
- **Bunnpunkt**: Laveste punkt (for $a > 0$ i andregradsfunksjoner).
- **Stigende/synkende**: Hvor grafen går oppover/nedover.
- **Symmetri**: Andregradsfunksjoner er symmetriske om linjen gjennom ekstrempunktet.
- **Asymptoter**: Linjer grafen nærmer seg uten å nå (f.eks. $y = 0$ for $f(x) = b^x$).
- Bruk tabeller med differanser og forholdstall for å identifisere funksjonstype.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const CHAPTERS_1P_MODELLERING = [CHAPTER_1P_7_3, CHAPTER_1P_7_4, CHAPTER_1P_7_5];
