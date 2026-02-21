/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geografi VG1/VG2 - Del 3: Vaer, klima og klimaendringer
 *
 * Dekker LK20-kompetansemaal for geografi (GEO01-02)
 * Seksjon 3: Vaer, klima og klimaendringer
 * Delkapitler 3.1 - 3.7
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Atmosfaeren og solinnstraaling
// ============================================================================

export const CHAPTER_GEOGRAFI_3_1: TextbookChapter = {
  id: 'geografi-1-3-1',
  courseId: 'geografi',
  chapterNumber: '3.1',
  title: 'Atmosfaeren og solinnstraaling',
  description: 'Laer om atmosfaerens oppbygging, solinnstraalingens betydning og energibalansen paa jorda.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjere greie for atmosfaeren og korleis sol, jord og atmosfaere verkar saman i energibalansen',
    'utforske og beskrive vaer- og klimaforhold og forklare korleis dei oppstaar',
  ],
  content: [
    {
      id: 'geo-3-1-intro',
      type: 'text',
      content: `# Atmosfaeren og solinnstraaling

Atmosfaeren er det tynne gasslaget som omgir jorda. Den beskytter oss mot farlig straaling fra sola, holder paa varmen og gjoer det mulig for liv aa eksistere. Uten atmosfaeren ville gjennomsnitttemperaturen paa jorda vaert rundt -18 °C i stedet for dagens +15 °C.

## Atmosfaerens sammensetning

Luften vi puster inn bestaar hovedsakelig av:
- **Nitrogen (N\u2082):** ca. 78 %
- **Oksygen (O\u2082):** ca. 21 %
- **Argon (Ar):** ca. 0,9 %
- **Karbondioksid (CO\u2082):** ca. 0,04 % (men oekende)
- **Vanndamp (H\u2082O):** variabelt, 0-4 %

Selv om karbondioksid og vanndamp utgjoer en liten andel, har de enorm betydning for klimaet fordi de er **drivhusgasser**.`,
    },
    {
      id: 'geo-3-1-def-atmosfaere',
      type: 'definition',
      title: 'Atmosfaeren',
      content: `**Atmosfaeren** er jordas gasskappe som strekker seg flere hundre kilometer ut i verdensrommet. Den deles inn i flere lag basert paa temperaturendringer med hoeyden:

- **Troposfaeren** (0-12 km): Her skjer alt vaer. Temperaturen synker med hoeyden (ca. 6,5 °C per km).
- **Stratosfaeren** (12-50 km): Inneholder ozonlaget som beskytter mot UV-straaling. Temperaturen oeker med hoeyden.
- **Mesosfaeren** (50-80 km): Temperaturen synker igjen. Meteoritter brenner opp her.
- **Termosfaeren** (80-700 km): Svært tynn luft, men hoey temperatur. Nordlys oppstaar her.`,
    },
    {
      id: 'geo-3-1-solinnstraaling',
      type: 'text',
      content: `## Solinnstraaling

Sola er jordas viktigste energikilde. Solenergien som treffer jorda driver vaersystemer, havsirkulasjon og det meste av livet paa planeten.

### Solinnstraalingens fordeling

Solinnstraalingen fordeles ujevnt paa jordoverflaten:

- **Ved ekvator** treffer solstraalene jordoverflaten i bratt vinkel, slik at energien konsentreres paa et lite areal.
- **Ved polene** treffer straalene i lav vinkel, og energien spres over et stoerre areal.
- **Aarstidene** skyldes jordaksens helning paa 23,5°. Naar nordlige halvkule heller mot sola, er det sommer der og vinter paa soerlige halvkule.

### Hva skjer med solstraalingen?

Av all solstraaling som naar jorda:
- Ca. **30 %** reflekteres tilbake til verdensrommet (av skyer, is, snoedekke og lyse overflater)
- Ca. **20 %** absorberes av atmosfaeren
- Ca. **50 %** absorberes av jordoverflaten`,
    },
    {
      id: 'geo-3-1-def-albedo',
      type: 'definition',
      title: 'Albedo',
      content: `**Albedo** er et maal paa hvor mye av innkommende solstraaling som reflekteres tilbake fra en overflate. Verdien angis mellom 0 (alt absorberes) og 1 (alt reflekteres).

**Typiske albedoverdier:**
- Frisk snoe: 0,80-0,90 (reflekterer det meste)
- Oekensom: 0,30-0,45
- Skog: 0,10-0,20
- Hav: 0,06-0,10 (absorberer det meste)

**Albedoeffekten** er viktig for klimaet. Naar is og snoe smelter, erstattes lyse overflater med moerkere overflater som absorberer mer varme. Dette forsterker oppvarmingen - en **positiv tilbakekobling**.`,
    },
    {
      id: 'geo-3-1-energibalanse',
      type: 'text',
      content: `## Jordas energibalanse

For at jordas temperatur skal vaere stabil over tid, maa den energien jorda mottar fra sola vaere lik den energien jorda straaler ut til verdensrommet. Dette kalles **straalingsbalansen**.

### Drivhuseffekten

Drivhusgasser i atmosfaeren (CO\u2082, vanndamp, metan, lystgass) slipper gjennom kortboelget solstraaling, men absorberer langboelget varmestraaling fra jordoverflaten. Denne energien straales delvis tilbake mot jorda og varmer den opp.

**Den naturlige drivhuseffekten** hever jordas gjennomsnittstemperatur fra -18 °C til +15 °C - en oekning paa 33 °C. Uten den ville jorda vaert ubeboelig.

**Den forsterka drivhuseffekten** oppstaar naar menneskelig aktivitet oeker konsentrasjonen av drivhusgasser i atmosfaeren. Dette fanger mer varme og foerer til global oppvarming.`,
    },
    {
      id: 'geo-3-1-def-drivhuseffekt',
      type: 'definition',
      title: 'Drivhuseffekten',
      content: `**Drivhuseffekten** er prosessen der atmosfaerens drivhusgasser absorberer og tilbakestraaler langboelget varmestraaling fra jordoverflaten. Effekten er naturlig og noedvendig for livet paa jorda.

**Viktige drivhusgasser:**
- **Vanndamp (H\u2082O):** Stoerst drivhuseffekt totalt, men konsentrasjonen reguleres av temperatur
- **Karbondioksid (CO\u2082):** Viktigste menneskeskapte drivhusgass
- **Metan (CH\u2084):** Ca. 80 ganger sterkere enn CO\u2082 over 20 aar, men kortere levetid
- **Lystgass (N\u2082O):** Ca. 265 ganger sterkere enn CO\u2082 over 100 aar
- **KFK-gasser:** Svært sterke drivhusgasser, men regulert gjennom Montrealprotokollen`,
    },
    {
      id: 'geo-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Midnattssol og moerketid',
      problem: 'Forklar hvorfor Nord-Norge opplever midnattssol om sommeren og moerketid om vinteren. Koble forklaringen til jordaksens helning og solinnstraaling.',
      solution: `**Forklaring:**

Jordaksen er hellet 23,5° i forhold til baneplanet rundt sola.

**Om sommeren (juni):**
- Nordlige halvkule heller mot sola
- Nord for polarsirkelen (66,5° N) gaar ikke sola under horisonten - dette gir **midnattssol**
- I Tromsoe (69° N) er det midnattssol fra ca. 20. mai til 22. juli
- Solstraalene treffer med hoeyere vinkel, og dagene er svart lange

**Om vinteren (desember):**
- Nordlige halvkule heller bort fra sola
- Nord for polarsirkelen stiger ikke sola over horisonten - dette gir **moerketid**
- I Tromsoe varer moerketiden fra ca. 27. november til 15. januar

**Konsekvenser for energibalansen:**
- Om sommeren mottar Nord-Norge mye solenergi over lang tid (24 timer)
- Om vinteren er det minimalt med solinnstraaling
- Temperaturen jevnes noe ut av varmtransport med havstroemmer (Golfstroemmen)

Jordaksens helning er dermed den direkte aarsaken til baade aarstider, midnattssol og moerketid.`,
    },
    {
      id: 'geo-3-1-straaling-typer',
      type: 'text',
      content: `## Kortboelget og langboelget straaling

For aa forstaa drivhuseffekten maa vi skille mellom to typer straaling:

**Kortboelget straaling (solstraaling):**
- Kommer fra sola
- Inkluderer synlig lys, UV-straaling og noe infraroedt
- Passerer gjennom atmosfaeren relativt fritt

**Langboelget straaling (varmestraaling):**
- Sendes ut fra jordoverflaten
- Er infraroed straaling (varmefoelingen du kjenner fra en varm ovn)
- Absorberes av drivhusgasser i atmosfaeren

Drivhusgassene fungerer som et \"lokk\" som slipper solstraaling inn, men holder paa noe av varmestraalingen. Jo mer drivhusgass i atmosfaeren, jo mer varme holdes tilbake.`,
    },
  
    {
      id: 'geo-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Atmosfaeren** bestaar av troposfaeren, stratosfaeren, mesosfaeren og termosfaeren
- **Solinnstraaling** er den viktigste energikilden for jordas klimasystem
- **Energibalansen** bestemmes av forholdet mellom innkommende solstraaling og utstrallt varme
- **Albedo** angir hvor mye av solstraaling som reflekteres; snoe og is har hoey albedo
- **Drivhuseffekten** er naturlig og noedvendig for liv paa jorda, men forsterkes av menneskelige utslipp`,
    },
    {
      id: 'geo-3-1-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- Meteorologisk institutt: met.no
- IPCC (FNs klimapanel): ipcc.ch
- NASA Earth Science: science.nasa.gov
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.`,
    },
  ],
  exercises: [
    {
      id: 'geo-3-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'I hvilket lag av atmosfaeren skjer alt vaer?',
      options: [
        { id: 'a', text: 'Troposfaeren', isCorrect: true },
        { id: 'b', text: 'Stratosfaeren', isCorrect: false },
        { id: 'c', text: 'Mesosfaeren', isCorrect: false },
        { id: 'd', text: 'Termosfaeren', isCorrect: false },
      ],
      solution: 'Troposfaeren er det nederste laget i atmosfaeren (0-12 km) og det er her alt vaer skjer. Nesten all vanndamp og skyer befinner seg i dette laget.',
    },
    {
      id: 'geo-3-1-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er albedo?',
      options: [
        { id: 'a', text: 'Et maal paa hvor mye solstraaling en overflate reflekterer', isCorrect: true },
        { id: 'b', text: 'Mengden karbondioksid i atmosfaeren', isCorrect: false },
        { id: 'c', text: 'Temperaturen i stratosfaeren', isCorrect: false },
        { id: 'd', text: 'Vinkelen solstraalene treffer jorda med', isCorrect: false },
      ],
      solution: 'Albedo er maalet paa refleksjonsevnen til en overflate. Hoey albedo (f.eks. snoe) betyr at mye straaling reflekteres, mens lav albedo (f.eks. hav) betyr at det meste absorberes.',
    },
    {
      id: 'geo-3-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom den naturlige og den forsterka drivhuseffekten. Hvorfor er den forsterka drivhuseffekten problematisk?',
      solution: 'Den naturlige drivhuseffekten er en noedvendig prosess som hever jordas temperatur fra -18 °C til +15 °C. Den forsterka drivhuseffekten oppstaar naar menneskelig aktivitet (forbrenning av fossil energi, avskoging) oeker konsentrasjonen av drivhusgasser. Dette fanger mer varme og foerer til raskere global oppvarming enn oekosystemene rekker aa tilpasse seg.',
    },
    {
      id: 'geo-3-1-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hva som menes med \"positiv tilbakekobling\" i klimasystemet, og gi et eksempel knyttet til albedoeffekten.',
      solution: 'Positiv tilbakekobling betyr at en endring forsterker seg selv. Eksempel: Naar temperaturen stiger, smelter is og snoe. Dermed erstattes lyse overflater (hoey albedo) med moerkere overflater (lav albedo), som absorberer mer solstraaling. Dette foerer til ytterligere oppvarming, som smelter enda mer is - en selvforsterkende spiral. Dette kalles is-albedo-tilbakekoblingen.',
    },
    {
      id: 'geo-3-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor stor andel av solstraalingen absorberes av jordoverflaten?',
      options: [
        { id: 'a', text: 'Ca. 50 %', isCorrect: true },
        { id: 'b', text: 'Ca. 10 %', isCorrect: false },
        { id: 'c', text: 'Ca. 80 %', isCorrect: false },
        { id: 'd', text: 'Ca. 30 %', isCorrect: false },
      ],
      solution: 'Ca. 50 % av solstraalingen absorberes av jordoverflaten, ca. 30 % reflekteres tilbake (albedo), og ca. 20 % absorberes av atmosfaeren.',
    },
  ],
};

