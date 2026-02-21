/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 3 - Kapittel 9-10
 *
 * Kapittel 9: Frankofoni (La francophonie)
 * Kapittel 10: Eksamensforberedelse (Préparation à l'examen)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: L'Afrique francophone - Fransktalende Afrika
// ============================================================================

export const CHAPTER_FRANSK_3_9_1: TextbookChapter = {
  id: 'fransk-3-9-1',
  courseId: 'fransk-3',
  chapterNumber: '9.1',
  title: "L'Afrique francophone",
  subtitle: 'Fransktalende Afrika',
  description: 'Lær om fransktalende land i Afrika, kolonialismens historie, språk og litteratur fra Sénégal, Elfenbenskysten, Kongo og Madagaskar.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for fransktalende land i Afrika og deres historie',
    'diskutere kolonialismens betydning for språksituasjonen i Afrika',
  ],
  content: [
    {
      id: 'fransk-3-9-1-intro',
      type: 'text',
      content: `## L'Afrique francophone - Fransktalende Afrika

L'Afrique est le continent ou le français est le plus parle en nombre de locuteurs. Afrika er kontinentet der fransk snakkes av flest mennesker. Over 140 millioner mennesker i Afrika bruker fransk daglig, enten som førstespråk, andrespråk eller administrasjonsspråk.

Den franske tilstedeværelsen i Afrika begynte med kolonialismen på 1600-tallet og formet kontinentet politisk, kulturelt og språklig. I dag er fransk offisielt språk i 21 afrikanske land.`,
    },
    {
      id: 'fransk-3-9-1-text-1',
      type: 'text',
      content: `## Viktige fransktalende land i Afrika

| Land | Fransk navn | Hovedstad | Uavhengighet |
|------|-------------|-----------|--------------|
| Sénégal | le Sénégal | Dakar | 1960 |
| Elfenbenskysten | la Côte d'Ivoire | Yamoussoukro | 1960 |
| Kongo (DR) | la République démocratique du Congo | Kinshasa | 1960 |
| Madagaskar | Madagascar | Antananarivo | 1960 |
| Kamerun | le Cameroun | Yaoundé | 1960 |
| Mali | le Mali | Bamako | 1960 |

Alle disse landene ble uavhengige rundt 1960, et år som ofte kalles **l'année de l'Afrique** (Afrikas år).`,
    },
    {
      id: 'fransk-3-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Kolonihistorie',
      problem: `Les teksten og svar på spørsmålene:

"La France a colonisé une grande partie de l'Afrique de l'Ouest et de l'Afrique centrale à partir du XIXe siècle. L'administration coloniale a imposé le français comme langue officielle, remplaçant souvent les langues locales dans l'éducation et le gouvernement."

a) Hvilke deler av Afrika koloniserte Frankrike?
b) Hva påtvang koloniadministrasjonen?
c) Hva ble erstattet?`,
      solution: `a) Frankrike koloniserte store deler av Vest-Afrika (l'Afrique de l'Ouest) og Sentral-Afrika (l'Afrique centrale).
b) Koloniadministrasjonen påtvang fransk som offisielt språk (a imposé le français comme langue officielle).
c) De lokale språkene ble erstattet i utdanning og forvaltning (remplaçant les langues locales dans l'éducation et le gouvernement).`,
    },
    {
      id: 'fransk-3-9-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Sénégal ble uavhengig i 1960.', solution: 'Le Sénégal est devenu indépendant en 1960.' },
          { label: 'b', task: 'Fransk er offisielt språk i mange afrikanske land.', solution: 'Le français est la langue officielle dans de nombreux pays africains.' },
          { label: 'c', task: 'Kolonialismen formet kontinentet.', solution: 'Le colonialisme a façonné le continent.' },
          { label: 'd', task: 'Over 140 millioner mennesker snakker fransk i Afrika.', solution: 'Plus de 140 millions de personnes parlent français en Afrique.' },
        ],
        solution: 'a) Le Sénégal est devenu indépendant en 1960. b) Le français est la langue officielle dans de nombreux pays africains. c) Le colonialisme a façonné le continent. d) Plus de 140 millions de personnes parlent français en Afrique.',
        hints: ['devenir indépendant = bli uavhengig', 'faconner = forme'],
      },
    },
    {
      id: 'fransk-3-9-1-text-2',
      type: 'text',
      content: `## La négritude - Negritude-bevegelsen

Negritude-bevegelsen oppsto på 1930-tallet som en litterær og politisk bevegelse. Den ble grunnlagt av tre sentrale skikkelser:

- **Léopold Sédar Senghor** (Sénégal, 1906-2001): Poet, filosof og Senegals første président. Mottok flere litterære priser.
- **Aimé Césaire** (Martinique, 1913-2008): Poet og politiker fra Martinique. Skrev det berømte verket *Cahier d'un retour au pays natal*.
- **Leon-Gontran Damas** (Fransk Guyana, 1912-1978): Poet som kjempet mot kulturell assimilasjon.

Bevegelsen fremmet afrikansk identitet og kultur som motreaksjon mot kolonial undertrykkelse.`,
    },
    {
      id: 'fransk-3-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Negritude-bevegelsen',
      problem: `Les utdraget fra Senghor og analyser:

"Je ne veux etre ni Blanc, ni Noir.
Je veux etre un homme parmi les hommes."

a) Hva uttrykker Senghor i disse linjene?
b) Hvordan relaterer dette seg til négritude-bevegelsen?`,
      solution: `a) Senghor uttrykker et ønske om likeverd - han vil verken være hvit eller svart, men et menneske blant mennesker ("un homme parmi les hommes").
b) Negritude-bevegelsen handlet om å gjenvinne afrikansk verdighet og identitet, men også om universell humanisme. Senghor ønsket å overskride raseskiller og fremme menneskets felles verdi.`,
    },
    {
      id: 'fransk-3-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Svar på spørsmålene om négritude-bevegelsen.',
        subTasks: [
          { label: 'a', task: 'Når oppsto négritude-bevegelsen?', solution: 'Negritude-bevegelsen oppsto på 1930-tallet (dans les annees 1930).' },
          { label: 'b', task: 'Nevn de tre grunnleggerne.', solution: 'Léopold Sédar Senghor, Aimé Césaire og Leon-Gontran Damas.' },
          { label: 'c', task: 'Hva var hovedmålet til bevegelsen?', solution: 'Å fremme afrikansk identitet og kultur som motreaksjon mot kolonial undertrykkelse.' },
          { label: 'd', task: 'Hva het Cesaires mest kjente verk?', solution: 'Cahier d\'un retour au pays natal.' },
        ],
        solution: 'a) På 1930-tallet. b) Senghor, Césaire og Damas. c) Å fremme afrikansk identitet og kultur. d) Cahier d\'un retour au pays natal.',
        hints: ['la négritude = négritude-bevegelsen', 'le colonialisme = kolonialismen'],
      },
    },
    {
      id: 'fransk-3-9-1-text-3',
      type: 'text',
      content: `## Språk og flerspråklighet i Afrika

De fleste afrikanske land er flerspråklige. Folk snakker ofte:
1. Et **lokalt språk** (langue locale) - morsmalet
2. Et **regionalt språk** (langue vehiculaire) - for kommunikasjon mellom grupper
3. **Fransk** (le français) - som offisielt språk i utdanning og forvaltning

| Språkbegrep | Fransk | Eksempel |
|-------------|--------|----------|
| Morsmalet | la langue maternelle | wolof i Sénégal |
| Fellesspråk | la langue vehiculaire | lingala i Kongo |
| Offisielt språk | la langue officielle | le français |
| Flerspråklighet | le plurilinguisme | vanlig i hele Afrika |`,
    },
    {
      id: 'fransk-3-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Språklig mangfold',
      problem: `Oversett til norsk:
a) La langue maternelle est la première langue qu'on apprend.
b) Le plurilinguisme est une richesse culturelle.
c) Le français coexiste avec les langues locales.`,
      solution: `a) Morsmalet er det første språket man lærer.
b) Flerspråklighet er en kulturell rikdom.
c) Fransk eksisterer side om side med de lokale språkene.`,
    },
    {
      id: 'fransk-3-9-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Morsmalet er viktig for identiteten.', solution: 'La langue maternelle est importante pour l\'identité.' },
          { label: 'b', task: 'De fleste afrikanere snakker flere språk.', solution: 'La plupart des Africains parlent plusieurs langues.' },
          { label: 'c', task: 'Fransk er administrasjonsspråk i Sénégal.', solution: 'Le français est la langue d\'administration au Sénégal.' },
        ],
        solution: 'a) La langue maternelle est importante pour l\'identité. b) La plupart des Africains parlent plusieurs langues. c) Le français est la langue d\'administration au Sénégal.',
        hints: ['la langue maternelle = morsmalet', 'la plupart de = de fleste av'],
      },
    },
    {
      id: 'fransk-3-9-1-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige begreper

| Fransk | Norsk |
|--------|-------|
| la colonisation | koloniseringen |
| l'indépendance | uavhengigheten |
| la décolonisation | avkoloniseringen |
| la négritude | négritude-bevegelsen |
| la langue officielle | det offisielle språket |
| le plurilinguisme | flerspråklighet |
| l'identité culturelle | kulturell identitet |
| le patrimoine | kulturarven |`,
    },
    {
      id: 'fransk-3-9-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva betyr disse begrepene på norsk?',
        subTasks: [
          { label: 'a', task: 'la décolonisation', solution: 'avkoloniseringen' },
          { label: 'b', task: 'le patrimoine', solution: 'kulturarven' },
          { label: 'c', task: 'l\'identité culturelle', solution: 'kulturell identitet' },
          { label: 'd', task: 'l\'indépendance', solution: 'uavhengigheten' },
        ],
        solution: 'a) avkoloniseringen, b) kulturarven, c) kulturell identitet, d) uavhengigheten',
        hints: ['de- = av- (prefiks som betyr fjerning)', 'patrimoine kommer fra latin pater = far'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2: Le Québec et le Canada français - Québec og fransk Canada
// ============================================================================

export const CHAPTER_FRANSK_3_9_2: TextbookChapter = {
  id: 'fransk-3-9-2',
  courseId: 'fransk-3',
  chapterNumber: '9.2',
  title: 'Le Québec et le Canada français',
  subtitle: 'Québec og fransk Canada',
  description: 'Lær om Québec, fransk-kanadisk historie, språkbevaring, joual, Acadie og tospråklighetspolitikk i Canada.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for Québecs historie og fransk-kanadisk identitet',
    'diskutere språkbevaring og tospråklighetspolitikk i Canada',
  ],
  content: [
    {
      id: 'fransk-3-9-2-intro',
      type: 'text',
      content: `## Le Québec et le Canada français

Le Québec est une province canadienne ou le français est la langue officielle. Québec er en kanadisk provins der fransk er det offisielle språket. Med over 8 millioner innbyggere er Québec det største fransktalende området utenfor Frankrike.

Historien om fransk Canada begynner i 1534, da Jacques Cartier utforsket St. Lawrence-elven, og i 1608 da Samuel de Champlain grunnla byen Québec.`,
    },
    {
      id: 'fransk-3-9-2-text-1',
      type: 'text',
      content: `## Historisk bakgrunn

| Årstall | Hendelse | Fransk |
|---------|----------|--------|
| 1534 | Cartier utforsker St. Lawrence | Cartier explore le Saint-Laurent |
| 1608 | Champlain grunnlegger Québec | Champlain fondé Québec |
| 1763 | Frankrike avgir Canada til Storbritannia | La France cède le Canada à la Grande-Bretagne |
| 1867 | Det kanadiske forbundet dannes | La Confédération canadienne est formée |
| 1960 | Den stille revolusjonen begynner | La Révolution tranquille commence |
| 1977 | Lov 101 (Charter of the French Language) | La Loi 101 est adoptée |

Etter **la Conquête** (erobringen) i 1763 ble de fransk-kanadiske innbyggerne en minoritet i det britisk-styrte Canada. Til tross for dette bevarte de språket og kulturen sin gjennom kirken, familien og lokale institusjoner.`,
    },
    {
      id: 'fransk-3-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Québecs historie',
      problem: `Les teksten og svar på spørsmålene:

"La Révolution tranquille des années 1960 a transformé le Québec. Les Québécois ont revendiqué leur identité francophone et ont modernisé leur société. Le gouvernement a pris le contrôle de l'éducation et de la santé."

a) Hva er la Révolution tranquille?
b) Hva krevde quebecerne?
c) Hva tok regjeringen kontroll over?`,
      solution: `a) Den stille revolusjonen var en moderniserings- og reformperiode på 1960-tallet som transformerte Québec (a transformé le Québec).
