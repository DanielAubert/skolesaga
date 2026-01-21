/**
 * Tekstbok kapitler for Matematikk 5. klasse
 * Innhold tilpasset barneskoleelever på 5. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: TALL OG TALLFORSTÅELSE
// ============================================================================

export const CHAPTER_5_1_1: TextbookChapter = {
  id: '5-1-1',
  courseId: '5',
  chapterNumber: '1.1',
  title: 'Store tall',
  description: 'Fra tusener til millioner og plassverdisystemet.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive strukturar og mønster i tal og bruke plassverdisystemet',
  ],
  content: [
    {
      id: '5-1-1-intro',
      type: 'text',
      content: `## Hva er store tall?

I hverdagen møter vi mange store tall. Hvor mange mennesker bor i Norge? Hvor langt er det til månen? Hvor mange kroner koster et hus?

For å forstå store tall må vi lære om **plassverdisystemet**. Det betyr at verdien til et siffer bestemmes av **hvor det står** i tallet.`,
    },
    {
      id: '5-1-1-plassverdier',
      type: 'definition',
      title: 'Plassverdier',
      content: `I tallet **5 432** har sifrene disse verdiene:

| Siffer | Plassverdi | Verdi |
|--------|------------|-------|
| 5 | Tusener | 5 000 |
| 4 | Hundrere | 400 |
| 3 | Tiere | 30 |
| 2 | Enere | 2 |

**Totalt:** 5 000 + 400 + 30 + 2 = **5 432**`,
    },
    {
      id: '5-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Hvilken verdi har sifferet?',
      problem: `Hvilket siffer står på tierplassen i tallet 4 738?`,
      solution: `**Løsning:**
La oss se på plassene fra høyre:
- 8 står på **enerplassen**
- 3 står på **tierplassen** ← Svaret!
- 7 står på **hundrerplassen**
- 4 står på **tusenerplassen**

**Svar:** Sifferet **3** står på tierplassen.`,
    },
    {
      id: '5-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken verdi har det understrekede sifferet?',
        subTasks: [
          { label: 'a', task: '$\\underline{3}\\,452$', solution: '$3\\,000$ (tusener)' },
          { label: 'b', task: '$6\\,\\underline{8}71$', solution: '$800$ (hundrere)' },
          { label: 'c', task: '$2\\,34\\underline{5}$', solution: '$5$ (enere)' },
          { label: 'd', task: '$9\\,0\\underline{6}2$', solution: '$60$ (tiere)' },
        ],
        solution: 'a) 3 000, b) 800, c) 5, d) 60',
        hints: ['Tell plassene fra høyre: enere, tiere, hundrere, tusener'],
      },
    },
    {
      id: '5-1-1-millioner',
      type: 'text',
      content: `## Enda større tall

Når tall blir veldig store, bruker vi nye plassverdier:

- **Titusener** (10 000) - ti tusener
- **Hundretusener** (100 000) - hundre tusener
- **Millioner** (1 000 000) - tusen tusener

For å gjøre store tall lettere å lese, bruker vi **mellomrom** mellom gruppene:
- 1 000 000 (en million)
- 5 400 000 (fem millioner fire hundre tusen)`,
    },
    {
      id: '5-1-1-def-millioner',
      type: 'definition',
      title: 'Millioner',
      content: `**En million** = 1 000 000 = tusen tusener

Eksempler fra virkeligheten:
- Norge har ca. **5 millioner** innbyggere
- Det er ca. **384 millioner** meter til månen
- En bil kan koste ca. **500 000** kroner`,
    },
    {
      id: '5-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Les og skriv store tall',
      problem: `a) Skriv tallet "tre millioner to hundre tusen" med siffer.
b) Les tallet 4 750 000 med ord.`,
      solution: `**Løsning:**
a) Tre millioner = 3 000 000
   To hundre tusen = 200 000
   Sammen: **3 200 000**

b) 4 750 000:
   - 4 millioner
   - 7 hundre tusen
   - 5 ti-tusen
   **Svar: Fire millioner sju hundre og femti tusen**`,
    },
    {
      id: '5-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv tallene med siffer',
        subTasks: [
          { label: 'a', task: 'Fem tusen tre hundre', solution: '$5\\,300$' },
          { label: 'b', task: 'Tjuetre tusen', solution: '$23\\,000$' },
          { label: 'c', task: 'To hundre tusen', solution: '$200\\,000$' },
          { label: 'd', task: 'En million fem hundre tusen', solution: '$1\\,500\\,000$' },
        ],
        solution: 'a) 5 300, b) 23 000, c) 200 000, d) 1 500 000',
        hints: ['Tusen = tre nuller, million = seks nuller'],
      },
    },
    {
      id: '5-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '5-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett tallene i rekkefølge fra minst til størst',
        subTasks: [
          { label: 'a', task: '$3\\,500$, $350$, $35\\,000$, $3\\,050$', solution: '$350 < 3\\,050 < 3\\,500 < 35\\,000$' },
          { label: 'b', task: '$125\\,000$, $1\\,250\\,000$, $12\\,500$, $125$', solution: '$125 < 12\\,500 < 125\\,000 < 1\\,250\\,000$' },
        ],
        solution: 'a) 350, 3 050, 3 500, 35 000. b) 125, 12 500, 125 000, 1 250 000',
        hints: ['Tell antall siffer først - flere siffer betyr større tall'],
      },
    },
    {
      id: '5-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '5-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver med store tall',
        subTasks: [
          { label: 'a', task: 'En skole har 650 elever. Hvor mange elever er det på 10 like store skoler?', solution: '$650 \\cdot 10 = 6\\,500$ elever' },
          { label: 'b', task: 'En kommune har 45 000 innbyggere. Nabokommunen har dobbelt så mange. Hvor mange bor i nabokommunen?', solution: '$45\\,000 \\cdot 2 = 90\\,000$ innbyggere' },
        ],
        solution: 'a) 6 500 elever, b) 90 000 innbyggere',
        hints: ['Gange med 10: legg til en null. Gange med 2: doble tallet.'],
      },
    },
  ],
};

export const CHAPTER_5_1_2: TextbookChapter = {
  id: '5-1-2',
  courseId: '5',
  chapterNumber: '1.2',
  title: 'Desimaltall',
  description: 'Tideler, hundredeler og plassverdisystemet for desimaltall.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning med desimaltal',
  ],
  content: [
    {
      id: '5-1-2-intro',
      type: 'text',
      content: `## Hva er desimaltall?

Et **desimaltall** er et tall med komma. Kommaet skiller heltallsdelen fra desimaldelen.

I tallet **3,5** er:
- **3** = heltallsdelen
- **,** = desimaltegnet (komma)
- **5** = desimaldelen (fem tideler)

Desimaltall brukes overalt: priser (49,90 kr), temperaturer (36,5°C), lengder (1,75 m).`,
    },
    {
      id: '5-1-2-def-tideler',
      type: 'definition',
      title: 'Tideler og hundredeler',
      content: `**Tideler** er den første plassen etter komma:
- $0,1$ = én tidel = $\\frac{1}{10}$
- $0,5$ = fem tideler = $\\frac{5}{10}$ = en halv

**Hundredeler** er den andre plassen etter komma:
- $0,01$ = én hundredel = $\\frac{1}{100}$
- $0,25$ = tjuefem hundredeler = $\\frac{25}{100}$ = en firedel`,
    },
    {
      id: '5-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Plassverdier i desimaltall',
      problem: `Hva er verdien til hvert siffer i tallet 2,47?`,
      solution: `**Løsning:**
| Siffer | Plassverdi | Verdi |
|--------|------------|-------|
| 2 | Enere | 2 |
| 4 | Tideler | 0,4 |
| 7 | Hundredeler | 0,07 |

**Totalt:** $2 + 0,4 + 0,07 = 2,47$`,
    },
    {
      id: '5-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er verdien til det understrekede sifferet?',
        subTasks: [
          { label: 'a', task: '$3,\\underline{5}$', solution: '$0,5$ (fem tideler)' },
          { label: 'b', task: '$7,2\\underline{8}$', solution: '$0,08$ (åtte hundredeler)' },
          { label: 'c', task: '$\\underline{4},63$', solution: '$4$ (fire enere)' },
          { label: 'd', task: '$0,\\underline{9}1$', solution: '$0,9$ (ni tideler)' },
        ],
        solution: 'a) 0,5  b) 0,08  c) 4  d) 0,9',
        hints: ['Første siffer etter komma er tideler, andre er hundredeler'],
      },
    },
    {
      id: '5-1-2-tallinje',
      type: 'text',
      content: `## Desimaltall på tallinjen

Desimaltall kan plasseres på en tallinje mellom heltallene:

$0$ --- $0,5$ --- $1$ --- $1,5$ --- $2$ --- $2,5$ --- $3$

Mellom 0 og 1 finner vi:
$0,1$ --- $0,2$ --- $0,3$ --- $0,4$ --- $0,5$ --- $0,6$ --- $0,7$ --- $0,8$ --- $0,9$`,
    },
    {
      id: '5-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne desimaltall',
      problem: `Hvilket tall er størst: 0,8 eller 0,52?`,
      solution: `**Løsning:**
Sammenlign tideler først:
- $0,8$ har **8** tideler
- $0,52$ har **5** tideler

$8 > 5$, så $0,8 > 0,52$

**Svar:** $0,8$ er størst.

*Tips: Du kan tenke at $0,8 = 0,80$*`,
    },
    {
      id: '5-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett inn $<$, $>$ eller $=$',
        subTasks: [
          { label: 'a', task: '$0,6 \\quad \\square \\quad 0,4$', solution: '$0,6 > 0,4$' },
          { label: 'b', task: '$0,35 \\quad \\square \\quad 0,5$', solution: '$0,35 < 0,5$' },
          { label: 'c', task: '$0,70 \\quad \\square \\quad 0,7$', solution: '$0,70 = 0,7$' },
          { label: 'd', task: '$1,2 \\quad \\square \\quad 0,9$', solution: '$1,2 > 0,9$' },
        ],
        solution: 'a) >  b) <  c) =  d) >',
        hints: ['Sammenlign tideler først. 0,70 = 0,7 (nullen på slutten endrer ikke verdien)'],
      },
    },
    {
      id: '5-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '5-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tallene i rekkefølge fra minst til størst',
        subTasks: [
          { label: 'a', task: '$0,7$, $0,3$, $0,9$, $0,1$', solution: '$0,1 < 0,3 < 0,7 < 0,9$' },
          { label: 'b', task: '$2,5$, $2,05$, $2,50$, $2,15$', solution: '$2,05 < 2,15 < 2,5 = 2,50$' },
        ],
        solution: 'a) 0,1, 0,3, 0,7, 0,9  b) 2,05, 2,15, 2,5, 2,50',
        hints: ['Sammenlign siffer for siffer fra venstre'],
      },
    },
    {
      id: '5-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '5-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver',
        subTasks: [
          { label: 'a', task: 'Emma er 1,45 m høy. Broren hennes er 1,52 m høy. Hvem er høyest?', solution: 'Broren (1,52 > 1,45)' },
          { label: 'b', task: 'En vare koster 29,90 kr. Omtrent hvor mange kroner er det?', solution: 'Ca. 30 kr' },
        ],
        solution: 'a) Broren er høyest  b) Ca. 30 kroner',
        hints: ['Sammenlign tierne først, så enerne, så desimalene'],
      },
    },
  ],
};

export const CHAPTER_5_1_3: TextbookChapter = {
  id: '5-1-3',
  courseId: '5',
  chapterNumber: '1.3',
  title: 'Brøkbegrepet',
  description: 'Brøk som del av en helhet, teller og nevner.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'samanlikne og rekne med brøk',
  ],
  content: [
    {
      id: '5-1-3-intro',
      type: 'text',
      content: `## Hva er en brøk?

En **brøk** viser en del av noe helt.

Hvis du deler en pizza i 4 like store biter og spiser 1 bit, har du spist $\\frac{1}{4}$ (en firedel) av pizzaen.

$$\\frac{1}{4}$$

- **1** er **telleren** (hvor mange deler du har)
- **4** er **nevneren** (hvor mange like deler helheten er delt i)
- Streken mellom kalles **brøkstreken**`,
    },
    {
      id: '5-1-3-def-brok',
      type: 'definition',
      title: 'Teller og nevner',
      content: `I brøken $\\frac{3}{5}$:

$$\\frac{\\text{teller}}{\\text{nevner}} = \\frac{3}{5}$$

- **Telleren (3)** forteller hvor mange deler vi har
- **Nevneren (5)** forteller hvor mange like deler helheten er delt i

*Nevneren står **ned** under brøkstreken - begge starter med N!*`,
    },
    {
      id: '5-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese brøker',
      problem: `Hvilken brøk viser den fargede delen?
Et rektangel er delt i 8 like deler. 3 av delene er farget.`,
      solution: `**Løsning:**
- Helheten er delt i **8** like deler → nevneren er 8
- **3** deler er farget → telleren er 3

**Svar:** $\\frac{3}{8}$ (tre åttedeler)`,
    },
    {
      id: '5-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv brøken som passer til beskrivelsen',
        subTasks: [
          { label: 'a', task: 'En sjokolade er delt i 6 biter. Du spiser 2 biter.', solution: '$\\frac{2}{6}$' },
          { label: 'b', task: 'En kake er delt i 8 stykker. Det er 5 stykker igjen.', solution: '$\\frac{5}{8}$' },
          { label: 'c', task: 'En time har 60 minutter. Det har gått 15 minutter.', solution: '$\\frac{15}{60}$' },
        ],
        solution: 'a) 2/6  b) 5/8  c) 15/60',
        hints: ['Nevneren = totalt antall deler. Telleren = hvor mange du har/har brukt.'],
      },
    },
    {
      id: '5-1-3-vanlige-broker',
      type: 'text',
      content: `## Vanlige brøker

Noen brøker brukes ofte og har egne navn:

| Brøk | Navn | Desimaltall |
|------|------|-------------|
| $\\frac{1}{2}$ | En halv | 0,5 |
| $\\frac{1}{4}$ | En firedel (kvart) | 0,25 |
| $\\frac{3}{4}$ | Tre firedeler | 0,75 |
| $\\frac{1}{3}$ | En tredel | 0,333... |
| $\\frac{1}{10}$ | En tidel | 0,1 |`,
    },
    {
      id: '5-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne brøker med lik nevner',
      problem: `Hvilken brøk er størst: $\\frac{3}{8}$ eller $\\frac{5}{8}$?`,
      solution: `**Løsning:**
Begge brøkene har **lik nevner** (8).

Da sammenligner vi bare tellerne:
- $\\frac{3}{8}$ har 3 åttedeler
- $\\frac{5}{8}$ har 5 åttedeler

$5 > 3$, så $\\frac{5}{8} > \\frac{3}{8}$

**Svar:** $\\frac{5}{8}$ er størst.`,
    },
    {
      id: '5-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken brøk er størst?',
        subTasks: [
          { label: 'a', task: '$\\frac{2}{5}$ eller $\\frac{4}{5}$', solution: '$\\frac{4}{5}$' },
          { label: 'b', task: '$\\frac{7}{10}$ eller $\\frac{3}{10}$', solution: '$\\frac{7}{10}$' },
          { label: 'c', task: '$\\frac{1}{4}$ eller $\\frac{3}{4}$', solution: '$\\frac{3}{4}$' },
        ],
        solution: 'a) 4/5  b) 7/10  c) 3/4',
        hints: ['Når nevneren er lik, er brøken med størst teller størst.'],
      },
    },
    {
      id: '5-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '5-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: 'Hva er $\\frac{1}{2}$ av 10?', solution: '$5$' },
          { label: 'b', task: 'Hva er $\\frac{1}{4}$ av 20?', solution: '$5$' },
          { label: 'c', task: 'Hva er $\\frac{3}{4}$ av 8?', solution: '$6$' },
        ],
        solution: 'a) 5  b) 5  c) 6',
        hints: ['Del først på nevneren, gang så med telleren.'],
      },
    },
  ],
};

export const CHAPTER_5_1_4: TextbookChapter = {
  id: '5-1-4',
  courseId: '5',
  chapterNumber: '1.4',
  title: 'Negative tall - introduksjon',
  description: 'Tallinje og tall under null.',
  estimatedMinutes: 30,
  exercises: [],
  competenceGoals: [
    'utforske negative tal i praktiske situasjonar',
  ],
  content: [
    {
      id: '5-1-4-intro',
      type: 'text',
      content: `## Tall under null

Hva skjer når temperaturen blir kaldere enn null grader? Da bruker vi **negative tall**!

Et **negativt tall** er et tall som er mindre enn null. Vi skriver det med et minustegn foran:
- $-5$ (minus fem)
- $-12$ (minus tolv)

Negative tall brukes til:
- **Temperatur**: Det er $-10°C$ ute
- **Høyde**: Heisen går til $-2$ (kjeller)
- **Gjeld**: Du skylder $-50$ kr`,
    },
    {
      id: '5-1-4-tallinje',
      type: 'definition',
      title: 'Tallinjen med negative tall',
      content: `På tallinjen ligger negative tall **til venstre** for null:

$$\\leftarrow -5 \\quad -4 \\quad -3 \\quad -2 \\quad -1 \\quad 0 \\quad 1 \\quad 2 \\quad 3 \\quad 4 \\quad 5 \\rightarrow$$

- Jo lenger til **venstre**, jo **mindre** er tallet
- Jo lenger til **høyre**, jo **større** er tallet
- $-5 < -2$ fordi $-5$ er lenger til venstre`,
    },
    {
      id: '5-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Sammenligne med negative tall',
      problem: `Hvilket tall er minst: $-3$ eller $-7$?`,
      solution: `**Løsning:**
Tenk på tallinjen:
- $-7$ ligger lenger til venstre enn $-3$
- Tall lenger til venstre er mindre

Eller tenk på temperatur:
- $-7°C$ er kaldere enn $-3°C$
- Kaldere = mindre

**Svar:** $-7$ er minst (minst = $-7 < -3$)`,
    },
    {
      id: '5-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett inn $<$ eller $>$',
        subTasks: [
          { label: 'a', task: '$-2 \\quad \\square \\quad 3$', solution: '$-2 < 3$' },
          { label: 'b', task: '$-5 \\quad \\square \\quad -1$', solution: '$-5 < -1$' },
          { label: 'c', task: '$0 \\quad \\square \\quad -4$', solution: '$0 > -4$' },
          { label: 'd', task: '$-10 \\quad \\square \\quad -8$', solution: '$-10 < -8$' },
        ],
        solution: 'a) <  b) <  c) >  d) <',
        hints: ['Tegn en tallinje og se hvilket tall som er lengst til høyre (størst)'],
      },
    },
    {
      id: '5-1-4-temperatur',
      type: 'text',
      content: `## Temperaturendringer

Når temperaturen **stiger**, går vi mot høyre på tallinjen (pluss).
Når temperaturen **synker**, går vi mot venstre på tallinjen (minus).

**Eksempel:**
- Klokka 06:00 var det $-8°C$
- Klokka 12:00 hadde temperaturen steget 12 grader
- Ny temperatur: $-8 + 12 = 4°C$`,
    },
    {
      id: '5-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs temperaturoppgavene',
        subTasks: [
          { label: 'a', task: 'Det er $-5°C$. Temperaturen stiger 8 grader. Hva blir temperaturen?', solution: '$-5 + 8 = 3°C$' },
          { label: 'b', task: 'Det er $2°C$. Temperaturen synker 7 grader. Hva blir temperaturen?', solution: '$2 - 7 = -5°C$' },
          { label: 'c', task: 'Det er $-3°C$. Temperaturen synker 4 grader. Hva blir temperaturen?', solution: '$-3 - 4 = -7°C$' },
        ],
        solution: 'a) 3°C  b) -5°C  c) -7°C',
        hints: ['Stiger = legg til, synker = trekk fra'],
      },
    },
    {
      id: '5-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '5-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett tallene i rekkefølge fra minst til størst',
        subTasks: [
          { label: 'a', task: '$5, -3, 0, -7, 2$', solution: '$-7 < -3 < 0 < 2 < 5$' },
          { label: 'b', task: '$-1, -10, 4, -4, 1$', solution: '$-10 < -4 < -1 < 1 < 4$' },
        ],
        solution: 'a) -7, -3, 0, 2, 5  b) -10, -4, -1, 1, 4',
        hints: ['Negative tall er alltid mindre enn positive. Blant negative er det med størst tall minst.'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 2: DE FIRE REGNEARTENE
// ============================================================================

export const CHAPTER_5_2_1: TextbookChapter = {
  id: '5-2-1',
  courseId: '5',
  chapterNumber: '2.1',
  title: 'Addisjon og subtraksjon',
  description: 'Regning med flersifrede tall og veksling.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utvikle og bruke metodar for hovudrekning, overslagsrekning og skriftleg rekning',
  ],
  content: [
    {
      id: '5-2-1-intro',
      type: 'text',
      content: `## Addisjon med flersifrede tall

Når vi legger sammen tall, kaller vi det **addisjon**. Svaret kalles **summen**.

$$1234 + 567 = 1801$$

For å regne ut addisjon med store tall, setter vi tallene **under hverandre** slik at enere står under enere, tiere under tiere, osv.`,
    },
    {
      id: '5-2-1-oppstilling',
      type: 'definition',
      title: 'Oppstilt addisjon',
      content: `Sett tallene under hverandre:
\`\`\`
    1234
  +  567
  ------
    1801
\`\`\`

**Fremgangsmåte:**
1. Start med **enerne**: $4 + 7 = 11$ → skriv 1, mente 1
2. Så **tierne**: $3 + 6 + 1 = 10$ → skriv 0, mente 1
3. Så **hundrerne**: $2 + 5 + 1 = 8$
4. Til slutt **tuserne**: $1 + 0 = 1$`,
    },
    {
      id: '5-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut med oppstilling',
        subTasks: [
          { label: 'a', task: '$345 + 123$', solution: '$468$' },
          { label: 'b', task: '$678 + 245$', solution: '$923$' },
          { label: 'c', task: '$1\\,234 + 2\\,345$', solution: '$3\\,579$' },
          { label: 'd', task: '$4\\,567 + 3\\,456$', solution: '$8\\,023$' },
        ],
        solution: 'a) 468  b) 923  c) 3 579  d) 8 023',
        hints: ['Husk å mente når summen blir 10 eller mer'],
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '5-2-1-subtraksjon',
      type: 'text',
      content: `## Subtraksjon med flersifrede tall

Når vi trekker fra, kaller vi det **subtraksjon**. Svaret kalles **differansen**.

Ved subtraksjon må vi noen ganger **låne** fra plassen til venstre.`,
    },
    {
      id: '5-2-1-example-sub',
      type: 'example',
      title: 'Eksempel: Subtraksjon med lån',
      problem: `Regn ut $503 - 247$`,
      solution: `**Løsning med oppstilling:**
\`\`\`
    503
  - 247
  -----
    256
\`\`\`

**Fremgangsmåte:**
1. **Enere:** $3 - 7$ går ikke. Lån fra tierne.
2. Men tierne er 0! Lån fra hundrerne: $5 → 4$, og tierne blir $10$.
3. Nå: tierne $10 → 9$, enere $13 - 7 = 6$
4. **Tiere:** $9 - 4 = 5$
5. **Hundrere:** $4 - 2 = 2$

**Svar:** $256$`,
    },
    {
      id: '5-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$789 - 234$', solution: '$555$' },
          { label: 'b', task: '$600 - 175$', solution: '$425$' },
          { label: 'c', task: '$1\\,000 - 456$', solution: '$544$' },
          { label: 'd', task: '$5\\,234 - 1\\,678$', solution: '$3\\,556$' },
        ],
        solution: 'a) 555  b) 425  c) 544  d) 3 556',
        hints: ['Lån fra plassen til venstre når du ikke kan trekke fra'],
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '5-2-1-hodneregning',
      type: 'definition',
      title: 'Hoderegningsstrategier',
      content: `**Tips for raskere regning:**

**Addisjon:**
- $48 + 35$ → Tenk: $48 + 30 + 5 = 78 + 5 = 83$
- $199 + 47$ → Tenk: $200 + 47 - 1 = 246$

**Subtraksjon:**
- $83 - 28$ → Tenk: $83 - 30 + 2 = 53 + 2 = 55$
- $1000 - 3$ → Tenk: $997$`,
    },
    {
      id: '5-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '5-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut i hodet (bruk smarte strategier)',
        subTasks: [
          { label: 'a', task: '$99 + 56$', solution: '$155$ (tenk $100 + 56 - 1$)' },
          { label: 'b', task: '$250 + 175$', solution: '$425$' },
          { label: 'c', task: '$500 - 135$', solution: '$365$' },
          { label: 'd', task: '$1\\,000 - 250$', solution: '$750$' },
        ],
        solution: 'a) 155  b) 425  c) 365  d) 750',
        hints: ['Rund av til nærmeste tier eller hundrer, så juster'],
      },
    },
    {
      id: '5-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '5-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver',
        subTasks: [
          { label: 'a', task: 'En bok koster 189 kr og en penn koster 45 kr. Hva koster det til sammen?', solution: '$189 + 45 = 234$ kr' },
          { label: 'b', task: 'Du har 500 kr og kjøper noe for 267 kr. Hvor mye har du igjen?', solution: '$500 - 267 = 233$ kr' },
        ],
        solution: 'a) 234 kr  b) 233 kr',
        hints: ['Les oppgaven nøye: "til sammen" betyr pluss, "hvor mye igjen" betyr minus'],
      },
    },
  ],
};

export const CHAPTER_5_2_2: TextbookChapter = {
  id: '5-2-2',
  courseId: '5',
  chapterNumber: '2.2',
  title: 'Multiplikasjon',
  description: 'Gangetabellen og multiplikasjon med tosifrede tall.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utvikle og bruke metodar for multiplikasjon',
  ],
  content: [
    {
      id: '5-2-2-intro',
      type: 'text',
      content: `## Multiplikasjon

**Multiplikasjon** er gjentatt addisjon:
$$4 \\cdot 5 = 5 + 5 + 5 + 5 = 20$$

Vi sier "fire ganger fem er lik tjue".

Svaret i en multiplikasjon kalles **produktet**.`,
    },
    {
      id: '5-2-2-gangetabell',
      type: 'definition',
      title: 'Gangetabellen',
      content: `Det er viktig å kunne gangetabellen utenat!

**Tips for å huske:**
- $7 \\cdot 8 = 56$ → "fem-seks-sju-åtte"
- $9 \\cdot$ noe → sifrene i svaret har siffersum 9
  - $9 \\cdot 7 = 63$ → $6 + 3 = 9$ ✓
- $5 \\cdot$ partall = ender på 0
- $5 \\cdot$ oddetall = ender på 5`,
    },
    {
      id: '5-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut fra gangetabellen',
        subTasks: [
          { label: 'a', task: '$7 \\cdot 6$', solution: '$42$' },
          { label: 'b', task: '$8 \\cdot 9$', solution: '$72$' },
          { label: 'c', task: '$6 \\cdot 6$', solution: '$36$' },
          { label: 'd', task: '$9 \\cdot 4$', solution: '$36$' },
        ],
        solution: 'a) 42  b) 72  c) 36  d) 36',
        hints: ['Øv på gangetabellen regelmessig!'],
      },
    },
    {
      id: '5-2-2-tosifret',
      type: 'text',
      content: `## Multiplikasjon med tosifrede tall

Når vi ganger med tosifrede tall, deler vi opp:

$$23 \\cdot 4 = (20 + 3) \\cdot 4 = 20 \\cdot 4 + 3 \\cdot 4 = 80 + 12 = 92$$

Eller med oppstilling:
\`\`\`
    23
  ×  4
  ----
    92
\`\`\``,
    },
    {
      id: '5-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Multiplikasjon med oppstilling',
      problem: `Regn ut $35 \\cdot 24$`,
      solution: `**Løsning:**
\`\`\`
     35
   × 24
   ----
    140  (35 × 4)
   700   (35 × 20)
   ----
   840
\`\`\`

**Forklaring:**
1. $35 \\cdot 4 = 140$
2. $35 \\cdot 20 = 700$
3. $140 + 700 = 840$

**Svar:** $840$`,
    },
    {
      id: '5-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut med oppstilling',
        subTasks: [
          { label: 'a', task: '$45 \\cdot 3$', solution: '$135$' },
          { label: 'b', task: '$67 \\cdot 5$', solution: '$335$' },
          { label: 'c', task: '$28 \\cdot 12$', solution: '$336$' },
          { label: 'd', task: '$43 \\cdot 21$', solution: '$903$' },
        ],
        solution: 'a) 135  b) 335  c) 336  d) 903',
        hints: ['Del opp i tiere og enere'],
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '5-2-2-10-100',
      type: 'definition',
      title: 'Gange med 10 og 100',
      content: `**Gange med 10:** Legg til én null
- $45 \\cdot 10 = 450$

**Gange med 100:** Legg til to nuller
- $45 \\cdot 100 = 4\\,500$

**Gange med 1000:** Legg til tre nuller
- $45 \\cdot 1000 = 45\\,000$`,
    },
    {
      id: '5-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '5-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$37 \\cdot 10$', solution: '$370$' },
          { label: 'b', task: '$56 \\cdot 100$', solution: '$5\\,600$' },
          { label: 'c', task: '$8 \\cdot 1000$', solution: '$8\\,000$' },
          { label: 'd', task: '$125 \\cdot 10$', solution: '$1\\,250$' },
        ],
        solution: 'a) 370  b) 5 600  c) 8 000  d) 1 250',
        hints: ['Tell antall nuller i det du ganger med, legg til like mange'],
      },
    },
    {
      id: '5-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '5-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver',
        subTasks: [
          { label: 'a', task: 'En pakke med 24 fargeblyanter koster 35 kr. Hva koster 3 pakker?', solution: '$35 \\cdot 3 = 105$ kr' },
          { label: 'b', task: 'Et år har 52 uker. Hvor mange uker er det i 5 år?', solution: '$52 \\cdot 5 = 260$ uker' },
        ],
        solution: 'a) 105 kr  b) 260 uker',
        hints: ['Finn ut hva du skal gange med hva'],
      },
    },
  ],
};

export const CHAPTER_5_2_3: TextbookChapter = {
  id: '5-2-3',
  courseId: '5',
  chapterNumber: '2.3',
  title: 'Divisjon',
  description: 'Kort divisjon og divisjon med rest.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: [
    'utvikle og bruke metodar for divisjon',
  ],
  content: [
    {
      id: '5-2-3-intro',
      type: 'text',
      content: `## Divisjon

**Divisjon** er det motsatte av multiplikasjon. Vi deler et tall i like store deler.

$$20 \\div 4 = 5$$

Vi sier "tjue delt på fire er lik fem".

Svaret i en divisjon kalles **kvotienten**.`,
    },
    {
      id: '5-2-3-def',
      type: 'definition',
      title: 'Divisjon og ganging henger sammen',
      content: `Hvis du vet at $6 \\cdot 7 = 42$, så vet du også:
- $42 \\div 6 = 7$
- $42 \\div 7 = 6$

**Å dele er det motsatte av å gange!**`,
    },
    {
      id: '5-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$36 \\div 6$', solution: '$6$' },
          { label: 'b', task: '$56 \\div 8$', solution: '$7$' },
          { label: 'c', task: '$72 \\div 9$', solution: '$8$' },
          { label: 'd', task: '$45 \\div 5$', solution: '$9$' },
        ],
        solution: 'a) 6  b) 7  c) 8  d) 9',
        hints: ['Tenk: Hva ganget med divisor gir dividenden?'],
      },
    },
    {
      id: '5-2-3-kort-div',
      type: 'text',
      content: `## Kort divisjon

Kort divisjon brukes for å dele større tall:

$96 \\div 4 = ?$

**Fremgangsmåte:**
1. $9 \\div 4 = 2$ rest $1$ → Skriv **2**
2. Ta med resten: $16 \\div 4 = 4$ → Skriv **4**

**Svar:** $96 \\div 4 = 24$`,
    },
    {
      id: '5-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Kort divisjon',
      problem: `Regn ut $156 \\div 6$`,
      solution: `**Løsning:**
\`\`\`
  156 ÷ 6 = 26
\`\`\`

**Fremgangsmåte:**
1. $1 \\div 6$ går ikke. Ta med neste siffer: $15 \\div 6 = 2$ rest $3$
2. Ta med resten: $36 \\div 6 = 6$

**Svar:** $26$`,
    },
    {
      id: '5-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk kort divisjon',
        subTasks: [
          { label: 'a', task: '$84 \\div 4$', solution: '$21$' },
          { label: 'b', task: '$126 \\div 6$', solution: '$21$' },
          { label: 'c', task: '$245 \\div 5$', solution: '$49$' },
          { label: 'd', task: '$336 \\div 8$', solution: '$42$' },
        ],
        solution: 'a) 21  b) 21  c) 49  d) 42',
        hints: ['Start fra venstre. Ta med rest til neste siffer.'],
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '5-2-3-rest',
      type: 'definition',
      title: 'Divisjon med rest',
      content: `Noen ganger går ikke divisjonen opp:

$23 \\div 4 = 5$ **rest** $3$

Forklaring: $4 \\cdot 5 = 20$, og $23 - 20 = 3$

**Resten må alltid være mindre enn det vi deler på!**`,
    },
    {
      id: '5-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '5-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut med rest',
        subTasks: [
          { label: 'a', task: '$17 \\div 5$', solution: '$3$ rest $2$' },
          { label: 'b', task: '$29 \\div 4$', solution: '$7$ rest $1$' },
          { label: 'c', task: '$50 \\div 6$', solution: '$8$ rest $2$' },
          { label: 'd', task: '$67 \\div 8$', solution: '$8$ rest $3$' },
        ],
        solution: 'a) 3 rest 2  b) 7 rest 1  c) 8 rest 2  d) 8 rest 3',
        hints: ['Finn det største gangestykket som er mindre enn eller lik tallet'],
      },
    },
    {
      id: '5-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '5-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver',
        subTasks: [
          { label: 'a', task: '32 elever skal deles i 4 like store grupper. Hvor mange i hver gruppe?', solution: '$32 \\div 4 = 8$ elever' },
          { label: 'b', task: '50 epler skal pakkes i poser med 6 i hver. Hvor mange fulle poser blir det? Hvor mange epler blir til overs?', solution: '$50 \\div 6 = 8$ poser, rest $2$ epler' },
        ],
        solution: 'a) 8 elever  b) 8 poser, 2 epler til overs',
        hints: ['Tenk på hva du skal dele og hvor mange deler'],
      },
    },
  ],
};

export const CHAPTER_5_2_4: TextbookChapter = {
  id: '5-2-4',
  courseId: '5',
  chapterNumber: '2.4',
  title: 'Regnerekkefølgeregler',
  description: 'Parenteser og regler for rekkefølge i utregninger.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'bruke regnerekkjefølgja til å løyse oppgåver',
  ],
  content: [
    {
      id: '5-2-4-intro',
      type: 'text',
      content: `## Hvorfor trenger vi regler?

Se på dette regnestykket: $3 + 4 \\cdot 2$

Regner vi fra venstre: $(3 + 4) \\cdot 2 = 7 \\cdot 2 = 14$
Ganger vi først: $3 + (4 \\cdot 2) = 3 + 8 = 11$

Hvilket svar er riktig? Vi trenger **regler for regnerekkefølge**!`,
    },
    {
      id: '5-2-4-regler',
      type: 'definition',
      title: 'Regnerekkefølge',
      content: `Regn alltid i denne rekkefølgen:

1. **Parenteser** først
2. **Gange** og **dele** (fra venstre mot høyre)
3. **Pluss** og **minus** (fra venstre mot høyre)

*Huskeregel: **P**lease **G**ive **D**anny **P**izza **M**ore* (Parentes, Gange, Dele, Pluss, Minus)`,
    },
    {
      id: '5-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Regnerekkefølge',
      problem: `Regn ut $3 + 4 \\cdot 2$`,
      solution: `**Løsning:**
Gange kommer før pluss:

$3 + 4 \\cdot 2$
$= 3 + 8$ (regner $4 \\cdot 2$ først)
$= 11$

**Svar:** $11$`,
    },
    {
      id: '5-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$5 + 3 \\cdot 2$', solution: '$11$' },
          { label: 'b', task: '$10 - 4 \\cdot 2$', solution: '$2$' },
          { label: 'c', task: '$6 \\cdot 3 + 4$', solution: '$22$' },
          { label: 'd', task: '$20 \\div 4 + 5$', solution: '$10$' },
        ],
        solution: 'a) 11  b) 2  c) 22  d) 10',
        hints: ['Gange og dele før pluss og minus!'],
      },
    },
    {
      id: '5-2-4-parenteser',
      type: 'text',
      content: `## Parenteser

**Parenteser** viser hva som skal regnes først.

$$(3 + 4) \\cdot 2 = 7 \\cdot 2 = 14$$

Her regner vi $3 + 4$ først fordi det står i parentes, selv om gange vanligvis kommer før pluss.`,
    },
    {
      id: '5-2-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Med parenteser',
      problem: `Regn ut $(8 - 3) \\cdot 4 + 2$`,
      solution: `**Løsning:**
1. Parentes først: $8 - 3 = 5$
2. Gange: $5 \\cdot 4 = 20$
3. Pluss: $20 + 2 = 22$

**Svar:** $22$`,
    },
    {
      id: '5-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: '$(5 + 3) \\cdot 2$', solution: '$16$' },
          { label: 'b', task: '$4 \\cdot (6 - 2)$', solution: '$16$' },
          { label: 'c', task: '$(10 + 2) \\div 3$', solution: '$4$' },
          { label: 'd', task: '$(7 - 4) \\cdot (2 + 3)$', solution: '$15$' },
        ],
        solution: 'a) 16  b) 16  c) 4  d) 15',
        hints: ['Parenteser først, så gange/dele, til slutt pluss/minus'],
      },
    },
    {
      id: '5-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '5-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett inn parenteser slik at regnestykket blir riktig',
        subTasks: [
          { label: 'a', task: '$2 + 3 \\cdot 4 = 20$', solution: '$(2 + 3) \\cdot 4 = 20$' },
          { label: 'b', task: '$8 - 2 \\cdot 2 = 12$', solution: '$(8 - 2) \\cdot 2 = 12$' },
          { label: 'c', task: '$12 \\div 2 + 4 = 2$', solution: '$12 \\div (2 + 4) = 2$' },
        ],
        solution: 'a) (2 + 3) · 4  b) (8 - 2) · 2  c) 12 ÷ (2 + 4)',
        hints: ['Prøv å plassere parentesene ulike steder og regn ut'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3: MÅLING OG ENHETER
// ============================================================================

export const CHAPTER_5_3_1: TextbookChapter = {
  id: '5-3-1',
  courseId: '5',
  chapterNumber: '3.1',
  title: 'Lengdemål',
  description: 'Millimeter, centimeter, desimeter, meter og kilometer med omregning.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'velje høvelege måleiningar og rekne om mellom ulike måleiningar',
  ],
  content: [
    {
      id: '5-3-1-intro',
      type: 'text',
      content: `## Lengdeenheter

Vi bruker ulike enheter for å måle lengde:
- **Millimeter (mm)** - for veldig små ting
- **Centimeter (cm)** - for små ting
- **Desimeter (dm)** - sjeldnere brukt
- **Meter (m)** - for rom og personer
- **Kilometer (km)** - for avstander`,
    },
    {
      id: '5-3-1-omregning',
      type: 'definition',
      title: 'Omregning mellom lengdeenheter',
      content: `$$1 \\text{ km} = 1\\,000 \\text{ m}$$
$$1 \\text{ m} = 10 \\text{ dm} = 100 \\text{ cm} = 1\\,000 \\text{ mm}$$
$$1 \\text{ dm} = 10 \\text{ cm}$$
$$1 \\text{ cm} = 10 \\text{ mm}$$

**Huskeregel:**
- Fra stor til liten enhet: **gang**
- Fra liten til stor enhet: **del**`,
    },
    {
      id: '5-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Gjør om mellom enheter',
      problem: `a) Gjør om 3,5 m til cm
b) Gjør om 450 cm til m`,
      solution: `**Løsning:**
a) $1 \\text{ m} = 100 \\text{ cm}$
   $3,5 \\text{ m} = 3,5 \\cdot 100 \\text{ cm} = 350 \\text{ cm}$

b) $100 \\text{ cm} = 1 \\text{ m}$
   $450 \\text{ cm} = 450 \\div 100 \\text{ m} = 4,5 \\text{ m}$`,
    },
    {
      id: '5-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør om til den nye enheten',
        subTasks: [
          { label: 'a', task: '$2$ m $= \\square$ cm', solution: '$200$ cm' },
          { label: 'b', task: '$5$ cm $= \\square$ mm', solution: '$50$ mm' },
          { label: 'c', task: '$3$ km $= \\square$ m', solution: '$3\\,000$ m' },
          { label: 'd', task: '$400$ cm $= \\square$ m', solution: '$4$ m' },
        ],
        solution: 'a) 200 cm  b) 50 mm  c) 3 000 m  d) 4 m',
        hints: ['Fra stor til liten: gang. Fra liten til stor: del.'],
      },
    },
    {
      id: '5-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om',
        subTasks: [
          { label: 'a', task: '$1,5$ m $= \\square$ cm', solution: '$150$ cm' },
          { label: 'b', task: '$2,4$ km $= \\square$ m', solution: '$2\\,400$ m' },
          { label: 'c', task: '$75$ mm $= \\square$ cm', solution: '$7,5$ cm' },
          { label: 'd', task: '$3\\,200$ m $= \\square$ km', solution: '$3,2$ km' },
        ],
        solution: 'a) 150 cm  b) 2 400 m  c) 7,5 cm  d) 3,2 km',
        hints: ['Pass på desimaler!'],
      },
    },
    {
      id: '5-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '5-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver',
        subTasks: [
          { label: 'a', task: 'En blyant er 18 cm lang. Hvor mange mm er det?', solution: '$180$ mm' },
          { label: 'b', task: 'Veien til skolen er 800 m. Hvor mange km er det?', solution: '$0,8$ km' },
          { label: 'c', task: 'Et tau er 2,5 m langt. Hvor mange cm er det?', solution: '$250$ cm' },
        ],
        solution: 'a) 180 mm  b) 0,8 km  c) 250 cm',
      },
    },
  ],
};

export const CHAPTER_5_3_2: TextbookChapter = {
  id: '5-3-2',
  courseId: '5',
  chapterNumber: '3.2',
  title: 'Areal - introduksjon',
  description: 'Kvadratmeter og areal av rektangler.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive areal og samanlikne areal av figurar',
  ],
  content: [
    {
      id: '5-3-2-intro',
      type: 'text',
      content: `## Hva er areal?

**Areal** er hvor stor en flate er. Vi måler hvor mange kvadrater som får plass.

Et **kvadrat** med sider på 1 cm har areal **1 cm²** (én kvadratcentimeter).

Et **kvadrat** med sider på 1 m har areal **1 m²** (én kvadratmeter).`,
    },
    {
      id: '5-3-2-formel',
      type: 'definition',
      title: 'Areal av rektangel',
      content: `Arealet av et rektangel:

$$\\text{Areal} = \\text{lengde} \\cdot \\text{bredde}$$

**Eksempel:**
Et rektangel med lengde 5 cm og bredde 3 cm:
$$A = 5 \\text{ cm} \\cdot 3 \\text{ cm} = 15 \\text{ cm}^2$$`,
    },
    {
      id: '5-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Finn arealet',
      problem: `Et rom er 4 m langt og 3 m bredt. Hva er arealet?`,
      solution: `**Løsning:**
$A = \\text{lengde} \\cdot \\text{bredde}$
$A = 4 \\text{ m} \\cdot 3 \\text{ m}$
$A = 12 \\text{ m}^2$

**Svar:** Rommet har et areal på $12$ m².`,
    },
    {
      id: '5-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn arealet av rektanglene',
        subTasks: [
          { label: 'a', task: 'Lengde 6 cm, bredde 4 cm', solution: '$24$ cm²' },
          { label: 'b', task: 'Lengde 8 m, bredde 5 m', solution: '$40$ m²' },
          { label: 'c', task: 'Lengde 10 cm, bredde 10 cm (kvadrat)', solution: '$100$ cm²' },
        ],
        solution: 'a) 24 cm²  b) 40 m²  c) 100 cm²',
        hints: ['Areal = lengde × bredde'],
      },
    },
    {
      id: '5-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver',
        subTasks: [
          { label: 'a', task: 'Et klasserom er 8 m langt og 6 m bredt. Hva er arealet?', solution: '$48$ m²' },
          { label: 'b', task: 'Et fotografi er 15 cm × 10 cm. Hva er arealet?', solution: '$150$ cm²' },
          { label: 'c', task: 'Et vindu er 120 cm høyt og 80 cm bredt. Hva er arealet i cm²?', solution: '$9\\,600$ cm²' },
        ],
        solution: 'a) 48 m²  b) 150 cm²  c) 9 600 cm²',
      },
    },
    {
      id: '5-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '5-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn den manglende siden',
        subTasks: [
          { label: 'a', task: 'Arealet er 20 cm² og lengden er 5 cm. Hva er bredden?', solution: '$4$ cm' },
          { label: 'b', task: 'Arealet er 36 m² og bredden er 6 m. Hva er lengden?', solution: '$6$ m' },
        ],
        solution: 'a) 4 cm  b) 6 m',
        hints: ['Del arealet på den siden du kjenner'],
      },
    },
  ],
};

export const CHAPTER_5_3_3: TextbookChapter = {
  id: '5-3-3',
  courseId: '5',
  chapterNumber: '3.3',
  title: 'Omkretsberegning',
  description: 'Beregne omkrets av firkanter og trekanter.',
  estimatedMinutes: 30,
  exercises: [],
  competenceGoals: [
    'utforske og beskrive omkrets av figurar',
  ],
  content: [
    {
      id: '5-3-3-intro',
      type: 'text',
      content: `## Hva er omkrets?

**Omkretsen** er lengden rundt en figur - hvor langt du går hvis du går langs alle sidene.

For å finne omkretsen, **legger vi sammen alle sidene**.`,
    },
    {
      id: '5-3-3-def',
      type: 'definition',
      title: 'Omkrets av ulike figurer',
      content: `**Rektangel:**
$$O = 2 \\cdot \\text{lengde} + 2 \\cdot \\text{bredde}$$

**Kvadrat:**
$$O = 4 \\cdot \\text{side}$$

**Trekant:**
$$O = \\text{side}_1 + \\text{side}_2 + \\text{side}_3$$`,
    },
    {
      id: '5-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Omkrets av rektangel',
      problem: `Finn omkretsen av et rektangel med lengde 8 cm og bredde 5 cm.`,
      solution: `**Løsning:**
$O = 2 \\cdot 8 + 2 \\cdot 5$
$O = 16 + 10$
$O = 26$ cm

**Svar:** Omkretsen er 26 cm.`,
    },
    {
      id: '5-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn omkretsen',
        subTasks: [
          { label: 'a', task: 'Kvadrat med side 6 cm', solution: '$24$ cm' },
          { label: 'b', task: 'Rektangel med lengde 10 cm og bredde 4 cm', solution: '$28$ cm' },
          { label: 'c', task: 'Trekant med sider 5 cm, 6 cm og 7 cm', solution: '$18$ cm' },
        ],
        solution: 'a) 24 cm  b) 28 cm  c) 18 cm',
        hints: ['Legg sammen alle sidene'],
      },
    },
    {
      id: '5-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske oppgaver',
        subTasks: [
          { label: 'a', task: 'Du skal sette gjerde rundt en rektangulær hage som er 12 m lang og 8 m bred. Hvor mye gjerde trenger du?', solution: '$40$ m' },
          { label: 'b', task: 'En bilderamme er 30 cm × 20 cm. Hvor lang er listen rundt rammen?', solution: '$100$ cm' },
        ],
        solution: 'a) 40 m gjerde  b) 100 cm liste',
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 4: GEOMETRI
// ============================================================================

export const CHAPTER_5_4_1: TextbookChapter = {
  id: '5-4-1',
  courseId: '5',
  chapterNumber: '4.1',
  title: 'Vinkler - introduksjon',
  description: 'Grader og ulike vinkeltyper: spiss, stump og rett vinkel.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei',
  ],
  content: [
    {
      id: '5-4-1-intro',
      type: 'text',
      content: `## Hva er en vinkel?

En **vinkel** er åpningen mellom to linjer som møtes i et punkt.

Vi måler vinkler i **grader** (°). En hel sirkel er 360°.`,
    },
    {
      id: '5-4-1-vinkeltyper',
      type: 'definition',
      title: 'Vinkeltyper',
      content: `**Rett vinkel** = 90°
- Linjene står vinkelrett på hverandre
- Ser ut som hjørnet av et ark

**Spiss vinkel** < 90°
- Mindre enn en rett vinkel
- "Spiss" som en pil

**Stump vinkel** > 90° og < 180°
- Større enn en rett vinkel
- "Stump" - mer åpen

**Rett linje** = 180°
- En helt flat vinkel`,
    },
    {
      id: '5-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Gjenkjenne vinkeltyper',
      problem: `Hvilken type vinkel er:
a) 45°
b) 90°
c) 120°`,
      solution: `**Løsning:**
a) 45° < 90° → **Spiss vinkel**
b) 90° = 90° → **Rett vinkel**
c) 120° > 90° → **Stump vinkel**`,
    },
    {
      id: '5-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken type vinkel er dette?',
        subTasks: [
          { label: 'a', task: '$30°$', solution: 'Spiss vinkel' },
          { label: 'b', task: '$90°$', solution: 'Rett vinkel' },
          { label: 'c', task: '$150°$', solution: 'Stump vinkel' },
          { label: 'd', task: '$85°$', solution: 'Spiss vinkel' },
        ],
        solution: 'a) Spiss  b) Rett  c) Stump  d) Spiss',
        hints: ['Spiss < 90° < Stump. Rett = 90°'],
      },
    },
    {
      id: '5-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn vinkler i hverdagen',
        subTasks: [
          { label: 'a', task: 'Hvilken vinkeltype har hjørnet i et ark?', solution: 'Rett vinkel (90°)' },
          { label: 'b', task: 'Klokka viser 3. Hvilken vinkel danner viserne?', solution: 'Rett vinkel (90°)' },
          { label: 'c', task: 'Klokka viser 2. Er vinkelen spiss eller stump?', solution: 'Spiss vinkel (60°)' },
        ],
        solution: 'a) Rett vinkel  b) 90° (rett vinkel)  c) Spiss vinkel',
        hints: ['Tenk på hva du ser rundt deg'],
      },
    },
  ],
};

export const CHAPTER_5_4_2: TextbookChapter = {
  id: '5-4-2',
  courseId: '5',
  chapterNumber: '4.2',
  title: 'Trekanter',
  description: 'Likesidet, likebeint og ulikesidet trekant.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utforske eigenskapar ved trekanter',
  ],
  content: [
    {
      id: '5-4-2-intro',
      type: 'text',
      content: `## Hva er en trekant?

En **trekant** er en figur med tre sider og tre hjørner (vinkler).

Summen av vinklene i en trekant er alltid **180°**.`,
    },
    {
      id: '5-4-2-typer',
      type: 'definition',
      title: 'Typer trekanter',
      content: `**Likesidet trekant:**
- Alle tre sider er like lange
- Alle vinkler er 60°

**Likebeint trekant:**
- To sider er like lange
- To vinkler er like store

**Ulikesidet trekant:**
- Alle sider har ulik lengde
- Alle vinkler er ulike`,
    },
    {
      id: '5-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken type trekant er dette?',
        subTasks: [
          { label: 'a', task: 'Sider: 5 cm, 5 cm, 5 cm', solution: 'Likesidet' },
          { label: 'b', task: 'Sider: 4 cm, 4 cm, 6 cm', solution: 'Likebeint' },
          { label: 'c', task: 'Sider: 3 cm, 4 cm, 5 cm', solution: 'Ulikesidet' },
        ],
        solution: 'a) Likesidet  b) Likebeint  c) Ulikesidet',
        hints: ['Tell hvor mange sider som er like'],
      },
    },
    {
      id: '5-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den ukjente vinkelen',
        subTasks: [
          { label: 'a', task: 'To vinkler er 60° og 80°. Hva er den tredje?', solution: '$180° - 60° - 80° = 40°$' },
          { label: 'b', task: 'To vinkler er 45° og 90°. Hva er den tredje?', solution: '$180° - 45° - 90° = 45°$' },
        ],
        solution: 'a) 40°  b) 45°',
        hints: ['Summen av alle tre vinkler er 180°'],
      },
    },
  ],
};

export const CHAPTER_5_4_3: TextbookChapter = {
  id: '5-4-3',
  courseId: '5',
  chapterNumber: '4.3',
  title: 'Firkanter',
  description: 'Kvadrat, rektangel og parallellogram.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'utforske eigenskapar ved firkantar',
  ],
  content: [
    {
      id: '5-4-3-intro',
      type: 'text',
      content: `## Hva er en firkant?

En **firkant** er en figur med fire sider og fire hjørner.

Summen av vinklene i en firkant er alltid **360°**.`,
    },
    {
      id: '5-4-3-typer',
      type: 'definition',
      title: 'Typer firkanter',
      content: `**Kvadrat:**
- 4 like lange sider
- 4 rette vinkler (90°)

**Rektangel:**
- Motstående sider er like lange
- 4 rette vinkler (90°)

**Parallellogram:**
- Motstående sider er parallelle og like lange
- Motstående vinkler er like store`,
    },
    {
      id: '5-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken type firkant er dette?',
        subTasks: [
          { label: 'a', task: 'Alle sider er 5 cm, alle vinkler er 90°', solution: 'Kvadrat' },
          { label: 'b', task: 'Lengde 8 cm, bredde 4 cm, alle vinkler 90°', solution: 'Rektangel' },
          { label: 'c', task: 'To og to motstående sider er like, ingen vinkel er 90°', solution: 'Parallellogram' },
        ],
        solution: 'a) Kvadrat  b) Rektangel  c) Parallellogram',
      },
    },
    {
      id: '5-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sant eller usant?',
        subTasks: [
          { label: 'a', task: 'Et kvadrat er alltid et rektangel', solution: 'Sant' },
          { label: 'b', task: 'Et rektangel er alltid et kvadrat', solution: 'Usant' },
          { label: 'c', task: 'Alle firkanter har vinkelsum 360°', solution: 'Sant' },
        ],
        solution: 'a) Sant  b) Usant  c) Sant',
        hints: ['Et kvadrat har alle egenskapene til et rektangel, men med tillegget at alle sider er like'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 5: STATISTIKK
// ============================================================================

export const CHAPTER_5_5_1: TextbookChapter = {
  id: '5-5-1',
  courseId: '5',
  chapterNumber: '5.1',
  title: 'Tabeller og diagrammer',
  description: 'Lese og lage søylediagram og sektordiagram.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: [
    'samle, sortere, notere og illustrere data med tabellar og diagram',
  ],
  content: [
    {
      id: '5-5-1-intro',
      type: 'text',
      content: `## Hva er statistikk?

**Statistikk** handler om å samle, organisere og presentere informasjon (data).

Vi bruker **tabeller** og **diagrammer** for å vise data på en oversiktlig måte.`,
    },
    {
      id: '5-5-1-def-tabell',
      type: 'definition',
      title: 'Tabell',
      content: `En **tabell** organiserer data i rader og kolonner.

**Eksempel:** Favorittfrukt i klassen

| Frukt | Antall elever |
|-------|---------------|
| Eple | 8 |
| Banan | 6 |
| Appelsin | 4 |
| Druer | 3 |`,
    },
    {
      id: '5-5-1-soyle',
      type: 'text',
      content: `## Søylediagram

Et **søylediagram** viser data med søyler. Jo høyere søyle, jo større verdi.

- Hver søyle representerer en kategori
- Høyden viser antallet eller verdien
- Søylene bør ha lik bredde og avstand`,
    },
    {
      id: '5-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '5-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk tabellen om favorittfrukt til å svare:',
        subTasks: [
          { label: 'a', task: 'Hvilken frukt er mest populær?', solution: 'Eple' },
          { label: 'b', task: 'Hvor mange flere liker eple enn appelsin?', solution: '$8 - 4 = 4$ flere' },
          { label: 'c', task: 'Hvor mange elever er spurt totalt?', solution: '$8 + 6 + 4 + 3 = 21$ elever' },
        ],
        solution: 'a) Eple  b) 4 flere  c) 21 elever',
      },
    },
    {
      id: '5-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '5-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en tabell',
        subTasks: [
          { label: 'a', task: 'I en klasse spiller 7 elever fotball, 5 spiller håndball, 3 spiller basket og 4 spiller ikke ball. Lag en tabell.', solution: 'Tabell med aktivitet og antall' },
        ],
        solution: 'Fotball: 7, Håndball: 5, Basket: 3, Ingen: 4',
        hints: ['Lag to kolonner: aktivitet og antall'],
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// EKSPORT AV ALLE KAPITLER
// ============================================================================

export const CHAPTERS_5KLASSE: TextbookChapter[] = [
  CHAPTER_5_1_1,
  CHAPTER_5_1_2,
  CHAPTER_5_1_3,
  CHAPTER_5_1_4,
  CHAPTER_5_2_1,
  CHAPTER_5_2_2,
  CHAPTER_5_2_3,
  CHAPTER_5_2_4,
  CHAPTER_5_3_1,
  CHAPTER_5_3_2,
  CHAPTER_5_3_3,
  CHAPTER_5_4_1,
  CHAPTER_5_4_2,
  CHAPTER_5_4_3,
  CHAPTER_5_5_1,
];
