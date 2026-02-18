/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON
 * Kapittel 5.1: Vinkler og trekanter
 * Kapittel 5.2: Kongruens og formlikhet
 * Kapittel 5.3: Pytagoras' setning
 * Kapittel 5.4: Trigonometri i rettvinklede trekanter
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1 NARRATIV: Vinkler og trekanter
// ============================================================================

export const CHAPTER_1T_5_1_NARRATIV: TextbookChapter = {
  id: '1t-5-1-narrativ',
  courseId: '1t',
  chapterNumber: '5.1',
  title: 'Vinkler og trekanter',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om vinkler, trekanter og deres egenskaper – fra spisse og stumpe vinkler til vinkelsummen i en trekant og hva som skjer når parallelle linjer møter en kryssende linje.',
  estimatedMinutes: 25,
  competenceGoals: ['utforske geometriske egenskaper ved trekanter', 'beregne vinkler i geometriske figurer'],
  linkedChapterId: '1t-5-1',
  content: [    {
      id: '1t-5-1-n-intro',
      type: 'text',
      content: `## Når to linjer møtes

Tenk deg at du åpner en bok. Når boka er helt lukket, er det ingen åpning mellom sidene. Når du åpner den litt, dannes det en liten åpning – en **vinkel**. Jo mer du åpner boka, desto større blir vinkelen. Åpner du boka helt flat, er vinkelen 180 grader.

En vinkel oppstår altså når to linjer eller linjestykker møtes i et punkt. Vi måler vinkler i grader, og symbolet er °. I dette kapittelet skal vi utforske ulike typer vinkler, forstå hva som skjer med vinkler i trekanter, og lære hvordan parallelle linjer skaper spennende sammenhenger mellom vinkler. Alt dette er grunnlaget for geometrien du møter videre i 1T.`,
    },
    {
      id: '1t-5-1-n-section1',
      type: 'text',
      content: `## Vinkeltyper – fra spiss til refleks

La oss starte med å sortere vinkler etter størrelse. En **spiss vinkel** er en vinkel som er mindre enn 90°. Tenk på en delvis åpnet saks eller en knivspiss – det er en liten, skarp åpning. Når vinkelen er nøyaktig 90°, har vi en **rett vinkel**. Du kjenner den igjen fra hjørnene i et ark eller en dør. Den markeres ofte med et lite kvadrat i hjørnet.

Blir vinkelen større enn 90° men fortsatt under 180°, kaller vi den en **stump vinkel**. Tenk på klokken når den viser ti over to – vinkelen mellom viserne er stump. Når vinkelen er nøyaktig 180°, har vi en **rett linje** – de to sidene peker rett motsatt vei. Og dersom vinkelen er mellom 180° og 360°, kaller vi den en **refleks vinkel**. Den er sjeldnere i hverdagen, men dukker opp når vi snakker om rotasjoner.

To begreper er viktige å kjenne: **nærliggende vinkler** er to vinkler som ligger ved siden av hverandre og til sammen utgjør 180°. Dersom du vet at den ene er 65°, er den andre $180° - 65° = 115°$. **Toppvinkler** oppstår når to linjer krysser hverandre – de motstående vinklene er alltid like store. Hvis du tegner et kryss og den ene vinkelen er 40°, er toppvinkelen også 40°, mens de to nærliggende vinklene begge er 140°.`,
    },
    {
      id: '1t-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på vinkeltyper og vinkelegenskaper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-1-n-quiz1-q0',
            task: 'To vinkler er nærliggende. Den ene er 72°. Hvor stor er den andre?',
            options: [
              { id: 'a', text: '$72°$', isCorrect: false },
              { id: 'b', text: '$118°$', isCorrect: false },
              { id: 'c', text: '$108°$', isCorrect: true },
              { id: 'd', text: '$90°$', isCorrect: false },
            ],
            solution: 'Nærliggende vinkler er til sammen 180°. Dermed er den andre vinkelen $180° - 72° = 108°$.',
          },
          {
            id: '1t-5-1-n-quiz1-q1',
            task: 'Hvilken type vinkel er en vinkel på 135°?',
            options: [
              { id: 'a', text: 'Spiss vinkel', isCorrect: false },
              { id: 'b', text: 'Rett vinkel', isCorrect: false },
              { id: 'c', text: 'Stump vinkel', isCorrect: true },
              { id: 'd', text: 'Refleks vinkel', isCorrect: false },
            ],
            solution: 'En stump vinkel er mellom 90° og 180°. Siden 135° ligger i dette intervallet, er det en stump vinkel.',
          },
          {
            id: '1t-5-1-n-quiz1-q2',
            task: 'To linjer krysser hverandre. Én av vinklene er 40°. Hvor stor er toppvinkelen?',
            options: [
              { id: 'a', text: '$140°$', isCorrect: false },
              { id: 'b', text: '$40°$', isCorrect: true },
              { id: 'c', text: '$50°$', isCorrect: false },
              { id: 'd', text: '$80°$', isCorrect: false },
            ],
            solution: 'Toppvinkler er alltid like store. Når to linjer krysser hverandre, er de motstående vinklene like, så toppvinkelen er også $40°$.',
          },
          {
            id: '1t-5-1-n-quiz1-q3',
            task: 'To linjer krysser hverandre og danner en vinkel på 65°. Hva er de fire vinklene i krysset?',
            options: [
              { id: 'a', text: '$65°, 65°, 115°, 115°$', isCorrect: true },
              { id: 'b', text: '$65°, 90°, 115°, 90°$', isCorrect: false },
              { id: 'c', text: '$65°, 65°, 65°, 65°$', isCorrect: false },
              { id: 'd', text: '$65°, 25°, 65°, 25°$', isCorrect: false },
            ],
            solution: 'Toppvinkler er like store (begge 65°), og nærliggende vinkler summerer til 180°. Dermed er de nærliggende $180° - 65° = 115°$. De fire vinklene er $65°, 115°, 65°, 115°$.',
          },
        ],
      },
    },    {
      id: '1t-5-1-n-section2',
      type: 'text',
      content: `## Vinkelsummen i en trekant

Nå beveger vi oss fra enkeltvinkler til den mest kjente geometriske figuren: **trekanten**. En trekant har tre sider og tre vinkler, og det er en egenskap ved trekanter som er så grunnleggende at den nesten føles magisk: summen av de tre vinklene i en trekant er alltid nøyaktig **180°**. Uansett hvordan trekanten ser ut – lang og tynn, kort og bred, perfekt symmetrisk eller helt skjev – vinklene summerer seg alltid til 180°.

$$\\angle A + \\angle B + \\angle C = 180°$$

Denne regelen er utrolig nyttig. Kjenner du to av vinklene, kan du alltid finne den tredje. For eksempel: dersom to av vinklene i en trekant er 50° og 70°, finner vi den tredje slik: $50° + 70° + v = 180°$, som gir $v = 180° - 120° = 60°$.

Vinkelsummen gir oss også en måte å klassifisere trekanter etter vinklene deres. En **spissvinlet trekant** har bare spisse vinkler, altså alle tre er under 90°. En **rettvinklet trekant** har én vinkel som er nøyaktig 90° – resten av vinklene må da til sammen være 90°. Og en **stumpvinklet trekant** har én vinkel som er større enn 90°, noe som betyr at de to andre til sammen er mindre enn 90°.

Legg merke til at en trekant aldri kan ha mer enn én stump vinkel eller mer enn én rett vinkel. Hadde den hatt to vinkler på 90° eller mer, ville summen allerede overstige 180° – og det bryter regelen.`,
    },
    {
      id: '1t-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på vinkelsummen i trekanter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-1-n-quiz2-q0',
            task: 'En trekant har vinkler $x$, $2x$ og $3x$. Hva er $x$?',
            options: [
              { id: 'a', text: '$20°$', isCorrect: false },
              { id: 'b', text: '$45°$', isCorrect: false },
              { id: 'c', text: '$60°$', isCorrect: false },
              { id: 'd', text: '$30°$', isCorrect: true },
            ],
            solution: 'Vinkelsummen gir $x + 2x + 3x = 180°$, altså $6x = 180°$, som betyr $x = 30°$. Vinklene er da 30°, 60° og 90°.',
          },
          {
            id: '1t-5-1-n-quiz2-q1',
            task: 'To av vinklene i en trekant er 48° og 67°. Hva er den tredje vinkelen?',
            options: [
              { id: 'a', text: '$75°$', isCorrect: false },
              { id: 'b', text: '$65°$', isCorrect: true },
              { id: 'c', text: '$55°$', isCorrect: false },
              { id: 'd', text: '$85°$', isCorrect: false },
            ],
            solution: 'Vinkelsummen i en trekant er 180°. Den tredje vinkelen er $180° - 48° - 67° = 65°$.',
          },
          {
            id: '1t-5-1-n-quiz2-q2',
            task: 'En trekant har vinkler 30°, 60° og 90°. Hva slags trekant er dette?',
            options: [
              { id: 'a', text: 'Spissvinlet trekant', isCorrect: false },
              { id: 'b', text: 'Stumpvinklet trekant', isCorrect: false },
              { id: 'c', text: 'Rettvinklet trekant', isCorrect: true },
              { id: 'd', text: 'Likesidet trekant', isCorrect: false },
            ],
            solution: 'Trekanten har én vinkel på nøyaktig 90°, og det er definisjonen på en rettvinklet trekant.',
          },
          {
            id: '1t-5-1-n-quiz2-q3',
            task: 'Kan en trekant ha to vinkler som begge er 95°?',
            options: [
              { id: 'a', text: 'Ja, det gir en stumpvinklet trekant', isCorrect: false },
              { id: 'b', text: 'Ja, men bare i en likebeint trekant', isCorrect: false },
              { id: 'c', text: 'Nei, fordi summen $95° + 95° = 190°$ allerede overstiger $180°$', isCorrect: true },
              { id: 'd', text: 'Nei, fordi begge vinklene må være under 90°', isCorrect: false },
            ],
            solution: 'En trekant kan aldri ha to stumpe vinkler, fordi summen av to vinkler over 90° ville overstige 180°. Her er $95° + 95° = 190° > 180°$, og det er umulig.',
          },
          {
            id: '1t-5-1-n-quiz2-q4',
            task: 'En trekant har én vinkel på 120°. Hva kan vi si om de to andre vinklene?',
            options: [
              { id: 'a', text: 'De er begge 30°', isCorrect: false },
              { id: 'b', text: 'De summerer til 60°, og begge er spisse', isCorrect: true },
              { id: 'c', text: 'Den ene er 60° og den andre er rett', isCorrect: false },
              { id: 'd', text: 'De summerer til 120°', isCorrect: false },
            ],
            solution: 'De to andre vinklene summerer til $180° - 120° = 60°$. Siden begge må være positive og under 90°, er begge spisse vinkler.',
          },
        ],
      },
    },    {
      id: '1t-5-1-n-section3',
      type: 'text',
      content: `## Trekanttyper etter sider

Vi kan også sortere trekanter etter sidene deres, og her finnes det tre kategorier. En **likesidet trekant** har alle tre sidene like lange. Siden alle sidene er like, er også alle vinklene like – og fordi de tre like vinklene til sammen må være 180°, er hver vinkel nøyaktig 60°. Den likesidede trekanten er den mest symmetriske av alle trekanter.

En **likebeint trekant** har to sider som er like lange. De to vinklene som ligger overfor de like sidene – **grunnvinklene** – er også like store. Den tredje vinkelen kalles **toppvinkelen**. Dersom toppvinkelen er 40°, finner vi grunnvinklene ved å sette opp $40° + v + v = 180°$, altså $2v = 140°$, som gir $v = 70°$. Grunnvinklene er begge 70°.

Den siste kategorien er en **ulikesidet trekant**, der alle tre sidene har forskjellig lengde. Her er også alle tre vinklene forskjellige. Den lengste siden ligger alltid overfor den største vinkelen, og den korteste siden overfor den minste vinkelen.

Disse kategoriene kan kombineres med vinkelklassifiseringen. Du kan for eksempel ha en likebeint rettvinklet trekant – den har én vinkel på 90° og to vinkler på 45° (fordi grunnvinklene er like og sammen med 90° gir 180°). Eller en likesidet spissvinlet trekant, som altså har tre vinkler på 60°.`,
    },
    {
      id: '1t-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på trekanttyper etter sider:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-1-n-quiz3-q0',
            task: 'En likebeint trekant har en toppvinkel på 100°. Hvor store er grunnvinklene?',
            options: [
              { id: 'a', text: '$80°$ hver', isCorrect: false },
              { id: 'b', text: '$40°$ hver', isCorrect: true },
              { id: 'c', text: '$50°$ hver', isCorrect: false },
              { id: 'd', text: '$45°$ hver', isCorrect: false },
            ],
            solution: 'I en likebeint trekant er grunnvinklene like store. Vi har $100° + 2v = 180°$, altså $2v = 80°$, som gir $v = 40°$.',
          },
          {
            id: '1t-5-1-n-quiz3-q1',
            task: 'Alle vinklene i en likesidet trekant er:',
            options: [
              { id: 'a', text: '$90°$', isCorrect: false },
              { id: 'b', text: '$45°$', isCorrect: false },
              { id: 'c', text: '$60°$', isCorrect: true },
              { id: 'd', text: '$120°$', isCorrect: false },
            ],
            solution: 'En likesidet trekant har tre like sider, og dermed tre like vinkler. Siden vinkelsummen er 180°, er hver vinkel $\\frac{180°}{3} = 60°$.',
          },
          {
            id: '1t-5-1-n-quiz3-q2',
            task: 'I en trekant er den lengste siden alltid overfor:',
            options: [
              { id: 'a', text: 'Den minste vinkelen', isCorrect: false },
              { id: 'b', text: 'Den midterste vinkelen', isCorrect: false },
              { id: 'c', text: 'Den rette vinkelen', isCorrect: false },
              { id: 'd', text: 'Den største vinkelen', isCorrect: true },
            ],
            solution: 'I enhver trekant ligger den lengste siden overfor den største vinkelen, og den korteste siden overfor den minste vinkelen.',
          },
          {
            id: '1t-5-1-n-quiz3-q3',
            task: 'En likebeint rettvinklet trekant har vinkler:',
            options: [
              { id: 'a', text: '$60°, 60°, 60°$', isCorrect: false },
              { id: 'b', text: '$90°, 45°, 45°$', isCorrect: true },
              { id: 'c', text: '$90°, 60°, 30°$', isCorrect: false },
              { id: 'd', text: '$90°, 50°, 40°$', isCorrect: false },
            ],
            solution: 'En rettvinklet trekant har én vinkel på 90°. Likebeint betyr at de to andre vinklene (grunnvinklene) er like. Dermed er grunnvinklene $\\frac{180° - 90°}{2} = 45°$ hver.',
          },
        ],
      },
    },    {
      id: '1t-5-1-n-section4',
      type: 'text',
      content: `## Vinkler ved parallelle linjer

Nå skal vi se på noe virkelig elegant i geometrien. Tenk deg to parallelle linjer – for eksempel to jernbaneskinner som aldri møtes. Så kommer en tredje linje og krysser begge de parallelle linjene. Denne tredje linjen kaller vi en **transversal**.

Når transversalen krysser de to parallelle linjene, oppstår det åtte vinkler – fire ved hvert krysspunkt. Og her er det flotte: mange av disse vinklene er like store eller har en enkel sammenheng med hverandre.

**Samsvarende vinkler** er vinkler som ligger på samme side av transversalen og i samme posisjon ved hvert krysspunkt. Tenk på det som at den ene vinkelen er et «speilbilde i lengderetningen» av den andre. Når linjene er parallelle, er samsvarende vinkler alltid like store.

**Vekselvinkler** er vinkler som ligger på motsatt side av transversalen, mellom de to parallelle linjene. Også disse er like store når linjene er parallelle.

La oss ta et eksempel. Dersom en av vinklene ved det første krysspunktet er 70°, vet vi umiddelbart at toppvinkelen også er 70° og at de to nærliggende vinklene er $180° - 70° = 110°$. Ved det andre krysspunktet er samsvarende vinkler identiske, så vi finner igjen 70° og 110°. Alle åtte vinklene er altså enten 70° eller 110° – to verdier er nok til å bestemme alle åtte.`,
    },
    {
      id: '1t-5-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på vinkler ved parallelle linjer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-1-n-quiz4-q0',
            task: 'To parallelle linjer krysses av en transversal. En vinkel er 55°. Hva er den nærliggende vinkelen?',
            options: [
              { id: 'a', text: '$55°$', isCorrect: false },
              { id: 'b', text: '$135°$', isCorrect: false },
              { id: 'c', text: '$125°$', isCorrect: true },
              { id: 'd', text: '$110°$', isCorrect: false },
            ],
            solution: 'Nærliggende vinkler er supplementære og summerer til 180°. Altså er den nærliggende vinkelen $180° - 55° = 125°$.',
          },
          {
            id: '1t-5-1-n-quiz4-q1',
            task: 'To parallelle linjer krysses av en transversal. En vinkel ved det ene krysspunktet er 70°. Hva er den samsvarende vinkelen ved det andre krysspunktet?',
            options: [
              { id: 'a', text: '$110°$', isCorrect: false },
              { id: 'b', text: '$70°$', isCorrect: true },
              { id: 'c', text: '$140°$', isCorrect: false },
              { id: 'd', text: '$90°$', isCorrect: false },
            ],
            solution: 'Samsvarende vinkler ligger på samme side av transversalen og i samme posisjon ved hvert krysspunkt. Når linjene er parallelle, er samsvarende vinkler alltid like store, altså $70°$.',
          },
          {
            id: '1t-5-1-n-quiz4-q2',
            task: 'Hva er vekselvinkler?',
            options: [
              { id: 'a', text: 'Vinkler som ligger ved siden av hverandre', isCorrect: false },
              { id: 'b', text: 'Vinkler på motsatt side av transversalen, mellom de parallelle linjene', isCorrect: true },
              { id: 'c', text: 'Vinkler som til sammen er 360°', isCorrect: false },
              { id: 'd', text: 'Vinkler som er halvparten av hverandre', isCorrect: false },
            ],
            solution: 'Vekselvinkler ligger på motsatt side av transversalen, mellom de to parallelle linjene. Når linjene er parallelle, er vekselvinkler like store.',
          },
          {
            id: '1t-5-1-n-quiz4-q3',
            task: 'En transversal krysser to parallelle linjer. Én av de åtte vinklene er 130°. Hvor mange av de åtte vinklene er 130°?',
            options: [
              { id: 'a', text: '2', isCorrect: false },
              { id: 'b', text: '3', isCorrect: false },
              { id: 'c', text: '4', isCorrect: true },
              { id: 'd', text: '6', isCorrect: false },
            ],
            solution: 'Ved hvert krysspunkt er toppvinkelen lik (130°), og det finnes ett slikt par ved hvert av de to krysspunktene. Samsvarende vinkler er også like. Dermed er fire av de åtte vinklene 130° og de fire andre er $180° - 130° = 50°$.',
          },
        ],
      },
    },    {
      id: '1t-5-1-n-section5',
      type: 'text',
      content: `## Yttervinkler og sammensatte vinkelproblemer

Det finnes en svært nyttig egenskap til som er verdt å kjenne: **yttervinkelen** i en trekant. Dersom du forlenger én side av en trekant forbi et hjørne, dannes det en vinkel mellom denne forlengelsen og den andre siden. Denne yttervinkelen er lik summen av de to **ikke-nærliggende** indre vinklene.

Hvorfor? Tenk på det slik: den indre vinkelen og yttervinkelen er nærliggende og summerer til 180°. Samtidig vet vi at alle tre indre vinklene summerer til 180°. Dermed må yttervinkelen tilsvare summen av de to andre indre vinklene. Dersom de to ikke-nærliggende vinklene er 50° og 70°, er yttervinkelen $50° + 70° = 120°$.

Med verktøyene vi nå har – vinkelsummen i trekanter, nærliggende vinkler, toppvinkler, samsvarende vinkler, vekselvinkler og yttervinkler – kan du løse overraskende kompliserte problemer. Nøkkelen er å ta det steg for steg og bruke én egenskap om gangen.

For eksempel: i en likebeint trekant er toppvinkelen dobbelt så stor som grunnvinkelen. Da setter vi opp $2v + v + v = 180°$, altså $4v = 180°$, som gir $v = 45°$. Grunnvinklene er 45° og toppvinkelen er 90°. Trekanten er altså en likebeint rettvinklet trekant! Slike sammenhenger mellom algebra og geometri er en viktig del av 1T-pensumet.`,
    },
    {
      id: '1t-5-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-5-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på yttervinkler og sammensatte problemer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-1-n-quiz5-q0',
            task: 'En yttervinkel i en trekant er 140°. Den ene ikke-nærliggende indre vinkelen er 65°. Hva er den andre ikke-nærliggende indre vinkelen?',
            options: [
              { id: 'a', text: '$40°$', isCorrect: false },
              { id: 'b', text: '$75°$', isCorrect: true },
              { id: 'c', text: '$115°$', isCorrect: false },
              { id: 'd', text: '$65°$', isCorrect: false },
            ],
            solution: 'Yttervinkelen er summen av de to ikke-nærliggende indre vinklene: $140° = 65° + v$, altså $v = 140° - 65° = 75°$.',
          },
          {
            id: '1t-5-1-n-quiz5-q1',
            task: 'Hva er yttervinkelen i en trekant dersom de to ikke-nærliggende indre vinklene er 50° og 70°?',
            options: [
              { id: 'a', text: '$60°$', isCorrect: false },
              { id: 'b', text: '$130°$', isCorrect: false },
              { id: 'c', text: '$120°$', isCorrect: true },
              { id: 'd', text: '$110°$', isCorrect: false },
            ],
            solution: 'Yttervinkelen er lik summen av de to ikke-nærliggende indre vinklene: $50° + 70° = 120°$.',
          },
          {
            id: '1t-5-1-n-quiz5-q2',
            task: 'I en likebeint trekant er toppvinkelen dobbelt så stor som grunnvinkelen. Hva er toppvinkelen?',
            options: [
              { id: 'a', text: '$60°$', isCorrect: false },
              { id: 'b', text: '$120°$', isCorrect: false },
              { id: 'c', text: '$90°$', isCorrect: true },
              { id: 'd', text: '$72°$', isCorrect: false },
            ],
            solution: 'La grunnvinkelen være $v$. Toppvinkelen er $2v$. Vinkelsummen gir $2v + v + v = 180°$, altså $4v = 180°$ og $v = 45°$. Toppvinkelen er $2 \\cdot 45° = 90°$.',
          },
          {
            id: '1t-5-1-n-quiz5-q3',
            task: 'En yttervinkel og den nærliggende indre vinkelen summerer alltid til:',
            options: [
              { id: 'a', text: '$90°$', isCorrect: false },
              { id: 'b', text: '$360°$', isCorrect: false },
              { id: 'c', text: '$270°$', isCorrect: false },
              { id: 'd', text: '$180°$', isCorrect: true },
            ],
            solution: 'Yttervinkelen og den nærliggende indre vinkelen danner en rett linje og er dermed supplementære, altså summerer de til $180°$.',
          },
        ],
      },
    },    {
      id: '1t-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket vinkler og trekanter fra flere sider.

**Vinkeltyper** deles inn etter størrelse: en **spiss vinkel** er under 90°, en **rett vinkel** er nøyaktig 90°, en **stump vinkel** er mellom 90° og 180°, og en **refleks vinkel** er mellom 180° og 360°. Nærliggende vinkler summerer til 180°, og toppvinkler er alltid like store.

**Vinkelsummen** i en trekant er alltid 180°. Dette lar oss klassifisere trekanter som spissvinlete, rettvinklete eller stumpvinklete. Vi kan også dele trekanter inn etter sider: **likesidet** (tre like sider, alle vinkler 60°), **likebeint** (to like sider, to like grunnvinkler) eller **ulikesidet** (alle sider forskjellige).

Ved **parallelle linjer** som krysses av en transversal er samsvarende vinkler og vekselvinkler like store. En **yttervinkel** i en trekant er lik summen av de to ikke-nærliggende indre vinklene. Med disse verktøyene kan du løse selv sammensatte vinkelproblemer steg for steg.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2 NARRATIV: Kongruens og formlikhet
// ============================================================================

export const CHAPTER_1T_5_2_NARRATIV: TextbookChapter = {
  id: '1t-5-2-narrativ',
  courseId: '1t',
  chapterNumber: '5.2',
  title: 'Kongruens og formlikhet',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om kongruente og formlike figurer – fra identiske kopier til forstørrede versjoner, og hvordan målestokk binder kartet til virkeligheten.',
  estimatedMinutes: 30,
  competenceGoals: ['identifisere og anvende kongruens og formlikhet', 'bruke formlikhet til å beregne ukjente sidelengder'],
  linkedChapterId: '1t-5-2',
  content: [    {
      id: '1t-5-2-n-intro',
      type: 'text',
      content: `## Kopier og modeller

Har du noen gang lagt to puslespillbrikker oppå hverandre og oppdaget at de er helt identiske? Eller sett at et fotografi kan skrives ut i ulike størrelser – liten, medium, stor – men motivet ser alltid likt ut, bare i forskjellig skala?

I geometrien har vi presise ord for disse ideene. Når to figurer er helt identiske i både form og størrelse, kaller vi dem **kongruente**. Når de har samme form men forskjellig størrelse, kaller vi dem **formlike**. I dette kapittelet skal vi utforske begge begrepene og lære hvordan vi avgjør om figurer er kongruente eller formlike – og hvordan vi bruker det til å beregne ukjente mål.`,
    },
    {
      id: '1t-5-2-n-section1',
      type: 'text',
      content: `## Kongruens – identiske tvillinger

To figurer er **kongruente** dersom du kan legge den ene oppå den andre og de passer perfekt. De har nøyaktig like store sider og nøyaktig like store vinkler. Du kan speile, rotere eller forskyve den ene figuren – dersom de passer, er de kongruente.

For trekanter har vi heldigvis noen snarveier. Vi trenger ikke sjekke alle tre sider og alle tre vinkler – det finnes fire **kongruenssetninger** som lar oss nøye oss med mindre informasjon.

Den første er **SSS** (side-side-side): dersom alle tre sidene i én trekant er like lange som sidene i en annen trekant, er trekantene kongruente. Tenk på det som at sidene bestemmer hele formen – det finnes bare én måte å sette sammen tre gitte sidelengder til en trekant.

Den andre er **SAS** (side-vinkel-side): dersom to sider og vinkelen mellom dem er like i begge trekantene, er de kongruente. Det er viktig at vinkelen ligger *mellom* de to sidene.

Den tredje er **ASA** (vinkel-side-vinkel): dersom to vinkler og siden mellom dem er like, er trekantene kongruente. Og den fjerde er **SSA** (side-side-vinkel), men denne fungerer bare under visse betingelser og kan noen ganger gi to forskjellige trekanter.

La oss ta et eksempel. Trekant ABC har sidene 5 cm, 7 cm og 6 cm. Trekant DEF har sidene 5 cm, 7 cm og 6 cm. Alle tre sidene er parvis like, så etter SSS-setningen er trekantene kongruente.`,
    },
    {
      id: '1t-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kongruens:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-2-n-quiz1-q0',
            task: 'To trekanter har begge sider 4 cm og 5 cm, og vinkelen mellom disse sidene er 60° i begge. Hvilket kongruenskriterium viser at de er kongruente?',
            options: [
              { id: 'a', text: 'SSS', isCorrect: false },
              { id: 'b', text: 'ASA', isCorrect: false },
              { id: 'c', text: 'SAS', isCorrect: true },
              { id: 'd', text: 'De er ikke nødvendigvis kongruente', isCorrect: false },
            ],
            solution: 'Vi kjenner to sider og vinkelen mellom dem. Dette er SAS-kriteriet (side-vinkel-side), som bekrefter at trekantene er kongruente.',
          },
          {
            id: '1t-5-2-n-quiz1-q1',
            task: 'Hva betyr det at to figurer er kongruente?',
            options: [
              { id: 'a', text: 'De har samme form men forskjellig størrelse', isCorrect: false },
              { id: 'b', text: 'De har nøyaktig like store sider og vinkler', isCorrect: true },
              { id: 'c', text: 'De har like mange sider', isCorrect: false },
              { id: 'd', text: 'De har minst to like sider', isCorrect: false },
            ],
            solution: 'Kongruente figurer er identiske i form og størrelse. Man kan legge den ene oppå den andre og de passer perfekt – alle sider og alle vinkler er parvis like.',
          },
          {
            id: '1t-5-2-n-quiz1-q2',
            task: 'To trekanter har alle tre sidene like lange (5 cm, 7 cm, 9 cm). Hvilket kongruenskriterium gjelder?',
            options: [
              { id: 'a', text: 'SAS', isCorrect: false },
              { id: 'b', text: 'ASA', isCorrect: false },
              { id: 'c', text: 'SSA', isCorrect: false },
              { id: 'd', text: 'SSS', isCorrect: true },
            ],
            solution: 'Alle tre sidene i den ene trekanten er like lange som sidene i den andre. Dette er SSS-kriteriet (side-side-side).',
          },
          {
            id: '1t-5-2-n-quiz1-q3',
            task: 'Hvilket kongruenskriterium bruker to vinkler og siden mellom dem?',
            options: [
              { id: 'a', text: 'SSS', isCorrect: false },
              { id: 'b', text: 'SAS', isCorrect: false },
              { id: 'c', text: 'ASA', isCorrect: true },
              { id: 'd', text: 'SSA', isCorrect: false },
            ],
            solution: 'ASA (vinkel-side-vinkel) krever to vinkler og siden mellom dem. Dersom disse er like i begge trekantene, er de kongruente.',
          },
        ],
      },
    },    {
      id: '1t-5-2-n-section2',
      type: 'text',
      content: `## Formlikhet – samme form, ulik størrelse

Nå beveger vi oss fra identiske kopier til noe litt annerledes: **formlike figurer**. To figurer er formlike når de har nøyaktig samme form, men ikke nødvendigvis samme størrelse. Den ene er en forstørret eller forminsket versjon av den andre.

Hva betyr «samme form» i praksis? Det betyr at alle vinklene er like store, og at alle samsvarende sider har det samme **forholdstallet**. Dersom hver side i den store trekanten er dobbelt så lang som tilsvarende side i den lille, er forholdstallet 2 – vi kaller dette **forstørrelsesfaktoren** eller **skaleringsfaktoren**.

For å sjekke om to trekanter er formlike, har vi igjen noen praktiske kriterier. Det enkleste er **AA** (vinkel-vinkel): dersom to vinkler i den ene trekanten er like to vinkler i den andre, er trekantene formlike. Vi trenger bare to vinkler fordi den tredje automatisk følger av vinkelsummen. Deretter har vi **SSS** (forholdstall): dersom alle tre sidene har samme forholdstall, er trekantene formlike. Og til slutt **SAS** (forholdstall): dersom to sider har samme forholdstall og vinkelen mellom dem er lik, er de formlike.

La oss ta et eksempel. En trekant har sider 3 cm, 4 cm og 5 cm. En annen trekant har sider 6 cm, 8 cm og 10 cm. Vi sjekker forholdene: $\\frac{6}{3} = 2$, $\\frac{8}{4} = 2$, $\\frac{10}{5} = 2$. Alle forholdene er like, så trekantene er formlike med forstørrelsesfaktor 2.`,
    },
    {
      id: '1t-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på formlikhet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-2-n-quiz2-q0',
            task: 'Trekant 1 har sider 2, 3 og 4. Trekant 2 har sider 4, 6 og 8. Hva er forstørrelsesfaktoren?',
            options: [
              { id: 'a', text: '$3$', isCorrect: false },
              { id: 'b', text: '$2$', isCorrect: true },
              { id: 'c', text: '$4$', isCorrect: false },
              { id: 'd', text: 'De er ikke formlike', isCorrect: false },
            ],
            solution: 'Vi sjekker forholdene: $\\frac{4}{2} = 2$, $\\frac{6}{3} = 2$, $\\frac{8}{4} = 2$. Alle er 2, så trekantene er formlike med forstørrelsesfaktor 2.',
          },
          {
            id: '1t-5-2-n-quiz2-q1',
            task: 'Hva er forskjellen mellom kongruente og formlike figurer?',
            options: [
              { id: 'a', text: 'Kongruente har like vinkler, formlike har like sider', isCorrect: false },
              { id: 'b', text: 'Kongruente har same form og størrelse, formlike har same form men kan ha ulik størrelse', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'd', text: 'Formlike har like sider, kongruente har like vinkler', isCorrect: false },
            ],
            solution: 'Kongruente figurer er identiske i form og størrelse. Formlike figurer har samme form (like vinkler, proporsjonale sider) men kan ha forskjellig størrelse.',
          },
          {
            id: '1t-5-2-n-quiz2-q2',
            task: 'To trekanter har vinkler 40°, 60° og 80° henholdsvis 40°, 60° og 80°. Hva kan vi si om dem?',
            options: [
              { id: 'a', text: 'De er kongruente', isCorrect: false },
              { id: 'b', text: 'De er formlike', isCorrect: true },
              { id: 'c', text: 'De er verken kongruente eller formlike', isCorrect: false },
              { id: 'd', text: 'Vi trenger mer informasjon', isCorrect: false },
            ],
            solution: 'To vinkler er like (AA-kriteriet er oppfylt, og den tredje følger automatisk). Dermed er trekantene formlike. De kan være kongruente også, men vi vet det ikke uten å kjenne sidene.',
          },
          {
            id: '1t-5-2-n-quiz2-q3',
            task: 'Trekant 1 har sider 3, 5 og 7. Trekant 2 har sider 6, 10 og 15. Er de formlike?',
            options: [
              { id: 'a', text: 'Ja, med forstørrelsesfaktor 2', isCorrect: false },
              { id: 'b', text: 'Ja, med forstørrelsesfaktor 3', isCorrect: false },
              { id: 'c', text: 'Nei, forholdstallene er ikke like', isCorrect: true },
              { id: 'd', text: 'Ja, med forstørrelsesfaktor 2,5', isCorrect: false },
            ],
            solution: 'Vi sjekker forholdene: $\\frac{6}{3} = 2$, $\\frac{10}{5} = 2$, $\\frac{15}{7} \\approx 2{,}14$. Forholdstallene er ikke like, så trekantene er ikke formlike.',
          },
        ],
      },
    },    {
      id: '1t-5-2-n-section3',
      type: 'text',
      content: `## Finne ukjente sider med formlikhet

Den virkelige styrken til formlikhet viser seg når vi skal finne ukjente mål. Dersom vi vet at to trekanter er formlike og kjenner noen av sidene, kan vi bruke forstørrelsesfaktoren til å beregne resten.

Metoden er enkel: finn forstørrelsesfaktoren fra et par samsvarende sider du kjenner, og bruk den på den ukjente siden. La oss si at den lille trekanten har sider 3 cm, 4 cm og $x$ cm, mens den store har sider 9 cm, 12 cm og 18 cm. Vi finner faktoren: $\\frac{9}{3} = 3$, og $\\frac{12}{4} = 3$. Faktoren er 3, så $x \\cdot 3 = 18$, som gir $x = 6$ cm.

Formlikhet dukker opp overalt i praktiske situasjoner. Et klassisk eksempel er skyggemetoden: et tre kaster en skygge på 12 meter, og samtidig kaster en 2 meter høy stolpe en skygge på 3 meter. Solen skinner med samme vinkel på begge, så trekantene som dannes av objektet, skyggen og solstrålen er formlike. Forstørrelsesfaktoren er $\\frac{12}{3} = 4$, så treet er $2 \\cdot 4 = 8$ meter høyt.

Et annet eksempel: et foto er 10 cm bredt og 15 cm høyt. Du vil forstørre det slik at den lange siden blir 45 cm. Forstørrelsesfaktoren er $\\frac{45}{15} = 3$, så den korte siden blir $10 \\cdot 3 = 30$ cm. Formlikhet sikrer at fotoet ikke blir forvrengd.`,
    },
    {
      id: '1t-5-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på ukjente sider med formlikhet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-2-n-quiz3-q0',
            task: 'To formlike trekanter har forstørrelsesfaktor 3. Den lille trekanten har sider 4 cm, 5 cm og 7 cm. Hvor lang er den lengste siden i den store trekanten?',
            options: [
              { id: 'a', text: '$15$ cm', isCorrect: false },
              { id: 'b', text: '$12$ cm', isCorrect: false },
              { id: 'c', text: '$21$ cm', isCorrect: true },
              { id: 'd', text: '$10$ cm', isCorrect: false },
            ],
            solution: 'Den lengste siden i den lille trekanten er 7 cm. Med forstørrelsesfaktor 3 blir den lengste siden i den store trekanten $7 \\cdot 3 = 21$ cm.',
          },
          {
            id: '1t-5-2-n-quiz3-q1',
            task: 'Et tre kaster en skygge på 18 m. En stolpe på 1,5 m kaster en skygge på 3 m. Hvor høyt er treet?',
            options: [
              { id: 'a', text: '$6$ m', isCorrect: false },
              { id: 'b', text: '$12$ m', isCorrect: false },
              { id: 'c', text: '$9$ m', isCorrect: true },
              { id: 'd', text: '$36$ m', isCorrect: false },
            ],
            solution: 'Forstørrelsesfaktoren er $\\frac{18}{3} = 6$. Treets høyde er $1{,}5 \\cdot 6 = 9$ m.',
          },
          {
            id: '1t-5-2-n-quiz3-q2',
            task: 'To formlike trekanter: den lille har sider 5, 8 og $x$, den store har sider 15, 24 og 30. Hva er $x$?',
            options: [
              { id: 'a', text: '$12$', isCorrect: false },
              { id: 'b', text: '$10$', isCorrect: true },
              { id: 'c', text: '$15$', isCorrect: false },
              { id: 'd', text: '$8$', isCorrect: false },
            ],
            solution: 'Forstørrelsesfaktoren: $\\frac{15}{5} = 3$ og $\\frac{24}{8} = 3$. Dermed er $x \\cdot 3 = 30$, altså $x = 10$.',
          },
          {
            id: '1t-5-2-n-quiz3-q3',
            task: 'Et foto er 8 cm bredt og 12 cm høyt. Det skal forstørres slik at bredden blir 20 cm. Hvor høyt blir fotoet?',
            options: [
              { id: 'a', text: '$24$ cm', isCorrect: false },
              { id: 'b', text: '$30$ cm', isCorrect: true },
              { id: 'c', text: '$28$ cm', isCorrect: false },
              { id: 'd', text: '$32$ cm', isCorrect: false },
            ],
            solution: 'Forstørrelsesfaktoren for bredden er $\\frac{20}{8} = 2{,}5$. Formlikhet betyr at høyden forstørres med samme faktor: $12 \\cdot 2{,}5 = 30$ cm.',
          },
        ],
      },
    },    {
      id: '1t-5-2-n-section4',
      type: 'text',
      content: `## Målestokk – fra kart til virkelighet

**Målestokk** er egentlig bare et annet navn for forstørrelsesfaktoren mellom en tegning og virkeligheten. Når et kart har målestokk **1:50 000**, betyr det at 1 cm på kartet tilsvarer 50 000 cm i virkeligheten – altså 500 meter. Målestokk er formlikhet i praksis.

$$\\text{Målestokk} = \\frac{\\text{Avstand på kart}}{\\text{Virkelig avstand}}$$

La oss regne med det. Et kart har målestokk 1:50 000, og avstanden mellom to byer er 8 cm på kartet. Den virkelige avstanden er $8 \\cdot 50\\,000 = 400\\,000$ cm, som er 4 000 meter eller 4 km.

Det fungerer også andre veien. En arkitekt tegner et hus i målestokk 1:100. Huset er 12 meter høyt i virkeligheten. Hvor høyt er det på tegningen? Vi regner $12 \\text{ m} = 1200 \\text{ cm}$, og deler på 100: tegningen viser huset som 12 cm høyt.

Vi kan også finne målestokken. En modell av et hus er 20 cm høy, og det virkelige huset er 10 meter (1000 cm) høyt. Målestokken er $\\frac{20}{1000} = \\frac{1}{50}$, altså 1:50. Det viktige er å sørge for at begge målene er i samme enhet før du deler.`,
    },
    {
      id: '1t-5-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på målestokk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-2-n-quiz4-q0',
            task: 'Et kart har målestokk 1:25 000. Avstanden mellom to punkter er 6 cm på kartet. Hvor lang er den virkelige avstanden?',
            options: [
              { id: 'a', text: '$150$ m', isCorrect: false },
              { id: 'b', text: '$1{,}5$ km', isCorrect: true },
              { id: 'c', text: '$15$ km', isCorrect: false },
              { id: 'd', text: '$0{,}15$ km', isCorrect: false },
            ],
            solution: 'Virkelig avstand = $6 \\cdot 25\\,000 = 150\\,000$ cm $= 1\\,500$ m $= 1{,}5$ km.',
          },
          {
            id: '1t-5-2-n-quiz4-q1',
            task: 'Et kart har målestokk 1:50 000. Hva tilsvarer 1 cm på kartet i virkeligheten?',
            options: [
              { id: 'a', text: '$50$ m', isCorrect: false },
              { id: 'b', text: '$500$ m', isCorrect: true },
              { id: 'c', text: '$5$ km', isCorrect: false },
              { id: 'd', text: '$5000$ m', isCorrect: false },
            ],
            solution: '1 cm på kartet tilsvarer 50 000 cm i virkeligheten. $50\\,000$ cm $= 500$ m.',
          },
          {
            id: '1t-5-2-n-quiz4-q2',
            task: 'En arkitekt tegner et hus i målestokk 1:100. Huset er 15 m høyt. Hvor høyt er det på tegningen?',
            options: [
              { id: 'a', text: '$1{,}5$ cm', isCorrect: false },
              { id: 'b', text: '$15$ cm', isCorrect: true },
              { id: 'c', text: '$150$ cm', isCorrect: false },
              { id: 'd', text: '$0{,}15$ cm', isCorrect: false },
            ],
            solution: '$15$ m $= 1500$ cm. Med målestokk 1:100 blir det $\\frac{1500}{100} = 15$ cm på tegningen.',
          },
          {
            id: '1t-5-2-n-quiz4-q3',
            task: 'En modell av et tårn er 30 cm høy. Det virkelige tårnet er 60 m høyt. Hva er målestokken?',
            options: [
              { id: 'a', text: '$1:20$', isCorrect: false },
              { id: 'b', text: '$1:200$', isCorrect: true },
              { id: 'c', text: '$1:2000$', isCorrect: false },
              { id: 'd', text: '$1:2$', isCorrect: false },
            ],
            solution: '$60$ m $= 6000$ cm. Målestokken er $\\frac{30}{6000} = \\frac{1}{200}$, altså 1:200.',
          },
        ],
      },
    },    {
      id: '1t-5-2-n-section5',
      type: 'text',
      content: `## Areal ved formlikhet

Det er en viktig detalj om formlikhet som mange glemmer: arealet skalerer ikke med samme faktor som sidene. Dersom du dobler alle sidene i en trekant, dobles ikke arealet – det firedobles! Generelt gjelder det at dersom forstørrelsesfaktoren for sidene er $k$, så er forstørrelsesfaktoren for arealet $k^2$.

Hvorfor? Tenk på et kvadrat med side 2 cm – arealet er $4$ cm². Dobler vi siden til 4 cm, er arealet $16$ cm². Forholdet mellom arealene er $\\frac{16}{4} = 4 = 2^2$. Det samme prinsippet gjelder for alle formlike figurer.

La oss ta et eksempel med trekanter. To formlike trekanter har forstørrelsesfaktor 3. Den lille trekanten har areal 4 cm². Da er arealet til den store trekanten $4 \\cdot 3^2 = 4 \\cdot 9 = 36$ cm².

Og det fungerer også for å finne forstørrelsesfaktoren fra arealer. To formlike rektangler har arealer 6 cm² og 54 cm². Arealforholdet er $\\frac{54}{6} = 9$. Siden arealforholdet er $k^2$, er forstørrelsesfaktoren $k = \\sqrt{9} = 3$. Sidene i det store rektangelet er altså tre ganger så lange som i det lille.

Denne sammenhengen mellom sideskala og arealskala er nyttig i alt fra arkitektur til biologi – for eksempel forklarer den hvorfor små dyr har relativt større kroppsoverflate enn store dyr.`,
    },
    {
      id: '1t-5-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-5-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på areal ved formlikhet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-2-n-quiz5-q0',
            task: 'To formlike trekanter har forstørrelsesfaktor 4. Den lille har areal 5 cm². Hva er arealet til den store?',
            options: [
              { id: 'a', text: '$20$ cm²', isCorrect: false },
              { id: 'b', text: '$40$ cm²', isCorrect: false },
              { id: 'c', text: '$60$ cm²', isCorrect: false },
              { id: 'd', text: '$80$ cm²', isCorrect: true },
            ],
            solution: 'Arealforholdet er forstørrelsesfaktoren i andre: $4^2 = 16$. Arealet til den store trekanten er $5 \\cdot 16 = 80$ cm².',
          },
          {
            id: '1t-5-2-n-quiz5-q1',
            task: 'Du dobler alle sidene i et kvadrat. Hva skjer med arealet?',
            options: [
              { id: 'a', text: 'Det dobles', isCorrect: false },
              { id: 'b', text: 'Det tredobles', isCorrect: false },
              { id: 'c', text: 'Det firedobles', isCorrect: true },
              { id: 'd', text: 'Det åttedobles', isCorrect: false },
            ],
            solution: 'Arealforholdet er $k^2$ der $k$ er forstørrelsesfaktoren. Med $k = 2$ blir arealforholdet $2^2 = 4$. Arealet firedobles.',
          },
          {
            id: '1t-5-2-n-quiz5-q2',
            task: 'To formlike rektangler har arealer 8 cm² og 72 cm². Hva er forstørrelsesfaktoren for sidene?',
            options: [
              { id: 'a', text: '$9$', isCorrect: false },
              { id: 'b', text: '$3$', isCorrect: true },
              { id: 'c', text: '$4{,}5$', isCorrect: false },
              { id: 'd', text: '$6$', isCorrect: false },
            ],
            solution: 'Arealforholdet er $\\frac{72}{8} = 9$. Siden arealforholdet er $k^2$, er forstørrelsesfaktoren $k = \\sqrt{9} = 3$.',
          },
          {
            id: '1t-5-2-n-quiz5-q3',
            task: 'To formlike trekanter har forstørrelsesfaktor 5 for sidene. Den store trekanten har areal 200 cm². Hva er arealet til den lille?',
            options: [
              { id: 'a', text: '$40$ cm²', isCorrect: false },
              { id: 'b', text: '$8$ cm²', isCorrect: true },
              { id: 'c', text: '$10$ cm²', isCorrect: false },
              { id: 'd', text: '$25$ cm²', isCorrect: false },
            ],
            solution: 'Arealforholdet er $5^2 = 25$. Den lille trekantens areal er $\\frac{200}{25} = 8$ cm².',
          },
        ],
      },
    },    {
      id: '1t-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært å skille mellom identiske og skalerte figurer.

**Kongruente figurer** har nøyaktig samme form og størrelse. For trekanter bruker vi kongruenssetningene **SSS**, **SAS**, **ASA** og **SSA** til å avgjøre kongruens uten å måle alt.

**Formlike figurer** har samme form men ulik størrelse. Alle vinklene er like, og samsvarende sider har samme forholdstall – **forstørrelsesfaktoren**. Kriteriene **AA**, **SSS** (forholdstall) og **SAS** (forholdstall) brukes for trekanter. Formlikhet lar oss finne ukjente sider ved å bruke kjente forholdstall.

**Målestokk** er formlikhet mellom en tegning og virkeligheten: 1:50 000 betyr at 1 cm på kartet er 50 000 cm i virkeligheten. Husk at **arealet skalerer med kvadratet** av forstørrelsesfaktoren: dobler du sidene, firedobles arealet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3 NARRATIV: Pytagoras' setning
// ============================================================================

export const CHAPTER_1T_5_3_NARRATIV: TextbookChapter = {
  id: '1t-5-3-narrativ',
  courseId: '1t',
  chapterNumber: '5.3',
  title: 'Pytagoras\' setning',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om en av matematikkens mest berømte setninger – hvordan katetene og hypotenusen i en rettvinklet trekant henger sammen, og hvorfor dette er nyttig i alt fra stiger til TV-skjermer.',
  estimatedMinutes: 25,
  competenceGoals: ['bruke Pytagoras\' setning til å beregne sider i rettvinklede trekanter'],
  linkedChapterId: '1t-5-3',
  content: [    {
      id: '1t-5-3-n-intro',
      type: 'text',
      content: `## En setning som er over 2500 år gammel

For omtrent 2500 år siden oppdaget den greske matematikeren Pytagoras – eller kanskje noen av elevene hans – en sammenheng i rettvinklede trekanter som har endret matematikkens historie. Sammenhengen er enkel, vakker og utrolig nyttig: i enhver rettvinklet trekant er det et fast forhold mellom de tre sidene.

Denne sammenhengen brukes den dag i dag av ingeniører som bygger broer, snekkere som sjekker vinkler, og programmerere som beregner avstander. I dette kapittelet skal vi forstå hva Pytagoras' setning sier, øve på å bruke den, og se hvordan den dukker opp i overraskende mange praktiske situasjoner.`,
    },
    {
      id: '1t-5-3-n-section1',
      type: 'text',
      content: `## Kateter og hypotenus

Før vi kan forstå setningen, trenger vi noen begreper. I en **rettvinklet trekant** er én av vinklene nøyaktig 90°. De to sidene som danner denne rette vinkelen kalles **kateter**, og vi betegner dem gjerne med $a$ og $b$. Siden som ligger overfor den rette vinkelen – den lengste siden i trekanten – kalles **hypotenusen**, og vi betegner den med $c$.

Hypotenusen er alltid den lengste siden. Hvorfor? Fordi den ligger overfor den største vinkelen (90°), og i en trekant er den lengste siden alltid overfor den største vinkelen. Dette er en nyttig sjekk: dersom du beregner en side og den er lengre enn hypotenusen, vet du at noe har gått galt.

Nå kommer selve setningen. **Pytagoras' setning** sier at i en rettvinklet trekant gjelder:

$$a^2 + b^2 = c^2$$

Kvadratet av de to katetene lagt sammen er lik kvadratet av hypotenusen. For den klassiske 3-4-5-trekanten: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. Det stemmer!

Denne formelen kan omskrives avhengig av hva vi leter etter. Skal du finne hypotenusen, bruker du $c = \\sqrt{a^2 + b^2}$. Skal du finne en katet, bruker du $a = \\sqrt{c^2 - b^2}$.`,
    },
    {
      id: '1t-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på Pytagoras\' setning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-3-n-quiz1-q0',
            task: 'En rettvinklet trekant har kateter 6 og 8. Hva er hypotenusen?',
            options: [
              { id: 'a', text: '$14$', isCorrect: false },
              { id: 'b', text: '$10$', isCorrect: true },
              { id: 'c', text: '$\\sqrt{48}$', isCorrect: false },
              { id: 'd', text: '$12$', isCorrect: false },
            ],
            solution: 'Vi bruker $c = \\sqrt{a^2 + b^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$.',
          },
          {
            id: '1t-5-3-n-quiz1-q1',
            task: 'Hva er Pytagoras\' setning?',
            options: [
              { id: 'a', text: '$a + b = c$', isCorrect: false },
              { id: 'b', text: '$a^2 \\cdot b^2 = c^2$', isCorrect: false },
              { id: 'c', text: '$a^2 + b^2 = c^2$', isCorrect: true },
              { id: 'd', text: '$a^2 - b^2 = c^2$', isCorrect: false },
            ],
            solution: 'Pytagoras\' setning sier at $a^2 + b^2 = c^2$, der $a$ og $b$ er katetene og $c$ er hypotenusen i en rettvinklet trekant.',
          },
          {
            id: '1t-5-3-n-quiz1-q2',
            task: 'Hvilken side i en rettvinklet trekant er alltid den lengste?',
            options: [
              { id: 'a', text: 'Katet $a$', isCorrect: false },
              { id: 'b', text: 'Katet $b$', isCorrect: false },
              { id: 'c', text: 'Den siden som ligger nærmest den rette vinkelen', isCorrect: false },
              { id: 'd', text: 'Hypotenusen', isCorrect: true },
            ],
            solution: 'Hypotenusen ligger overfor den største vinkelen (90°) og er alltid den lengste siden i en rettvinklet trekant.',
          },
          {
            id: '1t-5-3-n-quiz1-q3',
            task: 'Hvordan finner du hypotenusen $c$ når katetene er $a$ og $b$?',
            options: [
              { id: 'a', text: '$c = a^2 + b^2$', isCorrect: false },
              { id: 'b', text: '$c = \\sqrt{a^2 + b^2}$', isCorrect: true },
              { id: 'c', text: '$c = \\sqrt{a^2 - b^2}$', isCorrect: false },
              { id: 'd', text: '$c = a + b$', isCorrect: false },
            ],
            solution: 'Fra $a^2 + b^2 = c^2$ tar vi kvadratroten på begge sider: $c = \\sqrt{a^2 + b^2}$.',
          },
        ],
      },
    },    {
      id: '1t-5-3-n-section2',
      type: 'text',
      content: `## Finne en ukjent katet

Å finne hypotenusen er det enkleste tilfellet. Men like ofte trenger vi å finne en ukjent katet. Da omformer vi setningen: dersom vi kjenner hypotenusen $c$ og den ene kateten $b$, finner vi den andre kateten med $a = \\sqrt{c^2 - b^2}$.

La oss ta et eksempel. En rettvinklet trekant har hypotenus 13 cm og én katet på 5 cm. Vi setter inn: $a = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$. Den andre kateten er 12 cm. Legg merke til at $(5, 12, 13)$ er et kjent **pytagoreisk trippel** – tre hele tall som oppfyller $a^2 + b^2 = c^2$.

Det er nyttig å kjenne de vanligste pytagoreiske triplene: $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$ og $(7, 24, 25)$. Alle multipler av et trippel er også et trippel: for eksempel er $(6, 8, 10)$ bare $(3, 4, 5)$ ganget med 2, og $(9, 12, 15)$ er $(3, 4, 5)$ ganget med 3.

Når du gjenkjenner et pytagoreisk trippel, kan du hoppe over hele utregningen og skrive svaret direkte. Det sparer tid og reduserer sjansen for regnefeil.`,
    },
    {
      id: '1t-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kateter og pytagoreiske tripler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-3-n-quiz2-q0',
            task: 'En rettvinklet trekant har hypotenus 25 og katet 7. Hva er den andre kateten?',
            options: [
              { id: 'a', text: '$18$', isCorrect: false },
              { id: 'b', text: '$\\sqrt{576}$', isCorrect: false },
              { id: 'c', text: '$26$', isCorrect: false },
              { id: 'd', text: '$24$', isCorrect: true },
            ],
            solution: 'Vi regner $a = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$. Vi kjenner igjen det pytagoreiske trippelet $(7, 24, 25)$.',
          },
          {
            id: '1t-5-3-n-quiz2-q1',
            task: 'En rettvinklet trekant har hypotenus 13 og katet 5. Hva er den andre kateten?',
            options: [
              { id: 'a', text: '$8$', isCorrect: false },
              { id: 'b', text: '$12$', isCorrect: true },
              { id: 'c', text: '$\\sqrt{194}$', isCorrect: false },
              { id: 'd', text: '$10$', isCorrect: false },
            ],
            solution: 'Vi regner $a = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$. $(5, 12, 13)$ er et kjent pytagoreisk trippel.',
          },
          {
            id: '1t-5-3-n-quiz2-q2',
            task: 'Hvilket av følgende er et pytagoreisk trippel?',
            options: [
              { id: 'a', text: '$(3, 5, 7)$', isCorrect: false },
              { id: 'b', text: '$(4, 6, 8)$', isCorrect: false },
              { id: 'c', text: '$(8, 15, 17)$', isCorrect: true },
              { id: 'd', text: '$(5, 10, 15)$', isCorrect: false },
            ],
            solution: 'Vi sjekker: $8^2 + 15^2 = 64 + 225 = 289 = 17^2$. Stemmer! De andre stemmer ikke, for eksempel $3^2 + 5^2 = 34 \\neq 49 = 7^2$.',
          },
          {
            id: '1t-5-3-n-quiz2-q3',
            task: 'Trippelet $(3, 4, 5)$ ganget med 4 gir:',
            options: [
              { id: 'a', text: '$(6, 8, 10)$', isCorrect: false },
              { id: 'b', text: '$(12, 16, 20)$', isCorrect: true },
              { id: 'c', text: '$(9, 12, 15)$', isCorrect: false },
              { id: 'd', text: '$(7, 8, 9)$', isCorrect: false },
            ],
            solution: 'Vi ganger hvert tall med 4: $(3 \\cdot 4, 4 \\cdot 4, 5 \\cdot 4) = (12, 16, 20)$. Sjekk: $12^2 + 16^2 = 144 + 256 = 400 = 20^2$.',
          },
        ],
      },
    },    {
      id: '1t-5-3-n-section3',
      type: 'text',
      content: `## Praktiske anvendelser

Pytagoras' setning er ikke bare teori – den løser ekte problemer. La oss se på noen klassikere.

**Stigen mot veggen.** En stige på 5 meter lener mot en vegg, og foten av stigen står 3 meter fra veggen. Stigen er hypotenusen, avstanden fra veggen er én katet, og høyden på veggen er den andre. Vi regner: $h = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$. Stigen når 4 meter opp på veggen. Vi kjenner igjen 3-4-5-trippelet.

**Diagonalen i et rektangel.** Et rektangel med sider 6 cm og 8 cm – hvor lang er diagonalen? Diagonalen deler rektangelet i to rettvinklede trekanter, der sidene er katetene og diagonalen er hypotenusen: $d = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm.

**Fotballbane.** En fotballbane er 100 m lang og 70 m bred. Diagonalen er $d = \\sqrt{100^2 + 70^2} = \\sqrt{10\\,000 + 4\\,900} = \\sqrt{14\\,900} \\approx 122{,}1$ m. Her får vi ikke et pent heltall, og det er helt normalt – de fleste praktiske problemer gir desimaltall.

Nøkkelen i alle disse oppgavene er å identifisere den rettvinklede trekanten i situasjonen og avgjøre hvilken side som er hypotenusen og hvilke som er katetene.`,
    },
    {
      id: '1t-5-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på praktiske anvendelser av Pytagoras:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-3-n-quiz3-q0',
            task: 'Diagonalen i et rektangel med sider 5 cm og 12 cm er:',
            options: [
              { id: 'a', text: '$17$ cm', isCorrect: false },
              { id: 'b', text: '$13$ cm', isCorrect: true },
              { id: 'c', text: '$\\sqrt{119}$ cm', isCorrect: false },
              { id: 'd', text: '$14$ cm', isCorrect: false },
            ],
            solution: 'Diagonalen er hypotenusen: $d = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm. Det pytagoreiske trippelet $(5, 12, 13)$ gir et pent svar.',
          },
          {
            id: '1t-5-3-n-quiz3-q1',
            task: 'En stige på 10 m lener mot en vegg og foten står 6 m fra veggen. Hvor høyt opp på veggen når stigen?',
            options: [
              { id: 'a', text: '$4$ m', isCorrect: false },
              { id: 'b', text: '$8$ m', isCorrect: true },
              { id: 'c', text: '$\\sqrt{136}$ m', isCorrect: false },
              { id: 'd', text: '$16$ m', isCorrect: false },
            ],
            solution: 'Stigen er hypotenusen (10 m), avstanden fra veggen er én katet (6 m). Høyden er $h = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$ m.',
          },
          {
            id: '1t-5-3-n-quiz3-q2',
            task: 'En fotballbane er 100 m lang og 60 m bred. Omtrent hvor lang er diagonalen?',
            options: [
              { id: 'a', text: '$160$ m', isCorrect: false },
              { id: 'b', text: '$\\approx 116{,}6$ m', isCorrect: true },
              { id: 'c', text: '$\\approx 130$ m', isCorrect: false },
              { id: 'd', text: '$80$ m', isCorrect: false },
            ],
            solution: '$d = \\sqrt{100^2 + 60^2} = \\sqrt{10\\,000 + 3\\,600} = \\sqrt{13\\,600} \\approx 116{,}6$ m.',
          },
          {
            id: '1t-5-3-n-quiz3-q3',
            task: 'I en Pytagoras-oppgave skal du identifisere den rettvinklede trekanten. Hva er det viktigste å finne først?',
            options: [
              { id: 'a', text: 'Den lengste kateten', isCorrect: false },
              { id: 'b', text: 'Alle tre vinklene', isCorrect: false },
              { id: 'c', text: 'Hvilken side som er hypotenusen og hvilke som er katetene', isCorrect: true },
              { id: 'd', text: 'Arealet av trekanten', isCorrect: false },
            ],
            solution: 'Nøkkelen er å identifisere hypotenusen (den lengste siden, overfor 90°-vinkelen) og katetene. Deretter kan du bruke riktig formel: $c = \\sqrt{a^2 + b^2}$ eller $a = \\sqrt{c^2 - b^2}$.',
          },
        ],
      },
    },    {
      id: '1t-5-3-n-section4',
      type: 'text',
      content: `## Den omvendte setningen

Pytagoras' setning har også en omvendt versjon som er like viktig. Den sier: dersom $a^2 + b^2 = c^2$ for de tre sidene i en trekant (der $c$ er den lengste), så er trekanten **rettvinklet** med den rette vinkelen overfor $c$.

Dette gir oss en måte å **sjekke om en trekant er rettvinklet** uten å måle vinkler. Vi tar de tre sidene, setter inn i formelen og ser om likheten stemmer.

La oss prøve: er en trekant med sider 9, 12 og 15 rettvinklet? Vi sjekker: $9^2 + 12^2 = 81 + 144 = 225$, og $15^2 = 225$. Det stemmer, altså er trekanten rettvinklet.

Hva med sider 4, 5 og 6? Vi sjekker: $4^2 + 5^2 = 16 + 25 = 41$, mens $6^2 = 36$. Siden $41 \\neq 36$, er trekanten **ikke** rettvinklet. Faktisk, fordi $41 > 36$ (summen av katetkvadratene er *større* enn det vi antar er hypotenusen i kvadrat), er trekanten spissvinlet. Dersom summen hadde vært *mindre*, ville trekanten vært stumpvinklet.

Denne omvendte setningen brukes i praksis av snekkere og bygningsarbeidere. For å sjekke at et hjørne er nøyaktig 90°, måler de 3 enheter langs den ene siden, 4 enheter langs den andre, og sjekker at diagonalen er nøyaktig 5 enheter. Stemmer det, er vinkelen rett.`,
    },
    {
      id: '1t-5-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på den omvendte setningen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-3-n-quiz4-q0',
            task: 'Er en trekant med sider 5, 12 og 13 rettvinklet?',
            options: [
              { id: 'a', text: 'Ja, fordi $5^2 + 12^2 = 13^2$', isCorrect: true },
              { id: 'b', text: 'Nei, fordi $5 + 12 \\neq 13^2$', isCorrect: false },
              { id: 'c', text: 'Nei, fordi ingen side er lik 90', isCorrect: false },
              { id: 'd', text: 'Ja, fordi $5 + 12 = 17 > 13$', isCorrect: false },
            ],
            solution: 'Vi sjekker: $5^2 + 12^2 = 25 + 144 = 169 = 13^2$. Likheten stemmer, så trekanten er rettvinklet.',
          },
          {
            id: '1t-5-3-n-quiz4-q1',
            task: 'En trekant har sider 6, 8 og 11. Er den rettvinklet?',
            options: [
              { id: 'a', text: 'Ja, fordi $6^2 + 8^2 = 11^2$', isCorrect: false },
              { id: 'b', text: 'Nei, fordi $6^2 + 8^2 = 100 \\neq 121 = 11^2$', isCorrect: true },
              { id: 'c', text: 'Ja, fordi den inneholder tallene 6 og 8', isCorrect: false },
              { id: 'd', text: 'Nei, fordi $6 + 8 > 11$', isCorrect: false },
            ],
            solution: 'Vi sjekker: $6^2 + 8^2 = 36 + 64 = 100$, mens $11^2 = 121$. Siden $100 \\neq 121$, er trekanten ikke rettvinklet.',
          },
          {
            id: '1t-5-3-n-quiz4-q2',
            task: 'Trekant med sider 4, 5 og 6: vi finner at $4^2 + 5^2 = 41 > 36 = 6^2$. Hva betyr dette?',
            options: [
              { id: 'a', text: 'Trekanten er rettvinklet', isCorrect: false },
              { id: 'b', text: 'Trekanten er stumpvinklet', isCorrect: false },
              { id: 'c', text: 'Trekanten er spissvinlet', isCorrect: true },
              { id: 'd', text: 'Trekanten eksisterer ikke', isCorrect: false },
            ],
            solution: 'Når $a^2 + b^2 > c^2$ (summen av katetkvadratene er større), er trekanten spissvinlet. Alle vinklene er under 90°.',
          },
          {
            id: '1t-5-3-n-quiz4-q3',
            task: 'En snekker måler 3 m langs én vegg, 4 m langs den andre, og sjekker diagonalen. Hvilken diagonal bekrefter en 90°-vinkel?',
            options: [
              { id: 'a', text: '$7$ m', isCorrect: false },
              { id: 'b', text: '$6$ m', isCorrect: false },
              { id: 'c', text: '$5$ m', isCorrect: true },
              { id: 'd', text: '$4{,}5$ m', isCorrect: false },
            ],
            solution: 'Dersom diagonalen er nøyaktig 5 m, stemmer det pytagoreiske trippelet $(3, 4, 5)$, og vinkelen er 90°. $3^2 + 4^2 = 9 + 16 = 25 = 5^2$.',
          },
        ],
      },
    },    {
      id: '1t-5-3-n-section5',
      type: 'text',
      content: `## Pytagoras i sammensatte figurer

Pytagoras' setning brukes ikke bare i enkle trekanter – den dukker opp i overraskende mange sammensatte figurer. Trikset er å identifisere rettvinklede trekanter inne i figuren.

**Høyden i en likesidet trekant.** Tenk deg en likesidet trekant med side 10 cm. Dersom du tegner høyden ned til grunnlinjen, deler den trekanten i to like rettvinklede trekanter. I hver av disse er hypotenusen 10 cm (en side av den likesidede trekanten), den ene kateten er 5 cm (halve grunnlinjen), og den andre kateten er høyden $h$. Vi regner: $h = \\sqrt{10^2 - 5^2} = \\sqrt{100 - 25} = \\sqrt{75} = 5\\sqrt{3} \\approx 8{,}66$ cm.

**TV-skjermer.** Skjermstørrelser oppgis i tommer diagonalt. En 55-tommers TV har en diagonal på 55 tommer. Dersom bredden er 48 tommer, kan vi finne høyden: $h = \\sqrt{55^2 - 48^2} = \\sqrt{3025 - 2304} = \\sqrt{721} \\approx 26{,}9$ tommer.

**Romdiagonaler.** Du kan til og med utvide Pytagoras til tre dimensjoner. Diagonalen i et rom med lengde $l$, bredde $b$ og høyde $h$ er $d = \\sqrt{l^2 + b^2 + h^2}$. Dersom rommet er 4 m langt, 3 m bredt og 2,5 m høyt, er romdiagonalen $\\sqrt{16 + 9 + 6{,}25} = \\sqrt{31{,}25} \\approx 5{,}59$ m. Dette er nyttig for å sjekke om et langt møbel passer gjennom rommet diagonalt.`,
    },
    {
      id: '1t-5-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-5-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på Pytagoras i sammensatte figurer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-3-n-quiz5-q0',
            task: 'Hva er høyden i en likesidet trekant med side 6 cm?',
            options: [
              { id: 'a', text: '$6$ cm', isCorrect: false },
              { id: 'b', text: '$3\\sqrt{2}$ cm', isCorrect: false },
              { id: 'c', text: '$3\\sqrt{3}$ cm', isCorrect: true },
              { id: 'd', text: '$\\sqrt{27}$ cm', isCorrect: false },
            ],
            solution: 'Høyden deler grunnlinjen i to, slik at katetene er 3 cm og $h$, med hypotenus 6 cm. $h = \\sqrt{6^2 - 3^2} = \\sqrt{36 - 9} = \\sqrt{27} = 3\\sqrt{3}$. Merk at $\\sqrt{27} = 3\\sqrt{3}$ fordi $27 = 9 \\cdot 3$.',
          },
          {
            id: '1t-5-3-n-quiz5-q1',
            task: 'Når du tegner høyden i en likesidet trekant med side $s$, hva er de to katetene i den rettvinklede trekanten som dannes?',
            options: [
              { id: 'a', text: '$s$ og $s$', isCorrect: false },
              { id: 'b', text: '$\\frac{s}{2}$ og $h$', isCorrect: true },
              { id: 'c', text: '$s$ og $h$', isCorrect: false },
              { id: 'd', text: '$\\frac{s}{3}$ og $h$', isCorrect: false },
            ],
            solution: 'Høyden deler grunnlinjen i to like deler. Katetene i den rettvinklede trekanten er halve grunnlinjen ($\\frac{s}{2}$) og høyden ($h$), mens hypotenusen er siden $s$.',
          },
          {
            id: '1t-5-3-n-quiz5-q2',
            task: 'En TV-skjerm har diagonal 50 tommer og bredde 40 tommer. Hva er høyden?',
            options: [
              { id: 'a', text: '$10$ tommer', isCorrect: false },
              { id: 'b', text: '$\\sqrt{900} = 30$ tommer', isCorrect: true },
              { id: 'c', text: '$\\sqrt{4100} \\approx 64$ tommer', isCorrect: false },
              { id: 'd', text: '$20$ tommer', isCorrect: false },
            ],
            solution: 'Diagonalen er hypotenusen: $h = \\sqrt{50^2 - 40^2} = \\sqrt{2500 - 1600} = \\sqrt{900} = 30$ tommer.',
          },
          {
            id: '1t-5-3-n-quiz5-q3',
            task: 'Romdiagonalen i et rom med lengde 3 m, bredde 4 m og høyde 12 m er:',
            options: [
              { id: 'a', text: '$19$ m', isCorrect: false },
              { id: 'b', text: '$\\sqrt{169} = 13$ m', isCorrect: true },
              { id: 'c', text: '$\\sqrt{160} \\approx 12{,}6$ m', isCorrect: false },
              { id: 'd', text: '$7$ m', isCorrect: false },
            ],
            solution: 'Romdiagonalen: $d = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$ m.',
          },
        ],
      },
    },    {
      id: '1t-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Pytagoras' setning** sier at i en rettvinklet trekant med kateter $a$ og $b$ og hypotenus $c$ gjelder $a^2 + b^2 = c^2$. Hypotenusen er alltid den lengste siden og ligger overfor den rette vinkelen.

Setningen brukes i tre situasjoner: finne **hypotenusen** ($c = \\sqrt{a^2 + b^2}$), finne en **katet** ($a = \\sqrt{c^2 - b^2}$), eller sjekke om en trekant er **rettvinklet** (den omvendte setningen).

**Pytagoreiske tripler** som $(3, 4, 5)$, $(5, 12, 13)$ og $(8, 15, 17)$ er heltallskombinasjoner som oppfyller setningen. Alle multipler av et trippel er også et trippel.

I praksis finner du Pytagoras overalt: stiger mot vegger, diagonaler i rektangler, høyder i likesidede trekanter, TV-skjermstørrelser og til og med romdiagonaler i tre dimensjoner. Nøkkelen er alltid å identifisere den rettvinklede trekanten i situasjonen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4 NARRATIV: Trigonometri i rettvinklede trekanter
// ============================================================================

export const CHAPTER_1T_5_4_NARRATIV: TextbookChapter = {
  id: '1t-5-4-narrativ',
  courseId: '1t',
  chapterNumber: '5.4',
  title: 'Trigonometri i rettvinklede trekanter',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om sinus, cosinus og tangens – hvordan vinkler og sider i rettvinklede trekanter henger sammen, og hvordan du bruker det til å beregne alt fra treets høyde til flyets bane.',
  estimatedMinutes: 30,
  competenceGoals: ['gjøre rede for definisjonene av sinus, cosinus og tangens'],
  linkedChapterId: '1t-5-4',
  content: [    {
      id: '1t-5-4-n-intro',
      type: 'text',
      content: `## Trekantmåling

Ordet **trigonometri** kommer fra gresk og betyr rett og slett «trekantmåling». Der Pytagoras' setning gir oss sammenhengen mellom sidene i en rettvinklet trekant, gir trigonometrien oss sammenhengen mellom **sidene og vinklene**.

Tenk deg at du vet at en vinkel i en rettvinklet trekant er 30° og at hypotenusen er 10 cm. Med Pytagoras alene kan du ikke finne de to katetene – du trenger å vite noe om vinkelen også. Det er her sinus, cosinus og tangens kommer inn. Disse tre funksjonene lar deg koble vinkler til sidelengder, og de er uunnværlige verktøy i alt fra navigasjon til byggeteknikk.`,
    },
    {
      id: '1t-5-4-n-section1',
      type: 'text',
      content: `## De tre sidene sett fra en vinkel

Før vi kan definere sinus, cosinus og tangens, må vi navngi sidene i en rettvinklet trekant i forhold til en bestemt vinkel. Velg en av de spisse vinklene i trekanten – la oss kalle den $v$.

Nå ser vi på trekanten fra vinkelens perspektiv. Siden som ligger rett overfor $v$ – den som vinkelen «peker mot» – kaller vi **motstående katet**. Siden som ligger inntil $v$ (den som er en del av vinkelen, men som ikke er hypotenusen) kaller vi **hosliggende katet**. Og den lengste siden, som ligger overfor den rette vinkelen, er fortsatt **hypotenusen**.

Det er viktig å forstå at rollene til sidene endrer seg avhengig av hvilken vinkel du ser fra. Dersom du bytter til den andre spisse vinkelen, blir det som var motstående nå hosliggende, og omvendt. Hypotenusen er alltid den samme.

Med disse tre navnene – motstående, hosliggende og hypotenus – kan vi nå definere de tre trigonometriske forholdene:

$$\\sin v = \\frac{\\text{motstående katet}}{\\text{hypotenus}}$$

$$\\cos v = \\frac{\\text{hosliggende katet}}{\\text{hypotenus}}$$

$$\\tan v = \\frac{\\text{motstående katet}}{\\text{hosliggende katet}}$$

En populær huskeregel er **SOH-CAH-TOA**: **S**in = **O**pposite/**H**ypotenuse, **C**os = **A**djacent/**H**ypotenuse, **T**an = **O**pposite/**A**djacent.`,
    },
    {
      id: '1t-5-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på sinus, cosinus og tangens:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-4-n-quiz1-q0',
            task: 'Hvilket trigonometrisk forhold brukes for å finne motstående katet når du kjenner hypotenusen?',
            options: [
              { id: 'a', text: 'Cosinus', isCorrect: false },
              { id: 'b', text: 'Tangens', isCorrect: false },
              { id: 'c', text: 'Sinus', isCorrect: true },
              { id: 'd', text: 'Pytagoras\' setning', isCorrect: false },
            ],
            solution: 'Sinus er definert som motstående/hypotenus. Dersom du kjenner hypotenusen og vinkelen, gir sinus deg motstående katet: motstående $= \\text{hypotenus} \\cdot \\sin v$.',
          },
          {
            id: '1t-5-4-n-quiz1-q1',
            task: 'Hva er $\\cos v$ definert som?',
            options: [
              { id: 'a', text: '$\\frac{\\text{motstående katet}}{\\text{hypotenus}}$', isCorrect: false },
              { id: 'b', text: '$\\frac{\\text{hosliggende katet}}{\\text{hypotenus}}$', isCorrect: true },
              { id: 'c', text: '$\\frac{\\text{motstående katet}}{\\text{hosliggende katet}}$', isCorrect: false },
              { id: 'd', text: '$\\frac{\\text{hypotenus}}{\\text{hosliggende katet}}$', isCorrect: false },
            ],
            solution: 'Cosinus er definert som hosliggende katet delt på hypotenusen: $\\cos v = \\frac{\\text{hosliggende}}{\\text{hypotenus}}$. Huskeregelen: CAH (Cos = Adjacent / Hypotenuse).',
          },
          {
            id: '1t-5-4-n-quiz1-q2',
            task: 'Hva er $\\tan v$ definert som?',
            options: [
              { id: 'a', text: '$\\frac{\\text{hypotenus}}{\\text{motstående katet}}$', isCorrect: false },
              { id: 'b', text: '$\\frac{\\text{hosliggende katet}}{\\text{motstående katet}}$', isCorrect: false },
              { id: 'c', text: '$\\frac{\\text{hosliggende katet}}{\\text{hypotenus}}$', isCorrect: false },
              { id: 'd', text: '$\\frac{\\text{motstående katet}}{\\text{hosliggende katet}}$', isCorrect: true },
            ],
            solution: 'Tangens er definert som motstående katet delt på hosliggende katet: $\\tan v = \\frac{\\text{motstående}}{\\text{hosliggende}}$. Huskeregelen: TOA (Tan = Opposite / Adjacent).',
          },
          {
            id: '1t-5-4-n-quiz1-q3',
            task: 'Hva står SOH-CAH-TOA for?',
            options: [
              { id: 'a', text: 'Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent', isCorrect: true },
              { id: 'b', text: 'Sin = Adjacent/Hypotenuse, Cos = Opposite/Hypotenuse, Tan = Adjacent/Opposite', isCorrect: false },
              { id: 'c', text: 'Sin = Opposite/Adjacent, Cos = Adjacent/Hypotenuse, Tan = Opposite/Hypotenuse', isCorrect: false },
              { id: 'd', text: 'Sin = Hypotenuse/Opposite, Cos = Hypotenuse/Adjacent, Tan = Adjacent/Opposite', isCorrect: false },
            ],
            solution: 'SOH-CAH-TOA: Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent. Det er en populær huskeregel for de tre trigonometriske forholdene.',
          },
        ],
      },
    },    {
      id: '1t-5-4-n-section2',
      type: 'text',
      content: `## Finne ukjente sider

La oss bruke definisjonene i praksis. Nøkkelen er å velge riktig funksjon basert på hva du kjenner og hva du leter etter.

**Eksempel 1:** Vinkelen $v = 30°$ og hypotenusen er 10 cm. Finn motstående katet. Vi trenger forholdet mellom motstående og hypotenus, altså sinus: $\\sin 30° = \\frac{x}{10}$, som gir $x = 10 \\cdot \\sin 30° = 10 \\cdot 0{,}5 = 5$ cm. Motstående katet er 5 cm.

**Eksempel 2:** Vinkelen $v = 45°$ og hosliggende katet er 8 cm. Finn hypotenusen. Vi trenger forholdet mellom hosliggende og hypotenus, altså cosinus: $\\cos 45° = \\frac{8}{c}$. Vi løser for $c$: $c = \\frac{8}{\\cos 45°} = \\frac{8}{0{,}707...} \\approx 11{,}3$ cm.

**Eksempel 3:** Vinkelen $v = 60°$ og hosliggende katet er 7 cm. Finn motstående katet. Vi trenger forholdet mellom motstående og hosliggende, altså tangens: $\\tan 60° = \\frac{x}{7}$, som gir $x = 7 \\cdot \\tan 60° = 7 \\cdot 1{,}732... \\approx 12{,}1$ cm.

Legg merke til mønsteret: du identifiserer hvilke to av de tre sidene (motstående, hosliggende, hypotenus) som er involvert, og velger funksjonen som kobler akkurat de to. Kjenner du motstående og hypotenus? Bruk sinus. Hosliggende og hypotenus? Cosinus. Motstående og hosliggende? Tangens.`,
    },
    {
      id: '1t-5-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på å finne ukjente sider med trigonometri:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-4-n-quiz2-q0',
            task: 'Vinkel $v = 60°$, hypotenus 10. Hva er hosliggende katet?',
            options: [
              { id: 'a', text: '$10 \\cdot \\sin 60° \\approx 8{,}66$', isCorrect: false },
              { id: 'b', text: '$10 \\cdot \\cos 60° = 5$', isCorrect: true },
              { id: 'c', text: '$10 \\cdot \\tan 60° \\approx 17{,}3$', isCorrect: false },
              { id: 'd', text: '$\\frac{10}{\\cos 60°} = 20$', isCorrect: false },
            ],
            solution: 'Hosliggende katet og hypotenus gir cosinus: hosliggende $= \\text{hypotenus} \\cdot \\cos v = 10 \\cdot \\cos 60° = 10 \\cdot 0{,}5 = 5$.',
          },
          {
            id: '1t-5-4-n-quiz2-q1',
            task: 'Vinkel $v = 30°$, hypotenus 20. Hva er motstående katet?',
            options: [
              { id: 'a', text: '$20 \\cdot \\cos 30° \\approx 17{,}3$', isCorrect: false },
              { id: 'b', text: '$20 \\cdot \\tan 30° \\approx 11{,}5$', isCorrect: false },
              { id: 'c', text: '$20 \\cdot \\sin 30° = 10$', isCorrect: true },
              { id: 'd', text: '$\\frac{20}{\\sin 30°} = 40$', isCorrect: false },
            ],
            solution: 'Motstående katet og hypotenus gir sinus: motstående $= \\text{hypotenus} \\cdot \\sin v = 20 \\cdot \\sin 30° = 20 \\cdot 0{,}5 = 10$.',
          },
          {
            id: '1t-5-4-n-quiz2-q2',
            task: 'Vinkel $v = 45°$, hosliggende katet 6. Hva er motstående katet?',
            options: [
              { id: 'a', text: '$6 \\cdot \\sin 45° \\approx 4{,}24$', isCorrect: false },
              { id: 'b', text: '$6 \\cdot \\tan 45° = 6$', isCorrect: true },
              { id: 'c', text: '$6 \\cdot \\cos 45° \\approx 4{,}24$', isCorrect: false },
              { id: 'd', text: '$\\frac{6}{\\tan 45°} = 6$', isCorrect: false },
            ],
            solution: 'Motstående og hosliggende gir tangens: motstående $= \\text{hosliggende} \\cdot \\tan v = 6 \\cdot \\tan 45° = 6 \\cdot 1 = 6$. I en 45°-trekant er de to katetene like.',
          },
          {
            id: '1t-5-4-n-quiz2-q3',
            task: 'Du kjenner motstående katet og hosliggende katet. Hvilken funksjon bruker du for å finne vinkelen?',
            options: [
              { id: 'a', text: '$\\sin^{-1}$', isCorrect: false },
              { id: 'b', text: '$\\cos^{-1}$', isCorrect: false },
              { id: 'c', text: '$\\tan^{-1}$', isCorrect: true },
              { id: 'd', text: 'Pytagoras', isCorrect: false },
            ],
            solution: 'Tangens kobler motstående og hosliggende: $\\tan v = \\frac{\\text{motstående}}{\\text{hosliggende}}$. For å finne vinkelen bruker du den inverse: $v = \\tan^{-1}\\left(\\frac{\\text{motstående}}{\\text{hosliggende}}\\right)$.',
          },
          {
            id: '1t-5-4-n-quiz2-q4',
            task: 'Vinkel $v = 50°$, hosliggende katet 12. Hva er hypotenusen?',
            options: [
              { id: 'a', text: '$12 \\cdot \\cos 50°$', isCorrect: false },
              { id: 'b', text: '$\\frac{12}{\\sin 50°}$', isCorrect: false },
              { id: 'c', text: '$\\frac{12}{\\cos 50°}$', isCorrect: true },
              { id: 'd', text: '$12 \\cdot \\sin 50°$', isCorrect: false },
            ],
            solution: 'Cosinus kobler hosliggende og hypotenus: $\\cos 50° = \\frac{12}{c}$. Vi løser for $c$: $c = \\frac{12}{\\cos 50°}$.',
          },
        ],
      },
    },    {
      id: '1t-5-4-n-section3',
      type: 'text',
      content: `## Finne vinkler med inverse funksjoner

Så langt har vi brukt trigonometri til å finne sider når vi kjenner vinkelen. Men hva om vi kjenner sidene og vil finne vinkelen? Da bruker vi **inverse trigonometriske funksjoner**, også kalt **arcus-funksjoner**.

Ideene er enkle: dersom $\\sin v = 0{,}5$, da er $v = \\sin^{-1}(0{,}5) = 30°$. Funksjonen $\\sin^{-1}$ (også skrevet $\\arcsin$) «snur» sinus – den tar et tall mellom $-1$ og $1$ og gir tilbake vinkelen. På kalkulatoren finner du dem merket som «sin⁻¹», «cos⁻¹» og «tan⁻¹».

La oss ta et eksempel. En rettvinklet trekant har kateter 3 cm og 4 cm. Vi vil finne den minste spisse vinkelen. Den minste vinkelen ligger overfor den korteste kateten (3 cm). Fra den vinkelens perspektiv er 3 cm motstående og 4 cm hosliggende. Vi bruker tangens: $\\tan v = \\frac{3}{4} = 0{,}75$, og dermed $v = \\tan^{-1}(0{,}75) \\approx 36{,}9°$.

Hvilken invers funksjon du velger, avhenger av hvilke sider du kjenner – akkurat som ved å finne sider. Kjenner du motstående og hypotenus? Bruk $\\sin^{-1}$. Hosliggende og hypotenus? Bruk $\\cos^{-1}$. Motstående og hosliggende? Bruk $\\tan^{-1}$.

Pass på å sjekke at kalkulatoren er i gradermodus (DEG), ikke radianmodus (RAD). I radianmodus ville $\\sin^{-1}(0{,}5)$ gi $\\frac{\\pi}{6} \\approx 0{,}524$ – et tall som absolutt ikke ser ut som 30°.`,
    },
    {
      id: '1t-5-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på inverse trigonometriske funksjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-4-n-quiz3-q0',
            task: 'En rettvinklet trekant har motstående katet 5 og hypotenus 10. Hva er vinkelen $v$?',
            options: [
              { id: 'a', text: '$60°$', isCorrect: false },
              { id: 'b', text: '$45°$', isCorrect: false },
              { id: 'c', text: '$30°$', isCorrect: true },
              { id: 'd', text: '$90°$', isCorrect: false },
            ],
            solution: 'Vi bruker sinus: $\\sin v = \\frac{5}{10} = 0{,}5$. Dermed $v = \\sin^{-1}(0{,}5) = 30°$.',
          },
          {
            id: '1t-5-4-n-quiz3-q1',
            task: 'En rettvinklet trekant har kateter 7 og 7. Hva er de spisse vinklene?',
            options: [
              { id: 'a', text: '$30°$ og $60°$', isCorrect: false },
              { id: 'b', text: '$45°$ og $45°$', isCorrect: true },
              { id: 'c', text: '$40°$ og $50°$', isCorrect: false },
              { id: 'd', text: '$35°$ og $55°$', isCorrect: false },
            ],
            solution: 'Når de to katetene er like, er $\\tan v = \\frac{7}{7} = 1$, altså $v = \\tan^{-1}(1) = 45°$. Begge spisse vinkler er 45°.',
          },
          {
            id: '1t-5-4-n-quiz3-q2',
            task: 'Du kjenner hosliggende katet (8) og hypotenus (16). Hvilken funksjon bruker du for å finne $v$?',
            options: [
              { id: 'a', text: '$v = \\sin^{-1}\\left(\\frac{8}{16}\\right)$', isCorrect: false },
              { id: 'b', text: '$v = \\cos^{-1}\\left(\\frac{8}{16}\\right)$', isCorrect: true },
              { id: 'c', text: '$v = \\tan^{-1}\\left(\\frac{8}{16}\\right)$', isCorrect: false },
              { id: 'd', text: '$v = \\sin^{-1}\\left(\\frac{16}{8}\\right)$', isCorrect: false },
            ],
            solution: 'Hosliggende katet og hypotenus gir cosinus. $\\cos v = \\frac{8}{16} = 0{,}5$, dermed $v = \\cos^{-1}(0{,}5) = 60°$.',
          },
          {
            id: '1t-5-4-n-quiz3-q3',
            task: 'Kalkulatoren din gir $\\sin^{-1}(0{,}5) = 0{,}524$. Hva er mest sannsynlig feil?',
            options: [
              { id: 'a', text: 'Du har skrevet inn feil tall', isCorrect: false },
              { id: 'b', text: 'Kalkulatoren er defekt', isCorrect: false },
              { id: 'c', text: 'Kalkulatoren står i radianmodus i stedet for gradermodus', isCorrect: true },
              { id: 'd', text: 'Du burde brukt cosinus i stedet', isCorrect: false },
            ],
            solution: '$\\sin^{-1}(0{,}5)$ skal gi 30° i gradermodus. Tallet $0{,}524 \\approx \\frac{\\pi}{6}$ radianer, noe som er 30° uttrykt i radianer. Kalkulatoren må settes i DEG-modus.',
          },
        ],
      },
    },    {
      id: '1t-5-4-n-section4',
      type: 'text',
      content: `## Spesielle vinkler

Noen vinkelverdier dukker opp så ofte at det er verdt å kunne de trigonometriske verdiene utenat. De tre viktigste er 30°, 45° og 60°.

For **30°** gjelder: $\\sin 30° = \\frac{1}{2}$, $\\cos 30° = \\frac{\\sqrt{3}}{2}$ og $\\tan 30° = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$. Disse verdiene kommer fra en 30-60-90-trekant, som du får ved å dele en likesidet trekant i to.

For **45°** gjelder: $\\sin 45° = \\frac{\\sqrt{2}}{2}$, $\\cos 45° = \\frac{\\sqrt{2}}{2}$ og $\\tan 45° = 1$. Legg merke til at sinus og cosinus er like for 45° – det gir mening fordi i en 45-45-90-trekant er de to katetene like lange, så motstående og hosliggende er det samme. Og tangens er 1 fordi forholdet mellom to like sider alltid er 1.

For **60°** gjelder: $\\sin 60° = \\frac{\\sqrt{3}}{2}$, $\\cos 60° = \\frac{1}{2}$ og $\\tan 60° = \\sqrt{3}$. Legg merke til symmetrien med 30°: $\\sin 60° = \\cos 30°$ og $\\cos 60° = \\sin 30°$. Det er fordi 30° og 60° er de to spisse vinklene i samme trekant – hva som er motstående for den ene, er hosliggende for den andre.

Denne sammenhengen gjelder generelt: $\\sin v = \\cos(90° - v)$ for alle spisse vinkler $v$. Sinus og cosinus er altså «partnere» som utfyller hverandre.`,
    },
    {
      id: '1t-5-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på spesielle vinkler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-4-n-quiz4-q0',
            task: 'Hva er $\\tan 45°$?',
            options: [
              { id: 'a', text: '$\\frac{\\sqrt{2}}{2}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{2}$', isCorrect: false },
              { id: 'c', text: '$\\sqrt{3}$', isCorrect: false },
              { id: 'd', text: '$1$', isCorrect: true },
            ],
            solution: 'I en 45-45-90-trekant er de to katetene like lange. Tangens er motstående/hosliggende, og forholdet mellom to like tall er alltid 1.',
          },
          {
            id: '1t-5-4-n-quiz4-q1',
            task: 'Hva er $\\sin 30°$?',
            options: [
              { id: 'a', text: '$\\frac{\\sqrt{3}}{2}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{2}$', isCorrect: true },
              { id: 'c', text: '$\\frac{\\sqrt{2}}{2}$', isCorrect: false },
              { id: 'd', text: '$1$', isCorrect: false },
            ],
            solution: 'I en 30-60-90-trekant er motstående katet for 30° lik halvparten av hypotenusen. Dermed er $\\sin 30° = \\frac{1}{2}$.',
          },
          {
            id: '1t-5-4-n-quiz4-q2',
            task: 'Hva er $\\cos 60°$?',
            options: [
              { id: 'a', text: '$\\frac{\\sqrt{3}}{2}$', isCorrect: false },
              { id: 'b', text: '$\\sqrt{3}$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{2}$', isCorrect: true },
              { id: 'd', text: '$\\frac{\\sqrt{2}}{2}$', isCorrect: false },
            ],
            solution: 'Sammenhengen $\\sin v = \\cos(90° - v)$ gir at $\\cos 60° = \\sin 30° = \\frac{1}{2}$. Det som er motstående for 30° er hosliggende for 60°.',
          },
          {
            id: '1t-5-4-n-quiz4-q3',
            task: 'Hvorfor er $\\sin 60° = \\cos 30°$?',
            options: [
              { id: 'a', text: 'Fordi sinus og cosinus alltid er like', isCorrect: false },
              { id: 'b', text: 'Det er tilfeldig at de har samme verdi', isCorrect: false },
              { id: 'c', text: 'Fordi 30° og 60° er de to spisse vinklene i samme trekant, og motstående for den ene er hosliggende for den andre', isCorrect: true },
              { id: 'd', text: 'Fordi $60 + 30 = 90$, og vinkler som summerer til 90° har alltid lik sinus', isCorrect: false },
            ],
            solution: 'I en 30-60-90-trekant er det som er motstående katet sett fra 60° det samme som hosliggende katet sett fra 30°. Dermed er $\\sin 60° = \\cos 30°$. Generelt: $\\sin v = \\cos(90° - v)$.',
          },
          {
            id: '1t-5-4-n-quiz4-q4',
            task: 'Hva er $\\tan 60°$?',
            options: [
              { id: 'a', text: '$1$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{2}$', isCorrect: false },
              { id: 'c', text: '$\\sqrt{3}$', isCorrect: true },
              { id: 'd', text: '$\\frac{\\sqrt{3}}{3}$', isCorrect: false },
            ],
            solution: '$\\tan 60° = \\frac{\\sin 60°}{\\cos 60°} = \\frac{\\frac{\\sqrt{3}}{2}}{\\frac{1}{2}} = \\sqrt{3} \\approx 1{,}732$. Alternativt: $\\frac{\\sqrt{3}}{3}$ er $\\tan 30°$, ikke $\\tan 60°$.',
          },
        ],
      },
    },    {
      id: '1t-5-4-n-section5',
      type: 'text',
      content: `## Trigonometri i den virkelige verden

Trigonometri er ikke bare klasseromsmatematikk – den løser ekte problemer der du kan se men ikke måle direkte.

**Treets høyde.** Et tre kaster en skygge på 15 m når solen står 35° over horisonten. Treet og skyggen danner en rettvinklet trekant der treets høyde er motstående katet og skyggen er hosliggende. Vi bruker tangens: $h = 15 \\cdot \\tan 35° = 15 \\cdot 0{,}700... \\approx 10{,}5$ m.

**Helikopteret og skipet.** En helikopterpilot ser ned på et skip med en vinkel på 25° under horisontalt. Helikopteret er 800 m over havet. Høyden er motstående, den horisontale avstanden er hosliggende. $d = \\frac{800}{\\tan 25°} = \\frac{800}{0{,}466...} \\approx 1716$ m.

**Rampen.** En rampe skal ha en stigningsvinkel på 8° og nå en høyde på 1,2 m. Høyden er motstående, rampen er hypotenusen. $L = \\frac{1{,}2}{\\sin 8°} = \\frac{1{,}2}{0{,}139...} \\approx 8{,}6$ m.

**Flyet.** Et fly tar av med vinkel 12° og flyr 3 km langs flybanen. Høyden er $3000 \\cdot \\sin 12° \\approx 624$ m, og den horisontale avstanden er $3000 \\cdot \\cos 12° \\approx 2934$ m.

I alle disse tilfellene er fremgangsmåten lik: tegn en rettvinklet trekant, identifiser motstående, hosliggende og hypotenus i forhold til vinkelen, og velg riktig funksjon. Tegningen er kanskje det viktigste steget – den hjelper deg å se hvilke sider og vinkler du jobber med.`,
    },
    {
      id: '1t-5-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-5-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på trigonometri i den virkelige verden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: '1t-5-4-n-quiz5-q0',
            task: 'En sti går rett opp en bakke. Etter 200 m har du steget 50 m i høyden. Hva er stigningsvinkelen?',
            options: [
              { id: 'a', text: '$\\sin^{-1}(0{,}25) \\approx 14{,}5°$', isCorrect: true },
              { id: 'b', text: '$\\cos^{-1}(0{,}25) \\approx 75{,}5°$', isCorrect: false },
              { id: 'c', text: '$\\tan^{-1}(0{,}25) \\approx 14{,}0°$', isCorrect: false },
              { id: 'd', text: '$\\tan^{-1}(4) \\approx 76{,}0°$', isCorrect: false },
            ],
            solution: 'Stien (200 m) er hypotenusen, høyden (50 m) er motstående katet. Vi bruker sinus: $\\sin v = \\frac{50}{200} = 0{,}25$, altså $v = \\sin^{-1}(0{,}25) \\approx 14{,}5°$.',
          },
          {
            id: '1t-5-4-n-quiz5-q1',
            task: 'Et tre kaster en skygge på 20 m når solen står 40° over horisonten. Hvor høyt er treet?',
            options: [
              { id: 'a', text: '$20 \\cdot \\sin 40° \\approx 12{,}9$ m', isCorrect: false },
              { id: 'b', text: '$20 \\cdot \\cos 40° \\approx 15{,}3$ m', isCorrect: false },
              { id: 'c', text: '$20 \\cdot \\tan 40° \\approx 16{,}8$ m', isCorrect: true },
              { id: 'd', text: '$\\frac{20}{\\tan 40°} \\approx 23{,}8$ m', isCorrect: false },
            ],
            solution: 'Treets høyde er motstående katet, skyggen er hosliggende katet. Vi bruker tangens: $h = 20 \\cdot \\tan 40° \\approx 20 \\cdot 0{,}839 \\approx 16{,}8$ m.',
          },
          {
            id: '1t-5-4-n-quiz5-q2',
            task: 'En rampe skal nå en høyde på 2 m med stigningsvinkel 10°. Hvor lang er rampen?',
            options: [
              { id: 'a', text: '$\\frac{2}{\\cos 10°} \\approx 2{,}03$ m', isCorrect: false },
              { id: 'b', text: '$2 \\cdot \\sin 10° \\approx 0{,}35$ m', isCorrect: false },
              { id: 'c', text: '$\\frac{2}{\\sin 10°} \\approx 11{,}5$ m', isCorrect: true },
              { id: 'd', text: '$\\frac{2}{\\tan 10°} \\approx 11{,}3$ m', isCorrect: false },
            ],
            solution: 'Høyden (2 m) er motstående katet, rampen er hypotenusen. $\\sin 10° = \\frac{2}{L}$, altså $L = \\frac{2}{\\sin 10°} \\approx \\frac{2}{0{,}174} \\approx 11{,}5$ m.',
          },
          {
            id: '1t-5-4-n-quiz5-q3',
            task: 'Et fly tar av med vinkel 15° og flyr 2 km langs flybanen. Omtrent hvilken høyde oppnår flyet?',
            options: [
              { id: 'a', text: '$2000 \\cdot \\cos 15° \\approx 1932$ m', isCorrect: false },
              { id: 'b', text: '$2000 \\cdot \\tan 15° \\approx 536$ m', isCorrect: false },
              { id: 'c', text: '$2000 \\cdot \\sin 15° \\approx 518$ m', isCorrect: true },
              { id: 'd', text: '$\\frac{2000}{\\sin 15°} \\approx 7727$ m', isCorrect: false },
            ],
            solution: 'Flybanen (2000 m) er hypotenusen, høyden er motstående katet. $h = 2000 \\cdot \\sin 15° \\approx 2000 \\cdot 0{,}259 \\approx 518$ m.',
          },
          {
            id: '1t-5-4-n-quiz5-q4',
            task: 'Hva er det viktigste første steget i alle praktiske trigonometrioppgaver?',
            options: [
              { id: 'a', text: 'Taste inn tallene på kalkulatoren', isCorrect: false },
              { id: 'b', text: 'Tegne en figur og identifisere motstående, hosliggende og hypotenus', isCorrect: true },
              { id: 'c', text: 'Bruke Pytagoras\' setning', isCorrect: false },
              { id: 'd', text: 'Gjette hvilken funksjon som passer', isCorrect: false },
            ],
            solution: 'Tegn alltid en rettvinklet trekant og identifiser de tre sidene i forhold til den aktuelle vinkelen. Deretter velger du riktig funksjon basert på hvilke sider som er involvert.',
          },
        ],
      },
    },    {
      id: '1t-5-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Trigonometri** kobler vinkler og sider i rettvinklede trekanter. De tre forholdene er: $\\sin v = \\frac{\\text{motstående}}{\\text{hypotenus}}$, $\\cos v = \\frac{\\text{hosliggende}}{\\text{hypotenus}}$ og $\\tan v = \\frac{\\text{motstående}}{\\text{hosliggende}}$. Huskeregelen er **SOH-CAH-TOA**.

For å **finne en side**, omform den relevante formelen: motstående $= \\text{hypotenus} \\cdot \\sin v$, hosliggende $= \\text{hypotenus} \\cdot \\cos v$, eller motstående $= \\text{hosliggende} \\cdot \\tan v$. For å **finne en vinkel**, bruk de inverse funksjonene: $\\sin^{-1}$, $\\cos^{-1}$ eller $\\tan^{-1}$.

De **spesielle vinklene** 30°, 45° og 60° har eksakte verdier som er nyttige å kunne. Legg merke til at $\\sin v = \\cos(90° - v)$ – de to funksjonene utfyller hverandre for komplementære vinkler.

I praksis brukes trigonometri til å måle det du ikke kan nå direkte: høyden på trær, avstanden til skip, lengden på ramper og stigningsvinkler på stier. Tegn alltid en figur og identifiser de tre sidene i forhold til vinkelen.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const MATEMATIKK_1T_NARRATIV_KAP5_CHAPTERS = [
  CHAPTER_1T_5_1_NARRATIV,
  CHAPTER_1T_5_2_NARRATIV,
  CHAPTER_1T_5_3_NARRATIV,
  CHAPTER_1T_5_4_NARRATIV,
];
