/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 11
 *
 * Kapittel 10.1: Hva er en funksjon?
 * Kapittel 10.2: Verditabeller og grafer
 * Kapittel 10.3: Representere funksjoner på ulike måter
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 10.1 NARRATIV: Hva er en funksjon?
// ============================================================================

export const CHAPTER_8_10_1_NARRATIV: TextbookChapter = {
  id: '8-10-1-narrativ',
  courseId: '8',
  chapterNumber: '10.1',
  title: 'Hva er en funksjon?',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av funksjonsbegrepet der vi utforsker funksjoner som maskiner som forvandler tall, oppdager sammenhengen mellom inngangsverdi og utgangsverdi, og laerer a bruke f(x)-notasjonen.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og beskrive funksjonar knytte til praktiske situasjonar',
  ],
  linkedChapterId: '8-10-1',
  content: [
    {
      id: '8-10-1-n-intro',
      type: 'text',
      content: `## Maskinen som forvandler tall

Forestill deg en maskin som har en inngang og en utgang. Du putter inn et tall i inngangen, maskinen gjor noe med det, og ut kommer et nytt tall. Hver gang du putter inn det **samme** tallet, far du det **samme** svaret tilbake.

Denne maskinen er det matematikere kaller en **funksjon**.

Funksjoner finnes overalt i hverdagen, selv om vi kanskje ikke tenker over det:
- Du legger inn en vare i kassen pa butikken, og ut kommer prisen
- Du skriver inn en temperatur i Celsius, og far den tilbake i Fahrenheit
- Du taster inn antall timer du jobber, og far ut lonnen din

I alle disse tilfellene har du en **inngangsverdi** (det du putter inn) og en **utgangsverdi** (det du far tilbake). Og det viktigste: for samme inngangsverdi far du alltid samme utgangsverdi.`,
    },

    {
      id: '8-10-1-n-section1',
      type: 'text',
      content: `## Inngangsverdi og utgangsverdi

La oss tenke pa et konkret eksempel. Du jobber deltid og tjener 120 kr per time. Da kan vi sette opp en sammenheng:

| Timer jobbet | Lonn (kr) |
|:---:|:---:|
| 1 | 120 |
| 2 | 240 |
| 3 | 360 |
| 5 | 600 |

Her er **antall timer** inngangsverdien, og **lonnen** er utgangsverdien. Sammenhengen kan skrives som:

$$\\text{lonn} = 120 \\cdot \\text{timer}$$

I matematikk bruker vi gjerne bokstaver. Vi kaller inngangsverdien $x$ og utgangsverdien $y$:

$$y = 120x$$

Det betyr: «for a finne utgangsverdien, gang inngangsverdien med 120.»

**Men hva gjor dette til en funksjon?** Jo, det at hver inngangsverdi gir **noyaktig en** utgangsverdi. Jobber du 3 timer, far du alltid 360 kr -- ikke noen ganger 360 og andre ganger 400. Det er denne **entydigheten** som definerer en funksjon.`,
    },

    {
      id: '8-10-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-10-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-10-1-n-quiz1-q0',
            task: 'Hva er en funksjon?',
            options: [
              { id: 'a', text: 'Et regnestykke med mange tall', isCorrect: false },
              { id: 'b', text: 'En regel som gir noyaktig en utgangsverdi for hver inngangsverdi', isCorrect: true },
              { id: 'c', text: 'En tabell med tilfeldige tall', isCorrect: false },
              { id: 'd', text: 'Et diagram med streker', isCorrect: false },
            ],
            solution: 'En funksjon er en regel som til hver inngangsverdi gir noyaktig en utgangsverdi. Det er den entydige koblingen mellom inn og ut som gjor det til en funksjon.',
          },
          {
            id: '8-10-1-n-quiz1-q1',
            task: 'Du jobber og tjener $150$ kr per time. Hva er utgangsverdien nar inngangsverdien er $4$ timer?',
            options: [
              { id: 'a', text: '$150$ kr', isCorrect: false },
              { id: 'b', text: '$450$ kr', isCorrect: false },
              { id: 'c', text: '$600$ kr', isCorrect: true },
              { id: 'd', text: '$154$ kr', isCorrect: false },
            ],
            solution: 'Lonnen er $150 \\cdot 4 = 600$ kr. Vi ganger timelonn med antall timer for a finne total lonn.',
          },
          {
            id: '8-10-1-n-quiz1-q2',
            task: 'Hvilken av disse er IKKE en funksjon?',
            options: [
              { id: 'a', text: 'Sammenhengen mellom antall epler og totalprisen', isCorrect: false },
              { id: 'b', text: 'Sammenhengen mellom alder og hoyde (ulike mennesker med samme alder kan ha ulik hoyde)', isCorrect: true },
              { id: 'c', text: 'Sammenhengen mellom sidelengde og areal i et kvadrat', isCorrect: false },
              { id: 'd', text: 'Sammenhengen mellom radius og omkrets i en sirkel', isCorrect: false },
            ],
            solution: 'Alder og hoyde er ikke en funksjon fordi to personer pa 14 ar kan vaere ulike hoyder. Samme inngangsverdi gir forskjellige utgangsverdier -- og da er det ikke en funksjon.',
          },
        ],
      },
    },

    {
      id: '8-10-1-n-section2',
      type: 'text',
      content: `## Funksjonsmaskin-modellen

En nyttig mate a tenke pa funksjoner er som en **maskin**:

1. Du putter inn en verdi (inngangsverdien $x$)
2. Maskinen gjor noe med den (f.eks. ganger med 2 og legger til 3)
3. Ut kommer en ny verdi (utgangsverdien $y$)

La oss si at maskinens regel er: «gang med 2 og legg til 3». Da kan vi skrive:

$$y = 2x + 3$$

Hva skjer nar vi putter inn ulike verdier?

- Putter inn $x = 1$: $y = 2 \\cdot 1 + 3 = 5$
- Putter inn $x = 4$: $y = 2 \\cdot 4 + 3 = 11$
- Putter inn $x = 0$: $y = 2 \\cdot 0 + 3 = 3$
- Putter inn $x = -2$: $y = 2 \\cdot (-2) + 3 = -1$

Hver inngangsverdi gir noyaktig en utgangsverdi. Det er en funksjon!

Vi kan ogsa tenke baklengs: «Hvilken inngangsverdi gir utgangsverdien 9?» Da loser vi likningen:

$$2x + 3 = 9 \\implies 2x = 6 \\implies x = 3$$

Inngangsverdien 3 gir utgangsverdien 9.`,
    },

    {
      id: '8-10-1-n-section3',
      type: 'text',
      content: `## f(x)-notasjonen

I matematikk har vi en spesiell mate a skrive funksjoner pa. I stedet for a skrive $y = 2x + 3$, kan vi skrive:

$$f(x) = 2x + 3$$

Her er $f$ **navnet** pa funksjonen, og $x$ er **inngangsverdien**. Uttrykket $f(x)$ leses som «$f$ av $x$» og betyr «den verdien funksjonen $f$ gir nar vi setter inn $x$.»

Fordelen med denne skrivematen er at vi lett kan uttrykke bestemte funksjonsverdier:

- $f(1) = 2 \\cdot 1 + 3 = 5$ -- «$f$ av 1 er 5»
- $f(4) = 2 \\cdot 4 + 3 = 11$ -- «$f$ av 4 er 11»
- $f(0) = 2 \\cdot 0 + 3 = 3$ -- «$f$ av 0 er 3»

Vi trenger ikke alltid bruke bokstaven $f$. Vi kan ogsa kalle funksjonen $g$, $h$ eller noe annet:

$$g(x) = x^2 + 1$$

Da er $g(3) = 3^2 + 1 = 10$ og $g(-2) = (-2)^2 + 1 = 5$.

Legg merke til noe viktig med $g$: bade $g(2)$ og $g(-2)$ gir 5. Det er helt greit -- en funksjon kan gi **samme utgangsverdi** for **ulike inngangsverdier**. Det som ikke er lov, er at **en** inngangsverdi gir **flere** utgangsverdier.`,
    },

    {
      id: '8-10-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-10-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa f(x)-notasjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-10-1-n-quiz2-q0',
            task: 'Gitt $f(x) = 3x - 1$. Hva er $f(5)$?',
            options: [
              { id: 'a', text: '$15$', isCorrect: false },
              { id: 'b', text: '$14$', isCorrect: true },
              { id: 'c', text: '$16$', isCorrect: false },
              { id: 'd', text: '$4$', isCorrect: false },
            ],
            solution: '$f(5) = 3 \\cdot 5 - 1 = 15 - 1 = 14$.',
          },
          {
            id: '8-10-1-n-quiz2-q1',
            task: 'Gitt $g(x) = x^2 - 4$. Hva er $g(3)$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: true },
              { id: 'b', text: '$-1$', isCorrect: false },
              { id: 'c', text: '$2$', isCorrect: false },
              { id: 'd', text: '$13$', isCorrect: false },
            ],
            solution: '$g(3) = 3^2 - 4 = 9 - 4 = 5$.',
          },
          {
            id: '8-10-1-n-quiz2-q2',
            task: 'Gitt $f(x) = 2x + 7$. For hvilken verdi av $x$ er $f(x) = 15$?',
            options: [
              { id: 'a', text: '$x = 3$', isCorrect: false },
              { id: 'b', text: '$x = 4$', isCorrect: true },
              { id: 'c', text: '$x = 5$', isCorrect: false },
              { id: 'd', text: '$x = 11$', isCorrect: false },
            ],
            solution: 'Vi loser $2x + 7 = 15 \\implies 2x = 8 \\implies x = 4$. Kontroll: $f(4) = 2 \\cdot 4 + 7 = 15$. Stemmer!',
          },
        ],
      },
    },

    {
      id: '8-10-1-n-section4',
      type: 'text',
      content: `## Funksjoner i praktiske situasjoner

Funksjoner dukker opp i mange praktiske sammenhenger. La oss se pa noen eksempler.

**Eksempel 1: Drosjetur**
En drosje tar 50 kr i oppstartsavgift og 15 kr per kilometer. Kostnaden som funksjon av antall kilometer $x$ er:

$$f(x) = 15x + 50$$

En tur pa 8 km koster: $f(8) = 15 \\cdot 8 + 50 = 170$ kr.

**Eksempel 2: Temperaturomregning**
Sammenhengen mellom Celsius ($C$) og Fahrenheit ($F$) er:

$$F(C) = 1{,}8C + 32$$

Normal kroppstemperatur er $37°C$: $F(37) = 1{,}8 \\cdot 37 + 32 = 66{,}6 + 32 = 98{,}6°F$.

**Eksempel 3: Areal av et kvadrat**
Arealet av et kvadrat med sidelengde $s$ er:

$$A(s) = s^2$$

Her er inngangsverdien sidelengden og utgangsverdien arealet. For et kvadrat med side 6 cm: $A(6) = 36 \\text{ cm}^2$.

Legg merke til at alle disse eksemplene har noe til felles: en tydelig inngangsverdi, en klar regel, og noyaktig en utgangsverdi for hver inngangsverdi. Det er funksjoner i praksis.`,
    },

    {
      id: '8-10-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-10-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa praktiske funksjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-10-1-n-quiz3-q0',
            task: 'En drosje koster $50 + 15x$ kr der $x$ er antall km. Hvor mange km kan du kjore for $200$ kr?',
            options: [
              { id: 'a', text: '$8$ km', isCorrect: false },
              { id: 'b', text: '$10$ km', isCorrect: true },
              { id: 'c', text: '$13$ km', isCorrect: false },
              { id: 'd', text: '$12$ km', isCorrect: false },
            ],
            solution: '$15x + 50 = 200 \\implies 15x = 150 \\implies x = 10$ km.',
          },
          {
            id: '8-10-1-n-quiz3-q1',
            task: 'Arealet av et kvadrat er gitt ved $A(s) = s^2$. Hva er $A(9)$?',
            options: [
              { id: 'a', text: '$18$', isCorrect: false },
              { id: 'b', text: '$81$', isCorrect: true },
              { id: 'c', text: '$27$', isCorrect: false },
              { id: 'd', text: '$72$', isCorrect: false },
            ],
            solution: '$A(9) = 9^2 = 81$.',
          },
        ],
      },
    },

    {
      id: '8-10-1-n-summary',
      type: 'text',
      content: `## Oppsummering

En **funksjon** er en regel som til hver inngangsverdi gir noyaktig en utgangsverdi:

- **Inngangsverdi** ($x$): det vi putter inn
- **Utgangsverdi** ($y$ eller $f(x)$): det vi far ut
- **Funksjonsmaskin**: en nyttig modell -- inn med $x$, ut med $f(x)$
- **f(x)-notasjon**: $f(x) = 2x + 3$ betyr «sett inn $x$, gang med 2 og legg til 3»
- **Funksjonsverdi**: $f(5) = 13$ betyr «nar $x = 5$, er utgangsverdien 13»
- **Kravet**: En inngangsverdi ma gi noyaktig en utgangsverdi. Ulike inngangsverdier kan derimot godt gi samme utgangsverdi.

Funksjoner beskriver sammenhenger vi finner overalt -- fra drosjeturer til temperaturomregning til geometriske formler. I neste kapittel skal vi se pa to kraftige mater a vise funksjoner pa: verditabeller og grafer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2 NARRATIV: Verditabeller og grafer
// ============================================================================

export const CHAPTER_8_10_2_NARRATIV: TextbookChapter = {
  id: '8-10-2-narrativ',
  courseId: '8',
  chapterNumber: '10.2',
  title: 'Verditabeller og grafer',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av verditabeller og grafer der vi laerer a lage tabeller, plotte punkter i et koordinatsystem og lese av informasjon fra grafer -- slik at funksjoner blir synlige.',
  estimatedMinutes: 30,
  competenceGoals: [
    'representere funksjonar på ulike måtar og veksle mellom representasjonane',
  ],
  linkedChapterId: '8-10-2',
  content: [
    {
      id: '8-10-2-n-intro',
      type: 'text',
      content: `## Fra tall til bilde

I forrige kapittel laerte vi at en funksjon er en regel som gir noyaktig en utgangsverdi for hver inngangsverdi. Men en formel som $f(x) = 2x + 1$ er ganske abstrakt. Hadde det ikke vaert fint a **se** funksjonen?

Det er nettopp det en **graf** gjor. Den gjor en funksjon om til et bilde -- en kurve eller linje i et koordinatsystem. Med en graf kan du med ett blikk se hvordan funksjonen oppforer seg: gar den oppover eller nedover? Raskt eller sakte? Nar er verdien storst?

Men for vi kan tegne grafen, trenger vi a lage en **verditabell** -- en organisert oversikt over inngangsverdier og de tilhorende utgangsverdiene.`,
    },

    {
      id: '8-10-2-n-section1',
      type: 'text',
      content: `## Lage en verditabell

En verditabell er rett og slett en tabell der vi regner ut funksjonsverdier for utvalgte $x$-verdier. La oss lage en for $f(x) = 2x + 1$:

| $x$ | $f(x) = 2x + 1$ |
|:---:|:---:|
| $-2$ | $2 \\cdot (-2) + 1 = -3$ |
| $-1$ | $2 \\cdot (-1) + 1 = -1$ |
| $0$ | $2 \\cdot 0 + 1 = 1$ |
| $1$ | $2 \\cdot 1 + 1 = 3$ |
| $2$ | $2 \\cdot 2 + 1 = 5$ |
| $3$ | $2 \\cdot 3 + 1 = 7$ |

Hvert par $(x, f(x))$ gir oss et **punkt** vi kan plotte i koordinatsystemet. For eksempel gir $x = 2$ oss punktet $(2, 5)$.

**Tips for a lage gode verditabeller:**
- Velg $x$-verdier som er enkle a regne med (ofte heltall)
- Inkluder bade negative, null og positive verdier
- Ha minst 5--6 punkter for a se formen pa grafen
- Hvis du har en formel med nevner, unnga $x$-verdier som gir null i nevneren`,
    },

    {
      id: '8-10-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-10-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa verditabeller:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-10-2-n-quiz1-q0',
            task: 'Gitt $f(x) = 3x - 2$. Hvilken rad horer IKKE hjemme i verditabellen?',
            options: [
              { id: 'a', text: '$x = 0$, $f(x) = -2$', isCorrect: false },
              { id: 'b', text: '$x = 1$, $f(x) = 1$', isCorrect: false },
              { id: 'c', text: '$x = 2$, $f(x) = 5$', isCorrect: true },
              { id: 'd', text: '$x = 3$, $f(x) = 7$', isCorrect: false },
            ],
            solution: '$f(2) = 3 \\cdot 2 - 2 = 4$, ikke 5. De andre stemmer: $f(0) = -2$, $f(1) = 1$, $f(3) = 7$.',
          },
          {
            id: '8-10-2-n-quiz1-q1',
            task: 'Hvilket punkt i koordinatsystemet svarer til $x = 3$ og $f(3) = 7$?',
            options: [
              { id: 'a', text: '$(7, 3)$', isCorrect: false },
              { id: 'b', text: '$(3, 7)$', isCorrect: true },
              { id: 'c', text: '$(3, 3)$', isCorrect: false },
              { id: 'd', text: '$(7, 7)$', isCorrect: false },
            ],
            solution: 'Et punkt skrives som $(x, y)$ der $x$ er forste koordinat og $y = f(x)$ er andre koordinat. Sa det blir $(3, 7)$.',
          },
        ],
      },
    },

    {
      id: '8-10-2-n-section2',
      type: 'text',
      content: `## Koordinatsystemet

For a tegne grafen trenger vi et **koordinatsystem**. Det bestar av to tallinjer som star vinkelrett pa hverandre:

- **$x$-aksen** (den vannrette): viser inngangsverdiene
- **$y$-aksen** (den loddrette): viser utgangsverdiene

Der aksene krysser hverandre er **origo** $(0, 0)$.

Hvert punkt i koordinatsystemet beskrives med to tall: $(x, y)$. Det forste tallet forteller hvor langt til hoyre (eller venstre) du gar, og det andre tallet forteller hvor langt opp (eller ned) du gar.

**Eksempel:** Punktet $(3, 5)$ finner du ved a ga 3 enheter til hoyre langs $x$-aksen og deretter 5 enheter opp.

**Eksempel:** Punktet $(-2, 4)$ finner du ved a ga 2 enheter til **venstre** og 4 enheter opp.

**Eksempel:** Punktet $(1, -3)$ finner du ved a ga 1 enhet til hoyre og 3 enheter **ned**.`,
    },

    {
      id: '8-10-2-n-section3',
      type: 'text',
      content: `## Plotte punkter og tegne grafen

Na er vi klare til a tegne! La oss ta funksjonen $f(x) = 2x + 1$ med verditabellen fra tidligere. Vi plotter punktene:

$$(-2, -3), \\quad (-1, -1), \\quad (0, 1), \\quad (1, 3), \\quad (2, 5), \\quad (3, 7)$$

Nar vi plotter disse i koordinatsystemet og trekker en linje gjennom dem, ser vi at alle punktene ligger pa en **rett linje**. Det er ikke tilfeldig -- funksjoner pa formen $f(x) = ax + b$ gir alltid rette linjer. Disse kalles **lineaere funksjoner**.

Men ikke alle funksjoner gir rette linjer. La oss pruv $g(x) = x^2$:

| $x$ | $g(x) = x^2$ |
|:---:|:---:|
| $-3$ | $9$ |
| $-2$ | $4$ |
| $-1$ | $1$ |
| $0$ | $0$ |
| $1$ | $1$ |
| $2$ | $4$ |
| $3$ | $9$ |

Plotter vi disse punktene, ser vi en **bue** (en parabel) som er symmetrisk rundt $y$-aksen. Funksjonen gar nedover til venstre, nar et bunnpunkt i $(0, 0)$, og gar oppover til hoyre.

**Viktig:** Grafen til en funksjon er ikke bare prikkene -- den er den **sammenhengende kurven** gjennom alle punktene. Mellom $x = 1$ og $x = 2$ passerer grafen ogsa gjennom for eksempel $x = 1{,}5$, der $g(1{,}5) = 2{,}25$.`,
    },

    {
      id: '8-10-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-10-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa plotting og grafer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-10-2-n-quiz2-q0',
            task: 'Funksjonen $f(x) = 2x + 1$ er lineaer. Hva betyr det for grafen?',
            options: [
              { id: 'a', text: 'Grafen er en bue', isCorrect: false },
              { id: 'b', text: 'Grafen er en rett linje', isCorrect: true },
              { id: 'c', text: 'Grafen er en sirkel', isCorrect: false },
              { id: 'd', text: 'Grafen er en trapp', isCorrect: false },
            ],
            solution: 'En lineaer funksjon ($f(x) = ax + b$) gir alltid en rett linje som graf. Ordet «lineaer» kommer fra «linje».',
          },
          {
            id: '8-10-2-n-quiz2-q1',
            task: 'Gitt $g(x) = x^2$. Hva er $g(-3)$?',
            options: [
              { id: 'a', text: '$-9$', isCorrect: false },
              { id: 'b', text: '$9$', isCorrect: true },
              { id: 'c', text: '$-6$', isCorrect: false },
              { id: 'd', text: '$6$', isCorrect: false },
            ],
            solution: '$g(-3) = (-3)^2 = 9$. Husk: et negativt tall opphøyd i andre gir alltid et positivt resultat, fordi $(-3) \\cdot (-3) = 9$.',
          },
          {
            id: '8-10-2-n-quiz2-q2',
            task: 'Punktene $(-2, 4)$ og $(2, 4)$ ligger begge pa grafen til $g(x) = x^2$. Hva forteller det oss om grafen?',
            options: [
              { id: 'a', text: 'Grafen er en rett linje', isCorrect: false },
              { id: 'b', text: 'Grafen er symmetrisk rundt $y$-aksen', isCorrect: true },
              { id: 'c', text: 'Funksjonen har to utgangsverdier for $x = 2$', isCorrect: false },
              { id: 'd', text: 'Det er en feil i tabellen', isCorrect: false },
            ],
            solution: 'Fordi $(-2)^2 = 2^2 = 4$, ligger bade $(-2, 4)$ og $(2, 4)$ pa grafen. Dette viser at grafen er symmetrisk rundt $y$-aksen -- den ser lik ut pa begge sider.',
          },
        ],
      },
    },

    {
      id: '8-10-2-n-section4',
      type: 'text',
      content: `## Lese av informasjon fra grafer

En graf er ikke bare pen a se pa -- den er full av informasjon. Her er noen ting du kan lese av:

**1. Finne funksjonsverdien for en gitt $x$-verdi**
Ga loddrett opp fra $x$-verdien pa $x$-aksen til du treffer grafen. Les av $y$-verdien der.

**2. Finne $x$-verdien for en gitt $y$-verdi**
Ga vannrett fra $y$-verdien pa $y$-aksen til du treffer grafen. Les av $x$-verdien der. (Merk: det kan finnes flere $x$-verdier!)

**3. Finne nullpunktet**
Nullpunktet er der grafen krysser $x$-aksen, altsaa der $f(x) = 0$. For $f(x) = 2x + 1$ er nullpunktet der $2x + 1 = 0$, altsaa $x = -0{,}5$.

**4. Se om funksjonen oker eller minker**
Hvis grafen gar oppover fra venstre mot hoyre, oker funksjonen. Gar den nedover, minker den.

**Eksempel:** En graf viser temperaturen gjennom et dogn. Ved a lese av grafen kan du se nar det var kaldest (bunnpunktet), nar det var varmest (toppunktet), og hvor raskt temperaturen endret seg (hvor bratt kurven er).`,
    },

    {
      id: '8-10-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-10-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa avlesning av grafer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-10-2-n-quiz3-q0',
            task: 'Hva er nullpunktet til $f(x) = 3x - 6$?',
            options: [
              { id: 'a', text: '$x = -6$', isCorrect: false },
              { id: 'b', text: '$x = 6$', isCorrect: false },
              { id: 'c', text: '$x = 2$', isCorrect: true },
              { id: 'd', text: '$x = -2$', isCorrect: false },
            ],
            solution: 'Nullpunktet er der $f(x) = 0$: $3x - 6 = 0 \\implies 3x = 6 \\implies x = 2$. Grafen krysser $x$-aksen i punktet $(2, 0)$.',
          },
          {
            id: '8-10-2-n-quiz3-q1',
            task: 'Grafen til en funksjon gar oppover fra venstre mot hoyre. Hva betyr det?',
            options: [
              { id: 'a', text: 'Funksjonen er positiv', isCorrect: false },
              { id: 'b', text: 'Funksjonen er okende -- utgangsverdien blir storre nar $x$ oker', isCorrect: true },
              { id: 'c', text: 'Funksjonen er lineaer', isCorrect: false },
              { id: 'd', text: 'Funksjonen har et nullpunkt', isCorrect: false },
            ],
            solution: 'Nar grafen gar oppover, betyr det at funksjonsverdien oker nar $x$ oker. Vi sier at funksjonen er okende.',
          },
          {
            id: '8-10-2-n-quiz3-q2',
            task: 'Hva er $y$-verdien der grafen til $f(x) = 2x + 1$ krysser $y$-aksen?',
            options: [
              { id: 'a', text: '$y = 0$', isCorrect: false },
              { id: 'b', text: '$y = 2$', isCorrect: false },
              { id: 'c', text: '$y = 1$', isCorrect: true },
              { id: 'd', text: '$y = -1$', isCorrect: false },
            ],
            solution: 'Grafen krysser $y$-aksen der $x = 0$. Vi setter inn: $f(0) = 2 \\cdot 0 + 1 = 1$. Sa grafen krysser $y$-aksen i punktet $(0, 1)$.',
          },
        ],
      },
    },

    {
      id: '8-10-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Verditabeller og grafer gjor funksjoner synlige:

- **Verditabell**: Velg flere $x$-verdier, regn ut $f(x)$ for hver, og organiser i en tabell. Hvert par $(x, f(x))$ er et punkt.
- **Koordinatsystemet**: To akser ($x$ vannrett, $y$ loddrett) som moter i origo $(0, 0)$.
- **Plotte**: Merk av punktene fra verditabellen og trekk en jevn kurve gjennom dem.
- **Lineaere funksjoner** ($f(x) = ax + b$) gir rette linjer.
- **Kvadratiske funksjoner** ($g(x) = x^2$) gir parabler.
- **Avlesning**: Fra grafen kan du finne funksjonsverdier, nullpunkter (der grafen krysser $x$-aksen) og se om funksjonen oker eller minker.
- **Nullpunkt**: $x$-verdien der $f(x) = 0$ -- grafisk: der grafen krysser $x$-aksen.

I neste kapittel skal vi se at funksjoner kan vises pa enda flere mater -- og laere a oversette mellom dem.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3 NARRATIV: Representere funksjoner på ulike måter
// ============================================================================

export const CHAPTER_8_10_3_NARRATIV: TextbookChapter = {
  id: '8-10-3-narrativ',
  courseId: '8',
  chapterNumber: '10.3',
  title: 'Representere funksjoner på ulike måter',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av de fire representasjonene av funksjoner -- tekst, tabell, graf og formel -- og hvordan man veksler mellom dem for a fa full oversikt over sammenhengen.',
  estimatedMinutes: 30,
  competenceGoals: [
    'representere funksjonar på ulike måtar og veksle mellom representasjonane',
  ],
  linkedChapterId: '8-10-3',
  content: [
    {
      id: '8-10-3-n-intro',
      type: 'text',
      content: `## Fire sprak for samme historie

Tenk deg at du skal fortelle noen om turen din til fjells. Du kan **fortelle** om den med ord, vise **bilder**, lage en **tidslinje** med stoppesteder, eller skrive ned **noyaktige GPS-koordinater**. Alle disse matene beskriver den samme turen -- men de fremhever ulike ting.

Pa akkurat samme mate kan vi beskrive en funksjon pa **fire ulike mater**:

1. **Tekst** (ord) -- en verbal beskrivelse av sammenhengen
2. **Tabell** (tall) -- en organisert oversikt over verdier
3. **Graf** (bilde) -- en visuell fremstilling i koordinatsystemet
4. **Formel** (algebra) -- et matematisk uttrykk som $f(x) = 2x + 3$

Hver representasjon har sine styrker. Tekst er god for a forsta sammenhengen. Tabellen gir noyaktige verdier. Grafen gir oversikt. Formelen er kompakt og lar oss beregne hva som helst. A kunne **veksle** mellom dem er en av de viktigste ferdighetene i matematikk.`,
    },

    {
      id: '8-10-3-n-section1',
      type: 'text',
      content: `## Fra tekst til formel, tabell og graf

La oss starte med en tekstbeskrivelse og oversette til de andre representasjonene.

**Tekst:** «En svommepark tar 80 kr i inngangspenger og 20 kr per time.»

**Til formel:** La $x$ vaere antall timer og $f(x)$ vaere totalkostnaden:

$$f(x) = 20x + 80$$

**Til tabell:** Vi setter inn noen verdier:

| $x$ (timer) | $f(x)$ (kr) |
|:---:|:---:|
| $0$ | $80$ |
| $1$ | $100$ |
| $2$ | $120$ |
| $3$ | $140$ |
| $4$ | $160$ |
| $5$ | $180$ |

**Til graf:** Vi plotter punktene $(0, 80)$, $(1, 100)$, $(2, 120)$, osv. i et koordinatsystem og trekker en rett linje gjennom dem. Linjen starter i $(0, 80)$ og gar jevnt oppover med 20 kr per time.

Legg merke til:
- **Startpunktet** $(0, 80)$ forteller at det koster 80 kr selv om du er der i null timer (inngangspengene)
- **Stigningen** (20 kr per time) forteller hvor bratt linjen er
- Disse to egenskapene ser vi direkte i formelen: $f(x) = \\underbrace{20}_{\\text{stigning}} \\cdot x + \\underbrace{80}_{\\text{startverdi}}$`,
    },

    {
      id: '8-10-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-10-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa oversettelse mellom representasjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-10-3-n-quiz1-q0',
            task: '«Et treningssenter koster 300 kr i manedsavgift pluss 50 kr per trening.» Hvilken formel passer?',
            options: [
              { id: 'a', text: '$f(x) = 300x + 50$', isCorrect: false },
              { id: 'b', text: '$f(x) = 50x + 300$', isCorrect: true },
              { id: 'c', text: '$f(x) = 350x$', isCorrect: false },
              { id: 'd', text: '$f(x) = 50 + 300x$', isCorrect: false },
            ],
            solution: 'Manedsavgiften (300 kr) er fast og legges til uansett. Per trening koster det 50 kr, sa det variable leddet er $50x$. Totalt: $f(x) = 50x + 300$.',
          },
          {
            id: '8-10-3-n-quiz1-q1',
            task: 'I formelen $f(x) = 20x + 80$ for svommeparken, hva forteller tallet 80?',
            options: [
              { id: 'a', text: 'Hvor mange timer du kan vaere der', isCorrect: false },
              { id: 'b', text: 'Prisen per time', isCorrect: false },
              { id: 'c', text: 'Startkostnaden (inngangspenger)', isCorrect: true },
              { id: 'd', text: 'Totalkostnaden', isCorrect: false },
            ],
            solution: 'Tallet 80 er konstantleddet -- det du betaler uansett, ogsa nar $x = 0$. Det er inngangspengene.',
          },
          {
            id: '8-10-3-n-quiz1-q2',
            task: 'Hva forteller **stigningen** i en lineaer funksjon?',
            options: [
              { id: 'a', text: 'Startverdien til funksjonen', isCorrect: false },
              { id: 'b', text: 'Hvor mye $y$ oker for hver enhet $x$ oker', isCorrect: true },
              { id: 'c', text: 'Nullpunktet til funksjonen', isCorrect: false },
              { id: 'd', text: 'Den storste verdien til funksjonen', isCorrect: false },
            ],
            solution: 'Stigningen (koeffisienten foran $x$) forteller hvor mye utgangsverdien endres nar inngangsverdien oker med 1. I svommepark-eksempelet: 20 kr mer for hver ekstra time.',
          },
        ],
      },
    },

    {
      id: '8-10-3-n-section2',
      type: 'text',
      content: `## Fra tabell til formel

Noen ganger starter vi med en tabell og skal finne formelen. Her er trikset: se etter et **monster** i tallene.

**Eksempel 1:** Lineaer sammenheng

| $x$ | $y$ |
|:---:|:---:|
| $0$ | $5$ |
| $1$ | $8$ |
| $2$ | $11$ |
| $3$ | $14$ |
| $4$ | $17$ |

Vi ser at $y$ oker med 3 for hver gang $x$ oker med 1. Stigningen er altsaa 3. Nar $x = 0$ er $y = 5$ (startverdien). Derfor er formelen:

$$f(x) = 3x + 5$$

**Sjekk:** $f(4) = 3 \\cdot 4 + 5 = 17$. Stemmer!

**Eksempel 2:** Ikke-lineaer sammenheng

| $x$ | $y$ |
|:---:|:---:|
| $1$ | $1$ |
| $2$ | $4$ |
| $3$ | $9$ |
| $4$ | $16$ |
| $5$ | $25$ |

Her oker $y$ med forskjellige mengder: $3, 5, 7, 9, \\ldots$ -- det er ikke lineaert. Men vi ser at $y = x^2$! Formelen er $f(x) = x^2$.

**Tips for a finne formelen fra en tabell:**
- Regn ut **differansene** mellom utgangsverdiene. Lik differanse = lineaer funksjon
- Hvis differansene **oker jevnt**, kan det vaere en kvadratisk funksjon
- Se pa $x = 0$ for a finne startverdien (konstantleddet $b$)`,
    },

    {
      id: '8-10-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-10-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa a finne formler fra tabeller:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-10-3-n-quiz2-q0',
            task: 'Tabellen viser: $x = 0, 1, 2, 3$ og $y = 2, 5, 8, 11$. Hva er formelen?',
            options: [
              { id: 'a', text: '$f(x) = 2x + 3$', isCorrect: false },
              { id: 'b', text: '$f(x) = 3x + 2$', isCorrect: true },
              { id: 'c', text: '$f(x) = x + 2$', isCorrect: false },
              { id: 'd', text: '$f(x) = 5x$', isCorrect: false },
            ],
            solution: 'Differansene mellom $y$-verdiene: $5-2=3$, $8-5=3$, $11-8=3$. Stigningen er 3. Nar $x = 0$ er $y = 2$ (startverdien). Formel: $f(x) = 3x + 2$.',
          },
          {
            id: '8-10-3-n-quiz2-q1',
            task: 'Tabellen viser: $x = 1, 2, 3, 4$ og $y = 2, 6, 12, 20$. Er sammenhengen lineaer?',
            options: [
              { id: 'a', text: 'Ja, fordi tallene oker', isCorrect: false },
              { id: 'b', text: 'Nei, fordi differansene er ulike ($4, 6, 8$)', isCorrect: true },
              { id: 'c', text: 'Ja, fordi $y$ alltid er storre enn $x$', isCorrect: false },
              { id: 'd', text: 'Vi kan ikke avgjore det', isCorrect: false },
            ],
            solution: 'Differansene mellom $y$-verdiene: $6-2=4$, $12-6=6$, $20-12=8$. Differansene er **ulike** (4, 6, 8), sa sammenhengen er ikke lineaer. (Det er faktisk $f(x) = x^2 + x$.)',
          },
        ],
      },
    },

    {
      id: '8-10-3-n-section3',
      type: 'text',
      content: `## Fra graf til tabell og formel

Vi kan ogsa ga den andre veien: starte med en graf og lese av informasjon.

**Fra graf til tabell:** Velg noen $x$-verdier langs $x$-aksen. For hver $x$-verdi, finn punktet pa grafen og les av $y$-verdien. Skriv verdiene i en tabell.

**Fra graf til formel (lineaer):** For en rett linje trenger du to ting:
1. **Startverdien** $b$: les av der grafen krysser $y$-aksen ($x = 0$)
2. **Stigningen** $a$: se hvor mye $y$ oker nar $x$ oker med 1

Da er formelen $f(x) = ax + b$.

**Eksempel:** En rett linje gar gjennom $(0, 3)$ og $(2, 9)$.
- Startverdi: $b = 3$ (krysser $y$-aksen i $y = 3$)
- Stigning: $a = \\frac{9 - 3}{2 - 0} = \\frac{6}{2} = 3$
- Formel: $f(x) = 3x + 3$

**Sjekk:** $f(2) = 3 \\cdot 2 + 3 = 9$. Stemmer!

## Veksle mellom alle fire

Den virkelige kraften kommer nar du kan bevege deg fritt mellom alle fire representasjonene:

$$\\text{Tekst} \\longleftrightarrow \\text{Formel} \\longleftrightarrow \\text{Tabell} \\longleftrightarrow \\text{Graf}$$

For eksempel: du far en graf pa en prove. Forst leser du av en tabell. Fra tabellen finner du formelen. Og fra formelen kan du svare med ord pa hva sammenhengen betyr i praksis.`,
    },

    {
      id: '8-10-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-10-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa a veksle mellom representasjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-10-3-n-quiz3-q0',
            task: 'En rett linje gar gjennom $(0, 4)$ og $(3, 10)$. Hva er formelen?',
            options: [
              { id: 'a', text: '$f(x) = 3x + 4$', isCorrect: false },
              { id: 'b', text: '$f(x) = 2x + 4$', isCorrect: true },
              { id: 'c', text: '$f(x) = 4x + 2$', isCorrect: false },
              { id: 'd', text: '$f(x) = 10x + 4$', isCorrect: false },
            ],
            solution: 'Startverdi: $b = 4$ (fra punktet $(0, 4)$). Stigning: $a = \\frac{10 - 4}{3 - 0} = \\frac{6}{3} = 2$. Formel: $f(x) = 2x + 4$.',
          },
          {
            id: '8-10-3-n-quiz3-q1',
            task: 'Funksjonen $f(x) = 5x + 200$ beskriver en mobilabonnementskostnad der $x$ er antall GB data. Hva betyr tallet 200 i sammenhengen?',
            options: [
              { id: 'a', text: 'Prisen per GB', isCorrect: false },
              { id: 'b', text: 'Fastprisen (grunnprisen) for abonnementet', isCorrect: true },
              { id: 'c', text: 'Antall GB inkludert', isCorrect: false },
              { id: 'd', text: 'Totalkostnaden', isCorrect: false },
            ],
            solution: 'Tallet 200 er konstantleddet -- det du betaler uansett (nar $x = 0$). Det er altsaa grunnprisen for abonnementet. Tallet 5 er prisen per ekstra GB.',
          },
          {
            id: '8-10-3-n-quiz3-q2',
            task: 'Hvilken representasjon er best for a raskt se om funksjonen oker eller minker?',
            options: [
              { id: 'a', text: 'Tekst', isCorrect: false },
              { id: 'b', text: 'Tabell', isCorrect: false },
              { id: 'c', text: 'Graf', isCorrect: true },
              { id: 'd', text: 'Formel', isCorrect: false },
            ],
            solution: 'Grafen er best for a se om funksjonen oker eller minker -- du ser det med ett blikk pa om kurven gar oppover eller nedover. I en tabell ma du sammenligne tall, og i en formel ma du tolke koeffisienten.',
          },
        ],
      },
    },

    {
      id: '8-10-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Funksjoner kan representeres pa fire mater:

- **Tekst**: «Prisen er 80 kr pluss 20 kr per time» -- god for a forsta sammenhengen i praksis
- **Formel**: $f(x) = 20x + 80$ -- kompakt, presis, og lar oss beregne hvilken som helst verdi
- **Tabell**: En oversikt over utvalgte verdier -- gir noyaktige tallpar
- **Graf**: Et bilde i koordinatsystemet -- gir oversikt over hele oppforselen

Nokkelferdigheter:
- **Tekst til formel**: Identifiser startverdien ($b$) og endringen per enhet ($a$). Skriv $f(x) = ax + b$.
- **Tabell til formel**: Finn differansene mellom $y$-verdiene (stigningen) og les av $y$-verdien nar $x = 0$ (startverdien).
- **Graf til formel**: Les av der grafen krysser $y$-aksen ($b$) og beregn stigningen ($a$).
- **Formel til tabell/graf**: Sett inn $x$-verdier, regn ut $f(x)$, og plott punktene.

A kunne veksle fritt mellom alle fire representasjonene gir deg et kraftig verktoy for a forsta og lese matematiske sammenhenger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL11_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_10_1_NARRATIV,
  CHAPTER_8_10_2_NARRATIV,
  CHAPTER_8_10_3_NARRATIV,
];
