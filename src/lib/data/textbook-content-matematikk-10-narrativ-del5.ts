/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 5
 * Kapittel 5.1-5.3: Sannsynlighet og statistikk
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
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
  description: 'Oppdag kunsten å telle muligheter systematisk -- fra PIN-koder og antrekk til lotteritrekninger og pokerhender.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke kombinatorikk til å systematisk telle antall muligheter',
    'anvende multiplikasjonsprinsippet, permutasjoner og kombinasjoner i praktiske situasjoner',
    'skille mellom situasjoner der rekkefølge betyr noe og der den ikke gjør det',
  ],
  linkedChapterId: '10-5-1',
  content: [
    {
      id: '10-5-1-n-intro',
      type: 'text',
      content: `## Hvor mange muligheter finnes det egentlig?

Tenk deg at du står foran garderoben din en morgen. Du har 4 bukser og 5 t-skjorter. Hvor mange ulike antrekk kan du lage? Du kunne prøvd å liste opp alle kombinasjonene, men det finnes en mye smartere måte.

Kombinatorikk er matematikkens verktøy for å telle muligheter på en systematisk måte -- uten å måtte liste opp hver eneste en. Det er nyttig i alt fra å beregne sjansen for å vinne i Lotto til å forstå hvor sikkert passordet ditt egentlig er.

Vi skal lære tre kraftige verktøy: **multiplikasjonsprinsippet** for trinnvise valg, **permutasjoner** når rekkefølgen betyr noe, og **kombinasjoner** når rekkefølgen ikke betyr noe.`,
    },
    {
      id: '10-5-1-n-section1',
      type: 'text',
      content: `## Multiplikasjonsprinsippet -- å gange antall valg

La oss gå tilbake til garderoben. Du skal først velge bukse -- 4 muligheter. Deretter velger du t-skjorte -- 5 muligheter. Til hver bukse kan du pare enhver t-skjorte. Det gir $4 \\cdot 5 = 20$ ulike antrekk.

Dette er **multiplikasjonsprinsippet**: når en handling kan gjøres på $m$ måter, og en annen uavhengig handling kan gjøres på $n$ måter, kan begge handlingene til sammen gjøres på $m \\cdot n$ måter. Prinsippet kan utvides til så mange handlinger du vil: $m \\cdot n \\cdot p \\cdot \\ldots$

La oss se på noen hverdagseksempler. En PIN-kode består av 4 siffer, der hvert siffer kan være 0 til 9. Hvert av de fire sifrene har 10 valgmuligheter, så antall PIN-koder er:

$$10 \\cdot 10 \\cdot 10 \\cdot 10 = 10^4 = 10\\,000$$

Hva med et passord på 3 bokstaver (a-z) etterfulgt av 2 siffer (0-9)? Da får vi:

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
        task: 'Test deg selv på multiplikasjonsprinsippet:',
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
            task: 'En flervalgstest har 10 spørsmål med 4 svaralternativer hver. Hvor mange ulike besvarelser er mulige?',
            options: [
              { id: 'a', text: '$40$', isCorrect: false },
              { id: 'b', text: '$10\\,000$', isCorrect: false },
              { id: 'c', text: '$104\\,857$', isCorrect: false },
              { id: 'd', text: '$1\\,048\\,576$', isCorrect: true },
            ],
            solution: 'Hvert spørsmål har 4 muligheter, og det er 10 spørsmål: $4^{10} = 1\\,048\\,576$.',
          },
          {
            id: '10-5-1-n-quiz1-q2',
            task: 'Du skal velge brød (3 typer), pålegg (6 typer) og drikke (4 typer) til lunsj. Hvor mange kombinasjoner finnes?',
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
      content: `## Fakultet og permutasjoner -- når rekkefølgen betyr noe

Forestill deg at 6 venner skal stille seg opp på en rekke for et bilde. På hvor mange måter kan de gjøre det?

Første plass kan fylles av hvem som helst -- 6 valg. Når den er fylt, gjenstår 5 personer for andre plass, så 4 for tredje, og så videre. Totalt:

$$6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720 \\text{ måter}$$

Denne typen produkt dukker opp så ofte at det har fått et eget navn: **fakultet**. Vi skriver $n!$ (leses "n fakultet") og det betyr:

$$n! = n \\cdot (n-1) \\cdot (n-2) \\cdot \\ldots \\cdot 2 \\cdot 1$$

Noen nyttige verdier: $5! = 120$, $4! = 24$, $1! = 1$, og -- kanskje overraskende -- $0! = 1$ (det er definert slik).

En **permutasjon** er en ordnet rekkefølge av elementer. Antall permutasjoner av alle $n$ elementer er rett og slett $n!$

Men hva om vi bare skal ordne noen av elementene? I et løp med 10 deltakere skal det deles ut gull, sølv og bronse. Vi trenger ikke plassere alle 10 -- bare de 3 første. Da blir det:

$$P(10,3) = \\frac{10!}{(10-3)!} = \\frac{10!}{7!} = 10 \\cdot 9 \\cdot 8 = 720$$

Vi kan også forenkle brøk med fakultet. For eksempel: $\\frac{8!}{6!} = \\frac{8 \\cdot 7 \\cdot 6!}{6!} = 8 \\cdot 7 = 56$.`,
    },
    {
      id: '10-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fakultet og permutasjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-1-n-quiz2-q0',
            task: 'På hvor mange måter kan 5 bøker ordnes på en hylle?',
            options: [
              { id: 'a', text: '$25$', isCorrect: false },
              { id: 'b', text: '$120$', isCorrect: true },
              { id: 'c', text: '$60$', isCorrect: false },
              { id: 'd', text: '$720$', isCorrect: false },
            ],
            solution: 'Alle 5 bøkene skal ordnes, så svaret er $5! = 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$.',
          },
          {
            id: '10-5-1-n-quiz2-q1',
            task: 'I en klasse på 25 elever skal det velges president, visepresident og sekretær. På hvor mange måter kan dette gjøres?',
            options: [
              { id: 'a', text: '$75$', isCorrect: false },
              { id: 'b', text: '$15\\,000$', isCorrect: false },
              { id: 'c', text: '$13\\,800$', isCorrect: true },
              { id: 'd', text: '$2300$', isCorrect: false },
            ],
            solution: 'Rekkefølgen betyr noe (president er ikke det samme som sekretær): $P(25,3) = 25 \\cdot 24 \\cdot 23 = 13\\,800$.',
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
      content: `## Kombinasjoner -- når rekkefølgen ikke betyr noe

Nå kommer vi til et viktig skille. Tenk på forskjellen mellom disse situasjonene:

- **Velge hvem som blir 1., 2. og 3.** i et løp -- her betyr rekkefølgen noe (permutasjon)
- **Velge hvilke 3 personer** som skal være med i en komite -- her betyr rekkefølgen ikke noe (kombinasjon)

En **kombinasjon** er et utvalg der rekkefølgen ikke spiller noen rolle. Formelen for å velge $r$ elementer fra $n$ elementer er:

$$C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$

Dette leses "$n$ over $r$" eller "$n$ velg $r$".

La oss se på et konkret eksempel. En komite på 4 personer skal velges fra en gruppe på 10. Siden alle i komiteen er likestilte, bruker vi kombinasjoner:

$$\\binom{10}{4} = \\frac{10!}{4! \\cdot 6!} = \\frac{10 \\cdot 9 \\cdot 8 \\cdot 7}{4 \\cdot 3 \\cdot 2 \\cdot 1} = \\frac{5040}{24} = 210$$

Et annet eksempel: i et lotteri trekkes 6 tall fra tallene 1-34. Rekkefølgen tallene trekkes i spiller ingen rolle. Antall mulige kombinasjoner:

$$\\binom{34}{6} = \\frac{34 \\cdot 33 \\cdot 32 \\cdot 31 \\cdot 30 \\cdot 29}{6!} = \\frac{968\\,330\\,880}{720} = 1\\,344\\,904$$

En nyttig egenskap: $\\binom{n}{r} = \\binom{n}{n-r}$. For eksempel er $\\binom{6}{2} = \\binom{6}{4} = 15$. Det gir mening: å velge ut 2 av 6 er det samme som å velge bort 4 av 6.`,
    },
    {
      id: '10-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på kombinasjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-1-n-quiz3-q0',
            task: 'På hvor mange måter kan 3 elever velges fra en klasse på 15 til å representere klassen?',
            options: [
              { id: 'a', text: '$455$', isCorrect: true },
              { id: 'b', text: '$2730$', isCorrect: false },
              { id: 'c', text: '$45$', isCorrect: false },
              { id: 'd', text: '$3375$', isCorrect: false },
            ],
            solution: 'Alle representanter er likestilte, så vi bruker kombinasjoner: $\\binom{15}{3} = \\frac{15 \\cdot 14 \\cdot 13}{3!} = \\frac{2730}{6} = 455$.',
          },
          {
            id: '10-5-1-n-quiz3-q1',
            task: 'I poker får du 5 kort fra en kortstokk på 52. Hvor mange ulike hender finnes?',
            options: [
              { id: 'a', text: '$259\\,896$', isCorrect: false },
              { id: 'b', text: '$2\\,598\\,960$', isCorrect: true },
              { id: 'c', text: '$311\\,875\\,200$', isCorrect: false },
              { id: 'd', text: '$25\\,989\\,600$', isCorrect: false },
            ],
            solution: 'Rekkefølgen du får kortene i betyr ingenting: $\\binom{52}{5} = 2\\,598\\,960$ mulige pokerhender.',
          },
          {
            id: '10-5-1-n-quiz3-q2',
            task: 'Du skal velge 4 sanger fra 20 til en spilleliste der rekkefølgen betyr noe. Hva bruker du?',
            options: [
              { id: 'a', text: 'Kombinasjoner: $\\binom{20}{4} = 4845$', isCorrect: false },
              { id: 'b', text: 'Permutasjoner: $P(20,4) = 116\\,280$', isCorrect: true },
              { id: 'c', text: 'Multiplikasjonsprinsippet: $20^4 = 160\\,000$', isCorrect: false },
              { id: 'd', text: 'Fakultet: $20! = $ veldig stort tall', isCorrect: false },
            ],
            solution: 'Siden rekkefølgen i spillelisten betyr noe, bruker vi permutasjoner: $P(20,4) = 20 \\cdot 19 \\cdot 18 \\cdot 17 = 116\\,280$.',
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
            solution: 'Å velge alle 7 av 7 kan bare gjøres på en måte: $\\binom{7}{7} = \\frac{7!}{7! \\cdot 0!} = 1$.',
          },
        ],
      },
    },
    {
      id: '10-5-1-n-section4',
      type: 'text',
      content: `## Sammensatte problemer -- knep og strategier

I virkeligheten må vi ofte kombinere flere metoder. Her er noen nyttige strategier:

**Strategi 1: Totalt minus uønskede.** Hvor mange 4-tegns passord (bokstaver A-Z og siffer 0-9) inneholder minst ett siffer? Det er enklere å beregne totalt antall passord minus de uten siffer:

$$36^4 - 26^4 = 1\\,679\\,616 - 456\\,976 = 1\\,222\\,640$$

**Strategi 2: Del opp i tilfeller.** Fra en gruppe på 6 gutter og 5 jenter skal det velges 4 personer med minst 2 jenter. Vi deler opp:

- 2 jenter, 2 gutter: $\\binom{5}{2} \\cdot \\binom{6}{2} = 10 \\cdot 15 = 150$
- 3 jenter, 1 gutt: $\\binom{5}{3} \\cdot \\binom{6}{1} = 10 \\cdot 6 = 60$
- 4 jenter, 0 gutter: $\\binom{5}{4} \\cdot \\binom{6}{0} = 5 \\cdot 1 = 5$

Totalt: $150 + 60 + 5 = 215$ måter.

**Strategi 3: Betingelser.** En komite på 5 fra 10 personer, men en bestemt person MÅ være med. Da er den personen allerede valgt, og vi velger 4 til fra de 9 andre: $\\binom{9}{4} = 126$.

En sjakkturning med 8 deltakere der alle spiller mot alle -- antall kamper er $\\binom{8}{2} = 28$, fordi hver kamp er et utvalg av 2 spillere.

Bokstavene i ordet MATTE kan ordnes på $\\frac{5!}{2!} = 60$ måter, fordi vi må dele på $2!$ for de to like T-ene.`,
    },
    {
      id: '10-5-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-5-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på sammensatte problemer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-1-n-quiz4-q0',
            task: 'Fra 7 nordmenn og 4 svensker skal det velges et lag på 5 med minst 2 svensker. Hvor mange måter?',
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
            task: 'To bestemte personer KAN IKKE begge være med i en komite på 5 valgt fra 10 personer. Antall måter?',
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
            task: 'En kortstokk har 52 kort. Hvor mange måter kan du få 5 kort av samme farge (flush)?',
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

Vi har lært tre hovedverktøy for å telle muligheter:

- **Multiplikasjonsprinsippet:** Når du gjør flere uavhengige valg etter hverandre, ganger du antall muligheter for hvert valg. Antrekk, PIN-koder og passord er typiske eksempler.

- **Permutasjoner:** Når rekkefølgen betyr noe. Alle $n$ elementer: $n!$. Velge $r$ fra $n$: $P(n,r) = \\frac{n!}{(n-r)!}$. Pallplasser og køer er typiske eksempler.

- **Kombinasjoner:** Når rekkefølgen ikke betyr noe. Velge $r$ fra $n$: $\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$. Komiteer, lag og lottotrekninger er typiske eksempler.

**Nøkkelspørsmålet:** Betyr rekkefølgen noe? Ja = permutasjon. Nei = kombinasjon.

For sammensatte problemer: bruk "totalt minus uønskede", del opp i tilfeller, eller reduser problemet ved betingelser.`,
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
  description: 'Fra terningkast og korttrekk til medisinske tester -- lær å beregne sjansen for at ting skjer, også når hendelser påvirker hverandre.',
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

Hver gang du kaster en terning, trekker et kort eller krysser fingre for grønt lys, tenker du på sannsynlighet. Men sannsynlighetsregning handler om mer enn flaks -- det er et presist verktøy som brukes i alt fra forsikring og medisin til værmeldinger og spill.

**Klassisk sannsynlighet** er formelen du sannsynligvis kjenner fra før:

$$P(A) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$

Sannsynligheten ligger alltid mellom 0 (umulig) og 1 (sikkert). Sannsynligheten for at noe IKKE skjer er $P(\\text{ikke } A) = 1 - P(A)$.

La oss varme opp. En terning kastes: $P(4) = \\frac{1}{6}$, $P(\\text{partall}) = \\frac{3}{6} = \\frac{1}{2}$, og $P(\\text{tall} > 4) = \\frac{2}{6} = \\frac{1}{3}$.`,
    },
    {
      id: '10-5-2-n-section1',
      type: 'text',
      content: `## Addisjonssetningen -- "eller"

Hva er sannsynligheten for å trekke ruter eller et ess fra en kortstokk med 52 kort?

Her må vi være forsiktige: ruter-esset er BÅDE ruter OG ess. Hvis vi bare legger sammen, teller vi det dobbelt. Løsningen er **addisjonssetningen**:

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

"$A \\cup B$" betyr "$A$ eller $B$ (eller begge)", og "$A \\cap B$" betyr "$A$ og $B$ (begge skjer)". Så for ruter eller ess:

$$P(\\text{ruter eller ess}) = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13}$$

Hvis hendelsene er **disjunkte** (de kan ikke skje samtidig), forenkles formelen til bare $P(A) + P(B)$. For eksempel er sannsynligheten for å kaste 2 eller 5 på en terning: $\\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$.

En kortstokk har for øvrig 52 kort fordelt på 4 farger (hjerter, ruter, spar, kløver) med 13 kort i hver. 26 røde kort (hjerter + ruter) og 26 sorte (spar + kløver).`,
    },
    {
      id: '10-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnleggende sannsynlighet og addisjonssetningen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-2-n-quiz1-q0',
            task: 'I en pose er det 4 røde, 3 blå og 2 grønne kuler. Hva er sannsynligheten for å trekke en rød kule?',
            options: [
              { id: 'a', text: '$\\frac{4}{9}$', isCorrect: true },
              { id: 'b', text: '$\\frac{4}{7}$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{3}$', isCorrect: false },
              { id: 'd', text: '$\\frac{2}{9}$', isCorrect: false },
            ],
            solution: 'Totalt 9 kuler, 4 er røde: $P(\\text{rød}) = \\frac{4}{9}$.',
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
            task: 'I en klasse er 15 med i fotball og 12 i håndball, hvorav 5 i begge. Klassen har 30 elever. Hva er sannsynligheten for at en tilfeldig elev er med i fotball eller håndball?',
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
      content: `## Uavhengige hendelser -- når den ene ikke påvirker den andre

To terninger kastes. Påvirker resultatet av den første terningen den andre? Nei -- de er **uavhengige**. For uavhengige hendelser ganger vi sannsynlighetene:

$$P(A \\cap B) = P(A) \\cdot P(B)$$

Sannsynligheten for dobbelt sekser: $\\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36}$.

