/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 1 - Kapittel 11-13
 *
 * Kapittel 11: El mundo hispanohablante (Den spansktalende verden)
 * Kapittel 12: Arte y cultura (Kunst og kultur)
 * Kapittel 13: Textos auténticos (Autentiske tekster)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 11: EL MUNDO HISPANOHABLANTE
// ============================================================================

export const CHAPTER_SPANSK_1_11_1: TextbookChapter = {
  id: 'spansk-1-11-1',
  courseId: 'spansk-1',
  chapterNumber: '11.1',
  title: 'Los países hispanohablantes',
  subtitle: 'Spansktalende land',
  description: 'Lær om de over 20 landene der spansk er offisielt språk.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske geografi og levemåter i spansktalende områder'],
  content: [
    {
      id: 'spansk-1-11-1-intro',
      type: 'text',
      content: `## Los países hispanohablantes - Spansktalende land

Spansk er et av verdens mest talte språk, med over 500 millioner morsmålsbrukere. Det er offisielt språk i mer enn 20 land fordelt på fire kontinenter: Europa, Nord-Amerika, Mellom-Amerika og Sør-Amerika. I tillegg snakkes spansk av store minoriteter i USA, Filippinene og andre land.

I dette kapittelet får du en oversikt over den spansktalende verden og lærer viktige uttrykk for å snakke om land, hovedsteder og nasjonaliteter.`,
    },
    {
      id: 'spansk-1-11-1-def-1',
      type: 'definition',
      title: 'Hispanohablante',
      content: `**Hispanohablante** betyr \"spansktalende\". Ordet brukes om personer og land der spansk er hovedspråk. Man sier også **el mundo hispano** (den spansktalende verden) eller **los países de habla hispana** (de spansktalende landene).`,
    },
    {
      id: 'spansk-1-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Land og hovedsteder',
      problem: `Skriv hovedstaden til hvert land:

| País | Capital |
|------|---------|
| España | ? |
| México | ? |
| Argentina | ? |
| Colombia | ? |
| Perú | ? |`,
      solution: `| País | Capital |
|------|---------|
| España | Madrid |
| México | Ciudad de México |
| Argentina | Buenos Aires |
| Colombia | Bogotá |
| Perú | Lima |`,
    },
    {
      id: 'spansk-1-11-1-def-2',
      type: 'definition',
      title: 'Nasjonaliteter på spansk',
      content: `På spansk bøyes nasjonaliteter etter kjønn og tall:

| Land | Hankjønn (sg.) | Hunkjønn (sg.) | Flertall |
|------|----------------|----------------|----------|
| España | español | española | españoles / españolas |
| México | mexicano | mexicana | mexicanos / mexicanas |
| Argentina | argentino | argentina | argentinos / argentinas |
| Colombia | colombiano | colombiana | colombianos / colombianas |
| Chile | chileno | chilena | chilenos / chilenas |

Noen nasjonaliteter ender på **-ense** og er like i hankjønn og hunkjønn: **costarricense**, **nicaragüense**, **estadounidense**.`,
    },
    {
      id: 'spansk-1-11-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Nasjonaliteter i setninger',
      problem: `Fyll inn riktig nasjonalitet:

1. María es de Colombia. Ella es ______.
2. Pablo es de Argentina. Él es ______.
3. Ana y Sofía son de México. Ellas son ______.`,
      solution: `1. María es de Colombia. Ella es **colombiana**.
2. Pablo es de Argentina. Él es **argentino**.
3. Ana y Sofía son de México. Ellas son **mexicanas**.

Husk: Nasjonaliteten må samsvare med personens kjønn og tall.`,
    },
    {
      id: 'spansk-1-11-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange land har spansk som offisielt språk?',
        options: [
          { id: 'a', text: '10 land', isCorrect: false },
          { id: 'b', text: 'Omtrent 15 land', isCorrect: false },
          { id: 'c', text: 'Mer enn 20 land', isCorrect: true },
          { id: 'd', text: 'Bare Spania og Mexico', isCorrect: false },
        ],
        solution: 'Spansk er offisielt språk i mer enn 20 land, inkludert Spania, Mexico, de fleste landene i Mellom- og Sør-Amerika, samt Ekvatorial-Guinea i Afrika og Puerto Rico.',
      },
    },
    {
      id: 'spansk-1-11-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedstaden i Colombia?',
        options: [
          { id: 'a', text: 'Medellín', isCorrect: false },
          { id: 'b', text: 'Bogotá', isCorrect: true },
          { id: 'c', text: 'Cartagena', isCorrect: false },
          { id: 'd', text: 'Cali', isCorrect: false },
        ],
        solution: 'Bogota er hovedstaden i Colombia. Medellin, Cartagena og Cali er andre store byer i landet.',
      },
    },
    {
      id: 'spansk-1-11-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv nasjonaliteten til disse personene. Husk å bøyse etter kjønn.',
        subTasks: [
          { label: 'a', task: 'Pedro es de Perú. Él es ______.', solution: 'peruano' },
          { label: 'b', task: 'Lucía es de Chile. Ella es ______.', solution: 'chilena' },
          { label: 'c', task: 'Carlos es de Cuba. Él es ______.', solution: 'cubano' },
          { label: 'd', task: 'Elena es de España. Ella es ______.', solution: 'española' },
        ],
        solution: 'a) peruano, b) chilena, c) cubano, d) española. Nasjonaliteter bøyes etter kjønn: -o for hankjønn, -a for hunkjønn.',
        hints: ['Husk at nasjonaliteter på spansk har ulik ending for hankjønn (-o) og hunkjønn (-a).'],
      },
    },
    {
      id: 'spansk-1-11-1-text-2',
      type: 'text',
      content: `## Oversikt over spansktalende land

Her er en komplett liste over de spansktalende landene, gruppert etter verdensdel:

**Europa:** España

**Nord-Amerika:** México

**Mellom-Amerika:** Guatemala, Honduras, El Salvador, Nicaragua, Costa Rica, Panamá

**Karibia:** Cuba, República Dominicana, Puerto Rico

**Sør-Amerika:** Colombia, Venezuela, Ecuador, Perú, Bolivia, Chile, Argentina, Uruguay, Paraguay

**Afrika:** Guinea Ecuatorial

I tillegg snakker over 40 millioner mennesker i USA spansk som forstespråk, noe som gjør USA til et av landene med flest spansktalende i verden.`,
    },
    {
      id: 'spansk-1-11-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Plasser hvert land i riktig verdensdel: Cuba, Chile, España, Guatemala, Guinea Ecuatorial, México.',
        subTasks: [
          { label: 'a', task: 'Europa:', solution: 'España' },
          { label: 'b', task: 'Nord-Amerika:', solution: 'México' },
          { label: 'c', task: 'Mellom-Amerika:', solution: 'Guatemala' },
          { label: 'd', task: 'Karibia:', solution: 'Cuba' },
          { label: 'e', task: 'Sør-Amerika:', solution: 'Chile' },
          { label: 'f', task: 'Afrika:', solution: 'Guinea Ecuatorial' },
        ],
        solution: 'a) España (Europa), b) México (Nord-Amerika), c) Guatemala (Mellom-Amerika), d) Cuba (Karibia), e) Chile (Sør-Amerika), f) Guinea Ecuatorial (Afrika).',
        hints: ['Guinea Ecuatorial er det eneste spansktalende landet i Afrika.'],
      },
    },
    {
      id: 'spansk-1-11-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Spansk er offisielt språk i mer enn 20 land på fire kontinenter.
- Spansk er verdens nest mest talte morsmål, med over 500 millioner morsmålsbrukere.
- Nasjonaliteter på spansk bøyes etter kjønn og tall.
- De fleste spansktalende land ligger i Latin-Amerika (Mellom- og Sør-Amerika).
- USA har også en svært stor spansktalende befolkning.

**Nyttige uttrykk:**
- *¿De dónde eres?* - Hvor er du fra?
- *Soy de Noruega.* - Jeg er fra Norge.
- *¿Cuál es la capital de...?* - Hva er hovedstaden i...?`,
    },
    {
      id: 'spansk-1-11-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst på spansk (4-6 setninger) der du presenterer deg selv, sier hvor du er fra, og nevner to spansktalende land du gjerne vil besøke. Bruk uttrykkene fra kapittelet.',
        solution: 'Eksempel: Hola, me llamo Erik. Soy de Noruega, soy noruego. Me gusta mucho el español. Quiero visitar España porque quiero ver Madrid. También quiero visitar Colombia porque me gusta la música colombiana. ¡El mundo hispano es muy grande e interesante!',
        hints: ['Bruk *Soy de...* for å si hvor du er fra.', 'Bruk *Quiero visitar...* for å si at du vil besøke et land.'],
      },
    },
    {
      id: 'spansk-1-11-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av disse landene ligger IKKE i Mellom-Amerika?',
        options: [
          { id: 'a', text: 'Guatemala', isCorrect: false },
          { id: 'b', text: 'Ecuador', isCorrect: true },
          { id: 'c', text: 'Honduras', isCorrect: false },
          { id: 'd', text: 'Costa Rica', isCorrect: false },
        ],
        solution: 'Ecuador ligger i Sør-Amerika, ikke i Mellom-Amerika. Guatemala, Honduras og Costa Rica er alle mellomamerikanske land.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'hispanohablante', definition: 'spansktalende (person eller land)' },
    { term: 'la capital', definition: 'hovedstaden' },
    { term: 'el país', definition: 'landet' },
    { term: 'la nacionalidad', definition: 'nasjonaliteten' },
    { term: 'el idioma', definition: 'språket' },
    { term: '¿De dónde eres?', definition: 'Hvor er du fra?' },
  ],
};

export const CHAPTER_SPANSK_1_11_2: TextbookChapter = {
  id: 'spansk-1-11-2',
  courseId: 'spansk-1',
  chapterNumber: '11.2',
  title: 'España',
  subtitle: 'Spania',
  description: 'Utforsk spanske regioner, byer og kulturelle særtrekk.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske geografi og levemåter i spansktalende områder'],
  content: [
    {
      id: 'spansk-1-11-2-intro',
      type: 'text',
      content: `## España - Spania

España esta en el suroeste de Europa, en la Península Ibérica. Spania er et mangfoldig land med ulike regioner, språk og tradisjoner. Landet har rundt 47 millioner innbyggere og er kjent for sin rike historie, vakre arkitektur, fantastiske mat og livlige kultur.

Spania er delt inn i 17 autonome regioner (*comunidades autónomas*), og hver region har sitt eget særpreg. I dette kapittelet lærer du om de viktigste regionene, byene og kulturelle trekkene i Spania.`,
    },
    {
      id: 'spansk-1-11-2-def-1',
      type: 'definition',
      title: 'Comunidad autónoma',
      content: `**Una comunidad autónoma** er en autonom region i Spania. Spania har 17 slike regioner, og hver har sitt eget regionale parlament og en viss grad av selvstyre. Eksempler: Andalucía, Cataluña, el País Vasco (Baskerland), Galicia.`,
    },
    {
      id: 'spansk-1-11-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Byer og regioner',
      problem: `Koble hver by med riktig region:

| Ciudad | Comunidad autónoma |
|--------|--------------------|
| Barcelona | ? |
| Sevilla | ? |
| Bilbao | ? |
| Valencia | ? |`,
      solution: `| Ciudad | Comunidad autónoma |
|--------|--------------------|
| Barcelona | Cataluña |
| Sevilla | Andalucía |
| Bilbao | País Vasco |
| Valencia | Comunidad Valenciana |`,
    },
    {
      id: 'spansk-1-11-2-def-2',
      type: 'definition',
      title: 'Sprak i Spania',
      content: `I tillegg til spansk (castellano) har Spania flere offisielle regionale språk:

- **Catalán** - snakkes i Cataluña, Valencia og Balearene
- **Gallego** - snakkes i Galicia (nordvest)
- **Euskera (baskisk)** - snakkes i País Vasco og Navarra

Disse er ikke dialekter av spansk, men helt egne språk med egen grammatikk og historie.`,
    },
    {
      id: 'spansk-1-11-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive Spania',
      problem: `Oversett til spansk: \"Spania ligger i Sør-Europa. Hovedstaden er Madrid. Spania har mange vakre strender.\"`,
      solution: `**España está en el sur de Europa. La capital es Madrid. España tiene muchas playas bonitas.**

- *está en* = ligger i
- *el sur de Europa* = Sør-Europa
- *tiene* = har
- *muchas playas bonitas* = mange vakre strender`,
    },
    {
      id: 'spansk-1-11-2-text-2',
      type: 'text',
      content: `## Viktige spanske byer

**Madrid** - Hovedstaden, ligger midt i landet. Kjent for Prado-museet, Retiro-parken og et livlig natteliv. Befolkning: ca. 3,3 millioner.

**Barcelona** - Nest største by, hovedstad i Cataluña. Kjent for Gaudis arkitektur (La Sagrada Familia), La Ramblå og stranden. Befolkning: ca. 1,6 millioner.

**Sevilla** - Hovedstad i Andalucía i sor. Kjent for flamenco, La Giralda og vakre palass. Her feires den berømte Feria de Abril.

**Valencia** - Kjent for Las Fallas-festivalen, Ciudad de las Artes y las Ciencias og paella.

**Bilbao** - Hovedby i Baskerland, kjent for Guggenheim-museet.`,
    },
    {
      id: 'spansk-1-11-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva heter Spanias hovedstad?',
        options: [
          { id: 'a', text: 'Barcelona', isCorrect: false },
          { id: 'b', text: 'Sevilla', isCorrect: false },
          { id: 'c', text: 'Madrid', isCorrect: true },
          { id: 'd', text: 'Valencia', isCorrect: false },
        ],
        solution: 'Madrid er Spanias hovedstad og største by. Den ligger midt i landet på den kastiljanske høysletten.',
      },
    },
    {
      id: 'spansk-1-11-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket språk snakkes i Galicia i tillegg til spansk?',
        options: [
          { id: 'a', text: 'Catalán', isCorrect: false },
          { id: 'b', text: 'Gallego', isCorrect: true },
          { id: 'c', text: 'Euskera', isCorrect: false },
          { id: 'd', text: 'Portugués', isCorrect: false },
        ],
        solution: 'Gallego (galisisk) snakkes i Galicia, nordvest i Spania. Det ligner på portugisisk og er et eget offisielt språk i regionen.',
      },
    },
    {
      id: 'spansk-1-11-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble riktig by med det den er kjent for.',
        subTasks: [
          { label: 'a', task: 'Barcelona er kjent for...', solution: 'Gaudis arkitektur, La Sagrada Familia' },
          { label: 'b', task: 'Sevilla er kjent for...', solution: 'Flamenco og Feria de Abril' },
          { label: 'c', task: 'Valencia er kjent for...', solution: 'Las Fallas-festivalen og paella' },
          { label: 'd', task: 'Bilbao er kjent for...', solution: 'Guggenheim-museet' },
        ],
        solution: 'a) Barcelona - Gaudis arkitektur (La Sagrada Familia), b) Sevilla - Flamenco og Feria de Abril, c) Valencia - Las Fallas og paella, d) Bilbao - Guggenheim-museet.',
      },
    },
    {
      id: 'spansk-1-11-2-def-3',
      type: 'definition',
      title: 'Nyttige uttrykk om geografi',
      content: `| Spansk | Norsk |
|--------|-------|
| la playa | stranden |
| la montaña | fjellet |
| la costa | kysten |
| la isla | øya |
| el río | elven |
| el norte / sur / este / oeste | nord / sør / øst / vest |
| está en el norte de España | ligger nord i Spania |`,
    },
    {
      id: 'spansk-1-11-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett setningene til spansk.',
        subTasks: [
          { label: 'a', task: 'Barcelona ligger øst i Spania.', solution: 'Barcelona está en el este de España.' },
          { label: 'b', task: 'Sevilla ligger sør i Spania.', solution: 'Sevilla está en el sur de España.' },
          { label: 'c', task: 'Spania har mange øyer.', solution: 'España tiene muchas islas.' },
        ],
        solution: 'a) Barcelona está en el este de España. b) Sevilla está en el sur de España. c) España tiene muchas islas.',
        hints: ['Bruk *está en el + himmelretning + de España* for å angi beliggenhet.'],
      },
    },
    {
      id: 'spansk-1-11-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Spania har 17 autonome regioner med ulike kulturelle særpreg.
- Madrid er hovedstaden; Barcelona, Sevilla, Valencia og Bilbao er andre viktige byer.
- I tillegg til spansk (castellano) snakkes catalan, gallego og euskera i ulike regioner.
- Spania er kjent for flamenco, Gaudis arkitektur, paella og mange festivaler.
- Landet har et variert landskap med strender, fjell, øyer og sletter.`,
    },
    {
      id: 'spansk-1-11-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort presentasjon på spansk (5-7 setninger) om en spansk by du vil besøke. Si hvor den ligger, hva den er kjent for, og hvorfor du vil besøke den.',
        solution: 'Eksempel: Quiero visitar Barcelona. Barcelona está en el noreste de España, en Cataluña. Es una ciudad muy bonita y grande. Barcelona es famosa por la arquitectura de Gaudí, como La Sagrada Familia. También tiene playas bonitas y buena comida. Me gusta mucho el fútbol, y quiero ver el Camp Nou. ¡Barcelona es una ciudad fantástica!',
        hints: ['Bruk *Quiero visitar...* (Jeg vil besøke...)', 'Bruk *es famosa por...* (den er kjønt for...)'],
      },
    },
    {
      id: 'spansk-1-11-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvor mange autonome regioner (comunidades autonomas) har Spania?',
        options: [
          { id: 'a', text: '12', isCorrect: false },
          { id: 'b', text: '15', isCorrect: false },
          { id: 'c', text: '17', isCorrect: true },
          { id: 'd', text: '20', isCorrect: false },
        ],
        solution: 'Spania har 17 comunidades autonomas (autonome regioner), pluss to autonome byer: Ceuta og Melilla i Nord-Afrika.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la comunidad autónoma', definition: 'autonom region' },
    { term: 'la capital', definition: 'hovedstaden' },
    { term: 'la playa', definition: 'stranden' },
    { term: 'la montaña', definition: 'fjellet' },
    { term: 'la isla', definition: 'øya' },
    { term: 'el castellano', definition: 'kastiljansk/spansk (språket)' },
  ],
};

export const CHAPTER_SPANSK_1_11_3: TextbookChapter = {
  id: 'spansk-1-11-3',
  courseId: 'spansk-1',
  chapterNumber: '11.3',
  title: 'México y Centroamérica',
  subtitle: 'Mexico og Mellom-Amerika',
  description: 'Lær om Mexico, Guatemala, Costa Rica og andre mellomamerikanske land.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske geografi og levemåter i spansktalende områder'],
  content: [
    {
      id: 'spansk-1-11-3-intro',
      type: 'text',
      content: `## México y Centroamérica - Mexico og Mellom-Amerika

Mexico og Mellom-Amerika er en fargerik og mangfoldig del av den spansktalende verden. Mexico er det største spansktalende landet i verden malt etter folketall (ca. 130 millioner), og de mellomamerikanske landene byr på rik historie, fantastisk natur og levende kulturer.

I dette kapittelet lærer du om de viktigste landene og kulturene i denne regionen.`,
    },
    {
      id: 'spansk-1-11-3-def-1',
      type: 'definition',
      title: 'México',
      content: `**México** (offisielt: Estados Unidos Mexicanos) er det største spansktalende landet i verden. Hovedstaden er **Ciudad de México** (CDMX), en av verdens største byer med over 21 millioner innbyggere i storbyområdet. Mexico er kjent for:

- **La comida mexicana** - meksikansk mat (tacos, enchiladas, guacamole)
- **Las pirámides** - pyramidene (Teotihuacán, Chichén Itzá)
- **Los mariachis** - tradisjonelle musikkgrupper
- **El Día de los Muertos** - De dødes dag (1.-2. november)`,
    },
    {
      id: 'spansk-1-11-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Mellomamerikanske land og hovedsteder',
      problem: `Koble hvert land med sin hovedstad:

| País | Capital |
|------|---------|
| Guatemala | ? |
| Honduras | ? |
| El Salvador | ? |
| Nicaragua | ? |
| Costa Rica | ? |
| Panamá | ? |`,
      solution: `| País | Capital |
|------|---------|
| Guatemala | Ciudad de Guatemala |
| Honduras | Tegucigalpa |
| El Salvador | San Salvador |
| Nicaragua | Managua |
| Costa Rica | San José |
| Panamá | Ciudad de Panamá |`,
    },
    {
      id: 'spansk-1-11-3-def-2',
      type: 'definition',
      title: 'Centroamérica',
      content: `**Centroamérica** (Mellom-Amerika) er landbroen mellom Mexico og Sør-Amerika. Seks av de syv mellomamerikanske landene har spansk som offisielt språk. Belize er unntaket - der er engelsk offisielt språk.

Mellom-Amerika er kjent for:
- Tropisk natur og regnskog
- Vulkaner og vakre strender
- Maya-ruiner (særlig i Guatemala og Honduras)
- Kaffe-prøduksjon (Costa Rica, Guatemala, Honduras)
- Panamakanalen`,
    },
    {
      id: 'spansk-1-11-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive et land',
      problem: `Les teksten og svar på spørsmålene:

\"Costa Rica es un país pequeño en Centroamérica. Tiene costas en el océano Pacífico y en el mar Caribe. La capital es San José. Costa Rica es famosa por su naturaleza, sus parques nacionales y sus playas. No tiene ejército desde 1948.\"

1. ¿Dónde está Costa Rica?
2. ¿Cómo se llama la capital?
3. ¿Por qué es famosa Costa Rica?`,
      solution: `1. Costa Rica está en Centroamérica.
2. La capital se llama San José.
3. Costa Rica es famosa por su naturaleza, sus parques nacionales y sus playas.

Ekstra fakta: Costa Rica er et av fa land i verden uten militære. Landet bruker pengene på utdanning og helse i stedet.`,
    },
    {
      id: 'spansk-1-11-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedstaden i Mexico?',
        options: [
          { id: 'a', text: 'Cancún', isCorrect: false },
          { id: 'b', text: 'Guadalajara', isCorrect: false },
          { id: 'c', text: 'Ciudad de México', isCorrect: true },
          { id: 'd', text: 'Monterrey', isCorrect: false },
        ],
        solution: 'Ciudad de Mexico (CDMX) er Mexicos hovedstad og en av verdens største byer.',
      },
    },
    {
      id: 'spansk-1-11-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket mellomamerikansk land er kjent for Panamakanalen?',
        options: [
          { id: 'a', text: 'Costa Rica', isCorrect: false },
          { id: 'b', text: 'Nicaragua', isCorrect: false },
          { id: 'c', text: 'Honduras', isCorrect: false },
          { id: 'd', text: 'Panamá', isCorrect: true },
        ],
        solution: 'Panama er kjent for Panamakanalen, som forbinder Atlanterhavet og Stillehavet. Kanalen ble åpnet i 1914.',
      },
    },
    {
      id: 'spansk-1-11-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om Mexico og Mellom-Amerika.',
        subTasks: [
          { label: 'a', task: 'Hva feires 1.-2. november i Mexico?', solution: 'El Día de los Muertos (De dødes dag).' },
          { label: 'b', task: 'Hvilket mellomamerikansk land har ikke spansk som offisielt språk?', solution: 'Belize (der er engelsk offisielt språk).' },
          { label: 'c', task: 'Nevn to ting Mexico er kjent for.', solution: 'For eksempel: meksikansk mat (tacos) og pyramidene (Chichen Itza), mariachi-musikk, Dia de los Muertos.' },
        ],
        solution: 'a) El Dia de los Muertos. b) Belize. c) For eksempel meksikansk mat og pyramidene.',
      },
    },
    {
      id: 'spansk-1-11-3-text-2',
      type: 'text',
      content: `## Meksikansk og mellomamerikansk kultur

Regionen har en rik kulturarv som blander urfolkstradisjoner med spansk kolonial påvirkning:

**Mat:** Meksikansk mat ble i 2010 oppført på UNESCOs liste over immateriell kulturarv. Viktige ingredienser er mais, bonner, chili og avokado. Kjente retter inkluderer tacos, tamåles, enchiladas og mole.

**Maya-sivilisasjonen:** Mayaene hadde en avansert sivilisasjon i Mellom-Amerika og sør-Mexico. I dag kan man besøke Maya-ruiner i Mexico (Chichen Itza), Guatemala (Tikal) og Honduras (Copan).

**Natur:** Regionen har utrolig biologisk mangfold - fra regnskoger i Costa Rica til korallrev i Belize og ørkener i nord-Mexico.`,
    },
    {
      id: 'spansk-1-11-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk. Bruk ordlisten til hjelp.',
        subTasks: [
          { label: 'a', task: 'Mexico er et stort land. (grande = stor)', solution: 'México es un país grande.' },
          { label: 'b', task: 'Guatemala har vakre pyramider. (hermosas = vakre, pirámides = pyramider)', solution: 'Guatemala tiene pirámides hermosas.' },
          { label: 'c', task: 'Costa Rica er kjent for sin natur. (famoso por = kjent for, naturaleza = natur)', solution: 'Costa Rica es famosa por su naturaleza.' },
        ],
        solution: 'a) México es un país grande. b) Guatemala tiene pirámides hermosas. c) Costa Rica es famosa por su naturaleza.',
        hints: ['Husk at adjektiver på spansk vanligvis står etter substantivet.'],
      },
    },
    {
      id: 'spansk-1-11-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Mexico er det største spansktalende landet i verden (ca. 130 millioner innbyggere).
- Mellom-Amerika bestar av seks spansktalende land pluss Belize (engelsktalende).
- Regionen har en rik kulturarv preget av urfolkstradisjoner og spansk kolonial historie.
- Meksikansk mat er på UNESCOs liste over immateriell kulturarv.
- Maya-ruiner finnes i Mexico, Guatemala og Honduras.

**Nyttige ord:**
- *el país* - landet
- *la comida* - maten
- *la naturaleza* - naturen
- *las ruinas* - ruinene
- *la pirámide* - pyramiden`,
    },
    {
      id: 'spansk-1-11-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I hvilket år ble meksikansk mat oppført på UNESCOs liste over immateriell kulturarv?',
        options: [
          { id: 'a', text: '2005', isCorrect: false },
          { id: 'b', text: '2010', isCorrect: true },
          { id: 'c', text: '2015', isCorrect: false },
          { id: 'd', text: '2020', isCorrect: false },
        ],
        solution: 'Meksikansk mat ble oppført på UNESCOs liste over immateriell kulturarv i 2010. Det var det første mattradisjonen som fikk denne statusen.',
      },
    },
    {
      id: 'spansk-1-11-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst på spansk (4-6 setninger) der du sammenligner to mellomamerikanske land. Nevn hovedstad, beliggenhet og hva landet er kjent for.',
        solution: 'Eksempel: Costa Rica y Guatemala son dos países en Centroamérica. La capital de Costa Rica es San José y la capital de Guatemala es Ciudad de Guatemala. Costa Rica es famosa por su naturaleza y sus parques nacionales. Guatemala es famosa por las ruinas mayas, como Tikal. Los dos países tienen playas bonitas. Me gustaría visitar los dos países.',
        hints: ['Bruk *es famoso/famosa por...* for å si hva et land er kjent for.', 'Bruk *Los dos países* for å si \"begge landene\".'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la pirámide', definition: 'pyramiden' },
    { term: 'la comida', definition: 'maten' },
    { term: 'la naturaleza', definition: 'naturen' },
    { term: 'el ejército', definition: 'hæren/militæret' },
    { term: 'las ruinas', definition: 'ruinene' },
    { term: 'famoso/famosa por', definition: 'kjent for' },
  ],
};

