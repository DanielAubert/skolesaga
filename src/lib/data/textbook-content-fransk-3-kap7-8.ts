/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Niva 3 - Kapittel 7-8
 * Politikk og samfunn, Oekonomi og arbeidsliv
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Le systeme politique francais - Det franske politiske systemet
// ============================================================================

export const CHAPTER_FRANSK_3_7_1: TextbookChapter = {
  id: 'fransk-3-7-1',
  courseId: 'fransk-3',
  chapterNumber: '7.1',
  title: 'Le systeme politique francais - Det franske politiske systemet',
  description: 'Laer om det franske politiske systemet, fra den femte republikken til nasjonalforsamlingen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hovedelementene i det franske politiske systemet',
    'bruke vokabular knyttet til politikk og demokrati pa fransk',
  ],
  content: [
    {
      id: 'fransk-3-7-1-intro',
      type: 'text',
      content: `## Le systeme politique francais

Frankrike er en republikk med et semi-presidentsystem. Det navaerende systemet ble opprettet i 1958 med den femte republikken (la Cinquieme Republique), grunnlagt av Charles de Gaulle. Frankrike har et politisk system som skiller seg fra de fleste europeiske land ved at presidenten har svært mye makt.

A forstaa det franske politiske systemet er viktig for a forstaa fransk kultur, samfunn og dagsaktuelle debatter.`,
    },
    {
      id: 'fransk-3-7-1-def-1',
      type: 'definition',
      title: 'Vokabular: Det politiske systemet',
      content: `**Les institutions politiques (De politiske institusjonene):**

| Fransk | Norsk |
|--------|-------|
| la Republique | republikken |
| le President de la Republique | presidenten |
| le Premier ministre | statsministeren |
| l'Assemblee nationale | nasjonalforsamlingen |
| le Senat | senatet |
| le Parlement | parlamentet |
| le gouvernement | regjeringen |
| le Conseil constitutionnel | grunnlovsraadet |`,
    },
    {
      id: 'fransk-3-7-1-def-2',
      type: 'definition',
      title: 'Vokabular: Valg og demokrati',
      content: `**Les elections et la democratie:**

| Fransk | Norsk |
|--------|-------|
| une election | et valg |
| voter | a stemme |
| un electeur / une electrice | en velger |
| le suffrage universel | allmenn stemmerett |
| un mandat presidentiel | en presidentperiode |
| un parti politique | et politisk parti |
| la gauche / la droite | venstresiden / hoyresiden |
| une loi | en lov |`,
    },
    {
      id: 'fransk-3-7-1-text-1',
      type: 'text',
      content: `## La separation des pouvoirs - Maktfordelingen

Det franske systemet er bygget pa maktfordelingsprinsippet:

**Le pouvoir executif (utovende makt):**
- Le President de la Republique - velges direkte av folket for 5 aar (le quinquennat)
- Le Premier ministre - utnevnes av presidenten
- Le gouvernement - regjeringen, ledet av statsministeren

**Le pouvoir legislatif (lovgivende makt):**
- L'Assemblee nationale - 577 deputes (representanter), velges for 5 aar
- Le Senat - 348 senateurs, velges indirekte for 6 aar

**Le pouvoir judiciaire (dommende makt):**
- Uavhengige domstoler som sikrer at lovene folges`,
    },
    {
      id: 'fransk-3-7-1-tip-1',
      type: 'tip',
      content: `Den franske presidenten har mye mer makt enn de fleste europeiske statsoverhoder. Presidenten kan opplose nasjonalforsamlingen, er overstkommanderende for militaeret, og kan i krisetider bruke spesielle fullmakter (article 16). Dette gjor det franske systemet semi-presidentielt.`,
    },
    {
      id: 'fransk-3-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstaa politisk tekst',
      problem: `Les teksten og svar pa sporsmalene:

"Le President de la Republique est elu au suffrage universel direct pour un mandat de cinq ans. Il nomme le Premier ministre et preside le Conseil des ministres. L'Assemblee nationale peut renverser le gouvernement par une motion de censure."

a) Hvordan velges presidenten?
b) Hva er presidentens oppgaver ifloelge teksten?
c) Hva kan nasjonalforsamlingen gjore?`,
      solution: `a) Presidenten velges ved **direkte allmenne valg** (suffrage universel direct).

b) Presidenten **utnevner statsministeren** (nomme le Premier ministre) og **leder ministerraadet** (preside le Conseil des ministres).

c) Nasjonalforsamlingen kan **felle regjeringen gjennom et mistillitsforslag** (renverser le gouvernement par une motion de censure).

**Noekkelvokabular:**
- elu = valgt
- nommer = utnevne
- presider = lede
- renverser = velte/felle`,
    },
    {
      id: 'fransk-3-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-1-ex-1',
        number: '7.1.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Presidenten velges for fem aar.', solution: 'Le President est elu pour cinq ans.', answer: 'Le President est elu pour cinq ans' },
          { label: 'b', task: 'Nasjonalforsamlingen vedtar lover.', solution: 'L\'Assemblee nationale vote les lois.', answer: 'L\'Assemblee nationale vote les lois' },
          { label: 'c', task: 'Statsministeren leder regjeringen.', solution: 'Le Premier ministre dirige le gouvernement.', answer: 'Le Premier ministre dirige le gouvernement' },
          { label: 'd', task: 'Folket stemmer ved valg.', solution: 'Le peuple vote aux elections.', answer: 'Le peuple vote aux elections' },
        ],
        solution: 'a) Le President est elu pour cinq ans, b) L\'Assemblee nationale vote les lois, c) Le Premier ministre dirige le gouvernement, d) Le peuple vote aux elections',
        hints: ['elu = valgt (partisipp av elire)', 'voter = a stemme / a vedta'],
      },
    },
    {
      id: 'fransk-3-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne politiske systemer',
      problem: `Sammenlign det franske og norske politiske systemet. Fyll inn pa fransk:

a) En France, le president est elu ___. En Norvege, le roi est ___.
b) Le parlement francais a deux chambres: ___ et ___. Le parlement norvegien s'appelle ___.`,
      solution: `a) En France, le president est elu **au suffrage universel direct**. En Norvege, le roi est **hereditaire** (arvelig).

b) Le parlement francais a deux chambres: **l'Assemblee nationale** et **le Senat**. Le parlement norvegien s'appelle **le Storting**.

**Forskjeller:**
- Frankrike: Republikk med valgt president
- Norge: Konstitusjonelt monarki med arvelig monark
- Frankrike: Tokammersystem (bicameralisme)
- Norge: Ettammersystem (unicameralisme)`,
    },
    {
      id: 'fransk-3-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig fransk begrep:',
        subTasks: [
          { label: 'a', task: 'Den utovende makten pa fransk: le pouvoir ___', solution: 'executif', answer: 'executif' },
          { label: 'b', task: 'Den lovgivende makten pa fransk: le pouvoir ___', solution: 'legislatif', answer: 'legislatif' },
          { label: 'c', task: 'Presidentperioden pa 5 aar kalles: le ___', solution: 'quinquennat', answer: 'quinquennat' },
          { label: 'd', task: 'Et mistillitsforslag pa fransk: une motion de ___', solution: 'censure', answer: 'censure' },
        ],
        solution: 'a) executif, b) legislatif, c) quinquennat, d) censure',
        hints: ['executif kommer av executer (utfoere)', 'quinquennat fra latin quinque (fem)'],
      },
    },
    {
      id: 'fransk-3-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Politisk debatt',
      problem: `Oversett folgende setninger om fransk politikk:

a) De politiske partiene forbereder seg til valget.
b) Statsministeren presenterte en ny lov for nasjonalforsamlingen.
c) Velgerne er uenige om regjeringens politikk.`,
      solution: `a) **Les partis politiques se preparent pour l'election.**
b) **Le Premier ministre a presente une nouvelle loi a l'Assemblee nationale.**
c) **Les electeurs ne sont pas d'accord sur la politique du gouvernement.**

**Nyttige uttrykk:**
- se preparer pour = forberede seg til
- presenter une loi = presentere en lov
- etre d'accord sur = vaere enig om
- la politique du gouvernement = regjeringens politikk`,
    },
    {
      id: 'fransk-3-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Frankrike er en republikk.', solution: 'La France est une republique.', answer: 'La France est une republique' },
          { label: 'b', task: 'Presidenten utnevner statsministeren.', solution: 'Le President nomme le Premier ministre.', answer: 'Le President nomme le Premier ministre' },
          { label: 'c', task: 'Senatorene velges indirekte.', solution: 'Les senateurs sont elus au suffrage indirect.', answer: 'Les senateurs sont elus au suffrage indirect' },
        ],
        solution: 'a) La France est une republique, b) Le President nomme le Premier ministre, c) Les senateurs sont elus au suffrage indirect',
        hints: ['nommer = utnevne', 'elu(s) = valgt(e)'],
      },
    },
    {
      id: 'fransk-3-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriveoppgave: Forklar det franske politiske systemet pa fransk (5-6 setninger). Bruk ordene: republique, president, Assemblee nationale, Senat, Premier ministre, elu.',
        subTasks: [
          { label: 'a', task: 'Beskriv styreformen', solution: 'La France est une republique democratique.' },
          { label: 'b', task: 'Forklar presidentens rolle', solution: 'Le President est elu au suffrage universel direct pour cinq ans. Il nomme le Premier ministre.' },
          { label: 'c', task: 'Beskriv parlamentet', solution: 'Le Parlement est compose de l\'Assemblee nationale et du Senat. L\'Assemblee nationale vote les lois.' },
        ],
        solution: 'Eksempel: "La France est une republique democratique. Le President de la Republique est elu au suffrage universel direct pour un mandat de cinq ans. Il nomme le Premier ministre qui dirige le gouvernement. Le Parlement est compose de deux chambres: l\'Assemblee nationale et le Senat. L\'Assemblee nationale vote les lois et peut renverser le gouvernement."',
        hints: ['compose de = bestaaende av', 'diriger = lede'],
      },
    },
    {
      id: 'fransk-3-7-1-note-1',
      type: 'note',
      title: 'Kulturnotat: La Cinquieme Republique',
      content: `Den femte republikken ble grunnlagt i 1958 av Charles de Gaulle under Algerie-krigen. Siden da har Frankrike hatt presidenter fra bade hoyresiden og venstresiden. En spesiell situasjon oppstaar nar presidenten og statsministeren er fra forskjellige politiske partier - dette kalles "la cohabitation". Det skjedde sist i 1997-2002 med president Chirac (hoeyre) og statsminister Jospin (venstre).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Les enjeux sociaux - Sosiale utfordringer
// ============================================================================

export const CHAPTER_FRANSK_3_7_2: TextbookChapter = {
  id: 'fransk-3-7-2',
  courseId: 'fransk-3',
  chapterNumber: '7.2',
  title: 'Les enjeux sociaux - Sosiale utfordringer',
  description: 'Laer om sosiale utfordringer i Frankrike som immigrasjon, ulikhet og laicite.',
  estimatedMinutes: 55,
  competenceGoals: [
    'diskutere sosiale utfordringer i Frankrike pa fransk',
    'forstaa begreper som laicite, immigration og integration',
  ],
  content: [
    {
      id: 'fransk-3-7-2-intro',
      type: 'text',
      content: `## Les enjeux sociaux en France

Frankrike staar overfor mange sosiale utfordringer som preger den offentlige debatten. Temaer som immigrasjon, sosiale ulikheter, forstadsomraadene (les banlieues) og det franske prinsippet om sekularisme (la laicite) er stadig aktuelle. A forstaa disse temaene er viktig for a delta i samtaler om det franske samfunnet.`,
    },
    {
      id: 'fransk-3-7-2-def-1',
      type: 'definition',
      title: 'Vokabular: Immigrasjon og integrering',
      content: `**L'immigration et l'integration:**

| Fransk | Norsk |
|--------|-------|
| l'immigration | innvandring |
| un immigre / une immigree | en innvandrer |
| l'integration | integrering |
| s'integrer | a integrere seg |
| la diversite | mangfold |
| le multiculturalisme | multikulturalisme |
| l'identite nationale | nasjonal identitet |
| un refugie / une refugiee | en flyktning |`,
    },
    {
      id: 'fransk-3-7-2-def-2',
      type: 'definition',
      title: 'Vokabular: Sosiale utfordringer',
      content: `**Les defis sociaux:**

| Fransk | Norsk |
|--------|-------|
| les inegalites | ulikheter |
| la pauvrete | fattigdom |
| le chomage | arbeidsloeshet |
| la banlieue | forstaden |
| la discrimination | diskriminering |
| l'exclusion sociale | sosialt utenforskap |
| la laicite | sekularisme |
| l'egalite des chances | like muligheter |`,
    },
    {
      id: 'fransk-3-7-2-text-1',
      type: 'text',
      content: `## La laicite - Sekularisme

La laicite er et grunnleggende prinsipp i det franske samfunnet. Det innebærer et strengt skille mellom stat og religion:

- **Loi de 1905**: Loven om skillet mellom kirke og stat
- **Skolen**: Religion er ikke tillatt i offentlige skoler
- **Symboler**: Religiose symboler er forbudt i offentlige institusjoner
- **Frihet**: Alle har rett til a utove sin religion privat

Uttrykk for a diskutere laicite:
- *la liberte de conscience* = trosfrihet
- *la neutralite de l'Etat* = statens noeytralitet
- *le vivre-ensemble* = a leve sammen i harmoni`,
    },
    {
      id: 'fransk-3-7-2-tip-1',
      type: 'tip',
      content: `La laicite er et unikt fransk begrep som ikke har noen direkte oversettelse. Det handler ikke om a vaere "mot religion", men om at staten er noytral overfor alle religioner. Dette skiller seg fra mange andre land der stat og kirke har naermere baand.`,
    },
    {
      id: 'fransk-3-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstaa en sosial debatt',
      problem: `Les teksten og svar pa sporsmalene:

"Les banlieues francaises sont souvent associees a des problemes sociaux: chomage eleve, manque de transports, et discrimination. Pourtant, ces quartiers sont aussi des lieux de creativite et de solidarite. Beaucoup de jeunes des banlieues reussissent dans les domaines de l'art, du sport et des affaires."

a) Hvilke problemer nevnes i teksten?
b) Hva er positivt med forstadene ifloelge teksten?
c) Forklar ordet "pourtant" ut fra konteksten.`,
      solution: `a) Problemene som nevnes er **hoey arbeidsloeshet** (chomage eleve), **manglende transport** (manque de transports) og **diskriminering** (discrimination).

b) Forstadene er ogsa steder med **kreativitet** (creativite) og **solidaritet** (solidarite). Mange unge **lykkes** (reussissent) innen kunst, sport og naeringslivet.

c) "Pourtant" betyr **likevel/til tross for**. Det innleder et motargument.

**Noekkelvokabular:**
- le chomage = arbeidsloeshet
- un quartier = en bydel/et nabolag
- reussir = a lykkes
- les affaires = naeringslivet/forretningslivet`,
    },
    {
      id: 'fransk-3-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-2-ex-1',
        number: '7.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Immigrasjon er et viktig tema i Frankrike.', solution: 'L\'immigration est un sujet important en France.', answer: 'L\'immigration est un sujet important en France' },
          { label: 'b', task: 'Sosiale ulikheter er en stor utfordring.', solution: 'Les inegalites sociales sont un grand defi.', answer: 'Les inegalites sociales sont un grand defi' },
          { label: 'c', task: 'Integrering krever innsats fra alle.', solution: 'L\'integration demande des efforts de tous.', answer: 'L\'integration demande des efforts de tous' },
          { label: 'd', task: 'Alle har rett til like muligheter.', solution: 'Tout le monde a droit a l\'egalite des chances.', answer: 'Tout le monde a droit a l\'egalite des chances' },
        ],
        solution: 'a) L\'immigration est un sujet important en France, b) Les inegalites sociales sont un grand defi, c) L\'integration demande des efforts de tous, d) Tout le monde a droit a l\'egalite des chances',
        hints: ['un sujet = et tema', 'un defi = en utfordring', 'demander = kreve/be om'],
      },
    },
    {
      id: 'fransk-3-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Argumentere om sosiale temaer',
      problem: `Skriv argumenter for og mot folgende pastand pa fransk:
"La laicite est essentielle pour le vivre-ensemble."

a) Et argument for (pour)
b) Et argument mot (contre)`,
      solution: `a) **Pour:** La laicite garantit la liberte de conscience de tous les citoyens et assure l'egalite devant la loi, quelle que soit la religion.
*(Sekularismen garanterer trosfrihet for alle borgere og sikrer likhet for loven, uansett religion.)*

b) **Contre:** Une application trop stricte de la laicite peut etre percue comme une limitation de la liberte religieuse et peut exclure certaines personnes.
*(En for streng anvendelse av sekularismen kan oppfattes som en begrensning av religionsfrihet og kan ekskludere visse personer.)*

**Nyttige uttrykk for argumentasjon:**
- d'une part... d'autre part = pa den ene side... pa den andre side
- il est vrai que... mais = det er sant at... men
- certes... cependant = riktignok... likevel`,
    },
    {
      id: 'fransk-3-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Le taux de ___ est eleve dans les banlieues. (arbeidsloeshet)', solution: 'chomage', answer: 'chomage' },
          { label: 'b', task: 'La ___ est un principe fondamental de la Republique francaise. (sekularisme)', solution: 'laicite', answer: 'laicite' },
          { label: 'c', task: 'L\'___ sociale touche de nombreuses personnes. (utenforskap)', solution: 'exclusion', answer: 'exclusion' },
          { label: 'd', task: 'La ___ culturelle est une richesse pour la societe. (mangfold)', solution: 'diversite', answer: 'diversite' },
        ],
        solution: 'a) chomage, b) laicite, c) exclusion, d) diversite',
        hints: ['taux = rate/andel', 'un principe fondamental = et grunnleggende prinsipp'],
      },
    },
    {
      id: 'fransk-3-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Diskutere integrering',
      problem: `Oversett til fransk:

a) Mangfold beriker samfunnet.
b) Vi maa bekjempe diskriminering.
c) Like muligheter er viktig for demokratiet.`,
      solution: `a) **La diversite enrichit la societe.**
b) **Nous devons combattre la discrimination.**
c) **L'egalite des chances est importante pour la democratie.**

**Nyttige verb:**
- enrichir = berike
- combattre = bekjempe
- lutter contre = kjempe mot
- promouvoir = fremme`,
    },
    {
      id: 'fransk-3-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Frankrike er et mangfoldig land.', solution: 'La France est un pays divers.', answer: 'La France est un pays divers' },
          { label: 'b', task: 'Flyktningene onsker aa integrere seg.', solution: 'Les refugies souhaitent s\'integrer.', answer: 'Les refugies souhaitent s\'integrer' },
          { label: 'c', task: 'Staten maa sikre likhet for alle.', solution: 'L\'Etat doit assurer l\'egalite pour tous.', answer: 'L\'Etat doit assurer l\'egalite pour tous' },
        ],
        solution: 'a) La France est un pays divers, b) Les refugies souhaitent s\'integrer, c) L\'Etat doit assurer l\'egalite pour tous',
        hints: ['souhaiter = onske', 'assurer = sikre'],
      },
    },
    {
      id: 'fransk-3-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriveoppgave: Skriv en kort tekst (5-6 setninger) pa fransk om en sosial utfordring i Frankrike. Velg ett tema: immigration, inegalites, eller laicite.',
        subTasks: [
          { label: 'a', task: 'Presenter temaet', solution: 'Bruk: un enjeu important / un defi majeur' },
          { label: 'b', task: 'Forklar problemet', solution: 'Bruk: les causes sont... / cela entraine...' },
          { label: 'c', task: 'Foresla en loesning', solution: 'Bruk: il faut... / on devrait... / la solution serait de...' },
        ],
        solution: 'Eksempel: "L\'immigration est un sujet tres debattu en France. Beaucoup d\'immigres viennent en France pour trouver une vie meilleure. Cependant, l\'integration peut etre difficile a cause du chomage et de la discrimination. Il faut promouvoir l\'egalite des chances et lutter contre les prejuges. La diversite culturelle enrichit la societe francaise."',
        hints: ['debattu = debattert', 'les prejuges = fordommer'],
      },
    },
    {
      id: 'fransk-3-7-2-note-1',
      type: 'note',
      title: 'Kulturnotat: Les banlieues',
      content: `De franske "banlieues" (forsteder) ble ofte bygget paa 1960- og 70-tallet for aa huse arbeidere og innvandrere. Mange av disse omraadene har i dag utfordringer med arbeidsloeshet og fattigdom. Samtidig er de ogsaa kulturelle smeltedigler som har fostret store kunstnere, musikere og idrettsutoevere. Filmer som "La Haine" (1995) og "Les Miserables" (2019) gir innblikk i livet i forstadene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: L'actualite et les medias - Aktualitet og media
// ============================================================================

export const CHAPTER_FRANSK_3_7_3: TextbookChapter = {
  id: 'fransk-3-7-3',
  courseId: 'fransk-3',
  chapterNumber: '7.3',
  title: 'L\'actualite et les medias - Aktualitet og media',
  description: 'Laer vokabular om nyheter, media og kildekritikk pa fransk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstaa og diskutere nyhetsstoff pa fransk',
    'bruke vokabular knyttet til media og kildekritikk',
  ],
  content: [
    {
      id: 'fransk-3-7-3-intro',
      type: 'text',
      content: `## L'actualite et les medias

I en globalisert verden er det viktig aa kunne forstaa og diskutere nyheter paa fransk. Det franske medielandskapet er rikt og variert, med tradisjonelle aviser, TV-kanaler, radiostasjoner og digitale plattformer. Aa vaere kritisk til informasjonskilder er en viktig kompetanse.`,
    },
    {
      id: 'fransk-3-7-3-def-1',
      type: 'definition',
      title: 'Vokabular: Media og nyheter',
      content: `**Les medias et l'information:**

| Fransk | Norsk |
|--------|-------|
| les medias | mediene |
| un journal / un quotidien | en avis / en dagsavis |
| un magazine / une revue | et magasin / et tidsskrift |
| le journal televise (JT) | TV-nyhetene |
| la presse ecrite | den trykte pressen |
| un site d'information | et nyhetsnettsted |
| les reseaux sociaux | sosiale medier |
| un article | en artikkel |`,
    },
    {
      id: 'fransk-3-7-3-def-2',
      type: 'definition',
      title: 'Vokabular: Journalistikk',
      content: `**Le journalisme:**

| Fransk | Norsk |
|--------|-------|
| un/une journaliste | en journalist |
| un reporter | en reporter |
| un redacteur en chef | en sjefredaktoer |
| une enquete | en undersokelse/reportasje |
| un reportage | en reportasje |
| une source | en kilde |
| une interview | et intervju |
| la liberte de la presse | pressefrihet |`,
    },
    {
      id: 'fransk-3-7-3-text-1',
      type: 'text',
      content: `## Les grands medias francais - Store franske medier

**Aviser:**
- *Le Monde* - den mest anerkjente franske avisen
- *Le Figaro* - konservativ dagsavis
- *Liberation* - venstreorientert dagsavis
- *Le Canard enchaine* - satirisk ukeavis

**TV og radio:**
- France Televisions (France 2, France 3) - offentlig TV
- TF1 - stoerste private TV-kanal
- France Inter - offentlig radio
- RFI (Radio France Internationale) - internasjonal radio

**Nyhetsbyraer:**
- AFP (Agence France-Presse) - et av verdens stoerste nyhetsbyraer`,
    },
    {
      id: 'fransk-3-7-3-tip-1',
      type: 'tip',
      content: `For aa oeve paa fransk, proev aa lese nyhetsartikler paa nettsidene til Le Monde (lemonde.fr) eller France Info (franceinfo.fr). Start med korte artikler og fokuser paa aa forstaa hovedbudskapet foer du ser paa detaljene.`,
    },
    {
      id: 'fransk-3-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstaa en nyhetsartikkel',
      problem: `Les overskriften og ingressen, og svar paa sporsmalene:

"Les fausses informations sur les reseaux sociaux: un defi majeur pour la democratie. Selon une etude recente, 60% des Francais ont deja ete confrontes a des fake news. Le gouvernement propose de nouvelles lois pour lutter contre la desinformation."

a) Hva er temaet?
b) Hvilken statistikk oppgis?
c) Hva foreslar regjeringen?`,
      solution: `a) Temaet er **falske nyheter paa sosiale medier** (fausses informations sur les reseaux sociaux) og trusselen mot demokratiet.