En mynt kastes 4 ganger. Sannsynligheten for kron alle gangene: $\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$.

Et lyskryss er grønt 40% av tiden. Sannsynligheten for å få grønt i to kryss etter hverandre: $0{,}40 \\cdot 0{,}40 = 0{,}16 = 16\\%$.

En basketballspiller treffer 70% av frikast. Tre på rad: $0{,}70^3 = 0{,}343 = 34{,}3\\%$.

Hva med trekking av kort? Med tilbakelegging er trekkene uavhengige: sannsynligheten for to ess etter hverandre er $\\frac{4}{52} \\cdot \\frac{4}{52} = \\frac{1}{169}$.`,
    },
    {
      id: '10-5-2-n-section3',
      type: 'text',
      content: `## Avhengige hendelser -- når den ene påvirker den andre

Men hva om du trekker kort UTEN tilbakelegging? Da er første trekk påvirker det andre -- hendelsene er **avhengige**. Vi bruker **multiplikasjonssetningen**:

$$P(A \\cap B) = P(A) \\cdot P(B|A)$$

der $P(B|A)$ betyr "sannsynligheten for $B$ gitt at $A$ har skjedd".

Trekk to kort uten tilbakelegging. Sannsynligheten for to ess:
- Første ess: $P = \\frac{4}{52}$
- Andre ess (gitt at første var ess): $P = \\frac{3}{51}$ (3 ess igjen av 51 kort)