b) Québecerne krevde sin franskspråklige identitet (ont revendiqué leur identité francophone) og moderniserte samfunnet.
c) Regjeringen tok kontroll over utdanning (l'éducation) og helsevesen (la sante).`,
    },
    {
      id: 'fransk-3-9-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Québec ble grunnlagt i 1608.', solution: 'Québec a été fondé en 1608.' },
          { label: 'b', task: 'Den stille revolusjonen forandret Québec.', solution: 'La Révolution tranquille a transformé le Québec.' },
          { label: 'c', task: 'Fransk er det offisielle språket i Québec.', solution: 'Le français est la langue officielle du Québec.' },
          { label: 'd', task: 'Québecerne bevarte språket sitt.', solution: 'Les Québécois ont conservé leur langue.' },
        ],
        solution: 'a) Québec a été fondé en 1608. b) La Révolution tranquille a transformé le Québec. c) Le français est la langue officielle du Québec. d) Les Québécois ont conservé leur langue.',
        hints: ['fonder = grunnlegge', 'transformer = forandre/transformere'],
      },
    },
    {
      id: 'fransk-3-9-2-text-2',
      type: 'text',
      content: `## Le joual et le français quebecois

Québecfransken skiller seg fra europeisk fransk på flere måter:

**Uttale:**
- "moi" uttales ofte som "moe"
- "tu" foran vokal kan bli "t'" (T'es-tu la? = Es-tu la?)

**Ordforråd (les quebecismes):**

| Québecfransk | Europeisk fransk | Norsk |
|--------------|-----------------|-------|
| une blonde | une petite amie | en kjæreste |
| un char | une voiture | en bil |
| magasiner | faire du shopping | handle |
| achaler | ennuyer | plage |
| icitte | ici | her |
| pantoute | pas du tout | overhodet ikke |

**Le joual** er en folkelig dialekt fra Montreal som brukes i litteratur og teater for å uttrykke quebecsk identitet.`,
    },
    {
      id: 'fransk-3-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Québecfransk vs. europeisk fransk',
      problem: `"Oversett" fra quebecfransk til standardfransk:
a) J'ai pris mon char pour aller magasiner.
b) Ma blonde m'achale pantoute.
c) Viens icitte!`,
      solution: `a) J'ai pris ma voiture pour aller faire du shopping. (Jeg tok bilen for å dra og handle.)
b) Ma petite amie ne m'ennuie pas du tout. (Kjærestene min plager meg overhodet ikke.)
c) Viens ici! (Kom hit!)`,
    },
    {
      id: 'fransk-3-9-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Koble quebecfransk med standardfransk.',
        subTasks: [
          { label: 'a', task: 'Hva betyr "un char" på standardfransk?', solution: 'une voiture (en bil)' },
          { label: 'b', task: 'Hva betyr "pantoute" på standardfransk?', solution: 'pas du tout (overhodet ikke)' },
          { label: 'c', task: 'Hva betyr "achaler" på standardfransk?', solution: 'ennuyer (plage/irritere)' },
          { label: 'd', task: 'Hva er "le joual"?', solution: 'En folkelig dialekt fra Montreal som brukes i litteratur og teater.' },
        ],
        solution: 'a) une voiture, b) pas du tout, c) ennuyer, d) En folkelig dialekt fra Montreal.',
        hints: ['quebecismer = ord som er unike for quebecfransk', 'joual kommer fra uttalen av "cheval" (hest)'],
      },
    },
    {
      id: 'fransk-3-9-2-text-3',
      type: 'text',
      content: `## L'Acadie et le bilinguisme canadien

**L'Acadie** (Acadia) er et fransktalende område i de maritime provinsene i østlige Canada (New Brunswick, Nova Scotia, Prince Edward Island). Acadierne ble deportert av britene i 1755 (**le Grand Dérangement**), men mange vendte tilbake.

**Tospråklighetspolitikk:**
- I 1969 vedtok Canada **la Loi sur les langues officielles** (loven om offisielle språk), som ga fransk og engelsk lik status på føderalt nivå.
- I 1977 vedtok Québec **la Loi 101**, som gjorde fransk til det eneste offisielle språket i provinsen.
- New Brunswick er Canadas eneste offisielt tospråklige provins.`,
    },
    {
      id: 'fransk-3-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Tospråklighetspolitikk',
      problem: `Oversett til norsk:
a) Le Canada est un pays officiellement bilingue.
b) La Loi 101 protégé la langue française au Québec.
c) Les Acadiens ont été déportés en 1755.`,
      solution: `a) Canada er et offisielt tospråklig land.
b) Lov 101 beskytter det franske språket i Québec.
c) Acadierne ble deportert i 1755.`,
    },
    {
      id: 'fransk-3-9-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på spørsmålene om Acadie og tospråklighetspolitikk.',
        subTasks: [
          { label: 'a', task: 'Hva er le Grand Dérangement?', solution: 'Deportasjonen av acadierne fra de maritime provinsene i 1755.' },
          { label: 'b', task: 'Hva er la Loi 101?', solution: 'En lov fra 1977 som gjorde fransk til det eneste offisielle språket i Québec.' },
          { label: 'c', task: 'Hvilken provins er offisielt tospråklig?', solution: 'New Brunswick er Canadas eneste offisielt tospråklige provins.' },
        ],
        solution: 'a) Deportasjonen av acadierne i 1755. b) Lov 101, som beskytter fransk i Québec. c) New Brunswick.',
        hints: ['derangement = forstyrrelse/forflytning', 'bilingue = tospråklig'],
      },
    },
    {
      id: 'fransk-3-9-2-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige begreper

| Fransk | Norsk |
|--------|-------|
| la Nouvelle-France | Ny-Frankrike |
| la Conquête | erobringen (1763) |
| la Révolution tranquille | den stille revolusjonen |
| la Loi 101 | lov 101 (språklov) |
| le bilinguisme | tospråklighet |
| le quebecisme | quebecsk særord |
| le joual | folkelig Montreal-dialekt |
| le Grand Dérangement | deportasjonen av acadierne |`,
    },
    {
      id: 'fransk-3-9-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva betyr disse begrepene på norsk?',
        subTasks: [
          { label: 'a', task: 'la Nouvelle-France', solution: 'Ny-Frankrike' },
          { label: 'b', task: 'la Révolution tranquille', solution: 'den stille revolusjonen' },
          { label: 'c', task: 'le bilinguisme', solution: 'tospråklighet' },
          { label: 'd', task: 'la Conquête', solution: 'erobringen (1763)' },
        ],
        solution: 'a) Ny-Frankrike, b) den stille revolusjonen, c) tospråklighet, d) erobringen (1763)',
        hints: ['nouvelle = ny', 'tranquille = stille/rolig', 'conquête = erobring'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.3: La francophonie en Asie et Pacifique - Frankofoni i Asia og Stillehavet
// ============================================================================

export const CHAPTER_FRANSK_3_9_3: TextbookChapter = {
  id: 'fransk-3-9-3',
  courseId: 'fransk-3',
  chapterNumber: '9.3',
  title: 'La francophonie en Asie et Pacifique',
  subtitle: 'Frankofoni i Asia og Stillehavet',
  description: 'Lær om den franske tilstedeværelsen i Vietnam, Laos, Kambodsja og Polynesia, samt kreolspråk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for den franske tilstedeværelsen i Asia og Stillehavet',
    'diskutere kreolspråk og deres forhold til fransk',
  ],
  content: [
    {
      id: 'fransk-3-9-3-intro',
      type: 'text',
      content: `## La francophonie en Asie et Pacifique

La presence française en Asie et dans le Pacifique remonte au XIXe siècle. Den franske tilstedeværelsen i Asia og Stillehavet går tilbake til 1800-tallet. Frankrike etablerte kolonier i Indokina (Vietnam, Laos, Kambodsja) og i Stillehavet (Ny-Caledonia, Fransk Polynesia).

Selv om fransk ikke lenger er hovedspråk i de fleste av disse områdene, har det satt dype spor i kultur, arkitektur og utdanningssystemer.`,
    },
    {
      id: 'fransk-3-9-3-text-1',
      type: 'text',
      content: `## L'Indochine française - Fransk Indokina

Fransk Indokina (1887-1954) besto av tre land:

| Land | Fransk navn | Hovedstad | Kolonitid |
|------|-------------|-----------|-----------|
| Vietnam | le Vietnam | Hanoi | 1858-1954 |
| Laos | le Laos | Vientiane | 1893-1954 |
| Kambodsja | le Cambodge | Phnom Penh | 1863-1954 |

**Viktige hendelser:**
- 1858: Frankrike begynner koloniseringen av Vietnam
- 1887: Dannelsen av l'Indochine française
- 1954: Slaget ved Dien Bien Phu - Frankrike taper og trekker seg ut
- Fransk innflytelse ses fortsatt i arkitektur, matkultur og utdanning

I dag er fransk et minoritetsspråk i disse landene, men alle tre er medlemmer av **l'Organisation internationale de la Francophonie (OIF)**.`,
    },
    {
      id: 'fransk-3-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Fransk Indokina',
      problem: `Les teksten og svar på spørsmålene:

"La défaite française à Dien Bien Phu en 1954 a marqué la fin de la présence coloniale française en Indochine. Cependant, l'héritage culturel français reste visible dans l'architecture, la gastronomie et le système éducatif."

a) Hva markerte slutten på fransk tilstedeværelse i Indokina?
b) Når skjedde dette?
c) Hvor ser man fortsatt fransk innflytelse?`,
      solution: `a) Det franske nederlaget ved Dien Bien Phu (la défaite française à Dien Bien Phu) markerte slutten.
b) Det skjedde i 1954.
c) Man ser fortsatt fransk innflytelse i arkitektur (l'architecture), gastronomi (la gastronomie) og utdanningssystemet (le système éducatif).`,
    },
    {
      id: 'fransk-3-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Fransk Indokina ble dannet i 1887.', solution: 'L\'Indochine française a été formée en 1887.' },
          { label: 'b', task: 'Frankrike koloniserte Vietnam i 1858.', solution: 'La France a colonisé le Vietnam en 1858.' },
          { label: 'c', task: 'Den franske kulturarven er fortsatt synlig.', solution: 'L\'héritage culturel français reste visible.' },
          { label: 'd', task: 'Disse landene er medlemmer av OIF.', solution: 'Ces pays sont membres de l\'OIF.' },
        ],
        solution: 'a) L\'Indochine française a été formée en 1887. b) La France a colonisé le Vietnam en 1858. c) L\'héritage culturel français reste visible. d) Ces pays sont membres de l\'OIF.',
        hints: ['former = danne', 'l\'héritage = arven/kulturarven'],
      },
    },
    {
      id: 'fransk-3-9-3-text-2',
      type: 'text',
      content: `## Le Pacifique francophone - Det fransktalende Stillehavet

Frankrike har fortsatt territorier i Stillehavet:

| Territorium | Status | Hovedstad |
|-------------|--------|-----------|
| Ny-Caledonia | Oversjøisk territorium | Nouméa |
| Fransk Polynesia | Oversjøisk fellesskap | Papeete (Tahiti) |
| Wallis og Futuna | Oversjøisk fellesskap | Mata-Utu |

Disse områdene har en unik blanding av **fransk kultur** og **polynesisk/melanesisk kultur**. Fransk er offisielt språk, men lokale språk som tahitiansk og kanakspråk snakkes også.

Fransk Polynesia er kjent for sine vakre øyer, spesielt Tahiti og Bora Bora, og har inspirert kunstnere som Paul Gauguin.`,
    },
    {
      id: 'fransk-3-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Stillehavet',
      problem: `Oversett til norsk:
a) La Polynésie française est composee de 118 îles.
b) Le tahitien est parlé à côté du français.
c) Paul Gauguin a vécu à Tahiti.`,
      solution: `a) Fransk Polynesia består av 118 øyer.
b) Tahitiansk snakkes ved siden av fransk.
c) Paul Gauguin bodde på Tahiti.`,
    },
    {
      id: 'fransk-3-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på spørsmålene om det fransktalende Stillehavet.',
        subTasks: [
          { label: 'a', task: 'Nevn tre franske territorier i Stillehavet.', solution: 'Ny-Caledonia, Fransk Polynesia og Wallis og Futuna.' },
          { label: 'b', task: 'Hva er hovedstaden i Fransk Polynesia?', solution: 'Papeete på Tahiti.' },
          { label: 'c', task: 'Hvilken kjent kunstner bodde på Tahiti?', solution: 'Paul Gauguin.' },
          { label: 'd', task: 'Hva er forholdet mellom fransk og lokale språk i disse områdene?', solution: 'Fransk er offisielt språk, men lokale språk som tahitiansk snakkes også.' },
        ],
        solution: 'a) Ny-Caledonia, Fransk Polynesia, Wallis og Futuna. b) Papeete. c) Paul Gauguin. d) Fransk er offisielt, men lokale språk brukes også.',
        hints: ['la Polynésie française = Fransk Polynesia', 'la Nouvelle-Calédonie = Ny-Caledonia'],
      },
    },
    {
      id: 'fransk-3-9-3-text-3',
      type: 'text',
      content: `## Les langues créoles - Kreolspråk

Kreolspråk oppsto når folk med ulike språk måtte kommunisere under kolonitiden. Mange kreolspråk er basert på fransk:

| Kreolspråk | Omrade | Eksempel |
|------------|--------|----------|
| Haitisk kreol | Haiti | Mwen kontan = Je suis content (Jeg er glad) |
| Mauritisk kreol | Mauritius | Mo bien = Je vais bien (Jeg har det bra) |
| Reunionesisk kreol | Réunion | Koman i le? = Comment allez-vous? (Hvordan har du det?) |
| Seychellisk kreol | Seychellene | Mon kontan = Je suis content |

Kreolspråk er ikke "dårlig fransk" - de er fullverdige språk med egen grammatikk, ordforråd og litteratur. De anerkjennes i dag som viktige kulturelle uttrykk.`,
    },
    {
      id: 'fransk-3-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Kreolspråk',
      problem: `Svar på spørsmålene:
a) Hvordan oppsto kreolspråk?
b) Er kreolspråk "dårlig fransk"? Forklar.
c) Nevn to områder der det snakkes franskbasert kreol.`,
      solution: `a) Kreolspråk oppsto når folk med ulike språk måtte kommunisere under kolonitiden. De utviklet seg fra kontakt mellom europeiske språk og afrikanske/asiatiske språk.
b) Nei, kreolspråk er fullverdige språk med egen grammatikk, ordforråd og litteratur. De er ikke "dårlig fransk", men selvstendige språksystemer.
c) For eksempel Haiti og Mauritius (eller Réunion, Seychellene).`,
    },
    {
      id: 'fransk-3-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Kreolspråk oppsto under kolonitiden.', solution: 'Les langues créoles sont nées pendant la période coloniale.' },
          { label: 'b', task: 'De er fullverdige språk med egen grammatikk.', solution: 'Ce sont des langues à part entière avec leur propre grammaire.' },
          { label: 'c', task: 'Haitisk kreol snakkes av over 10 millioner mennesker.', solution: 'Le créole haïtien est parlé par plus de 10 millions de personnes.' },
        ],
        solution: 'a) Les langues créoles sont nées pendant la période coloniale. b) Ce sont des langues à part entière avec leur propre grammaire. c) Le créole haïtien est parlé par plus de 10 millions de personnes.',
        hints: ['naître = bli født/oppsta', 'a part entière = fullverdig'],
      },
    },
    {
      id: 'fransk-3-9-3-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige begreper

| Fransk | Norsk |
|--------|-------|
| l'Indochine | Indokina |
| la défaite | nederlaget |
| l'héritage culturel | kulturarven |
| une île | en øy |
| un territoire d'outre-mer | et oversjøisk territorium |
| une langue créole | et kreolspråk |
| le métissage culturel | kulturell blanding |
| la coexistence | sameksistens |`,
    },
    {
      id: 'fransk-3-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva betyr disse begrepene på norsk?',
        subTasks: [
          { label: 'a', task: 'un territoire d\'outre-mer', solution: 'et oversjøisk territorium' },
          { label: 'b', task: 'le métissage culturel', solution: 'kulturell blanding' },
          { label: 'c', task: 'la défaite', solution: 'nederlaget' },
          { label: 'd', task: 'la coexistence', solution: 'sameksistens' },
        ],
        solution: 'a) et oversjøisk territorium, b) kulturell blanding, c) nederlaget, d) sameksistens',
        hints: ['outre-mer = over havet', 'métissage = blanding/krysning'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.4: Les enjeux de la francophonie - Frankofoniens utfordringer
// ============================================================================

export const CHAPTER_FRANSK_3_9_4: TextbookChapter = {
  id: 'fransk-3-9-4',
  courseId: 'fransk-3',
  chapterNumber: '9.4',
  title: 'Les enjeux de la francophonie',
  subtitle: 'Frankofoniens utfordringer',
  description: 'Lær om OIF-organisasjonen, 300 millioner fransktalende, kulturelt mangfold, språkpolitikk og franskens fremtid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for OIF og dens rolle i det franskspråklige samarbeidet',
    'diskutere frankofoniens utfordringer og fremtidsutsikter',
  ],
  content: [
    {
      id: 'fransk-3-9-4-intro',
      type: 'text',
      content: `## Les enjeux de la francophonie

La francophonie désigne l'ensemble des personnes et des pays utilisant le français. Frankofonien betegner helheten av personer og land som bruker fransk. I dag er det over 300 millioner fransktalende i verden, og dette tallet forventes å vokse til 700 millioner innen 2050, hovedsakelig på grunn av befolkningsvekst i Afrika.

Men frankofoni handler om mye mer enn bare språk - det handler om kulturelt mangfold, samarbeid og felles verdier.`,
    },
    {
      id: 'fransk-3-9-4-text-1',
      type: 'text',
      content: `## L'Organisation internationale de la Francophonie (OIF)

OIF ble grunnlagt i 1970 og har i dag 88 medlemsland og observatorer. Organisasjonen arbeider for:

| Mal | Fransk | Norsk |
|-----|--------|-------|
| Språklig mangfold | la diversité linguistique | språklig mangfold |
| Fred og demokrati | la paix et la démocratie | fred og demokrati |
| Utdanning | l'éducation | utdanning |
| Bærekraftig utvikling | le développement durable | bærekraftig utvikling |
| Kulturelt samarbeid | la coopération culturelle | kulturelt samarbeid |

**Viktige tiltak fra OIF:**
- TV5Monde: Internasjonal franskspråklig TV-kanal
- Jeux de la Francophonie: Idrettsarrangement hvert fjerde år
- Programmes d'échanges éducatifs: Utvekslingsprogrammer for studenter`,
    },
    {
      id: 'fransk-3-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1: OIF',
      problem: `Les teksten og svar på spørsmålene:

"L'OIF réunit 88 États et gouvernements. Elle promeut la langue française, la diversité culturelle et linguistique, la paix, la démocratie et le développement durable."

a) Hvor mange stater og regjeringer er med i OIF?
b) Hva fremmer organisasjonen? (nevn minst tre ting)
c) Hva står OIF for?`,
      solution: `a) OIF samler 88 stater og regjeringer (88 États et gouvernements).
b) Organisasjonen fremmer: det franske språket, kulturelt og språklig mangfold, fred, demokrati og bærekraftig utvikling.
c) OIF står for Organisation internationale de la Francophonie.`,
    },
    {
      id: 'fransk-3-9-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'OIF ble grunnlagt i 1970.', solution: 'L\'OIF a été fondée en 1970.' },
          { label: 'b', task: 'Organisasjonen fremmer fred og demokrati.', solution: 'L\'organisation promeut la paix et la démocratie.' },
          { label: 'c', task: 'Det er over 300 millioner fransktalende i verden.', solution: 'Il y a plus de 300 millions de francophones dans le monde.' },
          { label: 'd', task: 'Kulturelt mangfold er en rikdom.', solution: 'La diversité culturelle est une richesse.' },
        ],
        solution: 'a) L\'OIF a été fondée en 1970. b) L\'organisation promeut la paix et la démocratie. c) Il y a plus de 300 millions de francophones dans le monde. d) La diversité culturelle est une richesse.',
        hints: ['promouvoir = fremme', 'un francophone = en fransktalende'],
      },
    },
    {
      id: 'fransk-3-9-4-text-2',
      type: 'text',
      content: `## Les défis de la francophonie - Utfordringer

Frankofonien står overfor flere utfordringer:

**1. Konkurranse fra engelsk (la concurrence de l'anglais)**
Engelsk dominerer innen teknologi, vitenskap og internasjonal kommunikasjon. Mange unge i fransktalende land foretrekker engelsk.

**2. Språklig kvalitet (la qualite de la langue)**
Utdanningssystemene i mange fransktalende land sliter med å gi god franskundervisning.

**3. Balanse mellom fransk og lokale språk (l'équilibre entre le français et les langues locales)**
Hvordan bevare lokale språk samtidig som fransk brukes som fellesspråk?

**4. Digital tilstedeværelse (la présence numérique)**
Fransk må styrke sin posisjon på internett, i sosiale medier og innen kunstig intelligens.`,
    },
    {
      id: 'fransk-3-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Utfordringer',
      problem: `Diskuter: Hvorfor er forholdet mellom fransk og lokale språk en utfordring?

Bruk begrepene: la langue officielle, les langues locales, l'équilibre, l'identité culturelle.`,
      solution: `Forholdet er en utfordring fordi fransk som offisielt språk (la langue officielle) brukes i utdanning og forvaltning, mens lokale språk (les langues locales) er viktige for kulturell identitet (l'identité culturelle). Det er vanskelig å finne en balanse (l'équilibre) der begge får plass. Hvis lokale språk marginaliseres, tapes kulturell rikdom, men uten et fellesspråk kan kommunikasjon på tvers av etniske grupper bli vanskelig.`,
    },
    {
      id: 'fransk-3-9-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Engelsk dominerer innen teknologi.', solution: 'L\'anglais domine dans le domaine de la technologie.' },
          { label: 'b', task: 'Utdanningssystemene må forbedres.', solution: 'Les systèmes éducatifs doivent être améliorés.' },
          { label: 'c', task: 'Lokale språk må bevares.', solution: 'Les langues locales doivent être préservées.' },
          { label: 'd', task: 'Fransk må styrke sin digitale tilstedeværelse.', solution: 'Le français doit renforcer sa presence numérique.' },
        ],
        solution: 'a) L\'anglais domine dans le domaine de la technologie. b) Les systèmes éducatifs doivent être améliorés. c) Les langues locales doivent être préservées. d) Le français doit renforcer sa presence numérique.',
        hints: ['dominer = dominere', 'renforcer = styrke', 'numérique = digital'],
      },
    },
    {
      id: 'fransk-3-9-4-text-3',
      type: 'text',
      content: `## L'avenir du français - Franskens fremtid

Prognoser viser at antall fransktalende kan nå 700 millioner innen 2050. Dette skyldes hovedsakelig befolkningsvekst i fransktalende afrikanske land.

**Faktorer som kan styrke fransk:**
- Befolkningsvekst i Afrika
- OIFs arbeid for utdanning
- TV5Monde og franskspråklige medier
- Franskens rolle i internasjonale organisasjoner (FN, EU)

**Faktorer som kan svekke fransk:**
- Globalisering og engelskens dominans
- Manglende ressurser til utdanning
- Migrasjon til engelsktalende land
- Teknologisk etterslep i franskspråklig innhold

Fremtiden for fransk avhenger i stor grad av kvaliteten på utdanning i Afrika og av evnen til å tilpasse seg den digitale tidsalderen.`,
    },
    {
      id: 'fransk-3-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Fremtidsutsikter',
      problem: `Oversett til norsk:
a) L'avenir du français depend de l'éducation en Afrique.
b) Le nombre de francophones pourrait atteindre 700 millions en 2050.
c) La francophonie doit s'adapter à l'ère numérique.`,
      solution: `a) Franskens fremtid avhenger av utdanningen i Afrika.
b) Antall fransktalende kan nå 700 millioner i 2050.
c) Frankofonien må tilpasse seg den digitale tidsalderen.`,
    },
    {
      id: 'fransk-3-9-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Svar på fransk (korte setninger er OK).',
        subTasks: [
          { label: 'a', task: 'Hvorfor kan antall fransktalende vokse?', solution: 'Parce que la population augmenté en Afrique francophone.' },
          { label: 'b', task: 'Nevn en internasjonal organisasjon der fransk brukes.', solution: 'Les Nations Unies / l\'Union européenne / l\'OIF.' },
          { label: 'c', task: 'Hva er den største utfordringen for frankofoni?', solution: 'La concurrence de l\'anglais et le manque de ressources éducatives.' },
        ],
        solution: 'a) Parce que la population augmenté en Afrique. b) Les Nations Unies / l\'UE / l\'OIF. c) La concurrence de l\'anglais.',
        hints: ['augmenter = oke/vokse', 'le manque = mangelen'],
      },
    },
    {
      id: 'fransk-3-9-4-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige begreper

| Fransk | Norsk |
|--------|-------|
| la francophonie | frankofonien |
| un francophone | en fransktalende |
| l'OIF | organisasjonen for frankofoni |
| la diversité culturelle | kulturelt mangfold |
| la concurrence | konkurransen |
| le développement durable | bærekraftig utvikling |
| la présence numérique | digital tilstedeværelse |
| l'avenir | fremtiden |`,
    },
    {
      id: 'fransk-3-9-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva betyr disse begrepene på norsk?',
        subTasks: [
          { label: 'a', task: 'la concurrence', solution: 'konkurransen' },
          { label: 'b', task: 'le développement durable', solution: 'bærekraftig utvikling' },
          { label: 'c', task: 'la présence numérique', solution: 'digital tilstedeværelse' },
          { label: 'd', task: 'l\'avenir', solution: 'fremtiden' },
        ],
        solution: 'a) konkurransen, b) bærekraftig utvikling, c) digital tilstedeværelse, d) fremtiden',
        hints: ['concurrence = konkurranse', 'durable = varig/holdbar', 'numérique = digital'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.1: Compréhension écrite avancée - Avansert leseforståelse
// ============================================================================

export const CHAPTER_FRANSK_3_10_1: TextbookChapter = {
  id: 'fransk-3-10-1',
  courseId: 'fransk-3',
  chapterNumber: '10.1',
  title: 'Compréhension écrite avancée',
  subtitle: 'Avansert leseforståelse',
  description: 'Lær strategier for å lese komplekse tekster, analysere litterære tekster og avisartikler, og identifisere argumenter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike lesestrategier for å forstå komplekse franske tekster',
    'analysere argumentasjon og standpunkter i franske tekster',
  ],
  content: [
    {
      id: 'fransk-3-10-1-intro',
      type: 'text',
      content: `## Compréhension écrite avancée - Avansert leseforståelse

På nivå 3 forventes det at du kan lese og forstå komplekse tekster på fransk, inkludert avisartikler, litterære tekster og argumenterende tekster. I dette kapittelet lærer du strategier for å mestre avansert leseforståelse.

À lire, c'est aussi apprendre à penser. Å lese er også å lære å tenke.`,
    },
    {
      id: 'fransk-3-10-1-text-1',
      type: 'text',
      content: `## Strategier for leseforståelse

**For du leser (avant la lecture):**
1. Les tittelen og undertittelen
2. Se på eventuelle bilder og bildetekster
3. Identifiser teksttypen (artikkel, novelle, essay, kronikk)
4. Aktiver forkunnskap om temaet

**Under lesingen (pendant la lecture):**
1. Les teksten raskt først for å få helhetsinntrykk (**lecture globale**)
2. Les teksten grundig for detaljer (**lecture detaillee**)
3. Understrek nøkkelord og viktige setninger
4. Bruk konteksten til å gjette ukjente ord
5. Legg merke til tekstbindere (**les connecteurs logiques**)

**Etter lesingen (apres la lecture):**
1. Oppsummer hovedinnholdet
2. Identifiser forfatterens standpunkt
3. Vurder argumentene kritisk`,
    },
    {
      id: 'fransk-3-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Lese en avisartikkel',
      problem: `Les teksten og identifiser: a) tema, b) forfatterens standpunkt, c) to argumenter.

"L'utilisation des smartphones en classe fait débat. Certains enseignants estiment que ces appareils perturbent l'apprentissage et réduisent la capacité de concentration des élèves. En revanche, d'autres pédagogues soutiennent que les smartphones peuvent être des outils éducatifs précieux, permettant l'accès immédiat à l'information et favorisant l'apprentissage interactif."`,
      solution: `a) Tema: Bruk av smarttelefoner i klasserommet (l'utilisation des smartphones en classe).
b) Forfatterens standpunkt: Teksten er balansert og presenterer begge sider (noen mener... på den andre siden...).
c) Argumenter:
   - Mot: Smarttelefoner forstyrrer læringen og reduserer konsentrasjonsevnen.
   - For: Smarttelefoner kan være verdifulle pedagogiske verktøy som gir umiddelbar tilgang til informasjon.`,
    },
    {
      id: 'fransk-3-10-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse tekstbinderne til norsk.',
        subTasks: [
          { label: 'a', task: 'en revanche', solution: 'derimot / på den andre siden' },
          { label: 'b', task: 'cependant', solution: 'imidlertid / likevel' },
          { label: 'c', task: 'par conséquent', solution: 'følgelig / som en konsekvens' },
          { label: 'd', task: 'en outre', solution: 'dessuten / i tillegg' },
        ],
        solution: 'a) derimot, b) imidlertid, c) følgelig, d) dessuten',
        hints: ['Tekstbindere (connecteurs logiques) viser forholdet mellom ideer'],
      },
    },
    {
      id: 'fransk-3-10-1-text-2',
      type: 'text',
      content: `## Les connecteurs logiques - Tekstbindere

For å forstå avanserte tekster er det viktig å kjenne tekstbinderne:

| Funksjon | Fransk | Norsk |
|----------|--------|-------|
| Legge til | de plus, en outre, par ailleurs | dessuten, i tillegg |
| Motsetning | cependant, néanmoins, en revanche, toutefois | imidlertid, likevel, derimot |
| Årsak | car, parce que, puisque, etant donne que | for, fordi, siden, gitt at |
| Konsekvens | par conséquent, donc, ainsi, c'est pourquoi | følgelig, altså, saledes, derfor |
| Eksempel | par exemple, notamment, en particulier | for eksempel, særlig |
| Konklusjon | en conclusion, pour conclure, en somme | avslutningsvis, for å konkludere |`,
    },
    {
      id: 'fransk-3-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruke tekstbindere',
      problem: `Fyll inn riktig tekstbinder:
a) Le français est important. ___, il est parle par 300 millions de personnes. (dessuten)
b) L'anglais domine sur internet. ___, le français doit renforcer sa presence numérique. (derfor)
c) ___ les langues locales sont importantes, il faut les preserver. (Siden)`,
      solution: `a) Le français est important. **De plus / En outre**, il est parle par 300 millions de personnes.
b) L'anglais domine sur internet. **C'est pourquoi / Par conséquent**, le français doit renforcer sa presence numérique.
c) **Puisque / Etant donne que** les langues locales sont importantes, il faut les preserver.`,
    },
    {
      id: 'fransk-3-10-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fyll inn passende tekstbinder.',
        subTasks: [
          { label: 'a', task: 'Il pleut. ___, je prends mon parapluie. (Derfor)', solution: 'Par conséquent / C\'est pourquoi / Donc' },
          { label: 'b', task: 'Le livre est intéressant. ___, il est un peu long. (Likevel)', solution: 'Cependant / Néanmoins / Toutefois' },
          { label: 'c', task: 'J\'aime le français. ___, j\'etudie l\'espagnol. (Dessuten)', solution: 'De plus / En outre / Par ailleurs' },
          { label: 'd', task: '___, la francophonie a un bel avenir. (Avslutningsvis)', solution: 'En conclusion / Pour conclure / En somme' },
        ],
        solution: 'a) Par conséquent, b) Cependant, c) De plus, d) En conclusion',
        hints: ['Velg tekstbinder basert på logisk sammenheng mellom setningene'],
      },
    },
    {
      id: 'fransk-3-10-1-text-3',
      type: 'text',
      content: `## Analyse de texte litteraire - Litterær analyse

Når du analyserer en litterær tekst, se etter:

**1. Le theme (temaet):** Hva handler teksten om?
**2. Le narrateur (fortelleren):** Hvem forteller? Forsteperson eller tredjeperson?
**3. Le ton (tonen):** Ironisk, alvorlig, humoristisk, melankolsk?
**4. Les figures de style (stilfigurer):**

| Stilfigur | Fransk | Forklaring | Eksempel |
|-----------|--------|------------|----------|
| Metafor | la metaphore | Sammenlikning uten "som" | La vie est un voyage |
| Sammenlikning | la comparaison | Sammenlikning med "comme" | Fort comme un lion |
| Personifisering | la personnification | Gi menneskelige egenskaper | Le vent murmure |
| Hyperbol | l'hyperbole | Overdrivelse | Je meurs de faim |`,
    },
    {
      id: 'fransk-3-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Identifisere stilfigurer',
      problem: `Identifiser stilfiguren i hver setning:
a) Le soleil dansait sur les vagues.
b) Il est fort comme un boeuf.
c) J'ai mille choses à faire.
d) La vie est un long fleuve tranquille.`,
      solution: `a) **Personifisering** (la personnification) - Solen danset på bølgene. Solen far en menneskelig egenskap (a danse).
b) **Sammenlikning** (la comparaison) - Han er sterk som en okse. Bruker "comme" for å sammenlikne.
c) **Hyperbol** (l'hyperbole) - Jeg har tusen ting å gjøre. Overdrivelse for å understreke mengden.
d) **Metafor** (la metaphore) - Livet er en lang, rolig elv. Sammenlikning uten "comme".`,
    },
    {
      id: 'fransk-3-10-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Identifiser stilfiguren og oversett til norsk.',
        subTasks: [
          { label: 'a', task: 'Le temps est un voleur.', solution: 'Metafor - Tiden er en tyv.' },
          { label: 'b', task: 'Elle chante comme un rossignol.', solution: 'Sammenlikning - Hun synger som en nattergal.' },
          { label: 'c', task: 'Les arbres pleurent en automne.', solution: 'Personifisering - Trærne gråter om høsten.' },
        ],
        solution: 'a) Metafor, b) Sammenlikning (comme), c) Personifisering',
        hints: ['Metafor = sammenlikning uten "comme"', 'Sammenlikning = bruker "comme"', 'Personifisering = menneskelige egenskaper'],
      },
    },
    {
      id: 'fransk-3-10-1-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige begreper for tekstanalyse

| Fransk | Norsk |
|--------|-------|
| la these / l'argument | tesen / argumentet |
| le point de vue | synspunktet |
| l'auteur | forfatteren |
| le lecteur | leseren |
| le registre de langue | språkniva |
| le champ lexical | ordfeltet |
| l'implicite | det underforståtte |
| la nuance | nyanseringen |`,
    },
    {
      id: 'fransk-3-10-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva betyr disse begrepene på norsk?',
        subTasks: [
          { label: 'a', task: 'le point de vue', solution: 'synspunktet' },
          { label: 'b', task: 'le champ lexical', solution: 'ordfeltet' },
          { label: 'c', task: 'l\'implicite', solution: 'det underforståtte' },
          { label: 'd', task: 'la nuance', solution: 'nyanseringen' },
        ],
        solution: 'a) synspunktet, b) ordfeltet, c) det underforståtte, d) nyanseringen',
        hints: ['champ = felt, lexical = som gjelder ord', 'implicite = noe som antydes, men ikke sies direkte'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2: Production écrite avancée - Avansert skriftlig produksjon
// ============================================================================

export const CHAPTER_FRANSK_3_10_2: TextbookChapter = {
  id: 'fransk-3-10-2',
  courseId: 'fransk-3',
  chapterNumber: '10.2',
  title: 'Production écrite avancée',
  subtitle: 'Avansert skriftlig produksjon',
  description: 'Lær å skrive essay, artikler og formelle brev på fransk, med argumentasjonsstruktur og nyttige fraser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive strukturerte argumenterende tekster på fransk',
    'bruke variert ordforråd og avanserte grammatiske strukturer i skriftlig produksjon',
  ],
  content: [
    {
      id: 'fransk-3-10-2-intro',
      type: 'text',
      content: `## Production écrite avancée - Avansert skriftlig produksjon

På nivå 3 forventes det at du kan skrive ulike teksttyper på fransk: essay (la dissertation), artikler (l'article), formelle brev (la lettre formelle) og argumenterende tekster (le texte argumentatif).

God skriftlig produksjon krever en klar struktur, variert ordforråd og presise grammatiske konstruksjoner.`,
    },
    {
      id: 'fransk-3-10-2-text-1',
      type: 'text',
      content: `## La dissertation - Essayet

Et fransk essay har vanligvis tre deler:

**1. L'introduction (innledningen):**
- Presenter temaet (amener le sujet)
- Definer problemstillingen (poser la problématique)
- Presenter planen (annoncer le plan)

**2. Le développement (hoveddelen):**
- Del 1: Første synspunkt med argumenter og eksempler
- Del 2: Andre synspunkt med argumenter og eksempler
- Del 3: Syntese eller eget standpunkt

**3. La conclusion (konklusjonen):**
- Oppsummer hovedpunktene
- Svar på problemstillingen
- Åpne for videre refleksjon

**Nyttige fraser for innledning:**
- De nos jours, ... (I var tid, ...)
- Il est indeniable que ... (Det er ubestridelig at ...)
- La question de ... est au coeur du débat. (...-spørsmålet står sentralt i debatten.)`,
    },
    {
      id: 'fransk-3-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Skrive en innledning',
      problem: `Skriv en innledning til et essay om temaet: "Les réseaux sociaux sont-ils bénéfiques pour la société?" (Er sosiale medier positivt for samfunnet?)

Bruk strukturen: 1) Presenter temaet, 2) Definer problemstillingen, 3) Presenter planen.`,
      solution: `**Eksempel på innledning:**

