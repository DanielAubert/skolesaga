/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 3
 *
 * Kapittel 3.1: Vinkler
 * Kapittel 3.2: Lineære funksjoner
 * Kapittel 3.3: Proporsjonalitet
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1 NARRATIV: Vinkler
// ============================================================================

export const CHAPTER_8_3_1_NARRATIV: TextbookChapter = {
  id: '8-3-1-narrativ',
  courseId: '8',
  chapterNumber: '3.1',
  title: 'Vinkler',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av vinkler -- der vi oppdager hvordan vinkler finnes overalt rundt oss, lærer å måle og beregne dem, og forstår sammenhengen mellom vinkler i trekanter og andre figurer.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei',
  ],
  linkedChapterId: '8-3-1',
  content: [
    {
      id: '8-3-1-n-intro',
      type: 'text',
      content: `## Vinkler i verden rundt oss

Hver gang du åpner en dør, vipper opp lokket på en laptop eller ser på viserne på en klokke, har du med vinkler å gjøre. En vinkel er rett og slett et mål på hvor mye noe «åpner seg» -- altså dreiningen mellom to linjer som møtes i et punkt.

Tenk på en saks: når du åpner den litt, er vinkelen mellom bladene liten. Åpner du den helt opp, blir vinkelen stor. Vinkler er så grunnleggende at de dukker opp overalt -- i arkitektur, sport, navigasjon og selvfølgelig i matematikken.

I dette kapittelet skal vi utforske hva vinkler egentlig er, hvordan vi måler dem, og noen viktige regler som hjelper oss å beregne ukjente vinkler uten å måle.`,
    },

    {
      id: '8-3-1-n-section1',
      type: 'text',
      content: `## Hva er en vinkel?

En **vinkel** dannes der to linjer eller linjestykker møtes i et punkt. Punktet der de møtes kalles **toppunktet**, og de to linjene kalles **vinkelbeina**. Vi måler vinkler i **grader** (symbolet $°$), og en hel omdreining er $360°$.

Noen viktige vinkelmål å kjenne til:

- **Rett vinkel** = $90°$ (som et hjørne i et rom). Vi markerer den med et lite kvadrat.
- **Stump vinkel** = mellom $90°$ og $180°$ (mer enn en rett vinkel, men mindre enn en halv omdreining).
- **Spiss vinkel** = mellom $0°$ og $90°$ (mindre enn en rett vinkel).
- **Rett linje** = $180°$ (en halv omdreining -- vinkelen er så stor at beina peker i stikk motsatte retninger).

Tenk på klokka: når den er 3:00, danner time- og minuttviseren en vinkel på $90°$. Når den er 6:00, er vinkelen $180°$. Og når den er 12:00, er vinkelen $0°$ (eller $360°$, som er det samme -- en full omdreining).

Vi bruker en **gradskive** til å måle vinkler. Legg sentrum av gradskiva i toppunktet, la nullstreken ligge langs det ene vinkelbeinet, og les av graden der det andre vinkelbeinet treffer skalaen.`,
    },

    {
      id: '8-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-1-n-quiz1-q0',
            task: 'Hva slags vinkel er $120°$?',
            options: [
              { id: 'a', text: 'Spiss vinkel', isCorrect: false },
              { id: 'b', text: 'Rett vinkel', isCorrect: false },
              { id: 'c', text: 'Stump vinkel', isCorrect: true },
              { id: 'd', text: 'Rett linje', isCorrect: false },
            ],
            solution: '$120°$ er mellom $90°$ og $180°$, og det er definisjonen på en stump vinkel.',
          },
          {
            id: '8-3-1-n-quiz1-q1',
            task: 'Hvor mange grader er en hel omdreining?',
            options: [
              { id: 'a', text: '$90°$', isCorrect: false },
              { id: 'b', text: '$180°$', isCorrect: false },
              { id: 'c', text: '$270°$', isCorrect: false },
              { id: 'd', text: '$360°$', isCorrect: true },
            ],
            solution: 'En hel omdreining -- helt rundt -- er $360°$. En halv omdreining er $180°$, og en kvart omdreining er $90°$.',
          },
        ],
      },
    },

    {
      id: '8-3-1-n-section2',
      type: 'text',
      content: `## Vinkelsummen i en trekant

Her kommer en av geometriens mest kjente regler: **summen av vinklene i en trekant er alltid $180°$**. Alltid. Uansett om trekanten er liten eller stor, spiss eller flat.

$$\\text{Vinkelsum i trekant:} \\quad A + B + C = 180°$$

Du kan faktisk bevise dette selv. Klipp ut en trekant i papir, riv av de tre hjørnene, og legg dem ved siden av hverandre med toppunktene inntil hverandre. Du vil se at de tre vinklene til sammen danner en rett linje -- altså $180°$.

**Eksempel:** I en trekant er to av vinklene $65°$ og $45°$. Hva er den tredje vinkelen?

$$C = 180° - 65° - 45° = 70°$$

Denne regelen er utrolig nyttig. Kjenner du to vinkler i en trekant, kan du alltid finne den tredje.

**Spesialtilfeller:**
- I en **rettvinklet trekant** er én vinkel $90°$, så de to andre summerer seg til $90°$.
- I en **likesidet trekant** er alle tre sidene like lange. Alle vinklene er da like store: $180° \\div 3 = 60°$.
- I en **likebeint trekant** er to sider like lange, og de to **basisvinklene** (vinklene ved den tredje siden) er like store.`,
    },

    {
      id: '8-3-1-n-section3',
      type: 'text',
      content: `## Vinkelsummen i firkanter og andre mangekanter

Hva med firkanter? En firkant kan alltid deles i to trekanter ved å trekke en diagonal. Siden hver trekant har vinkelsum $180°$, blir vinkelsummen i en firkant:

$$\\text{Vinkelsum i firkant:} \\quad 2 \\times 180° = 360°$$

I et rektangel er alle fire vinklene $90°$: $4 \\times 90° = 360°$. Stemmer!

Vi kan utvide dette til alle mangekanter. En femkant kan deles i $3$ trekanter, en sekskant i $4$ trekanter, og så videre. Formelen er:

$$\\text{Vinkelsum i } n\\text{-kant} = (n - 2) \\times 180°$$

der $n$ er antall sider. La oss teste: en trekant har $n = 3$, og $(3 - 2) \\times 180° = 1 \\times 180° = 180°$. En firkant har $n = 4$: $(4 - 2) \\times 180° = 360°$. En femkant har $n = 5$: $(5 - 2) \\times 180° = 540°$.

I en **regulær** (likesidet) mangekant er alle vinklene like store. Hver vinkel i en regulær $n$-kant er:

$$\\text{Hver vinkel} = \\frac{(n - 2) \\times 180°}{n}$$

For en regulær sekskant ($n = 6$): $\\frac{(6 - 2) \\times 180°}{6} = \\frac{720°}{6} = 120°$ per vinkel.`,
    },

    {
      id: '8-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-1-n-quiz2-q0',
            task: 'I en trekant er to av vinklene $50°$ og $80°$. Hva er den tredje vinkelen?',
            options: [
              { id: 'a', text: '$60°$', isCorrect: false },
              { id: 'b', text: '$50°$', isCorrect: true },
              { id: 'c', text: '$130°$', isCorrect: false },
              { id: 'd', text: '$40°$', isCorrect: false },
            ],
            solution: 'Vinkelsummen i en trekant er $180°$. Den tredje vinkelen er $180° - 50° - 80° = 50°$.',
          },
          {
            id: '8-3-1-n-quiz2-q1',
            task: 'Hva er vinkelsummen i en femkant?',
            options: [
              { id: 'a', text: '$360°$', isCorrect: false },
              { id: 'b', text: '$540°$', isCorrect: true },
              { id: 'c', text: '$720°$', isCorrect: false },
              { id: 'd', text: '$900°$', isCorrect: false },
            ],
            solution: 'Vinkelsummen i en $n$-kant er $(n - 2) \\times 180°$. For en femkant: $(5 - 2) \\times 180° = 3 \\times 180° = 540°$.',
          },
          {
            id: '8-3-1-n-quiz2-q2',
            task: 'Hvor store er vinklene i en likesidet trekant?',
            options: [
              { id: 'a', text: '$90°$', isCorrect: false },
              { id: 'b', text: '$45°$', isCorrect: false },
              { id: 'c', text: '$60°$', isCorrect: true },
              { id: 'd', text: '$120°$', isCorrect: false },
            ],
            solution: 'I en likesidet trekant er alle tre vinklene like store. Vinkelsummen er $180°$, så hver vinkel er $180° \\div 3 = 60°$.',
          },
        ],
      },
    },

    {
      id: '8-3-1-n-section4',
      type: 'text',
      content: `## Toppvinkler og nabovinkler

Når to rette linjer krysser hverandre, dannes fire vinkler. De har spesielle egenskaper som er veldig nyttige.

**Toppvinkler** er vinklene som står rett overfor hverandre i krysningspunktet. Toppvinkler er alltid **like store**. Hvis en av vinklene er $70°$, er toppvinkelen også $70°$.

**Nabovinkler** er vinkler som ligger ved siden av hverandre og deler ett vinkelben. Nabovinkler som til sammen utgjør en rett linje, har sum $180°$. Disse kalles **supplementvinkler**.

**Eksempel:** To linjer krysser hverandre. Én av vinklene er $110°$. Hva er de tre andre?

- Toppvinkelen er $110°$ (toppvinkler er like store).
- Nabovinkelen er $180° - 110° = 70°$ (nabovinkler summerer til $180°$).
- Den siste vinkelen er $70°$ (toppvinkelen til nabovinkelen).

Sjekk: $110° + 70° + 110° + 70° = 360°$. Stemmer -- summen rundt et punkt er alltid $360°$.

Disse reglene virker kanskje enkle, men de er utrolig kraftige. Med dem kan du finne ukjente vinkler i kompliserte figurer, bare ved å kjenne noen få vinkler og bruke logikk.`,
    },

    {
      id: '8-3-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-3-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-1-n-quiz3-q0',
            task: 'To rette linjer krysser hverandre. Én vinkel er $35°$. Hvor stor er toppvinkelen?',
            options: [
              { id: 'a', text: '$145°$', isCorrect: false },
              { id: 'b', text: '$35°$', isCorrect: true },
              { id: 'c', text: '$70°$', isCorrect: false },
              { id: 'd', text: '$55°$', isCorrect: false },
            ],
            solution: 'Toppvinkler er alltid like store. Siden den ene vinkelen er $35°$, er toppvinkelen også $35°$.',
          },
          {
            id: '8-3-1-n-quiz3-q1',
            task: 'To nabovinkler langs en rett linje summerer seg til:',
            options: [
              { id: 'a', text: '$90°$', isCorrect: false },
              { id: 'b', text: '$360°$', isCorrect: false },
              { id: 'c', text: '$180°$', isCorrect: true },
              { id: 'd', text: '$270°$', isCorrect: false },
            ],
            solution: 'En rett linje utgjør $180°$. Nabovinkler som danner en rett linje, summerer seg derfor alltid til $180°$.',
          },
        ],
      },
    },

    {
      id: '8-3-1-n-section5',
      type: 'text',
      content: `## Vinkler ved parallelle linjer

Når en rett linje krysser to parallelle linjer, dannes åtte vinkler. Disse vinklene har spesielle sammenhenger som gjør geometrien elegant.

**Samsvarende vinkler** (F-vinkler) er vinkler som har samme posisjon ved hvert krysningspunkt. De er alltid like store.

**Toppvinkler** er like store, som vi allerede vet.

**Nabovinkler** summerer seg til $180°$.

Resultatet er at det egentlig bare finnes to ulike vinkelstørrelser blant de åtte vinklene: en spiss og en stump, og de summerer seg til $180°$.

**Eksempel:** En linje krysser to parallelle linjer. Én vinkel er $65°$. Da er alle de spisse vinklene $65°$, og alle de stumpe vinklene $180° - 65° = 115°$.

Parallelle linjer er linjer som aldri møtes -- de har alltid samme avstand. Du ser dem overalt: jernbaneskinner, linjene på en fotballbane, kantene på et ark. Når du vet at to linjer er parallelle, åpner det for å bruke disse vinkelreglene til å finne ukjente vinkler.`,
    },

    {
      id: '8-3-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '8-3-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-1-n-quiz4-q0',
            task: 'En linje krysser to parallelle linjer. Én vinkel er $72°$. Hvor stor er den samsvarende vinkelen?',
            options: [
              { id: 'a', text: '$108°$', isCorrect: false },
              { id: 'b', text: '$72°$', isCorrect: true },
              { id: 'c', text: '$144°$', isCorrect: false },
              { id: 'd', text: '$36°$', isCorrect: false },
            ],
            solution: 'Samsvarende vinkler ved parallelle linjer er alltid like store. Derfor er den samsvarende vinkelen også $72°$.',
          },
          {
            id: '8-3-1-n-quiz4-q1',
            task: 'Hva er vinkelsummen i en regulær sekskant?',
            options: [
              { id: 'a', text: '$540°$', isCorrect: false },
              { id: 'b', text: '$720°$', isCorrect: true },
              { id: 'c', text: '$360°$', isCorrect: false },
              { id: 'd', text: '$1080°$', isCorrect: false },
            ],
            solution: 'Vinkelsummen i en $n$-kant er $(n - 2) \\times 180°$. For en sekskant: $(6 - 2) \\times 180° = 4 \\times 180° = 720°$.',
          },
        ],
      },
    },

    {
      id: '8-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Vinkler** måles i grader. Spisse vinkler er under $90°$, rette er $90°$, stumpe er mellom $90°$ og $180°$, og en rett linje er $180°$.

De viktigste reglene:
- **Vinkelsummen i en trekant** er $180°$
- **Vinkelsummen i en $n$-kant** er $(n - 2) \\times 180°$
- **Toppvinkler** er like store
- **Nabovinkler** langs en rett linje summerer seg til $180°$
- **Samsvarende vinkler** ved parallelle linjer er like store

Med disse reglene kan du finne ukjente vinkler i de fleste figurer -- bare ved å tenke logisk og bruke det du vet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2 NARRATIV: Lineære funksjoner
// ============================================================================

export const CHAPTER_8_3_2_NARRATIV: TextbookChapter = {
  id: '8-3-2-narrativ',
  courseId: '8',
  chapterNumber: '3.2',
  title: 'Lineære funksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av lineære funksjoner -- der vi oppdager hvordan rette linjer beskriver alt fra lommepenger til bussbilletter, og lærer å forstå sammenhengen mellom formler, tabeller og grafer.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive funksjonar knytte til praktiske situasjonar',
  ],
  linkedChapterId: '8-3-2',
  content: [
    {
      id: '8-3-2-n-intro',
      type: 'text',
      content: `## Rette linjer i hverdagen

Tenk deg at du sparer penger. Du har 200 kr fra før, og hver uke legger du til 50 kr. Etter 1 uke har du 250 kr, etter 2 uker 300 kr, etter 3 uker 350 kr. Ser du mønsteret? For hver uke som går, øker beløpet med nøyaktig 50 kr. Ingen overraskelser, ingen hopp -- bare en jevn, forutsigbar økning.

Hvis du tegner dette i et koordinatsystem med uker på $x$-aksen og kroner på $y$-aksen, får du en perfekt rett linje. Denne typen sammenheng kalles en **lineær funksjon**, og den er en av de viktigste i hele matematikken.

I dette kapittelet skal vi se på hva lineære funksjoner er, hvordan vi gjenkjenner dem, og hvorfor de er så utrolig nyttige.`,
    },

    {
      id: '8-3-2-n-section1',
      type: 'text',
      content: `## Hva er en funksjon?

En **funksjon** er en regel som tar inn et tall og gir tilbake nøyaktig ett tall. Tallet vi putter inn kalles **innverdien** ($x$), og tallet vi får ut kalles **utverdien** ($y$ eller $f(x)$).

Tenk på en automat: du velger et nummer (innverdi), og ut kommer en bestemt vare (utverdi). Funksjonen er regelen som bestemmer hvilken vare du får for hvert nummer.

Vi skriver funksjoner slik:

$$f(x) = \\text{en formel med } x$$

For eksempel betyr $f(x) = 3x + 10$ at vi tar $x$, ganger med $3$, og legger til $10$.

La oss prøve med $x = 2$:

$$f(2) = 3 \\cdot 2 + 10 = 6 + 10 = 16$$

Og med $x = 5$:

$$f(5) = 3 \\cdot 5 + 10 = 15 + 10 = 25$$

En funksjon kan fremstilles på fire måter:
- **Formel**: $f(x) = 3x + 10$
- **Tabell**: en verditabell med $x$- og $y$-verdier
- **Graf**: en kurve i et koordinatsystem
- **Tekst**: «funksjonen tredobler tallet og legger til 10»`,
    },

    {
      id: '8-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-2-n-quiz1-q0',
            task: 'Hva er $f(4)$ når $f(x) = 2x + 5$?',
            options: [
              { id: 'a', text: '$11$', isCorrect: false },
              { id: 'b', text: '$13$', isCorrect: true },
              { id: 'c', text: '$9$', isCorrect: false },
              { id: 'd', text: '$14$', isCorrect: false },
            ],
            solution: '$f(4) = 2 \\cdot 4 + 5 = 8 + 5 = 13$. Vi setter inn $x = 4$ i formelen og regner ut.',
          },
          {
            id: '8-3-2-n-quiz1-q1',
            task: 'Hva kjennetegner en funksjon?',
            options: [
              { id: 'a', text: 'Den kan gi flere ulike $y$-verdier for samme $x$-verdi', isCorrect: false },
              { id: 'b', text: 'Den gir alltid nøyaktig én $y$-verdi for hver $x$-verdi', isCorrect: true },
              { id: 'c', text: 'Den må alltid være en rett linje', isCorrect: false },
              { id: 'd', text: 'Den må alltid inneholde $x$', isCorrect: false },
            ],
            solution: 'En funksjon gir nøyaktig én utverdi ($y$) for hver innverdi ($x$). Det er selve definisjonen. Funksjoner trenger ikke være rette linjer -- de kan ha mange forskjellige former.',
          },
        ],
      },
    },

    {
      id: '8-3-2-n-section2',
      type: 'text',
      content: `## Den lineære funksjonen: $f(x) = ax + b$

En **lineær funksjon** er en funksjon der grafen er en rett linje. Den skrives alltid på formen:

$$f(x) = ax + b$$

Her er $a$ og $b$ faste tall (konstanter).

- $a$ kalles **stigningstallet** og forteller hvor bratt linjen er. Det er «hvor mye $y$ endrer seg når $x$ øker med $1$».
- $b$ kalles **konstantleddet** og forteller hvor linjen krysser $y$-aksen (altså verdien av $f(0)$).

La oss gå tilbake til spareeksempelet. Du startet med 200 kr og legger til 50 kr per uke. Beløpet etter $x$ uker er:

$$S(x) = 50x + 200$$

Her er $a = 50$ (du sparer 50 kr per uke) og $b = 200$ (du starter med 200 kr). Setter vi inn $x = 0$:

$$S(0) = 50 \\cdot 0 + 200 = 200$$

Etter 10 uker:

$$S(10) = 50 \\cdot 10 + 200 = 500 + 200 = 700 \\text{ kr}$$

**Kjennetegn på en lineær funksjon:**
- Grafen er en **rett linje**
- $y$-verdien endrer seg **like mye** for hver gang $x$ øker med $1$
- Formelen inneholder $x$ bare i **første potens** (ikke $x^2$, $x^3$ osv.)`,
    },

    {
      id: '8-3-2-n-section3',
      type: 'text',
      content: `## Stigningstallet -- brattheten

Stigningstallet $a$ er kanskje det viktigste tallet i en lineær funksjon. Det forteller oss om linjen stiger, synker eller er vannrett.

- **Positivt stigningstall** ($a > 0$): linjen stiger fra venstre mot høyre. Jo større $a$, jo brattere.
- **Negativt stigningstall** ($a < 0$): linjen synker fra venstre mot høyre. Jo mer negativt $a$ er, jo brattere nedover.
- **Stigningstall lik null** ($a = 0$): linjen er vannrett. $y$-verdien er den samme uansett $x$.

**Eksempel:** Funksjonen $f(x) = -2x + 8$ har stigningstall $a = -2$. Det betyr at for hvert steg til høyre synker $y$ med $2$. Hvis $x = 0$: $f(0) = 8$. Hvis $x = 1$: $f(1) = 6$. Hvis $x = 2$: $f(2) = 4$.

Du kan beregne stigningstallet mellom to punkter $(x_1, y_1)$ og $(x_2, y_2)$ med formelen:

$$a = \\frac{y_2 - y_1}{x_2 - x_1}$$

**Eksempel:** Linjen går gjennom punktene $(1, 3)$ og $(4, 12)$. Da er:

$$a = \\frac{12 - 3}{4 - 1} = \\frac{9}{3} = 3$$

Det betyr at $y$ øker med $3$ for hvert steg $x$ øker med $1$.`,
    },

    {
      id: '8-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-2-n-quiz2-q0',
            task: 'Hva er stigningstallet i funksjonen $f(x) = -4x + 7$?',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$4$', isCorrect: false },
              { id: 'c', text: '$-4$', isCorrect: true },
              { id: 'd', text: '$-7$', isCorrect: false },
            ],
            solution: 'I $f(x) = ax + b$ er stigningstallet $a$. Her er $a = -4$, som betyr at linjen synker med $4$ for hvert steg til høyre.',
          },
          {
            id: '8-3-2-n-quiz2-q1',
            task: 'En linje går gjennom $(2, 1)$ og $(5, 10)$. Hva er stigningstallet?',
            options: [
              { id: 'a', text: '$3$', isCorrect: true },
              { id: 'b', text: '$9$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{3}$', isCorrect: false },
              { id: 'd', text: '$-3$', isCorrect: false },
            ],
            solution: '$a = \\frac{10 - 1}{5 - 2} = \\frac{9}{3} = 3$. For hvert steg til høyre stiger linjen med $3$.',
          },
          {
            id: '8-3-2-n-quiz2-q2',
            task: 'Hva betyr det at stigningstallet er $0$?',
            options: [
              { id: 'a', text: 'Linjen går gjennom origo', isCorrect: false },
              { id: 'b', text: 'Linjen er loddrett', isCorrect: false },
              { id: 'c', text: 'Linjen er vannrett', isCorrect: true },
              { id: 'd', text: 'Linjen finnes ikke', isCorrect: false },
            ],
            solution: 'Når $a = 0$ er funksjonen $f(x) = b$, altså en konstant. $y$-verdien endrer seg aldri, og linjen er vannrett.',
          },
        ],
      },
    },

    {
      id: '8-3-2-n-section4',
      type: 'text',
      content: `## Tegne grafen til en lineær funksjon

For å tegne grafen bruker vi en **verditabell**. La oss tegne $f(x) = 2x - 3$.

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|-----|------|-----|-----|-----|-----|
| $f(x)$ | $-5$ | $-3$ | $-1$ | $1$ | $3$ |

Vi ser mønsteret: hver gang $x$ øker med $1$, øker $f(x)$ med $2$. Det er stigningstallet $a = 2$.

Nå plotter vi punktene i koordinatsystemet: $(-1, -5)$, $(0, -3)$, $(1, -1)$, $(2, 1)$, $(3, 3)$. Alle ligger på en rett linje.

**Praktisk tips:** Du trenger egentlig bare **to punkter** for å tegne en rett linje. Men bruk gjerne tre -- det tredje punktet fungerer som kontroll. Hvis det ikke ligger på linjen, har du regnet feil.

**Et smart triks:** Start med punktet der linjen krysser $y$-aksen, altså $(0, b)$. Gå deretter $1$ steg til høyre og $a$ steg opp (eller ned hvis $a$ er negativ). Marker det nye punktet og trekk en linje gjennom begge.

For $f(x) = 2x - 3$: start i $(0, -3)$, gå $1$ til høyre og $2$ opp: du havner i $(1, -1)$. Trekk en linje, og du er ferdig!`,
    },

    {
      id: '8-3-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-3-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-2-n-quiz3-q0',
            task: 'Funksjonen $f(x) = 5x + 2$ krysser $y$-aksen i punktet:',
            options: [
              { id: 'a', text: '$(5, 0)$', isCorrect: false },
              { id: 'b', text: '$(0, 5)$', isCorrect: false },
              { id: 'c', text: '$(0, 2)$', isCorrect: true },
              { id: 'd', text: '$(2, 0)$', isCorrect: false },
            ],
            solution: 'Linjen krysser $y$-aksen når $x = 0$. Da er $f(0) = 5 \\cdot 0 + 2 = 2$. Punktet er $(0, 2)$. Konstantleddet $b = 2$ gir oss svaret direkte.',
          },
          {
            id: '8-3-2-n-quiz3-q1',
            task: 'Hvor mange punkter trenger du minimum for å tegne en rett linje?',
            options: [
              { id: 'a', text: '$1$', isCorrect: false },
              { id: 'b', text: '$2$', isCorrect: true },
              { id: 'c', text: '$3$', isCorrect: false },
              { id: 'd', text: '$4$', isCorrect: false },
            ],
            solution: 'Gjennom to punkter går det nøyaktig én rett linje. Derfor trenger du minimum $2$ punkter. Et tredje punkt kan brukes som kontroll.',
          },
        ],
      },
    },

    {
      id: '8-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

En **funksjon** gir nøyaktig én utverdi for hver innverdi. En **lineær funksjon** har formen:

$$f(x) = ax + b$$

- $a$ er **stigningstallet** -- hvor mye $y$ endrer seg per steg i $x$
- $b$ er **konstantleddet** -- der linjen krysser $y$-aksen
- Positivt $a$: linjen stiger. Negativt $a$: linjen synker. $a = 0$: vannrett linje.
- Stigningstallet mellom to punkter: $a = \\frac{y_2 - y_1}{x_2 - x_1}$
- For å tegne grafen: lag verditabell, plott punkter, trekk en rett linje
- En lineær funksjon kjennetegnes ved at $y$ endrer seg like mye for hvert steg i $x$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3 NARRATIV: Proporsjonalitet
// ============================================================================

export const CHAPTER_8_3_3_NARRATIV: TextbookChapter = {
  id: '8-3-3-narrativ',
  courseId: '8',
  chapterNumber: '3.3',
  title: 'Proporsjonalitet',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av proporsjonalitet -- der vi oppdager hva det betyr at to størrelser er proporsjonale, hvordan vi regner med forhold, og hvorfor dette dukker opp overalt i hverdagen.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  linkedChapterId: '8-3-3',
  content: [
    {
      id: '8-3-3-n-intro',
      type: 'text',
      content: `## Dobbelt så mye -- dobbelt så dyrt?

Forestill deg at du kjøper epler i en butikk. 1 kg koster 30 kr. 2 kg koster 60 kr. 3 kg koster 90 kr. Ser du mønsteret? Dobler du mengden, dobles prisen. Tredobler du mengden, tredobles prisen. Forholdet mellom pris og vekt er alltid det samme: 30 kr per kg.

Denne typen sammenheng kalles **proporsjonalitet**, og den er en av de mest grunnleggende ideene i matematikken. Når to størrelser er proporsjonale, betyr det at de vokser (eller minker) i takt: endrer du den ene med en viss faktor, endres den andre med samme faktor.

I dette kapittelet skal vi utforske hva proporsjonalitet egentlig betyr, hvordan vi gjenkjenner det, og hvordan vi bruker det til å løse praktiske problemer.`,
    },

    {
      id: '8-3-3-n-section1',
      type: 'text',
      content: `## Hva betyr proporsjonalitet?

To størrelser er **proporsjonale** dersom forholdet mellom dem alltid er det samme. Vi kan skrive dette som:

$$\\frac{y}{x} = k$$

der $k$ er en konstant som kalles **proporsjonalitetskonstanten** (eller bare «konstanten»). Det betyr at $y = kx$.

Tilbake til eplene: prisen $y$ og vekten $x$ er proporsjonale med $k = 30$, fordi:

$$\\frac{30}{1} = \\frac{60}{2} = \\frac{90}{3} = 30$$

Uansett hvor mange kilo du kjøper, er prisen per kilo alltid 30 kr.

**Kjennetegn på proporsjonale størrelser:**
- Forholdet $\\frac{y}{x}$ er **konstant** for alle verdier
- Grafen er en **rett linje gjennom origo** $(0, 0)$
- Når den ene størrelsen er $0$, er den andre også $0$
- Dobler du den ene, dobles den andre

Sammenlign med spareeksempelet fra forrige kapittel: $S(x) = 50x + 200$. Her er forholdet $\\frac{S}{x}$ IKKE konstant, fordi du starter med 200 kr. Etter 1 uke: $\\frac{250}{1} = 250$. Etter 2 uker: $\\frac{300}{2} = 150$. Ulike tall! Det er lineært, men IKKE proporsjonalt.`,
    },

    {
      id: '8-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-3-n-quiz1-q0',
            task: 'En taxitur koster 40 kr i oppstart pluss 15 kr per km. Er prisen proporsjonal med antall kilometer?',
            options: [
              { id: 'a', text: 'Ja, fordi prisen øker jevnt', isCorrect: false },
              { id: 'b', text: 'Nei, fordi det er en fast oppstartspris', isCorrect: true },
              { id: 'c', text: 'Ja, fordi det er en lineær funksjon', isCorrect: false },
              { id: 'd', text: 'Nei, fordi prisen synker', isCorrect: false },
            ],
            solution: 'Med en fast oppstartspris på 40 kr er grafen en rett linje som IKKE går gjennom origo. Forholdet $\\frac{\\text{pris}}{\\text{km}}$ er ikke konstant, så det er ikke proporsjonalt. Det er lineært, men ikke proporsjonalt.',
          },
          {
            id: '8-3-3-n-quiz1-q1',
            task: 'Hvilken av disse viser en proporsjonal sammenheng?',
            options: [
              { id: 'a', text: '$y = 3x + 2$', isCorrect: false },
              { id: 'b', text: '$y = 7x$', isCorrect: true },
              { id: 'c', text: '$y = x^2$', isCorrect: false },
              { id: 'd', text: '$y = 10$', isCorrect: false },
            ],
            solution: '$y = 7x$ er proporsjonal fordi den har formen $y = kx$ med $k = 7$. Det er ingen konstantledd, og grafen går gjennom origo.',
          },
        ],
      },
    },

    {
      id: '8-3-3-n-section2',
      type: 'text',
      content: `## Forhold og forholdstall

Et **forhold** sammenligner to størrelser. Vi skriver det med kolon eller som en brøk:

$$3 : 5 \\quad \\text{eller} \\quad \\frac{3}{5}$$

Forhold brukes overalt. Oppskrifter bruker forhold: «2 dl mel til 3 dl melk». Kart bruker målestokk: «1 : 50\,000» betyr at 1 cm på kartet tilsvarer 50 000 cm (= 500 m) i virkeligheten.

**Forenkle forhold:** Vi kan forenkle forhold akkurat som brøker -- ved å dele begge tall med det samme.

$12 : 8 = 3 : 2$ (delt begge med $4$)

$15 : 25 = 3 : 5$ (delt begge med $5$)

**Regning med forhold:**

Tenk deg at du blander saft. Oppskriften sier at forholdet mellom saft og vann skal være $1 : 4$. Du vil lage 2,5 liter totalt. Hvor mye saft trenger du?

Totalt er det $1 + 4 = 5$ deler. Hver del er $\\frac{2{,}5}{5} = 0{,}5$ liter. Saften utgjør $1$ del: $1 \\times 0{,}5 = 0{,}5$ liter. Vannet utgjør $4$ deler: $4 \\times 0{,}5 = 2{,}0$ liter.

Sjekk: $0{,}5 + 2{,}0 = 2{,}5$ liter. Stemmer!`,
    },

    {
      id: '8-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-3-n-quiz2-q0',
            task: 'Forenkle forholdet $24 : 16$.',
            options: [
              { id: 'a', text: '$6 : 4$', isCorrect: false },
              { id: 'b', text: '$3 : 2$', isCorrect: true },
              { id: 'c', text: '$12 : 8$', isCorrect: false },
              { id: 'd', text: '$2 : 3$', isCorrect: false },
            ],
            solution: 'Vi deler begge tall med den største felles faktoren, som er $8$: $24 \\div 8 = 3$ og $16 \\div 8 = 2$. Altså $24 : 16 = 3 : 2$.',
          },
          {
            id: '8-3-3-n-quiz2-q1',
            task: 'I en klasse er forholdet mellom gutter og jenter $3 : 5$. Det er 24 elever totalt. Hvor mange gutter er det?',
            options: [
              { id: 'a', text: '$8$', isCorrect: false },
              { id: 'b', text: '$9$', isCorrect: true },
              { id: 'c', text: '$12$', isCorrect: false },
              { id: 'd', text: '$15$', isCorrect: false },
            ],
            solution: 'Totalt er det $3 + 5 = 8$ deler. Hver del er $\\frac{24}{8} = 3$ elever. Guttene utgjør $3$ deler: $3 \\times 3 = 9$ gutter.',
          },
          {
            id: '8-3-3-n-quiz2-q2',
            task: 'Et kart har målestokk $1 : 20\\,000$. En avstand på kartet er 4 cm. Hva er den virkelige avstanden?',
            options: [
              { id: 'a', text: '$80$ m', isCorrect: false },
              { id: 'b', text: '$800$ m', isCorrect: true },
              { id: 'c', text: '$8$ km', isCorrect: false },
              { id: 'd', text: '$80$ km', isCorrect: false },
            ],
            solution: '$4 \\text{ cm} \\times 20\\,000 = 80\\,000 \\text{ cm} = 800 \\text{ m}$. Målestokken forteller at 1 cm på kartet er 20 000 cm i virkeligheten.',
          },
        ],
      },
    },

    {
      id: '8-3-3-n-section3',
      type: 'text',
      content: `## Omvendt proporsjonalitet

Noen ganger er sammenhengen «omvendt»: når den ene størrelsen øker, minker den andre -- slik at produktet alltid er det samme.

$$x \\cdot y = k$$

eller

$$y = \\frac{k}{x}$$

**Eksempel:** Du skal male et gjerde, og jobben tar 12 «arbeidstimer». Hvis du jobber alene, bruker du 12 timer. Hvis 2 personer jobber, bruker dere $12 \\div 2 = 6$ timer. Hvis 3 personer jobber: $12 \\div 3 = 4$ timer. Hvis 4 personer jobber: $12 \\div 4 = 3$ timer.

Merk: $1 \\times 12 = 2 \\times 6 = 3 \\times 4 = 4 \\times 3 = 12$. Produktet er alltid $12$.

Dobler du antall arbeidere, halveres tiden. Det er omvendt proporsjonalitet.

**Grafen** til omvendt proporsjonalitet er IKKE en rett linje -- den er en bue (en hyperbel) som nærmer seg aksene uten å treffe dem. Dette er altså noe helt annet enn en lineær funksjon.

**Oppsummert:**
- **Proporsjonalt**: $y = kx$. Dobles $x$, dobles $y$.
- **Omvendt proporsjonalt**: $y = \\frac{k}{x}$. Dobles $x$, halveres $y$.`,
    },

    {
      id: '8-3-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-3-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-3-n-quiz3-q0',
            task: 'En jobb tar 60 timer totalt. 5 personer jobber sammen. Hvor lang tid bruker de?',
            options: [
              { id: 'a', text: '$10$ timer', isCorrect: false },
              { id: 'b', text: '$12$ timer', isCorrect: true },
              { id: 'c', text: '$55$ timer', isCorrect: false },
              { id: 'd', text: '$300$ timer', isCorrect: false },
            ],
            solution: 'Tid $= \\frac{60}{5} = 12$ timer. Det er omvendt proporsjonalitet: flere arbeidere gir kortere tid, og produktet er alltid $60$.',
          },
          {
            id: '8-3-3-n-quiz3-q1',
            task: 'Hvilken graf passer til en proporsjonal sammenheng?',
            options: [
              { id: 'a', text: 'En buet kurve', isCorrect: false },
              { id: 'b', text: 'En rett linje gjennom origo', isCorrect: true },
              { id: 'c', text: 'En rett linje som starter over origo', isCorrect: false },
              { id: 'd', text: 'En vannrett linje', isCorrect: false },
            ],
            solution: 'En proporsjonal sammenheng $y = kx$ gir en rett linje som alltid går gjennom origo $(0, 0)$, fordi når $x = 0$ er $y = 0$.',
          },
        ],
      },
    },

    {
      id: '8-3-3-n-section4',
      type: 'text',
      content: `## Proporsjonalitet i praksis

Proporsjonalitet dukker opp i mange situasjoner:

**Valutaveksling:** Hvis 1 euro koster 11,50 kr, koster 5 euro $5 \\times 11{,}50 = 57{,}50$ kr. Prisen i kroner er proporsjonal med antall euro.

**Hastighet og avstand:** Hvis du sykler med jevn hastighet på 20 km/t, tilbakelegger du 40 km på 2 timer, 60 km på 3 timer, og så videre. Avstanden er proporsjonal med tiden (så lenge hastigheten er konstant).

**Oppskrifter:** En oppskrift for 4 personer bruker 3 dl melk. For 8 personer trenger du $\\frac{8}{4} \\times 3 = 6$ dl. Mengden ingredienser er proporsjonal med antall porsjoner.

**Kryssgangeregel (kryss-multiplikasjon):** Når du har to like forhold, kan du kryss-multiplisere:

$$\\frac{a}{b} = \\frac{c}{d} \\quad \\Rightarrow \\quad a \\cdot d = b \\cdot c$$

**Eksempel:** 3 kg epler koster 75 kr. Hva koster 7 kg?

$$\\frac{3}{75} = \\frac{7}{x}$$

Kryss-multiplikasjon: $3 \\cdot x = 75 \\cdot 7 = 525$, altså $x = \\frac{525}{3} = 175$ kr.`,
    },

    {
      id: '8-3-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '8-3-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-3-n-quiz4-q0',
            task: '5 bøker koster 200 kr. Hva koster 8 bøker (proporsjonal pris)?',
            options: [
              { id: 'a', text: '$280$ kr', isCorrect: false },
              { id: 'b', text: '$320$ kr', isCorrect: true },
              { id: 'c', text: '$300$ kr', isCorrect: false },
              { id: 'd', text: '$400$ kr', isCorrect: false },
            ],
            solution: 'Pris per bok: $\\frac{200}{5} = 40$ kr. For $8$ bøker: $8 \\times 40 = 320$ kr.',
          },
          {
            id: '8-3-3-n-quiz4-q1',
            task: 'Hva er forskjellen mellom proporsjonalt og lineært?',
            options: [
              { id: 'a', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'b', text: 'Proporsjonalt er alltid en rett linje gjennom origo, lineært kan ha et konstantledd', isCorrect: true },
              { id: 'c', text: 'Lineært er alltid gjennom origo, proporsjonalt kan ha et konstantledd', isCorrect: false },
              { id: 'd', text: 'Proporsjonalt gir en buet kurve', isCorrect: false },
            ],
            solution: 'Proporsjonalt ($y = kx$) er et spesialtilfelle av lineært ($y = ax + b$) der $b = 0$. Alle proporsjonale sammenhenger er lineære, men ikke alle lineære er proporsjonale.',
          },
        ],
      },
    },

    {
      id: '8-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Proporsjonale størrelser** har konstant forhold: $\\frac{y}{x} = k$, altså $y = kx$. Grafen er en rett linje gjennom origo. Dobler du $x$, dobles $y$.

**Forhold** sammenligner to størrelser ($3 : 5$) og kan forenkles som brøker.

**Omvendt proporsjonalitet**: $x \\cdot y = k$. Dobles $x$, halveres $y$.

**Kryssgangeregelen**: $\\frac{a}{b} = \\frac{c}{d} \\Rightarrow a \\cdot d = b \\cdot c$

Viktig å huske:
- Proporsjonalt $\\neq$ lineært. Proporsjonalt krever at linjen går gjennom origo ($b = 0$).
- Sjekk proporsjonalitet ved å se om $\\frac{y}{x}$ er konstant for alle verdier.
- Omvendt proporsjonalitet gir en buet graf, ikke en rett linje.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_3_1_NARRATIV,
  CHAPTER_8_3_2_NARRATIV,
  CHAPTER_8_3_3_NARRATIV,
];
