import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_KROPPSOVING_VG1_3_1: TextbookChapter = {
  id: 'kroppsoving-vg1-3-1',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '3.1',
  title: 'Grunnleggende ernæringslære',
  description: 'Lær om makronæringsstoffer, mikronæringsstoffer og hvordan du bygger et sunt kosthold med tallerkenmodellen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'Forklare betydningen av makronæringsstoffer og mikronæringsstoffer',
    'Bruke tallerkenmodellen til å planlegge sunne måltider',
    'Vurdere egne kostholdsvaner kritisk',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-3-1-intro',
      type: 'text',
      content: `# Grunnleggende ernæringslære

Kostholdet vårt er grunnlaget for alt vi gjør. Det gir oss energi til å bevege oss, bygger kroppen vår, og holder alle kroppsfunksjonene i gang. For å være frisk og ha god helse, trenger vi et variert og balansert kosthold som inneholder alle de næringsstoffene kroppen trenger.

Ernæringslære handler om å forstå hva maten består av, hvilke funksjoner de ulike næringsstoffene har i kroppen, og hvordan vi kan sette sammen måltider som dekker kroppens behov. Dette er spesielt viktig for deg som ungdom, fordi kroppen din er i vekst og utvikling, og fordi du sannsynligvis er fysisk aktiv gjennom idrett, kroppsøving og fritidsaktiviteter.

I dette kapittelet skal vi se nærmere på de viktigste næringsstoffene, hvordan de fungerer i kroppen, og hvordan du kan bruke tallerkenmodellen som et enkelt verktøy for å sette sammen sunne måltider.`,
    },
    {
      id: 'kroppsoving-vg1-3-1-def1',
      type: 'definition',
      title: 'Makronæringsstoffer',
      content: 'Makronæringsstoffer er næringsstoffer som kroppen trenger i store mengder. De tre hovedgruppene er karbohydrater, proteiner og fett. Disse gir kroppen energi (målt i kilokalorier eller kilojoule) og har hver sine viktige funksjoner.',
    },
    {
      id: 'kroppsoving-vg1-3-1-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-1-ex2',
        number: '1',
        type: 'classic',
        task: 'Hvilke tre makronæringsstoffer trenger kroppen i store mengder?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn de tre makronæringsstoffene',
            solution: 'Karbohydrater, proteiner og fett',
            multipleChoiceOptions: ['Karbohydrater, proteiner og fett', 'Vitaminer, mineraler og vann', 'Sukker, salt og fiber', 'Jern, kalsium og vitamin D'],
          },
          {
            label: 'b',
            task: 'Hvilken funksjon har proteiner i kroppen?',
            solution: 'Proteiner bygger og vedlikeholder kroppens celler, inkludert muskler, hud, hår og negler. De brukes også til å lage hormoner og enzymer.',
          },
          {
            label: 'c',
            task: 'Hvor mye energi gir fett per gram sammenlignet med karbohydrater?',
            solution: 'Fett gir 9 kcal per gram, mens karbohydrater gir 4 kcal per gram. Fett gir altså mer enn dobbelt så mye energi.',
          },
        ],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-1-text2',
      type: 'text',
      content: `## Karbohydrater - kroppens viktigste energikilde

Karbohydrater er kroppens foretrukne energikilde, spesielt for hjernen og musklene under fysisk aktivitet. De finnes i to hovedformer:

**Enkle karbohydrater** (hurtige)
- Sukker, honning, søtsaker, brus
- Gir rask energi, men holder ikke lenge
- Kan gi store svingninger i blodsukkeret

**Sammensatte karbohydrater** (langsomme)
- Fullkorn, brød, pasta, ris, poteter, belgfrukter
- Gir langvarig energi
- Inneholder også kostfiber, vitaminer og mineraler

Karbohydrater brytes ned til glukose (blodsukker) som cellene bruker som energi. Overskudd av glukose lagres som glykogen i musklene og leveren, eller som fett hvis lagrene er fulle.`,
    },
    {
      id: 'kroppsoving-vg1-3-1-def2',
      type: 'definition',
      title: 'Glykemisk indeks (GI)',
      content: 'Glykemisk indeks måler hvor raskt karbohydrater i en matvare brytes ned til glukose og kommer ut i blodet. Matvarer med høy GI gir rask blodsukkerstigning, mens matvarer med lav GI gir jevnere blodsukker over lengre tid. Matvarer med lav GI gir bedre metthetsfølelse og stabil energi.',
    },
    {
      id: 'kroppsoving-vg1-3-1-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-1-ex1',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom enkle og sammensatte karbohydrater, og gi eksempler på matvarer i hver kategori.',
        solution: 'Enkle karbohydrater består av ett eller to sukkerenheter og brytes raskt ned i kroppen. De gir rask energi, men holder ikke lenge. Eksempler er sukker, honning, brus og søtsaker. Sammensatte karbohydrater består av lange kjeder av sukkerenheter som tar lengre tid å bryte ned. De gir langvarig og stabil energi. Eksempler er fullkornsbrød, pasta, ris, poteter, havregryn og belgfrukter. Sammensatte karbohydrater inneholder også mer kostfiber, vitaminer og mineraler.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-1-text3',
      type: 'text',
      content: `## Proteiner - kroppens byggesteiner

Proteiner er nødvendige for vekst og vedlikehold av alle kroppens celler. De bygger muskler, hud, hår, negler, hormoner og enzymer. Proteiner består av aminosyrer, som er små byggeklosser.

**Komplette proteiner** inneholder alle de essensielle aminosyrene kroppen ikke kan lage selv:
- Kjøtt, fisk, egg, melkeprodukter
- Soya, quinoa

**Ufullstendige proteiner** mangler en eller flere essensielle aminosyrer:
- Belgfrukter, nøtter, korn
- Kan kombineres for å gi komplette proteiner (f.eks. bønner + ris)

Kroppen trenger protein kontinuerlig gjennom dagen. Anbefalingen er ca. 1,2-2 gram protein per kilo kroppsvekt for aktive ungdommer, avhengig av treningsbelastning.`,
    },
    {
      id: 'kroppsoving-vg1-3-1-example1',
      type: 'example',
      title: 'Proteinbehov for en aktiv ungdom',
      problem: 'Maria er 16 år, veier 60 kg og trener fotball 4 ganger i uken. Hvor mye protein bør hun få i seg daglig?',
      solution: `For en aktivt trenerende ungdom anbefales 1,5-1,8 g protein per kg kroppsvekt.

Beregning:
60 kg × 1,5 g = 90 gram protein per dag (minimum)
60 kg × 1,8 g = 108 gram protein per dag (optimalt)

Maria bør derfor sikte på 90-110 gram protein daglig.

Eksempel på hvordan hun kan nå dette:
- Frokost: Havregrøt med melk og 1 egg (20g)
- Lunsj: 2 brødskiver med ost og kalkun (25g)
- Middag: Kyllingfilet 150g med pasta (40g)
- Kveldsmat: Yoghurt med nøtter (15g)
- Totalt: ca. 100g protein`,
    },
    {
      id: 'kroppsoving-vg1-3-1-text4',
      type: 'text',
      content: `## Fett - essensielt for helsen

Fett har fått ufortjent dårlig rykte. Kroppen trenger fett til mange viktige funksjoner:
- Bygge cellevegger
- Ta opp fettløselige vitaminer (A, D, E, K)
- Produsere hormoner
- Gi langvarig energi
- Beskytte organer

Det finnes ulike typer fett:

**Umettet fett** (sunt fett)
- Omega-3 og omega-6 fettsyrer
- Finnes i: fet fisk, nøtter, frø, olivenolje, avokado
- Beskytter hjerte og kar

**Mettet fett**
- Finnes i: kjøtt, meieriprodukter, kokos
- Bruk med måte

**Transfett** (usunt fett)
- Finnes i: friterte produkter, bakervarer, ferdigmat
- Bør unngås

Fett gir mer enn dobbelt så mye energi som karbohydrater og protein (9 kcal per gram vs. 4 kcal per gram).`,
    },
    {
      id: 'kroppsoving-vg1-3-1-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-1-ex7',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom mettet og umettet fett? Gi eksempler på matvarer.',
        solution: 'Mettet fett er hovedsakelig animalsk fett som er fast ved romtemperatur. Det finnes i kjøtt, meieriprodukter (smør, ost), kokos og palmeolje. Dette fettet bør spises med måte. Umettet fett er planteolje og fett fra fisk som er flytende ved romtemperatur. Det inkluderer omega-3 og omega-6 fettsyrer. Dette sunne fettet finnes i fet fisk (laks, makrell), nøtter, frø, avokado og olivenolje. Umettet fett er hjertevennlig og beskytter blodårene, mens for mye mettet fett kan øke risikoen for hjerte- og karsykdommer.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-1-def3',
      type: 'definition',
      title: 'Mikronæringsstoffer',
      content: 'Mikronæringsstoffer er næringsstoffer som kroppen trenger i små mengder, men som er helt nødvendige for god helse. Dette inkluderer vitaminer (13 ulike) og mineraler (ca. 15 essensielle). De regulerer kroppsprosesser, bygger sterke bein og tenner, og holder immunforsvaret sterkt.',
    },
    {
      id: 'kroppsoving-vg1-3-1-text5',
      type: 'text',
      content: `## Viktige vitaminer og mineraler

**Vannløselige vitaminer:**
- **Vitamin C**: Immunforsvar, sårheling (frukt, grønnsaker)
- **B-vitaminer**: Energiomsetning, nervesystemet (fullkorn, kjøtt, egg)

**Fettløselige vitaminer:**
- **Vitamin A**: Syn, immunforsvar (gulrøtter, lever, egg)
- **Vitamin D**: Benhelse, immunforsvar (fet fisk, sollys, tilskudd)
- **Vitamin E**: Antioksidant (nøtter, frø, oljer)
- **Vitamin K**: Blodlevring (grønnkål, brokkoli)

**Mineraler:**
- **Kalsium**: Bein og tenner (melk, ost, grønnkål)
- **Jern**: Oksygentransport (kjøtt, belgfrukter, spinat)
- **Sink**: Immunforsvar, sårheling (kjøtt, sjømat, nøtter)
- **Jod**: Skjoldbruskkjertelen (sjømat, jodert salt)

Et variert kosthold med mye frukt, grønnsaker, fullkorn og proteinrike matvarer sikrer at du får i deg alle mikronæringsstoffer.`,
    },
    {
      id: 'kroppsoving-vg1-3-1-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Hvilket vitamin får vi hovedsakelig fra sollys?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig vitamin',
            solution: 'Vitamin D',
            multipleChoiceOptions: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'],
          },
          {
            label: 'b',
            task: 'Hvorfor er dette vitaminet spesielt viktig for ungdom?',
            solution: 'Vitamin D er viktig for oppbygging av sterke bein og tenner, noe som er spesielt viktig i vekstperioden. Det styrker også immunforsvaret.',
          },
          {
            label: 'c',
            task: 'Hvilke matvarer kan vi få vitamin D fra?',
            solution: 'Fet fisk som laks, makrell og sild, egg, og berikede melkeprodukter. Mange i Norge tar også vitamin D-tilskudd, spesielt om vinteren.',
          },
        ],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-1-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor et variert kosthold er viktig for å få i seg alle nødvendige mikronæringsstoffer.',
        solution: 'Et variert kosthold er viktig fordi ulike matvarer inneholder ulike mikronæringsstoffer (vitaminer og mineraler). Ingen enkeltmatvare inneholder alle næringsstoffene kroppen trenger. Ved å spise variert fra alle matgrupper - grønnsaker, frukt, fullkorn, proteinkilder og meieriprodukter - sikrer vi at vi får i oss alle de 13 vitaminene og 15 essensielle mineralene kroppen trenger. Hvis vi bare spiser noen få matvarer, risikerer vi mangel på viktige næringsstoffer som kan føre til helseproblemer.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-1-def4',
      type: 'definition',
      title: 'Tallerkenmodellen',
      content: 'Tallerkenmodellen er et enkelt verktøy som viser hvordan et sunt måltid bør settes sammen. Tallerkenen deles i tre: halvparten grønnsaker, en fjerdedel karbohydrater og en fjerdedel protein. I tillegg kommer et glass vann eller melk, og eventuelt frukt til dessert.',
    },
    {
      id: 'kroppsoving-vg1-3-1-text6',
      type: 'text',
      content: `## Tallerkenmodellen i praksis

Tallerkenmodellen gjør det lett å sette sammen sunne måltider uten å måle eller veie:

**Halvparten grønnsaker** (rå eller kokte)
- Brokkoli, gulrot, paprika, salat, tomat
- Gir vitaminer, mineraler og kostfiber
- Lav energitetthet, gir god metthet

**En fjerdedel proteinkilder**
- Kjøtt, fisk, egg, belgfrukter, tofu
- Bygger og vedlikeholder kroppen
- Gir langvarig metthet

**En fjerdedel karbohydrater**
- Poteter, ris, pasta, brød, quinoa
- Velg helst grovt/fullkorn
- Gir energi til hverdagen

**Tilbehør:**
- Sunt fett: litt smør, olje eller avokado
- Drikke: vann eller melk
- Dessert: frukt eller bær

Ved å følge tallerkenmodellen får du automatisk et balansert kosthold med riktig fordeling av næringsstoffer.`,
    },
    {
      id: 'kroppsoving-vg1-3-1-example2',
      type: 'example',
      title: 'Tallerkenmodellen - tre måltider',
      problem: 'Lag tre ulike middager som følger tallerkenmodellen.',
      solution: `**Måltid 1: Kylling med ris og wokgrønnsaker**
- Grønnsaker (1/2): Brokkoli, paprika, løk, sukkererter
- Protein (1/4): Grillet kyllingbryst
- Karbohydrater (1/4): Brune ris
- Tilbehør: Litt sesamolje, vann

**Måltid 2: Laks med poteter og salat**
- Grønnsaker (1/2): Grønn salat, tomat, agurk, rødløk
- Protein (1/4): Ovnsbakt laks
- Karbohydrater (1/4): Kokte poteter
- Tilbehør: Olivenolje til salat, melk

**Måltid 3: Kjøttboller med pasta og grønnsaker**
- Grønnsaker (1/2): Ovnsbakte grønnsaker (gulrot, squash, paprika)
- Protein (1/4): Hjemmelagde kjøttboller
- Karbohydrater (1/4): Fullkornspasta
- Tilbehør: Tomatsaus, vann`,
    },
    {
      id: 'kroppsoving-vg1-3-1-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-1-ex3',
        number: '6',
        type: 'classic',
        task: 'Du skal lage middag og vil bruke tallerkenmodellen. Beskriv hva du vil ha på tallerkenen, og forklar hvorfor dette følger tallerkenmodellen.',
        solution: 'Eksempel på svar: Jeg vil ha grillet kylling med ovnsbakte søtpoteter og en stor porsjon salat med tomat, agurk og paprika. Dette følger tallerkenmodellen fordi halvparten av tallerkenen består av grønnsaker (salaten med tomat, agurk og paprika), en fjerdedel er protein (kyllingen), og en fjerdedel er karbohydrater (søtpotetene). Til dette kan jeg drikke et glass melk og ha frukt til dessert. Jeg får dermed inn alle de viktige næringsstoffene kroppen trenger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-3-1-tip1',
      type: 'tip',
      title: 'Tips for et sunnere kosthold',
      content: `1. **Spis variert**: Prøv ulike matvarer for å få i deg alle næringsstoffer
2. **Velg fullkorn**: Grov brød, pasta og ris gir mer næring og kostfiber
3. **Fem om dagen**: Sikt på 5 porsjoner frukt og grønt daglig
4. **Regelmessige måltider**: Spis frokost, lunsj og middag hver dag
5. **Drikk vann**: Velg vann som hoveddrikke
6. **Begrens søtsaker**: Nyt godteri og søte drikker med måte
7. **Lytt til kroppen**: Spis når du er sulten, stopp når du er mett
8. **Kok selv**: Hjemmelaget mat gir mer kontroll over ingredienser`,
    },
    {
      id: 'kroppsoving-vg1-3-1-def5',
      type: 'definition',
      title: 'Kostfiber',
      content: 'Kostfiber er ufordøyelige plantefibre som er viktige for god tarmhelse. Fiber gir økt metthetsfølelse, regulerer fordøyelsen, stabiliserer blodsukkeret og kan redusere risikoen for hjerte- og karsykdommer. Finnes i frukt, grønnsaker, fullkorn, belgfrukter og nøtter.',
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-3-1-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-1-ex6',
        number: '7',
        type: 'classic',
        task: 'En person som trener mye spør deg om råd om kosthold. Hvilke makronæringsstoffer er spesielt viktige, og hvorfor?',
        solution: 'For en person som trener mye er alle tre makronæringsstoffer viktige: Karbohydrater er spesielt viktige fordi de er musklenes primære energikilde under trening og må fylles på regelmessig. Proteiner er nødvendige for å reparere og bygge muskelvev som brytes ned under trening - behovet øker til 1,5-2g per kg kroppsvekt. Sunt fett er viktig for langvarig energi, hormonproduksjon og opptak av fettløselige vitaminer. En aktiv person bør spise regelmessige måltider med god balanse mellom disse tre, følge tallerkenmodellen, og sørge for å få i seg protein etter trening.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-1-exercise8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-1-ex8',
        number: '8',
        type: 'classic',
        task: 'Lag en ukesmeny for middager som følger tallerkenmodellen. Inkluder minst 5 ulike måltider.',
        solution: 'Eksempel på ukesmeny:\n\nMandag: Torskefilet med kokte poteter, ertestuing og gulrøtter\nTirsdag: Kyllingwok med brokkoli, paprika, løk og brune ris\nOnsdag: Kjøttdeig-taco med mye salat, tomat, mais og fullkornslefser\nTorsdag: Bakt laks med quinoa og ovnsbakte grønnsaker (squash, paprika, søtpotet)\nFredag: Vegetarpizza på fullkornsbunn med masse grønnsaker som topping\nLørdag: Pulled chicken med søtpotet og stor salat\nSøndag: Biff med ovnsbakte poteter, brokkoli og gulrot\n\nAlle måltider følger tallerkenmodellen med 1/2 grønnsaker, 1/4 protein og 1/4 karbohydrater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_3_2: TextbookChapter = {
  id: 'kroppsoving-vg1-3-2',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '3.2',
  title: 'Væskebalanse og hydrering',
  description: 'Forstå betydningen av væskebalanse, elektrolytter og hvordan du unngår dehydrering ved fysisk aktivitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Forklare kroppens vannbehov og funksjonen til elektrolytter',
    'Gjenkjenne symptomer på dehydrering',
    'Planlegge væskeinntak før, under og etter fysisk aktivitet',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-3-2-intro',
      type: 'text',
      content: `# Væskebalanse og hydrering

Vann er den mest essensielle næringen for mennesket. Vi kan overleve i uker uten mat, men bare noen få dager uten vann. Kroppen vår består av 55-60% vann, og dette vannet er involvert i nesten alle kroppens funksjoner.

For deg som er fysisk aktiv er riktig hydrering ekstra viktig. Når du beveger deg, produserer musklene varme, og kroppen må arbeide hardt for å holde temperaturen stabil. Dette gjøres hovedsakelig gjennom svetting. Hvis du ikke erstatter væsken du mister, kan du bli dehydrert, noe som raskt påvirker både prestasjon og helse.

God væskebalanse handler ikke bare om å drikke nok vann. Det handler også om elektrolytter - mineraler som er viktige for at cellene skal fungere optimalt. I dette kapittelet skal vi se nærmere på hvorfor hydrering er så viktig, hvordan du sikrer god væskebalanse, og hva som skjer når kroppen får for lite væske.`,
    },
    {
      id: 'kroppsoving-vg1-3-2-def1',
      type: 'definition',
      title: 'Hydrering',
      content: 'Hydrering er prosessen der kroppen tar opp og beholder væske. God hydrering betyr at kroppen har tilstrekkelig med vann til å utføre alle sine funksjoner optimalt. Dehydrering oppstår når kroppen mister mer væske enn den får i seg.',
    },
    {
      id: 'kroppsoving-vg1-3-2-text2',
      type: 'text',
      content: `## Vannets mange funksjoner i kroppen

Vann er ikke bare en drikke - det er en aktiv deltaker i alle kroppsprosesser:

**Transport og fordeling:**
- Blod består av 90% vann og frakter oksygen, næringsstoffer og avfallsstoffer
- Væske rundt cellene muliggjør utveksling av stoffer
- Lymfevæsken transporterer immunceller

**Temperaturregulering:**
- Svette fordamper fra huden og kjøler kroppen ned
- Blodet distribuerer varme fra musklene til huden
- Hindrer overoppheting under fysisk aktivitet

**Kjemiske reaksjoner:**
- Nødvendig for fordøyelsen av mat
- Medvirker i energiomsetningen i cellene
- Hjelper til med å fjerne avfallsstoffer via nyrene

**Strukturell støtte:**
- Gir celler og vev form og fasthet
- Virker som støtpute for hjerne og ryggmarg
- Smører ledd og sener

**Andre funksjoner:**
- Oppløser vitaminer, mineraler og andre næringsstoffer
- Holder slimhinnene fuktige (øyne, nese, munn)
- Hjelper til med å regulere pH-balansen`,
    },
    {
      id: 'kroppsoving-vg1-3-2-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Forklar tre viktige funksjoner vann har i kroppen.',
        solution: 'Vann har mange viktige funksjoner i kroppen. For det første transporterer det næringsstoffer, oksygen og avfallsstoffer via blodet, som består av 90% vann. For det andre regulerer det kroppstemperaturen gjennom svetting og fordamping fra huden, som kjøler kroppen ned. For det tredje er vann nødvendig for alle kjemiske reaksjoner i kroppen, inkludert fordøyelsen av mat og energiomsetningen i cellene. Andre funksjoner inkluderer å gi celler struktur, smøre ledd, og oppløse vitaminer og mineraler.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-2-def2',
      type: 'definition',
      title: 'Elektrolytter',
      content: 'Elektrolytter er mineraler som finnes oppløst i kroppsvæsker og har elektrisk ladning. De viktigste er natrium, kalium, kalsium, magnesium og klorid. Elektrolytter regulerer væskebalansen, nervesignaler, muskelsammentrekninger og pH-balansen i kroppen.',
    },
    {
      id: 'kroppsoving-vg1-3-2-text3',
      type: 'text',
      content: `## Elektrolytter - mer enn bare salt

Mens vann er selve transportmiddelet i kroppen, er elektrolytter styringssystemet. De sørger for at væsken havner rett sted, og at cellene kan kommunisere og fungere:

**Natrium (Na+)**
- Hovedelektrolytten utenfor cellene
- Regulerer væskebalanse og blodvolum
- Viktig for nervesignaler og muskelsammentrekninger
- Mistes i store mengder gjennom svette
- Finnes i: salt, bouillon, salte snacks, sportsdrikker

**Kalium (K+)**
- Hovedelektrolytten inne i cellene
- Samarbeider med natrium om væskebalanse
- Essensielt for hjertefunksjon og muskelarbeid
- Finnes i: bananer, poteter, appelsin, spinat, avokado

**Magnesium (Mg2+)**
- Viktig for muskelavslapning og energiomsetning
- Forebygger kramper
- Finnes i: nøtter, fullkorn, belgfrukter, mørk sjokolade

**Kalsium (Ca2+)**
- Essensielt for muskelsammentrekninger
- Viktig for bein og tenner
- Finnes i: melk, ost, yoghurt, grønnkål, mandler

**Klorid (Cl-)**
- Følger natrium og hjelper til med væskebalanse
- Viktig for fordøyelsen (magesyre)
- Finnes i: salt, alger, selleri

Under lett til moderat aktivitet i kjølige omgivelser dekkes elektrolyttbehovet vanligvis av et normalt kosthold. Ved langvarig eller intens aktivitet, spesielt i varme, kan det være nødvendig med tilskudd av elektrolytter.`,
    },
    {
      id: 'kroppsoving-vg1-3-2-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-2-ex3',
        number: '2',
        type: 'classic',
        task: 'Hva er elektrolytter, og hvorfor er de viktige ved fysisk aktivitet?',
        solution: 'Elektrolytter er mineraler med elektrisk ladning som finnes oppløst i kroppsvæsker. De viktigste er natrium, kalium, kalsium, magnesium og klorid. De er spesielt viktige ved fysisk aktivitet fordi de regulerer væskebalansen mellom cellene, muliggjør nervesignaler til musklene, og er nødvendige for muskelsammentrekninger. Ved langvarig eller intens trening mister vi elektrolytter, spesielt natrium, gjennom svette. Hvis disse ikke erstattes, kan det føre til kramper, svakhet og redusert prestasjon. Ved aktivitet over 60-90 minutter eller i varme, bør man derfor tilføre elektrolytter gjennom sportsdrikk eller mat.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-2-example1',
      type: 'example',
      title: 'Væsketap under trening',
      problem: 'Emil løper en fotballkamp på 90 minutter i 25 graders varme. Han veier seg før og etter kampen. Før: 70 kg. Etter: 68,5 kg. Hvor mye væske har han mistet, og hva betyr dette?',
      solution: `Vekttap under fysisk aktivitet er nesten utelukkende væsketap (ikke fettforbrenning).

Væsketap = 70 kg - 68,5 kg = 1,5 kg = 1,5 liter

Prosent dehydrering = (1,5 / 70) × 100 = 2,1%

Dette er moderat dehydrering. Ved 2% væsketap begynner prestasjonen å reduseres merkbart.

Hva burde Emil gjort?
- Drukket 300-500 ml vann 2 timer før kamp
- Drukket 150-200 ml rett før kamp
- Drukket 150-200 ml i pausen
- Drukket minst 2 liter væske etter kampen (150% av tapet)

Hvis Emil hadde drukket underveis, ville tapet vært mindre og prestasjonen bedre.`,
    },
    {
      id: 'kroppsoving-vg1-3-2-def3',
      type: 'definition',
      title: 'Dehydrering',
      content: 'Dehydrering er tilstanden der kroppen har tapt mer væske enn den har fått i seg. Mild dehydrering (1-2% vekttap) gir tørste og lett redusert prestasjon. Moderat dehydrering (3-5%) gir tydelige symptomer som hodepine og tretthet. Alvorlig dehydrering (>5%) er farlig og krever medisinsk hjelp.',
    },
    {
      id: 'kroppsoving-vg1-3-2-text4',
      type: 'text',
      content: `## Symptomer på dehydrering

Det er viktig å kjenne igjen tegnene på dehydrering tidlig, slik at du kan handle før det påvirker helsen din:

**Mild dehydrering (1-2% væsketap):**
- Tørste
- Tørr munn
- Mørk urin
- Lett redusert prestasjon
- Mildtheten forsvinner raskt med væskeinntak

**Moderat dehydrering (3-5% væsketap):**
- Sterk tørste
- Hodepine
- Tretthet og svimmelhet
- Redusert urinproduksjon
- Svært mørk urin
- Tørr hud som mister elastisitet
- Merkbar reduksjon i fysisk og mental prestasjon
- Økt puls og redusert svetting

**Alvorlig dehydrering (>5% væsketap):**
- Forvirring og desorientering
- Ekstrem tretthet
- Ingen urinproduksjon
- Innfallne øyne
- Rask puls og lavt blodtrykk
- Kan være livstruende - krever øyeblikkelig medisinsk hjelp

**Enkel test - sjekk urinfargen:**
- Lys gul/klar: godt hydrert
- Gul: ok hydrering
- Mørk gul: begrenset dehydrering, drikk mer
- Oransje/brun: betydelig dehydrering, drikk straks`,
    },
    {
      id: 'kroppsoving-vg1-3-2-tip1',
      type: 'tip',
      title: 'Tegn på god hydrering',
      content: `Du er sannsynligvis godt hydrert når:
- Urinen er lys gul eller nesten klar
- Du sjelden føler tørste
- Du må på toalettet regelmessig (5-7 ganger daglig)
- Huden er elastisk og fuktig
- Du føler deg energisk og konsentrert
- Du ikke har hodepine eller svimmelhet`,
    },
    {
      id: 'kroppsoving-vg1-3-2-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-2-ex2',
        number: '3',
        type: 'classic',
        task: 'Hvilke symptomer kan tyde på dehydrering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg alle symptomer som kan være tegn på mild til moderat dehydrering',
            solution: 'Tørste, hodepine, mørk urin, tretthet',
            multipleChoiceOptions: ['Tørste, hodepine, mørk urin, tretthet', 'Økt energi og konsentrasjon', 'Lys urin og hyppig vannlating', 'Forbedret prestasjon'],
          },
          {
            label: 'b',
            task: 'Hvordan kan du enkelt sjekke din hydreringsstatus?',
            solution: 'Den enkleste måten er å sjekke urinfargen. Lys gul eller nesten klar urin indikerer god hydrering. Mørk gul, oransje eller brun urin er tegn på dehydrering.',
          },
          {
            label: 'c',
            task: 'Hva bør du gjøre hvis du oppdager symptomer på moderat dehydrering?',
            solution: 'Ved moderat dehydrering bør du umiddelbart drikke vann, finne en kjølig plass å hvile, og redusere fysisk aktivitet. Drikk små mengder jevnlig over tid i stedet for mye på en gang. Hvis symptomene ikke blir bedre innen kort tid, bør du søke medisinsk hjelp.',
          },
        ],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-2-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-2-ex7',
        number: '4',
        type: 'classic',
        task: 'En utøver veier 72 kg før en 90 minutters fotballkamp og 70 kg etter. Beregn prosent dehydrering og vurder om dette påvirker prestasjonen.',
        solution: 'Væsketap = 72 kg - 70 kg = 2 kg = 2 liter. Prosent dehydrering = (2 / 72) × 100 = 2,78%, altså nesten 3%. Dette er moderat dehydrering som definitivt påvirker prestasjonen negativt. Allerede ved 2% væsketap begynner både fysisk og mental prestasjon å reduseres. Ved 3% vil utøveren oppleve tydelig redusert utholdenhet, tregere reaksjonstid, og økt risiko for hodepine og tretthet. Utøveren burde ha drukket væske før, under (i pausen) og etter kampen. Totalt burde vedkommende ha drukket minst 1 liter under kampen og 3 liter (150% av tapet) i timene etter for full restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-2-text5',
      type: 'text',
      content: `## Hvor mye skal du drikke?

Det er ingen fasit på nøyaktig hvor mye væske hver person trenger, fordi behovet varierer med:
- Kroppsstørrelse og vekt
- Aktivitetsnivå
- Temperatur og luftfuktighet
- Hva du spiser (frukt og grønnsaker inneholder mye vann)
- Individuell genetikk

**Generelle anbefalinger:**

**Daglig grunnbehov (i hvile):**
- Kvinner: ca. 2 liter væske per dag
- Menn: ca. 2,5-3 liter væske per dag
- Ungdom: 2-2,5 liter per dag

**Ved fysisk aktivitet:**
Legg til 400-800 ml per time aktivitet, avhengig av intensitet.

**Tommelfingerregel:**
30-40 ml væske per kg kroppsvekt per dag, mer ved trening.

En person på 70 kg: 70 × 35 ml = 2450 ml = ca. 2,5 liter daglig

**Væskekilder:**
- Vann og andre drikkevarer: 70-80%
- Mat (frukt, grønnsaker, supper): 20-30%
- Metabolsk vann (fra energiomsetning): lite, men bidrar

Den beste strategien er å lytte til kroppens tørstesignaler og sjekke urinfargen regelmessig.`,
    },
    {
      id: 'kroppsoving-vg1-3-2-example2',
      type: 'example',
      title: 'Væskestrategi for fotballtrening',
      problem: 'Lisa skal på 2 timers intensiv fotballtrening. Lag en væskestrategi for henne.',
      solution: `**Før trening (2-4 timer før):**
- Drikk 400-600 ml vann for å sikre god hydrering
- Sjekk urinfarge - bør være lys gul

**Like før trening (15-30 min før):**
- Drikk 200-300 ml vann
- Ikke drikk for mye rett før - kan gi ubehag

**Under trening (hver 15-20 minutt):**
- Drikk 150-200 ml vann
- Totalt ca. 600-800 ml i løpet av 2 timer
- Ved veldig intens aktivitet eller høy temperatur: vurder sportsdrikk med elektrolytter

**Etter trening (innen 30 min):**
- Drikk 500 ml vann
- Fortsett å drikke jevnt neste par timer
- Totalt ca. 150% av væsketapet (hvis tapt 1 liter, drikk 1,5 liter)

**Tegn på at strategien fungerer:**
- Lisa orker hele økten uten å bli unødvendig sliten
- Hun svetter normalt gjennom hele økten
- Urinen er lys gul etter trening`,
    },
    {
      id: 'kroppsoving-vg1-3-2-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-2-ex4',
        number: '5',
        type: 'classic',
        task: 'Du skal løpe et 10 km løp. Lag en væskestrategi for før, under og etter løpet.',
        solution: 'Før løpet (2-4 timer før): Drikk 400-600 ml vann for å sikre god hydrering. Sjekk at urinen er lys gul. 15-30 min før start: Drikk 200-250 ml vann, ikke mer for å unngå ubehag. Under løpet: Et 10 km løp tar vanligvis 50-70 minutter. Drikk litt vann (100-150 ml) ved evt. vannpost underveis. Vann er tilstrekkelig - ingen sportsdrikk nødvendig for denne varigheten. Etter løpet: Drikk 500 ml vann innen 30 minutter. Fortsett å drikke jevnlig de neste timene. Spis et måltid med karbohydrater og protein innen 1-2 timer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-3-2-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-2-ex6',
        number: '6',
        type: 'classic',
        task: 'Forklar hva som menes med "30-40 ml væske per kg kroppsvekt per dag" og beregn behovet for en person på 65 kg.',
        solution: 'Dette er en tommelfingerregel for daglig væskebehov. Det betyr at for hver kilo en person veier, trenger kroppen 30-40 ml væske per dag. For en person på 65 kg: 65 kg × 30 ml = 1950 ml (ca. 2 liter) minimum, 65 kg × 40 ml = 2600 ml (ca. 2,6 liter) optimalt. Denne personen bør altså sikte på 2-2,6 liter væske daglig fra drikke og mat. Ved fysisk aktivitet må man legge til 400-800 ml per time trening. Hvis personen trener 1 time, blir totalt behov 2,4-3,4 liter den dagen.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-2-def4',
      type: 'definition',
      title: 'Hyperhydrering',
      content: 'Hyperhydrering (overhydrering) er tilstanden der kroppen har fått i seg for mye væske i forhold til elektrolyttene. Dette fortynner elektrolyttene i blodet, spesielt natrium (hyponatremi), og kan være farlig. Symptomer inkluderer kvalme, hodepine, forvirring og i alvorlige tilfeller kramper. Oppstår sjelden, men kan skje ved ekstremt høyt væskeinntak uten elektrolytter.',
    },
    {
      id: 'kroppsoving-vg1-3-2-text6',
      type: 'text',
      content: `## Hva skal du drikke?

**Vann - førstehåndsvalgvet:**
For de fleste aktiviteter under 60-90 minutter er rent vann det beste valget. Det er billig, tilgjengelig, og dekker væskebehovet perfekt.

**Sportsdrikker - når er de nyttige?**
Sportsdrikker kan være fornuftige ved:
- Aktivitet over 60-90 minutter
- Svært intens aktivitet med mye svetting
- Trening i varme omgivelser
- Når du trenger rask energitilførsel

**Hva inneholder sportsdrikker:**
- Karbohydrater (4-8%): Gir energi underveis
- Elektrolytter (natrium, kalium): Erstatter tap i svette
- Vann: Hydrering

**Andre alternativer:**
- **Melk**: Godt etter trening - inneholder protein, karbohydrater og elektrolytter
- **Saft/juice**: Ok tynt blandet, men ofte mye sukker
- **Kokosvatn**: Naturlig kilde til elektrolytter
- **Te**: Bidrar til væskeinntak, men unngå store mengder koffein

**Unngå ved trening:**
- **Brus og energidrikker**: For mye sukker og koffein
- **Alkohol**: Dehydrerende, reduserer prestasjon og restitusjon
- **Koffein i store mengder**: Kan ha diuretisk effekt (økt urinproduksjon)

**DIY sportsdrikk:**
- 1 liter vann
- 50-80 g sukker (eller 400 ml juice)
- 1-2 g salt
- Litt sitronsaft for smak`,
    },
    {
      id: 'kroppsoving-vg1-3-2-example3',
      type: 'example',
      title: 'Når trenger du sportsdrikk?',
      problem: 'Sammenlign tre treningssituasjoner og vurder om sportsdrikk er nødvendig: A) 45 min joggetur, B) 2 timer sykkeltur i varmen, C) 30 min styrketrening.',
      solution: `**Situasjon A: 45 min joggetur**
Anbefaling: Vann er tilstrekkelig
Begrunnelse: Under 60 minutter moderat aktivitet. Kroppen har nok glykogen og elektrolytter. Drikk vann før og etter.

**Situasjon B: 2 timer sykkeltur i varmen**
Anbefaling: Sportsdrikk anbefales
Begrunnelse: Lang varighet (over 90 min) kombinert med varme gir betydelig vann- og elektrolytttap. Kroppen trenger også karbohydrater for å opprettholde energinivået. Sportsdrikk gir væske + energi + elektrolytter i ett. Alternativt: vann + banan/energibar + litt salt.

**Situasjon C: 30 min styrketrening**
Anbefaling: Vann er tilstrekkelig
Begrunnelse: Kort varighet og moderat svetting. Kroppen bruker anaerob energiomsetning som ikke tømmer glykogenlagrene merkbart. Drikk vann underveis for komfort. Spis måltid med protein og karbohydrater etter trening i stedet.`,
    },
    {
      id: 'kroppsoving-vg1-3-2-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-2-ex5',
        number: '7',
        type: 'classic',
        task: 'Når er sportsdrikker mer nyttige enn vanlig vann?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg situasjonen der sportsdrikk er mest fornuftig',
            solution: '2 timer intens trening i varmen',
            multipleChoiceOptions: ['30 minutters rolig gåtur', '45 minutters styrketrening', '2 timer intens trening i varmen', '15 minutters tøyning'],
          },
          {
            label: 'b',
            task: 'Hva inneholder sportsdrikker som gjør dem nyttige ved langvarig aktivitet?',
            solution: 'Sportsdrikker inneholder karbohydrater (4-8%) som gir energi underveis, elektrolytter (natrium og kalium) som erstatter tap i svette, og vann for hydrering. Denne kombinasjonen gjør at de både hydrerer og gir energi samtidig.',
          },
          {
            label: 'c',
            task: 'Lag en enkel hjemmelaget sportsdrikk.',
            solution: 'Oppskrift: 1 liter vann + 50-80 gram sukker (eller 400 ml appelsinjuice) + 1-2 gram salt (ca. 1/4 ts) + litt sitronsaft for smak. Rist godt sammen. Dette gir deg en drink med riktig balanse av karbohydrater, elektrolytter og væske.',
          },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-2-tip2',
      type: 'tip',
      title: 'Praktiske tips for god hydrering',
      content: `1. **Ha alltid med drikkeflaske**: Gjør det lett å drikke jevnlig
2. **Drikk til måltider**: Enkelt å huske, gir jevn væsketilførsel
3. **Sjekk urinfargen**: Enkel indikator på hydreringsstatus
4. **Drikk før du blir tørst**: Tørste er tegn på at du allerede begynner å bli dehydrert
5. **Planlegg væskeinntak før lang aktivitet**: Ikke la hydrering bli en etterpåklokskap
6. **Spis vannrike matvarer**: Vannmelon, agurk, appelsin, salat bidrar
7. **Vei deg før/etter lang aktivitet**: Sjekk væsketapet
8. **Tilpass til temperaturen**: Drikk mer i varmen`,
    },
    {
      id: 'kroppsoving-vg1-3-2-def5',
      type: 'definition',
      title: 'Akklimatisering',
      content: 'Akklimatisering er kroppens tilpasning til et nytt klima, spesielt varme. Etter 1-2 uker i varmt klima blir svettemekanismen mer effektiv, du svetter tidligere og mister mindre elektrolytter i svetten. Dette gjør deg bedre rustet til å trene i varme.',
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-3-2-exercise8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-2-ex8',
        number: '8',
        type: 'classic',
        task: 'Beskriv forskjellen mellom dehydrering og hyperhydrering. Hvilken er mest vanlig, og hvorfor?',
        solution: 'Dehydrering er når kroppen har mistet mer væske enn den har fått i seg, mens hyperhydrering (overhydrering) er når kroppen har fått i seg for mye væske i forhold til elektrolyttene. Dehydrering er langt mer vanlig og oppstår lett ved fysisk aktivitet, spesielt i varmen, hvis man ikke drikker nok. Symptomer er tørste, mørk urin, hodepine og tretthet. Hyperhydrering er sjelden og oppstår hvis man drikker ekstremt mye vann uten å erstatte elektrolytter, noe som fortynner natriumet i blodet (hyponatremi). Dette kan gi kvalme, hodepine og i alvorlige tilfeller kramper. Hyperhydrering er sjelden fordi kroppen normalt kvitter seg med overskuddsvæske via urinen, men kan skje ved ekstreme situasjoner som ultraløp der utøvere drikker svært mye uten elektrolytter.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_3_3: TextbookChapter = {
  id: 'kroppsoving-vg1-3-3',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '3.3',
  title: 'Restitusjon og hvile',
  description: 'Forstå betydningen av god restitusjon, søvn og hvile for prestasjon og helse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'Forklare kroppens restitusjons- og tilpasningsprosesser',
    'Vurdere betydningen av søvn for prestasjon og helse',
    'Planlegge treningsopplegg med tilstrekkelig restitusjon',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-3-3-intro',
      type: 'text',
      content: `# Restitusjon og hvile

Det er en utbredt misforståelse at trening i seg selv gjør deg sterkere og bedre. Sannheten er at trening bryter ned kroppen, mens det er i hvileperiodene etterpå at kroppen bygger seg opp igjen - sterkere enn før. Denne prosessen kalles restitusjon, og den er like viktig som selve treningen.

Mange unge utøvere tror at mer trening alltid er bedre. De trener hver dag, kanskje flere ganger daglig, og lurer på hvorfor de ikke blir bedre. Svaret er ofte at de ikke gir kroppen nok tid til å restituere. Uten tilstrekkelig hvile, vil kroppen aldri få bygget seg opp igjen, og i stedet risikerer du overtrening, skader og utbrenthet.

I dette kapittelet skal vi se nærmere på hva som skjer i kroppen under restitusjon, hvorfor søvn er så viktig, og hvordan du kan planlegge trening og hvile for optimal utvikling og prestasjon.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-def1',
      type: 'definition',
      title: 'Restitusjon',
      content: 'Restitusjon er prosessen der kroppen gjenoppretter seg etter fysisk belastning. Dette inkluderer reparasjon av muskelvev, påfylling av energilagre (glykogen), gjenoppbygging av cellestrukturer, og tilpasninger som gjør kroppen sterkere. Restitusjon krever hvile, søvn, riktig ernæring og tilstrekkelig tid.',
    },
    {
      id: 'kroppsoving-vg1-3-3-text2',
      type: 'text',
      content: `## Hva skjer under restitusjon?

Når du trener intenst, skjer det mye i kroppen:

**Under trening:**
- Muskelfibrer får mikroskopiske skader
- Glykogenlagrene (energilagrene) tømmes
- Væske og elektrolytter svettes ut
- Avfallsstoffer (melkesyre, karbondioksid) samles opp
- Immunforsvaret svekkes midlertidig
- Hormonnivåer endres (kortisol øker, testosteron synker)

**I restitusjonsperioden (timer og dager etter):**
- Muskelfibrene repareres og blir sterkere
- Glykogenlagrene fylles opp igjen
- Væskebalansen gjenopprettes
- Avfallsstoffer fjernes
- Immunforsvaret styrkes
- Hormonnivåene normaliseres
- Nye mitokondrier (cellenes kraftverk) dannes
- Kapillærnettet utvides for bedre blodsirkulasjon

Dette er **superkompensasjon** - kroppen bygger seg ikke bare tilbake til utgangspunktet, men litt forbi, slik at den er bedre rustet neste gang.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-def2',
      type: 'definition',
      title: 'Superkompensasjon',
      content: 'Superkompensasjon er prinsippet om at kroppen etter trening og tilstrekkelig restitusjon bygger seg opp til et høyere nivå enn før. Dette er mekanismen bak treningsfremgang. Hvis du trener igjen akkurat når kroppen er på topp av superkompensasjonen, fortsetter du å bli bedre. Trener du for tidlig eller for sent, blir effekten dårligere.',
    },
    {
      id: 'kroppsoving-vg1-3-3-text3',
      type: 'text',
      content: `## Superkompensasjonsprinsippet

Superkompensasjon kan illustreres som en kurve:

**Fase 1: Trening (belastning)**
- Prestasjonsnivået synker fordi kroppen er sliten
- Energilagrene er tomme
- Musklene er skadde

**Fase 2: Restitusjon (gjenoppbygging)**
- Prestasjonsnivået er fortsatt lavt de første dagene
- Kroppen jobber med reparasjon og påfylling
- Immunforsvaret er sårbart

**Fase 3: Superkompensasjon (peak)**
- Etter 2-7 dager (avhengig av belastning) er du på topp
- Kroppen har bygget seg opp sterkere enn før
- Dette er det optimale tidspunktet for neste harde økt

**Fase 4: Detrening (hvis ingen ny belastning)**
- Hvis du venter for lenge, faller kroppen tilbake
- Tilpasningene forsvinner gradvis
- Du mister fremgangen

**Optimal treningsfrekvens:**
Timing er kritisk. Du vil treffe toppen av superkompensasjonen:
- Lettere treningsøkter: 24-48 timer restitusjon
- Moderate økter: 48-72 timer restitusjon
- Svært harde økter: 72-96 timer eller mer

Dette forklarer hvorfor mange treningsprogram har en struktur med hard/lett/hvil eller 2-3 dager mellom harde økter.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-example1',
      type: 'example',
      title: 'Superkompensasjon i praksis',
      problem: 'Maria trener styrke. På mandag har hun en hard økt med knebøy (3×8 reps, tungt). Når bør hun trene tunge knebøy igjen for optimal fremgang?',
      solution: `**Dag 1 (mandag): Hard styrkeøkt**
- Tung knebøytrening
- Musklene får mikroskader
- Prestasjonsevne synker

**Dag 2-3 (tirsdag-onsdag): Tidlig restitusjon**
- Musklene er ømsøre (DOMS - Delayed Onset Muscle Soreness)
- Kroppen reparerer skader
- Prestasjonsevne fortsatt lav
- Kan gjøre lett kardio eller trene andre muskelgrupper

**Dag 4-5 (torsdag-fredag): Superkompensasjon**
- Musklene er reparert og sterkere enn før
- Dette er optimal tid for neste tunge knebøyøkt
- Maria bør trene knebøy igjen torsdag eller fredag

**Dag 6-7+ (lørdag-søndag+): Detrening**
- Hvis Maria venter for lenge (over 7 dager), begynner tilpasningene å forsvinne
- Hun mister noe av fremgangen

**Konklusjon:**
Maria bør trene tunge knebøy 2 ganger per uke med 3-4 dager mellom, for eksempel mandag og torsdag eller fredag. Dette gir maksimal fremgang.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-def3',
      type: 'definition',
      title: 'Søvn',
      content: 'Søvn er en aktiv og kompleks tilstand der kroppen og hjernen utfører kritiske vedlikeholds- og reparasjonsarbeid. Under søvn produseres veksthormon, musklene repareres, minnet konsolideres, og immunforsvaret styrkes. Ungdom trenger 8-10 timer søvn per natt, men mange får langt mindre.',
    },
    {
      id: 'kroppsoving-vg1-3-3-text4',
      type: 'text',
      content: `## Søvnens betydning for prestasjon

Søvn er kanskje det mest undervurderte verktøyet for prestasjon. Forskning viser klart at tilstrekkelig søvn forbedrer alt fra fysisk ytelse til kognitiv funksjon:

**Fysiske effekter av god søvn:**
- **Muskelvekst og reparasjon**: 60-70% av veksthormonet utskilles i dyp søvn
- **Energigjenvinning**: Glykogenlagrene fylles mer effektivt
- **Redusert skaderisiko**: Utøvere som sover <8 timer har 70% høyere skaderisiko
- **Bedre utholdenhet**: Reaksjonstid og utmattelse påvirkes sterkt av søvn
- **Sterkere immunforsvar**: Søvnmangel øker sykelighet

**Mentale effekter av god søvn:**
- **Læring og hukommelse**: Søvn konsoliderer ny informasjon
- **Reaksjonstid**: Søvnmangel reduserer reaksjonsevnen like mye som alkohol
- **Beslutningstaking**: Dårlige valg under press
- **Motivasjon**: Mindre lyst til å trene
- **Stemningsleie**: Økt risiko for stress, angst og depresjon

**Søvnsykluser:**
Søvnen består av flere sykluser à ca. 90 minutter:
1. **Lett søvn** (N1-N2): Overgang til søvn
2. **Dyp søvn** (N3): Fysisk restitusjon, veksthormon
3. **REM-søvn**: Drømmer, mental restitusjon, læring

Du trenger 4-6 komplette sykluser per natt (6-9 timer) for optimal restitusjon.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-example2',
      type: 'example',
      title: 'Effekten av søvnmangel på prestasjon',
      problem: 'To basketballspillere har identisk treningsprogram i 4 uker. Spiller A sover 9 timer per natt, spiller B sover 6 timer. Hva viser forskningen om forskjellen?',
      solution: `Studier på basketballspillere ved Stanford University viser dramatiske forskjeller:

**Spiller A (9 timer søvn):**
- Økt sprinttid med 5%
- Forbedret skuddprosent med 9%
- Bedre reaksjonstid
- Økt energi og motivasjon
- Færre skader

**Spiller B (6 timer søvn):**
- Ingen forbedring i sprinttid
- Minimal forbedring i skuddprosent
- Tregere reaksjonstid
- Mer trett og mindre motivert
- Høyere risiko for småskader

**Konklusjon:**
Selv om begge trener identisk, får Spiller A mye større utbytte fordi kroppen restituerer bedre med tilstrekkelig søvn. Etter noen måneder vil forskjellen være enda større. Søvn er like viktig som trening selv.

**Praktisk relevans:**
Hvis du velger mellom en ekstra treningsøkt eller en ekstra time søvn, velg søvn. Kroppen trenger restitusjonen mer enn enda en dose belastning.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-tip1',
      type: 'tip',
      title: 'Tips for bedre søvn',
      content: `1. **Fast rutine**: Gå til sengs og stå opp samtidig hver dag, også i helgen
2. **Mørkt soverom**: Bruk mørke gardiner eller søvnmaske
3. **Kjølig temperatur**: 16-19°C er optimalt for søvn
4. **Ingen skjermer siste time**: Blått lys fra mobil/PC forstyrrer melatoninproduksjonen
5. **Unngå store måltider sent**: Spis middag 2-3 timer før sengetid
6. **Begrens koffein**: Ingen kaffe/energidrikk etter kl 15-16
7. **Aktiv på dagen**: Fysisk aktivitet fremmer god søvn (men ikke rett før sengetid)
8. **Avslapningsrutine**: Les, ta et bad, eller tøy ut for å slappe av
9. **Skriv ned tanker**: Hvis du grubbler, skriv det ned og slett det fra hodet
10. **Søvnvindu**: Legg deg når du er trøtt, ikke vent`,
    },
    {
      id: 'kroppsoving-vg1-3-3-text5',
      type: 'text',
      content: `## Aktiv vs. passiv restitusjon

Det finnes to hovedtyper restitusjon:

**Passiv restitusjon:**
- Total hvile uten fysisk aktivitet
- Søvn, hvile på sofaen, lette aktiviteter
- Nødvendig etter svært harde økter
- Anbefales minst 1-2 dager per uke

**Aktiv restitusjon:**
- Lett fysisk aktivitet på restitusjons-dager
- Rolig jogging, sykling, svømming, yoga, lett styrke
- 30-60 minutter ved 50-60% av maks puls
- Fremmer blodsirkulasjon og fjerning av avfallsstoffer
- Mindre muskelømhet (DOMS) enn ved total hvile
- Vedlikeholder bevegelsesmønster uten å belaste

**Når bruke hvilken?**
- **Aktiv**: Dagen etter moderat trening, eller to dager etter hard trening
- **Passiv**: Dagen etter svært intens trening, ved sykdom, eller når kroppen virkelig trenger hvile

Mange idrettsutøvere har nytte av mesteparten aktiv restitusjon, med innslag av passiv restitusjon. Dette holder kroppen "varm" uten overbelastning.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-def4',
      type: 'definition',
      title: 'Overtrening',
      content: 'Overtrening er en tilstand der kroppen ikke får tilstrekkelig restitusjon over lang tid. Symptomer inkluderer vedvarende tretthet, redusert prestasjon, økt skaderisiko, dårlig søvn, økt hvilepuls, hyppig sykdom, og redusert motivasjon. Overtrening utvikles gradvis og kan ta måneder å komme seg fra.',
    },
    {
      id: 'kroppsoving-vg1-3-3-text6',
      type: 'text',
      content: `## Overtrening - når kroppen gir opp

Overtrening (overtraining syndrome) er en alvorlig tilstand som oppstår når du trener for mye og restituerer for lite over lang tid. Det er ikke det samme som å være sliten etter en hard uke - det er en kronisk tilstand.

**Tegn på overtrening:**

**Fysiske symptomer:**
- Vedvarende tretthet som ikke bedres med hvile
- Prestasjon går nedover til tross for trening
- Økt hvilepuls (5-10 slag høyere enn normalt)
- Lengre tid før pulsen kommer ned etter trening
- Hyppige småskader og plager
- Ofte syk (svekket immunforsvar)
- Vedvarende muskelømhet

**Mentale og emosjonelle symptomer:**
- Tap av treningsglede og motivasjon
- Irritabilitet og humørsvingninger
- Søvnproblemer (urolig søvn til tross for tretthet)
- Konsentrasjonsvansker
- Angst eller depressive tanker

**Fysiologiske årsaker:**
- Kronisk forhøyet kortisol (stresshormon)
- Redusert testosteron og veksthormon
- Uttømte glykogenlagre som ikke fylles opp
- Kronisk betennelse i kroppen
- Forstyrret hormonsystem

**Forebygging:**
- Planlegg restitusjonsperioder i treningsopplegget
- Ha minst 1-2 lett-/hviledager per uke
- Variere intensitet - ikke gå hardt hver dag
- Lytt til kroppen - hvis du er uvanlig sliten, ta ekstra hvile
- Søvn, søvn, søvn - prioriter 8-10 timer
- Balansert kosthold med nok energi
- Stress utenom trening påvirker også - ta hensyn til skole, jobb, sosiale forhold

**Behandling:**
Hvis du er overtrent, hjelper det ikke med noen dager hvile. Du må ta ukesvis, kanskje månedsvis med drastisk redusert trening. Det er bedre å forebygge enn å måtte ta måneder ut.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-example3',
      type: 'example',
      title: 'Planlegging av treningsuke med restitusjon',
      problem: 'Lars trener fotball og vil også forbedre sin utholdenhet og styrke. Lag en treningsuke som sikrer god restitusjon.',
      solution: `**Mandag: Lagstrening fotball (90 min, moderat-høy intensitet)**
- Tekniske øvelser og småspill
- Moderat belastning

**Tirsdag: Aktiv restitusjon (30 min rolig jogg eller sykling)**
- Lav intensitet (60% av maks puls)
- Mobilitet og tøying etterpå

**Onsdag: Styrketrening (60 min, fokus på bein og core)**
- Tung belastning, men mindre volum
- God restitusjonstid siden det er 2 dager siden fotballtrening

**Torsdag: Lagstrening fotball (90 min, høy intensitet)**
- Kamp eller svært intensive drills
- Hard belastning

**Fredag: Passiv restitusjon**
- Total hvile eller bare lette strekk
- Prioriter god søvn før kamp

**Lørdag: Kamp (90 min, høyeste intensitet)**
- Full innsats

**Søndag: Aktiv restitusjon (30-45 min lett aktivitet) + mobilitet**
- Lett jogg, sykling, eller svømming
- Yoga eller god tøyeøkt
- Fokus på neste ukes økter

**Nøkkelpunkter:**
- 2 dager med passiv/aktiv restitusjon
- Ikke to tunge økter på rad
- Variert belastning gjennom uken
- God søvn prioriteres hver dag (8-10 timer)`,
    },
    {
      id: 'kroppsoving-vg1-3-3-def5',
      type: 'definition',
      title: 'DOMS (Delayed Onset Muscle Soreness)',
      content: 'DOMS er muskelømhet som oppstår 24-72 timer etter uvanlig eller intensiv trening. Det skyldes mikroskopiske skader i muskelfibrene og betennelse. DOMS er normalt og et tegn på at musklene trenger restitusjon. Det går over av seg selv etter noen dager. Aktiv restitusjon kan redusere DOMS.',
    },
    {
      id: 'kroppsoving-vg1-3-3-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som menes med superkompensasjon.',
        solution: 'Superkompensasjon er prinsippet om at kroppen etter trening og tilstrekkelig restitusjon bygger seg opp til et høyere prestasjonsnivå enn før belastningen. Når du trener, brytes kroppen ned og prestasjonsnivået synker. I restitusjonsperioden reparerer kroppen skadene og fyller på energilagrene, men stopper ikke der - den bygger seg litt sterkere enn før for å være bedre rustet til liknende belastning neste gang. Hvis du timer neste harde treningsøkt når kroppen er på topp av superkompensasjonskurven (typisk 2-7 dager avhengig av belastning), fortsetter du å utvikle deg. Dette er grunnprinsippet bak all treningsfremgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-3-3-def3',
      type: 'definition',
      title: 'Søvn',
      content: 'Søvn er en aktiv og kompleks tilstand der kroppen og hjernen utfører kritiske vedlikeholds- og reparasjonsarbeid. Under søvn produseres veksthormon, musklene repareres, minnet konsolideres, og immunforsvaret styrkes. Ungdom trenger 8-10 timer søvn per natt, men mange får langt mindre.',
    },
    {
      id: 'kroppsoving-vg1-3-3-text4',
      type: 'text',
      content: `## Søvnens betydning for prestasjon

Søvn er kanskje det mest undervurderte verktøyet for prestasjon. Forskning viser klart at tilstrekkelig søvn forbedrer alt fra fysisk ytelse til kognitiv funksjon:

**Fysiske effekter av god søvn:**
- **Muskelvekst og reparasjon**: 60-70% av veksthormonet utskilles i dyp søvn
- **Energigjenvinning**: Glykogenlagrene fylles mer effektivt
- **Redusert skaderisiko**: Utøvere som sover <8 timer har 70% høyere skaderisiko
- **Bedre utholdenhet**: Reaksjonstid og utmattelse påvirkes sterkt av søvn
- **Sterkere immunforsvar**: Søvnmangel øker sykelighet

**Mentale effekter av god søvn:**
- **Læring og hukommelse**: Søvn konsoliderer ny informasjon
- **Reaksjonstid**: Søvnmangel reduserer reaksjonsevnen like mye som alkohol
- **Beslutningstaking**: Dårlige valg under press
- **Motivasjon**: Mindre lyst til å trene
- **Stemningsleie**: Økt risiko for stress, angst og depresjon

**Søvnsykluser:**
Søvnen består av flere sykluser à ca. 90 minutter:
1. **Lett søvn** (N1-N2): Overgang til søvn
2. **Dyp søvn** (N3): Fysisk restitusjon, veksthormon
3. **REM-søvn**: Drømmer, mental restitusjon, læring

Du trenger 4-6 komplette sykluser per natt (6-9 timer) for optimal restitusjon.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-example2',
      type: 'example',
      title: 'Effekten av søvnmangel på prestasjon',
      problem: 'To basketballspillere har identisk treningsprogram i 4 uker. Spiller A sover 9 timer per natt, spiller B sover 6 timer. Hva viser forskningen om forskjellen?',
      solution: `Studier på basketballspillere ved Stanford University viser dramatiske forskjeller:

**Spiller A (9 timer søvn):**
- Økt sprinttid med 5%
- Forbedret skuddprosent med 9%
- Bedre reaksjonstid
- Økt energi og motivasjon
- Færre skader

**Spiller B (6 timer søvn):**
- Ingen forbedring i sprinttid
- Minimal forbedring i skuddprosent
- Tregere reaksjonstid
- Mer trett og mindre motivert
- Høyere risiko for småskader

**Konklusjon:**
Selv om begge trener identisk, får Spiller A mye større utbytte fordi kroppen restituerer bedre med tilstrekkelig søvn. Etter noen måneder vil forskjellen være enda større. Søvn er like viktig som trening selv.

**Praktisk relevans:**
Hvis du velger mellom en ekstra treningsøkt eller en ekstra time søvn, velg søvn. Kroppen trenger restitusjonen mer enn enda en dose belastning.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-tip1',
      type: 'tip',
      title: 'Tips for bedre søvn',
      content: `1. **Fast rutine**: Gå til sengs og stå opp samtidig hver dag, også i helgen
2. **Mørkt soverom**: Bruk mørke gardiner eller søvnmaske
3. **Kjølig temperatur**: 16-19°C er optimalt for søvn
4. **Ingen skjermer siste time**: Blått lys fra mobil/PC forstyrrer melatoninproduksjonen
5. **Unngå store måltider sent**: Spis middag 2-3 timer før sengetid
6. **Begrens koffein**: Ingen kaffe/energidrikk etter kl 15-16
7. **Aktiv på dagen**: Fysisk aktivitet fremmer god søvn (men ikke rett før sengetid)
8. **Avslapningsrutine**: Les, ta et bad, eller tøy ut for å slappe av
9. **Skriv ned tanker**: Hvis du grubbler, skriv det ned og slett det fra hodet
10. **Søvnvindu**: Legg deg når du er trøtt, ikke vent`,
    },
    {
      id: 'kroppsoving-vg1-3-3-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-3-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er søvn så viktig for prestasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange timer søvn trenger ungdom per natt?',
            solution: '8-10 timer',
            multipleChoiceOptions: ['5-6 timer', '6-7 timer', '8-10 timer', '10-12 timer'],
          },
          {
            label: 'b',
            task: 'Nevn tre fysiske prosesser som skjer under søvn',
            solution: 'Under søvn skjer: 1) Produksjon og utskilling av veksthormon som reparerer muskelvev, 2) Påfylling av energilagrene (glykogen) i musklene, 3) Styrking av immunforsvaret slik at kroppen bedre kan forsvare seg mot sykdom.',
          },
          {
            label: 'c',
            task: 'Hva viser forskning om sammenhengen mellom søvnmangel og skaderisiko?',
            solution: 'Forskning viser at ungdom som sover mindre enn 8 timer per natt har omtrent 70% høyere risiko for å bli skadet sammenlignet med de som sover 8 timer eller mer. Søvnmangel reduserer reaksjonstid, koordinasjon og konsentrasjon, noe som øker risikoen for skader.',
          },
        ],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-3-text5',
      type: 'text',
      content: `## Aktiv vs. passiv restitusjon

Det finnes to hovedtyper restitusjon:

**Passiv restitusjon:**
- Total hvile uten fysisk aktivitet
- Søvn, hvile på sofaen, lette aktiviteter
- Nødvendig etter svært harde økter
- Anbefales minst 1-2 dager per uke

**Aktiv restitusjon:**
- Lett fysisk aktivitet på restitusjons-dager
- Rolig jogging, sykling, svømming, yoga, lett styrke
- 30-60 minutter ved 50-60% av maks puls
- Fremmer blodsirkulasjon og fjerning av avfallsstoffer
- Mindre muskelømhet (DOMS) enn ved total hvile
- Vedlikeholder bevegelsesmønster uten å belaste

**Når bruke hvilken?**
- **Aktiv**: Dagen etter moderat trening, eller to dager etter hard trening
- **Passiv**: Dagen etter svært intens trening, ved sykdom, eller når kroppen virkelig trenger hvile

Mange idrettsutøvere har nytte av mesteparten aktiv restitusjon, med innslag av passiv restitusjon. Dette holder kroppen "varm" uten overbelastning.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom aktiv og passiv restitusjon. Gi eksempler på når hver er mest hensiktsmessig.',
        solution: 'Passiv restitusjon er total hvile uten fysisk aktivitet, for eksempel søvn, hvile på sofaen eller andre lette dagligdagse aktiviteter. Dette er best etter svært harde treningsøkter eller når kroppen virkelig trenger fullstendig hvile. Aktiv restitusjon innebærer lett fysisk aktivitet på restitusjons-dager, som rolig jogging, sykling, svømming eller yoga ved 50-60% av maksimal puls i 30-60 minutter. Aktiv restitusjon fremmer blodsirkulasjon og fjerning av avfallsstoffer, og reduserer ofte muskelømhet bedre enn total hvile. Aktiv restitusjon er best dagen etter moderat trening eller to dager etter hard trening. De fleste aktive personer har mest nytte av en kombinasjon, der mesteparten er aktiv restitusjon med innslag av totalt hviledager.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-3-def4',
      type: 'definition',
      title: 'Overtrening',
      content: 'Overtrening er en tilstand der kroppen ikke får tilstrekkelig restitusjon over lang tid. Symptomer inkluderer vedvarende tretthet, redusert prestasjon, økt skaderisiko, dårlig søvn, økt hvilepuls, hyppig sykdom, og redusert motivasjon. Overtrening utvikles gradvis og kan ta måneder å komme seg fra.',
    },
    {
      id: 'kroppsoving-vg1-3-3-text6',
      type: 'text',
      content: `## Overtrening - når kroppen gir opp

Overtrening (overtraining syndrome) er en alvorlig tilstand som oppstår når du trener for mye og restituerer for lite over lang tid. Det er ikke det samme som å være sliten etter en hard uke - det er en kronisk tilstand.

**Tegn på overtrening:**

**Fysiske symptomer:**
- Vedvarende tretthet som ikke bedres med hvile
- Prestasjon går nedover til tross for trening
- Økt hvilepuls (5-10 slag høyere enn normalt)
- Lengre tid før pulsen kommer ned etter trening
- Hyppige småskader og plager
- Ofte syk (svekket immunforsvar)
- Vedvarende muskelømhet

**Mentale og emosjonelle symptomer:**
- Tap av treningsglede og motivasjon
- Irritabilitet og humørsvingninger
- Søvnproblemer (urolig søvn til tross for tretthet)
- Konsentrasjonsvansker
- Angst eller depressive tanker

**Fysiologiske årsaker:**
- Kronisk forhøyet kortisol (stresshormon)
- Redusert testosteron og veksthormon
- Uttømte glykogenlagre som ikke fylles opp
- Kronisk betennelse i kroppen
- Forstyrret hormonsystem

**Forebygging:**
- Planlegg restitusjonsperioder i treningsopplegget
- Ha minst 1-2 lett-/hviledager per uke
- Variere intensitet - ikke gå hardt hver dag
- Lytt til kroppen - hvis du er uvanlig sliten, ta ekstra hvile
- Søvn, søvn, søvn - prioriter 8-10 timer
- Balansert kosthold med nok energi
- Stress utenom trening påvirker også - ta hensyn til skole, jobb, sosiale forhold

**Behandling:**
Hvis du er overtrent, hjelper det ikke med noen dager hvile. Du må ta ukesvis, kanskje månedsvis med drastisk redusert trening. Det er bedre å forebygge enn å måtte ta måneder ut.`,
    },
    {
      id: 'kroppsoving-vg1-3-3-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Hva er overtrening, og hvordan kan det forebygges?',
        solution: 'Overtrening er en tilstand der kroppen ikke får tilstrekkelig restitusjon over lang tid, og til slutt "gir opp". Symptomer inkluderer vedvarende tretthet som ikke bedres med hvile, redusert prestasjon til tross for trening, økt hvilepuls, hyppig sykdom, søvnproblemer, og tap av motivasjon. Forebygging krever: 1) Planlegg restitusjonsperioder med minst 1-2 lett-/hviledager per uke, 2) Variere intensiteten - ikke trene hardt hver dag, 3) Lytte til kroppen og ta ekstra hvile ved uvanlig tretthet, 4) Prioritere 8-10 timers søvn, 5) Spise nok mat med god balanse, og 6) Ta hensyn til stress utenom trening. Det er bedre å forebygge overtrening enn å måtte bruke måneder på å komme seg fra det.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-3-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-3-ex5',
        number: '5',
        type: 'classic',
        task: 'En idrettsutøver har trent hardt i en uke og føler seg uvanlig sliten. Hvilke tegn bør hun se etter for å vite om hun trenger mer restitusjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre fysiske tegn på manglende restitusjon',
            solution: 'Tre fysiske tegn: 1) Økt hvilepuls sammenlignet med normalt (5-10 slag høyere), 2) Vedvarende muskelømhet som ikke går over, 3) Prestasjonen går ned til tross for trening.',
          },
          {
            label: 'b',
            task: 'Nevn tre mentale/emosjonelle tegn på manglende restitusjon',
            solution: 'Tre mentale/emosjonelle tegn: 1) Tap av treningsglede og motivasjon, 2) Irritabilitet og humørsvingninger, 3) Søvnproblemer - urolig søvn til tross for tretthet.',
          },
          {
            label: 'c',
            task: 'Hva bør hun gjøre hvis hun oppdager disse tegnene?',
            solution: 'Hun bør umiddelbart ta noen dager med redusert treningsmengde eller total hvile. Fokuser på passiv restitusjon, prioritere god søvn (8-10 timer), spise næringsrik mat, og drikke nok vann. Hvis symptomene vedvarer etter en uke med hvile, bør hun vurdere lengre pause og eventuelt snakke med trener eller lege. Det er bedre å ta noen ekstra hviledager nå enn å risikere overtrening som tar måneder å komme seg fra.',
          },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-3-example3',
      type: 'example',
      title: 'Planlegging av treningsuke med restitusjon',
      problem: 'Lars trener fotball og vil også forbedre sin utholdenhet og styrke. Lag en treningsuke som sikrer god restitusjon.',
      solution: `**Mandag: Lagstrening fotball (90 min, moderat-høy intensitet)**
- Tekniske øvelser og småspill
- Moderat belastning

**Tirsdag: Aktiv restitusjon (30 min rolig jogg eller sykling)**
- Lav intensitet (60% av maks puls)
- Mobilitet og tøying etterpå

**Onsdag: Styrketrening (60 min, fokus på bein og core)**
- Tung belastning, men mindre volum
- God restitusjonstid siden det er 2 dager siden fotballtrening

**Torsdag: Lagstrening fotball (90 min, høy intensitet)**
- Kamp eller svært intensive drills
- Hard belastning

**Fredag: Passiv restitusjon**
- Total hvile eller bare lette strekk
- Prioriter god søvn før kamp

**Lørdag: Kamp (90 min, høyeste intensitet)**
- Full innsats

**Søndag: Aktiv restitusjon (30-45 min lett aktivitet) + mobilitet**
- Lett jogg, sykling, eller svømming
- Yoga eller god tøyeøkt
- Fokus på neste ukes økter

**Nøkkelpunkter:**
- 2 dager med passiv/aktiv restitusjon
- Ikke to tunge økter på rad
- Variert belastning gjennom uken
- God søvn prioriteres hver dag (8-10 timer)`,
    },
    {
      id: 'kroppsoving-vg1-3-3-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-3-ex6',
        number: '6',
        type: 'classic',
        task: 'Lag en treningsuke for en person som trener håndball 3 ganger i uken og også vil gjøre styrketrening. Sørg for god restitusjon.',
        solution: 'Eksempel på treningsuke med god restitusjon:\n\nMandag: Håndballtrening (90 min, moderat intensitet)\nTirsdag: Aktiv restitusjon (30 min rolig jogg + mobilitet)\nOnsdag: Styrketrening (60 min, overkropp og core)\nTorsdag: Håndballtrening (90 min, høy intensitet)\nFredag: Passiv restitusjon (total hvile eller bare lette strekk)\nLørdag: Håndballkamp (90 min, høyest intensitet)\nSøndag: Aktiv restitusjon (lett sykling eller svømming 30-45 min) + tøying\n\nNøkkelprinsipper: Styrketreningen legges tidlig i uken når kroppen er relativt frisk. Aktiv restitusjon brukes etter moderate økter. Passiv restitusjon før kamp for optimal prestasjon. Ingen harde økter på rad. Prioriter 8-10 timer søvn hver natt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-3-3-def5',
      type: 'definition',
      title: 'DOMS (Delayed Onset Muscle Soreness)',
      content: 'DOMS er muskelømhet som oppstår 24-72 timer etter uvanlig eller intensiv trening. Det skyldes mikroskopiske skader i muskelfibrene og betennelse. DOMS er normalt og et tegn på at musklene trenger restitusjon. Det går over av seg selv etter noen dager. Aktiv restitusjon kan redusere DOMS.',
    },
    {
      id: 'kroppsoving-vg1-3-3-tip2',
      type: 'tip',
      title: 'Restitusjonsstrategier som fungerer',
      content: `1. **Prioriter søvn**: 8-10 timer er ikke luksus, det er nødvendig
2. **Spis riktig etter trening**: Protein + karbohydrater innen 1-2 timer
3. **Væske**: Drikk nok vann hele dagen
4. **Aktiv restitusjon**: Lett aktivitet fremmer blodsirkulasjon
5. **Foam rolling og tøying**: Kan redusere muskelømhet
6. **Kontrast bad**: Veksle mellom varmt og kaldt vann (omdiskutert, men mange liker det)
7. **Massasje**: Fremmer avslapning og blodsirkulasjon
8. **Stressmestring**: Mental hvile er også viktig
9. **Planlegg**: Ha faste restitusjons-dager i planen
10. **Lytt til kroppen**: Noen ganger trenger du mer hvile enn planlagt`,
    },
    {
      id: 'kroppsoving-vg1-3-3-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-3-ex7',
        number: '7',
        type: 'classic',
        task: 'Forklar hva DOMS er og hvorfor det oppstår.',
        solution: 'DOMS (Delayed Onset Muscle Soreness) er muskelømhet som oppstår 24-72 timer etter uvanlig eller intensiv trening. Det skyldes mikroskopiske skader i muskelfibrene som oppstår når musklene belastes mer enn de er vant til, og påfølgende betennelse i vevet. DOMS er et normalt fenomen og et tegn på at musklene har blitt utfordret og trenger restitusjon. Det går over av seg selv etter noen dager når musklene har reparert seg. DOMS er mest uttalt når du: 1) Prøver en ny treningsform, 2) Øker intensiteten eller volumet plutselig, eller 3) Gjør mye eksentrisk arbeid (senking av vekt). Aktiv restitusjon med lett aktivitet kan redusere DOMS ved å fremme blodsirkulasjon og fjerning av avfallsstoffer.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-3-3-exercise8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-3-ex8',
        number: '8',
        type: 'classic',
        task: 'Du har en venn som trener intenst hver eneste dag og mener at "hvile er for de svake". Hvordan vil du forklare viktigheten av restitusjon?',
        solution: 'Jeg ville forklart at trening i seg selv ikke gjør deg sterkere - det er i hvileperiodene etterpå at kroppen bygger seg opp. Under trening brytes muskelfibrer ned, energilagrene tømmes, og kroppen stresses. Det er først i restitusjonsperioden at musklene repareres og blir sterkere (superkompensasjon), glykogenlagrene fylles opp, og hormonnivåene normaliseres. Uten tilstrekkelig hvile vil kroppen aldri få bygget seg opp, og i stedet risikerer du overtrening - en alvorlig tilstand med vedvarende tretthet, redusert prestasjon, økt skaderisiko og tap av motivasjon som kan ta måneder å komme seg fra. Forskning viser klart at utøvere som prioriterer restitusjon presterer bedre og har færre skader. De beste idrettsutøverne i verden har alle restitusjons-dager i programmet sitt. Hvile er ikke svakhet - det er smart trening.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_3_4: TextbookChapter = {
  id: 'kroppsoving-vg1-3-4',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '3.4',
  title: 'Kosthold for trening og prestasjon',
  description: 'Lær om timing av måltider, karbohydratlading og proteininntak i forhold til trening for optimal prestasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Planlegge kostholdstiming før, under og etter trening',
    'Forklare prinsippene bak karbohydratlading',
    'Vurdere betydningen av protein for restitusjon og muskelvekst',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-3-4-intro',
      type: 'text',
      content: `# Kosthold for trening og prestasjon

Et sunt og balansert grunnkosthold er viktig for alle, men når du trener regelmessig og vil prestere best mulig, blir timingen av måltidene ekstra viktig. Det handler ikke bare om HVA du spiser, men også NÅR du spiser det.

Kroppen har ulike energibehov før, under og etter trening. Før trening trenger du energi til å gjennomføre økten. Under langvarig trening kan du trenge påfyll underveis. Etter trening har kroppen et "vindu" der den er spesielt mottakelig for næringsstoffer som hjelper med restitusjon og tilpasning.

Ved å time kostholdet riktig kan du forbedre prestasjonen din, restituere raskere, bygge mer muskler og redusere risikoen for skader og overtrening. I dette kapittelet skal vi se på hvordan du kan optimalisere kostholdet i forhold til trening.`,
    },
    {
      id: 'kroppsoving-vg1-3-4-def1',
      type: 'definition',
      title: 'Nutrient timing',
      content: 'Nutrient timing (næringsstoff-timing) er strategisk planlegging av når du spiser ulike typer mat i forhold til trening. Målet er å maksimere prestasjon, restitusjon og treningseffekt ved å gi kroppen riktig næring til riktig tid.',
    },
    {
      id: 'kroppsoving-vg1-3-4-text2',
      type: 'text',
      content: `## Før trening - fylle tanken

Hva og når du spiser før trening påvirker hvordan økten går:

**2-4 timer før trening:**
Dette er hovedmåltidet før trening.
- **Karbohydrater** (hovedfokus): Fyller glykogenlagrene
- **Protein** (moderat mengde): Starter muskeloppbygging
- **Fett** (lite): Tar lang tid å fordøye, kan gi ubehag
- **Eksempler**: Havregrøt med frukt, pasta med kylling, brødskiver med pålegg

**1-2 timer før trening:**
Lettere måltid eller mellommåltid.
- Fokus på lett fordøyelige karbohydrater
- Lite fett og fiber (unngå mageproblemer)
- **Eksempler**: Banan, yoghurt, smoothie, toast med honning

**30-60 minutter før trening:**
Kun nødvendig ved tidlig morgen-trening eller hvis sulten.
- Enkle karbohydrater som gir rask energi
- Svært lett mat
- **Eksempler**: Energibar, juice, tørket frukt

**Tommelfingerregler:**
- Jo nærmere trening, desto mindre og enklere mat
- Langt fra trening: fokus på sammensatte karbohydrater
- Nært trening: fokus på enkle karbohydrater
- Test ut hva som fungerer for DEG - alle er forskjellige`,
    },
    {
      id: 'kroppsoving-vg1-3-4-example1',
      type: 'example',
      title: 'Før-trenings-måltid for fotballkamp',
      problem: 'Lars har fotballkamp kl. 14:00. Hva bør han spise gjennom dagen for optimal energi?',
      solution: `**Frokost (kl. 08:00):**
- Havregrøt med banan og bær
- 1 glass melk
- 1 egg
- Fokus: Balansert måltid med karbohydrater og protein

**Mellommåltid (kl. 10:30):**
- 2 brødskiver med ost/pålegg
- Appelsin
- Fokus: Vedlikeholde energinivå

**Lett lunsj (kl. 11:30, 2,5 timer før kamp):**
- Pasta med litt kylling og tomatsaus
- Lite fett og fiber
- Fokus: Fylle opp glykogenlagrene uten å bli tung i magen

**Siste påfyll (kl. 13:30, 30 min før oppvarming):**
- Banan eller energibar
- Fokus: Rask energi uten mageproblemer

**Resultat:**
Lars går inn i kampen med fulle energilagre, uten å føle seg tung eller oppblåst.`,
    },
    {
      id: 'kroppsoving-vg1-3-4-text3',
      type: 'text',
      content: `## Under trening - påfyll underveis

For de fleste treningsøkter under 60-90 minutter trenger du ikke mat eller energi underveis - kun væske.

**Ved aktivitet over 90 minutter:**
Kroppen bruker ca. 30-60 gram karbohydrater per time under intens aktivitet. Etter 90 minutter begynner glykogenlagrene å tømmes.

**Hva kan du spise/drikke underveis:**
- **Sportsdrikk** med 6-8% karbohydrater
- **Energigels** (ca. 20-25g karbohydrater per gel)
- **Energibarer** (enkle å spise, 20-40g karbohydrater)
- **Banan** (naturlig alternativ, ca. 25g karbohydrater)
- **Rosiner eller dadler** (konsentrert energi)

**Anbefalinger:**
- Start inntak etter 45-60 minutter
- Sikt på 30-60 gram karbohydrater per time
- Test ut i trening - ALDRI prøv nytt i konkurranse
- Kombiner gjerne med væske

**Når er det nødvendig:**
- Løp/sykling over 90 minutter
- Fotball-/håndballkamper (bruk pausen)
- Langvarig utholdenhetsaktivitet
- Hele treningsdager

**Når er det IKKE nødvendig:**
- Styrketrening (60-90 min)
- Fotballtrening (60-90 min)
- Kortere løpe-/sykkel-turer`,
    },
    {
      id: 'kroppsoving-vg1-3-4-def2',
      type: 'definition',
      title: 'Det anabole vinduet',
      content: 'Det anabole vinduet er perioden etter trening (spesielt de første 30-60 minuttene) der kroppen er ekstra mottakelig for næringsstoffer. Musklene tar opp protein og karbohydrater mer effektivt, noe som gir bedre restitusjon og muskelvekst. Nyere forskning viser at vinduet er litt lengre (2-3 timer) enn tidligere antatt, men det er fortsatt smart å spise relativt raskt etter trening.',
    },
    {
      id: 'kroppsoving-vg1-3-4-text4',
      type: 'text',
      content: `## Etter trening - restitusjons-måltid

Hva du spiser etter trening er avgjørende for restitusjon:

**Mål etter trening:**
1. **Gjenoppbygge muskelvev** (protein)
2. **Fylle opp glykogenlagrene** (karbohydrater)
3. **Rehydrere** (væske og elektrolytter)
4. **Redusere betennelse** (antioksidanter)

**Ideelt restitusjons-måltid innen 30-60 minutter:**

**Karbohydrater:**
- 1-1,5 gram per kg kroppsvekt
- Person på 70 kg: 70-105 gram karbohydrater
- Høy GI karbohydrater er OK nå (rask opptak)
- Eksempler: Ris, pasta, poteter, frukt, juice

**Protein:**
- 20-40 gram høykvalitets protein
- Inneholder alle essensielle aminosyrer
- Eksempler: Kylling, fisk, egg, melkeprodukter, proteinshake

**Fett:**
- Lite til moderat mengde (forsinker ikke opptak vesentlig)
- Fokus på sunt fett

**Væske:**
- 150% av væsketapet
- Vann eller melk (melk gir også næring)

**Praktiske restitusjons-måltider:**
- Proteinshake med banan
- Sjokolademelk (dokumentert god restitusjons-drikk!)
- Kylling/laks med ris/pasta og grønnsaker
- Omelett med brød
- Yoghurt med müsli og frukt
- Tunfiskwrap med ris`,
    },
    {
      id: 'kroppsoving-vg1-3-4-example2',
      type: 'example',
      title: 'Restitusjons-måltid etter hard styrkeøkt',
      problem: 'Emma (60 kg) har akkurat gjennomført en hard styrkeøkt. Lag et restitusjons-måltid.',
      solution: `Emma veier 60 kg. Hun trenger:
- Protein: 20-30 gram
- Karbohydrater: 60-90 gram
- Væske: minst 500 ml

**Alternativ 1 - Raskt og enkelt:**
- 500 ml sjokolademelk (16g protein, 50g karb)
- 1 banan (25g karb)
- Totalt: 16g protein, 75g karb, 500 ml væske
- Kommentar: Dekker det akutte behovet, men bør følges av ordentlig måltid innen 1-2 timer

**Alternativ 2 - Fullverdig måltid:**
- 120g kyllingbryst (30g protein)
- 200g kokte poteter (40g karb)
- Grønnsaker (brokkoli, gulrot)
- 1 eple (15g karb)
- 1 glass melk (8g protein, 12g karb)
- Totalt: 38g protein, 67g karb
- Kommentar: Komplett måltid som dekker alle behov

**Alternativ 3 - Vegetar:**
- Omelett med 3 egg (18g protein)
- 3 brødskiver med brunost (15g protein, 60g karb)
- 1 glass juice (20g karb)
- Totalt: 33g protein, 80g karb
- Kommentar: God kombinasjon av protein fra egg og karbohydrater fra brød`,
    },
    {
      id: 'kroppsoving-vg1-3-4-def3',
      type: 'definition',
      title: 'Karbohydratlading (carb loading)',
      content: 'Karbohydratlading er en strategi for å maksimalt fylle opp kroppens glykogenlagre før langvarig utholdenhetskonstante (>90 minutter). Dette gjøres ved å redusere treningsbelastningen og øke karbohydratinntaket de siste 2-3 dagene før konkurranse. Kan forbedre prestasjonen ved å utsette utmattelse.',
    },
    {
      id: 'kroppsoving-vg1-3-4-text5',
      type: 'text',
      content: `## Karbohydratlading

Karbohydratlading brukes av utholdenhetsutøvere før lange konkurranser:

**Tradisjonell metode (7 dager):**
**Dag 1-3:** Tøm lagrene
- Hard utholdenhets-trening
- Lavt karbohydratinntak (10-20% av energi)

**Dag 4-6:** Last opp
- Lett trening eller hvile
- Høyt karbohydratinntak (70-80% av energi)
- Lagrene "superkompenserer"

**Dag 7:** Konkurranse
- Fulle glykogenlagre
- Kan prestere lenger før utmattelse

**Moderne metode (2-3 dager):**
Nyere forskning viser at tømming ikke er nødvendig:
- **3 dager før**: Reduser treningsmengden til minimum
- **2-3 dager før**: Øk karbohydratinntaket til 8-10 gram per kg kroppsvekt
- **Konkurransedag**: Moderat karbohydratrikt frokost 2-4 timer før

Person på 70 kg: 560-700 gram karbohydrater per dag i ladings-perioden!

**Eksempel på lading-dag:**
- Frokost: Havregrøt, juice, toast med syltetøy
- Mellommåltid: Frukt, smoothie, muffins
- Lunsj: Pasta, ris, brød
- Mellommåltid: Energibar, banan
- Middag: Pasta med tomatsaus (lite protein/fett)
- Kvelds: Yoghurt, müsli, frukt

**Når er karbohydratlading nyttig:**
- Maratonløp
- Langdistanse sykling (>2 timer)
- Lange skirenn
- Triatlon
- Svært lange fotball-/håndballturnering (flere kamper på kort tid)

**Når er det IKKE nødvendig:**
- Sprint/styrke-idretter
- Aktiviteter under 90 minutter
- Regelmessig trening (ikke konkurranse)`,
    },
    {
      id: 'kroppsoving-vg1-3-4-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-4-ex1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som menes med "nutrient timing" og hvorfor det er viktig for idrettsutøvere.',
        solution: 'Nutrient timing er strategisk planlegging av når du spiser ulike typer mat i forhold til trening. Det handler ikke bare om HVA du spiser, men NÅR du spiser det. Dette er viktig for idrettsutøvere fordi kroppen har ulike behov før, under og etter trening. Før trening trenger kroppen energi (karbohydrater) for å prestere. Under langvarig aktivitet kan påfyll underveis forhindre energitømming. Etter trening er kroppen ekstra mottakelig for næringsstoffer (det anabole vinduet), og inntak av protein og karbohydrater gir bedre restitusjon og muskelvekst. Ved å time kostholdet riktig kan man forbedre prestasjonen, restituere raskere og redusere skaderisiko.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-4-text2',
      type: 'text',
      content: `## Før trening - fylle tanken

Hva og når du spiser før trening påvirker hvordan økten går:

**2-4 timer før trening:**
Dette er hovedmåltidet før trening.
- **Karbohydrater** (hovedfokus): Fyller glykogenlagrene
- **Protein** (moderat mengde): Starter muskeloppbygging
- **Fett** (lite): Tar lang tid å fordøye, kan gi ubehag
- **Eksempler**: Havregrøt med frukt, pasta med kylling, brødskiver med pålegg

**1-2 timer før trening:**
Lettere måltid eller mellommåltid.
- Fokus på lett fordøyelige karbohydrater
- Lite fett og fiber (unngå mageproblemer)
- **Eksempler**: Banan, yoghurt, smoothie, toast med honning

**30-60 minutter før trening:**
Kun nødvendig ved tidlig morgen-trening eller hvis sulten.
- Enkle karbohydrater som gir rask energi
- Svært lett mat
- **Eksempler**: Energibar, juice, tørket frukt

**Tommelfingerregler:**
- Jo nærmere trening, desto mindre og enklere mat
- Langt fra trening: fokus på sammensatte karbohydrater
- Nært trening: fokus på enkle karbohydrater
- Test ut hva som fungerer for DEG - alle er forskjellige`,
    },
    {
      id: 'kroppsoving-vg1-3-4-example1',
      type: 'example',
      title: 'Før-trenings-måltid for fotballkamp',
      problem: 'Lars har fotballkamp kl. 14:00. Hva bør han spise gjennom dagen for optimal energi?',
      solution: `**Frokost (kl. 08:00):**
- Havregrøt med banan og bær
- 1 glass melk
- 1 egg
- Fokus: Balansert måltid med karbohydrater og protein

**Mellommåltid (kl. 10:30):**
- 2 brødskiver med ost/pålegg
- Appelsin
- Fokus: Vedlikeholde energinivå

**Lett lunsj (kl. 11:30, 2,5 timer før kamp):**
- Pasta med litt kylling og tomatsaus
- Lite fett og fiber
- Fokus: Fylle opp glykogenlagrene uten å bli tung i magen

**Siste påfyll (kl. 13:30, 30 min før oppvarming):**
- Banan eller energibar
- Fokus: Rask energi uten mageproblemer

**Resultat:**
Lars går inn i kampen med fulle energilagre, uten å føle seg tung eller oppblåst.`,
    },
    {
      id: 'kroppsoving-vg1-3-4-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-4-ex2',
        number: '2',
        type: 'classic',
        task: 'Du skal trene hard styrketrening kl. 17:00. Planlegg hva du spiser gjennom dagen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva spiser du til frokost (kl. 07:30)?',
            solution: 'Frokost: Havregrøt med melk, banan og bær. 1 egg. 1 glass juice. Fokus: Balansert måltid med karbohydrater for energi og protein for vedlikehold.',
          },
          {
            label: 'b',
            task: 'Hva spiser du til lunsj (kl. 11:30)?',
            solution: 'Lunsj: 3-4 brødskiver (helst grovt) med ost, pålegg eller egg. Grønnsaker. Yoghurt. Fokus: Karbohydrater og protein som holder energien oppe til trening.',
          },
          {
            label: 'c',
            task: 'Hva spiser du 1-2 timer før trening (kl. 15:00-16:00)?',
            solution: 'Mellommåltid: Banan, yoghurt med müsli, eller smoothie. Fokus: Lett fordøyelig mat som ikke ligger tungt i magen, men gir energi til økten.',
          },
          {
            label: 'd',
            task: 'Hva spiser/drikker du rett etter trening (kl. 18:30)?',
            solution: 'Restitusjons-måltid: Sjokolademelk og banan, eller proteinshake. Følg opp med ordentlig middag (kylling/fisk med ris/poteter og grønnsaker) innen 1-2 timer. Fokus: Protein (20-40g) og karbohydrater (60-100g avhengig av kroppsvekt) for optimal restitusjon.',
          },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-3-4-text3',
      type: 'text',
      content: `## Under trening - påfyll underveis

For de fleste treningsøkter under 60-90 minutter trenger du ikke mat eller energi underveis - kun væske.

**Ved aktivitet over 90 minutter:**
Kroppen bruker ca. 30-60 gram karbohydrater per time under intens aktivitet. Etter 90 minutter begynner glykogenlagrene å tømmes.

**Hva kan du spise/drikke underveis:**
- **Sportsdrikk** med 6-8% karbohydrater
- **Energigels** (ca. 20-25g karbohydrater per gel)
- **Energibarer** (enkle å spise, 20-40g karbohydrater)
- **Banan** (naturlig alternativ, ca. 25g karbohydrater)
- **Rosiner eller dadler** (konsentrert energi)

**Anbefalinger:**
- Start inntak etter 45-60 minutter
- Sikt på 30-60 gram karbohydrater per time
- Test ut i trening - ALDRI prøv nytt i konkurranse
- Kombiner gjerne med væske

**Når er det nødvendig:**
- Løp/sykling over 90 minutter
- Fotball-/håndballkamper (bruk pausen)
- Langvarig utholdenhetsaktivitet
- Hele treningsdager

**Når er det IKKE nødvendig:**
- Styrketrening (60-90 min)
- Fotballtrening (60-90 min)
- Kortere løpe-/sykkel-turer`,
    },
    {
      id: 'kroppsoving-vg1-3-4-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-4-ex4',
        number: '3',
        type: 'classic',
        task: 'Når er det nødvendig å spise eller drikke energi UNDER trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig påstand',
            solution: 'Ved aktivitet over 90 minutter',
            multipleChoiceOptions: [
              'Ved all type trening',
              'Ved styrketrening',
              'Ved aktivitet over 90 minutter',
              'Aldri nødvendig',
            ],
          },
          {
            label: 'b',
            task: 'Hvor mye karbohydrater bør man sikte på per time ved langvarig aktivitet?',
            solution: '30-60 gram karbohydrater per time. Dette kan dekkes med sportsdrikk, energigeler, banan eller energibarer.',
          },
          {
            label: 'c',
            task: 'Hvorfor er det ikke nødvendig ved kortere aktivitet (<90 min)?',
            solution: 'Ved aktivitet under 90 minutter har kroppen nok glykogen (energilagre) i musklene og leveren til å fullføre økten uten ekstra tilførsel, forutsatt at du har spist normalt før trening. Det holder med væske (vann) underveis.',
          },
        ],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-4-def2',
      type: 'definition',
      title: 'Det anabole vinduet',
      content: 'Det anabole vinduet er perioden etter trening (spesielt de første 30-60 minuttene) der kroppen er ekstra mottakelig for næringsstoffer. Musklene tar opp protein og karbohydrater mer effektivt, noe som gir bedre restitusjon og muskelvekst. Nyere forskning viser at vinduet er litt lengre (2-3 timer) enn tidligere antatt, men det er fortsatt smart å spise relativt raskt etter trening.',
    },
    {
      id: 'kroppsoving-vg1-3-4-text4',
      type: 'text',
      content: `## Etter trening - restitusjons-måltid

Hva du spiser etter trening er avgjørende for restitusjon:

**Mål etter trening:**
1. **Gjenoppbygge muskelvev** (protein)
2. **Fylle opp glykogenlagrene** (karbohydrater)
3. **Rehydrere** (væske og elektrolytter)
4. **Redusere betennelse** (antioksidanter)

**Ideelt restitusjons-måltid innen 30-60 minutter:**

**Karbohydrater:**
- 1-1,5 gram per kg kroppsvekt
- Person på 70 kg: 70-105 gram karbohydrater
- Høy GI karbohydrater er OK nå (rask opptak)
- Eksempler: Ris, pasta, poteter, frukt, juice

**Protein:**
- 20-40 gram høykvalitets protein
- Inneholder alle essensielle aminosyrer
- Eksempler: Kylling, fisk, egg, melkeprodukter, proteinshake

**Fett:**
- Lite til moderat mengde (forsinker ikke opptak vesentlig)
- Fokus på sunt fett

**Væske:**
- 150% av væsketapet
- Vann eller melk (melk gir også næring)

**Praktiske restitusjons-måltider:**
- Proteinshake med banan
- Sjokolademelk (dokumentert god restitusjons-drikk!)
- Kylling/laks med ris/pasta og grønnsaker
- Omelett med brød
- Yoghurt med müsli og frukt
- Tunfiskwrap med ris`,
    },
    {
      id: 'kroppsoving-vg1-3-4-example2',
      type: 'example',
      title: 'Restitusjons-måltid etter hard styrkeøkt',
      problem: 'Emma (60 kg) har akkurat gjennomført en hard styrkeøkt. Lag et restitusjons-måltid.',
      solution: `Emma veier 60 kg. Hun trenger:
- Protein: 20-30 gram
- Karbohydrater: 60-90 gram
- Væske: minst 500 ml

**Alternativ 1 - Raskt og enkelt:**
- 500 ml sjokolademelk (16g protein, 50g karb)
- 1 banan (25g karb)
- Totalt: 16g protein, 75g karb, 500 ml væske
- Kommentar: Dekker det akutte behovet, men bør følges av ordentlig måltid innen 1-2 timer

**Alternativ 2 - Fullverdig måltid:**
- 120g kyllingbryst (30g protein)
- 200g kokte poteter (40g karb)
- Grønnsaker (brokkoli, gulrot)
- 1 eple (15g karb)
- 1 glass melk (8g protein, 12g karb)
- Totalt: 38g protein, 67g karb
- Kommentar: Komplett måltid som dekker alle behov

**Alternativ 3 - Vegetar:**
- Omelett med 3 egg (18g protein)
- 3 brødskiver med brunost (15g protein, 60g karb)
- 1 glass juice (20g karb)
- Totalt: 33g protein, 80g karb
- Kommentar: God kombinasjon av protein fra egg og karbohydrater fra brød`,
    },
    {
      id: 'kroppsoving-vg1-3-4-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-4-ex3',
        number: '4',
        type: 'classic',
        task: 'Hva er det anabole vinduet, og hvorfor er det viktig?',
        solution: 'Det anabole vinduet er perioden etter trening, spesielt de første 30-60 minuttene (men opptil 2-3 timer), der kroppen er ekstra mottakelig for næringsstoffer. I denne perioden tar musklene opp protein og karbohydrater mer effektivt enn til andre tider på døgnet. Dette er viktig fordi inntak av riktig næring i det anabole vinduet gir: 1) Bedre og raskere muskelvekst ved å starte reparasjon av muskelvev, 2) Mer effektiv påfylling av glykogenlagrene (energilagrene), og 3) Redusert muskelskade og raskere restitusjon. For å utnytte vinduet bør man spise 20-40 gram protein og 1-1,5 gram karbohydrater per kg kroppsvekt innen 30-60 minutter etter trening.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-4-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-4-ex6',
        number: '5',
        type: 'classic',
        task: 'En idrettsutøver på 65 kg har akkurat avsluttet en hard treningsøkt. Hvor mye protein og karbohydrater trenger vedkommende i restitusjons-måltidet?',
        solution: 'For optimal restitusjon trenger idrettsutøveren: Protein: 20-40 gram (20-30g er nok for de fleste). Karbohydrater: 1-1,5 gram per kg kroppsvekt = 65-98 gram (si 65-100g). Eksempel på restitusjons-måltid: Sjokolademelk 500 ml (16g protein, 50g karb) + 1 banan (25g karb) = 16g protein og 75g karb. Dette dekker det akutte behovet. Alternativt: Ordentlig måltid med 150g kylling (30g protein) + 200g ris (50g karb) + grønnsaker + 1 glass melk (8g protein, 12g karb) = 38g protein og 62g karb. Måltidet bør inntas innen 30-60 minutter etter trening for å utnytte det anabole vinduet optimalt.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-4-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-4-ex7',
        number: '6',
        type: 'classic',
        task: 'Lag tre ulike restitusjons-måltider som inneholder både protein og karbohydrater.',
        solution: 'Alternativ 1 - Raskt og enkelt: Proteinshake (25g protein) + 1 banan (25g karb) + 1 eple (15g karb). Totalt: 25g protein, 40g karb. Godt for når du er på farten.\n\nAlternativ 2 - Fullverdig måltid: Laks 150g (30g protein) + søtpoteter 200g (40g karb) + brokkoli + 1 glass melk (8g protein, 12g karb). Totalt: 38g protein, 52g karb. Næringsrikt og mettende.\n\nAlternativ 3 - Vegetar: Omelett med 3 egg (18g protein) + 3 brødskiver (45g karb) + cottage cheese 100g (12g protein) + 1 glass juice (20g karb). Totalt: 30g protein, 65g karb. Godt for vegetarianere.\n\nAlle tre alternativene gir god balanse mellom protein (20-40g) og karbohydrater (40-65g) for optimal restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-3-4-def3',
      type: 'definition',
      title: 'Karbohydratlading (carb loading)',
      content: 'Karbohydratlading er en strategi for å maksimalt fylle opp kroppens glykogenlagre før langvarig utholdenhetskonstante (>90 minutter). Dette gjøres ved å redusere treningsbelastningen og øke karbohydratinntaket de siste 2-3 dagene før konkurranse. Kan forbedre prestasjonen ved å utsette utmattelse.',
    },
    {
      id: 'kroppsoving-vg1-3-4-text5',
      type: 'text',
      content: `## Karbohydratlading

Karbohydratlading brukes av utholdenhetsutøvere før lange konkurranser:

**Tradisjonell metode (7 dager):**
**Dag 1-3:** Tøm lagrene
- Hard utholdenhets-trening
- Lavt karbohydratinntak (10-20% av energi)

**Dag 4-6:** Last opp
- Lett trening eller hvile
- Høyt karbohydratinntak (70-80% av energi)
- Lagrene "superkompenserer"

**Dag 7:** Konkurranse
- Fulle glykogenlagre
- Kan prestere lenger før utmattelse

**Moderne metode (2-3 dager):**
Nyere forskning viser at tømming ikke er nødvendig:
- **3 dager før**: Reduser treningsmengden til minimum
- **2-3 dager før**: Øk karbohydratinntaket til 8-10 gram per kg kroppsvekt
- **Konkurransedag**: Moderat karbohydratrikt frokost 2-4 timer før

Person på 70 kg: 560-700 gram karbohydrater per dag i ladings-perioden!

**Eksempel på lading-dag:**
- Frokost: Havregrøt, juice, toast med syltetøy
- Mellommåltid: Frukt, smoothie, muffins
- Lunsj: Pasta, ris, brød
- Mellommåltid: Energibar, banan
- Middag: Pasta med tomatsaus (lite protein/fett)
- Kvelds: Yoghurt, müsli, frukt

**Når er karbohydratlading nyttig:**
- Maratonløp
- Langdistanse sykling (>2 timer)
- Lange skirenn
- Triatlon
- Svært lange fotball-/håndballturnering (flere kamper på kort tid)

**Når er det IKKE nødvendig:**
- Sprint/styrke-idretter
- Aktiviteter under 90 minutter
- Regelmessig trening (ikke konkurranse)`,
    },
    {
      id: 'kroppsoving-vg1-3-4-tip1',
      type: 'tip',
      title: 'Praktiske tips for kosthold rundt trening',
      content: `1. **Test i trening**: Aldri prøv nye matvarer/strategier på konkurransedag
2. **Lytt til magen**: Hvis noe gir ubehag, prøv noe annet
3. **Planlegg**: Ha mat klar for etter trening (når du er sliten glemmer du det)
4. **Sjokolademelk fungerer**: Enkel, billig og dokumentert god restitusjons-drikk
5. **Meal prep**: Forbered måltider for hektiske dager
6. **Portabel mat**: Ha med nøtter, frukt, bar hvis du er mye på farten
7. **Ikke hopp over måltider**: Spesielt ikke frokost
8. **Fokus på kvalitet**: Velg helst naturlige matvarer fremfor kosttilskudd`,
    },
    {
      id: 'kroppsoving-vg1-3-4-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-4-ex5',
        number: '7',
        type: 'classic',
        task: 'Forklar prinsippet bak karbohydratlading. Når er det nyttig, og når er det ikke nødvendig?',
        solution: 'Karbohydratlading er en strategi for å maksimalt fylle kroppens glykogenlagre før langvarig utholdenhetsaktivitet. Den moderne metoden innebærer å redusere treningsbelastningen og øke karbohydratinntaket til 8-10 gram per kg kroppsvekt de siste 2-3 dagene før konkurranse. Dette gjør at glykogenlagrene fylles maksimalt, noe som utsetter utmattelse under langvarig aktivitet. Karbohydratlading er nyttig ved: maratonløp, langdistanse sykling (>2 timer), lange skirenn og triatlon. Det er IKKE nødvendig ved: sprint- og styrke-idretter, aktiviteter under 90 minutter, eller regelmessig trening som ikke er konkurranse. For de fleste treningsøkter holder det med normalt karbohydratinntak.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-3-4-exercise8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-4-ex8',
        number: '8',
        type: 'classic',
        task: 'Hvorfor anbefales sjokolademelk ofte som restitusjons-drikk?',
        solution: 'Sjokolademelk anbefales fordi den har en nesten perfekt sammensetning for restitusjon: 1) Inneholder både protein (ca. 16g per 500ml) og karbohydrater (ca. 50g per 500ml) i et godt forhold (ca. 1:3), 2) Væske som bidrar til rehydrering, 3) Elektrolytter (natrium, kalium, kalsium) fra melken, 4) Lett tilgjengelig og enkelt å konsumere rett etter trening når matlysten kanskje ikke er så stor, 5) Billig og smakfullt, 6) Kaseinprotein og vassleprotein fra melken gir både rask og langvarig aminosyretilførsel. Flere studier har vist at sjokolademelk gir like god eller bedre restitusjon sammenlignet med kommersielle sportsdrikker. Det er derfor et smart, enkelt og billig valg etter trening.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_3_5: TextbookChapter = {
  id: 'kroppsoving-vg1-3-5',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '3.5',
  title: 'Kroppsidealer og kritisk tenkning',
  description: 'Utvikle kritisk blikk på kroppsidealer i media, forstå sammenhenger mellom selvbilde og helse, og gjenkjenne risiko for spiseforstyrrelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'Analysere hvordan media påvirker kroppsidealer',
    'Vurdere sammenhengen mellom selvbilde og helse kritisk',
    'Gjenkjenne tegn på usunne forhold til mat og kropp',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-3-5-intro',
      type: 'text',
      content: `# Kroppsidealer og kritisk tenkning

Vi lever i en tid der vi konstant blir eksponert for bilder av "perfekte" kropper - på sosiale medier, i reklame, i filmer og på TV. Disse bildene kan påvirke hvordan vi ser på oss selv og hva vi mener er "normalt" eller "ideelt". For mange unge kan dette skape press og usikkerhet rundt egen kropp.

Det er viktig å utvikle et kritisk blikk på disse kroppsidealene. Hvem bestemmer hva som er "perfekt"? Hvor realistiske er disse idealene? Og hva er prisen for å jakte på dem? I dette kapittelet skal vi se nærmere på hvordan kroppsidealer utvikler seg, hvordan media påvirker oss, og hvordan et usunt fokus på kropp og utseende kan føre til alvorlige helseproblemer.

Målet er ikke å si at utseende eller trening er uviktig, men å hjelpe deg med å utvikle et sunt og balansert forhold til kroppen din - en kropp som er sterk, frisk og gjør det den skal, uavhengig av hvordan den ser ut.`,
    },
    {
      id: 'kroppsoving-vg1-3-5-def1',
      type: 'definition',
      title: 'Kroppsidealer',
      content: 'Kroppsidealer er forestillingen om hvordan en "ideell" kropp skal se ut, formet av kultur, media, mote og samfunnet rundt oss. Disse idealene varierer over tid og mellom kulturer, og er ofte urealistiske og utilgjengelige for de fleste mennesker. De kan påvirke selvbildet vårt både positivt og negativt.',
    },
    {
      id: 'kroppsoving-vg1-3-5-text2',
      type: 'text',
      content: `## Kroppsidealer gjennom tidene

Kroppsidealer har endret seg dramatisk gjennom historien:

**1900-tallet tidlig:**
- Kvinner: Kurver, runde former ("Gibson Girl")
- Menn: Slank, elegant

**1920-tallet:**
- Kvinner: Smalt, androgyn, "flapper"-stilen
- Menn: Atletisk

**1950-tallet:**
- Kvinner: Timeglass-figur, kurver (Marilyn Monroe)
- Menn: Bred, muskuløs

**1960-70-tallet:**
- Kvinner: Veldig tynn (Twiggy, "heroin chic")
- Menn: Slank, men definert

**1980-90-tallet:**
- Kvinner: Atletisk, fitnes-kropp
- Menn: Svært muskuløs (Arnold Schwarzenegger)

**2000-tallet:**
- Kvinner: Ekstremt tynn, "thigh gap"
- Menn: Veldig lav fettprosent, "six pack"

**2010-2020-tallet:**
- Kvinner: Kurver OG flat mage (urealistisk kombinasjon)
- Menn: Muskuløs MED skjegg og tatoveringer
- Økende fokus på rumpe og hofter

**I dag (2020-tallet):**
- Mer mangfold og "body positivity"
- Men fortsatt mye press fra sosiale medier
- Filtrering og redigering gjør det vanskeligere å vite hva som er ekte

**Hva forteller dette oss?**
At kroppsidealer er **konstruerte**, ikke naturlige eller "riktige". De endrer seg med moten. Det som er "perfekt" i dag, var kanskje ikke ideelt for 20 år siden og vil kanskje ikke være det om 20 år. Derfor gir det liten mening å jakte på et ideal som uansett vil forandre seg.`,
    },
    {
      id: 'kroppsoving-vg1-3-5-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-5-ex1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan kroppsidealer har endret seg gjennom tidene. Hva forteller dette oss?',
        solution: 'Kroppsidealer har endret seg dramatisk gjennom historien. På 1900-tallet var kurver og runde former idealet for kvinner, mens på 1960-70-tallet var ekstremt tynne kropper idealet (som modellen Twiggy). I dag er idealet ofte kurver OG flat mage - en urealistisk kombinasjon. For menn har idealet gått fra slank og elegant, via svært muskuløs, til dagens fokus på lav fettprosent og definerte muskler. Dette forteller oss at kroppsidealer er konstruerte og kulturelt betinget - ikke naturlige eller "riktige". Det som er "perfekt" i dag, var kanskje ikke ideelt for 20 år siden og vil sannsynligvis ikke være det om 20 år. Dette viser at det gir liten mening å jakte på et ideal som uansett vil forandre seg med moten.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-5-def2',
      type: 'definition',
      title: 'Mediekritikk',
      content: 'Mediekritikk er evnen til å analysere og vurdere budskap i media kritisk. Det innebærer å stille spørsmål som: Hvem har laget dette? Hva er hensikten? Er bildene redigert? Hva blir utelatt? Mediekritikk hjelper oss å ikke ta alt vi ser for god fisk, men å forstå at media konstruerer virkeligheter som ofte ikke stemmer med våre liv.',
    },
    {
      id: 'kroppsoving-vg1-3-5-text3',
      type: 'text',
      content: `## Medias påvirkning på selvbilde

Sosiale medier og reklame påvirker hvordan vi ser på oss selv:

**Hvordan påvirker media oss?**

**1. Sosial sammenligning:**
- Vi sammenligner oss konstant med andre
- Vi ser andres "høydepunkter" og sammenligner med vår hverdag
- Fører til følelse av å komme til kort

**2. Filtrerte virkeligheter:**
- 90% av bilder på Instagram er redigert/filtrert
- Perfekt lys, vinkler, crop, filter, FaceTune
- Det vi ser er IKKE virkeligheten

**3. Selektivt utvalg:**
- Folk poster kun sitt beste
- Dårlige dager, usminket, dårlig hår - vises ikke
- Skaper inntrykk av at alle andre har perfekte liv

**4. Kommersielle interesser:**
- Reklame vil at du skal føle deg utilstrekkelig
- "Kjøp dette produktet så blir du som henne"
- Profitt på usikkerhet

**5. Algoritmer forsterker:**
- Jo mer du ser på fitnes/kropps-innhold, jo mer viser algoritmen deg
- Kan skape ekkokammer av kroppspress

**Konsekvenser:**
- Lavere selvtillit og selvfølelse
- Kroppsmissnøye
- Angst og depresjon
- Usunne kostholdsvaner
- Overdreven trening
- Spiseforstyrrelser

**Forskning viser:**
- Unge som bruker >3 timer daglig på sosiale medier har dobbelt så høy risiko for dårlig mental helse
- 90% av jenter er misfornøyde med kroppen sin
- 50% av gutter ønsker mer muskler`,
    },
    {
      id: 'kroppsoving-vg1-3-5-example1',
      type: 'example',
      title: 'Kritisk analyse av influencer-bilde',
      problem: 'Du ser et bilde på Instagram av en fitnes-influencer med perfekt kropp på stranden. Analyser bildet kritisk.',
      solution: `**Spørsmål å stille:**

**1. Hva ser jeg?**
- Tonet kropp, flat mage, definerte muskler
- Perfekt lys (solnedgang)
- Strand, vakker bakgrunn

**2. Hva ser jeg IKKE?**
- De 200 andre bildene som ble tatt
- Alle dårlige vinkler
- Dårlige dager
- Hvordan personen ser ut normalt

**3. Er bildet redigert?**
- Sannsynligvis: lys, kontrast, filter
- Mulig: kroppsredigering (smalere midje, større rumpe)
- Umulig å vite hva som er ekte

**4. Hva er hensikten?**
- Likes og følgere
- Selge produkter (treningsprogram, kosttilskudd)
- Bygge merkevare

**5. Hvem er dette mennesket?**
- Ofte betalt for å se slik ut (jobb)
- Dedikerer livet sitt til trening og kosthold
- Kan ha genetiske fordeler
- Kan bruke ulovlige hjelpemidler

**Konklusjon:**
Dette bildet representerer et øyeblikk, under perfekte forhold, sannsynligvis redigert, av en person hvis jobb er å se slik ut. Det er IKKE realistisk eller relevant for mitt liv. Jeg kan være stolt av min kropp som den er, og trene fordi det er gøy og sunt - ikke for å se ut som dette bildet.`,
    },
    {
      id: 'kroppsoving-vg1-3-5-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-5-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvordan påvirker sosiale medier selvbildet vårt? Nevn minst tre mekanismer.',
        solution: 'Sosiale medier påvirker selvbildet på flere måter: 1) Sosial sammenligning - Vi sammenligner oss konstant med andres "perfekte" liv og kropper, og føler at vi kommer til kort. Vi ser andres høydepunkter og sammenligner med vår hverdag. 2) Filtrerte virkeligheter - 90% av bilder er redigert med filter, perfekt lys og vinkler. Vi sammenligner oss med urealistiske, konstruerte bilder og tror det er slik folk faktisk ser ut. 3) Algoritmer som forsterker - Jo mer vi ser på kropps- og fitnesinnhold, jo mer viser algoritmen oss slikt innhold, noe som skaper et ekkokammer av kroppspress. 4) Kommersielle interesser - Reklame vil at vi skal føle oss utilstrekkelige slik at vi kjøper produkter. Konsekvensene inkluderer lavere selvtillit, kroppsmissnøye, angst, depresjon og i verste fall spiseforstyrrelser.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-5-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-5-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er mediekritikk, og hvordan kan det hjelpe oss å forholde oss til kroppsidealer?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer mediekritikk',
            solution: 'Mediekritikk er evnen til å analysere og vurdere budskap i media kritisk. Det innebærer å stille spørsmål som: Hvem har laget dette? Hva er hensikten? Er bildene redigert? Hva blir utelatt?',
          },
          {
            label: 'b',
            task: 'Nevn tre spørsmål du kan stille når du ser et "perfekt" bilde på sosiale medier',
            solution: '1) Er bildet redigert eller filtrert? 2) Hva er hensikten med bildet - selge noe eller få likes? 3) Hva ser jeg IKKE - hvor mange andre bilder ble tatt, og hvordan ser personen ut til vanlig?',
          },
          {
            label: 'c',
            task: 'Hvordan kan mediekritikk beskytte selvbildet ditt?',
            solution: 'Mediekritikk hjelper oss å forstå at bildene vi ser ofte er urealistiske, konstruerte og kommersielle. Når vi innser at bilder er redigert og at vi ser kun høydepunktene fra andres liv, slutter vi å sammenligne vår hverdag med en illusjon. Dette reduserer følelsen av utilstrekkelighet og beskytter selvbildet vårt.',
          },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-5-def3',
      type: 'definition',
      title: 'Spiseforstyrrelser',
      content: 'Spiseforstyrrelser er alvorlige psykiske lidelser kjennetegnet av unormale spisevaner og ofte intens bekymring for vekt og kroppsform. De vanligste er anoreksi (sulting), bulimi (overspising + oppkast/rensing) og overspisingslidelse. Spiseforstyrrelser kan være livstruende og krever profesjonell hjelp.',
    },
    {
      id: 'kroppsoving-vg1-3-5-text4',
      type: 'text',
      content: `## Spiseforstyrrelser

Spiseforstyrrelser er alvorlige tilstander som ofte starter med "uskyldige" dietter:

**Hovedtyper:**

**Anoreksi (Anorexia nervosa):**
- Ekstrem redsel for vektøkning
- Betydelig undervekt (BMI < 17,5)
- Forvrengt kroppsbilde (ser seg selv som tykk selv om veldig tynn)
- Nekter å spise nok mat
- Ekstrem trening
- Tap av menstruasjon hos jenter
- **Konsekvenser:** Organsvikt, benskjørhet, hjerteproblemer, død

**Bulimi (Bulimia nervosa):**
- Overspising (binge) følgt av rensing
- Rensing: oppkast, laksering, ekstrem trening
- Normal vekt, men store svingninger
- Skam og hemmeligholdelse
- **Konsekvenser:** Tannødeleggelse, spiserørsskader, hjertearytmi, elektrolyttforstyrrelser

**Overspisingslidelse (BED - Binge Eating Disorder):**
- Hyppige episoder med overspisning
- Tap av kontroll under spisingen
- Spiser raskt, til ubehag, alene
- Ingen rensing etterpå
- Skam og depresjon
- **Konsekvenser:** Overvekt, diabetes, hjertesykdom, psykiske plager

**Ortorexia (ikke offisiell diagnose ennå):**
- Besettelse av "sunn" mat
- Ekstremt rigide regler
- Sosial isolasjon (vil ikke spise med andre)
- Angst ved "usunn" mat
- Kan føre til undernæring

**Alarmsignaler:**
- Stadig snakk om vekt, kalorier, mat
- Unngår måltider eller spiser alene
- Går på do rett etter måltider
- Ekstrem trening (kan ikke ta hviledager)
- Store vektendringer
- Trekker seg fra venner
- Dårlig humør, depresjon, angst
- Frysing (kroppen sparer energi)
- Konsentrasjonsproblemer

**Viktig:**
Spiseforstyrrelser er IKKE om vilje eller vanitet. De er alvorlige psykiske lidelser som krever profesjonell behandling. Jo tidligere man får hjelp, desto bedre er prognosen.`,
    },
    {
      id: 'kroppsoving-vg1-3-5-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-5-ex5',
        number: '4',
        type: 'classic',
        task: 'Hva er spiseforstyrrelser? Beskriv kort to hovedtyper.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner anoreksi?',
            solution: 'Anoreksi kjennetegnes av ekstrem redsel for vektøkning, betydelig undervekt (BMI <17,5), forvrengt kroppsbilde der man ser seg selv som tykk selv om man er veldig tynn, nekter å spise nok mat, og ekstrem trening. Konsekvenser kan være organsvikt, benskjørhet, hjerteproblemer og død.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner bulimi?',
            solution: 'Bulimi kjennetegnes av overspising (binge) følgt av rensing gjennom oppkast, laksering eller ekstrem trening. Personer med bulimi har ofte normal vekt men store svingninger, og tilstanden preges av skam og hemmeligholdelse. Konsekvenser inkluderer tannødeleggelse, spiserørsskader, hjertearytmi og elektrolyttforstyrrelser.',
          },
          {
            label: 'c',
            task: 'Hvorfor er det viktig å få hjelp tidlig?',
            solution: 'Spiseforstyrrelser er alvorlige psykiske lidelser som kan være livstruende. Jo tidligere man får profesjonell behandling, desto bedre er prognosen for full bedring. Spiseforstyrrelser handler ikke om vilje eller vanitet, men er komplekse tilstander som krever faglig hjelp.',
          },
        ],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-5-tip1',
      type: 'tip',
      title: 'Hvordan få et sunnere forhold til kroppen',
      content: `1. **Følg mangfoldige kontoer**: Unngå bare "perfekte" kropper
2. **Rydd i feeden**: Slutt å følge kontoer som får deg til å føle deg dårlig
3. **Begrens skjermtid**: Spesielt sammenligning-apper som Instagram
4. **Fokuser på funksjon**: Hva kan kroppen din? Ikke bare hvordan ser den ut
5. **Snakk positivt**: Om egen og andres kropper
6. **Husk at bilder lyver**: Filter og redigering er normen
7. **Finn andre identitetsmarkører**: Du er mer enn kroppen din
8. **Vær en god venn**: Til deg selv - ville du snakket slik til en venn?
9. **Søk hjelp tidlig**: Hvis du sliter med mat/kropp, snakk med noen
10. **Feir mangfold**: Sterke, friske kropper kommer i alle størrelser`,
    },
    {
      id: 'kroppsoving-vg1-3-5-text5',
      type: 'text',
      content: `## Sunt vs. usunt kroppsforhold

Det er en stor forskjell på å ville være i god form og å ha et usunt forhold til kroppen:

**SUNT forhold til trening og mat:**
- Trener fordi det føles godt og er sunt
- Kan ta hviledager uten angst
- Spiser variert og balansert
- Nyter godteri av og til uten skyldfølelse
- Sosialt liv påvirkes ikke av trening/mat
- Selvfølelse baseres ikke på vekt/utseende
- Aksepterer kroppen som den er
- Fokuserer på prestasjon og helse

**USUNT forhold til trening og mat:**
- Trener av plikt/skyld/tvang
- Får angst av å ta hvile
- Rigide matregler, eliminerer matgrupper
- Massiv skyld ved "usunn" mat
- Prioriterer trening foran venner/familie
- Selvfølelse avhenger av vekt/utseende
- Konstant misnøye med kroppen
- Fokuserer kun på utseende

**Røde flagg:**
- Veier deg flere ganger daglig
- Teller kalorier tvangsmessig
- Veier/måler all mat
- Trener selv når syk/skadet
- Ekskluderer deg fra sosiale situasjoner pga. mat
- Konstant trøtt/kald/irritabel
- Tanker om mat/kropp dominerer dagen din

**Husk:**
Kroppen din er ditt hjem livet ut. Behandle den med respekt og omsorg, ikke som en fiende som skal kontrolleres.`,
    },
    {
      id: 'kroppsoving-vg1-3-5-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-5-ex4',
        number: '5',
        type: 'classic',
        task: 'Beskriv forskjellen mellom et sunt og et usunt forhold til trening og mat.',
        solution: 'Et SUNT forhold til trening og mat kjennetegnes ved at man trener fordi det føles godt og er sunt, ikke av plikt eller skyld. Man kan ta hviledager uten angst, spiser variert og balansert, og nyter godteri av og til uten skyldfølelse. Sosiallivet påvirkes ikke av trening eller matregler, og selvfølelsen er ikke avhengig av vekt eller utseende. Man aksepterer kroppen som den er og fokuserer på prestasjon og helse. Et USUNT forhold derimot er preget av at man trener av tvang og får angst ved hvile. Man har rigide matregler, føler massiv skyld ved "usunn" mat, prioriterer trening foran venner og familie, og selvfølelsen avhenger helt av vekt og utseende. Man er konstant misfornøyd med kroppen og fokuserer kun på utseende. Røde flagg inkluderer å veie seg flere ganger daglig, telle kalorier tvangsmessig, trene selv når syk, og at tanker om mat og kropp dominerer dagen.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-5-def4',
      type: 'definition',
      title: 'Body positivity',
      content: 'Body positivity er en bevegelse som fremmer aksept og verdsetting av alle kroppstyper, uavhengig av størrelse, form, hudfarge eller funksjonsevne. Målet er å utfordre urealistiske skjønnhetsstandarder og fremme selvaksept. Kritikere mener bevegelsen kan romantisere usunne livsstiler, mens forkjempere mener den handler om menneskerettigheter og mental helse.',
    },
    {
      id: 'kroppsoving-vg1-3-5-text6',
      type: 'text',
      content: `## Body positivity og kroppsaksept

Body positivity-bevegelsen har både positive og kritiske sider:

**Positive aspekter:**
- Utfordrer urealistiske kroppsidealer
- Fremmer mangfold og inkludering
- Reduserer skam og stigma
- Fokuserer på helse, ikke bare utseende
- Gir stemme til underrepresenterte kropper

**Kritiske aspekter:**
- Kan romantisere usunne livsstiler (begge ytterpunkter)
- "Alle kropper er vakre" - men er ikke vakkerhet poenget?
- Kan skape nytt press om å "elske kroppen sin"
- Kommersielt kapret av merkevarer

**Body neutrality - et alternativ:**
I stedet for å fokusere på å elske kroppen, handler body neutrality om å:
- Akseptere kroppen som den er
- Fokusere på funksjon fremfor utseende
- Ikke gi kroppen så mye tankerom
- "Min kropp er min kropp, og det er greit"

**Praktisk tilnærming:**
- **Respekt**: Behandle kroppen din med omsorg
- **Funksjon**: Fokuser på hva den kan, ikke hvordan den ser ut
- **Helse**: Prioriter velvære fremfor utseende
- **Aksept**: Du trenger ikke elske alt, men bekjemp ikke kroppen din heller
- **Perspektiv**: Kroppen er en del av deg, men ikke hele deg

**Viktig balanse:**
- Ja til å ta vare på helsen
- Ja til å trene og spise sunt
- Nei til å la utseende styre livet
- Nei til å skamme seg selv eller andre`,
    },
    {
      id: 'kroppsoving-vg1-3-5-example2',
      type: 'example',
      title: 'Støtte en venn som strever',
      problem: 'Din venn har begynt å hoppe over lunsj, trener ekstremt mye, og snakker konstant om kalorier. Hva gjør du?',
      solution: `**Steg 1: Observer og bekreft bekymringen**
"Jeg har lagt merke til at du hopper over lunsj ofte, og du snakker mye om kalorier. Jeg er bekymret for deg."

**Steg 2: Lytt uten å dømme**
"Hvordan har du det egentlig? Jeg vil gjerne høre."
- La personen snakke
- Ikke avbryt eller bagatelliser
- Vis empati

**Steg 3: Uttrykk bekymring konkret**
"Det virker som om mat og trening tar mye plass i livet ditt nå. Jeg savner å henge med deg uten at det styres av treningsplaner."

**Steg 4: Tilby støtte**
"Jeg er her for deg. Har du vurdert å snakke med noen om dette? Kanskje helsesykepleier på skolen?"

**Steg 5: Involver voksne hvis nødvendig**
Hvis situasjonen er alvorlig (betydelig vekttap, besvimelser, selvskading):
- Snakk med foreldre, lærer, helsesykepleier
- Dette er IKKE sladring - det kan redde liv

**Hva du IKKE skal si:**
- "Bare spis da!"
- "Du ser fin ut"
- "Det er ikke så farlig"
- "Jeg skulle ønske jeg hadde din disiplin"

**Husk:**
Du er ikke terapeut. Din rolle er å være en støttende venn og hjelpe personen til profesjonell hjelp hvis nødvendig.`,
    },
    {
      id: 'kroppsoving-vg1-3-5-tip2',
      type: 'tip',
      title: 'Hvor få hjelp',
      content: `Hvis du eller noen du kjenner strever med spiseforstyrrelser eller kroppspress:

**Anonyme lavterskeltilbud:**
- Røde Kors Hjelpetelefonen: 800 33 321
- Mental Helse Hjelpetelefonen: 116 123
- Kors på halsen (chat): korspaahalsen.rodekors.no

**På skolen:**
- Helsesykepleier
- Rådgiver
- Tillitslærer

**Helsevesen:**
- Fastlege
- BUP (Barne- og ungdomspsykiatri)

**Online ressurser:**
- NASP (Nasjonalt kompetansesenter for sped- og småbarns psykiske helse)
- ROS (Ressurssenter for spiseforstyrrelser)

Husk: Det er ALDRI for tidlig å søke hjelp, men det kan bli for sent.

*Viktig: Informasjonen her er ment som generell veiledning og erstatter ikke profesjonell hjelp. Ved mistanke om spiseforstyrrelser eller andre psykiske helseplager, kontakt alltid kvalifisert helsepersonell.*`,
    },
    {
      id: 'kroppsoving-vg1-3-5-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-5-ex6',
        number: '6',
        type: 'classic',
        task: 'En venn begynner å hoppe over måltider, trener ekstremt mye og snakker konstant om kalorier. Hvordan kan du støtte vedkommende?',
        solution: 'Først bør du uttrykke bekymring konkret og direkte: "Jeg har lagt merke til at du hopper over lunsj ofte og snakker mye om kalorier. Jeg er bekymret for deg." Deretter lytt uten å dømme, la personen snakke, og vis empati. Uttrykk hvordan du ser endringen: "Det virker som om mat og trening tar mye plass i livet ditt nå." Tilby støtte: "Jeg er her for deg. Har du vurdert å snakke med noen om dette? Kanskje helsesykepleier på skolen?" Hvis situasjonen er alvorlig (betydelig vekttap, besvimelser), må du involvere voksne som foreldre, lærer eller helsesykepleier. Dette er ikke sladring - det kan redde liv. IKKE si ting som "Bare spis da!", "Du ser fin ut" eller "Det er ikke så farlig." Husk at din rolle ikke er å være terapeut, men en støttende venn som hjelper personen til profesjonell hjelp.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-3-5-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-5-ex7',
        number: '7',
        type: 'classic',
        task: 'Hva er body positivity? Diskuter både positive aspekter og mulige kritiske sider ved bevegelsen.',
        solution: 'Body positivity er en bevegelse som fremmer aksept og verdsetting av alle kroppstyper, uavhengig av størrelse, form eller utseende. Positive aspekter inkluderer at den utfordrer urealistiske kroppsidealer, fremmer mangfold og inkludering, reduserer skam og stigma, og gir stemme til underrepresenterte kropper. Kritiske aspekter er at bevegelsen kan romantisere usunne livsstiler i begge ytterpunkter (både under- og overvekt), at fokuset på "alle kropper er vakre" kanskje fortsatt gjør vakkerhet til det viktigste, og at den kan skape nytt press om å "elske kroppen sin". Et alternativ er body neutrality, som handler om å akseptere kroppen som den er og fokusere på funksjon fremfor utseende, uten å gi kroppen så mye tankerom. En balansert tilnærming innebærer å ta vare på helsen og trene/spise sunt, uten å la utseende styre livet eller skamme seg selv eller andre.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-5-exercise8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-5-ex8',
        number: '8',
        type: 'classic',
        task: 'Lag en liste med fem konkrete tiltak du kan ta for å utvikle et sunnere forhold til din egen kropp og sosiale medier.',
        solution: 'Eksempel på fem konkrete tiltak: 1) Rydd i feeden: Slutt å følge kontoer som får deg til å føle deg dårlig eller utilstrekkelig. Følg i stedet kontoer med mangfoldige kropper og realistisk innhold. 2) Begrens skjermtid: Sett en tidsbegrensning på sosiale medier-apper, spesielt Instagram og TikTok. Maks 1-2 timer daglig. 3) Fokuser på funksjon, ikke form: Skriv en liste over hva kroppen din KAN gjøre (løpe, hoppe, klemme venner) i stedet for hvordan den ser ut. 4) Snakk positivt om egen og andres kropper: Unngå negative kommentarer om utseende. Gi heller komplimenter om styrke, ferdigheter og personlighet. 5) Ha et kritisk blikk: Hver gang du ser et "perfekt" bilde, spør deg selv: Er dette redigert? Hva er hensikten? Hva ser jeg IKKE? Dette hjelper deg å ikke ta alt for god fisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_3_6: TextbookChapter = {
  id: 'kroppsoving-vg1-3-6',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '3.6',
  title: 'Kosttilskudd og energidrikker',
  description: 'Vurder kosttilskudd og energidrikker kritisk - lær om dokumenterte effekter, risiko og dopingfeller.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Vurdere behov for og effekt av kosttilskudd kritisk',
    'Forklare risiko ved energidrikker og ulovlige substanser',
    'Gjenkjenne dopingfeller i kosttilskudd',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-3-6-intro',
      type: 'text',
      content: `# Kosttilskudd og energidrikker

Markedet for kosttilskudd og prestasjonsfremmende produkter er enormt. Hver dag blir vi bombardert med reklame for proteinpulver, kreatin, BCAAs, fettforbrennere, energidrikker og utallige andre produkter som lover resultater. Men hva virker egentlig? Hva er trygt? Og hva er helt unødvendig eller til og med farlig?

For de aller fleste unge, aktive mennesker er et balansert kosthold helt tilstrekkelig for å prestere godt og være friske. Kosttilskudd er ikke magiske løsninger, og de kan aldri erstatte et godt grunnkosthold. Dessuten er mange produkter i beste fall ineffektive og i verste fall farlige eller dopingklassifiserte.

I dette kapittelet skal vi se kritisk på kosttilskudd, energidrikker og andre produkter. Vi skal lære å skille mellom dokumenterte effekter og markedsføring, forstå risiko, og være bevisst dopingfeller som kan ødelegge karrieren din.`,
    },
    {
      id: 'kroppsoving-vg1-3-6-def1',
      type: 'definition',
      title: 'Kosttilskudd',
      content: 'Kosttilskudd er produkter som inneholder næringsstoffer (vitaminer, mineraler, protein, fettsyrer, etc.) i konsentrert form. De er ment å supplere, ikke erstatte, et normalt kosthold. Kosttilskudd er IKKE legemidler og gjennomgår ikke samme strenge testing før de kan selges.',
    },
    {
      id: 'kroppsoving-vg1-3-6-text2',
      type: 'text',
      content: `## Kosttilskudd - hype vs. virkelighet

**Viktig grunnprinsipp:**
Kosttilskudd heter kosttilskudd av en grunn - de skal supplere kosten, ikke erstatte den. For 95% av unge idrettsutøvere er et balansert kosthold tilstrekkelig.

**Når er kosttilskudd relevante?**
- **Dokumentert mangel**: F.eks. lav D-vitamin (vanlig i Norge)
- **Vegansk kosthold**: B12, jern, evt. kreatin
- **Spesifikke medisinske tilstander**: Etter leges anbefaling
- **Praktiske grunner**: Proteinshake etter trening når man ikke får i seg mat

**Når er kosttilskudd IKKE nødvendige?**
- Når du spiser variert og balansert
- For å kompensere for dårlig kosthold
- Som "forsikring" uten dokumentert behov
- Fordi treneren eller lagkameraten bruker det

**Kosttilskudd som HAR dokumentert effekt:**

**1. Vitamin D (vinter)**
- **Effekt**: Benhelse, immunforsvar
- **Anbefaling**: 10-20 μg daglig oktober-mars
- **Hvorfor**: Lite sollys i Norge om vinteren
- **Trygt**: Ja, i anbefalte doser

**2. Kreatin**
- **Effekt**: Økt styrke og muskelmasse ved styrketrening
- **Anbefaling**: 3-5g daglig
- **Hvorfor**: Øker energitilgjengelighet i musklene
- **Trygt**: Ja, godt dokumentert

**3. Koffein**
- **Effekt**: Økt årvåkenhet, redusert opplevd anstrengelse
- **Anbefaling**: 3-6 mg per kg kroppsvekt før prestasjon
- **Hvorfor**: Stimulerer sentralnervesystemet
- **Trygt**: Ja, i moderate doser (vær oppmerksom på toleranse)

**4. Protein (etter trening)**
- **Effekt**: Fremmer muskeloppbygging og restitusjon
- **Anbefaling**: 20-40g etter styrketrening
- **Hvorfor**: Praktisk når man ikke får i seg mat
- **Trygt**: Ja, men mat fungerer like godt

**Kosttilskudd som IKKE har dokumentert effekt:**
- De aller fleste fettforbrennere
- BCAA (hvis du får nok protein fra maten)
- Glukosamin (for ledd)
- Antioxidant-megadoser
- De fleste "proprietary blends"
- Detox-produkter (kroppen detoxer selv)`,
    },
    {
      id: 'kroppsoving-vg1-3-6-example1',
      type: 'example',
      title: 'Trenger du proteinpulver?',
      problem: 'Martin (70 kg) trener styrke 3-4 ganger i uken. Han vurderer å kjøpe proteinpulver. Trenger han det?',
      solution: `**Steg 1: Beregn proteinbehov**
Martin trener mye styrke, så han trenger ca. 1,6-2g protein per kg:
70 kg × 1,8g = 126 gram protein daglig

**Steg 2: Sjekk hva han får fra maten**
Typisk dag:
- Frokost: Havregrøt + melk + egg (20g)
- Lunsj: 3 brødskiver med ost/pålegg (25g)
- Middag: Kylling 150g + tilbehør (40g)
- Kvelds: Yoghurt (10g)
- Totalt: 95g protein

**Steg 3: Vurder behovet**
Martin får 95g, men trenger 126g = mangler 31g.

**Konklusjon:**
Martin kan enkelt få i seg mer protein fra vanlig mat:
- Ekstra glass melk (8g)
- Større porsjon kylling til middag (10g ekstra)
- Cottage cheese som mellommåltid (15g)
- Totalt: 128g protein

**Svar:** Martin trenger IKKE proteinpulver. Han kan enkelt dekke behovet med vanlig mat. MEN: Hvis han vil ha proteinshake rett etter trening fordi det er praktisk (når han ikke kan spise ordentlig måltid), kan det være nyttig. Det er ikke nødvendig, men kan være praktisk.`,
    },
    {
      id: 'kroppsoving-vg1-3-6-def2',
      type: 'definition',
      title: 'Energidrikker',
      content: 'Energidrikker er drikker som inneholder høye doser koffein (ofte 80-160 mg per boks), sukker og andre stimulanter som taurin og guarana. De markedsføres for å gi energi og øke ytelse, men har flere helsemessige bekymringer, spesielt for unge.',
    },
    {
      id: 'kroppsoving-vg1-3-6-text3',
      type: 'text',
      content: `## Energidrikker - risiko og realiteter

Energidrikker er ekstremt populære blant ungdom, men helsemyndigheter advarer mot overforbruk:

**Hva inneholder energidrikker?**
- **Koffein**: 80-160 mg per 250ml boks (opptil 300mg i store bokser)
- **Sukker**: 27g per 250ml (ca. 7 sukkerbiter)
- **Taurin**: Aminosyre, effekt omdiskutert
- **Guarana**: Plantekilde til koffein (mer koffein!)
- **B-vitaminer**: I megadoser (ikke nødvendig)
- **Andre stimulanter**: Ulike fra merke til merke

**Effekter:**
- **Kortsiktig**: Økt våkenhet, energi, konsentrasjon (fra koffein)
- **Langsiktig**: Ingen fordeler, mange ulemper

**Risiko og bivirkninger:**

**For hjerte og kar:**
- Økt hjertefrekvens og blodtrykk
- Hjertearytmi (uregelmessig hjerterytme)
- Dokumenterte tilfeller av hjerteinfarkt hos unge
- Spesielt farlig i kombinasjon med trening

**For søvn:**
- Forstyrret søvnmønster
- Redusert søvnkvalitet
- Kan lede til avhengighet (trenger energidrikk for å fungere)

**For mental helse:**
- Angst og nervøsitet
- Irritabilitet
- Konsentrasjonsproblemer (paradoksalt)

**Andre:**
- Tannråte (mye sukker og syre)
- Vektøkning (mange tomme kalorier)
- Mageproblemer
- Utvasking av kalsium (dårlig for bein)

**Kombinasjoner som er FARLIGE:**
- Energidrikk + trening = høy belastning på hjertet
- Energidrikk + alkohol = maskerer ruseffekter, økt risikotaking
- Flere energidrikker på kort tid = koffeinoverdose

**Anbefalinger:**
- **Under 16 år**: Bør ikke drikke energidrikker
- **16-18 år**: Maksimalt én liten boks per dag, ikke hver dag
- **Aldri før/under trening**: Bruk vann eller sportsdrikk i stedet
- **Aldri med alkohol**: Farlig kombinasjon

**Alternativer til energidrikker:**
- Kaffe (mer koffein uten sukker og tilsetninger)
- Te (mildere koffeineffekt)
- God søvn (best "energikilde")
- Regelmessige måltider (stabil energi)
- Vann (dehydrering gir tretthet)`,
    },
    {
      id: 'kroppsoving-vg1-3-6-def3',
      type: 'definition',
      title: 'Doping',
      content: 'Doping er bruk av forbudte metoder eller substanser for å forbedre prestasjonsevnen. Antidoping Norge fører en liste (WADA-listen) over forbudte stoffer. Bruk av doping er forbudt i all organisert idrett, kan gi helseskader og utestengelse, og bryter med idrettens verdier om rettferdighet.',
    },
    {
      id: 'kroppsoving-vg1-3-6-text4',
      type: 'text',
      content: `## Dopingfeller i kosttilskudd

Dette er kanskje det farligste aspektet ved kosttilskudd:

**Hva er problemet?**
Kosttilskudd er dårlig regulert. Mange produkter inneholder:
- Stoffer som ikke er oppført på etiketten
- Forurensninger fra produksjonsprosessen
- Bevisst tilsatte dopingstoffer (for å gi "effekt")

**Dopingfeller:**
Produkter solgt som "naturlige" eller "trygge" kan inneholde:
- **Anabole steroider**
- **Prohormon** (omdannes til steroider i kroppen)
- **Stimulanter** (amfetaminliknende stoffer)
- **SARMs** (Selective Androgen Receptor Modulators)

**Risikoprodukter:**
- Fettforbrennere/"fat burners"
- Muskelvekst-kosttilskudd/"muscle builders"
- "Testo-boosters"
- "Pre-workout" med "proprietary blends"
- Produkter markedsført med ekstreme lovnader
- Produkter fra ukjente nettsider

**Konsekvenser av dopingdom:**
- **Utestengelse**: 2-4 år fra all organisert idrett
- **Rykteskade**: Vanskelig å komme tilbake
- **Helseskader**: Kan være permanente
- **Juridiske konsekvenser**: Besittelse kan være ulovlig

**Viktig:**
"Jeg visste ikke" er IKKE et gyldig forsvar. Utøveren er ansvarlig for alt som kommer inn i kroppen. En positiv dopingtest gir utestengelse uansett om du visste om stoffet eller ikke.

**Hvordan beskytte seg:**
- **Spis mat i stedet**: Tryggeste valget
- **Sjekk dopinglisten**: wada-ama.org eller antidoping.no
- **Bruk Ren ID**: Norsk ordning for dopingtestede kosttilskudd (renid.no)
- **Vær skeptisk**: Hvis det høres for godt ut til å være sant, er det det
- **Kjøp fra trygge kilder**: Apotek, kjente norske butikker
- **Unngå nettbestilling fra utlandet**: Høy risiko

**Ren ID:**
Norsk ordning der produkter gjennomgår dopingtesting. Produkter med Ren ID-merket er testet og godkjent. Ikke 100% garanti, men betydelig tryggere.`,
    },
    {
      id: 'kroppsoving-vg1-3-6-example2',
      type: 'example',
      title: 'Kritisk vurdering av kosttilskudd',
      problem: 'Du ser en annonse for "EXTREME MUSCLE BUILDER - Bygg 5 kg muskler på 4 uker uten trening!" Vurder produktet kritisk.',
      solution: `**Røde flagg (advarselsignaler):**

1. **Urealistiske lovnader**: 5 kg muskelmasse på 4 uker er umulig naturlig
2. **"Uten trening"**: Muskler bygges IKKE uten trening
3. **Ekstreme ord**: "EXTREME", "ULTIMATE", "PRO" - markedsføring
4. **Uklare ingredienser**: Sannsynligvis "proprietary blend"
5. **Før/etter-bilder**: Kan være fake eller misvisende

**Kritiske spørsmål:**
- Hva er ingrediensene? (trolig ikke oppgitt klart)
- Er det vitenskapelig dokumentasjon? (nei)
- Hvor produseres det? (trolig utlandet)
- Har det Ren ID-merke? (nei)
- Hvorfor lover det så mye mer enn etablerte produkter? (dopingstoffer?)

**Sannsynlig konklusjon:**
Dette er et farlig produkt som enten:
a) Ikke virker i det hele tatt (ren svindel)
b) Inneholder ulovlige dopingstoffer (derfor "effekten")

**Hva du bør gjøre:**
- IKKE kjøp produktet
- Rapporter til forbrukertilsynet hvis det markedsføres i Norge
- Advar venner
- Bruk pengene på mat og et treningssenter i stedet

**Lærdom:**
Hvis det høres for godt ut til å være sant, er det det. Det finnes INGEN snarveier til muskelvekst.`,
    },
    {
      id: 'kroppsoving-vg1-3-6-tip1',
      type: 'tip',
      title: 'Tommelfingerregler for kosttilskudd',
      content: `1. **Mat først**: Prioriter alltid et godt grunnkosthold
2. **Dokumentasjon**: Krev vitenskapelig dokumentasjon for effekt
3. **Ren ID**: Velg produkter med Ren ID-merke hvis du bruker tilskudd
4. **Skepsis**: Vær kritisk til ekstreme lovnader
5. **Kun ved behov**: Bruk tilskudd kun ved dokumentert mangel eller praktisk behov
6. **Trygge kilder**: Kjøp fra apotek eller kjente norske butikker
7. **Unngå kombinasjoner**: Ikke bland flere ukjente produkter
8. **Rådfør deg**: Snakk med lege, ernæringsfysiolog eller Antidoping Norge ved tvil
9. **Sjekk dopinglisten**: Alltid før du tar noe nytt
10. **Husk**: Kosttilskudd utgjør maksimalt 5% av fremgangen - trening, mat, søvn og restitusjon er de 95%`,
    },
    {
      id: 'kroppsoving-vg1-3-6-text5',
      type: 'text',
      content: `## Spesielt om anabole steroider

Selv om dette er ulovlig og ikke kosttilskudd, er det viktig å vite om risikoen:

**Hva er anabole steroider?**
- Syntetiske varianter av testosteron
- Øker proteinoppbygging i musklene
- Forbudt i all organisert idrett
- Ulovlig å besitte uten resept i Norge (straffbart)

**Kortsiktige effekter:**
- Rask muskelvekst
- Økt styrke
- Raskere restitusjon

**Langsiktige helseskader:**
**For alle:**
- Hjerte- og karskader (hjerteinfarkt, hjerneslag)
- Leverskader
- Psykiske problemer (aggresjon, depresjon, angst)
- Hormonelle forstyrrelser
- Akne og hudproblemer

**For menn:**
- Krymping av testikler
- Redusert spermkvalitet (sterilitet)
- Brystutvikkling (gynekomasti)
- Hårtap

**For kvinner:**
- Maskulinisering (dyp stemme, ansiktshår)
- Ofte irreversibelt

**For ungdom:**
- Prematur slutting av vekst (blir kortere)
- Ekstra risiko for psykiske problemer

**Hvorfor bruker noen det?**
- Press om å prestere
- Kroppsideal/skjønnhetspress
- Uvitenhet om risiko
- Påvirkning fra miljø

**Myter:**
- "Trygt hvis brukt riktig" - NEI, alltid risiko
- "Bare én kur" - Avhengighet er vanlig
- "Alle på toppen gjør det" - NEI, og ikke en grunn til å gjøre det selv

**Fakta:**
Anabole steroider er farlige, ulovlige og bryter med idrettens verdier. Det finnes INGEN trygg måte å bruke dem på for ungdom.`,
    },
    {
      id: 'kroppsoving-vg1-3-6-tip2',
      type: 'tip',
      title: 'Nyttige ressurser',
      content: `**Informasjon om doping og kosttilskudd:**
- **Antidoping Norge**: antidoping.no - dopingliste, Ren ID, informasjon
- **WADA**: wada-ama.org - internasjonal dopingliste
- **Mattilsynet**: mattilsynet.no - informasjon om kosttilskudd
- **Ren ID**: renid.no - søk etter dopingtestede produkter

**Kosthold og ernæring:**
- **Helsedirektoratet**: helsedirektoratet.no - kostråd
- **Olympiatoppen**: olympiatoppen.no - ernæringsråd for utøvere

**Ved spørsmål:**
- Snakk med ernæringsfysiolog
- Kontakt Antidoping Norge ved tvil
- Rådfør deg med lege før du tar kosttilskudd`,
    },
    {
      id: 'kroppsoving-vg1-3-6-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-6-ex1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom kosttilskudd og legemidler. Hvorfor er dette viktig å vite?',
        solution: 'Kosttilskudd er produkter som inneholder næringsstoffer i konsentrert form og er ment å supplere kostholdet. I motsetning til legemidler gjennomgår kosttilskudd IKKE samme strenge testing og godkjenning før de kan selges. Dette betyr at kosttilskudd kan inneholde stoffer som ikke er oppført på etiketten, forurensninger, eller til og med dopingstoffer. Produsentene trenger ikke å dokumentere effekt eller sikkerhet på samme måte som for legemidler. Dette er viktig å vite fordi mange tror at kosttilskudd er grundig testet og trygt siden det selges fritt, men virkeligheten er at kvaliteten varierer enormt og risikoen for dopingfeller er reell. Derfor må man være kritisk og velge produkter fra trygge kilder, helst med Ren ID-merke.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-6-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-6-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilke kosttilskudd har dokumentert effekt? Nevn tre og forklar.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke kosttilskudd har dokumentert effekt?',
            solution: 'Vitamin D, kreatin, koffein',
            multipleChoiceOptions: [
              'Vitamin D, kreatin, koffein',
              'Fettforbrennere, BCAA, detox',
              'Taurin, guarana, glukosamin',
              'Alle kosttilskudd virker like godt',
            ],
          },
          {
            label: 'b',
            task: 'Forklar effekten av kreatin',
            solution: 'Kreatin øker styrke og muskelmasse ved styrketrening. Det fungerer ved å øke energitilgjengeligheten i musklene, slik at man kan prestere bedre under korte, intense innsatser. Anbefalt dose er 3-5 gram daglig. Kreatin er et av de best dokumenterte og trygge kosttilskuddene.',
          },
          {
            label: 'c',
            task: 'Hvorfor anbefales vitamin D-tilskudd om vinteren i Norge?',
            solution: 'Vitamin D anbefales om vinteren (oktober-mars) fordi vi får lite sollys i denne perioden, og sollys er hovedkilden til vitamin D-produksjon i kroppen. Vitamin D er viktig for benhelse og immunforsvar. Anbefalt dose er 10-20 μg daglig.',
          },
        ],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-6-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-6-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er risikoen ved energidrikker, og hvilke anbefalinger gjelder for ungdom?',
        solution: 'Energidrikker inneholder høye doser koffein (80-160 mg per boks), mye sukker, og andre stimulanter. Risiko inkluderer: 1) Hjerte- og karproblemer - økt hjertefrekvens, blodtrykk og risiko for hjertearytmi. Spesielt farlig i kombinasjon med trening. 2) Søvnforstyrrelser - forstyrret søvnmønster og avhengighet. 3) Mental helse - angst, nervøsitet og irritabilitet. 4) Tannråte og vektøkning fra sukker. Farlige kombinasjoner er energidrikk + trening og energidrikk + alkohol. Anbefalinger: Under 16 år bør ikke drikke energidrikker. 16-18 år maksimalt én liten boks per dag, ikke hver dag. Aldri før/under trening - bruk vann i stedet. Bedre alternativer er god søvn, regelmessige måltider og vann.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-6-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-6-ex4',
        number: '4',
        type: 'classic',
        task: 'Hva er dopingfeller i kosttilskudd? Hvordan kan du beskytte deg?',
        solution: 'Dopingfeller er kosttilskudd som inneholder forbudte dopingstoffer uten at det står oppført på etiketten. Dette kan være bevisst tilsatte stoffer (for å gi "effekt"), forurensninger fra produksjon, eller udeklarerte ingredienser. Risikoprodukter er fettforbrennere, muskelvekst-kosttilskudd, testo-boosters og pre-workout med "proprietary blends". Konsekvenser av positiv dopingtest er 2-4 års utestengelse, rykteskade og helseskader - selv om du ikke visste om stoffet. Beskyttelse: 1) Spis mat i stedet for kosttilskudd når mulig, 2) Sjekk dopinglisten på antidoping.no, 3) Bruk kun produkter med Ren ID-merke, 4) Vær skeptisk til ekstreme lovnader, 5) Kjøp kun fra apotek eller kjente norske butikker, 6) Unngå nettbestilling fra utlandet. Husk: Du er selv ansvarlig for alt som kommer inn i kroppen.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-6-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-6-ex5',
        number: '5',
        type: 'classic',
        task: 'Du ser en annonse for et kosttilskudd som lover "10 kg vekttap på 2 uker uten trening eller diett!" Analyser denne annonsen kritisk.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke røde flagg ser du i denne annonsen?',
            solution: 'Røde flagg: 1) Urealistisk lovnad - 10 kg vekttap på 2 uker er farlig og umulig sunt, 2) "Uten trening eller diett" - går imot all kunnskap om vekttap, 3) Ekstreme resultater uten innsats - klassisk svindelmarkedsføring, 4) Låter for godt til å være sant.',
          },
          {
            label: 'b',
            task: 'Hva er sannsynligheten for at dette produktet virker som lovet?',
            solution: 'Sannsynligheten er nær null. Produktet virker enten ikke i det hele tatt (ren svindel), eller inneholder farlige/ulovlige substanser. Sunt vekttap er 0,5-1 kg per uke med diett og trening. 10 kg på 2 uker er umulig uten ekstreme og farlige tiltak.',
          },
          {
            label: 'c',
            task: 'Hva bør du gjøre?',
            solution: 'Ikke kjøp produktet. Rapporter annonsen til forbrukertilsynet hvis den markedsføres i Norge. Advar venner som kanskje vurderer å kjøpe det. Husk: Det finnes ingen snarveier til varig vekttap. Sunt vekttap krever balansert kosthold, fysisk aktivitet og tid.',
          },
        ],
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-6-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-6-ex6',
        number: '6',
        type: 'classic',
        task: 'Hva er Ren ID, og hvorfor er det viktig?',
        solution: 'Ren ID er en norsk ordning der kosttilskudd gjennomgår dopingtesting før de får merket. Produkter med Ren ID-merke er testet for forbudte substanser og godkjent som dopingfrie. Dette er viktig fordi vanlige kosttilskudd kan inneholde udeklarerte dopingstoffer som forurensninger eller tilsatte ingredienser, noe som kan gi positiv dopingtest og utestengelse. Ren ID er ikke 100% garanti (nye stoffer kan dukke opp), men det er betydelig tryggere enn produkter uten merket. Idrettsutøvere som bruker kosttilskudd bør alltid velge produkter med Ren ID-merke for å minimere risikoen for dopingfeller. Man kan søke etter godkjente produkter på renid.no.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-6-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-6-ex7',
        number: '7',
        type: 'classic',
        task: 'Forklar hvorfor anabole steroider er farlige, spesielt for ungdom.',
        solution: 'Anabole steroider er syntetiske varianter av testosteron som øker muskelvekst, men har alvorlige helseskader. Generelle skader inkluderer hjerte- og karproblemer (hjerteinfarkt, hjerneslag), leverskader, psykiske problemer (aggresjon, depresjon, angst), og hormonelle forstyrrelser. For menn: krymping av testikler, sterilitet, brystutvikkling og hårtap. For kvinner: maskulinisering med dyp stemme og ansiktshår, ofte irreversibelt. For UNGDOM er det ekstra farlig fordi det kan føre til prematur slutting av vekst (blir kortere enn genetisk potensial) og ekstra høy risiko for psykiske problemer. Anabole steroider er ulovlig å besitte uten resept (straffbart), forbudt i all organisert idrett, og gir 2-4 års utestengelse ved positiv test. Det finnes INGEN trygg måte å bruke dem på.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-3-6-exercise8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-6-ex8',
        number: '8',
        type: 'classic',
        task: 'Lag en liste med fem konkrete råd til en venn som vurderer å kjøpe kosttilskudd for bedre treningsresultater.',
        solution: '1) Mat først: Prioriter å få i deg et balansert kosthold med nok protein, karbohydrater og sunt fett. Kosttilskudd kan aldri erstatte et godt grunnkosthold. 2) Vurder reelt behov: Trenger du virkelig kosttilskudd, eller kan du få næringen fra vanlig mat? De fleste unge trenger IKKE kosttilskudd. 3) Sjekk dopinglisten: Gå inn på antidoping.no og sjekk at produktet ikke inneholder forbudte stoffer. Velg produkter med Ren ID-merke. 4) Vær skeptisk til ekstreme lovnader: Hvis produktet lover mirakelresultater, er det enten svindel eller inneholder ulovlige stoffer. Det finnes ingen snarveier. 5) Kjøp fra trygge kilder: Apotek eller kjente norske butikker. Unngå nettbestilling fra utlandet - høy risiko for dopingfeller. Husk: Kosttilskudd utgjør maksimalt 5% av fremgangen. Fokuser på trening, mat, søvn og restitusjon først.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_4_1: TextbookChapter = {
  id: 'kroppsoving-vg1-4-1',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '4.1',
  title: 'Løping og friidrett',
  description: 'Lær grunnleggende teknikk i sprint, langdistanse, hopp og kast. Utvikle forståelse for ulike disipliner i friidrett.',
  estimatedMinutes: 50,
  competenceGoals: [
    'Mestre grunnleggende løpeteknikk for sprint og langdistanse',
    'Utføre hopp og kast med riktig teknikk og sikkerhet',
    'Reflektere over egen utvikling i ulike friidrettsdisipliner',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-4-1-intro',
      type: 'text',
      content: `# Løping og friidrett

Friidrett kalles "idrettenes mor" fordi den består av de mest grunnleggende bevegelsene mennesket kan gjøre: løpe, hoppe og kaste. Disse bevegelsene er naturlige for kroppen vår, men med riktig teknikk kan vi bli betydelig bedre, raskere og sterkere - og ikke minst unngå skader.

Friidrett er en svært mangfoldig idrett med hundrevis av øvelser, fra 60 meter sprint til 42 km maraton, fra høydehopp til spyd, fra 100 meter hekk til tikamp. Nesten alle kan finne noe som passer for dem, uavhengig av om man er rask, sterk, utholdende eller eksplosiv.

I dette kapittelet skal vi se på grunnleggende teknikk i ulike friidrettsdisipliner. Fokuset er ikke på å bli eliteutøver, men å forstå bevegelsene, kunne utføre dem trygt, og kanskje oppdage noe man liker å drive med.`,
    },
    {
      id: 'kroppsoving-vg1-4-1-def1',
      type: 'definition',
      title: 'Sprint',
      content: 'Sprint er kortdistanseløp (60m - 400m) der målet er høyest mulig fart. Sprint krever eksplosivitet, styrke og riktig teknikk. De viktigste øvelsene er 100m, 200m og 400m.',
    },
    {
      id: 'kroppsoving-vg1-4-1-text2',
      type: 'text',
      content: `## Sprintteknikk

God sprintteknikk handler om å overføre maksimal kraft til fremoverdrift:

**Start (blokkstart):**
- "På plass": Fot plassering i blokkene, hender bak startstreken
- "Klar": Løft hoften høyere enn skuldrene, vekt på hendene
- "Gå": Eksplosivt push fra bakre fot, drive frem fra blokkene
- Første steg: Korte, kraftige steg med fremoverlanet kropp

**Akselerasjon (0-30m):**
- Fremoverlanet kroppsposisjon (ca. 45 grader første steget)
- Kraftige armtak (90 graders vinkel i albuen)
- Knær løftes høyt
- Trykk bakover og ned i bakken
- Gradvis oppreising til toppfart

**Toppfart (30-60m):**
- Oppreist kroppsposisjon
- Lange, kraftfulle steg
- Rask benavsparkning under kroppen
- Aktive, kraftige armtak (motsatt arm/ben)
- Avslappet overkropp, ansikt og kjeve
- Foten setter ned rett under hoften

**Vedlikehold av fart (60-100m):**
- Kjempe mot tretthet
- Opprettholde teknikk (vanlig å "sette seg" når trøtt)
- Fortsatt aktive armtak
- Drive gjennom mål (ikke bremse før etter målgang)

**Vanlige feil:**
- For oppreist i starten
- "Setter seg" (for lav hofteposisjon)
- Passive armtak
- Ser ned (hodets posisjon påvirker kroppen)
- Bremser før målgang`,
    },
    {
      id: 'kroppsoving-vg1-4-1-def2',
      type: 'definition',
      title: 'Langdistanseløping',
      content: 'Langdistanseløp er løp over 800m og lenger (3000m, 5000m, 10000m, halvmaraton, maraton). Disse krevne god utholdenhet, jevn fart og økonomisk løpeteknikk for å spare energi.',
    },
    {
      id: 'kroppsoving-vg1-4-1-text3',
      type: 'text',
      content: `## Langdistanse løpeteknikk

Effektiv langdistanseteknikk handler om å løpe økonomisk over lang tid:

**Kroppsholdning:**
- Oppreist, men avslappet
- Lett fremoverlanet (2-3 grader)
- Blikk fremover, ikke ned
- Avslappede skuldre

**Fotplassering:**
- Sett ned foten under hoften, ikke foran
- Mellomsåle/forfot landing (ikke hel)
- Lette, raske steg (høy steglengde)
- Kort bakkekontakt

**Armbevegelse:**
- 90 graders vinkel i albuen
- Bevegelse frem/tilbake (ikke på tvers)
- Avslappede hender
- Moderat, rytmisk sving

**Pusteøknikk:**
- Pust med både nese og munn
- Dyp mageputsting
- Rytmisk pust (f.eks. 3-2: inn på 3 steg, ut på 2)
- Utvid lungekapasiteten over tid

**Tempostyring:**
- Start ikke for fort - det koster senere
- Finn jevn, bærekraftig fart
- Spar energi til siste del
- Negative splits (raskere andre halvdel) er optimalt

**Løping i motbakke:**
- Kortere steg
- Drive med armene
- Lanet mer fremover
- Oppretthold kadanse (stegtakt)

**Løping i nedoverbakke:**
- Lengre steg
- Kontroliert fart (ikke "falle" nedover)
- Aktivt bremse med muskler

**Vanlige feil:**
- Oversteg (setter ned foten for langt frem)
- For oppreist/tilbakerlanet
- Stive skuldre
- Holder pusten
- Starter for fort`,
    },
    {
      id: 'kroppsoving-vg1-4-1-example1',
      type: 'example',
      title: 'Planlegging av treningsøkt for 3000m',
      problem: 'Du skal løpe 3000m på best mulig tid. Lag en plan for oppvarming, tempostrategi og nedjogging.',
      solution: `**Oppvarming (20-25 min før):**
- 10 min rolig jogging
- Dynamiske tøyeøvelser (beinsvinger, knæløft, hælspark)
- 3-4 × 50m progressive sprinter (gradvis øke fart)
- 2-3 min rolig jogg
- Føler deg klar og varm

**Tempostrategi:**
3000m = 7,5 runder på 400m bane

Start: Ikke for fort! Finn rytme.
- Runde 1-2: Komfortabel fart, etablere posisjon
- Runde 3-5: Hold jevn fart, pust rytmisk
- Runde 6-7: Begynn å presse på, øk farten litt
- Siste 400m: Alt du har, sprint siste 200m

Mentalt: Tenk "én runde om gangen" - ikke se hele løpet.

**Etter mål:**
- Ikke stopp brått - fortsett å gå/jogge lett
- Nedjogging 5-10 min
- Statisk tøying
- Drikk vann
- Spis karbohydrater og protein innen 30-60 min

**Resultat:**
Med god oppvarming, smart tempo og mental styrke maksimerer du prestasjonen.`,
    },
    {
      id: 'kroppsoving-vg1-4-1-text4',
      type: 'text',
      content: `## Hopp - lengde, høyde og tresteg

**Lengdehopp:**

**Tilløp:**
- 15-20 meter progressiv akselerasjon
- Siste steg: kort og rask
- Opprettholder fart helt til avhopp

**Avhopp:**
- Fra avsatsbrett (tå bak streken)
- Drive kraftig oppover og fremover
- "Løpe" inn i hoppet
- Sving med armene oppover

**Flyvefase:**
- "Hang" - strekke kroppen
- Eller "hitch-kick" - syklebevegelse med bena
- Armene opp og frem

**Landing:**
- Strekke bena langt frem
- Bøy i knærne og fall fremover
- Ikke fall bakover (mister meter)

**Høydehopp (Fosbury flop):**

**Tilløp:**
- J-formet løp (8-10 steg)
- Siste 3-4 steg i kurve
- Bygge opp vertikal kraft

**Avhopp:**
- Fra ytterste fot (venstre fot hvis fra venstre)
- Drive kraftig opp med motsatt kne
- Armene opp og over

**Over ribbå:**
- Bøy kroppen bakover (bro)
- Løft hoften opp (viktigst)
- Hodet og skuldrene først over
- Vri og bøy bena over

**Landing:**
- På ryggen/skuldre i madrass
- Bøy kroppen for å få bena helt over

**Tresteg:**
- Hopp - Step - Sprang - Lengdehopp
- Først på samme fot to ganger, så motsatt fot
- Rytme og flyt viktigere enn maksimal kraft
- Teknisk vanskelig, krever øvelse`,
    },
    {
      id: 'kroppsoving-vg1-4-1-def3',
      type: 'definition',
      title: 'Kast',
      content: 'Kast i friidrett inkluderer kule, diskos, slegge og spyd. Alle krever eksplosiv kraft, rotasjon og koordinasjon for å akselerere redskapen. Sikkerhet er kritisk - kast kun i godkjente anlegg under tilsyn.',
    },
    {
      id: 'kroppsoving-vg1-4-1-text5',
      type: 'text',
      content: `## Kast - kule, diskos og spyd

**Kulestøt (O'Brien-teknikk):**

**Startposisjon:**
- Kula ved/under haken
- Vekt på bakre ben
- Blikk bakover

**Glid:**
- Kraftig glid/hopp bakover over ringen
- Lav hofteposisjon
- Venstreben (for høyrehendte) treffer først

**Kast:**
- Eksplosivt drive med bakre ben
- Rotere hoften og torso
- Strekke armen og "skyve" kula
- Følge gjennom med kroppen
- Kastet utføres fra skulder/hals-høyde

**Diskos:**
- Rotasjonsteknikk (1,5 omdreining)
- Bygg opp rotasjonsfart
- Frigjør diskos på riktig tidspunkt
- Viktig med balanse og flyt
- MER teknisk enn kulestøt

**Spyd:**
- Tilløpskast fra løp
- Bære spyd over skulder
- Kraftig tverrsteg ("cross-step")
- Kast med pen bue-bevegelse
- Spyd må lande spiss først

**Sikkerhetsregler (KRITISK VIKTIG):**
1. **Aldri kast** uten tilsyn av lærer
2. **Alltid sjekk** området før kast
3. **Ingen personer** i kastesektoren
4. **Vent** til lærer sier det er trygt
5. **Hent** redskap kun når lærer gir klarsignal
6. **Gå, aldri løp** for å hente redskap
7. **Bær** redskap vertikalt (ikke horisontalt)
8. **Aldri tulle** med kastredskap`,
    },
    {
      id: 'kroppsoving-vg1-4-1-tip1',
      type: 'tip',
      title: 'Tips for bedre løpeteknikk',
      content: `1. **Film deg selv**: Se teknikken din på video, sammenlign med gode løpere
2. **Fokuser på ett element om gangen**: Ikke prøv å fikse alt samtidig
3. **Teknikk før tempo**: Lær riktig teknikk i rolig tempo først
4. **Armene er viktige**: Kraftige, aktive armtak gir kraftigere løp
5. **Cadance (stegtakt)**: Sikt på ca. 180 steg per minutt
6. **Styrketrening**: Sterkere bein og core = bedre løpeteknikk
7. **Varm opp ordentlig**: Aldri sprint uten god oppvarming
8. **Tålmodig**: Teknikk endring tar tid (uker/måneder)`,
    },
    {
      id: 'kroppsoving-vg1-4-1-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de fire fasene i en 100-meter sprint.',
        solution: 'De fire fasene i 100m sprint er: 1) Start (0-10m): Eksplosiv start fra blokkene med fremoverlanet kropp (ca. 45 grader), kraftige armtak, knær løftes høyt, drive bakover og ned i bakken. 2) Akselerasjon (10-30m): Gradvis oppreising mot toppfart, fortsatt kraftige steg, lange armtak, fokus på å bygge fart. 3) Toppfart (30-60m): Oppreist kroppsposisjon, lange kraftfulle steg, rask benavsparkling under kroppen, aktive armtak, avslappet overkropp, foten setter ned rett under hoften. 4) Vedlikehold av fart (60-100m): Kjempe mot tretthet, opprettholde teknikk, unngå å "sette seg", fortsatt aktive armtak, drive gjennom mål uten å bremse før etter målgang.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-1-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom sprint- og langdistanseteknikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv en nøkkelforsikjell i fotplassering',
            solution: 'Sprint: Foten settes ned rett under hoften med kraft for maksimal fremoverdrift. Langdistanse: Foten settes også ned under hoften, men med mellomsåle/forfot landing og lette, raske steg for å spare energi over lang tid.',
          },
          {
            label: 'b',
            task: 'Hvordan skiller armbevegelsen seg?',
            solution: 'Sprint: Kraftige, aktive armtak med 90 graders vinkel i albuen, maksimal kraftoverføring. Langdistanse: Moderat, rytmisk armsving, fortsatt 90 graders vinkel, men mer avslappet og energibesparende.',
          },
          {
            label: 'c',
            task: 'Hvorfor er tempostyring viktigere i langdistanse?',
            solution: 'I langdistanse må du fordele energien over lengre tid. Starter du for fort, vil du tømme glykogenlagrene og få melkesyre-opphopning som gjør at du må sakne betydelig eller gi opp. I sprint er målet maksimal fart hele veien, og løpet er over før energi blir et problem.',
          },
        ],
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-1-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar de fire fasene i lengdehopp.',
        solution: 'Lengdehopp har fire faser: 1) Tilløp (15-20m): Progressiv akselerasjon mot avsatsbrett, siste steg kort og rask, opprettholde fart helt til avhopp. 2) Avhopp: Fra avsatsbrett med tå bak streken, drive kraftig oppover OG fremover (ikke bare fremover), "løpe" inn i hoppet, svinge armene oppover for ekstra kraft. 3) Flyvefase: Hang-teknikk (strekke kroppen) eller hitch-kick (syklebevegelse med bena), armene opp og frem, forberede landing. 4) Landing: Strekke bena langt frem, bøy i knærne og fall fremover (aldri bakover da du mister meter), landingen måles fra nærmeste avtrykk i sanden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-1-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er sikkerhet ekstremt viktig ved kast i friidrett? Nevn minst fire sikkerhetsregler.',
        solution: 'Sikkerhet er kritisk ved kast fordi redskapen er tunge (kule 7,26 kg for menn, 4 kg for kvinner) og kan fly langt med høy fart. En kule, diskos eller spyd som treffer en person kan gi alvorlige skader eller være dødelig. Fire viktige sikkerhetsregler: 1) Aldri kast uten tilsyn av lærer - det må være kvalifisert veileder til stede. 2) Alltid sjekk området før kast - ingen personer i kastesektoren. 3) Hent redskap kun når lærer gir klarsignal - gå aldri ut i kastesektoren mens andre kaster. 4) Bær redskap vertikalt, ikke horisontalt - reduser risiko for å treffe andre. Andre viktige regler: Vent til lærer sier det er trygt, gå (aldri løp) for å hente, og aldri tull med kastredskap.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-1-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Lag en oppvarmingsrutine før sprint-økt.',
        solution: 'Oppvarmingsrutine før sprint (15-20 minutter): 1) Rolig jogg 5-7 minutter for å øke pulsen og kroppstemperaturen. 2) Dynamiske tøyeøvelser: Beinsvinger frem/tilbake og side til side (10 hver), knæløft (2×20m), hælspark (2×20m), utfall med rotasjon (10 hver side), hofte-mobilisering. 3) Teknikk-drill: A-skip, B-skip, høye knær, hælspark bakover (2×30m hver). 4) Progressive sprinter: 4×50-60m der du gradvis øker farten fra 50% til 90%, gå tilbake mellom hver. 5) Korte sprinter: 2×30m ved 95% innsats med god restitusjon mellom. 6) Statisk vent 2-3 minutter før hovedøkt. Nå er du klar for sprintøkt. Husk: Aldri sprint uten god oppvarming - høy risiko for muskelskader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-1-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-1-ex6',
        number: '6',
        type: 'classic',
        task: 'Beskriv Fosbury flop-teknikken i høydehopp.',
        solution: 'Fosbury flop er moderne høydehoppteknikk: Tilløp: J-formet løp med 8-10 steg, de siste 3-4 i kurve for å bygge opp vertikal kraft. Avhopp: Fra ytterste fot (venstre fot hvis tilløp fra venstre side), drive kraftig oppover med motsatt kne, svinge armene opp og over for ekstra løft. Over ribbå: Bøy kroppen bakover over ribbå (som en bro), løft hoften høyt (viktigst å få hoften over), hodet og skuldrene først over, deretter vri og bøy bena slik at de kommer over uten å rive ribbå. Landing: På ryggen/skuldrene i madrass, bøy kroppen for å få bena helt over. Teknikken gjør at tyngdepunktet ditt kan passere UNDER ribbå mens kroppen går over, noe som gjør at du kan hoppe høyere enn med eldre teknikker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-1-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-1-ex7',
        number: '7',
        type: 'classic',
        task: 'Hva betyr "cadance" i løping, og hva er optimal cadance?',
        solution: 'Cadance (også kalt stegtakt eller kadanse) er antall steg du tar per minutt når du løper. Det måles ved å telle hvor mange ganger én fot treffer bakken på ett minutt, og gange med to. Optimal cadance for de fleste løpere er rundt 180 steg per minutt, noe forskning viser reduserer skaderisiko og forbedrer løpeøkonomi. Lavere cadance (f.eks. 160 steg/min) betyr lengre steg, som ofte fører til oversteg (foten settes ned for langt foran kroppen), økt bremse-kraft og høyere skaderisiko. Høyere cadance (f.eks. 180-190 steg/min) betyr kortere, raskere steg med mindre belastning per steg. Du kan måle din cadance ved å telle antall ganger høyre fot treffer bakken på 30 sekunder og gange med 4. For å øke cadance: løp til metronom-app, fokuser på raske, lette steg.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-1-exercise8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-1-ex8',
        number: '8',
        type: 'classic',
        task: 'Lag en treningsplan for å forbedre din 3000m-tid over 4 uker.',
        solution: 'Eksempel 4-ukers plan for 3000m (3 økter per uke): Uke 1: Mandag: 5km rolig jogg (bygge grunnlag), Onsdag: Intervalløkt 6×400m i raskt tempo med 200m joggpause, Lørdag: 40 min rolig langtur. Uke 2: Mandag: 6km rolig jogg, Onsdag: Fartlek (tempolek) 30 min: veksle 2 min raskt/2 min rolig, Lørdag: 45 min langtur. Uke 3: Mandag: 7km rolig jogg, Onsdag: Intervalløkt 4×800m i 3000m-tempo med 2 min pause, Lørdag: 50 min langtur. Uke 4: Mandag: 5km rolig (nedtrapping), Onsdag: Lett 20 min med 3×100m oppspurt, Lørdag: HVILEDAG før test. Søndag: TEST 3000m. Nøkkelprinsipper: Varierte økter (langtur, intervaller, fartlek), gradvis progresjon, nedtrapping siste uke. Husk oppvarming før hver økt og nedjogging etter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-1-exercise9',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-1-ex9',
        number: '9',
        type: 'classic',
        task: 'Planlegg og gjennomfør en treningsøkt for klassen din med oppvarming, hoveddel og nedvarming. Beskriv hver del og forklar hvorfor den er viktig.',
        solution: 'Eksempel treningsøkt (45 min): OPPVARMING (10 min): 5 min rolig jogg rundt banen for å øke puls og kroppstemperatur. 5 min dynamiske tøyeøvelser (beinsvinger, knæløft, utfall, hofte-sirkler) for å forberede muskler og ledd. Hvorfor viktig: Forebygger skader, forbereder kroppen, øker blodstrømmen. HOVEDDEL (30 min): Friidrett-stasjoner: Stasjon 1: Sprintteknikk - 4×60m med fokus på akselerasjon. Stasjon 2: Lengdehopp - øve tilløp og avhopp. Stasjon 3: Kulestøt - lære teknikk og sikkerhet. Hver stasjon 10 min, roter mellom gruppene. Hvorfor viktig: Utvikler ferdigheter, bygger styrke og utholdenhet, gir variasjon. NEDVARMING (5 min): 3 min lett jogging/gange for å senke pulsen gradvis. 2 min statisk tøying av store muskelgrupper (quadriceps, hamstrings, legg, hofter). Hvorfor viktig: Reduserer melkesyre, forebygger stølhet, fremmer restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-1-text-tilpasning',
      type: 'text',
      content: `## Tilpasning for ulike forutsetninger

Friidrett kan tilpasses for alle, uavhengig av fysisk nivå eller eventuelle begrensninger:

**Tilpasninger for ulike nivåer:**
- **Nybegynnere**: Start med kortere distanser, fokus på teknikk fremfor fart, bruk lengre pauser
- **Elever med lavere kondisjon**: Tillat gå-pauser i løpeøkter, reduser antall repetisjoner, fokuser på fremgang
- **Avanserte**: Øk distanse/intensitet, introduser mer tekniske øvelser, sett høyere mål

**Tilpasninger ved skade eller funksjonsvariasjon:**
- **Kan ikke løpe**: Erstatt med gange, sykling, svømming eller styrketrening
- **Hjelpemidler**: Rullestol-friidrett (racing wheelchair), proteser, tilpasset utstyr
- **Nedsatt syn**: Løpe med guide (guide rope), ekstra klare markeringer
- **Andre begrensninger**: Fokuser på det du kan - kanskje er kast eller styrke ditt område?

**Alternative roller når man ikke kan delta fullt ut:**
- **Trener/instruktør**: Hjelp andre med teknikk, gi tilbakemeldinger
- **Tidstoker/måler**: Ta tid på sprinter, mål kastlengder
- **Motivator**: Heie på lagkamerater, skape god stemning
- **Observatør/analyserer**: Film andre, analyser teknikk, foreslå forbedringer
- **Utstyrsansvarlig**: Sett opp utstyr, sikre trygghet ved kast

**Viktig prinsipp**: Friidrett handler om personlig utvikling og mestring - ikke om å være best. Alle kan finne sin måte å delta på, og alternativ deltakelse lærer også verdifulle ferdigheter som ledelse, analyse og teamarbeid.`,
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_4_2: TextbookChapter = {
  id: 'kroppsoving-vg1-4-2',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '4.2',
  title: 'Svømming og livredning',
  description: 'Mestre ulike svømmestiler, lær livredningsgrep og utvikle vannsikkerhet for trygg ferdsel i og på vannet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'Utføre crawl, rygg, bryst og butterfly med riktig teknikk',
    'Demonstrere grunnleggende livredningsgrep',
    'Vurdere risiko og handle trygt i og ved vann',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-4-2-intro',
      type: 'text',
      content: `# Svømming og livredning

Å kunne svømme er en livsviktig ferdighet. Norge er et land med lang kystlinje, mange innsjøer og elver. Dessverre drukner fortsatt mennesker hvert år, mange fordi de ikke kan svømme godt nok eller ikke kjenner til farene.

Svømming er også en fantastisk treningsform som trener hele kroppen samtidig, er lett for leddene, og kan utføres i alle aldre. I dette kapittelet skal vi se på de fire hovedstilene, grunnleggende livredning og vannsikkerhet.`,
    },
    {
      id: 'kroppsoving-vg1-4-2-def1',
      type: 'definition',
      title: 'Crawl (fristil)',
      content: 'Crawl er den raskeste svømmeteknikken. Det er en vekselbevegelse der armene roterer mens bena sparker, og hodet vendes til siden for å puste.',
    },
    {
      id: 'kroppsoving-vg1-4-2-def2',
      type: 'definition',
      title: 'Livredningshierarki',
      content: 'Livredningshierarkiet beskriver handlingsrekkefølge fra tryggst til farligst: Talk (snakk), Throw (kast), Reach (rekk ut), Wade (vass), Row (ro), Swim/Tow (svøm/dra). Egen sikkerhet alltid først.',
    },
    {
      id: 'kroppsoving-vg1-4-2-tip1',
      type: 'tip',
      title: 'Vannsikkerhetsregler',
      content: `- Sjekk strømforhold i sjøen før bading
- Aldri svøm alene
- Svøm parallelt med stranden
- Bruk flytevest ved usikkerhet
- Drikk aldri alkohol før/under bading
- Hopp aldri uti ukjent vann`,
    },
    {
      id: 'kroppsoving-vg1-4-2-example1',
      type: 'example',
      title: 'Sammenligning av svømmeteknikker for 200m',
      problem: 'Hvilken teknikk er best for å svømme 200 meter raskt?',
      solution: 'Crawl er beste valg for de fleste. Det er raskest teknikk som kan opprettholdes over 200m. Butterfly er marginalt raskere, men svært krevende. Bryst er langsomst. Rygg er nest-raskest, men vanskeligere å holde rett kurs.',
    },
    {
      id: 'kroppsoving-vg1-4-2-def3',
      type: 'definition',
      title: 'Brystsvømming',
      content: 'Brystsvømming er en teknisk krevende stil der armene og beina beveger seg symmetrisk. Hodet løftes for å puste, og det er viktig med god timing mellom arm- og beinbevegelser.',
    },
    {
      id: 'kroppsoving-vg1-4-2-def4',
      type: 'definition',
      title: 'Ryggsvømming',
      content: 'Ryggsvømming utføres på ryggen med vekselvise armbevegelser og benspark. Utfordringen er å holde rett kurs uten å se framover. God for nakke og rygg.',
    },
    {
      id: 'kroppsoving-vg1-4-2-def5',
      type: 'definition',
      title: 'Butterfly',
      content: 'Butterfly er den mest krevende teknikken, med simultane armbevegelser over vannet og kraftig delfinspark. Krever god teknikk, styrke og kondisjon.',
    },
    {
      id: 'kroppsoving-vg1-4-2-def6',
      type: 'definition',
      title: 'Delfinspark',
      content: 'Delfinspark er en bølgende bevegelse der beina beveger seg sammen, som en delfinhale. Kraften kommer fra hoften, ikke knærne. Brukes i butterfly og under vann etter vending.',
    },
    {
      id: 'kroppsoving-vg1-4-2-text-livredning',
      type: 'text',
      content: `## Livredning og vannsikkerhet

Livredning er livsviktig kunnskap. Hvert år drukner dessverre mennesker i Norge, mange av disse ulykkene kunne vært unngått med riktig kunnskap og handling.

### Redningshierarkiet i praksis

**1. Talk (Snakk)**:
Tryggeste metode. Hold deg på land og snakk personen inn til grunnen. "Svøm hit!", "Ta tak i bolten!", "Hold deg flytende!". Fungerer hvis personen kan svømme litt og er ved bevissthet.

**2. Throw (Kast)**:
Kast et redningshjelpemiddel: Redningsbøye, tau, flytevest, tom plastdunk. Mål foran personen så de svømmer mot den. Gi klare instruksjoner.

**3. Reach (Rekk ut)**:
Bruk en gren, planke, padleåre eller lignende for å gi personen noe å holde i. Ligg godt ned slik at du ikke mister balansen.

**4. Wade (Vass)**:
Vass ut hvis bunnen er trygg og vannet ikke for dypt. Hold fast i noe stabilt eller lag menneskekjede. Ikke gå dypere enn til livet.

**5. Row (Ro)**:
Bruk båt, surfebrett, kajakk eller annet flytende redskap. Hold deg i fartøyet, ikke hopp i. Rekk ut padleåre eller la personen holde i baugen.

**6. Swim/Tow (Svøm/dra)**:
Kun som siste utvei og kun hvis du er sterk svømmer og har trening. Ta med flytende redskap. Tilnærm bakfra. Fare for at begge drukner.

### Grunnleggende livredningsgrep

**Grunnprinsipp**: Aldri svøm direkte til en person i panikk forfra - de vil klamre seg til deg og dra deg under.

**Sleping fra baksiden**:
- Tilnærm bakfra
- Grip under armene eller over brystet
- Hold hodet deres over vann
- Ryggsvøm eller sidespark tilbake

**Frigjøringsteknikker**:
Hvis noen griper deg: Dykkunder - instinktet deres er å slippe. Dykkbevegelsen må være rask og bestemt.`,
    },
    {
      id: 'kroppsoving-vg1-4-2-def7',
      type: 'definition',
      title: 'Strømninger',
      content: 'Strømninger i sjøen er vannmasser som beveger seg i en bestemt retning. Kan være svært sterke ved utløp og punkter. Hvis fanget: Svøm parallelt med land til du er ute av strømmen, deretter inn mot land.',
    },
    {
      id: 'kroppsoving-vg1-4-2-def8',
      type: 'definition',
      title: 'Understrøm',
      content: 'Understrøm er vann som trekker utover fra land under overflaten. Kan oppstå etter store bølger. Bekjemp ikke - slapp av, hold pusten, la den slippe, og svøm opp til overflaten.',
    },
    {
      id: 'kroppsoving-vg1-4-2-example2',
      type: 'example',
      title: 'Livredningssituasjon ved badeplass',
      problem: 'Du er på badeplass og ser en person som flyter i vannet cirka 15 meter fra land. Personen roper ikke, men beveger seg lite. Hva gjør du?',
      solution: 'Handling: 1) Vurder situasjonen - personen er muligens i nød. 2) Rop høyt "Hei, er alt ok?" og få oppmerksomhet fra andre. 3) Ring 113 eller få noen andre til å gjøre det. 4) Prøv Talk - rop instruksjoner. 5) Prøv Throw - kast redningsbøye eller lignende hvis tilgjengelig. 6) Hvis ingen respons og du er trygg svømmer, vurder Swim med flytehjelp. 7) Tilnærm bakfra, grip under armene, ryggsvøm tilbake. 8) Ved land: Sjekk bevissthet og pust, iverksett HLR hvis nødvendig. Viktig: Sikre egen sikkerhet, varsle om hjelp raskt.',
    },
    {
      id: 'kroppsoving-vg1-4-2-example3',
      type: 'example',
      title: 'Forbedring av svømmeteknikk - crawl armtak',
      problem: 'En elev svømmer crawl, men blir fort sliten og kommer sakte framover. Hva kan være feil med teknikken?',
      solution: 'Vanlige teknikkfeil i crawl: 1) Lav albue under vann - armen skal ha høy albue i takfasen for å fange mer vann. 2) For kort tak - armen må trekkes helt forbi hoften. 3) Krysser midtlinjen - hånden skal gå inn rett foran skulderen. 4) Dårlig timing - en arm skal være foran når andre er bak. 5) Ingen rotasjon - kroppen skal rotere 30-40 grader til hver side. 6) Stivt benspark - bena skal være slappe i kneet, spark fra hoften. Løsning: Fokuser på ett element om gangen, bruk svømmebrett for å isolere bevegelser, film og analyser teknikken.',
    },
    {
      id: 'kroppsoving-vg1-4-2-tip2',
      type: 'tip',
      title: 'Vannsikkerhet for barn',
      content: `- Voksent tilsyn ALLTID ved vann, også gruntvannet
- Lær barn å flyte på rygg (redningsflyt)
- Lær "stopp ved vannkanten"-regel
- Bruk godkjent flytevest på båt
- Tøm bøtter/basseng etter bruk
- Hegn rundt hagepools`,
    },
    {
      id: 'kroppsoving-vg1-4-2-tip3',
      type: 'tip',
      title: 'Utvikling av svømmeteknikk',
      content: `- Film deg selv og analyser teknikken
- Øv ett element om gangen
- Bruk svømmebrett for benisolasjon
- Bruk pullbuoy for armisolasjon
- Tren med padler for å styrke armtak (avanserte)
- Drill-øvelser: ettarms-svømming, hundepaddling, fistglove`,
    },
    {
      id: 'kroppsoving-vg1-4-2-example4',
      type: 'example',
      title: 'Isvak - hva gjør du?',
      problem: 'En venn går gjennom isen. Du er 10 meter unna på trygg is. Hva gjør du?',
      solution: 'Handling: 1) IKKE gå bort til personen - isen er åpenbart svak. 2) Ring 113 umiddelbart. 3) Rop "Hold deg i iskanten! Ikke prøv å klatre opp!" 4) Ligg flatt på isen for å spre vekten hvis du må bevege deg. 5) Prøv Throw - kast tau, kjeledress, gren, plastpose med luft. 6) Prøv Reach - bruk lang gren eller planke. 7) Hvis du må gå nærmere, spred vekt (ligg ned), lag sikringslinje til land. 8) Når personen er opp: Rull vekk fra hullet, søk hjelp for hypotermi. Viktig: Is som bærer én person vertikalt, bærer flere horisontalt. Aldri gå nær iskanten. Egensikkerhet først.',
    },
    {
      id: 'kroppsoving-vg1-4-2-text-teknikk',
      type: 'text',
      content: `## Detaljert svømmeteknikk

### Crawl (fri) - detaljert gjennomgang

**Armtak (pull)**:
1. **Innslag**: Hånden settes i vannet med fingertuppene først, rett foran skulderen (ikke kryss midtlinjen)
2. **Strekk**: Strekk armen framover under vann mens kroppen roterer
3. **Tak (catch)**: Høy albue, hånden "fanger" vannet, albuen er høyere enn hånden
4. **Trekk (pull)**: Dra vannet bakover under kroppen med høy albue
5. **Trykk (push)**: Skyv vannet forbi hoften, strekk armen
6. **Gjenvinning (recovery)**: Albuen kommer først opp, avslappet arm, hånden føres framover tett ved kroppen

**Benspark**:
- Spark fra hoften, ikke kneet
- Slappe bein, lett bøy i kneet
- Plantarfleksjon (tåspiss)
- 2-takt (2 spark per armtak) eller 6-takt (6 spark per armtak)
- Bena skal ikke bryte vannoverflaten mye

**Pust**:
- Hode roterer til siden, følger kroppens rotasjon
- Pust i "lommen" som dannes bak hodet
- Én side foretrukket (unilateral) eller hver 3. armtak (bilateral)
- Blås ut under vann, rask innpust

**Kroppsposisjon**:
- Horisontal, hoften høyt
- Rotasjon 30-40 grader til hver side
- Blikk ned/fram, ikke opp
- Stram core

### Brystsvømming - detaljert gjennomgang

**Armtak**:
1. Strekk armene rett fram
2. Vend hendene utover, skyv vannet ut til sidene
3. Albuen forblir høy, hendene trekker ned og inn
4. Når hendene er ved brystet, skyv dem framover igjen
5. Rekkefølge: "Ut, ned, inn, fram"

**Beinpark (brystpark)**:
1. Bøy knærne, hæler mot rumpa
2. Roter føttene utover (som en frosk)
3. Spark kraftig ut og sammen
4. Stramma bein rett bak
5. Rekkefølge: "Bøy, roter, spark, stram"

**Timing**:
- "Pull, breathe, kick, glide"
- Armtak først, så pust, så beinpark, så gli
- Ett pust per syklus
- Hodet løftes når armene trekker

**Vanlig feil**:
- Beinpark for bred (skaper mye motstand)
- Hodet holdes over vann hele tiden (sliter nakke)
- Beinpark og armtak samtidig (dårlig fremdrift)

### Ryggsvømming - detaljert gjennomgang

**Armtak**:
- Rett arm opp fra vannet
- Tommelen først ut
- Lillefingeren først inn
- Armen settes i vannet rett bak skulder
- Trekk med høy albue under vann
- Vekselbevegelse

**Benspark**:
- Som i crawl, men på ryggen
- Spark oppover, knærne bryter ikke overflaten
- Kraft fra hoften

**Kroppsposisjon**:
- Hoften høyt, ører i vann
- Blikk opp/litt bakover
- Rotasjon 30 grader

**Navigering**:
- Tell armtak til veggen
- Bruk banelinene som veiledning
- Se opp mot flaggene (5m fra vegg)

### Butterfly - detaljert gjennomgang

**Armtak**:
- Begge armer simultant over vann
- Tommelen inn først
- Trekk med bredt tak under kroppen
- Skyv forbi hoften
- Armer ut av vannet ved hoften

**Delfinspark**:
- To spark per armtak
- Første spark når armene går inn
- Andre spark når armene skyver forbi hoften
- Bølgende bevegelse fra bryst til føtter

**Pust**:
- Hode opp når armene trekker
- Pust fram, ikke opp
- Vanligvis hvert andre armtak

**Kroppsposisjon**:
- Bølgende bevegelse
- Bryst ned når hofte opp, og omvendt`,
    },
    {
      id: 'kroppsoving-vg1-4-2-def9',
      type: 'definition',
      title: 'HLR (Hjerte-lunge-redning)',
      content: 'HLR er livredende førstehjelp ved hjertestans. 30 kompressjoner (5-6 cm dypt, midt på brystet, 100-120 per minutt) + 2 innblåsninger. Fortsett til personen våkner, profesjonell hjelp overtar, eller du er utmattet.',
    },
    {
      id: 'kroppsoving-vg1-4-2-text-drukningsforebygging',
      type: 'text',
      content: `## Drukningsforebygging

### Statistikk og risikofaktorer

I Norge drukner i snitt 80-100 personer per år. Mange av disse dødsfallene kunne vært unngått.

**Høyrisiko-grupper**:
- Menn (75% av drukningsulykker)
- Alkoholpåvirket (50% av voksne drukningsulykker)
- Barn under 5 år ved basseng
- Ungdom ved stupebrett og høye stup
- Utlendinger med svake svømmeferdigheter

**Vanlige årsaker**:
- Overvurdere egen svømmeferdighet
- Alkoholpåvirkning
- Svømme alene
- Stupulykker (nakke-/hodeskader)
- Strømninger
- Utmattelse/kramper
- Båtulykker uten flytevest

### Forebyggende tiltak

**Personlig**:
- Lær å svømme tidlig
- Tren jevnlig på svømming
- Bruk flytevest på båt
- Svøm aldri beruset
- Svøm aldri alene
- Kjenn dine grenser

**På badeplassen**:
- Skiltet badeområder
- Livredder på vakt
- Redningsutstyr tilgjengelig
- Regler godt synlige

**For barn**:
- Aktivt tilsyn ALLTID
- Flytevest i/ved vann
- Svømmeopplæring tidlig
- Gjerdet rundt pool/dam`,
    },
    {
      id: 'kroppsoving-vg1-4-2-example5',
      type: 'example',
      title: 'Planlegging av svømmetrening for utholdenhet',
      problem: 'Du skal trene for å svømme 1000m crawl kontinuerlig. Hvordan legger du opp treningen over 8 uker?',
      solution: 'Treningsplan: Uke 1-2: 10x50m med 30 sek pause (total 500m). Uke 3-4: 5x100m med 30 sek pause. Fokus på teknikk. Uke 5-6: 4x200m med 45 sek pause + 1x200m teknikk. Uke 7: 2x400m med 60 sek pause + 1x200m teknikk. Uke 8: 1x600m + 1x400m med 2 min pause. Test 1000m på slutten. Tren 2-3 ganger per uke. Inkluder oppvarming (200m rolig) og nedkoling (100m rolig) hver økt. Tips: Variere intensitet, fokuser på jevnt tempo, bruk pulsmåler hvis mulig.',
    },
    {
      id: 'kroppsoving-vg1-4-2-tip4',
      type: 'tip',
      title: 'Venteknikk i svømming',
      content: `- Delfintus: Dykkunder vann og spark delfin (raskeste)
- Gjør kompakt vending: Rull sammen
- Press kraftig fra veggen
- Strømlinje-posisjon (strake armer fram)
- Vend når du ser "T"-merket på bunnen
- Øv vendinger regelmessig`,
    },
    {
      id: 'kroppsoving-vg1-4-2-example6',
      type: 'example',
      title: 'Svømmebasseng vs. åpent vann',
      problem: 'Hva er de største forskjellene mellom å svømme i basseng og åpent vann (sjø/innsjø)?',
      solution: 'Forskjeller: 1) Temperatur - åpent vann ofte kaldere, kan gi kuldestivhet og kramper. 2) Sikt - begrenset/ingen sikt i åpent vann, må løfte hodet for navigering. 3) Bølger - skaper motstand og gjør pust vanskeligere. 4) Strøm - kan drive deg av kurs eller gjøre det tungt å svømme. 5) Bunn - ingen vegg å vende på eller hvile ved. 6) Psykologi - mer skremmende, dyp, mørkere. Forberedelse: Tren i vann under 20°C gradvis, øv navigering med hodet opp, tren i bølger, bruk våddrakt ved lav temperatur, svøm aldri alene i åpent vann.',
    },
    {
      id: 'kroppsoving-vg1-4-2-text-tilpasning',
      type: 'text',
      content: `## Tilpasning av svømmeundervisning for alle nivåer

Svømming kan og bør tilpasses slik at alle kan delta og utvikle seg i sitt eget tempo:

**Tilpasning for ulike svømmenivåer:**
- **Ikke-svømmere/nybegynnere**: Start i gruntvannet med flytøvelser, vanntrygge, grunnleggende sparkøvelser med brett. Bruk flytevest eller bading-belte for trygghet
- **Svake svømmere**: Kortere distanser, hyppigere pauser, fokus på én stil om gangen, bruk svømmebrett for å øve bein separat
- **Redde for vann**: Gradvis vannvenning, start med ansiktet, gå gradvis dypere, aldri press eller tvang, positiv forsterkning, en-til-en veiledning

**Hvordan hjelpe noen som er redd for vann:**
1. **Vis empati og respekt**: Anerkjenn at frykten er reell, aldri bagatelliser
2. **Gradvis eksponering**: Start med å sitte ved bassengkanten, dyppe føttene, gradvis gå dypere
3. **Bygg tillit**: La eleven ha kontroll, gå i deres tempo, aldri overrask eller dra
4. **Positive opplevelser**: Lag det morsomt med leker, fokuser på suksesser
5. **Vanntrivsel først**: Sprute vann på hverandre, hoppe i vannet (fra kant hvis trygt), leke
6. **Trygghet**: Bruk flytevest, ha alltid fysisk støtte tilgjengelig, aldri forlat eleven alene

**Tilpasninger ved funksjonsvariasjon eller skade:**
- **Bevegelsesbegrensninger**: Svømming er ideell - vannet bærer kroppen. Tilpass teknikker, bruk pullbuoy, fokuser på det som fungerer
- **Nedsatt syn**: Ekstra tydelige markeringer i bassengkanten, lane-liner med ulik tekstur, verbal veiledning
- **Utviklingshemming**: Enkle instruksjoner, repetisjon, visuell demonstrasjon, ekstra tid
- **Angst**: Trygg støtte, gradvis progresjon, aldri press

**Alternative roller ved svømmeundervisning:**
- **Poolside trener**: Observer og gi tilbakemeldinger på teknikk
- **Tidstoker**: Ta tiden på omganger for lagkamerater
- **Utstyrsansvarlig**: Dele ut og samle inn brett, pullbuoys, flytevester
- **Sikkerhetsassistent**: Holde oversikt, varsle lærer om noe er galt
- **Motivator**: Heie på andre, skape godt miljø

**Viktig**: Vannsikkerhet går foran alt. Alle skal føle seg trygge. Svømming er en livsviktig ferdighet, og gradvis progresjon sikrer at alle kan lære i sitt eget tempo.`,
    },
    {
      id: 'kroppsoving-vg1-4-2-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Beskriv armtaksteknikken i crawl.',
        solution: 'Armtak i crawl: Innslag (hånd inn foran hodet), Tak (høy albue, fange vann), Trekk (dra vannet bakover), Trykk (skyve forbi hofte), Gjenvinning (albue først opp, slapp arm). Timing: En arm fremme når andre er bak.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-2-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Forklar redningshierarkiet og hvorfor egen sikkerhet er viktigst.',
        solution: 'Redningshierarkiet: 1) Talk, 2) Throw, 3) Reach, 4) Wade, 5) Row, 6) Swim/Tow. Egen sikkerhet viktigst fordi en drukningsulykke ikke skal bli to. En person i fare kan ikke redde andre.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-2-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Beskriv hvordan du kan hjelpe en medelev som er redd for vann. Gi minst fire konkrete tips.',
        solution: 'Fire konkrete tips for å hjelpe noen som er redd for vann: 1) Vis empati og respekt - anerkjenn frykten som reell, aldri bagatelliser eller tvinge. 2) Gradvis eksponering - start ved bassengkanten med å dyppe føttene, gradvis gå dypere i vannets tempo, aldri skyv eller overrask. 3) Bygg tillit gjennom kontroll - la eleven bestemme tempoet, gi fysisk støtte (hold hånden), vær forutsigbar og trygg. 4) Fokuser på positive opplevelser - bruk leker og lek, feir små fremskritt, skaper gode minner i vannet. Andre viktige tiltak: Bruk flytevest for trygghet, gjør det morsomt (sprute vann, hoppe fra kant), aldri forlat eleven alene i vannet. Målet er vanntrivsel først - når frykten reduseres, kommer svømmekunstene naturlig.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-2-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar detaljert hva du skal gjøre hvis du ser noen i fare for å drukne. Bruk redningshierarkiet.',
        solution: 'Ved drukningsfare følg redningshierarkiet: 1) Talk - Rop instruksjoner fra land ("Svøm hit!", "Hold deg flytende!"). 2) Throw - Kast redningsbøye, tau eller annet flytende. 3) Reach - Strekk ut gren/padleåre fra land (ligg ned for balanse). 4) Wade - Vass ut hvis trygt, maks til livet, hold fast i noe. 5) Row - Bruk båt/fartøy, la personen holde i baugen. 6) Swim/Tow - Kun som siste utvei hvis du er sterk svømmer, tilnærm bakfra, ta med flytehjelp. VIKTIG: Ring 113 øyeblikkelig, sikre egen sikkerhet først, aldri tilnærm forfra, iverksett HLR ved bevisstløshet.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-2-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Du skal lære en venn å svømme brystsvømming. Forklar armtak, beinpark og timing.',
        solution: 'Brystsvømming teknikk: **Armtak**: "Ut, ned, inn, fram" - strekk armene fram, vend hender utover, skyv vann ut til sidene med høy albue, trekk hendene ned og inn mot brystet, skyv dem framover igjen. **Beinpark**: "Bøy, roter, spark, stram" - bøy knær (hæler mot rumpa), roter føttene utover som frosk, spark kraftig ut og sammen, stram bein rett bak. **Timing**: "Pull, breathe, kick, glide" - armtak først, løft hodet og pust når armene trekker, beinpark når armene skyves fram, gli med strake armer og ben. Vanlige feil å unngå: Beinpark for bred, hode over vann hele tiden, armtak og beinpark samtidig. Progresjon: Øv armtak og beinpark hver for seg først, deretter kombinér med fokus på timing.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-2-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-2-ex6',
        number: '6',
        type: 'classic',
        task: 'Hva er de viktigste forskjellene på drukningsforebygging for barn vs. voksne?',
        solution: 'Drukningsforebygging for barn vs. voksne: **For barn**: 1) Aktivt tilsyn er kritisk - voksent oppsyn ALLTID, barn drukner stille og raskt. 2) Fysiske barrierer - gjerder rundt basseng/dam, barnelås på dører. 3) Flytevest på båt og ved vann. 4) Tidlig svømmeopplæring (fra 4-5 år). 5) Lær "stopp ved vannkanten"-regel. 6) Tøm bøtter/basseng etter bruk. **For voksne**: 1) Alkohol er hovedårsak (50% av drukningsulykker) - aldri drikk og svøm. 2) Overvurdering av egne ferdigheter - kjenn grensene. 3) Aldri svøm alene. 4) Vær oppmerksom på strømninger. 5) Bruk flytevest på båt. Felles: Lære god svømmeteknikk, kjenne til livredning, respektere vannet.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-4-2-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-2-ex7',
        number: '7',
        type: 'classic',
        task: 'Sammenlign svømming i basseng og åpent vann. Hvilke utfordringer møter du i åpent vann?',
        solution: 'Utfordringer i åpent vann vs. basseng: **Temperatur**: Åpent vann kaldere (ofte under 20°C), kan gi kuldestivhet, kramper, hypotermi. Løsning: Gradvis tilvenn, bruk våddrakt. **Sikt**: Begrenset/ingen sikt, ser ikke bunnen. Løsning: Løft hodet regelmessig for navigering. **Bølger**: Skaper motstand, gjør pust vanskeligere, kan slå vann i ansiktet. Løsning: Pust til siden der det er roligere, tid pust mellom bølger. **Strøm**: Kan drive av kurs, gjøre det tungt å svømme. Løsning: Svøm parallelt med land hvis fanget i strøm. **Ingen vegg**: Kan ikke hvile eller vende. Løsning: Tren utholdenhet, lær å flyte på rygg for hvile. **Psykologi**: Mer skremmende, dypt, mørkt. Løsning: Start i gruntvannet, øk distanse gradvis, svøm aldri alene. Forberedelse: Tren i kaldt vann gradvis, øv navigering, bruk sikkerhetsbøye.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-2-exercise8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-2-ex8',
        number: '8',
        type: 'classic',
        task: 'Lag en 8-ukers treningsplan for å gå fra å svømme 400m til 1000m crawl kontinuerlig.',
        solution: '8-ukers treningsplan fra 400m til 1000m crawl: **Uke 1-2**: 10x50m crawl, 30 sek pause (500m total). Fokus: Teknikk, jevnt tempo. 3 økter/uke. **Uke 3-4**: 5x100m crawl, 30 sek pause (500m total) + 5x50m teknikk. Øk til 2x250m mot slutten. **Uke 5-6**: 4x200m, 45 sek pause (800m total) + 200m teknikk. Introduser 1x400m i en økt. **Uke 7**: 2x400m, 60 sek pause + 200m teknikk. Øk til 1x600m + 1x300m. **Uke 8**: 1x800m + 200m i første økt. Test 1000m kontinuerlig i andre økt. Hver økt: 200m oppvarming (rolig), hovedøkt, 100-200m nedkoling. Tips: Fokuser på jevnt tempo, tren teknikk i rolige økter, øk distanse 10% per uke, hvil 1-2 dager mellom harde økter. Mål: Gjennomføre 1000m på under 25 min.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_4_3: TextbookChapter = {
  id: 'kroppsoving-vg1-4-3',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '4.3',
  title: 'Turn og akrobatikk',
  description: 'Lær grunnleggende turnelementer, akrobatiske bevegelser og prinsipper for sikker progresjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Utføre grunnleggende turnelementer trygt og med riktig teknikk',
    'Demonstrere akrobatiske bevegelser med kontroll',
    'Vurdere risiko og progresjon i turn og akrobatikk',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-4-3-intro',
      type: 'text',
      content: `# Turn og akrobatikk

Turn kombinerer styrke, fleksibilitet, balanse og koordinasjon. Grunnelementene er nyttige i mange idretter og bidrar til god kroppsbevissthet. Sikkerhet er ekstremt viktig - feil teknikk kan føre til alvorlige skader. Lær alltid nye elementer under veiledning med matter.`,
    },
    {
      id: 'kroppsoving-vg1-4-3-def1',
      type: 'definition',
      title: 'Kroppsspenning',
      content: 'Kroppsspenning er evnen til å holde kroppen stabil ved å aktivere core-muskulaturen. God kroppsspenning er fundamentalt for all turn og beskytter ryggen mot skader.',
    },
    {
      id: 'kroppsoving-vg1-4-3-def2',
      type: 'definition',
      title: 'Hjul (cartwheel)',
      content: 'Hjul er en grunnleggende akrobatisk bevegelse der kroppen roterer sidelengs over hendene. Det er ofte det første akrobatiske elementet man lærer.',
    },
    {
      id: 'kroppsoving-vg1-4-3-tip1',
      type: 'tip',
      title: 'Sikkerhetsregler i turn',
      content: `- Alltid bruk matter
- Varm opp 10-15 min før
- Lær grunnelementene først
- Ha alltid spotter når du lærer nytt
- Lær å falle trygt
- Kjenn grensene dine`,
    },
    {
      id: 'kroppsoving-vg1-4-3-example1',
      type: 'example',
      title: 'Trygg progresjon for hjul',
      problem: 'Hvordan lærer man hjul trygt?',
      solution: 'Progresjon: 1) Øv hånd-hånd-fot-fot-mønster på linje, 2) Øv med støtte fra venn, 3) Øv nedover skråplan, 4) Øv på flat mark. Tar typisk 6-8 uker med 2-3 økter per uke.',
    },
    {
      id: 'kroppsoving-vg1-4-3-def3',
      type: 'definition',
      title: 'Håndstående',
      content: 'Håndstående er en balanseposisjon der kroppen er vertikal med hendene som base. Krever god kroppsspenning, balanse og skulderfleksibilitet. Grunnleggende ferdighet i turn.',
    },
    {
      id: 'kroppsoving-vg1-4-3-def4',
      type: 'definition',
      title: 'Bro',
      content: 'Bro er en fleksibilitetsposisjon der kroppen bøyes bakover med støtte på hender og føtter. Utvikler ryggfleksibilitet og skuldermobilitet. Viktig: Varm opp godt først.',
    },
    {
      id: 'kroppsoving-vg1-4-3-def5',
      type: 'definition',
      title: 'Spotter',
      content: 'Spotter er en person som sikrer en turner under utførelse av elementer. Spotterens rolle er å forhindre skader ved feil, gi støtte, og gi trygghet. Krever opplæring.',
    },
    {
      id: 'kroppsoving-vg1-4-3-def6',
      type: 'definition',
      title: 'Salto',
      content: 'Salto er en full rotasjon av kroppen rundt tverraksen mens man er i luften. Ekstremt risikabelt - skal KUN læres under profesjonell veiledning med riktig utstyr.',
    },
    {
      id: 'kroppsoving-vg1-4-3-text-grunnleggende',
      type: 'text',
      content: `## Grunnleggende turnelementer

### Statiske elementer

**Håndstående**:
Håndstående er grunnleggende for turn. Krever styrke, balanse og teknikk.

**Progresjon**:
1. **Veggstøtte**: Spark opp mot vegg, hold 10-30 sek. Fokus på rak kropp og spenning.
2. **Venn som spotter**: Spark opp, venn holder beina. Øv balanse.
3. **Med liten hjelp**: Spotter holder lett, du finner balansen.
4. **Fri håndstående**: Mål 10 sekunder.

**Teknikk**:
- Hender skulderbredde fra hverandre
- Fingre spredd for balanse
- Armer helt strake, ører mellom armene
- Rak kropp, stram core
- Blikk mellom hendene
- Balansér med fingrene og håndleddene

**Vanlige feil**:
- "Banankropp" (hengerygg) - aktiver core
- Bøyde armer - strekk helt ut
- Hodet for langt fram - hold nøytralt

**Bro**:
Bro utvikler rygg- og skulderfleksibilitet.

**Progresjon**:
1. **Fra liggende**: Ligg på rygg, sett hender ved ørene, press opp.
2. **Fra stående** (avansert): Bøy bakover gradvis, sett hender ned.

**Teknikk**:
- Hender tett ved føttene
- Strekk armene
- Press hoften opp
- Hold 10-30 sekunder

**Sikkerhetsvarsel**: Aldri tving deg i bro. Gradvis progresjon over uker/måneder.

### Dynamiske elementer

**Hjul (cartwheel)**:
Hjul er ofte første akrobatiske element.

**Progresjon**:
1. **Hånd-hånd-fot-fot-mønster**: Øv på linje på gulvet.
2. **Med spotter**: Venn holder i hoften, støtter rotasjonen.
3. **Nedover skråplan**: Tyngdekraft hjelper.
4. **På flat mark**: Målet!

**Teknikk**:
- Start sidelengs, armer opp
- Sett første hånd ned, spark beinet over
- Sett andre hånd ned, førstebenet følger
- Land på føttene, sidelengs
- Blikk følger hendene

**Tips**: Tenk på hjulet som en rett linje. Hender og føtter skal lande på samme linje.

**Rulling fremover**:
Rulling fremover er trygg måte å øve rotasjon.

**Teknikk**:
1. Start i huket posisjon
2. Sett hender på matta
3. Tøy hodet inn (se på magen)
4. Rull over nakken (IKKE toppen av hodet)
5. Hold knærne inn mot brystet
6. Kom opp til stående

**Sikkerhet**: Rull på nakken/skulderbladene, ALDRI på toppen av hodet. Kan gi nakkeskade.

**Rulling bakover**:
Mer krevende enn fremover.

**Teknikk**:
1. Start sittende
2. Rull bakover, ta hendene ved ørene (fingre mot skuldrene)
3. Rull over nakken, press med hendene
4. Kom opp til stående

**Håndstående-fremoverrulle**:
Kombinasjon av håndstående og rulling.

**Progresjon**:
1. Spark til håndstående
2. Bøy armene kontrollert
3. Tøy hodet inn
4. Rull over nakken
5. Kom opp til stående

Krever god kroppsspenning og kontroll.`,
    },
    {
      id: 'kroppsoving-vg1-4-3-example2',
      type: 'example',
      title: 'Progresjon for håndstående',
      problem: 'En elev vil lære håndstående, men har aldri prøvd før. Lag en 6-ukers treningsplan.',
      solution: 'Treningsplan for håndstående: **Uke 1-2**: Veggstående - spark opp til vegg, hold 3x20 sek, 3x per økt. Fokus på rak kropp og spenning. Tre opp skulderstyrke (pike push-ups). **Uke 3**: Øk til 3x30 sek veggstående. Øv fri balanse 5 sek med venn som spotter. **Uke 4**: Veggstående 3x40 sek. Øv spark til håndstående med spotter, hold 10 sek med lett hjelp. **Uke 5**: Reduser hjelp fra spotter. Mål: 5-10 sek fri håndstående. Øv balansekorrigeringer med fingre. **Uke 6**: Konsolider fri håndstående 10+ sek. Øv ulike innspark. Tips: Tren 3x per uke, varm opp godt, film for å analysere teknikk, fokus på kroppsspenning, tålmodighet er nøkkel!',
    },
    {
      id: 'kroppsoving-vg1-4-3-example3',
      type: 'example',
      title: 'Sikkerhet ved turn - scenario',
      problem: 'I en gymtime øver elevene på hjul. En elev sparker for hardt og er i ferd med å falle. Hva skal spotteren gjøre?',
      solution: 'Spotters handling: 1) Grip rundt elevens midje/hofte og støtt rotasjonen. 2) Led eleven trygt til landing på føttene eller kontrollert ned på matter. 3) IKKE grip armer (kan forårsake vridning) eller bein (kan ødelegge rotasjonen). 4) Hold blikket på eleven hele tiden. 5) Stå på siden der beinet kommer ned først. Etter hendelsen: Stopp og snakk med eleven. Hva gikk galt? Analyser: For kraftig spark, dårlig plassering av hendene, mangel på kontroll. Tiltak: Øv innsparket mer kontrollert, fokuser på teknikk ikke kraft. Spotteren gjorde riktig - forhindret fall/skade. Læring: Alltid ha spotter til nye/usikre elementer.',
    },
    {
      id: 'kroppsoving-vg1-4-3-tip2',
      type: 'tip',
      title: 'Oppvarming før turn',
      content: `10-15 minutters oppvarming er PÅKREVD:
- 5 min lett løping/hopping
- Dynamisk tøying: armsvinger, beinsvinger, torsorotasjon
- Leddmobilisering: håndledd, ankler, skuldre
- Progresjon: Start lette elementer før vanskelige
- Spesifikk oppvarming for elementet du skal øve`,
    },
    {
      id: 'kroppsoving-vg1-4-3-tip3',
      type: 'tip',
      title: 'Hvordan falle trygt i turn',
      content: `- Rull deg sammen til ball
- Fall på side/rygg, IKKE stikk ut hendene
- Fordel kraften over større område
- Tøy hodet inn (beskytt nakken)
- Aldri land stivt
- Øv falltrening på myk matte`,
    },
    {
      id: 'kroppsoving-vg1-4-3-example4',
      type: 'example',
      title: 'Kroppsspenning i praksis',
      problem: 'Forklar hvorfor kroppsspenning er viktig i turn, og gi øvelser for å utvikle det.',
      solution: 'Kroppsspenning i turn: **Hvorfor viktig**: 1) Gir kontroll over kroppen i bevegelse/stillinger. 2) Beskytter ryggen mot skader. 3) Gjør bevegelser effektive og estetiske. 4) Nødvendig for balanseposisjoner som håndstående. 5) Forhindrer "banankropp" og tap av posisjon. **Øvelser for å utvikle kroppsspenning**: 1) **Plank**: 3x30-60 sek, fokus på rak linje fra hodet til hæler. 2) **Hollow body hold**: Ligg på rygg, løft skulderblad og bein fra gulv, armer over hodet, 3x20 sek. 3) **Båt (V-sit)**: Sitt i V-form, 3x15-30 sek. 4) **Superman**: Ligg på magen, løft armer og bein, 3x15-20 sek. 5) **Veggstående**: Hold rak kropp mot vegg, 3x30 sek. Progresjon: Øk tid gradvis, kombiner øvelser, integrer i all turn.',
    },
    {
      id: 'kroppsoving-vg1-4-3-text-avansert',
      type: 'text',
      content: `## Akrobatiske progresjonsprinsipper

### Sikkerhetsprinsippet

**Alltid før nye elementer**:
1. **Forutsetninger**: Har du fysikk og grunnferdigheter?
2. **Progresjon**: Bygg gradvis opp via enklere steg
3. **Utstyr**: Riktige matter, eventuelt grube
4. **Veiledning**: Instruktør eller erfaren spotter
5. **Miljø**: Rolig, konsentrert, ingen press

**Aldri gjør**:
- Hopp over steg i progresjon
- Øv når du er sliten
- Øv uten matter
- Øv alene på nye elementer
- La deg presse av andre

### Hvorfor turn er bra for deg

**Fysiske fordeler**:
- **Styrke**: Hele kroppen, spesielt core og skulder
- **Fleksibilitet**: Alle ledd, spesielt rygg og skuldre
- **Koordinasjon**: Kroppsbevissthet, timing
- **Balanse**: Vestibulær trening, propriosepsjon
- **Kondisjon**: Anaerob utholdenhet

**Mentale fordeler**:
- **Selvtillit**: Mestre utfordrende elementer
- **Målsetting**: Tydelig progresjon
- **Fokus**: Krever konsentrasjon
- **Overvinnelse av frykt**: Gradvis eksponering

**Overføringsverdi**:
Turn gir ferdigheter som overføres til mange idretter: akrobatikk i ski/snowboard, balanse i klatring, kroppskontroll i ball-idretter, falltrening i kampsport.

### Avanserte elementer (kun med instruktør)

**Rundpult (round-off)**:
Som hjul, men lander med begge føtter samtidig, snus rundt. Grunnlag for flickflack og salto.

**Flickflack (back handspring)**:
Hopp bakover, armer tilbake, land på hendene, spark beina over, land på føttene. EKSTREMT risikabelt uten instruktør. Nakkeskade-fare.

**Salto**:
Full rotasjon i luften. Mange varianter. KUN med profesjonell veiledning, grube/utstyr. Risiko for alvorlige nakke-/ryggskader ved feil.

**Viktig**: Disse elementene skal ALDRI øves uten erfaren instruktør og riktig utstyr. Risikoen for livstruende skader er høy.`,
    },
    {
      id: 'kroppsoving-vg1-4-3-example5',
      type: 'example',
      title: 'Turning som trening - ukesplan',
      problem: 'Du vil bruke turn som treningsform 2x per uke. Lag en variert ukesplan.',
      solution: 'Turntrening - ukesplan: **Mandag (Styrke og statiske elementer)**: Oppvarming 10 min. Øvelser: Håndstående mot vegg 3x30 sek, Pike push-ups 3x8, Hollow body hold 3x30 sek, L-sit progresjon 3x15 sek, Bro 3x20 sek, Plank varianter 3x45 sek. Nedkoling og tøying 10 min. **Torsdag (Dynamiske elementer og akrobatikk)**: Oppvarming 10 min. Øvelser: Rulling fremover og bakover 5x, Hjul begge retninger 5x, Håndstående-fremoverrulle 5x (eller progresjon), Hopp og landinger 10x, Kombinasjoner av elementer, Sprett/tumbling 10 min (etter evne). Falltrening 5 min. Nedkoling 10 min. Progresjon: Øk sets/tid hver 2. uke, introduser nye elementer gradvis, kombiner elementer når grunnleggende er solid. Resultat: Økt styrke, fleksibilitet, koordinasjon, morsomme ferdigheter!',
    },
    {
      id: 'kroppsoving-vg1-4-3-tip4',
      type: 'tip',
      title: 'Utstyr du trenger for turn',
      content: `- Myke turnmatter (obligatorisk)
- Svettebukser/tights (bevegelsesfrihet)
- Magnesia for grep (valgfritt)
- Håndleddsbeskyttere ved mye håndstående (valgfritt)
- Matter i ulike høyder for progresjon
- Vegg for støtte i begynnelsen
- Speilvegg for å se teknikk (ideelt)`,
    },
    {
      id: 'kroppsoving-vg1-4-3-text-tilpasning',
      type: 'text',
      content: `## Tilpasning for ulike forutsetninger

Turn kan tilpasses for ulike nivåer og forutsetninger:

**Tilpasning etter nivå:**
- **Nybegynnere**: Start med statiske elementer (bro, støtte, balansering), bruk ekstra matter, alltid ha spotter
- **Redde/usikre**: Øv på bakken først, bruk lave redskaper, ekstra sikring, positiv forsterkning
- **Avanserte**: Introduser vanskeligere elementer, kombinasjoner, øk høyde gradvis

**Tilpasning ved begrensninger:**
- **Bevegelsesbegrensninger**: Fokus på kroppsspenning og balanse, tilpass elementer (f.eks. modifisert bro)
- **Skade**: Unngå belastning av skadet område, fokus på andre elementer eller alternativ rolle
- **Angst for høyder/høy fart**: Start lavt, gradvis progresjon, aldri press

**Alternative roller:**
- **Spotter**: Sikre andre under øvelser (krever opplæring)
- **Observatør**: Gi tilbakemelding på teknikk
- **Sikkerhetsvakt**: Passe på at matter er på plass
- **Instruktør**: Veilede andre i grunnleggende elementer`,
    },
    {
      id: 'kroppsoving-vg1-4-3-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er kroppsspenning og hvorfor er det viktig for turn?',
        solution: 'Kroppsspenning er evnen til å holde kroppen stabil ved å aktivere core. Det gir kontroll, beskytter ryggen, gjør bevegelser effektive, og er nødvendig for balanse i stillinger som håndstående.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-3-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-3-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilke elementer skal ALDRI øves uten profesjonell veiledning?',
        solution: 'Salto, flickflack og rundpult med salto skal ALDRI øves uten instruktør. Ekstremt høy risiko for nakke-/ryggskader. Krever perfekt teknikk og spesialutstyr.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-3-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Beskriv en trygg progresjon for å lære håndstående fra null til å holde det i 10 sekunder.',
        solution: 'Progresjon for håndstående: **Steg 1-2 (uke 1-2)**: Veggstående - spark opp til vegg, hold 3x20 sek. Fokus: Rak kropp, stram core, armer helt strake. Bygg skulderstyrke med pike push-ups. **Steg 3 (uke 3)**: Øk til 3x30 sek veggstående. Introduser fri balanse 5 sek med spotter. Øv spark til håndstående. **Steg 4 (uke 4)**: 3x40 sek veggstående. Øv håndstående med spotter som holder lett, 10 sek. Fokuser på balansekorrigeringer med fingre/håndledd. **Steg 5 (uke 5)**: Reduser hjelp fra spotter gradvis. Mål: 5-10 sek fri håndstående. Øv ulike innspark (scissor kick, tuck press). **Steg 6 (uke 6+)**: Konsolider 10+ sek fri håndstående. Øv gange på hender, press til håndstående. Nøkkel: Tålmodighet, konsentrasjon, kroppsspenning, konsistent trening 3x per uke.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-3-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar detaljert hvordan en spotter skal sikre en elev som øver på hjul. Hva er spotter sin rolle?',
        solution: 'Spotters rolle ved hjul: **Før øvelsen**: 1) Plassering - stå på siden der elevens første ben kommer ned. 2) Instruksjon - gi tydelige tips til eleven. 3) Klargjør - ha hendene klar ved elevens hofte/midje. **Under øvelsen**: 1) Grip rundt hoften/midjen når eleven roterer. 2) Støtt rotasjonen, led eleven over. 3) Sikre trygg landing på føttene. 4) IKKE grip armer (vridning) eller bein (forstyrrer rotasjon). 5) Hold blikket på eleven hele veien. **Etter øvelsen**: 1) Gi tilbakemelding på teknikk. 2) Juster for neste forsøk. **Spotterens ansvar**: Forhindre fall/skade, gi trygghet, hjelpe eleven lære riktig teknikk. **Viktig**: Spotter må selv ha lært spotting-teknikk. Vær alltid fokusert og klar. Kommunikasjon med eleven er nøkkelen.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-3-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-3-ex5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er kroppsspenning viktig i turn, og hvilke øvelser kan utvikle god kroppsspenning?',
        solution: 'Kroppsspenning i turn - viktighet og øvelser: **Hvorfor viktig**: 1) Kontroll - gir stabilitet og kontroll over kroppen i stillinger og bevegelser. 2) Skadeforfører - beskytter ryggen mot overstrekning og skader. 3) Effektivitet - gjør bevegelser kraftfulle og estetiske. 4) Balanse - nødvendig i posisjoner som håndstående. 5) Teknikk - forhindrer "banankropp" og posisjonsfeil. **Øvelser for kroppsspenning**: 1) **Plank**: 3x30-60 sek, rak linje fra hode til hæl. 2) **Hollow body hold**: Ligg på rygg, løft skulderblad og bein, armer over hodet, 3x20-30 sek. 3) **Båt/V-sit**: Sitt i V-form, hold 3x20 sek. 4) **Superman**: På magen, løft armer og bein, 3x15-20 sek. 5) **Side plank**: 3x30 sek hver side. 6) **Veggstående**: Hold perfekt rak kropp, 3x30 sek. Progresjon: Øk tid, kombiner øvelser, integrer i all turntrening.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-4-3-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-3-ex6',
        number: '6',
        type: 'classic',
        task: 'Hvilke elementer skal ALDRI øves uten profesjonell instruktør, og hvorfor?',
        solution: 'Elementer som krever profesjonell instruktør: **1. Salto (alle varianter)**: Full rotasjon i luften. Ekstremt høy risiko for nakke-/ryggskader ved feil landing. Krever perfekt teknikk, timing, og spesialutstyr (grube/airtrack). Feil kan være livstruende. **2. Flickflack (back handspring)**: Hopp bakover til håndstående og over. Risiko for å lande på hodet/nakke hvis rotasjon mislykkes. Krever styrke, teknikk, og erfaren spotter. **3. Rundpult med salto**: Kombinasjon av rundpult og salto. Svært høy fart og rotasjon, ekstremt risikabelt. **4. Twists og skruer**: Rotasjon rundt lengdeaksen i luften. Komplekse bevegelser, lett å miste orientering. **Hvorfor profesjonell veiledning**: 1) Riktig progresjon - bygge forutsetninger. 2) Spotting-teknikk - sikre trygt. 3) Utstyr - grube, airtrack, spesialmatter. 4) Teknikk - små feil kan gi alvorlige skader. 5) Mental forberedelse - håndtere frykt trygt. Disse elementene er ALDRI verdt risikoen uten ekspertveiledning.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-3-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-3-ex7',
        number: '7',
        type: 'classic',
        task: 'Lag en treningsøkt (45 min) for turn som inkluderer oppvarming, hoveddel og nedkoling. Målgruppe: Nybegynnere.',
        solution: 'Turnøkt for nybegynnere (45 min): **Oppvarming (10 min)**: - 3 min lett løping/hopping i sirkel. - 3 min dynamisk tøying: armsvinger, beinsvinger, torsorotasjon, huking. - 2 min leddmobilisering: håndledd-sirkler, ankelrotasjon, skulderruller. - 2 min lette elementer: rulling fremover 5x, bro-posisjon 2x15 sek. **Hoveddel (30 min)**: - **Kroppsspenning** (8 min): Plank 3x30 sek, Hollow body 3x20 sek, Båt 3x15 sek. Pause 30 sek mellom. - **Håndstående-progresjon** (10 min): Veggstående 3x20 sek, Spark til vegg 10x, Pike push-ups 3x5. - **Rulling** (7 min): Rulling frem 10x, Rulling tilbake 10x, Kombinasjon 5x. - **Hjul-progresjon** (5 min): Hånd-hånd-fot-fot mønster 10x, Hjul med spotter 5x hver retning. **Nedkoling (5 min)**: - 2 min lett gange/bevegelse. - 3 min statisk tøying: hamstrings, quadriceps, skuldre, rygg. Fokus: Teknikk, sikkerhet, positiv atmosfære. Alle skal mestre noe!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_4_4: TextbookChapter = {
  id: 'kroppsoving-vg1-4-4',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '4.4',
  title: 'Kampsport og selvforsvar',
  description: 'Lær grunnprinsipper i kampsport, selvforsvarsteknikker og betydningen av respekt og selvkontroll.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Demonstrere grunnleggende kampsportteknikker',
    'Anvende prinsipper for selvforsvar',
    'Reflektere over respekt, kontroll og etikk i kampsport',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-4-4-intro',
      type: 'text',
      content: `# Kampsport og selvforsvar

Kampsport handler om mye mer enn å slåss. Det handler om disiplin, respekt, selvkontroll og personlig utvikling. Gjennom kampsport lærer du å kjenne kroppen, mestre teknikker, og bygge selvtillit. Selvforsvar handler om å beskytte seg selv i farlige situasjoner - men best selvforsvar er å unngå farlige situasjoner i utgangspunktet.`,
    },
    {
      id: 'kroppsoving-vg1-4-4-def1',
      type: 'definition',
      title: 'Kampsport',
      content: 'Kampsport er systematisert trening i kampferdigheter kombinert med filosofi om respekt, disiplin og personlig utvikling. Eksempler: karate, judo, taekwondo, boksing, jiu-jitsu.',
    },
    {
      id: 'kroppsoving-vg1-4-4-def2',
      type: 'definition',
      title: 'Selvforsvar',
      content: 'Selvforsvar er teknikker og strategier for å beskytte seg mot fysisk angrep. Prinsipp: Unngå, avvær, flukt, forsvar (i den rekkefølgen). Målet er alltid å komme seg trygt unna.',
    },
    {
      id: 'kroppsoving-vg1-4-4-tip1',
      type: 'tip',
      title: 'Grunnprinsipper for selvforsvar',
      content: `1. Unngå farlige situasjoner
2. Vær oppmerksom på omgivelsene
3. Stol på magefølelsen
4. Flukt er beste forsvar
5. Rop om hjelp
6. Forsvar kun hvis nødvendig`,
    },
    {
      id: 'kroppsoving-vg1-4-4-example1',
      type: 'example',
      title: 'Respekt i kampsport',
      problem: 'Hvorfor er respekt så viktig i kampsport?',
      solution: 'Respekt forhindrer skader (kontrollerte teknikker), bygger trygt treningsmiljø, lærer verdier utover teknikker, og sikrer at ferdigheter brukes ansvarlig. Du hilser før/etter kamp, respekterer instruksjoner, og kontrollerer styrken.',
    },
    {
      id: 'kroppsoving-vg1-4-4-def3',
      type: 'definition',
      title: 'Kata',
      content: 'Kata er en koreografert serie med teknikker som utføres alene mot imaginære motstandere. Brukes i mange kampsporter (karate, taekwondo, jiu-jitsu) for å øve teknikk, koordinasjon og konseptforståelse.',
    },
    {
      id: 'kroppsoving-vg1-4-4-def4',
      type: 'definition',
      title: 'Sparring',
      content: 'Sparring er kontrollert kamp mellom to personer med avtalt intensitet og regler. Utvikler timing, avstand, reaksjon og anvendelse av teknikker. Krever respekt og selvkontroll.',
    },
    {
      id: 'kroppsoving-vg1-4-4-def5',
      type: 'definition',
      title: 'Dojo/Dojang',
      content: 'Dojo (japansk) eller dojang (koreansk) er treningsrommet for kampsport. Et hellig sted der respekt, disiplin og læring står i sentrum. Man hilser når man går inn og ut.',
    },
    {
      id: 'kroppsoving-vg1-4-4-def6',
      type: 'definition',
      title: 'Beltegradering',
      content: 'Beltegradering er rangsystem i kampsport som viser utøverens nivå. Vanligvis fra hvitt (nybegynner) via farger til svart belte (ekspert). Krever tester og tid.',
    },
    {
      id: 'kroppsoving-vg1-4-4-text-kampsportarter',
      type: 'text',
      content: `## Ulike kampsportarter

### Slagbaserte kampsporter

**Karate**:
Japansk kampkunst med fokus på slag, spark og blokkeringer. Utviklet på Okinawa. Mange stilarter (Shotokan, Goju-ryu, etc.).

**Teknikker**:
- Slag: Tsuki (straight punch), Oi-zuki (lunge punch)
- Spark: Mae-geri (front kick), Mawashi-geri (roundhouse kick)
- Blokkeringer: Age-uke (rising block), Gedan-barai (low block)

**Filosofi**: Karate-do - veien til det tomme selv. Selvutvikling, respekt, ydmykhet.

**Taekwondo**:
Koreansk kampkunst med fokus på spark, spesielt høye spark. Olympisk gren.

**Teknikker**:
- Spark: Ap-chagi (front kick), Dollyo-chagi (roundhouse), Yop-chagi (side kick)
- Slag: Mindre fokus enn karate
- Hopp-spark: Spektakulære høye spark

**Filosofi**: Fem prinsipper - høflighet, integritet, utholdenhet, selvkontroll, uknekelig ånd.

**Boksing**:
Kun slag med knyttnever, olympisk sport. Fokus på footwork, timing, kondisjon.

**Teknikker**:
- Jab, Cross, Hook, Uppercut
- Vektforflytning og defensiv
- Høy fysisk intensitet

**Kickboksing**:
Kombinasjon av boksing og spark. Flere varianter (K-1, Muay Thai).

### Kastbaserte kampsporter

**Judo**:
Japansk kampkunst med fokus på kast, grep og kontroll. Olympisk gren.

**Teknikker**:
- Kast: O-goshi (hip throw), Seoi-nage (shoulder throw)
- Bakkearbeid: Pinning, kveletak, leddbøyinger
- Bruker motstanders kraft mot dem

**Filosofi**: Gjensidig velferd og nytte, effektiv bruk av energi.

**Bryting**:
En av verdens eldste kampsporter. Fokus på takedowns, kontroll, pinning.

**Teknikker**:
- Takedowns, tackles
- Kontroll på bakken
- To hovedvarianter: Gresk-romersk (kun overkropp) og Fri (hele kroppen)

### Grappling (bakkebaserte)

**Jiu-jitsu** (spesielt Brazilian Jiu-Jitsu - BJJ):
Fokus på bakkekamp, posisjonering, kveletak og leddbøyinger.

**Filosofi**: "Teknikk over styrke" - en mindre person kan kontrollere en større.

**Teknikker**:
- Posisjoner: Guard, Mount, Back control
- Kveletak: Rear naked choke, Triangle
- Leddbøyinger: Armbar, Kimura

### MMA (Mixed Martial Arts)

Kombinerer elementer fra flere kampsporter (boksing, kickboksing, bryting, jiu-jitsu). Fokus på å være komplett fighter.`,
    },
    {
      id: 'kroppsoving-vg1-4-4-text-selvforsvar-praksis',
      type: 'text',
      content: `## Selvforsvar i praksis

### De fire pilarene

**1. Unngå (Prevention)**:
Den beste selvforsvaret er å ikke komme i farlige situasjoner.

- Vær oppmerksom på omgivelsene (ikke mobil hele tiden)
- Unngå dårlig opplyste områder alene om kvelden
- Stol på magefølelsen - hvis noe føles galt, det er det ofte
- Hold avstand til mistenkelige personer
- Ikke vis fram verdisaker
- Reis i gruppe når mulig

**2. Avvær (De-escalation)**:
Bruk ord for å avverge situasjonen.

- Snakk rolig og bestemt
- Hold avstand (minst 2 meters "reaktiv gap")
- Kroppsspråk: Vær klar, ikke aggressiv eller svak
- "Jeg vil ikke ha problemer"
- Gi rom for at personen kan trekke seg tilbake uten å miste ansikt
- Kjøp tid - politiet kan komme, andre kan hjelpe

**3. Flukt (Escape)**:
Hvis situasjonen eskalerer, rømmen er best.

- Rop høyt: "BRANN!" eller "HJELP!"
- Løp mot mennesker/lys/butikker
- Kast noe for å forsinke angriper (veske, jakke)
- Ikke vær heltemot - livet er viktigere enn stolthet

**4. Forsvar (Physical defense)**:
KUN som siste utvei når alt annet feiler.

- Mål: Skape åpning for flukt, IKKE "vinne"
- Fokuser på sårbare punkter: Øyne, hals, knær, skrittområde
- Bruk det du har: Nøkler, paraply, stein
- Rop hele tiden
- Så snart det er åpning - LØP!

### Grunnleggende selvforsvarstek nikker

**Hvis grepet i håndledd**:
1. Vri håndleddet mot angripers tommel (svakeste punkt)
2. Rykk kraftig ut
3. Løp

**Hvis grepet forfra**:
1. Dytt ansiktet (håndflate i ansikt/nese)
2. Spark til skrittområde eller knær
3. Løp

**Hvis grepet bakfra**:
1. Senke tyngdepunktet (bredere stance)
2. Albue bakover til ribbein/mage
3. Trappe på fot
4. Løp

**Viktig**:
- Dette er forenklet. Reell trening anbefales sterkt.
- Adrenalin vil gjøre deg stiv - øv til bevegelsene er automatiske
- 1-2 enkle teknikker øvd 1000 ganger er bedre enn 50 teknikker øvd én gang

### Juridiske aspekter

**Nødverge** (Straffeloven §18):
Du har rett til å forsvare deg selv eller andre mot pågående eller nært forestående angrep.

**Krav**:
1. Angrep må være pågående eller umiddelbart forestående
2. Forsvaret må være nødvendig
3. Forsvaret må ikke være uforholdsmessig

**Eksempel på lovlig nødverge**:
Noen angriper deg, du dytte person vekk og løper = OK

**Eksempel på ulovlig**:
Noen angriper deg, du slår personen ned, deretter fortsetter å slå mens de ligger = IKKE OK

**Viktig**: Når faren er over, slutter retten til nødverge. Gjengjeldelse/hevn er ikke lovlig.`,
    },
    {
      id: 'kroppsoving-vg1-4-4-example2',
      type: 'example',
      title: 'Selvforsvarssituasjon - avvergning',
      problem: 'Du går alene hjem fra trening kl 22. En person du ikke kjenner begynner å følge etter deg og ber deg om penger. Hva gjør du?',
      solution: 'Handling steg-for-steg: **1. Vurdering**: Situasjonen er potensielt farlig. Stol på magefølelsen. **2. Avstand**: Snu deg, hold 3-4 meters avstand. Kroppsspråk: Bestemt men ikke aggressiv. **3. Verbal avvergning**: Si høyt og tydelig: "Jeg har ikke penger. La meg være i fred." Snakk rolig men bestemt. **4. Flukt-forberedelse**: Identifiser fluktveier. Se etter butikker/mennesker. Ha telefon klar (men ikke ta opp ennå - bruk om nødvendig). **5. Eskalering**: Hvis person kommer nærmere eller blir aggressiv: Rop høyt "GÅ VEKK! HJELP!" - få andres oppmerksomhet. **6. Flukt**: Løp mot mennesker/lys/åpen butikk. Ring politiet (112). **7. Siste utvei**: Kun hvis grepet/angrepet og flukt umulig - forsvar deg (dytt, spark) og løp første mulighet. **Viktig**: Ingen penger er verdt risiko for skade. Gi fra deg verdisaker om truet. Rapporter til politiet etterpå.',
    },
    {
      id: 'kroppsoving-vg1-4-4-example3',
      type: 'example',
      title: 'Kampsport som livsfilosofi',
      problem: 'Hvordan kan kampsport bidra til personlig utvikling utover fysiske ferdigheter?',
      solution: 'Kampsport for personlig utvikling: **Disiplin**: Møte opp til trening regelmessig, følge instruksjoner, øve teknikker tusenvis av ganger lærer disiplin som overføres til skole/jobb/liv. **Respekt**: Hilse instruktør/medutøvere, respektere regler, vise ydmykhet bygger respekt for andre og seg selv. **Selvkontroll**: Lære å kontrollere aggresjon, bruke kraft ansvarlig, ikke misbruke ferdigheter utvikler sterk selvkontroll. **Målsetting**: Graderte belter gir tydelige mål, lærer viktigheten av langsiktig innsats og tålmodighet. **Ov ervinnelse av frykt**: Møte sparring, tester, konkurranse lærer deg å håndtere frykt og stress. **Selvtillit**: Mestre teknikker og situasjoner bygger reell selvtillit (ikke arroganse). **Fellesskap**: Treningskameratskap, støtte hverandre, lære sammen skaper tilhørighet. **Mental styrke**: Trene når du er sliten, presse grenser, stå opp etter nederlag bygger mentalt. Eksempel: En karateka som trener 10 år lærer mer om tålmodighet, respekt og utholdenhet enn mange lærer på en livstid.',
    },
    {
      id: 'kroppsoving-vg1-4-4-tip2',
      type: 'tip',
      title: 'Trygghetsregler i kampsportsparring',
      content: `- Avtalt intensitet (lett, medium, full) før start
- Alltid beskyttelsesutstyr (tannvern, håndbeskyttere, etc.)
- Respekter "stopp"/"tap" umiddelbart
- Kontrollér kraft - mål er læring, ikke skade
- Kommuniser med partner
- Instruktør tilstede
- Aldri spar når du er sint eller frustrert`,
    },
    {
      id: 'kroppsoving-vg1-4-4-tip3',
      type: 'tip',
      title: 'Hvordan velge kampsport',
      content: `- Prøv flere stilarter (gratisprøvetime)
- Tenk på mål: Selvforsvar? Konkurranse? Trening? Filosofi?
- Slagbasert (karate, taekwondo) vs. grappling (judo, jiu-jitsu)
- Klubbatmosfære viktig - besøk og se på trening
- Instruktørkvalitet - sjekk erfaring
- Kostnader og treningsfrekvens
- Reiseavstand - lettere å være konsistent om kort vei`,
    },
    {
      id: 'kroppsoving-vg1-4-4-example4',
      type: 'example',
      title: 'Nødvergesiuasjon - juridisk vurdering',
      problem: 'Du blir angrepet på gaten. Du dytte angriper vekk, personen faller og slår hodet. Er du strafferettslig ansvarlig?',
      solution: 'Juridisk vurdering av nødverge: **Situasjon**: Angrepet pågående, du forsvarer deg ved å dytte angriper vekk (ikke slag), angriper faller uheldig. **Vurdering etter Straffeloven §18 (Nødverge)**: 1) **Pågående angrep**: Ja - du ble angrepet. 2) **Nødvendig forsvar**: Ja - dytt er rimelig respons for å stoppe angrep. 3) **Forholdsmessig**: Ja - dytt er proporsjonal respons mot angrep (ikke overdreven maktbruk). **Konklusjon**: Dette vil sannsynligvis vurderes som lovlig nødverge. Du brukte minimal nødvendig kraft for å stoppe angrep. At angriper falt uheldig er ikke ditt ansvar når forsvaret var lovlig. **VIKTIG forskjell**: Hvis du etter dytt fortsatte å slå personen mens de lå nede = IKKE nødverge (angrep er over). **Lærdom**: Bruk minimal nødvendig kraft, stopp når faren er over, rømm, ring politiet. Dokumenter skader (foto), vitner, rapporter umiddelbart. Nødverge beskytter deg juridisk når du handler riktig.',
    },
    {
      id: 'kroppsoving-vg1-4-4-text-trening',
      type: 'text',
      content: `## Kampsportstrening i praksis

### En typisk treningsøkt

**1. Hilsen og lineup (2 min)**:
Alle står på linje etter grad (høyeste grad først). Hilsen til instruktør og meduøvere. Setter tonen: Respekt og fokus.

**2. Oppvarming (10-15 min)**:
- Lett løping/skipping
- Dynamisk tøying
- Leddmobilisering
- Teknikk-oppvarming: Lette slag/spark i luften
- Puls opp, kropp klar, skadeforebygging

**3. Teknikk-trening (20-30 min)**:
- Instruktør demonstrerer teknikk
- Elever øver i luften (shadowboxing/kata)
- Øv på pads/poter med partner
- Korrigeringer og repetisjon
- Fokus: Perfeksjonere bevegelse

**4. Anvendelse (15-20 min)**:
- Sparring (kontrollert)
- Situasjonsøvelser
- Kombinasjoner
- Fokus: Timing, avstand, reaksjon

**5. Fysisk trening (10 min)**:
- Styrke: Push-ups, sit-ups, squats
- Kondisjon: Burpees, high knees
- Kampsport er fysisk krevende

**6. Nedkoling og tøying (5-10 min)**:
- Rolig ned-tempo
- Statisk tøying
- Refleksjon over økten

**7. Hilsen og lineup (2 min)**:
Takk instruktør og meduøvere. Setter slutten på økten.

### Progresjon i kampsport

**Hvitt belte (nybegynner)**:
- Lære grunnstillinger (stances)
- Grunnleggende slag og spark
- Blokkering
- Enkle teknikker
- Fokus: Grovmotorikk

**Fargebelter (utøver)**:
- Utvikle teknikker
- Kombinasjoner
- Introduksjon til sparring
- Kata/former
- Fokus: Finmotorikk og timing

**Svart belte (mester - men bare begynnelsen!)**:
- Perfeksjonere teknikker
- Undervise andre
- Dyp forståelse av prinsipper
- Livslang læring
- Fokus: Filosofi og mestring

**Tid**: Svart belte tar typisk 3-7 år med jevnlig trening (3-4x per uke). Det er en livslang reise.`,
    },
    {
      id: 'kroppsoving-vg1-4-4-example5',
      type: 'example',
      title: 'Sammenligning av kampsportarter',
      problem: 'En venn vil begynne med kampsport. Hen liker både slag/spark og grappling. Hvilken stilart anbefaler du og hvorfor?',
      solution: 'Anbefaling basert på preferanse: **Hvis liker både slag/spark OG grappling**: **Anbefaling: MMA (Mixed Martial Arts)** eller **Krav Maga**. **MMA**: Kombinerer boksing/kickboksing (slag/spark) med bryting og jiu-jitsu (grappling). Får det beste fra flere verdener. Treningsform: Teknikk-økter i ulike disipliner + sparring/grappling. Godt for: Komplett fighter, kondisjon, allsidig. Utfordring: Fysisk krevende, lang vei til å være god. **Krav Maga**: Israelk selvforsvar, praktisk og effektivt. Inneholder slag, spark, grappling, våpenforsvar. Mindre fokus på filosofi/gradering, mer på realistisk selvforsvar. Godt for: Praktisk selvforsvar, rask lærings kurve. Utfordring: Mindre struktur (ingen belter), kan være intenst. **Alternativ: Start med én stilart, utvid senere**: Begynn med f.eks. karate (slag) eller judo (kast) i 1-2 år for solid fundament, deretter krysstren andre. **Viktig**: Prøv flere klubber, se hva som føles riktig. Instruktør og miljø er like viktig som stilart!',
    },
    {
      id: 'kroppsoving-vg1-4-4-text-tilpasning',
      type: 'text',
      content: `## Tilpasning for ulike forutsetninger

Kampsport og selvforsvar kan tilpasses alle:

**Tilpasning etter nivå:**
- **Nybegynnere**: Start med grunnleggende teknikker i lav intensitet, fokus på kontroll og respekt, gradvis introdusere sparring
- **Forskjellige styrkenivåer**: Par personer med lignende nivå, juster kraftbruk, fokus på teknikk ikke styrke
- **Utrygg ved nærkontakt**: Start med avstandsteknikker, gradvis tilvenning, frivillig deltakelse i sparring

**Tilpasning ved begrensninger:**
- **Bevegelsesbegrensninger**: Tilpass teknikker til det som er mulig, fokus på strategi og teori
- **Sansesvikt**: Ekstra verbal eller taktil veiledning, tilpassede øvelser
- **Angst**: Trygt miljø, gradvis eksponering, fokus på kontroll og trygghet

**Alternative roller:**
- **Dommer/Poengdommer**: Lære regler og dømmerkompetanse
- **Trener**: Veilede andre i grunnleggende teknikker
- **Teoriansvarlig**: Forske på og presentere kampsportfilosofi
- **Observatør**: Analysere teknikk og gi tilbakemeldinger`,
    },
    {
      id: 'kroppsoving-vg1-4-4-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-4-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fire trinnene i selvforsvarsprinsippet?',
        solution: 'De fire trinnene: 1) Unngå farlige situasjoner, 2) Avvær trusler verbalt, 3) Flukt hvis mulig, 4) Forsvar fysisk kun som siste utvei. Målet er alltid å komme trygt unna.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-4-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-4-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er respekt viktig i kampsport?',
        solution: 'Respekt forhindrer skader gjennom kontrollerte teknikker, bygger trygt treningsmiljø, lærer verdier utover teknikker, og sikrer at kampferdigheter brukes ansvarlig og ikke for vold.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-4-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-4-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar detaljert selvforsvarsprinsippet med de fire trinnene. Gi eksempler på hver.',
        solution: 'Selvforsvarsprinsippet - fire trinn: **1. Unngå (Prevention)**: Den beste selvforsvaret er å ikke komme i farlige situasjoner. Eksempler: Vær oppmerksom på omgivelsene (ikke mobil hele tiden), unngå dårlig opplyste områder alene om kvelden, stol på magefølelsen, hold avstand til mistenkelige, reis i gruppe. Hvis noe føles galt, det er det ofte. **2. Avvær (De-escalation)**: Bruk ord for å avverge. Eksempler: Snakk rolig og bestemt ("Jeg vil ikke ha problemer"), hold 2+ meters avstand, kroppsspråk bestemt men ikke aggressiv, gi rom for at person kan trekke seg tilbake, kjøp tid (politiet kan komme). **3. Flukt (Escape)**: Hvis situasjonen eskalerer, løp! Eksempler: Rop høyt "BRANN!" eller "HJELP!", løp mot mennesker/lys, kast noe for å forsinke (veske), ikke vær heltemot - livet viktigere enn stolthet. **4. Forsvar (Physical defense)**: KUN som siste utvei når alt annet feiler. Eksempler: Fokus på sårbare punkter (øyne, hals, skrittområde), bruk det du har (nøkler, paraply), mål er å skape åpning for flukt IKKE "vinne", løp første mulighet. Nøkkel: Hver trinn prøves før neste. Fysisk forsvar er siste utvei.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-4-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-4-ex4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kan kampsport bidra til personlig utvikling utover fysiske ferdigheter? Gi minst fem eksempler.',
        solution: 'Kampsport for personlig utvikling: **1. Disiplin**: Møte opp regelmessig, følge instruksjoner, øve teknikker tusenvis ganger lærer disiplin som overføres til alle livsområder (skole, jobb). **2. Respekt**: Hilse instruktør/medutøvere, følge regler, vise ydmykhet bygger respekt for andre og seg selv. Lære å vinne og tape med verdighet. **3. Selvkontroll**: Lære å kontrollere aggresjon, bruke kraft ansvarlig, ikke misbruke ferdigheter. Sparring lærer selvkontroll under press. **4. Målsetting**: Graderte belter gir tydelige mål, lærer viktigheten av langsiktig innsats, tålmodighet og at mestring tar tid. **5. Selvtillit**: Mestre teknikker, stå opp etter nederlag, overvinne frykt bygger reell selvtillit (ikke arroganse). **6. Mentalt styrke**: Trene når sliten, presse grenser, håndtere nederlag. **7. Fellesskap**: Treningskameratskap, støtte hverandre, lære sammen. Eksempel: En utøver som trener 10 år lærer mer om tålmodighet, respekt og utholdenhet enn mange lærer på livstid. Kampsport er ikke bare fysisk, men en livsfilosofi.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-4-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-4-ex5',
        number: '5',
        type: 'classic',
        task: 'En venn blir angrepet på gaten. Hen dytte angriper vekk, personen faller og slår hodet. Er det lovlig nødverge?',
        solution: 'Juridisk vurdering av nødverge etter Straffeloven §18: **Situasjon**: Pågående angrep, forsvarer seg ved å dytte (ikke slag), angriper faller uheldig. **Vurdering**: 1) **Pågående angrep**: Ja - ble angrepet. 2) **Nødvendig forsvar**: Ja - dytt er rimelig respons for å stoppe angrep. 3) **Forholdsmessig**: Ja - dytt er proporsjonal respons (ikke overdreven kraft). **Konklusjon**: Dette vil sannsynligvis vurderes som lovlig nødverge. Minimal nødvendig kraft brukt. At angriper falt uheldig er ikke forsvarers ansvar når forsvaret var lovlig. **VIKTIG forskjell**: Hvis fortsetter å slå mens angriper ligger nede = IKKE nødverge (angrep er over, dette er gjengjeldelse). **Lærdom**: Bruk minimal nødvendig kraft, stopp når faren er over, løp, ring politiet (112), dokumenter (foto av skader, vitner), rapporter umiddelbart. Nødverge beskytter deg juridisk når du handler riktig. Rømmen er alltid best hvis mulig.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-4-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-4-ex6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign to kampsportarter: karate (slagbasert) og judo (kastbasert). Hva er likheter og forskjeller?',
        solution: 'Sammenligning karate vs. judo: **Likheter**: Begge er japanske kampsporter, har beltegradering (hvit til svart), sterkt filosofisk fundament (respekt, disiplin), lærer selvkontroll og disiplin, bygger selvtillit, olympiske grener (karate fra 2020, judo lenger). **Forskjeller - Teknikk**: Karate fokuserer på slag, spark, blokkeringer (stand-up fighting). Judo fokuserer på kast, grep, bakkearbeid (grappling). **Træningsform**: Karate bruker kata (former), pad-arbeid, sparring på avstand. Judo bruker randori (fri øving), mye fysisk kontakt, kasteteknikker. **Fysiske krav**: Karate krever god bevegelighet, rask reaksjon, koordinasjon. Judo krever styrke (spesielt grip og core), balanse, god kondisjon. **Selvforsvar**: Karate effektiv på avstand (slag/spark). Judo effektiv i nær kamp (kast, kontroll). **Skaderisiko**: Karate har risiko for slag-relaterte skader (blåmerker, forstuinger). Judo har risiko for fall-relaterte skader (skulder, kne). **Velge mellom de**: Karate hvis liker slag/spark, teknisk presisjon. Judo hvis liker fysisk kontakt, kast, bruker motstanders kraft. Begge er flotte valg!',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-4-4-exercise7',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-4-ex7',
        number: '7',
        type: 'classic',
        task: 'Beskriv en typisk kampsportstreningsøkt (60 min) fra start til slutt. Inkluder alle faser.',
        solution: 'Typisk kampsportstreningsøkt (60 min): **1. Hilsen og lineup (2 min)**: Alle står på linje etter grad. Hilse instruktør og medutøvere (bowing). Setter tonen: Respekt og fokus. **2. Oppvarming (10 min)**: Lett løping/skipping, dynamisk tøying (armsvinger, beinsvinger), leddmobilisering (håndledd, ankler), teknikk-oppvarming (lette slag/spark i luften). Mål: Puls opp, kropp klar, skadeforebygging. **3. Teknikk-trening (25 min)**: Instruktør demonstrerer teknikk (f.eks. mawashi-geri/roundhouse kick). Elever øver i luften (shadowboxing) 10x. Øv på pads med partner 20x hver. Instruktør gir korrigeringer. Repetisjon og perfeksjonering. Mål: Mestre bevegelse. **4. Anvendelse/Sparring (15 min)**: Kontrollert sparring med partner, avtalt intensitet. Fokus på timing, avstand, reaksjon. 3x3 min runder med 1 min pause. **5. Fysisk trening (5 min)**: 3x20 push-ups, 3x30 sit-ups, 3x20 squats. Kampsport er fysisk krevende. **6. Nedkoling og tøying (3 min)**: Rolig ned-tempo, statisk tøying (ben, skuldre, rygg), refleksjon. **7. Hilsen og lineup (2 min)**: Takk instruktør og medutøvere. Avslutter økten. Resultat: Utmatte men tilfredse utøvere!',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-4-exercise8',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-4-ex8',
        number: '8',
        type: 'classic',
        task: 'Du går alene hjem sent kveld og noen følger etter deg og ber om penger. Beskriv hvordan du håndterer situasjonen steg-for-steg.',
        solution: 'Håndtering av truende situasjon: **Steg 1 - Vurdering**: Situasjonen er potensielt farlig. Stol på magefølelsen. Vær våken og fokusert. **Steg 2 - Avstand**: Snu deg, hold 3-4 meters avstand. Kroppsspråk: Bestemt men ikke aggressiv. Øyenkontakt men ikke stirrende. **Steg 3 - Verbal avvergning**: Si høyt og tydelig: "Jeg har ikke penger. La meg være i fred." Rolig men bestemt stemme. Ikke vis frykt (selv om du er redd). **Steg 4 - Miljø-vurdering**: Identifiser fluktveier. Se etter butikker/mennesker/lys. Ha telefon i lommen, klar til bruk (ikke ta opp ennå). **Steg 5 - Eskalering**: Hvis person kommer nærmere eller blir aggressiv: Rop høyt "GÅ VEKK! HJELP! BRANN!" (brann får mer oppmerksomhet enn hjelp). **Steg 6 - Flukt**: Løp mot mennesker/lys/åpen butikk. Ikke se tilbake. Ring politiet (112) når trygg. **Steg 7 - Siste utvei**: Kun hvis grepet/blokkert og flukt umulig - forsvar deg (dytt ansiktet, spark skrittområde/knær) og løp første mulighet. **Viktig**: Ingen penger er verdt risiko. Gi fra deg lommebok om truet med våpen. Rapporter til politiet etterpå. Livet er viktigere enn stolthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_4_5: TextbookChapter = {
  id: 'kroppsoving-vg1-4-5',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '4.5',
  title: 'Orientering og kart',
  description: 'Mestre kartlesing, kompass og GPS for trygg og effektiv navigering i naturen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'Lese og tolke orienteringskart',
    'Bruke kompass og GPS for navigering',
    'Planlegge og gjennomføre orienteringsløp trygt',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-4-5-intro',
      type: 'text',
      content: `# Orientering og kart

Orientering kombinerer fysisk aktivitet med mental utfordring. Det handler om å finne veien i ukjent terreng ved hjelp av kart og kompass. Orientering lærer deg viktige ferdigheter som kartlesing, planlegging og beslutningstaking under press. Disse ferdighetene er nyttige både i friluftsliv og hverdagen.`,
    },
    {
      id: 'kroppsoving-vg1-4-5-def1',
      type: 'definition',
      title: 'Orienteringskart',
      content: 'Orienteringskart er detaljerte terrengkart i målestokk 1:10000 eller 1:15000. De viser terrengformer, vegetasjon, vann, stier, bygninger og andre detaljer. Bruker standardiserte farger og symboler.',
    },
    {
      id: 'kroppsoving-vg1-4-5-def2',
      type: 'definition',
      title: 'Kompass',
      content: 'Kompass er navigasjonsverktøy som viser magnetisk nord. Brukes sammen med kart for å orientere kartet og finne retning. Består av nål, retningspil, skala og grader.',
    },
    {
      id: 'kroppsoving-vg1-4-5-tip1',
      type: 'tip',
      title: 'Kartlesing tips',
      content: `- Orienter kartet mot terrenget
- Bruk tommelfinger-metode (hold tommel ved din posisjon)
- Se etter angrepspunkt (tydelig terrengdetalj nær posten)
- Planlegg ruten før du løper
- Sjekk kartet ofte`,
    },
    {
      id: 'kroppsoving-vg1-4-5-example1',
      type: 'example',
      title: 'Finne post med kompass',
      problem: 'Hvordan bruker du kompass for å finne en post?',
      solution: '1) Legg kompassets sidekant fra din posisjon til posten på kartet. 2) Drei skiven til nord-linjene er parallelle med kartets nord. 3) Hold kompasset flatt, drei deg til nålen peker mot nord på skiven. 4) Følg retningspilen mot målet.',
    },
    {
      id: 'kroppsoving-vg1-4-5-def3',
      type: 'definition',
      title: 'GPS og digitale kart',
      content: 'GPS (Global Positioning System) bruker satellitter til å bestemme posisjon. Kombinert med digitale kart (f.eks. Norgeskart, AllTrails) gir det nøyaktig navigasjon. Men GPS kan feile - ha alltid papiркart og kompass som backup.',
    },
    {
      id: 'kroppsoving-vg1-4-5-def4',
      type: 'definition',
      title: 'Terrengformer',
      content: 'Terrengformer vises med høydekurver på kart. Tette kurver = bratt. Spredte kurver = slakt. Kurver som går i sirkel = topp eller fordypning (hakkmerker peker inn i fordypning).',
    },
    {
      id: 'kroppsoving-vg1-4-5-text-kartforståelse',
      type: 'text',
      content: `## Kartforståelse - grunnleggende ferdigheter

**Farger og symboler:**
Orienteringskart bruker standardiserte farger (IOF-standard):
- **Sort**: Menneskeskapte objekter (bygninger, gjerder, veier), berg i dagen, store steiner
- **Brunt**: Terrengformer, høydekurver, småknatter
- **Blått**: Vann (innsjøer, elver, bekker, myrer)
- **Grønt**: Vegetasjonstetthet (mørk grønn = tett skog vanskelig å løpe i, lys grønn = åpen skog)
- **Gult**: Åpent terreng, dyrka mark, enger
- **Hvitt**: Normal løpbar skog
- **Rosa/lilla**: Forbudte områder, O-baner (løyper)

**Målestokk:**
Vanligste målestokker er 1:10 000 og 1:15 000.
- 1:10 000 betyr at 1 cm på kart = 100 meter i terrenget (10 000 cm)
- 1:15 000 betyr at 1 cm på kart = 150 meter i terrenget
- Mindre målestokk (1:15 000) = mindre detaljer, men større område på kartet

**Høydekurver:**
- Bruker brune linjer
- Vanligste ekvidistanse (høyde mellom kurver): 5 meter
- Hver 5. kurve er tykkere (hovedkurver) og merket med høyde
- Tette kurver = bratt terreng
- Spredte kurver = slakt terreng`,
    },
    {
      id: 'kroppsoving-vg1-4-5-example2',
      type: 'example',
      title: 'Eksempel: Tolke høydekurver',
      problem: 'På kartet ser du tette brune kurver mellom deg og posten. Hva betyr det og hvordan påvirker det ruttevalget?',
      solution: `Tette høydekurver betyr bratt terreng. Dette påvirker ruttevalget slik:

**Alternativ 1 - Rett gjennom:**
- Kortest distanse
- Men: Bratt opp, tung på kroppen, langsommere tempo
- Risiko for å miste orientering i bratt terreng

**Alternativ 2 - Rundt:**
- Lengre distanse, men slakere terreng
- Kan løpe fortere, mindre fysisk krevende
- Følge tydelige terrengdetaljer (f.eks. sti rundt høyden)

**Beste valg avhenger av:**
- Din fysiske form (hvis du er sliten: velg rundt)
- Hvor bratt det er (små høyder: gjennom, store: rundt)
- Sikkerhet i kartlesing (usikker: velg rundt langs tydelige detaljer)`,
    },
    {
      id: 'kroppsoving-vg1-4-5-example3',
      type: 'example',
      title: 'Eksempel: Bruke GPS trygt',
      problem: 'Du har med både GPS og papiркart på en lang skitur. Hvordan bruker du GPS sammen med kart på en trygg måte?',
      solution: `Trygg bruk av GPS kombinert med kart:

**Før turen:**
1. Last ned offline kart til GPS/mobil (fungerer uten dekning)
2. Studer papiркart og planlegg rute
3. Sjekk at GPS-batteriet er fullt, ha med powerbank

**Under turen:**
1. Bruk GPS for å sjekke posisjon regelmessig
2. Men: Se alltid på papiркart samtidig - lær terreng og retning
3. Marker viktige punkter (hytter, veikryss) i GPS før start
4. Ha papiркart lett tilgjengelig (ikke pakket nederst i sekken)

**Sikkerhet:**
- GPS kan feile (batteri, skade, tap av signal)
- Alltid ha papiркart og kompass som backup
- Lær å bruke kart/kompass - ikke vær 100% avhengig av GPS
- I uvær/snøstorm: GPS kan redde liv, men kart/kompass fungerer alltid

**Beste praksis:**
Bruk GPS som verktøy for å lære kartlesing - ikke som erstatning. Sjekk GPS, men FORSTÅ hvor du er på kartet.`,
    },
    {
      id: 'kroppsoving-vg1-4-5-tip2',
      type: 'tip',
      title: 'Norgeskart.no - gratis verktøy',
      content: `Norgeskart.no er Kartverkets gratisressurs:
- Detaljerte kart over hele Norge
- Flere lag: terrengkart, flyfoto, turkart
- Planlegg turer, mål distanse
- Se høydeprofil for ruter
- Last ned og print kart
- Bruk: Gå til norgeskart.no, søk sted, trykk "Mål" for å tegne rute`,
    },
    {
      id: 'kroppsoving-vg1-4-5-tip3',
      type: 'tip',
      title: 'Trygg ferdsel i naturen',
      content: `Når du bruker kart i terrenget:
- Fortell noen hvor du skal og når du er tilbake
- Ha med varseltrekant (rød trekant med mylar - synlig fra lufta)
- Lad mobil, men stol ikke 100% på den
- Kle deg riktig (lag på lag, ekstra klær i sekken)
- Ha med mat, drikke, førstehjelpsutstyr
- Vend i tide hvis været blir dårlig`,
    },
    {
      id: 'kroppsoving-vg1-4-5-text-kompassbruk',
      type: 'text',
      content: `## Kompassbruk - steg for steg

**Deler av kompasset:**
- Nål (magnetisk, peker mot nord)
- Retningspil (følg denne når du skal gå)
- Skive (kan dreies, har grader 0-360)
- Nord-linjer (parallelle linjer på bunnen av skive)
- Sidekant (brukes på kart)

**Sette kompasskurs fra kart:**
1. **Legg kompass på kart**: Sidekanten fra din posisjon til målet
2. **Drei skive**: Roter til nord-linjene på kompass er parallelle med kartets nordlinjer (eller kartets kant hvis nord er oppover)
3. **Les av**: Tallet ved retningspilen er din retning i grader
4. **Gå**: Hold kompass flatt, drei deg til nål peker mot nord på skive, følg retningspil

**Misvisning (Deklinasjon):**
På grunn av forskjell mellom magnetisk nord og geografisk nord må du korrigere i noen områder. I Sør-Norge er misvisningen liten (1-2 grader), i Nord-Norge større (5-7 grader). For presisjonsorientering: Korriger ved å legge til eller trekke fra misvisning.

**Når bruker du kompass:**
- I ugrei skog uten tydelige landemerker
- I mørket eller tåke
- Når du skal gå i rett linje over åpent terreng
- For å dobbeltsjekke retning når du er usikker`,
    },
    {
      id: 'kroppsoving-vg1-4-5-example4',
      type: 'example',
      title: 'Eksempel: Finne vei i tåke med kompass',
      problem: 'Du går på fjellet og tåke kommer inn. Du vet hvor du er på kartet, og må gå 800 meter i retning 285 grader for å nå hytten. Hvordan gjør du?',
      solution: `Steg-for-steg fremgangsmåte:

**1. Orienter kompass:**
- Drei skiven til 285 grader står ved retningspilen
- Hold kompass flatt
- Drei deg til nålen peker på nord (mot 0/360) på skiven

**2. Velg landemerke:**
- Se i retning av retningspilen
- Velg et landemerke du kan se (stor stein, granskjerme) i riktig retning
- Gå til det landemerket

**3. Gjenta:**
- Ved landemerket: Sjekk kompass igjen (du kan ha avviket litt)
- Finn nytt landemerke i 285 grader
- Fortsett slik til du har gått 800 meter

**4. Kontroller distanse:**
- Tell skritt (ca 1300-1500 skritt per km for gjennomsnittsperson)
- 800m ≈ 1000-1200 skritt
- Eller bruk GPS for distanse (men følg kompass for retning)

**Viktig:**
I tett tåke kan du lett gå i sirkler uten kompass. Med kompass holder du riktig retning og kommer trygt frem.`,
    },
    {
      id: 'kroppsoving-vg1-4-5-text-tilpasning',
      type: 'text',
      content: `## Tilpasning for ulike forutsetninger

Orientering kan gjøres tilgjengelig for alle:

**Tilpasning etter nivå:**
- **Nybegynnere**: Enklere kart med færre poster, posteringer på tydelige punkt (stier, bygninger), kortere distanse
- **Lavere kondisjon**: Korte løyper, tillat gange, fokus på kartlesing ikke fart
- **Avanserte**: Lengre løyper, vanskeligere terreng, tidsbegrensning, nattorientering

**Tilpasning ved begrensninger:**
- **Mobilitetsbegrensninger**: Orientering på veier/stier med rullestol/hjelpemidler, fokus på presisjon i kartlesing
- **Nedsatt syn**: Pre-O (orientering der man planlegger rute på forhånd), verbal beskrivelse av terreng, taktile kart, gå med ledsager
- **Kognitiv utfordringer**: Forenklede kart, færre poster, ekstra veiledning, fokus på én ferdighet om gangen

**Alternative roller:**
- **Løypeansvarlig**: Lage orienteringsløyper for andre
- **Postansvarlig**: Legge ut og hente poster
- **Tidstoker**: Notere starttider og målganger
- **Kartansvarlig**: Dele ut kart og forklare symboler
- **Analyserer**: Sammenligne ulike ruttevalg, diskutere strategi`,
    },
    {
      id: 'kroppsoving-vg1-4-5-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-5-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva viser de ulike fargene på orienteringskart?',
        solution: 'Farger på orienteringskart: Sort (bergknauser, stier, bygninger), Brunt (terrengformer/høydekurver), Blått (vann), Grønt (vegetasjonstetthet - mørk=tett), Gult (åpent/lyst terreng), Hvitt (normal skog), Rosa/Lilla (forbudte områder).',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-5-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-5-ex2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hvordan du bruker kompass for å finne retning.',
        solution: 'Bruk kompass: 1) Legg sidekant fra start til mål på kart, 2) Drei skive til nord-linjer parallelle med kartets nord, 3) Hold kompass flatt, drei deg til nål peker mot nord på skive, 4) Følg retningspil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-5-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-5-ex3',
        number: '3',
        type: 'classic',
        task: 'Du ser på et orienteringskart med målestokk 1:10 000. Distansen mellom to poster på kartet er 4 cm. Hvor langt er det i terrenget?',
        solution: '1:10 000 betyr 1 cm = 100 meter. 4 cm × 100 m = 400 meter i terrenget.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-5-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-5-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom å bruke GPS og papiркart/kompass. Når er det viktig å kunne begge deler?',
        solution: 'GPS: Viser nøyaktig posisjon, enkel å bruke, krever batteri og signal. Papiркart/kompass: Fungerer alltid, ingen batteri, krever øvelse, gir bedre terrengforståelse. Viktig å kunne begge: GPS kan feile (batteri, tap, væte). I nødsituasjoner (uvær, mørke, batteri tomt) kan kart/kompass redde liv. Best praksis: Bruk GPS som støtte, men lær kart/kompass som grunnferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-4-5-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-5-ex5',
        number: '5',
        type: 'classic',
        task: 'Planlegg en enkel orienteringsløype med 5 poster i området rundt skolen. Beskriv hvor postene skal ligge (f.eks. "ved flaggstangen", "ved sørvestre hjørne av gymsalen"). Tegn gjerne et enkelt skissekart.',
        solution: `Eksempel orienteringsløype rundt skolen:

**Start**: Hovedinngangen til skolen

**Post 1**: Ved flaggstangen på skoleplassen (ca 50 meter fra start, lett å finne)

**Post 2**: Ved sørvestre hjørne av gymsalen (ca 80 meter fra post 1, må rundt bygning)

**Post 3**: Ved det største treet på fotballbanen (ca 100 meter, må krysse bane)

**Post 4**: Ved sykkelparkering ved østre inngang (ca 70 meter, tilbake mot bygninger)

**Post 5**: Ved benk ved uteområdet (ca 60 meter)

**Mål**: Tilbake til hovedinngangen (ca 40 meter)

**Total distanse**: Ca 400 meter
**Vanskelighetsgrad**: Lett (alle poster på tydelige punkter)
**Tilpasning for vanskeligere**: Legg poster mindre tydelige steder (f.eks. "ved tredje stolpe på gjerde mot øst")

(Elevene kan tegne et enkelt skissekart som viser bygninger, poster og forbindelser)`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-5-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-5-ex6',
        number: '6',
        type: 'classic',
        task: 'Gå inn på norgeskart.no og finn et turområde i nærheten av der du bor. Planlegg en 3 km rundtur og beskriv ruten. Bruk måleverktøyet og se på høydeprofil.',
        solution: `(Eleven skal gjøre dette praktisk - eksempelsvar):

**Område**: Sognsvann, Oslo
**Rundtur**: 3,2 km rundt Sognsvann

**Beskrivelse:**
- **Start/mål**: Parkeringsplass ved Sognsvann T-banestasjon
- **Rute**: Medurs rundt vannet på sti
- **Høydeforskjell**: Ca 30 meter (relativt flatt)
- **Underlag**: Grus/fast sti, lett tilgjengelig
- **Tid**: Ca 45 min i rolig tempo
- **Landemerker**: Strand, badeplass, utsiktspunkt på nordsiden

**Hva jeg lærte på Norgeskart:**
- Måle distanse med målerverktøy
- Se høydeprofil (viser om ruten er flat/kupert)
- Bytte mellom kart og flyfoto for bedre oversikt
- Identifisere stier, vann og bygninger

(Eleven skal skrive om sitt lokale område og laste opp skjermbilde fra Norgeskart)`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_4_6: TextbookChapter = {
  id: 'kroppsoving-vg1-4-6',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '4.6',
  title: 'Individuelle utfordringer og mestring',
  description: 'Sett personlige mål, utvikle mestringsstrategier og bygg mental styrke gjennom fysisk aktivitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Sette realistiske og motiverende personlige mål',
    'Anvende mestringsstrategier ved utfordringer',
    'Reflektere over egen utvikling og læring',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-4-6-intro',
      type: 'text',
      content: `# Individuelle utfordringer og mestring

Fysisk aktivitet handler ikke bare om kroppen - det handler også om mental styrke, målsetting og personlig utvikling. Å mestre utfordringer, overvinne motgang og nå mål gir selvtillit og læring som overføres til andre deler av livet. I dette kapittelet skal vi se på hvordan du setter gode mål, utvikler mestringsstrategier og bygger mental styrke.`,
    },
    {
      id: 'kroppsoving-vg1-4-6-def1',
      type: 'definition',
      title: 'SMART-mål',
      content: 'SMART er en metode for målsetting: Spesifikk (tydelig hva), Målbar (kan måles), Aktuell/Akseptert (relevant for deg), Realistisk (oppnåelig), Tidsbestemt (deadline). Eksempel: "Løpe 5 km på under 30 min innen 3 måneder".',
    },
    {
      id: 'kroppsoving-vg1-4-6-def2',
      type: 'definition',
      title: 'Mestringsfølelse',
      content: 'Mestringsfølelse er opplevelsen av å lykkes med noe utfordrende. Det bygger selvtillit, motivasjon og vilje til å prøve nye ting. Oppnås gjennom realistiske utfordringer der du må strekke deg, men ikke så mye at du mislykkes.',
    },
    {
      id: 'kroppsoving-vg1-4-6-def3',
      type: 'definition',
      title: 'Alternativ deltakelse',
      content: 'Alternativ deltakelse betyr å bidra til kroppsøvingsundervisningen på andre måter enn direkte fysisk aktivitet. Dette kan være som trener, dommer, observatør, planlegger, tidtaker eller motivator. Alternativ deltakelse er en likeverdig måte å oppnå læringsmål, utvikle kompetanse og være del av fellesskapet.',
    },
    {
      id: 'kroppsoving-vg1-4-6-tip1',
      type: 'tip',
      title: 'Mestringsstrategier',
      content: `- Del store mål i små delmål
- Fokuser på fremgang, ikke perfeksjon
- Lær av feil i stedet for å gi opp
- Feir små seire underveis
- Ha støttende mennesker rundt deg
- Vær tålmodig - utvikling tar tid`,
    },
    {
      id: 'kroppsoving-vg1-4-6-text-alternativ',
      type: 'text',
      content: `## Mestring også når man ikke fullt ut kan delta

Kroppsøving handler om utvikling, læring og mestring - ikke bare om fysisk prestasjoner. Det er fullt mulig å mestre kroppsøving selv om du ikke kan delta i alle fysiske aktiviteter, enten det skyldes skade, sykdom, funksjonsvariasjon eller andre årsaker.

**Alternativ deltakelse - likeverdig læring:**

Alternativ deltakelse er IKKE "å sitte på benken" eller "å være fritatt". Det er en aktiv, meningsfull måte å være del av undervisningen og utvikle viktige kompetanser på. Mange av kompetansemålene i kroppsøving handler om forståelse, planlegging, analyse og samarbeid - ikke bare fysisk utførelse.

**Roller og oppgaver ved alternativ deltakelse:**

**1. Trener/Instruktør:**
- Hjelpe andre med teknikk og utførelse
- Gi konstruktive tilbakemeldinger
- Demonstrere (hvis mulig) eller forklare øvelser
- Utvikler: Pedagogiske ferdigheter, kommunikasjon, fagkunnskap

**2. Dommer/Tidtaker:**
- Holde styr på regler og poenggiving
- Ta tid og notere resultater
- Sikre rettferdig gjennomføring
- Utvikler: Regelkunnskap, ansvarsfølelse, nøyaktighet

**3. Observatør/Analyserer:**
- Filme aktivitet for senere analyse
- Observere teknikk og gi tilbakemelding
- Identifisere forbedringsområder hos andre
- Utvikler: Analytiske evner, fagforståelse, observasjonsevne

**4. Planlegger/Organisator:**
- Planlegge treningsøkter for klassen
- Sette opp stasjoner og utstyr
- Lage oppvarmingsprogram
- Utvikler: Organisatoriske evner, kreativitet, ledelse

**5. Motivator/Lagkaptein:**
- Heie på og motivere lagkamerater
- Skape godt miljø og inkludering
- Bygge lagånd og samhold
- Utvikler: Sosiale ferdigheter, empati, ledelse

**6. Forsker/Kunnskapsformidler:**
- Forske på treningsmetoder og teknikker
- Presentere funn for klassen
- Lage informasjonsmateriell
- Utvikler: Forskningsferdigheter, presentasjonsteknikk, faglig fordypning

**Viktigheten av alternativ deltakelse:**

- **Inkludering**: Alle er del av fellesskapet, ingen står utenfor
- **Læring**: Utvikler andre sider av kompetanse enn bare fysisk utførelse
- **Overføringsverdi**: Ferdigheter som er verdifulle i arbeidslivet (ledelse, analyse, organisering)
- **Perspektiv**: Ser aktiviteten fra en annen vinkel, som kan gi dypere forståelse
- **Likeverd**: Alternativ deltakelse er en fullverdig måte å oppnå kompetansemål på

**Mestring i alternativ deltakelse:**

Du kan oppleve like mye mestringsfølelse som dommer, trener eller planlegger som utøver. Når du gir en god tilbakemelding som hjelper noen å forbedre teknikken sin, når du organiserer en vellykket aktivitet, eller når du analyserer og presenterer innsikt - det er ekte mestring.

**Viktig**: Alternativ deltakelse skal avtales med lærer og tilpasses den enkeltes situasjon og interesser. Målet er meningsfull deltakelse som gir læring og utvikling.`,
    },
    {
      id: 'kroppsoving-vg1-4-6-example1',
      type: 'example',
      title: 'Sette SMART-mål for løping',
      problem: 'Lag et SMART-mål for å forbedre løpingen din.',
      solution: 'SMART-mål: "Jeg vil løpe 5 km på under 28 minutter innen 3 måneder (fra 32 min nå)". Spesifikk: 5 km under 28 min. Målbar: Tid kan måles. Aktuell: Jeg vil bli bedre til å løpe. Realistisk: 4 min forbedring på 3 mnd er oppnåelig. Tidsbestemt: 3 måneder.',
    },
    {
      id: 'kroppsoving-vg1-4-6-def4',
      type: 'definition',
      title: 'Mental styrke',
      content: 'Mental styrke er evnen til å håndtere press, motgang og ubehag. Det innebærer å holde fokus, håndtere nerøsitet, komme seg gjennom tøffe økter og ikke gi opp når det er vanskelig. Kan trenes som fysisk styrke.',
    },
    {
      id: 'kroppsoving-vg1-4-6-def5',
      type: 'definition',
      title: 'Progresjon',
      content: 'Progresjon betyr gradvis økning av belastning i trening. For å bli bedre må kroppen utfordres litt mer enn den er vant til, men ikke så mye at du skader deg eller blir overtrent. Øk belastning med 5-10% per uke.',
    },
    {
      id: 'kroppsoving-vg1-4-6-tip2',
      type: 'tip',
      title: 'Håndtere motgang',
      content: `- Forvent motgang - det er normalt
- Se tilbakeslag som læring, ikke fiasko
- Juster mål hvis nødvendig, ikke gi opp helt
- Snakk med noen du stoler på
- Ta pause hvis du er utbrent
- Husk: Feil er del av læringsprosessen`,
    },
    {
      id: 'kroppsoving-vg1-4-6-tip3',
      type: 'tip',
      title: 'Bygge mental styrke',
      content: `- Øv på å være i ubehagssonen (tough it out)
- Positive selvsamtaler ("Jeg klarer dette")
- Visualiser suksess før økter/konkurranser
- Fokus på prosess, ikke bare resultat
- Lær av idrettsutøvere du beundrer
- Bruk pustетeknikker for å roe deg`,
    },
    {
      id: 'kroppsoving-vg1-4-6-text-målsetting',
      type: 'text',
      content: `## Effektiv målsetting - veien til mestring

**Hvorfor sette mål?**
Mål gir retning, motivasjon og mening. Uten mål kan trening føles meningsløs. Med klare mål vet du hva du jobber mot og kan feire fremgang underveis.

**Langsiktige vs kortsiktige mål:**
- **Langsiktig mål** (3-12 måneder): "Gjøre 20 pull-ups på rad", "Løpe halvmaraton"
- **Kortsiktige mål** (1-4 uker): "Gjøre 2 flere pull-ups enn forrige måned", "Løpe 10 km uten pause"
- Langsiktige mål gir overordnet retning
- Kortsiktige mål holder motivasjonen oppe og viser fremgang

**Prosessmål vs resultatmål:**
- **Resultatmål**: "Løpe 5 km på under 25 min" (fokus på sluttresultat)
- **Prosessmål**: "Løpe 3 ganger per uke", "Gjøre 20 min styrketrening etter hver løpetur"
- Prosessmål gir deg kontroll - du kan alltid gjøre jobben
- Resultatmål avhenger også av faktorer utenfor din kontroll
- Best strategi: Kombiner begge (prosessmål for å nå resultatmål)

**Vanlige feil ved målsetting:**
1. **For store mål for raskt**: "Gå fra sofa til maraton på 2 måneder" - risiko for skade
2. **Vage mål**: "Bli bedre på fotball" - hva betyr "bedre"? Hvordan måle?
3. **Kun langsiktige mål**: Mister motivasjon uten kortsiktige milepæler
4. **Andres mål**: Setter mål for å imponere andre, ikke fordi du vil det selv
5. **Ingen fleksibilitet**: Gir opp helt når planen ikke funker, i stedet for å justere`,
    },
    {
      id: 'kroppsoving-vg1-4-6-example2',
      type: 'example',
      title: 'Eksempel: Håndtere platå',
      problem: 'Du har trent styrke i 2 måneder og gjorde god fremgang. Nå har du stått still i 3 uker - ingen fremgang i vekter eller repetisjoner. Hva kan du gjøre?',
      solution: `Platå er normalt - her er strategier for å komme videre:

**1. Analyser situasjonen:**
- Får du nok søvn? (7-9 timer per natt)
- Spiser du nok protein? (1,6-2g per kg kroppsvekt)
- Er du i kalorioverskudd? (trenger energi for muskelvekst)
- Tren du for ofte uten restitusjonstid?

**2. Endre treningsprogram:**
- **Variasjon**: Bytt øvelser (f.eks. benkpress → push-ups med vekt)
- **Volum**: Øk antall set eller repetisjoner
- **Intensitet**: Øk vekt, reduser pauser mellom set
- **Tempo**: Senk vekten saktere (3-4 sekunder ned)

**3. Deload-uke:**
- Ta en uke med 50% mindre volum/intensitet
- La kroppen restituere helt
- Ofte gjør du hopp i fremgang etter deload

**4. Mental tilnærming:**
- Platå er ikke tilbakeslag - du holder nivået
- Vær tålmodig - kroppen trenger tid
- Fokuser på teknikk under platå
- Feir små fremskritt (bedre teknikk, mindre utmattelse)

**5. Søk råd:**
- Snakk med lærer, trener eller erfarne treningspartnere
- Kanskje du trenger ny innsikt eller motivasjon

Vanligvis: Platå brytes ved å endre noe (trening, kosthold, søvn, restitusjon).`,
    },
    {
      id: 'kroppsoving-vg1-4-6-example3',
      type: 'example',
      title: 'Eksempel: Komme tilbake etter skade',
      problem: 'Du skadet kneet og måtte ta 6 ukers pause fra fotball. Nå er du frisk, men har mistet form og føler deg bak laget. Hvordan bygger du deg opp mentalt og fysisk?',
      solution: `Strategier for comeback etter skade:

**Mental tilnærming:**
1. **Aksepter situasjonen**: Skader skjer, det er ikke din feil
2. **Fokus fremover**: Ikke dvele ved tapt tid, se på muligheter nå
3. **Små mål først**: Ikke forvent å være på gamle nivå umiddelbart
4. **Positiv selvprat**: "Jeg er på vei tilbake" ikke "Jeg er dårligere enn før"

**Fysisk oppbygging:**
1. **Uke 1-2**: Lett trening, fokus på å komme i gang
   - Korte økter, lav intensitet
   - Lytt til kroppen, ikke press skadet område
2. **Uke 3-4**: Gradvis økning i belastning
   - Øk volum med 10-20% per uke
   - Fortsatt fokus på teknikk og trygghet
3. **Uke 5-8**: Nærme seg normalt nivå
   - Bygg spesifikk fotballfitness
   - Delkta i kamper gradvis (byttes inn, ikke full kamp ennå)

**Kommunikasjon:**
- Snakk med trener om din situasjon
- Vær åpen med lagkameratene
- Still spørsmål hvis usikker på noe

**Viktig læring:**
Comeback tar tid, men du kommer sterkere tilbake - både mentalt (du har overvunnet noe) og fysisk (riktig rehab bygger styrke). Mange utøvere sier de ble bedre etter skader fordi de lærte om kroppen, tålmodighet og mental styrke.`,
    },
    {
      id: 'kroppsoving-vg1-4-6-text-refleksjon',
      type: 'text',
      content: `## Refleksjon over egen utvikling

**Hvorfor reflektere?**
Refleksjon hjelper deg å forstå hva som fungerer, hva som ikke fungerer, og hvordan du kan forbedre deg. Uten refleksjon gjentar du de samme feilene. Med refleksjon lærer du kontinuerlig.

**Refleksjonsspørsmål:**
- Hva gikk bra i denne økten/perioden? Hvorfor?
- Hva var utfordrende? Hvordan kan jeg håndtere det bedre neste gang?
- Har jeg kommet nærmere målet mitt? Hva er neste steg?
- Hva har jeg lært om meg selv?
- Trenger jeg å justere mål eller treningsplan?

**Treningsdagbok:**
Skriv kort etter hver økt:
- Hva du gjorde (øvelser, distanse, tid)
- Hvordan det føltes (energi, motivasjon, smerter)
- Tanker og læring

**Fordeler med dagbok:**
- Ser fremgang over tid (motiverende!)
- Identifiserer mønstre (f.eks. "jeg er alltid sliten mandag")
- Hjelper med periodisering
- Dokumentasjon for lærer/trener

**Ulike måter å reflektere:**
- Skriftlig dagbok (papir eller digitalt)
- Video-dagbok (snakk inn i mobil)
- Diskusjon med treningspartner/lærer
- Tankekart eller bullet points
- Refleksjonssamtaler i grupper

Nøkkelen er regelmessighet: Litt refleksjon ofte gir mer læring enn mye refleksjon sjeldent.`,
    },
    {
      id: 'kroppsoving-vg1-4-6-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-6-ex1',
        number: '1',
        type: 'classic',
        task: 'Lag et SMART-mål for en fysisk aktivitet du vil forbedre deg i.',
        solution: 'Eksempel: "Jeg vil øke antall push-ups fra 15 til 25 på rad innen 6 uker ved å trene 3 ganger per uke." Spesifikk: 25 push-ups. Målbar: Antall kan telles. Aktuell: Vil bli sterkere. Realistisk: 10 flere på 6 uker. Tidsbestemt: 6 uker.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-6-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-6-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilke mestringsstrategier kan hjelpe når du står fast?',
        solution: 'Mestringsstrategier: 1) Del målet i mindre delmål, 2) Fokuser på det du har forbedret (fremgang), 3) Lær av feil - hva kan justeres? 4) Ta pauser og restituere, 5) Søk råd fra andre, 6) Juster forventninger hvis nødvendig.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-6-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-6-ex3',
        number: '3',
        type: 'classic',
        task: 'Lag en tilpasset treningsplan for noen med en skade (f.eks. ankelskade) som ikke kan delta fullt ut i kroppsøving. Planen skal dekke 2 uker med 3 økter per uke, og inkludere både alternativ fysisk trening og alternative roller.',
        solution: `Eksempel: 2-ukers plan for elev med ankelskade (ikke kan løpe/hoppe):

**UKE 1:**
Mandag - Svømmeøkt: 30 min svømming (belaster ikke ankelen). Fokus på crawl og rygg. Utvikler kondisjon uten belastning. Rolle: Delta normalt.

Onsdag - Alternativ rolle som Trener: Klassen har sprint-økt. Du er trener for en gruppe, observer teknikk, gi tilbakemeldinger på armtak, kroppsholdning og start. Film med mobil for analyse. Utvikler: Pedagogiske ferdigheter og fagforståelse.

Fredag - Styrketrening: 40 min styrketrening for overkropp og core (push-ups, planke, pull-ups, rows, armhevinger). Også lett styrke for skadefri ben. Rolle: Delta, tilpasset trening.

**UKE 2:**
Mandag - Alternativ rolle som Planlegger: Lag en treningsøkt for klassen (oppvarming + hoveddel + nedvarming) for neste uke. Presenter planen for lærer. Utvikler: Organisering, kreativitet, planlegging.

Onsdag - Sykling: 45 min rolig sykling (innen- eller utendørs). Bygger kondisjon uten ankelbelastning. Rolle: Delta, tilpasset trening.

Fredag - Alternativ rolle som Analyserer: Klassen har lagidrett (håndball). Du filmer kampen, lager taktisk analyse etterpå (hva fungerte, hva kan forbedres?), presenterer for laget. Utvikler: Analytiske evner, taktisk forståelse.

**Resultat:** Eleven holder seg aktiv og i form, utvikler alternative kompetanser (trening, planlegging, analyse), og er fortsatt en verdifull del av kroppsøving-fellesskapet. Når ankelen er frisk, har eleven både bedre forståelse av trening OG er fysisk i form.

**Viktig**: Planen skal godkjennes av lærer og ev. fysioterapeut. Ankelen skal ikke belastes før den er frisk.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-6-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-6-ex4',
        number: '4',
        type: 'classic',
        task: 'Du har satt deg som mål å forbedre kondisjonen din. Lag både et langsiktig SMART-mål (6 måneder) og tre kortsiktige delmål (hver 2. måned) for å nå det langsiktige målet.',
        solution: `**Langsiktig SMART-mål (6 måneder):**
"Løpe 10 km på under 55 minutter innen 1. juni (fra 65 min nå)"
- Spesifikk: 10 km, under 55 min
- Målbar: Kan tidta med klokke/app
- Aktuell: Vil bli i bedre form og delta i 10 km-løp
- Realistisk: 10 min forbedring på 6 måneder er oppnåelig (ca 1:40 min per måned)
- Tidsbestemt: 1. juni (6 måneder frem)

**Delmål 1 (etter 2 måneder - 1. februar):**
"Løpe 10 km på under 61 minutter"
- Forbedring: 4 minutter (65 → 61 min)
- Prosessmål: Løpe 3 ganger per uke, hvorav 1 lang økt (8-10 km)

**Delmål 2 (etter 4 måneder - 1. april):**
"Løpe 10 km på under 58 minutter"
- Forbedring: 3 minutter ekstra (61 → 58 min)
- Prosessmål: Legge til 1 intervalløkt per uke for å øke fart

**Delmål 3 (etter 6 måneder - 1. juni):**
"Løpe 10 km på under 55 minutter"
- Forbedring: Siste 3 minutter (58 → 55 min)
- Prosessmål: Ha minst 2 testløp på 10 km i mai for å øve på tempo

**Hvorfor dette funker:**
- Delmålene bryter ned det store målet i håndterbare biter
- Fremgang er gradvis og realistisk
- Hver delmål gir mestringsfølelse og motivasjon til å fortsette
- Prosessmålene sier HVA du skal gjøre for å komme dit`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-4-6-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-6-ex5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom prosessmål og resultatmål. Gi eksempler på begge typer for en elev som vil bli bedre til volleyball.',
        solution: `**Resultatmål:**
Fokuserer på sluttresultat - hva du vil oppnå.
- "Score 15 poeng i neste kamp"
- "Ha serve-treffsikkerhet på 90%"
- "Være med på skolelaget"

**Prosessmål:**
Fokuserer på prosessen - hva du skal GJØRE for å nå resultatet.
- "Trene serve 20 minutter, 3 ganger per uke"
- "Delta på volleyballtrening hver tirsdag og torsdag"
- "Se 2 YouTube-videoer om serveteknikk hver uke og øve det jeg lærer"

**Forskjeller:**
| Resultatmål | Prosessmål |
|------------|-----------|
| Utfallsorientert | Handlingsorientert |
| Delvis utenfor din kontroll | Fullt under din kontroll |
| Lett å måle suksess | Måler innsats |
| Kan være demotiverende hvis ikke nådd | Alltid mulig å lykkes hvis du gjør jobben |

**Hvorfor begge er viktige:**
- **Resultatmål** gir retning og motivasjon (vet hva du jobber mot)
- **Prosessmål** gir kontroll og daglig progresjon (du kan alltid gjøre jobben)

**Best strategi:**
Sett resultatmål, men fokuser på prosessmål. Hvis du gjør prosessen riktig (trener konsekvent, lærer, forbedrer), kommer resultatet naturlig.

**Eksempel for volleyball:**
- Resultatmål: "Bli en god setter"
- Prosessmål: "Øve settinger 30 min hver dag", "Film og analyser min teknikk en gang per uke", "Be om tilbakemelding fra trener"

Fokuser på prosessen → resultatet kommer.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-6-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-6-ex6',
        number: '6',
        type: 'classic',
        task: 'Skriv en kort refleksjon (150-300 ord) over din egen utvikling i kroppsøving så langt i år. Bruk disse spørsmålene: Hva er du blitt bedre til? Hva var vanskelig? Hva vil du jobbe videre med?',
        solution: `(Dette er en personlig refleksjon - eleven må skrive om sin egen opplevelse. Her er et eksempel):

**Min utvikling i kroppsøving høsten 2024**

I starten av året var jeg dårlig i form og usikker på mange idretter. Nå ser jeg tydelig fremgang.

**Hva jeg er blitt bedre til:**
Jeg har forbedret kondisjonen betraktelig. Kunne knapt løpe 2 km uten pause i august, nå løper jeg 5 km lett. Styrken min har også økt - gjør nå 15 push-ups (opp fra 5). Fotballteknikken er bedre, spesielt pasninger og førsteberøring.

**Hva som var vanskelig:**
Håndball fant jeg utfordrende. Jeg skjønte ikke reglene godt og følte meg ofte i veien. Også svømming var tøft - har aldri lært skikkelig teknikk, så jeg blir fort sliten.

**Mental utvikling:**
Det vanskeligste var å overvinne frykten for å feile foran andre. Jeg har lært at alle gjør feil, og at det er ok. Har også lært å sette realistiske mål og feire små fremskritt.

**Videre arbeid:**
Jeg vil fortsette å bygge kondisjon (mål: løpe 10 km). Vil også lære bedre svømmeteknikk ved å be om hjelp. Sosialt vil jeg bli bedre til å kommunisere i lagspill.

**Viktigste læring:**
Konsistens gir resultater. Når jeg møtte opp og gjorde innsatsen, skjedde fremgang. Kroppsøving handler ikke om å være best, men om å utvikle seg.

(Eleven skal skrive sin egen refleksjon basert på egne erfaringer)`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KROPPSOVING_VG1_4_7: TextbookChapter = {
  id: 'kroppsoving-vg1-4-7',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '4.7',
  title: 'Ski og skøyter',
  description: 'Lær klassisk langrenn, skøyting og skøyteteknikk for vinter-aktiviteter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Utføre klassisk og skøyte-teknikk på ski',
    'Mestre grunnleggende skøyte-teknikk',
    'Vurdere sikkerhet og utstyr for vinter-aktiviteter',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-4-7-intro',
      type: 'text',
      content: `# Ski og skøyter

Norge er et vinterland, og ski og skøyter er naturlige deler av norsk kultur og idrett. Langrenn kombinerer utholdenhet og teknikk i naturskjønne omgivelser, mens skøyter gir fartsfølelse og balanseutfordringer. Begge er utmerkede treningsformer som kan utføres hele vinteren. I dette kapittelet ser vi på grunnleggende teknikk i klassisk, skøyting og skøyter.`,
    },
    {
      id: 'kroppsoving-vg1-4-7-def1',
      type: 'definition',
      title: 'Klassisk langrenn',
      content: 'Klassisk langrenn er den tradisjonelle skiløpsteknikken der skiene går i parallelle spor. Fremføring skjer ved diagonal-teknikk (motsatt arm/ben) eller dobbeltdansing (begge staver samtidig).',
    },
    {
      id: 'kroppsoving-vg1-4-7-def2',
      type: 'definition',
      title: 'Skøyting',
      content: 'Skøyting er en raskere teknikk der skiene settes ut i V-form og man "skøyter" fremover som på rulleskøyter. Krever godt preparerte løyper og mer kraft enn klassisk.',
    },
    {
      id: 'kroppsoving-vg1-4-7-tip1',
      type: 'tip',
      title: 'Sikkerhet på ski',
      content: `- Sjekk værforhold og temperatur
- Fortell noen hvor du skal
- Ha med ekstra klær og mat
- Bruk refleks i mørket
- Kjenn egne grenser
- Hold deg til preparerte løyper`,
    },
    {
      id: 'kroppsoving-vg1-4-7-example1',
      type: 'example',
      title: 'Valg av teknikk',
      problem: 'Når skal du bruke klassisk vs skøyting?',
      solution: 'Klassisk: Kupert terreng, dype spor, trange løyper, nybegynnere, rolig tempo. Skøyting: Flatt/lett kupert, brede preparerte løyper, raskere tempo, erfarne skiløpere. Klassisk er også lettere på kroppen.',
    },
    {
      id: 'kroppsoving-vg1-4-7-def3',
      type: 'definition',
      title: 'Skøyter',
      content: 'Skøyter er sko med metallblader for å gli på is. Det finnes kunstløpskøyter (korte, buede blader for svinger) og hurtigløpsskøyter (lange, rette blader for fart). Nybegynnere bør bruke kunstløpskøyter eller hockeyskøyter.',
    },
    {
      id: 'kroppsoving-vg1-4-7-def4',
      type: 'definition',
      title: 'Diagonal-teknikk',
      content: 'Diagonal-teknikk er grunnleggende teknikk i klassisk langrenn. Motsatt arm og ben går fremover samtidig (høyre stav + venstre ski). Lang glidefase på hvert ski. Lik gange, men med glid.',
    },
    {
      id: 'kroppsoving-vg1-4-7-tip2',
      type: 'tip',
      title: 'Velge riktig skismøring',
      content: `- Kaldt og tørt (-10°C eller kaldere): Blå eller grønn feste
- Rundt frysepunktet (0 til -5°C): Lilla feste
- Våt snø (over 0°C): Rød feste eller klistervoks
- Usikker? Spør i sportsbutikk eller bruk felleski (alltid feste)
- Test smøringen: Skal gli frem og ha feste bakover`,
    },
    {
      id: 'kroppsoving-vg1-4-7-tip3',
      type: 'tip',
      title: 'Sikkerhet på isen',
      content: `- Minst 10 cm god is for å gå (helst 15 cm)
- Sjekk israpporter lokalt
- Unngå is ved utløp og innløp
- Gå ikke alene første gang på ny is
- Ha ispigger rundt halsen
- Fortell noen hvor du er`,
    },
    {
      id: 'kroppsoving-vg1-4-7-text-langrennsteknikk',
      type: 'text',
      content: `## Langrennsteknikker - klassisk og skøyting

**Klassisk langrenn:**

**1. Diagonal-teknikk:**
- Grunnleggende teknikk for all klassisk langrenn
- Vekselbevegelse: høyre arm/venstre ben, så motsatt
- **Utførelse:**
  - Skyv fra med høyre ski, gli på venstre
  - Samtidig: sett venstre stav i snøen og dra deg frem
  - Lang glidefase - ikke spring, gli!
  - Rytme: 1-2, 1-2 (skyv-gli, skyv-gli)
- **Vanlige feil:**
  - For kort glidefase (springer i stedet for å gli)
  - Dårlig armsving (for svak stavtak)
  - Stiv overkropp (skal rotere litt med bevegelsen)

**2. Dobbeltdansing:**
- Brukes i nedoverbakker og flat mark med god fart
- Begge staver settes samtidig
- **Utførelse:**
  - Stå på begge ski (parallelt i sporet)
  - Sving armene frem og sett begge staver samtidig
  - Dra deg frem med stavene, bøy fremover
  - Gli fremover mens du svinger armene tilbake
- **Når bruke:** Når du har god fart og diagonal blir for arbeidskrevende

**Skøyting:**

**1. V1-skøyting (laget):**
- En stavtak per skøyt
- Staver på samme side hver gang
- Mest energieffektiv skøyteteknikk

**2. V2-skøyting (dobbeltdans):**
- To stavtak per skøytesyklus (en på hver side)
- Brukes i flat mark og medvind
- Raskest på flatt

**Nøkkelen til god skøyting:**
- Skøyt utover (ikke rett frem)
- Vektoverføring fra ski til ski
- Kraftig push med foten
- Lang glidefase på hvert ski
- Aktiv armjobb med stavene`,
    },
    {
      id: 'kroppsoving-vg1-4-7-example2',
      type: 'example',
      title: 'Eksempel: Lære diagonal-teknikk',
      problem: 'Du er nybegynner og skal lære diagonal-teknikk. Hvordan går du frem steg for steg?',
      solution: `**Progresjon for å lære diagonal-teknikk:**

**Steg 1 - Gange uten staver (5-10 min):**
- Gå i sporet uten staver
- Fokus: Lang glidefase på hvert ski
- Føl balansen på ett ben
- Motsatt arm og ben beveger seg sammen

**Steg 2 - Gange med staver (10 min):**
- Ta på stavene
- Gå i sporet og bruk stavene naturlig
- Høyre stav når venstre fot går frem (som vanlig gange)
- Ikke tenk på kraft ennå, bare rytme

**Steg 3 - Øke glidefasen (10-15 min):**
- Prøv å gli lenger på hvert ski
- Tell "1-2-3" mens du glir på ett ski
- Føl vektoverføringen fra ski til ski
- Armene blir mer aktive når du glir

**Steg 4 - Kraftig stavtak (15 min):**
- Nå skal du dra deg frem med stavene
- Sett staven godt ned i snøen
- Dra deg aktivt frem (ikke bare vippe med armen)
- Bøy overkroppen litt fremover ved stavtak

**Steg 5 - Øve på bakker:**
- Opp bakke: Kortere skritt, kraftig stavtak
- Ned bakke: Hold balanse, øv dobbeltdansing
- Flat mark: Lang glid, rytme

**Vanlige feil og løsninger:**
- **Problem**: "Springer" i stedet for å gli
  - **Løsning**: Fokuser på å stå lenge på ett ski, tell til 3
- **Problem**: Svak stavtak
  - **Løsning**: Bøy mer fremover, dra med hele overkroppen
- **Problem**: Mister balansen
  - **Løsning**: Øv gange uten staver mer, bygg balanse

Etter 2-3 økter begynner teknikken å sitte!`,
    },
    {
      id: 'kroppsoving-vg1-4-7-example3',
      type: 'example',
      title: 'Eksempel: Lære å skøyte på skøyter',
      problem: 'Du har aldri vært på skøyter før. Hvordan lærer du grunnleggende balanseteknikk?',
      solution: `**Progresjon for nybegynnere på skøyter:**

**Steg 1 - På land først (5 min):**
- Ta på skøytene innendørs (med skøytebeskyttere)
- Stå opp, føl balansen
- Gå sidelengs for å føle bladene
- Bøy knærne, ha tyngdepunktet lavt

**Steg 2 - På isen ved kanten (10-15 min):**
- Gå ut på isen, hold i kanten
- Stå med knærne bøyd, lav stilling
- Øv å løfte ett ben om gangen (hold i kanten)
- Gli litt langs kanten mens du holder

**Steg 3 - Slippe kanten (10 min):**
- Slipp kanten, stå stille på isen
- Bøy knærne (ikke stå rak)
- Ta små skritt fremover (gå først, ikke gli)
- Armene ut for balanse

**Steg 4 - Begynne å gli (15 min):**
- Stå i V-posisjon (hæler sammen, tær ut)
- Skyv fra med ene foten, gli på andre
- Vekselvis høyre-venstre
- Små bevegelser først

**Steg 5 - Skøytebevegelse (20 min):**
- Skyv fra med ene foten, gli på andre
- Før foten tilbake under kroppen
- Skyv fra med andre foten
- Rytme: skyv-gli, skyv-gli
- Øk lengden på glidene

**Steg 6 - Stoppe og snu (10 min):**
- **Stoppe**: Drei ene skøyten på tvers (som å bremse på ski), skrap isen
- **Snu**: Ta små skritt i sirkel, eller "skøyt i sving"

**Viktige sikkerhetstips:**
- Ha alltid knærne bøyd (lett å gjenvinne balanse)
- Fall fremover hvis du mister balansen (ikke bakover - skade håndledd/hode)
- Bruk hjelm, spesielt som nybegynner
- Start på rolig tidspunkt (ikke fullt på isen)

**Vanlige feil:**
- Stå for rak → bøy knærne mer
- Se ned på isen → se fremover
- For store bevegelser → start smått

Etter 3-4 turer er du komfortabel på skøyter!`,
    },
    {
      id: 'kroppsoving-vg1-4-7-text-utstyr',
      type: 'text',
      content: `## Utstyr for ski og skøyter

**Langrennsutstyr:**

**Ski:**
- **Lengde**: For klassisk: Egen høyde + 20-25 cm. For skøyting: Egen høyde + 5-10 cm
- **Felleski vs smørefritt**: Felleski enklest (alltid feste), smørefritt billigere
- **Barn/nybegynnere**: Kortere ski er lettere å kontrollere

**Staver:**
- **Lengde klassisk**: Til armhulen
- **Lengde skøyting**: Til mellom skulder og nese
- **Materiale**: Aluminium (billig, tung), karbon (dyr, lett)

**Sko:**
- Må passe til bindingen (NNN eller SNS system)
- Klassisk: Mykere, fleksible
- Skøyting: Stivere, ankkelstøtte

**Klær:**
- Lag på lag: Undertøy, mellomlag, ytre lag
- Ikke bomull (blir våt og kald)
- Lue, hansker, eventuelt hodelykt

**Skøyteutstyr:**

**Skøyter:**
- **Kunstløpskøyter**: Korte blader, god til svinger, beste for nybegynnere
- **Hockeyskøyter**: Middels lange, stabile, gode allround
- **Hurtigløpsskøyter**: Lange blader, for erfarne, vanskelig å svinge

**Tilpasning:**
- Skøyter skal sitte stramt (ingen luftrom)
- Blader skal slipes jevnlig (ikke hjemme - gå til spesialist)
- Bruk skøytebeskyttere når du går utenfor isen

**Klær:**
- Ikke for varmt (blir fort varm)
- Hansker og lue
- Hjelm anbefales sterkt, spesielt nybegynnere

**Vedlikehold:**
- Tørk skøyter etter bruk (ikke rust)
- Oppbevaring: Tørr plass, med skøytebeskyttere

**Lån vs kjøp:**
- Mange skisenter og skøytehaller leier ut utstyr
- Lån først for å finne ut hva du liker
- Kjøp brukt for å spare penger (sjekk at bindinger/blader er ok)`,
    },
    {
      id: 'kroppsoving-vg1-4-7-text-tilpasning',
      type: 'text',
      content: `## Tilpasning for ulike forutsetninger

Ski og skøyter kan tilpasses for alle nivåer:

**Tilpasning etter nivå:**
- **Nybegynnere på ski**: Start på flat mark, korte distanser, fokus på balanse og glid, bruk klassisk teknikk først
- **Nybegynnere på skøyter**: Start med støtte ved vegg, øv balanse på ett ben, korte glideøvelser
- **Lavere kondisjon**: Kortere turer, hyppigere pauser, fokus på teknikk ikke fart
- **Avanserte**: Lengre distanser, intervaller, brattere terreng, skøyteteknikk

**Tilpasning ved begrensninger:**
- **Balanseproblemer**: Bruk bredere ski, treningsstaver med større håndfeste, start på flat mark
- **Kan ikke stå på ski**: Sit-ski (sitteski) for rullestolbrukere, pulk-trekk
- **Nedsatt syn**: Gå med guide, verbal beskrivelse av terreng, ekstra oppmerksomhet på sikkerhet
- **Angst for fart/fall**: Start på flat mark, unngå bratte bakker, fokus på kontroll og bremseteknikk

**Alternative roller:**
- **Smøreansvarlig**: Lære om skismøring, hjelpe andre med riktig smøring
- **Guidestyrer**: Analysere løyper og anbefale ruter
- **Utstyrsansvarlig**: Hjelpe andre med utstyr og tilpasning
- **Teknikk-analyserer**: Observer og gi tilbakemelding på teknikk
- **Sikkerhetsansvarlig**: Holde oversikt over gruppen i skiløypa`,
    },
    {
      id: 'kroppsoving-vg1-4-7-exercise1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-7-ex1',
        number: '1',
        type: 'classic',
        task: 'Beskriv diagonal-teknikken i klassisk langrenn.',
        solution: 'Diagonal-teknikk: Vekselbevegelse der motsatt arm og ben går frem samtidig (høyre stav + venstre fot). Lang glidefase på ett ski. Vektoverføring fra ski til ski. Aktiv stavtak og kraftig benspark. Rytmisk bevegelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-7-exercise2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-7-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom klassisk og skøyting?',
        solution: 'Klassisk: Ski i parallelle spor, diagonal-teknikk, langsommere, lettere å lære, fungerer i kupert terreng. Skøyting: Ski i V-form, skøyte-bevegelse, raskere, krevende teknikk, krever preparerte brede løyper og mer kraft.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-7-exercise3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-7-ex3',
        number: '3',
        type: 'classic',
        task: 'Du skal på en 5 km skitur i -8°C med tørr snø. Hvilken skismøring/feste bør du bruke, og hvorfor?',
        solution: 'Ved -8°C med tørr snø: Bruk **blå eller grønn festevoks**. Dette er for kaldt vær. Blå fungerer fra ca -2°C til -10°C, grønn for kaldere forhold. Ved kaldt og tørt er snøkrystallene harde og kantete, trenger hardere feste. Feil valg (f.eks. rød for varmt vær) vil gjøre at skiene klumper snø under (går tregt) eller ikke har feste (sklir bakover i bakker). Alternativ: Felleski fungerer i alle temperatur, men er litt tregere.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'kroppsoving-vg1-4-7-exercise4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-7-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar forskjellen mellom kunstløpskøyter og hurtigløpsskøyter. Hvilke er best for nybegynnere?',
        solution: `**Kunstløpskøyter:**
- Korte, buede blader
- Lett å svinge og manøvrere
- God balanse og stabilitet
- Brukes til kunstløp, dans på is
- **Best for nybegynnere**

**Hurtigløpsskøyter:**
- Lange, rette blader (30-45 cm)
- Vanskelig å svinge
- Høy fart, men ustabile
- Brukes til skøyteløp på bane
- **Kun for erfarne**

**Hvorfor kunstløp for nybegynnere:**
- Kortere blader = lettere å kontrollere
- Buede blader = kan svinge og stoppe
- Mer stabile - færre fall
- Når du er komfortabel (etter 5-10 turer), kan du vurdere hockeyskøyter (midt mellom)

**Mellomalternativ:**
Hockeyskøyter er gode allround-skøyter som kombinerer stabilitet og fart.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'kroppsoving-vg1-4-7-exercise5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-7-ex5',
        number: '5',
        type: 'classic',
        task: 'Lag en treningsplan for en nybegynner som vil lære klassisk langrenn. Planen skal dekke de 4 første turene og fokusere på gradvis progresjon.',
        solution: `**4-turs treningsplan for nybegynner i klassisk langrenn:**

**Tur 1 - Grunnleggende balanse (30-40 min):**
- **Sted**: Flat, preparert løype med spor
- **Fokus**: Gange uten staver (15 min), lang glidefase
- **Øvelse**: Gå i sporet, fokuser på balanse på ett ski, count "1-2-3" mens du glir
- **Deretter**: Ta på staver, gå og bruk staver naturlig (15 min)
- **Mål**: Føle rytme, bli komfortabel på skiene

**Tur 2 - Diagonal-teknikk intro (45 min):**
- **Sted**: Samme løype, flat
- **Fokus**: Diagonal-teknikk med staver
- **Øvelse**: Gå med staver, fokuser på motsatt arm/ben (20 min)
- **Deretter**: Øk glidefasen, prøv å gli lenger (20 min)
- **Ny**: Lett bakke - øv diagonal oppover (5 min)
- **Mål**: Få diagonal-rytmen inn

**Tur 3 - Variertterreng (60 min):**
- **Sted**: Løype med små bakker
- **Fokus**: Diagonal i ulike terreng
- **Øvelser**:
  - Flat mark: Lang glid, kraftig stavtak (20 min)
  - Opp bakke: Kortere skritt, mer kraft (15 min)
  - Ned bakke: Øv dobbeltdansing (begge staver samtidig) (15 min)
- **Mål**: Tilpasse teknikk til terreng

**Tur 4 - Lengre tur (75-90 min):**
- **Sted**: 3-5 km løype, variert terreng
- **Fokus**: Kombinere alt
- **Oppvarming**: 10 min rolig diagonal
- **Hoveddel**: Ski løypa i eget tempo, bruk riktig teknikk
- **Avslutning**: Tøy (5-10 min)
- **Mål**: Få erfaring med lengre distanse, bygge kondisjon

**Progresjon:**
- Tur 1-2: Flat mark, fokus på teknikk
- Tur 3: Introduser terreng (bakker)
- Tur 4: Lengre distanse, kombinere

**Tips:**
- Ha realistiske forventninger - det tar tid å lære
- Ikke gå alene som nybegynner
- Ha med ekstra klær og varm drikke
- Ha det gøy!

Etter disse 4 turene er du klar for å ski på egen hånd!`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-7-exercise6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-7-ex6',
        number: '6',
        type: 'classic',
        task: 'Hvilke sikkerhetstiltak bør du ta før en lang skitur i fjellet? Nevn minst 6 punkter.',
        solution: `**Sikkerhetstiltak før lang skitur i fjellet:**

**1. Planlegging:**
- Sjekk værmelding og snøforhold
- Planlegg rute og beregn tid (husk å legge til buffer)
- Vurder om turen passer ditt nivå og dagens forhold

**2. Informere andre:**
- Fortell noen hvor du skal og når du forventer å være tilbake
- Ha med mobiltelefon (fullt ladet), men stol ikke 100% på dekning

**3. Riktige klær:**
- Lag-på-lag prinsipp
- Ekstra klær i sekken (skift hvis du blir våt/svett)
- Lue, hansker, solbriller/goggles
- Refleks hvis du kan komme tilbake i mørket

**4. Mat og drikke:**
- Nok mat (energi til hele turen + ekstra)
- Drikke (termos med varm drikke, vann)
- Ekstra energi (sjokolade, frukt, nøtter)

**5. Nødvendig utstyr:**
- Kart og kompass (ikke bare GPS!)
- Førstehjelpsutstyr
- Ladetekke/varseltrekant (rød mylar-trekant - synlig fra lufta)
- Mobiltelefon + eventuelt powerbank
- Fyrstikker/lighter i vanntett pose

**6. Vurder forholdene underveis:**
- Vend i tide hvis været blir dårlig
- Lytt til kroppen - hvis sliten, ta pause eller snu
- Hold oversikt over tid og posisjon

**7. Ski med andre:**
- Helst ikke gå alene i fjellet
- Hold sammen i gruppen
- Den svakeste bestemmer tempo

**8. Kunnskaper:**
- Kunnskap om snøskred (unngå farlige områder)
- Førstehjelp
- Hvordan bruke nødutstyr

**Husk**: Det er alltid bedre å være overforberedt enn underforberedt. Fjellet er vakkert, men krever respekt.`,
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

export const KROPPSOVING_VG1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG1_3_1,
  CHAPTER_KROPPSOVING_VG1_3_2,
  CHAPTER_KROPPSOVING_VG1_3_3,
  CHAPTER_KROPPSOVING_VG1_3_4,
  CHAPTER_KROPPSOVING_VG1_3_5,
  CHAPTER_KROPPSOVING_VG1_3_6,
  CHAPTER_KROPPSOVING_VG1_4_1,
  CHAPTER_KROPPSOVING_VG1_4_2,
  CHAPTER_KROPPSOVING_VG1_4_3,
  CHAPTER_KROPPSOVING_VG1_4_4,
  CHAPTER_KROPPSOVING_VG1_4_5,
  CHAPTER_KROPPSOVING_VG1_4_6,
  CHAPTER_KROPPSOVING_VG1_4_7,
];