De nos jours, les réseaux sociaux occupent une place centrale dans notre quotidien. Des milliards de personnes utilisent Facebook, Instagram et TikTok chaque jour. Cependant, leur impact sur la société fait l'objet de vifs débats. Les réseaux sociaux sont-ils reellement bénéfiques pour la société ? Nous examinerons d'abord les avantages de ces plateformes, puis nous analyserons leurs inconvenients, avant de proposer une réflexion sur leur usage responsable.

(I var tid inntar sosiale medier en sentral plass i hverdagen var. Milliarder av mennesker bruker Facebook, Instagram og TikTok daglig. Likevel er deres innvirkning på samfunnet gjenstand for heftig debatt. Er sosiale medier virkelig positivt for samfunnet? Vi skal først se på fordelene med disse plattformene, deretter analysere ulempene, for så å foreslå en refleksjon om ansvarlig bruk.)`,
    },
    {
      id: 'fransk-3-10-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett disse essayfrasene til fransk.',
        subTasks: [
          { label: 'a', task: 'I var tid er miljospørsmål viktige.', solution: 'De nos jours, les questions environnementales sont importantes.' },
          { label: 'b', task: 'Vi skal forst undersøke årsakene.', solution: 'Nous examinerons d\'abord les causes.' },
          { label: 'c', task: 'På den ene siden... på den andre siden...', solution: 'D\'une part... d\'autre part...' },
          { label: 'd', task: 'Avslutningsvis kan vi si at...', solution: 'En conclusion, nous pouvons dire que...' },
        ],
        solution: 'a) De nos jours, les questions environnementales sont importantes. b) Nous examinerons d\'abord les causes. c) D\'une part... d\'autre part... d) En conclusion, nous pouvons dire que...',
        hints: ['de nos jours = i var tid', 'd\'abord = forst', 'd\'une part... d\'autre part = på den ene/andre siden'],
      },
    },
    {
      id: 'fransk-3-10-2-text-2',
      type: 'text',
      content: `## Le texte argumentatif - Argumenterende tekst

