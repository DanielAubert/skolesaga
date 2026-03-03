/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 7
 *
 * Kapittel 7.1: Tallmønstre og tallfølger
 * Kapittel 7.2: Figurtall og geometriske mønstre
 * Kapittel 7.3: Generalisering med algebra
 * Kapittel 7.4: Rekursive og eksplisitte formler
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1 NARRATIV: Tallmønstre og tallfølger
// ============================================================================

export const CHAPTER_9_7_1_NARRATIV: TextbookChapter = {
  id: '9-7-1-narrativ',
  courseId: '9',
  chapterNumber: '7.1',
  title: 'Tallmønstre og tallfølger',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende reise gjennom tallmønstre og tallfølger -- der vi oppdager skjulte regler i tallrekker, lærer å skille mellom aritmetiske og geometriske følger, og forstår hvorfor mønstre er en av matematikkens superkrefter.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive strukturar og forandringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  linkedChapterId: '9-7-1',
  content: [
    {
      id: '9-7-1-n-intro',
      type: 'text',
      content: `## Tallenes skjulte regler

Har du noen gang lagt merke til at husnumrene på den ene siden av gaten alltid er oddetall? Eller at kalenderukene teller oppover med nøyaktig syv dager mellom hver? Overalt rundt oss finnes det **mønstre** -- regler som bestemmer hva som kommer neste gang.

I matematikken kaller vi en ordnet liste med tall som følger et mønster for en **tallfølge**. Hvert tall i listen kalles et **ledd**. Det første leddet skriver vi som $a_1$, det andre som $a_2$, og det $n$-te leddet som $a_n$.

Se på denne følgen: $2, 5, 8, 11, 14, \\ldots$ Hva skjer fra ledd til ledd? Vi legger til $3$ hver gang. Hvis noen ber deg om det 100. leddet, kunne du i prinsippet legge til $3$ nittini ganger -- men det finnes en smartere måte. Det er nettopp det dette kapittelet handler om.`,
    },

    {
      id: '9-7-1-n-section1',
      type: 'text',
      content: `## Aritmetiske følger -- når vi legger til det samme

Tenk deg at du sparer penger i en sparebøsse. Første uke legger du inn 20 kr, andre uke 25 kr, tredje uke 30 kr, fjerde uke 35 kr. Hva er mønsteret? Jo, beløpet øker med $5$ kr for hver uke. En slik følge -- der **differansen** mellom hvert par av påfølgende ledd er den samme -- kalles en **aritmetisk følge**.

Den konstante differansen kaller vi $d$. I eksempelet vårt er $d = 5$. Det fine med aritmetiske følger er at vi kan lage en formel for ethvert ledd:

$$a_n = a_1 + (n - 1) \\cdot d$$

La oss teste: $a_1 = 20$, $d = 5$. Det 10. leddet er $a_{10} = 20 + (10-1) \\cdot 5 = 20 + 45 = 65$ kr. Uke 10 legger du altså inn 65 kr.

Men hva om differansen er negativ? Det er også mulig! Følgen $100, 93, 86, 79, \\ldots$ har $d = -7$. Tallene krymper, men det er fortsatt en aritmetisk følge. Tenk på det som en nedtelling -- for eksempel en rakett som teller ned drivstoffnivået.`,
    },

    {
      id: '9-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på aritmetiske følger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-1-n-quiz1-q0',
            task: 'Følgen $7, 11, 15, 19, 23, \\ldots$ er aritmetisk. Hva er differansen $d$?',
            options: [
              { id: 'a', text: '$d = 3$', isCorrect: false },
              { id: 'b', text: '$d = 4$', isCorrect: true },
              { id: 'c', text: '$d = 7$', isCorrect: false },
              { id: 'd', text: '$d = 11$', isCorrect: false },
            ],
            solution: '$11 - 7 = 4$, $15 - 11 = 4$, $19 - 15 = 4$. Differansen er konstant lik $d = 4$.',
          },
          {
            id: '9-7-1-n-quiz1-q1',
            task: 'En aritmetisk følge har $a_1 = 3$ og $d = 5$. Hva er $a_{20}$?',
            options: [
              { id: 'a', text: '$100$', isCorrect: false },
              { id: 'b', text: '$98$', isCorrect: true },
              { id: 'c', text: '$103$', isCorrect: false },
              { id: 'd', text: '$95$', isCorrect: false },
            ],
            solution: '$a_{20} = 3 + (20 - 1) \\cdot 5 = 3 + 95 = 98$.',
          },
          {
            id: '9-7-1-n-quiz1-q2',
            task: 'Hvilken av disse følgene er IKKE aritmetisk?',
            options: [
              { id: 'a', text: '$10, 7, 4, 1, -2, \\ldots$', isCorrect: false },
              { id: 'b', text: '$2, 4, 8, 16, 32, \\ldots$', isCorrect: true },
              { id: 'c', text: '$5, 5, 5, 5, 5, \\ldots$', isCorrect: false },
              { id: 'd', text: '$1, 3, 5, 7, 9, \\ldots$', isCorrect: false },
            ],
            solution: 'I følgen $2, 4, 8, 16, 32, \\ldots$ er differansene $2, 4, 8, 16$ -- de er IKKE konstante. Denne følgen er geometrisk (vi ganger med $2$), ikke aritmetisk.',
          },
        ],
      },
    },

    {
      id: '9-7-1-n-section2',
      type: 'text',
      content: `## Geometriske følger -- når vi ganger med det samme

Forestill deg at du legger et kornkorn på det første ruten på et sjakkbrett, to korn på den andre ruten, fire på den tredje, åtte på den fjerde, og så videre. Snart blir mengdene enorme! Denne typen vekst -- der vi ganger med samme tall for hvert steg -- kalles en **geometrisk følge**.

I stedet for en fast differanse $d$ har vi en fast **kvotient** $k$. Den finner vi ved å dele et ledd på det forrige:

$$k = \\frac{a_{n+1}}{a_n}$$

For sjakkbrett-eksempelet: $k = \\frac{2}{1} = \\frac{4}{2} = \\frac{8}{4} = 2$. Formelen for det $n$-te leddet er:

$$a_n = a_1 \\cdot k^{n-1}$$

Sjakkbrettet har $a_1 = 1$ og $k = 2$, så rute nummer $64$ har $a_{64} = 1 \\cdot 2^{63} = 9\\,223\\,372\\,036\\,854\\,775\\,808$ korn -- over 9 trillioner! Det er mer enn all ris som noensinne er produsert i verden. Slik er kraften i eksponentiell vekst.

Geometriske følger dukker opp overalt: bakterier som dobler seg, sparepenger med rente, radioaktivt forfall (der $k$ er mellom $0$ og $1$), og lydnivåer i desibel.`,
    },

    {
      id: '9-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på geometriske følger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-1-n-quiz2-q0',
            task: 'Følgen $3, 12, 48, 192, \\ldots$ er geometrisk. Hva er kvotienten $k$?',
            options: [
              { id: 'a', text: '$k = 3$', isCorrect: false },
              { id: 'b', text: '$k = 9$', isCorrect: false },
              { id: 'c', text: '$k = 4$', isCorrect: true },
              { id: 'd', text: '$k = 12$', isCorrect: false },
            ],
            solution: '$\\frac{12}{3} = 4$, $\\frac{48}{12} = 4$, $\\frac{192}{48} = 4$. Kvotienten er $k = 4$.',
          },
          {
            id: '9-7-1-n-quiz2-q1',
            task: 'En bakteriekultur starter med 100 bakterier og tredobler seg hver time. Hvor mange bakterier er det etter 5 timer?',
            options: [
              { id: 'a', text: '$1500$', isCorrect: false },
              { id: 'b', text: '$24\\,300$', isCorrect: true },
              { id: 'c', text: '$30\\,000$', isCorrect: false },
              { id: 'd', text: '$8100$', isCorrect: false },
            ],
            solution: 'Geometrisk følge med $a_1 = 100$ og $k = 3$. Etter 5 timer er vi ved ledd $a_6 = 100 \\cdot 3^5 = 100 \\cdot 243 = 24\\,300$.',
          },
        ],
      },
    },

    {
      id: '9-7-1-n-section3',
      type: 'text',
      content: `## Følger som verken er aritmetiske eller geometriske

Ikke alle tallfølger passer inn i de to kategoriene vi har sett på. Noen av de mest fascinerende følgene har helt egne regler.

**Kvadrattallene:** $1, 4, 9, 16, 25, 36, \\ldots$ Her er mønsteret $a_n = n^2$. Differansene er $3, 5, 7, 9, 11, \\ldots$ -- de er ikke konstante (ikke aritmetisk), og kvotientene $4, 2{,}25, 1{,}78, \\ldots$ er heller ikke konstante (ikke geometrisk). Men mønsteret er likevel tydelig.

**Fibonacci-følgen:** $1, 1, 2, 3, 5, 8, 13, 21, \\ldots$ Her er regelen at hvert ledd er summen av de to foregående: $1 + 1 = 2$, $1 + 2 = 3$, $2 + 3 = 5$, og så videre. Denne følgen dukker opp i naturen overalt -- i solsikkens frøspiral, i sneglehus, og i treers forgreiningsmønstre.

Når du møter en ukjent følge, start alltid med å sjekke: Er differansene konstante? Da er den aritmetisk. Er kvotientene konstante? Da er den geometrisk. Hvis ingen av delene stemmer, må du lete etter andre mønstre -- kanskje er tallene kvadrattall, trekanttall, eller noe helt annet.`,
    },

    {
      id: '9-7-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-7-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på ulike typer tallfølger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-1-n-quiz3-q0',
            task: 'Hvilken type følge er $1, 3, 9, 27, 81, \\ldots$?',
            options: [
              { id: 'a', text: 'Aritmetisk', isCorrect: false },
              { id: 'b', text: 'Geometrisk', isCorrect: true },
              { id: 'c', text: 'Fibonacci', isCorrect: false },
              { id: 'd', text: 'Ingen av delene', isCorrect: false },
            ],
            solution: 'Kvotienten er $\\frac{3}{1} = \\frac{9}{3} = \\frac{27}{9} = 3$. Konstant kvotient betyr at det er en geometrisk følge med $k = 3$.',
          },
          {
            id: '9-7-1-n-quiz3-q1',
            task: 'Hva er det neste tallet i Fibonacci-følgen $1, 1, 2, 3, 5, 8, 13, \\ldots$?',
            options: [
              { id: 'a', text: '$18$', isCorrect: false },
              { id: 'b', text: '$20$', isCorrect: false },
              { id: 'c', text: '$21$', isCorrect: true },
              { id: 'd', text: '$26$', isCorrect: false },
            ],
            solution: 'I Fibonacci-følgen legger vi sammen de to siste leddene: $8 + 13 = 21$.',
          },
          {
            id: '9-7-1-n-quiz3-q2',
            task: 'Følgen $50, 45, 40, 35, 30, \\ldots$ er aritmetisk. Hva er det 15. leddet?',
            options: [
              { id: 'a', text: '$-25$', isCorrect: false },
              { id: 'b', text: '$-20$', isCorrect: true },
              { id: 'c', text: '$-15$', isCorrect: false },
              { id: 'd', text: '$-30$', isCorrect: false },
            ],
            solution: '$d = 45 - 50 = -5$. $a_{15} = 50 + (15-1) \\cdot (-5) = 50 - 70 = -20$.',
          },
        ],
      },
    },

    {
      id: '9-7-1-n-summary',
      type: 'text',
      content: `## Oppsummering

En **tallfølge** er en ordnet liste med tall som følger et mønster. Leddene skrives $a_1, a_2, a_3, \\ldots$ og det generelle leddet er $a_n$.

**Aritmetisk følge:** Differansen $d$ mellom leddene er konstant. Formel: $a_n = a_1 + (n-1) \\cdot d$.

**Geometrisk følge:** Kvotienten $k$ mellom leddene er konstant. Formel: $a_n = a_1 \\cdot k^{n-1}$.

**Andre følger:** Noen følger (som kvadrattall og Fibonacci) er verken aritmetiske eller geometriske, men har likevel tydelige mønstre.

Sjekk alltid differansene først (aritmetisk?), deretter kvotientene (geometrisk?), og til slutt andre mønstre.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2 NARRATIV: Figurtall og geometriske mønstre
// ============================================================================

export const CHAPTER_9_7_2_NARRATIV: TextbookChapter = {
  id: '9-7-2-narrativ',
  courseId: '9',
  chapterNumber: '7.2',
  title: 'Figurtall og geometriske mønstre',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende utforskning av figurtall -- tall som kan tegnes som prikker i geometriske former -- der vi oppdager trekanttall, kvadrattall og femkanttall, og ser hvordan antikke matematikere fant overraskende sammenhenger.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive strukturar og forandringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  linkedChapterId: '9-7-2',
  content: [
    {
      id: '9-7-2-n-intro',
      type: 'text',
      content: `## Tall du kan tegne

For over 2500 år siden satt en gruppe greske matematikere -- tilhengere av Pythagoras -- og ordnet småstein i ulike figurer. De la merke til noe fascinerende: visse tall kunne arrangeres i perfekte trekanter, kvadrater eller femkanter. Disse tallene kalte de **figurtall**.

Det høres kanskje enkelt ut, men figurtall skjuler overraskende sammenhenger. For eksempel: visste du at summen av de $n$ første oddetallene alltid gir et perfekt kvadrattall? Eller at to påfølgende trekanttall alltid gir et kvadrattall? Denne typen oppdagelser er kjernen i det vi skal utforske.`,
    },

    {
      id: '9-7-2-n-section1',
      type: 'text',
      content: `## Trekanttall -- når prikker danner trekanter

Tenk deg at du stabler kuler i en trekantform. Øverst har du 1 kule, neste rad har 2, så 3, og så videre. De totale antallene blir: $1, 3, 6, 10, 15, 21, \\ldots$

Disse kalles **trekanttall**, og vi skriver dem som $T_n$. Det $n$-te trekanttallet er summen av tallene fra $1$ til $n$:

$$T_n = 1 + 2 + 3 + \\cdots + n = \\frac{n(n+1)}{2}$$

Denne formelen har en fin historie. Den unge Carl Friedrich Gauss fikk en gang i oppdrag å legge sammen tallene fra $1$ til $100$. I stedet for å regne $1 + 2 + 3 + \\cdots$, la han merke til at $1 + 100 = 101$, $2 + 99 = 101$, $3 + 98 = 101$, og så videre -- 50 slike par. Svaret var $50 \\cdot 101 = 5050$. Og akkurat dette er $T_{100} = \\frac{100 \\cdot 101}{2} = 5050$.

Trekanttall dukker opp i hverdagen. Når du stabler bokser i en pyramide, bygger bowlingpinner ($T_4 = 10$ pinner), eller teller antall håndtrykk i en gruppe ($n$ personer gir $T_{n-1}$ håndtrykk), er det trekanttall som ligger bak.`,
    },

    {
      id: '9-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på trekanttall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-2-n-quiz1-q0',
            task: 'Hva er det 10. trekanttallet $T_{10}$?',
            options: [
              { id: 'a', text: '$45$', isCorrect: false },
              { id: 'b', text: '$55$', isCorrect: true },
              { id: 'c', text: '$50$', isCorrect: false },
              { id: 'd', text: '$100$', isCorrect: false },
            ],
            solution: '$T_{10} = \\frac{10 \\cdot 11}{2} = \\frac{110}{2} = 55$.',
          },
          {
            id: '9-7-2-n-quiz1-q1',
            task: 'Emilie stabler bokser i en pyramide med 12 rader. Hvor mange bokser bruker hun totalt?',
            options: [
              { id: 'a', text: '$66$', isCorrect: false },
              { id: 'b', text: '$78$', isCorrect: true },
              { id: 'c', text: '$72$', isCorrect: false },
              { id: 'd', text: '$144$', isCorrect: false },
            ],
            solution: '$T_{12} = \\frac{12 \\cdot 13}{2} = \\frac{156}{2} = 78$ bokser.',
          },
        ],
      },
    },

    {
      id: '9-7-2-n-section2',
      type: 'text',
      content: `## Kvadrattall og en magisk sammenheng

**Kvadrattallene** er tall som kan ordnes som prikker i et kvadrat: $1, 4, 9, 16, 25, 36, \\ldots$ Formelen er enkel: $K_n = n^2$.

Men her kommer noe vakkert. Du kan bygge opp et kvadrattall ved å legge til oddetall:

$$K_1 = 1$$
$$K_2 = 1 + 3 = 4$$
$$K_3 = 1 + 3 + 5 = 9$$
$$K_4 = 1 + 3 + 5 + 7 = 16$$

Altså: **summen av de $n$ første oddetallene er alltid $n^2$!** Tenk deg det -- legg sammen de 100 første oddetallene ($1 + 3 + 5 + \\cdots + 199$), og du får $100^2 = 10\\,000$.

Det finnes enda en overraskende sammenheng. Legg sammen to påfølgende trekanttall:

$$T_1 + T_2 = 1 + 3 = 4 = 2^2$$
$$T_2 + T_3 = 3 + 6 = 9 = 3^2$$
$$T_3 + T_4 = 6 + 10 = 16 = 4^2$$

Mønsteret holder alltid: $T_{n-1} + T_n = n^2$. Du kan bevise dette algebraisk:

$$T_{n-1} + T_n = \\frac{(n-1)n}{2} + \\frac{n(n+1)}{2} = \\frac{n(n-1+n+1)}{2} = \\frac{n \\cdot 2n}{2} = n^2$$`,
    },

    {
      id: '9-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kvadrattall og sammenhenger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-2-n-quiz2-q0',
            task: 'Hva er summen av de 8 første oddetallene?',
            options: [
              { id: 'a', text: '$49$', isCorrect: false },
              { id: 'b', text: '$64$', isCorrect: true },
              { id: 'c', text: '$56$', isCorrect: false },
              { id: 'd', text: '$36$', isCorrect: false },
            ],
            solution: 'Summen av de $n$ første oddetallene er $n^2$. Altså $8^2 = 64$.',
          },
          {
            id: '9-7-2-n-quiz2-q1',
            task: 'Hva er $T_5 + T_6$?',
            options: [
              { id: 'a', text: '$25$', isCorrect: false },
              { id: 'b', text: '$36$', isCorrect: true },
              { id: 'c', text: '$30$', isCorrect: false },
              { id: 'd', text: '$49$', isCorrect: false },
            ],
            solution: '$T_5 = 15$ og $T_6 = 21$. Summen er $15 + 21 = 36 = 6^2$. To påfølgende trekanttall gir alltid et kvadrattall.',
          },
          {
            id: '9-7-2-n-quiz2-q2',
            task: 'Hva er differansen mellom $K_5$ og $K_4$?',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$9$', isCorrect: true },
              { id: 'c', text: '$5$', isCorrect: false },
              { id: 'd', text: '$11$', isCorrect: false },
            ],
            solution: '$K_5 - K_4 = 25 - 16 = 9$. Differansen mellom to påfølgende kvadrattall er alltid et oddetall: $K_n - K_{n-1} = n^2 - (n-1)^2 = 2n - 1$. For $n = 5$: $2 \\cdot 5 - 1 = 9$.',
          },
        ],
      },
    },

    {
      id: '9-7-2-n-section3',
      type: 'text',
      content: `## Femkanttall og fyrstikkmønstre

**Femkanttallene** er tall som kan ordnes som prikker i en femkant: $1, 5, 12, 22, 35, \\ldots$ Formelen er:

$$P_n = \\frac{n(3n - 1)}{2}$$

Differansene mellom leddene er $4, 7, 10, 13, \\ldots$ -- de øker med $3$ hver gang. Merk at dette er en «andre-ordens» struktur: differansene av differansene er konstante.

Figurtall handler ikke bare om prikker. Tenk deg at du bygger firkanter av fyrstikker i en rekke. Den første firkanten trenger 4 fyrstikker. Den andre firkanten deler en side med den første og trenger bare 3 nye. Den tredje trenger også 3 nye. Antall fyrstikker for $n$ firkanter er:

$$F_n = 4 + 3(n-1) = 3n + 1$$

Slike fyrstikkmønstre er en fin bro mellom det visuelle (figuren du tegner) og det algebraiske (formelen du finner). Nøkkelen er alltid å se: *hva legges til fra en figur til den neste?*`,
    },

    {
      id: '9-7-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-7-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på femkanttall og mønstre:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-2-n-quiz3-q0',
            task: 'Hva er det 4. femkanttallet $P_4$?',
            options: [
              { id: 'a', text: '$20$', isCorrect: false },
              { id: 'b', text: '$22$', isCorrect: true },
              { id: 'c', text: '$18$', isCorrect: false },
              { id: 'd', text: '$24$', isCorrect: false },
            ],
            solution: '$P_4 = \\frac{4 \\cdot (3 \\cdot 4 - 1)}{2} = \\frac{4 \\cdot 11}{2} = \\frac{44}{2} = 22$.',
          },
          {
            id: '9-7-2-n-quiz3-q1',
            task: 'Du bygger firkanter av fyrstikker i en rekke ($F_n = 3n + 1$). Hvor mange fyrstikker trenger du for 20 firkanter?',
            options: [
              { id: 'a', text: '$60$', isCorrect: false },
              { id: 'b', text: '$61$', isCorrect: true },
              { id: 'c', text: '$80$', isCorrect: false },
              { id: 'd', text: '$63$', isCorrect: false },
            ],
            solution: '$F_{20} = 3 \\cdot 20 + 1 = 61$ fyrstikker.',
          },
        ],
      },
    },

    {
      id: '9-7-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Figurtall** er tall som kan representeres som prikker i geometriske figurer.

| Figurtall | Formel | De første | Differansemønster |
|-----------|--------|-----------|-------------------|
| Trekanttall $T_n$ | $\\frac{n(n+1)}{2}$ | $1, 3, 6, 10, 15, \\ldots$ | $2, 3, 4, 5, \\ldots$ |
| Kvadrattall $K_n$ | $n^2$ | $1, 4, 9, 16, 25, \\ldots$ | $3, 5, 7, 9, \\ldots$ |
| Femkanttall $P_n$ | $\\frac{n(3n-1)}{2}$ | $1, 5, 12, 22, 35, \\ldots$ | $4, 7, 10, 13, \\ldots$ |

Nyttige sammenhenger:
- Summen av de $n$ første oddetallene er $n^2$
- $T_{n-1} + T_n = n^2$ (to påfølgende trekanttall gir et kvadrattall)
- Konstante differanser betyr lineær formel; lineært økende differanser betyr kvadratisk formel`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3 NARRATIV: Generalisering med algebra
// ============================================================================

export const CHAPTER_9_7_3_NARRATIV: TextbookChapter = {
  id: '9-7-3-narrativ',
  courseId: '9',
  chapterNumber: '7.3',
  title: 'Generalisering med algebra',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av generalisering -- kunsten å gå fra konkrete eksempler til universelle formler -- der vi bruker differansetabeller som detektivverktøy for å avdekke lineære og kvadratiske mønstre.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive strukturar og forandringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  linkedChapterId: '9-7-3',
  content: [
    {
      id: '9-7-3-n-intro',
      type: 'text',
      content: `## Fra det spesielle til det generelle

Forestill deg at du er en detektiv som har fått en liste med ledetråder: $5, 8, 11, 14, 17, \\ldots$ Jobben din er å finne den skjulte regelen -- formelen som produserer alle disse tallene. Finner du den, kan du forutsi ethvert tall i rekken, selv det tusende.

Dette er kjernen i **generalisering**: å gå fra noen spesifikke eksempler til en formel som gjelder for alle. I stedet for å telle klosser i figur 1, 2, 3 og 4, vil vi ha en formel som forteller oss antall klosser i figur $n$ -- uansett hvor stor $n$ er.

Verktøyet vårt er **differansetabellen**. Den er som et røntgenbilde av tallfølgen: den avslører strukturen som skjuler seg under overflaten.`,
    },

    {
      id: '9-7-3-n-section1',
      type: 'text',
      content: `## Lineære formler -- når differansene er konstante

Hvis du regner ut differansene mellom påfølgende ledd og de er **konstante**, har du en lineær formel. Det betyr at formelen ser ut som $a_n = dn + c$, der $d$ er den konstante differansen.

La oss se det i praksis. Følgen $6, 11, 16, 21, 26, \\ldots$ har differansene $5, 5, 5, 5$. Konstant! Altså:

$$a_n = 5n + c$$

For å finne $c$ setter vi inn en verdi vi kjenner. For $n = 1$ vet vi at $a_1 = 6$:

$$6 = 5 \\cdot 1 + c \\quad \\Rightarrow \\quad c = 1$$

Formelen er $a_n = 5n + 1$. La oss sjekke: $a_2 = 5 \\cdot 2 + 1 = 11$. Stemmer! $a_4 = 5 \\cdot 4 + 1 = 21$. Perfekt!

Nå kan vi finne ethvert ledd: $a_{100} = 5 \\cdot 100 + 1 = 501$. Det hadde tatt evigheter å telle seg frem til dette ledd for ledd, men formelen gir svaret på et øyeblikk.

Husk: differansen $d$ kan også være negativ. Følgen $10, 7, 4, 1, -2, \\ldots$ har $d = -3$, og formelen blir $a_n = -3n + 13$.`,
    },

    {
      id: '9-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på lineære formler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-3-n-quiz1-q0',
            task: 'Følgen $4, 7, 10, 13, 16, \\ldots$ har differanse $d = 3$. Hva er formelen for $a_n$?',
            options: [
              { id: 'a', text: '$a_n = 3n + 4$', isCorrect: false },
              { id: 'b', text: '$a_n = 3n + 1$', isCorrect: true },
              { id: 'c', text: '$a_n = 4n + 3$', isCorrect: false },
              { id: 'd', text: '$a_n = 3n - 1$', isCorrect: false },
            ],
            solution: '$a_n = 3n + c$. For $n = 1$: $4 = 3 + c$, altså $c = 1$. Formelen er $a_n = 3n + 1$.',
          },
          {
            id: '9-7-3-n-quiz1-q1',
            task: 'Formelen for en følge er $a_n = 5n + 1$. Hvilken figur har 201 enheter?',
            options: [
              { id: 'a', text: 'Figur $39$', isCorrect: false },
              { id: 'b', text: 'Figur $40$', isCorrect: true },
              { id: 'c', text: 'Figur $41$', isCorrect: false },
              { id: 'd', text: 'Figur $42$', isCorrect: false },
            ],
            solution: 'Vi løser $5n + 1 = 201$: $5n = 200$, $n = 40$.',
          },
          {
            id: '9-7-3-n-quiz1-q2',
            task: 'Følgen starter med $10, 7, 4, 1, -2, \\ldots$ Hva er $a_{15}$?',
            options: [
              { id: 'a', text: '$-35$', isCorrect: false },
              { id: 'b', text: '$-32$', isCorrect: true },
              { id: 'c', text: '$-30$', isCorrect: false },
              { id: 'd', text: '$-28$', isCorrect: false },
            ],
            solution: '$d = -3$. $a_n = -3n + c$. For $n = 1$: $10 = -3 + c$, så $c = 13$. $a_{15} = -3 \\cdot 15 + 13 = -45 + 13 = -32$.',
          },
        ],
      },
    },

    {
      id: '9-7-3-n-section2',
      type: 'text',
      content: `## Kvadratiske formler -- når differansene av differansene er konstante

Hva gjør vi når de første differansene IKKE er konstante? Da tar vi differansene av differansene -- de **andre differansene**. Hvis disse er konstante, er formelen **kvadratisk**: $a_n = an^2 + bn + c$.

La oss se på følgen $3, 8, 15, 24, 35, \\ldots$

| $n$ | $a_n$ | $\\Delta_1$ (1. diff.) | $\\Delta_2$ (2. diff.) |
|-----|--------|----------------------|----------------------|
| 1 | 3 | | |
| 2 | 8 | 5 | |
| 3 | 15 | 7 | 2 |
| 4 | 24 | 9 | 2 |
| 5 | 35 | 11 | 2 |

De andre differansene er konstante ($\\Delta_2 = 2$). Det betyr kvadratisk formel! Vi finner koeffisientene steg for steg:

1. $a = \\frac{\\Delta_2}{2} = \\frac{2}{2} = 1$
2. Formelen er $a_n = n^2 + bn + c$
3. Sett inn $n = 1$: $3 = 1 + b + c$, altså $b + c = 2$
4. Sett inn $n = 2$: $8 = 4 + 2b + c$, altså $2b + c = 4$
5. Trekk ligning 3 fra ligning 4: $b = 2$, og da $c = 0$

$$a_n = n^2 + 2n = n(n + 2)$$

Kontroll: $a_3 = 3 \\cdot 5 = 15$. Stemmer! $a_5 = 5 \\cdot 7 = 35$. Perfekt!`,
    },

    {
      id: '9-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kvadratiske formler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-3-n-quiz2-q0',
            task: 'En tallfølge har andre differanser $\\Delta_2 = 4$. Hva er koeffisienten $a$ i formelen $a_n = an^2 + bn + c$?',
            options: [
              { id: 'a', text: '$a = 4$', isCorrect: false },
              { id: 'b', text: '$a = 2$', isCorrect: true },
              { id: 'c', text: '$a = 1$', isCorrect: false },
              { id: 'd', text: '$a = 8$', isCorrect: false },
            ],
            solution: 'Koeffisienten foran $n^2$ er alltid $a = \\frac{\\Delta_2}{2} = \\frac{4}{2} = 2$.',
          },
          {
            id: '9-7-3-n-quiz2-q1',
            task: 'Følgen $2, 5, 10, 17, 26, \\ldots$ har formelen $a_n = n^2 + 1$. Hva er $a_{10}$?',
            options: [
              { id: 'a', text: '$100$', isCorrect: false },
              { id: 'b', text: '$101$', isCorrect: true },
              { id: 'c', text: '$111$', isCorrect: false },
              { id: 'd', text: '$91$', isCorrect: false },
            ],
            solution: '$a_{10} = 10^2 + 1 = 100 + 1 = 101$.',
          },
          {
            id: '9-7-3-n-quiz2-q2',
            task: 'Følgen $0, 3, 8, 15, 24, \\ldots$ har konstante andre differanser. Hva er formelen?',
            options: [
              { id: 'a', text: '$a_n = n^2 + 1$', isCorrect: false },
              { id: 'b', text: '$a_n = n^2 - 1$', isCorrect: true },
              { id: 'c', text: '$a_n = n^2 - n$', isCorrect: false },
              { id: 'd', text: '$a_n = n^2 + n$', isCorrect: false },
            ],
            solution: 'Andre differanser er $2$ (konstant), så $a = 1$. Med $a_n = n^2 + bn + c$: $n=1$: $0 = 1 + b + c$, $n=2$: $3 = 4 + 2b + c$. Vi får $b = 0$, $c = -1$. Altså $a_n = n^2 - 1 = (n-1)(n+1)$.',
          },
        ],
      },
    },

    {
      id: '9-7-3-n-section3',
      type: 'text',
      content: `## Generalisering fra visuelle figurer

En av de fineste ferdighetene i matematikk er å se en rekke figurer -- bygget av klosser, fyrstikker eller prikker -- og oversette det visuelle mønsteret til en formel.

Nøkkelen er å spørre deg selv: *Hvordan kan jeg dele opp figuren i deler jeg kan telle?*

Tenk på et L-formet mønster av prikker. Figur 1 har 3 prikker, figur 2 har 5, figur 3 har 7. Differansen er $2$ -- konstant! Altså: $a_n = 2n + 1$.

Men vi kan også forstå formelen ut fra figuren: L-en har en vertikal del med $(n+1)$ prikker og en horisontal del med $(n+1)$ prikker, men hjørnet telles bare en gang. Totalt: $2(n+1) - 1 = 2n + 1$.

Denne doble forståelsen -- både algebraisk (via differansetabell) og visuell (via figurens struktur) -- er gull verdt. Den ene bekrefter den andre, og du bygger en dypere forståelse av mønsteret.

**Sjekk alltid formelen:** Sett inn verdier du kjenner. Hvis formelen gir riktig svar for alle kjente ledd, er du på trygg grunn.`,
    },

    {
      id: '9-7-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-7-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på generalisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-3-n-quiz3-q0',
            task: 'En figur bygges med klosser: figur 1 har 2 klosser, figur 2 har 6, figur 3 har 12, figur 4 har 20. Hva er formelen?',
            options: [
              { id: 'a', text: '$a_n = 2n^2$', isCorrect: false },
              { id: 'b', text: '$a_n = n(n+1)$', isCorrect: true },
              { id: 'c', text: '$a_n = n^2 + n + 1$', isCorrect: false },
              { id: 'd', text: '$a_n = 3n - 1$', isCorrect: false },
            ],
            solution: 'Differansene er $4, 6, 8$ (ikke konstant). Andre differanser: $2, 2$ (konstant). Kvadratisk med $a = 1$. Man finner $a_n = n^2 + n = n(n+1)$. Sjekk: $a_3 = 3 \\cdot 4 = 12$. Stemmer!',
          },
          {
            id: '9-7-3-n-quiz3-q1',
            task: 'Hva er det første du gjør for å avgjøre om en formel er lineær eller kvadratisk?',
            options: [
              { id: 'a', text: 'Setter inn $n = 100$ i alle mulige formler', isCorrect: false },
              { id: 'b', text: 'Lager en differansetabell og sjekker om 1. eller 2. differanser er konstante', isCorrect: true },
              { id: 'c', text: 'Ganger alle leddene med hverandre', isCorrect: false },
              { id: 'd', text: 'Sjekker om tallene er partall eller oddetall', isCorrect: false },
            ],
            solution: 'Differansetabellen er nøkkelverktøyet. Konstante 1. differanser betyr lineær formel. Konstante 2. differanser betyr kvadratisk formel.',
          },
        ],
      },
    },

    {
      id: '9-7-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Generalisering** er å finne en formel som beskriver et mønster for alle verdier av $n$.

**Lineær formel** ($a_n = dn + c$): Brukes når de første differansene er konstante. Finn $d$ fra differansene, og $c$ ved innsetting.

**Kvadratisk formel** ($a_n = an^2 + bn + c$): Brukes når de andre differansene er konstante. Finn $a = \\frac{\\Delta_2}{2}$, og deretter $b$ og $c$ ved å løse to ligninger.

**Fremgangsmåte:**
1. Lag en differansetabell
2. Er 1. differansene konstante? Da er formelen lineær.
3. Er 2. differansene konstante? Da er formelen kvadratisk.
4. Finn koeffisientene ved innsetting
5. **Kontroller alltid** at formelen gir riktige verdier for alle kjente ledd!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4 NARRATIV: Rekursive og eksplisitte formler
// ============================================================================

export const CHAPTER_9_7_4_NARRATIV: TextbookChapter = {
  id: '9-7-4-narrativ',
  courseId: '9',
  chapterNumber: '7.4',
  title: 'Rekursive og eksplisitte formler',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende sammenligning av to måter å beskrive tallfølger på -- steg-for-steg (rekursivt) og direkte (eksplisitt) -- med praktiske eksempler fra renter, befolkningsvekst og den berømte Fibonacci-følgen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive strukturar og forandringar i geometriske mønster og tallmønster med figurar, ord og formlar',
  ],
  linkedChapterId: '9-7-4',
  content: [
    {
      id: '9-7-4-n-intro',
      type: 'text',
      content: `## To veier til svaret

Tenk deg at du skal forklare noen hvor du bor. Du kan gjøre det på to måter:

**Steg-for-steg:** «Gå 200 meter fra stasjonen, sving til høyre, gå 300 meter, sving til venstre...» Denne metoden er enkel å forklare, men du må følge alle stegene i rekkefølge.

**Direkte:** «Adressen min er Storgata 15.» Denne metoden lar deg gå rett dit, uten å tenke på mellomstegene.

Tallfølger kan beskrives på nøyaktig samme to måter. En **rekursiv formel** forteller deg hvordan du lager neste ledd fra det forrige -- steg for steg. En **eksplisitt formel** gir deg en oppskrift for å beregne ethvert ledd direkte. Begge har sine styrker, og i dette kapittelet skal vi utforske begge.`,
    },

    {
      id: '9-7-4-n-section1',
      type: 'text',
      content: `## Rekursive formler -- steg for steg

En **rekursiv formel** beskriver hvert ledd ved hjelp av det forrige leddet. Du trenger alltid en startverdi -- uten den kan du ikke begynne.

For en aritmetisk følge med $a_1 = 3$ og $d = 5$, skriver vi rekursivt:

$$a_1 = 3, \\quad a_{n+1} = a_n + 5$$

Følgen blir: $3, 8, 13, 18, 23, \\ldots$ Hvert nytt ledd er det forrige pluss $5$.

For en geometrisk følge med $a_1 = 2$ og $k = 3$:

$$a_1 = 2, \\quad a_{n+1} = 3 \\cdot a_n$$

Følgen blir: $2, 6, 18, 54, 162, \\ldots$ Hvert nytt ledd er det forrige ganger $3$.

Rekursive formler er ofte lette å oppdage. Du ser på hva som skjer fra et ledd til det neste, og skriver det ned. Men de har en svakhet: for å finne $a_{100}$ må du kjenne alle leddene fra $a_1$ til $a_{99}$. Det kan bli mye arbeid!`,
    },

    {
      id: '9-7-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-7-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på rekursive formler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-4-n-quiz1-q0',
            task: 'Følgen er gitt rekursivt: $a_1 = 10$, $a_{n+1} = a_n - 3$. Hva er $a_4$?',
            options: [
              { id: 'a', text: '$4$', isCorrect: false },
              { id: 'b', text: '$1$', isCorrect: true },
              { id: 'c', text: '$-2$', isCorrect: false },
              { id: 'd', text: '$7$', isCorrect: false },
            ],
            solution: '$a_1 = 10$, $a_2 = 7$, $a_3 = 4$, $a_4 = 1$. Vi trekker fra $3$ tre ganger.',
          },
          {
            id: '9-7-4-n-quiz1-q1',
            task: 'Følgen $a_1 = 1$, $a_{n+1} = 2a_n + 1$. Hva er $a_3$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$7$', isCorrect: true },
              { id: 'c', text: '$6$', isCorrect: false },
              { id: 'd', text: '$9$', isCorrect: false },
            ],
            solution: '$a_1 = 1$, $a_2 = 2 \\cdot 1 + 1 = 3$, $a_3 = 2 \\cdot 3 + 1 = 7$.',
          },
          {
            id: '9-7-4-n-quiz1-q2',
            task: 'Hva er den største ulempen med rekursive formler?',
            options: [
              { id: 'a', text: 'De gir feil svar', isCorrect: false },
              { id: 'b', text: 'Du trenger alle foregående ledd for å finne et bestemt ledd', isCorrect: true },
              { id: 'c', text: 'De fungerer bare for aritmetiske følger', isCorrect: false },
              { id: 'd', text: 'De trenger ingen startverdi', isCorrect: false },
            ],
            solution: 'For å finne $a_{100}$ rekursivt må du beregne alle leddene fra $a_1$ til $a_{99}$ først. Med en eksplisitt formel kan du hoppe rett til $a_{100}$.',
          },
        ],
      },
    },

    {
      id: '9-7-4-n-section2',
      type: 'text',
      content: `## Eksplisitte formler -- den direkte veien

En **eksplisitt formel** gir deg det $n$-te leddet direkte som en funksjon av $n$. Du trenger ikke vite noe om de foregående leddene.

For den aritmetiske følgen $3, 8, 13, 18, 23, \\ldots$ er den eksplisitte formelen:

$$a_n = 3 + (n-1) \\cdot 5 = 5n - 2$$

Vil du ha $a_{100}$? Bare sett inn: $a_{100} = 5 \\cdot 100 - 2 = 498$. Ferdig!

For den geometriske følgen $2, 6, 18, 54, \\ldots$ er den eksplisitte formelen:

$$a_n = 2 \\cdot 3^{n-1}$$

Vil du ha $a_{10}$? $a_{10} = 2 \\cdot 3^9 = 2 \\cdot 19\\,683 = 39\\,366$.

Du kan også gå **mellom** de to formlene. Har du den eksplisitte formelen $a_n = 4n + 3$, kan du finne den rekursive: beregn $a_{n+1} - a_n = 4(n+1) + 3 - (4n + 3) = 4$. Altså: $a_1 = 7$, $a_{n+1} = a_n + 4$.

| Egenskap | Rekursiv | Eksplisitt |
|----------|----------|-----------|
| Beskrivelse | Neste ledd fra forrige | Leddet direkte fra $n$ |
| Trenger startverdi? | Ja | Nei |
| Finne $a_{100}$ | Må kjenne $a_1$ til $a_{99}$ | Sett inn $n = 100$ |`,
    },

    {
      id: '9-7-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-7-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på eksplisitte formler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-4-n-quiz2-q0',
            task: 'Formelen $a_n = 3 \\cdot 2^{n-1}$ gir hvilken følge?',
            options: [
              { id: 'a', text: '$3, 6, 12, 24, 48, \\ldots$', isCorrect: true },
              { id: 'b', text: '$2, 6, 18, 54, \\ldots$', isCorrect: false },
              { id: 'c', text: '$3, 5, 7, 9, \\ldots$', isCorrect: false },
              { id: 'd', text: '$3, 9, 27, 81, \\ldots$', isCorrect: false },
            ],
            solution: '$a_1 = 3 \\cdot 2^0 = 3$, $a_2 = 3 \\cdot 2^1 = 6$, $a_3 = 3 \\cdot 2^2 = 12$, $a_4 = 3 \\cdot 2^3 = 24$, $a_5 = 3 \\cdot 2^4 = 48$.',
          },
          {
            id: '9-7-4-n-quiz2-q1',
            task: 'Gjør om $a_n = 4n + 3$ til rekursiv form. Hva blir $a_1$ og regelen?',
            options: [
              { id: 'a', text: '$a_1 = 7$, $a_{n+1} = a_n + 4$', isCorrect: true },
              { id: 'b', text: '$a_1 = 3$, $a_{n+1} = a_n + 4$', isCorrect: false },
              { id: 'c', text: '$a_1 = 7$, $a_{n+1} = 4a_n$', isCorrect: false },
              { id: 'd', text: '$a_1 = 4$, $a_{n+1} = a_n + 3$', isCorrect: false },
            ],
            solution: '$a_1 = 4 \\cdot 1 + 3 = 7$. Differansen: $a_{n+1} - a_n = 4(n+1)+3 - (4n+3) = 4$. Rekursivt: $a_1 = 7$, $a_{n+1} = a_n + 4$.',
          },
        ],
      },
    },

    {
      id: '9-7-4-n-section3',
      type: 'text',
      content: `## Fibonacci og praktiske anvendelser

Noen følger er naturlig rekursive. Den mest berømte er **Fibonacci-følgen**:

$$a_1 = 1, \\quad a_2 = 1, \\quad a_{n+2} = a_n + a_{n+1}$$

Følgen: $1, 1, 2, 3, 5, 8, 13, 21, 34, 55, \\ldots$

Her trenger hvert ledd de *to* foregående -- derfor er den rekursive formelen den naturlige beskrivelsen. Den eksplisitte formelen (Binets formel) inneholder $\\sqrt{5}$ og er ganske avansert.

En fascinerende egenskap: forholdet mellom to påfølgende Fibonacci-tall nærmer seg det **gylne snitt** $\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1{,}618$ etter hvert som tallene blir store. $\\frac{21}{13} \\approx 1{,}615$, $\\frac{34}{21} \\approx 1{,}619$.

Rekursive formler er også nyttige i praktiske situasjoner. Tenk på et bankinnskudd på $1000$ kr med $5\\,\\%$ rente:

$$a_1 = 1000, \\quad a_{n+1} = 1{,}05 \\cdot a_n$$

Den eksplisitte formen er $a_n = 1000 \\cdot 1{,}05^{n-1}$. Etter 20 år: $a_{21} = 1000 \\cdot 1{,}05^{20} \\approx 2653$ kr. Pengene dine har mer enn doblet seg, bare ved å la renten jobbe!`,
    },

    {
      id: '9-7-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-7-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på Fibonacci og praktiske følger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-7-4-n-quiz3-q0',
            task: 'Hva er det 8. Fibonacci-tallet? (Følgen: $1, 1, 2, 3, 5, 8, 13, \\ldots$)',
            options: [
              { id: 'a', text: '$18$', isCorrect: false },
              { id: 'b', text: '$21$', isCorrect: true },
              { id: 'c', text: '$20$', isCorrect: false },
              { id: 'd', text: '$34$', isCorrect: false },
            ],
            solution: '$a_8 = a_6 + a_7 = 8 + 13 = 21$.',
          },
          {
            id: '9-7-4-n-quiz3-q1',
            task: 'Et bankinnskudd på $1000$ kr vokser med $5\\,\\%$ per år. Hva er den eksplisitte formelen?',
            options: [
              { id: 'a', text: '$a_n = 1000 + 50n$', isCorrect: false },
              { id: 'b', text: '$a_n = 1000 \\cdot 1{,}05^{n-1}$', isCorrect: true },
              { id: 'c', text: '$a_n = 1000 \\cdot 0{,}05^n$', isCorrect: false },
              { id: 'd', text: '$a_n = 1050n$', isCorrect: false },
            ],
            solution: 'Geometrisk følge med $a_1 = 1000$ og $k = 1{,}05$. $a_n = 1000 \\cdot 1{,}05^{n-1}$.',
          },
          {
            id: '9-7-4-n-quiz3-q2',
            task: 'Hvilken påstand er USANN?',
            options: [
              { id: 'a', text: 'Alle aritmetiske følger kan skrives med eksplisitt formel', isCorrect: false },
              { id: 'b', text: 'Fibonacci-følgen kan enkelt skrives med en eksplisitt formel', isCorrect: true },
              { id: 'c', text: 'Alle geometriske følger kan skrives rekursivt', isCorrect: false },
              { id: 'd', text: 'En rekursiv formel trenger alltid en startverdi', isCorrect: false },
            ],
            solution: 'Den eksakte eksplisitte formelen for Fibonacci-tallene (Binets formel) inneholder $\\sqrt{5}$ og er ganske komplisert. Fibonacci-følgen er naturlig rekursiv.',
          },
        ],
      },
    },

    {
      id: '9-7-4-n-summary',
      type: 'text',
      content: `## Oppsummering

| Egenskap | Rekursiv formel | Eksplisitt formel |
|----------|-----------------|-------------------|
| Beskrivelse | Neste ledd fra forrige | Leddet direkte fra $n$ |
| Trenger startverdi? | Ja, alltid | Nei |
| Finne $a_{100}$ | Må kjenne $a_1$ til $a_{99}$ | Sett inn $n = 100$ |
| Enkel å oppdage? | Ofte ja | Kan kreve mer arbeid |

**Aritmetisk følge:** Rekursivt $a_{n+1} = a_n + d$. Eksplisitt $a_n = a_1 + (n-1)d$.

**Geometrisk følge:** Rekursivt $a_{n+1} = k \\cdot a_n$. Eksplisitt $a_n = a_1 \\cdot k^{n-1}$.

**Fibonacci-følgen:** Naturlig rekursiv ($a_{n+2} = a_n + a_{n+1}$), ingen enkel eksplisitt form.

**Praktisk bruk:** Renter (geometrisk, $k = 1 + \\frac{r}{100}$), lineær vekst (aritmetisk), befolkningsvekst (geometrisk).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_7_1_NARRATIV,
  CHAPTER_9_7_2_NARRATIV,
  CHAPTER_9_7_3_NARRATIV,
  CHAPTER_9_7_4_NARRATIV,
];
