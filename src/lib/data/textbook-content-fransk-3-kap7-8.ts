/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 3 - Kapittel 7-8
 * Politikk og samfunn, Økonomi og arbeidsliv
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Le système politique français - Det franske politiske systemet
// ============================================================================

export const CHAPTER_FRANSK_3_7_1: TextbookChapter = {
  id: 'fransk-3-7-1',
  courseId: 'fransk-3',
  chapterNumber: '7.1',
  title: 'Le système politique français - Det franske politiske systemet',
  description: 'Lær om det franske politiske systemet, fra den femte republikken til nasjonalforsamlingen.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hovedelementene i det franske politiske systemet',
    'bruke vokabular knyttet til politikk og demokrati på fransk',
  ],
  content: [
    {
      id: 'fransk-3-7-1-intro',
      type: 'text',
      content: `## Le système politique français

Frankrike er en republikk med et semi-presidentsystem. Det nåværende systemet ble opprettet i 1958 med den femte republikken (la Cinquième République), grunnlagt av Charles de Gaulle. Frankrike har et politisk system som skiller seg fra de fleste europeiske land ved at presidenten har svært mye makt.

Å forstå det franske politiske systemet er viktig for å forstå fransk kultur, samfunn og dagsaktuelle debatter.`,
    },
    {
      id: 'fransk-3-7-1-def-1',
      type: 'definition',
      title: 'Vokabular: Det politiske systemet',
      content: `**Les institutions politiques (De politiske institusjonene):**

| Fransk | Norsk |
|--------|-------|
| la République | republikken |
| le Président de la République | presidenten |
| le Premier ministre | statsministeren |
| l'Assemblée nationale | nasjonalforsamlingen |
| le Sénat | senatet |
| le Parlement | parlamentet |
| le gouvernement | regjeringen |
| le Conseil constitutionnel | grunnlovsrådet |`,
    },
    {
      id: 'fransk-3-7-1-def-2',
      type: 'definition',
      title: 'Vokabular: Valg og demokrati',
      content: `**Les élections et la démocratie:**

| Fransk | Norsk |
|--------|-------|
| une élection | et valg |
| voter | å stemme |
| un électeur / une électrice | en velger |
| le suffrage universel | allmenn stemmerett |
| un mandat présidentiel | en presidentperiode |
| un parti politique | et politisk parti |
| la gauche / la droite | venstresiden / høyresiden |
| une loi | en lov |`,
    },
    {
      id: 'fransk-3-7-1-text-1',
      type: 'text',
      content: `## La separation des pouvoirs - Maktfordelingen

Det franske systemet er bygget på maktfordelingsprinsippet:

**Le pouvoir exécutif (utøvende makt):**
- Le Président de la République - velges direkte av folket for 5 år (le quinquennat)
- Le Premier ministre - utnevnes av presidenten
- Le gouvernement - regjeringen, ledet av statsministeren

**Le pouvoir législatif (lovgivende makt):**
- L'Assemblée nationale - 577 députés (representanter), velges for 5 år
- Le Sénat - 348 sénateurs, velges indirekte for 6 år

**Le pouvoir judiciaire (dommende makt):**
- Uavhengige domstoler som sikrer at lovene følges`,
    },
    {
      id: 'fransk-3-7-1-tip-1',
      type: 'tip',
      content: `Den franske presidenten har mye mer makt enn de fleste europeiske statsoverhoder. Presidenten kan oppløse nasjonalforsamlingen, er øverstkommanderende for militæret, og kan i krisetider bruke spesielle fullmakter (article 16). Dette gjør det franske systemet semi-presidentielt.`,
    },
    {
      id: 'fransk-3-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå politisk tekst',
      problem: `Les teksten og svar på spørsmålene:

"Le Président de la République est élu au suffrage universel direct pour un mandat de cinq ans. Il nomme le Premier ministre et preside le Conseil des ministres. L'Assemblée nationale peut renverser le gouvernement par une motion de censure."

a) Hvordan velges presidenten?
b) Hva er presidentens oppgaver ifølge teksten?
c) Hva kan nasjonalforsamlingen gjøre?`,
      solution: `a) Presidenten velges ved **direkte allmenne valg** (suffrage universel direct).

b) Presidenten **utnevner statsministeren** (nomme le Premier ministre) og **leder ministerrådet** (preside le Conseil des ministres).

c) Nasjonalforsamlingen kan **felle regjeringen gjennom et mistillitsforslag** (renverser le gouvernement par une motion de censure).

**Nøkkelvokabular:**
- élu = valgt
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
          { label: 'a', task: 'Presidenten velges for fem år.', solution: 'Le Président est élu pour cinq ans.', answer: 'Le Président est élu pour cinq ans' },
          { label: 'b', task: 'Nasjonalforsamlingen vedtar lover.', solution: 'L\'Assemblée nationale vote les lois.', answer: 'L\'Assemblée nationale vote les lois' },
          { label: 'c', task: 'Statsministeren leder regjeringen.', solution: 'Le Premier ministre dirige le gouvernement.', answer: 'Le Premier ministre dirige le gouvernement' },
          { label: 'd', task: 'Folket stemmer ved valg.', solution: 'Le peuple vote aux élections.', answer: 'Le peuple vote aux élections' },
        ],
        solution: 'a) Le Président est élu pour cinq ans, b) L\'Assemblée nationale vote les lois, c) Le Premier ministre dirige le gouvernement, d) Le peuple vote aux élections',
        hints: ['élu = valgt (partisipp av elire)', 'voter = å stemme / a vedta'],
      },
    },
    {
      id: 'fransk-3-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne politiske systemer',
      problem: `Sammenlign det franske og norske politiske systemet. Fyll inn på fransk:

a) En France, le président est élu ___. En Norvege, le roi est ___.
b) Le parlement français a deux chambres: ___ et ___. Le parlement norvegien s'appelle ___.`,
      solution: `a) En France, le président est élu **au suffrage universel direct**. En Norvege, le roi est **héréditaire** (arvelig).

b) Le parlement français a deux chambres: **l'Assemblée nationale** et **le Sénat**. Le parlement norvegien s'appelle **le Storting**.

**Forskjeller:**
- Frankrike: Republikk med valgt président
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
          { label: 'a', task: 'Den utøvende makten på fransk: le pouvoir ___', solution: 'exécutif', answer: 'exécutif' },
          { label: 'b', task: 'Den lovgivende makten på fransk: le pouvoir ___', solution: 'législatif', answer: 'législatif' },
          { label: 'c', task: 'Presidentperioden på 5 år kalles: le ___', solution: 'quinquennat', answer: 'quinquennat' },
          { label: 'd', task: 'Et mistillitsforslag på fransk: une motion de ___', solution: 'censure', answer: 'censure' },
        ],
        solution: 'a) exécutif, b) législatif, c) quinquennat, d) censure',
        hints: ['exécutif kommer av executer (utføre)', 'quinquennat fra latin quinque (fem)'],
      },
    },
    {
      id: 'fransk-3-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Politisk debatt',
      problem: `Oversett følgende setninger om fransk politikk:

a) De politiske partiene forbereder seg til valget.
b) Statsministeren presenterte en ny lov for nasjonalforsamlingen.
c) Velgerne er uenige om regjeringens politikk.`,
      solution: `a) **Les partis politiques se préparent pour l'élection.**
b) **Le Premier ministre a présenté une nouvelle loi a l'Assemblée nationale.**
c) **Les électeurs ne sont pas d'accord sur la politique du gouvernement.**