// ============================================================================
// Kapittel 3.2: Vind og lufttrykk
// ============================================================================

export const CHAPTER_GEOGRAFI_3_2: TextbookChapter = {
  id: 'geografi-1-3-2',
  courseId: 'geografi',
  chapterNumber: '3.2',
  title: 'Vind og lufttrykk',
  description: 'Forstaa sammenhengen mellom lufttrykk, temperatur og vind, og laer om det globale vindsystemet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjere greie for atmosfaeren og korleis sol, jord og atmosfaere verkar saman i energibalansen',
    'utforske og beskrive vaer- og klimaforhold og forklare korleis dei oppstaar',
  ],
  content: [
    {
      id: 'geo-3-2-intro',
      type: 'text',
      content: `# Vind og lufttrykk

Vind er luft i beveglse, og det er forskjeller i lufttrykk som setter luften i bevegelse. For aa forstaa vind maa vi foerst forstaa hva lufttrykk er og hvorfor det varierer fra sted til sted.

## Hva er lufttrykk?

**Lufttrykk** er vekten av luftsoeylen over et punkt. Ved havnivaa er normalt lufttrykk ca. **1013 hPa** (hektopascal). Lufttrykket avtar med hoeyden fordi det blir mindre luft over oss jo hoeyere vi kommer.

Forskjeller i lufttrykk ved jordoverflaten oppstaar paa grunn av ulik oppvarming:
- **Varm luft** er lettere og stiger opp - dette skaper **lavtrykk** ved bakken
- **Kald luft** er tyngre og synker ned - dette skaper **hoeytrykk** ved bakken`,
    },
    {
      id: 'geo-3-2-def-lufttrykk',
      type: 'definition',
      title: 'Lufttrykk og trykkforskjeller',
      content: `**Lufttrykk** er kraften luften utover paa en flate. Det maales i hektopascal (hPa) eller millibar (mbar).

**Lavtrykk (syklon):** Omraade med lavere trykk enn omgivelsene. Luft stroemmer inn mot sentrum og stiger opp. Gir ofte skyer, nedbor og ustabilt vaer.

**Hoeytrykk (antisyklon):** Omraade med hoeyere trykk enn omgivelsene. Luft synker ned og stroemmer ut fra sentrum. Gir ofte oppklaring og stabilt vaer.

**Isobarer:** Linjer paa vaerkart som forbinder steder med likt lufttrykk. Tette isobarer betyr stor trykkforskjell og sterk vind.`,
    },
    {
      id: 'geo-3-2-vind',
      type: 'text',
      content: `## Hvordan oppstaar vind?

Vind oppstaar fordi luften stroemmer fra omraader med **hoeytrykk** mot omraader med **lavtrykk**. Jo stoerre trykkforskjellen er, jo sterkere blaeser vinden.

### Corioliseffekten

Jordas rotasjon pavirker vindretningen. Paa **nordlige halvkule** avboeyes vinden mot hoyre, og paa **soerlige halvkule** avboeyes den mot venstre. Dette kalles **corioliseffekten**.

Corioliseffekten gjoer at:
- Vinden ikke blaeser rett fra hoeytrykk til lavtrykk, men i en kurve
- Lavtrykk paa nordlige halvkule har vind som gaar **mot klokka** inn mot sentrum
- Hoeytrykk paa nordlige halvkule har vind som gaar **med klokka** ut fra sentrum

### Friksjon

Naer bakken bremses vinden av **friksjon** mot overflaten. Over hav er friksjonen liten, og vinden er sterkere. Over land, spesielt i kupert terreng, er friksjonen stoerre.`,
    },
    {
      id: 'geo-3-2-def-coriolis',
      type: 'definition',
      title: 'Corioliseffekten',
      content: `**Corioliseffekten** er den tilsynelatende avboeyningen av vind og havstroemmer som skyldes jordas rotasjon.

- Paa **nordlige halvkule**: avboeying mot hoyre
- Paa **soerlige halvkule**: avboeying mot venstre
- Ved **ekvator**: ingen corioliseffekt

Corioliseffekten er avgoerende for vindsystemene paa jorda og for retningen paa lavtrykk og hoeytrykk. Den er oppkalt etter den franske fysikeren Gaspard-Gustave de Coriolis (1835).`,
    },
    {
      id: 'geo-3-2-globalt-vindsystem',
      type: 'text',
      content: `## Det globale vindsystemet

Ulik oppvarming av jordoverflaten mellom ekvator og polene skaper et storskalig vindsystem med tre sirkulasjonsceller paa hver halvkule:

### Hadleycellen (0°-30°)
- Varm luft stiger ved ekvator (den intertropiske konvergenssonen - ITCZ)
- Luften stroemmer mot nord og soer i hoeyden
- Synker ned ved ca. 30° bredde og skaper toerrhoeytrykk (oerkenbelte)
- Returstroemmen langs bakken er **passatvindene** (nordoestpassat paa N-halvkule)

### Ferrelcellen (30°-60°)
- Luft stroemmer fra subtropisk hoeytrykk (30°) mot polart lavtrykk (60°)
- Corioliseffekten gir **vestavindsbeltet** - den dominerende vindretningen i Norge
- Svaert viktig for vaeret i Nord-Europa

### Polarcellen (60°-90°)
- Kald luft synker ned ved polene
- Stroemmer mot lavere breddegrader som **polare oestlige vinder**
- Moeter vestavindene ved ca. 60° bredde - **polarfronten**`,
    },
    {
      id: 'geo-3-2-def-passatvind',
      type: 'definition',
      title: 'Passatvinder og vestavinder',
      content: `**Passatvinder:** Stadig blaasende vinder fra subtropisk hoeytrykk (30°) mot ekvator. Paa nordlige halvkule blaeser de fra nordoest, paa soerlige fra soeroest. Passatvindene var historisk viktige for seilskipsfarten.

**Vestavinder:** Dominerende vinder mellom 30° og 60° bredde som blaeser fra vest mot oest. I Norge gir vestavindene mild og fuktig luft fra Atlanterhavet - hovedaarsaken til det milde vaeret paa Vestlandet.

**Polarfronten:** Moetesonen mellom kalde polare luftmasser og varmere subtropiske luftmasser ved ca. 60° bredde. Her dannes lavtrykk som gir vaerveksling i vaare breeddegrader.`,
    },
    {
      id: 'geo-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Lese et vaerkart',
      problem: 'Paa et vaerkart ser du et lavtrykk vest for Storbritannia med tette isobarer. Hva kan du forvente av vaer i Soer-Norge de naermeste dagene?',
      solution: `**Analyse av vaerkartet:**

1. **Lavtrykk vest for Storbritannia:** Lavtrykk gir ustabilt vaer med skyer og nedbor.

2. **Tette isobarer:** Tette isobarer betyr stor trykkforskjell over kort avstand, altsaa **sterk vind**.

3. **Bevegelsesretning:** Lavtrykk i vestavindbeltet beveger seg normalt fra vest mot oest, saa det vil trolig treffe Norge.

4. **Forventet vaer i Soer-Norge:**
   - Oekende vind fra soer/soervest (varm sektor foran lavtrykket)
   - Skydekke trekker inn, foerst hoey skydekke
   - Nedbor starter som jevnt regn (varmfront)
   - Midlertidig opphold naar varm sektor passerer
   - Kraftigere byger naar kaldfronten passerer
   - Etter kaldfronten: kjoeligere luft, oppsprekning i skydekket, byger

**Tidsperspektiv:** Et slikt lavtrykk bruker typisk 1-2 dager paa aa passere.`,
    },
    {
      id: 'geo-3-2-lokale-vinder',
      type: 'text',
      content: `## Lokale vinder

I tillegg til det globale vindsystemet finnes det lokale vinder som pavirkes av terreng, kystlinje og temperaturforskjeller:

**Sjoebris og landbris:**
- Om dagen: Landet varmes raskere enn havet, luften stiger over land, og kjoeligere luft stroemmer inn fra havet (**sjoebris**)
- Om natten: Havet er varmere, luften stiger over havet, og luft stroemmer fra land mot hav (**landbris**)

**Foehnvind:**
- Fuktig luft presses opp paa losiden av et fjell, avkjoeles og avgir nedbor
- Paa lesiden synker luften og varmes opp (ca. 10 °C per km)
- Gir toerr og varm vind paa lesiden - **foehneffekten**
- I Norge kjent fra Vestlandet og Troenderlag

**Dalvind og fjellvind:**
- Om dagen: Oppvarmet luft stiger oppover dalsidene (**dalvind**)
- Om natten: Avkjoelt luft synker ned i dalbunnen (**fjellvind**)`,
    },
  
    {
      id: 'geo-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Vind** oppstaar paa grunn av trykkforskjeller mellom omraader
- **Corioliseffekten** avboyer vindretningen til hoeyre paa den nordlige halvkule
- **Passatvinder**, **vestavinder** og **polare ostavinder** er de tre viktigste vindbeltene
- **Lavtrykk** gir ustabilt vaer med nedbor, **hoeytrykk** gir stabilt og toerrere vaer
- **Fronter** oppstaar der kald og varm luft moetes og gir typisk norsk vaer`,
    },
    {
      id: 'geo-3-2-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- Meteorologisk institutt: met.no
- yr.no (vaervarsel og vaerdata)
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- Lutgens, F. K. & Tarbuck, E. J. (2019). *The Atmosphere*. Pearson.`,
    },
  ],
  exercises: [
    {
      id: 'geo-3-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den vanligste vindretningen i Norge?',
      options: [
        { id: 'a', text: 'Vestavind', isCorrect: true },
        { id: 'b', text: 'Ostavind', isCorrect: false },
        { id: 'c', text: 'Nordavind', isCorrect: false },
        { id: 'd', text: 'Soerlig vind', isCorrect: false },
      ],
      solution: 'Norge ligger i vestavindbeltet (mellom 30° og 60° N), der den dominerende vindretningen er fra vest. Vestavindene bringer med seg fuktig og mild luft fra Atlanterhavet.',
    },
    {
      id: 'geo-3-2-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skjer med vinden paa grunn av corioliseffekten paa nordlige halvkule?',
      options: [
        { id: 'a', text: 'Den avboeyes mot hoyre', isCorrect: true },
        { id: 'b', text: 'Den avboeyes mot venstre', isCorrect: false },
        { id: 'c', text: 'Den oeker i hastighet', isCorrect: false },
        { id: 'd', text: 'Den stopper opp', isCorrect: false },
      ],
      solution: 'Corioliseffekten avboeyer vind og havstroemmer mot hoyre paa nordlige halvkule og mot venstre paa soerlige halvkule. Dette skyldes jordas rotasjon.',
    },
    {
      id: 'geo-3-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor lavtrykk gir ustabilt vaer med nedbor, mens hoeytrykk gir stabilt vaer med oppklaring.',
      solution: 'I et lavtrykk stroemmer luft inn mot sentrum og presses oppover. Naar luften stiger, avkjoeles den, og vanndampen kondenserer til skyer og nedbor. I et hoeytrykk synker luft ned fra hoeyden. Naar luften synker, varmes den opp, og skyene loeser seg opp - dermed faar vi oppklaring og toert vaer.',
    },
    {
      id: 'geo-3-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv det globale vindsystemet med de tre sirkulasjonscellene. Forklar hvorfor det dannes oerkenbelter rundt 30° bredde.',
      solution: 'Det globale vindsystemet bestaar av tre celler: Hadleycellen (0°-30°), Ferrelcellen (30°-60°) og Polarcellen (60°-90°). Ved ekvator stiger varm luft, stroemmer mot polene i hoeyden, avkjoeles, og synker ned ved ca. 30°. Naar luften synker, komprimeres og varmes den opp. Varm, synkende luft kan holde paa mye fuktighet uten at den kondenserer. Derfor er det toert ved 30° bredde, og det er her vi finner verdens store oerkener (Sahara, arabiske oerkenen). Den synkende luften skaper et hoeytrykk kalt subtropisk hoeytrykk.',
    },
    {
      id: 'geo-3-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr tette isobarer paa et vaerkart?',
      options: [
        { id: 'a', text: 'Sterk vind', isCorrect: true },
        { id: 'b', text: 'Mye nedbor', isCorrect: false },
        { id: 'c', text: 'Hoey temperatur', isCorrect: false },
        { id: 'd', text: 'Lav luftfuktighet', isCorrect: false },
      ],
      solution: 'Isobarer er linjer som forbinder steder med likt lufttrykk. Naar isobarene ligger taett, betyr det stor trykkforskjell over kort avstand, og det gir sterk vind. Vind oppstaar nettopp paa grunn av trykkforskjeller.',
    },
  ],
};

