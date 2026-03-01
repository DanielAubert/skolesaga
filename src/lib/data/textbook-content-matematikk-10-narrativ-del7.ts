/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 7
 *
 * Kapittel 7.1: Tallmengder og tallsystemer
 * Kapittel 7.2: Standardform
 * Kapittel 7.3: Primtall og primtallsfaktorisering
 * Kapittel 7.4: Forholdstall og proporsjonalitet
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1 NARRATIV: Tallmengder og tallsystemer
// ============================================================================

export const CHAPTER_10_7_1_NARRATIV: TextbookChapter = {
  id: '10-7-1-narrativ',
  courseId: '10',
  chapterNumber: '7.1',
  title: 'Tallmengder og tallsystemer',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av tallmengdene -- fra naturlige tall til reelle tall -- der vi utforsker hvordan matematikere har organisert tallverdenen i lag på lag med stadig større familier.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  linkedChapterId: '10-7-1',
  content: [
    {
      id: '10-7-1-n-intro',
      type: 'text',
      content: `## Tallenes familie

Tenk deg at du rydder i et klesskap. Innerst har du en liten skuff med sokker. Den skuffen er inne i en større skuff for undertoy. Og hele seksjonen er inne i en enda større del av skapet. Slik er det med tall også. Matematikere har organisert alle tall i **tallmengder** -- grupper av tall med felles egenskaper. Noen tallmengder er helt inne i andre, akkurat som den minste skuffen er inne i den største.

Vi starter innerst og jobber oss utover.`,
    },

    {
      id: '10-7-1-n-section1',
      type: 'text',
      content: `## De naturlige tallene og de hele tallene

De aller første tallene du lærte som barn, var telletallene: $1, 2, 3, 4, 5, \\ldots$ Disse kaller vi **naturlige tall**, og vi bruker symbolet $\\mathbb{N}$. I norsk skole regner vi som regel også $0$ med, slik at $\\mathbb{N}_0 = \\{0, 1, 2, 3, 4, \\ldots\\}$. Naturlige tall er det vi bruker når vi teller ting: tre epler, syv elever, tolv måneder.

Men hva om du skylder noen penger? Da trenger du negative tall. Når vi legger til $\\ldots, -3, -2, -1$ foran de naturlige tallene, får vi **hele tall**, med symbolet $\\mathbb{Z}$ (fra det tyske ordet *Zahlen*, som betyr «tall»):

$$\\mathbb{Z} = \\{\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots\\}$$

Alle naturlige tall er også hele tall -- men ikke omvendt. Tallet $-5$ er et helt tall, men det er ikke naturlig. Og tall som $0{,}5$ eller $\\frac{2}{3}$ er verken naturlige eller hele tall, for de ligger «mellom» heltallene.`,
    },

    {
      id: '10-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på naturlige tall og hele tall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-7-1-n-quiz1-q0',
            task: 'Hvilket av disse tallene er et naturlig tall (med $\\mathbb{N}_0$)?',
            options: [
              { id: 'a', text: '$-4$', isCorrect: false },
              { id: 'b', text: '$0{,}5$', isCorrect: false },
              { id: 'c', text: '$0$', isCorrect: true },
              { id: 'd', text: '$-1$', isCorrect: false },
            ],
            solution: '$0$ tilhører $\\mathbb{N}_0$ fordi vi i norsk skole inkluderer null blant de naturlige tallene. De andre er enten negative eller desimaltall.',
          },
          {
            id: '10-7-1-n-quiz1-q1',
            task: 'Hvilken påstand er riktig?',
            options: [
              { id: 'a', text: 'Alle hele tall er naturlige tall', isCorrect: false },
              { id: 'b', text: 'Alle naturlige tall er hele tall', isCorrect: true },
              { id: 'c', text: '$-3$ er et naturlig tall', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{2}$ er et helt tall', isCorrect: false },
            ],
            solution: 'Naturlige tall er en delmengde av hele tall. Alle naturlige tall er hele tall, men hele tall inkluderer også de negative heltallene, så det går ikke andre veien.',
          },
        ],
      },
    },

    {
      id: '10-7-1-n-section2',
      type: 'text',
      content: `## Rasjonale tall -- brokenes verden

Hva om du vil dele en pizza på tre? Da trenger du $\\frac{1}{3}$, som ikke er et helt tall. Tall som kan skrives som en brok $\\frac{a}{b}$ der $a$ og $b$ er hele tall og $b \\neq 0$, kalles **rasjonale tall**. Symbolet er $\\mathbb{Q}$ (fra *quotient*, som betyr resultat av divisjon):

$$\\mathbb{Q} = \\left\\{ \\frac{a}{b} \\,\\middle|\\, a \\in \\mathbb{Z}, \\, b \\in \\mathbb{Z}, \\, b \\neq 0 \\right\\}$$

Et viktig poeng: alle hele tall er også rasjonale, fordi $5 = \\frac{5}{1}$. Rasjonale tall har en viktig egenskap: desimalutviklingen er enten **endelig** (som $\\frac{3}{4} = 0{,}75$) eller **periodisk** (som $\\frac{1}{3} = 0{,}333\\ldots$). Periodisk betyr at et mønster av siffer gjentar seg i det uendelige.

Du kan også gå den andre veien og gjøre om periodiske desimaltall til broker. Skal du for eksempel finne broken for $0{,}\\overline{36} = 0{,}363636\\ldots$, setter du $x = 0{,}363636\\ldots$, ganger med $100$ (fordi perioden har to siffer) og får $100x = 36{,}363636\\ldots$. Trekker du fra, gir $99x = 36$, så $x = \\frac{36}{99} = \\frac{4}{11}$.`,
    },

    {
      id: '10-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på rasjonale tall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-7-1-n-quiz2-q0',
            task: 'Hva er $\\frac{5}{8}$ som desimaltall?',
            options: [
              { id: 'a', text: '$0{,}58$', isCorrect: false },
              { id: 'b', text: '$0{,}625$', isCorrect: true },
              { id: 'c', text: '$0{,}65$', isCorrect: false },
              { id: 'd', text: '$1{,}6$', isCorrect: false },
            ],
            solution: '$\\frac{5}{8} = 5 \\div 8 = 0{,}625$. Vi deler telleren på nevneren for å fa desimaltallet.',
          },
          {
            id: '10-7-1-n-quiz2-q1',
            task: 'Tallet $0{,}\\overline{27} = 0{,}272727\\ldots$ er lik hvilken brok?',
            options: [
              { id: 'a', text: '$\\frac{27}{100}$', isCorrect: false },
              { id: 'b', text: '$\\frac{27}{99}$', isCorrect: false },
              { id: 'c', text: '$\\frac{3}{11}$', isCorrect: true },
              { id: 'd', text: '$\\frac{9}{33}$', isCorrect: false },
            ],
            solution: 'La $x = 0{,}2727\\ldots$. Da er $100x = 27{,}2727\\ldots$. Trekker vi fra: $99x = 27$, så $x = \\frac{27}{99} = \\frac{3}{11}$. Alternativ b) er ikke forenklet.',
          },
          {
            id: '10-7-1-n-quiz2-q2',
            task: 'Hvorfor er $\\frac{1}{3} = 0{,}333\\ldots$ et rasjonalt tall selv om desimalen er uendelig?',
            options: [
              { id: 'a', text: 'Fordi det er et lite tall', isCorrect: false },
              { id: 'b', text: 'Fordi desimalutviklingen er periodisk', isCorrect: true },
              { id: 'c', text: 'Fordi det er positivt', isCorrect: false },
              { id: 'd', text: 'Fordi det er større enn null', isCorrect: false },
            ],
            solution: 'Et tall er rasjonalt så lenge desimalutviklingen er endelig eller periodisk. $0{,}333\\ldots$ er periodisk (bare 3-ere gjentar seg), så det er rasjonalt.',
          },
        ],
      },
    },

    {
      id: '10-7-1-n-section3',
      type: 'text',
      content: `## Irrasjonale tall og reelle tall

Finnes det tall som *ikke* kan skrives som brok? Ja, og de kalles **irrasjonale tall**. Desimalutviklingen deres er uendelig og aldri periodisk -- sifrene fortsetter for alltid uten at noe mønster gjentar seg.

De mest kjente irrasjonale tallene er:
- $\\pi = 3{,}14159265358979\\ldots$ -- forholdet mellom omkrets og diameter i en sirkel
- $\\sqrt{2} = 1{,}41421356\\ldots$ -- diagonalen i et kvadrat med sidelengde $1$
- $\\sqrt{3} = 1{,}73205080\\ldots$
- Eulers tall $e = 2{,}71828182\\ldots$
- Det gylne snitt $\\varphi = \\frac{1 + \\sqrt{5}}{2} = 1{,}61803398\\ldots$

En viktig huskeregel: $\\sqrt{4} = 2$ er *ikke* irrasjonalt, fordi svaret er et helt tall. Det er bare kvadratrotter av tall som **ikke** er perfekte kvadrater ($\\sqrt{2}$, $\\sqrt{3}$, $\\sqrt{5}$, $\\sqrt{7}$, ...) som gir irrasjonale tall.

Pass også på å skille mellom $\\pi$ og tilnærminger til $\\pi$. Broken $\\frac{22}{7} = 3{,}142857142857\\ldots$ er *rasjonalt* (periodisk desimal), men den er bare en tilnærming til $\\pi$. Selve $\\pi$ er irrasjonalt.

Når vi samler alle rasjonale og irrasjonale tall, får vi **reelle tall** ($\\mathbb{R}$). Tallmengdene henger sammen som bokser inni hverandre:

$$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$$

De irrasjonale tallene fyller «resten» av de reelle tallene -- alt på tallinja som ikke er rasjonalt.`,
    },

    {
      id: '10-7-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-7-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på irrasjonale og reelle tall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-7-1-n-quiz3-q0',
            task: 'Hvilket av disse tallene er irrasjonalt?',
            options: [
              { id: 'a', text: '$\\frac{1}{3} = 0{,}333\\ldots$', isCorrect: false },
              { id: 'b', text: '$\\sqrt{16} = 4$', isCorrect: false },
              { id: 'c', text: '$0{,}125$', isCorrect: false },
              { id: 'd', text: '$\\sqrt{5}$', isCorrect: true },
            ],
            solution: '$\\sqrt{5} = 2{,}2360679\\ldots$ har en uendelig, ikke-periodisk desimalutvikling og kan ikke skrives som brok. De andre er alle rasjonale.',
          },
          {
            id: '10-7-1-n-quiz3-q1',
            task: 'I hvilken minste tallmengde hører $-\\frac{7}{4}$?',
            options: [
              { id: 'a', text: '$\\mathbb{N}$ (naturlig tall)', isCorrect: false },
              { id: 'b', text: '$\\mathbb{Z}$ (helt tall)', isCorrect: false },
              { id: 'c', text: '$\\mathbb{Q}$ (rasjonalt tall)', isCorrect: true },
              { id: 'd', text: 'Irrasjonalt tall', isCorrect: false },
            ],
            solution: '$-\\frac{7}{4} = -1{,}75$ er en negativ brok. Det er ikke et helt tall, men det kan skrives som brok med hele tall i teller og nevner. Derfor tilhører det $\\mathbb{Q}$.',
          },
          {
            id: '10-7-1-n-quiz3-q2',
            task: 'Hva er riktig om $\\sqrt{49}$?',
            options: [
              { id: 'a', text: 'Det er irrasjonalt', isCorrect: false },
              { id: 'b', text: 'Det er et rasjonalt tall, men ikke et helt tall', isCorrect: false },
              { id: 'c', text: 'Det er et naturlig tall', isCorrect: true },
              { id: 'd', text: 'Det finnes ikke', isCorrect: false },
            ],
            solution: '$\\sqrt{49} = 7$, som er et naturlig tall. Siden $49$ er et perfekt kvadrattall, gir kvadratroten et helt tall.',
          },
          {
            id: '10-7-1-n-quiz3-q3',
            task: 'Er summen av to irrasjonale tall alltid irrasjonalt?',
            options: [
              { id: 'a', text: 'Ja, alltid', isCorrect: false },
              { id: 'b', text: 'Nei, for eksempel er $\\sqrt{2} + (-\\sqrt{2}) = 0$', isCorrect: true },
              { id: 'c', text: 'Ja, men bare for positive tall', isCorrect: false },
              { id: 'd', text: 'Nei, summen er alltid rasjonalt', isCorrect: false },
            ],
            solution: 'Nei! $\\sqrt{2} + (-\\sqrt{2}) = 0$ er rasjonalt. Summen av to irrasjonale tall *kan* vaere rasjonalt. Man trenger bare ett moteksempel for å motbevise en påstand.',
          },
        ],
      },
    },

    {
      id: '10-7-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har utforsket tallenes familie -- fra de enkleste telletallene til de mystiske irrasjonale tallene:

| Symbol | Tallmengde | Eksempler |
|--------|------------|-----------|
| $\\mathbb{N}$ | Naturlige tall | $0, 1, 2, 3, \\ldots$ |
| $\\mathbb{Z}$ | Hele tall | $\\ldots, -2, -1, 0, 1, 2, \\ldots$ |
| $\\mathbb{Q}$ | Rasjonale tall | $\\frac{1}{2}, -\\frac{3}{7}, 0{,}75, 0{,}\\overline{3}$ |
| -- | Irrasjonale tall | $\\sqrt{2}, \\pi, e$ |
| $\\mathbb{R}$ | Reelle tall | Alle tall på tallinja |

Tallmengdene er nestet: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$. Rasjonale tall har endelig eller periodisk desimalutvikling, mens irrasjonale tall har uendelig og ikke-periodisk desimalutvikling. Sammen utgjør rasjonale og irrasjonale tall de reelle tallene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2 NARRATIV: Standardform
// ============================================================================

export const CHAPTER_10_7_2_NARRATIV: TextbookChapter = {
  id: '10-7-2-narrativ',
  courseId: '10',
  chapterNumber: '7.2',
  title: 'Standardform',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av standardform (vitenskapelig notasjon) -- hvorfor vi trenger det, hvordan vi skriver tall på standardform, og hvordan vi regner med ekstremt store og små tall.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  linkedChapterId: '10-7-2',
  content: [
    {
      id: '10-7-2-n-intro',
      type: 'text',
      content: `## Når tall sprenger grensene

Avstanden fra Jorda til Sola er omtrent $149\\,600\\,000\\,000$ meter. Massen til et vannmolekyl er rundt $0{,}000\\,000\\,000\\,000\\,000\\,000\\,000\\,03$ kg. Bare det å lese disse tallene er en utfordring -- og å regne med dem for hand er nesten umulig. Heldigvis har vitenskapsfolk funnet en elegant løsning: **standardform**, også kalt vitenskapelig notasjon.

I stedet for å skrive ut alle nullene, bruker vi tierpotenser til å gjøre tallene kompakte og lesbare.`,
    },

    {
      id: '10-7-2-n-section1',
      type: 'text',
      content: `## Hva er standardform?

Et tall er på **standardform** når det skrives som:

$$a \\times 10^n$$

der $1 \\leq a < 10$ (nøyaktig ett siffer foran kommaet, og det sifferet er ikke $0$) og $n$ er et helt tall.

For eksempel er $3{,}5 \\times 10^8$ på standardform fordi $3{,}5$ ligger mellom $1$ og $10$. Men $35 \\times 10^7$ er *ikke* standardform (fordi $35 \\geq 10$), og $0{,}35 \\times 10^9$ er heller ikke det (fordi $0{,}35 < 1$).

Tierpotensene fungerer som en «zoomeknapp»: $10^1 = 10$, $10^2 = 100$, $10^3 = 1000$, og så videre. For små tall går vi den andre veien: $10^{-1} = 0{,}1$, $10^{-2} = 0{,}01$, $10^{-3} = 0{,}001$. Og $10^0 = 1$ -- utgangspunktet.

**For store tall** flytter du kommaet til venstre til det står ett siffer foran, og teller antall plasser. Tallet $4\\,700\\,000$ blir $4{,}7 \\times 10^6$ fordi kommaet flyttes $6$ plasser. **For små tall** flytter du kommaet til høyre, og eksponenten blir negativ: $0{,}00045$ blir $4{,}5 \\times 10^{-4}$ fordi kommaet flyttes $4$ plasser til høyre.

For å gå tilbake fra standardform til vanlig tall gjør du det motsatte: positiv eksponent betyr at du flytter kommaet til høyre ($2{,}5 \\times 10^4 = 25\\,000$), og negativ eksponent betyr at du flytter til venstre ($3{,}7 \\times 10^{-3} = 0{,}0037$).`,
    },

    {
      id: '10-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på standardform:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-7-2-n-quiz1-q0',
            task: 'Hva er $56\\,000$ på standardform?',
            options: [
              { id: 'a', text: '$56 \\times 10^3$', isCorrect: false },
              { id: 'b', text: '$5{,}6 \\times 10^4$', isCorrect: true },
              { id: 'c', text: '$0{,}56 \\times 10^5$', isCorrect: false },
              { id: 'd', text: '$5{,}6 \\times 10^3$', isCorrect: false },
            ],
            solution: 'Vi flytter kommaet $4$ plasser til venstre: $56\\,000 = 5{,}6 \\times 10^4$. Alternativ a) har $56 \\geq 10$ og er ikke standardform.',
          },
          {
            id: '10-7-2-n-quiz1-q1',
            task: 'Hva er $0{,}000\\,000\\,52$ på standardform?',
            options: [
              { id: 'a', text: '$5{,}2 \\times 10^{-8}$', isCorrect: false },
              { id: 'b', text: '$52 \\times 10^{-8}$', isCorrect: false },
              { id: 'c', text: '$5{,}2 \\times 10^{-7}$', isCorrect: true },
              { id: 'd', text: '$5{,}2 \\times 10^{7}$', isCorrect: false },
            ],
            solution: 'Vi flytter kommaet $7$ plasser til høyre for å fa $5{,}2$. Siden tallet er lite, blir eksponenten negativ: $5{,}2 \\times 10^{-7}$.',
          },
          {
            id: '10-7-2-n-quiz1-q2',
            task: 'Hva er $9{,}8 \\times 10^7$ som vanlig tall?',
            options: [
              { id: 'a', text: '$980\\,000$', isCorrect: false },
              { id: 'b', text: '$98\\,000\\,000$', isCorrect: true },
              { id: 'c', text: '$9\\,800\\,000$', isCorrect: false },
              { id: 'd', text: '$9{,}8000000$', isCorrect: false },
            ],
            solution: 'Positiv eksponent $7$ betyr at vi flytter kommaet $7$ plasser til høyre: $9{,}8 \\times 10^7 = 98\\,000\\,000$.',
          },
        ],
      },
    },

    {
      id: '10-7-2-n-section2',
      type: 'text',
      content: `## Regning med standardform

Når du skal **multiplisere** tall på standardform, ganger du $a$-verdiene for seg og adderer eksponentene:

$$(a \\times 10^m) \\cdot (b \\times 10^n) = (a \\cdot b) \\times 10^{m+n}$$

For eksempel: $(3 \\times 10^4) \\cdot (2 \\times 10^5) = 6 \\times 10^9$. Enkelt!

Når du skal **dividere**, deler du $a$-verdiene og subtraherer eksponentene:

$$\\frac{a \\times 10^m}{b \\times 10^n} = \\frac{a}{b} \\times 10^{m-n}$$

Men her må du vare obs: sjekk alltid at svaret er på riktig standardform! Hvis $a \\cdot b \\geq 10$, må du justere. For eksempel: $(5 \\times 10^6) \\cdot (7 \\times 10^3) = 35 \\times 10^9$. Men $35 \\geq 10$, så vi skriver om til $3{,}5 \\times 10^{10}$. Tilsvarende, hvis $\\frac{a}{b} < 1$, justerer du den andre veien: $\\frac{3{,}6 \\times 10^{-2}}{9 \\times 10^{-5}} = 0{,}4 \\times 10^3 = 4 \\times 10^2$.

Disse reglene gjør det mulig å handtere vanvittig store og små tall. Et lysars avstand er $3 \\times 10^8$ m/s ganger $3{,}15 \\times 10^7$ sekunder $= 9{,}45 \\times 10^{15}$ meter. Sola er omtrent $\\frac{2 \\times 10^{30}}{6 \\times 10^{24}} \\approx 3{,}3 \\times 10^5$ ganger tyngre enn Jorda -- altså rundt $330\\,000$ ganger!`,
    },

    {
      id: '10-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på regning med standardform:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-7-2-n-quiz2-q0',
            task: 'Hva er $(4 \\times 10^3) \\cdot (2 \\times 10^5)$ på standardform?',
            options: [
              { id: 'a', text: '$8 \\times 10^{15}$', isCorrect: false },
              { id: 'b', text: '$8 \\times 10^8$', isCorrect: true },
              { id: 'c', text: '$6 \\times 10^8$', isCorrect: false },
              { id: 'd', text: '$8 \\times 10^2$', isCorrect: false },
            ],
            solution: 'Vi ganger $a$-verdiene: $4 \\cdot 2 = 8$. Vi adderer eksponentene: $3 + 5 = 8$. Svaret er $8 \\times 10^8$.',
          },
          {
            id: '10-7-2-n-quiz2-q1',
            task: 'Hva er $(6 \\times 10^5) \\cdot (8 \\times 10^7)$ på standardform?',
            options: [
              { id: 'a', text: '$48 \\times 10^{12}$', isCorrect: false },
              { id: 'b', text: '$4{,}8 \\times 10^{12}$', isCorrect: false },
              { id: 'c', text: '$4{,}8 \\times 10^{13}$', isCorrect: true },
              { id: 'd', text: '$14 \\times 10^{12}$', isCorrect: false },
            ],
            solution: '$6 \\cdot 8 = 48$ og $10^{5+7} = 10^{12}$, så vi får $48 \\times 10^{12}$. Men $48 \\geq 10$, så vi justerer: $4{,}8 \\times 10^{13}$.',
          },
          {
            id: '10-7-2-n-quiz2-q2',
            task: 'Hva er $\\frac{9 \\times 10^{12}}{3 \\times 10^4}$?',
            options: [
              { id: 'a', text: '$3 \\times 10^3$', isCorrect: false },
              { id: 'b', text: '$3 \\times 10^{16}$', isCorrect: false },
              { id: 'c', text: '$3 \\times 10^8$', isCorrect: true },
              { id: 'd', text: '$27 \\times 10^8$', isCorrect: false },
            ],
            solution: 'Vi deler $a$-verdiene: $9 / 3 = 3$. Vi subtraherer eksponentene: $12 - 4 = 8$. Svaret er $3 \\times 10^8$.',
          },
        ],
      },
    },

    {
      id: '10-7-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Standardform ($a \\times 10^n$ der $1 \\leq a < 10$) er et uunnvarlig verktøy for å handtere ekstremt store og små tall. Store tall gir positiv eksponent, små tall gir negativ eksponent. Ved multiplikasjon adderer vi eksponentene, ved divisjon subtraherer vi dem. Husk alltid å sjekke at $a$-verdien er mellom $1$ og $10$ i svaret.

Standardform brukes mye i naturvitenskap, astronomi og teknologi -- overalt der tallene sprenger grensene for hva vi kan skrive ut med vanlige sifre.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3 NARRATIV: Primtall og primtallsfaktorisering
// ============================================================================

export const CHAPTER_10_7_3_NARRATIV: TextbookChapter = {
  id: '10-7-3-narrativ',
  courseId: '10',
  chapterNumber: '7.3',
  title: 'Primtall og primtallsfaktorisering',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende utforskning av primtall -- tallenes byggesteiner -- der vi oppdager Eratosthenes\' sil, primtallsfaktorisering, og de praktiske verktøyene SFF og MFF.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske matematiske eigenskapar og samanhengar ved å bruke programmering',
  ],
  linkedChapterId: '10-7-3',
  content: [
    {
      id: '10-7-3-n-intro',
      type: 'text',
      content: `## Tallenes byggesteiner

Tenk på LEGO. Med bare noen grunnklosser kan du bygge nesten hva som helst -- hus, biler, romskip. I matematikken har vi noe lignende: **primtall**. De er de grunnleggende byggesteinene som alle andre tall er satt sammen av.

Tallet $12$ kan for eksempel deles opp i $2 \\times 2 \\times 3$. Verken $2$ eller $3$ kan deles videre -- de er «udelelige». Nettopp dette er det som gjør dem til primtall.`,
    },

    {
      id: '10-7-3-n-section1',
      type: 'text',
      content: `## Hva er et primtall?

Et **primtall** er et naturlig tall større enn $1$ som bare er delelig med $1$ og seg selv. De første primtallene er:

$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, \\ldots$$

Et tall større enn $1$ som *ikke* er et primtall, kalles et **sammensatt tall** -- det betyr at det har flere enn to faktorer. For eksempel er $12$ sammensatt fordi det har faktorene $1, 2, 3, 4, 6, 12$.

Noen viktige spesialtilfeller: Tallet $1$ er verken primtall eller sammensatt -- det er en egen kategori. Og $2$ er det eneste partalls-primtallet. Alle andre partall er delelige med $2$ og dermed sammensatte.

Hvordan sjekker du om et tall er primtall? Du trenger bare å teste deling med primtall opp til **kvadratroten** av tallet. For å sjekke $67$, beregner vi $\\sqrt{67} \\approx 8{,}2$ og sjekker deling med $2, 3, 5$ og $7$. Ingen av dem går opp, så $67$ er et primtall. Men for $51$ finner vi at $51 \\div 3 = 17$, så $51 = 3 \\times 17$ er sammensatt.

Det finnes uendelig mange primtall -- dette beviste den greske matematikeren Euklid for over $2300$ ar siden!`,
    },

    {
      id: '10-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på primtall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-7-3-n-quiz1-q0',
            task: 'Hvilket av disse tallene er et primtall?',
            options: [
              { id: 'a', text: '$49$', isCorrect: false },
              { id: 'b', text: '$51$', isCorrect: false },
              { id: 'c', text: '$83$', isCorrect: true },
              { id: 'd', text: '$91$', isCorrect: false },
            ],
            solution: '$83$ er et primtall. $\\sqrt{83} \\approx 9{,}1$, og verken $2, 3, 5$ eller $7$ går opp. $49 = 7 \\times 7$, $51 = 3 \\times 17$ og $91 = 7 \\times 13$.',
          },
          {
            id: '10-7-3-n-quiz1-q1',
            task: 'For å sjekke om $67$ er et primtall, hva er det høyeste primtallet du trenger å teste deling med?',
            options: [
              { id: 'a', text: '$67$', isCorrect: false },
              { id: 'b', text: '$33$', isCorrect: false },
              { id: 'c', text: '$7$', isCorrect: true },
              { id: 'd', text: '$11$', isCorrect: false },
            ],
            solution: '$\\sqrt{67} \\approx 8{,}2$, så vi trenger bare å teste med primtall opp til $8{,}2$: det er $2, 3, 5$ og $7$. Det neste primtallet, $11$, er allerede for stort.',
          },
          {
            id: '10-7-3-n-quiz1-q2',
            task: 'Hvilken påstand om tallet $1$ er riktig?',
            options: [
              { id: 'a', text: '$1$ er det minste primtallet', isCorrect: false },
              { id: 'b', text: '$1$ er et sammensatt tall', isCorrect: false },
              { id: 'c', text: '$1$ er verken primtall eller sammensatt tall', isCorrect: true },
              { id: 'd', text: '$1$ er både primtall og sammensatt tall', isCorrect: false },
            ],
            solution: '$1$ er et spesialtilfelle: det er verken primtall eller sammensatt tall. Definisjonen av primtall krever at tallet er større enn $1$.',
          },
        ],
      },
    },

    {
      id: '10-7-3-n-section2',
      type: 'text',
      content: `## Eratosthenes' sil og primtallsfaktorisering

Den greske matematikeren Eratosthenes (276--194 f.Kr.) fant en elegant metode for å finne alle primtall opp til et gitt tall. Skriv opp alle tall fra $2$ og oppover. Begynn med $2$ (det første primtallet) og stryk alle multipler av $2$: $4, 6, 8, 10, \\ldots$ Neste tall som ikke er streket ut er $3$ -- stryk alle multipler av $3$. Fortsett med $5$, $7$, og så videre. Når du har kommet til $\\sqrt{n}$ (der $n$ er det største tallet på listen), er alle tall som ikke er streket ut, primtall. For tall opp til $50$ gir dette $15$ primtall: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$.

Nå til det virkelig kraftige verktyet: **primtallsfaktorisering**. Aritmetikkens fundamentalteorem sier at hvert naturlig tall større enn $1$ kan skrives som et produkt av primtall på nøyaktig en måte (bortsett fra rekkefølgen). For å finne faktoriseringen bruker vi et **faktortre**: del på det minste primtallet som går opp, del kvotienten på nytt, og fortsett til du står igjen med $1$.

For eksempel: $180 \\div 2 = 90$, $90 \\div 2 = 45$, $45 \\div 3 = 15$, $15 \\div 3 = 5$, $5 \\div 5 = 1$. Altså er $180 = 2^2 \\times 3^2 \\times 5$.`,
    },

    {
      id: '10-7-3-n-section3',
      type: 'text',
      content: `## SFF og MFF -- nyttige verktøy

Primtallsfaktorisering gir oss to kraftige verktøy: **Største felles faktor (SFF)** og **Minste felles multiplum (MFF)**.

**SFF** er det største tallet som går opp i både $a$ og $b$. For å finne den: velg den **laveste** potensen av hvert **felles** primtall. **MFF** er det minste tallet som både $a$ og $b$ går opp i. For å finne det: velg den **høyeste** potensen av **alle** primtall som forekommer.

La oss finne SFF og MFF av $60$ og $84$:
- $60 = 2^2 \\times 3 \\times 5$
- $84 = 2^2 \\times 3 \\times 7$

SFF: Felles primtall er $2$ og $3$, med laveste potenser: $2^2 \\times 3 = 12$.
MFF: Alle primtall med høyeste potenser: $2^2 \\times 3 \\times 5 \\times 7 = 420$.

En nyttig kontroll: $\\text{SFF} \\times \\text{MFF} = 12 \\times 420 = 5040 = 60 \\times 84$.

Disse verktøyene er overraskende praktiske. Tenk deg at du har $24$ rode roser og $36$ hvite roser og vil lage buketter der alle har like mange av hver farge uten at noen roser blir til overs. Antall buketter er SFF av $24$ og $36$, altså $12$. Eller tenk på to busser som er på holdeplassen samtidig klokka $08{:}00$ -- buss A går hvert $12$. minutt og buss B hvert $18$. minutt. De er på holdeplassen samtidig igjen etter MFF av $12$ og $18$ minutter, altså $36$ minutter -- klokka $08{:}36$.`,
    },

    {
      id: '10-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på primtallsfaktorisering, SFF og MFF:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-7-3-n-quiz2-q0',
            task: 'Hva er primtallsfaktoriseringen av $72$?',
            options: [
              { id: 'a', text: '$2^3 \\times 3^2$', isCorrect: true },
              { id: 'b', text: '$2^2 \\times 3^3$', isCorrect: false },
              { id: 'c', text: '$8 \\times 9$', isCorrect: false },
              { id: 'd', text: '$2 \\times 36$', isCorrect: false },
            ],
            solution: '$72 = 2 \\times 36 = 2 \\times 2 \\times 18 = 2 \\times 2 \\times 2 \\times 9 = 2^3 \\times 3^2$. Alternativene c) og d) er ikke primtallsfaktoriseringer.',
          },
          {
            id: '10-7-3-n-quiz2-q1',
            task: 'Hva er SFF (største felles faktor) av $24$ og $36$?',
            options: [
              { id: 'a', text: '$6$', isCorrect: false },
              { id: 'b', text: '$12$', isCorrect: true },
              { id: 'c', text: '$4$', isCorrect: false },
              { id: 'd', text: '$72$', isCorrect: false },
            ],
            solution: '$24 = 2^3 \\times 3$ og $36 = 2^2 \\times 3^2$. SFF = laveste potens av felles primtall: $2^2 \\times 3 = 12$. Alternativ d) er MFF, ikke SFF.',
          },
          {
            id: '10-7-3-n-quiz2-q2',
            task: 'Buss A går hvert 15. minutt og buss B hvert 20. minutt. Når er neste gang de er på holdeplassen samtidig?',
            options: [
              { id: 'a', text: 'Etter $5$ minutter', isCorrect: false },
              { id: 'b', text: 'Etter $35$ minutter', isCorrect: false },
              { id: 'c', text: 'Etter $300$ minutter', isCorrect: false },
              { id: 'd', text: 'Etter $60$ minutter', isCorrect: true },
            ],
            solution: 'Vi trenger MFF av $15$ og $20$. $15 = 3 \\times 5$ og $20 = 2^2 \\times 5$. MFF $= 2^2 \\times 3 \\times 5 = 60$ minutter.',
          },
          {
            id: '10-7-3-n-quiz2-q3',
            task: 'Hvilket tall er IKKE et primtall?',
            options: [
              { id: 'a', text: '$29$', isCorrect: false },
              { id: 'b', text: '$37$', isCorrect: false },
              { id: 'c', text: '$91$', isCorrect: true },
              { id: 'd', text: '$67$', isCorrect: false },
            ],
            solution: '$91 = 7 \\times 13$ er et sammensatt tall. De andre er alle primtall.',
          },
        ],
      },
    },

    {
      id: '10-7-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Primtall er tallenes byggesteiner -- naturlige tall større enn $1$ som bare er delelige med $1$ og seg selv. $2$ er det minste (og eneste partalls-) primtallet, og $1$ er verken primtall eller sammensatt. Eratosthenes' sil lar oss finne alle primtall opp til et gitt tall.

Primtallsfaktorisering betyr å skrive et tall som et produkt av bare primtall, og dette kan gjores på nøyaktig en måte. Med primtallsfaktorisering finner vi enkelt SFF (velg laveste potens av felles primtall) og MFF (velg høyeste potens av alle primtall). En nyttig sjekk: $\\text{SFF}(a,b) \\times \\text{MFF}(a,b) = a \\times b$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4 NARRATIV: Forholdstall og proporsjonalitet
// ============================================================================

export const CHAPTER_10_7_4_NARRATIV: TextbookChapter = {
  id: '10-7-4-narrativ',
  courseId: '10',
  chapterNumber: '7.4',
  title: 'Forholdstall og proporsjonalitet',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av forholdstall, rett og omvendt proporsjonalitet og målestokk -- med hverdagseksempler fra oppskrifter, kart og arbeidsinnsats.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  linkedChapterId: '10-7-4',
  content: [
    {
      id: '10-7-4-n-intro',
      type: 'text',
      content: `## Forhold overalt

Du skal bake boller, og oppskriften er til $20$ stykker. Men du trenger bare $10$. Hva gjør du? Du halverer alle ingrediensene. Dette er et hverdagseksempel på **proporsjonalitet** -- når du endrer en størrelse, endrer en annen seg tilsvarende.

Forholdstall og proporsjonalitet dukker opp overalt: i oppskrifter, på kart, i valutaomregning, i blandingsforhold og i mange praktiske problemer.`,
    },

    {
      id: '10-7-4-n-section1',
      type: 'text',
      content: `## Forholdstall

Et **forholdstall** beskriver forholdet mellom to (eller flere) storrelser. Vi skriver det som $a : b$ eller $\\frac{a}{b}$.

Tenk på en klasse med $12$ gutter og $18$ jenter. Forholdet er $12 : 18$, som vi kan forenkle ved å dele på største felles faktor ($6$): $12 : 18 = 2 : 3$. Det betyr at for hver $2$ gutter er det $3$ jenter.

For å forenkle et forholdstall deler du begge tallene på SFF. For å utvide ganger du begge med samme tall. For desimaltall (som $0{,}5 : 1{,}5$) ganger du først med $10$ eller $100$ for å fa hele tall, og forenkler så: $0{,}5 : 1{,}5 = 5 : 15 = 1 : 3$.

Forholdstall er også nyttige for a **fordele**. Hvis en arv på $600\\,000$ kr skal deles i forholdet $2 : 3 : 5$, betyr det $2 + 3 + 5 = 10$ deler totalt. Hver del er $60\\,000$ kr, så de tre søknene får henholdsvis $120\\,000$, $180\\,000$ og $300\\,000$ kr.`,
    },

    {
      id: '10-7-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-7-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på forholdstall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-7-4-n-quiz1-q0',
            task: 'Hva er $48 : 32$ forenklet?',
            options: [
              { id: 'a', text: '$6 : 4$', isCorrect: false },
              { id: 'b', text: '$3 : 2$', isCorrect: true },
              { id: 'c', text: '$24 : 16$', isCorrect: false },
              { id: 'd', text: '$2 : 3$', isCorrect: false },
            ],
            solution: 'SFF av $48$ og $32$ er $16$. $48 \\div 16 = 3$ og $32 \\div 16 = 2$, så forholdet er $3 : 2$.',
          },
          {
            id: '10-7-4-n-quiz1-q1',
            task: 'Saftkonsentrat blandes med vann i forholdet $1 : 4$. Hvor mye saft trenger du for å lage $2{,}5$ liter ferdig blanding?',
            options: [
              { id: 'a', text: '$0{,}25$ liter', isCorrect: false },
              { id: 'b', text: '$0{,}625$ liter', isCorrect: false },
              { id: 'c', text: '$0{,}5$ liter', isCorrect: true },
              { id: 'd', text: '$1$ liter', isCorrect: false },
            ],
            solution: '$1 : 4$ betyr $1 + 4 = 5$ deler totalt. Hver del er $\\frac{2{,}5}{5} = 0{,}5$ liter. Safta utgjør $1$ del, altså $0{,}5$ liter.',
          },
        ],
      },
    },

    {
      id: '10-7-4-n-section2',
      type: 'text',
      content: `## Rett proporsjonalitet

To storrelser $x$ og $y$ er **rett proporsjonale** når forholdet mellom dem er konstant:

$$\\frac{y}{x} = k \\quad \\text{(konstant)}, \\quad \\text{dvs.} \\quad y = kx$$

Konstanten $k$ kalles **proporsjonalitetskonstanten**. Kjennetegn: når $x$ dobles, dobles $y$. Når $x$ tredobles, tredobles $y$. Grafen er en **rett linje gjennom origo**.

Tenk på epler som koster $30$ kr per kilo. Kjoper du $2$ kg, betaler du $60$ kr. Kjoper du $5$ kg, betaler du $150$ kr. Forholdet $\\frac{\\text{pris}}{\\text{kg}} = 30$ er det samme hele veien.

En bil bruker $0{,}6$ liter bensin per mil. På $35$ mil bruker den $0{,}6 \\times 35 = 21$ liter. Tilsvarende: en oppskrift til $4$ personer bruker $300$ g mel. Til $7$ personer trenger du $\\frac{300}{4} \\times 7 = 525$ g.`,
    },

    {
      id: '10-7-4-n-section3',
      type: 'text',
      content: `## Omvendt proporsjonalitet og målestokk

Noen ganger går det **motsatt vei**: når den ene storrrelsen oker, synker den andre. To storrelser $x$ og $y$ er **omvendt proporsjonale** når produktet er konstant:

$$x \\cdot y = k, \\quad \\text{dvs.} \\quad y = \\frac{k}{x}$$

Når $x$ dobles, halveres $y$. Grafen er en hyperbel. Klassisk eksempel: $6$ arbeidere bruker $10$ dager på et prosjekt ($k = 60$ persondager). Med $15$ arbeidere tar det bare $\\frac{60}{15} = 4$ dager. En bil kjorer en strekning på $3$ timer med $80$ km/t. Med $60$ km/t tar det $\\frac{240}{60} = 4$ timer.

Et siste viktig tema er **målestokk**, som er forholdet mellom en avstand på kartet og den virkelige avstanden. $1 : 50\\,000$ betyr at $1$ cm på kartet tilsvarer $50\\,000$ cm $= 500$ m i virkeligheten. For å finne virkelig lengde ganger du kartlengden med malestokkstallet. For å finne kartlengde deler du den virkelige lengden på malestokkstallet. Husk å gjøre om til samme enhet (oftest cm) for du regner!

Et kart med $1 : 50\\,000$: er kartavstanden $3{,}4$ cm, er den virkelige avstanden $3{,}4 \\times 50\\,000 = 170\\,000$ cm $= 1{,}7$ km.`,
    },

    {
      id: '10-7-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-7-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på proporsjonalitet og målestokk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '10-7-4-n-quiz2-q0',
            task: '$6$ arbeidere bruker $10$ dager på et prosjekt. Hvor mange dager bruker $15$ arbeidere?',
            options: [
              { id: 'a', text: '$25$ dager', isCorrect: false },
              { id: 'b', text: '$4$ dager', isCorrect: true },
              { id: 'c', text: '$9$ dager', isCorrect: false },
              { id: 'd', text: '$2{,}5$ dager', isCorrect: false },
            ],
            solution: 'Omvendt proporsjonalt: $k = 6 \\times 10 = 60$ persondager. Med $15$ arbeidere: $\\frac{60}{15} = 4$ dager.',
          },
          {
            id: '10-7-4-n-quiz2-q1',
            task: 'En pizza deles likt mellom $n$ personer. Er stukkestorrelse og antall personer rett proporsjonale eller omvendt proporsjonale?',
            options: [
              { id: 'a', text: 'Rett proporsjonale', isCorrect: false },
              { id: 'b', text: 'Ingen av delene', isCorrect: false },
              { id: 'c', text: 'Omvendt proporsjonale', isCorrect: true },
              { id: 'd', text: 'Bade rett og omvendt', isCorrect: false },
            ],
            solution: 'Omvendt proporsjonale: dobler du antall personer, halveres stykket. Produktet (stykke $\\times$ personer) er konstant (hele pizzaen).',
          },
          {
            id: '10-7-4-n-quiz2-q2',
            task: 'Et kart har målestokk $1 : 200\\,000$. To steder er $7{,}5$ cm fra hverandre på kartet. Hva er den virkelige avstanden?',
            options: [
              { id: 'a', text: '$1{,}5$ km', isCorrect: false },
              { id: 'b', text: '$150$ km', isCorrect: false },
              { id: 'c', text: '$15$ km', isCorrect: true },
              { id: 'd', text: '$1\\,500$ km', isCorrect: false },
            ],
            solution: '$7{,}5 \\times 200\\,000 = 1\\,500\\,000$ cm $= 15\\,000$ m $= 15$ km.',
          },
          {
            id: '10-7-4-n-quiz2-q3',
            task: 'Tabellen viser $x$ og $y$. Er de rett proporsjonale?\n\n$x$: $2, 4, 6, 8$\n$y$: $5, 10, 15, 20$',
            options: [
              { id: 'a', text: 'Nei, fordi $y$ er større enn $x$', isCorrect: false },
              { id: 'b', text: 'Ja, fordi $\\frac{y}{x} = 2{,}5$ for alle verdier', isCorrect: true },
              { id: 'c', text: 'Nei, fordi grafen ikke går gjennom $(0, 0)$', isCorrect: false },
              { id: 'd', text: 'Ja, fordi forskjellen $y - x$ er konstant', isCorrect: false },
            ],
            solution: '$\\frac{5}{2} = \\frac{10}{4} = \\frac{15}{6} = \\frac{20}{8} = 2{,}5$. Forholdet er konstant, så de er rett proporsjonale med $k = 2{,}5$.',
          },
        ],
      },
    },

    {
      id: '10-7-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Forholdstall** ($a : b$) forenkles ved å dele på SFF og brukes til å fordele, sammenligne og beregne.

**Rett proporsjonalitet**: $y = kx$ -- forholdet $\\frac{y}{x}$ er konstant. Dobler du $x$, dobles $y$. Grafen er en rett linje gjennom origo.

**Omvendt proporsjonalitet**: $y = \\frac{k}{x}$ -- produktet $x \\cdot y$ er konstant. Dobler du $x$, halveres $y$. Grafen er en hyperbel.

**Målestokk** ($1 : n$): $1$ enhet på kartet $= n$ enheter i virkeligheten. Gjør alltid om til samme enhet for du regner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_10_NARRATIV_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_10_7_1_NARRATIV,
  CHAPTER_10_7_2_NARRATIV,
  CHAPTER_10_7_3_NARRATIV,
  CHAPTER_10_7_4_NARRATIV,
];
