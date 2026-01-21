/**
 * Tekstbok kapitler for 10
 * Autogenerert fra textbook-content.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_10_3_1: TextbookChapter = {
  id: '10-3-1',
  courseId: '10',
  chapterNumber: '3.1',
  title: 'Lineære funksjoner',
  description: 'Lær om lineære funksjoner, stigningstall, konstantledd og hvordan du finner skjæringspunkter mellom linjer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og beskrive funksjoner ved å bruke ulike representasjoner',
    'modellere situasjoner knyttet til dagligliv ved å bruke lineære funksjoner',
  ],
  content: [
    // Innledning
    {
      id: '10-3-1-intro',
      type: 'text',
      content: `## Innledning

En **lineær funksjon** er en funksjon der grafen er en rett linje. Lineære funksjoner brukes til å modellere situasjoner der noe øker eller minker jevnt, for eksempel:
- Prisen på en taxi som øker med antall kilometer
- Temperaturen som synker jevnt utover natten
- Lønn som øker med antall timer du jobber

I dette kapittelet skal vi lære om stigningstall, konstantledd, og hvordan vi finner skjæringspunkter mellom linjer.`,
    },

    // Definisjon
    {
      id: '10-3-1-def-1',
      type: 'definition',
      title: 'Lineær funksjon',
      content: `En **lineær funksjon** har formen:

$$f(x) = ax + b$$

der:
- $a$ er **stigningstallet** (hvor mye $y$ øker når $x$ øker med 1)
- $b$ er **konstantleddet** (der grafen krysser $y$-aksen)`,
    },
    {
      id: '10-3-1-funksjoner-bilde',
      type: 'image',
      src: '/images/10-klasse/funksjoner-typer.svg',
      alt: 'Oversikt over ulike typer funksjoner med grafer',
      caption: 'Ulike typer funksjoner: lineaer, andregradsfunksjon og eksponentiell',
    },

    // Stigningstall
    {
      id: '10-3-1-stigning',
      type: 'text',
      content: `## Stigningstall

Stigningstallet $a$ forteller oss hvor bratt linjen er:
- Hvis $a > 0$: Linjen stiger (går oppover mot høyre)
- Hvis $a < 0$: Linjen synker (går nedover mot høyre)
- Hvis $a = 0$: Linjen er horisontal

**Beregne stigningstall mellom to punkter:**

Hvis vi har to punkter $(x_1, y_1)$ og $(x_2, y_2)$, kan vi beregne stigningstallet:

$$a = \\frac{y_2 - y_1}{x_2 - x_1}$$`,
    },

    // Eksempel 1
    {
      id: '10-3-1-ex-1',
      type: 'example',
      title: 'Eksempel 1: Finn stigningstall og konstantledd',
      problem: `Finn stigningstall og konstantledd for funksjonene:

a) $f(x) = 3x + 5$
b) $g(x) = -2x + 7$
c) $h(x) = 4x$
d) $k(x) = -3$`,
      solution: `**Løsning:**

a) $f(x) = 3x + 5$
   - Stigningstall $a = 3$
   - Konstantledd $b = 5$

b) $g(x) = -2x + 7$
   - Stigningstall $a = -2$
   - Konstantledd $b = 7$

c) $h(x) = 4x$
   - Stigningstall $a = 4$
   - Konstantledd $b = 0$ (linjen går gjennom origo)

d) $k(x) = -3$
   - Stigningstall $a = 0$ (horisontal linje)
   - Konstantledd $b = -3$`,
    },

    // Oppgave 1
    {
      id: '10-3-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn stigningstall og konstantledd for hver funksjon.',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x + 3$', solution: 'Stigningstall $a = 2$, konstantledd $b = 3$', multipleChoiceOptions: ['$a = 2$, $b = 3$', '$a = 3$, $b = 2$', '$a = 2$, $b = -3$', '$a = -2$, $b = 3$'] },
          { label: 'b', task: '$g(x) = -4x + 1$', solution: 'Stigningstall $a = -4$, konstantledd $b = 1$', multipleChoiceOptions: ['$a = -4$, $b = 1$', '$a = 4$, $b = 1$', '$a = -4$, $b = -1$', '$a = 1$, $b = -4$'] },
          { label: 'c', task: '$h(x) = 5x - 2$', solution: 'Stigningstall $a = 5$, konstantledd $b = -2$', multipleChoiceOptions: ['$a = 5$, $b = -2$', '$a = -2$, $b = 5$', '$a = 5$, $b = 2$', '$a = -5$, $b = -2$'] },
          { label: 'd', task: '$k(x) = -x + 8$', solution: 'Stigningstall $a = -1$, konstantledd $b = 8$', multipleChoiceOptions: ['$a = -1$, $b = 8$', '$a = 1$, $b = 8$', '$a = 8$, $b = -1$', '$a = -1$, $b = -8$'] },
          { label: 'e', task: '$m(x) = 7$', solution: 'Stigningstall $a = 0$, konstantledd $b = 7$', multipleChoiceOptions: ['$a = 0$, $b = 7$', '$a = 7$, $b = 0$', '$a = 1$, $b = 7$', '$a = 7$, $b = 7$'] },
          { label: 'f', task: '$n(x) = -3x$', solution: 'Stigningstall $a = -3$, konstantledd $b = 0$', multipleChoiceOptions: ['$a = -3$, $b = 0$', '$a = 0$, $b = -3$', '$a = 3$, $b = 0$', '$a = -3$, $b = -3$'] },
        ],
        solution: 'a) a=2, b=3  b) a=-4, b=1  c) a=5, b=-2  d) a=-1, b=8  e) a=0, b=7  f) a=-3, b=0',
        hints: ['Sammenlign med formen $f(x) = ax + b$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Eksempel 2: Beregne stigningstall
    {
      id: '10-3-1-ex-2',
      type: 'example',
      title: 'Eksempel 2: Beregne stigningstall fra to punkter',
      problem: `Finn stigningstallet for linjen som går gjennom punktene:

a) $(2, 5)$ og $(4, 11)$
b) $(1, 8)$ og $(3, 2)$`,
      solution: `**Løsning:**

a) $(2, 5)$ og $(4, 11)$
   $$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{11 - 5}{4 - 2} = \\frac{6}{2} = 3$$

b) $(1, 8)$ og $(3, 2)$
   $$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{2 - 8}{3 - 1} = \\frac{-6}{2} = -3$$`,
    },

    // Oppgave 2
    {
      id: '10-3-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn stigningstallet for linjen som går gjennom punktene.',
        subTasks: [
          { label: 'a', task: '$(1, 3)$ og $(4, 9)$', solution: '$a = \\frac{9-3}{4-1} = \\frac{6}{3} = 2$', answer: 2 },
          { label: 'b', task: '$(2, 7)$ og $(5, 1)$', solution: '$a = \\frac{1-7}{5-2} = \\frac{-6}{3} = -2$', answer: -2 },
          { label: 'c', task: '$(0, 4)$ og $(3, 10)$', solution: '$a = \\frac{10-4}{3-0} = \\frac{6}{3} = 2$', answer: 2 },
          { label: 'd', task: '$(-1, 5)$ og $(2, -4)$', solution: '$a = \\frac{-4-5}{2-(-1)} = \\frac{-9}{3} = -3$', answer: -3 },
        ],
        solution: 'a) 2  b) -2  c) 2  d) -3',
        hints: ['Bruk formelen $a = \\frac{y_2 - y_1}{x_2 - x_1}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Finne funksjonsuttrykket
    {
      id: '10-3-1-finne-uttrykk',
      type: 'text',
      content: `## Finne funksjonsuttrykket

For å finne funksjonsuttrykket $f(x) = ax + b$ når vi kjenner to punkter:

1. Beregn stigningstallet $a$ fra de to punktene
2. Sett inn ett av punktene i $f(x) = ax + b$ for å finne $b$`,
    },

    // Eksempel 3
    {
      id: '10-3-1-ex-3',
      type: 'example',
      title: 'Eksempel 3: Finne funksjonsuttrykket',
      problem: `Finn funksjonsuttrykket for linjen som går gjennom punktene $(1, 5)$ og $(3, 11)$.`,
      solution: `**Løsning:**

**Steg 1:** Finn stigningstallet
$$a = \\frac{11 - 5}{3 - 1} = \\frac{6}{2} = 3$$

**Steg 2:** Sett inn punktet $(1, 5)$ i $f(x) = 3x + b$
$$5 = 3 \\cdot 1 + b$$
$$5 = 3 + b$$
$$b = 2$$

**Svar:** $f(x) = 3x + 2$`,
    },

    // Oppgave 3
    {
      id: '10-3-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn funksjonsuttrykket for linjen som går gjennom punktene.',
        subTasks: [
          { label: 'a', task: '$(2, 7)$ og $(4, 13)$', solution: '$a = 3$, $b = 1$. Svar: $f(x) = 3x + 1$', multipleChoiceOptions: ['$f(x) = 3x + 1$', '$f(x) = 3x - 1$', '$f(x) = x + 3$', '$f(x) = -3x + 1$'] },
          { label: 'b', task: '$(1, 10)$ og $(3, 4)$', solution: '$a = -3$, $b = 13$. Svar: $f(x) = -3x + 13$', multipleChoiceOptions: ['$f(x) = -3x + 13$', '$f(x) = 3x + 13$', '$f(x) = -3x - 13$', '$f(x) = 13x - 3$'] },
          { label: 'c', task: '$(0, -2)$ og $(5, 8)$', solution: '$a = 2$, $b = -2$. Svar: $f(x) = 2x - 2$', multipleChoiceOptions: ['$f(x) = 2x - 2$', '$f(x) = 2x + 2$', '$f(x) = -2x - 2$', '$f(x) = x - 2$'] },
          { label: 'd', task: '$(-2, 1)$ og $(4, 7)$', solution: '$a = 1$, $b = 3$. Svar: $f(x) = x + 3$', multipleChoiceOptions: ['$f(x) = x + 3$', '$f(x) = x - 3$', '$f(x) = 3x + 1$', '$f(x) = -x + 3$'] },
        ],
        solution: 'a) f(x) = 3x + 1  b) f(x) = -3x + 13  c) f(x) = 2x - 2  d) f(x) = x + 3',
        hints: ['Finn først stigningstallet, så konstantleddet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Nullpunkt
    {
      id: '10-3-1-nullpunkt',
      type: 'text',
      content: `## Nullpunkt

**Nullpunktet** er der grafen krysser $x$-aksen, altså der $f(x) = 0$.

For å finne nullpunktet løser vi likningen:
$$ax + b = 0$$
$$x = -\\frac{b}{a}$$`,
    },

    // Eksempel 4
    {
      id: '10-3-1-ex-4',
      type: 'example',
      title: 'Eksempel 4: Finne nullpunkt',
      problem: `Finn nullpunktet for funksjonene:

a) $f(x) = 2x + 6$
b) $g(x) = -3x + 9$`,
      solution: `**Løsning:**

a) $f(x) = 2x + 6$
   $$2x + 6 = 0$$
   $$2x = -6$$
   $$x = -3$$
   Nullpunkt: $(-3, 0)$

b) $g(x) = -3x + 9$
   $$-3x + 9 = 0$$
   $$-3x = -9$$
   $$x = 3$$
   Nullpunkt: $(3, 0)$`,
    },

    // Oppgave 4
    {
      id: '10-3-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn nullpunktet for funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = 4x + 8$', solution: '$4x + 8 = 0 \\Rightarrow x = -2$. Nullpunkt: $(-2, 0)$', answer: -2 },
          { label: 'b', task: '$g(x) = -2x + 10$', solution: '$-2x + 10 = 0 \\Rightarrow x = 5$. Nullpunkt: $(5, 0)$', answer: 5 },
          { label: 'c', task: '$h(x) = 5x - 15$', solution: '$5x - 15 = 0 \\Rightarrow x = 3$. Nullpunkt: $(3, 0)$', answer: 3 },
          { label: 'd', task: '$k(x) = -x + 7$', solution: '$-x + 7 = 0 \\Rightarrow x = 7$. Nullpunkt: $(7, 0)$', answer: 7 },
        ],
        solution: 'a) x = -2  b) x = 5  c) x = 3  d) x = 7',
        hints: ['Sett $f(x) = 0$ og løs likningen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Skjæringspunkt mellom linjer
    {
      id: '10-3-1-skjaering',
      type: 'text',
      content: `## Skjæringspunkt mellom linjer

For å finne skjæringspunktet mellom to linjer $f(x) = a_1x + b_1$ og $g(x) = a_2x + b_2$:

1. Sett $f(x) = g(x)$
2. Løs likningen for å finne $x$
3. Sett $x$-verdien inn i en av funksjonene for å finne $y$`,
    },

    // Eksempel 5
    {
      id: '10-3-1-ex-5',
      type: 'example',
      title: 'Eksempel 5: Skjæringspunkt mellom linjer',
      problem: `Finn skjæringspunktet mellom $f(x) = 2x + 1$ og $g(x) = -x + 10$.`,
      solution: `**Løsning:**

**Steg 1:** Sett $f(x) = g(x)$
$$2x + 1 = -x + 10$$

**Steg 2:** Løs likningen
$$2x + x = 10 - 1$$
$$3x = 9$$
$$x = 3$$

**Steg 3:** Finn $y$-verdi
$$f(3) = 2 \\cdot 3 + 1 = 7$$

**Svar:** Skjæringspunktet er $(3, 7)$`,
    },

    // Oppgave 5
    {
      id: '10-3-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn skjæringspunktet mellom linjene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x + 2$ og $g(x) = 3x - 4$', solution: '$x + 2 = 3x - 4 \\Rightarrow x = 3$, $y = 5$. Skjæringspunkt: $(3, 5)$', multipleChoiceOptions: ['$(3, 5)$', '$(5, 3)$', '$(2, 4)$', '$(4, 6)$'] },
          { label: 'b', task: '$f(x) = 2x + 5$ og $g(x) = -x + 11$', solution: '$2x + 5 = -x + 11 \\Rightarrow x = 2$, $y = 9$. Skjæringspunkt: $(2, 9)$', multipleChoiceOptions: ['$(2, 9)$', '$(9, 2)$', '$(3, 8)$', '$(1, 10)$'] },
          { label: 'c', task: '$f(x) = -3x + 12$ og $g(x) = x$', solution: '$-3x + 12 = x \\Rightarrow x = 3$, $y = 3$. Skjæringspunkt: $(3, 3)$', multipleChoiceOptions: ['$(3, 3)$', '$(4, 4)$', '$(2, 6)$', '$(6, 2)$'] },
        ],
        solution: 'a) (3, 5)  b) (2, 9)  c) (3, 3)',
        hints: ['Sett funksjonene lik hverandre og løs for x'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6: Tegne grafer
    {
      id: '10-3-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-6',
        number: '6',
        type: 'interactive',
        tool: 'geogebra-graph',
        difficulty: 'medium',
        task: 'Tegn grafene til funksjonene i GeoGebra og finn skjæringspunktene.',
        subTasks: [
          { label: 'a', task: 'Tegn $f(x) = 2x - 3$ og $g(x) = -x + 6$. Finn skjæringspunktet.', solution: 'Skjæringspunkt: $(3, 3)$' },
          { label: 'b', task: 'Tegn $f(x) = 0.5x + 1$ og $g(x) = -2x + 11$. Finn skjæringspunktet.', solution: 'Skjæringspunkt: $(4, 3)$' },
        ],
        solution: 'a) (3, 3)  b) (4, 3)',
        hints: ['Skriv inn funksjonene i GeoGebra-kommandolinjen'],
        initialCommands: ['f(x) = 2x - 3'],
        allowsUpload: true,
      },
    },

    // Praktisk anvendelse
    {
      id: '10-3-1-praktisk',
      type: 'text',
      content: `## Praktiske anvendelser

Lineære funksjoner brukes ofte til å modellere situasjoner i dagliglivet:
- **Taxi-pris:** Fast startpris + pris per kilometer
- **Mobilabonnement:** Fast månedspris + pris per minutt/SMS
- **Lønn:** Fast timelønn ganger antall timer`,
    },

    // Eksempel 6: Praktisk oppgave
    {
      id: '10-3-1-ex-6',
      type: 'example',
      title: 'Eksempel 6: Taxi-pris',
      problem: `En taxi koster 50 kr i oppstart og 15 kr per kilometer.

a) Sett opp en funksjon $P(x)$ for prisen der $x$ er antall kilometer.
b) Hva koster en tur på 8 km?
c) Hvor langt kan du kjøre for 200 kr?`,
      solution: `**Løsning:**

a) $P(x) = 15x + 50$

b) $P(8) = 15 \\cdot 8 + 50 = 120 + 50 = 170$ kr

c) $200 = 15x + 50$
   $15x = 150$
   $x = 10$ km`,
    },

    // Oppgave 7
    {
      id: '10-3-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En telefontjeneste koster 30 kr i måneden pluss 1,50 kr per SMS.',
        subTasks: [
          { label: 'a', task: 'Sett opp en funksjon $K(x)$ for månedskostnaden der $x$ er antall SMS.', solution: '$K(x) = 1{,}50x + 30$', multipleChoiceOptions: ['$K(x) = 1{,}50x + 30$', '$K(x) = 30x + 1{,}50$', '$K(x) = 1{,}50x - 30$', '$K(x) = 0{,}50x + 30$'] },
          { label: 'b', task: 'Hva blir månedskostnaden hvis du sender 80 SMS?', solution: '$K(80) = 1{,}50 \\cdot 80 + 30 = 120 + 30 = 150$ kr', answer: 150 },
          { label: 'c', task: 'Hvor mange SMS kan du sende hvis du har budsjett på 75 kr?', solution: '$75 = 1{,}50x + 30 \\Rightarrow x = 30$ SMS', answer: 30 },
        ],
        solution: 'a) K(x) = 1,50x + 30  b) 150 kr  c) 30 SMS',
        hints: ['Konstantleddet er den faste månedsprisen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: '10-3-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et vannbasseng inneholder 500 liter vann. Det tappes ut 20 liter per minutt.',
        subTasks: [
          { label: 'a', task: 'Sett opp en funksjon $V(t)$ for vannmengden etter $t$ minutter.', solution: '$V(t) = -20t + 500$', multipleChoiceOptions: ['$V(t) = -20t + 500$', '$V(t) = 20t + 500$', '$V(t) = -20t - 500$', '$V(t) = 500t - 20$'] },
          { label: 'b', task: 'Hvor mye vann er igjen etter 10 minutter?', solution: '$V(10) = -20 \\cdot 10 + 500 = 300$ liter', answer: 300 },
          { label: 'c', task: 'Når er bassenget tomt?', solution: '$0 = -20t + 500 \\Rightarrow t = 25$ minutter', answer: 25 },
        ],
        solution: 'a) V(t) = -20t + 500  b) 300 liter  c) 25 minutter',
        hints: ['Stigningstallet er negativt fordi vannmengden minker'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: '10-3-1-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To venner skal møtes. Anna starter hjemmefra klokken 12:00 og går mot byen med 5 km/t. Bjørn starter fra byen klokken 12:00 og går mot Anna med 4 km/t. Avstanden mellom dem er 18 km.',
        subTasks: [
          { label: 'a', task: 'Sett opp en funksjon $A(t)$ for Annas avstand fra hjemmet etter $t$ timer.', solution: '$A(t) = 5t$', multipleChoiceOptions: ['$A(t) = 5t$', '$A(t) = t + 5$', '$A(t) = 5t + 18$', '$A(t) = 18 - 5t$'] },
          { label: 'b', task: 'Sett opp en funksjon $B(t)$ for Bjørns avstand fra Annas hjem etter $t$ timer.', solution: '$B(t) = 18 - 4t$', multipleChoiceOptions: ['$B(t) = 18 - 4t$', '$B(t) = 4t$', '$B(t) = 4t + 18$', '$B(t) = 18 + 4t$'] },
          { label: 'c', task: 'Når møtes de, og hvor langt fra Annas hjem?', solution: '$5t = 18 - 4t \\Rightarrow 9t = 18 \\Rightarrow t = 2$ timer. Avstand: $A(2) = 10$ km fra Annas hjem.', multipleChoiceOptions: ['Etter 2 timer, 10 km fra Annas hjem', 'Etter 3 timer, 15 km fra Annas hjem', 'Etter 1 time, 5 km fra Annas hjem', 'Etter 2 timer, 8 km fra Annas hjem'] },
        ],
        solution: 'a) A(t) = 5t  b) B(t) = 18 - 4t  c) Etter 2 timer, 10 km fra Annas hjem',
        hints: ['De møtes når $A(t) = B(t)$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: '10-3-1-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To mobilabonnementer tilbys:',
        subTasks: [
          { label: 'a', task: 'Abonnement A koster 99 kr/mnd + 0,50 kr per SMS. Abonnement B koster 149 kr/mnd med gratis SMS. Sett opp funksjoner for begge.', solution: '$A(x) = 0{,}50x + 99$ og $B(x) = 149$', multipleChoiceOptions: ['$A(x) = 0{,}50x + 99$, $B(x) = 149$', '$A(x) = 99x + 0{,}50$, $B(x) = 149$', '$A(x) = 0{,}50x - 99$, $B(x) = 149x$', '$A(x) = 99 - 0{,}50x$, $B(x) = 149$'] },
          { label: 'b', task: 'Ved hvor mange SMS per måned er abonnementene like dyre?', solution: '$0{,}50x + 99 = 149 \\Rightarrow x = 100$ SMS', answer: 100 },
          { label: 'c', task: 'Hvilket abonnement lønner seg hvis du sender 150 SMS per måned?', solution: '$A(150) = 174$ kr, $B = 149$ kr. Abonnement B lønner seg.', multipleChoiceOptions: ['Abonnement B', 'Abonnement A', 'Begge er like dyre', 'Avhenger av måneden'] },
        ],
        solution: 'a) A(x) = 0,50x + 99, B(x) = 149  b) 100 SMS  c) Abonnement B',
        hints: ['Finn skjæringspunktet for å se når de er like dyre'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: '10-3-1-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Les av stigningstall og konstantledd fra grafene.',
        subTasks: [
          { label: 'a', task: 'En linje går gjennom $(0, 3)$ og $(2, 7)$', solution: 'Stigningstall: $a = \\frac{7-3}{2-0} = 2$, konstantledd: $b = 3$', multipleChoiceOptions: ['$a = 2$, $b = 3$', '$a = 3$, $b = 2$', '$a = 2$, $b = 7$', '$a = 4$, $b = 3$'] },
          { label: 'b', task: 'En linje går gjennom $(0, 5)$ og $(4, 1)$', solution: 'Stigningstall: $a = \\frac{1-5}{4-0} = -1$, konstantledd: $b = 5$', multipleChoiceOptions: ['$a = -1$, $b = 5$', '$a = 1$, $b = 5$', '$a = -1$, $b = 1$', '$a = 5$, $b = -1$'] },
          { label: 'c', task: 'En linje går gjennom $(0, -2)$ og $(3, 4)$', solution: 'Stigningstall: $a = \\frac{4-(-2)}{3-0} = 2$, konstantledd: $b = -2$', multipleChoiceOptions: ['$a = 2$, $b = -2$', '$a = -2$, $b = 2$', '$a = 2$, $b = 4$', '$a = 6$, $b = -2$'] },
        ],
        solution: 'a) a=2, b=3  b) a=-1, b=5  c) a=2, b=-2',
        hints: ['Konstantleddet er y-verdien der linjen krysser y-aksen (x=0)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: '10-3-1-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Temperaturutvikling',
        subTasks: [
          { label: 'a', task: 'Klokken 06:00 er temperaturen 8°C. Temperaturen stiger med 2°C per time. Sett opp en funksjon $T(t)$ der $t$ er antall timer etter kl. 06:00.', solution: '$T(t) = 2t + 8$', multipleChoiceOptions: ['$T(t) = 2t + 8$', '$T(t) = 8t + 2$', '$T(t) = 2t - 8$', '$T(t) = t + 8$'] },
          { label: 'b', task: 'Hva er temperaturen klokken 12:00?', solution: '$T(6) = 2 \\cdot 6 + 8 = 20$°C', answer: 20 },
          { label: 'c', task: 'Når er temperaturen 24°C?', solution: '$24 = 2t + 8 \\Rightarrow t = 8$, dvs. kl. 14:00', multipleChoiceOptions: ['Kl. 14:00', 'Kl. 12:00', 'Kl. 16:00', 'Kl. 13:00'] },
        ],
        solution: 'a) T(t) = 2t + 8  b) 20°C  c) Kl. 14:00',
        hints: ['t = 0 tilsvarer kl. 06:00'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: '10-3-1-exercise-13',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bedrift produserer varer. Produksjonskostnaden er gitt ved $K(x) = 50x + 2000$ kr, der $x$ er antall enheter. Salgsinntekten er $I(x) = 80x$ kr.',
        subTasks: [
          { label: 'a', task: 'Forklar hva tallene 50, 2000 og 80 betyr i denne sammenhengen.', solution: '50 kr er kostnad per enhet, 2000 kr er faste kostnader, 80 kr er salgspris per enhet', multipleChoiceOptions: ['50 = kostnad/enhet, 2000 = faste kostnader, 80 = salgspris/enhet', '50 = faste kostnader, 2000 = kostnad/enhet, 80 = salgspris/enhet', '50 = salgspris/enhet, 2000 = faste kostnader, 80 = kostnad/enhet', '50 = antall enheter, 2000 = total kostnad, 80 = fortjeneste'] },
          { label: 'b', task: 'Ved hvor mange solgte enheter går bedriften i null (break-even)?', solution: '$80x = 50x + 2000 \\Rightarrow 30x = 2000 \\Rightarrow x \\approx 67$ enheter', answer: 67 },
          { label: 'c', task: 'Hva er fortjenesten ved salg av 100 enheter?', solution: 'Fortjeneste $= I(100) - K(100) = 8000 - 7000 = 1000$ kr', answer: 1000 },
        ],
        solution: 'a) 50=enhetskostnad, 2000=faste kostnader, 80=salgspris  b) ca. 67 enheter  c) 1000 kr',
        hints: ['Break-even er når inntekt = kostnad'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: '10-3-1-exercise-14',
      type: 'exercise',
      exercise: {
        id: '10-3-1-oppg-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avansert: Parallelle og vinkelrette linjer',
        subTasks: [
          { label: 'a', task: 'To linjer er parallelle når de har samme stigningstall. Finn $k$ slik at $f(x) = 3x + 2$ og $g(x) = kx - 5$ er parallelle.', solution: '$k = 3$ (samme stigningstall)', answer: 3 },
          { label: 'b', task: 'Finn funksjonsuttrykket for linjen som er parallell med $f(x) = 2x + 3$ og går gjennom punktet $(4, 5)$.', solution: 'Parallell linje har $a = 2$. $5 = 2 \\cdot 4 + b \\Rightarrow b = -3$. Svar: $g(x) = 2x - 3$', multipleChoiceOptions: ['$g(x) = 2x - 3$', '$g(x) = 2x + 3$', '$g(x) = 3x - 2$', '$g(x) = -2x + 3$'] },
          { label: 'c', task: 'Finn funksjonsuttrykket for linjen som går gjennom origo og punktet $(3, -6)$.', solution: '$a = \\frac{-6}{3} = -2$, $b = 0$. Svar: $h(x) = -2x$', multipleChoiceOptions: ['$h(x) = -2x$', '$h(x) = 2x$', '$h(x) = -3x$', '$h(x) = -2x - 6$'] },
        ],
        solution: 'a) k = 3  b) g(x) = 2x - 3  c) h(x) = -2x',
        hints: ['Parallelle linjer har samme stigningstall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_3_2: TextbookChapter = {
  id: '10-3-2',
  courseId: '10',
  chapterNumber: '3.2',
  title: 'Andregradsfunksjoner',
  description: 'Lær om andregradsfunksjoner (parabeler), toppunkt, bunnpunkt og symmetrilinje.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive funksjoner ved å bruke ulike representasjoner',
    'tolke og bruke andregradsfunksjoner i praktiske situasjoner',
  ],
  content: [
    // Innledning
    {
      id: '10-3-2-intro',
      type: 'text',
      content: `## Innledning

En **andregradsfunksjon** (også kalt kvadratisk funksjon) har grafen som en **parabel**. Parabeler finnes overalt i naturen og teknologien:
- Banen til en ball som kastes
- Formen på en parabol-antenne
- Brubuer og arkitektur

I dette kapittelet lærer du å analysere andregradsfunksjoner og finne viktige punkter som toppunkt, bunnpunkt og nullpunkter.`,
    },

    // Definisjon
    {
      id: '10-3-2-def-1',
      type: 'definition',
      title: 'Andregradsfunksjon',
      content: `En **andregradsfunksjon** har formen:

$$f(x) = ax^2 + bx + c$$

der:
- $a \\neq 0$ (ellers er det ikke en andregradsfunksjon)
- $a$ bestemmer om parabelen åpner **oppover** ($a > 0$) eller **nedover** ($a < 0$)
- $c$ er konstantleddet (der grafen krysser $y$-aksen)`,
    },
    {
      id: '10-3-2-andregradsfunksjon-bilde',
      type: 'image',
      src: '/images/10-klasse/andregradsfunksjon-intro.svg',
      alt: 'Andregradsfunksjon med toppunkt, bunnpunkt og symmetrilinje',
      caption: 'En parabel med viktige punkter markert',
    },

    // Eksempel 1
    {
      id: '10-3-2-ex-1',
      type: 'example',
      title: 'Eksempel 1: Kjenne igjen andregradsfunksjoner',
      problem: `Hvilke av disse er andregradsfunksjoner?

a) $f(x) = x^2 + 3x - 2$
b) $g(x) = 2x + 5$
c) $h(x) = -3x^2 + 1$
d) $k(x) = x^3 - x^2$`,
      solution: `**Løsning:**

a) $f(x) = x^2 + 3x - 2$ ✓ Andregradsfunksjon ($a = 1$, $b = 3$, $c = -2$)

b) $g(x) = 2x + 5$ ✗ Lineær funksjon (ingen $x^2$-ledd)

c) $h(x) = -3x^2 + 1$ ✓ Andregradsfunksjon ($a = -3$, $b = 0$, $c = 1$)

d) $k(x) = x^3 - x^2$ ✗ Tredjegradsfunksjon (høyeste potens er 3)`,
    },

    // Oppgave 1
    {
      id: '10-3-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om funksjonene er andregradsfunksjoner. Hvis ja, finn $a$, $b$ og $c$.',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x^2 - 4x + 1$', solution: 'Ja. $a = 2$, $b = -4$, $c = 1$', multipleChoiceOptions: ['Ja, $a = 2$, $b = -4$, $c = 1$', 'Ja, $a = 2$, $b = 4$, $c = 1$', 'Nei, ikke andregradsfunksjon', 'Ja, $a = -4$, $b = 2$, $c = 1$'] },
          { label: 'b', task: '$g(x) = -x^2 + 5$', solution: 'Ja. $a = -1$, $b = 0$, $c = 5$', multipleChoiceOptions: ['Ja, $a = -1$, $b = 0$, $c = 5$', 'Ja, $a = 1$, $b = 0$, $c = 5$', 'Nei, ikke andregradsfunksjon', 'Ja, $a = -1$, $b = 5$, $c = 0$'] },
          { label: 'c', task: '$h(x) = 3x - 7$', solution: 'Nei, lineær funksjon', multipleChoiceOptions: ['Nei, dette er en lineær funksjon', 'Ja, $a = 0$, $b = 3$, $c = -7$', 'Ja, $a = 3$, $b = -7$, $c = 0$', 'Ja, $a = 1$, $b = 3$, $c = -7$'] },
          { label: 'd', task: '$k(x) = x^2$', solution: 'Ja. $a = 1$, $b = 0$, $c = 0$', multipleChoiceOptions: ['Ja, $a = 1$, $b = 0$, $c = 0$', 'Ja, $a = 0$, $b = 1$, $c = 0$', 'Nei, ikke andregradsfunksjon', 'Ja, $a = 2$, $b = 0$, $c = 0$'] },
          { label: 'e', task: '$m(x) = 4 - x^2 + 2x$', solution: 'Ja. $a = -1$, $b = 2$, $c = 4$', multipleChoiceOptions: ['Ja, $a = -1$, $b = 2$, $c = 4$', 'Ja, $a = 4$, $b = -1$, $c = 2$', 'Ja, $a = 1$, $b = 2$, $c = 4$', 'Nei, ikke andregradsfunksjon'] },
          { label: 'f', task: '$n(x) = (x+1)(x-3)$', solution: 'Ja. $= x^2 - 2x - 3$. $a = 1$, $b = -2$, $c = -3$', multipleChoiceOptions: ['Ja, $a = 1$, $b = -2$, $c = -3$', 'Ja, $a = 1$, $b = 2$, $c = -3$', 'Ja, $a = -1$, $b = -2$, $c = 3$', 'Nei, ikke andregradsfunksjon'] },
        ],
        solution: 'a) Ja: a=2, b=-4, c=1  b) Ja: a=-1, b=0, c=5  c) Nei  d) Ja: a=1, b=0, c=0  e) Ja: a=-1, b=2, c=4  f) Ja: a=1, b=-2, c=-3',
        hints: ['En andregradsfunksjon har $x^2$ som høyeste potens'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Parabelens form
    {
      id: '10-3-2-form',
      type: 'text',
      content: `## Parabelens form

Koeffisienten $a$ bestemmer parabelens form:

- Hvis $a > 0$: Parabelen åpner **oppover** (smilefjes) og har et **bunnpunkt**
- Hvis $a < 0$: Parabelen åpner **nedover** (sur munn) og har et **toppunkt**
- Jo større $|a|$ er, desto smalere er parabelen
- Jo mindre $|a|$ er, desto bredere er parabelen`,
    },

    // Oppgave 2
    {
      id: '10-3-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om parabelen åpner oppover eller nedover, og om den har toppunkt eller bunnpunkt.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 + 2x - 3$', solution: '$a = 1 > 0$: Åpner oppover, har bunnpunkt', multipleChoiceOptions: ['Åpner oppover, bunnpunkt', 'Åpner nedover, toppunkt', 'Åpner oppover, toppunkt', 'Åpner nedover, bunnpunkt'] },
          { label: 'b', task: '$g(x) = -2x^2 + 4x$', solution: '$a = -2 < 0$: Åpner nedover, har toppunkt', multipleChoiceOptions: ['Åpner nedover, toppunkt', 'Åpner oppover, bunnpunkt', 'Åpner nedover, bunnpunkt', 'Åpner oppover, toppunkt'] },
          { label: 'c', task: '$h(x) = 3x^2 - 6$', solution: '$a = 3 > 0$: Åpner oppover, har bunnpunkt', multipleChoiceOptions: ['Åpner oppover, bunnpunkt', 'Åpner nedover, toppunkt', 'Åpner oppover, toppunkt', 'Åpner nedover, bunnpunkt'] },
          { label: 'd', task: '$k(x) = -0{,}5x^2 + x + 2$', solution: '$a = -0{,}5 < 0$: Åpner nedover, har toppunkt', multipleChoiceOptions: ['Åpner nedover, toppunkt', 'Åpner oppover, bunnpunkt', 'Åpner nedover, bunnpunkt', 'Åpner oppover, toppunkt'] },
        ],
        solution: 'a) Oppover, bunnpunkt  b) Nedover, toppunkt  c) Oppover, bunnpunkt  d) Nedover, toppunkt',
        hints: ['Se på fortegnet til $a$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Symmetrilinje og ekstremalpunkt
    {
      id: '10-3-2-symmetri',
      type: 'text',
      content: `## Symmetrilinje og toppunkt/bunnpunkt

En parabel er symmetrisk om en vertikal linje kalt **symmetrilinjen**.

**Symmetrilinjen** har likningen:
$$x = -\\frac{b}{2a}$$

**Toppunktet/bunnpunktet** ligger på symmetrilinjen. For å finne $y$-koordinaten setter vi $x$-verdien inn i funksjonen.`,
    },

    // Definisjon: Ekstremalpunkt
    {
      id: '10-3-2-def-2',
      type: 'definition',
      title: 'Toppunkt og bunnpunkt',
      content: `For en andregradsfunksjon $f(x) = ax^2 + bx + c$:

**$x$-koordinat:**
$$x = -\\frac{b}{2a}$$

**$y$-koordinat:**
$$y = f\\left(-\\frac{b}{2a}\\right)$$

Punktet er et **bunnpunkt** hvis $a > 0$, og et **toppunkt** hvis $a < 0$.`,
    },

    // Eksempel 2
    {
      id: '10-3-2-ex-2',
      type: 'example',
      title: 'Eksempel 2: Finne toppunkt/bunnpunkt',
      problem: `Finn toppunkt eller bunnpunkt for:

a) $f(x) = x^2 - 4x + 3$
b) $g(x) = -2x^2 + 8x - 5$`,
      solution: `**Løsning:**

a) $f(x) = x^2 - 4x + 3$ (her er $a = 1$, $b = -4$)

$x$-koordinat: $x = -\\frac{-4}{2 \\cdot 1} = \\frac{4}{2} = 2$

$y$-koordinat: $f(2) = 2^2 - 4 \\cdot 2 + 3 = 4 - 8 + 3 = -1$

Siden $a = 1 > 0$, har vi **bunnpunkt** $(2, -1)$

b) $g(x) = -2x^2 + 8x - 5$ (her er $a = -2$, $b = 8$)

$x$-koordinat: $x = -\\frac{8}{2 \\cdot (-2)} = -\\frac{8}{-4} = 2$

$y$-koordinat: $g(2) = -2 \\cdot 2^2 + 8 \\cdot 2 - 5 = -8 + 16 - 5 = 3$

Siden $a = -2 < 0$, har vi **toppunkt** $(2, 3)$`,
    },

    // Oppgave 3
    {
      id: '10-3-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn symmetrilinjen og toppunkt/bunnpunkt for funksjonene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 6x + 5$', solution: 'Symmetrilinje: $x = 3$. Bunnpunkt: $(3, -4)$', multipleChoiceOptions: ['$x = 3$, bunnpunkt $(3, -4)$', '$x = 2$, bunnpunkt $(2, -3)$', '$x = 3$, bunnpunkt $(3, -2)$', '$x = -3$, bunnpunkt $(-3, -4)$'] },
          { label: 'b', task: '$g(x) = -x^2 + 4x - 3$', solution: 'Symmetrilinje: $x = 2$. Toppunkt: $(2, 1)$', multipleChoiceOptions: ['$x = 2$, toppunkt $(2, 1)$', '$x = 4$, toppunkt $(4, 1)$', '$x = 2$, toppunkt $(2, -1)$', '$x = -2$, toppunkt $(-2, 1)$'] },
          { label: 'c', task: '$h(x) = 2x^2 + 8x + 6$', solution: 'Symmetrilinje: $x = -2$. Bunnpunkt: $(-2, -2)$', multipleChoiceOptions: ['$x = -2$, bunnpunkt $(-2, -2)$', '$x = 2$, bunnpunkt $(2, -2)$', '$x = -2$, bunnpunkt $(-2, 2)$', '$x = -4$, bunnpunkt $(-4, -2)$'] },
          { label: 'd', task: '$k(x) = -3x^2 + 6x$', solution: 'Symmetrilinje: $x = 1$. Toppunkt: $(1, 3)$', multipleChoiceOptions: ['$x = 1$, toppunkt $(1, 3)$', '$x = 2$, toppunkt $(2, 6)$', '$x = 1$, toppunkt $(1, -3)$', '$x = -1$, toppunkt $(-1, 3)$'] },
        ],
        solution: 'a) x=3, (3,-4)  b) x=2, (2,1)  c) x=-2, (-2,-2)  d) x=1, (1,3)',
        hints: ['Bruk formelen $x = -\\frac{b}{2a}$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Nullpunkter
    {
      id: '10-3-2-nullpunkter',
      type: 'text',
      content: `## Nullpunkter

**Nullpunktene** er der parabelen krysser $x$-aksen, altså der $f(x) = 0$.

For å finne nullpunktene løser vi andregradslikningen:
$$ax^2 + bx + c = 0$$

Vi kan bruke:
- Faktorisering (hvis mulig)
- Abc-formelen: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$

**Diskriminanten** $D = b^2 - 4ac$ forteller oss:
- $D > 0$: To nullpunkter
- $D = 0$: Ett nullpunkt (parabelen tangerer $x$-aksen)
- $D < 0$: Ingen nullpunkter`,
    },

    // Eksempel 3
    {
      id: '10-3-2-ex-3',
      type: 'example',
      title: 'Eksempel 3: Finne nullpunkter',
      problem: `Finn nullpunktene for $f(x) = x^2 - 5x + 6$.`,
      solution: `**Løsning:**

Vi løser $x^2 - 5x + 6 = 0$.

**Metode 1: Faktorisering**
Vi leter etter to tall som multiplisert gir 6 og addert gir -5.
$(-2) \\cdot (-3) = 6$ og $(-2) + (-3) = -5$

$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$

$x = 2$ eller $x = 3$

**Metode 2: Abc-formelen**
$a = 1$, $b = -5$, $c = 6$

$x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4 \\cdot 1 \\cdot 6}}{2 \\cdot 1} = \\frac{5 \\pm \\sqrt{25 - 24}}{2} = \\frac{5 \\pm 1}{2}$

$x = \\frac{5 + 1}{2} = 3$ eller $x = \\frac{5 - 1}{2} = 2$

**Svar:** Nullpunktene er $x = 2$ og $x = 3$`,
    },

    // Oppgave 4
    {
      id: '10-3-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nullpunktene for funksjonene (bruk faktorisering eller abc-formelen).',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 7x + 12$', solution: '$(x-3)(x-4) = 0 \\Rightarrow x = 3$ eller $x = 4$', multipleChoiceOptions: ['$x = 3$ og $x = 4$', '$x = -3$ og $x = -4$', '$x = 2$ og $x = 6$', '$x = 3$ og $x = -4$'] },
          { label: 'b', task: '$g(x) = x^2 + 2x - 8$', solution: '$(x+4)(x-2) = 0 \\Rightarrow x = -4$ eller $x = 2$', multipleChoiceOptions: ['$x = -4$ og $x = 2$', '$x = 4$ og $x = -2$', '$x = -4$ og $x = -2$', '$x = 4$ og $x = 2$'] },
          { label: 'c', task: '$h(x) = x^2 - 9$', solution: '$(x-3)(x+3) = 0 \\Rightarrow x = 3$ eller $x = -3$', multipleChoiceOptions: ['$x = 3$ og $x = -3$', '$x = 9$ og $x = -9$', '$x = 3$ og $x = 3$', '$x = 0$ og $x = 9$'] },
          { label: 'd', task: '$k(x) = 2x^2 - 6x$', solution: '$2x(x-3) = 0 \\Rightarrow x = 0$ eller $x = 3$', multipleChoiceOptions: ['$x = 0$ og $x = 3$', '$x = 0$ og $x = -3$', '$x = 2$ og $x = 3$', '$x = -3$ og $x = 3$'] },
        ],
        solution: 'a) x=3, x=4  b) x=-4, x=2  c) x=3, x=-3  d) x=0, x=3',
        hints: ['Prøv å faktorisere først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: '10-3-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk abc-formelen til å finne nullpunktene.',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 4x + 2$', solution: '$x = \\frac{4 \\pm \\sqrt{8}}{2} = 2 \\pm \\sqrt{2}$', multipleChoiceOptions: ['$x = 2 \\pm \\sqrt{2}$', '$x = 2 \\pm \\sqrt{8}$', '$x = 4 \\pm \\sqrt{2}$', '$x = 1 \\pm \\sqrt{2}$'] },
          { label: 'b', task: '$g(x) = 2x^2 + 3x - 2$', solution: '$x = \\frac{-3 \\pm \\sqrt{25}}{4} = \\frac{-3 \\pm 5}{4}$. $x = 0{,}5$ eller $x = -2$', multipleChoiceOptions: ['$x = 0{,}5$ og $x = -2$', '$x = -0{,}5$ og $x = 2$', '$x = 2$ og $x = -0{,}5$', '$x = 1$ og $x = -2$'] },
          { label: 'c', task: '$h(x) = x^2 + 2x + 5$', solution: '$D = 4 - 20 = -16 < 0$. Ingen nullpunkter.', multipleChoiceOptions: ['Ingen nullpunkter', '$x = -1$ og $x = -5$', '$x = 1$ og $x = 5$', '$x = -2{,}5$'] },
        ],
        solution: 'a) x = 2 +/- sqrt(2)  b) x = 0,5 eller x = -2  c) Ingen nullpunkter',
        hints: ['Beregn diskriminanten $D = b^2 - 4ac$ først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6: GeoGebra
    {
      id: '10-3-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-6',
        number: '6',
        type: 'interactive',
        tool: 'geogebra-graph',
        difficulty: 'medium',
        task: 'Tegn parabelen i GeoGebra og finn toppunkt/bunnpunkt og nullpunkter.',
        subTasks: [
          { label: 'a', task: 'Tegn $f(x) = x^2 - 2x - 3$. Finn bunnpunkt og nullpunkter.', solution: 'Bunnpunkt: $(1, -4)$. Nullpunkter: $x = -1$ og $x = 3$' },
          { label: 'b', task: 'Tegn $g(x) = -x^2 + 4x$. Finn toppunkt og nullpunkter.', solution: 'Toppunkt: $(2, 4)$. Nullpunkter: $x = 0$ og $x = 4$' },
        ],
        solution: 'a) Bunnpunkt (1,-4), nullpunkter x=-1, x=3  b) Toppunkt (2,4), nullpunkter x=0, x=4',
        hints: ['Bruk kommandoen Ekstremalpunkt[f] i GeoGebra'],
        initialCommands: ['f(x) = x^2 - 2x - 3'],
        allowsUpload: true,
      },
    },

    // Oppgave 7
    {
      id: '10-3-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut funksjonsverdier.',
        subTasks: [
          { label: 'a', task: 'La $f(x) = x^2 - 3x + 2$. Finn $f(0)$, $f(1)$ og $f(4)$.', solution: '$f(0) = 2$, $f(1) = 0$, $f(4) = 6$', multipleChoiceOptions: ['$f(0) = 2$, $f(1) = 0$, $f(4) = 6$', '$f(0) = 0$, $f(1) = 2$, $f(4) = 8$', '$f(0) = 2$, $f(1) = 1$, $f(4) = 4$', '$f(0) = -2$, $f(1) = 0$, $f(4) = 6$'] },
          { label: 'b', task: 'La $g(x) = -2x^2 + 4x + 1$. Finn $g(-1)$, $g(0)$ og $g(2)$.', solution: '$g(-1) = -5$, $g(0) = 1$, $g(2) = 1$', multipleChoiceOptions: ['$g(-1) = -5$, $g(0) = 1$, $g(2) = 1$', '$g(-1) = 5$, $g(0) = 1$, $g(2) = -1$', '$g(-1) = -5$, $g(0) = 0$, $g(2) = 3$', '$g(-1) = -3$, $g(0) = 1$, $g(2) = 1$'] },
        ],
        solution: 'a) f(0)=2, f(1)=0, f(4)=6  b) g(-1)=-5, g(0)=1, g(2)=1',
        hints: ['Sett inn verdien for x og regn ut'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Praktisk anvendelse
    {
      id: '10-3-2-praktisk',
      type: 'text',
      content: `## Praktiske anvendelser

Andregradsfunksjoner brukes til å modellere mange situasjoner:
- **Kastebevegelser:** Høyden til en ball som kastes
- **Areal:** Areal av rektangler med gitt omkrets
- **Økonomi:** Fortjeneste som funksjon av pris eller produksjonsmengde`,
    },

    // Eksempel 4: Praktisk
    {
      id: '10-3-2-ex-4',
      type: 'example',
      title: 'Eksempel 4: Kastebevegelse',
      problem: `En ball kastes rett opp. Høyden (i meter) etter $t$ sekunder er gitt ved:
$$h(t) = -5t^2 + 20t + 2$$

a) Hvor høyt er ballen etter 2 sekunder?
b) Når er ballen på det høyeste?
c) Hva er maksimalhøyden?`,
      solution: `**Løsning:**

a) $h(2) = -5 \\cdot 2^2 + 20 \\cdot 2 + 2 = -20 + 40 + 2 = 22$ meter

b) $t = -\\frac{b}{2a} = -\\frac{20}{2 \\cdot (-5)} = -\\frac{20}{-10} = 2$ sekunder

c) Maksimalhøyde: $h(2) = 22$ meter`,
    },

    // Oppgave 8
    {
      id: '10-3-2-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'En ball kastes fra bakken. Høyden er gitt ved $h(t) = -5t^2 + 30t$ meter.',
        subTasks: [
          { label: 'a', task: 'Hvor høyt er ballen etter 1 sekund?', solution: '$h(1) = -5 + 30 = 25$ meter', answer: 25 },
          { label: 'b', task: 'Når er ballen på det høyeste?', solution: '$t = -\\frac{30}{-10} = 3$ sekunder', answer: 3 },
          { label: 'c', task: 'Hva er maksimalhøyden?', solution: '$h(3) = -5 \\cdot 9 + 30 \\cdot 3 = -45 + 90 = 45$ meter', answer: 45 },
          { label: 'd', task: 'Når lander ballen?', solution: '$-5t^2 + 30t = 0 \\Rightarrow t(30 - 5t) = 0 \\Rightarrow t = 6$ sekunder', answer: 6 },
        ],
        solution: 'a) 25 m  b) 3 s  c) 45 m  d) 6 s',
        hints: ['Ballen lander når h(t) = 0'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 9
    {
      id: '10-3-2-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et rektangel skal ha omkrets 40 cm.',
        subTasks: [
          { label: 'a', task: 'Hvis bredden er $x$ cm, hva blir lengden?', solution: 'Lengde $= 20 - x$ cm', multipleChoiceOptions: ['$20 - x$ cm', '$40 - x$ cm', '$x - 20$ cm', '$20 + x$ cm'] },
          { label: 'b', task: 'Sett opp en funksjon $A(x)$ for arealet.', solution: '$A(x) = x(20-x) = -x^2 + 20x$', multipleChoiceOptions: ['$A(x) = -x^2 + 20x$', '$A(x) = x^2 + 20x$', '$A(x) = -x^2 - 20x$', '$A(x) = 20x^2$'] },
          { label: 'c', task: 'Finn dimensjonene som gir størst areal.', solution: '$x = 10$ cm gir bredde = lengde = 10 cm (kvadrat)', multipleChoiceOptions: ['10 cm $\\times$ 10 cm', '5 cm $\\times$ 15 cm', '8 cm $\\times$ 12 cm', '20 cm $\\times$ 20 cm'] },
          { label: 'd', task: 'Hva er det største arealet?', solution: '$A(10) = 100$ cm$^2$', answer: 100 },
        ],
        solution: 'a) 20-x cm  b) A(x) = -x^2 + 20x  c) 10 cm x 10 cm  d) 100 cm^2',
        hints: ['Omkrets = 2 * lengde + 2 * bredde'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: '10-3-2-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bedrift selger et produkt. Fortjenesten (i kr) ved å produsere $x$ enheter er gitt ved: $F(x) = -2x^2 + 80x - 600$',
        subTasks: [
          { label: 'a', task: 'Ved hvor mange enheter er fortjenesten størst?', solution: '$x = -\\frac{80}{-4} = 20$ enheter', answer: 20 },
          { label: 'b', task: 'Hva er den største fortjenesten?', solution: '$F(20) = -800 + 1600 - 600 = 200$ kr', answer: 200 },
          { label: 'c', task: 'Ved hvilke produksjonsmengder går bedriften i null?', solution: '$-2x^2 + 80x - 600 = 0 \\Rightarrow x = 10$ eller $x = 30$ enheter', multipleChoiceOptions: ['10 og 30 enheter', '5 og 60 enheter', '15 og 25 enheter', '20 og 40 enheter'] },
        ],
        solution: 'a) 20 enheter  b) 200 kr  c) 10 eller 30 enheter',
        hints: ['Finn toppunktet for å finne maksimal fortjeneste'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: '10-3-2-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør hvor mange nullpunkter funksjonen har (beregn diskriminanten).',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 6x + 9$', solution: '$D = 36 - 36 = 0$. Ett nullpunkt.', multipleChoiceOptions: ['Ett nullpunkt', 'To nullpunkter', 'Ingen nullpunkter', 'Tre nullpunkter'] },
          { label: 'b', task: '$g(x) = x^2 + 4x + 5$', solution: '$D = 16 - 20 = -4 < 0$. Ingen nullpunkter.', multipleChoiceOptions: ['Ingen nullpunkter', 'Ett nullpunkt', 'To nullpunkter', 'Uendelig mange'] },
          { label: 'c', task: '$h(x) = 2x^2 - 3x - 2$', solution: '$D = 9 + 16 = 25 > 0$. To nullpunkter.', multipleChoiceOptions: ['To nullpunkter', 'Ett nullpunkt', 'Ingen nullpunkter', 'Tre nullpunkter'] },
          { label: 'd', task: '$k(x) = -x^2 + 8x - 16$', solution: '$D = 64 - 64 = 0$. Ett nullpunkt.', multipleChoiceOptions: ['Ett nullpunkt', 'To nullpunkter', 'Ingen nullpunkter', 'Tre nullpunkter'] },
        ],
        solution: 'a) 1  b) 0  c) 2  d) 1',
        hints: ['$D = b^2 - 4ac$'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: '10-3-2-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En tunnel har parabelformet åpning. Bredden ved bakken er 10 meter og høyden i midten er 6 meter.',
        subTasks: [
          { label: 'a', task: 'Sett opp en funksjon $h(x)$ for høyden der $x$ er avstanden fra midten.', solution: 'Med nullpunkter ved $x = -5$ og $x = 5$: $h(x) = a(x-5)(x+5) = a(x^2 - 25)$. Ved $x=0$: $h(0) = -25a = 6 \\Rightarrow a = -\\frac{6}{25}$. $h(x) = -\\frac{6}{25}(x^2 - 25) = -0{,}24x^2 + 6$' },
          { label: 'b', task: 'Hva er høyden 2 meter fra midten?', solution: '$h(2) = -0{,}24 \\cdot 4 + 6 = 5{,}04$ meter' },
          { label: 'c', task: 'Hvor bred er tunnelen i 4 meters høyde?', solution: '$4 = -0{,}24x^2 + 6 \\Rightarrow x^2 = 8{,}33 \\Rightarrow x \\approx \\pm 2{,}89$. Bredde $\\approx 5{,}8$ meter' },
        ],
        solution: 'a) h(x) = -0,24x^2 + 6  b) ca. 5,04 m  c) ca. 5,8 m',
        hints: ['Plasser origo i bunnen, midt i tunnelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 13
    {
      id: '10-3-2-exercise-13',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-13',
        number: '13',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign parablene.',
        subTasks: [
          { label: 'a', task: 'Hvilken parabel er smalest: $f(x) = x^2$, $g(x) = 2x^2$ eller $h(x) = 0{,}5x^2$?', solution: '$g(x) = 2x^2$ er smalest (størst $|a|$)' },
          { label: 'b', task: 'Hvordan påvirker $c$ grafens posisjon i $f(x) = x^2 + c$?', solution: '$c$ flytter grafen opp eller ned langs $y$-aksen' },
          { label: 'c', task: 'Skriv funksjonsuttrykket for parabelen $f(x) = x^2$ flyttet 3 enheter opp.', solution: '$f(x) = x^2 + 3$' },
        ],
        solution: 'a) g(x) = 2x^2  b) c flytter grafen vertikalt  c) f(x) = x^2 + 3',
        hints: ['Jo større |a|, desto smalere parabel'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 14
    {
      id: '10-3-2-exercise-14',
      type: 'exercise',
      exercise: {
        id: '10-3-2-oppg-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avansert: Finn funksjonsuttrykket fra informasjon.',
        subTasks: [
          { label: 'a', task: 'Parabelen har bunnpunkt $(2, -3)$ og går gjennom $(0, 1)$. Finn funksjonsuttrykket.', solution: 'Med bunnpunkt: $f(x) = a(x-2)^2 - 3$. $f(0) = 4a - 3 = 1 \\Rightarrow a = 1$. $f(x) = (x-2)^2 - 3 = x^2 - 4x + 1$' },
          { label: 'b', task: 'Parabelen har nullpunkter $x = 1$ og $x = 5$, og går gjennom $(0, 10)$. Finn funksjonsuttrykket.', solution: '$f(x) = a(x-1)(x-5)$. $f(0) = 5a = 10 \\Rightarrow a = 2$. $f(x) = 2(x-1)(x-5) = 2x^2 - 12x + 10$' },
        ],
        solution: 'a) f(x) = x^2 - 4x + 1  b) f(x) = 2x^2 - 12x + 10',
        hints: ['Bruk formen med bunnpunkt: f(x) = a(x-h)^2 + k'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_3_3: TextbookChapter = {
  id: '10-3-3',
  courseId: '10',
  chapterNumber: '3.3',
  title: 'Praktiske funksjoner',
  description: 'Lær å modellere praktiske situasjoner med funksjoner, tolke grafer og bruke funksjoner til problemløsning.',
  estimatedMinutes: 45,
  competenceGoals: [
    'modellere situasjoner knyttet til dagligliv ved å bruke funksjoner',
    'tolke og presentere funksjoner grafisk og algebraisk',
  ],
  content: [
    // Innledning
    {
      id: '10-3-3-intro',
      type: 'text',
      content: `## Innledning

I dette kapittelet skal vi bruke funksjoner til å modellere situasjoner fra virkeligheten. Vi skal:
- Lese og tolke grafer
- Sette opp funksjoner fra tekstoppgaver
- Løse praktiske problemer med funksjoner

Funksjoner er et kraftig verktøy for å forstå sammenhenger og gjøre beregninger i mange ulike situasjoner.`,
    },
    {
      id: '10-3-3-modellering-bilde',
      type: 'image',
      src: '/images/10-klasse/modellering.svg',
      alt: 'Illustrasjon av matematisk modellering med funksjoner',
      caption: 'Matematisk modellering - a bruke funksjoner til a beskrive virkeligheten',
    },

    // Tolke grafer
    {
      id: '10-3-3-tolke',
      type: 'text',
      content: `## Tolke grafer

Når vi leser en graf, kan vi hente ut mye informasjon:
- **Startverdi:** Verdien når $x = 0$ (der grafen krysser $y$-aksen)
- **Nullpunkter:** Der grafen krysser $x$-aksen
- **Stigning/fall:** Når grafen går oppover eller nedover
- **Ekstremalpunkter:** Topp- og bunnpunkter
- **Vekstrate:** Hvor bratt grafen stiger eller synker`,
    },

    // Eksempel 1
    {
      id: '10-3-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Tolke temperaturkurve',
      problem: `Temperaturen i et rom måles over 12 timer. Ved start er temperaturen 15°C. Den stiger jevnt til 24°C etter 6 timer, og synker så til 18°C etter 12 timer.

a) Tegn en skisse av temperaturkurven.
b) Når var temperaturen høyest?
c) Med hvor mange grader steg temperaturen per time de første 6 timene?`,
      solution: `**Løsning:**

a) Kurven starter ved $(0, 15)$, går opp til $(6, 24)$, og ned til $(12, 18)$.

b) Temperaturen var høyest etter 6 timer (24°C).

c) Stigning per time: $\\frac{24 - 15}{6 - 0} = \\frac{9}{6} = 1{,}5$ °C per time`,
    },

    // Oppgave 1
    {
      id: '10-3-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En tank fylles med vann. Ved start er det 100 liter i tanken. Etter 5 minutter er det 250 liter.',
        subTasks: [
          { label: 'a', task: 'Hvor mange liter fylles per minutt?', solution: '$\\frac{250 - 100}{5} = 30$ liter per minutt', answer: 30 },
          { label: 'b', task: 'Sett opp en funksjon $V(t)$ for vannmengden etter $t$ minutter.', solution: '$V(t) = 30t + 100$', multipleChoiceOptions: ['$V(t) = 30t + 100$', '$V(t) = 100t + 30$', '$V(t) = 30t - 100$', '$V(t) = 25t + 100$'] },
          { label: 'c', task: 'Hvor lang tid tar det å fylle tanken til 400 liter?', solution: '$400 = 30t + 100 \\Rightarrow t = 10$ minutter', answer: 10 },
        ],
        solution: 'a) 30 liter/min  b) V(t) = 30t + 100  c) 10 minutter',
        hints: ['Stigningstallet er antall liter per minutt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 2
    {
      id: '10-3-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bil kjører fra Oslo. Distansen fra Oslo (i km) er gitt ved $s(t) = 80t$, der $t$ er antall timer.',
        subTasks: [
          { label: 'a', task: 'Hva er farten til bilen?', solution: 'Fart = stigningstall = 80 km/t', answer: 80 },
          { label: 'b', task: 'Hvor langt har bilen kjørt etter 2,5 timer?', solution: '$s(2{,}5) = 80 \\cdot 2{,}5 = 200$ km', answer: 200 },
          { label: 'c', task: 'Hvor lang tid tar det å kjøre 360 km?', solution: '$360 = 80t \\Rightarrow t = 4{,}5$ timer', answer: 4.5 },
        ],
        solution: 'a) 80 km/t  b) 200 km  c) 4,5 timer',
        hints: ['Fart = distanse / tid'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Sette opp funksjoner
    {
      id: '10-3-3-sette-opp',
      type: 'text',
      content: `## Sette opp funksjoner fra tekst

For å sette opp en funksjon fra en praktisk situasjon:

1. **Identifiser variablene:** Hva er $x$ (uavhengig variabel) og hva er $f(x)$ (avhengig variabel)?
2. **Finn sammenhengen:** Er det en fast verdi pluss noe som varierer? (lineær)
3. **Skriv funksjonsuttrykket:** Bruk informasjonen til å finne koeffisientene.
4. **Sjekk:** Sett inn kjente verdier for å verifisere at funksjonen stemmer.`,
    },

    // Eksempel 2
    {
      id: '10-3-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Billettpris',
      problem: `Et museum tar 50 kr i inngang. Barn betaler halv pris. En gruppe består av $v$ voksne og $b$ barn.

a) Sett opp en funksjon for totalpris $P(v, b)$.
b) Hva koster det for 3 voksne og 4 barn?`,
      solution: `**Løsning:**

a) Voksne: 50 kr, Barn: 25 kr
$$P(v, b) = 50v + 25b$$

b) $P(3, 4) = 50 \\cdot 3 + 25 \\cdot 4 = 150 + 100 = 250$ kr`,
    },

    // Oppgave 3
    {
      id: '10-3-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En strømregning består av et fastbeløp på 200 kr/mnd pluss 1,20 kr per kWh.',
        subTasks: [
          { label: 'a', task: 'Sett opp en funksjon $K(x)$ for månedskostnaden der $x$ er forbruket i kWh.', solution: '$K(x) = 1{,}20x + 200$', multipleChoiceOptions: ['$K(x) = 1{,}20x + 200$', '$K(x) = 200x + 1{,}20$', '$K(x) = 1{,}20x - 200$', '$K(x) = 120x + 200$'] },
          { label: 'b', task: 'Hva blir regningen ved forbruk på 350 kWh?', solution: '$K(350) = 1{,}20 \\cdot 350 + 200 = 420 + 200 = 620$ kr', answer: 620 },
          { label: 'c', task: 'Hvor mange kWh kan du bruke hvis budsjettet er 500 kr?', solution: '$500 = 1{,}20x + 200 \\Rightarrow x = 250$ kWh', answer: 250 },
        ],
        solution: 'a) K(x) = 1,20x + 200  b) 620 kr  c) 250 kWh',
        hints: ['Fastbeløp = konstantledd, pris per kWh = stigningstall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 4
    {
      id: '10-3-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift leier ut sykler. Prisen er 50 kr + 20 kr per time.',
        subTasks: [
          { label: 'a', task: 'Sett opp en funksjon $P(t)$ for leieprisen der $t$ er antall timer.', solution: '$P(t) = 20t + 50$' },
          { label: 'b', task: 'Lag en tabell med priser for 1, 2, 3, 4 og 5 timer.', solution: 't=1: 70 kr, t=2: 90 kr, t=3: 110 kr, t=4: 130 kr, t=5: 150 kr' },
          { label: 'c', task: 'Tegn grafen.', solution: 'Rett linje fra (0, 50) med stigning 20' },
          { label: 'd', task: 'Hvor mange timer kan du leie for 170 kr?', solution: '$170 = 20t + 50 \\Rightarrow t = 6$ timer' },
        ],
        solution: 'a) P(t) = 20t + 50  b) Se tabell  c) Linje med stigningstall 20  d) 6 timer',
        hints: ['Grafen er en rett linje'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Sammenligne alternativer
    {
      id: '10-3-3-sammenligne',
      type: 'text',
      content: `## Sammenligne alternativer

Funksjoner er nyttige for å sammenligne ulike alternativer, for eksempel:
- Hvilket mobilabonnement er billigst?
- Når lønner det seg å velge dagskort fremfor enkeltbilletter?
- Hvilken strømleverandør er best for meg?

For å sammenligne finner vi ofte skjæringspunktet mellom funksjonene.`,
    },

    // Eksempel 3
    {
      id: '10-3-3-ex-3',
      type: 'example',
      title: 'Eksempel 3: Sammenligne treningssentre',
      problem: `To treningssentre tilbyr:
- Senter A: 300 kr/mnd + 30 kr per trening
- Senter B: 600 kr/mnd med ubegrenset trening

Ved hvor mange treningsøkter per måned er de like dyre?`,
      solution: `**Løsning:**

La $x$ være antall treningsøkter per måned.

Senter A: $K_A(x) = 30x + 300$
Senter B: $K_B(x) = 600$

Finn skjæringspunktet:
$$30x + 300 = 600$$
$$30x = 300$$
$$x = 10$$

**Svar:** Ved 10 treningsøkter er de like dyre.
- Færre enn 10 økter: Senter A er billigst
- Flere enn 10 økter: Senter B er billigst`,
    },

    // Oppgave 5
    {
      id: '10-3-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'To parkeringsplasser tilbyr:',
        subTasks: [
          { label: 'a', task: 'Parkering A koster 30 kr første time + 20 kr per ekstra time. Parkering B koster 15 kr per time. Sett opp funksjoner.', solution: '$A(t) = 20t + 10$ (for $t \\geq 1$), $B(t) = 15t$' },
          { label: 'b', task: 'Ved hvor mange timer er de like dyre?', solution: '$20t + 10 = 15t \\Rightarrow t = 2$ timer (men A koster 30 + 20 = 50, B koster 30)... Korrekt: $A(t) = 30 + 20(t-1) = 20t + 10$, $15t = 20t + 10 \\Rightarrow -5t = 10 \\Rightarrow$ ingen løsning for $t > 0$. B er alltid billigst for korte perioder.' },
          { label: 'c', task: 'Hvilken parkering lønner seg for 4 timers parkering?', solution: '$A(4) = 30 + 60 = 90$ kr, $B(4) = 60$ kr. B lønner seg.' },
        ],
        solution: 'a) A(t) = 30 + 20(t-1), B(t) = 15t  b) De krysses ikke, B er billigst for korte perioder  c) B (60 kr mot 90 kr)',
        hints: ['Husk at A har spesialpris for første time'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 6
    {
      id: '10-3-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En kjøpmann vurderer to leverandører for epler:',
        subTasks: [
          { label: 'a', task: 'Leverandør A: 5 kr per kg. Leverandør B: 100 kr fast + 3 kr per kg. Sett opp funksjoner for kostnad.', solution: '$A(x) = 5x$, $B(x) = 3x + 100$' },
          { label: 'b', task: 'Ved hvilken mengde er leverandørene like dyre?', solution: '$5x = 3x + 100 \\Rightarrow x = 50$ kg' },
          { label: 'c', task: 'Hvilken leverandør lønner seg ved innkjøp av 80 kg?', solution: '$A(80) = 400$ kr, $B(80) = 340$ kr. Leverandør B lønner seg.' },
        ],
        solution: 'a) A(x) = 5x, B(x) = 3x + 100  b) 50 kg  c) Leverandør B',
        hints: ['Finn skjæringspunktet mellom funksjonene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: '10-3-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En spareplan gir rente. Etter $t$ år er saldoen $S(t) = 10000 \\cdot 1{,}03^t$ kr.',
        subTasks: [
          { label: 'a', task: 'Hvor mye er det på kontoen ved start?', solution: '$S(0) = 10000 \\cdot 1 = 10000$ kr' },
          { label: 'b', task: 'Hvor mye er det etter 5 år?', solution: '$S(5) = 10000 \\cdot 1{,}03^5 \\approx 11593$ kr' },
          { label: 'c', task: 'Hva er renten per år?', solution: '3% (faktoren 1,03 = 1 + 0,03)' },
        ],
        solution: 'a) 10 000 kr  b) ca. 11 593 kr  c) 3%',
        hints: ['Dette er en eksponentiell funksjon, ikke lineær'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: '10-3-3-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-8',
        number: '8',
        type: 'interactive',
        tool: 'geogebra-graph',
        difficulty: 'medium',
        task: 'Modeller og visualiser i GeoGebra.',
        subTasks: [
          { label: 'a', task: 'En bil starter 100 km fra byen og kjører mot byen med 60 km/t. Sett opp $d(t)$ for avstanden og tegn grafen.', solution: '$d(t) = -60t + 100$. Linjen krysser x-aksen ved $t = 1{,}67$ timer.' },
          { label: 'b', task: 'En annen bil starter i byen og kjører ut med 80 km/t. Sett opp $s(t)$ og tegn grafen.', solution: '$s(t) = 80t$' },
          { label: 'c', task: 'Når møtes bilene? Hvor langt fra byen?', solution: '$100 - 60t = 80t \\Rightarrow t = 0{,}714$ timer. Avstand: $80 \\cdot 0{,}714 \\approx 57$ km' },
        ],
        solution: 'a) d(t) = -60t + 100  b) s(t) = 80t  c) ca. 43 min, 57 km fra byen',
        hints: ['Bilene møtes der grafene krysser'],
        initialCommands: ['d(t) = -60t + 100', 's(t) = 80t'],
        allowsUpload: true,
      },
    },

    // Oppgave 9
    {
      id: '10-3-3-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En rakett skytes opp. Høyden (i meter) etter $t$ sekunder er $h(t) = -5t^2 + 100t$.',
        subTasks: [
          { label: 'a', task: 'Hvor høyt er raketten etter 5 sekunder?', solution: '$h(5) = -125 + 500 = 375$ meter', answer: 375 },
          { label: 'b', task: 'Når er raketten på det høyeste?', solution: '$t = -\\frac{100}{-10} = 10$ sekunder', answer: 10 },
          { label: 'c', task: 'Hva er maksimalhøyden?', solution: '$h(10) = -500 + 1000 = 500$ meter', answer: 500 },
          { label: 'd', task: 'Når lander raketten?', solution: '$-5t^2 + 100t = 0 \\Rightarrow t = 20$ sekunder', answer: 20 },
        ],
        solution: 'a) 375 m  b) 10 s  c) 500 m  d) 20 s',
        hints: ['Bruk formlene for andregradsfunksjoner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: '10-3-3-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En bonde har 60 meter gjerde og vil lage en rektangulær innhegning langs en vegg (veggen er den ene siden).',
        subTasks: [
          { label: 'a', task: 'Hvis bredden er $x$ meter, hva blir lengden?', solution: 'Lengde $= 60 - 2x$ meter' },
          { label: 'b', task: 'Sett opp en funksjon $A(x)$ for arealet.', solution: '$A(x) = x(60 - 2x) = -2x^2 + 60x$' },
          { label: 'c', task: 'Finn dimensjonene som gir størst areal.', solution: '$x = 15$ m, lengde $= 30$ m' },
          { label: 'd', task: 'Hva er det største arealet?', solution: '$A(15) = 15 \\cdot 30 = 450$ m$^2$' },
        ],
        solution: 'a) 60 - 2x  b) A(x) = -2x^2 + 60x  c) 15 m x 30 m  d) 450 m^2',
        hints: ['Gjerdet dekker bare 3 sider (veggen er den fjerde)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 11
    {
      id: '10-3-3-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'En kaffekopp med temperatur 90°C avkjøles. Temperaturen etter $t$ minutter er omtrent $T(t) = 20 + 70 \\cdot 0{,}95^t$.',
        subTasks: [
          { label: 'a', task: 'Hva er temperaturen ved start?', solution: '$T(0) = 20 + 70 = 90$°C' },
          { label: 'b', task: 'Hva er temperaturen etter 10 minutter?', solution: '$T(10) = 20 + 70 \\cdot 0{,}95^{10} \\approx 20 + 42 = 62$°C' },
          { label: 'c', task: 'Hva blir temperaturen til slutt (når $t \\to \\infty$)?', solution: '20°C (romtemperaturen)' },
        ],
        solution: 'a) 90°C  b) ca. 62°C  c) 20°C',
        hints: ['Når $t$ blir stor, blir $0,95^t$ veldig liten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 12
    {
      id: '10-3-3-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-3-3-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samlet oppgave: En bedrift produserer og selger et produkt. Kostnad: $K(x) = 20x + 500$ kr. Inntekt: $I(x) = 50x$ kr.',
        subTasks: [
          { label: 'a', task: 'Sett opp en funksjon $F(x)$ for fortjenesten.', solution: '$F(x) = I(x) - K(x) = 50x - 20x - 500 = 30x - 500$' },
          { label: 'b', task: 'Ved hvor mange solgte enheter går bedriften i null?', solution: '$30x - 500 = 0 \\Rightarrow x \\approx 17$ enheter' },
          { label: 'c', task: 'Hva er fortjenesten ved salg av 50 enheter?', solution: '$F(50) = 30 \\cdot 50 - 500 = 1000$ kr' },
          { label: 'd', task: 'Tegn grafene for $K(x)$, $I(x)$ og $F(x)$ i samme koordinatsystem.', solution: 'Tre linjer: K starter ved 500 med stigning 20, I starter ved 0 med stigning 50, F starter ved -500 med stigning 30' },
        ],
        solution: 'a) F(x) = 30x - 500  b) ca. 17 enheter  c) 1000 kr  d) Se graf',
        hints: ['Fortjeneste = Inntekt - Kostnad'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_3_4: TextbookChapter = {
  id: '10-3-4',
  courseId: '10',
  chapterNumber: '3.4',
  title: 'Regresjon',
  description: 'Lær om lineær regresjon og hvordan du tilpasser funksjoner til data.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke digitale verktøy til å presentere og analysere data',
    'vurdere om en modell beskriver datamaterialet på en god måte',
  ],
  content: [
    // Innledning
    {
      id: '10-3-4-intro',
      type: 'text',
      content: `## Innledning

I virkeligheten har vi ofte data som ikke følger en eksakt funksjon. **Regresjon** er en metode for å finne en funksjon som passer best mulig til et sett med datapunkter.

**Lineær regresjon** finner den rette linjen som passer best til dataene. Denne metoden brukes mye i forskning, økonomi og mange andre felt.`,
    },

    // Definisjon
    {
      id: '10-3-4-def-1',
      type: 'definition',
      title: 'Lineær regresjon',
      content: `**Lineær regresjon** er en metode for å finne den rette linjen $y = ax + b$ som best beskriver sammenhengen mellom to variabler.

- $a$ kalles **regresjonskoeffisienten** eller stigningstallet
- $b$ kalles **konstantleddet**

Linjen kalles **regresjonslinje** eller **trendlinje**.`,
    },

    // Minste kvadraters metode
    {
      id: '10-3-4-metode',
      type: 'text',
      content: `## Minste kvadraters metode

Den vanligste metoden for å finne regresjonslinjen er **minste kvadraters metode**. Denne minimerer summen av kvadratene av avstandene fra datapunktene til linjen.

I praksis bruker vi digitale verktøy som GeoGebra, Excel eller kalkulator til å beregne regresjonslinjen.`,
    },

    // Eksempel 1
    {
      id: '10-3-4-ex-1',
      type: 'example',
      title: 'Eksempel 1: Finne regresjonslinje',
      problem: `En undersøkelse måler sammenhengen mellom studietid og eksamenskarakter:

| Timer studert (x) | 2 | 4 | 5 | 7 | 8 |
|-------------------|---|---|---|---|---|
| Karakter (y)      | 3 | 4 | 4 | 5 | 6 |

Finn regresjonslinjen og bruk den til å estimere karakteren ved 6 timers studietid.`,
      solution: `**Løsning:**

Vi plotter punktene og bruker GeoGebra til å finne regresjonslinjen.

I GeoGebra:
1. Skriv inn punktene som en liste: \`Punktliste = {(2,3), (4,4), (5,4), (7,5), (8,6)}\`
2. Bruk kommandoen: \`RegLin[Punktliste]\`

GeoGebra gir oss: $y = 0{,}47x + 2{,}2$

Ved 6 timers studietid: $y = 0{,}47 \\cdot 6 + 2{,}2 = 5{,}0$

**Svar:** Estimert karakter ved 6 timers studietid er ca. 5.`,
    },

    // Oppgave 1
    {
      id: '10-3-4-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-3-4-oppg-1',
        number: '1',
        type: 'interactive',
        tool: 'geogebra-graph',
        difficulty: 'medium',
        task: 'Bruk GeoGebra til å finne regresjonslinjen for dataene.',
        subTasks: [
          { label: 'a', task: 'Skriv inn punktene: (1, 2), (3, 5), (5, 7), (7, 10), (9, 11)', solution: 'Punktene plottes i koordinatsystemet' },
          { label: 'b', task: 'Finn regresjonslinjen med kommandoen RegLin[ ]', solution: '$y \\approx 1{,}15x + 0{,}9$' },
          { label: 'c', task: 'Bruk linjen til å estimere y-verdien når x = 6', solution: '$y \\approx 1{,}15 \\cdot 6 + 0{,}9 = 7{,}8$' },
        ],
        solution: 'b) y = 1,15x + 0,9  c) y = 7,8',
        hints: ['Skriv punktene som en liste i GeoGebra'],
        initialCommands: ['Liste1 = {(1,2), (3,5), (5,7), (7,10), (9,11)}', 'RegLin[Liste1]'],
        allowsUpload: true,
      },
    },

    // Korrelasjon
    {
      id: '10-3-4-korrelasjon',
      type: 'text',
      content: `## Korrelasjon

**Korrelasjonskoeffisienten** $r$ måler hvor godt dataene følger en lineær sammenheng:

- $r = 1$: Perfekt positiv korrelasjon (alle punkter på en stigende linje)
- $r = -1$: Perfekt negativ korrelasjon (alle punkter på en synkende linje)
- $r = 0$: Ingen lineær sammenheng

Generelt:
- $|r| > 0{,}7$: Sterk korrelasjon
- $0{,}4 < |r| < 0{,}7$: Moderat korrelasjon
- $|r| < 0{,}4$: Svak korrelasjon`,
    },

    // Eksempel 2
    {
      id: '10-3-4-ex-2',
      type: 'example',
      title: 'Eksempel 2: Tolke korrelasjon',
      problem: `Et datasett gir korrelasjonskoeffisient $r = 0{,}85$. Hva betyr dette?`,
      solution: `**Løsning:**

$r = 0{,}85$ betyr:
- Det er en **positiv korrelasjon** (r > 0) - når x øker, øker y
- Korrelasjonen er **sterk** (|r| > 0,7)
- Dataene følger ganske godt en lineær trend

**Men husk:** Korrelasjon betyr ikke nødvendigvis årsakssammenheng!`,
    },

    // Oppgave 2
    {
      id: '10-3-4-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-3-4-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beskriv korrelasjonen.',
        subTasks: [
          { label: 'a', task: '$r = 0{,}92$', solution: 'Sterk positiv korrelasjon', multipleChoiceOptions: ['Sterk positiv korrelasjon', 'Svak positiv korrelasjon', 'Sterk negativ korrelasjon', 'Moderat positiv korrelasjon'] },
          { label: 'b', task: '$r = -0{,}78$', solution: 'Sterk negativ korrelasjon', multipleChoiceOptions: ['Sterk negativ korrelasjon', 'Svak negativ korrelasjon', 'Sterk positiv korrelasjon', 'Moderat negativ korrelasjon'] },
          { label: 'c', task: '$r = 0{,}25$', solution: 'Svak positiv korrelasjon', multipleChoiceOptions: ['Svak positiv korrelasjon', 'Moderat positiv korrelasjon', 'Svak negativ korrelasjon', 'Ingen korrelasjon'] },
          { label: 'd', task: '$r = -0{,}55$', solution: 'Moderat negativ korrelasjon', multipleChoiceOptions: ['Moderat negativ korrelasjon', 'Svak negativ korrelasjon', 'Sterk negativ korrelasjon', 'Moderat positiv korrelasjon'] },
        ],
        solution: 'a) Sterk positiv  b) Sterk negativ  c) Svak positiv  d) Moderat negativ',
        hints: ['Se på fortegn og absoluttverdi'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 3
    {
      id: '10-3-4-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-3-4-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvilken type korrelasjon forventer du?',
        subTasks: [
          { label: 'a', task: 'Høyde og vekt hos voksne', solution: 'Positiv korrelasjon (høyere personer veier ofte mer)', multipleChoiceOptions: ['Positiv korrelasjon', 'Negativ korrelasjon', 'Ingen korrelasjon', 'Varierer'] },
          { label: 'b', task: 'Alder på bil og verdi', solution: 'Negativ korrelasjon (eldre biler er mindre verdt)', multipleChoiceOptions: ['Negativ korrelasjon', 'Positiv korrelasjon', 'Ingen korrelasjon', 'Varierer'] },
          { label: 'c', task: 'Temperatur og salg av is', solution: 'Positiv korrelasjon', multipleChoiceOptions: ['Positiv korrelasjon', 'Negativ korrelasjon', 'Ingen korrelasjon', 'Varierer'] },
          { label: 'd', task: 'Øvingstimer og antall feil på prøve', solution: 'Negativ korrelasjon', multipleChoiceOptions: ['Negativ korrelasjon', 'Positiv korrelasjon', 'Ingen korrelasjon', 'Varierer'] },
        ],
        solution: 'a) Positiv  b) Negativ  c) Positiv  d) Negativ',
        hints: ['Tenk på om variablene øker eller minker sammen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Bruke regresjon til prediksjon
    {
      id: '10-3-4-prediksjon',
      type: 'text',
      content: `## Bruke regresjon til prediksjon

Når vi har funnet en regresjonslinje, kan vi bruke den til å **estimere** verdier:

- **Interpolasjon:** Estimere verdier innenfor dataintervallet (relativt pålitelig)
- **Ekstrapolasjon:** Estimere verdier utenfor dataintervallet (mer usikkert)

**Viktig:** Regresjonslinjen er bare en modell. Jo lenger utenfor dataområdet vi går, desto mer usikker blir estimeringen.`,
    },

    // Oppgave 4
    {
      id: '10-3-4-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-3-4-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Data viser sammenhengen mellom antall ansatte og årlig omsetning (i millioner kr):',
        subTasks: [
          { label: 'a', task: '| Ansatte | 5 | 10 | 15 | 20 | 25 |\n| Omsetning | 2 | 5 | 7 | 10 | 13 |\n\nPlott punktene og finn regresjonslinjen i GeoGebra.', solution: '$y \\approx 0{,}55x - 0{,}5$' },
          { label: 'b', task: 'Estimer omsetningen for en bedrift med 18 ansatte.', solution: '$y \\approx 0{,}55 \\cdot 18 - 0{,}5 = 9{,}4$ millioner' },
          { label: 'c', task: 'Er det trygt å bruke modellen for å estimere for 100 ansatte? Begrunn.', solution: 'Nei, dette er ekstrapolasjon langt utenfor dataområdet. Sammenhengen holder kanskje ikke for store bedrifter.' },
        ],
        solution: 'a) y = 0,55x - 0,5  b) 9,4 mill  c) Nei, for mye ekstrapolasjon',
        hints: ['Vær forsiktig med ekstrapolasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 5
    {
      id: '10-3-4-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-3-4-oppg-5',
        number: '5',
        type: 'interactive',
        tool: 'geogebra-graph',
        difficulty: 'medium',
        task: 'Temperaturdata for en vårdag (kl. 6-18):',
        subTasks: [
          { label: 'a', task: '| Klokkeslett | 6 | 9 | 12 | 15 | 18 |\n| Temp (°C) | 5 | 10 | 16 | 18 | 14 |\n\nPlott punktene. Passer en rett linje godt?', solution: 'Nei, dataene følger en buet kurve (øker så synker)' },
          { label: 'b', task: 'Prøv andregradstilpasning med RegPoly[ , 2]', solution: 'Andregradsfunksjon passer bedre' },
          { label: 'c', task: 'Bruk modellen til å estimere temperaturen kl. 10.', solution: 'Ca. 12-13°C' },
        ],
        solution: 'a) Nei  b) Andregradsfunksjon passer  c) ca. 12-13°C',
        hints: ['Bruk RegPoly[liste, 2] for andregradstilpasning'],
        initialCommands: ['Liste1 = {(6,5), (9,10), (12,16), (15,18), (18,14)}'],
        allowsUpload: true,
      },
    },

    // Vurdere modellens kvalitet
    {
      id: '10-3-4-kvalitet',
      type: 'text',
      content: `## Vurdere modellens kvalitet

For å vurdere om regresjonsmodellen er god:

1. **Se på korrelasjonskoeffisienten** $r$ - jo nærmere $|r|$ er 1, desto bedre passer linjen
2. **Plot residualer** - avvikene fra linjen bør være tilfeldige, ikke følge et mønster
3. **Bruk sunn fornuft** - gir modellen mening i konteksten?`,
    },

    // Oppgave 6
    {
      id: '10-3-4-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-3-4-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'En regresjon gir $y = 2{,}5x + 10$ med $r = 0{,}95$.',
        subTasks: [
          { label: 'a', task: 'Er sammenhengen positiv eller negativ?', solution: 'Positiv (stigningstall 2,5 > 0)', multipleChoiceOptions: ['Positiv', 'Negativ', 'Ingen sammenheng', 'Kan ikke avgjøres'] },
          { label: 'b', task: 'Er modellen god? Begrunn.', solution: 'Ja, $r = 0{,}95$ er nær 1, sterk korrelasjon', multipleChoiceOptions: ['Ja, sterk korrelasjon', 'Nei, svak korrelasjon', 'Moderat korrelasjon', 'Kan ikke avgjøres'] },
          { label: 'c', task: 'Hva betyr konstantleddet 10?', solution: 'Når $x = 0$, er $y = 10$', multipleChoiceOptions: ['$y$-verdien når $x = 0$', 'Stigningstallet', 'Korrelasjonskoeffisienten', 'Gjennomsnittsverdien'] },
        ],
        solution: 'a) Positiv  b) Ja, sterk korrelasjon  c) y-verdien ved x=0',
        hints: ['Korrelasjonskoeffisienten viser hvor godt linjen passer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 7
    {
      id: '10-3-4-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-3-4-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenheng mellom pris og etterspørsel:',
        subTasks: [
          { label: 'a', task: '| Pris (kr) | 50 | 60 | 70 | 80 | 90 | 100 |\n| Solgte enheter | 200 | 180 | 150 | 130 | 100 | 80 |\n\nFinn regresjonslinjen.', solution: '$y \\approx -2{,}4x + 320$' },
          { label: 'b', task: 'Tolk stigningstallet i denne sammenhengen.', solution: 'For hver krone prisen øker, synker salget med ca. 2,4 enheter' },
          { label: 'c', task: 'Ved hvilken pris er etterspørselen null ifølge modellen?', solution: '$0 = -2{,}4x + 320 \\Rightarrow x \\approx 133$ kr' },
        ],
        solution: 'a) y = -2,4x + 320  b) Salget synker 2,4 per krone  c) ca. 133 kr',
        hints: ['Negativ korrelasjon: høyere pris gir lavere salg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 8
    {
      id: '10-3-4-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-3-4-oppg-8',
        number: '8',
        type: 'interactive',
        tool: 'geogebra-graph',
        difficulty: 'medium',
        task: 'Befolkningsdata for en by:',
        subTasks: [
          { label: 'a', task: '| År | 2000 | 2005 | 2010 | 2015 | 2020 |\n| Innbyggere (tusen) | 45 | 52 | 61 | 72 | 85 |\n\nFinn regresjonslinje og estimer befolkningen i 2025.', solution: 'Lineær: $y \\approx 2x - 3955$ gir 95 000 i 2025' },
          { label: 'b', task: 'Prøv også eksponentiell tilpasning. Hvilken modell passer best?', solution: 'Eksponentiell kan passe bedre for befolkningsvekst' },
        ],
        solution: 'a) ca. 95 000  b) Eksponentiell kan passe bedre',
        hints: ['Befolkningsvekst følger ofte eksponentiell vekst'],
        initialCommands: ['Liste1 = {(2000,45), (2005,52), (2010,61), (2015,72), (2020,85)}'],
        allowsUpload: true,
      },
    },

    // Oppgave 9
    {
      id: '10-3-4-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-3-4-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kritisk tenkning om regresjon:',
        subTasks: [
          { label: 'a', task: 'Det er sterk korrelasjon mellom iskremssalg og drukning. Betyr dette at is forårsaker drukning?', solution: 'Nei! Begge påvirkes av en tredje faktor (varmt vær). Korrelasjon betyr ikke årsakssammenheng.' },
          { label: 'b', task: 'Hvorfor kan det være farlig å ekstrapolere langt utenfor dataområdet?', solution: 'Sammenhengen kan endre seg. Lineær vekst holder sjelden i det uendelige.' },
          { label: 'c', task: 'Hva bør du alltid gjøre før du bruker en regresjonsmodell?', solution: 'Plotte dataene, sjekke at lineær modell passer, vurdere konteksten' },
        ],
        solution: 'a) Nei, korrelasjon er ikke årsak  b) Modellen gjelder kanskje ikke  c) Plotte og vurdere',
        hints: ['Tenk kritisk om sammenhenger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // Oppgave 10
    {
      id: '10-3-4-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-3-4-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Eget prosjekt: Samle inn data og analyser.',
        subTasks: [
          { label: 'a', task: 'Velg to variabler du tror henger sammen (f.eks. søvn og konsentrasjon, trening og humør).', solution: 'Egne data samles inn' },
          { label: 'b', task: 'Samle inn minst 10 datapunkter.', solution: 'Data registreres i tabell' },
          { label: 'c', task: 'Finn regresjonslinjen og korrelasjonskoeffisienten.', solution: 'Bruk GeoGebra eller kalkulator' },
          { label: 'd', task: 'Skriv en kort rapport der du tolker resultatene.', solution: 'Beskriv sammenheng, styrke, og begrensninger' },
        ],
        solution: 'Åpen oppgave - vurder analyse og tolkning',
        hints: ['Velg variabler som er enkle å måle'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_4_1: TextbookChapter = {
  id: '10-4-1',
  courseId: '10',
  chapterNumber: '4.1',
  title: "Pytagoras' setning",
  description: 'Praktiske anvendelser av Pytagoras setning og beregninger i trekanter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og argumentere for korleis geometri i planet kan brukast i samband med koordinatsystem',
    'utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei',
  ],
  content: [
    {
      id: '10-4-1-intro',
      type: 'text',
      content: `## Innledning

Pytagoras' setning er et av de viktigste verktøyene i geometri. Den ble oppdaget av den greske matematikeren Pytagoras for over 2500 år siden, men brukes fortsatt daglig av ingeniører, arkitekter, snekkere og mange andre.

I dette kapittelet skal vi se på hvordan vi kan bruke setningen til å løse praktiske problemer - fra å finne diagonaler i figurer til å beregne avstander i koordinatsystemet og i rommet.`,
    },
    {
      id: '10-4-1-def-1',
      type: 'definition',
      title: "Pytagoras' setning",
      content: `I en **rettvinklet trekant** gjelder:

$$a^2 + b^2 = c^2$$

der $c$ er **hypotenusen** (den lengste siden, som ligger motstatt den rette vinkelen) og $a$ og $b$ er **katetene** (de to sidene som danner den rette vinkelen).

**Omvendt Pytagoras:** Hvis $a^2 + b^2 = c^2$ for en trekant med sider $a$, $b$ og $c$ (der $c$ er lengst), så er trekanten rettvinklet.`,
    },
    {
      id: '10-4-1-note-1',
      type: 'note',
      content: `**Huskeregel:** Hypotenusen er alltid den lengste siden i en rettvinklet trekant. Den ligger alltid motstatt den rette vinkelen (90 graders vinkelen).`,
    },
    {
      id: '10-4-1-ex-1',
      type: 'example',
      title: 'Eksempel 1: Finne hypotenusen',
      problem: 'En rettvinklet trekant har kateter på 6 cm og 8 cm. Finn hypotenusen.',
      solution: `**Løsning:**

Vi bruker Pytagoras' setning med $a = 6$ og $b = 8$:

$c^2 = a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100$

$c = \\sqrt{100} = 10$ cm

**Svar:** Hypotenusen er 10 cm.`,
    },
    {
      id: '10-4-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn hypotenusen i de rettvinklede trekantene.',
        subTasks: [
          { label: 'a', task: 'Katetene er 3 cm og 4 cm.', solution: '$c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$ cm', answer: 5 },
          { label: 'b', task: 'Katetene er 5 cm og 12 cm.', solution: '$c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm', answer: 13 },
          { label: 'c', task: 'Katetene er 8 cm og 15 cm.', solution: '$c = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$ cm', answer: 17 },
          { label: 'd', task: 'Katetene er 9 cm og 12 cm.', solution: '$c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ cm', answer: 15 },
        ],
        solution: 'a) 5 cm, b) 13 cm, c) 17 cm, d) 15 cm',
        hints: ['Bruk formelen $c^2 = a^2 + b^2$', 'Ta kvadratroten på begge sider for å finne $c$'],
      },
    },
    {
      id: '10-4-1-ex-2',
      type: 'example',
      title: 'Eksempel 2: Finne en katet',
      problem: 'En rettvinklet trekant har hypotenus 25 cm og den ene kateten er 7 cm. Finn den andre kateten.',
      solution: `**Løsning:**

Vi kjenner $c = 25$ og $a = 7$, og skal finne $b$.

$a^2 + b^2 = c^2$
$7^2 + b^2 = 25^2$
$49 + b^2 = 625$
$b^2 = 625 - 49 = 576$
$b = \\sqrt{576} = 24$ cm

**Svar:** Den andre kateten er 24 cm.`,
    },
    {
      id: '10-4-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn den ukjente kateten i de rettvinklede trekantene.',
        subTasks: [
          { label: 'a', task: 'Hypotenus 13 cm, en katet 5 cm.', solution: '$b = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm', answer: 12 },
          { label: 'b', task: 'Hypotenus 17 cm, en katet 8 cm.', solution: '$b = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$ cm', answer: 15 },
          { label: 'c', task: 'Hypotenus 20 cm, en katet 16 cm.', solution: '$b = \\sqrt{20^2 - 16^2} = \\sqrt{400 - 256} = \\sqrt{144} = 12$ cm', answer: 12 },
          { label: 'd', task: 'Hypotenus 26 cm, en katet 10 cm.', solution: '$b = \\sqrt{26^2 - 10^2} = \\sqrt{676 - 100} = \\sqrt{576} = 24$ cm', answer: 24 },
        ],
        solution: 'a) 12 cm, b) 15 cm, c) 12 cm, d) 24 cm',
        hints: ['Omform til $b^2 = c^2 - a^2$', 'Trekk fra den kjente kateten fra hypotenusen'],
      },
    },
    {
      id: '10-4-1-def-2',
      type: 'definition',
      title: 'Pytagoreiske trippel',
      content: `Et **pytagoreisk trippel** er tre hele tall $(a, b, c)$ som oppfyller $a^2 + b^2 = c^2$.

De vanligste triplene er:
- $(3, 4, 5)$ og multipler: $(6, 8, 10)$, $(9, 12, 15)$, ...
- $(5, 12, 13)$ og multipler: $(10, 24, 26)$, ...
- $(8, 15, 17)$
- $(7, 24, 25)$

A kjenne igjen disse kan spare tid på eksamener!`,
    },
    {
      id: '10-4-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjor om trekanten med de gitte sidelengdene er rettvinklet.',
        subTasks: [
          { label: 'a', task: 'Sider: 6, 8 og 10 cm', solution: '$6^2 + 8^2 = 36 + 64 = 100 = 10^2$ \\checkmark Ja, den er rettvinklet.', multipleChoiceOptions: ['Ja, den er rettvinklet', 'Nei, den er ikke rettvinklet'] },
          { label: 'b', task: 'Sider: 5, 7 og 9 cm', solution: '$5^2 + 7^2 = 25 + 49 = 74 \\neq 81 = 9^2$. Nei, den er ikke rettvinklet.', multipleChoiceOptions: ['Nei, den er ikke rettvinklet', 'Ja, den er rettvinklet'] },
          { label: 'c', task: 'Sider: 9, 40 og 41 cm', solution: '$9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$ \\checkmark Ja, den er rettvinklet.', multipleChoiceOptions: ['Ja, den er rettvinklet', 'Nei, den er ikke rettvinklet'] },
          { label: 'd', task: 'Sider: 11, 60 og 61 cm', solution: '$11^2 + 60^2 = 121 + 3600 = 3721 = 61^2$ \\checkmark Ja, den er rettvinklet.', multipleChoiceOptions: ['Ja, den er rettvinklet', 'Nei, den er ikke rettvinklet'] },
        ],
        solution: 'a) Ja, b) Nei, c) Ja, d) Ja',
        hints: ['Sjekk om summen av kvadratene til de to minste sidene er lik kvadratet av den største'],
      },
    },
    {
      id: '10-4-1-ex-3',
      type: 'example',
      title: 'Eksempel 3: Diagonal i rektangel',
      problem: 'Et rektangel har sidelengder 12 m og 5 m. Finn diagonalen.',
      solution: `**Løsning:**

Diagonalen deler rektangelet i to rettvinklede trekanter. Sidene i rektangelet blir katetene, og diagonalen blir hypotenusen.

$d^2 = 12^2 + 5^2 = 144 + 25 = 169$

$d = \\sqrt{169} = 13$ m

**Svar:** Diagonalen er 13 m.`,
    },
    {
      id: '10-4-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn diagonalen i rektanglene.',
        subTasks: [
          { label: 'a', task: 'Sider 9 cm og 40 cm.', solution: '$d = \\sqrt{9^2 + 40^2} = \\sqrt{81 + 1600} = \\sqrt{1681} = 41$ cm', answer: 41 },
          { label: 'b', task: 'Sider 20 m og 21 m.', solution: '$d = \\sqrt{20^2 + 21^2} = \\sqrt{400 + 441} = \\sqrt{841} = 29$ m', answer: 29 },
          { label: 'c', task: 'Sider 7 cm og 24 cm.', solution: '$d = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$ cm', answer: 25 },
        ],
        solution: 'a) 41 cm, b) 29 m, c) 25 cm',
        hints: ['Tegn rektangelet og se at diagonalen danner en rettvinklet trekant'],
      },
    },
    {
      id: '10-4-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et kvadrat har diagonal 14 cm. Finn sidelengden.',
        solution: `I et kvadrat med side $s$ er diagonalen $d = s\\sqrt{2}$.

$s\\sqrt{2} = 14$
$s = \\frac{14}{\\sqrt{2}} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2} \\approx 9.90$ cm

Alternativt: $2s^2 = 14^2 = 196$, sa $s^2 = 98$, $s = \\sqrt{98} = 7\\sqrt{2}$ cm.`,
        hints: ['I et kvadrat er begge katetene like lange', 'Bruk $s^2 + s^2 = d^2$, altsA $2s^2 = d^2$'],
        multipleChoiceOptions: ['$7\\sqrt{2} \\approx 9{,}90$ cm', '$7$ cm', '$14\\sqrt{2} \\approx 19{,}80$ cm', '$\\sqrt{98} \\approx 9{,}90$ m'],
      },
    },
    {
      id: '10-4-1-ex-4',
      type: 'example',
      title: 'Eksempel 4: Avstand i koordinatsystemet',
      problem: 'Finn avstanden mellom punktene $A(1, 2)$ og $B(5, 5)$.',
      solution: `**Løsning:**

Avstanden mellom to punkter i koordinatsystemet kan finnes med Pytagoras.

Horisontal avstand: $\\Delta x = 5 - 1 = 4$
Vertikal avstand: $\\Delta y = 5 - 2 = 3$

$d = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$

**Svar:** Avstanden er 5 lengdeenheter.`,
    },
    {
      id: '10-4-1-def-3',
      type: 'definition',
      title: 'Avstandsformelen',
      content: `Avstanden mellom to punkter $A(x_1, y_1)$ og $B(x_2, y_2)$ i koordinatsystemet er:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

Dette er en direkte anvendelse av Pytagoras' setning.`,
    },
    {
      id: '10-4-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn avstanden mellom punktene.',
        subTasks: [
          { label: 'a', task: '$A(0, 0)$ og $B(6, 8)$', solution: '$d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$', answer: 10 },
          { label: 'b', task: '$P(2, 3)$ og $Q(7, 15)$', solution: '$d = \\sqrt{(7-2)^2 + (15-3)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$', answer: 13 },
          { label: 'c', task: '$R(-1, 4)$ og $S(5, -4)$', solution: '$d = \\sqrt{(5-(-1))^2 + (-4-4)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$', answer: 10 },
          { label: 'd', task: '$M(-3, -2)$ og $N(5, 4)$', solution: '$d = \\sqrt{(5-(-3))^2 + (4-(-2))^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$', answer: 10 },
        ],
        solution: 'a) 10, b) 13, c) 10, d) 10',
        hints: ['Bruk avstandsformelen', 'Vær noyaktig med fortegnene'],
      },
    },
    {
      id: '10-4-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En likesidet trekant har sidelengde 10 cm. Finn høyden.',
        solution: `Hoyden i en likesidet trekant deler grunnlinjen i to like deler.

Vi far en rettvinklet trekant med:
- Hypotenus = 10 cm (siden)
- En katet = 5 cm (halve grunnlinjen)
- Den andre kateten = høyden $h$

$h^2 + 5^2 = 10^2$
$h^2 = 100 - 25 = 75$
$h = \\sqrt{75} = 5\\sqrt{3} \\approx 8.66$ cm`,
        hints: ['Tegn trekanten og høyden', 'Hoyden star vinkelrett på grunnlinjen og halverer den'],
        multipleChoiceOptions: ['$5\\sqrt{3} \\approx 8{,}66$ cm', '$10\\sqrt{3} \\approx 17{,}32$ cm', '$5$ cm', '$\\sqrt{75} \\approx 8{,}66$ m'],
      },
    },
    {
      id: '10-4-1-ex-5',
      type: 'example',
      title: 'Eksempel 5: Romdiagonal',
      problem: 'En eske har dimensjoner 3 cm x 4 cm x 12 cm. Finn romdiagonalen.',
      solution: `**Løsning:**

**Metode 1: To steg**
1. Finn forst diagonalen i bunnen: $d_1 = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$ cm
2. Bruk denne som katet med høyden: $D = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = 13$ cm

**Metode 2: Direkte formel**
$D = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$ cm

**Svar:** Romdiagonalen er 13 cm.`,
    },
    {
      id: '10-4-1-def-4',
      type: 'definition',
      title: 'Romdiagonal',
      content: `I et rett prisme (boks) med sider $a$, $b$ og $c$ er romdiagonalen:

$$D = \\sqrt{a^2 + b^2 + c^2}$$

Dette er Pytagoras' setning utvidet til tre dimensjoner.`,
    },
    {
      id: '10-4-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn romdiagonalen.',
        subTasks: [
          { label: 'a', task: 'En kube med side 6 cm.', solution: '$D = \\sqrt{6^2 + 6^2 + 6^2} = \\sqrt{108} = 6\\sqrt{3} \\approx 10.39$ cm', multipleChoiceOptions: ['$6\\sqrt{3} \\approx 10{,}39$ cm', '$6\\sqrt{2} \\approx 8{,}49$ cm', '$18$ cm', '$12$ cm'] },
          { label: 'b', task: 'En eske med dimensjoner 2 cm x 3 cm x 6 cm.', solution: '$D = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$ cm', answer: 7 },
          { label: 'c', task: 'En eske med dimensjoner 1 m x 2 m x 2 m.', solution: '$D = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$ m', answer: 3 },
        ],
        solution: 'a) $6\\sqrt{3} \\approx 10.39$ cm, b) 7 cm, c) 3 m',
        hints: ['Bruk formelen $D = \\sqrt{a^2 + b^2 + c^2}$'],
      },
    },
    {
      id: '10-4-1-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'En stige er 5 meter lang. Den lener mot en vegg og bunnen av stigen star 3 meter fra veggen. Hvor hoyt opp på veggen nar stigen?',
        solution: `La høyden på veggen være $h$.

$h^2 + 3^2 = 5^2$
$h^2 = 25 - 9 = 16$
$h = 4$ m

Stigen nar 4 meter opp på veggen.`,
        hints: ['Tegn situasjonen - stigen er hypotenusen', 'Bakken og veggen er de to katetene'],
        answer: 4,
      },
    },
    {
      id: '10-4-1-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En 55-tommers TV har sideforhold 16:9. Finn bredden og høyden til skjermen.',
        solution: `La bredden være $16k$ og høyden $9k$ for en konstant $k$.

Diagonalen er 55 tommer:
$(16k)^2 + (9k)^2 = 55^2$
$256k^2 + 81k^2 = 3025$
$337k^2 = 3025$
$k^2 = \\frac{3025}{337} \\approx 8.976$
$k \\approx 2.996$

Bredde: $16 \\cdot 2.996 \\approx 47.9$ tommer
Hoyde: $9 \\cdot 2.996 \\approx 27.0$ tommer`,
        hints: ['Sett bredde = 16k og høyde = 9k', 'Bruk Pytagoras til å finne k'],
      },
    },
    {
      id: '10-4-1-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To skip forlater samme havn. Det ene seiler 30 km mot nord, det andre seiler 40 km mot ost. Hvor langt fra hverandre er skipene?',
        solution: `Skipene har seilt i retninger som star vinkelrett på hverandre (nord og ost).

Vi kan bruke Pytagoras:
$d = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50$ km

Skipene er 50 km fra hverandre.`,
        hints: ['Nord og ost er vinkelrette retninger', 'Tegn situasjonen i et koordinatsystem'],
      },
    },
    {
      id: '10-4-1-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-4-1-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En rektangulaer fotballbane er 100 m lang og 64 m bred. Hvor langt er det a ga på skra fra det ene hjornet til det motstatte?',
        subTasks: [
          { label: 'a', task: 'Finn diagonalen i banen.', solution: '$d = \\sqrt{100^2 + 64^2} = \\sqrt{10000 + 4096} = \\sqrt{14096} \\approx 118.7$ m' },
          { label: 'b', task: 'Hvor mye kortere er det a ga diagonalt sammenlignet med a ga langs to sider?', solution: 'Langs sidene: $100 + 64 = 164$ m. Besparelse: $164 - 118.7 = 45.3$ m' },
        ],
        solution: 'a) Ca. 118.7 m, b) Ca. 45.3 m kortere',
        hints: ['Diagonalen danner en rettvinklet trekant med sidene'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_4_2: TextbookChapter = {
  id: '10-4-2',
  courseId: '10',
  chapterNumber: '4.2',
  title: 'Trigonometri',
  description: 'Sinus, cosinus og tangens i rettvinklede trekanter.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke trigonometri til a berekne lengder, vinklar og areal i vilkarlege trekantar',
    'utforske eigenskapar ved to- og tredimensjonale figurar og beskrive dei',
  ],
  content: [
    {
      id: '10-4-2-intro',
      type: 'text',
      content: `## Innledning

Trigonometri betyr "trekantmaling" og handler om forholdet mellom vinkler og sider i trekanter. Med trigonometri kan vi finne ukjente sider og vinkler i trekanter - noe som har utallige praktiske anvendelser.

I dette kapittelet larer vi om de tre trigonometriske forholdene sinus, cosinus og tangens, og hvordan vi bruker dem til å løse problemer.`,
    },
    {
      id: '10-4-2-trigonometri-bilde',
      type: 'image',
      src: '/images/10-klasse/trigonometri-intro.svg',
      alt: 'Introduksjon til trigonometri med rettvinklet trekant',
      caption: 'Trigonometri i rettvinklede trekanter - sinus, cosinus og tangens',
    },
    {
      id: '10-4-2-def-1',
      type: 'definition',
      title: 'Trigonometriske forhold',
      content: `I en rettvinklet trekant med en spiss vinkel $v$:

$$\\sin v = \\frac{\\text{motstAende katet}}{\\text{hypotenus}}$$

$$\\cos v = \\frac{\\text{hosliggende katet}}{\\text{hypotenus}}$$

$$\\tan v = \\frac{\\text{motstAende katet}}{\\text{hosliggende katet}}$$

**Huskeregel: SOH-CAH-TOA**
- **S**inus = **O**pposite / **H**ypotenuse
- **C**osine = **A**djacent / **H**ypotenuse
- **T**angent = **O**pposite / **A**djacent`,
    },
    {
      id: '10-4-2-note-1',
      type: 'note',
      content: `**Viktig:** "Motstående" og "hosliggende" er alltid i forhold til vinkelen vi ser pa!
- **Motstående katet** er siden som ligger rett overfor vinkelen
- **Hosliggende katet** er siden som ligger ved siden av vinkelen (men ikke hypotenusen)`,
    },
    {
      id: '10-4-2-ex-1',
      type: 'example',
      title: 'Eksempel 1: Finne en side med sinus',
      problem: 'En rettvinklet trekant har hypotenus 10 cm og en vinkel på 30 grader. Finn motstående katet.',
      solution: `**Løsning:**

Vi skal finne motstående katet og kjenner hypotenusen. Da bruker vi sinus:

$\\sin 30° = \\frac{\\text{motstAende}}{\\text{hypotenus}}$

$\\sin 30° = \\frac{a}{10}$

$a = 10 \\cdot \\sin 30° = 10 \\cdot 0.5 = 5$ cm

**Svar:** Motstående katet er 5 cm.`,
    },
    {
      id: '10-4-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk sinus til å finne motstående katet.',
        subTasks: [
          { label: 'a', task: 'Hypotenus 20 cm, vinkel 30 grader.', solution: '$a = 20 \\cdot \\sin 30° = 20 \\cdot 0.5 = 10$ cm', answer: 10 },
          { label: 'b', task: 'Hypotenus 15 cm, vinkel 45 grader.', solution: '$a = 15 \\cdot \\sin 45° = 15 \\cdot \\frac{\\sqrt{2}}{2} \\approx 10.61$ cm', multipleChoiceOptions: ['$10{,}61$ cm', '$7{,}5$ cm', '$15$ cm', '$21{,}21$ cm'] },
          { label: 'c', task: 'Hypotenus 12 cm, vinkel 60 grader.', solution: '$a = 12 \\cdot \\sin 60° = 12 \\cdot \\frac{\\sqrt{3}}{2} \\approx 10.39$ cm', multipleChoiceOptions: ['$10{,}39$ cm', '$6$ cm', '$6\\sqrt{3}$ cm', '$24$ cm'] },
          { label: 'd', task: 'Hypotenus 25 cm, vinkel 53 grader.', solution: '$a = 25 \\cdot \\sin 53° \\approx 25 \\cdot 0.799 \\approx 19.97$ cm', multipleChoiceOptions: ['$19{,}97$ cm', '$15{,}04$ cm', '$25$ cm', '$12{,}5$ cm'] },
        ],
        solution: 'a) 10 cm, b) ca. 10.61 cm, c) ca. 10.39 cm, d) ca. 20 cm',
        hints: ['$\\sin v = \\frac{\\text{motstAende}}{\\text{hypotenus}}$, sa motstAende = hypotenus $\\cdot \\sin v$'],
      },
    },
    {
      id: '10-4-2-ex-2',
      type: 'example',
      title: 'Eksempel 2: Finne en side med cosinus',
      problem: 'En rettvinklet trekant har hypotenus 10 cm og en vinkel på 30 grader. Finn hosliggende katet.',
      solution: `**Løsning:**

Vi skal finne hosliggende katet og kjenner hypotenusen. Da bruker vi cosinus:

$\\cos 30° = \\frac{\\text{hosliggende}}{\\text{hypotenus}}$

$\\cos 30° = \\frac{b}{10}$

$b = 10 \\cdot \\cos 30° = 10 \\cdot \\frac{\\sqrt{3}}{2} \\approx 8.66$ cm

**Svar:** Hosliggende katet er ca. 8.66 cm.`,
    },
    {
      id: '10-4-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk cosinus til å finne hosliggende katet.',
        subTasks: [
          { label: 'a', task: 'Hypotenus 16 cm, vinkel 60 grader.', solution: '$b = 16 \\cdot \\cos 60° = 16 \\cdot 0.5 = 8$ cm', answer: 8 },
          { label: 'b', task: 'Hypotenus 20 cm, vinkel 45 grader.', solution: '$b = 20 \\cdot \\cos 45° = 20 \\cdot \\frac{\\sqrt{2}}{2} \\approx 14.14$ cm', multipleChoiceOptions: ['$14{,}14$ cm', '$10$ cm', '$20$ cm', '$28{,}28$ cm'] },
          { label: 'c', task: 'Hypotenus 18 cm, vinkel 37 grader.', solution: '$b = 18 \\cdot \\cos 37° \\approx 18 \\cdot 0.799 \\approx 14.38$ cm', multipleChoiceOptions: ['$14{,}38$ cm', '$10{,}83$ cm', '$9$ cm', '$18$ cm'] },
          { label: 'd', task: 'Hypotenus 30 cm, vinkel 70 grader.', solution: '$b = 30 \\cdot \\cos 70° \\approx 30 \\cdot 0.342 \\approx 10.26$ cm', multipleChoiceOptions: ['$10{,}26$ cm', '$28{,}19$ cm', '$15$ cm', '$30$ cm'] },
        ],
        solution: 'a) 8 cm, b) ca. 14.14 cm, c) ca. 14.38 cm, d) ca. 10.26 cm',
        hints: ['$\\cos v = \\frac{\\text{hosliggende}}{\\text{hypotenus}}$, sa hosliggende = hypotenus $\\cdot \\cos v$'],
      },
    },
    {
      id: '10-4-2-ex-3',
      type: 'example',
      title: 'Eksempel 3: Finne en side med tangens',
      problem: 'En rettvinklet trekant har hosliggende katet 8 cm og vinkel 40 grader. Finn motstående katet.',
      solution: `**Løsning:**

Vi kjenner hosliggende katet og skal finne motstående. Da bruker vi tangens:

$\\tan 40° = \\frac{\\text{motstAende}}{\\text{hosliggende}}$

$\\tan 40° = \\frac{a}{8}$

$a = 8 \\cdot \\tan 40° \\approx 8 \\cdot 0.839 \\approx 6.71$ cm

**Svar:** Motstående katet er ca. 6.71 cm.`,
    },
    {
      id: '10-4-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk tangens til å finne motstående katet.',
        subTasks: [
          { label: 'a', task: 'Hosliggende katet 12 cm, vinkel 45 grader.', solution: '$a = 12 \\cdot \\tan 45° = 12 \\cdot 1 = 12$ cm', answer: 12 },
          { label: 'b', task: 'Hosliggende katet 10 cm, vinkel 30 grader.', solution: '$a = 10 \\cdot \\tan 30° = 10 \\cdot \\frac{1}{\\sqrt{3}} \\approx 5.77$ cm', multipleChoiceOptions: ['$5{,}77$ cm', '$17{,}32$ cm', '$10$ cm', '$5$ cm'] },
          { label: 'c', task: 'Hosliggende katet 15 cm, vinkel 55 grader.', solution: '$a = 15 \\cdot \\tan 55° \\approx 15 \\cdot 1.428 \\approx 21.42$ cm', multipleChoiceOptions: ['$21{,}42$ cm', '$10{,}50$ cm', '$15$ cm', '$30$ cm'] },
          { label: 'd', task: 'Hosliggende katet 25 cm, vinkel 20 grader.', solution: '$a = 25 \\cdot \\tan 20° \\approx 25 \\cdot 0.364 \\approx 9.10$ cm', multipleChoiceOptions: ['$9{,}10$ cm', '$68{,}74$ cm', '$25$ cm', '$12{,}5$ cm'] },
        ],
        solution: 'a) 12 cm, b) ca. 5.77 cm, c) ca. 21.42 cm, d) ca. 9.10 cm',
        hints: ['$\\tan v = \\frac{\\text{motstAende}}{\\text{hosliggende}}$, sa motstAende = hosliggende $\\cdot \\tan v$'],
      },
    },
    {
      id: '10-4-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn hypotenusen nar du kjenner en katet og en vinkel.',
        subTasks: [
          { label: 'a', task: 'Motstående katet 6 cm, vinkel 30 grader.', solution: '$c = \\frac{6}{\\sin 30°} = \\frac{6}{0.5} = 12$ cm', answer: 12 },
          { label: 'b', task: 'Hosliggende katet 9 cm, vinkel 45 grader.', solution: '$c = \\frac{9}{\\cos 45°} = \\frac{9}{\\frac{\\sqrt{2}}{2}} \\approx 12.73$ cm', multipleChoiceOptions: ['$12{,}73$ cm', '$6{,}36$ cm', '$9$ cm', '$18$ cm'] },
          { label: 'c', task: 'Motstående katet 10 cm, vinkel 50 grader.', solution: '$c = \\frac{10}{\\sin 50°} \\approx \\frac{10}{0.766} \\approx 13.05$ cm', multipleChoiceOptions: ['$13{,}05$ cm', '$7{,}66$ cm', '$10$ cm', '$20$ cm'] },
          { label: 'd', task: 'Hosliggende katet 14 cm, vinkel 35 grader.', solution: '$c = \\frac{14}{\\cos 35°} \\approx \\frac{14}{0.819} \\approx 17.09$ cm', multipleChoiceOptions: ['$17{,}09$ cm', '$11{,}47$ cm', '$14$ cm', '$28$ cm'] },
        ],
        solution: 'a) 12 cm, b) ca. 12.73 cm, c) ca. 13.05 cm, d) ca. 17.09 cm',
        hints: ['Snu på formelen: hypotenus = katet / sin v (eller cos v)'],
      },
    },
    {
      id: '10-4-2-def-2',
      type: 'definition',
      title: 'Inverse trigonometriske funksjoner',
      content: `For å finne en vinkel nar vi kjenner sidene, bruker vi inverse funksjoner:

$$v = \\arcsin\\left(\\frac{\\text{motstAende}}{\\text{hypotenus}}\\right) = \\sin^{-1}\\left(\\frac{\\text{motstAende}}{\\text{hypotenus}}\\right)$$

$$v = \\arccos\\left(\\frac{\\text{hosliggende}}{\\text{hypotenus}}\\right) = \\cos^{-1}\\left(\\frac{\\text{hosliggende}}{\\text{hypotenus}}\\right)$$

$$v = \\arctan\\left(\\frac{\\text{motstAende}}{\\text{hosliggende}}\\right) = \\tan^{-1}\\left(\\frac{\\text{motstAende}}{\\text{hosliggende}}\\right)$$

Pa kalkulatoren trykker du som regel "shift" eller "2nd" for sinus/cosinus/tangens, eller "sin$^{-1}$".`,
    },
    {
      id: '10-4-2-ex-4',
      type: 'example',
      title: 'Eksempel 4: Finne en vinkel',
      problem: 'En rettvinklet trekant har kateter 5 cm og 12 cm. Finn de spisse vinklene.',
      solution: `**Løsning:**

Vi kan bruke tangens til å finne en av vinklene:

$\\tan v = \\frac{5}{12} \\approx 0.417$

$v = \\arctan(0.417) \\approx 22.6°$

Den andre spisse vinkelen er:
$90° - 22.6° = 67.4°$

**Kontroll:** $\\tan 67.4° = \\frac{12}{5} = 2.4$ \\checkmark

**Svar:** Vinklene er ca. 22.6 grader og 67.4 grader.`,
    },
    {
      id: '10-4-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den spisse vinkelen.',
        subTasks: [
          { label: 'a', task: 'Kateter 3 cm og 4 cm. Finn den minste vinkelen.', solution: '$v = \\arctan\\left(\\frac{3}{4}\\right) = \\arctan(0.75) \\approx 36.9°$', multipleChoiceOptions: ['$36{,}9°$', '$53{,}1°$', '$45°$', '$30°$'] },
          { label: 'b', task: 'Motstående katet 7 cm, hypotenus 10 cm.', solution: '$v = \\arcsin\\left(\\frac{7}{10}\\right) = \\arcsin(0.7) \\approx 44.4°$', multipleChoiceOptions: ['$44{,}4°$', '$45{,}6°$', '$35°$', '$70°$'] },
          { label: 'c', task: 'Hosliggende katet 8 cm, hypotenus 15 cm.', solution: '$v = \\arccos\\left(\\frac{8}{15}\\right) \\approx \\arccos(0.533) \\approx 57.8°$', multipleChoiceOptions: ['$57{,}8°$', '$32{,}2°$', '$53{,}3°$', '$60°$'] },
          { label: 'd', task: 'Kateter 6 cm og 6 cm. Finn vinklene.', solution: '$v = \\arctan(1) = 45°$. Begge spisse vinkler er 45°.', answer: 45 },
        ],
        solution: 'a) ca. 36.9 grader, b) ca. 44.4 grader, c) ca. 57.8 grader, d) 45 grader',
        hints: ['Velg riktig trigonometrisk funksjon basert på hvilke sider du kjenner'],
      },
    },
    {
      id: '10-4-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn alle ukjente sider og vinkler i trekanten.',
        subTasks: [
          { label: 'a', task: 'Rettvinklet trekant med hypotenus 20 cm og en vinkel på 35 grader.', solution: 'Motstående: $20 \\cdot \\sin 35° \\approx 11.47$ cm. Hosliggende: $20 \\cdot \\cos 35° \\approx 16.38$ cm. Tredje vinkel: $90° - 35° = 55°$', multipleChoiceOptions: ['Sider: $11{,}47$ cm, $16{,}38$ cm. Vinkel: $55°$', 'Sider: $10$ cm, $17{,}32$ cm. Vinkel: $60°$', 'Sider: $14{,}14$ cm, $14{,}14$ cm. Vinkel: $45°$', 'Sider: $7$ cm, $18{,}73$ cm. Vinkel: $70°$'] },
          { label: 'b', task: 'Rettvinklet trekant med kateter 9 cm og 12 cm.', solution: 'Hypotenus: $\\sqrt{81+144} = 15$ cm. Vinkler: $\\arctan(9/12) \\approx 36.9°$ og $\\arctan(12/9) \\approx 53.1°$', multipleChoiceOptions: ['Hypotenus: $15$ cm. Vinkler: $36{,}9°$ og $53{,}1°$', 'Hypotenus: $21$ cm. Vinkler: $45°$ og $45°$', 'Hypotenus: $15$ cm. Vinkler: $30°$ og $60°$', 'Hypotenus: $10{,}5$ cm. Vinkler: $40°$ og $50°$'] },
        ],
        solution: 'a) Sider: ca. 11.47 cm, 16.38 cm, 20 cm. Vinkler: 35, 55, 90 grader. b) Sider: 9 cm, 12 cm, 15 cm. Vinkler: ca. 36.9, 53.1, 90 grader.',
        hints: ['Bruk summen av vinkler i en trekant = 180 grader', 'Bruk Pytagoras for å finne hypotenusen'],
      },
    },
    {
      id: '10-4-2-ex-5',
      type: 'example',
      title: 'Eksempel 5: Praktisk anvendelse - stige',
      problem: 'En stige er 6 meter lang og danner en vinkel på 70 grader med bakken. Hvor hoyt opp på veggen rekker stigen?',
      solution: `**Løsning:**

Tegn situasjonen: Stigen er hypotenusen, veggen er motstående katet.

$\\sin 70° = \\frac{h}{6}$

$h = 6 \\cdot \\sin 70° \\approx 6 \\cdot 0.940 \\approx 5.64$ m

**Svar:** Stigen rekker ca. 5.64 meter opp på veggen.`,
    },
    {
      id: '10-4-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En stige på 8 meter lener mot en vegg.',
        subTasks: [
          { label: 'a', task: 'Hvis vinkelen med bakken er 65 grader, hvor hoyt opp på veggen rekker stigen?', solution: '$h = 8 \\cdot \\sin 65° \\approx 7.25$ m', multipleChoiceOptions: ['$7{,}25$ m', '$3{,}38$ m', '$8$ m', '$4$ m'] },
          { label: 'b', task: 'Hvor langt fra veggen star bunnen av stigen?', solution: '$d = 8 \\cdot \\cos 65° \\approx 3.38$ m', multipleChoiceOptions: ['$3{,}38$ m', '$7{,}25$ m', '$4$ m', '$8$ m'] },
          { label: 'c', task: 'Av sikkerhetshensyn skal vinkelen være mellom 70 og 75 grader. Gi intervallet for hvor hoyt stigen kan na.', solution: 'Ved 70°: $h = 8 \\cdot \\sin 70° \\approx 7.52$ m. Ved 75°: $h = 8 \\cdot \\sin 75° \\approx 7.73$ m. Intervall: 7.52 - 7.73 m', multipleChoiceOptions: ['$7{,}52$ m - $7{,}73$ m', '$6{,}93$ m - $7{,}25$ m', '$7{,}73$ m - $8{,}00$ m', '$7{,}00$ m - $7{,}52$ m'] },
        ],
        solution: 'a) ca. 7.25 m, b) ca. 3.38 m, c) mellom 7.52 m og 7.73 m',
        hints: ['Hoyden på veggen er motstående katet', 'Avstanden fra veggen er hosliggende katet'],
      },
    },
    {
      id: '10-4-2-def-3',
      type: 'definition',
      title: 'Elevasjonsvinkel og depressjonsvinkel',
      content: `- **Elevasjonsvinkel:** Vinkelen opp fra horisontalplanet nar vi ser på noe over oss.
- **Depressjonsvinkel:** Vinkelen ned fra horisontalplanet nar vi ser på noe under oss.

Begge vinklene males fra det horisontale planet (vannrett linje).`,
    },
    {
      id: '10-4-2-ex-6',
      type: 'example',
      title: 'Eksempel 6: Elevasjonsvinkel',
      problem: 'Fra et punkt på bakken er elevasjonsvinkelen til toppen av et tarn 35 grader. Avstanden til tarnets fot er 50 meter. Finn tarnets høyde.',
      solution: `**Løsning:**

Vi star 50 m fra tarnet (hosliggende katet) og skal finne høyden (motstående katet).

$\\tan 35° = \\frac{h}{50}$

$h = 50 \\cdot \\tan 35° \\approx 50 \\cdot 0.700 \\approx 35$ m

**Svar:** Tarnet er ca. 35 meter hoyt.`,
    },
    {
      id: '10-4-2-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Los oppgavene om elevasjonsvinkler.',
        subTasks: [
          { label: 'a', task: 'Fra 80 m avstand er elevasjonsvinkelen til en fjelltopp 25 grader. Finn høyden over observasjonspunktet.', solution: '$h = 80 \\cdot \\tan 25° \\approx 37.3$ m', multipleChoiceOptions: ['$37{,}3$ m', '$74{,}6$ m', '$80$ m', '$25$ m'] },
          { label: 'b', task: 'Et tre kaster skygge på 15 m nar solens elevasjonsvinkel er 40 grader. Finn treets høyde.', solution: '$h = 15 \\cdot \\tan 40° \\approx 12.6$ m', multipleChoiceOptions: ['$12{,}6$ m', '$11{,}5$ m', '$15$ m', '$17{,}9$ m'] },
          { label: 'c', task: 'En drage flyr i 100 m høyde. Snoren er 130 m lang. Finn elevasjonsvinkelen.', solution: '$v = \\arcsin\\left(\\frac{100}{130}\\right) \\approx 50.3°$', multipleChoiceOptions: ['$50{,}3°$', '$39{,}7°$', '$76{,}9°$', '$40°$'] },
        ],
        solution: 'a) ca. 37 m, b) ca. 12.6 m, c) ca. 50 grader',
        hints: ['Tegn alltid figuren forst', 'Identifiser hvilke sider og vinkler du kjenner'],
      },
    },
    {
      id: '10-4-2-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fra toppen av et fyrtarn som er 40 meter hoyt, ser man ned på en bat. Depresjonsvinkelen til baten er 15 grader. Hvor langt fra fyrtarnet er baten?',
        solution: `$\\tan 15° = \\frac{40}{d}$

$d = \\frac{40}{\\tan 15°} \\approx \\frac{40}{0.268} \\approx 149$ m

Baten er ca. 149 meter fra fyrtarnet.`,
        hints: ['Depresjonsvinkelen fra toppen er lik elevasjonsvinkelen fra baten', 'Hoyden er motstående og avstanden er hosliggende'],
        multipleChoiceOptions: ['$149$ m', '$10{,}7$ m', '$40$ m', '$154{,}5$ m'],
      },
    },
    {
      id: '10-4-2-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et fly stiger med konstant vinkel 12 grader. Etter a ha tilbakelagt 2000 m (langs flyruten), hvor hoyt har flyet steget?',
        solution: `$\\sin 12° = \\frac{h}{2000}$

$h = 2000 \\cdot \\sin 12° \\approx 2000 \\cdot 0.208 \\approx 416$ m

Flyet har steget ca. 416 meter.`,
        hints: ['Flyruten er hypotenusen', 'Hoyden er motstående katet'],
        multipleChoiceOptions: ['$416$ m', '$1956$ m', '$240$ m', '$2000$ m'],
      },
    },
    {
      id: '10-4-2-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'medium',
        task: 'En vei har stigning 8% (stiger 8 m per 100 m horisontalt).',
        subTasks: [
          { label: 'a', task: 'Finn stigningsvinkelen.', solution: '$v = \\arctan\\left(\\frac{8}{100}\\right) = \\arctan(0.08) \\approx 4.6°$', multipleChoiceOptions: ['$4{,}6°$', '$8°$', '$4{,}57°$', '$85{,}4°$'] },
          { label: 'b', task: 'Hvor lang er veien (malt langs bakken) for a stige 50 m?', solution: 'Horisontal avstand: $\\frac{50}{0.08} = 625$ m. Veilengde: $\\sqrt{625^2 + 50^2} \\approx 627$ m', multipleChoiceOptions: ['$627$ m', '$625$ m', '$675$ m', '$500$ m'] },
        ],
        solution: 'a) ca. 4.6 grader, b) ca. 627 m',
        hints: ['Stigning i prosent = høyde / horisontal avstand', 'Veilengden er hypotenusen'],
      },
    },
    {
      id: '10-4-2-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kran har en arm på 25 meter som kan heves fra 20 til 75 grader med bakken.',
        subTasks: [
          { label: 'a', task: 'Hva er maksimal lofte-høyde?', solution: '$h_{max} = 25 \\cdot \\sin 75° \\approx 24.1$ m', multipleChoiceOptions: ['$24{,}1$ m', '$25$ m', '$6{,}5$ m', '$24{,}8$ m'] },
          { label: 'b', task: 'Hva er minimal lofte-høyde?', solution: '$h_{min} = 25 \\cdot \\sin 20° \\approx 8.6$ m', multipleChoiceOptions: ['$8{,}6$ m', '$5$ m', '$23{,}5$ m', '$20$ m'] },
          { label: 'c', task: 'Ved hvilken vinkel er høyden 15 meter?', solution: '$\\sin v = \\frac{15}{25} = 0.6$, $v = \\arcsin(0.6) \\approx 36.9°$', multipleChoiceOptions: ['$36{,}9°$', '$53{,}1°$', '$60°$', '$30°$'] },
        ],
        solution: 'a) ca. 24 m, b) ca. 8.6 m, c) ca. 37 grader',
        hints: ['Hoyden = arm $\\cdot \\sin(\\text{vinkel})$'],
      },
    },
    {
      id: '10-4-2-exercise-13',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et helikopter flyr i 500 m høyde. Fra helikopteret males depresjonsvinkelen til to biler på samme vei til 30 og 45 grader (bilene er på hver sin side av helikopteret). Finn avstanden mellom bilene.',
        solution: `Avstand til bil 1: $d_1 = \\frac{500}{\\tan 30°} = \\frac{500}{0.577} \\approx 866$ m

Avstand til bil 2: $d_2 = \\frac{500}{\\tan 45°} = \\frac{500}{1} = 500$ m

Total avstand mellom bilene: $866 + 500 = 1366$ m`,
        hints: ['Finn horisontal avstand til hver bil', 'Bilene er på hver sin side, sa legg sammen avstandene'],
        multipleChoiceOptions: ['$1366$ m', '$366$ m', '$500$ m', '$866$ m'],
      },
    },
    {
      id: '10-4-2-formula-1',
      type: 'formula',
      title: 'Spesielle vinkler',
      latex: `\\begin{array}{|c|c|c|c|}
\\hline
v & \\sin v & \\cos v & \\tan v \\\\
\\hline
30° & \\frac{1}{2} & \\frac{\\sqrt{3}}{2} & \\frac{1}{\\sqrt{3}} \\\\
45° & \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{2}}{2} & 1 \\\\
60° & \\frac{\\sqrt{3}}{2} & \\frac{1}{2} & \\sqrt{3} \\\\
\\hline
\\end{array}`,
      description: 'Disse verdiene er nyttige a huske og forekommer ofte på eksamener.',
    },
    {
      id: '10-4-2-exercise-14',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-14',
        number: '14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk de spesielle vinkelverdiene til å finne eksakte svar.',
        subTasks: [
          { label: 'a', task: 'Finn hypotenusen nar motstående katet er 5 cm og vinkelen er 30 grader.', solution: '$c = \\frac{5}{\\sin 30°} = \\frac{5}{1/2} = 10$ cm', answer: 10 },
          { label: 'b', task: 'Finn hosliggende katet nar hypotenusen er 12 cm og vinkelen er 60 grader.', solution: '$b = 12 \\cdot \\cos 60° = 12 \\cdot \\frac{1}{2} = 6$ cm', answer: 6 },
          { label: 'c', task: 'Finn motstående katet nar hosliggende katet er 8 cm og vinkelen er 45 grader.', solution: '$a = 8 \\cdot \\tan 45° = 8 \\cdot 1 = 8$ cm', answer: 8 },
        ],
        solution: 'a) 10 cm, b) 6 cm, c) 8 cm',
        hints: ['Bruk tabellen over spesielle vinkelverdier'],
      },
    },
    {
      id: '10-4-2-exercise-15',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-15',
        number: '15',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En likesidet trekant har sidelengde 10 cm.',
        subTasks: [
          { label: 'a', task: 'Finn høyden i trekanten ved hjelp av trigonometri.', solution: 'Alle vinkler er 60°. Hoyden deler grunnlinjen. $h = 10 \\cdot \\sin 60° = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8.66$ cm', multipleChoiceOptions: ['$5\\sqrt{3} \\approx 8{,}66$ cm', '$10\\sqrt{3} \\approx 17{,}32$ cm', '$5$ cm', '$10$ cm'] },
          { label: 'b', task: 'Finn arealet av trekanten.', solution: '$A = \\frac{1}{2} \\cdot 10 \\cdot 5\\sqrt{3} = 25\\sqrt{3} \\approx 43.3$ cm$^2$', multipleChoiceOptions: ['$25\\sqrt{3} \\approx 43{,}3$ cm$^2$', '$50\\sqrt{3} \\approx 86{,}6$ cm$^2$', '$50$ cm$^2$', '$25$ cm$^2$'] },
        ],
        solution: 'a) $5\\sqrt{3} \\approx 8.66$ cm, b) $25\\sqrt{3} \\approx 43.3$ cm$^2$',
        hints: ['Alle vinkler i en likesidet trekant er 60 grader', 'Hoyden halverer grunnlinjen og toppvinkelen'],
      },
    },
    {
      id: '10-4-2-exercise-16',
      type: 'exercise',
      exercise: {
        id: '10-4-2-oppg-16',
        number: '16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fra to punkter A og B på samme høyde, 200 m fra hverandre, males elevasjonsvinkelen til toppen av et fjell. Fra A er vinkelen 40 grader, fra B (naermere fjellet) er vinkelen 55 grader.',
        subTasks: [
          { label: 'a', task: 'Sett opp to likninger for fjellhøyden h og avstanden x fra B til foten av fjellet.', solution: '$h = x \\cdot \\tan 55°$ og $h = (x + 200) \\cdot \\tan 40°$', multipleChoiceOptions: ['$h = x \\tan 55°$ og $h = (x+200) \\tan 40°$', '$h = x \\tan 40°$ og $h = (x+200) \\tan 55°$', '$h = x \\sin 55°$ og $h = (x+200) \\sin 40°$', '$h = 200 \\tan 55°$ og $h = 200 \\tan 40°$'] },
          { label: 'b', task: 'Los likningssystemet og finn fjellhøyden.', solution: '$x \\cdot \\tan 55° = (x + 200) \\cdot \\tan 40°$, $x(1.428) = (x + 200)(0.839)$, $1.428x = 0.839x + 167.8$, $0.589x = 167.8$, $x \\approx 285$ m. $h = 285 \\cdot \\tan 55° \\approx 407$ m', multipleChoiceOptions: ['$407$ m', '$285$ m', '$485$ m', '$168$ m'] },
        ],
        solution: 'a) $h = x \\tan 55°$ og $h = (x+200) \\tan 40°$, b) Fjellet er ca. 407 m hoyt',
        hints: ['Begge punktene gir uttrykk for samme høyde h', 'Sett uttrykkene lik hverandre og los for x'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_4_3: TextbookChapter = {
  id: '10-4-3',
  courseId: '10',
  chapterNumber: '4.3',
  title: 'Vektorer - introduksjon',
  description: 'Vektorer i planet, addisjon og komponenter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og argumentere for korleis geometri i planet kan brukast i samband med koordinatsystem',
  ],
  content: [
    {
      id: '10-4-3-intro',
      type: 'text',
      content: `## Innledning

Mange storrelser i verden rundt oss har bade en **storrelse** (hvor mye) og en **retning** (hvor hen). Eksempler er:
- Fart (50 km/t mot nord)
- Kraft (100 N nedover)
- Forflytning (3 km mot ost)

Slike storrelser kalles **vektorer**. I dette kapittelet larer vi hvordan vi representerer og regner med vektorer.`,
    },
    {
      id: '10-4-3-def-1',
      type: 'definition',
      title: 'Vektor',
      content: `En **vektor** er en storrelse som har bade **lengde** (storrelse) og **retning**.

Vi skriver vektorer som $\\vec{v}$ eller med fete bokstaver **v**.

En vektor i planet kan skrives på **koordinatform**:
$$\\vec{v} = [v_x, v_y]$$
der $v_x$ er x-komponenten og $v_y$ er y-komponenten.

**Lengden** (eller absoluttverdien) til en vektor:
$$|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$$`,
    },
    {
      id: '10-4-3-note-1',
      type: 'note',
      content: `**Vektor vs. skalar:**
- En **skalar** har bare storrelse (f.eks. temperatur, masse, tid)
- En **vektor** har bade storrelse og retning (f.eks. hastighet, kraft, forflytning)`,
    },
    {
      id: '10-4-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Vektor mellom to punkter',
      problem: 'Finn vektoren fra punkt $A(1, 2)$ til punkt $B(4, 6)$ og beregn lengden.',
      solution: `**Løsning:**

Vektoren fra A til B:
$\\vec{AB} = [4 - 1, 6 - 2] = [3, 4]$

Lengden:
$|\\vec{AB}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$

**Svar:** $\\vec{AB} = [3, 4]$ med lengde 5.`,
    },
    {
      id: '10-4-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-4-3-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vektoren mellom punktene og beregn lengden.',
        subTasks: [
          { label: 'a', task: 'Fra $A(0, 0)$ til $B(5, 12)$', solution: '$\\vec{AB} = [5, 12]$, $|\\vec{AB}| = \\sqrt{25 + 144} = 13$', answer: 13 },
          { label: 'b', task: 'Fra $P(2, 3)$ til $Q(8, 11)$', solution: '$\\vec{PQ} = [6, 8]$, $|\\vec{PQ}| = \\sqrt{36 + 64} = 10$', answer: 10 },
          { label: 'c', task: 'Fra $R(-1, 4)$ til $S(5, -4)$', solution: '$\\vec{RS} = [6, -8]$, $|\\vec{RS}| = \\sqrt{36 + 64} = 10$', answer: 10 },
          { label: 'd', task: 'Fra $M(3, -2)$ til $N(-5, 4)$', solution: '$\\vec{MN} = [-8, 6]$, $|\\vec{MN}| = \\sqrt{64 + 36} = 10$', answer: 10 },
        ],
        solution: 'a) [5, 12], lengde 13, b) [6, 8], lengde 10, c) [6, -8], lengde 10, d) [-8, 6], lengde 10',
        hints: ['Vektor = sluttpunkt minus startpunkt', 'Lengde beregnes med Pytagoras'],
      },
    },
    {
      id: '10-4-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-4-3-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn lengden til vektorene.',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [3, 4]$', solution: '$|\\vec{a}| = \\sqrt{9 + 16} = 5$', answer: 5 },
          { label: 'b', task: '$\\vec{b} = [8, 6]$', solution: '$|\\vec{b}| = \\sqrt{64 + 36} = 10$', answer: 10 },
          { label: 'c', task: '$\\vec{c} = [-5, 12]$', solution: '$|\\vec{c}| = \\sqrt{25 + 144} = 13$', answer: 13 },
          { label: 'd', task: '$\\vec{d} = [1, 1]$', solution: '$|\\vec{d}| = \\sqrt{1 + 1} = \\sqrt{2} \\approx 1.41$', multipleChoiceOptions: ['$\\sqrt{2} \\approx 1{,}41$', '$2$', '$1$', '$\\sqrt{3} \\approx 1{,}73$'] },
        ],
        solution: 'a) 5, b) 10, c) 13, d) $\\sqrt{2}$',
        hints: ['Bruk formelen $|\\vec{v}| = \\sqrt{v_x^2 + v_y^2}$'],
      },
    },
    {
      id: '10-4-3-def-2',
      type: 'definition',
      title: 'Addisjon av vektorer',
      content: `To vektorer legges sammen ved a legge sammen komponentene:

$$\\vec{a} + \\vec{b} = [a_x + b_x, a_y + b_y]$$

**Geometrisk tolkning:** Legg vektorene etter hverandre (hode-til-hale). Sumvektoren gar fra starten av den forste til slutten av den andre.`,
    },
    {
      id: '10-4-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Addisjon av vektorer',
      problem: 'Gitt $\\vec{a} = [3, 2]$ og $\\vec{b} = [1, 4]$. Finn $\\vec{a} + \\vec{b}$.',
      solution: `**Løsning:**

$\\vec{a} + \\vec{b} = [3 + 1, 2 + 4] = [4, 6]$

**Svar:** $\\vec{a} + \\vec{b} = [4, 6]$`,
    },
    {
      id: '10-4-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-4-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut vektorsummene.',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [2, 5]$ og $\\vec{b} = [3, -1]$. Finn $\\vec{a} + \\vec{b}$', solution: '$\\vec{a} + \\vec{b} = [5, 4]$', multipleChoiceOptions: ['$[5, 4]$', '$[5, 6]$', '$[-1, 6]$', '$[6, 4]$'] },
          { label: 'b', task: '$\\vec{u} = [-1, 4]$ og $\\vec{v} = [6, 2]$. Finn $\\vec{u} + \\vec{v}$', solution: '$\\vec{u} + \\vec{v} = [5, 6]$', multipleChoiceOptions: ['$[5, 6]$', '$[-7, 2]$', '$[7, 6]$', '$[5, 2]$'] },
          { label: 'c', task: '$\\vec{p} = [4, -3]$ og $\\vec{q} = [-4, 3]$. Finn $\\vec{p} + \\vec{q}$', solution: '$\\vec{p} + \\vec{q} = [0, 0]$ (nullvektoren)', multipleChoiceOptions: ['$[0, 0]$', '$[8, -6]$', '$[0, 6]$', '$[-8, 0]$'] },
          { label: 'd', task: '$\\vec{r} = [7, 2]$ og $\\vec{s} = [-3, 5]$. Finn $\\vec{r} + \\vec{s}$', solution: '$\\vec{r} + \\vec{s} = [4, 7]$', multipleChoiceOptions: ['$[4, 7]$', '$[10, -3]$', '$[4, -3]$', '$[10, 7]$'] },
        ],
        solution: 'a) [5, 4], b) [5, 6], c) [0, 0], d) [4, 7]',
        hints: ['Legg sammen tilsvarende komponenter'],
      },
    },
    {
      id: '10-4-3-def-3',
      type: 'definition',
      title: 'Subtraksjon av vektorer',
      content: `To vektorer trekkes fra hverandre ved a trekke fra komponentene:

$$\\vec{a} - \\vec{b} = [a_x - b_x, a_y - b_y]$$

**Geometrisk tolkning:** $\\vec{a} - \\vec{b}$ er vektoren fra spissen av $\\vec{b}$ til spissen av $\\vec{a}$ nar begge starter i samme punkt.`,
    },
    {
      id: '10-4-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-4-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut vektordifferansene.',
        subTasks: [
          { label: 'a', task: '$\\vec{a} = [7, 3]$ og $\\vec{b} = [2, 5]$. Finn $\\vec{a} - \\vec{b}$', solution: '$\\vec{a} - \\vec{b} = [5, -2]$', multipleChoiceOptions: ['$[5, -2]$', '$[9, 8]$', '$[-5, 2]$', '$[5, 8]$'] },
          { label: 'b', task: '$\\vec{u} = [4, -1]$ og $\\vec{v} = [6, 3]$. Finn $\\vec{u} - \\vec{v}$', solution: '$\\vec{u} - \\vec{v} = [-2, -4]$', multipleChoiceOptions: ['$[-2, -4]$', '$[10, 2]$', '$[2, 4]$', '$[-2, 4]$'] },
          { label: 'c', task: '$\\vec{p} = [0, 8]$ og $\\vec{q} = [5, 2]$. Finn $\\vec{p} - \\vec{q}$', solution: '$\\vec{p} - \\vec{q} = [-5, 6]$', multipleChoiceOptions: ['$[-5, 6]$', '$[5, 10]$', '$[5, 6]$', '$[-5, -6]$'] },
        ],
        solution: 'a) [5, -2], b) [-2, -4], c) [-5, 6]',
        hints: ['Trekk fra tilsvarende komponenter'],
      },
    },
    {
      id: '10-4-3-def-4',
      type: 'definition',
      title: 'Skalarmultiplikasjon',
      content: `Nar vi ganger en vektor med et tall (skalar), ganger vi hver komponent med tallet:

$$k \\cdot \\vec{v} = [k \\cdot v_x, k \\cdot v_y]$$

- Hvis $k > 0$: Vektoren beholder retningen, men endrer lengde
- Hvis $k < 0$: Vektoren snur retning
- Hvis $k = 0$: Vi far nullvektoren $\\vec{0} = [0, 0]$`,
    },
    {
      id: '10-4-3-ex-3',
      type: 'example',
      title: 'Eksempel 3: Skalarmultiplikasjon',
      problem: 'Gitt $\\vec{v} = [2, -3]$. Finn $3\\vec{v}$ og $-2\\vec{v}$.',
      solution: `**Løsning:**

$3\\vec{v} = 3 \\cdot [2, -3] = [6, -9]$

$-2\\vec{v} = -2 \\cdot [2, -3] = [-4, 6]$

Legg merke til at $-2\\vec{v}$ peker i motsatt retning av $\\vec{v}$.`,
    },
    {
      id: '10-4-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-4-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Utfor skalarmultiplikasjon.',
        subTasks: [
          { label: 'a', task: 'Finn $4\\vec{a}$ nar $\\vec{a} = [3, 2]$', solution: '$4\\vec{a} = [12, 8]$', multipleChoiceOptions: ['$[12, 8]$', '$[7, 6]$', '$[12, 2]$', '$[3, 8]$'] },
          { label: 'b', task: 'Finn $-3\\vec{b}$ nar $\\vec{b} = [1, -4]$', solution: '$-3\\vec{b} = [-3, 12]$', multipleChoiceOptions: ['$[-3, 12]$', '$[3, 12]$', '$[-3, -12]$', '$[3, -12]$'] },
          { label: 'c', task: 'Finn $\\frac{1}{2}\\vec{c}$ nar $\\vec{c} = [6, -10]$', solution: '$\\frac{1}{2}\\vec{c} = [3, -5]$', multipleChoiceOptions: ['$[3, -5]$', '$[12, -20]$', '$[3, 5]$', '$[6, -5]$'] },
          { label: 'd', task: 'Finn $-\\vec{d}$ nar $\\vec{d} = [5, 7]$', solution: '$-\\vec{d} = [-5, -7]$', multipleChoiceOptions: ['$[-5, -7]$', '$[5, 7]$', '$[-5, 7]$', '$[5, -7]$'] },
        ],
        solution: 'a) [12, 8], b) [-3, 12], c) [3, -5], d) [-5, -7]',
        hints: ['Gang skalaren med hver komponent'],
      },
    },
    {
      id: '10-4-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-4-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut kombinasjonene.',
        subTasks: [
          { label: 'a', task: 'Finn $2\\vec{a} + 3\\vec{b}$ nar $\\vec{a} = [1, 2]$ og $\\vec{b} = [3, -1]$', solution: '$2\\vec{a} + 3\\vec{b} = [2, 4] + [9, -3] = [11, 1]$', multipleChoiceOptions: ['$[11, 1]$', '$[4, 1]$', '$[11, 7]$', '$[5, 1]$'] },
          { label: 'b', task: 'Finn $4\\vec{u} - 2\\vec{v}$ nar $\\vec{u} = [2, 3]$ og $\\vec{v} = [5, 1]$', solution: '$4\\vec{u} - 2\\vec{v} = [8, 12] - [10, 2] = [-2, 10]$', multipleChoiceOptions: ['$[-2, 10]$', '$[18, 14]$', '$[-2, -10]$', '$[2, 10]$'] },
          { label: 'c', task: 'Finn $\\vec{a} + 2\\vec{b} - 3\\vec{c}$ nar $\\vec{a} = [1, 0]$, $\\vec{b} = [0, 2]$, $\\vec{c} = [1, 1]$', solution: '$= [1, 0] + [0, 4] - [3, 3] = [1, 4] - [3, 3] = [-2, 1]$', multipleChoiceOptions: ['$[-2, 1]$', '$[4, 7]$', '$[-2, -1]$', '$[2, 1]$'] },
        ],
        solution: 'a) [11, 1], b) [-2, 10], c) [-2, 1]',
        hints: ['Utfor skalarmultiplikasjonene forst, deretter addisjon/subtraksjon'],
      },
    },
    {
      id: '10-4-3-ex-4',
      type: 'example',
      title: 'Eksempel 4: Praktisk anvendelse - krefter',
      problem: 'To krefter virker på et objekt: $\\vec{F_1} = [40, 0]$ N (mot ost) og $\\vec{F_2} = [0, 30]$ N (mot nord). Finn den resulterende kraften.',
      solution: `**Løsning:**

Resultantkraften er summen av kreftene:
$\\vec{R} = \\vec{F_1} + \\vec{F_2} = [40 + 0, 0 + 30] = [40, 30]$ N

Storrelsen på resultanten:
$|\\vec{R}| = \\sqrt{40^2 + 30^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50$ N

**Svar:** Resultantkraften er $[40, 30]$ N med storrelse 50 N.`,
    },
    {
      id: '10-4-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-4-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bat kjorer med fart 20 km/t mot ost. Strommen gar med 5 km/t mot nord.',
        subTasks: [
          { label: 'a', task: 'Skriv batens og strommens hastighet som vektorer.', solution: 'Bat: $\\vec{v_b} = [20, 0]$, Strom: $\\vec{v_s} = [0, 5]$', multipleChoiceOptions: ['$[20, 0]$ og $[0, 5]$', '$[0, 20]$ og $[5, 0]$', '$[20, 5]$ og $[0, 0]$', '$[0, 0]$ og $[20, 5]$'] },
          { label: 'b', task: 'Finn den resulterende hastighetsvektoren.', solution: '$\\vec{v_r} = [20, 0] + [0, 5] = [20, 5]$', multipleChoiceOptions: ['$[20, 5]$', '$[25, 0]$', '$[0, 25]$', '$[15, 5]$'] },
          { label: 'c', task: 'Finn den resulterende farten.', solution: '$|\\vec{v_r}| = \\sqrt{400 + 25} = \\sqrt{425} \\approx 20.6$ km/t', multipleChoiceOptions: ['$20{,}6$ km/t', '$25$ km/t', '$20$ km/t', '$15$ km/t'] },
        ],
        solution: 'a) [20, 0] og [0, 5], b) [20, 5], c) ca. 20.6 km/t',
        hints: ['Ost er positiv x-retning, nord er positiv y-retning'],
      },
    },
    {
      id: '10-4-3-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-4-3-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et fly skal fly fra A til B som ligger rett nord. Flyet har lufthastighet 300 km/t. Det blaser vind fra vest mot ost med 50 km/t.',
        subTasks: [
          { label: 'a', task: 'I hvilken retning ma flyet styre for a fly rett mot nord? (Hint: Flyets kurs ma kompensere for vinden)', solution: 'Flyet ma styre mot nordvest slik at vindkomponenten mot ost oppveies. Vinkelen $v$ fra nord: $\\sin v = \\frac{50}{300}$, $v \\approx 9.6°$ vest for nord.', multipleChoiceOptions: ['$9{,}6°$ vest for nord', '$9{,}6°$ øst for nord', '$80{,}4°$ vest for nord', 'Rett nord'] },
          { label: 'b', task: 'Hva blir flyets fart over bakken?', solution: 'Nordlig komponent: $\\sqrt{300^2 - 50^2} = \\sqrt{87500} \\approx 296$ km/t', multipleChoiceOptions: ['$296$ km/t', '$350$ km/t', '$250$ km/t', '$300$ km/t'] },
        ],
        solution: 'a) Ca. 9.6 grader vest for nord, b) Ca. 296 km/t',
        hints: ['Summen av flyhastighet og vind ma peke rett nord', 'Bruk at x-komponentene ma summere til null'],
      },
    },
    {
      id: '10-4-3-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-4-3-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et skip seiler fra havn A til B med vektor $\\vec{AB} = [12, 5]$ km, deretter fra B til C med vektor $\\vec{BC} = [-4, 8]$ km.',
        subTasks: [
          { label: 'a', task: 'Finn vektoren $\\vec{AC}$ fra A til C.', solution: '$\\vec{AC} = \\vec{AB} + \\vec{BC} = [12, 5] + [-4, 8] = [8, 13]$ km', multipleChoiceOptions: ['$[8, 13]$ km', '$[16, -3]$ km', '$[8, -3]$ km', '$[-4, 13]$ km'] },
          { label: 'b', task: 'Hvor langt er skipet fra utgangspunktet A?', solution: '$|\\vec{AC}| = \\sqrt{64 + 169} = \\sqrt{233} \\approx 15.3$ km', multipleChoiceOptions: ['$15{,}3$ km', '$21$ km', '$8{,}9$ km', '$13$ km'] },
          { label: 'c', task: 'Hvor langt har skipet faktisk seilt totalt?', solution: '$|\\vec{AB}| + |\\vec{BC}| = \\sqrt{169} + \\sqrt{80} = 13 + 8.94 \\approx 21.9$ km', multipleChoiceOptions: ['$21{,}9$ km', '$15{,}3$ km', '$21$ km', '$26$ km'] },
        ],
        solution: 'a) [8, 13] km, b) ca. 15.3 km, c) ca. 21.9 km',
        hints: ['Bruk vektoraddisjon for total forflytning'],
      },
    },
    {
      id: '10-4-3-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-4-3-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gitt tre punkter: $A(1, 2)$, $B(5, 4)$ og $C(3, 7)$.',
        subTasks: [
          { label: 'a', task: 'Finn vektorene $\\vec{AB}$ og $\\vec{AC}$.', solution: '$\\vec{AB} = [4, 2]$, $\\vec{AC} = [2, 5]$', multipleChoiceOptions: ['$[4, 2]$ og $[2, 5]$', '$[4, 2]$ og $[-2, -5]$', '$[-4, -2]$ og $[2, 5]$', '$[6, 6]$ og $[4, 9]$'] },
          { label: 'b', task: 'Finn midtpunktet M på BC ved a bruke $\\vec{AM} = \\vec{AB} + \\frac{1}{2}\\vec{BC}$.', solution: '$\\vec{BC} = [-2, 3]$. $\\vec{AM} = [4, 2] + \\frac{1}{2}[-2, 3] = [4, 2] + [-1, 1.5] = [3, 3.5]$. $M = (1 + 3, 2 + 3.5) = (4, 5.5)$', multipleChoiceOptions: ['$M = (4, 5{,}5)$', '$M = (4, 5)$', '$M = (3, 3{,}5)$', '$M = (5, 4)$'] },
          { label: 'c', task: 'Finn tyngdepunktet T (som ligger $\\frac{2}{3}$ langs medianen fra A til midtpunktet M).', solution: '$\\vec{AT} = \\frac{2}{3}\\vec{AM} = \\frac{2}{3}[3, 3.5] = [2, \\frac{7}{3}]$. $T = (1 + 2, 2 + \\frac{7}{3}) = (3, \\frac{13}{3})$', multipleChoiceOptions: ['$T = (3, \\frac{13}{3})$', '$T = (2, \\frac{7}{3})$', '$T = (3, 4)$', '$T = (4, 5)$'] },
        ],
        solution: 'a) [4, 2] og [2, 5], b) M = (4, 5.5), c) T = (3, 13/3)',
        hints: ['Midtpunktet ligger midt mellom B og C', 'Tyngdepunktet deler medianen i forholdet 2:1'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_4_4: TextbookChapter = {
  id: '10-4-4',
  courseId: '10',
  chapterNumber: '4.4',
  title: 'Areal og volum',
  description: 'Kjegle, kule og sammensatte figurer.',
  estimatedMinutes: 65,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum av tredimensjonale figurar',
  ],
  content: [
    {
      id: '10-4-4-intro',
      type: 'text',
      content: `## Innledning

I dette kapittelet skal vi arbeide med volum og overflate av tredimensjonale figurer. Vi skal se på kjegler, kuler og pyramider, samt sammensatte figurer som bestar av flere enkle former.

Dette er praktisk kunnskap som brukes i alt fra arkitektur til emballasjedesign!`,
    },
    {
      id: '10-4-4-volum-bilde',
      type: 'image',
      src: '/images/10-klasse/geometri-volum.svg',
      alt: 'Illustrasjon av volumformler for romfigurer',
      caption: 'Volum av tredimensjonale figurer - sylinder, kjegle og kule',
    },
    {
      id: '10-4-4-overflate-bilde',
      type: 'image',
      src: '/images/10-klasse/geometri-overflate.svg',
      alt: 'Illustrasjon av overflateformler for romfigurer',
      caption: 'Overflate av tredimensjonale figurer',
    },
    {
      id: '10-4-4-def-1',
      type: 'definition',
      title: 'Volumformler for romfigurer',
      content: `**Sylinder:**
$$V = \\pi r^2 h$$

**Kjegle:**
$$V = \\frac{1}{3}\\pi r^2 h$$

**Kule:**
$$V = \\frac{4}{3}\\pi r^3$$

**Pyramide:**
$$V = \\frac{1}{3} \\cdot G \\cdot h$$
der $G$ er grunnflatearealet.`,
    },
    {
      id: '10-4-4-note-1',
      type: 'note',
      content: `**Legg merke til:** En kjegle har $\\frac{1}{3}$ av volumet til en sylinder med samme grunnflate og høyde. Det samme gjelder for pyramide sammenlignet med et prisme.`,
    },
    {
      id: '10-4-4-ex-1',
      type: 'example',
      title: 'Eksempel 1: Volum av kjegle',
      problem: 'En kjegle har radius 6 cm og høyde 10 cm. Finn volumet.',
      solution: `**Løsning:**

$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\cdot 6^2 \\cdot 10 = \\frac{1}{3}\\pi \\cdot 36 \\cdot 10 = 120\\pi$

$V = 120\\pi \\approx 377$ cm$^3$

**Svar:** Volumet er $120\\pi \\approx 377$ cm$^3$.`,
    },
    {
      id: '10-4-4-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn volumet av kjeglene.',
        subTasks: [
          { label: 'a', task: 'Radius 3 cm, høyde 8 cm.', solution: '$V = \\frac{1}{3}\\pi \\cdot 9 \\cdot 8 = 24\\pi \\approx 75.4$ cm$^3$', multipleChoiceOptions: ['$24\\pi \\approx 75$ cm$^3$', '$72\\pi \\approx 226$ cm$^3$', '$24$ cm$^3$', '$48\\pi \\approx 151$ cm$^3$'] },
          { label: 'b', task: 'Radius 9 cm, høyde 12 cm.', solution: '$V = \\frac{1}{3}\\pi \\cdot 81 \\cdot 12 = 324\\pi \\approx 1018$ cm$^3$', multipleChoiceOptions: ['$324\\pi \\approx 1018$ cm$^3$', '$972\\pi \\approx 3054$ cm$^3$', '$108\\pi \\approx 339$ cm$^3$', '$648\\pi \\approx 2036$ cm$^3$'] },
          { label: 'c', task: 'Radius 5 cm, høyde 15 cm.', solution: '$V = \\frac{1}{3}\\pi \\cdot 25 \\cdot 15 = 125\\pi \\approx 393$ cm$^3$', multipleChoiceOptions: ['$125\\pi \\approx 393$ cm$^3$', '$375\\pi \\approx 1178$ cm$^3$', '$75\\pi \\approx 236$ cm$^3$', '$250\\pi \\approx 785$ cm$^3$'] },
          { label: 'd', task: 'Diameter 14 cm, høyde 9 cm.', solution: '$r = 7$ cm. $V = \\frac{1}{3}\\pi \\cdot 49 \\cdot 9 = 147\\pi \\approx 462$ cm$^3$', multipleChoiceOptions: ['$147\\pi \\approx 462$ cm$^3$', '$588\\pi \\approx 1847$ cm$^3$', '$441\\pi \\approx 1385$ cm$^3$', '$73{,}5\\pi \\approx 231$ cm$^3$'] },
        ],
        solution: 'a) $24\\pi \\approx 75$ cm$^3$, b) $324\\pi \\approx 1018$ cm$^3$, c) $125\\pi \\approx 393$ cm$^3$, d) $147\\pi \\approx 462$ cm$^3$',
        hints: ['Bruk formelen $V = \\frac{1}{3}\\pi r^2 h$', 'Husk at radius = diameter / 2'],
      },
    },
    {
      id: '10-4-4-ex-2',
      type: 'example',
      title: 'Eksempel 2: Volum av kule',
      problem: 'En kule har radius 6 cm. Finn volumet.',
      solution: `**Løsning:**

$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi \\cdot 6^3 = \\frac{4}{3}\\pi \\cdot 216 = 288\\pi$

$V = 288\\pi \\approx 905$ cm$^3$

**Svar:** Volumet er $288\\pi \\approx 905$ cm$^3$.`,
    },
    {
      id: '10-4-4-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn volumet av kulene.',
        subTasks: [
          { label: 'a', task: 'Radius 3 cm.', solution: '$V = \\frac{4}{3}\\pi \\cdot 27 = 36\\pi \\approx 113$ cm$^3$', multipleChoiceOptions: ['$36\\pi \\approx 113$ cm$^3$', '$12\\pi \\approx 38$ cm$^3$', '$27\\pi \\approx 85$ cm$^3$', '$108\\pi \\approx 339$ cm$^3$'] },
          { label: 'b', task: 'Radius 9 cm.', solution: '$V = \\frac{4}{3}\\pi \\cdot 729 = 972\\pi \\approx 3054$ cm$^3$', multipleChoiceOptions: ['$972\\pi \\approx 3054$ cm$^3$', '$324\\pi \\approx 1018$ cm$^3$', '$729\\pi \\approx 2290$ cm$^3$', '$2916\\pi \\approx 9161$ cm$^3$'] },
          { label: 'c', task: 'Diameter 10 cm.', solution: '$r = 5$ cm. $V = \\frac{4}{3}\\pi \\cdot 125 = \\frac{500\\pi}{3} \\approx 524$ cm$^3$', multipleChoiceOptions: ['$\\frac{500\\pi}{3} \\approx 524$ cm$^3$', '$\\frac{1000\\pi}{3} \\approx 1047$ cm$^3$', '$125\\pi \\approx 393$ cm$^3$', '$500\\pi \\approx 1571$ cm$^3$'] },
          { label: 'd', task: 'Radius 1.5 m (svar i liter, 1 m$^3$ = 1000 L).', solution: '$V = \\frac{4}{3}\\pi \\cdot 3.375 = 4.5\\pi \\approx 14.14$ m$^3 \\approx 14140$ L', multipleChoiceOptions: ['$14140$ L', '$4712$ L', '$3375$ L', '$42411$ L'] },
        ],
        solution: 'a) $36\\pi \\approx 113$ cm$^3$, b) $972\\pi \\approx 3054$ cm$^3$, c) $\\frac{500\\pi}{3} \\approx 524$ cm$^3$, d) $4.5\\pi$ m$^3 \\approx 14140$ L',
        hints: ['Bruk formelen $V = \\frac{4}{3}\\pi r^3$'],
      },
    },
    {
      id: '10-4-4-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn volumet av pyramidene.',
        subTasks: [
          { label: 'a', task: 'Pyramide med kvadratisk grunnflate 10 cm x 10 cm og høyde 12 cm.', solution: '$V = \\frac{1}{3} \\cdot 100 \\cdot 12 = 400$ cm$^3$', answer: 400 },
          { label: 'b', task: 'Pyramide med rektangulaer grunnflate 6 cm x 8 cm og høyde 15 cm.', solution: '$V = \\frac{1}{3} \\cdot 48 \\cdot 15 = 240$ cm$^3$', answer: 240 },
          { label: 'c', task: 'Pyramide med trekantformet grunnflate (grunnlinje 10 cm, høyde i grunnflaten 8 cm) og pyramidehøyde 9 cm.', solution: 'Grunnflate: $\\frac{1}{2} \\cdot 10 \\cdot 8 = 40$ cm$^2$. $V = \\frac{1}{3} \\cdot 40 \\cdot 9 = 120$ cm$^3$', answer: 120 },
        ],
        solution: 'a) 400 cm$^3$, b) 240 cm$^3$, c) 120 cm$^3$',
        hints: ['Bruk formelen $V = \\frac{1}{3} \\cdot G \\cdot h$'],
      },
    },
    {
      id: '10-4-4-def-2',
      type: 'definition',
      title: 'Overflateformler',
      content: `**Kule:**
$$A = 4\\pi r^2$$

**Sylinder (inkludert lokk):**
$$A = 2\\pi r^2 + 2\\pi r h$$

**Kjegle (inkludert bunn, med slanthøyde $s$):**
$$A = \\pi r^2 + \\pi r s$$
der slanthøyden $s = \\sqrt{r^2 + h^2}$`,
    },
    {
      id: '10-4-4-ex-3',
      type: 'example',
      title: 'Eksempel 3: Overflate av kule',
      problem: 'En kule har radius 5 cm. Finn overflatearealet.',
      solution: `**Løsning:**

$A = 4\\pi r^2 = 4\\pi \\cdot 25 = 100\\pi$

$A = 100\\pi \\approx 314$ cm$^2$

**Svar:** Overflaten er $100\\pi \\approx 314$ cm$^2$.`,
    },
    {
      id: '10-4-4-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn overflatearealet.',
        subTasks: [
          { label: 'a', task: 'Kule med radius 7 cm.', solution: '$A = 4\\pi \\cdot 49 = 196\\pi \\approx 616$ cm$^2$', multipleChoiceOptions: ['$196\\pi \\approx 616$ cm$^2$', '$49\\pi \\approx 154$ cm$^2$', '$392\\pi \\approx 1232$ cm$^2$', '$98\\pi \\approx 308$ cm$^2$'] },
          { label: 'b', task: 'Sylinder med radius 4 cm og høyde 10 cm.', solution: '$A = 2\\pi \\cdot 16 + 2\\pi \\cdot 4 \\cdot 10 = 32\\pi + 80\\pi = 112\\pi \\approx 352$ cm$^2$', multipleChoiceOptions: ['$112\\pi \\approx 352$ cm$^2$', '$160\\pi \\approx 503$ cm$^2$', '$80\\pi \\approx 251$ cm$^2$', '$32\\pi \\approx 101$ cm$^2$'] },
          { label: 'c', task: 'Kube med side 8 cm.', solution: '$A = 6 \\cdot 64 = 384$ cm$^2$', answer: 384 },
        ],
        solution: 'a) $196\\pi \\approx 616$ cm$^2$, b) $112\\pi \\approx 352$ cm$^2$, c) 384 cm$^2$',
        hints: ['For sylinder: summer topp, bunn og sideflate'],
      },
    },
    {
      id: '10-4-4-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En kjegle har radius 6 cm og høyde 8 cm.',
        subTasks: [
          { label: 'a', task: 'Finn slanthøyden (siden av kjeglen).', solution: '$s = \\sqrt{r^2 + h^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm', answer: 10 },
          { label: 'b', task: 'Finn volumet.', solution: '$V = \\frac{1}{3}\\pi \\cdot 36 \\cdot 8 = 96\\pi \\approx 302$ cm$^3$', multipleChoiceOptions: ['$96\\pi \\approx 302$ cm$^3$', '$288\\pi \\approx 905$ cm$^3$', '$48\\pi \\approx 151$ cm$^3$', '$192\\pi \\approx 603$ cm$^3$'] },
          { label: 'c', task: 'Finn overflatearealet (bunn + sideflate).', solution: '$A = \\pi \\cdot 36 + \\pi \\cdot 6 \\cdot 10 = 36\\pi + 60\\pi = 96\\pi \\approx 302$ cm$^2$', multipleChoiceOptions: ['$96\\pi \\approx 302$ cm$^2$', '$36\\pi \\approx 113$ cm$^2$', '$60\\pi \\approx 188$ cm$^2$', '$132\\pi \\approx 415$ cm$^2$'] },
        ],
        solution: 'a) 10 cm, b) $96\\pi \\approx 302$ cm$^3$, c) $96\\pi \\approx 302$ cm$^2$',
        hints: ['Slanthøyden danner en rettvinklet trekant med radius og høyde'],
      },
    },
    {
      id: '10-4-4-ex-4',
      type: 'example',
      title: 'Eksempel 4: Sammensatt figur',
      problem: 'En iskremkjegle bestar av en halvkule (r = 3 cm) på toppen av en kjegle (r = 3 cm, h = 8 cm). Finn totalvolumet.',
      solution: `**Løsning:**

**Halvkule:**
$V_1 = \\frac{1}{2} \\cdot \\frac{4}{3}\\pi r^3 = \\frac{2}{3}\\pi \\cdot 27 = 18\\pi$ cm$^3$

**Kjegle:**
$V_2 = \\frac{1}{3}\\pi \\cdot 9 \\cdot 8 = 24\\pi$ cm$^3$

**Totalt:**
$V = 18\\pi + 24\\pi = 42\\pi \\approx 132$ cm$^3$

**Svar:** Totalvolumet er $42\\pi \\approx 132$ cm$^3$.`,
    },
    {
      id: '10-4-4-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn volumet av de sammensatte figurene.',
        subTasks: [
          { label: 'a', task: 'Sylinder (r = 4 cm, h = 10 cm) med halvkule på toppen (r = 4 cm).', solution: 'Sylinder: $\\pi \\cdot 16 \\cdot 10 = 160\\pi$. Halvkule: $\\frac{2}{3}\\pi \\cdot 64 = \\frac{128\\pi}{3}$. Totalt: $\\frac{608\\pi}{3} \\approx 636$ cm$^3$', multipleChoiceOptions: ['$636$ cm$^3$', '$502$ cm$^3$', '$770$ cm$^3$', '$160$ cm$^3$'] },
          { label: 'b', task: 'Kube (side 6 cm) med pyramide på toppen (grunnflate 6 x 6 cm, høyde 4 cm).', solution: 'Kube: $216$ cm$^3$. Pyramide: $\\frac{1}{3} \\cdot 36 \\cdot 4 = 48$ cm$^3$. Totalt: 264 cm$^3$', answer: 264 },
          { label: 'c', task: 'Kjegle (r = 5 cm, h = 12 cm) med halvkule på toppen (r = 5 cm).', solution: 'Kjegle: $\\frac{1}{3}\\pi \\cdot 25 \\cdot 12 = 100\\pi$. Halvkule: $\\frac{2}{3}\\pi \\cdot 125 = \\frac{250\\pi}{3}$. Totalt: $\\frac{550\\pi}{3} \\approx 576$ cm$^3$', multipleChoiceOptions: ['$576$ cm$^3$', '$314$ cm$^3$', '$838$ cm$^3$', '$262$ cm$^3$'] },
        ],
        solution: 'a) $\\frac{608\\pi}{3} \\approx 636$ cm$^3$, b) 264 cm$^3$, c) $\\frac{550\\pi}{3} \\approx 576$ cm$^3$',
        hints: ['Del opp figuren og legg sammen volumene'],
      },
    },
    {
      id: '10-4-4-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En sylinder har et sylindrisk hull gjennom midten (ror). Ytre radius er 8 cm, indre radius er 5 cm, og høyden er 12 cm.',
        subTasks: [
          { label: 'a', task: 'Finn volumet av det massive materialet.', solution: '$V = \\pi \\cdot 8^2 \\cdot 12 - \\pi \\cdot 5^2 \\cdot 12 = 768\\pi - 300\\pi = 468\\pi \\approx 1470$ cm$^3$', multipleChoiceOptions: ['$1470$ cm$^3$', '$2413$ cm$^3$', '$942$ cm$^3$', '$3016$ cm$^3$'] },
          { label: 'b', task: 'Finn overflatearealet (inkludert innsiden av hullet).', solution: 'Topp og bunn: $2 \\cdot (\\pi \\cdot 64 - \\pi \\cdot 25) = 78\\pi$. Ytterflate: $2\\pi \\cdot 8 \\cdot 12 = 192\\pi$. Innerflate: $2\\pi \\cdot 5 \\cdot 12 = 120\\pi$. Totalt: $390\\pi \\approx 1225$ cm$^2$', multipleChoiceOptions: ['$1225$ cm$^2$', '$603$ cm$^2$', '$980$ cm$^2$', '$245$ cm$^2$'] },
        ],
        solution: 'a) $468\\pi \\approx 1470$ cm$^3$, b) $390\\pi \\approx 1225$ cm$^2$',
        hints: ['Volum = ytre sylinder - indre sylinder'],
      },
    },
    {
      id: '10-4-4-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kuleformet tank skal romme 8000 liter vann. Finn radius på tanken.',
        solution: `8000 L = 8 m$^3$ = 8 000 000 cm$^3$

$\\frac{4}{3}\\pi r^3 = 8\\,000\\,000$

$r^3 = \\frac{8\\,000\\,000 \\cdot 3}{4\\pi} = \\frac{6\\,000\\,000}{\\pi}$

$r^3 \\approx 1\\,909\\,859$

$r = \\sqrt[3]{1\\,909\\,859} \\approx 124$ cm $= 1.24$ m

Radius er ca. 1.24 m (eller 124 cm).`,
        multipleChoiceOptions: ['$1{,}24$ m', '$2{,}00$ m', '$0{,}80$ m', '$1{,}50$ m'],
        hints: ['1 liter = 1000 cm$^3$ = 0.001 m$^3$', 'Los for $r^3$ forst, deretter ta kubikkroten'],
      },
    },
    {
      id: '10-4-4-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign volumene.',
        subTasks: [
          { label: 'a', task: 'En kjegle og en sylinder har begge radius 5 cm og høyde 12 cm. Hvor mange kjegler skal til for a fylle sylinderen?', solution: 'Sylinder: $\\pi \\cdot 25 \\cdot 12 = 300\\pi$. Kjegle: $\\frac{1}{3} \\cdot 300\\pi = 100\\pi$. Det trengs 3 kjegler.', answer: 3 },
          { label: 'b', task: 'En halvkule og en kjegle har begge radius 6 cm. Kjeglen har høyde 12 cm. Hvilken har størst volum?', solution: 'Halvkule: $\\frac{2}{3}\\pi \\cdot 216 = 144\\pi$. Kjegle: $\\frac{1}{3}\\pi \\cdot 36 \\cdot 12 = 144\\pi$. De har likt volum!', multipleChoiceOptions: ['De har likt volum', 'Halvkulen er størst', 'Kjeglen er størst', 'Kan ikke avgjøres'] },
        ],
        solution: 'a) 3 kjegler, b) Likt volum',
        hints: ['Sammenlign volumformlene'],
      },
    },
    {
      id: '10-4-4-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En ball med radius 10 cm legges i en kubisk boks der ballen akkurat far plass.',
        subTasks: [
          { label: 'a', task: 'Hva er sidelengden i boksen?', solution: 'Sidelengden = diameteren = $2 \\cdot 10 = 20$ cm', answer: 20 },
          { label: 'b', task: 'Finn volumet av tom plass i boksen.', solution: 'Boks: $20^3 = 8000$ cm$^3$. Ball: $\\frac{4}{3}\\pi \\cdot 1000 \\approx 4189$ cm$^3$. Tom plass: $8000 - 4189 \\approx 3811$ cm$^3$', multipleChoiceOptions: ['$3811$ cm$^3$', '$4189$ cm$^3$', '$8000$ cm$^3$', '$1000$ cm$^3$'] },
          { label: 'c', task: 'Hvor stor andel av boksen er tom?', solution: 'Andel: $\\frac{3811}{8000} \\approx 0.476 = 47.6$%', multipleChoiceOptions: ['$47{,}6$%', '$52{,}4$%', '$25$%', '$75$%'] },
        ],
        solution: 'a) 20 cm, b) ca. 3811 cm$^3$, c) ca. 47.6%',
        hints: ['Boksen ma ha sidelengde lik diameteren til ballen'],
      },
    },
    {
      id: '10-4-4-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En sylinder har radius $r$ og høyde $h$. Hvis bade radius og høyde oker med 50%, hvor mye oker volumet prosentvis?',
        solution: `Opprinnelig volum: $V_1 = \\pi r^2 h$

Ny radius: $1.5r$, ny høyde: $1.5h$

Nytt volum: $V_2 = \\pi (1.5r)^2 (1.5h) = \\pi \\cdot 2.25r^2 \\cdot 1.5h = 3.375 \\pi r^2 h$

Okning: $\\frac{V_2}{V_1} = 3.375$

Volumet oker med $(3.375 - 1) \\cdot 100\\% = 237.5\\%$`,
        hints: ['Sett inn de nye verdiene i volumformelen', 'Del nytt volum på gammelt volum'],
        multipleChoiceOptions: ['$237{,}5$%', '$50$%', '$150$%', '$100$%'],
      },
    },
    {
      id: '10-4-4-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et sandslott har form som en kjegle med radius 30 cm og høyde 40 cm.',
        subTasks: [
          { label: 'a', task: 'Finn volumet av sandslottet.', solution: '$V = \\frac{1}{3}\\pi \\cdot 900 \\cdot 40 = 12000\\pi \\approx 37700$ cm$^3 \\approx 37.7$ L', multipleChoiceOptions: ['$37{,}7$ L', '$113$ L', '$12{,}6$ L', '$75{,}4$ L'] },
          { label: 'b', task: 'Hvis sanden veier 1.5 g/cm$^3$, hvor mye veier sandslottet?', solution: 'Masse: $37700 \\cdot 1.5 \\approx 56550$ g $\\approx 56.5$ kg', multipleChoiceOptions: ['$56{,}5$ kg', '$25{,}1$ kg', '$169{,}5$ kg', '$37{,}7$ kg'] },
        ],
        solution: 'a) $12000\\pi \\approx 37700$ cm$^3$, b) ca. 56.5 kg',
        hints: ['Masse = volum $\\times$ tetthet'],
      },
    },
    {
      id: '10-4-4-exercise-13',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En vannmelon kan modelleres som en ellipsoide (strukket kule) med halvakser 15 cm, 12 cm og 12 cm. Volumet er $V = \\frac{4}{3}\\pi abc$ der $a$, $b$, $c$ er halvaksene.',
        subTasks: [
          { label: 'a', task: 'Finn volumet av vannmelonen.', solution: '$V = \\frac{4}{3}\\pi \\cdot 15 \\cdot 12 \\cdot 12 = \\frac{4}{3}\\pi \\cdot 2160 = 2880\\pi \\approx 9048$ cm$^3$', multipleChoiceOptions: ['$9048$ cm$^3$', '$2880$ cm$^3$', '$2160$ cm$^3$', '$18096$ cm$^3$'] },
          { label: 'b', task: 'Hvis 40% av vannmelonen er spiselig fruktmasse og resten er skall og kjaerner, hvor mye spiselig masse er det?', solution: 'Spiselig: $0.40 \\cdot 9048 \\approx 3619$ cm$^3 \\approx 3.6$ kg (omtrent som vann)', multipleChoiceOptions: ['$3{,}6$ kg', '$5{,}4$ kg', '$9{,}0$ kg', '$1{,}2$ kg'] },
        ],
        solution: 'a) $2880\\pi \\approx 9048$ cm$^3$, b) ca. 3619 cm$^3$',
        hints: ['Bruk formelen for ellipsoide-volum'],
      },
    },
    {
      id: '10-4-4-exercise-14',
      type: 'exercise',
      exercise: {
        id: '10-4-4-oppg-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En silo har form som en sylinder med en halvkule på toppen og en kjegle i bunnen.',
        subTasks: [
          { label: 'a', task: 'Sylinderen har radius 4 m og høyde 10 m. Halvkulen og kjeglen har samme radius. Kjeglen har høyde 3 m. Finn totalvolumet.', solution: 'Sylinder: $\\pi \\cdot 16 \\cdot 10 = 160\\pi$ m$^3$. Halvkule: $\\frac{2}{3}\\pi \\cdot 64 = \\frac{128\\pi}{3}$ m$^3$. Kjegle: $\\frac{1}{3}\\pi \\cdot 16 \\cdot 3 = 16\\pi$ m$^3$. Totalt: $160\\pi + \\frac{128\\pi}{3} + 16\\pi = \\frac{656\\pi}{3} \\approx 687$ m$^3$', multipleChoiceOptions: ['$687$ m$^3$', '$502$ m$^3$', '$135$ m$^3$', '$818$ m$^3$'] },
          { label: 'b', task: 'Hvis siloen fylles med korn som veier 750 kg/m$^3$, hvor mye korn rommer siloen?', solution: 'Masse: $687 \\cdot 750 \\approx 515000$ kg $= 515$ tonn', multipleChoiceOptions: ['$515$ tonn', '$687$ tonn', '$377$ tonn', '$614$ tonn'] },
        ],
        solution: 'a) $\\frac{656\\pi}{3} \\approx 687$ m$^3$, b) ca. 515 tonn',
        hints: ['Del opp i tre separate figurer', 'Legg sammen volumene'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_5_1: TextbookChapter = {
  id: '10-5-1',
  courseId: '10',
  chapterNumber: '5.1',
  title: 'Kombinatorikk',
  description: 'Lær å telle antall muligheter systematisk med multiplikasjonsprinsippet, permutasjoner og kombinasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke kombinatorikk til å systematisk telle antall muligheter',
    'anvende multiplikasjonsprinsippet, permutasjoner og kombinasjoner i praktiske situasjoner',
    'skille mellom situasjoner der rekkefølge betyr noe og der den ikke gjør det',
  ],
  content: [
    // ========== INNLEDNING ==========
    {
      id: '10-5-1-intro',
      type: 'text',
      content: `## Innledning

Kombinatorikk handler om å telle antall muligheter på en systematisk måte. Dette er nyttig i mange sammenhenger - fra å beregne antall mulige passord til å finne sannsynligheter i spill og lotteri.

I dette kapittelet skal vi lære tre viktige verktøy:
- **Multiplikasjonsprinsippet** - for trinnvise valg
- **Permutasjoner** - når rekkefølge betyr noe
- **Kombinasjoner** - når rekkefølge ikke betyr noe`,
    },

    // ========== MULTIPLIKASJONSPRINSIPPET ==========
    {
      id: '10-5-1-def-mult',
      type: 'definition',
      title: 'Multiplikasjonsprinsippet',
      content: `Hvis en handling kan gjøres på $m$ måter, og en annen uavhengig handling kan gjøres på $n$ måter, kan begge handlingene til sammen gjøres på:

$$m \\cdot n \\text{ måter}$$

Dette kan utvides til flere handlinger: $m \\cdot n \\cdot p \\cdot ...$`,
    },

    {
      id: '10-5-1-ex-1',
      type: 'example',
      title: 'Eksempel 1: Antrekk',
      problem: `Marie har 4 bukser og 5 t-skjorter. Hvor mange ulike antrekk kan hun lage?`,
      solution: `**Løsning:**

Vi bruker multiplikasjonsprinsippet:

- Valg av bukse: 4 muligheter
- Valg av t-skjorte: 5 muligheter

Totalt antall antrekk = $4 \\cdot 5 = 20$

Marie kan lage **20 ulike antrekk**.`,
    },

    {
      id: '10-5-1-ex-2',
      type: 'example',
      title: 'Eksempel 2: PIN-kode',
      problem: `En PIN-kode består av 4 siffer (0-9). Hvor mange ulike PIN-koder finnes?`,
      solution: `**Løsning:**

Hvert siffer kan være 0, 1, 2, 3, 4, 5, 6, 7, 8 eller 9. Det gir 10 valg per posisjon.

Antall PIN-koder = $10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10\\,000$

Det finnes **10 000 ulike PIN-koder**.`,
    },

    // Oppgave 1
    {
      id: '10-5-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk multiplikasjonsprinsippet til å finne antall muligheter.',
        subTasks: [
          { label: 'a', task: 'En restaurant tilbyr 3 forretter, 5 hovedretter og 4 desserter. Hvor mange ulike 3-retters menyer kan settes sammen?', solution: '$3 \\cdot 5 \\cdot 4 = 60$ menyer', answer: 60 },
          { label: 'b', task: 'Et bilskilt har 2 bokstaver (A-Z) etterfulgt av 5 siffer (0-9). Hvor mange ulike skilt kan lages?', solution: '$26 \\cdot 26 \\cdot 10^5 = 67\\,600\\,000$ skilt', multipleChoiceOptions: ['$67\\,600\\,000$', '$676\\,000$', '$6\\,760\\,000$', '$67\\,600$'] },
          { label: 'c', task: 'Du skal velge brød (3 typer), pålegg (6 typer) og drikke (4 typer) til lunsj. Hvor mange kombinasjoner?', solution: '$3 \\cdot 6 \\cdot 4 = 72$ kombinasjoner', answer: 72 },
        ],
        solution: 'a) 60, b) 67 600 000, c) 72',
        hints: ['Gang antall valg for hver posisjon/kategori'],
      },
    },

    // Oppgave 2
    {
      id: '10-5-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene med multiplikasjonsprinsippet.',
        subTasks: [
          { label: 'a', task: 'Et passord skal ha 3 bokstaver (a-z, 26 valg) etterfulgt av 2 siffer (0-9). Hvor mange passord er mulige?', solution: '$26^3 \\cdot 10^2 = 17\\,576 \\cdot 100 = 1\\,757\\,600$ passord', multipleChoiceOptions: ['$1\\,757\\,600$', '$175\\,760$', '$17\\,576$', '$17\\,576\\,000$'] },
          { label: 'b', task: 'En kafé tilbyr 5 kaffetyper og 8 kakestykker. Hvor mange ulike kaffe-og-kake-valg finnes?', solution: '$5 \\cdot 8 = 40$ valg', answer: 40 },
          { label: 'c', task: 'Et flervalgstest har 10 spørsmål med 4 svaralternativer hver. Hvor mange ulike besvarelser er mulige?', solution: '$4^{10} = 1\\,048\\,576$ besvarelser', multipleChoiceOptions: ['$1\\,048\\,576$', '$40$', '$10\\,000$', '$104\\,857$'] },
        ],
        solution: 'a) 1 757 600, b) 40, c) 1 048 576',
        hints: ['Ved gjentatte like valg kan du bruke potenser'],
      },
    },

    // ========== FAKULTET OG PERMUTASJONER ==========
    {
      id: '10-5-1-def-fakultet',
      type: 'definition',
      title: 'Fakultet',
      content: `**Fakultet** skrives $n!$ (leses "n fakultet") og defineres som:

$$n! = n \\cdot (n-1) \\cdot (n-2) \\cdot ... \\cdot 2 \\cdot 1$$

**Eksempler:**
- $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$
- $4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$
- $1! = 1$
- $0! = 1$ (definert)`,
    },

    {
      id: '10-5-1-def-perm',
      type: 'definition',
      title: 'Permutasjoner',
      content: `En **permutasjon** er en ordnet rekkefølge av elementer.

**Antall permutasjoner av $n$ elementer:**
$$P_n = n!$$

**Antall permutasjoner av $r$ elementer valgt fra $n$ elementer:**
$$P(n,r) = \\frac{n!}{(n-r)!} = n \\cdot (n-1) \\cdot ... \\cdot (n-r+1)$$

Permutasjoner brukes når **rekkefølgen betyr noe**.`,
    },

    {
      id: '10-5-1-ex-3',
      type: 'example',
      title: 'Eksempel 3: Rekkefølge i kø',
      problem: `På hvor mange måter kan 6 personer stille seg på rekke?`,
      solution: `**Løsning:**

Første plass: 6 valg
Andre plass: 5 valg (én er allerede plassert)
Tredje plass: 4 valg
... og så videre

Antall måter = $6! = 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720$

Det er **720 måter** å stille seg på rekke.`,
    },

    {
      id: '10-5-1-ex-4',
      type: 'example',
      title: 'Eksempel 4: Pallplasser',
      problem: `I et løp med 10 deltakere skal det deles ut gull, sølv og bronse. På hvor mange måter kan de tre første plassene fordeles?`,
      solution: `**Løsning:**

Vi skal velge 3 fra 10, og rekkefølgen betyr noe (gull ≠ sølv ≠ bronse).

$$P(10,3) = \\frac{10!}{(10-3)!} = \\frac{10!}{7!} = 10 \\cdot 9 \\cdot 8 = 720$$

Alternativt: Gull kan gå til 10 stk, sølv til 9 stk, bronse til 8 stk: $10 \\cdot 9 \\cdot 8 = 720$

Det er **720 måter** å fordele pallplassene.`,
    },

    // Oppgave 3
    {
      id: '10-5-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn fakultet.',
        subTasks: [
          { label: 'a', task: 'Beregn $5!$', solution: '$5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$', answer: 120 },
          { label: 'b', task: 'Beregn $7!$', solution: '$7! = 7 \\cdot 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 5040$', answer: 5040 },
          { label: 'c', task: 'Forenkle $\\frac{8!}{6!}$', solution: '$\\frac{8!}{6!} = \\frac{8 \\cdot 7 \\cdot 6!}{6!} = 8 \\cdot 7 = 56$', answer: 56 },
          { label: 'd', task: 'Forenkle $\\frac{10!}{8!}$', solution: '$\\frac{10!}{8!} = 10 \\cdot 9 = 90$', answer: 90 },
        ],
        solution: 'a) 120, b) 5040, c) 56, d) 90',
        hints: ['Ved forenkling: Skriv ut og stryk like faktorer'],
      },
    },

    // Oppgave 4
    {
      id: '10-5-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgaver med permutasjoner.',
        subTasks: [
          { label: 'a', task: 'På hvor mange måter kan 5 bøker ordnes på en hylle?', solution: '$5! = 120$ måter', answer: 120 },
          { label: 'b', task: 'I en klasse på 25 elever skal det velges president, visepresident og sekretær. Hvor mange måter?', solution: '$P(25,3) = 25 \\cdot 24 \\cdot 23 = 13\\,800$ måter', answer: 13800 },
          { label: 'c', task: 'Hvor mange 4-sifrede tall kan lages av sifrene 1, 2, 3, 4, 5, 6 uten gjentagelse?', solution: '$P(6,4) = 6 \\cdot 5 \\cdot 4 \\cdot 3 = 360$ tall', answer: 360 },
        ],
        solution: 'a) 120, b) 13 800, c) 360',
        hints: ['Permutasjoner brukes når rekkefølge betyr noe'],
      },
    },

    // Oppgave 5
    {
      id: '10-5-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn antall permutasjoner.',
        subTasks: [
          { label: 'a', task: 'Et ord har 7 ulike bokstaver. På hvor mange måter kan bokstavene ordnes?', solution: '$7! = 5040$ måter', answer: 5040 },
          { label: 'b', task: 'Fra et fotballag på 11 spillere skal det velges kaptein og visekaptein. Antall måter?', solution: '$P(11,2) = 11 \\cdot 10 = 110$ måter', answer: 110 },
          { label: 'c', task: '8 løpere skal ha plass 1 til 4. Antall muligheter?', solution: '$P(8,4) = 8 \\cdot 7 \\cdot 6 \\cdot 5 = 1680$ muligheter', answer: 1680 },
        ],
        solution: 'a) 5040, b) 110, c) 1680',
        hints: ['Tenk: Betyr rekkefølgen noe?'],
      },
    },

    // ========== KOMBINASJONER ==========
    {
      id: '10-5-1-def-komb',
      type: 'definition',
      title: 'Kombinasjoner',
      content: `En **kombinasjon** er et utvalg der rekkefølgen **ikke** betyr noe.

Antall måter å velge $r$ elementer fra $n$ elementer når rekkefølgen ikke betyr noe:

$$C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$

Leses "$n$ over $r$" eller "$n$ velg $r$".

**Eksempel:** $\\binom{5}{2} = \\frac{5!}{2! \\cdot 3!} = \\frac{5 \\cdot 4}{2 \\cdot 1} = 10$`,
    },

    {
      id: '10-5-1-note-forskjell',
      type: 'note',
      content: `**Permutasjon vs. kombinasjon:**

- **Permutasjon:** Rekkefølge betyr noe. Eksempel: Hvem blir 1., 2. og 3.?
- **Kombinasjon:** Rekkefølge betyr ikke noe. Eksempel: Hvilke 3 personer blir valgt?

Tips: Spør deg selv "Betyr rekkefølgen noe?" for å velge riktig metode.`,
    },

    {
      id: '10-5-1-ex-5',
      type: 'example',
      title: 'Eksempel 5: Velge utvalg',
      problem: `En komité på 4 personer skal velges fra en gruppe på 10. På hvor mange måter kan dette gjøres?`,
      solution: `**Løsning:**

Rekkefølgen betyr ikke noe (alle i komiteen er likestilte), så vi bruker kombinasjoner.

$$\\binom{10}{4} = \\frac{10!}{4! \\cdot 6!} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{5040}{24} = 210$$

Det er **210 måter** å velge komiteen.`,
    },

    {
      id: '10-5-1-ex-6',
      type: 'example',
      title: 'Eksempel 6: Lotteri',
      problem: `I et lotteri trekkes 6 tall fra tallene 1-34. Hvor mange ulike kombinasjoner finnes?`,
      solution: `**Løsning:**

Rekkefølgen tallene trekkes i spiller ingen rolle (1, 5, 12, 20, 25, 34 er samme som 34, 25, 20, 12, 5, 1).

$$\\binom{34}{6} = \\frac{34!}{6! \\cdot 28!} = \\frac{34 \\cdot 33 \\cdot 32 \\cdot 31 \\cdot 30 \\cdot 29}{6!}$$

$$= \\frac{968\\,330\\,880}{720} = 1\\,344\\,904$$

Det finnes **1 344 904 kombinasjoner**.`,
    },

    // Oppgave 6
    {
      id: '10-5-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn kombinasjoner.',
        subTasks: [
          { label: 'a', task: 'Beregn $\\binom{6}{2}$', solution: '$\\binom{6}{2} = \\frac{6 \\cdot 5}{2 \\cdot 1} = 15$', answer: 15 },
          { label: 'b', task: 'Beregn $\\binom{8}{3}$', solution: '$\\binom{8}{3} = \\frac{8 \\cdot 7 \\cdot 6}{3 \\cdot 2 \\cdot 1} = 56$', answer: 56 },
          { label: 'c', task: 'Beregn $\\binom{10}{4}$', solution: '$\\binom{10}{4} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{4!} = \\frac{5040}{24} = 210$', answer: 210 },
          { label: 'd', task: 'Beregn $\\binom{7}{7}$', solution: '$\\binom{7}{7} = \\frac{7!}{7! \\cdot 0!} = 1$', answer: 1 },
        ],
        solution: 'a) 15, b) 56, c) 210, d) 1',
        hints: ['Bruk formelen og forenkle før du regner'],
      },
    },

    // Oppgave 7
    {
      id: '10-5-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs kombinasjonsproblemer.',
        subTasks: [
          { label: 'a', task: 'På hvor mange måter kan 3 elever velges fra en klasse på 15 til å representere klassen?', solution: '$\\binom{15}{3} = \\frac{15 \\cdot 14 \\cdot 13}{6} = 455$ måter', answer: 455 },
          { label: 'b', task: 'Et håndballag skal ha 7 spillere på banen. Hvor mange ulike lag kan settes sammen fra en tropp på 12?', solution: '$\\binom{12}{7} = \\frac{12!}{7! \\cdot 5!} = 792$ lag', answer: 792 },
          { label: 'c', task: 'I poker får du 5 kort fra en kortstokk på 52. Hvor mange ulike hender finnes?', solution: '$\\binom{52}{5} = 2\\,598\\,960$ hender', multipleChoiceOptions: ['$2\\,598\\,960$', '$259\\,896$', '$25\\,989\\,600$', '$311\\,875\\,200$'] },
        ],
        solution: 'a) 455, b) 792, c) 2 598 960',
        hints: ['Rekkefølge betyr ikke noe = kombinasjon'],
      },
    },

    // Oppgave 8
    {
      id: '10-5-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om det er permutasjon eller kombinasjon, og løs.',
        subTasks: [
          { label: 'a', task: 'Velge 4 sanger fra 20 til en spilleliste (rekkefølgen i spillelisten betyr noe)', solution: 'Permutasjon: $P(20,4) = 20 \\cdot 19 \\cdot 18 \\cdot 17 = 116\\,280$', multipleChoiceOptions: ['$116\\,280$', '$4845$', '$160\\,000$', '$5$'] },
          { label: 'b', task: 'Velge 4 ingredienser fra 10 til en salat', solution: 'Kombinasjon: $\\binom{10}{4} = 210$', answer: 210 },
          { label: 'c', task: 'Sette sammen en PIN-kode på 4 siffer (med gjentagelse)', solution: 'Multiplikasjonsprinsippet: $10^4 = 10\\,000$', answer: 10000 },
        ],
        solution: 'a) 116 280 (permutasjon), b) 210 (kombinasjon), c) 10 000 (mult.prinsipp)',
        hints: ['Tenk nøye gjennom hva oppgaven spør om'],
      },
    },

    // ========== SAMMENSATTE PROBLEMER ==========
    {
      id: '10-5-1-text-sammensatt',
      type: 'text',
      content: `## Sammensatte problemer

Noen ganger må vi kombinere flere metoder for å løse et problem. For eksempel kan vi bruke:

- **Totalt minus uønskede:** Finn alle muligheter, trekk fra de du ikke vil ha
- **Del opp i tilfeller:** Løs separat for hver situasjon, summer
- **Kombinere kombinatorikk:** Bruk både permutasjoner og kombinasjoner i samme oppgave`,
    },

    {
      id: '10-5-1-ex-7',
      type: 'example',
      title: 'Eksempel 7: Minst-problemer',
      problem: `Fra en gruppe på 6 gutter og 5 jenter skal det velges et utvalg på 4 personer. På hvor mange måter kan dette gjøres hvis det skal være minst 2 jenter?`,
      solution: `**Løsning:**

"Minst 2 jenter" betyr 2, 3 eller 4 jenter. Vi deler opp i tilfeller:

**2 jenter, 2 gutter:**
$\\binom{5}{2} \\cdot \\binom{6}{2} = 10 \\cdot 15 = 150$

**3 jenter, 1 gutt:**
$\\binom{5}{3} \\cdot \\binom{6}{1} = 10 \\cdot 6 = 60$

**4 jenter, 0 gutter:**
$\\binom{5}{4} \\cdot \\binom{6}{0} = 5 \\cdot 1 = 5$

**Totalt:** $150 + 60 + 5 = 215$ måter`,
    },

    // Oppgave 9
    {
      id: '10-5-1-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs sammensatte kombinatoriske problemer.',
        subTasks: [
          { label: 'a', task: 'Fra 7 nordmenn og 4 svensker skal det velges et lag på 5 med minst 2 svensker. Hvor mange måter?', solution: '2 sv + 3 no: $\\binom{4}{2} \\cdot \\binom{7}{3} = 6 \\cdot 35 = 210$. 3 sv + 2 no: $\\binom{4}{3} \\cdot \\binom{7}{2} = 4 \\cdot 21 = 84$. 4 sv + 1 no: $\\binom{4}{4} \\cdot \\binom{7}{1} = 1 \\cdot 7 = 7$. Totalt: $210 + 84 + 7 = 301$ måter', answer: 301 },
          { label: 'b', task: 'Et passord på 4 tegn skal inneholde minst ett siffer (0-9). Bokstaver er A-Z (26 stk). Antall muligheter?', solution: 'Totalt: $36^4$. Uten siffer: $26^4$. Med siffer: $36^4 - 26^4 = 1\\,679\\,616 - 456\\,976 = 1\\,222\\,640$', multipleChoiceOptions: ['$1\\,222\\,640$', '$1\\,679\\,616$', '$456\\,976$', '$36\\,000$'] },
        ],
        solution: 'a) 301, b) 1 222 640',
        hints: ['Del opp i tilfeller eller bruk "totalt minus uønskede"'],
      },
    },

    // Oppgave 10
    {
      id: '10-5-1-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs kombinasjonsproblemer med betingelser.',
        subTasks: [
          { label: 'a', task: 'En komité på 5 skal velges fra 10 personer. Én bestemt person MÅ være med. Hvor mange måter?', solution: 'Velg 4 til fra de 9 andre: $\\binom{9}{4} = 126$ måter', answer: 126 },
          { label: 'b', task: 'Samme som over, men to bestemte personer KAN IKKE begge være med. Antall måter?', solution: 'Totalt: $\\binom{10}{5} = 252$. Begge med: $\\binom{8}{3} = 56$. Uten begge: $252 - 56 = 196$ måter', answer: 196 },
          { label: 'c', task: 'Du har 8 ulike bøker og skal velge 3 til ferietur. Hvor mange utvalg har med favorittboken din?', solution: 'Favorittboken er med, velg 2 til fra 7: $\\binom{7}{2} = 21$ utvalg', answer: 21 },
        ],
        solution: 'a) 126, b) 196, c) 21',
        hints: ['Ved "må være med": Reduser problemet. Ved "kan ikke": Trekk fra.'],
      },
    },

    // Oppgave 11
    {
      id: '10-5-1-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgaver med kortspill.',
        subTasks: [
          { label: 'a', task: 'En kortstokk har 52 kort (4 farger, 13 verdier). Hvor mange måter kan du få 5 kort av samme farge (flush)?', solution: '4 farger, velg 5 kort fra 13 i hver: $4 \\cdot \\binom{13}{5} = 4 \\cdot 1287 = 5148$ måter', answer: 5148 },
          { label: 'b', task: 'Hvor mange måter kan du få 3 ess blant 5 kort?', solution: 'Velg 3 av 4 ess og 2 av 48 andre: $\\binom{4}{3} \\cdot \\binom{48}{2} = 4 \\cdot 1128 = 4512$ måter', answer: 4512 },
        ],
        solution: 'a) 5148, b) 4512',
        hints: ['Del opp problemet i deler og kombiner'],
      },
    },

    // Oppgave 12
    {
      id: '10-5-1-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Pascals trekant.',
        subTasks: [
          { label: 'a', task: 'Vis at $\\binom{n}{r} = \\binom{n}{n-r}$ ved å beregne $\\binom{6}{2}$ og $\\binom{6}{4}$', solution: '$\\binom{6}{2} = 15$ og $\\binom{6}{4} = \\frac{6 \\cdot 5 \\cdot 4 \\cdot 3}{24} = 15$. Begge er like!', multipleChoiceOptions: ['Begge gir 15', 'De gir forskjellige verdier', '$\\binom{6}{2} = 12$, $\\binom{6}{4} = 15$', 'Kan ikke sammenlignes'] },
          { label: 'b', task: 'Beregn $\\binom{5}{0} + \\binom{5}{1} + \\binom{5}{2} + \\binom{5}{3} + \\binom{5}{4} + \\binom{5}{5}$', solution: '$1 + 5 + 10 + 10 + 5 + 1 = 32 = 2^5$', answer: 32 },
          { label: 'c', task: 'Bruk at $\\binom{n}{r} + \\binom{n}{r+1} = \\binom{n+1}{r+1}$ til å finne $\\binom{8}{3}$ hvis du vet $\\binom{7}{2} = 21$ og $\\binom{7}{3} = 35$', solution: '$\\binom{8}{3} = \\binom{7}{2} + \\binom{7}{3} = 21 + 35 = 56$', answer: 56 },
        ],
        solution: 'a) Begge gir 15, b) 32, c) 56',
        hints: ['Pascals trekant viser kombinasjonstall'],
      },
    },

    // Oppgave 13
    {
      id: '10-5-1-exercise-13',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver i kombinatorikk.',
        subTasks: [
          { label: 'a', task: 'En sjakkturning har 8 deltakere. Alle spiller mot alle én gang. Hvor mange partier spilles?', solution: 'Hver kamp er et utvalg av 2 spillere: $\\binom{8}{2} = 28$ partier' },
          { label: 'b', task: 'Et sjakk-sett har 8 offiserer (dronning, tårn, løper, springer) på hver side. Hvor mange måter kan hvite offiserer plasseres på rad 1 (8 felt)?', solution: 'Alle 8 offiserer på 8 felt: $8! = 40\\,320$ måter' },
          { label: 'c', task: 'En pizzarestaurant har 12 toppinger. Du kan velge opptil 4. Hvor mange pizzavarianter finnes (inkludert uten topping)?', solution: '$\\binom{12}{0} + \\binom{12}{1} + \\binom{12}{2} + \\binom{12}{3} + \\binom{12}{4} = 1 + 12 + 66 + 220 + 495 = 794$ varianter' },
        ],
        solution: 'a) 28, b) 40 320, c) 794',
        hints: ['Tenk kreativt på hva som faktisk telles'],
      },
    },

    // Oppgave 14
    {
      id: '10-5-1-exercise-14',
      type: 'exercise',
      exercise: {
        id: '10-5-1-oppg-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Blandet øvelse - avgjør metode og løs.',
        subTasks: [
          { label: 'a', task: 'Hvor mange måter kan bokstavene i ordet MATTE ordnes? (Merk: to T-er)', solution: 'Med gjentakelse: $\\frac{5!}{2!} = \\frac{120}{2} = 60$ måter' },
          { label: 'b', task: 'Et treningspass skal inneholde 3 øvelser fra 8 mulige. Rekkefølgen er viktig. Antall muligheter?', solution: 'Permutasjon: $P(8,3) = 8 \\cdot 7 \\cdot 6 = 336$ muligheter' },
          { label: 'c', task: 'Lotto: 7 tall fra 1-34. Du krysser av 7 tall. Sannsynligheten for 7 rette? (som brøk)', solution: 'Muligheter: $\\binom{34}{7} = 5\\,379\\,616$. Sannsynlighet: $\\frac{1}{5\\,379\\,616}$' },
        ],
        solution: 'a) 60, b) 336, c) 1/5 379 616',
        hints: ['Identifiser først om rekkefølge betyr noe og om det er gjentakelse'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_5_2: TextbookChapter = {
  id: '10-5-2',
  courseId: '10',
  chapterNumber: '5.2',
  title: 'Sannsynlighetsberegning',
  description: 'Beregn sannsynligheter for uavhengige og avhengige hendelser, og lær om betinget sannsynlighet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne sannsynligheter for sammensatte hendelser',
    'skille mellom uavhengige og avhengige hendelser',
    'bruke formler for betinget sannsynlighet',
    'anvende addisjons- og multiplikasjonssetningen',
  ],
  content: [
    // ========== INNLEDNING ==========
    {
      id: '10-5-2-intro',
      type: 'text',
      content: `## Innledning

Sannsynlighetsregning handler om å beregne sjansen for at hendelser inntreffer. Vi bygger videre på klassisk sannsynlighet og lærer å håndtere mer komplekse situasjoner:

- **Uavhengige hendelser** - utfallet av én påvirker ikke den andre
- **Avhengige hendelser** - utfallet av én påvirker den andre
- **Betinget sannsynlighet** - sannsynlighet gitt at noe har skjedd`,
    },
    {
      id: '10-5-2-sannsynlighet-bilde',
      type: 'image',
      src: '/images/10-klasse/sannsynlighet-utfall.svg',
      alt: 'Illustrasjon av sannsynlighet og utfall',
      caption: 'Sannsynlighetsberegning - gunstige utfall av mulige utfall',
    },

    // ========== GRUNNLEGGENDE SANNSYNLIGHET ==========
    {
      id: '10-5-2-def-grunnlag',
      type: 'definition',
      title: 'Klassisk sannsynlighet',
      content: `Sannsynligheten for en hendelse $A$ er:

$$P(A) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$

**Viktige egenskaper:**
- $0 \\leq P(A) \\leq 1$
- $P(\\text{sikkert}) = 1$
- $P(\\text{umulig}) = 0$
- $P(\\text{ikke } A) = 1 - P(A)$`,
    },

    {
      id: '10-5-2-ex-1',
      type: 'example',
      title: 'Eksempel 1: Terningkast',
      problem: `En vanlig terning kastes. Finn sannsynligheten for å få:
a) Tallet 4
b) Et partall
c) Et tall større enn 4`,
      solution: `**Løsning:**

Mulige utfall: {1, 2, 3, 4, 5, 6} - totalt 6 utfall

a) Gunstige for "4": {4} - 1 utfall
$$P(4) = \\frac{1}{6}$$

b) Gunstige for partall: {2, 4, 6} - 3 utfall
$$P(\\text{partall}) = \\frac{3}{6} = \\frac{1}{2}$$

c) Gunstige for tall > 4: {5, 6} - 2 utfall
$$P(\\text{tall} > 4) = \\frac{2}{6} = \\frac{1}{3}$$`,
    },

    // Oppgave 1
    {
      id: '10-5-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn sannsynligheter for enkle hendelser.',
        subTasks: [
          { label: 'a', task: 'En terning kastes. Finn sannsynligheten for å få 6.', solution: '$P(6) = \\frac{1}{6}$', expressionAnswer: '1/6' },
          { label: 'b', task: 'En terning kastes. Finn sannsynligheten for å få et oddetall.', solution: '$P(\\text{oddetall}) = \\frac{3}{6} = \\frac{1}{2}$', expressionAnswer: '1/2' },
          { label: 'c', task: 'En mynt kastes. Finn sannsynligheten for kron.', solution: '$P(\\text{kron}) = \\frac{1}{2}$', expressionAnswer: '1/2' },
          { label: 'd', task: 'I en pose er det 4 røde, 3 blå og 2 grønne kuler. Finn sannsynligheten for å trekke en rød kule.', solution: '$P(\\text{rød}) = \\frac{4}{9}$', expressionAnswer: '4/9' },
        ],
        solution: 'a) 1/6, b) 1/2, c) 1/2, d) 4/9',
        hints: ['Tell gunstige og mulige utfall'],
      },
    },

    // ========== ADDISJONSSETNINGEN ==========
    {
      id: '10-5-2-def-addisjon',
      type: 'definition',
      title: 'Addisjonssetningen',
      content: `For to hendelser $A$ og $B$:

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

"$A \\cup B$" betyr "$A$ eller $B$ (eller begge)"
"$A \\cap B$" betyr "$A$ og $B$ (begge skjer)"

**Disjunkte hendelser** (kan ikke skje samtidig):
$$P(A \\cup B) = P(A) + P(B)$$`,
    },

    {
      id: '10-5-2-kortstokk-info',
      type: 'tip',
      title: 'Om kortstokken',
      content: `En standard kortstokk har **52 kort** fordelt på **4 farger**:

| Farge | Symbol | Farge på kortet |
|-------|--------|-----------------|
| **Hjerter** | ♥ | Rød |
| **Ruter** | ♦ | Rød |
| **Spar** | ♠ | Sort |
| **Kløver** | ♣ | Sort |

Hver farge har **13 kort**: Ess (1), 2, 3, 4, 5, 6, 7, 8, 9, 10, Knekt, Dame, Konge.

**Nyttige tall:**
- Totalt: 52 kort
- Hver farge: 13 kort
- Røde kort: 26 (hjerter + ruter)
- Sorte kort: 26 (spar + kløver)
- Ess: 4 (ett i hver farge)
- Bildekort (knekt, dame, konge): 12 (3 per farge)`,
    },
    {
      id: '10-5-2-ex-2',
      type: 'example',
      title: 'Eksempel 2: Korttrekk med addisjonssetningen',
      problem: `Fra en kortstokk med 52 kort trekkes ett kort. Finn sannsynligheten for å få ruter eller et ess.`,
      solution: `**Løsning:**

- Ruter: 13 kort $\\Rightarrow P(\\text{ruter}) = \\frac{13}{52}$
- Ess: 4 kort $\\Rightarrow P(\\text{ess}) = \\frac{4}{52}$
- Ruter-ess: 1 kort $\\Rightarrow P(\\text{ruter og ess}) = \\frac{1}{52}$

Siden man kan få ruter-ess (begge samtidig), bruker vi addisjonssetningen:

$$P(\\text{ruter eller ess}) = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$$`,
    },

    // Oppgave 2
    {
      id: '10-5-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk addisjonssetningen.',
        subTasks: [
          { label: 'a', task: 'En terning kastes. Finn sannsynligheten for å få 2 eller 5.', solution: 'Disjunkte: $P = \\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$', expressionAnswer: '1/3' },
          { label: 'b', task: 'Et kort trekkes. Finn sannsynligheten for spar eller knekt.', solution: '$P = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$', expressionAnswer: '4/13' },
          { label: 'c', task: 'I en klasse er 15 med i fotball og 12 i håndball, hvorav 5 i begge. Klassen har 30 elever. Finn sannsynligheten for at en tilfeldig elev er med i fotball eller håndball.', solution: '$P = \\frac{15}{30} + \\frac{12}{30} - \\frac{5}{30} = \\frac{22}{30} = \\frac{11}{15}$', expressionAnswer: '11/15' },
        ],
        solution: 'a) 1/3, b) 4/13, c) 11/15',
        hints: ['Sjekk om hendelsene kan skje samtidig'],
      },
    },

    // ========== UAVHENGIGE HENDELSER ==========
    {
      id: '10-5-2-def-uavhengig',
      type: 'definition',
      title: 'Uavhengige hendelser',
      content: `To hendelser er **uavhengige** hvis utfallet av den ene ikke påvirker sannsynligheten for den andre.

For uavhengige hendelser $A$ og $B$:
$$P(A \\cap B) = P(A) \\cdot P(B)$$

**Eksempler på uavhengige hendelser:**
- To terningkast
- Myntkast etter hverandre
- Trekking med tilbakelegging`,
    },

    {
      id: '10-5-2-ex-3',
      type: 'example',
      title: 'Eksempel 3: To terningkast',
      problem: `To terninger kastes. Finn sannsynligheten for å få 6 på begge.`,
      solution: `**Løsning:**

Terningene er uavhengige - resultatet av den ene påvirker ikke den andre.

$P(6 \\text{ på første}) = \\frac{1}{6}$

$P(6 \\text{ på andre}) = \\frac{1}{6}$

$$P(6 \\text{ på begge}) = \\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36}$$`,
    },

    {
      id: '10-5-2-ex-4',
      type: 'example',
      title: 'Eksempel 4: Gjentatte myntkast',
      problem: `En mynt kastes 4 ganger. Finn sannsynligheten for å få kron alle gangene.`,
      solution: `**Løsning:**

Hvert kast er uavhengig med $P(\\text{kron}) = \\frac{1}{2}$.

$$P(4 \\text{ kron}) = \\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$$`,
    },

    // Oppgave 3
    {
      id: '10-5-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn med uavhengige hendelser.',
        subTasks: [
          { label: 'a', task: 'To terninger kastes. Finn sannsynligheten for å få 1 på begge.', solution: '$P = \\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36}$', expressionAnswer: '1/36' },
          { label: 'b', task: 'En mynt kastes 3 ganger. Finn sannsynligheten for 3 kron.', solution: '$P = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$', expressionAnswer: '1/8' },
          { label: 'c', task: 'To kort trekkes MED tilbakelegging. Finn sannsynligheten for to ess.', solution: '$P = \\frac{4}{52} \\cdot \\frac{4}{52} = \\frac{16}{2704} = \\frac{1}{169}$', expressionAnswer: '1/169' },
        ],
        solution: 'a) 1/36, b) 1/8, c) 1/169',
        hints: ['Gang sannsynlighetene for uavhengige hendelser'],
      },
    },

    // Oppgave 4
    {
      id: '10-5-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgaver med uavhengige hendelser.',
        subTasks: [
          { label: 'a', task: 'Et lyskryss er grønt 40% av tiden. Finn sannsynligheten for grønt i to kryss etter hverandre.', solution: '$P = 0{,}40 \\cdot 0{,}40 = 0{,}16 = 16\\%$', answer: 16 },
          { label: 'b', task: 'En basketballspiller har 70% treffprosent på frikast. Finn sannsynligheten for å treffe 3 frikast på rad.', solution: '$P = 0{,}70^3 = 0{,}343 = 34{,}3\\%$', multipleChoiceOptions: ['$34{,}3\\%$', '$21\\%$', '$49\\%$', '$70\\%$'] },
          { label: 'c', task: 'En terning kastes 5 ganger. Finn sannsynligheten for å IKKE få 6 noen av gangene.', solution: '$P = \\left(\\frac{5}{6}\\right)^5 = \\frac{3125}{7776} \\approx 0{,}402 = 40{,}2\\%$', multipleChoiceOptions: ['$40{,}2\\%$', '$83{,}3\\%$', '$16{,}7\\%$', '$59{,}8\\%$'] },
        ],
        solution: 'a) 16%, b) 34,3%, c) 40,2%',
        hints: ['Ved "ikke": Bruk 1 - P(hendelsen)'],
      },
    },

    // ========== AVHENGIGE HENDELSER ==========
    {
      id: '10-5-2-def-avhengig',
      type: 'definition',
      title: 'Avhengige hendelser',
      content: `To hendelser er **avhengige** hvis utfallet av den ene påvirker sannsynligheten for den andre.

For avhengige hendelser bruker vi **multiplikasjonssetningen**:
$$P(A \\cap B) = P(A) \\cdot P(B|A)$$

der $P(B|A)$ er sannsynligheten for $B$ gitt at $A$ har skjedd.

**Eksempler på avhengige hendelser:**
- Trekking UTEN tilbakelegging
- Velge personer til verv (når én er valgt, kan samme person ikke velges igjen)`,
    },

    {
      id: '10-5-2-ex-5',
      type: 'example',
      title: 'Eksempel 5: Trekking uten tilbakelegging',
      problem: `Fra en kortstokk trekkes to kort UTEN tilbakelegging. Finn sannsynligheten for at begge er ess.`,
      solution: `**Løsning:**

Første kort - ess: $P = \\frac{4}{52}$

Andre kort - ess (gitt at første var ess): $P = \\frac{3}{51}$ (3 ess igjen av 51 kort)

$$P(\\text{to ess}) = \\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$$`,
    },

    {
      id: '10-5-2-ex-6',
      type: 'example',
      title: 'Eksempel 6: Kuler i pose',
      problem: `En pose inneholder 5 røde og 3 blå kuler. To kuler trekkes uten tilbakelegging. Finn sannsynligheten for at begge er røde.`,
      solution: `**Løsning:**

Totalt 8 kuler (5 røde, 3 blå).

Første rød: $P = \\frac{5}{8}$

Andre rød (gitt første rød): $P = \\frac{4}{7}$ (4 røde igjen av 7 kuler)

$$P(\\text{to røde}) = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$$`,
    },

    // Oppgave 5
    {
      id: '10-5-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn med avhengige hendelser (uten tilbakelegging).',
        subTasks: [
          { label: 'a', task: 'To kort trekkes uten tilbakelegging. Finn sannsynligheten for to hjerter.', solution: '$P = \\frac{13}{52} \\cdot \\frac{12}{51} = \\frac{156}{2652} = \\frac{1}{17}$', expressionAnswer: '1/17' },
          { label: 'b', task: 'En pose har 6 røde og 4 grønne kuler. To trekkes uten tilbakelegging. Sannsynlighet for to grønne?', solution: '$P = \\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$', expressionAnswer: '2/15' },
          { label: 'c', task: 'Fra en gruppe på 8 jenter og 7 gutter velges to tilfeldig. Sannsynligheten for to gutter?', solution: '$P = \\frac{7}{15} \\cdot \\frac{6}{14} = \\frac{42}{210} = \\frac{1}{5}$', expressionAnswer: '1/5' },
        ],
        solution: 'a) 1/17, b) 2/15, c) 1/5',
        hints: ['Ved trekk 2: Juster teller og nevner etter første trekk'],
      },
    },

    // Oppgave 6
    {
      id: '10-5-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgaver med flere trekninger uten tilbakelegging.',
        subTasks: [
          { label: 'a', task: 'Tre kort trekkes uten tilbakelegging. Finn sannsynligheten for tre spar.', solution: '$P = \\frac{13}{52} \\cdot \\frac{12}{51} \\cdot \\frac{11}{50} = \\frac{1716}{132600} = \\frac{11}{850}$', expressionAnswer: '11/850' },
          { label: 'b', task: 'En pose har 10 kuler: 6 hvite og 4 svarte. Tre trekkes. Sannsynligheten for tre hvite?', solution: '$P = \\frac{6}{10} \\cdot \\frac{5}{9} \\cdot \\frac{4}{8} = \\frac{120}{720} = \\frac{1}{6}$', expressionAnswer: '1/6' },
        ],
        solution: 'a) 11/850, b) 1/6',
        hints: ['Fortsett å justere for hvert trekk'],
      },
    },

    // ========== BETINGET SANNSYNLIGHET ==========
    {
      id: '10-5-2-def-betinget',
      type: 'definition',
      title: 'Betinget sannsynlighet',
      content: `**Betinget sannsynlighet** $P(B|A)$ er sannsynligheten for $B$ gitt at $A$ har skjedd:

$$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$$

Leses "sannsynligheten for B gitt A".

Fra denne formelen får vi multiplikasjonssetningen:
$$P(A \\cap B) = P(A) \\cdot P(B|A)$$`,
    },

    {
      id: '10-5-2-ex-7',
      type: 'example',
      title: 'Eksempel 7: Betinget sannsynlighet',
      problem: `I en klasse er 60% jenter. 30% av jentene spiller fotball, og 50% av guttene spiller fotball. Finn sannsynligheten for at en tilfeldig elev som spiller fotball er jente.`,
      solution: `**Løsning:**

La J = jente, G = gutt, F = spiller fotball.

$P(J) = 0{,}60$, $P(G) = 0{,}40$
$P(F|J) = 0{,}30$, $P(F|G) = 0{,}50$

Først finner vi $P(F)$ med total sannsynlighet:
$$P(F) = P(J) \\cdot P(F|J) + P(G) \\cdot P(F|G)$$
$$= 0{,}60 \\cdot 0{,}30 + 0{,}40 \\cdot 0{,}50 = 0{,}18 + 0{,}20 = 0{,}38$$

Nå bruker vi Bayes' setning:
$$P(J|F) = \\frac{P(J) \\cdot P(F|J)}{P(F)} = \\frac{0{,}60 \\cdot 0{,}30}{0{,}38} = \\frac{0{,}18}{0{,}38} \\approx 0{,}474$$

Sannsynligheten er ca. **47,4%**.`,
    },

    // Oppgave 7
    {
      id: '10-5-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk betinget sannsynlighet.',
        subTasks: [
          { label: 'a', task: 'I en gruppe er 40% gutter. 25% av guttene har briller, og 20% av jentene har briller. Finn sannsynligheten for at en tilfeldig person med briller er gutt.', solution: 'P(briller) = 0,40·0,25 + 0,60·0,20 = 0,10 + 0,12 = 0,22. P(gutt|briller) = 0,10/0,22 = 5/11 ≈ 45,5%', multipleChoiceOptions: ['$\\frac{5}{11} \\approx 45{,}5\\%$', '$40\\%$', '$25\\%$', '$60\\%$'] },
          { label: 'b', task: 'En test for en sykdom er positiv 95% av tiden hvis personen er syk, og positiv 3% av tiden hvis personen er frisk. 1% av befolkningen er syk. Finn sannsynligheten for å være syk gitt positiv test.', solution: 'P(positiv) = 0,01·0,95 + 0,99·0,03 = 0,0095 + 0,0297 = 0,0392. P(syk|positiv) = 0,0095/0,0392 ≈ 24,2%', multipleChoiceOptions: ['$\\approx 24{,}2\\%$', '$95\\%$', '$1\\%$', '$3\\%$'] },
        ],
        solution: 'a) 5/11 ≈ 45,5%, b) ≈ 24,2%',
        hints: ['Bruk total sannsynlighet først, deretter Bayes'],
      },
    },

    // ========== KOMPLEMENTÆR SANNSYNLIGHET ==========
    {
      id: '10-5-2-text-komplement',
      type: 'text',
      content: `## Komplementær sannsynlighet

For hendelser av typen "minst én" er det ofte lettere å regne:

$$P(\\text{minst én}) = 1 - P(\\text{ingen})$$

Dette kalles **komplementmetoden**.`,
    },

    {
      id: '10-5-2-ex-8',
      type: 'example',
      title: 'Eksempel 8: Minst én 6-er',
      problem: `En terning kastes 4 ganger. Finn sannsynligheten for å få minst én 6-er.`,
      solution: `**Løsning:**

$P(\\text{minst én 6-er}) = 1 - P(\\text{ingen 6-ere})$

$P(\\text{ikke 6}) = \\frac{5}{6}$ for hvert kast.

$$P(\\text{ingen 6-ere}) = \\left(\\frac{5}{6}\\right)^4 = \\frac{625}{1296}$$

$$P(\\text{minst én 6-er}) = 1 - \\frac{625}{1296} = \\frac{671}{1296} \\approx 0{,}518$$

Sannsynligheten er ca. **51,8%**.`,
    },

    // Oppgave 8
    {
      id: '10-5-2-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk komplementmetoden.',
        subTasks: [
          { label: 'a', task: 'En mynt kastes 5 ganger. Finn sannsynligheten for minst én kron.', solution: '$P = 1 - (\\frac{1}{2})^5 = 1 - \\frac{1}{32} = \\frac{31}{32}$', expressionAnswer: '31/32' },
          { label: 'b', task: 'To terninger kastes. Finn sannsynligheten for at minst én viser 1.', solution: '$P = 1 - (\\frac{5}{6})^2 = 1 - \\frac{25}{36} = \\frac{11}{36}$', expressionAnswer: '11/36' },
          { label: 'c', task: 'En familie har 4 barn. Finn sannsynligheten for minst én jente (50/50 for hvert barn).', solution: '$P = 1 - (\\frac{1}{2})^4 = 1 - \\frac{1}{16} = \\frac{15}{16}$', expressionAnswer: '15/16' },
        ],
        solution: 'a) 31/32, b) 11/36, c) 15/16',
        hints: ['1 - P(ingen) = P(minst én)'],
      },
    },

    // ========== SAMMENSATTE PROBLEMER ==========
    {
      id: '10-5-2-text-sammensatt',
      type: 'text',
      content: `## Sammensatte problemer

I mange oppgaver må vi kombinere flere teknikker:
- Telle utfall med kombinatorikk
- Bruke addisjons- eller multiplikasjonssetningen
- Avgjøre om hendelser er uavhengige eller avhengige
- Bruke komplementmetoden`,
    },

    {
      id: '10-5-2-ex-9',
      type: 'example',
      title: 'Eksempel 9: Terningsum',
      problem: `To terninger kastes. Finn sannsynligheten for at summen blir 7.`,
      solution: `**Løsning:**

Totalt antall utfall: $6 \\cdot 6 = 36$

Gunstige utfall (sum = 7):
(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) - totalt 6 utfall

$$P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6}$$`,
    },

    // Oppgave 9
    {
      id: '10-5-2-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgaver med to terninger.',
        subTasks: [
          { label: 'a', task: 'To terninger kastes. Finn sannsynligheten for sum 11.', solution: 'Gunstige: (5,6), (6,5) = 2 utfall. $P = \\frac{2}{36} = \\frac{1}{18}$', expressionAnswer: '1/18' },
          { label: 'b', task: 'To terninger kastes. Finn sannsynligheten for at summen er minst 10.', solution: 'Sum 10: (4,6), (5,5), (6,4) = 3. Sum 11: 2. Sum 12: (6,6) = 1. Totalt 6. $P = \\frac{6}{36} = \\frac{1}{6}$', expressionAnswer: '1/6' },
          { label: 'c', task: 'To terninger kastes. Finn sannsynligheten for at produktet er 12.', solution: 'Gunstige: (2,6), (3,4), (4,3), (6,2) = 4 utfall. $P = \\frac{4}{36} = \\frac{1}{9}$', expressionAnswer: '1/9' },
        ],
        solution: 'a) 1/18, b) 1/6, c) 1/9',
        hints: ['List opp gunstige utfall systematisk'],
      },
    },

    // Oppgave 10
    {
      id: '10-5-2-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte sannsynlighetsoppgaver.',
        subTasks: [
          { label: 'a', task: 'Tre kort trekkes fra en kortstokk uten tilbakelegging. Finn sannsynligheten for minst ett ess.', solution: 'P(ingen ess) = $\\frac{48}{52} \\cdot \\frac{47}{51} \\cdot \\frac{46}{50} = \\frac{103776}{132600} \\approx 0{,}783$. P(minst ett) = $1 - 0{,}783 \\approx 0{,}217 = 21{,}7\\%$', multipleChoiceOptions: ['$\\approx 21{,}7\\%$', '$\\approx 7{,}7\\%$', '$\\approx 78{,}3\\%$', '$\\approx 50\\%$'] },
          { label: 'b', task: 'En pose har 3 røde, 2 blå og 5 grønne kuler. To trekkes. Finn sannsynligheten for ulike farger.', solution: 'P(like) = P(2 røde) + P(2 blå) + P(2 grønne) = $\\frac{3 \\cdot 2 + 2 \\cdot 1 + 5 \\cdot 4}{10 \\cdot 9} = \\frac{28}{90}$. P(ulike) = $1 - \\frac{28}{90} = \\frac{62}{90} = \\frac{31}{45}$', expressionAnswer: '31/45' },
        ],
        solution: 'a) ≈ 21,7%, b) 31/45',
        hints: ['Bruk komplementmetoden der det er hensiktsmessig'],
      },
    },

    // Oppgave 11
    {
      id: '10-5-2-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs utfordrende sannsynlighetsoppgaver.',
        subTasks: [
          { label: 'a', task: '3 venner møtes. Finn sannsynligheten for at minst 2 har bursdag samme ukedag.', solution: 'P(alle ulike) = $\\frac{7}{7} \\cdot \\frac{6}{7} \\cdot \\frac{5}{7} = \\frac{30}{49}$. P(minst 2 like) = $1 - \\frac{30}{49} = \\frac{19}{49} \\approx 38{,}8\\%$', expressionAnswer: '19/49' },
          { label: 'b', task: 'Du skal kaste en terning til du får 6. Finn sannsynligheten for at du trenger nøyaktig 3 kast.', solution: 'Først to ikke-6-ere, så en 6: $P = \\frac{5}{6} \\cdot \\frac{5}{6} \\cdot \\frac{1}{6} = \\frac{25}{216}$', expressionAnswer: '25/216' },
          { label: 'c', task: 'Et lag vinner hver kamp med 60% sannsynlighet. Finn sannsynligheten for å vinne minst 2 av 3 kamper.', solution: '2 seire: $\\binom{3}{2} \\cdot 0{,}6^2 \\cdot 0{,}4 = 3 \\cdot 0{,}144 = 0{,}432$. 3 seire: $0{,}6^3 = 0{,}216$. Totalt: $0{,}432 + 0{,}216 = 0{,}648 = 64{,}8\\%$', multipleChoiceOptions: ['$64{,}8\\%$', '$43{,}2\\%$', '$21{,}6\\%$', '$60\\%$'] },
        ],
        solution: 'a) 19/49 ≈ 38,8%, b) 25/216, c) 64,8%',
        hints: ['Del opp i tilfeller eller bruk komplementmetoden'],
      },
    },

    // Oppgave 12
    {
      id: '10-5-2-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Avgjør om hendelsene er uavhengige eller avhengige, og beregn.',
        subTasks: [
          { label: 'a', task: 'En mønt kastes og en terning kastes. Finn P(kron OG 6).', solution: 'Uavhengige: $P = \\frac{1}{2} \\cdot \\frac{1}{6} = \\frac{1}{12}$', expressionAnswer: '1/12' },
          { label: 'b', task: 'Fra en kortstokk trekkes 2 kort uten tilbakelegging. Finn P(første er ruter OG andre er spar).', solution: 'Avhengige: $P = \\frac{13}{52} \\cdot \\frac{13}{51} = \\frac{169}{2652} = \\frac{13}{204}$', expressionAnswer: '13/204' },
          { label: 'c', task: 'En pose har 5 hvite og 5 svarte kuler. Én trekkes, legges tilbake, så trekkes én til. P(begge hvite)?', solution: 'Med tilbakelegging = uavhengige: $P = \\frac{5}{10} \\cdot \\frac{5}{10} = \\frac{1}{4}$', expressionAnswer: '1/4' },
        ],
        solution: 'a) 1/12 (uavh.), b) 13/204 (avh.), c) 1/4 (uavh.)',
        hints: ['Tilbakelegging = uavhengig, uten tilbakelegging = avhengig'],
      },
    },

    // Oppgave 13
    {
      id: '10-5-2-exercise-13',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk trediagram eller tabell.',
        subTasks: [
          { label: 'a', task: 'En mynt kastes to ganger. Bruk et utfallstre til å finne sannsynligheten for nøyaktig én kron.', solution: 'Utfall: KK, KM, MK, MM. Nøyaktig én K: KM, MK = 2 av 4. $P = \\frac{2}{4} = \\frac{1}{2}$', expressionAnswer: '1/2' },
          { label: 'b', task: 'To terninger kastes. Lag en tabell over alle summer og finn den mest sannsynlige summen.', solution: 'Sum 7 har flest kombinasjoner (6 stk): (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). $P(7) = \\frac{6}{36} = \\frac{1}{6}$', answer: 7 },
        ],
        solution: 'a) 1/2, b) Sum 7 med P = 1/6',
        hints: ['Systematisk opplisting hjelper'],
      },
    },

    // Oppgave 14
    {
      id: '10-5-2-exercise-14',
      type: 'exercise',
      exercise: {
        id: '10-5-2-oppg-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver i sannsynlighet.',
        subTasks: [
          { label: 'a', task: 'En boks inneholder 2 gullmynter og 3 sølvmynter. Du trekker 2 mynter. Gitt at den første er gull, hva er sannsynligheten for at den andre også er gull?', solution: 'Betinget: 1 gull igjen av 4 mynter. $P(\\text{andre gull}|\\text{første gull}) = \\frac{1}{4}$', expressionAnswer: '1/4' },
          { label: 'b', task: 'Fødselsdagsparadokset: I en gruppe på 23 personer, finn sannsynligheten for at minst to har samme bursdag (ignorer skuddår).', solution: 'P(alle ulike) = $\\frac{365}{365} \\cdot \\frac{364}{365} \\cdot ... \\cdot \\frac{343}{365} \\approx 0{,}493$. P(minst 2 like) $\\approx 50{,}7\\%$', multipleChoiceOptions: ['$\\approx 50{,}7\\%$', '$\\approx 6{,}3\\%$', '$\\approx 49{,}3\\%$', '$\\approx 93{,}7\\%$'] },
          { label: 'c', task: 'Du kaster 3 terninger. Finn sannsynligheten for at alle viser samme tall (Yatzy).', solution: '6 gunstige utfall (111, 222, ..., 666) av $6^3 = 216$ mulige. $P = \\frac{6}{216} = \\frac{1}{36}$', expressionAnswer: '1/36' },
        ],
        solution: 'a) 1/4, b) ≈ 50,7%, c) 1/36',
        hints: ['Les oppgaven nøye og tenk på hva som er gitt'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_5_3: TextbookChapter = {
  id: '10-5-3',
  courseId: '10',
  chapterNumber: '5.3',
  title: 'Statistiske undersokelser',
  description: 'Lær å planlegge, gjennomføre og analysere statistiske undersøkelser, og vurder gyldigheten av konklusjonene.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre statistiske undersøkelser',
    'vurdere hvor gyldige konklusjonene er',
    'identifisere feilkilder og skjevheter i undersøkelser',
    'presentere og tolke statistiske data',
  ],
  content: [
    // ========== INNLEDNING ==========
    {
      id: '10-5-3-intro',
      type: 'text',
      content: `## Innledning

Statistiske undersøkelser brukes overalt - i forskning, politikk, media og næringsliv. For å kunne tolke og vurdere slike undersøkelser kritisk, må vi forstå hvordan de gjennomføres og hvilke feilkilder som kan oppstå.

I dette kapittelet lærer vi:
- Hvordan planlegge en undersøkelse
- Ulike utvalgsmetoder
- Hvordan analysere og presentere data
- Hvordan vurdere gyldigheten av resultater`,
    },
    {
      id: '10-5-3-boksplot-bilde',
      type: 'image',
      src: '/images/10-klasse/statistikk-boksplot.svg',
      alt: 'Boksplot som viser femtallsoppsummering av data',
      caption: 'Boksplot - en grafisk fremstilling av data med kvartiler',
    },

    // ========== PLANLEGGING ==========
    {
      id: '10-5-3-def-begreper',
      type: 'definition',
      title: 'Grunnleggende begreper',
      content: `**Populasjon:** Hele gruppen vi ønsker å si noe om (f.eks. alle elever i Norge)

**Utvalg:** Den delen av populasjonen vi faktisk undersøker

**Representativt utvalg:** Et utvalg som gjenspeiler populasjonen godt

**Variabel:** Det vi måler eller observerer (f.eks. alder, karakter, mening)

**Kvantitativ variabel:** Kan måles med tall (høyde, inntekt)

**Kvalitativ variabel:** Beskriver egenskaper (kjønn, favorittfarge)`,
    },

    {
      id: '10-5-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Identifisere populasjon og utvalg',
      problem: `En skole vil undersøke hvor fornøyde elevene er med kantina. De spør 50 tilfeldig valgte elever. Identifiser populasjon, utvalg og variabel.`,
      solution: `**Løsning:**

- **Populasjon:** Alle elever på skolen
- **Utvalg:** De 50 elevene som ble spurt
- **Variabel:** Tilfredshet med kantina (kvalitativ variabel)

For at utvalget skal være representativt, bør de 50 elevene være tilfeldig valgt fra ulike trinn og klasser.`,
    },

    // Oppgave 1
    {
      id: '10-5-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identifiser populasjon, utvalg og variabel.',
        subTasks: [
          { label: 'a', task: 'NRK spør 1000 nordmenn om de vil ha ny regjering.', solution: 'Populasjon: Alle nordmenn (stemmeberettigede). Utvalg: De 1000 spurte. Variabel: Mening om regjeringsskifte (kvalitativ).', multipleChoiceOptions: ['Kvalitativ variabel', 'Kvantitativ variabel'] },
          { label: 'b', task: 'En lege måler blodtrykket til 200 pasienter for å undersøke blodtrykk i befolkningen.', solution: 'Populasjon: Befolkningen. Utvalg: De 200 pasientene. Variabel: Blodtrykk (kvantitativ). OBS: Pasienter er ikke representative for hele befolkningen!', multipleChoiceOptions: ['Kvantitativ variabel', 'Kvalitativ variabel'] },
          { label: 'c', task: 'En klasse undersøker skostørrelse blant 10.-klassinger på skolen ved å måle alle i klassen.', solution: 'Populasjon: Alle 10.-klassinger på skolen. Utvalg: Elevene i klassen. Variabel: Skostørrelse (kvantitativ).', multipleChoiceOptions: ['Kvantitativ variabel', 'Kvalitativ variabel'] },
        ],
        solution: 'Se deloppgavene',
        hints: ['Populasjon = hvem vil vi si noe om? Utvalg = hvem spurte/målte vi?'],
      },
    },

    // ========== UTVALGSMETODER ==========
    {
      id: '10-5-3-def-utvalg',
      type: 'definition',
      title: 'Utvalgsmetoder',
      content: `**Tilfeldig utvalg (randomisert):** Alle i populasjonen har lik sannsynlighet for å bli valgt. Gir representative utvalg.

**Stratifisert utvalg:** Populasjonen deles i grupper (strata), og tilfeldig utvalg trekkes fra hver gruppe. Sikrer at viktige undergrupper er representert.

**Bekvemmelighetsutvalg:** Man spør de som er lettest tilgjengelige. Gir ofte skjeve resultater.

**Selvseleksjon:** Folk velger selv å delta (f.eks. nettavstemninger). Gir skjeve resultater.`,
    },

    {
      id: '10-5-3-warning-skjevt',
      type: 'warning',
      title: 'Skjeve utvalg',
      content: `Et **skjevt utvalg** gjenspeiler ikke populasjonen. Dette kan skyldes:

- Bekvemmelighetsutvalg (f.eks. bare spørre venner)
- Selvseleksjon (bare engasjerte svarer)
- Systematisk frafall (visse grupper deltar ikke)
- For lite utvalg

Skjeve utvalg kan gi **villedende konklusjoner**!`,
    },

    // Oppgave 2
    {
      id: '10-5-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder utvalgsmetoder.',
        subTasks: [
          { label: 'a', task: 'En forsker vil undersøke treningsvaner blant voksne. Hun spør folk på et treningssenter. Hva er problemet?', solution: 'Bekvemmelighetsutvalg som er skjevt - de på treningssenter trener mer enn gjennomsnittet.', multipleChoiceOptions: ['Bekvemmelighetsutvalg (skjevt utvalg)', 'Stratifisert utvalg', 'Tilfeldig utvalg', 'Selvseleksjonsutvalg'] },
          { label: 'b', task: 'En nettavis ber lesere stemme på beste norske fotballspiller. Er dette representativt for nordmenns mening?', solution: 'Nei, selvseleksjon - bare interesserte lesere stemmer, og nettavisens lesere er ikke representative.', multipleChoiceOptions: ['Nei, selvseleksjon gir skjevt utvalg', 'Ja, alle kan delta', 'Ja, nettaviser har mange lesere', 'Delvis, avhenger av antall svar'] },
          { label: 'c', task: 'Hvordan kunne treningsforskningen i oppgave a) gjøres bedre?', solution: 'Tilfeldig utvalg fra folkeregisteret, eller stratifisert utvalg fra ulike aldersgrupper og regioner.', multipleChoiceOptions: ['Tilfeldig eller stratifisert utvalg fra befolkningen', 'Spørre flere på treningssenteret', 'Bruke selvseleksjon via nett', 'Bare spørre unge voksne'] },
        ],
        solution: 'Se deloppgavene',
        hints: ['Tenk: Hvem blir ikke representert?'],
      },
    },

    // ========== FEILKILDER ==========
    {
      id: '10-5-3-def-feilkilder',
      type: 'definition',
      title: 'Feilkilder i undersøkelser',
      content: `**Utvalgsfeil:** Utvalget er ikke representativt

**Målefeil:** Unøyaktige målinger eller svar

**Ledende spørsmål:** Spørsmålsformulering påvirker svar

**Sosial ønskelighet:** Folk svarer det som er "sosialt akseptabelt"

**Frafall:** Noen velger å ikke svare (kan være systematisk)

**Tilfeldige feil:** Variasjon som skyldes tilfeldigheter`,
    },

    {
      id: '10-5-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Identifisere feilkilder',
      problem: `En undersøkelse spør: "Er du enig i at vi bør bruke mer penger på miljøvern for å redde planeten?" 85% svarer ja. Hvilke feilkilder kan påvirke resultatet?`,
      solution: `**Mulige feilkilder:**

1. **Ledende spørsmål:** "redde planeten" er positivt ladet og påvirker svaret

2. **Sosial ønskelighet:** Folk vil fremstå miljøbevisste

3. **Manglende nyanse:** Spørsmålet gir ikke rom for "ja, men ikke på bekostning av X"

**Bedre spørsmål:** "Bør staten øke miljøbudsjettet, selv om det betyr kutt andre steder?" med svaralternativer fra "helt uenig" til "helt enig"`,
    },

    // Oppgave 3
    {
      id: '10-5-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser feilkilder.',
        subTasks: [
          { label: 'a', task: 'En undersøkelse om alkoholvaner spør folk ansikt til ansikt. Mange sier de drikker lite. Hvilken feilkilde?', solution: 'Sosial ønskelighet - folk underrapporterer alkoholbruk i personlige intervjuer.', multipleChoiceOptions: ['Sosial ønskelighet', 'Ledende spørsmål', 'Utvalgsfeil', 'Målefeil'] },
          { label: 'b', task: 'Spørsmål: "Støtter du den farlige ulvejakten?" Hva er problemet?', solution: 'Ledende spørsmål - ordet "farlige" påvirker svaret negativt mot ulvejakt.', multipleChoiceOptions: ['Ledende spørsmål', 'Sosial ønskelighet', 'Frafall', 'Utvalgsfeil'] },
          { label: 'c', task: 'En spørreundersøkelse har 30% svarrate. Kan dette være et problem?', solution: 'Ja, frafall kan være systematisk - kanskje de 70% som ikke svarte har andre meninger.', multipleChoiceOptions: ['Ja, frafall kan gi skjevt resultat', 'Nei, 30% er nok', 'Nei, flertallet svarte', 'Bare hvis utvalget er lite'] },
        ],
        solution: 'Se deloppgavene',
        hints: ['Tenk: Hva kan få folk til å svare annerledes enn de egentlig mener?'],
      },
    },

    // ========== ANALYSE OG PRESENTASJON ==========
    {
      id: '10-5-3-text-analyse',
      type: 'text',
      content: `## Analyse og presentasjon av data

Etter å ha samlet inn data, må vi analysere og presentere dem. Vi bruker:

- **Sentralmål:** Gjennomsnitt, median, typetall
- **Spredningsmål:** Variasjonsbredde, standardavvik
- **Diagrammer:** Søylediagram, sektordiagram, histogram, boksplott
- **Tabeller:** Frekvenstabeller, krysstabeller`,
    },

    {
      id: '10-5-3-def-sentralmal',
      type: 'definition',
      title: 'Sentralmål',
      content: `**Gjennomsnitt:** $\\bar{x} = \\frac{\\sum x_i}{n}$ - summen av alle verdier delt på antall

**Median:** Den midterste verdien når data er sortert

**Typetall (modus):** Den verdien som forekommer oftest

**Når bruke hva?**
- Gjennomsnitt: Symmetrisk fordeling uten ekstremverdier
- Median: Skjev fordeling eller ekstremverdier
- Typetall: Kvalitative data eller når vi vil vite det vanligste`,
    },

    {
      id: '10-5-3-ex-3',
      type: 'example',
      title: 'Eksempel 3: Beregne sentralmål',
      problem: `Karakterene på en prøve var: 2, 3, 3, 4, 4, 4, 5, 5, 6. Finn gjennomsnitt, median og typetall.`,
      solution: `**Løsning:**

**Gjennomsnitt:**
$$\\bar{x} = \\frac{2+3+3+4+4+4+5+5+6}{9} = \\frac{36}{9} = 4$$

**Median:**
Data er sortert. Med 9 verdier er median den 5. verdien.
Median = **4**

**Typetall:**
4 forekommer 3 ganger (mest).
Typetall = **4**

Alle tre sentralmålene er 4, noe som indikerer en symmetrisk fordeling.`,
    },

    // Oppgave 4
    {
      id: '10-5-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn sentralmål.',
        subTasks: [
          { label: 'a', task: 'Alder på 8 fotballspillere: 22, 24, 25, 25, 26, 27, 29, 35. Finn gjennomsnitt og median.', solution: 'Gj.snitt: $(22+24+25+25+26+27+29+35)/8 = 213/8 = 26{,}625$. Median: $(25+26)/2 = 25{,}5$', multipleChoiceOptions: ['Gjennomsnitt: $26{,}625$, median: $25{,}5$', 'Gjennomsnitt: $25{,}5$, median: $26{,}625$', 'Gjennomsnitt: $26$, median: $25$', 'Gjennomsnitt: $27$, median: $26$'] },
          { label: 'b', task: 'Daglig skjermtid (timer): 2, 3, 3, 4, 4, 4, 5, 12. Hvilket sentralmål beskriver dataene best?', solution: 'Median (4) er best - ekstremverdien 12 drar gjennomsnittet opp til 4,625, som er misvisende.', multipleChoiceOptions: ['Median (best ved ekstremverdier)', 'Gjennomsnitt (alltid best)', 'Typetall (best for tall)', 'Variasjonsbredde'] },
          { label: 'c', task: 'Favorittfarge blant 30 elever: rød (8), blå (12), grønn (6), gul (4). Finn typetallet.', solution: 'Typetall: blå (12 elever)', multipleChoiceOptions: ['Blå', 'Rød', 'Grønn', 'Gul'] },
        ],
        solution: 'a) Gj.snitt: 26,625, median: 25,5; b) Median; c) Blå',
        hints: ['Ekstremverdier påvirker gjennomsnitt mer enn median'],
      },
    },

    // Oppgave 5
    {
      id: '10-5-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn med frekvenstabeller.',
        subTasks: [
          { label: 'a', task: 'Antall bøker lest siste måned: 0 (5 elever), 1 (12 elever), 2 (8 elever), 3 (4 elever), 4 (1 elev). Finn gjennomsnitt.', solution: '$(0 \\cdot 5 + 1 \\cdot 12 + 2 \\cdot 8 + 3 \\cdot 4 + 4 \\cdot 1)/30 = (0+12+16+12+4)/30 = 44/30 \\approx 1{,}47$ bøker', multipleChoiceOptions: ['$\\approx 1{,}47$ bøker', '$1{,}5$ bøker', '$2$ bøker', '$1$ bok'] },
          { label: 'b', task: 'Fra oppgave a), finn median og typetall.', solution: 'Typetall: 1 (12 elever). Median: Elev 15 og 16 av 30 begge har 1 bok. Median = 1.', multipleChoiceOptions: ['Typetall: 1, Median: 1', 'Typetall: 2, Median: 1,5', 'Typetall: 0, Median: 2', 'Typetall: 1, Median: 2'] },
        ],
        solution: 'a) ≈ 1,47 bøker, b) Typetall: 1, Median: 1',
        hints: ['Bruk vektet gjennomsnitt for frekvensdata'],
      },
    },

    // ========== SPREDNINGSMÅL ==========
    {
      id: '10-5-3-def-spredning',
      type: 'definition',
      title: 'Spredningsmål',
      content: `**Variasjonsbredde:** Differansen mellom største og minste verdi
$$R = x_{max} - x_{min}$$

**Standardavvik:** Mål på gjennomsnittlig avstand fra gjennomsnittet
$$s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$$

Et lavt standardavvik betyr at verdiene ligger nær gjennomsnittet.
Et høyt standardavvik betyr stor spredning.`,
    },

    // Oppgave 6
    {
      id: '10-5-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn spredningsmål.',
        subTasks: [
          { label: 'a', task: 'Temperaturer en uke: 15, 17, 18, 20, 22, 19, 16. Finn variasjonsbredden.', solution: 'Variasjonsbredde = 22 - 15 = 7 grader', answer: 7 },
          { label: 'b', task: 'To klasser har samme gjennomsnittskarakter på 4. Klasse A har standardavvik 0,5 og klasse B har 1,5. Hva forteller dette?', solution: 'Klasse A har jevnere karakterer (de fleste nær 4). Klasse B har større spredning (flere lave og høye karakterer).', multipleChoiceOptions: ['Klasse A har jevnere karakterer', 'Klasse B har jevnere karakterer', 'Begge klasser har lik spredning', 'Kan ikke avgjøres'] },
        ],
        solution: 'a) 7 grader, b) Klasse A er jevnere',
        hints: ['Standardavvik viser spredning rundt gjennomsnittet'],
      },
    },

    // ========== KRITISK VURDERING ==========
    {
      id: '10-5-3-text-kritisk',
      type: 'text',
      content: `## Kritisk vurdering av undersøkelser

Når du leser om undersøkelser i media, still alltid disse spørsmålene:

1. **Hvem utførte undersøkelsen?** (Interessekonflikt?)
2. **Hvordan ble utvalget gjort?** (Representativt?)
3. **Hvor stort var utvalget?** (Stort nok?)
4. **Hvordan var spørsmålene formulert?** (Ledende?)
5. **Hva var svarprosenten?** (Frafall?)
6. **Hva viser dataene egentlig?** (Korrelasjon ≠ kausalitet!)`,
    },

    {
      id: '10-5-3-warning-korrelasjon',
      type: 'warning',
      title: 'Korrelasjon er ikke kausalitet',
      content: `At to ting henger sammen (korrelerer) betyr **ikke** at den ene forårsaker den andre.

**Eksempel:** Iskremsalg og drukningsulykker korrelerer. Betyr det at iskrem forårsaker drukning? Nei! Begge påvirkes av en tredje faktor: varmt vær.

Vær alltid skeptisk til årsaksforklaringer basert på statistikk alene.`,
    },

    // Oppgave 7
    {
      id: '10-5-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Vurder gyldigheten av undersøkelser.',
        subTasks: [
          { label: 'a', task: 'En tannkremreklame sier: "80% av tannleger anbefaler vår tannkrem." Hva bør du spørre om?', solution: 'Hvem utførte undersøkelsen? Hvor mange tannleger ble spurt? Kunne de anbefale flere merkse? Hva var spørsmålet?' },
          { label: 'b', task: 'En studie viser at barn som spiser frokost gjør det bedre på skolen. Kan vi konkludere at frokost gjør barn smartere?', solution: 'Nei, korrelasjon ≠ kausalitet. Familier som serverer frokost kan ha andre ressurser/vaner som også påvirker skoleprestasjoner.' },
          { label: 'c', task: 'En meningsmåling med 500 svar har feilmargin ±4%. Hva betyr dette?', solution: 'Det sanne resultatet i befolkningen ligger sannsynligvis innenfor ±4 prosentpoeng av det målte. Hvis 52% sier ja, ligger sannvaret mellom 48% og 56%.' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Vær kritisk - hva forteller tallene egentlig?'],
      },
    },

    // Oppgave 8
    {
      id: '10-5-3-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser presentasjon av data.',
        subTasks: [
          { label: 'a', task: 'Et søylediagram viser salg fra 100 til 150 enheter, men y-aksen starter på 90. Hvordan kan dette villede?', solution: 'Økningen ser dramatisk ut fordi skalaen er kuttet. En økning fra 100 til 150 (50%) ser ut som mye mer enn det er.' },
          { label: 'b', task: 'To sektordiagram sammenlignes, men ett er mye større enn det andre. Hva er problemet?', solution: 'Størrelsen på diagrammet kan villede - et større diagram kan se ut som det representerer mer, selv om prosentene er like.' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Visualiseringer kan manipulere oppfatningen'],
      },
    },

    // ========== GJENNOMFØRE UNDERSØKELSE ==========
    {
      id: '10-5-3-text-gjennomfore',
      type: 'text',
      content: `## Gjennomføre egen undersøkelse

**Steg for steg:**

1. **Problemstilling:** Hva vil vi undersøke? (Klar og avgrenset)
2. **Populasjon og utvalg:** Hvem vil vi si noe om, og hvem kan vi spørre?
3. **Metode:** Spørreskjema, intervju, observasjon, eksisterende data?
4. **Datainnsamling:** Utfør undersøkelsen systematisk
5. **Analyse:** Beregn sentralmål, lag diagrammer
6. **Konklusjon:** Hva viser dataene? Med hvilke forbehold?`,
    },

    {
      id: '10-5-3-ex-4',
      type: 'example',
      title: 'Eksempel 4: Planlegge undersøkelse',
      problem: `Du vil undersøke hvor mye tid ungdomsskoleelever bruker på sosiale medier. Planlegg undersøkelsen.`,
      solution: `**Planlegging:**

1. **Problemstilling:** Hvor mange timer per dag bruker ungdomsskoleelever på sosiale medier, og varierer dette med klassetrinn?

2. **Populasjon:** Ungdomsskoleelever i Norge
   **Utvalg:** Tilfeldig utvalg fra 3 skoler i ulike områder, stratifisert på klassetrinn

3. **Metode:** Anonymt digitalt spørreskjema

4. **Variabler:** Timer SoMe/dag (kvantitativ), klassetrinn (kvalitativ), kjønn (kvalitativ)

5. **Mulige feilkilder:**
   - Underrapportering (sosial ønskelighet)
   - Selvseleksjon hvis ikke alle svarer
   - Unøyaktig estimat av egen tid

6. **Analyse:** Beregne gjennomsnitt og median per trinn, lage søylediagram`,
    },

    // Oppgave 9
    {
      id: '10-5-3-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Planlegg undersøkelser.',
        subTasks: [
          { label: 'a', task: 'Du vil undersøke om elever foretrekker gruppearbeid eller individuelt arbeid. Lag en kort plan.', solution: 'Problemstilling: Foretrekkes gruppearbeid eller individuelt arbeid, og varierer dette med fag? Utvalg: Tilfeldig fra flere klasser. Metode: Spørreskjema med skala 1-5. Analyse: Gjennomsnitt og fordeling per fag.' },
          { label: 'b', task: 'Formuler 2-3 gode (nøytrale) spørsmål for undersøkelsen i a).', solution: '1) "På en skala fra 1-5, hvor godt liker du gruppearbeid i matematikk?" 2) "Hvor ofte foretrekker du å jobbe alene med oppgaver?" 3) "I hvilke fag fungerer gruppearbeid best for deg?"' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Hold spørsmål nøytrale og konkrete'],
      },
    },

    // Oppgave 10
    {
      id: '10-5-3-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tolke resultater.',
        subTasks: [
          { label: 'a', task: 'En undersøkelse viser at gjennomsnitts-SoMe-tid er 3,5 timer med standardavvik 1,5 timer. Omtrent hvor mange timer bruker de fleste?', solution: 'De fleste ligger innenfor 1 standardavvik fra gjennomsnittet: 3,5 ± 1,5 = mellom 2 og 5 timer.' },
          { label: 'b', task: 'Resultatet viser at 10.-klassinger bruker mer tid enn 8.-klassinger. Hva trengs for å konkludere at dette er en trend (ikke tilfeldighet)?', solution: 'Statistisk signifikans - forskjellen må være stor nok i forhold til usikkerheten. Et stort nok utvalg og beregning av feilmargin.' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Standardavvik viser typisk variasjon'],
      },
    },

    // Oppgave 11
    {
      id: '10-5-3-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte statistikkoppgaver.',
        subTasks: [
          { label: 'a', task: 'En meningsmåling om skolepolitikk får 45% ja og 55% nei, med feilmargin ±3%. Er nei-siden sikker vinner?', solution: 'Ja-intervall: 42-48%. Nei-intervall: 52-58%. Siden intervallene ikke overlapper, er nei sannsynlig vinner (men ikke 100% sikkert).' },
          { label: 'b', task: 'To undersøkelser om samme tema gir ulike resultater (40% vs 52%). Hva kan forklare forskjellen?', solution: 'Ulike utvalg, ulik spørsmålsformulering, ulikt tidspunkt, ulik svarprosent, ulike feilkilder.' },
          { label: 'c', task: 'Du vil sammenligne søvn mellom idrettsutøvere og ikke-utøvere. Hvorfor er det vanskelig å trekke årsak-virkning-slutninger?', solution: 'Korrelasjon ≠ kausalitet. Idrettsutøvere kan ha andre livsstilsfaktorer (kosthold, rutiner) som også påvirker søvn. Seleksjonsbias: De som blir idrettsutøvere kan være ulike fra start.' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Tenk på alle faktorer som kan påvirke resultatet'],
      },
    },

    // Oppgave 12
    {
      id: '10-5-3-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-5-3-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgave: Kritisk analyse.',
        subTasks: [
          { label: 'a', task: 'En avis skriver: "Studie viser at videospill gjør barn aggressive." Undersøkelsen viste korrelasjon mellom spilletid og aggressiv adferd. Skriv en kritisk kommentar.', solution: '1) Korrelasjon beviser ikke årsak - aggressive barn kan tiltrekkes av voldelige spill. 2) Tredjefaktorer: Barn med lite tilsyn kan både spille mer og vise mer aggresjon. 3) Hvordan ble "aggresjon" målt? 4) Var utvalget representativt? 5) Hvem finansierte studien?' },
          { label: 'b', task: 'Design en bedre studie for å undersøke sammenhengen mellom videospill og aggresjon.', solution: 'Longitudinell studie som følger barn over tid. Tilfeldig utvalg. Kontrollere for andre faktorer (familie, venner, skole). Bruke objektive mål på aggresjon. Sammenligne ulike spilltyper. Ideelt: Randomisert eksperiment (men etisk vanskelig).' },
        ],
        solution: 'Se deloppgavene',
        hints: ['Vær skeptisk og tenk på alternative forklaringer'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_6_1: TextbookChapter = {
  id: '10-6-1',
  courseId: '10',
  chapterNumber: '6.1',
  title: 'Prosentregning',
  description: 'Avansert prosentregning med rabatt, moms, prosentpoeng og praktiske anvendelser.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-6-1-intro',
      type: 'text',
      content: `## Innledning

Prosentregning brukes overalt i hverdagen: når du handler på salg, får lønnsøkning, betaler moms eller sammenligner priser. I dette kapittelet skal vi jobbe med avansert prosentregning og se hvordan vi bruker det i praktiske situasjoner.

Prosent betyr "per hundre", og vi skriver det med symbolet %. For eksempel betyr 25% det samme som $\\frac{25}{100} = 0{,}25$.`,
    },
    {
      id: '10-6-1-prosent-bilde',
      type: 'image',
      src: '/images/10-klasse/prosentregning-avansert.svg',
      alt: 'Illustrasjon av avansert prosentregning',
      caption: 'Prosentregning - rabatt, moms og prosentpoeng',
    },

    // Definisjon: Grunnleggende prosentbegreper
    {
      id: '10-6-1-def-1',
      type: 'definition',
      title: 'Prosentbegreper',
      content: `**Prosentandel:** Hvor stor del noe utgjør av det hele:
$$\\text{prosentandel} = \\frac{\\text{del}}{\\text{hele}} \\cdot 100\\%$$

**Prosentøkning:** Når en verdi øker med $p\\%$:
$$\\text{ny verdi} = \\text{gammel verdi} \\cdot \\left(1 + \\frac{p}{100}\\right)$$

**Prosentreduksjon:** Når en verdi reduseres med $p\\%$:
$$\\text{ny verdi} = \\text{gammel verdi} \\cdot \\left(1 - \\frac{p}{100}\\right)$$`,
    },

    // Eksempel 1: Grunnleggende beregninger
    {
      id: '10-6-1-ex-1',
      type: 'example',
      title: 'Eksempel 1: Grunnleggende prosentberegninger',
      problem: `a) Finn 35% av 800 kr.

b) En vare koster 1200 kr og settes ned 25%. Hva blir den nye prisen?

c) I en klasse er det 28 elever. 21 av dem besto en prøve. Hvor mange prosent besto?`,
      solution: `**Løsning:**

a) $35\\% \\text{ av } 800 = 0{,}35 \\cdot 800 = 280$ kr

b) Ny pris $= 1200 \\cdot (1 - 0{,}25) = 1200 \\cdot 0{,}75 = 900$ kr

c) Prosentandel $= \\frac{21}{28} \\cdot 100\\% = 75\\%$`,
    },

    // Oppgave 1
    {
      id: '10-6-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut',
        subTasks: [
          { label: 'a', task: 'Finn 20% av 450 kr.', solution: '$0{,}20 \\cdot 450 = 90$ kr', answer: 90 },
          { label: 'b', task: 'Finn 75% av 240.', solution: '$0{,}75 \\cdot 240 = 180$', answer: 180 },
          { label: 'c', task: 'En bok koster 350 kr og settes ned 30%. Finn ny pris.', solution: '$350 \\cdot 0{,}70 = 245$ kr', answer: 245 },
          { label: 'd', task: '15 av 60 elever valgte spansk. Hvor mange prosent valgte spansk?', solution: '$\\frac{15}{60} \\cdot 100\\% = 25\\%$', answer: 25 },
        ],
        solution: 'a) 90 kr, b) 180, c) 245 kr, d) 25%',
        hints: ['Husk at prosent betyr "per hundre", så 20% = 0,20'],
      },
    },

    // Definisjon: Rabatt og moms
    {
      id: '10-6-1-def-2',
      type: 'definition',
      title: 'Rabatt og moms',
      content: `**Rabatt:** Reduksjon i pris, ofte oppgitt i prosent.
$$\\text{ny pris} = \\text{ordinær pris} \\cdot \\left(1 - \\frac{\\text{rabatt}\\%}{100}\\right)$$

**Moms (merverdiavgift):** Avgift som legges til prisen. I Norge er vanlig moms 25%.
$$\\text{pris med moms} = \\text{pris uten moms} \\cdot 1{,}25$$

**Finne pris uten moms:**
$$\\text{pris uten moms} = \\frac{\\text{pris med moms}}{1{,}25}$$`,
    },

    // Eksempel 2: Rabatt og moms
    {
      id: '10-6-1-ex-2',
      type: 'example',
      title: 'Eksempel 2: Rabatt og moms',
      problem: `a) En jakke koster 1600 kr. Den settes ned 40% på salg. Hva blir salgsprisen?

b) En håndverker oppgir pris uten moms på 4800 kr. Hva blir prisen inkludert 25% moms?

c) En TV koster 7500 kr inkludert moms. Hva var prisen uten moms?`,
      solution: `**Løsning:**

a) Salgspris $= 1600 \\cdot (1 - 0{,}40) = 1600 \\cdot 0{,}60 = 960$ kr

b) Pris med moms $= 4800 \\cdot 1{,}25 = 6000$ kr

c) Pris uten moms $= \\frac{7500}{1{,}25} = 6000$ kr`,
    },

    // Oppgave 2
    {
      id: '10-6-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Løs oppgavene',
        subTasks: [
          { label: 'a', task: 'En mobiltelefon koster 8000 kr og har 35% rabatt. Finn salgsprisen.', solution: '$8000 \\cdot 0{,}65 = 5200$ kr', answer: 5200 },
          { label: 'b', task: 'Et rørleggerarbeid koster 3200 kr uten moms. Hva blir prisen med 25% moms?', solution: '$3200 \\cdot 1{,}25 = 4000$ kr', answer: 4000 },
          { label: 'c', task: 'En printer koster 2500 kr med moms. Finn prisen uten moms.', solution: '$\\frac{2500}{1{,}25} = 2000$ kr', answer: 2000 },
          { label: 'd', task: 'En vare koster 500 kr. Først får du 20% rabatt, så legges 25% moms på. Hva blir sluttprisen?', solution: 'Etter rabatt: $500 \\cdot 0{,}80 = 400$ kr. Med moms: $400 \\cdot 1{,}25 = 500$ kr', answer: 500 },
        ],
        solution: 'a) 5200 kr, b) 4000 kr, c) 2000 kr, d) 500 kr',
        hints: ['Rabatt trekkes fra først, deretter legges moms til'],
      },
    },

    // Definisjon: Prosentpoeng vs. prosentvis endring
    {
      id: '10-6-1-def-3',
      type: 'definition',
      title: 'Prosentpoeng vs. prosentvis endring',
      content: `**Prosentpoeng:** Forskjellen mellom to prosenttall.
$$\\text{endring i prosentpoeng} = \\text{ny prosent} - \\text{gammel prosent}$$

**Prosentvis endring:** Hvor mye noe har endret seg i forhold til utgangspunktet.
$$\\text{prosentvis endring} = \\frac{\\text{ny verdi} - \\text{gammel verdi}}{\\text{gammel verdi}} \\cdot 100\\%$$

**Viktig:** Disse er IKKE det samme! En økning fra 4% til 5% er:
- 1 prosentpoeng (forskjellen mellom 5% og 4%)
- 25% økning (fordi $\\frac{5-4}{4} \\cdot 100\\% = 25\\%$)`,
    },

    // Eksempel 3: Prosentpoeng
    {
      id: '10-6-1-ex-3',
      type: 'example',
      title: 'Eksempel 3: Prosentpoeng og prosentvis endring',
      problem: `Arbeidsledigheten i en kommune gikk fra 6% til 9%.

a) Hvor mange prosentpoeng økte arbeidsledigheten?

b) Hvor stor var den prosentvise økningen i arbeidsledigheten?`,
      solution: `**Løsning:**

a) Økning i prosentpoeng $= 9\\% - 6\\% = 3$ prosentpoeng

b) Prosentvis økning $= \\frac{9 - 6}{6} \\cdot 100\\% = \\frac{3}{6} \\cdot 100\\% = 50\\%$

Arbeidsledigheten økte med 3 prosentpoeng, men dette tilsvarer en økning på hele 50%.`,
    },

    // Oppgave 3
    {
      id: '10-6-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn både prosentpoeng og prosentvis endring',
        subTasks: [
          { label: 'a', task: 'Renta gikk fra 2% til 5%. Finn endring i prosentpoeng og prosentvis endring.', solution: 'Prosentpoeng: $5 - 2 = 3$. Prosentvis: $\\frac{3}{2} \\cdot 100\\% = 150\\%$', multipleChoiceOptions: ['3 prosentpoeng, 150% økning', '3 prosentpoeng, 60% økning', '5 prosentpoeng, 150% økning', '3%, 150%'] },
          { label: 'b', task: 'Et parti gikk fra 20% til 25% oppslutning. Finn endring i prosentpoeng og prosentvis endring.', solution: 'Prosentpoeng: $5$. Prosentvis: $\\frac{5}{20} \\cdot 100\\% = 25\\%$', multipleChoiceOptions: ['5 prosentpoeng, 25% økning', '25 prosentpoeng, 5% økning', '5 prosentpoeng, 20% økning', '5%, 25%'] },
          { label: 'c', task: 'Strykprosenten sank fra 15% til 12%. Finn endring i prosentpoeng og prosentvis endring.', solution: 'Prosentpoeng: $-3$ (reduksjon). Prosentvis: $\\frac{-3}{15} \\cdot 100\\% = -20\\%$ (nedgang)', multipleChoiceOptions: ['3 prosentpoeng ned, 20% nedgang', '3 prosentpoeng ned, 3% nedgang', '12 prosentpoeng ned, 80% nedgang', '20 prosentpoeng ned, 3%'] },
        ],
        solution: 'a) 3 prosentpoeng, 150% økning. b) 5 prosentpoeng, 25% økning. c) 3 prosentpoeng ned, 20% nedgang.',
        hints: ['Prosentpoeng er bare differansen mellom prosenttallene. Prosentvis endring beregnes ut fra utgangsverdien.'],
      },
    },

    // Eksempel 4: Finne opprinnelig verdi
    {
      id: '10-6-1-ex-4',
      type: 'example',
      title: 'Eksempel 4: Finne opprinnelig verdi',
      problem: `a) En vare koster 720 kr etter 20% rabatt. Hva var originalprisen?

b) Etter en lønnsøkning på 5% tjener Maria 42 000 kr i måneden. Hva var lønnen før økningen?`,
      solution: `**Løsning:**

a) La $x$ være originalprisen.
$$x \\cdot 0{,}80 = 720$$
$$x = \\frac{720}{0{,}80} = 900 \\text{ kr}$$

b) La $x$ være lønnen før økningen.
$$x \\cdot 1{,}05 = 42\\,000$$
$$x = \\frac{42\\,000}{1{,}05} = 40\\,000 \\text{ kr}$$`,
    },

    // Oppgave 4
    {
      id: '10-6-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn den opprinnelige verdien',
        subTasks: [
          { label: 'a', task: 'En bukse koster 560 kr etter 30% rabatt. Finn originalprisen.', solution: '$x \\cdot 0{,}70 = 560 \\Rightarrow x = 800$ kr', answer: 800 },
          { label: 'b', task: 'Etter 15% prisøkning koster strømmen 2,30 kr/kWh. Hva var prisen før?', solution: '$x \\cdot 1{,}15 = 2{,}30 \\Rightarrow x = 2{,}00$ kr/kWh', answer: 2 },
          { label: 'c', task: 'En bolig ble solgt for 4,2 millioner kr, som var 5% over prisantydning. Hva var prisantydningen?', solution: '$x \\cdot 1{,}05 = 4{,}2 \\Rightarrow x = 4{,}0$ mill. kr', answer: 4000000 },
          { label: 'd', task: 'Etter at verdien sank 12%, er en bil verdt 308 000 kr. Hva var verdien før?', solution: '$x \\cdot 0{,}88 = 308\\,000 \\Rightarrow x = 350\\,000$ kr', answer: 350000 },
        ],
        solution: 'a) 800 kr, b) 2,00 kr/kWh, c) 4 mill. kr, d) 350 000 kr',
        hints: ['Sett opp likningen: opprinnelig verdi ganger vekstfaktoren = ny verdi. Løs for opprinnelig verdi.'],
      },
    },

    // Eksempel 5: Sammensatt endring
    {
      id: '10-6-1-ex-5',
      type: 'example',
      title: 'Eksempel 5: Flere prosentvise endringer',
      problem: `En aksje stiger først 20% og synker deretter 20%. Tilbake til utgangspunktet?`,
      solution: `**Løsning:**

La oss si aksjen starter på 100 kr.

Etter 20% økning: $100 \\cdot 1{,}20 = 120$ kr

Etter 20% nedgang: $120 \\cdot 0{,}80 = 96$ kr

**Konklusjon:** Aksjen er nå verdt 96 kr, altså 4% lavere enn utgangspunktet!

**Forklaring:** 20% opp og 20% ned gir IKKE tilbake til start. Nedgangen beregnes fra et høyere beløp enn utgangspunktet.

Totalt: $1{,}20 \\cdot 0{,}80 = 0{,}96 = 96\\%$ av opprinnelig verdi.`,
    },

    // Oppgave 5
    {
      id: '10-6-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn totalendringen',
        subTasks: [
          { label: 'a', task: 'En pris øker først 10% og deretter 10%. Hva er total prosentvis økning?', solution: '$1{,}10 \\cdot 1{,}10 = 1{,}21$. Total økning: 21%', answer: 21 },
          { label: 'b', task: 'En verdi synker 25% og stiger deretter 25%. Hva er nettoendringen?', solution: '$0{,}75 \\cdot 1{,}25 = 0{,}9375$. Netto: 6,25% nedgang', multipleChoiceOptions: ['$6{,}25\\%$ nedgang', 'Ingen endring', '$6{,}25\\%$ økning', '$50\\%$ nedgang'] },
          { label: 'c', task: 'Prisen øker 50% og reduseres deretter med 40%. Er varen dyrere eller billigere enn i starten?', solution: '$1{,}50 \\cdot 0{,}60 = 0{,}90$. Varen er 10% billigere.', multipleChoiceOptions: ['10% billigere', '10% dyrere', 'Samme pris', '90% billigere'] },
          { label: 'd', task: 'En aksje synker 20% mandag og 10% tirsdag. Hvor mye har den sunket totalt?', solution: '$0{,}80 \\cdot 0{,}90 = 0{,}72$. Total nedgang: 28%', answer: 28 },
        ],
        solution: 'a) 21%, b) 6,25% nedgang, c) 10% billigere, d) 28% nedgang',
        hints: ['Gang vekstfaktorene sammen for å finne total vekstfaktor'],
      },
    },

    // Praktisk anvendelse
    {
      id: '10-6-1-text-praktisk',
      type: 'text',
      content: `## Praktiske anvendelser

Prosentregning brukes i mange sammenhenger:
- **Shopping:** Rabatter, "3 for 2"-tilbud, bonuspoeng
- **Lønn:** Lønnsøkninger, feriepenger, skatt
- **Økonomi:** Inflasjon, renter, avkastning
- **Statistikk:** Meningsmålinger, valgresultater`,
    },

    // Oppgave 6: Praktiske oppgaver
    {
      id: '10-6-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs de praktiske oppgavene',
        subTasks: [
          { label: 'a', task: 'Ola tjener 38 000 kr/mnd. Han får 3,5% lønnsøkning. Hva blir ny månedslønn?', solution: '$38\\,000 \\cdot 1{,}035 = 39\\,330$ kr', answer: 39330 },
          { label: 'b', task: 'En restaurant har 18% tips inkludert i regningen på 847 kr. Hvor mye var maten uten tips?', solution: '$\\frac{847}{1{,}18} \\approx 718$ kr', answer: 718 },
          { label: 'c', task: 'Du kjøper en vare til 599 kr med "betal 3, få 1 gratis" (dvs. 25% rabatt). Hva betaler du?', solution: '$599 \\cdot 0{,}75 = 449{,}25$ kr', multipleChoiceOptions: ['$449{,}25$ kr', '$599$ kr', '$400$ kr', '$479{,}20$ kr'] },
        ],
        solution: 'a) 39 330 kr, b) ca. 718 kr, c) 449,25 kr',
        hints: ['Les oppgaven nøye for å forstå hva som er utgangspunktet'],
      },
    },

    // Oppgave 7: Vanskelig
    {
      id: '10-6-1-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs oppgavene',
        subTasks: [
          { label: 'a', task: 'En butikk øker prisene med 20% og har deretter "20% på alt"-salg. En kunde tror prisene er tilbake til normalt. Har kunden rett?', solution: 'Nei! $1{,}20 \\cdot 0{,}80 = 0{,}96$. Prisen er faktisk 4% lavere enn originalt.', multipleChoiceOptions: ['Nei, 4% lavere enn originalt', 'Ja, tilbake til normalt', 'Nei, 4% høyere', 'Nei, 40% lavere'] },
          { label: 'b', task: 'Inflasjonen var 5,8% i 2023 og 3,2% i 2024. Hvor mye har prisene økt totalt over disse to årene?', solution: '$1{,}058 \\cdot 1{,}032 = 1{,}0919$. Totalt ca. 9,2% økning.', multipleChoiceOptions: ['Ca. 9,2% økning', '9,0% økning', '18,6% økning', 'Ca. 9,0% økning'] },
          { label: 'c', task: 'Etter to like store prosentvise økninger er en verdi 44% høyere. Hvor stor var hver økning?', solution: 'La $x$ være vekstfaktoren. $x^2 = 1{,}44 \\Rightarrow x = 1{,}2$. Hver økning var 20%.', answer: 20 },
        ],
        solution: 'a) Nei, 4% lavere. b) 9,2% totalt. c) 20% hver gang.',
        hints: ['Tenk på vekstfaktorer og gang dem sammen'],
      },
    },

    // Oppgave 8: Praktisk økonomi
    {
      id: '10-6-1-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene om personlig økonomi',
        subTasks: [
          { label: 'a', task: 'Marie har 450 000 kr i årslønn. Skatten er 28%. Hvor mye får hun utbetalt per år?', solution: '$450\\,000 \\cdot (1 - 0{,}28) = 450\\,000 \\cdot 0{,}72 = 324\\,000$ kr', answer: 324000 },
          { label: 'b', task: 'Erik sparer 15% av nettolønnen sin på 30 000 kr/mnd. Hvor mye sparer han årlig?', solution: '$30\\,000 \\cdot 0{,}15 \\cdot 12 = 54\\,000$ kr', answer: 54000 },
          { label: 'c', task: 'En husleie på 12 000 kr økes med 4% årlig. Hva blir husleien om 2 år?', solution: '$12\\,000 \\cdot 1{,}04^2 = 12\\,000 \\cdot 1{,}0816 = 12\\,979{,}20$ kr', multipleChoiceOptions: ['$12\\,979{,}20$ kr', '$12\\,960$ kr', '$13\\,000$ kr', '$12\\,480$ kr'] },
        ],
        solution: 'a) 324 000 kr, b) 54 000 kr, c) 12 979,20 kr',
        hints: ['Årlig sparing = månedlig sparing ganger 12'],
      },
    },

    // Oppgave 9: Sammenligning
    {
      id: '10-6-1-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign og velg det beste alternativet',
        subTasks: [
          { label: 'a', task: 'Butikk A: 20% rabatt på alt. Butikk B: "Betal for 4, få 5". Hvilken gir best pris på 5 like varer til 200 kr hver?', solution: 'A: $5 \\cdot 200 \\cdot 0{,}80 = 800$ kr. B: $4 \\cdot 200 = 800$ kr. Like gode!', multipleChoiceOptions: ['Like gode (begge 800 kr)', 'Butikk A er best', 'Butikk B er best', 'Avhenger av varen'] },
          { label: 'b', task: 'Tilbud X: 30% rabatt. Tilbud Y: 10% + 10% + 10% rabatt etter hverandre. Hva gir lavest pris?', solution: 'X: $1 \\cdot 0{,}70 = 0{,}70$. Y: $0{,}90^3 = 0{,}729$. X er best (30% vs 27,1% rabatt)', multipleChoiceOptions: ['Tilbud X (30% rabatt)', 'Tilbud Y (27,1% rabatt)', 'Like gode', 'Avhenger av prisen'] },
        ],
        solution: 'a) Like gode. b) Tilbud X er best.',
        hints: ['Beregn vekstfaktoren for hvert alternativ'],
      },
    },

    // Oppgave 10: Tekstoppgaver
    {
      id: '10-6-1-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs tekstoppgavene',
        subTasks: [
          { label: 'a', task: 'En bilforhandler kjøper en bil for 180 000 kr og selger den med 25% påslag. Kjøperen betaler også 25% moms. Hva betaler kunden?', solution: 'Pris uten moms: $180\\,000 \\cdot 1{,}25 = 225\\,000$ kr. Med moms: $225\\,000 \\cdot 1{,}25 = 281\\,250$ kr', answer: 281250 },
          { label: 'b', task: 'En vare har steget 60% over 3 år med lik prosentvis økning hvert år. Hvor mye steg prisen hvert år?', solution: 'La $x$ være årlig vekstfaktor. $x^3 = 1{,}60 \\Rightarrow x = \\sqrt[3]{1{,}60} \\approx 1{,}17$. Ca. 17% per år.', multipleChoiceOptions: ['Ca. 17% per år', '20% per år', 'Ca. 15% per år', 'Ca. 60% per år'] },
        ],
        solution: 'a) 281 250 kr, b) ca. 17% per år',
        hints: ['Bruk vekstfaktorer systematisk'],
      },
    },

    // Oppgave 11: Utfordringsoppgave
    {
      id: '10-6-1-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordring',
        subTasks: [
          { label: 'a', task: 'En aksje steg 100% på ett år. Hvor mye må den synke året etter for å komme tilbake til utgangspunktet?', solution: 'Etter 100% økning er verdien dobbelt. For å halvere må den synke 50%.', answer: 50 },
          { label: 'b', task: 'To butikker har samme vare. Butikk A har prisen 1000 kr med 40% rabatt. Butikk B har prisen 800 kr med 25% rabatt. Hvor er det billigst?', solution: 'A: $1000 \\cdot 0{,}60 = 600$ kr. B: $800 \\cdot 0{,}75 = 600$ kr. Samme pris!', multipleChoiceOptions: ['Samme pris (begge 600 kr)', 'Butikk A er billigst', 'Butikk B er billigst', 'Kan ikke avgjøres'] },
          { label: 'c', task: 'Etter å ha steget med like mange prosent hver dag i 3 dager, har en aksje steget 33,1% totalt. Hvor mange prosent steg den per dag?', solution: '$x^3 = 1{,}331 \\Rightarrow x = 1{,}10$. Den steg 10% per dag.', answer: 10 },
        ],
        solution: 'a) 50%, b) Samme pris, c) 10% per dag',
        hints: ['100% økning betyr at verdien dobles'],
      },
    },

    // Oppgave 12: Hverdagsøkonomi
    {
      id: '10-6-1-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-6-1-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Hverdagsøkonomi',
        subTasks: [
          { label: 'a', task: 'Du handler for 2350 kr og får 15% studentrabatt. Deretter betaler du med et gavekort på 500 kr. Hva må du betale?', solution: 'Etter rabatt: $2350 \\cdot 0{,}85 = 1997{,}50$ kr. Minus gavekort: $1997{,}50 - 500 = 1497{,}50$ kr', multipleChoiceOptions: ['$1497{,}50$ kr', '$1497$ kr', '$1850$ kr', '$1350$ kr'] },
          { label: 'b', task: 'Strømprisen steg 45% fra 2020 til 2022. Deretter sank den 20% i 2023. Hvor mye er prisøkningen totalt fra 2020?', solution: '$1{,}45 \\cdot 0{,}80 = 1{,}16$. Totalt 16% økning fra 2020.', answer: 16 },
          { label: 'c', task: 'En selger får 5% provisjon av salget. For å tjene 15 000 kr i provisjon, hvor mye må selgeren selge for?', solution: '$x \\cdot 0{,}05 = 15\\,000 \\Rightarrow x = 300\\,000$ kr', answer: 300000 },
        ],
        solution: 'a) 1497,50 kr, b) 16% økning totalt, c) 300 000 kr',
        hints: ['Trekk fra rabatt før du bruker gavekortet'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_6_2: TextbookChapter = {
  id: '10-6-2',
  courseId: '10',
  chapterNumber: '6.2',
  title: 'Vekstfaktor',
  description: 'Gjentatt prosentvis endring, eksponentiell vekst og praktiske anvendelser med vekstfaktor.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-6-2-intro',
      type: 'text',
      content: `## Innledning

Når noe endres med en fast prosent flere ganger, er det tungvint å beregne hver endring for seg. Vekstfaktor gjør dette mye enklere! Vekstfaktor brukes til å beskrive eksponentiell vekst og nedgang, som vi finner overalt: befolkningsvekst, inflasjon, renter og verdifall på biler.`,
    },
    {
      id: '10-6-2-eksponentiell-bilde',
      type: 'image',
      src: '/images/10-klasse/eksponentiell-vekst.svg',
      alt: 'Graf som viser eksponentiell vekst',
      caption: 'Eksponentiell vekst - vekstfaktor storre enn 1 gir vekst, mindre enn 1 gir nedgang',
    },

    // Definisjon: Vekstfaktor
    {
      id: '10-6-2-def-1',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `**Vekstfaktor:** Tallet vi ganger med for å få ny verdi etter en prosentvis endring.

$$\\text{vekstfaktor} = 1 + \\frac{p}{100}$$

der $p$ er prosentvis endring (positivt for økning, negativt for reduksjon).

**Eksempler:**
- 8% økning: vekstfaktor $= 1 + 0{,}08 = 1{,}08$
- 15% reduksjon: vekstfaktor $= 1 - 0{,}15 = 0{,}85$
- Dobling: vekstfaktor $= 2$
- Halvering: vekstfaktor $= 0{,}5$`,
    },

    // Eksempel 1: Finne vekstfaktor
    {
      id: '10-6-2-ex-1',
      type: 'example',
      title: 'Eksempel 1: Finne vekstfaktor',
      problem: `Finn vekstfaktoren for:
a) 12% økning
b) 7% reduksjon
c) Verdi som tredobles
d) Verdi som reduseres til en fjerdedel`,
      solution: `**Løsning:**

a) Vekstfaktor $= 1 + 0{,}12 = 1{,}12$

b) Vekstfaktor $= 1 - 0{,}07 = 0{,}93$

c) Vekstfaktor $= 3$ (tredobling)

d) Vekstfaktor $= 0{,}25$ (en fjerdedel)`,
    },

    // Oppgave 1
    {
      id: '10-6-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vekstfaktoren',
        subTasks: [
          { label: 'a', task: '5% økning', solution: '$1 + 0{,}05 = 1{,}05$', multipleChoiceOptions: ['$1{,}05$', '$0{,}05$', '$1{,}5$', '$0{,}95$'] },
          { label: 'b', task: '20% reduksjon', solution: '$1 - 0{,}20 = 0{,}80$', multipleChoiceOptions: ['$0{,}80$', '$1{,}20$', '$0{,}20$', '$1{,}80$'] },
          { label: 'c', task: '3,5% økning', solution: '$1 + 0{,}035 = 1{,}035$', multipleChoiceOptions: ['$1{,}035$', '$0{,}035$', '$1{,}35$', '$0{,}965$'] },
          { label: 'd', task: '0,5% reduksjon', solution: '$1 - 0{,}005 = 0{,}995$', multipleChoiceOptions: ['$0{,}995$', '$1{,}005$', '$0{,}5$', '$0{,}95$'] },
          { label: 'e', task: 'Verdien dobles', solution: 'Vekstfaktor $= 2$', answer: 2 },
          { label: 'f', task: 'Verdien reduseres til 60% av opprinnelig', solution: 'Vekstfaktor $= 0{,}60$', multipleChoiceOptions: ['$0{,}60$', '$1{,}60$', '$0{,}40$', '$6{,}0$'] },
        ],
        solution: 'a) 1,05, b) 0,80, c) 1,035, d) 0,995, e) 2, f) 0,60',
        hints: ['Økning: vekstfaktor > 1. Reduksjon: vekstfaktor < 1'],
      },
    },

    // Oppgave 2
    {
      id: '10-6-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn prosentendringen ut fra vekstfaktoren',
        subTasks: [
          { label: 'a', task: 'Vekstfaktor 1,15', solution: '$(1{,}15 - 1) \\cdot 100\\% = 15\\%$ økning', multipleChoiceOptions: ['15% økning', '15% reduksjon', '85% økning', '1,15% økning'] },
          { label: 'b', task: 'Vekstfaktor 0,72', solution: '$(1 - 0{,}72) \\cdot 100\\% = 28\\%$ reduksjon', multipleChoiceOptions: ['28% reduksjon', '72% reduksjon', '28% økning', '72% økning'] },
          { label: 'c', task: 'Vekstfaktor 1,025', solution: '2,5% økning', multipleChoiceOptions: ['2,5% økning', '25% økning', '2,5% reduksjon', '102,5% økning'] },
          { label: 'd', task: 'Vekstfaktor 0,95', solution: '5% reduksjon', multipleChoiceOptions: ['5% reduksjon', '95% reduksjon', '5% økning', '95% økning'] },
        ],
        solution: 'a) 15% økning, b) 28% reduksjon, c) 2,5% økning, d) 5% reduksjon',
        hints: ['Trekk fra 1 og gang med 100 for å finne prosenten'],
      },
    },

    // Definisjon: Gjentatt prosentvis endring
    {
      id: '10-6-2-def-2',
      type: 'definition',
      title: 'Gjentatt prosentvis endring',
      content: `Når en verdi endres med samme prosent flere ganger, bruker vi formelen:

$$\\text{ny verdi} = \\text{gammel verdi} \\cdot v^n$$

der $v$ er vekstfaktoren og $n$ er antall perioder.

**Eksempel:** En startverdi på 1000 kr som øker 5% per år i 10 år:
$$\\text{ny verdi} = 1000 \\cdot 1{,}05^{10} \\approx 1629 \\text{ kr}$$`,
    },

    // Eksempel 2: Gjentatt vekst
    {
      id: '10-6-2-ex-2',
      type: 'example',
      title: 'Eksempel 2: Gjentatt prosentvis endring',
      problem: `a) En investering på 50 000 kr vokser med 6% per år. Hva er verdien etter 8 år?

b) En bil til 400 000 kr mister 18% av verdien hvert år. Hva er bilen verdt etter 5 år?`,
      solution: `**Løsning:**

a) Vekstfaktor $= 1{,}06$

Verdi etter 8 år $= 50\\,000 \\cdot 1{,}06^8 = 50\\,000 \\cdot 1{,}594 \\approx 79\\,692$ kr

b) Vekstfaktor $= 0{,}82$

Verdi etter 5 år $= 400\\,000 \\cdot 0{,}82^5 = 400\\,000 \\cdot 0{,}371 \\approx 148\\,481$ kr`,
    },

    // Oppgave 3
    {
      id: '10-6-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn verdi etter gjentatt endring',
        subTasks: [
          { label: 'a', task: 'En sparekonto med 20 000 kr får 4% rente per år. Hva er verdien etter 5 år?', solution: '$20\\,000 \\cdot 1{,}04^5 \\approx 24\\,333$ kr', multipleChoiceOptions: ['Ca. $24\\,333$ kr', 'Ca. $24\\,000$ kr', 'Ca. $25\\,000$ kr', 'Ca. $28\\,000$ kr'] },
          { label: 'b', task: 'En befolkning på 8 000 vokser 2% per år. Hvor mange er det etter 10 år?', solution: '$8000 \\cdot 1{,}02^{10} \\approx 9752$ personer', multipleChoiceOptions: ['Ca. 9752 personer', 'Ca. 9600 personer', 'Ca. 10 000 personer', 'Ca. 8800 personer'] },
          { label: 'c', task: 'En maskin til 150 000 kr mister 25% av verdien årlig. Hva er den verdt etter 3 år?', solution: '$150\\,000 \\cdot 0{,}75^3 \\approx 63\\,281$ kr', multipleChoiceOptions: ['Ca. $63\\,281$ kr', 'Ca. $75\\,000$ kr', 'Ca. $37\\,500$ kr', 'Ca. $112\\,500$ kr'] },
          { label: 'd', task: 'Prisene stiger 3% per år. Hvor mye koster en vare til 500 kr om 15 år?', solution: '$500 \\cdot 1{,}03^{15} \\approx 779$ kr', multipleChoiceOptions: ['Ca. $779$ kr', 'Ca. $725$ kr', 'Ca. $650$ kr', 'Ca. $900$ kr'] },
        ],
        solution: 'a) ca. 24 333 kr, b) ca. 9752 personer, c) ca. 63 281 kr, d) ca. 779 kr',
        hints: ['Bruk formelen: sluttverdi = startverdi ganger vekstfaktor opphøyd i antall perioder'],
      },
    },

    // Oppgave 4
    {
      id: '10-6-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene om eksponentiell vekst',
        subTasks: [
          { label: 'a', task: 'En bakteriekoloni dobles hver time. Hvor mange bakterier er det etter 6 timer hvis det startet med 100?', solution: '$100 \\cdot 2^6 = 6400$ bakterier', answer: 6400 },
          { label: 'b', task: 'Et radioaktivt stoff halveres hvert 5. år. Hvor mye gjenstår av 200 g etter 20 år?', solution: '$200 \\cdot 0{,}5^4 = 12{,}5$ g (4 halveringsperioder)', answer: 12.5 },
          { label: 'c', task: 'En PC mister 30% av verdien årlig. Etter hvor mange år er den verdt mindre enn halvparten av kjøpsprisen?', solution: '$0{,}70^2 = 0{,}49 < 0{,}5$. Etter 2 år.', answer: 2 },
        ],
        solution: 'a) 6400 bakterier, b) 12,5 g, c) Etter 2 år',
        hints: ['For halvering er vekstfaktoren 0,5. For dobling er den 2.'],
      },
    },

    // Definisjon: Finne antall perioder
    {
      id: '10-6-2-def-3',
      type: 'definition',
      title: 'Finne antall perioder og doblingtid',
      content: `**Tommelfingerregel for dobling (70-regelen):**

$$\\text{Doblingtid} \\approx \\frac{70}{\\text{vekstprosent}}$$

**Eksempel:** Med 7% årlig vekst tar det ca. $\\frac{70}{7} = 10$ år å doble verdien.

For å finne eksakt antall perioder, bruker vi prøving og feiling eller logaritmer (kommer i VG1).`,
    },

    // Eksempel 3: Doblingtid
    {
      id: '10-6-2-ex-3',
      type: 'example',
      title: 'Eksempel 3: Doblingtid og halveringstid',
      problem: `a) Omtrent hvor lang tid tar det å doble en investering med 5% årlig rente?

b) Et medikament i blodet halveres hver 4. time. Hvor mye gjenstår av 100 mg etter 12 timer?`,
      solution: `**Løsning:**

a) Tommelfingerregelen: Doblingtid $\\approx \\frac{70}{5} = 14$ år

La oss sjekke: $1{,}05^{14} \\approx 1{,}98$ (nesten dobling). Stemmer!

b) Antall halveringsperioder: $\\frac{12}{4} = 3$

Mengde etter 12 timer $= 100 \\cdot 0{,}5^3 = 100 \\cdot 0{,}125 = 12{,}5$ mg`,
    },

    // Oppgave 5
    {
      id: '10-6-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk tommelfingerregelen',
        subTasks: [
          { label: 'a', task: 'Hvor lang tid tar det omtrent å doble en investering med 10% årlig rente?', solution: '$\\frac{70}{10} = 7$ år', answer: 7 },
          { label: 'b', task: 'Med 2% årlig befolkningsvekst, hvor lang tid tar det før befolkningen dobles?', solution: '$\\frac{70}{2} = 35$ år', answer: 35 },
          { label: 'c', task: 'Prisene stiger 3,5% per år. Omtrent hvor lang tid tar det før prisene dobles?', solution: '$\\frac{70}{3{,}5} = 20$ år', answer: 20 },
          { label: 'd', task: 'En investering ble doblet på 5 år. Omtrent hvilken årlig rente ga den?', solution: '$\\frac{70}{5} = 14\\%$ årlig rente', answer: 14 },
        ],
        solution: 'a) 7 år, b) 35 år, c) 20 år, d) ca. 14%',
        hints: ['Tommelfingerregelen: Doblingtid = 70 / vekstprosent'],
      },
    },

    // Oppgave 6
    {
      id: '10-6-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn antall perioder med prøving og feiling',
        subTasks: [
          { label: 'a', task: 'Hvor mange år tar det før 10 000 kr blir til mer enn 15 000 kr med 8% årlig rente?', solution: '$1{,}08^5 \\approx 1{,}47$. Etter 5 år: ca. 14 693 kr. $1{,}08^6 \\approx 1{,}59$. Etter 6 år: ca. 15 869 kr. Svar: 6 år.', answer: 6 },
          { label: 'b', task: 'En bil mister 20% av verdien årlig. Etter hvor mange år er den verdt under 40% av kjøpsprisen?', solution: '$0{,}80^4 = 0{,}4096 > 0{,}40$. $0{,}80^5 = 0{,}328 < 0{,}40$. Etter 5 år.', answer: 5 },
          { label: 'c', task: 'Med 15% årlig vekst, hvor mange år tar det å tredoble en verdi?', solution: '$1{,}15^8 \\approx 3{,}06$. Det tar ca. 8 år.', answer: 8 },
        ],
        solution: 'a) 6 år, b) 5 år, c) ca. 8 år',
        hints: ['Beregn vekstfaktoren opphøyd i forskjellige verdier til du finner svaret'],
      },
    },

    // Eksempel 4: Finne vekstfaktor fra data
    {
      id: '10-6-2-ex-4',
      type: 'example',
      title: 'Eksempel 4: Finne årlig vekstrate',
      problem: `En aksje steg fra 150 kr til 240 kr på 4 år. Hva var den gjennomsnittlige årlige vekstraten?`,
      solution: `**Løsning:**

Vi vet at: $150 \\cdot v^4 = 240$

Løser for $v$:
$$v^4 = \\frac{240}{150} = 1{,}6$$

$$v = \\sqrt[4]{1{,}6} = 1{,}6^{0{,}25} \\approx 1{,}125$$

Årlig vekstrate: $1{,}125 - 1 = 0{,}125 = 12{,}5\\%$`,
    },

    // Oppgave 7
    {
      id: '10-6-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn den årlige vekstraten',
        subTasks: [
          { label: 'a', task: 'En investering vokste fra 25 000 kr til 40 000 kr på 10 år. Finn årlig vekstrate.', solution: '$v^{10} = 1{,}6 \\Rightarrow v = 1{,}6^{0{,}1} \\approx 1{,}048$. Ca. 4,8% per år.', multipleChoiceOptions: ['Ca. 4,8% per år', 'Ca. 6,0% per år', 'Ca. 3,5% per år', 'Ca. 16% per år'] },
          { label: 'b', task: 'En befolkning økte fra 50 000 til 80 000 på 20 år. Finn årlig vekstrate.', solution: '$v^{20} = 1{,}6 \\Rightarrow v = 1{,}6^{0{,}05} \\approx 1{,}024$. Ca. 2,4% per år.', multipleChoiceOptions: ['Ca. 2,4% per år', 'Ca. 3,0% per år', 'Ca. 1,5% per år', 'Ca. 8% per år'] },
          { label: 'c', task: 'En bil sank i verdi fra 350 000 kr til 140 000 kr på 5 år. Finn årlig verdifall.', solution: '$v^5 = 0{,}4 \\Rightarrow v = 0{,}4^{0{,}2} \\approx 0{,}833$. Ca. 16,7% verdifall per år.', multipleChoiceOptions: ['Ca. 16,7% verdifall per år', 'Ca. 12% verdifall per år', 'Ca. 20% verdifall per år', 'Ca. 42% verdifall per år'] },
        ],
        solution: 'a) ca. 4,8%, b) ca. 2,4%, c) ca. 16,7%',
        hints: ['Finn først total vekstfaktor (slutt/start), så ta n-te rot for å finne årlig faktor'],
      },
    },

    // Oppgave 8: Sammenligning
    {
      id: '10-6-2-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign ulike vekstscenarier',
        subTasks: [
          { label: 'a', task: 'Hva er best over 15 år: 80 000 kr med 6% rente, eller 100 000 kr med 4% rente?', solution: 'A: $80\\,000 \\cdot 1{,}06^{15} \\approx 191\\,736$ kr. B: $100\\,000 \\cdot 1{,}04^{15} \\approx 180\\,094$ kr. A er best.', multipleChoiceOptions: ['80 000 kr med 6% (ca. 191 736 kr)', '100 000 kr med 4% (ca. 180 094 kr)', 'Like gode', 'Avhenger av inflasjonen'] },
          { label: 'b', task: 'Sammenlign: 5% vekst per år i 20 år vs. 10% vekst per år i 10 år.', solution: '$1{,}05^{20} \\approx 2{,}65$. $1{,}10^{10} \\approx 2{,}59$. 5% i 20 år er bedre.', multipleChoiceOptions: ['5% i 20 år (2,65x)', '10% i 10 år (2,59x)', 'Like gode', 'Avhenger av startverdien'] },
        ],
        solution: 'a) 80 000 kr med 6% er best, b) 5% i 20 år er litt bedre',
        hints: ['Beregn sluttverdien for hvert alternativ'],
      },
    },

    // Praktiske anvendelser
    {
      id: '10-6-2-text-praktisk',
      type: 'text',
      content: `## Praktiske anvendelser av vekstfaktor

**Inflasjon:** Når prisene stiger 3% per år, kan vi beregne hva ting vil koste i fremtiden.

**Befolkningsvekst:** Demografer bruker vekstfaktorer for å forutsi fremtidig befolkning.

**Investeringer:** Renter og avkastning beregnes med vekstfaktorer.

**Verdifall:** Biler, elektronikk og maskiner mister verdi over tid.`,
    },

    // Oppgave 9
    {
      id: '10-6-2-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Praktiske anvendelser',
        subTasks: [
          { label: 'a', task: 'Inflasjonen er 4% per år. Hva vil en lunsj til 120 kr koste om 10 år?', solution: '$120 \\cdot 1{,}04^{10} \\approx 178$ kr', multipleChoiceOptions: ['Ca. 178 kr', 'Ca. 168 kr', 'Ca. 160 kr', 'Ca. 200 kr'] },
          { label: 'b', task: 'Norges befolkning er 5,5 millioner og vokser 0,8% per år. Hva blir den om 25 år?', solution: '$5{,}5 \\cdot 1{,}008^{25} \\approx 6{,}7$ millioner', multipleChoiceOptions: ['Ca. 6,7 millioner', 'Ca. 6,0 millioner', 'Ca. 7,5 millioner', 'Ca. 8,0 millioner'] },
          { label: 'c', task: 'En elbil til 450 000 kr mister 15% av verdien årlig. Hva er den verdt etter 4 år?', solution: '$450\\,000 \\cdot 0{,}85^4 \\approx 235\\,066$ kr', multipleChoiceOptions: ['Ca. 235 000 kr', 'Ca. 270 000 kr', 'Ca. 180 000 kr', 'Ca. 300 000 kr'] },
        ],
        solution: 'a) ca. 178 kr, b) ca. 6,7 mill, c) ca. 235 066 kr',
        hints: ['Bruk formelen: sluttverdi = startverdi ganger vekstfaktor opphøyd i antall perioder'],
      },
    },

    // Oppgave 10
    {
      id: '10-6-2-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Avanserte praktiske oppgaver',
        subTasks: [
          { label: 'a', task: 'Du setter inn 1000 kr hver måned på en konto med 0,4% månedlig rente. Omtrent hvor mye har du etter 12 måneder? (Hint: Det første innskuddet får renter i 12 måneder, det siste i 1 måned.)', solution: 'Summen blir ca. $1000 \\cdot (1{,}004^{12} + 1{,}004^{11} + ... + 1{,}004^1) \\approx 12\\,265$ kr' },
          { label: 'b', task: 'Lønnen din øker 3% hvert år. Du tjener 35 000 kr/mnd nå. Hva er månedslønnen om 20 år, og hva er den totale lønnen du mottar over disse 20 årene? (Forenklet: bruk årslønn)', solution: 'Om 20 år: $35\\,000 \\cdot 1{,}03^{20} \\approx 63\\,214$ kr/mnd. Total lønn er komplisert å beregne nøyaktig.' },
        ],
        solution: 'a) ca. 12 265 kr, b) ca. 63 214 kr/mnd',
        hints: ['Dette er geometriske rekker - vi forenkler beregningene'],
      },
    },

    // Oppgave 11
    {
      id: '10-6-2-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: 'En vekstfaktor på 1,05 tilsvarer 5% vekst per år. Hva blir den tilsvarende månedlige vekstfaktoren?', solution: 'Månedlig faktor $= 1{,}05^{1/12} = 1{,}05^{0{,}0833} \\approx 1{,}00407$, dvs. ca. 0,41% per måned.' },
          { label: 'b', task: 'To byer har befolkning på 100 000 hver. By A vokser 3% per år, by B vokser 1% per år. Etter hvor mange år har A dobbelt så mange innbyggere som B?', solution: 'Vi trenger $1{,}03^n = 2 \\cdot 1{,}01^n$, dvs. $(1{,}03/1{,}01)^n = 2$. $1{,}0198^n = 2$. Med tommelfingerregel: $n \\approx 70/1{,}98 \\approx 35$ år.' },
          { label: 'c', task: 'Et aksjefond hadde følgende årlig avkastning: År 1: +20%, År 2: -10%, År 3: +15%, År 4: -5%. Hva var gjennomsnittlig årlig avkastning?', solution: 'Total vekstfaktor: $1{,}20 \\cdot 0{,}90 \\cdot 1{,}15 \\cdot 0{,}95 = 1{,}179$. Årlig snitt: $1{,}179^{0{,}25} \\approx 1{,}042$, dvs. ca. 4,2% per år.' },
        ],
        solution: 'a) ca. 0,41% per måned, b) ca. 35 år, c) ca. 4,2% per år',
        hints: ['For å finne månedlig fra årlig: ta 12. rot av årlig faktor'],
      },
    },

    // Oppgave 12
    {
      id: '10-6-2-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Modellering med vekstfaktor',
        subTasks: [
          { label: 'a', task: 'En kaffemaskin til 8000 kr mister 25% av verdien første år og 15% hvert år etterpå. Hva er den verdt etter 4 år?', solution: 'Etter 1 år: $8000 \\cdot 0{,}75 = 6000$ kr. Etter 4 år: $6000 \\cdot 0{,}85^3 \\approx 3681$ kr' },
          { label: 'b', task: 'Antall elever på en skole synker 2% per år. Nå er det 450 elever. Hvor mange år til det er under 400 elever?', solution: '$450 \\cdot 0{,}98^n < 400$. $0{,}98^6 \\approx 0{,}886$, gir 399 elever. Etter 6 år.', answer: 6 },
          { label: 'c', task: 'En startup vokser 50% per år. Den har nå 10 ansatte. Hvor mange ansatte har den om 5 år?', solution: '$10 \\cdot 1{,}50^5 = 10 \\cdot 7{,}59 \\approx 76$ ansatte', answer: 76 },
        ],
        solution: 'a) ca. 3681 kr, b) 6 år, c) ca. 76 ansatte',
        hints: ['Pass på at første periode kan ha annen vekstfaktor enn resten'],
      },
    },

    // Oppgave 13
    {
      id: '10-6-2-exercise-13',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammensatte problemer',
        subTasks: [
          { label: 'a', task: 'En investering gir 8% årlig avkastning. Du tar ut 5% av verdien hvert år. Vokser eller synker investeringen over tid?', solution: 'Netto vekstfaktor: $1{,}08 \\cdot 0{,}95 = 1{,}026$. Investeringen vokser med ca. 2,6% per år.' },
          { label: 'b', task: 'Prisen på en vare stiger 4% per år, men produksjonskostnadene synker 2% per år. Fortjenesten er nå 20% av prisen. Hva blir fortjenesten (i prosent av prisen) om 10 år?', solution: 'Pris om 10 år: $P \\cdot 1{,}04^{10}$. Kostnad om 10 år: $0{,}80P \\cdot 0{,}98^{10}$. Fortjeneste = $(1{,}48P - 0{,}65P)/1{,}48P \\approx 56\\%$ av prisen.' },
        ],
        solution: 'a) Vokser ca. 2,6% per år, b) Fortjenesten øker til ca. 56% av prisen',
        hints: ['Kombiner vekstfaktorene ved å gange dem sammen'],
      },
    },

    // Oppgave 14
    {
      id: '10-6-2-exercise-14',
      type: 'exercise',
      exercise: {
        id: '10-6-2-oppg-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kritisk tenkning om vekst',
        subTasks: [
          { label: 'a', task: 'Kan eksponentiell vekst fortsette i det uendelige? Diskuter med eksempelet bakterier som dobler seg hver time, startende med 1 bakterie.', solution: 'Nei, eksponentiell vekst kan ikke fortsette evig. Ressursbegrensninger vil alltid stoppe veksten. Etter 24 timer: $2^{24} \\approx 16{,}8$ millioner bakterier, etter 48 timer: $2^{48} \\approx 281$ billioner!' },
          { label: 'b', task: 'Hvorfor bruker vi "gjennomsnittlig årlig vekst" når faktisk vekst varierer fra år til år?', solution: 'Det forenkler beregninger og gir et nyttig sammenligningstall. Det er den konstante vekstraten som ville gitt samme sluttresultat.' },
        ],
        solution: 'a) Nei, ressurser begrenser vekst. b) For å forenkle og sammenligne.',
        hints: ['Tenk på hva som skjer når veksten møter begrensninger'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_6_3: TextbookChapter = {
  id: '10-6-3',
  courseId: '10',
  chapterNumber: '6.3',
  title: 'Rente og lån',
  description: 'Rentesrente, lån, nedbetaling, serielån og annuitetslån.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-6-3-intro',
      type: 'text',
      content: `## Innledning

De fleste av oss vil i løpet av livet ta opp lån - til bolig, bil eller utdanning. Å forstå hvordan renter og lån fungerer er derfor viktig for din privatøkonomi. I dette kapittelet lærer du om rentesrente, ulike lånetyper og hvordan du beregner hva et lån faktisk koster.`,
    },

    // Definisjon: Rente og rentesrente
    {
      id: '10-6-3-def-1',
      type: 'definition',
      title: 'Rente og rentesrente',
      content: `**Rente:** Prisen du betaler for å låne penger, eller gevinsten du får ved å spare.

**Enkel rente:** Renten beregnes kun på opprinnelig beløp.
$$K_n = K_0 \\cdot (1 + r \\cdot n)$$

**Rentesrente (sammensatt rente):** Renten legges til kapitalen og gir rente på rente.
$$K_n = K_0 \\cdot (1 + r)^n$$

der $K_0$ = startkapital, $r$ = rente per periode (som desimaltall), $n$ = antall perioder.`,
    },

    // Eksempel 1: Enkel rente vs rentesrente
    {
      id: '10-6-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Enkel rente vs. rentesrente',
      problem: `Du setter inn 10 000 kr på en sparekonto med 5% årlig rente. Sammenlign beløpet etter 10 år med:
a) Enkel rente (renten utbetales, ikke reinvestert)
b) Rentesrente (renten legges til kontoen)`,
      solution: `**Løsning:**

a) Enkel rente:
$$K_{10} = 10\\,000 \\cdot (1 + 0{,}05 \\cdot 10) = 10\\,000 \\cdot 1{,}5 = 15\\,000 \\text{ kr}$$

b) Rentesrente:
$$K_{10} = 10\\,000 \\cdot 1{,}05^{10} = 10\\,000 \\cdot 1{,}629 \\approx 16\\,289 \\text{ kr}$$

**Forskjell:** Med rentesrente får du 1 289 kr mer!`,
    },

    // Oppgave 1
    {
      id: '10-6-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn med rentesrente',
        subTasks: [
          { label: 'a', task: 'Du setter inn 5000 kr med 4% årlig rente. Hva har du etter 3 år?', solution: '$5000 \\cdot 1{,}04^3 = 5624{,}32$ kr', multipleChoiceOptions: ['$5624{,}32$ kr', '$5600$ kr', '$5800$ kr', '$6000$ kr'] },
          { label: 'b', task: 'Du låner 8000 kr til 6% rente i 2 år. Hvor mye skylder du?', solution: '$8000 \\cdot 1{,}06^2 = 8988{,}80$ kr', multipleChoiceOptions: ['$8988{,}80$ kr', '$8960$ kr', '$9000$ kr', '$8480$ kr'] },
          { label: 'c', task: 'En investering på 20 000 kr vokser 7% årlig. Hva er den verdt etter 5 år?', solution: '$20\\,000 \\cdot 1{,}07^5 \\approx 28\\,051$ kr', multipleChoiceOptions: ['Ca. $28\\,051$ kr', 'Ca. $27\\,000$ kr', 'Ca. $30\\,000$ kr', 'Ca. $25\\,000$ kr'] },
          { label: 'd', task: 'Du arver 50 000 kr og sparer dem i 8 år til 3,5% rente. Hva har du da?', solution: '$50\\,000 \\cdot 1{,}035^8 \\approx 65\\,754$ kr', multipleChoiceOptions: ['Ca. $65\\,754$ kr', 'Ca. $64\\,000$ kr', 'Ca. $70\\,000$ kr', 'Ca. $58\\,000$ kr'] },
        ],
        solution: 'a) 5624,32 kr, b) 8988,80 kr, c) ca. 28 051 kr, d) ca. 65 754 kr',
        hints: ['Bruk formelen for rentesrente: slutt = start ganger (1 + r) opphøyd i n'],
      },
    },

    // Oppgave 2
    {
      id: '10-6-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign enkel rente og rentesrente',
        subTasks: [
          { label: 'a', task: 'Beregn 15 000 kr med 6% enkel rente i 5 år.', solution: '$15\\,000 \\cdot (1 + 0{,}06 \\cdot 5) = 15\\,000 \\cdot 1{,}30 = 19\\,500$ kr', answer: 19500 },
          { label: 'b', task: 'Beregn 15 000 kr med 6% rentesrente i 5 år.', solution: '$15\\,000 \\cdot 1{,}06^5 \\approx 20\\,073$ kr', multipleChoiceOptions: ['Ca. $20\\,073$ kr', '$19\\,500$ kr', '$21\\,000$ kr', '$18\\,000$ kr'] },
          { label: 'c', task: 'Hvor mye mer får du med rentesrente?', solution: '$20\\,073 - 19\\,500 = 573$ kr mer', answer: 573 },
        ],
        solution: 'a) 19 500 kr, b) ca. 20 073 kr, c) 573 kr mer',
        hints: ['Enkel rente: K = K0 ganger (1 + r ganger n)'],
      },
    },

    // Definisjon: Nominell og effektiv rente
    {
      id: '10-6-3-def-2',
      type: 'definition',
      title: 'Nominell og effektiv rente',
      content: `**Nominell rente:** Den oppgitte årlige renten, uten å ta hensyn til hvor ofte renten beregnes.

**Effektiv rente:** Den faktiske årlige renten, inkludert effekten av rentens rente og eventuelle gebyrer.

**Terminrente:** Renten per betalingsperiode.

Hvis nominell rente er $r_{\\text{nom}}$ og renten beregnes $m$ ganger per år:
$$r_{\\text{eff}} = \\left(1 + \\frac{r_{\\text{nom}}}{m}\\right)^m - 1$$

**Eksempel:** 12% nominell rente med månedlig renteberegning:
$$r_{\\text{eff}} = \\left(1 + \\frac{0{,}12}{12}\\right)^{12} - 1 = 1{,}01^{12} - 1 \\approx 12{,}68\\%$$`,
    },

    // Eksempel 2: Effektiv rente
    {
      id: '10-6-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Nominell og effektiv rente',
      problem: `En bank tilbyr sparekonto med 6% nominell rente. Renten tilskrives kvartalsvis (4 ganger per år). Hva er den effektive årlige renten?`,
      solution: `**Løsning:**

Kvartalsrente $= \\frac{6\\%}{4} = 1{,}5\\%$ per kvartal

Effektiv rente:
$$r_{\\text{eff}} = \\left(1 + \\frac{0{,}06}{4}\\right)^4 - 1 = 1{,}015^4 - 1$$
$$= 1{,}0614 - 1 = 0{,}0614 = 6{,}14\\%$$

Den effektive renten er høyere enn nominell rente fordi du får rente på renten gjennom året.`,
    },

    // Oppgave 3
    {
      id: '10-6-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn effektiv rente',
        subTasks: [
          { label: 'a', task: '8% nominell rente, månedlig renteberegning. Finn effektiv rente.', solution: '$r_{\\text{eff}} = 1{,}00667^{12} - 1 \\approx 8{,}30\\%$', multipleChoiceOptions: ['Ca. $8{,}30\\%$', '$8{,}00\\%$', 'Ca. $8{,}50\\%$', 'Ca. $9{,}00\\%$'] },
          { label: 'b', task: '5% nominell rente, halvårlig renteberegning. Finn effektiv rente.', solution: '$r_{\\text{eff}} = 1{,}025^2 - 1 = 5{,}06\\%$', multipleChoiceOptions: ['$5{,}06\\%$', '$5{,}00\\%$', '$5{,}10\\%$', '$5{,}25\\%$'] },
          { label: 'c', task: 'Hvilken gir høyest effektiv rente: 10% med årlig renteberegning eller 9,8% med månedlig?', solution: 'Årlig: 10%. Månedlig: $1{,}00817^{12} - 1 \\approx 10{,}25\\%$. Månedlig er best.', multipleChoiceOptions: ['9,8% månedlig (10,25% effektiv)', '10% årlig', 'Like gode', 'Avhenger av beløpet'] },
        ],
        solution: 'a) ca. 8,30%, b) 5,06%, c) 9,8% månedlig gir høyest (10,25%)',
        hints: ['Effektiv rente = (1 + nominell/m)^m - 1, der m er antall renteperioder per år'],
      },
    },

    // Definisjon: Lånetyper
    {
      id: '10-6-3-def-3',
      type: 'definition',
      title: 'Lånetyper: Serielån og annuitetslån',
      content: `**Serielån:**
- Avdraget er likt hver termin
- Terminbeløpet synker over tid (fordi rentedelen blir mindre)
- Lavere totale rentekostnader

**Annuitetslån:**
- Terminbeløpet er likt hver termin
- I starten er det mest renter, mot slutten mest avdrag
- Enklere å budsjettere

**Terminbeløp = Avdrag + Renter**

Ved serielån: $\\text{Avdrag} = \\frac{\\text{Lånebeløp}}{\\text{Antall terminer}}$`,
    },

    // Eksempel 3: Serielån
    {
      id: '10-6-3-ex-3',
      type: 'example',
      title: 'Eksempel 3: Serielån',
      problem: `Du tar opp et serielån på 100 000 kr med 6% årlig rente. Lånet skal nedbetales over 4 år med årlige terminer. Lag en nedbetalingsplan.`,
      solution: `**Løsning:**

Årlig avdrag $= \\frac{100\\,000}{4} = 25\\,000$ kr

| År | Restgjeld start | Renter (6%) | Avdrag | Terminbeløp | Restgjeld slutt |
|:--:|:---------------:|:-----------:|:------:|:-----------:|:---------------:|
| 1  | 100 000         | 6 000       | 25 000 | 31 000      | 75 000          |
| 2  | 75 000          | 4 500       | 25 000 | 29 500      | 50 000          |
| 3  | 50 000          | 3 000       | 25 000 | 28 000      | 25 000          |
| 4  | 25 000          | 1 500       | 25 000 | 26 500      | 0               |

**Totale renter:** $6000 + 4500 + 3000 + 1500 = 15\\,000$ kr`,
    },

    // Oppgave 4
    {
      id: '10-6-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beregn serielån',
        subTasks: [
          { label: 'a', task: 'Serielån: 80 000 kr, 5% rente, 4 år. Finn årlig avdrag.', solution: '$\\frac{80\\,000}{4} = 20\\,000$ kr', answer: 20000 },
          { label: 'b', task: 'Samme lån: Finn terminbeløpet første år.', solution: 'Rente: $80\\,000 \\cdot 0{,}05 = 4000$ kr. Terminbeløp: $20\\,000 + 4000 = 24\\,000$ kr', answer: 24000 },
          { label: 'c', task: 'Samme lån: Finn terminbeløpet tredje år.', solution: 'Restgjeld: 40 000 kr. Rente: $40\\,000 \\cdot 0{,}05 = 2000$ kr. Terminbeløp: $22\\,000$ kr', answer: 22000 },
          { label: 'd', task: 'Samme lån: Finn totale rentekostnader.', solution: '$4000 + 3000 + 2000 + 1000 = 10\\,000$ kr', answer: 10000 },
        ],
        solution: 'a) 20 000 kr, b) 24 000 kr, c) 22 000 kr, d) 10 000 kr',
        hints: ['Ved serielån er avdraget konstant. Renten beregnes av restgjelden.'],
      },
    },

    // Oppgave 5
    {
      id: '10-6-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag nedbetalingsplan for serielån',
        subTasks: [
          { label: 'a', task: 'Et serielån på 60 000 kr med 8% rente over 3 år. Lag nedbetalingsplan med årlige terminer.', solution: 'Avdrag: 20 000 kr/år. År 1: 24 800 kr. År 2: 23 200 kr. År 3: 21 600 kr. Totalt betalt: 69 600 kr.' },
          { label: 'b', task: 'Hva er totale rentekostnader?', solution: '$4800 + 3200 + 1600 = 9600$ kr', answer: 9600 },
        ],
        solution: 'a) Se tabellen i løsningen. b) 9 600 kr',
        hints: ['Start med å finne årlig avdrag, deretter beregn renter for hvert år'],
      },
    },

    // Definisjon: Annuitetslån
    {
      id: '10-6-3-def-4',
      type: 'definition',
      title: 'Annuitetsformelen',
      content: `Ved annuitetslån er terminbeløpet konstant. Formelen for terminbeløp er:

$$T = L \\cdot \\frac{r(1+r)^n}{(1+r)^n - 1}$$

der:
- $T$ = terminbeløp
- $L$ = lånebeløp
- $r$ = rente per termin (som desimaltall)
- $n$ = antall terminer

**Merk:** Denne formelen er gitt på eksamen. Du trenger ikke huske den, men du må kunne bruke den.`,
    },

    // Eksempel 4: Annuitetslån
    {
      id: '10-6-3-ex-4',
      type: 'example',
      title: 'Eksempel 4: Annuitetslån',
      problem: `Du tar opp et annuitetslån på 100 000 kr med 6% årlig rente over 4 år med årlige terminer. Finn terminbeløpet.`,
      solution: `**Løsning:**

$L = 100\\,000$, $r = 0{,}06$, $n = 4$

$$T = 100\\,000 \\cdot \\frac{0{,}06 \\cdot (1{,}06)^4}{(1{,}06)^4 - 1}$$

$$= 100\\,000 \\cdot \\frac{0{,}06 \\cdot 1{,}2625}{1{,}2625 - 1}$$

$$= 100\\,000 \\cdot \\frac{0{,}0757}{0{,}2625} \\approx 28\\,859 \\text{ kr}$$

Hvert år betaler du ca. 28 859 kr.

**Totalt betalt:** $4 \\cdot 28\\,859 = 115\\,436$ kr

**Totale renter:** $115\\,436 - 100\\,000 = 15\\,436$ kr`,
    },

    // Oppgave 6
    {
      id: '10-6-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk annuitetsformelen',
        subTasks: [
          { label: 'a', task: 'Annuitetslån: 200 000 kr, 5% rente, 5 år med årlige terminer. Finn terminbeløpet.', solution: '$T = 200\\,000 \\cdot \\frac{0{,}05 \\cdot 1{,}05^5}{1{,}05^5 - 1} \\approx 46\\,210$ kr' },
          { label: 'b', task: 'Samme lån: Finn totalt beløp betalt.', solution: '$5 \\cdot 46\\,210 = 231\\,050$ kr' },
          { label: 'c', task: 'Samme lån: Finn totale rentekostnader.', solution: '$231\\,050 - 200\\,000 = 31\\,050$ kr', answer: 31050 },
        ],
        solution: 'a) ca. 46 210 kr, b) ca. 231 050 kr, c) ca. 31 050 kr',
        hints: ['Bruk formelen nøyaktig. Husk at 1,05^5 = 1,2763'],
      },
    },

    // Oppgave 7: Sammenligning
    {
      id: '10-6-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign serielån og annuitetslån',
        subTasks: [
          { label: 'a', task: 'Et lån på 120 000 kr med 6% rente over 4 år. For serielån: Finn første og siste terminbeløp.', solution: 'Avdrag: 30 000 kr. År 1: $30\\,000 + 7200 = 37\\,200$ kr. År 4: $30\\,000 + 1800 = 31\\,800$ kr' },
          { label: 'b', task: 'Samme lån som annuitet. Terminbeløpet er ca. 34 646 kr. Bekreft at totale renter er høyere enn serielån.', solution: 'Annuitet totalt: $4 \\cdot 34\\,646 = 138\\,584$ kr. Renter: 18 584 kr. Serielån renter: $7200 + 5400 + 3600 + 1800 = 18\\,000$ kr. Annuitet har 584 kr mer i renter.' },
          { label: 'c', task: 'Hvorfor betaler man mer i renter med annuitetslån?', solution: 'Fordi avdragene er mindre i starten av annuitetslån, så restgjelden synker saktere.' },
        ],
        solution: 'a) 37 200 kr og 31 800 kr, b) Annuitet: 18 584 kr vs Serielån: 18 000 kr, c) Saktere nedbetaling av gjeld',
        hints: ['Ved serielån betaler du ned mer gjeld tidlig, så rentene blir lavere'],
      },
    },

    // Eksempel 5: Månedlige terminer
    {
      id: '10-6-3-ex-5',
      type: 'example',
      title: 'Eksempel 5: Månedlige terminer',
      problem: `Du tar opp et boliglån på 2 000 000 kr med 4% nominell rente og månedlige terminer over 25 år. Finn det månedlige terminbeløpet (annuitet).`,
      solution: `**Løsning:**

$L = 2\\,000\\,000$
Månedlig rente: $r = \\frac{0{,}04}{12} = 0{,}00333$
Antall terminer: $n = 25 \\cdot 12 = 300$

$$T = 2\\,000\\,000 \\cdot \\frac{0{,}00333 \\cdot (1{,}00333)^{300}}{(1{,}00333)^{300} - 1}$$

$(1{,}00333)^{300} \\approx 2{,}714$

$$T = 2\\,000\\,000 \\cdot \\frac{0{,}00333 \\cdot 2{,}714}{2{,}714 - 1} \\approx 10\\,559 \\text{ kr/mnd}$$

**Totalt betalt:** $300 \\cdot 10\\,559 = 3\\,167\\,700$ kr

**Totale renter:** $3\\,167\\,700 - 2\\,000\\,000 = 1\\,167\\,700$ kr`,
    },

    // Oppgave 8
    {
      id: '10-6-3-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beregn boliglån',
        subTasks: [
          { label: 'a', task: 'Boliglån: 3 000 000 kr, 5% nominell rente, månedlige terminer i 30 år. Månedlig terminbeløp er ca. 16 104 kr. Finn totale rentekostnader.', solution: 'Totalt betalt: $360 \\cdot 16\\,104 = 5\\,797\\,440$ kr. Renter: $5\\,797\\,440 - 3\\,000\\,000 = 2\\,797\\,440$ kr' },
          { label: 'b', task: 'Samme lån, men over 20 år. Terminbeløpet er ca. 19 799 kr. Finn besparelsen i renter.', solution: 'Totalt: $240 \\cdot 19\\,799 = 4\\,751\\,760$ kr. Renter: $1\\,751\\,760$ kr. Besparelse: $2\\,797\\,440 - 1\\,751\\,760 = 1\\,045\\,680$ kr' },
        ],
        solution: 'a) ca. 2,8 mill kr i renter, b) Sparer ca. 1,05 mill kr med 20 års nedbetalingstid',
        hints: ['Kortere nedbetalingstid gir høyere terminbeløp, men mye lavere totale renter'],
      },
    },

    // Praktisk info
    {
      id: '10-6-3-text-praktisk',
      type: 'text',
      content: `## Praktiske tips om lån

**Ekstra innbetaling:** Å betale ekstra på lånet reduserer restgjelden og dermed fremtidige rentekostnader.

**Refinansiering:** Å flytte lånet til en bank med lavere rente kan spare mye penger.

**Avdragsfrihet:** Noen lån tilbyr perioder uten avdrag, men renten løper fortsatt - dette øker totalkostnaden.

**Forbrukslån vs. boliglån:** Forbrukslån har mye høyere rente (10-20%) enn boliglån (3-6%).`,
    },

    // Oppgave 9
    {
      id: '10-6-3-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ekstra innbetaling på lån',
        subTasks: [
          { label: 'a', task: 'Du har et lån på 500 000 kr med 5% rente. Du betaler ekstra 50 000 kr. Hvor mye sparer du i renter per år?', solution: '$50\\,000 \\cdot 0{,}05 = 2500$ kr spart per år', answer: 2500 },
          { label: 'b', task: 'Over 15 år, omtrent hvor mye sparer du totalt? (Forenklet beregning)', solution: 'Enkel tilnærming: ca. $2500 \\cdot 15 / 2 \\approx 18\\,750$ kr (gjelden synker gradvis)' },
          { label: 'c', task: 'Du har et billån på 200 000 kr til 8% rente over 5 år (serielån). Du får 30 000 kr i bonus og bruker det på ekstra avdrag etter år 1. Omtrent hvor mye sparer du i renter?', solution: 'Spart rente: ca. $30\\,000 \\cdot 0{,}08 \\cdot 4 = 9600$ kr (forenklet)' },
        ],
        solution: 'a) 2500 kr/år, b) ca. 18 750 kr, c) ca. 9600 kr',
        hints: ['Ekstra innbetaling reduserer restgjelden, som reduserer renten du betaler'],
      },
    },

    // Oppgave 10
    {
      id: '10-6-3-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenligne lånetilbud',
        subTasks: [
          { label: 'a', task: 'Bank A tilbyr 4,5% rente og 500 kr i etableringsgebyr. Bank B tilbyr 4,2% rente og 3000 kr i etableringsgebyr. For et lån på 100 000 kr over 3 år, hvilken bank er billigst totalt?', solution: 'A: Renter ca. $100\\,000 \\cdot 0{,}045 \\cdot 3 \\cdot 0{,}5 \\approx 6750$ kr + 500 = 7250 kr. B: Renter ca. 6300 kr + 3000 = 9300 kr. Bank A er billigst.' },
          { label: 'b', task: 'For hvilket lånebeløp blir bank B billigere enn bank A?', solution: 'La $x$ være lånebeløp. A: $0{,}045 \\cdot 1{,}5 \\cdot x + 500$. B: $0{,}042 \\cdot 1{,}5 \\cdot x + 3000$. Løs: $0{,}0045x = 2500 \\Rightarrow x \\approx 556\\,000$ kr' },
        ],
        solution: 'a) Bank A er billigst for 100 000 kr, b) Bank B blir billigst for lån over ca. 556 000 kr',
        hints: ['Gebyrer teller mest for små lån, renten teller mest for store lån'],
      },
    },

    // Oppgave 11: Tekstoppgaver
    {
      id: '10-6-3-exercise-11',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Praktiske låneoppgaver',
        subTasks: [
          { label: 'a', task: 'Sara låner 150 000 kr til bil med 7% rente som serielån over 5 år. Finn totale rentekostnader.', solution: 'Avdrag: 30 000 kr/år. Renter: $10\\,500 + 8400 + 6300 + 4200 + 2100 = 31\\,500$ kr', answer: 31500 },
          { label: 'b', task: 'Erik vurderer to alternativer for boliglån på 2 mill: A) 25 år med 4% rente B) 15 år med 4,5% rente. Hvilken gir lavest totale rentekostnader?', solution: 'A: Terminbeløp ca. 10 559 kr, totalt ca. 3,17 mill, renter ca. 1,17 mill. B: Terminbeløp ca. 15 297 kr, totalt ca. 2,75 mill, renter ca. 0,75 mill. B er billigere.' },
        ],
        solution: 'a) 31 500 kr, b) 15 år med 4,5% rente gir lavest renter',
        hints: ['Kortere nedbetalingstid gir vanligvis lavere totale renter selv med høyere rente'],
      },
    },

    // Oppgave 12
    {
      id: '10-6-3-exercise-12',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-12',
        number: '12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbrukslån vs. sparing',
        subTasks: [
          { label: 'a', task: 'Du vil kjøpe en TV til 15 000 kr. Alternativ 1: Forbrukslån med 18% rente i 2 år. Alternativ 2: Spare i 8 måneder med 3% rente. Hva blir prisforskjellen?', solution: 'Lån: $15\\,000 \\cdot 1{,}18^2 \\approx 20\\,886$ kr. Sparing: Du trenger ca. 1875 kr/mnd, får tilbake litt rente. Total forskjell: ca. 5800 kr dyrere med lån.' },
          { label: 'b', task: 'Du har kredittkortgjeld på 20 000 kr til 20% rente. Hvor mye "tjener" du på å betale den ned i stedet for å investere til 7% avkastning?', solution: 'Du sparer 20% - 7% = 13% på de 20 000 kr, dvs. 2600 kr per år.' },
        ],
        solution: 'a) Ca. 5800 kr dyrere med lån, b) Du tjener 13% (2600 kr/år) på å betale ned gjelden',
        hints: ['Sammenlign rentekostnadene mellom alternativene'],
      },
    },

    // Oppgave 13: Utfordring
    {
      id: '10-6-3-exercise-13',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-13',
        number: '13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Utfordringsoppgaver',
        subTasks: [
          { label: 'a', task: 'Du setter inn 500 kr hver måned på en sparekonto med 0,4% månedlig rente. Omtrent hvor mye har du etter 2 år?', solution: 'Dette er en geometrisk rekke. Forenklet: ca. $500 \\cdot 24 + \\text{renter} \\approx 12\\,500$ kr' },
          { label: 'b', task: 'Et boliglån har flytende rente. Renten øker fra 3% til 5%. Hvor mye øker det månedlige terminbeløpet på et lån på 2 mill over 25 år?', solution: 'Med 3%: ca. 9 485 kr/mnd. Med 5%: ca. 11 682 kr/mnd. Økning: ca. 2 197 kr/mnd.' },
          { label: 'c', task: 'Du arver 200 000 kr. Bør du bruke dem til ekstra avdrag på boliglån (4% rente) eller investere i fond (forventet 8% avkastning)?', solution: 'Matematisk er fond best (8% > 4%). Men: Fond har risiko, nedbetaling er risikofri. Personlig økonomi og risikovilje avgjør.' },
        ],
        solution: 'a) ca. 12 500 kr, b) ca. 2 200 kr/mnd økning, c) Avhenger av risikotoleranse',
        hints: ['Husk at investeringer har risiko, mens nedbetaling av gjeld er risikofri'],
      },
    },

    // Oppgave 14: Kritisk tenkning
    {
      id: '10-6-3-exercise-14',
      type: 'exercise',
      exercise: {
        id: '10-6-3-oppg-14',
        number: '14',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kritisk tenkning om lån',
        subTasks: [
          { label: 'a', task: 'En bank reklamerer med "Lån 100 000 kr for bare 2000 kr i måneden!" (5 års nedbetalingstid). Hva er den effektive renten?', solution: 'Totalt betalt: $60 \\cdot 2000 = 120\\,000$ kr. Renter: 20 000 kr. Gjennomsnittlig rente per år er mye høyere enn 4% (som enkelt rente ville gitt). Effektiv rente: ca. 7-8%.' },
          { label: 'b', task: 'Hvorfor tilbyr bilforhandlere ofte "0% rente" på billån?', solution: 'Fordi rentekostnaden er bakt inn i bilprisen, eller de tjener på forsikringer og tilleggstjenester. Det er sjelden gratis.' },
        ],
        solution: 'a) Effektiv rente er ca. 7-8%, b) Kostnaden er skjult i prisen eller tilleggstjenester',
        hints: ['Beregn alltid hva du totalt betaler, ikke bare terminbeløpet'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_1_1: TextbookChapter = {
  id: '10-1-1',
  courseId: '10',
  chapterNumber: '1.1',
  title: 'Regning med røtter',
  description: 'Kvadratrøtter, forenkling og regning med røtter.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar'],
  content: [
    {
      id: '10-1-1-text-1',
      type: 'text',
      content: 'I dette kapittelet skal vi lære om kvadratrøtter og andre røtter, og hvordan vi kan forenkle og regne med dem.',
    },
    {
      id: '10-1-1-def-1',
      type: 'definition',
      title: 'Kvadratrot',
      content: 'Kvadratroten av et tall $a$ er det positive tallet som multiplisert med seg selv gir $a$.\n\n$$\\sqrt{a} \\cdot \\sqrt{a} = a$$\n\nFor eksempel: $\\sqrt{25} = 5$ fordi $5 \\cdot 5 = 25$.',
    },
    {
      id: '10-1-1-eks-1',
      type: 'example',
      title: 'Eksempel 1: Finne kvadratrøtter',
      problem: 'Finn verdien av:\na) $\\sqrt{49}$\nb) $\\sqrt{144}$\nc) $\\sqrt{0{,}36}$',
      solution: 'a) $\\sqrt{49} = 7$ fordi $7 \\cdot 7 = 49$\nb) $\\sqrt{144} = 12$ fordi $12 \\cdot 12 = 144$\nc) $\\sqrt{0{,}36} = 0{,}6$ fordi $0{,}6 \\cdot 0{,}6 = 0{,}36$',
    },
    {
      id: '10-1-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: '10-1-1-oppg-1',
        number: '1.1.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn verdien av kvadratrøttene.',
        subTasks: [
          { label: 'a', task: 'Finn $\\sqrt{81}$', solution: '$\\sqrt{81} = 9$ fordi $9 \\cdot 9 = 81$', answer: 9 },
          { label: 'b', task: 'Finn $\\sqrt{196}$', solution: '$\\sqrt{196} = 14$ fordi $14 \\cdot 14 = 196$', answer: 14 },
          { label: 'c', task: 'Finn $\\sqrt{0{,}04}$', solution: '$\\sqrt{0{,}04} = 0{,}2$ fordi $0{,}2 \\cdot 0{,}2 = 0{,}04$', answer: 0.2 },
          { label: 'd', task: 'Finn $\\sqrt{\\frac{9}{16}}$', solution: '$\\sqrt{\\frac{9}{16}} = \\frac{3}{4}$ fordi $\\frac{3}{4} \\cdot \\frac{3}{4} = \\frac{9}{16}$', expressionAnswer: '3/4' },
        ],
        solution: 'a) 9, b) 14, c) 0,2, d) 3/4',
        hints: ['Tenk: Hvilket tall ganget med seg selv gir dette?'],
      },
    },
    {
      id: '10-1-1-def-2',
      type: 'definition',
      title: 'Regneregler for røtter',
      content: 'Vi har følgende viktige regneregler:\n\n**Produktregelen:** $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$\n\n**Brøkregelen:** $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$',
    },
    {
      id: '10-1-1-eks-2',
      type: 'example',
      title: 'Eksempel 2: Forenkle røtter',
      problem: 'Forenkle:\na) $\\sqrt{50}$\nb) $\\sqrt{72}$',
      solution: 'a) $\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$\n\nb) $\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$',
    },
    {
      id: '10-1-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: '10-1-1-oppg-2',
        number: '1.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle røttene så mye som mulig.',
        subTasks: [
          { label: 'a', task: 'Forenkle $\\sqrt{32}$', solution: '$\\sqrt{32} = \\sqrt{16 \\cdot 2} = 4\\sqrt{2}$', multipleChoiceOptions: ['$4\\sqrt{2}$', '$2\\sqrt{8}$', '$8\\sqrt{2}$', '$\\sqrt{32}$'] },
          { label: 'b', task: 'Forenkle $\\sqrt{45}$', solution: '$\\sqrt{45} = \\sqrt{9 \\cdot 5} = 3\\sqrt{5}$', multipleChoiceOptions: ['$3\\sqrt{5}$', '$5\\sqrt{3}$', '$9\\sqrt{5}$', '$\\sqrt{45}$'] },
          { label: 'c', task: 'Forenkle $\\sqrt{98}$', solution: '$\\sqrt{98} = \\sqrt{49 \\cdot 2} = 7\\sqrt{2}$', multipleChoiceOptions: ['$7\\sqrt{2}$', '$2\\sqrt{49}$', '$49\\sqrt{2}$', '$\\sqrt{98}$'] },
          { label: 'd', task: 'Forenkle $\\sqrt{200}$', solution: '$\\sqrt{200} = \\sqrt{100 \\cdot 2} = 10\\sqrt{2}$', multipleChoiceOptions: ['$10\\sqrt{2}$', '$2\\sqrt{100}$', '$20\\sqrt{2}$', '$\\sqrt{200}$'] },
        ],
        solution: 'a) 4√2, b) 3√5, c) 7√2, d) 10√2',
        hints: ['Finn den største kvadrattallsfaktoren under rottegnet'],
      },
    },
    {
      id: '10-1-1-eks-3',
      type: 'example',
      title: 'Eksempel 3: Addere og subtrahere røtter',
      problem: 'Regn ut:\na) $3\\sqrt{2} + 5\\sqrt{2}$\nb) $\\sqrt{8} + \\sqrt{18}$',
      solution: 'a) $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$ (vi legger sammen koeffisientene)\n\nb) $\\sqrt{8} + \\sqrt{18} = \\sqrt{4 \\cdot 2} + \\sqrt{9 \\cdot 2} = 2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$',
    },
    {
      id: '10-1-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: '10-1-1-oppg-3',
        number: '1.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forenkle.',
        subTasks: [
          { label: 'a', task: 'Regn ut $7\\sqrt{3} - 2\\sqrt{3}$', solution: '$7\\sqrt{3} - 2\\sqrt{3} = 5\\sqrt{3}$', multipleChoiceOptions: ['$5\\sqrt{3}$', '$9\\sqrt{3}$', '$5\\sqrt{6}$', '$14\\sqrt{3}$'] },
          { label: 'b', task: 'Regn ut $\\sqrt{12} + \\sqrt{27}$', solution: '$\\sqrt{12} + \\sqrt{27} = 2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$', multipleChoiceOptions: ['$5\\sqrt{3}$', '$\\sqrt{39}$', '$6\\sqrt{3}$', '$2\\sqrt{3} + 3\\sqrt{3}$'] },
          { label: 'c', task: 'Regn ut $\\sqrt{50} - \\sqrt{8}$', solution: '$\\sqrt{50} - \\sqrt{8} = 5\\sqrt{2} - 2\\sqrt{2} = 3\\sqrt{2}$', multipleChoiceOptions: ['$3\\sqrt{2}$', '$\\sqrt{42}$', '$7\\sqrt{2}$', '$\\sqrt{58}$'] },
          { label: 'd', task: 'Regn ut $2\\sqrt{20} + 3\\sqrt{5}$', solution: '$2\\sqrt{20} + 3\\sqrt{5} = 2 \\cdot 2\\sqrt{5} + 3\\sqrt{5} = 4\\sqrt{5} + 3\\sqrt{5} = 7\\sqrt{5}$', multipleChoiceOptions: ['$7\\sqrt{5}$', '$5\\sqrt{25}$', '$10\\sqrt{5}$', '$2\\sqrt{20} + 3\\sqrt{5}$'] },
        ],
        solution: 'a) 5√3, b) 5√3, c) 3√2, d) 7√5',
        hints: ['Forenkle først hver rot, deretter kan du legge sammen'],
      },
    },
    {
      id: '10-1-1-eks-4',
      type: 'example',
      title: 'Eksempel 4: Multiplisere røtter',
      problem: 'Regn ut:\na) $\\sqrt{3} \\cdot \\sqrt{12}$\nb) $2\\sqrt{6} \\cdot 3\\sqrt{2}$',
      solution: 'a) $\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{3 \\cdot 12} = \\sqrt{36} = 6$\n\nb) $2\\sqrt{6} \\cdot 3\\sqrt{2} = 2 \\cdot 3 \\cdot \\sqrt{6 \\cdot 2} = 6\\sqrt{12} = 6 \\cdot 2\\sqrt{3} = 12\\sqrt{3}$',
    },
    {
      id: '10-1-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: '10-1-1-oppg-4',
        number: '1.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut og forenkle.',
        subTasks: [
          { label: 'a', task: 'Regn ut $\\sqrt{5} \\cdot \\sqrt{20}$', solution: '$\\sqrt{5} \\cdot \\sqrt{20} = \\sqrt{100} = 10$', answer: 10 },
          { label: 'b', task: 'Regn ut $\\sqrt{6} \\cdot \\sqrt{24}$', solution: '$\\sqrt{6} \\cdot \\sqrt{24} = \\sqrt{144} = 12$', answer: 12 },
          { label: 'c', task: 'Regn ut $3\\sqrt{2} \\cdot 4\\sqrt{8}$', solution: '$3\\sqrt{2} \\cdot 4\\sqrt{8} = 12\\sqrt{16} = 12 \\cdot 4 = 48$', answer: 48 },
          { label: 'd', task: 'Regn ut $(2\\sqrt{3})^2$', solution: '$(2\\sqrt{3})^2 = 4 \\cdot 3 = 12$', answer: 12 },
        ],
        solution: 'a) 10, b) 12, c) 48, d) 12',
        hints: ['Bruk regelen √a · √b = √(ab)'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_1_2: TextbookChapter = {
  id: '10-1-2',
  courseId: '10',
  chapterNumber: '1.2',
  title: 'Rasjonale tall',
  description: 'Brøker, desimaltall og omgjøring mellom ulike representasjoner.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar'],
  content: [
    {
      id: '10-1-2-text-1',
      type: 'text',
      content: 'Rasjonale tall er tall som kan skrives som brøk. I dette kapittelet repeterer og utdyper vi arbeidet med brøker og desimaltall.',
    },
    {
      id: '10-1-2-def-1',
      type: 'definition',
      title: 'Rasjonale tall',
      content: 'Et **rasjonalt tall** er et tall som kan skrives på formen $\\frac{p}{q}$ der $p$ og $q$ er heltall og $q \\neq 0$.\n\nRasjonale tall inkluderer:\n- Heltall (f.eks. $5 = \\frac{5}{1}$)\n- Vanlige brøker (f.eks. $\\frac{3}{4}$)\n- Endelige desimaltall (f.eks. $0{,}75 = \\frac{3}{4}$)\n- Periodiske desimaltall (f.eks. $0{,}333... = \\frac{1}{3}$)',
    },
    {
      id: '10-1-2-eks-1',
      type: 'example',
      title: 'Eksempel 1: Omgjøring fra desimaltall til brøk',
      problem: 'Skriv som brøk og forkort:\na) $0{,}625$\nb) $2{,}4$',
      solution: 'a) $0{,}625 = \\frac{625}{1000} = \\frac{5}{8}$\n\nb) $2{,}4 = \\frac{24}{10} = \\frac{12}{5}$',
    },
    {
      id: '10-1-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: '10-1-2-oppg-1',
        number: '1.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv desimaltallene som brøk i laveste form.',
        subTasks: [
          { label: 'a', task: 'Skriv $0{,}375$ som brøk', solution: '$0{,}375 = \\frac{375}{1000} = \\frac{3}{8}$', expressionAnswer: '3/8' },
          { label: 'b', task: 'Skriv $0{,}45$ som brøk', solution: '$0{,}45 = \\frac{45}{100} = \\frac{9}{20}$', expressionAnswer: '9/20' },
          { label: 'c', task: 'Skriv $1{,}75$ som brøk', solution: '$1{,}75 = \\frac{175}{100} = \\frac{7}{4}$', expressionAnswer: '7/4' },
          { label: 'd', task: 'Skriv $0{,}125$ som brøk', solution: '$0{,}125 = \\frac{125}{1000} = \\frac{1}{8}$', expressionAnswer: '1/8' },
        ],
        solution: 'a) 3/8, b) 9/20, c) 7/4, d) 1/8',
        hints: ['Skriv desimaltallet som en brøk med 10, 100 eller 1000 i nevneren, og forkort'],
      },
    },
    {
      id: '10-1-2-eks-2',
      type: 'example',
      title: 'Eksempel 2: Periodiske desimaltall til brøk',
      problem: 'Skriv som brøk:\na) $0{,}\\overline{6}$ (0,666...)\nb) $0{,}\\overline{27}$ (0,272727...)',
      solution: 'a) La $x = 0{,}666...$\n$10x = 6{,}666...$\n$10x - x = 6$\n$9x = 6$\n$x = \\frac{6}{9} = \\frac{2}{3}$\n\nb) La $x = 0{,}2727...$\n$100x = 27{,}2727...$\n$100x - x = 27$\n$99x = 27$\n$x = \\frac{27}{99} = \\frac{3}{11}$',
    },
    {
      id: '10-1-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: '10-1-2-oppg-2',
        number: '1.2.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv de periodiske desimaltallene som brøk.',
        subTasks: [
          { label: 'a', task: 'Skriv $0{,}\\overline{3}$ som brøk', solution: '$0{,}\\overline{3} = \\frac{1}{3}$', expressionAnswer: '1/3' },
          { label: 'b', task: 'Skriv $0{,}\\overline{45}$ som brøk', solution: '$0{,}\\overline{45} = \\frac{45}{99} = \\frac{5}{11}$', expressionAnswer: '5/11' },
          { label: 'c', task: 'Skriv $0{,}\\overline{18}$ som brøk', solution: '$0{,}\\overline{18} = \\frac{18}{99} = \\frac{2}{11}$', expressionAnswer: '2/11' },
          { label: 'd', task: 'Skriv $0{,}1\\overline{6}$ som brøk', solution: 'La $x = 0{,}1666...$. Da er $10x = 1{,}666...$ og $\\frac{10x - 1}{9} = \\frac{2}{3}$, så $x = \\frac{1}{6}$', expressionAnswer: '1/6' },
        ],
        solution: 'a) 1/3, b) 5/11, c) 2/11, d) 1/6',
        hints: ['Gang med 10 eller 100 for å flytte desimalkommaet', 'Trekk fra for å eliminere den periodiske delen'],
      },
    },
    {
      id: '10-1-2-eks-3',
      type: 'example',
      title: 'Eksempel 3: Addere og subtrahere brøker',
      problem: 'Regn ut:\na) $\\frac{2}{3} + \\frac{3}{4}$\nb) $\\frac{5}{6} - \\frac{1}{4}$',
      solution: 'a) Fellesnevner er 12:\n$\\frac{2}{3} + \\frac{3}{4} = \\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}$\n\nb) Fellesnevner er 12:\n$\\frac{5}{6} - \\frac{1}{4} = \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$',
    },
    {
      id: '10-1-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: '10-1-2-oppg-3',
        number: '1.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forkort svaret.',
        subTasks: [
          { label: 'a', task: 'Regn ut $\\frac{3}{5} + \\frac{1}{4}$', solution: '$\\frac{3}{5} + \\frac{1}{4} = \\frac{12}{20} + \\frac{5}{20} = \\frac{17}{20}$', expressionAnswer: '17/20' },
          { label: 'b', task: 'Regn ut $\\frac{7}{8} - \\frac{2}{3}$', solution: '$\\frac{7}{8} - \\frac{2}{3} = \\frac{21}{24} - \\frac{16}{24} = \\frac{5}{24}$', expressionAnswer: '5/24' },
          { label: 'c', task: 'Regn ut $\\frac{5}{6} + \\frac{7}{9}$', solution: '$\\frac{5}{6} + \\frac{7}{9} = \\frac{15}{18} + \\frac{14}{18} = \\frac{29}{18}$', expressionAnswer: '29/18' },
          { label: 'd', task: 'Regn ut $2\\frac{1}{3} - 1\\frac{3}{4}$', solution: '$2\\frac{1}{3} - 1\\frac{3}{4} = \\frac{7}{3} - \\frac{7}{4} = \\frac{28}{12} - \\frac{21}{12} = \\frac{7}{12}$', expressionAnswer: '7/12' },
        ],
        solution: 'a) 17/20, b) 5/24, c) 29/18, d) 7/12',
        hints: ['Finn fellesnevner først'],
      },
    },
    {
      id: '10-1-2-eks-4',
      type: 'example',
      title: 'Eksempel 4: Multiplisere og dividere brøker',
      problem: 'Regn ut:\na) $\\frac{3}{4} \\cdot \\frac{8}{9}$\nb) $\\frac{5}{6} : \\frac{2}{3}$',
      solution: 'a) $\\frac{3}{4} \\cdot \\frac{8}{9} = \\frac{3 \\cdot 8}{4 \\cdot 9} = \\frac{24}{36} = \\frac{2}{3}$\n\nb) $\\frac{5}{6} : \\frac{2}{3} = \\frac{5}{6} \\cdot \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4}$',
    },
    {
      id: '10-1-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: '10-1-2-oppg-4',
        number: '1.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut og forkort svaret.',
        subTasks: [
          { label: 'a', task: 'Regn ut $\\frac{5}{8} \\cdot \\frac{4}{15}$', solution: '$\\frac{5}{8} \\cdot \\frac{4}{15} = \\frac{20}{120} = \\frac{1}{6}$', expressionAnswer: '1/6' },
          { label: 'b', task: 'Regn ut $\\frac{9}{10} : \\frac{3}{5}$', solution: '$\\frac{9}{10} : \\frac{3}{5} = \\frac{9}{10} \\cdot \\frac{5}{3} = \\frac{45}{30} = \\frac{3}{2}$', expressionAnswer: '3/2' },
          { label: 'c', task: 'Regn ut $\\frac{2}{3} \\cdot \\frac{9}{4} \\cdot \\frac{2}{3}$', solution: '$\\frac{2}{3} \\cdot \\frac{9}{4} \\cdot \\frac{2}{3} = \\frac{36}{36} = 1$', answer: 1 },
          { label: 'd', task: 'Regn ut $\\frac{3}{4} : \\frac{9}{8}$', solution: '$\\frac{3}{4} : \\frac{9}{8} = \\frac{3}{4} \\cdot \\frac{8}{9} = \\frac{24}{36} = \\frac{2}{3}$', expressionAnswer: '2/3' },
        ],
        solution: 'a) 1/6, b) 3/2, c) 1, d) 2/3',
        hints: ['Ved divisjon: snu den andre brøken og gang', 'Forkort underveis for enklere regning'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_1_3: TextbookChapter = {
  id: '10-1-3',
  courseId: '10',
  chapterNumber: '1.3',
  title: 'Faktorisering og forenkling',
  description: 'Faktorisere algebraiske uttrykk og forenkle brøker.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar'],
  content: [
    {
      id: '10-1-3-text-1',
      type: 'text',
      content: 'Faktorisering er prosessen med å skrive et uttrykk som et produkt av faktorer. Dette er en viktig ferdighet for å løse likninger og forenkle algebraiske brøker.',
    },
    {
      id: '10-1-3-faktorisering-bilde',
      type: 'image',
      src: '/images/10-klasse/algebra-faktorisering.svg',
      alt: 'Illustrasjon av faktorisering av algebraiske uttrykk',
      caption: 'Faktorisering - å skrive uttrykk som produkt av faktorer',
    },
    {
      id: '10-1-3-def-1',
      type: 'definition',
      title: 'Faktorisering',
      content: 'Å **faktorisere** betyr å skrive et uttrykk som et produkt.\n\n**Felles faktor:** $ab + ac = a(b + c)$\n\n**Kvadratsetningene:**\n- $(a + b)^2 = a^2 + 2ab + b^2$\n- $(a - b)^2 = a^2 - 2ab + b^2$\n- $(a + b)(a - b) = a^2 - b^2$',
    },
    {
      id: '10-1-3-eks-1',
      type: 'example',
      title: 'Eksempel 1: Faktorisere med felles faktor',
      problem: 'Faktoriser:\na) $6x + 9$\nb) $4x^2 - 8x$\nc) $15x^2y + 10xy^2$',
      solution: 'a) $6x + 9 = 3(2x + 3)$\n\nb) $4x^2 - 8x = 4x(x - 2)$\n\nc) $15x^2y + 10xy^2 = 5xy(3x + 2y)$',
    },
    {
      id: '10-1-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: '10-1-3-oppg-1',
        number: '1.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser uttrykkene.',
        subTasks: [
          { label: 'a', task: 'Faktoriser $8x + 12$', solution: '$8x + 12 = 4(2x + 3)$', multipleChoiceOptions: ['$4(2x + 3)$', '$2(4x + 6)$', '$8(x + 3)$', '$4(2x - 3)$'] },
          { label: 'b', task: 'Faktoriser $6x^2 - 15x$', solution: '$6x^2 - 15x = 3x(2x - 5)$', multipleChoiceOptions: ['$3x(2x - 5)$', '$3(2x^2 - 5x)$', '$x(6x - 15)$', '$3x(2x + 5)$'] },
          { label: 'c', task: 'Faktoriser $12ab + 18a^2$', solution: '$12ab + 18a^2 = 6a(2b + 3a)$', multipleChoiceOptions: ['$6a(2b + 3a)$', '$2a(6b + 9a)$', '$6(2ab + 3a^2)$', '$6a(2b - 3a)$'] },
          { label: 'd', task: 'Faktoriser $20x^3 - 8x^2 + 4x$', solution: '$20x^3 - 8x^2 + 4x = 4x(5x^2 - 2x + 1)$', multipleChoiceOptions: ['$4x(5x^2 - 2x + 1)$', '$2x(10x^2 - 4x + 2)$', '$4(5x^3 - 2x^2 + x)$', '$4x(5x^2 + 2x + 1)$'] },
        ],
        solution: 'a) 4(2x+3), b) 3x(2x-5), c) 6a(2b+3a), d) 4x(5x²-2x+1)',
        hints: ['Finn den største felles faktoren for alle leddene'],
      },
    },
    {
      id: '10-1-3-eks-2',
      type: 'example',
      title: 'Eksempel 2: Faktorisere med kvadratsetningene',
      problem: 'Faktoriser:\na) $x^2 + 6x + 9$\nb) $x^2 - 10x + 25$\nc) $x^2 - 16$',
      solution: 'a) $x^2 + 6x + 9 = (x + 3)^2$ (første kvadratsetning)\n\nb) $x^2 - 10x + 25 = (x - 5)^2$ (andre kvadratsetning)\n\nc) $x^2 - 16 = (x + 4)(x - 4)$ (konjugatsetningen)',
    },
    {
      id: '10-1-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: '10-1-3-oppg-2',
        number: '1.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser ved hjelp av kvadratsetningene.',
        subTasks: [
          { label: 'a', task: 'Faktoriser $x^2 + 8x + 16$', solution: '$x^2 + 8x + 16 = (x + 4)^2$', multipleChoiceOptions: ['$(x + 4)^2$', '$(x + 8)(x + 2)$', '$(x - 4)^2$', '$(x + 4)(x - 4)$'] },
          { label: 'b', task: 'Faktoriser $x^2 - 14x + 49$', solution: '$x^2 - 14x + 49 = (x - 7)^2$', multipleChoiceOptions: ['$(x - 7)^2$', '$(x + 7)^2$', '$(x - 14)(x - 7)$', '$(x + 7)(x - 7)$'] },
          { label: 'c', task: 'Faktoriser $x^2 - 81$', solution: '$x^2 - 81 = (x + 9)(x - 9)$', multipleChoiceOptions: ['$(x + 9)(x - 9)$', '$(x - 9)^2$', '$(x + 9)^2$', '$(x - 81)(x + 1)$'] },
          { label: 'd', task: 'Faktoriser $4x^2 - 25$', solution: '$4x^2 - 25 = (2x + 5)(2x - 5)$', multipleChoiceOptions: ['$(2x + 5)(2x - 5)$', '$(4x + 5)(x - 5)$', '$(2x - 5)^2$', '$(2x + 5)^2$'] },
        ],
        solution: 'a) (x+4)², b) (x-7)², c) (x+9)(x-9), d) (2x+5)(2x-5)',
        hints: ['Sjekk om uttrykket passer med en av kvadratsetningene'],
      },
    },
    {
      id: '10-1-3-eks-3',
      type: 'example',
      title: 'Eksempel 3: Faktorisere andregradsuttrykk',
      problem: 'Faktoriser:\na) $x^2 + 5x + 6$\nb) $x^2 - 2x - 15$',
      solution: 'a) Vi søker tall som ganget gir 6 og summert gir 5: 2 og 3.\n$x^2 + 5x + 6 = (x + 2)(x + 3)$\n\nb) Vi søker tall som ganget gir -15 og summert gir -2: 3 og -5.\n$x^2 - 2x - 15 = (x + 3)(x - 5)$',
    },
    {
      id: '10-1-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: '10-1-3-oppg-3',
        number: '1.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktoriser andregradsuttrykkene.',
        subTasks: [
          { label: 'a', task: 'Faktoriser $x^2 + 7x + 12$', solution: '$x^2 + 7x + 12 = (x + 3)(x + 4)$', multipleChoiceOptions: ['$(x + 3)(x + 4)$', '$(x + 2)(x + 6)$', '$(x + 1)(x + 12)$', '$(x - 3)(x - 4)$'] },
          { label: 'b', task: 'Faktoriser $x^2 - x - 12$', solution: '$x^2 - x - 12 = (x + 3)(x - 4)$', multipleChoiceOptions: ['$(x + 3)(x - 4)$', '$(x - 3)(x + 4)$', '$(x + 2)(x - 6)$', '$(x - 2)(x + 6)$'] },
          { label: 'c', task: 'Faktoriser $x^2 + 2x - 35$', solution: '$x^2 + 2x - 35 = (x + 7)(x - 5)$', multipleChoiceOptions: ['$(x + 7)(x - 5)$', '$(x - 7)(x + 5)$', '$(x + 5)(x - 7)$', '$(x - 5)(x + 7)$'] },
          { label: 'd', task: 'Faktoriser $x^2 - 11x + 30$', solution: '$x^2 - 11x + 30 = (x - 5)(x - 6)$', multipleChoiceOptions: ['$(x - 5)(x - 6)$', '$(x + 5)(x + 6)$', '$(x - 3)(x - 10)$', '$(x - 2)(x - 15)$'] },
        ],
        solution: 'a) (x+3)(x+4), b) (x+3)(x-4), c) (x+7)(x-5), d) (x-5)(x-6)',
        hints: ['Finn to tall som ganget gir konstantleddet og summert gir koeffisienten foran x'],
      },
    },
    {
      id: '10-1-3-eks-4',
      type: 'example',
      title: 'Eksempel 4: Forenkle algebraiske brøker',
      problem: 'Forenkle:\na) $\\frac{x^2 - 9}{x + 3}$\nb) $\\frac{x^2 + 5x + 6}{x^2 - 4}$',
      solution: 'a) $\\frac{x^2 - 9}{x + 3} = \\frac{(x+3)(x-3)}{x + 3} = x - 3$\n\nb) $\\frac{x^2 + 5x + 6}{x^2 - 4} = \\frac{(x+2)(x+3)}{(x+2)(x-2)} = \\frac{x+3}{x-2}$',
    },
    {
      id: '10-1-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: '10-1-3-oppg-4',
        number: '1.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forenkle de algebraiske brøkene.',
        subTasks: [
          { label: 'a', task: 'Forenkle $\\frac{x^2 - 25}{x - 5}$', solution: '$\\frac{x^2 - 25}{x - 5} = \\frac{(x+5)(x-5)}{x - 5} = x + 5$', multipleChoiceOptions: ['$x + 5$', '$x - 5$', '$\\frac{x + 5}{x - 5}$', '$x^2 - 5$'] },
          { label: 'b', task: 'Forenkle $\\frac{x^2 + 6x + 9}{x^2 - 9}$', solution: '$\\frac{x^2 + 6x + 9}{x^2 - 9} = \\frac{(x+3)^2}{(x+3)(x-3)} = \\frac{x+3}{x-3}$', multipleChoiceOptions: ['$\\frac{x+3}{x-3}$', '$\\frac{x-3}{x+3}$', '$x + 3$', '$\\frac{(x+3)^2}{x-3}$'] },
          { label: 'c', task: 'Forenkle $\\frac{x^2 - 4x - 5}{x^2 - 1}$', solution: '$\\frac{x^2 - 4x - 5}{x^2 - 1} = \\frac{(x-5)(x+1)}{(x+1)(x-1)} = \\frac{x-5}{x-1}$', multipleChoiceOptions: ['$\\frac{x-5}{x-1}$', '$\\frac{x+5}{x+1}$', '$\\frac{x-5}{x+1}$', '$x - 5$'] },
          { label: 'd', task: 'Forenkle $\\frac{2x^2 - 8}{x^2 + 4x + 4}$', solution: '$\\frac{2x^2 - 8}{x^2 + 4x + 4} = \\frac{2(x^2-4)}{(x+2)^2} = \\frac{2(x+2)(x-2)}{(x+2)^2} = \\frac{2(x-2)}{x+2}$', multipleChoiceOptions: ['$\\frac{2(x-2)}{x+2}$', '$\\frac{2(x+2)}{x-2}$', '$\\frac{x-2}{x+2}$', '$2(x - 2)$'] },
        ],
        solution: 'a) x+5, b) (x+3)/(x-3), c) (x-5)/(x-1), d) 2(x-2)/(x+2)',
        hints: ['Faktoriser teller og nevner først', 'Forkort like faktorer'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_1_4: TextbookChapter = {
  id: '10-1-4',
  courseId: '10',
  chapterNumber: '1.4',
  title: 'Potenser med rasjonale eksponenter',
  description: 'Potenser med brøkeksponenter og sammenhengen med røtter.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar'],
  content: [
    {
      id: '10-1-4-text-1',
      type: 'text',
      content: 'Potenser med brøkeksponenter gir oss en elegant måte å skrive røtter på. Dette knytter sammen potensregning og rotutdragning.',
    },
    {
      id: '10-1-4-def-1',
      type: 'definition',
      title: 'Rasjonale eksponenter',
      content: 'En potens med brøkeksponent defineres slik:\n\n$$a^{\\frac{1}{n}} = \\sqrt[n]{a}$$\n\n$$a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$\n\nFor eksempel:\n- $8^{\\frac{1}{3}} = \\sqrt[3]{8} = 2$\n- $27^{\\frac{2}{3}} = (\\sqrt[3]{27})^2 = 3^2 = 9$',
    },
    {
      id: '10-1-4-eks-1',
      type: 'example',
      title: 'Eksempel 1: Skrive om mellom røtter og potenser',
      problem: 'Skriv om:\na) $\\sqrt{5}$ som potens\nb) $\\sqrt[3]{x^2}$ som potens\nc) $x^{\\frac{3}{4}}$ som rot',
      solution: 'a) $\\sqrt{5} = 5^{\\frac{1}{2}}$\n\nb) $\\sqrt[3]{x^2} = x^{\\frac{2}{3}}$\n\nc) $x^{\\frac{3}{4}} = \\sqrt[4]{x^3}$',
    },
    {
      id: '10-1-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: '10-1-4-oppg-1',
        number: '1.4.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om mellom røtter og potenser.',
        subTasks: [
          { label: 'a', task: 'Skriv $\\sqrt[3]{7}$ som potens', solution: '$\\sqrt[3]{7} = 7^{\\frac{1}{3}}$', multipleChoiceOptions: ['$7^{\\frac{1}{3}}$', '$7^3$', '$7^{\\frac{3}{1}}$', '$3^{\\frac{1}{7}}$'] },
          { label: 'b', task: 'Skriv $\\sqrt[4]{x^3}$ som potens', solution: '$\\sqrt[4]{x^3} = x^{\\frac{3}{4}}$', multipleChoiceOptions: ['$x^{\\frac{3}{4}}$', '$x^{\\frac{4}{3}}$', '$x^{12}$', '$x^{\\frac{1}{4}}$'] },
          { label: 'c', task: 'Skriv $a^{\\frac{2}{5}}$ med rottegn', solution: '$a^{\\frac{2}{5}} = \\sqrt[5]{a^2}$', multipleChoiceOptions: ['$\\sqrt[5]{a^2}$', '$\\sqrt[2]{a^5}$', '$\\sqrt{a^5}$', '$\\sqrt[5]{a}$'] },
          { label: 'd', task: 'Skriv $\\sqrt{x^3}$ som potens', solution: '$\\sqrt{x^3} = x^{\\frac{3}{2}}$', multipleChoiceOptions: ['$x^{\\frac{3}{2}}$', '$x^{\\frac{2}{3}}$', '$x^6$', '$x^{\\frac{1}{2}}$'] },
        ],
        solution: 'a) 7^(1/3), b) x^(3/4), c) ⁵√(a²), d) x^(3/2)',
        hints: ['Bruk sammenhengen: n-te rot = eksponent 1/n'],
      },
    },
    {
      id: '10-1-4-eks-2',
      type: 'example',
      title: 'Eksempel 2: Beregne potenser med brøkeksponent',
      problem: 'Regn ut uten kalkulator:\na) $16^{\\frac{1}{2}}$\nb) $8^{\\frac{2}{3}}$\nc) $81^{\\frac{3}{4}}$',
      solution: 'a) $16^{\\frac{1}{2}} = \\sqrt{16} = 4$\n\nb) $8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$\n\nc) $81^{\\frac{3}{4}} = (\\sqrt[4]{81})^3 = 3^3 = 27$',
    },
    {
      id: '10-1-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: '10-1-4-oppg-2',
        number: '1.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut uten kalkulator.',
        subTasks: [
          { label: 'a', task: 'Regn ut $25^{\\frac{1}{2}}$', solution: '$25^{\\frac{1}{2}} = \\sqrt{25} = 5$', answer: 5 },
          { label: 'b', task: 'Regn ut $27^{\\frac{1}{3}}$', solution: '$27^{\\frac{1}{3}} = \\sqrt[3]{27} = 3$', answer: 3 },
          { label: 'c', task: 'Regn ut $16^{\\frac{3}{4}}$', solution: '$16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$', answer: 8 },
          { label: 'd', task: 'Regn ut $32^{\\frac{2}{5}}$', solution: '$32^{\\frac{2}{5}} = (\\sqrt[5]{32})^2 = 2^2 = 4$', answer: 4 },
        ],
        solution: 'a) 5, b) 3, c) 8, d) 4',
        hints: ['Ta roten først, deretter potensen'],
      },
    },
    {
      id: '10-1-4-def-2',
      type: 'definition',
      title: 'Potensregler',
      content: 'Potensreglene gjelder også for rasjonale eksponenter:\n\n- $a^m \\cdot a^n = a^{m+n}$\n- $\\frac{a^m}{a^n} = a^{m-n}$\n- $(a^m)^n = a^{m \\cdot n}$\n- $(ab)^n = a^n \\cdot b^n$',
    },
    {
      id: '10-1-4-eks-3',
      type: 'example',
      title: 'Eksempel 3: Forenkle med potensregler',
      problem: 'Forenkle:\na) $x^{\\frac{1}{2}} \\cdot x^{\\frac{3}{2}}$\nb) $\\frac{a^{\\frac{5}{3}}}{a^{\\frac{2}{3}}}$\nc) $(x^{\\frac{2}{3}})^{\\frac{3}{4}}$',
      solution: 'a) $x^{\\frac{1}{2}} \\cdot x^{\\frac{3}{2}} = x^{\\frac{1}{2} + \\frac{3}{2}} = x^2$\n\nb) $\\frac{a^{\\frac{5}{3}}}{a^{\\frac{2}{3}}} = a^{\\frac{5}{3} - \\frac{2}{3}} = a^1 = a$\n\nc) $(x^{\\frac{2}{3}})^{\\frac{3}{4}} = x^{\\frac{2}{3} \\cdot \\frac{3}{4}} = x^{\\frac{1}{2}} = \\sqrt{x}$',
    },
    {
      id: '10-1-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: '10-1-4-oppg-3',
        number: '1.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forenkle uttrykkene.',
        subTasks: [
          { label: 'a', task: 'Forenkle $x^{\\frac{2}{3}} \\cdot x^{\\frac{1}{3}}$', solution: '$x^{\\frac{2}{3}} \\cdot x^{\\frac{1}{3}} = x^{\\frac{2}{3} + \\frac{1}{3}} = x^1 = x$', multipleChoiceOptions: ['$x$', '$x^{\\frac{2}{9}}$', '$x^2$', '$x^{\\frac{1}{3}}$'] },
          { label: 'b', task: 'Forenkle $\\frac{a^{\\frac{7}{4}}}{a^{\\frac{3}{4}}}$', solution: '$\\frac{a^{\\frac{7}{4}}}{a^{\\frac{3}{4}}} = a^{\\frac{7}{4} - \\frac{3}{4}} = a^1 = a$', multipleChoiceOptions: ['$a$', '$a^{\\frac{10}{4}}$', '$a^{\\frac{4}{4}}$', '$a^{\\frac{21}{16}}$'] },
          { label: 'c', task: 'Forenkle $(y^{\\frac{4}{5}})^{\\frac{5}{2}}$', solution: '$(y^{\\frac{4}{5}})^{\\frac{5}{2}} = y^{\\frac{4}{5} \\cdot \\frac{5}{2}} = y^2$', multipleChoiceOptions: ['$y^2$', '$y^{\\frac{9}{7}}$', '$y^{\\frac{20}{10}}$', '$y^{\\frac{8}{25}}$'] },
          { label: 'd', task: 'Forenkle $x^{\\frac{3}{4}} \\cdot x^{-\\frac{1}{4}}$', solution: '$x^{\\frac{3}{4}} \\cdot x^{-\\frac{1}{4}} = x^{\\frac{3}{4} - \\frac{1}{4}} = x^{\\frac{1}{2}} = \\sqrt{x}$', multipleChoiceOptions: ['$\\sqrt{x}$', '$x$', '$x^{-\\frac{2}{4}}$', '$x^{\\frac{4}{4}}$'] },
        ],
        solution: 'a) x, b) a, c) y², d) √x',
        hints: ['Bruk potensreglene: legg sammen eksponenter ved multiplikasjon'],
      },
    },
    {
      id: '10-1-4-eks-4',
      type: 'example',
      title: 'Eksempel 4: Negative eksponenter',
      problem: 'Regn ut:\na) $4^{-\\frac{1}{2}}$\nb) $27^{-\\frac{2}{3}}$',
      solution: 'a) $4^{-\\frac{1}{2}} = \\frac{1}{4^{\\frac{1}{2}}} = \\frac{1}{\\sqrt{4}} = \\frac{1}{2}$\n\nb) $27^{-\\frac{2}{3}} = \\frac{1}{27^{\\frac{2}{3}}} = \\frac{1}{(\\sqrt[3]{27})^2} = \\frac{1}{3^2} = \\frac{1}{9}$',
    },
    {
      id: '10-1-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: '10-1-4-oppg-4',
        number: '1.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regn ut uten kalkulator.',
        subTasks: [
          { label: 'a', task: 'Regn ut $9^{-\\frac{1}{2}}$', solution: '$9^{-\\frac{1}{2}} = \\frac{1}{\\sqrt{9}} = \\frac{1}{3}$', expressionAnswer: '1/3' },
          { label: 'b', task: 'Regn ut $8^{-\\frac{1}{3}}$', solution: '$8^{-\\frac{1}{3}} = \\frac{1}{\\sqrt[3]{8}} = \\frac{1}{2}$', expressionAnswer: '1/2' },
          { label: 'c', task: 'Regn ut $16^{-\\frac{3}{4}}$', solution: '$16^{-\\frac{3}{4}} = \\frac{1}{16^{\\frac{3}{4}}} = \\frac{1}{8}$', expressionAnswer: '1/8' },
          { label: 'd', task: 'Regn ut $\\left(\\frac{1}{4}\\right)^{-\\frac{1}{2}}$', solution: '$\\left(\\frac{1}{4}\\right)^{-\\frac{1}{2}} = 4^{\\frac{1}{2}} = 2$', answer: 2 },
        ],
        solution: 'a) 1/3, b) 1/2, c) 1/8, d) 2',
        hints: ['Negativ eksponent betyr invers: a^(-n) = 1/a^n'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_2_1: TextbookChapter = {
  id: '10-2-1',
  courseId: '10',
  chapterNumber: '2.1',
  title: 'Førstegradslikninger',
  description: 'Løse førstegradslikninger med ulike metoder.',
  estimatedMinutes: 45,
  competenceGoals: ['loyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend'],
  content: [
    {
      id: '10-2-1-text-1',
      type: 'text',
      content: 'Førstegradslikninger er likninger der den ukjente variabelen opptrer i første potens. Vi skal se på ulike teknikker for aa løse slike likninger.',
    },
    {
      id: '10-2-1-def-1',
      type: 'definition',
      title: 'Førstegradslikning',
      content: 'En **førstegradslikning** kan alltid skrives på formen $ax + b = 0$ der $a \\neq 0$.\n\n**Løsning:** $x = -\\frac{b}{a}$\n\nNår vi løser likninger, bruker vi prinsippet om at vi kan gjøre det samme på begge sider av likhetstegnet.',
    },
    {
      id: '10-2-1-ex-1',
      type: 'example',
      title: 'Eksempel 1: Enkle førstegradslikninger',
      problem: 'Løs likningene:\na) $3x + 7 = 22$\nb) $5x - 12 = 2x + 9$',
      solution: 'a)\n$3x + 7 = 22$\n$3x = 22 - 7$\n$3x = 15$\n$x = 5$\n\nb)\n$5x - 12 = 2x + 9$\n$5x - 2x = 9 + 12$\n$3x = 21$\n$x = 7$',
    },
    {
      id: '10-2-1-oppg-1',
      type: 'exercise',
      exercise: {
        id: '10-2-1-oppg-1',
        number: '2.1.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene.',
        subTasks: [
          { label: 'a', task: 'Løs $4x - 5 = 19$', solution: '$4x = 24 \\Rightarrow x = 6$', answer: 6 },
          { label: 'b', task: 'Løs $7x + 3 = 2x + 28$', solution: '$5x = 25 \\Rightarrow x = 5$', answer: 5 },
          { label: 'c', task: 'Løs $3(x + 4) = 27$', solution: '$3x + 12 = 27 \\Rightarrow 3x = 15 \\Rightarrow x = 5$', answer: 5 },
          { label: 'd', task: 'Løs $2(3x - 1) = 4(x + 2)$', solution: '$6x - 2 = 4x + 8 \\Rightarrow 2x = 10 \\Rightarrow x = 5$', answer: 5 },
        ],
        solution: 'a) x = 6, b) x = 5, c) x = 5, d) x = 5',
        hints: ['Samle x-leddene på en side og tallene på den andre'],
      },
    },
    {
      id: '10-2-1-ex-2',
      type: 'example',
      title: 'Eksempel 2: Likninger med brøk',
      problem: 'Løs likningene:\na) $\\frac{x}{3} + 2 = 5$\nb) $\\frac{2x-1}{4} = \\frac{x+3}{2}$',
      solution: 'a)\n$\\frac{x}{3} + 2 = 5$\n$\\frac{x}{3} = 3$\n$x = 9$\n\nb) Ganger med fellesnevner 4:\n$2x - 1 = 2(x + 3)$\n$2x - 1 = 2x + 6$\n$-1 = 6$ (ingen løsning)',
    },
    {
      id: '10-2-1-oppg-2',
      type: 'exercise',
      exercise: {
        id: '10-2-1-oppg-2',
        number: '2.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene.',
        subTasks: [
          { label: 'a', task: 'Løs $\\frac{x}{4} - 3 = 2$', solution: '$\\frac{x}{4} = 5 \\Rightarrow x = 20$', answer: 20 },
          { label: 'b', task: 'Løs $\\frac{2x + 1}{3} = 5$', solution: '$2x + 1 = 15 \\Rightarrow 2x = 14 \\Rightarrow x = 7$', answer: 7 },
          { label: 'c', task: 'Løs $\\frac{x-2}{3} = \\frac{x+4}{5}$', solution: '$5(x-2) = 3(x+4) \\Rightarrow 5x - 10 = 3x + 12 \\Rightarrow 2x = 22 \\Rightarrow x = 11$', answer: 11 },
          { label: 'd', task: 'Løs $\\frac{3x}{2} - \\frac{x}{4} = 5$', solution: '$\\frac{6x - x}{4} = 5 \\Rightarrow 5x = 20 \\Rightarrow x = 4$', answer: 4 },
        ],
        solution: 'a) x = 20, b) x = 7, c) x = 11, d) x = 4',
        hints: ['Gang med fellesnevneren for aa fjerne brøkene'],
      },
    },
    {
      id: '10-2-1-ex-3',
      type: 'example',
      title: 'Eksempel 3: Likninger med parenteser',
      problem: 'Løs likningen:\n$3(2x - 4) - 2(x + 1) = 4x + 6$',
      solution: '$6x - 12 - 2x - 2 = 4x + 6$\n$4x - 14 = 4x + 6$\n$-14 = 6$\n\nDette er en selvmotsigelse, så likningen har ingen løsning.',
    },
    {
      id: '10-2-1-oppg-3',
      type: 'exercise',
      exercise: {
        id: '10-2-1-oppg-3',
        number: '2.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene.',
        subTasks: [
          { label: 'a', task: 'Løs $5(x - 2) + 3(x + 4) = 34$', solution: '$5x - 10 + 3x + 12 = 34 \\Rightarrow 8x + 2 = 34 \\Rightarrow 8x = 32 \\Rightarrow x = 4$', answer: 4 },
          { label: 'b', task: 'Løs $4(2x - 3) = 2(4x + 1) - 14$', solution: '$8x - 12 = 8x + 2 - 14 \\Rightarrow 8x - 12 = 8x - 12$. Alle $x$ er løsninger.', multipleChoiceOptions: ['Alle $x$ er løsninger', '$x = 0$', '$x = 1$', 'Ingen løsning'] },
          { label: 'c', task: 'Løs $2(x + 5) - 3(x - 2) = 20$', solution: '$2x + 10 - 3x + 6 = 20 \\Rightarrow -x + 16 = 20 \\Rightarrow x = -4$', answer: -4 },
          { label: 'd', task: 'Løs $\\frac{2(x-1)}{3} + \\frac{x+2}{2} = 4$', solution: 'Fellesnevner 6: $\\frac{4(x-1) + 3(x+2)}{6} = 4 \\Rightarrow 4x - 4 + 3x + 6 = 24 \\Rightarrow 7x = 22 \\Rightarrow x = \\frac{22}{7}$', expressionAnswer: '22/7' },
        ],
        solution: 'a) x = 4, b) Alle x, c) x = -4, d) x = 22/7',
        hints: ['Løs opp parentesene først, deretter samle leddene'],
      },
    },
    {
      id: '10-2-1-ex-4',
      type: 'example',
      title: 'Eksempel 4: Praktisk problem',
      problem: 'En rektangulaer hage har omkrets 56 meter. Lengden er 4 meter mer enn bredden. Finn dimensjonene.',
      solution: 'La bredden være $x$ meter. Da er lengden $(x + 4)$ meter.\n\nOmkrets: $2x + 2(x + 4) = 56$\n$2x + 2x + 8 = 56$\n$4x = 48$\n$x = 12$\n\nBredden er 12 m og lengden er 16 m.',
    },
    {
      id: '10-2-1-oppg-4',
      type: 'exercise',
      exercise: {
        id: '10-2-1-oppg-4',
        number: '2.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett opp likning og loes problemene.',
        subTasks: [
          { label: 'a', task: 'Summen av tre påfoelgende tall er 72. Finn tallene.', solution: 'La det første tallet være $x$. Da er $x + (x+1) + (x+2) = 72 \\Rightarrow 3x + 3 = 72 \\Rightarrow x = 23$. Tallene er 23, 24 og 25.', multipleChoiceOptions: ['23, 24, 25', '22, 23, 27', '24, 24, 24', '20, 24, 28'] },
          { label: 'b', task: 'En trekant har omkrets 45 cm. Den ene siden er dobbelt så lang som den korteste, og den tredje er 5 cm kortere enn den lengste. Finn sidene.', solution: 'La korteste side være $x$. Da er $x + 2x + (2x-5) = 45 \\Rightarrow 5x = 50 \\Rightarrow x = 10$. Sidene er 10, 20 og 15 cm.', multipleChoiceOptions: ['10, 15, 20 cm', '9, 18, 18 cm', '8, 16, 21 cm', '12, 18, 15 cm'] },
          { label: 'c', task: 'Per er 3 ganger så gammel som Kari. Om 10 år vil Per være dobbelt så gammel som Kari. Hvor gamle er de naa?', solution: 'La Kari være $x$ år. Per er $3x$. Om 10 aar: $3x + 10 = 2(x + 10) \\Rightarrow 3x + 10 = 2x + 20 \\Rightarrow x = 10$. Kari er 10 og Per er 30 år.', multipleChoiceOptions: ['Kari 10, Per 30', 'Kari 15, Per 45', 'Kari 8, Per 24', 'Kari 12, Per 36'] },
        ],
        solution: 'a) 23, 24, 25, b) 10, 20, 15 cm, c) Kari 10, Per 30 aar',
        hints: ['Definer den ukjente med en variabel', 'Oversett problemet til en likning'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_2_2: TextbookChapter = {
  id: '10-2-2',
  courseId: '10',
  chapterNumber: '2.2',
  title: 'Andregradslikninger',
  description: 'Løse andregradslikninger med faktorisering og abc-formelen.',
  estimatedMinutes: 60,
  competenceGoals: ['loyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend'],
  content: [
    {
      id: '10-2-2-text-1',
      type: 'text',
      content: 'Andregradslikninger er likninger der den ukjente variabelen opptrer i andre potens. De kan løses ved faktorisering eller ved hjelp av abc-formelen.',
    },
    {
      id: '10-2-2-def-1',
      type: 'definition',
      title: 'Andregradslikning',
      content: 'En **andregradslikning** har formen $ax^2 + bx + c = 0$ der $a \\neq 0$.\n\n**abc-formelen:**\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\n**Diskriminanten** $D = b^2 - 4ac$ forteller oss:\n- $D > 0$: To ulike løsninger\n- $D = 0$: En løsning (dobbeltrot)\n- $D < 0$: Ingen reelle løsninger',
    },
    {
      id: '10-2-2-ex-1',
      type: 'example',
      title: 'Eksempel 1: Løse ved faktorisering',
      problem: 'Løs likningene:\na) $x^2 - 5x + 6 = 0$\nb) $x^2 - 9 = 0$',
      solution: 'a) $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$\n$x = 2$ eller $x = 3$\n\nb) $x^2 - 9 = (x + 3)(x - 3) = 0$\n$x = -3$ eller $x = 3$',
    },
    {
      id: '10-2-2-oppg-1',
      type: 'exercise',
      exercise: {
        id: '10-2-2-oppg-1',
        number: '2.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene ved faktorisering.',
        subTasks: [
          { label: 'a', task: 'Løs $x^2 + 7x + 12 = 0$', solution: '$(x + 3)(x + 4) = 0 \\Rightarrow x = -3$ eller $x = -4$', multipleChoiceOptions: ['$x = -3$ eller $x = -4$', '$x = 3$ eller $x = 4$', '$x = -2$ eller $x = -6$', '$x = 1$ eller $x = 12$'] },
          { label: 'b', task: 'Løs $x^2 - x - 20 = 0$', solution: '$(x - 5)(x + 4) = 0 \\Rightarrow x = 5$ eller $x = -4$', multipleChoiceOptions: ['$x = 5$ eller $x = -4$', '$x = -5$ eller $x = 4$', '$x = 4$ eller $x = -5$', '$x = 10$ eller $x = -2$'] },
          { label: 'c', task: 'Løs $x^2 - 16 = 0$', solution: '$(x + 4)(x - 4) = 0 \\Rightarrow x = -4$ eller $x = 4$', multipleChoiceOptions: ['$x = 4$ eller $x = -4$', '$x = 8$ eller $x = -2$', '$x = 16$', 'Ingen løsning'] },
          { label: 'd', task: 'Løs $x^2 + 6x + 9 = 0$', solution: '$(x + 3)^2 = 0 \\Rightarrow x = -3$ (dobbeltrot)', multipleChoiceOptions: ['$x = -3$', '$x = 3$', '$x = 3$ eller $x = -3$', 'Ingen løsning'] },
        ],
        solution: 'a) x = -3 eller x = -4, b) x = 5 eller x = -4, c) x = +/-4, d) x = -3',
        hints: ['Finn to tall som ganget gir konstantleddet og summert gir koeffisienten foran x'],
      },
    },
    {
      id: '10-2-2-ex-2',
      type: 'example',
      title: 'Eksempel 2: Bruke abc-formelen',
      problem: 'Løs likningen $2x^2 - 5x - 3 = 0$',
      solution: '$a = 2$, $b = -5$, $c = -3$\n\n$x = \\frac{-(-5) \\pm \\sqrt{(-5)^2 - 4 \\cdot 2 \\cdot (-3)}}{2 \\cdot 2}$\n\n$x = \\frac{5 \\pm \\sqrt{25 + 24}}{4} = \\frac{5 \\pm \\sqrt{49}}{4} = \\frac{5 \\pm 7}{4}$\n\n$x_1 = \\frac{5 + 7}{4} = 3$ eller $x_2 = \\frac{5 - 7}{4} = -\\frac{1}{2}$',
    },
    {
      id: '10-2-2-oppg-2',
      type: 'exercise',
      exercise: {
        id: '10-2-2-oppg-2',
        number: '2.2.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Bruk abc-formelen til aa løse likningene.',
        subTasks: [
          { label: 'a', task: 'Løs $x^2 + 4x - 5 = 0$', solution: '$x = \\frac{-4 \\pm \\sqrt{16 + 20}}{2} = \\frac{-4 \\pm 6}{2}$. $x = 1$ eller $x = -5$', multipleChoiceOptions: ['$x = 1$ eller $x = -5$', '$x = -1$ eller $x = 5$', '$x = 2$ eller $x = -2.5$', '$x = 5$'] },
          { label: 'b', task: 'Løs $2x^2 + 3x - 2 = 0$', solution: '$x = \\frac{-3 \\pm \\sqrt{9 + 16}}{4} = \\frac{-3 \\pm 5}{4}$. $x = \\frac{1}{2}$ eller $x = -2$', multipleChoiceOptions: ['$x = \\frac{1}{2}$ eller $x = -2$', '$x = -\\frac{1}{2}$ eller $x = 2$', '$x = 1$ eller $x = -1$', '$x = 2$ eller $x = -\\frac{1}{2}$'] },
          { label: 'c', task: 'Løs $x^2 - 6x + 9 = 0$', solution: '$x = \\frac{6 \\pm \\sqrt{36 - 36}}{2} = \\frac{6 \\pm 0}{2} = 3$ (dobbeltrot)', multipleChoiceOptions: ['$x = 3$', '$x = 3$ eller $x = -3$', '$x = 9$', 'Ingen løsning'] },
          { label: 'd', task: 'Løs $3x^2 - x - 4 = 0$', solution: '$x = \\frac{1 \\pm \\sqrt{1 + 48}}{6} = \\frac{1 \\pm 7}{6}$. $x = \\frac{4}{3}$ eller $x = -1$', multipleChoiceOptions: ['$x = \\frac{4}{3}$ eller $x = -1$', '$x = -\\frac{4}{3}$ eller $x = 1$', '$x = \\frac{1}{3}$ eller $x = -4$', '$x = 4$ eller $x = -\\frac{1}{3}$'] },
        ],
        solution: 'a) x = 1 eller x = -5, b) x = 1/2 eller x = -2, c) x = 3, d) x = 4/3 eller x = -1',
        hints: ['Identifiser a, b og c foerst', 'Beregn diskriminanten: D = b^2 - 4ac'],
      },
    },
    {
      id: '10-2-2-ex-3',
      type: 'example',
      title: 'Eksempel 3: Nullpunkter til andregradsfunksjoner',
      problem: 'Finn nullpunktene til $f(x) = x^2 - 2x - 8$.',
      solution: 'Setter $f(x) = 0$:\n$x^2 - 2x - 8 = 0$\n\nVed faktorisering: $(x - 4)(x + 2) = 0$\n\n$x = 4$ eller $x = -2$\n\nNullpunktene er $(-2, 0)$ og $(4, 0)$.',
    },
    {
      id: '10-2-2-oppg-3',
      type: 'exercise',
      exercise: {
        id: '10-2-2-oppg-3',
        number: '2.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nullpunktene til funksjonene.',
        subTasks: [
          { label: 'a', task: 'Finn nullpunktene til $f(x) = x^2 - 4x - 12$', solution: '$x^2 - 4x - 12 = (x-6)(x+2) = 0$. Nullpunkter: $(-2, 0)$ og $(6, 0)$', multipleChoiceOptions: ['$x = -2$ og $x = 6$', '$x = 2$ og $x = -6$', '$x = 3$ og $x = -4$', '$x = 4$ og $x = -3$'] },
          { label: 'b', task: 'Finn nullpunktene til $g(x) = x^2 + 2x - 15$', solution: '$x^2 + 2x - 15 = (x+5)(x-3) = 0$. Nullpunkter: $(-5, 0)$ og $(3, 0)$', multipleChoiceOptions: ['$x = -5$ og $x = 3$', '$x = 5$ og $x = -3$', '$x = -3$ og $x = 5$', '$x = 15$ og $x = -1$'] },
          { label: 'c', task: 'Finn nullpunktene til $h(x) = 2x^2 - 8x$', solution: '$2x^2 - 8x = 2x(x-4) = 0$. Nullpunkter: $(0, 0)$ og $(4, 0)$', multipleChoiceOptions: ['$x = 0$ og $x = 4$', '$x = 2$ og $x = 4$', '$x = 0$ og $x = 8$', '$x = -4$ og $x = 0$'] },
          { label: 'd', task: 'Finn nullpunktene til $p(x) = x^2 - 6x + 9$', solution: '$x^2 - 6x + 9 = (x-3)^2 = 0$. Nullpunkt: $(3, 0)$ (tangerer x-aksen)', multipleChoiceOptions: ['$x = 3$', '$x = -3$ og $x = 3$', '$x = 9$', 'Ingen nullpunkter'] },
        ],
        solution: 'a) x = -2, 6, b) x = -5, 3, c) x = 0, 4, d) x = 3',
        hints: ['Nullpunkt betyr at f(x) = 0'],
      },
    },
    {
      id: '10-2-2-ex-4',
      type: 'example',
      title: 'Eksempel 4: Praktiske problemer',
      problem: 'Et rektangel har areal 48 cm^2. Lengden er 2 cm mer enn bredden. Finn sidene.',
      solution: 'La bredden være $x$ cm. Da er lengden $(x + 2)$ cm.\n\nAreal: $x(x + 2) = 48$\n$x^2 + 2x - 48 = 0$\n$(x + 8)(x - 6) = 0$\n\n$x = 6$ (vi forkaster $x = -8$)\n\nBredden er 6 cm og lengden er 8 cm.',
    },
    {
      id: '10-2-2-oppg-4',
      type: 'exercise',
      exercise: {
        id: '10-2-2-oppg-4',
        number: '2.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett opp andregradslikning og loes.',
        subTasks: [
          { label: 'a', task: 'Produktet av to påfoelgende positive tall er 72. Finn tallene.', solution: '$x(x+1) = 72 \\Rightarrow x^2 + x - 72 = 0 \\Rightarrow (x+9)(x-8) = 0$. $x = 8$. Tallene er 8 og 9.', multipleChoiceOptions: ['8 og 9', '6 og 12', '7 og 10', '9 og 8'] },
          { label: 'b', task: 'En rettvinklet trekant har kateter der den ene er 7 cm lengre enn den andre. Hypotenusen er 13 cm. Finn katetene.', solution: 'La korteste katet være $x$. $x^2 + (x+7)^2 = 13^2 \\Rightarrow 2x^2 + 14x - 120 = 0 \\Rightarrow x = 5$. Katetene er 5 og 12 cm.', multipleChoiceOptions: ['5 cm og 12 cm', '6 cm og 13 cm', '4 cm og 11 cm', '3 cm og 10 cm'] },
          { label: 'c', task: 'Et kvadratisk område skal utvides med 3 m på hver side. Det nye arealet blir 121 m^2. Finn den opprinnelige sidelengden.', solution: 'La opprinnelig side være $x$. $(x+3)^2 = 121 \\Rightarrow x + 3 = 11 \\Rightarrow x = 8$ m.', answer: 8 },
        ],
        solution: 'a) 8 og 9, b) 5 cm og 12 cm, c) 8 m',
        hints: ['Definer den ukjente med en variabel', 'Sett opp en likning basert på problemet'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_2_3: TextbookChapter = {
  id: '10-2-3',
  courseId: '10',
  chapterNumber: '2.3',
  title: 'Likningssett',
  description: 'Løse likningssett med to ukjente grafisk og algebraisk.',
  estimatedMinutes: 55,
  competenceGoals: ['loyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend'],
  content: [
    {
      id: '10-2-3-text-1',
      type: 'text',
      content: 'Et likningssett er to eller flere likninger som skal løses samtidig. Vi skal lære to metoder: innsettingsmetoden og addisjonsmetoden.',
    },
    {
      id: '10-2-3-likningssett-bilde',
      type: 'image',
      src: '/images/10-klasse/likningssett-grafisk.svg',
      alt: 'Grafisk fremstilling av likningssett med to linjer som krysser',
      caption: 'Grafisk losning av likningssett - skjaeringspunktet er losningen',
    },
    {
      id: '10-2-3-def-1',
      type: 'definition',
      title: 'Likningssett',
      content: 'Et **likningssett** med to ukjente har formen:\n$$\\begin{cases} ax + by = e \\\\ cx + dy = f \\end{cases}$$\n\nLøsningen er verdiene for $x$ og $y$ som tilfredsstiller begge likningene samtidig.\n\n**Grafisk tolkning:** Løsningen er skjaeringspunktet mellom de to linjene.',
    },
    {
      id: '10-2-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Innsettingsmetoden',
      problem: 'Løs likningssettet:\n$$\\begin{cases} y = 2x + 1 \\\\ 3x + y = 11 \\end{cases}$$',
      solution: 'Setter inn uttrykket for $y$ fra første likning i andre:\n$3x + (2x + 1) = 11$\n$5x + 1 = 11$\n$5x = 10$\n$x = 2$\n\nFinner $y$: $y = 2 \\cdot 2 + 1 = 5$\n\nLøsning: $(x, y) = (2, 5)$',
    },
    {
      id: '10-2-3-oppg-1',
      type: 'exercise',
      exercise: {
        id: '10-2-3-oppg-1',
        number: '2.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningssettene med innsettingsmetoden.',
        subTasks: [
          { label: 'a', task: 'Løs: $y = x + 3$ og $2x + y = 12$', solution: '$2x + (x+3) = 12 \\Rightarrow 3x = 9 \\Rightarrow x = 3$, $y = 6$', multipleChoiceOptions: ['$(3, 6)$', '$(6, 3)$', '$(4, 7)$', '$(2, 5)$'] },
          { label: 'b', task: 'Løs: $x = 3y - 2$ og $2x + y = 10$', solution: '$2(3y-2) + y = 10 \\Rightarrow 7y = 14 \\Rightarrow y = 2$, $x = 4$', multipleChoiceOptions: ['$(4, 2)$', '$(2, 4)$', '$(3, 2)$', '$(5, 1)$'] },
          { label: 'c', task: 'Løs: $y = 2x - 5$ og $3x - y = 8$', solution: '$3x - (2x-5) = 8 \\Rightarrow x + 5 = 8 \\Rightarrow x = 3$, $y = 1$', multipleChoiceOptions: ['$(3, 1)$', '$(1, 3)$', '$(4, 3)$', '$(2, -1)$'] },
          { label: 'd', task: 'Løs: $x + y = 7$ og $x - y = 1$', solution: 'Fra første: $x = 7 - y$. Inn i andre: $(7-y) - y = 1 \\Rightarrow 7 - 2y = 1 \\Rightarrow y = 3$, $x = 4$', multipleChoiceOptions: ['$(4, 3)$', '$(3, 4)$', '$(5, 2)$', '$(6, 1)$'] },
        ],
        solution: 'a) (3, 6), b) (4, 2), c) (3, 1), d) (4, 3)',
        hints: ['Løs en likning for en variabel og sett inn i den andre'],
      },
    },
    {
      id: '10-2-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Addisjonsmetoden',
      problem: 'Løs likningssettet:\n$$\\begin{cases} 2x + 3y = 13 \\\\ 4x - 3y = 5 \\end{cases}$$',
      solution: 'Legger sammen likningene (y-leddene elimineres):\n$2x + 3y + 4x - 3y = 13 + 5$\n$6x = 18$\n$x = 3$\n\nSetter inn i første likning:\n$2 \\cdot 3 + 3y = 13$\n$3y = 7$\n$y = \\frac{7}{3}$\n\nLøsning: $(x, y) = (3, \\frac{7}{3})$',
    },
    {
      id: '10-2-3-oppg-2',
      type: 'exercise',
      exercise: {
        id: '10-2-3-oppg-2',
        number: '2.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningssettene med addisjonsmetoden.',
        subTasks: [
          { label: 'a', task: 'Løs: $x + y = 10$ og $x - y = 4$', solution: 'Legger sammen: $2x = 14 \\Rightarrow x = 7$, $y = 3$', multipleChoiceOptions: ['$(7, 3)$', '$(3, 7)$', '$(5, 5)$', '$(8, 2)$'] },
          { label: 'b', task: 'Løs: $3x + 2y = 12$ og $3x - 2y = 0$', solution: 'Legger sammen: $6x = 12 \\Rightarrow x = 2$. Trekker fra: $4y = 12 \\Rightarrow y = 3$', multipleChoiceOptions: ['$(2, 3)$', '$(3, 2)$', '$(4, 0)$', '$(1, 4)$'] },
          { label: 'c', task: 'Løs: $2x + 5y = 21$ og $3x - 5y = 4$', solution: 'Legger sammen: $5x = 25 \\Rightarrow x = 5$, $y = \\frac{11}{5}$', multipleChoiceOptions: ['$(5, \\frac{11}{5})$', '$(4, \\frac{13}{5})$', '$(3, 3)$', '$(6, \\frac{9}{5})$'] },
          { label: 'd', task: 'Løs: $4x + 3y = 11$ og $2x + 3y = 7$', solution: 'Trekker fra: $2x = 4 \\Rightarrow x = 2$, $y = 1$', multipleChoiceOptions: ['$(2, 1)$', '$(1, 2)$', '$(3, \\frac{1}{3})$', '$(1, 3)$'] },
        ],
        solution: 'a) (7, 3), b) (2, 3), c) (5, 11/5), d) (2, 1)',
        hints: ['Legg sammen eller trekk fra likningene for aa eliminere en variabel'],
      },
    },
    {
      id: '10-2-3-ex-3',
      type: 'example',
      title: 'Eksempel 3: Justere koeffisienter',
      problem: 'Løs likningssettet:\n$$\\begin{cases} 2x + 3y = 8 \\\\ 5x + 2y = 9 \\end{cases}$$',
      solution: 'Ganger første likning med 2 og andre med 3:\n$$\\begin{cases} 4x + 6y = 16 \\\\ 15x + 6y = 27 \\end{cases}$$\n\nTrekker fra: $-11x = -11 \\Rightarrow x = 1$\n\nSetter inn: $2 \\cdot 1 + 3y = 8 \\Rightarrow y = 2$\n\nLøsning: $(x, y) = (1, 2)$',
    },
    {
      id: '10-2-3-oppg-3',
      type: 'exercise',
      exercise: {
        id: '10-2-3-oppg-3',
        number: '2.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs likningssettene.',
        subTasks: [
          { label: 'a', task: 'Løs: $3x + 4y = 18$ og $2x + 3y = 13$', solution: 'Gang første med 3 og andre med 4: $9x + 12y = 54$ og $8x + 12y = 52$. Trekk fra: $x = 2$, $y = 3$', multipleChoiceOptions: ['$(2, 3)$', '$(3, 2)$', '$(1, 4)$', '$(4, 1)$'] },
          { label: 'b', task: 'Løs: $5x - 2y = 11$ og $3x + 4y = 24$', solution: 'Gang første med 2: $10x - 4y = 22$. Legg til andre: $13x = 46 \\Rightarrow x = \\frac{46}{13}$, $y = \\frac{87}{26}$', multipleChoiceOptions: ['$(\\frac{46}{13}, \\frac{87}{26})$', '$(3, 4)$', '$(4, 3)$', '$(\\frac{11}{5}, \\frac{87}{26})$'] },
          { label: 'c', task: 'Løs: $\\frac{x}{2} + \\frac{y}{3} = 4$ og $\\frac{x}{3} + \\frac{y}{2} = 5$', solution: 'Gang første med 6: $3x + 2y = 24$. Gang andre med 6: $2x + 3y = 30$. Løs: $x = \\frac{12}{5}$, $y = \\frac{42}{5}$', multipleChoiceOptions: ['$(\\frac{12}{5}, \\frac{42}{5})$', '$(4, 6)$', '$(3, 5)$', '$(\\frac{42}{5}, \\frac{12}{5})$'] },
        ],
        solution: 'a) (2, 3), b) (46/13, 87/26), c) (12/5, 42/5)',
        hints: ['Gang likningene med passende tall for aa faa like koeffisienter'],
      },
    },
    {
      id: '10-2-3-ex-4',
      type: 'example',
      title: 'Eksempel 4: Praktisk problem',
      problem: 'En billettautomat tok inn 1800 kr fra 24 billetter. Voksenbilletter koster 100 kr og barnebilletter 50 kr. Hvor mange av hver?',
      solution: 'La $x$ = antall voksenbilletter, $y$ = antall barnebilletter.\n\n$$\\begin{cases} x + y = 24 \\\\ 100x + 50y = 1800 \\end{cases}$$\n\nFra første: $y = 24 - x$\n\n$100x + 50(24 - x) = 1800$\n$100x + 1200 - 50x = 1800$\n$50x = 600$\n$x = 12$, $y = 12$\n\n12 voksenbilletter og 12 barnebilletter.',
    },
    {
      id: '10-2-3-oppg-4',
      type: 'exercise',
      exercise: {
        id: '10-2-3-oppg-4',
        number: '2.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sett opp likningssett og loes.',
        subTasks: [
          { label: 'a', task: 'Summen av to tall er 25 og differansen er 7. Finn tallene.', solution: '$x + y = 25$ og $x - y = 7$. Legger sammen: $2x = 32 \\Rightarrow x = 16$, $y = 9$', multipleChoiceOptions: ['16 og 9', '14 og 11', '18 og 7', '20 og 5'] },
          { label: 'b', task: 'En kiosk solgte 45 is og brus til sammen. Is koster 30 kr og brus 20 kr. Totalt ble det solgt for 1150 kr. Hvor mange av hver?', solution: '$x + y = 45$ og $30x + 20y = 1150$. Løsning: $x = 25$ is og $y = 20$ brus', multipleChoiceOptions: ['25 is og 20 brus', '20 is og 25 brus', '30 is og 15 brus', '22 is og 23 brus'] },
          { label: 'c', task: 'Per er dobbelt så gammel som Kari. Om 10 år vil summen av aldrene være 55. Hvor gamle er de naa?', solution: '$x = 2y$ og $(x+10) + (y+10) = 55$. Løsning: Per er 30 og Kari er 15 år.', multipleChoiceOptions: ['Per 30, Kari 15', 'Per 24, Kari 12', 'Per 36, Kari 18', 'Per 20, Kari 10'] },
        ],
        solution: 'a) 16 og 9, b) 25 is og 20 brus, c) Per 30, Kari 15 aar',
        hints: ['Definer to variabler for de to ukjente størrelsene', 'Sett opp to likninger basert på informasjonen'],
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_10_2_4: TextbookChapter = {
  id: '10-2-4',
  courseId: '10',
  chapterNumber: '2.4',
  title: 'Ulikheter',
  description: 'Løse første- og andregradsulikheter.',
  estimatedMinutes: 50,
  competenceGoals: ['loyse likningar og ulikskapar og forklare kva det vil seie at ein storleik er ukjend'],
  content: [
    {
      id: '10-2-4-text-1',
      type: 'text',
      content: 'Ulikheter er matematiske utsagn som beskriver at en størrelse er større eller mindre enn en annen. Vi skal lære aa løse ulikheter og uttrykke løsningene.',
    },
    {
      id: '10-2-4-def-1',
      type: 'definition',
      title: 'Ulikheter',
      content: 'En **ulikhet** bruker symbolene $<$, $>$, $\\leq$ eller $\\geq$.\n\n**Viktig regel:** Når vi ganger eller deler med et negativt tall, maa vi snu ulikhetstegnet.\n\nEksempel: $-2x > 6 \\Rightarrow x < -3$',
    },
    {
      id: '10-2-4-ex-1',
      type: 'example',
      title: 'Eksempel 1: Førstegradsulikheter',
      problem: 'Løs ulikhetene:\na) $3x - 7 > 8$\nb) $-2x + 5 \\leq 11$',
      solution: 'a)\n$3x - 7 > 8$\n$3x > 15$\n$x > 5$\n\nb)\n$-2x + 5 \\leq 11$\n$-2x \\leq 6$\n$x \\geq -3$ (snur tegnet!)',
    },
    {
      id: '10-2-4-oppg-1',
      type: 'exercise',
      exercise: {
        id: '10-2-4-oppg-1',
        number: '2.4.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs ulikhetene.',
        subTasks: [
          { label: 'a', task: 'Løs $4x + 3 > 19$', solution: '$4x > 16 \\Rightarrow x > 4$', multipleChoiceOptions: ['$x > 4$', '$x < 4$', '$x > 5.5$', '$x \\geq 4$'] },
          { label: 'b', task: 'Løs $5 - 2x \\geq 13$', solution: '$-2x \\geq 8 \\Rightarrow x \\leq -4$', multipleChoiceOptions: ['$x \\leq -4$', '$x \\geq -4$', '$x \\leq 4$', '$x < -4$'] },
          { label: 'c', task: 'Løs $3(x - 2) < 2(x + 1)$', solution: '$3x - 6 < 2x + 2 \\Rightarrow x < 8$', multipleChoiceOptions: ['$x < 8$', '$x > 8$', '$x \\leq 8$', '$x < -8$'] },
          { label: 'd', task: 'Løs $\\frac{x - 1}{3} \\leq 2$', solution: '$x - 1 \\leq 6 \\Rightarrow x \\leq 7$', multipleChoiceOptions: ['$x \\leq 7$', '$x < 7$', '$x \\geq 7$', '$x \\leq 5$'] },
        ],
        solution: 'a) x > 4, b) x <= -4, c) x < 8, d) x <= 7',
        hints: ['Husk aa snu ulikhetstegnet når du deler med negativt tall'],
      },
    },
    {
      id: '10-2-4-ex-2',
      type: 'example',
      title: 'Eksempel 2: Doble ulikheter',
      problem: 'Løs ulikheten $-3 < 2x + 1 \\leq 7$',
      solution: 'Trekker fra 1 fra alle ledd:\n$-4 < 2x \\leq 6$\n\nDeler på 2:\n$-2 < x \\leq 3$\n\nLøsningsmengden er alle $x$ slik at $-2 < x \\leq 3$.',
    },
    {
      id: '10-2-4-oppg-2',
      type: 'exercise',
      exercise: {
        id: '10-2-4-oppg-2',
        number: '2.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs de doble ulikhetene.',
        subTasks: [
          { label: 'a', task: 'Løs $1 < 3x - 2 < 10$', solution: '$3 < 3x < 12 \\Rightarrow 1 < x < 4$', multipleChoiceOptions: ['$1 < x < 4$', '$0 < x < 3$', '$1 \\leq x \\leq 4$', '$2 < x < 5$'] },
          { label: 'b', task: 'Løs $-5 \\leq 2x + 3 \\leq 9$', solution: '$-8 \\leq 2x \\leq 6 \\Rightarrow -4 \\leq x \\leq 3$', multipleChoiceOptions: ['$-4 \\leq x \\leq 3$', '$-4 < x < 3$', '$-1 \\leq x \\leq 3$', '$-5 \\leq x \\leq 4$'] },
          { label: 'c', task: 'Løs $0 < \\frac{x + 1}{2} \\leq 4$', solution: '$0 < x + 1 \\leq 8 \\Rightarrow -1 < x \\leq 7$', multipleChoiceOptions: ['$-1 < x \\leq 7$', '$0 \\leq x \\leq 8$', '$-1 \\leq x < 7$', '$0 < x < 7$'] },
          { label: 'd', task: 'Løs $-2 < 1 - x < 5$', solution: '$-3 < -x < 4 \\Rightarrow -4 < x < 3$', multipleChoiceOptions: ['$-4 < x < 3$', '$-3 < x < 4$', '$-4 \\leq x \\leq 3$', '$-2 < x < 5$'] },
        ],
        solution: 'a) 1 < x < 4, b) -4 <= x <= 3, c) -1 < x <= 7, d) -4 < x < 3',
        hints: ['Gjoer samme operasjon på alle tre leddene'],
      },
    },
    {
      id: '10-2-4-def-2',
      type: 'definition',
      title: 'Fortegnsskjema',
      content: 'For aa løse andregradsulikheter bruker vi **fortegnsskjema**:\n1. Finn nullpunktene til uttrykket\n2. Tegn en tallinje med nullpunktene\n3. Bestem fortegnet i hvert intervall\n4. Les av løsningen',
    },
    {
      id: '10-2-4-ex-3',
      type: 'example',
      title: 'Eksempel 3: Andregradsulikheter',
      problem: 'Løs ulikheten $x^2 - 4x - 5 > 0$',
      solution: 'Faktorserer: $(x - 5)(x + 1) > 0$\n\nNullpunkter: $x = 5$ og $x = -1$\n\nFortegnsskjema:\n- For $x < -1$: $(-)(-) = +$ (positiv)\n- For $-1 < x < 5$: $(+)(-) = -$ (negativ)\n- For $x > 5$: $(+)(+) = +$ (positiv)\n\nLøsning: $x < -1$ eller $x > 5$',
    },
    {
      id: '10-2-4-oppg-3',
      type: 'exercise',
      exercise: {
        id: '10-2-4-oppg-3',
        number: '2.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs andregradsulikhetene.',
        subTasks: [
          { label: 'a', task: 'Løs $x^2 - 9 > 0$', solution: '$(x+3)(x-3) > 0 \\Rightarrow x < -3$ eller $x > 3$', multipleChoiceOptions: ['$x < -3$ eller $x > 3$', '$-3 < x < 3$', '$x > 3$', '$x \\leq -3$ eller $x \\geq 3$'] },
          { label: 'b', task: 'Løs $x^2 - 2x - 8 \\leq 0$', solution: '$(x-4)(x+2) \\leq 0 \\Rightarrow -2 \\leq x \\leq 4$', multipleChoiceOptions: ['$-2 \\leq x \\leq 4$', '$x \\leq -2$ eller $x \\geq 4$', '$-2 < x < 4$', '$x < -2$ eller $x > 4$'] },
          { label: 'c', task: 'Løs $x^2 + 4x + 3 < 0$', solution: '$(x+1)(x+3) < 0 \\Rightarrow -3 < x < -1$', multipleChoiceOptions: ['$-3 < x < -1$', '$x < -3$ eller $x > -1$', '$-3 \\leq x \\leq -1$', '$-1 < x < 3$'] },
          { label: 'd', task: 'Løs $x^2 - 6x + 9 \\geq 0$', solution: '$(x-3)^2 \\geq 0$. Alltid sant, så løsning: alle reelle tall', multipleChoiceOptions: ['Alle reelle tall', 'Kun $x = 3$', '$x \\neq 3$', 'Ingen løsning'] },
        ],
        solution: 'a) x < -3 eller x > 3, b) -2 <= x <= 4, c) -3 < x < -1, d) Alle x',
        hints: ['Faktoriser uttrykket foerst', 'Tegn fortegnsskjema'],
      },
    },
    {
      id: '10-2-4-ex-4',
      type: 'example',
      title: 'Eksempel 4: Praktisk anvendelse',
      problem: 'En ball kastes opp. Høyden (i meter) etter $t$ sekunder er $h(t) = -5t^2 + 20t$. Når er ballen høyere enn 15 meter?',
      solution: '$-5t^2 + 20t > 15$\n$-5t^2 + 20t - 15 > 0$\n$t^2 - 4t + 3 < 0$ (deler på -5, snur tegnet)\n$(t - 1)(t - 3) < 0$\n\n$1 < t < 3$\n\nBallen er høyere enn 15 meter mellom 1 og 3 sekunder.',
    },
    {
      id: '10-2-4-oppg-4',
      type: 'exercise',
      exercise: {
        id: '10-2-4-oppg-4',
        number: '2.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Løs praktiske problemer med ulikheter.',
        subTasks: [
          { label: 'a', task: 'Arealet av et rektangel med bredde $x$ og lengde $(x + 4)$ skal være minst 45 cm^2. Finn mulige verdier for $x$.', solution: '$x(x+4) \\geq 45 \\Rightarrow x^2 + 4x - 45 \\geq 0 \\Rightarrow (x+9)(x-5) \\geq 0$. Siden $x > 0$: $x \\geq 5$', multipleChoiceOptions: ['$x \\geq 5$', '$x \\leq 5$', '$x \\geq 9$', '$5 \\leq x \\leq 9$'] },
          { label: 'b', task: 'En ball kastes med høyde $h(t) = -4t^2 + 24t$. Når er ballen over 32 meter?', solution: '$-4t^2 + 24t > 32 \\Rightarrow t^2 - 6t + 8 < 0 \\Rightarrow (t-2)(t-4) < 0$. Løsning: $2 < t < 4$', multipleChoiceOptions: ['$2 < t < 4$ sekunder', '$t < 2$ eller $t > 4$ sekunder', '$0 < t < 6$ sekunder', '$1 < t < 5$ sekunder'] },
          { label: 'c', task: 'En produsent har fortjeneste $P(x) = -2x^2 + 100x - 800$ kr ved salg av $x$ enheter. For hvilke $x$ er fortjenesten positiv?', solution: '$-2x^2 + 100x - 800 > 0 \\Rightarrow x^2 - 50x + 400 < 0 \\Rightarrow (x-10)(x-40) < 0$. Løsning: $10 < x < 40$', multipleChoiceOptions: ['$10 < x < 40$ enheter', '$x < 10$ eller $x > 40$ enheter', '$0 < x < 50$ enheter', '$x > 10$ enheter'] },
        ],
        solution: 'a) x >= 5, b) 2 < t < 4 sekunder, c) 10 < x < 40 enheter',
        hints: ['Sett opp ulikheten fra problemet', 'Løs som vanlig andregradsulkhet'],
      },
    },
  ],
  exercises: [],
};

// Eksporter alle kapitler som et objekt
export const CHAPTERS_10KLASSE: Record<string, TextbookChapter> = {
  '10-3-1': CHAPTER_10_3_1,
  '10-3-2': CHAPTER_10_3_2,
  '10-3-3': CHAPTER_10_3_3,
  '10-3-4': CHAPTER_10_3_4,
  '10-4-1': CHAPTER_10_4_1,
  '10-4-2': CHAPTER_10_4_2,
  '10-4-3': CHAPTER_10_4_3,
  '10-4-4': CHAPTER_10_4_4,
  '10-5-1': CHAPTER_10_5_1,
  '10-5-2': CHAPTER_10_5_2,
  '10-5-3': CHAPTER_10_5_3,
  '10-6-1': CHAPTER_10_6_1,
  '10-6-2': CHAPTER_10_6_2,
  '10-6-3': CHAPTER_10_6_3,
  '10-1-1': CHAPTER_10_1_1,
  '10-1-2': CHAPTER_10_1_2,
  '10-1-3': CHAPTER_10_1_3,
  '10-1-4': CHAPTER_10_1_4,
  '10-2-1': CHAPTER_10_2_1,
  '10-2-2': CHAPTER_10_2_2,
  '10-2-3': CHAPTER_10_2_3,
  '10-2-4': CHAPTER_10_2_4,
};
