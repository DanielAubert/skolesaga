/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Kroppsøving 6. klasse - Kapittelinnhold
 *
 * Fullstendig innhold for alle kapitler med teori, definisjoner, eksempler og oppgaver.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: GRUNNLEGGENDE BEVEGELSER
// ============================================================================

export const CHAPTER_KROPPSOVING_6_1_1: TextbookChapter = {
  id: 'kroppsoving-6-1-1',
  courseId: 'kroppsoving-6',
  chapterNumber: '1.1',
  title: 'Løping og hopping',
  description: 'Utvikle teknikk for løping, hopping og hink.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['øve på og utvikle grunnleggende bevegelser'],
  content: [
    {
      id: 'kroppsoving-6-1-1-intro',
      type: 'text',
      content: `## Å bevege seg

Løping og hopping er grunnleggende bevegelser som vi bruker i mange idretter og i hverdagen. Ved å lære god teknikk kan du bevege deg mer effektivt og unngå skader.

### Hvorfor er god teknikk viktig?
- Du bruker mindre energi
- Du løper eller hopper lenger og høyere
- Du unngår belastningsskader
- Du blir en bedre idrettsutøver`
    },
    {
      id: 'kroppsoving-6-1-1-def-1',
      type: 'definition',
      title: 'Løpeteknikk',
      content: 'Måten du beveger kroppen når du løper. God teknikk inkluderer riktig armsvingning, fotisett og kroppsholdning.'
    },
    {
      id: 'kroppsoving-6-1-1-text-2',
      type: 'text',
      content: `## God løpeteknikk

### Kroppsholdning:
- Kroppen lett fremoverlent
- Blikket fremover (ikke ned)
- Avslappede skuldre
- Stram kjerne (mage)

### Armene:
- Bøyd i 90 grader
- Sving frem og tilbake (ikke på tvers)
- Avslappede hender (ikke knyttet)
- Armene driver deg fremover

### Beina:
- Høy knéløft (spesielt i sprint)
- Aktiv fotisett - midt på foten eller forfot
- Skyv godt fra bakken
- Rask steghastighet`
    },
    {
      id: 'kroppsoving-6-1-1-text-3',
      type: 'text',
      content: `## Hopping og hink

### Lengdehopp:
1. **Tilløp** - økende fart, rytmisk
2. **Satsen** - kraftig avsett fra ett ben
3. **Svevet** - strekk kroppen fremover
4. **Landingen** - begge føtter, bøy i knærne

### Høydehopp:
1. **Tilløp** - bue inn mot bommen
2. **Satsen** - avsett fra foten nærmest bommen
3. **Overføringen** - bue ryggen over bommen (Fosbury Flop)
4. **Landingen** - på ryggen i matten

### Hink:
- Hoppe på ett ben
- Hold balansen
- Bytt mellom høyre og venstre
- Øk avstanden mellom hinkene`
    },
    {
      id: 'kroppsoving-6-1-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-1-ex-1',
        number: '1.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvordan bør armene bevege seg når du løper?',
        solution: 'Armene bør være bøyd i ca. 90 grader og svinge frem og tilbake (ikke på tvers av kroppen). Hendene skal være avslappet, ikke knyttet.',
        hints: ['Tenk på hvilken retning du løper - armene skal hjelpe deg dit'],
      }
    },
    {
      id: 'kroppsoving-6-1-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-1-ex-2',
        number: '1.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på løpeteknikk med fokus på armsvingning.',
        subTasks: [
          'Løp 30 meter med fokus på riktig armsvingning',
          'Hvil og gjenta 3 ganger',
          'La en medelev observere og gi tilbakemelding',
          'Bytt og observer din medelev'
        ],
        solution: 'Armene skal svinge parallelt med løperetningen, bøyd i 90 grader, med avslappede hender.',
        hints: ['Tenk på at armene driver deg fremover'],
      }
    },
    {
      id: 'kroppsoving-6-1-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-1-ex-3',
        number: '1.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på lengdehopp fra stillestart.',
        subTasks: [
          'Stå med samlede føtter bak en linje',
          'Bøy deg ned og svinge armene bakover',
          'Hopp så langt du kan',
          'Land på begge føtter',
          'Mål avstanden og prøv å slå din egen rekord'
        ],
        solution: 'Hopp med god kraft fra begge bein, sving armene fremover og opp, land med bøyde knær.',
        hints: ['Armsvingen gir ekstra kraft til hoppet'],
      }
    },
    {
      id: 'kroppsoving-6-1-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-1-ex-4',
        number: '1.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Øv på hink i en bane med hindringer.',
        subTasks: [
          'Sett opp 5-6 kjegler i en rad med ulik avstand',
          'Hink over kjeglen på høyre fot',
          'Bytt til venstre fot etter 3 kjegler',
          'Ta tiden og prøv å forbedre den'
        ],
        solution: 'Du skal kunne hinke over hindringene kontrollert på begge bein.',
        hints: ['Hold balansen ved å strekke ut armene'],
      }
    },
    {
      id: 'kroppsoving-6-1-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-1-ex-5',
        number: '1.1.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor bør blikket være rettet når du løper?',
        solution: 'Fremover',
        multipleChoiceOptions: [
          { id: 'a', text: 'Ned på føttene', isCorrect: false },
          { id: 'b', text: 'Fremover', isCorrect: true },
          { id: 'c', text: 'Opp i luften', isCorrect: false },
          { id: 'd', text: 'Til siden', isCorrect: false }
        ],
        hints: ['Du vil se hvor du løper hen'],
      }
    },
    {
      id: 'kroppsoving-6-1-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-1-ex-6',
        number: '1.1.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er de fire fasene i et lengdehopp?',
        solution: 'De fire fasene er: 1) Tilløp - økende fart mot satsen, 2) Satsen - kraftig avsett fra ett bein, 3) Svevet - strekk kroppen fremover i luften, 4) Landingen - land på begge føtter med bøyde knær.',
        hints: ['Tenk på hva som skjer fra start til slutt'],
      }
    }
  ],
};

