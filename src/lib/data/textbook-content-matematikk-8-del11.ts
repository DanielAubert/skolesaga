/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Del 11: Funksjoner og representasjoner (KM199, KM232)
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Kapittel 10.1: Hva er en funksjon?
 * Kapittel 10.2: Verditabeller og grafer
 * Kapittel 10.3: Representere funksjoner på ulike måter
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 10.1: Hva er en funksjon?
// ============================================================================

export const CHAPTER_8_10_1: TextbookChapter = {
  id: '8-10-1',
  courseId: '8',
  chapterNumber: '10.1',
  title: 'Hva er en funksjon?',
  description: 'Lær hva en funksjon er, hvordan vi kan tenke på den som en maskin, og hvordan vi skriver funksjonsuttrykk med f(x).',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og beskrive funksjonar knytte til praktiske situasjonar',
  ],
  content: [
    // INTRO
    {
      id: '8-10-1-intro',
      type: 'text',
      content: `## Hva er en funksjon?

Du har sikkert hørt ordet «funksjon» mange ganger. En kalkulator har mange funksjoner. En mobiltelefon har enda flere. Men hva betyr egentlig «funksjon» i matematikken?

I matematikk er en funksjon en **regel** som forteller oss hvordan vi kommer fra ett tall til et annet. Tenk deg en maskin:

- Du putter inn et tall (vi kaller det **innverdien** eller $x$)
- Maskinen gjør noe med tallet (for eksempel dobler det og legger til 3)
- Ut kommer et nytt tall (vi kaller det **utverdien** eller $f(x)$)

Det viktigste med en funksjon er at **for hver innverdi får vi nøyaktig én utverdi**. Hvis du putter inn det samme tallet to ganger, skal du alltid få det samme svaret.

I dette kapittelet skal du lære:

- Hva en funksjon er og hvordan den fungerer
- Hvordan vi skriver funksjoner med matematisk notasjon
- Eksempler på funksjoner fra hverdagen`,
    },

    // BLOKK 1: Funksjonsmaskin
    {
      id: '8-10-1-def-1',
      type: 'definition',
      title: 'Funksjon',
      content: `En **funksjon** er en regel som tilordner hver innverdi nøyaktig én utverdi.

Vi kan tenke på en funksjon som en **maskin**:

$$\\text{Innverdi } x \\longrightarrow \\boxed{\\text{Funksjonsmaskin}} \\longrightarrow \\text{Utverdi } f(x)$$

- **Innverdi** (eller argument): Tallet vi setter inn, vanligvis kalt $x$
- **Funksjonsregelen**: Hva maskinen gjør med tallet
- **Utverdi** (eller funksjonsverdi): Tallet som kommer ut, kalt $f(x)$

**Eksempel:** Hvis funksjonsregelen er «doble tallet og legg til 3», og vi setter inn $x = 4$:

$$4 \\longrightarrow \\boxed{\\text{doble og legg til 3}} \\longrightarrow 11$$

Fordi $2 \\cdot 4 + 3 = 11$.`,
    },
    {
      id: '8-10-1-text-hverdagsfunksjoner',
      type: 'text',
      title: 'Funksjoner i hverdagen',
      content: `## Funksjoner i hverdagen

Funksjoner finnes overalt rundt oss! Her er noen eksempler:

**Temperatur og tid:**
Temperaturen ute avhenger av klokkeslettet. Klokken 6 om morgenen kan det være 5 °C, klokken 12 kan det være 15 °C, og klokken 18 kan det være 12 °C. Her er klokkeslettet innverdien og temperaturen utverdien.

**Pris og antall:**
Hvis en banan koster 3 kr, avhenger totalprisen av hvor mange bananer du kjøper. Kjøper du 5 bananer, betaler du $5 \\cdot 3 = 15$ kr. Her er antall bananer innverdien og prisen utverdien.

**Alder og fødselsår:**
Alderen din i 2025 avhenger av fødselsåret ditt. Hvis du er født i 2011, er du $2025 - 2011 = 14$ år. Her er fødselsåret innverdien og alderen utverdien.

Alle disse eksemplene har noe til felles: **for hver innverdi får vi én bestemt utverdi**.`,
    },
    {
      id: '8-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Funksjonsmaskin',
      problem: `En funksjonsmaskin tar inn et tall, ganger det med 3 og trekker fra 1. Hva blir utverdien når innverdien er:
a) $x = 2$
b) $x = 0$
c) $x = -4$`,
      solution: `**Løsning:**

Regelen er: «gang med 3 og trekk fra 1». Det gir oss $3x - 1$.

a) $x = 2$: $3 \\cdot 2 - 1 = 6 - 1 = 5$

b) $x = 0$: $3 \\cdot 0 - 1 = 0 - 1 = -1$

c) $x = -4$: $3 \\cdot (-4) - 1 = -12 - 1 = -13$`,
    },

    // BLOKK 2: Funksjonsnotasjon
    {
      id: '8-10-1-def-2',
      type: 'definition',
      title: 'Funksjonsnotasjon f(x)',
      content: `I stedet for å si «funksjonsregelen er å doble tallet og legge til 3», skriver vi:

$$f(x) = 2x + 3$$

Her betyr:
- $f$ er **navnet** på funksjonen (vi kan også bruke andre bokstaver som $g$, $h$ osv.)
- $x$ er **innverdien** (variabelen)
- $2x + 3$ er **funksjonsuttrykket** (regelen)

Når vi vil finne utverdien for en bestemt innverdi, **setter vi inn**:

$$f(5) = 2 \\cdot 5 + 3 = 10 + 3 = 13$$

Vi leser dette som «$f$ av $5$ er lik $13$».

**Viktig:** $f(x)$ betyr **ikke** «$f$ ganget med $x$». Det betyr «verdien av funksjonen $f$ når innverdien er $x$».`,
    },
    {
      id: '8-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruk av funksjonsnotasjon',
      problem: `La $f(x) = 4x - 2$. Finn:
a) $f(3)$
b) $f(-1)$
c) $f(0)$
d) Hvilken innverdi $x$ gir $f(x) = 10$?`,
      solution: `**Løsning:**

a) $f(3) = 4 \\cdot 3 - 2 = 12 - 2 = 10$

b) $f(-1) = 4 \\cdot (-1) - 2 = -4 - 2 = -6$

c) $f(0) = 4 \\cdot 0 - 2 = 0 - 2 = -2$

d) Vi skal finne $x$ slik at $f(x) = 10$:
$$4x - 2 = 10$$
$$4x = 12$$
$$x = 3$$

Altså gir $x = 3$ utverdien $f(x) = 10$. Vi kan sjekke: $f(3) = 4 \\cdot 3 - 2 = 10$ \\checkmark`,
    },

    // BLOKK 3: Eksempler med funksjoner fra hverdagen
    {
      id: '8-10-1-text-praktisk',
      type: 'text',
      title: 'Funksjoner som beskriver virkeligheten',
      content: `## Funksjoner som beskriver virkeligheten

Funksjoner er nyttige fordi de kan beskrive sammenhenger i den virkelige verden. Her er noen eksempler:

**Pris for taxi:**
En taxitur koster 50 kr i startpris pluss 15 kr per kilometer. Vi kan skrive dette som en funksjon:

$$P(x) = 15x + 50$$

der $x$ er antall kilometer og $P(x)$ er prisen i kroner.

**Mobilabonnement:**
Et mobilabonnement koster 99 kr i måneden pluss 0,50 kr per minutt du ringer. Funksjonen blir:

$$K(m) = 0{,}50 \\cdot m + 99$$

der $m$ er antall minutter og $K(m)$ er kostnaden i kroner.

Legg merke til at vi bruker bokstaver som gir mening: $P$ for pris, $K$ for kostnad, $m$ for minutter.`,
    },
    {
      id: '8-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Taxipris',
      problem: `En taxitur koster 50 kr i startpris pluss 15 kr per kilometer. Funksjonen er $P(x) = 15x + 50$.

a) Hva koster en tur på 8 km?
b) Hva koster en tur på 20 km?
c) Du betalte 200 kr. Hvor langt kjørte du?`,
      solution: `**Løsning:**

a) $P(8) = 15 \\cdot 8 + 50 = 120 + 50 = 170$ kr

b) $P(20) = 15 \\cdot 20 + 50 = 300 + 50 = 350$ kr

c) Vi vet at $P(x) = 200$ og skal finne $x$:
$$15x + 50 = 200$$
$$15x = 150$$
$$x = 10$$

Du kjørte 10 km.`,
    },

    // BLOKK 4: Viktige egenskaper
    {
      id: '8-10-1-note-1',
      type: 'note',
      title: 'Husk!',
      content: `**Tre ting å huske om funksjoner:**

1. **En funksjon gir bare én utverdi for hver innverdi.** Hvis du setter inn $x = 3$ to ganger, skal du få det samme svaret begge gangene.

2. **Ulike innverdier kan gi samme utverdi.** For eksempel, i funksjonen $f(x) = x^2$ gir både $x = 3$ og $x = -3$ utverdien $9$.

3. **Bokstaven $x$ er bare en plassholder.** $f(x) = 2x + 1$ og $f(t) = 2t + 1$ er den samme funksjonen — de bruker bare forskjellige navn på variabelen.`,
    },

    // OPPGAVER
    {
      id: '8-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-10-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk funksjonen $f(x) = 2x + 3$ til å finne',
        subTasks: [
          { label: 'a', task: '$f(1)$', solution: '$f(1) = 2 \\cdot 1 + 3 = 5$' },
          { label: 'b', task: '$f(4)$', solution: '$f(4) = 2 \\cdot 4 + 3 = 11$' },
          { label: 'c', task: '$f(0)$', solution: '$f(0) = 2 \\cdot 0 + 3 = 3$' },
          { label: 'd', task: '$f(-2)$', solution: '$f(-2) = 2 \\cdot (-2) + 3 = -4 + 3 = -1$' },
          { label: 'e', task: '$f(10)$', solution: '$f(10) = 2 \\cdot 10 + 3 = 23$' },
        ],
        solution: 'a) 5, b) 11, c) 3, d) −1, e) 23',
        hints: ['Sett inn verdien for $x$ i uttrykket $2x + 3$ og regn ut.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-10-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk funksjonen $g(x) = 3x - 5$ til å finne',
        subTasks: [
          { label: 'a', task: '$g(2)$', solution: '$g(2) = 3 \\cdot 2 - 5 = 6 - 5 = 1$' },
          { label: 'b', task: '$g(5)$', solution: '$g(5) = 3 \\cdot 5 - 5 = 15 - 5 = 10$' },
          { label: 'c', task: '$g(-3)$', solution: '$g(-3) = 3 \\cdot (-3) - 5 = -9 - 5 = -14$' },
          { label: 'd', task: '$g(0)$', solution: '$g(0) = 3 \\cdot 0 - 5 = -5$' },
        ],
        solution: 'a) 1, b) 10, c) −14, d) −5',
        hints: ['Sett inn verdien for $x$ i uttrykket $3x - 5$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-10-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: `En funksjonsmaskin tar inn et tall, ganger det med 4 og legger til 1.

a) Skriv funksjonsuttrykket $f(x)$.
b) Finn $f(2)$, $f(5)$ og $f(-3)$.
c) Hvilken innverdi gir utverdien $21$?`,
        subTasks: [
          { label: 'a', task: 'Skriv funksjonsuttrykket $f(x)$.', solution: '$f(x) = 4x + 1$' },
          { label: 'b', task: 'Finn $f(2)$, $f(5)$ og $f(-3)$.', solution: '$f(2) = 4 \\cdot 2 + 1 = 9$, $f(5) = 4 \\cdot 5 + 1 = 21$, $f(-3) = 4 \\cdot (-3) + 1 = -11$' },
          { label: 'c', task: 'Hvilken innverdi gir utverdien $21$?', solution: '$4x + 1 = 21 \\Rightarrow 4x = 20 \\Rightarrow x = 5$' },
        ],
        solution: 'a) $f(x) = 4x + 1$, b) $f(2) = 9$, $f(5) = 21$, $f(-3) = -11$, c) $x = 5$',
        hints: ['«Gang med 4 og legg til 1» betyr $4x + 1$. For del c), sett $f(x) = 21$ og løs likningen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-10-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `La $h(x) = x^2 + 1$.`,
        subTasks: [
          { label: 'a', task: 'Finn $h(3)$.', solution: '$h(3) = 3^2 + 1 = 9 + 1 = 10$' },
          { label: 'b', task: 'Finn $h(-3)$.', solution: '$h(-3) = (-3)^2 + 1 = 9 + 1 = 10$' },
          { label: 'c', task: 'Finn $h(0)$.', solution: '$h(0) = 0^2 + 1 = 1$' },
          { label: 'd', task: 'Finn $h(-5)$.', solution: '$h(-5) = (-5)^2 + 1 = 25 + 1 = 26$' },
          { label: 'e', task: 'Hva legger du merke til om $h(3)$ og $h(-3)$? Forklar hvorfor det er slik.', solution: '$h(3)$ og $h(-3)$ gir begge $10$. Det er fordi $3^2 = (-3)^2 = 9$. Når vi kvadrerer et tall, spiller ikke fortegnet noen rolle.' },
        ],
        solution: 'a) 10, b) 10, c) 1, d) 26, e) $h(3) = h(-3) = 10$ fordi $3^2 = (-3)^2$.',
        hints: ['Husk at $x^2$ betyr $x \\cdot x$. Et negativt tall ganget med seg selv gir et positivt tall.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-10-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Et treningssenter koster 200 kr i innmeldingsavgift pluss 150 kr per måned.

a) Skriv en funksjon $K(m)$ som gir totalkostnaden etter $m$ måneder.
b) Hva koster det totalt etter 6 måneder?
c) Du har betalt 1700 kr totalt. Hvor mange måneder har du vært medlem?`,
        subTasks: [
          { label: 'a', task: 'Skriv en funksjon $K(m)$ som gir totalkostnaden.', solution: '$K(m) = 150m + 200$' },
          { label: 'b', task: 'Hva koster det etter 6 måneder?', solution: '$K(6) = 150 \\cdot 6 + 200 = 900 + 200 = 1100$ kr' },
          { label: 'c', task: 'Hvor mange måneder for 1700 kr totalt?', solution: '$150m + 200 = 1700 \\Rightarrow 150m = 1500 \\Rightarrow m = 10$ måneder' },
        ],
        solution: 'a) $K(m) = 150m + 200$, b) 1100 kr, c) 10 måneder',
        hints: ['Innmeldingsavgiften er et fast beløp som bare betales én gang. Månedsprisen betales hver måned.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-10-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `Bestem hvilke av disse sammenhengene som er funksjoner. Begrunn svaret.`,
        subTasks: [
          { label: 'a', task: 'Sammenhengen mellom en persons alder og høyde.', solution: 'Ja, dette er en funksjon (tilnærmet). På et gitt tidspunkt har en person med en bestemt alder én bestemt høyde.' },
          { label: 'b', task: 'Sammenhengen mellom et tall og dets absoluttverdi.', solution: 'Ja, dette er en funksjon. Hvert tall har nøyaktig én absolutt verdi. For eksempel: $|-3| = 3$ og $|5| = 5$.' },
          { label: 'c', task: 'Sammenhengen mellom en høyde og alle personene som har den høyden.', solution: 'Nei, dette er ikke en funksjon fordi det finnes mange personer med samme høyde. For eksempel kan mange personer være 170 cm.' },
          { label: 'd', task: 'Sammenhengen mellom antall timer du jobber og lønnen du får (med fast timepris).', solution: 'Ja, dette er en funksjon. Hvis timeprisen er fast, gir hvert antall timer nøyaktig én lønn.' },
        ],
        solution: 'a) Ja, b) Ja, c) Nei, d) Ja. En sammenheng er en funksjon bare hvis hver innverdi gir nøyaktig én utverdi.',
        hints: ['Spør deg selv: Kan én innverdi gi flere ulike utverdier? Hvis ja, er det ikke en funksjon.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-10-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En nettbutikk selger T-skjorter for 120 kr per stykk. Frakten koster 49 kr uansett hvor mange du bestiller, men ved kjøp av 5 eller flere er frakten gratis.

a) Skriv en funksjon $P(n)$ som gir totalprisen for $n$ T-skjorter (der $n \\geq 1$).
b) Regn ut $P(1)$, $P(4)$ og $P(5)$.
c) For hvor mange T-skjorter er prisen per skjorte (inkludert frakt) lavest?`,
        subTasks: [
          { label: 'a', task: 'Skriv funksjonen $P(n)$.', solution: `$P(n) = \\begin{cases} 120n + 49 & \\text{når } n < 5 \\\\ 120n & \\text{når } n \\geq 5 \\end{cases}$` },
          { label: 'b', task: 'Regn ut $P(1)$, $P(4)$ og $P(5)$.', solution: '$P(1) = 120 + 49 = 169$ kr, $P(4) = 480 + 49 = 529$ kr, $P(5) = 600$ kr' },
          { label: 'c', task: 'Når er prisen per skjorte lavest?', solution: 'Pris per skjorte: $P(1)/1 = 169$ kr, $P(4)/4 = 132{,}25$ kr, $P(5)/5 = 120$ kr. Fra og med 5 skjorter er prisen per skjorte 120 kr (ingen frakt), som er den laveste mulige.' },
        ],
        solution: 'a) Delt funksjon med fraktgrense ved $n = 5$. b) $P(1) = 169$, $P(4) = 529$, $P(5) = 600$. c) Fra 5 skjorter: 120 kr per stk.',
        hints: ['Funksjonen har ulike regler avhengig av om $n < 5$ eller $n \\geq 5$. Dette kalles en delt funksjon.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-10-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `La $f(x) = 3x - 1$ og $g(x) = x^2 - 4$.`,
        subTasks: [
          { label: 'a', task: 'Finn $f(2) + g(2)$.', solution: '$f(2) = 3 \\cdot 2 - 1 = 5$ og $g(2) = 2^2 - 4 = 0$. Summen er $5 + 0 = 5$.' },
          { label: 'b', task: 'Finn $f(3) \\cdot g(1)$.', solution: '$f(3) = 3 \\cdot 3 - 1 = 8$ og $g(1) = 1^2 - 4 = -3$. Produktet er $8 \\cdot (-3) = -24$.' },
          { label: 'c', task: 'For hvilken verdi av $x$ er $f(x) = g(x)$?', solution: `$3x - 1 = x^2 - 4$
