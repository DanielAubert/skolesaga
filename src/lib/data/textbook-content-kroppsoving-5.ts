/**
 * Kroppsøving 5. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kroppsøving på 5. trinn
 * Fokus på grunnleggende bevegelser, ballspill, friluftsliv og helse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Grunnleggende bevegelser
// ============================================================================

export const CHAPTER_KROPPSOVING_5_1_1: TextbookChapter = {
  id: 'kroppsoving-5-1-1',
  courseId: 'kroppsoving-5',
  chapterNumber: '1.1',
  title: 'Grunnleggende bevegelser',
  description: 'Lær om de viktigste bevegelsene kroppen kan gjøre.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og gjennomføre leker og bevegelsesaktiviteter',
  ],
  content: [
    {
      id: 'kroppsoving-5-1-1-intro',
      type: 'text',
      content: `Kroppen din er laget for å bevege seg! Hver dag bruker vi mange forskjellige bevegelser uten å tenke over det. Når vi løper, hopper, kaster og klatrer, trener vi kroppen vår til å bli sterkere og mer koordinert.`,
    },
    {
      id: 'kroppsoving-5-1-1-def-1',
      type: 'definition',
      title: 'Grunnleggende bevegelser',
      content: `Grunnleggende bevegelser er de viktigste måtene kroppen kan bevege seg på. Disse bevegelsene er byggesteinene for all fysisk aktivitet, enten det er lek, idrett eller hverdagslige aktiviteter.`,
    },
    {
      id: 'kroppsoving-5-1-1-text-1',
      type: 'text',
      content: `**Bevegelser med hele kroppen**

**Gå og løpe**: De vanligste bevegelsene
- Gå: Rolig tempo, alltid en fot i bakken
- Løpe: Raskere tempo, begge føttene kan være i lufta
- Sidelengs gange og løping trener koordinasjon

**Hoppe og lande**: Få kroppen opp i lufta
- Hoppe med samlede bein
- Hoppe med ett bein (hinke)
- Hoppe langt eller høyt
- Lande mykt med bøyde knær

**Klatre**: Bevege seg oppover
- Bruk både armer og bein
- Tre punkts-regelen: Alltid tre kontaktpunkter`,
    },
    {
      id: 'kroppsoving-5-1-1-text-2',
      type: 'text',
      content: `**Bevegelser med armer og hender**

**Kaste**: Sende noe fra deg
- Kaste med én hånd (som i håndball)
- Kaste med to hender (som i basketball)
- Trille en ball langs bakken

**Gripe og fange**: Ta imot noe
- Hold øynene på gjenstanden
- Beveg hendene mot gjenstanden
- Lukk hendene i riktig øyeblikk

**Slå og sparke**: Treffe noe med kraft
- Slå med hånd eller kølle
- Sparke med foten (som i fotball)
- Timing er viktig for å treffe godt`,
    },
    {
      id: 'kroppsoving-5-1-1-tip-1',
      type: 'tip',
      title: 'Øv på begge sider',
      content: `Prøv å bruke både høyre og venstre side av kroppen. Hvis du alltid kaster med høyre hånd, prøv også å øve med venstre. Det gjør deg mer allsidig!`,
    },
    {
      id: 'kroppsoving-5-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er grunnleggende bevegelser?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på grunnleggende bevegelser.',
            solution: 'De viktigste måtene kroppen kan bevege seg på',
            multipleChoiceOptions: [
              'De viktigste måtene kroppen kan bevege seg på',
              'Bevegelser man bare kan gjøre som voksen',
              'Bevegelser man trenger utstyr til',
              'Bevegelser som bare brukes i idrett',
            ],
          },
        ],
        solution: 'Grunnleggende bevegelser er byggesteinene for all fysisk aktivitet, som å gå, løpe, hoppe og kaste.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen på å gå og å løpe?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som best beskriver forskjellen.',
            solution: 'Når du går har du alltid en fot i bakken, når du løper kan begge være i lufta',
            multipleChoiceOptions: [
              'Når du går har du alltid en fot i bakken, når du løper kan begge være i lufta',
              'Å gå er raskere enn å løpe',
              'Det er ingen forskjell',
              'Man bruker bare armene når man løper',
            ],
          },
        ],
        solution: 'Når vi går, har vi alltid minst én fot i kontakt med bakken. Når vi løper, er det øyeblikk der begge føttene er i lufta.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan bør du lande etter et hopp?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig landingsteknikk.',
            solution: 'Med bøyde knær for å dempe landingen',
            multipleChoiceOptions: [
              'Med bøyde knær for å dempe landingen',
              'Med strake bein',
              'På hælene',
              'Med ett bein',
            ],
          },
        ],
        solution: 'Ved å lande med bøyde knær, fordeles kraften over tid og leddene skånes. Dette kalles å lande mykt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er viktig når du skal fange en ball?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det viktigste tipset for å fange en ball.',
            solution: 'Hold øynene på ballen hele tiden',
            multipleChoiceOptions: [
              'Hold øynene på ballen hele tiden',
              'Lukk øynene før ballen kommer',
              'Hold armene helt stille',
              'Se på den som kastet',
            ],
          },
        ],
        solution: 'Ved å følge ballen med øynene, kan du beregne hvor den vil lande og plassere hendene på rett sted.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_5_1_2: TextbookChapter = {
  id: 'kroppsoving-5-1-2',
  courseId: 'kroppsoving-5',
  chapterNumber: '1.2',
  title: 'Balanse og smidighet',
  description: 'Lær hvordan du kan bli bedre til å holde balansen og bevege deg smidig.',
  estimatedMinutes: 40,
  competenceGoals: [
    'øve på og utvikle sammensatte bevegelser',
  ],
  content: [
    {
      id: 'kroppsoving-5-1-2-intro',
      type: 'text',
      content: `Har du prøvd å stå på ett bein med lukkede øyne? Det er vanskeligere enn det høres ut! Balanse handler om å holde kroppen stabil, og smidighet handler om hvor lett kroppen din kan bevege seg. Begge deler kan trenes!`,
    },
    {
      id: 'kroppsoving-5-1-2-def-1',
      type: 'definition',
      title: 'Balanse',
      content: `Balanse er evnen til å holde kroppen stabil og kontrollert. Det finnes to typer: statisk balanse (stå stille) og dynamisk balanse (balanse i bevegelse).`,
    },
    {
      id: 'kroppsoving-5-1-2-def-2',
      type: 'definition',
      title: 'Smidighet',
      content: `Smidighet er evnen til å bevege leddene gjennom hele sitt bevegelsesområde. God smidighet gjør at du kan bøye og strekke kroppen lett.`,
    },
    {
      id: 'kroppsoving-5-1-2-text-1',
      type: 'text',
      content: `**Balanse**

**Statisk balanse** - stå stille:
- Stå på ett bein
- Stå på tå
- Stå på en strek eller benk
- Jo mindre flate du står på, jo vanskeligere

**Dynamisk balanse** - i bevegelse:
- Gå på en strek
- Gå på en bom
- Hoppe fra stein til stein
- Sykle og løpe på sparkesykkel

**Tips for bedre balanse**:
- Fest blikket på et punkt foran deg
- Strekk ut armene for bedre stabilitet
- Spenn magemusklene
- Øv jevnlig - balanse blir bedre med trening!`,
    },
    {
      id: 'kroppsoving-5-1-2-text-2',
      type: 'text',
      content: `**Smidighet**

**Hvorfor er smidighet viktig?**
- Gjør bevegelser lettere
- Forebygger skader
- Gjør deg bedre i idrett
- Føles godt i kroppen

**Tøyeøvelser**:
- Strekk armene over hodet
- Bøy deg ned mot tærne
- Vri overkroppen
- Tøy lårene og leggene

**Husk**:
- Tøy sakte og rolig
- Ikke hoppe i tøyningen
- Hold 15-30 sekunder
- Det skal strekke, men ikke gjøre vondt`,
    },
    {
      id: 'kroppsoving-5-1-2-tip-1',
      type: 'tip',
      title: 'Tøy etter aktivitet',
      content: `Musklene tøyes best når de er varme. Gjør tøyeøvelser etter at du har løpt eller lekt, ikke når kroppen er kald.`,
    },
    {
      id: 'kroppsoving-5-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er statisk balanse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på statisk balanse.',
            solution: 'Å holde balansen mens du står stille',
            multipleChoiceOptions: [
              'Å holde balansen mens du står stille',
              'Å holde balansen mens du beveger deg',
              'Å hoppe',
              'Å løpe fort',
            ],
          },
        ],
        solution: 'Statisk balanse betyr å holde kroppen stabil når du står i ro, for eksempel når du står på ett bein.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er smidighet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av smidighet.',
            solution: 'Evnen til å bøye og strekke kroppen lett',
            multipleChoiceOptions: [
              'Evnen til å bøye og strekke kroppen lett',
              'Evnen til å løpe fort',
              'Evnen til å hoppe høyt',
              'Evnen til å løfte tungt',
            ],
          },
        ],
        solution: 'Smidighet handler om hvor godt leddene dine kan bevege seg, slik at du kan bøye og strekke kroppen lett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kan du gjøre for å holde balansen bedre?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det beste tipset for bedre balanse.',
            solution: 'Feste blikket på et punkt foran deg',
            multipleChoiceOptions: [
              'Feste blikket på et punkt foran deg',
              'Lukke øynene',
              'Se ned på føttene',
              'Bevege hodet fra side til side',
            ],
          },
        ],
        solution: 'Ved å feste blikket på et fast punkt foran deg, blir det lettere for hjernen å holde kroppen stabil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor lenge bør du holde en tøyning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig tid for en tøyning.',
            solution: '15-30 sekunder',
            multipleChoiceOptions: [
              '15-30 sekunder',
              '1 sekund',
              '5 minutter',
              'Man trenger ikke holde tøyningen',
            ],
          },
        ],
        solution: 'En god tøyning bør holdes i 15-30 sekunder for at musklene skal få tid til å strekke seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Ballspill
// ============================================================================

export const CHAPTER_KROPPSOVING_5_2_1: TextbookChapter = {
  id: 'kroppsoving-5-2-1',
  courseId: 'kroppsoving-5',
  chapterNumber: '2.1',
  title: 'Fotball',
  description: 'Lær grunnleggende fotballferdigheter og regler.',
  estimatedMinutes: 45,
  competenceGoals: [
    'delta i ulike ballspill og samarbeide med andre',
  ],
  content: [
    {
      id: 'kroppsoving-5-2-1-intro',
      type: 'text',
      content: `Fotball er verdens mest populære idrett! I Norge spiller over 100 000 barn fotball. Det er en morsom lagidrett der du lærer å samarbeide med andre og utvikle mange ulike ferdigheter.`,
    },
    {
      id: 'kroppsoving-5-2-1-def-1',
      type: 'definition',
      title: 'Fotball',
      content: `Fotball er en lagidrett der to lag med 11 spillere (eller færre i barnefotball) prøver å score mål ved å sparke ballen inn i motstanderens mål. Man bruker føttene og hodet, men ikke hendene (unntatt keeperen).`,
    },
    {
      id: 'kroppsoving-5-2-1-text-1',
      type: 'text',
      content: `**Grunnleggende teknikker**

**Føring av ball (drible)**:
- Hold ballen nær føttene
- Bruk innsiden av foten
- Se opp av og til for å se hvor du går
- Øv med begge føtter

**Pasning**:
- Innsidepasning: Sikker og presis, brukes mest
- Vristrask: Kraftig og lang pasning
- Plasser støttefoten ved siden av ballen
- Treff ballen med riktig del av foten

**Mottak av ball**:
- Møt ballen aktivt
- Demp ballen med foten
- Få ballen under kontroll raskt`,
    },
    {
      id: 'kroppsoving-5-2-1-text-2',
      type: 'text',
      content: `**Viktige regler**

**Offside**: Du kan ikke stå nærmere motstanderens mål enn siste forsvarsspiller når ballen spilles mot deg.

**Frispark**: Gis ved regelbrudd som å dytte eller holde en motspiller.

**Straffespark**: Frispark innenfor straffefeltet skytes fra 11-metersmerket.

**Innkast**: Når ballen går ut på sidelinjen, kastes den inn med begge hender over hodet.

**Keeper**: Kan bruke hendene innenfor sitt eget felt.

**I barnefotball spilles ofte med**:
- Færre spillere (5 mot 5 eller 7 mot 7)
- Mindre bane og mål
- Kortere kamptid`,
    },
    {
      id: 'kroppsoving-5-2-1-tip-1',
      type: 'tip',
      title: 'Spill med hodet oppe',
      content: `Prøv å se opp mens du fører ballen. Da ser du lagkameratene dine og kan spille gode pasninger. Det krever øvelse, men gjør deg til en mye bedre spiller!`,
    },
    {
      id: 'kroppsoving-5-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilken del av foten brukes mest til pasninger?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig del av foten.',
            solution: 'Innsiden av foten',
            multipleChoiceOptions: [
              'Innsiden av foten',
              'Tåspissen',
              'Hælen',
              'Utsiden av foten',
            ],
          },
        ],
        solution: 'Innsiden av foten gir best kontroll og presisjon på pasninger, og er derfor mest brukt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er offside i fotball?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på offside.',
            solution: 'Å stå nærmere målet enn siste forsvarsspiller når ballen spilles',
            multipleChoiceOptions: [
              'Å stå nærmere målet enn siste forsvarsspiller når ballen spilles',
              'Å sparke ballen ut av banen',
              'Å dytte en motspiller',
              'Å score mål',
            ],
          },
        ],
        solution: 'Offside betyr at du står for langt fremme når lagkameraten din spiller ballen til deg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvem kan bruke hendene i fotball?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hvem som kan bruke hendene.',
            solution: 'Keeperen, men bare innenfor sitt eget felt',
            multipleChoiceOptions: [
              'Keeperen, men bare innenfor sitt eget felt',
              'Alle spillere',
              'Ingen',
              'Forsvarerne',
            ],
          },
        ],
        solution: 'Bare keeperen kan bruke hendene, og bare når han eller hun er innenfor sitt eget straffefelt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan gjøres et innkast i fotball?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig måte å gjøre innkast på.',
            solution: 'Med begge hender over hodet',
            multipleChoiceOptions: [
              'Med begge hender over hodet',
              'Med én hånd',
              'Med foten',
              'Man kan kaste som man vil',
            ],
          },
        ],
        solution: 'Innkast gjøres med begge hender over hodet, og begge føttene skal være på bakken eller bak sidelinjen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_5_2_2: TextbookChapter = {
  id: 'kroppsoving-5-2-2',
  courseId: 'kroppsoving-5',
  chapterNumber: '2.2',
  title: 'Håndball og basketball',
  description: 'Lær grunnleggende ferdigheter i håndball og basketball.',
  estimatedMinutes: 45,
  competenceGoals: [
    'delta i ulike ballspill og samarbeide med andre',
  ],
  content: [
    {
      id: 'kroppsoving-5-2-2-intro',
      type: 'text',
      content: `Håndball og basketball er to populære idretter der du bruker hendene. Begge er raske og spennende lagspill som krever godt samarbeid. I Norge er håndball spesielt populært, og landslaget vårt har vunnet mange internasjonale mesterskap!`,
    },
    {
      id: 'kroppsoving-5-2-2-def-1',
      type: 'definition',
      title: 'Håndball',
      content: `Håndball er en lagidrett der to lag med 7 spillere (inkludert keeper) prøver å kaste ballen inn i motstanderens mål. Man dribler og kaster med hendene.`,
    },
    {
      id: 'kroppsoving-5-2-2-def-2',
      type: 'definition',
      title: 'Basketball',
      content: `Basketball er en lagidrett der to lag med 5 spillere prøver å kaste ballen gjennom motstanderens kurv. Kurven henger 3,05 meter over bakken.`,
    },
    {
      id: 'kroppsoving-5-2-2-text-1',
      type: 'text',
      content: `**Håndball - grunnleggende**

**Dribling**:
- Sprette ballen i bakken med én hånd
- Hold ballen foran deg og litt til siden
- Se opp for å finne lagkamerater

**Kast og pasning**:
- Overarmskast: Arm bak hodet, bruk hele kroppen
- Stuss: Kast ballen i bakken så den spretter til mottaker
- Brystpasning: Med to hender fra brystet

**Mottak**:
- Møt ballen med hendene
- Se ballen inn i hendene
- Ha bløte fingre som demper

**Regler**:
- Maks 3 skritt med ballen uten å drible
- Kan holde ballen i maks 3 sekunder
- Kan ikke gå inn i målfeltet (rundt målet)`,
    },
    {
      id: 'kroppsoving-5-2-2-text-2',
      type: 'text',
      content: `**Basketball - grunnleggende**

**Dribling**:
- Sprette ballen med fingertuppene
- Bruk håndleddet, ikke hele armen
- Hold ballen lav og nær kroppen
- Kan bytte hender

**Pasning**:
- Brystpasning: Rett frem med to hender
- Stusspasning: Spretter i bakken
- Overhead-pasning: Over hodet

**Skudd**:
- Set shot: Med føttene i bakken
- Lay-up: Skudd mens du beveger deg mot kurven
- Skyt med én hånd, støtte med den andre

**Regler**:
- Må drible når du beveger deg med ballen
- Kan ikke drible med to hender
- Kan ikke løpe med ballen uten å drible (ganging)`,
    },
    {
      id: 'kroppsoving-5-2-2-tip-1',
      type: 'tip',
      title: 'Tren på grunnteknikkene',
      content: `Øv mye på dribling og pasning. Disse ferdighetene er viktige i begge idrettene. Prøv å drible mens du går, løper, og ser opp fra ballen.`,
    },
    {
      id: 'kroppsoving-5-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange skritt kan du ta med ballen i håndball?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall skritt.',
            solution: 'Maks 3 skritt',
            multipleChoiceOptions: [
              'Maks 3 skritt',
              'Så mange du vil',
              'Maks 10 skritt',
              'Du kan ikke gå med ballen',
            ],
          },
        ],
        solution: 'I håndball kan du ta maks 3 skritt med ballen uten å drible.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva heter det når du går med ballen uten å drible i basketball?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig begrep.',
            solution: 'Ganging (eller travelling)',
            multipleChoiceOptions: [
              'Ganging (eller travelling)',
              'Offside',
              'Frispark',
              'Timeout',
            ],
          },
        ],
        solution: 'Å løpe eller gå med ballen uten å drible kalles ganging (travelling på engelsk) og gir ballen til motstanderen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en stusspasning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av stusspasning.',
            solution: 'En pasning som spretter i bakken',
            multipleChoiceOptions: [
              'En pasning som spretter i bakken',
              'En pasning over hodet',
              'En pasning med foten',
              'Et skudd på mål',
            ],
          },
        ],
        solution: 'En stusspasning kastes mot bakken slik at ballen spretter opp til mottakeren. Dette brukes i både håndball og basketball.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor høyt henger en basketballkurv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig høyde.',
            solution: '3,05 meter',
            multipleChoiceOptions: [
              '3,05 meter',
              '2 meter',
              '5 meter',
              '1,5 meter',
            ],
          },
        ],
        solution: 'En basketballkurv henger 3,05 meter (10 fot) over bakken. Dette er samme høyde over hele verden.',
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

export const CHAPTER_KROPPSOVING_5_3_1: TextbookChapter = {
  id: 'kroppsoving-5-3-1',
  courseId: 'kroppsoving-5',
  chapterNumber: '3.1',
  title: 'Turer i naturen',
  description: 'Lær om friluftsliv og hvordan du kan nyte naturen trygt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke nærmiljøet til friluftsliv',
    'orientere seg ved hjelp av kart',
  ],
  content: [
    {
      id: 'kroppsoving-5-3-1-intro',
      type: 'text',
      content: `Norge har fantastisk natur med skoger, fjell, innsjøer og kyst. Friluftsliv handler om å være ute i naturen og nyte alt den har å by på. Det er både sunt for kroppen og godt for humøret!`,
    },
    {
      id: 'kroppsoving-5-3-1-def-1',
      type: 'definition',
      title: 'Friluftsliv',
      content: `Friluftsliv er å være ute i naturen og drive med aktiviteter som turer, lek, jakt og fiske. Det handler om å oppleve naturen og få frisk luft.`,
    },
    {
      id: 'kroppsoving-5-3-1-text-1',
      type: 'text',
      content: `**Planlegge en tur**

**Før turen**:
- Sjekk værmelding (yr.no)
- Velg en rute som passer for gruppa
- Si fra til noen hvor du går
- Pakk sekken med det du trenger

**Utstyr på tur**:
- Gode sko (gjerne fjellsko eller gummistøvler)
- Klær etter vær og årstid (husk regnklær!)
- Matpakke og drikke
- Kart og eventuelt kompass
- Førstehjelpsutstyr

**Kle deg i lag**:
1. Innerst: Ull eller syntetisk (holder deg varm selv om det blir vått)
2. Mellomlag: Fleece eller ull (isolerer)
3. Ytterst: Vindtett og vanntett jakke`,
    },
    {
      id: 'kroppsoving-5-3-1-text-2',
      type: 'text',
      content: `**Orientering med kart**

**Lese kart**:
- Blått = vann (innsjøer, elver, bekker)
- Grønt = skog
- Hvitt = åpen mark eller tynn skog
- Brunt = høydeforskjeller (brattere når linjene er tette)
- Svart = stier, veier, bygninger

**Bruke kartet**:
1. Hold kartet riktig vei (nord opp)
2. Finn ut hvor du er på kartet
3. Finn punkter du kan kjenne igjen (en kolle, en bekk, et veikryss)
4. Følg med på kartet underveis

**Kompasset**:
- Rød pil peker alltid mot nord
- Kan brukes sammen med kartet
- Hjelper deg å finne riktig retning`,
    },
    {
      id: 'kroppsoving-5-3-1-tip-1',
      type: 'tip',
      title: 'Start tidlig',
      content: `På lengre turer er det lurt å starte tidlig på dagen. Da har du god tid og slipper å stresse hvis noe tar lengre tid enn planlagt.`,
    },
    {
      id: 'kroppsoving-5-3-1-warning-1',
      type: 'warning',
      title: 'Gå aldri alene i ukjent terreng',
      content: `Ha alltid med en voksen eller erfaren person når du skal på lengre turer i naturen. Det er tryggere å være flere sammen.`,
    },
    {
      id: 'kroppsoving-5-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr blå farge på et kart?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva blått viser på kartet.',
            solution: 'Vann (innsjøer, elver, bekker)',
            multipleChoiceOptions: [
              'Vann (innsjøer, elver, bekker)',
              'Skog',
              'Veier',
              'Bygninger',
            ],
          },
        ],
        solution: 'Blå farge på kart viser alltid vann - det kan være innsjøer, elver, bekker eller hav.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva bør du ha innerst av klær på tur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig materiale for innerste lag.',
            solution: 'Ull eller syntetisk materiale',
            multipleChoiceOptions: [
              'Ull eller syntetisk materiale',
              'Bomull',
              'Regntøy',
              'Fleece',
            ],
          },
        ],
        solution: 'Ull eller syntetisk materiale holder deg varm selv om det blir vått fra svette eller regn. Bomull blir kald når den er våt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva viser den røde pilen på et kompass?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva den røde kompasspilen viser.',
            solution: 'Den peker alltid mot nord',
            multipleChoiceOptions: [
              'Den peker alltid mot nord',
              'Den viser veien hjem',
              'Den peker mot nærmeste vei',
              'Den viser hvor du skal gå',
            ],
          },
        ],
        solution: 'Den røde pilen på et kompass peker alltid mot magnetisk nord, uansett hvilken vei du snur kompasset.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det lurt å si fra til noen før du går på tur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste grunnen.',
            solution: 'Slik at noen vet hvor du er hvis noe skjer',
            multipleChoiceOptions: [
              'Slik at noen vet hvor du er hvis noe skjer',
              'For å få lov til å gå',
              'For å få med flere',
              'Det er ikke viktig',
            ],
          },
        ],
        solution: 'Hvis du blir skadet eller går deg bort, er det viktig at noen vet hvor du hadde planlagt å gå. Da kan de hjelpe deg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_5_3_2: TextbookChapter = {
  id: 'kroppsoving-5-3-2',
  courseId: 'kroppsoving-5',
  chapterNumber: '3.2',
  title: 'Allemannsretten',
  description: 'Lær om allemannsretten og hvordan du skal oppføre deg i naturen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare allemannsretten',
    'vise hensyn i naturen',
  ],
  content: [
    {
      id: 'kroppsoving-5-3-2-intro',
      type: 'text',
      content: `I Norge har vi noe helt spesielt som heter allemannsretten. Den gir alle lov til å ferdes i naturen - også på andres eiendom! Men med denne retten følger også et ansvar for å ta vare på naturen og vise hensyn.`,
    },
    {
      id: 'kroppsoving-5-3-2-def-1',
      type: 'definition',
      title: 'Allemannsretten',
      content: `Allemannsretten er en norsk lov som gir alle rett til å ferdes fritt i naturen. Du kan gå, sykle, ri og overnatte i utmark - uavhengig av hvem som eier grunnen.`,
    },
    {
      id: 'kroppsoving-5-3-2-text-1',
      type: 'text',
      content: `**Hva kan du gjøre?**

**Du har lov til å**:
- Gå og sykle i utmark (skog, fjell, strand)
- Overnatte i telt minst 150 meter fra nærmeste hus
- Plukke bær, sopp og blomster
- Fiske i sjøen
- Bade i innsjøer og sjøen
- Padle og ro

**Utmark og innmark**:
- **Utmark**: Skog, fjell, myr, strand - her gjelder allemannsretten hele året
- **Innmark**: Dyrket mark, hager, gårdsplasser - her må du ha lov, men du kan gå over åkre når bakken er frosset (vinter)`,
    },
    {
      id: 'kroppsoving-5-3-2-text-2',
      type: 'text',
      content: `**Dine plikter**

**"Ikke forstyrr, ikke ødelegg"**:
- Legg igjen naturen slik du fant den
- Ta med deg søppelet ditt hjem
- Ikke forstyrr dyr eller fugler
- Lukk grinder etter deg
- Ikke gjør skade på trær eller planter

**Bålforbud**:
- Fra 15. april til 15. september er det forbudt å tenne bål i eller nær skog
- Du kan bruke primus eller engangsgrill på trygg plass
- Ved ekstremt tørt vær kan det være forbud hele året

**Vis hensyn til**:
- Grunneiere og bønder
- Andre turgåere
- Dyr og natur`,
    },
    {
      id: 'kroppsoving-5-3-2-note-1',
      type: 'note',
      title: 'Husk',
      content: `Allemannsretten er en gammel tradisjon som vi må ta vare på. Hvis alle følger reglene, kan naturen brukes av alle - også de som kommer etter oss!`,
    },
    {
      id: 'kroppsoving-5-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er allemannsretten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på allemannsretten.',
            solution: 'Retten til å ferdes fritt i naturen',
            multipleChoiceOptions: [
              'Retten til å ferdes fritt i naturen',
              'Retten til å eie grunn',
              'Retten til å bygge hus',
              'Retten til å jakte',
            ],
          },
        ],
        solution: 'Allemannsretten gir alle rett til å ferdes fritt i utmark, uavhengig av hvem som eier grunnen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor langt fra et hus må teltet stå?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig avstand.',
            solution: 'Minst 150 meter',
            multipleChoiceOptions: [
              'Minst 150 meter',
              '10 meter',
              '500 meter',
              'Avstand spiller ingen rolle',
            ],
          },
        ],
        solution: 'For å vise hensyn til beboere må teltet settes opp minst 150 meter fra nærmeste hus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Når er det bålforbud i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig periode for bålforbud.',
            solution: '15. april til 15. september',
            multipleChoiceOptions: [
              '15. april til 15. september',
              'Hele året',
              'Bare i desember',
              'Det er aldri bålforbud',
            ],
          },
        ],
        solution: 'Fra 15. april til 15. september er det generelt bålforbud i eller nær skog og utmark i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bør du gjøre med søppel på tur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig håndtering av søppel.',
            solution: 'Ta det med hjem',
            multipleChoiceOptions: [
              'Ta det med hjem',
              'Grave det ned',
              'Legge det under en stein',
              'Brenne det',
            ],
          },
        ],
        solution: 'Du skal alltid ta med deg søppelet ditt hjem. "Ta bare med deg minner, legg bare igjen fotspor."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Helse og fair play
// ============================================================================

export const CHAPTER_KROPPSOVING_5_4_1: TextbookChapter = {
  id: 'kroppsoving-5-4-1',
  courseId: 'kroppsoving-5',
  chapterNumber: '4.1',
  title: 'Fysisk aktivitet og helse',
  description: 'Lær hvorfor det er viktig å være aktiv og hvordan det påvirker kroppen din.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forstå sammenhengen mellom fysisk aktivitet og helse',
  ],
  content: [
    {
      id: 'kroppsoving-5-4-1-intro',
      type: 'text',
      content: `Visste du at hjertet ditt slår omtrent 100 000 ganger i døgnet? Når du er aktiv, jobber hjertet enda hardere og blir sterkere. Kroppen din er laget for bevegelse, og den trenger aktivitet for å være frisk og sunn!`,
    },
    {
      id: 'kroppsoving-5-4-1-def-1',
      type: 'definition',
      title: 'Fysisk aktivitet',
      content: `Fysisk aktivitet er all bevegelse som får kroppen til å jobbe. Det kan være lek, sport, gåing, sykling eller husarbeid. All bevegelse teller!`,
    },
    {
      id: 'kroppsoving-5-4-1-text-1',
      type: 'text',
      content: `**Hvorfor er aktivitet bra for kroppen?**

**Hjertet og blodet**:
- Hjertet blir sterkere
- Blodet strømmer bedre
- Du blir mindre andpusten

**Muskler og skjelett**:
- Musklene blir sterkere
- Skjelettet blir hardere
- Du får bedre balanse

**Hodet og humøret**:
- Du blir gladere
- Du konsentrerer deg bedre
- Du sover bedre om natten
- Du får mer energi

**Vekten**:
- Du forbrenner energi
- Kroppen bruker maten du spiser`,
    },
    {
      id: 'kroppsoving-5-4-1-text-2',
      type: 'text',
      content: `**Hvor mye bør du bevege deg?**

Barn bør være aktive minst 60 minutter hver dag. Det trenger ikke være alt på en gang!

**Aktivitet i hverdagen**:
- Gå eller sykle til skolen
- Lek i friminuttene
- Hjelp til hjemme
- Delta på fritidsaktiviteter

**Ulike typer aktivitet**:
- **Utholdenhet**: Løping, sykling, svømming (gjør hjertet sterkt)
- **Styrke**: Klatring, lek i apparater (gjør musklene sterke)
- **Smidighet**: Tøying, turn (gjør kroppen bevegelig)

**Tips for å være mer aktiv**:
- Finn aktiviteter du liker
- Gjør det sammen med venner
- Bytt ut skjermtid med utetid
- Ta trappene i stedet for heisen`,
    },
    {
      id: 'kroppsoving-5-4-1-tip-1',
      type: 'tip',
      title: 'All bevegelse teller',
      content: `Du trenger ikke trene hardt for at det skal telle. Å gå en tur, leke med venner, eller hjelpe til med hagearbeid - alt er fysisk aktivitet!`,
    },
    {
      id: 'kroppsoving-5-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange minutter bør barn være aktive hver dag?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg anbefalt daglig aktivitet.',
            solution: 'Minst 60 minutter',
            multipleChoiceOptions: [
              'Minst 60 minutter',
              '10 minutter',
              '5 timer',
              'Det spiller ingen rolle',
            ],
          },
        ],
        solution: 'Helsedirektoratet anbefaler at barn er fysisk aktive i minst 60 minutter hver dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva skjer med hjertet når du er mye aktiv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva som skjer med hjertet.',
            solution: 'Det blir sterkere',
            multipleChoiceOptions: [
              'Det blir sterkere',
              'Det blir svakere',
              'Det slutter å slå',
              'Ingenting skjer',
            ],
          },
        ],
        solution: 'Når du er aktiv regelmessig, blir hjertemuskelen sterkere og mer effektiv. Det trenger ikke jobbe like hardt for å pumpe blod.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken type aktivitet er bra for utholdenheten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg aktiviteten som trener utholdenhet.',
            solution: 'Løping og sykling',
            multipleChoiceOptions: [
              'Løping og sykling',
              'Å sitte stille',
              'Å sove',
              'Å spise',
            ],
          },
        ],
        solution: 'Aktiviteter som løping, sykling og svømming trener utholdenheten fordi hjertet må jobbe over lengre tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kan aktivitet påvirke humøret ditt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hvordan aktivitet påvirker humøret.',
            solution: 'Du blir gladere og får mer energi',
            multipleChoiceOptions: [
              'Du blir gladere og får mer energi',
              'Du blir trist',
              'Det påvirker ikke humøret',
              'Du blir sur',
            ],
          },
        ],
        solution: 'Fysisk aktivitet frigjør gledeshormoner (endorfiner) som gjør deg glad og gir deg mer energi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_5_4_2: TextbookChapter = {
  id: 'kroppsoving-5-4-2',
  courseId: 'kroppsoving-5',
  chapterNumber: '4.2',
  title: 'Fair play og samarbeid',
  description: 'Lær om fair play, godt sportsånd og hvordan vi samarbeider i idrett.',
  estimatedMinutes: 40,
  competenceGoals: [
    'vise fair play og samarbeide med andre',
  ],
  content: [
    {
      id: 'kroppsoving-5-4-2-intro',
      type: 'text',
      content: `I idrett og lek er det ikke bare viktig å være flink - det er like viktig å være en god lagspiller og vise respekt for andre. Fair play handler om å spille rettferdig og behandle alle med respekt, uansett om du vinner eller taper.`,
    },
    {
      id: 'kroppsoving-5-4-2-def-1',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play betyr å spille rettferdig, følge reglene, respektere motstandere og dommere, og oppføre seg ordentlig - både når du vinner og når du taper.`,
    },
    {
      id: 'kroppsoving-5-4-2-text-1',
      type: 'text',
      content: `**Hva er fair play?**

**Følge reglene**:
- Ikke jukse
- Innrøm hvis du brøt en regel
- Respekter dommerens avgjørelser

**Respektere andre**:
- Motstander er ikke fiende - de er med på å gjøre spillet morsomt
- Ikke gjør narr av andre
- Hjelp en som har falt
- Si "bra spilt" til motstanderen

**Være en god taper**:
- Gratulerer vinneren
- Ikke bli sint eller skylde på andre
- Lær av tapet
- Prøv igjen!

**Være en god vinner**:
- Ikke skryt
- Vær hyggelig mot de som tapte
- Del æren med laget`,
    },
    {
      id: 'kroppsoving-5-4-2-text-2',
      type: 'text',
      content: `**Samarbeid i lag**

**Alle er viktige**:
- Et lag trenger alle spillerne
- Hver person har noe å bidra med
- Ingen vinner alene

**God kommunikasjon**:
- Snakk med lagkameratene
- Gi beskjeder ("min!", "pass!")
- Lytt til det andre sier
- Oppmuntre hverandre

**Inkludering**:
- La alle få være med
- Pass ballen til alle, ikke bare de beste
- Hjelp de som sliter
- Vær positiv til alle

**Når det blir konflikter**:
- Snakk sammen rolig
- Hør på hverandres side
- Finn en løsning sammen
- Be om hjelp fra en voksen om nødvendig`,
    },
    {
      id: 'kroppsoving-5-4-2-note-1',
      type: 'note',
      title: 'Husk',
      content: `Det viktigste med idrett er ikke å vinne, men å ha det gøy, bli bedre og lære å samarbeide. En som viser fair play er alltid en vinner!`,
    },
    {
      id: 'kroppsoving-5-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr fair play?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på fair play.',
            solution: 'Å spille rettferdig og respektere andre',
            multipleChoiceOptions: [
              'Å spille rettferdig og respektere andre',
              'Å vinne for enhver pris',
              'Å være best',
              'Å jukse smart',
            ],
          },
        ],
        solution: 'Fair play handler om å følge reglene, respektere motstandere og dommere, og oppføre seg ordentlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva bør du gjøre når du taper?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig oppførsel når du taper.',
            solution: 'Gratulere vinneren og lære av tapet',
            multipleChoiceOptions: [
              'Gratulere vinneren og lære av tapet',
              'Bli sint og gå',
              'Skylde på andre',
              'Nekte å spille mer',
            ],
          },
        ],
        solution: 'En god taper gratulerer vinneren, aksepterer resultatet og bruker det som motivasjon til å bli bedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er det viktig å inkludere alle på laget?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste grunnen.',
            solution: 'Alle har noe å bidra med og fortjener å være med',
            multipleChoiceOptions: [
              'Alle har noe å bidra med og fortjener å være med',
              'Fordi læreren sier det',
              'Det er ikke viktig',
              'Bare de beste bør være med',
            ],
          },
        ],
        solution: 'Inkludering gjør at alle føler seg verdsatt og laget blir sterkere når alle bidrar med sine styrker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-5-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-5-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bør du gjøre når du vinner?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig oppførsel når du vinner.',
            solution: 'Være hyggelig og ikke skryte',
            multipleChoiceOptions: [
              'Være hyggelig og ikke skryte',
              'Skryte masse',
              'Gjøre narr av taperne',
              'Ignorere de andre',
            ],
          },
        ],
        solution: 'En god vinner er ydmyk, takker for kampen og behandler motstanderne med respekt.',
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

export const KROPPSOVING_5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_5_1_1,
  CHAPTER_KROPPSOVING_5_1_2,
  CHAPTER_KROPPSOVING_5_2_1,
  CHAPTER_KROPPSOVING_5_2_2,
  CHAPTER_KROPPSOVING_5_3_1,
  CHAPTER_KROPPSOVING_5_3_2,
  CHAPTER_KROPPSOVING_5_4_1,
  CHAPTER_KROPPSOVING_5_4_2,
];
