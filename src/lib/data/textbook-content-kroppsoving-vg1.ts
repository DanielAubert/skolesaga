/**
 * Kroppsøving VG1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kroppsøving på VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Trening og treningsprinsipper
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_1: TextbookChapter = {
  id: 'kroppsoving-vg1-1',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '1',
  title: 'Trening og treningsprinsipper',
  description: 'Lær om grunnleggende treningsprinsipper og hvordan du kan planlegge effektiv trening.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge, gjennomføre og vurdere egentrening',
    'bruke treningsprinsipper for å utvikle fysiske egenskaper',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-1-intro',
      type: 'text',
      content: `På VG1 bygger vi videre på kunnskapen fra ungdomsskolen og går dypere inn i treningslære. Du skal lære å planlegge og gjennomføre trening basert på vitenskapelige prinsipper, og forstå hvordan kroppen tilpasser seg ulike typer belastning.`,
    },
    {
      id: 'kroppsoving-vg1-1-def-1',
      type: 'definition',
      title: 'Treningsbelastning',
      content: `Treningsbelastning er den totale påkjenningen kroppen utsettes for under trening. Den bestemmes av intensitet (hvor hardt), varighet (hvor lenge), frekvens (hvor ofte) og type aktivitet.`,
    },
    {
      id: 'kroppsoving-vg1-1-text-1',
      type: 'text',
      content: `**De grunnleggende treningsprinsippene**

**1. Belastningsprinsippet**
- Kroppen må belastes utover det normale for å utvikle seg
- For lav belastning gir ingen framgang
- For høy belastning kan føre til skade eller overtrenning
- Finn riktig balanse for din kropp

**2. Spesifisitetsprinsippet**
- Treningen må være rettet mot det du vil bli bedre på
- Løping gjør deg bedre til å løpe, ikke til å svømme
- Overføringsverdi: Noen øvelser har effekt på lignende aktiviteter

**3. Progresjonsprinsippet**
- Øk belastningen gradvis over tid
- Kroppen tilpasser seg og trenger nye utfordringer
- 10%-regelen: Øk ikke mer enn 10% per uke`,
    },
    {
      id: 'kroppsoving-vg1-1-text-2',
      type: 'text',
      content: `**4. Variasjonsprinsippet**
- Varier treningsformer, øvelser og intensitet
- Forebygger skader og platåer
- Holder motivasjonen oppe
- Gir allsidig utvikling

**5. Reversibilitetsprinsippet**
- Treningseffekt forsvinner ved inaktivitet
- "Use it or lose it"
- Vedlikeholdstrening kan bevare mye av formen

**6. Individualisering**
- Alle responderer ulikt på trening
- Alder, kjønn, genetikk og treningsbakgrunn påvirker
- Lær å lytte til din egen kropp`,
    },
    {
      id: 'kroppsoving-vg1-1-def-2',
      type: 'definition',
      title: 'Superkompensasjon',
      content: `Superkompensasjon er prosessen der kroppen bygger seg opp til et høyere nivå etter trening og hvile. Trening bryter ned, hvile bygger opp - sterkere enn før.`,
    },
    {
      id: 'kroppsoving-vg1-1-text-3',
      type: 'text',
      content: `**Treningsvariabler**

**Intensitet**: Hvor hardt du jobber
- Kan måles med puls, prosent av maksimal styrke, eller subjektiv følelse (Borg-skala)

**Volum**: Total mengde arbeid
- Antall sett x repetisjoner x vekt (styrke)
- Distanse eller tid (utholdenhet)

**Frekvens**: Hvor ofte du trener
- Avhenger av intensitet og mål
- Tid til restitusjon mellom økter

**Restitusjon**: Hvile mellom økter
- Avgjørende for tilpasning
- Søvn, ernæring og aktiv hvile`,
    },
    {
      id: 'kroppsoving-vg1-1-tip-1',
      type: 'tip',
      title: 'Borg-skalaen',
      content: `Borg-skalaen (6-20) brukes til å måle opplevd anstrengelse. 6 er ingen anstrengelse, 20 er maksimal. Moderat intensitet ligger rundt 12-14, høy intensitet 15-17.`,
    },
    {
      id: 'kroppsoving-vg1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva innebærer belastningsprinsippet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig forklaring av belastningsprinsippet.',
            solution: 'Kroppen må belastes utover det normale for å utvikle seg',
            multipleChoiceOptions: [
              'Kroppen må belastes utover det normale for å utvikle seg',
              'Man skal alltid trene maksimalt',
              'Belastning er farlig',
              'Alle trenger samme belastning',
            ],
          },
        ],
        solution: 'Belastningsprinsippet sier at kroppen trenger påkjenning utover det vanlige for å tilpasse seg og bli sterkere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er superkompensasjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar begrepet superkompensasjon.',
            solution: 'At kroppen bygger seg sterkere enn før etter trening og hvile',
            multipleChoiceOptions: [
              'At kroppen bygger seg sterkere enn før etter trening og hvile',
              'Å trene ekstra hardt',
              'Å hvile i flere uker',
              'En type kosttilskudd',
            ],
          },
        ],
        solution: 'Superkompensasjon skjer når kroppen restituerer etter trening og bygger seg opp til et høyere funksjonsnivå enn før.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr 10%-regelen i trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar 10%-regelen.',
            solution: 'Ikke øk treningsbelastningen med mer enn 10% per uke',
            multipleChoiceOptions: [
              'Ikke øk treningsbelastningen med mer enn 10% per uke',
              'Tren 10% av dagen',
              'Hvil 10% av treningen',
              'Bruk 10% av maksimal styrke',
            ],
          },
        ],
        solution: '10%-regelen er en tommelfingerregel for progresjon som hjelper å unngå overbelastning og skader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva måler Borg-skalaen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig bruk av Borg-skalaen.',
            solution: 'Opplevd anstrengelse under trening',
            multipleChoiceOptions: [
              'Opplevd anstrengelse under trening',
              'Maksimal styrke',
              'Kroppsvekt',
              'Blodtrykk',
            ],
          },
        ],
        solution: 'Borg-skalaen (6-20) brukes til å måle subjektiv opplevelse av hvor hard treningen føles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er variasjon i trening viktig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnen til å variere treningen.',
            solution: 'For å forebygge skader, unngå platåer og holde motivasjonen oppe',
            multipleChoiceOptions: [
              'For å forebygge skader, unngå platåer og holde motivasjonen oppe',
              'Fordi det er mer morsomt',
              'For å spare tid',
              'Det er ikke viktig å variere',
            ],
          },
        ],
        solution: 'Variasjon gir allsidig utvikling, forebygger overbelastningsskader og holder treningen interessant.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en enkel treningsplan for en uke basert på treningsprinsippene.',
        solution: 'En god plan inkluderer variasjon i type trening, passende belastning, og hviledager. Eksempel: Mandag - styrke, Tirsdag - hvile, Onsdag - utholdenhet, Torsdag - hvile, Fredag - lagidrett, Helg - aktiv restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Anatomi og fysiologi
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_2: TextbookChapter = {
  id: 'kroppsoving-vg1-2',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '2',
  title: 'Anatomi og fysiologi',
  description: 'Lær om kroppens oppbygning og hvordan den fungerer under fysisk aktivitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå kroppens oppbygning og funksjon',
    'bruke kunnskap om anatomi til å trene trygt og effektivt',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-2-intro',
      type: 'text',
      content: `Anatomi handler om kroppens oppbygning, mens fysiologi handler om hvordan kroppen fungerer. For å trene smart og unngå skader er det viktig å forstå hvordan muskler, skjelett, hjerte og lunger arbeider sammen.`,
    },
    {
      id: 'kroppsoving-vg1-2-def-1',
      type: 'definition',
      title: 'Bevegelsesapparatet',
      content: `Bevegelsesapparatet består av skjelett, muskler, ledd, sener og leddbånd som sammen gjør det mulig for kroppen å bevege seg.`,
    },
    {
      id: 'kroppsoving-vg1-2-text-1',
      type: 'text',
      content: `**Skjelettet**

**Funksjoner**:
- Gir kroppen form og støtte
- Beskytter indre organer
- Festepunkt for muskler
- Produserer blodceller i beinmargen
- Lagrer mineraler (kalsium, fosfor)

**Hovedgrupper**:
- Aksialskjelettet: Hodeskalle, ryggrad, brystkasse
- Ekstremitetsskjelettet: Armer og bein med skulderbue og bekken

**Viktige bein for bevegelse**:
- Lårbein (femur) - kroppens lengste bein
- Leggbein (tibia og fibula)
- Overarmsbein (humerus)
- Bekken - forbinder overkropp og underkropp`,
    },
    {
      id: 'kroppsoving-vg1-2-text-2',
      type: 'text',
      content: `**Ledd og bevegelse**

**Leddtyper**:
- Kuleledd: Stor bevegelighet (skulder, hofte)
- Hengselled: Bevegelse i én retning (albue, kne)
- Vridledd: Rotasjon (underarm)
- Flateledd: Glidende bevegelser (håndledd)

**Leddets oppbygning**:
- Leddbrusk: Beskytter beinendene
- Leddkapsel: Omslutter leddet
- Leddbånd: Stabiliserer leddet
- Leddvæske: Smører og nærer

**Bevegelsestyper**:
- Fleksjon: Bøying (reduserer vinkel)
- Ekstensjon: Strekking (øker vinkel)
- Abduksjon: Bevegelse fra kroppens midtlinje
- Adduksjon: Bevegelse mot kroppens midtlinje
- Rotasjon: Dreiebevegelse`,
    },
    {
      id: 'kroppsoving-vg1-2-def-2',
      type: 'definition',
      title: 'Muskelkontraksjon',
      content: `Muskelkontraksjon er prosessen der muskelfibrene forkortes og utvikler kraft. Dette skjer når nervesignaler aktiverer muskelproteinene aktin og myosin.`,
    },
    {
      id: 'kroppsoving-vg1-2-text-3',
      type: 'text',
      content: `**Musklene**

**Muskeltyper**:
- Skjelettmuskulatur: Viljestyrt, beveger kroppen
- Hjertemuskulatur: Automatisk, pumper blod
- Glatt muskulatur: Automatisk, indre organer

**Muskelfibretyper**:
- Type I (langsomme): Utholdende, aerobe, røde
- Type IIa (mellomraske): Både utholdenhet og kraft
- Type IIx (raske): Eksplosive, anaerobe, hvite

**Viktige muskler**:
- Quadriceps: Strekker kneet (framsiden lår)
- Hamstrings: Bøyer kneet (baksiden lår)
- Gluteus: Hoftestrekkere (setemusklene)
- Core: Stabiliserer ryggrad (mage, rygg)
- Deltoid: Løfter armen (skulder)`,
    },
    {
      id: 'kroppsoving-vg1-2-text-4',
      type: 'text',
      content: `**Hjerte-karsystemet**

**Hjertet**:
- Pumper blod gjennom kroppen
- Ca. 5 liter blod per minutt i hvile
- Kan øke til 20-25 liter under hard trening
- Hvilepuls: 60-80 slag/min
- Maksimal puls: ca. 220 minus alder

**Blodet**:
- Transporterer oksygen og næringsstoffer
- Fjerner avfallsstoffer (CO2, melkesyre)
- Røde blodceller inneholder hemoglobin

**Lungene**:
- Tar opp oksygen fra luften
- Kvitter seg med karbondioksid
- Pustefrekvens øker ved aktivitet`,
    },
    {
      id: 'kroppsoving-vg1-2-warning-1',
      type: 'warning',
      title: 'Riktig løfteteknikk',
      content: `Løft alltid med rett rygg og bøyde knær. Ryggsøylen er sårbar for skader ved feil belastning, spesielt i korsryggen.`,
    },
    {
      id: 'kroppsoving-vg1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva består bevegelsesapparatet av?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av bevegelsesapparatet.',
            solution: 'Skjelett, muskler, ledd, sener og leddbånd',
            multipleChoiceOptions: [
              'Skjelett, muskler, ledd, sener og leddbånd',
              'Bare muskler',
              'Bare skjelett',
              'Hjerte og lunger',
            ],
          },
        ],
        solution: 'Bevegelsesapparatet er et samspill mellom passive strukturer (skjelett, ledd) og aktive strukturer (muskler) forbundet med sener og leddbånd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er et kuleledd?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv et kuleledd og gi eksempler.',
            solution: 'Et ledd med stor bevegelighet i alle retninger, som skulder og hofte',
            multipleChoiceOptions: [
              'Et ledd med stor bevegelighet i alle retninger, som skulder og hofte',
              'Et ledd som bare kan bøyes og strekkes',
              'Et ledd som er helt stivt',
              'Et ledd bare i hånden',
            ],
          },
        ],
        solution: 'Kuleledd har en kuleformet leddflate som passer i en skålformet grop, noe som gir bevegelse i alle retninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på Type I og Type II muskelfibre?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar forskjellen på de to muskelfibretypene.',
            solution: 'Type I er langsomme og utholdende, Type II er raske og eksplosive',
            multipleChoiceOptions: [
              'Type I er langsomme og utholdende, Type II er raske og eksplosive',
              'De er helt like',
              'Type II er for utholdenhet',
              'Type I er bare i hjertet',
            ],
          },
        ],
        solution: 'Type I-fibre (røde) er spesialisert for langvarig, aerob aktivitet. Type II-fibre (hvite) gir rask, kraftfull kontraksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva betyr fleksjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av fleksjon.',
            solution: 'Bøying av et ledd som reduserer vinkelen',
            multipleChoiceOptions: [
              'Bøying av et ledd som reduserer vinkelen',
              'Strekking av et ledd',
              'Rotasjon av et ledd',
              'Bevegelse til siden',
            ],
          },
        ],
        solution: 'Fleksjon er bøying som gjør vinkelen mellom to kroppsdeler mindre, for eksempel å bøye albuen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan beregner du omtrentlig maksimal puls?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig formel for maksimal puls.',
            solution: '220 minus alder',
            multipleChoiceOptions: [
              '220 minus alder',
              '200 pluss alder',
              '180 minus alder',
              'Hvilepuls ganger 2',
            ],
          },
        ],
        solution: 'Den enkleste formelen for å estimere maksimal puls er 220 minus din alder. En 17-åring har altså ca. 203 i maks puls.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Kosthold og restitusjon
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_3: TextbookChapter = {
  id: 'kroppsoving-vg1-3',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '3',
  title: 'Kosthold og restitusjon',
  description: 'Lær om sammenhengen mellom ernæring, søvn og fysisk prestasjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå betydningen av kosthold for trening og prestasjon',
    'planlegge ernæring rundt trening',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-3-intro',
      type: 'text',
      content: `Kosthold og restitusjon er like viktig som selve treningen. Uten riktig næring og hvile får ikke kroppen bygget seg opp, og treningseffekten blir dårligere. På VG1 lærer du å optimalisere disse faktorene.`,
    },
    {
      id: 'kroppsoving-vg1-3-def-1',
      type: 'definition',
      title: 'Makronæringsstoffer',
      content: `Makronæringsstoffer er næringsstoffer kroppen trenger i store mengder: karbohydrater, proteiner og fett. De gir energi og byggematerialer til kroppen.`,
    },
    {
      id: 'kroppsoving-vg1-3-text-1',
      type: 'text',
      content: `**Karbohydrater - Kroppens drivstoff**

**Funksjoner**:
- Hovedenergikilde ved moderat til høy intensitet
- Lagres som glykogen i muskler og lever
- Ca. 400-500 gram kan lagres i kroppen

**Typer**:
- Enkle (hurtige): Sukker, frukt - raskt opptak
- Sammensatte (langsomme): Fullkorn, grønnsaker - jevnt opptak

**Anbefalinger for aktive**:
- 5-7 g per kg kroppsvekt ved moderat trening
- 7-10 g per kg ved hard trening
- Prioriter sammensatte karbohydrater til hverdags

**Glykemisk indeks (GI)**:
- Høy GI: Rask blodsukkerstigning
- Lav GI: Langsom, jevn energi`,
    },
    {
      id: 'kroppsoving-vg1-3-text-2',
      type: 'text',
      content: `**Proteiner - Byggesteiner**

**Funksjoner**:
- Bygger og reparerer muskelvev
- Enzymer og hormoner
- Immunforsvar

**Kilder**:
- Animalske: Kjøtt, fisk, egg, meieri
- Plantbaserte: Belgfrukter, nøtter, soya

**Anbefalinger for aktive**:
- 1,2-2,0 g per kg kroppsvekt
- Fordel inntaket utover dagen
- 20-40 g protein per måltid er optimalt

**Aminosyrer**:
- Essensielle: Må tilføres via mat
- Fullverdige proteiner inneholder alle essensielle`,
    },
    {
      id: 'kroppsoving-vg1-3-text-3',
      type: 'text',
      content: `**Fett - Energilager og mer**

**Funksjoner**:
- Energikilde ved lav intensitet
- Bygger cellemembraner
- Transporterer fettløselige vitaminer
- Hormoner (testosteron, østrogen)

**Typer**:
- Umettede (sunne): Olivenolje, nøtter, fet fisk
- Mettede: Smør, kjøtt - begrens mengden
- Transfett: Unngå (bearbeidet mat)

**Anbefalinger**:
- 25-35% av energiinntaket
- Prioriter umettede fettsyrer
- Omega-3 fra fet fisk er spesielt gunstig`,
    },
    {
      id: 'kroppsoving-vg1-3-def-2',
      type: 'definition',
      title: 'Restitusjon',
      content: `Restitusjon er prosessen der kroppen gjenoppretter seg etter trening. Det inkluderer reparasjon av muskelvev, påfylling av energilagre og tilpasning til belastningen.`,
    },
    {
      id: 'kroppsoving-vg1-3-text-4',
      type: 'text',
      content: `**Timing av næring**

**Før trening (2-4 timer)**:
- Karbohydratrik mat
- Moderat protein
- Lite fett og fiber (tregfordøyelig)

**Under trening (over 60 min)**:
- Vann ved moderat aktivitet
- Sportsdrikk ved hard/lang aktivitet
- Enkle karbohydrater ved behov

**Etter trening (innen 30-60 min)**:
- Kombinasjon av karbohydrat og protein
- Forhold ca. 3:1 eller 4:1 (karbo:protein)
- Eksempler: Sjokolademelk, brød med pålegg, smoothie`,
    },
    {
      id: 'kroppsoving-vg1-3-text-5',
      type: 'text',
      content: `**Søvn og restitusjon**

**Søvnens betydning**:
- Veksthormon utskilles under dyp søvn
- Muskelreparasjon skjer primært om natten
- Mental restitusjon og læring

**Anbefalinger for ungdom**:
- 8-10 timer søvn per natt
- Regelmessige leggetider
- Unngå skjermer før sengetid

**Aktiv restitusjon**:
- Lett aktivitet dagen etter hard trening
- Øker blodsirkulasjonen
- Fremmer raskere gjenoppretting

**Hydratisering**:
- Drikk jevnlig gjennom dagen
- Sjekk urinfarge (lys = godt hydrert)
- Økt behov under og etter aktivitet`,
    },
    {
      id: 'kroppsoving-vg1-3-tip-1',
      type: 'tip',
      title: 'Restitusjonssjekk',
      content: `Mål hvilepulsen om morgenen. Hvis den er betydelig høyere enn normalt, kan det tyde på at kroppen ikke er ferdig restituert.`,
    },
    {
      id: 'kroppsoving-vg1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er makronæringsstoffer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av makronæringsstoffer.',
            solution: 'Karbohydrater, proteiner og fett',
            multipleChoiceOptions: [
              'Karbohydrater, proteiner og fett',
              'Vitaminer og mineraler',
              'Bare proteiner',
              'Vann og fiber',
            ],
          },
        ],
        solution: 'Makronæringsstoffer er de tre hovedgruppene av næring som gir energi: karbohydrater, proteiner og fett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mye protein anbefales for aktive personer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig proteinanbefaling.',
            solution: '1,2-2,0 gram per kg kroppsvekt',
            multipleChoiceOptions: [
              '1,2-2,0 gram per kg kroppsvekt',
              '0,5 gram per kg kroppsvekt',
              '5 gram per kg kroppsvekt',
              'Så mye som mulig',
            ],
          },
        ],
        solution: 'Aktive personer trenger 1,2-2,0 gram protein per kg kroppsvekt for optimal muskelbygging og restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva bør du spise etter trening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig restitusjonsmat.',
            solution: 'Kombinasjon av karbohydrater og protein',
            multipleChoiceOptions: [
              'Kombinasjon av karbohydrater og protein',
              'Bare protein',
              'Bare fett',
              'Ingenting - faste etter trening',
            ],
          },
        ],
        solution: 'Etter trening trenger kroppen karbohydrater for å fylle glykogenlagrene og protein for muskelreparasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor mye søvn anbefales for ungdom?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig søvnanbefaling.',
            solution: '8-10 timer per natt',
            multipleChoiceOptions: [
              '8-10 timer per natt',
              '5-6 timer per natt',
              '12-14 timer per natt',
              'Søvn er ikke viktig',
            ],
          },
        ],
        solution: 'Ungdom trenger 8-10 timer søvn for optimal restitusjon, vekst og mental funksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er aktiv restitusjon?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva aktiv restitusjon innebærer.',
            solution: 'Lett aktivitet dagen etter hard trening for å fremme gjenoppretting',
            multipleChoiceOptions: [
              'Lett aktivitet dagen etter hard trening for å fremme gjenoppretting',
              'Å trene ekstra hardt',
              'Å hvile helt',
              'Å ta kosttilskudd',
            ],
          },
        ],
        solution: 'Aktiv restitusjon betyr lett bevegelse (gåtur, lett sykling) som øker blodsirkulasjonen og fremmer raskere restitusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Individuelle idretter
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_4: TextbookChapter = {
  id: 'kroppsoving-vg1-4',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '4',
  title: 'Individuelle idretter',
  description: 'Lær om teknikk, trening og utvikling i individuelle idretter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utvikle ferdigheter i individuelle idretter',
    'vurdere egen utvikling og sette mål',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-4-intro',
      type: 'text',
      content: `Individuelle idretter gir deg mulighet til å fokusere helt på egen utvikling. Du konkurrerer primært mot deg selv og kan sette personlige mål. På VG1 fordyper vi oss i teknikk, taktikk og mental trening i utvalgte individuelle idretter.`,
    },
    {
      id: 'kroppsoving-vg1-4-def-1',
      type: 'definition',
      title: 'Teknikk',
      content: `Teknikk er måten en bevegelse utføres på for å oppnå best mulig resultat med minst mulig energibruk. God teknikk er effektiv og skåner kroppen.`,
    },
    {
      id: 'kroppsoving-vg1-4-text-1',
      type: 'text',
      content: `**Friidrett**

**Løping**:
- Sprintstart: Eksplosiv start fra startblokker
- Løpsteknikk: Høy knefrekens, aktivt fraspark
- Tempofordeling: Jevnt eller negativ split

**Hopp**:
- Lengdehopp: Tilløp, satsen, svev, landing
- Høydehopp: Fosbury flop er dominerende teknikk
- Satsbein og armsving avgjørende

**Kast**:
- Kulesøt: Glidende eller roterende teknikk
- Spydkast: Tilløp, kastkryss, kast
- Kroppens rotasjon gir kraft`,
    },
    {
      id: 'kroppsoving-vg1-4-text-2',
      type: 'text',
      content: `**Svømming**

**De fire stilartene**:

**Crawl (fristil)**:
- Raskeste stilen
- Vekselvis armtak med rulling
- Beinspark holder kroppen høyt
- Pusting til siden

**Ryggcrawl**:
- Liggende på ryggen
- Kontinuerlig armtak
- Stabilt beinspark
- Enkel pust

**Brystsvømming**:
- Symmetriske bevegelser
- Froske-spark med beina
- Mest energieffektiv over lange distanser

**Butterfly**:
- Samtidig armtak over vannet
- Delfinspark med beina
- Krevende, men vakker stil`,
    },
    {
      id: 'kroppsoving-vg1-4-text-3',
      type: 'text',
      content: `**Langrenn**

**Klassisk stil**:
- Diagonalgang: Motsatt arm og bein
- Staking: Framdrift fra stavene
- Fiskebein: I bratte motbakker

**Fristil (skøyting)**:
- Sideveis fraspark som på skøyter
- Padling: Armer og bein samtidig
- Dobbeldans: Høy frekvens

**Smøring og utstyr**:
- Festesmurning for feste under foten (klassisk)
- Glidsmurning for gli
- Riktig valg av ski til føret`,
    },
    {
      id: 'kroppsoving-vg1-4-text-4',
      type: 'text',
      content: `**Styrketrening som individuell idrett**

**Øvelser med frie vekter**:
- Knebøy: Hele underkroppen
- Markløft: Rygg, rumpe, lår
- Benkpress: Bryst, skuldre, triceps
- Roing: Rygg, biceps

**Teknikk og sikkerhet**:
- Kontrollert bevegelse
- Stabil core
- Full bevegelsesutslag
- Pust ut ved tyngste fase

**Progresjon**:
- Lær teknikken først med lett vekt
- Øk gradvis
- Noter fremgang i treningsdagbok`,
    },
    {
      id: 'kroppsoving-vg1-4-tip-1',
      type: 'tip',
      title: 'Videoanalyse',
      content: `Film deg selv når du trener teknikk. Ved å se på opptaket kan du oppdage feil du ikke merker selv, og sammenligne med gode forbilder.`,
    },
    {
      id: 'kroppsoving-vg1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner diagonalgang i langrenn?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv diagonalgang.',
            solution: 'Motsatt arm og bein arbeider sammen, som ved naturlig gange',
            multipleChoiceOptions: [
              'Motsatt arm og bein arbeider sammen, som ved naturlig gange',
              'Samme arm og bein arbeider sammen',
              'Bare armene brukes',
              'Bare beina brukes',
            ],
          },
        ],
        solution: 'Diagonalgang er den grunnleggende klassiske teknikken der høyre arm og venstre bein beveger seg frem samtidig, og omvendt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken svømmestil regnes som raskest?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den raskeste svømmestilen.',
            solution: 'Crawl (fristil)',
            multipleChoiceOptions: [
              'Crawl (fristil)',
              'Brystsvømming',
              'Butterfly',
              'Ryggcrawl',
            ],
          },
        ],
        solution: 'Crawl er den raskeste svømmeteknikken og brukes i fristilkonkurranser på alle distanser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er viktig ved markløft?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det viktigste ved markløft.',
            solution: 'Rett rygg og stabil core gjennom hele løftet',
            multipleChoiceOptions: [
              'Rett rygg og stabil core gjennom hele løftet',
              'Å løfte så tungt som mulig',
              'Å løfte raskt',
              'Å holde pusten',
            ],
          },
        ],
        solution: 'Ved markløft er det avgjørende å holde ryggen rett og core stabil for å unngå skader og overføre kraft effektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en negativ split i løping?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar begrepet negativ split.',
            solution: 'Å løpe andre halvdel av distansen raskere enn første',
            multipleChoiceOptions: [
              'Å løpe andre halvdel av distansen raskere enn første',
              'Å løpe saktere og saktere',
              'Å løpe i motbakke',
              'Å gi opp underveis',
            ],
          },
        ],
        solution: 'Negativ split betyr at du disponerer kreftene slik at du løper raskere mot slutten. Dette regnes som smart løping.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en individuell idrett og beskriv tre viktige tekniske elementer.',
        solution: 'Svar vil variere. Et godt svar inkluderer tre konkrete teknikkelementer med forklaring på hvorfor de er viktige for prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Lagidretter og samspill
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_5: TextbookChapter = {
  id: 'kroppsoving-vg1-5',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '5',
  title: 'Lagidretter og samspill',
  description: 'Lær om taktikk, samarbeid og spillforståelse i lagidretter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'delta i lagspill med god spillforståelse',
    'samarbeide og kommunisere effektivt i lag',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-5-intro',
      type: 'text',
      content: `Lagidretter krever både individuelle ferdigheter og evne til samarbeid. For å lykkes som lag må spillerne forstå hverandres roller, kommunisere godt og utføre taktiske planer sammen.`,
    },
    {
      id: 'kroppsoving-vg1-5-def-1',
      type: 'definition',
      title: 'Spillforståelse',
      content: `Spillforståelse er evnen til å "lese" spillet - forstå situasjoner, forutse hva som skjer, og ta gode beslutninger i sanntid.`,
    },
    {
      id: 'kroppsoving-vg1-5-text-1',
      type: 'text',
      content: `**Fotball**

**Angrepsprinsipper**:
- Bredde: Bruk hele banens bredde
- Dybde: Spillere på forskjellige linjer
- Bevegelse: Løp uten ball for å skape rom
- Improvisasjon: Utnytt muligheter

**Forsvarsprinsipper**:
- Press: Sett ballholder under press
- Sikring: Ha backup bak pressspiller
- Dekking: Dekk rom og motspillere
- Kompakthet: Hold linjer tett

**Spillsystemer**:
- 4-3-3: Offensivt med tre spisser
- 4-4-2: Balansert, to spisser
- 3-5-2: Mange på midtbanen`,
    },
    {
      id: 'kroppsoving-vg1-5-text-2',
      type: 'text',
      content: `**Håndball**

**Angrepsspill**:
- Kontringer: Raske angrep etter ballerobring
- Oppbygningsspill: Tålmodig ballføring
- Gjennombrudd: 1-mot-1 eller kombinasjoner
- Skuddtyper: Hoppskudd, underarmsskudd, lobb

**Forsvarssystemer**:
- 6-0: Seks i linje, kompakt
- 5-1: Én utspiller som presser
- 3-2-1: Tre på linje, to fremskutt, én helt fremme

**Posisjoner**:
- Målvakt: Siste skanse
- Kantspiller: Angrep fra sidene
- Bakspiller: Playmaker og skudd utenfra
- Strek: Spill nær motstanderens mål`,
    },
    {
      id: 'kroppsoving-vg1-5-text-3',
      type: 'text',
      content: `**Basketball**

**Grunnleggende**:
- Dribling: Føre ballen med én hånd
- Pasninger: Brystpasning, stusspasning, overhead
- Skudd: Layup, jumpshot, trepoenger

**Angrep**:
- Pick and roll: Skjerm for ballholder
- Fastbreak: Rask overgang
- Bevegelse uten ball: Cut, screen away

**Forsvar**:
- Mannsforsvar: Følger tildelt spiller
- Soneforsvar: Dekker områder
- Press: Høyt press for å tvinge feil

**Viktige regler**:
- 24 sekunder til å skyte
- 8 sekunder til å krysse midtbanen
- Ingen dobbeldribling`,
    },
    {
      id: 'kroppsoving-vg1-5-text-4',
      type: 'text',
      content: `**Volleyball**

**Grunnleggende slag**:
- Baggerslag: Underarmsmottak
- Fingerslag: Presist setting
- Smash: Kraftig avslutning
- Serve: Starter spillet

**Spillsystem (rotasjon)**:
- Seks spillere som roterer etter servebytte
- Tre fremme (angrep), tre bak (forsvar)
- Setter er regissør

**Taktikk**:
- Mottak: Stabil plattform med bagger
- Oppspill: Setting til angriper
- Angrep: Smash eller plassert ball
- Blokkering: Stoppe motstanderens angrep`,
    },
    {
      id: 'kroppsoving-vg1-5-tip-1',
      type: 'tip',
      title: 'Kommunikasjon',
      content: `God kommunikasjon er nøkkelen til godt samspill. Snakk høyt, gi tydelige beskjeder, og bruk korte, presise ord. "Min!" "Ut!" "Skyt!" `,
    },
    {
      id: 'kroppsoving-vg1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr spillforståelse?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av spillforståelse.',
            solution: 'Evnen til å lese spillet og ta gode beslutninger',
            multipleChoiceOptions: [
              'Evnen til å lese spillet og ta gode beslutninger',
              'Å kunne reglene',
              'Å være raskest',
              'Å score mest mål',
            ],
          },
        ],
        solution: 'Spillforståelse handler om å forstå situasjoner, forutse hva som skjer, og velge riktig handling i spillet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er pick and roll i basketball?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar pick and roll.',
            solution: 'En spiller setter skjerm for ballholder, så ruller mot kurven',
            multipleChoiceOptions: [
              'En spiller setter skjerm for ballholder, så ruller mot kurven',
              'Et straffekast',
              'En type dribling',
              'En forsvarsformasjon',
            ],
          },
        ],
        solution: 'Pick and roll er en klassisk samhandling der én spiller skjermer (pick) og så beveger seg mot kurven (roll) for pasning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er 6-0 forsvar i håndball?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv 6-0 forsvar.',
            solution: 'Alle seks utespillere står på linje foran mål',
            multipleChoiceOptions: [
              'Alle seks utespillere står på linje foran mål',
              'Ingen forsvarere',
              'Seks målvakter',
              'Bare én forsvarer',
            ],
          },
        ],
        solution: '6-0 forsvar er et kompakt forsvarssystem der alle seks utespillere danner en tett linje foran målet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er baggerslag i volleyball?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv baggerslaget.',
            solution: 'Mottak med underarmene samlet, brukes til å ta imot harde baller',
            multipleChoiceOptions: [
              'Mottak med underarmene samlet, brukes til å ta imot harde baller',
              'Et kraftig smashshudd',
              'En type serve',
              'Fingerslag over hodet',
            ],
          },
        ],
        solution: 'Baggerslag utføres med underarmene samlet og strak arm. Det gir stabil plattform for mottak av serve og harde baller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er bredde viktig i fotballangrep?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar verdien av bredde i angrep.',
            solution: 'Det strekker motstanderens forsvar og skaper rom',
            multipleChoiceOptions: [
              'Det strekker motstanderens forsvar og skaper rom',
              'Det er penere å se på',
              'Det er enklere å forsvare',
              'Det sparer energi',
            ],
          },
        ],
        solution: 'Bredde i angrep tvinger forsvaret til å dekke større områder, noe som skaper rom i midten og mellom forsvarerne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv en taktisk plan for ditt lag i en valgfri lagidrett.',
        solution: 'Svar vil variere. Et godt svar inkluderer formasjon, roller, angreps- og forsvarsstrategi tilpasset lagets styrker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Dans og bevegelsesaktiviteter
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_6: TextbookChapter = {
  id: 'kroppsoving-vg1-6',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '6',
  title: 'Dans og bevegelsesaktiviteter',
  description: 'Lær om ulike danseformer, koreografi og kreativ bevegelse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utføre og skape dans og bevegelsesaktiviteter',
    'uttrykke seg gjennom bevegelse',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-6-intro',
      type: 'text',
      content: `Dans kombinerer fysisk aktivitet med kreativitet og uttrykk. På VG1 utforsker vi ulike dansetradisjoner og lærer å skape egne koreografier. Dans utvikler koordinasjon, rytmefølelse og evne til å uttrykke seg gjennom kroppen.`,
    },
    {
      id: 'kroppsoving-vg1-6-def-1',
      type: 'definition',
      title: 'Koreografi',
      content: `Koreografi er kunsten å komponere dans ved å sette sammen bevegelser, rombruk, dynamikk og musikk til en helhetlig framføring.`,
    },
    {
      id: 'kroppsoving-vg1-6-text-1',
      type: 'text',
      content: `**Dansetradisjoner**

**Folkedans**:
- Norske folkedanser: Halling, springar, gangar
- Kulturarv og fellesskap
- Faste mønstre og trinn

**Pardans**:
- Vals: Elegant 3/4-takt
- Swing: Energisk og improvisert
- Salsa: Latinamerikansk rytme

**Moderne dans/Contemporary**:
- Frigjort fra klassiske regler
- Utforsker bevegelsesmuligheter
- Uttrykker følelser og ideer

**Urbane danser**:
- Hiphop: Grooves og isolasjoner
- Breaking: Akrobatisk gulvdans
- House: Fotarbeid og rytme`,
    },
    {
      id: 'kroppsoving-vg1-6-text-2',
      type: 'text',
      content: `**Bevegelseskvaliteter**

**Tid**:
- Tempo: Raskt eller sakte
- Rytme: Jevn eller synkopert
- Aksenter: Plutselige markeringer

**Rom**:
- Nivåer: Lavt, mellom, høyt
- Retninger: Alle retninger
- Baner: Rette, buede, sirkler

**Kraft/dynamikk**:
- Tung/lett
- Bundet/fri
- Kraftfull/myk

**Flyt**:
- Sammenhengende bevegelser
- Staccato eller legato
- Overganger`,
    },
    {
      id: 'kroppsoving-vg1-6-text-3',
      type: 'text',
      content: `**Å lage koreografi**

**1. Idéfase**:
- Velg tema, følelse eller konsept
- Finn inspirerende musikk
- Brainstorm bevegelser

**2. Utforsking**:
- Improvisér fritt til musikken
- Prøv ut ulike bevegelser
- Noter det som fungerer

**3. Strukturering**:
- Velg ut de beste elementene
- Bygg opp med begynnelse, midtdel, avslutning
- Skap gjentakelser og variasjoner

**4. Finpuss**:
- Øv på overganger
- Jobb med detaljer og uttrykk
- Tilpass til musikken

**5. Fremføring**:
- Øv til det sitter
- Vær til stede i bevegelsen
- Kommuniser med publikum`,
    },
    {
      id: 'kroppsoving-vg1-6-text-4',
      type: 'text',
      content: `**Turn og akrobatikk**

**Grunnleggende elementer**:
- Ruller: Forover, bakover, hopp til rull
- Hjul: Sidelengs rotasjon
- Håndstående: Balanse på hendene
- Broer: Bue med ryggen

**Partnerelementer**:
- Løft og bæring
- Pyramider
- Synkrone bevegelser

**Sikkerhet**:
- Alltid på matter
- Spotter ved nye øvelser
- Bygg opp gradvis

**Akrobatikk i dans**:
- Integrert med koreografi
- Gir visuelle høydepunkter
- Krever styrke og teknikk`,
    },
    {
      id: 'kroppsoving-vg1-6-tip-1',
      type: 'tip',
      title: 'Gjentakelse med variasjon',
      content: `En effektiv koreografi bruker gjentakelse for gjenkjennelighet, men med variasjoner som holder det interessant - som et refreng med nye vrier.`,
    },
    {
      id: 'kroppsoving-vg1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er koreografi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av koreografi.',
            solution: 'Kunsten å komponere dans',
            multipleChoiceOptions: [
              'Kunsten å komponere dans',
              'En type musikk',
              'En dansestil',
              'Kostymene i en forestilling',
            ],
          },
        ],
        solution: 'Koreografi er prosessen med å skape dans ved å sette sammen bevegelser, rombruk og dynamikk til musikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva menes med nivåer i dans?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar nivåer i dans.',
            solution: 'Høyden i rommet: lavt (gulv), mellom (stående), høyt (hopp)',
            multipleChoiceOptions: [
              'Høyden i rommet: lavt (gulv), mellom (stående), høyt (hopp)',
              'Hvor vanskelig dansen er',
              'Antall dansere',
              'Volumet på musikken',
            ],
          },
        ],
        solution: 'Nivåer refererer til hvor i rommet bevegelsene utføres - fra gulvnivå til stående til hopp i luften.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner hiphop-dans?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv karakteristiske trekk ved hiphop.',
            solution: 'Grooves, isolasjoner og rytmisk bevegelse til beats',
            multipleChoiceOptions: [
              'Grooves, isolasjoner og rytmisk bevegelse til beats',
              'Klassiske ballettbevegelser',
              'Bare partnerarbeid',
              'Bare langsom musikk',
            ],
          },
        ],
        solution: 'Hiphop kjennetegnes av rytmiske grooves (grunnbevegelser), isolasjoner av kroppsdeler og uttrykk tilpasset hip hop-musikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er spotter viktig i turn?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar spotterens rolle.',
            solution: 'Å sikre og hjelpe utøveren for å unngå skader',
            multipleChoiceOptions: [
              'Å sikre og hjelpe utøveren for å unngå skader',
              'Å gi poeng',
              'Å velge musikk',
              'Å telle repetisjoner',
            ],
          },
        ],
        solution: 'Spotteren sikrer at utøveren ikke skader seg ved å gi støtte og veiledning, spesielt ved nye eller vanskelige øvelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Lag en kort koreografi (8-16 teller) med minst tre ulike nivåer.',
        solution: 'Svar vil variere. Koreografien bør vise tydelig bruk av lavt nivå (gulv), mellomnivå (stående) og høyt nivå (hopp), med flytende overganger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Friluftsliv og naturopplevelser
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_7: TextbookChapter = {
  id: 'kroppsoving-vg1-7',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '7',
  title: 'Friluftsliv og naturopplevelser',
  description: 'Lær om trygt og bærekraftig friluftsliv til alle årstider.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre friluftsliv',
    'bruke naturen på en trygg og bærekraftig måte',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-7-intro',
      type: 'text',
      content: `Friluftsliv er en viktig del av norsk kultur og gir unike muligheter for fysisk aktivitet, naturopplevelser og mental helse. På VG1 lærer du å planlegge turer, navigere trygt og ta vare på naturen.`,
    },
    {
      id: 'kroppsoving-vg1-7-def-1',
      type: 'definition',
      title: 'Allemannsretten',
      content: `Allemannsretten er en lovfestet rett til å ferdes fritt i utmark - skog, fjell og kystområder - uavhengig av hvem som eier grunnen, så lenge man tar hensyn.`,
    },
    {
      id: 'kroppsoving-vg1-7-text-1',
      type: 'text',
      content: `**Planlegging av turer**

**Før turen**:
- Sjekk værmelding (yr.no)
- Planlegg rute på kart
- Informer noen om planen
- Pakk riktig utstyr

**Turplanlegging**:
- Hvor lang tid tar turen?
- Regn med ca. 4 km/t i vanlig terreng
- Legg inn pauser
- Ha plan B ved dårlig vær

**Utstyr etter årstid**:
- Vår/sommer: Lett og luftig, solbeskyttelse, myggmiddel
- Høst: Regntøy, lag-på-lag
- Vinter: Isolerende lag, vindtett ytterlag, ekstra klær`,
    },
    {
      id: 'kroppsoving-vg1-7-text-2',
      type: 'text',
      content: `**Orientering og navigasjon**

**Kart og kompass**:
- Kartmålestokk: 1:50 000 betyr at 1 cm = 500 m
- Høydekurver viser terrengformer
- Karttegn for sti, vann, bebyggelse
- Kompasset peker mot magnetisk nord

**Teknikker**:
- Still inn kartet (nord mot nord)
- Tommelgrep: Hold tommelen der du er
- Ledelinjer: Følg stier, bekker, kraftgater
- Siktemål: Ta peiling mot synlige punkter

**Digitale hjelpemidler**:
- GPS og apper (UT.no, Norgeskart)
- Ha alltid backup med kart og kompass
- Batterier kan gå tomme`,
    },
    {
      id: 'kroppsoving-vg1-7-text-3',
      type: 'text',
      content: `**Aktiviteter i naturen**

**Sommer**:
- Fottur og fjellvandring
- Padling (kano, kajakk)
- Sykling på sti
- Overnatting i telt eller under åpen himmel

**Vinter**:
- Langrenn i løyper og terreng
- Toppturer på ski
- Truger i løs snø
- Overnatting i snøhule eller lavvo

**Hele året**:
- Bading (sjekk vanntemperatur!)
- Fiske (husk fiskekort)
- Bålbrenning (ikke mellom 15. april - 15. september i skog)
- Matauk og sanking`,
    },
    {
      id: 'kroppsoving-vg1-7-text-4',
      type: 'text',
      content: `**Sikkerhet i naturen**

**Fjellvettreglene**:
1. Planlegg turen og meld fra
2. Tilpass turen etter evne og forhold
3. Ta hensyn til vær- og skredvarsel
4. Vær forberedt på uvær og kulde
5. Ta med nødvendig utstyr
6. Ta trygge veivalg
7. Bruk kart og kompass
8. Vend i tide
9. Spar på kreftene

**Førstehjelp i felt**:
- Stabiliser situasjonen
- Hold varmen (hypotermi er farlig)
- Ringe 113 hvis nødvendig
- Kjenn til tilgjengelige redningsressurser`,
    },
    {
      id: 'kroppsoving-vg1-7-warning-1',
      type: 'warning',
      title: 'Skredfare',
      content: `Ved ferdsel i bratt terreng om vinteren, sjekk alltid snøskredvarselet på varsom.no. Snøskred kan være livsfarlige.`,
    },
    {
      id: 'kroppsoving-vg1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er allemannsretten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig beskrivelse av allemannsretten.',
            solution: 'Retten til å ferdes fritt i utmark',
            multipleChoiceOptions: [
              'Retten til å ferdes fritt i utmark',
              'Retten til å bygge hytter overalt',
              'Retten til å jakte fritt',
              'Retten til å kjøre bil i naturen',
            ],
          },
        ],
        solution: 'Allemannsretten gir alle rett til å ferdes i utmark (skog, fjell, kyst), men med ansvar for å ta hensyn til natur og grunneier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr målestokk 1:50 000 på et kart?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva målestokken betyr.',
            solution: '1 cm på kartet tilsvarer 500 meter i virkeligheten',
            multipleChoiceOptions: [
              '1 cm på kartet tilsvarer 500 meter i virkeligheten',
              '1 cm på kartet tilsvarer 50 meter',
              '1 cm på kartet tilsvarer 5 km',
              'Kartet er 50 000 år gammelt',
            ],
          },
        ],
        solution: 'Målestokk 1:50 000 betyr at 1 enhet på kartet tilsvarer 50 000 enheter i virkeligheten. 1 cm = 500 m.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilken fjellvettregel handler om å endre planer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig fjellvettregel.',
            solution: 'Vend i tide - det er ingen skam å snu',
            multipleChoiceOptions: [
              'Vend i tide - det er ingen skam å snu',
              'Ta med nødvendig utstyr',
              'Planlegg turen',
              'Bruk kart og kompass',
            ],
          },
        ],
        solution: '"Vend i tide" handler om å være villig til å snu eller endre planer hvis forholdene tilsier det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Når er det generelt bålforbud i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig periode for generelt bålforbud.',
            solution: '15. april til 15. september i eller nær skog',
            multipleChoiceOptions: [
              '15. april til 15. september i eller nær skog',
              'Hele året',
              'Bare om vinteren',
              'Det er aldri bålforbud',
            ],
          },
        ],
        solution: 'Mellom 15. april og 15. september er det generelt bålforbud i eller nær skog og utmark grunnet brannfare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvor sjekker du snøskredvarselet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig kilde for snøskredvarsel.',
            solution: 'varsom.no',
            multipleChoiceOptions: [
              'varsom.no',
              'yr.no',
              'ut.no',
              'wikipedia.no',
            ],
          },
        ],
        solution: 'Varsom.no gir daglige snøskredvarsler fra NVE (Norges vassdrags- og energidirektorat) for alle fjellområder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg en dagstur i ditt nærområde. Inkluder rute, utstyrsliste og sikkerhetsvurdering.',
        solution: 'Svar vil variere. En god plan inkluderer konkret rute, realistisk tidsplan, passende utstyr for årstid og vær, og vurdering av potensielle farer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Fair play og idrettsetikk
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_8: TextbookChapter = {
  id: 'kroppsoving-vg1-8',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '8',
  title: 'Fair play og idrettsetikk',
  description: 'Lær om etiske verdier, fair play og inkludering i idrett.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over etiske verdier i idrett',
    'bidra til et inkluderende aktivitetsmiljø',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-8-intro',
      type: 'text',
      content: `Idrett handler om mer enn bare prestasjon. Verdier som fair play, respekt og inkludering er grunnleggende for at alle skal trives og utvikle seg. På VG1 reflekterer vi over etiske spørsmål i idrett og eget ansvar for et godt miljø.`,
    },
    {
      id: 'kroppsoving-vg1-8-def-1',
      type: 'definition',
      title: 'Fair play',
      content: `Fair play betyr å følge reglene, respektere motstandere og dommere, spille med god sportsånd, og sette idrettens verdier over seier for enhver pris.`,
    },
    {
      id: 'kroppsoving-vg1-8-text-1',
      type: 'text',
      content: `**Idrettens kjerneverdier**

**Idrettsglede**:
- Aktivitet skal være gøy
- Glede ved mestring og utvikling
- Positive opplevelser for alle

**Fellesskap**:
- Tilhørighet og vennskap
- Samarbeid mot felles mål
- Sosial arena på tvers av bakgrunn

**Helse**:
- Fysisk og mental velvære
- Balanse mellom trening og hvile
- Forebygging fremfor prestering for enhver pris

**Ærlighet**:
- Spille etter reglene
- Være ærlig om egne handlinger
- Integritet på og utenfor banen`,
    },
    {
      id: 'kroppsoving-vg1-8-text-2',
      type: 'text',
      content: `**Fair play i praksis**

**Mot motstandere**:
- Respekter dem som konkurrenter, ikke fiender
- Takk for kampen uansett resultat
- Unngå provokasjon og usportslig oppførsel

**Mot dommere**:
- Aksepter avgjørelser
- Respektfull kommunikasjon
- Forstå at de gjør sitt beste

**Mot lagkamerater**:
- Støtt hverandre
- Bygg opp, ikke riv ned
- Del på spilletid og ansvar

**Mot deg selv**:
- Gjør ditt beste
- Lær av tap
- Vær en god vinner`,
    },
    {
      id: 'kroppsoving-vg1-8-text-3',
      type: 'text',
      content: `**Inkludering i aktivitet**

**Alle skal med**:
- Tilrettelegging for ulike nivåer
- Aksept for forskjeller
- Fokus på deltakelse, ikke bare prestasjon

**Hindringer for deltakelse**:
- Fysiske begrensninger
- Økonomiske barrierer
- Sosial usikkerhet
- Manglende erfaring

**Hvordan inkludere**:
- Varier aktiviteter
- Tilpass regler om nødvendig
- Skap trygge rammer
- Gi positiv feedback til alle`,
    },
    {
      id: 'kroppsoving-vg1-8-text-4',
      type: 'text',
      content: `**Etiske utfordringer i idrett**

**Doping**:
- Bruk av forbudte prestasjonsfremmende midler
- Bryter med fair konkurranse
- Helseskadelig

**Press og forventninger**:
- Prestasjonspress fra trenere, foreldre, seg selv
- Kan føre til overtrening eller skader
- Viktig med sunn balanse

**Mobbing og utestengning**:
- Alle miljøer kan oppleve dette
- Viktig med tydelige holdninger
- Si fra hvis du ser det

**Urettferdig spill**:
- Filming/simulering
- Bevisst regelbrudd
- Tidsdrøying`,
    },
    {
      id: 'kroppsoving-vg1-8-tip-1',
      type: 'tip',
      title: 'Vær et forbilde',
      content: `Din oppførsel påvirker andre. Ved å vise fair play og inkludere alle, bidrar du til et bedre miljø for hele gruppa.`,
    },
    {
      id: 'kroppsoving-vg1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr fair play?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av fair play.',
            solution: 'Å følge reglene, respektere andre og vise god sportsånd',
            multipleChoiceOptions: [
              'Å følge reglene, respektere andre og vise god sportsånd',
              'Å vinne for enhver pris',
              'Å alltid være best',
              'Å aldri tape',
            ],
          },
        ],
        solution: 'Fair play handler om å opptre ærlig og respektfullt, både når det gjelder regler og medmennesker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er de fire kjerneverdiene i norsk idrett?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg de fire kjerneverdiene.',
            solution: 'Idrettsglede, fellesskap, helse og ærlighet',
            multipleChoiceOptions: [
              'Idrettsglede, fellesskap, helse og ærlighet',
              'Seier, medaljer, rikdom og berømmelse',
              'Styrke, hurtighet, utholdenhet og teknikk',
              'Trening, konkurranse, hvile og mat',
            ],
          },
        ],
        solution: 'Norsk idrett bygger på verdiene idrettsglede, fellesskap, helse og ærlighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er doping problematisk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnene til at doping er problematisk.',
            solution: 'Det bryter med fair konkurranse og kan være helseskadelig',
            multipleChoiceOptions: [
              'Det bryter med fair konkurranse og kan være helseskadelig',
              'Det er for dyrt',
              'Det gjør deg for god',
              'Det er bare ulovlig i noen land',
            ],
          },
        ],
        solution: 'Doping undergraver rettferdig konkurranse ved å gi kunstige fordeler, og mange dopingmidler har alvorlige helsemessige bivirkninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kan du bidra til et mer inkluderende aktivitetsmiljø?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en måte å bidra til inkludering.',
            solution: 'Invitere alle med, tilpasse aktiviteter og gi positiv feedback',
            multipleChoiceOptions: [
              'Invitere alle med, tilpasse aktiviteter og gi positiv feedback',
              'Bare velge de beste spillerne',
              'Ignorere de som sliter',
              'Fokusere kun på seier',
            ],
          },
        ],
        solution: 'Inkludering handler om å se alle, tilpasse når nødvendig, og skape et miljø der alle føler seg velkomne og verdsatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Beskriv en situasjon der fair play ble satt på prøve, og hvordan du ville håndtert den.',
        solution: 'Svar vil variere. Et godt svar viser forståelse for etiske dilemmaer og reflektert begrunnelse for valgt handling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9: Helse og livsstil
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_9: TextbookChapter = {
  id: 'kroppsoving-vg1-9',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '9',
  title: 'Helse og livsstil',
  description: 'Lær om sammenhengen mellom fysisk aktivitet, helse og livskvalitet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå sammenhengen mellom aktivitet og helse',
    'reflektere over egen livsstil og helsevalg',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-9-intro',
      type: 'text',
      content: `Fysisk aktivitet er en av de viktigste faktorene for god helse og livskvalitet. På VG1 ser vi på forskningen bak anbefalingene og reflekterer over hvordan vi kan ta gode valg for egen helse.`,
    },
    {
      id: 'kroppsoving-vg1-9-def-1',
      type: 'definition',
      title: 'Livsstilssykdommer',
      content: `Livsstilssykdommer er sykdommer som i stor grad skyldes levevaner, spesielt inaktivitet, usunt kosthold, røyking og alkohol. Eksempler er hjerte-karsykdom, type 2-diabetes og flere kreftformer.`,
    },
    {
      id: 'kroppsoving-vg1-9-text-1',
      type: 'text',
      content: `**Helseeffekter av fysisk aktivitet**

**Fysiske effekter**:
- Sterkere hjerte og bedre blodsirkulasjon
- Lavere blodtrykk og kolesterol
- Bedre blodsukkerkontroll
- Sterkere muskler og skjelett
- Bedre immunforsvar
- Redusert risiko for overvekt

**Mentale effekter**:
- Bedre humør (endorfiner)
- Redusert stress og angst
- Bedre søvnkvalitet
- Økt selvtillit
- Bedre konsentrasjon og hukommelse

**Sosiale effekter**:
- Fellesskap gjennom aktivitet
- Venner og nettverk
- Mestringsfølelse`,
    },
    {
      id: 'kroppsoving-vg1-9-text-2',
      type: 'text',
      content: `**Anbefalinger for fysisk aktivitet**

**Ungdom (15-17 år)**:
- Minst 60 minutter daglig fysisk aktivitet
- Moderat til høy intensitet
- Minst tre ganger ukentlig styrke og bevegelighet
- Begrens stillesitting

**Voksne**:
- 150-300 minutter moderat aktivitet per uke
- Eller 75-150 minutter høy intensitet
- Styrketrening minst to ganger ukentlig

**All aktivitet teller**:
- Hverdagsaktivitet (gå, sykle)
- Organisert trening
- Lek og fritidsaktiviteter
- Husarbeid og hagearbeid`,
    },
    {
      id: 'kroppsoving-vg1-9-text-3',
      type: 'text',
      content: `**Balanse i livet**

**Helhetlig helse**:
- Fysisk helse: Kroppen fungerer godt
- Mental helse: Tanker og følelser
- Sosial helse: Relasjoner og tilhørighet

**Livsstilsfaktorer**:
- Fysisk aktivitet
- Kosthold
- Søvn
- Stress og mestring
- Rusmidler og tobakk
- Sosiale relasjoner
- Skjermtid

**Balanse mellom**:
- Aktivitet og hvile
- Skole/jobb og fritid
- Sosialt og alenetid
- Ansvar og moro`,
    },
    {
      id: 'kroppsoving-vg1-9-text-4',
      type: 'text',
      content: `**Barrierer og motivasjon**

**Vanlige hindringer**:
- Tidsmangel
- Manglende motivasjon
- Usikkerhet om hva man skal gjøre
- Dårlig tilgang til fasiliteter
- Sosial utrygghet

**Strategier for å overkomme**:
- Planlegg aktivitet som en avtale
- Finn aktiviteter du liker
- Tren med andre
- Start smått
- Sett realistiske mål
- Belønn fremgang

**Varige vaner**:
- Det tar tid å etablere vaner (2-3 måneder)
- Koble ny vane til eksisterende rutine
- Gjør det lett å starte
- Vær tålmodig med deg selv`,
    },
    {
      id: 'kroppsoving-vg1-9-tip-1',
      type: 'tip',
      title: 'Litt er bedre enn ingenting',
      content: `Du trenger ikke trene en time for at det skal ha effekt. 10 minutter er bedre enn null. Småbolker av aktivitet gjennom dagen gir også god helseeffekt.`,
    },
    {
      id: 'kroppsoving-vg1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er livsstilssykdommer?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av livsstilssykdommer.',
            solution: 'Sykdommer som i stor grad skyldes levevaner',
            multipleChoiceOptions: [
              'Sykdommer som i stor grad skyldes levevaner',
              'Sykdommer man er født med',
              'Smittsomme sykdommer',
              'Sykdommer som bare rammer eldre',
            ],
          },
        ],
        solution: 'Livsstilssykdommer er ikke-smittsomme sykdommer som i hovedsak skyldes usunne levevaner over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mye fysisk aktivitet anbefales for ungdom?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig anbefaling for ungdom.',
            solution: 'Minst 60 minutter daglig med moderat til høy intensitet',
            multipleChoiceOptions: [
              'Minst 60 minutter daglig med moderat til høy intensitet',
              '30 minutter tre ganger i uken',
              '10 minutter daglig',
              'Så mye som mulig, alltid høy intensitet',
            ],
          },
        ],
        solution: 'Ungdom anbefales minst 60 minutter fysisk aktivitet daglig, med variasjon i intensitet og type aktivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke mentale effekter har fysisk aktivitet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktige mentale effekter av fysisk aktivitet.',
            solution: 'Bedre humør, redusert stress, bedre søvn og økt selvtillit',
            multipleChoiceOptions: [
              'Bedre humør, redusert stress, bedre søvn og økt selvtillit',
              'Bare fysiske effekter',
              'Økt stress',
              'Dårligere konsentrasjon',
            ],
          },
        ],
        solution: 'Fysisk aktivitet har dokumentert positiv effekt på mental helse, inkludert humør, stressmestring og selvbilde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvor lang tid tar det typisk å etablere en ny vane?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig tidsramme for vanedannelse.',
            solution: '2-3 måneder med regelmessig gjentakelse',
            multipleChoiceOptions: [
              '2-3 måneder med regelmessig gjentakelse',
              '1 uke',
              '1 dag',
              'Det skjer ikke automatisk',
            ],
          },
        ],
        solution: 'Forskning viser at det tar 2-3 måneder med regelmessig gjentakelse før en ny vane blir automatisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Identifiser din største barriere for fysisk aktivitet og lag en plan for å overkomme den.',
        solution: 'Svar vil variere. Et godt svar identifiserer en reell barriere og presenterer konkrete, realistiske strategier for å håndtere den.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10: Egentrening og treningsplanlegging
// ============================================================================

export const CHAPTER_KROPPSOVING_VG1_10: TextbookChapter = {
  id: 'kroppsoving-vg1-10',
  courseId: 'kroppsoving-vg1',
  chapterNumber: '10',
  title: 'Egentrening og treningsplanlegging',
  description: 'Lær å planlegge, gjennomføre og vurdere egen trening.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og gjennomføre egentrening over tid',
    'vurdere og justere egen treningsplan',
  ],
  content: [
    {
      id: 'kroppsoving-vg1-10-intro',
      type: 'text',
      content: `Egentrening handler om å ta ansvar for egen fysisk utvikling. På VG1 skal du lære å sette mål, lage treningsplaner, gjennomføre trening og evaluere egen fremgang. Disse ferdighetene vil du ha nytte av resten av livet.`,
    },
    {
      id: 'kroppsoving-vg1-10-def-1',
      type: 'definition',
      title: 'Periodisering',
      content: `Periodisering er systematisk planlegging av trening over tid, der man varierer belastning og fokus i ulike faser for å oppnå optimale resultater og unngå overtrening.`,
    },
    {
      id: 'kroppsoving-vg1-10-text-1',
      type: 'text',
      content: `**Målsetting**

**SMART-mål**:
- **S**pesifikt: Konkret og tydelig
- **M**ålbart: Kan måles/vurderes
- **A**mbisiøst: Utfordrende nok
- **R**ealistisk: Oppnåelig
- **T**idsbestemt: Har en deadline

**Eksempel på SMART-mål**:
- Dårlig: "Jeg vil bli sterkere"
- Bra: "Jeg vil øke benkpress fra 40 til 50 kg innen 8 uker"

**Typer mål**:
- Resultatmål: Sluttresultat ("løpe 3000m på under 12 min")
- Prosessmål: Hva du skal gjøre ("trene kondisjon 3 ganger i uken")
- Prestasjonsmål: Personlig forbedring ("forbedre 3000m-tiden med 30 sek")`,
    },
    {
      id: 'kroppsoving-vg1-10-text-2',
      type: 'text',
      content: `**Treningsplanlegging**

**Periodisering**:
- Makrosyklus: Hele treningsåret (6-12 måneder)
- Mesosyklus: Treningsblokk (3-6 uker)
- Mikrosyklus: En uke

**Faser i en treningsperiode**:
1. Grunnperiode: Bygg opp grunnformen
2. Oppbyggingsperiode: Øk spesifisitet og intensitet
3. Toppformperiode: Maksimal prestasjon
4. Overgangsperiode: Aktiv hvile

**Ukesplan**:
- Varier harde og lette dager
- Planlegg restitusjon
- Tilpass til skole og annet
- Ha backup for uforutsette hendelser`,
    },
    {
      id: 'kroppsoving-vg1-10-text-3',
      type: 'text',
      content: `**Gjennomføring**

**Treningsøktens struktur**:
1. Oppvarming (10-15 min)
   - Generell aktivering
   - Dynamisk tøying
   - Aktivitetsspesifikk forberedelse

2. Hoveddel (30-45 min)
   - Hovedaktivitet
   - Teknikk og ferdighet
   - Fysisk trening

3. Avslutning (5-10 min)
   - Rolig nedtrapping
   - Tøying
   - Refleksjon

**Treningsdagbok**:
- Noter hva du gjorde
- Belastning og intensitet
- Hvordan det føltes
- Fremgang og utfordringer`,
    },
    {
      id: 'kroppsoving-vg1-10-text-4',
      type: 'text',
      content: `**Evaluering og justering**

**Hva bør evalueres?**:
- Har du nådd målene?
- Hvordan har utviklingen vært?
- Hva fungerte bra/dårlig?
- Hvordan har motivasjonen vært?

**Metoder for evaluering**:
- Tester (kondisjon, styrke, bevegelighet)
- Treningsdagbok-gjennomgang
- Subjektiv vurdering
- Sammenligning med utgangspunkt

**Justering av plan**:
- Øk belastning ved god fremgang
- Reduser ved tegn på overtrening
- Varier hvis motivasjonen synker
- Tilpass ved skade eller sykdom`,
    },
    {
      id: 'kroppsoving-vg1-10-text-5',
      type: 'text',
      content: `**Tester for egenvurdering**

**Kondisjon**:
- Cooper-test: 12 minutter løping
- Beep-test: Løping til lydsignal
- 3000m løp på tid

**Styrke**:
- Armhevinger på tid
- Situps/planke
- Knebøy med kroppsvekt

**Bevegelighet**:
- Sit-and-reach
- Skuldermobilitet
- Hoftefleksibilitet

**Tips for testing**:
- Test under like forhold hver gang
- God oppvarming først
- Noter resultatene
- Test regelmessig (hver 4-6 uke)`,
    },
    {
      id: 'kroppsoving-vg1-10-tip-1',
      type: 'tip',
      title: 'Prosessen er viktigst',
      content: `Fokuser på å følge planen og gjøre det du kan kontrollere. Resultatene kommer som en konsekvens av god prosess.`,
    },
    {
      id: 'kroppsoving-vg1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva står SMART for i SMART-mål?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig betydning av SMART.',
            solution: 'Spesifikt, Målbart, Ambisiøst, Realistisk, Tidsbestemt',
            multipleChoiceOptions: [
              'Spesifikt, Målbart, Ambisiøst, Realistisk, Tidsbestemt',
              'Sterkt, Muskuløst, Atletisk, Rask, Trent',
              'Sakte, Moderat, Aktiv, Rolig, Treg',
              'Spenstig, Morsom, Aktiv, Rask, Teknisk',
            ],
          },
        ],
        solution: 'SMART-modellen sikrer at mål er tydelige og oppnåelige ved å være Spesifikke, Målbare, Ambisiøse, Realistiske og Tidsbestemte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en mesosyklus?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig definisjon av mesosyklus.',
            solution: 'En treningsblokk på 3-6 uker med spesifikt fokus',
            multipleChoiceOptions: [
              'En treningsblokk på 3-6 uker med spesifikt fokus',
              'En enkelt treningsøkt',
              'Et helt treningsår',
              'En enkelt øvelse',
            ],
          },
        ],
        solution: 'En mesosyklus er en treningsperiode på 3-6 uker med et bestemt fokus, som styrkeoppbygging eller kondisjonstrening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva bør en treningsøkt inneholde?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig struktur for en treningsøkt.',
            solution: 'Oppvarming, hoveddel og avslutning',
            multipleChoiceOptions: [
              'Oppvarming, hoveddel og avslutning',
              'Bare hoveddel',
              'Bare tøying',
              'Det spiller ingen rolle',
            ],
          },
        ],
        solution: 'En godt strukturert treningsøkt har oppvarming for å forberede kroppen, hoveddel med hovedaktiviteten, og avslutning med nedtrapping.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er Cooper-testen?',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv Cooper-testen.',
            solution: 'En kondisjontest der man løper så langt som mulig på 12 minutter',
            multipleChoiceOptions: [
              'En kondisjontest der man løper så langt som mulig på 12 minutter',
              'En styrketest',
              'En bevegelighetstest',
              'En mental test',
            ],
          },
        ],
        solution: 'Cooper-testen måler aerob utholdenhet ved at du løper maksimalt i 12 minutter. Distansen brukes til å estimere VO2-maks.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er det viktig å føre treningsdagbok?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedgrunnen til å føre treningsdagbok.',
            solution: 'For å følge fremgang, oppdage mønstre og justere treningen',
            multipleChoiceOptions: [
              'For å følge fremgang, oppdage mønstre og justere treningen',
              'Fordi læreren krever det',
              'For å sammenligne seg med andre',
              'Det er ikke viktig',
            ],
          },
        ],
        solution: 'Treningsdagbok gir oversikt over hva du har gjort, hvordan det gikk, og hjelper deg å se sammenhenger og justere treningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kroppsoving-vg1-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kroppsoving-vg1-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en treningsplan for 4 uker med fokus på en fysisk egenskap du vil forbedre.',
        solution: 'Svar vil variere. En god plan inneholder: SMART-mål, ukesplan med variasjon, progresjon over ukene, og metode for evaluering.',
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

export const KROPPSOVING_VG1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KROPPSOVING_VG1_1,
  CHAPTER_KROPPSOVING_VG1_2,
  CHAPTER_KROPPSOVING_VG1_3,
  CHAPTER_KROPPSOVING_VG1_4,
  CHAPTER_KROPPSOVING_VG1_5,
  CHAPTER_KROPPSOVING_VG1_6,
  CHAPTER_KROPPSOVING_VG1_7,
  CHAPTER_KROPPSOVING_VG1_8,
  CHAPTER_KROPPSOVING_VG1_9,
  CHAPTER_KROPPSOVING_VG1_10,
];
