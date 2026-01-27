/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Niva 3 - Kapittel 9-10
 *
 * Kapittel 9: Frankofoni (La francophonie)
 * Kapittel 10: Eksamensforberedelse (Preparation a l'examen)
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
  description: 'Laer om fransktalende land i Afrika, kolonialismens historie, sprak og litteratur fra Senegal, Elfenbenskysten, Kongo og Madagaskar.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for fransktalende land i Afrika og deres historie',
    'diskutere kolonialismens betydning for spraksituasjonen i Afrika',
  ],
  content: [
    {
      id: 'fransk-3-9-1-intro',
      type: 'text',
      content: `## L'Afrique francophone - Fransktalende Afrika

L'Afrique est le continent ou le francais est le plus parle en nombre de locuteurs. Afrika er kontinentet der fransk snakkes av flest mennesker. Over 140 millioner mennesker i Afrika bruker fransk daglig, enten som forstesprak, andresprak eller administrasjonssprak.

Den franske tilstedevaerelsen i Afrika begynte med kolonialismen pa 1600-tallet og formet kontinentet politisk, kulturelt og spraklig. I dag er fransk offisielt sprak i 21 afrikanske land.`,
    },
    {
      id: 'fransk-3-9-1-text-1',
      type: 'text',
      content: `## Viktige fransktalende land i Afrika

| Land | Fransk navn | Hovedstad | Uavhengighet |
|------|-------------|-----------|--------------|
| Senegal | le Senegal | Dakar | 1960 |
| Elfenbenskysten | la Cote d'Ivoire | Yamoussoukro | 1960 |
| Kongo (DR) | la Republique democratique du Congo | Kinshasa | 1960 |
| Madagaskar | Madagascar | Antananarivo | 1960 |
| Kamerun | le Cameroun | Yaounde | 1960 |
| Mali | le Mali | Bamako | 1960 |

Alle disse landene ble uavhengige rundt 1960, et ar som ofte kalles **l'annee de l'Afrique** (Afrikas ar).`,
    },
    {
      id: 'fransk-3-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Kolonihistorie',
      problem: `Les teksten og svar pa sporsmalene:

"La France a colonise une grande partie de l'Afrique de l'Ouest et de l'Afrique centrale a partir du XIXe siecle. L'administration coloniale a impose le francais comme langue officielle, remplacant souvent les langues locales dans l'education et le gouvernement."

a) Hvilke deler av Afrika koloniserte Frankrike?
b) Hva patvang koloniadministrasjonen?
c) Hva ble erstattet?`,
      solution: `a) Frankrike koloniserte store deler av Vest-Afrika (l'Afrique de l'Ouest) og Sentral-Afrika (l'Afrique centrale).
b) Koloniadministrasjonen patvang fransk som offisielt sprak (a impose le francais comme langue officielle).
c) De lokale sprakene ble erstattet i utdanning og forvaltning (remplacant les langues locales dans l'education et le gouvernement).`,
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
          { label: 'a', task: 'Senegal ble uavhengig i 1960.', solution: 'Le Senegal est devenu independant en 1960.' },
          { label: 'b', task: 'Fransk er offisielt sprak i mange afrikanske land.', solution: 'Le francais est la langue officielle dans de nombreux pays africains.' },
          { label: 'c', task: 'Kolonialismen formet kontinentet.', solution: 'Le colonialisme a faconne le continent.' },
          { label: 'd', task: 'Over 140 millioner mennesker snakker fransk i Afrika.', solution: 'Plus de 140 millions de personnes parlent francais en Afrique.' },
        ],
        solution: 'a) Le Senegal est devenu independant en 1960. b) Le francais est la langue officielle dans de nombreux pays africains. c) Le colonialisme a faconne le continent. d) Plus de 140 millions de personnes parlent francais en Afrique.',
        hints: ['devenir independant = bli uavhengig', 'faconner = forme'],
      },
    },
    {
      id: 'fransk-3-9-1-text-2',
      type: 'text',
      content: `## La negritude - Negritude-bevegelsen

Negritude-bevegelsen oppsto pa 1930-tallet som en litteraer og politisk bevegelse. Den ble grunnlagt av tre sentrale skikkelser:

- **Leopold Sedar Senghor** (Senegal, 1906-2001): Poet, filosof og Senegals forste president. Mottok flere litteraere priser.
- **Aime Cesaire** (Martinique, 1913-2008): Poet og politiker fra Martinique. Skrev det beroemte verket *Cahier d'un retour au pays natal*.
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
b) Hvordan relaterer dette seg til negritude-bevegelsen?`,
      solution: `a) Senghor uttrykker et onske om likeverd - han vil verken vaere hvit eller svart, men et menneske blant mennesker ("un homme parmi les hommes").
b) Negritude-bevegelsen handlet om a gjenvinne afrikansk verdighet og identitet, men ogsa om universell humanisme. Senghor onsket a overskride raseskiller og fremme menneskets felles verdi.`,
    },
    {
      id: 'fransk-3-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Svar pa sporsmalene om negritude-bevegelsen.',
        subTasks: [
          { label: 'a', task: 'Nar oppsto negritude-bevegelsen?', solution: 'Negritude-bevegelsen oppsto pa 1930-tallet (dans les annees 1930).' },
          { label: 'b', task: 'Nevn de tre grunnleggerne.', solution: 'Leopold Sedar Senghor, Aime Cesaire og Leon-Gontran Damas.' },
          { label: 'c', task: 'Hva var hovedmalet til bevegelsen?', solution: 'A fremme afrikansk identitet og kultur som motreaksjon mot kolonial undertrykkelse.' },
          { label: 'd', task: 'Hva het Cesaires mest kjente verk?', solution: 'Cahier d\'un retour au pays natal.' },
        ],
        solution: 'a) Pa 1930-tallet. b) Senghor, Cesaire og Damas. c) A fremme afrikansk identitet og kultur. d) Cahier d\'un retour au pays natal.',
        hints: ['la negritude = negritude-bevegelsen', 'le colonialisme = kolonialismen'],
      },
    },
    {
      id: 'fransk-3-9-1-text-3',
      type: 'text',
      content: `## Sprak og flerspraklighet i Afrika

De fleste afrikanske land er flerspraklige. Folk snakker ofte:
1. Et **lokalt sprak** (langue locale) - morsmalet
2. Et **regionalt sprak** (langue vehiculaire) - for kommunikasjon mellom grupper
3. **Fransk** (le francais) - som offisielt sprak i utdanning og forvaltning

| Sprakbegrep | Fransk | Eksempel |
|-------------|--------|----------|
| Morsmalet | la langue maternelle | wolof i Senegal |
| Fellessprak | la langue vehiculaire | lingala i Kongo |
| Offisielt sprak | la langue officielle | le francais |
| Flerspraklighet | le plurilinguisme | vanlig i hele Afrika |`,
    },
    {
      id: 'fransk-3-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Spraklig mangfold',
      problem: `Oversett til norsk:
a) La langue maternelle est la premiere langue qu'on apprend.
b) Le plurilinguisme est une richesse culturelle.
c) Le francais coexiste avec les langues locales.`,
      solution: `a) Morsmalet er det forste spraket man laerer.
b) Flerspraklighet er en kulturell rikdom.
c) Fransk eksisterer side om side med de lokale sprakene.`,
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
          { label: 'a', task: 'Morsmalet er viktig for identiteten.', solution: 'La langue maternelle est importante pour l\'identite.' },
          { label: 'b', task: 'De fleste afrikanere snakker flere sprak.', solution: 'La plupart des Africains parlent plusieurs langues.' },
          { label: 'c', task: 'Fransk er administrasjonssprak i Senegal.', solution: 'Le francais est la langue d\'administration au Senegal.' },
        ],
        solution: 'a) La langue maternelle est importante pour l\'identite. b) La plupart des Africains parlent plusieurs langues. c) Le francais est la langue d\'administration au Senegal.',
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
| l'independance | uavhengigheten |
| la decolonisation | avkoloniseringen |
| la negritude | negritude-bevegelsen |
| la langue officielle | det offisielle spraket |
| le plurilinguisme | flerspraklighet |
| l'identite culturelle | kulturell identitet |
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
        task: 'Hva betyr disse begrepene pa norsk?',
        subTasks: [
          { label: 'a', task: 'la decolonisation', solution: 'avkoloniseringen' },
          { label: 'b', task: 'le patrimoine', solution: 'kulturarven' },
          { label: 'c', task: 'l\'identite culturelle', solution: 'kulturell identitet' },
          { label: 'd', task: 'l\'independance', solution: 'uavhengigheten' },
        ],
        solution: 'a) avkoloniseringen, b) kulturarven, c) kulturell identitet, d) uavhengigheten',
        hints: ['de- = av- (prefiks som betyr fjerning)', 'patrimoine kommer fra latin pater = far'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2: Le Quebec et le Canada francais - Quebec og fransk Canada
// ============================================================================

export const CHAPTER_FRANSK_3_9_2: TextbookChapter = {
  id: 'fransk-3-9-2',
  courseId: 'fransk-3',
  chapterNumber: '9.2',
  title: 'Le Quebec et le Canada francais',
  subtitle: 'Quebec og fransk Canada',
  description: 'Laer om Quebec, fransk-kanadisk historie, sprakbevaring, joual, Acadie og tospraklighetspolitikk i Canada.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for Quebecs historie og fransk-kanadisk identitet',
    'diskutere sprakbevaring og tospraklighetspolitikk i Canada',
  ],
  content: [
    {
      id: 'fransk-3-9-2-intro',
      type: 'text',
      content: `## Le Quebec et le Canada francais

Le Quebec est une province canadienne ou le francais est la langue officielle. Quebec er en kanadisk provins der fransk er det offisielle spraket. Med over 8 millioner innbyggere er Quebec det storste fransktalende omradet utenfor Frankrike.

Historien om fransk Canada begynner i 1534, da Jacques Cartier utforsket St. Lawrence-elven, og i 1608 da Samuel de Champlain grunnla byen Quebec.`,
    },
    {
      id: 'fransk-3-9-2-text-1',
      type: 'text',
      content: `## Historisk bakgrunn

| Arstall | Hendelse | Fransk |
|---------|----------|--------|
| 1534 | Cartier utforsker St. Lawrence | Cartier explore le Saint-Laurent |
| 1608 | Champlain grunnlegger Quebec | Champlain fonde Quebec |
| 1763 | Frankrike avgir Canada til Storbritannia | La France cede le Canada a la Grande-Bretagne |
| 1867 | Det kanadiske forbundet dannes | La Confederation canadienne est formee |
| 1960 | Den stille revolusjonen begynner | La Revolution tranquille commence |
| 1977 | Lov 101 (Charter of the French Language) | La Loi 101 est adoptee |

Etter **la Conquete** (erobringen) i 1763 ble de fransk-kanadiske innbyggerne en minoritet i det britisk-styrte Canada. Til tross for dette bevarte de spraket og kulturen sin gjennom kirken, familien og lokale institusjoner.`,
    },
    {
      id: 'fransk-3-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Quebecs historie',
      problem: `Les teksten og svar pa sporsmalene:

"La Revolution tranquille des annees 1960 a transforme le Quebec. Les Quebecois ont revendique leur identite francophone et ont modernise leur societe. Le gouvernement a pris le controle de l'education et de la sante."

a) Hva er la Revolution tranquille?
b) Hva krevde quebecerne?
c) Hva tok regjeringen kontroll over?`,
      solution: `a) Den stille revolusjonen var en moderniserings- og reformperiode pa 1960-tallet som transformerte Quebec (a transforme le Quebec).
b) Quebecerne krevde sin franskspraklige identitet (ont revendique leur identite francophone) og moderniserte samfunnet.
c) Regjeringen tok kontroll over utdanning (l'education) og helsevesen (la sante).`,
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
          { label: 'a', task: 'Quebec ble grunnlagt i 1608.', solution: 'Quebec a ete fonde en 1608.' },
          { label: 'b', task: 'Den stille revolusjonen forandret Quebec.', solution: 'La Revolution tranquille a transforme le Quebec.' },
          { label: 'c', task: 'Fransk er det offisielle spraket i Quebec.', solution: 'Le francais est la langue officielle du Quebec.' },
          { label: 'd', task: 'Quebecerne bevarte spraket sitt.', solution: 'Les Quebecois ont conserve leur langue.' },
        ],
        solution: 'a) Quebec a ete fonde en 1608. b) La Revolution tranquille a transforme le Quebec. c) Le francais est la langue officielle du Quebec. d) Les Quebecois ont conserve leur langue.',
        hints: ['fonder = grunnlegge', 'transformer = forandre/transformere'],
      },
    },
    {
      id: 'fransk-3-9-2-text-2',
      type: 'text',
      content: `## Le joual et le francais quebecois

Quebecfransken skiller seg fra europeisk fransk pa flere mater:

**Uttale:**
- "moi" uttales ofte som "moe"
- "tu" foran vokal kan bli "t'" (T'es-tu la? = Es-tu la?)

**Ordforrad (les quebecismes):**

| Quebecfransk | Europeisk fransk | Norsk |
|--------------|-----------------|-------|
| une blonde | une petite amie | en kjaerest |
| un char | une voiture | en bil |
| magasiner | faire du shopping | handle |
| achaler | ennuyer | plage |
| icitte | ici | her |
| pantoute | pas du tout | overhodet ikke |

**Le joual** er en folkelig dialekt fra Montreal som brukes i litteratur og teater for a uttrykke quebecsk identitet.`,
    },
    {
      id: 'fransk-3-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Quebecfransk vs. europeisk fransk',
      problem: `"Oversett" fra quebecfransk til standardfransk:
a) J'ai pris mon char pour aller magasiner.
b) Ma blonde m'achale pantoute.
c) Viens icitte!`,
      solution: `a) J'ai pris ma voiture pour aller faire du shopping. (Jeg tok bilen for a dra og handle.)
b) Ma petite amie ne m'ennuie pas du tout. (Kjaerestene min plager meg overhodet ikke.)
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
          { label: 'a', task: 'Hva betyr "un char" pa standardfransk?', solution: 'une voiture (en bil)' },
          { label: 'b', task: 'Hva betyr "pantoute" pa standardfransk?', solution: 'pas du tout (overhodet ikke)' },
          { label: 'c', task: 'Hva betyr "achaler" pa standardfransk?', solution: 'ennuyer (plage/irritere)' },
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

**L'Acadie** (Acadia) er et fransktalende omrade i de maritime provinsene i oestlige Canada (New Brunswick, Nova Scotia, Prince Edward Island). Acadierne ble deportert av britene i 1755 (**le Grand Derangement**), men mange vendte tilbake.

**Tospraklighetspolitikk:**
- I 1969 vedtok Canada **la Loi sur les langues officielles** (loven om offisielle sprak), som ga fransk og engelsk lik status pa foederalt niva.
- I 1977 vedtok Quebec **la Loi 101**, som gjorde fransk til det eneste offisielle spraket i provinsen.
- New Brunswick er Canadas eneste offisielt tospraklige provins.`,
    },
    {
      id: 'fransk-3-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Tospraklighetspolitikk',
      problem: `Oversett til norsk:
a) Le Canada est un pays officiellement bilingue.
b) La Loi 101 protege la langue francaise au Quebec.
c) Les Acadiens ont ete deportes en 1755.`,
      solution: `a) Canada er et offisielt tospraklig land.
b) Lov 101 beskytter det franske spraket i Quebec.
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
        task: 'Svar pa sporsmalene om Acadie og tospraklighetspolitikk.',
        subTasks: [
          { label: 'a', task: 'Hva er le Grand Derangement?', solution: 'Deportasjonen av acadierne fra de maritime provinsene i 1755.' },
          { label: 'b', task: 'Hva er la Loi 101?', solution: 'En lov fra 1977 som gjorde fransk til det eneste offisielle spraket i Quebec.' },
          { label: 'c', task: 'Hvilken provins er offisielt tospraklig?', solution: 'New Brunswick er Canadas eneste offisielt tospraklige provins.' },
        ],
        solution: 'a) Deportasjonen av acadierne i 1755. b) Lov 101, som beskytter fransk i Quebec. c) New Brunswick.',
        hints: ['derangement = forstyrrelse/forflytning', 'bilingue = tospraklig'],
      },
    },
    {
      id: 'fransk-3-9-2-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige begreper

| Fransk | Norsk |
|--------|-------|
| la Nouvelle-France | Ny-Frankrike |
| la Conquete | erobringen (1763) |
| la Revolution tranquille | den stille revolusjonen |
| la Loi 101 | lov 101 (spraklov) |
| le bilinguisme | tosprakliget |
| le quebecisme | quebecsk saerord |
| le joual | folkelig Montreal-dialekt |
| le Grand Derangement | deportasjonen av acadierne |`,
    },
    {
      id: 'fransk-3-9-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva betyr disse begrepene pa norsk?',
        subTasks: [
          { label: 'a', task: 'la Nouvelle-France', solution: 'Ny-Frankrike' },
          { label: 'b', task: 'la Revolution tranquille', solution: 'den stille revolusjonen' },
          { label: 'c', task: 'le bilinguisme', solution: 'tosprakliget' },
          { label: 'd', task: 'la Conquete', solution: 'erobringen (1763)' },
        ],
        solution: 'a) Ny-Frankrike, b) den stille revolusjonen, c) tosprakliget, d) erobringen (1763)',
        hints: ['nouvelle = ny', 'tranquille = stille/rolig', 'conquete = erobring'],
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
  description: 'Laer om den franske tilstedevaerelsen i Vietnam, Laos, Kambodsja og Polynesia, samt kreolsprak.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for den franske tilstedevaerelsen i Asia og Stillehavet',
    'diskutere kreolsprak og deres forhold til fransk',
  ],
  content: [
    {
      id: 'fransk-3-9-3-intro',
      type: 'text',
      content: `## La francophonie en Asie et Pacifique

La presence francaise en Asie et dans le Pacifique remonte au XIXe siecle. Den franske tilstedevaerelsen i Asia og Stillehavet gar tilbake til 1800-tallet. Frankrike etablerte kolonier i Indokina (Vietnam, Laos, Kambodsja) og i Stillehavet (Ny-Caledonia, Fransk Polynesia).

Selv om fransk ikke lenger er hovedsprak i de fleste av disse omradene, har det satt dype spor i kultur, arkitektur og utdanningssystemer.`,
    },
    {
      id: 'fransk-3-9-3-text-1',
      type: 'text',
      content: `## L'Indochine francaise - Fransk Indokina

Fransk Indokina (1887-1954) besto av tre land:

| Land | Fransk navn | Hovedstad | Kolonitid |
|------|-------------|-----------|-----------|
| Vietnam | le Vietnam | Hanoi | 1858-1954 |
| Laos | le Laos | Vientiane | 1893-1954 |
| Kambodsja | le Cambodge | Phnom Penh | 1863-1954 |

**Viktige hendelser:**
- 1858: Frankrike begynner koloniseringen av Vietnam
- 1887: Dannelsen av l'Indochine francaise
- 1954: Slaget ved Dien Bien Phu - Frankrike taper og trekker seg ut
- Fransk innflytelse ses fortsatt i arkitektur, matkultur og utdanning

I dag er fransk et minoritetssprak i disse landene, men alle tre er medlemmer av **l'Organisation internationale de la Francophonie (OIF)**.`,
    },
    {
      id: 'fransk-3-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Fransk Indokina',
      problem: `Les teksten og svar pa sporsmalene:

"La defaite francaise a Dien Bien Phu en 1954 a marque la fin de la presence coloniale francaise en Indochine. Cependant, l'heritage culturel francais reste visible dans l'architecture, la gastronomie et le systeme educatif."

a) Hva markerte slutten pa fransk tilstedevaerelse i Indokina?
b) Nar skjedde dette?
c) Hvor ser man fortsatt fransk innflytelse?`,
      solution: `a) Det franske nederlaget ved Dien Bien Phu (la defaite francaise a Dien Bien Phu) markerte slutten.
b) Det skjedde i 1954.
c) Man ser fortsatt fransk innflytelse i arkitektur (l'architecture), gastronomi (la gastronomie) og utdanningssystemet (le systeme educatif).`,
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
          { label: 'a', task: 'Fransk Indokina ble dannet i 1887.', solution: 'L\'Indochine francaise a ete formee en 1887.' },
          { label: 'b', task: 'Frankrike koloniserte Vietnam i 1858.', solution: 'La France a colonise le Vietnam en 1858.' },
          { label: 'c', task: 'Den franske kulturarven er fortsatt synlig.', solution: 'L\'heritage culturel francais reste visible.' },
          { label: 'd', task: 'Disse landene er medlemmer av OIF.', solution: 'Ces pays sont membres de l\'OIF.' },
        ],
        solution: 'a) L\'Indochine francaise a ete formee en 1887. b) La France a colonise le Vietnam en 1858. c) L\'heritage culturel francais reste visible. d) Ces pays sont membres de l\'OIF.',
        hints: ['former = danne', 'l\'heritage = arven/kulturarven'],
      },
    },
    {
      id: 'fransk-3-9-3-text-2',
      type: 'text',
      content: `## Le Pacifique francophone - Det fransktalende Stillehavet

Frankrike har fortsatt territorier i Stillehavet:

| Territorium | Status | Hovedstad |
|-------------|--------|-----------|
| Ny-Caledonia | Oversoisk territorium | Noumea |
| Fransk Polynesia | Oversoisk fellesskap | Papeete (Tahiti) |
| Wallis og Futuna | Oversoisk fellesskap | Mata-Utu |

Disse omradene har en unik blanding av **fransk kultur** og **polynesisk/melanesisk kultur**. Fransk er offisielt sprak, men lokale sprak som tahitiansk og kanaksprak snakkes ogsa.

Fransk Polynesia er kjent for sine vakre oyer, spesielt Tahiti og Bora Bora, og har inspirert kunstnere som Paul Gauguin.`,
    },
    {
      id: 'fransk-3-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Stillehavet',
      problem: `Oversett til norsk:
a) La Polynesie francaise est composee de 118 iles.
b) Le tahitien est parle a cote du francais.
c) Paul Gauguin a vecu a Tahiti.`,
      solution: `a) Fransk Polynesia bestar av 118 oyer.
b) Tahitiansk snakkes ved siden av fransk.
c) Paul Gauguin bodde pa Tahiti.`,
    },
    {
      id: 'fransk-3-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar pa sporsmalene om det fransktalende Stillehavet.',
        subTasks: [
          { label: 'a', task: 'Nevn tre franske territorier i Stillehavet.', solution: 'Ny-Caledonia, Fransk Polynesia og Wallis og Futuna.' },
          { label: 'b', task: 'Hva er hovedstaden i Fransk Polynesia?', solution: 'Papeete pa Tahiti.' },
          { label: 'c', task: 'Hvilken kjent kunstner bodde pa Tahiti?', solution: 'Paul Gauguin.' },
          { label: 'd', task: 'Hva er forholdet mellom fransk og lokale sprak i disse omradene?', solution: 'Fransk er offisielt sprak, men lokale sprak som tahitiansk snakkes ogsa.' },
        ],
        solution: 'a) Ny-Caledonia, Fransk Polynesia, Wallis og Futuna. b) Papeete. c) Paul Gauguin. d) Fransk er offisielt, men lokale sprak brukes ogsa.',
        hints: ['la Polynesie francaise = Fransk Polynesia', 'la Nouvelle-Caledonie = Ny-Caledonia'],
      },
    },
    {
      id: 'fransk-3-9-3-text-3',
      type: 'text',
      content: `## Les langues creoles - Kreolsprak

Kreolsprak oppsto nar folk med ulike sprak matte kommunisere under kolonitiden. Mange kreolsprak er basert pa fransk:

| Kreolsprak | Omrade | Eksempel |
|------------|--------|----------|
| Haitisk kreol | Haiti | Mwen kontan = Je suis content (Jeg er glad) |
| Mauritisk kreol | Mauritius | Mo bien = Je vais bien (Jeg har det bra) |
| Reunionesisk kreol | Reunion | Koman i le? = Comment allez-vous? (Hvordan har du det?) |
| Seychellisk kreol | Seychellene | Mon kontan = Je suis content |

Kreolsprak er ikke "darlig fransk" - de er fullverdige sprak med egen grammatikk, ordforrad og litteratur. De anerkjennes i dag som viktige kulturelle uttrykk.`,
    },
    {
      id: 'fransk-3-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Kreolsprak',
      problem: `Svar pa sporsmalene:
a) Hvordan oppsto kreolsprak?
b) Er kreolsprak "darlig fransk"? Forklar.
c) Nevn to omrader der det snakkes franskbasert kreol.`,
      solution: `a) Kreolsprak oppsto nar folk med ulike sprak matte kommunisere under kolonitiden. De utviklet seg fra kontakt mellom europeiske sprak og afrikanske/asiatiske sprak.
b) Nei, kreolsprak er fullverdige sprak med egen grammatikk, ordforrad og litteratur. De er ikke "darlig fransk", men selvstendige spraksystemer.
c) For eksempel Haiti og Mauritius (eller Reunion, Seychellene).`,
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
          { label: 'a', task: 'Kreolsprak oppsto under kolonitiden.', solution: 'Les langues creoles sont nees pendant la periode coloniale.' },
          { label: 'b', task: 'De er fullverdige sprak med egen grammatikk.', solution: 'Ce sont des langues a part entiere avec leur propre grammaire.' },
          { label: 'c', task: 'Haitisk kreol snakkes av over 10 millioner mennesker.', solution: 'Le creole haitien est parle par plus de 10 millions de personnes.' },
        ],
        solution: 'a) Les langues creoles sont nees pendant la periode coloniale. b) Ce sont des langues a part entiere avec leur propre grammaire. c) Le creole haitien est parle par plus de 10 millions de personnes.',
        hints: ['naitre = bli fodt/oppsta', 'a part entiere = fullverdig'],
      },
    },
    {
      id: 'fransk-3-9-3-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige begreper

| Fransk | Norsk |
|--------|-------|
| l'Indochine | Indokina |
| la defaite | nederlaget |
| l'heritage culturel | kulturarven |
| une ile | en oy |
| un territoire d'outre-mer | et oversoisk territorium |
| une langue creole | et kreolsprak |
| le metissage culturel | kulturell blanding |
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
        task: 'Hva betyr disse begrepene pa norsk?',
        subTasks: [
          { label: 'a', task: 'un territoire d\'outre-mer', solution: 'et oversoisk territorium' },
          { label: 'b', task: 'le metissage culturel', solution: 'kulturell blanding' },
          { label: 'c', task: 'la defaite', solution: 'nederlaget' },
          { label: 'd', task: 'la coexistence', solution: 'sameksistens' },
        ],
        solution: 'a) et oversoisk territorium, b) kulturell blanding, c) nederlaget, d) sameksistens',
        hints: ['outre-mer = over havet', 'metissage = blanding/krysning'],
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
  description: 'Laer om OIF-organisasjonen, 300 millioner fransktalende, kulturelt mangfold, sprakpolitikk og franskens fremtid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for OIF og dens rolle i det franskspraklige samarbeidet',
    'diskutere frankofoniens utfordringer og fremtidsutsikter',
  ],
  content: [
    {
      id: 'fransk-3-9-4-intro',
      type: 'text',
      content: `## Les enjeux de la francophonie

La francophonie designe l'ensemble des personnes et des pays utilisant le francais. Frankofonien betegner helheten av personer og land som bruker fransk. I dag er det over 300 millioner fransktalende i verden, og dette tallet forventes a vokse til 700 millioner innen 2050, hovedsakelig pa grunn av befolkningsvekst i Afrika.

Men frankofoni handler om mye mer enn bare sprak - det handler om kulturelt mangfold, samarbeid og felles verdier.`,
    },
    {
      id: 'fransk-3-9-4-text-1',
      type: 'text',
      content: `## L'Organisation internationale de la Francophonie (OIF)

OIF ble grunnlagt i 1970 og har i dag 88 medlemsland og observatorer. Organisasjonen arbeider for:

| Mal | Fransk | Norsk |
|-----|--------|-------|
| Spraklig mangfold | la diversite linguistique | spraklig mangfold |
| Fred og demokrati | la paix et la democratie | fred og demokrati |
| Utdanning | l'education | utdanning |
| Barekraftig utvikling | le developpement durable | barekraftig utvikling |
| Kulturelt samarbeid | la cooperation culturelle | kulturelt samarbeid |

**Viktige tiltak fra OIF:**
- TV5Monde: Internasjonal franskspraklig TV-kanal
- Jeux de la Francophonie: Idrettsarrangement hvert fjerde ar
- Programmes d'echanges educatifs: Utvekslingsprogrammer for studenter`,
    },
    {
      id: 'fransk-3-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1: OIF',
      problem: `Les teksten og svar pa sporsmalene:

"L'OIF reunit 88 Etats et gouvernements. Elle promeut la langue francaise, la diversite culturelle et linguistique, la paix, la democratie et le developpement durable."

a) Hvor mange stater og regjeringer er med i OIF?
b) Hva fremmer organisasjonen? (nevn minst tre ting)
c) Hva star OIF for?`,
      solution: `a) OIF samler 88 stater og regjeringer (88 Etats et gouvernements).
b) Organisasjonen fremmer: det franske spraket, kulturelt og spraklig mangfold, fred, demokrati og barekraftig utvikling.
c) OIF star for Organisation internationale de la Francophonie.`,
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
          { label: 'a', task: 'OIF ble grunnlagt i 1970.', solution: 'L\'OIF a ete fondee en 1970.' },
          { label: 'b', task: 'Organisasjonen fremmer fred og demokrati.', solution: 'L\'organisation promeut la paix et la democratie.' },
          { label: 'c', task: 'Det er over 300 millioner fransktalende i verden.', solution: 'Il y a plus de 300 millions de francophones dans le monde.' },
          { label: 'd', task: 'Kulturelt mangfold er en rikdom.', solution: 'La diversite culturelle est une richesse.' },
        ],
        solution: 'a) L\'OIF a ete fondee en 1970. b) L\'organisation promeut la paix et la democratie. c) Il y a plus de 300 millions de francophones dans le monde. d) La diversite culturelle est une richesse.',
        hints: ['promouvoir = fremme', 'un francophone = en fransktalende'],
      },
    },
    {
      id: 'fransk-3-9-4-text-2',
      type: 'text',
      content: `## Les defis de la francophonie - Utfordringer

Frankofonien star overfor flere utfordringer:

**1. Konkurranse fra engelsk (la concurrence de l'anglais)**
Engelsk dominerer innen teknologi, vitenskap og internasjonal kommunikasjon. Mange unge i fransktalende land foretrekker engelsk.

**2. Spraklig kvalitet (la qualite de la langue)**
Utdanningssystemene i mange fransktalende land sliter med a gi god franskundervisning.

**3. Balanse mellom fransk og lokale sprak (l'equilibre entre le francais et les langues locales)**
Hvordan bevare lokale sprak samtidig som fransk brukes som fellessprak?

**4. Digital tilstedevaerelse (la presence numerique)**
Fransk ma styrke sin posisjon pa internett, i sosiale medier og innen kunstig intelligens.`,
    },
    {
      id: 'fransk-3-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Utfordringer',
      problem: `Diskuter: Hvorfor er forholdet mellom fransk og lokale sprak en utfordring?

Bruk begrepene: la langue officielle, les langues locales, l'equilibre, l'identite culturelle.`,
      solution: `Forholdet er en utfordring fordi fransk som offisielt sprak (la langue officielle) brukes i utdanning og forvaltning, mens lokale sprak (les langues locales) er viktige for kulturell identitet (l'identite culturelle). Det er vanskelig a finne en balanse (l'equilibre) der begge far plass. Hvis lokale sprak marginaliseres, tapes kulturell rikdom, men uten et fellessprak kan kommunikasjon pa tvers av etniske grupper bli vanskelig.`,
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
          { label: 'b', task: 'Utdanningssystemene ma forbedres.', solution: 'Les systemes educatifs doivent etre ameliores.' },
          { label: 'c', task: 'Lokale sprak ma bevares.', solution: 'Les langues locales doivent etre preservees.' },
          { label: 'd', task: 'Fransk ma styrke sin digitale tilstedevaerelse.', solution: 'Le francais doit renforcer sa presence numerique.' },
        ],
        solution: 'a) L\'anglais domine dans le domaine de la technologie. b) Les systemes educatifs doivent etre ameliores. c) Les langues locales doivent etre preservees. d) Le francais doit renforcer sa presence numerique.',
        hints: ['dominer = dominere', 'renforcer = styrke', 'numerique = digital'],
      },
    },
    {
      id: 'fransk-3-9-4-text-3',
      type: 'text',
      content: `## L'avenir du francais - Franskens fremtid

Prognoser viser at antall fransktalende kan na 700 millioner innen 2050. Dette skyldes hovedsakelig befolkningsvekst i fransktalende afrikanske land.

**Faktorer som kan styrke fransk:**
- Befolkningsvekst i Afrika
- OIFs arbeid for utdanning
- TV5Monde og franskspraklige medier
- Franskens rolle i internasjonale organisasjoner (FN, EU)

**Faktorer som kan svekke fransk:**
- Globalisering og engelskens dominans
- Manglende ressurser til utdanning
- Migrasjon til engelsktalende land
- Teknologisk etterslep i franskspraklig innhold

Fremtiden for fransk avhenger i stor grad av kvaliteten pa utdanning i Afrika og av evnen til a tilpasse seg den digitale tidsalderen.`,
    },
    {
      id: 'fransk-3-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Fremtidsutsikter',
      problem: `Oversett til norsk:
a) L'avenir du francais depend de l'education en Afrique.
b) Le nombre de francophones pourrait atteindre 700 millions en 2050.
c) La francophonie doit s'adapter a l'ere numerique.`,
      solution: `a) Franskens fremtid avhenger av utdanningen i Afrika.
b) Antall fransktalende kan na 700 millioner i 2050.
c) Frankofonien ma tilpasse seg den digitale tidsalderen.`,
    },
    {
      id: 'fransk-3-9-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-9-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Svar pa fransk (korte setninger er OK).',
        subTasks: [
          { label: 'a', task: 'Hvorfor kan antall fransktalende vokse?', solution: 'Parce que la population augmente en Afrique francophone.' },
          { label: 'b', task: 'Nevn en internasjonal organisasjon der fransk brukes.', solution: 'Les Nations Unies / l\'Union europeenne / l\'OIF.' },
          { label: 'c', task: 'Hva er den storste utfordringen for frankofoni?', solution: 'La concurrence de l\'anglais et le manque de ressources educatives.' },
        ],
        solution: 'a) Parce que la population augmente en Afrique. b) Les Nations Unies / l\'UE / l\'OIF. c) La concurrence de l\'anglais.',
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
| la diversite culturelle | kulturelt mangfold |
| la concurrence | konkurransen |
| le developpement durable | barekraftig utvikling |
| la presence numerique | digital tilstedevaerelse |
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
        task: 'Hva betyr disse begrepene pa norsk?',
        subTasks: [
          { label: 'a', task: 'la concurrence', solution: 'konkurransen' },
          { label: 'b', task: 'le developpement durable', solution: 'barekraftig utvikling' },
          { label: 'c', task: 'la presence numerique', solution: 'digital tilstedevaerelse' },
          { label: 'd', task: 'l\'avenir', solution: 'fremtiden' },
        ],
        solution: 'a) konkurransen, b) barekraftig utvikling, c) digital tilstedevaerelse, d) fremtiden',
        hints: ['concurrence = konkurranse', 'durable = varig/holdbar', 'numerique = digital'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.1: Comprehension ecrite avancee - Avansert leseforstaelse
// ============================================================================

export const CHAPTER_FRANSK_3_10_1: TextbookChapter = {
  id: 'fransk-3-10-1',
  courseId: 'fransk-3',
  chapterNumber: '10.1',
  title: 'Comprehension ecrite avancee',
  subtitle: 'Avansert leseforstaelse',
  description: 'Laer strategier for a lese komplekse tekster, analysere litteraere tekster og avisartikler, og identifisere argumenter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke ulike lesestrategier for a forsta komplekse franske tekster',
    'analysere argumentasjon og standpunkter i franske tekster',
  ],
  content: [
    {
      id: 'fransk-3-10-1-intro',
      type: 'text',
      content: `## Comprehension ecrite avancee - Avansert leseforstaelse

Pa niva 3 forventes det at du kan lese og forsta komplekse tekster pa fransk, inkludert avisartikler, litteraere tekster og argumenterende tekster. I dette kapittelet laerer du strategier for a mestre avansert leseforstaelse.

A lire, c'est aussi apprendre a penser. A lese er ogsa a laere a tenke.`,
    },
    {
      id: 'fransk-3-10-1-text-1',
      type: 'text',
      content: `## Strategier for leseforstaelse

**For du leser (avant la lecture):**
1. Les tittelen og undertittelen
2. Se pa eventuelle bilder og bildetekster
3. Identifiser teksttypen (artikkel, novelle, essay, kronikk)
4. Aktiver forkunnskap om temaet

**Under lesingen (pendant la lecture):**
1. Les teksten raskt forst for a fa helhetsinntrykk (**lecture globale**)
2. Les teksten grundig for detaljer (**lecture detaillee**)
3. Understrek nokkelord og viktige setninger
4. Bruk konteksten til a gjette ukjente ord
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

"L'utilisation des smartphones en classe fait debat. Certains enseignants estiment que ces appareils perturbent l'apprentissage et reduisent la capacite de concentration des eleves. En revanche, d'autres pedagogues soutiennent que les smartphones peuvent etre des outils educatifs precieux, permettant l'acces immediat a l'information et favorisant l'apprentissage interactif."`,
      solution: `a) Tema: Bruk av smarttelefoner i klasserommet (l'utilisation des smartphones en classe).
b) Forfatterens standpunkt: Teksten er balansert og presenterer begge sider (noen mener... pa den andre siden...).
c) Argumenter:
   - Mot: Smarttelefoner forstyrrer laeringen og reduserer konsentrasjonsevnen.
   - For: Smarttelefoner kan vaere verdifulle pedagogiske verktoy som gir umiddelbar tilgang til informasjon.`,
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
          { label: 'a', task: 'en revanche', solution: 'derimot / pa den andre siden' },
          { label: 'b', task: 'cependant', solution: 'imidlertid / likevel' },
          { label: 'c', task: 'par consequent', solution: 'folgelig / som en konsekvens' },
          { label: 'd', task: 'en outre', solution: 'dessuten / i tillegg' },
        ],
        solution: 'a) derimot, b) imidlertid, c) folgelig, d) dessuten',
        hints: ['Tekstbindere (connecteurs logiques) viser forholdet mellom ideer'],
      },
    },
    {
      id: 'fransk-3-10-1-text-2',
      type: 'text',
      content: `## Les connecteurs logiques - Tekstbindere

For a forsta avanserte tekster er det viktig a kjenne tekstbinderne:

| Funksjon | Fransk | Norsk |
|----------|--------|-------|
| Legge til | de plus, en outre, par ailleurs | dessuten, i tillegg |
| Motsetning | cependant, neanmoins, en revanche, toutefois | imidlertid, likevel, derimot |
| Arsak | car, parce que, puisque, etant donne que | for, fordi, siden, gitt at |
| Konsekvens | par consequent, donc, ainsi, c'est pourquoi | folgelig, altsaa, saledes, derfor |
| Eksempel | par exemple, notamment, en particulier | for eksempel, saerlig |
| Konklusjon | en conclusion, pour conclure, en somme | avslutningsvis, for a konkludere |`,
    },
    {
      id: 'fransk-3-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruke tekstbindere',
      problem: `Fyll inn riktig tekstbinder:
a) Le francais est important. ___, il est parle par 300 millions de personnes. (dessuten)
b) L'anglais domine sur internet. ___, le francais doit renforcer sa presence numerique. (derfor)
c) ___ les langues locales sont importantes, il faut les preserver. (Siden)`,
      solution: `a) Le francais est important. **De plus / En outre**, il est parle par 300 millions de personnes.
b) L'anglais domine sur internet. **C'est pourquoi / Par consequent**, le francais doit renforcer sa presence numerique.
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
          { label: 'a', task: 'Il pleut. ___, je prends mon parapluie. (Derfor)', solution: 'Par consequent / C\'est pourquoi / Donc' },
          { label: 'b', task: 'Le livre est interessant. ___, il est un peu long. (Likevel)', solution: 'Cependant / Neanmoins / Toutefois' },
          { label: 'c', task: 'J\'aime le francais. ___, j\'etudie l\'espagnol. (Dessuten)', solution: 'De plus / En outre / Par ailleurs' },
          { label: 'd', task: '___, la francophonie a un bel avenir. (Avslutningsvis)', solution: 'En conclusion / Pour conclure / En somme' },
        ],
        solution: 'a) Par consequent, b) Cependant, c) De plus, d) En conclusion',
        hints: ['Velg tekstbinder basert pa logisk sammenheng mellom setningene'],
      },
    },
    {
      id: 'fransk-3-10-1-text-3',
      type: 'text',
      content: `## Analyse de texte litteraire - Litteraer analyse

Nar du analyserer en litteraer tekst, se etter:

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
c) J'ai mille choses a faire.
d) La vie est un long fleuve tranquille.`,
      solution: `a) **Personifisering** (la personnification) - Solen danset pa bolgene. Solen far en menneskelig egenskap (a danse).
