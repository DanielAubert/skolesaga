/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 3
 * Kapittel 3.1–3.4: Funksjoner
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1 NARRATIV: Lineære funksjoner
// ============================================================================

export const CHAPTER_10_3_1_NARRATIV: TextbookChapter = {
  id: '10-3-1-narrativ',
  courseId: '10',
  chapterNumber: '3.1',
  title: 'Lineære funksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om rette linjer, stigningstall og skjæringspunkter -- fra taxipriser til mobilabonnementer.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive funksjoner ved å bruke ulike representasjoner',
    'modellere situasjoner knyttet til dagligliv ved å bruke lineære funksjoner',
  ],
  linkedChapterId: '10-3-1',
  content: [
    {
      id: '10-3-1-n-intro',
      type: 'text',
      content: `## Rette linjer overalt

Tenk deg at du bestiller en taxi. Det koster 50 kroner bare å sette deg inn, og deretter 15 kroner for hver kilometer du kjører. Jo lenger du kjører, desto mer koster det -- men økningen er helt jevn. Kjører du 1 kilometer til, koster det alltid 15 kroner mer. Denne typen jevn, forutsigbar vekst er kjennetegnet på en lineær funksjon.

En lineær funksjon har formen $f(x) = ax + b$, og grafen er alltid en rett linje. Her er $a$ det vi kaller stigningstallet, og det forteller hvor bratt linjen er -- altså hvor mye $y$-verdien endrer seg for hver gang $x$ øker med 1. Tallet $b$ er konstantleddet, og det forteller oss hvor linjen krysser $y$-aksen, altså verdien av $f(0)$. Taxien vår kan skrives som $P(x) = 15x + 50$, der stigningstallet 15 er prisen per kilometer og konstantleddet 50 er startprisen.

Lineære funksjoner dukker opp overalt i hverdagen: lønnen som øker med antall timer du jobber, temperaturen som synker jevnt gjennom natten, og mobilregningen som vokser med antall SMS du sender.`,
    },
    {
      id: '10-3-1-n-section1',
      type: 'text',
      content: `## Stigningstallet -- hvor bratt er linjen?

Stigningstallet $a$ er nøkkelen til å forstå hvordan en lineær funksjon oppfører seg. Hvis $a$ er positiv, stiger linjen -- den går oppover mot høyre. Hvis $a$ er negativ, synker linjen. Og hvis $a = 0$, er linjen helt flat, altså horisontal.

Men hvordan finner vi stigningstallet når vi bare kjenner to punkter på linjen? Da bruker vi formelen:

$$a = \\frac{y_2 - y_1}{x_2 - x_1}$$

La oss si at vi kjenner punktene $(2, 5)$ og $(4, 11)$. Da regner vi: $a = \\frac{11 - 5}{4 - 2} = \\frac{6}{2} = 3$. Stigningstallet er 3, som betyr at $y$ øker med 3 for hver gang $x$ øker med 1.

For å finne hele funksjonsuttrykket fra to punkter følger vi to steg. Først beregner vi stigningstallet $a$. Deretter setter vi inn ett av punktene for å finne $b$. For eksempel, med punktene $(1, 5)$ og $(3, 11)$: vi finner $a = 3$, setter inn $(1, 5)$ i $f(x) = 3x + b$, og får $5 = 3 \\cdot 1 + b$, som gir $b = 2$. Funksjonen er $f(x) = 3x + 2$.`,
    },
    {
      id: '10-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-3-1-n-quiz1-q0',
            task: 'Hva er stigningstallet og konstantleddet i funksjonen $f(x) = -2x + 7$?',
            options: [
              { id: 'a', text: '$a = 7$, $b = -2$', isCorrect: false },
              { id: 'b', text: '$a = -2$, $b = 7$', isCorrect: true },
              { id: 'c', text: '$a = 2$, $b = 7$', isCorrect: false },
              { id: 'd', text: '$a = -2$, $b = -7$', isCorrect: false },
            ],
            solution: 'I formen $f(x) = ax + b$ er $a$ tallet foran $x$ og $b$ er det leddet som står alene. Her er $a = -2$ og $b = 7$.',
          },
          {
            id: '10-3-1-n-quiz1-q1',
            task: 'Finn stigningstallet for linjen gjennom $(1, 3)$ og $(4, 9)$.',
            options: [
              { id: 'a', text: '$a = 3$', isCorrect: false },
              { id: 'b', text: '$a = 6$', isCorrect: false },
              { id: 'c', text: '$a = 2$', isCorrect: true },
              { id: 'd', text: '$a = 4$', isCorrect: false },
            ],
            solution: '$a = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$.',
          },
          {
            id: '10-3-1-n-quiz1-q2',
            task: 'Finn funksjonsuttrykket for linjen gjennom $(2, 7)$ og $(4, 13)$.',
            options: [
              { id: 'a', text: '$f(x) = 3x - 1$', isCorrect: false },
              { id: 'b', text: '$f(x) = 2x + 3$', isCorrect: false },
              { id: 'c', text: '$f(x) = 3x + 1$', isCorrect: true },
              { id: 'd', text: '$f(x) = -3x + 13$', isCorrect: false },
            ],
            solution: 'Stigningstall: $a = \\frac{13 - 7}{4 - 2} = 3$. Sett inn $(2, 7)$: $7 = 3 \\cdot 2 + b$, som gir $b = 1$. Svar: $f(x) = 3x + 1$.',
          },
        ],
      },
    },
    {
      id: '10-3-1-n-section2',
      type: 'text',
      content: `## Nullpunkt og skjæringspunkter

Nullpunktet er det punktet der grafen krysser $x$-aksen, altså der funksjonsverdien er null. For å finne det setter vi $f(x) = 0$ og løser likningen. Ta for eksempel $f(x) = 2x + 6$: vi setter $2x + 6 = 0$, som gir $2x = -6$ og dermed $x = -3$. Nullpunktet er altså $(-3, 0)$.

Skjæringspunktet mellom to linjer finner vi ved å sette funksjonene lik hverandre. Tenk deg at vi har $f(x) = 2x + 1$ og $g(x) = -x + 10$. Vi setter $2x + 1 = -x + 10$ og løser: $3x = 9$, altså $x = 3$. Vi setter inn: $f(3) = 2 \\cdot 3 + 1 = 7$. Skjæringspunktet er $(3, 7)$.

Denne teknikken er utrolig nyttig i praksis! Tenk deg at du skal velge mellom to mobilabonnementer. Abonnement A koster 99 kr i måneden pluss 0,50 kr per SMS, mens Abonnement B koster 149 kr med gratis SMS. Da setter vi opp $A(x) = 0{,}50x + 99$ og $B(x) = 149$, og finner at de er like dyre ved $0{,}50x + 99 = 149$, som gir $x = 100$ SMS. Sender du mer enn 100 SMS, lønner B seg.`,
    },
    {
      id: '10-3-1-n-section3',
      type: 'text',
      content: `## Praktiske anvendelser

La oss se på et par eksempler som viser hvor nyttige lineære funksjoner er. Et vannbasseng inneholder 500 liter vann, og det tappes ut 20 liter per minutt. Vannmengden kan beskrives av $V(t) = -20t + 500$. Her er stigningstallet negativt fordi vannet minker. Etter 10 minutter er det $V(10) = -20 \\cdot 10 + 500 = 300$ liter igjen. Bassenget er tomt når $V(t) = 0$, altså $-20t + 500 = 0$, som gir $t = 25$ minutter.

Eller tenk på to venner som går mot hverandre. Anna starter hjemmefra og går med 5 km/t: $A(t) = 5t$. Bjørn starter 18 km unna og går mot Anna med 4 km/t: $B(t) = 18 - 4t$. De møtes når $5t = 18 - 4t$, som gir $9t = 18$ og $t = 2$ timer. Da har Anna gått $5 \\cdot 2 = 10$ km. Parallelle linjer har samme stigningstall men ulike konstantledd -- de møtes aldri.`,
    },
    {
      id: '10-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-3-1-n-quiz2-q0',
            task: 'Finn nullpunktet for $f(x) = 4x + 8$.',
            options: [
              { id: 'a', text: '$x = 2$', isCorrect: false },
              { id: 'b', text: '$x = -2$', isCorrect: true },
              { id: 'c', text: '$x = -4$', isCorrect: false },
              { id: 'd', text: '$x = 8$', isCorrect: false },
            ],
            solution: 'Vi setter $4x + 8 = 0$, som gir $4x = -8$ og $x = -2$.',
          },
          {
            id: '10-3-1-n-quiz2-q1',
            task: 'Finn skjæringspunktet mellom $f(x) = x + 2$ og $g(x) = 3x - 4$.',
            options: [
              { id: 'a', text: '$(3, 5)$', isCorrect: true },
              { id: 'b', text: '$(2, 4)$', isCorrect: false },
              { id: 'c', text: '$(5, 3)$', isCorrect: false },
              { id: 'd', text: '$(1, 3)$', isCorrect: false },
            ],
            solution: '$x + 2 = 3x - 4$ gir $2x = 6$ og $x = 3$. Da er $y = 3 + 2 = 5$. Skjæringspunkt: $(3, 5)$.',
          },
          {
            id: '10-3-1-n-quiz2-q2',
            task: 'Et vannbasseng tømmes jevnt. Funksjonen er $V(t) = -20t + 500$. Når er bassenget tomt?',
            options: [
              { id: 'a', text: 'Etter 20 minutter', isCorrect: false },
              { id: 'b', text: 'Etter 500 minutter', isCorrect: false },
              { id: 'c', text: 'Etter 10 minutter', isCorrect: false },
              { id: 'd', text: 'Etter 25 minutter', isCorrect: true },
            ],
            solution: '$-20t + 500 = 0$ gir $20t = 500$ og $t = 25$ minutter.',
          },
          {
            id: '10-3-1-n-quiz2-q3',
            task: 'To parallelle linjer har alltid:',
            options: [
              { id: 'a', text: 'Samme konstantledd', isCorrect: false },
              { id: 'b', text: 'Ulikt stigningstall', isCorrect: false },
              { id: 'c', text: 'Samme stigningstall', isCorrect: true },
              { id: 'd', text: 'Samme nullpunkt', isCorrect: false },
            ],
            solution: 'Parallelle linjer har alltid samme stigningstall $a$, men ulike konstantledd $b$.',
          },
        ],
      },
    },
    {
      id: '10-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

En lineær funksjon har formen $f(x) = ax + b$ der $a$ er stigningstallet og $b$ er konstantleddet. Stigningstallet forteller hvor bratt linjen er og om den stiger eller synker. Konstantleddet er der linjen krysser $y$-aksen. For å finne funksjonsuttrykket fra to punkter beregner du først stigningstallet med $a = \\frac{y_2 - y_1}{x_2 - x_1}$, og deretter konstantleddet ved å sette inn et punkt. Nullpunktet finner du ved å sette $f(x) = 0$, og skjæringspunktet mellom to linjer finner du ved å sette dem lik hverandre. Lineære funksjoner er et kraftig verktøy for å modellere situasjoner med jevn vekst eller nedgang.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2 NARRATIV: Andregradsfunksjoner
// ============================================================================

export const CHAPTER_10_3_2_NARRATIV: TextbookChapter = {
  id: '10-3-2-narrativ',
  courseId: '10',
  chapterNumber: '3.2',
  title: 'Andregradsfunksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om parabeler, bunnpunkter og kastebevegelser -- fra fotballspark til tunnelåpninger.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og beskrive funksjoner ved å bruke ulike representasjoner',
    'tolke og bruke andregradsfunksjoner i praktiske situasjoner',
  ],
  linkedChapterId: '10-3-2',
  content: [
    {
      id: '10-3-2-n-intro',
      type: 'text',
      content: `## Når rette linjer ikke strekker til

Kast en ball rett opp i lufta. Ballen stiger, bremser opp, stopper et øyeblikk, og faller tilbake ned. Banen den følger er ikke en rett linje -- den er en buet kurve som vi kaller en parabel. For å beskrive slike fenomener trenger vi noe kraftigere enn lineære funksjoner. Vi trenger andregradsfunksjoner.

En andregradsfunksjon har formen $f(x) = ax^2 + bx + c$, der $a \\neq 0$. Det er $x^2$-leddet som gjør at grafen buer seg i stedet for å være rett. Koeffisienten $a$ bestemmer om parabelen åpner oppover (som et smilefjes, når $a > 0$) eller nedover (når $a < 0$). Jo større tallverdien av $a$ er, desto smalere blir parabelen. Tallet $c$ er konstantleddet og forteller oss der grafen krysser $y$-aksen.

Parabeler finnes overalt: formen på en parabol-antenne, buen under en bro, banen til et prosjektil, og til og med formen på vannet som spruter opp fra en fontene.`,
    },
    {
      id: '10-3-2-n-section1',
      type: 'text',
      content: `## Toppunkt, bunnpunkt og symmetrilinje

Hver parabel har et spesielt punkt der den snur -- enten et toppunkt (hvis parabelen åpner nedover) eller et bunnpunkt (hvis den åpner oppover). Denne vendepunktet er enten den høyeste eller laveste verdien funksjonen kan ta, og det er utrolig nyttig i praktiske sammenhenger.

For å finne dette punktet bruker vi formelen for symmetrilinjen: $x = -\\frac{b}{2a}$. Denne $x$-verdien setter vi inn i funksjonen for å finne $y$-koordinaten.

La oss prøve med $f(x) = x^2 - 4x + 3$. Her er $a = 1$ og $b = -4$. Symmetrilinjen ligger ved $x = -\\frac{-4}{2 \\cdot 1} = 2$. Vi setter inn: $f(2) = 4 - 8 + 3 = -1$. Siden $a = 1 > 0$, åpner parabelen oppover, og vi har et bunnpunkt i $(2, -1)$.

Prøv nå med $g(x) = -2x^2 + 8x - 5$, der $a = -2$ og $b = 8$. Symmetrilinje: $x = -\\frac{8}{-4} = 2$. Vi setter inn: $g(2) = -8 + 16 - 5 = 3$. Siden $a < 0$, har vi et toppunkt i $(2, 3)$.`,
    },
    {
      id: '10-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-3-2-n-quiz1-q0',
            task: 'Funksjonen $f(x) = -x^2 + 5$ har en parabel som åpner:',
            options: [
              { id: 'a', text: 'Oppover, og har et bunnpunkt', isCorrect: false },
              { id: 'b', text: 'Nedover, og har et toppunkt', isCorrect: true },
              { id: 'c', text: 'Oppover, og har et toppunkt', isCorrect: false },
              { id: 'd', text: 'Nedover, og har et bunnpunkt', isCorrect: false },
            ],
            solution: 'Siden $a = -1 < 0$, åpner parabelen nedover og har et toppunkt.',
          },
          {
            id: '10-3-2-n-quiz1-q1',
            task: 'Finn bunnpunktet for $f(x) = x^2 - 6x + 5$.',
            options: [
              { id: 'a', text: '$(3, -4)$', isCorrect: true },
              { id: 'b', text: '$(3, -2)$', isCorrect: false },
              { id: 'c', text: '$(-3, -4)$', isCorrect: false },
              { id: 'd', text: '$(6, 5)$', isCorrect: false },
            ],
            solution: '$x = -\\frac{-6}{2} = 3$. $f(3) = 9 - 18 + 5 = -4$. Bunnpunkt: $(3, -4)$.',
          },
          {
            id: '10-3-2-n-quiz1-q2',
            task: 'Hvilken av disse er IKKE en andregradsfunksjon?',
            options: [
              { id: 'a', text: '$f(x) = x^2 + 3x - 2$', isCorrect: false },
              { id: 'b', text: '$g(x) = 2x + 5$', isCorrect: true },
              { id: 'c', text: '$h(x) = -3x^2 + 1$', isCorrect: false },
              { id: 'd', text: '$k(x) = x^2$', isCorrect: false },
            ],
            solution: '$g(x) = 2x + 5$ er en lineær funksjon fordi den ikke har noe $x^2$-ledd.',
          },
        ],
      },
    },
    {
      id: '10-3-2-n-section2',
      type: 'text',
      content: `## Nullpunkter og abc-formelen

Nullpunktene er der parabelen krysser $x$-aksen, altså der $f(x) = 0$. For å finne dem løser vi andregradslikningen $ax^2 + bx + c = 0$. Vi har to hovedmetoder: faktorisering og abc-formelen.

Abc-formelen er: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Uttrykket under rottegnet, $D = b^2 - 4ac$, kalles diskriminanten. Hvis $D > 0$, finnes det to nullpunkter. Hvis $D = 0$, finnes det nøyaktig ett. Og hvis $D < 0$, krysser parabelen aldri $x$-aksen.

La oss finne nullpunktene for $f(x) = x^2 - 5x + 6$. Vi prøver faktorisering: vi leter etter to tall som ganget gir 6 og lagt sammen gir $-5$. Tallene $-2$ og $-3$ fungerer! Så $x^2 - 5x + 6 = (x - 2)(x - 3) = 0$, som gir $x = 2$ eller $x = 3$.`,
    },
    {
      id: '10-3-2-n-section3',
      type: 'text',
      content: `## Parabeler i praksis

En ball kastes rett opp. Høyden etter $t$ sekunder er $h(t) = -5t^2 + 30t$ meter. Når er ballen høyest? Vi finner toppunktet: $t = -\\frac{30}{2 \\cdot (-5)} = 3$ sekunder. Maksimalhøyden er $h(3) = -45 + 90 = 45$ meter. Ballen lander når $h(t) = 0$: $-5t^2 + 30t = 0$ gir $t(-5t + 30) = 0$, altså $t = 0$ (start) eller $t = 6$ sekunder.

Et rektangel skal ha omkrets 40 cm. Hvis bredden er $x$, blir lengden $20 - x$. Arealet er $A(x) = x(20 - x) = -x^2 + 20x$. Toppunktet gir $x = \\frac{20}{2} = 10$. Da er bredde og lengde begge 10 cm -- et kvadrat gir størst areal! Maksimalt areal: $A(10) = 100$ cm$^2$.`,
    },
    {
      id: '10-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-3-2-n-quiz2-q0',
            task: 'Hva forteller diskriminanten $D = b^2 - 4ac$ oss?',
            options: [
              { id: 'a', text: 'Om parabelen åpner oppover eller nedover', isCorrect: false },
              { id: 'b', text: 'Hvor mange nullpunkter funksjonen har', isCorrect: true },
              { id: 'c', text: 'Koordinatene til toppunktet', isCorrect: false },
              { id: 'd', text: 'Stigningstallet til funksjonen', isCorrect: false },
            ],
            solution: '$D > 0$: to nullpunkter. $D = 0$: ett nullpunkt. $D < 0$: ingen nullpunkter.',
          },
          {
            id: '10-3-2-n-quiz2-q1',
            task: 'En ball kastes opp. Høyden er $h(t) = -5t^2 + 20t + 2$. Når er ballen på toppen?',
            options: [
              { id: 'a', text: 'Etter 4 sekunder', isCorrect: false },
              { id: 'b', text: 'Etter 1 sekund', isCorrect: false },
              { id: 'c', text: 'Etter 2 sekunder', isCorrect: true },
              { id: 'd', text: 'Etter 5 sekunder', isCorrect: false },
            ],
            solution: '$t = -\\frac{20}{2 \\cdot (-5)} = -\\frac{20}{-10} = 2$ sekunder.',
          },
          {
            id: '10-3-2-n-quiz2-q2',
            task: 'Finn nullpunktene for $f(x) = x^2 - 7x + 12$.',
            options: [
              { id: 'a', text: '$x = 2$ og $x = 6$', isCorrect: false },
              { id: 'b', text: '$x = -3$ og $x = -4$', isCorrect: false },
              { id: 'c', text: '$x = 3$ og $x = 4$', isCorrect: true },
              { id: 'd', text: '$x = 1$ og $x = 12$', isCorrect: false },
            ],
            solution: '$(x - 3)(x - 4) = 0$ gir $x = 3$ eller $x = 4$.',
          },
          {
            id: '10-3-2-n-quiz2-q3',
            task: 'Et rektangel med omkrets 40 cm har størst areal når det er:',
            options: [
              { id: 'a', text: 'Et kvadrat med side 10 cm', isCorrect: true },
              { id: 'b', text: 'Et rektangel med sider 5 cm og 15 cm', isCorrect: false },
              { id: 'c', text: 'Et rektangel med sider 8 cm og 12 cm', isCorrect: false },
              { id: 'd', text: 'Et rektangel med sider 1 cm og 19 cm', isCorrect: false },
            ],
            solution: 'Toppunktet for $A(x) = -x^2 + 20x$ gir $x = 10$. Da er lengde = bredde = 10 cm.',
          },
        ],
      },
    },
    {
      id: '10-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

En andregradsfunksjon har formen $f(x) = ax^2 + bx + c$, og grafen er en parabel. Fortegnet til $a$ bestemmer om parabelen åpner opp eller ned. Symmetrilinjen og topp-/bunnpunktet finnes med $x = -\\frac{b}{2a}$. Nullpunktene finnes ved faktorisering eller abc-formelen $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. Diskriminanten $D = b^2 - 4ac$ forteller om det er to, ett eller ingen nullpunkter. Andregradsfunksjoner modellerer kastebevegelser, arealproblemer og fortjenestefunksjoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3 NARRATIV: Praktiske funksjoner
// ============================================================================

export const CHAPTER_10_3_3_NARRATIV: TextbookChapter = {
  id: '10-3-3-narrativ',
  courseId: '10',
  chapterNumber: '3.3',
  title: 'Praktiske funksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan funksjoner brukes til å modellere alt fra strømregninger til bedriftsøkonomi.',
  estimatedMinutes: 30,
  competenceGoals: [
    'modellere situasjoner knyttet til dagligliv ved å bruke funksjoner',
    'tolke og presentere funksjoner grafisk og algebraisk',
  ],
  linkedChapterId: '10-3-3',
  content: [
    {
      id: '10-3-3-n-intro',
      type: 'text',
      content: `## Funksjoner i virkeligheten

Hittil har vi lært om lineære funksjoner og andregradsfunksjoner som matematiske objekter. Men den virkelige kraften i funksjoner ligger i evnen til å modellere virkeligheten. Når du leser en graf, kan du hente ut en overraskende mengde informasjon: startverdien der $x = 0$, nullpunkter der grafen krysser $x$-aksen, om verdien stiger eller synker, og topp- og bunnpunkter.

For å sette opp en funksjon fra en praktisk situasjon følger vi fire steg. Først identifiserer vi variablene -- hva er $x$ og hva er $f(x)$? Deretter finner vi sammenhengen: er det en fast verdi pluss noe som varierer? Så skriver vi funksjonsuttrykket, og til slutt sjekker vi ved å sette inn kjente verdier. Med denne fremgangsmåten kan du beskrive alt fra bilkjøring til kaffetemperatur med matematikk.`,
    },
    {
      id: '10-3-3-n-section1',
      type: 'text',
      content: `## Fra tekst til funksjon

La oss se på noen eksempler. En strømregning består av et fastbeløp på 200 kr per måned pluss 1,20 kr per kWh. Kostnaden som funksjon av forbruket $x$ i kWh blir $K(x) = 1{,}20x + 200$. Ved 350 kWh forbruk: $K(350) = 1{,}20 \\cdot 350 + 200 = 620$ kr. Og med budsjett på 500 kr: $500 = 1{,}20x + 200$ gir $x = 250$ kWh.

En bil kjører fra Oslo med hastighet 80 km/t. Distansen etter $t$ timer er $s(t) = 80t$. Her er stigningstallet 80 -- det er farten. Etter 2,5 timer: $s(2{,}5) = 200$ km. Og det tar $t = \\frac{360}{80} = 4{,}5$ timer å kjøre 360 km.

Noen situasjoner følger eksponentiell vekst. En spareplan med 3 prosent rente gir saldo $S(t) = 10\\,000 \\cdot 1{,}03^t$ etter $t$ år. Ved start: 10 000 kr. Etter 5 år: $10\\,000 \\cdot 1{,}03^5 \\approx 11\\,593$ kr. Legg merke til at dette ikke er en rett linje -- pengene vokser raskere og raskere.`,
    },
    {
      id: '10-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-3-3-n-quiz1-q0',
            task: 'En tank har 100 liter vann og fylles med 30 liter per minutt. Hva er riktig funksjon for vannmengden $V(t)$?',
            options: [
              { id: 'a', text: '$V(t) = 100t + 30$', isCorrect: false },
              { id: 'b', text: '$V(t) = 30t + 100$', isCorrect: true },
              { id: 'c', text: '$V(t) = 30t - 100$', isCorrect: false },
              { id: 'd', text: '$V(t) = 130t$', isCorrect: false },
            ],
            solution: 'Stigningstallet er 30 (liter/minutt) og startverdien er 100 (liter ved start). Altså $V(t) = 30t + 100$.',
          },
          {
            id: '10-3-3-n-quiz1-q1',
            task: 'En kaffekopp har temperatur $T(t) = 20 + 70 \\cdot 0{,}95^t$. Hva blir temperaturen til slutt?',
            options: [
              { id: 'a', text: '90 grader', isCorrect: false },
              { id: 'b', text: '70 grader', isCorrect: false },
              { id: 'c', text: '0 grader', isCorrect: false },
              { id: 'd', text: '20 grader', isCorrect: true },
            ],
            solution: 'Når $t$ blir veldig stor, går $0{,}95^t$ mot 0. Da nærmer temperaturen seg $20 + 0 = 20$ grader (romtemperaturen).',
          },
          {
            id: '10-3-3-n-quiz1-q2',
            task: 'En strømregning er $K(x) = 1{,}20x + 200$. Hvor mange kWh kan du bruke for 500 kr?',
            options: [
              { id: 'a', text: '417 kWh', isCorrect: false },
              { id: 'b', text: '250 kWh', isCorrect: true },
              { id: 'c', text: '300 kWh', isCorrect: false },
              { id: 'd', text: '200 kWh', isCorrect: false },
            ],
            solution: '$500 = 1{,}20x + 200$ gir $1{,}20x = 300$ og $x = 250$ kWh.',
          },
        ],
      },
    },
    {
      id: '10-3-3-n-section2',
      type: 'text',
      content: `## Sammenligne alternativer og bedriftsøkonomi

Funksjoner er spesielt nyttige når du skal sammenligne alternativer. To treningssentre tilbyr: Senter A koster 300 kr per måned pluss 30 kr per trening, mens Senter B koster 600 kr med ubegrenset trening. Vi setter $K_A(x) = 30x + 300$ og $K_B(x) = 600$. Skjæringspunktet: $30x + 300 = 600$ gir $x = 10$. Trener du mer enn 10 ganger i måneden, lønner B seg.

I bedriftsøkonomi er funksjoner helt essensielle. En bedrift har kostnad $K(x) = 20x + 500$ og inntekt $I(x) = 50x$. Fortjenesten blir $F(x) = I(x) - K(x) = 30x - 500$. Break-even (der fortjenesten er null) oppstår ved $30x - 500 = 0$, altså $x \\approx 17$ enheter. Ved 50 solgte enheter er fortjenesten $F(50) = 30 \\cdot 50 - 500 = 1000$ kr. Slike beregninger hjelper bedrifter å ta gode beslutninger.

En rakett skytes opp med $h(t) = -5t^2 + 100t$. Maksimalhøyden nås ved $t = 10$ sekunder: $h(10) = 500$ meter. Den lander etter 20 sekunder. Her ser vi hvordan andregradsfunksjoner modellerer bevegelse der akselerasjon er involvert.`,
    },
    {
      id: '10-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-3-3-n-quiz2-q0',
            task: 'Senter A: $K_A(x) = 30x + 300$, Senter B: $K_B = 600$. Hva lønner seg hvis du trener 15 ganger i måneden?',
            options: [
              { id: 'a', text: 'Senter A (billigst)', isCorrect: false },
              { id: 'b', text: 'De koster like mye', isCorrect: false },
              { id: 'c', text: 'Senter B (billigst)', isCorrect: true },
              { id: 'd', text: 'Umulig å avgjøre', isCorrect: false },
            ],
            solution: '$K_A(15) = 30 \\cdot 15 + 300 = 750$ kr, mens $K_B = 600$ kr. Senter B er billigst.',
          },
          {
            id: '10-3-3-n-quiz2-q1',
            task: 'En bedrift har $K(x) = 50x + 2000$ og $I(x) = 80x$. Hvor mange enheter må selges for å gå i null?',
            options: [
              { id: 'a', text: 'Ca. 67 enheter', isCorrect: true },
              { id: 'b', text: 'Ca. 25 enheter', isCorrect: false },
              { id: 'c', text: 'Ca. 40 enheter', isCorrect: false },
              { id: 'd', text: 'Ca. 100 enheter', isCorrect: false },
            ],
            solution: '$80x = 50x + 2000$ gir $30x = 2000$ og $x \\approx 67$ enheter.',
          },
          {
            id: '10-3-3-n-quiz2-q2',
            task: 'En bonde har 60 m gjerde langs en vegg og lager en rektangulær innhegning. Størst areal fås med dimensjonene:',
            options: [
              { id: 'a', text: '20 m $\\times$ 20 m', isCorrect: false },
              { id: 'b', text: '10 m $\\times$ 40 m', isCorrect: false },
              { id: 'c', text: '15 m $\\times$ 30 m', isCorrect: true },
              { id: 'd', text: '12 m $\\times$ 36 m', isCorrect: false },
            ],
            solution: '$A(x) = x(60 - 2x) = -2x^2 + 60x$. Toppunkt: $x = 15$ m, lengde $= 60 - 30 = 30$ m.',
          },
        ],
      },
    },
    {
      id: '10-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Funksjoner er et kraftig verktøy for å modellere virkeligheten. For å sette opp en funksjon fra en situasjon: identifiser variablene, finn sammenhengen, skriv uttrykket og sjekk med kjente verdier. Lineære funksjoner beskriver jevn vekst, andregradsfunksjoner beskriver situasjoner med akselerasjon eller optimering, og eksponentielle funksjoner beskriver prosentvis vekst. Ved å sammenligne funksjoner kan du finne når alternativer er like dyre, og i bedriftsøkonomi finner du break-even ved å sette inntekt lik kostnad.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4 NARRATIV: Regresjon
// ============================================================================

export const CHAPTER_10_3_4_NARRATIV: TextbookChapter = {
  id: '10-3-4-narrativ',
  courseId: '10',
  chapterNumber: '3.4',
  title: 'Regresjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om å finne mønstre i data -- fra studietid og karakterer til iskrem og drukning.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke digitale verktøy til å presentere og analysere data',
    'vurdere om en modell beskriver datamaterialet på en god måte',
  ],
  linkedChapterId: '10-3-4',
  content: [
    {
      id: '10-3-4-n-intro',
      type: 'text',
      content: `## Å finne linjen i kaoset

I virkeligheten har vi sjelden data som passer perfekt på en funksjon. Måleresultater spriker, og punktene i et diagram danner ikke en pen linje -- de strør seg litt hit og dit. Men ofte kan vi se en trend, en generell retning som dataene følger. Lineær regresjon er metoden for å finne den rette linjen som passer best til et sett med datapunkter.

Tenk deg at du undersøker sammenhengen mellom studietid og eksamenskarakter. Du spør fem venner og får dataene: 2 timer ga karakter 3, 4 timer ga 4, 5 timer ga 4, 7 timer ga 5 og 8 timer ga 6. Punktene ligger ikke perfekt på en linje, men det er en klar trend: jo mer studietid, desto bedre karakter.

Regresjonslinje-metoden (ofte kalt minste kvadraters metode) finner linjen $y = ax + b$ som minimerer den samlede avstanden fra alle punktene til linjen. I praksis bruker vi digitale verktøy som GeoGebra til dette. For studietid-dataene gir GeoGebra oss $y = 0{,}47x + 2{,}2$. Regresjonskoeffisienten 0,47 er stigningstallet, og konstantleddet er 2,2.`,
    },
    {
      id: '10-3-4-n-section1',
      type: 'text',
      content: `## Korrelasjon -- hvor sterk er sammenhengen?

Korrelasjonskoeffisienten $r$ er et tall mellom $-1$ og $1$ som forteller hvor godt dataene følger en lineær sammenheng. Hvis $r = 1$, ligger alle punkter perfekt på en stigende linje. Hvis $r = -1$, ligger de perfekt på en synkende linje. Og $r = 0$ betyr at det ikke finnes noen lineær sammenheng.

Som tommelfingerregel: $|r| > 0{,}7$ er sterk korrelasjon, $0{,}4 < |r| < 0{,}7$ er moderat, og $|r| < 0{,}4$ er svak. Fortegnet forteller retningen: positiv betyr at begge variablene øker sammen (som høyde og vekt), negativ betyr at den ene synker når den andre øker (som alder på bil og verdi).

Når vi tolker korrelasjon, er det viktig å tenke over hva slags sammenheng vi forventer. Temperatur og iskremssalg? Positiv korrelasjon. Øvingstimer og feil på prøve? Negativ korrelasjon. Skostørrelse og intelligens? Forhåpentligvis ingen korrelasjon!`,
    },
    {
      id: '10-3-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-3-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-3-4-n-quiz1-q0',
            task: 'Hva betyr $r = -0{,}78$?',
            options: [
              { id: 'a', text: 'Svak positiv korrelasjon', isCorrect: false },
              { id: 'b', text: 'Sterk negativ korrelasjon', isCorrect: true },
              { id: 'c', text: 'Moderat negativ korrelasjon', isCorrect: false },
              { id: 'd', text: 'Ingen korrelasjon', isCorrect: false },
            ],
            solution: '$|{-0{,}78}| = 0{,}78 > 0{,}7$ betyr sterk korrelasjon, og negativt fortegn betyr negativ sammenheng.',
          },
          {
            id: '10-3-4-n-quiz1-q1',
            task: 'Hvilken korrelasjon forventer du mellom alder på bil og verdi?',
            options: [
              { id: 'a', text: 'Positiv korrelasjon', isCorrect: false },
              { id: 'b', text: 'Ingen korrelasjon', isCorrect: false },
              { id: 'c', text: 'Negativ korrelasjon', isCorrect: true },
              { id: 'd', text: 'Perfekt korrelasjon', isCorrect: false },
            ],
            solution: 'Eldre biler er som regel mindre verdt, altså negativ korrelasjon.',
          },
          {
            id: '10-3-4-n-quiz1-q2',
            task: 'En regresjonslinje er $y = 2{,}5x + 10$ med $r = 0{,}95$. Hva betyr konstantleddet 10?',
            options: [
              { id: 'a', text: 'Stigningstallet', isCorrect: false },
              { id: 'b', text: '$y$-verdien når $x = 0$', isCorrect: true },
              { id: 'c', text: 'Korrelasjonskoeffisienten', isCorrect: false },
              { id: 'd', text: 'Gjennomsnittsverdien av $x$', isCorrect: false },
            ],
            solution: 'Konstantleddet $b = 10$ er verdien av $y$ når $x = 0$, altså startverdien.',
          },
        ],
      },
    },
    {
      id: '10-3-4-n-section2',
      type: 'text',
      content: `## Prediksjon og fallgruver

Når vi har en regresjonslinje, kan vi bruke den til å estimere verdier. Interpolasjon (estimering innenfor dataintervallet) er relativt pålitelig. Ekstrapolasjon (utenfor dataintervallet) er mer risikabelt, fordi vi ikke vet om trenden fortsetter.

For å vurdere modellens kvalitet ser vi på korrelasjonskoeffisienten (jo nærmere $|r|$ er 1, desto bedre), sjekker at avvikene er tilfeldige, og bruker sunn fornuft.

Men her kommer den viktigste advarselen: korrelasjon betyr IKKE årsakssammenheng! Det finnes sterk korrelasjon mellom iskremssalg og drukningsulykker. Betyr det at is forårsaker drukning? Selvfølgelig ikke! Begge påvirkes av en tredje faktor -- varmt vær. Flere kjøper is når det er varmt, og flere bader (og risikerer å drukne) når det er varmt. Denne typen feilslutning er en av de vanligste i statistikk.

Temperaturdata fra en vårdag (som stiger og deretter synker) passer dessuten ikke alltid til en rett linje. Da kan en andregradstilpasning (parabel) gi en bedre modell. Å velge riktig modell er en viktig del av dataanalyse.`,
    },
    {
      id: '10-3-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-3-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-3-4-n-quiz2-q0',
            task: 'Det er sterk korrelasjon mellom iskremssalg og drukning. Hva er den riktige tolkningen?',
            options: [
              { id: 'a', text: 'Iskrem forårsaker drukning', isCorrect: false },
              { id: 'b', text: 'Drukning forårsaker økt iskremssalg', isCorrect: false },
              { id: 'c', text: 'Begge påvirkes av en tredje faktor (varmt vær)', isCorrect: true },
              { id: 'd', text: 'Det er tilfeldig', isCorrect: false },
            ],
            solution: 'Korrelasjon betyr ikke årsakssammenheng. Her er varmt vær den underliggende faktoren som påvirker begge variablene.',
          },
          {
            id: '10-3-4-n-quiz2-q1',
            task: 'Hva er forskjellen mellom interpolasjon og ekstrapolasjon?',
            options: [
              { id: 'a', text: 'Interpolasjon bruker flere datapunkter enn ekstrapolasjon', isCorrect: false },
              { id: 'b', text: 'Interpolasjon estimerer innenfor dataområdet, ekstrapolasjon utenfor', isCorrect: true },
              { id: 'c', text: 'Ekstrapolasjon er alltid mer nøyaktig', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Interpolasjon er estimering innenfor dataintervallet (relativt trygt), mens ekstrapolasjon er estimering utenfor (mer usikkert).',
          },
          {
            id: '10-3-4-n-quiz2-q2',
            task: 'Regresjonslinjen $y = -2{,}4x + 320$ beskriver sammenhengen mellom pris og salg. Hva betyr stigningstallet?',
            options: [
              { id: 'a', text: 'Salget øker med 2,4 enheter per krone', isCorrect: false },
              { id: 'b', text: 'Salget synker med 2,4 enheter per krone prisøkning', isCorrect: true },
              { id: 'c', text: 'Prisen synker med 2,4 kr per solgte enhet', isCorrect: false },
              { id: 'd', text: 'Det selges 320 enheter', isCorrect: false },
            ],
            solution: 'Stigningstallet $-2{,}4$ betyr at for hver krone prisen øker, synker antall solgte enheter med 2,4.',
          },
        ],
      },
    },
    {
      id: '10-3-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Lineær regresjon finner den rette linjen som best beskriver sammenhengen mellom to variabler. Korrelasjonskoeffisienten $r$ (mellom $-1$ og $1$) forteller hvor sterk og i hvilken retning sammenhengen er. Vi bruker regresjonslinjen til prediksjon, men må være forsiktige med ekstrapolasjon. Den viktigste regelen: korrelasjon betyr ikke årsakssammenheng! Vurder alltid om modellen gir mening i konteksten, og velg riktig funksjonstype (lineær, kvadratisk, eksponentiell) basert på dataenes mønster.`,
    },
  ],
  exercises: [],
};

export const MATEMATIKK_10_NARRATIV_DEL3_CHAPTERS = [
  CHAPTER_10_3_1_NARRATIV,
  CHAPTER_10_3_2_NARRATIV,
  CHAPTER_10_3_3_NARRATIV,
  CHAPTER_10_3_4_NARRATIV,
];