export const CHAPTER_KROPPSOVING_6_1_2: TextbookChapter = {
  id: 'kroppsoving-6-1-2',
  courseId: 'kroppsoving-6',
  chapterNumber: '1.2',
  title: 'Kasting og mottak',
  description: 'Lær ulike kasteteknikker og hvordan du tar imot baller.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['utføre varierte bevegelser i ulike miljø'],
  content: [
    {
      id: 'kroppsoving-6-1-2-intro',
      type: 'text',
      content: `## Kast og mottak

Å kaste og ta imot baller er ferdigheter du bruker i mange idretter - håndball, basket, baseball og mange leker. God teknikk gjør at du kaster lengre, mer presist og tar imot baller trygt.

### Ulike typer kast:
- Overarmskast (håndball)
- Underarmskast (bowling)
- Brystkast (basket)
- Sleng (frisbee)`
    },
    {
      id: 'kroppsoving-6-1-2-text-2',
      type: 'text',
      content: `## Overarmskast

Dette er det vanligste kastet i ballspill.

### Teknikk:
1. **Utgangsposisjon** - stå sidevendt mot målet, ball i hånden
2. **Opptak** - før armen bakover, bøy albuen
3. **Rotasjon** - roter hoften og skulderen fremover
4. **Slipp** - slipp ballen når armen er fremover og opp
5. **Gjennomføring** - armen følger gjennom bevegelsen

### Tips:
- Bruk hele kroppen, ikke bare armen
- Motsatt ben foran ved kast
- Sikt med øynene før du kaster`
    },
    {
      id: 'kroppsoving-6-1-2-text-3',
      type: 'text',
      content: `## Å ta imot baller

### Grunnprinsipper:
- Ha blikket på ballen hele tiden
- Beveg deg mot ballen (ikke vent)
- Myke hender - gi etter når ballen treffer
- "Fang" ballen inn mot kroppen

### Høye baller:
- Hendene opp, fingrene spredd
- Tomlene nesten berører hverandre
- Gi etter i armene

### Lave baller:
- Hendene ned, lillefingrene nesten berører
- Bøy deg ned med bøyde knær
- Ta ballen foran kroppen`
    },
    {
      id: 'kroppsoving-6-1-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-2-ex-1',
        number: '1.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvorfor er det viktig å bruke hele kroppen når du kaster?',
        solution: 'Når du bruker hele kroppen (bein, hofte, skulder, arm) får kastet mer kraft. Kroppen roterer og overfører energi til ballen, så den flyr lenger og raskere.',
        hints: ['Tenk på hvor kraften kommer fra'],
      }
    },
    {
      id: 'kroppsoving-6-1-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-2-ex-2',
        number: '1.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på overarmskast mot et mål.',
        subTasks: [
          'Sett opp et mål (kjegle eller bøtte) 10 meter unna',
          'Kast 10 baller og tell treff',
          'Flytt målet til 15 meter og gjenta',
          'Jobb med å forbedre presisjonen'
        ],
        solution: 'Du skal treffe målet stadig oftere når teknikken blir bedre.',
        hints: ['Fokuser på å slippe ballen på riktig tidspunkt'],
      }
    },
    {
      id: 'kroppsoving-6-1-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-2-ex-3',
        number: '1.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på å ta imot baller i ulike høyder med en partner.',
        subTasks: [
          'Partner kaster høye baller - øv på mottak over hodet',
          'Partner kaster baller i brysthøyde - øv på frontmottak',
          'Partner kaster lave baller - øv på lavt mottak',
          'Bytt roller etter 10 kast'
        ],
        solution: 'Du skal kunne ta imot baller i alle høyder med sikker teknikk.',
        hints: ['Beveg deg mot ballen og ha myke hender'],
      }
    },
    {
      id: 'kroppsoving-6-1-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-2-ex-4',
        number: '1.2.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan bør hendene være når du tar imot en høy ball?',
        solution: 'Hendene opp med tomlene nesten berørende',
        multipleChoiceOptions: [
          { id: 'a', text: 'Hendene ned ved siden', isCorrect: false },
          { id: 'b', text: 'Hendene opp med tomlene nesten berørende', isCorrect: true },
          { id: 'c', text: 'En hånd opp, en ned', isCorrect: false },
          { id: 'd', text: 'Knytnever', isCorrect: false }
        ],
        hints: ['Tenk på å lage en skål som ballen lander i'],
      }
    },
    {
      id: 'kroppsoving-6-1-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-2-ex-5',
        number: '1.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Spill kastesisten med presise kast og sikre mottak.',
        subTasks: [
          'Del inn i to lag',
          'Kast ballen til en lagkamerat',
          'Prøv å ta ut motstandere ved å treffe dem med ballen',
          'Spill i 10 minutter og tell poeng'
        ],
        solution: 'Laget som bruker god kaste- og mottaksteknikk vil oftere lykkes.',
        hints: ['Kommuniser med laget ditt'],
      }
    }
  ],
};