b) **60% av franskmennene** har allerede blitt konfrontert med falske nyheter (fake news).

c) Regjeringen foreslar **nye lover for aa bekjempe desinformasjon** (nouvelles lois pour lutter contre la desinformation).

**Noekkelvokabular:**
- les fausses informations = falske nyheter
- selon = ifloelge
- une etude = en studie/undersokelse
- lutter contre = kjempe mot`,
    },
    {
      id: 'fransk-3-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-3-ex-1',
        number: '7.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Journalisten skrev en artikkel om presidenten.', solution: 'Le/La journaliste a ecrit un article sur le president.', answer: 'Le journaliste a ecrit un article sur le president' },
          { label: 'b', task: 'Pressefrihet er viktig for demokratiet.', solution: 'La liberte de la presse est importante pour la democratie.', answer: 'La liberte de la presse est importante pour la democratie' },
          { label: 'c', task: 'Sosiale medier sprer falske nyheter.', solution: 'Les reseaux sociaux diffusent des fausses informations.', answer: 'Les reseaux sociaux diffusent des fausses informations' },
          { label: 'd', task: 'Vi maa vaere kritiske til kildene vaare.', solution: 'Nous devons etre critiques envers nos sources.', answer: 'Nous devons etre critiques envers nos sources' },
        ],
        solution: 'a) Le journaliste a ecrit un article sur le president, b) La liberte de la presse est importante pour la democratie, c) Les reseaux sociaux diffusent des fausses informations, d) Nous devons etre critiques envers nos sources',
        hints: ['ecrire (a skrive) -> passe compose: a ecrit', 'diffuser = spre/kringkaste'],
      },
    },
    {
      id: 'fransk-3-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Kildekritikk',
      problem: `Oversett uttrykkene for kildekritikk:

a) Er kilden paaliitelig?
b) Vi maa sjekke informasjonen.
c) Denne artikkelen er partisk.`,
      solution: `a) **La source est-elle fiable?**
b) **Nous devons verifier l'information.**
c) **Cet article est partisan / biaise.**

**Uttrykk for kildekritikk:**
- verifier l'information = verifisere/sjekke informasjonen
- une source fiable = en paaliitelig kilde
- une source douteuse = en tvilsom kilde
- croiser les sources = kryss-sjekke kildene
- faire preuve d'esprit critique = vise kritisk sans`,
    },
    {
      id: 'fransk-3-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Le Monde est un ___ francais tres respecte. (dagsavis)', solution: 'quotidien', answer: 'quotidien' },
          { label: 'b', task: 'Il faut ___ les sources avant de partager une information. (sjekke)', solution: 'verifier', answer: 'verifier' },
          { label: 'c', task: 'Les ___ sociaux sont devenus une source d\'information importante. (nettverk)', solution: 'reseaux', answer: 'reseaux' },
          { label: 'd', task: 'Le ___ en chef dirige la redaction du journal. (redaktoer)', solution: 'redacteur', answer: 'redacteur' },
        ],
        solution: 'a) quotidien, b) verifier, c) reseaux, d) redacteur',
        hints: ['quotidien = daglig/dagsavis', 'verifier = bekrefte/sjekke'],
      },
    },
    {
      id: 'fransk-3-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Diskutere medias rolle',
      problem: `Skriv setninger om medias rolle i samfunnet. Oversett til fransk:

a) Mediene informerer befolkningen.
b) Journalister maa vaere uavhengige.
c) Falske nyheter truer demokratiet.`,
      solution: `a) **Les medias informent la population.**
b) **Les journalistes doivent etre independants.**
c) **Les fausses informations menacent la democratie.**

**Viktige verb:**
- informer = informere
- devoir (doivent) = maa/bor
- menacer = true
- proteger = beskytte`,
    },
    {
      id: 'fransk-3-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Ifloelge denne artikkelen oeker bruken av sosiale medier.', solution: 'Selon cet article, l\'utilisation des reseaux sociaux augmente.', answer: 'Selon cet article l\'utilisation des reseaux sociaux augmente' },
          { label: 'b', task: 'Vi maa kryss-sjekke kildene vaare.', solution: 'Nous devons croiser nos sources.', answer: 'Nous devons croiser nos sources' },
          { label: 'c', task: 'Pressen spiller en viktig rolle i demokratiet.', solution: 'La presse joue un role important dans la democratie.', answer: 'La presse joue un role important dans la democratie' },
        ],
        solution: 'a) Selon cet article, l\'utilisation des reseaux sociaux augmente, b) Nous devons croiser nos sources, c) La presse joue un role important dans la democratie',
        hints: ['selon = ifloelge', 'jouer un role = spille en rolle'],
      },
    },
    {
      id: 'fransk-3-7-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriveoppgave: Skriv en kort tekst (5-6 setninger) paa fransk om medias rolle i samfunnet. Diskuter bade positive og negative sider.',
        subTasks: [
          { label: 'a', task: 'Beskriv medias positive rolle', solution: 'Les medias informent les citoyens et contribuent a la democratie.' },
          { label: 'b', task: 'Nevn en negativ side', solution: 'Cependant, les fausses informations et la desinformation sont des problemes serieux.' },
          { label: 'c', task: 'Foresla en loesning', solution: 'Il est important de developper l\'esprit critique et de verifier les sources.' },
        ],
        solution: 'Eksempel: "Les medias jouent un role essentiel dans notre societe. Ils informent les citoyens et contribuent au bon fonctionnement de la democratie. Cependant, avec les reseaux sociaux, les fausses informations se propagent rapidement. La desinformation peut manipuler l\'opinion publique. Il est donc important de developper son esprit critique et de toujours verifier les sources d\'information."',
        hints: ['se propager = aa spre seg', 'l\'opinion publique = den offentlige mening'],
      },
    },
    {
      id: 'fransk-3-7-3-note-1',
      type: 'note',
      title: 'Kulturnotat: Pressefrihet i Frankrike',
      content: `Frankrike har en lang tradisjon for pressefrihet, som er forankret i "la Declaration des droits de l'homme et du citoyen" fra 1789. Likevel har forholdet mellom medier og politikk vaert utfordrende. Organisasjonen Reportere uten grenser (Reporters sans frontieres, RSF), som har hovedkontor i Paris, rangerer pressefrihet i verden hvert aar. Satireavisen Charlie Hebdo ble et symbol paa pressefrihet etter terrorangrepet i 2015.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: L'Union europeenne - EU
// ============================================================================

export const CHAPTER_FRANSK_3_7_4: TextbookChapter = {
  id: 'fransk-3-7-4',
  courseId: 'fransk-3',
  chapterNumber: '7.4',
  title: 'L\'Union europeenne - EU',
  description: 'Laer om Frankrikes rolle i EU, EUs institusjoner og europeisk samarbeid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare Frankrikes rolle i EU paa fransk',
    'bruke vokabular om europeisk politikk og samarbeid',
  ],
  content: [
    {
      id: 'fransk-3-7-4-intro',
      type: 'text',
      content: `## L'Union europeenne et la France

Frankrike er et av grunnleggerlandene til det europeiske samarbeidet. Sammen med Tyskland regnes Frankrike som en av de viktigste drivkreftene i EU. Fra Kull- og staalunionen i 1951 til dagens EU har Frankrike spilt en sentral rolle i utviklingen av det europeiske prosjektet.`,
    },
    {
      id: 'fransk-3-7-4-def-1',
      type: 'definition',
      title: 'Vokabular: EU-institusjoner',
      content: `**Les institutions europeennes:**

| Fransk | Norsk |
|--------|-------|
| l'Union europeenne (UE) | EU |
| la Commission europeenne | Europakommisjonen |
| le Parlement europeen | Europaparlamentet |
| le Conseil europeen | Det europeiske raad |
| la Banque centrale europeenne (BCE) | Den europeiske sentralbanken |
| la Cour de justice | EU-domstolen |
| un Etat membre | et medlemsland |
| le traite | traktaten/avtalen |`,
    },
    {
      id: 'fransk-3-7-4-def-2',
      type: 'definition',
      title: 'Vokabular: Europeisk samarbeid',
      content: `**La cooperation europeenne:**

| Fransk | Norsk |
|--------|-------|
| l'integration europeenne | europeisk integrasjon |
| le marche unique | det indre markedet |
| la libre circulation | fri bevegelse |
| l'euro | euroen |
| la zone euro | eurosonen |
| la politique etrangere | utenrikspolitikken |
| les droits de l'homme | menneskerettighetene |
| la solidarite europeenne | europeisk solidaritet |`,
    },
    {
      id: 'fransk-3-7-4-text-1',
      type: 'text',
      content: `## La France et la construction europeenne

**Viktige milepaler:**

- **1951**: Frankrike grunnlegger Kull- og staalunionen (CECA) med 5 andre land
- **1957**: Romatraktaten - opprettelsen av EEC (Det europeiske okonomiske fellesskap)
- **1992**: Maastricht-traktaten - opprettelsen av EU
- **2002**: Euroen innfoeres i Frankrike
- **2005**: Frankrike stemmer nei til EU-grunnloven i folkeavstemning
- **2007**: Lisboa-traktaten erstatter grunnlovsforslaget

**Le couple franco-allemand:**
Det fransk-tyske samarbeidet ("le moteur franco-allemand") har vaert selve drivkraften i europeisk integrasjon, fra Schuman-planen i 1950 til i dag.`,
    },
    {
      id: 'fransk-3-7-4-tip-1',
      type: 'tip',
      content: `Det franske begrepet "la construction europeenne" (den europeiske konstruksjonen/oppbyggingen) brukes ofte for aa beskrive den gradvise prosessen med europeisk integrasjon. Det understreker at EU ikke ble skapt over natten, men er resultatet av aartiers arbeid og forhandlinger.`,
    },
    {
      id: 'fransk-3-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstaa EU-tekst',
      problem: `Les teksten og svar paa sporsmalene:

"L'Union europeenne compte 27 Etats membres depuis le Brexit en 2020. La France est l'un des six pays fondateurs. Le Parlement europeen, qui siege a Strasbourg, represente les citoyens europeens et vote les lois europeennes avec le Conseil."

a) Hvor mange medlemsland har EU?
b) Hvor ligger Europaparlamentet?
c) Hva var spesielt med Frankrike?`,
      solution: `a) EU har **27 medlemsland** (27 Etats membres) siden Brexit i 2020.

