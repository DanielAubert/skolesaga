/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Geofag 2 VG3 - Del 6: Hav og kryosfære
 *
 * Dekker LK20-kompetansemål for geofag 2 (GEO02-02):
 * - gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren
 * - forklare konsekvensene av jordens rotasjon, tetthetsforskjeller og trykkforskjeller og hvordan de påvirker havet og atmosfæren
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Havets egenskaper
// ============================================================================

export const CHAPTER_GEOFAG_2_6_1: TextbookChapter = {
  id: 'geofag-2-6-1',
  courseId: 'geofag-2',
  chapterNumber: '6.1',
  title: 'Havets egenskaper',
  description: 'Salinitet, temperatur, tetthet og termohaline egenskaper som bestemmer havets vannmasser.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren',
    'forklare konsekvensene av jordens rotasjon, tetthetsforskjeller og trykkforskjeller og hvordan de påvirker havet og atmosfæren',
  ],
  content: [
    {
      id: 'geo2-6-1-intro',
      type: 'text',
      content: `# Havets egenskaper

Havet dekker omtrent 71 % av jordoverflaten og inneholder 97 % av alt vann paa planeten. Havets fysiske og kjemiske egenskaper er avgjørende for klimasystemet, for biologisk mangfold og for sirkulasjonsmønstrene som fordeler varme rundt kloden.

## Hvorfor studere havets egenskaper?

- Havet regulerer jordens klima ved aa lagre og transportere varme
- Havets salinitet og temperatur bestemmer vannets tetthet, som driver den globale havsirkulasjonen
- Endringer i havets egenskaper kan faa store konsekvenser for vær, klima og økosystemer
- Havet absorberer omtrent 30 % av menneskeskapt CO₂ og over 90 % av overskuddsvarmen i klimasystemet`,
    },
    {
      id: 'geo2-6-1-def-salinitet',
      type: 'definition',
      title: 'Salinitet',
      content: 'Salinitet er et maal paa konsentrasjonen av oppløste salter i sjøvann, vanligvis oppgitt i promille (‰) eller PSU (Practical Salinity Units). Gjennomsnittlig salinitet i verdenshavene er ca. 35 ‰, som betyr at det er 35 gram salt per liter sjøvann. Natriumklorid (NaCl) utgjør omtrent 86 % av saltinnholdet.',
    },
    {
      id: 'geo2-6-1-salinitet-tekst',
      type: 'text',
      content: `## Salinitet

Saliniteten i havet varierer geografisk og med dybde. Flere faktorer paavirker saliniteten:

### Faktorer som øker saliniteten
- **Fordampning** - Vann fordamper, men saltene blir igjen
- **Isdannelse** - Naar sjøvann fryser, presses salt ut av iskrystallene
- **Liten tilførsel av ferskvann** - Omraader med lite nedbør og faa elver

### Faktorer som senker saliniteten
- **Nedbør** - Ferskvann fortynner sjøvannet
- **Elvetilførsel** - Store elver tilfører ferskvann til kystomraader
- **Issmelting** - Smeltende is tilfører ferskvann

### Geografisk variasjon

- **Subtropiske omraader**: Høy salinitet (36-37 ‰) pga. stor fordampning og lite nedbør
- **Ekvatoriale omraader**: Lavere salinitet pga. mye nedbør
- **Polare omraader**: Variabel - lav ved issmelting, høy ved isdannelse
- **Østersjøen**: Svært lav (7-8 ‰) pga. stor ferskvanntilførsel og begrenset utskiftning
- **Rødehavet**: Svært høy (over 40 ‰) pga. lite nedbør og stor fordampning`,
    },
    {
      id: 'geo2-6-1-example-salinitet',
      type: 'example',
      title: 'Salinitetsvariasjon i norske farvann',
      problem: 'Forklar hvorfor saliniteten i Oslofjorden er lavere enn i Nordsjøen, og hvordan dette varierer gjennom aaret.',
      solution: `**Salinitetsvariasjon i norske farvann:**

1. **Oslofjorden** har lavere salinitet (ca. 25-30 ‰) fordi:
   - Store elver som Glomma tilfører ferskvann
   - Begrenset vannutskiftning med Nordsjøen pga. terskelen ved Drøbak
   - Avrenning fra landomraader

2. **Nordsjøen** har høyere salinitet (ca. 34-35 ‰) fordi:
   - Aapent havomraade med god sirkulasjon
   - Tilførsel av atlantisk vann med høy salinitet
   - Mindre paavirkning av ferskvann

3. **Sesongvariasjon**:
   - Vaar/forsommer: Lavere salinitet pga. snøsmelting og økt elvetilførsel
   - Høst/vinter: Høyere salinitet pga. mindre ferskvanntilførsel

**Konklusjon:** Ferskvanntilførsel og graden av vannutskiftning med det aapne havet er de viktigste faktorene for salinitetsvariasjon i norske farvann.`,
    },
    {
      id: 'geo2-6-1-def-temperatur',
      type: 'definition',
      title: 'Havtemperatur og termoklin',
      content: 'Havtemperaturen varierer fra ca. -2 °C i polare omraader til over 30 °C i tropiske overflatevann. **Termokline** er det dybdeintervallet der temperaturen synker raskt med økende dybde. Over termoklinen ligger det varme overflatelaget (blandingslaget), og under termoklinen ligger det kalde dypvannet (ca. 1-4 °C).',
    },
    {
      id: 'geo2-6-1-temperatur-tekst',
      type: 'text',
      content: `## Temperatur

Havets temperatur bestemmes hovedsakelig av solinnstraaling og varierer sterkt med breddegrader og dybde.

### Vertikal temperaturfordeling

Havet kan deles inn i tre lag basert paa temperatur:

1. **Blandingslaget (0-200 m)**
   - Varmes opp av sola og blandes av vind og bølger
   - Relativt jevn temperatur gjennom hele laget
   - Varierer fra 25-30 °C i tropene til under 0 °C i polare omraader

2. **Termoklinen (200-1000 m)**
   - Rask temperaturfall med dybden
   - Fungerer som en barriere mellom overflate- og dypvann
   - Mest markert i tropene, svak eller fraværende i polare omraader

3. **Dypvannet (under 1000 m)**
   - Kaldt, typisk 1-4 °C
   - Svært stabil temperatur
   - Utgjør ca. 80 % av havvolumet`,
    },
    {
      id: 'geo2-6-1-def-tetthet',
      type: 'definition',
      title: 'Tetthet og termohaline egenskaper',
      content: 'Sjøvannets tetthet avhenger av tre faktorer: temperatur, salinitet og trykk. Kaldere vann er tettere enn varmt vann, og saltere vann er tettere enn ferskere vann. Begrepet **termohalin** refererer til kombinasjonen av temperatur (thermo) og salinitet (halin) som bestemmer vannets tetthet. Tetthetsforskjeller driver den dype havsirkulasjonen.',
    },
    {
      id: 'geo2-6-1-tetthet-tekst',
      type: 'text',
      content: `## Tetthet og vannmasser

Havvannets tetthet er nøkkelen til aa forstaa den vertikale sjiktingen i havet og den termohaline sirkulasjonen.

### Hva paavirker tettheten?

- **Temperatur**: Kaldere vann er tettere (viktigste faktor)
- **Salinitet**: Saltere vann er tettere
- **Trykk**: Økt trykk komprimerer vannet (mindre viktig for sirkulasjon)

Typiske tetthetsverdier for sjøvann ligger mellom 1020 og 1030 kg/m³.

### Vannmasser

En **vannmasse** er et stort volum av vann med karakteristisk temperatur og salinitet som den har faatt i sitt dannelsesomraade. Viktige vannmasser inkluderer:

- **Nordatlantisk dypvann (NADW)**: Dannes i Norskehavet og Grønlandshavet naar kaldt, salt overflatevann synker
- **Antarktisk bunnvann (AABW)**: Dannes langs kysten av Antarktis, verdens tetteste havvann
- **Middelhavsvannet**: Varmt og salt vann som strømmer ut gjennom Gibraltarstredet

### T-S-diagram

Oseanografer bruker T-S-diagrammer (temperatur-salinitet) for aa identifisere og spore vannmasser. Hver vannmasse har en karakteristisk «signatur» i diagrammet.`,
    },
    {
      id: 'geo2-6-1-example-tetthet',
      type: 'example',
      title: 'Hvorfor synker vann i Norskehavet?',
      problem: 'Forklar mekanismen som faar overflatevann i Norskehavet til aa synke ned og danne dypvann.',
      solution: `**Dannelse av Nordatlantisk dypvann (NADW):**

1. **Golfstrømmen** transporterer varmt, salt vann nordover fra tropene
2. Paa vei nordover avkjøles vannet av den kalde atmosfæren - det **avgir varme til luften**
3. Det kalde, men fortsatt salte vannet faar **høy tetthet**
4. Om vinteren forsterkes avkjølingen, og noe sjøvann fryser - isdannelsen **presser ut ekstra salt** som øker tettheten ytterligere
5. Det svært tette vannet **synker ned** til store dyp (2000-4000 m)
6. Dypvannet strømmer sørover langs bunnen av Atlanterhavet

**Konklusjon:** Kombinasjonen av avkjøling og saltanrikning gir vannet saa høy tetthet at det synker. Denne prosessen er motoren i den termohaline sirkulasjonen.`,
    },
    {
      id: 'geo2-6-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 6.1

- **Salinitet** maalles i promille; gjennomsnitt 35 ‰. Paavirkes av fordampning, nedbør, elvetilførsel og isdannelse/smelting.
- **Temperatur** varierer med breddegrad og dybde. Havet deles i blandingslag, termoklin og dypvann.
- **Tetthet** avhenger av temperatur og salinitet (termohaline egenskaper). Kaldere og saltere vann er tettere.
- **Vannmasser** er store vannvolumer med karakteristisk temperatur og salinitet, dannet i bestemte omraader.
- Tetthetsforskjeller er drivkraften bak den dype havsirkulasjonen.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-6-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er gjennomsnittlig salinitet i verdenshavene?',
      options: [
        { id: 'a', text: 'Ca. 35 ‰', isCorrect: true },
        { id: 'b', text: 'Ca. 15 ‰', isCorrect: false },
        { id: 'c', text: 'Ca. 50 ‰', isCorrect: false },
        { id: 'd', text: 'Ca. 5 ‰', isCorrect: false },
      ],
      solution: 'Gjennomsnittlig salinitet i verdenshavene er ca. 35 ‰ (promille), noe som betyr at det er omtrent 35 gram oppløste salter per liter sjøvann. Natriumklorid (NaCl) utgjør hoveddelen av saltinnholdet.',
    },
    {
      id: 'geo2-6-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med begrepet «termoklin», og beskriv den vertikale temperaturfordelingen i havet.',
      solution: 'Termoklinen er dybdeintervallet (ca. 200-1000 m) der temperaturen synker raskt med økende dybde. Over termoklinen finnes blandingslaget (0-200 m) der vind og bølger blander vannet slik at temperaturen er relativt jevn. Under termoklinen er dypvannet kaldt og stabilt (1-4 °C). Termoklinen er mest markert i tropiske omraader med varmt overflatevann, og nesten fraværende i polare omraader der overflatevannet allerede er kaldt.',
    },
    {
      id: 'geo2-6-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke to faktorer er viktigst for aa bestemme sjøvannets tetthet?',
      options: [
        { id: 'a', text: 'Temperatur og salinitet', isCorrect: true },
        { id: 'b', text: 'Trykk og oksygeninnhold', isCorrect: false },
        { id: 'c', text: 'pH og temperatur', isCorrect: false },
        { id: 'd', text: 'Salinitet og bølgehøyde', isCorrect: false },
      ],
      solution: 'Sjøvannets tetthet bestemmes hovedsakelig av temperatur og salinitet - derav begrepet «termohaline» egenskaper. Kaldere vann er tettere enn varmt vann, og saltere vann er tettere enn ferskere vann. Trykk spiller ogsaa en rolle, men temperatur og salinitet er de dominerende faktorene for tetthetsforskjeller som driver sirkulasjonen.',
    },
    {
      id: 'geo2-6-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Rødehavet har høyere salinitet enn Østersjøen.',
      solution: 'Rødehavet har svært høy salinitet (over 40 ‰) fordi det ligger i et tørt, varmt klimaomraade med stor fordampning og nesten ingen tilførsel av ferskvann fra elver eller nedbør. I tillegg er forbindelsen med Det indiske hav smal. Østersjøen har lav salinitet (ca. 7-8 ‰) fordi det mottar store mengder ferskvann fra elver (bl.a. Neva, Oder, Wisla) og nedbør, mens vannutskiftningen med Nordsjøen er begrenset av de grunne og smale danske stredene.',
    },
    {
      id: 'geo2-6-1-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva skjer med saliniteten naar sjøvann fryser til is?',
      options: [
        { id: 'a', text: 'Saliniteten i det gjenværende vannet øker fordi salt presses ut av isen', isCorrect: true },
        { id: 'b', text: 'Saliniteten forblir uendret i vannet rundt isen', isCorrect: false },
        { id: 'c', text: 'Saliniteten i det gjenværende vannet synker', isCorrect: false },
        { id: 'd', text: 'Saltet fryser inn i isen og forsvinner fra vannet', isCorrect: false },
      ],
      solution: 'Naar sjøvann fryser, danner iskrystallene et gitter av rent vann (H₂O). Saltionene passer ikke inn i krystallstrukturen og presses ut i det omkringliggende vannet. Denne prosessen kalles «brine rejection» og gjør det gjenværende vannet saltere og tettere. Dette er en viktig mekanisme for dypvannsdannelse i polare omraader.',
    },
    {
      id: 'geo2-6-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beskriv prosessen som fører til dannelse av Nordatlantisk dypvann (NADW) i Norskehavet, og forklar hvorfor denne prosessen er viktig for det globale klimasystemet.',
      solution: 'Golfstrømmen/Den nordatlantiske strømmen frakter varmt, salt vann fra tropene til Norskehavet. Paa vei nordover avgir vannet varme til atmosfæren og avkjøles gradvis. I Norskehavet er avkjølingen saa sterk, spesielt om vinteren, at vannet blir svært kaldt mens det beholder sin høye salinitet. Isdannelse langs kysten presser ut ekstra salt. Kombinasjonen av lav temperatur og høy salinitet gir vannet saa høy tetthet at det synker til dypet (2000-4000 m). Derfra strømmer det sørover som Nordatlantisk dypvann. Denne prosessen er viktig fordi den driver den termohaline sirkulasjonen, som transporterer varme nordover i Atlanterhavet og dermed gir Nordvest-Europa et mildere klima enn breddegraden skulle tilsi.',
    },
  ],
};

