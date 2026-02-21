/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Del 8
 * Kapittel 3.5, 4.4, 5.3, 5.4, 6.3, 6.4
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.5: Feilkilder i statistikk
// ============================================================================
export const CHAPTER_2P_3_5: TextbookChapter = {
  id: '2p-3-5',
  courseId: '2p',
  chapterNumber: '3.5',
  title: 'Feilkilder i statistikk',
  description: 'Identifisere og vurdere feilkilder i statistiske undersokelser og presentasjoner.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere og argumentere for om statistiske framstillingar og konklusjonar er gyldige'],
  content: [
    {
      id: '2p-3-5-intro', type: 'text',
      content: `## Feilkilder i statistikk\n\nStatistikk brukes overalt: i nyheter, reklame, politikk og forskning. Men statistikk kan være misvisende dersom den er basert pa darlige data eller presenteres uheldig.\n\nI dette kapittelet larer du:\n- Skille mellom tilfeldig og systematisk feil\n- Gjenkjenne skjevhet i utvalg\n- Oppdage villedende diagrammer`,
    },
    {
      id: '2p-3-5-def-feilkilder', type: 'definition', title: 'Typer feilkilder',
      content: `**Tilfeldig feil:** Naturlig variasjon som minsker med storre utvalg.\n\n**Systematisk feil (bias):** Trekker resultatene i en bestemt retning. Storre utvalg hjelper *ikke*.\n\n**Utvalgsfeil:** Utvalget er ikke representativt for populasjonen.\n\n**Malefel:** Sporsmalene er uklare eller ledende.`,
    },
    {
      id: '2p-3-5-example-1', type: 'example', title: 'Villedende diagram',
      problem: 'En avis viser et stolpediagram der y-aksen starter pa 95 %. Skoler har 95,2 % og 96,1 %. Forklar feilkilden.',
      solution: `Nar y-aksen ikke starter pa 0, forstorres forskjellene visuelt. Forskjellen er bare $0{,}9$ prosentpoeng. **Feilkilden** er avkortet y-akse. Se alltid pa aksene i et diagram.`,
    },
    {
      id: '2p-3-5-note-1', type: 'note', title: 'Sjekkliste for a vurdere statistikk',
      content: `1. **Hvem er avsender?** Har de interesse av et bestemt resultat?\n2. **Hvor stort er utvalget?** 30 personer sier lite om hele Norge.\n3. **Tilfeldig utvalg?** Tilfeldig er best.\n4. **Ledende sporsmal?** Gir skjeve svar.\n5. **Starter y-aksen pa 0?** Avkortede akser overdriver forskjeller.`,
    },
    {
      id: '2p-3-5-ex-1', type: 'exercise', exercise: {
        id: '2p-3-5-ex-1', number: '1', type: 'multiple-choice',
        task: 'En nettavis gjor en sporreundersokelse pa nettsiden sin. 12 000 svarer. Hva er den storste feilkilden?',
        options: [
          { id: 'a', text: 'Utvalget er ikke tilfeldig valgt (selvseleksjon)', isCorrect: true },
          { id: 'b', text: 'Utvalget er for lite', isCorrect: false },
          { id: 'c', text: 'Det er for mange som svarer', isCorrect: false },
          { id: 'd', text: 'Tilfeldig variasjon', isCorrect: false },
        ],
        solution: 'Selvseleksjon: folk med sterke meninger deltar oftere. Utvalget er ikke representativt.',
      },
    },
    {
      id: '2p-3-5-ex-2', type: 'exercise', exercise: {
        id: '2p-3-5-ex-2', number: '2', type: 'classic',
        task: '"4 av 5 tannleger anbefaler var tannkrem." Gi minst to grunner til at denne pastand kan være misvisende.',
        solution: '1) Vi vet ikke hvor mange som ble spurt. 2) Sporsmalene kan være ledende. 3) Tannlegene kan ha fatt betalt. 4) De kan ha anbefalt den som en blant mange.',
      },
    },
    {
      id: '2p-3-5-ex-3', type: 'exercise', exercise: {
        id: '2p-3-5-ex-3', number: '3', type: 'multiple-choice',
        task: 'Omsetning pa 50 og 52 mill., y-aksen starter pa 49 mill. Hva er prosentvis okning?',
        options: [
          { id: 'a', text: '$4\\,\\%$', isCorrect: true },
          { id: 'b', text: '$40\\,\\%$', isCorrect: false },
          { id: 'c', text: '$67\\,\\%$', isCorrect: false },
          { id: 'd', text: '$2\\,\\%$', isCorrect: false },
        ],
        solution: '$\\frac{52-50}{50} \\cdot 100\\,\\% = 4\\,\\%$. Avkortet y-akse far det til a se storre ut.',
      },
    },
    {
      id: '2p-3-5-ex-4', type: 'exercise', exercise: {
        id: '2p-3-5-ex-4', number: '4', type: 'classic',
        task: '"Er du ikke enig i at skolen bor ha lengre friminutt?" Forklar hvorfor dette er darlig, og skriv om det.',
        solution: 'Ledende sporsmal: "er du ikke enig" antyder hva man bor svare. Bedre: "Hva mener du om lengden pa friminuttene?" med balanserte svaralternativer.',
      },
    },
    {
      id: '2p-3-5-ex-5', type: 'exercise', exercise: {
        id: '2p-3-5-ex-5', number: '5', type: 'multiple-choice',
        task: 'Beste mate a velge deltakere til undersokelse om treningsvaner i en kommune?',
        options: [
          { id: 'a', text: 'Tilfeldig utvalg fra folkeregisteret', isCorrect: true },
          { id: 'b', text: 'Sporre folk pa et treningssenter', isCorrect: false },
          { id: 'c', text: 'Legge ut pa Facebook', isCorrect: false },
          { id: 'd', text: 'Sporre naboene dine', isCorrect: false },
        ],
        solution: 'Tilfeldig utvalg fra folkeregisteret er representativt. De andre gir systematisk skjevhet.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Tilfeldig feil', definition: 'Naturlig variasjon som minsker med storre utvalg.' },
    { term: 'Systematisk feil', definition: 'Skjevhet som trekker resultater i en retning.' },
    { term: 'Selvseleksjon', definition: 'Deltakerne velger selv a delta, gir skjevt utvalg.' },
    { term: 'Ledende sporsmal', definition: 'Sporsmal formulert slik at det antyder et bestemt svar.' },
  ],
};