**Nyttige uttrykk:**
- se preparer pour = forberede seg til
- presenter une loi = presentere en lov
- être d'accord sur = være enig om
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
          { label: 'a', task: 'Frankrike er en republikk.', solution: 'La France est une république.', answer: 'La France est une république' },
          { label: 'b', task: 'Presidenten utnevner statsministeren.', solution: 'Le Président nomme le Premier ministre.', answer: 'Le Président nomme le Premier ministre' },
          { label: 'c', task: 'Senatorene velges indirekte.', solution: 'Les sénateurs sont élus au suffrage indirect.', answer: 'Les sénateurs sont élus au suffrage indirect' },
        ],
        solution: 'a) La France est une république, b) Le Président nomme le Premier ministre, c) Les sénateurs sont élus au suffrage indirect',
        hints: ['nommer = utnevne', 'élu(s) = valgt(e)'],
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
        task: 'Skriveoppgave: Forklar det franske politiske systemet på fransk (5-6 setninger). Bruk ordene: république, président, Assemblée nationale, Sénat, Premier ministre, élu.',
        subTasks: [
          { label: 'a', task: 'Beskriv styreformen', solution: 'La France est une république démocratique.' },
          { label: 'b', task: 'Forklar presidentens rolle', solution: 'Le Président est élu au suffrage universel direct pour cinq ans. Il nomme le Premier ministre.' },
          { label: 'c', task: 'Beskriv parlamentet', solution: 'Le Parlement est compose de l\'Assemblée nationale et du Sénat. L\'Assemblée nationale vote les lois.' },
        ],
        solution: 'Eksempel: "La France est une république démocratique. Le Président de la République est élu au suffrage universel direct pour un mandat de cinq ans. Il nomme le Premier ministre qui dirige le gouvernement. Le Parlement est compose de deux chambres: l\'Assemblée nationale et le Sénat. L\'Assemblée nationale vote les lois et peut renverser le gouvernement."',
        hints: ['compose de = bestående av', 'diriger = lede'],
      },
    },
    {
      id: 'fransk-3-7-1-note-1',
      type: 'note',
      title: 'Kulturnotat: La Cinquième République',
      content: `Den femte republikken ble grunnlagt i 1958 av Charles de Gaulle under Algerie-krigen. Siden da har Frankrike hatt presidenter fra både høyresiden og venstresiden. En spesiell situasjon oppstår når presidenten og statsministeren er fra forskjellige politiske partier - dette kalles "la cohabitation". Det skjedde sist i 1997-2002 med président Chirac (høyre) og statsminister Jospin (venstre).`,
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
  description: 'Lær om sosiale utfordringer i Frankrike som immigrasjon, ulikhet og laïcité.',
  estimatedMinutes: 55,
  competenceGoals: [
    'diskutere sosiale utfordringer i Frankrike på fransk',
    'forstå begreper som laïcité, immigration og intégration',
  ],
  content: [
    {
      id: 'fransk-3-7-2-intro',
      type: 'text',
      content: `## Les enjeux sociaux en France

Frankrike står overfor mange sosiale utfordringer som preger den offentlige debatten. Temaer som immigrasjon, sosiale ulikheter, forstadsområdene (les banlieues) og det franske prinsippet om sekularisme (la laïcité) er stadig aktuelle. Å forstå disse temaene er viktig for å delta i samtaler om det franske samfunnet.`,
    },
    {
      id: 'fransk-3-7-2-def-1',
      type: 'definition',
      title: 'Vokabular: Immigrasjon og integrering',
      content: `**L'immigration et l'intégration:**

| Fransk | Norsk |
|--------|-------|
| l'immigration | innvandring |
| un immigré / une immigrée | en innvandrer |
| l'intégration | integrering |
| s'intégrer | å integrere seg |
| la diversité | mangfold |
| le multiculturalisme | multikulturalisme |
| l'identité nationale | nasjonal identitet |
| un réfugié / une réfugiée | en flyktning |`,
    },
    {
      id: 'fransk-3-7-2-def-2',
      type: 'definition',
      title: 'Vokabular: Sosiale utfordringer',
      content: `**Les défis sociaux:**

| Fransk | Norsk |
|--------|-------|
| les inégalités | ulikheter |
| la pauvreté | fattigdom |
| le chômage | arbeidsløshet |
| la banlieue | forstaden |
| la discrimination | diskriminering |
| l'exclusion sociale | sosialt utenforskap |
| la laïcité | sekularisme |
| l'égalité des chances | like muligheter |`,
    },
    {
      id: 'fransk-3-7-2-text-1',
      type: 'text',
      content: `## La laïcité - Sekularisme

La laïcité er et grunnleggende prinsipp i det franske samfunnet. Det innebærer et strengt skille mellom stat og religion:

- **Loi de 1905**: Loven om skillet mellom kirke og stat
- **Skolen**: Religion er ikke tillatt i offentlige skoler
- **Symboler**: Religiøse symboler er forbudt i offentlige institusjoner
- **Frihet**: Alle har rett til a utove sin religion privat

Uttrykk for å diskutere laïcité:
- *la liberté de conscience* = trosfrihet
- *la neutralité de l'État* = statens nøytralitet
- *le vivre-ensemble* = å leve sammen i harmoni`,
    },
    {
      id: 'fransk-3-7-2-tip-1',
      type: 'tip',
      content: `La laïcité er et unikt fransk begrep som ikke har noen direkte oversettelse. Det handler ikke om å være "mot religion", men om at staten er nøytral overfor alle religioner. Dette skiller seg fra mange andre land der stat og kirke har nærmere bånd.`,
    },
    {
      id: 'fransk-3-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå en sosial debatt',
      problem: `Les teksten og svar på spørsmålene:

"Les banlieues françaises sont souvent associées a des problèmes sociaux: chômage élève, manque de transports, et discrimination. Pourtant, ces quartiers sont aussi des lieux de créativité et de solidarité. Beaucoup de jeunes des banlieues réussissent dans les domaines de l'art, du sport et des affaires."

a) Hvilke problemer nevnes i teksten?
b) Hva er positivt med forstadene ifølge teksten?
c) Forklar ordet "pourtant" ut fra konteksten.`,
      solution: `a) Problemene som nevnes er **høy arbeidsløshet** (chômage élève), **manglende transport** (manque de transports) og **diskriminering** (discrimination).

b) Forstadene er også steder med **kreativitet** (créativité) og **solidaritet** (solidarité). Mange unge **lykkes** (réussissent) innen kunst, sport og næringslivet.

c) "Pourtant" betyr **likevel/til tross for**. Det innleder et motargument.

**Nøkkelvokabular:**
- le chômage = arbeidsløshet
- un quartier = en bydel/et nabolag
- réussir = å lykkes
- les affaires = næringslivet/forretningslivet`,
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
          { label: 'b', task: 'Sosiale ulikheter er en stor utfordring.', solution: 'Les inégalités sociales sont un grand défi.', answer: 'Les inégalités sociales sont un grand défi' },
          { label: 'c', task: 'Integrering krever innsats fra alle.', solution: 'L\'intégration demande des efforts de tous.', answer: 'L\'intégration demande des efforts de tous' },
          { label: 'd', task: 'Alle har rett til like muligheter.', solution: 'Tout le monde a droit a l\'égalité des chances.', answer: 'Tout le monde a droit a l\'égalité des chances' },
        ],
        solution: 'a) L\'immigration est un sujet important en France, b) Les inégalités sociales sont un grand défi, c) L\'intégration demande des efforts de tous, d) Tout le monde a droit a l\'égalité des chances',
        hints: ['un sujet = et tema', 'un défi = en utfordring', 'demander = kreve/be om'],
      },
    },
    {
      id: 'fransk-3-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Argumentere om sosiale temaer',
      problem: `Skriv argumenter for og mot følgende pastand på fransk:
"La laïcité est essentielle pour le vivre-ensemble."

a) Et argument for (pour)
b) Et argument mot (contre)`,
      solution: `a) **Pour:** La laïcité garantit la liberté de conscience de tous les citoyens et assuré l'égalité devant la loi, quelle que soit la religion.
*(Sekularismen garanterer trosfrihet for alle borgere og sikrer likhet for loven, uansett religion.)*

b) **Contre:** Une application trop stricte de la laïcité peut être perçue comme une limitation de la liberté religieuse et peut exclure certaines personnes.
*(En for streng anvendelse av sekularismen kan oppfattes som en begrensning av religionsfrihet og kan ekskludere visse personer.)*

**Nyttige uttrykk for argumentasjon:**
- d'une part... d'autre part = på den ene side... på den andre side
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
          { label: 'a', task: 'Le taux de ___ est élève dans les banlieues. (arbeidsløshet)', solution: 'chômage', answer: 'chômage' },
          { label: 'b', task: 'La ___ est un principe fondamental de la République française. (sekularisme)', solution: 'laïcité', answer: 'laïcité' },
          { label: 'c', task: 'L\'___ sociale touche de nombreuses personnes. (utenforskap)', solution: 'exclusion', answer: 'exclusion' },
          { label: 'd', task: 'La ___ culturelle est une richesse pour la société. (mangfold)', solution: 'diversité', answer: 'diversité' },
        ],
        solution: 'a) chômage, b) laïcité, c) exclusion, d) diversité',
        hints: ['taux = rate/andel', 'un principe fondamental = et grunnleggende prinsipp'],
      },
    },
    {
      id: 'fransk-3-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Diskutere integrering',
      problem: `Oversett til fransk:

a) Mangfold beriker samfunnet.
b) Vi må bekjempe diskriminering.
c) Like muligheter er viktig for demokratiet.`,
      solution: `a) **La diversité enrichit la société.**