// ============================================================================
// Kapittel 3.3: Nedbor og skyer
// ============================================================================

export const CHAPTER_GEOGRAFI_3_3: TextbookChapter = {
  id: 'geografi-1-3-3',
  courseId: 'geografi',
  chapterNumber: '3.3',
  title: 'Nedbor og skyer',
  description: 'Laer om kondensasjon, skydannelse, nedborstyper og hvorfor nedboren er ulikt fordelt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utforske og beskrive vaer- og klimaforhold og forklare korleis dei oppstaar',
    'gjere greie for korleis vaer oppstaar og korleis lav- og hoegtrykk paverkar vaeret',
  ],
  content: [
    {
      id: 'geo-3-3-intro',
      type: 'text',
      content: `# Nedbor og skyer

Nedbor er vann som faller fra atmosfaeren ned til jordoverflaten som regn, snoe, sludd eller hagl. For at det skal bli nedbor, maa fuktighet i luften foerst kondensere til skyer. Men hva faar luften til aa kondensere, og hvorfor er det saa ulike nedborsmaengder rundt om i verden?

## Fuktighet i luften

Luften inneholder alltid noe vanndamp. Mengden vanndamp luften kan holde paa avhenger av **temperaturen**:
- **Varm luft** kan holde mye vanndamp
- **Kald luft** kan holde lite vanndamp

Naar luften avkjoeles til et visst punkt, kan den ikke lenger holde paa all vanndampen. Da begynner vanndampen aa **kondensere** til smaa draaper, og skyer dannes. Temperaturen der dette skjer kalles **doggpunktet**.`,
    },
    {
      id: 'geo-3-3-def-kondensasjon',
      type: 'definition',
      title: 'Kondensasjon og doggpunkt',
      content: `**Kondensasjon** er prosessen der vanndamp gaar over til flytende vann (draaper). Det skjer naar luften avkjoeles til doggpunktet.

**Doggpunktet** er temperaturen der luften er mettet med vanndamp (100 % relativ fuktighet). Videre avkjoeling gir kondensasjon.

**Relativ fuktighet** angir hvor mye vanndamp luften inneholder i prosent av det den maksimalt kan inneholde ved den temperaturen:
- 100 % = mettet luft (doggpunktet)
- 50 % = luften inneholder halvparten av sin kapasitet

**Kondensasjonskjerner:** Smaa partikler (stoev, salt, pollen) som vanndamp kondenserer paa for aa danne skydr aaper.`,
    },
    {
      id: 'geo-3-3-skydannelse',
      type: 'text',
      content: `## Skydannelse

Skyer dannes naar fuktig luft stiger og avkjoeles. Luften kan tvinges til aa stige paa tre hovedmaater:

### 1. Konveksjon (termisk stigning)
Sola varmer opp bakken, som varmer luften over seg. Varm luft er lettere og stiger. Naar den naar doggpunktet, dannes **hausskyer (cumulus)**. Paa varme sommerdager kan disse vokse til store **bygesky (cumulonimbus)** som gir tordenvider.

### 2. Orografisk loefting
Naar luft tvinges opp av et fjell eller en aaskam, avkjoeles den og danner skyer paa **losiden**. Lesiden blir toerr fordi luften allerede har avgitt fuktigheten. Dette kalles **regnsskygge**.

### 3. Frontal loefting
Naar varm og kald luft moetes langs en **front**, tvinges den varme (lettere) luften opp over den kalde. Varmfronter gir jevn nedbor over store omraader, mens kaldfronter gir kraftigere, mer kortvarig nedbor.`,
    },
    {
      id: 'geo-3-3-def-skytyper',
      type: 'definition',
      title: 'Skytyper',
      content: `Skyer klassifiseres etter hoyde og form:

**Hoeye skyer (over 6 km):**
- **Cirrus:** Tynne, trevlete skyer av iskrystaller. Varsler ofte vaerforandring.
- **Cirrostratus:** Tynne, jevne sloerskyer. Kan gi halo rundt sol/maane.
- **Cirrocumulus:** Smaa, runde klumper i hoeyden.

**Mellomhoeye skyer (2-6 km):**
- **Altostratus:** Jevnt graat lag som gir diffust lys. Ofte foerloper til nedbor.
- **Altocumulus:** Rutemoenster av runde skyer.

**Lave skyer (under 2 km):**
- **Stratus:** Jevnt, graat skylag. Kan gi yr eller lett regn.
- **Stratocumulus:** Rullende, graat skylag med noe struktur.
- **Nimbostratus:** Tykk, moerk nedborssky som gir vedvarende regn eller snoe.

**Vertikal utvikling:**
- **Cumulus:** Hausskyer med flat bunn og blomkaalform. Fint vaer.
- **Cumulonimbus:** Mektig bygsky som kan naa 15 km. Gir torden, hagl og kraftig nedbor.`,
    },
    {
      id: 'geo-3-3-nedborstyper',
      type: 'text',
      content: `## Nedborstyper

Nedbor kan falle i ulike former avhengig av temperaturen mellom skyen og bakken:

| Type | Beskrivelse | Temperatur |
|------|-------------|------------|
| **Regn** | Vanndraaper stoerre enn 0,5 mm | Over 0 °C hele veien |
| **Yr** | Svart smaa draaper (under 0,5 mm) | Over 0 °C, fra stratus-skyer |
| **Snoe** | Iskrystaller som klumper seg til fnugg | Under 0 °C hele veien |
| **Sludd** | Blanding av regn og snoe | Rundt 0 °C |
| **Hagl** | Iskuler dannet i bygeskyer | Frys-tin-syklus i cumulonimbus |
| **Underkjoelt regn** | Regn som fryser ved kontakt med bakken | Under 0 °C ved bakken |

**Underkjoelt regn** er spesielt farlig fordi det danner **is paa veier og gangstier** umiddelbart.`,
    },
    {
      id: 'geo-3-3-nedborsfordeling',
      type: 'text',
      content: `## Nedborsfordeling i verden

Nedboren er svart ulikt fordelt:

**Mest nedbor:**
- Tropiske omraader ved ekvator (ITCZ): Sterk oppvarming og konveksjon gir daglige byger
- Losiden av fjell i vestavindbeltet: Orografisk nedbor (f.eks. Vestlandet i Norge)

**Minst nedbor:**
- Subtropisk hoeytrykk (30° N/S): Synkende, toerr luft gir oerkener
- Polaromraadene: Kald luft inneholder lite fuktighet
- Regnsskyggeomraader: Lesiden av fjellkjeder

### Nedbor i Norge

Norge har svart store forskjeller i nedbor:
- **Vestlandet:** 2000-4000 mm per aar (losiden av fjellene)
- **Oestlandet:** 500-800 mm per aar (regnsskygge)
- **Indre Troms/Finnmark:** 300-500 mm per aar

Bergen er kjent for aa ha ca. 2250 mm nedbor i aaret fordelt paa ca. 230 nedbordager. Til sammenligning faar Oslo kun ca. 800 mm.`,
    },
    {
      id: 'geo-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Hvorfor er det saa vaatt paa Vestlandet?',
      problem: 'Forklar hvorfor Vestlandet faar saa mye mer nedbor enn Oestlandet.',
      solution: `**Forklaring:**

1. **Vestavindene:** Norge ligger i vestavindbeltet, saa dominerende vinder kommer fra vest med fuktig luft fra Atlanterhavet.

2. **Orografisk loefting:** Naar den fuktige luften treffer fjellene paa Vestlandet, tvinges den oppover. Luften avkjoeles, vanndampen kondenserer, og det faller nedbor paa vestsiden.

3. **Regnsskygge:** Naar luften passerer over fjellene til oestsiden, har den allerede mistet mye av fuktigheten. I tillegg synker luften og varmes opp paa oestsiden, noe som gjoer at den kan holde mer fuktighet (foehneffekt).

**Resultat:**
- Vestlandet faar 2000-4000 mm nedbor per aar
- Oestlandet faar 500-800 mm per aar

Denne forskjellen er et klassisk eksempel paa **orografisk nedbor** og **regnsskyggeeffekten**.`,
    },
  
    {
      id: 'geo-3-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Nedbor** oppstaar naar fuktig luft stiger og avkjoeles til doggpunktet
- Det finnes tre hovedtyper: **orografisk** (fjellnedbor), **konvektiv** (bygevaer) og **frontal** nedbor
- **Skytyper** deles inn etter hoeyde: cirrus (hoey), alto (middels), stratus og cumulus (lav)
- **Vannsyklusen** beskriver vannets kretslop mellom hav, atmosfaere og land
- Nedborsmoensteret paa jorda varierer med breddegrader, terreng og naerhet til hav`,
    },
    {
      id: 'geo-3-3-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- Meteorologisk institutt: met.no
- NVE (Norges vassdrags- og energidirektorat): nve.no
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- WMO (Verdens meteorologiorganisasjon): wmo.int`,
    },
  ],
  exercises: [
    {
      id: 'geo-3-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er doggpunktet?',
      options: [
        { id: 'a', text: 'Temperaturen der luften er mettet med vanndamp og kondensasjon begynner', isCorrect: true },
        { id: 'b', text: 'Den hoeyeste temperaturen i loepe av et doegn', isCorrect: false },
        { id: 'c', text: 'Temperaturen der vann fryser', isCorrect: false },
        { id: 'd', text: 'Forskjellen mellom dag- og nattemperatur', isCorrect: false },
      ],
      solution: 'Doggpunktet er temperaturen der luften naar 100 % relativ fuktighet. Videre avkjoeling foerer til kondensasjon - vanndamp gaar over til flytende vann og danner dogg, skyer eller taake.',
    },
    {
      id: 'geo-3-3-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er regnsskygge?',
      options: [
        { id: 'a', text: 'Toerr leside av et fjell der luften synker og varmes opp', isCorrect: true },
        { id: 'b', text: 'Skyggen som danner seg under store regnbyger', isCorrect: false },
        { id: 'c', text: 'Omraader der skyene aldri slipper gjennom sollys', isCorrect: false },
        { id: 'd', text: 'Steder der nedbor faller bare om natten', isCorrect: false },
      ],
      solution: 'Regnsskygge (rain shadow) er omraadet paa lesiden av en fjellkjede der det er toert. Luften avgir fuktighet som nedbor paa losiden, og naar den synker paa lesiden, varmes den opp og kan holde mer fuktighet. Oestlandet i Norge ligger i regnsskyggen av fjellene.',
    },
    {
      id: 'geo-3-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre hovedmaatene luft kan tvinges til aa stige paa, og forklar hvordan dette foerer til nedbor.',
      solution: '1) Konveksjon: Sola varmer bakken, varm luft stiger, avkjoeles og danner hausskyer/bygeskyer. 2) Orografisk loefting: Luft tvinges opp av fjell, avkjoeles og gir nedbor paa losiden. 3) Frontal loefting: Langs fronter (moete mellom kalde og varme luftmasser) tvinges varm luft opp over den kalde. Alle tre mekanismene foerer til at luften avkjoeles til doggpunktet, vanndamp kondenserer, skyer dannes, og til slutt faller nedbor.',
    },
    {
      id: 'geo-3-3-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar sammenhengen mellom temperatur, luftfuktighet og skydannelse. Bruk begrepene relativ fuktighet, doggpunkt og kondensasjon.',
      solution: 'Varm luft kan holde mer vanndamp enn kald luft. Relativ fuktighet angir hvor mye vanndamp luften har i prosent av sin kapasitet ved den aktuelle temperaturen. Naar luft stiger (f.eks. ved konveksjon, orografisk eller frontal loefting), avkjoeles den ca. 1 °C per 100 m. Etter hvert naar luften doggpunktet - temperaturen der relativ fuktighet er 100 %. Da begynner kondensasjon paa kondensasjonskjerner, smaa draaper dannes, og en sky oppstaar. Skyens bunnhoyde indikerer hoeyden der doggpunktet naas.',
    },
    {
      id: 'geo-3-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken by er kjent for mest nedbor i Norge?',
      options: [
        { id: 'a', text: 'Bergen', isCorrect: true },
        { id: 'b', text: 'Oslo', isCorrect: false },
        { id: 'c', text: 'Tromsoe', isCorrect: false },
        { id: 'd', text: 'Trondheim', isCorrect: false },
      ],
      solution: 'Bergen faar ca. 2250 mm nedbor per aar fordelt paa ca. 230 nedbordager. Dette skyldes at byen ligger paa losiden av fjellene der fuktig atlanterhavsluft tvinges opp og avgir nedbor (orografisk nedbor).',
    },
  ],
};

