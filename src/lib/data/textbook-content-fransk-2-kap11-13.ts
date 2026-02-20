/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 2 - Kapittel 11-13 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 11: La francophonie (11.1-11.4)
 * - Kapittel 12: Technologie et monde numérique (12.1-12.4)
 * - Kapittel 13: Textes authentiques avancés (13.1-13.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 11.1: L'Afrique francophone
// ============================================================================

export const CHAPTER_FRANSK_2_11_1: TextbookChapter = {
  id: 'fransk-2-11-1',
  courseId: 'fransk-2',
  chapterNumber: '11.1',
  title: "L'Afrique francophone",
  subtitle: 'Fransktalende Afrika – Senegal, Elfenbenskysten, Marokko m.fl.',
  description: 'I dette kapittelet utforsker vi den fransktalende delen av Afrika. Du lærer om geografi, kultur, historie og dagligliv i land som Senegal, Elfenbenskysten og Marokko, og utvider ordforrådet knyttet til frankofoni og postkolonial identitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne beskrive fransktalende land i Afrika og deres kulturelle særtrekk',
    'Bruke vokabular knyttet til geografi, kultur og samfunn',
    'Forstå historisk bakgrunn for det franske språkets utbredelse i Afrika',
  ],
  content: [
    {
      id: 'fransk-2-11-1-intro',
      type: 'text',
      content: `## L'Afrique francophone

Le français est parlé dans de nombreux pays africains. Cette présence linguistique est liée à l'histoire coloniale, mais aujourd'hui le français en Afrique a développé ses propres caractéristiques et expressions. L'Afrique est en fait le continent avec le plus grand nombre de francophones au monde.

**Quelques pays francophones d'Afrique :**

| Land | Fransk navn | Hovedstad | Verdensdel |
|------|------------|-----------|------------|
| Senegal | le Sénégal | Dakar | Vest-Afrika |
| Elfenbenskysten | la Côte d'Ivoire | Yamoussoukro | Vest-Afrika |
| Marokko | le Maroc | Rabat | Nord-Afrika |
| Kamerun | le Cameroun | Yaoundé | Sentral-Afrika |
| Kongo (DR) | la République démocratique du Congo | Kinshasa | Sentral-Afrika |
| Madagaskar | Madagascar | Antananarivo | Øst-Afrika |

Mer enn 140 millioner mennesker i Afrika snakker fransk som førstespråk eller andrespråk.`,
    },
    {
      id: 'fransk-2-11-1-def-1',
      type: 'definition',
      title: 'La francophonie',
      content: `**La francophonie** (frankofoni) betegner alle land, regioner og folk som bruker fransk som offisielt språk, administrasjonsspråk eller dagligspråk. **L'Organisation internationale de la Francophonie (OIF)** er den internasjonale organisasjonen som samler disse landene.`,
    },
    {
      id: 'fransk-2-11-1-def-2',
      type: 'definition',
      title: 'Vocabulaire géographique et culturel',
      content: `**Viktige ord og uttrykk:**

| Fransk | Norsk |
|--------|-------|
| le continent | kontinentet |
| la colonie | kolonien |
| l'indépendance (f) | uavhengigheten |
| la langue officielle | det offisielle språket |
| le dialecte | dialekten |
| la diversité | mangfoldet |
| le patrimoine culturel | kulturarven |
| la tradition | tradisjonen |
| le griot | den vestafrikanske historiefortelleren |
| la musique | musikken |`,
    },
    {
      id: 'fransk-2-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Presentere et afrikansk land',
      problem: `Hvordan kan vi presentere Senegal på fransk?`,
      solution: `**Le Sénégal** est un pays d'Afrique de l'Ouest. Sa capitale est **Dakar**. Le français est la langue officielle, mais on parle aussi le wolof, le sérère et d'autres langues locales. Le Sénégal est devenu indépendant de la France en **1960**. C'est un pays connu pour sa musique, sa cuisine et son hospitalité, appelée **la teranga**.

*Senegal er et land i Vest-Afrika. Hovedstaden er Dakar. Fransk er det offisielle språket, men man snakker også wolof, serer og andre lokale språk. Senegal ble uavhengig fra Frankrike i 1960. Det er et land kjent for sin musikk, sitt kjøkken og sin gjestfrihet, kalt teranga.*`,
    },
    {
      id: 'fransk-2-11-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Snakke om kolonialhistorie',
      problem: `Hvordan kan vi kort beskrive den koloniale bakgrunnen for fransk i Afrika?`,
      solution: `À partir du **XIXe siècle**, la France a colonisé de grandes parties de l'Afrique. Après la **Seconde Guerre mondiale**, les mouvements d'indépendance se sont multipliés. La plupart des pays africains francophones sont devenus indépendants dans les **années 1960**. Aujourd'hui, le français reste une langue importante pour l'éducation, l'administration et le commerce.

*Fra 1800-tallet koloniserte Frankrike store deler av Afrika. Etter andre verdenskrig vokste uavhengighetsbevegelsene. De fleste fransktalende afrikanske landene ble uavhengige på 1960-tallet. I dag forblir fransk et viktig språk for utdanning, administrasjon og handel.*`,
    },
    {
      id: 'fransk-2-11-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Quel est le continent avec le plus grand nombre de francophones ?',
        options: [
          { id: 'a', text: "L'Europe", isCorrect: false },
          { id: 'b', text: "L'Amérique du Nord", isCorrect: false },
          { id: 'c', text: "L'Afrique", isCorrect: true },
          { id: 'd', text: "L'Asie", isCorrect: false },
        ],
        solution: "L'Afrique est le continent avec le plus grand nombre de francophones, avec plus de 140 millions de locuteurs.",
      },
    },
    {
      id: 'fransk-2-11-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Quelle est la capitale du Sénégal ?',
        options: [
          { id: 'a', text: 'Abidjan', isCorrect: false },
          { id: 'b', text: 'Dakar', isCorrect: true },
          { id: 'c', text: 'Rabat', isCorrect: false },
          { id: 'd', text: 'Kinshasa', isCorrect: false },
        ],
        solution: 'La capitale du Sénégal est Dakar. Abidjan est la plus grande ville de la Côte d\'Ivoire, Rabat est la capitale du Maroc et Kinshasa est la capitale de la RDC.',
      },
    },
    {
      id: 'fransk-2-11-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Quand la plupart des pays africains francophones sont-ils devenus indépendants ?",
        options: [
          { id: 'a', text: 'Dans les années 1920', isCorrect: false },
          { id: 'b', text: 'Dans les années 1940', isCorrect: false },
          { id: 'c', text: 'Dans les années 1960', isCorrect: true },
          { id: 'd', text: 'Dans les années 1980', isCorrect: false },
        ],
        solution: "La plupart des pays africains francophones sont devenus indépendants dans les années 1960, après les mouvements de décolonisation qui ont suivi la Seconde Guerre mondiale.",
      },
    },
    {
      id: 'fransk-2-11-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: "Skriv en kort tekst (5-8 setninger) på fransk der du presenterer et fransktalende afrikansk land. Inkluder navnet på landet, hovedstaden, beliggenhet og noe om kultur eller tradisjoner.",
        solution: "Eksempel: Le Maroc est un pays d'Afrique du Nord. Sa capitale est Rabat, mais la plus grande ville est Casablanca. Le français est largement parlé au Maroc, surtout dans l'éducation et le commerce. Le Maroc est connu pour sa cuisine délicieuse, comme le couscous et le tajine. La musique traditionnelle marocaine est très riche. Le pays a de belles villes historiques comme Marrakech et Fès.",
      },
    },
    {
      id: 'fransk-2-11-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Forklar på fransk (4-6 setninger) hvorfor så mange afrikanske land snakker fransk i dag. Bruk ord som «la colonisation», «l'indépendance» og «la langue officielle».",
        solution: "Eksempel: Beaucoup de pays africains parlent français à cause de la colonisation française au XIXe et XXe siècles. La France a colonisé de grandes parties de l'Afrique de l'Ouest, de l'Afrique du Nord et de l'Afrique centrale. Après l'indépendance dans les années 1960, beaucoup de ces pays ont gardé le français comme langue officielle. Le français sert de langue commune dans des pays avec de nombreuses langues locales. Aujourd'hui, l'Afrique est le continent avec le plus de francophones au monde.",
      },
    },
    {
      id: 'fransk-2-11-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om:

- **L'Afrique francophone** – den fransktalende delen av Afrika med land som Senegal, Elfenbenskysten, Marokko, Kamerun og Kongo
- **L'histoire coloniale** – den koloniale bakgrunnen for det franske språkets utbredelse i Afrika
- **L'indépendance** – uavhengigheten på 1960-tallet og hvordan fransk forble et offisielt språk
- **La diversité culturelle** – det kulturelle mangfoldet i fransktalende Afrika, med musikk, mat og tradisjoner
- **Le vocabulaire** – ord og uttrykk knyttet til geografi, historie og kultur i Afrika`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la francophonie', definition: 'frankofoni – alle som bruker fransk i verden' },
    { term: "l'indépendance (f)", definition: 'uavhengigheten' },
    { term: 'la colonie', definition: 'kolonien' },
    { term: 'la langue officielle', definition: 'det offisielle språket' },
    { term: 'le patrimoine culturel', definition: 'kulturarven' },
    { term: 'le griot', definition: 'vestafrikansk historieforteller og musiker' },
    { term: 'la teranga', definition: 'gjestfrihet (wolof-ord brukt i Senegal)' },
    { term: 'la diversité', definition: 'mangfoldet' },
  ],
};

// ============================================================================
// KAPITTEL 11.2: Le Québec et les Antilles
// ============================================================================

export const CHAPTER_FRANSK_2_11_2: TextbookChapter = {
  id: 'fransk-2-11-2',
  courseId: 'fransk-2',
  chapterNumber: '11.2',
  title: 'Le Québec et les Antilles',
  subtitle: 'Fransk i Quebec og det fransktalende Karibia',
  description: 'I dette kapittelet utforsker vi det franske språket i Nord-Amerika og Karibia. Du lærer om Quebec i Canada, samt de fransktalende Antillene som Guadeloupe, Martinique og Haiti – med fokus på språklige variasjoner, kultur og identitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne beskrive fransktalende regioner i Amerika og Karibia',
    'Forstå språklige forskjeller mellom fransk i Frankrike, Quebec og Antillene',
    'Bruke vokabular knyttet til nordamerikansk og karibisk frankofoni',
  ],
  content: [
    {
      id: 'fransk-2-11-2-intro',
      type: 'text',
      content: `## Le Québec et les Antilles

Le français n'est pas seulement parlé en Europe et en Afrique. En Amérique du Nord, **le Québec** est une province canadienne où le français est la langue officielle. Dans les Caraïbes, on parle français en **Guadeloupe**, en **Martinique** et en **Haïti**, entre autres.

**Régions francophones d'Amérique :**

| Region | Fransk navn | Status | Særtrekk |
|--------|------------|--------|----------|
| Quebec | le Québec | Kanadisk provins | Joual-dialekt, vinterkultur |
| Martinique | la Martinique | Fransk oversjøisk region | Kreolsk språk, karibisk kultur |
| Guadeloupe | la Guadeloupe | Fransk oversjøisk region | Kreolsk og fransk |
| Haiti | Haïti | Uavhengig stat | Kreolsk offisielt, fransk i administrasjon |
| Louisiana | la Louisiane | Amerikansk delstat | Cajun-fransk |

Disse regionene har utviklet unike varianter av fransk som gjenspeiler lokal historie og kultur.`,
    },
    {
      id: 'fransk-2-11-2-def-1',
      type: 'definition',
      title: 'Le français québécois',
      content: `**Le français québécois** (québecfransk) er den franske varianten som snakkes i Quebec, Canada. Den har egne uttrykk og uttale som skiller seg fra standard europeisk fransk. For eksempel sier man **«char»** i stedet for **«voiture»** (bil), og **«blonde»** i stedet for **«petite amie»** (kjæreste). Québécois bruker også noen engelske lånord på egne måter.`,
    },
    {
      id: 'fransk-2-11-2-def-2',
      type: 'definition',
      title: 'Le créole',
      content: `**Le créole** (kreolsk) er et språk som har utviklet seg fra en blanding av fransk og afrikanske språk under kolonitiden. Det snakkes i Karibia (Martinique, Guadeloupe, Haiti), og er et eget språk med egen grammatikk – ikke bare en dialekt av fransk. I Haiti er **le créole haïtien** offisielt språk ved siden av fransk.

| Kreolsk (Haiti) | Fransk | Norsk |
|-----------------|--------|-------|
| Bonjou | Bonjour | God dag |
| Mèsi | Merci | Takk |
| Ki jan ou ye? | Comment allez-vous ? | Hvordan har du det? |
| M renmen ou | Je t'aime | Jeg elsker deg |`,
    },
    {
      id: 'fransk-2-11-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Presentere Quebec',
      problem: `Hvordan kan vi presentere Quebec på fransk?`,
      solution: `**Le Québec** est une province du Canada où le français est la langue officielle. La ville la plus grande est **Montréal**, et la capitale provinciale est **Québec**. Les Québécois ont une culture riche avec leur propre musique, leur cinéma et leurs traditions. L'hiver est très important dans la culture québécoise, avec des activités comme **le carnaval de Québec** et le hockey sur glace.

*Quebec er en provins i Canada der fransk er det offisielle språket. Den største byen er Montréal, og provinshovedstaden er Québec. Quebecerne har en rik kultur med sin egen musikk, film og tradisjoner. Vinteren er svært viktig i quebecsk kultur, med aktiviteter som Québec-karnevalet og ishockey.*`,
    },
    {
      id: 'fransk-2-11-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Forskjeller mellom québécois og standardfransk',
      problem: `Hva er noen typiske forskjeller mellom québecfransk og europeisk fransk?`,
      solution: `Voici quelques différences entre le français québécois et le français de France :

| Québécois | Français standard | Norsk |
|-----------|------------------|-------|
| un char | une voiture | en bil |
| une blonde | une petite amie | en kjæreste (jente) |
| magasiner | faire du shopping | handle |
| c'est correct | c'est bien / d'accord | det er greit |
| une tuque | un bonnet | en lue |
| les bas | les chaussettes | sokkene |

Les Québécois utilisent aussi **«tu»** plus souvent que **«vous»** et ont une prononciation distincte, par exemple « tsé » pour « tu sais ».`,
    },
    {
      id: 'fransk-2-11-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Quelle est la langue officielle du Québec ?',
        options: [
          { id: 'a', text: "L'anglais", isCorrect: false },
          { id: 'b', text: 'Le français', isCorrect: true },
          { id: 'c', text: "L'anglais et le français", isCorrect: false },
          { id: 'd', text: 'Le créole', isCorrect: false },
        ],
        solution: "Le français est la seule langue officielle du Québec. Bien que l'anglais soit aussi parlé, surtout à Montréal, le français est protégé par la loi (la Charte de la langue française).",
      },
    },
    {
      id: 'fransk-2-11-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Que signifie le mot québécois « un char » en français standard ?',
        options: [
          { id: 'a', text: 'Un chat', isCorrect: false },
          { id: 'b', text: 'Un char d\'assaut (stridsvogn)', isCorrect: false },
          { id: 'c', text: 'Une voiture', isCorrect: true },
          { id: 'd', text: 'Un chariot (handlevogn)', isCorrect: false },
        ],
        solution: "En québécois, « un char » signifie « une voiture ». C'est l'un des exemples les plus connus de mots québécois différents du français standard.",
      },
    },
    {
      id: 'fransk-2-11-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Qu'est-ce que le créole ?",
        options: [
          { id: 'a', text: 'Un dialecte du français standard', isCorrect: false },
          { id: 'b', text: 'Une langue qui s\'est développée à partir du français et de langues africaines', isCorrect: true },
          { id: 'c', text: 'La langue officielle du Québec', isCorrect: false },
          { id: 'd', text: 'Un type de cuisine caribéenne', isCorrect: false },
        ],
        solution: "Le créole est une langue à part entière qui s'est développée à partir du français et de langues africaines pendant la période coloniale. Il a sa propre grammaire et son propre vocabulaire.",
      },
    },
    {
      id: 'fransk-2-11-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: "Skriv 5-6 setninger på fransk der du sammenligner Quebec og Martinique. Bruk uttrykk som «au Québec... tandis que en Martinique...» (i Quebec... mens på Martinique...).",
        solution: "Eksempel: Au Québec, il fait très froid en hiver, tandis qu'en Martinique, il fait chaud toute l'année. Au Québec, on parle le français québécois, tandis qu'en Martinique, on parle le français et le créole. Le Québec est une province du Canada, tandis que la Martinique est une région française d'outre-mer. La culture québécoise est influencée par l'Amérique du Nord, tandis que la culture martiniquaise est influencée par l'Afrique et les Caraïbes. Les deux régions ont en commun la langue française.",
      },
    },
    {
      id: 'fransk-2-11-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Forklar på fransk (5-7 setninger) hvorfor det franske språket finnes i Amerika og Karibia. Bruk ord som «l'exploration», «la colonisation» og «l'esclavage» (slaveriet).",
        solution: "Eksempel: Le français est présent en Amérique à cause de l'exploration et de la colonisation françaises. Au XVIe siècle, des explorateurs français comme Jacques Cartier sont arrivés au Canada. La France a colonisé le Québec, la Louisiane et des îles des Caraïbes. Dans les Antilles, l'esclavage a joué un rôle important dans l'histoire. Les esclaves africains et les colons français ont créé ensemble la langue créole. Après l'indépendance d'Haïti en 1804 et la Révolution tranquille au Québec dans les années 1960, le français est resté une partie importante de l'identité de ces régions.",
      },
    },
    {
      id: 'fransk-2-11-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om:

- **Le Québec** – den fransktalende provinsen i Canada med sin unike kultur og sitt eget ordforråd
- **Les Antilles francophones** – Martinique, Guadeloupe og Haiti med kreolsk språk og kultur
- **Le français québécois** – forskjeller mellom québecfransk og europeisk standardfransk
- **Le créole** – et eget språk utviklet fra fransk og afrikanske språk i Karibia
- **L'histoire** – kolonisering, slaveri og uavhengighet som bakgrunn for fransk i Amerika`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'le Québec', definition: 'Quebec – fransktalende provins i Canada' },
    { term: 'les Antilles (f.pl.)', definition: 'Antillene – øygruppe i Karibia' },
    { term: 'le créole', definition: 'kreolsk – språk utviklet fra fransk og afrikanske språk' },
    { term: 'une province', definition: 'en provins' },
    { term: "un département d'outre-mer", definition: 'et oversjøisk departement (fransk)' },
    { term: "l'esclavage (m)", definition: 'slaveriet' },
    { term: 'le carnaval', definition: 'karnevalet' },
    { term: 'la Révolution tranquille', definition: 'den stille revolusjonen (Quebec, 1960-tallet)' },
  ],
};