$$P(\\text{to ess}) = \\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$$

En pose har 5 røde og 3 blå kuler. To trekkes uten tilbakelegging. Begge røde?

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
        task: 'Test deg selv på uavhengige og avhengige hendelser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-2-n-quiz2-q0',
            task: 'En terning kastes 5 ganger. Hva er sannsynligheten for å IKKE få 6 noen av gangene?',
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

Først: $P(\\text{fotball}) = 0{,}60 \\cdot 0{,}30 + 0{,}40 \\cdot 0{,}50 = 0{,}18 + 0{,}20 = 0{,}38$

Så med Bayes' setning: $P(\\text{jente}|\\text{fotball}) = \\frac{0{,}18}{0{,}38} \\approx 47{,}4\\%$

For "minst en"-problemer bruker vi **komplementmetoden**: $P(\\text{minst en}) = 1 - P(\\text{ingen})$.

En terning kastes 4 ganger. Sannsynligheten for minst en 6-er:

$$P = 1 - \\left(\\frac{5}{6}\\right)^4 = 1 - \\frac{625}{1296} = \\frac{671}{1296} \\approx 51{,}8\\%$$

To terninger kastes. Summen 7 er mest sannsynlig -- det finnes 6 gunstige utfall (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) av 36 mulige, så $P(\\text{sum} = 7) = \\frac{6}{36} = \\frac{1}{6}$.`,
    },
    {
      id: '10-5-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-5-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på betinget sannsynlighet og komplementmetoden:',
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
            task: 'En test for en sykdom er positiv 95% av tiden for syke, og 3% for friske. 1% av befolkningen er syk. Hva er sannsynligheten for å være syk gitt positiv test?',
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
            task: 'Et lag vinner hver kamp med 60% sannsynlighet. Hva er sannsynligheten for å vinne minst 2 av 3 kamper?',
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

**Nøkkelspørsmål:** Er hendelsene uavhengige eller avhengige? Tilbakelegging = uavhengig. Uten tilbakelegging = avhengig.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3 NARRATIV: Statistiske undersøkelser
// ============================================================================

export const CHAPTER_10_5_3_NARRATIV: TextbookChapter = {
  id: '10-5-3-narrativ',
  courseId: '10',
  chapterNumber: '5.3',
  title: 'Statistiske undersøkelser',
  subtitle: 'Narrativ versjon',
  description: 'Fra meningsmålinger til medisinske studier -- lær å planlegge, gjennomføre og kritisk vurdere statistiske undersøkelser.',
  estimatedMinutes: 35,
  competenceGoals: [
    'planlegge og gjennomføre statistiske undersøkelser',
    'vurdere hvor gyldige konklusjonene er',
    'identifisere feilkilder og skjevheter i undersøkelser',
    'presentere og tolke statistiske data',
  ],
  linkedChapterId: '10-5-3',
  content: [
    {
      id: '10-5-3-n-intro',
      type: 'text',
      content: `## Kan du stole på statistikken?