// ============================================================================
// Kapittel 3.4: Klimasoner og klimaklassifikasjon
// ============================================================================

export const CHAPTER_GEOGRAFI_3_4: TextbookChapter = {
  id: 'geografi-1-3-4',
  courseId: 'geografi',
  chapterNumber: '3.4',
  title: 'Klimasoner og klimaklassifikasjon',
  description: 'Oversikt over jordas klimasoner, Koeppens klimaklassifikasjon og faktorene som bestemmer klima.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjere greie for klimasonene paa jorda og forklare kva som skaper dei ulike klimatypane',
    'utforske og presentere geografiske forhold ved hjelp av kart og digitale verktoy',
  ],
  content: [
    {
      id: 'geo-3-4-intro',
      type: 'text',
      content: `# Klimasoner og klimaklassifikasjon

## Forskjellen mellom vaer og klima

- **Vaer** er tilstanden i atmosfaeren paa et bestemt sted til en bestemt tid (temperatur, nedbor, vind, skyer)
- **Klima** er gjennomsnittlig vaer over en lang periode (minst 30 aar) i et omraade

Vi kan ha varmt vaer en dag i Bergen, men klimaet er mildt og nedborsrikt.

## Hva bestemmer klimaet?

Klimaet paa et sted bestemmes av flere faktorer:

1. **Breddegraden:** Den viktigste faktoren. Bestemmer hvor mye solenergi stedet mottar.
2. **Naerhet til havet:** Hav gir jevnere temperatur (maritim vs. kontinentalt klima).
3. **Havstroemmer:** Varme stroemmer (Golfstroemmen) varmer, kalde stroemmer kjoeler.
4. **Hoyde over havet:** Temperaturen synker ca. 0,6 °C per 100 m.
5. **Terreng og vindforhold:** Fjell pavirker nedbors- og vindmoenstre.
6. **Vegetasjon:** Skog pavirker fuktighet og temperatur lokalt.`,
    },
    {
      id: 'geo-3-4-def-klima',
      type: 'definition',
      title: 'Vaer og klima',
      content: `**Vaer:** Atmosfaerens tilstand paa et gitt sted og tidspunkt, inkludert temperatur, fuktighet, nedbor, vind, lufttrykk og skydekke.

**Klima:** Det gjennomsnittlige vaeret paa et sted over en periode paa minst 30 aar. Inkluderer gjennomsnitt, ekstremer og variasjoner.

**Klimanormaler:** Gjennomsnittsverdier beregnet over 30-aarsperioder. Norges gjeldende klimanormaler er fra perioden 1991-2020.

**Maritim klima:** Klima paavirket av naerhet til havet - milde vintre, kjoelige somre, mye nedbor.

**Kontinentalt klima:** Klima i innlandet - kalde vintre, varme somre, lite nedbor.`,
    },
    {
      id: 'geo-3-4-klimasoner',
      type: 'text',
      content: `## Jordas klimasoner

Jordas klima deles grovt inn i fem hovedsoner basert paa breddegraden:

### 1. Tropisk klima (0°-23,5°)
- Hoey temperatur hele aaret (over 18 °C alle maaneder)
- Mye nedbor, spesielt ved ekvator
- **Tropisk regnskog:** Varm og fuktig hele aaret (Amazonas, Kongo)
- **Savanne:** Toerr- og regntid veksler

### 2. Subtropisk/toert klima (23,5°-35°)
- Hete somre, milde vintre
- Variabel nedbor - fra oerken til middelhavsklima
- **Oerken:** Ekstremt toert (Sahara, Gobi)
- **Middelhavsklima:** Toerr sommer, mild og fuktig vinter

### 3. Temperert klima (35°-60°)
- Tydelige aarstider
- Moderat nedbor
- **Oseanisk:** Mildt, fuktig (Vestlandet, Storbritannia)
- **Kontinentalt:** Store temperaturforskjeller (Oestlandet, innlands-Europa)

### 4. Subarktisk/borealt klima (55°-70°)
- Lange, kalde vintre og korte somre
- Taigaskog (barskog) dominerer
- Troms og Finnmark har delvis subarktisk klima

### 5. Polart klima (over 70°)
- Gjennomsnitt under 10 °C selv den varmeste maaneden
- **Tundra:** Permafrost, kun lav vegetasjon
- **Iskappe:** Permanent is og snoe (Groenland, Antarktis)`,
    },
    {
      id: 'geo-3-4-def-koeppen',
      type: 'definition',
      title: 'Koeppens klimaklassifikasjon',
      content: `**Koeppens klimaklassifikasjon** er verdens mest brukte system for aa dele inn klimatyper. Det ble utviklet av den russisk-tyske klimatologen Wladimir Koeppen i 1884 og er senere revidert.

Systemet bruker bokstavkoder basert paa temperatur og nedbor:

**Hovedgruppene:**
- **A** - Tropisk klima (varm hele aaret)
- **B** - Toert klima (fordampning stoerre enn nedbor)
- **C** - Temperert klima (milde vintre)
- **D** - Kontinentalt klima (kalde vintre)
- **E** - Polart klima (kaldt hele aaret)

**Eksempler:**
- **Cfb** = Temperert, uten toerrtid, varm sommer (Vestlandet, Storbritannia)
- **Dfb** = Kaldt, uten toerrtid, varm sommer (Oestlandet, Soer-Finland)
- **ET** = Tundra (Finnmarksvidda)`,
    },
    {
      id: 'geo-3-4-havstroemmer',
      type: 'text',
      content: `## Havstroemmenes pavirkning paa klima

Havstroemmer transporterer enorme mengder varmeenergi rundt kloden og pavirker klimaet langs kystene dramatisk.

### Golfstroemmen og den norske atlanterhavsstroemmen

**Golfstroemmen** er en varm havstroem som starter i Mexicogolfen og stroemmer nordoestover over Atlanterhavet. Utenfor Norge fortsetter den som **den norske atlanterhavsstroemmen**.

**Virkningen paa Norges klima:**
- Gjoer at norskekysten er **isfri** hele aaret, selv i Finnmark
- Gir Norge et klima som er **10-15 °C mildere** enn breddegraden tilsier
- Tromsoe (69° N) har gjennomsnitt paa -4 °C i januar, mens steder paa samme breddegrad i Canada og Sibir kan ha -30 °C

### Kalde havstroemmer
Kalde stroemmer som **Labradorstroemmen** (oestkysten av Canada) gir kaldere klima enn breddegraden tilsier. Derfor er vintrene i New York (-1 °C i januar) mye kaldere enn i Bergen (+2 °C), selv om de ligger paa omtrent samme breddegrad.`,
    },
    {
      id: 'geo-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Klimaforskjeller i Norge',
      problem: 'Sammenlign klimaet i Bergen, Oslo og Tromsoe. Forklar forskjellene ved hjelp av klimafaktorene.',
      solution: `**Bergen (60° N, vestkysten):**
- Klimatype: Oseanisk/maritimt (Cfb)
- Januar: +2 °C, Juli: +15 °C - liten forskjell
- Nedbor: ca. 2250 mm/aar - svart vaatt
- Pavirkes sterkt av Atlanterhavet og orografisk nedbor

**Oslo (60° N, innlandet):**
- Klimatype: Overgang maritimt-kontinentalt (Dfb)
- Januar: -4 °C, Juli: +18 °C - stoerre forskjell
- Nedbor: ca. 800 mm/aar - moderat
- Regnsskygge fra fjellene, mer kontinentalt preg

**Tromsoe (69° N, nordlig kyst):**
- Klimatype: Subarktisk/maritimt
- Januar: -4 °C, Juli: +12 °C
- Nedbor: ca. 1000 mm/aar
- Mildt for breddegraden pga. Golfstroemmen, men kort vekstsesong

**Viktigste forskjeller skyldes:**
1. Naerhet til havet (Bergen vs. Oslo)
2. Breddegraden (Tromsoe vs. de andre)
3. Orografiske forhold (nedborsforskjeller)
4. Golfstroemmen (mildner alle tre, spesielt Tromsoe)`,
    },
    {
      id: 'geo-3-4-klimadiagram',
      type: 'text',
      content: `## Klimadiagram

Et **klimadiagram** er en grafisk framstilling av temperatur og nedbor gjennom aaret for et sted. Det er et viktig verktoy for aa sammenligne klimaet paa ulike steder.

### Slik leser du et klimadiagram

- **Soeyler:** Viser maanedlig nedbor (mm) - leses paa hoyre akse
- **Kurve:** Viser maanedlig gjennomsnittstemperatur (°C) - leses paa venstre akse
- **X-aksen:** Maanedene januar-desember

### Hva kan vi lese ut?

- **Aarstidsvariasjoner:** Store forskjeller mellom sommer og vinter?
- **Toerr- og regntid:** Er det perioder med lite eller mye nedbor?
- **Klimatype:** Maritimt (jevn temperatur), kontinentalt (store svingninger), tropisk (jevnt varmt)?

**Tips:** Naar nedborssoeylen er hoeyere enn temperaturkurven (maalt i dobbel skala), er det overskudd av fuktighet. Naar temperaturkurven er over, er det toerrtid.`,
    },
    {
      id: 'geo-3-4-kontinentalitet',
      type: 'text',
      content: `## Kontinentalitet og maritimitet

Avstanden fra havet pavirker klimaet dramatisk:

**Maritimt klima (havnart):**
- Smaa temperaturforskjeller mellom sommer og vinter
- Mye nedbor, ofte skydekke
- Havet fungerer som en varmebuffer
- Eksempler: Bergen, Stavanger, Storbritannia

**Kontinentalt klima (innlandsklima):**
- Store temperaturforskjeller mellom sommer og vinter
- Mindre nedbor, mer sol
- Inget hav til aa jevne ut temperaturen
- Eksempler: Roerosomraadet, Moskva, innlands-Canada

**Aarsaken:** Vann har mye hoeyere varmekapasitet enn land. Havet varmes sakte opp og avgir varme sakte. Land varmes raskt opp og avkjoeles raskt. Derfor demper naerhet til havet temperatursvingningene.`,
    },
  
    {
      id: 'geo-3-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Koeppens klimaklassifikasjon** deler verdens klima inn i fem hovedgrupper: A (tropisk), B (toerrt), C (temperert), D (kaldtemperert) og E (polart)
- **Klimasoner** bestemmes av breddegrad, hoyde over havet, naerhet til hav og havstroemmer
- **Tropisk klima** har hoey temperatur og mye nedbor hele aaret
- **Temperert klima** (som i Norge) har fire aarstider og vekslende vaer
- **Polart klima** har lave temperaturer og lite nedbor`,
    },
    {
      id: 'geo-3-4-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- Meteorologisk institutt: met.no
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.
- Koeppen Climate Classification: britannica.com
- NASA Earth Observatory: earthobservatory.nasa.gov`,
    },
  ],
  exercises: [
    {
      id: 'geo-3-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom vaer og klima?',
      options: [
        { id: 'a', text: 'Vaer er tilstanden akkurat naa, klima er gjennomsnittet over minst 30 aar', isCorrect: true },
        { id: 'b', text: 'Vaer gjelder paa land, klima gjelder paa havet', isCorrect: false },
        { id: 'c', text: 'Vaer handler om temperatur, klima handler om nedbor', isCorrect: false },
        { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
      ],
      solution: 'Vaer er atmosfaerens tilstand paa et bestemt sted og tidspunkt (kan endre seg raskt). Klima er det gjennomsnittlige vaeret over minst 30 aar. Vi kan ha kaldt vaer i et mildt klima.',
    },
    {
      id: 'geo-3-4-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor er vintrene i Bergen mildere enn i Oslo, selv om byene ligger paa omtrent samme breddegrad?',
      options: [
        { id: 'a', text: 'Bergen har maritimt klima pavirket av havet og Golfstroemmen', isCorrect: true },
        { id: 'b', text: 'Bergen ligger naermere ekvator', isCorrect: false },
        { id: 'c', text: 'Bergen har flere innbyggere som varmer opp byen', isCorrect: false },
        { id: 'd', text: 'Bergen er omgitt av hoeyere fjell', isCorrect: false },
      ],
      solution: 'Bergen ligger ved kysten og pavirkes sterkt av havet og Golfstroemmen (maritimt klima). Havet avkjoeles sakte og avgir varme gjennom vinteren, noe som gir milde vintre. Oslo er lenger fra havet og har et mer kontinentalt klima med kaldere vintre.',
    },
    {
      id: 'geo-3-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de fem hovedklimassonene paa jorda og gi et eksempel paa hvert.',
      solution: '1) Tropisk klima (0°-23,5°): Varmt hele aaret, mye nedbor - eks. Amazonas. 2) Subtropisk/toert klima (23,5°-35°): Hete somre, lite nedbor i oerkener - eks. Sahara. 3) Temperert klima (35°-60°): Tydelige aarstider - eks. Norge. 4) Subarktisk klima (55°-70°): Lange kalde vintre, taigaskog - eks. Nord-Finland. 5) Polart klima (over 70°): Kaldt hele aaret, tundra eller iskappe - eks. Svalbard.',
    },
    {
      id: 'geo-3-4-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvordan Golfstroemmen pavirker klimaet i Norge. Hva kan skje med Norges klima dersom Golfstroemmen svekkes?',
      solution: 'Golfstroemmen transporter varm vann fra tropiske omraader nordover til norskekysten. Den gjoer at: 1) Kysten er isfri hele aaret. 2) Vintrene er 10-15 °C mildere enn breddegraden tilsier. 3) Tromsoe paa 69° N har mildere vintre enn steder paa 40° N i innlands-Canada. Dersom Golfstroemmen svekkes (noe forskere frykter pga. issmelting paa Groenland), kan Norge faa betydelig kaldere vintre, kortere vekstsesong, og mer is langs kysten. Klimaet ville ligne mer paa det man finner i Canada paa tilsvarende breddegrader.',
    },
    {
      id: 'geo-3-4-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken klimaklassifikasjon er den mest brukte i verden?',
      options: [
        { id: 'a', text: 'Koeppens klimaklassifikasjon', isCorrect: true },
        { id: 'b', text: 'Bergens klimaskala', isCorrect: false },
        { id: 'c', text: 'FNs klimastandard', isCorrect: false },
        { id: 'd', text: 'Mercators klimainndeling', isCorrect: false },
      ],
      solution: 'Koeppens klimaklassifikasjon er verdens mest brukte system. Det ble utviklet av Wladimir Koeppen i 1884 og bruker bokstavkoder basert paa temperatur og nedbor for aa dele inn jordas klima i hovedgrupper (A-E).',
    },
  ],
};