// ============================================================================
// KAPITTEL 11.3: La francophonie en Asie et Océanie
// ============================================================================

export const CHAPTER_FRANSK_2_11_3: TextbookChapter = {
  id: 'fransk-2-11-3',
  courseId: 'fransk-2',
  chapterNumber: '11.3',
  title: 'La francophonie en Asie et Océanie',
  subtitle: 'Fransk i Asia og Stillehavet',
  description: 'I dette kapittelet utforsker vi det franske språkets tilstedeværelse i Asia og Oseania. Du lærer om land som Vietnam, Kambodsja og Laos, samt franske territorier i Stillehavet som Ny-Caledonia og Fransk Polynesia.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne beskrive fransktalende regioner i Asia og Oseania',
    'Forstå historisk bakgrunn for fransk i Sørøst-Asia',
    'Bruke vokabular knyttet til kulturmøter og språklig mangfold',
  ],
  content: [
    {
      id: 'fransk-2-11-3-intro',
      type: 'text',
      content: `## La francophonie en Asie et Océanie

Le français est également présent en Asie et dans le Pacifique, bien que souvent moins connu que la francophonie africaine ou américaine. En **Indochine** (Vietnam, Cambodge, Laos), le français a été la langue coloniale et garde encore une certaine présence. Dans le Pacifique, la France possède des **territoires d'outre-mer** comme la Nouvelle-Calédonie et la Polynésie française.

**Régions francophones d'Asie et d'Océanie :**

| Region | Fransk navn | Status | Språksituasjon |
|--------|------------|--------|----------------|
| Vietnam | le Vietnam | Uavhengig stat | Fransk som minoritetsspråk |
| Kambodsja | le Cambodge | Uavhengig stat | Fransk i utdanning |
| Laos | le Laos | Uavhengig stat | Fransk som andrespråk |
| Ny-Caledonia | la Nouvelle-Calédonie | Fransk territorium | Fransk offisielt |
| Fransk Polynesia | la Polynésie française | Fransk territorium | Fransk offisielt |
| Vanuatu | le Vanuatu | Uavhengig stat | Fransk og engelsk offisielt |`,
    },
    {
      id: 'fransk-2-11-3-def-1',
      type: 'definition',
      title: "L'Indochine française",
      content: `**L'Indochine française** (Fransk Indokina) var en fransk koloni i Sørøst-Asia som eksisterte fra 1887 til 1954. Den omfattet **le Vietnam**, **le Cambodge** og **le Laos**. Etter **la guerre d'Indochine** (Indokina-krigen, 1946-1954) ble disse landene uavhengige, men det franske språket og den franske kulturelle påvirkningen er fortsatt synlig, særlig i arkitektur, mat og utdanning.`,
    },
    {
      id: 'fransk-2-11-3-def-2',
      type: 'definition',
      title: 'Les territoires français du Pacifique',
      content: `**Les territoires français du Pacifique** (de franske territoriene i Stillehavet) er regioner som fortsatt er en del av Frankrike:

| Fransk | Norsk | Detaljer |
|--------|-------|----------|
| la Nouvelle-Calédonie | Ny-Caledonia | Spesiell status, folkeavstemninger om uavhengighet |
| la Polynésie française | Fransk Polynesia | Inkluderer Tahiti, oversjøisk samfunn |
| Wallis-et-Futuna | Wallis og Futuna | Oversjøisk samfunn |

Innbyggerne i disse territoriene er franske statsborgere og bruker fransk som hovedspråk, men lokale språk som **le kanak** og **le tahitien** er også i bruk.`,
    },
    {
      id: 'fransk-2-11-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Det franske spor i Vietnam',
      problem: `Hvordan kan vi beskrive den franske arven i Vietnam?`,
      solution: `Au **Vietnam**, l'influence française est encore visible aujourd'hui. On peut voir cette influence dans **l'architecture** coloniale de Hanoï et de Hô Chi Minh-Ville, dans **la cuisine** (le bánh mì est un sandwich influencé par la baguette française) et dans **l'éducation**. Bien que le vietnamien soit la langue nationale, le français est encore enseigné dans certaines écoles. Le Vietnam est membre de **l'Organisation internationale de la Francophonie**.

*I Vietnam er den franske påvirkningen fortsatt synlig i dag. Man kan se denne påvirkningen i den koloniale arkitekturen i Hanoi og Ho Chi Minh-byen, i kjøkkenet (bánh mì er en sandwich påvirket av den franske bagetten) og i utdanningen. Selv om vietnamesisk er nasjonalspråket, undervises det fortsatt i fransk på noen skoler. Vietnam er medlem av Den internasjonale fransktalende organisasjonen.*`,
    },
    {
      id: 'fransk-2-11-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Tahiti og Fransk Polynesia',
      problem: `Hvordan kan vi presentere Fransk Polynesia?`,
      solution: `**La Polynésie française** est un territoire français situé dans le Pacifique Sud. Elle est composée de **118 îles**, dont la plus connue est **Tahiti**. Le français est la langue officielle, mais on parle aussi le **tahitien** et d'autres langues polynésiennes. La Polynésie française est connue pour ses **lagons** turquoise, ses **récifs coralliens** et sa culture polynésienne riche. Le tourisme est une activité économique importante.

*Fransk Polynesia er et fransk territorium som ligger i det sørlige Stillehavet. Det består av 118 øyer, hvorav den mest kjente er Tahiti. Fransk er det offisielle språket, men man snakker også tahitisk og andre polynesiske språk. Fransk Polynesia er kjent for sine turkise laguner, korallrev og rike polynesiske kultur. Turisme er en viktig økonomisk aktivitet.*`,
    },
    {
      id: 'fransk-2-11-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: "Quels pays faisaient partie de l'Indochine française ?",
        options: [
          { id: 'a', text: 'Le Japon, la Chine et la Corée', isCorrect: false },
          { id: 'b', text: 'Le Vietnam, le Cambodge et le Laos', isCorrect: true },
          { id: 'c', text: "La Thaïlande, le Myanmar et l'Indonésie", isCorrect: false },
          { id: 'd', text: "L'Inde, le Pakistan et le Bangladesh", isCorrect: false },
        ],
        solution: "L'Indochine française comprenait le Vietnam, le Cambodge et le Laos. Cette colonie a existé de 1887 à 1954.",
      },
    },
    {
      id: 'fransk-2-11-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Quelle île est la plus connue de la Polynésie française ?',
        options: [
          { id: 'a', text: 'La Réunion', isCorrect: false },
          { id: 'b', text: 'La Corse', isCorrect: false },
          { id: 'c', text: 'Tahiti', isCorrect: true },
          { id: 'd', text: 'Madagascar', isCorrect: false },
        ],
        solution: "Tahiti est l'île la plus connue de la Polynésie française. La Réunion est dans l'océan Indien, la Corse est en Méditerranée et Madagascar est un pays indépendant.",
      },
    },
    {
      id: 'fransk-2-11-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Quel exemple montre l'influence française dans la cuisine vietnamienne ?",
        options: [
          { id: 'a', text: 'Le sushi', isCorrect: false },
          { id: 'b', text: 'Le bánh mì (sandwich inspiré de la baguette)', isCorrect: true },
          { id: 'c', text: 'Le curry thaïlandais', isCorrect: false },
          { id: 'd', text: 'Le kimchi', isCorrect: false },
        ],
        solution: "Le bánh mì est un sandwich vietnamien qui utilise un pain inspiré de la baguette française. C'est un excellent exemple de la fusion culinaire entre la France et le Vietnam.",
      },
    },
    {
      id: 'fransk-2-11-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: "Skriv 4-6 setninger på fransk om Ny-Caledonia (la Nouvelle-Calédonie). Nevn beliggenhet, språk, kultur og noe om forholdet til Frankrike.",
        solution: "Eksempel: La Nouvelle-Calédonie est un territoire français situé dans le Pacifique Sud, à l'est de l'Australie. Le français est la langue officielle, mais on parle aussi des langues kanak. La culture est un mélange de traditions françaises et mélanésiennes. Il y a eu des référendums sur l'indépendance, mais la majorité a voté pour rester avec la France. La Nouvelle-Calédonie est connue pour son lagon, qui est inscrit au patrimoine mondial de l'UNESCO.",
      },
    },
    {
      id: 'fransk-2-11-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Sammenlign frankofonien i Sørøst-Asia med frankofonien i Stillehavet. Skriv 5-7 setninger på fransk og bruk uttrykk som «contrairement à» (i motsetning til), «de la même manière» (på samme måte) og «cependant» (likevel).",
        solution: "Eksempel: En Asie du Sud-Est, le français était la langue coloniale au Vietnam, au Cambodge et au Laos. Après l'indépendance, ces pays ont choisi leurs propres langues nationales. Cependant, le français garde une certaine présence dans l'éducation et la diplomatie. Contrairement à l'Asie, dans le Pacifique, le français reste la langue officielle en Nouvelle-Calédonie et en Polynésie française. De la même manière, les deux régions sont membres de l'OIF. Cependant, le statut du français est plus fort dans le Pacifique parce que ces territoires font encore partie de la France.",
      },
    },
    {
      id: 'fransk-2-11-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om:

- **L'Indochine française** – Fransk Indokina med Vietnam, Kambodsja og Laos
- **Les territoires du Pacifique** – Ny-Caledonia, Fransk Polynesia og Wallis-et-Futuna
- **L'influence culturelle** – den franske kulturelle arven i arkitektur, mat og utdanning i Asia
- **Le statut du français** – forskjellen mellom land der fransk er minoritetsspråk og territorier der det er offisielt
- **La diversité linguistique** – lokale språk som tahitisk og kanak ved siden av fransk`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: "l'Indochine française (f)", definition: 'Fransk Indokina – Vietnam, Kambodsja og Laos' },
    { term: 'un territoire d\'outre-mer', definition: 'et oversjøisk territorium' },
    { term: 'la Nouvelle-Calédonie', definition: 'Ny-Caledonia – fransk territorium i Stillehavet' },
    { term: 'la Polynésie française', definition: 'Fransk Polynesia – inkluderer Tahiti' },
    { term: 'un lagon', definition: 'en lagune' },
    { term: 'un récif corallien', definition: 'et korallrev' },
    { term: 'le patrimoine mondial', definition: 'verdensarven (UNESCO)' },
    { term: 'un référendum', definition: 'en folkeavstemning' },
  ],
};

// ============================================================================
// KAPITTEL 11.4: Diversité et identité francophone
// ============================================================================

export const CHAPTER_FRANSK_2_11_4: TextbookChapter = {
  id: 'fransk-2-11-4',
  courseId: 'fransk-2',
  chapterNumber: '11.4',
  title: 'Diversité et identité francophone',
  subtitle: 'Mangfold og frankofon identitet',
  description: 'I dette kapittelet reflekterer vi over hva det vil si å være frankofon. Vi ser på hvordan det franske språket knytter sammen ulike kulturer, og diskuterer spørsmål om identitet, flerspråklighet og kulturelt mangfold i den fransktalende verden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne reflektere over frankofon identitet og mangfold',
    'Forstå debatter om fransk som verdensspråk',
    'Bruke vokabular for å diskutere identitet, tilhørighet og flerspråklighet',
  ],
  content: [
    {
      id: 'fransk-2-11-4-intro',
      type: 'text',
      content: `## Diversité et identité francophone

Qu'est-ce que cela signifie d'être francophone ? Est-ce simplement parler français, ou est-ce quelque chose de plus ? La francophonie est un espace de **diversité culturelle** où des personnes de tous les continents partagent une langue commune tout en conservant leurs propres traditions et identités.

Aujourd'hui, environ **321 millions de personnes** parlent français dans le monde. Le français est la **cinquième langue** la plus parlée au monde et la **deuxième langue** la plus apprise comme langue étrangère.

Les francophones ne forment pas un groupe homogène : un Sénégalais, un Québécois, un Belge et un Tahitien partagent la langue française, mais ont des cultures, des histoires et des identités très différentes.`,
    },
    {
      id: 'fransk-2-11-4-def-1',
      type: 'definition',
      title: "L'identité francophone",
      content: `**L'identité francophone** (den frankofone identiteten) handler ikke bare om språk, men også om verdier som deles i den fransktalende verden:

| Fransk | Norsk |
|--------|-------|
| l'identité (f) | identiteten |
| l'appartenance (f) | tilhørigheten |
| le multilinguisme | flerspråkligheten |
| la diversité culturelle | det kulturelle mangfoldet |
| le métissage | kulturblanding |
| l'héritage (m) | arven |
| les valeurs communes | fellesverdier |
| la solidarité | solidariteten |`,
    },
    {
      id: 'fransk-2-11-4-def-2',
      type: 'definition',
      title: 'Le débat linguistique',
      content: `**Le débat linguistique** (språkdebatten) i den fransktalende verden dreier seg blant annet om:

- **La norme** – Skal alle snakke «parisisk» fransk, eller er alle varianter likeverdige?
- **Le multilinguisme** – Mange frankofonier er flerspråklige. Bør lokal språk fremmes ved siden av fransk?
- **La néocolonisation linguistique** – Er det franske språkets utbredelse en form for kulturell dominans, eller et verktøy for kommunikasjon og samarbeid?
- **L'anglicisation** – Bør man beskytte fransk mot innflytelse fra engelsk?`,
    },
    {
      id: 'fransk-2-11-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Uttrykke meninger om frankofoni',
      problem: `Hvordan kan vi diskutere frankofon identitet på fransk?`,
      solution: `**Pour :** « La francophonie crée des liens entre des cultures différentes. Le français est une langue de communication internationale qui permet aux gens de se comprendre à travers les continents. C'est un outil de coopération et de solidarité. »

**Contre :** « La francophonie peut aussi être vue comme un héritage colonial. Dans certains pays, le français a remplacé les langues locales. Il faut respecter le multilinguisme et ne pas imposer une seule langue. »

*For: Frankofonien skaper bånd mellom ulike kulturer. Fransk er et internasjonalt kommunikasjonsspråk som gjør at folk kan forstå hverandre på tvers av kontinentene. Det er et verktøy for samarbeid og solidaritet.*

*Mot: Frankofonien kan også ses som en kolonial arv. I noen land har fransk erstattet lokale språk. Man bør respektere flerspråkligheten og ikke påtvinge ett enkelt språk.*`,
    },
    {
      id: 'fransk-2-11-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Frankofone kulturuttrykk',
      problem: `Gi eksempler på frankofone kulturuttrykk fra ulike deler av verden.`,
      solution: `La francophonie est riche en expressions culturelles variées :

- **La littérature** : Léopold Sédar Senghor (Sénégal) et Aimé Césaire (Martinique) sont des poètes importants du mouvement de la **négritude**.
- **La musique** : Le raï algérien, le zouk antillais et la chanson québécoise montrent la diversité musicale francophone.
- **Le cinéma** : Des réalisateurs comme Ousmane Sembène (Sénégal) et Denis Villeneuve (Québec) sont reconnus dans le monde entier.
- **La cuisine** : Du couscous maghrébin au poutine québécoise, la gastronomie francophone est très diverse.

*Frankofonien er rik på varierte kulturuttrykk: Litteraturen med négritude-bevegelsen, musikk fra raï til zouk, internasjonalt anerkjente filmskapere og et mangfoldig kjøkken fra couscous til poutine.*`,
    },
    {
      id: 'fransk-2-11-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Combien de personnes parlent français dans le monde environ ?',
        options: [
          { id: 'a', text: '100 millions', isCorrect: false },
          { id: 'b', text: '200 millions', isCorrect: false },
          { id: 'c', text: '321 millions', isCorrect: true },
          { id: 'd', text: '500 millions', isCorrect: false },
        ],
        solution: "Environ 321 millions de personnes parlent français dans le monde, ce qui en fait la cinquième langue la plus parlée.",
      },
    },
    {
      id: 'fransk-2-11-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Qu'est-ce que la négritude ?",
        options: [
          { id: 'a', text: 'Un mouvement politique pour l\'indépendance', isCorrect: false },
          { id: 'b', text: 'Un mouvement littéraire et culturel célébrant l\'identité noire', isCorrect: true },
          { id: 'c', text: 'Un genre musical africain', isCorrect: false },
          { id: 'd', text: 'Une organisation internationale', isCorrect: false },
        ],
        solution: "La négritude est un mouvement littéraire et culturel fondé par des écrivains francophones comme Aimé Césaire et Léopold Sédar Senghor. Il célèbre l'identité et la culture noires face à la domination coloniale.",
      },
    },
    {
      id: 'fransk-2-11-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Quelle est la place du français parmi les langues les plus parlées au monde ?",
        options: [
          { id: 'a', text: 'Deuxième', isCorrect: false },
          { id: 'b', text: 'Troisième', isCorrect: false },
          { id: 'c', text: 'Cinquième', isCorrect: true },
          { id: 'd', text: 'Dixième', isCorrect: false },
        ],
        solution: "Le français est la cinquième langue la plus parlée au monde, après le mandarin, l'anglais, l'hindi et l'espagnol.",
      },
    },
    {
      id: 'fransk-2-11-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: "Skriv en argumenterende tekst (6-8 setninger) på fransk der du diskuterer fordeler og ulemper ved frankofonien. Bruk uttrykk som «d'un côté... de l'autre côté» (på den ene siden... på den andre siden).",
        solution: "Eksempel: La francophonie a des avantages et des inconvénients. D'un côté, le français permet la communication entre des personnes de cultures différentes. C'est une langue de coopération internationale et de solidarité. La francophonie favorise les échanges culturels et économiques. De l'autre côté, la francophonie peut être vue comme un héritage de la colonisation. Dans certains pays, le français a pris la place des langues locales. Il est important de promouvoir le multilinguisme et de respecter toutes les langues. En conclusion, la francophonie est positive quand elle respecte la diversité.",
      },
    },
    {
      id: 'fransk-2-11-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-11-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Velg en frankofon kunstner (forfatter, musiker, filmskaper) fra et land utenfor Frankrike. Skriv 6-8 setninger på fransk der du presenterer denne personen, deres verk og deres betydning for frankofon kultur.",
        solution: "Eksempel: Léopold Sédar Senghor (1906-2001) était un poète et homme politique sénégalais. Il est l'un des fondateurs du mouvement de la négritude, qui célèbre l'identité et la culture africaines. Senghor a écrit de nombreux poèmes en français, comme « Chants d'ombre » et « Hosties noires ». Il est devenu le premier président du Sénégal en 1960. Senghor croyait que le français pouvait être un outil pour exprimer l'identité africaine. Il a été élu à l'Académie française en 1983, le premier Africain à y entrer. Son œuvre montre que la francophonie peut enrichir toutes les cultures.",
      },
    },
    {
      id: 'fransk-2-11-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om:

- **L'identité francophone** – hva det betyr å være frankofon og mangfoldet innenfor frankofonien
- **Le débat linguistique** – debatten om språknorm, flerspråklighet og språklig dominans
- **Les expressions culturelles** – litteratur, musikk, film og mat i den fransktalende verden
- **La négritude** – en viktig litterær og kulturell bevegelse grunnlagt av frankofone forfattere
- **Le vocabulaire** – ord og uttrykk for å diskutere identitet, tilhørighet og mangfold`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: "l'identité (f)", definition: 'identiteten' },
    { term: "l'appartenance (f)", definition: 'tilhørigheten' },
    { term: 'le multilinguisme', definition: 'flerspråkligheten' },
    { term: 'le métissage', definition: 'kulturblanding' },
    { term: 'la négritude', definition: 'litterær bevegelse som feirer svart identitet' },
    { term: "l'héritage colonial (m)", definition: 'den koloniale arven' },
    { term: 'la solidarité', definition: 'solidariteten' },
    { term: 'la diversité culturelle', definition: 'det kulturelle mangfoldet' },
  ],
};

// ============================================================================
// KAPITTEL 12.1: Internet et réseaux sociaux
// ============================================================================

export const CHAPTER_FRANSK_2_12_1: TextbookChapter = {
  id: 'fransk-2-12-1',
  courseId: 'fransk-2',
  chapterNumber: '12.1',
  title: 'Internet et réseaux sociaux',
  subtitle: 'Internett og sosiale medier – vokabular og uttrykk',
  description: 'I dette kapittelet lærer du det franske vokabularet knyttet til internett og sosiale medier. Du øver på å snakke om nettbruk, sosiale plattformer og digital kommunikasjon på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne bruke fransk vokabular om internett og sosiale medier',
    'Snakke om egne digitale vaner på fransk',
    'Forstå franske tekster om nettbruk og sosiale medier',
  ],
  content: [
    {
      id: 'fransk-2-12-1-intro',
      type: 'text',
      content: `## Internet et réseaux sociaux

Internet et les réseaux sociaux font partie de notre vie quotidienne. En français, il existe un vocabulaire riche pour parler de la technologie numérique. La France a même une institution officielle, **l'Académie française**, qui propose des mots français pour remplacer les anglicismes dans le domaine numérique.

Par exemple, on dit officiellement **«un courriel»** au lieu de «un e-mail» et **«un mot-dièse»** au lieu de «un hashtag» – même si beaucoup de francophones utilisent aussi les mots anglais dans la vie courante.`,
    },
    {
      id: 'fransk-2-12-1-def-1',
      type: 'definition',
      title: 'Vocabulaire d\'Internet',
      content: `**Grunnleggende internettvokabular:**

| Fransk | Norsk |
|--------|-------|
| l'Internet (m) / le Web | internett / nettet |
| un site Web / un site Internet | en nettside |
| une page Web | en nettside (enkeltside) |
| un navigateur | en nettleser |
| un moteur de recherche | en søkemotor |
| un lien / un lien hypertexte | en lenke / hyperlenke |
| télécharger | laste ned |
| mettre en ligne | laste opp / legge ut |
| un mot de passe | et passord |
| un compte | en konto |
| se connecter | logge inn |
| se déconnecter | logge ut |
| un clic / cliquer | et klikk / klikke |`,
    },
    {
      id: 'fransk-2-12-1-def-2',
      type: 'definition',
      title: 'Les réseaux sociaux',
      content: `**Vokabular for sosiale medier:**

| Fransk | Norsk |
|--------|-------|
| les réseaux sociaux (m.pl.) | sosiale medier |
| un profil | en profil |
| un abonné / une abonnée | en følger |
| s'abonner à | følge / abonnere på |
| un fil d'actualité | en nyhetsstrøm |
| une publication / un post | et innlegg |
| partager | dele |
| aimer / liker | like |
| commenter | kommentere |
| un mot-dièse / un hashtag | en hashtag |
| une story / une histoire | en story |
| un influenceur / une influenceuse | en influenser |
| devenir viral(e) | bli viral |`,
    },
    {
      id: 'fransk-2-12-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Snakke om nettbruk',
      problem: `Hvordan kan vi beskrive våre digitale vaner på fransk?`,
      solution: `**Je passe** environ deux heures par jour sur Internet. Le matin, je **consulte** mon fil d'actualité sur les réseaux sociaux. J'utilise surtout Instagram et TikTok. Je **publie** parfois des photos et des vidéos. J'ai environ 300 **abonnés** sur mon profil. Le soir, je **regarde** des vidéos sur YouTube ou je **fais des recherches** pour mes devoirs sur Google.

*Jeg bruker omtrent to timer daglig på internett. Om morgenen sjekker jeg nyhetsstrømmen min på sosiale medier. Jeg bruker mest Instagram og TikTok. Jeg legger noen ganger ut bilder og videoer. Jeg har rundt 300 følgere på profilen min. Om kvelden ser jeg på videoer på YouTube eller gjør undersøkelser til leksene mine på Google.*`,
    },
    {
      id: 'fransk-2-12-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Diskutere sosiale medier',
      problem: `Hvordan kan vi diskutere fordeler og ulemper med sosiale medier på fransk?`,
      solution: `**Les avantages :** Les réseaux sociaux permettent de **rester en contact** avec ses amis et sa famille. On peut **découvrir** de nouvelles choses et **s'informer** sur l'actualité. C'est aussi un moyen de **s'exprimer** et de **partager** ses passions.

**Les inconvénients :** Les réseaux sociaux peuvent créer une **dépendance**. Il y a des risques de **cyberharcèlement** et de **désinformation**. On compare souvent sa vie à celle des autres, ce qui peut affecter **l'estime de soi**.

*Fordelene: Sosiale medier gjør det mulig å holde kontakten med venner og familie. Man kan oppdage nye ting og holde seg informert. Det er også en måte å uttrykke seg og dele sine interesser på.*

*Ulempene: Sosiale medier kan skape avhengighet. Det er risiko for nettmobbing og feilinformasjon. Man sammenligner ofte livet sitt med andres, noe som kan påvirke selvfølelsen.*`,
    },
    {
      id: 'fransk-2-12-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Comment dit-on « passord » en français ?',
        options: [
          { id: 'a', text: 'Un mot de passe', isCorrect: true },
          { id: 'b', text: 'Un mot-dièse', isCorrect: false },
          { id: 'c', text: 'Un mot-clé', isCorrect: false },
          { id: 'd', text: 'Un mot secret', isCorrect: false },
        ],
        solution: "« Un mot de passe » signifie « passord » en français. « Un mot-dièse » est un hashtag, « un mot-clé » est un nøkkelord, et « un mot secret » n'est pas un terme technique standard.",
      },
    },
    {
      id: 'fransk-2-12-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Quel est le mot français officiel pour « e-mail » ?",
        options: [
          { id: 'a', text: 'Un mémo', isCorrect: false },
          { id: 'b', text: 'Un courriel', isCorrect: true },
          { id: 'c', text: 'Un courier', isCorrect: false },
          { id: 'd', text: 'Une lettre numérique', isCorrect: false },
        ],
        solution: "Le mot français officiel pour « e-mail » est « un courriel » (contraction de « courrier électronique »). C'est le terme recommandé par l'Académie française.",
      },
    },
    {
      id: 'fransk-2-12-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Que signifie « s'abonner à » dans le contexte des réseaux sociaux ?",
        options: [
          { id: 'a', text: 'Blokkere noen', isCorrect: false },
          { id: 'b', text: 'Slette en konto', isCorrect: false },
          { id: 'c', text: 'Følge / abonnere på', isCorrect: true },
          { id: 'd', text: 'Rapportere en bruker', isCorrect: false },
        ],
        solution: "« S'abonner à » signifie « følge » ou « abonnere på » un compte sur les réseaux sociaux. Par exemple : « Je m'abonne à ton compte Instagram. »",
      },
    },
    {
      id: 'fransk-2-12-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: "Beskriv dine digitale vaner på fransk (6-8 setninger). Nevn hvilke plattformer du bruker, hvor mye tid du bruker, og hva du gjør på nettet. Bruk vokabular fra kapittelet.",
        solution: "Eksempel: Je passe environ trois heures par jour sur Internet. Le matin, je consulte mon fil d'actualité sur Instagram et TikTok. Je publie rarement des photos, mais j'aime et je commente les publications de mes amis. J'utilise aussi YouTube pour regarder des vidéos. Pour mes devoirs, je fais des recherches sur Google. Le soir, j'envoie des messages à mes amis sur Snapchat. Je pense que je passe trop de temps sur les réseaux sociaux. J'essaie de me déconnecter plus souvent.",
      },
    },
    {
      id: 'fransk-2-12-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Skriv en argumenterende tekst på fransk (6-8 setninger) om dette temaet: «Les réseaux sociaux : plus d'avantages ou plus d'inconvénients ?» (Sosiale medier: flere fordeler eller flere ulemper?). Gi minst to argumenter for hver side.",
        solution: "Eksempel: Les réseaux sociaux ont des avantages importants. Premièrement, ils permettent de rester en contact avec des amis et de la famille partout dans le monde. Deuxièmement, ils sont un outil pour s'informer rapidement sur l'actualité. Cependant, il y a aussi des inconvénients sérieux. D'abord, les réseaux sociaux peuvent créer une dépendance qui affecte la concentration et le sommeil. Ensuite, le cyberharcèlement est un problème grave qui touche beaucoup de jeunes. À mon avis, les réseaux sociaux sont utiles quand on les utilise avec modération. Il est important de trouver un équilibre entre la vie numérique et la vie réelle.",
      },
    },
    {
      id: 'fransk-2-12-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om:

- **Le vocabulaire d'Internet** – grunnleggende ord som nettside, søkemotor, nettleser og passord
- **Les réseaux sociaux** – uttrykk for sosiale medier som profil, følger, innlegg og dele
- **Les habitudes numériques** – å beskrive dine digitale vaner på fransk
- **Les avantages et inconvénients** – å diskutere positive og negative sider ved sosiale medier
- **Les mots officiels** – franske offisielle erstatninger for engelske teknologiord`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'les réseaux sociaux (m.pl.)', definition: 'sosiale medier' },
    { term: 'un courriel', definition: 'en e-post (offisielt fransk ord)' },
    { term: 'un mot de passe', definition: 'et passord' },
    { term: 'un moteur de recherche', definition: 'en søkemotor' },
    { term: 'télécharger', definition: 'laste ned' },
    { term: 'un abonné / une abonnée', definition: 'en følger / abonnent' },
    { term: 'le cyberharcèlement', definition: 'nettmobbing' },
    { term: 'la désinformation', definition: 'feilinformasjon' },
  ],
};