export const CHAPTER_SPANSK_1_11_4: TextbookChapter = {
  id: 'spansk-1-11-4',
  courseId: 'spansk-1',
  chapterNumber: '11.4',
  title: 'Sudamérica',
  subtitle: 'Sør-Amerika',
  description: 'Utforsk Argentina, Colombia, Chile, Peru og andre soramerikanske land.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske geografi og levemåter i spansktalende områder'],
  content: [
    {
      id: 'spansk-1-11-4-intro',
      type: 'text',
      content: `## Sudamérica - Sør-Amerika

Sør-Amerika er et kontinent med enorm variasjon i natur, kultur og tradisjoner. Ni av de tolv landene på kontinentet har spansk som offisielt språk. De tre øvrige er Brasil (portugisisk), Guyana (engelsk) og Surinam (nederlandsk).

Fra Andesfjellene til Amazonas regnskog, fra tango i Buenos Aires til salsa i Cali - Sør-Amerika tilbyr en utrolig rik og mangfoldig spansktalende kultur.`,
    },
    {
      id: 'spansk-1-11-4-def-1',
      type: 'definition',
      title: 'Soramerikanske land og hovedsteder',
      content: `De ni spansktalende landene i Sør-Amerika:

| País | Capital | Innbyggere (ca.) |
|------|---------|------------------|
| Colombia | Bogotá | 52 mill. |
| Venezuela | Caracas | 28 mill. |
| Ecuador | Quito | 18 mill. |
| Perú | Lima | 34 mill. |
| Bolivia | Sucre / La Paz | 12 mill. |
| Chile | Santiago | 19 mill. |
| Argentina | Buenos Aires | 46 mill. |
| Uruguay | Montevideo | 3,5 mill. |
| Paraguay | Asunción | 7 mill. |

Merk: Bolivia har to hovedsteder - Sucre (konstitusjonell) og La Paz (regjeringssete).`,
    },
    {
      id: 'spansk-1-11-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Geografi i Sør-Amerika',
      problem: `Koble hvert geografisk fenomen med riktig land:

1. Los Andes (Andesfjellene)
2. El Amazonas (Amazonas-elven)
3. Las cataratas del Iguazú (Iguazu-fossene)
4. El desierto de Atacama (Atacama-ørkenen)`,
      solution: `1. **Los Andes** - strekker seg gjennom Venezuela, Colombia, Ecuador, Peru, Bolivia, Chile og Argentina
2. **El Amazonas** - strekker seg gjennom Colombia, Ecuador og Peru (samt Brasil)
3. **Las cataratas del Iguazú** - på grensen mellom Argentina og Brasil
4. **El desierto de Atacama** - i Chile (verdens tørreste orken)`,
    },
    {
      id: 'spansk-1-11-4-def-2',
      type: 'definition',
      title: 'Kulturelle særtrekk',
      content: `Hvert soramerikansk land har sine egne kulturelle særtrekk:

- **Argentina**: Tango, biff (asado), fotball, Patagonia
- **Colombia**: Cumbia og salsa-musikk, kaffe, Cartagena
- **Peru**: Machu Picchu, ceviche, Inka-sivilisasjonen
- **Chile**: Vin, Atacama-ørkenen, Patagonia, Pablo Neruda
- **Uruguay**: Mate-te, karnevalet i Montevideo
- **Ecuador**: Galápagosøyene, ekvatorlinjen
- **Bolivia**: Salar de Uyuni (saltslatten), urfolkskultur
- **Venezuela**: Salto Ángel (verdens høyeste foss), olje`,
    },
    {
      id: 'spansk-1-11-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Leseforståelse',
      problem: `Les teksten og svar på spørsmålene:

\"Argentina es el segundo país más grande de Sudamérica. La capital es Buenos Aires, una ciudad muy grande y moderna. Argentina es famosa por el tango, la carne y el fútbol. Muchos argentinos beben mate, una bebida tradicional. En el sur del país está la Patagonia, una región con montañas, lagos y glaciares.\"

1. ¿Cuál es la capital de Argentina?
2. ¿Por qué es famosa Argentina?
3. ¿Qué es el mate?`,
      solution: `1. La capital de Argentina es Buenos Aires.
2. Argentina es famosa por el tango, la carne y el fútbol.
3. El mate es una bebida tradicional (en tradisjonell drikke).`,
    },
    {
      id: 'spansk-1-11-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket land er kjent for Machu Picchu?',
        options: [
          { id: 'a', text: 'Colombia', isCorrect: false },
          { id: 'b', text: 'Chile', isCorrect: false },
          { id: 'c', text: 'Perú', isCorrect: true },
          { id: 'd', text: 'Bolivia', isCorrect: false },
        ],
        solution: 'Machu Picchu er en gammel Inka-by i Peru, høyt oppe i Andesfjellene. Den ble bygd på 1400-tallet og er et av verdens mest berømte arkeologiske steder.',
      },
    },
    {
      id: 'spansk-1-11-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange spansktalende land er det i Sør-Amerika?',
        options: [
          { id: 'a', text: '7', isCorrect: false },
          { id: 'b', text: '9', isCorrect: true },
          { id: 'c', text: '11', isCorrect: false },
          { id: 'd', text: '12', isCorrect: false },
        ],
        solution: 'Det er 9 spansktalende land i Sør-Amerika: Colombia, Venezuela, Ecuador, Peru, Bolivia, Chile, Argentina, Uruguay og Paraguay.',
      },
    },
    {
      id: 'spansk-1-11-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble hvert land med sin hovedstad.',
        subTasks: [
          { label: 'a', task: 'Colombia', solution: 'Bogotá' },
          { label: 'b', task: 'Chile', solution: 'Santiago' },
          { label: 'c', task: 'Argentina', solution: 'Buenos Aires' },
          { label: 'd', task: 'Peru', solution: 'Lima' },
          { label: 'e', task: 'Uruguay', solution: 'Montevideo' },
        ],
        solution: 'a) Colombia - Bogota, b) Chile - Santiago, c) Argentina - Buenos Aires, d) Peru - Lima, e) Uruguay - Montevideo.',
      },
    },
    {
      id: 'spansk-1-11-4-text-2',
      type: 'text',
      content: `## Spansk i Sør-Amerika

Spansk i Sør-Amerika skiller seg fra spansk i Spania på flere måter:

- I Sør-Amerika bruker man **ustedes** i stedet for **vosotros** (dere).
- I Argentina og Uruguay bruker man **vos** i stedet for **tu** (du): *Vos sos argentino* i stedet for *Tu eres argentino*.
- Uttalen varierer: I Argentina uttales \"ll\" som \"sj\" (calle = \"kasje\"), mens i de fleste andre land uttales det som \"j\".
- Det finnes mange lokale ord som varierer fra land til land. For eksempel heter \"buss\" **colectivo** i Argentina, **bus** i Colombia og **guagua** i Karibia.`,
    },
    {
      id: 'spansk-1-11-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på spørsmålene om Sør-Amerika.',
        subTasks: [
          { label: 'a', task: 'Hvilket land har verdens høyeste foss?', solution: 'Venezuela (Salto Angel).' },
          { label: 'b', task: 'I hvilke land bruker man \"vos\" i stedet for \"tu\"?', solution: 'I Argentina og Uruguay.' },
          { label: 'c', task: 'Hvilket land er kjent for Galápagosøyene?', solution: 'Ecuador.' },
        ],
        solution: 'a) Venezuela (Salto Angel). b) Argentina og Uruguay. c) Ecuador.',
        hints: ['Salto Angel er 979 meter høy.'],
      },
    },
    {
      id: 'spansk-1-11-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Sør-Amerika har ni spansktalende land.
- Kontinentet har enorm variasjon i natur: Andesfjellene, Amazonas, ørkener, isbreer.
- Hvert land har sine egne kulturelle særtrekk, fra tango i Argentina til ceviche i Peru.
- Spansk i Sør-Amerika skiller seg fra spansk i Spania, blant annet med bruk av *ustedes* i stedet for *vosotros*.
- Argentina og Uruguay bruker *vos* i stedet for *tu*.`,
    },
    {
      id: 'spansk-1-11-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg et soramerikansk land og skriv en kort presentasjon på spansk (5-7 setninger). Nevn hovedstad, beliggenhet, hva landet er kjent for og noe du synes er interessant.',
        solution: 'Eksempel: Perú es un país en el oeste de Sudamérica. La capital es Lima, una ciudad muy grande. Perú es famoso por Machu Picchu, una ciudad antigua de los incas. La comida peruana es muy buena, especialmente el ceviche. En Perú hay montañas muy altas, como los Andes. También hay selva tropical en el este del país. ¡Quiero visitar Perú algún día!',
        hints: ['Bruk *es famoso/famosa por...* for å si hva landet er kjent for.', 'Bruk *hay* for å si \"det finnes\".'],
      },
    },
    {
      id: 'spansk-1-11-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-11-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilket av disse ordene for \"buss\" brukes i Argentina?',
        options: [
          { id: 'a', text: 'guagua', isCorrect: false },
          { id: 'b', text: 'colectivo', isCorrect: true },
          { id: 'c', text: 'autobús', isCorrect: false },
          { id: 'd', text: 'camión', isCorrect: false },
        ],
        solution: 'I Argentina kalles buss \"colectivo\". \"Guagua\" brukes i Karibia (Cuba, Den dominikanske republikk), \"autobus\" er vanlig i Spania, og \"camion\" brukes om buss i Mexico.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el tango', definition: 'tango (dans og musikkstil fra Argentina)' },
    { term: 'el mate', definition: 'mate (tradisjonell drikke i Argentina/Uruguay)' },
    { term: 'el ceviche', definition: 'ceviche (ratt med rå fisk marinert i sitrus)' },
    { term: 'los Andes', definition: 'Andesfjellene' },
    { term: 'vos', definition: 'du (uformelt, brukt i Argentina/Uruguay)' },
    { term: 'ustedes', definition: 'dere (brukes i stedet for vosotros i Latin-Amerika)' },
  ],
};

// ============================================================================
// KAPITTEL 12: ARTE Y CULTURA
// ============================================================================

export const CHAPTER_SPANSK_1_12_1: TextbookChapter = {
  id: 'spansk-1-12-1',
  courseId: 'spansk-1',
  chapterNumber: '12.1',
  title: 'La música en español',
  subtitle: 'Spanskspråklig musikk',
  description: 'Utforsk reggaeton, flamenco, cumbia og kjente spanskspråklige artister.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske kunstneriske og kulturelle uttrykk i spansktalende områder'],
  content: [
    {
      id: 'spansk-1-12-1-intro',
      type: 'text',
      content: `## La música en español - Spanskspråklig musikk

Musikk er en viktig del av kulturen i den spansktalende verden. Fra flamenco i Spania til reggaeton i Puerto Rico, fra cumbia i Colombia til mariachi i Mexico - den spanskspråklige musikkscenen er utrolig variert og påvirker musikksmaken over hele verden.

I dag er spanskspråklig musikk blant den mest lyttede til på streaming-plattformer globalt. I dette kapittelet lærer du om de viktigste musikksjangerne og kjente artister.`,
    },
    {
      id: 'spansk-1-12-1-def-1',
      type: 'definition',
      title: 'El flamenco',
      content: `**El flamenco** er en kunstform fra Andalucia i sør-Spania. Flamenco kombinerer sang (*el cante*), dans (*el baile*) og gitar (*la guitarra*). Flamenco har røtter i romakulturen og ble oppført på UNESCOs liste over immateriell kulturarv i 2010.

Viktige begreper:
- **El tablao** - et sted der man framfører flamenco
- **Las palmas** - klapping som del av rytmen
- **El zapateado** - fotarbeid/stamping i flamencodans`,
    },
    {
      id: 'spansk-1-12-1-def-2',
      type: 'definition',
      title: 'Musikksjangre fra Latin-Amerika',
      content: `| Sjanger | Opprinnelse | Kjennetegn |
|---------|-------------|------------|
| **Reggaetón** | Puerto Rico | Elektronisk beat, dans, urbant |
| **Cumbia** | Colombia | Folkemusikk, danserytme |
| **Salsa** | Cuba/New York | Livlig dansemusikk, blåsing |
| **Bachata** | Rep. Dominicana | Romantisk, gitar |
| **Mariachi** | México | Trompet, fiolin, sombrero |
| **Tango** | Argentina | Melankoli, bandoneon |
| **Reguetón** | Puerto Rico | Moderne latinpop |`,
    },
    {
      id: 'spansk-1-12-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Kjente artister',
      problem: `Koble artisten med sjangeren/landet:

| Artista | Género / País |
|---------|---------------|
| Shakira | ? |
| Bad Bunny | ? |
| Rosalía | ? |
| Carlos Gardel | ? |`,
      solution: `| Artista | Género / País |
|---------|---------------|
| Shakira | Pop/cumbia - Colombia |
| Bad Bunny | Reggaetón - Puerto Rico |
| Rosalía | Flamenco-pop - España |
| Carlos Gardel | Tango - Argentina |

Andre kjente artister: J Balvin (Colombia), Karol G (Colombia), Daddy Yankee (Puerto Rico), Juanes (Colombia), Enrique Iglesias (España).`,
    },
    {
      id: 'spansk-1-12-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Ordforrad om musikk',
      problem: `Oversett til spansk:
1. Jeg liker musikk.
2. Hun synger bra.
3. Vi danser salsa.`,
      solution: `1. **Me gusta la música.**
2. **Ella canta bien.**
3. **Nosotros bailamos salsa.**

Nyttige verb:
- *cantar* = å synge
- *bailar* = å danse
- *tocar* = å spille (et instrument)
- *escuchar* = å lytte til`,
    },
    {
      id: 'spansk-1-12-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor kommer flamenco opprinnelig fra?',
        options: [
          { id: 'a', text: 'Mexico', isCorrect: false },
          { id: 'b', text: 'Andalucía, Spania', isCorrect: true },
          { id: 'c', text: 'Argentina', isCorrect: false },
          { id: 'd', text: 'Cuba', isCorrect: false },
        ],
        solution: 'Flamenco kommer opprinnelig fra Andalucia i sør-Spania. Det er en kunstform som kombinerer sang, dans og gitar.',
      },
    },
    {
      id: 'spansk-1-12-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr \"cantar\" på norsk?',
        options: [
          { id: 'a', text: 'A danse', isCorrect: false },
          { id: 'b', text: 'A spille', isCorrect: false },
          { id: 'c', text: 'A synge', isCorrect: true },
          { id: 'd', text: 'A lytte', isCorrect: false },
        ],
        solution: '\"Cantar\" betyr \"a synge\". \"Bailar\" = å danse, \"tocar\" = å spille (instrument), \"escuchar\" = å lytte.',
      },
    },
    {
      id: 'spansk-1-12-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble hver musikksjanger med riktig land.',
        subTasks: [
          { label: 'a', task: 'Tango', solution: 'Argentina' },
          { label: 'b', task: 'Cumbia', solution: 'Colombia' },
          { label: 'c', task: 'Mariachi', solution: 'México' },
          { label: 'd', task: 'Bachata', solution: 'República Dominicana' },
        ],
        solution: 'a) Tango - Argentina, b) Cumbia - Colombia, c) Mariachi - Mexico, d) Bachata - Republikken Dominikana.',
      },
    },
    {
      id: 'spansk-1-12-1-text-2',
      type: 'text',
      content: `## Musikk som læringsverktoy

Å lytte til spanskspråklig musikk er en flott måte å lære spansk på! Her er noen tips:

1. **Les sangtekstene** (*las letras*) mens du lytter
2. **Skriv ned nye ord** og slå dem opp
3. **Syng med!** Det hjelper med uttale
4. **Start med sakte sanger** (ballader) for de er lettere å forstå

Noen gode sanger for nybegynnere:
- \"Me gustas tú\" - Manu Chao (enkel og repetitiv)
- \"Clandestino\" - Manu Chao (tydelig uttale)
- \"La Bicicleta\" - Shakira & Carlos Vives (morsom og catchy)`,
    },
    {
      id: 'spansk-1-12-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett setningene til spansk.',
        subTasks: [
          { label: 'a', task: 'Jeg liker å lytte til musikk.', solution: 'Me gusta escuchar música.' },
          { label: 'b', task: 'Han spiller gitar.', solution: 'Él toca la guitarra.' },
          { label: 'c', task: 'Vi danser salsa på festen.', solution: 'Nosotros bailamos salsa en la fiesta.' },
        ],
        solution: 'a) Me gusta escuchar musica. b) El toca la guitarra. c) Nosotros bailamos salsa en la fiesta.',
        hints: ['Bruk *me gusta + infinitiv* for å si at du liker å gjøre noe.'],
      },
    },
    {
      id: 'spansk-1-12-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Den spansktalende verden har et enormt mangfold av musikksjangre.
- Flamenco fra Spania, tango fra Argentina, cumbia fra Colombia og reggaeton fra Puerto Rico er noen av de viktigste.
- Spanskspråklig musikk er i dag blant verdens mest populære.
- A lytte til musikk på spansk er en effektiv måte å lære språket på.

**Musikkverb:** cantar (synge), bailar (danse), tocar (spille instrument), escuchar (lytte)`,
    },
    {
      id: 'spansk-1-12-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst på spansk (4-5 setninger) om din musikksmak. Bruk uttrykkene: me gusta, mi música favorita es, me gusta escuchar/bailar.',
        solution: 'Eksempel: Me gusta mucho la música. Mi música favorita es el pop. Me gusta escuchar música cuando estudio. También me gusta bailar con mis amigos. Mi artista favorito es Bad Bunny porque su música es muy divertida.',
        hints: ['*Mi musica favorita es...* = Min favorittmusikk er...', '*Mi artista favorito/a es...* = Min favorittartist er...'],
      },
    },
    {
      id: 'spansk-1-12-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken artist er fra Colombia?',
        options: [
          { id: 'a', text: 'Bad Bunny', isCorrect: false },
          { id: 'b', text: 'Rosalía', isCorrect: false },
          { id: 'c', text: 'Shakira', isCorrect: true },
          { id: 'd', text: 'Daddy Yankee', isCorrect: false },
        ],
        solution: 'Shakira er fra Barranquilla, Colombia. Bad Bunny og Daddy Yankee er fra Puerto Rico, og Rosalia er fra Spania.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'cantar', definition: 'a synge' },
    { term: 'bailar', definition: 'a danse' },
    { term: 'tocar', definition: 'a spille (et instrument)' },
    { term: 'escuchar', definition: 'a lytte til' },
    { term: 'la canción', definition: 'sangen' },
    { term: 'el/la cantante', definition: 'sangeren' },
    { term: 'la letra', definition: 'sangteksten' },
  ],
};

export const CHAPTER_SPANSK_1_12_2: TextbookChapter = {
  id: 'spansk-1-12-2',
  courseId: 'spansk-1',
  chapterNumber: '12.2',
  title: 'El cine en español',
  subtitle: 'Spansk film',
  description: 'Lær om spansk og latinamerikansk film, kjente regissorer og filmvokabular.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske kunstneriske og kulturelle uttrykk i spansktalende områder'],
  content: [
    {
      id: 'spansk-1-12-2-intro',
      type: 'text',
      content: `## El cine en español - Spansk film

Den spansktalende filmindustrien har prødusert mange internasjonalt anerkjente filmer og regissorer. Fra spanske regissorer som Pedro Almodóvar til meksikanske som Guillermo del Toro, har spanskspråklig film vunnet en rekke Oscar-priser og internasjonale priser.

I dette kapittelet lærer du om kjente filmer og regissorer, og du lærer filmvokabular på spansk.`,
    },
    {
      id: 'spansk-1-12-2-def-1',
      type: 'definition',
      title: 'Filmvokabular',
      content: `| Spansk | Norsk |
|--------|-------|
| la película | filmen |
| el/la director(a) | regissoren |
| el/la actor / la actriz | skuespilleren |
| el guion | manuset |
| los subtítulos | undertekstene |
| la pantalla | lerretet/skjermen |
| el cine | kinoen |
| la taquilla | billettluken |
| la entrada | billetten |
| la butaca | kinosetet |`,
    },
    {
      id: 'spansk-1-12-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Kjente spanskspråklige regissorer',
      problem: `Koble regissoren med landet og en kjent film:

| Director(a) | País | Película famosa |
|-------------|------|-----------------|
| Pedro Almodóvar | ? | ? |
| Guillermo del Toro | ? | ? |
| Alfonso Cuarón | ? | ? |`,
      solution: `| Director(a) | País | Película famosa |
|-------------|------|-----------------|
| Pedro Almodóvar | España | Todo sobre mi madre (1999) |
| Guillermo del Toro | México | El laberinto del fauno (2006) |
| Alfonso Cuarón | México | Roma (2018) |

Alle tre har vunnet Oscar-priser for sine filmer.`,
    },
    {
      id: 'spansk-1-12-2-def-2',
      type: 'definition',
      title: 'Filmsjangre',
      content: `| Spansk | Norsk |
|--------|-------|
| la comedia | komedie |
| el drama | drama |
| la película de terror | skrekkfilm |
| la película de acción | actionfilm |
| la película de ciencia ficción | science fiction-film |
| el documental | dokumentar |
| la película de animación | animasjonsfilm |
| la película romántica | romantisk film |`,
    },
    {
      id: 'spansk-1-12-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Snakke om film',
      problem: `Oversett til spansk:
1. Jeg liker komedier.
2. Filmen er veldig bra.
3. Vil du gå på kino?`,
      solution: `1. **Me gustan las comedias.**
2. **La película es muy buena.**
3. **¿Quieres ir al cine?**

Merk: Når du liker flere ting (flertall), bruker du *me gustan* (ikke *me gusta*).`,
    },
    {
      id: 'spansk-1-12-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr \"la pelicula\" på norsk?',
        options: [
          { id: 'a', text: 'Kinoen', isCorrect: false },
          { id: 'b', text: 'Filmen', isCorrect: true },
          { id: 'c', text: 'Skuespilleren', isCorrect: false },
          { id: 'd', text: 'Billetten', isCorrect: false },
        ],
        solution: '\"La pelicula\" betyr \"filmen\". \"El cine\" er kinoen, \"el actor/la actriz\" er skuespilleren.',
      },
    },
    {
      id: 'spansk-1-12-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken nasjonalitet har regissoren Pedro Almodovar?',
        options: [
          { id: 'a', text: 'Meksikansk', isCorrect: false },
          { id: 'b', text: 'Argentinsk', isCorrect: false },
          { id: 'c', text: 'Spansk', isCorrect: true },
          { id: 'd', text: 'Colombiansk', isCorrect: false },
        ],
        solution: 'Pedro Almodovar er spansk. Han er en av Spanias mest kjente regissorer og har vunnet to Oscar-priser.',
      },
    },
    {
      id: 'spansk-1-12-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett filmsjangerne til spansk.',
        subTasks: [
          { label: 'a', task: 'Komedie', solution: 'la comedia' },
          { label: 'b', task: 'Skrekkfilm', solution: 'la película de terror' },
          { label: 'c', task: 'Dokumentar', solution: 'el documental' },
          { label: 'd', task: 'Actionfilm', solution: 'la película de acción' },
        ],
        solution: 'a) la comedia, b) la pelicula de terror, c) el documental, d) la pelicula de accion.',
      },
    },
    {
      id: 'spansk-1-12-2-text-2',
      type: 'text',
      content: `## Anbefalte spanskspråklige filmer for nybegynnere

Disse filmene er gode for å øve spansk forståelse:

- **Coco** (2017) - Pixar-animasjonsfilm om Dia de los Muertos i Mexico. Lettfattelig og vakker.
- **Diarios de motocicleta** (2004) - Om unge Che Guevaras reise gjennom Sør-Amerika.
- **Volver** (2006) - Almodovar-film med Penélope Cruz. Spansk kultur og humor.
- **Roma** (2018) - Oscar-vinnende film av Alfonso Cuaron, om en hushjelp i Mexico City.
- **El secreto de sus ojos** (2009) - Argentinsk thriller, vant Oscar for beste utenlandske film.

Tips: Se filmene med spanske undertekster (*subtitulos en español*) for å lære enda mer!`,
    },
    {
      id: 'spansk-1-12-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett setningene til spansk.',
        subTasks: [
          { label: 'a', task: 'Jeg liker skrekkfilmer.', solution: 'Me gustan las películas de terror.' },
          { label: 'b', task: 'Filmen er veldig interessant.', solution: 'La película es muy interesante.' },
          { label: 'c', task: 'Regissoren er fra Mexico.', solution: 'El director es de México.' },
        ],
        solution: 'a) Me gustan las peliculas de terror. b) La pelicula es muy interesante. c) El director es de Mexico.',
        hints: ['Husk *me gustan* (flertall) når du liker flere ting.'],
      },
    },
    {
      id: 'spansk-1-12-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Den spansktalende filmindustrien er stor og mangfoldig.
- Kjente regissorer inkluderer Pedro Almodovar (Spania), Guillermo del Toro og Alfonso Cuaron (Mexico).
- Det finnes mange gode spanskspråklige filmer for nybegynnere, som Coco og Roma.
- A se filmer på spansk med undertekster er en god måte å lære språket på.

**Nyttige uttrykk:**
- *¿Quieres ir al cine?* - Vil du gå på kino?
- *Me gusta/gustan...* - Jeg liker...
- *La película es buena/mala/interesante* - Filmen er bra/dårlig/interessant`,
    },
    {
      id: 'spansk-1-12-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort filmanmeldelse på spansk (4-6 setninger). Velg en film du har sett (kan være hvilken som helst film). Si hva filmen heter, hvilken sjanger det er, hva du synes om den.',
        solution: 'Eksempel: Mi película favorita es Coco. Es una película de animación. La película es sobre un niño mexicano que quiere ser músico. Es muy bonita y divertida. Me gusta mucho la música en la película. ¡Recomiendo esta película a todos!',
        hints: ['*Mi pelicula favorita es...* = Min favorittfilm er...', '*Es sobre...* = Den handler om...', '*Recomiendo...* = Jeg anbefaler...'],
      },
    },
    {
      id: 'spansk-1-12-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilken film handler om Dia de los Muertos i Mexico?',
        options: [
          { id: 'a', text: 'Roma', isCorrect: false },
          { id: 'b', text: 'Coco', isCorrect: true },
          { id: 'c', text: 'Volver', isCorrect: false },
          { id: 'd', text: 'El laberinto del fauno', isCorrect: false },
        ],
        solution: 'Coco (2017) er en Pixar-animasjonsfilm som handler om Dia de los Muertos (De dødes dag) i Mexico. Filmen følger gutten Miguel som drømmer om å bli musiker.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la película', definition: 'filmen' },
    { term: 'el/la director(a)', definition: 'regissoren' },
    { term: 'el/la actor / la actriz', definition: 'skuespilleren' },
    { term: 'el cine', definition: 'kinoen' },
    { term: 'los subtítulos', definition: 'undertekstene' },
    { term: 'el guion', definition: 'manuset/filmmanuskriptet' },
  ],
};