b) Europaparlamentet holder til i **Strasbourg** (siege a Strasbourg).

c) Frankrike er **ett av de seks grunnleggerlandene** (l'un des six pays fondateurs).

**Noekkelvokabular:**
- compter = telle / ha (antall)
- un pays fondateur = et grunnleggerland
- sieger = ha hovedsete/holde til
- representer = representere`,
    },
    {
      id: 'fransk-3-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-4-ex-1',
        number: '7.4.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Frankrike er et grunnleggerland i EU.', solution: 'La France est un pays fondateur de l\'UE.', answer: 'La France est un pays fondateur de l\'UE' },
          { label: 'b', task: 'Europaparlamentet holder til i Strasbourg.', solution: 'Le Parlement europeen siege a Strasbourg.', answer: 'Le Parlement europeen siege a Strasbourg' },
          { label: 'c', task: 'EU har 27 medlemsland.', solution: 'L\'UE compte 27 Etats membres.', answer: 'L\'UE compte 27 Etats membres' },
          { label: 'd', task: 'Euroen er den felles valutaen.', solution: 'L\'euro est la monnaie commune.', answer: 'L\'euro est la monnaie commune' },
        ],
        solution: 'a) La France est un pays fondateur de l\'UE, b) Le Parlement europeen siege a Strasbourg, c) L\'UE compte 27 Etats membres, d) L\'euro est la monnaie commune',
        hints: ['fondateur = grunnlegger', 'la monnaie = valuta'],
      },
    },
    {
      id: 'fransk-3-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Fordeler og utfordringer med EU',
      problem: `Oversett til fransk:

a) Fri bevegelse gjor det mulig aa reise uten pass.
b) Det indre markedet fremmer oekonomisk vekst.
c) Noen mener at EU har for mye makt.`,
      solution: `a) **La libre circulation permet de voyager sans passeport.**
b) **Le marche unique favorise la croissance economique.**
c) **Certains pensent que l'UE a trop de pouvoir.**

**Nyttige uttrykk:**
- permettre de = gjore det mulig aa
- favoriser = fremme
- la croissance economique = oekonomisk vekst
- trop de pouvoir = for mye makt`,
    },
    {
      id: 'fransk-3-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Le ___ unique permet la libre circulation des marchandises. (marked)', solution: 'marche', answer: 'marche' },
          { label: 'b', task: 'La ___ europeenne propose de nouvelles lois. (kommisjon)', solution: 'Commission', answer: 'Commission' },
          { label: 'c', task: 'Le ___ est la sortie du Royaume-Uni de l\'UE. (Brexit)', solution: 'Brexit', answer: 'Brexit' },
          { label: 'd', task: 'La ___ franco-allemande est le moteur de l\'UE. (samarbeid)', solution: 'cooperation', answer: 'cooperation' },
        ],
        solution: 'a) marche, b) Commission, c) Brexit, d) cooperation',
        hints: ['les marchandises = varer', 'le Royaume-Uni = Storbritannia'],
      },
    },
    {
      id: 'fransk-3-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Argumentere om EU',
      problem: `Skriv argumenter paa fransk:

a) Et argument FOR europeisk samarbeid
b) Et argument MOT for mye sentralisering i EU`,
      solution: `a) **Pour:** L'Union europeenne garantit la paix et la stabilite en Europe depuis plus de 70 ans. La cooperation entre les Etats membres favorise la prosperite economique.
*(EU garanterer fred og stabilitet i Europa i over 70 aar. Samarbeid mellom medlemslandene fremmer oekonomisk velstand.)*

b) **Contre:** Certains citoyens estiment que les decisions prises a Bruxelles ne tiennent pas assez compte des realites locales et nationales.
*(Noen borgere mener at beslutningene som tas i Brussel ikke tar tilstrekkelig hensyn til lokale og nasjonale realiteter.)*

**Nyttige uttrykk:**
- garantir = garantere
- la prosperite = velstand
- estimer que = mene at
- tenir compte de = ta hensyn til`,
    },
    {
      id: 'fransk-3-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Det europeiske samarbeidet har sikret fred.', solution: 'La cooperation europeenne a assure la paix.', answer: 'La cooperation europeenne a assure la paix' },
          { label: 'b', task: 'Brexit var en stor utfordring for EU.', solution: 'Le Brexit a ete un grand defi pour l\'UE.', answer: 'Le Brexit a ete un grand defi pour l\'UE' },
          { label: 'c', task: 'Medlemslandene maa samarbeide.', solution: 'Les Etats membres doivent cooperer.', answer: 'Les Etats membres doivent cooperer' },
        ],
        solution: 'a) La cooperation europeenne a assure la paix, b) Le Brexit a ete un grand defi pour l\'UE, c) Les Etats membres doivent cooperer',
        hints: ['assurer = sikre', 'cooperer = samarbeide'],
      },
    },
    {
      id: 'fransk-3-7-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriveoppgave: Skriv 5-6 setninger paa fransk om Frankrikes rolle i EU. Bruk ordene: pays fondateur, cooperation, Parlement europeen, marche unique.',
        subTasks: [
          { label: 'a', task: 'Beskriv Frankrikes historiske rolle i EU', solution: 'La France est l\'un des pays fondateurs de l\'Union europeenne.' },
          { label: 'b', task: 'Forklar det fransk-tyske samarbeidet', solution: 'La cooperation franco-allemande est consideree comme le moteur de l\'integration europeenne.' },
          { label: 'c', task: 'Nevn en fordel og en utfordring', solution: 'Le marche unique favorise l\'economie, mais certains critiquent le manque de democratie.' },
        ],
        solution: 'Eksempel: "La France est l\'un des six pays fondateurs de l\'Union europeenne. Depuis 1951, elle a joue un role central dans la construction europeenne. La cooperation franco-allemande est consideree comme le moteur de l\'integration. Le marche unique a favorise la croissance economique. Cependant, certains Francais sont critiques envers l\'UE, comme l\'a montre le referendum de 2005. Malgre ces defis, la France reste engagee dans le projet europeen."',
        hints: ['malgre = til tross for', 'engage = engasjert'],
      },
    },
    {
      id: 'fransk-3-7-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Strasbourg - Europas hovedstad',
      content: `Strasbourg, som ligger i Alsace ved grensen mot Tyskland, huser Europaparlamentet og Europaraadet. Byen er et symbol paa forsoning mellom Frankrike og Tyskland etter jahrhunderer med konflikter. At Europaparlamentet holder til i en fransk by understreker Frankrikes sentrale rolle i det europeiske prosjektet. Strasbourg kalles ofte "la capitale europeenne" (Europas hovedstad).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.1: L'economie francaise - Fransk oekonomi
// ============================================================================