export const CHAPTER_KROPPSOVING_6_1_3: TextbookChapter = {
  id: 'kroppsoving-6-1-3',
  courseId: 'kroppsoving-6',
  chapterNumber: '1.3',
  title: 'Turn og akrobatikk',
  description: 'Øv på ruller, håndstående og enkle akrobatiske øvelser.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['utforske egne muligheter i ulike bevegelsesformer'],
  content: [
    {
      id: 'kroppsoving-6-1-3-intro',
      type: 'text',
      content: `## Turn og akrobatikk

Turn og akrobatikk handler om å kontrollere kroppen i ulike stillinger og bevegelser. Det bygger styrke, balanse og koordinasjon.

### Grunnleggende ferdigheter:
- Ruller (fremover og bakover)
- Balanseøvelser
- Håndstående (mot vegg)
- Hjulbevegelser`
    },
    {
      id: 'kroppsoving-6-1-3-def-1',
      type: 'definition',
      title: 'Kroppsspenning',
      content: 'Å aktivere musklene slik at kroppen holdes stiv og strak. Viktig for alle turnøvelser for kontroll og sikkerhet.'
    },
    {
      id: 'kroppsoving-6-1-3-text-2',
      type: 'text',
      content: `## Fremoverrull

Fremoverrullen er en av de første turnøvelsene du lærer.

### Teknikk:
1. **Start** - stå med samlede føtter, armene fremover
2. **Bøy** - bøy deg ned, hendene på matten
3. **Tuck** - press haken mot brystet, rund ryggen
4. **Rull** - skyv fra med beina, rull over nakken (aldri toppen av hodet!)
5. **Reis deg** - bruk fart til å reise deg opp

### Sikkerhet:
- Bruk alltid tjukkas eller matte
- Ha haken mot brystet
- Rull over nakke og øvre rygg`
    },
    {
      id: 'kroppsoving-6-1-3-text-3',
      type: 'text',
      content: `## Håndstående

Håndstående krever styrke og balanse.

### Mot vegg (nybegynner):
1. Sett hendene på gulvet ca. 30 cm fra veggen
2. Spark opp med ett ben, følg med det andre
3. Hold kroppen strak med aktiv kjerne
4. Føttene hviler lett mot veggen
5. Hold noen sekunder, kom kontrollert ned

### Tips:
- Start med "L-stående" (føttene på en benk)
- Bygg opp styrke gradvis
- Ha alltid noen til å sikre deg i begynnelsen`
    },
    {
      id: 'kroppsoving-6-1-3-text-4',
      type: 'text',
      content: `## Balanse

God balanse er grunnlaget for mange bevegelser.

### Øvelser for balanse:
- Stå på ett ben - øyne åpne, så lukket
- Gå på en linje - som balansegang
- Balanser på en benk eller bom
- "Flamingostand" - ett ben mot lår

### Tips for balanse:
- Finn et punkt å se på (fokuspunkt)
- Hold kjernestyrken aktiv
- Bruk armene til å justere
- Start med lavt, øk gradvis høyden`
    },
    {
      id: 'kroppsoving-6-1-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-3-ex-1',
        number: '1.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er kroppsspenning, og hvorfor er det viktig i turn?',
        solution: 'Kroppsspenning er å aktivere musklene slik at kroppen holdes stiv og strak. Det er viktig fordi det gir bedre kontroll over bevegelsene og gjør øvelsene sikrere.',
        hints: ['Tenk på forskjellen mellom en slapp og en stram kropp'],
      }
    },
    {
      id: 'kroppsoving-6-1-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-3-ex-2',
        number: '1.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på fremoverrull.',
        subTasks: [
          'Start på en tjukkas eller matte',
          'Gjør 5 fremoverruller med fokus på å holde haken mot brystet',
          'Prøv å reise deg opp etter rullen uten å bruke hendene',
          'Få tilbakemelding fra en medelev eller lærer'
        ],
        solution: 'Fremoverrullen skal være myk og kontrollert, med hodet tucked inn.',
        hints: ['Tenk på å lage kroppen til en ball'],
      }
    },
    {
      id: 'kroppsoving-6-1-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-3-ex-3',
        number: '1.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Øv på håndstående mot vegg.',
        subTasks: [
          'Start med hendene på gulvet, nær veggen',
          'Spark forsiktig opp mot veggen',
          'Hold stillingen i 5 sekunder',
          'Kom kontrollert ned',
          'Gjenta 5 ganger'
        ],
        solution: 'Du skal kunne holde håndstående mot veggen med strak kropp.',
        hints: ['Ha noen til å sikre deg til du mestrer det'],
      }
    },
    {
      id: 'kroppsoving-6-1-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-3-ex-4',
        number: '1.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Test balansen din med ulike øvelser.',
        subTasks: [
          'Stå på ett ben i 30 sekunder - begge sider',
          'Gjør det samme med lukkede øyne',
          'Gå 5 meter på en linje uten å trå utenfor',
          'Stå på en benk og snurr sakte rundt'
        ],
        solution: 'Du skal kunne fullføre balanseøvelsene med kontroll.',
        hints: ['Finn et fokuspunkt å se på'],
      }
    },
    {
      id: 'kroppsoving-6-1-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-1-3-ex-5',
        number: '1.3.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du IKKE gjøre i en fremoverrull?',
        solution: 'Rulle over toppen av hodet',
        multipleChoiceOptions: [
          { id: 'a', text: 'Holde haken mot brystet', isCorrect: false },
          { id: 'b', text: 'Rulle over toppen av hodet', isCorrect: true },
          { id: 'c', text: 'Bruke en matte', isCorrect: false },
          { id: 'd', text: 'Runde ryggen', isCorrect: false }
        ],
        hints: ['Det handler om sikkerhet for nakken'],
      }
    }
  ],
};

// ============================================================================
// KAPITTEL 2: BALLSPILL
// ============================================================================

