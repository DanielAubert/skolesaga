/**
 * Tekstbok innhold for Samfunnsfag 8. klasse
 *
 * Følger LK20 læreplan for samfunnsfag ungdomstrinn.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Demokrati og medborgerskap
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_8_1_1: TextbookChapter = {
  id: 'samfunnsfag-8-1-1',
  courseId: 'samfunnsfag-8',
  chapterNumber: '1.1',
  title: 'Demokrati og medborgerskap',
  description: 'Lær om demokratiets grunnprinsipper og hvordan du kan delta i samfunnet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og beskrive hvordan menneske- og urfolksrettigheter er nedfelt i nasjonale og internasjonale dokumenter'
  ],
  content: [
    {
      id: 'samf-8-1-1-intro',
      type: 'text',
      content: `
# Demokrati og medborgerskap

**Demokrati** betyr folkestyre. I et demokrati har folket makt til å bestemme
hvordan samfunnet skal styres, enten direkte eller gjennom valgte representanter.
      `
    },
    {
      id: 'samf-8-1-1-def-demokrati',
      type: 'definition',
      title: 'Demokratiets kjennetegn',
      content: `Et demokrati har disse kjennetegnene:

- **Frie valg**: Alle voksne kan stemme
- **Ytringsfrihet**: Rett til å si sin mening
- **Pressefrihet**: Frie medier uten sensur
- **Organisasjonsfrihet**: Rett til å danne partier/foreninger
- **Rettsstat**: Alle er like for loven
- **Maktfordeling**: Makten er delt mellom flere organer`
    },
    {
      id: 'samf-8-1-1-maktfordeling',
      type: 'text',
      title: 'Maktfordelingsprinsippet',
      content: `
## De tre statsmaktene i Norge

**Stortinget** (lovgivende makt)
- Vedtar lover
- Vedtar statsbudsjettet
- Kontrollerer regjeringen

**Regjeringen** (utøvende makt)
- Leder landet
- Gjennomfører lovene
- Styrer departementene

**Domstolene** (dømmende makt)
- Avgjør konflikter
- Straffer lovbrudd
- Kontrollerer at lover følges
      `
    },
    {
      id: 'samf-8-1-1-medborgerskap',
      type: 'definition',
      title: 'Medborgerskap',
      content: `**Medborgerskap** handler om å være en aktiv deltaker i samfunnet.

Du kan delta gjennom:
- Å stemme ved valg (fra 18 år)
- Å engasjere deg i organisasjoner
- Å delta i debatter og ytringer
- Å følge med i nyhetsbildet
- Å respektere andres rettigheter`
    },
    {
      id: 'samf-8-1-1-rettigheter',
      type: 'text',
      title: 'Menneskerettigheter',
      content: `
## Menneskerettigheter

Alle mennesker har visse grunnleggende rettigheter:

- Rett til liv og frihet
- Forbud mot tortur og umenneskelig behandling
- Ytringsfrihet og religionsfrihet
- Rett til utdanning
- Forbud mot diskriminering

Disse er nedfelt i **FNs menneskerettighetserklæring** (1948) og
**Den europeiske menneskerettighetskonvensjonen** (EMK).
      `
    },
    {
      id: 'samf-8-1-1-example',
      type: 'example',
      title: 'Demokrati vs. diktatur',
      problem: 'Hva er forskjellen på et demokrati og et diktatur?',
      solution: `| Demokrati | Diktatur |
|-----------|----------|
| Frie valg | Ingen ekte valg |
| Ytringsfrihet | Sensur |
| Maktfordeling | Makt samlet hos én |
| Uavhengige domstoler | Kontrollerte domstoler |
| Frie medier | Statskontrollert presse |
| Opposisjon tillatt | Opposisjon forbudt |`
    },
    {
      id: 'samf-8-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-8-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva betyr demokrati?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det riktige svaret på hva demokrati betyr.',
            solution: 'Folkestyre',
            multipleChoiceOptions: ['Folkestyre', 'Kongestyre', 'Prestestyre', 'Militærstyre'],
          },
        ],
        solution: 'B er riktig. Demokrati kommer fra gresk: demos (folk) + kratos (styre) = folkestyre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-8-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilken statsmakt vedtar lovene i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hvilken statsmakt som har ansvar for å vedta lover.',
            solution: 'Stortinget',
            multipleChoiceOptions: ['Stortinget', 'Regjeringen', 'Domstolene', 'Kongen'],
          },
        ],
        solution: 'Stortinget er riktig. Stortinget er den lovgivende makt i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-8-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilket dokument fra 1948 slår fast alle menneskers grunnleggende rettigheter?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det riktige dokumentet som fastsetter menneskerettighetene.',
            solution: 'FNs menneskerettighetserklæring',
            multipleChoiceOptions: ['FNs menneskerettighetserklæring', 'Grunnloven', 'EU-charteret', 'Genève-konvensjonene'],
          },
        ],
        solution: 'FNs menneskerettighetserklæring er riktig. Den ble vedtatt 10. desember 1948.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-8-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over demokrati og medborgerskap.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor maktfordeling er viktig i et demokrati.',
            solution: 'Maktfordeling hindrer at én person eller gruppe får for mye makt. Det sikrer at makten kontrolleres og at ingen kan misbruke den.',
            multipleChoiceOptions: [
              'Maktfordeling hindrer at én person eller gruppe får for mye makt. Det sikrer at makten kontrolleres og at ingen kan misbruke den.',
              'Maktfordeling gjør at kongen får bestemme alt alene.',
              'Maktfordeling betyr at bare rike mennesker får stemme.',
              'Maktfordeling handler om at alle må betale like mye skatt.',
            ],
          },
          {
            label: 'b',
            task: 'Gi tre eksempler på hvordan du som ungdom kan være en aktiv medborger.',
            solution: 'Eksempler: Delta i elevråd, engasjere seg i ungdomsorganisasjoner, skrive leserinnlegg, delta i demonstrasjoner, følge med på nyheter, diskutere politikk.',
            multipleChoiceOptions: [
              'Delta i elevråd, engasjere seg i ungdomsorganisasjoner, skrive leserinnlegg',
              'Bare spille dataspill og se på TV hele dagen',
              'Nekte å følge med på nyheter og samfunnsdebatten',
              'Vente til man blir 50 år før man engasjerer seg',
            ],
          },
        ],
        solution: 'Demokrati krever aktive borgere som deltar og følger med.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Politiske partier og valg
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_8_1_2: TextbookChapter = {
  id: 'samfunnsfag-8-1-2',
  courseId: 'samfunnsfag-8',
  chapterNumber: '1.2',
  title: 'Politiske partier og valg',
  description: 'Lær om de politiske partiene i Norge og hvordan valg fungerer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'drøfte sentrale konfliktlinjer i politikken'
  ],
  content: [
    {
      id: 'samf-8-1-2-intro',
      type: 'text',
      content: `
# Politiske partier og valg

I Norge har vi et **flerpartisystem** der mange partier konkurrerer om velgernes
stemmer. Partiene har ulike syn på hvordan samfunnet bør styres.
      `
    },
    {
      id: 'samf-8-1-2-spektrum',
      type: 'text',
      title: 'Politisk høyre-venstre-akse',
      content: `
## Høyre og venstre i politikken

**Venstresiden** (sosialistisk):
- Ønsker mer økonomisk utjevning
- Staten skal ha større rolle
- Høyere skatter for de rike
- Sterke offentlige tjenester

**Høyresiden** (liberal/konservativ):
- Ønsker mer individuell frihet
- Markedet skal ha større rolle
- Lavere skatter
- Privat næringsliv prioriteres
      `
    },
    {
      id: 'samf-8-1-2-partier',
      type: 'text',
      title: 'Norske partier',
      content: `
## De største partiene (fra venstre til høyre)

**Rødt** - Sosialistisk
**SV** - Sosialistisk Venstreparti
**Ap** - Arbeiderpartiet (sosialdemokratisk)
**Sp** - Senterpartiet (sentrum)
**MDG** - Miljøpartiet De Grønne (miljø)
**V** - Venstre (sosialliberalt)
**KrF** - Kristelig Folkeparti (kristendemokratisk)
**H** - Høyre (konservativt)
**FrP** - Fremskrittspartiet (liberalistisk)
      `
    },
    {
      id: 'samf-8-1-2-valg',
      type: 'definition',
      title: 'Valg i Norge',
      content: `Norge har tre typer valg:

**Stortingsvalg** (hvert 4. år)
- Velger 169 representanter til Stortinget
- Avgjør hvem som danner regjering

**Kommune- og fylkestingsvalg** (hvert 4. år)
- Velger lokale politikere
- To år etter stortingsvalg

**Sametingsvalg** (hvert 4. år)
- For å stemme må du stå i samemanntallet`
    },
    {
      id: 'samf-8-1-2-stemmerett',
      type: 'note',
      title: 'Stemmerett',
      content: `**Stemmerett ved stortingsvalg**: Norske statsborgere som fyller 18 år innen valgåret.

**Stemmerett ved lokalvalg**: I tillegg til norske borgere kan utenlandske statsborgere som har bodd i Norge i 3 år stemme ved lokalvalg.`
    },
    {
      id: 'samf-8-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-8-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Hvor ofte er det stortingsvalg i Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svaralternativ for hvor ofte det er stortingsvalg.',
            solution: 'Hvert 4. år',
            multipleChoiceOptions: ['Hvert 4. år', 'Hvert 2. år', 'Hvert 5. år', 'Hvert 6. år'],
          },
        ],
        solution: 'Hvert 4. år er riktig. Stortingsvalg holdes hvert 4. år i Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-8-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilket parti regnes som mest til venstre på den politiske skalaen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg partiet som ligger lengst til venstre politisk.',
            solution: 'Rødt',
            multipleChoiceOptions: ['Rødt', 'Høyre', 'Arbeiderpartiet', 'Senterpartiet'],
          },
        ],
        solution: 'Rødt er riktig. Rødt er det partiet som ligger lengst til venstre av de store partiene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-8-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegner partier på høyresiden i politikken?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som best beskriver høyresidens politikk.',
            solution: 'De ønsker lavere skatter og mer privat næringsliv',
            multipleChoiceOptions: [
              'De ønsker lavere skatter og mer privat næringsliv',
              'De ønsker høyere skatter og mer statlig styring',
              'De prioriterer miljø over alt annet',
              'De vil avskaffe alle private bedrifter',
            ],
          },
        ],
        solution: 'De ønsker lavere skatter og mer privat næringsliv er riktig. Høyresiden prioriterer individuell frihet, lavere skatter og privat initiativ.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-8-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Undersøk politiske partier.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg to partier fra motsatte sider av den politiske skalaen. Beskriv en sak der de er uenige.',
            solution: 'Eksempel: Høyre og SV er uenige om formueskatt. Høyre vil fjerne den, SV vil øke den for å utjevne forskjeller.',
            multipleChoiceOptions: [
              'Høyre og SV er uenige om formueskatt - Høyre vil fjerne den, SV vil øke den',
              'Alle partier er enige om alt i Norge',
              'Rødt og FrP har identisk politikk',
              'Partier finnes ikke i Norge',
            ],
          },
          {
            label: 'b',
            task: 'Forklar hva det vil si at et parti er "sosialdemokratisk".',
            solution: 'Sosialdemokrati kombinerer demokrati med sosial utjevning. Staten skal sikre velferd for alle gjennom skatter og offentlige tjenester, men innenfor en markedsøkonomi.',
            multipleChoiceOptions: [
              'Sosialdemokrati kombinerer demokrati med sosial utjevning gjennom skatter og velferd, men beholder markedsøkonomi',
              'Sosialdemokrati betyr at bare rike mennesker får stemme',
              'Sosialdemokrati er det samme som diktatur',
              'Sosialdemokrati betyr at staten eier absolutt alt',
            ],
          },
        ],
        solution: 'Politiske partier har ulike løsninger på samfunnets utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Geografi - Norge
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_8_2_1: TextbookChapter = {
  id: 'samfunnsfag-8-2-1',
  courseId: 'samfunnsfag-8',
  chapterNumber: '2.1',
  title: 'Norges geografi',
  description: 'Lær om Norges naturgeografi, befolkning og næringer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke samfunnskunnskap, geografi og historie til å analysere lokale, nasjonale og globale samfunn'
  ],
  content: [
    {
      id: 'samf-8-2-1-intro',
      type: 'text',
      content: `
# Norges geografi

Norge er et langstrakt land i Nord-Europa med en unik natur preget av fjorder,
fjell og kystlinje. Landets geografi har formet hvordan vi lever og arbeider.
      `
    },
    {
      id: 'samf-8-2-1-fakta',
      type: 'definition',
      title: 'Norge i tall',
      content: `**Areal**: Ca. 385 000 km² (inkl. Svalbard og Jan Mayen)

**Befolkning**: Ca. 5,5 millioner

**Kystlinje**: Ca. 25 000 km (100 000 km med fjorder)

**Høyeste fjell**: Galdhøpiggen (2469 m)

**Lengste elv**: Glomma (604 km)

**Største innsjø**: Mjøsa (362 km²)`
    },
    {
      id: 'samf-8-2-1-landsdeler',
      type: 'text',
      title: 'Landsdeler',
      content: `
## Norges landsdeler

**Østlandet**: Størst befolkning, Oslo-regionen, jordbruk og industri

**Sørlandet**: Kystlinje, turisme, skipsindustri

**Vestlandet**: Fjorder, olje/gass, fiske, turisme

**Trøndelag**: Jordbruk, Trondheim som teknologisenter

**Nord-Norge**: Fiske, turisme, samisk kultur, nordlys
      `
    },
    {
      id: 'samf-8-2-1-naeringer',
      type: 'text',
      title: 'Næringer',
      content: `
## Viktige næringer i Norge

**Olje og gass**: Norges største eksportnæring, Nordsjøen

**Fiske og havbruk**: Laks, torsk, viktig for kysten

**Skipsfart**: Lang maritim tradisjon

**Turisme**: Fjorder, nordlys, friluftsliv

**Teknologi**: IT, fornybar energi

**Jordbruk**: Begrenset av klima og terreng
      `
    },
    {
      id: 'samf-8-2-1-klima',
      type: 'note',
      title: 'Klima',
      content: `Norge har et mildere klima enn plasseringen skulle tilsi, takket være **Golfstrømmen** som bringer varmt vann langs kysten.

**Kystklima** (vest): Milde vintre, mye nedbør
**Innlandsklima** (øst): Kaldere vintre, varmere somre, mindre nedbør`
    },
    {
      id: 'samf-8-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-8-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva er Norges høyeste fjell?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg Norges høyeste fjell.',
            solution: 'Galdhøpiggen',
            multipleChoiceOptions: ['Galdhøpiggen', 'Glittertind', 'Snøhetta', 'Trolltind'],
          },
        ],
        solution: 'Galdhøpiggen er riktig. Galdhøpiggen er 2469 meter høyt og ligger i Jotunheimen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-8-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor har Norge et mildere klima enn andre steder på samme breddegrad?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg årsaken til Norges milde klima.',
            solution: 'På grunn av Golfstrømmen',
            multipleChoiceOptions: ['På grunn av Golfstrømmen', 'På grunn av fjellene', 'På grunn av oljen', 'På grunn av midnattssola'],
          },
        ],
        solution: 'På grunn av Golfstrømmen er riktig. Golfstrømmen bringer varmt vann fra Mexicogolfen og gjør kysten mildere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-8-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken næring er Norges største eksportnæring?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg Norges største eksportnæring.',
            solution: 'Olje og gass',
            multipleChoiceOptions: ['Olje og gass', 'Fiske', 'Turisme', 'Jordbruk'],
          },
        ],
        solution: 'Olje og gass er riktig. Olje og gass utgjør den største delen av Norges eksportinntekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-8-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk Norges geografi.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv tre måter Norges geografi påvirker hvor folk bor.',
            solution: 'Eksempler: Fjellene gjør at folk bor langs kysten og i dalene. Klimaet gjør sørlandet og østlandet mer attraktivt. Fiskeri og olje har skapt arbeidsplasser langs kysten.',
            multipleChoiceOptions: [
              'Fjellene gjør at folk bor langs kysten og i dalene, klimaet gjør sør og øst attraktivt, fiskeri og olje skaper kystarbeidsplasser',
              'Geografien har ingen betydning for hvor folk bor',
              'Alle nordmenn bor på fjelltoppene',
              'Folk bor bare i Nord-Norge på grunn av midnattssola',
            ],
          },
          {
            label: 'b',
            task: 'Forklar hvorfor kystklima og innlandsklima er forskjellige.',
            solution: 'Havet varmer opp og kjøler ned sakte, så kysten får mildere vintre og kjøligere somre. Innlandet har større temperatursvingninger fordi det ikke påvirkes av havet.',
            multipleChoiceOptions: [
              'Havet varmer opp og kjøler ned sakte, så kysten får mildere vintre og kjøligere somre, mens innlandet har større temperatursvingninger',
              'Det er ingen forskjell mellom kystklima og innlandsklima',
              'Innlandet er alltid varmere enn kysten hele året',
              'Kysten har kaldere vintre enn innlandet',
            ],
          },
        ],
        solution: 'Geografien former hvor vi bor og hvordan vi lever.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Historisk oversikt - Norges historie
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_8_3_1: TextbookChapter = {
  id: 'samfunnsfag-8-3-1',
  courseId: 'samfunnsfag-8',
  chapterNumber: '3.1',
  title: 'Norges historie',
  description: 'En oversikt over Norges historie fra vikingtid til moderne tid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for sentrale hendelser i norsk historie'
  ],
  content: [
    {
      id: 'samf-8-3-1-intro',
      type: 'text',
      content: `
# Norges historie

Norges historie strekker seg tilbake til steinalderen, men vi fokuserer her
på de viktigste periodene fra vikingtiden til i dag.
      `
    },
    {
      id: 'samf-8-3-1-viking',
      type: 'text',
      title: 'Vikingtiden (ca. 800-1050)',
      content: `
## Vikingtiden

- Vikingene seilte til Island, Grønland og Nord-Amerika
- Handlet og plyndret i Europa
- Harald Hårfagre samlet Norge (ca. 872)
- Kristningen av Norge (ca. 1000)
- Viktige konger: Olav Tryggvason, Olav den hellige
      `
    },
    {
      id: 'samf-8-3-1-middelalder',
      type: 'text',
      title: 'Middelalderen og unionstiden',
      content: `
## Middelalderen (1050-1350)
- Norge blir et kristent kongerike
- Svartedauden (1349) tar livet av halvparten av befolkningen

## Unioner (1380-1814)
- **Kalmarunionen** (1397): Norge, Sverige, Danmark forent
- **Danmark-Norge** (1536-1814): Norge blir underlagt Danmark
- Reformasjonen (1537): Norge blir protestantisk
      `
    },
    {
      id: 'samf-8-3-1-1814',
      type: 'definition',
      title: '1814 - Grunnlovsåret',
      content: `**1814** er et nøkkelår i norsk historie:

- Napoleon-krigene fører til at Danmark må avstå Norge til Sverige
- Norske ledere samles på **Eidsvoll** 17. mai
- **Grunnloven** vedtas - en av verdens mest demokratiske på den tiden
- Norge i **personalunion** med Sverige (felles konge, men egen grunnlov)
- 17. mai blir nasjonaldag`
    },
    {
      id: 'samf-8-3-1-moderne',
      type: 'text',
      title: 'Moderne tid',
      content: `
## 1905 - Selvstendighet
- Unionen med Sverige oppløses fredelig
- Prins Carl av Danmark blir Kong Haakon VII

## 1900-tallet
- **1940-1945**: Tysk okkupasjon under 2. verdenskrig
- Gjenoppbygging etter krigen
- Oljefunn i Nordsjøen (1969)
- Norge blir et av verdens rikeste land

## 2000-tallet
- Fokus på velferd, miljø og internasjonalt samarbeid
- Terrorangrepet 22. juli 2011
      `
    },
    {
      id: 'samf-8-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-8-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'I hvilket år ble Grunnloven vedtatt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg året da Grunnloven ble vedtatt.',
            solution: '1814',
            multipleChoiceOptions: ['1814', '1905', '1397', '1945'],
          },
        ],
        solution: '1814 er riktig. Grunnloven ble vedtatt på Eidsvoll 17. mai 1814.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-8-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva var Svartedauden?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva Svartedauden var.',
            solution: 'En pest som drepte mange i middelalderen',
            multipleChoiceOptions: [
              'En pest som drepte mange i middelalderen',
              'En krig mellom Norge og Sverige',
              'En vikingkonge',
              'Navnet på et vikingskip',
            ],
          },
        ],
        solution: 'En pest som drepte mange i middelalderen er riktig. Svartedauden (1349) var en pest som tok livet av omtrent halvparten av Norges befolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-8-3-1-ex3',
        number: '3',
        type: 'classic',
        task: 'I hvilket år ble Norge uavhengig fra Sverige?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg året da Norge ble uavhengig fra Sverige.',
            solution: '1905',
            multipleChoiceOptions: ['1905', '1814', '1940', '1945'],
          },
        ],
        solution: '1905 er riktig. Unionen med Sverige ble fredelig oppløst i 1905.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-8-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Reflekter over norsk historie.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hvorfor 1814 er et viktig år i norsk historie.',
            solution: 'Norge fikk sin egen grunnlov, som ga landet selvstyre selv om det var i union med Sverige. 17. mai ble feiret som nasjonaldag, og Grunnloven la grunnlaget for demokratiet vi har i dag.',
            multipleChoiceOptions: [
              'Norge fikk sin egen grunnlov som ga selvstyre, 17. mai ble nasjonaldag, og Grunnloven la grunnlaget for demokratiet',
              '1814 var bare et vanlig år uten spesiell betydning',
              'I 1814 ble Norge en del av Russland',
              '1814 var året da vikingene oppdaget Amerika',
            ],
          },
          {
            label: 'b',
            task: 'Hvordan påvirket oljefunnene i Nordsjøen Norge?',
            solution: 'Oljen gjorde Norge til et av verdens rikeste land. Inntektene ble brukt til å bygge velferdsstaten og ble spart i Oljefondet (Statens pensjonsfond utland).',
            multipleChoiceOptions: [
              'Oljen gjorde Norge til et av verdens rikeste land, inntektene bygde velferdsstaten og Oljefondet',
              'Oljefunnene hadde ingen betydning for Norge',
              'Oljen gjorde Norge fattigere',
              'All oljen ble gitt bort gratis til andre land',
            ],
          },
        ],
        solution: 'Historien former hvem vi er som nasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Økonomi og arbeidsliv
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_8_4_1: TextbookChapter = {
  id: 'samfunnsfag-8-4-1',
  courseId: 'samfunnsfag-8',
  chapterNumber: '4.1',
  title: 'Økonomi og arbeidsliv',
  description: 'Lær om grunnleggende økonomi, arbeidsmarkedet og velferdsstaten.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for ulike økonomiske systemer og drøfte etiske problemstillinger'
  ],
  content: [
    {
      id: 'samf-8-4-1-intro',
      type: 'text',
      content: `
# Økonomi og arbeidsliv

**Økonomi** handler om hvordan samfunnet produserer, fordeler og forbruker
varer og tjenester. Norge har en **blandingsøkonomi** med både privat
næringsliv og offentlig sektor.
      `
    },
    {
      id: 'samf-8-4-1-systemer',
      type: 'definition',
      title: 'Økonomiske systemer',
      content: `**Markedsøkonomi**: Privat eierskap, tilbud og etterspørsel styrer
- Fordel: Effektivitet og innovasjon
- Ulempe: Kan gi store forskjeller

**Planøkonomi**: Staten eier og styrer alt
- Fordel: Kan sikre likhet
- Ulempe: Ofte ineffektiv

**Blandingsøkonomi** (Norge): Kombinerer begge
- Privat næringsliv + statlig regulering
- Offentlig velferd finansiert av skatter`
    },
    {
      id: 'samf-8-4-1-velferdsstat',
      type: 'text',
      title: 'Den norske velferdsstaten',
      content: `
## Velferdsstaten

Norge er en **velferdsstat** der staten sikrer borgerne grunnleggende tjenester:

- **Helse**: Gratis sykehus og lege (egenandel)
- **Utdanning**: Gratis skole og universitet
- **Pensjon**: Støtte til eldre
- **Trygd**: Støtte ved sykdom, arbeidsledighet
- **Barnetrygd**: Støtte til familier

Dette finansieres gjennom **skatter og avgifter**.
      `
    },
    {
      id: 'samf-8-4-1-arbeid',
      type: 'text',
      title: 'Arbeidslivet',
      content: `
## Arbeidsmarkedet i Norge

**Arbeidstaker**: Den som jobber
**Arbeidsgiver**: Den som ansetter

**Organisasjoner**:
- **LO** (fagforening): Representerer arbeidstakere
- **NHO** (arbeidsgiverforening): Representerer bedrifter

**Trepartssamarbeidet**: Arbeidstakere, arbeidsgivere og staten samarbeider om lønn og arbeidsvilkår.
      `
    },
    {
      id: 'samf-8-4-1-tip',
      type: 'tip',
      title: 'Oljefondet',
      content: `**Statens pensjonsfond utland** (Oljefondet) er verdens største statlige fond.
Oljeinntektene spares for fremtidige generasjoner.
Fondet eier aksjer i tusenvis av selskaper over hele verden.
Verdi: Over 15 000 milliarder kroner (2024).`
    },
    {
      id: 'samf-8-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-8-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva slags økonomisk system har Norge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det økonomiske systemet Norge har.',
            solution: 'Blandingsøkonomi',
            multipleChoiceOptions: ['Blandingsøkonomi', 'Ren markedsøkonomi', 'Planøkonomi', 'Føydaløkonomi'],
          },
        ],
        solution: 'Blandingsøkonomi er riktig. Norge har blandingsøkonomi med både privat næringsliv og offentlig sektor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-8-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hva finansierer velferdsstaten?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva som finansierer velferdsstaten.',
            solution: 'Skatter og avgifter',
            multipleChoiceOptions: ['Skatter og avgifter', 'Bare oljeinntekter', 'Lån fra utlandet', 'Gaver fra bedrifter'],
          },
        ],
        solution: 'Skatter og avgifter er riktig. Velferdsstaten finansieres hovedsakelig gjennom skatter og avgifter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-8-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hva er LO?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg hva LO er.',
            solution: 'En fagforening som representerer arbeidstakere',
            multipleChoiceOptions: [
              'En fagforening som representerer arbeidstakere',
              'En arbeidsgiverorganisasjon',
              'Et politisk parti',
              'Et statlig organ',
            ],
          },
        ],
        solution: 'En fagforening som representerer arbeidstakere er riktig. LO (Landsorganisasjonen) er Norges største fagforening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-4-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-8-4-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Utforsk velferdsstaten.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre tjenester velferdsstaten gir deg.',
            solution: 'Eksempler: Gratis skole, gratis sykehus/lege, barnetrygd, stipend, trygd ved sykdom, pensjon.',
            multipleChoiceOptions: [
              'Gratis skole, gratis sykehus/lege, barnetrygd',
              'Velferdsstaten gir ingen tjenester',
              'Bare rike mennesker får tjenester fra staten',
              'Staten tar bare penger og gir ingenting tilbake',
            ],
          },
          {
            label: 'b',
            task: 'Forklar hvordan skatter gjør disse tjenestene mulige.',
            solution: 'Alle betaler skatt av inntekten sin. Disse pengene samles av staten og brukes til å finansiere skoler, sykehus og andre velferdstjenester. Jo mer vi tjener, jo mer betaler vi i skatt.',
            multipleChoiceOptions: [
              'Alle betaler skatt av inntekten sin, pengene samles og brukes til å finansiere skoler, sykehus og velferdstjenester',
              'Skatter har ingenting med velferdsstaten å gjøre',
              'Bare fattige betaler skatt i Norge',
              'Skattepengene kastes bort og brukes ikke til noe nyttig',
            ],
          },
        ],
        solution: 'Velferdsstaten er en kontrakt mellom borgerne og staten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.1: Globalisering
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_8_5_1: TextbookChapter = {
  id: 'samfunnsfag-8-5-1',
  courseId: 'samfunnsfag-8',
  chapterNumber: '5.1',
  title: 'Globalisering',
  description: 'Forstå hvordan verden henger sammen og hvordan globalisering påvirker oss.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske hvordan globalisering påvirker individ og samfunn'
  ],
  content: [
    {
      id: 'samf-8-5-1-intro',
      type: 'text',
      content: `
# Globalisering

**Globalisering** er prosessen der verden blir mer sammenkoblet gjennom handel,
teknologi, kultur og politikk. Det som skjer ett sted i verden, påvirker
mennesker andre steder.
      `
    },
    {
      id: 'samf-8-5-1-def',
      type: 'definition',
      title: 'Hva er globalisering?',
      content: `Globalisering viser seg på flere måter:

**Økonomisk**: Fri handel, multinasjonale selskaper, global produksjon

**Kulturell**: Spredning av film, musikk, mat, mote

**Politisk**: Internasjonale organisasjoner (FN, EU, WTO)

**Teknologisk**: Internett, sosiale medier, rask kommunikasjon`
    },
    {
      id: 'samf-8-5-1-fordeler',
      type: 'text',
      title: 'Fordeler og ulemper',
      content: `
## Positive sider
- Økt handel og økonomisk vekst
- Spredning av kunnskap og teknologi
- Kulturutveksling
- Enklere å reise og kommunisere

## Negative sider
- Økte forskjeller mellom rike og fattige
- Miljøproblemer (transport, produksjon)
- Tap av lokale kulturer
- Arbeidsplasser flyttes til lavkostland
      `
    },
    {
      id: 'samf-8-5-1-example',
      type: 'example',
      title: 'Eksempel: En smarttelefon',
      problem: 'Hvordan viser en smarttelefon globalisering?',
      solution: `En typisk smarttelefon:

- **Design**: USA (Apple) eller Sør-Korea (Samsung)
- **Komponenter**: Taiwan, Japan, Kina
- **Mineraler**: Kongo, Chile, Australia
- **Montering**: Kina, Vietnam
- **Programvare**: USA, India
- **Salg**: Hele verden

En enkelt telefon involverer dusinvis av land!`
    },
    {
      id: 'samf-8-5-1-organisasjoner',
      type: 'text',
      title: 'Internasjonale organisasjoner',
      content: `
## Viktige organisasjoner

**FN** (Forente nasjoner): Fred, menneskerettigheter, utvikling

**EU** (Den europeiske union): Europeisk samarbeid (Norge er ikke medlem)

**NATO**: Militært samarbeid (Norge er medlem)

**WTO** (Verdens handelsorganisasjon): Fremmer fri handel

**WHO** (Verdens helseorganisasjon): Global helse
      `
    },
    {
      id: 'samf-8-5-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'samf-8-5-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Hva menes med globalisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg den riktige definisjonen av globalisering.',
            solution: 'At verden blir mer sammenkoblet',
            multipleChoiceOptions: [
              'At verden blir mer sammenkoblet',
              'At Norge blir større',
              'At vi slutter å handle med andre land',
              'At alle land blir like',
            ],
          },
        ],
        solution: 'At verden blir mer sammenkoblet er riktig. Globalisering betyr at verden blir mer sammenkoblet gjennom handel, teknologi og kultur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-5-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'samf-8-5-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Hvilket er IKKE en negativ side ved globalisering?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg det som IKKE er en negativ side ved globalisering.',
            solution: 'Enklere tilgang til informasjon',
            multipleChoiceOptions: [
              'Enklere tilgang til informasjon',
              'Miljøproblemer',
              'Tap av lokale kulturer',
              'Arbeidsplasser flyttes',
            ],
          },
        ],
        solution: 'Enklere tilgang til informasjon er riktig. Dette er en positiv side ved globalisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-5-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'samf-8-5-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Hvilken organisasjon jobber for fred og menneskerettigheter globalt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg organisasjonen som jobber for fred og menneskerettigheter.',
            solution: 'FN',
            multipleChoiceOptions: ['FN', 'NATO', 'WTO', 'EU'],
          },
        ],
        solution: 'FN er riktig. FN (Forente nasjoner) arbeider for fred, sikkerhet og menneskerettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-8-5-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'samf-8-5-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Analyser globaliseringens påvirkning.',
        subTasks: [
          {
            label: 'a',
            task: 'Gi tre eksempler på hvordan globalisering påvirker din hverdag.',
            solution: 'Eksempler: Klær fra Asia, mat fra hele verden, sosiale medier kobler deg til mennesker overalt, nyheter fra hele verden, underholdning fra andre land.',
            multipleChoiceOptions: [
              'Klær fra Asia, mat fra hele verden, sosiale medier som kobler deg til mennesker overalt',
              'Globalisering påvirker ikke hverdagen min i det hele tatt',
              'Jeg bruker bare norske produkter og ser bare norske nyheter',
              'Globalisering eksisterer ikke',
            ],
          },
          {
            label: 'b',
            task: 'Diskuter om globalisering er mest positivt eller negativt. Begrunn svaret ditt.',
            solution: 'Åpent svar. Argumenter for: økonomisk vekst, kulturutveksling, teknologi. Argumenter mot: miljø, ulikhet, tap av lokal kultur. De fleste mener det er en blanding.',
            multipleChoiceOptions: [
              'Globalisering har både positive sider (økonomisk vekst, kulturutveksling) og negative sider (miljø, ulikhet) - de fleste mener det er en blanding',
              'Globalisering er bare positivt uten noen ulemper',
              'Globalisering er bare negativt uten noen fordeler',
              'Det finnes ingen argumenter for eller mot globalisering',
            ],
          },
        ],
        solution: 'Globalisering har både positive og negative sider som vi må balansere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// Eksporter alle kapitler
export const SAMFUNNSFAG_8_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_8_1_1,
  CHAPTER_SAMFUNNSFAG_8_1_2,
  CHAPTER_SAMFUNNSFAG_8_2_1,
  CHAPTER_SAMFUNNSFAG_8_3_1,
  CHAPTER_SAMFUNNSFAG_8_4_1,
  CHAPTER_SAMFUNNSFAG_8_5_1,
];