// ============================================================================
// Kapittel 3.5: Vaer og klima i Norge
// ============================================================================

export const CHAPTER_GEOGRAFI_3_5: TextbookChapter = {
  id: 'geografi-1-3-5',
  courseId: 'geografi',
  chapterNumber: '3.5',
  title: 'Vaer og klima i Norge',
  description: 'Norges varierte klima, vaersystemer, fronter og ekstremvaer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'utforske og beskrive vaer- og klimaforhold og forklare korleis dei oppstaar',
    'analysere samanhengar mellom naturforhold og samfunn i Noreg',
  ],
  content: [
    {
      id: 'geo-3-5-intro',
      type: 'text',
      content: `# Vaer og klima i Norge

Norge er et land med store klimaforskjeller. Fra det milde kystklimaet paa Soerlandet til arktiske forhold paa Svalbard, og fra det regntunge Vestlandet til det toerre innlandet - faa land har saa stor klimavariasjon innenfor sine grenser.

## Hvorfor er Norges klima saa variert?

Flere faktorer bidrar:
- **Stor utstrekning i nord-soer-retning:** Lindesnes (58° N) til Nordkapp (71° N) - 13 breddegrader
- **Kystlinje og fjell:** Fjellkjeden skiller kystklima fra innlandsklima
- **Golfstroemmen:** Gjoer kysten uvanlig mild for breddegraden
- **Hoeydeforskjeller:** Fra havnivaa til 2469 m (Galdhopiggen)
- **Polarfronten:** Norges breddegrad ligger naer polarfronten, der varme og kalde luftmasser moetes`,
    },
    {
      id: 'geo-3-5-def-fronter',
      type: 'definition',
      title: 'Vaerfronter',
      content: `En **front** er grenseomraadet mellom to luftmasser med ulik temperatur og fuktighet.

**Varmfront:** Varm luft glir opp over kaldere luft. Gir gradvis skydannelse og jevn nedbor over store omraader. Typisk: foerst hoey skydekke (cirrus), saa stadig tykkere skyer, saa nedbor.

**Kaldfront:** Kald luft presser seg under varm luft. Gir brattere skydannelse, kraftigere men kortvarig nedbor, ofte med byger. Temperaturen faller etter passasjen.

**Okkludert front (okklusjon):** Naar kaldfronten innhenter varmfronten. Den varme luften loeftes helt opp fra bakken. Vanlig i eldre lavtrykk.

**Varm sektor:** Omraadet mellom varmfronten og kaldfronten i et lavtrykk. Her er det ofte mildere, med opphold eller lett nedbor.`,
    },
    {
      id: 'geo-3-5-vaersystemer',
      type: 'text',
      content: `## Vaersystemer som pavirker Norge

### Lavtrykk fra vest

Det meste av Norges vaer styres av lavtrykk som dannes over Nord-Atlanteren og beveger seg oestover. Disse lavtrykkene foelger gjerne bestemte baner:

- **Soerlig bane:** Lavtrykk over Nordsjoen - pavirker Soer-Norge mest
- **Nordlig bane:** Lavtrykk over Island/Norskehavet - pavirker Midt- og Nord-Norge
- **Polar lavtrykk:** Smaa, intense lavtrykk som kan gi plutselig kraftig vaer i Nord-Norge

### Hoeytrykk og blokkering

Noen ganger etablerer det seg et stabilt hoeytrykk over Skandinavia eller Nordsjoen. Dette **blokkerer** lavtrykkene og kan gi:
- **Sommer:** Langvarig fint vaer, varmeboelger, torkeffare
- **Vinter:** Langvarig kulde, klarvaaer, inversjon

### Polarfronten

Polarfronten er grensen mellom kalde polare luftmasser og varmere subtropiske luftmasser. Norges plassering naer polarfronten betyr at vi opplever stadig veksling mellom varm og kald luft - derfor er vaeret saa foranderlig.`,
    },
    {
      id: 'geo-3-5-klimaregioner',
      type: 'text',
      content: `## Norges klimaregioner

### Vestlandet
- Maritimt klima med milde vintre og kjoelige somre
- Mest nedbor i Norge (2000-4000 mm)
- Mye vind og skydekke
- Snoefattige vintre ved kysten

### Oestlandet
- Overgangsklima mellom maritimt og kontinentalt
- Kaldere vintre og varmere somre enn Vestlandet
- Moderat nedbor (500-800 mm)
- Stabile snoevvintre i innlandet

### Troenderlag
- Variabelt klima, paavirket av baade kyst og innland
- Trondheim: moderat nedbor, milde kystvintre
- Innlandet: kaldere, mer kontinentalt

### Nord-Norge
- Mildt kystklima pga. Golfstroemmen (Lofoten, Tromsoe)
- Subarktisk innlandsklima (Finnmarksvidda)
- Midnattssol om sommeren, moerketid om vinteren
- Store forskjeller mellom kyst og innland

### Fjellomraadene
- Alpint klima med lav temperatur og mye vind
- Temperaturen synker ca. 0,6 °C per 100 m
- Tregrensa ligger paa 800-1200 m (lavere nordover)
- Hardangervidda har arktisk preg til tross for soerlig beliggenhet`,
    },
    {
      id: 'geo-3-5-def-ekstremvaer',
      type: 'definition',
      title: 'Ekstremvaer i Norge',
      content: `**Ekstremvaer** er vaerhendelser som er uvanlig intense eller langvarige og kan foere til skader paa mennesker, eiendom og infrastruktur.

**Typer ekstremvaer i Norge:**
- **Stormer:** Kraftig vind, spesielt langs kysten om hoesten og vinteren
- **Styrtregn:** Intense nedborepisoder som kan gi flom og jordras
- **Torerrke:** Langvarig toert vaer, oftest paa Oestlandet om sommeren
- **Varmeboelger:** Langvarig varme, oekende problem med klimaendringer
- **Snoefoek:** Kraftig vind kombinert med snoe, spesielt i fjellomraader

**Meteorologisk institutt** utsteder varsler med faregradering:
- **Gult nivaa:** Moderat fare, vaer oppmerksom
- **Oransje nivaa:** Alvorlig fare, vaer forberedt
- **Roedt nivaa:** Ekstrem fare, sikre deg`,
    },
    {
      id: 'geo-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Et lavtrykk passerer Soer-Norge',
      problem: 'Beskriv typisk vaerforlop naar et lavtrykk passerer Soer-Norge fra vest mot oest.',
      solution: `**Typisk vaerforlop:**

**1. Foer lavtrykket (12-24 timer foer):**
- Hoey, tynn skydekke (cirrus) trekker inn fra vest
- Ofte halo rundt sol/maane
- Svak soerlig vind, fallende lufttrykk

**2. Varmfronten passerer:**
- Gradvis tykkere skyer (altostratus, nimbostratus)
- Jevnt regn eller snoe starter
- Temperaturen stiger gradvis
- Oekende soeroestlig vind

**3. Varm sektor:**
- Temperaturen er hoeyere (mild luft)
- Opphold eller lett nedbor (yr)
- Skydekke, men lysere
- Soervestlig vind

**4. Kaldfronten passerer:**
- Plutselig kraftigere nedbor, gjerne med byger
- Vinden dreier til vest/nordvest og kan oeke
- Temperaturen faller merkbart
- Skyene bryter opp ganske raskt

**5. Etter kaldfronten:**
- Kaldere luft, byger (gjerne med sol mellom)
- Nordvestlig vind som gradvis avtar
- Lufttrykket stiger igjen
- Oppklaring fra vest

**Hele forloepet varer typisk 1-2 doegn.**`,
    },
    {
      id: 'geo-3-5-aarsvariasjoner',
      type: 'text',
      content: `## Aarstidene i Norge

### Vaar (mars-mai)
- Raskt oekende dagslengde, spesielt i nord
- Snoesmelting og flomfare
- Store temperatursvingninger
- Mest stabile perioden paa Oestlandet

### Sommer (juni-august)
- Midnattssol i nord, lange dager i soer
- Varmest i juli (16-18 °C paa Oestlandet)
- Byger og tordenvaver, spesielt paa Oestlandet
- Relativt stabilt vaer sammenlignet med hoest og vinter

### Hoest (september-november)
- Raskt avtagende dagslengde
- Oekende stormaktivitet, spesielt langs kysten
- Mye nedbor, spesielt paa Vestlandet
- Gradvis kjoelige temperaturer

### Vinter (desember-februar)
- Moerketid i nord, korte dager i soer
- Stoerste temperaturforskjeller mellom kyst og innland
- Stormer og kraftig nedbor paa kysten
- Stabile kuldeperioder i innlandet`,
    },
    {
      id: 'geo-3-5-temperaturrekorder',
      type: 'text',
      content: `## Norske vaerrekorder

Noen bemerkelssesverdige vaerrekorder i Norge:

**Temperatur:**
- Hoeyeste: +35,6 °C - Nesbyen, Buskerud (20. juni 1970)
- Laveste: -51,4 °C - Karasjok, Finnmark (1. januar 1886)

**Nedbor:**
- Mest paa ett doegn: 229,6 mm - Indre Matre, Hordaland (26. november 1940)
- Mest paa ett aar: ca. 5600 mm - Brekke i Sogn og Fjordane

**Vind:**
- Sterkeste vindkast: 77 m/s - Senja, Troms (1. januar 1992)

Disse rekordene illustrerer Norges enorme klimavariasjon - fra arktisk kulde i Finnmark til nesten tropiske temperaturer i Hallingdal, og fra knapmaal med nedbor paa Finnmarksvidda til noen av Europas vaateste steder paa Vestlandet.`,
    },
  
    {
      id: 'geo-3-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Jordas klima har variert naturlig gjennom historien med istider og varmeperioder
- **Milankovic-sykluser** (variasjoner i jordas bane) pavirker klimaet over titusenvis av aar
- **Vulkanutbrudd** kan kjoele ned klimaet midlertidig ved aa blokkere solstraaling
- **El Nino og La Nina** er naturlige klimasvingninger i Stillehavet med globale konsekvenser
- **Havstroemmer** som Golfstroemmen har stor betydning for klimaet i kystomraader`,
    },
    {
      id: 'geo-3-5-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- IPCC (FNs klimapanel): ipcc.ch
- NASA Climate: climate.nasa.gov
- Meteorologisk institutt: met.no
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.`,
    },
  ],
  exercises: [
    {
      id: 'geo-3-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken havstroem gjoer at Norges kystklima er mildere enn breddegraden tilsier?',
      options: [
        { id: 'a', text: 'Golfstroemmen', isCorrect: true },
        { id: 'b', text: 'Labradorstroemmen', isCorrect: false },
        { id: 'c', text: 'Humboldtstroemmen', isCorrect: false },
        { id: 'd', text: 'Benguelastroemmen', isCorrect: false },
      ],
      solution: 'Golfstroemmen (og dens forlengelse, den norske atlanterhavsstroemmen) transporterer varmt vann fra tropene nordover langs norskekysten. Den gjoer vintrene 10-15 °C mildere enn de ellers ville vaert.',
    },
    {
      id: 'geo-3-5-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva skjer typisk naar en kaldfront passerer?',
      options: [
        { id: 'a', text: 'Kraftig, kortvarig nedbor, temperaturen faller og vinden dreier', isCorrect: true },
        { id: 'b', text: 'Langvarig jevn nedbor over mange timer', isCorrect: false },
        { id: 'c', text: 'Plutselig oppklaring og stigende temperatur', isCorrect: false },
        { id: 'd', text: 'Stille vind og taake', isCorrect: false },
      ],
      solution: 'Naar en kaldfront passerer, presser kald luft seg under den varme luften, noe som gir bratt skydannelse og kraftige, men relativt kortvarige byger. Temperaturen faller merkbart, og vinden dreier typisk fra soewest til nordvest.',
    },
    {
      id: 'geo-3-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Sammenlign klimaet paa Vestlandet og Oestlandet. Nevn minst tre forskjeller og forklar aarsakene.',
      solution: '1) Nedbor: Vestlandet faar 2000-4000 mm, Oestlandet 500-800 mm. Aarsak: Orografisk nedbor paa Vestlandet og regnsskygge paa Oestlandet. 2) Temperaturvariasjoner: Vestlandet har milde vintre og kjoelige somre (maritimt), Oestlandet har kaldere vintre og varmere somre (kontinentalt). Aarsak: Naerhet til havet demper svingningene paa Vestlandet. 3) Snoe: Vestlandet har lite snoe ved kysten, Oestlandet har stabile snoevintre. Aarsak: Milde vintertemperaturer paa Vestlandet gir regn i stedet for snoe.',
    },
    {
      id: 'geo-3-5-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor Lofoten (68° N) har mildere vintre enn Oslo (60° N), til tross for at Lofoten ligger 8 breddegrader lenger nord.',
      solution: 'Lofoten har mildere vintre enn Oslo pga. tre hovedfaktorer: 1) Golfstroemmen varmer havet rundt Lofoten hele aaret. Havtemperaturen holder seg over 4 °C selv midt paa vinteren. 2) Lofotens beliggenhet ved kysten gir maritimt klima - havet fungerer som varmebuffer og avgir varme om vinteren. 3) Oslo ligger i innlandet og har et mer kontinentalt klima. Uten havets dempende effekt faller temperaturen mye lavere. Resultatet: Lofoten har januar-gjennomsnitt paa ca. -1 °C, mens Oslo har ca. -4 °C.',
    },
    {
      id: 'geo-3-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken del av Norge faar mest nedbor?',
      options: [
        { id: 'a', text: 'Vestlandet', isCorrect: true },
        { id: 'b', text: 'Oestlandet', isCorrect: false },
        { id: 'c', text: 'Finnmark', isCorrect: false },
        { id: 'd', text: 'Troenderlag', isCorrect: false },
      ],
      solution: 'Vestlandet faar klart mest nedbor (2000-4000 mm/aar) paa grunn av orografisk nedbor: Fuktig atlanterhavsluft tvinges opp av fjellene, avkjoeles og avgir fuktigheten som nedbor.',
    },
  ],
};