export const CHAPTER_FRANSK_3_8_1: TextbookChapter = {
  id: 'fransk-3-8-1',
  courseId: 'fransk-3',
  chapterNumber: '8.1',
  title: 'L\'economie francaise - Fransk oekonomi',
  description: 'Laer om de viktigste sektorene i fransk oekonomi, fra jordbruk til teknologi.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive hovedelementene i fransk oekonomi paa fransk',
    'bruke oekonomisk vokabular paa fransk',
  ],
  content: [
    {
      id: 'fransk-3-8-1-intro',
      type: 'text',
      content: `## L'economie francaise

Frankrike er verdens syvende stoerste oekonomi og den tredje stoerste i Europa. Landets oekonomi er diversifisert og inkluderer alt fra tradisjonelt jordbruk til hoyteknologiske startups. Frankrike er saerlig kjent for luksusvarer, matkultur, turisme og et sterkt offentlig sektor.`,
    },
    {
      id: 'fransk-3-8-1-def-1',
      type: 'definition',
      title: 'Vokabular: Oekonomiske sektorer',
      content: `**Les secteurs economiques:**

| Fransk | Norsk |
|--------|-------|
| l'agriculture | jordbruk |
| l'industrie | industri |
| les services | tjenestesektoren |
| le tourisme | turisme |
| le luxe | luksus |
| la technologie | teknologi |
| l'agroalimentaire | naeringsmiddelindustri |
| l'aeronautique | luftfartsindustri |`,
    },
    {
      id: 'fransk-3-8-1-def-2',
      type: 'definition',
      title: 'Vokabular: Oekonomiske begreper',
      content: `**Les termes economiques:**

| Fransk | Norsk |
|--------|-------|
| le PIB (produit interieur brut) | BNP (bruttonasjonalprodukt) |
| la croissance economique | oekonomisk vekst |
| le chomage | arbeidsloeshet |
| l'inflation | inflasjon |
| les exportations | eksport |
| les importations | import |
| le commerce | handel |
| une entreprise | en bedrift |`,
    },
    {
      id: 'fransk-3-8-1-text-1',
      type: 'text',
      content: `## Les secteurs cles de l'economie francaise

**L'agriculture:**
Frankrike er EUs stoerste jordbruksprodusent. Kjent for vin, ost, korn og husdyrhold. "La PAC" (la Politique agricole commune) er EUs felles landbrukspolitikk som stoetter franske boender.

**L'industrie du luxe:**
Franske luksusmerker er verdenskjente: LVMH (Louis Vuitton, Dior, Hennessy), Chanel, Hermes. Frankrike dominerer verdensmarkedet for luksusvarer.

**Le tourisme:**
Frankrike er verdens mest besoegte land med over 90 millioner turister aarlig. Paris, Cote d'Azur, slottene i Loire-dalen og de franske alpene tiltrekker turister fra hele verden.

**La technologie:**
Frankrike har et voksende teknologimiljo med hubs som Station F i Paris. Selskaper som Dassault, Airbus og BlaBlaCar viser bredden i fransk teknologi.`,
    },
    {
      id: 'fransk-3-8-1-tip-1',
      type: 'tip',
      content: `Frankrike bruker uttrykket "Made in France" for aa fremme franske produkter. Det finnes ogsaa konseptet "la French Tech" som er et oekosystem for franske teknologioppstarter. Disse begrepene viser at Frankrike er stolt av sine produkter og innovasjoner.`,
    },
    {
      id: 'fransk-3-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstaa oekonomisk tekst',
      problem: `Les teksten og svar paa sporsmalene:

"La France est la deuxieme puissance agricole en Europe. Le secteur du tourisme represente environ 8% du PIB francais. Les industries du luxe et de l'aeronautique sont des fleurons de l'economie nationale."

a) Hvilken rang har Frankrike innen europeisk jordbruk?
b) Hvor stor del av BNP utgjor turisme?
c) Hva betyr "un fleuron"?`,
      solution: `a) Frankrike er den **nest stoerste jordbruksmakten** i Europa (deuxieme puissance agricole).

b) Turisme utgjor ca. **8% av BNP** (environ 8% du PIB).

c) "Un fleuron" betyr **en perle/et flaggskip** - det refererer til noe man er saerlig stolt av.

**Noekkelvokabular:**
- la puissance = makten/kraften
- representer = utgjore/representere
- environ = ca./omtrent
- un fleuron = en perle/et flaggskip`,
    },
    {
      id: 'fransk-3-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-1-ex-1',
        number: '8.1.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Frankrike er verdens syvende stoerste oekonomi.', solution: 'La France est la septieme economie mondiale.', answer: 'La France est la septieme economie mondiale' },
          { label: 'b', task: 'Turisme er en viktig sektor.', solution: 'Le tourisme est un secteur important.', answer: 'Le tourisme est un secteur important' },
          { label: 'c', task: 'Luksusvarer er en stor eksportartikkel.', solution: 'Les produits de luxe sont un grand produit d\'exportation.', answer: 'Les produits de luxe sont un grand produit d\'exportation' },
          { label: 'd', task: 'Den oekonomiske veksten er positiv.', solution: 'La croissance economique est positive.', answer: 'La croissance economique est positive' },
        ],
        solution: 'a) La France est la septieme economie mondiale, b) Le tourisme est un secteur important, c) Les produits de luxe sont un grand produit d\'exportation, d) La croissance economique est positive',
        hints: ['septieme = syvende', 'mondial(e) = global/verdens-'],
      },
    },
    {
      id: 'fransk-3-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne oekonomier',
      problem: `Fyll inn paa fransk:

a) Frankrike eksporterer mye vin og ost. (exporter)
b) Jordbruket sysseletter mange mennesker. (employer)
c) Teknologisektoren vokser raskt. (croitre)`,
      solution: `a) **La France exporte beaucoup de vin et de fromage.**
b) **L'agriculture emploie beaucoup de personnes.**
c) **Le secteur technologique croit rapidement.**

**Nyttige verb for oekonomi:**
- exporter = eksportere
- importer = importere
- employer = sysselsette/ansette
- croitre = vokse
- investir = investere
- produire = produsere`,
    },
    {
      id: 'fransk-3-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig oekonomisk begrep:',
        subTasks: [
          { label: 'a', task: 'Le ___ interieur brut mesure la richesse d\'un pays. (produkt)', solution: 'produit', answer: 'produit' },
          { label: 'b', task: 'Le taux de ___ est le pourcentage de personnes sans emploi. (arbeidsloeshet)', solution: 'chomage', answer: 'chomage' },
          { label: 'c', task: 'La ___ economique mesure l\'augmentation de la production. (vekst)', solution: 'croissance', answer: 'croissance' },
          { label: 'd', task: 'Les ___ francaises incluent le vin et l\'aeronautique. (eksporter)', solution: 'exportations', answer: 'exportations' },
        ],
        solution: 'a) produit, b) chomage, c) croissance, d) exportations',
        hints: ['PIB = produit interieur brut', 'le taux = rate/andel'],
      },
    },
    {
      id: 'fransk-3-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Presentere en sektor',
      problem: `Oversett til fransk:

a) Den franske luksusindustrien er verdensledende.
b) Paris tiltrekker millioner av turister hvert aar.
c) Jordbruket er en viktig del av fransk identitet.`,
      solution: `a) **L'industrie francaise du luxe est leader mondial.**
b) **Paris attire des millions de touristes chaque annee.**
c) **L'agriculture est une partie importante de l'identite francaise.**

**Nyttige uttrykk:**
- leader mondial = verdensledende
- attirer = tiltrekke
- chaque annee = hvert aar
- une partie importante de = en viktig del av`,
    },
    {
      id: 'fransk-3-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Frankrike produserer over 1000 typer ost.', solution: 'La France produit plus de 1000 types de fromage.', answer: 'La France produit plus de 1000 types de fromage' },
          { label: 'b', task: 'Luftfartsindustrien sysseletter tusenvis av mennesker.', solution: 'L\'industrie aeronautique emploie des milliers de personnes.', answer: 'L\'industrie aeronautique emploie des milliers de personnes' },
          { label: 'c', task: 'Franske bedrifter investerer i teknologi.', solution: 'Les entreprises francaises investissent dans la technologie.', answer: 'Les entreprises francaises investissent dans la technologie' },
        ],
        solution: 'a) La France produit plus de 1000 types de fromage, b) L\'industrie aeronautique emploie des milliers de personnes, c) Les entreprises francaises investissent dans la technologie',
        hints: ['produire -> produit (presens)', 'des milliers de = tusenvis av'],
      },
    },
    {
      id: 'fransk-3-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriveoppgave: Presenter den franske oekonomien paa 5-6 setninger paa fransk. Nevn minst 3 sektorer og bruk ordene: economie, secteur, exportation, croissance.',
        subTasks: [
          { label: 'a', task: 'Presenter oekonomien generelt', solution: 'La France a une economie diversifiee et dynamique.' },
          { label: 'b', task: 'Beskriv to viktige sektorer', solution: 'Le tourisme et l\'industrie du luxe sont des secteurs cles.' },
          { label: 'c', task: 'Nevn styrker og utfordringer', solution: 'Les exportations sont fortes, mais le chomage reste un defi.' },
        ],
        solution: 'Eksempel: "La France est la septieme economie mondiale avec un PIB parmi les plus eleves. L\'economie francaise est diversifiee et comprend des secteurs cles comme l\'agriculture, le tourisme et l\'industrie du luxe. Les exportations francaises incluent le vin, les produits de luxe et les avions Airbus. Le secteur technologique connait une forte croissance grace a des initiatives comme la French Tech. Cependant, le chomage reste un defi important pour l\'economie francaise."',
        hints: ['comprendre = inkludere/omfatte', 'grace a = takket vaere'],
      },
    },
    {
      id: 'fransk-3-8-1-note-1',
      type: 'note',
      title: 'Kulturnotat: Franske luksusmerker',
      content: `LVMH (Louis Vuitton Moet Hennessy) er verdens stoerste luksuskonsern, grunnlagt av Bernard Arnault, som er en av verdens rikeste personer. Konsernet eier over 75 merker, inkludert Louis Vuitton, Dior, Givenchy, Bulgari og Hennessy. Den franske luksusindustrien representerer en unik kombinasjon av haandverkstradisjon ("le savoir-faire") og moderne markedsfoering.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Le monde professionnel - Yrkeslivet
// ============================================================================

export const CHAPTER_FRANSK_3_8_2: TextbookChapter = {
  id: 'fransk-3-8-2',
  courseId: 'fransk-3',
  chapterNumber: '8.2',
  title: 'Le monde professionnel - Yrkeslivet',
  description: 'Laer aa skrive CV og soeknadsbrev paa fransk, og forstaa fransk arbeidskultur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive CV og soeknadsbrev paa fransk',
    'forstaa fransk arbeidskultur og yrkesliv',
  ],
  content: [
    {
      id: 'fransk-3-8-2-intro',
      type: 'text',
      content: `## Le monde professionnel en France

Det franske yrkeslivet har sine egne tradisjoner og forventninger. Aa forstaa hvordan man soeker jobb, hvordan arbeidslivet er organisert, og hvilke kulturelle koder som gjelder, er viktig for alle som oensker aa jobbe i Frankrike eller med franske bedrifter.`,
    },
    {
      id: 'fransk-3-8-2-def-1',
      type: 'definition',
      title: 'Vokabular: Jobb og karriere',
      content: `**Le travail et la carriere:**

| Fransk | Norsk |
|--------|-------|
| un emploi / un travail | en jobb |
| un poste | en stilling |
| un CV (curriculum vitae) | en CV |
| une lettre de motivation | et soeknadsbrev |
| un entretien d'embauche | et jobbintervju |
| un salaire | en loenn |
| un contrat de travail | en arbeidskontrakt |
| le temps plein / le temps partiel | heltid / deltid |`,
    },
    {
      id: 'fransk-3-8-2-def-2',
      type: 'definition',
      title: 'Vokabular: Arbeidsplassen',
      content: `**Le lieu de travail:**

| Fransk | Norsk |
|--------|-------|
| un bureau | et kontor |
| une entreprise | en bedrift |
| un collegue | en kollega |
| le patron / la patronne | sjefen |
| les heures de travail | arbeidstid |
| les conges payes | betalt ferie |
| la pause dejeuner | lunsjpause |
| le teletravail | hjemmekontor |`,
    },
    {
      id: 'fransk-3-8-2-text-1',
      type: 'text',
      content: `## Le CV francais - Den franske CVen

En fransk CV har en spesifikk struktur:

1. **Etat civil** - Personlige opplysninger (navn, adresse, telefon, e-post)
2. **Formation** - Utdanning (nyeste foerst)
3. **Experience professionnelle** - Arbeidserfaring (nyeste foerst)
4. **Competences** - Ferdigheter (spraak, IT, osv.)
5. **Centres d'interet** - Interesser/hobbyer

**Forskjeller fra norsk CV:**
- Foto er vanlig paa franske CVer
- Utdanning vektlegges sterkt
- Hoeflig og formelt spraak brukes gjennomgaaende`,
    },
    {
      id: 'fransk-3-8-2-tip-1',
      type: 'tip',
      content: `I Frankrike er "les 35 heures" (35-timersuken) den lovfestede arbeidstiden, innfoert i 2000. Franskmenn har ogsaa rett til minimum 5 ukers betalt ferie (les conges payes). I tillegg har man lovfestet rett til aa "koble av" etter arbeidstid (le droit a la deconnexion), innfoert i 2017.`,
    },
    {
      id: 'fransk-3-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Skrive soeknadsbrev',
      problem: `Les utdrag fra et soeknadsbrev og identifiser delene:

"Madame, Monsieur,
Je me permets de vous adresser ma candidature pour le poste de stagiaire en marketing, publie sur votre site internet.
Actuellement etudiant(e) en troisieme annee de licence, je suis tres interesse(e) par votre entreprise.
Je vous prie d'agreer, Madame, Monsieur, l'expression de mes salutations distinguees."

a) Hva er innledningsformelen?
b) Hvilken stilling soekes det paa?
c) Hva er avslutningsformelen?`,
      solution: `a) Innledningsformelen er **"Madame, Monsieur"** (tilsvarer "Kjaere ansvarlig" / "Til rette vedkommende").

