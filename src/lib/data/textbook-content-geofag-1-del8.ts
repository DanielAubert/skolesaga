/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2 - Del 8: Vaer og vaersystemer
 *
 * Dekker LK20-kompetansemaal for geofag 1 (GEO01-01)
 * Kapittel 8.1-8.5: Atmosfaeren, lufttrykk, skyer, fronter og vaervarsling
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Atmosfaerens oppbygging
// ============================================================================

export const CHAPTER_GEOFAG_1_8_1: TextbookChapter = {
  id: 'geofag-1-8-1',
  courseId: 'geofag-1',
  chapterNumber: '8.1',
  title: 'Atmosfaerens oppbygging',
  description: 'Troposfaeren, stratosfaeren og atmosfaerens lagdeling med temperaturvariasjoner.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive atmosfaerens oppbygging og lagdeling',
    'forklare temperaturendringer i de ulike lagene',
    'gjoere rede for atmosfaerens sammensetning og betydning for livet paa jorden',
  ],
  content: [
    {
      id: 'geo1-8-1-intro',
      type: 'text',
      content: `# Atmosfaerens oppbygging

Atmosfaeren er luftlaget som omgir jorden. Den beskytter oss mot skadelig straaling, regulerer temperaturen og gjoer liv mulig paa planeten vaar.

## Atmosfaerens sammensetning

Toerr luft bestaar hovedsakelig av:
- **Nitrogen (N2)**: 78%
- **Oksygen (O2)**: 21%
- **Argon (Ar)**: 0.93%
- **Karbondioksid (CO2)**: 0.04% (og oekende)
- **Vanndamp (H2O)**: 0-4% (varierer med sted og tid)

I tillegg finnes sporgasser som metan, lystgass, ozon og edelgasser.`,
    },
    {
      id: 'geo1-8-1-def-atmosfaere',
      type: 'definition',
      title: 'Atmosfaeren',
      content: 'Atmosfaeren er gasshoeyllet som omgir jorden og holdes paa plass av tyngdekraften. Den strekker seg fra jordoverflaten til ca. 10 000 km hoeyde, men 99% av massen finnes under 30 km.',
    },
    {
      id: 'geo1-8-1-lagdeling',
      type: 'text',
      content: `## Atmosfaerens lagdeling

Atmosfaeren deles inn i lag basert paa temperaturendringer med hoeyde:

### Troposfaeren (0-12 km)
- **Det nederste laget** der alt vaer skjer
- Temperaturen **synker** med ca. 6.5 grader C per km (temperaturgradienten)
- Inneholder ca. 80% av atmosfaerens masse
- Tykkere ved ekvator (16 km) enn ved polene (8 km)
- Oevre grense kalles **tropopausen**

### Stratosfaeren (12-50 km)
- Temperaturen **oeker** med hoeyde (pga. ozonlaget)
- **Ozonlaget** (15-35 km) absorberer UV-straaling
- Stabil luftmasse, lite vertikal blanding
- Oevre grense kalles **stratopausen**

### Mesosfaeren (50-80 km)
- Temperaturen **synker** igjen med hoeyde
- Kaldeste del av atmosfaeren (ned til -90 grader C)
- Her brenner meteorer opp (stjerneskudd)
- Oevre grense kalles **mesopausen**

### Termosfaeren (80-700 km)
- Temperaturen **oeker** kraftig (opp til 2000 grader C)
- Men lav lufttetthet gir lite foelbar varme
- **Nordlys** oppstaar her
- Radioboelger reflekteres i ionosfaeren`,
    },
    {
      id: 'geo1-8-1-def-troposfare',
      type: 'definition',
      title: 'Troposfaeren',
      content: 'Troposfaeren er det nederste og tetteste laget av atmosfaeren, fra bakken til ca. 12 km hoeyde. Her foregaar all vaerdannelse fordi temperaturen synker med hoeyde, noe som skaper ustabil luft og vertikal blanding.',
    },
    {
      id: 'geo1-8-1-temperatur',
      type: 'text',
      content: `## Temperaturprofilen

### Hvorfor synker temperaturen i troposfaeren?
- Bakken varmes av solstraaling (kortboelgestraaling)
- Bakken varmer luften nedenfra (langboelgestraaling)
- Jo hoeyere, jo lenger fra varmekilden

### Hvorfor oeker temperaturen i stratosfaeren?
- Ozon (O3) absorberer UV-straaling fra sola
- Energien omdannes til varme
- Mest ozon og mest UV-absorpsjon i oevre del

### Ozonlagets betydning
- Beskytter mot skadelig UV-B og UV-C straaling
- Dannes naar UV-C spalter O2-molekyler
- Brytes ned av KFK-gasser (freoner)
- Ozonhullet over Antarktis har vaert et miljoeproblem`,
    },
    {
      id: 'geo1-8-1-example',
      type: 'example',
      title: 'Temperaturberegning med hoeyde',
      problem: 'Temperaturen ved havnivaa er 20 grader C. Hva er temperaturen paa toppen av et fjell som er 2500 m hoeyt? (Bruk normalgradienten paa 6.5 grader C/km)',
      solution: `**Loesning:**

1. **Temperaturgradienten** er 6.5 grader C per 1000 m hoeyde

2. **Hoeydedifferansen** er 2500 m = 2.5 km

3. **Temperaturfall**:
   Temperaturendring = 6.5 grader C/km x 2.5 km = 16.25 grader C

4. **Temperatur paa toppen**:
   T = 20 grader C - 16.25 grader C = 3.75 grader C (ca. 4 grader C)

**Svar:** Temperaturen paa fjelltoppen er ca. 4 grader C.

Dette forklarer hvorfor det er snoe i hoeyfjellet selv om sommeren, og hvorfor fjellklatrere maa kle seg varmt.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-8-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'I hvilket lag av atmosfaeren skjer all vaerdannelse?',
      options: [
        { id: 'a', text: 'Troposfaeren', isCorrect: true },
        { id: 'b', text: 'Stratosfaeren', isCorrect: false },
        { id: 'c', text: 'Mesosfaeren', isCorrect: false },
        { id: 'd', text: 'Termosfaeren', isCorrect: false },
      ],
      solution: 'Troposfaeren er det nederste laget der temperaturgradienten skaper ustabil luft og vertikal bevegelse. Dette muliggjoer skydannelse og nedbor - alt det vi kaller vaer.',
    },
    {
      id: 'geo1-8-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor temperaturen oeker med hoeyde i stratosfaeren, mens den synker i troposfaeren.',
      solution: 'I troposfaeren synker temperaturen fordi bakken er varmekilden - den varmes av sola og varmer luften nedenfra. Lengre opp = lenger fra varmekilden. I stratosfaeren finnes ozonlaget som absorberer UV-straaling fra sola. Denne energien omdannes til varme, og siden det er mer ozon hoeyere opp (15-35 km), oeker temperaturen med hoeyde i dette laget.',
    },
    {
      id: 'geo1-8-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedbestanddelene i toerr luft (de to stoerste)?',
      options: [
        { id: 'a', text: 'Nitrogen (78%) og oksygen (21%)', isCorrect: true },
        { id: 'b', text: 'Oksygen (78%) og nitrogen (21%)', isCorrect: false },
        { id: 'c', text: 'Nitrogen (78%) og karbondioksid (21%)', isCorrect: false },
        { id: 'd', text: 'Oksygen (50%) og nitrogen (50%)', isCorrect: false },
      ],
      solution: 'Toerr luft bestaar av ca. 78% nitrogen og 21% oksygen. Resten er argon, karbondioksid og sporgasser. Vanndamp kommer i tillegg og varierer fra 0-4%.',
    },
    {
      id: 'geo1-8-1-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beregn temperaturen paa cruisehoeyde for et passasjerfly (11 000 m) naar temperaturen ved bakken er 25 grader C. Forklar ogsaa hvorfor fly flyr i denne hoeyden.',
      solution: 'Beregning: Temperaturfall = 6.5 grader C/km x 11 km = 71.5 grader C. Temperatur = 25 grader C - 71.5 grader C = -46.5 grader C. Fly flyr naer tropopausen (ca. 11 km) av flere grunner: 1) Tynnere luft gir mindre luftmotstand og bedre drivstoffokonomi. 2) Over vaersystemene i troposfaeren gir roligere flytur. 3) Jetstroemmen kan utnyttes for oekt hastighet. 4) Temperaturen er stabil rundt tropopausen.',
    },
  ],
};

// ============================================================================
// Kapittel 8.2: Lufttrykk og vind
// ============================================================================

export const CHAPTER_GEOFAG_1_8_2: TextbookChapter = {
  id: 'geofag-1-8-2',
  courseId: 'geofag-1',
  chapterNumber: '8.2',
  title: 'Lufttrykk og vind',
  description: 'Hoeytrykk, lavtrykk, corioliseffekten og globale vindsystemer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare hva lufttrykk er og hvordan det varierer',
    'beskrive sammenhengen mellom trykkforskjeller og vind',
    'gjoere rede for corioliseffekten og dens innvirkning paa vindsystemer',
  ],
  content: [
    {
      id: 'geo1-8-2-intro',
      type: 'text',
      content: `# Lufttrykk og vind

Lufttrykk og vind er grunnleggende for aa forstaa vaersystemer. Vind oppstaar paa grunn av trykkforskjeller i atmosfaeren.

## Hva er lufttrykk?

Lufttrykk er vekten av luftsoeyla over et gitt punkt. Ved havnivaa er normalt lufttrykk **1013.25 hPa** (hektopascal) eller **1 atm**.

Lufttrykket avtar med hoeyden fordi det blir mindre luft over deg. Paa toppen av Mount Everest (8849 m) er trykket bare ca. 1/3 av havnivaa.`,
    },
    {
      id: 'geo1-8-2-def-lufttrykk',
      type: 'definition',
      title: 'Lufttrykk',
      content: 'Lufttrykk er kraften luften utoever per flateenhet. Det maales i hektopascal (hPa) eller millibar (mb). Normalt lufttrykk ved havnivaa er 1013.25 hPa. Lavt trykk er typisk under 1000 hPa, hoeyt trykk over 1020 hPa.',
    },
    {
      id: 'geo1-8-2-trykksystemer',
      type: 'text',
      content: `## Hoeytrykk og lavtrykk

### Hoeytrykk (H)
- Omraade med **hoeyere trykk** enn omgivelsene
- Luften **synker** (subsidens)
- Synkende luft **varmes** og **toerker**
- Gir **stabilt, fint vaer**
- Vind **ut fra** senteret
- Paa nordlige halvkule: **medurs** (med klokken)

### Lavtrykk (L)
- Omraade med **lavere trykk** enn omgivelsene
- Luften **stiger** (konveksjon)
- Stigende luft **avkjoeles** og kondenserer
- Gir **ustabilt vaer**, skyer og nedbor
- Vind **inn mot** senteret
- Paa nordlige halvkule: **moturs** (mot klokken)

### Isobarer
Isobarer er linjer paa et vaerkart som forbinder punkter med likt lufttrykk. Tette isobarer = stor trykkforskjell = sterk vind.`,
    },
    {
      id: 'geo1-8-2-def-isobar',
      type: 'definition',
      title: 'Isobar',
      content: 'En isobar er en linje paa et vaerkart som forbinder punkter med samme lufttrykk. Avstanden mellom isobarene viser trykkgradienten - tette isobarer betyr stor trykkforskjell og sterk vind.',
    },
    {
      id: 'geo1-8-2-vind',
      type: 'text',
      content: `## Hvorfor blaser vind?

Vind er luft i bevegelse, og den oppstaar paa grunn av **trykkforskjeller**:

1. **Trykkgradientkraften**: Luft vil stroemme fra hoeyt til lavt trykk
2. Jo stoerre trykkforskjell, desto sterkere vind
3. Uten andre krefter ville vinden gaa rett fra H til L

### Vindstyrke
- Maales i meter per sekund (m/s) eller knop
- Beaufort-skalaen: 0 (stille) til 12 (orkan)
- Vindkast: Kortvarige oekninger i vindstyrken

### Vindretning
Vindretningen angir **hvor vinden kommer fra**. Nordavind blaser fra nord mot soer.`,
    },
    {
      id: 'geo1-8-2-coriolis',
      type: 'text',
      content: `## Corioliseffekten

Corioliseffekten er en **tilsynelatende avboeyning** av bevegelige objekter paa grunn av jordens rotasjon.

### Hvordan virker den?
- Paa **nordlige halvkule**: Avboeyes mot **hoeyre**
- Paa **soerlige halvkule**: Avboeyes mot **venstre**
- Sterkest ved polene, null ved ekvator

### Konsekvenser for vind
- Vinden gaar ikke rett fra H til L
- Den avboeyes til den gaar nesten **parallelt med isobarene**
- Gir **sirkulaere** vindsystemer rundt H og L

### Geostrofisk vind
I hoey atmosfaere, der friksjon er minimal, balanserer trykkgradient og corioliseffekt hverandre. Vinden blaser da parallelt med isobarene. Naer bakken bremser friksjon vinden og den dreier mer inn mot lavtrykk.`,
    },
    {
      id: 'geo1-8-2-def-coriolis',
      type: 'definition',
      title: 'Corioliseffekten',
      content: 'Corioliseffekten er den tilsynelatende avboeyningen av fritt bevegelige objekter paa grunn av jordens rotasjon. Paa nordlige halvkule avboeyes bevegelse mot hoeyre, paa soerlige halvkule mot venstre. Effekten oeker med breddegraden og er null ved ekvator.',
    },
    {
      id: 'geo1-8-2-globale',
      type: 'text',
      content: `## Globale vindsystemer

Jordens ulike oppvarming skaper permanente vindsystemer:

### Hadleycellen (0-30 grader)
- Varm luft stiger ved ekvator
- Stroemmer polover i hoeyden
- Synker ned ved ca. 30 grader (subtropisk hoeytrykk)
- Returnerer langs bakken som **passatvinder**
- Passatene blaser fra nordoest (N) og soeroest (S)

### Ferrelcellen (30-60 grader)
- Mellomliggende celle
- **Vestavinder** dominerer (blaser fra vest)
- Norges vaer styres av vestaavindene

### Polarcellen (60-90 grader)
- Kald luft synker ved polen
- Stroemmer mot ekvator langs bakken
- **Polarvinder** fra oest/nordoest

### Polarfronten
Grensen mellom kald polarluft og varm tropisk luft. Her dannes lavtrykk som driver vaeret i Norge.`,
    },
    {
      id: 'geo1-8-2-example',
      type: 'example',
      title: 'Vindretning rundt trykksystemer',
      problem: 'Et lavtrykk ligger vest for Norge. Hvilken vindretning vil vi faa paa Vestlandet, og hvorfor?',
      solution: `**Loesning:**

1. **Lavtrykkssirkulasjon**: Paa nordlige halvkule roterer vinden **moturs** (mot klokken) rundt lavtrykk

2. **Vindretning paa Vestlandet**:
   - Lavtrykket er vest for Norge
   - Paa oestsiden av lavtrykket (der Norge ligger) blaser vinden fra **soer mot nord**
   - Altsaa faar vi **soervestlig til soerlig vind**

3. **Konsekvenser**:
   - Soervestlig vind bringer fuktig luft fra Atlanterhavet
   - Luften presses opp over fjellene
   - Gir nedbor paa Vestlandet

**Svar:** Vestlandet vil faa soervestlig til soerlig vind som bringer fuktig luft og nedbor.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-8-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er normalt lufttrykk ved havnivaa?',
      options: [
        { id: 'a', text: '1013 hPa', isCorrect: true },
        { id: 'b', text: '1000 hPa', isCorrect: false },
        { id: 'c', text: '1100 hPa', isCorrect: false },
        { id: 'd', text: '900 hPa', isCorrect: false },
      ],
      solution: 'Normalt lufttrykk ved havnivaa er 1013.25 hPa (hektopascal), ofte avrundet til 1013 hPa. Dette tilsvarer 1 atmosfaere (atm) eller 760 mmHg.',
    },
    {
      id: 'geo1-8-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom vaeret i et hoeytrykksomraade og et lavtrykksomraade.',
      solution: 'I et hoeytrykk synker luften, varmes opp og toerker ut. Dette gir stabilt, fint vaer med lite skyer og ingen nedbor. I et lavtrykk stiger luften, avkjoeles og vanndamp kondenserer. Dette gir ustabilt vaer med skyer, nedbor og ofte vind. Vinden blaser fra hoeytrykk mot lavtrykk, men avboeyes av corioliseffekten.',
    },
    {
      id: 'geo1-8-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken vei roterer vinden rundt et lavtrykk paa nordlige halvkule?',
      options: [
        { id: 'a', text: 'Mot klokken (moturs)', isCorrect: true },
        { id: 'b', text: 'Med klokken (medurs)', isCorrect: false },
        { id: 'c', text: 'Rett inn mot senteret', isCorrect: false },
        { id: 'd', text: 'Rett ut fra senteret', isCorrect: false },
      ],
      solution: 'Paa nordlige halvkule roterer vinden mot klokken (moturs) rundt lavtrykk og med klokken (medurs) rundt hoeytrykk. Dette skyldes corioliseffekten som avboeyer vinden mot hoeyre.',
    },
    {
      id: 'geo1-8-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor vestavinder dominerer i Norge og store deler av Nord-Europa.',
      solution: 'Norge ligger i vestavindbeltet mellom 30 og 60 grader nord (Ferrelcellen). Her stroemmer luft fra subtropisk hoeytrykk (30 grader) mot polarfronten (60 grader). Corioliseffekten avboeyer denne nordgaaende luftstroemmen mot hoeyre slik at den blir vestlig. Derfor kommer det meste av Norges vaer fra vest, og lavtrykkene trekker oestover over Atlanterhavet mot oss. Dette gir Vestlandet mye nedbor og hele landet et maritimt, variabelt klima.',
    },
  ],
};