// ============================================================================
// Kapittel 6.2: Havsirkulasjon
// ============================================================================

export const CHAPTER_GEOFAG_2_6_2: TextbookChapter = {
  id: 'geofag-2-6-2',
  courseId: 'geofag-2',
  chapterNumber: '6.2',
  title: 'Havsirkulasjon',
  description: 'Vinddrevne overflatestrømmer, termohalin sirkulasjon (AMOC), Ekman-transport og oppstrømning.',
  estimatedMinutes: 22,
  competenceGoals: [
    'forklare konsekvensene av jordens rotasjon, tetthetsforskjeller og trykkforskjeller og hvordan de påvirker havet og atmosfæren',
    'gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren',
  ],
  content: [
    {
      id: 'geo2-6-2-intro',
      type: 'text',
      content: `# Havsirkulasjon

Havstrømmene er et gigantisk transportsystem som fordeler varme, salt, næringsstoffer og gasser rundt kloden. Havsirkulasjonen drives av to hovedmekanismer: vind ved overflaten og tetthetsforskjeller i dypet.

## To typer sirkulasjon

1. **Vinddrevet overfatesirkulasjon** - Drevet av den globale vindmønsteret, omfatter de store havstrømmene i øvre lag (0-200 m)
2. **Termohalin sirkulasjon** - Drevet av tetthetsforskjeller foraarsaket av temperatur- og salinitetsvariasjoner, omfatter den dype sirkulasjonen

Sammen utgjør disse det globale «transportbaandet» som binder verdenshavene sammen.`,
    },
    {
      id: 'geo2-6-2-def-overflatestrøm',
      type: 'definition',
      title: 'Vinddrevne overflatestrømmer',
      content: 'Vinddrevne overflatestrømmer er havstrømmer i de øverste 100-200 meterne som drives av friksjon mellom vind og havoverflaten. De store sirkulasjonscellene i verdenshavene kalles **gyrer** og følger de dominerende vindmønstrene. Paa grunn av corioliseffekten avbøyes strømmene mot høyre paa den nordlige halvkule og mot venstre paa den sørlige.',
    },
    {
      id: 'geo2-6-2-overflate-tekst',
      type: 'text',
      content: `## Vinddrevne overflatestrømmer

### De store gyrene

Overflatestrømmene danner store sirkulasjonsceller kalt gyrer:

- **Subtropiske gyrer** - Roterer med klokken paa nordlige halvkule, mot klokken paa sørlige
- **Subpolare gyrer** - Roterer i motsatt retning av de subtropiske

### Viktige havstrømmer

- **Golfstrømmen / Den nordatlantiske strømmen**: Frakter varmt vann fra Mexicogolfen nordøstover mot Europa. Gir Nordvest-Europa et mildere klima enn andre omraader paa samme breddegrad.
- **Kuroshio-strømmen**: Varm strøm i det vestlige Stillehavet (Japans «Golfstrøm»)
- **Humboldtstrømmen**: Kald strøm langs vestkysten av Sør-Amerika. Fører næringsrikt dypvann til overflaten.
- **Den antarktiske sirkumpolarstrømmen**: Verdens sterkeste havstrøm, strømmer rundt hele Antarktis

### Vestforsterkede strømmer

Havstrømmene paa vestsiden av havbassengene (f.eks. Golfstrømmen, Kuroshio) er smalere, dypere og sterkere enn de paa østsiden. Denne asymmetrien skyldes jordens rotasjon og kalles **vestforsterkning**.`,
    },
    {
      id: 'geo2-6-2-def-ekman',
      type: 'definition',
      title: 'Ekman-transport',
      content: 'Ekman-transport er den nettotransporten av vann som skyldes at vinden setter havoverflaten i bevegelse. Paa grunn av corioliseffekten dreier hver vannlag litt i forhold til laget over, slik at retningen endres med dybden (Ekman-spiralen). Resultatet er at den totale transporten av vann er 90° til høyre for vindretningen paa den nordlige halvkule (til venstre paa den sørlige).',
    },
    {
      id: 'geo2-6-2-ekman-tekst',
      type: 'text',
      content: `## Ekman-transport og oppstrømning

### Ekman-spiralen

Naar vinden blaaser over havoverflaten, setter friksjon overflatelaget i bevegelse. Corioliseffekten dreier strømretningen:

1. Overflatelaget beveger seg ca. 45° til høyre for vindretningen (nordlige halvkule)
2. Hvert lag under dreier litt mer til høyre og beveger seg saktere
3. Paa ca. 100 m dybde er retningen motsatt av overflaten, og hastigheten er nesten null
4. **Nettotransporten (Ekman-transport)** er 90° til høyre for vinden

### Oppstrømning (upwelling)

Oppstrømning oppstaar naar Ekman-transporten fjerner overflatevann fra et omraade, og dypvann strømmer opp for aa erstatte det:

- **Kystoppstrømning**: Vind parallelt med kysten driver overflatevann bort fra land → dypvann strømmer opp
- **Ekvatorial oppstrømning**: Passatvindene driver overflatevann bort fra ekvator → dypvann strømmer opp
- **Oppstrømning ved divergenssoner**: Overflatestrømmer beveger seg fra hverandre

### Betydning av oppstrømning

- Bringer næringsrikt, kaldt dypvann til overflaten
- Stimulerer biologisk produksjon - verdens mest produktive fiskeomraader
- Eksempler: Kysten av Peru (Humboldtstrømmen), Vest-Afrika, California`,
    },
    {
      id: 'geo2-6-2-example-ekman',
      type: 'example',
      title: 'Kystoppstrømning langs Perus kyst',
      problem: 'Forklar mekanismen bak kystoppstrømningen langs vestkysten av Sør-Amerika og hvilke konsekvenser den har.',
      solution: `**Kystoppstrømning langs Peru:**

1. **Vindforhold**: Passatvindene blaaaser fra sør mot nord langs Perus kyst
2. **Ekman-transport**: Vinden driver overflatevann mot nord. Ekman-transporten er 90° til venstre for vinden (sørlige halvkule), altsaa rett ut fra kysten
3. **Oppstrømning**: Overflatevannet erstattes av kaldt, næringsrikt dypvann som strømmer opp langs kysten
4. **Biologisk produksjon**: Næringsstoffene (nitrat, fosfat) stimulerer algevekst → rikt fiskeliv → stor fiskeindustri

**Konsekvenser:**
- En av verdens mest produktive fiskeomraader (ansjos, sardiner)
- Kjølig kystklima til tross for tropisk breddegrad
- Saarbar for El Niño, som svekker oppstrømningen og fører til fiskedød`,
    },
    {
      id: 'geo2-6-2-def-amoc',
      type: 'definition',
      title: 'AMOC (Atlantic Meridional Overturning Circulation)',
      content: 'AMOC er den meridionale (nord-sør) sirkulasjonen i Atlanterhavet som inkluderer Golfstrømmens nordlige del og dypvannsdannelse i Norskehavet. Varmt overflatevann strømmer nordover, avkjøles, synker, og strømmer tilbake sørover som dypvann. AMOC er en viktig del av den globale termohaline sirkulasjonen og transporterer store mengder varme nordover.',
    },
    {
      id: 'geo2-6-2-termohalin-tekst',
      type: 'text',
      content: `## Termohalin sirkulasjon

### Det globale transportbaandet

Den termohaline sirkulasjonen er et sammenhengende globalt system:

1. **Norskehavet/Grønlandshavet**: Kaldt, salt overflatevann synker og danner Nordatlantisk dypvann (NADW)
2. **Atlanterhavet**: Dypvannet strømmer sørover langs bunnen
3. **Det sørlige hav**: NADW blander seg med Antarktisk bunnvann (AABW)
4. **Det indiske hav og Stillehavet**: Dypvannet strømmer nordover, varmes opp og stiger gradvis
5. **Overflatestrømmer**: Vannet returnerer via overflatestrømmer til Atlanterhavet

Hele kretsløpet tar ca. 1000-2000 aar.

### Klimabetydning

- Transporterer ca. 1,2 petawatt (1,2 × 10¹⁵ W) varme nordover i Atlanterhavet
- Gir Nordvest-Europa 5-10 °C høyere aarsmiddeltemperatur enn normalt for breddegraden
- Svekket AMOC kan gi kaldere klima i Nord-Europa og endret nedbørsmønster

### Saarbarhet

Klimaendringer kan svekke den termohaline sirkulasjonen:
- Økt issmelting fra Grønland tilfører ferskvann → lavere salinitet → lavere tetthet
- Økt nedbør i nord reduserer saliniteten
- Hvis vannet ikke blir tett nok til aa synke, svekkes sirkulasjonen`,
    },
    {
      id: 'geo2-6-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 6.2

- **Vinddrevne overflatestrømmer** danner store gyrer. Corioliseffekten og vestforsterkning gir asymmetrisk mønster.
- **Ekman-transport** gir nettotransport 90° til høyre for vinden (nordlige halvkule). Fører til kystoppstrømning og ekvatorial oppstrømning.
- **Oppstrømning** bringer næringsrikt dypvann til overflaten og skaper produktive fiskeomraader.
- **AMOC** er den termohaline sirkulasjonen i Atlanterhavet som transporterer varme nordover og gir Nord-Europa mildt klima.
- Det globale transportbaandet binder alle verdenshavene sammen og tar ca. 1000-2000 aar for en full syklus.
- Klimaendringer truer med aa svekke AMOC gjennom ferskvanntilførsel fra issmelting.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-6-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er de to hovedmekanismene som driver havsirkulasjonen?',
      options: [
        { id: 'a', text: 'Vind og tetthetsforskjeller', isCorrect: true },
        { id: 'b', text: 'Maanens tiltrekning og jordrotasjon', isCorrect: false },
        { id: 'c', text: 'Vulkanisme og jordskjelv', isCorrect: false },
        { id: 'd', text: 'Bølger og tidevann', isCorrect: false },
      ],
      solution: 'Havsirkulasjonen drives av to hovedmekanismer: (1) Vind, som driver overflatestrømmene i de øvre 100-200 meterne, og (2) tetthetsforskjeller (termohalin sirkulasjon), som driver den dype sirkulasjonen gjennom forskjeller i temperatur og salinitet.',
    },
    {
      id: 'geo2-6-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva Ekman-transport er, og beskriv hvordan den kan føre til kystoppstrømning.',
      solution: 'Ekman-transport er nettotransporten av vann som følger av vindens paavirkning paa havoverflaten. Pga. corioliseffekten dreier strømmen med dybden (Ekman-spiralen), og den samlede transporten blir 90° til høyre for vindretningen paa nordlige halvkule. Kystoppstrømning oppstaar naar vind blaaaser parallelt med en kyst paa en slik maate at Ekman-transporten fører overflatevann bort fra land. Det «hullet» som oppstaar, fylles av kaldt, næringsrikt dypvann som strømmer opp.',
    },
    {
      id: 'geo2-6-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken retning gaar den netto Ekman-transporten i forhold til vindretningen paa den nordlige halvkule?',
      options: [
        { id: 'a', text: '90° til høyre for vindretningen', isCorrect: true },
        { id: 'b', text: '90° til venstre for vindretningen', isCorrect: false },
        { id: 'c', text: '45° til høyre for vindretningen', isCorrect: false },
        { id: 'd', text: 'Samme retning som vinden', isCorrect: false },
      ],
      solution: 'Paa den nordlige halvkule er netto Ekman-transport 90° til høyre for vindretningen. Dette skyldes at corioliseffekten dreier hver vannlag litt til høyre, slik at den akkumulerte transporten gjennom hele Ekman-laget (0-100 m) ender opp vinkelrett paa vinden. Paa den sørlige halvkule er det 90° til venstre.',
    },
    {
      id: 'geo2-6-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv det globale «transportbaandet» (termohalin sirkulasjon) og forklar hvorfor det er viktig for klimaet.',
      solution: 'Det globale transportbaandet starter med at varmt, salt overflatevann transporteres nordover i Atlanterhavet (Golfstrømmen). I Norskehavet avkjøles vannet, og det faar saa høy tetthet at det synker ned til dypet. Det strømmer sørover som dypvann, blander seg med antarktisk bunnvann, og strømmer videre inn i Det indiske hav og Stillehavet. Etter gradvis oppvarming returnerer det som overflatestrøm. Kretsløpet tar ca. 1000-2000 aar. Det er viktig for klimaet fordi det transporterer enorme mengder varme nordover (ca. 1,2 petawatt), noe som gir Nordvest-Europa 5-10 °C mildere klima enn breddegraden tilsier.',
    },
    {
      id: 'geo2-6-2-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva kalles fenomenet der havstrømmene paa vestsiden av havbassengene er sterkere og smalere enn paa østsiden?',
      options: [
        { id: 'a', text: 'Vestforsterkning', isCorrect: true },
        { id: 'b', text: 'Ekman-spiral', isCorrect: false },
        { id: 'c', text: 'Corioliseffekten', isCorrect: false },
        { id: 'd', text: 'Termohalin konveksjon', isCorrect: false },
      ],
      solution: 'Vestforsterkning er fenomenet der havstrømmene paa vestsiden av havbassengene (som Golfstrømmen i Atlanterhavet og Kuroshio i Stillehavet) er smalere, dypere og raskere enn de tilsvarende strømmene paa østsiden. Fenomenet skyldes at corioliseffekten varierer med breddegraden (betaeffekten), noe som fører til at vannet «stuer seg opp» paa vestsiden av gyrene.',
    },
    {
      id: 'geo2-6-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan klimaendringer kan paavirke AMOC, og hvilke konsekvenser en svekkelse kan faa for Europa.',
      solution: 'Klimaendringer kan svekke AMOC paa flere maater: (1) Økt smelting av innlandsisen paa Grønland tilfører store mengder ferskvann til Norskehavet, noe som reduserer saliniteten. (2) Økt nedbør i nordlige omraader fortynner overflatevannet. (3) Oppvarming av overflatevannet reduserer tetthetsforskjellen mellom overflate og dyp. Alle disse faktorene gjør det vanskeligere for overflatevannet aa synke. En svekket AMOC kan føre til: lavere temperaturer i Nordvest-Europa, endrede nedbørsmønstre, økt stormaktivitet, endringer i fiskeriressurser, og raskere havnivaaøkning langs østkysten av Nord-Amerika. Observasjoner tyder paa at AMOC allerede har blitt svekket med ca. 15 % siden midten av 1900-tallet.',
    },
  ],
};

