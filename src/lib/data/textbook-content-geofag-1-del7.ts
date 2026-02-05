/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 1 VG2 - Del 7: Klima og klimasoner
 *
 * Dekker LK20-kompetansemaal for geofag 1 (GEO01-01)
 * Kapittel 7.1-7.5: Klimafaktorer, energibalanse, klimasoner, naturlige variasjoner og Norges klima
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Klimafaktorer
// ============================================================================

export const CHAPTER_GEOFAG_1_7_1: TextbookChapter = {
  id: 'geofag-1-7-1',
  courseId: 'geofag-1',
  chapterNumber: '7.1',
  title: 'Klimafaktorer',
  description: 'Faktorer som paavirker klimaet paa et sted: breddegrad, hoeydeforhold, nærhet til hav, havstroemmer og terreng.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjoere rede for faktorer som paavirker klimaet paa et sted',
    'forklare hvordan breddegrad paavirker solinnstraaling og temperatur',
    'beskrive sammenhengen mellom havstroemmer og klima',
  ],
  content: [
    {
      id: 'geo1-7-1-intro',
      type: 'text',
      content: `# Klimafaktorer

Klimaet paa et sted bestemmes av flere faktorer som virker sammen. Disse kalles **klimafaktorer**. De viktigste klimafaktorene er breddegrad, hoeyde over havet, naerhet til hav, havstroemmer og terrengforhold.

## Hva er klima?

Klima er gjennomsnittsvaeret paa et sted over lang tid (minst 30 aar). Det beskriver typiske forhold for temperatur, nedbor, vind og andre vaerparametre. Vaer derimot beskriver tilstanden i atmosfaeren her og naa.

Klimaet bestemmer:
- Hvilke planter og dyr som kan leve i et omraade
- Hvilke jordbruksavlinger som kan dyrkes
- Hvordan mennesker bygger og lever`,
    },
    {
      id: 'geo1-7-1-def-klimafaktor',
      type: 'definition',
      title: 'Klimafaktor',
      content: 'En klimafaktor er en geografisk eller fysisk egenskap som paavirker klimaet paa et sted. De viktigste klimafaktorene er breddegrad, hoeyde over havet, naerhet til hav, havstroemmer, vindretninger og terreng.',
    },
    {
      id: 'geo1-7-1-breddegrad',
      type: 'text',
      content: `## Breddegrad

Breddegraden er den viktigste klimafaktoren. Den bestemmer hvor mye solenergi et omraade mottar.

### Solvinkel og energi

Ved ekvator staar solen hoeyest paa himmelen. Solstraalene treffer bakken i en bratt vinkel, og energien konsentreres paa et lite omraade. Mot polene treffer solstraalene i en lavere vinkel, og den samme energimengden spres over et stoerre omraade.

**Konsekvenser av breddegrad:**
- **Tropene** (0-23.5 grader): Hoey solvinkel, hoey temperatur hele aaret
- **Tempererte soner** (23.5-66.5 grader): Varierende solvinkel, tydelige aarstider
- **Polare omraader** (66.5-90 grader): Lav solvinkel, kaldt klima, midnattssol og moerketid

### Dagslengde

Breddegraden paavirker ogsaa dagslengden:
- Ved ekvator: Ca. 12 timer dag og natt hele aaret
- Ved polarsirkelen: Fra 24 timer lys til 24 timer moerke
- Norge (58-71 grader N): Store variasjoner gjennom aaret`,
    },
    {
      id: 'geo1-7-1-def-solvinkel',
      type: 'definition',
      title: 'Solvinkel',
      content: 'Solvinkelen er vinkelen mellom solstraalene og horisonten. Hoey solvinkel gir konsentrert energi og hoey temperatur. Lav solvinkel sprer energien over et stoerre omraade og gir lavere temperatur.',
    },
    {
      id: 'geo1-7-1-hoeyde',
      type: 'text',
      content: `## Hoeyde over havet

Temperaturen synker med hoeyden i troposfeeren. Dette skyldes at lufttrykket avtar og luften utvider seg. Utvidelsen krever energi, som tas fra luftens varme.

### Temperaturgradient

Temperaturen synker i gjennomsnitt med **0.6 grader C per 100 meter** i hoeyden. Dette kalles den miljoeadiabatiske gradienten.

**Eksempel:** Hvis temperaturen er 15 grader C i havnivaa, vil den vaere ca. 9 grader C paa 1000 meters hoeyde.

### Konsekvenser

- **Troegrense**: Grensen for hvor hoegt trær kan vokse
- **Snoegrense**: Grensen for helaarlig snoe
- **Fjellklima**: Kjoeligere, mer vind, sterkere UV-straaling
- **Vegetasjonssoner**: Ulike plantesamfunn i ulike hoeydesoner`,
    },
    {
      id: 'geo1-7-1-example-hoeyde',
      type: 'example',
      title: 'Temperaturberegning med hoeyde',
      problem: 'Temperaturen ved havet i Bergen er 20 grader C. Hva er temperaturen paa toppen av Ulriken (643 m)?',
      solution: `**Loesning:**

Temperaturgradienten er ca. 0.6 grader C per 100 m.

Hoeydeforskjell: 643 m

Temperaturnedgang: 643 m / 100 m x 0.6 grader C = 3.9 grader C

Temperatur paa toppen: 20 grader C - 3.9 grader C = **16.1 grader C**

Dette forklarer hvorfor det ofte er kjoligere og vindfullt paa fjelltopper, selv naar det er varmt ved kysten.`,
    },
    {
      id: 'geo1-7-1-hav',
      type: 'text',
      content: `## Naerhet til hav

Hav og land varmes opp og avkjoeles ulikt. Vann har stoerre varmekapasitet enn land, noe som betyr at det trengs mer energi for aa varme opp vann.

### Maritimt vs. kontinentalt klima

**Maritimt klima (kystklima):**
- Milde vintre, kjoelige somre
- Smaa temperaturforskjeller gjennom aaret
- Mye nedbor
- Eksempel: Bergen, Reykjavik

**Kontinentalt klima (innlandsklima):**
- Kalde vintre, varme somre
- Store temperaturforskjeller gjennom aaret
- Mindre nedbor
- Eksempel: Roros, Moskva

### Kontinentalitet

Kontinentalitet er et maal paa hvor mye et steds klima paavirkes av avstand til havet. Hoey kontinentalitet betyr store temperatursvingninger mellom sommer og vinter.`,
    },
    {
      id: 'geo1-7-1-def-kontinentalitet',
      type: 'definition',
      title: 'Kontinentalitet',
      content: 'Kontinentalitet beskriver graden av innlandsklima. Hoey kontinentalitet betyr store temperaturforskjeller mellom sommer og vinter, lav luftfuktighet og lite nedbor. Lav kontinentalitet (maritimt klima) betyr smaa temperaturforskjeller og mer nedbor.',
    },
    {
      id: 'geo1-7-1-havstrom',
      type: 'text',
      content: `## Havstroemmer

Havstroemmer transporterer varme fra tropene mot polene og kalde vannmasser mot ekvator. Dette paavirker klimaet langs kystene betydelig.

### Golfstroemmen og Den nordatlantiske stroem

Norge har et mye mildere klima enn andre omraader paa samme breddegrad. Dette skyldes Golfstroemmen og dens fortsettelse, Den nordatlantiske stroem.

**Effekter:**
- Tromsoe (69 grader N) har isfri havn, mens Labrador (samme breddegrad) har permafrost
- Vestkysten av Norge har milde vintre
- Varm, fuktig luft gir mye nedbor paa Vestlandet

### Kalde havstroemmer

Kalde havstroemmer kjoeler ned kystomraader:
- **Labradorstroemmen**: Kjoeler oestkysten av Nord-Amerika
- **Humboldtstroemmen**: Skaper toert klima langs Soer-Amerikas vestkyst`,
    },
    {
      id: 'geo1-7-1-terreng',
      type: 'text',
      content: `## Terreng og orografisk nedbor

Fjellkjeder og terreng paavirker nedborsfordelingen kraftig.

### Orografisk nedbor

Naar fuktig luft presses oppover en fjellside, avkjoeles den. Kald luft kan holde paa mindre fuktighet, saa vanndampen kondenserer og faller som nedbor. Dette kalles orografisk nedbor.

### Regnskygge

Paa baksiden av fjellkjeden (lesiden) er luften toerr fordi den har avgitt fuktigheten paa losiden. Naar luften synker ned, varmes den opp og blir enda toerrere. Omraader i regnskygge faar lite nedbor.

**Eksempel i Norge:**
- Vestlandet (losiden): 2000-3000 mm nedbor/aar
- Oestlandet (lesiden): 500-800 mm nedbor/aar`,
    },
    {
      id: 'geo1-7-1-def-regnskygge',
      type: 'definition',
      title: 'Regnskygge',
      content: 'Regnskygge er et omraade med lite nedbor paa lesiden av en fjellkjede. Fuktig luft avgir nedbor naar den stiger paa losiden, og naar den synker ned paa lesiden er den toerr. Oestlandet ligger i regnskygge av fjellkjeden.',
    },
  ],
  exercises: [
    {
      id: 'geo1-7-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken klimafaktor er viktigst for aa bestemme klimaet paa et sted?',
      options: [
        { id: 'a', text: 'Breddegrad', isCorrect: true },
        { id: 'b', text: 'Hoeyde over havet', isCorrect: false },
        { id: 'c', text: 'Naerhet til hav', isCorrect: false },
        { id: 'd', text: 'Vegetasjon', isCorrect: false },
      ],
      solution: 'Breddegraden er den viktigste klimafaktoren fordi den bestemmer hvor mye solenergi et omraade mottar. Solens vinkel og dagslengde varierer med breddegraden.',
    },
    {
      id: 'geo1-7-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom maritimt og kontinentalt klima.',
      solution: 'Maritimt klima (kystklima) kjennetegnes av milde vintre, kjoelige somre og smaa temperaturforskjeller gjennom aaret. Det er mye nedbor. Kontinentalt klima (innlandsklima) har kalde vintre, varme somre og store temperaturforskjeller. Nedboren er mindre. Forskjellen skyldes at vann har stoerre varmekapasitet enn land - havet jevner ut temperatursvingningene.',
    },
    {
      id: 'geo1-7-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mye synker temperaturen i gjennomsnitt per 100 meter i hoeyden?',
      options: [
        { id: 'a', text: 'Ca. 0.6 grader C', isCorrect: true },
        { id: 'b', text: 'Ca. 1.0 grader C', isCorrect: false },
        { id: 'c', text: 'Ca. 0.3 grader C', isCorrect: false },
        { id: 'd', text: 'Ca. 2.0 grader C', isCorrect: false },
      ],
      solution: 'Temperaturen synker i gjennomsnitt med ca. 0.6 grader C per 100 meter. Dette kalles den miljoeadiabatiske gradienten og skyldes at luften utvides naar trykket avtar.',
    },
    {
      id: 'geo1-7-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Norge har mildere klima enn andre omraader paa samme breddegrad.',
      solution: 'Norge pavirkes av Golfstroemmen og Den nordatlantiske stroem som transporterer varmt vann fra tropene nordover. Dette varmer opp luften over havet, som blaser inn over land. Derfor har Norge 5-10 grader C hoeyere gjennomsnittstemperatur enn andre steder paa samme breddegrad, som for eksempel Labrador i Canada.',
    },
    {
      id: 'geo1-7-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor Bergen faar over fire ganger saa mye nedbor som Oslo.',
      solution: 'Bergen ligger paa losiden av fjellkjeden der fuktig atlantisk luft presses oppover. Naar luften stiger, avkjoeles den og avgir fuktigheten som orografisk nedbor. Oslo ligger i regnskygge paa oestsiden av fjellkjeden. Luften som kommer over fjellene har allerede avgitt det meste av fuktigheten, og naar den synker ned mot Oslo, varmes den opp og blir enda toerrere. Derfor faar Bergen ca. 2250 mm nedbor per aar, mens Oslo faar ca. 800 mm.',
    },
  ],
};