b) **Nous devons combattre la discrimination.**
c) **L'égalité des chances est importante pour la démocratie.**

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
          { label: 'b', task: 'Flyktningene ønsker å integrere seg.', solution: 'Les réfugiés souhaitent s\'intégrer.', answer: 'Les réfugiés souhaitent s\'intégrer' },
          { label: 'c', task: 'Staten må sikre likhet for alle.', solution: 'L\'État doit assurer l\'égalité pour tous.', answer: 'L\'État doit assurer l\'égalité pour tous' },
        ],
        solution: 'a) La France est un pays divers, b) Les réfugiés souhaitent s\'intégrer, c) L\'État doit assurer l\'égalité pour tous',
        hints: ['souhaiter = ønske', 'assurer = sikre'],
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
        task: 'Skriveoppgave: Skriv en kort tekst (5-6 setninger) på fransk om en sosial utfordring i Frankrike. Velg ett tema: immigration, inégalités, eller laïcité.',
        subTasks: [
          { label: 'a', task: 'Presenter temaet', solution: 'Bruk: un enjeu important / un défi majeur' },
          { label: 'b', task: 'Forklar problemet', solution: 'Bruk: les causes sont... / cela entraine...' },
          { label: 'c', task: 'Foresla en løsning', solution: 'Bruk: il faut... / on devrait... / la solution serait de...' },
        ],
        solution: 'Eksempel: "L\'immigration est un sujet tres débattu en France. Beaucoup d\'immigres viennent en France pour trouver une vie meilleure. Cependant, l\'intégration peut être difficile a cause du chômage et de la discrimination. Il faut promouvoir l\'égalité des chances et lutter contre les préjugés. La diversité culturelle enrichit la société française."',
        hints: ['débattu = debattert', 'les préjugés = fordommer'],
      },
    },
    {
      id: 'fransk-3-7-2-note-1',
      type: 'note',
      title: 'Kulturnotat: Les banlieues',
      content: `De franske "banlieues" (forsteder) ble ofte bygget på 1960- og 70-tallet for å huse arbeidere og innvandrere. Mange av disse områdene har i dag utfordringer med arbeidsløshet og fattigdom. Samtidig er de også kulturelle smeltedigler som har fostret store kunstnere, musikere og idrettsutøvere. Filmer som "La Haine" (1995) og "Les Miserables" (2019) gir innblikk i livet i forstadene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: L'actualité et les médias - Aktualitet og media
// ============================================================================

export const CHAPTER_FRANSK_3_7_3: TextbookChapter = {
  id: 'fransk-3-7-3',
  courseId: 'fransk-3',
  chapterNumber: '7.3',
  title: 'L\'actualite et les médias - Aktualitet og media',
  description: 'Lær vokabular om nyheter, media og kildekritikk på fransk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå og diskutere nyhetsstoff på fransk',
    'bruke vokabular knyttet til media og kildekritikk',
  ],
  content: [
    {
      id: 'fransk-3-7-3-intro',
      type: 'text',
      content: `## L'actualité et les médias

I en globalisert verden er det viktig å kunne forstå og diskutere nyheter på fransk. Det franske medielandskapet er rikt og variert, med tradisjonelle aviser, TV-kanaler, radiostasjoner og digitale plattformer. Å være kritisk til informasjonskilder er en viktig kompetanse.`,
    },
    {
      id: 'fransk-3-7-3-def-1',
      type: 'definition',
      title: 'Vokabular: Media og nyheter',
      content: `**Les médias et l'information:**

| Fransk | Norsk |
|--------|-------|
| les médias | mediene |
| un journal / un quotidien | en avis / en dagsavis |
| un magazine / une revue | et magasin / et tidsskrift |
| le journal télévisé (JT) | TV-nyhetene |
| la presse écrite | den trykte pressen |
| un site d'information | et nyhetsnettsted |
| les réseaux sociaux | sosiale medier |
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
| un rédacteur en chef | en sjefredaktør |
| une enquête | en undersøkelse/reportasje |
| un reportage | en reportasje |
| une source | en kilde |
| une interview | et intervju |
| la liberté de la presse | pressefrihet |`,
    },
    {
      id: 'fransk-3-7-3-text-1',
      type: 'text',
      content: `## Les grands médias français - Store franske medier

**Aviser:**
- *Le Monde* - den mest anerkjente franske avisen
- *Le Figaro* - konservativ dagsavis
- *Libération* - venstreorientert dagsavis
- *Le Canard enchaîné* - satirisk ukeavis

**TV og radio:**
- France Télévisions (France 2, France 3) - offentlig TV
- TF1 - største private TV-kanal
- France Inter - offentlig radio
- RFI (Radio France Internationale) - internasjonal radio

**Nyhetsbyraer:**
- AFP (Agence France-Presse) - et av verdens største nyhetsbyraer`,
    },
    {
      id: 'fransk-3-7-3-tip-1',
      type: 'tip',
      content: `For å øve på fransk, prøv å lese nyhetsartikler på nettsidene til Le Monde (lemonde.fr) eller France Info (franceinfo.fr). Start med korte artikler og fokuser på å forstå hovedbudskapet før du ser på detaljene.`,
    },
    {
      id: 'fransk-3-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå en nyhetsartikkel',
      problem: `Les overskriften og ingressen, og svar på spørsmålene:

"Les fausses informations sur les réseaux sociaux: un défi majeur pour la démocratie. Selon une étude récente, 60% des Français ont deja été confrontes a des fake news. Le gouvernement propose de nouvelles lois pour lutter contre la désinformation."

a) Hva er temaet?
b) Hvilken statistikk oppgis?
c) Hva foreslar regjeringen?`,
      solution: `a) Temaet er **falske nyheter på sosiale medier** (fausses informations sur les réseaux sociaux) og trusselen mot demokratiet.

b) **60% av franskmennene** har allerede blitt konfrontert med falske nyheter (fake news).

c) Regjeringen foreslar **nye lover for å bekjempe desinformasjon** (nouvelles lois pour lutter contre la désinformation).

**Nøkkelvokabular:**
- les fausses informations = falske nyheter
- selon = ifølge
- une étude = en studie/undersøkelse
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
          { label: 'a', task: 'Journalisten skrev en artikkel om presidenten.', solution: 'Le/La journaliste a écrit un article sur le président.', answer: 'Le journaliste a écrit un article sur le président' },
          { label: 'b', task: 'Pressefrihet er viktig for demokratiet.', solution: 'La liberté de la presse est importante pour la démocratie.', answer: 'La liberté de la presse est importante pour la démocratie' },
          { label: 'c', task: 'Sosiale medier sprer falske nyheter.', solution: 'Les réseaux sociaux diffusent des fausses informations.', answer: 'Les réseaux sociaux diffusent des fausses informations' },
          { label: 'd', task: 'Vi må være kritiske til kildene våre.', solution: 'Nous devons être critiques envers nos sources.', answer: 'Nous devons être critiques envers nos sources' },
        ],
        solution: 'a) Le journaliste a écrit un article sur le président, b) La liberté de la presse est importante pour la démocratie, c) Les réseaux sociaux diffusent des fausses informations, d) Nous devons être critiques envers nos sources',
        hints: ['écrire (a skrive) -> passé composé: a écrit', 'diffuser = spre/kringkaste'],
      },
    },
    {
      id: 'fransk-3-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Kildekritikk',
      problem: `Oversett uttrykkene for kildekritikk:

a) Er kilden pålitelig?
b) Vi må sjekke informasjonen.
c) Denne artikkelen er partisk.`,
      solution: `a) **La source est-elle fiable?**
b) **Nous devons vérifier l'information.**
c) **Cet article est partisan / biaisé.**

**Uttrykk for kildekritikk:**
- vérifier l'information = verifisere/sjekke informasjonen
- une source fiable = en pålitelig kilde
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
          { label: 'a', task: 'Le Monde est un ___ français tres respecte. (dagsavis)', solution: 'quotidien', answer: 'quotidien' },
          { label: 'b', task: 'Il faut ___ les sources avant de partager une information. (sjekke)', solution: 'vérifier', answer: 'vérifier' },
          { label: 'c', task: 'Les ___ sociaux sont devenus une source d\'information importante. (nettverk)', solution: 'réseaux', answer: 'réseaux' },
          { label: 'd', task: 'Le ___ en chef dirige la redaction du journal. (redaktør)', solution: 'rédacteur', answer: 'rédacteur' },
        ],
        solution: 'a) quotidien, b) vérifier, c) réseaux, d) rédacteur',
        hints: ['quotidien = daglig/dagsavis', 'vérifier = bekrefte/sjekke'],
      },
    },
    {
      id: 'fransk-3-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Diskutere médias rolle',
      problem: `Skriv setninger om médias rolle i samfunnet. Oversett til fransk:

a) Mediene informerer befolkningen.
b) Journalister må være uavhengige.
c) Falske nyheter truer demokratiet.`,
      solution: `a) **Les médias informent la population.**
b) **Les journalistes doivent être indépendants.**
c) **Les fausses informations menacent la démocratie.**