// ============================================================================
// KAPITTEL 12.2: Appareils et logiciels
// ============================================================================

export const CHAPTER_FRANSK_2_12_2: TextbookChapter = {
  id: 'fransk-2-12-2',
  courseId: 'fransk-2',
  chapterNumber: '12.2',
  title: 'Appareils et logiciels',
  subtitle: 'Tekniske enheter og programvare',
  description: 'I dette kapittelet lærer du det franske vokabularet for tekniske enheter som datamaskiner, telefoner og nettbrett, samt programvare og apper. Du øver på å beskrive tekniske problemer og løsninger på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne navngi tekniske enheter og programvare på fransk',
    'Beskrive tekniske problemer og løsninger',
    'Forstå brukerveiledninger og tekniske instruksjoner på fransk',
  ],
  content: [
    {
      id: 'fransk-2-12-2-intro',
      type: 'text',
      content: `## Appareils et logiciels

Dans notre vie quotidienne, nous utilisons de nombreux appareils électroniques et logiciels. Savoir en parler en français est une compétence pratique, que ce soit pour acheter un appareil, résoudre un problème technique ou demander de l'aide.

En français, on distingue entre **le matériel** (maskinvare / hardware) et **le logiciel** (programvare / software). Apprenons le vocabulaire essentiel pour parler de technologie en français.`,
    },
    {
      id: 'fransk-2-12-2-def-1',
      type: 'definition',
      title: 'Les appareils électroniques',
      content: `**Tekniske enheter (le matériel):**

| Fransk | Norsk |
|--------|-------|
| un ordinateur | en datamaskin |
| un ordinateur portable | en bærbar datamaskin |
| un smartphone / un téléphone intelligent | en smarttelefon |
| une tablette | et nettbrett |
| un écran | en skjerm |
| un clavier | et tastatur |
| une souris | en mus (datamus) |
| un casque (audio) | hodetelefoner |
| une enceinte connectée | en smart høyttaler |
| une imprimante | en skriver |
| un disque dur | en harddisk |
| une clé USB | en USB-minnepinne |
| un chargeur | en lader |
| la batterie | batteriet |`,
    },
    {
      id: 'fransk-2-12-2-def-2',
      type: 'definition',
      title: 'Les logiciels et applications',
      content: `**Programvare og applikasjoner (le logiciel):**

| Fransk | Norsk |
|--------|-------|
| un logiciel | en programvare |
| une application (une appli) | en applikasjon (en app) |
| un système d'exploitation | et operativsystem |
| un traitement de texte | et tekstbehandlingsprogram |
| un tableur | et regneark |
| un antivirus | et antivirusprogram |
| une mise à jour | en oppdatering |
| installer | installere |
| désinstaller | avinstallere |
| sauvegarder | lagre / ta sikkerhetskopi |
| un fichier | en fil |
| un dossier | en mappe |
| copier-coller | kopiere og lime inn |`,
    },
    {
      id: 'fransk-2-12-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Beskrive et teknisk problem',
      problem: `Hvordan kan vi beskrive et teknisk problem med datamaskinen på fransk?`,
      solution: `**Mon ordinateur ne marche plus !** L'écran est **noir** et rien ne se passe quand j'appuie sur les touches. J'ai essayé de **redémarrer** l'ordinateur, mais ça ne marche pas. La **batterie** est chargée. Je pense que c'est peut-être un problème de **logiciel** – il y avait une **mise à jour** en cours quand l'ordinateur s'est éteint. Je vais essayer de le **démarrer en mode sans échec**.

*Datamaskinen min fungerer ikke lenger! Skjermen er svart og ingenting skjer når jeg trykker på tastene. Jeg har prøvd å starte datamaskinen på nytt, men det fungerer ikke. Batteriet er ladet. Jeg tror det kanskje er et programvareproblem – det var en oppdatering i gang da datamaskinen slo seg av. Jeg skal prøve å starte den i sikkermodus.*`,
    },
    {
      id: 'fransk-2-12-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Kjøpe et teknisk produkt',
      problem: `Hvordan spør vi om et teknisk produkt i en butikk på fransk?`,
      solution: `— Bonjour, je cherche **un ordinateur portable** pour mes études.
— Bien sûr. Quel est votre **budget** ?
— Environ 800 euros. J'ai besoin d'un ordinateur avec un bon **écran**, au moins 16 Go de **mémoire vive** et un **processeur** rapide.
— Je vous recommande ce modèle. Il a un écran de 15 pouces, 16 Go de RAM et un **disque dur SSD** de 512 Go.
— Est-ce qu'il a une bonne **autonomie de batterie** ?
— Oui, environ 10 heures. Et il est livré avec **le système d'exploitation** déjà installé.
— Parfait, je le prends.

*— God dag, jeg leter etter en bærbar datamaskin til studiene mine. — Selvfølgelig. Hva er budsjettet ditt? — Omtrent 800 euro. Jeg trenger en datamaskin med god skjerm, minst 16 GB arbeidsminne og en rask prosessor. — Jeg anbefaler denne modellen. Den har 15-tommers skjerm, 16 GB RAM og en SSD-harddisk på 512 GB. — Har den god batteritid? — Ja, omtrent 10 timer. Og den leveres med operativsystemet ferdig installert. — Perfekt, jeg tar den.*`,
    },
    {
      id: 'fransk-2-12-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Comment dit-on « tastatur » en français ?',
        options: [
          { id: 'a', text: 'Une souris', isCorrect: false },
          { id: 'b', text: 'Un écran', isCorrect: false },
          { id: 'c', text: 'Un clavier', isCorrect: true },
          { id: 'd', text: 'Un casque', isCorrect: false },
        ],
        solution: "« Un clavier » signifie « tastatur ». « Une souris » est une datamus, « un écran » est en skjerm, et « un casque » er hodetelefoner.",
      },
    },
    {
      id: 'fransk-2-12-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Que signifie « une mise à jour » ?",
        options: [
          { id: 'a', text: 'En nedlasting', isCorrect: false },
          { id: 'b', text: 'En oppdatering', isCorrect: true },
          { id: 'c', text: 'En sikkerhetskopi', isCorrect: false },
          { id: 'd', text: 'En installasjon', isCorrect: false },
        ],
        solution: "« Une mise à jour » signifie « en oppdatering ». C'est l'action de mettre un logiciel ou un système à la dernière version. Par exemple : « Il faut faire la mise à jour de votre smartphone. »",
      },
    },
    {
      id: 'fransk-2-12-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Quelle est la différence entre « le matériel » et « le logiciel » ?",
        options: [
          { id: 'a', text: 'Le matériel est gratuit, le logiciel est payant', isCorrect: false },
          { id: 'b', text: 'Le matériel est la partie physique, le logiciel est la partie programmée', isCorrect: true },
          { id: 'c', text: 'Le matériel est pour les professionnels, le logiciel est pour tous', isCorrect: false },
          { id: 'd', text: 'Il n\'y a pas de différence', isCorrect: false },
        ],
        solution: "« Le matériel » (hardware) désigne les composants physiques d'un ordinateur (écran, clavier, souris), tandis que « le logiciel » (software) désigne les programmes et applications qui fonctionnent sur cet ordinateur.",
      },
    },
    {
      id: 'fransk-2-12-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: "Beskriv på fransk (5-7 setninger) et teknisk problem du har hatt med telefonen eller datamaskinen din. Forklar problemet og hva du gjorde for å løse det. Bruk vokabular fra kapittelet.",
        solution: "Eksempel: La semaine dernière, mon smartphone ne marchait plus bien. L'écran se figeait souvent et les applications se fermaient toutes seules. J'ai d'abord essayé de redémarrer le téléphone, mais le problème a continué. Ensuite, j'ai vérifié s'il y avait une mise à jour du système d'exploitation. J'ai installé la mise à jour et j'ai aussi désinstallé quelques applications que je n'utilisais plus. Après ces actions, mon téléphone fonctionnait beaucoup mieux. J'ai aussi fait une sauvegarde de mes fichiers au cas où.",
      },
    },
    {
      id: 'fransk-2-12-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Skriv en dialog på fransk (8-10 replikklinjer) mellom en kunde og en selger i en elektronikkbutikk. Kunden ønsker å kjøpe et nettbrett og stiller spørsmål om skjerm, lagring, batteritid og pris.",
        solution: "Eksempel:\n— Bonjour, je voudrais acheter une tablette.\n— Bonjour ! C'est pour quel usage ? Le travail ou les loisirs ?\n— Surtout pour regarder des vidéos et lire des livres numériques.\n— Dans ce cas, je vous recommande cette tablette avec un écran de 11 pouces.\n— Quelle est la capacité de stockage ?\n— Elle est disponible en 128 Go ou 256 Go.\n— Et l'autonomie de la batterie ?\n— Environ 12 heures en utilisation normale.\n— Quel est le prix ?\n— Le modèle 128 Go coûte 449 euros, et le modèle 256 Go coûte 549 euros.\n— Je vais prendre le modèle 256 Go. Est-ce qu'un chargeur est inclus ?\n— Oui, bien sûr. Je vous l'emballe ?",
      },
    },
    {
      id: 'fransk-2-12-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om:

- **Les appareils** – franske ord for tekniske enheter som datamaskin, nettbrett, tastatur og skjerm
- **Les logiciels** – programvare, applikasjoner, operativsystem og oppdateringer
- **Résoudre des problèmes** – å beskrive og løse tekniske problemer på fransk
- **Acheter un appareil** – å handle tekniske produkter og stille spørsmål om spesifikasjoner
- **Le matériel vs. le logiciel** – forskjellen mellom maskinvare og programvare`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'un ordinateur', definition: 'en datamaskin' },
    { term: 'un logiciel', definition: 'en programvare' },
    { term: 'le matériel', definition: 'maskinvare (hardware)' },
    { term: 'une mise à jour', definition: 'en oppdatering' },
    { term: 'sauvegarder', definition: 'lagre / ta sikkerhetskopi' },
    { term: 'un clavier', definition: 'et tastatur' },
    { term: 'un écran', definition: 'en skjerm' },
    { term: 'la mémoire vive (RAM)', definition: 'arbeidsminne (RAM)' },
  ],
};

// ============================================================================
// KAPITTEL 12.3: Communication numérique
// ============================================================================

export const CHAPTER_FRANSK_2_12_3: TextbookChapter = {
  id: 'fransk-2-12-3',
  courseId: 'fransk-2',
  chapterNumber: '12.3',
  title: 'Communication numérique',
  subtitle: 'Digital kommunikasjon, e-post og nettsikkerhet',
  description: 'I dette kapittelet lærer du å kommunisere digitalt på fransk – skrive e-poster, bruke meldingsapper og forstå regler for nettsikkerhet og nettvett. Du øver på formell og uformell digital kommunikasjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne skrive formelle og uformelle e-poster på fransk',
    'Forstå regler for nettsikkerhet og personvern',
    'Bruke passende digital kommunikasjon i ulike situasjoner',
  ],
  content: [
    {
      id: 'fransk-2-12-3-intro',
      type: 'text',
      content: `## Communication numérique

La communication numérique est devenue essentielle dans notre vie quotidienne et professionnelle. Savoir écrire un courriel formel, communiquer sur les messageries et connaître les règles de sécurité en ligne sont des compétences importantes – aussi en français.

En français, on fait une distinction claire entre **la communication formelle** (e-poster til lærere, arbeidsgivere) et **la communication informelle** (meldinger til venner). Les regler for høflighet og tone er viktige å kjenne til.`,
    },
    {
      id: 'fransk-2-12-3-def-1',
      type: 'definition',
      title: 'Écrire un courriel formel',
      content: `**Struktur for en formell e-post:**

| Del | Fransk uttrykk | Norsk |
|-----|----------------|-------|
| Mottaker | Madame, Monsieur | Fru, Herr |
| Innledning | Je me permets de vous écrire pour... | Jeg tillater meg å skrive til Dem for å... |
| Forespørsel | Je voudrais savoir si... | Jeg ønsker å vite om... |
| Takk | Je vous remercie par avance | Jeg takker Dem på forhånd |
| Avslutning | Veuillez agréer mes salutations distinguées | Vennlig hilsen (svært formelt) |
| Enklere avslutning | Cordialement | Med vennlig hilsen |
| Vedlegg | Veuillez trouver ci-joint... | Vedlagt finner De... |

**Eksempel på formell e-post:**
\`\`\`
Objet : Demande d'information

Madame, Monsieur,

Je me permets de vous écrire pour demander des informations sur vos cours de français.

Je voudrais savoir quels sont les horaires et les tarifs pour le niveau intermédiaire.

Je vous remercie par avance de votre réponse.

Cordialement,
[Ditt navn]
\`\`\``,
    },
    {
      id: 'fransk-2-12-3-def-2',
      type: 'definition',
      title: 'La sécurité en ligne',
      content: `**Nettsikkerhet – viktige begreper:**

| Fransk | Norsk |
|--------|-------|
| la sécurité en ligne | nettsikkerhet |
| la vie privée | personvernet |
| les données personnelles | personopplysningene |
| un pirate informatique / un hacker | en hacker |
| l'hameçonnage (m) / le phishing | nettfisking |
| un logiciel malveillant | et ondsinnet program (malware) |
| un pare-feu | en brannmur (firewall) |
| le chiffrement | kryptering |
| une arnaque | en svindel |
| signaler / bloquer | rapportere / blokkere |
| la protection des données | databeskyttelse |
| le RGPD | GDPR (personvernforordningen) |`,
    },
    {
      id: 'fransk-2-12-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Formell vs. uformell kommunikasjon',
      problem: `Hva er forskjellen mellom en formell e-post og en uformell melding på fransk?`,
      solution: `**Formell e-post (til en lærer) :**
« Cher Monsieur Dupont,
Je vous écris pour vous informer que je serai absent demain en raison d'un rendez-vous médical. Pourriez-vous m'envoyer les devoirs par courriel ?
Je vous remercie.
Cordialement,
Marie »

**Uformell melding (til en venn) :**
« Salut Lucas ! Jsuis pas là demain, tu peux m'envoyer les devoirs stp ? Merci ! »

Legg merke til forskjellene:
- **Tiltale:** «Cher Monsieur» vs. «Salut»
- **Språk:** Fullstendige setninger vs. forkortelser (jsuis = je suis, stp = s'il te plaît)
- **Avslutning:** «Cordialement» vs. «Merci !»
- **Tone:** Høflig og formell vs. avslappet og direkte`,
    },
    {
      id: 'fransk-2-12-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Gjenkjenne nettsvindel',
      problem: `Hvordan kan vi beskrive og advare mot nettsvindel på fransk?`,
      solution: `**Attention à l'hameçonnage !** L'hameçonnage (phishing) est une technique utilisée par des **pirates informatiques** pour voler vos **données personnelles**. Voici comment reconnaître une tentative d'hameçonnage :

1. Le courriel vous demande de **cliquer sur un lien** urgent.
2. L'adresse de l'expéditeur semble **suspecte** ou contient des fautes.
3. Le message vous demande votre **mot de passe** ou vos **informations bancaires**.
4. Il y a des **fautes d'orthographe** dans le message.

**Que faire ?** Ne cliquez pas sur les liens. Ne donnez jamais vos informations personnelles. **Signalez** le message comme spam et **supprimez-le**.

*Pass på nettfisking! Phishing er en teknikk som brukes av hackere for å stjele dine personopplysninger. Klikk aldri på mistenkelige lenker, gi aldri fra deg passord eller bankinformasjon, og rapporter meldingen som spam.*`,
    },
    {
      id: 'fransk-2-12-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: "Comment termine-t-on un courriel formel en français ?",
        options: [
          { id: 'a', text: 'Bisous !', isCorrect: false },
          { id: 'b', text: 'Cordialement', isCorrect: true },
          { id: 'c', text: 'À plus !', isCorrect: false },
          { id: 'd', text: 'Salut !', isCorrect: false },
        ],
        solution: "« Cordialement » est la formule de politesse standard pour terminer un courriel formel. « Bisous », « À plus » et « Salut » sont des formules informelles utilisées entre amis.",
      },
    },
    {
      id: 'fransk-2-12-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Qu'est-ce que l'hameçonnage (le phishing) ?",
        options: [
          { id: 'a', text: 'Un jeu en ligne', isCorrect: false },
          { id: 'b', text: 'Un type de logiciel antivirus', isCorrect: false },
          { id: 'c', text: 'Une technique pour voler des données personnelles', isCorrect: true },
          { id: 'd', text: 'Une méthode de sauvegarde', isCorrect: false },
        ],
        solution: "L'hameçonnage (phishing) est une technique frauduleuse utilisée par des pirates informatiques pour obtenir des informations personnelles (mots de passe, données bancaires) en se faisant passer pour une organisation légitime.",
      },
    },
    {
      id: 'fransk-2-12-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Que signifie « stp » dans un message informel ?",
        options: [
          { id: 'a', text: "S'il te plaît", isCorrect: true },
          { id: 'b', text: 'Salut tout le monde, profitez !', isCorrect: false },
          { id: 'c', text: 'Sans tes parents', isCorrect: false },
          { id: 'd', text: 'Super, très positif', isCorrect: false },
        ],
        solution: "« Stp » est l'abréviation de « s'il te plaît » (vær så snill). C'est une abréviation très courante dans les messages informels entre amis en français.",
      },
    },
    {
      id: 'fransk-2-12-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: "Skriv en formell e-post på fransk til en fransk skole der du ber om informasjon om et utvekslingsprogram. Bruk riktig struktur med hilsen, innledning, forespørsel og avslutning.",
        solution: "Eksempel:\nObjet : Demande d'information sur le programme d'échange\n\nMadame, Monsieur,\n\nJe suis élève dans un lycée en Norvège et je me permets de vous écrire pour demander des informations sur votre programme d'échange pour les élèves étrangers.\n\nJe voudrais savoir quelles sont les dates du programme, les conditions d'admission et les frais éventuels. Je parle français au niveau intermédiaire et j'aimerais améliorer mes compétences linguistiques.\n\nPourriez-vous m'envoyer une brochure ou un lien vers votre site Web avec plus de détails ?\n\nJe vous remercie par avance de votre réponse.\n\nCordialement,\n[Ditt navn]",
      },
    },
    {
      id: 'fransk-2-12-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Skriv en tekst på fransk (6-8 setninger) med råd om nettsikkerhet til unge. Bruk imperativ (oppfordringer) og vokabular fra kapittelet. Inkluder minst fire konkrete råd.",
        solution: "Eksempel: Voici quelques conseils importants pour rester en sécurité en ligne. Premièrement, utilisez un mot de passe fort avec des lettres, des chiffres et des symboles, et ne le partagez jamais avec d'autres personnes. Deuxièmement, ne cliquez pas sur des liens suspects dans les courriels – c'est souvent de l'hameçonnage. Troisièmement, protégez vos données personnelles : ne publiez pas votre adresse, votre numéro de téléphone ou vos photos d'identité sur les réseaux sociaux. Quatrièmement, installez un logiciel antivirus et faites régulièrement les mises à jour de vos appareils. Enfin, si quelqu'un vous harcèle en ligne, bloquez cette personne et signalez-la. N'oubliez pas : sur Internet, il faut toujours être prudent !",
      },
    },
    {
      id: 'fransk-2-12-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om:

- **Le courriel formel** – struktur og høflighetsfraser for formelle e-poster
- **La communication informelle** – forkortelser og tone i uformelle meldinger
- **La sécurité en ligne** – nettsikkerhet, nettfisking og personvern
- **Le vocabulaire numérique** – ord for digital kommunikasjon, svindel og databeskyttelse
- **Les conseils pratiques** – konkrete råd for trygg bruk av internett`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'un courriel', definition: 'en e-post' },
    { term: "l'hameçonnage (m)", definition: 'nettfisking (phishing)' },
    { term: 'les données personnelles (f.pl.)', definition: 'personopplysninger' },
    { term: 'un pare-feu', definition: 'en brannmur (firewall)' },
    { term: 'cordialement', definition: 'med vennlig hilsen (e-post)' },
    { term: 'signaler', definition: 'rapportere' },
    { term: 'la vie privée', definition: 'personvernet / privatlivet' },
    { term: 'une arnaque', definition: 'en svindel' },
  ],
};

// ============================================================================
// KAPITTEL 12.4: Technologie et avenir
// ============================================================================

export const CHAPTER_FRANSK_2_12_4: TextbookChapter = {
  id: 'fransk-2-12-4',
  courseId: 'fransk-2',
  chapterNumber: '12.4',
  title: 'Technologie et avenir',
  subtitle: 'Teknologi og fremtiden – kunstig intelligens og automatisering',
  description: 'I dette kapittelet ser vi på teknologiens rolle i fremtiden. Du lærer fransk vokabular knyttet til kunstig intelligens, automatisering, roboter og fremtidens teknologi, og øver på å diskutere teknologiske utfordringer og muligheter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne diskutere teknologisk utvikling og fremtiden på fransk',
    'Bruke vokabular om kunstig intelligens og automatisering',
    'Uttrykke meninger om teknologiens påvirkning på samfunnet',
  ],
  content: [
    {
      id: 'fransk-2-12-4-intro',
      type: 'text',
      content: `## Technologie et avenir

La technologie transforme notre monde à une vitesse impressionnante. **L'intelligence artificielle (IA)**, **la robotique**, **l'automatisation** et **les énergies renouvelables** sont au cœur des discussions sur l'avenir. Comment ces technologies vont-elles changer notre vie quotidienne, notre travail et notre société ?

En France et dans le monde francophone, ces questions sont activement débattues. La France est d'ailleurs un des pays européens les plus investis dans **la recherche en intelligence artificielle**, avec des laboratoires de pointe à Paris, Toulouse et Grenoble.`,
    },
    {
      id: 'fransk-2-12-4-def-1',
      type: 'definition',
      title: "L'intelligence artificielle et la robotique",
      content: `**Vokabular om kunstig intelligens og robotikk:**

| Fransk | Norsk |
|--------|-------|
| l'intelligence artificielle (IA) (f) | kunstig intelligens (KI) |
| un robot | en robot |
| la robotique | robotikken |
| l'automatisation (f) | automatiseringen |
| un algorithme | en algoritme |
| l'apprentissage automatique (m) | maskinlæring |
| les données massives (f.pl.) / le big data | stordata |
| un réseau neuronal | et nevralt nettverk |
| la reconnaissance faciale | ansiktsgjenkjenning |
| un assistant virtuel | en virtuell assistent |
| la voiture autonome | den selvkjørende bilen |
| un drone | en drone |`,
    },
    {
      id: 'fransk-2-12-4-def-2',
      type: 'definition',
      title: "L'avenir technologique",
      content: `**Vokabular om fremtidens teknologi:**

| Fransk | Norsk |
|--------|-------|
| l'avenir (m) | fremtiden |
| le progrès | fremskrittet |
| l'innovation (f) | innovasjonen |
| les énergies renouvelables (f.pl.) | fornybar energi |
| le développement durable | bærekraftig utvikling |
| la réalité virtuelle | virtuell virkelighet (VR) |
| la réalité augmentée | utvidet virkelighet (AR) |
| l'impression 3D (f) | 3D-printing |
| la biotechnologie | bioteknologien |
| remplacer | erstatte |
| transformer | forandre / transformere |
| améliorer | forbedre |`,
    },
    {
      id: 'fransk-2-12-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Diskutere KI og arbeidslivet',
      problem: `Hvordan kan vi diskutere kunstig intelligens og arbeidslivet på fransk?`,
      solution: `**L'intelligence artificielle va transformer le monde du travail.** Certains emplois vont être **automatisés** : par exemple, les caisses automatiques remplacent déjà les caissiers dans les supermarchés. Les **voitures autonomes** pourraient remplacer les chauffeurs de taxi et de camion.

Mais l'IA va aussi **créer** de nouveaux emplois : des ingénieurs en IA, des spécialistes en données et des éthiciens de la technologie. **Les compétences humaines** comme la créativité, l'empathie et la pensée critique resteront essentielles.

*Kunstig intelligens kommer til å forandre arbeidslivet. Noen jobber vil bli automatisert: for eksempel erstatter selvbetjeningskasser allerede kasserere i supermarkeder. Selvkjørende biler kan erstatte taxi- og lastebilsjåfører. Men KI vil også skape nye jobber: KI-ingeniører, dataspesialister og teknologietikere. Menneskelige ferdigheter som kreativitet, empati og kritisk tenkning vil fortsatt være essensielle.*`,
    },
    {
      id: 'fransk-2-12-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Uttrykke fremtidsvisjoner',
      problem: `Hvordan kan vi snakke om fremtidens teknologi med futurum (le futur simple)?`,
      solution: `Dans le futur, la technologie **changera** beaucoup de choses :

- Les voitures autonomes **circuleront** dans nos villes.
- L'intelligence artificielle **aidera** les médecins à diagnostiquer les maladies.
- Les imprimantes 3D **fabriqueront** des maisons et des organes artificiels.
- La réalité virtuelle **permettra** de voyager sans quitter sa maison.
- Les robots **effectueront** les tâches dangereuses à notre place.

Mais nous **devrons** aussi faire face à des défis : la protection de la vie privée, les inégalités numériques et l'impact environnemental de la technologie.

*I fremtiden vil teknologien forandre mye: Selvkjørende biler vil kjøre i byene våre. KI vil hjelpe leger med å stille diagnoser. 3D-skrivere vil lage hus og kunstige organer. VR vil gjøre det mulig å reise uten å forlate huset. Roboter vil utføre farlige oppgaver for oss. Men vi vil også måtte møte utfordringer: personvern, digitale ulikheter og teknologiens miljøpåvirkning.*`,
    },
    {
      id: 'fransk-2-12-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: "Comment dit-on « kunstig intelligens » en français ?",
        options: [
          { id: 'a', text: "L'intelligence naturelle", isCorrect: false },
          { id: 'b', text: "L'intelligence artificielle", isCorrect: true },
          { id: 'c', text: "L'intelligence digitale", isCorrect: false },
          { id: 'd', text: "L'intelligence mécanique", isCorrect: false },
        ],
        solution: "« L'intelligence artificielle » (abrégé IA) est le terme français pour « kunstig intelligens ». Le sigle IA est l'équivalent de AI en anglais.",
      },
    },
    {
      id: 'fransk-2-12-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Que signifie « une voiture autonome » ?",
        options: [
          { id: 'a', text: 'En elbil', isCorrect: false },
          { id: 'b', text: 'En selvkjørende bil', isCorrect: true },
          { id: 'c', text: 'En hybridbil', isCorrect: false },
          { id: 'd', text: 'En leiebil', isCorrect: false },
        ],
        solution: "« Une voiture autonome » signifie « en selvkjørende bil ». C'est une voiture qui peut se déplacer sans conducteur humain grâce à l'intelligence artificielle et des capteurs.",
      },
    },
    {
      id: 'fransk-2-12-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: "Quel verbe au futur simple complète cette phrase : « Les robots _____ les tâches dangereuses. »",
        options: [
          { id: 'a', text: 'effectuent', isCorrect: false },
          { id: 'b', text: 'effectuaient', isCorrect: false },
          { id: 'c', text: 'effectueront', isCorrect: true },
          { id: 'd', text: 'ont effectué', isCorrect: false },
        ],
        solution: "« Effectueront » est le futur simple du verbe « effectuer ». Le futur simple se forme avec l'infinitif + les terminaisons -ai, -as, -a, -ons, -ez, -ont. « Effectuent » er presens, « effectuaient » er imparfait, og « ont effectué » er passé composé.",
      },
    },
    {
      id: 'fransk-2-12-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: "Skriv 6-8 setninger på fransk om hvordan du tror livet vil være om 20 år. Bruk futurum (le futur simple) og vokabular fra kapittelet. Nevn minst tre teknologier.",
        solution: "Eksempel: Dans 20 ans, je pense que la technologie changera beaucoup notre vie quotidienne. Les voitures autonomes circuleront dans toutes les grandes villes. L'intelligence artificielle aidera les médecins, les enseignants et les ingénieurs dans leur travail. Nous utiliserons la réalité virtuelle pour assister à des cours et à des réunions depuis notre maison. Les robots effectueront les tâches ménagères comme le ménage et la cuisine. L'impression 3D permettra de construire des maisons rapidement et à bas prix. Mais il y aura aussi des défis : il faudra protéger notre vie privée et s'assurer que tout le monde profite de ces progrès.",
      },
    },
    {
      id: 'fransk-2-12-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Skriv en argumenterende tekst på fransk (8-10 setninger) om temaet: «L'intelligence artificielle : une chance ou un danger pour l'humanité ?» (Kunstig intelligens: en sjanse eller en fare for menneskeheten?). Gi argumenter for begge sider og avslutt med din egen mening.",
        solution: "Eksempel: L'intelligence artificielle est l'une des technologies les plus importantes de notre époque, mais elle suscite à la fois de l'espoir et de la peur. D'un côté, l'IA peut améliorer notre vie de nombreuses façons. Elle peut aider à découvrir de nouveaux médicaments, à lutter contre le changement climatique et à rendre l'éducation plus accessible. Les assistants virtuels et les robots peuvent nous libérer des tâches répétitives. De l'autre côté, l'IA pose des risques sérieux. L'automatisation pourrait supprimer des millions d'emplois. La reconnaissance faciale menace notre vie privée. Et si l'IA est mal programmée, elle peut reproduire des discriminations. À mon avis, l'intelligence artificielle est une chance pour l'humanité, mais seulement si nous l'utilisons de manière responsable et éthique. Il est essentiel de créer des lois pour encadrer l'utilisation de l'IA et de s'assurer qu'elle profite à tout le monde.",
      },
    },
    {
      id: 'fransk-2-12-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-12-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: "Lag en presentasjon på fransk (8-10 setninger) av en teknologisk innovasjon du synes er spennende. Beskriv hva den gjør, hvordan den fungerer og hvilken innvirkning den kan ha på samfunnet.",
        solution: "Eksempel: Je voudrais vous présenter l'impression 3D, une technologie qui me fascine. L'impression 3D permet de fabriquer des objets en trois dimensions à partir d'un modèle numérique. L'imprimante dépose des couches de matériau les unes sur les autres pour créer l'objet. On peut imprimer des jouets, des pièces de machines, des prothèses médicales et même des maisons. Cette technologie pourrait révolutionner la médecine en permettant de fabriquer des organes artificiels. Elle pourrait aussi résoudre le problème du logement en construisant des maisons rapidement et à bas prix. L'impact environnemental pourrait être positif car on produirait moins de déchets. Cependant, il y a des risques : on pourrait aussi imprimer des armes. C'est pourquoi il faut réglementer l'utilisation de cette technologie.",
      },
    },
    {
      id: 'fransk-2-12-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært om:

- **L'intelligence artificielle** – kunstig intelligens, algoritmer og maskinlæring
- **La robotique et l'automatisation** – roboter, selvkjørende biler og automatisering av arbeid
- **Les technologies du futur** – VR, AR, 3D-printing og bioteknologi
- **Le futur simple** – å bruke futurum for å snakke om fremtiden
- **Le débat technologique** – å argumentere for og mot teknologisk utvikling
- **Le vocabulaire technique** – franske ord for moderne teknologi og innovasjon`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: "l'intelligence artificielle (f)", definition: 'kunstig intelligens (KI/AI)' },
    { term: "l'automatisation (f)", definition: 'automatiseringen' },
    { term: 'un algorithme', definition: 'en algoritme' },
    { term: 'la voiture autonome', definition: 'den selvkjørende bilen' },
    { term: 'la réalité virtuelle', definition: 'virtuell virkelighet (VR)' },
    { term: "l'impression 3D (f)", definition: '3D-printing' },
    { term: 'le développement durable', definition: 'bærekraftig utvikling' },
    { term: 'les énergies renouvelables (f.pl.)', definition: 'fornybar energi' },
  ],
};

// ============================================================================
// KAPITTEL 13.1: Articles de presse
// ============================================================================

export const CHAPTER_FRANSK_2_13_1: TextbookChapter = {
  id: 'fransk-2-13-1',
  courseId: 'fransk-2',
  chapterNumber: '13.1',
  title: 'Articles de presse',
  subtitle: 'Lese og forstå avisartikler på fransk',
  description: 'I dette kapittelet lærer du å lese og analysere franske avisartikler. Du lærer pressevokabular, tekststrukturer og strategier for leseforståelse av autentiske tekster.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne lese og forstå franske avisartikler',
    'Kjenne pressevokabular og journalistisk stil',
    'Analysere innhold og synspunkter i autentiske tekster',
  ],
  content: [
    {
      id: 'fransk-2-13-1-intro',
      type: 'text',
      content: `## Articles de presse – Avisartikler\n\nÅ lese autentiske avisartikler er en utmerket måte å forbedre franskkunnskapene sine på. Franske aviser som **Le Monde**, **Le Figaro** og **Libération** dekker alt fra politikk til kultur. I dette kapittelet lærer du å forstå oppbygningen av en avisartikkel og viktig pressevokabular.`,
    },
    {
      id: 'fransk-2-13-1-def-1',
      type: 'definition',
      title: 'Le vocabulaire de la presse',
      content: `**Pressevokabular:**\n\n| Fransk | Norsk |\n|--------|-------|\n| un journal | en avis |\n| un quotidien | en dagsavis |\n| un hebdomadaire | et ukentlig magasin |\n| un article | en artikkel |\n| le titre | tittelen / overskriften |\n| le chapeau | ingressen |\n| le journaliste / la journaliste | journalisten |\n| une rubrique | en spalte / seksjon |\n| les faits divers (m.pl.) | diverse nyheter |\n| un éditorial | en lederartikkel |\n| une enquête | en undersøkelse / reportasje |\n| la une | forsiden |`,
    },
    {
      id: 'fransk-2-13-1-def-2',
      type: 'definition',
      title: 'La structure d\'un article',
      content: `**Strukturen i en avisartikkel:**\n\n1. **Le titre** (tittelen) – kort og oppsiktsvekkende\n2. **Le chapeau / le sous-titre** (ingressen) – oppsummerer artikkelen\n3. **L'accroche** (åpningen) – første setning som fanger leseren\n4. **Le corps de l'article** (hoveddelen) – fakta, sitater, analyse\n5. **La chute** (avslutningen) – konklusjon eller åpent spørsmål\n\nJournalister bruker ofte **la règle des 5W**: Qui? (Hvem?) Quoi? (Hva?) Où? (Hvor?) Quand? (Når?) Pourquoi? (Hvorfor?)`,
    },
    {
      id: 'fransk-2-13-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Analysere en avisartikkel',
      problem: `Les denne korte avisartikkelen og identifiser tittel, ingress og de 5W:\n\n**Nouveau record de visiteurs au Louvre**\n*Le musée parisien a accueilli plus de 10 millions de visiteurs en 2023*\n\nLe musée du Louvre a annoncé mardi un nouveau record de fréquentation. Plus de 10 millions de personnes ont visité le célèbre musée parisien en 2023, soit une augmentation de 15% par rapport à l'année précédente. La directrice du musée, Laurence des Cars, a déclaré: «Nous sommes ravis de ce résultat qui montre l'attrait universel de notre collection.»`,
      solution: `**Tittel:** Nouveau record de visiteurs au Louvre\n**Ingress:** Le musée parisien a accueilli plus de 10 millions de visiteurs en 2023\n\n**De 5W:**\n- **Qui?** Le musée du Louvre / la directrice Laurence des Cars\n- **Quoi?** Un nouveau record de fréquentation (10 millions de visiteurs)\n- **Où?** Paris (le musée du Louvre)\n- **Quand?** En 2023, annoncé mardi\n- **Pourquoi?** L'attrait universel de la collection`,
    },
    {
      id: 'fransk-2-13-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «le chapeau» i en avisartikkel?',
        options: [
          { id: 'a', text: 'Overskriften', isCorrect: false },
          { id: 'b', text: 'Ingressen', isCorrect: true },
          { id: 'c', text: 'Forsiden', isCorrect: false },
          { id: 'd', text: 'Avslutningen', isCorrect: false },
        ],
        solution: '«Le chapeau» (bokstavelig: hatten) er pressebegrepet for ingressen – den korte teksten under overskriften som oppsummerer artikkelen.',
      },
    },
    {
      id: 'fransk-2-13-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er «la règle des 5W» i journalistikk?',
        options: [
          { id: 'a', text: 'Fem avsnitt i en artikkel', isCorrect: false },
          { id: 'b', text: 'Fem spørsmål: Qui, Quoi, Où, Quand, Pourquoi', isCorrect: true },
          { id: 'c', text: 'Fem aviser i Frankrike', isCorrect: false },
          { id: 'd', text: 'Fem journalistiske sjangre', isCorrect: false },
        ],
        solution: 'La règle des 5W handler om de fem grunnleggende spørsmålene en artikkel bør svare på: Qui? (Hvem?), Quoi? (Hva?), Où? (Hvor?), Quand? (Når?), Pourquoi? (Hvorfor?).',
      },
    },
    {
      id: 'fransk-2-13-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Oversett disse presserelaterte setningene til fransk:\n\n1. Journalisten skrev en artikkel om klimaendringene.\n2. Forsiden av avisen viser et bilde av presidenten.\n3. Denne ukerapporten inneholder en undersøkelse om unge og sosiale medier.\n4. Lederartikkelen kritiserer den nye loven.',
        solution: '1. Le/La journaliste a écrit un article sur les changements climatiques.\n2. La une du journal montre une photo du président.\n3. Cet hebdomadaire contient une enquête sur les jeunes et les réseaux sociaux.\n4. L\'éditorial critique la nouvelle loi.',
      },
    },
    {
      id: 'fransk-2-13-1-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Le vocabulaire de la presse** – ord som journal, quotidien, chapeau, rubrique\n- **La structure d'un article** – tittel, ingress, hoveddel, avslutning\n- **La règle des 5W** – Qui, Quoi, Où, Quand, Pourquoi\n- **Lesestrategier** – å identifisere hovedpoeng og detaljer i avisartikler`,
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-2-13-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort avisartikkel på fransk (8-10 setninger) om et selvvalgt tema. Artikkelen skal ha en tittel, en ingress og svare på de 5W-spørsmålene.',
        solution: 'Eksempel:\n\n**Titre: Les lycéens norvégiens étudient le français en ligne**\n*Chapeau: Un nouveau programme permet aux élèves de suivre des cours avec des professeurs francophones.*\n\nUn lycée à Oslo a lancé lundi un nouveau programme d\'échange virtuel avec une école à Lyon. Les élèves norvégiens peuvent désormais suivre des cours de français en ligne avec des professeurs natifs. Le programme concerne 50 élèves de niveau 2. La directrice du lycée a expliqué que ce projet vise à améliorer les compétences orales des élèves. Les cours ont lieu deux fois par semaine, le mardi et le jeudi. Les premiers retours des élèves sont très positifs.',
      },
    },
    {
      id: 'fransk-2-13-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign to franske aviser: Le Monde og Le Figaro. Skriv 5-6 setninger på fransk om hva som kjennetegner hver avis (politisk retning, målgruppe, stil).',
        solution: 'Eksempel: Le Monde et Le Figaro sont deux des plus grands quotidiens français. Le Monde est généralement considéré comme un journal de centre-gauche, tandis que Le Figaro est plutôt de centre-droite. Le Monde est connu pour ses analyses approfondies et son style intellectuel. Le Figaro, fondé en 1826, est le plus ancien quotidien français encore publié. Les deux journaux ont une version papier et une version numérique. Le Monde est souvent lu par les universitaires et les cadres, tandis que Le Figaro attire un public plus conservateur.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'un journal', definition: 'en avis' },
    { term: 'un quotidien', definition: 'en dagsavis' },
    { term: 'le chapeau', definition: 'ingressen (i en avisartikkel)' },
    { term: 'la une', definition: 'forsiden (av en avis)' },
    { term: 'une enquête', definition: 'en undersøkelse / reportasje' },
    { term: 'un éditorial', definition: 'en lederartikkel' },
    { term: 'les faits divers', definition: 'diverse nyheter / smånytt' },
    { term: 'une rubrique', definition: 'en spalte / seksjon' },
  ],
};

// ============================================================================
// KAPITTEL 13.2: Petites annonces et documents pratiques
// ============================================================================

export const CHAPTER_FRANSK_2_13_2: TextbookChapter = {
  id: 'fransk-2-13-2',
  courseId: 'fransk-2',
  chapterNumber: '13.2',
  title: 'Petites annonces et documents pratiques',
  subtitle: 'Rubrikkannonser, leieavtaler og stillingsannonser',
  description: 'Lær å lese og forstå praktiske franske dokumenter som rubrikkannonser, boligannonser, stillingsannonser og avtaler. Du øver på vokabular for bolig, arbeid og formelle dokumenter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne lese og forstå franske rubrikkannonser',
    'Forstå bolig- og stillingsannonser',
    'Kjenne vokabular for praktiske dokumenter',
  ],
  content: [
    {
      id: 'fransk-2-13-2-intro',
      type: 'text',
      content: `## Petites annonces – Rubrikkannonser\n\nÅ kunne lese franske rubrikkannonser og praktiske dokumenter er en verdifull ferdighet. Enten du leter etter en bolig, en jobb eller vil selge noe, trenger du å forstå forkortelser og konvensjoner i franske annonser.`,
    },
    {
      id: 'fransk-2-13-2-def-1',
      type: 'definition',
      title: 'Les annonces immobilières',
      content: `**Boligannonser – vanlige forkortelser:**\n\n| Forkortelse | Full form | Norsk |\n|-------------|-----------|-------|\n| appt. | appartement | leilighet |\n| ch. | chambre | soverom |\n| cuis. éq. | cuisine équipée | utstyrt kjøkken |\n| sdb | salle de bains | bad |\n| séj. | séjour | stue |\n| balc. | balcon | balkong |\n| asc. | ascenseur | heis |\n| park. | parking | parkering |\n| m² | mètres carrés | kvadratmeter |\n| cc / charges comprises | charges comprises | inkludert fellesutgifter |\n| loyer | loyer | husleie |\n| à louer / à vendre | à louer / à vendre | til leie / til salgs |`,
    },
    {
      id: 'fransk-2-13-2-def-2',
      type: 'definition',
      title: 'Les offres d\'emploi',
      content: `**Stillingsannonser – nøkkelord:**\n\n| Fransk | Norsk |\n|--------|-------|\n| une offre d'emploi | en stillingsannonse |\n| un poste | en stilling |\n| un contrat à durée indéterminée (CDI) | fast stilling |\n| un contrat à durée déterminée (CDD) | midlertidig stilling |\n| un stage | en praksisplass / internship |\n| le salaire | lønnen |\n| les compétences requises | påkrevde ferdigheter |\n| l'expérience (f) | erfaring |\n| postuler / candidater | søke (på en stilling) |\n| envoyer son CV | sende sin CV |`,
    },
    {
      id: 'fransk-2-13-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Tolke en boligannonse',
      problem: `Oversett denne boligannonsen til norsk:\n\n«À louer – Bel appt. 3 ch., séj., cuis. éq., sdb, balc., asc., park. 75 m². Loyer: 950€/mois cc. Disponible immédiatement. Tél: 01 42 56 78 90»`,
      solution: `**Til leie** – Fin leilighet, 3 soverom, stue, utstyrt kjøkken, bad, balkong, heis, parkering. 75 m². Husleie: 950 euro/mnd inkludert fellesutgifter. Tilgjengelig umiddelbart. Tlf: 01 42 56 78 90`,
    },
    {
      id: 'fransk-2-13-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr forkortelsen «appt.» i en boligannonse?',
        options: [
          { id: 'a', text: 'Appointment (avtale)', isCorrect: false },
          { id: 'b', text: 'Appartement (leilighet)', isCorrect: true },
          { id: 'c', text: 'Approuvé (godkjent)', isCorrect: false },
          { id: 'd', text: 'Appui (støtte)', isCorrect: false },
        ],
        solution: '«Appt.» er forkortelse for «appartement» (leilighet). Dette er en av de vanligste forkortelsene i franske boligannonser.',
      },
    },
    {
      id: 'fransk-2-13-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er forskjellen mellom CDI og CDD?',
        options: [
          { id: 'a', text: 'CDI er heltid, CDD er deltid', isCorrect: false },
          { id: 'b', text: 'CDI er fast stilling, CDD er midlertidig stilling', isCorrect: true },
          { id: 'c', text: 'CDI er privat sektor, CDD er offentlig sektor', isCorrect: false },
          { id: 'd', text: 'CDI er for ledere, CDD er for ansatte', isCorrect: false },
        ],
        solution: 'CDI (contrat à durée indéterminée) er en fast stilling uten sluttdato, mens CDD (contrat à durée déterminée) er en midlertidig stilling med en bestemt sluttdato.',
      },
    },
    {
      id: 'fransk-2-13-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv en boligannonse på fransk for en leilighet med: 2 soverom, stue, kjøkken, bad, 60 m², 800 euro/mnd, 3. etasje med heis, sentralt i Lyon.',
        solution: 'Eksempel: À louer – Bel appt. 2 ch., séj., cuis., sdb. 60 m², 3e étage avec asc. Situé en centre-ville de Lyon. Loyer: 800€/mois cc. Disponible à partir du 1er mars. Contact: lyon.appart@email.fr',
      },
    },
    {
      id: 'fransk-2-13-2-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Les annonces immobilières** – forkortelser og vokabular i boligannonser\n- **Les offres d'emploi** – stillingsannonser, CDI vs. CDD, søknadsprosessen\n- **Lese praktiske dokumenter** – tolke forkortelser og formelle uttrykk`,
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-2-13-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en stillingsannonse på fransk for en sommerjobb som servitør/servitrise på en restaurant i Nice. Inkluder stilling, krav, arbeidstider og kontaktinformasjon.',
        solution: 'Eksempel:\n\n**Offre d\'emploi – Serveur/Serveuse**\n\nRestaurant Le Soleil à Nice recherche un serveur ou une serveuse pour la saison d\'été (juin-septembre). CDD de 4 mois.\n\nCompétences requises: expérience en restauration souhaitée, bonne présentation, français courant, anglais apprécié.\n\nHoraires: 11h-15h et 18h-23h, 5 jours par semaine.\n\nSalaire: SMIC + pourboires.\n\nPour postuler, envoyez votre CV et une lettre de motivation à: recrutement@lesoleil-nice.fr',
      },
    },
    {
      id: 'fransk-2-13-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort e-post på fransk (6-8 setninger) der du svarer på boligannonsen fra eksempelet i kapittelet. Spør om besiktigelse, inkluderte utgifter og innflyttingsdato.',
        solution: 'Eksempel:\n\nObjet: Demande de visite – Appartement 3 chambres\n\nMadame, Monsieur,\n\nJ\'ai vu votre annonce pour l\'appartement de 75 m² à louer et je suis très intéressé(e). Je voudrais savoir s\'il serait possible d\'organiser une visite cette semaine. Pourriez-vous me confirmer si le chauffage et l\'eau sont inclus dans les charges? J\'aimerais également savoir à quelle date l\'appartement est disponible exactement. Je suis étudiant(e) et je cherche un logement pour un an minimum.\n\nJe vous remercie par avance de votre réponse.\n\nCordialement,\n[Ditt navn]',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'une petite annonce', definition: 'en rubrikkannose' },
    { term: 'un appartement (appt.)', definition: 'en leilighet' },
    { term: 'le loyer', definition: 'husleien' },
    { term: 'charges comprises (cc)', definition: 'inkludert fellesutgifter' },
    { term: 'une offre d\'emploi', definition: 'en stillingsannonse' },
    { term: 'un CDI', definition: 'fast stilling (contrat à durée indéterminée)' },
    { term: 'un CDD', definition: 'midlertidig stilling (contrat à durée déterminée)' },
    { term: 'postuler', definition: 'søke (på en stilling)' },
  ],
};

// ============================================================================
// KAPITTEL 13.3: Menus, horaires et documents du quotidien
// ============================================================================

export const CHAPTER_FRANSK_2_13_3: TextbookChapter = {
  id: 'fransk-2-13-3',
  courseId: 'fransk-2',
  chapterNumber: '13.3',
  title: 'Menus, horaires et documents du quotidien',
  subtitle: 'Restaurantmenyer, rutetabeller og kvitteringer',
  description: 'Lær å lese og forstå hverdagsdokumenter på fransk: restaurantmenyer, rutetabeller, åpningstider og kvitteringer. Praktisk vokabular for å klare seg i Frankrike.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne lese franske menyer og bestille mat',
    'Forstå rutetabeller og åpningstider',
    'Tolke kvitteringer og praktiske dokumenter',
  ],
  content: [
    {
      id: 'fransk-2-13-3-intro',
      type: 'text',
      content: `## Menus, horaires et documents du quotidien\n\nNår du reiser i Frankrike, møter du mange hverdagsdokumenter: restaurantmenyer, togbilletter, rutetabeller og kvitteringer. Å kunne lese og forstå disse er viktig for å klare seg i det daglige.`,
    },
    {
      id: 'fransk-2-13-3-def-1',
      type: 'definition',
      title: 'Le menu au restaurant',
      content: `**Restaurantvokabular:**\n\n| Fransk | Norsk |\n|--------|-------|\n| la carte | menyen (spisekartet) |\n| le menu / la formule | dagens meny (fast pris) |\n| l'entrée (f) | forretten |\n| le plat principal | hovedretten |\n| le dessert | desserten |\n| la boisson | drikken |\n| l'addition (f) | regningen |\n| le pourboire | drikkepengene |\n| le plat du jour | dagens rett |\n| à emporter | til å ta med |\n| sur place | å spise her |`,
    },
    {
      id: 'fransk-2-13-3-def-2',
      type: 'definition',
      title: 'Les horaires et transports',
      content: `**Rutetabeller og transport:**\n\n| Fransk | Norsk |\n|--------|-------|\n| les horaires d'ouverture | åpningstidene |\n| l'horaire (m) des trains | togtabellen |\n| le départ | avgangen |\n| l'arrivée (f) | ankomsten |\n| la correspondance | bytte / overgang |\n| le billet aller-retour | tur-retur-billetten |\n| un aller simple | en enkeltbillett |\n| le quai | perrongen |\n| composter | stemple (billett) |\n| en provenance de | fra (opprinnelsessted) |\n| à destination de | til (bestemmelsessted) |`,
    },
    {
      id: 'fransk-2-13-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese en restaurantmeny',
      problem: `Oversett denne menyen:\n\n**Menu du jour – 18,50€**\n- Entrée: Soupe à l'oignon ou Salade niçoise\n- Plat: Bœuf bourguignon ou Filet de saumon grillé\n- Dessert: Crème brûlée ou Tarte aux pommes\n- Boisson: Un verre de vin ou Une eau minérale`,
      solution: `**Dagens meny – 18,50€**\n- Forrett: Løksuppe eller Salade niçoise (salat fra Nice)\n- Hovedrett: Boeuf bourguignon (oksegryte fra Burgund) eller Grillet laksefilet\n- Dessert: Crème brûlée eller Eplekake\n- Drikke: Et glass vin eller En mineralvann\n\n*Merk: «ou» betyr «eller» – du velger én rett per kategori.*`,
    },
    {
      id: 'fransk-2-13-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «l\'addition» på en restaurant?',
        options: [
          { id: 'a', text: 'Menyen', isCorrect: false },
          { id: 'b', text: 'Forretten', isCorrect: false },
          { id: 'c', text: 'Regningen', isCorrect: true },
          { id: 'd', text: 'Drikkepengene', isCorrect: false },
        ],
        solution: '«L\'addition» betyr regningen. Når du vil betale på en restaurant, sier du: «L\'addition, s\'il vous plaît!»',
      },
    },
    {
      id: 'fransk-2-13-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr «un billet aller-retour»?',
        options: [
          { id: 'a', text: 'En enkeltbillett', isCorrect: false },
          { id: 'b', text: 'En tur-retur-billett', isCorrect: true },
          { id: 'c', text: 'En månedsbillett', isCorrect: false },
          { id: 'd', text: 'En førsteklassebillett', isCorrect: false },
        ],
        solution: '«Un billet aller-retour» er en tur-retur-billett. «Aller» betyr å gå/reise (tur), «retour» betyr tilbake (retur). En enkeltbillett er «un aller simple».',
      },
    },
    {
      id: 'fransk-2-13-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv en dialog på fransk (6-8 replikker) der du bestiller mat på en restaurant. Bruk vokabularet fra kapittelet.',
        solution: 'Eksempel:\n\n— Bonjour, vous avez choisi?\n— Oui, je voudrais le menu du jour, s\'il vous plaît.\n— Très bien. Comme entrée, soupe à l\'oignon ou salade niçoise?\n— La soupe à l\'oignon, s\'il vous plaît.\n— Et comme plat principal?\n— Le filet de saumon grillé.\n— Et comme dessert?\n— La crème brûlée. Et comme boisson, un verre de vin rouge.\n— Parfait, je vous apporte ça tout de suite.',
      },
    },
    {
      id: 'fransk-2-13-3-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Le menu** – å lese og forstå restaurantmenyer\n- **Les horaires** – rutetabeller, avganger og ankomster\n- **Les documents pratiques** – kvitteringer, billetter og åpningstider\n- **Commander au restaurant** – å bestille mat og be om regningen`,
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-2-13-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en komplett restaurantmeny på fransk med forrett, hovedrett og dessert (minst 3 valg per kategori). Inkluder priser i euro.',
        solution: 'Eksempel:\n\n**Restaurant Le Petit Parisien**\n\nEntrées:\n- Soupe de poisson – 8€\n- Salade de chèvre chaud – 9€\n- Escargots de Bourgogne (6 pièces) – 11€\n\nPlats principaux:\n- Steak-frites – 16€\n- Poulet rôti aux herbes de Provence – 15€\n- Risotto aux champignons – 14€\n- Filet de bar à la provençale – 18€\n\nDesserts:\n- Mousse au chocolat – 7€\n- Tarte tatin – 8€\n- Île flottante – 7€\n\nBoissons:\n- Eau minérale (50cl) – 3€\n- Vin rouge/blanc (verre) – 5€\n- Café – 2,50€',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la carte', definition: 'menyen / spisekartet' },
    { term: 'l\'addition (f)', definition: 'regningen' },
    { term: 'le plat du jour', definition: 'dagens rett' },
    { term: 'un billet aller-retour', definition: 'en tur-retur-billett' },
    { term: 'la correspondance', definition: 'bytte / overgang (transport)' },
    { term: 'les horaires d\'ouverture', definition: 'åpningstidene' },
    { term: 'à emporter', definition: 'til å ta med' },
    { term: 'le quai', definition: 'perrongen' },
  ],
};