export const CHAPTER_SPANSK_1_12_3: TextbookChapter = {
  id: 'spansk-1-12-3',
  courseId: 'spansk-1',
  chapterNumber: '12.3',
  title: 'Cómics y literatura',
  subtitle: 'Tegneserier og litteratur',
  description: 'Bli kjent med Mafalda, Don Quijote og andre spanskspråklige litterære verk.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske kunstneriske og kulturelle uttrykk i spansktalende områder'],
  content: [
    {
      id: 'spansk-1-12-3-intro',
      type: 'text',
      content: `## Cómics y literatura - Tegneserier og litteratur

Den spansktalende verden har en rik litterær tradisjon, fra verdens første moderne roman (Don Quijote) til moderne tegneserier som Mafalda. Å lese på spansk - selv enkle tekster - er en av de beste måtene å forbedre språkferdighetene dine på.

I dette kapittelet får du en smakebit på spanskspråklig litteratur og tegneserier tilpasset ditt nivå.`,
    },
    {
      id: 'spansk-1-12-3-def-1',
      type: 'definition',
      title: 'Mafalda',
      content: `**Mafalda** er en argentinsk tegneserie (*historieta*) skapt av **Quino** (Joaquín Salvador Lavado). Mafalda er en liten jente som stiller store spørsmål om verden, politikk og samfunn. Tegneserien ble publisert mellom 1964 og 1973 og er fortsatt enormt populær i hele den spansktalende verden.

Mafalda er kjent for sin kritiske humor og sine refleksjoner om fred, rettferdighet og menneskerettigheter. Tegneserien er oversatt til over 30 språk.`,
    },
    {
      id: 'spansk-1-12-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Litterært ordforråd',
      problem: `Oversett disse litterære begrepene til norsk:

1. el libro
2. el cuento
3. la novela
4. el poema
5. el/la escritor(a)`,
      solution: `1. **el libro** = boken
2. **el cuento** = fortellingen/novellen
3. **la novela** = romanen
4. **el poema** = diktet
5. **el/la escritor(a)** = forfatteren

Andre nyttige ord: *la biblioteca* (biblioteket), *la página* (siden), *el capítulo* (kapittelet), *leer* (å lese).`,
    },
    {
      id: 'spansk-1-12-3-def-2',
      type: 'definition',
      title: 'Don Quijote',
      content: `**Don Quijote de la Mancha** er skrevet av **Miguel de Cervantes** og ble publisert i 1605. Den regnes som den første moderne romanen og er et av de viktigste verkene i verdenslitteraturen.

Boken handler om Don Quijote, en mann som leser så mange ridderromaner at han tror han selv er en ridder. Sammen med sin væpner Sancho Panza drar han ut på eventyr. Uttrykket *luchar contra molinos de viento* (a kjempe mot vindmøller) kommer fra denne boken og betyr å kjempe mot innbilte fiender.`,
    },
    {
      id: 'spansk-1-12-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Enkel lesetekst',
      problem: `Les teksten og svar på spørsmålene:

\"Me llamo Ana y me gusta mucho leer. Mi libro favorito es El Principito. Es un libro muy bonito sobre un niño que vive en un planeta pequeño. El Principito viaja a diferentes planetas y conoce a muchas personas interesantes. Mi parte favorita es cuando dice: 'Lo esencial es invisible a los ojos.'\"

1. ¿Cómo se llama la chica?
2. ¿Cuál es su libro favorito?
3. ¿De qué trata el libro?`,
      solution: `1. La chica se llama Ana.
2. Su libro favorito es El Principito (Den lille prinsen).
3. El libro trata de un niño que vive en un planeta pequeño y viaja a diferentes planetas.

\"El Principito\" (Den lille prinsen) av Antoine de Saint-Exupéry er en av verdens mest oversatte bøker og er populær som lesetekst for spanskstudenter.`,
    },
    {
      id: 'spansk-1-12-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem skapte tegneserien Mafalda?',
        options: [
          { id: 'a', text: 'Gabriel García Márquez', isCorrect: false },
          { id: 'b', text: 'Quino (Joaquín Salvador Lavado)', isCorrect: true },
          { id: 'c', text: 'Miguel de Cervantes', isCorrect: false },
          { id: 'd', text: 'Pablo Neruda', isCorrect: false },
        ],
        solution: 'Mafalda ble skapt av den argentinske tegneren Quino (Joaquin Salvador Lavado). Serien ble publisert mellom 1964 og 1973.',
      },
    },
    {
      id: 'spansk-1-12-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr \"el libro\" på norsk?',
        options: [
          { id: 'a', text: 'Diktet', isCorrect: false },
          { id: 'b', text: 'Fortellingen', isCorrect: false },
          { id: 'c', text: 'Boken', isCorrect: true },
          { id: 'd', text: 'Romanen', isCorrect: false },
        ],
        solution: '\"El libro\" betyr \"boken\". \"El poema\" = diktet, \"el cuento\" = fortellingen, \"la novela\" = romanen.',
      },
    },
    {
      id: 'spansk-1-12-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble forfatteren/verket med riktig land.',
        subTasks: [
          { label: 'a', task: 'Miguel de Cervantes (Don Quijote)', solution: 'España' },
          { label: 'b', task: 'Quino (Mafalda)', solution: 'Argentina' },
          { label: 'c', task: 'Gabriel Garcia Marquez (Cien anos de soledad)', solution: 'Colombia' },
          { label: 'd', task: 'Pablo Neruda (Poesia)', solution: 'Chile' },
        ],
        solution: 'a) Spania, b) Argentina, c) Colombia, d) Chile.',
      },
    },
    {
      id: 'spansk-1-12-3-text-2',
      type: 'text',
      content: `## Kjente spanskspråklige forfattere

- **Miguel de Cervantes** (Spania, 1547-1616) - Skrev Don Quijote, regnet som den første moderne roman.
- **Gabriel Garcia Marquez** (Colombia, 1927-2014) - Nobelpris i litteratur 1982. Kjent for \"Cien anos de soledad\" (Hundre års ensomhet).
- **Pablo Neruda** (Chile, 1904-1973) - Nobelpris i litteratur 1971. En av verdens mest kjente poeter.
- **Isabel Allende** (Chile, f. 1942) - Kjent for \"La casa de los espiritus\" (Andenes hus).
- **Jorge Luis Borges** (Argentina, 1899-1986) - En av 1900-tallets viktigste forfattere, kjent for korte fortellinger.
- **Federico Garcia Lorca** (Spania, 1898-1936) - Poet og dramatiker, en av Spanias viktigste forfattere.`,
    },
    {
      id: 'spansk-1-12-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på spørsmålene.',
        subTasks: [
          { label: 'a', task: 'Hvem skrev Don Quijote, og når ble den publisert?', solution: 'Miguel de Cervantes, 1605.' },
          { label: 'b', task: 'Hva betyr uttrykket \"luchar contra molinos de viento\"?', solution: 'A kjempe mot innbilte fiender (a kjempe mot vindmøller).' },
          { label: 'c', task: 'Hvilken colombiansk forfatter vant Nobelprisen i litteratur?', solution: 'Gabriel Garcia Marquez (1982).' },
        ],
        solution: 'a) Miguel de Cervantes, publisert i 1605. b) A kjempe mot innbilte fiender. c) Gabriel Garcia Marquez (1982).',
        hints: ['Don Quijote kjemper mot vindmøller fordi han tror de er kjemper.'],
      },
    },
    {
      id: 'spansk-1-12-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Den spansktalende verden har en rik litterær tradisjon.
- Don Quijote (1605) av Cervantes regnes som den første moderne roman.
- Mafalda er en populær argentinsk tegneserie skapt av Quino.
- Gabriel Garcia Marquez og Pablo Neruda er Nobelprisvinnere i litteratur.
- A lese enkle tekster, tegneserier og bøker på spansk er en flott måte å lære språket på.

**Litterært ordforråd:** el libro (boken), la novela (romanen), el cuento (fortellingen), el poema (diktet), leer (å lese), el/la escritor(a) (forfatteren).`,
    },
    {
      id: 'spansk-1-12-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv på spansk (4-5 setninger) om en bok du liker. Bruk: Me gusta leer, mi libro favorito es, es sobre, el/la autor(a) es.',
        solution: 'Eksempel: Me gusta mucho leer. Mi libro favorito es Harry Potter. Es sobre un chico que es mago. La autora es J.K. Rowling, es de Inglaterra. Los libros son muy interesantes y divertidos. Quiero leer más libros en español.',
        hints: ['*Mi libro favorito es...* = Min favorittbok er...', '*Es sobre...* = Den handler om...'],
      },
    },
    {
      id: 'spansk-1-12-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilket av disse verkene ble skrevet av Gabriel Garcia Marquez?',
        options: [
          { id: 'a', text: 'Don Quijote de la Mancha', isCorrect: false },
          { id: 'b', text: 'La casa de los espíritus', isCorrect: false },
          { id: 'c', text: 'Cien años de soledad', isCorrect: true },
          { id: 'd', text: 'Veinte poemas de amor', isCorrect: false },
        ],
        solution: '\"Cien anos de soledad\" (Hundre års ensomhet) ble skrevet av Gabriel Garcia Marquez. \"Don Quijote\" er av Cervantes, \"La casa de los espiritus\" av Isabel Allende, og \"Veinte poemas de amor\" av Pablo Neruda.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el libro', definition: 'boken' },
    { term: 'la novela', definition: 'romanen' },
    { term: 'el cuento', definition: 'fortellingen/novellen' },
    { term: 'el poema', definition: 'diktet' },
    { term: 'leer', definition: 'a lese' },
    { term: 'el/la escritor(a)', definition: 'forfatteren' },
    { term: 'la historieta', definition: 'tegneserien' },
  ],
};

export const CHAPTER_SPANSK_1_12_4: TextbookChapter = {
  id: 'spansk-1-12-4',
  courseId: 'spansk-1',
  chapterNumber: '12.4',
  title: 'Fiestas y tradiciones',
  subtitle: 'Høytider og tradisjoner',
  description: 'Utforsk Dia de los Muertos, La Tomatina, Semana Santa og andre spanskspråklige tradisjoner.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske kunstneriske og kulturelle uttrykk i spansktalende områder'],
  content: [
    {
      id: 'spansk-1-12-4-intro',
      type: 'text',
      content: `## Fiestas y tradiciones - Høytider og tradisjoner

Den spansktalende verden er kjent for sine fargerike og livlige fester og tradisjoner. Fra De dødes dag i Mexico til okselope i Pamplona - høytidene gjenspeiler den rike kulturen og historien til hvert land.

I dette kapittelet lærer du om noen av de viktigste festene og tradisjonene i Spania og Latin-Amerika.`,
    },
    {
      id: 'spansk-1-12-4-def-1',
      type: 'definition',
      title: 'El Día de los Muertos',
      content: `**El Dia de los Muertos** (De dødes dag) feires 1. og 2. november i Mexico. Det er IKKE en sorgens dag - det er en fargerik feiring for å hedre de avdøde.

Viktige elementer:
- **Las calaveras** - hodeskaller (ofte dekorert med farger)
- **Las ofrendas** - offeraltere med mat, blomster og bilder av avdøde
- **El pan de muerto** - spesielt brød som bakes til feiringen
- **Las flores de cempasúchil** - oransje ringblomster som dekorerer gravstedene
- **Las catrinas** - dekorerte hodeskaller/skjeletter som er symbolet på feiringen`,
    },
    {
      id: 'spansk-1-12-4-def-2',
      type: 'definition',
      title: 'La Semana Santa',
      content: `**La Semana Santa** (Den stille uke / Paskeuka) er en av de viktigste religiose høytidene i Spania og Latin-Amerika. Den feires uken for paske med prosesjoner, musikk og religiose seremonier.

De mest berømte Semana Santa-feiringene er i:
- **Sevilla** (Spania) - Enorme prosesjoner med religiose figurer (*pasos*) som baeres gjennom gatene
- **Guatemala** - Fargerike gatetepper laget av sagflis og blomster (*alfombras*)
- **Ayacucho** (Peru) - Ti dagers feiring med prosesjoner og markeder`,
    },
    {
      id: 'spansk-1-12-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Spanske festivaler',
      problem: `Koble hver festival med riktig by/region:

| Fiesta | Ciudad/Región |
|--------|---------------|
| La Tomatina | ? |
| Las Fallas | ? |
| San Fermín (okselope) | ? |
| La Feria de Abril | ? |`,
      solution: `| Fiesta | Ciudad/Región |
|--------|---------------|
| La Tomatina | Buñol (Valencia) |
| Las Fallas | Valencia |
| San Fermín (okselope) | Pamplona (Navarra) |
| La Feria de Abril | Sevilla |

- **La Tomatina**: Tomatkrig i gatene hver siste onsdag i august.
- **Las Fallas**: Enorme papirfigurer brennes 19. mars.
- **San Fermin**: Okselope i gatene hver juli.
- **La Feria de Abril**: To uker med dans, musikk og mat i Sevilla.`,
    },
    {
      id: 'spansk-1-12-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Hoytidsvokabular',
      problem: `Oversett til spansk:
1. festen / høytiden
2. a feire
3. tradisjonene
4. prosesjonen`,
      solution: `1. **la fiesta** (festen) / **la festividad** (høytiden)
2. **celebrar** (å feire)
3. **las tradiciones** (tradisjonene)
4. **la procesión** (prosesjonen)

Flere nyttige ord:
- *el disfraz* = kostymet/forkledningen
- *los fuegos artificiales* = fyrverkeriet
- *el desfile* = paraden/opptog
- *la música en vivo* = live-musikk`,
    },
    {
      id: 'spansk-1-12-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Når feires El Dia de los Muertos i Mexico?',
        options: [
          { id: 'a', text: '31. oktober', isCorrect: false },
          { id: 'b', text: '1. og 2. november', isCorrect: true },
          { id: 'c', text: '25. desember', isCorrect: false },
          { id: 'd', text: '6. januar', isCorrect: false },
        ],
        solution: 'El Dia de los Muertos feires 1. og 2. november. Det er IKKE det samme som Halloween, men en meksikansk tradisjon for å hedre de avdøde.',
      },
    },
    {
      id: 'spansk-1-12-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I hvilken spansk by arrangeres La Tomatina?',
        options: [
          { id: 'a', text: 'Madrid', isCorrect: false },
          { id: 'b', text: 'Barcelona', isCorrect: false },
          { id: 'c', text: 'Buñol (Valencia)', isCorrect: true },
          { id: 'd', text: 'Sevilla', isCorrect: false },
        ],
        solution: 'La Tomatina arrangeres i Buñol, nær Valencia. Det er en tomatkrig der deltakerne kaster tomater på hverandre. Festivalen holdes siste onsdag i august.',
      },
    },
    {
      id: 'spansk-1-12-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Svar på spørsmålene om høytider og tradisjoner.',
        subTasks: [
          { label: 'a', task: 'Hva er \"las calaveras\" i forbindelse med Dia de los Muertos?', solution: 'Hodeskaller (ofte dekorert med farger), som er et symbol på feiringen.' },
          { label: 'b', task: 'Hva brenner man under Las Fallas i Valencia?', solution: 'Enorme papirfigurer (fallas/ninots).' },
          { label: 'c', task: 'Hva er San Fermin kjent for?', solution: 'Okselope i gatene i Pamplona (los encierros).' },
        ],
        solution: 'a) Hodeskaller, symbol på feiringen. b) Enorme papirfigurer. c) Okselope i gatene i Pamplona.',
      },
    },
    {
      id: 'spansk-1-12-4-text-2',
      type: 'text',
      content: `## Latinamerikanske tradisjoner

I tillegg til de spanske festivalene har Latin-Amerika mange unike tradisjoner:

**El Carnaval** - Karneval feires i mange latinamerikanske land for fastetiden. De mest berømte er i:
- Barranquilla (Colombia) - UNESCOs immateriell kulturarv
- Rio de Janeiro (Brasil) - verdens største karneval

**La Quinceañera** - En jentes 15-årsdag feires i hele Latin-Amerika med en stor fest, nesten som et bryllup. Det markerer overgangen fra barn til voksen.

**La Nochebuena** (Julaften) - I mange spansktalende land er julaften viktigere enn juledag. Familier samles til et stort måltid sent på kvelden.

**El Día de los Reyes Magos** (Hellig tre kongers dag, 6. januar) - I Spania og Latin-Amerika får barna gaver denne dagen, ikke på julaften.`,
    },
    {
      id: 'spansk-1-12-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'Vi feirer jul med familien.', solution: 'Celebramos la Navidad con la familia.' },
          { label: 'b', task: 'Festivalen er veldig morsom.', solution: 'La fiesta es muy divertida.' },
          { label: 'c', task: 'I Mexico feirer de De dødes dag.', solution: 'En México celebran el Día de los Muertos.' },
        ],
        solution: 'a) Celebramos la Navidad con la familia. b) La fiesta es muy divertida. c) En Mexico celebran el Dia de los Muertos.',
        hints: ['*Celebrar* = å feire. Husk å bøyse verbet riktig.'],
      },
    },
    {
      id: 'spansk-1-12-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Den spansktalende verden har mange unike høytider og tradisjoner.
- Dia de los Muertos i Mexico er en fargerik feiring av de avdøde (1.-2. november).
- Spania har mange festivaler: La Tomatina, Las Fallas, San Fermin, Feria de Abril.
- Semana Santa feires med store prosesjoner i hele den spansktalende verden.
- La Quinceañera er en viktig tradisjon for jenter som fyller 15 år.
- El Dia de los Reyes Magos (6. januar) er dagen da barn i mange spansktalende land får gaver.`,
    },
    {
      id: 'spansk-1-12-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign en norsk og en spanskspråklig tradisjon. Skriv 4-6 setninger på spansk der du beskriver forskjeller og likheter.',
        solution: 'Eksempel: En Noruega celebramos la Navidad el 24 de diciembre, como en muchos países hispanohablantes. Pero en España, los niños reciben regalos el 6 de enero, el Día de los Reyes Magos. En Noruega recibimos regalos el 24 de diciembre. En Noruega no tenemos una tradición como el Día de los Muertos. Es una tradición muy especial de México. Me gustaría ver la celebración algún día.',
        hints: ['*En Noruega celebramos...* = I Norge feirer vi...', '*Es diferente / es similar* = Det er forskjellig / det er likt'],
      },
    },
    {
      id: 'spansk-1-12-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-12-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Når får barna i Spania tradisjonelt gaver?',
        options: [
          { id: 'a', text: '24. desember (Nochebuena)', isCorrect: false },
          { id: 'b', text: '25. desember (Navidad)', isCorrect: false },
          { id: 'c', text: '31. desember (Nochevieja)', isCorrect: false },
          { id: 'd', text: '6. januar (Dia de los Reyes Magos)', isCorrect: true },
        ],
        solution: 'I Spania får barna tradisjonelt gaver 6. januar, på Dia de los Reyes Magos (Hellig tre kongers dag). Kvelden før, 5. januar, er det store parader (cabalgatas) i byene.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la fiesta', definition: 'festen/høytiden' },
    { term: 'celebrar', definition: 'a feire' },
    { term: 'la tradición', definition: 'tradisjonen' },
    { term: 'la procesión', definition: 'prosesjonen' },
    { term: 'los fuegos artificiales', definition: 'fyrverkeriet' },
    { term: 'el disfraz', definition: 'kostymet/forkledningen' },
    { term: 'la Nochebuena', definition: 'julaften' },
  ],
};