**Viktige verb:**
- informer = informere
- devoir (doivent) = må/bor
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
          { label: 'a', task: 'Ifølge denne artikkelen øker bruken av sosiale medier.', solution: 'Selon cet article, l\'utilisation des réseaux sociaux augmenté.', answer: 'Selon cet article l\'utilisation des réseaux sociaux augmenté' },
          { label: 'b', task: 'Vi må kryss-sjekke kildene våre.', solution: 'Nous devons croiser nos sources.', answer: 'Nous devons croiser nos sources' },
          { label: 'c', task: 'Pressen spiller en viktig rolle i demokratiet.', solution: 'La presse joue un rôle important dans la démocratie.', answer: 'La presse joue un rôle important dans la démocratie' },
        ],
        solution: 'a) Selon cet article, l\'utilisation des réseaux sociaux augmenté, b) Nous devons croiser nos sources, c) La presse joue un rôle important dans la démocratie',
        hints: ['selon = ifølge', 'jouer un rôle = spille en rolle'],
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
        task: 'Skriveoppgave: Skriv en kort tekst (5-6 setninger) på fransk om médias rolle i samfunnet. Diskuter både positive og negative sider.',
        subTasks: [
          { label: 'a', task: 'Beskriv médias positive rolle', solution: 'Les médias informent les citoyens et contribuent a la démocratie.' },
          { label: 'b', task: 'Nevn en negativ side', solution: 'Cependant, les fausses informations et la désinformation sont des problèmes sérieux.' },
          { label: 'c', task: 'Foresla en løsning', solution: 'Il est important de développer l\'esprit critique et de vérifier les sources.' },
        ],
        solution: 'Eksempel: "Les médias jouent un rôle essentiel dans notre société. Ils informent les citoyens et contribuent au bon fonctionnement de la démocratie. Cependant, avec les réseaux sociaux, les fausses informations se propagent rapidement. La désinformation peut manipuler l\'opinion publique. Il est donc important de développer son esprit critique et de toujours vérifier les sources d\'information."',
        hints: ['se propager = å spre seg', 'l\'opinion publique = den offentlige mening'],
      },
    },
    {
      id: 'fransk-3-7-3-note-1',
      type: 'note',
      title: 'Kulturnotat: Pressefrihet i Frankrike',
      content: `Frankrike har en lang tradisjon for pressefrihet, som er forankret i "la Déclaration des droits de l'homme et du citoyen" fra 1789. Likevel har forholdet mellom medier og politikk vært utfordrende. Organisasjonen Reportere uten grenser (Reporters sans frontières, RSF), som har hovedkontor i Paris, rangerer pressefrihet i verden hvert år. Satireavisen Charlie Hebdo ble et symbol på pressefrihet etter terrorangrepet i 2015.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: L'Union européenne - EU
// ============================================================================

export const CHAPTER_FRANSK_3_7_4: TextbookChapter = {
  id: 'fransk-3-7-4',
  courseId: 'fransk-3',
  chapterNumber: '7.4',
  title: 'L\'Union européenne - EU',
  description: 'Lær om Frankrikes rolle i EU, EUs institusjoner og europeisk samarbeid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare Frankrikes rolle i EU på fransk',
    'bruke vokabular om europeisk politikk og samarbeid',
  ],
  content: [
    {
      id: 'fransk-3-7-4-intro',
      type: 'text',
      content: `## L'Union européenne et la France

Frankrike er et av grunnleggerlandene til det europeiske samarbeidet. Sammen med Tyskland regnes Frankrike som en av de viktigste drivkreftene i EU. Fra Kull- og stålunionen i 1951 til dagens EU har Frankrike spilt en sentral rolle i utviklingen av det europeiske prosjektet.`,
    },
    {
      id: 'fransk-3-7-4-def-1',
      type: 'definition',
      title: 'Vokabular: EU-institusjoner',
      content: `**Les institutions européennes:**

| Fransk | Norsk |
|--------|-------|
| l'Union européenne (UE) | EU |
| la Commission européenne | Europakommisjonen |
| le Parlement européen | Europaparlamentet |
| le Conseil européen | Det europeiske råd |
| la Banque centrale européenne (BCE) | Den europeiske sentralbanken |
| la Cour de justice | EU-domstolen |
| un État membre | et medlemsland |
| le traité | traktaten/avtalen |`,
    },
    {
      id: 'fransk-3-7-4-def-2',
      type: 'definition',
      title: 'Vokabular: Europeisk samarbeid',
      content: `**La coopération européenne:**

| Fransk | Norsk |
|--------|-------|
| l'intégration européenne | europeisk integrasjon |
| le marché unique | det indre markedet |
| la libre circulation | fri bevegelse |
| l'euro | euroen |
| la zone euro | eurosonen |
| la politique étrangère | utenrikspolitikken |
| les droits de l'homme | menneskerettighetene |
| la solidarité européenne | europeisk solidaritet |`,
    },
    {
      id: 'fransk-3-7-4-text-1',
      type: 'text',
      content: `## La France et la construction européenne

**Viktige milepaler:**

- **1951**: Frankrike grunnlegger Kull- og stålunionen (CECA) med 5 andre land
- **1957**: Romatraktaten - opprettelsen av EEC (Det europeiske økonomiske fellesskap)
- **1992**: Maastricht-traktaten - opprettelsen av EU
- **2002**: Euroen innføres i Frankrike
- **2005**: Frankrike stemmer nei til EU-grunnloven i folkeavstemning
- **2007**: Lisboa-traktaten erstatter grunnlovsforslaget

**Le couple franco-allemand:**
Det fransk-tyske samarbeidet ("le moteur franco-allemand") har vært selve drivkraften i europeisk integrasjon, fra Schuman-planen i 1950 til i dag.`,
    },
    {
      id: 'fransk-3-7-4-tip-1',
      type: 'tip',
      content: `Det franske begrepet "la construction européenne" (den europeiske konstruksjonen/oppbyggingen) brukes ofte for å beskrive den gradvise prosessen med europeisk integrasjon. Det understreker at EU ikke ble skapt over natten, men er resultatet av aartiers arbeid og forhåndlinger.`,
    },
    {
      id: 'fransk-3-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå EU-tekst',
      problem: `Les teksten og svar på spørsmålene:

"L'Union européenne compte 27 États membres depuis le Brexit en 2020. La France est l'un des six pays fondateurs. Le Parlement européen, qui siege a Strasbourg, représente les citoyens européens et vote les lois européennes avec le Conseil."

a) Hvor mange medlemsland har EU?
b) Hvor ligger Europaparlamentet?
c) Hva var spesielt med Frankrike?`,
      solution: `a) EU har **27 medlemsland** (27 États membres) siden Brexit i 2020.

b) Europaparlamentet holder til i **Strasbourg** (siege a Strasbourg).

c) Frankrike er **ett av de seks grunnleggerlandene** (l'un des six pays fondateurs).

**Nøkkelvokabular:**
- compter = telle / ha (antall)
- un pays fondateur = et grunnleggerland
- sieger = ha hovedsete/holde til
- représenter = representere`,
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
          { label: 'b', task: 'Europaparlamentet holder til i Strasbourg.', solution: 'Le Parlement européen siege a Strasbourg.', answer: 'Le Parlement européen siege a Strasbourg' },
          { label: 'c', task: 'EU har 27 medlemsland.', solution: 'L\'UE compte 27 États membres.', answer: 'L\'UE compte 27 États membres' },
          { label: 'd', task: 'Euroen er den felles valutaen.', solution: 'L\'euro est la monnaie commune.', answer: 'L\'euro est la monnaie commune' },
        ],
        solution: 'a) La France est un pays fondateur de l\'UE, b) Le Parlement européen siege a Strasbourg, c) L\'UE compte 27 États membres, d) L\'euro est la monnaie commune',
        hints: ['fondateur = grunnlegger', 'la monnaie = valuta'],
      },
    },
    {
      id: 'fransk-3-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Fordeler og utfordringer med EU',
      problem: `Oversett til fransk:

a) Fri bevegelse gjør det mulig å reise uten pass.
b) Det indre markedet fremmer økonomisk vekst.
c) Noen mener at EU har for mye makt.`,
      solution: `a) **La libre circulation permet de voyager sans passeport.**
b) **Le marché unique favorise la croissance économique.**
c) **Certains pensent que l'UE a trop de pouvoir.**