// ============================================================================
// Kapittel 4.4: Betinget sannsynlighet
// ============================================================================
export const CHAPTER_2P_4_4: TextbookChapter = {
  id: '2p-4-4',
  courseId: '2p',
  chapterNumber: '4.4',
  title: 'Betinget sannsynlighet',
  description: 'Beregne sannsynlighet nar utfallet avhenger av tidligere hendelser.',
  estimatedMinutes: 45,
  competenceGoals: ['berekne sannsyn ved hjelp av systematiske oppteljingar og bruke addisjonsprinsippet og multiplikasjonsprinsippet'],
  content: [
    {
      id: '2p-4-4-intro', type: 'text',
      content: `## Betinget sannsynlighet\n\nNoen ganger avhenger sannsynligheten for en hendelse av hva som allerede har skjedd. Trekker du et kort uten a legge det tilbake, endres sannsynlighetene.\n\nI dette kapittelet larer du:\n- Hva betinget sannsynlighet betyr\n- Multiplikasjonsprinsippet for avhengige hendelser\n- Valgtre for betingede situasjoner`,
    },
    {
      id: '2p-4-4-def-betinget', type: 'definition', title: 'Betinget sannsynlighet',
      content: `**Betinget sannsynlighet** $P(B | A)$ er sannsynligheten for $B$ gitt at $A$ har inntruffet:\n$$P(B | A) = \\frac{P(A \\cap B)}{P(A)}$$\n\n**Multiplikasjonsprinsippet:** $P(A \\cap B) = P(A) \\cdot P(B | A)$\n\nHvis $A$ og $B$ er **uavhengige**: $P(A \\cap B) = P(A) \\cdot P(B)$.`,
    },
    {
      id: '2p-4-4-example-1', type: 'example', title: 'Trekke kuler uten tilbakelegging',
      problem: '4 rode og 6 bla kuler. Du trekker to uten tilbakelegging. Sannsynlighet for at begge er rode?',
      solution: `$P(R_1) = \\frac{4}{10}$. Gitt rod forst: $P(R_2|R_1) = \\frac{3}{9}$.\n$P = \\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15} \\approx 13{,}3\\,\\%$.`,
    },
    {
      id: '2p-4-4-tip-1', type: 'tip', title: 'Valgtre',
      content: `Tegn forste trekk med grener, og fra hver gren neste trekk med oppdaterte sannsynligheter. Multipliser langs grenene, adder for ulike veier til samme utfall.`,
    },
    {
      id: '2p-4-4-ex-1', type: 'exercise', exercise: {
        id: '2p-4-4-ex-1', number: '1', type: 'multiple-choice',
        task: '5 gronne og 3 gule kuler. Trekker to uten tilbakelegging. Sannsynlighet for at begge er gronne?',
        options: [
          { id: 'a', text: '$\\frac{5}{14}$', isCorrect: true },
          { id: 'b', text: '$\\frac{25}{64}$', isCorrect: false },
          { id: 'c', text: '$\\frac{5}{8}$', isCorrect: false },
          { id: 'd', text: '$\\frac{10}{56}$', isCorrect: false },
        ],
        solution: '$P = \\frac{5}{8} \\cdot \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14}$.',
      },
    },
    {
      id: '2p-4-4-ex-2', type: 'exercise', exercise: {
        id: '2p-4-4-ex-2', number: '2', type: 'classic',
        task: 'Klasse med 15 jenter og 13 gutter. To trekkes tilfeldig. Sannsynlighet for at begge er jenter?',
        solution: '$P = \\frac{15}{28} \\cdot \\frac{14}{27} = \\frac{210}{756} = \\frac{5}{18} \\approx 27{,}8\\,\\%$.',
      },
    },
    {
      id: '2p-4-4-ex-3', type: 'exercise', exercise: {
        id: '2p-4-4-ex-3', number: '3', type: 'multiple-choice',
        task: '3 epler og 2 paerer. Trekker to uten tilbakelegging. Sannsynlighet for ett eple og en paere?',
        options: [
          { id: 'a', text: '$\\frac{3}{5}$', isCorrect: true },
          { id: 'b', text: '$\\frac{6}{25}$', isCorrect: false },
          { id: 'c', text: '$\\frac{6}{20}$', isCorrect: false },
          { id: 'd', text: '$\\frac{1}{5}$', isCorrect: false },
        ],
        solution: 'Eple forst: $\\frac{3}{5} \\cdot \\frac{2}{4}$. Paere forst: $\\frac{2}{5} \\cdot \\frac{3}{4}$. Totalt: $\\frac{6}{20}+\\frac{6}{20} = \\frac{3}{5}$.',
      },
    },
    {
      id: '2p-4-4-ex-4', type: 'exercise', exercise: {
        id: '2p-4-4-ex-4', number: '4', type: 'classic',
        task: '70 % sjanse for regn mandag, 40 % tirsdag (uavhengig). Sannsynlighet for regn begge dager?',
        solution: 'Uavhengige: $P = 0{,}70 \\cdot 0{,}40 = 0{,}28 = 28\\,\\%$.',
      },
    },
    {
      id: '2p-4-4-ex-5', type: 'exercise', exercise: {
        id: '2p-4-4-ex-5', number: '5', type: 'classic',
        task: '2 % defekte produkter. Trekker 2 fra stort parti. Sannsynlighet for minst ett defekt?',
        solution: '$P(\\text{ingen}) = 0{,}98^2 = 0{,}9604$. $P(\\text{minst 1}) = 1 - 0{,}9604 = 0{,}0396 \\approx 4{,}0\\,\\%$.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Betinget sannsynlighet', definition: 'Sannsynligheten for en hendelse gitt at en annen har inntruffet.' },
    { term: 'Uavhengige hendelser', definition: 'Utfallet av den ene pavirker ikke den andre.' },
    { term: 'Multiplikasjonsprinsippet', definition: 'P(A og B) = P(A) * P(B|A).' },
    { term: 'Uten tilbakelegging', definition: 'Trukne objekter legges ikke tilbake, endrer sannsynlighetene.' },
  ],
};

// ============================================================================
// Kapittel 5.3: Trigonometri i praksis
// ============================================================================
export const CHAPTER_2P_5_3: TextbookChapter = {
  id: '2p-5-3',
  courseId: '2p',
  chapterNumber: '5.3',
  title: 'Trigonometri i praksis',
  description: 'Bruke sinus, cosinus og tangens til a lose praktiske oppgaver med rettvinklede trekanter.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og forklare hvordan formlikhet, malestokk og egenskaper ved geometriske figurer kan brukes i beregninger og i praktisk arbeid'],
  content: [
    {
      id: '2p-5-3-intro', type: 'text',
      content: `## Trigonometri i praksis\n\nTrigonometri lar oss beregne ukjente sider og vinkler i trekanter. Det brukes nar vi skal finne hoyden pa et tre, helningen pa en vei, eller avstanden til et punkt.\n\nI dette kapittelet larer du:\n- Sinus, cosinus og tangens\n- Beregne ukjente sider og vinkler\n- Lose praktiske problemer`,
    },
    {
      id: '2p-5-3-def-trig', type: 'definition', title: 'Trigonometriske forhold',
      content: `I en rettvinklet trekant med spiss vinkel $v$:\n$$\\sin v = \\frac{\\text{motstaaende katet}}{\\text{hypotenus}}, \\quad \\cos v = \\frac{\\text{hosliggende katet}}{\\text{hypotenus}}, \\quad \\tan v = \\frac{\\text{motstaaende katet}}{\\text{hosliggende katet}}$$`,
    },
    {
      id: '2p-5-3-example-1', type: 'example', title: 'Hoyden pa et tre',
      problem: 'Du star 12 m fra et tre. Vinkelen opp til toppen er $35°$. Hvor hoyt er treet?',
      solution: `$\\tan 35° = \\frac{h}{12}$ gir $h = 12 \\cdot \\tan 35° = 12 \\cdot 0{,}700 \\approx 8{,}4$ m.`,
    },
    {
      id: '2p-5-3-ex-1', type: 'exercise', exercise: {
        id: '2p-5-3-ex-1', number: '1', type: 'multiple-choice',
        task: 'En stige er 5 m lang og star med 70° vinkel mot bakken. Hvor hoyt opp rekker den?',
        options: [
          { id: 'a', text: 'Ca. $4{,}7$ m', isCorrect: true },
          { id: 'b', text: 'Ca. $1{,}7$ m', isCorrect: false },
          { id: 'c', text: 'Ca. $3{,}5$ m', isCorrect: false },
          { id: 'd', text: 'Ca. $5{,}3$ m', isCorrect: false },
        ],
        solution: '$h = 5 \\cdot \\sin 70° = 5 \\cdot 0{,}940 \\approx 4{,}7$ m.',
      },
    },
    {
      id: '2p-5-3-ex-2', type: 'exercise', exercise: {
        id: '2p-5-3-ex-2', number: '2', type: 'classic',
        task: 'En rullestolrampe er 6 m lang og stiger 0,5 m. Finn helningsvinkelen.',
        solution: '$\\sin v = \\frac{0{,}5}{6} \\approx 0{,}0833$. $v = \\sin^{-1}(0{,}0833) \\approx 4{,}8°$.',
      },
    },
    {
      id: '2p-5-3-ex-3', type: 'exercise', exercise: {
        id: '2p-5-3-ex-3', number: '3', type: 'multiple-choice',
        task: 'En vei har 8 % stigning. Hva er helningsvinkelen?',
        options: [
          { id: 'a', text: 'Ca. $4{,}6°$', isCorrect: true },
          { id: 'b', text: '$8°$', isCorrect: false },
          { id: 'c', text: 'Ca. $80°$', isCorrect: false },
          { id: 'd', text: 'Ca. $0{,}8°$', isCorrect: false },
        ],
        solution: '8 % stigning: stiger 8 m per 100 m. $\\tan v = 0{,}08$, $v \\approx 4{,}6°$.',
      },
    },
    {
      id: '2p-5-3-ex-4', type: 'exercise', exercise: {
        id: '2p-5-3-ex-4', number: '4', type: 'classic',
        task: 'Fra toppen av et 25 m hoyt fyrtarn ser du en bat med nedsynsvinkel $12°$. Avstand fra foten?',
        solution: '$\\tan 12° = \\frac{25}{d}$, sa $d = \\frac{25}{\\tan 12°} \\approx 118$ m.',
      },
    },
    {
      id: '2p-5-3-ex-5', type: 'exercise', exercise: {
        id: '2p-5-3-ex-5', number: '5', type: 'classic',
        task: 'Et rom er 4 m bredt og 3 m langt. Finn diagonalen og vinkelen den danner med den lengste veggen.',
        solution: '$d = \\sqrt{4^2 + 3^2} = 5$ m. $\\tan v = \\frac{3}{4}$, sa $v \\approx 36{,}9°$.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sinus', definition: 'Motstaaende katet delt pa hypotenuse.' },
    { term: 'Cosinus', definition: 'Hosliggende katet delt pa hypotenuse.' },
    { term: 'Tangens', definition: 'Motstaaende delt pa hosliggende katet.' },
    { term: 'Helningsvinkel', definition: 'Vinkelen en flate danner med horisontalplanet.' },
  ],
};

// ============================================================================
// Kapittel 5.4: Vektorer og retninger
// ============================================================================
export const CHAPTER_2P_5_4: TextbookChapter = {
  id: '2p-5-4',
  courseId: '2p',
  chapterNumber: '5.4',
  title: 'Vektorer og retninger',
  description: 'Bruke vektorer til a beskrive retning og avstand i praktiske situasjoner.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og forklare hvordan formlikhet, malestokk og egenskaper ved geometriske figurer kan brukes i beregninger og i praktisk arbeid'],
  content: [
    {
      id: '2p-5-4-intro', type: 'text',
      content: `## Vektorer og retninger\n\nEn vektor beskriver bade storrelse og retning. Vektorer brukes i navigasjon, fysikk og hverdagslige situasjoner.\n\nI dette kapittelet larer du:\n- Hva en vektor er\n- Tegne og addere vektorer\n- Lose praktiske problemer med retning og avstand`,
    },
    {
      id: '2p-5-4-def-vektor', type: 'definition', title: 'Vektor',
      content: `En **vektor** har bade **retning** og **lengde**. Skrives $\\vec{v} = [a, b]$.\n\n**Lengde:** $|\\vec{v}| = \\sqrt{a^2 + b^2}$\n\n**Addisjon:** $\\vec{u} + \\vec{v} = [u_1 + v_1,\\, u_2 + v_2]$`,
    },
    {
      id: '2p-5-4-example-1', type: 'example', title: 'Bat i skaergarden',
      problem: 'En bat seiler 3 km ost og 4 km nord, deretter 2 km ost og 1 km sor. Avstand fra start?',
      solution: `$\\vec{v} = [3+2,\\, 4-1] = [5, 3]$. Avstand: $\\sqrt{25+9} = \\sqrt{34} \\approx 5{,}8$ km. Retning: $\\tan^{-1}(3/5) \\approx 31°$ nord for ost.`,
    },
    {
      id: '2p-5-4-ex-1', type: 'exercise', exercise: {
        id: '2p-5-4-ex-1', number: '1', type: 'multiple-choice',
        task: 'Hva er lengden av $\\vec{v} = [6, 8]$?',
        options: [
          { id: 'a', text: '$10$', isCorrect: true },
          { id: 'b', text: '$14$', isCorrect: false },
          { id: 'c', text: '$\\sqrt{48}$', isCorrect: false },
          { id: 'd', text: '$7$', isCorrect: false },
        ],
        solution: '$\\sqrt{36 + 64} = \\sqrt{100} = 10$.',
      },
    },
    {
      id: '2p-5-4-ex-2', type: 'exercise', exercise: {
        id: '2p-5-4-ex-2', number: '2', type: 'classic',
        task: 'En person gar 200 m nord, deretter 150 m ost. Avstand fra startpunktet i rett linje?',
        solution: '$\\sqrt{150^2 + 200^2} = \\sqrt{62500} = 250$ m.',
      },
    },
    {
      id: '2p-5-4-ex-3', type: 'exercise', exercise: {
        id: '2p-5-4-ex-3', number: '3', type: 'multiple-choice',
        task: '$\\vec{u} = [3, 1]$ og $\\vec{v} = [-1, 4]$. Hva er $\\vec{u} + \\vec{v}$?',
        options: [
          { id: 'a', text: '$[2, 5]$', isCorrect: true },
          { id: 'b', text: '$[4, 5]$', isCorrect: false },
          { id: 'c', text: '$[2, 3]$', isCorrect: false },
          { id: 'd', text: '$[-3, 4]$', isCorrect: false },
        ],
        solution: '$[3+(-1),\\, 1+4] = [2, 5]$.',
      },
    },
    {
      id: '2p-5-4-ex-4', type: 'exercise', exercise: {
        id: '2p-5-4-ex-4', number: '4', type: 'classic',
        task: 'Drone flyr 500 m ost og 300 m nord. Finn retning fra start (vinkel fra ost mot nord).',
        solution: '$\\tan v = \\frac{300}{500} = 0{,}6$, sa $v \\approx 31°$ nord for ost.',
      },
    },
    {
      id: '2p-5-4-ex-5', type: 'exercise', exercise: {
        id: '2p-5-4-ex-5', number: '5', type: 'classic',
        task: 'Bat seiler 10 km/t mot nord, strom 3 km/t mot ost. Finn faktisk fart og retning.',
        solution: '$|\\vec{v}| = \\sqrt{9+100} = \\sqrt{109} \\approx 10{,}4$ km/t. $\\tan v = 3/10$, retning ca. $16{,}7°$ ost for nord.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vektor', definition: 'Storrelse med bade retning og lengde.' },
    { term: 'Komponent', definition: 'Horisontal eller vertikal del av en vektor.' },
    { term: 'Resultantvektor', definition: 'Summen av to eller flere vektorer.' },
    { term: 'Vektoraddisjon', definition: 'Legge sammen vektorer komponent for komponent.' },
  ],
};

// ============================================================================
// Kapittel 6.3: Modellering med regresjon
// ============================================================================
export const CHAPTER_2P_6_3: TextbookChapter = {
  id: '2p-6-3',
  courseId: '2p',
  chapterNumber: '6.3',
  title: 'Modellering med regresjon',
  description: 'Bruke regresjon til a finne matematiske modeller som beskriver datasett.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke digitale verktøy til a analysere store datamengder, finne moenster og presentere funn'],
  content: [
    {
      id: '2p-6-3-intro', type: 'text',
      content: `## Modellering med regresjon\n\nRegresjon finner en matematisk funksjon som best beskriver sammenhengen i et datasett.\n\nI dette kapittelet larer du:\n- Lineær regresjon og $R^2$\n- Velge mellom lineær, kvadratisk og eksponentiell modell\n- Bruke modeller til forutsigelser`,
    },
    {
      id: '2p-6-3-def-regresjon', type: 'definition', title: 'Regresjon og R-kvadrat',
      content: `**Lineær regresjon:** $y = ax + b$\n**Kvadratisk:** $y = ax^2 + bx + c$\n**Eksponentiell:** $y = a \\cdot b^x$\n\n**$R^2$** (forklaringsgrad): Tall mellom 0 og 1. $R^2 > 0{,}9$ er svart god tilpasning, $R^2 < 0{,}5$ er darlig.`,
    },
    {
      id: '2p-6-3-example-1', type: 'example', title: 'Temperatur og issalg',
      problem: 'Regresjon gir $y = 7x - 67$ med $R^2 = 0{,}99$ for issalg vs. temperatur. Anslaa salg ved 22 °C.',
      solution: `$y = 7 \\cdot 22 - 67 = 87$. Modellen anslar ca. 87 is. $R^2 = 0{,}99$ viser svart god tilpasning.`,
    },
    {
      id: '2p-6-3-warning-1', type: 'warning', title: 'Ekstrapolering',
      content: `A bruke modellen langt utenfor dataintervallet er usikkert. Modellen ovenfor gir negativt salg under 10 °C. Bruk modellen bare nær dataintervallet.`,
    },
    {
      id: '2p-6-3-ex-1', type: 'exercise', exercise: {
        id: '2p-6-3-ex-1', number: '1', type: 'multiple-choice',
        task: 'En modell har $R^2 = 0{,}42$. Hva betyr dette?',
        options: [
          { id: 'a', text: 'Modellen forklarer 42 % av variasjonen', isCorrect: true },
          { id: 'b', text: 'Modellen er 42 % riktig', isCorrect: false },
          { id: 'c', text: '42 % av punktene ligger pa linjen', isCorrect: false },
          { id: 'd', text: 'Stigningstallet er 0,42', isCorrect: false },
        ],
        solution: '$R^2 = 0{,}42$: modellen forklarer 42 % av variasjonen. Ganske darlig tilpasning.',
      },
    },
    {
      id: '2p-6-3-ex-2', type: 'exercise', exercise: {
        id: '2p-6-3-ex-2', number: '2', type: 'classic',
        task: 'Modell: $y = 5{,}2x + 32$ (oving vs. provepoeng). Poeng for 6 timer oving?',
        solution: '$y = 5{,}2 \\cdot 6 + 32 = 63{,}2$ poeng.',
      },
    },
    {
      id: '2p-6-3-ex-3', type: 'exercise', exercise: {
        id: '2p-6-3-ex-3', number: '3', type: 'multiple-choice',
        task: 'En populasjon dobles hvert 5. ar. Hvilken regresjonstype passer best?',
        options: [
          { id: 'a', text: 'Eksponentiell', isCorrect: true },
          { id: 'b', text: 'Lineær', isCorrect: false },
          { id: 'c', text: 'Kvadratisk', isCorrect: false },
          { id: 'd', text: 'Ingen', isCorrect: false },
        ],
        solution: 'Dobling med jevne mellomrom = eksponentiell vekst: $y = a \\cdot b^x$.',
      },
    },
    {
      id: '2p-6-3-ex-4', type: 'exercise', exercise: {
        id: '2p-6-3-ex-4', number: '4', type: 'classic',
        task: 'Bakteriemodell: $y = 100 \\cdot 1{,}3^x$ (x i timer). Antall etter 5 timer?',
        solution: '$y = 100 \\cdot 1{,}3^5 \\approx 371$ bakterier.',
      },
    },
    {
      id: '2p-6-3-ex-5', type: 'exercise', exercise: {
        id: '2p-6-3-ex-5', number: '5', type: 'multiple-choice',
        task: 'Issalg-modellen $y = 7x - 67$ gir $y = -32$ for $x = 5$ °C. Hva forteller dette?',
        options: [
          { id: 'a', text: 'Modellen er upalitelig utenfor dataintervallet', isCorrect: true },
          { id: 'b', text: 'Kiosken skylder 32 is', isCorrect: false },
          { id: 'c', text: 'Modellen bor forkastes helt', isCorrect: false },
          { id: 'd', text: 'Kunder leverer tilbake is', isCorrect: false },
        ],
        solution: 'Negativt salg gir ikke mening. Typisk problem med ekstrapolering utenfor dataintervallet.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Regresjon', definition: 'Tilpasse en matematisk funksjon til et datasett.' },
    { term: 'R-kvadrat', definition: 'Forklaringsgrad, viser hvor godt modellen passer (0-1).' },
    { term: 'Ekstrapolering', definition: 'Bruke modellen utenfor dataintervallet. Usikkert.' },
    { term: 'Interpolering', definition: 'Bruke modellen innenfor dataintervallet.' },
  ],
};

// ============================================================================
// Kapittel 6.4: Kritisk vurdering av modeller
// ============================================================================
export const CHAPTER_2P_6_4: TextbookChapter = {
  id: '2p-6-4',
  courseId: '2p',
  chapterNumber: '6.4',
  title: 'Kritisk vurdering av modeller',
  description: 'Vurdere styrker og svakheter ved matematiske modeller og tolke resultater i kontekst.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere og argumentere for om statistiske framstillingar og konklusjonar er gyldige'],
  content: [
    {
      id: '2p-6-4-intro', type: 'text',
      content: `## Kritisk vurdering av modeller\n\nEn matematisk modell er alltid en forenkling. Noen modeller er nyttige, men ingen er perfekte.\n\nI dette kapittelet larer du:\n- Skille mellom modell og virkelighet\n- Vurdere gyldighetsomrade\n- Identifisere begrensninger\n- Sammenligne ulike modeller`,
    },
    {
      id: '2p-6-4-def-vurdering', type: 'definition', title: 'Modellvurdering',
      content: `**Gyldighetsomrade:** Intervallet der modellen gir fornuftige resultater.\n\n**Residualer:** $e_i = y_i - \\hat{y}_i$. Monster i residualene betyr darlig modell.\n\n**Korrelasjon er ikke aarsak:** At to storrelser folger hverandre betyr ikke arsakssammenheng.`,
    },
    {
      id: '2p-6-4-example-1', type: 'example', title: 'To modeller for befolkningsvekst',
      problem: '10 000 innbyggere i 2010, 12 500 i 2020. Lineær: $f(x) = 250x + 10000$. Eksponentiell: $g(x) = 10000 \\cdot 1{,}0225^x$. Sammenlign for 2030.',
      solution: `$x = 20$: Lineær gir $15\\,000$. Eksponentiell: $10000 \\cdot 1{,}0225^{20} \\approx 15\\,620$. Forskjell 620. Mer data trengs for a velge.`,
    },
    {
      id: '2p-6-4-note-1', type: 'note', title: 'Korrelasjon betyr ikke aarsak',
      content: `Issalg og drukningsulykker folger hverandre. Det betyr ikke at is forarsaker drukning. Begge pavirkes av varmt vaer. Vaer forsiktig med arsakskonklusjoner.`,
    },
    {
      id: '2p-6-4-ex-1', type: 'exercise', exercise: {
        id: '2p-6-4-ex-1', number: '1', type: 'multiple-choice',
        task: 'Modell: $y = -0{,}5x + 30$ kWh (stroemforbruk vs. temperatur). Nar er den urealistisk?',
        options: [
          { id: 'a', text: 'Over 60 °C, gir negativt forbruk', isCorrect: true },
          { id: 'b', text: 'Under 0 °C', isCorrect: false },
          { id: 'c', text: 'Alltid gyldig', isCorrect: false },
          { id: 'd', text: 'Mellom 10 og 20 °C', isCorrect: false },
        ],
        solution: 'For $x > 60$: $y < 0$, umulig. Gyldighetsomradet er begrenset.',
      },
    },
    {
      id: '2p-6-4-ex-2', type: 'exercise', exercise: {
        id: '2p-6-4-ex-2', number: '2', type: 'classic',
        task: 'Sterk korrelasjon mellom antall brannstasjoner og forbrytelser i byer. Forarsaker brannstasjoner kriminalitet?',
        solution: 'Nei. Storre byer har bade flere brannstasjoner og mer kriminalitet. Bakenforliggende faktor: befolkningsstaerrelse.',
      },
    },
    {
      id: '2p-6-4-ex-3', type: 'exercise', exercise: {
        id: '2p-6-4-ex-3', number: '3', type: 'multiple-choice',
        task: 'Lineær modell: $R^2 = 0{,}91$. Kvadratisk: $R^2 = 0{,}93$. Hvilken velge?',
        options: [
          { id: 'a', text: 'Lineær: liten forskjell, enklere er bedre', isCorrect: true },
          { id: 'b', text: 'Kvadratisk: hoyere $R^2$', isCorrect: false },
          { id: 'c', text: 'Ingen: $R^2$ bor være 1', isCorrect: false },
          { id: 'd', text: 'Umulig a velge', isCorrect: false },
        ],
        solution: 'Liten forskjell i $R^2$: velg enkleste modell (parsimoni). Kompleks modell kan overtilpasses.',
      },
    },
    {
      id: '2p-6-4-ex-4', type: 'exercise', exercise: {
        id: '2p-6-4-ex-4', number: '4', type: 'classic',
        task: 'Husleiemodell Oslo: $y = 850x + 3000$ kr/mnd ($x$ = kvm). Gi minst to begrensninger.',
        solution: '1) Tar ikke hensyn til beliggenhet. 2) $x = 0$ gir 3000 kr, urealistisk. 3) Neppe lineær for alle storrelser. 4) Kun gyldig innenfor dataintervallet.',
      },
    },
    {
      id: '2p-6-4-ex-5', type: 'exercise', exercise: {
        id: '2p-6-4-ex-5', number: '5', type: 'multiple-choice',
        task: 'Hva betyr det at residualer bor være tilfeldig spredt?',
        options: [
          { id: 'a', text: 'Ikke systematisk monster i avvikene', isCorrect: true },
          { id: 'b', text: 'Alle residualer bor være like', isCorrect: false },
          { id: 'c', text: 'Residualene bor være positive', isCorrect: false },
          { id: 'd', text: 'Residualene bor øke med $x$', isCorrect: false },
        ],
        solution: 'Monster i residualene betyr at modellen systematisk bommer. En annen modelltype kan passe bedre.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Gyldighetsomrade', definition: 'Intervallet der modellen gir fornuftige resultater.' },
    { term: 'Residual', definition: 'Forskjell mellom observert verdi og modellens beregning.' },
    { term: 'Korrelasjon vs. kausalitet', definition: 'Statistisk sammenheng betyr ikke arsakssammenheng.' },
    { term: 'Parsimoni', definition: 'Velg den enkleste modellen som forklarer dataene godt nok.' },
  ],
};

// ============================================================================
// Samlet eksport
// ============================================================================
export const MATEMATIKK_2P_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_2P_3_5, CHAPTER_2P_4_4, CHAPTER_2P_5_3,
  CHAPTER_2P_5_4, CHAPTER_2P_6_3, CHAPTER_2P_6_4,
];
