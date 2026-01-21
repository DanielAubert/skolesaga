/**
 * Kroppsøving 8. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kroppsøving på 8. trinn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Trening og fysisk aktivitet
// ============================================================================

export const CHAPTER_KROPPSOVING_8_1_1: TextbookChapter = {
  id: 'kroppsoving-8-1-1',
  courseId: 'kroppsoving-8',
  chapterNumber: '1.1',
  title: 'Grunnleggende treningslære',
  description: 'Lær om treningsprinsipper og hvordan kroppen tilpasser seg trening.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå sammenhengen mellom trening og fysisk form',
  ],
  content: [
    {
      id: 'kroppsoving-8-1-1-intro',
      type: 'text',
      content: `Trening handler om å belaste kroppen slik at den tilpasser seg og blir sterkere. Ved å forstå grunnleggende treningsprinsipper kan du trene smartere og oppnå bedre resultater.`,
    },
    {
      id: 'kroppsoving-8-1-1-def-1',
      type: 'definition',
      title: 'Fysisk form',
      content: `Fysisk form er kroppens evne til å utføre fysisk arbeid. Det inkluderer utholdenhet, styrke, bevegelighet, koordinasjon og hurtighet.`,
    },
    {
      id: 'kroppsoving-8-1-1-text-1',
      type: 'text',
      content: `**Treningsprinsippene**

1. **Belastning**: Kroppen må belastes mer enn den er vant til
2. **Tilpasning**: Kroppen tilpasser seg belastningen over tid
3. **Progresjon**: Øk belastningen gradvis for fortsatt fremgang
4. **Restitusjon**: Kroppen trenger hvile for å bli sterkere
5. **Spesifisitet**: Tren det du vil bli bedre på
6. **Variasjon**: Varier treningen for å unngå stagnasjon`,
    },
    {
      id: 'kroppsoving-8-1-1-text-2',
      type: 'text',
      content: `**De fysiske egenskapene**

- **Utholdenhet**: Evnen til å arbeide over lengre tid
- **Styrke**: Evnen til å utvikle kraft
- **Bevegelighet**: Leddenes bevegelsesutslag
- **Koordinasjon**: Samspill mellom sanser og muskler
- **Hurtighet**: Evnen til å bevege seg raskt`,
    },
    {
      id: 'kroppsoving-8-1-1-tip-1',
      type: 'tip',
      title: 'Start gradvis',
      content: `Hvis du er ny med trening, start rolig og øk gradvis. Kroppen trenger tid til å tilpasse seg, og du unngår skader ved å ta det gradvis.`,
    },
    {
      id: 'kroppsoving-8-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er utholdenhet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av utholdenhet.',
            solution: 'Evnen til å arbeide over lengre tid',
            multipleChoiceOptions: [
              'Evnen til å arbeide over lengre tid',
              'Evnen til å løfte tungt',
              'Evnen til å være smidig',
              'Evnen til å løpe fort',
            ],
          },
        ],
        solution: 'Utholdenhet er evnen til å arbeide over lengre tid uten å bli for sliten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er restitusjon viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor kroppen trenger hvile etter trening.',
            solution: 'For å la kroppen tilpasse seg og bli sterkere',
            multipleChoiceOptions: [
              'For å la kroppen tilpasse seg og bli sterkere',
              'For å spare tid',
              'For å se TV',
              'Det er ikke viktig',
            ],
          },
        ],
        solution: 'Under hvile reparerer og forsterker kroppen seg etter trening. Uten restitusjon kan du bli overtrent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr progresjon i trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på progresjon.',
            solution: 'Å øke belastningen gradvis',
            multipleChoiceOptions: [
              'Å øke belastningen gradvis',
              'Å trene mindre',
              'Å holde belastningen lik',
              'Å bare trene utholdenhet',
            ],
          },
        ],
        solution: 'Progresjon betyr å gradvis øke belastningen slik at kroppen fortsetter å utvikle seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva menes med spesifisitetsprinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar spesifisitetsprinsippet.',
            solution: 'At du blir bedre på det du trener på',
            multipleChoiceOptions: [
              'At du blir bedre på det du trener på',
              'At all trening er lik',
              'At du bare kan trene én ting',
              'At du må trene hver dag',
            ],
          },
        ],
        solution: 'Spesifisitetsprinsippet sier at kroppen tilpasser seg den type trening du gjør. Vil du bli bedre til å løpe, må du løpe.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_8_1_2: TextbookChapter = {
  id: 'kroppsoving-8-1-2',
  courseId: 'kroppsoving-8',
  chapterNumber: '1.2',
  title: 'Oppvarming og uttøying',
  description: 'Lær hvorfor og hvordan du varmer opp og tøyer ut.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjennomføre oppvarming og uttøying',
  ],
  content: [
    {
      id: 'kroppsoving-8-1-2-intro',
      type: 'text',
      content: `Oppvarming forbereder kroppen på aktivitet, mens uttøying hjelper kroppen å restituere. Begge deler er viktige for god trening og skadeforebygging.`,
    },
    {
      id: 'kroppsoving-8-1-2-def-1',
      type: 'definition',
      title: 'Oppvarming',
      content: `Oppvarming er lett aktivitet som øker kroppstemperaturen, pulsen og blodgjennomstrømningen til musklene før hovedaktiviteten.`,
    },
    {
      id: 'kroppsoving-8-1-2-text-1',
      type: 'text',
      content: `**Hvorfor varme opp?**

- Øker blodtilførselen til musklene
- Gjør musklene mer elastiske
- Forbedrer koordinasjonen
- Reduserer risikoen for skader
- Forbereder deg mentalt

**God oppvarming varer 10-15 minutter** og inkluderer:
1. Generell oppvarming (lett jogging, hopp)
2. Dynamisk tøying (beinsving, armrotasjoner)
3. Aktivitetsspesifikk oppvarming`,
    },
    {
      id: 'kroppsoving-8-1-2-text-2',
      type: 'text',
      content: `**Uttøying (stretching)**

**Statisk tøying**: Hold stillingen i 20-30 sekunder
- Best etter trening
- Rolig og kontrollert
- Tøy til du kjenner strekk, ikke smerte

**Dynamisk tøying**: Bevegelse gjennom leddets bevegelsesbane
- Bra før trening
- Kontrollerte bevegelser
- Ligner bevegelsene i aktiviteten`,
    },
    {
      id: 'kroppsoving-8-1-2-warning-1',
      type: 'warning',
      title: 'Aldri tøy kaldt',
      content: `Unngå statisk tøying på kalde muskler. Varm opp først med lett aktivitet før du tøyer ut.`,
    },
    {
      id: 'kroppsoving-8-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor lenge bør en god oppvarming vare?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig varighet for oppvarming.',
            solution: '10-15 minutter',
            multipleChoiceOptions: [
              '10-15 minutter',
              '1-2 minutter',
              '45 minutter',
              'Det trenger ikke oppvarming',
            ],
          },
        ],
        solution: 'En god oppvarming bør vare 10-15 minutter for å forberede kroppen ordentlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på statisk og dynamisk tøying?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen mellom de to tøyingsformene.',
            solution: 'Statisk holder stillingen, dynamisk bruker bevegelse',
            multipleChoiceOptions: [
              'Statisk holder stillingen, dynamisk bruker bevegelse',
              'Det er ingen forskjell',
              'Dynamisk er farlig',
              'Statisk gjøres før trening',
            ],
          },
        ],
        solution: 'Ved statisk tøying holder du stillingen stille, mens dynamisk tøying bruker kontrollerte bevegelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Når passer statisk tøying best?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig tidspunkt for statisk tøying.',
            solution: 'Etter trening',
            multipleChoiceOptions: [
              'Etter trening',
              'Før trening',
              'Aldri',
              'Under trening',
            ],
          },
        ],
        solution: 'Statisk tøying passer best etter trening når musklene er varme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor øker oppvarming blodtilførselen til musklene?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar den fysiologiske responsen under oppvarming.',
            solution: 'Fordi pulsen øker og blodårene utvider seg',
            multipleChoiceOptions: [
              'Fordi pulsen øker og blodårene utvider seg',
              'Fordi hjertet stopper',
              'Fordi du svetter',
              'Det skjer ikke',
            ],
          },
        ],
        solution: 'Under oppvarming øker pulsen og blodårene i musklene utvider seg, slik at mer blod og oksygen kommer frem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Idrett og ballspill
// ============================================================================

export const CHAPTER_KROPPSOVING_8_2_1: TextbookChapter = {
  id: 'kroppsoving-8-2-1',
  courseId: 'kroppsoving-8',
  chapterNumber: '2.1',
  title: 'Ballspill og lagidrett',
  description: 'Lær om ulike ballspill og grunnleggende teknikker.',
  estimatedMinutes: 45,
  competenceGoals: [
    'delta i ulike ballspill og vise fair play',
  ],
  content: [
    {
      id: 'kroppsoving-8-2-1-intro',
      type: 'text',
      content: `Ballspill er en viktig del av kroppsøving og gir mulighet til å utvikle både tekniske ferdigheter, samarbeidsevner og kondisjon.`,
    },
    {
      id: 'kroppsoving-8-2-1-text-1',
      type: 'text',
      content: `**Vanlige ballspill i skolen**

**Invasjonsspill** (mål på begge sider):
- Fotball, håndball, basketball, innebandy

**Nett/veggspill**:
- Volleyball, badminton, tennis

**Slagspill**:
- Kanonball, stikkball

Hvert spill har egne regler, teknikker og taktikker.`,
    },
    {
      id: 'kroppsoving-8-2-1-def-1',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play betyr å spille ærlig, respektere regler og motstandere, og vise god sportsånd uansett resultat. Det handler om å oppføre seg ordentlig både som vinner og taper.`,
    },
    {
      id: 'kroppsoving-8-2-1-text-2',
      type: 'text',
      content: `**Grunnleggende ferdigheter i ballspill**

- **Kaste/skyte**: Presis kraft og retning
- **Ta imot**: Myke hender, følg ballen
- **Føre ball**: Kontroll i bevegelse
- **Pasninger**: Timing og presisjon
- **Bevegelse uten ball**: Plassering og løp

**Samarbeid**: I lagspill er kommunikasjon og samarbeid like viktig som tekniske ferdigheter.`,
    },
    {
      id: 'kroppsoving-8-2-1-tip-1',
      type: 'tip',
      title: 'Se opp',
      content: `Øv på å se opp mens du fører ballen. Da ser du medspillere og motstandere, og kan ta bedre valg.`,
    },
    {
      id: 'kroppsoving-8-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er fair play?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av fair play.',
            solution: 'Å spille ærlig og respektere andre',
            multipleChoiceOptions: [
              'Å spille ærlig og respektere andre',
              'Å vinne for enhver pris',
              'Å bare spille med venner',
              'Å aldri tape',
            ],
          },
        ],
        solution: 'Fair play betyr å spille ærlig, følge reglene og vise respekt for alle, uansett om du vinner eller taper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke idretter er invasjonsspill?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige eksempler på invasjonsspill.',
            solution: 'Fotball og håndball',
            multipleChoiceOptions: [
              'Fotball og håndball',
              'Volleyball og badminton',
              'Lengde og høyde',
              'Svømming og løping',
            ],
          },
        ],
        solution: 'Invasjonsspill har mål på hver side av banen, og lagene prøver å "invadere" motstanderens område. Fotball og håndball er eksempler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er bevegelse uten ball viktig i lagspill?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar betydningen av bevegelse uten ball.',
            solution: 'For å skape rom og pasningsalternativer',
            multipleChoiceOptions: [
              'For å skape rom og pasningsalternativer',
              'For å spare energi',
              'Det er ikke viktig',
              'For å unngå ballen',
            ],
          },
        ],
        solution: 'Ved å bevege seg uten ball skaper du rom, trekker til deg forsvarere og gir pasningsalternativer til medspillere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner god mottaksteknikk i ballspill?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv god teknikk for å ta imot en ball.',
            solution: 'Myke hender som følger ballen',
            multipleChoiceOptions: [
              'Myke hender som følger ballen',
              'Stive armer',
              'Å snu seg bort fra ballen',
              'Å stå helt stille',
            ],
          },
        ],
        solution: 'God mottak krever myke hender som "gir etter" og følger ballen inn, slik at den ikke spretter bort.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_8_2_2: TextbookChapter = {
  id: 'kroppsoving-8-2-2',
  courseId: 'kroppsoving-8',
  chapterNumber: '2.2',
  title: 'Friidrett',
  description: 'Lær om løp, hopp og kast i friidrett.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utføre varierte friidrettsøvelser',
  ],
  content: [
    {
      id: 'kroppsoving-8-2-2-intro',
      type: 'text',
      content: `Friidrett er grunnlaget for mange andre idretter. Det inkluderer løp, hopp og kast - de mest naturlige bevegelsene vi har.`,
    },
    {
      id: 'kroppsoving-8-2-2-text-1',
      type: 'text',
      content: `**Løpsøvelser**

- **Sprint** (60m, 100m): Maksimal fart over kort distanse
- **Mellomdistanse** (800m, 1500m): Kombinasjon av fart og utholdenhet
- **Langdistanse** (3000m+): Utholdenhet over lengre tid
- **Hekk**: Sprint med hinder
- **Stafett**: Lagløp med veksling

**Løpsteknikk**: Høye knær, aktive armer, se fremover, lande på forfoten ved sprint.`,
    },
    {
      id: 'kroppsoving-8-2-2-text-2',
      type: 'text',
      content: `**Hoppøvelser**

- **Lengde**: Hopp så langt som mulig
- **Høyde**: Hopp over en list
- **Tresteg**: Tre hopp i rekkefølge (hopp-steg-hopp)

**Kastøvelser**

- **Kule**: Støt en tung kule
- **Diskos**: Kast en flat skive
- **Spyd**: Kast med spyd
- **Liten ball**: Vanlig i skolen`,
    },
    {
      id: 'kroppsoving-8-2-2-def-1',
      type: 'definition',
      title: 'Tilløp',
      content: `Tilløp er løpet før et hopp eller kast. Et godt tilløp bygger opp fart som overføres til hoppet/kastet. Tilløpet må være kontrollert og treffe satspunktet riktig.`,
    },
    {
      id: 'kroppsoving-8-2-2-tip-1',
      type: 'tip',
      title: 'Start enkelt',
      content: `Begynn med korte tilløp og fokuser på teknikk. Øk tilløpslengden gradvis når teknikken sitter.`,
    },
    {
      id: 'kroppsoving-8-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke tre hovedkategorier har friidrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de tre hovedkategoriene i friidrett.',
            solution: 'Løp, hopp og kast',
            multipleChoiceOptions: [
              'Løp, hopp og kast',
              'Svømming, sykling, løping',
              'Ball, turn, dans',
              'Styrke, utholdenhet, smidighet',
            ],
          },
        ],
        solution: 'Friidrett deles inn i løp, hopp og kast.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er tilløp?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva tilløp er i friidrett.',
            solution: 'Løpet før et hopp eller kast',
            multipleChoiceOptions: [
              'Løpet før et hopp eller kast',
              'Landingen etter et hopp',
              'Oppvarmingen',
              'En type sko',
            ],
          },
        ],
        solution: 'Tilløp er løpet som bygger opp fart før et hopp eller kast. Det er avgjørende for resultatet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner god sprintteknikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv god teknikk for sprint.',
            solution: 'Høye knær og aktive armer',
            multipleChoiceOptions: [
              'Høye knær og aktive armer',
              'Lave knær og slappe armer',
              'Å se ned i bakken',
              'Å lande på hælen',
            ],
          },
        ],
        solution: 'God sprintteknikk har høye knær, aktive armbevegelser, blikk fremover og landing på forfoten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er tresteg i friidrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva tresteg er.',
            solution: 'En hoppøvelse med hopp-steg-hopp',
            multipleChoiceOptions: [
              'En hoppøvelse med hopp-steg-hopp',
              'Tre løpssteg',
              'En kastøvelse',
              'En oppvarmingsøvelse',
            ],
          },
        ],
        solution: 'Tresteg er en teknisk hoppøvelse der utøveren gjør hopp-steg-hopp fra tilløp og lander i sandgrop.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Friluftsliv
// ============================================================================

export const CHAPTER_KROPPSOVING_8_3_1: TextbookChapter = {
  id: 'kroppsoving-8-3-1',
  courseId: 'kroppsoving-8',
  chapterNumber: '3.1',
  title: 'Friluftsliv og orientering',
  description: 'Lær om friluftsliv, kart og kompass.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke kart og kompass til orientering i nærområdet',
  ],
  content: [
    {
      id: 'kroppsoving-8-3-1-intro',
      type: 'text',
      content: `Friluftsliv handler om å være aktiv i naturen. Å kunne orientere seg med kart og kompass er en viktig ferdighet som gir trygghet og frihet i naturen.`,
    },
    {
      id: 'kroppsoving-8-3-1-def-1',
      type: 'definition',
      title: 'Allemannsretten',
      content: `Allemannsretten gir alle rett til å ferdes i norsk natur, uavhengig av hvem som eier grunnen. Med retten følger ansvar for å opptre hensynsfullt og ikke etterlate spor.`,
    },
    {
      id: 'kroppsoving-8-3-1-text-1',
      type: 'text',
      content: `**Lese kart**

- **Målestokk**: 1:50 000 betyr 1 cm på kartet = 500 m i virkeligheten
- **Høydekurver**: Linjer som viser terrengformer
- **Karttegn**: Symboler for skog, vann, bygninger osv.
- **Rutenett**: Koordinatsystem for å finne steder

**Tips**: Hold kartet slik at nord på kartet peker samme vei som nord i terrenget.`,
    },
    {
      id: 'kroppsoving-8-3-1-text-2',
      type: 'text',
      content: `**Bruke kompass**

1. Legg kartet flatt og plasser kompasset på kartet
2. Drei kompasshuset til N peker mot nord på kartet
3. Drei hele kartet til kompassnålen ligger over N
4. Nå er kartet stilt inn - det viser samme retning som terrenget

**Gå på kompassretning**: Sikt mot et punkt i terrenget og gå dit. Gjenta for neste etappe.`,
    },
    {
      id: 'kroppsoving-8-3-1-tip-1',
      type: 'tip',
      title: 'Stopp opp jevnlig',
      content: `Stopp opp og orienter deg regelmessig. Det er lettere å finne ut hvor du er enn å finne tilbake når du har gått deg bort.`,
    },
    {
      id: 'kroppsoving-8-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er allemannsretten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av allemannsretten.',
            solution: 'Retten til å ferdes fritt i norsk natur',
            multipleChoiceOptions: [
              'Retten til å ferdes fritt i norsk natur',
              'En lov som forbyr ferdsel i naturen',
              'En type kart',
              'En fjelltopp',
            ],
          },
        ],
        solution: 'Allemannsretten gir alle rett til å ferdes i naturen, med ansvar for å opptre hensynsfullt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr målestokk 1:50 000?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva målestokken betyr.',
            solution: '1 cm på kartet = 500 m i virkeligheten',
            multipleChoiceOptions: [
              '1 cm på kartet = 500 m i virkeligheten',
              '1 km på kartet = 50 000 m i virkeligheten',
              'Kartet er 50 000 år gammelt',
              '50 000 personer har kartet',
            ],
          },
        ],
        solution: '1:50 000 betyr at 1 enhet på kartet tilsvarer 50 000 enheter i virkeligheten. 1 cm = 50 000 cm = 500 m.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva viser høydekurver på et kart?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva høydekurver viser.',
            solution: 'Terrengformer og høyde',
            multipleChoiceOptions: [
              'Terrengformer og høyde',
              'Veier',
              'Vann',
              'Bygninger',
            ],
          },
        ],
        solution: 'Høydekurver er linjer som forbinder punkter med samme høyde. Tette kurver = bratt, spredte kurver = slakt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør du holde kartet slik at nord på kartet peker mot nord?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor kartet bør stilles inn mot nord.',
            solution: 'Fordi kartet da viser terrenget i riktig retning',
            multipleChoiceOptions: [
              'Fordi kartet da viser terrenget i riktig retning',
              'Fordi det ser penest ut',
              'Det trenger du ikke',
              'Fordi kompasset krever det',
            ],
          },
        ],
        solution: 'Når kartet er "stilt inn" mot nord, samsvarer retningene på kartet med virkeligheten, og du ser hva som ligger til venstre, høyre osv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_8_3_2: TextbookChapter = {
  id: 'kroppsoving-8-3-2',
  courseId: 'kroppsoving-8',
  chapterNumber: '3.2',
  title: 'Trygg ferdsel i naturen',
  description: 'Lær om sikkerhet, bekledning og fjellvettreglene.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og gjennomføre turer i naturen',
  ],
  content: [
    {
      id: 'kroppsoving-8-3-2-intro',
      type: 'text',
      content: `Naturen byr på fantastiske opplevelser, men krever også respekt og forberedelse. God planlegging og riktig utstyr gjør turen trygg og trivelig.`,
    },
    {
      id: 'kroppsoving-8-3-2-text-1',
      type: 'text',
      content: `**Fjellvettreglene** (i kortversjon)

1. Planlegg turen og meld fra hvor du går
2. Tilpass turen etter evne og forhold
3. Ta hensyn til vær- og skredvarsel
4. Vær forberedt på uvær og kulde
5. Ta med nødvendig utstyr
6. Ta trygge veivalg
7. Bruk kart og kompass
8. Vend i tide - det er ingen skam å snu
9. Spar på kreftene og søk ly om nødvendig`,
    },
    {
      id: 'kroppsoving-8-3-2-def-1',
      type: 'definition',
      title: 'Lagprinsippet',
      content: `Lagprinsippet handler om å kle seg i flere lag som kan justeres etter behov: innerlag (fukttransport), mellomlag (isolasjon), ytterlag (vind/vannavstøtende).`,
    },
    {
      id: 'kroppsoving-8-3-2-text-2',
      type: 'text',
      content: `**Viktig utstyr på tur**

- Kart og kompass (evt. GPS med ekstra batteri)
- Ekstra klær og vindtett lag
- Mat og drikke (mer enn du tror du trenger)
- Førstehjelpsutstyr
- Lommelykt/hodelykt
- Fyrstikker/lighter
- Kniv
- Sittunderlag
- Mobiltelefon (ladet)`,
    },
    {
      id: 'kroppsoving-8-3-2-warning-1',
      type: 'warning',
      title: 'Sjekk værmeldingen',
      content: `Været i fjellet kan endre seg raskt. Sjekk alltid yr.no og varsom.no før du drar, og vær forberedt på å snu hvis forholdene blir dårligere.`,
    },
    {
      id: 'kroppsoving-8-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er den viktigste fjellvettregelen om å snu?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig fjellvettregel om å snu.',
            solution: 'Vend i tide - det er ingen skam å snu',
            multipleChoiceOptions: [
              'Vend i tide - det er ingen skam å snu',
              'Du må alltid nå toppen',
              'Aldri snu',
              'Snu bare hvis det regner',
            ],
          },
        ],
        solution: 'Det er ingen skam å snu. Sikkerhet kommer alltid først, og en ny mulighet kommer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er lagprinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva lagprinsippet handler om.',
            solution: 'Å kle seg i flere lag som kan justeres',
            multipleChoiceOptions: [
              'Å kle seg i flere lag som kan justeres',
              'Å gå i gruppe',
              'Å ta med mye mat',
              'En type kart',
            ],
          },
        ],
        solution: 'Lagprinsippet betyr innerlag for fukttransport, mellomlag for varme og ytterlag mot vind/regn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor bør du melde fra om hvor du går på tur?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor det er viktig å melde fra.',
            solution: 'For at noen vet hvor de skal lete hvis noe skjer',
            multipleChoiceOptions: [
              'For at noen vet hvor de skal lete hvis noe skjer',
              'For å skryte',
              'Det trenger du ikke',
              'For å få bedre vær',
            ],
          },
        ],
        solution: 'Hvis noe skjer, vet noen hvor de skal lete. Det kan spare verdifull tid i en nødsituasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er innerlaget i lagprinsippet ment å gjøre?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar funksjonen til innerlaget.',
            solution: 'Transportere fuktighet bort fra huden',
            multipleChoiceOptions: [
              'Transportere fuktighet bort fra huden',
              'Holde deg varm',
              'Stoppe vind',
              'Se fint ut',
            ],
          },
        ],
        solution: 'Innerlaget skal transportere svette bort fra huden slik at du holder deg tørr og varm.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Dans og bevegelse
// ============================================================================

export const CHAPTER_KROPPSOVING_8_4_1: TextbookChapter = {
  id: 'kroppsoving-8-4-1',
  courseId: 'kroppsoving-8',
  chapterNumber: '4.1',
  title: 'Dans og rytme',
  description: 'Lær om dans, rytme og bevegelse til musikk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og øve på ulike danseformer',
  ],
  content: [
    {
      id: 'kroppsoving-8-4-1-intro',
      type: 'text',
      content: `Dans er bevegelse til musikk og et uttrykk for glede, kultur og kreativitet. Dans gir god trening og utvikler koordinasjon, rytme og kroppsbevissthet.`,
    },
    {
      id: 'kroppsoving-8-4-1-text-1',
      type: 'text',
      content: `**Ulike danseformer**

**Folkedans**: Tradisjonelle danser fra Norge og andre land
- Reinlender, polka, halling, springar

**Moderne dans**: Street, hip-hop, jazz, moderne
- Friere bevegelser, ofte improvisasjon

**Selskapsdans**: Pardanser med faste trinn
- Vals, foxtrot, salsa, swing

**Aerobic/fitness**: Dansebasert trening
- Zumba, aerobic, step`,
    },
    {
      id: 'kroppsoving-8-4-1-def-1',
      type: 'definition',
      title: 'Rytme',
      content: `Rytme er et regelmessig mønster av sterke og svake slag i musikken. Å danse i takt betyr å bevege seg i samsvar med musikkens rytme.`,
    },
    {
      id: 'kroppsoving-8-4-1-text-2',
      type: 'text',
      content: `**Grunnleggende danseferdigheter**

- **Telle takt**: Lytt etter pulsen i musikken (1-2-3-4)
- **Grunntrinn**: Enkle steg som gjentas
- **Koordinasjon**: Armer og bein i samspill
- **Romfølelse**: Vite hvor du er i forhold til andre
- **Uttrykk**: Formidle følelser gjennom bevegelse`,
    },
    {
      id: 'kroppsoving-8-4-1-tip-1',
      type: 'tip',
      title: 'Start enkelt',
      content: `Lær grunntrinnene først. Når de sitter, kan du legge til armbevegelser og variasjoner. Det er lettere å bygge på et solid fundament.`,
    },
    {
      id: 'kroppsoving-8-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er folkedans?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av folkedans.',
            solution: 'Tradisjonelle danser fra et land eller område',
            multipleChoiceOptions: [
              'Tradisjonelle danser fra et land eller område',
              'Dans fra Hollywood-filmer',
              'Dans uten musikk',
              'Bare dans for voksne',
            ],
          },
        ],
        solution: 'Folkedans er tradisjonelle danser som har blitt overført gjennom generasjoner i et land eller område.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr det å danse i takt?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva det vil si å danse i takt.',
            solution: 'Å bevege seg i samsvar med musikkens rytme',
            multipleChoiceOptions: [
              'Å bevege seg i samsvar med musikkens rytme',
              'Å danse alene',
              'Å danse så fort som mulig',
              'Å stå stille',
            ],
          },
        ],
        solution: 'Å danse i takt betyr at bevegelsene følger musikkens puls og rytme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke av disse er norske folkedanser?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg eksempler på norske folkedanser.',
            solution: 'Reinlender og halling',
            multipleChoiceOptions: [
              'Reinlender og halling',
              'Salsa og tango',
              'Hip-hop og breakdance',
              'Vals og foxtrot',
            ],
          },
        ],
        solution: 'Reinlender, halling, springar og polka er eksempler på norske folkedanser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er romfølelse viktig i dans?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar betydningen av romfølelse i dans.',
            solution: 'For å vite hvor du er i forhold til andre og unngå kollisjoner',
            multipleChoiceOptions: [
              'For å vite hvor du er i forhold til andre og unngå kollisjoner',
              'For å finne riktig rom',
              'For å høre musikken bedre',
              'Det er ikke viktig',
            ],
          },
        ],
        solution: 'God romfølelse gjør at du vet hvor du er i forhold til andre dansere og kan bevege deg uten å kollidere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_8_4_2: TextbookChapter = {
  id: 'kroppsoving-8-4-2',
  courseId: 'kroppsoving-8',
  chapterNumber: '4.2',
  title: 'Turn og akrobatikk',
  description: 'Lær grunnleggende turn og akrobatiske øvelser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utføre grunnleggende turnøvelser',
  ],
  content: [
    {
      id: 'kroppsoving-8-4-2-intro',
      type: 'text',
      content: `Turn og akrobatikk utvikler styrke, smidighet, balanse og kroppsbeherskelse. Det gir også mestringsfølelse når du lærer nye øvelser.`,
    },
    {
      id: 'kroppsoving-8-4-2-text-1',
      type: 'text',
      content: `**Grunnleggende turnøvelser**

**Ruller**:
- Forlengsrulle: Rull fremover fra stående
- Baklengsrulle: Rull bakover fra sittende

**Stående øvelser**:
- Hodestående: Balanse på hodet med støtte
- Håndstående: Balanse på hendene (mot vegg)

**Hopp**:
- Strakkhopp, samlingshopp, spretthopp`,
    },
    {
      id: 'kroppsoving-8-4-2-def-1',
      type: 'definition',
      title: 'Kroppsspenning',
      content: `Kroppsspenning er når du spenner musklene for å holde kroppen strak og kontrollert. Det er grunnleggende for god teknikk i turn.`,
    },
    {
      id: 'kroppsoving-8-4-2-text-2',
      type: 'text',
      content: `**Sikkerhet i turn**

1. **Bruk matter**: Alltid tykke matter under
2. **Oppvarming**: Varm opp grundig først
3. **Progresjon**: Lær enkle øvelser før vanskelige
4. **Hjelp**: Ha en medelev eller lærer som sikrer
5. **Konsentrasjon**: Vær fokusert under øvelsene

**Hjelpergrep**: Den som hjelper holder tak slik at utøveren føler seg trygg og kan reddes hvis noe går galt.`,
    },
    {
      id: 'kroppsoving-8-4-2-warning-1',
      type: 'warning',
      title: 'Aldri uten sikring',
      content: `Prøv aldri nye eller vanskelige øvelser uten proper sikring (matter, hjelper). Skader kan være alvorlige.`,
    },
    {
      id: 'kroppsoving-8-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er kroppsspenning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av kroppsspenning.',
            solution: 'Å spenne musklene for kontroll',
            multipleChoiceOptions: [
              'Å spenne musklene for kontroll',
              'Å være nervøs',
              'Å være slapp',
              'En type matter',
            ],
          },
        ],
        solution: 'Kroppsspenning betyr å aktivt spenne musklene for å holde kroppen strak og kontrollert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er matter viktig i turn?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor matter er nødvendig i turn.',
            solution: 'For å dempe fall og forebygge skader',
            multipleChoiceOptions: [
              'For å dempe fall og forebygge skader',
              'For at det skal se fint ut',
              'For å gjøre øvelsene vanskeligere',
              'Det trenger ikke matter',
            ],
          },
        ],
        solution: 'Matter demper fall og reduserer risikoen for skader hvis du faller eller mislykkes med en øvelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en forlengsrulle?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva en forlengsrulle er.',
            solution: 'En rulle fremover fra stående',
            multipleChoiceOptions: [
              'En rulle fremover fra stående',
              'En rulle bakover',
              'En rulle sidelengs',
              'Å stå stille',
            ],
          },
        ],
        solution: 'En forlengsrulle er når du ruller fremover fra stående stilling, over hodet og opp igjen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er progresjon viktig i turn?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor progresjon er viktig i turn.',
            solution: 'For å lære grunnlaget før vanskelige øvelser',
            multipleChoiceOptions: [
              'For å lære grunnlaget før vanskelige øvelser',
              'For å spare tid',
              'For å imponere andre',
              'Det er ikke viktig',
            ],
          },
        ],
        solution: 'Ved å lære enkle øvelser først bygger du opp styrke, teknikk og selvtillit som trengs for vanskeligere øvelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Helse og livsstil
// ============================================================================

export const CHAPTER_KROPPSOVING_8_5_1: TextbookChapter = {
  id: 'kroppsoving-8-5-1',
  courseId: 'kroppsoving-8',
  chapterNumber: '5.1',
  title: 'Fysisk aktivitet og helse',
  description: 'Lær om sammenhengen mellom fysisk aktivitet og helse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå betydningen av fysisk aktivitet for helsen',
  ],
  content: [
    {
      id: 'kroppsoving-8-5-1-intro',
      type: 'text',
      content: `Fysisk aktivitet er avgjørende for god helse. Regelmessig aktivitet forebygger sykdom, styrker kroppen og gir bedre humør.`,
    },
    {
      id: 'kroppsoving-8-5-1-text-1',
      type: 'text',
      content: `**Anbefalinger for ungdom**

- **60 minutter** aktivitet daglig (moderat til høy intensitet)
- **Styrketrening** minst 3 ganger i uken
- **Reduser stillesitting** - ta pauser fra skjerm og lesing

Aktiviteten kan deles opp i flere økter og inkluderer lek, idrett, aktiv transport og kroppsøving.`,
    },
    {
      id: 'kroppsoving-8-5-1-text-2',
      type: 'text',
      content: `**Helsegevinster av fysisk aktivitet**

**Fysisk**:
- Sterkere hjerte og lunger
- Bedre muskler og skjelett
- Lettere å holde normal vekt
- Mindre risiko for livsstilssykdommer

**Psykisk**:
- Bedre humør og selvbilde
- Mindre stress og angst
- Bedre søvn
- Økt konsentrasjon`,
    },
    {
      id: 'kroppsoving-8-5-1-def-1',
      type: 'definition',
      title: 'Moderat intensitet',
      content: `Moderat intensitet er aktivitet som øker pulsen og gjør deg varm, men du kan fortsatt føre en samtale. Eksempler: rask gange, sykling, svømming.`,
    },
    {
      id: 'kroppsoving-8-5-1-tip-1',
      type: 'tip',
      title: 'Finn noe du liker',
      content: `Det viktigste er å finne aktiviteter du trives med. Da er det lettere å være aktiv regelmessig.`,
    },
    {
      id: 'kroppsoving-8-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mye bør ungdom være fysisk aktive daglig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig anbefalt aktivitetsnivå for ungdom.',
            solution: '60 minutter',
            multipleChoiceOptions: [
              '60 minutter',
              '10 minutter',
              '5 timer',
              'Ingen anbefaling',
            ],
          },
        ],
        solution: 'Ungdom anbefales minst 60 minutter fysisk aktivitet daglig med moderat til høy intensitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er moderat intensitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva moderat intensitet innebærer.',
            solution: 'Aktivitet som øker pulsen, men du kan snakke',
            multipleChoiceOptions: [
              'Aktivitet som øker pulsen, men du kan snakke',
              'Å sitte stille',
              'Å løpe så fort du kan',
              'Å sove',
            ],
          },
        ],
        solution: 'Ved moderat intensitet øker pulsen og du blir varm, men du kan fortsatt føre en samtale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken psykisk gevinst kan fysisk aktivitet gi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en psykisk helsegevinst av fysisk aktivitet.',
            solution: 'Bedre humør og selvbilde',
            multipleChoiceOptions: [
              'Bedre humør og selvbilde',
              'Mer stress',
              'Dårligere søvn',
              'Ingen gevinst',
            ],
          },
        ],
        solution: 'Fysisk aktivitet frigjør endorfiner og kan gi bedre humør, selvbilde, søvn og konsentrasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig å redusere stillesitting?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor stillesitting bør reduseres.',
            solution: 'Fordi langvarig stillesitting øker risiko for livsstilssykdommer',
            multipleChoiceOptions: [
              'Fordi langvarig stillesitting øker risiko for livsstilssykdommer',
              'Fordi stoler er dyre',
              'Det er ikke viktig',
              'Bare for voksne',
            ],
          },
        ],
        solution: 'Langvarig stillesitting øker risikoen for overvekt, diabetes og hjerte-karsykdommer, uavhengig av om du trener ellers.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_8_5_2: TextbookChapter = {
  id: 'kroppsoving-8-5-2',
  courseId: 'kroppsoving-8',
  chapterNumber: '5.2',
  title: 'Kropp og selvbilde',
  description: 'Lær om positivt forhold til egen kropp og prestasjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over egen utvikling og egen kropp',
  ],
  content: [
    {
      id: 'kroppsoving-8-5-2-intro',
      type: 'text',
      content: `Alle kropper er forskjellige, og det er helt normalt. Et godt forhold til egen kropp handler om å sette pris på det kroppen kan gjøre, ikke bare hvordan den ser ut.`,
    },
    {
      id: 'kroppsoving-8-5-2-text-1',
      type: 'text',
      content: `**Kroppslige endringer i puberteten**

I puberteten skjer store endringer med kroppen:
- Vekstspurt (du vokser raskt)
- Kroppsform endres
- Muskler utvikles
- Koordinasjonen kan midlertidig bli dårligere

Disse endringene skjer i ulikt tempo for alle. Det er helt normalt at noen utvikler seg tidligere eller senere enn andre.`,
    },
    {
      id: 'kroppsoving-8-5-2-def-1',
      type: 'definition',
      title: 'Kroppspositivitet',
      content: `Kroppspositivitet handler om å akseptere og verdsette kroppen din for det den er og kan gjøre, uavhengig av utseende.`,
    },
    {
      id: 'kroppsoving-8-5-2-text-2',
      type: 'text',
      content: `**Et sunt forhold til kropp og trening**

- **Fokuser på funksjon**: Hva kroppen kan gjøre, ikke bare utseende
- **Sammenlign deg med deg selv**: Din fremgang, ikke andres
- **Vær tålmodig**: Endringer tar tid
- **Ha det gøy**: Finn aktiviteter du liker
- **Hvile er viktig**: Kroppen trenger tid til å restituere

Sosiale medier viser ofte urealistiske kroppsidealer. Husk at bildene ofte er redigerte.`,
    },
    {
      id: 'kroppsoving-8-5-2-note-1',
      type: 'note',
      title: 'Alle er forskjellige',
      content: `Noen er høye, noen er lave. Noen har rask stoffskifte, andre langsommere. Disse forskjellene er genetiske og helt normale. Det viktigste er å ta vare på kroppen din.`,
    },
    {
      id: 'kroppsoving-8-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er normalt i puberteten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva som er normalt i puberteten.',
            solution: 'At kroppen endrer seg i ulikt tempo fra person til person',
            multipleChoiceOptions: [
              'At kroppen endrer seg i ulikt tempo fra person til person',
              'At alle utvikler seg likt',
              'At ingenting endrer seg',
              'At du slutter å vokse',
            ],
          },
        ],
        solution: 'Det er helt normalt at noen utvikler seg tidlig og andre sent. Alle har sitt eget tempo.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr kroppspositivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva kroppspositivitet handler om.',
            solution: 'Å akseptere og verdsette kroppen din',
            multipleChoiceOptions: [
              'Å akseptere og verdsette kroppen din',
              'Å ha en perfekt kropp',
              'Å trene hele tiden',
              'Å sammenligne deg med andre',
            ],
          },
        ],
        solution: 'Kroppspositivitet handler om å sette pris på kroppen for det den er og kan gjøre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor kan koordinasjonen bli dårligere i puberteten?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar årsaken til midlertidig dårligere koordinasjon.',
            solution: 'Fordi kroppen vokser raskt og du må venne deg til nye proporsjoner',
            multipleChoiceOptions: [
              'Fordi kroppen vokser raskt og du må venne deg til nye proporsjoner',
              'Fordi du trener mindre',
              'Fordi du blir eldre',
              'Det skjer ikke',
            ],
          },
        ],
        solution: 'Rask vekst gjør at hjernen må tilpasse seg nye kroppsproportioner, noe som midlertidig kan påvirke koordinasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-8-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-8-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor bør du være kritisk til kroppsidealer på sosiale medier?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor kritisk tenkning er viktig her.',
            solution: 'Fordi bildene ofte er redigerte og viser urealistiske idealer',
            multipleChoiceOptions: [
              'Fordi bildene ofte er redigerte og viser urealistiske idealer',
              'Fordi alle på sosiale medier lyver',
              'Du bør ikke være kritisk',
              'Fordi det ikke finnes bilder på sosiale medier',
            ],
          },
        ],
        solution: 'Bilder på sosiale medier er ofte redigerte, filtrerte og viser bare utvalgte øyeblikk. De representerer ikke virkeligheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const KROPPSOVING_8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_8_1_1,
  CHAPTER_KROPPSOVING_8_1_2,
  CHAPTER_KROPPSOVING_8_2_1,
  CHAPTER_KROPPSOVING_8_2_2,
  CHAPTER_KROPPSOVING_8_3_1,
  CHAPTER_KROPPSOVING_8_3_2,
  CHAPTER_KROPPSOVING_8_4_1,
  CHAPTER_KROPPSOVING_8_4_2,
  CHAPTER_KROPPSOVING_8_5_1,
  CHAPTER_KROPPSOVING_8_5_2,
];