**Nyttige uttrykk:**
- permettre de = gjøre det mulig å
- favoriser = fremme
- la croissance économique = økonomisk vekst
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
          { label: 'b', task: 'La ___ européenne propose de nouvelles lois. (kommisjon)', solution: 'Commission', answer: 'Commission' },
          { label: 'c', task: 'Le ___ est la sortie du Royaume-Uni de l\'UE. (Brexit)', solution: 'Brexit', answer: 'Brexit' },
          { label: 'd', task: 'La ___ franco-allemande est le moteur de l\'UE. (samarbeid)', solution: 'coopération', answer: 'coopération' },
        ],
        solution: 'a) marche, b) Commission, c) Brexit, d) coopération',
        hints: ['les marchandises = varer', 'le Royaume-Uni = Storbritannia'],
      },
    },
    {
      id: 'fransk-3-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Argumentere om EU',
      problem: `Skriv argumenter på fransk:

a) Et argument FOR europeisk samarbeid
b) Et argument MOT for mye sentralisering i EU`,
      solution: `a) **Pour:** L'Union européenne garantit la paix et la stabilite en Europe depuis plus de 70 ans. La coopération entre les États membres favorise la prospérité économique.
*(EU garanterer fred og stabilitet i Europa i over 70 år. Samarbeid mellom medlemslandene fremmer økonomisk velstand.)*

b) **Contre:** Certains citoyens estiment que les décisions prises a Bruxelles ne tiennent pas assez compte des réalités locales et nationales.
*(Noen borgere mener at beslutningene som tas i Brussel ikke tar tilstrekkelig hensyn til lokale og nasjonale realiteter.)*

**Nyttige uttrykk:**
- garantir = garantere
- la prospérité = velstand
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
          { label: 'a', task: 'Det europeiske samarbeidet har sikret fred.', solution: 'La coopération européenne a assuré la paix.', answer: 'La coopération européenne a assuré la paix' },
          { label: 'b', task: 'Brexit var en stor utfordring for EU.', solution: 'Le Brexit a été un grand défi pour l\'UE.', answer: 'Le Brexit a été un grand défi pour l\'UE' },
          { label: 'c', task: 'Medlemslandene må samarbeide.', solution: 'Les États membres doivent coopérer.', answer: 'Les États membres doivent coopérer' },
        ],
        solution: 'a) La coopération européenne a assuré la paix, b) Le Brexit a été un grand défi pour l\'UE, c) Les États membres doivent coopérer',
        hints: ['assurer = sikre', 'coopérer = samarbeide'],
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
        task: 'Skriveoppgave: Skriv 5-6 setninger på fransk om Frankrikes rolle i EU. Bruk ordene: pays fondateur, coopération, Parlement européen, marche unique.',
        subTasks: [
          { label: 'a', task: 'Beskriv Frankrikes historiske rolle i EU', solution: 'La France est l\'un des pays fondateurs de l\'Union européenne.' },
          { label: 'b', task: 'Forklar det fransk-tyske samarbeidet', solution: 'La coopération franco-allemande est considérée comme le moteur de l\'intégration européenne.' },
          { label: 'c', task: 'Nevn en fordel og en utfordring', solution: 'Le marché unique favorise l\'économie, mais certains critiquent le manque de démocratie.' },
        ],
        solution: 'Eksempel: "La France est l\'un des six pays fondateurs de l\'Union européenne. Depuis 1951, elle a joue un rôle central dans la construction européenne. La coopération franco-allemande est considérée comme le moteur de l\'intégration. Le marché unique a favorise la croissance économique. Cependant, certains Français sont critiques envers l\'UE, comme l\'a montre le référendum de 2005. Malgre ces défis, la France reste engagée dans le projet européen."',
        hints: ['malgre = til tross for', 'engagé = engasjert'],
      },
    },
    {
      id: 'fransk-3-7-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Strasbourg - Europas hovedstad',
      content: `Strasbourg, som ligger i Alsace ved grensen mot Tyskland, huser Europaparlamentet og Europarådet. Byen er et symbol på forsoning mellom Frankrike og Tyskland etter århundrer med konflikter. At Europaparlamentet holder til i en fransk by understreker Frankrikes sentrale rolle i det europeiske prosjektet. Strasbourg kalles ofte "la capitale européenne" (Europas hovedstad).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.1: L'économie française - Fransk økonomi
// ============================================================================

export const CHAPTER_FRANSK_3_8_1: TextbookChapter = {
  id: 'fransk-3-8-1',
  courseId: 'fransk-3',
  chapterNumber: '8.1',
  title: 'L\'économie française - Fransk økonomi',
  description: 'Lær om de viktigste sektorene i fransk økonomi, fra jordbruk til teknologi.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive hovedelementene i fransk økonomi på fransk',
    'bruke økonomisk vokabular på fransk',
  ],
  content: [
    {
      id: 'fransk-3-8-1-intro',
      type: 'text',
      content: `## L'économie française

Frankrike er verdens syvende største økonomi og den tredje største i Europa. Landets økonomi er diversifisert og inkluderer alt fra tradisjonelt jordbruk til høyteknologiske startups. Frankrike er særlig kjent for luksusvarer, matkultur, turisme og et sterkt offentlig sektor.`,
    },
    {
      id: 'fransk-3-8-1-def-1',
      type: 'definition',
      title: 'Vokabular: Økonomiske sektorer',
      content: `**Les secteurs économiques:**

| Fransk | Norsk |
|--------|-------|
| l'agriculture | jordbruk |
| l'industrie | industri |
| les services | tjenestesektoren |
| le tourisme | turisme |
| le luxe | luksus |
| la technologie | teknologi |
| l'agroalimentaire | næringsmiddelindustri |
| l'aéronautique | luftfartsindustri |`,
    },
    {
      id: 'fransk-3-8-1-def-2',
      type: 'definition',
      title: 'Vokabular: Økonomiske begreper',
      content: `**Les termes économiques:**

| Fransk | Norsk |
|--------|-------|
| le PIB (produit intérieur brut) | BNP (bruttonasjonalprodukt) |
| la croissance économique | økonomisk vekst |
| le chômage | arbeidsløshet |
| l'inflation | inflasjon |
| les exportations | eksport |
| les importations | import |
| le commerce | handel |
| une entreprise | en bedrift |`,
    },
    {
      id: 'fransk-3-8-1-text-1',
      type: 'text',
      content: `## Les secteurs clés de l'économie française

**L'agriculture:**
Frankrike er EUs største jordbruksprodusent. Kjent for vin, ost, korn og husdyrhold. "La PAC" (la Politique agricole commune) er EUs felles landbrukspolitikk som støtter franske bønder.

**L'industrie du luxe:**
Franske luksusmerker er verdenskjente: LVMH (Louis Vuitton, Dior, Hennessy), Chanel, Hermès. Frankrike dominerer verdensmarkedet for luksusvarer.

**Le tourisme:**
Frankrike er verdens mest besøkte land med over 90 millioner turister årlig. Paris, Côte d'Azur, slottene i Loire-dalen og de franske alpene tiltrekker turister fra hele verden.

**La technologie:**
Frankrike har et voksende teknologimiljø med hubs som Station F i Paris. Selskaper som Dassault, Airbus og BlaBlaCar viser bredden i fransk teknologi.`,
    },
    {
      id: 'fransk-3-8-1-tip-1',
      type: 'tip',
      content: `Frankrike bruker uttrykket "Made in France" for å fremme franske produkter. Det finnes også konseptet "la French Tech" som er et økosystem for franske teknologioppstarter. Disse begrepene viser at Frankrike er stolt av sine produkter og innovasjoner.`,
    },
    {
      id: 'fransk-3-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå økonomisk tekst',
      problem: `Les teksten og svar på spørsmålene:

"La France est la deuxième puissance agricole en Europe. Le secteur du tourisme représente environ 8% du PIB français. Les industries du luxe et de l'aéronautique sont des fleurons de l'économie nationale."

a) Hvilken rang har Frankrike innen europeisk jordbruk?
b) Hvor stor del av BNP utgjør turisme?
c) Hva betyr "un fleuron"?`,
      solution: `a) Frankrike er den **nest største jordbruksmakten** i Europa (deuxième puissance agricole).

b) Turisme utgjør ca. **8% av BNP** (environ 8% du PIB).

c) "Un fleuron" betyr **en perle/et flaggskip** - det refererer til noe man er særlig stolt av.

**Nøkkelvokabular:**
- la puissance = makten/kraften
- représenter = utgjøre/representere
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
          { label: 'a', task: 'Frankrike er verdens syvende største økonomi.', solution: 'La France est la septième économie mondiale.', answer: 'La France est la septième économie mondiale' },
          { label: 'b', task: 'Turisme er en viktig sektor.', solution: 'Le tourisme est un secteur important.', answer: 'Le tourisme est un secteur important' },
          { label: 'c', task: 'Luksusvarer er en stor eksportartikkel.', solution: 'Les produits de luxe sont un grand produit d\'exportation.', answer: 'Les produits de luxe sont un grand produit d\'exportation' },
          { label: 'd', task: 'Den økonomiske veksten er positiv.', solution: 'La croissance économique est positive.', answer: 'La croissance économique est positive' },
        ],
        solution: 'a) La France est la septième économie mondiale, b) Le tourisme est un secteur important, c) Les produits de luxe sont un grand produit d\'exportation, d) La croissance économique est positive',
        hints: ['septième = syvende', 'mondial(e) = global/verdens-'],
      },
    },
    {
      id: 'fransk-3-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne økonomier',
      problem: `Fyll inn på fransk:

a) Frankrike eksporterer mye vin og ost. (exporter)
b) Jordbruket sysseletter mange mennesker. (employer)
c) Teknologisektoren vokser raskt. (croitre)`,
      solution: `a) **La France exporte beaucoup de vin et de fromage.**
b) **L'agriculture emploie beaucoup de personnes.**
c) **Le secteur technologique croit rapidement.**

**Nyttige verb for økonomi:**
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
        task: 'Fyll inn riktig økonomisk begrep:',
        subTasks: [
          { label: 'a', task: 'Le ___ intérieur brut mesure la richesse d\'un pays. (produkt)', solution: 'produit', answer: 'produit' },
          { label: 'b', task: 'Le taux de ___ est le pourcentage de personnes sans emploi. (arbeidsløshet)', solution: 'chômage', answer: 'chômage' },
          { label: 'c', task: 'La ___ économique mesure l\'augmentation de la production. (vekst)', solution: 'croissance', answer: 'croissance' },
          { label: 'd', task: 'Les ___ françaises incluent le vin et l\'aéronautique. (eksporter)', solution: 'exportations', answer: 'exportations' },
        ],
        solution: 'a) produit, b) chômage, c) croissance, d) exportations',
        hints: ['PIB = produit intérieur brut', 'le taux = rate/andel'],
      },
    },
    {
      id: 'fransk-3-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Presentere en sektor',
      problem: `Oversett til fransk:

a) Den franske luksusindustrien er verdensledende.
b) Paris tiltrekker millioner av turister hvert år.
c) Jordbruket er en viktig del av fransk identitet.`,
      solution: `a) **L'industrie française du luxe est leader mondial.**
b) **Paris attire des millions de touristes chaque année.**
c) **L'agriculture est une partie importante de l'identité française.**

**Nyttige uttrykk:**
- leader mondial = verdensledende
- attirer = tiltrekke
- chaque année = hvert år
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
          { label: 'b', task: 'Luftfartsindustrien sysseletter tusenvis av mennesker.', solution: 'L\'industrie aéronautique emploie des milliers de personnes.', answer: 'L\'industrie aéronautique emploie des milliers de personnes' },
          { label: 'c', task: 'Franske bedrifter investerer i teknologi.', solution: 'Les entreprises françaises investissent dans la technologie.', answer: 'Les entreprises françaises investissent dans la technologie' },
        ],
        solution: 'a) La France produit plus de 1000 types de fromage, b) L\'industrie aéronautique emploie des milliers de personnes, c) Les entreprises françaises investissent dans la technologie',
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
        task: 'Skriveoppgave: Presenter den franske økonomien på 5-6 setninger på fransk. Nevn minst 3 sektorer og bruk ordene: économie, secteur, exportation, croissance.',
        subTasks: [
          { label: 'a', task: 'Presenter økonomien generelt', solution: 'La France a une économie diversifiee et dynamique.' },
          { label: 'b', task: 'Beskriv to viktige sektorer', solution: 'Le tourisme et l\'industrie du luxe sont des secteurs clés.' },
          { label: 'c', task: 'Nevn styrker og utfordringer', solution: 'Les exportations sont fortes, mais le chômage reste un défi.' },
        ],
        solution: 'Eksempel: "La France est la septième économie mondiale avec un PIB parmi les plus élèves. L\'économie française est diversifiee et comprend des secteurs clés comme l\'agriculture, le tourisme et l\'industrie du luxe. Les exportations françaises incluent le vin, les produits de luxe et les avions Airbus. Le secteur technologique connait une forte croissance grace a des initiatives comme la French Tech. Cependant, le chômage reste un défi important pour l\'économie française."',
        hints: ['comprendre = inkludere/omfatte', 'grace a = takket være'],
      },
    },
    {
      id: 'fransk-3-8-1-note-1',
      type: 'note',
      title: 'Kulturnotat: Franske luksusmerker',
      content: `LVMH (Louis Vuitton Moet Hennessy) er verdens største luksuskonsern, grunnlagt av Bernard Arnault, som er en av verdens rikeste personer. Konsernet eier over 75 merker, inkludert Louis Vuitton, Dior, Givenchy, Bulgari og Hennessy. Den franske luksusindustrien representerer en unik kombinasjon av håndverkstradisjon ("le savoir-faire") og moderne markedsføring.`,
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
  description: 'Lær å skrive CV og søknadsbrev på fransk, og forstå fransk arbeidskultur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive CV og søknadsbrev på fransk',
    'forstå fransk arbeidskultur og yrkesliv',
  ],
  content: [
    {
      id: 'fransk-3-8-2-intro',
      type: 'text',
      content: `## Le monde professionnel en France

Det franske yrkeslivet har sine egne tradisjoner og forventninger. Å forstå hvordan man søker jobb, hvordan arbeidslivet er organisert, og hvilke kulturelle koder som gjelder, er viktig for alle som ønsker å jobbe i Frankrike eller med franske bedrifter.`,
    },
    {
      id: 'fransk-3-8-2-def-1',
      type: 'definition',
      title: 'Vokabular: Jobb og karriere',
      content: `**Le travail et la carrière:**

| Fransk | Norsk |
|--------|-------|
| un emploi / un travail | en jobb |
| un poste | en stilling |
| un CV (curriculum vitae) | en CV |
| une lettre de motivation | et søknadsbrev |
| un entretien d'embauche | et jobbintervju |
| un salaire | en lønn |
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
| un collègue | en kollega |
| le patron / la patronne | sjefen |
| les heures de travail | arbeidstid |
| les congés payés | betalt ferie |
| la pause déjeuner | lunsjpause |
| le télétravail | hjemmekontor |`,
    },
    {
      id: 'fransk-3-8-2-text-1',
      type: 'text',
      content: `## Le CV français - Den franske CVen

En fransk CV har en spesifikk struktur:

1. **État civil** - Personlige opplysninger (navn, adresse, telefon, e-post)
2. **Formation** - Utdanning (nyeste først)
3. **Expérience professionnelle** - Arbeidserfaring (nyeste først)
4. **Compétences** - Ferdigheter (språk, IT, osv.)
5. **Centres d'interet** - Interesser/hobbyer

**Forskjeller fra norsk CV:**
- Foto er vanlig på franske CVer
- Utdanning vektlegges sterkt
- Høflig og formelt språk brukes gjennomgående`,
    },
    {
      id: 'fransk-3-8-2-tip-1',
      type: 'tip',
      content: `I Frankrike er "les 35 heures" (35-timersuken) den lovfestede arbeidstiden, innført i 2000. Franskmenn har også rett til minimum 5 ukers betalt ferie (les congés payés). I tillegg har man lovfestet rett til å "koble av" etter arbeidstid (le droit a la deconnexion), innført i 2017.`,
    },
    {
      id: 'fransk-3-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Skrive søknadsbrev',
      problem: `Les utdrag fra et søknadsbrev og identifiser delene:

"Madame, Monsieur,
Je me permets de vous adresser ma candidature pour le poste de stagiaire en marketing, publié sur votre site internet.
Actuellement étudiant(e) en troisième annee de licence, je suis tres intéressé(e) par votre entreprise.
Je vous prie d'agreer, Madame, Monsieur, l'expression de mes salutations distinguées."

a) Hva er innledningsformelen?
b) Hvilken stilling søkes det på?
c) Hva er avslutningsformelen?`,
      solution: `a) Innledningsformelen er **"Madame, Monsieur"** (tilsvarer "Kjære ansvarlig" / "Til rette vedkommende").