// ============================================================================
// KAPITTEL 13: TEXTOS AUTÉNTICOS
// ============================================================================

export const CHAPTER_SPANSK_1_13_1: TextbookChapter = {
  id: 'spansk-1-13-1',
  courseId: 'spansk-1',
  chapterNumber: '13.1',
  title: 'Leer un menú',
  subtitle: 'Lese en meny',
  description: 'Lær å lese og forstå spanske restaurantmenyer og bestille mat.',
  estimatedMinutes: 45,
  competenceGoals: ['lese og forstå enkle autentiske tekster på spansk'],
  content: [
    {
      id: 'spansk-1-13-1-intro',
      type: 'text',
      content: `## Leer un menú - Lese en meny

Å kunne lese en meny på spansk er en svært nyttig ferdighet, enten du er på ferie i Spania eller på en tapasrestaurant i Norge. Spanske menyer er ofte delt inn i kategorier, og mange retter har navn som ikke kan oversettes direkte.

I dette kapittelet lærer du å lese og forstå en spansk meny, og å bestille mat på en restaurant.`,
    },
    {
      id: 'spansk-1-13-1-def-1',
      type: 'definition',
      title: 'Deler av en spansk meny',
      content: `En spansk meny (*la carta* eller *el menú*) er vanligvis delt inn slik:

| Spansk | Norsk |
|--------|-------|
| **Entrantes / Aperitivos** | Forrett / Ssmåretter |
| **Primer plato** | Første rett |
| **Segundo plato** | Andre rett / Hovedrett |
| **Postres** | Dessert |
| **Bebidas** | Drikke |
| **Tapas** | Ssmåretter (typisk spansk) |
| **El menú del día** | Dagens meny (fast pris, inkluderer flere retter) |

**El menú del dia** er et vanlig konsept i Spania - du får forrett, hovedrett, dessert og drikke til en fast pris (ofte 10-15 euro).`,
    },
    {
      id: 'spansk-1-13-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese en meny',
      problem: `Les denne menyen og svar på spørsmålene:

**RESTAURANTE EL SOL - Menú del Día (12 €)**

*Primer plato (velg en):*
- Gazpacho andaluz (kald tomatsuppe)
- Ensalada mixta (blandet salat)
- Sopa de verduras (grønnsakssuppe)

*Segundo plato (velg en):*
- Paella valenciana (risrett med skalldyr)
- Pollo asado con patatas (grillet kylling med poteter)
- Filete de merluza (lysing-filet)

*Postre:*
- Flan (karamellpudding)
- Fruta del tiempo (sesongfrukt)
- Helado (iskrem)

*Bebida:* Agua, cerveza o vino de la casa

1. Hvor mye koster menú del dia?
2. Hvor mange retter kan du velge?
3. Hva er gazpacho?`,
      solution: `1. Menu del dia koster 12 euro.
2. Du kan velge tre retter: primer plato, segundo plato og postre, pluss drikke.
3. Gazpacho er en kald tomatsuppe fra Andalucia.`,
    },
    {
      id: 'spansk-1-13-1-def-2',
      type: 'definition',
      title: 'Vanlige retter og ingredienser',
      content: `| Spansk | Norsk |
|--------|-------|
| la paella | risrett med skalldyr/kylling |
| la tortilla española | spansk omelett med potet |
| el gazpacho | kald tomatsuppe |
| el jamón serrano | lufttorket skinke |
| las patatas bravas | stekte poteter med krydret saus |
| los churros | friterte deigstenger (med sjokolade) |
| el flan | karamellpudding |
| la ensalada | salaten |
| el pollo | kyllingen |
| el pescado | fisken |
| la carne | kjøttet |
| las verduras | grønnsakene |`,
    },
    {
      id: 'spansk-1-13-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bestille på en restaurant',
      problem: `Oversett denne dialogen til norsk:

- Camarero: ¡Buenas tardes! ¿Qué van a tomar?
- Cliente: De primer plato, quiero la ensalada mixta.
- Camarero: ¿Y de segundo?
- Cliente: El pollo asado, por favor.
- Camarero: ¿Y para beber?
- Cliente: Una cerveza, por favor.
- Camarero: Muy bien. ¿Algo más?
- Cliente: No, gracias. ¿Cuánto es el menú del día?
- Camarero: Son doce euros.`,
      solution: `- Kelner: God ettermiddag! Hva skal dere ha?
- Gjest: Til forrett vil jeg ha den blandede salaten.
- Kelner: Og til hovedrett?
- Gjest: Grillet kylling, takk.
- Kelner: Og å drikke?
- Gjest: En øl, takk.
- Kelner: Flott. Noe mer?
- Gjest: Nei, takk. Hvor mye koster dagens meny?
- Kelner: Det blir tolv euro.

**Nyttige bestillingsuttrykk:**
- *Quiero...* / *Para mí...* = Jeg vil ha...
- *Por favor* = Takk / Vær så snill
- *La cuenta, por favor* = Regningen, takk`,
    },
    {
      id: 'spansk-1-13-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr \"el menú del día\"?',
        options: [
          { id: 'a', text: 'Kveldens meny', isCorrect: false },
          { id: 'b', text: 'Dagens meny (fast pris)', isCorrect: true },
          { id: 'c', text: 'Barnemenyen', isCorrect: false },
          { id: 'd', text: 'Dessertmenyen', isCorrect: false },
        ],
        solution: '\"El menu del dia\" er dagens meny - et vanlig konsept på spanske restauranter der du får forrett, hovedrett, dessert og drikke til en fast pris.',
      },
    },
    {
      id: 'spansk-1-13-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er \"patatas bravas\"?',
        options: [
          { id: 'a', text: 'Bakt potet med ost', isCorrect: false },
          { id: 'b', text: 'Stekte poteter med krydret saus', isCorrect: true },
          { id: 'c', text: 'Potetsuppe', isCorrect: false },
          { id: 'd', text: 'Pommes frites', isCorrect: false },
        ],
        solution: 'Patatas bravas er stekte poteter som serveres med en krydret tomatsaus. Det er en av de mest populære tapasrettene i Spania.',
      },
    },
    {
      id: 'spansk-1-13-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett matordene til norsk.',
        subTasks: [
          { label: 'a', task: 'el pollo', solution: 'kyllingen' },
          { label: 'b', task: 'el pescado', solution: 'fisken' },
          { label: 'c', task: 'las verduras', solution: 'grønnsakene' },
          { label: 'd', task: 'el flan', solution: 'karamellpudding' },
          { label: 'e', task: 'la cerveza', solution: 'ølen' },
        ],
        solution: 'a) kyllingen, b) fisken, c) grønnsakene, d) karamellpudding, e) ølen.',
      },
    },
    {
      id: 'spansk-1-13-1-text-2',
      type: 'text',
      content: `## Tapas-kultur

Tapas er ssmåretter som er en viktig del av spansk matkultur. Ordet \"tapa\" betyr \"lokk\" - ifølge legenden ble smaa tallerker med mat lagt som lokk over glass for å holde fluene borte.

Populære tapas:
- **Patatas bravas** - stekte poteter med krydret saus
- **Gambas al ajillo** - hvitloksreker
- **Jamón serrano** - lufttorket skinke
- **Tortilla española** - potetomelett
- **Croquetas** - friterte krokettar (ofte med skinke eller torsk)
- **Aceitunas** - oliven
- **Pan con tomate** - brød med tomat

I Spania er det vanlig å gå fra bar til bar og spise ulike tapas - dette kalles *ir de tapas* eller *tapeo*.`,
    },
    {
      id: 'spansk-1-13-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en dialog på spansk der du bestiller mat på en restaurant. Bruk minst 6 replikker.',
        solution: 'Eksempel:\n- Camarero: ¡Buenas noches! ¿Qué desea?\n- Yo: Buenas noches. ¿Tiene el menú del día?\n- Camarero: Sí, hoy tenemos sopa de verduras o ensalada, y de segundo, paella o pollo asado.\n- Yo: Quiero la sopa de verduras y la paella, por favor.\n- Camarero: ¿Y para beber?\n- Yo: Un agua con gas, por favor.\n- Camarero: Perfecto. ¿Algo más?\n- Yo: No, gracias. ¡Ah! Y la cuenta después, por favor.',
        hints: ['Bruk *Quiero...* eller *Para mi...* for å bestille.', 'Avslutt med *La cuenta, por favor* for å be om regningen.'],
      },
    },
    {
      id: 'spansk-1-13-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Spanske menyer er delt inn i entrantes, primer plato, segundo plato, postres og bebidas.
- El menu del dia er et fast pristrinn med flere retter, drikke inkludert.
- Tapas er ssmåretter som er en viktig del av spansk matkultur.
- Viktige bestillingsuttrykk: *Quiero...*, *Para mi...*, *Por favor*, *La cuenta, por favor*.

**Nyttige matord:** el pollo (kylling), el pescado (fisk), la carne (kjøtt), las verduras (grønnsaker), el postre (dessert), la bebida (drikke).`,
    },
    {
      id: 'spansk-1-13-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr \"La cuenta, por favor\"?',
        options: [
          { id: 'a', text: 'Menyen, takk', isCorrect: false },
          { id: 'b', text: 'Regningen, takk', isCorrect: true },
          { id: 'c', text: 'Mer vann, takk', isCorrect: false },
          { id: 'd', text: 'En til, takk', isCorrect: false },
        ],
        solution: '\"La cuenta, por favor\" betyr \"Regningen, takk\". Det er det du sier når du vil betale på en restaurant.',
      },
    },
    {
      id: 'spansk-1-13-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag din egen tapas-meny på spansk med minst 5 retter og priser. Bruk ordforrådet fra kapittelet.',
        solution: 'Eksempel:\n\n**BAR NORUEGA - Menú de Tapas**\n\nPatatas bravas - 4,50 €\nGambas al ajillo - 7,00 €\nTortilla española - 5,00 €\nJamón serrano - 8,50 €\nCroquetas de jamón - 5,50 €\nAceitunas - 3,00 €\nPan con tomate - 3,50 €\n\nBebidas: Cerveza (3 €), Vino tinto (3,50 €), Agua mineral (2 €)',
        hints: ['Bruk europriser (€).', 'Husk å inkludere drikke (bebidas) også.'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la carta / el menú', definition: 'menyen' },
    { term: 'el primer plato', definition: 'forretten / første rett' },
    { term: 'el segundo plato', definition: 'hovedretten / andre rett' },
    { term: 'el postre', definition: 'desserten' },
    { term: 'la cuenta', definition: 'regningen' },
    { term: 'el camarero / la camarera', definition: 'kelneren' },
    { term: 'las tapas', definition: 'ssmåretter (spansk tradisjon)' },
  ],
};

export const CHAPTER_SPANSK_1_13_2: TextbookChapter = {
  id: 'spansk-1-13-2',
  courseId: 'spansk-1',
  chapterNumber: '13.2',
  title: 'Leer horarios',
  subtitle: 'Lese rutetabeller',
  description: 'Lær å lese rutetabeller og togplaner på spansk, og ov tidsuttrykk.',
  estimatedMinutes: 45,
  competenceGoals: ['lese og forstå enkle autentiske tekster på spansk'],
  content: [
    {
      id: 'spansk-1-13-2-intro',
      type: 'text',
      content: `## Leer horarios - Lese rutetabeller

Å kunne lese rutetabeller på spansk er nyttig når du reiser i spansktalende land. Tog- og bussselskaper bruker ofte 24-timers klokke, og det er viktige ord og uttrykk du bor kjenne til.

I dette kapittelet lærer du å lese togtabeller (Renfe i Spania), busstider og andre praktiske tidsskjemaer.`,
    },
    {
      id: 'spansk-1-13-2-def-1',
      type: 'definition',
      title: 'Ordforrad for rutetabeller',
      content: `| Spansk | Norsk |
|--------|-------|
| el horario | rutetabellen/timeplanen |
| la salida | avgang |
| la llegada | ankomst |
| el andén | plattformen/perrong |
| el billete / el boleto | billetten |
| ida | enveis (tur) |
| ida y vuelta | tur-retur |
| el retraso | forsinkelse |
| a tiempo | i tide / i rute |
| diario | daglig |
| laborables | hverdager |
| festivos | helligdager |
| la duración | varigheten |
| el tren | toget |
| el autobús | bussen |`,
    },
    {
      id: 'spansk-1-13-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese en togtabell',
      problem: `Les denne togtabellen fra Renfe og svar på spørsmålene:

**RENFE - Madrid ↔ Barcelona**

| Tren | Salida Madrid | Llegada Barcelona | Duración | Tipo |
|------|---------------|-------------------|----------|------|
| AVE 3120 | 06:30 | 09:05 | 2h 35min | Alta Velocidad |
| AVE 3140 | 08:00 | 10:40 | 2h 40min | Alta Velocidad |
| AVE 3160 | 10:15 | 12:50 | 2h 35min | Alta Velocidad |
| Alvia 4050 | 07:45 | 13:20 | 5h 35min | Larga Distancia |

1. Hva tid går det første toget fra Madrid?
2. Hvor lang tid tar AVE 3120?
3. Hvilket tog er det tregeste?`,
      solution: `1. Det første toget (AVE 3120) går kl. 06:30 fra Madrid.
2. AVE 3120 tar 2 timer og 35 minutter.
3. Alvia 4050 er det tregeste - det tar 5 timer og 35 minutter.

**AVE** (Alta Velocidad Española) er Spanias høyhastighets-tog som kjorer opptil 310 km/t.`,
    },
    {
      id: 'spansk-1-13-2-def-2',
      type: 'definition',
      title: 'Tidsuttrykk',
      content: `For å snakke om avganger og tider:

| Spansk | Norsk |
|--------|-------|
| ¿A qué hora sale el tren? | Når går toget? |
| Sale a las ocho | Det går klokka atte |
| ¿A qué hora llega? | Når ankommer det? |
| Llega a las diez y media | Det ankommer halv elleve |
| ¿Cuánto tarda? | Hvor lang tid tar det? |
| Tarda dos horas | Det tar to timer |
| El tren tiene retraso | Toget er forsinket |
| ¿De qué andén sale? | Fra hvilken plattform går det? |`,
    },
    {
      id: 'spansk-1-13-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Kjope billett',
      problem: `Oversett dialogen til norsk:

- Viajero: Buenos días. Quiero un billete de Madrid a Sevilla.
- Taquillero: ¿Ida o ida y vuelta?
- Viajero: Ida y vuelta, por favor.
- Taquillero: ¿Para qué día?
- Viajero: Para el viernes 15 de marzo.
- Taquillero: Hay trenes a las 8:00, 10:30 y 14:15. ¿Cuál prefiere?
- Viajero: El de las 10:30, por favor.
- Taquillero: Son 45 euros.`,
      solution: `- Reisende: God morgen. Jeg vil ha en billett fra Madrid til Sevilla.
- Billettselger: Enveis eller tur-retur?
- Reisende: Tur-retur, takk.
- Billettselger: For hvilken dag?
- Reisende: For fredag 15. mars.
- Billettselger: Det er tog klokka 8:00, 10:30 og 14:15. Hvilket foretrekker du?
- Reisende: Det klokka 10:30, takk.
- Billettselger: Det blir 45 euro.`,
    },
    {
      id: 'spansk-1-13-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr \"ida y vuelta\"?',
        options: [
          { id: 'a', text: 'Enveis', isCorrect: false },
          { id: 'b', text: 'Tur-retur', isCorrect: true },
          { id: 'c', text: 'Første klasse', isCorrect: false },
          { id: 'd', text: 'Andre klasse', isCorrect: false },
        ],
        solution: '\"Ida y vuelta\" betyr tur-retur. \"Ida\" alene betyr enveis (bare tur).',
      },
    },
    {
      id: 'spansk-1-13-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr \"la salida\"?',
        options: [
          { id: 'a', text: 'Ankomst', isCorrect: false },
          { id: 'b', text: 'Plattform', isCorrect: false },
          { id: 'c', text: 'Avgang', isCorrect: true },
          { id: 'd', text: 'Billett', isCorrect: false },
        ],
        solution: '\"La salida\" betyr avgang. \"La llegada\" betyr ankomst.',
      },
    },
    {
      id: 'spansk-1-13-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Se på togtabellen fra Eksempel 1 og svar på spørsmålene på spansk.',
        subTasks: [
          { label: 'a', task: '¿A qué hora sale el AVE 3140 de Madrid?', solution: 'Sale a las ocho (08:00).' },
          { label: 'b', task: '¿A qué hora llega el AVE 3160 a Barcelona?', solution: 'Llega a las doce y cincuenta (12:50).' },
          { label: 'c', task: '¿Cuánto tarda el Alvia 4050?', solution: 'Tarda cinco horas y treinta y cinco minutos.' },
        ],
        solution: 'a) Sale a las ocho. b) Llega a las doce y cincuenta. c) Tarda cinco horas y treinta y cinco minutos.',
      },
    },
    {
      id: 'spansk-1-13-2-text-2',
      type: 'text',
      content: `## Reise med buss i Latin-Amerika

Mens Spania har et godt tognettverk (Renfe), er buss det vanligste transportmiddelet i Latin-Amerika. Noen viktige forskjeller:

- I Latin-Amerika sier man ofte **el boleto** i stedet for **el billete** (billett).
- Langdistansebusser i Latin-Amerika kalles ofte **el bus de larga distancia** eller bare **el bus**.
- I Argentina kalles buss-terminalen **la terminal de ómnibus**.
- I Mexico kalles første klasse-busser **primera clase** og har komfortable seter, WiFi og TV.

**Nyttige uttrykk på busstasjon:**
- *¿A qué hora sale el próximo bus a...?* = Når går neste buss til...?
- *¿Cuánto cuesta el boleto?* = Hvor mye koster billetten?
- *¿De qué andén sale?* = Fra hvilken plattform går den?`,
    },
    {
      id: 'spansk-1-13-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett spørsmålene til spansk.',
        subTasks: [
          { label: 'a', task: 'Når går toget til Barcelona?', solution: '¿A qué hora sale el tren a Barcelona?' },
          { label: 'b', task: 'Hvor mye koster en tur-retur billett?', solution: '¿Cuánto cuesta un billete de ida y vuelta?' },
          { label: 'c', task: 'Er toget forsinket?', solution: '¿El tren tiene retraso?' },
        ],
        solution: 'a) ¿A que hora sale el tren a Barcelona? b) ¿Cuanto cuesta un billete de ida y vuelta? c) ¿El tren tiene retraso?',
        hints: ['Bruk *¿A que hora sale...?* for å spørre om avgangstid.'],
      },
    },
    {
      id: 'spansk-1-13-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Rutetabeller bruker ordene *salida* (avgang), *llegada* (ankomst) og *duracion* (varighet).
- *Ida* = enveis, *ida y vuelta* = tur-retur.
- AVE er Spanias høyhastighets-tog.
- I Latin-Amerika er buss det vanligste transportmiddelet.
- Nyttige spørsmål: *¿A que hora sale?* (Når går det?), *¿Cuanto cuesta?* (Hvor mye koster det?), *¿Cuanto tarda?* (Hvor lang tid tar det?).`,
    },
    {
      id: 'spansk-1-13-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en dialog på spansk (6-8 replikker) der du kjøper en togbillett. Inkluder: destinasjon, ida/ida y vuelta, tidspunkt og pris.',
        solution: 'Eksempel:\n- Yo: Buenos días. Quiero un billete a Valencia, por favor.\n- Taquillero: ¿Ida o ida y vuelta?\n- Yo: Ida y vuelta.\n- Taquillero: ¿Para qué fecha?\n- Yo: Para mañana, sábado.\n- Taquillero: Hay trenes a las 9:00, 11:30 y 15:00.\n- Yo: El de las 11:30, por favor. ¿Cuánto cuesta?\n- Taquillero: Son treinta y cinco euros.\n- Yo: Aquí tiene. Gracias.\n- Taquillero: Buen viaje.',
        hints: ['*Buen viaje* = God reise!', '*Aqui tiene* = Vær så god (når du gir noe).'],
      },
    },
    {
      id: 'spansk-1-13-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva står \"AVE\" for i det spanske tognettet?',
        options: [
          { id: 'a', text: 'Asociación de Viajeros Españoles', isCorrect: false },
          { id: 'b', text: 'Alta Velocidad Española', isCorrect: true },
          { id: 'c', text: 'Autovía Exprés', isCorrect: false },
          { id: 'd', text: 'Acceso Vial Europeo', isCorrect: false },
        ],
        solution: 'AVE står for \"Alta Velocidad Espanola\" (Spansk Hoyhastighet). AVE-togene kjorer opptil 310 km/t og forbinder Spanias største byer. Ordet \"ave\" betyr også \"fugl\" på spansk.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el horario', definition: 'rutetabellen/timeplanen' },
    { term: 'la salida', definition: 'avgangen' },
    { term: 'la llegada', definition: 'ankomsten' },
    { term: 'ida y vuelta', definition: 'tur-retur' },
    { term: 'el billete / el boleto', definition: 'billetten' },
    { term: 'el andén', definition: 'plattformen/perrongen' },
    { term: '¿Cuánto tarda?', definition: 'Hvor lang tid tar det?' },
  ],
};