// ============================================================================
// KAPITTEL 13.4: Poèmes et chansons françaises
// ============================================================================

export const CHAPTER_FRANSK_2_13_4: TextbookChapter = {
  id: 'fransk-2-13-4',
  courseId: 'fransk-2',
  chapterNumber: '13.4',
  title: 'Poèmes et chansons françaises',
  subtitle: 'Fransk poesi og sanger – litterær analyse og rim',
  description: 'Utforsk fransk poesi og sanger. Lær om berømte franske diktere som Prévert og Baudelaire, analyser rim og rytme, og opplev hvordan poesi og musikk beriker det franske språket.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne lese og analysere franske dikt',
    'Kjenne til berømte franske diktere og sangere',
    'Forstå rim, rytme og poetiske virkemidler',
  ],
  content: [
    {
      id: 'fransk-2-13-4-intro',
      type: 'text',
      content: `## Poèmes et chansons françaises\n\nFrankrike har en rik tradisjon for poesi og chanson (viser). Fra **Jacques Prévert** til **Édith Piaf**, fra **Charles Baudelaire** til **Stromae** – poesi og musikk er en viktig del av fransk kultur. I dette kapittelet utforsker vi berømte dikt og sanger, og lærer å analysere poetiske virkemidler.`,
    },
    {
      id: 'fransk-2-13-4-def-1',
      type: 'definition',
      title: 'Le vocabulaire poétique',
      content: `**Poetisk vokabular:**\n\n| Fransk | Norsk |\n|--------|-------|\n| un poème | et dikt |\n| un vers | en verselinje |\n| une strophe | en strofe / et vers |\n| la rime | rimet |\n| la rime plate (AABB) | parrim |\n| la rime croisée (ABAB) | kryssrim |\n| la rime embrassée (ABBA) | omsluttende rim |\n| une métaphore | en metafor |\n| une comparaison | en sammenligning |\n| le rythme | rytmen |\n| une syllabe | en stavelse |\n| un alexandrin | en aleksandriner (12 stavelser) |`,
    },
    {
      id: 'fransk-2-13-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Analysere et dikt',
      problem: `Les dette kjente diktet av Jacques Prévert og identifiser temapet og virkemidlene:\n\n**Déjeuner du matin** (utdrag)\n*Il a mis le café*\n*Dans la tasse*\n*Il a mis le lait*\n*Dans la tasse de café*\n*Il a mis le sucre*\n*Dans le café au lait*`,
      solution: `**Analyse:**\n\n- **Tema:** Hverdagslig morgenritual, avstand mellom to mennesker\n- **Stil:** Enkel, repetitiv – gjentar «Il a mis» (han la)\n- **Verbtid:** Passé composé – handlinger som er fullført\n- **Virkemidler:**\n  - Gjentagelse (anafora): «Il a mis» gjentas i hver linje\n  - Oppbygging: Enkel handling bygges opp lag for lag\n  - Fravær av følelser: Bare handlinger beskrives, ikke tanker\n\n*Prévert (1900-1977) er kjent for sin enkle, hverdagslige stil som likevel formidler dype følelser.*`,
    },
    {
      id: 'fransk-2-13-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er «une rime croisée»?',
        options: [
          { id: 'a', text: 'Parrim (AABB)', isCorrect: false },
          { id: 'b', text: 'Kryssrim (ABAB)', isCorrect: true },
          { id: 'c', text: 'Omsluttende rim (ABBA)', isCorrect: false },
          { id: 'd', text: 'Fritt vers (ingen rim)', isCorrect: false },
        ],
        solution: '«Une rime croisée» er kryssrim med mønsteret ABAB. «Croisée» betyr krysset/krysset over, fordi rimene alternerer.',
      },
    },
    {
      id: 'fransk-2-13-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er et «alexandrin» i fransk poesi?',
        options: [
          { id: 'a', text: 'Et dikt med 6 strofer', isCorrect: false },
          { id: 'b', text: 'En verselinje med 12 stavelser', isCorrect: true },
          { id: 'c', text: 'Et dikt skrevet i Paris', isCorrect: false },
          { id: 'd', text: 'En verselinje uten rim', isCorrect: false },
        ],
        solution: 'Et «alexandrin» er en verselinje med nøyaktig 12 stavelser, og er det mest klassiske versemålet i fransk poesi. Det er oppkalt etter diktet «Le Roman d\'Alexandre» fra 1100-tallet.',
      },
    },
    {
      id: 'fransk-2-13-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: 'Skriv et kort dikt på fransk (4-6 linjer) med kryssrim (ABAB). Velg et tema som natur, vennskap eller reise.',
        solution: 'Eksempel:\n\nLe soleil brille sur la mer (A)\nLes vagues dansent doucement (B)\nJe respire le bon air (A)\nEt je souris tendrement (B)\n\n(Solen skinner på havet / Bølgene danser forsiktig / Jeg puster inn den gode luften / Og jeg smiler ømt)',
      },
    },
    {
      id: 'fransk-2-13-4-oppsummering',
      type: 'text',
      content: `## Oppsummering\n\nI dette kapittelet har du lært:\n\n- **Le vocabulaire poétique** – vers, strophe, rime, métaphore\n- **Les types de rimes** – plate (AABB), croisée (ABAB), embrassée (ABBA)\n- **L'analyse poétique** – å identifisere tema, stil og virkemidler\n- **Les poètes français** – Prévert, Baudelaire og den franske poesitradisjonen`,
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-2-13-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en fransk sang du kjenner (f.eks. av Édith Piaf, Stromae, Zaz eller Indila). Skriv en kort analyse på fransk (6-8 setninger) der du beskriver temaet, stemningen og eventuelle poetiske virkemidler.',
        solution: 'Eksempel (La vie en rose – Édith Piaf):\n\n«La vie en rose» est une chanson célèbre d\'Édith Piaf, sortie en 1947. Le thème principal est l\'amour. Piaf chante qu\'elle voit la vie en rose quand elle est avec son amoureux. La métaphore «la vie en rose» signifie voir tout de manière positive et optimiste. Le rythme est doux et romantique. La chanson utilise des images poétiques comme «des yeux qui font baisser les miens» (øyne som får mine til å senke seg). Cette chanson est devenue un symbole de la chanson française dans le monde entier.',
      },
    },
    {
      id: 'fransk-2-13-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-13-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et dikt på fransk (6-8 linjer) der du bruker minst én metafor og ett rimmønster (parrim, kryssrim eller omsluttende rim). Marker hvilke virkemidler du bruker.',
        solution: 'Eksempel (kryssrim ABAB):\n\nMon cœur est un jardin fleuri (A)\nOù poussent les souvenirs (B)\nDans le silence de la nuit (A)\nJe rêve de l\'avenir (B)\nLes étoiles sont des diamants (C)\nQui brillent dans le ciel noir (D)\nEt la lune est un croissant (C)\nQui me donne de l\'espoir (D)\n\nVirkemidler:\n- Metafor: «Mon cœur est un jardin fleuri» (Hjertet mitt er en blomstrende hage)\n- Metafor: «Les étoiles sont des diamants» (Stjernene er diamanter)\n- Sammenligning: «la lune est un croissant» (månen er en halvmåne)\n- Kryssrim: ABAB / CDCD',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'un poème', definition: 'et dikt' },
    { term: 'un vers', definition: 'en verselinje' },
    { term: 'une strophe', definition: 'en strofe / et vers' },
    { term: 'la rime', definition: 'rimet' },
    { term: 'une métaphore', definition: 'en metafor' },
    { term: 'un alexandrin', definition: 'en aleksandriner (verselinje med 12 stavelser)' },
    { term: 'une chanson', definition: 'en sang / vise' },
    { term: 'une comparaison', definition: 'en sammenligning' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const FRANSK_2_CHAPTERS_11_13: TextbookChapter[] = [
  CHAPTER_FRANSK_2_11_1,
  CHAPTER_FRANSK_2_11_2,
  CHAPTER_FRANSK_2_11_3,
  CHAPTER_FRANSK_2_11_4,
  CHAPTER_FRANSK_2_12_1,
  CHAPTER_FRANSK_2_12_2,
  CHAPTER_FRANSK_2_12_3,
  CHAPTER_FRANSK_2_12_4,
  CHAPTER_FRANSK_2_13_1,
  CHAPTER_FRANSK_2_13_2,
  CHAPTER_FRANSK_2_13_3,
  CHAPTER_FRANSK_2_13_4,
];