b) Det søkes på en **praksisplass i markedsføring** (stagiaire en marketing).

c) Avslutningsformelen er **"Je vous prie d'agreer... l'expression de mes salutations distinguées"** (en svært formell avslutning tilsvarende "Med vennlig hilsen").

**Nøkkelvokabular:**
- je me permets de = jeg tillater meg å
- une candidature = en søknad
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
          { label: 'a', task: 'Jeg søker på stillingen som praktikant.', solution: 'Je postule pour le poste de stagiaire.', answer: 'Je postule pour le poste de stagiaire' },
          { label: 'b', task: 'Vedlagt finner du min CV.', solution: 'Vous trouverez ci-joint mon CV.', answer: 'Vous trouverez ci-joint mon CV' },
          { label: 'c', task: 'Jeg er veldig interessert i bedriften deres.', solution: 'Je suis tres intéressé(e) par votre entreprise.', answer: 'Je suis tres intéressé par votre entreprise' },
          { label: 'd', task: 'Jeg er tilgjengelig for et intervju.', solution: 'Je suis disponible pour un entretien.', answer: 'Je suis disponible pour un entretien' },
        ],
        solution: 'a) Je postule pour le poste de stagiaire, b) Vous trouverez ci-joint mon CV, c) Je suis tres intéressé(e) par votre entreprise, d) Je suis disponible pour un entretien',
        hints: ['postuler = søke (på jobb)', 'ci-joint = vedlagt'],
      },
    },
    {
      id: 'fransk-3-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: CV-oppføring',
      problem: `Oversett disse CV-punktene til fransk:

a) Utdanning: Videregående skole, studieforberedende
b) Erfaring: Sommerjobb i butikk (2024)
c) Ferdigheter: Flytende i norsk og engelsk, grunnleggende fransk`,
      solution: `a) **Formation: Lycee général, filiere générale** (2021-2024)
b) **Expérience professionnelle: Emploi saisonnier en magasin** (été 2024)
c) **Compétences linguistiques: Norvegien et anglais courants, français niveau intermédiaire**

**CV-vokabular:**
- la formation = utdanning
- un emploi saisonnier = sesongarbeid/sommerjobb
- un magasin = en butikk
- courant = flytende (om språk)
- intermédiaire = mellomnivå`,
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
          { label: 'd', task: 'Les ___ payés sont au minimum de 5 semaines. (ferie)', solution: 'congés', answer: 'congés' },
        ],
        solution: 'a) entretien, b) lettre, c) 35, d) congés',
        hints: ['embauche = ansettelse', 'accompagner = følge med/ledsage'],
      },
    },
    {
      id: 'fransk-3-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Jobbintervju',
      problem: `Oversett vanlige intervjuspørsmål til fransk:

a) Kan du presentere deg selv?
b) Hva er dine styrker?
c) Hvorfor ønsker du å jobbe hos oss?`,
      solution: `a) **Pouvez-vous vous presenter?**
b) **Quels sont vos points forts?**
c) **Pourquoi souhaitez-vous travailler chez nous?**

**Andre vanlige spørsmål:**
- Quels sont vos points faibles? = Hva er dine svakheter?
- Ou vous voyez-vous dans 5 ans? = Hvor ser du deg selv om 5 år?
- Avez-vous des questions? = Har du noen spørsmål?

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
          { label: 'a', task: 'Jeg har erfaring med kundeservice.', solution: 'J\'ai de l\'expérience en service client.', answer: 'J\'ai de l\'expérience en service client' },
          { label: 'b', task: 'Mine styrker er teamarbeid og kreativitet.', solution: 'Mes points forts sont le travail d\'équipe et la créativité.', answer: 'Mes points forts sont le travail d\'équipe et la créativité' },
          { label: 'c', task: 'Jeg er motivert og lærevillig.', solution: 'Je suis motivé(e) et désireux/désireuse d\'apprendre.', answer: 'Je suis motivé et désireux d\'apprendre' },
        ],
        solution: 'a) J\'ai de l\'expérience en service client, b) Mes points forts sont le travail d\'équipe et la créativité, c) Je suis motivé(e) et désireux/désireuse d\'apprendre',
        hints: ['le service client = kundeservice', 'désireux d\'apprendre = lærevillig'],
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
        task: 'Skriveoppgave: Skriv et kort søknadsbrev (6-8 setninger) på fransk for en sommerjobb. Bruk formell tone og inkluder: innledning, motivasjon, kompetanse og avslutning.',
        subTasks: [
          { label: 'a', task: 'Skriv innledningen', solution: 'Madame, Monsieur, je me permets de vous adresser ma candidature pour le poste de...' },
          { label: 'b', task: 'Presenter din motivasjon og kompetanse', solution: 'Je suis tres intéressé(e) par... J\'ai de l\'expérience en...' },
          { label: 'c', task: 'Avslutt formelt', solution: 'Je vous prie d\'agreer, Madame, Monsieur, l\'expression de mes salutations distinguées.' },
        ],
        solution: 'Eksempel: "Madame, Monsieur, Je me permets de vous adresser ma candidature pour le poste d\'emploi saisonnier dans votre restaurant. Actuellement élève en terminale, je suis tres intéressé(e) par ce poste. J\'ai deja une expérience en service client et je parle trois langues: le norvegien, l\'anglais et le français. Je suis motivé(e), ponctuel(le) et j\'aime travailler en équipe. Je suis disponible pour un entretien a votre convenance. Je vous prie d\'agreer, Madame, Monsieur, l\'expression de mes salutations distinguées."',
        hints: ['a votre convenance = når det passer deg/dere', 'ponctuel = punktlig'],
      },
    },
    {
      id: 'fransk-3-8-2-note-1',
      type: 'note',
      title: 'Kulturnotat: Fransk arbeidskultur',
      content: `Fransk arbeidskultur skiller seg fra norsk på flere måter. Hierarkiet er tydeligere, og man bruker ofte "vous" med overordnede. Lunsjpausen er hellig - mange tar en lang lunsj (1-2 timer), og det er vanlig å spise sammen med kollegaer. Etter arbeidstid er det vanlig med "l'aperitif" (en drink før middag) med kollegaer. I tillegg setter franskmenn stor pris på sin ferie: august er tradisjonelt ferimåneden, og mange bedrifter stenger helt.`,
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
  description: 'Lær om Frankrike i den globale økonomien, handel og kulturell globalisering.',
  estimatedMinutes: 50,
  competenceGoals: [
    'diskutere globalisering og dens konsekvenser på fransk',
    'bruke vokabular om internasjonal handel og frankofoni',
  ],
  content: [
    {
      id: 'fransk-3-8-3-intro',
      type: 'text',
      content: `## La mondialisation et la France

Globalisering påvirker alle land, og Frankrike er intet unntak. Som en av verdens største økonomier er Frankrike dypt integrert i den globale økonomien. Samtidig har Frankrike et særlig forhold til globalisering på grunn av sin frankofone arv og ønsket om å bevare fransk kultur og språk i en stadig mer engelsk-dominert verden.`,
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
| les échanges commerciaux | handelssamkvem |
| une multinationale | et multinasjonalt selskap |
| la concurrence | konkurranse |
| la délocalisation | utflagging (av bedrifter) |
| le libre-échange | frihandel |
| le protectionnisme | proteksjonisme |`,
    },
    {
      id: 'fransk-3-8-3-def-2',
      type: 'definition',
      title: 'Vokabular: Kulturell globalisering',
      content: `**La mondialisation culturelle:**

| Fransk | Norsk |
|--------|-------|
| la diversité culturelle | kulturelt mangfold |
| l'exception culturelle | det kulturelle unntaket |
| la francophonie | den frankofone verden |
| l'influence culturelle | kulturell innflytelse |
| le rayonnement culturel | kulturell utstråling |
| l'identité culturelle | kulturell identitet |
| l'uniformisation | ensretting |
| le patrimoine culturel | kulturarv |`,
    },
    {
      id: 'fransk-3-8-3-text-1',
      type: 'text',
      content: `## La France dans l'économie mondiale

**Frankrikes plass i verdensøkonomien:**
- 7. største økonomi i verden
- 3. største mottaker av utenlandske investeringer i Europa
- Medlem av G7, G20 og OECD
- Viktige handelspartnere: Tyskland, USA, Kina, Italia, Spania

**L'exception culturelle française:**
Frankrike forsvarer aktivt "l'exception culturelle" - ideen om at kultur ikke bare er en vare og må beskyttes mot markedskreftene. Dette betyr:
- Kvoter for fransk musikk på radio (minst 40%)
- Støtte til fransk film (CNC)
- Beskyttelse av det franske språket (Académie française)

**La Francophonie:**
Det frankofone samarbeidet (OIF) omfatter 88 stater og regjeringer der fransk er offisielt språk eller har en viktig rolle. Dette gir Frankrike en unik internasjonal plattform.`,
    },
    {
      id: 'fransk-3-8-3-tip-1',
      type: 'tip',
      content: `Begrepet "la Francophonie" (med stor F) refererer til den internasjonale organisasjonen for frankofone land (OIF), mens "la francophonie" (med liten f) refererer til alle mennesker som snakker fransk. Fransk er offisielt språk i 29 land og snakkes av over 300 millioner mennesker verden over.`,
    },
    {
      id: 'fransk-3-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå tekst om globalisering',
      problem: `Les teksten og svar på spørsmålene:

"La mondialisation a transformé l'économie française. D'un cote, elle a permis aux entreprises françaises de s'implanter a l'étranger. De l'autre, elle a entraine des délocalisations et une concurrence accrue. La France defend l'exception culturelle pour proteger sa diversité face a l'uniformisation mondiale."

a) Hva er positivt med globalisering ifølge teksten?
b) Hva er negativt?
c) Hva er "l'exception culturelle"?`,
      solution: `a) Positivt: Globalisering har gjort det mulig for franske bedrifter å **etablere seg i utlandet** (s'implanter a l'étranger).

b) Negativt: Det har ført til **utflagging** (délocalisations) og **økt konkurranse** (concurrence accrue).

c) "L'exception culturelle" er Frankrikes forsvar for kulturelt mangfold mot **global ensretting** (uniformisation mondiale).

**Nøkkelvokabular:**
- d'un cote... de l'autre = på den ene siden... på den andre
- s'implanter = etablere seg
- entrainer = medføre
- accru(e) = økt`,
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
          { label: 'a', task: 'Globalisering har forandret verden.', solution: 'La mondialisation a transformé le monde.', answer: 'La mondialisation a transformé le monde' },
          { label: 'b', task: 'Internasjonal handel øker.', solution: 'Le commerce international augmenté.', answer: 'Le commerce international augmenté' },
          { label: 'c', task: 'Frankrike forsvarer kulturelt mangfold.', solution: 'La France defend la diversité culturelle.', answer: 'La France defend la diversité culturelle' },
          { label: 'd', task: 'Konkurransen er blitt sterkere.', solution: 'La concurrence est devenue plus forte.', answer: 'La concurrence est devenue plus forte' },
        ],
        solution: 'a) La mondialisation a transformé le monde, b) Le commerce international augmenté, c) La France defend la diversité culturelle, d) La concurrence est devenue plus forte',
        hints: ['transformer = forandre', 'defendre = forsvare'],
      },
    },
    {
      id: 'fransk-3-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Argumentere om globalisering',
      problem: `Skriv argumenter på fransk:

a) Et argument for frihandel
b) Et argument for å beskytte lokal kultur`,
      solution: `a) **Le libre-échange favorise la croissance économique et permet aux consommateurs d'acceder a des produits moins chers et plus varies.**
*(Frihandel fremmer økonomisk vekst og gjør det mulig for forbrukere å få tilgang til billigere og mer varierte produkter.)*

b) **Il est essentiel de proteger les cultures locales face a l'uniformisation mondiale. Chaque culture a une valeur unique qu'il faut preserver.**
*(Det er vesentlig å beskytte lokale kulturer mot global ensretting. Hver kultur har en unik verdi som må bevares.)*

**Nyttige uttrykk:**
- favoriser = fremme
- acceder a = få tilgang til
- face a = overfor/i møte med
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
          { label: 'a', task: 'La ___ est le transfert d\'activites économiques a l\'étranger. (utflagging)', solution: 'délocalisation', answer: 'délocalisation' },
          { label: 'b', task: 'La ___ est l\'ensemble des pays ou l\'on parlé français. (frankofoni)', solution: 'francophonie', answer: 'francophonie' },
          { label: 'c', task: 'Le ___ culturel désigne l\'héritage culturel d\'un pays. (arv)', solution: 'patrimoine', answer: 'patrimoine' },
          { label: 'd', task: 'Une ___ est une entreprise présenté dans plusieurs pays. (multinasjonalt selskap)', solution: 'multinationale', answer: 'multinationale' },
        ],
        solution: 'a) délocalisation, b) francophonie, c) patrimoine, d) multinationale',
        hints: ['délocalisation = å flytte virksomhet ut av landet', 'le patrimoine = arven/kulturarven'],
      },
    },
    {
      id: 'fransk-3-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Frankofoni i økonomien',
      problem: `Oversett til fransk:

a) Det frankofone området utgjør et stort økonomisk marked.
b) Mange afrikanske land har fransk som offisielt språk.
c) Frankofoni skaper muligheter for handel.`,
      solution: `a) **L'espace francophone constitue un grand marche économique.**