For å bygge sterke argumenter, bruk denne strukturen:

**Argument + eksempel + kommentar**

| Steg | Fransk frase | Norsk |
|------|-------------|-------|
| Presentere argument | Premièrement, ... / Tout d'abord, ... | For det første, ... |
| Gi eksempel | Par exemple, ... / Comme le montre ... | For eksempel, ... / Som ... viser |
| Kommentere | Cela montre que ... / On peut en conclure que ... | Dette viser at ... / Man kan konkludere med at ... |
| Legge til argument | De plus, ... / En outre, ... | Dessuten, ... / I tillegg, ... |
| Motargument | Certes, ... mais ... / Il est vrai que ... cependant ... | Riktignok, ... men ... / Det er sant at ... likevel ... |
| Konkludere | En somme, ... / Pour conclure, ... | Oppsummert, ... / For å konkludere, ... |`,
    },
    {
      id: 'fransk-3-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Bygge argumenter',
      problem: `Skriv et kort avsnitt som argumenterer for franskens viktighet. Bruk strukturen: argument + eksempel + kommentar.`,
      solution: `**Premièrement**, le français est une langue internationale de grande importance. **Par exemple**, le français est langue officielle dans 29 pays et dans de nombreuses organisations internationales comme les Nations Unies et l'Union européenne. **Cela montre que** le français reste une langue incontournable dans la diplomatie et la coopération internationale.