$0 = x^2 - 3x - 3$

Med abc-formelen: $x = \\frac{3 \\pm \\sqrt{9 + 12}}{2} = \\frac{3 \\pm \\sqrt{21}}{2}$

$x \\approx 3{,}79$ eller $x \\approx -0{,}79$

Vi kan sjekke ved å sette inn: $f(3{,}79) \\approx 10{,}37$ og $g(3{,}79) \\approx 10{,}36$ \\checkmark` },
          { label: 'd', task: 'Finn $f(g(2))$.', solution: '$g(2) = 2^2 - 4 = 0$. Deretter: $f(g(2)) = f(0) = 3 \\cdot 0 - 1 = -1$.' },
        ],
        solution: 'a) 5, b) −24, c) $x \\approx 3{,}79$ eller $x \\approx -0{,}79$, d) −1',
        hints: ['Regn ut funksjonsverdiene hver for seg. I del d) finner du først $g(2)$ og setter deretter dette svaret inn i $f$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '8-10-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '8-10-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '8-10-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut funksjonsverdier for $f(x) = 4x - 2$.',
            subTasks: [
              { label: 'a', task: '$f(1)$', solution: '$f(1) = 4 \\cdot 1 - 2 = 2$' },
              { label: 'b', task: '$f(3)$', solution: '$f(3) = 4 \\cdot 3 - 2 = 10$' },
              { label: 'c', task: '$f(0)$', solution: '$f(0) = 4 \\cdot 0 - 2 = -2$' },
              { label: 'd', task: '$f(-2)$', solution: '$f(-2) = 4 \\cdot (-2) - 2 = -10$' },
              { label: 'e', task: '$f(5)$', solution: '$f(5) = 4 \\cdot 5 - 2 = 18$' },
              { label: 'f', task: '$f(-1)$', solution: '$f(-1) = 4 \\cdot (-1) - 2 = -6$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Sett inn verdien for $x$ i uttrykket $4x - 2$ og regn ut.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '8-10-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Regn ut funksjonsverdier for $g(x) = x^2 + 1$.',
            subTasks: [
              { label: 'a', task: '$g(2)$', solution: '$g(2) = 2^2 + 1 = 5$' },
              { label: 'b', task: '$g(-2)$', solution: '$g(-2) = (-2)^2 + 1 = 5$' },
              { label: 'c', task: '$g(0)$', solution: '$g(0) = 0^2 + 1 = 1$' },
              { label: 'd', task: '$g(3)$', solution: '$g(3) = 3^2 + 1 = 10$' },
              { label: 'e', task: '$g(-4)$', solution: '$g(-4) = (-4)^2 + 1 = 17$' },
              { label: 'f', task: 'Forklar hvorfor $g(2) = g(-2)$.', solution: 'Fordi $2^2 = (-2)^2 = 4$. Når vi kvadrerer et tall, blir resultatet positivt uansett fortegn.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Husk at $x^2$ betyr $x \\cdot x$. Et negativt tall ganget med seg selv gir positivt resultat.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '8-10-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Sett opp funksjonsuttrykk fra beskrivelser.',
            subTasks: [
              { label: 'a', task: 'En funksjonsmaskin dobler tallet og legger til 5. Skriv funksjonsuttrykket.', solution: '$f(x) = 2x + 5$' },
              { label: 'b', task: 'En funksjonsmaskin trekker tallet fra 10. Skriv funksjonsuttrykket.', solution: '$f(x) = 10 - x$' },
              { label: 'c', task: 'Prisen for $x$ epler til 4 kr per stk. Skriv funksjonsuttrykket.', solution: '$P(x) = 4x$' },
              { label: 'd', task: 'Et treningsstudio koster 200 kr i innmeldingsavgift og 300 kr/mnd. Skriv $K(m)$ for totalprisen etter $m$ måneder.', solution: '$K(m) = 300m + 200$' },
              { label: 'e', task: 'Regn ut $K(6)$ fra oppgave d).', solution: '$K(6) = 300 \\cdot 6 + 200 = 2000 \\text{ kr}$' },
              { label: 'f', task: 'Etter hvor mange måneder koster det 5000 kr totalt (fra oppgave d)?', solution: '$300m + 200 = 5000 \\Rightarrow 300m = 4800 \\Rightarrow m = 16$ måneder.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Oversett beskrivelsen steg for steg til et matematisk uttrykk.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '8-10-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Jobb med to funksjoner: $f(x) = 3x + 1$ og $g(x) = x^2 - 4$.',
            subTasks: [
              { label: 'a', task: 'Finn $f(4)$ og $g(4)$.', solution: '$f(4) = 3 \\cdot 4 + 1 = 13$. $g(4) = 4^2 - 4 = 12$.' },
              { label: 'b', task: 'For hvilken $x$-verdi er $f(x) = 10$?', solution: '$3x + 1 = 10 \\Rightarrow 3x = 9 \\Rightarrow x = 3$' },
              { label: 'c', task: 'For hvilke $x$-verdier er $g(x) = 0$?', solution: '$x^2 - 4 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = 2$ eller $x = -2$' },
              { label: 'd', task: 'Finn $f(g(1))$.', solution: '$g(1) = 1 - 4 = -3$. $f(-3) = 3 \\cdot (-3) + 1 = -8$' },
              { label: 'e', task: 'Finn $g(f(0))$.', solution: '$f(0) = 1$. $g(1) = 1 - 4 = -3$' },
              { label: 'f', task: 'Er det noen $x$ der $f(x) = g(x)$? Finn i så fall denne verdien.', solution: '$3x + 1 = x^2 - 4 \\Rightarrow x^2 - 3x - 5 = 0$. $x = \\frac{3 \\pm \\sqrt{9 + 20}}{2} = \\frac{3 \\pm \\sqrt{29}}{2}$. $x \\approx 4{,}19$ eller $x \\approx -1{,}19$.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Sett inn verdiene steg for steg. For sammensatte funksjoner: regn ut den innerste først.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '8-10-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Avgjør om sammenhengene er funksjoner.',
            subTasks: [
              { label: 'a', task: 'Sammenhengen mellom en persons alder og høyde. Er dette en funksjon?', solution: 'Nei, for en gitt alder kan ulike personer ha ulik høyde. (Hvis vi ser på én bestemt person, kan det likevel være en funksjon.)' },
              { label: 'b', task: 'Sammenhengen mellom sidelengde og areal i et kvadrat. Er dette en funksjon?', solution: 'Ja, $A(s) = s^2$. Hver sidelengde gir nøyaktig ett areal.' },
              { label: 'c', task: 'Sammenhengen mellom $x$ og $y$ gitt ved $y^2 = x$. Er dette en funksjon?', solution: 'Nei, for $x = 4$ er $y = 2$ eller $y = -2$. Én innverdi gir to utverdier.' },
              { label: 'd', task: '$h(x) = \\frac{12}{x}$. Regn ut $h(2)$, $h(3)$, $h(4)$ og $h(6)$.', solution: '$h(2) = 6$, $h(3) = 4$, $h(4) = 3$, $h(6) = 2$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['En funksjon gir nøyaktig én utverdi for hver innverdi. Kan det finnes to ulike svar for samme innverdi?'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '8-10-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver om funksjoner.',
            subTasks: [
              { label: 'a', task: 'Finn et funksjonsuttrykk $f(x)$ slik at $f(2) = 7$ og $f(5) = 16$. (Tips: Prøv $f(x) = ax + b$.)', solution: '$2a + b = 7$ og $5a + b = 16$. Trekker fra: $3a = 9 \\Rightarrow a = 3$. $b = 7 - 6 = 1$. $f(x) = 3x + 1$.' },
              { label: 'b', task: 'En funksjon $g$ oppfyller $g(x) = 2g(x-1) + 1$ med $g(0) = 1$. Finn $g(1)$, $g(2)$ og $g(3)$.', solution: '$g(1) = 2 \\cdot 1 + 1 = 3$. $g(2) = 2 \\cdot 3 + 1 = 7$. $g(3) = 2 \\cdot 7 + 1 = 15$.' },
              { label: 'c', task: 'En taxitur koster 50 kr i startpris og 15 kr/km. Skriv opp funksjonen $T(k)$ og finn hvor langt du kan kjøre for 200 kr.', solution: '$T(k) = 15k + 50$. $15k + 50 = 200 \\Rightarrow 15k = 150 \\Rightarrow k = 10$ km.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['I oppgave a), sett opp to likninger med to ukjente og løs likningssystemet. I b), bruk forrige verdi for å finne neste.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Funksjon', definition: 'En regel som tilordner hver innverdi nøyaktig én utverdi' },
    { term: 'Innverdi', definition: 'Tallet vi setter inn i funksjonen, vanligvis kalt x' },
    { term: 'Utverdi', definition: 'Tallet som kommer ut av funksjonen, kalt f(x)' },
    { term: 'Funksjonsuttrykk', definition: 'Den matematiske formelen som beskriver funksjonen, f.eks. f(x) = 2x + 3' },
    { term: 'f(x)', definition: 'Notasjon for verdien av funksjonen f når innverdien er x' },
    { term: 'Funksjonsmaskin', definition: 'En metafor der funksjonen er en maskin som tar inn et tall og gir ut et annet' },
  ],
  nextChapter: '8-10-2',
};

// ============================================================================
// Kapittel 10.2: Verditabeller og grafer
// ============================================================================

export const CHAPTER_8_10_2: TextbookChapter = {
  id: '8-10-2',
  courseId: '8',
  chapterNumber: '10.2',
  title: 'Verditabeller og grafer',
  description: 'Lær å lage verditabeller fra funksjonsuttrykk, plotte punkter i koordinatsystem og tegne grafer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'representere funksjonar på ulike måtar og veksle mellom representasjonane',
  ],
  content: [
    // INTRO
    {
      id: '8-10-2-intro',
      type: 'text',
      content: `## Verditabeller og grafer