export const CHAPTER_KROPPSOVING_6_2_1: TextbookChapter = {
  id: 'kroppsoving-6-2-1',
  courseId: 'kroppsoving-6',
  chapterNumber: '2.1',
  title: 'Fotball',
  description: 'Lær grunnleggende fotballteknikk og spillforståelse.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['delta i lagspill og følge regler'],
  content: [
    {
      id: 'kroppsoving-6-2-1-intro',
      type: 'text',
      content: `## Fotball

Fotball er verdens mest populære idrett. Det er et lagspill som krever teknikk, samarbeid og spillforståelse.

### Grunnleggende ferdigheter:
- Pasninger
- Dribling
- Skudd
- Heading
- Forsvar`
    },
    {
      id: 'kroppsoving-6-2-1-text-2',
      type: 'text',
      content: `## Pasninger

En god pasning er grunnlaget for godt lagspill.

### Innsidespark (vanligste pasningen):
1. Støttebenet ved siden av ballen
2. Sparkebenet svinger fra hoften
3. Treff ballen med innsiden av foten
4. Følg gjennom mot medspilleren

### Utsidepass:
- For korte pasninger til siden
- Treff ballen med utsiden av foten
- Raskere, men mindre presis

### Tips:
- Se opp og finn medspilleren før du slår
- Pass i fart - rett foran medspilleren
- Kommuniser med stemmen`
    },
    {
      id: 'kroppsoving-6-2-1-text-3',
      type: 'text',
      content: `## Dribling

Dribling er å føre ballen forbi motspillere.

### Teknikk:
- Hold ballen nær føttene
- Bruk begge føtter
- Se opp, ikke bare på ballen
- Endre tempo og retning

### Finter:
- "Skulderfinte" - lurer med kroppen
- "Stepover" - foten går over ballen
- "Drag back" - trekk ballen tilbake med sålen

### Når drible:
- Når du har plass
- For å skape åpninger
- Når ingen medspiller er ledig`
    },
    {
      id: 'kroppsoving-6-2-1-text-4',
      type: 'text',
      content: `## Skudd

Å score mål er målet med fotball!

### Skuddteknikk:
1. **Tilløp** - noen skritt mot ballen, i vinkel
2. **Støttefot** - ved siden av ballen, peker mot mål
3. **Spark** - treff med vristen (for kraft) eller innsiden (for presisjon)
4. **Gjennomføring** - foten følger gjennom

### Valg:
- Kraft vs. presisjon
- Høyt vs. lavt
- Nært hjørne vs. langt hjørne`
    },
    {
      id: 'kroppsoving-6-2-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-1-ex-1',
        number: '2.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Øv på innsidespark med en partner.',
        subTasks: [
          'Stå 5 meter fra hverandre',
          'Slå pasninger til hverandre med innsiden av foten',
          'Øk avstanden til 10 meter',
          'Tell hvor mange pasninger dere klarer på rad'
        ],
        solution: 'Pasningene skal være presise og lette å motta.',
        hints: ['Treff ballen i midten og følg gjennom'],
      }
    },
    {
      id: 'kroppsoving-6-2-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-1-ex-2',
        number: '2.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på dribling gjennom en kjegleløype.',
        subTasks: [
          'Sett opp 5 kjegler i en rad med 2 meters mellomrom',
          'Dribl slalom gjennom kjeglen så fort som mulig',
          'Bruk begge føtter',
          'Ta tiden og prøv å slå din egen rekord'
        ],
        solution: 'Du skal kunne dribler jevnt og kontrollert gjennom løypen.',
        hints: ['Hold ballen nær føttene'],
      }
    },
    {
      id: 'kroppsoving-6-2-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-1-ex-3',
        number: '2.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på skudd mot mål.',
        subTasks: [
          'Plasser ballen på 11-metermerket (eller 10-12 meter fra mål)',
          'Skyt 10 skudd og tell mål',
          'Prøv å treffe ulike hjørner',
          'Øv på både kraft og presisjon'
        ],
        solution: 'Du skal kunne skyte kontrollert mot mål og variere mellom kraft og presisjon.',
        hints: ['Støttefoten peker dit du vil skyte'],
      }
    },
    {
      id: 'kroppsoving-6-2-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvor bør støttefoten peke når du sparker en innsidepass?',
        solution: 'Støttefoten bør peke mot medspilleren du slår til. Foten plasseres ved siden av ballen.',
        hints: ['Støttefoten viser retningen'],
      }
    },
    {
      id: 'kroppsoving-6-2-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-1-ex-5',
        number: '2.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Spill 3 mot 3 på lite område.',
        subTasks: [
          'Lag to lag med 3 spillere',
          'Spill på et lite område (20x15 meter)',
          'Bruk små mål',
          'Spill i 10 minutter og fokuser på pasningsspill'
        ],
        solution: 'Laget skal vise godt samspill med presise pasninger og bevegelse.',
        hints: ['Beveg deg for å bli ledig, ikke stå stille'],
      }
    },
    {
      id: 'kroppsoving-6-2-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-1-ex-6',
        number: '2.1.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Når bør du dribler i stedet for å slå en pasning?',
        solution: 'Når du har plass og ingen medspiller er ledig',
        multipleChoiceOptions: [
          { id: 'a', text: 'Alltid', isCorrect: false },
          { id: 'b', text: 'Når du har plass og ingen medspiller er ledig', isCorrect: true },
          { id: 'c', text: 'Aldri', isCorrect: false },
          { id: 'd', text: 'Bare i forsvar', isCorrect: false }
        ],
        hints: ['Tenk på hva som er best for laget'],
      }
    }
  ],
};

export const CHAPTER_KROPPSOVING_6_2_2: TextbookChapter = {
  id: 'kroppsoving-6-2-2',
  courseId: 'kroppsoving-6',
  chapterNumber: '2.2',
  title: 'Basketball og håndball',
  description: 'Øv på teknikk og samspill i basketball og håndball.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['samarbeide og vise respekt i spill og aktiviteter'],
  content: [
    {
      id: 'kroppsoving-6-2-2-intro',
      type: 'text',
      content: `## Basketball og håndball

Basketball og håndball er raske lagspill med ball og mål. Begge krever gode kaste- og mottaksferdigheter, samspill og spillforståelse.

### Likheter:
- Spilles med hendene
- Lagspill med målsetting
- Raske overganger
- Pasningsspill er sentralt`
    },
    {
      id: 'kroppsoving-6-2-2-text-2',
      type: 'text',
      content: `## Basketball-teknikk

### Dribling:
- Slå ballen ned med fingertuppene (ikke håndflaten)
- Hold ballen lav og nær kroppen
- Se opp, ikke på ballen
- Bruk kroppen til å beskytte ballen

### Pasninger:
- **Brystkast** - begge hender fra brystet
- **Stusskast** - studser i gulvet til medspiller
- **Overhodekast** - for lengre pasninger

### Skudd:
- Kne-albue-håndledd i linje
- Fingertuppene styrer ballen
- Høy bue mot kurven
- "Følg gjennom" med hånden`
    },
    {
      id: 'kroppsoving-6-2-2-text-3',
      type: 'text',
      content: `## Håndball-teknikk

### Kast:
- Overarmskast med rotasjon i overkroppen
- Hopp i kastet for mer kraft
- Skru på ballen for å unngå keeper
- Sikt mot hjørnene

### Mottak:
- "Myke hender" - gi etter
- Møt ballen med kroppen
- Ta ballen og beveg deg videre

### Forsvar:
- Stå mellom angriper og mål
- Armene ut for å sperrer pasningslinjer
- Beveg føttene - ikke kryss dem`
    },
    {
      id: 'kroppsoving-6-2-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-2-ex-1',
        number: '2.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Øv på basketballdribling.',
        subTasks: [
          'Dribl ballen mens du går fremover',
          'Dribl mens du snur deg rundt',
          'Dribl med svak hånd',
          'Dribl gjennom en kjegleløype'
        ],
        solution: 'Du skal kunne dribler kontrollert med begge hender uten å se på ballen.',
        hints: ['Bruk fingertuppene, ikke hele hånden'],
      }
    },
    {
      id: 'kroppsoving-6-2-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-2-ex-2',
        number: '2.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på håndballkast mot mål.',
        subTasks: [
          'Stå 7 meter fra mål',
          'Kast 10 baller med fokus på teknikk',
          'Sikt på ulike hjørner',
          'Prøv hoppskudd'
        ],
        solution: 'Kastene skal ha god kraft og presisjon.',
        hints: ['Bruk hofterotasjon for mer kraft'],
      }
    },
    {
      id: 'kroppsoving-6-2-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-2-ex-3',
        number: '2.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på brystkast i basketball med partner.',
        subTasks: [
          'Stå 3 meter fra partner',
          'Slå 20 brystkast til hverandre',
          'Øk avstanden til 5 meter',
          'Beveg dere mens dere slår pasninger'
        ],
        solution: 'Pasningene skal være presise og lette å ta imot.',
        hints: ['Trykk ut med begge hender samtidig'],
      }
    },
    {
      id: 'kroppsoving-6-2-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-2-ex-4',
        number: '2.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er forskjellen på dribling i basketball og fotball?',
        solution: 'I basketball slår du ballen ned i gulvet med hendene mens du beveger deg. I fotball fører du ballen med føttene langs bakken. Begge krever at du ser opp og ikke på ballen.',
        hints: ['Tenk på hvilken kroppsdel du bruker'],
      }
    },
    {
      id: 'kroppsoving-6-2-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-2-ex-5',
        number: '2.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Spill en forenklet versjon av basketball eller håndball.',
        subTasks: [
          'Del inn i to lag',
          'Spill 3 mot 3 eller 4 mot 4',
          'Fokuser på pasningsspill og skudd',
          'Spill i 15 minutter'
        ],
        solution: 'Lagene skal vise god samarbeidsevne og følge reglene.',
        hints: ['Beveg deg uten ball for å bli ledig'],
      }
    },
    {
      id: 'kroppsoving-6-2-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-2-ex-6',
        number: '2.2.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken pasning studser i gulvet på vei til medspilleren?',
        solution: 'Stusskast',
        multipleChoiceOptions: [
          { id: 'a', text: 'Brystkast', isCorrect: false },
          { id: 'b', text: 'Overhodekast', isCorrect: false },
          { id: 'c', text: 'Stusskast', isCorrect: true },
          { id: 'd', text: 'Enhandskast', isCorrect: false }
        ],
        hints: ['Tenk på hva "stuss" betyr'],
      }
    }
  ],
};

