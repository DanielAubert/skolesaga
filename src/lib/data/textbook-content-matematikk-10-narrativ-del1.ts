/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 1
 * Kapittel 1.1-1.4 (Tall og algebra)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1 NARRATIV: Regning med røtter
// ============================================================================

export const CHAPTER_10_1_1_NARRATIV: TextbookChapter = {
  id: '10-1-1-narrativ',
  courseId: '10',
  chapterNumber: '1.1',
  title: 'Regning med røtter',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om kvadratrøtter, forenkling og hvordan vi regner med røtter i praksis.',
  estimatedMinutes: 35,
  competenceGoals: ['bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar'],
  linkedChapterId: '10-1-1',
  content: [
    {
      id: '10-1-1-n-intro',
      type: 'text',
      content: `## Hva gjemmer seg under rottegnet?

Tenk deg at du skal legge fliser på et rom som har et areal på 25 kvadratmeter. Rommet er kvadratisk, så alle sidene er like lange. Hvor lang er hver side? Du trenger et tall som ganget med seg selv gir 25 -- og det tallet er 5. Gratulerer, du har nettopp tatt en kvadratrot!

Kvadratrøtter dukker opp overalt: i Pytagoras' setning, i formler for areal og avstand, og i mange andre sammenhenger. I dette kapittelet skal vi bli komfortable med å finne, forenkle og regne med røtter. Vi starter med det helt grunnleggende og bygger oss opp til å mestre selv de mest kompliserte rotuttrykkene.`,
    },
    {
      id: '10-1-1-n-section1',
      type: 'text',
      content: `## Hva er en kvadratrot?

Kvadratroten av et tall $a$ er det positive tallet som multiplisert med seg selv gir $a$. Vi skriver det med rottegnet $\\sqrt{\\phantom{x}}$, og sammenhengen er:

$$\\sqrt{a} \\cdot \\sqrt{a} = a$$

La oss ta noen eksempler. $\\sqrt{25} = 5$ fordi $5 \\cdot 5 = 25$. Likedan er $\\sqrt{49} = 7$ fordi $7 \\cdot 7 = 49$, og $\\sqrt{144} = 12$ fordi $12 \\cdot 12 = 144$.

Men hva med desimaltall? Systemet fungerer akkurat likt. $\\sqrt{0{,}36} = 0{,}6$ fordi $0{,}6 \\cdot 0{,}6 = 0{,}36$. Og brøker? Der tar vi roten av teller og nevner hver for seg: $\\sqrt{\\frac{9}{16}} = \\frac{3}{4}$ fordi $\\frac{3}{4} \\cdot \\frac{3}{4} = \\frac{9}{16}$.

Det smarte er å tenke baklengs: "Hvilket tall ganget med seg selv gir dette?" Hvis du klarer det, har du funnet kvadratroten. Tallene $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144$ er de første kvadrattallene, og det lønner seg å kunne dem utenat.`,
    },
    {
      id: '10-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kvadratrøtter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-1-n-quiz1-q0',
            task: 'Hva er $\\sqrt{81}$?',
            options: [
              { id: 'a', text: '$8$', isCorrect: false },
              { id: 'b', text: '$9$', isCorrect: true },
              { id: 'c', text: '$7$', isCorrect: false },
              { id: 'd', text: '$10$', isCorrect: false },
            ],
            solution: '$\\sqrt{81} = 9$ fordi $9 \\cdot 9 = 81$.',
          },
          {
            id: '10-1-1-n-quiz1-q1',
            task: 'Hva er $\\sqrt{196}$?',
            options: [
              { id: 'a', text: '$12$', isCorrect: false },
              { id: 'b', text: '$16$', isCorrect: false },
              { id: 'c', text: '$13$', isCorrect: false },
              { id: 'd', text: '$14$', isCorrect: true },
            ],
            solution: '$\\sqrt{196} = 14$ fordi $14 \\cdot 14 = 196$.',
          },
          {
            id: '10-1-1-n-quiz1-q2',
            task: 'Hva er $\\sqrt{0{,}04}$?',
            options: [
              { id: 'a', text: '$0{,}2$', isCorrect: true },
              { id: 'b', text: '$0{,}4$', isCorrect: false },
              { id: 'c', text: '$0{,}02$', isCorrect: false },
              { id: 'd', text: '$2$', isCorrect: false },
            ],
            solution: '$\\sqrt{0{,}04} = 0{,}2$ fordi $0{,}2 \\cdot 0{,}2 = 0{,}04$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-1-n-section2',
      type: 'text',
      content: `## Regneregler for røtter -- produktregelen og brøkregelen

Nå som vi vet hva en kvadratrot er, trenger vi verktøy for å forenkle rotuttrykk. Her kommer to viktige regneregler:

**Produktregelen:** $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$

Denne regelen sier at roten av et produkt er lik produktet av røttene. Den lar oss "trekke ut" faktorer fra under rottegnet.

**Brøkregelen:** $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$

Tilsvarende kan vi ta roten av teller og nevner hver for seg.

La oss bruke produktregelen til å forenkle $\\sqrt{50}$. Vi finner den største kvadrattallsfaktoren som går opp i 50. Det er 25, siden $50 = 25 \\cdot 2$. Dermed:

$$\\sqrt{50} = \\sqrt{25 \\cdot 2} = \\sqrt{25} \\cdot \\sqrt{2} = 5\\sqrt{2}$$

Et annet eksempel: $\\sqrt{72} = \\sqrt{36 \\cdot 2} = \\sqrt{36} \\cdot \\sqrt{2} = 6\\sqrt{2}$. Trikset er altså å lete etter den største kvadrattallsfaktoren under rottegnet. Jo større kvadrattall du finner, desto enklere blir resultatet.

$\\sqrt{32} = \\sqrt{16 \\cdot 2} = 4\\sqrt{2}$, og $\\sqrt{45} = \\sqrt{9 \\cdot 5} = 3\\sqrt{5}$, og $\\sqrt{98} = \\sqrt{49 \\cdot 2} = 7\\sqrt{2}$.`,
    },
    {
      id: '10-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på forenkling av røtter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-1-n-quiz2-q0',
            task: 'Hva er $\\sqrt{200}$ forenklet?',
            options: [
              { id: 'a', text: '$20\\sqrt{2}$', isCorrect: false },
              { id: 'b', text: '$2\\sqrt{100}$', isCorrect: false },
              { id: 'c', text: '$10\\sqrt{2}$', isCorrect: true },
              { id: 'd', text: '$\\sqrt{200}$ kan ikke forenkles', isCorrect: false },
            ],
            solution: '$\\sqrt{200} = \\sqrt{100 \\cdot 2} = \\sqrt{100} \\cdot \\sqrt{2} = 10\\sqrt{2}$.',
          },
          {
            id: '10-1-1-n-quiz2-q1',
            task: 'Hvilken av disse er riktig forenkling av $\\sqrt{45}$?',
            options: [
              { id: 'a', text: '$5\\sqrt{3}$', isCorrect: false },
              { id: 'b', text: '$3\\sqrt{5}$', isCorrect: true },
              { id: 'c', text: '$9\\sqrt{5}$', isCorrect: false },
              { id: 'd', text: '$15$', isCorrect: false },
            ],
            solution: '$\\sqrt{45} = \\sqrt{9 \\cdot 5} = \\sqrt{9} \\cdot \\sqrt{5} = 3\\sqrt{5}$. Den største kvadrattallsfaktoren i 45 er 9.',
          },
          {
            id: '10-1-1-n-quiz2-q2',
            task: 'Hva er produktregelen for røtter?',
            options: [
              { id: 'a', text: '$\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$', isCorrect: false },
              { id: 'b', text: '$\\sqrt{a \\cdot b} = \\sqrt{a} + \\sqrt{b}$', isCorrect: false },
              { id: 'c', text: '$\\sqrt{a - b} = \\sqrt{a} \\cdot \\sqrt{b}$', isCorrect: false },
              { id: 'd', text: '$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$', isCorrect: true },
            ],
            solution: 'Produktregelen sier at $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$. Merk at dette IKKE gjelder for addisjon: $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-1-n-section3',
      type: 'text',
      content: `## Addere og subtrahere røtter

Kan vi legge sammen røtter? Ja, men bare når de har samme "rotinnhold". Tenk på det som å legge sammen like termer i algebra: $3x + 5x = 8x$, og helt tilsvarende er $3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2}$. Vi legger sammen koeffisientene foran, men roten forblir den samme.

Hva om røttene ser ulike ut? Da må vi først forenkle! Ta uttrykket $\\sqrt{8} + \\sqrt{18}$. Ved første blikk ser det ut som disse ikke kan legges sammen, men la oss forenkle hver rot:

$$\\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2} \\quad \\text{og} \\quad \\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$$

Nå har begge $\\sqrt{2}$, og vi kan legge sammen: $2\\sqrt{2} + 3\\sqrt{2} = 5\\sqrt{2}$.

Et annet eksempel: $\\sqrt{50} - \\sqrt{8} = 5\\sqrt{2} - 2\\sqrt{2} = 3\\sqrt{2}$. Og $2\\sqrt{20} + 3\\sqrt{5} = 2 \\cdot 2\\sqrt{5} + 3\\sqrt{5} = 4\\sqrt{5} + 3\\sqrt{5} = 7\\sqrt{5}$.

Husk: du kan aldri forenkle $\\sqrt{2} + \\sqrt{3}$ til en enkel rot. Ulike rotinnhold forblir ulike, akkurat som $x + y$ ikke kan forenkles videre.`,
    },
    {
      id: '10-1-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-1-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på addisjon og subtraksjon av røtter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-1-n-quiz3-q0',
            task: 'Hva er $7\\sqrt{3} - 2\\sqrt{3}$?',
            options: [
              { id: 'a', text: '$5\\sqrt{6}$', isCorrect: false },
              { id: 'b', text: '$5\\sqrt{3}$', isCorrect: true },
              { id: 'c', text: '$9\\sqrt{3}$', isCorrect: false },
              { id: 'd', text: '$14\\sqrt{3}$', isCorrect: false },
            ],
            solution: 'Vi legger sammen koeffisientene: $7\\sqrt{3} - 2\\sqrt{3} = (7-2)\\sqrt{3} = 5\\sqrt{3}$.',
          },
          {
            id: '10-1-1-n-quiz3-q1',
            task: 'Hva er $\\sqrt{12} + \\sqrt{27}$ forenklet?',
            options: [
              { id: 'a', text: '$\\sqrt{39}$', isCorrect: false },
              { id: 'b', text: '$6\\sqrt{3}$', isCorrect: false },
              { id: 'c', text: '$5\\sqrt{3}$', isCorrect: true },
              { id: 'd', text: '$2\\sqrt{3} + 3\\sqrt{3}$', isCorrect: false },
            ],
            solution: '$\\sqrt{12} = 2\\sqrt{3}$ og $\\sqrt{27} = 3\\sqrt{3}$, så $2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}$. Merk at alternativ d) er riktig mellomsteg, men ikke ferdig forenklet.',
          },
          {
            id: '10-1-1-n-quiz3-q2',
            task: 'Hva er $2\\sqrt{20} + 3\\sqrt{5}$?',
            options: [
              { id: 'a', text: '$5\\sqrt{25}$', isCorrect: false },
              { id: 'b', text: '$10\\sqrt{5}$', isCorrect: false },
              { id: 'c', text: '$2\\sqrt{20} + 3\\sqrt{5}$', isCorrect: false },
              { id: 'd', text: '$7\\sqrt{5}$', isCorrect: true },
            ],
            solution: '$2\\sqrt{20} = 2 \\cdot 2\\sqrt{5} = 4\\sqrt{5}$, så $4\\sqrt{5} + 3\\sqrt{5} = 7\\sqrt{5}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-1-n-section4',
      type: 'text',
      content: `## Multiplisere røtter

Multiplikasjon av røtter er kanskje den enkleste operasjonen. Takket være produktregelen ganger vi bare innholdet under rottegnene sammen:

$$\\sqrt{3} \\cdot \\sqrt{12} = \\sqrt{3 \\cdot 12} = \\sqrt{36} = 6$$

Når vi har koeffisienter foran røttene, ganger vi koeffisientene for seg og rotinnholdet for seg:

$$2\\sqrt{6} \\cdot 3\\sqrt{2} = (2 \\cdot 3) \\cdot \\sqrt{6 \\cdot 2} = 6\\sqrt{12} = 6 \\cdot 2\\sqrt{3} = 12\\sqrt{3}$$

Her er noen flere eksempler: $\\sqrt{5} \\cdot \\sqrt{20} = \\sqrt{100} = 10$, og $\\sqrt{6} \\cdot \\sqrt{24} = \\sqrt{144} = 12$.

Hva med $3\\sqrt{2} \\cdot 4\\sqrt{8}$? Vi får $12\\sqrt{16} = 12 \\cdot 4 = 48$.

Og $(2\\sqrt{3})^2$? Å kvadrere betyr å gange med seg selv: $(2\\sqrt{3})^2 = 2^2 \\cdot (\\sqrt{3})^2 = 4 \\cdot 3 = 12$. Merk at $\\sqrt{3}$ ganget med $\\sqrt{3}$ gir akkurat 3 -- det er jo hele definisjonen av kvadratrot!`,
    },
    {
      id: '10-1-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-1-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på multiplikasjon av røtter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-1-n-quiz4-q0',
            task: 'Hva er $\\sqrt{5} \\cdot \\sqrt{20}$?',
            options: [
              { id: 'a', text: '$10$', isCorrect: true },
              { id: 'b', text: '$\\sqrt{25}$', isCorrect: false },
              { id: 'c', text: '$5\\sqrt{4}$', isCorrect: false },
              { id: 'd', text: '$100$', isCorrect: false },
            ],
            solution: '$\\sqrt{5} \\cdot \\sqrt{20} = \\sqrt{5 \\cdot 20} = \\sqrt{100} = 10$.',
          },
          {
            id: '10-1-1-n-quiz4-q1',
            task: 'Hva er $(2\\sqrt{3})^2$?',
            options: [
              { id: 'a', text: '$6$', isCorrect: false },
              { id: 'b', text: '$36$', isCorrect: false },
              { id: 'c', text: '$12$', isCorrect: true },
              { id: 'd', text: '$4\\sqrt{3}$', isCorrect: false },
            ],
            solution: '$(2\\sqrt{3})^2 = 2^2 \\cdot (\\sqrt{3})^2 = 4 \\cdot 3 = 12$.',
          },
          {
            id: '10-1-1-n-quiz4-q2',
            task: 'Hva er $3\\sqrt{2} \\cdot 4\\sqrt{8}$?',
            options: [
              { id: 'a', text: '$12\\sqrt{10}$', isCorrect: false },
              { id: 'b', text: '$48$', isCorrect: true },
              { id: 'c', text: '$12\\sqrt{16}$', isCorrect: false },
              { id: 'd', text: '$24$', isCorrect: false },
            ],
            solution: '$3\\sqrt{2} \\cdot 4\\sqrt{8} = 12\\sqrt{16} = 12 \\cdot 4 = 48$. Merk at alternativ c) er et mellomsteg, men ikke ferdig forenklet.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært at **kvadratroten** av et tall $a$ er det positive tallet som ganget med seg selv gir $a$. Vi har to viktige regneregler: **produktregelen** $\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$ og **brøkregelen** $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$.

For å **forenkle** en rot leter vi etter den største kvadrattallsfaktoren under rottegnet. Vi kan **addere og subtrahere** røtter som har likt rotinnhold, akkurat som vi legger sammen like termer i algebra. Vi kan **multiplisere** røtter ved å gange rotinnholdet sammen.

Disse ferdighetene er grunnlaget for mye av det vi skal jobbe med videre i algebra og geometri.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2 NARRATIV: Rasjonale tall
// ============================================================================

export const CHAPTER_10_1_2_NARRATIV: TextbookChapter = {
  id: '10-1-2-narrativ',
  courseId: '10',
  chapterNumber: '1.2',
  title: 'Rasjonale tall',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om brøker, desimaltall og hvordan vi kan gjøre om mellom ulike representasjoner.',
  estimatedMinutes: 35,
  competenceGoals: ['bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar'],
  linkedChapterId: '10-1-2',
  content: [
    {
      id: '10-1-2-n-intro',
      type: 'text',
      content: `## Tallenes mange ansikter

Visste du at $0{,}5$, $\\frac{1}{2}$ og $50\\,\\%$ alle er det samme tallet? Tall kan kle seg ut i mange forkledninger, og i dette kapittelet skal vi bli eksperter på å avsløre dem. Vi skal jobbe med rasjonale tall -- den store familien av tall som kan skrives som brøker.

Når du deler en pizza i fire og spiser tre stykker, har du spist $\\frac{3}{4}$ av pizzaen. Det er det samme som $0{,}75$ av pizzaen. Brøker og desimaltall er to måter å uttrykke det samme på, og vi trenger å beherske begge.`,
    },
    {
      id: '10-1-2-n-section1',
      type: 'text',
      content: `## Hva er rasjonale tall?

Et **rasjonalt tall** er et tall som kan skrives på formen $\\frac{p}{q}$ der $p$ og $q$ er heltall og $q \\neq 0$. Det høres kanskje teknisk ut, men egentlig er det veldig inkluderende. Rasjonale tall omfatter:

- **Heltall**, for eksempel $5 = \\frac{5}{1}$ og $-3 = \\frac{-3}{1}$
- **Vanlige brøker**, for eksempel $\\frac{3}{4}$ og $\\frac{7}{8}$
- **Endelige desimaltall**, for eksempel $0{,}75 = \\frac{3}{4}$
- **Periodiske desimaltall**, for eksempel $0{,}333\\ldots = \\frac{1}{3}$

Tall som IKKE er rasjonale kalles irrasjonale. $\\sqrt{2}$, $\\pi$ og $e$ er eksempler -- de kan ikke skrives som brøk, og desimalutviklingen deres fortsetter uendelig uten å gjenta seg.

Å gjøre om fra desimaltall til brøk er en nyttig ferdighet. For endelige desimaltall er det rett frem: $0{,}625 = \\frac{625}{1000}$, og etter forkorting blir det $\\frac{5}{8}$. Tilsvarende er $2{,}4 = \\frac{24}{10} = \\frac{12}{5}$.`,
    },
    {
      id: '10-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på rasjonale tall:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-2-n-quiz1-q0',
            task: 'Hva er $0{,}375$ skrevet som brøk i laveste form?',
            options: [
              { id: 'a', text: '$\\frac{375}{1000}$', isCorrect: false },
              { id: 'b', text: '$\\frac{3}{8}$', isCorrect: true },
              { id: 'c', text: '$\\frac{37}{100}$', isCorrect: false },
              { id: 'd', text: '$\\frac{15}{40}$', isCorrect: false },
            ],
            solution: '$0{,}375 = \\frac{375}{1000}$. Vi forkorter med 125: $\\frac{375 \\div 125}{1000 \\div 125} = \\frac{3}{8}$.',
          },
          {
            id: '10-1-2-n-quiz1-q1',
            task: 'Hvilket av disse tallene er IKKE et rasjonalt tall?',
            options: [
              { id: 'a', text: '$\\frac{7}{3}$', isCorrect: false },
              { id: 'b', text: '$0{,}\\overline{6}$', isCorrect: false },
              { id: 'c', text: '$\\sqrt{2}$', isCorrect: true },
              { id: 'd', text: '$-4$', isCorrect: false },
            ],
            solution: '$\\sqrt{2}$ er irrasjonalt -- det kan ikke skrives som en brøk av heltall. De andre er alle rasjonale: $\\frac{7}{3}$ er allerede en brøk, $0{,}\\overline{6} = \\frac{2}{3}$, og $-4 = \\frac{-4}{1}$.',
          },
          {
            id: '10-1-2-n-quiz1-q2',
            task: 'Hva er $0{,}125$ som brøk i laveste form?',
            options: [
              { id: 'a', text: '$\\frac{1}{4}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{6}$', isCorrect: false },
              { id: 'c', text: '$\\frac{5}{40}$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{8}$', isCorrect: true },
            ],
            solution: '$0{,}125 = \\frac{125}{1000} = \\frac{1}{8}$ etter forkorting med 125.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-2-n-section2',
      type: 'text',
      content: `## Periodiske desimaltall til brøk -- et triks med algebra

Noen desimaltall slutter aldri, men de gjentar seg. $0{,}333\\ldots$ gjentar sifferet 3, og vi skriver dette som $0{,}\\overline{3}$. Hvordan gjør vi slike tall om til brøk? Her bruker vi et elegant algebraisk triks.

La oss ta $0{,}\\overline{6}$ (altså $0{,}666\\ldots$). Vi setter $x = 0{,}666\\ldots$. Ganger vi begge sider med 10, får vi $10x = 6{,}666\\ldots$. Nå trekker vi den opprinnelige likningen fra: $10x - x = 6{,}666\\ldots - 0{,}666\\ldots$, som gir $9x = 6$, altså $x = \\frac{6}{9} = \\frac{2}{3}$.

Hva om to siffer gjentar seg? Ta $0{,}\\overline{27}$ (altså $0{,}272727\\ldots$). Sett $x = 0{,}2727\\ldots$. Gang med 100: $100x = 27{,}2727\\ldots$. Trekk fra: $100x - x = 27$, altså $99x = 27$, og $x = \\frac{27}{99} = \\frac{3}{11}$.

Mønsteret er: gang med 10 for hvert gjentakende siffer, og trekk fra for å eliminere den periodiske delen. Prøv selv: $0{,}\\overline{45} = \\frac{45}{99} = \\frac{5}{11}$.`,
    },
    {
      id: '10-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på periodiske desimaltall:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-2-n-quiz2-q0',
            task: 'Hva er $0{,}\\overline{3}$ som brøk?',
            options: [
              { id: 'a', text: '$\\frac{3}{10}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{3}$', isCorrect: true },
              { id: 'c', text: '$\\frac{3}{9}$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{9}$', isCorrect: false },
            ],
            solution: '$0{,}\\overline{3}$: La $x = 0{,}333\\ldots$. Da er $10x = 3{,}333\\ldots$, og $9x = 3$, altså $x = \\frac{3}{9} = \\frac{1}{3}$. Merk at $\\frac{3}{9}$ er riktig men ikke i laveste form.',
          },
          {
            id: '10-1-2-n-quiz2-q1',
            task: 'Hva er $0{,}\\overline{18}$ som brøk i laveste form?',
            options: [
              { id: 'a', text: '$\\frac{18}{99}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{9}$', isCorrect: false },
              { id: 'c', text: '$\\frac{2}{11}$', isCorrect: true },
              { id: 'd', text: '$\\frac{9}{50}$', isCorrect: false },
            ],
            solution: '$0{,}\\overline{18} = \\frac{18}{99} = \\frac{2}{11}$ etter forkorting med 9.',
          },
          {
            id: '10-1-2-n-quiz2-q2',
            task: 'Når vi gjør om $0{,}\\overline{45}$ til brøk, hva ganger vi $x$ med?',
            options: [
              { id: 'a', text: '$10$', isCorrect: false },
              { id: 'b', text: '$100$', isCorrect: true },
              { id: 'c', text: '$1000$', isCorrect: false },
              { id: 'd', text: '$45$', isCorrect: false },
            ],
            solution: 'Siden to siffer gjentar seg (45), ganger vi med $100$ for å flytte desimalkommaet to plasser. $100x - x = 45$, som gir $99x = 45$ og $x = \\frac{5}{11}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-2-n-section3',
      type: 'text',
      content: `## Regning med brøker -- addisjon og subtraksjon

Nå skal vi friske opp brøkregning. For å addere eller subtrahere brøker trenger vi **fellesnevner** -- det vil si at brøkene må ha lik nevner.

Ta $\\frac{2}{3} + \\frac{3}{4}$. Fellesnevneren er 12 (det minste tallet som er delelig med både 3 og 4). Vi utvider begge brøkene: $\\frac{2}{3} = \\frac{8}{12}$ og $\\frac{3}{4} = \\frac{9}{12}$. Da blir svaret $\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}$.

For subtraksjon bruker vi samme prinsipp: $\\frac{5}{6} - \\frac{1}{4}$. Fellesnevner er 12: $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.

Med blanda tall gjør vi om til uekte brøker først. $2\\frac{1}{3} - 1\\frac{3}{4} = \\frac{7}{3} - \\frac{7}{4} = \\frac{28}{12} - \\frac{21}{12} = \\frac{7}{12}$.`,
    },
    {
      id: '10-1-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-1-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på addisjon og subtraksjon av brøker:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-2-n-quiz3-q0',
            task: 'Hva er $\\frac{3}{5} + \\frac{1}{4}$?',
            options: [
              { id: 'a', text: '$\\frac{4}{9}$', isCorrect: false },
              { id: 'b', text: '$\\frac{17}{20}$', isCorrect: true },
              { id: 'c', text: '$\\frac{7}{20}$', isCorrect: false },
              { id: 'd', text: '$\\frac{13}{20}$', isCorrect: false },
            ],
            solution: 'Fellesnevner 20: $\\frac{12}{20} + \\frac{5}{20} = \\frac{17}{20}$.',
          },
          {
            id: '10-1-2-n-quiz3-q1',
            task: 'Hva er $\\frac{7}{8} - \\frac{2}{3}$?',
            options: [
              { id: 'a', text: '$\\frac{5}{5}$', isCorrect: false },
              { id: 'b', text: '$\\frac{5}{8}$', isCorrect: false },
              { id: 'c', text: '$\\frac{5}{24}$', isCorrect: true },
              { id: 'd', text: '$\\frac{13}{24}$', isCorrect: false },
            ],
            solution: 'Fellesnevner 24: $\\frac{21}{24} - \\frac{16}{24} = \\frac{5}{24}$.',
          },
          {
            id: '10-1-2-n-quiz3-q2',
            task: 'Hva er fellesnevneren for $\\frac{5}{6}$ og $\\frac{7}{9}$?',
            options: [
              { id: 'a', text: '$54$', isCorrect: false },
              { id: 'b', text: '$15$', isCorrect: false },
              { id: 'c', text: '$18$', isCorrect: true },
              { id: 'd', text: '$36$', isCorrect: false },
            ],
            solution: 'Den minste fellesnevneren er 18, som er det minste tallet delelig med både 6 og 9. $\\frac{5}{6} + \\frac{7}{9} = \\frac{15}{18} + \\frac{14}{18} = \\frac{29}{18}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-2-n-section4',
      type: 'text',
      content: `## Multiplikasjon og divisjon av brøker

Multiplikasjon av brøker er faktisk enklere enn addisjon -- vi trenger ikke fellesnevner! Vi ganger teller med teller og nevner med nevner:

$$\\frac{3}{4} \\cdot \\frac{8}{9} = \\frac{3 \\cdot 8}{4 \\cdot 9} = \\frac{24}{36} = \\frac{2}{3}$$

Et tips: forkort underveis for å slippe store tall. I eksempelet over kunne vi sett at 3 i telleren og 9 i nevneren kan forkortes med 3, og at 8 i telleren og 4 i nevneren kan forkortes med 4.

Divisjon med brøk handler om å **snu og gange**. Når du deler med en brøk, snur du den andre brøken og ganger i stedet:

$$\\frac{5}{6} : \\frac{2}{3} = \\frac{5}{6} \\cdot \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4}$$

Hvorfor fungerer dette? Å dele med $\\frac{2}{3}$ er det samme som å spørre "hvor mange $\\frac{2}{3}$-deler går det i $\\frac{5}{6}$?" Å gange med den omvendte brøken gir oss svaret.

Et morsomt eksempel: $\\frac{2}{3} \\cdot \\frac{9}{4} \\cdot \\frac{2}{3} = \\frac{2 \\cdot 9 \\cdot 2}{3 \\cdot 4 \\cdot 3} = \\frac{36}{36} = 1$. Når produktet av brøker blir 1, er det fordi alle faktorene kansellerer hverandre.`,
    },
    {
      id: '10-1-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-1-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på multiplikasjon og divisjon av brøker:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-2-n-quiz4-q0',
            task: 'Hva er $\\frac{5}{8} \\cdot \\frac{4}{15}$?',
            options: [
              { id: 'a', text: '$\\frac{1}{6}$', isCorrect: true },
              { id: 'b', text: '$\\frac{20}{120}$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{3}$', isCorrect: false },
              { id: 'd', text: '$\\frac{9}{23}$', isCorrect: false },
            ],
            solution: '$\\frac{5}{8} \\cdot \\frac{4}{15} = \\frac{20}{120} = \\frac{1}{6}$. Eventuelt kan vi forkorte underveis: $\\frac{5}{8} \\cdot \\frac{4}{15} = \\frac{1}{2} \\cdot \\frac{1}{3} = \\frac{1}{6}$.',
          },
          {
            id: '10-1-2-n-quiz4-q1',
            task: 'Hva er $\\frac{9}{10} : \\frac{3}{5}$?',
            options: [
              { id: 'a', text: '$\\frac{27}{50}$', isCorrect: false },
              { id: 'b', text: '$\\frac{3}{2}$', isCorrect: true },
              { id: 'c', text: '$\\frac{6}{10}$', isCorrect: false },
              { id: 'd', text: '$\\frac{2}{3}$', isCorrect: false },
            ],
            solution: 'Snu og gang: $\\frac{9}{10} \\cdot \\frac{5}{3} = \\frac{45}{30} = \\frac{3}{2}$.',
          },
          {
            id: '10-1-2-n-quiz4-q2',
            task: 'Hva er regelen for divisjon med brøk?',
            options: [
              { id: 'a', text: 'Del teller med teller og nevner med nevner', isCorrect: false },
              { id: 'b', text: 'Finn fellesnevner og del', isCorrect: false },
              { id: 'c', text: 'Gang begge brøkene med nevneren', isCorrect: false },
              { id: 'd', text: 'Snu den andre brøken og gang', isCorrect: true },
            ],
            solution: 'Når vi deler med en brøk, snur vi den (bytter teller og nevner) og ganger i stedet. $\\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Rasjonale tall** er tall som kan skrives som $\\frac{p}{q}$ der $p$ og $q$ er heltall og $q \\neq 0$. De inkluderer heltall, vanlige brøker, endelige desimaltall og periodiske desimaltall.

For å gjøre om **endelige desimaltall** til brøk, skriver vi desimaltallet over en tierpotens og forkorter. For **periodiske desimaltall** bruker vi et algebraisk triks med å gange med en tierpotens og trekke fra.

For **addisjon og subtraksjon** av brøker trenger vi fellesnevner. For **multiplikasjon** ganger vi teller med teller og nevner med nevner. For **divisjon** snur vi den andre brøken og ganger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3 NARRATIV: Faktorisering og forenkling
// ============================================================================

export const CHAPTER_10_1_3_NARRATIV: TextbookChapter = {
  id: '10-1-3-narrativ',
  courseId: '10',
  chapterNumber: '1.3',
  title: 'Faktorisering og forenkling',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om å "pakke opp" algebraiske uttrykk, finne felles faktorer og mestre kvadratsetningene.',
  estimatedMinutes: 40,
  competenceGoals: ['bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar'],
  linkedChapterId: '10-1-3',
  content: [
    {
      id: '10-1-3-n-intro',
      type: 'text',
      content: `## Algebra som puslespill

Tenk deg at du har uttrykket $x^2 - 9$. Det ser kanskje enkelt ut, men det gjemmer en hemmelighet: det kan skrives som $(x+3)(x-3)$. Denne "oppdelingen" av uttrykk i faktorer kalles faktorisering, og det er en av de viktigste ferdighetene i algebra.

Hvorfor bryr vi oss? Fordi faktorisering lar oss forenkle brøker, løse likninger og se sammenhenger som ellers er usynlige. Det er som å knekke en kode -- når du ser mønsteret, åpner dørene seg.`,
    },
    {
      id: '10-1-3-n-section1',
      type: 'text',
      content: `## Felles faktor -- det enkleste trikset

Å **faktorisere** betyr å skrive et uttrykk som et produkt av faktorer. Det enkleste tilfellet er når alle leddene har en felles faktor som vi kan "trekke ut".

Grunnregelen er: $ab + ac = a(b + c)$. Vi finner det som er felles og setter det utenfor en parentes.

La oss ta $6x + 9$. Begge leddene er delelige med 3: $6x + 9 = 3(2x + 3)$.

Hva med $4x^2 - 8x$? Her er felles faktor $4x$ (begge leddene har minst $4$ og minst $x$): $4x^2 - 8x = 4x(x - 2)$.

For $15x^2y + 10xy^2$ ser vi at begge leddene inneholder $5xy$: $15x^2y + 10xy^2 = 5xy(3x + 2y)$.

Trikset er å finne den **største** felles faktoren. $8x + 12$ kan skrives som $2(4x + 6)$, men det er ikke ferdig forenklet! Den største felles faktoren er 4: $8x + 12 = 4(2x + 3)$.

Med tre ledd fungerer det på samme måte: $20x^3 - 8x^2 + 4x$. Alle tre leddene har felles faktor $4x$, så $20x^3 - 8x^2 + 4x = 4x(5x^2 - 2x + 1)$.`,
    },
    {
      id: '10-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering med felles faktor:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-3-n-quiz1-q0',
            task: 'Hva er $6x^2 - 15x$ faktorisert?',
            options: [
              { id: 'a', text: '$3(2x^2 - 5x)$', isCorrect: false },
              { id: 'b', text: '$3x(2x - 5)$', isCorrect: true },
              { id: 'c', text: '$x(6x - 15)$', isCorrect: false },
              { id: 'd', text: '$3x(2x + 5)$', isCorrect: false },
            ],
            solution: 'Største felles faktor er $3x$: $6x^2 - 15x = 3x(2x - 5)$.',
          },
          {
            id: '10-1-3-n-quiz1-q1',
            task: 'Hva er $12ab + 18a^2$ faktorisert?',
            options: [
              { id: 'a', text: '$6a(2b + 3a)$', isCorrect: true },
              { id: 'b', text: '$2a(6b + 9a)$', isCorrect: false },
              { id: 'c', text: '$6(2ab + 3a^2)$', isCorrect: false },
              { id: 'd', text: '$6a(2b - 3a)$', isCorrect: false },
            ],
            solution: 'Største felles faktor er $6a$: $12ab + 18a^2 = 6a(2b + 3a)$.',
          },
          {
            id: '10-1-3-n-quiz1-q2',
            task: 'Hva betyr det å faktorisere et uttrykk?',
            options: [
              { id: 'a', text: 'Å gange ut parenteser', isCorrect: false },
              { id: 'b', text: 'Å finne nullpunktene', isCorrect: false },
              { id: 'c', text: 'Å skrive uttrykket som et produkt av faktorer', isCorrect: true },
              { id: 'd', text: 'Å forenkle brøker', isCorrect: false },
            ],
            solution: 'Å faktorisere betyr å skrive et uttrykk som et produkt av faktorer. Det er det motsatte av å gange ut parenteser.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-3-n-section2',
      type: 'text',
      content: `## Kvadratsetningene -- tre gullformler

Det finnes tre algebraiske identiteter som dukker opp så ofte at de har fått egne navn. Disse tre **kvadratsetningene** er:

**Første kvadratsetning:** $(a + b)^2 = a^2 + 2ab + b^2$

**Andre kvadratsetning:** $(a - b)^2 = a^2 - 2ab + b^2$

**Konjugatsetningen:** $(a + b)(a - b) = a^2 - b^2$

Vi bruker disse "baklengs" for å faktorisere. Ser du et uttrykk som $x^2 + 6x + 9$? Sjekk om det matcher en av kvadratsetningene. Her er $a = x$ og $b = 3$, for $3^2 = 9$ og $2 \\cdot x \\cdot 3 = 6x$. Altså: $x^2 + 6x + 9 = (x + 3)^2$.

Hva med $x^2 - 10x + 25$? Her er $a = x$ og $b = 5$: $x^2 - 10x + 25 = (x - 5)^2$.

Og $x^2 - 16$? Det er en differanse av kvadrater: $x^2 - 16 = x^2 - 4^2 = (x + 4)(x - 4)$.

Konjugatsetningen er spesielt nyttig fordi differansen av to kvadrater er et svært vanlig mønster. $4x^2 - 25 = (2x)^2 - 5^2 = (2x + 5)(2x - 5)$ -- legg merke til at vi her bruker $a = 2x$ og $b = 5$.`,
    },
    {
      id: '10-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kvadratsetningene:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-3-n-quiz2-q0',
            task: 'Hva er $x^2 + 8x + 16$ faktorisert?',
            options: [
              { id: 'a', text: '$(x + 4)^2$', isCorrect: true },
              { id: 'b', text: '$(x + 8)(x + 2)$', isCorrect: false },
              { id: 'c', text: '$(x - 4)^2$', isCorrect: false },
              { id: 'd', text: '$(x + 4)(x - 4)$', isCorrect: false },
            ],
            solution: '$x^2 + 8x + 16 = x^2 + 2 \\cdot x \\cdot 4 + 4^2 = (x + 4)^2$ (første kvadratsetning).',
          },
          {
            id: '10-1-3-n-quiz2-q1',
            task: 'Hva er $x^2 - 81$ faktorisert?',
            options: [
              { id: 'a', text: '$(x - 9)^2$', isCorrect: false },
              { id: 'b', text: '$(x + 9)(x - 9)$', isCorrect: true },
              { id: 'c', text: '$(x + 9)^2$', isCorrect: false },
              { id: 'd', text: '$(x - 81)(x + 1)$', isCorrect: false },
            ],
            solution: '$x^2 - 81 = x^2 - 9^2 = (x + 9)(x - 9)$ (konjugatsetningen).',
          },
          {
            id: '10-1-3-n-quiz2-q2',
            task: 'Hva er $4x^2 - 25$ faktorisert?',
            options: [
              { id: 'a', text: '$(4x + 5)(x - 5)$', isCorrect: false },
              { id: 'b', text: '$(2x - 5)^2$', isCorrect: false },
              { id: 'c', text: '$(2x + 5)(2x - 5)$', isCorrect: true },
              { id: 'd', text: '$(2x + 5)^2$', isCorrect: false },
            ],
            solution: '$4x^2 - 25 = (2x)^2 - 5^2 = (2x + 5)(2x - 5)$ (konjugatsetningen med $a = 2x$ og $b = 5$).',
          },
          {
            id: '10-1-3-n-quiz2-q3',
            task: 'Hva er $x^2 - 14x + 49$ faktorisert?',
            options: [
              { id: 'a', text: '$(x + 7)(x - 7)$', isCorrect: false },
              { id: 'b', text: '$(x + 7)^2$', isCorrect: false },
              { id: 'c', text: '$(x - 14)(x - 7)$', isCorrect: false },
              { id: 'd', text: '$(x - 7)^2$', isCorrect: true },
            ],
            solution: '$x^2 - 14x + 49 = x^2 - 2 \\cdot x \\cdot 7 + 7^2 = (x - 7)^2$ (andre kvadratsetning).',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-3-n-section3',
      type: 'text',
      content: `## Faktorisere andregradsuttrykk -- finne tallparet

Ikke alle andregradsuttrykk matcher kvadratsetningene. For et generelt uttrykk som $x^2 + 5x + 6$ trenger vi en annen strategi. Vi søker to tall som **ganget gir konstantleddet** (6) og **summert gir koeffisienten foran $x$** (5).

For $x^2 + 5x + 6$: Hvilke to tall ganget gir 6 og summert gir 5? Svaret er 2 og 3, fordi $2 \\cdot 3 = 6$ og $2 + 3 = 5$. Altså: $x^2 + 5x + 6 = (x + 2)(x + 3)$.

Hva med $x^2 - 2x - 15$? Vi trenger to tall som ganget gir $-15$ og summert gir $-2$. Det er 3 og $-5$, fordi $3 \\cdot (-5) = -15$ og $3 + (-5) = -2$. Altså: $x^2 - 2x - 15 = (x + 3)(x - 5)$.

La oss ta et par til: $x^2 + 7x + 12 = (x + 3)(x + 4)$ fordi $3 \\cdot 4 = 12$ og $3 + 4 = 7$. Og $x^2 - 11x + 30 = (x - 5)(x - 6)$ fordi $(-5) \\cdot (-6) = 30$ og $(-5) + (-6) = -11$.

Pass på fortegnene! Hvis konstantleddet er positivt, har begge tallene likt fortegn (begge positive eller begge negative). Hvis konstantleddet er negativt, har tallene ulikt fortegn.`,
    },
    {
      id: '10-1-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-1-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på faktorisering av andregradsuttrykk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-3-n-quiz3-q0',
            task: 'Hva er $x^2 - x - 12$ faktorisert?',
            options: [
              { id: 'a', text: '$(x + 3)(x - 4)$', isCorrect: true },
              { id: 'b', text: '$(x - 3)(x + 4)$', isCorrect: false },
              { id: 'c', text: '$(x + 2)(x - 6)$', isCorrect: false },
              { id: 'd', text: '$(x - 2)(x + 6)$', isCorrect: false },
            ],
            solution: 'Vi trenger to tall som ganget gir $-12$ og summert gir $-1$. Det er $3$ og $-4$: $3 \\cdot (-4) = -12$ og $3 + (-4) = -1$. Altså $(x + 3)(x - 4)$.',
          },
          {
            id: '10-1-3-n-quiz3-q1',
            task: 'Hva er $x^2 + 2x - 35$ faktorisert?',
            options: [
              { id: 'a', text: '$(x - 7)(x + 5)$', isCorrect: false },
              { id: 'b', text: '$(x + 7)(x - 5)$', isCorrect: true },
              { id: 'c', text: '$(x + 5)(x + 7)$', isCorrect: false },
              { id: 'd', text: '$(x - 5)(x - 7)$', isCorrect: false },
            ],
            solution: 'Vi trenger to tall som ganget gir $-35$ og summert gir $2$. Det er $7$ og $-5$: $7 \\cdot (-5) = -35$ og $7 + (-5) = 2$. Altså $(x + 7)(x - 5)$.',
          },
          {
            id: '10-1-3-n-quiz3-q2',
            task: 'For $x^2 + bx + c$, hva skal de to tallene oppfylle?',
            options: [
              { id: 'a', text: 'Ganget gi $b$ og summert gi $c$', isCorrect: false },
              { id: 'b', text: 'Ganget gi $c$ og summert gi $b$', isCorrect: true },
              { id: 'c', text: 'Ganget gi $b \\cdot c$ og summert gi $b + c$', isCorrect: false },
              { id: 'd', text: 'Begge skal være lik $c$', isCorrect: false },
            ],
            solution: 'Vi søker to tall $m$ og $n$ slik at $m \\cdot n = c$ (konstantleddet) og $m + n = b$ (koeffisienten foran $x$). Da er $x^2 + bx + c = (x + m)(x + n)$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-3-n-section4',
      type: 'text',
      content: `## Forenkle algebraiske brøker

Nå kommer belønningen for all faktoriseringsøvelsen! Algebraiske brøker forenkles ved å **faktorisere teller og nevner** og deretter **forkorte like faktorer**.

Ta $\\frac{x^2 - 9}{x + 3}$. Vi faktoriserer telleren: $x^2 - 9 = (x+3)(x-3)$. Da blir brøken $\\frac{(x+3)(x-3)}{x+3}$. Faktoren $(x+3)$ finnes i både teller og nevner, så vi kan forkorte: $\\frac{(x+3)(x-3)}{x+3} = x - 3$.

Et mer avansert eksempel: $\\frac{x^2 + 5x + 6}{x^2 - 4}$. Teller: $x^2 + 5x + 6 = (x+2)(x+3)$. Nevner: $x^2 - 4 = (x+2)(x-2)$. Forkorter $(x+2)$: $\\frac{(x+2)(x+3)}{(x+2)(x-2)} = \\frac{x+3}{x-2}$.

La oss ta den vanskeligste: $\\frac{2x^2 - 8}{x^2 + 4x + 4}$. I telleren trekker vi ut 2 først: $2x^2 - 8 = 2(x^2 - 4) = 2(x+2)(x-2)$. Nevneren er $(x+2)^2$. Forkorter én $(x+2)$: $\\frac{2(x+2)(x-2)}{(x+2)^2} = \\frac{2(x-2)}{x+2}$.

Merk: Vi kan bare forkorte **faktorer** (ting som er ganget sammen), aldri **ledd** (ting som er addert). $\\frac{x + 3}{x + 5}$ kan IKKE forenkles!`,
    },
    {
      id: '10-1-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-1-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på forenkling av algebraiske brøker:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-3-n-quiz4-q0',
            task: 'Hva er $\\frac{x^2 - 25}{x - 5}$ forenklet?',
            options: [
              { id: 'a', text: '$x - 5$', isCorrect: false },
              { id: 'b', text: '$x + 5$', isCorrect: true },
              { id: 'c', text: '$\\frac{x + 5}{x - 5}$', isCorrect: false },
              { id: 'd', text: '$x^2 - 5$', isCorrect: false },
            ],
            solution: '$\\frac{x^2 - 25}{x - 5} = \\frac{(x+5)(x-5)}{x - 5} = x + 5$.',
          },
          {
            id: '10-1-3-n-quiz4-q1',
            task: 'Hva er $\\frac{x^2 + 6x + 9}{x^2 - 9}$ forenklet?',
            options: [
              { id: 'a', text: '$\\frac{x+3}{x-3}$', isCorrect: true },
              { id: 'b', text: '$\\frac{x-3}{x+3}$', isCorrect: false },
              { id: 'c', text: '$x + 3$', isCorrect: false },
              { id: 'd', text: '$\\frac{(x+3)^2}{x-3}$', isCorrect: false },
            ],
            solution: 'Teller: $(x+3)^2$. Nevner: $(x+3)(x-3)$. Forkorter $(x+3)$: $\\frac{x+3}{x-3}$.',
          },
          {
            id: '10-1-3-n-quiz4-q2',
            task: 'Hva er $\\frac{x^2 - 4x - 5}{x^2 - 1}$ forenklet?',
            options: [
              { id: 'a', text: '$\\frac{x+5}{x+1}$', isCorrect: false },
              { id: 'b', text: '$x - 5$', isCorrect: false },
              { id: 'c', text: '$\\frac{x-5}{x+1}$', isCorrect: false },
              { id: 'd', text: '$\\frac{x-5}{x-1}$', isCorrect: true },
            ],
            solution: 'Teller: $(x-5)(x+1)$. Nevner: $(x+1)(x-1)$. Forkorter $(x+1)$: $\\frac{x-5}{x-1}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Faktorisering** er å skrive et uttrykk som et produkt. Vi har lært tre hovedmetoder:

1. **Felles faktor:** $ab + ac = a(b + c)$ -- trekk ut det som er felles for alle ledd.
2. **Kvadratsetningene:** $(a+b)^2 = a^2 + 2ab + b^2$, $(a-b)^2 = a^2 - 2ab + b^2$, og $(a+b)(a-b) = a^2 - b^2$.
3. **Tallparet:** For $x^2 + bx + c$, finn to tall som ganget gir $c$ og summert gir $b$.

For å **forenkle algebraiske brøker** faktoriserer vi teller og nevner, og forkorter like faktorer. Husk at vi bare kan forkorte faktorer, aldri ledd!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4 NARRATIV: Potenser med rasjonale eksponenter
// ============================================================================

export const CHAPTER_10_1_4_NARRATIV: TextbookChapter = {
  id: '10-1-4-narrativ',
  courseId: '10',
  chapterNumber: '1.4',
  title: 'Potenser med rasjonale eksponenter',
  subtitle: 'Narrativ versjon',
  description: 'En engasjerende fortelling om brøkeksponenter, sammenhengen mellom potenser og røtter, og de elegante potensreglene.',
  estimatedMinutes: 35,
  competenceGoals: ['bruke variablar og formlar til å uttrykkje samanhengar i praktiske situasjonar'],
  linkedChapterId: '10-1-4',
  content: [
    {
      id: '10-1-4-n-intro',
      type: 'text',
      content: `## Når potenser og røtter møtes

Du vet allerede at $2^3 = 8$ og at $\\sqrt[3]{8} = 2$. Men hva om vi skrev $8^{\\frac{1}{3}}$? Det betyr nøyaktig det samme som $\\sqrt[3]{8}$! Brøkeksponenter er en elegant måte å skrive røtter på, og de knytter sammen to av algebras kraftigste verktøy: potensregning og rotutdragning.

I dette kapittelet skal vi lære å oversette mellom røtter og potenser, regne med brøkeksponenter, og bruke potensreglene på en helt ny måte.`,
    },
    {
      id: '10-1-4-n-section1',
      type: 'text',
      content: `## Sammenhengen mellom røtter og potenser

En potens med brøkeksponent defineres slik:

$$a^{\\frac{1}{n}} = \\sqrt[n]{a}$$

Nevneren i brøkeksponenten forteller oss hvilken rot vi tar. $a^{\\frac{1}{2}} = \\sqrt{a}$ (kvadratrot), $a^{\\frac{1}{3}} = \\sqrt[3]{a}$ (kubikkrot), $a^{\\frac{1}{4}} = \\sqrt[4]{a}$ (fjerde rot), og så videre.

Hva om telleren er noe annet enn 1? Da har vi:

$$a^{\\frac{m}{n}} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$

Telleren er potensen, nevneren er roten. For eksempel: $8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$. Og $27^{\\frac{2}{3}} = (\\sqrt[3]{27})^2 = 3^2 = 9$.

La oss oversette begge veier. Fra rot til potens: $\\sqrt{5} = 5^{\\frac{1}{2}}$ og $\\sqrt[3]{x^2} = x^{\\frac{2}{3}}$. Fra potens til rot: $x^{\\frac{3}{4}} = \\sqrt[4]{x^3}$ og $a^{\\frac{2}{5}} = \\sqrt[5]{a^2}$.

Denne sammenhengen er ikke bare teoretisk pen -- den gjør at vi kan bruke alle potensreglene på røtter!`,
    },
    {
      id: '10-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på sammenhengen mellom røtter og potenser:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-4-n-quiz1-q0',
            task: 'Hvordan skriver vi $\\sqrt[3]{7}$ som en potens?',
            options: [
              { id: 'a', text: '$7^3$', isCorrect: false },
              { id: 'b', text: '$7^{\\frac{1}{3}}$', isCorrect: true },
              { id: 'c', text: '$7^{\\frac{3}{1}}$', isCorrect: false },
              { id: 'd', text: '$3^{\\frac{1}{7}}$', isCorrect: false },
            ],
            solution: '$\\sqrt[3]{7} = 7^{\\frac{1}{3}}$. Nevneren i eksponenten (3) er rotgraden.',
          },
          {
            id: '10-1-4-n-quiz1-q1',
            task: 'Hvordan skriver vi $\\sqrt[4]{x^3}$ som potens?',
            options: [
              { id: 'a', text: '$x^{\\frac{4}{3}}$', isCorrect: false },
              { id: 'b', text: '$x^{12}$', isCorrect: false },
              { id: 'c', text: '$x^{\\frac{3}{4}}$', isCorrect: true },
              { id: 'd', text: '$x^{\\frac{1}{4}}$', isCorrect: false },
            ],
            solution: '$\\sqrt[4]{x^3} = x^{\\frac{3}{4}}$. Telleren (3) er potensen, nevneren (4) er rotgraden.',
          },
          {
            id: '10-1-4-n-quiz1-q2',
            task: 'Hva er $a^{\\frac{2}{5}}$ skrevet med rottegn?',
            options: [
              { id: 'a', text: '$\\sqrt[2]{a^5}$', isCorrect: false },
              { id: 'b', text: '$\\sqrt[5]{a^2}$', isCorrect: true },
              { id: 'c', text: '$\\sqrt{a^5}$', isCorrect: false },
              { id: 'd', text: '$\\sqrt[5]{a}$', isCorrect: false },
            ],
            solution: '$a^{\\frac{2}{5}} = \\sqrt[5]{a^2}$. Nevneren (5) blir rotgraden, telleren (2) er potensen under rottegnet.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-4-n-section2',
      type: 'text',
      content: `## Beregne potenser med brøkeksponent

Nå som vi vet sammenhengen, la oss regne ut noen verdier. Strategien er enkel: **ta roten først, deretter potensen**. Det gir mye mindre tall å jobbe med.

$16^{\\frac{1}{2}} = \\sqrt{16} = 4$. Enkelt -- vi tar bare kvadratroten.

$8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$. Vi tar kubikkroten av 8 (som er 2) og kvadrerer.

$81^{\\frac{3}{4}} = (\\sqrt[4]{81})^3 = 3^3 = 27$. Fjerde roten av 81 er 3, og $3^3 = 27$.

$32^{\\frac{2}{5}} = (\\sqrt[5]{32})^2 = 2^2 = 4$. Femte roten av 32 er 2, og $2^2 = 4$.

Merk at det er mye lettere å ta roten først! Hvis vi i stedet prøvde $81^{\\frac{3}{4}} = \\sqrt[4]{81^3} = \\sqrt[4]{531441}$... vel, det er ikke akkurat noe vi gjør i hodet. Men $(\\sqrt[4]{81})^3 = 3^3 = 27$ er overkommelig.`,
    },
    {
      id: '10-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på beregning med brøkeksponenter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-4-n-quiz2-q0',
            task: 'Hva er $25^{\\frac{1}{2}}$?',
            options: [
              { id: 'a', text: '$12{,}5$', isCorrect: false },
              { id: 'b', text: '$5$', isCorrect: true },
              { id: 'c', text: '$625$', isCorrect: false },
              { id: 'd', text: '$\\frac{25}{2}$', isCorrect: false },
            ],
            solution: '$25^{\\frac{1}{2}} = \\sqrt{25} = 5$.',
          },
          {
            id: '10-1-4-n-quiz2-q1',
            task: 'Hva er $16^{\\frac{3}{4}}$?',
            options: [
              { id: 'a', text: '$12$', isCorrect: false },
              { id: 'b', text: '$4$', isCorrect: false },
              { id: 'c', text: '$8$', isCorrect: true },
              { id: 'd', text: '$64$', isCorrect: false },
            ],
            solution: '$16^{\\frac{3}{4}} = (\\sqrt[4]{16})^3 = 2^3 = 8$.',
          },
          {
            id: '10-1-4-n-quiz2-q2',
            task: 'Hva er $27^{\\frac{1}{3}}$?',
            options: [
              { id: 'a', text: '$9$', isCorrect: false },
              { id: 'b', text: '$3$', isCorrect: true },
              { id: 'c', text: '$27$', isCorrect: false },
              { id: 'd', text: '$\\frac{27}{3}$', isCorrect: false },
            ],
            solution: '$27^{\\frac{1}{3}} = \\sqrt[3]{27} = 3$ fordi $3 \\cdot 3 \\cdot 3 = 27$.',
          },
          {
            id: '10-1-4-n-quiz2-q3',
            task: 'Hva er $32^{\\frac{2}{5}}$?',
            options: [
              { id: 'a', text: '$8$', isCorrect: false },
              { id: 'b', text: '$2$', isCorrect: false },
              { id: 'c', text: '$16$', isCorrect: false },
              { id: 'd', text: '$4$', isCorrect: true },
            ],
            solution: '$32^{\\frac{2}{5}} = (\\sqrt[5]{32})^2 = 2^2 = 4$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-4-n-section3',
      type: 'text',
      content: `## Potensregler med brøkeksponenter

Det vakre med brøkeksponenter er at alle de vanlige potensreglene fortsatt gjelder:

- **Multiplikasjon:** $a^m \\cdot a^n = a^{m+n}$
- **Divisjon:** $\\frac{a^m}{a^n} = a^{m-n}$
- **Potens av potens:** $(a^m)^n = a^{m \\cdot n}$
- **Produktregel:** $(ab)^n = a^n \\cdot b^n$

La oss se disse i aksjon med brøkeksponenter.

$x^{\\frac{1}{2}} \\cdot x^{\\frac{3}{2}} = x^{\\frac{1}{2} + \\frac{3}{2}} = x^{\\frac{4}{2}} = x^2$

$\\frac{a^{\\frac{5}{3}}}{a^{\\frac{2}{3}}} = a^{\\frac{5}{3} - \\frac{2}{3}} = a^{\\frac{3}{3}} = a^1 = a$

$(x^{\\frac{2}{3}})^{\\frac{3}{4}} = x^{\\frac{2}{3} \\cdot \\frac{3}{4}} = x^{\\frac{6}{12}} = x^{\\frac{1}{2}} = \\sqrt{x}$

Legg merke til at vi bare bruker vanlig brøkregning med eksponentene -- legger sammen ved multiplikasjon, trekker fra ved divisjon, og ganger ved potens av potens. Og det fine er at vi ofte ender opp med pene, forenklede uttrykk.`,
    },
    {
      id: '10-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på potensregler med brøkeksponenter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-4-n-quiz3-q0',
            task: 'Hva er $x^{\\frac{2}{3}} \\cdot x^{\\frac{1}{3}}$ forenklet?',
            options: [
              { id: 'a', text: '$x^{\\frac{2}{9}}$', isCorrect: false },
              { id: 'b', text: '$x^2$', isCorrect: false },
              { id: 'c', text: '$x$', isCorrect: true },
              { id: 'd', text: '$x^{\\frac{1}{3}}$', isCorrect: false },
            ],
            solution: '$x^{\\frac{2}{3}} \\cdot x^{\\frac{1}{3}} = x^{\\frac{2}{3} + \\frac{1}{3}} = x^{\\frac{3}{3}} = x^1 = x$.',
          },
          {
            id: '10-1-4-n-quiz3-q1',
            task: 'Hva er $(y^{\\frac{4}{5}})^{\\frac{5}{2}}$ forenklet?',
            options: [
              { id: 'a', text: '$y^{\\frac{9}{7}}$', isCorrect: false },
              { id: 'b', text: '$y^2$', isCorrect: true },
              { id: 'c', text: '$y^{\\frac{8}{25}}$', isCorrect: false },
              { id: 'd', text: '$y^{\\frac{20}{10}}$', isCorrect: false },
            ],
            solution: '$(y^{\\frac{4}{5}})^{\\frac{5}{2}} = y^{\\frac{4}{5} \\cdot \\frac{5}{2}} = y^{\\frac{20}{10}} = y^2$. Merk at $\\frac{20}{10} = 2$.',
          },
          {
            id: '10-1-4-n-quiz3-q2',
            task: 'Hva er $x^{\\frac{3}{4}} \\cdot x^{-\\frac{1}{4}}$ forenklet?',
            options: [
              { id: 'a', text: '$x$', isCorrect: false },
              { id: 'b', text: '$x^{-\\frac{2}{4}}$', isCorrect: false },
              { id: 'c', text: '$x^{\\frac{4}{4}}$', isCorrect: false },
              { id: 'd', text: '$\\sqrt{x}$', isCorrect: true },
            ],
            solution: '$x^{\\frac{3}{4}} \\cdot x^{-\\frac{1}{4}} = x^{\\frac{3}{4} - \\frac{1}{4}} = x^{\\frac{2}{4}} = x^{\\frac{1}{2}} = \\sqrt{x}$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-4-n-section4',
      type: 'text',
      content: `## Negative eksponenter

Hva skjer når eksponenten er negativ? En negativ eksponent betyr "ta den inverse":

$$a^{-n} = \\frac{1}{a^n}$$

La oss kombinere dette med brøkeksponenter.

$4^{-\\frac{1}{2}} = \\frac{1}{4^{\\frac{1}{2}}} = \\frac{1}{\\sqrt{4}} = \\frac{1}{2}$

$27^{-\\frac{2}{3}} = \\frac{1}{27^{\\frac{2}{3}}} = \\frac{1}{(\\sqrt[3]{27})^2} = \\frac{1}{3^2} = \\frac{1}{9}$

$16^{-\\frac{3}{4}} = \\frac{1}{16^{\\frac{3}{4}}} = \\frac{1}{(\\sqrt[4]{16})^3} = \\frac{1}{2^3} = \\frac{1}{8}$

Og her er et triks som er verdt å huske: når grunntallet selv er en brøk, snur den negative eksponenten brøken!

$\\left(\\frac{1}{4}\\right)^{-\\frac{1}{2}} = 4^{\\frac{1}{2}} = \\sqrt{4} = 2$

Å ha negativ eksponent er som å si "flytt meg fra teller til nevner" (eller omvendt). Kombinert med brøkeksponenten som sier "ta denne roten og potensen", gir det oss enorm fleksibilitet.`,
    },
    {
      id: '10-1-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-1-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på negative eksponenter:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-1-4-n-quiz4-q0',
            task: 'Hva er $9^{-\\frac{1}{2}}$?',
            options: [
              { id: 'a', text: '$-3$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{3}$', isCorrect: true },
              { id: 'c', text: '$-\\frac{1}{3}$', isCorrect: false },
              { id: 'd', text: '$3$', isCorrect: false },
            ],
            solution: '$9^{-\\frac{1}{2}} = \\frac{1}{9^{\\frac{1}{2}}} = \\frac{1}{\\sqrt{9}} = \\frac{1}{3}$. Negativ eksponent betyr invers, ikke negativt tall!',
          },
          {
            id: '10-1-4-n-quiz4-q1',
            task: 'Hva er $8^{-\\frac{1}{3}}$?',
            options: [
              { id: 'a', text: '$\\frac{1}{2}$', isCorrect: true },
              { id: 'b', text: '$-2$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{8}$', isCorrect: false },
              { id: 'd', text: '$-\\frac{8}{3}$', isCorrect: false },
            ],
            solution: '$8^{-\\frac{1}{3}} = \\frac{1}{8^{\\frac{1}{3}}} = \\frac{1}{\\sqrt[3]{8}} = \\frac{1}{2}$.',
          },
          {
            id: '10-1-4-n-quiz4-q2',
            task: 'Hva er $\\left(\\frac{1}{4}\\right)^{-\\frac{1}{2}}$?',
            options: [
              { id: 'a', text: '$\\frac{1}{2}$', isCorrect: false },
              { id: 'b', text: '$-2$', isCorrect: false },
              { id: 'c', text: '$4$', isCorrect: false },
              { id: 'd', text: '$2$', isCorrect: true },
            ],
            solution: '$\\left(\\frac{1}{4}\\right)^{-\\frac{1}{2}} = 4^{\\frac{1}{2}} = \\sqrt{4} = 2$. Den negative eksponenten snur brøken.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-1-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Brøkeksponenter** gir en alternativ skrivemåte for røtter: $a^{\\frac{1}{n}} = \\sqrt[n]{a}$ og $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$.

**Potensreglene** gjelder også for brøkeksponenter: vi adderer eksponenter ved multiplikasjon ($a^m \\cdot a^n = a^{m+n}$), subtraherer ved divisjon ($a^m / a^n = a^{m-n}$), og multipliserer eksponenter ved potens av potens ($(a^m)^n = a^{mn}$).

**Negative eksponenter** betyr invers: $a^{-n} = \\frac{1}{a^n}$. Kombinert med brøkeksponenter kan vi skrive uttrykk som $4^{-\\frac{1}{2}} = \\frac{1}{2}$.

Nøkkelstrategien er: **ta roten først, deretter potensen** -- det gir de minste tallene å jobbe med.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const MATEMATIKK_10_NARRATIV_DEL1_CHAPTERS = [
  CHAPTER_10_1_1_NARRATIV,
  CHAPTER_10_1_2_NARRATIV,
  CHAPTER_10_1_3_NARRATIV,
  CHAPTER_10_1_4_NARRATIV,
];