b) Det soekes paa en **praksisplass i markedsfoering** (stagiaire en marketing).

c) Avslutningsformelen er **"Je vous prie d'agreer... l'expression de mes salutations distinguees"** (en svært formell avslutning tilsvarende "Med vennlig hilsen").

**Noekkelvokabular:**
- je me permets de = jeg tillater meg aa
- une candidature = en soeknad
- un/une stagiaire = en praktikant
- actuellement = for tiden`,
    },
    {
      id: 'fransk-3-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-2-ex-1',
        number: '8.2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg soeker paa stillingen som praktikant.', solution: 'Je postule pour le poste de stagiaire.', answer: 'Je postule pour le poste de stagiaire' },
          { label: 'b', task: 'Vedlagt finner du min CV.', solution: 'Vous trouverez ci-joint mon CV.', answer: 'Vous trouverez ci-joint mon CV' },
          { label: 'c', task: 'Jeg er veldig interessert i bedriften deres.', solution: 'Je suis tres interesse(e) par votre entreprise.', answer: 'Je suis tres interesse par votre entreprise' },
          { label: 'd', task: 'Jeg er tilgjengelig for et intervju.', solution: 'Je suis disponible pour un entretien.', answer: 'Je suis disponible pour un entretien' },
        ],
        solution: 'a) Je postule pour le poste de stagiaire, b) Vous trouverez ci-joint mon CV, c) Je suis tres interesse(e) par votre entreprise, d) Je suis disponible pour un entretien',
        hints: ['postuler = soeke (paa jobb)', 'ci-joint = vedlagt'],
      },
    },
    {
      id: 'fransk-3-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: CV-oppfoering',
      problem: `Oversett disse CV-punktene til fransk:

a) Utdanning: Videregaaende skole, studieforberedende
b) Erfaring: Sommerjobb i butikk (2024)
c) Ferdigheter: Flytende i norsk og engelsk, grunnleggende fransk`,
      solution: `a) **Formation: Lycee general, filiere generale** (2021-2024)
b) **Experience professionnelle: Emploi saisonnier en magasin** (ete 2024)
c) **Competences linguistiques: Norvegien et anglais courants, francais niveau intermediaire**

**CV-vokabular:**
- la formation = utdanning
- un emploi saisonnier = sesongarbeid/sommerjobb
- un magasin = en butikk
- courant = flytende (om spraak)
- intermediaire = mellomnivaaa`,
    },
    {
      id: 'fransk-3-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Un ___ d\'embauche est une conversation formelle avec l\'employeur. (intervju)', solution: 'entretien', answer: 'entretien' },
          { label: 'b', task: 'La ___ de motivation accompagne le CV. (brev)', solution: 'lettre', answer: 'lettre' },
          { label: 'c', task: 'En France, la semaine de travail est de ___ heures. (35)', solution: '35', answer: '35' },
          { label: 'd', task: 'Les ___ payes sont au minimum de 5 semaines. (ferie)', solution: 'conges', answer: 'conges' },
        ],
        solution: 'a) entretien, b) lettre, c) 35, d) conges',
        hints: ['embauche = ansettelse', 'accompagner = folge med/ledsage'],
      },
    },
    {
      id: 'fransk-3-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Jobbintervju',
      problem: `Oversett vanlige intervjuspoersmaal til fransk:

a) Kan du presentere deg selv?
b) Hva er dine styrker?
c) Hvorfor oensker du aa jobbe hos oss?`,
      solution: `a) **Pouvez-vous vous presenter?**
b) **Quels sont vos points forts?**
c) **Pourquoi souhaitez-vous travailler chez nous?**

**Andre vanlige spoersmaal:**
- Quels sont vos points faibles? = Hva er dine svakheter?
- Ou vous voyez-vous dans 5 ans? = Hvor ser du deg selv om 5 aar?
- Avez-vous des questions? = Har du noen spoersmaal?

**Tips:** I franske jobbintervjuer brukes alltid "vous" (formell tiltale).`,
    },
    {
      id: 'fransk-3-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg har erfaring med kundeservice.', solution: 'J\'ai de l\'experience en service client.', answer: 'J\'ai de l\'experience en service client' },
          { label: 'b', task: 'Mine styrker er teamarbeid og kreativitet.', solution: 'Mes points forts sont le travail d\'equipe et la creativite.', answer: 'Mes points forts sont le travail d\'equipe et la creativite' },
          { label: 'c', task: 'Jeg er motivert og laerevillig.', solution: 'Je suis motive(e) et desireux/desireuse d\'apprendre.', answer: 'Je suis motive et desireux d\'apprendre' },
        ],
        solution: 'a) J\'ai de l\'experience en service client, b) Mes points forts sont le travail d\'equipe et la creativite, c) Je suis motive(e) et desireux/desireuse d\'apprendre',
        hints: ['le service client = kundeservice', 'desireux d\'apprendre = laerevillig'],
      },
    },
    {
      id: 'fransk-3-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriveoppgave: Skriv et kort soeknadsbrev (6-8 setninger) paa fransk for en sommerjobb. Bruk formell tone og inkluder: innledning, motivasjon, kompetanse og avslutning.',
        subTasks: [
          { label: 'a', task: 'Skriv innledningen', solution: 'Madame, Monsieur, je me permets de vous adresser ma candidature pour le poste de...' },
          { label: 'b', task: 'Presenter din motivasjon og kompetanse', solution: 'Je suis tres interesse(e) par... J\'ai de l\'experience en...' },
          { label: 'c', task: 'Avslutt formelt', solution: 'Je vous prie d\'agreer, Madame, Monsieur, l\'expression de mes salutations distinguees.' },
        ],
        solution: 'Eksempel: "Madame, Monsieur, Je me permets de vous adresser ma candidature pour le poste d\'emploi saisonnier dans votre restaurant. Actuellement eleve en terminale, je suis tres interesse(e) par ce poste. J\'ai deja une experience en service client et je parle trois langues: le norvegien, l\'anglais et le francais. Je suis motive(e), ponctuel(le) et j\'aime travailler en equipe. Je suis disponible pour un entretien a votre convenance. Je vous prie d\'agreer, Madame, Monsieur, l\'expression de mes salutations distinguees."',
        hints: ['a votre convenance = naar det passer deg/dere', 'ponctuel = punktlig'],
      },
    },
    {
      id: 'fransk-3-8-2-note-1',
      type: 'note',
      title: 'Kulturnotat: Fransk arbeidskultur',
      content: `Fransk arbeidskultur skiller seg fra norsk paa flere maater. Hierarkiet er tydeligere, og man bruker ofte "vous" med overordnede. Lunsjpausen er hellig - mange tar en lang lunsj (1-2 timer), og det er vanlig aa spise sammen med kollegaer. Etter arbeidstid er det vanlig med "l'aperitif" (en drink foer middag) med kollegaer. I tillegg setter franskmenn stor pris paa sin ferie: august er tradisjonelt feriemaaneden, og mange bedrifter stenger helt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: La mondialisation - Globalisering
// ============================================================================