// ============================================================================
// Kapittel 8.3: Skyer og nedbor
// ============================================================================

export const CHAPTER_GEOFAG_1_8_3: TextbookChapter = {
  id: 'geofag-1-8-3',
  courseId: 'geofag-1',
  chapterNumber: '8.3',
  title: 'Skyer og nedbor',
  description: 'Skydannelse, skytyper, kondensasjon og ulike nedboersformer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hvordan skyer dannes gjennom kondensasjon',
    'beskrive de viktigste skytypene og hva de forteller om vaeret',
    'gjoere rede for ulike nedboersformer og hvordan de oppstaar',
  ],
  content: [
    {
      id: 'geo1-8-3-intro',
      type: 'text',
      content: `# Skyer og nedbor

Skyer er synlige ansamlinger av smaa vanndraaper eller iskrystaller i atmosfaeren. De dannes naar fuktig luft avkjoeles og vanndamp kondenserer.

## Skydannelse

For at skyer skal dannes, maa tre betingelser vaere oppfylt:

1. **Fuktig luft**: Luften maa inneholde vanndamp
2. **Avkjoeling**: Luften maa avkjoeles til duggpunktet
3. **Kondensasjonskjerner**: Smaa partikler (stoev, salt, pollen) som vanndampen kan kondensere paa`,
    },
    {
      id: 'geo1-8-3-def-kondensasjon',
      type: 'definition',
      title: 'Kondensasjon',
      content: 'Kondensasjon er overgangen fra gassform (vanndamp) til vaeskeform (vanndraaper). Det skjer naar luften avkjoeles til duggpunktet - temperaturen der luften er mettet med vanndamp (100% relativ fuktighet).',
    },
    {
      id: 'geo1-8-3-avkjoeling',
      type: 'text',
      content: `## Hvordan avkjoeles luften?

Det er flere maater luften kan avkjoeles paa:

### 1. Adiabatisk avkjoeling (loefting)
- Luft som stiger, utvider seg og avkjoeles
- **Toerradiabatisk**: 1 grad C per 100 m (umettet luft)
- **Fuktigadiabatisk**: 0.5-0.6 grad C per 100 m (mettet luft)
- Viktigste aarsak til skydannelse

### 2. Orografisk loefting
- Luft presses opp over fjell og hoeyderygger
- Gir mye skyer og nedbor paa lo-siden
- Forklarer hvorfor Vestlandet er saa vaatt

### 3. Frontal loefting
- Varm luft glir opp over kaldere luft ved fronter
- Gir utbredte skydekker og langvarig nedbor

### 4. Konveksjon
- Bakken varmes av sola og varmer luften
- Varm luft stiger (termikk)
- Gir taarnskyer og bygevaer om sommeren

### 5. Straalingsavkjoeling
- Bakken mister varme ved nattetid
- Luften naer bakken avkjoeles
- Gir taake og dis`,
    },
    {
      id: 'geo1-8-3-def-duggpunkt',
      type: 'definition',
      title: 'Duggpunktet',
      content: 'Duggpunktet er temperaturen der luften blir mettet med vanndamp (100% relativ fuktighet). Naar luften avkjoeles til duggpunktet, begynner vanndamp aa kondensere til draaper. Jo hoeyere duggpunkt, jo mer vanndamp i luften.',
    },
    {
      id: 'geo1-8-3-skytyper',
      type: 'text',
      content: `## Skytyper

Skyer klassifiseres etter hoeyde og form:

### Hoeye skyer (over 6 km)
- **Cirrus (Ci)**: Tynne, fjaerlignende skyer av iskrystaller
- **Cirrostratus (Cs)**: Tynn sloer, kan gi halo rundt sol/maane
- **Cirrocumulus (Cc)**: Smaa, hvite kuler i moenstre

### Mellomhoeye skyer (2-6 km)
- **Altostratus (As)**: Graalig, jevnt skylag, sola ses som gjennom mattglass
- **Altocumulus (Ac)**: Hvite eller graa klumper, ofte i rekker

### Lave skyer (under 2 km)
- **Stratus (St)**: Jevnt, graat skylag, gir yr og dis
- **Stratocumulus (Sc)**: Store, graa ruller eller klumper
- **Nimbostratus (Ns)**: Moerkt, tykt skylag med vedvarende nedbor

### Vertikalt utviklede skyer
- **Cumulus (Cu)**: Blomkaalformede, hvite "godvaersskyer"
- **Cumulonimbus (Cb)**: Taarnskyer, gir byger, torden og hagl`,
    },
    {
      id: 'geo1-8-3-nedbor',
      type: 'text',
      content: `## Nedboersformer

Nedbor oppstaar naar skydraaaper eller iskrystaller blir store nok til aa falle.

### Regn
- Vanndraaper stoerre enn 0.5 mm i diameter
- Dannes ved kollisjon mellom draaper eller smelting av snoe
- Yr er lett regn med draaper under 0.5 mm

### Snoe
- Iskrystaller som faller naar temperaturen er under 0 grad C
- Krystallenes form avhenger av temperatur og fuktighet
- Sludd er blanding av regn og snoe

### Hagl
- Iskorn som dannes i kraftige taarnskyer (Cb)
- Draaper fryser, faar nye lag is, vokser
- Kan bli svaaert store i kraftige uvaaer

### Rimfrost og dugg
- Dugg: Kondensasjon paa kalde overflater
- Rimfrost: Direkte overgang fra damp til is (deposisjon)
- Skjer ved klare, kalde netter`,
    },
    {
      id: 'geo1-8-3-def-nedbor',
      type: 'definition',
      title: 'Nedbor',
      content: 'Nedbor er vann som faller fra atmosfaeren til bakken i form av regn, snoe, hagl, sludd eller yr. Nedbor oppstaar naar skydraaaper eller iskrystaller blir for tunge til aa holdes oppe av luftstroemmer og faller mot bakken.',
    },
    {
      id: 'geo1-8-3-example',
      type: 'example',
      title: 'Beregning av skyhoeyde',
      problem: 'Temperaturen ved bakken er 25 grad C og duggpunktet er 13 grad C. Paa hvilken hoeyde vil skyer begynne aa danne seg?',
      solution: `**Loesning:**

1. **Temperaturdifferanse**:
   25 grad C - 13 grad C = 12 grad C

2. **Toerradiabatisk avkjoeling**:
   Umettet luft avkjoeles med 1 grad C per 100 m

3. **Hoeyde til kondensasjonsnivaaet**:
   12 grad C / (1 grad C/100 m) = 1200 m

**Svar:** Skyer vil begynne aa dannes paa ca. 1200 meters hoeyde.

**Forklaring:** Naar luften stiger, avkjoeles den toerradiabatisk til den naar duggpunktet. Da begynner kondensasjon, og vi ser skybasen.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-8-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedaarsaken til skydannelse?',
      options: [
        { id: 'a', text: 'Luft som stiger og avkjoeles', isCorrect: true },
        { id: 'b', text: 'Luft som synker og varmes', isCorrect: false },
        { id: 'c', text: 'Oekt solinnstraaling', isCorrect: false },
        { id: 'd', text: 'Stigende lufttrykk', isCorrect: false },
      ],
      solution: 'Skyer dannes naar luft stiger og avkjoeles adiabatisk. Naar temperaturen synker til duggpunktet, kondenserer vanndamp til smaa draaper som danner skyer.',
    },
    {
      id: 'geo1-8-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv forskjellen mellom cumulus- og stratussky.',
      solution: 'Cumulus er vertikalt utviklede skyer med blomkaalform som dannes ved konveksjon (termikk). De har tydelig avgrenset form og flat base. Stratus er horisontalt utbredte lagskyer som dekker himmelen jevnt. De dannes ved svak loefting over store omraader og gir ofte yr eller dis. Cumulus varsler ofte fint vaer (foer de vokser), mens stratus ofte gir graat, fuktig vaer.',
    },
    {
      id: 'geo1-8-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken skytype gir typisk torden og hagl?',
      options: [
        { id: 'a', text: 'Cumulonimbus', isCorrect: true },
        { id: 'b', text: 'Stratus', isCorrect: false },
        { id: 'c', text: 'Cirrus', isCorrect: false },
        { id: 'd', text: 'Altostratus', isCorrect: false },
      ],
      solution: 'Cumulonimbus (Cb) er kraftige taarnskyer som kan strekke seg fra naer bakken til over 10 km hoeyde. De dannes ved sterk konveksjon og inneholder kraftige opp- og nedstroemmer som kan danne hagl. Torden oppstaar paa grunn av elektriske ladninger som bygges opp i skyen.',
    },
    {
      id: 'geo1-8-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Vestlandet faar saa mye mer nedbor enn Oestlandet.',
      solution: 'Vestlandet ligger i lo for de dominerende vestlige vindene som bringer fuktig luft fra Atlanterhavet. Naar denne luften treffer fjellkjeden, presses den oppover (orografisk loefting). Luften avkjoeles adiabatisk, og naar den naar duggpunktet, kondenserer vanndamp og faller som nedbor. Paa Oestlandet er luften allerede toerr etter aa ha avgitt nedbor over fjellene (regnskygge), og synkende luft varmes opp og blir enda toorrere.',
    },
    {
      id: 'geo1-8-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Temperaturen ved bakken er 30 grad C og duggpunktet er 18 grad C. Beregn hoeyden der skyer vil begynne aa dannes.',
      solution: 'Temperaturdifferanse: 30 grad C - 18 grad C = 12 grad C. Toerradiabatisk avkjoeling: 1 grad C per 100 m. Hoeyde til kondensasjonsnivaaet: 12 grad C / (1 grad C/100 m) = 1200 m. Skyer vil begynne aa dannes paa ca. 1200 meters hoeyde. Dette er skybasen - hoeyden der stigende luft naar duggpunktet og kondensasjon begynner.',
    },
  ],
};

// ============================================================================
// Kapittel 8.4: Fronter og lavtrykk
// ============================================================================

export const CHAPTER_GEOFAG_1_8_4: TextbookChapter = {
  id: 'geofag-1-8-4',
  courseId: 'geofag-1',
  chapterNumber: '8.4',
  title: 'Fronter og lavtrykk',
  description: 'Kaldfront, varmfront, okklusjon og polarfrontens betydning for vaeret.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare hva en front er og hvordan fronter dannes',
    'beskrive vaeret ved kaldfront, varmfront og okklusjon',
    'gjoere rede for lavtrykkenes livslop langs polarfronten',
  ],
  content: [
    {
      id: 'geo1-8-4-intro',
      type: 'text',
      content: `# Fronter og lavtrykk

Fronter er grenseflater mellom luftmasser med ulik temperatur og fuktighet. Ved frontene oppstaar det meste av nedboeren i tempererte omraader som Norge.

## Luftmasser

En luftmasse er et stort volum luft med relativt ensartede egenskaper (temperatur, fuktighet). Luftmasser faar sine egenskaper fra omraadet der de dannes:

- **Polar luft (P)**: Kald, dannet i polomraadene
- **Tropisk luft (T)**: Varm, dannet i tropene
- **Maritim (m)**: Fuktig, dannet over hav
- **Kontinental (c)**: Toerr, dannet over land

Norge paavirkes mest av **mP** (maritim polar) og **mT** (maritim tropisk) luftmasser.`,
    },
    {
      id: 'geo1-8-4-def-front',
      type: 'definition',
      title: 'Front',
      content: 'En front er grenseflaten mellom to luftmasser med ulik temperatur og fuktighet. Ved fronter tvinges varm luft til aa stige over kald luft, noe som gir avkjoeling, kondensasjon og nedbor.',
    },
    {
      id: 'geo1-8-4-varmfront',
      type: 'text',
      content: `## Varmfront

En varmfront oppstaar naar varm luft presser mot kald luft og **glir oppover** den kalde luften.

### Kjennetegn
- **Helning**: Slak (1:100 til 1:200)
- **Bredde**: Nedboersomraadet kan vaere flere hundre km bredt
- **Symbol paa kart**: Roed linje med halvsirkler (peker i bevegelsesretningen)

### Vaerutvikling naar varmfront naermer seg
1. **Tidlig tegn** (600-1000 km foran):
   - Cirrus-skyer (fjaarskyer) i stor hoeyde
   - Fallende lufttrykk

2. **Naermere fronten** (300-600 km):
   - Cirrostratus (tynn sloer)
   - Halo rundt sola/maanen
   - Fortsatt trykkfall

3. **Like foer fronten**:
   - Altostratus/nimbostratus
   - Vedvarende regn eller snoe
   - Vinden oeker, ofte fra soer/soervest

4. **Etter frontpassasje**:
   - Varmere, mer fuktig luft
   - Skydekket kan lette noe
   - Vinden dreier (ofte til soervest/vest)`,
    },
    {
      id: 'geo1-8-4-kaldfront',
      type: 'text',
      content: `## Kaldfront

En kaldfront oppstaar naar kald luft presser mot varm luft og **kiler seg under** den varme luften.

### Kjennetegn
- **Helning**: Bratt (1:50 til 1:100)
- **Bredde**: Nedboersomraadet er smalere (50-100 km)
- **Symbol paa kart**: Blaa linje med trekanter (peker i bevegelsesretningen)

### Vaerutvikling naar kaldfront naermer seg
1. **Foer fronten**:
   - Ofte fint vaer i varmsektoren
   - Fallende trykk

2. **Ved fronten**:
   - Kraftig vertikal skydannelse (cumulonimbus)
   - Intense regnbyger, torden mulig
   - Plutselige vindkast
   - Temperaturfall

3. **Etter frontpassasje**:
   - Rask oppklaring
   - Kaldere, friskere luft
   - Stigende trykk
   - Vinden dreier til vest/nordvest
   - Bygevaer med cumulusskyer`,
    },
    {
      id: 'geo1-8-4-def-okklusjon',
      type: 'definition',
      title: 'Okklusjon',
      content: 'En okklusjon oppstaar naar en kaldfront tar igjen en varmfront i et lavtrykk. Den varme luften loeftes helt opp fra bakken. Okklusjoner markeres med baade halvsirkler og trekanter paa samme side av frontsymbolet.',
    },
    {
      id: 'geo1-8-4-okklusjon',
      type: 'text',
      content: `## Okklusjon

Okklusjon oppstaar i et modent lavtrykk naar kaldfronten (som beveger seg raskere) tar igjen varmfronten.

### Typer okklusjoner
- **Varm okklusjon**: Luften bak kaldfronten er mindre kald enn luften foran varmfronten
- **Kald okklusjon**: Luften bak kaldfronten er kaldere enn luften foran varmfronten

### Kjennetegn
- Kombinerer egenskaper fra baade varm- og kaldfront
- Langvarig, moderat nedbor
- Gradvis temperaturendring
- Lavtrykket begynner aa fylles og svekkes

### Vaer ved okklusjon
- Skydekke med nimbostratus
- Vedvarende regn eller snoe
- Moderat vind
- Langsom vaerendring`,
    },
    {
      id: 'geo1-8-4-polarfront',
      type: 'text',
      content: `## Polarfronten og lavtrykksdannelse

### Polarfronten
Polarfronten er den globale frontsonen der kald polarluft moeter varm tropisk luft. Den ligger typisk mellom 40 og 60 grader nord/soer, men svinger mye.

### Lavtrykksdannelse langs polarfronten
1. **Boelgedannelse**: En liten forstyrrelse skaper en boelge paa fronten
2. **Ung syklogenese**: Boelgen forsterkes, varm- og kaldfront dannes
3. **Modent lavtrykk**: Kraftigst stadium med tydelig varmsektor
4. **Okklusjon**: Kaldfronten tar igjen varmfronten
5. **Opploesning**: Lavtrykket fylles og forsvinner

### Lavtrykksfamilier
Flere lavtrykk dannes ofte etter hverandre langs polarfronten og trekker oestover. Dette gir perioder med ustabilt vaer etterfulgt av kortere opphold.`,
    },
    {
      id: 'geo1-8-4-example',
      type: 'example',
      title: 'Frontpassasje over Bergen',
      problem: 'Et lavtrykk med fronter naermer seg Bergen fra vest. Beskriv vaerutviklingen de naeste 24 timene.',
      solution: `**Vaerutvikling:**

**Timer 0-8: Foer varmfronten**
- Hoeye cirrusskyer fra vest
- Gradvis fallende lufttrykk
- Skydekket tettere og lavere (cirrostratus, altostratus)
- Vind fra soer, tiltagende

**Timer 8-12: Varmfrontpassasje**
- Vedvarende regn begynner
- Nimbostratus-skydekke
- Temperatur stiger gradvis
- Vind fra soervest

**Timer 12-18: Varmsektoren**
- Lettere nedbor eller oppholdsvaer
- Mildt og fuktig
- Lav stratus/taake mulig
- Stabilt trykk

**Timer 18-22: Kaldfrontpassasje**
- Kraftige regnbyger, kanskje torden
- Plutselig temperaturfall
- Vindkast, vinden dreier til vest/nordvest
- Trykket begynner aa stige

**Timer 22-24: Etter kaldfronten**
- Rask oppklaring
- Frisk, kald luft
- Cumulusskyer, byger
- Fortsatt stigende trykk`,
    },
  ],
  exercises: [
    {
      id: 'geo1-8-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken front gir typisk langvarig, moderat nedbor?',
      options: [
        { id: 'a', text: 'Varmfront', isCorrect: true },
        { id: 'b', text: 'Kaldfront', isCorrect: false },
        { id: 'c', text: 'Okklusjon', isCorrect: false },
        { id: 'd', text: 'Ingen av dem', isCorrect: false },
      ],
      solution: 'Varmfronten har slak helning (1:100 til 1:200), saa den varme luften loeftes gradvis over et stort omraade. Dette gir et bredt nedboersomraade med langvarig, moderat nedbor.',
    },
    {
      id: 'geo1-8-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom varmfront og kaldfront naar det gjelder vaertype og varighet.',
      solution: 'Varmfront: Varm luft glir sakte oppover kald luft langs en slak flate. Gir gradvis oekende skydekke, langvarig moderat nedbor over flere timer, og temperaturokning etter passasje. Kaldfront: Kald luft presser seg braat under varm luft. Gir rask vertikal luftbevegelse, intense men kortvarige byger (1-2 timer), mulig torden, og temperaturfall etter passasje. Kaldfront beveger seg raskere enn varmfront.',
    },
    {
      id: 'geo1-8-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en okklusjon?',
      options: [
        { id: 'a', text: 'Naar kaldfronten tar igjen varmfronten', isCorrect: true },
        { id: 'b', text: 'Naar to kaldfronter moetes', isCorrect: false },
        { id: 'c', text: 'Naar et lavtrykk dannes', isCorrect: false },
        { id: 'd', text: 'Naar varmfronten tar igjen kaldfronten', isCorrect: false },
      ],
      solution: 'En okklusjon dannes naar den raskere kaldfronten tar igjen den langsommere varmfronten i et lavtrykk. Varmluftssektoren loeftes helt fra bakken. Dette markerer at lavtrykket er i sin modne fase og snart vil svekkes.',
    },
    {
      id: 'geo1-8-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hvilke skytyper du vil se naar en varmfront naermer seg.',
      solution: 'Naar en varmfront naermer seg, ser man skyene i denne rekkefoelgen (fra foerst til sist): 1) Cirrus (fjaarskyer) - hoeye, tynne, iskrystaller. 2) Cirrostratus - tynn sloer, kan gi halo. 3) Altostratus - mellomhoeye, graa, sola ses som gjennom mattglass. 4) Nimbostratus - tykke, lave, gir vedvarende nedbor. Denne utviklingen kan ta 12-24 timer, og skyene blir gradvis lavere og tettere.',
    },
    {
      id: 'geo1-8-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hele livsloepet til et lavtrykk langs polarfronten, fra dannelse til opploesning.',
      solution: 'Livslop: 1) Boelgedannelse - en forstyrrelse lager en boelge paa polarfronten. 2) Ung syklogenese - boelgen forsterkes, varm luft trekkes nordover og kald luft soerover, varm- og kaldfront dannes. 3) Modent lavtrykk - kraftigst stadium med veldefinert varmsektor mellom frontene, sterk vind, mye nedbor. 4) Begynnende okklusjon - kaldfronten tar igjen varmfronten naer senteret foerst. 5) Full okklusjon - hele varmluftssektoren er loeftet fra bakken, lavtrykket begynner aa fylles. 6) Opploesning - lavtrykket svekkes og forsvinner, men har ofte skapt et nytt lavtrykk lenger soer paa fronten. Hele prosessen tar typisk 3-5 dager.',
    },
  ],
};

// ============================================================================
// Kapittel 8.5: Vaervarsling og vaerkart
// ============================================================================

export const CHAPTER_GEOFAG_1_8_5: TextbookChapter = {
  id: 'geofag-1-8-5',
  courseId: 'geofag-1',
  chapterNumber: '8.5',
  title: 'Vaervarsling og vaerkart',
  description: 'Vaersymboler, karttolkning, observasjoner og numeriske vaermodeller.',
  estimatedMinutes: 20,
  competenceGoals: [
    'tolke vaerkart med symboler for trykk, fronter og nedbor',
    'forklare hvordan vaervarsler lages ved hjelp av observasjoner og modeller',
    'vurdere usikkerhet i vaervarsler og forstaa begrensningene',
  ],
  content: [
    {
      id: 'geo1-8-5-intro',
      type: 'text',
      content: `# Vaervarsling og vaerkart

Moderne vaervarsling kombinerer observasjoner fra hele verden med avanserte datamodeller for aa forutsi vaeret. Aa kunne lese vaerkart er nyttig for aa forstaa vaarvarsler bedre.

## Hva er et vaerkart?

Et vaerkart viser den aktuelle vaersituasjonen eller en prognose. Det bruker standardiserte symboler som meteorologer over hele verden forstaar.`,
    },
    {
      id: 'geo1-8-5-symboler',
      type: 'text',
      content: `## Vaersymboler paa kart

### Trykksystemer
- **H** eller **hoey**: Hoeytrykksenter
- **L** eller **lav**: Lavtrykkssenter
- **Isobarer**: Linjer med likt trykk (vanligvis 4 hPa mellom)

### Fronter
- **Varmfront**: Roed linje med halvsirkler
- **Kaldfront**: Blaa linje med trekanter
- **Okklusjon**: Lilla linje med baade halvsirkler og trekanter
- **Stasjonaer front**: Vekslende roede og blaa symboler paa motsatte sider

### Vindpiler (stasjonssymboler)
- Pilen peker i vindretningen (dit vinden blaser MOT)
- Lange fjaaer = 10 knop (ca. 5 m/s)
- Korte fjaaer = 5 knop (ca. 2.5 m/s)
- Vimpel (trekant) = 50 knop (ca. 25 m/s)

### Skydekke
- Tom sirkel = skyfritt
- 1/4 fylt = lett skyet
- 1/2 fylt = delvis skyet
- 3/4 fylt = skyet
- Helt fylt = overskyet`,
    },
    {
      id: 'geo1-8-5-def-synoptisk',
      type: 'definition',
      title: 'Synoptisk kart',
      content: 'Et synoptisk vaerkart viser vaersituasjonen over et stort omraade paa et bestemt tidspunkt. Det viser lufttrykk (isobarer), fronter, trykksystemer og ofte ogsaa observasjoner fra vaerstasjoner.',
    },
    {
      id: 'geo1-8-5-observasjoner',
      type: 'text',
      content: `## Vaerobservasjoner

Vaervarsling starter med observasjoner fra mange kilder:

### Bakkestasjoner
- Temperatur, trykk, fuktighet
- Vind (retning og styrke)
- Skydekke og skyhoeyde
- Nedbor (mengde og type)
- Sikt

### Radiosonoder
- Ballonger med instrumenter
- Maaler hele atmosfaeresoeyla
- Temperatur, fuktighet, vind i hoeyden
- Slippes 2 ganger daglig over hele verden

### Satellitter
- **Geostasjonaere**: Fast posisjon over ekvator, kontinuerlig overvaakning
- **Polarbane**: Passerer polene, detaljerte bilder
- Infrarode bilder viser skytemperatur
- Synlige bilder viser skydekke

### Vaerradar
- Maaler nedbor i sanntid
- Viser intensitet og bevegelse
- Viktig for korttidsvarsler

### Fly og skip
- Observasjoner fra kommersielle fly
- Skip rapporterer vaer over havet`,
    },
    {
      id: 'geo1-8-5-modeller',
      type: 'text',
      content: `## Numeriske vaermodeller

### Hva er en vaermodell?
En numerisk vaermodell er et dataprogram som beregner hvordan atmosfaeren vil utvikle seg. Den loeser fysikkens ligninger for:
- Bevegelse (vindligningene)
- Energi (temperaturendringer)
- Masse (trykk og tetthet)
- Fuktighet (skyer og nedbor)

### Modelltyper
- **Globale modeller**: Hele jorden, grovere opploesning (10-25 km)
- **Regionale modeller**: Begrenset omraade, finere opploesning (1-5 km)
- **Ensemble**: Mange modellkjoeringer med smaa variasjoner

### Norske modeller
- **MEPS** (MetCoOp Ensemble Prediction System): Nordisk ensemble
- **AROME-Arctic**: Hoey opploesning for nordlige omraader
- Bruker data fra det europeiske ECMWF-senteret

### Begrensninger
- Atmosfaeren er kaotisk (smaa feil vokser)
- Topografi forenkles
- Smaaskala prosesser maa parameteriseres
- Usikkerheten oeker med varselperioden`,
    },
    {
      id: 'geo1-8-5-def-ensemble',
      type: 'definition',
      title: 'Ensemblemodell',
      content: 'En ensemblemodell kjoerer mange (typisk 20-50) parallelle vaervarsler med smaa forskjeller i startbetingelsene. Spredningen mellom medlemmene viser usikkerheten i varselet. Stor spredning = stor usikkerhet.',
    },
    {
      id: 'geo1-8-5-tolkning',
      type: 'text',
      content: `## Tolke vaerkart i praksis

### Trinn for aa lese et vaerkart
1. **Finn trykksystemene**: Hvor ligger H og L?
2. **Se paa isobarene**: Tette = sterk vind, spredte = svak vind
3. **Identifiser frontene**: Hvilke fronter er paa vei?
4. **Vurder bevegelsesretningen**: Lavtrykk og fronter beveger seg ofte oestover i Norge
5. **Tenk tidsforlop**: Hva kommer foerst, hva kommer etterpaa?

### Vaervarselet forklart
Naar du leser et vaervarsel, tenk paa:
- **Temperatur**: Paavirkes av luftmassen og skydekke
- **Nedbor**: Styres av fronter og lokal loefting (fjell)
- **Vind**: Foelger isobarene, sterkest der de er tettest
- **Usikkerhet**: Oeker med tid, spesielt etter 3-5 dager`,
    },
    {
      id: 'geo1-8-5-example',
      type: 'example',
      title: 'Tolke et vaerkart',
      problem: 'Du ser et vaerkart med et lavtrykk sentralt plassert over Nordsjoeen. Isobarene er tette paa soersiden av lavtrykket. En varmfront strekker seg soeroestover fra senteret, og en kaldfront strekker seg soerover. Hva kan du forvente av vaer i Soer-Norge de naeste 12-24 timene?',
      solution: `**Analyse:**

1. **Lavtrykkets posisjon**: Over Nordsjoeen betyr at Norge ligger paa oestsiden av lavtrykket

2. **Tette isobarer i soer**: Indikerer kraftig vind, spesielt i Soer-Norge

3. **Frontenes posisjon**:
   - Varmfronten (soeroest) vil passere foerst
   - Kaldfronten (soer) vil foelge etter

4. **Forventet vaerutvikling**:

**Foerste 0-6 timer:**
- Oekende skydekke fra vest
- Vind fra soer/soervest, tiltagende til liten/stiv kuling
- Temperatur stabil eller svakt stigende

**6-12 timer:**
- Varmfrontpassasje: Vedvarende regn
- Temperaturokning
- Vinden holder seg sterk fra soervest

**12-18 timer:**
- Varmsektoren: Mulig lettere nedbor eller oppholdsvaer
- Fortsatt mildt og fuktig

**18-24 timer:**
- Kaldfrontpassasje: Kraftige regnbyger
- Temperaturfall 5-8 grader
- Vinden dreier til vest/nordvest
- Gradvis oppklaring

**Konklusjon:** Forvent en klassisk lavtrykkspassasje med vindokning, langvarig regn, kort oppholdsvaer, kraftige byger og deretter oppklaring og kjoeligere vaer.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-8-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr tette isobarer paa et vaerkart?',
      options: [
        { id: 'a', text: 'Sterk vind', isCorrect: true },
        { id: 'b', text: 'Mye nedbor', isCorrect: false },
        { id: 'c', text: 'Hoeye temperaturer', isCorrect: false },
        { id: 'd', text: 'Lavt trykk', isCorrect: false },
      ],
      solution: 'Tette isobarer betyr at lufttrykket endrer seg mye over kort avstand (stor trykkgradient). Dette gir sterk vind fordi luften stroemmer raskt fra hoeyt til lavt trykk.',
    },
    {
      id: 'geo1-8-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn fire ulike kilder til vaerobservasjoner og forklar hva hver av dem maaler.',
      solution: '1) Bakkestasjoner: Maaler temperatur, trykk, fuktighet, vind, nedbor og sikt ved jordoverflaten. 2) Radiosonoder: Ballonger som maaler temperatur, fuktighet og vind gjennom hele atmosfaeresoeyla opp til ca. 30 km. 3) Satellitter: Tar bilder av skyer og maaler straaling for aa beregne temperaturer og fuktighet i atmosfaeren. 4) Vaerradar: Maaler nedboersintensitet og -bevegelse i sanntid ved aa sende ut radioboelger som reflekteres av regndraaper.',
    },
    {
      id: 'geo1-8-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva viser en vindpil med to lange fjaaer og en kort fjaaer?',
      options: [
        { id: 'a', text: '25 knop (ca. 12-13 m/s)', isCorrect: true },
        { id: 'b', text: '15 knop (ca. 7-8 m/s)', isCorrect: false },
        { id: 'c', text: '50 knop (ca. 25 m/s)', isCorrect: false },
        { id: 'd', text: '30 knop (ca. 15 m/s)', isCorrect: false },
      ],
      solution: 'Lang fjaaer = 10 knop, kort fjaaer = 5 knop. To lange og en kort: 10 + 10 + 5 = 25 knop, som tilsvarer ca. 12-13 m/s (liten kuling).',
    },
    {
      id: 'geo1-8-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor vaervarsler blir mer usikre jo lenger fram i tid de gjelder.',
      solution: 'Atmosfaeren er et kaotisk system der smaa forskjeller i startbetingelsene kan foere til store forskjeller i utviklingen over tid (sommerfugleffekten). Siden vi aldri kjenner startbetingelsene helt noeyaktig, vil smaa feil i observasjonene og modellberegningene forsterkes over tid. I tillegg maa modellene forenkle mange prosesser, og disse forenklingene akkumulerer feil. Etter ca. 10-14 dager har modellene mistet det meste av sin prediktive evne.',
    },
    {
      id: 'geo1-8-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du skal planlegge en fjelltur om to dager. Forklar hvordan du vil bruke vaervarselet og vaerkart til aa vurdere vaeret, og hvilke usikkerheter du maa ta hensyn til.',
      solution: 'Fremgangsmaate: 1) Sjekk det synoptiske kartet for aa se hovedtrekkene - er det lavtrykk eller hoeytrykk paa vei? 2) Se paa varselet for omraadet - temperatur, nedbor, vind og skydekke. 3) Sjekk ensemblevarselet (yr.no/hyre) for aa se usikkerheten - stor spredning betyr usikkert. 4) Vaer oppmerksom paa lokale forhold: Fjell skaper sine egne vaerforhold med sterkere vind, lavere temperaturer (6 grader kaldere per 1000 m) og mer nedbor paa losiden. 5) To dager er relativt kort tid, saa varselet er rimelig paalitelig, men ta alltid med ekstra klaer og vaer forberedt paa at det kan bli verre enn varslet. 6) Sjekk varselet igjen dagen foer og om morgenen for turen.',
    },
  ],
};

// ============================================================================
// Samle alle kapitler i Del 8
// ============================================================================

export const GEOFAG_1_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_8_1,
  CHAPTER_GEOFAG_1_8_2,
  CHAPTER_GEOFAG_1_8_3,
  CHAPTER_GEOFAG_1_8_4,
  CHAPTER_GEOFAG_1_8_5,
];

export function getGeofag1Del8Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_DEL8_CHAPTERS.find(chapter => chapter.id === chapterId);
}