Nå som du vet hva en funksjon er, skal du lære to viktige måter å fremstille funksjoner på: **verditabeller** og **grafer**.

En verditabell viser oss sammenhengen mellom innverdier og utverdier i en oversiktlig tabell. En graf viser den samme sammenhengen som en kurve i et koordinatsystem.

Sammen gir verditabell og graf oss et tydelig bilde av hvordan funksjonen oppfører seg.

I dette kapittelet skal du lære:

- Hvordan du lager en verditabell fra et funksjonsuttrykk
- Hvordan du plotter punkter i et koordinatsystem
- Hvordan du tegner grafen til en funksjon
- Hvordan du leser av verdier fra en graf`,
    },

    // BLOKK 1: Verditabell
    {
      id: '8-10-2-def-1',
      type: 'definition',
      title: 'Verditabell',
      content: `En **verditabell** er en tabell som viser sammenhengen mellom innverdier ($x$) og utverdier ($f(x)$) for en funksjon.

For å lage en verditabell:

1. Velg noen verdier for $x$ (for eksempel $-3, -2, -1, 0, 1, 2, 3$)
2. Sett inn hver $x$-verdi i funksjonsuttrykket
3. Regn ut den tilhørende $f(x)$-verdien
4. Skriv resultatene i en tabell

**Eksempel:** For $f(x) = 2x - 1$:

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|-----|------|------|------|-----|-----|-----|-----|
| $f(x)$ | $-7$ | $-5$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |

Her ser vi at $f(x)$ øker med 2 for hver gang $x$ øker med 1. Det betyr at funksjonen har en jevn stigning.`,
    },
    {
      id: '8-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Lage verditabell',
      problem: `Lag en verditabell for funksjonen $f(x) = x^2 - 2$ med $x$-verdier fra $-3$ til $3$.`,
      solution: `**Løsning:**

Vi setter inn hver $x$-verdi:

- $f(-3) = (-3)^2 - 2 = 9 - 2 = 7$
- $f(-2) = (-2)^2 - 2 = 4 - 2 = 2$
- $f(-1) = (-1)^2 - 2 = 1 - 2 = -1$
- $f(0) = 0^2 - 2 = -2$
- $f(1) = 1^2 - 2 = -1$
- $f(2) = 2^2 - 2 = 2$
- $f(3) = 3^2 - 2 = 7$

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|-----|------|------|------|-----|-----|-----|-----|
| $f(x)$ | $7$ | $2$ | $-1$ | $-2$ | $-1$ | $2$ | $7$ |

Legg merke til at tabellen er **symmetrisk** rundt $x = 0$. Det er fordi $f(-x) = (-x)^2 - 2 = x^2 - 2 = f(x)$.`,
    },

    // BLOKK 2: Koordinatsystem og plotte punkter
    {
      id: '8-10-2-def-2',
      type: 'definition',
      title: 'Koordinatsystem og plotte punkter',
      content: `Et **koordinatsystem** består av to talllinjer som krysser hverandre vinkelrett i **origo** (nullpunktet):

- Den vannrette linjen kalles **$x$-aksen** (førsteaksen)
- Den loddrette linjen kalles **$y$-aksen** (andreaksen)

Et **punkt** i koordinatsystemet beskrives med et **koordinatpar** $(x, y)$:
- $x$-verdien angir posisjonen langs den vannrette aksen
- $y$-verdien angir posisjonen langs den loddrette aksen

For å **plotte** et punkt markerer vi posisjonen i koordinatsystemet. For eksempel er punktet $(3, 2)$ tre enheter til høyre og to enheter opp fra origo.

**Fra verditabell til punkter:**
Hver rad i verditabellen gir oss et punkt. Hvis $f(x) = 2x - 1$, gir raden $x = 2$, $f(2) = 3$ oss punktet $(2, 3)$.`,
    },
    {
      id: '8-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Plotte punkter fra verditabell',
      problem: `Funksjonen $f(x) = x + 2$ har denne verditabellen:

| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|-----|------|------|------|-----|-----|-----|-----|
| $f(x)$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |

List opp alle punktene som kan plottes i koordinatsystemet.`,
      solution: `**Løsning:**

Fra verditabellen får vi disse punktene:

$$(-3, -1), \\quad (-2, 0), \\quad (-1, 1), \\quad (0, 2), \\quad (1, 3), \\quad (2, 4), \\quad (3, 5)$$

Hvert punkt har formen $(x, f(x))$. Når vi plotter disse punktene i et koordinatsystem og trekker en linje gjennom dem, ser vi at de ligger på en **rett linje**. Det er fordi $f(x) = x + 2$ er en lineær funksjon.`,
    },

    // BLOKK 3: Tegne graf
    {
      id: '8-10-2-def-3',
      type: 'definition',
      title: 'Graf til en funksjon',
      content: `**Grafen** til en funksjon $f$ er kurven vi får når vi plotter alle punktene $(x, f(x))$ i et koordinatsystem.

**Slik tegner du en graf:**

1. Lag en verditabell med nok $x$-verdier (vanligvis 5-7 stykker)
2. Plott hvert punkt $(x, f(x))$ i koordinatsystemet
3. Trekk en jevn kurve (eller rett linje) gjennom punktene

**Viktig:**
- For **lineære funksjoner** (som $f(x) = 2x + 3$) er grafen alltid en **rett linje**
- For **kvadratiske funksjoner** (som $f(x) = x^2$) er grafen en **parabel** (bueform)
- Bruk nok punkter til at formen på grafen blir tydelig`,
    },
    {
      id: '8-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Tegne grafen til en lineær funksjon',
      problem: `Lag verditabell og tegn grafen til funksjonen $f(x) = -x + 4$ for $x$-verdier fra $-1$ til $5$.`,
      solution: `**Løsning:**

**Steg 1: Verditabell**

| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|-----|------|-----|-----|-----|-----|-----|-----|
| $f(x)$ | $5$ | $4$ | $3$ | $2$ | $1$ | $0$ | $-1$ |

**Steg 2: Plott punktene**
Vi plotter punktene $(-1, 5)$, $(0, 4)$, $(1, 3)$, $(2, 2)$, $(3, 1)$, $(4, 0)$ og $(5, -1)$.

**Steg 3: Trekk en rett linje**
Punktene ligger på en rett linje som skrår nedover fra venstre mot høyre.

Grafen krysser $y$-aksen i $(0, 4)$ — dette er **konstantleddet** $4$.

