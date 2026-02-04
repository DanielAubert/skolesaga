/**
 * Norsk VG1 - Narrative versjoner
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// Import kapitler fra delfiler
import {
  CHAPTER_NORSK_VG1_1_3_NARRATIV,
  CHAPTER_NORSK_VG1_1_4_NARRATIV,
  CHAPTER_NORSK_VG1_1_5_NARRATIV,
  CHAPTER_NORSK_VG1_1_6_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del1';

import {
  CHAPTER_NORSK_VG1_2_2_NARRATIV,
  CHAPTER_NORSK_VG1_2_3_NARRATIV,
  CHAPTER_NORSK_VG1_2_4_NARRATIV,
  CHAPTER_NORSK_VG1_2_5_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del2';

import {
  CHAPTER_NORSK_VG1_2_6_NARRATIV,
  CHAPTER_NORSK_VG1_2_7_NARRATIV,
  CHAPTER_NORSK_VG1_2_8_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del3';

import {
  CHAPTER_NORSK_VG1_3_1_NARRATIV,
  CHAPTER_NORSK_VG1_3_2_NARRATIV,
  CHAPTER_NORSK_VG1_3_3_NARRATIV,
  CHAPTER_NORSK_VG1_3_4_NARRATIV,
  CHAPTER_NORSK_VG1_3_5_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del4';

import {
  CHAPTER_NORSK_VG1_4_1_NARRATIV,
  CHAPTER_NORSK_VG1_4_2_NARRATIV,
  CHAPTER_NORSK_VG1_4_3_NARRATIV,
  CHAPTER_NORSK_VG1_4_4_NARRATIV,
  CHAPTER_NORSK_VG1_4_5_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del5';

import {
  CHAPTER_NORSK_VG1_5_1_NARRATIV,
  CHAPTER_NORSK_VG1_5_2_NARRATIV,
  CHAPTER_NORSK_VG1_5_3_NARRATIV,
  CHAPTER_NORSK_VG1_5_4_NARRATIV,
  CHAPTER_NORSK_VG1_5_5_NARRATIV,
  CHAPTER_NORSK_VG1_5_6_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del6';

import {
  CHAPTER_NORSK_VG1_6_1_NARRATIV,
  CHAPTER_NORSK_VG1_6_2_NARRATIV,
  CHAPTER_NORSK_VG1_6_3_NARRATIV,
  CHAPTER_NORSK_VG1_6_4_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del7';

import {
  CHAPTER_NORSK_VG1_7_1_NARRATIV,
  CHAPTER_NORSK_VG1_7_2_NARRATIV,
  CHAPTER_NORSK_VG1_7_3_NARRATIV,
  CHAPTER_NORSK_VG1_7_4_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del8';

import {
  CHAPTER_NORSK_VG1_8_1_NARRATIV,
  CHAPTER_NORSK_VG1_8_2_NARRATIV,
  CHAPTER_NORSK_VG1_8_3_NARRATIV,
  CHAPTER_NORSK_VG1_8_4_NARRATIV,
  CHAPTER_NORSK_VG1_8_5_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del9';

// ============================================================================
// KAPITTEL 1.1 NARRATIV: Retorikk og argumentasjon
// ============================================================================

export const CHAPTER_NORSK_VG1_1_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-1-1-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '1.1',
  title: 'Retorikk og argumentasjon',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hemmeligheten bak overbevisende kommunikasjon - fra Aristoteles til Instagram.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke retoriske appellformer og virkemidler i egen skriving og analyse',
  ],
  linkedChapterId: 'norsk-vg1-1-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-1-1-n-intro',
      type: 'text',
      content: `## Kunsten å få andre til å si ja

Tenk deg at du står foran klassen og skal overbevise alle om at sommerferie burde vare i tre måneder. Eller kanskje du vil at foreldrene dine skal si ja til den nye telefonen du ønsker deg. Hvordan får du dem til å lytte? Hvordan får du dem til å være enige med deg?

Dette er spørsmål mennesker har stilt i tusenvis av år. Faktisk var det en gresk filosof ved navn Aristoteles som for over 2300 år siden satte seg ned og tenkte: *Hva er det egentlig som gjør at noen lykkes med å overbevise andre?*

Det han kom frem til, kaller vi **retorikk** - læren om talekunst og overtalelse. Og det morsomme er at de samme prinsippene Aristoteles beskrev, brukes fortsatt i dag. Politikere bruker dem i taler, influencere bruker dem på TikTok, og reklamebyråer bruker dem for å få deg til å kjøpe ting du egentlig ikke trenger.

I dette kapittelet skal vi avsløre hemmelighetene bak overbevisende kommunikasjon. Du kommer til å lære å gjennomskue når noen prøver å manipulere deg - og du kommer til å lære hvordan du selv kan bli en mester i å få gjennomslag for ideene dine.`,
    },

    // ========== SEKSJON 1: De tre nøklene ==========
    {
      id: 'norsk-vg1-1-1-n-section1',
      type: 'text',
      content: `## De tre nøklene til overbevisning

Aristoteles oppdaget at det finnes tre hovedveier til å overbevise noen. Han kalte dem **etos**, **patos** og **logos**. Tenk på dem som tre forskjellige nøkler som åpner forskjellige dører inn til folks tanker og følelser.

**Etos handler om hvem du er.** Stoler folk på deg? Tror de at du vet hva du snakker om? Hvis en lege sier at du bør spise mer grønnsaker, tar du det sannsynligvis mer seriøst enn om en tilfeldig person på gata sier det samme. Legen har *troverdighet* - det er etos.

Når noen starter en setning med "Som sykepleier med 15 års erfaring..." eller "Jeg har selv opplevd dette...", bygger de etos. De viser at de har grunn til å uttale seg om temaet.

**Patos handler om følelser.** Mennesker tar beslutninger basert på følelser oftere enn vi liker å innrømme. Når en veldedighetsorganisasjon viser bilder av sultende barn, appellerer de til medfølelsen din. Når en politiker snakker om "våre barn og barnebarn", skaper han en følelse av ansvar og omsorg.

Patos er kraftfullt fordi det får folk til å *føle* at de må handle. Det er ikke nok å vite at noe er viktig - du må føle det i magen.

**Logos handler om fornuft.** Dette er den delen som bruker fakta, statistikk og logiske argumenter. "Forskning viser at..." og "Tall fra Statistisk sentralbyrå viser..." er typiske logos-fraser. Logos appellerer til hjernen din, ikke hjertet.

De beste overbeviserne kombinerer alle tre. De bygger troverdighet, vekker følelser, og støtter opp med fakta.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'En lege sier: "Som spesialist i ernæring med 20 års erfaring, anbefaler jeg dette kosttilskuddet." Hvilken appellform bruker legen primært?',
        options: [
          { id: 'a', text: 'Patos - appellerer til følelser', isCorrect: false },
          { id: 'b', text: 'Etos - bygger troverdighet gjennom ekspertise', isCorrect: true },
          { id: 'c', text: 'Logos - bruker fakta og statistikk', isCorrect: false },
          { id: 'd', text: 'Kairos - velger riktig tidspunkt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Legen bruker etos ved å vise til sin spesialisering og lange erfaring. Dette bygger troverdighet og får oss til å stole på anbefalingen. Hadde legen i stedet vist til forskningsresultater, ville det vært logos.',
      },
    },

    // ========== SEKSJON 2: Kairos - timing er alt ==========
    {
      id: 'norsk-vg1-1-1-n-section2',
      type: 'text',
      content: `## Kairos - når timing er alt

Aristoteles snakket også om en fjerde faktor som mange glemmer: **kairos**. Det handler om å si rett ting til rett tid.

Tenk deg at du vil be sjefen om lønnsforhøyelse. Gjør du det rett etter at bedriften har mistet en stor kunde? Dårlig timing. Gjør du det etter at du nettopp har fullført et vellykket prosjekt? Perfekt timing.

Kairos forklarer hvorfor politikere snakker om klimasaker rett etter en naturkatastrofe, eller hvorfor reklame for varmepumper kommer når strømprisene er på sitt høyeste. De utnytter øyeblikket når folk er mest mottakelige for budskapet.

La oss se på et eksempel som kombinerer alle fire elementene. Tenk deg denne teksten:

*"Som sykepleier med 15 års erfaring har jeg sett hvordan bemanningskrisen rammer pasientene. Tall fra Statistisk sentralbyrå viser at vi mangler 6000 sykepleiere. Tenk på alle de eldre som ikke får den omsorgen de fortjener. Vi trenger handling nå!"*

Kan du se alle appellformene? **Etos** kommer i "sykepleier med 15 års erfaring". **Logos** kommer i "tall fra Statistisk sentralbyrå". **Patos** kommer i "de eldre som ikke får omsorgen de fortjener". Og **kairos**? Teksten spiller på at helsedebatten er aktuell akkurat nå.

Dette er oppskriften som profesjonelle kommunikatører bruker hver eneste dag.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En klimaaktivist holder en tale om global oppvarming rett etter en voldsom flom. Hvilken retorisk faktor utnytter aktivisten?',
        options: [
          { id: 'a', text: 'Etos - viser sin troverdighet', isCorrect: false },
          { id: 'b', text: 'Patos - appellerer til følelser', isCorrect: false },
          { id: 'c', text: 'Logos - bruker vitenskapelige fakta', isCorrect: false },
          { id: 'd', text: 'Kairos - utnytter det rette øyeblikket', isCorrect: true },
        ],
        correctAnswer: 'd',
        solution: 'Aktivisten bruker kairos ved å snakke om klimaendringer rett etter en naturkatastrofe. På dette tidspunktet er folk mer oppmerksomme på klimaspørsmål og mer mottakelige for budskapet. Timing er alt!',
      },
    },

    // ========== SEKSJON 3: Retoriske virkemidler ==========
    {
      id: 'norsk-vg1-1-1-n-section3',
      type: 'text',
      content: `## Ordmagi: Retoriske virkemidler

Nå vet du om de fire appellformene. Men de beste talerne har flere triks i ermet. De bruker også **retoriske virkemidler** - språklige grep som gjør budskapet sterkere og mer minneverdig.

**Retoriske spørsmål** er spørsmål du ikke forventer svar på. "Er det virkelig slik vi vil ha det?" Spørsmålet får deg til å stoppe opp og tenke - og implisitt svare "nei". Det er mye kraftigere enn å bare si "Vi vil ikke ha det slik."

**Gjentakelse** er akkurat det det høres ut som - å si noe flere ganger. Martin Luther King sa "I have a dream" åtte ganger i sin berømte tale. Hver gang det kommer tilbake, forsterkes budskapet. Det fester seg i hodet ditt.

**Treleddet oppbygging** - eller trikolon på fancy språk - bruker magien i tallet tre. "Frihet, likhet, brorskap." "Med kraft, mot og vilje." Tre elementer føles komplett og rytmisk på en måte som to eller fire ikke gjør.

**Kontraster** setter motsetninger opp mot hverandre. "Vi kan ikke lenger sitte stille og se på. Vi må handle." Motsetningen mellom passivitet og handling blir krystallklar.

**Metaforer** bruker bilder for å forklare abstrakte ting. "La friheten ringe" - frihet blir en klokke. "Vi må bygge broer, ikke murer" - samarbeid og konflikt blir arkitektur.

Disse virkemidlene er som krydder i maten. Brukt riktig, løfter de teksten fra kjedelig til uforglemmelig.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-1-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: '"Våre barn, våre barnebarn, vår fremtid - alle står på spill." Hvilket retorisk virkemiddel er mest fremtredende her?',
        options: [
          { id: 'a', text: 'Retorisk spørsmål', isCorrect: false },
          { id: 'b', text: 'Metafor', isCorrect: false },
          { id: 'c', text: 'Treleddet oppbygging (trikolon)', isCorrect: true },
          { id: 'd', text: 'Kontrast', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Her har vi en treleddet oppbygging: "barn", "barnebarn", "fremtid". Tre elementer i rekke skaper rytme og forsterker budskapet. Legg også merke til gjentakelsen av "vår/våre" - det skaper fellesskapsfølelse.',
      },
    },

    // ========== SEKSJON 4: Retorikk i praksis ==========
    {
      id: 'norsk-vg1-1-1-n-section4',
      type: 'text',
      content: `## Retorikk overalt rundt deg

Nå som du kjenner verktøyene, vil du begynne å se retorikk overalt. Det er litt som når du lærer et nytt ord - plutselig hører du det hele tiden.

**I reklame:** Tenk på en typisk reklame. En kjent person (etos) viser deg et produkt. Vakker musikk og glade mennesker (patos) skaper en god følelse. "Klinisk testet" eller "9 av 10 anbefaler" (logos) gir vitenskapelig legitimitet. Og reklamen kommer på TV rett før du skal legge deg og er sulten (kairos).

**I politikk:** Politikere er mestere i retorikk. De viser til sin erfaring og bakgrunn (etos). De forteller historier om enkeltmennesker de har møtt (patos). De siterer rapporter og statistikk (logos). Og de holder pressekonferanser når nyhetsbildet er gunstig (kairos).

**På sosiale medier:** Influencere bygger personlig merkevare (etos) ved å dele av livene sine. De skaper følelsesmessige øyeblikk (patos) i innleggene sine. De viser til produktanmeldelser og sammenligninger (logos). Og de poster når følgerne er mest aktive (kairos).

Det viktigste du kan lære av retorikk er kanskje dette: Neste gang noen prøver å overbevise deg om noe, stopp opp og tenk. Hvilke appellformer bruker de? Hvilke virkemidler? Er argumentene faktisk gode, eller er det bare presentasjonen som er god?

Å forstå retorikk gjør deg til en smartere mottaker av informasjon - og en bedre formidler når det er din tur å overbevise.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-1-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'En reklame viser en tannlege i hvit frakk som sier "9 av 10 tannleger anbefaler denne tannkremen." Hvilke appellformer brukes her?',
        options: [
          { id: 'a', text: 'Bare etos (tannlegens troverdighet)', isCorrect: false },
          { id: 'b', text: 'Bare logos (statistikken)', isCorrect: false },
          { id: 'c', text: 'Både etos og logos kombinert', isCorrect: true },
          { id: 'd', text: 'Bare patos (følelser)', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Reklamen kombinerer etos (tannlegen i hvit frakk gir troverdighet) med logos (statistikken "9 av 10"). Dette er en klassisk reklameteknikk - kombiner ekspertautoritet med tall for å virke troverdig og objektiv.',
      },
    },

    // ========== SEKSJON 5: Din tur ==========
    {
      id: 'norsk-vg1-1-1-n-section5',
      type: 'text',
      content: `## Bli en retorisk mester

Nå har du verktøyene. Spørsmålet er: Hvordan bruker du dem?

Når du skal overbevise noen, tenk gjennom dette:

**Hvem er publikum ditt?** Foreldrene dine krever kanskje andre argumenter enn vennene dine. En lærer reagerer annerledes enn en medelev. Tilpass budskapet til mottakeren.

**Hvilken appellform passer best?** Noen ganger er fakta viktigst (logos). Andre ganger må du vekke følelser (patos). Og noen ganger handler det mest om å vise at du er til å stole på (etos).

**Hva er timingen?** Er det rett øyeblikk å ta opp dette? Vil mottakeren være mottakelig akkurat nå?

**Hvilke virkemidler kan løfte teksten?** Et godt retorisk spørsmål i innledningen? En treleddet oppbygging som oppsummerer poengene dine? En kraftig kontrast?

Øv deg på å legge merke til retorikk i hverdagen. Når du ser en reklame, spør deg selv: Hva prøver de å få meg til å føle? Hvilke triks bruker de? Når du leser en nyhetssak, tenk: Hvordan presenteres dette? Er det nøytralt, eller prøver noen å overbevise meg om noe?

Jo mer du øver, jo bedre blir du - både til å gjennomskue andres retorikk og til å bruke den selv.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-1-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med å lære retorikk?',
        options: [
          { id: 'a', text: 'Å kunne manipulere andre uten at de merker det', isCorrect: false },
          { id: 'b', text: 'Å bli bedre til å analysere og formulere overbevisende argumenter', isCorrect: true },
          { id: 'c', text: 'Å lære å skrive skjønnlitteratur', isCorrect: false },
          { id: 'd', text: 'Å bli politiker', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Retorikk handler om å forstå hvordan overbevisning fungerer. Dette gjør deg til en bedre skribent og taler, men også til en kritisk mottaker som kan gjennomskue andres argumentasjon. Det handler ikke om manipulasjon, men om effektiv og etisk kommunikasjon.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-1-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Dine retoriske verktøy

Du har nå lært de viktigste begrepene i retorikk. Her er en rask oppsummering:

**De fire appellformene:**
- **Etos** - troverdighet: Hvem du er og hvorfor folk bør lytte til deg
- **Patos** - følelser: Å vekke engasjement, empati eller andre følelser
- **Logos** - fornuft: Fakta, statistikk og logiske argumenter
- **Kairos** - timing: Å si rett ting til rett tid

**Retoriske virkemidler:**
- **Retoriske spørsmål** - spørsmål som får folk til å tenke
- **Gjentakelse** - repetere for effekt
- **Treleddet oppbygging** - magien i tallet tre
- **Kontraster** - sette motsetninger mot hverandre
- **Metaforer** - billedlig språk som gjør abstrakte ting konkrete

**Det viktigste:**
Gode kommunikatører kombinerer flere appellformer og virkemidler. De tilpasser budskapet til publikum og situasjon. Og de beste er ikke de som har flest triks - men de som bruker dem ærlig og etisk.

Nå er det din tur til å bruke disse verktøyene - både til å analysere andres retorikk og til å forbedre din egen kommunikasjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2 NARRATIV: Sakprosa og kildebruk
// ============================================================================

export const CHAPTER_NORSK_VG1_1_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-1-2-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '1.2',
  title: 'Sakprosa og kildebruk',
  subtitle: 'Narrativ versjon',
  description: 'Bli en informasjonsdetektiv - lær å skille fakta fra fiksjon.',
  estimatedMinutes: 30,
  competenceGoals: ['vurdere og bruke kilder kritisk og etterrettelig'],
  linkedChapterId: 'norsk-vg1-1-2',
  content: [
    {
      id: 'norsk-vg1-1-2-n-intro',
      type: 'text',
      content: `## Hvem kan du stole på?

Tenk deg at du scroller gjennom TikTok og ser en video der noen påstår at sitronjuice kurerer forkjølelse. Tusenvis av likes. Men stemmer det egentlig?

Velkommen til den moderne informasjonsjungelen. Vi lever i en tid der alle kan publisere hva som helst, og der falske nyheter sprer seg raskere enn sannheten. Din viktigste superkraft er **kildekritikk** - evnen til å skille pålitelig informasjon fra tull.

I dette kapittelet skal du bli en informasjonsdetektiv.`,
    },
    {
      id: 'norsk-vg1-1-2-n-section1',
      type: 'text',
      content: `## Primær- og sekundærkilder

Tenk deg at du vil vite hva som skjedde under andre verdenskrig. Du har to valg:

**Valg A:** Du leser dagboken til en soldat som var der.
**Valg B:** Du leser en lærebok om krigen skrevet i 2023.

Soldatens dagbok er en **primærkilde** - et originalt dokument fra noen som opplevde hendelsen. Læreboken er en **sekundærkilde** - noen har samlet og tolket informasjon fra primærkilder.

Hvilken er best? Det kommer an på hva du trenger. Primærkilder gir direkte tilgang til "beviset", men kan være ensidige. Sekundærkilder gir oversikt, men er alltid tolkninger.`,
    },
    {
      id: 'norsk-vg1-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'En vitenskapelig rapport fra FNs klimapanel med originale forskningsdata er:',
        options: [
          { id: 'a', text: 'Sekundærkilde', isCorrect: false },
          { id: 'b', text: 'Primærkilde', isCorrect: true },
          { id: 'c', text: 'Upålitelig kilde', isCorrect: false },
          { id: 'd', text: 'Tertiærkilde', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'IPCCs rapporter er primærkilder fordi de inneholder original forskning og data utført av klimaforskere.',
      },
    },
    {
      id: 'norsk-vg1-1-2-n-section2',
      type: 'text',
      content: `## TRAFO-modellen

**TRAFO** er din sjekkliste for å vurdere kilder:

**T - Troverdighet:** Hvem står bak? Er det en ekspert eller en random person?

**R - Relevans:** Passer kilden til det du trenger?

**A - Aktualitet:** Er informasjonen oppdatert?

**F - Formål:** Hva vil avsenderen oppnå? Informere, selge, overbevise?

**O - Objektivitet:** Er fremstillingen balansert?

Bruk TRAFO som en mental sjekkliste hver gang du vurderer en kilde.`,
    },
    {
      id: 'norsk-vg1-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En influencer tjener penger på å selge et produkt de anbefaler. Hvilken del av TRAFO bør du være mest kritisk til?',
        options: [
          { id: 'a', text: 'Aktualitet', isCorrect: false },
          { id: 'b', text: 'Relevans', isCorrect: false },
          { id: 'c', text: 'Formål', isCorrect: true },
          { id: 'd', text: 'Troverdighet', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Når noen tjener penger på å anbefale et produkt, har de et formål som ikke bare er å informere.',
      },
    },
    {
      id: 'norsk-vg1-1-2-n-section3',
      type: 'text',
      content: `## Kildehenvisning

Når du bruker andres ideer i din tekst, må du oppgi hvor det kommer fra. Dette:
- Viser at du har gjort research
- Lar leseren sjekke påstandene
- Unngår **plagiat** - å fremstille andres arbeid som ditt eget

**Direkte sitat:** "Klimaendringene er alvorlige" (Hansen, 2023).

**Indirekte sitat:** Ifølge Hansen (2023) er klimaendringer en stor utfordring.

Husk: Oppgi alltid kilden, selv når du bruker egne ord!`,
    },
    {
      id: 'norsk-vg1-1-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Du gjengir innhold fra en artikkel med egne ord. Hva må du gjøre?',
        options: [
          { id: 'a', text: 'Ingenting - du bruker egne ord', isCorrect: false },
          { id: 'b', text: 'Sette i anførselstegn', isCorrect: false },
          { id: 'c', text: 'Oppgi kilden', isCorrect: true },
          { id: 'd', text: 'Bare nevne forfatteren i innledningen', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Selv med egne ord må du oppgi kilden. Ideen kommer fortsatt fra noen andre.',
      },
    },
    {
      id: 'norsk-vg1-1-2-n-section4',
      type: 'text',
      content: `## Avsløre falske nyheter

Varselsignaler:
- **For godt/ille til å være sant** - Ekstreme påstander krever god dokumentasjon
- **Ukjent kilde** - Ingen kontaktinfo eller bakgrunn
- **Ingen andre dekker det** - Bare ett obskurt nettsted har "nyheten"
- **Sensasjonelt språk** - STORE BOKSTAVER og utropstegn!!!

Din beste venn er **faktasjekk**. Søk opp påstanden. Bruk Faktisk.no. Finn originalkilden.`,
    },
    {
      id: 'norsk-vg1-1-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Du ser en oppsiktsvekkende nyhet på et ukjent nettsted. Ingen etablerte medier dekker saken. Hva bør du gjøre?',
        options: [
          { id: 'a', text: 'Dele den raskt', isCorrect: false },
          { id: 'b', text: 'Stole på den - mange likes', isCorrect: false },
          { id: 'c', text: 'Søke opp og sjekke andre kilder', isCorrect: true },
          { id: 'd', text: 'Ignorere den helt', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Sjekk alltid om påstanden bekreftes av andre uavhengige kilder før du tror på eller deler noe.',
      },
    },
    {
      id: 'norsk-vg1-1-2-n-section5',
      type: 'text',
      content: `## Bli en informasjonsdetektiv

Still disse spørsmålene:
1. **Hvem sier dette?** (Troverdighet)
2. **Hva vil de oppnå?** (Formål)
3. **Er det oppdatert?** (Aktualitet)
4. **Passer det til mitt behov?** (Relevans)
5. **Er det balansert?** (Objektivitet)
6. **Kan jeg verifisere det?** (Krysssjekk)

I en verden full av informasjon er kritisk tenkning din superkraft.`,
    },
    {
      id: 'norsk-vg1-1-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-1-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med kildekritikk?',
        options: [
          { id: 'a', text: 'Å avvise all informasjon fra internett', isCorrect: false },
          { id: 'b', text: 'Å skrive lengre oppgaver', isCorrect: false },
          { id: 'c', text: 'Å skille pålitelig fra upålitelig informasjon', isCorrect: true },
          { id: 'd', text: 'Å kun stole på trykte bøker', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Kildekritikk handler om å vurdere alle kilder og avgjøre hva som er pålitelig nok for ditt formål.',
      },
    },
    {
      id: 'norsk-vg1-1-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Kildetyper:**
- **Primærkilder** - Originale dokumenter
- **Sekundærkilder** - Bearbeidet informasjon

**TRAFO-modellen:**
- **T**roverdighet - **R**elevans - **A**ktualitet - **F**ormål - **O**bjektivitet

**Kildehenvisning:** Oppgi alltid kilder - unngå plagiat!

**Falske nyheter:** Se etter varselsignaler og faktasjekk alltid.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.1 NARRATIV: Novelleanalyse
// ============================================================================

export const CHAPTER_NORSK_VG1_2_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-2-1-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '2.1',
  title: 'Novelleanalyse',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hemmelighetene bak de korte historiene - lær å lese mellom linjene.',
  estimatedMinutes: 35,
  competenceGoals: ['analysere og tolke skjønnlitterære tekster'],
  linkedChapterId: 'norsk-vg1-2-1',
  content: [
    {
      id: 'norsk-vg1-2-1-n-intro',
      type: 'text',
      content: `## De korte historiene med stort innhold

Tenk deg at du har ti minutter til å fortelle en historie som forandrer noens liv. Hvert ord må telle.

Det er nettopp dette en **novelle** er - en kort fortelling der alt er konsentrert. Der en roman kan bruke hundrevis av sider, må novellen gjøre det på noen få.

Ingenting i en god novelle er tilfeldig. Hvert ord, hver detalj har en funksjon. Er du klar til å lese mellom linjene?`,
    },
    {
      id: 'norsk-vg1-2-1-n-section1',
      type: 'text',
      content: `## Hvem forteller historien?

Det første spørsmålet: *Hvem forteller dette?*

**Jeg-fortelleren:** "Jeg våknet av en lyd." Du er inne i hodet til denne personen. Du vet bare det de vet.

**Tredjeperson begrenset:** "Maren så ut av vinduet." Vi følger Maren utenfra, men får tilgang til hennes tanker.

**Allvitende forteller:** "Han visste ikke at hun hadde bestemt seg." Fortelleren vet alt om alle - kan skape **dramatisk ironi** der leseren vet mer enn karakterene.

Synsvinkel styrer hele leseopplevelsen.`,
    },
    {
      id: 'norsk-vg1-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: '"Han visste ikke at dette var siste gang de ville se hverandre." Hvilken synsvinkel?',
        options: [
          { id: 'a', text: 'Jeg-forteller', isCorrect: false },
          { id: 'b', text: 'Tredjeperson begrenset', isCorrect: false },
          { id: 'c', text: 'Allvitende forteller', isCorrect: true },
          { id: 'd', text: 'Andreperson', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Fortelleren vet noe karakteren ikke vet ("siste gang"). Dette er allvitende forteller som skaper dramatisk ironi.',
      },
    },
    {
      id: 'norsk-vg1-2-1-n-section2',
      type: 'text',
      content: `## Spenningskurven

**Eksposisjon:** Vi møter personene og settingen.
**Komplikasjon:** Noe forstyrrer balansen.
**Spenningsstigning:** Problemet eskalerer.
**Klimaks:** Det mest intense øyeblikket.
**Avtrapning:** Støvet legger seg.

Men moderne noveller leker med strukturen. De kan starte midt i handlingen (*in medias res*) eller slutte med åpne spørsmål.`,
    },
    {
      id: 'norsk-vg1-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: '"Blodet rant fra pannen hennes da hun endelig forsto hva som hadde skjedd." Hva kalles denne teknikken?',
        options: [
          { id: 'a', text: 'Eksposisjon', isCorrect: false },
          { id: 'b', text: 'In medias res', isCorrect: true },
          { id: 'c', text: 'Epilog', isCorrect: false },
          { id: 'd', text: 'Klimaks', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'In medias res = "midt i tingene". Novellen starter midt i en dramatisk scene, ikke fra begynnelsen.',
      },
    },
    {
      id: 'norsk-vg1-2-1-n-section3',
      type: 'text',
      content: `## Symboler og undertekst

**Symboler** er konkrete ting som representerer noe abstrakt. En lukket dør kan symbolisere mangel på kommunikasjon.

Hvordan vet du at noe er et symbol? Se etter gjentakelser og ting som får mye oppmerksomhet.

**Tema** er den store ideen teksten utforsker - det novellen egentlig handler om.

**Undertekst** er det karakterene ikke sier høyt, men som ligger mellom linjene.`,
    },
    {
      id: 'norsk-vg1-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Et falmet fotografi beskrives gjentatte ganger i novellen. Hva er dette sannsynligvis?',
        options: [
          { id: 'a', text: 'Bare en realistisk detalj', isCorrect: false },
          { id: 'b', text: 'Et symbol på tapte minner', isCorrect: true },
          { id: 'c', text: 'En feil fra forfatteren', isCorrect: false },
          { id: 'd', text: 'Et frampek', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Når noe gjentas og får detaljert beskrivelse, er det ofte et symbol for noe abstrakt.',
      },
    },
    {
      id: 'norsk-vg1-2-1-n-section4',
      type: 'text',
      content: `## SVIRP-modellen

**S - Sjanger og struktur:** Hva slags novelle? Hvordan bygget opp?

**V - Virkemidler:** Metaforer, symboler, synsvinkel?

**I - Innhold og handling:** Hva skjer? Hvem er personene?

**R - Relasjon og kontekst:** Når ble den skrevet? Historisk bakgrunn?

**P - Personlig tolkning:** Hva er tema og budskap?`,
    },
    {
      id: 'norsk-vg1-2-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'En novelle fra 1882 handler om klasseforskjeller. Hvilken del av SVIRP hjelper deg forstå forfatterens valg?',
        options: [
          { id: 'a', text: 'S - Sjanger', isCorrect: false },
          { id: 'b', text: 'V - Virkemidler', isCorrect: false },
          { id: 'c', text: 'R - Relasjon og kontekst', isCorrect: true },
          { id: 'd', text: 'I - Innhold', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '1882 = realismen, en periode med fokus på sosial kritikk. Konteksten forklarer forfatterens valg.',
      },
    },
    {
      id: 'norsk-vg1-2-1-n-section5',
      type: 'text',
      content: `## Moderne noveller

Samtidsnoveller bruker ofte **minimalisme**: kort språk der det som ikke sies er like viktig som det som sies.

Kjell Askildsen var en mester i dette. Korte noveller, hverdagslig dialog, ingenting forklares. Men under overflaten ulmer konflikter og ensomhet.

Moderne noveller har ofte **åpne avslutninger**. De slutter med et spørsmål, ikke et svar.`,
    },
    {
      id: 'norsk-vg1-2-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner minimalistiske noveller?',
        options: [
          { id: 'a', text: 'Lange beskrivelser og forklaringer', isCorrect: false },
          { id: 'b', text: 'Kort språk og mening mellom linjene', isCorrect: true },
          { id: 'c', text: 'Mange personer og intrigier', isCorrect: false },
          { id: 'd', text: 'Alltid lykkelig slutt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Minimalistiske noveller bruker kort språk og lar mye være usagt. Leseren må tolke underteksten.',
      },
    },
    {
      id: 'norsk-vg1-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Synsvinkel:** Jeg-forteller, tredjeperson begrenset, allvitende

**Spenningskurve:** Eksposisjon → Komplikasjon → Klimaks → Løsning

**Virkemidler:** Symbol, motiv, undertekst, tema

**SVIRP:** Sjanger - Virkemidler - Innhold - Relasjon - Personlig tolkning

**Husk:** Ingenting i en god novelle er tilfeldig!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// RE-EKSPORTER IMPORTERTE KAPITLER
// ============================================================================

export {
  CHAPTER_NORSK_VG1_1_3_NARRATIV,
  CHAPTER_NORSK_VG1_1_4_NARRATIV,
  CHAPTER_NORSK_VG1_1_5_NARRATIV,
  CHAPTER_NORSK_VG1_1_6_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del1';

export {
  CHAPTER_NORSK_VG1_2_2_NARRATIV,
  CHAPTER_NORSK_VG1_2_3_NARRATIV,
  CHAPTER_NORSK_VG1_2_4_NARRATIV,
  CHAPTER_NORSK_VG1_2_5_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del2';

export {
  CHAPTER_NORSK_VG1_2_6_NARRATIV,
  CHAPTER_NORSK_VG1_2_7_NARRATIV,
  CHAPTER_NORSK_VG1_2_8_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del3';

export {
  CHAPTER_NORSK_VG1_3_1_NARRATIV,
  CHAPTER_NORSK_VG1_3_2_NARRATIV,
  CHAPTER_NORSK_VG1_3_3_NARRATIV,
  CHAPTER_NORSK_VG1_3_4_NARRATIV,
  CHAPTER_NORSK_VG1_3_5_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del4';

export {
  CHAPTER_NORSK_VG1_4_1_NARRATIV,
  CHAPTER_NORSK_VG1_4_2_NARRATIV,
  CHAPTER_NORSK_VG1_4_3_NARRATIV,
  CHAPTER_NORSK_VG1_4_4_NARRATIV,
  CHAPTER_NORSK_VG1_4_5_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del5';

export {
  CHAPTER_NORSK_VG1_5_1_NARRATIV,
  CHAPTER_NORSK_VG1_5_2_NARRATIV,
  CHAPTER_NORSK_VG1_5_3_NARRATIV,
  CHAPTER_NORSK_VG1_5_4_NARRATIV,
  CHAPTER_NORSK_VG1_5_5_NARRATIV,
  CHAPTER_NORSK_VG1_5_6_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del6';

export {
  CHAPTER_NORSK_VG1_6_1_NARRATIV,
  CHAPTER_NORSK_VG1_6_2_NARRATIV,
  CHAPTER_NORSK_VG1_6_3_NARRATIV,
  CHAPTER_NORSK_VG1_6_4_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del7';

export {
  CHAPTER_NORSK_VG1_7_1_NARRATIV,
  CHAPTER_NORSK_VG1_7_2_NARRATIV,
  CHAPTER_NORSK_VG1_7_3_NARRATIV,
  CHAPTER_NORSK_VG1_7_4_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del8';

export {
  CHAPTER_NORSK_VG1_8_1_NARRATIV,
  CHAPTER_NORSK_VG1_8_2_NARRATIV,
  CHAPTER_NORSK_VG1_8_3_NARRATIV,
  CHAPTER_NORSK_VG1_8_4_NARRATIV,
  CHAPTER_NORSK_VG1_8_5_NARRATIV,
} from './textbook-content-norsk-vg1-narrativ-del9';

// ============================================================================
// EKSPORT
// ============================================================================

export const NORSK_VG1_NARRATIV_CHAPTERS: TextbookChapter[] = [
  // Del 1: Sakprosa og retorikk
  CHAPTER_NORSK_VG1_1_1_NARRATIV,
  CHAPTER_NORSK_VG1_1_2_NARRATIV,
  CHAPTER_NORSK_VG1_1_3_NARRATIV,
  CHAPTER_NORSK_VG1_1_4_NARRATIV,
  CHAPTER_NORSK_VG1_1_5_NARRATIV,
  CHAPTER_NORSK_VG1_1_6_NARRATIV,
  // Del 2: Skjønnlitteratur
  CHAPTER_NORSK_VG1_2_1_NARRATIV,
  CHAPTER_NORSK_VG1_2_2_NARRATIV,
  CHAPTER_NORSK_VG1_2_3_NARRATIV,
  CHAPTER_NORSK_VG1_2_4_NARRATIV,
  CHAPTER_NORSK_VG1_2_5_NARRATIV,
  CHAPTER_NORSK_VG1_2_6_NARRATIV,
  CHAPTER_NORSK_VG1_2_7_NARRATIV,
  CHAPTER_NORSK_VG1_2_8_NARRATIV,
  // Del 3: Flerkulturell litteratur
  CHAPTER_NORSK_VG1_3_1_NARRATIV,
  CHAPTER_NORSK_VG1_3_2_NARRATIV,
  CHAPTER_NORSK_VG1_3_3_NARRATIV,
  CHAPTER_NORSK_VG1_3_4_NARRATIV,
  CHAPTER_NORSK_VG1_3_5_NARRATIV,
  // Del 4: Språk
  CHAPTER_NORSK_VG1_4_1_NARRATIV,
  CHAPTER_NORSK_VG1_4_2_NARRATIV,
  CHAPTER_NORSK_VG1_4_3_NARRATIV,
  CHAPTER_NORSK_VG1_4_4_NARRATIV,
  CHAPTER_NORSK_VG1_4_5_NARRATIV,
  // Del 5: Skriving
  CHAPTER_NORSK_VG1_5_1_NARRATIV,
  CHAPTER_NORSK_VG1_5_2_NARRATIV,
  CHAPTER_NORSK_VG1_5_3_NARRATIV,
  CHAPTER_NORSK_VG1_5_4_NARRATIV,
  CHAPTER_NORSK_VG1_5_5_NARRATIV,
  CHAPTER_NORSK_VG1_5_6_NARRATIV,
  // Del 6: Sammensatte tekster
  CHAPTER_NORSK_VG1_6_1_NARRATIV,
  CHAPTER_NORSK_VG1_6_2_NARRATIV,
  CHAPTER_NORSK_VG1_6_3_NARRATIV,
  CHAPTER_NORSK_VG1_6_4_NARRATIV,
  // Del 7: Samisk og minoriteter
  CHAPTER_NORSK_VG1_7_1_NARRATIV,
  CHAPTER_NORSK_VG1_7_2_NARRATIV,
  CHAPTER_NORSK_VG1_7_3_NARRATIV,
  CHAPTER_NORSK_VG1_7_4_NARRATIV,
  // Del 8: Språklære
  CHAPTER_NORSK_VG1_8_1_NARRATIV,
  CHAPTER_NORSK_VG1_8_2_NARRATIV,
  CHAPTER_NORSK_VG1_8_3_NARRATIV,
  CHAPTER_NORSK_VG1_8_4_NARRATIV,
  CHAPTER_NORSK_VG1_8_5_NARRATIV,
];