(For det første er fransk et internasjonalt språk av stor betydning. For eksempel er fransk offisielt språk i 29 land og i mange internasjonale organisasjoner som FN og EU. Dette viser at fransk forblir et uunnvaerlig språk i diplomati og internasjonalt samarbeid.)`,
    },
    {
      id: 'fransk-3-10-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'For det første er utdanning viktig for alle.', solution: 'Premièrement, l\'éducation est importante pour tous.' },
          { label: 'b', task: 'For eksempel viser studier at...', solution: 'Par exemple, les études montrent que...' },
          { label: 'c', task: 'Riktignok er det utfordringer, men løsningene finnes.', solution: 'Certes, il y a des défis, mais les solutions existent.' },
          { label: 'd', task: 'Oppsummert kan vi si at fremtiden ser lovende ut.', solution: 'En somme, nous pouvons dire que l\'avenir semble prometteur.' },
        ],
        solution: 'a) Premièrement, l\'éducation est importante pour tous. b) Par exemple, les études montrent que... c) Certes, il y a des défis, mais les solutions existent. d) En somme, nous pouvons dire que l\'avenir semble prometteur.',
        hints: ['premièrement = for det første', 'certes... mais = riktignok... men', 'prometteur = lovende'],
      },
    },
    {
      id: 'fransk-3-10-2-text-3',
      type: 'text',
      content: `## La lettre formelle - Det formelle brevet