Grafen krysser $x$-aksen i $(4, 0)$ — dette er **nullpunktet**.

Linjen synker med 1 for hver gang $x$ øker med 1 — **stigningstallet** er $-1$.`,
    },

    // BLOKK 4: Lese av verdier fra en graf
    {
      id: '8-10-2-text-avlesning',
      type: 'text',
      title: 'Lese av verdier fra en graf',
      content: `## Lese av verdier fra en graf

Når vi har en graf, kan vi bruke den til å finne verdier **uten å regne**:

**Finne $f(a)$ fra grafen:**
1. Gå til $x = a$ på $x$-aksen
2. Gå loddrett opp (eller ned) til grafen
3. Gå vannrett til $y$-aksen og les av verdien — det er $f(a)$

**Finne $x$ når $f(x) = b$:**
1. Gå til $y = b$ på $y$-aksen
2. Gå vannrett til grafen (det kan være ett eller flere treffpunkter)
3. Gå loddrett ned til $x$-aksen og les av verdien — det er $x$

**Nullpunkt:** Punktet der grafen krysser $x$-aksen. Her er $f(x) = 0$.

**Skjæring med $y$-aksen:** Punktet der grafen krysser $y$-aksen. Her er $x = 0$, og $y$-verdien er $f(0)$.`,
    },
    {
      id: '8-10-2-example-4',
      type: 'example',
      title: 'Eksempel 4: Lese av fra graf',
      problem: `Grafen til funksjonen $f(x) = 2x - 4$ er en rett linje. Bruk funksjonsuttrykket til å finne:
a) Hva er $f(3)$?
b) For hvilken $x$-verdi er $f(x) = 0$? (Nullpunktet)
c) Hva er $f(0)$? (Skjæring med $y$-aksen)`,
      solution: `**Løsning:**

a) $f(3) = 2 \\cdot 3 - 4 = 6 - 4 = 2$

Fra grafen: Vi går til $x = 3$ og leser av at $y = 2$.

b) Vi løser $f(x) = 0$:
$$2x - 4 = 0$$
$$2x = 4$$
$$x = 2$$

Fra grafen: Linjen krysser $x$-aksen i $(2, 0)$.

c) $f(0) = 2 \\cdot 0 - 4 = -4$

Fra grafen: Linjen krysser $y$-aksen i $(0, -4)$.

Nullpunktet er $(2, 0)$ og skjæring med $y$-aksen er $(0, -4)$.`,
    },

    // TIPS
    {
      id: '8-10-2-tip-1',
      type: 'tip',
      title: 'Tips for å tegne gode grafer',
      content: `Følg disse rådene for å tegne gode grafer:

1. **Bruk rutepapir** eller koordinatsystem med rutenett
2. **Merk aksene** med $x$ og $y$ og skriv på tallene
3. **Velg passende skala** slik at alle punktene får plass
4. **Plott nok punkter** — minst 5 for en rett linje, minst 7 for en kurve
5. **Bruk linjal** for rette linjer
6. **Trekk en jevn kurve** gjennom punktene (ikke rett-linje-stykker mellom hvert punkt)`,
    },

    // OPPGAVER
    {
      id: '8-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-10-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en verditabell for $f(x) = 3x - 2$ med $x$-verdier fra $-2$ til $4$.',
        subTasks: [
          { label: 'a', task: 'Fyll ut verditabellen.', solution: `| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|-----|------|------|-----|-----|-----|-----|-----|
| $f(x)$ | $-8$ | $-5$ | $-2$ | $1$ | $4$ | $7$ | $10$ |` },
          { label: 'b', task: 'Hva er mønsteret i $f(x)$-verdiene?', solution: '$f(x)$ øker med 3 for hver gang $x$ øker med 1. Det stemmer med stigningstallet 3.' },
        ],
        solution: 'Verditabell: $f(-2) = -8$, $f(-1) = -5$, $f(0) = -2$, $f(1) = 1$, $f(2) = 4$, $f(3) = 7$, $f(4) = 10$. Mønster: øker med 3 per steg.',
        hints: ['Sett inn hver $x$-verdi i uttrykket $3x - 2$. Se etter et mønster i svarene.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-10-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag en verditabell for $g(x) = -2x + 6$ med $x$-verdier fra $-1$ til $5$ og tegn grafen.',
        subTasks: [
          { label: 'a', task: 'Fyll ut verditabellen.', solution: `| $x$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|-----|------|-----|-----|-----|-----|-----|-----|
| $g(x)$ | $8$ | $6$ | $4$ | $2$ | $0$ | $-2$ | $-4$ |` },
          { label: 'b', task: 'Tegn grafen i et koordinatsystem.', solution: 'Grafen er en rett linje som går gjennom punktene i tabellen. Linjen skrår nedover fra venstre mot høyre.' },
          { label: 'c', task: 'Hva er nullpunktet?', solution: 'Nullpunktet er $(3, 0)$ fordi $g(3) = -2 \\cdot 3 + 6 = 0$.' },
        ],
        solution: 'Nullpunktet er $(3, 0)$. Grafen krysser $y$-aksen i $(0, 6)$.',
        hints: ['Nullpunktet er der $g(x) = 0$, altså der grafen krysser $x$-aksen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-10-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en verditabell og tegn grafen til $f(x) = x^2 - 4$ for $x$-verdier fra $-3$ til $3$.',
        subTasks: [
          { label: 'a', task: 'Fyll ut verditabellen.', solution: `| $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|-----|------|------|------|-----|-----|-----|-----|
