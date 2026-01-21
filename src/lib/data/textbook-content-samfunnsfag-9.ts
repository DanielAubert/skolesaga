/**
 * Tekstbok innhold for Samfunnsfag 9. klasse
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Industrialisering
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_1_1: TextbookChapter = {
  id: 'samfunnsfag-9-1-1',
  courseId: 'samfunnsfag-9',
  chapterNumber: '1.1',
  title: 'Industrialisering',
  description: 'Lær om den industrielle revolusjonen og hvordan den endret samfunnet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for sentrale historiske hendelser som har påvirket samfunnet'
  ],
  content: [
    {
      id: 'samf-9-1-1-intro',
      type: 'text',
      content: `
# Industrialisering

**Den industrielle revolusjonen** startet i Storbritannia rundt 1760 og spredte seg
gradvis til resten av Europa og verden. Dette var en av de største endringene i
menneskehetens historie.
      `
    },
    {
      id: 'samf-9-1-1-def',
      type: 'definition',
      title: 'Den industrielle revolusjonen',
      content: `**Industrialisering** er overgangen fra jordbrukssamfunn til industrisamfunn.

Kjennetegn:
- **Maskiner** erstattet håndarbeid
- **Fabrikker** samlet arbeidere på ett sted
- **Dampkraft** drev maskiner og transport
- **Urbanisering** - folk flyttet til byene
- **Nye transportmidler** - jernbane og dampskip`
    },
    {
      id: 'samf-9-1-1-arsaker',
      type: 'text',
      title: 'Hvorfor startet det i Storbritannia?',
      content: `
## Årsaker til industrialiseringen

**Naturressurser**:
- Rikelig med kull og jernmalm
- Mange elver for vannkraft

**Kapital**:
- Rike kjøpmenn kunne investere
- Kolonier ga råvarer og markeder

**Oppfinnelser**:
- Spinnemaskinen (1764)
- Dampmaskinen (James Watt, 1769)
- Mekaniske vevstolen

**Arbeidskraft**:
- Jordbruksreformer frigjorde arbeidere
- Folk trengte arbeid i byene
      `
    },
    {
      id: 'samf-9-1-1-konsekvenser',
      type: 'text',
      title: 'Konsekvenser',
      content: `
## Konsekvenser av industrialiseringen

**Positive**:
- Økt produksjon og økonomisk vekst
- Nye jobber og yrkesgrupper
- Teknologisk utvikling
- Bedre transportmuligheter

**Negative**:
- Dårlige arbeidsforhold i fabrikkene
- Lange arbeidsdager (14-16 timer)
- Barnearbeid
- Forurensning og slum i byene
- Sosiale problemer og fattigdom
      `
    },
    {
      id: 'samf-9-1-1-norge',
      type: 'text',
      title: 'Industrialiseringen i Norge',
      content: `
## Norge og industrialiseringen

Norge ble industrialisert senere enn Storbritannia, fra ca. 1850.

**Viktige næringer**:
- Tekstilindustri (Aker, Nydalens Compagnie)
- Treforedling (papir, cellulose)
- Jernverk (Kongsberg)
- Skipsfart

**Vannkraft** ble viktig for norsk industri - Norge hadde lite kull, men mange fossefall.
      `
    },
    {
      id: 'samf-9-1-1-example',
      type: 'example',
      title: 'Barnearbeid',
      problem: 'Hvordan var arbeidsforholdene for barn under industrialiseringen?',
      solution: `Barn ned i 5-6 års alder arbeidet i fabrikker og gruver:

- **Arbeidstid**: 12-16 timer per dag
- **Farlig arbeid**: Gruver, tekstilfabrikker, skorsteinsfeiere
- **Lav lønn**: Barn fikk mye lavere lønn enn voksne
- **Konsekvenser**: Skader, sykdom, mangel på utdanning

Gradvis ble det innført lover som beskyttet barn, som **Fabriktilsynsloven** i Norge (1892).`
    },
    {
      id: 'samf-9-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvor startet den industrielle revolusjonen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg landet der den industrielle revolusjonen startet.',
            solution: 'Storbritannia',
            multipleChoiceOptions: ['Storbritannia', 'USA', 'Tyskland', 'Norge'],
          },
        ],
        solution: 'Storbritannia er riktig. Den industrielle revolusjonen startet i Storbritannia rundt 1760.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilken oppfinnelse var viktigst for industrialiseringen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg oppfinnelsen som var mest sentral for industrialiseringen.',
            solution: 'Dampmaskinen',
            multipleChoiceOptions: ['Dampmaskinen', 'Telefonen', 'Flyet', 'Datamaskinen'],
          },
        ],
        solution: 'Dampmaskinen er riktig. James Watts dampmaskin (1769) revolusjonerte produksjon og transport.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva var en negativ konsekvens av industrialiseringen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en negativ konsekvens av industrialiseringen.',
            solution: 'Barnearbeid og dårlige arbeidsforhold',
            multipleChoiceOptions: [
              'Barnearbeid og dårlige arbeidsforhold',
              'Økt produksjon',
              'Nye transportmidler',
              'Teknologisk utvikling',
            ],
          },
        ],
        solution: 'Barnearbeid og dårlige arbeidsforhold er riktig. Fabrikkarbeiderne hadde ofte elendige kår.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over industrialiseringen.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor Storbritannia var først ute med industrialisering.',
            solution: 'Storbritannia hadde naturressurser (kull, jernmalm), kapital fra handel og kolonier, mange oppfinnere, og arbeidskraft som ble frigjort fra jordbruket.',
            multipleChoiceOptions: [
              'Storbritannia hadde naturressurser, kapital fra kolonier, oppfinnere og frigjort arbeidskraft',
              'Storbritannia var det eneste landet i verden',
              'Alle andre land nektet å industrialisere',
              'Det var tilfeldig at det skjedde der',
            ],
          },
          {
            label: 'b',
            task: 'Sammenlign arbeidslivet før og etter industrialiseringen.',
            solution: 'Før: Arbeidet hjemme eller på gården, sesongarbeid, håndverk. Etter: Arbeid i fabrikker, faste arbeidstider, maskiner, lønnsarbeid, urbanisering.',
            multipleChoiceOptions: [
              'Før: Hjemme/gård, sesongarbeid, håndverk. Etter: Fabrikker, faste tider, maskiner, lønnsarbeid',
              'Det var ingen forskjell mellom før og etter',
              'Etter industrialiseringen arbeidet alle hjemme',
              'Før industrialiseringen jobbet alle i fabrikker',
            ],
          },
        ],
        solution: 'Industrialiseringen forandret samfunnet fundamentalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Imperialisme og kolonialisme
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_1_2: TextbookChapter = {
  id: 'samfunnsfag-9-1-2',
  courseId: 'samfunnsfag-9',
  chapterNumber: '1.2',
  title: 'Imperialisme og kolonialisme',
  description: 'Lær om europeisk imperialisme og dens konsekvenser for verden.',
  estimatedMinutes: 50,
  competenceGoals: [
    'drøfte årsaker til og konsekvenser av sentrale historiske og nåtidige konflikter'
  ],
  content: [
    {
      id: 'samf-9-1-2-intro',
      type: 'text',
      content: `
# Imperialisme og kolonialisme

På 1800- og 1900-tallet erobret europeiske land store deler av verden.
Denne perioden har formet dagens verden på mange måter.
      `
    },
    {
      id: 'samf-9-1-2-def',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**Imperialisme**: Når en stat utvider sin makt og innflytelse over andre områder.

**Kolonialisme**: Direkte politisk kontroll over et annet land eller folk.

**Koloni**: Et område styrt av en fremmed makt.

**Metropol**: Det styrende landet (morslandet).

**Rasisme**: Ideologi som hevder at noen raser er overlegne andre.`
    },
    {
      id: 'samf-9-1-2-arsaker',
      type: 'text',
      title: 'Årsaker til imperialismen',
      content: `
## Hvorfor koloniserte Europa verden?

**Økonomiske årsaker**:
- Behov for råvarer til industrien
- Nye markeder for varer
- Investering av kapital

**Politiske årsaker**:
- Nasjonalisme og prestisje
- Strategiske baser
- Konkurranse mellom stormaktene

**Ideologiske årsaker**:
- "Sivilisere de ville" - rasistisk tankegang
- Misjon og kristendom
- Sosialdarwinisme - de sterke overlever
      `
    },
    {
      id: 'samf-9-1-2-kapplopet',
      type: 'text',
      title: 'Kappløpet om Afrika',
      content: `
## Kappløpet om Afrika (1880-1914)

På kort tid delte europeiske makter nesten hele Afrika mellom seg:

**Storbritannia**: Egypt, Sør-Afrika, Nigeria, Kenya
**Frankrike**: Vest-Afrika, Nord-Afrika
**Belgia**: Kongo (brutal kolonisering)
**Tyskland**: Namibia, Tanzania
**Portugal**: Angola, Mosambik
**Italia**: Libya, Eritrea

**Berlin-konferansen 1884-85**: Europeiske makter delte Afrika uten å spørre afrikanerne.
      `
    },
    {
      id: 'samf-9-1-2-konsekvenser',
      type: 'text',
      title: 'Konsekvenser',
      content: `
## Konsekvenser av kolonialismen

**For koloniene**:
- Tap av selvstendighet og kultur
- Utnyttelse av ressurser og arbeidskraft
- Kunstige grenser som skapte konflikter
- Innføring av europeisk språk og religion
- Ødeleggelse av lokale økonomier

**For kolonimaktene**:
- Rikdom og ressurser
- Økt makt og innflytelse
- Kulturell utveksling (ofte enveis)

**Langvarige virkninger**:
- Fattigdom i tidligere kolonier
- Etniske konflikter langs kunstige grenser
- Økonomisk avhengighet
      `
    },
    {
      id: 'samf-9-1-2-note',
      type: 'note',
      title: 'Kongos tragedie',
      content: `**Fristaten Kongo** (1885-1908) under kong Leopold II av Belgia er et av historiens verste eksempler på kolonial brutalitet. Millioner av mennesker døde under tvangsarbeid for å produsere gummi. Befolkningen ble halvert på få tiår.`
    },
    {
      id: 'samf-9-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr imperialisme?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige definisjonen av imperialisme.',
            solution: 'Når en stat utvider sin makt over andre områder',
            multipleChoiceOptions: [
              'Når en stat utvider sin makt over andre områder',
              'Når folk flytter til et nytt land',
              'Når et land blir uavhengig',
              'Når land samarbeider fredelig',
            ],
          },
        ],
        solution: 'Når en stat utvider sin makt over andre områder er riktig. Imperialisme handler om maktutvidelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilken konferanse delte Afrika mellom europeiske makter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg konferansen som delte Afrika.',
            solution: 'Berlin-konferansen',
            multipleChoiceOptions: ['Berlin-konferansen', 'Versailles-konferansen', 'Wien-kongressen', 'Paris-konferansen'],
          },
        ],
        solution: 'Berlin-konferansen er riktig. Berlin-konferansen (1884-85) delte Afrika mellom europeiske makter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva var en viktig økonomisk årsak til imperialismen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en økonomisk årsak til imperialismen.',
            solution: 'Behov for råvarer til industrien',
            multipleChoiceOptions: [
              'Behov for råvarer til industrien',
              'Ønske om å spre demokrati',
              'Behov for turister',
              'Mangel på mat i Europa',
            ],
          },
        ],
        solution: 'Behov for råvarer til industrien er riktig. Industrialiseringen krevde råvarer fra koloniene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Drøft kolonialismens konsekvenser.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor kunstige grenser i Afrika har skapt konflikter.',
            solution: 'Europeerne delte Afrika uten hensyn til eksisterende folkegrupper. Grensene splittet noen folkegrupper og tvang andre sammen, noe som har ført til etniske konflikter.',
            multipleChoiceOptions: [
              'Europeerne delte Afrika uten hensyn til folkegrupper, noe som splittet noen og tvang andre sammen',
              'Grensene var perfekte og skapte ingen problemer',
              'Afrikanerne tegnet grensene selv',
              'Det fantes ingen konflikter i Afrika',
            ],
          },
          {
            label: 'b',
            task: 'Gi eksempler på hvordan kolonialismen fortsatt påvirker verden i dag.',
            solution: 'Eksempler: Språk (fransk, engelsk som offisielle språk), økonomisk ulikhet mellom tidligere kolonimakter og kolonier, etniske konflikter, grensekonflikter, kulturell påvirkning.',
            multipleChoiceOptions: [
              'Språk, økonomisk ulikhet, etniske konflikter, grensekonflikter og kulturell påvirkning',
              'Kolonialismen har ingen påvirkning i dag',
              'Alle tidligere kolonier er nå rikere enn Europa',
              'Ingen snakker europeiske språk i Afrika lenger',
            ],
          },
        ],
        solution: 'Kolonialismens konsekvenser preger fortsatt verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.3: Første verdenskrig
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_1_3: TextbookChapter = {
  id: 'samfunnsfag-9-1-3',
  courseId: 'samfunnsfag-9',
  chapterNumber: '1.3',
  title: 'Første verdenskrig',
  description: 'Lær om årsaker, forløp og konsekvenser av første verdenskrig.',
  estimatedMinutes: 50,
  competenceGoals: [
    'drøfte årsaker til og konsekvenser av sentrale historiske konflikter'
  ],
  content: [
    {
      id: 'samf-9-1-3-intro',
      type: 'text',
      content: `
# Første verdenskrig (1914-1918)

Første verdenskrig var den første moderne totalkrig. Over 17 millioner mennesker
døde, og krigen forandret Europa og verden for alltid.
      `
    },
    {
      id: 'samf-9-1-3-def',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**Allianse**: Avtale mellom land om å støtte hverandre i krig.

**Nasjonalisme**: Sterk følelse av tilhørighet til egen nasjon.

**Trippelalliansen**: Tyskland, Østerrike-Ungarn, Italia (senere osmanske riket).

**Trippelententen**: Frankrike, Storbritannia, Russland.

**Skyttergravskrig**: Krig fra nedgravde stillinger (graver).

**Totalkrig**: Hele samfunnet mobiliseres for krig.`
    },
    {
      id: 'samf-9-1-3-arsaker',
      type: 'text',
      title: 'Årsaker til krigen',
      content: `
## Underliggende årsaker (MAIN)

**Militarisme**: Opprustning og militær makt var viktig
**Allianser**: Europa var delt i to alliansesystemer
**Imperialisme**: Konkurranse om kolonier
**Nasjonalisme**: Sterk nasjonal stolthet og rivalisering

## Den utløsende årsaken

**28. juni 1914**: Erkehertug Franz Ferdinand av Østerrike ble drept i Sarajevo av en serbisk nasjonalist.

Østerrike-Ungarn erklærte krig mot Serbia, og alliansesystemet dro alle stormaktene inn i krigen.
      `
    },
    {
      id: 'samf-9-1-3-forlopet',
      type: 'text',
      title: 'Krigens forløp',
      content: `
## Vestfronten

- **Skyttergravskrig** fra Nordsjøen til Sveits
- Millioner døde for å flytte frontlinjen noen meter
- Nye våpen: maskingevær, gifgass, tanks, fly

## Østfronten

- Mer bevegelig krigføring
- Russland tapte mange slag
- Russisk revolusjon 1917 - Russland trakk seg ut

## Vendepunktet 1917

- USA gikk inn i krigen på ententens side
- Tyskland kunne ikke vinne mot alle
      `
    },
    {
      id: 'samf-9-1-3-slutt',
      type: 'text',
      title: 'Krigens slutt og konsekvenser',
      content: `
## Våpenhvile 11. november 1918

Tyskland kapitulerte. Keiseren abdiserte.

## Versailles-traktaten (1919)

**Straff for Tyskland**:
- Måtte ta skylden for krigen
- Mistet territorier og kolonier
- Måtte betale enorme krigserstatninger
- Fikk begrensninger på militæret

## Konsekvenser

- **17 millioner døde** (soldater og sivile)
- Fire imperier falt (Østerrike-Ungarn, Osmanske riket, Russland, Tyskland)
- Nye land ble opprettet (Polen, Tsjekkoslovakia, Jugoslavia)
- **Folkeforbundet** ble opprettet (forløper til FN)
- Bitterhet i Tyskland la grunnlag for andre verdenskrig
      `
    },
    {
      id: 'samf-9-1-3-example',
      type: 'example',
      title: 'Slaget ved Somme',
      problem: 'Hva viser slaget ved Somme om første verdenskrig?',
      solution: `**Slaget ved Somme (1916)** varte i nesten 5 måneder:

- **Tap**: Over 1 million soldater døde eller ble såret
- **Resultat**: Frontlinjen flyttet seg bare 10 km
- **Første dag**: Britene mistet 60 000 mann på én dag

Slaget viser hvor meningsløs og brutal skyttergravskrigen var.`
    },
    {
      id: 'samf-9-1-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva utløste første verdenskrig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den utløsende årsaken til første verdenskrig.',
            solution: 'Drapet på erkehertug Franz Ferdinand',
            multipleChoiceOptions: [
              'Drapet på erkehertug Franz Ferdinand',
              'Angrep på Pearl Harbor',
              'Invasjonen av Polen',
              'Berlin-murens fall',
            ],
          },
        ],
        solution: 'Drapet på erkehertug Franz Ferdinand er riktig. Han ble drept i Sarajevo 28. juni 1914.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-1-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-3-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegnet krigføringen på vestfronten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som kjennetegnet vestfronten.',
            solution: 'Skyttergravskrig',
            multipleChoiceOptions: ['Skyttergravskrig', 'Ridderslag', 'Sjøkrig', 'Geriljakrig'],
          },
        ],
        solution: 'Skyttergravskrig er riktig. Soldatene kjempet fra nedgravde stillinger langs hele fronten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-1-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Når endte første verdenskrig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg året da første verdenskrig endte.',
            solution: '1918',
            multipleChoiceOptions: ['1918', '1914', '1917', '1919'],
          },
        ],
        solution: '1918 er riktig. Våpenhvilen ble undertegnet 11. november 1918.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-1-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-1-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser første verdenskrigs konsekvenser.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvordan Versailles-traktaten påvirket Tyskland.',
            solution: 'Tyskland måtte ta skylden for krigen, betale enorme erstatninger, miste territorier og begrense militæret. Dette skapte bitterhet og økonomiske problemer som bidro til nazismens fremvekst.',
            multipleChoiceOptions: [
              'Tyskland fikk skylden, måtte betale erstatninger, miste territorier og begrense militæret, noe som skapte bitterhet',
              'Tyskland ble belønnet for sin innsats',
              'Versailles-traktaten hadde ingen betydning',
              'Tyskland ble større etter traktaten',
            ],
          },
          {
            label: 'b',
            task: 'Forklar hva MAIN står for som årsaker til krigen.',
            solution: 'M = Militarisme (opprustning), A = Allianser (alliansesystemene), I = Imperialisme (kolonikappløp), N = Nasjonalisme (nasjonal stolthet og rivalisering).',
            multipleChoiceOptions: [
              'Militarisme, Allianser, Imperialisme, Nasjonalisme',
              'Mat, Arbeid, Industri, Norge',
              'Maskiner, Atomkraft, Internet, Natur',
              'MAIN betyr ingenting spesielt',
            ],
          },
        ],
        solution: 'Første verdenskrig forandret verden og la grunnlaget for nye konflikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Befolkning og migrasjon
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_2_1: TextbookChapter = {
  id: 'samfunnsfag-9-2-1',
  courseId: 'samfunnsfag-9',
  chapterNumber: '2.1',
  title: 'Befolkning og migrasjon',
  description: 'Lær om befolkningsutvikling og migrasjon i verden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske konsekvenser av befolkningsendringer og migrasjon'
  ],
  content: [
    {
      id: 'samf-9-2-1-intro',
      type: 'text',
      content: `
# Befolkning og migrasjon

Verdens befolkning har vokst enormt de siste 200 årene. Samtidig flytter
mennesker mellom land og verdensdeler av ulike årsaker.
      `
    },
    {
      id: 'samf-9-2-1-def',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**Befolkningsvekst**: Økning i antall mennesker i et område.

**Migrasjon**: Flytting av mennesker mellom steder.

**Emigrasjon**: Å flytte fra et land.

**Immigrasjon**: Å flytte til et land.

**Push-faktorer**: Årsaker som driver folk vekk (krig, fattigdom).

**Pull-faktorer**: Årsaker som tiltrekker folk (arbeid, trygghet).`
    },
    {
      id: 'samf-9-2-1-befolkningsvekst',
      type: 'text',
      title: 'Befolkningsvekst',
      content: `
## Verdens befolkning

- **1800**: 1 milliard mennesker
- **1927**: 2 milliarder
- **2024**: Over 8 milliarder
- **2050**: Forventet 9-10 milliarder

## Den demografiske overgangen

Utviklingen går i faser:
1. **Før**: Høy fødselsrate, høy dødsrate = liten vekst
2. **Overgang**: Dødsraten synker (medisin), høy fødselsrate = stor vekst
3. **Etter**: Lav fødselsrate, lav dødsrate = liten/ingen vekst
      `
    },
    {
      id: 'samf-9-2-1-migrasjon',
      type: 'text',
      title: 'Migrasjon',
      content: `
## Typer migrasjon

**Frivillig migrasjon**:
- Arbeidsmigrasjon (bedre jobber)
- Utdanning
- Familiegjenforening

**Tvungen migrasjon**:
- Flukt fra krig og konflikt
- Naturkatastrofer
- Forfølgelse

## Flyktningkrise

I dag er over 100 millioner mennesker på flukt i verden.
De fleste flykter innenfor eget land eller til naboland.
      `
    },
    {
      id: 'samf-9-2-1-norge',
      type: 'text',
      title: 'Migrasjon og Norge',
      content: `
## Norsk emigrasjon

- **1825-1930**: Ca. 800 000 nordmenn emigrerte til USA
- Årsaker: Fattigdom, mangel på jord, drømmen om bedre liv

## Innvandring til Norge

- Etter 1970: Norge ble et innvandringsland
- Arbeidsinnvandring fra Europa
- Flyktninger fra konfliktområder
- I dag har ca. 20% av befolkningen innvandrerbakgrunn
      `
    },
    {
      id: 'samf-9-2-1-example',
      type: 'example',
      title: 'Push og pull',
      problem: 'Hvilke push- og pull-faktorer påvirker syriske flyktninger?',
      solution: `**Push-faktorer (fra Syria)**:
- Borgerkrig og vold
- Ødeleggelse av byer og hjem
- Mangel på mat og vann
- Forfølgelse

**Pull-faktorer (til Europa)**:
- Fred og sikkerhet
- Mulighet for arbeid
- Helsevesen og utdanning
- Familie som allerede bor der
- Menneskerettigheter`
    },
    {
      id: 'samf-9-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvor mange mennesker bor det på jorden i dag?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg omtrent hvor mange mennesker som bor på jorden.',
            solution: 'Over 8 milliarder',
            multipleChoiceOptions: ['Over 8 milliarder', '1 milliard', '100 millioner', '5 milliarder'],
          },
        ],
        solution: 'Over 8 milliarder er riktig. Verdens befolkning passerte 8 milliarder i 2022.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er en push-faktor?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg definisjonen på push-faktor.',
            solution: 'Noe som driver folk vekk fra et sted',
            multipleChoiceOptions: [
              'Noe som driver folk vekk fra et sted',
              'Noe som tiltrekker folk til et sted',
              'En type transport',
              'En økonomisk teori',
            ],
          },
        ],
        solution: 'Noe som driver folk vekk fra et sted er riktig. Push-faktorer er negative forhold som får folk til å flytte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvor emigrerte de fleste nordmenn til på 1800-tallet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg landet de fleste nordmenn emigrerte til.',
            solution: 'USA',
            multipleChoiceOptions: ['USA', 'Australia', 'Canada', 'Brasil'],
          },
        ],
        solution: 'USA er riktig. Ca. 800 000 nordmenn emigrerte til USA mellom 1825 og 1930.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser migrasjon.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar den demografiske overgangen med egne ord.',
            solution: 'Først er både fødsels- og dødsrate høy, så befolkningen vokser lite. Så synker dødsraten (bedre helse), men fødselsraten er fortsatt høy, og befolkningen vokser fort. Til slutt synker også fødselsraten, og veksten stopper opp.',
            multipleChoiceOptions: [
              'Høy død og fødsel gir liten vekst, så synker døden og befolkningen vokser, til slutt synker også fødsler og veksten stopper',
              'Befolkningen vokser alltid like fort',
              'Befolkningen synker hele tiden',
              'Den demografiske overgangen handler om at folk flytter',
            ],
          },
          {
            label: 'b',
            task: 'Gi tre eksempler på push-faktorer og tre eksempler på pull-faktorer.',
            solution: 'Push: Krig, fattigdom, naturkatastrofer, forfølgelse. Pull: Arbeid, sikkerhet, utdanning, familie, helse.',
            multipleChoiceOptions: [
              'Push: Krig, fattigdom, naturkatastrofer. Pull: Arbeid, sikkerhet, utdanning',
              'Det finnes ingen push- eller pull-faktorer',
              'Alle flytter av samme grunn',
              'Push og pull betyr det samme',
            ],
          },
        ],
        solution: 'Migrasjon formes av mange faktorer som presser og trekker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Globalisering
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_2_2: TextbookChapter = {
  id: 'samfunnsfag-9-2-2',
  courseId: 'samfunnsfag-9',
  chapterNumber: '2.2',
  title: 'Globalisering',
  description: 'Utforsk hvordan verden blir stadig mer sammenkoblet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske hvordan globalisering påvirker individ og samfunn'
  ],
  content: [
    {
      id: 'samf-9-2-2-intro',
      type: 'text',
      content: `
# Globalisering

I dag er verden mer sammenkoblet enn noensinne. Varer, mennesker, ideer og
informasjon krysser landegrenser i et tempo vi aldri har sett før.
      `
    },
    {
      id: 'samf-9-2-2-def',
      type: 'definition',
      title: 'Hva er globalisering?',
      content: `**Globalisering** er prosessen der verden blir mer sammenvevd gjennom:

- **Økonomisk** globalisering: Internasjonal handel og investeringer
- **Kulturell** globalisering: Spredning av kultur, språk, verdier
- **Politisk** globalisering: Internasjonalt samarbeid og organisasjoner
- **Teknologisk** globalisering: Internett, transport, kommunikasjon`
    },
    {
      id: 'samf-9-2-2-drivere',
      type: 'text',
      title: 'Hva driver globaliseringen?',
      content: `
## Teknologi
- Internett og sosiale medier
- Billig transport (fly, container-skip)
- Smarttelefoner og digital kommunikasjon

## Politikk
- Frihandelsavtaler
- Internasjonale organisasjoner (WTO, EU)
- Nedbygging av tollmurer

## Økonomi
- Multinasjonale selskaper
- Global arbeidsdeling
- Internasjonale finansmarkeder
      `
    },
    {
      id: 'samf-9-2-2-fordeler',
      type: 'text',
      title: 'Fordeler og ulemper',
      content: `
## Fordeler med globalisering

- **Økonomisk vekst**: Flere land har fått økt velstand
- **Fattigdomsreduksjon**: Millioner har kommet ut av ekstrem fattigdom
- **Kulturutveksling**: Tilgang til kunst, mat, musikk fra hele verden
- **Teknologi**: Raskere spredning av innovasjoner
- **Samarbeid**: Lettere å løse globale problemer sammen

## Ulemper med globalisering

- **Ulikhet**: Noen vinner mer enn andre
- **Miljø**: Økt transport og forbruk
- **Tap av jobber**: Arbeidsplasser flyttes til lavkostland
- **Kulturell ensretting**: Lokale kulturer kan forsvinne
- **Avhengighet**: Land blir sårbare for internasjonale kriser
      `
    },
    {
      id: 'samf-9-2-2-note',
      type: 'note',
      title: 'Globaliseringens paradoks',
      content: `Globalisering har bidratt til at ekstrem fattigdom har sunket dramatisk - fra 36% i 1990 til under 10% i dag. Samtidig har ulikheten innad i mange rike land økt. De rikeste blir rikere, mens middelklassen opplever stagnasjon.`
    },
    {
      id: 'samf-9-2-2-example',
      type: 'example',
      title: 'En global verdikjede',
      problem: 'Hvordan viser et klesplagg globalisering?',
      solution: `En t-skjorte du kjøper kan ha denne reisen:

1. **Bomull**: Dyrket i India
2. **Garn**: Spunnet i Tyrkia
3. **Stoff**: Vevd i Kina
4. **Farging**: Bangladesh
5. **Sying**: Vietnam
6. **Kvalitetskontroll**: Hong Kong
7. **Design**: Sverige (H&M)
8. **Frakt**: Skip fra Asia
9. **Salg**: Norge

Ett enkelt plagg involverer mange land og tusenvis av arbeidere!`
    },
    {
      id: 'samf-9-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er økonomisk globalisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg definisjonen på økonomisk globalisering.',
            solution: 'Økt internasjonal handel og investeringer',
            multipleChoiceOptions: [
              'Økt internasjonal handel og investeringer',
              'At alle land har samme økonomi',
              'At handel mellom land stopper',
              'At alle blir like rike',
            ],
          },
        ],
        solution: 'Økt internasjonal handel og investeringer er riktig. Økonomisk globalisering handler om at land handler mer med hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva har vært en viktig driver for globalisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en viktig driver for globalisering.',
            solution: 'Internett og digital teknologi',
            multipleChoiceOptions: [
              'Internett og digital teknologi',
              'Økte tollmurer',
              'Mindre reising',
              'Isolasjon',
            ],
          },
        ],
        solution: 'Internett og digital teknologi er riktig. Teknologi har gjort det lettere å kommunisere og handle globalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er en ulempe med globalisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en ulempe med globalisering.',
            solution: 'Arbeidsplasser kan flyttes til lavkostland',
            multipleChoiceOptions: [
              'Arbeidsplasser kan flyttes til lavkostland',
              'Mindre økonomisk vekst',
              'Ingen kulturutveksling',
              'Mindre teknologisk utvikling',
            ],
          },
        ],
        solution: 'Arbeidsplasser kan flyttes til lavkostland er riktig. Bedrifter kan flytte produksjon dit det er billigere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Drøft globalisering.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi tre eksempler på hvordan du merker globalisering i hverdagen.',
            solution: 'Eksempler: Klær fra Asia, mat fra hele verden, serier fra USA på Netflix, kommunikasjon med folk i andre land, telefon laget av deler fra mange land.',
            multipleChoiceOptions: [
              'Klær fra Asia, mat fra hele verden, serier fra USA på Netflix',
              'Globalisering påvirker ikke hverdagen min',
              'Jeg bruker bare norske produkter',
              'Globalisering er bare for bedrifter',
            ],
          },
          {
            label: 'b',
            task: 'Er globalisering mest positivt eller negativt? Begrunn svaret ditt med minst to argumenter.',
            solution: 'Åpent svar. Positive argumenter: økonomisk vekst, fattigdomsreduksjon, kulturutveksling. Negative argumenter: ulikhet, miljøproblemer, tap av lokale jobber. Det finnes gode argumenter for begge sider.',
            multipleChoiceOptions: [
              'Det finnes gode argumenter for begge sider - positivt (vekst, fattigdomsreduksjon) og negativt (ulikhet, miljø)',
              'Globalisering er bare positivt uten ulemper',
              'Globalisering er bare negativt uten fordeler',
              'Det går ikke an å vurdere globalisering',
            ],
          },
        ],
        solution: 'Globalisering har mange sider som vi må vurdere kritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.3: Ressursforvaltning
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_2_3: TextbookChapter = {
  id: 'samfunnsfag-9-2-3',
  courseId: 'samfunnsfag-9',
  chapterNumber: '2.3',
  title: 'Ressursforvaltning',
  description: 'Lær om naturressurser, bærekraft og miljøutfordringer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske hvordan ressurser forvaltes og konsekvenser av dette'
  ],
  content: [
    {
      id: 'samf-9-2-3-intro',
      type: 'text',
      content: `
# Ressursforvaltning

Naturressurser er grunnlaget for all økonomisk aktivitet. Hvordan vi forvalter
disse ressursene påvirker både økonomi, miljø og fremtidige generasjoner.
      `
    },
    {
      id: 'samf-9-2-3-def',
      type: 'definition',
      title: 'Typer naturressurser',
      content: `**Fornybare ressurser**: Kan erstattes naturlig
- Sol, vind, vann, skog, fisk

**Ikke-fornybare ressurser**: Tar millioner av år å dannes
- Olje, gass, kull, mineraler, metaller

**Betinget fornybare ressurser**: Fornybare hvis de forvaltes riktig
- Jord, grunnvann, fiskebestander`
    },
    {
      id: 'samf-9-2-3-barekraft',
      type: 'text',
      title: 'Bærekraftig utvikling',
      content: `
## Hva er bærekraftig utvikling?

> "Utvikling som tilfredsstiller dagens behov uten å ødelegge fremtidige
> generasjoners muligheter til å tilfredsstille sine behov."
> - Brundtland-kommisjonen, 1987

## De tre dimensjonene

1. **Økonomisk**: Skape verdier og velstand
2. **Sosial**: Rettferdig fordeling, menneskerettigheter
3. **Miljømessig**: Bevare natur og ressurser
      `
    },
    {
      id: 'samf-9-2-3-utfordringer',
      type: 'text',
      title: 'Miljøutfordringer',
      content: `
## Globale miljøutfordringer

**Klimaendringer**:
- Økt CO2 fra fossile brensler
- Global oppvarming
- Ekstremvær, havnivåstigning

**Tap av biologisk mangfold**:
- Arter utryddes
- Økosystemer ødelegges
- Avskoging

**Forurensning**:
- Plast i havet
- Luftforurensning
- Giftige utslipp

**Ressursknapphet**:
- Overforbruk av vann
- Overfiske
- Utarming av jord
      `
    },
    {
      id: 'samf-9-2-3-norge',
      type: 'text',
      title: 'Norges ressurser',
      content: `
## Norske naturressurser

**Olje og gass**:
- Hovednæring siden 1970-tallet
- Gir store inntekter
- Klimautfordring

**Vannkraft**:
- 95% av strømmen er vannkraft
- Fornybar og ren
- Kan påvirke natur

**Fisk og havbruk**:
- Stor eksportnæring
- Utfordringer med overfiske
- Oppdrettslaks - miljødebatt

**Skog og mineraler**:
- Viktig for industri
- Potensial for mer bruk
      `
    },
    {
      id: 'samf-9-2-3-example',
      type: 'example',
      title: 'Det grønne skiftet',
      problem: 'Hva er det grønne skiftet?',
      solution: `**Det grønne skiftet** er overgangen fra fossil til fornybar energi og bærekraftig økonomi:

**Tiltak**:
- Elektrifisering av transport (elbiler)
- Utbygging av sol- og vindkraft
- Energieffektivisering
- Sirkulær økonomi (gjenbruk)
- Grønn teknologi

**Utfordringer**:
- Kostnader ved omstilling
- Tap av arbeidsplasser i fossil industri
- Behov for nye materialer og mineraler
- Politisk vilje`
    },
    {
      id: 'samf-9-2-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvilken ressurs er fornybar?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den fornybare ressursen.',
            solution: 'Vindkraft',
            multipleChoiceOptions: ['Vindkraft', 'Olje', 'Kull', 'Gass'],
          },
        ],
        solution: 'Vindkraft er riktig. Vind er en fornybar ressurs som ikke brukes opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-2-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-3-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er bærekraftig utvikling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den beste beskrivelsen av bærekraftig utvikling.',
            solution: 'Utvikling som ikke ødelegger for fremtidige generasjoner',
            multipleChoiceOptions: [
              'Utvikling som ikke ødelegger for fremtidige generasjoner',
              'Å bruke opp alle ressurser nå',
              'Å stoppe all økonomisk utvikling',
              'Å gå tilbake til steinalderen',
            ],
          },
        ],
        solution: 'Utvikling som ikke ødelegger for fremtidige generasjoner er riktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-2-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvor kommer det meste av Norges strøm fra?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hovedkilden til norsk strømproduksjon.',
            solution: 'Vannkraft',
            multipleChoiceOptions: ['Vannkraft', 'Vindkraft', 'Gass', 'Atomkraft'],
          },
        ],
        solution: 'Vannkraft er riktig. Ca. 95% av norsk strøm kommer fra vannkraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-2-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-2-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Drøft ressursforvaltning.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor det er vanskelig å balansere økonomisk vekst og miljøhensyn.',
            solution: 'Økonomisk vekst krever ofte bruk av ressurser og energi, som kan skade miljøet. Samtidig trenger samfunnet inntekter for velferd. Det handler om å finne løsninger som gir vekst uten å ødelegge miljøet.',
            multipleChoiceOptions: [
              'Økonomisk vekst krever ressurser som kan skade miljøet, men samfunnet trenger også inntekter til velferd',
              'Det er ikke vanskelig i det hele tatt',
              'Økonomisk vekst og miljø har ingenting med hverandre å gjøre',
              'Man kan alltid velge miljø uten noen konsekvenser',
            ],
          },
          {
            label: 'b',
            task: 'Gi to eksempler på hvordan Norge kan bli mer bærekraftig.',
            solution: 'Eksempler: Mer utbygging av fornybar energi (vind, sol), elektrifisering av transport, redusere oljeproduksjon, satse på grønn teknologi, bedre avfallshåndtering.',
            multipleChoiceOptions: [
              'Mer fornybar energi, elektrifisering av transport, grønn teknologi',
              'Norge trenger ikke bli mer bærekraftig',
              'Bruke mer olje og kull',
              'Stoppe all økonomisk aktivitet',
            ],
          },
        ],
        solution: 'Bærekraftig utvikling krever balanse mellom økonomi, miljø og sosiale hensyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Politiske systemer
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_3_1: TextbookChapter = {
  id: 'samfunnsfag-9-3-1',
  courseId: 'samfunnsfag-9',
  chapterNumber: '3.1',
  title: 'Politiske systemer',
  description: 'Lær om ulike måter å organisere politisk makt på.',
  estimatedMinutes: 45,
  competenceGoals: [
    'sammenligne ulike politiske systemer og ideologier'
  ],
  content: [
    {
      id: 'samf-9-3-1-intro',
      type: 'text',
      content: `
# Politiske systemer

Hvordan skal et samfunn styres? Dette spørsmålet har mennesker diskutert i
tusenvis av år. Det finnes mange ulike måter å organisere politisk makt på.
      `
    },
    {
      id: 'samf-9-3-1-def',
      type: 'definition',
      title: 'Demokrati og diktatur',
      content: `**Demokrati** (folkestyre):
- Folket velger sine ledere
- Frie og rettferdige valg
- Ytringsfrihet og pressefrihet
- Maktfordeling

**Diktatur** (autokrati):
- Én person eller gruppe har all makt
- Ingen frie valg
- Begrenset ytringsfrihet
- Ingen reell opposisjon`
    },
    {
      id: 'samf-9-3-1-demokrati',
      type: 'text',
      title: 'Typer demokrati',
      content: `
## Direkte demokrati
- Folket stemmer direkte på saker
- Eksempel: Folkeavstemninger i Sveits

## Representativt demokrati
- Folket velger representanter
- Representantene tar beslutninger
- Norge har representativt demokrati

## Parlamentarisk system (Norge)
- Regjeringen utgår fra Stortinget
- Regjeringen må ha støtte i parlamentet
- Statsministeren er regjeringssjef

## Presidentstyre (USA)
- President velges separat
- President er både statsoverhode og regjeringssjef
- Sterkere maktfordeling
      `
    },
    {
      id: 'samf-9-3-1-diktatur',
      type: 'text',
      title: 'Typer diktatur',
      content: `
## Ulike former for diktatur

**Enepartistater**:
- Ett parti har makten
- Eksempel: Kina (Kommunistpartiet)

**Militærdiktaturer**:
- Militæret styrer landet
- Eksempel: Myanmar

**Personlige diktaturer**:
- Én leder har all makt
- Eksempel: Nord-Korea

**Teokrati**:
- Religiøse ledere styrer
- Eksempel: Iran
      `
    },
    {
      id: 'samf-9-3-1-ideologier',
      type: 'text',
      title: 'Politiske ideologier',
      content: `
## Viktige ideologier

**Liberalisme**:
- Individuell frihet
- Begrenset stat
- Markedsøkonomi

**Sosialisme**:
- Likhet og fellesskap
- Aktiv stat
- Omfordeling

**Konservatisme**:
- Tradisjon og stabilitet
- Forsiktig endring
- Familie og nasjon

**Nasjonalisme**:
- Fokus på egen nasjon
- Kan være moderat eller ekstrem
      `
    },
    {
      id: 'samf-9-3-1-example',
      type: 'example',
      title: 'Demokratiindeksen',
      problem: 'Hvordan måles demokrati?',
      solution: `**The Economist Democracy Index** rangerer land etter:

1. Valgprosess og pluralisme
2. Hvordan regjeringen fungerer
3. Politisk deltakelse
4. Politisk kultur
5. Borgerlige friheter

**Kategorier**:
- **Fullverdige demokratier**: Norge, Sverige, Danmark
- **Ufullstendige demokratier**: USA, Frankrike
- **Hybridregimer**: Tyrkia, Pakistan
- **Autoritære regimer**: Kina, Russland, Nord-Korea

Norge topper ofte listen som verdens beste demokrati!`
    },
    {
      id: 'samf-9-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner et demokrati?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et kjennetegn på demokrati.',
            solution: 'Frie og rettferdige valg',
            multipleChoiceOptions: [
              'Frie og rettferdige valg',
              'Én leder med all makt',
              'Sensur av medier',
              'Forbud mot opposisjon',
            ],
          },
        ],
        solution: 'Frie og rettferdige valg er riktig. I et demokrati velger folket sine ledere gjennom valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilken type styresett har Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg Norges styresett.',
            solution: 'Parlamentarisk demokrati',
            multipleChoiceOptions: ['Parlamentarisk demokrati', 'Presidentstyre', 'Diktatur', 'Teokrati'],
          },
        ],
        solution: 'Parlamentarisk demokrati er riktig. Regjeringen utgår fra Stortinget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken ideologi vektlegger individuell frihet og markedsøkonomi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg ideologien som vektlegger individuell frihet.',
            solution: 'Liberalisme',
            multipleChoiceOptions: ['Liberalisme', 'Sosialisme', 'Kommunisme', 'Fascisme'],
          },
        ],
        solution: 'Liberalisme er riktig. Liberalismen fokuserer på individets frihet og begrenset stat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign politiske systemer.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar tre forskjeller mellom demokrati og diktatur.',
            solution: '1) Demokrati har frie valg, diktatur har ikke. 2) Demokrati har ytringsfrihet, diktatur har sensur. 3) Demokrati har maktfordeling, i diktatur er makten samlet.',
            multipleChoiceOptions: [
              'Demokrati har frie valg, ytringsfrihet og maktfordeling - diktatur har ikke',
              'Det er ingen forskjell mellom demokrati og diktatur',
              'Diktatur er bedre enn demokrati',
              'Demokrati og diktatur betyr det samme',
            ],
          },
          {
            label: 'b',
            task: 'Forklar forskjellen mellom parlamentarisk system og presidentstyre.',
            solution: 'I parlamentarisk system utgår regjeringen fra parlamentet og kan avsettes. I presidentstyre velges presidenten separat og har egen makt uavhengig av parlamentet.',
            multipleChoiceOptions: [
              'I parlamentarisk system utgår regjeringen fra parlamentet, i presidentstyre velges presidenten separat',
              'Det er ingen forskjell',
              'Parlamentarisk system har ingen president',
              'Presidentstyre har ikke parlament',
            ],
          },
        ],
        solution: 'Ulike politiske systemer organiserer makt på forskjellige måter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Menneskerettigheter
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_3_2: TextbookChapter = {
  id: 'samfunnsfag-9-3-2',
  courseId: 'samfunnsfag-9',
  chapterNumber: '3.2',
  title: 'Menneskerettigheter',
  description: 'Lær om menneskerettighetene og hvordan de beskytter alle mennesker.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske hvordan menneskerettigheter er nedfelt i nasjonale og internasjonale dokumenter'
  ],
  content: [
    {
      id: 'samf-9-3-2-intro',
      type: 'text',
      content: `
# Menneskerettigheter

Menneskerettighetene er grunnleggende rettigheter som alle mennesker har,
uavhengig av hvem de er eller hvor de bor. De beskytter vår verdighet og frihet.
      `
    },
    {
      id: 'samf-9-3-2-def',
      type: 'definition',
      title: 'Hva er menneskerettigheter?',
      content: `**Menneskerettigheter** er:
- **Universelle**: Gjelder alle mennesker
- **Umistelige**: Kan ikke tas fra deg
- **Udelelige**: Alle rettigheter henger sammen
- **Uavhendelige**: Du kan ikke gi dem fra deg

De er basert på ideen om **menneskets iboende verdighet**.`
    },
    {
      id: 'samf-9-3-2-historie',
      type: 'text',
      title: 'Menneskerettighetenes historie',
      content: `
## Historisk utvikling

**Magna Carta (1215)**: England - begrensning av kongens makt

**Uavhengighetserklæringen (1776)**: USA - "alle mennesker er skapt like"

**Den franske revolusjon (1789)**: Frihet, likhet, brorskap

**FNs menneskerettighetserklæring (1948)**: Etter 2. verdenskrig
- Vedtatt 10. desember (menneskerettighetsdagen)
- 30 artikler med grunnleggende rettigheter
- Ikke juridisk bindende, men moralsk forpliktende
      `
    },
    {
      id: 'samf-9-3-2-rettigheter',
      type: 'text',
      title: 'Typer menneskerettigheter',
      content: `
## Sivile og politiske rettigheter

- Rett til liv
- Forbud mot tortur
- Ytringsfrihet
- Religionsfrihet
- Stemmerett
- Rett til rettferdig rettergang

## Økonomiske, sosiale og kulturelle rettigheter

- Rett til utdanning
- Rett til helse
- Rett til arbeid
- Rett til bolig
- Rett til å delta i kulturlivet

## Spesielle rettigheter

- Barnekonvensjonen
- Kvinnekonvensjonen
- Urfolksrettigheter
- Flyktningkonvensjonen
      `
    },
    {
      id: 'samf-9-3-2-brudd',
      type: 'text',
      title: 'Menneskerettighetsbrudd',
      content: `
## Eksempler på brudd i dag

- **Tortur**: Fortsatt utbredt i mange land
- **Diskriminering**: Basert på kjønn, rase, religion
- **Manglende ytringsfrihet**: Journalister fengsles
- **Moderne slaveri**: Menneskehandel og tvangsarbeid
- **Mangel på utdanning**: Millioner av barn uten skole

## Hvem passer på?

- **FN**: Menneskerettighetsrådet
- **Amnesty International**: Frivillig organisasjon
- **Human Rights Watch**: Dokumenterer brudd
- **Den europeiske menneskerettighetsdomstolen**
      `
    },
    {
      id: 'samf-9-3-2-note',
      type: 'note',
      title: 'Barnekonvensjonen',
      content: `**FNs barnekonvensjon** (1989) gir barn egne rettigheter:

- Rett til liv og utvikling
- Rett til navn og statsborgerskap
- Rett til å bli hørt i saker som angår dem
- Rett til utdanning og helse
- Beskyttelse mot vold og utnyttelse
- Rett til lek og fritid

Alle land unntatt USA har ratifisert konvensjonen.`
    },
    {
      id: 'samf-9-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Når ble FNs menneskerettighetserklæring vedtatt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg året da FNs menneskerettighetserklæring ble vedtatt.',
            solution: '1948',
            multipleChoiceOptions: ['1948', '1918', '1789', '2000'],
          },
        ],
        solution: '1948 er riktig. Erklæringen ble vedtatt 10. desember 1948.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner menneskerettigheter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et kjennetegn på menneskerettigheter.',
            solution: 'De er universelle og gjelder alle',
            multipleChoiceOptions: [
              'De er universelle og gjelder alle',
              'De gjelder bare i rike land',
              'De kan kjøpes',
              'De gjelder bare voksne',
            ],
          },
        ],
        solution: 'De er universelle og gjelder alle er riktig. Menneskerettigheter gjelder alle mennesker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken rettighet er en sivil/politisk rettighet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den sivile/politiske rettigheten.',
            solution: 'Ytringsfrihet',
            multipleChoiceOptions: ['Ytringsfrihet', 'Rett til utdanning', 'Rett til bolig', 'Rett til helse'],
          },
        ],
        solution: 'Ytringsfrihet er riktig. Ytringsfrihet er en sivil og politisk rettighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Drøft menneskerettigheter.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre rettigheter fra FNs barnekonvensjon.',
            solution: 'Eksempler: Rett til liv, rett til utdanning, rett til å bli hørt, beskyttelse mot vold, rett til lek og fritid, rett til navn.',
            multipleChoiceOptions: [
              'Rett til liv, utdanning, å bli hørt, beskyttelse mot vold, lek og fritid',
              'Barn har ingen egne rettigheter',
              'Barnekonvensjonen finnes ikke',
              'Barn har bare plikt til å jobbe',
            ],
          },
          {
            label: 'b',
            task: 'Gi to eksempler på menneskerettighetsbrudd som skjer i verden i dag.',
            solution: 'Eksempler: Tortur i fengsler, sensur av medier, diskriminering av minoriteter, menneskehandel, barnearbeid, mangel på ytringsfrihet.',
            multipleChoiceOptions: [
              'Tortur, sensur, diskriminering, menneskehandel, barnearbeid',
              'Det skjer ingen menneskerettighetsbrudd i dag',
              'Menneskerettighetsbrudd skjedde bare før',
              'Alle land respekterer menneskerettighetene',
            ],
          },
        ],
        solution: 'Menneskerettigheter er viktige, men brytes fortsatt mange steder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.3: Konflikter og fred
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_3_3: TextbookChapter = {
  id: 'samfunnsfag-9-3-3',
  courseId: 'samfunnsfag-9',
  chapterNumber: '3.3',
  title: 'Konflikter og fred',
  description: 'Forstå årsaker til konflikter og hvordan fred kan bygges.',
  estimatedMinutes: 50,
  competenceGoals: [
    'drøfte årsaker til og konsekvenser av konflikter og hvordan konflikter kan løses'
  ],
  content: [
    {
      id: 'samf-9-3-3-intro',
      type: 'text',
      content: `
# Konflikter og fred

Konflikter mellom mennesker, grupper og land har alltid eksistert. For å kunne
bygge fred, må vi forstå hvorfor konflikter oppstår og hvordan de kan løses.
      `
    },
    {
      id: 'samf-9-3-3-def',
      type: 'definition',
      title: 'Typer konflikter',
      content: `**Konflikt**: Uenighet eller motsetning mellom parter.

**Væpnet konflikt**: Konflikt med bruk av våpen og militærmakt.

**Borgerkrig**: Væpnet konflikt innad i et land.

**Internasjonal konflikt**: Konflikt mellom land.

**Etnisk konflikt**: Konflikt mellom folkegrupper.

**Ressurskonflikt**: Konflikt om ressurser (vann, olje, land).`
    },
    {
      id: 'samf-9-3-3-arsaker',
      type: 'text',
      title: 'Årsaker til konflikter',
      content: `
## Hvorfor oppstår konflikter?

**Politiske årsaker**:
- Maktkamp og udemokratisk styre
- Undertrykkelse av grupper
- Grensekonflikter

**Økonomiske årsaker**:
- Fattigdom og ulikhet
- Kamp om ressurser
- Økonomiske sanksjoner

**Sosiale/kulturelle årsaker**:
- Etniske og religiøse motsetninger
- Diskriminering
- Historiske urett

**Sikkerhetsmessige årsaker**:
- Trusler mot sikkerhet
- Våpenkappløp
- Terrorisme
      `
    },
    {
      id: 'samf-9-3-3-losning',
      type: 'text',
      title: 'Konfliktløsning',
      content: `
## Hvordan løse konflikter?

**Forhandlinger**:
- Dialog mellom partene
- Kompromiss

**Megling**:
- Tredjeparter hjelper partene
- Norge har vært mekler i flere konflikter

**Internasjonale organisasjoner**:
- FN kan gripe inn
- Fredsbevarende styrker
- Sanksjoner

**Rettssystemet**:
- Den internasjonale domstolen
- Den internasjonale straffedomstolen (ICC)

**Fredsprosesser**:
- Våpenhvile
- Fredsavtaler
- Forsoningsarbeid
      `
    },
    {
      id: 'samf-9-3-3-fn',
      type: 'text',
      title: 'FN og fredsarbeid',
      content: `
## FNs rolle

**FNs formål** (1945):
- Hindre krig
- Fremme menneskerettigheter
- Utvikle samarbeid mellom nasjoner

**Virkemidler**:
- **Sikkerhetsrådet**: Kan vedta bruk av makt
- **Fredsbevarende styrker**: Blåhjelmer
- **Sanksjoner**: Økonomisk press
- **Diplomati**: Forhandlinger

**Utfordringer**:
- Vetoretten kan blokkere handling
- Mangler egen hær
- Avhengig av medlemslandenes vilje
      `
    },
    {
      id: 'samf-9-3-3-example',
      type: 'example',
      title: 'Norge som fredsnasjon',
      problem: 'Hvordan bidrar Norge til fred?',
      solution: `Norge har vært involvert i flere fredsprosesser:

**Oslo-avtalen (1993)**: Hemmelige forhandlinger mellom Israel og PLO

**Sri Lanka**: Megling mellom regjeringen og Tamil Tigrene

**Colombia**: Fredsavtale mellom regjeringen og FARC

**Nobelprisen**: Norge deler ut Nobels fredspris

**FN-styrker**: Norge bidrar med soldater

**Bistand**: Støtte til utvikling og humanitært arbeid

Norge bruker sin posisjon som nøytral part til å mekle i konflikter.`
    },
    {
      id: 'samf-9-3-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er en borgerkrig?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg definisjonen på borgerkrig.',
            solution: 'Væpnet konflikt innad i et land',
            multipleChoiceOptions: [
              'Væpnet konflikt innad i et land',
              'Krig mellom to land',
              'Fredelig protest',
              'Handel mellom land',
            ],
          },
        ],
        solution: 'Væpnet konflikt innad i et land er riktig. Borgerkrig er krig mellom grupper i samme land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-3-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-3-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva kan være en årsak til konflikt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg en vanlig årsak til konflikter.',
            solution: 'Kamp om ressurser',
            multipleChoiceOptions: [
              'Kamp om ressurser',
              'For mye demokrati',
              'For høy levestandard',
              'For mye fred',
            ],
          },
        ],
        solution: 'Kamp om ressurser er riktig. Ressurskonflikter er en vanlig årsak til krig og konflikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-3-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilket organ i FN kan vedta bruk av militærmakt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg FN-organet som kan vedta bruk av makt.',
            solution: 'Sikkerhetsrådet',
            multipleChoiceOptions: ['Sikkerhetsrådet', 'Generalforsamlingen', 'UNESCO', 'WHO'],
          },
        ],
        solution: 'Sikkerhetsrådet er riktig. FNs sikkerhetsråd kan vedta bruk av militærmakt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-3-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-3-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser konflikter og fred.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor det kan være vanskelig å løse konflikter.',
            solution: 'Konflikter er ofte komplekse med mange parter, historiske motsetninger, sterke følelser og ulike interesser. Partene kan ha lite tillit til hverandre, og det kan være vanskelig å finne løsninger alle kan godta.',
            multipleChoiceOptions: [
              'Konflikter er komplekse med mange parter, historie, sterke følelser og ulike interesser',
              'Det er lett å løse alle konflikter',
              'Konflikter løser seg alltid av seg selv',
              'Det finnes ingen grunner til at konflikter er vanskelige',
            ],
          },
          {
            label: 'b',
            task: 'Gi to eksempler på hvordan Norge bidrar til fred i verden.',
            solution: 'Eksempler: Megling i fredsprosesser (Oslo-avtalen, Colombia), bidrag til FNs fredsbevarende styrker, bistand til utviklingsland, deling av Nobels fredspris.',
            multipleChoiceOptions: [
              'Megling (Oslo-avtalen, Colombia), FN-styrker, bistand, Nobels fredspris',
              'Norge bidrar ikke til fred',
              'Norge starter konflikter',
              'Norge finnes ikke',
            ],
          },
        ],
        solution: 'Fred krever arbeid, kompromiss og vilje fra alle parter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Arbeidsliv
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_4_1: TextbookChapter = {
  id: 'samfunnsfag-9-4-1',
  courseId: 'samfunnsfag-9',
  chapterNumber: '4.1',
  title: 'Arbeidsliv',
  description: 'Lær om arbeidsmarkedet, rettigheter i arbeidslivet og fremtidens arbeid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske arbeidslivet og drøfte ulike perspektiver på arbeid'
  ],
  content: [
    {
      id: 'samf-9-4-1-intro',
      type: 'text',
      content: `
# Arbeidsliv

Arbeid er en viktig del av livet. Det gir oss inntekt, mening og tilhørighet.
Men arbeidslivet er i stadig endring, og det stiller nye krav til oss.
      `
    },
    {
      id: 'samf-9-4-1-def',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**Arbeidsmarkedet**: Der tilbud (arbeidstakere) møter etterspørsel (arbeidsgivere).

**Arbeidstaker**: Den som utfører arbeid.

**Arbeidsgiver**: Den som tilbyr arbeid.

**Lønn**: Betaling for arbeid.

**Fagforening**: Organisasjon som jobber for arbeidstakeres rettigheter.

**Tariffavtale**: Avtale mellom arbeidsgiver og fagforening om lønn og vilkår.`
    },
    {
      id: 'samf-9-4-1-rettigheter',
      type: 'text',
      title: 'Rettigheter i arbeidslivet',
      content: `
## Arbeidsmiljøloven

Arbeidsmiljøloven beskytter arbeidstakere:

**Arbeidstid**:
- Maks 9 timer per dag
- Maks 40 timer per uke
- Rett til pauser

**Ferie**:
- 25 virkedager (5 uker) per år
- Feriepenger

**Trygghet**:
- Oppsigelsesregler
- Sykepenger
- Foreldrepermisjon

**Arbeidsmiljø**:
- Trygt og sunt arbeidsmiljø
- Vern mot mobbing og trakassering
      `
    },
    {
      id: 'samf-9-4-1-organisering',
      type: 'text',
      title: 'Organisering i arbeidslivet',
      content: `
## Arbeidstakere og arbeidsgivere

**Fagforeninger** (arbeidstakersiden):
- LO - Landsorganisasjonen (største)
- YS, Unio, Akademikerne

**Arbeidsgiverorganisasjoner**:
- NHO - Næringslivets Hovedorganisasjon
- Virke, Spekter

## Trepartssamarbeidet

Samarbeid mellom:
1. Arbeidstakere (fagforeninger)
2. Arbeidsgivere (organisasjoner)
3. Staten

Kalles "den norske modellen" - gir stabilitet og forutsigbarhet.
      `
    },
    {
      id: 'samf-9-4-1-fremtid',
      type: 'text',
      title: 'Fremtidens arbeidsliv',
      content: `
## Endringer i arbeidslivet

**Digitalisering og automatisering**:
- Maskiner og AI overtar oppgaver
- Nye jobber skapes
- Krav om digital kompetanse

**Globalisering**:
- Konkurranse fra andre land
- Outsourcing av jobber
- Internasjonale selskaper

**Grønn omstilling**:
- Nye jobber i fornybar energi
- Endringer i olje/gass-sektoren
- Bærekraftige næringer

**Fleksibilitet**:
- Hjemmekontor
- Prosjektbasert arbeid
- Livslang læring
      `
    },
    {
      id: 'samf-9-4-1-example',
      type: 'example',
      title: 'Streik og lønnsoppgjør',
      problem: 'Hva skjer i et lønnsoppgjør?',
      solution: `**Lønnsoppgjøret** er årlige forhandlinger om lønn:

1. **Krav**: Fagforeningene fremmer lønnskrav
2. **Forhandlinger**: Partene møtes
3. **Enighet eller brudd**: Hvis enighet = ny tariffavtale
4. **Megling**: Ved brudd kommer Riksmekleren
5. **Streik/lockout**: Hvis ingen løsning

**Streik**: Arbeidstakerne slutter å jobbe for å presse arbeidsgiverne.

**Lockout**: Arbeidsgiverne stenger arbeidstakerne ute.

Streik er lovlig virkemiddel, men har regler.`
    },
    {
      id: 'samf-9-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er en fagforening?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg definisjonen på fagforening.',
            solution: 'Organisasjon som jobber for arbeidstakeres rettigheter',
            multipleChoiceOptions: [
              'Organisasjon som jobber for arbeidstakeres rettigheter',
              'En type fabrikk',
              'Organisasjon for arbeidsgivere',
              'En politisk parti',
            ],
          },
        ],
        solution: 'Organisasjon som jobber for arbeidstakeres rettigheter er riktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange feriedager har man krav på i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg antall feriedager man har krav på.',
            solution: '25 virkedager (5 uker)',
            multipleChoiceOptions: ['25 virkedager (5 uker)', '10 dager', '52 dager', 'Ingen'],
          },
        ],
        solution: '25 virkedager (5 uker) er riktig. Dette er lovfestet i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er trepartssamarbeidet?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hvem som deltar i trepartssamarbeidet.',
            solution: 'Arbeidstakere, arbeidsgivere og staten',
            multipleChoiceOptions: [
              'Arbeidstakere, arbeidsgivere og staten',
              'Tre bedrifter',
              'Tre politiske partier',
              'Tre land',
            ],
          },
        ],
        solution: 'Arbeidstakere, arbeidsgivere og staten er riktig. De tre partene samarbeider i den norske modellen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Drøft arbeidslivet.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor fagforeninger er viktige for arbeidstakere.',
            solution: 'Fagforeninger forhandler bedre lønn og arbeidsvilkår, beskytter mot usaklig oppsigelse, gir juridisk hjelp og sikrer at arbeidsgivere følger lover og avtaler.',
            multipleChoiceOptions: [
              'Fagforeninger forhandler lønn, beskytter mot oppsigelse og sikrer at lover følges',
              'Fagforeninger er ikke viktige',
              'Fagforeninger jobber for arbeidsgivere',
              'Det finnes ingen fagforeninger i Norge',
            ],
          },
          {
            label: 'b',
            task: 'Gi to eksempler på hvordan arbeidslivet endres av teknologi.',
            solution: 'Eksempler: Automatisering erstatter manuelle jobber, hjemmekontor blir vanligere, nye digitale yrker oppstår, AI endrer arbeidsoppgaver.',
            multipleChoiceOptions: [
              'Automatisering erstatter jobber, hjemmekontor blir vanligere, nye digitale yrker oppstår',
              'Teknologi påvirker ikke arbeidslivet',
              'Alle jobber forblir like',
              'Teknologi fantes ikke før',
            ],
          },
        ],
        solution: 'Arbeidslivet endres stadig, og det krever at vi tilpasser oss.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.2: Internasjonal handel
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_9_4_2: TextbookChapter = {
  id: 'samfunnsfag-9-4-2',
  courseId: 'samfunnsfag-9',
  chapterNumber: '4.2',
  title: 'Internasjonal handel',
  description: 'Forstå hvordan land handler med hverandre og hvilken betydning det har.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske hvordan handel og økonomisk samarbeid påvirker land og folk'
  ],
  content: [
    {
      id: 'samf-9-4-2-intro',
      type: 'text',
      content: `
# Internasjonal handel

Handel mellom land har foregått i tusenvis av år. I dag er verdensøkonomien
tett sammenvevd, og handel er viktig for alle lands økonomi.
      `
    },
    {
      id: 'samf-9-4-2-def',
      type: 'definition',
      title: 'Viktige begreper',
      content: `**Eksport**: Varer og tjenester som selges til utlandet.

**Import**: Varer og tjenester som kjøpes fra utlandet.

**Handelsbalanse**: Forskjellen mellom eksport og import.

**Frihandel**: Handel uten toll eller begrensninger.

**Proteksjonisme**: Beskyttelse av egen industri med toll og hindringer.

**Toll**: Avgift på importerte varer.`
    },
    {
      id: 'samf-9-4-2-hvorfor',
      type: 'text',
      title: 'Hvorfor handler land?',
      content: `
## Fordeler med handel

**Spesialisering**: Land produserer det de er best på

**Lavere priser**: Konkurranse gir billigere varer

**Større utvalg**: Tilgang til varer fra hele verden

**Økonomisk vekst**: Handel skaper arbeidsplasser og velstand

**Teknologioverføring**: Kunnskap spres mellom land

## Ulemper

**Avhengighet**: Land blir sårbare
**Tap av arbeidsplasser**: Konkurranse fra utlandet
**Miljøbelastning**: Transport over lange avstander
**Utnyttelse**: Arbeidere i fattige land kan utnyttes
      `
    },
    {
      id: 'samf-9-4-2-norge',
      type: 'text',
      title: 'Norges handel',
      content: `
## Norges viktigste eksport

1. **Olje og gass**: Ca. 50% av eksporten
2. **Fisk og sjømat**: Stor og voksende næring
3. **Metaller og mineraler**: Aluminium, nikkel
4. **Maskiner og utstyr**: Maritim industri
5. **Tjenester**: Skipsfart, finans

## Norges viktigste import

- Maskiner og transportmidler
- Mat og drikkevarer
- Klær og tekstiler
- Kjemikalier

## Handelspartnere

- **EU**: Største handelspartner (ca. 60%)
- **Storbritannia**: Etter Brexit fortsatt viktig
- **USA, Kina, Sverige**: Andre viktige partnere
      `
    },
    {
      id: 'samf-9-4-2-organisasjoner',
      type: 'text',
      title: 'Internasjonale handelsorganisasjoner',
      content: `
## WTO - Verdens handelsorganisasjon

- Fremmer frihandel
- Løser handelstvister
- Forhandler handelsavtaler
- 164 medlemsland

## EU - Den europeiske union

- Felles marked med fri flyt av varer, tjenester, kapital og mennesker
- Norge er ikke medlem, men har EØS-avtalen

## EØS-avtalen

- Gir Norge tilgang til EUs indre marked
- Norge må følge mange EU-regler
- Norge er ikke med i toll- eller landbrukspolitikk
      `
    },
    {
      id: 'samf-9-4-2-example',
      type: 'example',
      title: 'Frihandel vs. proteksjonisme',
      problem: 'Hva er forskjellen mellom frihandel og proteksjonisme?',
      solution: `**Frihandel**:
- Ingen toll eller handelshindringer
- Konkurranse mellom land
- Billigere varer for forbrukere
- Eksempel: EU, EØS

**Proteksjonisme**:
- Toll på importerte varer
- Beskyttelse av egen industri
- Kan gi høyere priser
- Eksempel: Norsk landbrukspolitikk

Norge har frihandel med EU gjennom EØS, men beskytter norsk landbruk med toll på mat.`
    },
    {
      id: 'samf-9-4-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-9-4-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er eksport?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg definisjonen på eksport.',
            solution: 'Varer som selges til utlandet',
            multipleChoiceOptions: [
              'Varer som selges til utlandet',
              'Varer som kjøpes fra utlandet',
              'Varer som produseres lokalt',
              'Varer som gis bort',
            ],
          },
        ],
        solution: 'Varer som selges til utlandet er riktig. Eksport er salg til andre land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-4-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-9-4-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva er Norges største eksportvare?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg Norges største eksportvare.',
            solution: 'Olje og gass',
            multipleChoiceOptions: ['Olje og gass', 'Fisk', 'Klær', 'Biler'],
          },
        ],
        solution: 'Olje og gass er riktig. Olje og gass utgjør ca. 50% av norsk eksport.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-4-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-9-4-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er WTO?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva WTO er.',
            solution: 'Verdens handelsorganisasjon',
            multipleChoiceOptions: ['Verdens handelsorganisasjon', 'Verdens turistorganisasjon', 'En bank', 'Et land'],
          },
        ],
        solution: 'Verdens handelsorganisasjon er riktig. WTO fremmer frihandel mellom land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-9-4-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-9-4-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Drøft internasjonal handel.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor land handler med hverandre i stedet for å produsere alt selv.',
            solution: 'Land har ulike ressurser og er flinke til ulike ting. Ved å spesialisere seg og handle, får alle tilgang til flere varer til lavere priser. Det er mer effektivt enn at alle skal produsere alt.',
            multipleChoiceOptions: [
              'Land har ulike ressurser og spesialiserer seg, handel gir flere varer til lavere priser',
              'Land handler ikke med hverandre',
              'Alle land produserer alt selv',
              'Handel er alltid dårlig',
            ],
          },
          {
            label: 'b',
            task: 'Gi to argumenter for frihandel og to argumenter mot.',
            solution: 'For: Lavere priser, større utvalg, økonomisk vekst. Mot: Tap av lokale arbeidsplasser, avhengighet av andre land, kan skade lokal industri.',
            multipleChoiceOptions: [
              'For: Lavere priser, vekst. Mot: Tap av jobber, avhengighet',
              'Det finnes bare argumenter for frihandel',
              'Det finnes bare argumenter mot frihandel',
              'Frihandel og proteksjonisme er det samme',
            ],
          },
        ],
        solution: 'Handel er komplekst med både fordeler og ulemper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// Eksporter alle kapitler
export const SAMFUNNSFAG_9_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_9_1_1,
  CHAPTER_SAMFUNNSFAG_9_1_2,
  CHAPTER_SAMFUNNSFAG_9_1_3,
  CHAPTER_SAMFUNNSFAG_9_2_1,
  CHAPTER_SAMFUNNSFAG_9_2_2,
  CHAPTER_SAMFUNNSFAG_9_2_3,
  CHAPTER_SAMFUNNSFAG_9_3_1,
  CHAPTER_SAMFUNNSFAG_9_3_2,
  CHAPTER_SAMFUNNSFAG_9_3_3,
  CHAPTER_SAMFUNNSFAG_9_4_1,
  CHAPTER_SAMFUNNSFAG_9_4_2,
];
