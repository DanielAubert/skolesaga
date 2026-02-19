/**
 * Tekstbok kapitler for R1 - Kapittel 8: Kombinatorikk og sannsynlighet
 * Seksjon 8: Tellemetoder, permutasjoner, kombinasjoner, sannsynlighet, betinget sannsynlighet, binomisk fordeling
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8.1: Multiplikasjonsprinsippet og valgtre
// ============================================================================

export const CHAPTER_R1_8_1: TextbookChapter = {
  id: 'r1-8-1',
  courseId: 'r1',
  chapterNumber: '8.1',
  title: 'Multiplikasjonsprinsippet og valgtre',
  description: 'Lær om valgtre, multiplikasjonsprinsippet og addisjonsprinsippet for systematisk telling.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke valgtre til å visualisere og telle opp mulige utfall',
    'anvende multiplikasjonsprinsippet på sammensatte valg',
    'anvende addisjonsprinsippet når valg utelukker hverandre',
    'kombinere prinsippene i praktiske telleproblemer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-8-1-intro',
      type: 'text',
      content: `## Kombinatorikk -- kunsten å telle

Kombinatorikk handler om å telle antall mulige utfall eller ordninger uten å ramse opp alle. Tenk deg at du skal velge ett hovedrett og en dessert fra en meny. Hvor mange forskjellige måltider kan du sette sammen? Med to retter og tre desserter får du $2 \\cdot 3 = 6$ kombinasjoner.

Denne typen systematisk telling er grunnlaget for sannsynlighetsregning. I dette kapittelet lærer du de to viktigste telleprinsippene: **multiplikasjonsprinsippet** og **addisjonsprinsippet**.`,
    },

    // ========== VALGTRE ==========
    {
      id: 'r1-8-1-valgtre',
      type: 'text',
      content: `## Valgtre

Et **valgtre** (også kalt trediagram) er en visuell fremstilling der hvert valg representeres som en forgrening. Ved å følge grenene fra rot til blad kan vi lese av alle mulige utfall.

Valgtre er spesielt nyttige når:
- Du har en sekvens av valg
- Du vil se alle utfallene eksplisitt
- Du vil holde oversikt over betingelser som endrer seg underveis`,
    },

    // Eksempel: Valgtre
    {
      id: 'r1-8-1-example-valgtre',
      type: 'example',
      title: 'Eksempel 1: Valgtre for kleskombinasjon',
      problem: `Du har $2$ skjorter (hvit, blå) og $3$ bukser (svart, grå, beige). Tegn et valgtre og finn antall mulige antrekk.`,
      solution: `**Løsning:**

Vi lar skjortevalget være første forgrening og buksevalget andre:

Fra **hvit** skjorte: hvit-svart, hvit-grå, hvit-beige ($3$ utfall)
Fra **blå** skjorte: blå-svart, blå-grå, blå-beige ($3$ utfall)

Totalt: $2 \\cdot 3 = 6$ mulige antrekk.

Hvert blad i treet representerer ett komplett antrekk.`,
    },

    // Oppgave 1
    {
      id: 'r1-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En kafé tilbyr $3$ typer kaffe (espresso, latte, cappuccino) og $4$ typer kake (sjokolade, gulrot, ost, bringebær). Hvor mange forskjellige kombinasjoner av én kaffe og én kake kan du velge?',
        solution: `$3 \\cdot 4 = 12$ kombinasjoner.`,
        hints: ['Tenk på det som to valg etter hverandre'],
        answer: 12,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== MULTIPLIKASJONSPRINSIPPET ==========
    {
      id: 'r1-8-1-def-multiplikasjon',
      type: 'definition',
      title: 'Multiplikasjonsprinsippet',
      content: `Hvis et sammensatt valg består av $k$ delvalg der:
- delvalg 1 kan gjøres på $n_1$ måter,
- delvalg 2 kan gjøres på $n_2$ måter,
- $\\vdots$
- delvalg $k$ kan gjøres på $n_k$ måter,

og valgene er **uavhengige** av hverandre, da kan det sammensatte valget gjøres på

$$n_1 \\cdot n_2 \\cdot \\ldots \\cdot n_k$$

måter.`,
    },

    // Eksempel: Multiplikasjonsprinsippet
    {
      id: 'r1-8-1-example-multiplikasjon',
      type: 'example',
      title: 'Eksempel 2: Kodeord',
      problem: `Et kodeord består av $3$ bokstaver etterfulgt av $2$ siffer. Hvor mange kodeord kan lages hvis
a) bokstaver og siffer kan gjentas?
b) ingen gjentakelse er tillatt?`,
      solution: `**Løsning:**

a) Det norske alfabetet har $29$ bokstaver og vi har $10$ siffer ($0$--$9$).

Med gjentakelse: $29 \\cdot 29 \\cdot 29 \\cdot 10 \\cdot 10 = 29^3 \\cdot 10^2 = 24{\\,}389 \\cdot 100 = 2{\\,}438{\\,}900$

b) Uten gjentakelse:

Bokstaver: $29 \\cdot 28 \\cdot 27$ (færre valg for hver posisjon)
Siffer: $10 \\cdot 9$

Totalt: $29 \\cdot 28 \\cdot 27 \\cdot 10 \\cdot 9 = 21{\\,}924 \\cdot 90 = 1{\\,}973{\\,}160$`,
    },

    // Oppgave 2
    {
      id: 'r1-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et passord skal bestå av $4$ siffer ($0$--$9$). Hvor mange passord er mulige hvis gjentakelse er tillatt?',
        solution: `$10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10{\\,}000$ passord.`,
        hints: ['Hvert av de $4$ sifferposisjonene har $10$ muligheter'],
        answer: 10000,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r1-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et passord skal bestå av $4$ forskjellige siffer ($0$--$9$). Hvor mange passord er mulige?',
        solution: `$10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$ passord.`,
        hints: ['Etter at du har valgt første siffer, gjenstår $9$ valg for neste'],
        answer: 5040,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Note: Avhengige valg
    {
      id: 'r1-8-1-note-avhengig',
      type: 'note',
      title: 'Valg uten gjentakelse',
      content: `Når gjentakelse **ikke** er tillatt, reduseres antall muligheter for hvert delvalg. Dette kalles valg uten tilbakelegging:

Første valg: $n$ muligheter
Andre valg: $n - 1$ muligheter
Tredje valg: $n - 2$ muligheter
$\\vdots$

Multiplikasjonsprinsippet gjelder fortsatt, men med ulike verdier for hvert steg.`,
    },

    // Eksempel 3
    {
      id: 'r1-8-1-example-registrering',
      type: 'example',
      title: 'Eksempel 3: Bilskilt',
      problem: `Et bilskilt har $2$ bokstaver (fra det engelske alfabetet, $26$ bokstaver) etterfulgt av $5$ siffer. Hvor mange skilt kan lages?`,
      solution: `**Løsning:**

Med gjentakelse (som er normalt for bilskilt):

$$26 \\cdot 26 \\cdot 10 \\cdot 10 \\cdot 10 \\cdot 10 \\cdot 10 = 26^2 \\cdot 10^5 = 676 \\cdot 100{\\,}000 = 67{\\,}600{\\,}000$$

Det finnes $67{\\,}600{\\,}000$ mulige bilskilt.`,
    },

    // Oppgave 4
    {
      id: 'r1-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en klasse med $30$ elever skal det velges en leder, en nestleder og en sekretær. Ingen kan ha mer enn ett verv. På hvor mange måter kan vervene fordeles?',
        solution: `Leder: $30$ valg. Nestleder: $29$ valg. Sekretær: $28$ valg.

Totalt: $30 \\cdot 29 \\cdot 28 = 24{\\,}360$ måter.`,
        hints: ['Rekkefølgen har betydning her -- leder og nestleder er forskjellige verv'],
        answer: 24360,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ADDISJONSPRINSIPPET ==========
    {
      id: 'r1-8-1-def-addisjon',
      type: 'definition',
      title: 'Addisjonsprinsippet',
      content: `Hvis en oppgave kan løses enten ved fremgangsmåte $A$ (på $n_A$ måter) **eller** fremgangsmåte $B$ (på $n_B$ måter), og de to fremgangsmåtene **ikke overlapper** (ingen utfall er felles), da er det totale antall måter:

$$n_A + n_B$$

Generelt, for $k$ gjensidig utelukkende fremgangsmåter:

$$n_1 + n_2 + \\ldots + n_k$$`,
    },

    // Eksempel: Addisjonsprinsippet
    {
      id: 'r1-8-1-example-addisjon',
      type: 'example',
      title: 'Eksempel 4: Addisjonsprinsippet',
      problem: `I en klasse med $15$ gutter og $12$ jenter skal det velges én representant. Representanten skal enten være en gutt eller en jente. Hvor mange valg finnes?`,
      solution: `**Løsning:**

Valgene er gjensidig utelukkende (representanten kan ikke være begge deler).

Totalt: $15 + 12 = 27$ mulige valg.`,
    },

    // Oppgave 5
    {
      id: 'r1-8-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'lett',
        task: 'En restaurant har $8$ kjøttretter, $5$ fiskeretter og $3$ vegetarretter. Hvor mange valg har du hvis du skal velge én rett?',
        solution: `$8 + 5 + 3 = 16$ valg (addisjonsprinsippet, siden du velger nøyaktig én rett).`,
        hints: ['Du velger enten kjøtt, fisk eller vegetar -- valgene utelukker hverandre'],
        answer: 16,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KOMBINASJON AV PRINSIPPENE ==========
    {
      id: 'r1-8-1-kombinasjon-intro',
      type: 'text',
      content: `## Kombinasjon av prinsippene

I mange problemer bruker vi begge prinsippene sammen. Nøkkelen er å identifisere:
- **Multiplikasjon**: Flere valg som gjøres **etter hverandre** (OG)
- **Addisjon**: Valg som **utelukker** hverandre (ELLER)

Stikkord: «og» $\\rightarrow$ multipliser, «eller» $\\rightarrow$ adder.`,
    },

    // Eksempel: Kombinasjon
    {
      id: 'r1-8-1-example-kombinasjon',
      type: 'example',
      title: 'Eksempel 5: Kombinasjon av prinsippene',
      problem: `Et passord skal bestå av enten $3$ bokstaver og $2$ siffer, eller $2$ bokstaver og $3$ siffer (bokstaver fra det engelske alfabetet). Gjentakelse er tillatt. Hvor mange passord finnes?`,
      solution: `**Løsning:**

**Type 1:** $3$ bokstaver + $2$ siffer: $26^3 \\cdot 10^2 = 17{\\,}576 \\cdot 100 = 1{\\,}757{\\,}600$

**Type 2:** $2$ bokstaver + $3$ siffer: $26^2 \\cdot 10^3 = 676 \\cdot 1000 = 676{\\,}000$

De to typene utelukker hverandre (ulik lengde på bokstav- og sifferdelen), så vi adderer:

$$1{\\,}757{\\,}600 + 676{\\,}000 = 2{\\,}433{\\,}600$$`,
    },

    // Oppgave 6
    {
      id: 'r1-8-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvor mange tresifrede tall ($100$--$999$) har bare oddetallssifre?',
        solution: `Oddetallssifrene er $\\{1, 3, 5, 7, 9\\}$, altså $5$ muligheter for hvert siffer.

Hundrerplassen: $5$ valg, tierplassen: $5$ valg, enerplassen: $5$ valg.

Totalt: $5 \\cdot 5 \\cdot 5 = 125$ tall.`,
        hints: ['Oddetallssifrene er $1, 3, 5, 7, 9$', 'Hundrerplassen kan ikke være $0$, men det er heller ikke et oddetallssiffer'],
        answer: 125,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-8-1-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvor mange tresifrede tall ($100$--$999$) er partall?',
        solution: `Et tresifret partall har et partallssiffer ($0, 2, 4, 6, 8$) på enerplassen.

Hundrerplassen: $9$ valg ($1$--$9$), tierplassen: $10$ valg ($0$--$9$), enerplassen: $5$ valg ($0, 2, 4, 6, 8$).

Totalt: $9 \\cdot 10 \\cdot 5 = 450$ partall.`,
        hints: ['Bestem siste siffer først -- det må være et partallssiffer', 'Hundrerplassen kan ikke være $0$'],
        answer: 450,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r1-8-1-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `I et kortspill med $52$ kort (4 farger, 13 verdier) trekkes $2$ kort etter hverandre uten tilbakelegging. På hvor mange måter kan dette gjøres dersom rekkefølgen har betydning?`,
        solution: `Første kort: $52$ valg. Andre kort: $51$ valg.

Totalt: $52 \\cdot 51 = 2652$ ordnede trekkinger.`,
        hints: ['Etter at du har trukket det første kortet, er det ett kort mindre igjen'],
        answer: 2652,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r1-8-1-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvor mange tresifrede tall ($100$--$999$) har nøyaktig to like sifre?',
        solution: `Vi må telle tall med **nøyaktig** to like sifre (verken tre like, og ikke alle forskjellige).

**Metode:** Velg sifferet som gjentas, velg posisjonene, og velg det tredje sifferet.

Vi deler opp etter hvilke to posisjoner som er like:

**Posisjon 1 = Posisjon 2 (hundrer = tier):** Sifferet $d$ gjentas ($d \\in \\{1, ..., 9\\}$). Enerplassen må være forskjellig fra $d$, men kan være $0$--$9$ unntatt $d$: $9$ valg. Gir $9 \\cdot 9 = 81$.

**Posisjon 1 = Posisjon 3 (hundrer = ener):** Sifferet $d$ gjentas ($d \\in \\{1, ..., 9\\}$). Tierplassen: $9$ valg. Gir $9 \\cdot 9 = 81$.

**Posisjon 2 = Posisjon 3 (tier = ener):** Sifferet $d$ gjentas ($d \\in \\{0, ..., 9\\}$). Hundrerplassen: $8$ valg ($1$--$9$ unntatt $d$ dersom $d \\neq 0$) eller $9$ valg (dersom $d = 0$).

For $d = 0$: hundrerplassen $\\in \\{1, ..., 9\\}$: $9$ tall.
For $d \\in \\{1, ..., 9\\}$: hundrerplassen $\\in \\{1, ..., 9\\} \\setminus \\{d\\}$: $8$ valg, $9$ sifre: $9 \\cdot 8 = 72$.
Totalt: $9 + 72 = 81$.

**Sum:** $81 + 81 + 81 = 243$.`,
        hints: ['Del opp etter hvilke to posisjoner som har likt siffer', 'Husk at hundrerplassen ikke kan være $0$', 'Trekk fra tall med tre like sifre'],
        answer: 243,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r1-8-1-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'lett',
        task: 'En iskrembutikk har $6$ smaker og $3$ typer kjeks. Du skal velge én is og én kjeks. Bruk multiplikasjonsprinsippet til å finne antall mulige kombinasjoner.',
        solution: `$6 \\cdot 3 = 18$ kombinasjoner.`,
        answer: 18,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r1-8-1-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: '$7$ personer skal sitte på en benk med $7$ plasser. På hvor mange måter kan de sette seg?',
        solution: `Første plass: $7$ valg, andre plass: $6$ valg, ..., siste plass: $1$ valg.

$7 \\cdot 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 7! = 5040$ måter.`,
        hints: ['Bruk multiplikasjonsprinsippet steg for steg'],
        answer: 5040,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r1-8-1-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: `Et sykkelkombinasjonslås har $4$ ringer med sifre $0$--$9$. Hvor mange koder finnes? Dersom du prøver én kode hvert $5.$ sekund, hvor lang tid tar det i verste fall å prøve alle?`,
        solution: `Antall koder: $10^4 = 10{\\,}000$.

Tid i verste fall: $10{\\,}000 \\cdot 5 = 50{\\,}000$ sekunder $= \\frac{50{\\,}000}{3600} \\approx 13{,}9$ timer.`,
        hints: ['Hvert ring har $10$ muligheter', '$1$ time $= 3600$ sekunder'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r1-8-1-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I hvor mange tresifrede tall ($100$--$999$) er siffersummen lik $5$?',
        solution: `Vi søker tall $\\overline{abc}$ der $a + b + c = 5$ med $a \\in \\{1, ..., 9\\}$ og $b, c \\in \\{0, ..., 9\\}$.

Siden $a \\geq 1$ setter vi $a' = a - 1$, slik at $a' + b + c = 4$ med $a', b, c \\geq 0$ og $a' \\leq 8$, $b, c \\leq 9$.

Siden $a' + b + c = 4$ og alle er $\\leq 4$, er begrensningene automatisk oppfylt.

Antall løsninger i ikke-negative heltall av $a' + b + c = 4$:

$$\\binom{4 + 2}{2} = \\binom{6}{2} = 15$$

Det finnes $15$ slike tresifrede tall.`,
        hints: ['La $a$ være hundrerplassen ($a \\geq 1$)', 'Skriv $a = a\\prime + 1$ slik at $a\\prime \\geq 0$', 'Bruk «stjerner og stolper»-metoden'],
        answer: 15,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r1-8-1-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-8-1-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En reise fra by A til by C går via by B. Det finnes $3$ veier fra A til B og $4$ veier fra B til C. I tillegg finnes $2$ direkte veier fra A til C.

a) På hvor mange måter kan du reise fra A til C?
b) På hvor mange måter kan du reise fra A til C og tilbake til A uten å bruke samme vei to ganger?`,
        solution: `a) Via B: $3 \\cdot 4 = 12$ muligheter. Direkte: $2$ muligheter.

Totalt (addisjonsprinsippet): $12 + 2 = 14$ måter.

b) Tur: $14$ måter. Retur: Én vei er brukt opp.

Hvis turen gikk via B (brukte én A-B-vei og én B-C-vei): Retur via B: $2 \\cdot 3 = 6$ (men vi kan også bruke direkte $= 2$). Retur: $6 + 2 = 8$ måter. Antall slike turer: $12 \\cdot 8 = 96$.

Hvis turen gikk direkte: Retur via B: $3 \\cdot 4 = 12$. Retur direkte: $1$. Retur: $12 + 1 = 13$ måter. Antall slike turer: $2 \\cdot 13 = 26$.

Totalt: $96 + 26 = 122$ tur-retur-reiser.`,
        hints: ['Bruk addisjonsprinsippet for de ulike rutetypene', 'For del b) må du skille mellom ruter via B og direkte ruter'],
        answer: 122,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-8-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Valgtre:** Visuell fremstilling der hver forgrening representerer et delvalg.

**Multiplikasjonsprinsippet:** Når $k$ delvalg gjøres etter hverandre med $n_1, n_2, \\ldots, n_k$ muligheter, er totalt antall: $n_1 \\cdot n_2 \\cdot \\ldots \\cdot n_k$.

**Addisjonsprinsippet:** Når valg utelukker hverandre (ELLER), adderer vi: $n_1 + n_2 + \\ldots + n_k$.

**Huskeregel:** «OG» betyr multiplikasjon, «ELLER» betyr addisjon.

**Med/uten gjentakelse:** Uten gjentakelse reduseres antall muligheter for hvert steg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2: Permutasjoner og kombinasjoner
// ============================================================================

export const CHAPTER_R1_8_2: TextbookChapter = {
  id: 'r1-8-2',
  courseId: 'r1',
  chapterNumber: '8.2',
  title: 'Permutasjoner og kombinasjoner',
  description: 'Lær om fakultet, permutasjoner, kombinasjoner, binomialkoeffisienter og Pascals trekant.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne fakultet og bruke det i tellemetoder',
    'skille mellom permutasjoner (der rekkefølge teller) og kombinasjoner (der rekkefølge ikke teller)',
    'beregne binomialkoeffisienter og kjenne Pascals trekant',
    'anvende permutasjoner og kombinasjoner i praktiske problemer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-8-2-intro',
      type: 'text',
      content: `## Ordnede og uordnede utvalg

Når vi velger elementer fra en mengde, er det avgjørende om **rekkefølgen** har betydning eller ikke.

- **Ordnet utvalg (permutasjon):** Rekkefølgen teller. Å velge leder og nestleder er noe annet enn nestleder og leder.
- **Uordnet utvalg (kombinasjon):** Rekkefølgen er likegyldig. Et utvalg av tre personer til en komité er det samme uansett hvilken rekkefølge de velges i.

Begge tilfellene kan beregnes effektivt med formler basert på **fakultet**.`,
    },

    // ========== FAKULTET ==========
    {
      id: 'r1-8-2-def-fakultet',
      type: 'definition',
      title: 'Fakultet',
      content: `For et positivt heltall $n$ er **$n$ fakultet** definert som:

$$n! = n \\cdot (n-1) \\cdot (n-2) \\cdot \\ldots \\cdot 2 \\cdot 1$$

Spesialtilfelle:
$$0! = 1 \\quad \\text{(per definisjon)}$$

**Eksempler:**
- $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$
- $3! = 3 \\cdot 2 \\cdot 1 = 6$
- $1! = 1$`,
    },

    {
      id: 'r1-8-2-note-fakultet',
      type: 'note',
      title: 'Nyttig egenskap',
      content: `Fakultet kan forenkles trinnvis:

$$n! = n \\cdot (n-1)!$$

Dette betyr at $\\frac{n!}{(n-r)!} = n \\cdot (n-1) \\cdot \\ldots \\cdot (n-r+1)$, som er produktet av de $r$ største faktorene i $n!$.`,
    },

    // Oppgave 1
    {
      id: 'r1-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut.',
        subTasks: [
          { label: 'a', task: '$6!$', solution: '$6! = 720$', answer: 720 },
          { label: 'b', task: '$\\frac{8!}{6!}$', solution: '$\\frac{8!}{6!} = 8 \\cdot 7 = 56$', answer: 56 },
          { label: 'c', task: '$\\frac{10!}{7! \\cdot 3!}$', solution: '$\\frac{10!}{7! \\cdot 3!} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$', answer: 120 },
          { label: 'd', task: '$\\frac{100!}{99!}$', solution: '$\\frac{100!}{99!} = 100$', answer: 100 },
        ],
        hints: ['Forkort så mye som mulig før du regner ut'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PERMUTASJONER ==========
    {
      id: 'r1-8-2-def-permutasjon',
      type: 'definition',
      title: 'Permutasjoner',
      content: `En **permutasjon** er et ordnet utvalg der rekkefølgen har betydning.

**Permutasjon av alle $n$ elementer:**
$$P(n) = n!$$

**Permutasjon av $r$ elementer valgt fra $n$ elementer ($r \\leq n$):**
$$P(n, r) = \\frac{n!}{(n-r)!} = n \\cdot (n-1) \\cdot \\ldots \\cdot (n-r+1)$$

$P(n, r)$ teller antall måter å ordne $r$ elementer valgt fra $n$ forskjellige elementer.`,
    },

    // Eksempel: Permutasjoner
    {
      id: 'r1-8-2-example-perm',
      type: 'example',
      title: 'Eksempel 1: Permutasjoner',
      problem: `a) På hvor mange måter kan $5$ bøker plasseres på en hylle?
b) $10$ løpere deltar i et løp. På hvor mange måter kan gull, sølv og bronse fordeles?`,
      solution: `**Løsning:**

a) Alle $5$ bøkene skal ordnes: $P(5) = 5! = 120$ måter.

b) Vi velger $3$ løpere fra $10$ der rekkefølgen betyr noe:

$$P(10, 3) = \\frac{10!}{7!} = 10 \\cdot 9 \\cdot 8 = 720 \\text{ måter}$$`,
    },

    // Oppgave 2
    {
      id: 'r1-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'En kode består av bokstavene A, B, C, D, E brukt nøyaktig én gang. Hvor mange koder kan lages?',
        solution: `$P(5) = 5! = 120$ koder.`,
        answer: 120,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r1-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en klasse med $25$ elever skal det velges president, visepresident og kasserer. Ingen kan ha mer enn ett verv. Hvor mange mulige utfall finnes?',
        solution: `$P(25, 3) = 25 \\cdot 24 \\cdot 23 = 13{\\,}800$ mulige utfall.`,
        hints: ['Rekkefølgen har betydning fordi vervene er forskjellige'],
        answer: 13800,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KOMBINASJONER ==========
    {
      id: 'r1-8-2-def-kombinasjon',
      type: 'definition',
      title: 'Kombinasjoner og binomialkoeffisienter',
      content: `En **kombinasjon** er et uordnet utvalg der rekkefølgen **ikke** har betydning.

Antall måter å velge $r$ elementer fra $n$ elementer (uten hensyn til rekkefølge):

$$C(n, r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$

Symbolet $\\binom{n}{r}$ kalles en **binomialkoeffisient** og leses «$n$ over $r$».

**Viktige egenskaper:**
- $\\binom{n}{0} = \\binom{n}{n} = 1$
- $\\binom{n}{1} = n$
- $\\binom{n}{r} = \\binom{n}{n-r}$ (symmetri)`,
    },

    {
      id: 'r1-8-2-warning-perm-komb',
      type: 'warning',
      title: 'Permutasjon vs. kombinasjon',
      content: `Den vanligste feilen er å blande permutasjoner og kombinasjoner.

**Spør deg selv:** Betyr rekkefølgen noe?
- Velge $3$ vinnere (1., 2., 3. plass) fra $10$ → **permutasjon** ($P(10,3) = 720$)
- Velge $3$ representanter fra $10$ → **kombinasjon** ($\\binom{10}{3} = 120$)

Sammenhengen: $\\binom{n}{r} = \\frac{P(n,r)}{r!}$ fordi vi deler bort de $r!$ rekkefølgene.`,
    },

    // Eksempel: Kombinasjoner
    {
      id: 'r1-8-2-example-komb',
      type: 'example',
      title: 'Eksempel 2: Kombinasjoner',
      problem: `I en gruppe på $12$ personer skal det velges en komité med $4$ medlemmer. Hvor mange mulige komitéer finnes?`,
      solution: `**Løsning:**

Rekkefølgen har ikke betydning (en komité er den samme uansett hvilken rekkefølge medlemmene velges i).

$$\\binom{12}{4} = \\frac{12!}{4! \\cdot 8!} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{11{\\,}880}{24} = 495$$

Det finnes $495$ mulige komitéer.`,
    },

    // Oppgave 4
    {
      id: 'r1-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut.',
        subTasks: [
          { label: 'a', task: '$\\binom{7}{3}$', solution: '$\\binom{7}{3} = \\frac{7!}{3! \\cdot 4!} = \\frac{7 \\cdot 6 \\cdot 5}{6} = 35$', answer: 35 },
          { label: 'b', task: '$\\binom{10}{2}$', solution: '$\\binom{10}{2} = \\frac{10 \\cdot 9}{2} = 45$', answer: 45 },
          { label: 'c', task: '$\\binom{8}{8}$', solution: '$\\binom{8}{8} = 1$', answer: 1 },
          { label: 'd', task: '$\\binom{20}{18}$', solution: '$\\binom{20}{18} = \\binom{20}{2} = \\frac{20 \\cdot 19}{2} = 190$ (bruker symmetri)', answer: 190 },
        ],
        hints: ['Bruk symmetriegenskapen $\\binom{n}{r} = \\binom{n}{n-r}$ for å forenkle'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-8-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'I Lotto velger du $7$ tall fra $1$ til $34$. Hvor mange mulige Lotto-rekker finnes?',
        solution: `$$\\binom{34}{7} = \\frac{34!}{7! \\cdot 27!} = \\frac{34 \\cdot 33 \\cdot 32 \\cdot 31 \\cdot 30 \\cdot 29 \\cdot 28}{5040} = 5{\\,}379{\\,}616$$`,
        hints: ['Rekkefølgen du velger tallene i har ikke noe å si'],
        answer: 5379616,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PASCALS TREKANT ==========
    {
      id: 'r1-8-2-pascals-intro',
      type: 'text',
      content: `## Pascals trekant

Binomialkoeffisientene kan ordnes i en trekant kjent som **Pascals trekant**. Hvert tall er summen av de to tallene rett over:

$$\\begin{array}{ccccccccccc}
& & & & & 1 & & & & & \\\\
& & & & 1 & & 1 & & & & \\\\
& & & 1 & & 2 & & 1 & & & \\\\
& & 1 & & 3 & & 3 & & 1 & & \\\\
& 1 & & 4 & & 6 & & 4 & & 1 & \\\\
1 & & 5 & & 10 & & 10 & & 5 & & 1
\\end{array}$$

Rad $n$ (telt fra $0$) inneholder tallene $\\binom{n}{0}, \\binom{n}{1}, \\ldots, \\binom{n}{n}$.`,
    },

    // Setning: Pascals regel
    {
      id: 'r1-8-2-thm-pascal',
      type: 'theorem',
      title: 'Pascals regel',
      content: `For alle heltall $n \\geq 1$ og $1 \\leq r \\leq n-1$:

$$\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$$

Denne regelen forklarer hvorfor hvert tall i Pascals trekant er summen av de to over.`,
      proof: `**Bevis:**

$$\\binom{n-1}{r-1} + \\binom{n-1}{r} = \\frac{(n-1)!}{(r-1)!(n-r)!} + \\frac{(n-1)!}{r!(n-r-1)!}$$

$$= \\frac{(n-1)! \\cdot r}{r!(n-r)!} + \\frac{(n-1)! \\cdot (n-r)}{r!(n-r)!} = \\frac{(n-1)!(r + n - r)}{r!(n-r)!} = \\frac{n!}{r!(n-r)!} = \\binom{n}{r} \\quad \\square$$`,
    },

    // Oppgave 6
    {
      id: 'r1-8-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk Pascals regel til å beregne $\\binom{6}{2}$ ved hjelp av rad $5$ i Pascals trekant.',
        solution: `$\\binom{6}{2} = \\binom{5}{1} + \\binom{5}{2} = 5 + 10 = 15$`,
        answer: 15,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-8-2-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vis at summen av alle binomialkoeffisientene i rad $n$ er $2^n$, dvs. $\\displaystyle\\sum_{r=0}^{n} \\binom{n}{r} = 2^n$.',
        solution: `Sett $x = 1$ og $y = 1$ i binomialformelen $(x+y)^n = \\sum_{r=0}^{n} \\binom{n}{r} x^{n-r} y^r$:

$$(1+1)^n = \\sum_{r=0}^{n} \\binom{n}{r} = 2^n \\quad \\square$$`,
        hints: ['Bruk binomialformelen med $x = y = 1$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel: Bruk av kombinasjoner
    {
      id: 'r1-8-2-example-poker',
      type: 'example',
      title: 'Eksempel 3: Pokerhender',
      problem: `En pokerhand består av $5$ kort fra en standard kortstokk med $52$ kort. Hvor mange mulige hender finnes? Hvor mange av dem er «flush» (alle $5$ kort i samme farge)?`,
      solution: `**Løsning:**

Antall hender totalt: $\\binom{52}{5} = \\frac{52!}{5! \\cdot 47!} = \\frac{52 \\cdot 51 \\cdot 50 \\cdot 49 \\cdot 48}{120} = 2{\\,}598{\\,}960$

For flush: Velg farge ($4$ muligheter), deretter $5$ av $13$ kort i den fargen:

$$4 \\cdot \\binom{13}{5} = 4 \\cdot 1287 = 5148$$

(Dette inkluderer straight flush, som er en undergruppe.)`,
    },

    // Oppgave 8
    {
      id: 'r1-8-2-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'En klasse har $14$ gutter og $11$ jenter. På hvor mange måter kan det velges en gruppe på $5$ elever som inneholder nøyaktig $3$ gutter og $2$ jenter?',
        solution: `Velg $3$ gutter fra $14$: $\\binom{14}{3} = 364$.
Velg $2$ jenter fra $11$: $\\binom{11}{2} = 55$.

Totalt (multiplikasjonsprinsippet): $364 \\cdot 55 = 20{\\,}020$ mulige grupper.`,
        hints: ['Velg gutter og jenter hver for seg, multipliser deretter'],
        answer: 20020,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r1-8-2-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fra en kortstokk med $52$ kort trekkes $5$ kort. Hvor mange hender inneholder nøyaktig $2$ ess?',
        solution: `Velg $2$ ess fra $4$: $\\binom{4}{2} = 6$.
Velg $3$ andre kort fra de $48$ ikke-essene: $\\binom{48}{3} = 17{\\,}296$.

Totalt: $6 \\cdot 17{\\,}296 = 103{\\,}776$ hender.`,
        hints: ['Velg essene separat fra resten av kortene'],
        answer: 103776,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r1-8-2-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar kort forskjellen mellom $P(8, 3)$ og $\\binom{8}{3}$, og regn ut begge.',
        solution: `$P(8,3)$ = antall ordnede utvalg av $3$ fra $8$: $P(8,3) = 8 \\cdot 7 \\cdot 6 = 336$.

$\\binom{8}{3}$ = antall uordnede utvalg av $3$ fra $8$: $\\binom{8}{3} = \\frac{336}{3!} = \\frac{336}{6} = 56$.

$P(8,3)$ er $3! = 6$ ganger større fordi den teller alle rekkefølger.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r1-8-2-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvor mange diagonaler har en konveks $n$-kant? Regn ut for $n = 8$.',
        solution: `Antall linjestykker mellom $n$ hjørner: $\\binom{n}{2}$. Trekk fra de $n$ sidene:

$$\\text{Antall diagonaler} = \\binom{n}{2} - n = \\frac{n(n-1)}{2} - n = \\frac{n(n-3)}{2}$$

For $n = 8$: $\\frac{8 \\cdot 5}{2} = 20$ diagonaler.`,
        hints: ['Hvert par av hjørner gir et linjestykke', 'Trekk fra sidekantene'],
        answer: 20,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r1-8-2-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hvor mange bokstavkombinasjoner (ordnede) kan lages av bokstavene i ordet BANANA?',
        solution: `BANANA har $6$ bokstaver: B (1 stk), A (3 stk), N (2 stk).

Antall permutasjoner med gjentakelse:

$$\\frac{6!}{1! \\cdot 3! \\cdot 2!} = \\frac{720}{1 \\cdot 6 \\cdot 2} = \\frac{720}{12} = 60$$`,
        hints: ['Noen bokstaver gjentas -- bruk formelen for permutasjoner med like elementer', 'Tell opp hvor mange ganger hver bokstav forekommer'],
        answer: 60,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r1-8-2-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I et rutenett skal du gå fra hjørne A (øverst til venstre) til hjørne B (nederst til høyre). Du kan bare gå til høyre (H) eller nedover (N). Rutenettet er $5$ steg til høyre og $3$ steg ned. Hvor mange korteste veier finnes?',
        solution: `En korteste vei består av $5$ steg H og $3$ steg N, altså $8$ steg totalt. Vi velger hvilke $3$ av $8$ steg som er nedover:

$$\\binom{8}{3} = \\frac{8!}{3! \\cdot 5!} = \\frac{8 \\cdot 7 \\cdot 6}{6} = 56$$

Alternativt: $\\binom{8}{5} = 56$ (velg steg til høyre).`,
        hints: ['Enhver korteste vei har $5 + 3 = 8$ steg', 'Velg hvilke steg som er nedover'],
        answer: 56,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r1-8-2-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Ved bruk av binomialformelen $(a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$:

a) Utvid $(x + 2)^4$.
b) Finn koeffisienten foran $x^3$ i utviklingen av $(2x - 3)^5$.`,
        solution: `a) $(x + 2)^4 = \\sum_{r=0}^{4} \\binom{4}{r} x^{4-r} \\cdot 2^r$

$= x^4 + 4 \\cdot 2x^3 + 6 \\cdot 4x^2 + 4 \\cdot 8x + 16$

$= x^4 + 8x^3 + 24x^2 + 32x + 16$

b) $(2x - 3)^5 = \\sum_{r=0}^{5} \\binom{5}{r} (2x)^{5-r}(-3)^r$

Leddet med $x^3$: $n - r = 3$, altså $r = 2$:

$$\\binom{5}{2}(2x)^3(-3)^2 = 10 \\cdot 8x^3 \\cdot 9 = 720x^3$$

Koeffisienten foran $x^3$ er $720$.`,
        hints: ['Bruk binomialformelen systematisk', 'I del b): Finn hvilken $r$-verdi som gir $x^3$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15
    {
      id: 'r1-8-2-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'medium',
        task: 'I et fotballag med $20$ spillere skal det velges $11$ som starter kampen. Hvor mange mulige startoppstillinger finnes (uten hensyn til posisjon)?',
        solution: `$$\\binom{20}{11} = \\binom{20}{9} = \\frac{20!}{9! \\cdot 11!} = 167{\\,}960$$`,
        hints: ['Bruk symmetriegenskapen for å gjøre beregningen enklere'],
        answer: 167960,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 16
    {
      id: 'r1-8-2-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r1-8-2-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis algebraisk at $\\binom{n}{r} = \\binom{n}{n-r}$.',
        solution: `$$\\binom{n}{n-r} = \\frac{n!}{(n-r)!(n-(n-r))!} = \\frac{n!}{(n-r)! \\cdot r!} = \\binom{n}{r} \\quad \\square$$

De to uttrykkene har identisk teller og nevner (bare skrevet i ulik rekkefølge).`,
        hints: ['Sett inn i definisjonen og forenkle'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-8-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Fakultet:** $n! = n \\cdot (n-1) \\cdot \\ldots \\cdot 1$, og $0! = 1$.

**Permutasjoner (ordnet utvalg):** $P(n, r) = \\frac{n!}{(n-r)!}$

**Kombinasjoner (uordnet utvalg):** $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$

**Sammenhengen:** $\\binom{n}{r} = \\frac{P(n,r)}{r!}$

**Pascals regel:** $\\binom{n}{r} = \\binom{n-1}{r-1} + \\binom{n-1}{r}$

**Binomialformelen:** $(a + b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$

**Huskeregel:** Betyr rekkefølgen noe? Ja $\\rightarrow$ permutasjon. Nei $\\rightarrow$ kombinasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3: Grunnleggende sannsynlighet
// ============================================================================

export const CHAPTER_R1_8_3: TextbookChapter = {
  id: 'r1-8-3',
  courseId: 'r1',
  chapterNumber: '8.3',
  title: 'Grunnleggende sannsynlighet',
  description: 'Lær om utfallsrom, hendelser, klassisk sannsynlighet, komplementsetningen og regneregler.',
  estimatedMinutes: 50,
  competenceGoals: [
    'definere utfallsrom og hendelser for et forsøk',
    'beregne sannsynlighet ved hjelp av klassisk sannsynlighet',
    'bruke komplementsetningen til å forenkle beregninger',
    'anvende addisjonssetningen for sannsynlighet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-8-3-intro',
      type: 'text',
      content: `## Sannsynlighet -- fra telling til beregning

Sannsynlighet handler om å tallfeste hvor «trolig» noe er. I kombinatorikken lærte vi å telle mulige utfall. Nå bruker vi dette til å beregne sannsynligheter.

Grunnideen er enkel: Dersom alle utfall er like sannsynlige, er sannsynligheten for en hendelse lik forholdet mellom antall gunstige utfall og totalt antall utfall.`,
    },

    // ========== UTFALLSROM ==========
    {
      id: 'r1-8-3-def-utfallsrom',
      type: 'definition',
      title: 'Utfallsrom og hendelser',
      content: `**Stokastisk forsøk:** Et forsøk med usikkert utfall (f.eks. terningkast, korttrekk).

**Utfallsrom ($\\Omega$):** Mengden av alle mulige utfall.

**Eksempel:** Kast med én terning: $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$

**Hendelse ($A$):** En delmengde av utfallsrommet.

**Eksempel:** «Kaste partall»: $A = \\{2, 4, 6\\}$

**Notasjon:**
- $|\\Omega|$ = antall elementer i utfallsrommet
- $|A|$ = antall gunstige utfall for hendelse $A$`,
    },

    // Oppgave 1
    {
      id: 'r1-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv opp utfallsrommet $\\Omega$ og hendelsen $A$ = «summen er $7$» når du kaster to terninger.',
        solution: `$\\Omega = \\{(i,j) : i, j \\in \\{1,2,3,4,5,6\\}\\}$, $|\\Omega| = 36$.

$A = \\{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\\}$, $|A| = 6$.`,
        hints: ['Hvert utfall er et ordnet par $(i, j)$ der $i$ og $j$ er fra $1$ til $6$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KLASSISK SANNSYNLIGHET ==========
    {
      id: 'r1-8-3-def-klassisk',
      type: 'definition',
      title: 'Klassisk sannsynlighet (Laplace)',
      content: `Dersom alle utfall i utfallsrommet $\\Omega$ er **like sannsynlige**, er sannsynligheten for en hendelse $A$:

$$P(A) = \\frac{|A|}{|\\Omega|} = \\frac{\\text{antall gunstige utfall}}{\\text{totalt antall utfall}}$$

**Krav:** $0 \\leq P(A) \\leq 1$ for alle hendelser $A$.
- $P(A) = 0$: hendelsen er umulig
- $P(A) = 1$: hendelsen er sikker`,
    },

    // Eksempel 1
    {
      id: 'r1-8-3-example-terning',
      type: 'example',
      title: 'Eksempel 1: Terningkast',
      problem: `Du kaster to terninger. Finn sannsynligheten for at summen er $7$.`,
      solution: `**Løsning:**

Fra oppgave 1 vet vi at $|\\Omega| = 36$ og $|A| = 6$.

$$P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6} \\approx 0{,}167$$`,
    },

    // Oppgave 2
    {
      id: 'r1-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Du kaster to terninger. Finn sannsynligheten for at summen er minst $10$.',
        solution: `Gunstige utfall for sum $\\geq 10$:

Sum $10$: $(4,6), (5,5), (6,4)$ -- $3$ utfall
Sum $11$: $(5,6), (6,5)$ -- $2$ utfall
Sum $12$: $(6,6)$ -- $1$ utfall

$|A| = 3 + 2 + 1 = 6$

$P(\\text{sum} \\geq 10) = \\frac{6}{36} = \\frac{1}{6}$`,
        hints: ['List opp alle par $(i,j)$ der $i + j \\geq 10$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r1-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fra en kortstokk med $52$ kort trekkes ett kort tilfeldig. Finn sannsynligheten for å trekke:',
        subTasks: [
          { label: 'a', task: 'et ess', solution: '$P(\\text{ess}) = \\frac{4}{52} = \\frac{1}{13}$' },
          { label: 'b', task: 'et hjerterkort', solution: '$P(\\text{hjerter}) = \\frac{13}{52} = \\frac{1}{4}$' },
          { label: 'c', task: 'hjerter ess', solution: '$P(\\text{hjerter ess}) = \\frac{1}{52}$' },
          { label: 'd', task: 'et bildekort (knekt, dame, konge)', solution: '$P(\\text{bildekort}) = \\frac{12}{52} = \\frac{3}{13}$' },
        ],
        hints: ['Det er $4$ ess, $13$ kort i hver farge, $12$ bildekor totalt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KOMPLEMENTSETNINGEN ==========
    {
      id: 'r1-8-3-thm-komplement',
      type: 'theorem',
      title: 'Komplementsetningen',
      content: `Komplementet $A^c$ (eller $\\bar{A}$) til en hendelse $A$ er hendelsen «$A$ inntreffer **ikke**».

$$P(A^c) = 1 - P(A)$$

**Nyttig når:** Det er lettere å telle utfallene der $A$ *ikke* inntreffer enn utfallene der $A$ inntreffer.`,
    },

    // Eksempel: Komplementsetningen
    {
      id: 'r1-8-3-example-komplement',
      type: 'example',
      title: 'Eksempel 2: Komplementsetningen',
      problem: `Du kaster $3$ mynter. Finn sannsynligheten for å få minst én mynt med krone.`,
      solution: `**Løsning:**

$|\\Omega| = 2^3 = 8$ (hver mynt har $2$ utfall).

La $A$ = «minst én krone». Da er $A^c$ = «ingen krone» = «bare mynt».

$P(A^c) = P(\\text{bare mynt}) = \\frac{1}{8}$ (bare utfallet MMM)

$$P(A) = 1 - P(A^c) = 1 - \\frac{1}{8} = \\frac{7}{8}$$`,
    },

    // Oppgave 4
    {
      id: 'r1-8-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du kaster en terning $4$ ganger. Finn sannsynligheten for å få minst én sekser.',
        solution: `La $A$ = «minst én sekser». Da $A^c$ = «ingen seksere».

$P(\\text{ikke sekser per kast}) = \\frac{5}{6}$

$P(A^c) = \\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1296}$

$P(A) = 1 - \\frac{625}{1296} = \\frac{671}{1296} \\approx 0{,}518$`,
        hints: ['Bruk komplementsetningen: $P(\\text{minst én}) = 1 - P(\\text{ingen})$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== ADDISJONSSETNINGEN ==========
    {
      id: 'r1-8-3-thm-addisjon',
      type: 'theorem',
      title: 'Addisjonssetningen',
      content: `For to hendelser $A$ og $B$:

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

der $A \\cup B$ betyr «$A$ eller $B$ (eller begge)» og $A \\cap B$ betyr «$A$ og $B$ (begge)».

**Spesialtilfelle:** Dersom $A$ og $B$ er **disjunkte** ($A \\cap B = \\emptyset$):
$$P(A \\cup B) = P(A) + P(B)$$`,
    },

    // Eksempel: Addisjonssetningen
    {
      id: 'r1-8-3-example-addisjon',
      type: 'example',
      title: 'Eksempel 3: Addisjonssetningen',
      problem: `Du trekker ett kort fra en kortstokk med $52$ kort. Finn sannsynligheten for å trekke et hjerterkort eller et ess.`,
      solution: `**Løsning:**

La $A$ = hjerter og $B$ = ess.

$P(A) = \\frac{13}{52}$, $\\quad P(B) = \\frac{4}{52}$, $\\quad P(A \\cap B) = \\frac{1}{52}$ (hjerter ess)

$$P(A \\cup B) = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$$

Vi trekker fra $P(A \\cap B)$ for å unngå å telle hjerter ess dobbelt.`,
    },

    // Oppgave 5
    {
      id: 'r1-8-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en klasse med $30$ elever spiller $18$ fotball, $14$ håndball, og $8$ spiller begge deler. Finn sannsynligheten for at en tilfeldig valgt elev spiller fotball eller håndball.',
        solution: `$P(F \\cup H) = P(F) + P(H) - P(F \\cap H) = \\frac{18}{30} + \\frac{14}{30} - \\frac{8}{30} = \\frac{24}{30} = \\frac{4}{5}$`,
        hints: ['Bruk addisjonssetningen', 'Trekk fra de som spiller begge deler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r1-8-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'En boks inneholder $5$ røde, $3$ blå og $2$ grønne kuler. Du trekker én kule tilfeldig. Finn sannsynligheten for at kulen er rød eller blå.',
        solution: `Hendelsene «rød» og «blå» er disjunkte (en kule kan ikke være begge deler).

$P(\\text{rød eller blå}) = \\frac{5}{10} + \\frac{3}{10} = \\frac{8}{10} = \\frac{4}{5}$`,
        hints: ['Hendelsene utelukker hverandre -- bruk enkel addisjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SANNSYNLIGHET MED KOMBINATORIKK ==========
    {
      id: 'r1-8-3-komb-intro',
      type: 'text',
      content: `## Sannsynlighet med kombinatorikk

Mange sannsynlighetsproblemer krever at vi teller utfall systematisk med kombinatorikk. Oppskriften er:

1. Bestem utfallsrommet og beregn $|\\Omega|$
2. Bestem hendelsen $A$ og beregn $|A|$
3. Bruk $P(A) = \\frac{|A|}{|\\Omega|}$

Ofte bruker vi $\\binom{n}{r}$ for å telle utfall.`,
    },

    // Eksempel: Sannsynlighet med kombinatorikk
    {
      id: 'r1-8-3-example-komb',
      type: 'example',
      title: 'Eksempel 4: Korttrekk',
      problem: `Fra en kortstokk med $52$ kort trekkes $5$ kort. Finn sannsynligheten for at nøyaktig $3$ av dem er hjerter.`,
      solution: `**Løsning:**

$|\\Omega| = \\binom{52}{5} = 2{\\,}598{\\,}960$

$|A|$: Velg $3$ hjerter fra $13$ og $2$ ikke-hjerter fra $39$:

$$|A| = \\binom{13}{3} \\cdot \\binom{39}{2} = 286 \\cdot 741 = 211{\\,}926$$

$$P(A) = \\frac{211{\\,}926}{2{\\,}598{\\,}960} \\approx 0{,}0815$$`,
    },

    // Oppgave 7
    {
      id: 'r1-8-3-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En komité med $5$ personer velges fra en gruppe med $8$ menn og $6$ kvinner. Finn sannsynligheten for at komitéen har nøyaktig $3$ menn og $2$ kvinner.',
        solution: `$|\\Omega| = \\binom{14}{5} = 2002$

$|A| = \\binom{8}{3} \\cdot \\binom{6}{2} = 56 \\cdot 15 = 840$

$P(A) = \\frac{840}{2002} = \\frac{60}{143} \\approx 0{,}420$`,
        hints: ['Tell gunstige utfall: velg menn og kvinner separat'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r1-8-3-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en boks ligger $10$ kuler nummerert $1$--$10$. Du trekker $3$ kuler tilfeldig (uten tilbakelegging). Finn sannsynligheten for at alle tre kulene har partall.',
        solution: `Partallskuler: $\\{2, 4, 6, 8, 10\\}$, $5$ stk.

$|\\Omega| = \\binom{10}{3} = 120$

$|A| = \\binom{5}{3} = 10$

$P(A) = \\frac{10}{120} = \\frac{1}{12} \\approx 0{,}083$`,
        hints: ['Finn antall partallskuler, og bruk kombinasjoner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r1-8-3-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: '$6$ personer setter seg tilfeldig rundt et rundt bord. Finn sannsynligheten for at to bestemte personer (Per og Kari) sitter ved siden av hverandre.',
        solution: `Rundt bord: Fiks én persons plass (rotasjonssymmetri). De resterende $5$ kan sitte på $5! = 120$ måter.

Gunstig: Per og Kari ved siden av hverandre. Fiks én plass. Per og Kari som blokk: $2!$ interne ordninger, blokken + $3$ andre = $4$ «enheter» som kan plasseres på $4! = 24$ måter rundt bordet.

$|A| = 2 \\cdot 4! = 48$

$P(A) = \\frac{48}{120} = \\frac{2}{5}$`,
        hints: ['Fiks én persons plass for å fjerne rotasjonssymmetri', 'Betrakt Per og Kari som én blokk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r1-8-3-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'lett',
        task: 'Du kaster en mynt $5$ ganger. Finn sannsynligheten for å få nøyaktig $3$ krone.',
        solution: `$|\\Omega| = 2^5 = 32$

$|A| = \\binom{5}{3} = 10$ (velg hvilke $3$ av $5$ kast som gir krone)

$P(A) = \\frac{10}{32} = \\frac{5}{16} = 0{,}3125$`,
        hints: ['Hvert kast har $2$ utfall, og vi velger hvilke kast som gir krone'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r1-8-3-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en gruppe på $20$ personer er $5$ venstrehendte. Du velger $4$ personer tilfeldig. Finn sannsynligheten for at minst én er venstrehendt.',
        solution: `Bruk komplementsetningen: $P(\\text{minst 1 v.h.}) = 1 - P(\\text{ingen v.h.})$

$P(\\text{ingen v.h.}) = \\frac{\\binom{15}{4}}{\\binom{20}{4}} = \\frac{1365}{4845} = \\frac{91}{323}$

$P(\\text{minst 1 v.h.}) = 1 - \\frac{91}{323} = \\frac{232}{323} \\approx 0{,}718$`,
        hints: ['Bruk komplementsetningen: Det er lettere å beregne sannsynligheten for at ingen er venstrehendt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r1-8-3-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `I en klasse på $25$ elever har $7$ fødselsdag i januar. Tre tilfeldige elever trekkes ut til å holde presentasjon. Finn sannsynligheten for at:

a) Alle tre har fødselsdag i januar.
b) Ingen av de tre har fødselsdag i januar.
c) Nøyaktig én har fødselsdag i januar.`,
        solution: `$|\\Omega| = \\binom{25}{3} = 2300$

a) $P(\\text{alle 3 i jan}) = \\frac{\\binom{7}{3}}{\\binom{25}{3}} = \\frac{35}{2300} = \\frac{7}{460} \\approx 0{,}0152$

b) $P(\\text{ingen i jan}) = \\frac{\\binom{18}{3}}{\\binom{25}{3}} = \\frac{816}{2300} = \\frac{204}{575} \\approx 0{,}355$

c) $P(\\text{nøyaktig 1 i jan}) = \\frac{\\binom{7}{1} \\cdot \\binom{18}{2}}{\\binom{25}{3}} = \\frac{7 \\cdot 153}{2300} = \\frac{1071}{2300} \\approx 0{,}466$`,
        hints: ['Bruk kombinasjoner til å telle gunstige utfall i hvert tilfelle'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r1-8-3-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I Lotto trekkes $7$ tall fra $1$--$34$. Finn sannsynligheten for å få nøyaktig $4$ riktige dersom du har levert én rekke.',
        solution: `Du har $7$ «riktige» tall og $27$ «gale» tall.

$|\\Omega| = \\binom{34}{7}$

$|A| = \\binom{7}{4} \\cdot \\binom{27}{3} = 35 \\cdot 2925 = 102{\\,}375$

$P(A) = \\frac{102{\\,}375}{\\binom{34}{7}} = \\frac{102{\\,}375}{5{\\,}379{\\,}616} \\approx 0{,}01903$`,
        hints: ['Velg $4$ av de $7$ riktige tallene og $3$ av de $27$ gale tallene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r1-8-3-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'To terninger kastes. La $A$ = «summen er $8$» og $B$ = «begge viser partall». Finn $P(A)$, $P(B)$, $P(A \\cap B)$ og $P(A \\cup B)$.',
        solution: `$|\\Omega| = 36$.

$A = \\{(2,6),(3,5),(4,4),(5,3),(6,2)\\}$, $|A| = 5$, $P(A) = \\frac{5}{36}$

$B$: Begge partall. $3$ valg for hver terning, $|B| = 9$, $P(B) = \\frac{9}{36} = \\frac{1}{4}$

$A \\cap B = \\{(2,6),(4,4),(6,2)\\}$, $P(A \\cap B) = \\frac{3}{36} = \\frac{1}{12}$

$P(A \\cup B) = \\frac{5}{36} + \\frac{9}{36} - \\frac{3}{36} = \\frac{11}{36}$`,
        hints: ['List opp utfallene for $A$ og $B$ separat, og finn snittet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15
    {
      id: 'r1-8-3-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r1-8-3-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Fødselsdagsproblemet:** I en gruppe på $n$ personer, hva er sannsynligheten for at minst to har fødselsdag på samme dag? (Anta $365$ dager, alle like sannsynlige.)

a) Sett opp uttrykket for $P(\\text{alle forskjellige})$.
b) Beregn sannsynligheten for at minst to deler fødselsdag når $n = 23$.`,
        solution: `a) $P(\\text{alle forskjellige}) = \\frac{365}{365} \\cdot \\frac{364}{365} \\cdot \\frac{363}{365} \\cdot \\ldots \\cdot \\frac{365 - n + 1}{365} = \\frac{P(365, n)}{365^n}$

b) For $n = 23$:

$P(\\text{alle forskjellige}) = \\frac{365!}{342! \\cdot 365^{23}} \\approx 0{,}4927$

$P(\\text{minst to like}) = 1 - 0{,}4927 \\approx 0{,}507$

Overraskende: Med bare $23$ personer er det mer sannsynlig enn ikke at minst to deler fødselsdag!`,
        hints: ['Bruk komplementsetningen', 'Tell sannsynligheten for at alle har forskjellig fødselsdag ved å velge dager etter tur'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-8-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Utfallsrom** $\\Omega$: Mengden av alle mulige utfall.

**Klassisk sannsynlighet:** $P(A) = \\frac{|A|}{|\\Omega|}$ (alle utfall like sannsynlige).

**Komplementsetningen:** $P(A^c) = 1 - P(A)$ -- spesielt nyttig for «minst én»-problemer.

**Addisjonssetningen:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.

**Sannsynlighet med kombinatorikk:** Bruk $\\binom{n}{r}$ til å telle gunstige og totale utfall systematisk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4: Betinget sannsynlighet
// ============================================================================

export const CHAPTER_R1_8_4: TextbookChapter = {
  id: 'r1-8-4',
  courseId: 'r1',
  chapterNumber: '8.4',
  title: 'Betinget sannsynlighet',
  description: 'Lær om betinget sannsynlighet, uavhengige hendelser, produktsetningen og totalsetningen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne betinget sannsynlighet og tolke den i kontekst',
    'avgjøre om hendelser er uavhengige',
    'anvende produktsetningen for avhengige og uavhengige hendelser',
    'bruke totalsetningen til å beregne sannsynligheter via oppdeling',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-8-4-intro',
      type: 'text',
      content: `## Betinget sannsynlighet

Ofte endres sannsynligheten for en hendelse når vi får ny informasjon. Dersom du vet at en terning viser et partall, er sannsynligheten for en sekser ikke lenger $\\frac{1}{6}$, men $\\frac{1}{3}$.

Betinget sannsynlighet formaliserer dette: «Hva er sannsynligheten for $A$, gitt at $B$ har inntruffet?»`,
    },

    // ========== DEFINISJON ==========
    {
      id: 'r1-8-4-def-betinget',
      type: 'definition',
      title: 'Betinget sannsynlighet',
      content: `Den betingede sannsynligheten for $A$ gitt $B$ er:

$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0$$

**Tolkning:** Vi innskrenker utfallsrommet til $B$ og ser på andelen av $B$ som også tilhører $A$.`,
    },

    // Eksempel 1
    {
      id: 'r1-8-4-example-betinget',
      type: 'example',
      title: 'Eksempel 1: Betinget sannsynlighet med terning',
      problem: `Du kaster en terning. La $A$ = «viser $6$» og $B$ = «viser partall». Finn $P(A \\mid B)$.`,
      solution: `**Løsning:**

$P(A \\cap B) = P(\\text{viser } 6) = \\frac{1}{6}$ (terning som viser $6$ er også partall)

$P(B) = P(\\text{partall}) = \\frac{3}{6} = \\frac{1}{2}$

$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{1/6}{1/2} = \\frac{1}{3}$$

Gitt at terningen viser partall ($2$, $4$ eller $6$), er det $1$ av $3$ muligheter som gir $6$.`,
    },

    // Oppgave 1
    {
      id: 'r1-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Du trekker ett kort fra en kortstokk med $52$ kort. La $A$ = «kortet er en dame» og $B$ = «kortet er et bildekort (knekt, dame, konge)». Finn $P(A \\mid B)$.',
        solution: `$P(A \\cap B) = P(\\text{dame}) = \\frac{4}{52}$ (damer er bildekor)

$P(B) = \\frac{12}{52}$

$P(A \\mid B) = \\frac{4/52}{12/52} = \\frac{4}{12} = \\frac{1}{3}$`,
        hints: ['En dame er alltid et bildekort, så $A \\cap B = A$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r1-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: `I en undersøkelse blant $200$ elever fant man:
- $120$ liker fotball
- $80$ liker håndball
- $40$ liker begge deler

En tilfeldig elev velges. Finn:
a) $P(\\text{fotball} \\mid \\text{håndball})$
b) $P(\\text{håndball} \\mid \\text{fotball})$`,
        solution: `a) $P(F \\mid H) = \\frac{P(F \\cap H)}{P(H)} = \\frac{40/200}{80/200} = \\frac{40}{80} = \\frac{1}{2}$

b) $P(H \\mid F) = \\frac{P(F \\cap H)}{P(F)} = \\frac{40/200}{120/200} = \\frac{40}{120} = \\frac{1}{3}$`,
        hints: ['Bruk definisjonen direkte', 'Merk at $P(A \\mid B) \\neq P(B \\mid A)$ generelt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRODUKTSETNINGEN ==========
    {
      id: 'r1-8-4-thm-produkt',
      type: 'theorem',
      title: 'Produktsetningen (multiplikasjonsregelen)',
      content: `Fra definisjonen av betinget sannsynlighet følger **produktsetningen**:

$$P(A \\cap B) = P(B) \\cdot P(A \\mid B) = P(A) \\cdot P(B \\mid A)$$

For tre hendelser:

$$P(A \\cap B \\cap C) = P(A) \\cdot P(B \\mid A) \\cdot P(C \\mid A \\cap B)$$

**Bruk:** Produktsetningen er spesielt nyttig ved trekning uten tilbakelegging.`,
    },

    // Eksempel: Produktsetningen
    {
      id: 'r1-8-4-example-produkt',
      type: 'example',
      title: 'Eksempel 2: Trekning uten tilbakelegging',
      problem: `En eske inneholder $8$ røde og $4$ blå kuler. Du trekker $2$ kuler uten tilbakelegging. Finn sannsynligheten for at begge er røde.`,
      solution: `**Løsning:**

La $R_1$ = «første kule er rød» og $R_2$ = «andre kule er rød».

$P(R_1) = \\frac{8}{12} = \\frac{2}{3}$

$P(R_2 \\mid R_1) = \\frac{7}{11}$ (etter at én rød er fjernet: $7$ røde av $11$ kuler)

$$P(R_1 \\cap R_2) = P(R_1) \\cdot P(R_2 \\mid R_1) = \\frac{2}{3} \\cdot \\frac{7}{11} = \\frac{14}{33} \\approx 0{,}424$$`,
    },

    // Oppgave 3
    {
      id: 'r1-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En eske inneholder $6$ hvite og $4$ svarte kuler. Du trekker $3$ kuler uten tilbakelegging. Finn sannsynligheten for at alle tre er hvite.',
        solution: `$P = \\frac{6}{10} \\cdot \\frac{5}{9} \\cdot \\frac{4}{8} = \\frac{120}{720} = \\frac{1}{6} \\approx 0{,}167$

Alternativt: $P = \\frac{\\binom{6}{3}}{\\binom{10}{3}} = \\frac{20}{120} = \\frac{1}{6}$`,
        hints: ['Bruk produktsetningen steg for steg, eller kombinasjoner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== UAVHENGIGE HENDELSER ==========
    {
      id: 'r1-8-4-def-uavhengig',
      type: 'definition',
      title: 'Uavhengige hendelser',
      content: `To hendelser $A$ og $B$ er **uavhengige** dersom det å vite at $B$ har inntruffet ikke endrer sannsynligheten for $A$:

$$P(A \\mid B) = P(A) \\quad \\text{(og tilsvarende } P(B \\mid A) = P(B)\\text{)}$$

**Ekvivalent betingelse:**
$$P(A \\cap B) = P(A) \\cdot P(B)$$

**Viktig:** Uavhengighet $\\neq$ disjunkthet! Disjunkte hendelser ($A \\cap B = \\emptyset$) er tvert imot **sterkt avhengige**.`,
    },

    {
      id: 'r1-8-4-warning-uavhengig',
      type: 'warning',
      title: 'Vanlig feil: Disjunkt vs. uavhengig',
      content: `Mange blander sammen disjunkthet og uavhengighet:

- **Disjunkte** hendelser: $P(A \\cap B) = 0$. Når $A$ skjer, kan **ikke** $B$ skje.
- **Uavhengige** hendelser: $P(A \\cap B) = P(A) \\cdot P(B)$. At $A$ skjer påvirker **ikke** sjansen for $B$.

Eksempel: Kast av to terninger. $A$ = «terning 1 viser $6$» og $B$ = «terning 2 viser $6$» er uavhengige, men ikke disjunkte (begge kan skje samtidig).`,
    },

    // Oppgave 4
    {
      id: 'r1-8-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'En terning kastes og en mynt slås. La $A$ = «terningen viser $5$» og $B$ = «mynten viser krone». Er $A$ og $B$ uavhengige? Finn $P(A \\cap B)$.',
        solution: `$P(A) = \\frac{1}{6}$, $P(B) = \\frac{1}{2}$

Terningkastet påvirker ikke myntkastet, så hendelsene er uavhengige.

$P(A \\cap B) = P(A) \\cdot P(B) = \\frac{1}{6} \\cdot \\frac{1}{2} = \\frac{1}{12}$`,
        hints: ['De to forsøkene (terning og mynt) påvirker ikke hverandre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-8-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `To terninger kastes. La $A$ = «summen er $7$» og $B$ = «terning 1 viser $3$».
a) Finn $P(A)$, $P(B)$ og $P(A \\cap B)$.
b) Er $A$ og $B$ uavhengige?`,
        solution: `a) $P(A) = \\frac{6}{36} = \\frac{1}{6}$, $P(B) = \\frac{6}{36} = \\frac{1}{6}$

$A \\cap B = \\{(3,4)\\}$, $P(A \\cap B) = \\frac{1}{36}$

b) $P(A) \\cdot P(B) = \\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36} = P(A \\cap B)$

Ja, $A$ og $B$ er uavhengige.`,
        hints: ['Sjekk om $P(A \\cap B) = P(A) \\cdot P(B)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: 'r1-8-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sannsynligheten for at en maskin produserer en defekt del er $0{,}02$. Tre deler produseres uavhengig av hverandre. Finn sannsynligheten for at minst én er defekt.',
        solution: `La $D_i$ = «del $i$ er defekt». $P(D_i) = 0{,}02$.

$P(\\text{ingen defekte}) = (1 - 0{,}02)^3 = 0{,}98^3 \\approx 0{,}9412$

$P(\\text{minst én defekt}) = 1 - 0{,}98^3 \\approx 0{,}0588$`,
        hints: ['Bruk komplementsetningen og uavhengighet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== TOTALSETNINGEN ==========
    {
      id: 'r1-8-4-thm-total',
      type: 'theorem',
      title: 'Totalsetningen (loven om total sannsynlighet)',
      content: `La $B_1, B_2, \\ldots, B_n$ være en **partisjon** av utfallsrommet (gjensidig utelukkende hendelser som til sammen dekker $\\Omega$). Da gjelder for enhver hendelse $A$:

$$P(A) = \\sum_{i=1}^{n} P(B_i) \\cdot P(A \\mid B_i)$$

**Spesialtilfelle** med to alternativer ($B$ og $B^c$):

$$P(A) = P(B) \\cdot P(A \\mid B) + P(B^c) \\cdot P(A \\mid B^c)$$`,
    },

    // Eksempel: Totalsetningen
    {
      id: 'r1-8-4-example-total',
      type: 'example',
      title: 'Eksempel 3: Totalsetningen',
      problem: `En fabrikk har to maskiner. Maskin I produserer $60\\%$ av delene, maskin II produserer $40\\%$. Andelen defekte deler er $3\\%$ fra maskin I og $5\\%$ fra maskin II. Finn sannsynligheten for at en tilfeldig valgt del er defekt.`,
      solution: `**Løsning:**

La $D$ = «defekt», $M_1$ = «fra maskin I», $M_2$ = «fra maskin II».

$P(M_1) = 0{,}60$, $P(M_2) = 0{,}40$
$P(D \\mid M_1) = 0{,}03$, $P(D \\mid M_2) = 0{,}05$

Totalsetningen:
$$P(D) = P(M_1) \\cdot P(D \\mid M_1) + P(M_2) \\cdot P(D \\mid M_2)$$
$$= 0{,}60 \\cdot 0{,}03 + 0{,}40 \\cdot 0{,}05 = 0{,}018 + 0{,}020 = 0{,}038$$

Sannsynligheten for en defekt del er $3{,}8\\%$.`,
    },

    // Oppgave 7
    {
      id: 'r1-8-4-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `En butikk får varer fra tre leverandører: A ($50\\%$), B ($30\\%$), C ($20\\%$). Andelen defekte varer er: A: $2\\%$, B: $4\\%$, C: $5\\%$. Finn sannsynligheten for at en tilfeldig vare er defekt.`,
        solution: `$P(D) = 0{,}50 \\cdot 0{,}02 + 0{,}30 \\cdot 0{,}04 + 0{,}20 \\cdot 0{,}05$

$= 0{,}010 + 0{,}012 + 0{,}010 = 0{,}032$

Sannsynligheten for defekt vare er $3{,}2\\%$.`,
        hints: ['Bruk totalsetningen med tre betingelser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r1-8-4-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `En eske har $3$ røde og $2$ blå kuler. Du trekker to kuler uten tilbakelegging. Bruk valgtre og produktsetningen til å finne:
a) $P(\\text{begge røde})$
b) $P(\\text{ulik farge})$
c) $P(\\text{andre kule er rød})$`,
        solution: `a) $P(RR) = \\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$

b) $P(\\text{ulik}) = P(RB) + P(BR) = \\frac{3}{5} \\cdot \\frac{2}{4} + \\frac{2}{5} \\cdot \\frac{3}{4} = \\frac{6}{20} + \\frac{6}{20} = \\frac{12}{20} = \\frac{3}{5}$

c) $P(R_2) = P(RR) + P(BR) = \\frac{3}{10} + \\frac{6}{20} = \\frac{3}{10} + \\frac{3}{10} = \\frac{3}{5}$

(Samme som $P(R_1)$ -- logisk: hver kule er like sannsynlig i andre trekk.)`,
        hints: ['Tegn et valgtre med sannsynligheter på grenene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r1-8-4-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'lett',
        task: 'To mynter kastes. La $A$ = «begge viser krone» og $B$ = «minst én viser krone». Finn $P(A \\mid B)$.',
        solution: `$P(A \\cap B) = P(\\text{begge krone}) = \\frac{1}{4}$ ($A \\subset B$, så $A \\cap B = A$)

$P(B) = 1 - P(\\text{ingen krone}) = 1 - \\frac{1}{4} = \\frac{3}{4}$

$P(A \\mid B) = \\frac{1/4}{3/4} = \\frac{1}{3}$`,
        hints: ['Husk at «begge krone» $\\subseteq$ «minst én krone»'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r1-8-4-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: `$P(A) = 0{,}4$, $P(B) = 0{,}5$, $P(A \\cup B) = 0{,}7$. Finn:
a) $P(A \\cap B)$
b) $P(A \\mid B)$
c) Er $A$ og $B$ uavhengige?`,
        solution: `a) $P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0{,}4 + 0{,}5 - 0{,}7 = 0{,}2$

b) $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}2}{0{,}5} = 0{,}4$

c) $P(A) \\cdot P(B) = 0{,}4 \\cdot 0{,}5 = 0{,}2 = P(A \\cap B)$

Ja, $A$ og $B$ er uavhengige. Vi ser også at $P(A \\mid B) = P(A) = 0{,}4$.`,
        hints: ['Bruk addisjonssetningen for a)', 'For c): sjekk om $P(A \\cap B) = P(A) \\cdot P(B)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r1-8-4-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et forsikringsselskap deler kundene i tre risikokategorier: lav ($50\\%$), middels ($35\\%$) og høy ($15\\%$). Sannsynligheten for skademelding i løpet av et år er henholdsvis $2\\%$, $5\\%$ og $12\\%$. En kunde melder skade. Finn sannsynligheten for at kunden tilhører høyrisikogruppen.`,
        solution: `La $S$ = «skade», $L$, $M$, $H$ = risikogrupper.

$P(S) = 0{,}50 \\cdot 0{,}02 + 0{,}35 \\cdot 0{,}05 + 0{,}15 \\cdot 0{,}12 = 0{,}01 + 0{,}0175 + 0{,}018 = 0{,}0455$

$P(H \\mid S) = \\frac{P(H) \\cdot P(S \\mid H)}{P(S)} = \\frac{0{,}15 \\cdot 0{,}12}{0{,}0455} = \\frac{0{,}018}{0{,}0455} \\approx 0{,}396$

Selv om bare $15\\%$ av kundene er i høyrisikogruppen, er det nesten $40\\%$ sjanse for at en kunde som melder skade tilhører denne gruppen.`,
        hints: ['Bruk totalsetningen for å finne $P(S)$', 'Bruk deretter definisjonen av betinget sannsynlighet (dette er egentlig Bayes\' setning)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r1-8-4-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: `To hendelser $A$ og $B$ oppfyller $P(A) = 0{,}3$ og $P(B \\mid A) = 0{,}6$. Finn $P(A \\cap B)$.`,
        solution: `$P(A \\cap B) = P(A) \\cdot P(B \\mid A) = 0{,}3 \\cdot 0{,}6 = 0{,}18$`,
        hints: ['Bruk produktsetningen direkte'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r1-8-4-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Du har to esker:
- Eske 1: $4$ røde og $6$ blå kuler
- Eske 2: $7$ røde og $3$ blå kuler

Du kaster en mynt. Ved krone trekker du fra eske 1, ved mynt fra eske 2. Kulen du trekker er rød. Finn sannsynligheten for at den ble trukket fra eske 1.`,
        solution: `La $R$ = «rød kule», $E_1$ = «eske 1», $E_2$ = «eske 2».

$P(E_1) = P(E_2) = \\frac{1}{2}$

$P(R \\mid E_1) = \\frac{4}{10}$, $P(R \\mid E_2) = \\frac{7}{10}$

Totalsetningen: $P(R) = \\frac{1}{2} \\cdot \\frac{4}{10} + \\frac{1}{2} \\cdot \\frac{7}{10} = \\frac{2}{10} + \\frac{3{,}5}{10} = \\frac{11}{20}$

$P(E_1 \\mid R) = \\frac{P(E_1) \\cdot P(R \\mid E_1)}{P(R)} = \\frac{\\frac{1}{2} \\cdot \\frac{4}{10}}{\\frac{11}{20}} = \\frac{\\frac{4}{20}}{\\frac{11}{20}} = \\frac{4}{11} \\approx 0{,}364$`,
        hints: ['Bruk totalsetningen for å finne $P(R)$', 'Bruk deretter betinget sannsynlighet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r1-8-4-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Vis at dersom $A$ og $B$ er uavhengige, så er $A$ og $B^c$ også uavhengige.`,
        solution: `Vi skal vise at $P(A \\cap B^c) = P(A) \\cdot P(B^c)$.

$P(A \\cap B^c) = P(A) - P(A \\cap B)$ (fordi $A = (A \\cap B) \\cup (A \\cap B^c)$, disjunkt)

$= P(A) - P(A) \\cdot P(B)$ (bruker uavhengighet)

$= P(A)(1 - P(B))$

$= P(A) \\cdot P(B^c) \\quad \\square$`,
        hints: ['Skriv $P(A \\cap B^c)$ som $P(A) - P(A \\cap B)$', 'Bruk at $A$ og $B$ er uavhengige'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15
    {
      id: 'r1-8-4-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'medium',
        task: `Et system består av to komponenter i serie (begge må virke). Komponent 1 virker med sannsynlighet $0{,}95$ og komponent 2 med sannsynlighet $0{,}90$. Komponentene er uavhengige. Finn sannsynligheten for at systemet virker.`,
        solution: `$P(\\text{system virker}) = P(K_1 \\text{ virker}) \\cdot P(K_2 \\text{ virker}) = 0{,}95 \\cdot 0{,}90 = 0{,}855$`,
        hints: ['I et seriesystem må begge virke -- bruk produktsetningen for uavhengige hendelser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 16
    {
      id: 'r1-8-4-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r1-8-4-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et system består av to komponenter i parallell (minst én må virke). Komponent 1 virker med sannsynlighet $0{,}95$ og komponent 2 med sannsynlighet $0{,}90$. Komponentene er uavhengige. Finn sannsynligheten for at systemet virker.`,
        solution: `$P(\\text{system svikter}) = P(K_1 \\text{ svikter}) \\cdot P(K_2 \\text{ svikter}) = 0{,}05 \\cdot 0{,}10 = 0{,}005$

$P(\\text{system virker}) = 1 - 0{,}005 = 0{,}995$

Alternativt: $P = P(K_1) + P(K_2) - P(K_1 \\cap K_2) = 0{,}95 + 0{,}90 - 0{,}855 = 0{,}995$`,
        hints: ['I et parallellsystem svikter systemet bare hvis begge svikter', 'Bruk komplementsetningen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-8-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Betinget sannsynlighet:** $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$

**Produktsetningen:** $P(A \\cap B) = P(A) \\cdot P(B \\mid A)$

**Uavhengige hendelser:** $P(A \\cap B) = P(A) \\cdot P(B)$ -- det å vite om $B$ endrer ikke sannsynligheten for $A$.

**Totalsetningen:** $P(A) = \\sum P(B_i) \\cdot P(A \\mid B_i)$ -- nyttig for å «dele opp» en beregning.

**Huskeregel:** Disjunkthet og uavhengighet er **ikke** det samme!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5: Binomisk fordeling
// ============================================================================

export const CHAPTER_R1_8_5: TextbookChapter = {
  id: 'r1-8-5',
  courseId: 'r1',
  chapterNumber: '8.5',
  title: 'Binomisk fordeling',
  description: 'Lær om binomiske forsøk, binomisk sannsynlighet, forventningsverdi og standardavvik.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjenkjenne situasjoner som kan modelleres med binomisk fordeling',
    'beregne binomisk sannsynlighet med formelen',
    'finne forventningsverdi og standardavvik for en binomisk fordeling',
    'bruke kumulativ sannsynlighet og komplementsetningen i binomiske problemer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-8-5-intro',
      type: 'text',
      content: `## Fra enkeltforsøk til gjentatte forsøk

Mange situasjoner i virkeligheten handler om å gjenta det samme forsøket flere ganger: Kaste en mynt $10$ ganger, teste $50$ produkter fra en produksjonslinje, spørre $100$ personer om de stemmer ja eller nei. I slike situasjoner er **binomisk fordeling** det naturlige verktøyet.

Binomisk fordeling gir oss sannsynligheten for et bestemt antall «suksesser» i en rekke uavhengige forsøk.`,
    },

    // ========== BINOMISKE FORSØK ==========
    {
      id: 'r1-8-5-def-binomisk',
      type: 'definition',
      title: 'Binomisk forsøk',
      content: `Et **binomisk forsøk** (Bernoulli-forsøk gjentatt $n$ ganger) har følgende egenskaper:

1. Forsøket gjentas **$n$** ganger (fast antall)
2. Hvert delforsøk har nøyaktig **to mulige utfall**: suksess (S) eller fiasko (F)
3. Sannsynligheten for suksess er **konstant**: $P(S) = p$ i hvert delforsøk
4. Delforsøkene er **uavhengige** av hverandre

Den stokastiske variabelen $X$ = «antall suksesser» er da **binomisk fordelt** med parametere $n$ og $p$. Vi skriver $X \\sim \\text{Bin}(n, p)$.`,
    },

    {
      id: 'r1-8-5-note-eksempler',
      type: 'note',
      title: 'Eksempler på binomiske forsøk',
      content: `| Forsøk | $n$ | Suksess | $p$ |
|--------|-----|---------|-----|
| Kaste mynt $10$ ganger | $10$ | Krone | $0{,}5$ |
| Teste $50$ produkter | $50$ | Defekt | $0{,}03$ |
| $20$ flervalgsoppgaver (4 alt.) | $20$ | Riktig (gjetting) | $0{,}25$ |
| Spørre $100$ om de stemmer ja | $100$ | Ja | $p$ (ukjent) |`,
    },

    // Oppgave 1
    {
      id: 'r1-8-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Avgjør om følgende er binomiske forsøk. Begrunn svaret.
a) Kaste en terning $12$ ganger og telle antall seksere.
b) Trekke $5$ kuler fra en urne med $10$ røde og $10$ blå kuler uten tilbakelegging, og telle antall røde.
c) Spørre $50$ tilfeldige personer om de liker sjokolade.`,
        solution: `a) **Ja.** $n = 12$, suksess = sekser, $p = \\frac{1}{6}$, uavhengige kast.

b) **Nei.** Uten tilbakelegging er forsøkene ikke uavhengige, og $p$ endrer seg. (Men kan tilnærmes binomisk hvis populasjonen er mye større enn utvalget.)

c) **Ja** (tilnærmet). $n = 50$, suksess = liker sjokolade, $p$ = andelen som liker sjokolade. Uavhengighet antas fordi personene velges tilfeldig fra en stor populasjon.`,
        hints: ['Sjekk de fire kravene for binomisk forsøk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== BINOMISK SANNSYNLIGHET ==========
    {
      id: 'r1-8-5-thm-formel',
      type: 'theorem',
      title: 'Binomisk sannsynlighet',
      content: `Dersom $X \\sim \\text{Bin}(n, p)$, er sannsynligheten for nøyaktig $k$ suksesser:

$$P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, 2, \\ldots, n$$

der:
- $\\binom{n}{k}$ = antall måter å plassere $k$ suksesser blant $n$ forsøk
- $p^k$ = sannsynligheten for $k$ suksesser
- $(1-p)^{n-k}$ = sannsynligheten for $n-k$ fiaskoer`,
    },

    // Eksempel 1
    {
      id: 'r1-8-5-example-mynt',
      type: 'example',
      title: 'Eksempel 1: Myntkast',
      problem: `Du kaster en rettferdig mynt $8$ ganger. Finn sannsynligheten for nøyaktig $5$ krone.`,
      solution: `**Løsning:**

$X \\sim \\text{Bin}(8, 0{,}5)$

$$P(X = 5) = \\binom{8}{5} \\cdot 0{,}5^5 \\cdot 0{,}5^3 = 56 \\cdot 0{,}5^8 = \\frac{56}{256} = \\frac{7}{32} \\approx 0{,}219$$

$\\binom{8}{5} = 56$ er antall måter å velge hvilke $5$ av $8$ kast som gir krone.`,
    },

    // Oppgave 2
    {
      id: 'r1-8-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Du kaster en terning $6$ ganger. La $X$ = antall seksere. Finn $P(X = 2)$.',
        solution: `$X \\sim \\text{Bin}\\left(6, \\frac{1}{6}\\right)$

$P(X = 2) = \\binom{6}{2} \\left(\\frac{1}{6}\\right)^2 \\left(\\frac{5}{6}\\right)^4 = 15 \\cdot \\frac{1}{36} \\cdot \\frac{625}{1296} = \\frac{9375}{46656} \\approx 0{,}201$`,
        hints: ['$n = 6$, $p = \\frac{1}{6}$, $k = 2$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: 'r1-8-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `En flervalgstest har $10$ spørsmål med $4$ alternativer hver. En elev gjetter på alle. La $X$ = antall riktige. Finn:
a) $P(X = 0)$
b) $P(X = 3)$
c) $P(X \\geq 1)$`,
        solution: `$X \\sim \\text{Bin}(10, 0{,}25)$

a) $P(X = 0) = \\binom{10}{0} \\cdot 0{,}25^0 \\cdot 0{,}75^{10} = 0{,}75^{10} \\approx 0{,}0563$

b) $P(X = 3) = \\binom{10}{3} \\cdot 0{,}25^3 \\cdot 0{,}75^7 = 120 \\cdot 0{,}015625 \\cdot 0{,}13348 \\approx 0{,}250$

c) $P(X \\geq 1) = 1 - P(X = 0) = 1 - 0{,}0563 \\approx 0{,}944$`,
        hints: ['Bruk binomisk formel med $p = 0{,}25$', 'For c) bruk komplementsetningen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== FORVENTNINGSVERDI OG STANDARDAVVIK ==========
    {
      id: 'r1-8-5-def-ev-sd',
      type: 'definition',
      title: 'Forventningsverdi og standardavvik',
      content: `For $X \\sim \\text{Bin}(n, p)$:

**Forventningsverdi** (gjennomsnittlig antall suksesser):
$$\\text{E}(X) = \\mu = n \\cdot p$$

**Varians:**
$$\\text{Var}(X) = \\sigma^2 = n \\cdot p \\cdot (1-p)$$

**Standardavvik:**
$$\\text{SD}(X) = \\sigma = \\sqrt{n \\cdot p \\cdot (1-p)}$$

Forventningsverdien er «midten» av fordelingen, og standardavviket måler spredningen.`,
    },

    // Eksempel 2
    {
      id: 'r1-8-5-example-ev',
      type: 'example',
      title: 'Eksempel 2: Forventningsverdi og standardavvik',
      problem: `En fabrikk produserer komponenter med $2\\%$ feilrate. I et parti på $200$ komponenter, hva er forventet antall defekte, og hva er standardavviket?`,
      solution: `**Løsning:**

$X \\sim \\text{Bin}(200, 0{,}02)$

$\\text{E}(X) = 200 \\cdot 0{,}02 = 4$

$\\text{SD}(X) = \\sqrt{200 \\cdot 0{,}02 \\cdot 0{,}98} = \\sqrt{3{,}92} \\approx 1{,}98$

Vi forventer ca. $4$ defekte med et standardavvik på ca. $2$.`,
    },

    // Oppgave 4
    {
      id: 'r1-8-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Du kaster en rettferdig mynt $100$ ganger. Finn forventningsverdi og standardavvik for antall krone.',
        solution: `$X \\sim \\text{Bin}(100, 0{,}5)$

$\\text{E}(X) = 100 \\cdot 0{,}5 = 50$

$\\text{SD}(X) = \\sqrt{100 \\cdot 0{,}5 \\cdot 0{,}5} = \\sqrt{25} = 5$`,
        hints: ['Bruk formlene $\\mu = np$ og $\\sigma = \\sqrt{np(1-p)}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-8-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `En undersøkelse viser at $70\\%$ av befolkningen bruker sosiale medier daglig. Du spør $15$ tilfeldige personer.
a) Finn forventningsverdi og standardavvik.
b) Finn sannsynligheten for at nøyaktig $10$ bruker sosiale medier daglig.
c) Finn sannsynligheten for at færre enn $8$ bruker sosiale medier daglig.`,
        solution: `$X \\sim \\text{Bin}(15, 0{,}70)$

a) $\\text{E}(X) = 15 \\cdot 0{,}70 = 10{,}5$, $\\text{SD}(X) = \\sqrt{15 \\cdot 0{,}70 \\cdot 0{,}30} = \\sqrt{3{,}15} \\approx 1{,}77$

b) $P(X = 10) = \\binom{15}{10} \\cdot 0{,}70^{10} \\cdot 0{,}30^5 = 3003 \\cdot 0{,}02825 \\cdot 0{,}00243 \\approx 0{,}206$

c) $P(X < 8) = \\sum_{k=0}^{7} P(X = k)$. Med kalkulator: $P(X \\leq 7) \\approx 0{,}050$`,
        hints: ['For c) bruk kumulativ sannsynlighet -- summer alle $P(X = k)$ for $k = 0, 1, \\ldots, 7$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== KUMULATIV SANNSYNLIGHET ==========
    {
      id: 'r1-8-5-kumulativ',
      type: 'text',
      content: `## Kumulativ sannsynlighet

For å finne sannsynligheten for $X \\leq k$ (kumulativ sannsynlighet) summerer vi:

$$P(X \\leq k) = \\sum_{i=0}^{k} \\binom{n}{i} p^i (1-p)^{n-i}$$

Nyttige omskrivninger:
- $P(X \\geq k) = 1 - P(X \\leq k-1)$
- $P(X > k) = 1 - P(X \\leq k)$
- $P(a \\leq X \\leq b) = P(X \\leq b) - P(X \\leq a-1)$

I praksis bruker vi kalkulator eller tabeller for kumulative sannsynligheter.`,
    },

    // Oppgave 6
    {
      id: 'r1-8-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: '$X \\sim \\text{Bin}(5, 0{,}4)$. Regn ut hele sannsynlighetsfordelingen til $X$ (alle $P(X = k)$ for $k = 0, 1, \\ldots, 5$).',
        solution: `$P(X = 0) = \\binom{5}{0} \\cdot 0{,}4^0 \\cdot 0{,}6^5 = 0{,}07776$
$P(X = 1) = \\binom{5}{1} \\cdot 0{,}4^1 \\cdot 0{,}6^4 = 5 \\cdot 0{,}4 \\cdot 0{,}1296 = 0{,}2592$
$P(X = 2) = \\binom{5}{2} \\cdot 0{,}4^2 \\cdot 0{,}6^3 = 10 \\cdot 0{,}16 \\cdot 0{,}216 = 0{,}3456$
$P(X = 3) = \\binom{5}{3} \\cdot 0{,}4^3 \\cdot 0{,}6^2 = 10 \\cdot 0{,}064 \\cdot 0{,}36 = 0{,}2304$
$P(X = 4) = \\binom{5}{4} \\cdot 0{,}4^4 \\cdot 0{,}6^1 = 5 \\cdot 0{,}0256 \\cdot 0{,}6 = 0{,}0768$
$P(X = 5) = \\binom{5}{5} \\cdot 0{,}4^5 \\cdot 0{,}6^0 = 0{,}01024$

Sum: $\\approx 1{,}000$ (kontroll).`,
        hints: ['Bruk formelen for hvert $k$-verdi fra $0$ til $5$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-8-5-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sannsynligheten for at en basketspiller treffer et frikast er $0{,}80$. Hun skyter $10$ frikast. Finn sannsynligheten for at hun treffer minst $8$ av dem.',
        solution: `$X \\sim \\text{Bin}(10, 0{,}80)$

$P(X \\geq 8) = P(X = 8) + P(X = 9) + P(X = 10)$

$P(X = 8) = \\binom{10}{8} \\cdot 0{,}8^8 \\cdot 0{,}2^2 = 45 \\cdot 0{,}16777 \\cdot 0{,}04 \\approx 0{,}302$
$P(X = 9) = \\binom{10}{9} \\cdot 0{,}8^9 \\cdot 0{,}2^1 = 10 \\cdot 0{,}13422 \\cdot 0{,}2 \\approx 0{,}268$
$P(X = 10) = 0{,}8^{10} \\approx 0{,}107$

$P(X \\geq 8) \\approx 0{,}302 + 0{,}268 + 0{,}107 = 0{,}677$`,
        hints: ['Summer $P(X = 8) + P(X = 9) + P(X = 10)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r1-8-5-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'En terning kastes $12$ ganger. Finn forventet antall seksere og standardavviket.',
        solution: `$X \\sim \\text{Bin}(12, \\frac{1}{6})$

$\\text{E}(X) = 12 \\cdot \\frac{1}{6} = 2$

$\\text{SD}(X) = \\sqrt{12 \\cdot \\frac{1}{6} \\cdot \\frac{5}{6}} = \\sqrt{\\frac{10}{6}} = \\sqrt{\\frac{5}{3}} \\approx 1{,}29$`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r1-8-5-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: `$X \\sim \\text{Bin}(n, 0{,}3)$ og $\\text{E}(X) = 6$. Finn $n$ og $\\text{SD}(X)$.`,
        solution: `$\\text{E}(X) = np = 6$, altså $n \\cdot 0{,}3 = 6$, som gir $n = 20$.

$\\text{SD}(X) = \\sqrt{20 \\cdot 0{,}3 \\cdot 0{,}7} = \\sqrt{4{,}2} \\approx 2{,}05$`,
        hints: ['Bruk $\\text{E}(X) = np$ til å finne $n$'],
        answer: 20,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r1-8-5-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Vis at for $X \\sim \\text{Bin}(n, p)$ er $\\text{E}(X) = np$.

Hint: Bruk at $X = X_1 + X_2 + \\ldots + X_n$ der $X_i$ er indikatorvariabelen for suksess i forsøk $i$.`,
        solution: `La $X_i$ være indikatorvariabelen: $X_i = 1$ ved suksess, $X_i = 0$ ved fiasko.

$\\text{E}(X_i) = 1 \\cdot p + 0 \\cdot (1-p) = p$

$X = X_1 + X_2 + \\ldots + X_n$

Ved lineariteten til forventningsverdi:

$\\text{E}(X) = \\text{E}(X_1) + \\text{E}(X_2) + \\ldots + \\text{E}(X_n) = np \\quad \\square$`,
        hints: ['Skriv $X$ som en sum av indikatorvariabler', 'Bruk at forventningsverdi er lineær: $E(X_1 + X_2) = E(X_1) + E(X_2)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r1-8-5-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: `En kvalitetskontrollør godtar et parti dersom det er høyst $1$ defekt i et utvalg på $20$ enheter. Defektraten er $5\\%$. Finn sannsynligheten for at partiet godtas.`,
        solution: `$X \\sim \\text{Bin}(20, 0{,}05)$

$P(X \\leq 1) = P(X = 0) + P(X = 1)$

$P(X = 0) = 0{,}95^{20} \\approx 0{,}3585$

$P(X = 1) = \\binom{20}{1} \\cdot 0{,}05 \\cdot 0{,}95^{19} = 20 \\cdot 0{,}05 \\cdot 0{,}3774 \\approx 0{,}3774$

$P(X \\leq 1) \\approx 0{,}3585 + 0{,}3774 = 0{,}736$`,
        hints: ['Summer $P(X = 0)$ og $P(X = 1)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r1-8-5-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn den mest sannsynlige verdien av $X$ (modusen) når $X \\sim \\text{Bin}(10, 0{,}3)$. Beregn $P(X = 2)$, $P(X = 3)$ og $P(X = 4)$, og forklar hvorfor $k = 3$ er modusen.',
        solution: `$P(X = 2) = \\binom{10}{2} \\cdot 0{,}3^2 \\cdot 0{,}7^8 = 45 \\cdot 0{,}09 \\cdot 0{,}05765 \\approx 0{,}2335$

$P(X = 3) = \\binom{10}{3} \\cdot 0{,}3^3 \\cdot 0{,}7^7 = 120 \\cdot 0{,}027 \\cdot 0{,}08235 \\approx 0{,}2668$

$P(X = 4) = \\binom{10}{4} \\cdot 0{,}3^4 \\cdot 0{,}7^6 = 210 \\cdot 0{,}0081 \\cdot 0{,}11765 \\approx 0{,}2001$

$P(X = 3)$ er størst, så modusen er $k = 3$.

Generelt: Modusen er heltallet nærmest $(n+1)p - 1 = 11 \\cdot 0{,}3 - 1 = 2{,}3$, altså $k = 3$ (eller $k = 2$).`,
        hints: ['Beregn $P(X = k)$ for verdier rundt $\\text{E}(X) = np = 3$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r1-8-5-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sannsynligheten for at det regner en gitt dag i november er $0{,}4$. Anta at dagene er uavhengige. Finn sannsynligheten for at det regner nøyaktig $12$ av $30$ dager i november.',
        solution: `$X \\sim \\text{Bin}(30, 0{,}4)$

$P(X = 12) = \\binom{30}{12} \\cdot 0{,}4^{12} \\cdot 0{,}6^{18}$

$\\binom{30}{12} = 86{\\,}493{\\,}225$

$0{,}4^{12} \\approx 1{,}678 \\cdot 10^{-5}$, $0{,}6^{18} \\approx 1{,}014 \\cdot 10^{-4}$

$P(X = 12) \\approx 86{\\,}493{\\,}225 \\cdot 1{,}678 \\cdot 10^{-5} \\cdot 1{,}014 \\cdot 10^{-4} \\approx 0{,}147$

$\\text{E}(X) = 30 \\cdot 0{,}4 = 12$, så $12$ regnværsdager er det mest «forventede» resultatet.`,
        hints: ['$12 = np$, altså er dette forventningsverdien'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r1-8-5-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et legemiddel har $60\\%$ sjanse for å virke på en gitt pasient. Det gis til $20$ pasienter.
a) Finn sannsynligheten for at det virker på nøyaktig $12$ pasienter.
b) Finn sannsynligheten for at det virker på minst $15$ pasienter.
c) Hva er sannsynligheten for at det virker på mellom $10$ og $14$ pasienter (inklusiv)?`,
        solution: `$X \\sim \\text{Bin}(20, 0{,}6)$, $\\text{E}(X) = 12$, $\\text{SD}(X) = \\sqrt{4{,}8} \\approx 2{,}19$

a) $P(X = 12) = \\binom{20}{12} \\cdot 0{,}6^{12} \\cdot 0{,}4^8 = 125970 \\cdot 2{,}177 \\cdot 10^{-3} \\cdot 6{,}554 \\cdot 10^{-4} \\approx 0{,}180$

b) $P(X \\geq 15) = \\sum_{k=15}^{20} P(X = k) \\approx 0{,}051 + 0{,}015 + 0{,}003 + 0{,}0005 + \\ldots \\approx 0{,}075$

c) $P(10 \\leq X \\leq 14) = \\sum_{k=10}^{14} P(X = k) \\approx 0{,}117 + 0{,}160 + 0{,}180 + 0{,}166 + 0{,}124 \\approx 0{,}747$`,
        hints: ['Bruk kalkulator for kumulative sannsynligheter', 'Forventningsverdien er $12$, som er nært midten av intervallet i c)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15
    {
      id: 'r1-8-5-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r1-8-5-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vis at $\\sum_{k=0}^{n} P(X = k) = 1$ for $X \\sim \\text{Bin}(n, p)$ ved å bruke binomialformelen.',
        solution: `$\\sum_{k=0}^{n} P(X = k) = \\sum_{k=0}^{n} \\binom{n}{k} p^k (1-p)^{n-k}$

Ifølge binomialformelen:

$(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k}$

Med $a = p$ og $b = 1 - p$:

$\\sum_{k=0}^{n} \\binom{n}{k} p^k (1-p)^{n-k} = (p + (1-p))^n = 1^n = 1 \\quad \\square$`,
        hints: ['Bruk binomialformelen $(a+b)^n$ med $a = p$ og $b = 1-p$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-8-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Binomisk forsøk:** $n$ uavhengige forsøk, hvert med suksesssannsynlighet $p$.

**Binomisk sannsynlighet:** $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$

**Forventningsverdi:** $\\text{E}(X) = np$

**Standardavvik:** $\\text{SD}(X) = \\sqrt{np(1-p)}$

**Kumulativ:** $P(X \\leq k)$, $P(X \\geq k) = 1 - P(X \\leq k-1)$

**Sjekkliste:** Fast $n$, to utfall, konstant $p$, uavhengighet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.6: Sannsynlighet i praksis
// ============================================================================

export const CHAPTER_R1_8_6: TextbookChapter = {
  id: 'r1-8-6',
  courseId: 'r1',
  chapterNumber: '8.6',
  title: 'Sannsynlighet i praksis',
  description: 'Lær om Bayes\' setning, praktiske sannsynlighetsproblemer og simulering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'anvende Bayes\' setning til å oppdatere sannsynligheter med ny informasjon',
    'løse sammensatte sannsynlighetsproblemer fra ulike kontekster',
    'forstå prinsippet bak Monte Carlo-simulering',
    'bruke sannsynlighetsmodeller til å ta beslutninger',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'r1-8-6-intro',
      type: 'text',
      content: `## Sannsynlighet i den virkelige verden

I dette kapittelet setter vi sammen verktøyene fra de foregående kapitlene og bruker dem på realistiske problemer. Vi introduserer også **Bayes' setning**, et kraftig verktøy for å oppdatere sannsynligheter når vi får ny informasjon, og ser på hvordan simulering kan brukes til å estimere sannsynligheter som er vanskelige å beregne analytisk.`,
    },

    // ========== BAYES' SETNING ==========
    {
      id: 'r1-8-6-thm-bayes',
      type: 'theorem',
      title: 'Bayes\' setning',
      content: `La $B_1, B_2, \\ldots, B_n$ være en partisjon av utfallsrommet, og la $A$ være en hendelse med $P(A) > 0$. Da gjelder:

$$P(B_j \\mid A) = \\frac{P(B_j) \\cdot P(A \\mid B_j)}{\\sum_{i=1}^{n} P(B_i) \\cdot P(A \\mid B_i)}$$

**Spesialtilfelle** med to alternativer:
$$P(B \\mid A) = \\frac{P(B) \\cdot P(A \\mid B)}{P(B) \\cdot P(A \\mid B) + P(B^c) \\cdot P(A \\mid B^c)}$$

**Tolkning:**
- $P(B_j)$ = **prior** (sannsynlighet for $B_j$ før vi vet om $A$)
- $P(B_j \\mid A)$ = **posterior** (oppdatert sannsynlighet etter å ha observert $A$)
- $P(A \\mid B_j)$ = **likelihood** (hvor sannsynlig er $A$ gitt $B_j$)`,
    },

    {
      id: 'r1-8-6-note-bayes',
      type: 'note',
      title: 'Når bruker vi Bayes\' setning?',
      content: `Bayes' setning brukes når vi kjenner $P(A \\mid B)$ men trenger $P(B \\mid A)$ -- altså når vi vil «snu» betingelsen.

Typiske situasjoner:
- En test er positiv -- hva er sannsynligheten for at personen faktisk er syk?
- Et produkt er defekt -- fra hvilken maskin ble det trolig produsert?
- Et dokument inneholder visse ord -- hvilken kategori tilhører det?`,
    },

    // Eksempel 1: Medisinsk test
    {
      id: 'r1-8-6-example-test',
      type: 'example',
      title: 'Eksempel 1: Medisinsk test',
      problem: `En medisinsk test for en sykdom har:
- **Sensitivitet**: $P(\\text{positiv} \\mid \\text{syk}) = 0{,}99$ (testen fanger opp $99\\%$ av syke)
- **Spesifisitet**: $P(\\text{negativ} \\mid \\text{frisk}) = 0{,}95$ (testen frikjenner $95\\%$ av friske)
- **Prevalens**: $P(\\text{syk}) = 0{,}01$ (1% av befolkningen er syk)

En tilfeldig person tester positivt. Hva er sannsynligheten for at personen faktisk er syk?`,
      solution: `**Løsning:**

La $S$ = syk, $T^+$ = positiv test.

$P(T^+ \\mid S) = 0{,}99$, $P(T^+ \\mid S^c) = 1 - 0{,}95 = 0{,}05$ (falsk positiv)

$P(S) = 0{,}01$, $P(S^c) = 0{,}99$

Totalsetningen:
$$P(T^+) = P(S) \\cdot P(T^+ \\mid S) + P(S^c) \\cdot P(T^+ \\mid S^c) = 0{,}01 \\cdot 0{,}99 + 0{,}99 \\cdot 0{,}05 = 0{,}0099 + 0{,}0495 = 0{,}0594$$

Bayes' setning:
$$P(S \\mid T^+) = \\frac{0{,}01 \\cdot 0{,}99}{0{,}0594} = \\frac{0{,}0099}{0{,}0594} \\approx 0{,}167$$

**Bare ca. $17\\%$ sjanse for at personen faktisk er syk!** Selv med en ganske god test gir en positiv test lav sannsynlighet når sykdommen er sjelden. Dette er **base rate fallacy** -- prevalensen spiller en enorm rolle.`,
    },

    // Oppgave 1
    {
      id: 'r1-8-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: `En fabrikk har tre maskiner A, B og C som produserer henholdsvis $50\\%$, $30\\%$ og $20\\%$ av varene. Feilraten er: A: $1\\%$, B: $2\\%$, C: $3\\%$. En tilfeldig vare er defekt. Finn sannsynligheten for at den ble produsert av maskin C.`,
        solution: `$P(D) = 0{,}50 \\cdot 0{,}01 + 0{,}30 \\cdot 0{,}02 + 0{,}20 \\cdot 0{,}03 = 0{,}005 + 0{,}006 + 0{,}006 = 0{,}017$

$P(C \\mid D) = \\frac{P(C) \\cdot P(D \\mid C)}{P(D)} = \\frac{0{,}20 \\cdot 0{,}03}{0{,}017} = \\frac{0{,}006}{0{,}017} \\approx 0{,}353$`,
        hints: ['Bruk totalsetningen for $P(D)$, deretter Bayes\' setning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: 'r1-8-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En narkotikatest har sensitivitet $0{,}98$ og spesifisitet $0{,}97$. I en bedrift er $5\\%$ av ansatte brukere. En ansatt tester positivt.
a) Finn sannsynligheten for at den ansatte faktisk er bruker.
b) Hva skjer med svaret dersom prevalensen øker til $20\\%$?`,
        solution: `a) $P(T^+) = 0{,}05 \\cdot 0{,}98 + 0{,}95 \\cdot 0{,}03 = 0{,}049 + 0{,}0285 = 0{,}0775$

$P(B \\mid T^+) = \\frac{0{,}049}{0{,}0775} \\approx 0{,}632$

b) Med prevalens $20\\%$:
$P(T^+) = 0{,}20 \\cdot 0{,}98 + 0{,}80 \\cdot 0{,}03 = 0{,}196 + 0{,}024 = 0{,}220$

$P(B \\mid T^+) = \\frac{0{,}196}{0{,}220} \\approx 0{,}891$

Høyere prevalens gir mye høyere posterior sannsynlighet.`,
        hints: ['Bruk Bayes\' setning i begge tilfeller', 'Spesifisitet $= 0{,}97$ betyr at falsk-positiv-raten er $0{,}03$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== PRAKTISKE PROBLEMER ==========
    {
      id: 'r1-8-6-praktisk-intro',
      type: 'text',
      content: `## Sammensatte sannsynlighetsproblemer

Mange praktiske problemer krever at vi kombinerer flere teknikker: betinget sannsynlighet, binomisk fordeling, komplementsetningen og Bayes' setning. Nøkkelen er å identifisere riktig modell for situasjonen og bryte problemet ned i overkommelige delsteg.`,
    },

    // Eksempel 2
    {
      id: 'r1-8-6-example-praksis',
      type: 'example',
      title: 'Eksempel 2: Kvalitetskontroll',
      problem: `En forhandler bestiller varer i partier på $100$. Defektraten varierer: $80\\%$ av partiene har $5\\%$ defektrate, $20\\%$ av partiene har $15\\%$ defektrate. Forhandleren tester $5$ tilfeldige varer fra hvert parti. Partiet aksepteres dersom ingen av de $5$ er defekte. Finn sannsynligheten for at et tilfeldig parti aksepteres.`,
      solution: `**Løsning:**

La $A$ = «partiet aksepteres», $G$ = «godt parti» (5% defekt), $D$ = «dårlig parti» (15% defekt).

$P(A \\mid G)$: $X \\sim \\text{Bin}(5, 0{,}05)$, $P(X = 0) = 0{,}95^5 \\approx 0{,}774$

$P(A \\mid D)$: $Y \\sim \\text{Bin}(5, 0{,}15)$, $P(Y = 0) = 0{,}85^5 \\approx 0{,}444$

Totalsetningen:
$$P(A) = 0{,}80 \\cdot 0{,}774 + 0{,}20 \\cdot 0{,}444 = 0{,}619 + 0{,}089 = 0{,}708$$

Ca. $70{,}8\\%$ av partiene aksepteres.`,
    },

    // Oppgave 3
    {
      id: 'r1-8-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `I eksempelet over: Et parti aksepteres (alle $5$ testede varer er OK). Finn sannsynligheten for at det er et «dårlig» parti (15% defektrate).`,
        solution: `$P(D \\mid A) = \\frac{P(D) \\cdot P(A \\mid D)}{P(A)} = \\frac{0{,}20 \\cdot 0{,}444}{0{,}708} = \\frac{0{,}0888}{0{,}708} \\approx 0{,}125$

Ca. $12{,}5\\%$ av aksepterte partier er «dårlige» -- kontrollen er ikke perfekt.`,
        hints: ['Bruk Bayes\' setning med verdiene fra eksempelet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: 'r1-8-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Du spiller et spill der du kaster $3$ terninger. Du vinner dersom minst $2$ av de $3$ viser sekser. Hva er sannsynligheten for å vinne?`,
        solution: `$X \\sim \\text{Bin}(3, \\frac{1}{6})$

$P(X \\geq 2) = P(X = 2) + P(X = 3)$

$P(X = 2) = \\binom{3}{2} \\left(\\frac{1}{6}\\right)^2 \\left(\\frac{5}{6}\\right)^1 = 3 \\cdot \\frac{1}{36} \\cdot \\frac{5}{6} = \\frac{15}{216}$

$P(X = 3) = \\left(\\frac{1}{6}\\right)^3 = \\frac{1}{216}$

$P(X \\geq 2) = \\frac{16}{216} = \\frac{2}{27} \\approx 0{,}074$`,
        hints: ['Modeller som binomisk: $n = 3$, $p = \\frac{1}{6}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: 'r1-8-6-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Du har $3$ mynter: Mynt A er rettferdig ($P(K) = 0{,}5$), mynt B er skjev ($P(K) = 0{,}7$), og mynt C er skjev ($P(K) = 0{,}3$). Du velger en tilfeldig mynt og kaster den $4$ ganger. Resultatet er $3$ krone og $1$ mynt. Finn sannsynligheten for at du valgte mynt B.`,
        solution: `La $D$ = «$3$ krone av $4$». Sannsynligheten med hver mynt:

$P(D \\mid A) = \\binom{4}{3} \\cdot 0{,}5^3 \\cdot 0{,}5^1 = 4 \\cdot 0{,}0625 = 0{,}25$

$P(D \\mid B) = \\binom{4}{3} \\cdot 0{,}7^3 \\cdot 0{,}3^1 = 4 \\cdot 0{,}343 \\cdot 0{,}3 = 0{,}4116$

$P(D \\mid C) = \\binom{4}{3} \\cdot 0{,}3^3 \\cdot 0{,}7^1 = 4 \\cdot 0{,}027 \\cdot 0{,}7 = 0{,}0756$

$P(D) = \\frac{1}{3}(0{,}25 + 0{,}4116 + 0{,}0756) = \\frac{1}{3} \\cdot 0{,}7372 = 0{,}2457$

$P(B \\mid D) = \\frac{\\frac{1}{3} \\cdot 0{,}4116}{0{,}2457} = \\frac{0{,}1372}{0{,}2457} \\approx 0{,}558$`,
        hints: ['Beregn $P(D \\mid \\text{mynt})$ for hver mynt med binomisk formel', 'Bruk Bayes\' setning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SIMULERING ==========
    {
      id: 'r1-8-6-simulering-intro',
      type: 'text',
      content: `## Monte Carlo-simulering

Noen sannsynlighetsproblemer er vanskelige å løse analytisk. Da kan vi bruke **simulering** (Monte Carlo-metoden): Gjenta forsøket mange ganger på en datamaskin og tell opp andelen ganger hendelsen inntreffer.

**Prinsippet:**
1. Simuler forsøket $N$ ganger (f.eks. $N = 10{\\,}000$)
2. Tell antall ganger hendelse $A$ inntreffer: $n_A$
3. Estimer $P(A) \\approx \\frac{n_A}{N}$

Jo større $N$, jo bedre estimat (store talls lov).`,
    },

    // Eksempel: Simulering
    {
      id: 'r1-8-6-example-simulering',
      type: 'example',
      title: 'Eksempel 3: Bursdagsproblemet med simulering',
      problem: `Estimer sannsynligheten for at minst to av $23$ personer deler fødselsdag, ved simulering.`,
      solution: `**Pseudokode:**

\`\`\`
antall_treff = 0
N = 100000

for i = 1 til N:
    generer 23 tilfeldige tall fra 1 til 365
    hvis noen tall er like:
        antall_treff += 1

estimat = antall_treff / N
\`\`\`

Med $N = 100{\\,}000$ simuleringer får vi typisk et estimat rundt $0{,}507$, som stemmer godt med den eksakte verdien $\\approx 0{,}5073$.`,
    },

    // Oppgave 6
    {
      id: 'r1-8-6-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Beskriv hvordan du ville simulere følgende eksperiment: Kaste $3$ terninger og finne sannsynligheten for at summen er nøyaktig $10$. Skriv pseudokode og oppgi den eksakte sannsynligheten.`,
        solution: `**Pseudokode:**
\`\`\`
treff = 0
N = 100000

for i = 1 til N:
    t1 = tilfeldig heltall fra 1 til 6
    t2 = tilfeldig heltall fra 1 til 6
    t3 = tilfeldig heltall fra 1 til 6
    if t1 + t2 + t3 == 10:
        treff += 1

estimat = treff / N
\`\`\`

**Eksakt:** $|\\Omega| = 6^3 = 216$. Antall gunstige for sum $= 10$: Vi teller tripletter $(a,b,c)$ med $a+b+c = 10$:

$(1,3,6),(1,4,5),(2,2,6),(2,3,5),(2,4,4),(3,3,4)$ og alle permutasjoner: $3+6+3+6+3+3 = 27$ stk.

$P(\\text{sum} = 10) = \\frac{27}{216} = \\frac{1}{8} = 0{,}125$`,
        hints: ['Bruk tre tilfeldige tall fra $1$ til $6$', 'For eksakt løsning: finn alle tripletter med sum $10$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: 'r1-8-6-ex-block-7',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: `Et lotteri har $3$ premierer og $7$ taperlodder (totalt $10$ lodd). Du kjøper $2$ lodd. Finn sannsynligheten for å vinne minst én premie.`,
        solution: `$P(\\text{minst 1 premie}) = 1 - P(\\text{ingen premie})$

$P(\\text{ingen premie}) = \\frac{\\binom{7}{2}}{\\binom{10}{2}} = \\frac{21}{45} = \\frac{7}{15}$

$P(\\text{minst 1 premie}) = 1 - \\frac{7}{15} = \\frac{8}{15} \\approx 0{,}533$`,
        hints: ['Bruk komplementsetningen og kombinasjoner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: 'r1-8-6-ex-block-8',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Monty Hall-problemet:** Du er i et spilleshow. Det er $3$ dører. Bak én dør er en premie, bak de to andre er det geiter. Du velger dør $1$. Verten (som vet hva som er bak dørene) åpner dør $3$, som har en geit. Du får velge: beholde dør $1$ eller bytte til dør $2$. Hva bør du gjøre?

Bruk betinget sannsynlighet til å vise at du bør bytte.`,
        solution: `La $P_i$ = «premien er bak dør $i$» og $V_3$ = «verten åpner dør $3$».

$P(P_1) = P(P_2) = P(P_3) = \\frac{1}{3}$

Betingede sannsynligheter for at verten åpner dør $3$:
- $P(V_3 \\mid P_1) = \\frac{1}{2}$ (verten velger tilfeldig mellom dør $2$ og $3$)
- $P(V_3 \\mid P_2) = 1$ (verten **må** åpne dør $3$)
- $P(V_3 \\mid P_3) = 0$ (verten åpner aldri premiedøren)

$P(V_3) = \\frac{1}{3} \\cdot \\frac{1}{2} + \\frac{1}{3} \\cdot 1 + \\frac{1}{3} \\cdot 0 = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$

$P(P_1 \\mid V_3) = \\frac{\\frac{1}{3} \\cdot \\frac{1}{2}}{\\frac{1}{2}} = \\frac{1}{3}$ (beholde)

$P(P_2 \\mid V_3) = \\frac{\\frac{1}{3} \\cdot 1}{\\frac{1}{2}} = \\frac{2}{3}$ (bytte)

**Konklusjon:** Du bør **bytte** -- det dobler vinnersannsynligheten fra $\\frac{1}{3}$ til $\\frac{2}{3}$.`,
        hints: ['Bruk Bayes\' setning for $P(P_2 \\mid V_3)$', 'Tenk på hva verten er tvunget til å gjøre i hvert tilfelle'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: 'r1-8-6-ex-block-9',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: `En alarm utløses dersom det er et innbrudd (med sannsynlighet $0{,}95$), men den kan også utløses av jordskjelv (med sannsynlighet $0{,}02$). $P(\\text{innbrudd}) = 0{,}001$ og $P(\\text{jordskjelv}) = 0{,}002$. Hendelsene er uavhengige. Alarmen går. Finn sannsynligheten for at det er et innbrudd.`,
        solution: `La $A$ = alarm, $I$ = innbrudd, $J$ = jordskjelv.

Vi forenkler: $P(A) \\approx P(I) \\cdot P(A \\mid I) + P(I^c) \\cdot P(J) \\cdot P(A \\mid J, I^c)$

$P(A \\mid I) = 0{,}95$, $P(A \\mid J, \\text{ikke } I) = 0{,}02$, og $P(A \\mid \\text{verken } I \\text{ eller } J) \\approx 0$

$P(A) \\approx 0{,}001 \\cdot 0{,}95 + 0{,}999 \\cdot 0{,}002 \\cdot 0{,}02 = 0{,}00095 + 0{,}00003996 \\approx 0{,}000990$

$P(I \\mid A) = \\frac{0{,}001 \\cdot 0{,}95}{0{,}000990} \\approx \\frac{0{,}00095}{0{,}000990} \\approx 0{,}960$`,
        hints: ['Bruk totalsetningen for $P(A)$ og Bayes\' setning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: 'r1-8-6-ex-block-10',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: `En pokermaskin trekker $5$ kort fra en standard kortstokk med $52$ kort.
a) Finn sannsynligheten for «ett par» (nøyaktig to kort med samme verdi, resten forskjellige).
b) Finn sannsynligheten for «to par».`,
        solution: `a) **Ett par:**
Velg verdi for paret: $13$ måter.
Velg $2$ av $4$ kort med den verdien: $\\binom{4}{2} = 6$.
Velg $3$ forskjellige verdier fra de resterende $12$: $\\binom{12}{3} = 220$.
For hver: velg $1$ av $4$ farger: $4^3 = 64$.

$|A| = 13 \\cdot 6 \\cdot 220 \\cdot 64 = 1{\\,}098{\\,}240$

$P(\\text{ett par}) = \\frac{1{\\,}098{\\,}240}{2{\\,}598{\\,}960} \\approx 0{,}4226$

b) **To par:**
Velg $2$ verdier for parene: $\\binom{13}{2} = 78$.
For hvert par: velg farger: $\\binom{4}{2}^2 = 36$.
Femte kort: $44$ gjenværende kort fra $11$ verdier, $\\binom{4}{1}$ per verdi: $11 \\cdot 4 = 44$.

$|B| = 78 \\cdot 36 \\cdot 44 = 123{\\,}552$

$P(\\text{to par}) = \\frac{123{\\,}552}{2{\\,}598{\\,}960} \\approx 0{,}0475$`,
        hints: ['Velg systematisk: først verdier, deretter farger', 'For ett par: sørg for at de tre andre kortene har forskjellige verdier'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: 'r1-8-6-ex-block-11',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'lett',
        task: `To spillere (A og B) kaster hver sin terning. Den som kaster høyest vinner. Ved likt kaster de på nytt. Finn sannsynligheten for at A vinner.`,
        solution: `Ved symmetri: $P(A \\text{ vinner}) = P(B \\text{ vinner})$.

$P(\\text{likt}) = \\frac{6}{36} = \\frac{1}{6}$ (begge kaster samme tall)

$P(A \\text{ vinner}) + P(B \\text{ vinner}) + P(\\text{likt}) = 1$

$2 \\cdot P(A \\text{ vinner}) = 1 - \\frac{1}{6} = \\frac{5}{6}$

$P(A \\text{ vinner før omspill}) = \\frac{5}{12}$

Med omspill ved likt: $P(A) = \\frac{5}{12} + \\frac{1}{6} \\cdot \\frac{5}{12} + \\frac{1}{6^2} \\cdot \\frac{5}{12} + \\ldots = \\frac{5/12}{1 - 1/6} = \\frac{5/12}{5/6} = \\frac{1}{2}$`,
        hints: ['Bruk symmetri: begge spillerne har samme sjanse'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: 'r1-8-6-ex-block-12',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Gambler's ruin:** Per har $3$ kroner og Kari har $2$ kroner. De spiller gjentatte runder der de kaster en rettferdig mynt. Ved krone gir Kari $1$ krone til Per, ved mynt gir Per $1$ krone til Kari. Spillet fortsetter til én spiller er blakk.

Finn sannsynligheten for at Per vinner (dvs. ender med alle $5$ kronene).`,
        solution: `La $p_i$ = sannsynligheten for at Per vinner når han har $i$ kroner.

$p_0 = 0$, $p_5 = 1$ (grensebetingelser)

For $1 \\leq i \\leq 4$: $p_i = \\frac{1}{2} p_{i+1} + \\frac{1}{2} p_{i-1}$ (like sannsynlig å gå opp eller ned)

Med rettferdig mynt: $p_i = \\frac{i}{5}$ (lineær løsning).

$p_3 = \\frac{3}{5} = 0{,}6$

Per har $60\\%$ sjanse for å vinne fordi han starter med mer penger.`,
        hints: ['Sett opp en rekursjonsrelasjon $p_i = \\frac{1}{2} p_{i+1} + \\frac{1}{2} p_{i-1}$', 'Med rettferdig mynt er løsningen lineær i $i$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: 'r1-8-6-ex-block-13',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: `En spåkone hevder hun kan gjette riktig farge (rød/svart) på kort trukket fra en kortstokk. For å teste henne trekker du $20$ kort med tilbakelegging. Hun gjetter riktig $14$ ganger.

a) Finn sannsynligheten for å gjette riktig $14$ eller flere ganger ved ren gjetting ($p = 0{,}5$).
b) Er resultatet «overbevisende»?`,
        solution: `a) $X \\sim \\text{Bin}(20, 0{,}5)$

$P(X \\geq 14) = \\sum_{k=14}^{20} \\binom{20}{k} \\cdot 0{,}5^{20}$

$= \\frac{1}{1048576}(38760 + 15504 + 4845 + 1140 + 190 + 20 + 1)$

$= \\frac{60460}{1048576} \\approx 0{,}0577$

b) $P \\approx 5{,}8\\%$. I statistikk bruker vi ofte $5\\%$ som signifikansgrense. Med $5{,}8\\%$ er resultatet nesten, men ikke helt, signifikant. Vi har ikke sterkt nok bevis til å konkludere at spåkonen har evner utover ren gjetting.`,
        hints: ['Bruk binomisk fordeling med $p = 0{,}5$ (null-hypotese: ren gjetting)', 'Beregn $P(X \\geq 14)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: 'r1-8-6-ex-block-14',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Pólya-urne:** En urne inneholder $1$ rød og $1$ blå kule. Du trekker en kule, noterer fargen, og legger kulen tilbake sammen med én ekstra kule av samme farge. Deretter trekker du igjen.

a) Finn sannsynligheten for at begge trekkene gir rød.
b) Finn sannsynligheten for at det andre trekket gir rød.
c) Er de to trekkene uavhengige?`,
        solution: `a) $P(R_1 \\cap R_2) = P(R_1) \\cdot P(R_2 \\mid R_1) = \\frac{1}{2} \\cdot \\frac{2}{3} = \\frac{1}{3}$

(Etter å ha trukket rød: $2$ røde, $1$ blå = $3$ kuler.)

b) $P(R_2) = P(R_1) \\cdot P(R_2 \\mid R_1) + P(B_1) \\cdot P(R_2 \\mid B_1)$
$= \\frac{1}{2} \\cdot \\frac{2}{3} + \\frac{1}{2} \\cdot \\frac{1}{3} = \\frac{1}{3} + \\frac{1}{6} = \\frac{1}{2}$

c) $P(R_1) \\cdot P(R_2) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4} \\neq \\frac{1}{3} = P(R_1 \\cap R_2)$

Nei, trekkene er **ikke** uavhengige -- å trekke rød øker sjansen for rød neste gang.`,
        hints: ['Bruk betinget sannsynlighet: etter første trekk endres sammensetningen i urnen', 'Bruk totalsetningen for del b)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 15
    {
      id: 'r1-8-6-ex-block-15',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-15',
        number: '15',
        type: 'classic',
        difficulty: 'medium',
        task: `Et forsikringsselskap selger bilforsikring. De beregner:
- $P(\\text{ulykke i løpet av et år}) = 0{,}05$
- Gjennomsnittlig erstatning ved ulykke: $80{\\,}000$ kr
- Driftskostnader per kunde: $500$ kr

Hva er minste årlige premie selskapet kan ta for å gå i pluss i gjennomsnitt?`,
        solution: `Forventet utbetaling per kunde: $0{,}05 \\cdot 80{\\,}000 = 4000$ kr

Totale forventede kostnader per kunde: $4000 + 500 = 4500$ kr

Minste premie for å gå i pluss: **$4500$ kr per år**.

(I praksis legger selskapet til en sikkerhetsmargin og profitt.)`,
        hints: ['Beregn forventet utbetaling = $P(\\text{ulykke}) \\cdot \\text{erstatning}$', 'Legg til driftskostnadene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 16
    {
      id: 'r1-8-6-ex-block-16',
      type: 'exercise',
      exercise: {
        id: 'r1-8-6-ex-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Coupon collector:** Det finnes $6$ forskjellige samlekort i en serie (like sannsynlige). Hver pakke du kjøper inneholder ett tilfeldig kort. Hvor mange pakker må du kjøpe i gjennomsnitt for å samle alle $6$?`,
        solution: `Etter $0$ unike kort: Neste kort er alltid nytt. Forventet antall pakker: $\\frac{6}{6} = 1$.

Etter $1$ unikt kort: Sannsynlighet for nytt kort: $\\frac{5}{6}$. Forventet antall: $\\frac{6}{5} = 1{,}2$.

Etter $2$: $\\frac{6}{4} = 1{,}5$. Etter $3$: $\\frac{6}{3} = 2$. Etter $4$: $\\frac{6}{2} = 3$. Etter $5$: $\\frac{6}{1} = 6$.

Totalt forventet:
$$E = \\frac{6}{6} + \\frac{6}{5} + \\frac{6}{4} + \\frac{6}{3} + \\frac{6}{2} + \\frac{6}{1} = 1 + 1{,}2 + 1{,}5 + 2 + 3 + 6 = 14{,}7$$

Du trenger i gjennomsnitt ca. $14{,}7$ pakker for å samle alle $6$ kortene.`,
        hints: ['Del opp i faser: fase $k$ starter etter at du har $k$ unike kort', 'I fase $k$ er sannsynligheten for nytt kort $\\frac{6-k}{6}$, og forventet ventetid er $\\frac{6}{6-k}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppsummering
    {
      id: 'r1-8-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

**Bayes' setning:** $P(B \\mid A) = \\frac{P(B) \\cdot P(A \\mid B)}{P(A)}$ -- snur betingelsen.

**Prior $\\rightarrow$ Posterior:** Bayes oppdaterer sannsynligheten for en hypotese basert på ny evidens.

**Base rate fallacy:** En positiv test betyr ikke nødvendigvis sykdom -- prevalensen (base rate) spiller stor rolle.

**Monte Carlo-simulering:** Gjenta forsøket mange ganger for å estimere sannsynligheter.

**Strategi for sammensatte problemer:**
1. Identifiser hendelsene og relasjonene (uavhengige? betingede?)
2. Velg riktig verktøy (binomisk? kombinatorikk? Bayes?)
3. Sjekk svaret (er det mellom $0$ og $1$? gir det mening i konteksten?)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITTEL 8 KAPITLER
// ============================================================================

export const R1_KAP8_CHAPTERS = [
  CHAPTER_R1_8_1,
  CHAPTER_R1_8_2,
  CHAPTER_R1_8_3,
  CHAPTER_R1_8_4,
  CHAPTER_R1_8_5,
  CHAPTER_R1_8_6,
];
