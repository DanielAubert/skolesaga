/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 8
 *
 * Kapittel 7.1: Primtall og delelighetsregler
 * Kapittel 7.2: Primtallsfaktorisering
 * Kapittel 7.3: Største felles faktor (SFF) og minste felles multiplum (MFM)
 * Kapittel 7.4: Brøk med primtallsfaktorisering
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1 NARRATIV: Primtall og delelighetsregler
// ============================================================================

export const CHAPTER_8_7_1_NARRATIV: TextbookChapter = {
  id: '8-7-1-narrativ',
  courseId: '8',
  chapterNumber: '7.1',
  title: 'Primtall og delelighetsregler',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av primtall -- tallenes «atomer» som ikke kan deles videre -- der vi oppdager delelighetsregler, Eratosthenes\' sil og hvorfor primtall er byggesteinene i all matematikk.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke faktorisering og primtall i berekningar',
  ],
  linkedChapterId: '8-7-1',
  content: [
    {
      id: '8-7-1-n-intro',
      type: 'text',
      content: `## Tallenes atomer

I kjemien er alt bygget opp av atomer. Vann er hydrogen pluss oksygen. Salt er natrium pluss klor. Atomene er de minste byggesteinene -- de kan ikke brytes ned videre.

I matematikken har vi noe lignende: **primtall**. De er tallenes atomer. Alle heltall større enn $1$ kan bygges opp ved å gange primtall sammen, og primtallene selv kan ikke deles videre (uten å få $1$ eller seg selv).

Hva mener vi med det? Ta tallet $12$. Vi kan skrive $12 = 2 \\cdot 6 = 2 \\cdot 2 \\cdot 3$. Her er $2$ og $3$ primtall -- de kan ikke deles opp i mindre faktorer. Tallet $12$ er altså «bygget» av to toere og én treer. Men hva med $7$? Den eneste måten å skrive $7$ som et produkt er $1 \\cdot 7$. Det finnes ingen andre hele tall som ganger sammen og gir $7$. Derfor er $7$ et primtall.

**Definisjon:** Et **primtall** er et naturlig tall større enn $1$ som bare er delelig med $1$ og seg selv. Tall som ikke er primtall (og er større enn $1$) kalles **sammensatte tall**.`,
    },

    {
      id: '8-7-1-n-section1',
      type: 'text',
      content: `## De første primtallene

La oss se på de minste naturlige tallene og sortere dem:

| Tall | Primtall? | Begrunnelse |
|------|-----------|-------------|
| $1$ | Nei | $1$ regnes ikke som primtall (spesiell konvensjon) |
| $2$ | Ja | Bare delelig med $1$ og $2$ |
| $3$ | Ja | Bare delelig med $1$ og $3$ |
| $4$ | Nei | $4 = 2 \\cdot 2$ |
| $5$ | Ja | Bare delelig med $1$ og $5$ |
| $6$ | Nei | $6 = 2 \\cdot 3$ |
| $7$ | Ja | Bare delelig med $1$ og $7$ |
| $8$ | Nei | $8 = 2 \\cdot 4$ |
| $9$ | Nei | $9 = 3 \\cdot 3$ |
| $10$ | Nei | $10 = 2 \\cdot 5$ |

De første primtallene er altså: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, \\ldots$

Legg merke til noe spesielt: **$2$ er det eneste partalls-primtallet**. Alle andre partall er delelige med $2$, så de er sammensatte. Etter $2$ er alle primtall oddetall -- men ikke alle oddetall er primtall ($9 = 3 \\cdot 3$, for eksempel).

En annen viktig observasjon: primtallene blir sjeldnere og sjeldnere jo høyere vi teller, men de tar **aldri slutt**. Det finnes uendelig mange primtall -- noe den greske matematikeren Euklid beviste for over 2300 år siden!`,
    },

    {
      id: '8-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på primtall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-1-n-quiz1-q0',
            task: 'Hvilket av disse tallene er et primtall?',
            options: [
              { id: 'a', text: '$15$', isCorrect: false },
              { id: 'b', text: '$21$', isCorrect: false },
              { id: 'c', text: '$23$', isCorrect: true },
              { id: 'd', text: '$27$', isCorrect: false },
            ],
            solution: '$15 = 3 \\cdot 5$, $21 = 3 \\cdot 7$, $27 = 3 \\cdot 9$. Alle disse er sammensatte. $23$ er bare delelig med $1$ og $23$, så det er et primtall.',
          },
          {
            id: '8-7-1-n-quiz1-q1',
            task: 'Hvorfor regnes ikke $1$ som et primtall?',
            options: [
              { id: 'a', text: 'Fordi $1$ er for lite', isCorrect: false },
              { id: 'b', text: 'Fordi det ville ødelegge entydig primtallsfaktorisering', isCorrect: true },
              { id: 'c', text: 'Fordi $1$ er et oddetall', isCorrect: false },
              { id: 'd', text: 'Fordi $1$ er delelig med $0$', isCorrect: false },
            ],
            solution: 'Hvis $1$ var primtall, kunne vi skrive $12 = 2 \\cdot 2 \\cdot 3$ og $12 = 1 \\cdot 2 \\cdot 2 \\cdot 3$ og $12 = 1 \\cdot 1 \\cdot 2 \\cdot 2 \\cdot 3$ osv. Da ville faktoriseringen ikke være entydig.',
          },
          {
            id: '8-7-1-n-quiz1-q2',
            task: 'Hvor mange partalls-primtall finnes det?',
            options: [
              { id: 'a', text: 'Ingen', isCorrect: false },
              { id: 'b', text: 'Nøyaktig ett ($2$)', isCorrect: true },
              { id: 'c', text: 'Uendelig mange', isCorrect: false },
              { id: 'd', text: 'Ti stykker', isCorrect: false },
            ],
            solution: '$2$ er det eneste partalls-primtallet. Alle andre partall er delelige med $2$ (i tillegg til $1$ og seg selv), så de er sammensatte.',
          },
        ],
      },
    },

    {
      id: '8-7-1-n-section2',
      type: 'text',
      content: `## Delelighetsregler -- snarveier for å sjekke deling

Å avgjøre om et tall er et primtall krever at vi sjekker om det er delelig med mindre tall. Men å dele store tall kan ta tid. Heldigvis finnes det **delelighetsregler** -- snarveier som lar deg avgjøre delelighet ved å se på sifrene:

**Delelig med $2$:** Siste siffer er partall ($0, 2, 4, 6, 8$).
- $374$: siste siffer er $4$ -- delelig med $2$ ✓
- $891$: siste siffer er $1$ -- ikke delelig med $2$ ✗

**Delelig med $3$:** Tverrsummen (summen av sifrene) er delelig med $3$.
- $726$: tverrsum $= 7 + 2 + 6 = 15$. Er $15$ delelig med $3$? Ja, $15 = 3 \\cdot 5$ ✓
- $340$: tverrsum $= 3 + 4 + 0 = 7$. Er $7$ delelig med $3$? Nei ✗

**Delelig med $5$:** Siste siffer er $0$ eller $5$.
- $235$: siste siffer er $5$ ✓
- $748$: siste siffer er $8$ ✗

**Delelig med $9$:** Tverrsummen er delelig med $9$.
- $738$: tverrsum $= 7 + 3 + 8 = 18 = 9 \\cdot 2$ ✓
- $214$: tverrsum $= 2 + 1 + 4 = 7$ ✗

**Delelig med $10$:** Siste siffer er $0$.
- $530$ ✓, $531$ ✗

Merk at regelen for $3$ og $9$ begge bruker tverrsummen. Siden $9 = 3 \\cdot 3$, er ethvert tall som er delelig med $9$ automatisk delelig med $3$ -- men ikke omvendt.`,
    },

    {
      id: '8-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på delelighetsregler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-1-n-quiz2-q0',
            task: 'Er $4\\,563$ delelig med $3$?',
            options: [
              { id: 'a', text: 'Ja, fordi tverrsummen $4 + 5 + 6 + 3 = 18$ er delelig med $3$', isCorrect: true },
              { id: 'b', text: 'Nei, fordi siste siffer er $3$', isCorrect: false },
              { id: 'c', text: 'Ja, fordi siste siffer er oddetall', isCorrect: false },
              { id: 'd', text: 'Nei, fordi tverrsummen er $17$', isCorrect: false },
            ],
            solution: 'Tverrsummen er $4 + 5 + 6 + 3 = 18$. Siden $18$ er delelig med $3$ ($18 = 3 \\cdot 6$), er $4\\,563$ delelig med $3$.',
          },
          {
            id: '8-7-1-n-quiz2-q1',
            task: 'Hvilket tall er delelig med både $2$ og $5$?',
            options: [
              { id: 'a', text: '$125$', isCorrect: false },
              { id: 'b', text: '$234$', isCorrect: false },
              { id: 'c', text: '$370$', isCorrect: true },
              { id: 'd', text: '$345$', isCorrect: false },
            ],
            solution: 'For å være delelig med både $2$ og $5$ må siste siffer være $0$ (det eneste sifferet som er både partall og ender på $0$ eller $5$). $370$ ender på $0$.',
          },
          {
            id: '8-7-1-n-quiz2-q2',
            task: 'Er $891$ delelig med $9$?',
            options: [
              { id: 'a', text: 'Ja, fordi tverrsummen er $18$', isCorrect: true },
              { id: 'b', text: 'Nei, fordi siste siffer er $1$', isCorrect: false },
              { id: 'c', text: 'Nei, fordi $891$ er et oddetall', isCorrect: false },
              { id: 'd', text: 'Ja, fordi $891$ ender på $91$', isCorrect: false },
            ],
            solution: 'Tverrsummen er $8 + 9 + 1 = 18$. Siden $18 = 9 \\cdot 2$, er $891$ delelig med $9$. ($891 = 9 \\cdot 99$.)',
          },
        ],
      },
    },

    {
      id: '8-7-1-n-section3',
      type: 'text',
      content: `## Eratosthenes' sil -- å finne alle primtall

For over 2200 år siden oppfant den greske matematikeren Eratosthenes en genial metode for å finne alle primtall opp til et gitt tall. Metoden kalles **Eratosthenes' sil** (eller «sieve of Eratosthenes»), og den fungerer som et filter:

**Slik gjør du for å finne alle primtall opp til $50$:**

1. Skriv opp alle tall fra $2$ til $50$.
2. Start med det minste tallet ($2$). Det er et primtall. **Stryk alle multipler av $2$**: $4, 6, 8, 10, 12, \\ldots$
3. Neste ustrykte tall er $3$. Det er et primtall. **Stryk alle multipler av $3$**: $6, 9, 12, 15, \\ldots$ (noen er allerede strøket).
4. Neste ustrykte tall er $5$ (fordi $4$ ble strøket i steg 2). Det er et primtall. **Stryk alle multipler av $5$**: $10, 15, 20, 25, \\ldots$
5. Neste ustrykte tall er $7$. Det er et primtall. **Stryk alle multipler av $7$**: $14, 21, 28, 35, 42, 49$.
6. Neste ustrykte tall er $11$. Men $11^2 = 121 > 50$, så vi er ferdige!

Alle ustrykte tall er primtall: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$.

**Hvorfor stopper vi ved $\\sqrt{50} \\approx 7$?** Fordi hvis et sammensatt tall $n$ har en faktor større enn $\\sqrt{n}$, må det også ha en faktor som er *mindre* enn $\\sqrt{n}$. Denne lille faktoren er allerede fanget opp av silingen.

**Praktisk tips:** For å sjekke om et tall $n$ er primtall, trenger du bare å teste om det er delelig med primtall opp til $\\sqrt{n}$. For $n = 97$: $\\sqrt{97} \\approx 9{,}8$, så vi sjekker primtallene $2, 3, 5, 7$. Ingen av dem deler $97$, altså er $97$ et primtall.`,
    },

    {
      id: '8-7-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-7-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på Eratosthenes\' sil:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-1-n-quiz3-q0',
            task: 'I Eratosthenes\' sil: etter at du har strøket multiplene av $2$, $3$, $5$ og $7$, er alle gjenværende tall under $50$ primtall. Hvor mange primtall er det fra $2$ til $50$?',
            options: [
              { id: 'a', text: '$12$', isCorrect: false },
              { id: 'b', text: '$15$', isCorrect: true },
              { id: 'c', text: '$18$', isCorrect: false },
              { id: 'd', text: '$10$', isCorrect: false },
            ],
            solution: 'Primtallene fra $2$ til $50$: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$. Det er $15$ stykker.',
          },
          {
            id: '8-7-1-n-quiz3-q1',
            task: 'For å sjekke om $53$ er et primtall, hvilke primtall trenger du å teste?',
            options: [
              { id: 'a', text: 'Bare $2$ og $3$', isCorrect: false },
              { id: 'b', text: '$2, 3, 5$ og $7$', isCorrect: true },
              { id: 'c', text: 'Alle primtall opp til $53$', isCorrect: false },
              { id: 'd', text: 'Bare $2, 3$ og $5$', isCorrect: false },
            ],
            solution: '$\\sqrt{53} \\approx 7{,}3$. Vi tester primtallene opp til $7$: $53 \\div 2 = 26{,}5$, $53 \\div 3 = 17{,}7$, $53 \\div 5 = 10{,}6$, $53 \\div 7 = 7{,}6$. Ingen gir heltall, så $53$ er et primtall.',
          },
          {
            id: '8-7-1-n-quiz3-q2',
            task: 'Er $51$ et primtall?',
            options: [
              { id: 'a', text: 'Ja, det er et primtall', isCorrect: false },
              { id: 'b', text: 'Nei, $51 = 3 \\cdot 17$', isCorrect: true },
              { id: 'c', text: 'Nei, $51 = 7 \\cdot 7 + 2$', isCorrect: false },
              { id: 'd', text: 'Ja, fordi det er oddetall og ikke ender på $5$', isCorrect: false },
            ],
            solution: 'Tverrsum: $5 + 1 = 6$, som er delelig med $3$. Altså er $51$ delelig med $3$: $51 = 3 \\cdot 17$. Dermed er $51$ sammensatt.',
          },
        ],
      },
    },

    {
      id: '8-7-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Primtall** er tall større enn $1$ som bare er delelig med $1$ og seg selv. De er byggesteinene som alle andre tall er satt sammen av.

De første primtallene: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, \\ldots$

**Delelighetsregler:**

| Deler | Regel |
|-------|-------|
| $2$ | Siste siffer er partall |
| $3$ | Tverrsummen er delelig med $3$ |
| $5$ | Siste siffer er $0$ eller $5$ |
| $9$ | Tverrsummen er delelig med $9$ |
| $10$ | Siste siffer er $0$ |

**Eratosthenes' sil:** Stryk systematisk multipler av $2, 3, 5, 7, \\ldots$ for å finne primtall.

**Primtallstest:** For å sjekke om $n$ er primtall, test delelighet med alle primtall $\\leq \\sqrt{n}$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2 NARRATIV: Primtallsfaktorisering
// ============================================================================

export const CHAPTER_8_7_2_NARRATIV: TextbookChapter = {
  id: '8-7-2-narrativ',
  courseId: '8',
  chapterNumber: '7.2',
  title: 'Primtallsfaktorisering',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av primtallsfaktorisering -- kunsten å bryte ned tall til deres minste byggesteiner -- der vi bruker faktortrær og gjentatt divisjon for å finne den unike oppskriften til hvert tall.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke faktorisering og primtall i berekningar',
  ],
  linkedChapterId: '8-7-2',
  content: [
    {
      id: '8-7-2-n-intro',
      type: 'text',
      content: `## Hvert tall har sin unike oppskrift

Tenk deg at hvert tall er en matrett. Tallet $60$ er en kake med en helt bestemt oppskrift: den inneholder nøyaktig to kopper «$2$», én kopp «$3$» og én kopp «$5$». Vi skriver:

$$60 = 2 \\cdot 2 \\cdot 3 \\cdot 5 = 2^2 \\cdot 3 \\cdot 5$$

Denne nedbrytingen av et tall i et produkt av primtall kalles **primtallsfaktorisering**. Det fantastiske er at oppskriften er **unik** -- det finnes nøyaktig én måte å skrive hvert tall som et produkt av primtall (bortsett fra rekkefølgen). Dette kalles **aritmetikkens fundamentalteorem**.

Ikke engang det størst tenkelige tallet er unntak: det kan alltid brytes ned i en unik samling primtall. Det er som å si at ethvert molekyl kan brytes ned i atomer -- og atomsammensetningen er unik for hvert molekyl.`,
    },

    {
      id: '8-7-2-n-section1',
      type: 'text',
      content: `## Metode 1: Faktortreet

Et **faktortre** er en visuell metode for å faktorisere et tall. Du starter med tallet på toppen og deler det opp i to faktorer. Deretter deler du opp hver faktor videre, helt til alle grenene ender i primtall.

**Eksempel: Faktoriser $72$**

Vi starter med $72$ og finner to faktorer:
- $72 = 8 \\cdot 9$
- $8 = 2 \\cdot 4$, og $4 = 2 \\cdot 2$
- $9 = 3 \\cdot 3$

Alle «bladene» i treet er: $2, 2, 2, 3, 3$

$$72 = 2 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 3 = 2^3 \\cdot 3^2$$

Hva om vi hadde startet med en annen oppdeling?
- $72 = 6 \\cdot 12$
- $6 = 2 \\cdot 3$, og $12 = 4 \\cdot 3 = 2 \\cdot 2 \\cdot 3$

Bladene er fortsatt: $2, 3, 2, 2, 3$. Samme primtall, bare i annen rekkefølge!

**Regler for faktortreet:**
1. Start med tallet på toppen
2. Del opp i to faktorer (velg det som er lettest)
3. Fortsett å dele opp til du bare har primtall
4. Samle alle primtallene (bladene) og skriv dem som et produkt
5. Bruk potensform for gjentatte primtall`,
    },

    {
      id: '8-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på faktortrær:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-2-n-quiz1-q0',
            task: 'Hva er primtallsfaktoriseringen av $48$?',
            options: [
              { id: 'a', text: '$2^3 \\cdot 6$', isCorrect: false },
              { id: 'b', text: '$2^4 \\cdot 3$', isCorrect: true },
              { id: 'c', text: '$2^2 \\cdot 12$', isCorrect: false },
              { id: 'd', text: '$4 \\cdot 12$', isCorrect: false },
            ],
            solution: '$48 = 2 \\cdot 24 = 2 \\cdot 2 \\cdot 12 = 2 \\cdot 2 \\cdot 2 \\cdot 6 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 3 = 2^4 \\cdot 3$.',
          },
          {
            id: '8-7-2-n-quiz1-q1',
            task: 'Hva er primtallsfaktoriseringen av $90$?',
            options: [
              { id: 'a', text: '$2 \\cdot 3^2 \\cdot 5$', isCorrect: true },
              { id: 'b', text: '$2 \\cdot 3 \\cdot 15$', isCorrect: false },
              { id: 'c', text: '$2 \\cdot 5 \\cdot 9$', isCorrect: false },
              { id: 'd', text: '$2^2 \\cdot 3 \\cdot 5$', isCorrect: false },
            ],
            solution: '$90 = 2 \\cdot 45 = 2 \\cdot 9 \\cdot 5 = 2 \\cdot 3 \\cdot 3 \\cdot 5 = 2 \\cdot 3^2 \\cdot 5$.',
          },
          {
            id: '8-7-2-n-quiz1-q2',
            task: 'Hvorfor er svaret $2^3 \\cdot 6$ IKKE en gyldig primtallsfaktorisering?',
            options: [
              { id: 'a', text: 'Fordi $6$ ikke er et primtall', isCorrect: true },
              { id: 'b', text: 'Fordi produktet er feil', isCorrect: false },
              { id: 'c', text: 'Fordi $2^3$ er feil', isCorrect: false },
              { id: 'd', text: 'Fordi vi mangler en faktor', isCorrect: false },
            ],
            solution: '$6 = 2 \\cdot 3$ er et sammensatt tall. I en primtallsfaktorisering skal alle faktorene være primtall. Riktig: $2^3 \\cdot 6 = 2^3 \\cdot 2 \\cdot 3 = 2^4 \\cdot 3$.',
          },
        ],
      },
    },

    {
      id: '8-7-2-n-section2',
      type: 'text',
      content: `## Metode 2: Gjentatt divisjon (stigen)

En mer systematisk metode er **gjentatt divisjon**: del tallet på det minste primtallet som går opp, gjenta med kvotienten, og fortsett til du står igjen med $1$.

**Eksempel: Faktoriser $180$**

Vi setter det opp som en «stige»:

$$180 \\div 2 = 90$$
$$90 \\div 2 = 45$$
$$45 \\div 3 = 15$$
$$15 \\div 3 = 5$$
$$5 \\div 5 = 1$$

Vi samler divisorene: $180 = 2 \\cdot 2 \\cdot 3 \\cdot 3 \\cdot 5 = 2^2 \\cdot 3^2 \\cdot 5$

**Eksempel: Faktoriser $252$**

$$252 \\div 2 = 126$$
$$126 \\div 2 = 63$$
$$63 \\div 3 = 21$$
$$21 \\div 3 = 7$$
$$7 \\div 7 = 1$$

Altså: $252 = 2^2 \\cdot 3^2 \\cdot 7$

**Tip:** Start alltid med det minste primtallet ($2$) og sjekk om det går opp. Hvis ikke, prøv $3$, deretter $5$, deretter $7$, osv. Bruk delelighetsreglene fra forrige kapittel for å sjekke raskt!`,
    },

    {
      id: '8-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på gjentatt divisjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-2-n-quiz2-q0',
            task: 'Hva er primtallsfaktoriseringen av $300$?',
            options: [
              { id: 'a', text: '$2^2 \\cdot 3 \\cdot 5^2$', isCorrect: true },
              { id: 'b', text: '$2 \\cdot 3 \\cdot 5^2$', isCorrect: false },
              { id: 'c', text: '$2^2 \\cdot 3^2 \\cdot 5$', isCorrect: false },
              { id: 'd', text: '$2 \\cdot 3 \\cdot 100$', isCorrect: false },
            ],
            solution: '$300 \\div 2 = 150$, $150 \\div 2 = 75$, $75 \\div 3 = 25$, $25 \\div 5 = 5$, $5 \\div 5 = 1$. Altså $300 = 2^2 \\cdot 3 \\cdot 5^2$.',
          },
          {
            id: '8-7-2-n-quiz2-q1',
            task: 'Hva er primtallsfaktoriseringen av $84$?',
            options: [
              { id: 'a', text: '$2 \\cdot 42$', isCorrect: false },
              { id: 'b', text: '$2^2 \\cdot 3 \\cdot 7$', isCorrect: true },
              { id: 'c', text: '$2 \\cdot 3 \\cdot 14$', isCorrect: false },
              { id: 'd', text: '$4 \\cdot 21$', isCorrect: false },
            ],
            solution: '$84 \\div 2 = 42$, $42 \\div 2 = 21$, $21 \\div 3 = 7$, $7 \\div 7 = 1$. Altså $84 = 2^2 \\cdot 3 \\cdot 7$.',
          },
          {
            id: '8-7-2-n-quiz2-q2',
            task: 'Hva er primtallsfaktoriseringen av $147$?',
            options: [
              { id: 'a', text: '$3 \\cdot 49$', isCorrect: false },
              { id: 'b', text: '$7^2 \\cdot 3$', isCorrect: true },
              { id: 'c', text: '$3 \\cdot 7 \\cdot 7$', isCorrect: false },
              { id: 'd', text: 'Alternativ b og c er begge riktige', isCorrect: false },
            ],
            solution: '$147 \\div 3 = 49$, $49 \\div 7 = 7$, $7 \\div 7 = 1$. Altså $147 = 3 \\cdot 7^2$. (Alternativ c viser det samme uten potensform, men standardformen er $3 \\cdot 7^2$.)',
          },
        ],
      },
    },

    {
      id: '8-7-2-n-section3',
      type: 'text',
      content: `## Potensform og sortering

Når vi skriver primtallsfaktoriseringer, bruker vi **potensform** for å gjøre uttrykket ryddig. I stedet for å skrive $2 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 3$, skriver vi $2^3 \\cdot 3^2$.

Vi sorterer også primfaktorene i **stigende rekkefølge**: minste primtall først.

**Eksempler på ryddig primtallsfaktorisering:**

| Tall | Faktorisering | Potensform |
|------|---------------|------------|
| $36$ | $2 \\cdot 2 \\cdot 3 \\cdot 3$ | $2^2 \\cdot 3^2$ |
| $100$ | $2 \\cdot 2 \\cdot 5 \\cdot 5$ | $2^2 \\cdot 5^2$ |
| $360$ | $2 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 3 \\cdot 5$ | $2^3 \\cdot 3^2 \\cdot 5$ |
| $1000$ | $2 \\cdot 2 \\cdot 2 \\cdot 5 \\cdot 5 \\cdot 5$ | $2^3 \\cdot 5^3$ |

**Husk:** Eksponenten forteller hvor mange ganger primtallet forekommer. Hvis et primtall bare forekommer én gang, skriver vi det uten eksponent (eller med eksponenten $1$): $2 \\cdot 3^2 \\cdot 5$ betyr at $2$ forekommer én gang, $3$ to ganger og $5$ én gang.

Primtallsfaktorisering er nyttig fordi den gir oss en «røntgenbilde» av tallets indre struktur. I de neste kapitlene skal vi se hvordan vi bruker den til å finne SFF, MFM og forenkle brøker.`,
    },

    {
      id: '8-7-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-7-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på potensform:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-2-n-quiz3-q0',
            task: 'Skriv $2 \\cdot 2 \\cdot 3 \\cdot 5 \\cdot 5 \\cdot 5$ i potensform.',
            options: [
              { id: 'a', text: '$2^2 \\cdot 3 \\cdot 5^3$', isCorrect: true },
              { id: 'b', text: '$2^2 \\cdot 3^1 \\cdot 5^2$', isCorrect: false },
              { id: 'c', text: '$2 \\cdot 3 \\cdot 5^3$', isCorrect: false },
              { id: 'd', text: '$2^3 \\cdot 3 \\cdot 5^2$', isCorrect: false },
            ],
            solution: 'Vi teller: to toere ($2^2$), én treer ($3$), tre femmere ($5^3$). Svar: $2^2 \\cdot 3 \\cdot 5^3$.',
          },
          {
            id: '8-7-2-n-quiz3-q1',
            task: 'Hva er tallet $2^3 \\cdot 3 \\cdot 11$ lik?',
            options: [
              { id: 'a', text: '$264$', isCorrect: true },
              { id: 'b', text: '$132$', isCorrect: false },
              { id: 'c', text: '$198$', isCorrect: false },
              { id: 'd', text: '$528$', isCorrect: false },
            ],
            solution: '$2^3 \\cdot 3 \\cdot 11 = 8 \\cdot 3 \\cdot 11 = 24 \\cdot 11 = 264$.',
          },
          {
            id: '8-7-2-n-quiz3-q2',
            task: 'Hva er primtallsfaktoriseringen av $540$?',
            options: [
              { id: 'a', text: '$2^2 \\cdot 3^3 \\cdot 5$', isCorrect: true },
              { id: 'b', text: '$2^3 \\cdot 3^2 \\cdot 5$', isCorrect: false },
              { id: 'c', text: '$2^2 \\cdot 3^2 \\cdot 5^2$', isCorrect: false },
              { id: 'd', text: '$2 \\cdot 3^3 \\cdot 5^2$', isCorrect: false },
            ],
            solution: '$540 \\div 2 = 270$, $270 \\div 2 = 135$, $135 \\div 3 = 45$, $45 \\div 3 = 15$, $15 \\div 3 = 5$, $5 \\div 5 = 1$. Altså $540 = 2^2 \\cdot 3^3 \\cdot 5$.',
          },
        ],
      },
    },

    {
      id: '8-7-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Primtallsfaktorisering** er å skrive et tall som et produkt av primtall. Hvert tall har en unik faktorisering (aritmetikkens fundamentalteorem).

**To metoder:**

| Metode | Fremgangsmåte |
|--------|---------------|
| **Faktortre** | Del tallet i to faktorer, fortsett til du har bare primtall |
| **Gjentatt divisjon** | Del på minste primtall som går opp, gjenta til du får $1$ |

**Potensform:** Skriv gjentatte primfaktorer med eksponent og sorter i stigende rekkefølge.

Eksempel: $360 = 2 \\cdot 2 \\cdot 2 \\cdot 3 \\cdot 3 \\cdot 5 = 2^3 \\cdot 3^2 \\cdot 5$

Bruk delelighetsreglene for å jobbe effektivt:
- Delelig med $2$? Siste siffer er partall
- Delelig med $3$? Tverrsummen er delelig med $3$
- Delelig med $5$? Siste siffer er $0$ eller $5$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3 NARRATIV: Største felles faktor (SFF) og minste felles multiplum (MFM)
// ============================================================================

export const CHAPTER_8_7_3_NARRATIV: TextbookChapter = {
  id: '8-7-3-narrativ',
  courseId: '8',
  chapterNumber: '7.3',
  title: 'Største felles faktor (SFF) og minste felles multiplum (MFM)',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av SFF og MFM -- to sentrale begreper som bygger på primtallsfaktorisering -- der vi lærer å finne hva tall har til felles og hva som forener dem, med praktiske eksempler fra hverdagen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke faktorisering og primtall i berekningar',
  ],
  linkedChapterId: '8-7-3',
  content: [
    {
      id: '8-7-3-n-intro',
      type: 'text',
      content: `## Hva har tallene til felles?

Tenk deg at du skal dele $24$ sjokolader og $36$ kjeks jevnt i poser. Hver pose skal ha like mange sjokolader, og like mange kjeks -- og du vil lage flest mulig poser. Hvor mange poser kan du lage?

Antall poser må gå opp i både $24$ og $36$. Tallene som går opp i $24$ (faktorene) er: $1, 2, 3, 4, 6, 8, 12, 24$. Tallene som går opp i $36$ er: $1, 2, 3, 4, 6, 9, 12, 18, 36$.

**Felles faktorer** -- tall som er i begge listene: $1, 2, 3, 4, 6, 12$.

Den største av dem er $12$. Altså kan du lage $12$ poser (med $2$ sjokolader og $3$ kjeks i hver).

Tallet $12$ kalles **største felles faktor** av $24$ og $36$, og vi skriver $\\text{SFF}(24, 36) = 12$.

Men hva om spørsmålet er annerledes? To busser kjører fra samme holdeplass. Buss A kommer hvert $8.$ minutt, buss B hvert $12.$ minutt. Når kommer de neste gang samtidig? Da trenger vi det **minste felles multiplum**: $\\text{MFM}(8, 12) = 24$ minutter.`,
    },

    {
      id: '8-7-3-n-section1',
      type: 'text',
      content: `## SFF med primtallsfaktorisering

Å liste opp alle faktorer fungerer for små tall, men for store tall trenger vi en bedre metode. Her kommer primtallsfaktorisering til unnsetning!

**Oppskrift for SFF:**
1. Faktoriser begge tallene i primtall
2. Finn primtallene som er **felles** for begge
3. For hvert felles primtall, velg den **laveste** eksponenten
4. Gang sammen

**Eksempel: SFF(72, 120)**

Faktoriser:
$$72 = 2^3 \\cdot 3^2$$
$$120 = 2^3 \\cdot 3 \\cdot 5$$

Felles primtall: $2$ og $3$ (begge forekommer i begge faktoriseringene).

- $2$: laveste eksponent er $\\min(3, 3) = 3$
- $3$: laveste eksponent er $\\min(2, 1) = 1$
- $5$: bare i $120$, ikke felles -- hopp over

$$\\text{SFF}(72, 120) = 2^3 \\cdot 3 = 8 \\cdot 3 = 24$$

**Eksempel: SFF(48, 180)**

$$48 = 2^4 \\cdot 3$$
$$180 = 2^2 \\cdot 3^2 \\cdot 5$$

Felles: $2$ og $3$.
- $2$: $\\min(4, 2) = 2$
- $3$: $\\min(1, 2) = 1$

$$\\text{SFF}(48, 180) = 2^2 \\cdot 3 = 4 \\cdot 3 = 12$$

Intuisjonen: SFF er «det som er felles» -- vi beholder bare det begge tallene deler, og tar minst mulig av hver.`,
    },

    {
      id: '8-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på SFF:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-3-n-quiz1-q0',
            task: 'Hva er $\\text{SFF}(36, 60)$?',
            options: [
              { id: 'a', text: '$6$', isCorrect: false },
              { id: 'b', text: '$12$', isCorrect: true },
              { id: 'c', text: '$18$', isCorrect: false },
              { id: 'd', text: '$24$', isCorrect: false },
            ],
            solution: '$36 = 2^2 \\cdot 3^2$ og $60 = 2^2 \\cdot 3 \\cdot 5$. SFF: $2^{\\min(2,2)} \\cdot 3^{\\min(2,1)} = 2^2 \\cdot 3 = 12$.',
          },
          {
            id: '8-7-3-n-quiz1-q1',
            task: 'Hva er $\\text{SFF}(28, 45)$?',
            options: [
              { id: 'a', text: '$1$', isCorrect: true },
              { id: 'b', text: '$3$', isCorrect: false },
              { id: 'c', text: '$7$', isCorrect: false },
              { id: 'd', text: '$5$', isCorrect: false },
            ],
            solution: '$28 = 2^2 \\cdot 7$ og $45 = 3^2 \\cdot 5$. De har ingen felles primfaktorer! Derfor er $\\text{SFF}(28, 45) = 1$. (Slike tall kalles innbyrdes primiske.)',
          },
          {
            id: '8-7-3-n-quiz1-q2',
            task: '$\\text{SFF}(a, b) = 1$. Hva betyr dette?',
            options: [
              { id: 'a', text: 'Tallene er like', isCorrect: false },
              { id: 'b', text: 'Det ene tallet er $1$', isCorrect: false },
              { id: 'c', text: 'Tallene har ingen felles primfaktorer (innbyrdes primiske)', isCorrect: true },
              { id: 'd', text: 'Begge tallene er primtall', isCorrect: false },
            ],
            solution: 'Når SFF er $1$, betyr det at tallene ikke deler noen primfaktor. De kalles innbyrdes primiske. Eksempel: $8$ og $15$ -- $8 = 2^3$ og $15 = 3 \\cdot 5$, ingen felles primtall.',
          },
        ],
      },
    },

    {
      id: '8-7-3-n-section2',
      type: 'text',
      content: `## MFM med primtallsfaktorisering

**Minste felles multiplum** (MFM) er det minste tallet som begge tallene går opp i. Der SFF finner det tallene deler, finner MFM det som **forener** dem.

**Oppskrift for MFM:**
1. Faktoriser begge tallene i primtall
2. Finn **alle** primtall som forekommer (i minst ett av tallene)
3. For hvert primtall, velg den **høyeste** eksponenten
4. Gang sammen

**Eksempel: MFM(72, 120)**

$$72 = 2^3 \\cdot 3^2$$
$$120 = 2^3 \\cdot 3 \\cdot 5$$

Alle primtall: $2, 3, 5$.
- $2$: høyeste eksponent $= \\max(3, 3) = 3$
- $3$: høyeste eksponent $= \\max(2, 1) = 2$
- $5$: høyeste eksponent $= \\max(0, 1) = 1$

$$\\text{MFM}(72, 120) = 2^3 \\cdot 3^2 \\cdot 5 = 8 \\cdot 9 \\cdot 5 = 360$$

Sjekk: $360 \\div 72 = 5$ ✓ og $360 \\div 120 = 3$ ✓

**Sammenheng mellom SFF og MFM:**

Det finnes en nyttig formel:

$$\\text{SFF}(a, b) \\cdot \\text{MFM}(a, b) = a \\cdot b$$

For $72$ og $120$: $24 \\cdot 360 = 8640 = 72 \\cdot 120$ ✓

Denne formelen gir en snarvei: hvis du allerede har funnet SFF, kan du finne MFM ved divisjon:

$$\\text{MFM}(a, b) = \\frac{a \\cdot b}{\\text{SFF}(a, b)}$$`,
    },

    {
      id: '8-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på MFM:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-3-n-quiz2-q0',
            task: 'Hva er $\\text{MFM}(8, 12)$?',
            options: [
              { id: 'a', text: '$48$', isCorrect: false },
              { id: 'b', text: '$24$', isCorrect: true },
              { id: 'c', text: '$36$', isCorrect: false },
              { id: 'd', text: '$12$', isCorrect: false },
            ],
            solution: '$8 = 2^3$ og $12 = 2^2 \\cdot 3$. MFM: $2^3 \\cdot 3 = 24$. Sjekk: $24 \\div 8 = 3$ ✓ og $24 \\div 12 = 2$ ✓.',
          },
          {
            id: '8-7-3-n-quiz2-q1',
            task: 'Hva er $\\text{MFM}(15, 20)$?',
            options: [
              { id: 'a', text: '$30$', isCorrect: false },
              { id: 'b', text: '$60$', isCorrect: true },
              { id: 'c', text: '$100$', isCorrect: false },
              { id: 'd', text: '$300$', isCorrect: false },
            ],
            solution: '$15 = 3 \\cdot 5$ og $20 = 2^2 \\cdot 5$. MFM: $2^2 \\cdot 3 \\cdot 5 = 60$.',
          },
          {
            id: '8-7-3-n-quiz2-q2',
            task: '$\\text{SFF}(18, 24) = 6$. Hva er $\\text{MFM}(18, 24)$?',
            options: [
              { id: 'a', text: '$72$', isCorrect: true },
              { id: 'b', text: '$48$', isCorrect: false },
              { id: 'c', text: '$36$', isCorrect: false },
              { id: 'd', text: '$96$', isCorrect: false },
            ],
            solution: 'Bruk formelen: $\\text{MFM} = \\frac{18 \\cdot 24}{\\text{SFF}} = \\frac{432}{6} = 72$.',
          },
        ],
      },
    },

    {
      id: '8-7-3-n-section3',
      type: 'text',
      content: `## Praktiske bruksområder

SFF og MFM er ikke bare teori -- de dukker opp i mange praktiske situasjoner.

**SFF i praksis -- dele jevnt:**
Du har $24$ epler og $36$ bananer. Du vil lage flest mulig like fruktposer. $\\text{SFF}(24, 36) = 12$, så du kan lage $12$ poser med $2$ epler og $3$ bananer i hver.

**MFM i praksis -- når ting sammenfaller:**
Du trener svømming hver $3.$ dag og løping hver $5.$ dag. Du trener begge deler i dag. Om hvor mange dager trener du begge deler igjen? $\\text{MFM}(3, 5) = 15$ dager.

**MFM i praksis -- fliser og mønster:**
Du skal flislegge et gulv som er $180$ cm $\\times$ $120$ cm med kvadratiske fliser uten å skjære noen flis. Hva er den største flisstørrelsen? Sidelengden må gå opp i både $180$ og $120$: $\\text{SFF}(180, 120) = 60$ cm.

**SFF med tre tall:**
Finn $\\text{SFF}(12, 18, 24)$. Faktoriser: $12 = 2^2 \\cdot 3$, $18 = 2 \\cdot 3^2$, $24 = 2^3 \\cdot 3$. Felles primtall med laveste eksponent: $2^1 \\cdot 3^1 = 6$.`,
    },

    {
      id: '8-7-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-7-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på praktiske oppgaver:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-3-n-quiz3-q0',
            task: 'To lysfyr blinker. Det ene blinker hvert $6.$ sekund, det andre hvert $10.$ sekund. De blinker nå samtidig. Etter hvor mange sekunder blinker de samtidig igjen?',
            options: [
              { id: 'a', text: '$60$ sekunder', isCorrect: false },
              { id: 'b', text: '$30$ sekunder', isCorrect: true },
              { id: 'c', text: '$16$ sekunder', isCorrect: false },
              { id: 'd', text: '$20$ sekunder', isCorrect: false },
            ],
            solution: '$\\text{MFM}(6, 10)$. $6 = 2 \\cdot 3$, $10 = 2 \\cdot 5$. MFM $= 2 \\cdot 3 \\cdot 5 = 30$ sekunder.',
          },
          {
            id: '8-7-3-n-quiz3-q1',
            task: 'Du har $42$ røde perler og $56$ blå perler, og vil lage flest mulig like armbånd. Hvor mange armbånd kan du lage?',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$14$', isCorrect: true },
              { id: 'c', text: '$21$', isCorrect: false },
              { id: 'd', text: '$28$', isCorrect: false },
            ],
            solution: '$\\text{SFF}(42, 56)$. $42 = 2 \\cdot 3 \\cdot 7$ og $56 = 2^3 \\cdot 7$. SFF $= 2 \\cdot 7 = 14$ armbånd (med $3$ røde og $4$ blå i hvert).',
          },
          {
            id: '8-7-3-n-quiz3-q2',
            task: 'Hva er $\\text{MFM}(4, 6, 10)$?',
            options: [
              { id: 'a', text: '$30$', isCorrect: false },
              { id: 'b', text: '$60$', isCorrect: true },
              { id: 'c', text: '$120$', isCorrect: false },
              { id: 'd', text: '$240$', isCorrect: false },
            ],
            solution: '$4 = 2^2$, $6 = 2 \\cdot 3$, $10 = 2 \\cdot 5$. MFM $= 2^2 \\cdot 3 \\cdot 5 = 60$.',
          },
        ],
      },
    },

    {
      id: '8-7-3-n-summary',
      type: 'text',
      content: `## Oppsummering

| Begrep | Definisjon | Metode |
|--------|-----------|--------|
| **SFF** (Største felles faktor) | Største tall som deler begge | Felles primtall med **laveste** eksponent |
| **MFM** (Minste felles multiplum) | Minste tall begge går opp i | Alle primtall med **høyeste** eksponent |

**Nyttig formel:** $\\text{SFF}(a, b) \\cdot \\text{MFM}(a, b) = a \\cdot b$

**Huskeregel:**
- **SFF:** det tallene *deler* -- ta det minste av det felles
- **MFM:** det som *forener* tallene -- ta det største av alt

**Når bruker du hva?**
- **SFF:** dele jevnt, forenkle brøker, finne fellesnevner
- **MFM:** finne når hendelser sammenfaller, finne fellesnevner i brøk`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4 NARRATIV: Brøk med primtallsfaktorisering
// ============================================================================

export const CHAPTER_8_7_4_NARRATIV: TextbookChapter = {
  id: '8-7-4-narrativ',
  courseId: '8',
  chapterNumber: '7.4',
  title: 'Brøk med primtallsfaktorisering',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av hvordan primtallsfaktorisering gjør brøkregning enklere -- der vi lærer å forenkle brøker effektivt, finne fellesnevnere og forstå sammenhengen mellom SFF, MFM og brøk.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke faktorisering og primtall i berekningar',
  ],
  linkedChapterId: '8-7-4',
  content: [
    {
      id: '8-7-4-n-intro',
      type: 'text',
      content: `## Brøk møter primtall

Du kan allerede forenkle brøker: $\\frac{6}{10} = \\frac{3}{5}$ (del teller og nevner på $2$). Men hva med $\\frac{84}{126}$? Hva skal du dele på? Skal du prøve $2$? $3$? $7$? Og hvordan vet du at du har forenklet helt?

Med primtallsfaktorisering får du svaret direkte og sikkert. Du faktoriserer teller og nevner, stryker felles faktorer, og det som er igjen er brøken i sin enkleste form. Ingen gjetting!

I dette kapittelet skal vi se hvordan primtallsfaktorisering gjør to oppgaver mye enklere:
1. **Forenkle brøker** -- finne den enkleste formen
2. **Finne fellesnevner** -- for å legge sammen eller trekke fra brøker`,
    },

    {
      id: '8-7-4-n-section1',
      type: 'text',
      content: `## Forenkle brøker med primtallsfaktorisering

**Oppskrift:**
1. Faktoriser telleren og nevneren
2. Stryk felles primfaktorer (del begge på SFF)
3. Gang sammen det som er igjen

**Eksempel: Forenkle $\\frac{84}{126}$**

Faktoriser:
$$84 = 2^2 \\cdot 3 \\cdot 7$$
$$126 = 2 \\cdot 3^2 \\cdot 7$$

Stryk felles faktorer -- de minste eksponentene:
- $2$: $\\min(2, 1) = 1$ strykes, igjen: $2^{2-1} = 2$ i teller, $2^{1-1} = 1$ i nevner
- $3$: $\\min(1, 2) = 1$ strykes, igjen: $3^{1-1} = 1$ i teller, $3^{2-1} = 3$ i nevner
- $7$: $\\min(1, 1) = 1$ strykes, igjen: ingenting

$$\\frac{84}{126} = \\frac{\\cancel{2} \\cdot 2 \\cdot \\cancel{3} \\cdot \\cancel{7}}{\\cancel{2} \\cdot \\cancel{3} \\cdot 3 \\cdot \\cancel{7}} = \\frac{2}{3}$$

Vi kan sjekke: $\\text{SFF}(84, 126) = 2 \\cdot 3 \\cdot 7 = 42$. Og $\\frac{84}{126} = \\frac{84 \\div 42}{126 \\div 42} = \\frac{2}{3}$ ✓

**Eksempel: Forenkle $\\frac{60}{90}$**

$$60 = 2^2 \\cdot 3 \\cdot 5$$
$$90 = 2 \\cdot 3^2 \\cdot 5$$

SFF $= 2 \\cdot 3 \\cdot 5 = 30$

$$\\frac{60}{90} = \\frac{60 \\div 30}{90 \\div 30} = \\frac{2}{3}$$`,
    },

    {
      id: '8-7-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-7-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på å forenkle brøker:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-4-n-quiz1-q0',
            task: 'Forenkle $\\frac{48}{72}$.',
            options: [
              { id: 'a', text: '$\\frac{3}{4}$', isCorrect: false },
              { id: 'b', text: '$\\frac{2}{3}$', isCorrect: true },
              { id: 'c', text: '$\\frac{4}{6}$', isCorrect: false },
              { id: 'd', text: '$\\frac{8}{12}$', isCorrect: false },
            ],
            solution: '$48 = 2^4 \\cdot 3$ og $72 = 2^3 \\cdot 3^2$. SFF $= 2^3 \\cdot 3 = 24$. $\\frac{48}{72} = \\frac{48 \\div 24}{72 \\div 24} = \\frac{2}{3}$.',
          },
          {
            id: '8-7-4-n-quiz1-q1',
            task: 'Forenkle $\\frac{75}{100}$.',
            options: [
              { id: 'a', text: '$\\frac{3}{4}$', isCorrect: true },
              { id: 'b', text: '$\\frac{15}{20}$', isCorrect: false },
              { id: 'c', text: '$\\frac{7}{10}$', isCorrect: false },
              { id: 'd', text: '$\\frac{5}{8}$', isCorrect: false },
            ],
            solution: '$75 = 3 \\cdot 5^2$ og $100 = 2^2 \\cdot 5^2$. SFF $= 5^2 = 25$. $\\frac{75}{100} = \\frac{3}{4}$.',
          },
          {
            id: '8-7-4-n-quiz1-q2',
            task: 'Når er en brøk $\\frac{a}{b}$ allerede i enkleste form?',
            options: [
              { id: 'a', text: 'Når $a < b$', isCorrect: false },
              { id: 'b', text: 'Når $a$ og $b$ er oddetall', isCorrect: false },
              { id: 'c', text: 'Når $\\text{SFF}(a, b) = 1$', isCorrect: true },
              { id: 'd', text: 'Når $b$ er et primtall', isCorrect: false },
            ],
            solution: 'Brøken er i enkleste form når teller og nevner ikke har felles primfaktorer -- altså når $\\text{SFF}(a, b) = 1$.',
          },
        ],
      },
    },

    {
      id: '8-7-4-n-section2',
      type: 'text',
      content: `## Fellesnevner med MFM

For å legge sammen (eller trekke fra) brøker med ulike nevnere trenger vi en **fellesnevner** -- et tall som begge nevnerne går opp i. Vi velger den **minste** fellesnevneren, som er nøyaktig $\\text{MFM}$ av nevnerne.

**Eksempel: $\\frac{5}{12} + \\frac{7}{18}$**

Finn fellesnevner: $\\text{MFM}(12, 18)$.

$$12 = 2^2 \\cdot 3$$
$$18 = 2 \\cdot 3^2$$

$$\\text{MFM}(12, 18) = 2^2 \\cdot 3^2 = 4 \\cdot 9 = 36$$

Utvid begge brøkene:
$$\\frac{5}{12} = \\frac{5 \\cdot 3}{12 \\cdot 3} = \\frac{15}{36}$$
$$\\frac{7}{18} = \\frac{7 \\cdot 2}{18 \\cdot 2} = \\frac{14}{36}$$

Legg sammen:
$$\\frac{15}{36} + \\frac{14}{36} = \\frac{29}{36}$$

**Eksempel: $\\frac{3}{8} - \\frac{1}{6}$**

$$\\text{MFM}(8, 6): \\quad 8 = 2^3, \\quad 6 = 2 \\cdot 3$$
$$\\text{MFM} = 2^3 \\cdot 3 = 24$$

$$\\frac{3}{8} = \\frac{9}{24}, \\quad \\frac{1}{6} = \\frac{4}{24}$$

$$\\frac{9}{24} - \\frac{4}{24} = \\frac{5}{24}$$

Hvorfor er MFM bedre enn å bare gange nevnerne? Fordi $12 \\cdot 18 = 216$, men MFM gir $36$ -- et mye mindre tall å jobbe med!`,
    },

    {
      id: '8-7-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-7-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fellesnevner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-4-n-quiz2-q0',
            task: 'Hva er den minste fellesnevneren for $\\frac{1}{4}$ og $\\frac{2}{6}$?',
            options: [
              { id: 'a', text: '$24$', isCorrect: false },
              { id: 'b', text: '$12$', isCorrect: true },
              { id: 'c', text: '$10$', isCorrect: false },
              { id: 'd', text: '$8$', isCorrect: false },
            ],
            solution: '$\\text{MFM}(4, 6)$. $4 = 2^2$, $6 = 2 \\cdot 3$. MFM $= 2^2 \\cdot 3 = 12$.',
          },
          {
            id: '8-7-4-n-quiz2-q1',
            task: 'Regn ut $\\frac{5}{6} + \\frac{3}{10}$.',
            options: [
              { id: 'a', text: '$\\frac{34}{30} = \\frac{17}{15}$', isCorrect: true },
              { id: 'b', text: '$\\frac{8}{16} = \\frac{1}{2}$', isCorrect: false },
              { id: 'c', text: '$\\frac{50}{60} = \\frac{5}{6}$', isCorrect: false },
              { id: 'd', text: '$\\frac{28}{30} = \\frac{14}{15}$', isCorrect: false },
            ],
            solution: 'MFM$(6, 10) = 30$. $\\frac{5}{6} = \\frac{25}{30}$, $\\frac{3}{10} = \\frac{9}{30}$. Sum: $\\frac{25 + 9}{30} = \\frac{34}{30} = \\frac{17}{15}$.',
          },
          {
            id: '8-7-4-n-quiz2-q2',
            task: 'Regn ut $\\frac{7}{15} - \\frac{1}{9}$.',
            options: [
              { id: 'a', text: '$\\frac{16}{45}$', isCorrect: true },
              { id: 'b', text: '$\\frac{6}{6} = 1$', isCorrect: false },
              { id: 'c', text: '$\\frac{2}{5}$', isCorrect: false },
              { id: 'd', text: '$\\frac{14}{45}$', isCorrect: false },
            ],
            solution: 'MFM$(15, 9) = 45$. $\\frac{7}{15} = \\frac{21}{45}$, $\\frac{1}{9} = \\frac{5}{45}$. Differanse: $\\frac{21 - 5}{45} = \\frac{16}{45}$.',
          },
        ],
      },
    },

    {
      id: '8-7-4-n-section3',
      type: 'text',
      content: `## Multiplikasjon og forenkling med primtall

Når du ganger brøker, kan du forenkle **før** du ganger -- noe som sparer deg for store tall. Primtallsfaktorisering gjør dette oversiktlig.

**Eksempel: $\\frac{14}{15} \\cdot \\frac{25}{21}$**

Faktoriser alt:
$$\\frac{14}{15} \\cdot \\frac{25}{21} = \\frac{2 \\cdot 7}{3 \\cdot 5} \\cdot \\frac{5^2}{3 \\cdot 7}$$

Skriv som én brøk:
$$= \\frac{2 \\cdot 7 \\cdot 5^2}{3 \\cdot 5 \\cdot 3 \\cdot 7}$$

Stryk felles faktorer (teller mot nevner):
$$= \\frac{2 \\cdot \\cancel{7} \\cdot \\cancel{5} \\cdot 5}{3 \\cdot \\cancel{5} \\cdot 3 \\cdot \\cancel{7}} = \\frac{2 \\cdot 5}{3 \\cdot 3} = \\frac{10}{9}$$

Uten forenkling hadde vi fått $\\frac{350}{315}$, som vi deretter måtte forenkle -- mye mer arbeid!

**Eksempel: $\\frac{12}{35} \\cdot \\frac{49}{18}$**

$$= \\frac{2^2 \\cdot 3}{5 \\cdot 7} \\cdot \\frac{7^2}{2 \\cdot 3^2} = \\frac{2^2 \\cdot 3 \\cdot 7^2}{5 \\cdot 7 \\cdot 2 \\cdot 3^2}$$

Stryk: $2^1$, $3^1$, $7^1$:

$$= \\frac{2 \\cdot 7}{5 \\cdot 3} = \\frac{14}{15}$$

Denne teknikken -- å faktorisere og forenkle diagonalt -- kalles **kryssforenkling** og er en av de mest nyttige ferdighetene i brøkregning.`,
    },

    {
      id: '8-7-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-7-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på brøkmultiplikasjon med forenkling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-7-4-n-quiz3-q0',
            task: 'Forenkle og regn ut $\\frac{9}{14} \\cdot \\frac{7}{12}$.',
            options: [
              { id: 'a', text: '$\\frac{3}{8}$', isCorrect: true },
              { id: 'b', text: '$\\frac{63}{168}$', isCorrect: false },
              { id: 'c', text: '$\\frac{9}{24}$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{2}$', isCorrect: false },
            ],
            solution: '$\\frac{9}{14} \\cdot \\frac{7}{12} = \\frac{3^2}{2 \\cdot 7} \\cdot \\frac{7}{2^2 \\cdot 3} = \\frac{3^2 \\cdot 7}{2 \\cdot 7 \\cdot 2^2 \\cdot 3} = \\frac{3}{2^3} = \\frac{3}{8}$.',
          },
          {
            id: '8-7-4-n-quiz3-q1',
            task: 'Forenkle $\\frac{36}{77} \\cdot \\frac{11}{24}$.',
            options: [
              { id: 'a', text: '$\\frac{3}{14}$', isCorrect: true },
              { id: 'b', text: '$\\frac{6}{14}$', isCorrect: false },
              { id: 'c', text: '$\\frac{9}{28}$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{7}$', isCorrect: false },
            ],
            solution: '$\\frac{36}{77} \\cdot \\frac{11}{24} = \\frac{2^2 \\cdot 3^2}{7 \\cdot 11} \\cdot \\frac{11}{2^3 \\cdot 3} = \\frac{2^2 \\cdot 3^2 \\cdot 11}{7 \\cdot 11 \\cdot 2^3 \\cdot 3} = \\frac{3}{2 \\cdot 7} = \\frac{3}{14}$.',
          },
          {
            id: '8-7-4-n-quiz3-q2',
            task: 'Hva er fordelen med å forenkle FØR du ganger brøker?',
            options: [
              { id: 'a', text: 'Du får et annet svar', isCorrect: false },
              { id: 'b', text: 'Du slipper å jobbe med store tall', isCorrect: true },
              { id: 'c', text: 'Det er obligatorisk -- ellers er svaret feil', isCorrect: false },
              { id: 'd', text: 'Det endrer brøkens fortegn', isCorrect: false },
            ],
            solution: 'Å forenkle før ganging gir samme svar, men du jobber med mindre tall. $\\frac{14 \\cdot 25}{15 \\cdot 21} = \\frac{350}{315}$ vs. å forenkle først og få $\\frac{10}{9}$ direkte.',
          },
        ],
      },
    },

    {
      id: '8-7-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Primtallsfaktorisering gjør brøkregning enklere og sikrere:

| Oppgave | Metode |
|---------|--------|
| **Forenkle brøk** | Faktoriser teller og nevner, del begge på SFF |
| **Fellesnevner** | Finn MFM av nevnerne, utvid brøkene |
| **Gange brøker** | Faktoriser alt, stryk felles faktorer FØR du ganger |

**Huskeliste:**
- En brøk er i enkleste form når $\\text{SFF}(\\text{teller}, \\text{nevner}) = 1$
- Minste fellesnevner $= \\text{MFM}(\\text{nevner}_1, \\text{nevner}_2)$
- Kryssforenkling: stryk felles primfaktorer mellom teller og nevner (diagonalt) før du ganger
- Primtallsfaktorisering gir deg full kontroll -- ingen gjetting, ingen tvil om at brøken er fullstendig forenklet`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_7_1_NARRATIV,
  CHAPTER_8_7_2_NARRATIV,
  CHAPTER_8_7_3_NARRATIV,
  CHAPTER_8_7_4_NARRATIV,
];