Et formelt brev på fransk har denne strukturen:

**Hode:**
- Avsenders adresse (oppe til venstre)
- Mottakers adresse (til høyre, under avsender)
- Sted og dato: Paris, le 15 mars 2026
- Emne: Objet : Demande de renseignements

**Tiltale:**
- Madame, Monsieur, (ukjent mottaker)
- Monsieur le Directeur, (kjent tittel)

**Avslutningsfraser:**
- Je vous prie d'agreer, Madame, Monsieur, l'expression de mes salutations distinguées.
- Veuillez agreer, Madame, Monsieur, mes salutations respectueuses.

**Viktige fraser:**
| Fransk | Norsk |
|--------|-------|
| Je me permets de vous écrire pour... | Jeg tillater meg å skrive til Dem for... |
| Suite à votre annonce, ... | I forbindelse med Deres annonse, ... |
| Je vous serais reconnaissant(e) de... | Jeg ville være takknemlig om De... |
| Dans l'attente de votre réponse, ... | I påvente av Deres svar, ... |`,
    },
    {
      id: 'fransk-3-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Formelle fraser',
      problem: `Oversett til norsk:
a) Je me permets de vous écrire pour demander des informations.
b) Veuillez trouver ci-joint mon CV.
c) Dans l'attente de votre réponse, je vous prie d'agreer mes salutations distinguées.`,
      solution: `a) Jeg tillater meg å skrive til Dem for å be om informasjon.
b) Vær vennlig å finne mitt CV vedlagt.
c) I påvente av Deres svar, vennligst motta mine ærbødige hilsener.`,
    },
    {
      id: 'fransk-3-10-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Kjære herr direktor,', solution: 'Monsieur le Directeur,' },
          { label: 'b', task: 'Jeg skriver til Dem angående...', solution: 'Je vous ecris au sujet de...' },
          { label: 'c', task: 'Jeg ville være takknemlig om De kunne svare meg.', solution: 'Je vous serais reconnaissant(e) si vous pouviez me répondre.' },
        ],
        solution: 'a) Monsieur le Directeur, b) Je vous ecris au sujet de... c) Je vous serais reconnaissant(e) si vous pouviez me répondre.',
        hints: ['au sujet de = angående', 'reconnaissant(e) = takknemlig', 'si vous pouviez = om De kunne'],
      },
    },
    {
      id: 'fransk-3-10-2-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige skriveuttrykk

| Fransk | Norsk |
|--------|-------|
| la dissertation | essayet |
| la problématique | problemstillingen |
| l'introduction | innledningen |
| le développement | hoveddelen |
| la conclusion | konklusjonen |
| l'argument | argumentet |
| l'exemple | eksempelet |
| la lettre formelle | det formelle brevet |`,
    },
    {
      id: 'fransk-3-10-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva betyr disse begrepene på norsk?',
        subTasks: [
          { label: 'a', task: 'la problématique', solution: 'problemstillingen' },
          { label: 'b', task: 'le développement', solution: 'hoveddelen (i et essay)' },
          { label: 'c', task: 'la dissertation', solution: 'essayet' },
          { label: 'd', task: 'la lettre formelle', solution: 'det formelle brevet' },
        ],
        solution: 'a) problemstillingen, b) hoveddelen, c) essayet, d) det formelle brevet',
        hints: ['problématique = det sentrale spørsmålet/problemstillingen', 'développement = utvikling/hoveddel'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3: Compréhension et production orale - Muntlig forståelse og produksjon
// ============================================================================

export const CHAPTER_FRANSK_3_10_3: TextbookChapter = {
  id: 'fransk-3-10-3',
  courseId: 'fransk-3',
  chapterNumber: '10.3',
  title: 'Compréhension et production orale',
  subtitle: 'Muntlig forståelse og produksjon',
  description: 'Lær lyttestrategier, teknikker for muntlig presentasjon, debattferdigheter og uttale.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke strategier for å forstå muntlig fransk i ulike situasjoner',
    'holde strukturerte muntlige presentasjoner og delta i debatter på fransk',
  ],
  content: [
    {
      id: 'fransk-3-10-3-intro',
      type: 'text',
      content: `## Compréhension et production orale

På nivå 3 skal du kunne forstå muntlig fransk i ulike sammenhenger og selv produsere sammenhengende muntlig fransk. Dette inkluderer å forstå nyheter, foredrag og samtaler, samt å holde presentasjoner og delta i debatter.

La communication orale est essentielle pour maîtriser une langue. Muntlig kommunikasjon er avgjørende for å mestre et språk.`,
    },
    {
      id: 'fransk-3-10-3-text-1',
      type: 'text',
      content: `## Strategies d'ecoute - Lyttestrategier

**For du lytter (avant l'ecoute):**
1. Les eventuelle oppgavetekster på forhånd
2. Tenk gjennom hva du vet om temaet
3. Forbered deg på nøkkelord du kan hore

**Under lyttingen (pendant l'ecoute):**
1. Første lytting: Fa et helhetsbilde (l'idee générale)
2. Andre lytting: Fokuser på detaljer
3. Legg merke til tonefall og trykk
4. Ikke prøv å forstå hvert ord - fang opp hovedpunktene

**Tips for å forstå rask tale:**
- Fokuser på innholdsord (substantiver, verb, adjektiver)
- Lytt etter tekstbindere som signaliserer ny informasjon
- Bruk konteksten til å fylle inn "hull"
- Øv regelmessig med franskspråklige podkaster og nyheter`,
    },
    {
      id: 'fransk-3-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Lytteforståelse',
      problem: `Du horer følgende nyhetssnutt. Identifiser hovedpunktene:

"Le président français a annoncé aujourd'hui un nouveau plan pour l'éducation. Ce plan prévoit l'embauche de 10 000 enseignants supplémentaires et la rénovation de 500 écoles. Le coût total est estimé à 2 milliards d'euros."

a) Hva handler nyheten om?
b) Hva er de to hovedtiltakene?
c) Hva er totalkostnaden?`,
      solution: `a) Nyheten handler om en ny utdanningsplan annonsert av den franske presidenten.
