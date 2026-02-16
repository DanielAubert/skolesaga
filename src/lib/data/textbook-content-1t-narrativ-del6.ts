/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON – Del 6
 * Kapittel 1.6: Rasjonale uttrykk
 * Kapittel 1.7: Mengdelære
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.6 NARRATIV: Rasjonale uttrykk
// ============================================================================

export const CHAPTER_1T_1_6_NARRATIV: TextbookChapter = {
  id: '1t-1-6-narrativ',
  courseId: '1t',
  chapterNumber: '1.6',
  title: 'Rasjonale uttrykk',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om brøker som inneholder bokstaver – hvordan du forkorter, ganger, deler og trekker sammen algebraiske brøker ved å lete etter fellesfaktorer.',
  estimatedMinutes: 40,
  competenceGoals: ['forenkle algebraiske brøkuttrykk'],
  linkedChapterId: '1t-1-6',
  content: [
    { id: '1t-1-6-n-audio-1', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-6-narrativ-del1.mp3', description: 'Lydfil som leser opp teksten frem til første quiz.' },
    {
      id: '1t-1-6-n-intro',
      type: 'text',
      content: `## Brøker med bokstaver i

Tenk deg at du deler en pizza med en venn. Dere kutter den i $x$ stykker og tar $2$ hver. Da har dere spist $\\frac{2}{x}$ av pizzaen hver. Plutselig er du midt i et **rasjonalt uttrykk** – en brøk der bokstaver dukker opp i teller, nevner, eller begge deler.

I dette kapittelet skal vi lære å mestre slike brøker. Vi starter med å **forkorte** dem, akkurat som du forkorter $\\frac{6}{9}$ til $\\frac{2}{3}$. Deretter ser vi på **multiplikasjon og divisjon**, før vi takler den virkelige utfordringen: å **trekke sammen** brøker med ulik nevner. Alt bygger på én grunnidé: finn fellesfaktorene og bruk dem til din fordel.`,
    },
    {
      id: '1t-1-6-n-section1',
      type: 'text',
      content: `## Å forkorte algebraiske brøker

Når du forkorter en vanlig brøk som $\\frac{12}{18}$, leter du etter en felles faktor i teller og nevner. Begge er delelige med $6$, så $\\frac{12}{18} = \\frac{2}{3}$. Med algebraiske brøker er prinsippet nøyaktig det samme – du må bare faktorisere først.

La oss starte enkelt. Hva blir $\\frac{2x}{3x}$? Både teller og nevner inneholder faktoren $x$. Vi stryker den: $\\frac{2x}{3x} = \\frac{2}{3}$. Legg merke til at vi bare kan stryke **faktorer**, aldri ledd som er koblet med pluss eller minus.

Hva med $\\frac{3x - 6}{6}$? Her kan vi faktorisere telleren: $3x - 6 = 3(x - 2)$. Nå ser brøken slik ut: $\\frac{3(x - 2)}{6}$. Både $3$ i telleren og $6$ i nevneren deler på $3$, så vi får $\\frac{x - 2}{2}$.

Nå et steg vanskeligere. Hva med $\\frac{x^2 - 5x + 6}{x^2 - 4}$? Her må vi faktorisere begge deler. Telleren er et andregradsuttrykk: $x^2 - 5x + 6 = (x - 2)(x - 3)$. Nevneren er en konjugatsetning: $x^2 - 4 = (x - 2)(x + 2)$. Begge inneholder faktoren $(x - 2)$, som vi stryker: $\\frac{(x-2)(x-3)}{(x-2)(x+2)} = \\frac{x - 3}{x + 2}$.

Hovedregelen er alltid den samme: **faktoriser teller og nevner, og stryk felles faktorer.** Du kan aldri stryke et enkeltledd som bare er en del av en sum – du må finne hele faktoren først. Uttrykket $\\frac{x^2 - 9}{x + 3}$ forkortes ved å skrive telleren som $(x-3)(x+3)$, og da forsvinner $(x+3)$: svaret er $x - 3$.`,
    },
    {
      id: '1t-1-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva blir $\\frac{x^2 - 9}{x + 3}$ etter forkorting?',
        options: [
          { id: 'a', text: '$x + 3$', isCorrect: false },
          { id: 'b', text: '$x - 3$', isCorrect: true },
          { id: 'c', text: '$\\frac{x - 9}{3}$', isCorrect: false },
          { id: 'd', text: '$x^2 - 3$', isCorrect: false },
        ],
        solution: 'Vi faktoriserer telleren med konjugatsetningen: $x^2 - 9 = (x-3)(x+3)$. Brøken blir $\\frac{(x-3)(x+3)}{x+3}$. Vi stryker fellesfaktoren $(x+3)$ og sitter igjen med $x - 3$.',
      },
    },
    { id: '1t-1-6-n-audio-2', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-6-narrativ-del2.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-6-n-section2',
      type: 'text',
      content: `## Multiplikasjon og divisjon av algebraiske brøker

Når du ganger vanlige brøker, ganger du teller med teller og nevner med nevner: $\\frac{2}{3} \\cdot \\frac{4}{5} = \\frac{8}{15}$. Algebraiske brøker følger akkurat samme regel – men her lønner det seg å **faktorisere og forkorte før du ganger**, slik at du slipper å jobbe med store uttrykk.

Ta for eksempel $\\frac{x}{2x + 8} \\cdot \\frac{x + 4}{3x}$. Før vi ganger, faktoriserer vi nevneren i den første brøken: $2x + 8 = 2(x + 4)$. Nå ser uttrykket slik ut: $\\frac{x}{2(x+4)} \\cdot \\frac{x+4}{3x}$. Vi ser at $(x + 4)$ finnes i både teller og nevner, og det gjør $x$ også. Stryk begge: $\\frac{1}{2 \\cdot 3} = \\frac{1}{6}$.

Et annet eksempel: $3x^2 \\cdot \\frac{x + 3}{3x^2 - 27}$. Vi skriver $3x^2$ som $\\frac{3x^2}{1}$ og faktoriserer nevneren: $3x^2 - 27 = 3(x^2 - 9) = 3(x+3)(x-3)$. Brøken blir $\\frac{3x^2 \\cdot (x+3)}{3(x+3)(x-3)}$. Vi stryker $3$ og $(x+3)$: $\\frac{x^2}{x - 3}$.

Hva med **divisjon**? Regelen du kjenner fra vanlige brøker gjelder fortsatt: å dele med en brøk er det samme som å gange med den omvendte. $\\frac{x}{2} \\div \\frac{2x}{3} = \\frac{x}{2} \\cdot \\frac{3}{2x} = \\frac{3x}{4x} = \\frac{3}{4}$.

La oss ta et vanskeligere eksempel: $\\frac{x + 9}{2x} \\div \\frac{x^2 - 81}{2x + 8}$. Vi snur den andre brøken og ganger: $\\frac{x+9}{2x} \\cdot \\frac{2x+8}{x^2 - 81}$. Faktoriser: $2x + 8 = 2(x+4)$ og $x^2 - 81 = (x-9)(x+9)$. Nå stryker vi $(x+9)$ og $2$: $\\frac{x + 4}{x(x - 9)}$. Hemmeligheten er altså å alltid faktorisere og forkorte **før** du regner ut produktet.`,
    },
    {
      id: '1t-1-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva blir $\\frac{x}{2} \\div \\frac{2x}{3}$?',
        options: [
          { id: 'a', text: '$\\frac{x^2}{3}$', isCorrect: false },
          { id: 'b', text: '$\\frac{2}{3}$', isCorrect: false },
          { id: 'c', text: '$\\frac{3}{4}$', isCorrect: true },
          { id: 'd', text: '$\\frac{4}{3}$', isCorrect: false },
        ],
        solution: 'Vi snur den andre brøken og ganger: $\\frac{x}{2} \\cdot \\frac{3}{2x} = \\frac{3x}{4x}$. Vi stryker $x$ i teller og nevner og får $\\frac{3}{4}$.',
      },
    },
    { id: '1t-1-6-n-audio-3', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-6-narrativ-del3.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-6-n-section3',
      type: 'text',
      content: `## Å trekke sammen brøker med lik nevner

Nå skal vi legge sammen og trekke fra algebraiske brøker. Vi begynner med det enkleste tilfellet: brøker som allerede har **lik nevner**. Da legger vi bare sammen tellerne og beholder nevneren, akkurat som med vanlige brøker.

For eksempel: $\\frac{2x}{4} + \\frac{3x}{4} = \\frac{2x + 3x}{4} = \\frac{5x}{4}$. Enkelt nok. Men det finnes en felle du må passe deg for: når du **trekker fra** en brøk, må du huske å sette parentes rundt hele telleren du trekker fra.

Se på dette eksempelet: $\\frac{9x + 3y}{4x} - \\frac{x - 3y}{4x}$. Nevnerne er like, så vi skriver: $\\frac{9x + 3y - (x - 3y)}{4x}$. Parentesen er avgjørende! Uten den ville vi fått feil fortegn. Nå løser vi opp: $\\frac{9x + 3y - x + 3y}{4x} = \\frac{8x + 6y}{4x}$. Kan vi forkorte? Ja: $\\frac{8x + 6y}{4x} = \\frac{2(4x + 3y)}{2 \\cdot 2x} = \\frac{4x + 3y}{2x}$.

Et annet eksempel: $\\frac{x + 6}{2x + 1} - \\frac{3x - 4}{2x + 1}$. Lik nevner, så vi skriver: $\\frac{(x + 6) - (3x - 4)}{2x + 1} = \\frac{x + 6 - 3x + 4}{2x + 1} = \\frac{-2x + 10}{2x + 1}$.

Hva med tre brøker? Samme prinsipp: $\\frac{x}{3} + \\frac{2x}{3} - \\frac{3 - 6x}{3} = \\frac{x + 2x - (3 - 6x)}{3} = \\frac{x + 2x - 3 + 6x}{3} = \\frac{9x - 3}{3} = \\frac{3(3x - 1)}{3} = 3x - 1$. Her kunne vi til og med forkorte helt bort nevneren. Den viktigste lærdommen er: **sett alltid parentes når du trekker fra en brøk**, og vær nøye med fortegnene når du løser opp.`,
    },
    {
      id: '1t-1-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva blir $\\frac{2x}{3} - \\frac{8x}{3}$?',
        options: [
          { id: 'a', text: '$\\frac{6x}{3}$', isCorrect: false },
          { id: 'b', text: '$\\frac{-6x}{3}$', isCorrect: false },
          { id: 'c', text: '$-2x$', isCorrect: true },
          { id: 'd', text: '$2x$', isCorrect: false },
        ],
        solution: 'Vi trekker sammen tellerne: $\\frac{2x - 8x}{3} = \\frac{-6x}{3} = -2x$. Husk å forkorte til slutt: $-6$ delt på $3$ er $-2$.',
      },
    },
    { id: '1t-1-6-n-audio-4', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-6-narrativ-del4.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-6-n-section4',
      type: 'text',
      content: `## Fellesnevner og utviding

Hva gjør du når brøkene har **ulik nevner**? Da trenger du en **fellesnevner** – et uttrykk som begge nevnerne går opp i. Prinsippet er det samme som med tall: for å legge sammen $\\frac{1}{2}$ og $\\frac{1}{3}$ trenger du fellesnevneren $6$, og da utvider du $\\frac{1}{2}$ til $\\frac{3}{6}$ og $\\frac{1}{3}$ til $\\frac{2}{6}$.

La oss ta $\\frac{5x}{2y} + \\frac{3}{2}$. Nevnerne er $2y$ og $2$. Fellesnevneren er $2y$, fordi $2y$ allerede inneholder $2$. Vi trenger bare å utvide den andre brøken med $y$: $\\frac{5x}{2y} + \\frac{3y}{2y} = \\frac{5x + 3y}{2y}$.

Et litt mer komplisert eksempel: $\\frac{3}{2} + \\frac{1}{2x}$. Fellesnevneren er $2x$. Vi utvider den første brøken med $x$: $\\frac{3x}{2x} + \\frac{1}{2x} = \\frac{3x + 1}{2x}$.

Men hva med **utviding til en spesifikk nevner**? Tenk deg at du skal skrive $\\frac{3}{x - 2}$ med nevneren $x^2 - 4$. Vi vet at $x^2 - 4 = (x-2)(x+2)$, så vi må gange teller og nevner med $(x + 2)$: $\\frac{3}{x-2} = \\frac{3(x+2)}{(x-2)(x+2)} = \\frac{3x + 6}{x^2 - 4}$. Denne teknikken er helt sentral for å trekke sammen brøker der nevnerne inneholder polynomer.

Hva med enda større uttrykk? Ta $\\frac{4}{3xy} + \\frac{3x}{2y} - 2$. Fellesnevneren for $3xy$, $2y$ og $1$ er $6xy$. Vi utvider hver brøk: $\\frac{8}{6xy} + \\frac{9x^2}{6xy} - \\frac{12xy}{6xy} = \\frac{9x^2 - 12xy + 8}{6xy}$. Det ser kanskje overveldende ut, men teknikken er alltid den samme: finn fellesnevneren, utvid hver brøk, og trekk sammen tellerne.`,
    },
    {
      id: '1t-1-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er fellesnevneren for $\\frac{5}{x + 2}$ og $\\frac{1}{3}$?',
        options: [
          { id: 'a', text: '$3x + 6$', isCorrect: false },
          { id: 'b', text: '$3(x + 2)$', isCorrect: true },
          { id: 'c', text: '$x + 5$', isCorrect: false },
          { id: 'd', text: '$3x + 2$', isCorrect: false },
        ],
        solution: 'Fellesnevneren må inneholde begge nevnerne som faktorer. Nevnerne er $(x + 2)$ og $3$. De har ingen felles faktor, så fellesnevneren er produktet: $3(x + 2)$. Merk at $3(x+2) = 3x + 6$, men vi skriver den helst i faktorisert form.',
      },
    },
    { id: '1t-1-6-n-audio-5', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-6-narrativ-del5.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-6-n-section5',
      type: 'text',
      content: `## Brøker med polynomer i nevneren

Det siste og mest krevende steget er å trekke sammen brøker der nevnerne selv er polynomer som må faktoriseres for å finne fellesnevneren.

La oss starte med $\\frac{4}{x + 2} - 2$. Vi skriver $2$ som $\\frac{2}{1}$ og bruker fellesnevneren $(x + 2)$: $\\frac{4}{x+2} - \\frac{2(x+2)}{x+2} = \\frac{4 - (2x + 4)}{x+2} = \\frac{4 - 2x - 4}{x+2} = \\frac{-2x}{x+2}$. Igjen ser vi hvor viktig parentesen er: uten den hadde vi fått feil fortegn på $4$-leddet.

Hva med to brøker der begge har polynomer i nevneren? Ta $\\frac{2}{x - 4} - \\frac{1}{x + 4}$. Her er fellesnevneren $(x-4)(x+4)$, som også kan skrives som $x^2 - 16$. Vi utvider: $\\frac{2(x+4)}{(x-4)(x+4)} - \\frac{1(x-4)}{(x+4)(x-4)} = \\frac{2x + 8 - (x - 4)}{x^2 - 16} = \\frac{2x + 8 - x + 4}{x^2 - 16} = \\frac{x + 12}{x^2 - 16}$.

Noen ganger må du faktorisere en nevner for å oppdage at den inneholder en annen nevner som faktor. For eksempel: $\\frac{2}{x + 3} - \\frac{1}{2x + 6}$. Faktoriser den andre nevneren: $2x + 6 = 2(x + 3)$. Nå ser vi at fellesnevneren er $2(x+3)$. Vi utvider bare den første brøken: $\\frac{4}{2(x+3)} - \\frac{1}{2(x+3)} = \\frac{3}{2(x+3)}$.

Det finnes også tilfeller der du kan forkorte før du trekker sammen. Ta $3 - \\frac{x + 2}{x^2 + 2x}$. Faktoriser nevneren: $x^2 + 2x = x(x + 2)$. Da kan vi forkorte selve brøken: $\\frac{x+2}{x(x+2)} = \\frac{1}{x}$. Nå er oppgaven blitt $3 - \\frac{1}{x} = \\frac{3x}{x} - \\frac{1}{x} = \\frac{3x - 1}{x}$. Så hold øynene åpne for forenklingsmuligheter i hvert steg!`,
    },
    {
      id: '1t-1-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva blir $\\frac{2}{x + 2} + \\frac{3}{x - 2}$?',
        options: [
          { id: 'a', text: '$\\frac{5}{x^2 - 4}$', isCorrect: false },
          { id: 'b', text: '$\\frac{5x - 2}{x^2 - 4}$', isCorrect: false },
          { id: 'c', text: '$\\frac{5x + 10}{x^2 - 4}$', isCorrect: false },
          { id: 'd', text: '$\\frac{5x + 2}{x^2 - 4}$', isCorrect: true },
        ],
        solution: 'Fellesnevneren er $(x+2)(x-2) = x^2 - 4$. Vi utvider: $\\frac{2(x-2)}{x^2-4} + \\frac{3(x+2)}{x^2-4} = \\frac{2x - 4 + 3x + 6}{x^2 - 4} = \\frac{5x + 2}{x^2 - 4}$.',
      },
    },
    { id: '1t-1-6-n-audio-6', type: 'audio', title: 'Lytt til oppsummeringen', src: '/audio/1t/1t-1-6-narrativ-del6.mp3', description: 'Lydfil som leser opp oppsummeringen.' },
    {
      id: '1t-1-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært å mestre brøker med algebraiske uttrykk gjennom fire viktige teknikker.

**Forkorting** er det første steget i nesten alle oppgaver. Du faktoriserer teller og nevner, og stryker felles faktorer. Husk at du bare kan stryke faktorer, aldri enkeltledd som er koblet med pluss eller minus. For eksempel blir $\\frac{x^2 - 4}{x + 2} = \\frac{(x-2)(x+2)}{x+2} = x - 2$.

**Multiplikasjon og divisjon** er ofte overraskende greie. Ved multiplikasjon ganger du teller med teller og nevner med nevner, men det lønner seg å faktorisere og forkorte først. Ved divisjon snur du den andre brøken og ganger i stedet.

**Sammentrekning med lik nevner** krever bare at du legger sammen eller trekker fra tellerne. Det kritiske poenget er å sette parentes rundt telleren du trekker fra, slik at fortegnene blir riktige.

**Sammentrekning med ulik nevner** er den mest krevende teknikken. Du må finne fellesnevneren, utvide hver brøk slik at alle får samme nevner, og deretter trekke sammen tellerne. Når nevnerne inneholder polynomer, faktoriser dem først – det gjør det mye lettere å finne fellesnevneren. Og sjekk alltid om du kan forkorte til slutt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.7 NARRATIV: Mengdelære
// ============================================================================

export const CHAPTER_1T_1_7_NARRATIV: TextbookChapter = {
  id: '1t-1-7-narrativ',
  courseId: '1t',
  chapterNumber: '1.7',
  title: 'Mengdelære',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om samlinger av tall – hvordan matematikere sorterer tallene i familier, beskriver intervaller på tallinja, og kombinerer mengder med union, snitt og differanse.',
  estimatedMinutes: 40,
  competenceGoals: ['bruke matematisk notasjon til å beskrive mengder'],
  linkedChapterId: '1t-1-7',
  content: [
    { id: '1t-1-7-n-audio-1', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-7-narrativ-del1.mp3', description: 'Lydfil som leser opp teksten frem til første quiz.' },
    {
      id: '1t-1-7-n-intro',
      type: 'text',
      content: `## Å sortere tallenes verden

Forestill deg at du har en enorm samling med tall – alle tall som noensinne er blitt tenkt på. Hvordan holder du orden på dem? Matematikere løste dette for lenge siden ved å lage et system av **mengder**: samlinger av objekter som deler en bestemt egenskap. En mengde kan inneholde tall, punkter, eller hva som helst annet.

I dette kapittelet skal vi utforske fire store tallfamilier, lære å beskrive deler av tallinja med **intervaller**, kombinere mengder med **union** og **snitt**, fjerne elementer med **differanse**, og til slutt forstå **absoluttverdi** – begrepet som handler om avstand. Underveis skal vi bli kjent med symbolene som gjør at matematikere kan uttrykke seg presist og effektivt.`,
    },
    {
      id: '1t-1-7-n-section1',
      type: 'text',
      content: `## De fire store tallfamiliene

Tenk deg at tallene bor i et leilighetskompleks med fire etasjer. Jo høyere etasje, jo flere tall slipper inn.

I første etasje bor de **naturlige tallene**, $\\mathbb{N} = \\{1, 2, 3, 4, 5, ...\\}$. Dette er tallene vi lærer først som barn – tellerne, de positive heltallene. Du bruker dem hver gang du teller noe: tre epler, syv venner, tjueen poeng.

I andre etasje bor **heltallene**, $\\mathbb{Z} = \\{..., -2, -1, 0, 1, 2, ...\\}$. Her slipper vi inn null og de negative tallene. Bokstaven $\\mathbb{Z}$ kommer fra det tyske ordet «Zahlen», som betyr tall. Alle naturlige tall er heltall, men heltallene har i tillegg null og minustallene.

Tredje etasje er for de **rasjonale tallene**, $\\mathbb{Q}$. Et rasjonalt tall er ethvert tall som kan skrives som en brøk $\\frac{a}{b}$ der $a$ er et heltall og $b$ er et naturlig tall. Hit hører $\\frac{1}{2}$, $-\\frac{3}{4}$, $0{,}75$ (som er $\\frac{3}{4}$), og til og med $5$ (som er $\\frac{5}{1}$). Alle heltall er rasjonale, fordi du alltid kan sette $1$ i nevneren.

Øverste etasje er forbeholdt de **reelle tallene**, $\\mathbb{R}$ – alle tall på tallinja. Her finner vi også de **irrasjonale tallene**, som $\\sqrt{2}$, $\\pi$ og $e$. Disse tallene har uendelig mange desimaler uten gjentakende mønster, og kan aldri skrives som en brøk. Sammenhengen mellom familiene kan vi skrive slik: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$. Symbolet $\\subset$ betyr «er en delmengde av» – altså at alle tallene i den venstre mengden også finnes i den høyre.`,
    },
    {
      id: '1t-1-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken er den minste tallmengden $\\sqrt{9}$ tilhører?',
        options: [
          { id: 'a', text: '$\\mathbb{R}$ (reelle tall)', isCorrect: false },
          { id: 'b', text: '$\\mathbb{Q}$ (rasjonale tall)', isCorrect: false },
          { id: 'c', text: '$\\mathbb{N}$ (naturlige tall)', isCorrect: true },
          { id: 'd', text: '$\\mathbb{Z}$ (heltall)', isCorrect: false },
        ],
        solution: '$\\sqrt{9} = 3$, som er et naturlig tall. Selv om $3$ også er et heltall, rasjonalt tall og reelt tall, er $\\mathbb{N}$ den minste mengden det tilhører.',
      },
    },
    { id: '1t-1-7-n-audio-2', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-7-narrativ-del2.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-7-n-section2',
      type: 'text',
      content: `## Intervaller – å beskrive deler av tallinja

Nå vet vi hvilke tallfamilier som finnes. Men ofte trenger vi å snakke om en bestemt del av tallinja – for eksempel «alle tall mellom 2 og 7». Da bruker vi **intervaller**.

Et intervall er en sammenhengende strekning på tallinja, og vi beskriver det med klammer og parenteser. Klammer $[$ og $]$ betyr at endepunktet **er med**, mens vinkelparenteser $\\langle$ og $\\rangle$ betyr at endepunktet **ikke er med**.

La oss se på noen eksempler. $[2, 7]$ betyr alle tall fra og med $2$ til og med $7$, altså $2 \\leq x \\leq 7$. Derimot betyr $\\langle 2, 7 \\rangle$ alle tall *mellom* $2$ og $7$, men uten $2$ og $7$ selv: $2 < x < 7$. Du kan også blande: $[2, 7\\rangle$ betyr fra og med $2$ til (men ikke med) $7$, altså $2 \\leq x < 7$.

Hva når et intervall strekker seg uendelig langt? Da bruker vi pilsymboler: $\\langle 5, \\rightarrow \\rangle$ betyr alle tall som er *større enn* $5$, og $\\langle \\leftarrow, 10]$ betyr alle tall som er *mindre enn eller lik* $10$. Ved uendelig bruker vi alltid parenteser, aldri klammer – fordi uendelig ikke er et tall vi kan «inkludere».

Her er en huskeregel som kan hjelpe: tenk på klammene som en lukket dør (tallet er inne i mengden) og parentesene som en åpen dør (tallet slipper ikke inn). Så $[-3, 4\\rangle$ er et intervall der $-3$ er med (lukket dør til venstre), mens $4$ ikke er med (åpen dør til høyre). Ulikheten som hører til er $-3 \\leq x < 4$.

Vi kan også skrive mengder ved å **liste opp elementene** i klammeparenteser, for eksempel $\\{1, 2, 3, 4, 5\\}$, eller bruke **mengdebyggernotasjon**: $\\{x \\in \\mathbb{Z} \\mid x > 0 \\text{ og } x \\leq 5\\}$, der $\\mid$ betyr «slik at». Begge uttrykker det samme.`,
    },
    {
      id: '1t-1-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvordan skriver vi «alle tall fra og med $-3$ til $4$ (uten 4)» med intervallnotasjon?',
        options: [
          { id: 'a', text: '$\\langle -3, 4 \\rangle$', isCorrect: false },
          { id: 'b', text: '$[-3, 4]$', isCorrect: false },
          { id: 'c', text: '$\\langle -3, 4]$', isCorrect: false },
          { id: 'd', text: '$[-3, 4\\rangle$', isCorrect: true },
        ],
        solution: 'Vi skal ha med $-3$ (klammer til venstre) og uten $4$ (parenteser til høyre). Det gir $[-3, 4\\rangle$, som tilsvarer ulikheten $-3 \\leq x < 4$.',
      },
    },
    { id: '1t-1-7-n-audio-3', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-7-narrativ-del3.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-7-n-section3',
      type: 'text',
      content: `## Union, snitt og differanse

Nå som vi kan beskrive mengder, er neste steg å **kombinere** dem. Tenk deg at du har to vennegjengar – gjeng $A$ og gjeng $B$. Noen er bare med i den ene, noen er med i begge.

**Unionen** $A \\cup B$ er alle som er med i minst én av gjengene – det tilsvarer «eller» i dagligspråket. Hvis $A = [2, 6]$ og $B = [4, 9]$, dekker $A$ tallinja fra $2$ til $6$ og $B$ dekker fra $4$ til $9$. Slår vi dem sammen, dekker vi alt fra $2$ til $9$: $A \\cup B = [2, 9]$.

**Snittet** $A \\cap B$ er alle som er med i *begge* gjengene – det tilsvarer «og». Med samme $A$ og $B$ inneholder begge mengdene tallene fra $4$ til $6$: $A \\cap B = [4, 6]$.

**Differansen** $A \\setminus B$ er alle som er i $A$ men *ikke* i $B$ – de som er med i gjeng $A$ men som aldri har blitt med i gjeng $B$. Med $A = [1, 7]$ og $B = [4, 10]$ beholder vi bare den delen av $A$ som $B$ ikke dekker: $A \\setminus B = [1, 4\\rangle$. Legg merke til den åpne parentesen ved $4$ – akkurat på grensen tipper vi over i $B$, så $4$ selv er ikke med.

La oss ta et eksempel med uendelige intervaller. Sett $A = \\langle -\\infty, 3]$ og $B = \\langle 1, \\infty \\rangle$. Unionen $A \\cup B$ er alle reelle tall $\\mathbb{R}$, fordi $A$ dekker alt til og med $3$, og $B$ dekker alt over $1$ – sammen dekker de hele tallinja. Snittet $A \\cap B$ er tallene som er i begge: $\\langle 1, 3]$, altså tallene som er både større enn $1$ og mindre enn eller lik $3$.

Til slutt: to mengder som ikke overlapper i det hele tatt kalles **disjunkte**. Da er snittet den tomme mengden $\\emptyset$. For eksempel er $[1, 3]$ og $[5, 7]$ disjunkte fordi $[1, 3] \\cap [5, 7] = \\emptyset$.`,
    },
    {
      id: '1t-1-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'La $A = [1, 5]$ og $B = [3, 8]$. Hva er $A \\cap B$?',
        options: [
          { id: 'a', text: '$[1, 8]$', isCorrect: false },
          { id: 'b', text: '$[1, 3]$', isCorrect: false },
          { id: 'c', text: '$[3, 5]$', isCorrect: true },
          { id: 'd', text: '$[5, 8]$', isCorrect: false },
        ],
        solution: 'Snittet $A \\cap B$ er tallene som er i begge mengder. $A$ går fra $1$ til $5$ og $B$ går fra $3$ til $8$. Overlappet er fra $3$ til $5$, altså $[3, 5]$.',
      },
    },
    { id: '1t-1-7-n-audio-4', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-7-narrativ-del4.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-7-n-section4',
      type: 'text',
      content: `## Absoluttverdi – avstand på tallinja

Nå skal vi se på et begrep som virker enkelt, men som er overraskende kraftig: **absoluttverdien**. Absoluttverdien til et tall er rett og slett **avstanden** fra tallet til null på tallinja. Den skrives med loddrette streker: $|x|$.

Siden avstand alltid er positiv (eller null), er absoluttverdien aldri negativ. $|5| = 5$ fordi $5$ ligger fem enheter fra null. $|-7| = 7$ fordi $-7$ også ligger syv enheter fra null – bare i motsatt retning. Formelt defineres det slik: $|x| = x$ hvis $x \\geq 0$, og $|x| = -x$ hvis $x < 0$. Det siste kan forvirre: $-x$ betyr ikke «et negativt tall», det betyr «det motsatte av $x$». Hvis $x = -7$, blir $-x = -(-7) = 7$.

Du kan også ha uttrykk inne i absoluttverditegnene. $|3 - 8| = |-5| = 5$. Regn ut det som er inni først, og ta deretter absoluttverdien.

Hva med regneoperasjoner? $|-2| + |4| = 2 + 4 = 6$. Du tar absoluttverdien av hvert tall for seg, og regner deretter som vanlig. Men vær forsiktig: $|-4| - |-6| = 4 - 6 = -2$. Resultatet av en regning med absoluttverdier kan godt bli negativt – det er bare selve absoluttverdien av ett enkelt tall som aldri er negativ.

Du kan til og med ha absoluttverdier inni absoluttverdier: $||-7| - |3|| = |7 - 3| = |4| = 4$. Regn innenfra og ut, lag for lag.

Når vi kjenner fortegnet til en variabel, kan vi forenkle. Vet vi at $a > 0$, er $|a| = a$ og $|-a| = a$. Dermed er $|a| + |-a| = a + a = 2a$.`,
    },
    {
      id: '1t-1-7-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva blir $|3 - 8| + |-2|$?',
        options: [
          { id: 'a', text: '$3$', isCorrect: false },
          { id: 'b', text: '$-3$', isCorrect: false },
          { id: 'c', text: '$7$', isCorrect: true },
          { id: 'd', text: '$9$', isCorrect: false },
        ],
        solution: 'Vi regner ut steg for steg: $|3 - 8| = |-5| = 5$ og $|-2| = 2$. Dermed er $5 + 2 = 7$.',
      },
    },
    { id: '1t-1-7-n-audio-5', type: 'audio', title: 'Lytt til denne delen', src: '/audio/1t/1t-1-7-narrativ-del5.mp3', description: 'Lydfil som leser opp teksten frem til neste quiz.' },
    {
      id: '1t-1-7-n-section5',
      type: 'text',
      content: `## Absoluttverdier og mengder – å koble alt sammen

Nå har vi alle brikkene, og det er på tide å se hvordan de henger sammen. Absoluttverdier kan nemlig brukes til å beskrive mengder og intervaller på en elegant måte.

Tenk over hva $|x| < 3$ betyr. Det betyr at avstanden fra $x$ til null er mindre enn $3$. Hvilke tall oppfyller det? Alle tall mellom $-3$ og $3$: $-3 < x < 3$. Som intervall skriver vi det $\\langle -3, 3 \\rangle$. Absoluttverdien oversetter altså «avstand mindre enn» til et åpent intervall rundt null.

Hva med $|x - 2| < 2$? Nå spør vi: hvilke tall har avstand mindre enn $2$ fra tallet $2$? Vi kan sette opp ulikheten $-2 < x - 2 < 2$, og legger til $2$ på alle sider: $0 < x < 4$. Mengden er $\\langle 0, 4 \\rangle$.

Nå kan vi kombinere dette med det vi lærte om snitt. La $A = \\{x \\in \\mathbb{R} \\mid |x| < 3\\} = \\langle -3, 3 \\rangle$ og $B = \\{x \\in \\mathbb{R} \\mid |x - 2| < 2\\} = \\langle 0, 4 \\rangle$. Da er snittet $A \\cap B = \\langle 0, 3 \\rangle$ – tallene som er i begge mengder. Og for å sjekke: hvilke tall er både nærmere enn $3$ fra null og nærmere enn $2$ fra $2$? Nettopp tallene mellom $0$ og $3$.

La oss også repetere de viktigste symbolene vi har lært. $\\in$ betyr «er element i» (for eksempel $5 \\in \\mathbb{N}$). $\\notin$ betyr «er ikke element i» (for eksempel $-3 \\notin \\mathbb{N}$). $\\subset$ betyr «er en delmengde av» (for eksempel $\\mathbb{N} \\subset \\mathbb{Z}$). Og $\\emptyset$ er den tomme mengden – en mengde uten elementer.

Mengdelære er språket matematikere bruker for å snakke presist om samlinger av tall. Når du behersker intervaller, union, snitt og absoluttverdi, har du et verktøy som kommer til å dukke opp igjen og igjen – i likninger, ulikheter, funksjonsanalyse og langt videre i matematikken.`,
    },
    {
      id: '1t-1-7-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-1-7-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Mengden $\\{x \\in \\mathbb{R} \\mid |x| < 3\\}$ kan skrives som intervallet:',
        options: [
          { id: 'a', text: '$[0, 3]$', isCorrect: false },
          { id: 'b', text: '$\\langle -3, 3 \\rangle$', isCorrect: true },
          { id: 'c', text: '$[-3, 3]$', isCorrect: false },
          { id: 'd', text: '$\\langle 0, 3 \\rangle$', isCorrect: false },
        ],
        solution: '$|x| < 3$ betyr at avstanden fra $x$ til null er strengt mindre enn $3$. Det gir $-3 < x < 3$, som er intervallet $\\langle -3, 3 \\rangle$. Vi bruker åpne parenteser fordi $-3$ og $3$ selv ikke er med (avstanden er da nøyaktig $3$, ikke mindre enn).',
      },
    },
    { id: '1t-1-7-n-audio-6', type: 'audio', title: 'Lytt til oppsummeringen', src: '/audio/1t/1t-1-7-narrativ-del6.mp3', description: 'Lydfil som leser opp oppsummeringen.' },
    {
      id: '1t-1-7-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket mengdelærens viktigste begreper.

**Tallmengdene** danner et hierarki: de naturlige tallene $\\mathbb{N} = \\{1, 2, 3, ...\\}$ er de enkleste, deretter kommer heltallene $\\mathbb{Z}$ (med null og negative tall), de rasjonale tallene $\\mathbb{Q}$ (alt som kan skrives som brøk), og til slutt de reelle tallene $\\mathbb{R}$ (som også inkluderer irrasjonale tall som $\\sqrt{2}$ og $\\pi$). Sammenhengen er $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.

**Intervaller** lar oss beskrive sammenhengende deler av tallinja. Klammer $[$ og $]$ betyr at endepunktet er med, parenteser $\\langle$ og $\\rangle$ betyr at det ikke er med. Ved uendelig bruker vi alltid parenteser.

**Union** ($\\cup$) gir oss alle elementer som er i minst én av mengdene. **Snitt** ($\\cap$) gir oss bare elementene som er i begge. **Differanse** ($A \\setminus B$) gir elementene som er i $A$ men ikke i $B$. To mengder uten felles elementer kalles disjunkte, og snittet deres er den tomme mengden $\\emptyset$.

**Absoluttverdien** $|x|$ er avstanden fra $x$ til null på tallinja. Den er alltid positiv eller null. Absoluttverdier kan brukes til å beskrive intervaller: $|x| < a$ svarer til intervallet $\\langle -a, a \\rangle$, og $|x - c| < r$ beskriver alle tall med avstand mindre enn $r$ fra $c$.`,
    },
  ],
  exercises: [],
};