export const CHAPTER_FRANSK_3_8_3: TextbookChapter = {
  id: 'fransk-3-8-3',
  courseId: 'fransk-3',
  chapterNumber: '8.3',
  title: 'La mondialisation - Globalisering',
  description: 'Laer om Frankrike i den globale oekonomien, handel og kulturell globalisering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'diskutere globalisering og dens konsekvenser paa fransk',
    'bruke vokabular om internasjonal handel og frankofoni',
  ],
  content: [
    {
      id: 'fransk-3-8-3-intro',
      type: 'text',
      content: `## La mondialisation et la France

Globalisering paavirker alle land, og Frankrike er intet unntak. Som en av verdens stoerste oekonomier er Frankrike dypt integrert i den globale oekonomien. Samtidig har Frankrike et saerlig forhold til globalisering paa grunn av sin frankofone arv og onsket om aa bevare fransk kultur og spraak i en stadig mer engelsk-dominert verden.`,
    },
    {
      id: 'fransk-3-8-3-def-1',
      type: 'definition',
      title: 'Vokabular: Globalisering',
      content: `**La mondialisation:**

| Fransk | Norsk |
|--------|-------|
| la mondialisation | globalisering |
| le commerce international | internasjonal handel |
| les echanges commerciaux | handelssamkvem |
| une multinationale | et multinasjonalt selskap |
| la concurrence | konkurranse |
| la delocalisation | utflagging (av bedrifter) |
| le libre-echange | frihandel |
| le protectionnisme | proteksjonisme |`,
    },
    {
      id: 'fransk-3-8-3-def-2',
      type: 'definition',
      title: 'Vokabular: Kulturell globalisering',
      content: `**La mondialisation culturelle:**

| Fransk | Norsk |
|--------|-------|
| la diversite culturelle | kulturelt mangfold |
| l'exception culturelle | det kulturelle unntaket |
| la francophonie | den frankofone verden |
| l'influence culturelle | kulturell innflytelse |
| le rayonnement culturel | kulturell utstroeling |
| l'identite culturelle | kulturell identitet |
| l'uniformisation | ensretting |
| le patrimoine culturel | kulturarv |`,
    },
    {
      id: 'fransk-3-8-3-text-1',
      type: 'text',
      content: `## La France dans l'economie mondiale

**Frankrikes plass i verdensoekonomien:**
- 7. stoerste oekonomi i verden
- 3. stoerste mottaker av utenlandske investeringer i Europa
- Medlem av G7, G20 og OECD
- Viktige handelspartnere: Tyskland, USA, Kina, Italia, Spania

**L'exception culturelle francaise:**
Frankrike forsvarer aktivt "l'exception culturelle" - ideen om at kultur ikke bare er en vare og maa beskyttes mot markedskreftene. Dette betyr:
- Kvoter for fransk musikk paa radio (minst 40%)
- Stoette til fransk film (CNC)
- Beskyttelse av det franske spraaket (Academie francaise)

**La Francophonie:**
Det frankofone samarbeidet (OIF) omfatter 88 stater og regjeringer der fransk er offisielt spraak eller har en viktig rolle. Dette gir Frankrike en unik internasjonal plattform.`,
    },
    {
      id: 'fransk-3-8-3-tip-1',
      type: 'tip',
      content: `Begrepet "la Francophonie" (med stor F) refererer til den internasjonale organisasjonen for frankofone land (OIF), mens "la francophonie" (med liten f) refererer til alle mennesker som snakker fransk. Fransk er offisielt spraak i 29 land og snakkes av over 300 millioner mennesker verden over.`,
    },
    {
      id: 'fransk-3-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstaa tekst om globalisering',
      problem: `Les teksten og svar paa sporsmalene:

"La mondialisation a transforme l'economie francaise. D'un cote, elle a permis aux entreprises francaises de s'implanter a l'etranger. De l'autre, elle a entraine des delocalisations et une concurrence accrue. La France defend l'exception culturelle pour proteger sa diversite face a l'uniformisation mondiale."

a) Hva er positivt med globalisering ifloelge teksten?
b) Hva er negativt?
c) Hva er "l'exception culturelle"?`,
      solution: `a) Positivt: Globalisering har gjort det mulig for franske bedrifter aa **etablere seg i utlandet** (s'implanter a l'etranger).

b) Negativt: Det har foert til **utflagging** (delocalisations) og **oekt konkurranse** (concurrence accrue).

c) "L'exception culturelle" er Frankrikes forsvar for kulturelt mangfold mot **global ensretting** (uniformisation mondiale).

**Noekkelvokabular:**
- d'un cote... de l'autre = paa den ene siden... paa den andre
- s'implanter = etablere seg
- entrainer = medfore
- accru(e) = oekt`,
    },
    {
      id: 'fransk-3-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-3-ex-1',
        number: '8.3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Globalisering har forandret verden.', solution: 'La mondialisation a transforme le monde.', answer: 'La mondialisation a transforme le monde' },
          { label: 'b', task: 'Internasjonal handel oeker.', solution: 'Le commerce international augmente.', answer: 'Le commerce international augmente' },
          { label: 'c', task: 'Frankrike forsvarer kulturelt mangfold.', solution: 'La France defend la diversite culturelle.', answer: 'La France defend la diversite culturelle' },
          { label: 'd', task: 'Konkurransen er blitt sterkere.', solution: 'La concurrence est devenue plus forte.', answer: 'La concurrence est devenue plus forte' },
        ],
        solution: 'a) La mondialisation a transforme le monde, b) Le commerce international augmente, c) La France defend la diversite culturelle, d) La concurrence est devenue plus forte',
        hints: ['transformer = forandre', 'defendre = forsvare'],
      },
    },
    {
      id: 'fransk-3-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Argumentere om globalisering',
      problem: `Skriv argumenter paa fransk:

a) Et argument for frihandel
b) Et argument for aa beskytte lokal kultur`,
      solution: `a) **Le libre-echange favorise la croissance economique et permet aux consommateurs d'acceder a des produits moins chers et plus varies.**
*(Frihandel fremmer oekonomisk vekst og gjor det mulig for forbrukere aa faa tilgang til billigere og mer varierte produkter.)*

b) **Il est essentiel de proteger les cultures locales face a l'uniformisation mondiale. Chaque culture a une valeur unique qu'il faut preserver.**
*(Det er vesentlig aa beskytte lokale kulturer mot global ensretting. Hver kultur har en unik verdi som maa bevares.)*

**Nyttige uttrykk:**
- favoriser = fremme
- acceder a = faa tilgang til
- face a = overfor/i moete med
- preserver = bevare`,
    },
    {
      id: 'fransk-3-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'La ___ est le transfert d\'activites economiques a l\'etranger. (utflagging)', solution: 'delocalisation', answer: 'delocalisation' },
          { label: 'b', task: 'La ___ est l\'ensemble des pays ou l\'on parle francais. (frankofoni)', solution: 'francophonie', answer: 'francophonie' },
          { label: 'c', task: 'Le ___ culturel designe l\'heritage culturel d\'un pays. (arv)', solution: 'patrimoine', answer: 'patrimoine' },
          { label: 'd', task: 'Une ___ est une entreprise presente dans plusieurs pays. (multinasjonalt selskap)', solution: 'multinationale', answer: 'multinationale' },
        ],
        solution: 'a) delocalisation, b) francophonie, c) patrimoine, d) multinationale',
        hints: ['delocalisation = aa flytte virksomhet ut av landet', 'le patrimoine = arven/kulturarven'],
      },
    },
    {
      id: 'fransk-3-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Frankofoni i oekonomien',
      problem: `Oversett til fransk:

a) Det frankofone omraadet utgjor et stort oekonomisk marked.
b) Mange afrikanske land har fransk som offisielt spraak.
c) Frankofoni skaper muligheter for handel.`,
      solution: `a) **L'espace francophone constitue un grand marche economique.**
b) **De nombreux pays africains ont le francais comme langue officielle.**
c) **La francophonie cree des opportunites pour le commerce.**

**Fakta om frankofoni:**
- 300+ millioner fransktalende i verden
- 88 stater og regjeringer i OIF
- Fransk er 5. mest talte spraak i verden
- Afrika er hjemmet til flest fransktalende`,
    },
    {
      id: 'fransk-3-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Globalisering har bade fordeler og ulemper.', solution: 'La mondialisation a des avantages et des inconvenients.', answer: 'La mondialisation a des avantages et des inconvenients' },
          { label: 'b', task: 'Franske bedrifter er til stede i hele verden.', solution: 'Les entreprises francaises sont presentes dans le monde entier.', answer: 'Les entreprises francaises sont presentes dans le monde entier' },
          { label: 'c', task: 'Vi maa bevare kulturelt mangfold.', solution: 'Nous devons preserver la diversite culturelle.', answer: 'Nous devons preserver la diversite culturelle' },
        ],
        solution: 'a) La mondialisation a des avantages et des inconvenients, b) Les entreprises francaises sont presentes dans le monde entier, c) Nous devons preserver la diversite culturelle',
        hints: ['les avantages = fordelene', 'les inconvenients = ulempene'],
      },
    },
    {
      id: 'fransk-3-8-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriveoppgave: Skriv 5-6 setninger paa fransk om globalisering og Frankrike. Diskuter bade oekonomiske og kulturelle aspekter.',
        subTasks: [
          { label: 'a', task: 'Beskriv globaliseringens paavirkning paa Frankrike', solution: 'La mondialisation a transforme l\'economie francaise en ouvrant de nouveaux marches.' },
          { label: 'b', task: 'Forklar "l\'exception culturelle"', solution: 'La France defend l\'exception culturelle pour proteger sa culture face a la mondialisation.' },
          { label: 'c', task: 'Nevn frankofoniens rolle', solution: 'La francophonie donne a la France un rayonnement culturel et economique mondial.' },
        ],
        solution: 'Eksempel: "La mondialisation a profondement transforme l\'economie francaise. Les entreprises francaises comme LVMH et Airbus sont devenues des leaders mondiaux. Cependant, la France est aussi preoccupee par la protection de sa culture. Elle defend l\'exception culturelle pour preserver la diversite face a l\'uniformisation. La francophonie joue un role important en donnant a la France un rayonnement mondial. Grace a ce reseau de pays francophones, la France maintient une influence culturelle et economique unique."',
        hints: ['profondement = dypt/grunnleggende', 'preoccupe par = opptatt av/bekymret for'],
      },
    },
    {
      id: 'fransk-3-8-3-note-1',
      type: 'note',
      title: 'Kulturnotat: L\'Academie francaise',
      content: `L'Academie francaise ble grunnlagt i 1635 av kardinal Richelieu og har som oppgave aa bevare og regulere det franske spraaket. De 40 medlemmene kalles "les Immortels" (de udodelige). Akademiet utgir en offisiell ordbok og uttaler seg om nye ord og uttrykkk. I en tid med globalisering og engelske laanord spiller akademiet en viktig rolle i debatten om spraakbevaring, selv om mange mener det er for konservativt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: L'entrepreneuriat - Entreprenoerskap
// ============================================================================

export const CHAPTER_FRANSK_3_8_4: TextbookChapter = {
  id: 'fransk-3-8-4',
  courseId: 'fransk-3',
  chapterNumber: '8.4',
  title: 'L\'entrepreneuriat - Entreprenoerskap',
  description: 'Laer om oppstartsmiljoeet i Frankrike, innovasjon og vokabular for forretningsplaner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke vokabular knyttet til entreprenoerskap og innovasjon paa fransk',
    'presentere en forretningside paa fransk',
  ],
  content: [
    {
      id: 'fransk-3-8-4-intro',
      type: 'text',
      content: `## L'entrepreneuriat en France

Frankrike har i de siste aarene blitt et av Europas mest dynamiske land for oppstartsselskaper. Med initiativene "La French Tech" og verdens stoerste inkubator Station F, har landet skapt et oekosystem som tiltrekker grunderere fra hele verden. Aa forstaa vokabular og konsepter knyttet til entreprenoerskap er nyttig bade for spraaklaering og for karriereplanlegging.`,
    },
    {
      id: 'fransk-3-8-4-def-1',
      type: 'definition',
      title: 'Vokabular: Entreprenoerskap',
      content: `**L'entrepreneuriat:**

| Fransk | Norsk |
|--------|-------|
| un entrepreneur / une entrepreneuse | en grunder |
| une startup / une jeune pousse | en oppstartsbedrift |
| creer une entreprise | aa starte en bedrift |
| un incubateur | en inkubator |
| un accelerateur | en akselerator |
| un investisseur | en investor |
| un business plan / un plan d'affaires | en forretningsplan |
| lever des fonds | aa skaffe kapital |`,
    },
    {
      id: 'fransk-3-8-4-def-2',
      type: 'definition',
      title: 'Vokabular: Innovasjon og utvikling',
      content: `**L'innovation et le developpement:**

| Fransk | Norsk |
|--------|-------|
| l'innovation | innovasjon |
| innover | aa innovere |
| la recherche et developpement (R&D) | forskning og utvikling (FoU) |
| un brevet | et patent |
| un prototype | en prototyp |
| le chiffre d'affaires | omsetning |
| la rentabilite | loennsomhet |
| un marche de niche | et nisjemarked |`,
    },
    {
      id: 'fransk-3-8-4-text-1',
      type: 'text',
      content: `## L'ecosysteme entrepreneurial francais

**Station F:**
- Verdens stoerste oppstartsinkubator, aapnet i 2017 i Paris
- Grunnlagt av Xavier Niel (grunnlegger av Free)
- 34 000 m2 med plass til over 1000 oppstartsselskaper
- Tilbyr programmer, mentorer og nettverk

**La French Tech:**
- Statlig initiativ for aa fremme franske teknologioppstarter
- Et nettverk av "hubs" i franske byer og i utlandet
- Kjent for sitt roede hanemerke (le coq rouge)
- Har bidratt til aa skape "licornes" (enhjoerninger) - oppstarter verdt over 1 milliard dollar

**Kjente franske oppstarter:**
- BlaBlaCar - samkjoeringstjeneste
- Doctolib - legetimebestilling paa nett
- Deezer - musikkstroemmetjeneste
- Back Market - brukt elektronikk
- ManoMano - netthandel for oppussing`,
    },
    {
      id: 'fransk-3-8-4-tip-1',
      type: 'tip',
      content: `Paa fransk bruker man ofte engelske laanord i oppstartsverdenen: "startup", "pitch", "business model", "fundraising". Men det finnes ogsaa franske alternativer: "jeune pousse" (ung plante = startup), "presentation eclair" (lynpresentasjon = pitch), "modele economique" (= business model). Academie francaise anbefaler de franske versjonene!`,
    },
    {
      id: 'fransk-3-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstaa en bedriftspresentasjon',
      problem: `Les teksten og svar paa sporsmalene:

"Notre startup, EcoVelo, propose un service de location de velos electriques dans les villes moyennes. Notre marche cible est les travailleurs urbains qui cherchent une alternative ecologique aux transports en commun. Nous avons deja leve 500 000 euros aupres d'investisseurs prives."

a) Hva er bedriftens produkt/tjeneste?
b) Hvem er maalgruppen?
c) Hvor mye kapital har de hentet inn?`,
      solution: `a) Bedriften tilbyr **utleie av elektriske sykler i mellomstore byer** (location de velos electriques dans les villes moyennes).