b) **Sammenlikning** (la comparaison) - Han er sterk som en okse. Bruker "comme" for a sammenlikne.
c) **Hyperbol** (l'hyperbole) - Jeg har tusen ting a gjore. Overdrivelse for a understreke mengden.
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
          { label: 'c', task: 'Les arbres pleurent en automne.', solution: 'Personifisering - Traerne grater om hosten.' },
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
| le registre de langue | sprakniva |
| le champ lexical | ordfeltet |
| l'implicite | det underforstate |
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
        task: 'Hva betyr disse begrepene pa norsk?',
        subTasks: [
          { label: 'a', task: 'le point de vue', solution: 'synspunktet' },
          { label: 'b', task: 'le champ lexical', solution: 'ordfeltet' },
          { label: 'c', task: 'l\'implicite', solution: 'det underforstate' },
          { label: 'd', task: 'la nuance', solution: 'nyanseringen' },
        ],
        solution: 'a) synspunktet, b) ordfeltet, c) det underforstate, d) nyanseringen',
        hints: ['champ = felt, lexical = som gjelder ord', 'implicite = noe som antydes, men ikke sies direkte'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2: Production ecrite avancee - Avansert skriftlig produksjon
// ============================================================================

export const CHAPTER_FRANSK_3_10_2: TextbookChapter = {
  id: 'fransk-3-10-2',
  courseId: 'fransk-3',
  chapterNumber: '10.2',
  title: 'Production ecrite avancee',
  subtitle: 'Avansert skriftlig produksjon',
  description: 'Laer a skrive essay, artikler og formelle brev pa fransk, med argumentasjonsstruktur og nyttige fraser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive strukturerte argumenterende tekster pa fransk',
    'bruke variert ordforrad og avanserte grammatiske strukturer i skriftlig produksjon',
  ],
  content: [
    {
      id: 'fransk-3-10-2-intro',
      type: 'text',
      content: `## Production ecrite avancee - Avansert skriftlig produksjon

Pa niva 3 forventes det at du kan skrive ulike teksttyper pa fransk: essay (la dissertation), artikler (l'article), formelle brev (la lettre formelle) og argumenterende tekster (le texte argumentatif).

God skriftlig produksjon krever en klar struktur, variert ordforrad og presise grammatiske konstruksjoner.`,
    },
    {
      id: 'fransk-3-10-2-text-1',
      type: 'text',
      content: `## La dissertation - Essayet

Et fransk essay har vanligvis tre deler:

**1. L'introduction (innledningen):**
- Presenter temaet (amener le sujet)
- Definer problemstillingen (poser la problematique)
- Presenter planen (annoncer le plan)

**2. Le developpement (hoveddelen):**
- Del 1: Forste synspunkt med argumenter og eksempler
- Del 2: Andre synspunkt med argumenter og eksempler
- Del 3: Syntese eller eget standpunkt

**3. La conclusion (konklusjonen):**
- Oppsummer hovedpunktene
- Svar pa problemstillingen
- Apne for videre refleksjon

**Nyttige fraser for innledning:**
- De nos jours, ... (I var tid, ...)
- Il est indeniable que ... (Det er ubestridelig at ...)
- La question de ... est au coeur du debat. (...-sporsmalet star sentralt i debatten.)`,
    },
    {
      id: 'fransk-3-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Skrive en innledning',
      problem: `Skriv en innledning til et essay om temaet: "Les reseaux sociaux sont-ils benefiques pour la societe?" (Er sosiale medier positivt for samfunnet?)

Bruk strukturen: 1) Presenter temaet, 2) Definer problemstillingen, 3) Presenter planen.`,
      solution: `**Eksempel pa innledning:**

De nos jours, les reseaux sociaux occupent une place centrale dans notre quotidien. Des milliards de personnes utilisent Facebook, Instagram et TikTok chaque jour. Cependant, leur impact sur la societe fait l'objet de vifs debats. Les reseaux sociaux sont-ils reellement benefiques pour la societe ? Nous examinerons d'abord les avantages de ces plateformes, puis nous analyserons leurs inconvenients, avant de proposer une reflexion sur leur usage responsable.

(I var tid inntar sosiale medier en sentral plass i hverdagen var. Milliarder av mennesker bruker Facebook, Instagram og TikTok daglig. Likevel er deres innvirkning pa samfunnet gjenstand for heftig debatt. Er sosiale medier virkelig positivt for samfunnet? Vi skal forst se pa fordelene med disse plattformene, deretter analysere ulempene, for sa a foresla en refleksjon om ansvarlig bruk.)`,
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
          { label: 'a', task: 'I var tid er miljosporsmal viktige.', solution: 'De nos jours, les questions environnementales sont importantes.' },
          { label: 'b', task: 'Vi skal forst undersoke arsakene.', solution: 'Nous examinerons d\'abord les causes.' },
          { label: 'c', task: 'Pa den ene siden... pa den andre siden...', solution: 'D\'une part... d\'autre part...' },
          { label: 'd', task: 'Avslutningsvis kan vi si at...', solution: 'En conclusion, nous pouvons dire que...' },
        ],
        solution: 'a) De nos jours, les questions environnementales sont importantes. b) Nous examinerons d\'abord les causes. c) D\'une part... d\'autre part... d) En conclusion, nous pouvons dire que...',
        hints: ['de nos jours = i var tid', 'd\'abord = forst', 'd\'une part... d\'autre part = pa den ene/andre siden'],
      },
    },
    {
      id: 'fransk-3-10-2-text-2',
      type: 'text',
      content: `## Le texte argumentatif - Argumenterende tekst

For a bygge sterke argumenter, bruk denne strukturen:

**Argument + eksempel + kommentar**

| Steg | Fransk frase | Norsk |
|------|-------------|-------|
| Presentere argument | Premierement, ... / Tout d'abord, ... | For det forste, ... |
| Gi eksempel | Par exemple, ... / Comme le montre ... | For eksempel, ... / Som ... viser |
| Kommentere | Cela montre que ... / On peut en conclure que ... | Dette viser at ... / Man kan konkludere med at ... |
| Legge til argument | De plus, ... / En outre, ... | Dessuten, ... / I tillegg, ... |
| Motargument | Certes, ... mais ... / Il est vrai que ... cependant ... | Riktignok, ... men ... / Det er sant at ... likevel ... |
| Konkludere | En somme, ... / Pour conclure, ... | Oppsummert, ... / For a konkludere, ... |`,
    },
    {
      id: 'fransk-3-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Bygge argumenter',
      problem: `Skriv et kort avsnitt som argumenterer for franskens viktighet. Bruk strukturen: argument + eksempel + kommentar.`,
      solution: `**Premierement**, le francais est une langue internationale de grande importance. **Par exemple**, le francais est langue officielle dans 29 pays et dans de nombreuses organisations internationales comme les Nations Unies et l'Union europeenne. **Cela montre que** le francais reste une langue incontournable dans la diplomatie et la cooperation internationale.

(For det forste er fransk et internasjonalt sprak av stor betydning. For eksempel er fransk offisielt sprak i 29 land og i mange internasjonale organisasjoner som FN og EU. Dette viser at fransk forblir et uunnvaerlig sprak i diplomati og internasjonalt samarbeid.)`,
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
          { label: 'a', task: 'For det forste er utdanning viktig for alle.', solution: 'Premierement, l\'education est importante pour tous.' },
          { label: 'b', task: 'For eksempel viser studier at...', solution: 'Par exemple, les etudes montrent que...' },
          { label: 'c', task: 'Riktignok er det utfordringer, men losingene finnes.', solution: 'Certes, il y a des defis, mais les solutions existent.' },
          { label: 'd', task: 'Oppsummert kan vi si at fremtiden ser lovende ut.', solution: 'En somme, nous pouvons dire que l\'avenir semble prometteur.' },
        ],
        solution: 'a) Premierement, l\'education est importante pour tous. b) Par exemple, les etudes montrent que... c) Certes, il y a des defis, mais les solutions existent. d) En somme, nous pouvons dire que l\'avenir semble prometteur.',
        hints: ['premierement = for det forste', 'certes... mais = riktignok... men', 'prometteur = lovende'],
      },
    },
    {
      id: 'fransk-3-10-2-text-3',
      type: 'text',
      content: `## La lettre formelle - Det formelle brevet

Et formelt brev pa fransk har denne strukturen:

**Hode:**
- Avsenders adresse (oppe til venstre)
- Mottakers adresse (til hoyre, under avsender)
- Sted og dato: Paris, le 15 mars 2026
- Emne: Objet : Demande de renseignements

**Tiltale:**
- Madame, Monsieur, (ukjent mottaker)
- Monsieur le Directeur, (kjent tittel)

**Avslutningsfraser:**
- Je vous prie d'agreer, Madame, Monsieur, l'expression de mes salutations distinguees.
- Veuillez agreer, Madame, Monsieur, mes salutations respectueuses.

**Viktige fraser:**
| Fransk | Norsk |
|--------|-------|
| Je me permets de vous ecrire pour... | Jeg tillater meg a skrive til Dem for... |
| Suite a votre annonce, ... | I forbindelse med Deres annonse, ... |
| Je vous serais reconnaissant(e) de... | Jeg ville vaere takknemlig om De... |
| Dans l'attente de votre reponse, ... | I pavente av Deres svar, ... |`,
    },
    {
      id: 'fransk-3-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Formelle fraser',
      problem: `Oversett til norsk:
a) Je me permets de vous ecrire pour demander des informations.
b) Veuillez trouver ci-joint mon CV.
c) Dans l'attente de votre reponse, je vous prie d'agreer mes salutations distinguees.`,
      solution: `a) Jeg tillater meg a skrive til Dem for a be om informasjon.
b) Vaer vennlig a finne mitt CV vedlagt.
c) I pavente av Deres svar, vennligst motta mine aerbaadige hilsener.`,
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
          { label: 'a', task: 'Kjaere herr direktor,', solution: 'Monsieur le Directeur,' },
          { label: 'b', task: 'Jeg skriver til Dem angaende...', solution: 'Je vous ecris au sujet de...' },
          { label: 'c', task: 'Jeg ville vaere takknemlig om De kunne svare meg.', solution: 'Je vous serais reconnaissant(e) si vous pouviez me repondre.' },
        ],
        solution: 'a) Monsieur le Directeur, b) Je vous ecris au sujet de... c) Je vous serais reconnaissant(e) si vous pouviez me repondre.',
        hints: ['au sujet de = angaende', 'reconnaissant(e) = takknemlig', 'si vous pouviez = om De kunne'],
      },
    },
    {
      id: 'fransk-3-10-2-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige skriveuttrykk

| Fransk | Norsk |
|--------|-------|
| la dissertation | essayet |
| la problematique | problemstillingen |
| l'introduction | innledningen |
| le developpement | hoveddelen |
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
        task: 'Hva betyr disse begrepene pa norsk?',
        subTasks: [
          { label: 'a', task: 'la problematique', solution: 'problemstillingen' },
          { label: 'b', task: 'le developpement', solution: 'hoveddelen (i et essay)' },
          { label: 'c', task: 'la dissertation', solution: 'essayet' },
          { label: 'd', task: 'la lettre formelle', solution: 'det formelle brevet' },
        ],
        solution: 'a) problemstillingen, b) hoveddelen, c) essayet, d) det formelle brevet',
        hints: ['problematique = det sentrale sporsmalet/problemstillingen', 'developpement = utvikling/hoveddel'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3: Comprehension et production orale - Muntlig forstaelse og produksjon
// ============================================================================

export const CHAPTER_FRANSK_3_10_3: TextbookChapter = {
  id: 'fransk-3-10-3',
  courseId: 'fransk-3',
  chapterNumber: '10.3',
  title: 'Comprehension et production orale',
  subtitle: 'Muntlig forstaelse og produksjon',
  description: 'Laer lyttestrategier, teknikker for muntlig presentasjon, debattferdigheter og uttale.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke strategier for a forsta muntlig fransk i ulike situasjoner',
    'holde strukturerte muntlige presentasjoner og delta i debatter pa fransk',
  ],
  content: [
    {
      id: 'fransk-3-10-3-intro',
      type: 'text',
      content: `## Comprehension et production orale

Pa niva 3 skal du kunne forsta muntlig fransk i ulike sammenhenger og selv produsere sammenhengende muntlig fransk. Dette inkluderer a forsta nyheter, foredrag og samtaler, samt a holde presentasjoner og delta i debatter.

La communication orale est essentielle pour maitriser une langue. Muntlig kommunikasjon er avgjorende for a mestre et sprak.`,
    },
    {
      id: 'fransk-3-10-3-text-1',
      type: 'text',
      content: `## Strategies d'ecoute - Lyttestrategier

**For du lytter (avant l'ecoute):**
1. Les eventuelle oppgavetekster pa forhand
2. Tenk gjennom hva du vet om temaet
3. Forbered deg pa noykelord du kan hore

**Under lyttingen (pendant l'ecoute):**
1. Forste lytting: Fa et helhetsbilde (l'idee generale)
2. Andre lytting: Fokuser pa detaljer
3. Legg merke til tonefall og trykk
4. Ikke prov a forsta hvert ord - fang opp hovedpunktene

**Tips for a forsta rask tale:**
- Fokuser pa innholdsord (substantiver, verb, adjektiver)
- Lytt etter tekstbindere som signaliserer ny informasjon
- Bruk konteksten til a fylle inn "hull"
- Ov regelmessig med franskspraklige podkaster og nyheter`,
    },
    {
      id: 'fransk-3-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Lytteforstaelse',
      problem: `Du horer folgende nyhetssnutt. Identifiser hovedpunktene:

"Le president francais a annonce aujourd'hui un nouveau plan pour l'education. Ce plan prevoit l'embauche de 10 000 enseignants supplementaires et la renovation de 500 ecoles. Le cout total est estime a 2 milliards d'euros."

a) Hva handler nyheten om?
b) Hva er de to hovedtiltakene?
c) Hva er totalkostnaden?`,
      solution: `a) Nyheten handler om en ny utdanningsplan annonsert av den franske presidenten.
b) De to hovedtiltakene er: ansettelse av 10 000 ekstra laerere (l'embauche de 10 000 enseignants) og renovering av 500 skoler (la renovation de 500 ecoles).
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
          { label: 'b', task: 'les mots-cles', solution: 'noykkelordene' },
          { label: 'c', task: 'le contexte', solution: 'sammenhengen/konteksten' },
          { label: 'd', task: 'les details importants', solution: 'de viktige detaljene' },
        ],
        solution: 'a) hovedideen, b) noykkelordene, c) sammenhengen, d) de viktige detaljene',
        hints: ['cle = nokkel', 'principal(e) = hoved-/viktigst'],
      },
    },
    {
      id: 'fransk-3-10-3-text-2',
      type: 'text',
      content: `## L'expose oral - Muntlig presentasjon

En god muntlig presentasjon pa fransk folger denne strukturen:

**1. Innledning (L'introduction):**
- Hils pa: Bonjour a tous / Bonjour, mesdames et messieurs
- Presenter temaet: Aujourd'hui, je vais vous parler de...
- Si hvorfor det er viktig: Ce sujet est important parce que...

**2. Hoveddel (Le developpement):**
- Bruk overganger: Premierement... Deuxiemement... Enfin...
- Gi eksempler: Par exemple... Prenons le cas de...
- Vis bilder/data: Comme vous pouvez voir sur cette image...

**3. Avslutning (La conclusion):**
- Oppsummer: Pour resumer... / En conclusion...
- Apne for sporsmal: Avez-vous des questions?
- Takk: Merci de votre attention.`,
    },
    {
      id: 'fransk-3-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Fraser for presentasjon',
      problem: `Oversett til fransk:
a) I dag skal jeg snakke om frankofoni.
b) For det forste vil jeg presentere historien.
c) For a oppsummere...
d) Takk for oppmerksomheten. Har dere sporsmal?`,
      solution: `a) Aujourd'hui, je vais vous parler de la francophonie.