// ============================================================================
// Kapittel 6.3: Isbreer og innlandsis
// ============================================================================

export const CHAPTER_GEOFAG_2_6_3: TextbookChapter = {
  id: 'geofag-2-6-3',
  courseId: 'geofag-2',
  chapterNumber: '6.3',
  title: 'Isbreer og innlandsis',
  description: 'Bredannelse, bredynamikk, innlandsis paa Grønland og i Antarktis, kalving og massebalanse.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren',
    'forklare konsekvensene av jordens rotasjon, tetthetsforskjeller og trykkforskjeller og hvordan de påvirker havet og atmosfæren',
  ],
  content: [
    {
      id: 'geo2-6-3-intro',
      type: 'text',
      content: `# Isbreer og innlandsis

Kryosfæren omfatter alle frosne vannforekomster paa jorden: isbreer, innlandsis, havis, permafrost og sesongbestemt snødekke. Isbreer og innlandsis inneholder ca. 69 % av alt ferskvann paa kloden og spiller en avgjørende rolle i klimasystemet.

## Hvorfor studere isbreer?

- Isbreer er sensitive indikator for klimaendringer
- Innlandsisen paa Grønland og i Antarktis pavirker havnivaaet
- Isbreer regulerer ferskvanntilgangen i mange regioner
- Isbreenes utbredelse paavirker jordas albedo (refleksjonsevne)
- Iskjerner inneholder unike klimaarkiver`,
    },
    {
      id: 'geo2-6-3-def-isbre',
      type: 'definition',
      title: 'Isbre',
      content: 'En isbre er en stor, vedvarende masse av is som dannes paa land gjennom akkumulasjon og komprimering av snø over lang tid. Isbreer beveger seg under sin egen tyngde og kan erodere, transportere og avsette materiale. For at en isbre skal dannes, maa det falle mer snø om vinteren enn det smelter om sommeren over en lengre periode.',
    },
    {
      id: 'geo2-6-3-dannelse-tekst',
      type: 'text',
      content: `## Bredannelse

### Fra snø til breis

Omdanningen fra snø til breis skjer gjennom flere steg:

1. **Nysnø** - Lett og luftig, tetthet ca. 50-100 kg/m³
2. **Gammelsnø (firn)** - Delvis omdannet, tetthet 400-830 kg/m³. Luftbobler komprimeres.
3. **Breis** - Fullstendig omdannet, tetthet over 830 kg/m³. Luftbobler lukkes inne.

Prosessen tar typisk 25-100 aar, avhengig av snømengde og temperatur.

### Snøgrensen

**Snøgrensen** (likevektslinjen) er den høyden der snøakkumulasjon akkurat balanserer smelting over et aar. Over snøgrensen vokser breen (akkumulasjonssone), under smelterer isen (ablasjonssone).

- I Norge: Ca. 1200-2000 m (varierer med nedbør og temperatur)
- Ved ekvator: Ca. 5000-6000 m
- I Arktis: Kan vaere nær havnivaa`,
    },
    {
      id: 'geo2-6-3-def-massebalanse',
      type: 'definition',
      title: 'Massebalanse',
      content: 'Massebalansen til en isbre er forskjellen mellom det isen faar tilført (akkumulasjon: snø, rim, skred) og det den mister (ablasjon: smelting, kalving, sublimering) over ett aar. Positiv massebalanse betyr at breen vokser, negativ massebalanse betyr at breen krymper. Massebalansen er den viktigste indikatoren for en bres «helse» og dens respons paa klimaendringer.',
    },
    {
      id: 'geo2-6-3-dynamikk-tekst',
      type: 'text',
      content: `## Bredynamikk

### Hvordan beveger isbreer seg?

Isbreer beveger seg paa tre maater:

1. **Indre deformasjon (plastisk flyt)**
   - Iskrystallene glir langs hverandre under trykk
   - Viktigste bevegelsesmekanismen for kalde breer
   - Hastigheten øker med istykkelse og helning

2. **Basalglidning**
   - Breen glir paa et tynt lag smeltevann ved bunnen
   - Vanlig for tempererte breer (bunntemperatur nær smeltepunktet)
   - Kan gi rask bevegelse

3. **Deformasjon av underlaget**
   - Bløte sedimenter under breen deformeres
   - Bidragar til rask bevegelse av isstrømmer

### Bevegelseshastighet

- Typiske dalbreer: 10-200 meter per aar
- Isstrømmer i Antarktis/Grønland: Opptil flere kilometer per aar
- **Bresurge**: Plutselig, midlertidig akselerasjon (opptil 100× normal hastighet)`,
    },
    {
      id: 'geo2-6-3-example-massebalanse',
      type: 'example',
      title: 'Massebalanse for Nigardsbreen',
      problem: 'Nigardsbreen i Jostedalen faar ca. 15 m vannekvivalent snø per aar i akkumulasjonssonen og mister ca. 12 m vannekvivalent gjennom smelting. Forklar breens massebalanse og hva som skjer med breen over tid.',
      solution: `**Massebalanse for Nigardsbreen:**

1. **Akkumulasjon**: +15 m vannekvivalent per aar (snøfall i øvre del)
2. **Ablasjon**: -12 m vannekvivalent per aar (smelting og kalving)
3. **Netto massebalanse**: +15 - 12 = +3 m vannekvivalent per aar

**Tolkning:**
- Positiv massebalanse betyr at breen faar tilført mer is enn den mister
- Breen vil over tid rykke frem (vokse i utstrekning)
- Brefronten reagerer med en forsinkelse paa 10-50 aar paa endringer i massebalansen

**Historisk utvikling:**
- Nigardsbreen rykket frem fra 1960-tallet til ca. 2000 etter økt vinternedbør
- Siden 2000 har breen trukket seg tilbake pga. varmere somre
- Massebalansen har vaert overveiende negativ de siste tiaaarene

**Merk:** I virkeligheten varier tallene fra aar til aar. Eksempelet illustrerer prinsippet.`,
    },
    {
      id: 'geo2-6-3-innlandsis-tekst',
      type: 'text',
      content: `## Innlandsis

Innlandsis er enorme iskapper som dekker store landomraader. I dag finnes to innlandsisskjold:

### Grønlandsisen

- **Areal**: Ca. 1,7 millioner km² (dekker ca. 80 % av Grønland)
- **Volum**: Ca. 2,85 millioner km³ is
- **Maksimal tykkelse**: Ca. 3400 m
- **Havnivaabidrag ved full smelting**: Ca. 7,4 m
- **Taper is**: Ca. 270 milliarder tonn per aar (akselererende)

### Antarktisk innlandsis

- **Areal**: Ca. 14 millioner km² (større enn Europa)
- **Volum**: Ca. 26,5 millioner km³ is
- **Maksimal tykkelse**: Ca. 4700 m
- **Havnivaabidrag ved full smelting**: Ca. 58 m
- **Delt i**: Øst-Antarktis (større, mer stabil) og Vest-Antarktis (mindre, mer saarbar)

### Kalving

**Kalving** er prosessen der isstykker brekker av fra brefronten og faller i havet som isfjell. Kalving er en av de viktigste maatene innlandsisen mister masse paa, spesielt for isstrømmer som ender i havet.

### Isstrømmer

**Isstrømmer** er hurtigflytende kanaler av is innenfor innlandsisen som transporterer store mengder is mot kysten. De beveger seg mye raskere enn den omkringliggende isen og staar for mesteparten av iseksporten.`,
    },
    {
      id: 'geo2-6-3-example-grønland',
      type: 'example',
      title: 'Grønlandsisens massetap',
      problem: 'Grønlandsisen mister ca. 270 milliarder tonn is per aar. Forklar mekanismene bak dette massetapet og hvilke konsekvenser det har.',
      solution: `**Mekanismer for massetap fra Grønlandsisen:**

1. **Overflatesmelting (ca. 50 %)**:
   - Høyere temperaturer smelter overflateisen, spesielt langs kysten
   - Smeltevannet renner ut i havet gjennom elver og kanaler
   - Mørke alger paa isen reduserer albedoen og øker smeltingen

2. **Kalving (ca. 40 %)**:
   - Isstrømmer frakter is til kysten der isfjell brekker av
   - Jakobshavn Isbræ kalver ca. 50 km³ is per aar
   - Varmere havvann smelter brefronten nedenfra og øker kalvingen

3. **Basalsmelting (ca. 10 %)**:
   - Varm havstrøm (atlantisk vann) smelter isen nedenfra
   - Spesielt viktig for marine isstrømmer

**Konsekvenser:**
- Bidrar ca. 0,7 mm til havnivaaøkning per aar
- Tilfører ferskvann til Norskehavet → kan svekke AMOC
- Akselererende trend: massetapet har økt 6 ganger siden 1990-tallet`,
    },
    {
      id: 'geo2-6-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 6.3

- **Isbreer** dannes gjennom omdanning av snø til firn og breis over tid. De beveger seg ved plastisk flyt, basalglidning og deformasjon av underlaget.
- **Massebalansen** er forskjellen mellom akkumulasjon og ablasjon. Negativ massebalanse betyr at breen krymper.
- **Grønlandsisen** inneholder nok is til 7,4 m havnivaaøkning og mister ca. 270 milliarder tonn per aar.
- **Antarktisk innlandsis** inneholder nok is til 58 m havnivaaøkning. Vest-Antarktis er mest saarbart.
- **Kalving** og overflatesmelting er de viktigste mekanismene for massetap.
- Isbreenes tilbaketrekking er en av de tydeligste indikatorene paa global oppvarming.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-6-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kalles den mellomliggende formen mellom snø og breis?',
      options: [
        { id: 'a', text: 'Firn', isCorrect: true },
        { id: 'b', text: 'Glasialt mel', isCorrect: false },
        { id: 'c', text: 'Morene', isCorrect: false },
        { id: 'd', text: 'Permafrost', isCorrect: false },
      ],
      solution: 'Firn (eller gammelsnø) er det mellomliggende stadiet i omdanningen fra nysnø til breis. Firn har en tetthet paa 400-830 kg/m³ og kjennetegnes av at snøkornene har smeltet sammen og rekrystallisert, men det er fortsatt aapne luftkanaler mellom kornene. Naar tettheten overstiger 830 kg/m³, lukkes luftboblene og isen regnes som breis.',
    },
    {
      id: 'geo2-6-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar de tre hovedmaatene en isbre kan bevege seg paa.',
      solution: 'En isbre beveger seg paa tre maater: (1) Indre deformasjon (plastisk flyt): Iskrystallene glir langs hverandre under trykk fra isens egen tyngde. Dette er den viktigste mekanismen for kalde breer. (2) Basalglidning: Breen glir paa et tynt lag med smeltevann ved bunnen. Dette forutsetter at bunnen er nær smeltepunktet (temperert bre) og kan gi rask bevegelse. (3) Deformasjon av underlaget: Bløte sedimenter under breen deformeres og bidrar til bevegelse. Dette er spesielt viktig for isstrømmer i Antarktis og Grønland.',
    },
    {
      id: 'geo2-6-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mye vil havnivaaet stige dersom all isen paa Grønland smelter?',
      options: [
        { id: 'a', text: 'Ca. 7 meter', isCorrect: true },
        { id: 'b', text: 'Ca. 1 meter', isCorrect: false },
        { id: 'c', text: 'Ca. 20 meter', isCorrect: false },
        { id: 'd', text: 'Ca. 58 meter', isCorrect: false },
      ],
      solution: 'Grønlandsisen inneholder ca. 2,85 millioner km³ is, noe som tilsvarer ca. 7,4 meter havnivaaøkning ved fullstendig smelting. Til sammenligning ville fullstendig smelting av Antarktis gi ca. 58 m økning. Total smelting av Grønlandsisen er usannsynlig i nærmeste framtid, men selv et delvis tap vil gi betydelig havnivaaøkning.',
    },
    {
      id: 'geo2-6-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med massebalanse for en isbre, og beskriv hva positiv og negativ massebalanse betyr for breens utvikling.',
      solution: 'Massebalansen er den aarlige differansen mellom det en isbre faar tilført (akkumulasjon) og det den mister (ablasjon). Akkumulasjon inkluderer snøfall, rim og skred, mens ablasjon inkluderer smelting, kalving og sublimering. Positiv massebalanse betyr at breen faar mer is enn den mister - breen vil over tid vokse og rykke frem. Negativ massebalanse betyr at breen mister mer enn den faar tilført - breen vil krympe og trekke seg tilbake. Merk at det er en forsinkelse paa 10-50 aar mellom endringer i massebalansen og synlige endringer i brefrontens posisjon.',
    },
    {
      id: 'geo2-6-3-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken del av Antarktis er mest saarbar for klimaendringer?',
      options: [
        { id: 'a', text: 'Vest-Antarktis', isCorrect: true },
        { id: 'b', text: 'Øst-Antarktis', isCorrect: false },
        { id: 'c', text: 'Antarktishalvøyen er like saarbar som resten', isCorrect: false },
        { id: 'd', text: 'Den transantarktiske fjellkjeden', isCorrect: false },
      ],
      solution: 'Vest-Antarktis er mest saarbar fordi store deler av isens underlag ligger under havnivaa (marin isdekke). Varmere havvann kan trenge inn under isen og smelte den nedenfra. Isstrømmer som Thwaites og Pine Island mister masse i akselererende takt. Øst-Antarktis ligger paa høyere grunn og er kaldere, noe som gjør det mer stabilt. Vest-Antarktis inneholder nok is til ca. 5 m havnivaaøkning.',
    },
    {
      id: 'geo2-6-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft sammenhengen mellom isbreenes tilbaketrekking, havnivaaøkning og den termohaline sirkulasjonen.',
      solution: 'Naar isbreer og innlandsis smelter, tilfører de ferskvann til havet. Dette faar tre viktige konsekvenser: (1) Direkte havnivaaøkning: Smeltevann fra landbasert is (ikke havis) øker havvolumet. Grønland bidrar allerede med ca. 0,7 mm/aar. (2) Svekkelse av termohalin sirkulasjon: Ferskvann fra Grønlandsisen reduserer saliniteten i Norskehavet, noe som gjør overflatevannet lettere og vanskeligere aa synke. En svekket AMOC reduserer varmetransporten nordover. (3) Tilbakekoplingsmekanismer: Smelting reduserer albedoen (isen som reflekterer sollys forsvinner) → mer varmeopptak → mer smelting (positiv tilbakekopling). I tillegg kan en svekket AMOC paradoksalt nok gi lokal avkjøling i Nord-Europa, men dette veies opp av den generelle globale oppvarmingen.',
    },
    {
      id: 'geo2-6-3-ex7',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kalles prosessen der isstykker brekker av fra brefronten og faller i havet?',
      options: [
        { id: 'a', text: 'Kalving', isCorrect: true },
        { id: 'b', text: 'Ablasjon', isCorrect: false },
        { id: 'c', text: 'Plukking', isCorrect: false },
        { id: 'd', text: 'Sublimering', isCorrect: false },
      ],
      solution: 'Kalving er prosessen der isstykker brekker av fra brefronten og faller i havet som isfjell. Kalving er en av de viktigste ablasjonsprosessene for isbreer som ender i havet, og staar for en stor del av massetapet fra innlandsisen paa Grønland og i Antarktis.',
    },
  ],
};