| $f(x)$ | $5$ | $0$ | $-3$ | $-4$ | $-3$ | $0$ | $5$ |` },
          { label: 'b', task: 'Tegn grafen.', solution: 'Grafen er en parabel (U-form) med bunnpunkt i $(0, -4)$.' },
          { label: 'c', task: 'Hva er nullpunktene?', solution: 'Nullpunktene er $x = -2$ og $x = 2$ fordi $f(-2) = 0$ og $f(2) = 0$.' },
          { label: 'd', task: 'Hva er den laveste $f(x)$-verdien?', solution: 'Den laveste verdien er $f(0) = -4$. Punktet $(0, -4)$ er bunnpunktet til parabelen.' },
        ],
        solution: 'Nullpunkter: $x = -2$ og $x = 2$. Bunnpunkt: $(0, -4)$. Grafen er en parabel.',
        hints: ['Husk at $(-3)^2 = 9$ og $(-2)^2 = 4$. Grafen til $x^2$ er en U-form (parabel).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-10-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Grafen til en funksjon $f$ går gjennom punktene $(-2, 1)$, $(0, 5)$, $(2, 9)$ og $(4, 13)$.`,
        subTasks: [
          { label: 'a', task: 'Hva er $f(0)$?', solution: '$f(0) = 5$ (vi leser av punktet $(0, 5)$).' },
          { label: 'b', task: 'Hva er $f(4)$?', solution: '$f(4) = 13$ (vi leser av punktet $(4, 13)$).' },
          { label: 'c', task: 'Finn et funksjonsuttrykk $f(x) = ax + b$ som passer.', solution: `Stigningstallet: $a = \\frac{9 - 5}{2 - 0} = \\frac{4}{2} = 2$. Konstantleddet: $b = f(0) = 5$. Altså er $f(x) = 2x + 5$.

Sjekk: $f(-2) = 2 \\cdot (-2) + 5 = 1$ \\checkmark, $f(2) = 2 \\cdot 2 + 5 = 9$ \\checkmark, $f(4) = 2 \\cdot 4 + 5 = 13$ \\checkmark` },
        ],
        solution: 'a) 5, b) 13, c) $f(x) = 2x + 5$',
        hints: ['Stigningstallet $a$ finner du ved å se hvor mye $f(x)$ endrer seg når $x$ øker med 1 (eller 2). Konstantleddet $b$ er $f(0)$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-10-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `En funksjon har denne verditabellen:

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|-----|-----|-----|-----|-----|-----|-----|
| $f(x)$ | $1$ | $2$ | $5$ | $10$ | $17$ | $26$ |`,
        subTasks: [
          { label: 'a', task: 'Tegn grafen i et koordinatsystem.', solution: 'Plott punktene $(0,1)$, $(1,2)$, $(2,5)$, $(3,10)$, $(4,17)$, $(5,26)$ og trekk en jevn kurve.' },
          { label: 'b', task: 'Er dette en lineær funksjon? Begrunn.', solution: 'Nei. Differansene mellom påfølgende $f(x)$-verdier er: $1, 3, 5, 7, 9$. Siden differansene ikke er konstante, er funksjonen ikke lineær.' },
          { label: 'c', task: 'Gjett et funksjonsuttrykk og sjekk om det stemmer.', solution: '$f(x) = x^2 + 1$. Sjekk: $f(0) = 1$, $f(1) = 2$, $f(2) = 5$, $f(3) = 10$, $f(4) = 17$, $f(5) = 26$. Alle stemmer!' },
        ],
        solution: 'Funksjonen er $f(x) = x^2 + 1$. Grafen er en parabel. Ikke lineær fordi differansene mellom $f(x)$-verdiene ikke er konstante.',
        hints: ['Finn differansene mellom påfølgende $f(x)$-verdier. Prøv å se om $f(x) = x^2 + \\text{noe}$ passer.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-10-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `To funksjoner er gitt ved $f(x) = x + 1$ og $g(x) = -x + 5$.`,
        subTasks: [
          { label: 'a', task: 'Lag verditabell for begge funksjonene med $x$-verdier fra $-1$ til $5$.', solution: `$f(x)$: $0, 1, 2, 3, 4, 5, 6$ og $g(x)$: $6, 5, 4, 3, 2, 1, 0$` },
          { label: 'b', task: 'Tegn begge grafene i samme koordinatsystem.', solution: 'To rette linjer som krysser hverandre.' },
          { label: 'c', task: 'I hvilket punkt krysser grafene hverandre? Regn det ut.', solution: '$x + 1 = -x + 5 \\Rightarrow 2x = 4 \\Rightarrow x = 2$. Da er $f(2) = 3$. Skjæringspunktet er $(2, 3)$.' },
          { label: 'd', task: 'For hvilke $x$-verdier er $f(x) > g(x)$?', solution: '$x + 1 > -x + 5 \\Rightarrow 2x > 4 \\Rightarrow x > 2$. For alle $x > 2$ er $f(x) > g(x)$.' },
        ],
        solution: 'Skjæringspunkt: $(2, 3)$. $f(x) > g(x)$ for $x > 2$.',
        hints: ['Sett $f(x) = g(x)$ for å finne skjæringspunktet. Grafene krysser hverandre der de har samme verdi.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-10-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Temperaturen utendørs en sommerdag kan beskrives omtrent med funksjonen

$$T(t) = -\\frac{1}{2}(t - 14)^2 + 25$$

der $t$ er klokkeslettet (timer etter midnatt) og $T$ er temperaturen i °C.`,
        subTasks: [
          { label: 'a', task: 'Lag en verditabell for $t = 6, 8, 10, 12, 14, 16, 18, 20, 22$.', solution: `$T(6) = -\\frac{1}{2}(6-14)^2 + 25 = -\\frac{1}{2} \\cdot 64 + 25 = -32 + 25 = -7$ °C (urealistisk lavt)

Bedre tabell for midtre del:
$T(8) = -\\frac{1}{2} \\cdot 36 + 25 = 7$ °C
$T(10) = -\\frac{1}{2} \\cdot 16 + 25 = 17$ °C
$T(12) = -\\frac{1}{2} \\cdot 4 + 25 = 23$ °C
$T(14) = -\\frac{1}{2} \\cdot 0 + 25 = 25$ °C
$T(16) = -\\frac{1}{2} \\cdot 4 + 25 = 23$ °C
$T(18) = -\\frac{1}{2} \\cdot 16 + 25 = 17$ °C
$T(20) = -\\frac{1}{2} \\cdot 36 + 25 = 7$ °C
$T(22) = -\\frac{1}{2} \\cdot 64 + 25 = -7$ °C` },
          { label: 'b', task: 'Tegn grafen.', solution: 'Grafen er en parabel som åpner seg nedover, med toppunkt i $(14, 25)$.' },
          { label: 'c', task: 'Når er temperaturen høyest, og hva er den?', solution: 'Temperaturen er høyest klokken 14:00 (kl. 2 på ettermiddagen) med $T(14) = 25$ °C.' },
          { label: 'd', task: 'Når er temperaturen 17 °C? (Finn begge tidspunktene.)', solution: `$-\\frac{1}{2}(t-14)^2 + 25 = 17 \\Rightarrow (t-14)^2 = 16 \\Rightarrow t - 14 = \\pm 4$

$t = 10$ eller $t = 18$

Temperaturen er 17 °C klokken 10:00 og klokken 18:00.` },
        ],
        solution: 'Toppunkt: $(14, 25)$. Temperaturen er 17 °C kl. 10 og kl. 18. Modellen passer best mellom ca. kl. 8 og kl. 20.',
        hints: ['$(t-14)^2$ er alltid $\\geq 0$. Verdien er størst når $(t-14)^2 = 0$, altså når $t = 14$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-10-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En ball kastes rett opp i luften. Høyden $h$ (i meter) etter $t$ sekunder kan beskrives med funksjonen:

$$h(t) = 20t - 5t^2$$`,
        subTasks: [
          { label: 'a', task: 'Lag en verditabell for $t = 0, 0{,}5, 1, 1{,}5, 2, 2{,}5, 3, 3{,}5, 4$.', solution: `$h(0) = 0$, $h(0{,}5) = 8{,}75$, $h(1) = 15$, $h(1{,}5) = 18{,}75$, $h(2) = 20$, $h(2{,}5) = 18{,}75$, $h(3) = 15$, $h(3{,}5) = 8{,}75$, $h(4) = 0$` },
          { label: 'b', task: 'Tegn grafen.', solution: 'Grafen er en parabel (nedovervendt) med toppunkt i $(2, 20)$.' },
          { label: 'c', task: 'Hvor høyt når ballen?', solution: 'Ballen når 20 meter etter 2 sekunder.' },
          { label: 'd', task: 'Når lander ballen? (Når er $h(t) = 0$ igjen?)', solution: '$20t - 5t^2 = 0 \\Rightarrow 5t(4 - t) = 0 \\Rightarrow t = 0$ eller $t = 4$. Ballen lander etter 4 sekunder.' },
        ],
        solution: 'Maks høyde: 20 m etter 2 s. Ballen lander etter 4 s. Grafen er en parabel.',
        hints: ['For del c), se i verditabellen etter den høyeste verdien. For del d), løs $20t - 5t^2 = 0$ ved å faktorisere.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '8-10-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '8-10-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '8-10-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Lag verditabell for $f(x) = 2x + 1$ med $x$-verdier fra $-3$ til $3$.',
            subTasks: [
              { label: 'a', task: 'Regn ut $f(-3)$', solution: '$f(-3) = 2 \\cdot (-3) + 1 = -5$' },
              { label: 'b', task: 'Regn ut $f(-1)$', solution: '$f(-1) = 2 \\cdot (-1) + 1 = -1$' },
              { label: 'c', task: 'Regn ut $f(0)$', solution: '$f(0) = 2 \\cdot 0 + 1 = 1$' },
              { label: 'd', task: 'Regn ut $f(1)$', solution: '$f(1) = 2 \\cdot 1 + 1 = 3$' },
              { label: 'e', task: 'Regn ut $f(3)$', solution: '$f(3) = 2 \\cdot 3 + 1 = 7$' },
              { label: 'f', task: 'Hva er mønsteret? Hvor mye øker $f(x)$ hver gang $x$ øker med 1?', solution: '$f(x)$ øker med $2$ for hver gang $x$ øker med $1$. Stigningstallet er $2$.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Sett inn hver $x$-verdi i uttrykket $2x + 1$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '8-10-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Les av verditabellen og svar på spørsmålene. En funksjon har disse verdiene: $f(-2) = 5$, $f(-1) = 2$, $f(0) = 1$, $f(1) = 2$, $f(2) = 5$, $f(3) = 10$.',
            subTasks: [
              { label: 'a', task: 'Hva er $f(0)$?', solution: '$f(0) = 1$' },
              { label: 'b', task: 'For hvilke $x$-verdier er $f(x) = 5$?', solution: '$x = -2$ og $x = 2$' },
              { label: 'c', task: 'Hva er den minste utverdien i tabellen?', solution: '$f(0) = 1$ er den minste utverdien.' },
              { label: 'd', task: 'Er denne funksjonen lineær? Begrunn.', solution: 'Nei, differansene er ikke konstante: $2-5 = -3$, $1-2 = -1$, $2-1 = 1$, $5-2 = 3$, $10-5 = 5$.' },
              { label: 'e', task: 'Hvilken type funksjon kan dette være? Prøv $f(x) = x^2 + 1$.', solution: '$f(0) = 1$ \\checkmark, $f(1) = 2$ \\checkmark, $f(2) = 5$ \\checkmark. Ja, $f(x) = x^2 + 1$ passer.' },
              { label: 'f', task: 'Regn ut $f(4)$ med uttrykket fra e).', solution: '$f(4) = 4^2 + 1 = 17$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Sjekk differansene mellom påfølgende verdier. Konstante differanser betyr lineær funksjon.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '8-10-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Tegn grafen til $f(x) = -x + 4$ i et koordinatsystem.',
            subTasks: [
              { label: 'a', task: 'Regn ut $f(0)$ og $f(4)$.', solution: '$f(0) = 4$ og $f(4) = 0$' },
              { label: 'b', task: 'Hva er konstantleddet (der grafen krysser $y$-aksen)?', solution: 'Konstantleddet er $b = 4$, altså punktet $(0, 4)$.' },
              { label: 'c', task: 'Hva er nullpunktet (der grafen krysser $x$-aksen)?', solution: '$-x + 4 = 0 \\Rightarrow x = 4$. Nullpunktet er $(4, 0)$.' },
              { label: 'd', task: 'Hva er stigningstallet?', solution: 'Stigningstallet er $a = -1$. Grafen synker med 1 for hver gang $x$ øker med 1.' },
              { label: 'e', task: 'Tegn grafen ved å markere punktene $(0, 4)$ og $(4, 0)$ og trekk en rett linje.', solution: 'En rett linje gjennom $(0, 4)$ og $(4, 0)$ som synker fra venstre mot høyre.' },
              { label: 'f', task: 'For hvilke $x$-verdier er $f(x) > 0$?', solution: '$f(x) > 0$ når $x < 4$.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Bruk to punkter for å tegne en rett linje. Konstantleddet finner du ved å sette $x = 0$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '8-10-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Finn stigningstall og konstantledd fra verditabeller.',
            subTasks: [
              { label: 'a', task: 'En lineær funksjon har $f(0) = 3$ og $f(2) = 9$. Finn stigningstallet $a$.', solution: '$a = \\frac{9 - 3}{2 - 0} = \\frac{6}{2} = 3$' },
              { label: 'b', task: 'Skriv funksjonsuttrykket fra a).', solution: '$f(x) = 3x + 3$' },
              { label: 'c', task: 'En lineær funksjon har $f(1) = 5$ og $f(4) = -1$. Finn $a$ og $b$.', solution: '$a = \\frac{-1 - 5}{4 - 1} = \\frac{-6}{3} = -2$. $5 = -2 \\cdot 1 + b \\Rightarrow b = 7$. $f(x) = -2x + 7$.' },
              { label: 'd', task: 'Finn nullpunktet til funksjonen i c).', solution: '$-2x + 7 = 0 \\Rightarrow x = 3{,}5$. Nullpunktet er $(3{,}5, \\; 0)$.' },
              { label: 'e', task: 'To lineære funksjoner: $f(x) = 2x - 1$ og $g(x) = -x + 5$. Finn skjæringspunktet.', solution: '$2x - 1 = -x + 5 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. $f(2) = 3$. Skjæringspunkt: $(2, 3)$.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Stigningstallet $a = \\frac{\\Delta y}{\\Delta x} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$. Konstantleddet $b = f(0)$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '8-10-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Lag verditabell og beskriv grafen til $g(x) = x^2 - 4$.',
            subTasks: [
              { label: 'a', task: 'Lag verditabell for $x = -3, -2, -1, 0, 1, 2, 3$.', solution: '$g(-3) = 5$, $g(-2) = 0$, $g(-1) = -3$, $g(0) = -4$, $g(1) = -3$, $g(2) = 0$, $g(3) = 5$' },
              { label: 'b', task: 'Hva er nullpunktene?', solution: '$x^2 - 4 = 0 \\Rightarrow x = -2$ og $x = 2$. Nullpunktene er $(-2, 0)$ og $(2, 0)$.' },
              { label: 'c', task: 'Hva er bunnpunktet til grafen?', solution: 'Bunnpunktet er $(0, -4)$.' },
              { label: 'd', task: 'Beskriv grafens form.', solution: 'Grafen er en parabel (U-form) med bunnpunkt i $(0, -4)$ som åpner oppover.' },
              { label: 'e', task: 'For hvilke $x$-verdier er $g(x) < 0$?', solution: '$g(x) < 0$ for $-2 < x < 2$.' },
              { label: 'f', task: 'Tegn grafen i et koordinatsystem.', solution: 'En U-formet parabel gjennom $(-3, 5)$, $(-2, 0)$, $(-1, -3)$, $(0, -4)$, $(1, -3)$, $(2, 0)$, $(3, 5)$.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Grafen til $x^2 - 4$ er en parabel. Nullpunktene finner du ved å sette $g(x) = 0$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '8-10-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver med grafer og verditabeller.',
            subTasks: [
              { label: 'a', task: 'En ball kastes rett opp. Høyden er gitt ved $h(t) = 15t - 5t^2$ (meter). Lag verditabell for $t = 0, 0{,}5, 1, 1{,}5, 2, 2{,}5, 3$.', solution: '$h(0) = 0$, $h(0{,}5) = 6{,}25$, $h(1) = 10$, $h(1{,}5) = 11{,}25$, $h(2) = 10$, $h(2{,}5) = 6{,}25$, $h(3) = 0$' },
              { label: 'b', task: 'Hva er ballens maksimale høyde, og når oppnås den?', solution: 'Maks høyde er $11{,}25$ m etter $t = 1{,}5$ s.' },
              { label: 'c', task: 'Når lander ballen?', solution: '$15t - 5t^2 = 0 \\Rightarrow 5t(3 - t) = 0 \\Rightarrow t = 0$ eller $t = 3$. Ballen lander etter 3 s.' },
              { label: 'd', task: 'Forklar hvorfor grafen er symmetrisk rundt $t = 1{,}5$.', solution: 'Fordi $h(t) = -5(t - 1{,}5)^2 + 11{,}25$. Parabelen har toppunkt i $t = 1{,}5$ og er symmetrisk rundt denne verdien.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Sett inn verdiene for $t$ i formelen. Toppunktet ligger midt mellom nullpunktene.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Verditabell', definition: 'En tabell som viser sammenhengen mellom innverdier (x) og utverdier (f(x))' },
    { term: 'Koordinatsystem', definition: 'Et system med to talllinjer (x-akse og y-akse) som krysser hverandre i origo' },
    { term: 'Punkt', definition: 'En posisjon i koordinatsystemet angitt som (x, y)' },
    { term: 'Graf', definition: 'Kurven vi får når vi plotter alle punktene (x, f(x)) i et koordinatsystem' },
    { term: 'Nullpunkt', definition: 'Punktet der grafen krysser x-aksen, altså der f(x) = 0' },
    { term: 'Stigningstall', definition: 'Tallet som forteller hvor mye y øker når x øker med 1' },
    { term: 'Konstantledd', definition: 'Verdien av f(0), der grafen krysser y-aksen' },
  ],
  prevChapter: '8-10-1',
  nextChapter: '8-10-3',
};

// ============================================================================
// Kapittel 10.3: Representere funksjoner på ulike måter
// ============================================================================

export const CHAPTER_8_10_3: TextbookChapter = {
  id: '8-10-3',
  courseId: '8',
  chapterNumber: '10.3',
  title: 'Representere funksjoner på ulike måter',
  description: 'Lær å veksle mellom fire representasjoner av funksjoner: tekst, tabell, graf og formel, og forstå fordeler og ulemper med hver.',
  estimatedMinutes: 50,
  competenceGoals: [
    'representere funksjonar på ulike måtar og veksle mellom representasjonane',
  ],
  content: [
    // INTRO
    {
      id: '8-10-3-intro',
      type: 'text',
      content: `## Representere funksjoner på ulike måter

Du har nå lært hva en funksjon er, hvordan du lager verditabeller og hvordan du tegner grafer. Men visste du at det finnes **fire ulike måter** å beskrive en funksjon på?

Disse fire representasjonene er:

1. **Tekst** — en beskrivelse med ord
2. **Tabell** — en verditabell med innverdier og utverdier
3. **Graf** — en kurve i et koordinatsystem
4. **Formel** — et matematisk uttrykk som $f(x) = 2x + 3$

Det viktige er at alle fire beskriver **den samme sammenhengen**, bare på forskjellige måter. I dette kapittelet skal du lære å **veksle** mellom de fire representasjonene og forstå når hver av dem er mest nyttig.`,
    },

    // BLOKK 1: De fire representasjonene
    {
      id: '8-10-3-def-1',
      type: 'definition',
      title: 'Fire representasjoner av en funksjon',
      content: `En funksjon kan beskrives på fire måter:

**1. Tekst (verbal beskrivelse):**
«Totalprisen er 50 kr pluss 15 kr per kilometer.»

**2. Tabell (verditabell):**

| Kilometer ($x$) | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|-----------------|-----|-----|-----|-----|-----|-----|
| Pris i kr ($f(x)$) | $50$ | $65$ | $80$ | $95$ | $110$ | $125$ |

**3. Graf:**
En rett linje i et koordinatsystem som starter i $(0, 50)$ og stiger med 15 per steg.

**4. Formel:**
$$f(x) = 15x + 50$$

Alle fire beskriver **nøyaktig den samme funksjonen** — sammenhengen mellom antall kilometer og pris.`,
    },
    {
      id: '8-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Fra tekst til de tre andre representasjonene',
      problem: `«En person sparer 200 kr i måneden og har 500 kr fra før.»

Vis denne sammenhengen som:
a) Formel
b) Tabell (for 0 til 6 måneder)
c) Graf`,
      solution: `**Løsning:**