export const CHAPTER_KROPPSOVING_6_2_3: TextbookChapter = {
  id: 'kroppsoving-6-2-3',
  courseId: 'kroppsoving-6',
  chapterNumber: '2.3',
  title: 'Volleyball og badminton',
  description: 'Lær grunnleggende teknikk i nettspill.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['prøve ulike aktiviteter og vurdere egen innsats'],
  content: [
    {
      id: 'kroppsoving-6-2-3-intro',
      type: 'text',
      content: `## Nettspill

Volleyball og badminton er begge nettspill der du sender ballen/fjærballen over et nett. Begge krever god hånd-øye-koordinasjon og rask reaksjon.

### Forskjeller:
- **Volleyball**: Lagspill, kan ikke holde ballen
- **Badminton**: Individuelt/par, bruker racket`
    },
    {
      id: 'kroppsoving-6-2-3-text-2',
      type: 'text',
      content: `## Volleyball-teknikk

### Fingerslag (sett):
- Hendene over hodet
- Fingre spredd
- Treff ballen med fingertuppene
- Strekk armene mot ballen

### Baggerslag:
- Armene strukket fremfor kroppen
- Knytt sammen hendene
- Treff ballen på underarmene
- Bøy i knærne og reis deg

### Serve:
- Start med ballen i ene hånden
- Slå til ballen med den andre hånden
- Begynn med underarmsserve
- Jobb opp til overarmsserve`
    },
    {
      id: 'kroppsoving-6-2-3-text-3',
      type: 'text',
      content: `## Badminton-teknikk

### Grep:
- Ikke klem for hardt
- Fingrene rundt håndtaket
- Tommelen på baksiden (backhand)

### Forehand-slag:
- Svingen starter fra skulderen
- Treff fjærballen høyt
- Følg gjennom med armen

### Serve:
- Underarmsserve i badminton
- Fjærballen må treffes under hoften
- Korte og lange server

### Bevegelse:
- Små, raske skritt
- Alltid tilbake til midten
- Hold balansen`
    },
    {
      id: 'kroppsoving-6-2-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-3-ex-1',
        number: '2.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Øv på fingerslag mot vegg eller med partner.',
        subTasks: [
          'Slå ballen opp i luften 10 ganger etter hverandre',
          'Slå mot en vegg og ta imot',
          'Slå med partner over et nett (eller tau)',
          'Tell hvor mange dere klarer på rad'
        ],
        solution: 'Du skal kunne kontrollere ballen med fingerslagsteknikk.',
        hints: ['Hendene former en diamant over hodet'],
      }
    },
    {
      id: 'kroppsoving-6-2-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-3-ex-2',
        number: '2.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Øv på badmintonserve.',
        subTasks: [
          'Øv grep og svingbevegelse uten ball',
          'Serve 10 fjærballer over nettet',
          'Prøv å treffe ulike områder på motstanderens banehalvdel',
          'Veksle mellom korte og lange server'
        ],
        solution: 'Servene skal gå over nettet og lande innenfor banen.',
        hints: ['Treff fjærballen under hoften'],
      }
    },
    {
      id: 'kroppsoving-6-2-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-3-ex-3',
        number: '2.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Spill forenklet volleyball.',
        subTasks: [
          'Del inn i to lag',
          'Spill over et lavere nett',
          'Tillat at ballen kan studse én gang',
          'Fokuser på å holde ballen i spill'
        ],
        solution: 'Lagene skal klare lange ballvekslinger med god teknikk.',
        hints: ['Kommuniser hvem som tar ballen'],
      }
    },
    {
      id: 'kroppsoving-6-2-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-3-ex-4',
        number: '2.3.4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom fingerslag og baggerslag i volleyball?',
        solution: 'Fingerslag treffer ballen med fingertuppene over hodet og brukes til å sette opp ballen. Baggerslag treffer ballen med underarmene med strukne armer foran kroppen og brukes til å ta imot harde slag.',
        hints: ['Tenk på hvor du treffer ballen'],
      }
    },
    {
      id: 'kroppsoving-6-2-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-2-3-ex-5',
        number: '2.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Spill en badmintonkamp.',
        subTasks: [
          'Spill til 11 poeng',
          'Bytt serve hver gang',
          'Fokuser på å plassere fjærballen smart',
          'Evaluer egen innsats etterpå'
        ],
        solution: 'Du skal vise god teknikk og bevegelse i kampen.',
        hints: ['Vær tålmodig og vent på gode muligheter'],
      }
    }
  ],
};

// ============================================================================
// KAPITTEL 3: FRILUFTSLIV
// ============================================================================

