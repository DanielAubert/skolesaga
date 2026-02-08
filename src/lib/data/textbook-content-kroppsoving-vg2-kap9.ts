/**
 * Kroppsøving VG2 - Kapittel 9: Helse og livsstil
 *
 * Dekker LK20-kompetansemål for kroppsøving VG2
 * Delkapitler 9.1-9.5: Folkehelse, psykisk helse, ernæring, søvn/restitusjon, motivasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Fysisk aktivitet og folkehelse
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_9_1: TextbookChapter = {
  id: 'kroppsoving-vg2-9-1',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '9.1',
  title: 'Fysisk aktivitet og folkehelse',
  description: 'Forstå sammenhengen mellom fysisk aktivitet og folkehelse, inkludert WHOs anbefalinger og helsegevinster.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for sammenhengen mellom fysisk aktivitet og folkehelse',
    'drøfte WHOs anbefalinger for fysisk aktivitet',
    'reflektere over livsstilssykdommer i et folkehelseperspektiv',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-9-1-intro',
      type: 'text',
      content: `Fysisk aktivitet er en av de viktigste faktorene for god folkehelse. Verdens helseorganisasjon (WHO) anslår at fysisk inaktivitet er den fjerde ledende risikofaktoren for tidlig død globalt. I Norge er det anslått at kun 30 % av voksne oppfyller minimumsanbefalingene for fysisk aktivitet.`,
    },
    {
      id: 'kroppsoving-vg2-9-1-def-1',
      type: 'definition',
      title: 'Folkehelse',
      content: `Folkehelse handler om befolkningens helsetilstand og hvordan helsen fordeler seg i en befolkning. Folkehelsearbeid er systematisk innsats for å fremme helse, forebygge sykdom og utjevne sosiale helseforskjeller.`,
    },
    {
      id: 'kroppsoving-vg2-9-1-def-2',
      type: 'definition',
      title: 'Livsstilssykdommer',
      content: `Livsstilssykdommer er sykdommer som i stor grad skyldes levevaner som fysisk inaktivitet, usunt kosthold, røyking og høyt alkoholforbruk. Eksempler er hjerte- og karsykdommer, diabetes type 2, flere kreftformer og overvekt.`,
    },
    {
      id: 'kroppsoving-vg2-9-1-text-1',
      type: 'text',
      content: `**WHOs anbefalinger for fysisk aktivitet (18-64 år)**

- Minst 150-300 minutter moderat fysisk aktivitet per uke, eller minst 75-150 minutter med høy intensitet
- Muskelstyrkeøvelser som involverer store muskelgrupper minst to dager per uke
- Begrense tid i ro og erstatte stillesitting med aktivitet av enhver intensitet
- For ytterligere helsegevinst: over 300 minutter moderat aktivitet per uke

For ungdom (5-17 år) anbefales minst 60 minutter moderat til høy intensitet daglig.`,
    },
    {
      id: 'kroppsoving-vg2-9-1-text-2',
      type: 'text',
      content: `**Helsegevinster ved regelmessig fysisk aktivitet**

Fysisk aktivitet reduserer risikoen for hjerte- og karsykdommer med opptil 35 %, diabetes type 2 med opptil 40 % og flere kreftformer med 20-30 %. I tillegg styrker aktivitet skjelettet, forbedrer mental helse og gir bedre søvnkvalitet. Selv små mengder aktivitet gir helsegevinst sammenlignet med å være helt inaktiv.`,
    },
    {
      id: 'kroppsoving-vg2-9-1-example-1',
      type: 'example',
      problem: 'En 17-åring sitter stille 10 timer daglig (skole + skjermtid). Hvordan kan hen oppfylle WHOs anbefalinger?',
      solution: `Eleven kan gå eller sykle til skolen (30 min), delta i friminuttaktivitet (15 min), trene organisert 3 ganger i uken (3 x 60 min), og ta bevegelsespauser fra stillesitting hver time. Dette gir over 60 minutter daglig aktivitet og inkluderer både utholdenhet og styrke.`,
    },
    {
      id: 'kroppsoving-vg2-9-1-text-3',
      type: 'text',
      content: `**Sosiale helseforskjeller**

Det er en tydelig sosial gradient i fysisk aktivitet: personer med høy utdanning og inntekt er generelt mer aktive enn de med lavere sosioøkonomisk status. Folkehelsearbeid handler derfor også om å legge til rette for aktivitet for alle, gjennom gratis fritidstilbud, trygge gang- og sykkelveier og inkluderende idrettsmiljøer.`,
    },
    {
      id: 'kroppsoving-vg2-9-1-tip-1',
      type: 'tip',
      title: 'Enhver bevegelse teller',
      content: `Du trenger ikke trene hardt for å få helsegevinst. Å gå trapper, stå i stedet for å sitte, og gå korte turer i hverdagen bidrar til bedre helse. Den største helsegevinsten får man ved å gå fra helt inaktiv til litt aktiv.`,
    },
    {
      id: 'kroppsoving-vg2-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva anbefaler WHO som minimum av fysisk aktivitet for voksne per uke?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig anbefaling fra WHO for voksne (18-64 år).',
            solution: '150-300 minutter moderat aktivitet eller 75-150 minutter med høy intensitet',
            multipleChoiceOptions: [
              '150-300 minutter moderat aktivitet eller 75-150 minutter med høy intensitet',
              '30 minutter lett aktivitet tre ganger i uken',
              '60 minutter høy intensitet daglig',
              '500 minutter moderat aktivitet per uke',
            ],
          },
        ],
        solution: 'WHO anbefaler 150-300 minutter moderat fysisk aktivitet per uke, eller 75-150 minutter med høy intensitet, pluss styrketrening minst to dager i uken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilke sykdommer regnes som typiske livsstilssykdommer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg gruppen som kun inneholder livsstilssykdommer.',
            solution: 'Hjerte- og karsykdommer, diabetes type 2 og overvekt',
            multipleChoiceOptions: [
              'Hjerte- og karsykdommer, diabetes type 2 og overvekt',
              'Forkjølelse, influensa og meslinger',
              'Brukket bein, forstuing og hjernerystelse',
              'Cøliaki, laktoseintoleranse og allergi',
            ],
          },
        ],
        solution: 'Livsstilssykdommer skyldes i stor grad levevaner. Hjerte- og karsykdommer, diabetes type 2, flere kreftformer og overvekt er klassiske eksempler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med sosial gradient i helse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på sosial gradient i helse.',
            solution: 'Helsen blir gradvis bedre jo høyere sosioøkonomisk status man har',
            multipleChoiceOptions: [
              'Helsen blir gradvis bedre jo høyere sosioøkonomisk status man har',
              'Alle i samfunnet har lik helse',
              'Bare rike mennesker kan bli syke',
              'Helseforskjeller skyldes kun genetikk',
            ],
          },
        ],
        solution: 'Sosial gradient i helse betyr at det er en trinnvis sammenheng mellom sosioøkonomisk status og helse. Jo høyere utdanning og inntekt, desto bedre helse i gjennomsnitt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva folkehelse betyr og gi to eksempler på folkehelsetiltak som kan øke fysisk aktivitet i befolkningen.',
        solution: 'Folkehelse handler om befolkningens helsetilstand og dens fordeling. Eksempler på tiltak: 1) Utbygging av sammenhengende gang- og sykkelveier slik at flere kan gå eller sykle til jobb og skole. 2) Gratis eller rimelige aktivitetstilbud i kommunen, som åpne idrettshaller og organiserte treningsgrupper for alle aldersgrupper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvorfor fysisk inaktivitet er et økende folkehelseproblem i moderne samfunn. Bruk minst tre argumenter.',
        solution: 'Fysisk inaktivitet øker fordi: 1) Teknologi og digitalisering gjør at vi sitter mer (skjermtid, kontorarbeid, transport). 2) Urbanisering og bilbasert samfunn reduserer hverdagsaktivitet som gåing og sykling. 3) Endrede fritidsvaner der passiv underholdning erstatter aktiv lek og uteaktivitet. Dette fører til økt forekomst av livsstilssykdommer og høyere helsekostnader for samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en ukeplan for fysisk aktivitet som oppfyller WHOs anbefalinger for ungdom. Inkluder type aktivitet, varighet og intensitet for hver dag.',
        solution: 'Eksempel: Mandag: Fotballtrening 90 min (høy intensitet). Tirsdag: Gå/sykle til skolen 30 min + styrketrening 30 min (moderat-høy). Onsdag: Svømming 60 min (moderat). Torsdag: Aktiv friminutt 20 min + sykling 40 min (moderat). Fredag: Fotballtrening 90 min (høy). Lørdag: Fjelltur 120 min (moderat). Søndag: Yoga/tøying 30 min + lett gåtur 30 min (lav-moderat). Totalt: over 60 min daglig, med styrke to dager og variasjon i intensitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2: Psykisk helse og fysisk aktivitet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_9_2: TextbookChapter = {
  id: 'kroppsoving-vg2-9-2',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '9.2',
  title: 'Psykisk helse og fysisk aktivitet',
  description: 'Utforsk sammenhengen mellom fysisk aktivitet og psykisk helse, inkludert stressmestring og mestringsopplevelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hvordan fysisk aktivitet påvirker psykisk helse',
    'gjøre rede for stressmestring gjennom bevegelse',
    'reflektere over sammenhengen mellom mestring, selvbilde og fysisk aktivitet',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-9-2-intro',
      type: 'text',
      content: `Fysisk aktivitet har dokumentert positiv effekt på psykisk helse. Forskning viser at regelmessig trening kan redusere symptomer på angst og depresjon, forbedre selvfølelse og øke livskvalitet. For ungdom er sammenhengen mellom bevegelse og psykisk velvære spesielt viktig.`,
    },
    {
      id: 'kroppsoving-vg2-9-2-def-1',
      type: 'definition',
      title: 'Psykisk helse',
      content: `Psykisk helse handler om hvordan vi tenker, føler og handler. God psykisk helse innebærer at man kan håndtere livets utfordringer, jobbe produktivt og bidra i samfunnet. Det er mer enn fravær av psykisk sykdom.`,
    },
    {
      id: 'kroppsoving-vg2-9-2-def-2',
      type: 'definition',
      title: 'Stressmestring',
      content: `Stressmestring er strategier og teknikker for å håndtere stress på en konstruktiv måte. Fysisk aktivitet er en effektiv stressmestringsteknikk fordi den senker nivåene av stresshormoner som kortisol og adrenalin, og øker produksjonen av endorfiner.`,
    },
    {
      id: 'kroppsoving-vg2-9-2-text-1',
      type: 'text',
      content: `**Biologiske mekanismer**

Når vi er fysisk aktive, frigjør hjernen signalstoffer som endorfiner, serotonin og dopamin. Endorfiner gir en følelse av velvære og kan dempe smerte. Serotonin regulerer humør, søvn og appetitt. Dopamin er knyttet til motivasjon og belønningsfølelse. I tillegg senker trening nivået av stresshormonene kortisol og adrenalin over tid.`,
    },
    {
      id: 'kroppsoving-vg2-9-2-text-2',
      type: 'text',
      content: `**Psykologiske effekter av fysisk aktivitet**

- **Mestringsopplevelse**: Å klare noe fysisk krevende styrker troen på egne evner
- **Selvbilde**: Regelmessig aktivitet forbedrer kroppsbilde og selvfølelse
- **Sosial tilhørighet**: Gruppeaktivitet gir fellesskap og reduserer ensomhet
- **Avkobling**: Trening fungerer som en mental pause fra bekymringer og grubling
- **Søvn**: Bedre søvnkvalitet gir bedre psykisk helse`,
    },
    {
      id: 'kroppsoving-vg2-9-2-example-1',
      type: 'example',
      problem: 'En elev opplever mye stress før eksamen. Hvordan kan fysisk aktivitet hjelpe?',
      solution: `Eleven kan bruke fysisk aktivitet som stressmestring på flere måter: 1) En rask gåtur på 20-30 minutter senker kortisolnivået og gir mental klarhet. 2) Yoga eller tøying kan aktivere det parasympatiske nervesystemet og dempe stressresponsen. 3) Regelmessig trening i ukene før eksamen gir bedre søvn, som igjen forbedrer konsentrasjon og hukommelse.`,
    },
    {
      id: 'kroppsoving-vg2-9-2-text-3',
      type: 'text',
      content: `**Fysisk aktivitet som forebygging og behandling**

Helsedirektoratet anbefaler fysisk aktivitet som del av behandlingen for mild til moderat depresjon. Studier viser at regelmessig trening kan ha like god effekt som medisiner for noen pasienter. For angstlidelser har trening vist seg å redusere symptomer ved å senke kroppens grunnleggende spenningsnivå.`,
    },
    {
      id: 'kroppsoving-vg2-9-2-tip-1',
      type: 'tip',
      title: 'Finn gleden i bevegelse',
      content: `Den beste treningen for psykisk helse er den du faktisk gjennomfører. Velg aktiviteter du liker, tren gjerne med andre, og legg vekt på opplevelsen fremfor prestasjonen. Naturopplevelser forsterker den positive effekten på psykisk helse.`,
    },
    {
      id: 'kroppsoving-vg2-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke signalstoffer frigjøres i hjernen ved fysisk aktivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig gruppe signalstoffer som øker ved trening.',
            solution: 'Endorfiner, serotonin og dopamin',
            multipleChoiceOptions: [
              'Endorfiner, serotonin og dopamin',
              'Kortisol, adrenalin og noradrenalin',
              'Insulin, glukagon og leptin',
              'Testosteron, østrogen og progesteron',
            ],
          },
        ],
        solution: 'Ved fysisk aktivitet frigjøres endorfiner (velvære), serotonin (humørregulering) og dopamin (motivasjon og belønning). Samtidig senkes stresshormonene kortisol og adrenalin.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er stressmestring?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den mest presise beskrivelsen av stressmestring.',
            solution: 'Strategier for å håndtere stress på en konstruktiv måte',
            multipleChoiceOptions: [
              'Strategier for å håndtere stress på en konstruktiv måte',
              'Å unngå alle stressende situasjoner',
              'Å ta medisiner mot stress',
              'Å ignorere stresset til det forsvinner',
            ],
          },
        ],
        solution: 'Stressmestring handler om å bruke konstruktive strategier for å håndtere stress, som fysisk aktivitet, pusteøvelser, sosial støtte og god tidsplanlegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan påvirker fysisk aktivitet selvbildet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste psykologiske mekanismen bak bedre selvbilde gjennom trening.',
            solution: 'Mestringsopplevelser styrker troen på egne evner',
            multipleChoiceOptions: [
              'Mestringsopplevelser styrker troen på egne evner',
              'Man blir automatisk mer populær',
              'Man får bedre karakterer på skolen',
              'Man trenger mindre søvn',
            ],
          },
        ],
        solution: 'Mestringsopplevelser fra fysisk aktivitet styrker selvbildet. Når man opplever at kroppen mestrer utfordringer, overføres denne troen til andre livsområder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar med egne ord hvordan fysisk aktivitet kan bidra til bedre psykisk helse. Bruk minst to biologiske og to psykologiske mekanismer i svaret ditt.',
        solution: 'Biologisk: 1) Trening øker produksjonen av endorfiner som gir velvære og demper smerte. 2) Serotoninnivået øker, noe som regulerer humør og forebygger depressive symptomer. Psykologisk: 1) Mestringsopplevelser fra trening styrker selvtillit og tro på egne evner. 2) Sosial deltakelse i gruppeaktiviteter gir tilhørighet og reduserer ensomhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvorfor Helsedirektoratet anbefaler fysisk aktivitet som del av behandlingen for mild til moderat depresjon. Hva er fordelene og ulempene sammenlignet med medikamentell behandling?',
        solution: 'Fordeler med fysisk aktivitet: Ingen bivirkninger, forbedrer flere helseaspekter samtidig (søvn, fysisk form, sosialt), gir mestringsopplevelser og økt selvfølelse, og kan vedlikeholdes over lang tid. Ulemper/utfordringer: Krever egen motivasjon og initiativ, effekten kan ta tid, og det er ikke tilstrekkelig for alvorlig depresjon. Medisiner virker raskere, men kan gi bivirkninger og løser ikke underliggende årsaker alene. En kombinasjon er ofte best.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag et forslag til et stressmestringsprogram for en skoleklasse i eksamensperioden. Inkluder ulike typer fysisk aktivitet og begrunn valgene dine.',
        solution: 'Eksempel: Uke 1-3 før eksamen: 1) Morgenøkt med yoga/tøying (15 min) for å senke stresshormoner og øke fokus. 2) Lunsj-gåtur i naturen (20 min) for avkobling og frisk luft. 3) Ettermiddagsøkt med ballspill/lek (30 min, 2x/uke) for sosial tilhørighet og endorfinproduksjon. 4) Individuell rolig aktivitet (svømming/sykling, 1x/uke) for egentid og mental restitusjon. Begrunnelse: Variasjon i aktivitetstype dekker ulike behov, lav terskel gjør at alle kan delta, og regelmessigheten sikrer vedvarende stressreduksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.3: Ernæring og fysisk aktivitet
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_9_3: TextbookChapter = {
  id: 'kroppsoving-vg2-9-3',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '9.3',
  title: 'Ernæring og fysisk aktivitet',
  description: 'Lær om sammenhengen mellom ernæring og fysisk prestasjon, inkludert makronæringsstoffer og ernæringslære.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for makronæringsstoffenes rolle i kroppen',
    'forklare sammenhengen mellom ernæring og fysisk prestasjon',
    'vurdere eget kosthold i lys av anbefalinger for fysisk aktive',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-9-3-intro',
      type: 'text',
      content: `Ernæring er drivstoffet for fysisk aktivitet. Hva du spiser og drikker påvirker både prestasjonsevne, restitusjon og helse. For å forstå dette trenger du kunnskap om makronæringsstoffer, energibehov og væskebalanse.`,
    },
    {
      id: 'kroppsoving-vg2-9-3-def-1',
      type: 'definition',
      title: 'Makronæringsstoffer',
      content: `Makronæringsstoffer er næringsstoffene kroppen trenger i store mengder for å fungere: karbohydrater, proteiner og fett. Hvert makronæringsstoff har ulike funksjoner og gir ulik mengde energi per gram.`,
    },
    {
      id: 'kroppsoving-vg2-9-3-def-2',
      type: 'definition',
      title: 'Energibalanse',
      content: `Energibalanse er forholdet mellom energiinntak (kalorier fra mat og drikke) og energiforbruk (forbrenning gjennom basalstoffskifte, aktivitet og fordøyelse). Positiv energibalanse gir vektøkning, negativ gir vektnedgang.`,
    },
    {
      id: 'kroppsoving-vg2-9-3-text-1',
      type: 'text',
      content: `**De tre makronæringsstoffene**

**Karbohydrater (4 kcal/g)**:
- Kroppens foretrukne energikilde ved moderat til høy intensitet
- Lagres som glykogen i muskler og lever
- Kilder: brød, ris, pasta, frukt, grønnsaker

**Proteiner (4 kcal/g)**:
- Byggestein for muskler, enzymer og hormoner
- Viktig for restitusjon og muskeloppbygging
- Kilder: kjøtt, fisk, egg, meieriprodukter, belgfrukter

**Fett (9 kcal/g)**:
- Viktig energikilde ved lav intensitet og lang varighet
- Nødvendig for opptak av fettløselige vitaminer
- Kilder: nøtter, oljer, fisk, avokado`,
    },
    {
      id: 'kroppsoving-vg2-9-3-example-1',
      type: 'example',
      problem: 'En aktiv ungdom trener fotball 4 ganger i uken. Hva bør en typisk dagsmeny inneholde?',
      solution: `Frokost: Havregrøt med bær og nøtter (karbohydrater + fett + fiber). Lunsj: Grovbrød med egg og grønnsaker (karbohydrater + protein). Mellommåltid: Frukt og yoghurt (karbohydrater + protein). Middag: Laks, søtpotet og brokkoli (protein + karbohydrater + fett + vitaminer). Kveldsmat: Knekkebrød med ost og paprika (karbohydrater + protein + fett). I tillegg 1,5-2 liter vann fordelt utover dagen. Karbohydrater utgjør ca. 55 %, protein 15-20 % og fett 25-30 % av totalenergien.`,
    },
    {
      id: 'kroppsoving-vg2-9-3-text-2',
      type: 'text',
      content: `**Ernæring rundt trening**

**Før trening (1-3 timer før)**: Lett, karbohydratrik mat som gir stabil energi uten å ligge tungt i magen. Eksempel: brødskive med banan.

**Under trening (over 60 min)**: Væske med elektrolytter. Ved hard trening over 90 minutter kan sportsdrikke eller energibar være nyttig.

**Etter trening (innen 30-60 min)**: Kombinasjon av karbohydrater og protein for å fylle glykogenlagrene og starte muskelrestitusjon. Eksempel: sjokolademelk eller brødskive med pålegg.`,
    },
    {
      id: 'kroppsoving-vg2-9-3-text-3',
      type: 'text',
      content: `**Væskebalanse**

Kroppen består av ca. 60 % vann, og selv mild dehydrering (2 % kroppsvekttap) kan redusere prestasjonsevnen merkbart. Drikk jevnlig gjennom dagen og ekstra ved trening. Tørste er ikke alltid et pålitelig signal, spesielt under intens aktivitet.`,
    },
    {
      id: 'kroppsoving-vg2-9-3-def-3',
      type: 'definition',
      title: 'Glykogen',
      content: `Glykogen er kroppens lagringsform av karbohydrater. Det lagres i muskler og lever og er en viktig energikilde under fysisk aktivitet med moderat til høy intensitet. Muskelglykogenlagrene rommer ca. 400-500 gram hos en voksen person.`,
    },
    {
      id: 'kroppsoving-vg2-9-3-tip-1',
      type: 'tip',
      title: 'Unngå kostholdsfeller',
      content: `Vær kritisk til kostholdsråd fra sosiale medier. Ekstreme dietter og kosttilskudd er sjelden nødvendig for ungdom. Et variert kosthold med nok energi er det viktigste for helse og prestasjon.`,
    },
    {
      id: 'kroppsoving-vg2-9-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mye energi gir 1 gram av hvert makronæringsstoff?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig energiinnhold per gram for karbohydrater, protein og fett.',
            solution: 'Karbohydrater: 4 kcal, protein: 4 kcal, fett: 9 kcal',
            multipleChoiceOptions: [
              'Karbohydrater: 4 kcal, protein: 4 kcal, fett: 9 kcal',
              'Karbohydrater: 9 kcal, protein: 4 kcal, fett: 4 kcal',
              'Karbohydrater: 7 kcal, protein: 7 kcal, fett: 7 kcal',
              'Karbohydrater: 4 kcal, protein: 9 kcal, fett: 4 kcal',
            ],
          },
        ],
        solution: 'Karbohydrater og proteiner gir begge 4 kcal per gram, mens fett gir 9 kcal per gram. Fett er derfor den mest energitette makronæringsstoffen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er glykogen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av glykogen.',
            solution: 'Kroppens lagringsform av karbohydrater i muskler og lever',
            multipleChoiceOptions: [
              'Kroppens lagringsform av karbohydrater i muskler og lever',
              'En type protein som bygger muskler',
              'Fettvev som lagres rundt organene',
              'Et hormon som regulerer blodsukker',
            ],
          },
        ],
        solution: 'Glykogen er karbohydrater lagret i muskler og lever. Det brytes ned til glukose og brukes som energi under fysisk aktivitet, spesielt ved moderat til høy intensitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva bør man spise etter trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det beste måltidet innen 30-60 minutter etter hard trening.',
            solution: 'Kombinasjon av karbohydrater og protein, for eksempel sjokolademelk',
            multipleChoiceOptions: [
              'Kombinasjon av karbohydrater og protein, for eksempel sjokolademelk',
              'Bare rent fett for å fylle energilagrene',
              'Ingenting, kroppen trenger faste etter trening',
              'Bare vann, mat forstyrrer restitusjonen',
            ],
          },
        ],
        solution: 'Etter trening bør man spise en kombinasjon av karbohydrater (fyller glykogenlagrene) og protein (starter muskelreparasjon) innen 30-60 minutter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom de tre makronæringsstoffene og beskriv hvilken rolle hver av dem spiller under fysisk aktivitet.',
        solution: 'Karbohydrater er kroppens foretrukne energikilde ved moderat til høy intensitet, lagres som glykogen og gir rask energi. Proteiner er byggesteiner for muskler og vev, viktige for restitusjon og reparasjon etter trening. Fett er en viktig energikilde ved lav intensitet og langvarig aktivitet, og er nødvendig for opptak av vitaminer og hormonproduksjon. Under trening bruker kroppen en blanding av alle tre, men fordelingen avhenger av intensitet og varighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvorfor mange ungdommer er sårbare for kostholdstrender fra sosiale medier. Hva kan være konsekvensene av å følge ekstreme dietter?',
        solution: 'Ungdommer er sårbare fordi: 1) Kroppen er i vekst og utvikling og trenger tilstrekkelig energi og næringsstoffer. 2) Sosiale medier skaper urealistiske kroppsidealer. 3) Manglende kunnskap gjør det vanskelig å vurdere råd kritisk. Konsekvenser av ekstreme dietter kan være energimangel, forstyrrelser i menstruasjonssyklus, dårligere treningsresultater, utvikling av spiseforstyrrelser, svekket immunforsvar og redusert benmasse. Et balansert kosthold er alltid tryggere enn ekstreme dietter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en ernæringsplan for en hel treningsdag (før, under og etter trening) for en idrettsutøver som trener to ganger den dagen. Begrunn valgene ut fra ernæringslære.',
        solution: 'Frokost (07:00): Havregrøt med melk, blåbær og honning. Begrunning: Komplekse karbohydrater for langvarig energi, protein fra melk. Formiddagsmat (10:00): Banan og en håndfull nøtter. Begrunnelse: Rask energi fra karbohydrater og sunt fett. Trening 1 (11:00-12:30): Vann med elektrolytter under trening. Lunsj (13:00): Kylling, fullkornsris, grønnsaker og olivenolje. Begrunnelse: Protein for restitusjon, karbohydrater for å fylle glykogen, grønnsaker for vitaminer. Mellommåltid (16:00): Yoghurt med müsli. Begrunnelse: Protein og karbohydrater før trening 2. Trening 2 (17:00-18:30): Sportsdrikke ved behov. Middag (19:00): Laks, søtpotet, brokkoli. Begrunnelse: Protein og omega-3 for restitusjon, karbohydrater og vitaminer. Kveldsmat (21:00): Cottage cheese med knekkebrød. Begrunnelse: Kaseinprotein for langsom opptak gjennom natten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.4: Søvn, restitusjon og stress
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_9_4: TextbookChapter = {
  id: 'kroppsoving-vg2-9-4',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '9.4',
  title: 'Søvn, restitusjon og stress',
  description: 'Forstå betydningen av søvn og restitusjon for helse og prestasjon, og lær om god søvnhygiene.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare søvnens betydning for restitusjon og helse',
    'gjøre rede for prinsipper for god søvnhygiene',
    'forstå sammenhengen mellom stress, søvn og fysisk prestasjon',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-9-4-intro',
      type: 'text',
      content: `Søvn er like viktig for helse og prestasjon som trening og ernæring. Under søvn reparerer kroppen vev, konsoliderer hukommelse og gjenoppretter energilagrene. Ungdom trenger 8-10 timer søvn per natt, men studier viser at mange får for lite.`,
    },
    {
      id: 'kroppsoving-vg2-9-4-def-1',
      type: 'definition',
      title: 'Søvnhygiene',
      content: `Søvnhygiene er vaner og rutiner som fremmer god søvnkvalitet. Dette inkluderer faste leggetider, begrensning av skjermbruk før sengetid, et mørkt og kjølig soverom, og å unngå koffein sent på dagen.`,
    },
    {
      id: 'kroppsoving-vg2-9-4-def-2',
      type: 'definition',
      title: 'Restitusjon',
      content: `Restitusjon er kroppens gjenoppbyggingsprosess etter fysisk belastning. Under restitusjon repareres muskelfibre, glykogenlagrene fylles, og kroppen tilpasser seg treningsbelastningen (superkompensasjon). Tilstrekkelig restitusjon er avgjørende for treningseffekt.`,
    },
    {
      id: 'kroppsoving-vg2-9-4-text-1',
      type: 'text',
      content: `**Søvnfaser og deres funksjon**

Søvnen er delt i sykluser på ca. 90 minutter, med ulike faser:

- **Lett søvn (N1-N2)**: Overgang til dyp søvn, kroppen slapper av
- **Dyp søvn (N3)**: Viktigst for fysisk restitusjon, veksthormon frigjøres, immunforsvaret styrkes
- **REM-søvn**: Viktig for hukommelse, læring og emosjonell regulering, hjernen bearbeider inntrykk

En natt med 8 timer søvn inneholder typisk 4-5 slike sykluser.`,
    },
    {
      id: 'kroppsoving-vg2-9-4-text-2',
      type: 'text',
      content: `**Konsekvenser av søvnmangel**

- Redusert reaksjonstid og konsentrasjon
- Svekket immunforsvar og økt sykdomsrisiko
- Dårligere treningseffekt og lengre restitusjonstid
- Økt nivå av stresshormonet kortisol
- Økt appetitt og risiko for vektøkning (påvirker hormonene leptin og ghrelin)
- Svekket hukommelse og læringsevne`,
    },
    {
      id: 'kroppsoving-vg2-9-4-example-1',
      type: 'example',
      problem: 'En elev på 17 år sover i gjennomsnitt 6 timer per natt. Hvilke konsekvenser kan dette ha for treningseffekten?',
      solution: `Med kun 6 timer søvn (2-4 timer under anbefalt) vil eleven oppleve: 1) Redusert utskillelse av veksthormon som er viktig for muskeloppbygging. 2) Ufullstendig restitusjon mellom treningsøkter, som gir økt skaderisiko. 3) Svekket koordinasjon og reaksjonstid under trening. 4) Lavere motivasjon og økt opplevd anstrengelse. Over tid kan dette føre til overtrenning og stagnasjon i stedet for fremgang.`,
    },
    {
      id: 'kroppsoving-vg2-9-4-text-3',
      type: 'text',
      content: `**Praktiske tiltak for bedre søvnhygiene**

1. Faste legge- og våknetider, også i helgene (maks 1 times avvik)
2. Unngå skjerm (mobil, PC, TV) minst 30-60 minutter før sengetid
3. Soverommet bør være mørkt, kjølig (16-18 grader) og stille
4. Unngå koffein etter kl. 14 og store måltider rett før sengetid
5. Regelmessig fysisk aktivitet forbedrer søvnkvaliteten, men unngå hard trening de siste 2-3 timene før sengetid`,
    },
    {
      id: 'kroppsoving-vg2-9-4-tip-1',
      type: 'tip',
      title: 'Søvndagbok',
      content: `Før en søvndagbok i én uke der du noterer leggetid, våknetid, søvnkvalitet og dagsform. Dette gir deg innsikt i ditt eget søvnmønster og hjelper deg å identifisere hva som påvirker søvnen din.`,
    },
    {
      id: 'kroppsoving-vg2-9-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor mye søvn anbefales for ungdom per natt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig søvnanbefaling for ungdom.',
            solution: '8-10 timer per natt',
            multipleChoiceOptions: [
              '8-10 timer per natt',
              '5-6 timer per natt',
              '12-14 timer per natt',
              '6-7 timer er nok for alle',
            ],
          },
        ],
        solution: 'Ungdom (14-17 år) anbefales 8-10 timer søvn per natt. Under dyp søvn frigjøres veksthormon som er viktig for vekst og restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva skjer under dyp søvn (N3-fasen)?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den viktigste funksjonen til dyp søvn.',
            solution: 'Fysisk restitusjon, veksthormon frigjøres og immunforsvaret styrkes',
            multipleChoiceOptions: [
              'Fysisk restitusjon, veksthormon frigjøres og immunforsvaret styrkes',
              'Hjernen er helt inaktiv og hviler',
              'Kroppen forbrenner mest kalorier',
              'Man drømmer mest i denne fasen',
            ],
          },
        ],
        solution: 'Dyp søvn (N3) er den viktigste fasen for fysisk restitusjon. Veksthormon frigjøres, muskulatur repareres, og immunforsvaret styrkes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er søvnhygiene?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av søvnhygiene.',
            solution: 'Vaner og rutiner som fremmer god søvnkvalitet',
            multipleChoiceOptions: [
              'Vaner og rutiner som fremmer god søvnkvalitet',
              'Å vaske seg grundig før sengetid',
              'Å sove så lenge som mulig i helgene',
              'Bruk av sovemedisin for å sovne raskere',
            ],
          },
        ],
        solution: 'Søvnhygiene er vaner som fremmer god søvn, som faste leggetider, å unngå skjerm før sengetid, et mørkt og kjølig soverom, og å begrense koffein.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar begrepet restitusjon og beskriv hvorfor det er viktig for treningseffekten. Hva skjer dersom man ikke får tilstrekkelig restitusjon?',
        solution: 'Restitusjon er kroppens gjenoppbyggingsprosess etter trening. Under restitusjon repareres skadet muskelvev, glykogenlagrene fylles opp, og kroppen tilpasser seg (superkompensasjon) slik at den tåler mer neste gang. Uten tilstrekkelig restitusjon brytes kroppen ned i stedet for å bygges opp, noe som kan føre til overtrenning med symptomer som kronisk tretthet, nedsatt prestasjon, økt skaderisiko, søvnproblemer og svekket immunforsvar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft sammenhengen mellom søvn, stress og fysisk prestasjon. Hvordan kan de tre faktorene påvirke hverandre i en negativ eller positiv spiral?',
        solution: 'Negativ spiral: Stress fører til dårlig søvn, dårlig søvn øker kortisol (stresshormon), økt kortisol svekker restitusjon og prestasjon, dårligere prestasjon gir mer stress. Positiv spiral: Regelmessig trening reduserer stress, lavere stress gir bedre søvnkvalitet, god søvn gir bedre restitusjon og lavere kortisolnivå, god restitusjon gir bedre prestasjon, som igjen gir mestring og mindre stress. Nøkkelen er å bryte en negativ spiral ved å forbedre ett element, for eksempel gjennom bedre søvnhygiene eller moderat trening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser ditt eget søvnmønster den siste uken. Beskriv leggetider, våknetider og søvnkvalitet, og lag en konkret plan med fem tiltak for å forbedre søvnen din basert på prinsippene for søvnhygiene.',
        solution: 'Eksempel: Analyse: Legger meg kl. 23:30-01:00, våkner kl. 07:00, gjennomsnittlig 6,5 timer søvn, bruker mobilen i sengen. Søvnkvaliteten er varierende. Plan: 1) Sette fast leggetid kl. 22:30 og alarm kl. 07:00 alle dager. 2) Legge mobilen til lading utenfor soverommet fra kl. 22:00. 3) Senke temperaturen i soverommet til 17 grader og bruke blendingsgardiner. 4) Ikke drikke kaffe eller energidrikk etter kl. 14:00. 5) Gjennomføre 10 minutter med avspenningsøvelser eller rolig musikk før sengetid. Mål: 8 timer søvn per natt innen to uker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.5: Motivasjon og atferdsendring
// ============================================================================

export const CHAPTER_KROPPSOVING_VG2_9_5: TextbookChapter = {
  id: 'kroppsoving-vg2-9-5',
  courseId: 'kroppsoving-vg2',
  chapterNumber: '9.5',
  title: 'Motivasjon og atferdsendring',
  description: 'Lær om motivasjonsteorier, den transteoretiske modellen og nudging for å fremme varige atferdsendringer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for ulike motivasjonsteorier knyttet til fysisk aktivitet',
    'forklare den transteoretiske modellen for atferdsendring',
    'drøfte nudging som strategi for å fremme fysisk aktivitet',
  ],
  content: [
    {
      id: 'kroppsoving-vg2-9-5-intro',
      type: 'text',
      content: `Å vite at fysisk aktivitet er bra for helsen er ikke nok - man må også klare å gjennomføre det i praksis. Motivasjon og atferdsendring er nøkkelen til å gå fra kunnskap til handling. I dette kapittelet ser vi på teorier som forklarer hvorfor vi handler som vi gjør, og strategier for varig endring.`,
    },
    {
      id: 'kroppsoving-vg2-9-5-def-1',
      type: 'definition',
      title: 'Den transteoretiske modellen',
      content: `Den transteoretiske modellen (Prochaska & DiClemente) beskriver atferdsendring som en prosess gjennom fem stadier: 1) Føroverveielsesfasen (ikke klar for endring), 2) Overveielsesfasen (vurderer endring), 3) Forberedelsesfasen (planlegger endring), 4) Handlingsfasen (gjennomfører endring), 5) Vedlikeholdsfasen (opprettholder endring). Tilbakefall er normalt og en del av prosessen.`,
    },
    {
      id: 'kroppsoving-vg2-9-5-def-2',
      type: 'definition',
      title: 'Nudging',
      content: `Nudging (dulting) er å tilrettelegge omgivelsene slik at sunne valg blir de enkleste valgene, uten å fjerne andre alternativer. Eksempler er å plassere frukt fremst i kantinen, gjøre trapper mer synlige enn heiser, eller legge sykkelstativ nær inngangen.`,
    },
    {
      id: 'kroppsoving-vg2-9-5-text-1',
      type: 'text',
      content: `**Indre og ytre motivasjon**

**Indre motivasjon**: Drives av interesse, glede og tilfredsstillelse ved selve aktiviteten. Eksempel: Du løper fordi du elsker følelsen av å bevege deg i naturen.

**Ytre motivasjon**: Drives av belønning, straff eller sosiale forventninger. Eksempel: Du trener for å få gode karakterer i kroppsøving eller for å se bra ut.

Forskning viser at indre motivasjon gir mer varig atferdsendring enn ytre motivasjon. Selvbestemmelsesteorien (Deci & Ryan) peker på tre grunnleggende behov: autonomi, kompetanse og tilhørighet.`,
    },
    {
      id: 'kroppsoving-vg2-9-5-example-1',
      type: 'example',
      problem: 'Maria (17 år) vil begynne å trene, men har ikke klart å holde det ved like tidligere. Hvor er hun i den transteoretiske modellen, og hva kan hun gjøre?',
      solution: `Maria er sannsynligvis i overveielsesfasen eller forberedelsesfasen. Hun vet at hun vil trene, men strever med gjennomføring. Tiltak: 1) Sette konkrete, realistiske mål (f.eks. gå 20 min 3x/uke). 2) Finne aktiviteter hun liker (indre motivasjon). 3) Trene med en venn (sosial støtte og tilhørighet). 4) Legge treningsklær klar kvelden før (nudging). 5) Feire små seire og akseptere tilbakefall som en del av prosessen.`,
    },
    {
      id: 'kroppsoving-vg2-9-5-text-2',
      type: 'text',
      content: `**Strategier for varig atferdsendring**

- **SMART-mål**: Spesifikke, Målbare, Ambisiøse, Realistiske og Tidsbestemte mål
- **Implementeringsintensjoner**: "Hvis det er mandag kl. 16, så går jeg en tur i 30 min"
- **Sosial støtte**: Tren med venner eller bli med i en gruppe
- **Nudging**: Gjør det sunne valget enkelt (legg treningsklær klar, ha frukt tilgjengelig)
- **Selvovervåking**: Bruk treningsdagbok eller app for å følge fremgangen
- **Belønning**: Feire milepæler uten å undergrave målet`,
    },
    {
      id: 'kroppsoving-vg2-9-5-text-3',
      type: 'text',
      content: `**Barrierer mot fysisk aktivitet**

Vanlige barrierer er tidsmangel, lav motivasjon, manglende kunnskap, dårlig tilgang til fasiliteter, og negativt kroppsbilde. For å overvinne barrierer bør man identifisere sine egne hindringer og lage konkrete strategier for å håndtere dem. Ofte handler det om å senke terskelen for å komme i gang.`,
    },
    {
      id: 'kroppsoving-vg2-9-5-tip-1',
      type: 'tip',
      title: 'Start smått og bygg opp',
      content: `Den vanligste feilen er å starte for hardt og gi opp etter kort tid. Begynn med noe du mestrer og som passer inn i hverdagen din. En 15-minutters gåtur er bedre enn en treningsøkt du aldri gjennomfører.`,
    },
    {
      id: 'kroppsoving-vg2-9-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fem stadiene i den transteoretiske modellen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig rekkefølge av stadiene i den transteoretiske modellen.',
            solution: 'Føroverveielses-, overveielses-, forberedelses-, handlings- og vedlikeholdsfasen',
            multipleChoiceOptions: [
              'Føroverveielses-, overveielses-, forberedelses-, handlings- og vedlikeholdsfasen',
              'Planlegging, gjennomføring, evaluering, refleksjon og avslutning',
              'Start, oppbygging, konkurranse, nedtrapping og hvile',
              'Motivasjon, trening, prestasjon, restitusjon og tilpasning',
            ],
          },
        ],
        solution: 'Den transteoretiske modellen beskriver fem stadier: føroverveielsesfasen (ikke klar), overveielsesfasen (vurderer), forberedelsesfasen (planlegger), handlingsfasen (gjennomfører) og vedlikeholdsfasen (opprettholder).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er nudging?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på nudging.',
            solution: 'Å tilrettelegge omgivelsene slik at sunne valg blir de enkleste valgene',
            multipleChoiceOptions: [
              'Å tilrettelegge omgivelsene slik at sunne valg blir de enkleste valgene',
              'Å tvinge folk til å ta sunne valg gjennom lover og regler',
              'En treningsmetode for å øke styrke',
              'Å straffe usunne valg med bøter',
            ],
          },
        ],
        solution: 'Nudging betyr å tilrettelegge omgivelsene for sunne valg uten å fjerne valgfriheten. Eksempler er å plassere frukt synlig, gjøre trapper attraktive, og ha sykkelstativ nær inngangen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom indre og ytre motivasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av indre motivasjon.',
            solution: 'Motivasjon som drives av interesse og glede ved selve aktiviteten',
            multipleChoiceOptions: [
              'Motivasjon som drives av interesse og glede ved selve aktiviteten',
              'Motivasjon som kommer fra belønning og straff',
              'Motivasjon som bare finnes hos toppidrettsutøvere',
              'Motivasjon som skyldes press fra andre mennesker',
            ],
          },
        ],
        solution: 'Indre motivasjon drives av glede og interesse ved selve aktiviteten, mens ytre motivasjon drives av belønning, straff eller sosiale forventninger. Indre motivasjon gir mer varig atferdsendring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Bruk den transteoretiske modellen til å beskrive en persons vei fra inaktiv til aktiv livsstil. Gi eksempler på hva som kjennetegner hvert stadium og hvilke strategier som kan hjelpe på hvert steg.',
        solution: '1) Føroverveielsesfasen: Personen ser ikke behovet for endring. Strategi: øke bevissthet gjennom informasjon om helsegevinster. 2) Overveielsesfasen: Personen vurderer å bli mer aktiv, men er usikker. Strategi: veie fordeler mot ulemper, besøke ulike aktivitetstilbud. 3) Forberedelsesfasen: Personen planlegger å begynne. Strategi: sette SMART-mål, kjøpe utstyr, melde seg på aktivitet. 4) Handlingsfasen: Personen gjennomfører den nye atferden. Strategi: sosial støtte, belønning, treningsdagbok. 5) Vedlikeholdsfasen: Atferden er blitt en vane (over 6 måneder). Strategi: variasjon, nye mål, akseptere tilbakefall som normalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan en skole kan bruke nudging for å øke fysisk aktivitet blant elevene. Gi minst fire konkrete eksempler og forklar hvorfor de kan fungere.',
        solution: '1) Male trappene i fargerike farger og henge opp motiverende plakater, slik at trappene blir mer attraktive enn heisen - dette gjør det aktive valget synlig og appellerende. 2) Plassere ballkurver og aktivitetsutstyr lett tilgjengelig i skolegården, slik at terskelen for å leke og bevege seg senkes. 3) Legge gang- og sykkelveier nærmere skoleinngangen enn parkeringsplassen, som gjør det mer praktisk å gå/sykle. 4) Innføre stående pulter eller bevegelsesstasjoner i fellesarealer, som reduserer stillesitting uten å tvinge noen. Nudging fungerer fordi det endrer standardvalget uten å fjerne valgfriheten, og menneskelig atferd styres ofte av det som er enklest og mest tilgjengelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg2-9-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg2-9-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Identifiser dine tre største barrierer mot regelmessig fysisk aktivitet. Lag deretter en personlig handlingsplan med SMART-mål og konkrete strategier basert på motivasjonsteoriene i dette kapittelet.',
        solution: 'Eksempel: Barrierer: 1) Tidsmangel pga. lekser. 2) Manglende treningskompis. 3) Lav motivasjon i mørke årstider. Handlingsplan: SMART-mål: "Jeg skal gå en 30-minutters tur med en venn minst 3 dager i uken de neste 4 ukene." Strategier: 1) Implementeringsintensjoner: "Hvis klokken er 15:30 på mandag, onsdag og fredag, går jeg tur med Kari." 2) Nudging: Legge turklær klar ved døren. 3) Indre motivasjon: Velge naturstier jeg synes er fine, lytte til podcast underveis. 4) Selvovervåking: Registrere turer i app og evaluere etter 4 uker. 5) Akseptere tilbakefall: Dersom jeg hopper over en dag, er det ikke mislykket - jeg fortsetter neste planlagte dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i kapittel 9
// ============================================================================

export const KROPPSOVING_VG2_KAP9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG2_9_1,
  CHAPTER_KROPPSOVING_VG2_9_2,
  CHAPTER_KROPPSOVING_VG2_9_3,
  CHAPTER_KROPPSOVING_VG2_9_4,
  CHAPTER_KROPPSOVING_VG2_9_5,
];
