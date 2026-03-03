/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 9
 *
 * Kapittel 8.1: Tallmønstre og tallfølger
 * Kapittel 8.2: Figurtall og geometriske mønstre
 * Kapittel 8.3: Generalisering med variabler og formler
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1 NARRATIV: Tallmønstre og tallfølger
// ============================================================================

export const CHAPTER_8_8_1_NARRATIV: TextbookChapter = {
  id: '8-8-1-narrativ',
  courseId: '8',
  chapterNumber: '8.1',
  title: 'Tallmønstre og tallfølger',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av tallmønstre og tallfølger -- fra enkle rekker til aritmetiske følger -- der vi oppdager reglene som styrer tallenes verden.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  linkedChapterId: '8-8-1',
  content: [
    {
      id: '8-8-1-n-intro',
      type: 'text',
      content: `## Verden er full av mønstre

Tenk deg at du sitter på bussen og ser på husnumrene langs veien: $2, 4, 6, 8, 10, \\ldots$ Du vet med en gang hva det neste nummeret er. Eller tenk på en trapp: hvert trinn er like høyt. Eller på lommepengeøkningen du har forhandlet deg til: $50$ kr ekstra hver måned.

Alt dette er **tallmønstre** -- serier med tall der det finnes en regel som bestemmer hvordan tallene henger sammen. Å finne og beskrive slike mønstre er en av de mest grunnleggende ferdighetene i matematikk.

I dette kapittelet lærer vi å:
- Gjenkjenne mønstre i tallrekker
- Beskrive regler med ord
- Finne neste tall i en følge
- Jobbe med **aritmetiske følger** -- følger der forskjellen mellom tallene alltid er den samme`,
    },

    {
      id: '8-8-1-n-section1',
      type: 'text',
      content: `## Hva er en tallfølge?

En **tallfølge** er en ordnet liste med tall som følger et bestemt mønster. Hvert tall i følgen kalles et **ledd**. Det første tallet er **første ledd**, det neste er **andre ledd**, og så videre.

Her er noen eksempler:

- $1, 3, 5, 7, 9, \\ldots$ (oddetallene -- vi legger til $2$ hver gang)
- $3, 6, 9, 12, 15, \\ldots$ (tregangerbordet -- vi legger til $3$ hver gang)
- $1, 4, 9, 16, 25, \\ldots$ (kvadrattallene -- $1^2, 2^2, 3^2, 4^2, 5^2$)
- $1, 1, 2, 3, 5, 8, 13, \\ldots$ (Fibonacci-tallene -- hvert tall er summen av de to foregående)

For å finne mønsteret i en tallfølge er det lurt å se på **differansen** mellom hvert ledd -- altså hvor mye tallene endrer seg fra det ene til det neste:

| Følge | $2$ | $5$ | $8$ | $11$ | $14$ |
|-------|-----|-----|-----|------|------|
| Differanse | | $+3$ | $+3$ | $+3$ | $+3$ |

Her er differansen alltid $3$. Det betyr at vi legger til $3$ for hvert nytt ledd. Det neste tallet i følgen er $14 + 3 = 17$.

Når differansen er **konstant** (alltid den samme), kaller vi det en **aritmetisk følge**. Dette er den vanligste typen tallfølge du møter i 8. klasse.`,
    },

    {
      id: '8-8-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-8-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på tallmønstre:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-8-1-n-quiz1-q0',
            task: 'Hva er det neste tallet i følgen $4, 7, 10, 13, 16, \\ldots$?',
            options: [
              { id: 'a', text: '$18$', isCorrect: false },
              { id: 'b', text: '$19$', isCorrect: true },
              { id: 'c', text: '$20$', isCorrect: false },
              { id: 'd', text: '$17$', isCorrect: false },
            ],
            solution: 'Differansen er $+3$ mellom hvert ledd. Neste tall: $16 + 3 = 19$.',
          },
          {
            id: '8-8-1-n-quiz1-q1',
            task: 'Følgen $20, 17, 14, 11, \\ldots$ er en aritmetisk følge. Hva er differansen?',
            options: [
              { id: 'a', text: '$+3$', isCorrect: false },
              { id: 'b', text: '$-3$', isCorrect: true },
              { id: 'c', text: '$-6$', isCorrect: false },
              { id: 'd', text: '$+6$', isCorrect: false },
            ],
            solution: '$17 - 20 = -3$, $14 - 17 = -3$, $11 - 14 = -3$. Differansen er $-3$ -- tallene synker med $3$ for hvert ledd.',
          },
          {
            id: '8-8-1-n-quiz1-q2',
            task: 'Hvilken av disse er IKKE en aritmetisk følge?',
            options: [
              { id: 'a', text: '$5, 10, 15, 20, 25$', isCorrect: false },
              { id: 'b', text: '$3, 6, 12, 24, 48$', isCorrect: true },
              { id: 'c', text: '$100, 90, 80, 70, 60$', isCorrect: false },
              { id: 'd', text: '$1, 4, 7, 10, 13$', isCorrect: false },
            ],
            solution: '$3, 6, 12, 24, 48$ er ikke aritmetisk fordi differansene er $3, 6, 12, 24$ -- de er ikke konstante. Her dobles hvert tall, noe som gir en **geometrisk** følge.',
          },
        ],
      },
    },

    {
      id: '8-8-1-n-section2',
      type: 'text',
      content: `## Aritmetiske følger i detalj

I en aritmetisk følge har vi to viktige størrelser:

- **Første ledd** ($a_1$): det første tallet i følgen
- **Differansen** ($d$): hvor mye vi legger til (eller trekker fra) for hvert nytt ledd

Med disse to kan vi beskrive hele følgen. For eksempel: «Første ledd er $5$ og differansen er $3$» gir oss følgen $5, 8, 11, 14, 17, \\ldots$

Vi kan finne et hvilket som helst ledd direkte:

$$a_n = a_1 + (n - 1) \\cdot d$$

Her er $a_n$ det $n$-te leddet. La oss sjekke: det femte leddet ($n = 5$) i følgen $5, 8, 11, 14, 17$ er $a_5 = 5 + (5 - 1) \\cdot 3 = 5 + 12 = 17$. Stemmer!

Formelen virker fordi vi starter med $a_1$ og legger til differansen $d$ nøyaktig $(n - 1)$ ganger. For å komme til det $10$-de leddet trenger vi $9$ hopp fra det første:

$$a_{10} = 5 + 9 \\cdot 3 = 5 + 27 = 32$$

La oss prøve et hverdagseksempel: Mia har $200$ kr på konto og setter inn $50$ kr hver uke. Etter uke $1$ har hun $250$ kr, etter uke $2$ har hun $300$ kr, og så videre. Her er $a_1 = 200$ og $d = 50$. Etter $12$ uker: $a_{12} = 200 + 11 \\cdot 50 = 200 + 550 = 750$ kr.`,
    },

    {
      id: '8-8-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-8-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på aritmetiske følger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-8-1-n-quiz2-q0',
            task: 'En aritmetisk følge har $a_1 = 3$ og $d = 4$. Hva er det $8$-de leddet?',
            options: [
              { id: 'a', text: '$31$', isCorrect: true },
              { id: 'b', text: '$35$', isCorrect: false },
              { id: 'c', text: '$32$', isCorrect: false },
              { id: 'd', text: '$28$', isCorrect: false },
            ],
            solution: '$a_8 = 3 + (8 - 1) \\cdot 4 = 3 + 28 = 31$.',
          },
          {
            id: '8-8-1-n-quiz2-q1',
            task: 'I følgen $12, 9, 6, 3, 0, -3, \\ldots$ -- hva er det $10$-de leddet?',
            options: [
              { id: 'a', text: '$-12$', isCorrect: false },
              { id: 'b', text: '$-15$', isCorrect: true },
              { id: 'c', text: '$-18$', isCorrect: false },
              { id: 'd', text: '$-9$', isCorrect: false },
            ],
            solution: '$a_1 = 12$, $d = -3$. $a_{10} = 12 + 9 \\cdot (-3) = 12 - 27 = -15$.',
          },
          {
            id: '8-8-1-n-quiz2-q2',
            task: 'Jonas starter med $500$ kr og bruker $35$ kr per dag. Etter hvor mange dager har han $0$ kr igjen? (Anta at dag $0$ er startbeløpet.)',
            options: [
              { id: 'a', text: 'Etter $14$ dager', isCorrect: false },
              { id: 'b', text: 'Etter $15$ dager', isCorrect: false },
              { id: 'c', text: 'Etter ca. $14{,}3$ dager -- han går tom under dag $15$', isCorrect: true },
              { id: 'd', text: 'Etter $13$ dager', isCorrect: false },
            ],
            solution: 'Vi trenger $a_n = 0$: $500 + (n-1) \\cdot (-35) = 0 \\Rightarrow (n-1) = \\frac{500}{35} \\approx 14{,}3$. Altså $n \\approx 15{,}3$. Etter $14$ fulle dager har han $500 - 14 \\cdot 35 = 10$ kr igjen. Han har $0$ kr midt i dag $15$.',
          },
        ],
      },
    },

    {
      id: '8-8-1-n-section3',
      type: 'text',
      content: `## Å beskrive mønstre med ord

En viktig ferdighet er å kunne beskrive et mønster med **ord** -- ikke bare tall. Her er noen eksempler:

**Følge:** $6, 11, 16, 21, 26, \\ldots$
**Beskrivelse med ord:** «Følgen starter på $6$ og øker med $5$ for hvert ledd.»

**Følge:** $100, 85, 70, 55, 40, \\ldots$
**Beskrivelse med ord:** «Følgen starter på $100$ og minker med $15$ for hvert ledd.»

**Følge:** $1, 4, 9, 16, 25, \\ldots$
**Beskrivelse med ord:** «Hvert ledd er et kvadrattall. Ledd nummer $n$ er $n^2$.»

Noen mønstre krever mer oppmerksomhet. Se på følgen $2, 6, 12, 20, 30, \\ldots$

Differansene er $4, 6, 8, 10$ -- de er ikke konstante, men **de øker med $2$**! Når vi ser på differansene mellom differansene (andre differanse), er de konstante. Slike følger kalles **andregradsfølger** og dukker opp igjen når vi lærer om figurtall i neste kapittel.

En nyttig metode er å lage en tabell:

| Ledd nr. ($n$) | $1$ | $2$ | $3$ | $4$ | $5$ |
|----------------|-----|-----|-----|-----|-----|
| Verdi | $2$ | $6$ | $12$ | $20$ | $30$ |
| Første differanse | | $4$ | $6$ | $8$ | $10$ |
| Andre differanse | | | $2$ | $2$ | $2$ |

Når den andre differansen er konstant, vet vi at mønsteret kan beskrives med en formel av typen $an^2 + bn + c$.`,
    },

    {
      id: '8-8-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-8-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på å beskrive mønstre:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-8-1-n-quiz3-q0',
            task: 'Hva er det neste tallet i følgen $1, 3, 6, 10, 15, \\ldots$?',
            options: [
              { id: 'a', text: '$20$', isCorrect: false },
              { id: 'b', text: '$21$', isCorrect: true },
              { id: 'c', text: '$18$', isCorrect: false },
              { id: 'd', text: '$25$', isCorrect: false },
            ],
            solution: 'Differansene er $2, 3, 4, 5$ -- de øker med $1$. Neste differanse er $6$, og $15 + 6 = 21$. (Dette er trekanttallene!)',
          },
          {
            id: '8-8-1-n-quiz3-q1',
            task: 'Beskrivelsen er: «Start med $7$ og legg til $6$ for hvert nytt ledd.» Hva er det fjerde leddet?',
            options: [
              { id: 'a', text: '$19$', isCorrect: false },
              { id: 'b', text: '$25$', isCorrect: true },
              { id: 'c', text: '$31$', isCorrect: false },
              { id: 'd', text: '$28$', isCorrect: false },
            ],
            solution: 'Følgen er $7, 13, 19, 25, \\ldots$ Det fjerde leddet er $25$. Eller med formelen: $a_4 = 7 + 3 \\cdot 6 = 25$.',
          },
          {
            id: '8-8-1-n-quiz3-q2',
            task: 'Følgen $3, 5, 9, 15, 23, \\ldots$ har differanser $2, 4, 6, 8$. Hva er det sjette leddet?',
            options: [
              { id: 'a', text: '$31$', isCorrect: false },
              { id: 'b', text: '$33$', isCorrect: true },
              { id: 'c', text: '$35$', isCorrect: false },
              { id: 'd', text: '$29$', isCorrect: false },
            ],
            solution: 'Differansene øker med $2$: neste differanse er $10$. Det sjette leddet er $23 + 10 = 33$.',
          },
        ],
      },
    },

    {
      id: '8-8-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har utforsket tallmønstre og tallfølger -- grunnlaget for mye av matematikken.

**Nøkkelbegreper:**
- En **tallfølge** er en ordnet liste med tall som følger et mønster
- Hvert tall er et **ledd**, og forskjellen mellom leddene er **differansen**
- En **aritmetisk følge** har konstant differanse: $a_n = a_1 + (n-1) \\cdot d$

**Strategi for å finne mønstre:**
1. Regn ut differansene mellom leddene
2. Er differansen konstant? Da er det en aritmetisk følge
3. Øker differansene jevnt? Da er det en andregradsfølge
4. Prøv å beskrive mønsteret med ord

| Type følge | Eksempel | Kjennetegn |
|------------|----------|------------|
| Aritmetisk | $3, 7, 11, 15$ | Konstant differanse ($d = 4$) |
| Kvadrattall | $1, 4, 9, 16$ | Differanser: $3, 5, 7$ (øker med $2$) |
| Trekanttall | $1, 3, 6, 10$ | Differanser: $2, 3, 4$ (øker med $1$) |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2 NARRATIV: Figurtall og geometriske mønstre
// ============================================================================

export const CHAPTER_8_8_2_NARRATIV: TextbookChapter = {
  id: '8-8-2-narrativ',
  courseId: '8',
  chapterNumber: '8.2',
  title: 'Figurtall og geometriske mønstre',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av figurtall og geometriske mønstre -- fra trekanttall og kvadrattall til egne figurer -- der vi oppdager matematikk gjemt i former og bilder.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  linkedChapterId: '8-8-2',
  content: [
    {
      id: '8-8-2-n-intro',
      type: 'text',
      content: `## Tall du kan tegne

Visste du at noen tall har en helt spesiell form? Allerede for over 2500 år siden oppdaget de greske matematikerne at visse tall kan arrangeres som geometriske figurer -- prikker lagt ut i trekanter, kvadrater eller andre former.

De kalte dem **figurtall**, og ideen er like enkel som den er vakker: i stedet for bare å telle, kan vi **tegne** tallene og oppdage mønstre vi aldri ville sett ellers.

I dette kapittelet utforsker vi:
- **Trekanttall** -- tall som danner trekanter
- **Kvadrattall** -- tall som danner kvadrater
- Hvordan vi finner mønstre ved å studere figurer som vokser steg for steg`,
    },

    {
      id: '8-8-2-n-section1',
      type: 'text',
      content: `## Trekanttall -- prikker i trekantform

Legg en prikk. Legg to prikker under. Legg tre prikker under der igjen. Nå har du en trekant av prikker med totalt $1 + 2 + 3 = 6$ prikker. Det er det tredje **trekanttallet**.

Trekanttallene er:

| Figur nr. ($n$) | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|-----------------|-----|-----|-----|-----|-----|-----|
| Trekanttall | $1$ | $3$ | $6$ | $10$ | $15$ | $21$ |
| Nye prikker | $1$ | $+2$ | $+3$ | $+4$ | $+5$ | $+6$ |

Ser du mønsteret? Det $n$-te trekanttallet er summen $1 + 2 + 3 + \\cdots + n$. For hver ny rad i trekanten legger vi til én prikk mer enn raden over.

Men finnes det en snarvei i stedet for å legge sammen alle tallene? Ja! Tenk deg at du kopierer trekanten og snur den opp ned. Sammen danner de to trekantene et **rektangel** med $n$ rader og $(n + 1)$ kolonner. Rektangelet har $n \\cdot (n + 1)$ prikker, og trekanten er halvparten:

$$T_n = \\frac{n(n + 1)}{2}$$

For eksempel: $T_5 = \\frac{5 \\cdot 6}{2} = 15$. Og $T_{10} = \\frac{10 \\cdot 11}{2} = 55$. Prøv å legge sammen $1 + 2 + 3 + \\cdots + 10$ for hånd -- du får $55$!

En kjent fortelling sier at den unge Carl Friedrich Gauss fant denne formelen da han var bare $10$ år gammel. Læreren ba klassen legge sammen alle tallene fra $1$ til $100$. Gauss la merke til at $1 + 100 = 101$, $2 + 99 = 101$, $3 + 98 = 101$, og så videre -- $50$ slike par. Svaret er $50 \\cdot 101 = 5050$.`,
    },

    {
      id: '8-8-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-8-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på trekanttall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-8-2-n-quiz1-q0',
            task: 'Hva er det $7$-de trekanttallet ($T_7$)?',
            options: [
              { id: 'a', text: '$21$', isCorrect: false },
              { id: 'b', text: '$28$', isCorrect: true },
              { id: 'c', text: '$35$', isCorrect: false },
              { id: 'd', text: '$49$', isCorrect: false },
            ],
            solution: '$T_7 = \\frac{7 \\cdot 8}{2} = \\frac{56}{2} = 28$.',
          },
          {
            id: '8-8-2-n-quiz1-q1',
            task: 'Hva er summen $1 + 2 + 3 + \\cdots + 20$?',
            options: [
              { id: 'a', text: '$190$', isCorrect: false },
              { id: 'b', text: '$200$', isCorrect: false },
              { id: 'c', text: '$210$', isCorrect: true },
              { id: 'd', text: '$220$', isCorrect: false },
            ],
            solution: 'Summen er det $20$-de trekanttallet: $T_{20} = \\frac{20 \\cdot 21}{2} = 210$.',
          },
          {
            id: '8-8-2-n-quiz1-q2',
            task: 'Hvor mange nye prikker legger vi til for å gå fra det $8$-de til det $9$-de trekanttallet?',
            options: [
              { id: 'a', text: '$8$', isCorrect: false },
              { id: 'b', text: '$9$', isCorrect: true },
              { id: 'c', text: '$10$', isCorrect: false },
              { id: 'd', text: '$17$', isCorrect: false },
            ],
            solution: 'For å gå fra $T_8$ til $T_9$ legger vi til en ny rad med $9$ prikker. Generelt: vi legger til $n$ prikker for å gå til det $n$-te trekanttallet.',
          },
        ],
      },
    },

    {
      id: '8-8-2-n-section2',
      type: 'text',
      content: `## Kvadrattall -- prikker i firkantform

**Kvadrattallene** er enda enklere å se for seg. Legg prikkene i et rutenett: $1 \\times 1 = 1$, $2 \\times 2 = 4$, $3 \\times 3 = 9$, og så videre.

| Figur nr. ($n$) | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|-----------------|-----|-----|-----|-----|-----|-----|
| Kvadrattall | $1$ | $4$ | $9$ | $16$ | $25$ | $36$ |
| Nye prikker | $1$ | $+3$ | $+5$ | $+7$ | $+9$ | $+11$ |

Det $n$-te kvadrattallet er ganske enkelt:

$$K_n = n^2$$

Men se på de nye prikkene! Vi legger til $3, 5, 7, 9, 11, \\ldots$ -- altså **oddetallene**. Det er en vakker sammenheng:

$$1 + 3 + 5 + 7 + \\cdots + (2n - 1) = n^2$$

Hvorfor? Tenk visuelt: for å utvide et $3 \\times 3$ kvadrat til et $4 \\times 4$ kvadrat, legger du til en ny rad nederst ($4$ prikker), en ny kolonne til høyre ($4$ prikker) og et hjørnepunkt. Men raden og kolonnen deler et hjørne, så det blir $4 + 4 - 1 = 7$ nye prikker. Generelt: $n + n - 1 = 2n - 1$.

Det finnes enda en spennende sammenheng mellom trekanttall og kvadrattall: **summen av to påfølgende trekanttall er et kvadrattall**. For eksempel: $T_3 + T_4 = 6 + 10 = 16 = 4^2$. Algebraisk: $\\frac{n(n+1)}{2} + \\frac{(n+1)(n+2)}{2} = (n+1)^2$.`,
    },

    {
      id: '8-8-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-8-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kvadrattall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-8-2-n-quiz2-q0',
            task: 'Hva er summen av de fem første oddetallene ($1 + 3 + 5 + 7 + 9$)?',
            options: [
              { id: 'a', text: '$20$', isCorrect: false },
              { id: 'b', text: '$25$', isCorrect: true },
              { id: 'c', text: '$30$', isCorrect: false },
              { id: 'd', text: '$15$', isCorrect: false },
            ],
            solution: 'Summen av de $n$ første oddetallene er $n^2$. For $n = 5$: $5^2 = 25$.',
          },
          {
            id: '8-8-2-n-quiz2-q1',
            task: 'Hvor mange nye prikker trengs for å utvide et $6 \\times 6$ kvadrat til et $7 \\times 7$ kvadrat?',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$12$', isCorrect: false },
              { id: 'c', text: '$13$', isCorrect: true },
              { id: 'd', text: '$14$', isCorrect: false },
            ],
            solution: 'Vi trenger $2 \\cdot 7 - 1 = 13$ nye prikker. Alternativt: $7^2 - 6^2 = 49 - 36 = 13$.',
          },
          {
            id: '8-8-2-n-quiz2-q2',
            task: 'Hva er $T_5 + T_6$ (summen av det $5$-te og $6$-te trekanttallet)?',
            options: [
              { id: 'a', text: '$25$', isCorrect: false },
              { id: 'b', text: '$30$', isCorrect: false },
              { id: 'c', text: '$36$', isCorrect: true },
              { id: 'd', text: '$42$', isCorrect: false },
            ],
            solution: '$T_5 = 15$ og $T_6 = 21$. $15 + 21 = 36 = 6^2$. Summen av to påfølgende trekanttall gir alltid et kvadrattall!',
          },
        ],
      },
    },

    {
      id: '8-8-2-n-section3',
      type: 'text',
      content: `## Egne figurmønstre -- fra figur til tall

I mange oppgaver får du en serie med figurer som vokser, og du skal finne mønsteret. La oss se på noen eksempler.

**Eksempel 1: Stolpefigurer**
Tenk deg figurer laget av fyrstikker i en rad med firkanter:
- Figur 1: én firkant, $4$ fyrstikker
- Figur 2: to firkanter som deler en side, $7$ fyrstikker
- Figur 3: tre firkanter, $10$ fyrstikker
- Figur 4: fire firkanter, $13$ fyrstikker

Mønsteret: den første firkanten krever $4$ fyrstikker, og hver ny firkant legger til $3$ (fordi den deler én side med den forrige). Antall fyrstikker for figur $n$ er $4 + 3(n-1) = 3n + 1$.

**Eksempel 2: L-figurer**
Figurer formet som en L, der hvert steg legger til et nytt lag:
- Figur 1: $3$ ruter ($1$ bred, $1$ høy pluss $1$ ekstra)
- Figur 2: $5$ ruter
- Figur 3: $7$ ruter
- Figur 4: $9$ ruter

Mønsteret: $3, 5, 7, 9$ -- en aritmetisk følge med $d = 2$. Formel: $2n + 1$.

**Strategi for å finne mønster i figurer:**
1. Tell antall elementer i hver figur og skriv dem i en tabell
2. Finn differansene
3. Er differansen konstant? Da er det en lineær formel: $a_n = a_1 + (n-1) \\cdot d$
4. Øker differansene? Se etter et andregradsmønster
5. Prøv å se **hva som legges til** visuelt fra figur til figur`,
    },

    {
      id: '8-8-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-8-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på figurmønstre:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-8-2-n-quiz3-q0',
            task: 'Fyrspikkfigurer: Figur 1 har $4$, Figur 2 har $7$, Figur 3 har $10$. Hvor mange fyrstikker har Figur $10$?',
            options: [
              { id: 'a', text: '$28$', isCorrect: false },
              { id: 'b', text: '$30$', isCorrect: false },
              { id: 'c', text: '$31$', isCorrect: true },
              { id: 'd', text: '$33$', isCorrect: false },
            ],
            solution: 'Formelen er $3n + 1$. For $n = 10$: $3 \\cdot 10 + 1 = 31$ fyrstikker.',
          },
          {
            id: '8-8-2-n-quiz3-q1',
            task: 'En serie figurer har $2, 6, 12, 20, 30$ elementer. Hva er dette for slags figurtall?',
            options: [
              { id: 'a', text: 'Kvadrattall', isCorrect: false },
              { id: 'b', text: 'Trekanttall ganget med $2$ -- altså $n(n+1)$', isCorrect: true },
              { id: 'c', text: 'Rektangeltall', isCorrect: false },
              { id: 'd', text: 'Femkanttall', isCorrect: false },
            ],
            solution: '$2 = 1 \\cdot 2$, $6 = 2 \\cdot 3$, $12 = 3 \\cdot 4$, $20 = 4 \\cdot 5$, $30 = 5 \\cdot 6$. Mønsteret er $n(n+1)$, som er det dobbelte av trekanttallene.',
          },
          {
            id: '8-8-2-n-quiz3-q2',
            task: 'En figurserie har $5, 8, 11, 14, \\ldots$ elementer. Hvilken formel gir antall elementer i figur nr. $n$?',
            options: [
              { id: 'a', text: '$3n + 5$', isCorrect: false },
              { id: 'b', text: '$3n + 2$', isCorrect: true },
              { id: 'c', text: '$5n + 3$', isCorrect: false },
              { id: 'd', text: '$2n + 3$', isCorrect: false },
            ],
            solution: '$a_1 = 5$, $d = 3$. Formelen er $a_n = 5 + (n-1) \\cdot 3 = 5 + 3n - 3 = 3n + 2$. Sjekk: $n = 1$ gir $5$, $n = 2$ gir $8$. Stemmer!',
          },
        ],
      },
    },

    {
      id: '8-8-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Figurtall viser oss den vakre forbindelsen mellom geometri og tall.

| Figurtall | Formel | Følge |
|-----------|--------|-------|
| Trekanttall ($T_n$) | $\\frac{n(n+1)}{2}$ | $1, 3, 6, 10, 15, 21, \\ldots$ |
| Kvadrattall ($K_n$) | $n^2$ | $1, 4, 9, 16, 25, 36, \\ldots$ |
| Rektangeltall | $n(n+1)$ | $2, 6, 12, 20, 30, \\ldots$ |

Viktige sammenhenger:
- Summen av de $n$ første oddetallene er $n^2$
- Summen av to påfølgende trekanttall er et kvadrattall
- Rektangeltallene er det dobbelte av trekanttallene

**Strategi for figuroppgaver:**
1. Tegn en tabell med figurnummer og antall elementer
2. Finn differansene for å avgjøre type mønster
3. Bruk den visuelle strukturen til å forstå **hvorfor** mønsteret er som det er
4. Skriv opp en formel og sjekk at den gir riktige verdier`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3 NARRATIV: Generalisering med variabler og formler
// ============================================================================

export const CHAPTER_8_8_3_NARRATIV: TextbookChapter = {
  id: '8-8-3-narrativ',
  courseId: '8',
  chapterNumber: '8.3',
  title: 'Generalisering med variabler og formler',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av generalisering -- fra konkrete tallmønstre til allmenne formler med variabelen $n$ -- der vi oppdager kraften i algebraisk tenkning.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive strukturar og endringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  linkedChapterId: '8-8-3',
  content: [
    {
      id: '8-8-3-n-intro',
      type: 'text',
      content: `## Fra «neste tall» til «hvilket som helst tall»

I de forrige kapitlene lærte vi å finne det neste tallet i en følge. Det er nyttig -- men hva om vi trenger det $100$-de leddet? Eller det $1000$-de? Da er det upraktisk å legge til differansen hundrevis av ganger.

Det er her **generalisering** kommer inn. Å generalisere betyr å finne en **formel** som virker for **alle** verdier av $n$ -- ikke bare de vi allerede kjenner. I stedet for å si «legg til $3$ hver gang», skriver vi $a_n = 3n + 2$ og kan beregne ethvert ledd direkte.

Variabelen $n$ representerer figurnummeret, og formelen gir oss verdien. Dette er overgangen fra aritmetisk tenkning (å telle steg for steg) til **algebraisk tenkning** (å uttrykke det generelle mønsteret). Det er en av de viktigste ideene i all matematikk!

I dette kapittelet lærer vi:
- Å sette opp formler fra tallfølger og figurer
- Å jobbe med både lineære ($an + b$) og kvadratiske ($an^2 + bn + c$) formler
- Å **verifisere** at formelen stemmer
- Å bruke formler til å besvare spørsmål om store tall`,
    },

    {
      id: '8-8-3-n-section1',
      type: 'text',
      content: `## Lineære formler -- når differansen er konstant

Når en tallfølge har **konstant differanse**, vet vi at den er aritmetisk. Da kan vi skrive en lineær formel:

$$a_n = a_1 + (n - 1) \\cdot d$$

eller, omskrevet:

$$a_n = d \\cdot n + (a_1 - d)$$

Denne formelen har formen $a_n = kn + m$, der $k$ er differansen og $m$ er en konstant. La oss prøve med noen eksempler.

**Eksempel 1:** Følgen $5, 8, 11, 14, \\ldots$ har $d = 3$ og $a_1 = 5$.
$$a_n = 3n + (5 - 3) = 3n + 2$$
Sjekk: $a_1 = 3 \\cdot 1 + 2 = 5$ ✓, $a_2 = 3 \\cdot 2 + 2 = 8$ ✓, $a_3 = 3 \\cdot 3 + 2 = 11$ ✓.
Det $50$-de leddet: $a_{50} = 3 \\cdot 50 + 2 = 152$.

**Eksempel 2:** Fyrstikkfigurene fra forrige kapittel: $4, 7, 10, 13, \\ldots$ med $d = 3$ og $a_1 = 4$.
$$a_n = 3n + 1$$
Figur $100$ har $3 \\cdot 100 + 1 = 301$ fyrstikker. Så enkelt!

**Eksempel 3:** Taxitur koster $50$ kr fast pluss $12$ kr per kilometer.
$$\\text{Pris}(n) = 12n + 50$$
En tur på $15$ km koster $12 \\cdot 15 + 50 = 230$ kr.

Legg merke til strukturen: differansen ($d$) er tallet foran $n$ (stigningstallet), og konstantleddet forteller oss startverdien justert for at vi begynner på $n = 1$.`,
    },

    {
      id: '8-8-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-8-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på lineære formler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-8-3-n-quiz1-q0',
            task: 'Følgen $7, 12, 17, 22, \\ldots$ -- hvilken formel beskriver det $n$-te leddet?',
            options: [
              { id: 'a', text: '$a_n = 5n + 7$', isCorrect: false },
              { id: 'b', text: '$a_n = 5n + 2$', isCorrect: true },
              { id: 'c', text: '$a_n = 7n + 5$', isCorrect: false },
              { id: 'd', text: '$a_n = 5n - 2$', isCorrect: false },
            ],
            solution: '$d = 5$, $a_1 = 7$. $a_n = 5n + (7 - 5) = 5n + 2$. Sjekk: $a_1 = 7$ ✓, $a_2 = 12$ ✓.',
          },
          {
            id: '8-8-3-n-quiz1-q1',
            task: 'Formelen $a_n = 4n - 1$ gir en tallfølge. Hva er det $25$-de leddet?',
            options: [
              { id: 'a', text: '$96$', isCorrect: false },
              { id: 'b', text: '$99$', isCorrect: true },
              { id: 'c', text: '$100$', isCorrect: false },
              { id: 'd', text: '$101$', isCorrect: false },
            ],
            solution: '$a_{25} = 4 \\cdot 25 - 1 = 100 - 1 = 99$.',
          },
          {
            id: '8-8-3-n-quiz1-q2',
            task: 'Et svømmebasseng fylles med $200$ liter i minne fra starten, pluss $15$ liter per minutt. Hvor mye vann er det etter $30$ minutter?',
            options: [
              { id: 'a', text: '$450$ liter', isCorrect: false },
              { id: 'b', text: '$650$ liter', isCorrect: true },
              { id: 'c', text: '$600$ liter', isCorrect: false },
              { id: 'd', text: '$6200$ liter', isCorrect: false },
            ],
            solution: '$V(n) = 15n + 200$. Etter $30$ minutter: $15 \\cdot 30 + 200 = 450 + 200 = 650$ liter.',
          },
        ],
      },
    },

    {
      id: '8-8-3-n-section2',
      type: 'text',
      content: `## Kvadratiske formler -- når differansene øker

Noen ganger er differansene **ikke** konstante, men **øker jevnt**. Da trenger vi en formel med $n^2$ i seg.

**Eksempel: Trekanttallene** $1, 3, 6, 10, 15, \\ldots$
- Differanser: $2, 3, 4, 5$ (øker med $1$)
- Andre differanse: $1, 1, 1$ (konstant!)
- Formel: $T_n = \\frac{n(n+1)}{2} = \\frac{n^2 + n}{2} = \\frac{1}{2}n^2 + \\frac{1}{2}n$

**Eksempel: Figur med $3, 8, 15, 24, 35$ elementer**
- Differanser: $5, 7, 9, 11$ (øker med $2$)
- Andre differanse: $2, 2, 2$ (konstant!)

Når den andre differansen er $2$, er koeffisienten foran $n^2$ lik $\\frac{2}{2} = 1$. Vi starter med $a_n = n^2$ og justerer.

| $n$ | $n^2$ | Ønsket verdi | Forskjell |
|-----|-------|--------------|-----------|
| $1$ | $1$ | $3$ | $+2$ |
| $2$ | $4$ | $8$ | $+4$ |
| $3$ | $9$ | $15$ | $+6$ |
| $4$ | $16$ | $24$ | $+8$ |

Forskjellene er $2, 4, 6, 8$ -- altså $2n$. Dermed: $a_n = n^2 + 2n = n(n + 2)$.

Sjekk: $a_5 = 5 \\cdot 7 = 35$ ✓. Det $20$-de leddet: $a_{20} = 20 \\cdot 22 = 440$.

**Generell metode:**
1. Finn andre differanse (den er $2a$ der $a$ er koeffisienten foran $n^2$)
2. Start med $an^2$ og finn forskjellen mellom $an^2$ og de faktiske verdiene
3. Denne forskjellen bør være en lineær følge $bn + c$
4. Totalformelen er $an^2 + bn + c$`,
    },

    {
      id: '8-8-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-8-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kvadratiske formler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-8-3-n-quiz2-q0',
            task: 'Følgen $2, 8, 18, 32, 50, \\ldots$ -- hva er formelen?',
            options: [
              { id: 'a', text: '$a_n = n^2 + 1$', isCorrect: false },
              { id: 'b', text: '$a_n = 2n^2$', isCorrect: true },
              { id: 'c', text: '$a_n = n^2 + n$', isCorrect: false },
              { id: 'd', text: '$a_n = 3n^2 - 1$', isCorrect: false },
            ],
            solution: 'Differanser: $6, 10, 14, 18$. Andre differanse: $4$, altså $a = \\frac{4}{2} = 2$. Prøv $2n^2$: $2, 8, 18, 32, 50$ ✓. Formelen er $a_n = 2n^2$.',
          },
          {
            id: '8-8-3-n-quiz2-q1',
            task: 'Det $n$-te trekanttallet er $T_n = \\frac{n(n+1)}{2}$. Hva er $T_{100}$?',
            options: [
              { id: 'a', text: '$5000$', isCorrect: false },
              { id: 'b', text: '$5050$', isCorrect: true },
              { id: 'c', text: '$10\\,000$', isCorrect: false },
              { id: 'd', text: '$10\\,100$', isCorrect: false },
            ],
            solution: '$T_{100} = \\frac{100 \\cdot 101}{2} = \\frac{10\\,100}{2} = 5050$. (Gauss\' berømte resultat!)',
          },
          {
            id: '8-8-3-n-quiz2-q2',
            task: 'Figurtallene $0, 3, 8, 15, 24$ -- hva er formelen?',
            options: [
              { id: 'a', text: '$a_n = n^2 + n - 2$', isCorrect: false },
              { id: 'b', text: '$a_n = n^2 - 1$', isCorrect: true },
              { id: 'c', text: '$a_n = n^2 + 1$', isCorrect: false },
              { id: 'd', text: '$a_n = n^2 - n$', isCorrect: false },
            ],
            solution: 'Differanser: $3, 5, 7, 9$. Andre differanse: $2$, altså $a = 1$. Prøv $n^2$: $1, 4, 9, 16, 25$. Forskjell: $-1$ for alle. Formel: $n^2 - 1$. Sjekk: $1^2 - 1 = 0$ ✓, $2^2 - 1 = 3$ ✓.',
          },
        ],
      },
    },

    {
      id: '8-8-3-n-section3',
      type: 'text',
      content: `## Å bruke formler til å løse problemer

Nå som vi har formler, kan vi stille og besvare spørsmål som ville vært umulige å løse manuelt.

**Eksempel 1: Når når vi et bestemt tall?**
En aritmetisk følge er gitt ved $a_n = 4n + 3$. Hvilket ledd er lik $163$?

Vi setter opp ligningen: $4n + 3 = 163 \\Rightarrow 4n = 160 \\Rightarrow n = 40$. Det er det $40$-de leddet.

**Eksempel 2: Stoler i et amfiteater**
Et amfiteater har rader med $20, 24, 28, 32, \\ldots$ stoler. Rad $n$ har $4n + 16$ stoler.
- Hvor mange stoler har rad $15$? Svar: $4 \\cdot 15 + 16 = 76$ stoler.
- Hvor mange stoler er det totalt i de $15$ første radene? Da trenger vi summen $\\sum_{n=1}^{15}(4n + 16)$. Vi kan bruke formelen for summen av en aritmetisk følge: $S = \\frac{\\text{antall ledd}}{2} \\cdot (\\text{første} + \\text{siste}) = \\frac{15}{2} \\cdot (20 + 76) = 7{,}5 \\cdot 96 = 720$ stoler.

**Eksempel 3: Verifisering**
Sara finner formelen $a_n = 2n^2 - n + 1$ for en figurserie. Hvordan sjekker hun at den stemmer?

Hun setter inn $n = 1, 2, 3$ og sammenligner med de kjente verdiene:
- $a_1 = 2 - 1 + 1 = 2$ ✓
- $a_2 = 8 - 2 + 1 = 7$ ✓
- $a_3 = 18 - 3 + 1 = 16$ ✓

Alle stemmer -- formelen er trolig riktig!

Verifisering er alltid viktig. En formel kan gi riktige verdier for noen få ledd ved ren tilfeldighet, men å sjekke alle kjente verdier gir oss stor trygghet.`,
    },

    {
      id: '8-8-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-8-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på å bruke formler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-8-3-n-quiz3-q0',
            task: 'Følgen er gitt ved $a_n = 6n - 5$. Hvilket ledd er lik $91$?',
            options: [
              { id: 'a', text: 'Ledd nr. $15$', isCorrect: false },
              { id: 'b', text: 'Ledd nr. $16$', isCorrect: true },
              { id: 'c', text: 'Ledd nr. $14$', isCorrect: false },
              { id: 'd', text: 'Ledd nr. $17$', isCorrect: false },
            ],
            solution: '$6n - 5 = 91 \\Rightarrow 6n = 96 \\Rightarrow n = 16$. Det er ledd nummer $16$.',
          },
          {
            id: '8-8-3-n-quiz3-q1',
            task: 'En konsertsal har $n$-te rad med $2n + 10$ seter. Rad $1$ har $12$ seter og rad $20$ har $50$ seter. Hvor mange seter er det totalt i alle $20$ radene?',
            options: [
              { id: 'a', text: '$620$', isCorrect: true },
              { id: 'b', text: '$600$', isCorrect: false },
              { id: 'c', text: '$500$', isCorrect: false },
              { id: 'd', text: '$720$', isCorrect: false },
            ],
            solution: 'Summen av en aritmetisk følge: $S = \\frac{20}{2} \\cdot (12 + 50) = 10 \\cdot 62 = 620$ seter.',
          },
          {
            id: '8-8-3-n-quiz3-q2',
            task: 'Formelen $a_n = n^2 + 3n$ gir verdiene $4, 10, 18, 28, 40$ for $n = 1$ til $5$. Hva er $a_{12}$?',
            options: [
              { id: 'a', text: '$168$', isCorrect: false },
              { id: 'b', text: '$180$', isCorrect: true },
              { id: 'c', text: '$192$', isCorrect: false },
              { id: 'd', text: '$156$', isCorrect: false },
            ],
            solution: '$a_{12} = 12^2 + 3 \\cdot 12 = 144 + 36 = 180$.',
          },
        ],
      },
    },

    {
      id: '8-8-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Generalisering handler om å gå fra det spesielle til det allmenne -- fra noen konkrete tall til en formel som virker for alle.

**Lineære formler** ($a_n = kn + m$):
- Brukes når differansen er konstant
- $k$ er differansen, $m$ er konstantleddet
- Eksempel: $5, 8, 11, 14 \\Rightarrow a_n = 3n + 2$

**Kvadratiske formler** ($a_n = an^2 + bn + c$):
- Brukes når den andre differansen er konstant
- Koeffisienten $a = \\frac{\\text{andre differanse}}{2}$
- Eksempel: $1, 3, 6, 10 \\Rightarrow T_n = \\frac{n(n+1)}{2}$

**Fremgangsmåte:**
1. Lag tabell med verdier og differanser
2. Avgjør om formelen er lineær (konstant differanse) eller kvadratisk (konstant andre differanse)
3. Finn koeffisientene
4. **Verifiser** ved å sjekke kjente verdier

Å mestre generalisering betyr at du kan beregne ethvert ledd i en følge -- enten det er det $10$-de, det $100$-de eller det $1\\,000\\,000$-te!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_8_1_NARRATIV,
  CHAPTER_8_8_2_NARRATIV,
  CHAPTER_8_8_3_NARRATIV,
];