// ============================================================================
// Kapittel 6.4: Havis og permafrost
// ============================================================================

export const CHAPTER_GEOFAG_2_6_4: TextbookChapter = {
  id: 'geofag-2-6-4',
  courseId: 'geofag-2',
  chapterNumber: '6.4',
  title: 'Havis og permafrost',
  description: 'Havisdannelse, forskjellen mellom arktisk og antarktisk havis, permafrost og metanutslipp.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren',
    'forklare konsekvensene av jordens rotasjon, tetthetsforskjeller og trykkforskjeller og hvordan de påvirker havet og atmosfæren',
  ],
  content: [
    {
      id: 'geo2-6-4-intro',
      type: 'text',
      content: `# Havis og permafrost

Havis og permafrost er to viktige komponenter i kryosfæren som responderer kraftig paa klimaendringer. Arktisk havis har minsket dramatisk de siste tiaarene, og permafrosten tiner i et akselererende tempo. Begge prosessene har vidtrekkende konsekvenser for klimasystemet.

## Hvorfor er havis og permafrost viktig?

- Havis reflekterer sollys og regulerer jordas energibudsjett (albedo)
- Permafrost lagrer enorme mengder karbon som kan frigis ved tining
- Endringer i havis paavirker lokalt og globalt klima
- Permafrosttining fører til infrastrukturskader og landskapsendringer`,
    },
    {
      id: 'geo2-6-4-def-havis',
      type: 'definition',
      title: 'Havis',
      content: 'Havis er is som dannes naar sjøvann fryser. Sjøvann fryser ved ca. -1,8 °C (avhengig av saliniteten). Havis dekker store omraader i Arktis og rundt Antarktis og varierer i utbredelse med aarstidens. Havis paavirker ikke havnivaaet direkte naar den smelter (den flyter allerede), men den spiller en kritisk rolle i klimasystemet gjennom albedoeffekten.',
    },
    {
      id: 'geo2-6-4-havisdannelse-tekst',
      type: 'text',
      content: `## Havisdannelse

### Fryseprosessen

Naar sjøvann avkjøles til ca. -1,8 °C, begynner isndannelsen:

1. **Frazilis** - Tynne iskrystaller dannes i overflaten
2. **Nilsis** - Krystallene klumper seg til en tynn ishinne
3. **Pankakerais** - Runde isflak med opphøyde kanter dannet av bølger
4. **Sammenhengende is** - Flakene fryser sammen til et sammenhengende isdekke
5. **Fleraars-is** - Is som overlever minst en sommer, tykkere og saltfattigere

### Saltutpressing

Naar sjøvann fryser, presses saltionene ut av isstrukturen:
- Fersk havis inneholder ca. 10-15 ‰ salt
- Etter et aar: Ca. 5-8 ‰
- Fleraars-is: Under 3 ‰ (nesten drikkbar)
- Det salte vannet (brine) synker ned og bidrar til dypvannsdannelse`,
    },
    {
      id: 'geo2-6-4-arktis-antarktis-tekst',
      type: 'text',
      content: `## Arktisk vs. antarktisk havis

### Arktisk havis

- **Innesluttet hav**: Nordishavet er omgitt av landmasser
- **Fleraars-is**: Mye is overlever sommeren (men stadig mindre)
- **Tykkere**: Gjennomsnitt ca. 2-3 m, fleraars-is opptil 5 m
- **Dramatisk nedgang**: Sommerminimumet har minsket ca. 13 % per tiaar siden 1979
- **Forandring**: Overgangen fra fleraars-is til aarets-is gjør isdekket tynnere og mer saarbart

### Antarktisk havis

- **Aapent hav**: Omgitt av Sørishavet uten landbarrierer
- **Sesongbasert**: Det meste smelter om sommeren (stor aarlig variasjon)
- **Tynnere**: Gjennomsnitt ca. 1-2 m
- **Variabel trend**: Uregelmessig trend, med rekordlav utbredelse i 2022-2023
- **Større utbredelse**: Kan dekke opptil 20 millioner km² om vinteren

### Is-albedotilbakekoplingen

1. Havis har høy albedo (0,5-0,9) - reflekterer mye sollys
2. Aapent hav har lav albedo (0,06) - absorberer det meste av sollyset
3. Naar is smelter → mer aapent hav → mer varmeopptak → mer smelting
4. Dette er en **positiv tilbakekopling** som akselererer oppvarmingen i Arktis
5. Arktisk forsterkning: Arktis varmes opp 2-4 ganger raskere enn det globale gjennomsnittet`,
    },
    {
      id: 'geo2-6-4-example-arktis',
      type: 'example',
      title: 'Arktisk havistap og is-albedotilbakekopling',
      problem: 'Det arktiske havisminimum (september) har minsket fra ca. 7 millioner km² i 1979 til ca. 4 millioner km² i de seinere aar. Forklar hvorfor dette er et eksempel paa positiv tilbakekopling i klimasystemet.',
      solution: `**Is-albedotilbakekoplingen i Arktis:**

1. **Utgangspunkt**: Global oppvarming øker temperaturen i Arktis
2. **Issmelting**: Havis smelter → 3 millioner km² ekstra aapent hav
3. **Albedoendring**:
   - Is har albedo 0,5-0,9 (reflekterer 50-90 % av sollyset)
   - Aapent hav har albedo 0,06 (absorberer 94 % av sollyset)
4. **Varmeopptak**: Det aapne havet absorberer mye mer solenergi
5. **Forsterking**: Mer varme → mer smelting → enda mer aapent hav → enda mer varme
6. **Resultat**: Arktisk forsterkning - Arktis varmes 2-4 ganger raskere enn globalt gjennomsnitt

**Konsekvenser av tapte 3 millioner km²:**
- Tilsvarende aa fjerne isdekket over et omraade 3× større enn Norge
- Enormt ekstra varmeopptak i sommermmanedene
- Paavirker atmosfærisk sirkulasjon og vær i hele den nordlige halvkule

**Konklusjon:** Is-albedotilbakekoplingen er en av de sterkeste positive tilbakekoplingene i klimasystemet og er hovedaarsaken til den akselererte oppvarmingen i Arktis.`,
    },
    {
      id: 'geo2-6-4-def-permafrost',
      type: 'definition',
      title: 'Permafrost',
      content: 'Permafrost er jord, sedimenter eller fjell som har vaert sammenhengende frosset (under 0 °C) i minst to aar. Permafrost finnes i arktiske og subarktiske omraader, samt i høyfjell. Det aktive laget er det øverste jordlaget som tiner om sommeren og fryser igjen om vinteren. Permafrost dekker ca. 25 % av landarealet paa den nordlige halvkule.',
    },
    {
      id: 'geo2-6-4-permafrost-tekst',
      type: 'text',
      content: `## Permafrost

### Utbredelse

Permafrost finnes i tre kategorier:

- **Sammenhengende permafrost**: Over 90 % av bakken er frosset (Nord-Sibir, nordlige Canada, Svalbard)
- **Usammenhengende permafrost**: 50-90 % av bakken er frosset
- **Sporadisk permafrost**: Under 50 %, typisk i overgangsomraader

### Det aktive laget

Det aktive laget er den øvre sonen som tiner om sommeren:
- Tykkelse: 0,3-4 m avhengig av klima og jortype
- Viktig for planteliv og økosystemer
- Dybden av det aktive laget øker med global oppvarming

### Permafrost og karbon

Permafrosten inneholder enorme mengder organisk materiale:

- **Estimert karboninnhold**: Ca. 1500 milliarder tonn karbon (dobbelt saa mye som i atmosfæren)
- Organisk materiale som har vaert frosset i tusener av aar
- Naar permafrosten tiner, bryter mikroorganismer ned det organiske materialet

### Metanutslipp

Nedbryting av organisk materiale i tinende permafrost frigir klimagasser:

- **CO₂**: Frigis ved aerob nedbrytning (med oksygen)
- **Metan (CH₄)**: Frigis ved anaerob nedbrytning (uten oksygen, f.eks. i vaatmark)
- Metan er ca. 80 ganger sterkere klimagass enn CO₂ over 20 aar
- **Metanhydrater**: Frosne metankrystaller i permafrost og under havbunnen som kan destabiliseres

### Permafrosttining som tilbakekopling

1. Global oppvarming → permafrost tiner
2. Organisk materiale brytes ned → CO₂ og metan frigis
3. Mer klimagasser → mer oppvarming → mer tining
4. Denne positive tilbakekoplingen er vanskelig aa stoppe naar den først er satt i gang`,
    },
    {
      id: 'geo2-6-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 6.4

- **Havis** dannes naar sjøvann fryser ved ca. -1,8 °C. Salt presses ut under frysing.
- **Arktisk havis** har minsket dramatisk (ca. 13 % per tiaar). Is-albedotilbakekoplingen akselererer oppvarmingen.
- **Antarktisk havis** er mest sesongbasert og varierer mye aarlig.
- **Permafrost** er permanent frosset jord som dekker ca. 25 % av nordlige halvkules landareal.
- Permafrost inneholder ca. 1500 milliarder tonn karbon - dobbelt saa mye som i atmosfæren.
- **Tining av permafrost** frigir CO₂ og metan, noe som forsterker global oppvarming (positiv tilbakekopling).
- Baade havistap og permafrosttining er eksempler paa positive tilbakekoplinger som kan akselerere klimaendringene.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-6-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Ved hvilken temperatur fryser sjøvann med normal salinitet?',
      options: [
        { id: 'a', text: 'Ca. -1,8 °C', isCorrect: true },
        { id: 'b', text: '0 °C', isCorrect: false },
        { id: 'c', text: 'Ca. -10 °C', isCorrect: false },
        { id: 'd', text: 'Ca. -5 °C', isCorrect: false },
      ],
      solution: 'Sjøvann med normal salinitet (35 ‰) fryser ved ca. -1,8 °C. Saltinnholdet senker frysepunktet sammenlignet med ferskvann (0 °C). Jo høyere salinitet, desto lavere frysepunkt.',
    },
    {
      id: 'geo2-6-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar is-albedotilbakekoplingen og beskriv hvorfor den fører til at Arktis varmes opp raskere enn resten av verden.',
      solution: 'Is-albedotilbakekoplingen virker slik: Naar havis smelter, erstattes den hvite isoverflaten (albedo 0,5-0,9) av mørkt havvann (albedo 0,06). Det mørke vannet absorberer mye mer solenergi enn isen reflekterte. Den ekstra varmen fører til ytterligere issmelting, som igjen gir mer mørkt vann. Dette er en positiv tilbakekopling som forsterker seg selv. Resultatet er «arktisk forsterkning» - Arktis varmes 2-4 ganger raskere enn det globale gjennomsnittet fordi tilbakekoplingen er sterkest der isdekket endres mest.',
    },
    {
      id: 'geo2-6-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den viktigste forskjellen mellom arktisk og antarktisk havis?',
      options: [
        { id: 'a', text: 'Arktisk havis er innesluttet av land og har mer fleraars-is, mens antarktisk havis er omgitt av aapent hav og er mest sesongbasert', isCorrect: true },
        { id: 'b', text: 'Antarktisk havis er mye tykkere enn arktisk havis', isCorrect: false },
        { id: 'c', text: 'Det er ingen vesentlig forskjell mellom arktisk og antarktisk havis', isCorrect: false },
        { id: 'd', text: 'Arktisk havis er saltere enn antarktisk havis', isCorrect: false },
      ],
      solution: 'Den viktigste forskjellen er at Nordishavet er omgitt av landmasser, noe som holder isen paa plass og gjør at mye is overlever sommeren (fleraars-is). Antarktisk havis derimot omgir et kontinent i et aapent hav uten landbarrierer, saa det meste av isen smelter eller driver bort om sommeren. Derfor er arktisk havis gjennomsnittlig tykkere og eldre enn antarktisk havis.',
    },
    {
      id: 'geo2-6-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv hva permafrost er og forklar hvorfor tining av permafrost kan forsterke global oppvarming.',
      solution: 'Permafrost er jord, sedimenter eller fjell som har vaert sammenhengende frosset (under 0 °C) i minst to aar. Permafrost inneholder ca. 1500 milliarder tonn karbon i form av frosset organisk materiale. Naar permafrosten tiner paa grunn av global oppvarming, begynner mikroorganismer aa bryte ned dette materialet. Aerob nedbrytning frigir CO₂, mens anaerob nedbrytning (i vaatmark) frigir metan (CH₄), som er ca. 80 ganger sterkere klimagass enn CO₂ over 20 aar. De frigitte klimagassene forsterker oppvarmingen, som igjen fører til mer tining - en positiv tilbakekopling som er vanskelig aa stoppe.',
    },
    {
      id: 'geo2-6-4-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Omtrent hvor mye karbon er lagret i verdens permafrost?',
      options: [
        { id: 'a', text: 'Ca. 1500 milliarder tonn - omtrent dobbelt saa mye som i atmosfæren', isCorrect: true },
        { id: 'b', text: 'Ca. 100 milliarder tonn - omtrent like mye som et aars utslipp', isCorrect: false },
        { id: 'c', text: 'Ca. 50 milliarder tonn - en ubetydelig mengde', isCorrect: false },
        { id: 'd', text: 'Ca. 10 000 milliarder tonn - ti ganger mer enn i atmosfæren', isCorrect: false },
      ],
      solution: 'Permafrost inneholder anslagsvis 1500 milliarder tonn karbon, noe som er omtrent dobbelt saa mye som det totale karboninnholdet i atmosfæren (ca. 850 milliarder tonn). Dersom en betydelig andel av dette karbonet frigis som CO₂ og metan, kan det faa dramatiske konsekvenser for klimaet. Selv frigjøring av 10 % ville tilsvare flere tiaar med menneskelige utslipp.',
    },
    {
      id: 'geo2-6-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvorfor arktisk havis og permafrost anses som «vippepunkter» i klimasystemet.',
      solution: 'Et vippepunkt er et kritisk terskelverdi der en liten ytterligere endring kan utløse en stor, irreversibel forandring. Arktisk havis er et mulig vippepunkt fordi: (1) Is-albedotilbakekoplingen kan bli selvforsterkende - naar tilstrekkelig is er tapt, absorberer havet saa mye varme at isdekket ikke kan gjenopprettes. (2) Et isfritt Arktis om sommeren kan inntreffe allerede innen 2050. Permafrost er et vippepunkt fordi: (1) Tining frigir karbon som forsterker oppvarmingen → mer tining (selvforsterkende syklus). (2) Metan fra permafrost og metanhydrater kan gi braa utslippsøkninger. (3) Prosessen er i praksis irreversibel paa menneskelig tidsskala. Begge disse prosessene kan skape kaskadevirkninger som utløser ytterligere vippepunkter, for eksempel svekkelse av AMOC eller destabilisering av Vest-Antarktis.',
    },
  ],
};