"80% av tannleger anbefaler vår tannkrem." "En ny studie viser at videospill gjør barn aggressive." "Meningsmålingen viser dødt løp mellom partiene."

Vi bombarderes med statistikk fra alle kanter -- i nyheter, reklame og sosiale medier. Men kan vi stole på tallene? For å svare på det, må vi forstå hvordan statistiske undersøkelser fungerer, hvilke feller som finnes, og hvordan tall kan villede.

La oss starte med de grunnleggende begrepene. **Populasjonen** er hele gruppen vi ønsker å si noe om -- for eksempel alle elever i Norge. **Utvalget** er den delen vi faktisk undersøker. En **representativ** utvalg gjenspeiler populasjonen godt. **Variabler** er det vi måler: **kvantitative** variabler som høyde og inntekt kan måles med tall, mens **kvalitative** variabler som kjønn og favorittfarge beskriver egenskaper.`,
    },
    {
      id: '10-5-3-n-section1',
      type: 'text',
      content: `## Utvalgsmetoder -- hvem spor vi?

Hvordan du velger hvem du spør, er helt avgjørende for om resultatene er til å stole på.

**Tilfeldig utvalg (randomisert):** Alle i populasjonen har lik sannsynlighet for å bli valgt. Dette er gullstandarden fordi det gir representative utvalg.

