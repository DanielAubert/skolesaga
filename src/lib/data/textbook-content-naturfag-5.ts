/**
 * Tekstbok innhold for Naturfag 5. klasse
 *
 * Følger LK20 læreplan for naturfag barneskole.
 * Innhold tilpasset 10-11 åringer.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Skjelettet og musklene
// ============================================================================

export const CHAPTER_NATURFAG_5_1_1: TextbookChapter = {
  id: 'naturfag-5-1-1',
  courseId: 'naturfag-5',
  chapterNumber: '1.1',
  title: 'Skjelettet og musklene',
  description: 'Lær om hvordan skjelettet og musklene våre fungerer sammen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive hvordan kroppen reagerer og utvikler seg',
    'utforske og samtale om teknologi og kropp'
  ],
  content: [
    {
      id: 'nat-5-1-1-intro',
      type: 'text',
      content: `
# Skjelettet og musklene

Kroppen din er en fantastisk maskin! **Skjelettet** holder deg oppreist, og
**musklene** lar deg bevege deg. Sammen gjør de det mulig å gå, løpe, hoppe og danse!
      `
    },
    {
      id: 'nat-5-1-1-def-skjelett',
      type: 'definition',
      title: 'Skjelettet',
      content: `**Skjelettet** er kroppens rammeverk. Det består av omtrent **206 knokler** (bein).

Skjelettets oppgaver:
- **Støtte**: Holder kroppen oppreist
- **Beskyttelse**: Kraniet beskytter hjernen, ribbeina beskytter hjertet og lungene
- **Bevegelse**: Gir festepunkter for muskler
- **Blodproduksjon**: Inni noen knokler lages blodceller`
    },
    {
      id: 'nat-5-1-1-viktige-knokler',
      type: 'text',
      title: 'Viktige knokler',
      content: `
## Viktige deler av skjelettet

**Hodet:**
- **Kraniet**: Beskytter hjernen
- **Kjeven**: Den eneste knokkelen i hodet som kan bevege seg

**Overkroppen:**
- **Ryggraden**: 33 ryggvirvler som beskytter ryggmargen
- **Ribbeina**: 12 par ribbein som beskytter hjertet og lungene
- **Brystbeinet**: Beinplaten foran på brystet

**Armer og ben:**
- **Overarmsbeinet, albuen, underarmsbeina**
- **Lårbeinet** (kroppens lengste knokkel!)
- **Kneskåla, leggbeina**
      `
    },
    {
      id: 'nat-5-1-1-def-muskel',
      type: 'definition',
      title: 'Muskler',
      content: `**Muskler** er kroppens motorer. De kan **trekke seg sammen** og gjøre seg kortere.

Du har over **600 muskler** i kroppen!

**Tre typer muskler:**
- **Skjelettmuskler**: Muskler du kan styre selv (f.eks. armmuskler)
- **Glatt muskulatur**: Muskler du ikke styrer (f.eks. i tarmene)
- **Hjertemuskelen**: En spesiell muskel som jobber hele livet`
    },
    {
      id: 'nat-5-1-1-samarbeid',
      type: 'text',
      title: 'Muskler arbeider i par',
      content: `
## Muskler arbeider i par

Muskler kan bare **trekke**, ikke skyve. Derfor jobber de alltid i par!

**Eksempel - armen:**
- Når du bøyer armen, trekker **biceps** (overarmsmuskelen foran) seg sammen
- Når du strekker armen, trekker **triceps** (overarmsmuskelen bak) seg sammen

Når én muskel trekker seg sammen, slapper den andre av!
      `
    },
    {
      id: 'nat-5-1-1-example',
      type: 'example',
      title: 'Prøv selv!',
      problem: 'Hvordan kan du kjenne musklene jobbe?',
      solution: `**Prøv dette:**

1. Legg hånden på overarmen din
2. Bøy armen - kjenn at muskelen foran blir hard
3. Strekk armen - kjenn at muskelen bak blir hard

Du kan også prøve:
- Sett deg på huk og reis deg opp - kjenn lårmusklene jobbe
- Gå på tærne - kjenn leggmusklene`
    },
    {
      id: 'nat-5-1-1-ledd',
      type: 'definition',
      title: 'Ledd',
      content: `**Ledd** er steder der to knokler møtes og kan bevege seg.

**Typer ledd:**
- **Hengselsledd**: Kan bøyes én vei (kne, albue)
- **Kuleledd**: Kan bevege seg i mange retninger (skulder, hofte)
- **Vridledd**: Kan vri (mellom hode og nakke)

Leddene har **brusk** som gjør bevegelsen myk og smertefri.`
    },
    {
      id: 'nat-5-1-1-tip',
      type: 'tip',
      title: 'Hold skjelettet sterkt!',
      content: `For sterke knokler trenger du:
- **Kalsium** - finnes i melk, ost og grønne grønnsaker
- **D-vitamin** - fra sollys og fet fisk
- **Bevegelse** - trening gjør knoklene sterkere!`
    },
    {
      id: 'nat-5-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange knokler har et voksent menneske?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall knokler.',
            solution: 'Omtrent 206',
            multipleChoiceOptions: [
              'Omtrent 206',
              'Omtrent 100',
              'Omtrent 50',
              'Omtrent 1000'
            ],
          },
        ],
        solution: 'Et voksent menneske har omtrent 206 knokler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er skjelettets viktigste oppgaver?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de riktige oppgavene til skjelettet.',
            solution: 'Støtte, beskyttelse og bevegelse',
            multipleChoiceOptions: [
              'Støtte, beskyttelse og bevegelse',
              'Bare å holde kroppen oppreist',
              'Å pumpe blod rundt i kroppen',
              'Å fordøye maten'
            ],
          },
        ],
        solution: 'Skjelettet gir støtte, beskytter viktige organer, og gir festepunkter for muskler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor jobber muskler i par?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på hvorfor muskler jobber i par.',
            solution: 'Fordi muskler bare kan trekke, ikke skyve',
            multipleChoiceOptions: [
              'Fordi muskler bare kan trekke, ikke skyve',
              'Fordi det ser penere ut',
              'Fordi én muskel ikke er sterk nok',
              'Fordi kroppen har for mange muskler'
            ],
          },
        ],
        solution: 'Muskler kan bare trekke seg sammen, så de må jobbe i par for å bevege kroppen begge veier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Knokler og ledd.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er kroppens lengste knokkel?',
            solution: 'Lårbeinet',
            multipleChoiceOptions: [
              'Lårbeinet',
              'Overarmsbeinet',
              'Ryggraden',
              'Ribbeina'
            ],
          },
          {
            label: 'b',
            task: 'Hvilken type ledd er kneet?',
            solution: 'Hengselsledd',
            multipleChoiceOptions: [
              'Hengselsledd',
              'Kuleledd',
              'Vridledd',
              'Glidledd'
            ],
          },
          {
            label: 'c',
            task: 'Hva beskytter kraniet?',
            solution: 'Hjernen',
            multipleChoiceOptions: [
              'Hjernen',
              'Hjertet',
              'Lungene',
              'Leveren'
            ],
          }
        ],
        solution: 'Lårbeinet er lengst, kneet er et hengselsledd, og kraniet beskytter hjernen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Fordøyelsen
// ============================================================================

export const CHAPTER_NATURFAG_5_1_2: TextbookChapter = {
  id: 'naturfag-5-1-2',
  courseId: 'naturfag-5',
  chapterNumber: '1.2',
  title: 'Fordøyelsen',
  description: 'Lær om hvordan maten blir til energi i kroppen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive hvordan kroppen reagerer og utvikler seg',
    'samtale om hva mat og livsstil betyr for helse'
  ],
  content: [
    {
      id: 'nat-5-1-2-intro',
      type: 'text',
      content: `
# Fordøyelsen

Maten du spiser gir deg **energi** til å leke, tenke og vokse. Men kroppen kan
ikke bruke maten direkte - den må først **brytes ned** i små biter. Det er
fordøyelsens jobb!
      `
    },
    {
      id: 'nat-5-1-2-def-fordoyelse',
      type: 'definition',
      title: 'Hva er fordøyelse?',
      content: `**Fordøyelse** er når kroppen bryter ned maten til små biter som kan tas opp i blodet.

Fordøyelsen starter i munnen og fortsetter helt ned til tykktarmen. Det tar omtrent **24 timer** fra du spiser maten til restene kommer ut igjen!`
    },
    {
      id: 'nat-5-1-2-reisen',
      type: 'text',
      title: 'Matens reise gjennom kroppen',
      content: `
## Matens reise

**1. Munnen**
- Du tygger maten i små biter
- Spyttet gjør maten myk og starter nedbrytningen

**2. Spiserøret**
- Et langt rør som fører maten ned til magen
- Musklene presser maten nedover

**3. Magesekken**
- Her blandes maten med magesaft
- Maten blir til en grøtaktig masse
- Tar 2-4 timer

**4. Tynntarmen**
- Her tas næringsstoffene opp i blodet
- Tynntarmen er omtrent 6 meter lang!

**5. Tykktarmen**
- Her tas vannet opp
- Avfallet (det kroppen ikke trenger) samles

**6. Endetarmen**
- Avfallet lagres her til det kommer ut
      `
    },
    {
      id: 'nat-5-1-2-organer',
      type: 'definition',
      title: 'Hjelpere i fordøyelsen',
      content: `Noen organer hjelper til med fordøyelsen uten at maten passerer gjennom dem:

**Leveren**:
- Lager galle som hjelper med å bryte ned fett
- Renser blodet for giftstoffer

**Galleblæren**:
- Lagrer galle til den trengs

**Bukspyttkjertelen**:
- Lager stoffer som bryter ned maten i tynntarmen`
    },
    {
      id: 'nat-5-1-2-naering',
      type: 'text',
      title: 'Hva får vi fra maten?',
      content: `
## Næringsstoffer

Maten inneholder forskjellige næringsstoffer:

**Karbohydrater** (brød, ris, pasta)
- Gir deg energi til å være aktiv

**Proteiner** (kjøtt, fisk, bønner, egg)
- Bygger og reparerer kroppen

**Fett** (smør, olje, nøtter)
- Gir energi og holder deg varm

**Vitaminer og mineraler** (frukt, grønnsaker)
- Holder deg frisk

**Vann**
- Kroppen er 60% vann!
      `
    },
    {
      id: 'nat-5-1-2-example',
      type: 'example',
      title: 'Følg et eple',
      problem: 'Hva skjer når du spiser et eple?',
      solution: `**Eplets reise:**

1. **Munnen**: Du biter og tygger eplet i små biter. Spyttet begynner å bryte ned sukkeret.

2. **Spiserøret**: Bitene presses ned til magen (tar ca. 10 sekunder).

3. **Magesekken**: Eplet blandes med magesaft og blir til grøt.

4. **Tynntarmen**: Sukker, vitaminer og fiber tas opp i blodet.

5. **Tykktarmen**: Vann og rester av fiberen.

6. **Endetarmen**: Avfallet går ut av kroppen.

Hele reisen tar omtrent 24 timer!`
    },
    {
      id: 'nat-5-1-2-tip',
      type: 'tip',
      title: 'Tips for god fordøyelse',
      content: `- **Tygg maten godt** - det gjør jobben lettere for magen
- **Drikk nok vann** - hjelper maten å gli gjennom
- **Spis fiber** - fra frukt, grønnsaker og grovt brød
- **Beveg deg** - det hjelper fordøyelsen`
    },
    {
      id: 'nat-5-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvor starter fordøyelsen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hvor fordøyelsen starter.',
            solution: 'I munnen',
            multipleChoiceOptions: [
              'I munnen',
              'I magen',
              'I tynntarmen',
              'I spiserøret'
            ],
          },
        ],
        solution: 'Fordøyelsen starter i munnen når du tygger maten og spyttet begynner å bryte den ned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvor tas næringsstoffene opp i blodet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hvor næringsstoffene tas opp.',
            solution: 'I tynntarmen',
            multipleChoiceOptions: [
              'I tynntarmen',
              'I magen',
              'I tykktarmen',
              'I munnen'
            ],
          },
        ],
        solution: 'Det meste av næringsstoffene tas opp i tynntarmen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva gjør leveren?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg leverens oppgave i fordøyelsen.',
            solution: 'Lager galle som bryter ned fett',
            multipleChoiceOptions: [
              'Lager galle som bryter ned fett',
              'Lagrer maten til senere',
              'Pumper blod rundt i kroppen',
              'Bryter ned proteiner'
            ],
          },
        ],
        solution: 'Leveren lager galle som hjelper med å bryte ned fett i tynntarmen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Mat og næringsstoffer.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gir karbohydrater (brød, ris) kroppen?',
            solution: 'Energi',
            multipleChoiceOptions: [
              'Energi',
              'Sterke knokler',
              'Bedre syn',
              'Større muskler'
            ],
          },
          {
            label: 'b',
            task: 'Hva trenger kroppen proteiner til?',
            solution: 'Bygge og reparere kroppen',
            multipleChoiceOptions: [
              'Bygge og reparere kroppen',
              'Gi rask energi',
              'Holde seg varm',
              'Fordøye maten'
            ],
          },
          {
            label: 'c',
            task: 'Omtrent hvor lang tid tar fordøyelsen fra du spiser til avfallet kommer ut?',
            solution: '24 timer',
            multipleChoiceOptions: [
              '24 timer',
              '1 time',
              '5 timer',
              '1 uke'
            ],
          }
        ],
        solution: 'Karbohydrater gir energi, proteiner bygger kroppen, og fordøyelsen tar ca. 24 timer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.3: Hjertet og blodet
// ============================================================================

export const CHAPTER_NATURFAG_5_1_3: TextbookChapter = {
  id: 'naturfag-5-1-3',
  courseId: 'naturfag-5',
  chapterNumber: '1.3',
  title: 'Hjertet og blodet',
  description: 'Lær om hvordan hjertet pumper blod rundt i kroppen.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive hvordan kroppen reagerer og utvikler seg',
    'samtale om hva mat og livsstil betyr for helse'
  ],
  content: [
    {
      id: 'nat-5-1-3-intro',
      type: 'text',
      content: `
# Hjertet og blodet

**Hjertet** er kroppens motor som aldri tar pause! Det pumper **blod** rundt i
kroppen hele livet. Blodet frakter oksygen og næringsstoffer til alle cellene dine.
      `
    },
    {
      id: 'nat-5-1-3-def-hjerte',
      type: 'definition',
      title: 'Hjertet',
      content: `**Hjertet** er en muskel på størrelse med din egen knyttneve.

Det slår omtrent **100 000 ganger** hver dag!

Hjertet har fire rom:
- **To forkammer** (øverst) - tar imot blod
- **To hjertekammer** (nederst) - pumper ut blod

Høyre side sender blod til lungene.
Venstre side sender blod til resten av kroppen.`
    },
    {
      id: 'nat-5-1-3-blod',
      type: 'text',
      title: 'Hva er blod?',
      content: `
## Blodet

Blod er en rød væske som frakter viktige ting rundt i kroppen:

**Blodets deler:**
- **Røde blodceller**: Frakter oksygen
- **Hvite blodceller**: Bekjemper sykdom
- **Blodplater**: Stopper blødninger
- **Plasma**: Væsken som alt flyter i

En voksen har omtrent **5 liter blod** i kroppen.
      `
    },
    {
      id: 'nat-5-1-3-kretslop',
      type: 'definition',
      title: 'Blodets kretsløp',
      content: `Blodet reiser i et **kretsløp** - det går rundt og rundt uten stopp.

**Store kretsløp:**
1. Hjertet pumper blod ut til kroppen
2. Blodet gir oksygen og næring til cellene
3. Blodet tar med avfallsstoffer tilbake
4. Blodet kommer tilbake til hjertet

**Lille kretsløp:**
1. Hjertet pumper blod til lungene
2. Blodet får oksygen og kvitter seg med CO₂
3. Blodet kommer tilbake til hjertet`
    },
    {
      id: 'nat-5-1-3-aarer',
      type: 'text',
      title: 'Blodårene',
      content: `
## Tre typer blodårer

**Arterier (pulsårer)**:
- Frakter blod FRA hjertet
- Har tykke vegger
- Du kan kjenne pulsen her

**Vener (blodårer)**:
- Frakter blod TIL hjertet
- Har tynnere vegger
- Har klaffer som hindrer blodet i å renne tilbake

**Kapillærer (hårrørsårer)**:
- Knyttesmå blodårer
- Her byttes oksygen og næring med cellene
      `
    },
    {
      id: 'nat-5-1-3-example',
      type: 'example',
      title: 'Finn pulsen din!',
      problem: 'Hvordan kan du kjenne hjertet slå?',
      solution: `**Prøv dette:**

1. Legg to fingre på innsiden av håndleddet (ikke tommelen)
2. Du kjenner en banking - det er pulsen din!
3. Tell hvor mange slag du kjenner på 15 sekunder
4. Gang med 4 for å finne hjerteslag per minutt

**Normal puls for barn:**
- I hvile: 70-100 slag per minutt
- Etter aktivitet: Mye høyere!

Prøv å løpe i 1 minutt og kjenn pulsen igjen. Hva skjedde?`
    },
    {
      id: 'nat-5-1-3-tip',
      type: 'tip',
      title: 'Hold hjertet friskt!',
      content: `Et sterkt hjerte får du av:
- **Bevegelse** - løp, lek, svøm, sykle!
- **Sunn mat** - frukt, grønnsaker, fisk
- **Nok søvn** - hjertet trenger hvile også
- **Unngå røyk** - røyk skader hjertet og blodårene`
    },
    {
      id: 'nat-5-1-3-note',
      type: 'note',
      title: 'Visste du?',
      content: `- Hjertet ditt vil slå omtrent **3 milliarder ganger** i løpet av livet!
- Blodet reiser rundt i hele kroppen på bare **1 minutt**
- Alle blodårene dine er tilsammen **100 000 km** lange - det rekker rundt jorda 2,5 ganger!`
    },
    {
      id: 'nat-5-1-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Omtrent hvor mange ganger slår hjertet på én dag?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall hjerteslag per dag.',
            solution: '100 000 ganger',
            multipleChoiceOptions: [
              '100 000 ganger',
              '1000 ganger',
              '10 000 ganger',
              '1 million ganger'
            ],
          },
        ],
        solution: 'Hjertet slår omtrent 100 000 ganger hver dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-1-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-3-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva frakter de røde blodcellene?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva røde blodceller frakter.',
            solution: 'Oksygen',
            multipleChoiceOptions: [
              'Oksygen',
              'Mat',
              'Vann',
              'Vitaminer'
            ],
          },
        ],
        solution: 'Røde blodceller frakter oksygen fra lungene til alle cellene i kroppen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-1-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på arterier og vener?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av arterier.',
            solution: 'Frakter blod fra hjertet',
            multipleChoiceOptions: [
              'Frakter blod fra hjertet',
              'Frakter blod til hjertet',
              'Er de minste blodårene',
              'Finnes bare i hjertet'
            ],
          },
        ],
        solution: 'Arterier frakter blod FRA hjertet, vener frakter blod TIL hjertet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-1-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-5-1-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Om hjertet og blodet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange rom har hjertet?',
            solution: 'Fire',
            multipleChoiceOptions: [
              'Fire',
              'To',
              'Tre',
              'Seks'
            ],
          },
          {
            label: 'b',
            task: 'Hva gjør de hvite blodcellene?',
            solution: 'Bekjemper sykdom',
            multipleChoiceOptions: [
              'Bekjemper sykdom',
              'Frakter oksygen',
              'Stopper blødninger',
              'Frakter næring'
            ],
          },
          {
            label: 'c',
            task: 'Hvor går blodet i det lille kretsløpet?',
            solution: 'Fra hjertet til lungene og tilbake',
            multipleChoiceOptions: [
              'Fra hjertet til lungene og tilbake',
              'Fra hjertet til hele kroppen',
              'Fra hjernen til hjertet',
              'Fra magen til hjertet'
            ],
          }
        ],
        solution: 'Hjertet har fire rom, hvite blodceller bekjemper sykdom, og det lille kretsløpet går mellom hjertet og lungene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Pattedyr
// ============================================================================

export const CHAPTER_NATURFAG_5_2_1: TextbookChapter = {
  id: 'naturfag-5-2-1',
  courseId: 'naturfag-5',
  chapterNumber: '2.1',
  title: 'Pattedyr',
  description: 'Lær om pattedyr og hva som kjennetegner dem.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive kjennetegn ved ulike dyreklasser',
    'beskrive dyr og deres tilpasninger til miljøet'
  ],
  content: [
    {
      id: 'nat-5-2-1-intro',
      type: 'text',
      content: `
# Pattedyr

**Pattedyr** er dyr som **dier ungene sine** med melk. Mennesker er også pattedyr!
Det finnes over 5000 arter pattedyr i verden, fra ørsmå spissmus til enorme blåhvaler.
      `
    },
    {
      id: 'nat-5-2-1-def-pattedyr',
      type: 'definition',
      title: 'Kjennetegn på pattedyr',
      content: `Alle pattedyr har disse kjennetegnene:

1. **Dier ungene** - moren lager melk til ungene
2. **Har pels eller hår** - selv hvaler har noen hår!
3. **Er varmblodige** - holder samme kroppstemperatur uansett vær
4. **Puster med lunger** - også de som lever i vann
5. **Føder levende unger** - med noen få unntak (nebbdyr legger egg)`
    },
    {
      id: 'nat-5-2-1-grupper',
      type: 'text',
      title: 'Forskjellige pattedyr',
      content: `
## Grupper av pattedyr

**Rovdyr** (løve, ulv, bjørn):
- Spiser andre dyr
- Har skarpe tenner og klør

**Planteetere** (ku, hest, elg):
- Spiser planter
- Har flate tenner til å male mat

**Gnagere** (mus, bever, ekorn):
- Har store fortenner som vokser hele livet
- Gnager på hard mat

**Flaggermus**:
- Eneste pattedyr som kan fly
- Bruker ekko for å finne veien

**Hvaler og delfiner**:
- Lever i havet
- Må opp for å puste
      `
    },
    {
      id: 'nat-5-2-1-norske',
      type: 'text',
      title: 'Norske pattedyr',
      content: `
## Pattedyr i Norge

**I skogen:**
- Elg, hjort, rådyr
- Rev, grevling, mår
- Ekorn, hare, mus

**I fjellet:**
- Rein, jerv, fjellrev
- Lemen, røyskatt

**I havet:**
- Sel, hvalross
- Hvaler (spekkhogger, vågehval)

**Kjæledyr:**
- Hund, katt
- Kanin, marsvin
      `
    },
    {
      id: 'nat-5-2-1-tilpasning',
      type: 'definition',
      title: 'Tilpasning til miljøet',
      content: `Pattedyr er tilpasset der de lever:

**Polar bjørn**: Tykk pels og fettlag mot kulda, hvit farge for kamuflasje

**Kamel**: Kan lagre fett i pukkel, tåler varme og tørke

**Sel**: Strømlinjeformet kropp og svømmeføtter for å svømme raskt

**Flaggermus**: Vinger av hud mellom lange fingre for å fly`
    },
    {
      id: 'nat-5-2-1-example',
      type: 'example',
      title: 'Ekorn - et norsk pattedyr',
      problem: 'Hvordan er ekornet tilpasset livet i skogen?',
      solution: `**Ekornets tilpasninger:**

- **Skarpe klør**: Klatrer lett i trær
- **Lang, buskete hale**: Balanse og varme
- **Sterke bakbein**: Hopper mellom grener
- **Gode fortenner**: Gnager nøtter og kongler
- **Godt minne**: Husker hvor det gjemte mat

**Vinterklart:**
- Tykkere pels om vinteren
- Samler mat i høsten
- Hviler mye, men sover ikke hele vinteren`
    },
    {
      id: 'nat-5-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er det viktigste kjennetegnet på pattedyr?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det viktigste kjennetegnet.',
            solution: 'De dier ungene sine med melk',
            multipleChoiceOptions: [
              'De dier ungene sine med melk',
              'De har fire bein',
              'De lever på land',
              'De legger egg'
            ],
          },
        ],
        solution: 'Pattedyr får navnet sitt fordi de dier (ammer) ungene med melk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilket av disse dyrene er IKKE et pattedyr?',
        subTasks: [
          {
            label: 'a',
            task: 'Finn dyret som ikke er et pattedyr.',
            solution: 'Krokodille',
            multipleChoiceOptions: [
              'Krokodille',
              'Delfin',
              'Flaggermus',
              'Hval'
            ],
          },
        ],
        solution: 'Krokodille er et krypdyr, ikke et pattedyr. Delfiner og hvaler er pattedyr selv om de lever i vannet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva menes med at pattedyr er varmblodige?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring på varmblodig.',
            solution: 'De holder samme kroppstemperatur uansett omgivelser',
            multipleChoiceOptions: [
              'De holder samme kroppstemperatur uansett omgivelser',
              'De har varmt blod som alltid er 100 grader',
              'De liker bare å bo i varme land',
              'De har blod som er varmere enn vann'
            ],
          },
        ],
        solution: 'Varmblodige dyr holder kroppen like varm hele tiden, selv når det er kaldt ute.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Om pattedyr.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket pattedyr er det eneste som kan fly?',
            solution: 'Flaggermus',
            multipleChoiceOptions: [
              'Flaggermus',
              'Flyekorn',
              'Flygende fisk',
              'Ørn'
            ],
          },
          {
            label: 'b',
            task: 'Hva har alle pattedyr på kroppen?',
            solution: 'Pels eller hår',
            multipleChoiceOptions: [
              'Pels eller hår',
              'Fjær',
              'Skjell',
              'Panser'
            ],
          },
          {
            label: 'c',
            task: 'Hvorfor må hvaler og delfiner opp til overflaten?',
            solution: 'For å puste',
            multipleChoiceOptions: [
              'For å puste',
              'For å se',
              'For å spise',
              'For å sole seg'
            ],
          }
        ],
        solution: 'Flaggermus er eneste flygende pattedyr, alle har pels/hår, og hvaler puster luft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Fugler og insekter
// ============================================================================

export const CHAPTER_NATURFAG_5_2_2: TextbookChapter = {
  id: 'naturfag-5-2-2',
  courseId: 'naturfag-5',
  chapterNumber: '2.2',
  title: 'Fugler og insekter',
  description: 'Lær om fugler og insekter og hva som kjennetegner dem.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og beskrive kjennetegn ved ulike dyreklasser',
    'beskrive dyr og deres tilpasninger til miljøet'
  ],
  content: [
    {
      id: 'nat-5-2-2-intro',
      type: 'text',
      content: `
# Fugler og insekter

**Fugler** og **insekter** er to helt forskjellige dyregrupper, men begge finnes
overalt i naturen. Fugler er virveldyr med fjær, mens insekter er virvelløse
smådyr med seks bein.
      `
    },
    {
      id: 'nat-5-2-2-def-fugl',
      type: 'definition',
      title: 'Kjennetegn på fugler',
      content: `Alle fugler har disse kjennetegnene:

1. **Fjær** - bare fugler har fjær!
2. **Vinger** - de fleste kan fly
3. **Nebb** - ingen tenner
4. **Legger egg** - med hard skall
5. **Varmblodige** - holder samme temperatur
6. **To bein** - går og hopper
7. **Hule bein** - gjør dem lette`
    },
    {
      id: 'nat-5-2-2-fugl-typer',
      type: 'text',
      title: 'Forskjellige typer fugler',
      content: `
## Fugler tilpasset ulik mat

**Rovfugler** (ørn, hauk, ugle):
- Skarpe klør og kroket nebb
- Jakter på andre dyr

**Sangfugler** (spurv, rødstrupe, meise):
- Spiser frø og insekter
- Synger vakkert

**Vadefugler** (stork, hegre):
- Lange bein
- Vader i vann og fanger fisk

**Svømmefugler** (and, svane, måke):
- Svømmeføtter
- Vannfugler

**Fugler som ikke kan fly**:
- Struts, pingvin, kiwi
- Tilpasset et liv på bakken eller i vann
      `
    },
    {
      id: 'nat-5-2-2-def-insekt',
      type: 'definition',
      title: 'Kjennetegn på insekter',
      content: `Alle insekter har disse kjennetegnene:

1. **Seks bein** - alltid nøyaktig seks!
2. **Tre kroppsdeler** - hode, bryst, bakkropp
3. **Ytre skjelett** - hardt skall utenpå
4. **Antenner** - følehorn på hodet
5. **Sammensatte øyne** - mange små øyne
6. **De fleste har vinger** - men ikke alle`
    },
    {
      id: 'nat-5-2-2-insekt-typer',
      type: 'text',
      title: 'Insektenes verden',
      content: `
## Vanlige insekter

**Biller** (marihøne, torbist):
- Harde dekkvinger
- Over 400 000 arter!

**Sommerfugler**:
- Store, fargerike vinger
- Var først larve (sommerfugllarve)

**Bier, veps og maur**:
- Lever ofte i store samfunn
- Veldig sosiale

**Fluer og mygg**:
- To vinger
- Noen stikker

**Øyenstikkere og gresshopper**:
- Gode flyvere eller hoppere
      `
    },
    {
      id: 'nat-5-2-2-forvandling',
      type: 'definition',
      title: 'Insekters forvandling',
      content: `Mange insekter forandrer seg helt i løpet av livet:

**Fullstendig forvandling (sommerfugl):**
1. **Egg** - legges på en plante
2. **Larve** - spiser og vokser
3. **Puppe** - forvandler seg inne i et skall
4. **Voksent insekt** - kommer ut med vinger

**Ufullstendig forvandling (gresshoppe):**
1. **Egg**
2. **Nymfe** - ser ut som liten voksen
3. **Voksent insekt** - vokser gradvis`
    },
    {
      id: 'nat-5-2-2-example',
      type: 'example',
      title: 'Biens liv',
      problem: 'Hvorfor er bier så viktige?',
      solution: `**Bier er superviktige for naturen!**

Når bien samler nektar, får den pollen på kroppen. Pollen spres til andre blomster. Dette kalles **pollinering**.

**Uten bier:**
- Mange blomster får ikke frø
- Mindre frukt og grønnsaker
- Færre planter for andre dyr

**Bisamfunnet:**
- Dronning: Legger alle eggene
- Arbeidere: Samler mat, bygger kube
- Droner: Parer seg med dronning

En bikube kan ha over 50 000 bier!`
    },
    {
      id: 'nat-5-2-2-note',
      type: 'note',
      title: 'Visste du?',
      content: `- Fugler er etterkommere av dinosaurer!
- Det finnes over 1 million kjente insektarter
- Kolibrien kan fly bakover
- Edderkoppar er IKKE insekter - de har 8 bein
- Noen fugler kan sove mens de flyr!`
    },
    {
      id: 'nat-5-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva har bare fugler?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som bare fugler har.',
            solution: 'Fjær',
            multipleChoiceOptions: [
              'Fjær',
              'Vinger',
              'Egg',
              'Bein'
            ],
          },
        ],
        solution: 'Fjær finnes bare hos fugler. Insekter og flaggermus har også vinger, men ikke fjær.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange bein har et insekt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig antall bein.',
            solution: '6',
            multipleChoiceOptions: [
              '6',
              '4',
              '8',
              '10'
            ],
          },
        ],
        solution: 'Alle insekter har nøyaktig 6 bein. Edderkopper har 8 bein og er ikke insekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva kalles det når insekter forandrer seg fra larve til voksen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig begrep.',
            solution: 'Forvandling (metamorfose)',
            multipleChoiceOptions: [
              'Forvandling (metamorfose)',
              'Vekst',
              'Formering',
              'Pollinering'
            ],
          },
        ],
        solution: 'Forvandling eller metamorfose er når insekter endrer form helt, som fra larve til sommerfugl.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Om fugler og insekter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange kroppsdeler har et insekt?',
            solution: 'Tre (hode, bryst, bakkropp)',
            multipleChoiceOptions: [
              'Tre (hode, bryst, bakkropp)',
              'To (hode og kropp)',
              'Fire',
              'En'
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor har fugler hule bein?',
            solution: 'For å være lettere og kunne fly',
            multipleChoiceOptions: [
              'For å være lettere og kunne fly',
              'For å lagre mat',
              'For å holde varmen',
              'For å svømme bedre'
            ],
          },
          {
            label: 'c',
            task: 'Hva er pollinering?',
            solution: 'Når pollen flyttes mellom blomster (ofte av insekter)',
            multipleChoiceOptions: [
              'Når pollen flyttes mellom blomster (ofte av insekter)',
              'Når blomster åpner seg',
              'Når planter drikker vann',
              'Når insekter spiser nektar'
            ],
          }
        ],
        solution: 'Insekter har tre kroppsdeler, fugler har hule bein for å fly, og pollinering er frøspredning via pollen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.3: Næringskjeder
// ============================================================================

export const CHAPTER_NATURFAG_5_2_3: TextbookChapter = {
  id: 'naturfag-5-2-3',
  courseId: 'naturfag-5',
  chapterNumber: '2.3',
  title: 'Næringskjeder',
  description: 'Lær om hvordan dyr og planter henger sammen i næringskjeder.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive ulike næringskjeder og forklare sammenhengen mellom artene',
    'utforske og forklare hvordan økosystemer fungerer'
  ],
  content: [
    {
      id: 'nat-5-2-3-intro',
      type: 'text',
      content: `
# Næringskjeder

Alle levende vesener trenger mat for å overleve. En **næringskjede** viser
hvem som spiser hvem i naturen. Det er som en lang rekke der hvert ledd
er mat for det neste!
      `
    },
    {
      id: 'nat-5-2-3-def',
      type: 'definition',
      title: 'Hva er en næringskjede?',
      content: `En **næringskjede** viser hvordan energi flyttes fra én organisme til en annen gjennom mat.

**Eksempel på en næringskjede:**
Gress → Gresshoppe → Frosk → Slange → Ørn

Pilen (→) betyr "blir spist av".

Gress blir spist av gresshoppen, som blir spist av frosken, og så videre.`
    },
    {
      id: 'nat-5-2-3-ledd',
      type: 'text',
      title: 'Leddene i næringskjeden',
      content: `
## Tre viktige grupper

**Produsenter** - Lager sin egen mat
- Planter bruker sollys til å lage mat (fotosyntese)
- Alltid FØRSTE ledd i næringskjeden
- Eksempler: gress, trær, alger

**Konsumenter** - Spiser andre
- Planteetere (herbivorer): spiser planter
- Rovdyr (karnivorer): spiser andre dyr
- Altetere (omnivorer): spiser både planter og dyr

**Nedbrytere** - Rydder opp
- Bryter ned døde dyr og planter
- Sopp og bakterier
- Gir næring tilbake til jorda
      `
    },
    {
      id: 'nat-5-2-3-eksempler',
      type: 'text',
      title: 'Næringskjeder i Norge',
      content: `
## Eksempler fra norsk natur

**I skogen:**
Blåbær → Mus → Ugle

**I fjæra:**
Alger → Snegl → Krabbe → Måke

**I innsjøen:**
Vannplanter → Snegl → Abbor → Gjedde

**På fjellet:**
Lav → Rein → Ulv

**I hagen:**
Løvetann → Snegl → Piggkott
      `
    },
    {
      id: 'nat-5-2-3-nett',
      type: 'definition',
      title: 'Næringsnett',
      content: `I virkeligheten spiser de fleste dyr mange forskjellige ting.

Når flere næringskjeder henger sammen, får vi et **næringsnett**.

Eksempel: Mus spiser både frø og insekter. Mus blir spist av ugle, rev og hauk.

Et næringsnett viser hvor komplisert naturen egentlig er!`
    },
    {
      id: 'nat-5-2-3-example',
      type: 'example',
      title: 'Hva skjer om ett ledd forsvinner?',
      problem: 'I næringskjeden "Gress → Hare → Rev", hva skjer hvis alle harene forsvinner?',
      solution: `**Konsekvenser:**

**For reven:**
- Reven mister matkilden sin
- Færre rever overlever
- Revene må finne annen mat

**For gresset:**
- Ingen spiser gresset
- Gresset vokser vilt
- Kanskje for mye gress

**For andre dyr:**
- Andre dyr som spiste hare får mindre mat
- Dyr som reven jakter på i stedet, blir færre

**Konklusjon:**
Alle leddene i næringskjeden er viktige!
Når én art forsvinner, påvirker det mange andre.`
    },
    {
      id: 'nat-5-2-3-warning',
      type: 'warning',
      title: 'Miljøgifter i næringskjeden',
      content: `Giftstoffer i naturen samler seg oppover i næringskjeden.

En liten fisk spiser alger med litt gift.
En stor fisk spiser mange små fisker = mer gift.
En sel spiser mange store fisker = enda mer gift!

Derfor har rovdyr på toppen ofte mest gift i kroppen.
Dette kalles **bioakkumulering**.`
    },
    {
      id: 'nat-5-2-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er alltid først i en næringskjede?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som alltid starter næringskjeden.',
            solution: 'Produsenter (planter)',
            multipleChoiceOptions: [
              'Produsenter (planter)',
              'Rovdyr',
              'Planteetere',
              'Nedbrytere'
            ],
          },
        ],
        solution: 'Produsenter (planter) er alltid første ledd fordi de lager sin egen mat fra sollys.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-2-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-3-ex2',
        number: '2',
        type: 'classic',
        task: 'I næringskjeden "Eik → Ekorn → Hauk", hva er ekornet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig betegnelse for ekornet.',
            solution: 'Konsument (planteeter)',
            multipleChoiceOptions: [
              'Konsument (planteeter)',
              'Produsent',
              'Nedbryter',
              'Rovdyr'
            ],
          },
        ],
        solution: 'Ekornet er en konsument som spiser planter (nøtter fra eika).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-2-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva gjør nedbrytere?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva nedbrytere gjør.',
            solution: 'Bryter ned døde dyr og planter',
            multipleChoiceOptions: [
              'Bryter ned døde dyr og planter',
              'Spiser levende planter',
              'Jakter på andre dyr',
              'Lager mat av sollys'
            ],
          },
        ],
        solution: 'Nedbrytere som sopp og bakterier bryter ned dødt materiale og gir næring tilbake til jorda.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-2-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-5-2-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Om næringskjeder.',
        subTasks: [
          {
            label: 'a',
            task: 'Lag en næringskjede med tre ledd fra innsjøen. Hva kan være riktig?',
            solution: 'Vannplanter → Ørekyte (liten fisk) → Gjedde',
            multipleChoiceOptions: [
              'Vannplanter → liten fisk → gjedde',
              'Gjedde → liten fisk → vannplanter',
              'Liten fisk → vannplanter → gjedde',
              'Gjedde → gjedde → gjedde'
            ],
          },
          {
            label: 'b',
            task: 'Hva er forskjellen på næringskjede og næringsnett?',
            solution: 'Et næringsnett er mange næringskjeder som henger sammen',
            multipleChoiceOptions: [
              'Et næringsnett er mange næringskjeder som henger sammen',
              'Det er ingen forskjell',
              'Næringskjede er i vann, næringsnett er på land',
              'Næringsnett har bare planteetere'
            ],
          },
          {
            label: 'c',
            task: 'Hvorfor er det farlig for rovdyr når det er miljøgifter i vannet?',
            solution: 'Giften samler seg oppover i næringskjeden, så rovdyr får mest',
            multipleChoiceOptions: [
              'Giften samler seg oppover i næringskjeden, så rovdyr får mest',
              'Rovdyr drikker mer vann',
              'Rovdyr er svakere enn andre dyr',
              'Det er ikke farligere for rovdyr'
            ],
          }
        ],
        solution: 'Næringskjeder viser matflyten, næringsnett viser det komplekse samspillet, og gift akkumuleres oppover.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Plantenes deler
// ============================================================================

export const CHAPTER_NATURFAG_5_3_1: TextbookChapter = {
  id: 'naturfag-5-3-1',
  courseId: 'naturfag-5',
  chapterNumber: '3.1',
  title: 'Plantenes deler',
  description: 'Lær om plantens ulike deler og hva de gjør.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive plantenes oppbygning og forklare deres livsvilkår',
    'utforske og beskrive hvordan planter formerer seg'
  ],
  content: [
    {
      id: 'nat-5-3-1-intro',
      type: 'text',
      content: `
# Plantenes deler

Planter er fantastiske! De lager sin egen mat fra sollys, vann og luft.
For å klare dette, har de ulike **deler** som hver har sin viktige oppgave.
      `
    },
    {
      id: 'nat-5-3-1-oversikt',
      type: 'definition',
      title: 'De fire hoveddelene',
      content: `En plante har fire hoveddeler:

1. **Røttene** - Under jorda, suger opp vann og næring
2. **Stengelen** - Holder planten oppreist, frakter vann og næring
3. **Bladene** - Lager mat av sollys (fotosyntese)
4. **Blomsten** - Lager frø til nye planter`
    },
    {
      id: 'nat-5-3-1-rotter',
      type: 'text',
      title: 'Røttene',
      content: `
## Røttene

Røttene er plantens "føtter" under jorda.

**Røttenes oppgaver:**
- **Suger opp vann** med oppløste næringsstoffer fra jorda
- **Holder planten fast** så den ikke blåser bort
- **Lagrer mat** i noen planter (gulrot, potet)

**To typer røtter:**
- **Pælerot**: En tykk hovedrot med små siderøtter (løvetann)
- **Trevlerot**: Mange like tynne røtter (gress)

Roten har **rothår** - bittesmå hår som øker overflaten for å suge opp mer vann.
      `
    },
    {
      id: 'nat-5-3-1-stengel',
      type: 'text',
      title: 'Stengelen',
      content: `
## Stengelen

Stengelen er plantens "ryggrad".

**Stengelens oppgaver:**
- **Holder planten oppreist** mot sollyset
- **Frakter vann** fra røttene til bladene
- **Frakter sukker** fra bladene til resten av planten

**Inne i stengelen:**
Stengelen har små "rør" som frakter vann oppover og sukker nedover.
Det er som plantens blodårer!

**Forskjellige stengler:**
- Urter har myke, grønne stengler
- Trær har harde, brune stengler (stamme)
      `
    },
    {
      id: 'nat-5-3-1-blader',
      type: 'text',
      title: 'Bladene',
      content: `
## Bladene

Bladene er plantens "solcellepaneler"!

**Bladets oppgaver:**
- **Fanger sollys** for fotosyntesen
- **Tar inn CO₂** gjennom små hull (spalteåpninger)
- **Gir fra seg oksygen** som vi puster inn
- **Fordamper vann** som trekker mer vann opp fra røttene

**Bladets deler:**
- **Bladplate**: Den flate delen som fanger lys
- **Bladstilk**: Kobler bladet til stengelen
- **Bladnerver**: Frakter vann og sukker

Blader er grønne på grunn av **klorofyll** - et stoff som fanger sollys.
      `
    },
    {
      id: 'nat-5-3-1-blomst',
      type: 'definition',
      title: 'Blomsten',
      content: `**Blomsten** er plantens formerende del - den lager frø.

**Blomstens deler:**
- **Kronblader**: Fargerike blader som tiltrekker insekter
- **Begerbladene**: Grønne blader som beskytter knoppen
- **Støvbærere**: Lager pollen (hannlige)
- **Fruktknute med arr**: Tar imot pollen, lager frø (hunnlige)

**Pollinering:**
Når pollen kommer fra en blomst til en annen, kan frø dannes.
Bier, sommerfugler og vind hjelper med pollinering.`
    },
    {
      id: 'nat-5-3-1-example',
      type: 'example',
      title: 'Undersøk en plante',
      problem: 'Hvordan kan du se de ulike delene på en plante?',
      solution: `**Prøv dette med en potteplante eller plante fra hagen:**

1. **Røttene**: Trekk forsiktig opp en liten plante og se på røttene. Kan du se rothårene?

2. **Stengelen**: Kjenn på stengelen. Er den hard eller myk? Tykk eller tynn?

3. **Bladene**: Se på et blad. Kan du se nervene? Hold det mot lyset!

4. **Blomsten** (hvis den har): Tell kronbladene. Kan du se støvbærere og arr?

**Tegn planten og marker alle delene!**`
    },
    {
      id: 'nat-5-3-1-tip',
      type: 'tip',
      title: 'Huskeregel',
      content: `**R-S-B-B** - Røtter, Stengel, Blader, Blomst

- **R**øtter suger vann
- **S**tengelen frakter
- **B**ladene lager mat
- **B**lomsten lager frø`
    },
    {
      id: 'nat-5-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-5-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvilken del av planten lager mat?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg plantedelen som lager mat.',
            solution: 'Bladene',
            multipleChoiceOptions: [
              'Bladene',
              'Røttene',
              'Stengelen',
              'Blomsten'
            ],
          },
        ],
        solution: 'Bladene lager mat gjennom fotosyntese ved hjelp av sollys.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-5-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva gjør røttene?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg røttenes viktigste oppgaver.',
            solution: 'Suger opp vann og holder planten fast',
            multipleChoiceOptions: [
              'Suger opp vann og holder planten fast',
              'Lager mat av sollys',
              'Tiltrekker bier',
              'Lager oksygen'
            ],
          },
        ],
        solution: 'Røttene suger opp vann og næring fra jorda og holder planten på plass.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-5-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er blader grønne?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg årsaken til at blader er grønne.',
            solution: 'På grunn av klorofyll som fanger sollys',
            multipleChoiceOptions: [
              'På grunn av klorofyll som fanger sollys',
              'Fordi de har mye vann',
              'For å skjule seg for dyr',
              'Fordi de er laget av gress'
            ],
          },
        ],
        solution: 'Klorofyll er et grønt stoff i bladene som fanger sollys til fotosyntesen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-5-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Om plantens deler.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva gjør stengelen?',
            solution: 'Frakter vann og næring, holder planten oppreist',
            multipleChoiceOptions: [
              'Frakter vann og næring, holder planten oppreist',
              'Lager frø',
              'Suger opp sollys',
              'Lagrer vann under jorda'
            ],
          },
          {
            label: 'b',
            task: 'Hva er blomstens viktigste oppgave?',
            solution: 'Å lage frø til nye planter',
            multipleChoiceOptions: [
              'Å lage frø til nye planter',
              'Å gi planten farge',
              'Å fange sollys',
              'Å suge opp vann'
            ],
          },
          {
            label: 'c',
            task: 'Hva er pollinering?',
            solution: 'Når pollen flyttes fra en blomst til en annen',
            multipleChoiceOptions: [
              'Når pollen flyttes fra en blomst til en annen',
              'Når planten drikker vann',
              'Når bladene faller av',
              'Når frø spirer'
            ],
          }
        ],
        solution: 'Stengelen frakter og støtter, blomsten lager frø, og pollinering er overføring av pollen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Fotosyntesen
// ============================================================================

export const CHAPTER_NATURFAG_5_3_2: TextbookChapter = {
  id: 'naturfag-5-3-2',
  courseId: 'naturfag-5',
  chapterNumber: '3.2',
  title: 'Fotosyntesen',
  description: 'Lær om hvordan planter lager sin egen mat fra sollys.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive fotosyntesen og forklare dens betydning',
    'utforske og beskrive hvordan planter lever'
  ],
  content: [
    {
      id: 'nat-5-3-2-intro',
      type: 'text',
      content: `
# Fotosyntesen

**Fotosyntese** er plantenes superkraft! De kan lage mat av sollys, vann og luft.
Det er noe vi mennesker ikke kan - vi må spise for å få energi.
Uten fotosyntese ville det ikke finnes mat eller oksygen!
      `
    },
    {
      id: 'nat-5-3-2-def',
      type: 'definition',
      title: 'Hva er fotosyntese?',
      content: `**Fotosyntese** betyr "å sette sammen med lys" (foto = lys, syntese = sette sammen).

Planter bruker:
- **Sollys** (energi)
- **Karbondioksid (CO₂)** fra lufta
- **Vann (H₂O)** fra jorda

Til å lage:
- **Sukker/glukose** (mat for planten)
- **Oksygen (O₂)** (som vi puster inn)

**Enkel formel:**
Vann + Karbondioksid + Sollys → Sukker + Oksygen`
    },
    {
      id: 'nat-5-3-2-hvor',
      type: 'text',
      title: 'Hvor skjer fotosyntesen?',
      content: `
## I bladene

Fotosyntesen skjer i **bladene**, i små deler som heter **kloroplaster**.

Kloroplastene inneholder **klorofyll** - det grønne stoffet som:
- Gir bladene grønn farge
- Fanger energien fra sollyset
- Setter i gang fotosyntesen

Derfor er blader grønne!

Når det blir høst og bladene får mindre lys, brytes klorofyllet ned.
Da ser vi de gule og røde fargene som også finnes i bladet.
      `
    },
    {
      id: 'nat-5-3-2-prosess',
      type: 'text',
      title: 'Slik skjer fotosyntesen',
      content: `
## Steg for steg

1. **Røttene** suger opp vann fra jorda

2. **Stengelen** frakter vannet opp til bladene

3. **Bladene** tar inn karbondioksid fra lufta gjennom små hull

4. **Klorofyllet** fanger energi fra sollyset

5. **I kloroplasten** settes vann og karbondioksid sammen til sukker

6. **Oksygen** slippes ut som "avfall" - men det er livsviktig for oss!

7. **Sukkeret** brukes til energi eller lagres i planten
      `
    },
    {
      id: 'nat-5-3-2-viktig',
      type: 'definition',
      title: 'Hvorfor er fotosyntesen viktig?',
      content: `Fotosyntesen er livsviktig for ALT liv på jorda:

**1. Oksygen**
- Planter lager oksygenet vi puster inn
- Uten fotosyntese: ingen oksygen!

**2. Mat**
- All mat kommer fra planter (direkte eller indirekte)
- Dyr spiser planter eller dyr som spiste planter

**3. Energi**
- Energien fra sola lagres i plantene
- Vi får energi når vi spiser plantene

**4. CO₂-balanse**
- Planter fjerner CO₂ fra lufta
- Hjelper mot klimaendringer`
    },
    {
      id: 'nat-5-3-2-example',
      type: 'example',
      title: 'Forsøk: Planter lager oksygen',
      problem: 'Hvordan kan du se at planter lager oksygen?',
      solution: `**Enkelt forsøk med vannplante:**

**Du trenger:**
- Vannplante (f.eks. vasspest)
- Glass med vann
- Trakt
- Reagensrør
- Sollys eller lampe

**Fremgangsmåte:**
1. Legg vannplanten under trakten i vannet
2. Fyll reagensrøret med vann og sett det over trakten
3. Sett glasset i sollys
4. Vent noen timer

**Resultat:**
Bobler stiger opp fra planten og samler seg i reagensrøret.
Det er oksygen som planten lager!

**Konklusjon:**
Planter lager oksygen under fotosyntesen. Vi ser det som bobler i vannet.`
    },
    {
      id: 'nat-5-3-2-note',
      type: 'note',
      title: 'Visste du?',
      content: `- Et stort tre kan lage nok oksygen til 4 mennesker!
- Regnskogene kalles "jordens lunger"
- Planter driver også "celleånding" om natten - da bruker de oksygen
- Alger i havet lager faktisk mest oksygen på jorda`
    },
    {
      id: 'nat-5-3-2-tip',
      type: 'tip',
      title: 'Planter trenger lys!',
      content: `Planter i mørke rom:
- Vokser lange og tynne (strekker seg mot lys)
- Blir bleke eller gule (ingen klorofyll)
- Lager ikke mat
- Dør til slutt

Derfor bør potteplanter stå ved vinduet!`
    },
    {
      id: 'nat-5-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-5-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva trenger planter for å drive fotosyntese?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de tre tingene planter trenger for fotosyntese.',
            solution: 'Sollys, vann og karbondioksid',
            multipleChoiceOptions: [
              'Sollys, vann og karbondioksid',
              'Jord, vind og regn',
              'Oksygen, sukker og varme',
              'Sollys, oksygen og nitrogen'
            ],
          },
        ],
        solution: 'Planter trenger sollys (energi), vann og karbondioksid for å drive fotosyntese.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-5-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva lager planten under fotosyntesen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det planten produserer.',
            solution: 'Sukker og oksygen',
            multipleChoiceOptions: [
              'Sukker og oksygen',
              'Karbondioksid og vann',
              'Jord og næring',
              'Vind og regn'
            ],
          },
        ],
        solution: 'Planten lager sukker (mat for seg selv) og oksygen (som vi puster inn).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-5-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er klorofyll?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av klorofyll.',
            solution: 'Grønt stoff som fanger sollys',
            multipleChoiceOptions: [
              'Grønt stoff som fanger sollys',
              'Vann i bladene',
              'Et slags frø',
              'Plantens mat'
            ],
          },
        ],
        solution: 'Klorofyll er det grønne stoffet i bladene som fanger energi fra sollyset.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-5-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Om fotosyntesen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor i planten skjer fotosyntesen?',
            solution: 'I bladene (i kloroplastene)',
            multipleChoiceOptions: [
              'I bladene (i kloroplastene)',
              'I røttene',
              'I stengelen',
              'I blomsten'
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor er fotosyntesen viktig for mennesker?',
            solution: 'Den lager oksygen vi puster og mat vi spiser',
            multipleChoiceOptions: [
              'Den lager oksygen vi puster og mat vi spiser',
              'Den gjør det varmt',
              'Den lager regn',
              'Den gjør det mørkt om natten'
            ],
          },
          {
            label: 'c',
            task: 'Hva skjer med blader som ikke får nok lys?',
            solution: 'De blir bleke/gule og planten kan dø',
            multipleChoiceOptions: [
              'De blir bleke/gule og planten kan dø',
              'De blir ekstra grønne',
              'De vokser raskere',
              'Ingenting'
            ],
          }
        ],
        solution: 'Fotosyntesen skjer i bladene, er livsviktig for oss, og planter trenger lys for å overleve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Enkle forsøk
// ============================================================================

export const CHAPTER_NATURFAG_5_4_1: TextbookChapter = {
  id: 'naturfag-5-4-1',
  courseId: 'naturfag-5',
  chapterNumber: '4.1',
  title: 'Enkle forsøk',
  description: 'Lær hvordan forskere jobber og gjør egne forsøk.',
  estimatedMinutes: 40,
  competenceGoals: [
    'stille spørsmål, lage hypoteser og utforske dem',
    'planlegge og gjennomføre enkle undersøkelser'
  ],
  content: [
    {
      id: 'nat-5-4-1-intro',
      type: 'text',
      content: `
# Enkle forsøk

Forskere lærer om verden ved å gjøre **forsøk**. Du kan gjøre det samme!
Ved å prøve og undersøke kan du oppdage spennende ting om naturen rundt deg.
      `
    },
    {
      id: 'nat-5-4-1-metode',
      type: 'definition',
      title: 'Slik jobber forskere',
      content: `Forskere bruker en bestemt metode:

1. **Observer** - Legg merke til noe interessant
2. **Spør** - Still et spørsmål om det du så
3. **Gjett** - Lag en hypotese (gjetning du kan teste)
4. **Test** - Gjør et forsøk for å sjekke
5. **Se** - Observer hva som skjer
6. **Konkluder** - Var hypotesen din riktig?

Hvis hypotesen var feil, er det ikke et problem! Da har du lært noe nytt!`
    },
    {
      id: 'nat-5-4-1-hypotese',
      type: 'definition',
      title: 'Hva er en hypotese?',
      content: `En **hypotese** er en smart gjetning som du kan teste.

**God hypotese:**
- "Planter vokser bedre med mer vann" ✓
- Kan testes: Gi ulik mengde vann til planter og se

**Dårlig hypotese:**
- "Planter er fine" ✗
- Kan ikke testes!

En hypotese starter ofte med: "Jeg tror at..." eller "Hvis... så..."`
    },
    {
      id: 'nat-5-4-1-rettferdig',
      type: 'text',
      title: 'Rettferdig test',
      content: `
## Rettferdig test

For at forsøket skal gi riktig svar, må det være **rettferdig**.

Det betyr at du bare endrer ÉN ting om gangen!

**Eksempel - Teste om planter trenger lys:**
- Én plante i sollys
- Én plante i mørket
- ALT ANNET må være likt: samme type plante, samme mengde vann, samme temperatur

Hvis du endrer flere ting, vet du ikke hva som ga resultatet!
      `
    },
    {
      id: 'nat-5-4-1-forsok1',
      type: 'example',
      title: 'Forsøk: Hva løser seg opp i vann?',
      problem: 'Løser sukker, salt og sand seg opp i vann?',
      solution: `**Hypotese:**
Sukker og salt løser seg opp, men ikke sand.

**Du trenger:**
- 3 glass med vann
- Sukker
- Salt
- Sand
- Skje

**Fremgangsmåte:**
1. Ha en skje sukker i første glass, rør godt
2. Ha en skje salt i andre glass, rør godt
3. Ha en skje sand i tredje glass, rør godt

**Observasjon:**
- Sukker: Forsvinner! (løser seg opp)
- Salt: Forsvinner! (løser seg opp)
- Sand: Synker til bunnen (løser seg ikke opp)

**Konklusjon:**
Hypotesen stemte! Sukker og salt løser seg i vann, sand gjør det ikke.`
    },
    {
      id: 'nat-5-4-1-forsok2',
      type: 'example',
      title: 'Forsøk: Synker eller flyter?',
      problem: 'Hvilke ting synker, og hvilke flyter?',
      solution: `**Hypotese:**
Tunge ting synker, lette ting flyter.

**Du trenger:**
- Balje med vann
- Ulike ting: stein, kork, mynt, blad, plast, treverk

**Fremgangsmåte:**
1. Gjett først: Synker eller flyter?
2. Legg hver ting forsiktig i vannet
3. Skriv ned resultatet

**Typiske resultater:**
- Synker: stein, mynt (metall)
- Flyter: kork, blad, treverk, mye plast

**Overraskelse:**
En stor trebåt flyter, men en liten stein synker! Det handler ikke bare om vekt, men om **tetthet** - hvor mye materie det er i et visst volum.`
    },
    {
      id: 'nat-5-4-1-logg',
      type: 'tip',
      title: 'Hold forskningslogg',
      content: `Ekte forskere skriver ned alt!

I loggen din bør du skrive:
- **Dato** - Når gjorde du forsøket?
- **Spørsmål** - Hva lurte du på?
- **Hypotese** - Hva trodde du ville skje?
- **Utstyr** - Hva brukte du?
- **Fremgangsmåte** - Hva gjorde du?
- **Resultat** - Hva skjedde?
- **Konklusjon** - Hva lærte du?`
    },
    {
      id: 'nat-5-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-5-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er en hypotese?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av hypotese.',
            solution: 'En smart gjetning som kan testes',
            multipleChoiceOptions: [
              'En smart gjetning som kan testes',
              'Det samme som en konklusjon',
              'En observasjon',
              'Et spørsmål'
            ],
          },
        ],
        solution: 'En hypotese er en testbar gjetning om hva du tror vil skje.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-5-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr det at et forsøk er "rettferdig"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring.',
            solution: 'Du endrer bare én ting om gangen',
            multipleChoiceOptions: [
              'Du endrer bare én ting om gangen',
              'Alle får like mange poeng',
              'Du gjør forsøket ute',
              'Du bruker dyrt utstyr'
            ],
          },
        ],
        solution: 'I et rettferdig forsøk endrer du bare én variabel, slik at du vet hva som ga resultatet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-5-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken av disse er en god hypotese?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den gode hypotesen.',
            solution: 'Planter vokser høyere med gjødsel enn uten',
            multipleChoiceOptions: [
              'Planter vokser høyere med gjødsel enn uten',
              'Planter er kule',
              'Kanskje noe skjer',
              'Jeg liker forsøk'
            ],
          },
        ],
        solution: 'En god hypotese sier noe spesifikt som kan testes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-5-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Om forsøk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er det første steget i forskningsmetoden?',
            solution: 'Observer - legg merke til noe',
            multipleChoiceOptions: [
              'Observer - legg merke til noe',
              'Konkluder - skriv svaret',
              'Test - gjør forsøket',
              'Gjett - lag en hypotese'
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor er det viktig å skrive ned det du gjør i et forsøk?',
            solution: 'Så du husker hva du gjorde og kan gjenta forsøket',
            multipleChoiceOptions: [
              'Så du husker hva du gjorde og kan gjenta forsøket',
              'For at læreren skal bli fornøyd',
              'For å bruke opp papir',
              'Det er ikke viktig'
            ],
          },
          {
            label: 'c',
            task: 'Hva gjør du hvis hypotesen din var feil?',
            solution: 'Det er greit! Du har lært noe nytt',
            multipleChoiceOptions: [
              'Det er greit! Du har lært noe nytt',
              'Du må slutte å forske',
              'Du må lyve om resultatet',
              'Du starter forsøket på nytt uten å endre noe'
            ],
          }
        ],
        solution: 'Forskning starter med observasjon, dokumentering er viktig, og feil hypoteser gir læring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Oppfinnelser og teknologi
// ============================================================================

export const CHAPTER_NATURFAG_5_4_2: TextbookChapter = {
  id: 'naturfag-5-4-2',
  courseId: 'naturfag-5',
  chapterNumber: '4.2',
  title: 'Oppfinnelser og teknologi',
  description: 'Lær om viktige oppfinnelser og hvordan teknologi påvirker livene våre.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske teknologiske systemer og vurdere hvordan de påvirker hverdagen',
    'beskrive hvordan vitenskap og teknologi har utviklet seg over tid'
  ],
  content: [
    {
      id: 'nat-5-4-2-intro',
      type: 'text',
      content: `
# Oppfinnelser og teknologi

Mennesker har alltid funnet opp nye ting for å gjøre livet enklere.
Fra det første hjulet til dagens datamaskiner - **oppfinnelser** har endret verden!
      `
    },
    {
      id: 'nat-5-4-2-def',
      type: 'definition',
      title: 'Hva er teknologi?',
      content: `**Teknologi** er alle verktøy og hjelpemidler mennesker har laget.

Teknologi kan være:
- **Enkle verktøy**: hammer, saks, spade
- **Maskiner**: bil, vaskemaskin, sykkel
- **Elektronikk**: datamaskin, telefon, TV
- **Bygg**: hus, broer, veier

Teknologi hjelper oss å løse problemer og gjøre ting vi ikke kunne gjort ellers!`
    },
    {
      id: 'nat-5-4-2-viktige',
      type: 'text',
      title: 'Viktige oppfinnelser',
      content: `
## Oppfinnelser som forandret verden

**Hjulet** (ca. 3500 f.Kr.)
- Gjorde det lettere å flytte tunge ting
- Brukes i biler, sykler, maskiner

**Trykkekunst** (ca. 1440)
- Johannes Gutenberg
- Gjorde det mulig å trykke bøker raskt
- Flere folk kunne lære å lese

**Dampmaskinen** (1700-tallet)
- Startet den industrielle revolusjon
- Fabrikker og tog

**Elektrisitet** (1800-tallet)
- Lyspæren (Thomas Edison)
- Endret alt: lys, maskiner, kommunikasjon

**Datamaskinen** (1900-tallet)
- Brukes til nesten alt i dag
- Internett koblet verden sammen
      `
    },
    {
      id: 'nat-5-4-2-prosess',
      type: 'definition',
      title: 'Slik oppfinnes ting',
      content: `Oppfinnere følger ofte disse stegene:

1. **Se et problem** - Hva er vanskelig?
2. **Tenk på løsninger** - Hvordan kan vi løse det?
3. **Tegn og planlegg** - Hvordan skal det se ut?
4. **Bygg en prototype** - Lag en prøveversjon
5. **Test** - Virker det?
6. **Forbedre** - Hva kan gjøres bedre?

De fleste oppfinnere prøver mange ganger før de lykkes!`
    },
    {
      id: 'nat-5-4-2-norske',
      type: 'text',
      title: 'Norske oppfinnelser',
      content: `
## Oppfinnelser fra Norge

**Ostehøvelen** (1925)
- Thor Bjørklund
- Perfekte skiver av ost

**Bindersen** (1899)
- Johan Vaaler
- Holder papirer sammen
- (Egentlig ikke helt norsk, men Vaaler patenterte en versjon)

**Sprayboksen** (1926)
- Erik Rotheim
- Brukes til maling, deodorant og mye mer

**Skibinding** (1894)
- Sondre Norheim fra Telemark
- Muliggjorde moderne skisport
      `
    },
    {
      id: 'nat-5-4-2-pavirkning',
      type: 'text',
      title: 'Teknologiens påvirkning',
      content: `
## Hvordan teknologi påvirker oss

**Positive sider:**
- Lettere å kommunisere
- Bedre helse (medisiner, sykehus)
- Vi kan lære mer (internett, bøker)
- Sparer tid på husarbeid

**Utfordringer:**
- Skjermbruk kan være usunt
- Forurensning fra fabrikker og biler
- Ikke alle har tilgang til teknologi
- Gamle ting blir avfall (elektronisk søppel)

Det er viktig å bruke teknologi på en smart måte!
      `
    },
    {
      id: 'nat-5-4-2-example',
      type: 'example',
      title: 'Lag din egen oppfinnelse',
      problem: 'Hvordan kan du finne opp noe selv?',
      solution: `**Bli en oppfinner:**

1. **Finn et problem i hverdagen**
   - Hva er vanskelig?
   - Hva tar lang tid?
   - Hva er irriterende?

2. **Tenk på løsninger**
   - Skriv ned alle ideene, selv de rare!
   - Tegn hvordan det kan se ut

3. **Velg den beste ideen**
   - Hva er enklest å lage?
   - Hva vil hjelpe mest?

4. **Lag en prototype**
   - Bruk papp, tape, tråd eller LEGO
   - Det trenger ikke være perfekt!

5. **Test og forbedre**
   - Virker det?
   - Hva kan gjøres bedre?

**Huskeregel:** Alle oppfinnelser starter med å se et problem!`
    },
    {
      id: 'nat-5-4-2-note',
      type: 'note',
      title: 'Visste du?',
      content: `- Post-it-lapper ble oppfunnet ved en feil!
- Velcro (borrelås) ble inspirert av borrblomster som festet seg til hunden
- Mikrobølgeovnen ble oppfunnet da en forsker merket at sjokoladen i lommen smeltet
- Mange oppfinnelser tar 10-20 år fra idé til ferdig produkt`
    },
    {
      id: 'nat-5-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'nat-5-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er teknologi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av teknologi.',
            solution: 'Alle verktøy og hjelpemidler mennesker har laget',
            multipleChoiceOptions: [
              'Alle verktøy og hjelpemidler mennesker har laget',
              'Bare datamaskiner og telefoner',
              'Ting som finnes i naturen',
              'Bare ting som bruker strøm'
            ],
          },
        ],
        solution: 'Teknologi er alle menneskeskapte verktøy, fra enkle ting som hammer til avanserte datamaskiner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'nat-5-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilken oppfinnelse gjorde det mulig å trykke bøker raskt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig oppfinnelse.',
            solution: 'Trykkekunsten (boktrykkerpressen)',
            multipleChoiceOptions: [
              'Trykkekunsten (boktrykkerpressen)',
              'Hjulet',
              'Datamaskinen',
              'Elektrisk lys'
            ],
          },
        ],
        solution: 'Johannes Gutenberg oppfant trykkekunsten rundt 1440, som revolusjonerte bokproduksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'nat-5-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er en prototype?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av prototype.',
            solution: 'En prøveversjon av noe du lager',
            multipleChoiceOptions: [
              'En prøveversjon av noe du lager',
              'Det ferdige produktet',
              'En tegning',
              'Et problem'
            ],
          },
        ],
        solution: 'En prototype er en tidlig versjon av en oppfinnelse, laget for å teste om ideen fungerer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-5-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'nat-5-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Om oppfinnelser og teknologi.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken norsk oppfinnelse brukes til å skjære ost?',
            solution: 'Ostehøvelen',
            multipleChoiceOptions: [
              'Ostehøvelen',
              'Bindersen',
              'Sprayboksen',
              'Skibindingen'
            ],
          },
          {
            label: 'b',
            task: 'Hva er det første steget for å lage en oppfinnelse?',
            solution: 'Finne et problem som skal løses',
            multipleChoiceOptions: [
              'Finne et problem som skal løses',
              'Bygge en maskin',
              'Selge produktet',
              'Lage reklame'
            ],
          },
          {
            label: 'c',
            task: 'Nevn en utfordring med mye teknologi.',
            solution: 'Forurensning eller elektronisk avfall',
            multipleChoiceOptions: [
              'Forurensning eller elektronisk avfall',
              'Det finnes ingen utfordringer',
              'Alt blir for enkelt',
              'Teknologi er alltid bra'
            ],
          }
        ],
        solution: 'Ostehøvelen er norsk, oppfinnelser starter med problemer, og teknologi har utfordringer som forurensning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    }
  ],
  exercises: []
};

// Eksporter alle kapitler
export const NATURFAG_5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NATURFAG_5_1_1,
  CHAPTER_NATURFAG_5_1_2,
  CHAPTER_NATURFAG_5_1_3,
  CHAPTER_NATURFAG_5_2_1,
  CHAPTER_NATURFAG_5_2_2,
  CHAPTER_NATURFAG_5_2_3,
  CHAPTER_NATURFAG_5_3_1,
  CHAPTER_NATURFAG_5_3_2,
  CHAPTER_NATURFAG_5_4_1,
  CHAPTER_NATURFAG_5_4_2,
];