// ============================================================================
// Kapittel 3.6: Klimaendringer og drivhuseffekten
// ============================================================================

export const CHAPTER_GEOGRAFI_3_6: TextbookChapter = {
  id: 'geografi-1-3-6',
  courseId: 'geografi',
  chapterNumber: '3.6',
  title: 'Klimaendringer og drivhuseffekten',
  description: 'Forstaa menneskeskapte klimaendringer, aarsaker, konsekvenser og vitenskapelig dokumentasjon.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjere greie for klimaendringane og droefte mogelege konsekvensar lokalt, nasjonalt og globalt',
    'analysere og droefte ulike aarsaker til klimaendringar',
  ],
  content: [
    {
      id: 'geo-3-6-intro',
      type: 'text',
      content: `# Klimaendringer og drivhuseffekten

Jordas klima har alltid variert naturlig, med istider og varmeperioder over tusenvis og millioner av aar. Men de klimaendringene vi opplever naa, skjer mye raskere enn noe vi kan finne i geologiske arkiver. FNs klimapanel (IPCC) slaar fast at **menneskelig aktivitet er hovedaarsaken** til oppvarmingen siden midten av 1900-tallet.

## Fakta om global oppvarming

- Jordas gjennomsnittstemperatur har oekett med ca. **1,1 °C** siden forindustriell tid (1850-1900)
- CO\u2082-konsentrasjonen i atmosfaeren har oekett fra ca. 280 ppm til over 420 ppm
- De ti varmeste aarene som er registrert har alle vaert etter 2010
- Oppvarmingen gaar raskest i Arktis (**arktisk forsterkning**) - ca. 2-3 ganger raskere enn det globale gjennomsnittet
- Havnivaaet stiger med ca. 3,6 mm per aar`,
    },
    {
      id: 'geo-3-6-def-klimaendring',
      type: 'definition',
      title: 'Klimaendringer',
      content: `**Klimaendringer** er langvarige endringer i temperatur, nedbor og andre klimaforhold som varer over flere tiaar.

**Naturlige aarsaker til klimaendringer:**
- Variasjoner i jordas bane rundt sola (Milankovic-sykluser)
- Vulkanutbrudd (partikler som blokkerer solstraaling)
- Variasjoner i solaktivitet
- Naturlige svingninger i havsirkulasjonen

**Menneskeskapte aarsaker:**
- Forbrenning av fossile brensler (kull, olje, gass)
- Avskoging og arealbruksendringer
- Jordbruk (metan fra storfe, lystgass fra gjodsel)
- Industriprosesser og sementproduksjon

**FNs klimapanel (IPCC):** Den vitenskapelige autoriteten som samler og vurderer klimaforskning fra hele verden. Bestaar av tusenvis av forskere.`,
    },
    {
      id: 'geo-3-6-aarsaker',
      type: 'text',
      content: `## Aarsaker til menneskeskapte klimaendringer

### Forbrenning av fossile brensler
Den stoerste kilden til oekte CO\u2082-utslipp. Kull, olje og naturgass inneholder karbon som har vaert lagret i millioner av aar. Naar vi brenner dem, frigoeres karbonet som CO\u2082.

**Utslippskilder globalt:**
- Energiproduksjon: ca. 25 %
- Industri: ca. 21 %
- Transport: ca. 16 %
- Bygninger (oppvarming): ca. 6 %
- Jordbruk og skog: ca. 24 %

### Avskoging
Tropeskog lagrer enorme mengder karbon. Naar skogen hogges og brennes, frigoeres karbonet. I tillegg mister vi skogens evne til aa ta opp CO\u2082 fra atmosfaeren.

### Jordbruk
- **Storfe og sauer:** Produserer metan (CH\u2084) gjennom fordeoyelsen
- **Rismarker:** Produserer metan under vaatdyrking
- **Gjoedsel:** Frigoer lystgass (N\u2082O)

### Forsterkningsmekanismer
Klimasystemet har tilbakekoblinger som kan forsterke oppvarmingen:
- **Is-albedo-tilbakekobling:** Mindre is = moerkere overflater = mer varmeopptak
- **Vanndamp-tilbakekobling:** Varmere luft holder mer vanndamp (en drivhusgass)
- **Permafrost-smelting:** Frigir metan og CO\u2082 fra frosset organisk materiale`,
    },
    {
      id: 'geo-3-6-konsekvenser',
      type: 'text',
      content: `## Konsekvenser av klimaendringer

### Globale konsekvenser

**Stigende havnivaa:**
- Termisk ekspansjon (varmt vann tar stoerre plass) og issmelting
- Kan stige 0,3-1,0 m innen 2100 avhengig av utslippsscenario
- Truer kystbyer og lavtliggende oeystater

**Issmelting:**
- Arktis mister sommeris i rekordfart
- Groenlandsisen og Antarktis mister masse
- Isbreer over hele verden trekker seg tilbake

**Mer ekstremvaer:**
- Hyppigere og kraftigere heteboelger
- Mer intense nedborepisoder og flom
- Kraftigere tropiske stormer
- Lengre torkeperioder i toerreutsatte omraader

**Forsuring av havet:**
- CO\u2082 loeser seg i havet og danner karbonsyre
- Truer korallrev, skalldyr og marine oekosystemer

**Endring i oekosystemer:**
- Arter flytter nordover og oppover i hoeyden
- Mis-match mellom artenes livssyklus og aarstidene
- Oekt fare for artsutryddelse`,
    },
    {
      id: 'geo-3-6-norge',
      type: 'text',
      content: `## Klimaendringer i Norge

Norge merker allerede klimaendringene:

### Observerte endringer
- Temperaturen har oekett med ca. **1,1 °C** siden 1900
- Nedboren har oekett med ca. **18 %** siden 1900
- Isbreene trekker seg tilbake (Jostedalsbreen, Folgefonna)
- Vekstsesongen har blitt lengre
- Permafrost tiner i fjellomraader

### Framtidige endringer (ifoelge Norsk klimaservicesenter)
- **Temperatur:** 2-5 °C varmere innen 2100
- **Nedbor:** 10-20 % oekt aarlig, mest om hoesten og vinteren
- **Ekstremnedbor:** Kraftigere og hyppigere episoder
- **Havnivaa:** 15-55 cm stigning langs norskekysten innen 2100
- **Snoe:** Kortere snoesesong, spesielt i lavlandet
- **Isbreer:** De fleste smaa isbreer kan forsvinne

### Konsekvenser for Norge
- Oekt flom- og skredfare
- Utfordringer for infrastruktur (veier, jernbane, bygninger)
- Endringer i jordbruk og fiskeri
- Tap av biologisk mangfold (fjellarter truet)
- Muligheter: lengre vekstsesong, mer vannkraft`,
    },
    {
      id: 'geo-3-6-def-co2',
      type: 'definition',
      title: 'Karbonkretsleopet',
      content: `**Karbonkretsleopet** er den naturlige sirkulasjonen av karbon mellom atmosfaere, hav, land og levende organismer.

**Karbonlagre (reservoarer):**
- Fossile brensler (kull, olje, gass): enormt karbonlager
- Havet: stoerste aktive karbonlageret
- Skog og jord: betydelig lager
- Atmosfaeren: CO\u2082 og metan

**Naturlig balanse:** I tusenvis av aar var karbonutslipp og -opptak i balanse. Planter tar opp CO\u2082 gjennom fotosyntese, og det frigjoeres igjen ved nedbrytning.

**Menneskelig forstyrrelse:** Ved aa brenne fossile brensler tilforer vi karbon til atmosfaeren som har vaert lagret i millioner av aar. Vi har forstyrret den naturlige balansen, og atmosfaerens CO\u2082-innhold oeker.`,
    },
    {
      id: 'geo-3-6-example-1',
      type: 'example',
      title: 'Eksempel: Isbreenes tilbaketrekning',
      problem: 'Forklar hvorfor isbreene i Norge trekker seg tilbake, og diskuter konsekvensene.',
      solution: `**Hvorfor trekker isbreene seg tilbake?**

Isbreer er i balanse naar snoe som legger seg om vinteren (akkumulasjon) er lik isen som smelter om sommeren (ablasjon).

**Klimaendringene forstyrrer denne balansen:**
1. Hoeyere sommertemperaturer gir mer smelting
2. Kortere vinter med mindre snoe i lavere hoyder
3. Mer nedbor som regn i stedet for snoe

**Norske eksempler:**
- Jostedalsbreen har trukket seg tilbake med flere hundre meter siden 1900
- Briksdalsbreen (arm av Jostedalsbreen) har trukket seg kraftig tilbake
- Smaa isbreer i Nord-Norge kan forsvinne helt dette aarhundret

**Konsekvenser:**
1. **Vannforsyning:** Isbreer fungerer som vannmagasiner - mindre is = endret vannfoering i elver
2. **Vannkraft:** Paa kort sikt mer vann (smeltevann), paa lang sikt mindre
3. **Turisme:** Isbreene er viktige turistattraksjoner
4. **Naturfare:** Ustabile fjellsider etter at isen forsvinner, fare for ras
5. **Biologisk mangfold:** Arter tilpasset brenaere omraader mister habitat`,
    },
    {
      id: 'geo-3-6-ipcc',
      type: 'text',
      content: `## FNs klimapanel (IPCC)

**IPCC** (Intergovernmental Panel on Climate Change) ble opprettet i 1988 for aa gi verdens ledere det beste vitenskapelige grunnlaget for klimapolitikk.

### Viktige funn fra IPCCs sjette hovedrapport (2021-2023)

- Det er **utvetydig** at menneskelig aktivitet har varmet opp kloden
- Hver tiendedels grad oppvarming teller - forskjellen mellom 1,5 °C og 2 °C er betydelig
- Vi maa naa **netto nullutslipp** innen 2050 for aa begrense oppvarmingen til 1,5 °C
- Klimaendringene pavirker allerede alle regioner paa jorda
- Det er fortsatt mulig aa begrense oppvarmingen, men det krever raske og omfattende utslippskutt

### Utslippsscenarier

IPCC opererer med ulike scenarier (SSP):
- **SSP1-1,9:** Ambisioese kutt, 1,5 °C oppvarming
- **SSP2-4,5:** Moderate kutt, 2-3 °C oppvarming
- **SSP5-8,5:** Ingen kutt, 4-5 °C oppvarming

Hvilket scenario vi ender opp med avhenger av politiske beslutninger som tas naa.`,
    },
  
    {
      id: 'geo-3-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Menneskelig aktivitet er hovedaarsaken til den globale oppvarmingen siden midten av 1900-tallet
- **CO2-konsentrasjonen** har oekt fra ca. 280 ppm (forindustriell tid) til over 420 ppm
- De viktigste utslippskildene er fossile brensler, avskoging og jordbruk
- Konsekvensene inkluderer stigende havnivaa, issmelting, ekstremvaer og truede oekosystemer
- **Arktisk forsterkning** gjoer at Arktis varmes opp 2-3 ganger raskere enn resten av verden`,
    },
    {
      id: 'geo-3-6-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- IPCC (FNs klimapanel): ipcc.ch
- NASA Climate Change: climate.nasa.gov
- Miljodirektoratet: miljodirektoratet.no
- Cicero senter for klimaforskning: cicero.oslo.no
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.`,
    },
  ],
  exercises: [
    {
      id: 'geo-3-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den viktigste menneskeskapte aarsaken til klimaendringer?',
      options: [
        { id: 'a', text: 'Forbrenning av fossile brensler (kull, olje, gass)', isCorrect: true },
        { id: 'b', text: 'Vulkanutbrudd', isCorrect: false },
        { id: 'c', text: 'Endringer i jordas bane', isCorrect: false },
        { id: 'd', text: 'Variasjoner i solaktivitet', isCorrect: false },
      ],
      solution: 'Forbrenning av fossile brensler er den stoerste kilden til menneskeskapte CO\u2082-utslipp. Vulkanutbrudd, banevarisjoner og solaktivitet er naturlige faktorer som ikke forklarer den raske oppvarmingen de siste tiaarene.',
    },
    {
      id: 'geo-3-6-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mye har jordas gjennomsnittstemperatur oekett siden forindustriell tid?',
      options: [
        { id: 'a', text: 'Ca. 1,1 °C', isCorrect: true },
        { id: 'b', text: 'Ca. 0,1 °C', isCorrect: false },
        { id: 'c', text: 'Ca. 5 °C', isCorrect: false },
        { id: 'd', text: 'Ca. 10 °C', isCorrect: false },
      ],
      solution: 'Jordas gjennomsnittstemperatur har oekett med ca. 1,1 °C siden forindustriell tid (1850-1900). Selv om dette hoeres lite ut, har det store konsekvenser for vaermoenstre, havnivaa og oekosystemer globalt.',
    },
    {
      id: 'geo-3-6-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med den forsterka drivhuseffekten og nevn tre konsekvenser.',
      solution: 'Den forsterka drivhuseffekten oppstaar naar menneskelig aktivitet (spesielt forbrenning av fossile brensler) oeker konsentrasjonen av drivhusgasser i atmosfaeren utover det naturlige nivaaet. Dette fanger mer varmestraaling og hever temperaturen. Tre konsekvenser: 1) Stigende havnivaa pga. issmelting og termisk ekspansjon. 2) Hyppigere og kraftigere ekstremvaerhendelser (heteboelger, styrtregn, stormer). 3) Forsuring av havet som truer marine oekosystemer.',
    },
    {
      id: 'geo-3-6-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Droeft konsekvensene av klimaendringer for Norge, baade utfordringer og muligheter.',
      solution: 'Utfordringer: 1) Oekt fare for flom og jordras pga. mer og kraftigere nedbor. 2) Isbreer smelter og endrer vannfoering i elver. 3) Kystinfrastruktur trues av stigende havnivaa. 4) Fjellarter som fjellrev og villrein mister habitat. 5) Permafrost tiner og kan destabilisere fjellomraader. Muligheter: 1) Lengre vekstsesong for jordbruket. 2) Mer nedbor kan gi mer vannkraft. 3) Mildere klima kan redusere oppvarmingsbehov. 4) Nye arter kan trives lenger nord. Balanse: Selv om noen muligheter finnes, overveier utfordringene - spesielt fordi endringene skjer raskere enn natur og samfunn rekker aa tilpasse seg.',
    },
    {
      id: 'geo-3-6-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er \"arktisk forsterkning\"?',
      options: [
        { id: 'a', text: 'At oppvarmingen gaar 2-3 ganger raskere i Arktis enn det globale gjennomsnittet', isCorrect: true },
        { id: 'b', text: 'At Arktis kjoeler ned raskere enn resten av verden', isCorrect: false },
        { id: 'c', text: 'At nordlyset blir sterkere pga. klimaendringer', isCorrect: false },
        { id: 'd', text: 'At det dannes mer is i Arktis', isCorrect: false },
      ],
      solution: 'Arktisk forsterkning betyr at Arktis varmes opp 2-3 ganger raskere enn det globale gjennomsnittet. Hovedaarsaken er is-albedo-tilbakekoblingen: naar is smelter, erstattes den hvite overflaten (hoey albedo) med moerkt hav (lav albedo) som absorberer mer varme, noe som smelter enda mer is.',
    },
  ],
};

