/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 2
 * Kapittel 2.1-2.4 (Likninger og ulikheter)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1 NARRATIV: Førstegradslikninger
// ============================================================================

export const CHAPTER_10_2_1_NARRATIV: TextbookChapter = {
  id: '10-2-1-narrativ',
  courseId: '10',
  chapterNumber: '2.1',
  title: 'Førstegradslikninger',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om å løse førstegradslikninger -- fra enkle til komplekse, med parenteser, brøker og praktiske problemer.',
  estimatedMinutes: 35,
  competenceGoals: ['loyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend'],
  linkedChapterId: '10-2-1',
  content: [
    {
      id: '10-2-1-n-intro',
      type: 'text',
      content: `## Jakten på det ukjente

Tenk deg at du har en vekt som er i perfekt balanse. På den ene siden ligger noen kjente vekter og en mystisk boks. På den andre siden ligger bare kjente vekter. Hvor tung er den mystiske boksen? For å finne svaret må du manipulere vekten uten å forstyrre balansen. Det er akkurat dette vi gjør når vi løser likninger!

En likning er et utsagn om at to ting er like. Venstre side er lik høyre side, og vår jobb er å finne ut hvilken verdi den ukjente variabelen har. I dette kapittelet starter vi med førstegradslikninger -- den mest grunnleggende typen, der $x$ bare opptrer i første potens.`,
    },
    {
      id: '10-2-1-n-section1',
      type: 'text',
      content: `## Grunnprinsippet: gjør det samme på begge sider

En **førstegradslikning** kan alltid skrives på formen $ax + b = 0$ der $a \\neq 0$. Løsningen er $x = -\\frac{b}{a}$.

Men i praksis ser likninger sjelden så ryddige ut. Vi bruker et enkelt prinsipp: **vi kan gjøre det samme på begge sider av likhetstegnet**. Legge til, trekke fra, gange, dele -- alt er lov, bare vi gjør det på begge sider.

La oss løse $3x + 7 = 22$. Vi vil isolere $x$, så vi trekker fra 7 på begge sider: $3x = 15$. Deretter deler vi på 3: $x = 5$.

Hva om $x$ er på begge sider? Ta $5x - 12 = 2x + 9$. Vi samler $x$-leddene på venstre side: $5x - 2x = 9 + 12$, som gir $3x = 21$, altså $x = 7$.

Her er noen til å øve på mentalt: $4x - 5 = 19$ gir $4x = 24$, altså $x = 6$. Og $7x + 3 = 2x + 28$ gir $5x = 25$, altså $x = 5$.

Strategien er alltid den samme: samle $x$-leddene på én side og tallene på den andre, og løs for $x$.`,
    },
    {
      id: '10-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på enkle førstegradslikninger:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-1-n-quiz1-q0',
            task: 'Løs likningen $4x - 5 = 19$.',
            options: [
              { id: 'a', text: '$x = 5$', isCorrect: false },
              { id: 'b', text: '$x = 6$', isCorrect: true },
              { id: 'c', text: '$x = 4$', isCorrect: false },
              { id: 'd', text: '$x = 7$', isCorrect: false },
            ],
            solution: '$4x - 5 = 19 \\Rightarrow 4x = 24 \\Rightarrow x = 6$.',
          },
          {
            id: '10-2-1-n-quiz1-q1',
            task: 'Løs likningen $3(x + 4) = 27$.',
            options: [
              { id: 'a', text: '$x = 9$', isCorrect: false },
              { id: 'b', text: '$x = 7$', isCorrect: false },
              { id: 'c', text: '$x = 5$', isCorrect: true },
              { id: 'd', text: '$x = 3$', isCorrect: false },
            ],
            solution: '$3(x + 4) = 27 \\Rightarrow 3x + 12 = 27 \\Rightarrow 3x = 15 \\Rightarrow x = 5$.',
          },
          {
            id: '10-2-1-n-quiz1-q2',
            task: 'Løs likningen $2(3x - 1) = 4(x + 2)$.',
            options: [
              { id: 'a', text: '$x = 5$', isCorrect: true },
              { id: 'b', text: '$x = 3$', isCorrect: false },
              { id: 'c', text: '$x = -5$', isCorrect: false },
              { id: 'd', text: '$x = 2$', isCorrect: false },
            ],
            solution: '$6x - 2 = 4x + 8 \\Rightarrow 2x = 10 \\Rightarrow x = 5$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-1-n-section2',
      type: 'text',
      content: `## Likninger med brøk -- fjern brøkene!

Brøker i likninger kan se skremmende ut, men det finnes et triks: **gang hele likningen med fellesnevneren**. Da forsvinner alle brøkene, og du sitter igjen med en vanlig likning.

Ta $\\frac{x}{3} + 2 = 5$. Trekk fra 2: $\\frac{x}{3} = 3$. Gang med 3: $x = 9$.

Et vanskeligere eksempel: $\\frac{2x-1}{4} = \\frac{x+3}{2}$. Fellesnevner er 4, så vi ganger hele likningen med 4: $2x - 1 = 2(x + 3)$. Løser opp: $2x - 1 = 2x + 6$, som gir $-1 = 6$. Det er en selvmotsigelse! Denne likningen har **ingen løsning**.

Ja, det kan faktisk skje -- noen likninger har ingen løsning. Det betyr at det ikke finnes noen verdi av $x$ som gjør likningen sann.

La oss ta et par til som har løsning: $\\frac{x}{4} - 3 = 2$ gir $\\frac{x}{4} = 5$, altså $x = 20$. Og $\\frac{x-2}{3} = \\frac{x+4}{5}$ -- gang med fellesnevner 15: $5(x-2) = 3(x+4)$, som gir $5x - 10 = 3x + 12$, altså $2x = 22$ og $x = 11$.

Med flere brøkledd kan vi samle dem: $\\frac{3x}{2} - \\frac{x}{4} = 5$. Gang med fellesnevner 4: $6x - x = 20$, altså $5x = 20$ og $x = 4$.`,
    },
    {
      id: '10-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på likninger med brøk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-1-n-quiz2-q0',
            task: 'Løs likningen $\\frac{2x + 1}{3} = 5$.',
            options: [
              { id: 'a', text: '$x = 7$', isCorrect: true },
              { id: 'b', text: '$x = 8$', isCorrect: false },
              { id: 'c', text: '$x = 5$', isCorrect: false },
              { id: 'd', text: '$x = \\frac{14}{3}$', isCorrect: false },
            ],
            solution: 'Gang med 3: $2x + 1 = 15 \\Rightarrow 2x = 14 \\Rightarrow x = 7$.',
          },
          {
            id: '10-2-1-n-quiz2-q1',
            task: 'Løs likningen $\\frac{x-2}{3} = \\frac{x+4}{5}$.',
            options: [
              { id: 'a', text: '$x = 9$', isCorrect: false },
              { id: 'b', text: '$x = 11$', isCorrect: true },
              { id: 'c', text: '$x = 7$', isCorrect: false },
              { id: 'd', text: '$x = 13$', isCorrect: false },
            ],
            solution: 'Gang med fellesnevner 15: $5(x-2) = 3(x+4) \\Rightarrow 5x - 10 = 3x + 12 \\Rightarrow 2x = 22 \\Rightarrow x = 11$.',
          },
          {
            id: '10-2-1-n-quiz2-q2',
            task: 'Hva er fellesnevnertrikset for likninger med brøk?',
            options: [
              { id: 'a', text: 'Del alle ledd med nevneren', isCorrect: false },
              { id: 'b', text: 'Flytt alle brøkene til én side', isCorrect: false },
              { id: 'c', text: 'Gang hele likningen med fellesnevneren', isCorrect: true },
              { id: 'd', text: 'Erstatt brøkene med desimaltall', isCorrect: false },
            ],
            solution: 'Når vi ganger hele likningen med fellesnevneren, forsvinner alle brøkene. Da sitter vi igjen med en vanlig likning som er enklere å løse.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-1-n-section3',
      type: 'text',
      content: `## Likninger med parenteser -- og spesielle tilfeller

Når likninger har parenteser, må vi først gange ut (løse opp parentesene) og deretter samle leddene.

La oss ta $5(x - 2) + 3(x + 4) = 34$. Ganger ut: $5x - 10 + 3x + 12 = 34$. Samler: $8x + 2 = 34$, som gir $8x = 32$ og $x = 4$.

Men noen ganger får vi overraskelser. Ta $3(2x - 4) - 2(x + 1) = 4x + 6$. Ganger ut: $6x - 12 - 2x - 2 = 4x + 6$. Samler venstre side: $4x - 14 = 4x + 6$. Trekker fra $4x$: $-14 = 6$. Det er umulig! Denne likningen har **ingen løsning**.

Og en til: $4(2x - 3) = 2(4x + 1) - 14$. Ganger ut: $8x - 12 = 8x + 2 - 14$, altså $8x - 12 = 8x - 12$. Det er alltid sant! Denne likningen har **uendelig mange løsninger** -- alle verdier av $x$ er løsninger.

Så det finnes tre muligheter for en førstegradslikning: nøyaktig én løsning (det vanligste), ingen løsning (selvmotsigelse), eller uendelig mange løsninger (identitet).`,
    },
    {
      id: '10-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på likninger med parenteser:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-1-n-quiz3-q0',
            task: 'Løs $2(x + 5) - 3(x - 2) = 20$.',
            options: [
              { id: 'a', text: '$x = 4$', isCorrect: false },
              { id: 'b', text: '$x = -4$', isCorrect: true },
              { id: 'c', text: '$x = 0$', isCorrect: false },
              { id: 'd', text: '$x = -2$', isCorrect: false },
            ],
            solution: '$2x + 10 - 3x + 6 = 20 \\Rightarrow -x + 16 = 20 \\Rightarrow -x = 4 \\Rightarrow x = -4$.',
          },
          {
            id: '10-2-1-n-quiz3-q1',
            task: 'Hva er løsningen av $4(2x - 3) = 2(4x + 1) - 14$?',
            options: [
              { id: 'a', text: '$x = 0$', isCorrect: false },
              { id: 'b', text: '$x = 1$', isCorrect: false },
              { id: 'c', text: 'Alle $x$ er løsninger', isCorrect: true },
              { id: 'd', text: 'Ingen løsning', isCorrect: false },
            ],
            solution: '$8x - 12 = 8x + 2 - 14 = 8x - 12$. Begge sider er identiske, så alle verdier av $x$ er løsninger.',
          },
          {
            id: '10-2-1-n-quiz3-q2',
            task: 'Løs $\\frac{2(x-1)}{3} + \\frac{x+2}{2} = 4$.',
            options: [
              { id: 'a', text: '$x = 3$', isCorrect: false },
              { id: 'b', text: '$x = 4$', isCorrect: false },
              { id: 'c', text: '$x = \\frac{22}{7}$', isCorrect: true },
              { id: 'd', text: '$x = 2$', isCorrect: false },
            ],
            solution: 'Gang med fellesnevner 6: $4(x-1) + 3(x+2) = 24 \\Rightarrow 4x - 4 + 3x + 6 = 24 \\Rightarrow 7x + 2 = 24 \\Rightarrow 7x = 22 \\Rightarrow x = \\frac{22}{7}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-1-n-section4',
      type: 'text',
      content: `## Praktiske problemer -- sette opp likninger

Den virkelige kraften i likninger viser seg når vi bruker dem til å løse problemer fra virkeligheten. Nøkkelen er å **oversette problemet til en likning**.

**Problem 1:** En rektangulær hage har omkrets 56 meter. Lengden er 4 meter mer enn bredden. Finn dimensjonene.

La bredden være $x$ meter. Da er lengden $(x + 4)$ meter. Omkretsen er $2x + 2(x + 4) = 56$. Løser: $2x + 2x + 8 = 56$, altså $4x = 48$ og $x = 12$. Bredden er 12 m og lengden er 16 m.

**Problem 2:** Summen av tre påfølgende tall er 72. Finn tallene.

La det første tallet være $x$. De tre tallene er $x$, $x+1$ og $x+2$. Likning: $x + (x+1) + (x+2) = 72$, som gir $3x + 3 = 72$, altså $3x = 69$ og $x = 23$. Tallene er 23, 24 og 25.

**Problem 3:** Per er 3 ganger så gammel som Kari. Om 10 år vil Per være dobbelt så gammel som Kari. Hvor gamle er de nå?

La Kari være $x$ år. Per er $3x$ år. Om 10 år: $3x + 10 = 2(x + 10)$. Løser: $3x + 10 = 2x + 20$, altså $x = 10$. Kari er 10 år og Per er 30 år.

Strategien er alltid: definer den ukjente med en variabel, sett opp en likning, og løs.`,
    },
    {
      id: '10-2-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-2-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på praktiske problemer:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-1-n-quiz4-q0',
            task: 'Summen av tre påfølgende tall er 72. Hva er det minste av de tre tallene?',
            options: [
              { id: 'a', text: '$22$', isCorrect: false },
              { id: 'b', text: '$23$', isCorrect: true },
              { id: 'c', text: '$24$', isCorrect: false },
              { id: 'd', text: '$20$', isCorrect: false },
            ],
            solution: 'La $x$ være det minste. $x + (x+1) + (x+2) = 72 \\Rightarrow 3x + 3 = 72 \\Rightarrow x = 23$.',
          },
          {
            id: '10-2-1-n-quiz4-q1',
            task: 'En trekant har omkrets 45 cm. Den ene siden er dobbelt så lang som den korteste, og den tredje er 5 cm kortere enn den lengste. Hva er den korteste siden?',
            options: [
              { id: 'a', text: '8 cm', isCorrect: false },
              { id: 'b', text: '10 cm', isCorrect: true },
              { id: 'c', text: '12 cm', isCorrect: false },
              { id: 'd', text: '9 cm', isCorrect: false },
            ],
            solution: 'La korteste side være $x$. Sidene er $x$, $2x$ og $2x - 5$. $x + 2x + (2x-5) = 45 \\Rightarrow 5x - 5 = 45 \\Rightarrow 5x = 50 \\Rightarrow x = 10$.',
          },
          {
            id: '10-2-1-n-quiz4-q2',
            task: 'Per er 3 ganger så gammel som Kari. Om 10 år vil Per være dobbelt så gammel. Hvor gammel er Per nå?',
            options: [
              { id: 'a', text: '20 år', isCorrect: false },
              { id: 'b', text: '24 år', isCorrect: false },
              { id: 'c', text: '30 år', isCorrect: true },
              { id: 'd', text: '36 år', isCorrect: false },
            ],
            solution: 'La Kari være $x$ år. Per er $3x$. Om 10 år: $3x + 10 = 2(x + 10) \\Rightarrow x = 10$. Per er $3 \\cdot 10 = 30$ år.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Førstegradslikninger** er likninger der $x$ opptrer i første potens. Vi løser dem ved å gjøre det samme på begge sider av likhetstegnet, med mål om å isolere $x$.

For **likninger med brøk** ganger vi med fellesnevneren for å fjerne brøkene. For **likninger med parenteser** løser vi opp parentesene først.

En likning kan ha **én løsning** (det vanlige), **ingen løsning** (selvmotsigelse som $-1 = 6$), eller **uendelig mange løsninger** (identitet som $0 = 0$).

For **praktiske problemer** definerer vi den ukjente med en variabel, oversetter problemet til en likning, og løser.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2 NARRATIV: Andregradslikninger
// ============================================================================

export const CHAPTER_10_2_2_NARRATIV: TextbookChapter = {
  id: '10-2-2-narrativ',
  courseId: '10',
  chapterNumber: '2.2',
  title: 'Andregradslikninger',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om andregradslikninger, faktorisering, abc-formelen og hvordan parabeler møter x-aksen.',
  estimatedMinutes: 40,
  competenceGoals: ['loyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend'],
  linkedChapterId: '10-2-2',
  content: [
    {
      id: '10-2-2-n-intro',
      type: 'text',
      content: `## Fra linjer til parabler

Førstegradslikninger ga oss rette linjer og én løsning. Nå tar vi steget opp til **andregradslikninger**, der den ukjente opptrer i andre potens: $x^2$. Disse likningene beskriver parabler, og de kan ha to løsninger, én løsning, eller ingen løsning i det hele tatt!

Tenk deg at du kaster en ball i luften. Banen ballen følger er en parabel, og spørsmålet "når treffer ballen bakken?" er egentlig en andregradslikning. La oss lære å løse dem.`,
    },
    {
      id: '10-2-2-n-section1',
      type: 'text',
      content: `## Løsning ved faktorisering

En **andregradslikning** har formen $ax^2 + bx + c = 0$ der $a \\neq 0$. Den enkleste måten å løse den på er faktorisering -- det vi lærte i forrige kapittel.

Ta $x^2 - 5x + 6 = 0$. Vi faktoriserer: $(x - 2)(x - 3) = 0$. Nå bruker vi **nullpunktregelen**: et produkt er null hvis og bare hvis minst én av faktorene er null. Altså er $x - 2 = 0$ eller $x - 3 = 0$, som gir $x = 2$ eller $x = 3$. To løsninger!

For $x^2 - 9 = 0$ bruker vi konjugatsetningen: $(x + 3)(x - 3) = 0$, som gir $x = -3$ eller $x = 3$.

For $x^2 + 6x + 9 = 0$ bruker vi kvadratsetningen: $(x + 3)^2 = 0$, som gir $x = -3$. Bare én løsning -- en **dobbeltrot**. Geometrisk betyr dette at parabelen bare tangerer $x$-aksen.

La oss prøve $x^2 + 7x + 12 = 0$: tallene 3 og 4 ganget gir 12 og summert gir 7, så $(x + 3)(x + 4) = 0$, og $x = -3$ eller $x = -4$.`,
    },
    {
      id: '10-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering av andregradslikninger:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-2-n-quiz1-q0',
            task: 'Løs $x^2 - x - 20 = 0$.',
            options: [
              { id: 'a', text: '$x = 5$ eller $x = -4$', isCorrect: true },
              { id: 'b', text: '$x = -5$ eller $x = 4$', isCorrect: false },
              { id: 'c', text: '$x = 10$ eller $x = -2$', isCorrect: false },
              { id: 'd', text: '$x = 4$ eller $x = -5$', isCorrect: false },
            ],
            solution: 'Vi trenger to tall som ganget gir $-20$ og summert gir $-1$. Det er $-5$ og $4$: $(x - 5)(x + 4) = 0$, altså $x = 5$ eller $x = -4$.',
          },
          {
            id: '10-2-2-n-quiz1-q1',
            task: 'Løs $x^2 - 16 = 0$.',
            options: [
              { id: 'a', text: '$x = 16$', isCorrect: false },
              { id: 'b', text: '$x = 4$ eller $x = -4$', isCorrect: true },
              { id: 'c', text: '$x = 8$ eller $x = -2$', isCorrect: false },
              { id: 'd', text: 'Ingen løsning', isCorrect: false },
            ],
            solution: '$x^2 - 16 = (x+4)(x-4) = 0$, altså $x = 4$ eller $x = -4$.',
          },
          {
            id: '10-2-2-n-quiz1-q2',
            task: 'Løs $x^2 + 6x + 9 = 0$.',
            options: [
              { id: 'a', text: '$x = 3$ eller $x = -3$', isCorrect: false },
              { id: 'b', text: '$x = -3$', isCorrect: true },
              { id: 'c', text: '$x = 3$', isCorrect: false },
              { id: 'd', text: 'Ingen løsning', isCorrect: false },
            ],
            solution: '$x^2 + 6x + 9 = (x + 3)^2 = 0$. Dobbeltrot: $x = -3$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-2-n-section2',
      type: 'text',
      content: `## abc-formelen -- universalverktøyet

Ikke alle andregradslikninger lar seg faktorisere like enkelt. Heldigvis har vi et universalverktøy: **abc-formelen** (også kalt løsningsformelen for andregradslikninger):

$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

Her er $a$, $b$ og $c$ koeffisientene i $ax^2 + bx + c = 0$. Det lille symbolet $\\pm$ betyr "pluss eller minus", som gir oss potensielt to løsninger.

Uttrykket under rottegnet, $D = b^2 - 4ac$, kalles **diskriminanten**, og den forteller oss alt:
- $D > 0$: To ulike løsninger
- $D = 0$: Én løsning (dobbeltrot)
- $D < 0$: Ingen reelle løsninger

La oss ta $2x^2 - 5x - 3 = 0$. Her er $a = 2$, $b = -5$, $c = -3$.

$$x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4 \\cdot 2 \\cdot (-3)}}{2 \\cdot 2} = \\frac{5 \\pm \\sqrt{25 + 24}}{4} = \\frac{5 \\pm \\sqrt{49}}{4} = \\frac{5 \\pm 7}{4}$$

Altså $x_1 = \\frac{5 + 7}{4} = 3$ eller $x_2 = \\frac{5 - 7}{4} = -\\frac{1}{2}$.

For $x^2 - 6x + 9 = 0$: $D = 36 - 36 = 0$, så $x = \\frac{6}{2} = 3$ (dobbeltrot).`,
    },
    {
      id: '10-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på abc-formelen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-2-n-quiz2-q0',
            task: 'Løs $x^2 + 4x - 5 = 0$ med abc-formelen.',
            options: [
              { id: 'a', text: '$x = 1$ eller $x = -5$', isCorrect: true },
              { id: 'b', text: '$x = -1$ eller $x = 5$', isCorrect: false },
              { id: 'c', text: '$x = 2$ eller $x = -2{,}5$', isCorrect: false },
              { id: 'd', text: '$x = 5$', isCorrect: false },
            ],
            solution: '$x = \\frac{-4 \\pm \\sqrt{16 + 20}}{2} = \\frac{-4 \\pm \\sqrt{36}}{2} = \\frac{-4 \\pm 6}{2}$. Gir $x = 1$ eller $x = -5$.',
          },
          {
            id: '10-2-2-n-quiz2-q1',
            task: 'Hva forteller diskriminanten $D = b^2 - 4ac$ oss?',
            options: [
              { id: 'a', text: 'Verdien av $x$', isCorrect: false },
              { id: 'b', text: 'Antall løsninger likningen har', isCorrect: true },
              { id: 'c', text: 'Toppunktet til parabelen', isCorrect: false },
              { id: 'd', text: 'Koeffisienten foran $x$', isCorrect: false },
            ],
            solution: 'Diskriminanten $D = b^2 - 4ac$ forteller oss antall løsninger: $D > 0$ gir to løsninger, $D = 0$ gir én løsning (dobbeltrot), og $D < 0$ betyr ingen reelle løsninger.',
          },
          {
            id: '10-2-2-n-quiz2-q2',
            task: 'Løs $2x^2 + 3x - 2 = 0$.',
            options: [
              { id: 'a', text: '$x = -\\frac{1}{2}$ eller $x = 2$', isCorrect: false },
              { id: 'b', text: '$x = 1$ eller $x = -1$', isCorrect: false },
              { id: 'c', text: '$x = \\frac{1}{2}$ eller $x = -2$', isCorrect: true },
              { id: 'd', text: '$x = 2$ eller $x = -\\frac{1}{2}$', isCorrect: false },
            ],
            solution: '$x = \\frac{-3 \\pm \\sqrt{9 + 16}}{4} = \\frac{-3 \\pm 5}{4}$. Gir $x = \\frac{2}{4} = \\frac{1}{2}$ eller $x = \\frac{-8}{4} = -2$.',
          },
          {
            id: '10-2-2-n-quiz2-q3',
            task: 'Løs $3x^2 - x - 4 = 0$.',
            options: [
              { id: 'a', text: '$x = -\\frac{4}{3}$ eller $x = 1$', isCorrect: false },
              { id: 'b', text: '$x = \\frac{4}{3}$ eller $x = -1$', isCorrect: true },
              { id: 'c', text: '$x = \\frac{1}{3}$ eller $x = -4$', isCorrect: false },
              { id: 'd', text: '$x = 4$ eller $x = -\\frac{1}{3}$', isCorrect: false },
            ],
            solution: '$x = \\frac{1 \\pm \\sqrt{1 + 48}}{6} = \\frac{1 \\pm 7}{6}$. Gir $x = \\frac{8}{6} = \\frac{4}{3}$ eller $x = \\frac{-6}{6} = -1$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-2-n-section3',
      type: 'text',
      content: `## Nullpunkter til andregradsfunksjoner

Å finne nullpunktene til en funksjon $f(x) = ax^2 + bx + c$ betyr å finne hvor grafen krysser $x$-aksen. Det er punktene der $f(x) = 0$ -- altså å løse en andregradslikning!

Ta $f(x) = x^2 - 2x - 8$. Vi setter $f(x) = 0$: $x^2 - 2x - 8 = 0$. Faktoriserer: $(x - 4)(x + 2) = 0$. Nullpunktene er $(-2, 0)$ og $(4, 0)$.

For $g(x) = x^2 + 2x - 15$: $(x+5)(x-3) = 0$, nullpunkter $(-5, 0)$ og $(3, 0)$.

For $h(x) = 2x^2 - 8x$: $2x(x-4) = 0$, nullpunkter $(0, 0)$ og $(4, 0)$. Her har vi faktorisert ut $2x$ som felles faktor.

For $p(x) = x^2 - 6x + 9$: $(x-3)^2 = 0$, kun ett nullpunkt $(3, 0)$. Parabelen tangerer $x$-aksen uten å krysse den.

Antall nullpunkter henger direkte sammen med diskriminanten: to nullpunkter når $D > 0$, ett nullpunkt når $D = 0$, og ingen nullpunkter når $D < 0$ (parabelen ligger helt over eller helt under $x$-aksen).`,
    },
    {
      id: '10-2-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-2-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på nullpunkter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-2-n-quiz3-q0',
            task: 'Finn nullpunktene til $f(x) = x^2 - 4x - 12$.',
            options: [
              { id: 'a', text: '$x = -2$ og $x = 6$', isCorrect: true },
              { id: 'b', text: '$x = 2$ og $x = -6$', isCorrect: false },
              { id: 'c', text: '$x = 3$ og $x = -4$', isCorrect: false },
              { id: 'd', text: '$x = 4$ og $x = -3$', isCorrect: false },
            ],
            solution: '$(x-6)(x+2) = 0 \\Rightarrow x = 6$ eller $x = -2$.',
          },
          {
            id: '10-2-2-n-quiz3-q1',
            task: 'Finn nullpunktene til $h(x) = 2x^2 - 8x$.',
            options: [
              { id: 'a', text: '$x = 2$ og $x = 4$', isCorrect: false },
              { id: 'b', text: '$x = -4$ og $x = 0$', isCorrect: false },
              { id: 'c', text: '$x = 0$ og $x = 4$', isCorrect: true },
              { id: 'd', text: '$x = 0$ og $x = 8$', isCorrect: false },
            ],
            solution: '$2x^2 - 8x = 2x(x-4) = 0 \\Rightarrow x = 0$ eller $x = 4$.',
          },
          {
            id: '10-2-2-n-quiz3-q2',
            task: 'Hva betyr det geometrisk at en andregradslikning har dobbeltrot?',
            options: [
              { id: 'a', text: 'Parabelen krysser $x$-aksen to ganger i samme punkt', isCorrect: false },
              { id: 'b', text: 'Parabelen tangerer $x$-aksen (berører uten å krysse)', isCorrect: true },
              { id: 'c', text: 'Parabelen ligger over $x$-aksen', isCorrect: false },
              { id: 'd', text: 'Parabelen har to symmetriakser', isCorrect: false },
            ],
            solution: 'Dobbeltrot betyr at parabelen akkurat tangerer $x$-aksen i ett punkt. Den berører aksen uten å krysse den.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-2-n-section4',
      type: 'text',
      content: `## Praktiske problemer med andregradslikninger

Mange virkelige problemer fører til andregradslikninger -- spesielt problemer som involverer areal, avstand eller bevegelse.

**Problem 1:** Et rektangel har areal $48 \\text{ cm}^2$. Lengden er 2 cm mer enn bredden. Finn sidene.

La bredden være $x$ cm. Lengden er $(x + 2)$ cm. Areal: $x(x + 2) = 48$, som gir $x^2 + 2x - 48 = 0$. Faktoriserer: $(x + 8)(x - 6) = 0$. Siden bredden må være positiv: $x = 6$. Bredden er 6 cm og lengden er 8 cm.

**Problem 2:** Produktet av to påfølgende positive tall er 72. Finn tallene.

La det minste tallet være $x$. Da er $x(x+1) = 72$, altså $x^2 + x - 72 = 0$. Faktoriserer: $(x+9)(x-8) = 0$. Siden tallene er positive: $x = 8$. Tallene er 8 og 9.

**Problem 3:** En rettvinklet trekant har kateter der den ene er 7 cm lengre enn den andre. Hypotenusen er 13 cm. Finn katetene.

La korteste katet være $x$. Pytagoras: $x^2 + (x+7)^2 = 13^2$. Utvider: $x^2 + x^2 + 14x + 49 = 169$, som gir $2x^2 + 14x - 120 = 0$, altså $x^2 + 7x - 60 = 0$. Faktoriserer: $(x+12)(x-5) = 0$. Siden kateten er positiv: $x = 5$. Katetene er 5 cm og 12 cm.`,
    },
    {
      id: '10-2-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-2-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på praktiske andregradslikninger:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-2-n-quiz4-q0',
            task: 'Produktet av to påfølgende positive tall er 72. Hvilke tall er det?',
            options: [
              { id: 'a', text: '6 og 12', isCorrect: false },
              { id: 'b', text: '8 og 9', isCorrect: true },
              { id: 'c', text: '7 og 10', isCorrect: false },
              { id: 'd', text: '9 og 8', isCorrect: false },
            ],
            solution: '$x(x+1) = 72 \\Rightarrow x^2 + x - 72 = 0 \\Rightarrow (x+9)(x-8) = 0$. $x = 8$, tallene er 8 og 9.',
          },
          {
            id: '10-2-2-n-quiz4-q1',
            task: 'En rettvinklet trekant har kateter der den ene er 7 cm lengre enn den andre, og hypotenusen er 13 cm. Finn den korteste kateten.',
            options: [
              { id: 'a', text: '4 cm', isCorrect: false },
              { id: 'b', text: '6 cm', isCorrect: false },
              { id: 'c', text: '5 cm', isCorrect: true },
              { id: 'd', text: '3 cm', isCorrect: false },
            ],
            solution: '$x^2 + (x+7)^2 = 169 \\Rightarrow 2x^2 + 14x - 120 = 0 \\Rightarrow x = 5$. Katetene er 5 cm og 12 cm.',
          },
          {
            id: '10-2-2-n-quiz4-q2',
            task: 'Et kvadratisk område utvides med 3 m på hver side. Nytt areal er 121 m$^2$. Hva var opprinnelig sidelengde?',
            options: [
              { id: 'a', text: '8 m', isCorrect: true },
              { id: 'b', text: '7 m', isCorrect: false },
              { id: 'c', text: '10 m', isCorrect: false },
              { id: 'd', text: '11 m', isCorrect: false },
            ],
            solution: '$(x+3)^2 = 121 \\Rightarrow x + 3 = 11 \\Rightarrow x = 8$ m.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Andregradslikninger** har formen $ax^2 + bx + c = 0$ og kan løses ved **faktorisering** eller med **abc-formelen**: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.

**Diskriminanten** $D = b^2 - 4ac$ avgjør antall løsninger: to ($D > 0$), én dobbeltrot ($D = 0$), eller ingen ($D < 0$).

**Nullpunkter** til $f(x) = ax^2 + bx + c$ finnes ved å sette $f(x) = 0$ og løse andregradslikningen.

Mange **praktiske problemer** med areal, avstand og bevegelse fører til andregradslikninger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3 NARRATIV: Likningssett
// ============================================================================

export const CHAPTER_10_2_3_NARRATIV: TextbookChapter = {
  id: '10-2-3-narrativ',
  courseId: '10',
  chapterNumber: '2.3',
  title: 'Likningssett',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om å løse to ukjente samtidig -- med innsettingsmetoden, addisjonsmetoden og praktiske problemer.',
  estimatedMinutes: 40,
  competenceGoals: ['loyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend'],
  linkedChapterId: '10-2-3',
  content: [
    {
      id: '10-2-3-n-intro',
      type: 'text',
      content: `## To ukjente, to likninger

Tenk deg at du er på kino og kjøper billetter for en gruppe. Du vet at det er 24 personer totalt, og at regningen ble 1800 kroner. Voksenbilletter koster 100 kr og barnebilletter 50 kr. Hvor mange voksne og hvor mange barn var det?

Her har du to ukjente størrelser (antall voksne og antall barn) og to opplysninger. For å finne begge trenger du to likninger -- et **likningssett**. I dette kapittelet lærer vi to kraftige metoder for å løse slike systemer.`,
    },
    {
      id: '10-2-3-n-section1',
      type: 'text',
      content: `## Hva er et likningssett?

Et **likningssett** med to ukjente har den generelle formen:

$$\\begin{cases} ax + by = e \\\\ cx + dy = f \\end{cases}$$

Løsningen er verdiene for $x$ og $y$ som tilfredsstiller **begge** likningene samtidig. Grafisk representerer hver likning en rett linje, og løsningen er **skjæringspunktet** mellom de to linjene.

**Innsettingsmetoden** er den første metoden vi skal lære. Ideen er enkel: løs én likning for én variabel, og sett uttrykket inn i den andre likningen.

Ta likningssettet $y = 2x + 1$ og $3x + y = 11$. Første likning gir oss allerede $y$ uttrykt ved $x$. Vi setter dette inn i andre likning: $3x + (2x + 1) = 11$, som gir $5x + 1 = 11$, altså $5x = 10$ og $x = 2$. Finner $y$: $y = 2 \\cdot 2 + 1 = 5$.

Løsningen er $(x, y) = (2, 5)$. Vi kan sjekke: $3 \\cdot 2 + 5 = 11$. Stemmer!

Et annet eksempel: $y = x + 3$ og $2x + y = 12$. Sett inn: $2x + (x + 3) = 12$, altså $3x = 9$ og $x = 3$. Da er $y = 6$. Løsning: $(3, 6)$.`,
    },
    {
      id: '10-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på innsettingsmetoden:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-3-n-quiz1-q0',
            task: 'Løs likningssettet: $x = 3y - 2$ og $2x + y = 10$.',
            options: [
              { id: 'a', text: '$(4, 2)$', isCorrect: true },
              { id: 'b', text: '$(2, 4)$', isCorrect: false },
              { id: 'c', text: '$(3, 2)$', isCorrect: false },
              { id: 'd', text: '$(5, 1)$', isCorrect: false },
            ],
            solution: 'Sett inn $x = 3y - 2$ i andre likning: $2(3y-2) + y = 10 \\Rightarrow 6y - 4 + y = 10 \\Rightarrow 7y = 14 \\Rightarrow y = 2$, $x = 4$.',
          },
          {
            id: '10-2-3-n-quiz1-q1',
            task: 'Løs: $y = 2x - 5$ og $3x - y = 8$.',
            options: [
              { id: 'a', text: '$(1, 3)$', isCorrect: false },
              { id: 'b', text: '$(3, 1)$', isCorrect: true },
              { id: 'c', text: '$(4, 3)$', isCorrect: false },
              { id: 'd', text: '$(2, -1)$', isCorrect: false },
            ],
            solution: 'Sett inn: $3x - (2x - 5) = 8 \\Rightarrow x + 5 = 8 \\Rightarrow x = 3$, $y = 1$.',
          },
          {
            id: '10-2-3-n-quiz1-q2',
            task: 'Hva er innsettingsmetoden?',
            options: [
              { id: 'a', text: 'Å legge sammen de to likningene', isCorrect: false },
              { id: 'b', text: 'Å løse én likning for én variabel og sette uttrykket inn i den andre', isCorrect: true },
              { id: 'c', text: 'Å tegne grafene og finne skjæringspunktet', isCorrect: false },
              { id: 'd', text: 'Å gange likningene med hverandre', isCorrect: false },
            ],
            solution: 'Innsettingsmetoden går ut på å løse én likning for én variabel (f.eks. $y = ...$) og sette dette uttrykket inn i den andre likningen.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-3-n-section2',
      type: 'text',
      content: `## Addisjonsmetoden -- eliminér en variabel

**Addisjonsmetoden** (også kalt eliminasjonsmetoden) går ut på å legge sammen eller trekke fra likningene slik at én variabel forsvinner.

Ta $2x + 3y = 13$ og $4x - 3y = 5$. Legg merke til at $y$-leddene er $+3y$ og $-3y$. Legger vi likningene sammen, elimineres $y$:

$(2x + 3y) + (4x - 3y) = 13 + 5$, som gir $6x = 18$, altså $x = 3$.

Setter inn i første likning: $2 \\cdot 3 + 3y = 13$, altså $3y = 7$ og $y = \\frac{7}{3}$.

Et enklere eksempel: $x + y = 10$ og $x - y = 4$. Legger sammen: $2x = 14$, altså $x = 7$ og $y = 3$.

Trekker vi fra: $2y = 6$, altså $y = 3$. Samme svar begge veier!

For $4x + 3y = 11$ og $2x + 3y = 7$: her er $y$-koeffisientene like, så vi trekker den ene fra den andre: $(4x + 3y) - (2x + 3y) = 11 - 7$, som gir $2x = 4$, altså $x = 2$ og $y = 1$.`,
    },
    {
      id: '10-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på addisjonsmetoden:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-3-n-quiz2-q0',
            task: 'Løs: $x + y = 10$ og $x - y = 4$.',
            options: [
              { id: 'a', text: '$(7, 3)$', isCorrect: true },
              { id: 'b', text: '$(3, 7)$', isCorrect: false },
              { id: 'c', text: '$(5, 5)$', isCorrect: false },
              { id: 'd', text: '$(8, 2)$', isCorrect: false },
            ],
            solution: 'Legger sammen: $2x = 14 \\Rightarrow x = 7$. Da er $y = 10 - 7 = 3$.',
          },
          {
            id: '10-2-3-n-quiz2-q1',
            task: 'Løs: $3x + 2y = 12$ og $3x - 2y = 0$.',
            options: [
              { id: 'a', text: '$(2, 3)$', isCorrect: true },
              { id: 'b', text: '$(3, 2)$', isCorrect: false },
              { id: 'c', text: '$(4, 0)$', isCorrect: false },
              { id: 'd', text: '$(1, 4)$', isCorrect: false },
            ],
            solution: 'Legger sammen: $6x = 12 \\Rightarrow x = 2$. Setter inn: $6 + 2y = 12 \\Rightarrow y = 3$.',
          },
          {
            id: '10-2-3-n-quiz2-q2',
            task: 'Løs: $2x + 5y = 21$ og $3x - 5y = 4$.',
            options: [
              { id: 'a', text: '$(3, 3)$', isCorrect: false },
              { id: 'b', text: '$(5, \\frac{11}{5})$', isCorrect: true },
              { id: 'c', text: '$(4, \\frac{13}{5})$', isCorrect: false },
              { id: 'd', text: '$(6, \\frac{9}{5})$', isCorrect: false },
            ],
            solution: 'Legger sammen: $5x = 25 \\Rightarrow x = 5$. Setter inn: $10 + 5y = 21 \\Rightarrow y = \\frac{11}{5}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-3-n-section3',
      type: 'text',
      content: `## Justere koeffisienter -- når det ikke passer direkte

Hva gjør vi når ingen koeffisienter matcher? Da **justerer** vi ved å gange likningene med passende tall!

Ta $2x + 3y = 8$ og $5x + 2y = 9$. Ingen koeffisienter er like eller motsatte. Men vi kan gjøre dem like! Gang første likning med 2 og andre med 3:

$$\\begin{cases} 4x + 6y = 16 \\\\ 15x + 6y = 27 \\end{cases}$$

Nå har begge $6y$. Trekker fra: $(15x + 6y) - (4x + 6y) = 27 - 16$, som gir $11x = 11$, altså $x = 1$. Setter inn: $2 + 3y = 8$, altså $y = 2$.

Et annet eksempel: $3x + 4y = 18$ og $2x + 3y = 13$. Gang første med 3 og andre med 4 (for å eliminere $y$): $9x + 12y = 54$ og $8x + 12y = 52$. Trekk fra: $x = 2$, og $y = 3$.

Likninger med brøker? Kvitt deg med brøkene først! For $\\frac{x}{2} + \\frac{y}{3} = 4$ ganger vi med 6: $3x + 2y = 24$. For $\\frac{x}{3} + \\frac{y}{2} = 5$ ganger vi med 6: $2x + 3y = 30$. Nå kan vi løse med standard metoder.`,
    },
    {
      id: '10-2-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-2-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på justering av koeffisienter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-3-n-quiz3-q0',
            task: 'Løs: $3x + 4y = 18$ og $2x + 3y = 13$.',
            options: [
              { id: 'a', text: '$(2, 3)$', isCorrect: true },
              { id: 'b', text: '$(3, 2)$', isCorrect: false },
              { id: 'c', text: '$(1, 4)$', isCorrect: false },
              { id: 'd', text: '$(4, 1)$', isCorrect: false },
            ],
            solution: 'Gang første med 3 og andre med 4: $9x + 12y = 54$ og $8x + 12y = 52$. Trekk fra: $x = 2$. Setter inn: $6 + 4y = 18 \\Rightarrow y = 3$.',
          },
          {
            id: '10-2-3-n-quiz3-q1',
            task: 'Hvorfor ganger vi likninger med ulike tall i addisjonsmetoden?',
            options: [
              { id: 'a', text: 'For å gjøre tallene mindre', isCorrect: false },
              { id: 'b', text: 'For å fjerne brøker', isCorrect: false },
              { id: 'c', text: 'For å få like (eller motsatte) koeffisienter foran én variabel', isCorrect: true },
              { id: 'd', text: 'For å sjekke om løsningen er riktig', isCorrect: false },
            ],
            solution: 'Vi ganger likningene med passende tall slik at koeffisientene foran én variabel blir like (eller motsatte). Da kan vi legge sammen eller trekke fra likningene for å eliminere den variabelen.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-3-n-section4',
      type: 'text',
      content: `## Praktiske problemer med likningssett

Likningssett er fantastiske for å løse hverdagsproblemer der du har to ukjente størrelser.

**Kinoproblemet fra introen:** En billettautomat tok inn 1800 kr fra 24 billetter. Voksenbilletter koster 100 kr og barnebilletter 50 kr.

La $x$ = antall voksenbilletter og $y$ = antall barnebilletter.

$$\\begin{cases} x + y = 24 \\\\ 100x + 50y = 1800 \\end{cases}$$

Fra første: $y = 24 - x$. Inn i andre: $100x + 50(24 - x) = 1800$, altså $100x + 1200 - 50x = 1800$, som gir $50x = 600$ og $x = 12$, $y = 12$.

**Tallproblemer:** Summen av to tall er 25 og differansen er 7. $x + y = 25$ og $x - y = 7$. Addisjon: $2x = 32$, $x = 16$, $y = 9$.

**Kioskproblemet:** 45 is og brus totalt. Is koster 30 kr, brus 20 kr. Totalt 1150 kr. $x + y = 45$ og $30x + 20y = 1150$. Fra første: $y = 45 - x$. Inn: $30x + 20(45 - x) = 1150$, altså $10x = 250$ og $x = 25$. 25 is og 20 brus.

Fremgangsmåten er alltid: identifiser de to ukjente, sett opp to likninger basert på informasjonen, og løs.`,
    },
    {
      id: '10-2-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-2-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på praktiske likningssett:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-3-n-quiz4-q0',
            task: 'Summen av to tall er 25 og differansen er 7. Hva er det største tallet?',
            options: [
              { id: 'a', text: '14', isCorrect: false },
              { id: 'b', text: '16', isCorrect: true },
              { id: 'c', text: '18', isCorrect: false },
              { id: 'd', text: '20', isCorrect: false },
            ],
            solution: '$x + y = 25$ og $x - y = 7$. Legger sammen: $2x = 32 \\Rightarrow x = 16$.',
          },
          {
            id: '10-2-3-n-quiz4-q1',
            task: 'En kiosk solgte 45 is og brus. Is koster 30 kr, brus 20 kr, totalt 1150 kr. Hvor mange is ble solgt?',
            options: [
              { id: 'a', text: '20', isCorrect: false },
              { id: 'b', text: '25', isCorrect: true },
              { id: 'c', text: '30', isCorrect: false },
              { id: 'd', text: '22', isCorrect: false },
            ],
            solution: '$x + y = 45$ og $30x + 20y = 1150$. Løsning: $x = 25$ is.',
          },
          {
            id: '10-2-3-n-quiz4-q2',
            task: 'Per er dobbelt så gammel som Kari. Om 10 år er summen av aldrene 65. Hvor gammel er Kari nå?',
            options: [
              { id: 'a', text: '12 år', isCorrect: false },
              { id: 'b', text: '15 år', isCorrect: true },
              { id: 'c', text: '10 år', isCorrect: false },
              { id: 'd', text: '20 år', isCorrect: false },
            ],
            solution: '$x = 2y$ og $(x+10) + (y+10) = 65 \\Rightarrow 2y + 10 + y + 10 = 65 \\Rightarrow 3y = 45 \\Rightarrow y = 15$. Kari er 15 år og Per er 30 år.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Et **likningssett** er to (eller flere) likninger som skal løses samtidig. Løsningen er verdiparet $(x, y)$ som tilfredsstiller begge likningene -- grafisk er det skjæringspunktet mellom linjene.

Vi har lært to metoder:

**Innsettingsmetoden:** Løs én likning for én variabel, sett uttrykket inn i den andre.

**Addisjonsmetoden:** Legg sammen eller trekk fra likningene for å eliminere én variabel. Om nødvendig, gang likningene med passende tall først for å få like koeffisienter.

For **praktiske problemer**: identifiser to ukjente, sett opp to likninger fra informasjonen, og løs med en av metodene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4 NARRATIV: Ulikheter
// ============================================================================

export const CHAPTER_10_2_4_NARRATIV: TextbookChapter = {
  id: '10-2-4-narrativ',
  courseId: '10',
  chapterNumber: '2.4',
  title: 'Ulikheter',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om ulikheter, det viktige regeltrikset med negative tall, doble ulikheter og fortegnsskjema.',
  estimatedMinutes: 40,
  competenceGoals: ['loyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend'],
  linkedChapterId: '10-2-4',
  content: [
    {
      id: '10-2-4-n-intro',
      type: 'text',
      content: `## Mer enn bare "er lik"

Hittil har vi jobbet med likninger -- utsagn om at to ting er like. Men i virkeligheten er ting sjelden nøyaktig like. "Du må tjene minst 300 000 for å få lån." "Ballen er i luften i mindre enn 4 sekunder." "Temperaturen er mellom -5 og 10 grader."

Alle disse er **ulikheter** -- matematiske utsagn om at noe er større enn, mindre enn, eller i et bestemt område. I dette kapittelet skal vi lære å løse dem, og vi skal oppdage at det finnes én viktig felle som du absolutt må passe deg for!`,
    },
    {
      id: '10-2-4-n-section1',
      type: 'text',
      content: `## Førstegradsulikheter og den viktige regelen

En **ulikhet** bruker symbolene $<$ (mindre enn), $>$ (større enn), $\\leq$ (mindre enn eller lik) og $\\geq$ (større enn eller lik).

Vi løser ulikheter nesten på samme måte som likninger -- vi kan legge til, trekke fra, gange og dele på begge sider. Men her kommer den kritiske regelen:

**Når vi ganger eller deler med et negativt tall, må vi snu ulikhetstegnet!**

Hvorfor? Tenk på talllinjen. $2 < 5$, men gang begge med $-1$: $-2 > -5$. Negativ multiplikasjon snur rekkefølgen!

La oss løse $3x - 7 > 8$. Legger til 7: $3x > 15$. Deler på 3 (positivt, ingen snuing): $x > 5$.

Nå: $-2x + 5 \\leq 11$. Trekker fra 5: $-2x \\leq 6$. Deler på $-2$ (**negativt, snur tegnet!**): $x \\geq -3$.

Enda et eksempel: $5 - 2x \\geq 13$. Trekker fra 5: $-2x \\geq 8$. Deler på $-2$ (snur!): $x \\leq -4$.

$3(x - 2) < 2(x + 1)$ gir $3x - 6 < 2x + 2$, altså $x < 8$.

$\\frac{x - 1}{3} \\leq 2$ gir $x - 1 \\leq 6$, altså $x \\leq 7$.

Løsningen av en ulikhet er ikke ett tall, men et **intervall** -- en hel mengde tall som oppfyller betingelsen.`,
    },
    {
      id: '10-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på førstegradsulikheter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-4-n-quiz1-q0',
            task: 'Løs $4x + 3 > 19$.',
            options: [
              { id: 'a', text: '$x > 4$', isCorrect: true },
              { id: 'b', text: '$x < 4$', isCorrect: false },
              { id: 'c', text: '$x > 5{,}5$', isCorrect: false },
              { id: 'd', text: '$x \\geq 4$', isCorrect: false },
            ],
            solution: '$4x + 3 > 19 \\Rightarrow 4x > 16 \\Rightarrow x > 4$.',
          },
          {
            id: '10-2-4-n-quiz1-q1',
            task: 'Løs $5 - 2x \\geq 13$.',
            options: [
              { id: 'a', text: '$x \\geq -4$', isCorrect: false },
              { id: 'b', text: '$x \\leq -4$', isCorrect: true },
              { id: 'c', text: '$x \\leq 4$', isCorrect: false },
              { id: 'd', text: '$x < -4$', isCorrect: false },
            ],
            solution: '$5 - 2x \\geq 13 \\Rightarrow -2x \\geq 8 \\Rightarrow x \\leq -4$ (snur tegnet fordi vi deler med negativt tall).',
          },
          {
            id: '10-2-4-n-quiz1-q2',
            task: 'Hva skjer med ulikhetstegnet når vi ganger begge sider med et negativt tall?',
            options: [
              { id: 'a', text: 'Ingenting, det forblir det samme', isCorrect: false },
              { id: 'b', text: 'Ulikheten blir en likning', isCorrect: false },
              { id: 'c', text: 'Vi må snu ulikhetstegnet', isCorrect: true },
              { id: 'd', text: 'Vi må bytte venstre og høyre side', isCorrect: false },
            ],
            solution: 'Når vi ganger eller deler med et negativt tall, snur vi ulikhetstegnet. $<$ blir $>$, $\\leq$ blir $\\geq$, og omvendt.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-4-n-section2',
      type: 'text',
      content: `## Doble ulikheter -- tall mellom to grenser

Noen ganger trenger vi å uttrykke at $x$ ligger mellom to verdier. For eksempel: "temperaturen er mellom $-3$ og $7$ grader." Matematisk skriver vi $-3 < x \\leq 7$.

En **dobbel ulikhet** som $-3 < 2x + 1 \\leq 7$ løses ved å gjøre det samme på alle tre "leddene" samtidig.

Trekker fra 1 fra alle ledd: $-4 < 2x \\leq 6$. Deler på 2: $-2 < x \\leq 3$.

Løsningen er alle $x$ slik at $x$ er større enn $-2$ og mindre enn eller lik 3.

La oss ta flere eksempler:

$1 < 3x - 2 < 10$: Legger til 2: $3 < 3x < 12$. Deler på 3: $1 < x < 4$.

$-5 \\leq 2x + 3 \\leq 9$: Trekker fra 3: $-8 \\leq 2x \\leq 6$. Deler på 2: $-4 \\leq x \\leq 3$.

$-2 < 1 - x < 5$: Trekker fra 1: $-3 < -x < 4$. Ganger med $-1$ (snur begge tegnene!): $-4 < x < 3$.

Pass spesielt på den siste! Når vi ganger med $-1$, snur vi begge ulikhetstegnene, og vi snur også rekkefølgen.`,
    },
    {
      id: '10-2-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-2-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på doble ulikheter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-4-n-quiz2-q0',
            task: 'Løs $1 < 3x - 2 < 10$.',
            options: [
              { id: 'a', text: '$1 < x < 4$', isCorrect: true },
              { id: 'b', text: '$0 < x < 3$', isCorrect: false },
              { id: 'c', text: '$1 \\leq x \\leq 4$', isCorrect: false },
              { id: 'd', text: '$2 < x < 5$', isCorrect: false },
            ],
            solution: 'Legger til 2: $3 < 3x < 12$. Deler på 3: $1 < x < 4$.',
          },
          {
            id: '10-2-4-n-quiz2-q1',
            task: 'Løs $0 < \\frac{x + 1}{2} \\leq 4$.',
            options: [
              { id: 'a', text: '$-1 < x \\leq 7$', isCorrect: true },
              { id: 'b', text: '$0 \\leq x \\leq 8$', isCorrect: false },
              { id: 'c', text: '$-1 \\leq x < 7$', isCorrect: false },
              { id: 'd', text: '$0 < x < 7$', isCorrect: false },
            ],
            solution: 'Gang med 2: $0 < x + 1 \\leq 8$. Trekk fra 1: $-1 < x \\leq 7$.',
          },
          {
            id: '10-2-4-n-quiz2-q2',
            task: 'Løs $-2 < 1 - x < 5$.',
            options: [
              { id: 'a', text: '$-3 < x < 4$', isCorrect: false },
              { id: 'b', text: '$-4 < x < 3$', isCorrect: true },
              { id: 'c', text: '$-4 \\leq x \\leq 3$', isCorrect: false },
              { id: 'd', text: '$-2 < x < 5$', isCorrect: false },
            ],
            solution: 'Trekk fra 1: $-3 < -x < 4$. Gang med $-1$ (snur tegnene!): $-4 < x < 3$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-4-n-section3',
      type: 'text',
      content: `## Andregradsulikheter og fortegnsskjema

Nå tar vi steget opp til **andregradsulikheter** -- ulikheter med $x^2$. For å løse disse bruker vi **fortegnsskjema**.

Ta $x^2 - 4x - 5 > 0$. Fremgangsmåten er:

1. **Faktoriser:** $(x - 5)(x + 1) > 0$
2. **Finn nullpunktene:** $x = 5$ og $x = -1$
3. **Tegn fortegnsskjema:** Del talllinjen i tre intervaller: $x < -1$, $-1 < x < 5$, og $x > 5$.
4. **Bestem fortegnet i hvert intervall:**
   - For $x < -1$: $(x - 5)$ er negativ og $(x + 1)$ er negativ. $(-)(-) = +$ (positiv)
   - For $-1 < x < 5$: $(x - 5)$ er negativ og $(x + 1)$ er positiv. $(-)(+) = -$ (negativ)
   - For $x > 5$: $(x - 5)$ er positiv og $(x + 1)$ er positiv. $(+)(+) = +$ (positiv)
5. **Les av:** Vi vil ha $> 0$ (positivt), altså $x < -1$ eller $x > 5$.

For $x^2 - 9 > 0 = (x+3)(x-3) > 0$: positivt når $x < -3$ eller $x > 3$.

For $x^2 - 2x - 8 \\leq 0 = (x-4)(x+2) \\leq 0$: negativt (eller null) når $-2 \\leq x \\leq 4$.

Et spesialtilfelle: $x^2 - 6x + 9 \\geq 0 = (x-3)^2 \\geq 0$. Et kvadrat er **alltid** $\\geq 0$, så løsningen er alle reelle tall!`,
    },
    {
      id: '10-2-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-2-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på andregradsulikheter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-4-n-quiz3-q0',
            task: 'Løs $x^2 - 9 > 0$.',
            options: [
              { id: 'a', text: '$x < -3$ eller $x > 3$', isCorrect: true },
              { id: 'b', text: '$-3 < x < 3$', isCorrect: false },
              { id: 'c', text: '$x > 3$', isCorrect: false },
              { id: 'd', text: '$x \\leq -3$ eller $x \\geq 3$', isCorrect: false },
            ],
            solution: '$(x+3)(x-3) > 0$. Produktet er positivt når begge faktorer har likt fortegn: $x < -3$ eller $x > 3$.',
          },
          {
            id: '10-2-4-n-quiz3-q1',
            task: 'Løs $x^2 - 2x - 8 \\leq 0$.',
            options: [
              { id: 'a', text: '$-2 \\leq x \\leq 4$', isCorrect: true },
              { id: 'b', text: '$x \\leq -2$ eller $x \\geq 4$', isCorrect: false },
              { id: 'c', text: '$-2 < x < 4$', isCorrect: false },
              { id: 'd', text: '$x < -2$ eller $x > 4$', isCorrect: false },
            ],
            solution: '$(x-4)(x+2) \\leq 0$. Produktet er negativt (eller null) når $-2 \\leq x \\leq 4$.',
          },
          {
            id: '10-2-4-n-quiz3-q2',
            task: 'Løs $(x-3)^2 \\geq 0$.',
            options: [
              { id: 'a', text: 'Kun $x = 3$', isCorrect: false },
              { id: 'b', text: '$x \\neq 3$', isCorrect: false },
              { id: 'c', text: 'Alle reelle tall', isCorrect: true },
              { id: 'd', text: 'Ingen løsning', isCorrect: false },
            ],
            solution: 'Et kvadrat er alltid $\\geq 0$, uansett hva $x$ er. Så $(x-3)^2 \\geq 0$ er sant for alle reelle tall.',
          },
          {
            id: '10-2-4-n-quiz3-q3',
            task: 'Løs $x^2 + 4x + 3 < 0$.',
            options: [
              { id: 'a', text: '$x < -3$ eller $x > -1$', isCorrect: false },
              { id: 'b', text: '$-3 \\leq x \\leq -1$', isCorrect: false },
              { id: 'c', text: '$-3 < x < -1$', isCorrect: true },
              { id: 'd', text: '$-1 < x < 3$', isCorrect: false },
            ],
            solution: '$(x+1)(x+3) < 0$. Produktet er negativt mellom nullpunktene: $-3 < x < -1$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-4-n-section4',
      type: 'text',
      content: `## Praktiske anvendelser av ulikheter

Ulikheter er perfekte for å modellere situasjoner med grenser og krav.

**Ballkast:** En ball kastes opp med høyde $h(t) = -5t^2 + 20t$ meter etter $t$ sekunder. Når er ballen høyere enn 15 meter?

$-5t^2 + 20t > 15$, altså $-5t^2 + 20t - 15 > 0$. Deler på $-5$ (snur tegnet!): $t^2 - 4t + 3 < 0$, som faktoriseres til $(t - 1)(t - 3) < 0$. Løsning: $1 < t < 3$. Ballen er over 15 meter mellom 1 og 3 sekunder.

**Arealoppgave:** Et rektangel med bredde $x$ og lengde $(x + 4)$ skal ha minst 45 cm$^2$. $x(x + 4) \\geq 45$, altså $x^2 + 4x - 45 \\geq 0$, som gir $(x + 9)(x - 5) \\geq 0$. Siden $x > 0$ (bredde er positiv): $x \\geq 5$.

**Fortjeneste:** En produsent har fortjeneste $P(x) = -2x^2 + 100x - 800$ kr ved salg av $x$ enheter. Når er fortjenesten positiv? $-2x^2 + 100x - 800 > 0$, deler på $-2$ (snur!): $x^2 - 50x + 400 < 0$, som gir $(x - 10)(x - 40) < 0$. Løsning: $10 < x < 40$. Produsenten må selge mellom 10 og 40 enheter for å gå med overskudd.

Merk at den viktigste fellen i alle disse er å huske å **snu ulikhetstegnet** når vi deler med negativt tall!`,
    },
    {
      id: '10-2-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-2-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på praktiske ulikheter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-2-4-n-quiz4-q0',
            task: 'En ball kastes med høyde $h(t) = -4t^2 + 24t$. Når er ballen over 32 meter?',
            options: [
              { id: 'a', text: '$2 < t < 4$ sekunder', isCorrect: true },
              { id: 'b', text: '$t < 2$ eller $t > 4$ sekunder', isCorrect: false },
              { id: 'c', text: '$0 < t < 6$ sekunder', isCorrect: false },
              { id: 'd', text: '$1 < t < 5$ sekunder', isCorrect: false },
            ],
            solution: '$-4t^2 + 24t > 32 \\Rightarrow t^2 - 6t + 8 < 0 \\Rightarrow (t-2)(t-4) < 0$. Løsning: $2 < t < 4$.',
          },
          {
            id: '10-2-4-n-quiz4-q1',
            task: 'Fortjenesten er $P(x) = -2x^2 + 100x - 800$. For hvilke $x$ er fortjenesten positiv?',
            options: [
              { id: 'a', text: '$x < 10$ eller $x > 40$', isCorrect: false },
              { id: 'b', text: '$0 < x < 50$', isCorrect: false },
              { id: 'c', text: '$10 < x < 40$ enheter', isCorrect: true },
              { id: 'd', text: '$x > 10$ enheter', isCorrect: false },
            ],
            solution: '$-2x^2 + 100x - 800 > 0 \\Rightarrow x^2 - 50x + 400 < 0 \\Rightarrow (x-10)(x-40) < 0$. Løsning: $10 < x < 40$.',
          },
          {
            id: '10-2-4-n-quiz4-q2',
            task: 'Et rektangel med bredde $x$ og lengde $(x + 4)$ skal ha areal minst 45 cm$^2$. Hva er den minste mulige bredden?',
            options: [
              { id: 'a', text: '9 cm', isCorrect: false },
              { id: 'b', text: '5 cm', isCorrect: true },
              { id: 'c', text: '4 cm', isCorrect: false },
              { id: 'd', text: '6 cm', isCorrect: false },
            ],
            solution: '$x(x+4) \\geq 45 \\Rightarrow (x+9)(x-5) \\geq 0$. Siden $x > 0$: $x \\geq 5$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-2-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Ulikheter** bruker symbolene $<$, $>$, $\\leq$ og $\\geq$ og løses som likninger, men med én kritisk regel: **snu ulikhetstegnet når du ganger eller deler med negativt tall**.

**Doble ulikheter** som $a < bx + c < d$ løses ved å gjøre det samme på alle tre ledd.

**Andregradsulikheter** løses med **fortegnsskjema**: faktoriser, finn nullpunkter, bestem fortegn i hvert intervall, og les av løsningen.

Løsningen av en ulikhet er alltid et **intervall** (eller en forening av intervaller), ikke et enkelt tall. Ulikheter er nyttige for å modellere situasjoner med grenser, krav og begrensninger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const MATEMATIKK_10_NARRATIV_DEL2_CHAPTERS = [
  CHAPTER_10_2_1_NARRATIV,
  CHAPTER_10_2_2_NARRATIV,
  CHAPTER_10_2_3_NARRATIV,
  CHAPTER_10_2_4_NARRATIV,
];