// ============================================================================
// Kapittel 13.3: Anuncios clasificados - Småannonser
// ============================================================================

export const CHAPTER_SPANSK_1_13_3: TextbookChapter = {
  id: 'spansk-1-13-3',
  courseId: 'spansk-1',
  chapterNumber: '13.3',
  title: 'Anuncios clasificados',
  subtitle: 'Småannonser',
  description: 'Lær å lese og forstå spanske småannonser for bolig og jobb.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forstå autentiske tekster',
    'forstaa forkortelser og uttrykk i annonser',
  ],
  content: [
    {
      id: 'spansk-1-13-3-intro',
      type: 'text',
      content: `## Småannonser på spansk

Småannonser (anuncios clasificados) finner du i aviser, på nettsider og i apper. De bruker ofte forkortelser og korte setninger for å spare plass. I dette kapittelet lærer du å lese bolig- og jobbannonser på spansk.`,
    },
    {
      id: 'spansk-1-13-3-def-1',
      type: 'definition',
      title: 'Boligannonser (Anuncios de vivienda)',
      content: `**Boligannonser** bruker mange forkortelser. Her er de vanligste:

| Forkortelse | Spansk | Norsk |
|-------------|--------|-------|
| hab. | habitación | rom/soverom |
| baño | baño | bad |
| cocina | cocina | kjøkken |
| amueblado | amueblado | møblert |
| sin amueblar | sin amueblar | umøblert |
| €/mes | euros al mes | euro per måned |
| m² | metros cuadrados | kvadratmeter |
| piso | piso | leilighet |
| casa | casa | hus |
| alquiler | alquiler | leie |
| venta | venta | salg |`,
    },
    {
      id: 'spansk-1-13-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese en boligannonse',
      problem: `Les annonsen og svar på spørsmålene:

**Se alquila piso en el centro. 3 hab., 1 baño, cocina equipada. 75 m². Amueblado. 850€/mes. No se admiten mascotas. Contacto: 612 345 678.**

a) Er leiligheten til salgs eller til leie?
b) Hvor mange soverom har den?
c) Er den møblert?
d) Hva koster den per måned?`,
      solution: `a) Til leie (se alquila = til leie)
b) 3 soverom (3 hab.)
c) Ja, den er møblert (amueblado)
d) 850 euro per måned (850€/mes)

Ekstra info: Husdyr er ikke tillatt (no se admiten mascotas).`,
    },
    {
      id: 'spansk-1-13-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr \"Se alquila piso amueblado\"?',
        options: [
          { id: 'a', text: 'Mobelert leilighet til salgs', isCorrect: false },
          { id: 'b', text: 'Mobelert leilighet til leie', isCorrect: true },
          { id: 'c', text: 'Umøblert leilighet til leie', isCorrect: false },
          { id: 'd', text: 'Mobelert hus til leie', isCorrect: false },
        ],
        solution: 'Se alquila = til leie, piso = leilighet, amueblado = møblert. Til salgs ville vært \"se vende\".',
      },
    },
    {
      id: 'spansk-1-13-3-def-2',
      type: 'definition',
      title: 'Jobbannonser (Ofertas de empleo)',
      content: `**Jobbannonser** har også sine egne uttrykk:

| Spansk | Norsk |
|--------|-------|
| Se busca / Se necesita | Sokes / Trenger |
| Requisitos | Krav |
| Experiencia | Erfaring |
| Jornada completa | Heltid |
| Media jornada | Deltid |
| Sueldo / Salario | Lonn |
| Incorporación inmediata | Umiddelbar tiltredelse |
| Enviar CV | Send CV |
| Entrevista | Intervju |`,
    },
    {
      id: 'spansk-1-13-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Lese en jobbannonse',
      problem: `Les annonsen:

**Se busca camarero/a. Restaurante en el centro de Barcelona. Requisitos: experiencia mínima 1 año, español e inglés. Jornada completa. Sueldo: 1.200€/mes + propinas. Enviar CV a empleo@restaurante.es**

a) Hva slags jobb er det?
b) Hva er kravene?
c) Er det heltid eller deltid?`,
      solution: `a) Servitor (camarero/a)
b) Minimum 1 års erfaring, spansk og engelsk
c) Heltid (jornada completa)

Lonnen er 1.200 euro per måned pluss tips (propinas).`,
    },
    {
      id: 'spansk-1-13-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse annonseutrykkene til norsk.',
        subTasks: [
          { label: 'a', task: 'Se busca profesør de inglés', solution: 'Sokes engelsklarer' },
          { label: 'b', task: 'Media jornada', solution: 'Deltid' },
          { label: 'c', task: 'Incorporación inmediata', solution: 'Umiddelbar tiltredelse' },
          { label: 'd', task: 'Se vende casa con jardín', solution: 'Hus med hage til salgs' },
        ],
        solution: 'a) Sokes engelsklarer, b) Deltid, c) Umiddelbar tiltredelse, d) Hus med hage til salgs',
        hints: ['Se busca = sokes', 'Se vende = til salgs'],
      },
    },
    {
      id: 'spansk-1-13-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du leter etter en leilighet. Hvilken annonse passer best hvis du har en hund og vil leie møblert?',
        options: [
          { id: 'a', text: 'Se alquila piso amueblado. No se admiten mascotas. 700€/mes.', isCorrect: false },
          { id: 'b', text: 'Se vende casa con jardín. Se admiten mascotas.', isCorrect: false },
          { id: 'c', text: 'Se alquila piso amueblado. Se admiten mascotas. 800€/mes.', isCorrect: true },
          { id: 'd', text: 'Se alquila piso sin amueblar. Se admiten mascotas. 650€/mes.', isCorrect: false },
        ],
        solution: 'Alternativ c) er riktig: Det er til leie (alquila), møblert (amueblado), og husdyr er tillatt (se admiten mascotas).',
      },
    },
    {
      id: 'spansk-1-13-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Boligannonser**: Forkortelser som hab. (rom), m² (kvadratmeter), amueblado (møblert)
- **Kjope/leie**: Se vende (til salgs) vs. se alquila (til leie)
- **Jobbannonser**: Uttrykk som jornada completa (heltid), requisitos (krav), sueldo (lonn)
- **Nyttige uttrykk**: Se busca (sokes), incorporacion inmediata (umiddelbar tiltredelse)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'spansk-1-13-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en boligannonse på spansk for en leilighet du vil leie ut. Inkluder: antall rom, storrelse, møblert/umøblert, pris, og om husdyr er tillatt.',
        solution: 'Eksempel: Se alquila piso en el centro de Oslo. 2 hab., 1 baño, cocina equipada. 60 m². Amueblado. 1.000€/mes. Se admiten mascotas. Contacto: 987 654 321.',
        hints: ['Bruk forkortelsene du har lært', 'Se alquila = til leie'],
      },
    },
    {
      id: 'spansk-1-13-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en jobbannonse på spansk for en sommerjobb i Norge. Inkluder: type jobb, krav, heltid/deltid, og lonn.',
        solution: 'Eksempel: Se busca guía turístico para el verano en Bergen, Noruega. Requisitos: español e inglés, experiencia en turismo. Jornada completa (junio-agosto). Sueldo: 2.500€/mes. Enviar CV a trabajo@visitbergen.no.',
        hints: ['Se busca = sokes', 'Guia turistico = turistguide'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el anuncio clasificado', definition: 'småannonsen' },
    { term: 'se alquila', definition: 'til leie' },
    { term: 'se vende', definition: 'til salgs' },
    { term: 'amueblado', definition: 'møblert' },
    { term: 'se busca', definition: 'sokes' },
    { term: 'la jornada completa', definition: 'heltid' },
    { term: 'el sueldo', definition: 'lonnen' },
  ],
};