**Stratifisert utvalg:** Populasjonen deles i grupper (strata), og tilfeldig utvalg trekkes fra hver gruppe. Sikrer at viktige undergrupper er representert -- for eksempel like mange fra hvert klassetrinn.

**Bekvemmelighetsutvalg:** Man spør de som er lettest tilgjengelige. En forsker som undersøker treningsvaner ved å spore folk på et treningssenter, får et skjevt bilde -- de som er der trener allerede mer enn gjennomsnittet!

**Selvseleksjon:** Folk velger selv å delta, som i nettavstemninger. Bare de mest engasjerte svarer, noe som gir skjeve resultater.

Et **skjevt utvalg** gjenspeiler ikke populasjonen og kan gi villedende konklusjoner. Tenk alltid: hvem er det som IKKE blir representert?`,
    },
    {
      id: '10-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på utvalg og representativitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-3-n-quiz1-q0',
            task: 'NRK spør 1000 nordmenn om de vil ha ny regjering. Hva slags variabel er dette?',
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
            task: 'En forsker undersøker treningsvaner ved å spøre folk på et treningssenter. Hva er problemet?',
            options: [
              { id: 'a', text: 'Tilfeldig utvalg', isCorrect: false },
              { id: 'b', text: 'Stratifisert utvalg', isCorrect: false },
              { id: 'c', text: 'Bekvemmelighetsutvalg (skjevt utvalg)', isCorrect: true },
              { id: 'd', text: 'Selvseleksjonsutvalg', isCorrect: false },
            ],
            solution: 'De på treningssenter trener mer enn gjennomsnittet. Utvalget er ikke representativt for hele befolkningen.',
          },
          {
            id: '10-5-3-n-quiz1-q2',
            task: 'En nettavis ber lesere stemme på beste norske fotballspiller. Er dette representativt?',
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
      content: `## Feilkilder -- hva kan gå galt?