export const CHAPTER_KROPPSOVING_6_3_1: TextbookChapter = {
  id: 'kroppsoving-6-3-1',
  courseId: 'kroppsoving-6',
  chapterNumber: '3.1',
  title: 'Orientering',
  description: 'Lær å bruke kart og kompass i naturen.',
  estimatedMinutes: 55,
  exercises: [],
  competenceGoals: ['planlegge og gjennomføre turer i nærmiljøet'],
  content: [
    {
      id: 'kroppsoving-6-3-1-intro',
      type: 'text',
      content: `## Å finne veien

Orientering handler om å finne veien fra A til B ved hjelp av kart og kompass. Det er både en idrett og en viktig ferdighet i naturen.

### Hvorfor lære orientering?
- Finne veien i ukjent terreng
- Planlegge turer
- Aldri gå deg bort
- Morsom aktivitet i naturen`
    },
    {
      id: 'kroppsoving-6-3-1-def-1',
      type: 'definition',
      title: 'Orienteringskart',
      content: 'Et spesialkart som viser terrenget i detalj med farger og symboler. Skogen er hvit/grønn, åpne områder er gule, vann er blått, og høydeforskjeller vises med brune linjer (koter).'
    },
    {
      id: 'kroppsoving-6-3-1-text-2',
      type: 'text',
      content: `## Lese kart

### Viktige kartsymboler:
- **Sti** - stiplet linje
- **Vei** - hel linje (tykkere = bredere vei)
- **Vann** - blått
- **Bygning** - svart firkant
- **Skog (vanskelig fremkommelig)** - mørk grønn
- **Åpen mark** - gul
- **Høydekurver** - brune linjer

### Målestokk:
1:10 000 betyr at 1 cm på kartet = 100 meter i virkeligheten

### Orientere kartet:
- Legg kartet slik at nord på kartet peker mot nord i virkeligheten
- Bruk kompass eller kjente punkter i terrenget`
    },
    {
      id: 'kroppsoving-6-3-1-text-3',
      type: 'text',
      content: `## Bruke kompass

### Kompasset har:
- **Kompassnål** - rød ende peker alltid mot nord
- **Kompasshus** - kan dreies med grader
- **Anleggslinjer** - parallelle linjer i bunnen
- **Siktelinje** - pil eller merke for retning

### Enkelt kompassbruk:
1. Hold kompasset flatt
2. La nålen roe seg
3. Rød ende peker nord
4. Snu deg til du står vendt mot ønsket retning`
    },
    {
      id: 'kroppsoving-6-3-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-3-1-ex-1',
        number: '3.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken farge har vann på et orienteringskart?',
        solution: 'Vann har blå farge på et orienteringskart. Dette gjelder innsjøer, elver, bekker og myrer.',
        hints: ['Tenk på hvilken farge du forbinder med vann'],
      }
    },
    {
      id: 'kroppsoving-6-3-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-3-1-ex-2',
        number: '3.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nord med kompass.',
        subTasks: [
          'Hold kompasset flatt i hånden',
          'Vent til nålen slutter å svinge',
          'Den røde enden peker mot nord',
          'Finn noe i terrenget som ligger i nord-retning'
        ],
        solution: 'Du skal kunne identifisere nord-retningen med kompasset.',
        hints: ['Stå stille og hold kompasset rolig'],
      }
    },
    {
      id: 'kroppsoving-6-3-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les et orienteringskart over skolegården eller et nærområde.',
        subTasks: [
          'Finn deg selv på kartet',
          'Orienter kartet mot nord',
          'Identifiser 5 punkter på kartet som du kan se i virkeligheten',
          'Gå til et punkt på kartet og tilbake'
        ],
        solution: 'Du skal kunne koble kartet til virkeligheten.',
        hints: ['Start med noe du lett kjenner igjen, som skolebygget'],
      }
    },
    {
      id: 'kroppsoving-6-3-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjennomfør en enkel orienteringsløype.',
        subTasks: [
          'Få utdelt kart med 5-7 poster',
          'Finn alle postene i riktig rekkefølge',
          'Noter koden på hver post',
          'Ta tiden og sammenlign med andre'
        ],
        solution: 'Du skal finne alle postene ved hjelp av kartet.',
        hints: ['Planlegg ruten før du starter'],
      }
    },
    {
      id: 'kroppsoving-6-3-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-3-1-ex-5',
        number: '3.1.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr målestokken 1:10 000?',
        solution: '1 cm på kartet = 100 meter i virkeligheten',
        multipleChoiceOptions: [
          { id: 'a', text: '1 cm på kartet = 10 meter i virkeligheten', isCorrect: false },
          { id: 'b', text: '1 cm på kartet = 100 meter i virkeligheten', isCorrect: true },
          { id: 'c', text: '1 cm på kartet = 1000 meter i virkeligheten', isCorrect: false },
          { id: 'd', text: '1 cm på kartet = 1 meter i virkeligheten', isCorrect: false }
        ],
        hints: ['Del 10 000 på 100 for å få meter'],
      }
    }
  ],
};