// ============================================================================
// Kapittel 13.4: Poemas y canciones - Dikt og sanger
// ============================================================================

export const CHAPTER_SPANSK_1_13_4: TextbookChapter = {
  id: 'spansk-1-13-4',
  courseId: 'spansk-1',
  chapterNumber: '13.4',
  title: 'Poemas y canciones',
  subtitle: 'Dikt og sanger',
  description: 'Les enkle spanske dikt og sangtekster og lær om spanskspråklig poesi.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese og forstå enkle tekster',
    'utforske kunstneriske uttrykk i spansktalende områder',
  ],
  content: [
    {
      id: 'spansk-1-13-4-intro',
      type: 'text',
      content: `## Dikt og sanger på spansk

Spansk poesi og musikk er en viktig del av den spanskspråklige kulturen. Fra klassiske dikt av Federico Garcia Lorca til moderne popmusikk - språket er fullt av vakre uttrykk og rytmer.

I dette kapittelet skal du lese enkle dikt og sangtekster og lære nye ord gjennom poesi.`,
    },
    {
      id: 'spansk-1-13-4-def-1',
      type: 'definition',
      title: 'Poetiske ord (Palabras poéticas)',
      content: `Noen vanlige ord i spansk poesi:

| Spansk | Norsk |
|--------|-------|
| el corazón | hjertet |
| el alma | sjelen |
| el sueño | drømmen |
| la luna | månen |
| el sol | solen |
| la estrella | stjernen |
| el mar | havet |
| la flor | blomsten |
| el cielo | himmelen |
| la tierra | jorden |`,
    },
    {
      id: 'spansk-1-13-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Et enkelt dikt',
      problem: `Les dette korte diktet og oversett til norsk:

**La luna**
La luna brilla en el cielo,
las estrellas son de plata.
Mi corazón siente anhelo,
cuando la noche me ata.

Hva handler diktet om?`,
      solution: `**Månen**
Månen skinner på himmelen,
stjernene er av solv.
Hjertet mitt føler lengsel,
når natten binder meg.

Diktet handler om nattehimmelen og en følelse av lengsel (anhelo). Det bruker naturbilder (mane, stjerner, natt) for å beskrive en følelse.`,
    },
    {
      id: 'spansk-1-13-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr \"La luna brilla en el cielo\"?',
        options: [
          { id: 'a', text: 'Solen skinner på havet', isCorrect: false },
          { id: 'b', text: 'Månen skinner på himmelen', isCorrect: true },
          { id: 'c', text: 'Stjernen lyser i natten', isCorrect: false },
          { id: 'd', text: 'Blomsten vokser på jorden', isCorrect: false },
        ],
        solution: 'La luna = månen, brilla = skinner, en el cielo = på himmelen.',
      },
    },
    {
      id: 'spansk-1-13-4-text-1',
      type: 'text',
      content: `## Sangtekster som læringsverktoy

Sangtekster er en fantastisk måte å lære spansk på! Musikk hjelper deg med:

- **Uttale**: Du hører hvordan ord uttales
- **Vokabular**: Du lærer nye ord i kontekst
- **Grammatikk**: Du ser grammatikk brukt naturlig
- **Kultur**: Du lærer om spanskspråklig kultur

**Tips for å lære med sanger:**
1. Lytt først uten tekst
2. Les teksten og slå opp ukjente ord
3. Lytt igjen mens du leser teksten
4. Prov å synge med!`,
    },
    {
      id: 'spansk-1-13-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Barnesang',
      problem: `Her er en kjent spansk barnesang. Hva betyr ordene?

**Estrellita, ¿dónde estás?**
Estrellita, ¿dónde estás?
Me pregunto qué serás.
En el cielo y en el mar,
un diamante de verdad.`,
      solution: `**Lille stjerne, hvor er du?**
Lille stjerne, hvor er du?
Jeg lurer på hva du er.
På himmelen og i havet,
en ekte diamant.

Dette er den spanske versjonen av \"Twinkle, Twinkle, Little Star\". Estrellita er diminutiv av estrella (stjerne) - det lille endelsen -ita betyr \"liten\".`,
    },
    {
      id: 'spansk-1-13-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse poetiske ordene til norsk.',
        subTasks: [
          { label: 'a', task: 'el corazón', solution: 'hjertet' },
          { label: 'b', task: 'la estrella', solution: 'stjernen' },
          { label: 'c', task: 'el sueño', solution: 'drømmen' },
          { label: 'd', task: 'el mar', solution: 'havet' },
          { label: 'e', task: 'la flor', solution: 'blomsten' },
        ],
        solution: 'a) hjertet, b) stjernen, c) drømmen, d) havet, e) blomsten',
        hints: ['Se vokabulartabellen i definisjonen'],
      },
    },
    {
      id: 'spansk-1-13-4-def-2',
      type: 'definition',
      title: 'Diminutiv (-ito/-ita)',
      content: `På spansk kan du legge til **-ito** (hankjønn) eller **-ita** (hunkjønn) for å si at noe er lite eller søtet:

| Ord | Diminutiv | Betydning |
|-----|-----------|-----------|
| estrella | estrellita | lille stjerne |
| casa | casita | lite hus |
| gato | gatito | liten katt |
| momento | momentito | lite øyeblikk |
| hermano | hermanito | lillebror |

Diminutiver brukes mye i spansk, spesielt i sangtekster og når man snakker med barn.`,
    },
    {
      id: 'spansk-1-13-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er diminutiv av \"perro\" (hund)?',
        options: [
          { id: 'a', text: 'perrita', isCorrect: false },
          { id: 'b', text: 'perrito', isCorrect: true },
          { id: 'c', text: 'perrino', isCorrect: false },
          { id: 'd', text: 'perrillo', isCorrect: false },
        ],
        solution: 'Perro er hankjønn, så diminutiv får endelsen -ito: perrito (liten hund/valp).',
      },
    },
    {
      id: 'spansk-1-13-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Poetiske ord**: corazon (hjerte), luna (mane), estrella (stjerne), mar (hav)
- **Lese dikt**: Forsta enkle spanske dikt med naturbilder og følelser
- **Sangtekster**: Bruke musikk som læringsverktoy
- **Diminutiv**: Legge til -ito/-ita for å si at noe er lite (estrellita, casita)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'spansk-1-13-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et kort dikt på spansk (4-6 linjer) med minst tre av disse ordene: luna, sol, corazon, mar, estrella, flor.',
        solution: 'Eksempel:\nEl sol brilla sobre el mar,\nlas flores danzan con el viento.\nMi corazon quiere cantar,\ny las estrellas son mi aliento.',
        hints: ['Det trenger ikke a rime', 'Bruk enkle setninger'],
      },
    },
    {
      id: 'spansk-1-13-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-13-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn en spansk sang du liker (for eksempel av Shakira, Enrique Iglesias, Rosalia, eller Bad Bunny). Skriv ned 4-6 linjer fra sangteksten, oversett dem til norsk, og forklar tre nye ord du lærte.',
        solution: 'Her bruker du en selvvalgt sang. Eksempel fra \"Waka Waka\" av Shakira:\n\"Llegó el momento, caen las murallas\" = Øyeblikket har kommet, murene faller.\nNye ord: el momento (øyeblikket), caer (å falle), la muralla (muren).',
        hints: ['Sok etter sangteksten på nettet', 'Velg en sang med tydelig uttale'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el poema', definition: 'diktet' },
    { term: 'la canción', definition: 'sangen' },
    { term: 'el corazón', definition: 'hjertet' },
    { term: 'la luna', definition: 'månen' },
    { term: 'la estrella', definition: 'stjernen' },
    { term: 'diminutivo (-ito/-ita)', definition: 'forminskelses-endelse' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const SPANSK_1_CHAPTERS_11_13: TextbookChapter[] = [
  CHAPTER_SPANSK_1_11_1, CHAPTER_SPANSK_1_11_2, CHAPTER_SPANSK_1_11_3, CHAPTER_SPANSK_1_11_4,
  CHAPTER_SPANSK_1_12_1, CHAPTER_SPANSK_1_12_2, CHAPTER_SPANSK_1_12_3, CHAPTER_SPANSK_1_12_4,
  CHAPTER_SPANSK_1_13_1, CHAPTER_SPANSK_1_13_2, CHAPTER_SPANSK_1_13_3, CHAPTER_SPANSK_1_13_4,
];