**a) Formel:**
La $x$ være antall måneder og $S(x)$ være sparesaldoen.

$$S(x) = 200x + 500$$

**b) Tabell:**

| Måneder ($x$) | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|---------------|-----|-----|-----|-----|-----|-----|-----|
| Saldo ($S(x)$) | $500$ | $700$ | $900$ | $1100$ | $1300$ | $1500$ | $1700$ |

**c) Graf:**
Grafen er en rett linje som starter i punktet $(0, 500)$ og stiger med 200 for hver måned. Punktene $(0, 500)$, $(1, 700)$, $(2, 900)$, ..., $(6, 1700)$ ligger alle på denne linjen.

Merk at alle tre representasjonene viser det samme: startbeløpet er 500 kr og saldoen øker med 200 kr per måned.`,
    },

    // BLOKK 2: Fra tabell til formel
    {
      id: '8-10-3-text-tabell-til-formel',
      type: 'text',
      title: 'Fra tabell til formel',
      content: `## Fra tabell til formel

Noen ganger har vi bare en verditabell og vil finne funksjonsuttrykket. For **lineære funksjoner** ($f(x) = ax + b$) kan vi gjøre det slik:

**Steg 1:** Finn **stigningstallet** $a$ — det er den konstante endringen i $f(x)$ når $x$ øker med 1.

$$a = \\frac{\\text{endring i } f(x)}{\\text{endring i } x}$$

**Steg 2:** Finn **konstantleddet** $b$ — det er $f(0)$, altså verdien der $x = 0$.

**Steg 3:** Skriv opp $f(x) = ax + b$.

**Sjekk:** Sett inn noen $x$-verdier fra tabellen og kontroller at du får riktig $f(x)$.`,
    },
    {
      id: '8-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne funksjonsuttrykk fra tabell',
      problem: `Finn funksjonsuttrykket fra denne verditabellen:

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|-----|-----|-----|-----|-----|-----|
| $f(x)$ | $4$ | $7$ | $10$ | $13$ | $16$ |`,
      solution: `**Løsning:**

**Steg 1: Finn stigningstallet $a$**
Vi ser på endringene i $f(x)$:
- Fra $x = 0$ til $x = 1$: $f(x)$ øker fra 4 til 7, altså endring = 3
- Fra $x = 1$ til $x = 2$: $f(x)$ øker fra 7 til 10, altså endring = 3
- Endringen er konstant lik 3, så $a = 3$

**Steg 2: Finn konstantleddet $b$**
$b = f(0) = 4$

**Steg 3: Skriv opp formelen**
$$f(x) = 3x + 4$$

**Sjekk:**
- $f(2) = 3 \\cdot 2 + 4 = 10$ \\checkmark
- $f(4) = 3 \\cdot 4 + 4 = 16$ \\checkmark`,
    },

    // BLOKK 3: Fra graf til formel
    {
      id: '8-10-3-text-graf-til-formel',
      type: 'text',
      title: 'Fra graf til formel',
      content: `## Fra graf til formel

For å finne funksjonsuttrykket fra en graf, leser vi av to ting:

**1. Konstantleddet** $b$: Les av der grafen krysser $y$-aksen (punktet $(0, b)$).

**2. Stigningstallet** $a$: Velg to punkter på grafen og beregn:

$$a = \\frac{y_2 - y_1}{x_2 - x_1}$$

Stigningstallet forteller oss:
- **Positiv** $a$: Grafen stiger (går oppover mot høyre)
- **Negativ** $a$: Grafen synker (går nedover mot høyre)
- **Stor** $|a|$: Grafen er bratt
- **Liten** $|a|$: Grafen er slak

Med $a$ og $b$ kan vi skrive opp $f(x) = ax + b$.`,
    },
    {
      id: '8-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Finne funksjonsuttrykk fra graf',
      problem: `En rett linje i et koordinatsystem går gjennom punktene $(1, 5)$ og $(3, 11)$. Finn funksjonsuttrykket.`,
      solution: `**Løsning:**

**Steg 1: Finn stigningstallet**
$$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{11 - 5}{3 - 1} = \\frac{6}{2} = 3$$

**Steg 2: Finn konstantleddet**
Vi bruker ett av punktene og setter inn i $f(x) = 3x + b$:

$$5 = 3 \\cdot 1 + b$$
$$5 = 3 + b$$
$$b = 2$$

**Steg 3: Skriv opp formelen**
$$f(x) = 3x + 2$$

**Sjekk med det andre punktet:**
$f(3) = 3 \\cdot 3 + 2 = 11$ \\checkmark`,
    },

    // BLOKK 4: Fordeler og ulemper
    {
      id: '8-10-3-def-2',
      type: 'definition',
      title: 'Fordeler og ulemper med hver representasjon',
      content: `Hver representasjon har sine styrker:

**Tekst:**
- \\(+\\) Lett å forstå for alle
- \\(+\\) God for å beskrive konteksten
- \\(-\\) Upresist — vanskelig å lese av nøyaktige verdier
- \\(-\\) Kan være tvetydig

**Tabell:**
- \\(+\\) Viser nøyaktige verdier
- \\(+\\) Lett å sammenligne verdier
- \\(-\\) Viser bare noen utvalgte verdier
- \\(-\\) Vanskelig å se helheten/trenden

**Graf:**
- \\(+\\) Gir et godt visuelt overblikk
- \\(+\\) Lett å se trender, topp- og bunnpunkter
- \\(-\\) Upresis avlesning av verdier
- \\(-\\) Begrenset av størrelsen på koordinatsystemet

**Formel:**
- \\(+\\) Kompakt og presis
- \\(+\\) Kan brukes til å beregne alle verdier
- \\(-\\) Krever matematisk forståelse
- \\(-\\) Vanskelig å se helheten uten å tegne graf`,
    },
    {
      id: '8-10-3-note-1',
      type: 'note',
      title: 'Når bruker vi hvilken representasjon?',
      content: `Velg representasjon ut fra hva du trenger:

- **Forklare for noen som ikke kan matte?** → Bruk **tekst**
- **Sammenligne noen bestemte verdier?** → Bruk **tabell**
- **Få oversikt over hele sammenhengen?** → Bruk **graf**
- **Beregne nøyaktige verdier eller løse likninger?** → Bruk **formel**

Ofte er det best å bruke **flere representasjoner** sammen. For eksempel kan en rapport inneholde en tekstforklaring, en tabell med nøkkeltall og en graf som viser trenden.`,
    },

    // BLOKK 5: Veksle mellom representasjonene
    {
      id: '8-10-3-text-veksle',
      type: 'text',
      title: 'Veksle mellom representasjonene',
      content: `## Veksle mellom representasjonene

En viktig ferdighet i matematikk er å kunne **veksle** mellom de fire representasjonene. Her er en oversikt:

**Tekst → Formel:** Oversett ordene til matematiske symboler.
- «Doble og legg til 5» → $f(x) = 2x + 5$

**Formel → Tabell:** Sett inn $x$-verdier og regn ut $f(x)$.
- $f(x) = 2x + 5$ med $x = 0, 1, 2$ → Tabell med $5, 7, 9$

**Tabell → Graf:** Plott punktene og trekk kurve.
- $(0, 5), (1, 7), (2, 9)$ → Rett linje

**Graf → Formel:** Les av stigningstall og konstantledd.
- Linje gjennom $(0, 5)$ med stigning 2 → $f(x) = 2x + 5$

**Formel → Tekst:** Beskriv med ord hva formelen betyr.
- $f(x) = 2x + 5$ → «Vi dobler tallet og legger til 5»`,
    },
    {
      id: '8-10-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Veksle mellom alle fire',
      problem: `En elektriker tar 300 kr i utkjøring pluss 450 kr per time. Vis sammenhengen mellom antall timer og totalpris på alle fire måter.`,
      solution: `**Løsning:**

**1. Tekst:**
Totalprisen er 300 kr i utkjøring pluss 450 kr for hver time arbeid.

**2. Formel:**
La $t$ være antall timer og $P(t)$ totalprisen:
$$P(t) = 450t + 300$$

**3. Tabell:**