// ============================================================================
// Kapittel 7.2: Jordens energibalanse
// ============================================================================

export const CHAPTER_GEOFAG_1_7_2: TextbookChapter = {
  id: 'geofag-1-7-2',
  courseId: 'geofag-1',
  chapterNumber: '7.2',
  title: 'Jordens energibalanse',
  description: 'Solstraaling, drivhuseffekten og jordens straalingsbudsjett.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare jordens energibalanse og straalingsbudsjett',
    'beskrive drivhuseffekten og dens betydning for klimaet',
    'gjoere rede for sammenhengen mellom solinnstraaling og temperatur',
  ],
  content: [
    {
      id: 'geo1-7-2-intro',
      type: 'text',
      content: `# Jordens energibalanse

Klimaet paa jorden styres av energi fra solen. For aa forstaa klimasystemet maa vi forstaa hvordan denne energien mottas, fordeles og sendes tilbake til verdensrommet.

## Solstraaling

Solen sender ut energi i form av elektromagnetisk straaling. Denne energien driver vaersystemer, havstroemmer og alt liv paa jorden.

**Solkonstanten:** Ca. 1361 W/m² er energimengden som treffer en flate vinkelrett paa solstraalene utenfor atmosfeeren.

Fordi jorden er rund og roterer, mottar den i gjennomsnitt ca. 340 W/m² fordelt over hele overflaten.`,
    },
    {
      id: 'geo1-7-2-def-solkonstant',
      type: 'definition',
      title: 'Solkonstanten',
      content: 'Solkonstanten er mengden solenergi som treffer en flate paa 1 m² vinkelrett paa solstraalene utenfor jordens atmosfeere. Verdien er ca. 1361 W/m². Den varierer svakt (ca. 0.1%) med solens aktivitetssyklus.',
    },
    {
      id: 'geo1-7-2-straalingstyper',
      type: 'text',
      content: `## Straalingstyper

### Kortboelget straaling (fra solen)

Solstraalingen er hovedsakelig kortboelget:
- **Boelgelengder:** 0.1-4 mikrometer
- **Inneholder:** UV-straaling, synlig lys, naer-infraroedd
- Passerer relativt lett gjennom atmosfeeren
- Absorberes av jordoverflaten

### Langboelget straaling (fra jorden)

Jorden sender ut langboelget varmestraaling:
- **Boelgelengder:** 4-100 mikrometer
- **Type:** Infraroed (varmestraaling)
- Absorberes delvis av drivhusgasser i atmosfeeren
- Kalles ogsaa termisk straaling

### Stefan-Boltzmanns lov

Alle objekter sender ut straaling proporsjonalt med temperaturen i fjerde potens:

**E = sigma x T⁴**

der sigma er Stefan-Boltzmanns konstant (5.67 x 10⁻⁸ W/m²K⁴) og T er temperaturen i Kelvin.`,
    },
    {
      id: 'geo1-7-2-energibudsjett',
      type: 'text',
      content: `## Jordens energibudsjett

For at jordens gjennomsnittlige temperatur skal vaere stabil, maa innkommende og utgaaende energi vaere i balanse.

### Innkommende energi

- Kortboelget solstraaling: ca. 340 W/m² (gjennomsnitt)

### Utgaaende energi

- **Reflektert solstraaling:** ca. 100 W/m² (albedo)
- **Langboelget varmestraaling:** ca. 240 W/m²

### Energibudsjettet

| Komponent | Verdi |
|-----------|-------|
| Innkommende solstraaling | 340 W/m² |
| Reflektert (albedo ca. 30%) | -100 W/m² |
| Absorbert | 240 W/m² |
| Utgaaende varmestraaling | -240 W/m² |
| **Netto** | **0 W/m²** |

Naar balansen er null, er klimaet stabilt.`,
    },
    {
      id: 'geo1-7-2-def-albedo',
      type: 'definition',
      title: 'Albedo',
      content: 'Albedo er andelen innkommende solstraaling som reflekteres tilbake til verdensrommet. Jordens gjennomsnittlige albedo er ca. 0.30 (30%). Snoe og is har hoey albedo (0.8-0.9), skyer har middels albedo (0.5-0.8), mens hav og skog har lav albedo (0.06-0.15).',
    },
    {
      id: 'geo1-7-2-drivhuseffekt',
      type: 'text',
      content: `## Drivhuseffekten

Uten atmosfeere ville jordens gjennomsnittstemperatur vaert ca. -18 grader C. Den faktiske temperaturen er ca. +15 grader C. Denne oppvarmingen paa 33 grader C skyldes drivhuseffekten.

### Hvordan drivhuseffekten virker

1. **Kortboelget solstraaling** passerer gjennom atmosfeeren
2. **Jordoverflaten absorberer** energien og varmes opp
3. **Jorden sender ut langboelget varmestraaling**
4. **Drivhusgasser absorberer** deler av varmestraalingen
5. **Motstraaling:** Gassene sender straaling tilbake mot jorden
6. **Resultatet:** Jordoverflaten blir varmere

### Viktige drivhusgasser

| Gass | Bidrag | Kilde |
|------|--------|-------|
| Vanndamp (H₂O) | Stoerst bidrag | Fordampning |
| Karbondioksid (CO₂) | Nest stoerst | Fossilt brensel, respirasjon |
| Metan (CH₄) | Sterk effekt | Husdyr, myr, fossilt brensel |
| Lystgass (N₂O) | Moderat | Landbruk, forbrenning |
| Ozon (O₃) | Variabel | Fotokjemiske reaksjoner |`,
    },
    {
      id: 'geo1-7-2-def-drivhuseffekt',
      type: 'definition',
      title: 'Drivhuseffekten',
      content: 'Drivhuseffekten er atmosfaerens evne til aa holde paa varme. Drivhusgasser absorberer langboelget varmestraaling fra jordoverflaten og sender deler av den tilbake (motstraaling). Den naturlige drivhuseffekten gjor jorden ca. 33 grader C varmere enn den ville vaert uten atmosfeere.',
    },
    {
      id: 'geo1-7-2-example',
      type: 'example',
      title: 'Beregning av jordtemperatur uten drivhuseffekt',
      problem: 'Beregn hva jordens gjennomsnittstemperatur ville vaert uten atmosfeere, gitt at jordens albedo er 0.30.',
      solution: `**Loesning:**

1. **Innkommende solstraaling per flateenhet:**
   - Solkonstant: S = 1361 W/m²
   - Fordelt over hele jordoverflaten: S/4 = 340 W/m²

2. **Absorbert straaling:**
   - Albedo alpha = 0.30 (30% reflekteres)
   - Absorbert: 340 x (1 - 0.30) = 238 W/m²

3. **Stefan-Boltzmanns lov for likevekt:**
   - sigma x T⁴ = 238 W/m²
   - sigma = 5.67 x 10⁻⁸ W/(m²K⁴)
   - T⁴ = 238 / (5.67 x 10⁻⁸) = 4.2 x 10⁹ K⁴
   - T = 255 K = **-18 grader C**

**Konklusjon:** Uten drivhuseffekten ville jorden hatt en gjennomsnittstemperatur paa -18 grader C, mot dagens +15 grader C.`,
    },
    {
      id: 'geo1-7-2-forsterket',
      type: 'text',
      content: `## Forsterket drivhuseffekt

Naar konsentrasjonen av drivhusgasser oeker, forsterkes drivhuseffekten. Mer av varmestraalingen absorberes og sendes tilbake, og temperaturen stiger.

### Oekte CO₂-konsentrasjon

- **Forindustriell:** ca. 280 ppm
- **I dag:** over 420 ppm
- **Oekning:** ca. 50% siden 1750

### Kilder til oekte drivhusgasser

- Forbrenning av fossilt brensel (kull, olje, gass)
- Avskoging (frigjor CO₂, reduserer opptak)
- Landbruk (metan fra husdyr, lystgass fra gjodsel)
- Industriprosesser

Den forsterkede drivhuseffekten er hovedaarsaken til menneskeskapt klimaendring.`,
    },
  ],
  exercises: [
    {
      id: 'geo1-7-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er solkonstanten?',
      options: [
        { id: 'a', text: 'Ca. 1361 W/m² utenfor atmosfeeren', isCorrect: true },
        { id: 'b', text: 'Ca. 340 W/m² ved jordoverflaten', isCorrect: false },
        { id: 'c', text: 'Ca. 100 W/m² reflektert straaling', isCorrect: false },
        { id: 'd', text: 'Ca. 15 grader C gjennomsnittstemperatur', isCorrect: false },
      ],
      solution: 'Solkonstanten er ca. 1361 W/m², som er energien som treffer 1 m² vinkelrett paa solstraalene utenfor atmosfeeren. Fordi jorden er rund, mottar den i gjennomsnitt ca. 340 W/m².',
    },
    {
      id: 'geo1-7-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan drivhuseffekten fungerer.',
      solution: 'Kortboelget solstraaling passerer gjennom atmosfeeren og absorberes av jordoverflaten. Jorden varmes opp og sender ut langboelget varmestraaling. Drivhusgasser (CO₂, H₂O, CH₄ m.fl.) absorberer deler av denne varmestraalingen. Gassene sender noe av straalingen tilbake mot jorden (motstraaling). Dette varmer opp jordoverflaten og gjor den ca. 33 grader C varmere enn den ville vaert uten atmosfeere.',
    },
    {
      id: 'geo1-7-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type straaling absorberes av drivhusgasser?',
      options: [
        { id: 'a', text: 'Langboelget varmestraaling fra jorden', isCorrect: true },
        { id: 'b', text: 'Kortboelget solstraaling', isCorrect: false },
        { id: 'c', text: 'UV-straaling fra solen', isCorrect: false },
        { id: 'd', text: 'Synlig lys', isCorrect: false },
      ],
      solution: 'Drivhusgasser absorberer langboelget infraroed straaling (varmestraaling) som jorden sender ut. Kortboelget solstraaling passerer stort sett gjennom atmosfeeren uten aa bli absorbert av drivhusgassene.',
    },
    {
      id: 'geo1-7-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er albedo og hvorfor er det viktig for klimaet?',
      solution: 'Albedo er andelen innkommende solstraaling som reflekteres tilbake til verdensrommet. Hoey albedo (snoe, is, skyer) betyr mer refleksjon og mindre oppvarming. Lav albedo (hav, skog) betyr mer absorpsjon og oppvarming. Jordens gjennomsnittlige albedo er ca. 0.30. Endringer i snoe- og isdekke paavirker albedoen og kan forsterke klimaendringer gjennom is-albedo-tilbakekoplingen.',
    },
    {
      id: 'geo1-7-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mye varmere er jorden paa grunn av drivhuseffekten?',
      options: [
        { id: 'a', text: 'Ca. 33 grader C varmere', isCorrect: true },
        { id: 'b', text: 'Ca. 15 grader C varmere', isCorrect: false },
        { id: 'c', text: 'Ca. 5 grader C varmere', isCorrect: false },
        { id: 'd', text: 'Ca. 100 grader C varmere', isCorrect: false },
      ],
      solution: 'Uten drivhuseffekten ville jordens gjennomsnittstemperatur vaert ca. -18 grader C. Med drivhuseffekten er den ca. +15 grader C, altsaa 33 grader C varmere.',
    },
  ],
};