export const CHAPTER_KROPPSOVING_6_3_2: TextbookChapter = {
  id: 'kroppsoving-6-3-2',
  courseId: 'kroppsoving-6',
  chapterNumber: '3.2',
  title: 'Friluftsliv hele året',
  description: 'Utforsk aktiviteter i naturen til alle årstider.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['ferdes trygt i naturen til ulike årstider'],
  content: [
    {
      id: 'kroppsoving-6-3-2-intro',
      type: 'text',
      content: `## Friluftsliv i Norge

Norge har fantastisk natur, og vi kan være aktive ute hele året. Ulike årstider gir ulike muligheter for aktivitet.

### Allemannsretten:
I Norge har alle rett til å ferdes i utmark (skog, fjell, strand), så lenge vi oppfører oss hensynsfullt. Dette kalles allemannsretten.`
    },
    {
      id: 'kroppsoving-6-3-2-text-2',
      type: 'text',
      content: `## Vinter-aktiviteter

### Ski:
- Langrenn - flotte løyper i skogen
- Alpint - fart nedover bakkene
- Topptur - gå opp, kjør ned

### Andre vinteraktiviteter:
- Skøyter - på is eller kunstis
- Aking - på kjelke eller akebrett
- Lage snøskulpturer
- Snøballkrig (med vett!)

### Viktig om vinteren:
- Kle deg i lag
- Hold deg varm og tørr
- Pass på isen - sjekk tykkelsen
- Ha refleks i mørket`
    },
    {
      id: 'kroppsoving-6-3-2-text-3',
      type: 'text',
      content: `## Vår og sommer

### Sykling:
- På veier og stier
- Terrengsykling
- Husk hjelm!

### Padling:
- Kano og kajakk
- Alltid bruk redningsvest
- Lær deg grunnleggende teknikk først

### Andre aktiviteter:
- Fottur i fjellet
- Bading (pass på strøm og temperatur)
- Klatring (med sikring)
- Telttur og overnattning ute`
    },
    {
      id: 'kroppsoving-6-3-2-text-4',
      type: 'text',
      content: `## Høst

Høsten er flott for friluftsliv - ikke for varmt, ikke for kaldt!

### Aktiviteter:
- Soppturer - lær å kjenne igjen sopp
- Bærplukking
- Fotturer med høstfarger
- Fiske

### Tips for høsten:
- Regntøy og ekstra skift
- Termos med varm drikke
- Hodelykt når det blir mørkt tidlig
- Fortell noen hvor du går`
    },
    {
      id: 'kroppsoving-6-3-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-3-2-ex-1',
        number: '3.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er allemannsretten?',
        solution: 'Allemannsretten er retten alle har til å ferdes fritt i utmark (skog, fjell, strand) i Norge, så lenge man oppfører seg hensynsfullt og ikke skader naturen.',
        hints: ['Det handler om frihet til å være ute i naturen'],
      }
    },
    {
      id: 'kroppsoving-6-3-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva må du alltid bruke når du padler?',
        solution: 'Redningsvest',
        multipleChoiceOptions: [
          { id: 'a', text: 'Våtdrakt', isCorrect: false },
          { id: 'b', text: 'Redningsvest', isCorrect: true },
          { id: 'c', text: 'Solbriller', isCorrect: false },
          { id: 'd', text: 'Hjelm', isCorrect: false }
        ],
        hints: ['Det handler om sikkerhet i vannet'],
      }
    },
    {
      id: 'kroppsoving-6-3-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Planlegg en tur i nærmiljøet.',
        subTasks: [
          'Velg et mål (en topp, et vann, eller lignende)',
          'Finn ruten på kart',
          'Lag en pakkeliste',
          'Bestem tidspunkt og varighet'
        ],
        solution: 'Planen skal være realistisk og inkludere sikkerhetstiltak.',
        hints: ['Tenk på vær, distanse og hva du trenger'],
      }
    },
    {
      id: 'kroppsoving-6-3-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre ting du bør ha med på en høsttur.',
        solution: 'Tre viktige ting å ha med på høsttur er: 1) Regntøy og ekstra skift (været kan endre seg), 2) Termos med varm drikke, 3) Hodelykt (det blir mørkt tidlig).',
        hints: ['Tenk på høstværet og korte dager'],
      }
    }
  ],
};

// ============================================================================
// KAPITTEL 4: HELSE OG LIVSSTIL
// ============================================================================

export const CHAPTER_KROPPSOVING_6_4_1: TextbookChapter = {
  id: 'kroppsoving-6-4-1',
  courseId: 'kroppsoving-6',
  chapterNumber: '4.1',
  title: 'Trening og helse',
  description: 'Forstå sammenhengen mellom fysisk aktivitet og helse.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: ['forklare hvorfor fysisk aktivitet er viktig for helsen'],
  content: [
    {
      id: 'kroppsoving-6-4-1-intro',
      type: 'text',
      content: `## Hvorfor trene?

Fysisk aktivitet er viktig for at kroppen og hodet skal ha det bra. Når du er aktiv, styrker du muskler og hjerte, får bedre humør og sover bedre.

### Helsedirektoratets anbefalinger:
Barn og unge bør være fysisk aktive i minst 60 minutter hver dag. Aktiviteten bør være variert og inkludere noe som gjør deg andpusten.`
    },
    {
      id: 'kroppsoving-6-4-1-def-1',
      type: 'definition',
      title: 'Kondisjon',
      content: 'Hjertets og lungenes evne til å forsyne musklene med oksygen over tid. God kondisjon betyr at du orker mer uten å bli sliten.'
    },
    {
      id: 'kroppsoving-6-4-1-text-2',
      type: 'text',
      content: `## Ulike typer trening

### Kondisjonstrening:
- Løping, sykling, svømming
- Får hjertet til å slå raskere
- Gir mer utholdenhet

### Styrketrening:
- Push-ups, sit-ups
- Klatring, turn
- Gjør musklene sterkere

### Bevegelighetstrening:
- Tøying og stretching
- Yoga
- Gjør deg mykere og mer smidig

### Koordinasjonstrening:
- Ballspill
- Dans
- Forbedrer balanse og bevegelseskontroll`
    },
    {
      id: 'kroppsoving-6-4-1-text-3',
      type: 'text',
      content: `## Hvordan trening hjelper kroppen

### Hjertet:
- Blir sterkere og pumper mer blod per slag
- Hvilepolsen blir lavere
- Reduserer risiko for hjertesykdom

### Musklene:
- Blir sterkere og større
- Holder leddene stabile
- Gir bedre holdning

### Skjelettet:
- Knoklene blir sterkere
- Forebygger benskjørhet
- Viktig i vekstfasen

### Hodet:
- Bedre konsentrasjon
- Reduserer stress og angst
- Bedre søvn
- Mer energi`
    },
    {
      id: 'kroppsoving-6-4-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-4-1-ex-1',
        number: '4.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvor lenge bør barn være fysisk aktive hver dag ifølge anbefalingene?',
        solution: 'Barn bør være fysisk aktive i minst 60 minutter (1 time) hver dag. Aktiviteten bør være variert og inkludere noe som gjør deg andpusten.',
        hints: ['Det er minst like mye som en skoletime'],
      }
    },
    {
      id: 'kroppsoving-6-4-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-4-1-ex-2',
        number: '4.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva trener kondisjon?',
        solution: 'Løping, sykling og svømming',
        multipleChoiceOptions: [
          { id: 'a', text: 'Sjakk og puslespill', isCorrect: false },
          { id: 'b', text: 'Løping, sykling og svømming', isCorrect: true },
          { id: 'c', text: 'Bare vektløfting', isCorrect: false },
          { id: 'd', text: 'TV-titting', isCorrect: false }
        ],
        hints: ['Tenk på aktiviteter som gjør deg andpusten'],
      }
    },
    {
      id: 'kroppsoving-6-4-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Før en aktivitetsdagbok i en uke.',
        subTasks: [
          'Skriv ned all fysisk aktivitet hver dag',
          'Noter hvor lenge du var aktiv',
          'Skriv ned hvordan du følte deg etterpå',
          'Tell opp og se om du når 60 minutter daglig'
        ],
        solution: 'Dagboken skal vise dine aktiviteter og om du oppfyller anbefalingene.',
        hints: ['Husk også friminutt, gåing til skolen og lek'],
      }
    },
    {
      id: 'kroppsoving-6-4-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn to positive effekter fysisk aktivitet har på hodet/psyken.',
        solution: 'Fysisk aktivitet gir: 1) Bedre konsentrasjon og hukommelse, 2) Redusert stress og angst, 3) Bedre søvn, 4) Mer energi og bedre humør.',
        hints: ['Tenk på hvordan du føler deg etter å ha vært aktiv'],
      }
    },
    {
      id: 'kroppsoving-6-4-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-4-1-ex-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva er kondisjon?',
        solution: 'Kondisjon er hjertets og lungenes evne til å forsyne musklene med oksygen over tid. God kondisjon betyr at du orker mer fysisk aktivitet uten å bli veldig sliten.',
        hints: ['Det handler om hva hjertet og lungene klarer'],
      }
    }
  ],
};

