/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 2 VG3 - Del 3: Vaer og vaersystemer
 *
 * Dekker LK20-kompetansemaal for geofag 2 (GEO02-01):
 * - forklare hvordan ulike vaersystemer oppstaar og utvikler seg paa global, regional og lokal skala og tolke vaerkart
 * - forklare hvordan numeriske modeller i geofag er bygd opp og brukes innenfor vaervarsel, havmodellering og klimaforskning
 *
 * Fem kapitler om vaer, fronter, trykksystemer, lokale vaerfenomener og numeriske modeller
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Skyer og nedboer
// ============================================================================

export const CHAPTER_GEOFAG_2_3_1: TextbookChapter = {
  id: 'geofag-2-3-1',
  courseId: 'geofag-2',
  chapterNumber: '3.1',
  title: 'Skyer og nedboer',
  description: 'Skydannelse, skytyper, nedboermekanismer og atmosfaerisk stabilitet og instabilitet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hvordan ulike vaersystemer oppstaar og utvikler seg paa global, regional og lokal skala og tolke vaerkart',
  ],
  content: [
    {
      id: 'geo2-3-1-intro',
      type: 'text',
      content: `# Skyer og nedboer

Skyer er synlige samlinger av smaa vanndraaper eller iskrystaller som svever i atmosfaeren. De spiller en avgjorende rolle i vaersystemene og er noedvendige for at nedboer skal oppstaa. For aa forstaa vaeret maa vi forstaa hvordan skyer dannes, hvilke typer som finnes, og hvordan nedboer oppstaar.

## Hvordan dannes skyer?

Skydannelse krever tre grunnleggende forutsetninger:

1. **Fuktig luft** - Luften maa inneholde vanndamp
2. **Avkjoeling** - Luften maa avkjoeles til under duggpunktet
3. **Kondensasjonskjerner** - Smaa partikler som vanndampen kan kondensere paa (f.eks. stoev, salt, pollen)

Den vanligste maaten luft avkjoeles paa, er ved **oppstigning**. Naar luft stiger, synker trykket, og luften utvider seg. Denne utvidelsen kjoeler luften ned (adiabatisk avkjoeling). Naar temperaturen naar duggpunktet, kondenserer vanndampen til smaa draaper, og vi faar en sky.`,
    },
    {
      id: 'geo2-3-1-def-duggpunkt',
      type: 'definition',
      title: 'Duggpunkt',
      content: 'Duggpunktet er den temperaturen luften maa kjoeles ned til for at vanndampen skal begynne aa kondensere. Jo mer vanndamp luften inneholder, desto hoeyere er duggpunktet. Naar lufttemperaturen naar duggpunktet, er luften mettet (100 % relativ fuktighet).',
    },
    {
      id: 'geo2-3-1-adiabatisk',
      type: 'text',
      content: `## Adiabatisk avkjoeling

Naar en luftpakke stiger i atmosfaeren, utvider den seg fordi trykket avtar med hoeyden. Denne utvidelsen finner sted uten tilfoersel eller tap av varme fra omgivelsene - prosessen er **adiabatisk**.

### Toerraadiabatisk lapsrate

Saa lenge luften er umettet (relativ fuktighet under 100 %), avkjoeles den med ca. **1 °C per 100 meter** den stiger. Dette kalles den toerraadiabatiske lapsraten.

### Fuktigadiabatisk lapsrate

Naar luften naar duggpunktet og kondensasjon begynner, frigjores latent varme. Denne varmen bremser avkjoelingen, slik at fuktig, stigende luft avkjoeles med bare ca. **0,5-0,6 °C per 100 meter**. Denne langsommere avkjoelingen kalles den fuktigadiabatiske lapsraten.

Den latente varmen som frigjores ved kondensasjon, er nettopp den energien som gjor fuktige vaersystemer saa kraftige.`,
    },
    {
      id: 'geo2-3-1-def-lapsrate',
      type: 'definition',
      title: 'Adiabatisk lapsrate',
      content: 'Lapsrate (temperaturgradienten) angir hvor raskt temperaturen endrer seg med hoeyden. Den toerraadiabatiske lapsraten er ca. 1 °C/100 m for umettet luft, mens den fuktigadiabatiske lapsraten er ca. 0,5-0,6 °C/100 m for mettet luft. Forskjellen skyldes at kondensasjon frigjor latent varme.',
    },
    {
      id: 'geo2-3-1-example-lapsrate',
      type: 'example',
      title: 'Beregning av skybase',
      problem: 'Lufttemperaturen ved bakken er 20 °C og duggpunktet er 12 °C. Paa hvilken hoeyde vil skyer begynne aa dannes?',
      solution: `**Losning:**

1. Forskjellen mellom temperatur og duggpunkt: 20 °C - 12 °C = 8 °C
2. Luften maa kjoeles 8 °C for aa naa duggpunktet
3. Med toerraadiabatisk lapsrate paa 1 °C per 100 m:
   - Hoeyde = 8 °C / (1 °C / 100 m) = **800 m over bakken**

Skyer vil begynne aa dannes paa ca. 800 meters hoeyde. Over dette nivaet vil avkjoelingen foelge fuktigadiabatisk lapsrate.`,
    },
    {
      id: 'geo2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er den toerraadiabatiske lapsraten?',
        options: [
          { id: 'a', text: 'Ca. 0,5 °C per 100 meter', isCorrect: false },
          { id: 'b', text: 'Ca. 1 °C per 100 meter', isCorrect: true },
          { id: 'c', text: 'Ca. 2 °C per 100 meter', isCorrect: false },
          { id: 'd', text: 'Ca. 0,65 °C per 100 meter', isCorrect: false },
        ],
        solution: 'Den toerraadiabatiske lapsraten er ca. 1 °C per 100 meter. Dette gjelder for umettet luft som stiger. Naar luften blir mettet, gaar den over til fuktigadiabatisk lapsrate (ca. 0,5-0,6 °C per 100 m).',
      },
    },
    {
      id: 'geo2-3-1-stabilitet',
      type: 'text',
      content: `## Atmosfaerisk stabilitet og instabilitet

Atmosfaerens stabilitet avgjoer om luft som begynner aa stige, vil fortsette aa stige eller synke tilbake til utgangspunktet. Dette er avgjorende for vaeret.

### Stabil atmosfaere

Dersom omgivelsestemperaturen avtar langsommere med hoeyden enn den adiabatiske lapsraten, er atmosfaeren **stabil**. En luftpakke som tvinges oppover, vil vaere kaldere (og tyngre) enn omgivelsene og synke tilbake. Stabil luft gir:
- Lagdelte skyer (stratus)
- Lett duskregn eller yr
- Tåke og dis
- Rolige vindforhold

### Ustabil atmosfaere

Dersom omgivelsestemperaturen avtar raskere med hoeyden enn den adiabatiske lapsraten, er atmosfaeren **ustabil**. En luftpakke som begynner aa stige, vil vaere varmere (og lettere) enn omgivelsene og akselerere videre oppover. Ustabil luft gir:
- Vertikalt utviklede skyer (cumulus, cumulonimbus)
- Kraftig nedboer, hagl og tordenvaaer
- Turbulens og kastevind`,
    },
    {
      id: 'geo2-3-1-def-stabilitet',
      type: 'definition',
      title: 'Atmosfaerisk stabilitet',
      content: 'Atmosfaerisk stabilitet beskriver atmosfaerens motstand mot vertikal luftbevegling. I en stabil atmosfaere motarbeides vertikal bevegling, og forstyrret luft vender tilbake til utgangspunktet. I en ustabil atmosfaere forsterkes vertikal bevegling, og luft som begynner aa stige, fortsetter oppover. Stabiliteten bestemmes av forholdet mellom omgivelsestemperaturens gradient og den adiabatiske lapsraten.',
    },
    {
      id: 'geo2-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken type vaaer er typisk for en ustabil atmosfaere?',
        options: [
          { id: 'a', text: 'Taake og dis', isCorrect: false },
          { id: 'b', text: 'Lett yr over store omraader', isCorrect: false },
          { id: 'c', text: 'Kraftige byger og tordenvaaer', isCorrect: true },
          { id: 'd', text: 'Skyfritt og rolig vaaer', isCorrect: false },
        ],
        solution: 'En ustabil atmosfaere gir kraftig vertikal luftbevegling, som forer til hoeytvoksende cumulonimbus-skyer. Disse skyene gir kraftige byger, hagl og tordenvaaer. Stabil luft gir derimot lagdelte skyer med lett, jevn nedboer.',
      },
    },
    {
      id: 'geo2-3-1-skytyper',
      type: 'text',
      content: `## Skytyper

Skyer klassifiseres etter form og hoeyde. Det internasjonale klassifikasjonssystemet deler skyer inn i ti hovedtyper fordelt paa tre hoeydenivaaer.

### Hoeyere skyer (over 6000 m)
- **Cirrus (Ci)**: Tynne, traadaktige skyer av iskrystaller. Varsler ofte vaerforandring.
- **Cirrostratus (Cs)**: Tynt, gjennomskinnelig slor som kan gi halo rundt sol/maane.
- **Cirrocumulus (Cc)**: Smaa, hvite klumper i regelsamessig monster ("makrelhimmel").

### Mellomhoeyere skyer (2000-6000 m)
- **Altostratus (As)**: Graaaktig, jevnt skylag som dekker himmelen. Solen ses som gjennom mattglass.
- **Altocumulus (Ac)**: Hvite eller graae klumper i rader eller felt.

### Lavere skyer (under 2000 m)
- **Stratus (St)**: Jevnt, graat skylag naer bakken. Gir yr eller lett regn.
- **Stratocumulus (Sc)**: Klumper eller ruller av skyer i et sammenhengende lag.
- **Nimbostratus (Ns)**: Tykt, moerkt skylag som gir vedvarende, jevn nedboer.

### Vertikalt utviklede skyer
- **Cumulus (Cu)**: "Blomkaalskyer" med flat bunn og avrundet topp. Dannes i ustabil luft.
- **Cumulonimbus (Cb)**: Mektig tordenvaaersky som strekker seg fra lavt til hoeyere nivaa. Gir kraftig nedboer, lyn, hagl og turbulens.`,
    },
    {
      id: 'geo2-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom stratusskyer og cumulusskyer. Knytt forklaringen til atmosfaerisk stabilitet.',
        hints: ['Tenk paa om luften stiger jevnt over store omraader eller kraftig i smaa omraader.'],
        solution: 'Stratusskyer er lagdelte, horisontalt utbredte skyer som dannes i stabil luft. Luften loftes jevnt over store omraader (f.eks. langs en varm front), og den stabile atmosfaeren hindrer kraftig vertikalbevegling. Cumulusskyer er vertikalt utviklede "blomkaalskyer" som dannes i ustabil luft. Naar oppvarmet luft stiger lokalt, fortsetter den oppover i den ustabile atmosfaeren og bygger hoeyden. Stratus gir jevn, lett nedboer, mens cumulus kan utvikle seg til cumulonimbus med kraftige byger og tordenvaaer.',
      },
    },
    {
      id: 'geo2-3-1-nedboer',
      type: 'text',
      content: `## Nedboermekanismer

Skydraaper er svart smaa (ca. 0,01 mm i diameter) og faller saa sakte at de holdes oppe av luftstromninger. For at nedboer skal oppstaa, maa draapene vokse seg store nok til aa falle gjennom luften.

### Bergeron-Findeisen-prosessen

Denne prosessen er den viktigste nedboermekanismen i tempererte og polare omraader. Den bygger paa at metningsvaertrykket over is er lavere enn over vann ved samme temperatur:

1. I en sky med baade underkjoelte vanndraaper og iskrystaller (mellom -10 °C og -30 °C) vil vanndamp fordampe fra draapene
2. Vanndampen avsettes paa iskrystallene, som vokser raskt
3. Naar iskrystallene er store nok, faller de som sno
4. Dersom temperaturen naer bakken er over 0 °C, smelter snoen til regn

### Kollisjon-koalesens-prosessen

I varme tropiske skyer uten iskrystaller vokser draapene ved aa kollidere med hverandre. Store draaper faller raskere og samler opp mindre draaper paa veien ned. Denne prosessen er viktigst i tropiske omraader.

### Nedboertyper

- **Regn**: Vanndraaper stoerre enn 0,5 mm
- **Yr**: Svart smaa draaper (under 0,5 mm) som faller jevnt
- **Sno**: Iskrystaller som naar bakken uten aa smelte
- **Sludd**: Delvis smeltet sno
- **Hagl**: Iskorn som dannes i kraftige tordenvaaerskyer med sterke oppdrifter`,
    },
    {
      id: 'geo2-3-1-def-bergeron',
      type: 'definition',
      title: 'Bergeron-Findeisen-prosessen',
      content: 'Bergeron-Findeisen-prosessen er den viktigste nedboermekanismen i tempererte breddegrader. Den utnytter at metningsvaertrykket over is er lavere enn over vann. I skyer med baade underkjoelte vanndraaper og iskrystaller, vokser iskrystallene paa bekostning av vanndraapene. Prosessen ble beskrevet av den svenske meteorologen Tor Bergeron i 1935.',
    },
    {
      id: 'geo2-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er den viktigste nedboermekanismen i tempererte breddegrader som Norge?',
        options: [
          { id: 'a', text: 'Kollisjon-koalesens-prosessen', isCorrect: false },
          { id: 'b', text: 'Bergeron-Findeisen-prosessen', isCorrect: true },
          { id: 'c', text: 'Konvektiv oppstigning alene', isCorrect: false },
          { id: 'd', text: 'Fordamping fra havoverflaten', isCorrect: false },
        ],
        solution: 'Bergeron-Findeisen-prosessen er den viktigste nedboermekanismen i tempererte og polare omraader, inkludert Norge. Den krever skyer med baade iskrystaller og underkjoelte vanndraaper, noe som er vanlig i vaare breddegrader.',
      },
    },
    {
      id: 'geo2-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar trinn for trinn hvordan Bergeron-Findeisen-prosessen foerer til nedboer.',
        solution: 'Bergeron-Findeisen-prosessen foregaar i skyer der temperaturen er mellom -10 °C og -30 °C, slik at baade underkjoelte vanndraaper og iskrystaller eksisterer samtidig. 1) Metningsvaertrykket over is er lavere enn over vann ved samme temperatur. 2) Luften naer iskrystallene er dermed overmettet i forhold til is, mens den er undermettet i forhold til vann. 3) Vanndamp fordamper fra vanndraapene og avsettes paa iskrystallene. 4) Iskrystallene vokser raskt paa bekostning av draapene. 5) Naar iskrystallene er tunge nok, faller de som sno. 6) Dersom de passerer gjennom varm luft naer bakken (over 0 °C), smelter de til regn.',
      },
    },
    {
      id: 'geo2-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Skyer dannes naar fuktig luft avkjoeles til under **duggpunktet**, vanligvis ved oppstigning
- **Toerraadiabatisk lapsrate** er ca. 1 °C/100 m; **fuktigadiabatisk lapsrate** er ca. 0,5-0,6 °C/100 m
- **Stabil atmosfaere** gir lagdelte skyer (stratus) og jevn nedboer; **ustabil atmosfaere** gir vertikale skyer (cumulus) og bygevaaer
- Skyer deles inn etter hoeyde og form: cirrus, stratus, cumulus og nimbus er grunnformene
- **Bergeron-Findeisen-prosessen** er den viktigste nedboermekanismen i Norge
- Nedboertyper inkluderer regn, yr, sno, sludd og hagl`,
    },
    // --- Samleoppgaver ---
    {
      id: 'geo2-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken skytype er typisk for tordenvaaer?',
        options: [
          { id: 'a', text: 'Cirrostratus', isCorrect: false },
          { id: 'b', text: 'Stratus', isCorrect: false },
          { id: 'c', text: 'Cumulonimbus', isCorrect: true },
          { id: 'd', text: 'Altostratus', isCorrect: false },
        ],
        solution: 'Cumulonimbus (Cb) er tordenvaaerskyen. Den strekker seg fra lavt nivaa til over 10 000 meters hoeyde og inneholder kraftige oppdrifter og nedbrifter. Cumulonimbus gir tordenvaaer, kraftig nedboer, hagl og kraftige vindkast.',
      },
    },
    {
      id: 'geo2-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Lufttemperaturen ved bakken er 25 °C og duggpunktet er 13 °C. a) Beregn hoeyden for skybasen. b) Hva er temperaturen i luftpakken paa denne hoeyden? c) Hvis omgivelsestemperaturen paa 1500 meters hoeyde er 10 °C, er atmosfaeren stabil eller ustabil over skybasen?',
        solution: 'a) Temperaturforskjell: 25 - 13 = 12 °C. Med toerraadiabatisk lapsrate: 12/1 x 100 = 1200 m. Skybasen er paa ca. 1200 m. b) Temperaturen i luftpakken paa 1200 m: 25 - 12 = 13 °C (lik duggpunktet). c) Over skybasen kjoeles luftpakken fuktigadiabatisk med ca. 0,5 °C/100 m. Paa 1500 m (300 m over skybasen): 13 - 1,5 = 11,5 °C. Omgivelsestemperaturen er 10 °C, som er lavere enn luftpakkens 11,5 °C. Luftpakken er varmere enn omgivelsene, saa den vil fortsette aa stige. Atmosfaeren er ustabil over skybasen.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Luftmasser og fronter
// ============================================================================

export const CHAPTER_GEOFAG_2_3_2: TextbookChapter = {
  id: 'geofag-2-3-2',
  courseId: 'geofag-2',
  chapterNumber: '3.2',
  title: 'Luftmasser og fronter',
  description: 'Luftmassetyper, varme og kalde fronter, okkluderte fronter og frontvaaer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hvordan ulike vaersystemer oppstaar og utvikler seg paa global, regional og lokal skala og tolke vaerkart',
  ],
  content: [
    {
      id: 'geo2-3-2-intro',
      type: 'text',
      content: `# Luftmasser og fronter

En luftmasse er et stort volum av luft med relativt ensartet temperatur og fuktighet. Naar to ulike luftmasser moetes, dannes en **front** - en overgangssoene der vaaeret ofte er aktivt med skyer, nedboer og vind.

## Luftmassetyper

Luftmasser faar sine egenskaper fra omraadet de dannes over. Vi klassifiserer dem etter:

### Kildeinndeling etter breddegrad
- **Arktisk luft (A)**: Dannes over Arktis, ekstremt kald og toerr
- **Polar luft (P)**: Dannes over hoeyere breddegrader (50-70°N/S), kald
- **Tropisk luft (T)**: Dannes over subtropiske/tropiske omraader, varm
- **Ekvatorial luft (E)**: Dannes naer ekvator, varm og svart fuktig

### Kildeinndeling etter underlag
- **Maritim (m)**: Dannet over hav, fuktig
- **Kontinental (c)**: Dannet over land, toerr

De vanligste kombinasjonene som paavirker Norges vaaer er **mP** (maritim polar - kjoelig og fuktig fra Atlanterhavet) og **cP** (kontinental polar - kald og toerr fra Russland/Skandinavia).`,
    },
    {
      id: 'geo2-3-2-def-luftmasse',
      type: 'definition',
      title: 'Luftmasse',
      content: 'En luftmasse er et stort volum av luft (ofte hundrevis av kilometer i utstrekning) med relativt ensartet temperatur og fuktighet gjennom hele volumet. Luftmassen faar sine egenskaper fra kildeomraadet der den dannes, for eksempel over et varmt hav (maritim tropisk) eller en kald landmasse (kontinental polar).',
    },
    {
      id: 'geo2-3-2-example-luftmasser',
      type: 'example',
      title: 'Luftmasser som paavirker Norge',
      problem: 'Hvilke luftmasser paavirker typisk vaaret i Norge om vinteren, og hva slags vaaer gir de?',
      solution: `**Viktige luftmasser for Norge om vinteren:**

1. **Maritim polar (mP) fra vest/soervest:**
   - Relativt mild og fuktig luft fra Nord-Atlanteren
   - Gir mildt vaaer med mye nedboer, spesielt paa Vestlandet
   - Temperaturer ofte rundt 0-5 °C paa kysten

2. **Kontinental polar (cP) fra oest/nordoest:**
   - Kald og toerr luft fra Russland eller Skandinavia
   - Gir kaldt, klart vaaer med lite nedboer
   - Kan gi svart lave temperaturer (under -20 °C i innlandet)

3. **Arktisk (A) fra nord:**
   - Svart kald luft fra Arktis
   - Gir kraftige snoebyger naar den stroemmer over det relativt varme havet (polart lavtrykk)
   - Spesielt kraftig langs kysten av Nord-Norge

4. **Maritim tropisk (mT) fra soer/soervest:**
   - Uvanlig mild luft fra soerlige Atlanterhavet
   - Gir uvanlig milde vinterperioder med temperaturer godt over normalen`,
    },
    {
      id: 'geo2-3-1-ex-mc-luft',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en maritim polar (mP) luftmasse?',
        options: [
          { id: 'a', text: 'Varm og toerr', isCorrect: false },
          { id: 'b', text: 'Kald og toerr', isCorrect: false },
          { id: 'c', text: 'Kjoelig og fuktig', isCorrect: true },
          { id: 'd', text: 'Varm og fuktig', isCorrect: false },
        ],
        solution: 'En maritim polar (mP) luftmasse er kjoelig og fuktig. "Maritim" betyr dannet over hav (fuktig), og "polar" betyr fra hoeyere breddegrader (kjoelig). Denne luftmassetypen er den som oftest paavirker vaaret i Norge, spesielt paa Vestlandet.',
      },
    },
    {
      id: 'geo2-3-2-fronter',
      type: 'text',
      content: `## Fronter

En front er grenseflaten mellom to ulike luftmasser. Langs fronter oppstaar det ofte kraftig vaaer fordi luftmassene har ulik temperatur og fuktighet.

### Varmfront

En **varmfront** oppstaar naar varm luft beveges mot kaldere luft. Den varme luften er lettere og glir opp over den kalde luften i en slak helning (typisk 1:200).

**Kjennetegn paa varmfront:**
- Skyene kommer i rekkefoelje naer fronten naermer seg: foerst cirrus, saa cirrostratus, altostratus og til slutt nimbostratus
- Gradvis synkende skydekke over 12-24 timer
- Jevn, vedvarende nedboer som tiltar gradvis
- Temperaturen stiger etter at fronten har passert
- Vinden dreier vanligvis fra soer til soervest

### Kaldfront

En **kaldfront** oppstaar naar kald luft trenger inn under varmere luft. Den kalde luften er tyngre og presser den varme luften bratt oppover.

**Kjennetegn paa kaldfront:**
- Brattere helning enn varmfronten (typisk 1:50-1:100)
- Kraftig, men kortvarig nedboer (byger)
- Ofte tordenvaaer om sommeren
- Rask vaaeromslag - temperaturen faller braat etter fronten
- Vinden dreier ofte fra soervest til nordvest
- Etter fronten: oppklaring med cumulus-skyer

### Okkludert front

Naar en kaldfront innhenter en varmfront (fordi kaldfronten beveger seg raskere), dannes en **okklusjon** (okkludert front). Den varme luften loftes helt opp fra bakken.

**Typer okklusjoner:**
- **Varm okklusjon**: Luften bak kaldfronten er mildere enn foran varmfronten
- **Kald okklusjon**: Luften bak kaldfronten er kaldere enn foran varmfronten

Okklusjoner gir ofte vedvarende nedboer og kan vaere vanskelige aa tolke paa vaerkart.`,
    },
    {
      id: 'geo2-3-2-def-front',
      type: 'definition',
      title: 'Vaerfront',
      content: 'En vaerfront er grenseflaten mellom to luftmasser med ulik temperatur og fuktighet. Fronter er vanligvis 50-200 km brede overgangssoener der vaaret er aktivt med skyer, nedboer og vindendringer. Hovedtypene er varmfront (varm luft erstatter kald), kaldfront (kald luft erstatter varm) og okkludert front (kaldfront innhenter varmfront).',
    },
    {
      id: 'geo2-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva skjer langs en kaldfront?',
        options: [
          { id: 'a', text: 'Varm luft glir sakte opp over kald luft', isCorrect: false },
          { id: 'b', text: 'Kald luft trenger inn under varm luft og presser den bratt opp', isCorrect: true },
          { id: 'c', text: 'To like varme luftmasser blandes jevnt', isCorrect: false },
          { id: 'd', text: 'Varm luft synker ned under kald luft', isCorrect: false },
        ],
        solution: 'Langs en kaldfront trenger kald, tung luft inn under varmere, lettere luft. Den bratte fronten (helning ca. 1:50-1:100) presser den varme luften raskt oppover, noe som gir kraftig, men kortvarig nedboer og eventuelt tordenvaaer.',
      },
    },
    {
      id: 'geo2-3-2-frontvaaer',
      type: 'text',
      content: `## Frontvaaer i praksis

Naar et frontalt lavtrykk passerer over Norge, opplever vi en karakteristisk vaaersekvens.

### Foer varmfronten
- Hoeye, tynne cirrus-skyer viser seg i vest
- Skyene blir gradvis tykkere og lavere
- Barometeret faller jevnt
- Vinden tiltar fra soer eller soeroest

### Under varmfronten
- Tett skydekke (nimbostratus)
- Vedvarende, jevn nedboer (regn eller sno)
- Daarlig sikt
- Temperaturen stiger gradvis

### I varmsektoren (mellom varmfront og kaldfront)
- Ofte overtrukket med stratocumulus
- Mildt, fuktig vaaer
- Lett yr eller oppholdsvaaer
- Soervestlig vind

### Under kaldfronten
- Kraftige byger, eventuelt tordenvaaer
- Temperaturfallet er braat
- Vinden dreier til nordvest
- Barometeret stiger raskt

### Etter kaldfronten
- Oppklaring med cumulus-skyer
- God sikt
- Kjoeligere temperaturer
- Nordvestlig eller nordlig vind`,
    },
    {
      id: 'geo2-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Du staar ute og observerer foelgende: Skydekket har gaatt fra hoeye cirrus-skyer til lavere altostratus, og naa begynner det aa regne jevnt. Temperaturen er stabil. Hvilken type front naermer seg, og hva kan du forvente de neste timene?',
        hints: ['Tenk paa den typiske skysekvensen langs en varmfront.'],
        solution: 'Observasjonene tyder paa at en varmfront naermer seg. Skysekvensen fra cirrus via altostratus til jevn nedboer er typisk for en varmfront, der varm luft glir opp over kaldere luft i slak helning. De neste timene kan du forvente: 1) Fortsatt jevn nedboer fra nimbostratus-skyer. 2) Gradvis stigende temperatur. 3) Daarlig sikt. 4) Naar varmfronten passerer, gaar man inn i varmsektoren med mildere luft, mulig yr eller oppholdsvaaer. 5) Etter en tid vil kaldfronten komme med kraftigere, men kortvarig nedboer og temperaturfallet.',
      },
    },
    {
      id: 'geo2-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er en okkludert front?',
        options: [
          { id: 'a', text: 'En front som har loest seg opp og forsvunnet', isCorrect: false },
          { id: 'b', text: 'En front mellom to like varme luftmasser', isCorrect: false },
          { id: 'c', text: 'Resultatet naar kaldfronten innhenter varmfronten og lofter varmluften fra bakken', isCorrect: true },
          { id: 'd', text: 'En front som kun dannes over hav', isCorrect: false },
        ],
        solution: 'En okkludert front dannes naar den raskere kaldfronten innhenter den langsommere varmfronten. Den varme luften mellom frontene loftes helt opp fra bakken. Okklusjoner er vanlige i modne lavtrykk og gir ofte vedvarende nedboer.',
      },
    },
    {
      id: 'geo2-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Luftmasser** klassifiseres etter kildeomraade: arktisk, polar, tropisk og ekvatorial, samt maritim eller kontinental
- **Varmfronter** gir gradvis oekende skydekke og jevn, vedvarende nedboer
- **Kaldfronter** gir braat vaaerforandring med kraftige, kortvarige byger
- **Okkluderte fronter** oppstaar naar kaldfronten innhenter varmfronten
- Norges vaaer domineres av vekslingen mellom maritim polar (mP) og kontinental polar (cP) luftmasser
- Frontpassasjer gir karakteristiske vaaersekvenser som kan observeres og forutsies`,
    },
    // --- Samleoppgaver ---
    {
      id: 'geo2-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign varmfront og kaldfront med hensyn til: a) helning paa frontflaten, b) skytyper, c) nedboerens karakter, d) temperaturendring etter passasje.',
        solution: 'a) Helning: Varmfronten har slak helning (ca. 1:200), mens kaldfronten har brattere helning (ca. 1:50-1:100). b) Skytyper: Varmfronten gir lagdelte skyer (cirrus, altostratus, nimbostratus), kaldfronten gir vertikalt utviklede skyer (cumulus, cumulonimbus). c) Nedboer: Varmfronten gir jevn, vedvarende nedboer over et bredt omraade, kaldfronten gir kraftige, men kortvarige byger langs en smalere soene. d) Temperatur: Etter varmfrontpassasje stiger temperaturen (varm luft erstatter kald), etter kaldfrontpassasje faller temperaturen (kald luft erstatter varm).',
      },
    },
    {
      id: 'geo2-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken luftmasse gir typisk milde, fuktige vintre paa Vestlandet?',
        options: [
          { id: 'a', text: 'Kontinental polar (cP)', isCorrect: false },
          { id: 'b', text: 'Maritim tropisk (mT)', isCorrect: false },
          { id: 'c', text: 'Maritim polar (mP)', isCorrect: true },
          { id: 'd', text: 'Arktisk (A)', isCorrect: false },
        ],
        solution: 'Maritim polar (mP) luftmasse fra Nord-Atlanteren er den vanligste luftmassen som paavirker Vestlandet. Den er kjoelig, men relativt mild for breddegraden takket vaere den nordatlantiske strom (Golfstromsystemet), og den er svart fuktig. Denne luftmassen gir de milde, nedboerike vintrene Vestlandet er kjent for.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Lavtrykk og hoeytrykk
// ============================================================================

export const CHAPTER_GEOFAG_2_3_3: TextbookChapter = {
  id: 'geofag-2-3-3',
  courseId: 'geofag-2',
  chapterNumber: '3.3',
  title: 'Lavtrykk og hoeytrykk',
  description: 'Syklonutvikling, antisykloner, polarfrontteorien og tolking av vaerkart.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hvordan ulike vaersystemer oppstaar og utvikler seg paa global, regional og lokal skala og tolke vaerkart',
  ],
  content: [
    {
      id: 'geo2-3-3-intro',
      type: 'text',
      content: `# Lavtrykk og hoeytrykk

Lavtrykk og hoeytrykk er de store vaersystemene som styrer vaaret i tempererte breddegrader. Forstaae av hvordan disse systemene oppstaar, utvikler seg og beveges, er noekkelen til aa tolke vaerkart og forstaa vaervarsler.

## Trykksystemer og isobarer

Lufttrykket varierer fra sted til sted og over tid. Paa et vaerkart forbindes steder med likt trykk med linjer kalt **isobarer**. Tettstilte isobarer betyr stor trykkforskjell over kort avstand, som gir sterk vind.

### Lavtrykk (syklon)
- Senter med lavere trykk enn omgivelsene
- Luften stroemmer inn mot senteret naer bakken
- Corioliseffekten faar luften til aa rotere mot klokken paa den nordlige halvkule
- Oppstigning i senteret gir skyer og nedboer
- Merkes med **L** paa vaerkart

### Hoeytrykk (antisyklon)
- Senter med hoeyere trykk enn omgivelsene
- Luften stroemmer ut fra senteret naer bakken
- Corioliseffekten gir rotasjon med klokken paa den nordlige halvkule
- Synkende luft i senteret gir oppklaring og toert vaaer
- Merkes med **H** paa vaerkart`,
    },
    {
      id: 'geo2-3-3-def-lavtrykk',
      type: 'definition',
      title: 'Lavtrykk (syklon)',
      content: 'Et lavtrykk (syklon) er et omraade med lavere lufttrykk enn omgivelsene. Luft stroemmer inn mot senteret naer bakken, stiger opp, og stroemmer ut i hoeyden. Oppstigning forer til avkjoeling, skydannelse og nedboer. Paa den nordlige halvkule roterer vinden mot klokken rundt lavtrykket. Lavtrykk er hoveddrivkraften bak vaervekslingene i tempererte breddegrader.',
    },
    {
      id: 'geo2-3-3-polarfrontteori',
      type: 'text',
      content: `## Polarfrontteorien

Den norske meteorologen Vilhelm Bjerknes og hans medarbeidere (Jacob Bjerknes, Halvor Solberg og Tor Bergeron) utviklet paa 1920-tallet den saakalte **Bergenskolen-modellen** for lavtrykksdannelse. Denne modellen er fortsatt grunnleggende i moderne meteorologi.

### Polarfronten

Polarfronten er den globale frontsonen der kald polarluft moeter varm tropisk luft. Denne fronten gaar som et baand rundt jorden i vaare breddegrader (ca. 50-60°N) og er i stadig bevegling.

### Livssyklusen til et lavtrykk

**Fase 1 - Boelgestadiet:**
En liten forstyrrring (boelge) oppstaar langs polarfronten. Varm luft begynner aa stroeme nordover paa oestsiden, mens kald luft trenger soerover paa vestsiden.

**Fase 2 - Ungt lavtrykk:**
Trykket synker i senteret. Varmfronten og kaldfronten blir tydeligere. Nedboer og vind oeker. Varmsektor mellom frontene.

**Fase 3 - Modent lavtrykk:**
Lavtrykket er paa sitt kraftigste. Kaldfronten beveger seg raskere enn varmfronten og begynner aa innhente den. Kraftig vind og nedboer.

**Fase 4 - Okklusjon:**
Kaldfronten har innhentet varmfronten, og varmluften er loftet helt opp fra bakken. Lavtrykket svekkes gradvis.

**Fase 5 - Opplosning:**
Lavtrykket fyller seg opp og forsvinner. Hele prosessen tar typisk 3-5 dager.`,
    },
    {
      id: 'geo2-3-3-example-livssyklus',
      type: 'example',
      title: 'Lavtrykkets livsloep paa vaerkart',
      problem: 'Beskriv hva du typisk ser paa vaerkartet for et modent lavtrykk over Norskehavet.',
      solution: `**Et modent lavtrykk paa vaerkartet:**

1. **Senteret**: Merket med L og lavt trykk (f.eks. 975 hPa). Ligger gjerne over Norskehavet eller ved norskekysten.

2. **Isobarer**: Tette, konsentriske ringer rundt senteret. Jo tettere, desto sterkere vind.

3. **Varmfronten**: Markert med halvsirkler paa linjen. Strekker seg oestover/soeroestover fra senteret. Foran fronten: jevn nedboer.

4. **Kaldfronten**: Markert med trekanter paa linjen. Strekker seg soerover/soervestover fra senteret. Langs fronten: kraftige byger.

5. **Varmsektoren**: Omraadet mellom varmfront og kaldfront. Soervestlig vind, mildt og fuktig.

6. **Okklusjon**: Eventuelt markert med baade halvsirkler og trekanter, naaer ut fra senteret der frontene moetes.

7. **Vindretning**: Mot klokken rundt lavtrykket. Soerlig foer varmfronten, soervestlig i varmsektoren, nordvestlig etter kaldfronten.`,
    },
    {
      id: 'geo2-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvordan roterer vinden rundt et lavtrykk paa den nordlige halvkule?',
        options: [
          { id: 'a', text: 'Med klokken', isCorrect: false },
          { id: 'b', text: 'Mot klokken', isCorrect: true },
          { id: 'c', text: 'Rett inn mot senteret', isCorrect: false },
          { id: 'd', text: 'Det varierer fra lavtrykk til lavtrykk', isCorrect: false },
        ],
        solution: 'Paa den nordlige halvkule roterer vinden mot klokken rundt et lavtrykk. Dette skyldes Corioliseffekten, som avboyer luftstroemmene til hoyre for bevegelesretningen paa den nordlige halvkule. Kombinert med trykkgradienten gir dette rotasjon mot klokken.',
      },
    },
    {
      id: 'geo2-3-3-hoeytrykk',
      type: 'text',
      content: `## Hoeytrykk (antisykloner)

Hoeytrykk er omraader med hoeyere trykk enn omgivelsene. De gir typisk rolig, toert vaaer og er motstykket til de dynamiske lavtrykkene.

### Kjennetegn
- Synkende luft i senteret forer til oppvarming og opptoerking
- Skyfritt eller spredte skyer
- Svake vinder (isobarene er vidt spredt)
- Kan vaere svart stabile og blokkere lavtrykk

### Typer hoeytrykk

**Varmt hoeytrykk (subtropisk):**
- Stabile, varme hoeytrykk over subtropene (Asorene, Bermuda)
- Synkende luft i Hadley-cellens nedstigende gren
- Om sommeren kan Asorenhoeytrykket strekke seg nordover og gi varmt, toert vaaer i Skandinavia

**Kaldt hoeytrykk:**
- Dannes over kalde landflater om vinteren (Sibir)
- Svart kald, tung luft naer bakken
- Kan gi ekstremt lave temperaturer

**Blokkerende hoeytrykk:**
- Store, stasjonaere hoeytrykk som blokkerer den vestlige luftstroommen
- Kan gi langvarige vaaerperioder: heteboelger om sommeren, kuldeperioder om vinteren
- Avleder lavtrykk nordover eller soerover`,
    },
    {
      id: 'geo2-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er typisk vaaer i et hoeytrykksomraade?',
        options: [
          { id: 'a', text: 'Kraftig nedboer og sterk vind', isCorrect: false },
          { id: 'b', text: 'Skyfritt eller lite skyer, svak vind, toert vaaer', isCorrect: true },
          { id: 'c', text: 'Tett taake og yr', isCorrect: false },
          { id: 'd', text: 'Tordenvaaer og hagl', isCorrect: false },
        ],
        solution: 'I et hoeytrykk synker luften, noe som varmer den opp og gir opptoerking. Dette forer til skyfritt eller spredte skyer, toert vaaer og typisk svake vinder. Isobarene er vidt spredt rundt hoeytrykk, noe som betyr liten trykkgradient og dermed svak vind.',
      },
    },
    {
      id: 'geo2-3-3-vaerkart',
      type: 'text',
      content: `## Tolking av vaerkart

Et vaerkart (synoptisk kart) er et oeyeblikksbilde av vaarsituasjonen som viser trykksystemer, fronter og vaerstasjonenes observasjoner.

### Symboler paa vaerkart

**Isobarer:**
- Linjer med likt trykk (vanligvis med 4 hPa mellomrom)
- Tettstilte isobarer = sterk vind
- Vidt spredte isobarer = svak vind

**Frontsymboler:**
- Varmfront: roed linje med halvsirkler som peker i bevegelesretningen
- Kaldfront: blaa linje med trekanter som peker i bevegelesretningen
- Okkludert front: lilla linje med baade halvsirkler og trekanter
- Stasjonaer front: vekslende roede halvsirkler og blaa trekanter paa motsatte sider

**Stasjonssymboler:**
Vaerstasjoner rapporterer temperatur, vindretning og -styrke, skydekke, trykk og nedboer med standardiserte symboler.

### Tips for aa tolke vaerkart
1. Finn lavtrykkene - de styrer vaaret
2. Se paa isobaravstand for vindstyrke
3. Foelg frontene for aa se hvor nedboeren er
4. Sjekk bevegelesretningen (lavtrykk beveger seg vanligvis oestover/nordoestover)
5. Varmsektoren gir mildest temperatur`,
    },
    {
      id: 'geo2-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar polarfrontteorien og beskriv livssyklusen til et lavtrykk fra boelgestadiet til opplosning.',
        hints: ['Tenk paa de fem fasene: boelge, ungt lavtrykk, modent lavtrykk, okklusjon, opplosning.'],
        solution: 'Polarfrontteorien, utviklet av Bergenskolen paa 1920-tallet, forklarer hvordan lavtrykk dannes langs polarfronten. 1) Boelgestadiet: En liten forstyrrelse langs polarfronten faar varm luft til aa stroeme nordover og kald luft soerover. 2) Ungt lavtrykk: Trykket synker i senteret, varmfront og kaldfront dannes. 3) Modent lavtrykk: Systemet er paa sitt sterkeste med kraftig vind og nedboer. Kaldfronten beveger seg raskere enn varmfronten. 4) Okklusjon: Kaldfronten innhenter varmfronten, og varmluften loftes helt fra bakken. Lavtrykket begynner aa svekkes. 5) Opplosning: Lavtrykket fyller seg opp og forsvinner. Hele syklusen tar ca. 3-5 dager.',
      },
    },
    {
      id: 'geo2-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er et blokkerende hoeytrykk?',
        options: [
          { id: 'a', text: 'Et hoeytrykk som forhindrer dannesel av lavtrykk', isCorrect: false },
          { id: 'b', text: 'Et stort, stasjonaert hoeytrykk som avleder lavtrykk og gir langvarig ensartet vaaer', isCorrect: true },
          { id: 'c', text: 'Et hoeytrykk som kun dannes om vinteren', isCorrect: false },
          { id: 'd', text: 'Et hoeytrykk med svart hoet trykk i senteret', isCorrect: false },
        ],
        solution: 'Et blokkerende hoeytrykk er et stort, stasjonaert hoeytrykksystem som blokkerer den vestlige luftstroommen og avleder lavtrykk nordover eller soerover. Det kan gi langvarige vaaerperioder - heteboelger om sommeren eller kuldeperioder om vinteren - fordi det hindrer den normale vaaervekslingen.',
      },
    },
    {
      id: 'geo2-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Lavtrykk** har stigende luft, skyer, nedboer og vind mot klokken paa nordlige halvkule
- **Hoeytrykk** har synkende luft, klart vaaer og vind med klokken paa nordlige halvkule
- **Polarfrontteorien** (Bergenskolen) forklarer lavtrykksdannelse langs polarfronten
- Lavtrykkets livssyklus: boelge → ungt → modent → okkludert → opplosning (3-5 dager)
- **Blokkerende hoeytrykk** kan gi langvarige vaerperioder
- **Vaerkart** tolkes ved aa se paa isobarer (vind), fronter (nedboer) og trykksenterenes plassering`,
    },
    // --- Samleoppgaver ---
    {
      id: 'geo2-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Et lavtrykk med senter vest for Irland beveger seg nordoestover mot Norskehavet. Forklar hvilken vaaersekvens et sted paa Vestlandet typisk vil oppleve naar lavtrykket passerer.',
        solution: 'Naar lavtrykket naermer seg fra soervest, vil Vestlandet foerst faa soerlig vind og hoeye cirrus-skyer (foerste tegn paa varmfronten). Skyene blir gradvis lavere og tykkere (altostratus, nimbostratus), og jevn nedboer setter inn 12-24 timer foer varmfronten passerer. Etter varmfrontpassasje stiger temperaturen, vinden dreier til soervest, og det kan bli oppholdsvaaer eller lett yr (varmsektoren). Saa kommer kaldfronten med kraftige byger, muligens tordenvaaer, og temperaturen faller braat. Vinden dreier til nordvest. Etter kaldfronten oppklarer det med cumulus-skyer, kjoeligere temperaturer og god sikt.',
      },
    },
    {
      id: 'geo2-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvem utviklet polarfrontteorien for lavtrykksdannelse?',
        options: [
          { id: 'a', text: 'Alfred Wegener og hans kollegaer i Berlin', isCorrect: false },
          { id: 'b', text: 'Vilhelm Bjerknes og Bergenskolen', isCorrect: true },
          { id: 'c', text: 'Tor Bergeron alene i Stockholm', isCorrect: false },
          { id: 'd', text: 'Britiske meteorologer under andre verdenskrig', isCorrect: false },
        ],
        solution: 'Polarfrontteorien ble utviklet paa 1920-tallet av Vilhelm Bjerknes og hans medarbeidere ved Bergens museum, kjent som Bergenskolen. Jacob Bjerknes, Halvor Solberg og Tor Bergeron var sentrale bidragsytere. Denne teorien revolusjonerte meteorologien og er fortsatt grunnleggende i moderne vaeranalyse.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Lokale vaersystemer
// ============================================================================

export const CHAPTER_GEOFAG_2_3_4: TextbookChapter = {
  id: 'geofag-2-3-4',
  courseId: 'geofag-2',
  chapterNumber: '3.4',
  title: 'Lokale vaersystemer',
  description: 'Sjoe- og landbrisen, fjellvaaer, foehneffekten, tordenvaaer og orografisk nedboer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hvordan ulike vaersystemer oppstaar og utvikler seg paa global, regional og lokal skala og tolke vaerkart',
  ],
  content: [
    {
      id: 'geo2-3-4-intro',
      type: 'text',
      content: `# Lokale vaersystemer

I tillegg til de store trykksystemene paavirkes vaaret av lokale fenomener knyttet til kystlinjer, fjell og lokal oppvarming. Disse lokale vaersystemene kan gi store forskjeller i vaaer over korte avstander og er spesielt viktige i et land som Norge med lang kyst og dramatisk topografi.

## Sjoe- og landbris

Sjoe- og landbris er lokale vindsystemer som oppstaar langs kysten paa grunn av temperaturforskjeller mellom land og hav.

### Sjoebrisen (om dagen)
Om dagen varmes land raskere opp enn havet. Varm luft stiger over land, og kjoelig luft fra havet stroemmer inn for aa erstatte den. Denne kjoelige sjoebrisen kan merkes 10-30 km inn i landet og gir behagelig avkjoeling paa varme sommerdager.

### Landbrisen (om natten)
Om natten kjoeles land raskere av enn havet. Kjoelig luft fra land stroemmer ut over havet, der den varmere luften stiger. Landbrisen er vanligvis svakere enn sjoebrisen.

Sjoe- og landbris er best utviklet paa klare dager med svak stoerskalavent, typisk i et hoeytrykksomraade om sommeren.`,
    },
    {
      id: 'geo2-3-4-def-sjoebris',
      type: 'definition',
      title: 'Sjoe- og landbris',
      content: 'Sjoe- og landbris er lokale, doegnvarierte vindsystemer langs kysten. Sjoebrisen blaaser fra hav til land om dagen (land varmere enn hav), mens landbrisen blaaser fra land til hav om natten (hav varmere enn land). Drivkraften er den termiske sirkulasjonen som oppstaar paa grunn av ulik oppvarmings- og avkjoelingshastighet for land og hav.',
    },
    {
      id: 'geo2-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Naar paa doegnet blaaser sjoebrisen?',
        options: [
          { id: 'a', text: 'Om natten, naar havet er kaldere enn land', isCorrect: false },
          { id: 'b', text: 'Om dagen, naar land er varmere enn hav', isCorrect: true },
          { id: 'c', text: 'Hele doegnet, med lik styrke', isCorrect: false },
          { id: 'd', text: 'Kun om morgenen ved soloppgang', isCorrect: false },
        ],
        solution: 'Sjoebrisen blaasar om dagen, naar land varmes raskere opp enn havet. Den varme luften over land stiger, og kjoelig luft fra havet stroemmer inn for aa erstatte den. Sjoebrisen er vanligvis sterkest tidlig paa ettermiddagen naar temperaturforskjellen er stoerst.',
      },
    },
    {
      id: 'geo2-3-4-fjellvaaer',
      type: 'text',
      content: `## Fjellvaaer og orografisk nedboer

Fjell har stor innvirkning paa vaeret. Naar luft tvinges til aa stige over en fjellkjede, avkjoeles den og kan gi nedboer. Denne mekanismen forklarer hvorfor Vestlandet er Norges nedboerikeste omraade.

### Orografisk nedboer

Naar fuktig luft fra Atlanterhavet blaasar inn mot norskekysten, tvinges den til aa stige over fjellene. Oppstigning gir avkjoeling, kondensasjon og nedboer paa **lo-siden** (vindsiden) av fjellene. Paa **le-siden** (skyggesiden) synker luften og varmes opp, noe som gir toert vaaer.

**Eksempel - Norge:**
- Bergen faar ca. 2250 mm nedboer per aar (lo-side)
- Oslo faar ca. 760 mm nedboer per aar (le-side)

Denne effekten kalles **regnskygge** og forklarer de dramatiske nedboeforskjellene i Norge.

### Dalvind og fjellvind

Paa klare dager varmes dalsidene opp av solen. Luften langs skraaningene varmes opp og stiger (**dalvind** - oppover dalen om dagen). Om natten kjoeles luften naer bakken raskt, og kald, tung luft renner ned langs skraaningene (**fjellvind** eller **katabatvind** - nedover dalen om natten).`,
    },
    {
      id: 'geo2-3-4-def-orografisk',
      type: 'definition',
      title: 'Orografisk nedboer',
      content: 'Orografisk nedboer oppstaar naar luft tvinges til aa stige over en fjellkjede. Oppstigning forer til adiabatisk avkjoeling, kondensasjon og nedboer paa lo-siden (vindsiden) av fjellet. Paa le-siden (skyggesiden) synker luften, varmes opp og gir toert vaaer - et fenomen kalt regnskygge.',
    },
    {
      id: 'geo2-3-4-example-regnskygge',
      type: 'example',
      title: 'Regnskyggeeffekten i Soer-Norge',
      problem: 'Forklar hvorfor Bergen faar nesten tre ganger saa mye nedboer som Oslo.',
      solution: `**Regnskyggeeffekten mellom Vestlandet og Oestlandet:**

1. **Fuktig luft fra vest**: Vestlige og soervestlige vinder foerer fuktig, maritim luft fra Atlanterhavet inn mot norskekysten.

2. **Lo-siden (Bergen)**: Luften tvinges til aa stige over fjellene. Ved oppstigning kjoeles luften adiabatisk, og naar duggpunktet naas, dannes skyer og nedboer. Bergen, paa lo-siden, faar ca. 2250 mm nedboer aarlig.

3. **Le-siden (Oslo)**: Etter at mesteparten av fuktigheten er felt ut som nedboer over fjellene, synker den naa toerre luften paa oestsiden. Synkende luft varmes opp adiabatisk, og den relative fuktigheten synker. Oslo, i regnskyggen, faar ca. 760 mm aarlig.

4. **Temperatureffekt**: Den toerre, synkende luften paa le-siden (foehn) kan ogsaa gi hoeyere temperaturer enn forventet.`,
    },
    {
      id: 'geo2-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er regnskygge?',
        options: [
          { id: 'a', text: 'Omraadet under en stor sky som ikke faar sol', isCorrect: false },
          { id: 'b', text: 'Det toerre omraadet paa le-siden av en fjellkjede', isCorrect: true },
          { id: 'c', text: 'Skyggen som dannes av nedboerskyer', isCorrect: false },
          { id: 'd', text: 'Et omraade med saa mye nedboer at det er moerkt', isCorrect: false },
        ],
        solution: 'Regnskygge er det toerre omraadet paa le-siden (baksiden) av en fjellkjede. Naar fuktig luft tvinges over fjellene, felles nedboeren ut paa lo-siden. Luften som synker ned paa le-siden er toerr, noe som gir mye mindre nedboer. Oslo ligger i regnskyggen av fjellene mellom Vestlandet og Oestlandet.',
      },
    },
    {
      id: 'geo2-3-4-foehn',
      type: 'text',
      content: `## Foehneffekten

Foehneffekten (ogsaa kalt foehnvind) er et vaerfenomen der luft som stroemmer over en fjellkjede, ankommer le-siden varmere og toerre enn den var paa lo-siden.

### Hvordan foehn oppstaar

1. Fuktig luft tvinges opp paa lo-siden. Den kjoeles foerst toerraadiabatisk (1 °C/100 m) til duggpunktet naas.
2. Over duggpunktet kjoeles den fuktigadiabatisk (ca. 0,5 °C/100 m) mens nedboer felles ut.
3. Paa le-siden synker den naa toerre luften og varmes toerraadiabatisk (1 °C/100 m) hele veien ned.
4. Fordi den mister fuktighet paa lo-siden, er den toerre paa le-siden, og varmes raskere.

### Resultat
Luften ankommer le-siden **varmere** og **toerre** enn den var paa lo-siden. Dette kan gi oppsiktsvekkende hoege temperaturer.

### Foehn i Norge
Foehnvind er vanlig i norske fjordstraak og daler:
- Kan gi temperaturer over 20 °C paa Vestlandet om vinteren
- Innerdalen i Nordland og Troms opplever jevnlig foehn
- Gir raskt snoesmelting og kan utloese skred`,
    },
    {
      id: 'geo2-3-4-example-foehn',
      type: 'example',
      title: 'Beregning av foehneffekt',
      problem: 'Luft med temperatur 15 °C og duggpunkt 11 °C stroemmer mot et fjell paa 2000 meter. Beregn temperaturen paa le-siden (havnivaa).',
      solution: `**Losning:**

**Lo-siden (oppstigning):**
1. Toerraadiabatisk til duggpunktet: 15 - 11 = 4 °C aa kjoele → 400 m
2. Temperatur paa 400 m: 11 °C (duggpunktet naadd, skyer dannes)
3. Fuktigadiabatisk fra 400 m til 2000 m: 1600 m x 0,5 °C/100 m = 8 °C avkjoeling
4. Temperatur paa toppen: 11 - 8 = **3 °C**

**Le-siden (synking):**
5. All fuktighet er felt ut som nedboer. Luften er naa toerr.
6. Toerraadiabatisk fra 2000 m til 0 m: 2000 m x 1 °C/100 m = 20 °C oppvarming
7. Temperatur paa le-siden: 3 + 20 = **23 °C**

**Resultat:** Luften har varmet seg fra 15 °C til 23 °C - en okning paa 8 °C! Dette er foehneffekten.`,
    },
    {
      id: 'geo2-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Luft med temperatur 10 °C og duggpunkt 6 °C naermer seg et fjell paa 1500 meter. Bruk fuktigadiabatisk lapsrate paa 0,5 °C/100 m. Beregn: a) hoeyden for skydannelse, b) temperaturen paa fjelltoppen, c) temperaturen paa le-siden ved havnivaa.',
        hints: ['Husk at luften kjoeles toerraadiabatisk (1 °C/100 m) til duggpunktet, deretter fuktigadiabatisk.'],
        solution: 'a) Temperaturforskjell til duggpunkt: 10 - 6 = 4 °C. Med toerraadiabatisk lapsrate (1 °C/100 m): 400 m for skydannelse. b) Fra 400 m til 1500 m = 1100 m med fuktigadiabatisk lapsrate (0,5 °C/100 m): avkjoeling = 1100 x 0,5/100 = 5,5 °C. Temperatur paa toppen: 6 - 5,5 = 0,5 °C. c) Paa le-siden synker toerr luft 1500 m toerraadiabatisk: oppvarming = 1500 x 1/100 = 15 °C. Temperatur paa le-siden: 0,5 + 15 = 15,5 °C. Foehneffekten har varmet luften med 5,5 °C (fra 10 °C til 15,5 °C).',
      },
    },
    {
      id: 'geo2-3-4-tordenvaaer',
      type: 'text',
      content: `## Tordenvaaer

Tordenvaaer er kraftige, lokale vaerfenomener som oppstaar i ustabil atmosfaere med sterk vertikal oppstigning.

### Forutsetninger
1. **Ustabil atmosfaere**: Temperaturen maa avta raskt med hoeyden
2. **Fuktighet**: Tilstrekkelig vanndamp for aa frigjore latent varme
3. **Loftemekanisme**: Noe som setter luften i bevegling oppover (oppvarming, fronter, fjell)

### Livssyklusen til en tordenbyge

**Cumulusstadiet (10-15 min):**
- Kraftig oppdrift bygger skyen vertikalt
- Ingen nedboer naar bakken ennaa
- Skyen vokser raskt oppover

**Modent stadium (15-30 min):**
- Baade oppdrift og nedbrift i skyen
- Kraftig nedboer, hagl, lyn og torden
- Mulige vindkast og fallvinder
- Vaaerets mest intense fase

**Opplosningsstadiet (30+ min):**
- Nedbriften dominerer
- Nedboeren avtar
- Skyen spres ut til en amboltform i toppen
- Systemet svekkes og doer ut

### Lyn og torden
Lyn oppstaar paa grunn av ladningsseparasjon inne i cumulonimbus-skyen. Iskrystaller i toppen faar positiv ladning, mens hagl og vanndraaper i bunnen faar negativ ladning. Naar spenningsforskjellen blir stor nok, utladnes den som et lyngedlimt. Torden er lydboelgen som oppstaar naar lynet oppvarmer luften langs kanalen til over 30 000 °C.`,
    },
    {
      id: 'geo2-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilke tre forutsetninger maa vaere oppfylt for at tordenvaaer skal dannes?',
        options: [
          { id: 'a', text: 'Stabil atmosfaere, toerr luft og hoeytrykk', isCorrect: false },
          { id: 'b', text: 'Ustabil atmosfaere, fuktighet og en loftemekanisme', isCorrect: true },
          { id: 'c', text: 'Lavtrykk, kaldfront og maanebelysning', isCorrect: false },
          { id: 'd', text: 'Havtemperatur over 26 °C, corioliseffekt og lav vindskaer', isCorrect: false },
        ],
        solution: 'De tre forutsetningene for tordenvaaer er: 1) Ustabil atmosfaere (temperaturen avtar raskt med hoeyden), 2) Tilstrekkelig fuktighet (for aa frigjore latent varme og drive konveksjonen), og 3) En loftemekanisme (lokal oppvarming, fronter eller fjell som setter luften i bevegling oppover).',
      },
    },
    {
      id: 'geo2-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar foehneffekten. Hvorfor er luften varmere og toerre paa le-siden av et fjell enn paa lo-siden?',
        solution: 'Foehneffekten oppstaar fordi luft som stroemmer over et fjell, gjennomgaar ulike prosesser paa lo- og le-siden. Paa lo-siden stiger luften og kjoeles foerst toerraadiabatisk (1 °C/100 m), deretter fuktigadiabatisk (0,5 °C/100 m) etter at skydannelse har begynt. Nedboer felles ut, og fuktighet fjernes fra luften. Paa le-siden synker den naa toerre luften og varmes toerraadiabatisk (1 °C/100 m) hele veien ned. Fordi den toerre lapsraten (1 °C/100 m) er raskere enn den fuktige (0,5 °C/100 m), og luften synker toerraadiabatisk hele hoeyden, ankommer den le-siden varmere og toerre enn den var paa lo-siden.',
      },
    },
    {
      id: 'geo2-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Sjoebrisen** blaasar fra hav til land om dagen, **landbrisen** fra land til hav om natten
- **Orografisk nedboer** oppstaar naar luft tvinges over fjell, og forklarer Vestlandets hoege nedboeramengder
- **Regnskygge** er det toerre omraadet paa le-siden av fjellene (f.eks. Oestlandet)
- **Foehneffekten** gir varm, toerr luft paa le-siden fordi fuktighet felles ut paa lo-siden
- **Dalvind** blaasar oppover om dagen, **fjellvind** nedover om natten
- **Tordenvaaer** krever ustabil atmosfaere, fuktighet og en loftemekanisme`,
    },
    // --- Samleoppgaver ---
    {
      id: 'geo2-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilket fenomen forklarer at luften er varmere og toerre paa Oestlandet enn paa Vestlandet naar det er soervestlig vind?',
        options: [
          { id: 'a', text: 'Sjoebrisen', isCorrect: false },
          { id: 'b', text: 'Corioliseffekten', isCorrect: false },
          { id: 'c', text: 'Foehneffekten', isCorrect: true },
          { id: 'd', text: 'Inversjon', isCorrect: false },
        ],
        solution: 'Foehneffekten forklarer dette. Naar soervestlig, fuktig luft fra Atlanterhavet tvinges over fjellene mellom Vestlandet og Oestlandet, felles nedboer ut paa lo-siden (Vestlandet). Den toerre luften som synker ned paa le-siden (Oestlandet) varmes toerraadiabatisk og ankommer varmere og toerre enn den var paa Vestlandet.',
      },
    },
    {
      id: 'geo2-3-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar hvorfor Norge har saa store forskjeller i aarlig nedboer mellom Vestlandet og Oestlandet. Bruk begrepene orografisk nedboer, lo-side, le-side og regnskygge i svaret ditt.',
        solution: 'Norges nedboeforskjeller skyldes orografisk nedboer. De dominerende vindene er vestlige og soervestlige, som foerer fuktig luft fra Atlanterhavet inn mot norskekysten. Vestlandet ligger paa lo-siden (vindsiden) av fjellene. Luften tvinges oppover, kjoeles adiabatisk, og nedboer felles ut. Bergen faar f.eks. ca. 2250 mm nedboer per aar. Naar luften har passert over fjellkjeden, har den mistet mye av fuktigheten. Oestlandet ligger paa le-siden (skyggesiden), i det vi kaller regnskyggen. Her synker den toerre luften og gir lite nedboer. Oslo faar bare ca. 760 mm per aar - under en tredjedel av Bergen. Topografien fungerer som en barriere som skaper asymmetrisk fordeling av nedboer.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Numeriske vaermodeller
// ============================================================================

export const CHAPTER_GEOFAG_2_3_5: TextbookChapter = {
  id: 'geofag-2-3-5',
  courseId: 'geofag-2',
  chapterNumber: '3.5',
  title: 'Numeriske vaermodeller',
  description: 'Hvordan numeriske vaermodeller fungerer, opploesning, initialisering, ensemblevarsling og NWP.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forklare hvordan numeriske modeller i geofag er bygd opp og brukes innenfor vaervarsel, havmodellering og klimaforskning',
  ],
  content: [
    {
      id: 'geo2-3-5-intro',
      type: 'text',
      content: `# Numeriske vaermodeller

Moderne vaervarsling bygger paa numeriske vaermodeller - matematiske beskrivelser av atmosfaeren som loeses paa superdatamaskiner. Denne tilnaermingen kalles **numerisk vaervarsling** (NWP - Numerical Weather Prediction) og har revolusjonert vaarvarslingens noeyaktighet.

## Fra observasjon til varsling

Vaervarsling med numeriske modeller foelger en fast prosess:

1. **Observasjon**: Data samles inn fra vaerstasjoner, radiosonoder, fly, skip, satellitter og radarer
2. **Dataassimilering**: Observasjonene kombineres med forrige modellkjoering for aa lage en best mulig beskrivelse av atmosfaerens naavaerende tilstand (analysen)
3. **Modellkjoering**: Modellen beregner hvordan atmosfaeren vil utvikle seg fremover i tid
4. **Postprosessering**: Modellresultatene justeres og tilpasses lokale forhold
5. **Formidling**: Varselet presenteres til meteorologer og publikum

Denne prosessen gjentas flere ganger om dagen (typisk hver 6. time) for aa holde varslene oppdatert.`,
    },
    {
      id: 'geo2-3-5-def-nwp',
      type: 'definition',
      title: 'Numerisk vaervarsling (NWP)',
      content: 'Numerisk vaervarsling (NWP - Numerical Weather Prediction) er bruk av matematiske modeller basert paa fysikkens lover til aa forutsi atmosfaerens tilstand fremover i tid. Modellene loser de styrende ligningene (Navier-Stokes, termodynamikk, fuktighetsbalanse m.m.) paa et tredimensjonalt rutenett som dekker hele atmosfaeren. Metoden ble foerst foreslaat av Lewis Fry Richardson i 1922, men ble foerst praktisk mulig med datamaskiner paa 1950-tallet.',
    },
    {
      id: 'geo2-3-5-example-richardson',
      type: 'example',
      title: 'Richardson og den foerste numeriske varslingsberegningen',
      problem: 'Forklar Lewis Fry Richardsons bidrag til numerisk vaervarsling.',
      solution: `**Richardsons pionerarbeid:**

I 1922 publiserte den britiske matematikeren Lewis Fry Richardson boken "Weather Prediction by Numerical Process", der han foreslo aa varsle vaaret ved aa lose atmosfaerens ligninger numerisk.

**Forsoeget:** Richardson utfoerte for haand en 6-timers varsling for et enkelt punkt. Det tok ham seks uker aa gjennomfoere beregningene, og resultatet var fullstendig feil (han beregnet en trykkendring paa 145 hPa, noe som er urealistisk).

**Visjon:** Richardson forestilte seg et "vaerfabrikk" - et stort amfiteater der 64 000 mennesker med kalkulatorer satt og regnet paa hver sin del av atmosfaeren, koordinert av en dirigent.

**Betydning:** Til tross for det mislykkede forsoeget la Richardson grunnlaget for numerisk vaervarsling. Feilen skyldtes mangler i dataene og numerisk ustabilitet, ikke metoden. Paa 1950-tallet, med de foerste datamaskinene, ble Richardsons droemm virkelighet.`,
    },
    {
      id: 'geo2-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er det foerste trinnet i prosessen med numerisk vaervarsling?',
        options: [
          { id: 'a', text: 'Modellkjoeringen startes paa superdatamaskiner', isCorrect: false },
          { id: 'b', text: 'Observasjoner samles inn fra ulike maaleinstrumenter', isCorrect: true },
          { id: 'c', text: 'Meteorologene tegner vaerkart for haand', isCorrect: false },
          { id: 'd', text: 'Satellittbilder analyseres av kunstig intelligens', isCorrect: false },
        ],
        solution: 'Det foerste trinnet er observasjon - aa samle inn data fra vaerstasjoner, radiosonoder, fly, skip, satellitter og radarer. Disse observasjonene danner grunnlaget for aa beskrive atmosfaerens naavaerende tilstand, som er utgangspunktet for modellberegningene.',
      },
    },
    {
      id: 'geo2-3-5-modelloppbygging',
      type: 'text',
      content: `## Modellens oppbygging

En numerisk vaermodell bestaar av flere hovedelementer:

### Rutenettet

Atmosfaeren deles inn i et tredimensjonalt rutenett. Hvert rutenettspunkt har verdier for temperatur, trykk, fuktighet, vindstyrke og vindretning. Modellen beregner hvordan disse variablene endrer seg over tid.

**Horisontal opploesning:**
- Globale modeller: 9-25 km (f.eks. ECMWF IFS: 9 km)
- Regionale modeller: 1-4 km (f.eks. Meteorologisk institutts MEPS: 2,5 km)
- Hoeyere opploesning gir bedre detaljer, men krever mye mer regnetid

**Vertikal opploesning:**
- Typisk 60-137 vertikale lag fra bakken til ca. 80 km hoyde
- Tettere lag naer bakken der vaaret paavirker oss mest

### De styrende ligningene

Modellen loser et sett med ligninger som beskriver atmosfaerens fysikk:

1. **Bevegelsesligningene** (Navier-Stokes): Hvordan vind og luftbevegling utvikler seg
2. **Termodynamikkens 1. hovedsetning**: Hvordan temperatur endrer seg
3. **Kontinuitetsligningen**: Bevarelse av masse
4. **Fuktighetsligningen**: Hvordan vanndamp transporteres og endrer fase
5. **Tilstandsligningen for gass**: Sammenhengen mellom trykk, temperatur og tetthet

### Parametrisering

Mange prosesser foregaar paa mindre skala enn rutenettet (f.eks. turbulens, konveksjon, skyformasjon). Disse maa **parametriseres** - beskrives med forenklede formler basert paa de storskala variablene. Parametrisering er en av de stoerste usikkerhetskildene i vaermodeller.`,
    },
    {
      id: 'geo2-3-5-def-opploesning',
      type: 'definition',
      title: 'Modellopplosning',
      content: 'Modellopplosningen angir stoerrelsen paa rutenettet i en numerisk vaermodell. Horisontal opploesning er avstanden mellom rutenettspunktene (f.eks. 9 km for ECMWF-modellen). Hoeyere opploesning gir mer detaljerte varsler, men krever mye stoerre datakraft. Prosesser som er mindre enn rutenettet, maa parametriseres.',
    },
    {
      id: 'geo2-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva betyr det at en vaermodell har 2,5 km opploesning?',
        options: [
          { id: 'a', text: 'Modellen kan varsle 2,5 km frem i tid', isCorrect: false },
          { id: 'b', text: 'Avstanden mellom rutenettspunktene er 2,5 km', isCorrect: true },
          { id: 'c', text: 'Modellen dekker et omraade paa 2,5 km', isCorrect: false },
          { id: 'd', text: 'Modellen oppdateres hvert 2,5 km', isCorrect: false },
        ],
        solution: 'Opploesningen 2,5 km betyr at avstanden mellom rutenettspunktene i modellen er 2,5 km. Jo finere opploesning, desto flere rutenettspunkter og desto mer detaljerte varsler. Men hoeyere opploesning krever kraftigere datamaskiner og lenger beregningstid.',
      },
    },
    {
      id: 'geo2-3-5-initialisering',
      type: 'text',
      content: `## Dataassimilering og initialisering

For aa kjoere en vaermodell trenger vi en noeyaktig beskrivelse av atmosfaerens tilstand akkurat naa - **initialfeltet** (starttilstanden). Kvaliteten paa dette feltet er avgjorende for varslets noeyaktighet.

### Observasjonsnettet

Tusenvis av observasjoner stroemmer inn fra hele verden:
- Ca. 10 000 **vaerstasjoner** paa land
- Ca. 1300 **radiosonoder** (vaerballonger som maaler temperatur, fuktighet og vind opp til 30 km)
- **Vaersatellitter** som maaler temperaturprofiler, skyer, vindfelt og fuktighet
- **Fly** som rapporterer vind og temperatur
- **Skip og boeyer** som maaler trykk, temperatur og vind over hav
- **Vaerradarer** som maaler nedboer og vind

### Dataassimilering

Observasjonene kombineres med modellens forrige varsling (foerste gjett) for aa lage det best mulige initialfeltet. Denne prosessen kalles **dataassimilering** og bruker statistiske metoder for aa veie observasjoner mot modellverdier.

Hovedutfordringer:
- Observasjoner er ujevnt fordelt (mange paa land, faa over hav)
- Ulike instrumenter har ulik noeyaktighet
- Noen observasjoner kan ha feil og maa kvalitetskontrolleres`,
    },
    {
      id: 'geo2-3-5-def-dataassimilering',
      type: 'definition',
      title: 'Dataassimilering',
      content: 'Dataassimilering er prosessen der observasjoner fra vaerstasjoner, satellitter, radiosonoder og andre kilder kombineres med modellens forrige varsling for aa lage en best mulig beskrivelse av atmosfaerens naavaerende tilstand (analysen). Analysen brukes som starttilstand for neste modellkjoering. Metoden bruker statistiske teknikker for aa balansere observasjoner og modellverdier optimalt.',
    },
    {
      id: 'geo2-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor dataassimilering er noedvendig for numerisk vaervarsling. Hvorfor kan man ikke bare bruke observasjoner direkte som starttilstand?',
        hints: ['Tenk paa observasjonenes geografiske fordeling og modellens krav til komplette felt.'],
        solution: 'Dataassimilering er noedvendig fordi observasjoner alene ikke gir et komplett bilde av atmosfaeren. For det foerste er observasjonene ujevnt fordelt - det er mange stasjoner paa land, men faa over hav, i polaromraader og i oevre atmosfaere. For det andre krever modellen verdier for alle variabler i alle rutenettspunkter, noe observasjoner ikke dekker. For det tredje har observasjoner feil og inkonsistenser som maa kvalitetskontrolleres. Dataassimilering loser dette ved aa kombinere observasjoner med modellens forrige varsling. Modellen gir et fysisk konsistent foerste gjett for hele atmosfaeren, og observasjonene korrigerer dette gjettet der maaledata er tilgjengelig. Resultatet er et komplett, fysisk konsistent initialfelt.',
      },
    },
    {
      id: 'geo2-3-5-ensemble',
      type: 'text',
      content: `## Ensemblevarsling

Vaaret er et kaotisk system - smaa forskjeller i starttilstanden kan gi store forskjeller i varselet etter noen dager. Dette setter en grunnleggende grense for hvor langt frem vi kan varsle presist.

### Schmetterlingseffekten

Edward Lorenz oppdaget i 1963 at atmosfaeren er et **kaotisk system**: smaa endringer i starttilstanden kan foere til helt ulike vaaerlosninger etter kort tid. Dette betyr at usikkerheten i varselet vokser med varslingsperioden.

### Ensemblemetoden

For aa haandtere usikkerheten bruker meteorologer **ensemblevarsling**. I stedet for aa kjoere modellen en gang, kjoerer de den mange ganger (et "ensemble") med litt ulike starttilstander:

1. **Generering**: 20-50 versjoner av initialfeltet lages ved aa legge til smaa, realistiske forstyrrelser
2. **Kjoering**: Modellen kjoeres for hver versjon
3. **Analyse**: Resultatene sammenlignes:
   - Hvis alle medlemmene gir likt resultat: **hoey sikkerhet** i varselet
   - Hvis medlemmene sprer seg: **lav sikkerhet**, flere utfall mulige

### Sannsynlighetsvarsler

Ensemblevarsling muliggjor sannsynlighetsvarsler: "70 % sannsynlighet for regn" betyr at 70 % av ensemblemedlemmene viser regn. Dette gir mer nyttig informasjon enn et enkelt deterministisk varsel.

### Varslingshorisont

- **0-2 dager**: Hoey treffsikkerhet (85-95 %)
- **3-5 dager**: God treffsikkerhet (70-85 %)
- **6-10 dager**: Noe treffsikkerhet, men oekende usikkerhet
- **Over 10 dager**: Begrenset forutsigbarhet for detaljer, men stoerskala moenstre kan fanges
- **Teoretisk grense**: Ca. 2-3 uker for detaljert vaervarsling`,
    },
    {
      id: 'geo2-3-5-def-ensemble',
      type: 'definition',
      title: 'Ensemblevarsling',
      content: 'Ensemblevarsling er en metode der vaermodellen kjoeres mange ganger (typisk 20-50) med litt ulike starttilstander. Spredningen mellom kjoeringene gir informasjon om usikkerheten i varselet. Liten spredning betyr hoey tillit; stor spredning betyr lav tillit. Metoden muliggjor sannsynlighetsvarsler og er grunnleggende i moderne vaervarsling.',
    },
    {
      id: 'geo2-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er hensikten med ensemblevarsling?',
        options: [
          { id: 'a', text: 'Aa faa varselet ferdig raskere ved aa dele beregningen paa flere datamaskiner', isCorrect: false },
          { id: 'b', text: 'Aa estimere usikkerheten i varselet ved aa kjoere modellen med ulike starttilstander', isCorrect: true },
          { id: 'c', text: 'Aa sammenligne ulike vaermodellers resultater', isCorrect: false },
          { id: 'd', text: 'Aa varsle vaaret paa mange steder samtidig', isCorrect: false },
        ],
        solution: 'Ensemblevarsling gir informasjon om usikkerheten i varselet. Ved aa kjoere modellen mange ganger med litt ulike starttilstander kan man se hvor godt medlemmene samsvarer. God enighet betyr hoey tillit til varselet, stor spredning betyr lav tillit og flere mulige utfall.',
      },
    },
    {
      id: 'geo2-3-5-norske-modeller',
      type: 'text',
      content: `## Vaermodeller i Norge

Meteorologisk institutt (MET) er ansvarlig for vaervarsling i Norge og bruker flere modeller:

### MEPS (MetCoOp Ensemble Prediction System)
- Samarbeid mellom nordiske meteorologiske institutter
- Horisontal opploesning: 2,5 km
- Dekker Norden og tilstoeende havomraader
- Kjoeres 4 ganger om dagen
- 10 ensemblemedlemmer

### ECMWF (European Centre for Medium-Range Weather Forecasts)
- Europeisk samarbeid med hovedkvarter i Reading, England
- Global modell med 9 km opploesning
- 51 ensemblemedlemmer
- Anses som verdens beste globale vaermodell
- Varsler opp til 15 dager frem

### Yr.no
- MET sin populaere vaertjeneste
- Kombinerer resultater fra MEPS og ECMWF
- Statistisk etterprosessering for aa forbedre lokale varsler
- Gir sannsynlighetsvarsler for nedboer og temperatur

### Maskinlaering i vaervarsling
De siste aarene har maskinlaering og kunstig intelligens begynt aa spille en rolle i vaervarsling. Modeller som GraphCast (Google DeepMind) kan produsere varsler paa sekunder i stedet for timer, men er foreloepig best som supplement til fysikkbaserte modeller.`,
    },
    {
      id: 'geo2-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva "schmetterlingseffekten" betyr i vaersammenheng, og hvorfor den setter en grense for hvor langt frem vi kan varsle vaeret presist.',
        solution: 'Schmetterlingseffekten, oppdaget av Edward Lorenz i 1963, innebarer at atmosfaeren er et kaotisk system der smaa forskjeller i starttilstanden kan vokse eksponentielt og foere til helt ulike vaaerlosninger etter en tid. Navnet kommer fra ideen om at vingeslaget til en sommerfugl i Brasil teoretisk kunne utloese en tornado i Texas. For vaervarsling betyr dette at selv med perfekte modeller, vil smaa feil i observasjonene vokse over tid og gjore varselet stadig mer usikkert. Den teoretiske grensen for detaljert vaervarsling er ca. 2-3 uker. Derfor bruker vi ensemblevarsling for aa kvantifisere usikkerheten.',
      },
    },
    {
      id: 'geo2-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Numerisk vaervarsling (NWP)** bruker matematiske modeller basert paa fysikkens lover
- Prosessen: observasjon → dataassimilering → modellkjoering → postprosessering → formidling
- **Opploesning** angir rutenettstoerrrelsen: globale modeller ca. 9-25 km, regionale 1-4 km
- **Parametrisering** beskriver prosesser som er for smaa for rutenettet
- **Dataassimilering** kombinerer observasjoner med modellens forrige varsling til et komplett initialfelt
- **Ensemblevarsling** estimerer usikkerhet ved aa kjoere modellen mange ganger med ulike starttilstander
- Vaeret er et **kaotisk system** - den teoretiske grensen for detaljert varsling er ca. 2-3 uker
- MEPS (2,5 km) og ECMWF (9 km) er de viktigste modellene for vaervarsling i Norge`,
    },
    // --- Samleoppgaver ---
    {
      id: 'geo2-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva er parametrisering i en vaermodell?',
        options: [
          { id: 'a', text: 'Innstilling av modellens tidsskrittlengde', isCorrect: false },
          { id: 'b', text: 'Beskrivelse av prosesser som er for smaa for rutenettet ved hjelp av forenklede formler', isCorrect: true },
          { id: 'c', text: 'Justering av modellresultatene etter kjoeringen', isCorrect: false },
          { id: 'd', text: 'Innlesning av observasjoner i modellen', isCorrect: false },
        ],
        solution: 'Parametrisering betyr aa beskrive prosesser som foregaar paa mindre skala enn rutenettet (f.eks. turbulens, konveksjon, skyformasjon) med forenklede formler basert paa de storskala variablene. Disse prosessene kan ikke loeses direkte, men effekten deres maa likevel tas med. Parametrisering er en av de stoerste usikkerhetskildene i vaermodeller.',
      },
    },
    {
      id: 'geo2-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'geo2-3-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Sammenlign en global vaermodell (som ECMWF) med en regional vaermodell (som MEPS). Diskuter fordeler og ulemper ved de to tilnaermingene med hensyn til opploesning, dekningsomraade og bruksomraader.',
        solution: 'Globale modeller som ECMWF dekker hele jorden og varsler opp til 15 dager frem, men har groevere opploesning (ca. 9 km). De fanger stoerskala vaersystemer godt, men mister lokale detaljer. De er best for varsling utover 2-3 dager og for aa forstaa stoerskala vaermoenstre. Regionale modeller som MEPS dekker et begrenset omraade (Norden), men med finere opploesning (2,5 km). De fanger lokale effekter som fjellvaaer, sjoebriser og konveksjon mye bedre, men kan bare varsle 2-3 dager frem fordi de trenger randbetingelser fra en global modell. De er best for korttidsvarsling og lokale detaljer. I praksis bruker meteorologer baade globale og regionale modeller sammen for aa faa best mulig varsel.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samle alle kapitler i Del 3
// ============================================================================

export const GEOFAG_2_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_2_3_1, CHAPTER_GEOFAG_2_3_2, CHAPTER_GEOFAG_2_3_3, CHAPTER_GEOFAG_2_3_4, CHAPTER_GEOFAG_2_3_5,
];

export function getGeofag2Del3Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_2_DEL3_CHAPTERS.find(chapter => chapter.id === chapterId);
}