b) Maalgruppen er **urbane arbeidstakere som soeker et oekologisk alternativ til offentlig transport** (travailleurs urbains qui cherchent une alternative ecologique).

c) De har hentet inn **500 000 euro fra private investorer** (leve 500 000 euros aupres d'investisseurs prives).

**Noekkelvokabular:**
- proposer = tilby
- la location = utleie
- le marche cible = maalgruppen/maalmarkedet
- lever des fonds = hente inn kapital
- aupres de = fra/hos`,
    },
    {
      id: 'fransk-3-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-4-ex-1',
        number: '8.4.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Hun har startet sin egen bedrift.', solution: 'Elle a cree sa propre entreprise.', answer: 'Elle a cree sa propre entreprise' },
          { label: 'b', task: 'Investoren finansierer oppstarten.', solution: 'L\'investisseur finance la startup.', answer: 'L\'investisseur finance la startup' },
          { label: 'c', task: 'Vi trenger en god forretningsplan.', solution: 'Nous avons besoin d\'un bon plan d\'affaires.', answer: 'Nous avons besoin d\'un bon plan d\'affaires' },
          { label: 'd', task: 'Innovasjon er nokkelen til suksess.', solution: 'L\'innovation est la cle du succes.', answer: 'L\'innovation est la cle du succes' },
        ],
        solution: 'a) Elle a cree sa propre entreprise, b) L\'investisseur finance la startup, c) Nous avons besoin d\'un bon plan d\'affaires, d) L\'innovation est la cle du succes',
        hints: ['creer = skape/starte', 'la cle = nokkelen'],
      },
    },
    {
      id: 'fransk-3-8-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Presentere en forretningside',
      problem: `Oversett en forretningspitch til fransk:

a) Vaar bedrift loser et reelt problem.
b) Vi har et innovativt produkt.
c) Markedet er stort og voksende.`,
      solution: `a) **Notre entreprise resout un probleme reel.**
b) **Nous avons un produit innovant.**
c) **Le marche est vaste et en croissance.**

**Struktur for en pitch paa fransk:**
1. Le probleme - Problemet dere loeser
2. La solution - Loesningen dere tilbyr
3. Le marche - Markedet og maalgruppen
4. Le modele economique - Hvordan dere tjener penger
5. L'equipe - Teamet bak bedriften
6. Les besoins financiers - Kapitalbehov`,
    },
    {
      id: 'fransk-3-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Station F est le plus grand ___ de startups au monde. (inkubator)', solution: 'incubateur', answer: 'incubateur' },
          { label: 'b', task: 'Une licorne est une startup valorisee a plus d\'un ___ de dollars. (milliard)', solution: 'milliard', answer: 'milliard' },
          { label: 'c', task: 'Le ___ d\'affaires mesure les ventes d\'une entreprise. (omsetning)', solution: 'chiffre', answer: 'chiffre' },
          { label: 'd', task: 'Il faut ___ des fonds pour financer le projet. (skaffe)', solution: 'lever', answer: 'lever' },
        ],
        solution: 'a) incubateur, b) milliard, c) chiffre, d) lever',
        hints: ['valorise = verdsatt/verdt', 'les ventes = salget'],
      },
    },
    {
      id: 'fransk-3-8-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Diskutere entreprenoerskap',
      problem: `Oversett til fransk:

a) Entreprenoerskap skaper arbeidsplasser.
b) Aa starte en bedrift krever mot og utholdenhet.
c) Frankrike stoetter innovasjon gjennom ulike programmer.`,
      solution: `a) **L'entrepreneuriat cree des emplois.**
b) **Creer une entreprise demande du courage et de la perseverance.**
c) **La France soutient l'innovation a travers differents programmes.**

**Nyttige verb for entreprenoerskap:**
- creer = skape/starte
- innover = innovere
- investir = investere
- developper = utvikle
- soutenir = stoette
- lancer = lansere`,
    },
    {
      id: 'fransk-3-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Station F er verdens stoerste oppstartsinkubator.', solution: 'Station F est le plus grand incubateur de startups au monde.', answer: 'Station F est le plus grand incubateur de startups au monde' },
          { label: 'b', task: 'Franske oppstarter tiltrekker utenlandske investorer.', solution: 'Les startups francaises attirent des investisseurs etrangers.', answer: 'Les startups francaises attirent des investisseurs etrangers' },
          { label: 'c', task: 'Vi maa utvikle en prototyp foer vi lanserer produktet.', solution: 'Nous devons developper un prototype avant de lancer le produit.', answer: 'Nous devons developper un prototype avant de lancer le produit' },
        ],
        solution: 'a) Station F est le plus grand incubateur de startups au monde, b) Les startups francaises attirent des investisseurs etrangers, c) Nous devons developper un prototype avant de lancer le produit',
        hints: ['attirer = tiltrekke', 'avant de + infinitif = foer man...'],
      },
    },
    {
      id: 'fransk-3-8-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriveoppgave: Presenter en forretningside paa fransk (6-8 setninger). Beskriv: problemet, loesningen, maalgruppen og hvorfor ideen er innovativ.',
        subTasks: [
          { label: 'a', task: 'Beskriv problemet du vil loese', solution: 'Beaucoup de jeunes ont du mal a trouver des stages en entreprise.' },
          { label: 'b', task: 'Presenter loesningen din', solution: 'Notre plateforme connecte les etudiants avec des entreprises qui proposent des stages.' },
          { label: 'c', task: 'Forklar hvorfor ideen er innovativ', solution: 'Notre algorithme utilise l\'intelligence artificielle pour trouver le stage ideal.' },
        ],
        solution: 'Eksempel: "Notre startup s\'appelle StageFinder. Le probleme est que beaucoup de jeunes ont du mal a trouver des stages en entreprise. Notre solution est une plateforme en ligne qui connecte les etudiants avec des entreprises. Notre marche cible est les etudiants de 18 a 25 ans en France. Notre modele economique repose sur un abonnement mensuel pour les entreprises. Ce qui rend notre service innovant, c\'est l\'utilisation de l\'intelligence artificielle pour creer des correspondances ideales. Nous avons deja un prototype fonctionnel et cherchons a lever 200 000 euros."',
        hints: ['avoir du mal a = ha vanskeligheter med', 'reposer sur = bygge paa/basere seg paa'],
      },
    },
    {
      id: 'fransk-3-8-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Station F og La French Tech',
      content: `Station F, som aapnet i 2017 i det tidligere togverkstedet Halle Freyssinet i Paris, er verdens stoerste oppstartsinkubator. Den ble grunnlagt av milliardaeren Xavier Niel og huser over 1000 oppstartsselskaper. "La French Tech" er den franske statens satsing paa teknologientreprenorskap. Merket har bidratt til aa gjore Frankrike til et av Europas ledende land for venturkapital. Blant de franske "licornes" (enhjoerninger med verdi over 1 milliard dollar) finner vi BlaBlaCar, Doctolib og Deezer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_3_CHAPTERS_7_8: TextbookChapter[] = [
  CHAPTER_FRANSK_3_7_1,
  CHAPTER_FRANSK_3_7_2,
  CHAPTER_FRANSK_3_7_3,
  CHAPTER_FRANSK_3_7_4,
  CHAPTER_FRANSK_3_8_1,
  CHAPTER_FRANSK_3_8_2,
  CHAPTER_FRANSK_3_8_3,
  CHAPTER_FRANSK_3_8_4,
];