export const CHAPTER_KROPPSOVING_6_4_2: TextbookChapter = {
  id: 'kroppsoving-6-4-2',
  courseId: 'kroppsoving-6',
  chapterNumber: '4.2',
  title: 'Fair play',
  description: 'Lær om fair play, samarbeid og respekt i idrett.',
  estimatedMinutes: 30,
  exercises: [],
  competenceGoals: ['vise respekt for andre i aktiviteter'],
  content: [
    {
      id: 'kroppsoving-6-4-2-intro',
      type: 'text',
      content: `## Hva er fair play?

Fair play betyr å oppføre seg ærlig og respektfullt i idrett og lek. Det handler om mer enn bare å følge reglene - det handler om å behandle andre slik du selv vil bli behandlet.

### Fair play betyr:
- Følge reglene
- Respektere medspillere og motstandere
- Respektere dommere og trenere
- Takle både seier og tap på en god måte
- Inkludere alle`
    },
    {
      id: 'kroppsoving-6-4-2-def-1',
      type: 'definition',
      title: 'Fair play',
      content: 'Å oppføre seg ærlig, respektfullt og sportslig i idrett og aktiviteter. Det betyr å behandle alle med respekt, uavhengig av resultat.'
    },
    {
      id: 'kroppsoving-6-4-2-text-2',
      type: 'text',
      content: `## Samarbeid i lag

### Godt lagspill krever:
- Kommunikasjon - snakk med hverandre
- Oppmuntring - støtt lagkameratene
- Tillit - stol på at andre gjør sitt
- Fleksibilitet - tilpass deg situasjonen

### Når ting går galt:
- Ikke klandre andre
- Se på hva dere kan gjøre bedre sammen
- Fokuser på neste mulighet
- Støtt den som gjorde en feil`
    },
    {
      id: 'kroppsoving-6-4-2-text-3',
      type: 'text',
      content: `## Seier og tap

### Ved seier:
- Vær ydmyk - ikke skryt
- Anerkjenn motstanderens innsats
- Del gleden med laget
- Takk motstanderen for kampen

### Ved tap:
- Gratulér vinneren
- Ikke finn på unnskyldninger
- Se på hva dere kan lære
- Hold hodet høyt - tap skjer alle

### Å være en god taper er like viktig som å være en god vinner!`
    },
    {
      id: 'kroppsoving-6-4-2-text-4',
      type: 'text',
      content: `## Inkludering

Alle skal føle seg velkomne i aktiviteter.

### Hvordan inkludere:
- Inviter alle med
- Tilpass aktiviteten slik at alle kan delta
- Gi alle sjanser til å bidra
- Respekter ulike ferdighetsnivåer
- Ikke le av andres feil

### Mobbefri idrett:
- Snakk pent om og til alle
- Stopp negativ oppførsel
- Si ifra til en voksen om nødvendig`
    },
    {
      id: 'kroppsoving-6-4-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-4-2-ex-1',
        number: '4.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr fair play?',
        solution: 'Fair play betyr å oppføre seg ærlig, respektfullt og sportslig i idrett og aktiviteter. Det handler om å følge reglene, respektere andre og behandle alle med respekt, uavhengig av resultat.',
        hints: ['Det handler om mer enn bare å følge reglene'],
      }
    },
    {
      id: 'kroppsoving-6-4-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-4-2-ex-2',
        number: '4.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre etter å ha vunnet en kamp?',
        solution: 'Takke motstanderen og være ydmyk',
        multipleChoiceOptions: [
          { id: 'a', text: 'Hoppe og skrike av glede', isCorrect: false },
          { id: 'b', text: 'Takke motstanderen og være ydmyk', isCorrect: true },
          { id: 'c', text: 'Ignorere motstanderen', isCorrect: false },
          { id: 'd', text: 'Fortelle alle at du er best', isCorrect: false }
        ],
        hints: ['Tenk på hvordan du ville likt å bli behandlet hvis du tapte'],
      }
    },
    {
      id: 'kroppsoving-6-4-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn tre måter du kan vise fair play på under en fotballkamp.',
        solution: 'Tre måter å vise fair play: 1) Hjelpe opp en spiller som har falt, 2) Innrømme hvis ballen gikk ut av deg, 3) Takke motstanderen etter kampen uansett resultat.',
        hints: ['Tenk på handlinger som viser respekt for andre'],
      }
    },
    {
      id: 'kroppsoving-6-4-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-6-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter: Hva gjør du hvis en lagkamerat stadig blir holdt utenfor?',
        subTasks: [
          'Tenk på situasjonen',
          'Foreslå hva du kan gjøre',
          'Diskuter med en partner',
          'Presenter løsningen for klassen'
        ],
        solution: 'Du bør inkludere vedkommende aktivt, snakke med de andre om å involvere alle, og eventuelt ta det opp med lærer eller trener.',
        hints: ['Tenk på hvordan du ville følt det i den situasjonen'],
      }
    }
  ],
};

// Eksporter alle kapitler
export const KROPPSOVING_6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_6_1_1,
  CHAPTER_KROPPSOVING_6_1_2,
  CHAPTER_KROPPSOVING_6_1_3,
  CHAPTER_KROPPSOVING_6_2_1,
  CHAPTER_KROPPSOVING_6_2_2,
  CHAPTER_KROPPSOVING_6_2_3,
  CHAPTER_KROPPSOVING_6_3_1,
  CHAPTER_KROPPSOVING_6_3_2,
  CHAPTER_KROPPSOVING_6_4_1,
  CHAPTER_KROPPSOVING_6_4_2,
];