// ============================================================================
// Kapittel 6.5: Havnivåendringer
// ============================================================================

export const CHAPTER_GEOFAG_2_6_5: TextbookChapter = {
  id: 'geofag-2-6-5',
  courseId: 'geofag-2',
  chapterNumber: '6.5',
  title: 'Havnivaaendringer',
  description: 'Eustatiske og isostatiske endringer, termisk ekspansjon, issmelting og fremtidige projeksjoner.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for vekselvirkninger mellom de ulike jordsystemene, og hvordan disse kan påvirke havet, atmosfæren og kryosfæren',
    'forklare konsekvensene av jordens rotasjon, tetthetsforskjeller og trykkforskjeller og hvordan de påvirker havet og atmosfæren',
  ],
  content: [
    {
      id: 'geo2-6-5-intro',
      type: 'text',
      content: `# Havnivaaendringer

Havnivaaet har endret seg gjennom hele jordens historie, med svingninger paa over 100 meter mellom istider og mellomistider. I dag stiger havnivaaet som følge av global oppvarming, og dette er en av de mest alvorlige konsekvensene av klimaendringer.

## Hvorfor er havnivaaendringer viktig?

- Milliarder av mennesker bor i kystomraader som er saarbare for havnivaaøkning
- Havnivaaet har steget ca. 20 cm siden 1900 og økningen akselererer
- Fremtidige endringer truer lavereliggende øystater, kystbyer og jordbruksomraader
- Forstaause av fortidige havnivaaendringer hjelper oss aa forutsi framtiden`,
    },
    {
      id: 'geo2-6-5-def-eustatisk',
      type: 'definition',
      title: 'Eustatisk havnivaaendring',
      content: 'Eustatisk havnivaaendring er en global endring i havnivaaet foraarsaket av endringer i vannvolumet i verdenshavene eller i havbassengenes volum. De viktigste aarsaakene er termisk ekspansjon av havvann og tilførsel/tap av vann fra isbreer og innlandsis. Eustatiske endringer paavirker hele kloden samtidig.',
    },
    {
      id: 'geo2-6-5-def-isostatisk',
      type: 'definition',
      title: 'Isostatisk havnivaaendring',
      content: 'Isostatisk havnivaaendring er en relativ, lokal endring i havnivaaet foraarsaket av landhevning eller landsenkning. Eksempler er postglasial landhevning (Skandinavia hever seg etter aa ha vaert nedpresset av innlandsisen) og landsenkning pga. grunnvannsuttak eller sedimentkompaksjon. Isostatiske endringer varierer geografisk.',
    },
    {
      id: 'geo2-6-5-eustatisk-tekst',
      type: 'text',
      content: `## Eustatiske havnivaaendringer

### Termisk ekspansjon

Naar havet varmes opp, utvider vannet seg. Termisk ekspansjon er den største bidragsyteren til havnivaaøkning i dag.

- Vann utvider seg naar det varmes opp (unntatt mellom 0-4 °C)
- Selv en liten temperaturøkning paavirker enormt volum
- Bidrar ca. 40 % av dagens havnivaaøkning
- Effekten øker med temperaturen og dybden av oppvarmingen
- Er langsomvirkende - havet fortsetter aa utvide seg i flere hundre aar etter at temperaturen stabiliseres

### Smelting av isbreer og iskapper

Tilførsel av smeltevann fra landbasert is øker havvolumet:

- **Fjellisbreer og iskapper**: Ca. 20 % av dagens økning. Over 200 000 isbreer paa alle kontinenter smelter.
- **Grønlandsisen**: Ca. 20 % av dagens økning. Mister ca. 270 milliarder tonn per aar.
- **Antarktisk innlandsis**: Ca. 10 % av dagens økning, men bidraget øker raskt.

### Historiske eustatiske endringer

- **Siste istidsmaksimum** (ca. 20 000 aar siden): Havnivaaet var ca. 120 m lavere enn i dag
- **Forrige mellomistid** (Eem, ca. 125 000 aar siden): Havnivaaet var ca. 6-9 m høyere enn i dag
- **Pliocen** (ca. 3 millioner aar siden): Havnivaaet var ca. 15-25 m høyere, med CO₂-nivaer som i dag`,
    },
    {
      id: 'geo2-6-5-example-norge',
      type: 'example',
      title: 'Havnivaaendringer i Norge',
      problem: 'I Norge har strandlinjer fra like etter istiden blitt funnet opptil 220 meter over dagens havnivaa (f.eks. i Trøndelag). Samtidig har det globale havnivaaet steget ca. 120 m siden istidsmaksimum. Forklar denne tilsynelatende motsetningen.',
      solution: `**Havnivaaendringer i Norge etter istiden:**

1. **Globalt havnivaa steg** ca. 120 m naar innlandsisen smeltet (eustatisk økning)
2. **Samtidig hevet landet seg** fordi vekten av isen forsvant (isostatisk heving)
3. **I Norge var landhevningen sterkere** enn havnivaaøkningen:
   - Isen var tykkest over Bottenviken/Skandinavia
   - Jordskorpen var presset ned opptil 800 m
   - Etter isens smelting hevet landet seg raskt

4. **Resultatet**: Til tross for at havet steg globalt, opplevde Norge en **netto relativ havnivaasenkning** - strandlinjer som laa ved havnivaa for 10 000 aar siden ligger naa høyt over havet.

5. **Talleksempel for Trøndelag:**
   - Marin grense (høyeste strandlinje): Ca. 220 m over dagens havnivaa
   - Havet stod 220 m høyere relativt til land like etter istiden
   - Siden da har landet hevet seg mer enn havet har steget

**Konklusjon:** Norge er et av faa steder i verden der lokal landhevning (isostatisk) har overgaatt den globale havnivaaøkningen (eustatisk).`,
    },
    {
      id: 'geo2-6-5-isostatisk-tekst',
      type: 'text',
      content: `## Isostatiske endringer

### Postglasial landhevning

Etter siste istid har landmassene som var dekket av is, hevet seg:

- **Skandinavia**: Hever seg fortsatt, inntil 10 mm/aar rundt Bottenviken
- **Norge**: Ca. 3-5 mm/aar i indre Oslofjord, nær null langs ytterkysten
- **Canada**: Hudsombaybukta-omraadet hever seg opptil 12 mm/aar
- **Skottland**: Moderat heving i nordlige deler

### Landsenkning

Andre omraader synker:

- **Randsonen** rundt isdekkene bulket opp under istiden og synker naa tilbake
- **Nederland og deler av England**: Synker pga. randsoneeffekt
- **Deltaomraader**: Sedimentkompaksjon (f.eks. Nilens og Mississippis delta)
- **Byer**: Grunnvannsuttak foraarsaker senkning (Jakarta, Mexico City)

### Relativ havnivaaendring

Det som betyr noe for kystsamfunn er den **relative** havnivaaendringen - kombinasjonen av eustatisk og isostatisk endring:

- I Skandinavia: Landhevning > eustatisk økning → relativt synkende havnivaa (de fleste steder)
- I Nederland: Landsenkning + eustatisk økning → akselerert relativ havnivaaøkning
- I lavtliggende øystater: Nesten ingen isostatisk komponent → fullt eustatisk paavirkning`,
    },
    {
      id: 'geo2-6-5-fremtid-tekst',
      type: 'text',
      content: `## Fremtidige havnivaaendringer

### Dagens trend

- **1901-2018**: Havnivaaet steg med ca. 20 cm
- **Naaværende rate**: Ca. 3,7 mm/aar (og akselererende)
- **Fordobling**: Økningen har akselerert fra 1,4 mm/aar (1901-1990) til 3,7 mm/aar (2006-2018)

### FNs klimapanels (IPCC) projeksjoner for 2100

Havnivaaøkningen avhenger av fremtidige utslipp:

- **Lavt utslippsscenario (SSP1-2.6)**: 0,3-0,6 m økning innen 2100
- **Middels utslippsscenario (SSP2-4.5)**: 0,4-0,8 m økning
- **Høyt utslippsscenario (SSP5-8.5)**: 0,6-1,0 m økning
- **Med mulig isdekke-kollaps**: Opptil 2 m økning kan ikke utelukkes

### Langvarige konsekvenser

- Selv om utslippene stoppes i dag, vil havnivaaet fortsette aa stige i flere hundre aar
- Termisk ekspansjon er langsomvirkende (havet bruker lang tid paa aa varmes opp)
- Full smelting av Grønlandsisen (7,4 m) kan vaere uunngaaelig ved vedvarende oppvarming over 1,5-2 °C
- Innen 2300 kan havnivaaet vaere 2-5 m høyere avhengig av utslippsbane

### Konsekvenser

- **Lavtliggende øystater**: Tuvalu, Maldivene, Marshalløyene trues av oversvømmelse
- **Kystbyer**: Shanghai, Miami, Mumbai, Jakarta, Amsterdam maa beskyttes eller tilpasses
- **Stormflod**: Høyere havnivaa forsterker effekten av stormflod dramatisk
- **Kysteroosjon**: Akselerert erosjon av kystlinjer
- **Saltvannsinntrengning**: Grunnvann og jordbruksomraader paavirkes`,
    },
    {
      id: 'geo2-6-5-example-fremtid',
      type: 'example',
      title: 'Konsekvenser av 1 meters havnivaaøkning',
      problem: 'Forklar hvilke omraader og mennesker som vil bli mest berørt av en havnivaaøkning paa 1 meter, og hvilke tiltak som kan settes inn.',
      solution: `**Konsekvenser av 1 meters havnivaaøkning:**

1. **Berørte omraader:**
   - Ca. 150-300 millioner mennesker bor i omraader som vil ligge under flodnivaa
   - Lavtliggende øystater (Tuvalu, Maldivene) kan bli ubeboelige
   - Store deltaomraader (Bangladesh, Egypt, Vietnam) oversvømmes
   - Kystbyer som Miami, Shanghai, Mumbai faar store problemer

2. **Direkte konsekvenser:**
   - Permanent oversvømmelse av lavereliggende kystomraader
   - Stormflod naar mye lenger inn → mangedoblet skadeomfang
   - Saltvannsinntrengning i grunnvann og jordbruksjord
   - Tap av kystøkosystemer (mangrover, koralller, vaatmark)

3. **Mulige tiltak:**
   - **Beskyttelse**: Diker, flombarrierer, stormflodvern (som i Nederland)
   - **Tilpasning**: Bygging paa påler, flytende strukturer, tilbaketrekking fra kysten
   - **Planlagt tilbaketrekking**: Flytte bosettinger og infrastruktur vekk fra kysten
   - **Utslippsreduksjon**: Bremse den underliggende aarsaken

**Konklusjon:** 1 meter havnivaaøkning vil vaere en av de mest kostbare konsekvensene av klimaendringer, med konsekvenser for hundrevis av millioner mennesker.`,
    },
    {
      id: 'geo2-6-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering av kapittel 6.5

- **Eustatiske endringer** er globale havnivaaendringer foraarsaket av endret vannvolum (termisk ekspansjon, issmelting).
- **Isostatiske endringer** er lokale, relative endringer pga. landhevning eller -senkning.
- **Termisk ekspansjon** bidrar ca. 40 % av dagens havnivaaøkning; issmelting bidrar det resterende.
- Havnivaaet har steget ca. 20 cm siden 1900, og raten akselererer (naa ca. 3,7 mm/aar).
- **IPCC-projeksjoner** varierer fra 0,3 til over 1 m økning innen 2100, avhengig av utslipp.
- **Norge** er spesielt fordi postglasial landhevning (isostatisk) kompenserer for eustatisk økning de fleste steder.
- Havnivaaøkning truer lavtliggende kystomraader, øystater og deltaregioner globalt.`,
    },
  ],
  exercises: [
    {
      id: 'geo2-6-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er forskjellen mellom eustatisk og isostatisk havnivaaendring?',
      options: [
        { id: 'a', text: 'Eustatisk er global endring i vannvolumet, isostatisk er lokal endring pga. landhevning/senkning', isCorrect: true },
        { id: 'b', text: 'Eustatisk skyldes tidevann, isostatisk skyldes vind', isCorrect: false },
        { id: 'c', text: 'Eustatisk er hurtig, isostatisk er langsom', isCorrect: false },
        { id: 'd', text: 'De betyr det samme, men brukes i ulike fagomraader', isCorrect: false },
      ],
      solution: 'Eustatisk havnivaaendring er en global endring i havnivaaet foraarsaket av endringer i vannvolumet (f.eks. termisk ekspansjon eller issmelting). Isostatisk havnivaaendring er en lokal, relativ endring foraarsaket av at land hever seg eller synker, for eksempel pga. postglasial landhevning i Skandinavia.',
    },
    {
      id: 'geo2-6-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvordan termisk ekspansjon bidrar til havnivaaøkning, og hvorfor denne effekten er langvarig.',
      solution: 'Termisk ekspansjon oppstaar fordi vann utvider seg naar det varmes opp. Ettersom havet absorberer over 90 % av overskuddsvarmen fra drivhuseffekten, øker temperaturen gradvis gjennom store vannvolumer. Selv en liten temperaturøkning gir en maalbar volumøkning naar den virker over hele havdypet. Effekten er langvarig av to grunner: (1) Det tar svært lang tid (hundrevis av aar) aa varme opp de dype vannlagene, saa ekspansjonen vil fortsette lenge etter at atmosfærens temperatur stabiliseres. (2) Prosessen er kumulativ - varmen forblir i havet. Termisk ekspansjon bidrar i dag ca. 40 % av den totale havnivaaøkningen.',
    },
    {
      id: 'geo2-6-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Omtrent hvor mye lavere var havnivaaet under siste istidsmaksimum sammenlignet med i dag?',
      options: [
        { id: 'a', text: 'Ca. 120 meter lavere', isCorrect: true },
        { id: 'b', text: 'Ca. 20 meter lavere', isCorrect: false },
        { id: 'c', text: 'Ca. 10 meter lavere', isCorrect: false },
        { id: 'd', text: 'Ca. 500 meter lavere', isCorrect: false },
      ],
      solution: 'Under siste istidsmaksimum (for ca. 20 000 aar siden) var havnivaaet ca. 120 m lavere enn i dag. Enorme vannmengder var bundet i de store innlandsisene over Nord-Amerika (Laurentidedekket) og Nord-Europa (det skandinaviske isdekket). Nordsjøen var tørt land (Doggerland), og man kunne gaa fra England til Europa.',
    },
    {
      id: 'geo2-6-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor Norge opplever relativ havnivaasenkning til tross for at det globale havnivaaet stiger.',
      solution: 'Norge opplever fortsatt postglasial landhevning (isostatisk heving) etter at den skandinaviske innlandsisen smeltet for ca. 10 000 aar siden. Jordskorpen, som var presset ned av isens enorme vekt, hever seg tilbake mot likevekt. I omraadet rundt Oslofjorden er landhevningen ca. 3-5 mm/aar, noe som er høyere enn den naaværende globale havnivaaøkningen (ca. 3,7 mm/aar). Resultatet er at havnivaaet relativt til land fortsatt synker de fleste steder i Norge. Langs ytterkysten er landhevningen imidlertid naer null, saa der vil den eustatiske økningen dominere i fremtiden.',
    },
    {
      id: 'geo2-6-5-ex5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Ifølge IPCCs høyeste utslippsscenario, hvor mye kan havnivaaet stige innen 2100?',
      options: [
        { id: 'a', text: '0,6-1,0 m, muligens opptil 2 m med isdekke-kollaps', isCorrect: true },
        { id: 'b', text: 'Maksimalt 20 cm', isCorrect: false },
        { id: 'c', text: '10-15 m', isCorrect: false },
        { id: 'd', text: 'Nøyaktig 50 cm i alle scenarioer', isCorrect: false },
      ],
      solution: 'Ifølge IPCCs høyeste utslippsscenario (SSP5-8.5) kan havnivaaet stige 0,6-1,0 m innen 2100. Dersom isdekke-kollaps fra Vest-Antarktis inkluderes, kan økningen naa opptil 2 m. Selv i det laveste utslippsscenariet (SSP1-2.6) forventes 0,3-0,6 m økning. Usikkerheten er størst knyttet til isdekke-dynamikk, spesielt i Antarktis.',
    },
    {
      id: 'geo2-6-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft de ulike bidragene til dagens havnivaaøkning (termisk ekspansjon, fjellisbreer, Grønland, Antarktis) og vurder hvilke som forventes aa bli viktigst i fremtiden.',
      solution: 'Dagens havnivaaøkning (ca. 3,7 mm/aar) skyldes: (1) Termisk ekspansjon: ca. 40 %, den største enkeltfaktoren. (2) Fjellisbreer og smaa iskapper: ca. 20 %, men disse har begrenset volum. (3) Grønlandsisen: ca. 20 %, med akselererende massetap. (4) Antarktisk innlandsis: ca. 10 %, men økende bidrag. (5) Endringer i vannlagring paa land: ca. 10 %. I fremtiden forventes fordelingen aa endre seg: Termisk ekspansjon vil forbli viktig, men issmeltingen fra Grønland og spesielt Antarktis vil bli dominerende. Fjellisbreene har begrenset totalt volum og vil etter hvert vaere «brukt opp». Det største usikkerhetsmomentet er Vest-Antarktis, som har potensial for rask destabilisering og kan alene bidra med opptil 5 m havnivaaøkning paa lang sikt.',
    },
    {
      id: 'geo2-6-5-ex7',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den naaværende raten for global havnivaaøkning?',
      options: [
        { id: 'a', text: 'Ca. 3,7 mm per aar', isCorrect: true },
        { id: 'b', text: 'Ca. 3,7 cm per aar', isCorrect: false },
        { id: 'c', text: 'Ca. 3,7 m per aar', isCorrect: false },
        { id: 'd', text: 'Ca. 0,37 mm per aar', isCorrect: false },
      ],
      solution: 'Den naaværende raten for global havnivaaøkning er ca. 3,7 mm per aar (for perioden 2006-2018). Dette er en betydelig akselerasjon fra tidlig paa 1900-tallet, da raten var ca. 1,4 mm/aar. Akselerasjonen skyldes økende bidrag fra baade termisk ekspansjon og issmelting.',
    },
  ],
};

// ============================================================================
// Samle alle Del 6-kapitler
// ============================================================================

export const GEOFAG_2_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOFAG_2_6_1, CHAPTER_GEOFAG_2_6_2, CHAPTER_GEOFAG_2_6_3, CHAPTER_GEOFAG_2_6_4, CHAPTER_GEOFAG_2_6_5,
];

export function getGeofag2Del6Chapter(chapterId: string): TextbookChapter | undefined {
  return GEOFAG_2_DEL6_CHAPTERS.find(chapter => chapter.id === chapterId);
}