// ============================================================================
// Kapittel 7.3: Klimasoner
// ============================================================================

export const CHAPTER_GEOFAG_1_7_3: TextbookChapter = {
  id: 'geofag-1-7-3',
  courseId: 'geofag-1',
  chapterNumber: '7.3',
  title: 'Klimasoner',
  description: 'Jordens hovedklimasoner og Koeppen-systemet for klimaklassifisering.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive jordens hovedklimasoner og deres kjennetegn',
    'forklare Koeppen-systemet for klimaklassifisering',
    'gjoere rede for sammenhengen mellom klimasoner og vegetasjon',
  ],
  content: [
    {
      id: 'geo1-7-3-intro',
      type: 'text',
      content: `# Klimasoner

Jorden kan deles inn i klimasoner basert paa temperatur og nedbor. Det mest brukte klassifiseringssystemet ble utviklet av den tyske klimatologen Wladimir Koeppen (1846-1940).

## Hvorfor klassifisere klima?

Klimaklassifisering gjor det mulig aa:
- Sammenligne klimaer i ulike deler av verden
- Forutsi hvilken vegetasjon som kan vokse
- Planlegge landbruk og bosetning
- Forstaa okosystemer og dyreliv

## Koeppens hovedgrupper

Koeppen-systemet bruker bokstaver for aa beskrive klimatyper:

| Bokstav | Klimatype | Kriterium |
|---------|-----------|-----------|
| A | Tropisk | Kaldeste maaned > 18 grader C |
| B | Toert (arid) | Fordampning > nedbor |
| C | Temperert | Kaldeste maaned -3 til 18 grader C |
| D | Kontinentalt | Kaldeste maaned < -3 grader C, varmeste > 10 grader C |
| E | Polart | Varmeste maaned < 10 grader C |`,
    },
    {
      id: 'geo1-7-3-def-koeppen',
      type: 'definition',
      title: 'Koeppen-systemet',
      content: 'Koeppen-klimaklassifiseringen er et system som kategoriserer klimatyper basert paa maanedlige gjennomsnittstemperaturer og nedbor. Systemet bruker bokstavkoder (f.eks. Af, Cfb, Dfc) som beskriver temperatur, neborsfordeling og aarstidsvariasjoner.',
    },
    {
      id: 'geo1-7-3-tropisk',
      type: 'text',
      content: `## A - Tropisk klima

**Kriterium:** Kaldeste maaned > 18 grader C

Tropisk klima finnes i et belte rundt ekvator, mellom vendesirklene.

### Undertyper

**Af - Tropisk regnskog**
- Nedbor alle maaneder (> 60 mm)
- Amazonas, Kongo, Soeroest-Asia
- Tett regnskog med hoey biodiversitet

**Am - Tropisk monsun**
- Kort toerr sesong
- India, Myanmar, deler av Afrika
- Monsunskog

**Aw - Tropisk savanne**
- Tydelig toerketid om vinteren
- Afrika soer for Sahara, Brasil, Nord-Australia
- Savannelandskap med gress og spredte traer

### Kjennetegn
- Hoeye temperaturer hele aaret (25-28 grader C)
- Liten temperaturvariasjon gjennom aaret
- Mye nedbor totalt (1500-4000 mm/aar)`,
    },
    {
      id: 'geo1-7-3-toert',
      type: 'text',
      content: `## B - Toert (arid) klima

**Kriterium:** Fordampning stoerre enn nedbor

Toert klima finnes i oerkener og stepper, ofte ved subtropiske hoeytrykksbelter.

### Undertyper

**BWh - Varmt oerkenklima**
- Ekstremt lite nedbor (< 250 mm/aar)
- Sahara, Arabia, Australias innland
- Sanddyner og steinoerken

**BWk - Kaldt oerkenklima**
- Oerken paa hoeye breddegrader eller hoeyder
- Gobi, Patagonia
- Kalde vintre

**BSh - Varmt steppeklima**
- Halvtoert, mer nedbor enn oerken
- Sahel, Nord-Mexico
- Gressletter

**BSk - Kaldt steppeklima**
- Halvtoert, kalde vintre
- Mongolia, Kasakhstan
- Tempererte gressletter

### Kjennetegn
- Store temperatursvingninger (dag/natt)
- Svært lite vegetasjon
- Spesialtilpassede planter og dyr`,
    },
    {
      id: 'geo1-7-3-temperert',
      type: 'text',
      content: `## C - Temperert klima

**Kriterium:** Kaldeste maaned mellom -3 grader C og 18 grader C

Temperert klima finnes paa midlere breddegrader, med milde vintre.

### Undertyper

**Cfa - Fuktig subtropisk**
- Varme, fuktige somre
- Soeroest-USA, Oest-Kina, Japan
- Loevskog og jordbruk

**Cfb - Oseanisk (maritimt)**
- Milde vintre, kjoelige somre
- Vest-Europa, New Zealand
- Loev- og barskog

**Cfc - Subpolart oseanisk**
- Kjoelige somre, milde vintre
- Island, Soer-Chile, Faeroyene
- Beitemark og myr

**Csa/Csb - Middelhavsklima**
- Toerre somre, nedbor om vinteren
- Middelhavsom raadet, California
- Hardfoere busker, oliventraer

### Norge
- Vestlandet har **Cfb** (oseanisk) klima
- Enkelte fjordomraader har **Cfc** (subpolart oseanisk)`,
    },
    {
      id: 'geo1-7-3-kontinental',
      type: 'text',
      content: `## D - Kontinentalt klima

**Kriterium:** Kaldeste maaned < -3 grader C, varmeste maaned > 10 grader C

Kontinentalt klima finnes hovedsakelig paa den nordlige halvkule, i innlandet av kontinenter.

### Undertyper

**Dfb - Varmt kontinentalt**
- Fire distinkte aarstider
- Oest-Europa, nordoestlige USA
- Blandingsskog

**Dfc - Subarktisk**
- Korte, kjoelige somre
- Nord-Skandinavia, Sibir, Canada
- **Taiga** (boreal barskog)

**Dfd - Ekstremt kontinentalt**
- Svært kalde vintre (< -38 grader C)
- Oest-Sibir (Verkhojansk, Ojmjakon)
- Laerkeskog, permafrost

### Norge
- Oestlandet og innlandet: **Dfb/Dfc**
- Finnmark: **Dfc**`,
    },
    {
      id: 'geo1-7-3-polar',
      type: 'text',
      content: `## E - Polart klima

**Kriterium:** Varmeste maaned < 10 grader C

Polart klima finnes i arktiske og antarktiske omraader, samt paa hoeye fjell.

### Undertyper

**ET - Tundraklima**
- Varmeste maaned 0-10 grader C
- Arktisk kyst, hoeyfjell
- Moser, lav, dvergbjoerk
- Permafrost under bakken

**EF - Iskappeklima**
- Alle maaneder < 0 grader C
- Antarktis, innlands-Groenland
- Permanent is og snoe
- Ingen vegetasjon

### Kjennetegn
- Midnattssol og moerketid
- Permafrost
- Tundra eller isoerken
- Lite nedbor (men ogsaa lite fordampning)

### Norge
- Svalbard: **ET** (tundra)
- Hoeyfjell over troegrensen: **ET**`,
    },
    {
      id: 'geo1-7-3-def-tundra',
      type: 'definition',
      title: 'Tundra',
      content: 'Tundra er et troelost landskap i arktiske omraader eller over troegrensen i fjellet. Vegetasjonen bestaar av moser, lav, gress og lave busker. Jorden har permafrost (permanent frosset grunn) som hindrer dyp rotutvikling.',
    },
    {
      id: 'geo1-7-3-example',
      type: 'example',
      title: 'Klassifisering av norske byer',
      problem: 'Hvilke Koeppen-klimatyper har Bergen, Oslo og Tromsoe?',
      solution: `**Klassifisering:**

**Bergen - Cfb (Oseanisk)**
- Milde vintre (januar ca. 2 grader C)
- Kjoelige somre (juli ca. 15 grader C)
- Mye nedbor (ca. 2250 mm/aar)
- Maritimt paavirket

**Oslo - Dfb (Varmt kontinentalt)**
- Kalde vintre (januar ca. -4 grader C)
- Varme somre (juli ca. 18 grader C)
- Moderat nedbor (ca. 800 mm/aar)
- Innlandsklima

**Tromsoe - Dfc (Subarktisk)**
- Kalde vintre (januar ca. -4 grader C)
- Kjoelige somre (juli ca. 12 grader C)
- Moderat nedbor (ca. 1000 mm/aar)
- Paavirket av Golfstroemmen (mildere enn forventet)`,
    },
  ],
  exercises: [
    {
      id: 'geo1-7-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken bokstav brukes for tropisk klima i Koeppen-systemet?',
      options: [
        { id: 'a', text: 'A', isCorrect: true },
        { id: 'b', text: 'B', isCorrect: false },
        { id: 'c', text: 'C', isCorrect: false },
        { id: 'd', text: 'T', isCorrect: false },
      ],
      solution: 'A staar for tropisk klima i Koeppen-systemet. Bokstavene er: A (tropisk), B (toert), C (temperert), D (kontinentalt), E (polart).',
    },
    {
      id: 'geo1-7-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv kjennetegnene ved tundraklima (ET).',
      solution: 'Tundraklima har varmeste maaned mellom 0 grader C og 10 grader C. Det finnes ikke traer, bare moser, lav og lave busker. Bakken har permafrost (permanent frosset grunn). Det er midnattssol om sommeren og moerketid om vinteren. Nedboren er lav, men fordampningen er ogsaa lav. I Norge finnes tundraklima paa Svalbard og i hoeyfjellt over troegrensen.',
    },
    {
      id: 'geo1-7-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva karakteriserer middelhavsklima (Cs)?',
      options: [
        { id: 'a', text: 'Toerre somre og nedbor om vinteren', isCorrect: true },
        { id: 'b', text: 'Vaate somre og toerre vintre', isCorrect: false },
        { id: 'c', text: 'Nedbor hele aaret', isCorrect: false },
        { id: 'd', text: 'Svært lite nedbor hele aaret', isCorrect: false },
      ],
      solution: 'Middelhavsklima (Cs) har toerre, varme somre og milde, vaate vintre. Vegetasjonen er tilpasset toerken med hardfoere busker, oliventraer og eik.',
    },
    {
      id: 'geo1-7-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom Dfb og Dfc klima.',
      solution: 'Dfb (varmt kontinentalt) har fire distinkte aarstider med relativt varme somre (varmeste maaned over 22 grader C eller minst fire maaneder over 10 grader C). Dfc (subarktisk) har kortere, kjoligere somre og lengre, kaldere vintre (faerre enn fire maaneder over 10 grader C). Dfb finnes paa Oestlandet, mens Dfc finnes i indre Troms og Finnmark. Begge har kalde vintre (< -3 grader C), men Dfc er generelt kaldere og har kortere vekstsesong.',
    },
    {
      id: 'geo1-7-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket klima har Vestlandet i Norge ifoelge Koeppen-systemet?',
      options: [
        { id: 'a', text: 'Cfb - Oseanisk (maritimt)', isCorrect: true },
        { id: 'b', text: 'Dfb - Kontinentalt', isCorrect: false },
        { id: 'c', text: 'ET - Tundra', isCorrect: false },
        { id: 'd', text: 'Csa - Middelhavsklima', isCorrect: false },
      ],
      solution: 'Vestlandet har Cfb-klima (oseanisk/maritimt temperert) med milde vintre, kjoelige somre og mye nedbor paa grunn av naerheten til havet og Golfstroemmen.',
    },
  ],
};