b) **De nombreux pays africains ont le français comme langue officielle.**
c) **La francophonie cré des opportunites pour le commerce.**

**Fakta om frankofoni:**
- 300+ millioner fransktalende i verden
- 88 stater og regjeringer i OIF
- Fransk er 5. mest talte språk i verden
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
          { label: 'a', task: 'Globalisering har både fordeler og ulemper.', solution: 'La mondialisation a des avantages et des inconvenients.', answer: 'La mondialisation a des avantages et des inconvenients' },
          { label: 'b', task: 'Franske bedrifter er til stede i hele verden.', solution: 'Les entreprises françaises sont presentes dans le monde entier.', answer: 'Les entreprises françaises sont presentes dans le monde entier' },
          { label: 'c', task: 'Vi må bevare kulturelt mangfold.', solution: 'Nous devons preserver la diversité culturelle.', answer: 'Nous devons preserver la diversité culturelle' },
        ],
        solution: 'a) La mondialisation a des avantages et des inconvenients, b) Les entreprises françaises sont presentes dans le monde entier, c) Nous devons preserver la diversité culturelle',
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
        task: 'Skriveoppgave: Skriv 5-6 setninger på fransk om globalisering og Frankrike. Diskuter både økonomiske og kulturelle aspekter.',
        subTasks: [
          { label: 'a', task: 'Beskriv globaliseringens påvirkning på Frankrike', solution: 'La mondialisation a transformé l\'économie française en ouvrant de nouveaux marches.' },
          { label: 'b', task: 'Forklar "l\'exception culturelle"', solution: 'La France defend l\'exception culturelle pour proteger sa culture face a la mondialisation.' },
          { label: 'c', task: 'Nevn frankofoniens rolle', solution: 'La francophonie donne a la France un rayonnement culturel et économique mondial.' },
        ],
        solution: 'Eksempel: "La mondialisation a profondement transformé l\'économie française. Les entreprises françaises comme LVMH et Airbus sont devenues des leaders mondiaux. Cependant, la France est aussi preoccupee par la protection de sa culture. Elle defend l\'exception culturelle pour preserver la diversité face a l\'uniformisation. La francophonie joue un rôle important en donnant a la France un rayonnement mondial. Grace a ce reseau de pays francophones, la France maintient une influence culturelle et économique unique."',
        hints: ['profondement = dypt/grunnleggende', 'preoccupe par = opptatt av/bekymret for'],
      },
    },
    {
      id: 'fransk-3-8-3-note-1',
      type: 'note',
      title: 'Kulturnotat: L\'Académie française',
      content: `L'Académie française ble grunnlagt i 1635 av kardinal Richelieu og har som oppgave å bevare og regulere det franske språket. De 40 medlemmene kalles "les Immortels" (de udødelige). Akademiet utgir en offisiell ordbok og uttaler seg om nye ord og uttrykkk. I en tid med globalisering og engelske lånord spiller akademiet en viktig rolle i debatten om språkbevaring, selv om mange mener det er for konservativt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: L'entrepreneuriat - Entreprenørskap
// ============================================================================

export const CHAPTER_FRANSK_3_8_4: TextbookChapter = {
  id: 'fransk-3-8-4',
  courseId: 'fransk-3',
  chapterNumber: '8.4',
  title: 'L\'entrepreneuriat - Entreprenørskap',
  description: 'Lær om oppstartsmiljøet i Frankrike, innovasjon og vokabular for forretningsplaner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke vokabular knyttet til entreprenørskap og innovasjon på fransk',
    'presentere en forretningside på fransk',
  ],
  content: [
    {
      id: 'fransk-3-8-4-intro',
      type: 'text',
      content: `## L'entrepreneuriat en France

Frankrike har i de siste årene blitt et av Europas mest dynamiske land for oppstartsselskaper. Med initiativene "La French Tech" og verdens største inkubator Station F, har landet skapt et økosystem som tiltrekker gründere fra hele verden. Å forstå vokabular og konsepter knyttet til entreprenørskap er nyttig både for språklæring og for karriereplanlegging.`,
    },
    {
      id: 'fransk-3-8-4-def-1',
      type: 'definition',
      title: 'Vokabular: Entreprenørskap',
      content: `**L'entrepreneuriat:**

| Fransk | Norsk |
|--------|-------|
| un entrepreneur / une entrepreneuse | en grunder |
| une startup / une jeune pousse | en oppstartsbedrift |
| creer une entreprise | å starte en bedrift |
| un incubateur | en inkubator |
| un accelerateur | en akselerator |
| un investisseur | en investor |
| un business plan / un plan d'affaires | en forretningsplan |
| lever des fonds | å skaffe kapital |`,
    },
    {
      id: 'fransk-3-8-4-def-2',
      type: 'definition',
      title: 'Vokabular: Innovasjon og utvikling',
      content: `**L'innovation et le développement:**

| Fransk | Norsk |
|--------|-------|
| l'innovation | innovasjon |
| innover | å innovere |
| la recherche et développement (R&D) | forskning og utvikling (FoU) |
| un brevet | et patent |
| un prototype | en prototyp |
| le chiffre d'affaires | omsetning |
| la rentabilite | lønnsomhet |
| un marche de niche | et nisjemarked |`,
    },
    {
      id: 'fransk-3-8-4-text-1',
      type: 'text',
      content: `## L'ecosysteme entrepreneurial français

**Station F:**
- Verdens største oppstartsinkubator, åpnet i 2017 i Paris
- Grunnlagt av Xavier Niel (grunnlegger av Free)
- 34 000 m2 med plass til over 1000 oppstartsselskaper
- Tilbyr programmer, mentorer og nettverk

**La French Tech:**
- Statlig initiativ for å fremme franske teknologioppstarter
- Et nettverk av "hubs" i franske byer og i utlandet
- Kjent for sitt røde hanemerke (le coq rouge)
- Har bidratt til å skape "licornes" (enhjørninger) - oppstarter verdt over 1 milliard dollar

**Kjente franske oppstarter:**
- BlaBlaCar - samkjøringstjeneste
- Doctolib - legetimebestilling på nett
- Deezer - musikkstrømmetjeneste
- Back Market - brukt elektronikk
- ManoMano - netthandel for oppussing`,
    },
    {
      id: 'fransk-3-8-4-tip-1',
      type: 'tip',
      content: `På fransk bruker man ofte engelske lånord i oppstartsverdenen: "startup", "pitch", "business model", "fundraising". Men det finnes også franske alternativer: "jeune pousse" (ung plante = startup), "presentation eclair" (lynpresentasjon = pitch), "modele économique" (= business model). Académie française anbefaler de franske versjonene!`,
    },
    {
      id: 'fransk-3-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Forstå en bedriftspresentasjon',
      problem: `Les teksten og svar på spørsmålene:

"Notre startup, EcoVelo, propose un service de location de velos electriques dans les villes moyennes. Notre marche cible est les travailleurs urbains qui cherchent une alternative ecologique aux transports en commun. Nous avons deja leve 500 000 euros aupres d'investisseurs prives."

a) Hva er bedriftens produkt/tjeneste?
b) Hvem er målgruppen?
c) Hvor mye kapital har de hentet inn?`,
      solution: `a) Bedriften tilbyr **utleie av elektriske sykler i mellomstore byer** (location de velos electriques dans les villes moyennes).

