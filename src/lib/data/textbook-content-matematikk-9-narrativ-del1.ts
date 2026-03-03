/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 1
 *
 * Kapittel 1.1: Potenser og røtter
 * Kapittel 1.2: Brøkregning
 * Kapittel 1.3: Prosent og prosentvis endring
 * Kapittel 1.4: Standardform
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1 NARRATIV: Potenser og røtter
// ============================================================================

export const CHAPTER_9_1_1_NARRATIV: TextbookChapter = {
  id: '9-1-1-narrativ',
  courseId: '9',
  chapterNumber: '1.1',
  title: 'Potenser og røtter',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende reise gjennom potensenes og røttenes verden -- fra gjentatt multiplikasjon til potensregler og kvadratrøtter, med hverdagseksempler som gjør abstrakte begreper håndgripelige.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og bruke eigenskapane ved potensar og røter i berekningar og i praktiske situasjonar',
  ],
  linkedChapterId: '9-1-1',
  content: [
    {
      id: '9-1-1-n-intro',
      type: 'text',
      content: `## Hva om du kunne forkorte gjentatt ganging?

Tenk deg at du legger et ark papir dobbelt, så dobbelt igjen, og igjen, og igjen. Etter $1$ brett er det $2$ lag. Etter $2$ brett er det $4$ lag. Etter $3$ brett er det $8$ lag. Ser du mønsteret? Antall lag er alltid $2$ ganget med seg selv et visst antall ganger: $2$, $2 \\times 2$, $2 \\times 2 \\times 2$, ...

Det blir fort slitsomt å skrive alle disse gangetegnene. Heldigvis finnes det en elegant forkortelse: **potenser**. I stedet for $2 \\times 2 \\times 2 \\times 2 \\times 2$ skriver vi ganske enkelt $2^5$. Liten skrift, stor effekt!

I dette kapittelet skal vi utforske hvordan potenser fungerer, hvilke regler som gjelder, og hvordan **røtter** henger sammen med potenser som en slags omvendt operasjon.`,
    },

    {
      id: '9-1-1-n-section1',
      type: 'text',
      content: `## Hva er en potens?

Når vi skriver $a^n$, kaller vi $a$ for **grunntallet** og $n$ for **eksponenten**. Uttrykket betyr at vi ganger $a$ med seg selv $n$ ganger:

$$a^n = \\underbrace{a \\times a \\times a \\times \\cdots \\times a}_{n \\text{ faktorer}}$$

Noen eksempler:
- $3^4 = 3 \\times 3 \\times 3 \\times 3 = 81$
- $5^3 = 5 \\times 5 \\times 5 = 125$
- $10^6 = 1\\,000\\,000$ (en million)
- $(-2)^3 = (-2) \\times (-2) \\times (-2) = -8$

Pass godt på **negative grunntall**! Det er stor forskjell på $(-3)^2$ og $-3^2$:
- $(-3)^2 = (-3) \\times (-3) = 9$ (minus ganger minus er pluss)
- $-3^2 = -(3^2) = -9$ (her er det bare $3$ som opphøyes, og minustegnet settes på etterpå)

Et par spesialtilfeller er verdt å huske:
- $a^1 = a$ (hva som helst opphøyd i $1$ er seg selv)
- $a^0 = 1$ for alle $a \\neq 0$ (dette virker kanskje rart, men det følger logisk av potensreglene vi snart skal se)
- $1^n = 1$ for alle $n$ (én ganget med seg selv er alltid én)`,
    },

    {
      id: '9-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnleggende potenser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-1-n-quiz1-q0',
            task: 'Hva er $2^6$?',
            options: [
              { id: 'a', text: '$12$', isCorrect: false },
              { id: 'b', text: '$32$', isCorrect: false },
              { id: 'c', text: '$64$', isCorrect: true },
              { id: 'd', text: '$128$', isCorrect: false },
            ],
            solution: '$2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 64$. Merk: $2^6$ betyr ikke $2 \\times 6 = 12$.',
          },
          {
            id: '9-1-1-n-quiz1-q1',
            task: 'Hva er forskjellen mellom $(-4)^2$ og $-4^2$?',
            options: [
              { id: 'a', text: 'De er begge lik $16$', isCorrect: false },
              { id: 'b', text: 'De er begge lik $-16$', isCorrect: false },
              { id: 'c', text: '$(-4)^2 = 16$ og $-4^2 = -16$', isCorrect: true },
              { id: 'd', text: '$(-4)^2 = -16$ og $-4^2 = 16$', isCorrect: false },
            ],
            solution: '$(-4)^2 = (-4) \\times (-4) = 16$ fordi minus ganger minus gir pluss. $-4^2 = -(4^2) = -16$ fordi kun $4$ opphøyes.',
          },
          {
            id: '9-1-1-n-quiz1-q2',
            task: 'Hva er $7^0$?',
            options: [
              { id: 'a', text: '$0$', isCorrect: false },
              { id: 'b', text: '$1$', isCorrect: true },
              { id: 'c', text: '$7$', isCorrect: false },
              { id: 'd', text: 'Udefinert', isCorrect: false },
            ],
            solution: 'Ethvert tall (unntatt $0$) opphøyd i $0$ er lik $1$. Altså $7^0 = 1$. Dette følger av potensregelen $a^n \\div a^n = a^{n-n} = a^0 = 1$.',
          },
        ],
      },
    },

    {
      id: '9-1-1-n-section2',
      type: 'text',
      content: `## Potensreglene -- snarveier for regning

Potenser følger noen elegante regler som gjør det mye enklere å regne. Tenk på dem som snarveier:

**Regel 1 -- Multiplikasjon med samme grunntall:**
$$a^m \\times a^n = a^{m+n}$$

Når du ganger potenser med samme grunntall, **adderer** du eksponentene. Logikken er enkel: $2^3 \\times 2^4 = (2 \\times 2 \\times 2) \\times (2 \\times 2 \\times 2 \\times 2) = 2^7$.

**Regel 2 -- Divisjon med samme grunntall:**
$$a^m \\div a^n = a^{m-n}$$

Når du deler potenser med samme grunntall, **subtraherer** du eksponentene. For eksempel: $5^7 \\div 5^3 = 5^{7-3} = 5^4$.

**Regel 3 -- Potens av potens:**
$$(a^m)^n = a^{m \\cdot n}$$

Når du opphøyer en potens i en ny potens, **multipliserer** du eksponentene. For eksempel: $(3^2)^4 = 3^{2 \\cdot 4} = 3^8$.

**Regel 4 -- Potens av produkt:**
$$(a \\cdot b)^n = a^n \\cdot b^n$$

For eksempel: $(2 \\cdot 5)^3 = 2^3 \\cdot 5^3 = 8 \\cdot 125 = 1000$.

**Regel 5 -- Potens av brøk:**
$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$

For eksempel: $\\left(\\frac{3}{4}\\right)^2 = \\frac{3^2}{4^2} = \\frac{9}{16}$.

Disse reglene gjelder **bare** når grunntallene er like (for regel 1 og 2) eller når eksponentene er like (for regel 4 og 5). Du kan altså ikke forenkle $2^3 \\times 3^4$ med regel 1, fordi grunntallene er forskjellige.`,
    },

    {
      id: '9-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på potensreglene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-1-n-quiz2-q0',
            task: 'Forenkle $3^5 \\times 3^2$.',
            options: [
              { id: 'a', text: '$3^{10}$', isCorrect: false },
              { id: 'b', text: '$3^7$', isCorrect: true },
              { id: 'c', text: '$9^7$', isCorrect: false },
              { id: 'd', text: '$3^3$', isCorrect: false },
            ],
            solution: 'Multiplikasjon med samme grunntall: $3^5 \\times 3^2 = 3^{5+2} = 3^7$. Vi adderer eksponentene.',
          },
          {
            id: '9-1-1-n-quiz2-q1',
            task: 'Forenkle $(2^3)^4$.',
            options: [
              { id: 'a', text: '$2^7$', isCorrect: false },
              { id: 'b', text: '$2^{64}$', isCorrect: false },
              { id: 'c', text: '$2^{12}$', isCorrect: true },
              { id: 'd', text: '$8^4$', isCorrect: false },
            ],
            solution: 'Potens av potens: $(2^3)^4 = 2^{3 \\cdot 4} = 2^{12}$. Vi multipliserer eksponentene.',
          },
          {
            id: '9-1-1-n-quiz2-q2',
            task: 'Hva er $\\frac{10^8}{10^5}$?',
            options: [
              { id: 'a', text: '$10^{40}$', isCorrect: false },
              { id: 'b', text: '$10^3$', isCorrect: true },
              { id: 'c', text: '$1^3$', isCorrect: false },
              { id: 'd', text: '$10^{13}$', isCorrect: false },
            ],
            solution: 'Divisjon med samme grunntall: $\\frac{10^8}{10^5} = 10^{8-5} = 10^3 = 1000$.',
          },
        ],
      },
    },

    {
      id: '9-1-1-n-section3',
      type: 'text',
      content: `## Negative eksponenter

Hva skjer når eksponenten er negativ? La oss bruke divisjonsregelen: $2^3 \\div 2^5 = 2^{3-5} = 2^{-2}$. Men vi kan også regne det ut direkte:

$$\\frac{2^3}{2^5} = \\frac{8}{32} = \\frac{1}{4} = \\frac{1}{2^2}$$

Altså betyr $2^{-2} = \\frac{1}{2^2} = \\frac{1}{4}$. Generelt:

$$a^{-n} = \\frac{1}{a^n}$$

En negativ eksponent betyr altså «snu brøken» eller «ta den omvendte verdien». Noen eksempler:
- $5^{-1} = \\frac{1}{5}$
- $3^{-3} = \\frac{1}{3^3} = \\frac{1}{27}$
- $10^{-4} = \\frac{1}{10^4} = \\frac{1}{10\\,000} = 0{,}0001$

For brøker «snur» den negative eksponenten alt:

$$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$$

For eksempel: $\\left(\\frac{2}{3}\\right)^{-2} = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$.

Negative eksponenter er spesielt nyttige når vi skriver svært små tall, som vi skal se når vi kommer til standardform.`,
    },

    {
      id: '9-1-1-n-section4',
      type: 'text',
      content: `## Røtter -- potensenes motsetning

Å ta en rot er det omvendte av å opphøye. Hvis $3^2 = 9$, er $\\sqrt{9} = 3$. Generelt:

$$\\text{Hvis } a^n = b, \\text{ da er } \\sqrt[n]{b} = a$$

**Kvadratroten** ($\\sqrt{\\phantom{x}}$, altså $n = 2$) er den vanligste. Den spør: «Hvilket tall ganget med seg selv gir dette?»
- $\\sqrt{25} = 5$ fordi $5^2 = 25$
- $\\sqrt{100} = 10$ fordi $10^2 = 100$
- $\\sqrt{2} = 1{,}4142\\ldots$ (dette er et irrasjonalt tall!)

**Kubikkroten** ($\\sqrt[3]{\\phantom{x}}$, $n = 3$) spør: «Hvilket tall ganget med seg selv tre ganger gir dette?»
- $\\sqrt[3]{8} = 2$ fordi $2^3 = 8$
- $\\sqrt[3]{27} = 3$ fordi $3^3 = 27$
- $\\sqrt[3]{-8} = -2$ fordi $(-2)^3 = -8$ (kubikkrøtter av negative tall gir mening!)

Det finnes en elegant sammenheng mellom røtter og potenser:

$$\\sqrt[n]{a} = a^{1/n}$$

Altså er $\\sqrt{9} = 9^{1/2}$ og $\\sqrt[3]{8} = 8^{1/3}$. Mer generelt:

$$\\sqrt[n]{a^m} = a^{m/n}$$

Denne sammenhengen betyr at alle potensreglene vi allerede har lært, gjelder for røtter også! For eksempel: $\\sqrt{a} \\cdot \\sqrt{b} = a^{1/2} \\cdot b^{1/2} = (ab)^{1/2} = \\sqrt{ab}$.

Her er noen nyttige regneregler for kvadratrøtter:
- $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$, for eksempel $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$
- $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$, for eksempel $\\sqrt{\\frac{9}{16}} = \\frac{3}{4}$
- Men pass på: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ ! (En vanlig feil!)`,
    },

    {
      id: '9-1-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-1-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på røtter og negative eksponenter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-1-n-quiz3-q0',
            task: 'Hva er $4^{-2}$?',
            options: [
              { id: 'a', text: '$-16$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{16}$', isCorrect: true },
              { id: 'c', text: '$-8$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{8}$', isCorrect: false },
            ],
            solution: '$4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$. En negativ eksponent betyr «ta den omvendte verdien».',
          },
          {
            id: '9-1-1-n-quiz3-q1',
            task: 'Forenkle $\\sqrt{72}$.',
            options: [
              { id: 'a', text: '$6\\sqrt{2}$', isCorrect: true },
              { id: 'b', text: '$8\\sqrt{3}$', isCorrect: false },
              { id: 'c', text: '$36\\sqrt{2}$', isCorrect: false },
              { id: 'd', text: '$3\\sqrt{8}$', isCorrect: false },
            ],
            solution: '$\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$. Vi finner det største perfekte kvadrattallet som er en faktor.',
          },
          {
            id: '9-1-1-n-quiz3-q2',
            task: 'Hva er $\\sqrt[3]{-27}$?',
            options: [
              { id: 'a', text: 'Udefinert (kan ikke ta rot av negativt tall)', isCorrect: false },
              { id: 'b', text: '$-3$', isCorrect: true },
              { id: 'c', text: '$3$', isCorrect: false },
              { id: 'd', text: '$-9$', isCorrect: false },
            ],
            solution: '$\\sqrt[3]{-27} = -3$ fordi $(-3)^3 = (-3) \\times (-3) \\times (-3) = -27$. Kubikkrøtter av negative tall er definert.',
          },
        ],
      },
    },

    {
      id: '9-1-1-n-section5',
      type: 'text',
      content: `## Potenser i praksis

Potenser og røtter dukker opp overalt i den virkelige verden:

**Eksponentiell vekst:** Tenk deg en bakteriekultur der antallet dobles hver time. Etter $t$ timer er antallet $N = N_0 \\cdot 2^t$, der $N_0$ er startantallet. Starter du med $100$ bakterier, har du etter $10$ timer $100 \\cdot 2^{10} = 100 \\cdot 1024 = 102\\,400$ bakterier!

**Areal og volum:** Arealet av et kvadrat med side $s$ er $s^2$ (derav navnet «kvadrat»). Volumet av en kube med side $s$ er $s^3$ (derav «kube»). Hvis du kjenner arealet og vil finne siden, tar du kvadratroten: $s = \\sqrt{A}$.

**Papirfolding:** Hvert brett dobler antall lag. Etter $n$ brett har du $2^n$ lag. Med et vanlig papir på $0{,}1$ mm tykkelse gir $42$ brett en tykkelse på $0{,}1 \\cdot 2^{42}$ mm $\\approx 440\\,000$ km -- mer enn avstanden til månen!

**Pythagorassetningen:** I en rettvinklet trekant gjelder $a^2 + b^2 = c^2$, der $c$ er hypotenusen. For å finne $c$ tar du kvadratroten: $c = \\sqrt{a^2 + b^2}$.`,
    },

    {
      id: '9-1-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '9-1-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på praktisk bruk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-1-n-quiz4-q0',
            task: 'Et kvadratisk rom har areal $81$ m$^2$. Hvor lang er hver side?',
            options: [
              { id: 'a', text: '$9{,}5$ m', isCorrect: false },
              { id: 'b', text: '$9$ m', isCorrect: true },
              { id: 'c', text: '$40{,}5$ m', isCorrect: false },
              { id: 'd', text: '$8{,}1$ m', isCorrect: false },
            ],
            solution: 'Sidelengden er $\\sqrt{81} = 9$ m, fordi $9^2 = 81$.',
          },
          {
            id: '9-1-1-n-quiz4-q1',
            task: 'En bakteriekultur dobles hver time. Du starter med $500$ bakterier. Hvor mange har du etter $8$ timer?',
            options: [
              { id: 'a', text: '$4\\,000$', isCorrect: false },
              { id: 'b', text: '$128\\,000$', isCorrect: true },
              { id: 'c', text: '$256\\,000$', isCorrect: false },
              { id: 'd', text: '$64\\,000$', isCorrect: false },
            ],
            solution: '$500 \\times 2^8 = 500 \\times 256 = 128\\,000$. Husk at $2^8 = 256$.',
          },
        ],
      },
    },

    {
      id: '9-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Potenser** er en forkortelse for gjentatt multiplikasjon: $a^n$ betyr $a$ ganget med seg selv $n$ ganger.

**Potensreglene:**
| Regel | Formel |
|-------|--------|
| Multiplikasjon | $a^m \\times a^n = a^{m+n}$ |
| Divisjon | $a^m \\div a^n = a^{m-n}$ |
| Potens av potens | $(a^m)^n = a^{m \\cdot n}$ |
| Potens av produkt | $(ab)^n = a^n b^n$ |
| Negativ eksponent | $a^{-n} = \\frac{1}{a^n}$ |
| Null som eksponent | $a^0 = 1$ (for $a \\neq 0$) |

**Røtter** er det omvendte av potenser: $\\sqrt[n]{a} = a^{1/n}$. Kvadratroten $\\sqrt{a}$ svarer på «hva ganget med seg selv gir $a$?». Regneregler for røtter følger direkte fra potensreglene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2 NARRATIV: Brøkregning
// ============================================================================

export const CHAPTER_9_1_2_NARRATIV: TextbookChapter = {
  id: '9-1-2-narrativ',
  courseId: '9',
  chapterNumber: '1.2',
  title: 'Brøkregning',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av brøkregning -- fra grunnleggende konsepter til de fire regneartene med brøk, med eksempler fra hverdagen som gjør brøk intuitivt.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og bruke eigenskapane ved potensartal og røter i berekningar og i praktiske situasjonar',
  ],
  linkedChapterId: '9-1-2',
  content: [
    {
      id: '9-1-2-n-intro',
      type: 'text',
      content: `## Å dele rettferdig

Tenk deg at du og to venner skal dele en pizza. Dere kutter den i tre like store stykker, og hver person får $\\frac{1}{3}$. Gratulerer -- du har nettopp brukt en brøk! En **brøk** er rett og slett en måte å beskrive en del av en helhet.

I matematikken skriver vi brøken $\\frac{a}{b}$, der $a$ er **telleren** (antall deler vi har) og $b$ er **nevneren** (antall deler helheten er delt i). Nevneren kan aldri være $0$ -- det gir ingen mening å dele noe i null deler.

Kanskje du tenker: «Jeg har desimaltall, trenger jeg virkelig brøk?» Svaret er ja! Noen tall, som $\\frac{1}{3} = 0{,}333\\ldots$, kan ikke skrives eksakt som desimaltall. Brøk gir oss nøyaktighet. Dessuten er brøk uunnværlig i algebra, der vi ofte jobber med ukjente verdier.`,
    },

    {
      id: '9-1-2-n-section1',
      type: 'text',
      content: `## Forkorting og utviding

To brøker som ser forskjellige ut, kan likevel ha samme verdi. For eksempel er $\\frac{2}{4}$ og $\\frac{1}{2}$ det samme -- halvparten. For å se dette **forkorter** vi $\\frac{2}{4}$ ved å dele teller og nevner på samme tall:

$$\\frac{2}{4} = \\frac{2 \\div 2}{4 \\div 2} = \\frac{1}{2}$$

En brøk er **fullt forkortet** når teller og nevner ikke har noen felles faktor bortsett fra $1$. For å forkorte mest mulig effektivt deler du på **største felles faktor (SFF)**:

$$\\frac{24}{36} = \\frac{24 \\div 12}{36 \\div 12} = \\frac{2}{3}$$

**Utviding** er det motsatte: vi ganger teller og nevner med samme tall. Verdien endres ikke, men nevneren endres -- noe som er nyttig når vi skal addere brøker:

$$\\frac{3}{5} = \\frac{3 \\times 4}{5 \\times 4} = \\frac{12}{20}$$

Tenk på det slik: om du kutter en pizza i $8$ stykker i stedet for $4$, og tar dobbelt så mange stykker, har du fortsatt like mye pizza.`,
    },

    {
      id: '9-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på forkorting og utviding:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-2-n-quiz1-q0',
            task: 'Hva er $\\frac{18}{24}$ forkortet?',
            options: [
              { id: 'a', text: '$\\frac{9}{12}$', isCorrect: false },
              { id: 'b', text: '$\\frac{3}{4}$', isCorrect: true },
              { id: 'c', text: '$\\frac{6}{8}$', isCorrect: false },
              { id: 'd', text: '$\\frac{2}{3}$', isCorrect: false },
            ],
            solution: 'SFF av $18$ og $24$ er $6$. $\\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$. Alternativene a) og c) er ikke fullt forkortet.',
          },
          {
            id: '9-1-2-n-quiz1-q1',
            task: 'Utvid $\\frac{2}{7}$ slik at nevneren blir $35$.',
            options: [
              { id: 'a', text: '$\\frac{7}{35}$', isCorrect: false },
              { id: 'b', text: '$\\frac{10}{35}$', isCorrect: true },
              { id: 'c', text: '$\\frac{14}{35}$', isCorrect: false },
              { id: 'd', text: '$\\frac{5}{35}$', isCorrect: false },
            ],
            solution: 'Vi ganger med $5$: $\\frac{2 \\times 5}{7 \\times 5} = \\frac{10}{35}$.',
          },
          {
            id: '9-1-2-n-quiz1-q2',
            task: 'Hvilke av disse brøkene er like store?',
            options: [
              { id: 'a', text: '$\\frac{3}{5}$ og $\\frac{6}{15}$', isCorrect: false },
              { id: 'b', text: '$\\frac{4}{6}$ og $\\frac{6}{9}$', isCorrect: true },
              { id: 'c', text: '$\\frac{2}{3}$ og $\\frac{3}{4}$', isCorrect: false },
              { id: 'd', text: '$\\frac{5}{8}$ og $\\frac{8}{5}$', isCorrect: false },
            ],
            solution: '$\\frac{4}{6} = \\frac{2}{3}$ og $\\frac{6}{9} = \\frac{2}{3}$. Begge forkortes til $\\frac{2}{3}$. Alternativ a): $\\frac{6}{15} = \\frac{2}{5} \\neq \\frac{3}{5}$.',
          },
        ],
      },
    },

    {
      id: '9-1-2-n-section2',
      type: 'text',
      content: `## Addisjon og subtraksjon av brøker

For å legge sammen to brøker trenger de **felles nevner** (lik nevner). Da legger vi bare sammen tellerne:

$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$

Men hva hvis nevnerne er ulike? Da må vi utvide en eller begge brøkene til de får felles nevner. Den mest effektive fellesnevneren er **minste felles multiplum (MFF)** av nevnerne.

**Eksempel:** $\\frac{2}{3} + \\frac{3}{4}$

MFF av $3$ og $4$ er $12$. Vi utvider:
$$\\frac{2}{3} = \\frac{8}{12}, \\quad \\frac{3}{4} = \\frac{9}{12}$$

Nå legger vi sammen:
$$\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12} = 1\\frac{5}{12}$$

Subtraksjon fungerer på akkurat samme måte, bare med minus:
$$\\frac{5}{6} - \\frac{1}{4} = \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$$

**Blandet tall** (som $2\\frac{3}{4}$) gjøres om til uekte brøk før regning: $2\\frac{3}{4} = \\frac{2 \\times 4 + 3}{4} = \\frac{11}{4}$.`,
    },

    {
      id: '9-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på addisjon og subtraksjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-2-n-quiz2-q0',
            task: 'Hva er $\\frac{1}{3} + \\frac{1}{6}$?',
            options: [
              { id: 'a', text: '$\\frac{2}{9}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{2}$', isCorrect: true },
              { id: 'c', text: '$\\frac{2}{6}$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{9}$', isCorrect: false },
            ],
            solution: 'Fellesnevner er $6$: $\\frac{1}{3} = \\frac{2}{6}$. Så $\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$.',
          },
          {
            id: '9-1-2-n-quiz2-q1',
            task: 'Hva er $\\frac{5}{8} - \\frac{1}{3}$?',
            options: [
              { id: 'a', text: '$\\frac{4}{5}$', isCorrect: false },
              { id: 'b', text: '$\\frac{7}{24}$', isCorrect: true },
              { id: 'c', text: '$\\frac{1}{4}$', isCorrect: false },
              { id: 'd', text: '$\\frac{15}{24}$', isCorrect: false },
            ],
            solution: 'Fellesnevner er $24$: $\\frac{5}{8} = \\frac{15}{24}$ og $\\frac{1}{3} = \\frac{8}{24}$. Så $\\frac{15}{24} - \\frac{8}{24} = \\frac{7}{24}$.',
          },
          {
            id: '9-1-2-n-quiz2-q2',
            task: 'Gjør om $3\\frac{2}{5}$ til uekte brøk.',
            options: [
              { id: 'a', text: '$\\frac{32}{5}$', isCorrect: false },
              { id: 'b', text: '$\\frac{17}{5}$', isCorrect: true },
              { id: 'c', text: '$\\frac{15}{5}$', isCorrect: false },
              { id: 'd', text: '$\\frac{7}{5}$', isCorrect: false },
            ],
            solution: '$3\\frac{2}{5} = \\frac{3 \\times 5 + 2}{5} = \\frac{17}{5}$. Vi ganger heltallsdelen med nevneren og legger til telleren.',
          },
        ],
      },
    },

    {
      id: '9-1-2-n-section3',
      type: 'text',
      content: `## Multiplikasjon og divisjon av brøker

**Multiplikasjon** av brøker er overraskende enkelt -- du trenger ingen fellesnevner! Bare gang teller med teller og nevner med nevner:

$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$

**Eksempel:** $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$

Et smart triks er å **forkorte på tvers** før du ganger. I $\\frac{3}{8} \\times \\frac{4}{9}$ kan vi forkorte $3$ og $9$ med $3$, og $8$ og $4$ med $4$:

$$\\frac{3}{8} \\times \\frac{4}{9} = \\frac{\\cancel{3}^{1}}{\\cancel{8}_{2}} \\times \\frac{\\cancel{4}^{1}}{\\cancel{9}_{3}} = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$$

**Divisjon** av brøker gjøres ved å «gange med den omvendte»:

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

Altså: snu den andre brøken opp ned og gang i stedet. Hvorfor? Tenk på det slik: «Hvor mange halvparter er det i $3$?» er det samme som $3 \\div \\frac{1}{2} = 3 \\times \\frac{2}{1} = 6$. Og det stemmer -- det er $6$ halvdeler i $3$ hele.

**Eksempel:** $\\frac{5}{6} \\div \\frac{2}{3} = \\frac{5}{6} \\times \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4} = 1\\frac{1}{4}$`,
    },

    {
      id: '9-1-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-1-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på multiplikasjon og divisjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-2-n-quiz3-q0',
            task: 'Hva er $\\frac{3}{4} \\times \\frac{2}{5}$?',
            options: [
              { id: 'a', text: '$\\frac{5}{9}$', isCorrect: false },
              { id: 'b', text: '$\\frac{6}{20}$', isCorrect: false },
              { id: 'c', text: '$\\frac{3}{10}$', isCorrect: true },
              { id: 'd', text: '$\\frac{6}{9}$', isCorrect: false },
            ],
            solution: '$\\frac{3}{4} \\times \\frac{2}{5} = \\frac{3 \\times 2}{4 \\times 5} = \\frac{6}{20} = \\frac{3}{10}$.',
          },
          {
            id: '9-1-2-n-quiz3-q1',
            task: 'Hva er $\\frac{3}{5} \\div \\frac{9}{10}$?',
            options: [
              { id: 'a', text: '$\\frac{27}{50}$', isCorrect: false },
              { id: 'b', text: '$\\frac{2}{3}$', isCorrect: true },
              { id: 'c', text: '$\\frac{3}{2}$', isCorrect: false },
              { id: 'd', text: '$\\frac{30}{45}$', isCorrect: false },
            ],
            solution: '$\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\times \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}$. Vi snur den andre brøken og ganger.',
          },
          {
            id: '9-1-2-n-quiz3-q2',
            task: 'Hvor mange $\\frac{1}{4}$-deler er det i $2\\frac{1}{2}$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$8$', isCorrect: false },
              { id: 'c', text: '$10$', isCorrect: true },
              { id: 'd', text: '$\\frac{5}{8}$', isCorrect: false },
            ],
            solution: '$2\\frac{1}{2} \\div \\frac{1}{4} = \\frac{5}{2} \\times \\frac{4}{1} = \\frac{20}{2} = 10$. Det er $10$ fjerdedeler i to og en halv.',
          },
        ],
      },
    },

    {
      id: '9-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Brøk:** $\\frac{a}{b}$ der $a$ er teller og $b$ er nevner ($b \\neq 0$).

**Forkorting og utviding:** Gang eller del teller og nevner med samme tall.

| Regning | Fremgangsmåte |
|---------|---------------|
| **Addisjon** | Finn fellesnevner, legg sammen tellerne |
| **Subtraksjon** | Finn fellesnevner, trekk fra tellerne |
| **Multiplikasjon** | Gang teller med teller, nevner med nevner |
| **Divisjon** | Gang med den omvendte brøken |

Husk: Forkort alltid svaret! Og blandet tall gjøres om til uekte brøk før regning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3 NARRATIV: Prosent og prosentvis endring
// ============================================================================

export const CHAPTER_9_1_3_NARRATIV: TextbookChapter = {
  id: '9-1-3-narrativ',
  courseId: '9',
  chapterNumber: '1.3',
  title: 'Prosent og prosentvis endring',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av prosentbegrepet, vekstfaktor og prosentvis endring -- med eksempler fra salg, rabatter, renter og hverdagsliv.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  linkedChapterId: '9-1-3',
  content: [
    {
      id: '9-1-3-n-intro',
      type: 'text',
      content: `## Hundredeler overalt

«Alt på 30 % salg!» «Renta er 3,5 %.» «Andelen som sykler til skolen økte med 15 prosentpoeng.» Prosent er overalt i hverdagen -- i aviser, butikker, bankrenter og statistikk. Men hva betyr det egentlig?

Ordet **prosent** kommer fra latin «*per centum*», som betyr «per hundre». Når vi sier $25\\,\\%$, mener vi $25$ av $100$, altså $\\frac{25}{100} = 0{,}25$. Prosent er en praktisk måte å sammenligne deler av ulike helheter på, fordi alt regnes ut av $100$.

I dette kapittelet skal vi se på hvordan vi regner med prosent, hva vekstfaktor er, og hvordan vi håndterer prosentvis endring i den virkelige verden.`,
    },

    {
      id: '9-1-3-n-section1',
      type: 'text',
      content: `## Prosent, brøk og desimaltall

Det er nyttig å kunne veksle mellom prosent, brøk og desimaltall:

$$25\\,\\% = \\frac{25}{100} = \\frac{1}{4} = 0{,}25$$

**Fra prosent til desimaltall:** Del på $100$ (flytt kommaet to plasser til venstre).
- $75\\,\\% = 0{,}75$
- $8\\,\\% = 0{,}08$
- $150\\,\\% = 1{,}5$

**Fra desimaltall til prosent:** Gang med $100$ (flytt kommaet to plasser til høyre).
- $0{,}3 = 30\\,\\%$
- $1{,}25 = 125\\,\\%$

Noen vanlige prosenter bør du kunne utenat:

| Prosent | Brøk | Desimaltall |
|---------|-------|-------------|
| $10\\,\\%$ | $\\frac{1}{10}$ | $0{,}1$ |
| $25\\,\\%$ | $\\frac{1}{4}$ | $0{,}25$ |
| $33{,}3\\,\\%$ | $\\frac{1}{3}$ | $0{,}\\overline{3}$ |
| $50\\,\\%$ | $\\frac{1}{2}$ | $0{,}5$ |
| $75\\,\\%$ | $\\frac{3}{4}$ | $0{,}75$ |
| $100\\,\\%$ | $1$ | $1{,}0$ |

**Å finne prosent av noe:** Regn $\\text{prosent} \\times \\text{beløp}$. For eksempel: $30\\,\\%$ av $800$ kr $= 0{,}30 \\times 800 = 240$ kr.

**Å finne prosentandelen:** Del delen på helheten og gang med $100$. Hvis $15$ av $60$ elever sykler, er andelen $\\frac{15}{60} \\times 100\\,\\% = 25\\,\\%$.`,
    },

    {
      id: '9-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnleggende prosent:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-3-n-quiz1-q0',
            task: 'Hva er $15\\,\\%$ av $600$ kr?',
            options: [
              { id: 'a', text: '$60$ kr', isCorrect: false },
              { id: 'b', text: '$90$ kr', isCorrect: true },
              { id: 'c', text: '$150$ kr', isCorrect: false },
              { id: 'd', text: '$9$ kr', isCorrect: false },
            ],
            solution: '$15\\,\\% \\text{ av } 600 = 0{,}15 \\times 600 = 90$ kr.',
          },
          {
            id: '9-1-3-n-quiz1-q1',
            task: 'I en klasse med $32$ elever fikk $8$ karakteren $6$. Hvor mange prosent er dette?',
            options: [
              { id: 'a', text: '$8\\,\\%$', isCorrect: false },
              { id: 'b', text: '$20\\,\\%$', isCorrect: false },
              { id: 'c', text: '$25\\,\\%$', isCorrect: true },
              { id: 'd', text: '$32\\,\\%$', isCorrect: false },
            ],
            solution: '$\\frac{8}{32} \\times 100\\,\\% = \\frac{1}{4} \\times 100\\,\\% = 25\\,\\%$.',
          },
          {
            id: '9-1-3-n-quiz1-q2',
            task: 'Gjør om $0{,}045$ til prosent.',
            options: [
              { id: 'a', text: '$0{,}45\\,\\%$', isCorrect: false },
              { id: 'b', text: '$45\\,\\%$', isCorrect: false },
              { id: 'c', text: '$4{,}5\\,\\%$', isCorrect: true },
              { id: 'd', text: '$0{,}045\\,\\%$', isCorrect: false },
            ],
            solution: '$0{,}045 \\times 100 = 4{,}5\\,\\%$. Vi ganger med $100$ for å gå fra desimaltall til prosent.',
          },
        ],
      },
    },

    {
      id: '9-1-3-n-section2',
      type: 'text',
      content: `## Vekstfaktor -- den smarte metoden

Tenk deg at en jakke koster $800$ kr og har $25\\,\\%$ rabatt. Du kan regne det slik:
1. Finn rabatten: $0{,}25 \\times 800 = 200$ kr
2. Trekk fra: $800 - 200 = 600$ kr

Men det finnes en smartere metode med **vekstfaktor**. Hvis du får $25\\,\\%$ rabatt, betaler du $100\\,\\% - 25\\,\\% = 75\\,\\%$ av prisen. Vekstfaktoren er $0{,}75$:

$$800 \\times 0{,}75 = 600 \\text{ kr}$$

En vekstfaktor er desimaltallet som tilsvarer den nye prosenten:
- **Økning med $20\\,\\%$:** Vekstfaktor $= 1 + 0{,}20 = 1{,}20$
- **Reduksjon med $15\\,\\%$:** Vekstfaktor $= 1 - 0{,}15 = 0{,}85$
- **Økning med $5\\,\\%$:** Vekstfaktor $= 1{,}05$
- **Uendret ($0\\,\\%$):** Vekstfaktor $= 1{,}00$

Generelt:
$$\\text{Vekstfaktor} = 1 + \\frac{\\text{prosentendring}}{100}$$

Fordelen med vekstfaktor viser seg spesielt ved gjentatte endringer. Hvis en investering øker med $10\\,\\%$ hvert år i $3$ år:

$$\\text{Ny verdi} = \\text{startverdi} \\times 1{,}10^3$$

La oss si du setter inn $10\\,000$ kr i banken med $10\\,\\%$ rente per år:
- Etter $1$ år: $10\\,000 \\times 1{,}10 = 11\\,000$ kr
- Etter $2$ år: $11\\,000 \\times 1{,}10 = 12\\,100$ kr
- Etter $3$ år: $12\\,100 \\times 1{,}10 = 13\\,310$ kr

Eller direkte: $10\\,000 \\times 1{,}10^3 = 13\\,310$ kr. Merk at du tjener $3\\,310$ kr, ikke bare $3\\,000$ -- fordi du også tjener rente på rentene! Dette kalles **rentes rente**.`,
    },

    {
      id: '9-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på vekstfaktor:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-3-n-quiz2-q0',
            task: 'Hva er vekstfaktoren for en prisøkning på $35\\,\\%$?',
            options: [
              { id: 'a', text: '$0{,}35$', isCorrect: false },
              { id: 'b', text: '$1{,}35$', isCorrect: true },
              { id: 'c', text: '$0{,}65$', isCorrect: false },
              { id: 'd', text: '$3{,}5$', isCorrect: false },
            ],
            solution: 'Økning: vekstfaktor $= 1 + 0{,}35 = 1{,}35$.',
          },
          {
            id: '9-1-3-n-quiz2-q1',
            task: 'En vare koster $450$ kr. Den settes ned $20\\,\\%$. Hva blir ny pris?',
            options: [
              { id: 'a', text: '$90$ kr', isCorrect: false },
              { id: 'b', text: '$430$ kr', isCorrect: false },
              { id: 'c', text: '$360$ kr', isCorrect: true },
              { id: 'd', text: '$540$ kr', isCorrect: false },
            ],
            solution: 'Vekstfaktor $= 1 - 0{,}20 = 0{,}80$. Ny pris: $450 \\times 0{,}80 = 360$ kr.',
          },
          {
            id: '9-1-3-n-quiz2-q2',
            task: 'Du setter $5\\,000$ kr i banken med $4\\,\\%$ årlig rente. Hvor mye har du etter $2$ år?',
            options: [
              { id: 'a', text: '$5\\,400$ kr', isCorrect: false },
              { id: 'b', text: '$5\\,408$ kr', isCorrect: true },
              { id: 'c', text: '$5\\,800$ kr', isCorrect: false },
              { id: 'd', text: '$5\\,200$ kr', isCorrect: false },
            ],
            solution: '$5\\,000 \\times 1{,}04^2 = 5\\,000 \\times 1{,}0816 = 5\\,408$ kr. Rentes rente gir $8$ kr ekstra utover $5\\,400$.',
          },
        ],
      },
    },

    {
      id: '9-1-3-n-section3',
      type: 'text',
      content: `## Prosentvis endring

Ofte vil vi beregne **hvor mange prosent noe har endret seg**. Formelen er:

$$\\text{Prosentvis endring} = \\frac{\\text{ny verdi} - \\text{gammel verdi}}{\\text{gammel verdi}} \\times 100\\,\\%$$

Eller med vekstfaktor: finn vekstfaktoren $\\frac{\\text{ny verdi}}{\\text{gammel verdi}}$ og regn om til prosentendring.

**Eksempel:** En sykkel gikk opp fra $4\\,500$ kr til $5\\,400$ kr. Prosentvis økning:
$$\\frac{5\\,400 - 4\\,500}{4\\,500} \\times 100\\,\\% = \\frac{900}{4\\,500} \\times 100\\,\\% = 20\\,\\%$$

Alternativt: vekstfaktor $= \\frac{5\\,400}{4\\,500} = 1{,}20$, som betyr $20\\,\\%$ økning.

**Viktig felle -- prosentpoeng vs. prosent:** Hvis arbeidsledigheten øker fra $4\\,\\%$ til $6\\,\\%$, har den økt med $2$ **prosentpoeng**. Men den prosentvise økningen er:
$$\\frac{6 - 4}{4} \\times 100\\,\\% = 50\\,\\%$$

Ledigheten har altså økt med $50\\,\\%$ (prosentvis) eller $2$ prosentpoeng. Det er stor forskjell!

**Å finne opprinnelig verdi:** Hvis du vet at noe kostet $720$ kr etter $20\\,\\%$ rabatt, finner du den opprinnelige prisen ved å dele på vekstfaktoren:
$$\\text{Opprinnelig pris} = \\frac{720}{0{,}80} = 900 \\text{ kr}$$`,
    },

    {
      id: '9-1-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-1-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på prosentvis endring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-3-n-quiz3-q0',
            task: 'Prisen på en vare gikk fra $200$ kr til $250$ kr. Hva er den prosentvise økningen?',
            options: [
              { id: 'a', text: '$50\\,\\%$', isCorrect: false },
              { id: 'b', text: '$20\\,\\%$', isCorrect: false },
              { id: 'c', text: '$25\\,\\%$', isCorrect: true },
              { id: 'd', text: '$125\\,\\%$', isCorrect: false },
            ],
            solution: '$\\frac{250 - 200}{200} \\times 100\\,\\% = \\frac{50}{200} \\times 100\\,\\% = 25\\,\\%$.',
          },
          {
            id: '9-1-3-n-quiz3-q1',
            task: 'Etter en prisøkning på $40\\,\\%$ koster en bukse $840$ kr. Hva var den opprinnelige prisen?',
            options: [
              { id: 'a', text: '$504$ kr', isCorrect: false },
              { id: 'b', text: '$600$ kr', isCorrect: true },
              { id: 'c', text: '$700$ kr', isCorrect: false },
              { id: 'd', text: '$1\\,176$ kr', isCorrect: false },
            ],
            solution: 'Vekstfaktor er $1{,}40$. Opprinnelig pris: $\\frac{840}{1{,}40} = 600$ kr.',
          },
          {
            id: '9-1-3-n-quiz3-q2',
            task: 'En vare øker $10\\,\\%$ og reduseres deretter $10\\,\\%$. Ender du på opprinnelig pris?',
            options: [
              { id: 'a', text: 'Ja, det blir likt', isCorrect: false },
              { id: 'b', text: 'Nei, du ender $1\\,\\%$ lavere', isCorrect: true },
              { id: 'c', text: 'Nei, du ender $1\\,\\%$ høyere', isCorrect: false },
              { id: 'd', text: 'Nei, du ender $10\\,\\%$ lavere', isCorrect: false },
            ],
            solution: 'Vekstfaktor: $1{,}10 \\times 0{,}90 = 0{,}99$. Du ender altså $1\\,\\%$ under opprinnelig pris. Prosent av et større tall og prosent av et mindre tall gir ikke det samme!',
          },
        ],
      },
    },

    {
      id: '9-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Prosent** betyr «per hundre»: $p\\,\\% = \\frac{p}{100}$.

**Vekstfaktor:** $1 + \\frac{\\text{prosentendring}}{100}$. Økning gir faktor $> 1$, reduksjon gir faktor $< 1$.

**Prosentvis endring:** $\\frac{\\text{ny} - \\text{gammel}}{\\text{gammel}} \\times 100\\,\\%$.

**Rentes rente:** Gjentatt vekst med faktor $v$ over $n$ perioder: $\\text{sluttverdi} = \\text{startverdi} \\times v^n$.

**Finne opprinnelig verdi:** Del på vekstfaktoren: $\\text{opprinnelig} = \\frac{\\text{ny verdi}}{\\text{vekstfaktor}}$.

Husk forskjellen mellom **prosentpoeng** (absolutt endring i prosent) og **prosentvis endring** (relativ endring).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4 NARRATIV: Standardform
// ============================================================================

export const CHAPTER_9_1_4_NARRATIV: TextbookChapter = {
  id: '9-1-4-narrativ',
  courseId: '9',
  chapterNumber: '1.4',
  title: 'Standardform',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av standardform -- hvorfor vi trenger det, hvordan vi skriver tall på formen $a \\times 10^n$, og hvordan vi regner med veldig store og veldig små tall.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar',
  ],
  linkedChapterId: '9-1-4',
  content: [
    {
      id: '9-1-4-n-intro',
      type: 'text',
      content: `## Tall som sprenger alle grenser

Universet er rundt $93\\,000\\,000\\,000$ lysår i diameter. Et hydrogenatom har en diameter på omtrent $0{,}000\\,000\\,000\\,106$ meter. Å skrive slike tall med alle nullene er upraktisk, uoversiktlig og lett å gjøre feil med. Hva om det fantes en smartere måte?

Det gjør det! **Standardform** (også kalt vitenskapelig notasjon) lar oss skrive tall kompakt ved hjelp av tierpotenser. I stedet for alle de nullene, skriver vi:
- Universets diameter: $9{,}3 \\times 10^{10}$ lysår
- Hydrogenatomets diameter: $1{,}06 \\times 10^{-10}$ m

Mye ryddigere! I dette kapittelet lærer du å mestre denne elegante skrivemåten.`,
    },

    {
      id: '9-1-4-n-section1',
      type: 'text',
      content: `## Reglene for standardform

Et tall er på **standardform** når det skrives slik:

$$a \\times 10^n$$

der:
- $1 \\leq a < 10$ (nøyaktig ett siffer som ikke er null foran kommaet)
- $n$ er et helt tall (positiv, negativ eller null)

Noen eksempler på hva som er og ikke er standardform:

| Uttrykk | Standardform? | Hvorfor / hvorfor ikke |
|---------|--------------|----------------------|
| $3{,}7 \\times 10^5$ | Ja | $1 \\leq 3{,}7 < 10$ |
| $0{,}45 \\times 10^3$ | Nei | $0{,}45 < 1$ |
| $12 \\times 10^4$ | Nei | $12 \\geq 10$ |
| $8 \\times 10^{-3}$ | Ja | $1 \\leq 8 < 10$ |
| $1{,}0 \\times 10^0$ | Ja | $a = 1{,}0$ og $10^0 = 1$ |

**Å gjøre om store tall til standardform:** Flytt kommaet til venstre til det står ett siffer foran. Tell antall plasser -- det blir eksponenten.

$4\\,700\\,000 = 4{,}7 \\times 10^6$ (kommaet flyttes $6$ plasser til venstre)

**Å gjøre om små tall til standardform:** Flytt kommaet til høyre. Eksponenten blir negativ.

$0{,}000\\,052 = 5{,}2 \\times 10^{-5}$ (kommaet flyttes $5$ plasser til høyre)

**Å gjøre om fra standardform til vanlig tall:** Positiv eksponent -- flytt kommaet til høyre. Negativ eksponent -- flytt til venstre.

$6{,}3 \\times 10^4 = 63\\,000$ og $2{,}1 \\times 10^{-3} = 0{,}0021$.`,
    },

    {
      id: '9-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på standardform:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-4-n-quiz1-q0',
            task: 'Skriv $320\\,000$ på standardform.',
            options: [
              { id: 'a', text: '$32 \\times 10^4$', isCorrect: false },
              { id: 'b', text: '$3{,}2 \\times 10^5$', isCorrect: true },
              { id: 'c', text: '$3{,}2 \\times 10^4$', isCorrect: false },
              { id: 'd', text: '$0{,}32 \\times 10^6$', isCorrect: false },
            ],
            solution: 'Vi flytter kommaet $5$ plasser til venstre: $320\\,000 = 3{,}2 \\times 10^5$.',
          },
          {
            id: '9-1-4-n-quiz1-q1',
            task: 'Skriv $0{,}000\\,0071$ på standardform.',
            options: [
              { id: 'a', text: '$7{,}1 \\times 10^{-5}$', isCorrect: false },
              { id: 'b', text: '$7{,}1 \\times 10^{-6}$', isCorrect: true },
              { id: 'c', text: '$71 \\times 10^{-7}$', isCorrect: false },
              { id: 'd', text: '$7{,}1 \\times 10^{6}$', isCorrect: false },
            ],
            solution: 'Vi flytter kommaet $6$ plasser til høyre for å få $7{,}1$. Eksponenten blir $-6$.',
          },
          {
            id: '9-1-4-n-quiz1-q2',
            task: 'Hva er $4{,}5 \\times 10^{-3}$ som vanlig tall?',
            options: [
              { id: 'a', text: '$4\\,500$', isCorrect: false },
              { id: 'b', text: '$0{,}45$', isCorrect: false },
              { id: 'c', text: '$0{,}0045$', isCorrect: true },
              { id: 'd', text: '$0{,}045$', isCorrect: false },
            ],
            solution: 'Negativ eksponent $-3$: flytt kommaet $3$ plasser til venstre. $4{,}5 \\to 0{,}0045$.',
          },
        ],
      },
    },

    {
      id: '9-1-4-n-section2',
      type: 'text',
      content: `## Regning med standardform

Den store fordelen med standardform er at det gjør regning med store og små tall mye enklere.

**Multiplikasjon:** Gang $a$-verdiene og addér eksponentene:
$$(a \\times 10^m) \\times (b \\times 10^n) = (a \\times b) \\times 10^{m+n}$$

**Eksempel:** $(3 \\times 10^4) \\times (5 \\times 10^3) = 15 \\times 10^7$

Men vent -- $15 \\geq 10$, så dette er ikke standardform! Vi justerer: $15 = 1{,}5 \\times 10^1$, altså:
$$15 \\times 10^7 = 1{,}5 \\times 10^8$$

**Divisjon:** Del $a$-verdiene og subtrahér eksponentene:
$$\\frac{a \\times 10^m}{b \\times 10^n} = \\frac{a}{b} \\times 10^{m-n}$$

**Eksempel:** $\\frac{8 \\times 10^9}{4 \\times 10^3} = 2 \\times 10^{9-3} = 2 \\times 10^6$

Hva med **addisjon og subtraksjon**? Da må tallene ha **samme eksponent** først! For eksempel:
$$3{,}5 \\times 10^4 + 2{,}1 \\times 10^3$$

Vi skriver om $2{,}1 \\times 10^3 = 0{,}21 \\times 10^4$, og legger sammen:
$$3{,}5 \\times 10^4 + 0{,}21 \\times 10^4 = 3{,}71 \\times 10^4$$`,
    },

    {
      id: '9-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på regning med standardform:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-4-n-quiz2-q0',
            task: 'Hva er $(6 \\times 10^5) \\times (3 \\times 10^4)$ på standardform?',
            options: [
              { id: 'a', text: '$18 \\times 10^9$', isCorrect: false },
              { id: 'b', text: '$1{,}8 \\times 10^{10}$', isCorrect: true },
              { id: 'c', text: '$1{,}8 \\times 10^{9}$', isCorrect: false },
              { id: 'd', text: '$9 \\times 10^{9}$', isCorrect: false },
            ],
            solution: '$6 \\times 3 = 18$ og $10^{5+4} = 10^9$. Altså $18 \\times 10^9 = 1{,}8 \\times 10^{10}$ (vi justerer fordi $18 \\geq 10$).',
          },
          {
            id: '9-1-4-n-quiz2-q1',
            task: 'Hva er $\\frac{4{,}2 \\times 10^8}{7 \\times 10^5}$?',
            options: [
              { id: 'a', text: '$6 \\times 10^2$', isCorrect: true },
              { id: 'b', text: '$0{,}6 \\times 10^3$', isCorrect: false },
              { id: 'c', text: '$6 \\times 10^3$', isCorrect: false },
              { id: 'd', text: '$6 \\times 10^{13}$', isCorrect: false },
            ],
            solution: '$\\frac{4{,}2}{7} = 0{,}6$ og $10^{8-5} = 10^3$. Altså $0{,}6 \\times 10^3$. Men $0{,}6 < 1$, så vi justerer: $6 \\times 10^2$.',
          },
          {
            id: '9-1-4-n-quiz2-q2',
            task: 'Hva er $2{,}5 \\times 10^6 + 3 \\times 10^5$ på standardform?',
            options: [
              { id: 'a', text: '$5{,}5 \\times 10^6$', isCorrect: false },
              { id: 'b', text: '$2{,}8 \\times 10^6$', isCorrect: true },
              { id: 'c', text: '$2{,}53 \\times 10^6$', isCorrect: false },
              { id: 'd', text: '$5{,}5 \\times 10^{11}$', isCorrect: false },
            ],
            solution: 'Skriv om: $3 \\times 10^5 = 0{,}3 \\times 10^6$. Nå: $2{,}5 \\times 10^6 + 0{,}3 \\times 10^6 = 2{,}8 \\times 10^6$.',
          },
        ],
      },
    },

    {
      id: '9-1-4-n-section3',
      type: 'text',
      content: `## Standardform i den virkelige verden

Standardform er uunnværlig i naturvitenskap og teknologi. Her er noen fascinerende eksempler:

**Astronomi:**
- Avstanden fra Jorda til Sola: $1{,}496 \\times 10^{11}$ m
- Lysets hastighet: $3{,}0 \\times 10^8$ m/s
- Antall stjerner i den observerbare delen av universet: ca. $10^{24}$

**Biologi:**
- Diameter til et rødt blodlegeme: $7 \\times 10^{-6}$ m
- Antall celler i menneskekroppen: ca. $3{,}7 \\times 10^{13}$
- Massen til en bakterie: ca. $10^{-15}$ kg

**Teknologi:**
- Prosessorhastighet: en moderne prosessor gjør ca. $5 \\times 10^9$ operasjoner per sekund
- Størrelsen på en transistor: ca. $3 \\times 10^{-9}$ m

Standardform hjelper oss å sammenlikne slike tall. Hvor mange ganger tyngre er Jorda ($6 \\times 10^{24}$ kg) enn Månen ($7{,}3 \\times 10^{22}$ kg)?

$$\\frac{6 \\times 10^{24}}{7{,}3 \\times 10^{22}} = \\frac{6}{7{,}3} \\times 10^{24-22} \\approx 0{,}82 \\times 10^2 = 82$$

Jorda er altså omtrent $82$ ganger tyngre enn Månen.`,
    },

    {
      id: '9-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på standardform i praksis:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-1-4-n-quiz3-q0',
            task: 'Lyset bruker ca. $500$ sekunder fra Sola til Jorda. Med lysets hastighet $3 \\times 10^8$ m/s, hva er avstanden?',
            options: [
              { id: 'a', text: '$1{,}5 \\times 10^{10}$ m', isCorrect: false },
              { id: 'b', text: '$1{,}5 \\times 10^{11}$ m', isCorrect: true },
              { id: 'c', text: '$1{,}5 \\times 10^{6}$ m', isCorrect: false },
              { id: 'd', text: '$6 \\times 10^{10}$ m', isCorrect: false },
            ],
            solution: 'Avstand $= 3 \\times 10^8 \\times 500 = 3 \\times 10^8 \\times 5 \\times 10^2 = 15 \\times 10^{10} = 1{,}5 \\times 10^{11}$ m.',
          },
          {
            id: '9-1-4-n-quiz3-q1',
            task: 'Hvilket tall er størst?',
            options: [
              { id: 'a', text: '$9{,}9 \\times 10^7$', isCorrect: false },
              { id: 'b', text: '$1{,}1 \\times 10^8$', isCorrect: true },
              { id: 'c', text: '$5 \\times 10^7$', isCorrect: false },
              { id: 'd', text: '$99 \\times 10^6$', isCorrect: false },
            ],
            solution: '$1{,}1 \\times 10^8 = 110\\,000\\,000$. $9{,}9 \\times 10^7 = 99\\,000\\,000$. $99 \\times 10^6 = 99\\,000\\,000$. Det største tallet har den største eksponenten (når $a$-verdien er $\\geq 1$).',
          },
        ],
      },
    },

    {
      id: '9-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Standardform:** $a \\times 10^n$ der $1 \\leq a < 10$ og $n$ er et helt tall.

**Store tall** gir positiv eksponent. **Små tall** gir negativ eksponent.

| Operasjon | Regel |
|-----------|-------|
| Multiplikasjon | Gang $a$-verdier, addér eksponenter |
| Divisjon | Del $a$-verdier, subtrahér eksponenter |
| Addisjon/subtraksjon | Gjør eksponentene like først |

Husk alltid å sjekke at svaret er på riktig standardform ($1 \\leq a < 10$). Juster ved å flytte én faktor $10$ mellom $a$ og eksponenten.

Standardform er uunnværlig i vitenskap -- det gjør ekstremt store og små tall håndterbare og sammenliknbare.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_1_1_NARRATIV,
  CHAPTER_9_1_2_NARRATIV,
  CHAPTER_9_1_3_NARRATIV,
  CHAPTER_9_1_4_NARRATIV,
];