| Timer ($t$) | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|------------|-----|-----|------|------|------|------|
| Pris ($P(t)$) | $300$ | $750$ | $1200$ | $1650$ | $2100$ | $2550$ |

**4. Graf:**
En rett linje som starter i $(0, 300)$ og stiger med 450 per time.

Merk at utkjøringsprisen (300 kr) er konstantleddet, og timeprisen (450 kr) er stigningstallet.`,
    },

    // OPPGAVER
    {
      id: '8-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '8-10-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Oversett disse tekstbeskrivelsene til funksjonsuttrykk.`,
        subTasks: [
          { label: 'a', task: '«Tredoble tallet og trekk fra 7.»', solution: '$f(x) = 3x - 7$' },
          { label: 'b', task: '«Halvere tallet og legg til 10.»', solution: '$f(x) = \\frac{x}{2} + 10$ eller $f(x) = 0{,}5x + 10$' },
          { label: 'c', task: '«Kvadrere tallet.»', solution: '$f(x) = x^2$' },
          { label: 'd', task: '«Prisen er 20 kr per enhet pluss 50 kr i frakt.»', solution: '$P(x) = 20x + 50$' },
        ],
        solution: 'a) $f(x) = 3x - 7$, b) $f(x) = 0{,}5x + 10$, c) $f(x) = x^2$, d) $P(x) = 20x + 50$',
        hints: ['Oversett hvert steg i teksten til en matematisk operasjon.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '8-10-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Oversett disse formlene til tekst.`,
        subTasks: [
          { label: 'a', task: '$f(x) = 5x + 2$', solution: '«Gang tallet med 5 og legg til 2.»' },
          { label: 'b', task: '$g(x) = x - 8$', solution: '«Trekk 8 fra tallet.»' },
          { label: 'c', task: '$K(n) = 30n + 100$', solution: '«Kostnaden er 100 kr pluss 30 kr per enhet.» (eller lignende)' },
        ],
        solution: 'a) Gang med 5 og legg til 2. b) Trekk fra 8. c) 100 kr fast pluss 30 kr per enhet.',
        hints: ['Les formelen og beskriv hva som skjer med $x$ steg for steg.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '8-10-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: `Finn funksjonsuttrykket $f(x) = ax + b$ fra verditabellen:

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|-----|-----|-----|-----|-----|-----|
| $f(x)$ | $3$ | $5$ | $7$ | $9$ | $11$ |`,
        subTasks: [
          { label: 'a', task: 'Hva er stigningstallet $a$?', solution: '$a = 2$ fordi $f(x)$ øker med 2 for hver gang $x$ øker med 1.' },
          { label: 'b', task: 'Hva er konstantleddet $b$?', solution: '$b = f(0) = 3$' },
          { label: 'c', task: 'Skriv opp funksjonsuttrykket.', solution: '$f(x) = 2x + 3$' },
        ],
        solution: '$f(x) = 2x + 3$ med $a = 2$ og $b = 3$.',
        hints: ['Se på forskjellen mellom påfølgende $f(x)$-verdier — det er stigningstallet. $f(0)$ er konstantleddet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '8-10-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `En rett linje i et koordinatsystem går gjennom punktene $(2, 8)$ og $(5, 17)$.`,
        subTasks: [
          { label: 'a', task: 'Finn stigningstallet $a$.', solution: '$a = \\frac{17 - 8}{5 - 2} = \\frac{9}{3} = 3$' },
          { label: 'b', task: 'Finn konstantleddet $b$.', solution: '$8 = 3 \\cdot 2 + b \\Rightarrow b = 8 - 6 = 2$' },
          { label: 'c', task: 'Skriv opp funksjonsuttrykket.', solution: '$f(x) = 3x + 2$' },
          { label: 'd', task: 'Lag en verditabell for $x = 0$ til $x = 6$.', solution: `| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|-----|-----|-----|-----|-----|-----|-----|-----|
| $f(x)$ | $2$ | $5$ | $8$ | $11$ | $14$ | $17$ | $20$ |` },
          { label: 'e', task: 'Beskriv funksjonen med ord.', solution: '«Vi ganger tallet med 3 og legger til 2.» Eller: «Vi starter på 2 og øker med 3 for hvert steg.»' },
        ],
        solution: '$f(x) = 3x + 2$. Fra to punkter finner vi $a$ og $b$, og kan veksle til alle fire representasjoner.',
        hints: ['Stigningstallet er endring i $y$ delt på endring i $x$. Bruk ett punkt til å finne $b$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '8-10-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `«Et badekar inneholder 200 liter vann. Vannet renner ut med 10 liter per minutt.»

a) Skriv en funksjon $V(t)$ som gir vannmengden etter $t$ minutter.
b) Lag en verditabell for $t = 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20$.
c) Tegn grafen.
d) Etter hvor mange minutter er badekaret tomt?`,
        subTasks: [
          { label: 'a', task: 'Skriv funksjonsuttrykket.', solution: '$V(t) = 200 - 10t$ (eller $V(t) = -10t + 200$)' },
          { label: 'b', task: 'Lag verditabellen.', solution: `| $t$ | $0$ | $2$ | $4$ | $6$ | $8$ | $10$ | $12$ | $14$ | $16$ | $18$ | $20$ |
|-----|------|------|------|------|------|------|------|------|------|------|------|
| $V(t)$ | $200$ | $180$ | $160$ | $140$ | $120$ | $100$ | $80$ | $60$ | $40$ | $20$ | $0$ |` },
          { label: 'c', task: 'Tegn grafen.', solution: 'En rett linje som synker fra $(0, 200)$ til $(20, 0)$.' },
          { label: 'd', task: 'Når er badekaret tomt?', solution: '$200 - 10t = 0 \\Rightarrow t = 20$ minutter.' },
        ],
        solution: '$V(t) = 200 - 10t$. Badekaret er tomt etter 20 minutter. Stigningstallet $-10$ betyr at vannmengden minker med 10 liter per minutt.',
        hints: ['Vannet minker, så stigningstallet er negativt. Startverdien er 200 liter.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '8-10-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `To mobilabonnementer har disse prisene:

**Abonnement A:** 99 kr per måned + 1 kr per minutt
**Abonnement B:** 199 kr per måned + 0,50 kr per minutt`,
        subTasks: [
          { label: 'a', task: 'Skriv funksjonsuttrykk for begge.', solution: '$A(m) = m + 99$ og $B(m) = 0{,}5m + 199$ der $m$ er antall minutter.' },
          { label: 'b', task: 'Lag verditabell for begge med $m = 0, 50, 100, 150, 200, 250, 300$.', solution: `A: 99, 149, 199, 249, 299, 349, 399
