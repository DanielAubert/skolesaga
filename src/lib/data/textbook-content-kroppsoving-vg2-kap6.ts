/**
 * Kroppsøving VG2 - Kapittel 6: Aktivitetsformer
 *
 * Delkapitler:
 * 6.1 Lagidretter og samspill
 * 6.2 Individuelle idretter
 * 6.3 Alternativ trening – yoga, pilates og mindfulness
 * 6.4 Funksjonell trening og CrossFit
 * 6.5 Dans, lek og kreativ bevegelse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// 6.1 Lagidretter og samspill
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_6_1: TextbookChapter = {
  id: 'kroppsoving-vg2-6-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '6.1',
  title: 'Lagidretter og samspill',
  description: 'Lær om samarbeid, roller og taktikk i lagidretter som fotball, håndball og volleyball.',
  estimatedMinutes: 50,
  competenceGoals: [
    'samarbeide med andre i ulike bevegelsesaktiviteter',
    'reflektere over samspill og kommunikasjon i lagaktiviteter',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-6-1-intro',
      type: 'text',
      content: `Lagidretter handler om mer enn bare fysisk prestasjon. I dette kapittelet ser vi på hvordan samarbeid, kommunikasjon og rolleforståelse er avgjørende for å lykkes som lag. God samhandling krever at alle spillere forstår både egne og andres oppgaver.`,
    },
    {
      id: 'kroppsoving-vg2-6-1-def-1',
      type: 'definition',
      title: 'Samspill',
      content: `Samspill i idrett betyr at spillerne koordinerer handlinger, kommuniserer og tilpasser seg hverandre for å nå felles mål. Det innebærer både verbale og nonverbale signaler.`,
    },
    {
      id: 'kroppsoving-vg2-6-1-text-1',
      type: 'text',
      content: `**Roller i lagidretter**

Hvert lag har ulike posisjoner med forskjellige ansvarsområder. I fotball har forsvarsspillere, midtbanespillere og angripere helt ulike oppgaver. Å forstå sin egen rolle og tilpasse seg medspillernes bevegelser er grunnlaget for godt samspill.`,
    },
    {
      id: 'kroppsoving-vg2-6-1-def-2',
      type: 'definition',
      title: 'Taktikk',
      content: `Taktikk er en planlagt strategi for hvordan laget skal spille for å utnytte egne styrker og motstanderens svakheter. Taktikk tilpasses ofte underveis i kampen basert på situasjonen.`,
    },
    {
      id: 'kroppsoving-vg2-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Press og kontring i håndball',
      content: `Et lag som møter en sterkere motstander velger å spille kontring. Forsvarsspillerne presser høyt, og når de vinner ballen, spilles den raskt framover til en løper som har posisjonert seg i forkant. Denne taktikken krever at alle vet sin rolle og reagerer raskt.`,
    },
    {
      id: 'kroppsoving-vg2-6-1-text-2',
      type: 'text',
      content: `**Kommunikasjon på banen**

Effektiv kommunikasjon i lagidretter skjer gjennom tilrop, blikk-kontakt og kroppsspråk. Spillere som kommuniserer godt skaper færre misforståelser og bedre flyt i spillet. Trening på kommunikasjon er like viktig som teknisk trening.`,
    },
    {
      id: 'kroppsoving-vg2-6-1-def-3',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play betyr å følge reglene, respektere dommere og motstandere, og opptre med god sportsånd. Det innebærer også å inkludere alle spillere uavhengig av ferdighetsnivå.`,
    },
    {
      id: 'kroppsoving-vg2-6-1-text-3',
      type: 'text',
      content: `**Inkludering og tilpasning**

I kroppsøving er det viktig at alle elever føler seg inkludert i lagaktiviteter. Regler kan tilpasses for å sikre at alle får bidra. For eksempel kan man innføre krav om at alle må røre ballen før det scores, eller rotere posisjoner jevnlig.`,
    },
    {
      id: 'kroppsoving-vg2-6-1-tip-1',
      type: 'tip',
      title: 'Bedre samspill gjennom smålagsspill',
      content: `Smålagsspill (3v3 eller 4v4) gir flere ballberøringer og krever raskere beslutninger. Dette utvikler samspill raskere enn store lag, fordi alle spillere er involvert hele tiden.`,
    },
    // Exercises 1-3: Multiple choice
    {
      id: 'kroppsoving-vg2-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner godt samspill i lagidretter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av godt samspill.',
            solution: 'Koordinerte handlinger, kommunikasjon og tilpasning mellom spillere',
            multipleChoiceOptions: [
              'Koordinerte handlinger, kommunikasjon og tilpasning mellom spillere',
              'At den beste spilleren får ballen mest mulig',
              'At alle løper så fort de kan hele tiden',
              'At man alltid bruker samme taktikk',
            ],
          },
        ],
        solution: 'Godt samspill innebærer at spillerne koordinerer handlinger, kommuniserer effektivt og tilpasser seg hverandre for å nå felles mål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er taktikk i lagidretter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av taktikk.',
            solution: 'En planlagt strategi som utnytter egne styrker og motstanderens svakheter',
            multipleChoiceOptions: [
              'En planlagt strategi som utnytter egne styrker og motstanderens svakheter',
              'Å alltid angripe så raskt som mulig',
              'Å trene mest mulig på kondisjon',
              'Å la treneren bestemme alt alene',
            ],
          },
        ],
        solution: 'Taktikk er en gjennomtenkt plan for hvordan laget skal spille, og den tilpasses underveis basert på kampens utvikling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva innebærer fair play?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som best beskriver fair play.',
            solution: 'Følge reglene, respektere dommere og motstandere, og inkludere alle',
            multipleChoiceOptions: [
              'Følge reglene, respektere dommere og motstandere, og inkludere alle',
              'Å vinne for enhver pris',
              'Bare å følge reglene når dommeren ser på',
              'At de beste spillerne bestemmer reglene',
            ],
          },
        ],
        solution: 'Fair play betyr å opptre med god sportsånd, følge reglene, respektere alle involverte og sørge for at alle inkluderes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Exercises 4-6: Open-ended
    {
      id: 'kroppsoving-vg2-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv en taktisk plan for et håndballag som møter en fysisk overlegen motstander. Forklar hvilke roller spillerne bør ha.',
        solution: 'Eksempel: Laget kan fokusere på kontring med raske byttinger. Forsvarsspillerne spiller tett og presser ballføreren, mens løperne posisjonerer seg for hurtige kontringsangrep. Viktig med god kommunikasjon og rask omstilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan man kan tilpasse en lagidrett slik at elever med ulike ferdighetsnivåer føler seg inkludert. Gi minst tre konkrete forslag.',
        solution: 'Forslag: 1) Rotere posisjoner slik at alle prøver ulike roller. 2) Innføre krav om at alle på laget må ha berørt ballen før scoring. 3) Tilpasse bane- og lagstørrelse for mer involvering. Andre tiltak kan være handicap-regler eller blandet aldersgrupper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflekter over din egen rolle i en lagidrett du har deltatt i. Hva bidro du med, og hva kunne du gjort bedre for å styrke samspillet?',
        solution: 'Svar vil variere. Bør inneholde: Beskrivelse av egen rolle, vurdering av kommunikasjon og samarbeid, konkrete situasjoner der samspillet fungerte eller sviktet, og forslag til forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 6.2 Individuelle idretter
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_6_2: TextbookChapter = {
  id: 'kroppsoving-vg2-6-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '6.2',
  title: 'Individuelle idretter',
  description: 'Utforsk idretter der du konkurrerer og utvikler deg på egenhånd, som friidrett, svømming og kampsport.',
  estimatedMinutes: 45,
  competenceGoals: [
    'øve på og utvikle ferdigheter i individuelle bevegelsesaktiviteter',
    'vurdere egen utvikling og sette mål for videre trening',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-6-2-intro',
      type: 'text',
      content: `Individuelle idretter gir deg mulighet til å utvikle deg i eget tempo og sette personlige mål. I motsetning til lagidretter er du selv ansvarlig for prestasjon og utvikling. Dette kapittelet dekker friidrett, svømming, kampsport og andre individuelle aktiviteter.`,
    },
    {
      id: 'kroppsoving-vg2-6-2-def-1',
      type: 'definition',
      title: 'Individuell idrett',
      content: `Individuell idrett er aktiviteter der utøveren primært konkurrerer mot seg selv eller andre enkeltpersoner, uten å være avhengig av et lag. Eksempler er friidrett, svømming, tennis og kampsport.`,
    },
    {
      id: 'kroppsoving-vg2-6-2-text-1',
      type: 'text',
      content: `**Friidrett – grunnleggende øvelser**

Friidrett omfatter løp, hopp og kast. I løpsdisiplinene trener man sprint (60-400 m), mellomdistanse (800-1500 m) og langdistanse (3000 m+). I hoppøvelsene inngår lengde, høyde og tresteg. Kastøvelsene inkluderer kule, diskos og spyd.`,
    },
    {
      id: 'kroppsoving-vg2-6-2-def-2',
      type: 'definition',
      title: 'Teknikk',
      content: `Teknikk er den mest hensiktsmessige måten å utføre en bevegelse på for å oppnå best mulig resultat med minst mulig energibruk. God teknikk forebygger også skader.`,
    },
    {
      id: 'kroppsoving-vg2-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Teknikk i kulestøt',
      content: `I kulestøt brukes glitekast-teknikken: Utøveren starter med ryggen mot kastsektoren, glir bakover med lav tyngdepunktshøyde, og overfører kraften gjennom ben, hofter og arm i én sammenhengende bevegelse. Riktig rekkefølge i kraftoverføringen er avgjørende for lang støtlengde.`,
    },
    {
      id: 'kroppsoving-vg2-6-2-text-2',
      type: 'text',
      content: `**Kampsport og selvforsvar**

Kampsport som judo, karate og taekwondo utvikler styrke, balanse, koordinasjon og mentalt fokus. I kroppsøving legger man vekt på teknikk, respekt for motstander og kontrollert utførelse. Selvforsvar handler om å kunne beskytte seg i uventede situasjoner.`,
    },
    {
      id: 'kroppsoving-vg2-6-2-text-3',
      type: 'text',
      content: `**Svømming – teknikk og sikkerhet**

Svømming er en grunnleggende ferdighet som kan redde liv. De fire hovedstilene er crawl, rygg, bryst og butterfly. God svømmeteknikk handler om vannfølelse, effektiv armtak og koordinert beinspark. Vanntrening gir også god kondisjon med lav belastning på ledd.`,
    },
    {
      id: 'kroppsoving-vg2-6-2-tip-1',
      type: 'tip',
      title: 'Sett deg SMART-mål',
      content: `I individuelle idretter er det lurt å sette SMART-mål: Spesifikke, Målbare, Attraktive, Realistiske og Tidsbestemte. Eksempel: «Jeg skal forbedre 60-meteren min med 0,3 sekunder innen mars.»`,
    },
    // Exercises 1-3: Multiple choice
    {
      id: 'kroppsoving-vg2-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner individuelle idretter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av individuelle idretter.',
            solution: 'Aktiviteter der utøveren konkurrerer mot seg selv eller andre enkeltpersoner',
            multipleChoiceOptions: [
              'Aktiviteter der utøveren konkurrerer mot seg selv eller andre enkeltpersoner',
              'Idretter der man alltid er alene',
              'Aktiviteter uten regler',
              'Bare idretter som utføres innendørs',
            ],
          },
        ],
        solution: 'Individuelle idretter kjennetegnes ved at utøveren primært presterer på egenhånd, uten avhengighet av et lag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke hoveddisipliner finnes i friidrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig inndeling av friidrettsdisipliner.',
            solution: 'Løp, hopp og kast',
            multipleChoiceOptions: [
              'Løp, hopp og kast',
              'Bare løp og hopp',
              'Sprint, maraton og stafett',
              'Kule, diskos og spyd',
            ],
          },
        ],
        solution: 'Friidrett deles inn i tre hoveddisipliner: løp (sprint, mellomdistanse, langdistanse), hopp (lengde, høyde, tresteg) og kast (kule, diskos, spyd).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva står SMART-mål for?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på SMART-mål.',
            solution: 'Spesifikke, Målbare, Attraktive, Realistiske og Tidsbestemte',
            multipleChoiceOptions: [
              'Spesifikke, Målbare, Attraktive, Realistiske og Tidsbestemte',
              'Store, Motiverende, Ambisiøse, Raske og Tøffe',
              'Simple, Maximale, Aggressive, Risikable og Trygge',
              'Strategiske, Moderate, Allmenne, Rutinerte og Tradisjonelle',
            ],
          },
        ],
        solution: 'SMART er et rammeverk for målsetting: Spesifikke, Målbare, Attraktive, Realistiske og Tidsbestemte mål gjør det lettere å følge opp fremgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Exercises 4-6: Open-ended
    {
      id: 'kroppsoving-vg2-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg en individuell idrett og beskriv teknikken i en sentral øvelse. Forklar hvorfor god teknikk er viktig for prestasjon og skadeforebygging.',
        solution: 'Eksempel (høydehopp): Fosbury-flop-teknikken bruker en buet tilløpslinje, kraftig satsfot og bue over lista med ryggen ned. God teknikk gir mer effektiv bruk av fart og spenst, og riktig landingsteknikk forebygger rygg- og nakkeskader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign fordeler og ulemper ved individuelle idretter og lagidretter. Drøft hvilke egenskaper som utvikles best i hver form.',
        solution: 'Individuelle idretter utvikler selvdisiplin, selvstendighet og personlig ansvar. Lagidretter utvikler samarbeid, kommunikasjon og rolleforståelse. Ulemper med individuell idrett kan være ensomhet og manglende lagfølelse, mens lagidretter kan gi ulik involvering blant spillere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sett opp et SMART-mål for en individuell idrett du ønsker å forbedre deg i. Beskriv mål, treningsplan og hvordan du vil måle fremgang.',
        solution: 'Svar vil variere. Bør inneholde: Konkret og målbart mål, tidsramme, realistisk treningsplan med øvelser og frekvens, og en metode for å måle fremgang (f.eks. tidsregistrering, logg eller videoanalyse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 6.3 Alternativ trening – yoga, pilates og mindfulness
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_6_3: TextbookChapter = {
  id: 'kroppsoving-vg2-6-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '6.3',
  title: 'Alternativ trening – yoga, pilates og mindfulness',
  description: 'Utforsk treningsformer som kombinerer fysisk aktivitet med mental trening og avspenning.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske ulike bevegelsesaktiviteter og treningsformer',
    'forstå sammenhengen mellom fysisk aktivitet og mental helse',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-6-3-intro',
      type: 'text',
      content: `Yoga, pilates og mindfulness er treningsformer som fokuserer på sammenhengen mellom kropp og sinn. De utvikler bevegelighet, styrke, balanse og mental ro. Disse aktivitetene har blitt stadig mer populære, også blant toppidrettsutøvere som supplement til annen trening.`,
    },
    {
      id: 'kroppsoving-vg2-6-3-def-1',
      type: 'definition',
      title: 'Yoga',
      content: `Yoga er en eldgammel treningsform fra India som kombinerer fysiske stillinger (asanas), pusteteknikker (pranayama) og meditasjon. Yoga styrker kroppen, øker bevegeligheten og fremmer mental avspenning.`,
    },
    {
      id: 'kroppsoving-vg2-6-3-text-1',
      type: 'text',
      content: `**Typer yoga**

Det finnes mange retninger innen yoga. **Hatha yoga** er rolig og fokuserer på grunnstillinger. **Vinyasa** er mer dynamisk med flytende overganger mellom stillinger. **Yin yoga** holder stillinger lenge (3-5 minutter) for å strekke bindevev. For nybegynnere er hatha yoga et godt utgangspunkt.`,
    },
    {
      id: 'kroppsoving-vg2-6-3-def-2',
      type: 'definition',
      title: 'Pilates',
      content: `Pilates er en treningsform utviklet av Joseph Pilates som fokuserer på kjernemuskulatur, kroppskontroll og presis bevegelse. Treningen styrker dype stabiliserende muskler og forbedrer holdning.`,
    },
    {
      id: 'kroppsoving-vg2-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Grunnøvelse i pilates – The Hundred',
      content: `Ligg på ryggen med bena hevet til 45 grader. Løft hodet og skuldrene fra matten og pump armene opp og ned i korte bevegelser. Pust inn i fem pumps og ut i fem pumps, totalt 100 pumps. Øvelsen aktiverer kjernemuskulaturen og koordinerer pust med bevegelse.`,
    },
    {
      id: 'kroppsoving-vg2-6-3-text-2',
      type: 'text',
      content: `**Mindfulness og mental trening**

Mindfulness betyr oppmerksomt nærvær – å være til stede i øyeblikket uten å dømme. Forskning viser at regelmessig mindfulness-trening reduserer stress, forbedrer konsentrasjon og kan hjelpe mot angst og depresjon. I idrett brukes mindfulness for å håndtere prestasjonspress.`,
    },
    {
      id: 'kroppsoving-vg2-6-3-def-3',
      type: 'definition',
      title: 'Mindfulness',
      content: `Mindfulness er en form for mental trening der man øver på å rette oppmerksomheten mot nåtiden på en aksepterende og ikke-dømmende måte. Det kan praktiseres gjennom meditasjon, pustøvelser eller bevisst bevegelse.`,
    },
    {
      id: 'kroppsoving-vg2-6-3-text-3',
      type: 'text',
      content: `**Helseeffekter av yoga, pilates og mindfulness**

Disse treningsformene gir dokumenterte helseeffekter: bedre bevegelighet og balanse, sterkere kjernemuskulatur, redusert stressnivå og bedre søvnkvalitet. De er skånsomme for ledd og passer for alle uansett treningsbakgrunn.`,
    },
    {
      id: 'kroppsoving-vg2-6-3-tip-1',
      type: 'tip',
      title: 'Start med pusten',
      content: `Bevisst pusting er grunnlaget for både yoga, pilates og mindfulness. Prøv å puste dypt inn gjennom nesen i 4 sekunder, hold i 4 sekunder, og pust ut gjennom munnen i 6 sekunder. Gjenta 5-10 ganger for å roe ned nervesystemet.`,
    },
    // Exercises 1-3: Multiple choice
    {
      id: 'kroppsoving-vg2-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er yoga?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av yoga.',
            solution: 'En treningsform som kombinerer fysiske stillinger, pusteteknikker og meditasjon',
            multipleChoiceOptions: [
              'En treningsform som kombinerer fysiske stillinger, pusteteknikker og meditasjon',
              'Bare tøyning og strekking',
              'En form for kampsport',
              'Utelukkende meditasjon uten bevegelse',
            ],
          },
        ],
        solution: 'Yoga kombinerer tre hovedelementer: fysiske stillinger (asanas), pusteteknikker (pranayama) og meditasjon for å styrke kropp og sinn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er hovedfokuset i pilates?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av pilates.',
            solution: 'Kjernemuskulatur, kroppskontroll og presis bevegelse',
            multipleChoiceOptions: [
              'Kjernemuskulatur, kroppskontroll og presis bevegelse',
              'Maksimal styrke og muskelvekst',
              'Langdistanseløping',
              'Høyintensiv intervalltrening',
            ],
          },
        ],
        solution: 'Pilates fokuserer på å styrke dype stabiliserende muskler, spesielt kjernemuskulaturen, gjennom kontrollerte og presise bevegelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr mindfulness?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av mindfulness.',
            solution: 'Oppmerksomt nærvær – å være til stede i øyeblikket uten å dømme',
            multipleChoiceOptions: [
              'Oppmerksomt nærvær – å være til stede i øyeblikket uten å dømme',
              'Å tenke mest mulig på fremtiden',
              'En type intens styrketrening',
              'Å analysere prestasjonen sin i detalj etter trening',
            ],
          },
        ],
        solution: 'Mindfulness handler om å trene oppmerksomheten til å være i nåtiden på en aksepterende og ikke-dømmende måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Exercises 4-6: Open-ended
    {
      id: 'kroppsoving-vg2-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvordan yoga, pilates eller mindfulness kan brukes som supplement til tradisjonell idrettstrening. Gi konkrete eksempler.',
        solution: 'Eksempel: En fotballspiller kan bruke yoga for å forbedre bevegelighet og forebygge skader. Pilates kan styrke kjernemuskulaturen som er viktig for stabilitet i dueller. Mindfulness kan hjelpe med å håndtere prestasjonsangst før kamper og forbedre fokus under kamp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gjennomfør en 5-minutters mindfulness-økt (pustøvelse eller kroppsskanning) og beskriv opplevelsen. Hvordan påvirket det kropp og sinn?',
        solution: 'Svar vil variere. Bør inneholde: Beskrivelse av øvelsen, observasjoner om pust og kroppsspenninger, endringer i sinntilstand, eventuelle utfordringer med å holde fokus, og refleksjon over nytteverdien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag et treningsopplegg på 20 minutter som kombinerer elementer fra yoga, pilates og mindfulness. Beskriv øvelsene, rekkefølgen og formålet med hver del.',
        solution: 'Eksempel: 1) Mindfulness-pust (3 min) for å roe ned. 2) Yogastillinger: nedovervåndenhund, kriger 1 og 2 (7 min) for bevegelighet. 3) Pilatesøvelser: The Hundred og planke (7 min) for kjernestyrke. 4) Avsluttende avspenning i savasana (3 min). Opplegget gir en helhetlig økt med styrke, bevegelighet og mental ro.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 6.4 Funksjonell trening og CrossFit
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_6_4: TextbookChapter = {
  id: 'kroppsoving-vg2-6-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '6.4',
  title: 'Funksjonell trening og CrossFit',
  description: 'Lær om helkroppstrening med fokus på bevegelsesmønstre, intensitet og variasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke kunnskap om treningsprinsipper til å planlegge målrettet trening',
    'vurdere risiko og sikkerhet ved ulike treningsformer',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-6-4-intro',
      type: 'text',
      content: `Funksjonell trening og CrossFit fokuserer på bevegelser som er nyttige i hverdagen og idretten. I stedet for å trene enkeltmuskler isolert, trener man sammensatte bevegelser som krever styrke, utholdenhet, koordinasjon og bevegelighet samtidig.`,
    },
    {
      id: 'kroppsoving-vg2-6-4-def-1',
      type: 'definition',
      title: 'Funksjonell trening',
      content: `Funksjonell trening er trening som etterligner naturlige bevegelsesmønstre som å løfte, bære, dytte, dra, hoppe og rotere. Målet er å forbedre styrke og koordinasjon som er overførbar til dagligliv og idrett.`,
    },
    {
      id: 'kroppsoving-vg2-6-4-text-1',
      type: 'text',
      content: `**Grunnleggende bevegelsesmønstre**

Funksjonell trening bygger på sju grunnbevegelser: **knebøy** (squat), **markløft** (hoftedominant), **press** (dytte over hodet), **roing/drag** (dra mot kroppen), **utfall** (ensidig benstyrke), **rotasjon** (vridning) og **bæring** (loaded carries). Et godt program inkluderer alle disse mønstrene.`,
    },
    {
      id: 'kroppsoving-vg2-6-4-def-2',
      type: 'definition',
      title: 'CrossFit',
      content: `CrossFit er et treningskonsept som kombinerer elementer fra vektløfting, gymnastikk og kondisjonstrening i varierte, høyintensive treningsøkter (WOD – Workout of the Day). Treningen utføres ofte på tid eller for maksimalt antall repetisjoner.`,
    },
    {
      id: 'kroppsoving-vg2-6-4-example-1',
      type: 'example',
      title: 'Eksempel: En enkel funksjonell treningsøkt',
      content: `Gjennomfør 3 runder av: 10 knebøy med kroppsvekt, 10 push-ups, 10 roing med strikk, 200 meter løp. Pause 1 minutt mellom rundene. Denne økten trener hele kroppen med naturlige bevegelser og bygger både styrke og utholdenhet.`,
    },
    {
      id: 'kroppsoving-vg2-6-4-text-2',
      type: 'text',
      content: `**Sikkerhet og teknikk**

Riktig teknikk er avgjørende i funksjonell trening for å unngå skader. Viktige prinsipper er: nøytral rygg ved løft, knærne i linje med tærne i knebøy, kontrollert bevegelse gjennom hele bevegelsesbanen, og gradvis økning i belastning. Start alltid med lav vekt til teknikken sitter.`,
    },
    {
      id: 'kroppsoving-vg2-6-4-text-3',
      type: 'text',
      content: `**Fordeler og utfordringer**

Funksjonell trening gir allsidig fysisk utvikling og er effektiv fordi den trener flere muskelgrupper samtidig. CrossFit skaper også et sterkt fellesskap og motivasjon. Utfordringen er at høy intensitet kombinert med komplekse øvelser øker risikoen for skader dersom teknikken er dårlig eller belastningen for høy.`,
    },
    {
      id: 'kroppsoving-vg2-6-4-example-2',
      type: 'example',
      title: 'Eksempel: Skalering av øvelser',
      content: `I CrossFit skalerer man øvelser etter nivå. En pull-up kan skaleres slik: Nybegynner bruker strikk-assistanse, middels nivå gjør negative pull-ups (senker seg sakte ned), og avansert gjør strenge pull-ups eller butterfly pull-ups. Slik kan alle delta uansett ferdighetsnivå.`,
    },
    {
      id: 'kroppsoving-vg2-6-4-tip-1',
      type: 'tip',
      title: 'Lær bevegelsen før du øker intensiteten',
      content: `Følg prinsippet «teknikk – konsistens – intensitet». Først lærer du øvelsen riktig, deretter gjør du den konsistent riktig over tid, og til slutt øker du vekt eller tempo. Å hoppe over stegene fører ofte til skader.`,
    },
    // Exercises 1-3: Multiple choice
    {
      id: 'kroppsoving-vg2-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er funksjonell trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av funksjonell trening.',
            solution: 'Trening som etterligner naturlige bevegelsesmønstre for styrke og koordinasjon',
            multipleChoiceOptions: [
              'Trening som etterligner naturlige bevegelsesmønstre for styrke og koordinasjon',
              'Trening der man kun bruker maskiner',
              'Bare løping og kondisjonstrening',
              'Trening som isolerer enkeltmuskler',
            ],
          },
        ],
        solution: 'Funksjonell trening bruker naturlige bevegelser som å løfte, bære, dytte og dra for å utvikle styrke og koordinasjon som er overførbar til hverdagen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner CrossFit?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av CrossFit.',
            solution: 'Varierte, høyintensive treningsøkter som kombinerer vektløfting, gymnastikk og kondisjon',
            multipleChoiceOptions: [
              'Varierte, høyintensive treningsøkter som kombinerer vektløfting, gymnastikk og kondisjon',
              'Bare tung vektløfting',
              'Rolig trening med fokus på tøyning',
              'Bare løping og sykling',
            ],
          },
        ],
        solution: 'CrossFit kombinerer elementer fra vektløfting, gymnastikk og kondisjonstrening i korte, varierte og intense økter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er riktig rekkefølge for å lære en ny øvelse i funksjonell trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig progresjon.',
            solution: 'Teknikk – konsistens – intensitet',
            multipleChoiceOptions: [
              'Teknikk – konsistens – intensitet',
              'Intensitet – teknikk – konsistens',
              'Konsistens – intensitet – teknikk',
              'Bare øke vekten så raskt som mulig',
            ],
          },
        ],
        solution: 'Man bør først lære riktig teknikk, deretter oppnå konsistens i utførelsen, og til slutt øke intensiteten gradvis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Exercises 4-6: Open-ended
    {
      id: 'kroppsoving-vg2-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en funksjonell treningsøkt med 5 øvelser som dekker alle de grunnleggende bevegelsesmønstrene. Beskriv øvelsene, antall repetisjoner og pauser.',
        solution: 'Eksempel: 1) Knebøy 3x12, 2) Markløft 3x10, 3) Skulderpress med manualer 3x10, 4) Roing med strikk 3x12, 5) Utfall med vridning 3x10 per side. Pause 60 sek mellom sett. Økten dekker knebøy, hoftedominant, press, drag, utfall og rotasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved CrossFit som treningsform for ungdom. Hvilke hensyn bør man ta?',
        solution: 'Fordeler: Allsidig trening, sosialt fellesskap, motiverende format, utvikler mange fysiske egenskaper. Ulemper: Risiko for skader ved dårlig teknikk eller for høy intensitet, prestasjonspress kan føre til overtrening. Hensyn: Ungdom bør veiledes av kompetent instruktør, teknikk prioriteres over intensitet, og belastning tilpasses modningsnivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvordan man kan skalere en push-up og en knebøy for tre ulike ferdighetsnivåer (nybegynner, middels, avansert). Beskriv hvert nivå.',
        solution: 'Push-up: Nybegynner – veggpress, middels – push-up fra knærne, avansert – full push-up eller med vektmansjett. Knebøy: Nybegynner – sit-to-stand fra stol, middels – full kroppsvektknebøy, avansert – knebøy med ekstra vekt eller ettbeins knebøy. Skalering gjør øvelsene tilgjengelig for alle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 6.5 Dans, lek og kreativ bevegelse
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_6_5: TextbookChapter = {
  id: 'kroppsoving-vg2-6-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '6.5',
  title: 'Dans, lek og kreativ bevegelse',
  description: 'Utforsk dans, lek og kreative bevegelsesformer som aktivitet og uttrykksform.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske dans og kreative bevegelsesformer',
    'reflektere over bevegelse som uttrykksform og kulturelt fenomen',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-6-5-intro',
      type: 'text',
      content: `Dans, lek og kreativ bevegelse er aktivitetsformer som kombinerer fysisk aktivitet med kreativt uttrykk. Disse aktivitetene utvikler koordinasjon, rytmefølelse, kroppskontroll og sosiale ferdigheter. I kroppsøving er målet å gi gode opplevelser, ikke å prestere perfekt.`,
    },
    {
      id: 'kroppsoving-vg2-6-5-def-1',
      type: 'definition',
      title: 'Dans',
      content: `Dans er rytmisk bevegelse av kroppen, ofte til musikk, som uttrykksform eller sosial aktivitet. Dans finnes i alle kulturer og kan deles inn i folkedans, moderne dans, gatedans, selskapsdans og mange andre sjangre.`,
    },
    {
      id: 'kroppsoving-vg2-6-5-text-1',
      type: 'text',
      content: `**Dansesjangre i kroppsøving**

I kroppsøving møter man ulike dansesjangre: **Folkedans** som reinlender og springar er del av norsk kulturarv. **Moderne dans** gir frihet til kreativt uttrykk. **Gatedans** som hip-hop og breakdance appellerer til mange unge. **Selskapsdans** som vals og cha-cha-cha utvikler samarbeid med partner.`,
    },
    {
      id: 'kroppsoving-vg2-6-5-def-2',
      type: 'definition',
      title: 'Kreativ bevegelse',
      content: `Kreativ bevegelse er fri bevegelse der utøveren utforsker kroppens muligheter uten fastsatte regler. Det handler om å bruke kroppen som uttrykksverktøy, utforske rom, nivåer, tempo og dynamikk.`,
    },
    {
      id: 'kroppsoving-vg2-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Kreativ bevegelse med improvisasjon',
      content: `Elevene beveger seg fritt til musikk. Læreren gir instruksjoner: «Beveg dere så lavt som mulig», «Bruk bare armene», «Beveg dere i sakte film», «Frys!». Oppgavene utfordrer elevene til å utforske ulike bevegelseskvaliteter og bruke hele kroppen kreativt.`,
    },
    {
      id: 'kroppsoving-vg2-6-5-text-2',
      type: 'text',
      content: `**Lek som bevegelsesaktivitet**

Lek er ikke bare for barn. Lekbaserte aktiviteter som stafetter, fangeleker, hinderløyper og samarbeidsleker gir høy fysisk aktivitet med lav prestasjonsangst. Lek fremmer glede, kreativitet og spontanitet, og kan brukes som oppvarming eller som egne aktiviteter i kroppsøvingstimen.`,
    },
    {
      id: 'kroppsoving-vg2-6-5-text-3',
      type: 'text',
      content: `**Dans som kulturelt uttrykk**

Dans gjenspeiler kulturen den kommer fra. Norske folkedanser forteller om bondekulturen, afrikanske danser er ofte knyttet til ritualer og fellesskap, og hip-hop oppsto som uttrykk for ungdomskulturen i urbane strøk. Gjennom dans kan vi lære om og verdsette ulike kulturuttrykk.`,
    },
    {
      id: 'kroppsoving-vg2-6-5-def-3',
      type: 'definition',
      title: 'Rytme',
      content: `Rytme er et gjentakende mønster av bevegelse eller lyd. I dans handler rytme om å tilpasse bevegelsene til musikkens takt, tempo og dynamikk. God rytmefølelse utvikles gjennom trening og erfaring.`,
    },
    {
      id: 'kroppsoving-vg2-6-5-tip-1',
      type: 'tip',
      title: 'Tør å prøve',
      content: `Mange opplever dans som utenfor komfortsonen. Start med enkle bevegelser og fokuser på å ha det gøy fremfor å se bra ut. Ingen dømmer deg – i kroppsøving handler det om innsats og deltakelse, ikke perfeksjon.`,
    },
    // Exercises 1-3: Multiple choice
    {
      id: 'kroppsoving-vg2-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er dans?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av dans.',
            solution: 'Rytmisk bevegelse av kroppen, ofte til musikk, som uttrykksform eller sosial aktivitet',
            multipleChoiceOptions: [
              'Rytmisk bevegelse av kroppen, ofte til musikk, som uttrykksform eller sosial aktivitet',
              'Bare profesjonell ballett',
              'En form for styrketrening',
              'Kun bevegelse til rask musikk',
            ],
          },
        ],
        solution: 'Dans er rytmisk kroppslig bevegelse som kan fungere som uttrykksform, sosial aktivitet og treningsform. Det finnes mange ulike sjangre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er kreativ bevegelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av kreativ bevegelse.',
            solution: 'Fri bevegelse der man utforsker kroppens muligheter uten fastsatte regler',
            multipleChoiceOptions: [
              'Fri bevegelse der man utforsker kroppens muligheter uten fastsatte regler',
              'En bestemt dansesjanger med faste trinn',
              'Gymnastikk med strenge krav til utførelse',
              'Bare bevegelse til klassisk musikk',
            ],
          },
        ],
        solution: 'Kreativ bevegelse handler om å utforske kroppens muligheter fritt, uten regler, ved å eksperimentere med rom, nivåer, tempo og dynamikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke norske folkedanser er vanlige i kroppsøving?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige eksempler på norske folkedanser.',
            solution: 'Reinlender og springar',
            multipleChoiceOptions: [
              'Reinlender og springar',
              'Vals og tango',
              'Hip-hop og breakdance',
              'Salsa og cha-cha-cha',
            ],
          },
        ],
        solution: 'Reinlender og springar er tradisjonelle norske folkedanser som er en del av vår kulturarv og brukes ofte i kroppsøvingsundervisning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // Exercises 4-6: Open-ended
    {
      id: 'kroppsoving-vg2-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag et kort danseopplegg (1-2 minutter) med minst 4 ulike bevegelser til en selvvalgt sang. Beskriv bevegelsene og forklar hvorfor du valgte dem.',
        solution: 'Svar vil variere. Bør inneholde: Valg av sang og begrunnelse, beskrivelse av minst 4 bevegelser med rekkefølge, refleksjon over hvordan bevegelsene passer til musikkens rytme og stemning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan dans kan brukes til å lære om ulike kulturer. Velg to dansesjangre fra forskjellige deler av verden og sammenlign dem.',
        solution: 'Eksempel: Norsk springar vs. brasiliansk samba. Springar er rolig og parvis, knyttet til bondekultur og sosiale sammenkomster i bygde-Norge. Samba er energisk og karnevalspreget, med rask fotarbeid og hoftebevegelser, og gjenspeiler brasiliansk festkultur. Begge har sosial funksjon, men uttrykker ulike verdier og tradisjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-6-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflekter over din egen opplevelse av dans i kroppsøving. Hva synes du er utfordrende, og hva kan dans gi deg som andre aktiviteter ikke gir?',
        solution: 'Svar vil variere. Bør inneholde: Ærlig refleksjon over egne følelser rundt dans, identifisering av konkrete utfordringer (f.eks. prestasjonsangst, koordinasjon), og vurdering av hva dans kan tilby utover fysisk trening (kreativt uttrykk, kulturforståelse, sosial mestring).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i kapittel 6
// ============================================================================

export const KROPPSOVING_VG2_KAP6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_6_1,
  CHAPTER_KROPPSOVING_VG2_6_2,
  CHAPTER_KROPPSOVING_VG2_6_3,
  CHAPTER_KROPPSOVING_VG2_6_4,
  CHAPTER_KROPPSOVING_VG2_6_5,
];