b) Premierement, je vais presenter l'histoire.
c) Pour resumer...
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
          { label: 'a', task: 'God dag alle sammen.', solution: 'Bonjour a tous.' },
          { label: 'b', task: 'Jeg vil gjerne snakke om...', solution: 'Je voudrais parler de...' },
          { label: 'c', task: 'La oss se pa et eksempel.', solution: 'Regardons un exemple.' },
          { label: 'd', task: 'Avslutningsvis vil jeg si at...', solution: 'Pour conclure, je voudrais dire que...' },
        ],
        solution: 'a) Bonjour a tous. b) Je voudrais parler de... c) Regardons un exemple. d) Pour conclure, je voudrais dire que...',
        hints: ['je voudrais = jeg ville gjerne (hoeflighetsform)', 'regardons = la oss se (imperativ 1. person flertall)'],
      },
    },
    {
      id: 'fransk-3-10-3-text-3',
      type: 'text',
      content: `## Le debat - Debatten

I en debatt ma du kunne uttrykke og forsvare meninger:

| Funksjon | Fransk | Norsk |
|----------|--------|-------|
| Uttrykke mening | A mon avis, ... / Je pense que... / Il me semble que... | Etter min mening... / Jeg tror at... / Det virker som om... |
| Vaere enig | Je suis d'accord. / Tout a fait. / Exactement. | Jeg er enig. / Helt riktig. / Nettopp. |
| Vaere uenig | Je ne suis pas d'accord. / Je ne partage pas cet avis. | Jeg er ikke enig. / Jeg deler ikke dette synspunktet. |
| Be om ordet | Puis-je ajouter quelque chose ? / Si je peux me permettre... | Kan jeg legge til noe? / Om jeg kan tillate meg... |
| Avbryte hoflig | Excusez-moi, mais... / Permettez-moi d'intervenir. | Unnskyld, men... / Tillat meg a gripe inn. |
| Moderere | D'un cote... de l'autre... / Il faut nuancer. | Pa den ene siden... pa den andre... / Man ma nyansere. |`,
    },
    {
      id: 'fransk-3-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Debattferdigheter',
      problem: `Oversett til fransk:
a) Etter min mening er frankofoni viktig for kulturelt mangfold.
b) Jeg er ikke enig. Engelsk er viktigere i dagens verden.
c) Man ma nyansere. Begge sprak har sine styrker.`,
      solution: `a) A mon avis, la francophonie est importante pour la diversite culturelle.
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
          { label: 'a', task: 'Jeg tror at utdanning er noykkelen.', solution: 'Je pense que l\'education est la cle.' },
          { label: 'b', task: 'Helt riktig, men vi ma ogsa tenke pa...', solution: 'Tout a fait, mais il faut aussi penser a...' },
          { label: 'c', task: 'Kan jeg legge til noe?', solution: 'Puis-je ajouter quelque chose ?' },
        ],
        solution: 'a) Je pense que l\'education est la cle. b) Tout a fait, mais il faut aussi penser a... c) Puis-je ajouter quelque chose ?',
        hints: ['la cle = nokkelen', 'il faut = man ma', 'puis-je = kan jeg (formell inversjon)'],
      },
    },
    {
      id: 'fransk-3-10-3-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige muntlige uttrykk

| Fransk | Norsk |
|--------|-------|
| a mon avis | etter min mening |
| je suis d'accord | jeg er enig |
| je ne suis pas d'accord | jeg er ikke enig |
| premierement... deuxiemement... | for det forste... for det andre... |
| pour resumer | for a oppsummere |
| merci de votre attention | takk for oppmerksomheten |
| avez-vous des questions | har dere sporsmal |
| il faut nuancer | man ma nyansere |`,
    },
    {
      id: 'fransk-3-10-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva betyr disse uttrykkene pa norsk?',
        subTasks: [
          { label: 'a', task: 'Il me semble que...', solution: 'Det virker som om... / Det ser ut til at...' },
          { label: 'b', task: 'Je ne partage pas cet avis.', solution: 'Jeg deler ikke dette synspunktet.' },
          { label: 'c', task: 'Permettez-moi d\'intervenir.', solution: 'Tillat meg a gripe inn.' },
          { label: 'd', task: 'D\'un cote... de l\'autre...', solution: 'Pa den ene siden... pa den andre...' },
        ],
        solution: 'a) Det virker som om..., b) Jeg deler ikke dette synspunktet., c) Tillat meg a gripe inn., d) Pa den ene siden... pa den andre...',
        hints: ['il me semble = det synes meg', 'partager = dele', 'intervenir = gripe inn'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.4: Revision generale et strategies d'examen - Generell repetisjon og eksamensstrategier
// ============================================================================

export const CHAPTER_FRANSK_3_10_4: TextbookChapter = {
  id: 'fransk-3-10-4',
  courseId: 'fransk-3',
  chapterNumber: '10.4',
  title: "Revision generale et strategies d'examen",
  subtitle: 'Generell repetisjon og eksamensstrategier',
  description: 'Gjennomga grammatikk, far eksamenstips, laer om tidsbruk og unnga vanlige feil.',
  estimatedMinutes: 55,
  competenceGoals: [
    'repetere sentrale grammatiske strukturer pa niva 3',
    'bruke effektive eksamensstrategier for a prestere optimalt',
  ],
  content: [
    {
      id: 'fransk-3-10-4-intro',
      type: 'text',
      content: `## Revision generale et strategies d'examen

Felicitations ! Du har nadd slutten av Fransk Niva 3. I dette kapittelet repeterer vi de viktigste grammatiske strukturene og gir deg strategier for a gjore det best mulig pa eksamen.

La preparation est la cle de la reussite. Forberedelse er nokkelen til suksess.`,
    },
    {
      id: 'fransk-3-10-4-text-1',
      type: 'text',
      content: `## Repetisjon av viktige verbtider

| Tid | Bruk | Eksempel |
|-----|------|----------|
| Present | Na-situasjoner, vaner | Je parle francais. (Jeg snakker fransk.) |
| Passe compose | Avsluttede handlinger | J'ai parle. (Jeg har snakket/snakket.) |
| Imparfait | Bakgrunn, vaner i fortid | Je parlais souvent. (Jeg snakket ofte.) |
| Plus-que-parfait | For noe annet i fortid | J'avais deja parle. (Jeg hadde allerede snakket.) |
| Futur simple | Fremtid | Je parlerai. (Jeg vil snakke.) |
| Conditionnel | Hypotetisk, hoflig | Je parlerais. (Jeg ville snakke.) |
| Subjonctif | Etter visse uttrykk | Il faut que je parle. (Det er nodvendig at jeg snakker.) |

**Husk passe compose vs. imparfait:**
- Passe compose: enkelthandlinger, avsluttede hendelser
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
      solution: `a) Hier, je **suis alle(e)** au cinema. (Passe compose - avsluttet handling)
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
          { label: 'b', task: 'Nous ___ (finir) le projet hier. (avsluttet)', solution: 'avons fini (passe compose)' },
          { label: 'c', task: 'Il faut que tu ___ (faire) tes devoirs. (subjonctif)', solution: 'fasses (subjonctif)' },
          { label: 'd', task: 'L\'annee prochaine, j\' ___ (etudier) a Paris. (fremtid)', solution: 'etudierai (futur simple)' },
        ],
        solution: 'a) pleuvait, b) avons fini, c) fasses, d) etudierai',
        hints: ['Bakgrunn = imparfait', 'Avsluttet handling = passe compose', 'Etter "il faut que" = subjonctif'],
      },
    },
    {
      id: 'fransk-3-10-4-text-2',
      type: 'text',
      content: `## Vanlige feil a unnga (Erreurs frequentes)

**1. Accord du participe passe (samsvarsboyning):**
- Feil: Elle est alle au marche.
- Riktig: Elle est all**ee** au marche. (samsvar med subjekt ved etre)

**2. Subjonctif etter bestemte uttrykk:**
- Feil: Il faut que tu vas.
- Riktig: Il faut que tu **ailles**. (subjonctif av aller)

**3. Preposisjoner med land:**
- en + hunkjonnsland/land pa vokal: en France, en Italie
- au + hankjonnsland: au Japon, au Canada
- aux + flertall: aux Etats-Unis

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
          { label: 'a', task: 'Les filles sont alle au parc.', solution: 'Les filles sont allees au parc. (samsvar: filles -> allees)' },
          { label: 'b', task: 'Je vais en Canada cet ete.', solution: 'Je vais au Canada cet ete. (hankjonnsland: au)' },
          { label: 'c', task: 'Il faut que nous allons a l\'ecole.', solution: 'Il faut que nous allions a l\'ecole. (subjonctif etter il faut que)' },
          { label: 'd', task: 'La personne qui je connais est gentille.', solution: 'La personne que je connais est gentille. (objekt: que)' },
        ],
        solution: 'a) allees (samsvar), b) au Canada (hankjonnsland), c) allions (subjonctif), d) que (objekt)',
        hints: ['Sjekk samsvar med subjekt ved etre-verb', 'Etter "il faut que" brukes subjonctif', 'Hankjonnsland = au, hunkjonnsland = en'],
      },
    },
    {
      id: 'fransk-3-10-4-text-3',
      type: 'text',
      content: `## Strategies d'examen - Eksamensstrategier

**Tidsbruk:**
- Les gjennom hele oppgavesettet forst (5 minutter)
- Fordeloppgavene: bruk ca. 60% av tiden pa skriftlige oppgaver
- Sett av tid til gjennomlesing pa slutten (10 minutter)

**For leseforstaelse:**
1. Les sporsmalene for du leser teksten
2. Les teksten to ganger: forst for helhet, sa for detaljer
3. Understrek nokkelord
4. Svar med egne ord nar det er mulig

**For skriftlig produksjon:**
1. Planlegg teksten for du begynner a skrive
2. Lag en disposisjon (innledning - hoveddel - konklusjon)
3. Bruk varierte setningsstrukturer og tekstbindere
4. Sjekk grammatikk: verbtider, samsvar, preposisjoner
5. Varier ordforradet - unnga gjentakelser

**Generelle tips:**
- Svar pa det som blir spurt om
- Vis at du behersker avanserte strukturer (subjonctif, conditionnel)
- Bruk eksempler fra kultur og samfunn
- Skriv tydelig og strukturert`,
    },
    {
      id: 'fransk-3-10-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Forbedre en tekst',
      problem: `Forbedre denne teksten ved a legge til tekstbindere, variere ordforradet og rette feil:

"Le francais est important. Le francais est parle par beaucoup de personnes. Le francais est utile pour le travail. Je aime le francais."`,
      solution: `**Forbedret versjon:**

Le francais est une langue d'une grande importance. **En effet**, il est parle par plus de 300 millions de personnes dans le monde. **De plus**, cette langue est particulierement utile dans le monde professionnel, **notamment** dans les domaines de la diplomatie et du commerce international. **C'est pourquoi** j'apprecie beaucoup **cette langue riche et fascinante**.

**Forbedringer:**
- Variert ordforrad (le francais -> cette langue, il, cette langue riche)
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
        task: 'Oversett til fransk med variert sprak.',
        subTasks: [
          { label: 'a', task: 'Etter min mening er frankofoni viktig fordi den fremmer kulturelt mangfold.', solution: 'A mon avis, la francophonie est importante car elle promeut la diversite culturelle.' },
          { label: 'b', task: 'Selv om engelsk dominerer, har fransk en viktig rolle i verden.', solution: 'Bien que l\'anglais domine, le francais joue un role important dans le monde.' },
          { label: 'c', task: 'For a oppsummere har vi sett at fremtiden for fransk avhenger av utdanning.', solution: 'Pour resumer, nous avons vu que l\'avenir du francais depend de l\'education.' },
        ],
        solution: 'a) A mon avis, la francophonie est importante car elle promeut la diversite culturelle. b) Bien que l\'anglais domine, le francais joue un role important dans le monde. c) Pour resumer, nous avons vu que l\'avenir du francais depend de l\'education.',
        hints: ['bien que + subjonctif = selv om', 'jouer un role = spille en rolle', 'dependre de = avhenge av'],
      },
    },
    {
      id: 'fransk-3-10-4-text-4',
      type: 'text',
      content: `## Hva har du laert i Fransk Niva 3?

I Fransk Niva 3 har du laert:

1. **Samfunn og politikk** - det franske politiske systemet, demokrati og medborgerskap
2. **Kulturelt mangfold** - innvandring, integrering, identitet
3. **Miljo og barekraft** - klimaendringer, energi, forbruk
4. **Medier og teknologi** - sosiale medier, digital kommunikasjon
5. **Litteratur og kunst** - litteraer analyse, stilfigurer, kunsthistorie
6. **Arbeids- og naerlingsliv** - jobb, utdanning, karriere
7. **Globaliseringens utfordringer** - handel, kulturutveksling
8. **Frankofoni** - fransktalende land, kolonihistorie, kreolsprak
9. **Eksamensferdigheter** - leseforstaelse, skriftlig og muntlig produksjon

**Bonne chance pour l'examen !** (Lykke til med eksamen!)`,
    },
    {
      id: 'fransk-3-10-4-note-1',
      type: 'note',
      title: 'Tips til videre laering',
      content: `For a fortsette a forbedre fransken din:
- Les franske aviser og magasiner (Le Monde, Le Figaro, Courrier international)
- Se franske filmer og serier (med franske undertekster)
- Hor pa franske podkaster (France Inter, RFI)
- Skriv dagbok pa fransk
- Finn en sprakpartner eller delta i sprakreiser
- Folg franskspraklige kontoer pa sosiale medier
- Les franskspraklig litteratur fra ulike deler av verden`,
    },
    {
      id: 'fransk-3-10-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-10-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort sammenhengende tekst pa fransk (3-4 setninger) om hvert tema.',
        subTasks: [
          { label: 'a', task: 'Skriv om hvorfor du laerer fransk.', solution: 'J\'apprends le francais parce que c\'est une langue riche et fascinante. De plus, le francais est parle dans le monde entier. C\'est pourquoi je trouve cette langue utile pour mon avenir.' },
          { label: 'b', task: 'Skriv om frankofoniens fremtid.', solution: 'L\'avenir de la francophonie semble prometteur. En effet, le nombre de francophones pourrait atteindre 700 millions en 2050. Cependant, il faut investir dans l\'education pour assurer cet avenir.' },
          { label: 'c', task: 'Skriv om ditt favorittema fra kurset.', solution: 'Mon sujet prefere dans ce cours a ete la francophonie africaine. J\'ai trouve fascinant de decouvrir la richesse culturelle et linguistique de l\'Afrique francophone. Cela m\'a ouvert les yeux sur la diversite du monde francophone.' },
          { label: 'd', task: 'Gi et rad til noen som skal begynne a laere fransk.', solution: 'Je conseillerais de pratiquer le francais tous les jours. Par exemple, on peut ecouter des podcasts, regarder des films ou lire des articles en francais. L\'essentiel est de ne pas avoir peur de faire des erreurs.' },
        ],
        solution: 'Fri oppgave - se losningsforslag i deloppgavene.',
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