// ============================================================================
// Kapittel 7.4: Naturlige klimavariasjoner
// ============================================================================

export const CHAPTER_GEOFAG_1_7_4: TextbookChapter = {
  id: 'geofag-1-7-4',
  courseId: 'geofag-1',
  chapterNumber: '7.4',
  title: 'Naturlige klimavariasjoner',
  description: 'Milankovitch-sykluser, solvariasjoner, vulkaner og naturlige klimaendringer gjennom jordas historie.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive naturlige klimavariasjoner gjennom jordas historie',
    'forklare Milankovitch-syklusene og deres betydning for istider',
    'gjoere rede for andre naturlige faktorer som paavirker klimaet',
  ],
  content: [
    {
      id: 'geo1-7-4-intro',
      type: 'text',
      content: `# Naturlige klimavariasjoner

Jordens klima har alltid variert. Gjennom jordas 4.6 milliarder aar lange historie har klimaet svingt mellom varme perioder og istider. Disse naturlige variasjonene har flere aarsaker.

## Tidsskalaer

Klimavariasjoner skjer paa ulike tidsskalaer:

| Tidsskala | Aarsaker |
|-----------|----------|
| Millioner av aar | Kontinentaldrift, fjellkjededannelse |
| Titusener av aar | Milankovitch-sykluser (istider) |
| Hundrevis/tusenvis av aar | Solvariasjoner, vulkaner |
| Tiaar til hundreaar | Havstroemmer, naturlig variabilitet |`,
    },
    {
      id: 'geo1-7-4-milankovitch',
      type: 'text',
      content: `## Milankovitch-sykluser

Den serbiske astronomen Milutin Milankovitch (1879-1958) viste at variasjoner i jordens bane og aksehelning paavirker fordelingen av solstraaling over jordoverflaten. Disse variasjonene er hovedaarsaken til istider og mellomistider.

### Eksentrisitet (ca. 100 000 aar)

Jordens bane rundt solen varierer mellom nesten sirkulaer og mer elliptisk. Dette paavirker hvor mye solenergi jorden mottar gjennom aaret.

### Aksehelning (ca. 41 000 aar)

Jordens akse heller mellom 22.1 og 24.5 grader fra loddrett. Stoerre helning gir kraftigere aarstider.

### Presesjon (ca. 26 000 aar)

Jordaksen "vakler" som en snurrebass. Dette endrer naar paa aaret jorden er naermest solen.

### Effekt paa klimaet

- Milankovitch-syklusene endrer hvor mye solenergi som treffer hoye breddegrader
- Naarr somrene paa nordlige halvkule er kjoelige, smelter ikke vintersnoen
- Snoe akkumuleres og danner iskapper
- Hoey albedo forsterker avkjoelingen
- **Resultat: Istid**`,
    },
    {
      id: 'geo1-7-4-def-milankovitch',
      type: 'definition',
      title: 'Milankovitch-sykluser',
      content: 'Milankovitch-syklusene er periodiske variasjoner i jordens bane og aksehelling som paavirker fordelingen av solinnstraaling over jordoverflaten. Disse syklusene er hovedaarsaken til istider og mellomistider de siste millioner aarene.',
    },
    {
      id: 'geo1-7-4-istider',
      type: 'text',
      content: `## Istider og mellomistider

De siste 2.6 millioner aar (kvartaertiden) har vaert preget av vekslende istider og mellomistider.

### Istider

- Iskapper dekker store deler av Nord-Amerika og Europa
- Havnivaaet synker (vann bundet i is)
- Norge var dekket av 2-3 km tykk is
- Varte typisk 80 000-100 000 aar

### Mellomistider

- Varmere perioder mellom istidene
- Iskappene smelter
- Havnivaaet stiger
- Vi lever naa i en mellomistid (Holocen)
- Varer typisk 10 000-20 000 aar

### Siste istid

- Weichsel-istiden: ca. 115 000-11 700 aar siden
- Maksimum for ca. 20 000 aar siden
- Skandinavisk iskappe dekket Norge
- Havnivaaet var ca. 120 m lavere enn i dag`,
    },
    {
      id: 'geo1-7-4-sol',
      type: 'text',
      content: `## Solvariasjoner

Solens energiutsending varierer over tid, selv om variasjonene er smaa.

### Solflekkssyklusen (ca. 11 aar)

- Antall solflekker varierer med ca. 11 aars periode
- Solens totale energiutsending varierer med ca. 0.1%
- Liten direkte effekt paa klimaet

### Langvarige solvariasjoner

- Perioder med faerre solflekker (solminima)
- **Maunder-minimum** (1645-1715): Nesten ingen solflekker
- Sammenfaller med "Den lille istid"
- Usikkert hvor stor klimaeffekten var

### Solens betydning i dag

- Solaktiviteten har vaert relativt stabil siden 1950
- Kan ikke forklare den observerte oppvarmingen
- Solvariasjoner har liten effekt sammenlignet med drivhusgasser`,
    },
    {
      id: 'geo1-7-4-vulkan',
      type: 'text',
      content: `## Vulkansk aktivitet

Store vulkanutbrudd kan paavirke klimaet over kortere perioder.

### Mekanisme

1. Vulkanen sender aske og gasser hoyt opp i atmosfaeren
2. **Svoveldioksid** (SO₂) reagerer med vann og danner aerosoler
3. Aerosolene reflekterer solstraaling tilbake til verdensrommet
4. Mindre solenergi naar jordoverflaten
5. **Resultat: Midlertidig avkjoeling**

### Eksempler

| Utbrudd | Aar | Klimaeffekt |
|---------|-----|-------------|
| Tambora | 1815 | 1816 = "Aaret uten sommer" |
| Krakatau | 1883 | Global avkjoeling i 1-2 aar |
| Pinatubo | 1991 | 0.5 grader C avkjoeling i 1-2 aar |

### Varighet

- Klimaeffekten varer typisk 1-3 aar
- Aerosolene faller gradvis ut av atmosfaeren
- Ingen langvarig klimaeffekt`,
    },
    {
      id: 'geo1-7-4-hav',
      type: 'text',
      content: `## Naturlig klimavariabilitet

Klimasystemet har ogsaa naturlig variabilitet paa kortere tidsskalaer.

### El Nino og La Nina

- Naturlig variasjon i havtemperaturer i Stillehavet
- **El Nino**: Varmt vann i oest-Stillehavet, paavirker vaer globalt
- **La Nina**: Kaldt vann, motsatt effekt
- Syklus paa 2-7 aar

### Den nordatlantiske oscillasjonen (NAO)

- Variasjon i trykkforskjellen mellom Island og Asorene
- Paavirker vaeret i Europa og Norge
- Positiv NAO: Milde, vaate vintre i Norge
- Negativ NAO: Kalde, toerre vintre

### Atlantisk multidekadar oscillasjon (AMO)

- Variasjon i havtemperaturer i Nord-Atlanteren
- Syklus paa 60-80 aar
- Paavirker nedbor og temperatur i Europa og Nord-Amerika`,
    },
    {
      id: 'geo1-7-4-example',
      type: 'example',
      title: 'Vulkanutbrudd og klima',
      problem: 'Forklar hvorfor aaret 1816 ble kalt "Aaret uten sommer".',
      solution: `**Forklaring:**

1. **Tambora-utbruddet (april 1815)**
   - Et av historiens stoerste vulkanutbrudd
   - Indonesia
   - Sendte enorme mengder aske og SO₂ til stratosfaeren

2. **Aerosoler i atmosfaeren**
   - Svoveldioksid dannet svovelsyreaerosoler
   - Spredte seg globalt i stratosfaeren
   - Reflekterte solstraaling tilbake til verdensrommet

3. **Klimaeffekter i 1816**
   - Global temperatur sank med ca. 0.5-1 grader C
   - Snoe og frost om sommeren i Europa og Nord-Amerika
   - Avlingssvikt og hungersnoed
   - Kalt "Aaret uten sommer"

4. **Laerdom**
   - Store vulkanutbrudd kan gi betydelig, men kortvarig, avkjoeling
   - Effekten varer 1-3 aar
   - Illustrerer atmosfaerens foelsomhet for endringer i straalingsbalansen`,
    },
  ],
  exercises: [
    {
      id: 'geo1-7-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedaarsaken til istider og mellomistider?',
      options: [
        { id: 'a', text: 'Milankovitch-syklusene', isCorrect: true },
        { id: 'b', text: 'Vulkanutbrudd', isCorrect: false },
        { id: 'c', text: 'Solflekker', isCorrect: false },
        { id: 'd', text: 'El Nino', isCorrect: false },
      ],
      solution: 'Milankovitch-syklusene (variasjoner i jordens bane og aksehelning) driver istider og mellomistider ved aa endre fordelingen av solinnstraaling over jordoverflaten.',
    },
    {
      id: 'geo1-7-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de tre komponentene i Milankovitch-syklusene.',
      solution: '1) Eksentrisitet (ca. 100 000 aar): Jordens bane varierer mellom naer sirkulaer og mer elliptisk, noe som paavirker total solenergi mottatt. 2) Aksehelning (ca. 41 000 aar): Jordaksen varierer mellom 22.1 og 24.5 grader, noe som paavirker aarstidenes styrke. 3) Presesjon (ca. 26 000 aar): Jordaksen "vakler", noe som endrer naar paa aaret jorden er naermest solen.',
    },
    {
      id: 'geo1-7-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan paavirker store vulkanutbrudd klimaet?',
      options: [
        { id: 'a', text: 'Aerosoler reflekterer solstraaling og gir avkjoeling', isCorrect: true },
        { id: 'b', text: 'CO₂ fra vulkanen varmer opp atmosfaeren', isCorrect: false },
        { id: 'c', text: 'Aske absorberer varme og gir oppvarming', isCorrect: false },
        { id: 'd', text: 'Vulkaner har ingen klimaeffekt', isCorrect: false },
      ],
      solution: 'Store vulkanutbrudd sender svoveldioksid til stratosfaeren. Dette danner aerosoler som reflekterer solstraaling tilbake til verdensrommet. Resultatet er en midlertidig avkjoeling paa 0.5-1 grader C i 1-3 aar.',
    },
    {
      id: 'geo1-7-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva El Nino er og hvordan det paavirker klimaet.',
      solution: 'El Nino er en naturlig klimavariasjon der havoverflaten i oestlige Stillehavet blir uvanlig varm. Dette skjer med 2-7 aars mellomrom og varer ca. 1 aar. El Nino paavirker vaermoenstrene globalt: toerkee i Australia og Indonesia, kraftig nedbor i Soer-Amerika, mildere vintre i Nord-Amerika, og kan gi varmerekorder globalt. La Nina er motsatt fenomen med kaldt vann i oestlige Stillehavet.',
    },
    {
      id: 'geo1-7-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor lenge varer klimaeffekten av et stort vulkanutbrudd typisk?',
      options: [
        { id: 'a', text: '1-3 aar', isCorrect: true },
        { id: 'b', text: '10-20 aar', isCorrect: false },
        { id: 'c', text: '100-200 aar', isCorrect: false },
        { id: 'd', text: 'Permanent', isCorrect: false },
      ],
      solution: 'Klimaeffekten av vulkanutbrudd varer typisk 1-3 aar. Aerosolene i stratosfaeren faller gradvis ut, og klimaet returnerer til det normale. Dette er mye kortere enn effekten av drivhusgasser.',
    },
  ],
};