b) De to hovedtiltakene er: ansettelse av 10 000 ekstra lærere (l'embauche de 10 000 enseignants) og renovering av 500 skoler (la rénovation de 500 écoles).
c) Totalkostnaden er estimert til 2 milliarder euro (2 milliards d'euros).`,
    },
    {
      id: 'fransk-3-10-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse nyttige lyttefrasene til norsk.',
        subTasks: [
          { label: 'a', task: 'l\'idee principale', solution: 'hovedideen' },
          { label: 'b', task: 'les mots-clés', solution: 'nøkkelordene' },
          { label: 'c', task: 'le contexte', solution: 'sammenhengen/konteksten' },
          { label: 'd', task: 'les details importants', solution: 'de viktige detaljene' },
        ],
        solution: 'a) hovedideen, b) nøkkelordene, c) sammenhengen, d) de viktige detaljene',
        hints: ['clé = nokkel', 'principal(e) = hoved-/viktigst'],
      },
    },
    {
      id: 'fransk-3-10-3-text-2',
      type: 'text',
      content: `## L'expose oral - Muntlig presentasjon

En god muntlig presentasjon på fransk følger denne strukturen:

**1. Innledning (L'introduction):**
- Hils på: Bonjour à tous / Bonjour, mesdames et messieurs
- Presenter temaet: Aujourd'hui, je vais vous parler de...
- Si hvorfor det er viktig: Ce sujet est important parce que...

**2. Hoveddel (Le développement):**
- Bruk overganger: Premièrement... Deuxièmement... Enfin...
- Gi eksempler: Par exemple... Prenons le cas de...
- Vis bilder/data: Comme vous pouvez voir sur cette image...

**3. Avslutning (La conclusion):**
- Oppsummer: Pour résumer... / En conclusion...
- Åpne for spørsmål: Avez-vous des questions?
- Takk: Merci de votre attention.`,
    },
    {
      id: 'fransk-3-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Fraser for presentasjon',
      problem: `Oversett til fransk:
a) I dag skal jeg snakke om frankofoni.
b) For det første vil jeg presentere historien.
c) For å oppsummere...
d) Takk for oppmerksomheten. Har dere spørsmål?`,
      solution: `a) Aujourd'hui, je vais vous parler de la francophonie.
b) Premièrement, je vais presenter l'histoire.
c) Pour résumer...
d) Merci de votre attention. Avez-vous des questions ?`,
    },
    {
      id: 'fransk-3-10-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse presentasjonsfrasene til fransk.',
        subTasks: [
          { label: 'a', task: 'God dag alle sammen.', solution: 'Bonjour à tous.' },
          { label: 'b', task: 'Jeg vil gjerne snakke om...', solution: 'Je voudrais parler de...' },
          { label: 'c', task: 'La oss se på et eksempel.', solution: 'Regardons un exemple.' },
          { label: 'd', task: 'Avslutningsvis vil jeg si at...', solution: 'Pour conclure, je voudrais dire que...' },
        ],
        solution: 'a) Bonjour à tous. b) Je voudrais parler de... c) Regardons un exemple. d) Pour conclure, je voudrais dire que...',
        hints: ['je voudrais = jeg ville gjerne (høflighetsform)', 'regardons = la oss se (imperativ 1. person flertall)'],
      },
    },
    {
      id: 'fransk-3-10-3-text-3',
      type: 'text',
      content: `## Le débat - Debatten

I en debatt må du kunne uttrykke og forsvare meninger:

| Funksjon | Fransk | Norsk |
|----------|--------|-------|
| Uttrykke mening | A mon avis, ... / Je pense que... / Il me semble que... | Etter min mening... / Jeg tror at... / Det virker som om... |
| Være enig | Je suis d'accord. / Tout à fait. / Exactement. | Jeg er enig. / Helt riktig. / Nettopp. |
| Være uenig | Je ne suis pas d'accord. / Je ne partage pas cet avis. | Jeg er ikke enig. / Jeg deler ikke dette synspunktet. |
| Be om ordet | Puis-je ajouter quelque chose ? / Si je peux me permettre... | Kan jeg legge til noe? / Om jeg kan tillate meg... |
| Avbryte høflig | Excusez-moi, mais... / Permettez-moi d'intervenir. | Unnskyld, men... / Tillat meg å gripe inn. |
| Moderere | D'un cote... de l'autre... / Il faut nuancer. | På den ene siden... på den andre... / Man må nyansere. |`,
    },
    {
      id: 'fransk-3-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Debattferdigheter',
      problem: `Oversett til fransk:
a) Etter min mening er frankofoni viktig for kulturelt mangfold.
b) Jeg er ikke enig. Engelsk er viktigere i dagens verden.
c) Man må nyansere. Begge språk har sine styrker.`,
      solution: `a) A mon avis, la francophonie est importante pour la diversité culturelle.
b) Je ne suis pas d'accord. L'anglais est plus important dans le monde d'aujourd'hui.
c) Il faut nuancer. Les deux langues ont leurs points forts.`,
    },
    {
      id: 'fransk-3-10-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg tror at utdanning er noykkelen.', solution: 'Je pense que l\'éducation est la clé.' },
          { label: 'b', task: 'Helt riktig, men vi må også tenke på...', solution: 'Tout à fait, mais il faut aussi penser à...' },
          { label: 'c', task: 'Kan jeg legge til noe?', solution: 'Puis-je ajouter quelque chose ?' },
        ],
        solution: 'a) Je pense que l\'éducation est la clé. b) Tout à fait, mais il faut aussi penser à... c) Puis-je ajouter quelque chose ?',
        hints: ['la clé = nokkelen', 'il faut = man ma', 'puis-je = kan jeg (formell inversjon)'],
      },
    },
    {
      id: 'fransk-3-10-3-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige muntlige uttrykk

| Fransk | Norsk |
|--------|-------|
| à mon avis | etter min mening |
| je suis d'accord | jeg er enig |
| je ne suis pas d'accord | jeg er ikke enig |
| premièrement... deuxiemement... | for det første... for det andre... |
| pour résumer | for å oppsummere |
| merci de votre attention | takk for oppmerksomheten |
| avez-vous des questions | har dere spørsmål |
| il faut nuancer | man må nyansere |`,
    },
    {
      id: 'fransk-3-10-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva betyr disse uttrykkene på norsk?',
        subTasks: [
          { label: 'a', task: 'Il me semble que...', solution: 'Det virker som om... / Det ser ut til at...' },
          { label: 'b', task: 'Je ne partage pas cet avis.', solution: 'Jeg deler ikke dette synspunktet.' },
          { label: 'c', task: 'Permettez-moi d\'intervenir.', solution: 'Tillat meg å gripe inn.' },
          { label: 'd', task: 'D\'un cote... de l\'autre...', solution: 'På den ene siden... på den andre...' },
        ],
        solution: 'a) Det virker som om..., b) Jeg deler ikke dette synspunktet., c) Tillat meg å gripe inn., d) På den ene siden... på den andre...',
        hints: ['il me semble = det synes meg', 'partager = dele', 'intervenir = gripe inn'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.4: Revision générale et strategies d'examen - Generell repetisjon og eksamensstrategier
// ============================================================================

export const CHAPTER_FRANSK_3_10_4: TextbookChapter = {
  id: 'fransk-3-10-4',
  courseId: 'fransk-3',
  chapterNumber: '10.4',
  title: "Revision générale et strategies d'examen",
  subtitle: 'Generell repetisjon og eksamensstrategier',
  description: 'Gjennomga grammatikk, far eksamenstips, lær om tidsbruk og unnga vanlige feil.',
  estimatedMinutes: 55,
  competenceGoals: [
    'repetere sentrale grammatiske strukturer på nivå 3',
    'bruke effektive eksamensstrategier for å prestere optimalt',
  ],
  content: [
    {
      id: 'fransk-3-10-4-intro',
      type: 'text',
      content: `## Revision générale et strategies d'examen

Felicitations ! Du har nadd slutten av Fransk Nivå 3. I dette kapittelet repeterer vi de viktigste grammatiske strukturene og gir deg strategier for å gjøre det best mulig på eksamen.

La preparation est la clé de la reussite. Forberedelse er nokkelen til suksess.`,
    },
    {
      id: 'fransk-3-10-4-text-1',
      type: 'text',
      content: `## Repetisjon av viktige verbtider

| Tid | Bruk | Eksempel |
|-----|------|----------|
| Present | Na-situasjoner, vaner | Je parlé français. (Jeg snakker fransk.) |
| Passé composé | Avsluttede handlinger | J'ai parle. (Jeg har snakket/snakket.) |
| Imparfait | Bakgrunn, vaner i fortid | Je parlais souvent. (Jeg snakket ofte.) |
| Plus-que-parfait | For noe annet i fortid | J'avais deja parle. (Jeg hadde allerede snakket.) |
| Futur simple | Fremtid | Je parlerai. (Jeg vil snakke.) |
| Conditionnel | Hypotetisk, høflig | Je parlerais. (Jeg ville snakke.) |
| Subjonctif | Etter visse uttrykk | Il faut que je parle. (Det er nodvendig at jeg snakker.) |

**Husk passé composé vs. imparfait:**
- Passé composé: enkelthandlinger, avsluttede hendelser
- Imparfait: beskrivelser, vaner, bakgrunn`,
    },
    {
      id: 'fransk-3-10-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Verbtider',
      problem: `Fyll inn riktig verbtid:
a) Hier, je ___ (aller) au cinema. (avsluttet handling)
b) Quand j'etais jeune, je ___ (jouer) au football. (vane i fortid)
c) Demain, nous ___ (partir) en vacances. (fremtid)
d) Si j'avais le temps, je ___ (lire) plus. (hypotetisk)`,
      solution: `a) Hier, je **suis alle(e)** au cinema. (Passé composé - avsluttet handling)
b) Quand j'etais jeune, je **jouais** au football. (Imparfait - vane i fortid)
c) Demain, nous **partirons** en vacances. (Futur simple - fremtid)
d) Si j'avais le temps, je **lirais** plus. (Conditionnel - hypotetisk)`,
    },
    {
      id: 'fransk-3-10-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fyll inn riktig verbtid.',
        subTasks: [
          { label: 'a', task: 'Il ___ (pleuvoir) quand je suis sorti. (bakgrunn)', solution: 'pleuvait (imparfait)' },
          { label: 'b', task: 'Nous ___ (finir) le projet hier. (avsluttet)', solution: 'avons fini (passé composé)' },
          { label: 'c', task: 'Il faut que tu ___ (faire) tes devoirs. (subjonctif)', solution: 'fasses (subjonctif)' },
          { label: 'd', task: 'L\'annee prochaine, j\' ___ (etudier) a Paris. (fremtid)', solution: 'etudierai (futur simple)' },
        ],
        solution: 'a) pleuvait, b) avons fini, c) fasses, d) etudierai',
        hints: ['Bakgrunn = imparfait', 'Avsluttet handling = passé composé', 'Etter "il faut que" = subjonctif'],
      },
    },
    {
      id: 'fransk-3-10-4-text-2',
      type: 'text',
      content: `## Vanlige feil å unngå (Erreurs fréquentes)

**1. Accord du participe passe (samsvarsbøyning):**
- Feil: Elle est alle au marche.
- Riktig: Elle est all**ee** au marche. (samsvar med subjekt ved etre)

**2. Subjonctif etter bestemte uttrykk:**
- Feil: Il faut que tu vas.
- Riktig: Il faut que tu **ailles**. (subjonctif av aller)

**3. Preposisjoner med land:**
- en + hunkjonnsland/land på vokal: en France, en Italie
- au + hankjønnsland: au Japon, au Canada
- aux + flertall: aux États-Unis

**4. Pronomen - rekkefolgye:**
- Feil: Je le lui ai pas dit.
- Riktig: Je ne **le lui** ai **pas** dit.

**5. Dont vs. que vs. qui:**
- qui = som (subjekt): L'homme **qui** parle...
- que = som (objekt): Le livre **que** je lis...
- dont = som/hvis (med "de"): L'homme **dont** je parle...`,
    },
    {
      id: 'fransk-3-10-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Rett opp feilene',
      problem: `Finn og rett opp feilen i hver setning:
a) Elle est parti en vacances.
b) Il faut que tu es content.
c) Je suis alle en Japon.
d) Le film qui j'ai vu etait excellent.`,
      solution: `a) Elle est parti**e** en vacances. (Samsvar: elle -> partie)
b) Il faut que tu **sois** content. (Subjonctif av etre etter "il faut que")
c) Je suis alle **au** Japon. (Hankjonnsland: au, ikke en)
d) Le film **que** j'ai vu etait excellent. (Objekt: que, ikke qui)`,
    },
    {
      id: 'fransk-3-10-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rett opp feilen i hver setning.',
        subTasks: [
          { label: 'a', task: 'Les filles sont alle au parc.', solution: 'Les filles sont allées au parc. (samsvar: filles -> allées)' },
          { label: 'b', task: 'Je vais en Canada cet été.', solution: 'Je vais au Canada cet été. (hankjønnsland: au)' },
          { label: 'c', task: 'Il faut que nous allons à l\'école.', solution: 'Il faut que nous allions à l\'école. (subjonctif etter il faut que)' },
          { label: 'd', task: 'La personne qui je connais est gentille.', solution: 'La personne que je connais est gentille. (objekt: que)' },
        ],
        solution: 'a) allées (samsvar), b) au Canada (hankjønnsland), c) allions (subjonctif), d) que (objekt)',
        hints: ['Sjekk samsvar med subjekt ved être-verb', 'Etter "il faut que" brukes subjonctif', 'Hankjønnsland = au, hunkjønnsland = en'],
      },
    },
    {
      id: 'fransk-3-10-4-text-3',
      type: 'text',
      content: `## Strategies d'examen - Eksamensstrategier

**Tidsbruk:**
- Les gjennom hele oppgavesettet forst (5 minutter)
- Fordeloppgavene: bruk ca. 60% av tiden på skriftlige oppgaver
- Sett av tid til gjennomlesing på slutten (10 minutter)

**For leseforståelse:**
1. Les spørsmålene for du leser teksten
2. Les teksten to ganger: først for helhet, sa for detaljer
3. Understrek nøkkelord
4. Svar med egne ord når det er mulig

**For skriftlig produksjon:**
1. Planlegg teksten for du begynner å skrive
2. Lag en disposisjon (innledning - hoveddel - konklusjon)
3. Bruk varierte setningsstrukturer og tekstbindere
4. Sjekk grammatikk: verbtider, samsvar, preposisjoner
5. Varier ordforrådet - unnga gjentakelser

**Generelle tips:**
- Svar på det som blir spurt om
- Vis at du behersker avanserte strukturer (subjonctif, conditionnel)
- Bruk eksempler fra kultur og samfunn
- Skriv tydelig og strukturert`,
    },
    {
      id: 'fransk-3-10-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Forbedre en tekst',
      problem: `Forbedre denne teksten ved å legge til tekstbindere, variere ordforrådet og rette feil:

"Le français est important. Le français est parle par beaucoup de personnes. Le français est utile pour le travail. Je aime le français."`,
      solution: `**Forbedret versjon:**

Le français est une langue d'une grande importance. **En effet**, il est parlé par plus de 300 millions de personnes dans le monde. **De plus**, cette langue est particulierement utile dans le monde professionnel, **notamment** dans les domaines de la diplomatie et du commerce international. **C'est pourquoi** j'apprecie beaucoup **cette langue riche et fascinante**.

**Forbedringer:**
- Variert ordforråd (le français -> cette langue, il, cette langue riche)
- Tekstbindere (en effet, de plus, notamment, c'est pourquoi)
- Rettet feil (je aime -> j'apprecie)
- Mer detaljert innhold`,
    },
    {
      id: 'fransk-3-10-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk med variert språk.',
        subTasks: [
          { label: 'a', task: 'Etter min mening er frankofoni viktig fordi den fremmer kulturelt mangfold.', solution: 'A mon avis, la francophonie est importante car elle promeut la diversité culturelle.' },
          { label: 'b', task: 'Selv om engelsk dominerer, har fransk en viktig rolle i verden.', solution: 'Bien que l\'anglais domine, le français joue un rôle important dans le monde.' },
          { label: 'c', task: 'For å oppsummere har vi sett at fremtiden for fransk avhenger av utdanning.', solution: 'Pour résumer, nous avons vu que l\'avenir du français depend de l\'éducation.' },
        ],
        solution: 'a) A mon avis, la francophonie est importante car elle promeut la diversité culturelle. b) Bien que l\'anglais domine, le français joue un rôle important dans le monde. c) Pour résumer, nous avons vu que l\'avenir du français depend de l\'éducation.',
        hints: ['bien que + subjonctif = selv om', 'jouer un rôle = spille en rolle', 'dependre de = avhenge av'],
      },
    },
    {
      id: 'fransk-3-10-4-text-4',
      type: 'text',
      content: `## Hva har du lært i Fransk Nivå 3?

I Fransk Nivå 3 har du lært:

1. **Samfunn og politikk** - det franske politiske systemet, demokrati og medborgerskap
2. **Kulturelt mangfold** - innvandring, integrering, identitet
3. **Miljo og barekraft** - klimaendringer, energi, forbruk
4. **Medier og teknologi** - sosiale medier, digital kommunikasjon
5. **Litteratur og kunst** - litterær analyse, stilfigurer, kunsthistorie
6. **Arbeids- og naerlingsliv** - jobb, utdanning, karriere
7. **Globaliseringens utfordringer** - handel, kulturutveksling
8. **Frankofoni** - fransktalende land, kolonihistorie, kreolspråk
9. **Eksamensferdigheter** - leseforståelse, skriftlig og muntlig produksjon

**Bonne chance pour l'examen !** (Lykke til med eksamen!)`,
    },
    {
      id: 'fransk-3-10-4-note-1',
      type: 'note',
      title: 'Tips til videre læring',
      content: `For å fortsette å forbedre fransken din:
- Les franske aviser og magasiner (Le Monde, Le Figaro, Courrier international)
- Se franske filmer og serier (med franske undertekster)
- Hor på franske podkaster (France Inter, RFI)
- Skriv dagbok på fransk
- Finn en språkpartner eller delta i språkreiser
- Følg franskspråklige kontoer på sosiale medier
- Les franskspråklig litteratur fra ulike deler av verden`,
    },
    {
      id: 'fransk-3-10-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort sammenhengende tekst på fransk (3-4 setninger) om hvert tema.',
        subTasks: [
          { label: 'a', task: 'Skriv om hvorfor du lærer fransk.', solution: 'J\'apprends le français parce que c\'est une langue riche et fascinante. De plus, le français est parle dans le monde entier. C\'est pourquoi je trouve cette langue utile pour mon avenir.' },
          { label: 'b', task: 'Skriv om frankofoniens fremtid.', solution: 'L\'avenir de la francophonie semble prometteur. En effet, le nombre de francophones pourrait atteindre 700 millions en 2050. Cependant, il faut investir dans l\'éducation pour assurer cet avenir.' },
          { label: 'c', task: 'Skriv om ditt favorittema fra kurset.', solution: 'Mon sujet prefere dans ce cours a été la francophonie africaine. J\'ai trouve fascinant de decouvrir la richesse culturelle et linguistique de l\'Afrique francophone. Cela m\'a ouvert les yeux sur la diversité du monde francophone.' },
          { label: 'd', task: 'Gi et råd til noen som skal begynne å lære fransk.', solution: 'Je conseillerais de pratiquer le français tous les jours. Par exemple, on peut écouter des podcasts, regarder des films ou lire des articles en français. L\'essentiel est de ne pas avoir peur de faire des erreurs.' },
        ],
        solution: 'Fri oppgave - se løsningsforslag i deloppgavene.',
        hints: ['Bruk tekstbindere', 'Varier setningsstrukturene', 'Vis at du behersker ulike verbtider'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_3_CHAPTERS_9_10: TextbookChapter[] = [
  CHAPTER_FRANSK_3_9_1,
  CHAPTER_FRANSK_3_9_2,
  CHAPTER_FRANSK_3_9_3,
  CHAPTER_FRANSK_3_9_4,
  CHAPTER_FRANSK_3_10_1,
  CHAPTER_FRANSK_3_10_2,
  CHAPTER_FRANSK_3_10_3,
  CHAPTER_FRANSK_3_10_4,
];
