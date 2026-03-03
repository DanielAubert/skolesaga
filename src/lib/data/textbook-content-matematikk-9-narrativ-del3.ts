/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 3
 *
 * Kapittel 3.1: Lineære funksjoner
 * Kapittel 3.2: Stigningstall og konstantledd
 * Kapittel 3.3: Grafer og tolkning
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1 NARRATIV: Lineære funksjoner
// ============================================================================

export const CHAPTER_9_3_1_NARRATIV: TextbookChapter = {
  id: '9-3-1-narrativ',
  courseId: '9',
  chapterNumber: '3.1',
  title: 'Lineære funksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende reise inn i lineære funksjoner -- der vi oppdager hvordan rette linjer beskriver alt fra mobilabonnement til fart, og lærer å forstå sammenhengen mellom formler, tabeller og grafer.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive eigenskapar ved lineære funksjonar og bruke dei til å løyse praktiske og teoretiske problem',
  ],
  linkedChapterId: '9-3-1',
  content: [
    {
      id: '9-3-1-n-intro',
      type: 'text',
      content: `## Den rette linjen i hverdagen

Tenk deg at du har et mobilabonnement som koster 99 kr i måneden pluss 1 krone per minutt du ringer. Hvor mye betaler du i alt? Det kommer an på hvor mange minutter du ringer, selvfølgelig. Men det fine er at sammenhengen er enkel og forutsigbar: for hvert minutt du ringer, øker prisen med nøyaktig 1 krone. Ingen overraskelser, ingen brå hopp -- bare en jevn, rett linje oppover.

Denne typen sammenheng kalles en **lineær funksjon**, og den er kanskje den viktigste funksjonstypen i hele matematikken. Lineær betyr «som en linje», og det er akkurat det vi ser når vi tegner grafen: en perfekt rett linje.

I dette kapittelet skal vi utforske hva en lineær funksjon egentlig er, hvordan vi kjenner den igjen, og hvorfor den dukker opp overalt -- fra lomma di til naturfag og økonomi.`,
    },

    {
      id: '9-3-1-n-section1',
      type: 'text',
      content: `## Hva er en funksjon?

Før vi dykker inn i lineære funksjoner, må vi forstå hva en **funksjon** er. En funksjon er en regel som tar inn et tall og gir ut nøyaktig ett tall tilbake. Vi kaller gjerne innverdien for $x$ og utverdien for $y$ (eller $f(x)$).

Tenk på en brusautomat: du putter inn en mynt (innverdi), og ut kommer en bestemt brus (utverdi). For hver mynt du putter inn, får du alltid den samme brusen. Det er slik en funksjon fungerer -- for hver $x$-verdi finnes det nøyaktig én $y$-verdi.

Vi skriver en funksjon slik:

$$f(x) = \\text{en formel med } x$$

For eksempel betyr $f(x) = 2x + 3$ at vi tar $x$, dobler den, og legger til $3$. Putter vi inn $x = 4$, får vi:

$$f(4) = 2 \\cdot 4 + 3 = 8 + 3 = 11$$

En funksjon kan fremstilles på fire måter:
- **Formel**: $f(x) = 2x + 3$
- **Tabell**: en verditabell med $x$- og $y$-verdier
- **Graf**: en kurve i et koordinatsystem
- **Tekst**: «funksjonen dobler tallet og legger til 3»

Alle fire måtene beskriver den samme sammenhengen -- bare fra ulike vinkler.`,
    },

    {
      id: '9-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-3-1-n-quiz1-q0',
            task: 'Hva er $f(3)$ når $f(x) = 4x - 1$?',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$11$', isCorrect: true },
              { id: 'c', text: '$12$', isCorrect: false },
              { id: 'd', text: '$3$', isCorrect: false },
            ],
            solution: '$f(3) = 4 \\cdot 3 - 1 = 12 - 1 = 11$. Vi setter inn $x = 3$ i formelen og regner ut.',
          },
          {
            id: '9-3-1-n-quiz1-q1',
            task: 'Hvilken påstand om funksjoner er riktig?',
            options: [
              { id: 'a', text: 'En funksjon kan gi to ulike $y$-verdier for samme $x$-verdi', isCorrect: false },
              { id: 'b', text: 'En funksjon gir alltid nøyaktig én $y$-verdi for hver $x$-verdi', isCorrect: true },
              { id: 'c', text: 'En funksjon må alltid være en rett linje', isCorrect: false },
              { id: 'd', text: 'En funksjon kan bare beskrives med en formel', isCorrect: false },
            ],
            solution: 'En funksjon gir alltid nøyaktig én utverdi ($y$) for hver innverdi ($x$). Funksjoner kan være både rette linjer og kurver, og de kan beskrives med formel, tabell, graf eller tekst.',
          },
        ],
      },
    },

    {
      id: '9-3-1-n-section2',
      type: 'text',
      content: `## Lineære funksjoner -- den rette linjen

En **lineær funksjon** er en funksjon der grafen alltid er en rett linje. Den har formen:

$$f(x) = ax + b$$

Her er $a$ og $b$ konstanter (faste tall). Bokstaven $a$ kalles **stigningstallet** og bestemmer hvor bratt linjen er. Bokstaven $b$ kalles **konstantleddet** og forteller hvor linjen krysser $y$-aksen.

La oss gå tilbake til mobilabonnementet vårt. Hvis du betaler 99 kr fast pluss 1 kr per minutt, kan vi skrive kostnaden som:

$$K(x) = 1 \\cdot x + 99 = x + 99$$

Her er $x$ antall minutter, $a = 1$ (prisen øker med 1 kr per minutt), og $b = 99$ (fastprisen). Ringer du 0 minutter, betaler du $K(0) = 99$ kr. Ringer du 60 minutter, betaler du $K(60) = 60 + 99 = 159$ kr.

Kjennetegn på en lineær funksjon:
- Grafen er en **rett linje**
- $y$-verdien endrer seg **like mye** for hver gang $x$ øker med 1
- Formelen inneholder $x$ bare i **første potens** (ikke $x^2$, $x^3$ osv.)

Funksjoner som $g(x) = x^2$ eller $h(x) = \\frac{1}{x}$ er IKKE lineære -- grafene deres er buede kurver.`,
    },

    {
      id: '9-3-1-n-section3',
      type: 'text',
      content: `## Verditabeller og grafer

For å tegne grafen til en lineær funksjon, lager vi gjerne en **verditabell** først. La oss ta funksjonen $f(x) = 2x - 1$ og velge noen $x$-verdier:

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|-----|------|------|-----|-----|-----|-----|
| $f(x)$ | $-5$ | $-3$ | $-1$ | $1$ | $3$ | $5$ |

Legg merke til mønsteret: hver gang $x$ øker med $1$, øker $f(x)$ med $2$. Det er fordi stigningstallet $a = 2$. Og når $x = 0$, er $f(0) = -1$, som er konstantleddet $b = -1$.

Nå kan vi plotte punktene $(-2, -5)$, $(-1, -3)$, $(0, -1)$, $(1, 1)$, $(2, 3)$, $(3, 5)$ i et koordinatsystem og trekke en rett linje gjennom dem. Fordi dette er en lineær funksjon, ligger alle punktene på en perfekt rett linje.

Et praktisk tips: for å tegne en rett linje trenger du egentlig bare **to punkter**. Men det er lurt å velge tre -- det tredje punktet fungerer som en kontroll. Hvis det tredje punktet ikke ligger på linjen, har du gjort en regnefeil et sted.

Husk at vi bruker $x$-aksen (vannrett) for innverdien og $y$-aksen (loddrett) for utverdien. Punktet der linjen krysser $y$-aksen, kalles **skjæringspunktet med $y$-aksen** -- og det har koordinatene $(0, b)$.`,
    },

    {
      id: '9-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-3-1-n-quiz2-q0',
            task: 'Hvilken av disse er en lineær funksjon?',
            options: [
              { id: 'a', text: '$f(x) = x^2 + 3$', isCorrect: false },
              { id: 'b', text: '$f(x) = 3x - 7$', isCorrect: true },
              { id: 'c', text: '$f(x) = \\frac{1}{x}$', isCorrect: false },
              { id: 'd', text: '$f(x) = \\sqrt{x}$', isCorrect: false },
            ],
            solution: '$f(x) = 3x - 7$ er lineær fordi $x$ opptrer i første potens. De andre inneholder $x^2$, $\\frac{1}{x}$ eller $\\sqrt{x}$, som gjør dem ikke-lineære.',
          },
          {
            id: '9-3-1-n-quiz2-q1',
            task: 'Funksjonen $f(x) = -3x + 5$ har konstantledd:',
            options: [
              { id: 'a', text: '$-3$', isCorrect: false },
              { id: 'b', text: '$x$', isCorrect: false },
              { id: 'c', text: '$5$', isCorrect: true },
              { id: 'd', text: '$-3x$', isCorrect: false },
            ],
            solution: 'I $f(x) = ax + b$ er konstantleddet $b$. Her er $b = 5$. Det er verdien av $f(0) = -3 \\cdot 0 + 5 = 5$.',
          },
          {
            id: '9-3-1-n-quiz2-q2',
            task: 'I en verditabell for en lineær funksjon øker $f(x)$ med 4 hver gang $x$ øker med 1. Hva er stigningstallet?',
            options: [
              { id: 'a', text: '$1$', isCorrect: false },
              { id: 'b', text: '$4$', isCorrect: true },
              { id: 'c', text: '$-4$', isCorrect: false },
              { id: 'd', text: 'Det kan vi ikke vite', isCorrect: false },
            ],
            solution: 'Stigningstallet $a$ forteller hvor mye $f(x)$ endrer seg når $x$ øker med $1$. Siden $f(x)$ øker med $4$ per $x$-økning på $1$, er $a = 4$.',
          },
        ],
      },
    },

    {
      id: '9-3-1-n-section4',
      type: 'text',
      content: `## Proporsjonale funksjoner -- et spesialtilfelle

Det finnes en spesiell type lineære funksjoner der $b = 0$. Da blir formelen bare:

$$f(x) = ax$$

Disse kalles **proporsjonale funksjoner** (eller rette proporsjonaliteter). Grafen er en rett linje som går gjennom **origo** $(0, 0)$, altså der $x$-aksen og $y$-aksen krysser hverandre.

Tenk på en butikk der epler koster 30 kr per kilo. Prisen $P$ avhenger av antall kilo $x$:

$$P(x) = 30x$$

Kjøper du 0 kg, betaler du 0 kr. Kjøper du 2 kg, betaler du 60 kr. Kjøper du 5 kg, betaler du 150 kr. Sammenhengen er proporsjonal: dobler du antall kilo, dobles prisen. Grafen går rett gjennom origo fordi det ikke er noen fastpris.

Sammenlign dette med mobilabonnementet ($K(x) = x + 99$): der krysser linjen $y$-aksen i $99$, ikke i $0$. Det er forskjellen mellom en lineær funksjon med og uten konstantledd.

**Oppsummert:**
- $f(x) = ax$ er proporsjonal (linje gjennom origo)
- $f(x) = ax + b$ er lineær (linje som krysser $y$-aksen i $b$)
- Alle proporsjonale funksjoner er lineære, men ikke alle lineære funksjoner er proporsjonale.`,
    },

    {
      id: '9-3-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-3-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-3-1-n-quiz3-q0',
            task: 'Hvilken funksjon er proporsjonal?',
            options: [
              { id: 'a', text: '$f(x) = 5x + 2$', isCorrect: false },
              { id: 'b', text: '$f(x) = -3x$', isCorrect: true },
              { id: 'c', text: '$f(x) = x + 1$', isCorrect: false },
              { id: 'd', text: '$f(x) = 7$', isCorrect: false },
            ],
            solution: '$f(x) = -3x$ er proporsjonal fordi den har formen $f(x) = ax$ uten konstantledd ($b = 0$). Grafen går gjennom origo.',
          },
          {
            id: '9-3-1-n-quiz3-q1',
            task: 'En drosje koster 50 kr i oppstart pluss 12 kr per km. Hva er funksjonsuttrykket for prisen $P$ etter $x$ km?',
            options: [
              { id: 'a', text: '$P(x) = 50x + 12$', isCorrect: false },
              { id: 'b', text: '$P(x) = 62x$', isCorrect: false },
              { id: 'c', text: '$P(x) = 12x + 50$', isCorrect: true },
              { id: 'd', text: '$P(x) = 12x$', isCorrect: false },
            ],
            solution: 'Startprisen 50 kr er konstantleddet $b$, og prisen per km (12 kr) er stigningstallet $a$. Altså $P(x) = 12x + 50$.',
          },
        ],
      },
    },

    {
      id: '9-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

En **funksjon** er en regel som gir nøyaktig én utverdi ($y$) for hver innverdi ($x$). En **lineær funksjon** har formen $f(x) = ax + b$ og gir en rett linje som graf.

- $a$ er **stigningstallet** -- hvor mye $y$ endrer seg når $x$ øker med 1
- $b$ er **konstantleddet** -- der linjen krysser $y$-aksen
- Hvis $b = 0$, er funksjonen **proporsjonal** og linjen går gjennom origo

Lineære funksjoner kan beskrives med formel, tabell, graf eller tekst. For å tegne en rett linje trenger du minst to punkter, men bruk gjerne tre som kontroll.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2 NARRATIV: Stigningstall og konstantledd
// ============================================================================

export const CHAPTER_9_3_2_NARRATIV: TextbookChapter = {
  id: '9-3-2-narrativ',
  courseId: '9',
  chapterNumber: '3.2',
  title: 'Stigningstall og konstantledd',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende utdypning av stigningstall og konstantledd -- der vi lærer å lese bratthet og startverdi direkte fra formelen, grafen og tabellen, og forstår hva positive, negative og null stigningstall betyr.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive eigenskapar ved lineære funksjonar og bruke dei til å løyse praktiske og teoretiske problem',
  ],
  linkedChapterId: '9-3-2',
  content: [
    {
      id: '9-3-2-n-intro',
      type: 'text',
      content: `## Brattheten og startpunktet

Forestill deg at du står ved foten av en bakke og skal gå oppover. To ting bestemmer turen din: hvor bratt bakken er, og hvor du starter. I matematikk er det akkurat det samme med lineære funksjoner. **Stigningstallet** forteller oss hvor bratt linjen er, og **konstantleddet** forteller oss hvor linjen starter (krysser $y$-aksen).

Disse to tallene -- stigningstall og konstantledd -- er nøklene til å forstå enhver lineær funksjon. Når du mestrer dem, kan du lese av en graf, skrive opp en formel og forutsi verdier -- alt sammen med letthet.`,
    },

    {
      id: '9-3-2-n-section1',
      type: 'text',
      content: `## Stigningstallet $a$

Stigningstallet $a$ i $f(x) = ax + b$ forteller hvor mye $y$-verdien endrer seg når $x$ øker med $1$. Men det kan også beregnes mellom to vilkårlige punkter på linjen:

$$a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$

Her betyr $\\Delta$ (den greske bokstaven delta) «endring i». Så stigningstallet er forholdet mellom **endringen i $y$** og **endringen i $x$** -- altså «hvor mye oppover per steg bortover».

Tenk på det som en trapp: stigningstallet forteller hvor høyt hvert trinn er i forhold til hvor bredt det er.

**Eksempel:** Linjen går gjennom punktene $(1, 3)$ og $(4, 9)$. Da er:

$$a = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$$

For hvert steg til høyre ($x$ øker med $1$) går linjen $2$ steg opp ($y$ øker med $2$). Det spiller ingen rolle hvilke to punkter på linjen du velger -- stigningstallet blir alltid det samme. Det er det som gjør linjen rett!`,
    },

    {
      id: '9-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-3-2-n-quiz1-q0',
            task: 'En linje går gjennom $(2, 5)$ og $(6, 13)$. Hva er stigningstallet?',
            options: [
              { id: 'a', text: '$4$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{2}$', isCorrect: false },
              { id: 'c', text: '$2$', isCorrect: true },
              { id: 'd', text: '$8$', isCorrect: false },
            ],
            solution: '$a = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$. For hvert steg til høyre stiger linjen med $2$.',
          },
          {
            id: '9-3-2-n-quiz1-q1',
            task: 'Hva betyr det at stigningstallet er $a = -3$?',
            options: [
              { id: 'a', text: 'Linjen stiger med $3$ per $x$-økning', isCorrect: false },
              { id: 'b', text: 'Linjen synker med $3$ når $x$ øker med $1$', isCorrect: true },
              { id: 'c', text: 'Linjen er vannrett', isCorrect: false },
              { id: 'd', text: 'Linjen går gjennom punktet $(-3, 0)$', isCorrect: false },
            ],
            solution: 'Et negativt stigningstall betyr at linjen synker. $a = -3$ betyr at $y$ minker med $3$ for hver gang $x$ øker med $1$.',
          },
        ],
      },
    },

    {
      id: '9-3-2-n-section2',
      type: 'text',
      content: `## Positivt, negativt og null stigningstall

Stigningstallet kan være positivt, negativt eller null -- og hvert tilfelle gir en helt ulik linje:

**Positivt stigningstall ($a > 0$):** Linjen **stiger** fra venstre mot høyre. Jo større $a$, desto brattere stiger den. For eksempel: $f(x) = 3x + 1$ stiger raskt, mens $f(x) = 0{,}5x + 1$ stiger sakte.

**Negativt stigningstall ($a < 0$):** Linjen **synker** fra venstre mot høyre. $f(x) = -2x + 5$ synker med $2$ for hvert steg til høyre. Tenk på en skiløype nedover -- du mister høyde for hvert steg fremover.

**Stigningstall lik null ($a = 0$):** Linjen er **vannrett** (horisontal). $f(x) = 0 \\cdot x + 4 = 4$ er en flat linje på høyde $y = 4$. Uansett hva $x$ er, blir $y$ alltid $4$.

Du kan også tenke på stigningstallet som en **brøk**: $a = \\frac{\\text{opp}}{\\text{bort}}$.

- $a = 2 = \\frac{2}{1}$: to opp, en bort
- $a = \\frac{3}{4}$: tre opp, fire bort (ganske slak stigning)
- $a = -\\frac{1}{2}$: en ned, to bort (slak nedgang)

Denne brøktankegangen er veldig nyttig når du skal tegne linjer for hånd.`,
    },

    {
      id: '9-3-2-n-section3',
      type: 'text',
      content: `## Konstantleddet $b$

Konstantleddet $b$ er den enkleste av de to: det er verdien av $f(x)$ når $x = 0$. Med andre ord er det **$y$-koordinaten der linjen krysser $y$-aksen**.

$$f(0) = a \\cdot 0 + b = b$$

Så $b$ bestemmer linjens **startpunkt** på $y$-aksen:

- $f(x) = 2x + 3$ krysser $y$-aksen i $(0, 3)$
- $f(x) = 2x - 1$ krysser $y$-aksen i $(0, -1)$
- $f(x) = 2x$ krysser $y$-aksen i $(0, 0)$ -- altså origo

Legg merke til at alle tre funksjonene ovenfor har samme stigningstall ($a = 2$), men ulike konstantledd. Det betyr at de er **parallelle linjer** -- like bratte, men forskjøvet opp eller ned. Å endre $b$ er som å løfte eller senke linjen uten å vippe den.

For å finne konstantleddet fra en graf: se hvor linjen krysser $y$-aksen. For å finne det fra en tabell: finn $y$-verdien der $x = 0$. Og for å finne det fra to punkter: regn ut stigningstallet $a$ først, og sett deretter et av punktene inn i $y = ax + b$ for å løse for $b$.

**Eksempel:** En linje har $a = 3$ og går gjennom $(2, 11)$. Da er:

$$11 = 3 \\cdot 2 + b \\implies 11 = 6 + b \\implies b = 5$$

Funksjonen er $f(x) = 3x + 5$.`,
    },

    {
      id: '9-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-3-2-n-quiz2-q0',
            task: 'Hvor krysser linjen $f(x) = -4x + 7$ $y$-aksen?',
            options: [
              { id: 'a', text: 'I $(7, 0)$', isCorrect: false },
              { id: 'b', text: 'I $(0, -4)$', isCorrect: false },
              { id: 'c', text: 'I $(0, 7)$', isCorrect: true },
              { id: 'd', text: 'I $(-4, 7)$', isCorrect: false },
            ],
            solution: 'Linjen krysser $y$-aksen der $x = 0$: $f(0) = -4 \\cdot 0 + 7 = 7$. Punktet er $(0, 7)$.',
          },
          {
            id: '9-3-2-n-quiz2-q1',
            task: 'To linjer har stigningstall $a = 5$, men ulike konstantledd. Hva gjelder?',
            options: [
              { id: 'a', text: 'Linjene krysser hverandre i origo', isCorrect: false },
              { id: 'b', text: 'Linjene er parallelle', isCorrect: true },
              { id: 'c', text: 'Linjene er vinkelrette', isCorrect: false },
              { id: 'd', text: 'Linjene er identiske', isCorrect: false },
            ],
            solution: 'Linjer med likt stigningstall men ulikt konstantledd er parallelle -- de har samme bratthet, men er forskjøvet i $y$-retningen.',
          },
          {
            id: '9-3-2-n-quiz2-q2',
            task: 'En linje går gjennom $(0, -2)$ og $(3, 7)$. Hva er funksjonsuttrykket?',
            options: [
              { id: 'a', text: '$f(x) = 3x + 7$', isCorrect: false },
              { id: 'b', text: '$f(x) = 3x - 2$', isCorrect: true },
              { id: 'c', text: '$f(x) = -2x + 3$', isCorrect: false },
              { id: 'd', text: '$f(x) = 7x - 2$', isCorrect: false },
            ],
            solution: 'Konstantleddet er $b = -2$ (fordi $y = -2$ når $x = 0$). Stigningstallet er $a = \\frac{7 - (-2)}{3 - 0} = \\frac{9}{3} = 3$. Altså $f(x) = 3x - 2$.',
          },
        ],
      },
    },

    {
      id: '9-3-2-n-section4',
      type: 'text',
      content: `## Finne funksjonsuttrykket

Nå som vi forstår stigningstall og konstantledd, kan vi finne funksjonsuttrykket $f(x) = ax + b$ fra ulike utgangspunkt:

**Fra to punkter:** Gitt punktene $(x_1, y_1)$ og $(x_2, y_2)$:
1. Regn ut stigningstallet: $a = \\frac{y_2 - y_1}{x_2 - x_1}$
2. Sett ett av punktene inn i $y = ax + b$ og løs for $b$

**Eksempel:** Finn funksjonsuttrykket for linjen gjennom $(-1, 4)$ og $(3, -8)$.

Steg 1: $a = \\frac{-8 - 4}{3 - (-1)} = \\frac{-12}{4} = -3$

Steg 2: Sett inn $(3, -8)$: $-8 = -3 \\cdot 3 + b \\implies -8 = -9 + b \\implies b = 1$

Svar: $f(x) = -3x + 1$

**Fra en graf:** Les av stigningstallet ved å telle ruter (hvor mye opp/ned per steg til høyre), og les av konstantleddet der linjen krysser $y$-aksen.

**Fra en tabell:** Se hvor mye $y$ endrer seg for hver $x$-økning på $1$ (det er stigningstallet). Finn $y$-verdien for $x = 0$ (det er konstantleddet). Hvis $x = 0$ ikke er i tabellen, bruk metoden med to punkter.`,
    },

    {
      id: '9-3-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-3-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-3-2-n-quiz3-q0',
            task: 'Finn funksjonsuttrykket for linjen gjennom $(1, 2)$ og $(5, 10)$.',
            options: [
              { id: 'a', text: '$f(x) = 2x$', isCorrect: true },
              { id: 'b', text: '$f(x) = 2x + 2$', isCorrect: false },
              { id: 'c', text: '$f(x) = 3x - 1$', isCorrect: false },
              { id: 'd', text: '$f(x) = x + 1$', isCorrect: false },
            ],
            solution: '$a = \\frac{10 - 2}{5 - 1} = \\frac{8}{4} = 2$. Sett inn $(1, 2)$: $2 = 2 \\cdot 1 + b \\implies b = 0$. Altså $f(x) = 2x$.',
          },
          {
            id: '9-3-2-n-quiz3-q1',
            task: 'En verditabell viser: $x = 2 \\to y = 1$, $x = 4 \\to y = 5$, $x = 6 \\to y = 9$. Hva er stigningstallet?',
            options: [
              { id: 'a', text: '$1$', isCorrect: false },
              { id: 'b', text: '$2$', isCorrect: true },
              { id: 'c', text: '$4$', isCorrect: false },
              { id: 'd', text: '$3$', isCorrect: false },
            ],
            solution: 'Når $x$ øker fra $2$ til $4$ (økning $2$), øker $y$ fra $1$ til $5$ (økning $4$). Stigningstallet er $a = \\frac{4}{2} = 2$. Vi kan sjekke: fra $x = 4$ til $x = 6$ øker $y$ fra $5$ til $9$ -- igjen $\\frac{4}{2} = 2$.',
          },
        ],
      },
    },

    {
      id: '9-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I en lineær funksjon $f(x) = ax + b$:

**Stigningstallet $a$** forteller hvor bratt linjen er:
- $a > 0$: linjen stiger
- $a < 0$: linjen synker
- $a = 0$: linjen er vannrett
- Beregnes med $a = \\frac{y_2 - y_1}{x_2 - x_1}$ fra to punkter

**Konstantleddet $b$** forteller hvor linjen krysser $y$-aksen:
- Det er verdien av $f(0)$
- Å endre $b$ forskyver linjen opp eller ned

Linjer med likt stigningstall er parallelle. For å finne funksjonsuttrykket: regn ut $a$ først, sett deretter inn et punkt for å finne $b$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3 NARRATIV: Grafer og tolkning
// ============================================================================

export const CHAPTER_9_3_3_NARRATIV: TextbookChapter = {
  id: '9-3-3-narrativ',
  courseId: '9',
  chapterNumber: '3.3',
  title: 'Grafer og tolkning',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av hvordan vi leser, tolker og forstår grafer i praksis -- fra skjæringspunkter og nullpunkter til virkelighetsnære situasjoner der grafer forteller historier.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive eigenskapar ved lineære funksjonar og bruke dei til å løyse praktiske og teoretiske problem',
  ],
  linkedChapterId: '9-3-3',
  content: [
    {
      id: '9-3-3-n-intro',
      type: 'text',
      content: `## Grafer som forteller historier

Se for deg en graf som viser temperaturen gjennom en dag. Om morgenen er det kaldt, midt på dagen er det varmt, og om kvelden kjøler det seg ned igjen. Uten et eneste ord forteller grafen en hel historie -- du kan se nøyaktig når det var varmest, hvor raskt temperaturen steg om morgenen, og om det var noen brå endringer.

Grafer er matematikkens billedspråk. De gjør usynlige sammenhenger synlige. I dette kapittelet skal vi lære å **lese** grafer -- finne nullpunkter, skjæringspunkter og tolke hva grafene betyr i praksis.`,
    },

    {
      id: '9-3-3-n-section1',
      type: 'text',
      content: `## Nullpunktet -- der grafen krysser $x$-aksen

Et **nullpunkt** er en $x$-verdi der funksjonen har verdien null, altså der $f(x) = 0$. Grafisk ser vi det som punktet der linjen krysser $x$-aksen.

For å finne nullpunktet til $f(x) = 2x - 6$ setter vi $f(x) = 0$ og løser:

$$2x - 6 = 0$$
$$2x = 6$$
$$x = 3$$

Nullpunktet er $x = 3$, og punktet på grafen er $(3, 0)$. Merk at $y$-koordinaten alltid er $0$ i et nullpunkt -- derav navnet.

**Generelt** for $f(x) = ax + b$:

$$ax + b = 0 \\implies x = -\\frac{b}{a}$$

Denne formelen fungerer alltid (så lenge $a \\neq 0$).

Nullpunkter er viktige i praksis. Tenk på en bedrift som har kostnader og inntekter. Overskuddet er gitt ved $O(x) = \\text{inntekt} - \\text{kostnad}$. Nullpunktet til overskuddsfunksjonen forteller når bedriften går i **null** -- altså når inntektene akkurat dekker kostnadene. Under nullpunktet taper bedriften penger, og over nullpunktet tjener den.`,
    },

    {
      id: '9-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-3-3-n-quiz1-q0',
            task: 'Hva er nullpunktet til $f(x) = 5x - 15$?',
            options: [
              { id: 'a', text: '$x = -3$', isCorrect: false },
              { id: 'b', text: '$x = 3$', isCorrect: true },
              { id: 'c', text: '$x = 15$', isCorrect: false },
              { id: 'd', text: '$x = 5$', isCorrect: false },
            ],
            solution: '$5x - 15 = 0 \\implies 5x = 15 \\implies x = 3$. Nullpunktet er $(3, 0)$.',
          },
          {
            id: '9-3-3-n-quiz1-q1',
            task: 'Hva er nullpunktet til $g(x) = -2x + 8$?',
            options: [
              { id: 'a', text: '$x = -4$', isCorrect: false },
              { id: 'b', text: '$x = 8$', isCorrect: false },
              { id: 'c', text: '$x = 4$', isCorrect: true },
              { id: 'd', text: '$x = -2$', isCorrect: false },
            ],
            solution: '$-2x + 8 = 0 \\implies -2x = -8 \\implies x = 4$. Grafen krysser $x$-aksen i $(4, 0)$.',
          },
          {
            id: '9-3-3-n-quiz1-q2',
            task: 'En bedrifts overskudd er $O(x) = 50x - 10000$ der $x$ er antall solgte enheter. Hvor mange enheter må bedriften selge for å gå i null?',
            options: [
              { id: 'a', text: '$50$ enheter', isCorrect: false },
              { id: 'b', text: '$100$ enheter', isCorrect: false },
              { id: 'c', text: '$200$ enheter', isCorrect: true },
              { id: 'd', text: '$500$ enheter', isCorrect: false },
            ],
            solution: '$50x - 10000 = 0 \\implies 50x = 10000 \\implies x = 200$. Bedriften må selge $200$ enheter for å gå i null.',
          },
        ],
      },
    },

    {
      id: '9-3-3-n-section2',
      type: 'text',
      content: `## Skjæringspunkter mellom to linjer

Hva skjer når to rette linjer møtes? Krysningspunktet kalles et **skjæringspunkt**, og det er stedet der begge funksjonene har **samme verdi** for **samme $x$**. For å finne det setter vi de to funksjonene lik hverandre.

**Eksempel:** Finn skjæringspunktet mellom $f(x) = 2x + 1$ og $g(x) = -x + 7$.

Vi setter $f(x) = g(x)$:

$$2x + 1 = -x + 7$$
$$2x + x = 7 - 1$$
$$3x = 6$$
$$x = 2$$

Nå finner vi $y$-verdien ved å sette $x = 2$ inn i en av funksjonene:

$$f(2) = 2 \\cdot 2 + 1 = 5$$

Skjæringspunktet er $(2, 5)$. Vi kan sjekke med den andre funksjonen: $g(2) = -2 + 7 = 5$. Stemmer!

Skjæringspunkter dukker opp i mange praktiske situasjoner. Tenk deg to mobilabonnementer: abonnement A koster $f(x) = 0{,}50x + 149$ (49 øre per minutt + 149 kr fast), og abonnement B koster $g(x) = 0{,}20x + 299$ (20 øre per minutt + 299 kr fast). Skjæringspunktet forteller deg ved hvor mange minutter de to abonnementene koster det samme. Ringer du mindre, er A billigst. Ringer du mer, er B billigst.`,
    },

    {
      id: '9-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-3-3-n-quiz2-q0',
            task: 'Finn $x$-koordinaten til skjæringspunktet mellom $f(x) = 3x - 2$ og $g(x) = x + 4$.',
            options: [
              { id: 'a', text: '$x = 1$', isCorrect: false },
              { id: 'b', text: '$x = 3$', isCorrect: true },
              { id: 'c', text: '$x = 2$', isCorrect: false },
              { id: 'd', text: '$x = 6$', isCorrect: false },
            ],
            solution: '$3x - 2 = x + 4 \\implies 2x = 6 \\implies x = 3$. Sjekk: $f(3) = 7$ og $g(3) = 7$. Stemmer!',
          },
          {
            id: '9-3-3-n-quiz2-q1',
            task: 'Kan to parallelle linjer ha et skjæringspunkt?',
            options: [
              { id: 'a', text: 'Ja, alltid i origo', isCorrect: false },
              { id: 'b', text: 'Ja, men bare i ett punkt', isCorrect: false },
              { id: 'c', text: 'Nei, parallelle linjer krysser aldri hverandre', isCorrect: true },
              { id: 'd', text: 'Det kommer an på konstantleddet', isCorrect: false },
            ],
            solution: 'Parallelle linjer har likt stigningstall men ulikt konstantledd, så de krysser aldri hverandre. Ligningen $ax + b_1 = ax + b_2$ gir $b_1 = b_2$, som er usant.',
          },
        ],
      },
    },

    {
      id: '9-3-3-n-section3',
      type: 'text',
      content: `## Grafisk tolkning i praksis

Grafer i den virkelige verden handler sjelden om bare $x$ og $y$. De forteller om **tid og temperatur**, **antall og pris**, **avstand og drivstoff**, eller **timer og lønn**. Å tolke en graf betyr å forstå hva tallene faktisk betyr i situasjonen.

La oss se på et eksempel. Et svømmebasseng fylles med vann. Grafen viser antall liter $V$ i bassenget etter $t$ timer:

$$V(t) = 500t + 2000$$

Hva kan vi lese ut av dette?

- **Konstantleddet** $b = 2000$: Bassenget hadde allerede $2000$ liter vann da målingen startet (ved $t = 0$).
- **Stigningstallet** $a = 500$: Det fylles $500$ liter per time.
- **$V(6) = 500 \\cdot 6 + 2000 = 5000$**: Etter $6$ timer er det $5000$ liter i bassenget.
- **Nullpunkt**: $500t + 2000 = 0 \\implies t = -4$. Negativt! Det betyr at bassenget «startet fra tomt» $4$ timer *før* målingen begynte -- som gir mening fordi det allerede var $2000$ liter der.

Viktig huskeregel: sjekk alltid om **hele grafen gir mening** i sammenhengen. Negative verdier av tid er sjelden relevante. Og et negativt antall liter finnes ikke. Vi sier at **definisjonsmengden** (de tillatte $x$-verdiene) er begrenset av situasjonen.`,
    },

    {
      id: '9-3-3-n-section4',
      type: 'text',
      content: `## Stykkevis lineære grafer

I virkeligheten er mange sammenhenger ikke beskrevet av én eneste rett linje, men av **flere linjestykker** etter hverandre. Vi kaller dette en **stykkevis lineær graf**.

Tenk på en sykkeltur: du sykler jevnt i $20$ minutter, tar en pause i $10$ minutter (avstanden øker ikke), og sykler videre i $15$ minutter med en annen fart. Grafen som viser avstand mot tid, vil ha tre ulike deler -- en stigende linje, en vannrett linje (pausen), og en ny stigende linje (kanskje med en annen bratthet).

Når du tolker en stykkevis lineær graf, bør du stille deg disse spørsmålene:
- **Hva betyr en stigende del?** Verdien øker -- noe vokser, beveger seg, fylles.
- **Hva betyr en vannrett del?** Verdien er konstant -- pause, stillstand, ingen endring.
- **Hva betyr en synkende del?** Verdien minker -- noe tømmes, avtar, senkes.
- **Hva betyr en brattere del?** Endringen skjer raskere.
- **Hva betyr en slakkere del?** Endringen skjer saktere.

Å lese en stykkevis lineær graf er som å lese en tegneserie uten ord -- hver del forteller sin del av historien.`,
    },

    {
      id: '9-3-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-3-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-3-3-n-quiz3-q0',
            task: 'En graf viser en persons avstand fra hjemmet over tid. Midt i grafen er det en vannrett del. Hva betyr det?',
            options: [
              { id: 'a', text: 'Personen snur og går hjem', isCorrect: false },
              { id: 'b', text: 'Personen stopper og står stille en stund', isCorrect: true },
              { id: 'c', text: 'Personen løper fortere', isCorrect: false },
              { id: 'd', text: 'Grafen har en feil', isCorrect: false },
            ],
            solution: 'En vannrett del betyr at avstanden ikke endrer seg -- personen står stille (tar en pause). Stigningstallet er $0$ i dette intervallet.',
          },
          {
            id: '9-3-3-n-quiz3-q1',
            task: 'En bils drivstofftank har $60$ liter. Bilen bruker $0{,}08$ liter per km. Etter hvor mange km er tanken tom?',
            options: [
              { id: 'a', text: '$480$ km', isCorrect: false },
              { id: 'b', text: '$750$ km', isCorrect: true },
              { id: 'c', text: '$600$ km', isCorrect: false },
              { id: 'd', text: '$800$ km', isCorrect: false },
            ],
            solution: 'Drivstoff: $D(x) = 60 - 0{,}08x$. Nullpunkt: $60 - 0{,}08x = 0 \\implies x = \\frac{60}{0{,}08} = 750$ km.',
          },
          {
            id: '9-3-3-n-quiz3-q2',
            task: 'I en avstand-tid-graf ser du at en del er brattere enn en annen del. Hva betyr det?',
            options: [
              { id: 'a', text: 'Personen har gått lenger totalt', isCorrect: false },
              { id: 'b', text: 'Personen beveger seg raskere i den bratte delen', isCorrect: true },
              { id: 'c', text: 'Personen har snudd', isCorrect: false },
              { id: 'd', text: 'Det er en feil i målingen', isCorrect: false },
            ],
            solution: 'I en avstand-tid-graf er brattheten (stigningstallet) lik farten. En brattere del betyr at avstanden øker raskere per tidsenhet, altså at personen beveger seg fortere.',
          },
        ],
      },
    },

    {
      id: '9-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Nullpunkt:** Der $f(x) = 0$, altså der grafen krysser $x$-aksen. For $f(x) = ax + b$ er nullpunktet $x = -\\frac{b}{a}$.

**Skjæringspunkt:** Der to grafer møtes. Finn det ved å sette funksjonene lik hverandre og løse for $x$. Parallelle linjer har ingen skjæringspunkt.

**Tolkning av grafer:**
- Stigende = verdien øker (brattere = raskere økning)
- Vannrett = verdien er konstant
- Synkende = verdien minker
- Stigningstallet har en praktisk betydning (f.eks. fart, pris per enhet)
- Konstantleddet har en praktisk betydning (f.eks. startverdi, fastpris)

Stykkevis lineære grafer forteller historier med flere kapitler -- les hver del for seg og sett dem sammen til en helhet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_3_1_NARRATIV,
  CHAPTER_9_3_2_NARRATIV,
  CHAPTER_9_3_3_NARRATIV,
];
