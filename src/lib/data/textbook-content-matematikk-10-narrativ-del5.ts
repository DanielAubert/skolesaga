/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 5
 * Kapittel 5.1-5.3: Sannsynlighet og statistikk
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1 NARRATIV: Kombinatorikk
// ============================================================================

export const CHAPTER_10_5_1_NARRATIV: TextbookChapter = {
  id: '10-5-1-narrativ',
  courseId: '10',
  chapterNumber: '5.1',
  title: 'Kombinatorikk',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag kunsten aa telle muligheter systematisk -- fra PIN-koder og antrekk til lotteritrekninger og pokerhender.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke kombinatorikk til aa systematisk telle antall muligheter',
    'anvende multiplikasjonsprinsippet, permutasjoner og kombinasjoner i praktiske situasjoner',
    'skille mellom situasjoner der rekkefoelge betyr noe og der den ikke gjoer det',
  ],
  linkedChapterId: '10-5-1',
  content: [
    {
      id: '10-5-1-n-intro',
      type: 'text',
      content: `## Hvor mange muligheter finnes det egentlig?

Tenk deg at du staar foran garderoben din en morgen. Du har 4 bukser og 5 t-skjorter. Hvor mange ulike antrekk kan du lage? Du kunne proevd aa liste opp alle kombinasjonene, men det finnes en mye smartere maate.

Kombinatorikk er matematikkens verktoy for aa telle muligheter paa en systematisk maate -- uten aa maatte liste opp hver eneste en. Det er nyttig i alt fra aa beregne sjansen for aa vinne i Lotto til aa forstaa hvor sikkert passordet ditt egentlig er.

Vi skal laere tre kraftige verktoy: **multiplikasjonsprinsippet** for trinnvise valg, **permutasjoner** naar rekkefølgen betyr noe, og **kombinasjoner** naar rekkefølgen ikke betyr noe.`,
    },
    {
      id: '10-5-1-n-section1',
      type: 'text',
      content: `## Multiplikasjonsprinsippet -- aa gange antall valg

La oss gaa tilbake til garderoben. Du skal forst velge bukse -- 4 muligheter. Deretter velger du t-skjorte -- 5 muligheter. Til hver bukse kan du pare enhver t-skjorte. Det gir $4 \\cdot 5 = 20$ ulike antrekk.

Dette er **multiplikasjonsprinsippet**: naar en handling kan gjoeres paa $m$ maater, og en annen uavhengig handling kan gjoeres paa $n$ maater, kan begge handlingene til sammen gjoeres paa $m \\cdot n$ maater. Prinsippet kan utvides til saa mange handlinger du vil: $m \\cdot n \\cdot p \\cdot \\ldots$

La oss se paa noen hverdagseksempler. En PIN-kode bestaar av 4 siffer, der hvert siffer kan vaere 0 til 9. Hvert av de fire sifrene har 10 valgmuligheter, saa antall PIN-koder er:

$$10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10\\,000$$

Hva med et passord paa 3 bokstaver (a-z) etterfulgt av 2 siffer (0-9)? Da faar vi:

$$26^3 \\cdot 10^2 = 17\\,576 \\cdot 100 = 1\\,757\\,600 \\text{ mulige passord}$$

En restaurant tilbyr 3 forretter, 5 hovedretter og 4 desserter. Antall ulike 3-retters menyer blir $3 \\cdot 5 \\cdot 4 = 60$.`,
    },
    {
      id: '10-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa multiplikasjonsprinsippet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-1-n-quiz1-q0',
            task: 'Et bilskilt har 2 bokstaver (A-Z) etterfulgt av 5 siffer (0-9). Hvor mange ulike bilskilt kan lages?',
            options: [
              { id: 'a', text: '$676\\,000$', isCorrect: false },
              { id: 'b', text: '$6\\,760\\,000$', isCorrect: false },
              { id: 'c', text: '$67\\,600\\,000$', isCorrect: true },
              { id: 'd', text: '$67\\,600$', isCorrect: false },
            ],
            solution: 'Vi ganger antall valg for hver posisjon: $26 \\cdot 26 \\cdot 10 \\cdot 10 \\cdot 10 \\cdot 10 \\cdot 10 = 26^2 \\cdot 10^5 = 676 \\cdot 100\\,000 = 67\\,600\\,000$.',
          },
          {
            id: '10-5-1-n-quiz1-q1',
            task: 'En flervalgstest har 10 spoersmaal med 4 svaralternativer hver. Hvor mange ulike besvarelser er mulige?',
            options: [
              { id: 'a', text: '$40$', isCorrect: false },
              { id: 'b', text: '$10\\,000$', isCorrect: false },
              { id: 'c', text: '$104\\,857$', isCorrect: false },
              { id: 'd', text: '$1\\,048\\,576$', isCorrect: true },
            ],
            solution: 'Hvert spoersmaal har 4 muligheter, og det er 10 spoersmaal: $4^{10} = 1\\,048\\,576$.',
          },
          {
            id: '10-5-1-n-quiz1-q2',
            task: 'Du skal velge broed (3 typer), paalegg (6 typer) og drikke (4 typer) til lunsj. Hvor mange kombinasjoner finnes?',
            options: [
              { id: 'a', text: '$13$', isCorrect: false },
              { id: 'b', text: '$72$', isCorrect: true },
              { id: 'c', text: '$36$', isCorrect: false },
              { id: 'd', text: '$24$', isCorrect: false },
            ],
            solution: 'Multiplikasjonsprinsippet: $3 \\cdot 6 \\cdot 4 = 72$ kombinasjoner.',
          },
        ],
      },
    },
    {
      id: '10-5-1-n-section2',
      type: 'text',
      content: `## Fakultet og permutasjoner -- naar rekkefoeolgen betyr noe

Forestill deg at 6 venner skal stille seg opp paa en rekke for et bilde. Paa hvor mange maater kan de gjore det?

Foerste plass kan fylles av hvem som helst -- 6 valg. Naar den er fylt, gjenstaar 5 personer for andre plass, saa 4 for tredje, og saa videre. Totalt:

$$6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720 \\text{ maater}$$

Denne typen produkt dukker opp saa ofte at det har faat et eget navn: **fakultet**. Vi skriver $n!$ (leses "n fakultet") og det betyr:

$$n! = n \\cdot (n-1) \\cdot (n-2) \\cdot \\ldots \\cdot 2 \\cdot 1$$

Noen nyttige verdier: $5! = 120$, $4! = 24$, $1! = 1$, og -- kanskje overraskende -- $0! = 1$ (det er definert slik).

En **permutasjon** er en ordnet rekkefølge av elementer. Antall permutasjoner av alle $n$ elementer er rett og slett $n!$

Men hva om vi bare skal ordne noen av elementene? I et loep med 10 deltakere skal det deles ut gull, soelv og bronse. Vi trenger ikke plassere alle 10 -- bare de 3 foerste. Da blir det:

$$P(10,3) = \\frac{10!}{(10-3)!} = \\frac{10!}{7!} = 10 \\cdot 9 \\cdot 8 = 720$$

Vi kan ogsaa forenkle broeek med fakultet. For eksempel: $\\frac{8!}{6!} = \\frac{8 \\cdot 7 \\cdot 6!}{6!} = 8 \\cdot 7 = 56$.`,
    },
    {
      id: '10-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa fakultet og permutasjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-1-n-quiz2-q0',
            task: 'Paa hvor mange maater kan 5 boeker ordnes paa en hylle?',
            options: [
              { id: 'a', text: '$25$', isCorrect: false },
              { id: 'b', text: '$120$', isCorrect: true },
              { id: 'c', text: '$60$', isCorrect: false },
              { id: 'd', text: '$720$', isCorrect: false },
            ],
            solution: 'Alle 5 boekene skal ordnes, saa svaret er $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.',
          },
          {
            id: '10-5-1-n-quiz2-q1',
            task: 'I en klasse paa 25 elever skal det velges president, visepresident og sekretaer. Paa hvor mange maater kan dette gjoeres?',
            options: [
              { id: 'a', text: '$75$', isCorrect: false },
              { id: 'b', text: '$15\\,000$', isCorrect: false },
              { id: 'c', text: '$13\\,800$', isCorrect: true },
              { id: 'd', text: '$2300$', isCorrect: false },
            ],
            solution: 'Rekkefoeolgen betyr noe (president er ikke det samme som sekretaer): $P(25,3) = 25 \\cdot 24 \\cdot 23 = 13\\,800$.',
          },
          {
            id: '10-5-1-n-quiz2-q2',
            task: 'Hva er verdien av $\\frac{10!}{8!}$?',
            options: [
              { id: 'a', text: '$2$', isCorrect: false },
              { id: 'b', text: '$45$', isCorrect: false },
              { id: 'c', text: '$90$', isCorrect: true },
              { id: 'd', text: '$80$', isCorrect: false },
            ],
            solution: 'Vi forenkler: $\\frac{10!}{8!} = \\frac{10 \\cdot 9 \\cdot 8!}{8!} = 10 \\cdot 9 = 90$.',
          },
        ],
      },
    },
    {
      id: '10-5-1-n-section3',
      type: 'text',
      content: `## Kombinasjoner -- naar rekkefoelgen ikke betyr noe

Naa kommer vi til et viktig skille. Tenk paa forskjellen mellom disse situasjonene:

- **Velge hvem som blir 1., 2. og 3.** i et loep -- her betyr rekkefoeolgen noe (permutasjon)
- **Velge hvilke 3 personer** som skal vaere med i en komite -- her betyr rekkefoeolgen ikke noe (kombinasjon)

En **kombinasjon** er et utvalg der rekkefoeolgen ikke spiller noen rolle. Formelen for aa velge $r$ elementer fra $n$ elementer er:

$$C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$

Dette leses "$n$ over $r$" eller "$n$ velg $r$".

La oss se paa et konkret eksempel. En komite paa 4 personer skal velges fra en gruppe paa 10. Siden alle i komiteen er likestilte, bruker vi kombinasjoner:

$$\\binom{10}{4} = \\frac{10!}{4! \\cdot 6!} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{5040}{24} = 210$$

Et annet eksempel: i et lotteri trekkes 6 tall fra tallene 1-34. Rekkefoeolgen tallene trekkes i spiller ingen rolle. Antall mulige kombinasjoner:

$$\\binom{34}{6} = \\frac{34 \\cdot 33 \\cdot 32 \\cdot 31 \\cdot 30 \\cdot 29}{6!} = \\frac{968\\,330\\,880}{720} = 1\\,344\\,904$$

En nyttig egenskap: $\\binom{n}{r} = \\binom{n}{n-r}$. For eksempel er $\\binom{6}{2} = \\binom{6}{4} = 15$. Det gir mening: aa velge ut 2 av 6 er det samme som aa velge bort 4 av 6.`,
    },
    {
      id: '10-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv paa kombinasjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-1-n-quiz3-q0',
            task: 'Paa hvor mange maater kan 3 elever velges fra en klasse paa 15 til aa representere klassen?',
            options: [
              { id: 'a', text: '$455$', isCorrect: true },
              { id: 'b', text: '$2730$', isCorrect: false },
              { id: 'c', text: '$45$', isCorrect: false },
              { id: 'd', text: '$3375$', isCorrect: false },
            ],
            solution: 'Alle representanter er likestilte, saa vi bruker kombinasjoner: $\\binom{15}{3} = \\frac{15 \\cdot 14 \\cdot 13}{3!} = \\frac{2730}{6} = 455$.',
          },
          {
            id: '10-5-1-n-quiz3-q1',
            task: 'I poker faar du 5 kort fra en kortstokk paa 52. Hvor mange ulike hender finnes?',
            options: [
              { id: 'a', text: '$259\\,896$', isCorrect: false },
              { id: 'b', text: '$2\\,598\\,960$', isCorrect: true },
              { id: 'c', text: '$311\\,875\\,200$', isCorrect: false },
              { id: 'd', text: '$25\\,989\\,600$', isCorrect: false },
            ],
            solution: 'Rekkefoeolgen du faar kortene i betyr ingenting: $\\binom{52}{5} = 2\\,598\\,960$ mulige pokerhender.',
          },
          {
            id: '10-5-1-n-quiz3-q2',
            task: 'Du skal velge 4 sanger fra 20 til en spilleliste der rekkefoeolgen betyr noe. Hva bruker du?',
            options: [
              { id: 'a', text: 'Kombinasjoner: $\\binom{20}{4} = 4845$', isCorrect: false },
              { id: 'b', text: 'Permutasjoner: $P(20,4) = 116\\,280$', isCorrect: true },
              { id: 'c', text: 'Multiplikasjonsprinsippet: $20^4 = 160\\,000$', isCorrect: false },
              { id: 'd', text: 'Fakultet: $20! = $ veldig stort tall', isCorrect: false },
            ],
            solution: 'Siden rekkefoeolgen i spillelisten betyr noe, bruker vi permutasjoner: $P(20,4) = 20 \\cdot 19 \\cdot 18 \\cdot 17 = 116\\,280$.',
          },
          {
            id: '10-5-1-n-quiz3-q3',
            task: 'Hva er $\\binom{7}{7}$?',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$49$', isCorrect: false },
              { id: 'c', text: '$0$', isCorrect: false },
              { id: 'd', text: '$1$', isCorrect: true },
            ],
            solution: 'Aa velge alle 7 av 7 kan bare gjoeres paa en maate: $\\binom{7}{7} = \\frac{7!}{7! \\cdot 0!} = 1$.',
          },
        ],
      },
    },
    {
      id: '10-5-1-n-section4',
      type: 'text',
      content: `## Sammensatte problemer -- knep og strategier

I virkeligheten maa vi ofte kombinere flere metoder. Her er noen nyttige strategier:

**Strategi 1: Totalt minus uoenskede.** Hvor mange 4-tegns passord (bokstaver A-Z og siffer 0-9) inneholder minst ett siffer? Det er enklere aa beregne totalt antall passord minus de uten siffer:

$$36^4 - 26^4 = 1\\,679\\,616 - 456\\,976 = 1\\,222\\,640$$

**Strategi 2: Del opp i tilfeller.** Fra en gruppe paa 6 gutter og 5 jenter skal det velges 4 personer med minst 2 jenter. Vi deler opp:

- 2 jenter, 2 gutter: $\\binom{5}{2} \\cdot \\binom{6}{2} = 10 \\cdot 15 = 150$
- 3 jenter, 1 gutt: $\\binom{5}{3} \\cdot \\binom{6}{1} = 10 \\cdot 6 = 60$
- 4 jenter, 0 gutter: $\\binom{5}{4} \\cdot \\binom{6}{0} = 5 \\cdot 1 = 5$

Totalt: $150 + 60 + 5 = 215$ maater.

**Strategi 3: Betingelser.** En komite paa 5 fra 10 personer, men en bestemt person MAA vaere med. Da er den personen allerede valgt, og vi velger 4 til fra de 9 andre: $\\binom{9}{4} = 126$.

En sjakkturning med 8 deltakere der alle spiller mot alle -- antall kamper er $\\binom{8}{2} = 28$, fordi hver kamp er et utvalg av 2 spillere.

Bokstavene i ordet MATTE kan ordnes paa $\\frac{5!}{2!} = 60$ maater, fordi vi maa dele paa $2!$ for de to like T-ene.`,
    },
    {
      id: '10-5-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-5-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv paa sammensatte problemer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-1-n-quiz4-q0',
            task: 'Fra 7 nordmenn og 4 svensker skal det velges et lag paa 5 med minst 2 svensker. Hvor mange maater?',
            options: [
              { id: 'a', text: '$210$', isCorrect: false },
              { id: 'b', text: '$462$', isCorrect: false },
              { id: 'c', text: '$301$', isCorrect: true },
              { id: 'd', text: '$84$', isCorrect: false },
            ],
            solution: '2 sv + 3 no: $\\binom{4}{2} \\cdot \\binom{7}{3} = 6 \\cdot 35 = 210$. 3 sv + 2 no: $\\binom{4}{3} \\cdot \\binom{7}{2} = 4 \\cdot 21 = 84$. 4 sv + 1 no: $\\binom{4}{4} \\cdot \\binom{7}{1} = 1 \\cdot 7 = 7$. Totalt: $210 + 84 + 7 = 301$.',
          },
          {
            id: '10-5-1-n-quiz4-q1',
            task: 'To bestemte personer KAN IKKE begge vaere med i en komite paa 5 valgt fra 10 personer. Antall maater?',
            options: [
              { id: 'a', text: '$252$', isCorrect: false },
              { id: 'b', text: '$126$', isCorrect: false },
              { id: 'c', text: '$196$', isCorrect: true },
              { id: 'd', text: '$56$', isCorrect: false },
            ],
            solution: 'Totalt: $\\binom{10}{5} = 252$. Begge med: $\\binom{8}{3} = 56$. Uten begge: $252 - 56 = 196$.',
          },
          {
            id: '10-5-1-n-quiz4-q2',
            task: 'En kortstokk har 52 kort. Hvor mange maater kan du faa 5 kort av samme farge (flush)?',
            options: [
              { id: 'a', text: '$1287$', isCorrect: false },
              { id: 'b', text: '$5148$', isCorrect: true },
              { id: 'c', text: '$2598$', isCorrect: false },
              { id: 'd', text: '$10\\,296$', isCorrect: false },
            ],
            solution: 'Det er 4 farger, og fra hver farge velger vi 5 av 13 kort: $4 \\cdot \\binom{13}{5} = 4 \\cdot 1287 = 5148$.',
          },
        ],
      },
    },
    {
      id: '10-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har laert tre hovedverktoy for aa telle muligheter:

- **Multiplikasjonsprinsippet:** Naar du gjoer flere uavhengige valg etter hverandre, ganger du antall muligheter for hvert valg. Antrekk, PIN-koder og passord er typiske eksempler.

- **Permutasjoner:** Naar rekkefoeolgen betyr noe. Alle $n$ elementer: $n!$. Velge $r$ fra $n$: $P(n,r) = \\frac{n!}{(n-r)!}$. Pallplasser og koer er typiske eksempler.

- **Kombinasjoner:** Naar rekkefoeolgen ikke betyr noe. Velge $r$ fra $n$: $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$. Komiteer, lag og lottotrekninger er typiske eksempler.

**Noekkelspoersmaalet:** Betyr rekkefoeolgen noe? Ja = permutasjon. Nei = kombinasjon.

For sammensatte problemer: bruk "totalt minus uoenskede", del opp i tilfeller, eller reduser problemet ved betingelser.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2 NARRATIV: Sannsynlighetsberegning
// ============================================================================

export const CHAPTER_10_5_2_NARRATIV: TextbookChapter = {
  id: '10-5-2-narrativ',
  courseId: '10',
  chapterNumber: '5.2',
  title: 'Sannsynlighetsberegning',
  subtitle: 'Narrativ versjon',
  description: 'Fra terningkast og korttrekk til medisinske tester -- laer aa beregne sjansen for at ting skjer, ogsaa naar hendelser pavirker hverandre.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beregne sannsynligheter for sammensatte hendelser',
    'skille mellom uavhengige og avhengige hendelser',
    'bruke formler for betinget sannsynlighet',
    'anvende addisjons- og multiplikasjonssetningen',
  ],
  linkedChapterId: '10-5-2',
  content: [
    {
      id: '10-5-2-n-intro',
      type: 'text',
      content: `## Hva er sjansen for det?

Hver gang du kaster en terning, trekker et kort eller krysser fingre for groent lys, tenker du paa sannsynlighet. Men sannsynlighetsregning handler om mer enn flaks -- det er et presist verktoy som brukes i alt fra forsikring og medisin til vaermeldinger og spill.

**Klassisk sannsynlighet** er formelen du sannsynligvis kjenner fra foer:

$$P(A) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$

Sannsynligheten ligger alltid mellom 0 (umulig) og 1 (sikkert). Sannsynligheten for at noe IKKE skjer er $P(\\text{ikke } A) = 1 - P(A)$.

La oss varme opp. En terning kastes: $P(4) = \\frac{1}{6}$, $P(\\text{partall}) = \\frac{3}{6} = \\frac{1}{2}$, og $P(\\text{tall} > 4) = \\frac{2}{6} = \\frac{1}{3}$.`,
    },
    {
      id: '10-5-2-n-section1',
      type: 'text',
      content: `## Addisjonssetningen -- "eller"

Hva er sannsynligheten for aa trekke ruter eller et ess fra en kortstokk med 52 kort?

Her maa vi vaere forsiktige: ruter-esset er BAADE ruter OG ess. Hvis vi bare legger sammen, teller vi det dobbelt. Loesningen er **addisjonssetningen**:

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

"$A \\cup B$" betyr "$A$ eller $B$ (eller begge)", og "$A \\cap B$" betyr "$A$ og $B$ (begge skjer)". Saa for ruter eller ess:

$$P(\\text{ruter eller ess}) = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$$

Hvis hendelsene er **disjunkte** (de kan ikke skje samtidig), forenkles formelen til bare $P(A) + P(B)$. For eksempel er sannsynligheten for aa kaste 2 eller 5 paa en terning: $\\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$.

En kortstokk har for oevrig 52 kort fordelt paa 4 farger (hjerter, ruter, spar, kloever) med 13 kort i hver. 26 roede kort (hjerter + ruter) og 26 sorte (spar + kloever).`,
    },
    {
      id: '10-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa grunnleggende sannsynlighet og addisjonssetningen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-2-n-quiz1-q0',
            task: 'I en pose er det 4 roede, 3 blaa og 2 groenne kuler. Hva er sannsynligheten for aa trekke en roed kule?',
            options: [
              { id: 'a', text: '$\\frac{4}{9}$', isCorrect: true },
              { id: 'b', text: '$\\frac{4}{7}$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{3}$', isCorrect: false },
              { id: 'd', text: '$\\frac{2}{9}$', isCorrect: false },
            ],
            solution: 'Totalt 9 kuler, 4 er roede: $P(\\text{roed}) = \\frac{4}{9}$.',
          },
          {
            id: '10-5-2-n-quiz1-q1',
            task: 'Et kort trekkes fra kortstokken. Hva er sannsynligheten for spar eller knekt?',
            options: [
              { id: 'a', text: '$\\frac{17}{52}$', isCorrect: false },
              { id: 'b', text: '$\\frac{4}{13}$', isCorrect: true },
              { id: 'c', text: '$\\frac{1}{4}$', isCorrect: false },
              { id: 'd', text: '$\\frac{13}{52}$', isCorrect: false },
            ],
            solution: 'Spar: 13 kort. Knekt: 4 kort. Spar-knekt (telt dobbelt): 1 kort. $P = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$.',
          },
          {
            id: '10-5-2-n-quiz1-q2',
            task: 'I en klasse er 15 med i fotball og 12 i haandball, hvorav 5 i begge. Klassen har 30 elever. Hva er sannsynligheten for at en tilfeldig elev er med i fotball eller haandball?',
            options: [
              { id: 'a', text: '$\\frac{22}{30}$', isCorrect: false },
              { id: 'b', text: '$\\frac{27}{30}$', isCorrect: false },
              { id: 'c', text: '$\\frac{11}{15}$', isCorrect: true },
              { id: 'd', text: '$\\frac{9}{10}$', isCorrect: false },
            ],
            solution: '$P = \\frac{15}{30} + \\frac{12}{30} - \\frac{5}{30} = \\frac{22}{30} = \\frac{11}{15}$.',
          },
        ],
      },
    },
    {
      id: '10-5-2-n-section2',
      type: 'text',
      content: `## Uavhengige hendelser -- naar den ene ikke pavirker den andre

To terninger kastes. Pavirker resultatet av den foerste terningen den andre? Nei -- de er **uavhengige**. For uavhengige hendelser ganger vi sannsynlighetene:

$$P(A \\cap B) = P(A) \\cdot P(B)$$

Sannsynligheten for dobbelt sekser: $\\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36}$.

En mynt kastes 4 ganger. Sannsynligheten for kron alle gangene: $\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$.

Et lyskryss er groent 40% av tiden. Sannsynligheten for aa faa groent i to kryss etter hverandre: $0{,}40 \\cdot 0{,}40 = 0{,}16 = 16\\%$.

En basketballspiller treffer 70% av frikast. Tre paa rad: $0{,}70^3 = 0{,}343 = 34{,}3\\%$.

Hva med trekking av kort? Med tilbakelegging er trekkene uavhengige: sannsynligheten for to ess etter hverandre er $\\frac{4}{52} \\cdot \\frac{4}{52} = \\frac{1}{169}$.`,
    },
    {
      id: '10-5-2-n-section3',
      type: 'text',
      content: `## Avhengige hendelser -- naar den ene pavirker den andre

Men hva om du trekker kort UTEN tilbakelegging? Da er foerste trekk pavirker det andre -- hendelsene er **avhengige**. Vi bruker **multiplikasjonssetningen**:

$$P(A \\cap B) = P(A) \\cdot P(B|A)$$

der $P(B|A)$ betyr "sannsynligheten for $B$ gitt at $A$ har skjedd".

Trekk to kort uten tilbakelegging. Sannsynligheten for to ess:
- Foerste ess: $P = \\frac{4}{52}$
- Andre ess (gitt at foerste var ess): $P = \\frac{3}{51}$ (3 ess igjen av 51 kort)

$$P(\\text{to ess}) = \\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$$

En pose har 5 roede og 3 blaa kuler. To trekkes uten tilbakelegging. Begge roede?

$$P = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$$

For tre kort av spar uten tilbakelegging: $\\frac{13}{52} \\cdot \\frac{12}{51} \\cdot \\frac{11}{50} = \\frac{11}{850}$.`,
    },
    {
      id: '10-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa uavhengige og avhengige hendelser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-2-n-quiz2-q0',
            task: 'En terning kastes 5 ganger. Hva er sannsynligheten for aa IKKE faa 6 noen av gangene?',
            options: [
              { id: 'a', text: '$83{,}3\\%$', isCorrect: false },
              { id: 'b', text: '$40{,}2\\%$', isCorrect: true },
              { id: 'c', text: '$16{,}7\\%$', isCorrect: false },
              { id: 'd', text: '$59{,}8\\%$', isCorrect: false },
            ],
            solution: '$P(\\text{ikke 6}) = \\frac{5}{6}$ for hvert kast. For 5 kast: $\\left(\\frac{5}{6}\\right)^5 \\approx 0{,}402 = 40{,}2\\%$.',
          },
          {
            id: '10-5-2-n-quiz2-q1',
            task: 'To kort trekkes uten tilbakelegging. Hva er sannsynligheten for to hjerter?',
            options: [
              { id: 'a', text: '$\\frac{1}{16}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{17}$', isCorrect: true },
              { id: 'c', text: '$\\frac{13}{52}$', isCorrect: false },
              { id: 'd', text: '$\\frac{1}{4}$', isCorrect: false },
            ],
            solution: 'Avhengige hendelser: $P = \\frac{13}{52} \\cdot \\frac{12}{51} = \\frac{156}{2652} = \\frac{1}{17}$.',
          },
          {
            id: '10-5-2-n-quiz2-q2',
            task: 'En mynt kastes og en terning kastes. Hva er $P$(kron OG 6)?',
            options: [
              { id: 'a', text: '$\\frac{1}{12}$', isCorrect: true },
              { id: 'b', text: '$\\frac{1}{8}$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{6}$', isCorrect: false },
              { id: 'd', text: '$\\frac{2}{8}$', isCorrect: false },
            ],
            solution: 'Uavhengige hendelser: $P = \\frac{1}{2} \\cdot \\frac{1}{6} = \\frac{1}{12}$.',
          },
        ],
      },
    },
    {
      id: '10-5-2-n-section4',
      type: 'text',
      content: `## Betinget sannsynlighet og komplementmetoden

**Betinget sannsynlighet** $P(B|A)$ er sannsynligheten for $B$ gitt at $A$ allerede har skjedd:

$$P(B|A) = \\frac{P(A \\cap B)}{P(A)}$$

Et praktisk eksempel: I en klasse er 60% jenter. 30% av jentene spiller fotball, og 50% av guttene. Hva er sannsynligheten for at en tilfeldig fotballspiller er jente?

Foerst: $P(\\text{fotball}) = 0{,}60 \\cdot 0{,}30 + 0{,}40 \\cdot 0{,}50 = 0{,}18 + 0{,}20 = 0{,}38$

Saa med Bayes' setning: $P(\\text{jente}|\\text{fotball}) = \\frac{0{,}18}{0{,}38} \\approx 47{,}4\\%$

For "minst en"-problemer bruker vi **komplementmetoden**: $P(\\text{minst en}) = 1 - P(\\text{ingen})$.

En terning kastes 4 ganger. Sannsynligheten for minst en 6-er:

$$P = 1 - \\left(\\frac{5}{6}\\right)^4 = 1 - \\frac{625}{1296} = \\frac{671}{1296} \\approx 51{,}8\\%$$

To terninger kastes. Summen 7 er mest sannsynlig -- det finnes 6 gunstige utfall (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) av 36 mulige, saa $P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6}$.`,
    },
    {
      id: '10-5-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-5-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv paa betinget sannsynlighet og komplementmetoden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-2-n-quiz3-q0',
            task: 'En mynt kastes 5 ganger. Hva er sannsynligheten for minst en kron?',
            options: [
              { id: 'a', text: '$\\frac{5}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{31}{32}$', isCorrect: true },
              { id: 'c', text: '$\\frac{1}{2}$', isCorrect: false },
              { id: 'd', text: '$\\frac{15}{16}$', isCorrect: false },
            ],
            solution: '$P = 1 - P(\\text{ingen kron}) = 1 - \\left(\\frac{1}{2}\\right)^5 = 1 - \\frac{1}{32} = \\frac{31}{32}$.',
          },
          {
            id: '10-5-2-n-quiz3-q1',
            task: 'En test for en sykdom er positiv 95% av tiden for syke, og 3% for friske. 1% av befolkningen er syk. Hva er sannsynligheten for aa vaere syk gitt positiv test?',
            options: [
              { id: 'a', text: '$95\\%$', isCorrect: false },
              { id: 'b', text: '$\\approx 24{,}2\\%$', isCorrect: true },
              { id: 'c', text: '$1\\%$', isCorrect: false },
              { id: 'd', text: '$3\\%$', isCorrect: false },
            ],
            solution: '$P(\\text{positiv}) = 0{,}01 \\cdot 0{,}95 + 0{,}99 \\cdot 0{,}03 = 0{,}0392$. $P(\\text{syk}|\\text{positiv}) = \\frac{0{,}0095}{0{,}0392} \\approx 24{,}2\\%$. Overraskende lavt!',
          },
          {
            id: '10-5-2-n-quiz3-q2',
            task: 'Et lag vinner hver kamp med 60% sannsynlighet. Hva er sannsynligheten for aa vinne minst 2 av 3 kamper?',
            options: [
              { id: 'a', text: '$43{,}2\\%$', isCorrect: false },
              { id: 'b', text: '$60\\%$', isCorrect: false },
              { id: 'c', text: '$64{,}8\\%$', isCorrect: true },
              { id: 'd', text: '$21{,}6\\%$', isCorrect: false },
            ],
            solution: '2 seire: $\\binom{3}{2} \\cdot 0{,}6^2 \\cdot 0{,}4 = 0{,}432$. 3 seire: $0{,}6^3 = 0{,}216$. Totalt: $0{,}648 = 64{,}8\\%$.',
          },
          {
            id: '10-5-2-n-quiz3-q3',
            task: 'Du kaster 3 terninger. Hva er sannsynligheten for at alle viser samme tall (Yatzy)?',
            options: [
              { id: 'a', text: '$\\frac{1}{216}$', isCorrect: false },
              { id: 'b', text: '$\\frac{6}{216}$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{36}$', isCorrect: true },
              { id: 'd', text: '$\\frac{1}{6}$', isCorrect: false },
            ],
            solution: '6 gunstige (111, 222, ..., 666) av $6^3 = 216$ mulige: $P = \\frac{6}{216} = \\frac{1}{36}$.',
          },
        ],
      },
    },
    {
      id: '10-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering

- **Klassisk sannsynlighet:** $P(A) = \\frac{\\text{gunstige}}{\\text{mulige}}$, alltid mellom 0 og 1.

- **Addisjonssetningen** ("eller"): $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. For disjunkte hendelser: bare $P(A) + P(B)$.

- **Uavhengige hendelser** (ganger): $P(A \\cap B) = P(A) \\cdot P(B)$. Typisk: terningkast, myntkast, trekk med tilbakelegging.

- **Avhengige hendelser** (multiplikasjonssetningen): $P(A \\cap B) = P(A) \\cdot P(B|A)$. Typisk: trekk uten tilbakelegging.

- **Betinget sannsynlighet:** $P(B|A) = \\frac{P(A \\cap B)}{P(A)}$.

- **Komplementmetoden:** $P(\\text{minst en}) = 1 - P(\\text{ingen})$ -- ofte enklest for "minst en"-problemer.

**Noekkelspoersmaal:** Er hendelsene uavhengige eller avhengige? Tilbakelegging = uavhengig. Uten tilbakelegging = avhengig.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3 NARRATIV: Statistiske undersokelser
// ============================================================================

export const CHAPTER_10_5_3_NARRATIV: TextbookChapter = {
  id: '10-5-3-narrativ',
  courseId: '10',
  chapterNumber: '5.3',
  title: 'Statistiske undersokelser',
  subtitle: 'Narrativ versjon',
  description: 'Fra meningsmaalinger til medisinske studier -- laer aa planlegge, gjennomfoere og kritisk vurdere statistiske undersoekelser.',
  estimatedMinutes: 35,
  competenceGoals: [
    'planlegge og gjennomfoere statistiske undersoekelser',
    'vurdere hvor gyldige konklusjonene er',
    'identifisere feilkilder og skjevheter i undersoekelser',
    'presentere og tolke statistiske data',
  ],
  linkedChapterId: '10-5-3',
  content: [
    {
      id: '10-5-3-n-intro',
      type: 'text',
      content: `## Kan du stole paa statistikken?

"80% av tannleger anbefaler vaar tannkrem." "En ny studie viser at videospill gjoer barn aggressive." "Meningsmaalingen viser dodt loep mellom partiene."

Vi bombarderes med statistikk fra alle kanter -- i nyheter, reklame og sosiale medier. Men kan vi stole paa tallene? For aa svare paa det, maa vi forstaa hvordan statistiske undersoekelser fungerer, hvilke feller som finnes, og hvordan tall kan villede.

La oss starte med de grunnleggende begrepene. **Populasjonen** er hele gruppen vi oensker aa si noe om -- for eksempel alle elever i Norge. **Utvalget** er den delen vi faktisk undersoeeker. En **representativ** utvalg gjenspeiler populasjonen godt. **Variabler** er det vi maler: **kvantitative** variabler som hoyde og inntekt kan maales med tall, mens **kvalitative** variabler som kjoenn og favorittfarge beskriver egenskaper.`,
    },
    {
      id: '10-5-3-n-section1',
      type: 'text',
      content: `## Utvalgsmetoder -- hvem spor vi?

Hvordan du velger hvem du spoer, er helt avgjorende for om resultatene er til aa stole paa.

**Tilfeldig utvalg (randomisert):** Alle i populasjonen har lik sannsynlighet for aa bli valgt. Dette er gullstandarden fordi det gir representative utvalg.

**Stratifisert utvalg:** Populasjonen deles i grupper (strata), og tilfeldig utvalg trekkes fra hver gruppe. Sikrer at viktige undergrupper er representert -- for eksempel like mange fra hvert klassetrinn.

**Bekvemmelighetsutvalg:** Man spoer de som er lettest tilgjengelige. En forsker som undersoeeker treningsvaner ved aa spore folk paa et treningssenter, faar et skjevt bilde -- de som er der trener allerede mer enn gjennomsnittet!

**Selvseleksjon:** Folk velger selv aa delta, som i nettavstemninger. Bare de mest engasjerte svarer, noe som gir skjeve resultater.

Et **skjevt utvalg** gjenspeiler ikke populasjonen og kan gi villedende konklusjoner. Tenk alltid: hvem er det som IKKE blir representert?`,
    },
    {
      id: '10-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa utvalg og representativitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-3-n-quiz1-q0',
            task: 'NRK spoer 1000 nordmenn om de vil ha ny regjering. Hva slags variabel er dette?',
            options: [
              { id: 'a', text: 'Kvantitativ variabel', isCorrect: false },
              { id: 'b', text: 'Kvalitativ variabel', isCorrect: true },
              { id: 'c', text: 'Kontinuerlig variabel', isCorrect: false },
              { id: 'd', text: 'Diskret variabel', isCorrect: false },
            ],
            solution: 'Mening om regjeringsskifte er en kvalitativ variabel -- den beskriver en egenskap (holdning), ikke et tall.',
          },
          {
            id: '10-5-3-n-quiz1-q1',
            task: 'En forsker undersoeeker treningsvaner ved aa spoere folk paa et treningssenter. Hva er problemet?',
            options: [
              { id: 'a', text: 'Tilfeldig utvalg', isCorrect: false },
              { id: 'b', text: 'Stratifisert utvalg', isCorrect: false },
              { id: 'c', text: 'Bekvemmelighetsutvalg (skjevt utvalg)', isCorrect: true },
              { id: 'd', text: 'Selvseleksjonsutvalg', isCorrect: false },
            ],
            solution: 'De paa treningssenter trener mer enn gjennomsnittet. Utvalget er ikke representativt for hele befolkningen.',
          },
          {
            id: '10-5-3-n-quiz1-q2',
            task: 'En nettavis ber lesere stemme paa beste norske fotballspiller. Er dette representativt?',
            options: [
              { id: 'a', text: 'Ja, alle kan delta', isCorrect: false },
              { id: 'b', text: 'Nei, selvseleksjon gir skjevt utvalg', isCorrect: true },
              { id: 'c', text: 'Ja, nettaviser har mange lesere', isCorrect: false },
              { id: 'd', text: 'Delvis, avhenger av antall svar', isCorrect: false },
            ],
            solution: 'Selvseleksjon: bare interesserte lesere stemmer, og nettavisens lesere er ikke representative for alle nordmenn.',
          },
        ],
      },
    },
    {
      id: '10-5-3-n-section2',
      type: 'text',
      content: `## Feilkilder -- hva kan gaa galt?

Selv med godt utvalg kan mye gaa galt. Her er de vanligste feilkildene:

**Ledende spoersmaal:** "Er du enig i at vi boer bruke mer penger paa miljoevern for aa redde planeten?" Formuleringen "redde planeten" er positivt ladet og pavirker svaret. Et bedre spoersmaal: "Boer staten oeke miljoebudsjettet, selv om det betyr kutt andre steder?"

**Sosial oenskelighet:** Folk svarer det som er "sosialt akseptabelt". Spoer du folk ansikt til ansikt om alkoholvaner, underrapporterer mange -- de vil ikke fremstaa som stordrikkere.

**Frafall:** Noen velger aa ikke svare. Hvis bare 30% svarer paa en undersoekelse, kan de 70% som ikke svarte ha helt andre meninger. Dette kan vaere systematisk: kanskje de mest misfornoeyde ikke gidder aa svare.

**Maalefeil:** Unoeeyaktige maalinger eller at folk estimerer feil. Hvis du spoer folk hvor mye de bruker paa sosiale medier, overestimerer eller underestimerer mange.`,
    },
    {
      id: '10-5-3-n-section3',
      type: 'text',
      content: `## Analyse av data -- sentralmaal og spredning

Naar dataene er samlet inn, maa vi analysere dem. De tre viktigste **sentralmaalene** er:

**Gjennomsnitt** ($\\bar{x}$): Summen av alle verdier delt paa antall. For karakterene 2, 3, 3, 4, 4, 4, 5, 5, 6: $\\bar{x} = \\frac{36}{9} = 4$.

**Median:** Den midterste verdien naar data er sortert. Med 9 verdier er det den 5. verdien: median = 4. For alder paa 8 fotballspillere (22, 24, 25, 25, 26, 27, 29, 35): median = $\\frac{25+26}{2} = 25{,}5$.

**Typetall (modus):** Den vanligste verdien. I karaktereksempelet er typetallet 4 (forekommer 3 ganger).

Naar bruker vi hva? **Gjennomsnitt** fungerer best for symmetriske fordelinger. **Median** er bedre naar det finnes ekstremverdier -- for eksempel drar verdien 35 gjennomsnittet opp for fotballspillerne. **Typetall** brukes for kvalitative data (favorittfarge: blaa).

**Spredningsmaal** forteller hvor spredte dataene er. **Variasjonsbredden** er forskjellen mellom stoerste og minste verdi: $R = x_{max} - x_{min}$. **Standardavviket** maler gjennomsnittlig avstand fra gjennomsnittet -- lavt betyr jevnt, hoeyt betyr stor spredning.`,
    },
    {
      id: '10-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-5-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa feilkilder og dataanalyse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-3-n-quiz2-q0',
            task: 'Spoersmaal: "Stoetter du den farlige ulvejakten?" Hva er problemet?',
            options: [
              { id: 'a', text: 'Sosial oenskelighet', isCorrect: false },
              { id: 'b', text: 'Ledende spoersmaal', isCorrect: true },
              { id: 'c', text: 'Frafall', isCorrect: false },
              { id: 'd', text: 'Utvalgsfeil', isCorrect: false },
            ],
            solution: 'Ordet "farlige" er negativt ladet og pavirker svaret mot ulvejakt. Et noeytralt spoersmaal ville vaere: "Hva mener du om ulvejakt?"',
          },
          {
            id: '10-5-3-n-quiz2-q1',
            task: 'Daglig skjermtid (timer): 2, 3, 3, 4, 4, 4, 5, 12. Hvilket sentralmaal beskriver dataene best?',
            options: [
              { id: 'a', text: 'Gjennomsnitt (alltid best)', isCorrect: false },
              { id: 'b', text: 'Median (best ved ekstremverdier)', isCorrect: true },
              { id: 'c', text: 'Typetall (best for tall)', isCorrect: false },
              { id: 'd', text: 'Variasjonsbredde', isCorrect: false },
            ],
            solution: 'Ekstremverdien 12 drar gjennomsnittet opp til $4{,}625$, som er misvisende. Medianen (4) gir et bedre bilde.',
          },
          {
            id: '10-5-3-n-quiz2-q2',
            task: 'To klasser har gjennomsnittskarakter 4. Klasse A har standardavvik $0{,}5$ og klasse B har $1{,}5$. Hva betyr det?',
            options: [
              { id: 'a', text: 'Klasse A har jevnere karakterer', isCorrect: true },
              { id: 'b', text: 'Klasse B har jevnere karakterer', isCorrect: false },
              { id: 'c', text: 'Begge klasser har lik spredning', isCorrect: false },
              { id: 'd', text: 'Kan ikke avgjoeres', isCorrect: false },
            ],
            solution: 'Lavt standardavvik = lite spredning. Klasse A ($0{,}5$) har jevnere karakterer enn klasse B ($1{,}5$).',
          },
          {
            id: '10-5-3-n-quiz2-q3',
            task: 'Antall boeker lest siste maaned: 0 (5 elever), 1 (12), 2 (8), 3 (4), 4 (1). Hva er gjennomsnittet?',
            options: [
              { id: 'a', text: '$2$ boeker', isCorrect: false },
              { id: 'b', text: '$\\approx 1{,}47$ boeker', isCorrect: true },
              { id: 'c', text: '$1{,}5$ boeker', isCorrect: false },
              { id: 'd', text: '$1$ bok', isCorrect: false },
            ],
            solution: 'Vektet gjennomsnitt: $\\frac{0 \\cdot 5 + 1 \\cdot 12 + 2 \\cdot 8 + 3 \\cdot 4 + 4 \\cdot 1}{30} = \\frac{44}{30} \\approx 1{,}47$.',
          },
        ],
      },
    },
    {
      id: '10-5-3-n-section4',
      type: 'text',
      content: `## Kritisk vurdering -- vaer skeptisk!

Naar du leser om undersoekelser i media, still alltid disse spoersmaalene:

1. **Hvem utfoerte undersoekelsen?** En tannkremreklame som sier "80% av tannleger anbefaler" -- hvem spurte, og kunne tannlegene anbefale flere merker?
2. **Hvordan ble utvalget gjort?** Representativt eller skjevt?
3. **Hvor stort var utvalget?** Stoerre utvalg gir sikrere resultater.
4. **Hvordan var spoersmaalene formulert?** Ledende eller noetrale?
5. **Hva var svarprosenten?** Lavt = mulig systematisk frafall.
6. **Korrelasjon er IKKE kausalitet!** At to ting henger sammen betyr ikke at den ene foraarsaker den andre.

Det siste punktet er saa viktig at det fortjener et eksempel: Iskremsalg og drukningsulykker korrelerer. Betyr det at iskrem foraarsaker drukning? Selvfoelgelig ikke! Begge paavirkes av varmt vaer.

Naar en studie viser at "barn som spiser frokost gjoer det bedre paa skolen", kan vi ikke konkludere med at frokost gjoer barn smartere. Familier som serverer frokost kan ha andre ressurser og vaner som ogsaa paavirker skoleprestasjoner.

En meningsmaaling med 500 svar og feilmargin $\\pm 4\\%$ betyr at det sanne resultatet i befolkningen sannsynligvis ligger innenfor $\\pm 4$ prosentpoeng av det maalte. Hvis 52% sier ja, ligger det sanne svaret mellom 48% og 56%.`,
    },
    {
      id: '10-5-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-5-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv paa kritisk vurdering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-3-n-quiz3-q0',
            task: 'En studie viser at barn som spiller mye videospill har mer aggressiv adferd. Hva kan vi konkludere?',
            options: [
              { id: 'a', text: 'Videospill foraarsaker aggresjon', isCorrect: false },
              { id: 'b', text: 'Aggressive barn foretrekker videospill', isCorrect: false },
              { id: 'c', text: 'Det er en korrelasjon, men vi kan ikke slutte noe om aarsak', isCorrect: true },
              { id: 'd', text: 'Undersoekelsen er verdiloess', isCorrect: false },
            ],
            solution: 'Korrelasjon beviser ikke kausalitet. Kanskje aggressive barn tiltrekkes av voldelige spill, eller kanskje en tredjefaktor (lite tilsyn) pavirker begge.',
          },
          {
            id: '10-5-3-n-quiz3-q1',
            task: 'Et soylediagram viser salg fra 100 til 150 enheter, men y-aksen starter paa 90. Hva er problemet?',
            options: [
              { id: 'a', text: 'Ingenting, det er korrekt', isCorrect: false },
              { id: 'b', text: 'Okningen ser mer dramatisk ut fordi skalaen er kuttet', isCorrect: true },
              { id: 'c', text: 'Det mangler data', isCorrect: false },
              { id: 'd', text: 'Diagramtypen er feil', isCorrect: false },
            ],
            solution: 'Naar y-aksen ikke starter paa 0, ser selv smaa endringer dramatiske ut. En oekning fra 100 til 150 (50%) ser visuelt ut som en mangedobling.',
          },
          {
            id: '10-5-3-n-quiz3-q2',
            task: 'En meningsmaaling faar 45% ja og 55% nei, med feilmargin $\\pm 3\\%$. Er nei-siden sikker vinner?',
            options: [
              { id: 'a', text: 'Ja, 55% er klart stoerst', isCorrect: false },
              { id: 'b', text: 'Nei sannsynlig vinner, men ikke 100% sikkert', isCorrect: true },
              { id: 'c', text: 'Nei, det er dodt loep', isCorrect: false },
              { id: 'd', text: 'Vi kan ikke si noe uten flere data', isCorrect: false },
            ],
            solution: 'Ja-intervall: 42-48%. Nei-intervall: 52-58%. Intervallene overlapper ikke, saa nei er sannsynlig vinner -- men feilmarginen gir alltid noe usikkerhet.',
          },
        ],
      },
    },
    {
      id: '10-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering

- **Populasjon** er hele gruppen vi vil si noe om. **Utvalget** er den delen vi faktisk undersoeker. Utvalget maa vaere **representativt**.

- **Utvalgsmetoder:** Tilfeldig utvalg (best), stratifisert (sikrer undergrupper), bekvemmelighetsutvalg (ofte skjevt), selvseleksjon (skjevt).

- **Feilkilder:** Ledende spoersmaal, sosial oenskelighet, systematisk frafall, maalefeil.

- **Sentralmaal:** Gjennomsnitt (symmetrisk fordeling), median (ved ekstremverdier), typetall (kvalitative data).

- **Spredningsmaal:** Variasjonsbredde ($x_{max} - x_{min}$) og standardavvik (gjennomsnittlig avstand fra gjennomsnittet).

- **Kritisk vurdering:** Hvem utfoerte undersoekelsen? Representativt utvalg? Stor nok? Ledende spoersmaal? Svarprosent? **Korrelasjon er IKKE kausalitet!**

Neste gang du leser om en undersoekelse i media, stopp opp og still de kritiske spoersmaalene. Tallene forteller ikke alltid hele sannheten.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT
// ============================================================================

export const MATEMATIKK_10_NARRATIV_DEL5_CHAPTERS = [
  CHAPTER_10_5_1_NARRATIV,
  CHAPTER_10_5_2_NARRATIV,
  CHAPTER_10_5_3_NARRATIV,
];