// ============================================================================
// Kapittel 3.7: Klimapolitikk og klimatilpasning
// ============================================================================

export const CHAPTER_GEOGRAFI_3_7: TextbookChapter = {
  id: 'geografi-1-3-7',
  courseId: 'geografi',
  chapterNumber: '3.7',
  title: 'Klimapolitikk og klimatilpasning',
  description: 'Internasjonale klimaavtaler, norsk klimapolitikk, utslippskutt og tilpasning til et endret klima.',
  estimatedMinutes: 25,
  competenceGoals: [
    'droefte tiltak for aa redusere klimagassutslepp og korleis samfunn kan tilpasse seg klimaendringar',
    'vurdere ulike perspektiv og interessekonfliktar knytt til klimapolitikk',
  ],
  content: [
    {
      id: 'geo-3-7-intro',
      type: 'text',
      content: `# Klimapolitikk og klimatilpasning

Klimaendringene krever handling paa to fronter: Vi maa **redusere utslippene** (utslippskutt/mitigasjon) for aa begrense oppvarmingen, og vi maa **tilpasse oss** (klimatilpasning) de endringene som allerede er uunngaaelige.

## To strategier

**Utslippskutt (mitigasjon):**
Tiltak for aa redusere utslipp av klimagasser. Maal: begrense den globale oppvarmingen.
- Overgang fra fossile til fornybare energikilder
- Energieffektivisering
- Endret transportmoenstre
- Bevaring av skog og naturlige karbonlagre

**Klimatilpasning (adaptasjon):**
Tiltak for aa handtere konsekvensene av klimaendringer som allerede skjer eller som vi ikke kan unngaa.
- Flomvern og overvannssystemer
- Klimatilpasset byplanlegging
- Tilpasning av jordbruk og infrastruktur
- Beredskap for ekstremvaer

**Begge strategiene er noedvendige.** Selv med raske utslippskutt vil klimaet fortsette aa endre seg i tiaar pga. tregheten i klimasystemet.`,
    },
    {
      id: 'geo-3-7-def-parisavtalen',
      type: 'definition',
      title: 'Parisavtalen',
      content: `**Parisavtalen** (2015) er den viktigste internasjonale klimaavtalen. Den ble vedtatt paa klimatoppmetet COP21 i Paris og tradte i kraft i 2016.

**Hovedmaal:**
- Begrense global oppvarming til **godt under 2 °C**, med maal om 1,5 °C over forindustrielt nivaa
- Oeke evnen til aa tilpasse seg klimaendringene
- Gjere finansstroemmer forenlige med lavutslippsutvikling

**Viktige elementer:**
- Alle land skal levere nasjonale klimamaal (NDC - Nationally Determined Contributions)
- Maalene skal oppdateres hvert femte aar og bli **stadig mer ambisioese**
- Rike land skal bidra med klimafinansiering til utviklingsland
- Gjennomsiktig rapportering av utslipp

**Utfordring:** Summen av alle lands naavedende klimamaal er langt fra nok til aa naa 1,5 °C-maalet.`,
    },
    {
      id: 'geo-3-7-internasjonalt',
      type: 'text',
      content: `## Internasjonal klimapolitikk

### Viktige milepaler

**1992 - Klimakonvensjonen (UNFCCC):**
Vedtatt paa Rio-toppmetet. Rammeverket for internasjonalt klimasamarbeid. Alle FNs medlemsland er parter.

**1997 - Kyotoprotokollen:**
Foerste bindende avtale med utslippsmaol. Bare industriland fikk forpliktelser, noe som ble kritisert. USA trakk seg ut.

**2015 - Parisavtalen:**
Gjennombrudd: Alle land forplikter seg til klimamaal. Mer fleksibelt enn Kyoto, men ogsaa mer frivillig.

**COP-moeter:**
Aarlige klimatoppmeoter (Conference of the Parties) der verdensdelene forhandler. Eksempler: COP21 (Paris), COP26 (Glasgow), COP28 (Dubai).

### Utfordringer i internasjonalt klimasamarbeid

- **Rettferdighet:** Hvem skal kutte mest? Rike land har historisk sluppet ut mest, men fattige lands utslipp oeker
- **Finansiering:** Hvordan skal utviklingsland faa hjelp til omstilling?
- **Tidspress:** Gapet mellom lofter og handling
- **Nasjonale interesser:** Land med store fossilressurser moetter seg kutt`,
    },
    {
      id: 'geo-3-7-norge-politikk',
      type: 'text',
      content: `## Norsk klimapolitikk

### Norges klimamaal
- **2030:** Kutte minst **55 %** av utslippene sammenlignet med 1990
- **2050:** Bli et **laavutslippssamfunn** (90-95 % kutt)
- Norge deltar i EUs klimasamarbeid (kvotesystem og innsatsfordeling)

### Norges klimautfordring

Norge har en spesiell posisjon i klimapolitikken:
- **Stoer olje- og gassprodusent:** Verdens 7. stoerste gasseksportoer
- **Ren stromproduksjon:** 90 % vannkraft
- **Hoey levestandard:** Hoey forbruk per innbygger
- **Elektrisk transport:** Verdensledende paa elbiler

### Viktige klimatiltak i Norge

**Transport:**
- Elbilpolitikk (avgiftsfordeler, ladenettverk)
- Satsing paa kollektivtransport og sykkel
- Elektrifisering av ferjer og skip

**Industri:**
- Karbonfangst og -lagring (CCS) - Nordsjoen som CO\u2082-lager
- Elektrifisering av olje- og gassplattformer
- Groenn industri og hydrogenprooduksjon

**Natur:**
- Bevaring av skog og myr som karbonlagre
- Restaurering av oedelagte naturomraader`,
    },
    {
      id: 'geo-3-7-def-klimatilpasning',
      type: 'definition',
      title: 'Klimatilpasning',
      content: `**Klimatilpasning** er tiltak for aa redusere saarbarhet og oeke motstandskraften mot klimaendringers konsekvenser.

**Eksempler paa klimatilpasning:**

**Flom og oversvommelse:**
- Forbedrede overvannssystemer i byer
- Flomvoller og flomdammer
- Blaagroenn infrastruktur (groenteomraader som absorberer vann)
- Strengere regler for bygging i flomutsatte omraader

**Ekstremvaer:**
- Forbedrede varslingssystemer
- Klimatilpasset bygningsteknikk
- Styrket beredskap og krisehanstering

**Jordbruk:**
- Nye plantesorter tilpasset endret klima
- Endrede dyrkingsmetoder
- Vanningsanlegg mot toerke

**Infrastruktur:**
- Dimensjonering av veier og broer for stoerre vannmasser
- Sikring av stroemnettet mot storm
- Havneanlegg tilpasset hoeyere havnivaa`,
    },
    {
      id: 'geo-3-7-rettferdighet',
      type: 'text',
      content: `## Klimarettferdighet

Klimaendringene reiser grunnleggende sporssmaal om rettferdighet:

### Hvem er ansvarlig?
- Industrilandene har historisk statt for stoersteparten av utslippene
- Kina er naa stoerst i totale utslipp, men per innbygger er USA og Golfstatene stoerst
- Norges utslipp per innbygger er blant de hoeyeste i Europa (medregnet olje/gass-eksport)

### Hvem rammes hardest?
- Fattige land i tropiske omraader er mest saarbare
- Smaa oeysstater trues av havnivaasstigning
- Urfolk og marginaliserte grupper rammes uforholdsmessig
- Fremtidige generasjoner arver konsekvensene

### Klimarettferdighet innebarer:
- **Historisk ansvar:** Rike land bor kutte mest og bidra med finansiering
- **Per innbygger-prinsippet:** Utslippsrettigheter bor vaere like
- **Tap og skade:** Kompensasjon til land som allerede rammes hardt
- **Inkludering:** Urfolk og saarbare grupper maa faa en stemme

I 2022 ble det for foerste gang enighet om et fond for **tap og skade** (Loss and Damage) til saarbare utviklingsland.`,
    },
    {
      id: 'geo-3-7-example-1',
      type: 'example',
      title: 'Eksempel: Norges klimaparadoks',
      problem: 'Droeft det norske klimaparadokset: Norge er et foregangsland paa fornybar energi og elbiler, men er samtidig en stor olje- og gassprodusent. Belyse ulike perspektiver.',
      solution: `**Norges klimaparadoks:**

Norge fremstaar som et klimavennlig land, men bildet er mer nyansert:

**Paa den ene siden:**
- 90 % av stroemmen er fornybar (vannkraft)
- Verdensledende paa elbiler (over 80 % av nybilsalget)
- Ambisioese klimamaal (55 % kutt innen 2030)
- Stor investering i karbonfangst og -lagring

**Paa den andre siden:**
- En av verdens stoerste eksportoerer av olje og gass
- Norsk fossil eksport foerer til store utslipp i andre land
- Hoeyest forbruk per innbygger i Europa
- Fortsatt leting etter nye olje- og gassfelt

**Ulike perspektiver:**

*Oeljebrnasjens forsvarere:* Norsk gass erstatter kull i Europa og gir lavere utslipp. Oljeinntektene finansierer groenn omstilling. Oljefondet gir oekonomisk sikkerhet.

*Kritikerne:* Ny olje- og gassleting er uforenelig med Parismaalet. Norge tjener paa klimaproblemet. Utslippene fra eksportert olje og gass maa ogsaa telle.

*Mellomposisjon:* Gradvis nedtrapping av olje og gass, kombinert med stoer satsing paa fornybar energi og groenn industri. Bruke kompetansen fra oeljesektoren i nye naeringer.

**Konklusjon:** Det finnes ikke et enkelt svar. Ulike hensyn (okonomi, klima, rettferdighet, arbeidsplasser) maa veies mot hverandre i demokratiske prosesser.`,
    },
    {
      id: 'geo-3-7-individ',
      type: 'text',
      content: `## Hva kan enkeltpersoner gjoere?

Klimaendringene krever handling paa alle nivaaer - fra internasjonale avtaler til individuelle valg:

**Transport:**
- Velge kollektivtransport, sykkel eller gange
- Fly mindre, spesielt korte strekninger
- Elbil fremfor fossilbil

**Mat:**
- Spise mer plantebasert og mindre kjoett (spesielt storfe)
- Redusere matsvinn
- Velge lokal og sesongbasert mat

**Forbruk:**
- Kjoope mindre og reparere mer
- Velge brukt fremfor nytt
- Dele og laane fremfor aa eie

**Engasjement:**
- Stemme paa partier med ambisioes klimapolitikk
- Delta i organisasjoner og debatter
- Paavirke beslutninger paa skolen og i lokalsamfunnet

**Viktig perspektiv:** Individuelle valg er viktige, men de stoerste endringene maa skje paa systemnivaa gjennom politiske beslutninger, naeringsliv og teknologiutvikling.`,
    },
  
    {
      id: 'geo-3-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Parisavtalen** (2015) har som maal aa begrense oppvarmingen til 1,5-2 °C over forindustrielt nivaa
- Klimatiltak deles i **utslippsreduksjon** (mitigasjon) og **tilpasning** (adaptasjon)
- Norges klimamaal er 55 % utslippsreduksjon innen 2030 og klimanoytralitet innen 2050
- Klimarettferdighet handler om at rike land har stoerst historisk ansvar for utslipp
- Overgang til fornybar energi, energieffektivisering og endret arealbruk er viktige tiltak`,
    },
    {
      id: 'geo-3-7-kilder',
      type: 'text',
      content: `## Kilder og ressurser

- Parisavtalen: unfccc.int
- Miljodirektoratet: miljodirektoratet.no
- Regjeringens klimaplan: regjeringen.no
- IPCC (FNs klimapanel): ipcc.ch
- Nystad, J. F. m.fl. (2021). *Geografi VG1/VG2*. Cappelen Damm.`,
    },
  ],
  exercises: [
    {
      id: 'geo-3-7-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Parisavtalens viktigste maal?',
      options: [
        { id: 'a', text: 'Begrense global oppvarming til godt under 2 °C, helst 1,5 °C', isCorrect: true },
        { id: 'b', text: 'Stoppe all bruk av fossile brensler innen 2030', isCorrect: false },
        { id: 'c', text: 'Plante trear i alle verdens oerkener', isCorrect: false },
        { id: 'd', text: 'Flytte alle kystbyer til hoeyere omraader', isCorrect: false },
      ],
      solution: 'Parisavtalen fra 2015 har som hovedmaal aa begrense den globale oppvarmingen til godt under 2 °C, og helst 1,5 °C, over forindustrielt nivaa. Alle land har forpliktet seg til aa levere nasjonale klimamaal.',
    },
    {
      id: 'geo-3-7-ex2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom utslippskutt (mitigasjon) og klimatilpasning (adaptasjon)?',
      options: [
        { id: 'a', text: 'Utslippskutt reduserer aarsaken, klimatilpasning handterer konsekvensene', isCorrect: true },
        { id: 'b', text: 'Utslippskutt er billig, klimatilpasning er dyrt', isCorrect: false },
        { id: 'c', text: 'Utslippskutt gjelder bare industri, klimatilpasning gjelder bare jordbruk', isCorrect: false },
        { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
      ],
      solution: 'Utslippskutt (mitigasjon) handler om aa redusere utslippene av klimagasser for aa begrense oppvarmingen - altsaa angripe aarsaken. Klimatilpasning (adaptasjon) handler om aa tilpasse samfunnet til klimaendringer som allerede skjer eller er uunngaaelige - altsaa handtere konsekvensene. Begge er noedvendige.',
    },
    {
      id: 'geo-3-7-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv tre konkrete klimatilpasningstiltak som norske kommuner kan gjoennomfoere.',
      solution: '1) Forbedre overvannssystemer i byer med blaagroenn infrastruktur - groenneomraader, regnbed og permeable flater som absorberer nedbor og forhindrer oversvommelse. 2) Innfoere strengere regler for bygging i flomutsatte omraader og skredfarlige soner, basert paa oppdaterte flomsonekart. 3) Dimensjonere veier, broer og roerledninger for stoerre vannmasser enn dagens normer, basert paa fremtidige klimaprojeksjoner.',
    },
    {
      id: 'geo-3-7-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Droeft begrepet klimarettferdighet. Hvem bor baere stoerst ansvar for aa loese klimakrisen, og hvorfor?',
      solution: 'Klimarettferdighet handler om at byrdene og ansvaret for klimaendringene bor fordeles rettferdig. Argumenter for at rike land bor baere stoerst ansvar: 1) Historisk ansvar - industrilandene har staafor det meste av historiske utslipp. 2) Kapasitet - rike land har ressursene til aa omstille seg. 3) Per innbygger-utslipp er hoeyest i rike land. Motargumenter: 1) Kinas totale utslipp er naa stoerst. 2) Alle land maa bidra for aa naa maalene. 3) Utslippskutt i utviklingsland kan hindre fattigdomsreduksjon. Balansert vurdering: Rike land bor gaa foran med utslippskutt og finansiere omstilling i utviklingsland, mens alle land gradvis oeker sine ambisjoner. Prinsippet om \"felles, men differensiert ansvar\" fra klimakonvensjonen er fortsatt relevant.',
    },
    {
      id: 'geo-3-7-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Norges klimamaal for 2030?',
      options: [
        { id: 'a', text: 'Kutte minst 55 % av utslippene sammenlignet med 1990', isCorrect: true },
        { id: 'b', text: 'Bli helt karbonnoeytral', isCorrect: false },
        { id: 'c', text: 'Doble oljeproduksjonen', isCorrect: false },
        { id: 'd', text: 'Kutte 10 % av utslippene', isCorrect: false },
      ],
      solution: 'Norges klimamaal for 2030 er aa kutte minst 55 % av klimagassutslippene sammenlignet med 1990-nivaa. Dette maalet er forankret i Parisavtalen og EUs klimasamarbeid. Innen 2050 er maalet aa bli et lavutslippssamfunn med 90-95 % kutt.',
    },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const GEOGRAFI_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_3_1,
  CHAPTER_GEOGRAFI_3_2,
  CHAPTER_GEOGRAFI_3_3,
  CHAPTER_GEOGRAFI_3_4,
  CHAPTER_GEOGRAFI_3_5,
  CHAPTER_GEOGRAFI_3_6,
  CHAPTER_GEOGRAFI_3_7,
];