B: 199, 224, 249, 274, 299, 324, 349` },
          { label: 'c', task: 'Tegn begge grafene i samme koordinatsystem.', solution: 'To rette linjer. A starter lavt men stiger bratt. B starter høyt men stiger saktere.' },
          { label: 'd', task: 'Hvilket abonnement er billigst ved 100 minutter? Ved 300 minutter?', solution: 'Ved 100 min: A koster 199 kr, B koster 249 kr. A er billigst. Ved 300 min: A koster 399 kr, B koster 349 kr. B er billigst.' },
          { label: 'e', task: 'Ved nøyaktig hvor mange minutter koster de to like mye?', solution: '$m + 99 = 0{,}5m + 199 \\Rightarrow 0{,}5m = 100 \\Rightarrow m = 200$ minutter. Da koster begge 299 kr.' },
        ],
        solution: 'A er billigst under 200 min, B er billigst over 200 min. De koster like mye ved 200 min (299 kr).',
        hints: ['For del e), sett $A(m) = B(m)$ og løs likningen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '8-10-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Studer denne verditabellen:

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|-----|-----|-----|-----|-----|-----|-----|-----|
| $f(x)$ | $0$ | $3$ | $8$ | $15$ | $24$ | $35$ | $48$ |`,
        subTasks: [
          { label: 'a', task: 'Er dette en lineær funksjon? Begrunn.', solution: 'Nei. Differansene er $3, 5, 7, 9, 11, 13$ — de er ikke konstante.' },
          { label: 'b', task: 'Beregn differansene mellom påfølgende $f(x)$-verdier. Hva legger du merke til?', solution: 'Differansene er $3, 5, 7, 9, 11, 13$. De øker med 2 for hvert steg. Dette kalles andredifferanser, og de er konstante ($= 2$).' },
          { label: 'c', task: 'Finn et funksjonsuttrykk. Hint: Prøv noe med $x^2$.', solution: `Siden andredifferansene er konstante (= 2), er dette en kvadratisk funksjon. Vi prøver $f(x) = x^2 + ax$:
$f(1) = 1 + a = 3 \\Rightarrow a = 2$

Sjekk: $f(x) = x^2 + 2x$
$f(2) = 4 + 4 = 8$ \\checkmark
$f(3) = 9 + 6 = 15$ \\checkmark
$f(5) = 25 + 10 = 35$ \\checkmark` },
          { label: 'd', task: 'Tegn grafen.', solution: 'Grafen er en parabel som åpner seg oppover, med bunnpunkt i origo $(0, 0)$.' },
        ],
        solution: '$f(x) = x^2 + 2x$. Konstante andredifferanser (= 2) viser at dette er en kvadratisk funksjon.',
        hints: ['Når førstediferensene øker jevnt, er funksjonen kvadratisk. Prøv $f(x) = x^2 + bx + c$ og bruk kjente verdier til å finne $b$ og $c$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '8-10-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En sprettball slippes fra 2 meter. Etter hvert sprett når ballen 75 % av den forrige høyden.`,
        subTasks: [
          { label: 'a', task: 'Lag en tabell som viser høyden etter 0, 1, 2, 3, 4, 5 og 6 sprett.', solution: `| Sprett ($n$) | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ |
|-------------|------|------|------|------|------|------|------|
| Høyde (m) | $2$ | $1{,}5$ | $1{,}125$ | $0{,}844$ | $0{,}633$ | $0{,}474$ | $0{,}356$ |` },
          { label: 'b', task: 'Skriv en formel for høyden $h(n)$ etter $n$ sprett.', solution: '$h(n) = 2 \\cdot 0{,}75^n$' },
          { label: 'c', task: 'Tegn grafen. Hva skjer med høyden etter mange sprett?', solution: 'Grafen synker raskt i starten, men flater mer og mer ut. Høyden nærmer seg 0, men blir aldri nøyaktig 0.' },
          { label: 'd', task: 'Etter hvor mange sprett er høyden under 10 cm for første gang?', solution: `$2 \\cdot 0{,}75^n < 0{,}1$
$0{,}75^n < 0{,}05$

Vi prøver: $0{,}75^{10} \\approx 0{,}056$, $0{,}75^{11} \\approx 0{,}042$.

Etter 11 sprett er høyden under 10 cm for første gang.` },
          { label: 'e', task: 'Er dette en lineær eller eksponentiell funksjon? Begrunn.', solution: 'Dette er en eksponentiell funksjon fordi verdien ganges med en fast faktor (0,75) i hvert steg, i motsetning til lineære funksjoner der vi legger til et fast tall.' },
        ],
        solution: '$h(n) = 2 \\cdot 0{,}75^n$. Eksponentiell avtagning. Under 10 cm etter 11 sprett.',
        hints: ['75 % av forrige høyde betyr at vi ganger med $0{,}75$ for hvert sprett. Startverdi er 2 meter.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '8-10-3-ex-9',
      type: 'exercise',
      exercise: {
        id: '8-10-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `**Utforskingsoppgave:** Nora og Elias diskuterer hvem som løper raskest.

Nora løper 100 meter på 15 sekunder med jevn fart.
Elias starter sakte og øker farten. Avstanden hans etter $t$ sekunder er gitt av $d(t) = 0{,}5t^2$.`,
        subTasks: [
          { label: 'a', task: 'Skriv en funksjon for Noras avstand etter $t$ sekunder.', solution: '$N(t) = \\frac{100}{15} \\cdot t = \\frac{20}{3}t \\approx 6{,}67t$' },
          { label: 'b', task: 'Lag verditabell for begge for $t = 0, 2, 4, 6, 8, 10, 12, 14, 15$.', solution: `| $t$ | $0$ | $2$ | $4$ | $6$ | $8$ | $10$ | $12$ | $14$ | $15$ |
|-----|------|------|------|------|------|------|------|------|------|
| $N(t)$ | $0$ | $13{,}3$ | $26{,}7$ | $40$ | $53{,}3$ | $66{,}7$ | $80$ | $93{,}3$ | $100$ |
| $d(t)$ | $0$ | $2$ | $8$ | $18$ | $32$ | $50$ | $72$ | $98$ | $112{,}5$ |` },
          { label: 'c', task: 'Tegn begge grafene i samme koordinatsystem.', solution: 'Noras graf er en rett linje. Elias sin graf er en kurve (parabel) som starter under Noras linje men etter hvert krysser den.' },
          { label: 'd', task: 'Hvem leder etter 8 sekunder? Etter 14 sekunder?', solution: 'Etter 8 s: $N(8) = 53{,}3$ m og $d(8) = 32$ m. Nora leder. Etter 14 s: $N(14) = 93{,}3$ m og $d(14) = 98$ m. Elias leder.' },
          { label: 'e', task: 'Omtrent når tar Elias igjen Nora? (Når er $d(t) = N(t)$?)', solution: `$0{,}5t^2 = \\frac{20}{3}t$
$t^2 = \\frac{40}{3}t$
$t = \\frac{40}{3} \\approx 13{,}3$ sekunder

(Vi delte på $t$ fordi $t > 0$.) Elias tar igjen Nora etter ca. 13,3 sekunder.` },
        ],
        solution: 'Nora har jevn fart (lineær), Elias akselererer (kvadratisk). Elias tar igjen etter ca. 13,3 sekunder.',
        hints: ['Noras fart er $\\frac{100}{15}$ m/s. Bruk dette til å skrive opp $N(t)$. Sett $N(t) = d(t)$ for å finne krysningspunktet.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '8-10-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '8-10-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '8-10-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gå fra tekst til formel.',
            subTasks: [
              { label: 'a', task: '«Gang tallet med 5 og trekk fra 3.»', solution: '$f(x) = 5x - 3$' },
              { label: 'b', task: '«Legg til 7 og del på 2.»', solution: '$f(x) = \\frac{x + 7}{2}$' },
              { label: 'c', task: '«Kvadrer tallet og legg til 1.»', solution: '$f(x) = x^2 + 1$' },
              { label: 'd', task: '«Startbeløpet er 500 kr. Hver dag legges det til 50 kr.»', solution: '$f(d) = 50d + 500$' },
              { label: 'e', task: '«Prisen er 30 kr per km pluss 80 kr i startavgift.»', solution: '$P(k) = 30k + 80$' },
              { label: 'f', task: '«Populasjonen dobles hver time fra 100 individer.»', solution: '$P(t) = 100 \\cdot 2^t$' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Identifiser hva som skjer med $x$ steg for steg og skriv det som et uttrykk.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '8-10-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gå fra formel til tekst.',
            subTasks: [
              { label: 'a', task: '$f(x) = 3x + 2$', solution: 'Gang tallet med 3 og legg til 2.' },
              { label: 'b', task: '$g(x) = x^2 - 5$', solution: 'Kvadrer tallet og trekk fra 5.' },
              { label: 'c', task: '$h(x) = \\frac{x}{4} + 10$', solution: 'Del tallet på 4 og legg til 10.' },
              { label: 'd', task: '$K(t) = 200 + 50t$', solution: 'Start med 200. Legg til 50 for hver enhet (f.eks. time eller måned).' },
              { label: 'e', task: '$P(n) = 8n - 15$', solution: 'Gang antallet med 8 og trekk fra 15.' },
              { label: 'f', task: '$A(r) = \\pi r^2$', solution: 'Kvadrer radiusen og gang med $\\pi$. (Arealformelen for en sirkel.)' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Les formelen og beskriv hva som skjer med variabelen steg for steg.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '8-10-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Gå fra tabell til formel. Finn funksjonsuttrykket.',
            subTasks: [
              { label: 'a', task: '$x$: 0, 1, 2, 3 $\\;$ $f(x)$: 4, 7, 10, 13', solution: 'Stigningstall $a = 3$, konstantledd $b = 4$. $f(x) = 3x + 4$.' },
              { label: 'b', task: '$x$: 0, 1, 2, 3 $\\;$ $f(x)$: 10, 8, 6, 4', solution: 'Stigningstall $a = -2$, konstantledd $b = 10$. $f(x) = -2x + 10$.' },
              { label: 'c', task: '$x$: 0, 1, 2, 3 $\\;$ $f(x)$: 1, 3, 9, 27', solution: 'Vekstfaktor $3$, startverdi $1$. $f(x) = 3^x$. (Eksponentiell funksjon.)' },
              { label: 'd', task: '$x$: 0, 1, 2, 3 $\\;$ $f(x)$: 0, 1, 4, 9', solution: '$f(x) = x^2$. (Kvadratisk funksjon.)' },
              { label: 'e', task: 'Hvordan vet du om tabellen viser en lineær funksjon?', solution: 'Lineær funksjon: differansen mellom påfølgende $f(x)$-verdier er konstant.' },
              { label: 'f', task: 'Hvordan gjenkjenner du en eksponentiell funksjon i en tabell?', solution: 'Eksponentiell: forholdet (kvotienten) mellom påfølgende $f(x)$-verdier er konstant.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Se på differansene mellom påfølgende $f(x)$-verdier. Konstant differanse = lineær. Konstant forholdstall = eksponentiell.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '8-10-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Veksle mellom alle fire representasjoner for en praktisk situasjon.',
            subTasks: [
              { label: 'a', task: 'Et basseng fylles med 50 liter vann per minutt. Det er allerede 200 liter i bassenget. Skriv funksjonsuttrykket $V(t)$ for vannmengden etter $t$ minutter.', solution: '$V(t) = 50t + 200$' },
              { label: 'b', task: 'Lag verditabell for $t = 0, 2, 4, 6, 8, 10$.', solution: '$V(0) = 200$, $V(2) = 300$, $V(4) = 400$, $V(6) = 500$, $V(8) = 600$, $V(10) = 700$' },
              { label: 'c', task: 'Hva er stigningstallet, og hva betyr det?', solution: 'Stigningstallet er $50$. Det betyr at vannmengden øker med 50 liter per minutt.' },
              { label: 'd', task: 'Etter hvor mange minutter er det 1000 liter i bassenget?', solution: '$50t + 200 = 1000 \\Rightarrow 50t = 800 \\Rightarrow t = 16$ min.' },
              { label: 'e', task: 'Bassenget rommer 2000 liter. Når er det fullt?', solution: '$50t + 200 = 2000 \\Rightarrow t = 36$ min.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Stigningstallet forteller hvor mye verdien endrer seg per tidsenhet. Konstantleddet er startverdien.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '8-10-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sammenlign to mobilabonnementer.',
            subTasks: [
              { label: 'a', task: 'Abonnement A: 99 kr/mnd + 1,50 kr/min. Skriv opp $A(m)$ for kostnaden ved $m$ minutter ringetid.', solution: '$A(m) = 1{,}50m + 99$' },
              { label: 'b', task: 'Abonnement B: 249 kr/mnd, alt inkludert. Skriv opp $B(m)$.', solution: '$B(m) = 249$' },
              { label: 'c', task: 'Lag verditabell for begge med $m = 0, 50, 100, 150, 200$.', solution: '$A$: 99, 174, 249, 324, 399. $B$: 249, 249, 249, 249, 249.' },
              { label: 'd', task: 'Ved hvor mange minutter koster de like mye?', solution: '$1{,}50m + 99 = 249 \\Rightarrow 1{,}50m = 150 \\Rightarrow m = 100$ min.' },
              { label: 'e', task: 'Hvem bør velge abonnement A, og hvem bør velge B?', solution: 'A er billigst for under 100 min/mnd, B er billigst for over 100 min/mnd.' },
              { label: 'f', task: 'Tegn grafene til $A(m)$ og $B(m)$ i samme koordinatsystem og merk skjæringspunktet.', solution: '$A(m)$ er en stigende rett linje fra $(0, 99)$. $B(m)$ er en vannrett linje på $y = 249$. De krysser i $(100, 249)$.' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['Sett $A(m) = B(m)$ for å finne krysningspunktet.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '8-10-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '8-10-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Utfordringsoppgaver: Identifiser funksjonstype og veksle mellom representasjoner.',
            subTasks: [
              { label: 'a', task: 'En ball slippes fra 2 meter. Etter hvert sprett når den $60\\%$ av forrige høyde. Skriv opp funksjonen $h(n)$ for høyden etter $n$ sprett.', solution: '$h(n) = 2 \\cdot 0{,}6^n$' },
              { label: 'b', task: 'Lag verditabell for $n = 0, 1, 2, 3, 4, 5$ og beskriv mønsteret.', solution: '$h(0) = 2$, $h(1) = 1{,}2$, $h(2) = 0{,}72$, $h(3) = 0{,}432$, $h(4) = 0{,}259$, $h(5) = 0{,}156$. Høyden avtar eksponentielt.' },
              { label: 'c', task: 'Etter hvor mange sprett er høyden under $10 \\text{ cm} = 0{,}1 \\text{ m}$?', solution: '$2 \\cdot 0{,}6^n < 0{,}1 \\Rightarrow 0{,}6^n < 0{,}05$. Prøver: $0{,}6^5 \\approx 0{,}078$, $0{,}6^6 \\approx 0{,}047$. Etter 6 sprett.' },
              { label: 'd', task: 'Er denne funksjonen lineær, kvadratisk eller eksponentiell? Begrunn.', solution: 'Eksponentiell, fordi forholdet mellom påfølgende verdier er konstant ($0{,}6$).' },
            ],
            solution: 'Se deloppgavene over.',
            hideInlineSolution: true,
            hints: ['$60\\%$ av forrige betyr at vi ganger med $0{,}6$ for hvert sprett. Startverdi er 2 meter.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fire representasjoner', definition: 'Tekst, tabell, graf og formel — fire måter å beskrive en funksjon på' },
    { term: 'Veksle', definition: 'Å gå fra én representasjon til en annen (f.eks. fra tabell til formel)' },
    { term: 'Stigningstall', definition: 'Endring i f(x) per endring i x; tallverdien a i f(x) = ax + b' },
    { term: 'Konstantledd', definition: 'Verdien av f(0); tallverdien b i f(x) = ax + b' },
    { term: 'Lineær funksjon', definition: 'En funksjon med konstant stigningstall; graf er en rett linje' },
    { term: 'Kvadratisk funksjon', definition: 'En funksjon med x² som høyeste potens; graf er en parabel' },
    { term: 'Eksponentiell funksjon', definition: 'En funksjon der verdien ganges med en fast faktor i hvert steg' },
  ],
  prevChapter: '8-10-2',
};

// Eksporter alle kapitler i seksjon 10
export const MATEMATIKK_8_DEL11_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_10_1,
  CHAPTER_8_10_2,
  CHAPTER_8_10_3,
];