b) Maalgruppen er **urbane arbeidstakere som søker et økologisk alternativ til offentlig transport** (travailleurs urbains qui cherchent une alternative ecologique).

c) De har hentet inn **500 000 euro fra private investorer** (leve 500 000 euros aupres d'investisseurs prives).

**Nøkkelvokabular:**
- proposer = tilby
- la location = utleie
- le marche cible = målgruppen/målmarkedet
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
          { label: 'a', task: 'Hun har startet sin egen bedrift.', solution: 'Elle a cré sa propre entreprise.', answer: 'Elle a cré sa propre entreprise' },
          { label: 'b', task: 'Investoren finansierer oppstarten.', solution: 'L\'investisseur finance la startup.', answer: 'L\'investisseur finance la startup' },
          { label: 'c', task: 'Vi trenger en god forretningsplan.', solution: 'Nous avons besoin d\'un bon plan d\'affaires.', answer: 'Nous avons besoin d\'un bon plan d\'affaires' },
          { label: 'd', task: 'Innovasjon er nokkelen til suksess.', solution: 'L\'innovation est la clé du succes.', answer: 'L\'innovation est la clé du succes' },
        ],
        solution: 'a) Elle a cré sa propre entreprise, b) L\'investisseur finance la startup, c) Nous avons besoin d\'un bon plan d\'affaires, d) L\'innovation est la clé du succes',
        hints: ['creer = skape/starte', 'la clé = nokkelen'],
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
      solution: `a) **Notre entreprise resout un problème reel.**
b) **Nous avons un produit innovant.**
c) **Le marche est vaste et en croissance.**

**Struktur for en pitch på fransk:**
1. Le problème - Problemet dere løser
2. La solution - Løsningen dere tilbyr
3. Le marche - Markedet og målgruppen
4. Le modele économique - Hvordan dere tjener penger
5. L'équipe - Teamet bak bedriften
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
      title: 'Eksempel 3: Diskutere entreprenørskap',
      problem: `Oversett til fransk:

a) Entreprenørskap skaper arbeidsplasser.
b) Å starte en bedrift krever mot og utholdenhet.
c) Frankrike støtter innovasjon gjennom ulike programmer.`,
      solution: `a) **L'entrepreneuriat cré des emplois.**
b) **Creer une entreprise demande du courage et de la perseverance.**
c) **La France soutient l'innovation a travers differents programmes.**

**Nyttige verb for entreprenørskap:**
- creer = skape/starte
- innover = innovere
- investir = investere
- développer = utvikle
- soutenir = støtte
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
          { label: 'a', task: 'Station F er verdens største oppstartsinkubator.', solution: 'Station F est le plus grand incubateur de startups au monde.', answer: 'Station F est le plus grand incubateur de startups au monde' },
          { label: 'b', task: 'Franske oppstarter tiltrekker utenlandske investorer.', solution: 'Les startups françaises attirent des investisseurs etrangers.', answer: 'Les startups françaises attirent des investisseurs etrangers' },
          { label: 'c', task: 'Vi må utvikle en prototyp før vi lanserer produktet.', solution: 'Nous devons développer un prototype avant de lancer le produit.', answer: 'Nous devons développer un prototype avant de lancer le produit' },
        ],
        solution: 'a) Station F est le plus grand incubateur de startups au monde, b) Les startups françaises attirent des investisseurs etrangers, c) Nous devons développer un prototype avant de lancer le produit',
        hints: ['attirer = tiltrekke', 'avant de + infinitif = før man...'],
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
        task: 'Skriveoppgave: Presenter en forretningside på fransk (6-8 setninger). Beskriv: problemet, løsningen, målgruppen og hvorfor ideen er innovativ.',
        subTasks: [
          { label: 'a', task: 'Beskriv problemet du vil løse', solution: 'Beaucoup de jeunes ont du mal a trouver des stages en entreprise.' },
          { label: 'b', task: 'Presenter løsningen din', solution: 'Notre plateforme connecte les etudiants avec des entreprises qui proposent des stages.' },
          { label: 'c', task: 'Forklar hvorfor ideen er innovativ', solution: 'Notre algorithme utilise l\'intelligence artificielle pour trouver le stage ideal.' },
        ],
        solution: 'Eksempel: "Notre startup s\'appelle StageFinder. Le problème est que beaucoup de jeunes ont du mal a trouver des stages en entreprise. Notre solution est une plateforme en ligne qui connecte les etudiants avec des entreprises. Notre marche cible est les etudiants de 18 a 25 ans en France. Notre modele économique repose sur un abonnement mensuel pour les entreprises. Ce qui rend notre service innovant, c\'est l\'utilisation de l\'intelligence artificielle pour creer des correspondances ideales. Nous avons deja un prototype fonctionnel et cherchons a lever 200 000 euros."',
        hints: ['avoir du mal a = ha vanskeligheter med', 'reposer sur = bygge på/basere seg på'],
      },
    },
    {
      id: 'fransk-3-8-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Station F og La French Tech',
      content: `Station F, som åpnet i 2017 i det tidligere togverkstedet Halle Freyssinet i Paris, er verdens største oppstartsinkubator. Den ble grunnlagt av milliardaeren Xavier Niel og huser over 1000 oppstartsselskaper. "La French Tech" er den franske statens satsing på teknologientreprenorskap. Merket har bidratt til å gjøre Frankrike til et av Europas ledende land for venturkapital. Blant de franske "licornes" (enhjørninger med verdi over 1 milliard dollar) finner vi BlaBlaCar, Doctolib og Deezer.`,
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
