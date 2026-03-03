/**
 * Matematikk 8. klasse - Del 8: Primtall og faktorisering (KM203)
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Kapittel 7.1: Primtall og delelighetsregler
 * Kapittel 7.2: Primtallsfaktorisering
 * Kapittel 7.3: Største felles faktor (SFF) og minste felles multiplum (MFM)
 * Kapittel 7.4: Brøk med primtallsfaktorisering
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1: Primtall og delelighetsregler
// LK20 KM203: Bruke faktorisering og primtall i berekningar
// ============================================================================

export const CHAPTER_8_7_1: TextbookChapter = {
  id: '8-7-1',
  courseId: '8',
  chapterNumber: '7.1',
  title: 'Primtall og delelighetsregler',
  description: 'Lær hva primtall er, hvordan du skiller dem fra sammensatte tall, og bruk delelighetsregler for å finne faktorer raskt.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke faktorisering og primtall i berekningar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-7-1-intro',
      type: 'text',
      content: `## Primtall og delelighetsregler

Noen tall er helt spesielle. De kan ikke deles opp i mindre biter -- de er byggesteinene som alle andre tall er laget av. Disse tallene kaller vi **primtall**.

Tenk deg at du har 12 kuler. Du kan dele dem i grupper:
- $12 = 2 \\times 6$
- $12 = 3 \\times 4$
- $12 = 2 \\times 2 \\times 3$

Men hva med 7 kuler? Du kan ikke dele 7 kuler i like store grupper (bortsett fra 1 gruppe med 7, eller 7 grupper med 1). Tallet 7 er et primtall.

I dette kapittelet skal du lære:
- Hva primtall og sammensatte tall er
- Hvordan du finner primtall med Eratosthenes' sil
- Praktiske delelighetsregler som gjør det lett å sjekke om et tall er delelig`,
    },

    // ========== DEFINISJON: PRIMTALL ==========
    {
      id: '8-7-1-def-1',
      type: 'definition',
      title: 'Primtall',
      content: `Et **primtall** er et naturlig tall som er større enn $1$ og som bare er delelig med $1$ og seg selv.

De første primtallene er:

$$2, \\; 3, \\; 5, \\; 7, \\; 11, \\; 13, \\; 17, \\; 19, \\; 23, \\; 29, \\; 31, \\ldots$$

**Merk:**
- $1$ er **ikke** et primtall (per definisjon).
- $2$ er det eneste **partalls-primtallet**. Alle andre partall er delelige med $2$ og dermed ikke primtall.
- Det finnes uendelig mange primtall -- vi blir aldri ferdige med å finne dem!`,
    },

    // ========== DEFINISJON: SAMMENSATTE TALL ==========
    {
      id: '8-7-1-def-2',
      type: 'definition',
      title: 'Sammensatte tall',
      content: `Et **sammensatt tall** er et naturlig tall som er større enn $1$ og som har flere faktorer enn bare $1$ og seg selv.

Med andre ord: et sammensatt tall kan skrives som et produkt av to eller flere tall som alle er større enn $1$.

**Eksempler:**
- $6 = 2 \\times 3$ (sammensatt)
- $15 = 3 \\times 5$ (sammensatt)
- $24 = 2 \\times 12 = 3 \\times 8 = 4 \\times 6$ (sammensatt)

Hvert naturlig tall som er storre enn $1$ er enten et **primtall** eller et **sammensatt tall**.`,
    },

    // ========== DEFINISJON: DELELIGHETSREGLER ==========
    {
      id: '8-7-1-def-3',
      type: 'definition',
      title: 'Delelighetsregler',
      content: `Delelighetsregler hjelper oss med å raskt avgjore om et tall er delelig med et annet, uten a utfore divisjonen.

| Delelig med | Regel | Eksempel |
|---|---|---|
| $2$ | Siste siffer er partall ($0, 2, 4, 6, 8$) | $378$: siste siffer er $8$ |
| $3$ | Tverrsummen er delelig med $3$ | $537$: $5 + 3 + 7 = 15$, og $15 : 3 = 5$ |
| $4$ | De to siste sifrene danner et tall delelig med $4$ | $1324$: $24 : 4 = 6$ |
| $5$ | Siste siffer er $0$ eller $5$ | $785$: siste siffer er $5$ |
| $6$ | Delelig med bade $2$ og $3$ | $372$: partall og $3+7+2=12$ |
| $9$ | Tverrsummen er delelig med $9$ | $729$: $7+2+9=18$, og $18 : 9 = 2$ |
| $10$ | Siste siffer er $0$ | $450$: siste siffer er $0$ |

**Tverrsummen** er summen av alle sifrene i tallet.`,
    },

    // ========== TEKST: ERATOSTHENES' SIL ==========
    {
      id: '8-7-1-text-1',
      type: 'text',
      title: 'Eratosthenes\' sil',
      content: `## Eratosthenes' sil

For over 2000 ar siden fant den greske matematikeren Eratosthenes en smart metode for a finne alle primtall opp til et bestemt tall. Metoden kalles **Eratosthenes' sil**.

**Slik gjor du:**

1. Skriv opp alle tall fra $2$ til $100$.
2. Start med det forste tallet ($2$). Det er et primtall. Stryk alle multipler av $2$ (altsa $4, 6, 8, 10, \\ldots$).
3. Ga til det neste tallet som ikke er streket over ($3$). Det er et primtall. Stryk alle multipler av $3$ ($6, 9, 12, 15, \\ldots$).
4. Ga til neste ustrekede tall ($5$). Stryk alle multipler av $5$.
5. Fortsett med $7$. Stryk alle multipler av $7$.
6. Alle tall som star igjen etter at du har silt med $2, 3, 5$ og $7$, er primtall!

**Hvorfor trenger vi bare a sjekke opp til $7$?** Fordi $7^2 = 49$ og $11^2 = 121 > 100$. Alle sammensatte tall opp til $100$ ma ha minst en primfaktor som er $\\leq \\sqrt{100} = 10$.

**Primtallene opp til 100:**

$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,$$
$$53, 59, 61, 67, 71, 73, 79, 83, 89, 97$$

Det er $25$ primtall mellom $1$ og $100$.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Er tallet et primtall?',
      problem: 'Avgjor om folgende tall er primtall eller sammensatte tall:\n\na) $29$\nb) $51$\nc) $97$',
      solution: `**a) Er $29$ et primtall?**

Vi sjekker om $29$ er delelig med primtallene $2, 3$ og $5$:
- $29$ er oddetall, sa det er ikke delelig med $2$.
- Tverrsummen er $2 + 9 = 11$. Siden $11$ ikke er delelig med $3$, er $29$ ikke delelig med $3$.
- Siste siffer er $9$, sa $29$ er ikke delelig med $5$.

Vi trenger bare sjekke primtall opp til $\\sqrt{29} \\approx 5{,}4$, altsa $2, 3$ og $5$.

$29$ er et **primtall**.

**b) Er $51$ et primtall?**

- $51$ er oddetall, sa det er ikke delelig med $2$.
- Tverrsummen er $5 + 1 = 6$. Siden $6 : 3 = 2$, er $51$ **delelig med $3$**.

Vi sjekker: $51 = 3 \\times 17$.

$51$ er et **sammensatt tall**.

**c) Er $97$ et primtall?**

Vi sjekker primtall opp til $\\sqrt{97} \\approx 9{,}8$, altsa $2, 3, 5$ og $7$:
- $97$ er oddetall (ikke delelig med $2$).
- Tverrsummen: $9 + 7 = 16$, ikke delelig med $3$.
- Siste siffer er $7$ (ikke delelig med $5$).
- $97 : 7 = 13{,}86\\ldots$ (ikke delelig med $7$).

$97$ er et **primtall**.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruke delelighetsregler',
      problem: 'Bruk delelighetsreglene til a avgjore hvilke av tallene $2, 3, 4, 5, 6, 9, 10$ som gar opp i $360$.',
      solution: `Vi sjekker $360$ med hver delelighetsregel:

**Delelig med $2$?** Siste siffer er $0$ (partall). **Ja.**

**Delelig med $3$?** Tverrsummen: $3 + 6 + 0 = 9$. Siden $9 : 3 = 3$. **Ja.**

**Delelig med $4$?** De to siste sifrene er $60$, og $60 : 4 = 15$. **Ja.**

**Delelig med $5$?** Siste siffer er $0$. **Ja.**

**Delelig med $6$?** Delelig med bade $2$ og $3$. **Ja.**

**Delelig med $9$?** Tverrsummen er $9$, og $9 : 9 = 1$. **Ja.**

**Delelig med $10$?** Siste siffer er $0$. **Ja.**

$360$ er delelig med alle tallene $2, 3, 4, 5, 6, 9$ og $10$.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Finne primtall i et intervall',
      problem: 'Finn alle primtall mellom $40$ og $60$.',
      solution: `Vi gar gjennom hvert tall og sjekker med delelighetsreglene:

| Tall | Primtall? | Begrunnelse |
|------|-----------|-------------|
| $41$ | Ja | Ikke delelig med $2, 3, 5$ (sjekker opp til $\\sqrt{41} \\approx 6{,}4$) |
| $42$ | Nei | $42 = 2 \\times 21$ |
| $43$ | Ja | Ikke delelig med $2, 3, 5$ |
| $44$ | Nei | $44 = 2 \\times 22$ |
| $45$ | Nei | $45 = 5 \\times 9$ |
| $46$ | Nei | $46 = 2 \\times 23$ |
| $47$ | Ja | Ikke delelig med $2, 3, 5$ |
| $48$ | Nei | $48 = 2 \\times 24$ |
| $49$ | Nei | $49 = 7 \\times 7$ |
| $50$ | Nei | $50 = 2 \\times 25$ |
| $51$ | Nei | $51 = 3 \\times 17$ |
| $52$ | Nei | $52 = 2 \\times 26$ |
| $53$ | Ja | Ikke delelig med $2, 3, 5, 7$ |
| $54$ | Nei | $54 = 2 \\times 27$ |
| $55$ | Nei | $55 = 5 \\times 11$ |
| $56$ | Nei | $56 = 2 \\times 28$ |
| $57$ | Nei | $57 = 3 \\times 19$ |
| $58$ | Nei | $58 = 2 \\times 29$ |
| $59$ | Ja | Ikke delelig med $2, 3, 5, 7$ |

Primtallene mellom $40$ og $60$ er: $41, 43, 47, 53, 59$.`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-7-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjor om tallene er primtall eller sammensatte tall. Begrunn svaret.',
        subTasks: [
          { label: 'a', task: '$17$', solution: 'Primtall. $17$ er bare delelig med $1$ og $17$. Vi sjekker $2, 3$ (opp til $\\sqrt{17} \\approx 4{,}1$): $17$ er oddetall og $1 + 7 = 8$ er ikke delelig med $3$.' },
          { label: 'b', task: '$39$', solution: 'Sammensatt tall. Tverrsummen er $3 + 9 = 12$, som er delelig med $3$. $39 = 3 \\times 13$.' },
          { label: 'c', task: '$53$', solution: 'Primtall. Vi sjekker $2, 3, 5, 7$ (opp til $\\sqrt{53} \\approx 7{,}3$): $53$ er oddetall, tverrsummen $8$ er ikke delelig med $3$, siste siffer er $3$, og $53 : 7 \\approx 7{,}6$.' },
          { label: 'd', task: '$91$', solution: 'Sammensatt tall. $91 = 7 \\times 13$. Mange tror $91$ er et primtall, men det er det ikke!' },
        ],
        solution: 'a) $17$: primtall. b) $39 = 3 \\times 13$: sammensatt. c) $53$: primtall. d) $91 = 7 \\times 13$: sammensatt.',
        hints: ['Sjekk delelighetsreglene for 2, 3, 5 og 7. Du trenger bare sjekke primtall opp til kvadratroten av tallet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-7-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk delelighetsreglene til a avgjore om tallene er delelige med $2$, $3$, $5$ og $9$.',
        subTasks: [
          { label: 'a', task: '$135$', solution: 'Delelig med $3$ (tverrsum $9$), $5$ (siste siffer $5$) og $9$ (tverrsum $9$). Ikke delelig med $2$ (oddetall).' },
          { label: 'b', task: '$240$', solution: 'Delelig med $2$ (partall), $3$ (tverrsum $6$) og $5$ (siste siffer $0$). Ikke delelig med $9$ (tverrsum $6$).' },
          { label: 'c', task: '$567$', solution: 'Delelig med $3$ (tverrsum $18$) og $9$ (tverrsum $18$). Ikke delelig med $2$ (oddetall) eller $5$ (siste siffer $7$).' },
        ],
        solution: 'a) $135$: delelig med $3, 5, 9$. b) $240$: delelig med $2, 3, 5$. c) $567$: delelig med $3, 9$.',
        hints: ['Husk: for a sjekke delelighet med 3 og 9, finn tverrsummen (summen av sifrene).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-7-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle primtall mellom $20$ og $40$.',
        solution: 'Vi sjekker hvert oddetall (partall > 2 er aldri primtall):\n\n$21 = 3 \\times 7$ (nei), $23$ (ja), $25 = 5 \\times 5$ (nei), $27 = 3 \\times 9$ (nei), $29$ (ja), $31$ (ja), $33 = 3 \\times 11$ (nei), $35 = 5 \\times 7$ (nei), $37$ (ja), $39 = 3 \\times 13$ (nei).\n\nPrimtallene mellom $20$ og $40$ er: $23, 29, 31, 37$.',
        hints: ['Du kan utelukke alle partall med en gang. Sjekk sa oddetallene med delelighetsreglene.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-7-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Eratosthenes\' sil til a finne alle primtall opp til $50$. Beskriv fremgangsmaten steg for steg.',
        solution: '**Steg 1:** Stryk multipler av $2$: $4, 6, 8, 10, 12, \\ldots, 50$.\n**Steg 2:** Stryk multipler av $3$: $9, 15, 21, 27, 33, 39, 45$.\n**Steg 3:** Stryk multipler av $5$: $25, 35$.\n**Steg 4:** Stryk multipler av $7$: $49$.\n\nVi trenger bare sjekke opp til $\\sqrt{50} \\approx 7{,}1$, altsa primtallene $2, 3, 5, 7$.\n\nPrimtallene opp til $50$: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$. Det er $15$ primtall.',
        hints: ['Start med a streke ut alle multipler av 2 (unntatt 2 selv), deretter alle multipler av 3 (unntatt 3), og sa videre.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-7-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor det ikke finnes noe partalls-primtall som er storre enn $2$. Bruk dette til a forklare hvorfor alle primtall storre enn $2$ er oddetall.',
        solution: 'Alle partall er delelige med $2$. Hvis et partall $n > 2$, da er $n$ delelig med bade $1$, $2$ og $n$. Siden $n > 2$ har $n$ minst tre faktorer ($1$, $2$ og $n$), og er dermed et sammensatt tall.\n\nDerfor: $2$ er det eneste partalls-primtallet. Alle andre primtall ma vare oddetall, for hvis de var partall, ville de vart delelige med $2$ og dermed sammensatte.',
        hints: ['Tenk pa definisjonen av primtall: bare delelig med 1 og seg selv. Hva skjer hvis tallet ogsa er delelig med 2?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Primtall
- Et **primtall** er et tall storre enn $1$ som bare er delelig med $1$ og seg selv
- $2$ er det eneste partalls-primtallet
- Det finnes uendelig mange primtall

### Sammensatte tall
- Et **sammensatt tall** er et tall storre enn $1$ som har flere enn to faktorer
- Hvert tall $> 1$ er enten primtall eller sammensatt

### Delelighetsregler
- **Delelig med $2$:** siste siffer er partall
- **Delelig med $3$:** tverrsummen er delelig med $3$
- **Delelig med $5$:** siste siffer er $0$ eller $5$
- **Delelig med $9$:** tverrsummen er delelig med $9$

### Eratosthenes' sil
- En metode for a finne alle primtall opp til et bestemt tall
- Stryk systematisk multipler av $2, 3, 5, 7, \\ldots$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2: Primtallsfaktorisering
// LK20 KM203: Bruke faktorisering og primtall i berekningar
// ============================================================================

export const CHAPTER_8_7_2: TextbookChapter = {
  id: '8-7-2',
  courseId: '8',
  chapterNumber: '7.2',
  title: 'Primtallsfaktorisering',
  description: 'Lær a skrive ethvert sammensatt tall som et produkt av primtall ved hjelp av faktortre og gjentatt divisjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke faktorisering og primtall i berekningar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-7-2-intro',
      type: 'text',
      content: `## Primtallsfaktorisering

I forrige kapittel larte vi at primtall er byggesteinene i tallverdenen. Na skal vi se hvordan vi kan **bryte ned** ethvert sammensatt tall til sine primtallsbyggesteiner.

Dette kalles **primtallsfaktorisering**: a skrive et tall som et produkt av bare primtall.

For eksempel:
- $12 = 2 \\times 2 \\times 3 = 2^2 \\times 3$
- $30 = 2 \\times 3 \\times 5$
- $100 = 2 \\times 2 \\times 5 \\times 5 = 2^2 \\times 5^2$

Det fine er at det bare finnes **en** mate a primtallsfaktorisere hvert tall pa (bortsett fra rekkefolgden). Dette kalles **aritmetikkens fundamentalteorem**.

I dette kapittelet laerer du to metoder:
- **Faktortre-metoden** (visuell og oversiktlig)
- **Gjentatt divisjon** (rask og systematisk)`,
    },

    // ========== DEFINISJON: PRIMTALLSFAKTORISERING ==========
    {
      id: '8-7-2-def-1',
      type: 'definition',
      title: 'Primtallsfaktorisering',
      content: `**Primtallsfaktorisering** betyr a skrive et tall som et produkt av bare primtallsfaktorer.

Ethvert naturlig tall storre enn $1$ kan skrives som et produkt av primtall pa en unik mate (opp til rekkefolgde). Dette kalles **aritmetikkens fundamentalteorem**.

**Eksempler:**
- $18 = 2 \\times 3 \\times 3 = 2 \\times 3^2$
- $45 = 3 \\times 3 \\times 5 = 3^2 \\times 5$
- $72 = 2 \\times 2 \\times 2 \\times 3 \\times 3 = 2^3 \\times 3^2$

Vi skriver vanligvis primfaktorene i stigende rekkefolgde og bruker potenser nar en primfaktor gjentar seg.`,
    },

    // ========== DEFINISJON: FAKTORTRE ==========
    {
      id: '8-7-2-def-2',
      type: 'definition',
      title: 'Faktortre',
      content: `Et **faktortre** er en visuell metode for a finne primtallsfaktoriseringen av et tall.

**Fremgangsmate:**
1. Skriv tallet du vil faktorisere pa toppen.
2. Del tallet i to faktorer (bruk gjerne delelighetsregler).
3. Gjenta for hver faktor som ikke er et primtall.
4. Nar alle grener ender i primtall, er du ferdig.
5. Primtallsfaktoriseringen er produktet av alle primtallene i bladnodene (endene av treet).

**Tips:** Det spiller ingen rolle hvilke to faktorer du starter med -- du ender alltid opp med de samme primfaktorene!`,
    },

    // ========== DEFINISJON: GJENTATT DIVISJON ==========
    {
      id: '8-7-2-def-3',
      type: 'definition',
      title: 'Gjentatt divisjon',
      content: `**Gjentatt divisjon** er en systematisk metode for primtallsfaktorisering.

**Fremgangsmate:**
1. Del tallet pa det minste primtallet det er delelig med (start med $2$).
2. Del kvotienten pa det minste primtallet den er delelig med.
3. Fortsett til kvotienten er $1$.
4. Primtallsfaktoriseringen er produktet av alle divisorene.

Vi setter opp utregningen slik:

$$\\begin{array}{r|l} 60 & 2 \\\\ 30 & 2 \\\\ 15 & 3 \\\\ 5 & 5 \\\\ 1 & \\end{array}$$

Altsa: $60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Faktoriser 60',
      problem: 'Finn primtallsfaktoriseringen av $60$ ved hjelp av bade faktortre og gjentatt divisjon.',
      solution: `**Metode 1: Faktortre**

Vi starter med $60$ og deler opp:

$60 = 6 \\times 10$

$6 = 2 \\times 3$ (begge er primtall -- ferdig her)

$10 = 2 \\times 5$ (begge er primtall -- ferdig her)

Primfaktorene i bladnodene: $2, 3, 2, 5$

**Metode 2: Gjentatt divisjon**

$$\\begin{array}{r|l} 60 & 2 \\\\ 30 & 2 \\\\ 15 & 3 \\\\ 5 & 5 \\\\ 1 & \\end{array}$$

**Svar:**

$$60 = 2 \\times 2 \\times 3 \\times 5 = 2^2 \\times 3 \\times 5$$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Faktoriser 84',
      problem: 'Finn primtallsfaktoriseringen av $84$.',
      solution: `Vi bruker gjentatt divisjon:

$84$ er partall, sa vi deler pa $2$:

$$\\begin{array}{r|l} 84 & 2 \\\\ 42 & 2 \\\\ 21 & 3 \\\\ 7 & 7 \\\\ 1 & \\end{array}$$

- $84 \\div 2 = 42$
- $42 \\div 2 = 21$
- $21$ er ikke delelig med $2$, men tverrsummen $2 + 1 = 3$ er delelig med $3$: $21 \\div 3 = 7$
- $7$ er et primtall: $7 \\div 7 = 1$

**Svar:**

$$84 = 2 \\times 2 \\times 3 \\times 7 = 2^2 \\times 3 \\times 7$$`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Faktoriser 180',
      problem: 'Finn primtallsfaktoriseringen av $180$.',
      solution: `Vi bruker gjentatt divisjon:

$$\\begin{array}{r|l} 180 & 2 \\\\ 90 & 2 \\\\ 45 & 3 \\\\ 15 & 3 \\\\ 5 & 5 \\\\ 1 & \\end{array}$$

- $180 \\div 2 = 90$
- $90 \\div 2 = 45$
- $45$ er oddetall. Tverrsummen: $4 + 5 = 9$, delelig med $3$: $45 \\div 3 = 15$
- $15 \\div 3 = 5$
- $5 \\div 5 = 1$

**Svar:**

$$180 = 2 \\times 2 \\times 3 \\times 3 \\times 5 = 2^2 \\times 3^2 \\times 5$$

**Kontroll:** $2^2 \\times 3^2 \\times 5 = 4 \\times 9 \\times 5 = 180$ \\checkmark`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-7-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn primtallsfaktoriseringen av hvert tall.',
        subTasks: [
          { label: 'a', task: '$24$', solution: '$24 = 2 \\times 2 \\times 2 \\times 3 = 2^3 \\times 3$' },
          { label: 'b', task: '$36$', solution: '$36 = 2 \\times 2 \\times 3 \\times 3 = 2^2 \\times 3^2$' },
          { label: 'c', task: '$50$', solution: '$50 = 2 \\times 5 \\times 5 = 2 \\times 5^2$' },
          { label: 'd', task: '$75$', solution: '$75 = 3 \\times 5 \\times 5 = 3 \\times 5^2$' },
        ],
        solution: 'a) $24 = 2^3 \\times 3$. b) $36 = 2^2 \\times 3^2$. c) $50 = 2 \\times 5^2$. d) $75 = 3 \\times 5^2$.',
        hints: ['Start med a dele pa 2 sa mange ganger du kan, deretter 3, sa 5 osv.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-7-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk et faktortre til a finne primtallsfaktoriseringen av hvert tall. Tegn treet og skriv svaret med potenser.',
        subTasks: [
          { label: 'a', task: '$48$', solution: '$48 = 2^4 \\times 3$. Faktortre: $48 = 6 \\times 8$, $6 = 2 \\times 3$, $8 = 2 \\times 4$, $4 = 2 \\times 2$.' },
          { label: 'b', task: '$90$', solution: '$90 = 2 \\times 3^2 \\times 5$. Faktortre: $90 = 9 \\times 10$, $9 = 3 \\times 3$, $10 = 2 \\times 5$.' },
          { label: 'c', task: '$120$', solution: '$120 = 2^3 \\times 3 \\times 5$. Faktortre: $120 = 12 \\times 10$, $12 = 4 \\times 3$, $4 = 2 \\times 2$, $10 = 2 \\times 5$.' },
        ],
        solution: 'a) $48 = 2^4 \\times 3$. b) $90 = 2 \\times 3^2 \\times 5$. c) $120 = 2^3 \\times 3 \\times 5$.',
        hints: ['Del tallet i to faktorer (velg selv hvilke), og fortsett a dele til alle faktorene er primtall.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-7-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn primtallsfaktoriseringen av hvert tall.',
        subTasks: [
          { label: 'a', task: '$126$', solution: '$126 = 2 \\times 63 = 2 \\times 9 \\times 7 = 2 \\times 3^2 \\times 7$' },
          { label: 'b', task: '$200$', solution: '$200 = 2^3 \\times 5^2$. Gjentatt divisjon: $200 \\div 2 = 100$, $100 \\div 2 = 50$, $50 \\div 2 = 25$, $25 \\div 5 = 5$, $5 \\div 5 = 1$.' },
          { label: 'c', task: '$315$', solution: '$315 = 3^2 \\times 5 \\times 7$. Gjentatt divisjon: $315 \\div 3 = 105$, $105 \\div 3 = 35$, $35 \\div 5 = 7$, $7 \\div 7 = 1$.' },
          { label: 'd', task: '$462$', solution: '$462 = 2 \\times 3 \\times 7 \\times 11$. Gjentatt divisjon: $462 \\div 2 = 231$, $231 \\div 3 = 77$, $77 \\div 7 = 11$, $11 \\div 11 = 1$.' },
        ],
        solution: 'a) $126 = 2 \\times 3^2 \\times 7$. b) $200 = 2^3 \\times 5^2$. c) $315 = 3^2 \\times 5 \\times 7$. d) $462 = 2 \\times 3 \\times 7 \\times 11$.',
        hints: ['Bruk gjentatt divisjon. Start med det minste primtallet som gar opp i tallet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-7-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kari pastar at $150 = 2 \\times 3 \\times 25$. Har hun rett? Forklar, og gi riktig primtallsfaktorisering.',
        solution: 'Kari har **ikke** rett. $25$ er ikke et primtall ($25 = 5 \\times 5$). Riktig primtallsfaktorisering:\n\n$150 = 2 \\times 3 \\times 25 = 2 \\times 3 \\times 5 \\times 5 = 2 \\times 3 \\times 5^2$\n\nHusk: i en primtallsfaktorisering ma **alle** faktorene vaere primtall!',
        hints: ['Er alle faktorene i Karis svar primtall?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-7-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et tall har primtallsfaktoriseringen $2^3 \\times 3 \\times 5^2$.',
        subTasks: [
          { label: 'a', task: 'Hvilket tall er dette?', solution: '$2^3 \\times 3 \\times 5^2 = 8 \\times 3 \\times 25 = 600$' },
          { label: 'b', task: 'Finn alle faktorene (delerne) til dette tallet.', solution: 'Faktorene dannes ved a kombinere primfaktorene: $1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 25, 30, 40, 50, 60, 75, 100, 120, 150, 200, 300, 600$. Totalt $24$ faktorer.' },
          { label: 'c', task: 'Hvor mange faktorer har tallet? (Tips: bruk primtallsfaktoriseringen)', solution: 'Antall faktorer = $(3+1)(1+1)(2+1) = 4 \\times 2 \\times 3 = 24$. Eksponentene pluss 1, ganget sammen.' },
        ],
        solution: 'a) $600$. b) $24$ faktorer: $1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 25, 30, 40, 50, 60, 75, 100, 120, 150, 200, 300, 600$. c) $24$ faktorer ($(3+1)(1+1)(2+1)$).',
        hints: ['a) Regn ut potensene og gang sammen.', 'c) Antall faktorer finner du ved a legge til 1 pa hver eksponent og gange sammen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Primtallsfaktorisering
- A skrive et tall som et produkt av bare primtall
- Hvert tall har en **unik** primtallsfaktorisering (aritmetikkens fundamentalteorem)

### Faktortre-metoden
1. Skriv tallet pa toppen
2. Del i to faktorer
3. Fortsett til alle bladnoder er primtall
4. Les av primfaktorene

### Gjentatt divisjon
1. Del pa minste primtall som gar opp
2. Fortsett til kvotienten er $1$
3. Alle divisorene gir primtallsfaktoriseringen

### Skrivemate
- Bruk potenser for gjentatte primfaktorer
- Skriv primfaktorene i stigende rekkefolgde
- Eksempel: $360 = 2^3 \\times 3^2 \\times 5$`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: Storste felles faktor (SFF) og minste felles multiplum (MFM)
// LK20 KM203: Bruke faktorisering og primtall i berekningar
// ============================================================================

export const CHAPTER_8_7_3: TextbookChapter = {
  id: '8-7-3',
  courseId: '8',
  chapterNumber: '7.3',
  title: 'Storste felles faktor (SFF) og minste felles multiplum (MFM)',
  description: 'Lær a finne storste felles faktor og minste felles multiplum ved hjelp av primtallsfaktorisering, og se hvordan dette brukes i praktiske situasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke faktorisering og primtall i berekningar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-7-3-intro',
      type: 'text',
      content: `## Storste felles faktor og minste felles multiplum

Na som du kan primtallsfaktorisere, kan vi bruke dette til a lase to viktige problemer:

1. **Storste felles faktor (SFF):** Hva er det storste tallet som gar opp i bade $a$ og $b$?
2. **Minste felles multiplum (MFM):** Hva er det minste tallet som bade $a$ og $b$ gar opp i?

Disse begrepene har mange praktiske bruksomrader:
- **SFF:** Nar du skal dele noe i like store grupper, eller forkorte broker
- **MFM:** Nar du skal finne fellesnevner, eller nar hendelser synkroniseres

La oss se hvordan primtallsfaktorisering gjor det enkelt a finne bade SFF og MFM!`,
    },

    // ========== DEFINISJON: SFF ==========
    {
      id: '8-7-3-def-1',
      type: 'definition',
      title: 'Storste felles faktor (SFF)',
      content: `**Storste felles faktor** (SFF) av to eller flere tall er det storste tallet som gar opp i (er en faktor i) alle tallene.

**Slik finner du SFF med primtallsfaktorisering:**
1. Primtallsfaktoriser hvert tall.
2. Finn primfaktorene som er **felles** for alle tallene.
3. Velg den **laveste** eksponenten for hver felles primfaktor.
4. Gang de felles primfaktorene sammen.

**Eksempel:** Finn SFF av $36$ og $60$.

$36 = 2^2 \\times 3^2$

$60 = 2^2 \\times 3 \\times 5$

Felles primfaktorer: $2$ og $3$.
- $2$: laveste eksponent er $2$ (bade har $2^2$)
- $3$: laveste eksponent er $1$ ($3^1$ i $60$)

$$\\text{SFF}(36, 60) = 2^2 \\times 3 = 4 \\times 3 = 12$$`,
    },

    // ========== DEFINISJON: MFM ==========
    {
      id: '8-7-3-def-2',
      type: 'definition',
      title: 'Minste felles multiplum (MFM)',
      content: `**Minste felles multiplum** (MFM) av to eller flere tall er det minste positive tallet som er delelig med alle tallene.

**Slik finner du MFM med primtallsfaktorisering:**
1. Primtallsfaktoriser hvert tall.
2. Ta med **alle** primfaktorene som forekommer i minst ett av tallene.
3. Velg den **hoyeste** eksponenten for hver primfaktor.
4. Gang alle primfaktorene sammen.

**Eksempel:** Finn MFM av $36$ og $60$.

$36 = 2^2 \\times 3^2$

$60 = 2^2 \\times 3 \\times 5$

Alle primfaktorer: $2, 3, 5$.
- $2$: hoyeste eksponent er $2$
- $3$: hoyeste eksponent er $2$ ($3^2$ i $36$)
- $5$: hoyeste eksponent er $1$ (finnes bare i $60$)

$$\\text{MFM}(36, 60) = 2^2 \\times 3^2 \\times 5 = 4 \\times 9 \\times 5 = 180$$`,
    },

    // ========== NYTTIG SAMMENHENG ==========
    {
      id: '8-7-3-def-3',
      type: 'definition',
      title: 'Sammenhengen mellom SFF og MFM',
      content: `For to tall $a$ og $b$ gjelder alltid:

$$a \\times b = \\text{SFF}(a, b) \\times \\text{MFM}(a, b)$$

**Eksempel:** For $36$ og $60$:
- $36 \\times 60 = 2160$
- $\\text{SFF} \\times \\text{MFM} = 12 \\times 180 = 2160$ \\checkmark

Denne sammenhengen kan vaere nyttig for a kontrollere svaret ditt, eller for a finne MFM nar du allerede kjenner SFF (og omvendt).`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: SFF og MFM av 48 og 72',
      problem: 'Finn SFF og MFM av $48$ og $72$.',
      solution: `**Steg 1: Primtallsfaktorisering**

$48 = 2 \\times 2 \\times 2 \\times 2 \\times 3 = 2^4 \\times 3$

$72 = 2 \\times 2 \\times 2 \\times 3 \\times 3 = 2^3 \\times 3^2$

**Steg 2: Finn SFF**

Felles primfaktorer: $2$ og $3$.
- $2$: laveste eksponent er $\\min(4, 3) = 3$
- $3$: laveste eksponent er $\\min(1, 2) = 1$

$$\\text{SFF}(48, 72) = 2^3 \\times 3 = 8 \\times 3 = 24$$

**Steg 3: Finn MFM**

Alle primfaktorer: $2$ og $3$.
- $2$: hoyeste eksponent er $\\max(4, 3) = 4$
- $3$: hoyeste eksponent er $\\max(1, 2) = 2$

$$\\text{MFM}(48, 72) = 2^4 \\times 3^2 = 16 \\times 9 = 144$$

**Kontroll:** $48 \\times 72 = 3456$ og $24 \\times 144 = 3456$ \\checkmark`,
    },

    // ========== EKSEMPEL 2: PRAKTISK BRUK ==========
    {
      id: '8-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Dele i like store grupper',
      problem: 'En laerer har $24$ blyanter og $36$ viskelaar. Hun vil lage sa mange identiske pakker som mulig, der hver pakke har like mange blyanter og like mange viskelaar. Hvor mange pakker kan hun lage, og hva er i hver pakke?',
      solution: `Vi ma finne **SFF** av $24$ og $36$, fordi vi vil dele begge mengdene i like store grupper.

**Primtallsfaktorisering:**

$24 = 2^3 \\times 3$

$36 = 2^2 \\times 3^2$

**SFF:**

$$\\text{SFF}(24, 36) = 2^2 \\times 3 = 4 \\times 3 = 12$$

Hun kan lage **$12$ pakker**.

Hver pakke inneholder:
- $24 \\div 12 = 2$ blyanter
- $36 \\div 12 = 3$ viskelaar`,
    },

    // ========== EKSEMPEL 3: SYNKRONISERING ==========
    {
      id: '8-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Synkronisering',
      problem: 'To busser kjorer fra samme holdeplass. Buss A kjorer hvert $12.$ minutt og buss B kjorer hvert $18.$ minutt. Hvis begge bussene starter samtidig klokken 08:00, nar er forste gang de starter samtidig igjen?',
      solution: `Vi ma finne **MFM** av $12$ og $18$, fordi vi leter etter det forste tidspunktet der begge bussenes ruter synkroniseres.

**Primtallsfaktorisering:**

$12 = 2^2 \\times 3$

$18 = 2 \\times 3^2$

**MFM:**

$$\\text{MFM}(12, 18) = 2^2 \\times 3^2 = 4 \\times 9 = 36$$

Bussene starter samtidig igjen etter **$36$ minutter**, altsa klokken **08:36**.

**Kontroll:**
- $36 \\div 12 = 3$ (buss A har kjort $3$ turer)
- $36 \\div 18 = 2$ (buss B har kjort $2$ turer) \\checkmark`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-7-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn SFF av tallparene.',
        subTasks: [
          { label: 'a', task: '$12$ og $18$', solution: '$12 = 2^2 \\times 3$ og $18 = 2 \\times 3^2$. $\\text{SFF}(12, 18) = 2 \\times 3 = 6$.' },
          { label: 'b', task: '$20$ og $30$', solution: '$20 = 2^2 \\times 5$ og $30 = 2 \\times 3 \\times 5$. $\\text{SFF}(20, 30) = 2 \\times 5 = 10$.' },
          { label: 'c', task: '$28$ og $42$', solution: '$28 = 2^2 \\times 7$ og $42 = 2 \\times 3 \\times 7$. $\\text{SFF}(28, 42) = 2 \\times 7 = 14$.' },
        ],
        solution: 'a) $\\text{SFF}(12, 18) = 6$. b) $\\text{SFF}(20, 30) = 10$. c) $\\text{SFF}(28, 42) = 14$.',
        hints: ['Primtallsfaktoriser begge tallene forst, og ta de felles primfaktorene med lavest eksponent.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-7-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn MFM av tallparene.',
        subTasks: [
          { label: 'a', task: '$6$ og $8$', solution: '$6 = 2 \\times 3$ og $8 = 2^3$. $\\text{MFM}(6, 8) = 2^3 \\times 3 = 24$.' },
          { label: 'b', task: '$10$ og $15$', solution: '$10 = 2 \\times 5$ og $15 = 3 \\times 5$. $\\text{MFM}(10, 15) = 2 \\times 3 \\times 5 = 30$.' },
          { label: 'c', task: '$9$ og $12$', solution: '$9 = 3^2$ og $12 = 2^2 \\times 3$. $\\text{MFM}(9, 12) = 2^2 \\times 3^2 = 36$.' },
        ],
        solution: 'a) $\\text{MFM}(6, 8) = 24$. b) $\\text{MFM}(10, 15) = 30$. c) $\\text{MFM}(9, 12) = 36$.',
        hints: ['Primtallsfaktoriser begge tallene, og ta alle primfaktorer med hoyest eksponent.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-7-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn bade SFF og MFM av hvert tallpar.',
        subTasks: [
          { label: 'a', task: '$60$ og $84$', solution: '$60 = 2^2 \\times 3 \\times 5$ og $84 = 2^2 \\times 3 \\times 7$. $\\text{SFF} = 2^2 \\times 3 = 12$. $\\text{MFM} = 2^2 \\times 3 \\times 5 \\times 7 = 420$.' },
          { label: 'b', task: '$45$ og $75$', solution: '$45 = 3^2 \\times 5$ og $75 = 3 \\times 5^2$. $\\text{SFF} = 3 \\times 5 = 15$. $\\text{MFM} = 3^2 \\times 5^2 = 225$.' },
          { label: 'c', task: '$56$ og $98$', solution: '$56 = 2^3 \\times 7$ og $98 = 2 \\times 7^2$. $\\text{SFF} = 2 \\times 7 = 14$. $\\text{MFM} = 2^3 \\times 7^2 = 392$.' },
        ],
        solution: 'a) SFF = $12$, MFM = $420$. b) SFF = $15$, MFM = $225$. c) SFF = $14$, MFM = $392$.',
        hints: ['Primtallsfaktoriser forst. SFF: laveste eksponenter av felles faktorer. MFM: hoyeste eksponenter av alle faktorer.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-7-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bakeri har bakt $54$ kanelboller og $36$ skoleboller. De vil fordele bollene i bokser slik at hver boks har like mange kanelboller og like mange skoleboller, og det ikke blir noen boller til overs. Hva er det storste antallet bokser de kan lage?',
        solution: 'Vi ma finne SFF av $54$ og $36$.\n\n$54 = 2 \\times 3^3$ og $36 = 2^2 \\times 3^2$.\n\n$\\text{SFF}(54, 36) = 2 \\times 3^2 = 2 \\times 9 = 18$\n\nDe kan lage **$18$ bokser**. Hver boks far:\n- $54 \\div 18 = 3$ kanelboller\n- $36 \\div 18 = 2$ skoleboller',
        hints: ['Nar vi skal dele i like store grupper uten rest, bruker vi SFF.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-7-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To fyrtarn blinker med ulik frekvens. Det ene blinker hvert $8.$ sekund, det andre hvert $14.$ sekund. De blinker samtidig na.',
        subTasks: [
          { label: 'a', task: 'Nar blinker de samtidig igjen for forste gang?', solution: '$8 = 2^3$ og $14 = 2 \\times 7$. $\\text{MFM}(8, 14) = 2^3 \\times 7 = 56$. De blinker samtidig igjen etter $56$ sekunder.' },
          { label: 'b', task: 'Hvor mange ganger blinker hvert fyrtarn for de blinker samtidig igjen?', solution: 'Fyrtarn 1: $56 \\div 8 = 7$ ganger. Fyrtarn 2: $56 \\div 14 = 4$ ganger.' },
          { label: 'c', task: 'Hvor mange ganger blinker de samtidig i lopet av $10$ minutter ($600$ sekunder)?', solution: '$600 \\div 56 = 10{,}7...$, sa de blinker samtidig $10$ ganger i lopet av $600$ sekunder (pluss den forste gangen ved start, totalt $11$ ganger).' },
        ],
        solution: 'a) Etter $56$ sekunder. b) Fyrtarn 1: $7$ ganger, fyrtarn 2: $4$ ganger. c) $11$ samtidige blink (inkludert start).',
        hints: ['Nar to hendelser med ulik periode skal synkroniseres, bruker vi MFM.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Storste felles faktor (SFF)
- Det storste tallet som gar opp i alle de gitte tallene
- Bruk **laveste eksponent** av **felles** primfaktorer
- Brukes nar vi skal dele i like store grupper

### Minste felles multiplum (MFM)
- Det minste positive tallet som alle de gitte tallene gar opp i
- Bruk **hoyeste eksponent** av **alle** primfaktorer
- Brukes nar hendelser skal synkroniseres, eller for a finne fellesnevner

### Sammenhengen
$$a \\times b = \\text{SFF}(a, b) \\times \\text{MFM}(a, b)$$

### Huskeregel
- **SFF:** Felles faktorer, laveste eksponent (det **storste** felles)
- **MFM:** Alle faktorer, hoyeste eksponent (det **minste** felles)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4: Brok med primtallsfaktorisering
// LK20 KM203: Bruke faktorisering og primtall i berekningar
// ============================================================================

export const CHAPTER_8_7_4: TextbookChapter = {
  id: '8-7-4',
  courseId: '8',
  chapterNumber: '7.4',
  title: 'Brok med primtallsfaktorisering',
  description: 'Lær a forkorte broker ved hjelp av SFF og finne fellesnevner med MFM. Koble primtallsfaktorisering til brokregning.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke faktorisering og primtall i berekningar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '8-7-4-intro',
      type: 'text',
      content: `## Brok med primtallsfaktorisering

Husker du brokregning fra kapittel 1.2? Da larte du a forkorte broker og finne fellesnevner. Na skal vi se hvordan primtallsfaktorisering gjor begge deler mye enklere og mer systematisk.

**Problemet:** Hvordan forkorter vi $\\frac{36}{84}$ sa mye som mulig?

Du kunne prove a dele teller og nevner pa $2$, sa pa $3$, og sa videre. Men med primtallsfaktorisering finner vi den storste felles faktoren med en gang, og kan forkorte i ett steg!

I dette kapittelet laerer du:
- A forkorte broker effektivt med SFF
- A finne fellesnevner med MFM
- A bruke primtallsfaktorisering i brokaddisjon og -subtraksjon`,
    },

    // ========== DEFINISJON: FORKORTING AV BROK ==========
    {
      id: '8-7-4-def-1',
      type: 'definition',
      title: 'Forkorte brok med SFF',
      content: `A **forkorte** en brok betyr a dele bade teller og nevner pa et felles tall, slik at broken blir enklest mulig.

For a forkorte **maksimalt** (til den er **uforkortelig**), deler vi pa $\\text{SFF}$ av teller og nevner:

$$\\frac{a}{b} = \\frac{a \\div \\text{SFF}(a,b)}{b \\div \\text{SFF}(a,b)}$$

**Eksempel:** Forkort $\\frac{24}{36}$.

$24 = 2^3 \\times 3$ og $36 = 2^2 \\times 3^2$

$\\text{SFF}(24, 36) = 2^2 \\times 3 = 12$

$$\\frac{24}{36} = \\frac{24 \\div 12}{36 \\div 12} = \\frac{2}{3}$$`,
    },

    // ========== DEFINISJON: FELLESNEVNER MED MFM ==========
    {
      id: '8-7-4-def-2',
      type: 'definition',
      title: 'Fellesnevner med MFM',
      content: `Nar vi legger sammen eller trekker fra broker med ulike nevnere, trenger vi en **fellesnevner**. Den **minste** fellesnevneren er $\\text{MFM}$ av nevnerne.

For a legge sammen $\\frac{a}{b} + \\frac{c}{d}$:

1. Finn $\\text{MFM}(b, d)$ -- dette blir fellesnevneren.
2. Utvid hver brok slik at nevneren blir lik MFM.
3. Legg sammen tellerne.

**Eksempel:** Regn ut $\\frac{5}{12} + \\frac{7}{18}$.

$\\text{MFM}(12, 18)$:

$12 = 2^2 \\times 3$ og $18 = 2 \\times 3^2$

$\\text{MFM} = 2^2 \\times 3^2 = 36$

$$\\frac{5}{12} + \\frac{7}{18} = \\frac{5 \\times 3}{36} + \\frac{7 \\times 2}{36} = \\frac{15}{36} + \\frac{14}{36} = \\frac{29}{36}$$`,
    },

    // ========== TIP: KOBLING TIL KAP 1.2 ==========
    {
      id: '8-7-4-tip-1',
      type: 'tip',
      title: 'Kobling til kapittel 1.2',
      content: `I kapittel 1.2 larte du a forkorte broker ved a prove med $2$, $3$, $5$ osv. Na har du et mer systematisk verktoy:

**For metode (kapittel 1.2):**
$\\frac{72}{120} = \\frac{36}{60} = \\frac{18}{30} = \\frac{9}{15} = \\frac{3}{5}$ (fire trinn)

**Na metode (primtallsfaktorisering):**
$72 = 2^3 \\times 3^2$ og $120 = 2^3 \\times 3 \\times 5$

$\\text{SFF} = 2^3 \\times 3 = 24$

$\\frac{72}{120} = \\frac{72 \\div 24}{120 \\div 24} = \\frac{3}{5}$ (ett trinn!)

Primtallsfaktorisering er spesielt nyttig for store tall der det er vanskelig a se hvilke felles faktorer tallene har.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '8-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Forkorte en brok',
      problem: 'Forkort broken $\\frac{84}{126}$ sa mye som mulig.',
      solution: `**Steg 1: Primtallsfaktoriser teller og nevner**

$84 = 2^2 \\times 3 \\times 7$

$126 = 2 \\times 3^2 \\times 7$

**Steg 2: Finn SFF**

Felles primfaktorer med laveste eksponent:

$$\\text{SFF}(84, 126) = 2 \\times 3 \\times 7 = 42$$

**Steg 3: Forkort**

$$\\frac{84}{126} = \\frac{84 \\div 42}{126 \\div 42} = \\frac{2}{3}$$

**Svar:** $\\frac{84}{126} = \\frac{2}{3}$`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '8-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Brokaddisjon med MFM',
      problem: 'Regn ut $\\frac{5}{18} + \\frac{7}{24}$.',
      solution: `**Steg 1: Finn fellesnevner (MFM av nevnerne)**

$18 = 2 \\times 3^2$

$24 = 2^3 \\times 3$

$\\text{MFM}(18, 24) = 2^3 \\times 3^2 = 8 \\times 9 = 72$

**Steg 2: Utvid brokene**

$\\frac{5}{18} = \\frac{5 \\times 4}{72} = \\frac{20}{72}$ (vi ganger med $72 \\div 18 = 4$)

$\\frac{7}{24} = \\frac{7 \\times 3}{72} = \\frac{21}{72}$ (vi ganger med $72 \\div 24 = 3$)

**Steg 3: Legg sammen**

$$\\frac{20}{72} + \\frac{21}{72} = \\frac{41}{72}$$

**Steg 4: Kan vi forkorte?**

$41$ er et primtall, og $72 = 2^3 \\times 3^2$. Siden $41$ ikke er delelig med $2$ eller $3$, er broken allerede uforkortelig.

**Svar:** $\\frac{5}{18} + \\frac{7}{24} = \\frac{41}{72}$`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '8-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Broksubtraksjon',
      problem: 'Regn ut $\\frac{11}{15} - \\frac{3}{10}$.',
      solution: `**Steg 1: Finn fellesnevner**

$15 = 3 \\times 5$

$10 = 2 \\times 5$

$\\text{MFM}(15, 10) = 2 \\times 3 \\times 5 = 30$

**Steg 2: Utvid brokene**

$\\frac{11}{15} = \\frac{11 \\times 2}{30} = \\frac{22}{30}$

$\\frac{3}{10} = \\frac{3 \\times 3}{30} = \\frac{9}{30}$

**Steg 3: Trekk fra**

$$\\frac{22}{30} - \\frac{9}{30} = \\frac{13}{30}$$

**Steg 4: Kan vi forkorte?**

$13$ er et primtall og deler ikke $30 = 2 \\times 3 \\times 5$. Broken er uforkortelig.

**Svar:** $\\frac{11}{15} - \\frac{3}{10} = \\frac{13}{30}$`,
    },

    // ========== OPPGAVER ==========

    {
      id: '8-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-7-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forkort brokene sa mye som mulig ved a bruke primtallsfaktorisering.',
        subTasks: [
          { label: 'a', task: '$\\frac{18}{24}$', solution: '$18 = 2 \\times 3^2$, $24 = 2^3 \\times 3$. $\\text{SFF} = 2 \\times 3 = 6$. $\\frac{18}{24} = \\frac{3}{4}$.' },
          { label: 'b', task: '$\\frac{30}{45}$', solution: '$30 = 2 \\times 3 \\times 5$, $45 = 3^2 \\times 5$. $\\text{SFF} = 3 \\times 5 = 15$. $\\frac{30}{45} = \\frac{2}{3}$.' },
          { label: 'c', task: '$\\frac{42}{56}$', solution: '$42 = 2 \\times 3 \\times 7$, $56 = 2^3 \\times 7$. $\\text{SFF} = 2 \\times 7 = 14$. $\\frac{42}{56} = \\frac{3}{4}$.' },
          { label: 'd', task: '$\\frac{60}{90}$', solution: '$60 = 2^2 \\times 3 \\times 5$, $90 = 2 \\times 3^2 \\times 5$. $\\text{SFF} = 2 \\times 3 \\times 5 = 30$. $\\frac{60}{90} = \\frac{2}{3}$.' },
        ],
        solution: 'a) $\\frac{3}{4}$. b) $\\frac{2}{3}$. c) $\\frac{3}{4}$. d) $\\frac{2}{3}$.',
        hints: ['Primtallsfaktoriser bade teller og nevner, finn SFF, og del begge pa SFF.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-7-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut ved a bruke MFM som fellesnevner.',
        subTasks: [
          { label: 'a', task: '$\\frac{1}{4} + \\frac{1}{6}$', solution: '$\\text{MFM}(4, 6) = 12$. $\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$.' },
          { label: 'b', task: '$\\frac{2}{3} + \\frac{3}{8}$', solution: '$\\text{MFM}(3, 8) = 24$. $\\frac{16}{24} + \\frac{9}{24} = \\frac{25}{24} = 1\\frac{1}{24}$.' },
          { label: 'c', task: '$\\frac{5}{6} - \\frac{1}{4}$', solution: '$\\text{MFM}(6, 4) = 12$. $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.' },
        ],
        solution: 'a) $\\frac{5}{12}$. b) $\\frac{25}{24}$. c) $\\frac{7}{12}$.',
        hints: ['Finn MFM av nevnerne forst, utvid brokene, og regn ut.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-7-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forkort brokene sa mye som mulig.',
        subTasks: [
          { label: 'a', task: '$\\frac{72}{108}$', solution: '$72 = 2^3 \\times 3^2$, $108 = 2^2 \\times 3^3$. $\\text{SFF} = 2^2 \\times 3^2 = 36$. $\\frac{72}{108} = \\frac{2}{3}$.' },
          { label: 'b', task: '$\\frac{140}{196}$', solution: '$140 = 2^2 \\times 5 \\times 7$, $196 = 2^2 \\times 7^2$. $\\text{SFF} = 2^2 \\times 7 = 28$. $\\frac{140}{196} = \\frac{5}{7}$.' },
          { label: 'c', task: '$\\frac{225}{300}$', solution: '$225 = 3^2 \\times 5^2$, $300 = 2^2 \\times 3 \\times 5^2$. $\\text{SFF} = 3 \\times 5^2 = 75$. $\\frac{225}{300} = \\frac{3}{4}$.' },
        ],
        solution: 'a) $\\frac{2}{3}$. b) $\\frac{5}{7}$. c) $\\frac{3}{4}$.',
        hints: ['For store tall er primtallsfaktorisering spesielt nyttig -- start med gjentatt divisjon.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-7-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forkort svaret.',
        subTasks: [
          { label: 'a', task: '$\\frac{7}{12} + \\frac{5}{18}$', solution: '$\\text{MFM}(12, 18) = 36$. $\\frac{21}{36} + \\frac{10}{36} = \\frac{31}{36}$. $31$ er primtall, sa broken er uforkortelig.' },
          { label: 'b', task: '$\\frac{11}{20} - \\frac{3}{16}$', solution: '$\\text{MFM}(20, 16) = 80$. $\\frac{44}{80} - \\frac{15}{80} = \\frac{29}{80}$. $29$ er primtall, sa broken er uforkortelig.' },
          { label: 'c', task: '$\\frac{5}{14} + \\frac{3}{21}$', solution: '$\\text{MFM}(14, 21) = 42$. $\\frac{15}{42} + \\frac{6}{42} = \\frac{21}{42} = \\frac{1}{2}$.' },
        ],
        solution: 'a) $\\frac{31}{36}$. b) $\\frac{29}{80}$. c) $\\frac{1}{2}$.',
        hints: ['Finn MFM av nevnerne, regn ut, og sjekk om svaret kan forkortes.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    {
      id: '8-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-7-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I en klasse fikk $\\frac{12}{30}$ av elevene karakter $5$ eller $6$ pa en prove. I en annen klasse fikk $\\frac{9}{24}$ av elevene karakter $5$ eller $6$.',
        subTasks: [
          { label: 'a', task: 'Forkort begge brokene.', solution: '$\\frac{12}{30}$: $\\text{SFF}(12, 30) = 6$, sa $\\frac{12}{30} = \\frac{2}{5}$. $\\frac{9}{24}$: $\\text{SFF}(9, 24) = 3$, sa $\\frac{9}{24} = \\frac{3}{8}$.' },
          { label: 'b', task: 'Hvilken klasse hadde storst andel med karakter $5$ eller $6$? Begrunn med fellesnevner.', solution: 'Fellesnevner: $\\text{MFM}(5, 8) = 40$. $\\frac{2}{5} = \\frac{16}{40}$ og $\\frac{3}{8} = \\frac{15}{40}$. Siden $\\frac{16}{40} > \\frac{15}{40}$, hadde den forste klassen storst andel.' },
          { label: 'c', task: 'Hva er forskjellen i andel mellom de to klassene?', solution: '$\\frac{16}{40} - \\frac{15}{40} = \\frac{1}{40}$. Forskjellen er $\\frac{1}{40}$, altsa $2{,}5$ prosentpoeng.' },
        ],
        solution: 'a) $\\frac{2}{5}$ og $\\frac{3}{8}$. b) Forste klasse ($\\frac{16}{40} > \\frac{15}{40}$). c) Forskjellen er $\\frac{1}{40}$.',
        hints: ['Forkort forst med SFF, deretter finn fellesnevner med MFM for a sammenligne.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '8-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Forkorte broker med primtallsfaktorisering
1. Primtallsfaktoriser teller og nevner
2. Finn $\\text{SFF}$ av teller og nevner
3. Del bade teller og nevner pa SFF
4. Broken er na uforkortelig

### Fellesnevner med MFM
1. Primtallsfaktoriser nevnerne
2. Finn $\\text{MFM}$ av nevnerne
3. Utvid hver brok slik at nevneren blir lik MFM
4. Regn ut (addisjon/subtraksjon)

### Fordeler med primtallsfaktorisering
- Du finner **SFF** og **MFM** i ett steg
- Spesielt nyttig for store tall
- Systematisk og sikkert
- Du kan alltid kontrollere svaret

### Sammenheng med brokregning
- **Forkorting** bruker SFF
- **Fellesnevner** bruker MFM
- **Sammenligning** av broker bruker fellesnevner`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 8
// ============================================================================

export const MATEMATIKK_8_DEL8_CHAPTERS = [
  CHAPTER_8_7_1,
  CHAPTER_8_7_2,
  CHAPTER_8_7_3,
  CHAPTER_8_7_4,
];