// ============================================================================
// Kapittel 7.5: Norges klima
// ============================================================================

export const CHAPTER_GEOFAG_1_7_5: TextbookChapter = {
  id: 'geofag-1-7-5',
  courseId: 'geofag-1',
  chapterNumber: '7.5',
  title: 'Norges klima',
  description: 'Klimaforhold i Norge, regionale forskjeller og klimaendringer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive hovedtrekkene i Norges klima',
    'forklare regionale klimaforskjeller i Norge',
    'gjoere rede for observerte og forventede klimaendringer i Norge',
  ],
  content: [
    {
      id: 'geo1-7-5-intro',
      type: 'text',
      content: `# Norges klima

Norge strekker seg over 13 breddegrader (ca. 58-71 grader N) og har stor variasjon i klima. Fra mildt kystklima paa Vestlandet til arktisk klima paa Svalbard - Norge har et mangfold av klimatyper.

## Hovedtrekk

**Mildere enn forventet:** Norge er vesentlig varmere enn andre omraader paa samme breddegrad, takket vaere Golfstroemmen.

**Store kontraster:** Stor forskjell mellom kyst og innland, soer og nord, lavland og fjell.

**Mye nedbor:** Vestlandet er blant Europas mest nedborsrike omraader.`,
    },
    {
      id: 'geo1-7-5-golfstrom',
      type: 'text',
      content: `## Golfstroemmens betydning

Golfstroemmen og Den nordatlantiske stroem transporterer varmt vann fra tropene nordover langs Norges kyst. Dette har enorm betydning for klimaet.

### Temperatureffekt

- Norge er 5-10 grader C varmere enn andre steder paa samme breddegrad
- Tromsoe (69 grader N) har aarsgjennomsnitt 3 grader C
- Churchill, Canada (59 grader N) har aarsgjennomsnitt -7 grader C

### Isfrie havner

- Norske havner er isfrie hele aaret
- Murmansk (69 grader N) har aapen havn pga. Golfstroemmen
- Arkhangelsk (64 grader N) fryser til om vinteren (lengre fra Golfstroemmen)

### Fuktig luft

- Varmt hav gir mye fordampning
- Fuktig luft blaser inn over land
- Gir mye nedbor, spesielt paa Vestlandet`,
    },
    {
      id: 'geo1-7-5-regioner',
      type: 'text',
      content: `## Klimaregioner i Norge

### Vestlandet (Cfb - Oseanisk)

- Milde vintre (0-5 grader C i januar)
- Kjoelige somre (14-16 grader C i juli)
- Svært mye nedbor (1500-3000 mm/aar)
- Mange nedbordager (200+ per aar)
- Eksempel: Bergen, Aaalesund

### Oestlandet (Dfb/Dfc - Kontinentalt)

- Kaldere vintre (-3 til -7 grader C i januar)
- Varmere somre (16-18 grader C i juli)
- Moderat nedbor (600-900 mm/aar)
- Eksempel: Oslo, Lillehammer

### Troenderlag

- Overgangsklima mellom vest og oest
- Kyststripa er mild og vaat
- Innlandet er kaldere og toerrere
- Eksempel: Trondheim

### Nord-Norge

- Kyst: Mildt for breddegraden (Cfc/Dfc)
- Innland: Kaldt, kontinentalt (Dfc)
- Stor variasjon mellom kyst og innland
- Eksempel: Tromsoe (kyst), Alta (innland)

### Svalbard (ET - Tundra)

- Arktisk klima
- Permafrost
- Aarsmiddel ca. -5 grader C
- Lite nedbor (< 400 mm/aar)`,
    },
    {
      id: 'geo1-7-5-nedbor',
      type: 'text',
      content: `## Nedborsfordeling

Norge har ekstreme forskjeller i nedbor mellom vest og oest.

### Vestlandet (losiden)

- 2000-3000 mm/aar typisk
- Brekke i Sogn: ca. 3500 mm/aar
- Orografisk nedbor fra atlantisk luft
- Mange nedbordager

### Oestlandet (lesiden/regnskygge)

- 500-800 mm/aar typisk
- Skjaak i Ottadalen: ca. 300 mm/aar (toerreste sted)
- Ligger i regnskygge av fjellkjeden
- Faerre nedbordager, men kan vaere intense

### Nedborstyper

**Orografisk nedbor:** Dominerer paa Vestlandet. Fuktig luft presses opp langs fjellsiden og avgir nedbor.

**Frontalnedbor:** Vanlig over hele landet. Varme og kalde luftmasser moetes.

**Konvektiv nedbor:** Byger, spesielt om sommeren. Oppvarmet luft stiger og avgir nedbor.`,
    },
    {
      id: 'geo1-7-5-aarstider',
      type: 'text',
      content: `## Aarstider og dagslengde

Norges hoye breddegrad gir store variasjoner i dagslengde.

### Midnattssol og moerketid

| Sted | Midnattssol | Moerketid |
|------|-------------|-----------|
| Nordkapp (71 grader N) | 14.5.-29.7. | 18.11.-24.1. |
| Tromsoe (69.5 grader N) | 20.5.-22.7. | 25.11.-17.1. |
| Bodo (67 grader N) | 4.6.-8.7. | Ingen |
| Trondheim (63 grader N) | Ingen | Ingen |

### Aarstidsvariasjoner

**Sommer:**
- Lange dager (nesten midnattssol i Soer-Norge)
- Temperaturer 15-25 grader C
- Vekstsesongens lengde: 100-200 dager

**Vinter:**
- Korte dager (moerketid i nord)
- Temperaturer -5 til -20 grader C (varierer mye)
- Snoe i de fleste omraader`,
    },
    {
      id: 'geo1-7-5-endringer',
      type: 'text',
      content: `## Klimaendringer i Norge

Norge opplever allerede klimaendringer, og forventer stoerre endringer i fremtiden.

### Observerte endringer

- **Temperatur:** Oekt med ca. 1.1 grader C siden 1900
- **Nedbor:** Oekt med 18% siden 1900
- **Isbreer:** Trekker seg tilbake
- **Vekstsesong:** Blitt lengre
- **Permafrost:** Smelter paa Svalbard

### Forventede endringer (mot 2100)

| Parameter | Forventet endring |
|-----------|-------------------|
| Temperatur | +3 til +6 grader C |
| Nedbor | +5 til +30% |
| Havnivaa | +30 til +80 cm |
| Snoeseong | Kortere |
| Isbreer | Kraftig reduksjon |

### Konsekvenser

- **Jordbruk:** Lengre vekstsesong, nye arter mulig
- **Skog:** Troegrensa stiger
- **Flom:** Endret floemoenter, mer regnflom
- **Skred:** Endret skredfare
- **Infrastruktur:** Mer ekstremvaer
- **Naturmangfold:** Arter flytter nordover og oppover`,
    },
    {
      id: 'geo1-7-5-example',
      type: 'example',
      title: 'Sammenligning av kystklima og innlandsklima',
      problem: 'Sammenlign klimaet i Bergen og Roros og forklar forskjellene.',
      solution: `**Klimasammenligning:**

| Faktor | Bergen | Roros |
|--------|--------|-------|
| Breddegrad | 60 grader N | 62.5 grader N |
| Hoeyde | 12 m | 628 m |
| Avstand til hav | Ved kysten | Ca. 200 km |
| Aarsmiddeltemp. | 8 grader C | 1 grader C |
| Januar | 2 grader C | -11 grader C |
| Juli | 15 grader C | 13 grader C |
| Amplitude | 13 grader C | 24 grader C |
| Nedbor | 2250 mm | 500 mm |

**Forklaring av forskjellene:**

1. **Temperaturforskjell:** Bergen har maritimt klima - havet jevner ut temperaturen. Roros har kontinentalt klima med stoerre svingninger.

2. **Amplitude:** Roros har nesten dobbelt saa stor aarlig temperaturamplitude (forskjell sommer-vinter).

3. **Nedbor:** Bergen ligger i lo for vestlige vinder og faar mye orografisk nedbor. Roros ligger i regnskygge oest for fjellkjeden.

4. **Hoeyde:** Roros' hoeyde bidrar til lavere temperatur (ca. 3-4 grader C kaldere pga. hoeyde).`,
    },
  ],
  exercises: [
    {
      id: 'geo1-7-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvorfor er Norge mildere enn andre omraader paa samme breddegrad?',
      options: [
        { id: 'a', text: 'Golfstroemmen og Den nordatlantiske stroem', isCorrect: true },
        { id: 'b', text: 'Naerhet til Polarsirkelen', isCorrect: false },
        { id: 'c', text: 'Hoeyden over havet', isCorrect: false },
        { id: 'd', text: 'Mange fjorder', isCorrect: false },
      ],
      solution: 'Golfstroemmen og Den nordatlantiske stroem transporterer varmt vann fra tropene nordover langs Norges kyst. Dette gjor Norge 5-10 grader C varmere enn andre steder paa samme breddegrad.',
    },
    {
      id: 'geo1-7-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Vestlandet faar saa mye mer nedbor enn Oestlandet.',
      solution: 'Vestlandet ligger i lo for de dominerende vestlige vindene. Fuktig atlantisk luft presses opp langs fjellsidene, avkjoeles og avgir nedbor (orografisk nedbor). Oestlandet ligger i regnskygge paa oestsiden av fjellkjeden. Luften som kommer over fjellene har allerede avgitt det meste av fuktigheten, og naar den synker ned mot Oestlandet varmes den opp og blir enda toerrere. Resultatet er at Bergen faar ca. 2250 mm nedbor mens Oslo faar ca. 800 mm.',
    },
    {
      id: 'geo1-7-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken Koeppen-klimatype har Bergen?',
      options: [
        { id: 'a', text: 'Cfb - Oseanisk (maritimt temperert)', isCorrect: true },
        { id: 'b', text: 'Dfb - Varmt kontinentalt', isCorrect: false },
        { id: 'c', text: 'ET - Tundra', isCorrect: false },
        { id: 'd', text: 'Dfc - Subarktisk', isCorrect: false },
      ],
      solution: 'Bergen har Cfb-klima (oseanisk/maritimt temperert). Kjennetegn: Milde vintre (kaldeste maaned over -3 grader C), kjoelige somre, mye nedbor hele aaret. C = temperert, f = nedbor hele aaret, b = varmeste maaned under 22 grader C.',
    },
    {
      id: 'geo1-7-5-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv de viktigste observerte og forventede klimaendringene i Norge.',
      solution: 'Observerte endringer: Temperaturen har oekt med ca. 1.1 grader C siden 1900, nedboren har oekt med 18%, isbreene trekker seg tilbake, vekstsesongen har blitt lengre, og permafrosten smelter paa Svalbard. Forventede endringer mot 2100: Temperaturen kan oeke med 3-6 grader C, nedboren kan oeke med 5-30%, havnivaaet kan stige 30-80 cm, snoesesongen blir kortere, og isbreene vil reduseres kraftig. Konsekvenser inkluderer endrede jordbruksforhold, hoeyere troegrense, endret floemoenter, og arter som flytter nordover og oppover.',
    },
    {
      id: 'geo1-7-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket sted i Norge har minst nedbor?',
      options: [
        { id: 'a', text: 'Skjaak i Ottadalen', isCorrect: true },
        { id: 'b', text: 'Bergen', isCorrect: false },
        { id: 'c', text: 'Tromsoe', isCorrect: false },
        { id: 'd', text: 'Oslo', isCorrect: false },
      ],
      solution: 'Skjaak i Ottadalen er Norges toerreste sted med ca. 300 mm nedbor per aar. Omraadet ligger dypt inne i fjellene i regnskygge, beskyttet fra fuktig luft fra alle kanter.',
    },
  ],
};

// ============================================================================
// Samle alle Del 7-kapitler
// ============================================================================

export const GEOFAG_1_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_1_7_1,
  CHAPTER_GEOFAG_1_7_2,
  CHAPTER_GEOFAG_1_7_3,
  CHAPTER_GEOFAG_1_7_4,
  CHAPTER_GEOFAG_1_7_5,
];

export function getGeofag1Del7Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_1_DEL7_CHAPTERS.find(chapter => chapter.id === chapterId);
}