Selv med godt utvalg kan mye gå galt. Her er de vanligste feilkildene:

**Ledende spørsmål:** "Er du enig i at vi bør bruke mer penger på miljøvern for å redde planeten?" Formuleringen "redde planeten" er positivt ladet og påvirker svaret. Et bedre spørsmål: "Bør staten øke miljøbudsjettet, selv om det betyr kutt andre steder?"

**Sosial ønskelighet:** Folk svarer det som er "sosialt akseptabelt". Spør du folk ansikt til ansikt om alkoholvaner, underrapporterer mange -- de vil ikke fremstå som stordrikkere.

**Frafall:** Noen velger å ikke svare. Hvis bare 30% svarer på en undersøkelse, kan de 70% som ikke svarte ha helt andre meninger. Dette kan være systematisk: kanskje de mest misfornøyde ikke gidder å svare.

**Målefeil:** Unøyaktige målinger eller at folk estimerer feil. Hvis du spør folk hvor mye de bruker på sosiale medier, overestimerer eller underestimerer mange.`,
    },
    {
      id: '10-5-3-n-section3',
      type: 'text',
      content: `## Analyse av data -- sentralmål og spredning

Når dataene er samlet inn, må vi analysere dem. De tre viktigste **sentralmålene** er:

**Gjennomsnitt** ($\\bar{x}$): Summen av alle verdier delt på antall. For karakterene 2, 3, 3, 4, 4, 4, 5, 5, 6: $\\bar{x} = \\frac{36}{9} = 4$.

**Median:** Den midterste verdien når data er sortert. Med 9 verdier er det den 5. verdien: median = 4. For alder på 8 fotballspillere (22, 24, 25, 25, 26, 27, 29, 35): median = $\\frac{25+26}{2} = 25{,}5$.

**Typetall (modus):** Den vanligste verdien. I karaktereksempelet er typetallet 4 (forekommer 3 ganger).

Når bruker vi hva? **Gjennomsnitt** fungerer best for symmetriske fordelinger. **Median** er bedre når det finnes ekstremverdier -- for eksempel drar verdien 35 gjennomsnittet opp for fotballspillerne. **Typetall** brukes for kvalitative data (favorittfarge: blå).

**Spredningsmål** forteller hvor spredte dataene er. **Variasjonsbredden** er forskjellen mellom største og minste verdi: $R = x_{max} - x_{min}$. **Standardavviket** måler gjennomsnittlig avstand fra gjennomsnittet -- lavt betyr jevnt, høyt betyr stor spredning.`,
    },
    {
      id: '10-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-5-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på feilkilder og dataanalyse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-3-n-quiz2-q0',
            task: 'Spørsmål: "Støtter du den farlige ulvejakten?" Hva er problemet?',
            options: [
              { id: 'a', text: 'Sosial ønskelighet', isCorrect: false },
              { id: 'b', text: 'Ledende spørsmål', isCorrect: true },
              { id: 'c', text: 'Frafall', isCorrect: false },
              { id: 'd', text: 'Utvalgsfeil', isCorrect: false },
            ],
            solution: 'Ordet "farlige" er negativt ladet og påvirker svaret mot ulvejakt. Et nøytralt spørsmål ville være: "Hva mener du om ulvejakt?"',
          },
          {
            id: '10-5-3-n-quiz2-q1',
            task: 'Daglig skjermtid (timer): 2, 3, 3, 4, 4, 4, 5, 12. Hvilket sentralmål beskriver dataene best?',
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
              { id: 'd', text: 'Kan ikke avgjøres', isCorrect: false },
            ],
            solution: 'Lavt standardavvik = lite spredning. Klasse A ($0{,}5$) har jevnere karakterer enn klasse B ($1{,}5$).',
          },
          {
            id: '10-5-3-n-quiz2-q3',
            task: 'Antall bøker lest siste måned: 0 (5 elever), 1 (12), 2 (8), 3 (4), 4 (1). Hva er gjennomsnittet?',
            options: [
              { id: 'a', text: '$2$ bøker', isCorrect: false },
              { id: 'b', text: '$\\approx 1{,}47$ bøker', isCorrect: true },
              { id: 'c', text: '$1{,}5$ bøker', isCorrect: false },
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
      content: `## Kritisk vurdering -- vær skeptisk!

Når du leser om undersøkelser i media, still alltid disse spørsmålene:

1. **Hvem utførte undersøkelsen?** En tannkremreklame som sier "80% av tannleger anbefaler" -- hvem spurte, og kunne tannlegene anbefale flere merker?
2. **Hvordan ble utvalget gjort?** Representativt eller skjevt?
3. **Hvor stort var utvalget?** Større utvalg gir sikrere resultater.
4. **Hvordan var spørsmålene formulert?** Ledende eller nøtrale?
5. **Hva var svarprosenten?** Lavt = mulig systematisk frafall.
6. **Korrelasjon er IKKE kausalitet!** At to ting henger sammen betyr ikke at den ene forårsaker den andre.

Det siste punktet er så viktig at det fortjener et eksempel: Iskremsalg og drukningsulykker korrelerer. Betyr det at iskrem forårsaker drukning? Selvfølgelig ikke! Begge påvirkes av varmt vær.

Når en studie viser at "barn som spiser frokost gjør det bedre på skolen", kan vi ikke konkludere med at frokost gjør barn smartere. Familier som serverer frokost kan ha andre ressurser og vaner som også påvirker skoleprestasjoner.

En meningsmåling med 500 svar og feilmargin $\\pm 4\\%$ betyr at det sanne resultatet i befolkningen sannsynligvis ligger innenfor $\\pm 4$ prosentpoeng av det målte. Hvis 52% sier ja, ligger det sanne svaret mellom 48% og 56%.`,
    },
    {
      id: '10-5-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-5-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på kritisk vurdering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '10-5-3-n-quiz3-q0',
            task: 'En studie viser at barn som spiller mye videospill har mer aggressiv adferd. Hva kan vi konkludere?',
            options: [
              { id: 'a', text: 'Videospill forårsaker aggresjon', isCorrect: false },
              { id: 'b', text: 'Aggressive barn foretrekker videospill', isCorrect: false },
              { id: 'c', text: 'Det er en korrelasjon, men vi kan ikke slutte noe om årsak', isCorrect: true },
              { id: 'd', text: 'Undersøkelsen er verdiløs', isCorrect: false },
            ],
            solution: 'Korrelasjon beviser ikke kausalitet. Kanskje aggressive barn tiltrekkes av voldelige spill, eller kanskje en tredjefaktor (lite tilsyn) påvirker begge.',
          },
          {
            id: '10-5-3-n-quiz3-q1',
            task: 'Et søylediagram viser salg fra 100 til 150 enheter, men y-aksen starter på 90. Hva er problemet?',
            options: [
              { id: 'a', text: 'Ingenting, det er korrekt', isCorrect: false },
              { id: 'b', text: 'Økningen ser mer dramatisk ut fordi skalaen er kuttet', isCorrect: true },
              { id: 'c', text: 'Det mangler data', isCorrect: false },
              { id: 'd', text: 'Diagramtypen er feil', isCorrect: false },
            ],
            solution: 'Når y-aksen ikke starter på 0, ser selv små endringer dramatiske ut. En økning fra 100 til 150 (50%) ser visuelt ut som en mangedobling.',
          },
          {
            id: '10-5-3-n-quiz3-q2',
            task: 'En meningsmåling får 45% ja og 55% nei, med feilmargin $\\pm 3\\%$. Er nei-siden sikker vinner?',
            options: [
              { id: 'a', text: 'Ja, 55% er klart størst', isCorrect: false },
              { id: 'b', text: 'Nei sannsynlig vinner, men ikke 100% sikkert', isCorrect: true },
              { id: 'c', text: 'Nei, det er dødt løp', isCorrect: false },
              { id: 'd', text: 'Vi kan ikke si noe uten flere data', isCorrect: false },
            ],
            solution: 'Ja-intervall: 42-48%. Nei-intervall: 52-58%. Intervallene overlapper ikke, så nei er sannsynlig vinner -- men feilmarginen gir alltid noe usikkerhet.',
          },
        ],
      },
    },
    {
      id: '10-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering

- **Populasjon** er hele gruppen vi vil si noe om. **Utvalget** er den delen vi faktisk undersøker. Utvalget må være **representativt**.

- **Utvalgsmetoder:** Tilfeldig utvalg (best), stratifisert (sikrer undergrupper), bekvemmelighetsutvalg (ofte skjevt), selvseleksjon (skjevt).

- **Feilkilder:** Ledende spørsmål, sosial ønskelighet, systematisk frafall, målefeil.

- **Sentralmål:** Gjennomsnitt (symmetrisk fordeling), median (ved ekstremverdier), typetall (kvalitative data).

- **Spredningsmål:** Variasjonsbredde ($x_{max} - x_{min}$) og standardavvik (gjennomsnittlig avstand fra gjennomsnittet).

- **Kritisk vurdering:** Hvem utførte undersøkelsen? Representativt utvalg? Stor nok? Ledende spørsmål? Svarprosent? **Korrelasjon er IKKE kausalitet!**

Neste gang du leser om en undersøkelse i media, stopp opp og still de kritiske spørsmålene. Tallene forteller ikke alltid hele sannheten.`,
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
