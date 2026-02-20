/* eslint-disable */
// @ts-nocheck
/**
 * Tysk Nivå 2 - Kapittel 14-16 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 14: Identität und Zusammenleben (14.1-14.4)
 * - Kapittel 15: Kreatives und akademisches Schreiben (15.1-15.4)
 * - Kapittel 16: Wiederholung und Prüfungsvorbereitung (16.1-16.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 14.1: Identität und Zugehörigkeit
// ============================================================================

export const CHAPTER_TYSK_2_14_1: TextbookChapter = {
  id: 'tysk-2-14-1',
  courseId: 'tysk-2',
  chapterNumber: '14.1',
  title: 'Identität und Zugehörigkeit',
  subtitle: 'Identitet og tilhørighet',
  description: 'I dette kapittelet utforsker vi begreper knyttet til identitet, tilhørighet og hva det betyr å høre til et fellesskap. Du lærer avansert vokabular og uttrykk for å diskutere personlig og kulturell identitet på tysk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne diskutere identitet og tilhørighet på tysk med avansert ordforråd',
    'Kunne reflektere over hva som former en persons identitet',
    'Kunne bruke relevante uttrykk i muntlig og skriftlig kommunikasjon',
  ],
  content: [
    {
      id: 'tysk-2-14-1-intro',
      type: 'text',
      content: `## Identität und Zugehörigkeit – Identitet og tilhørighet

Identitet er et sammensatt begrep som handler om hvem vi er, hvor vi kommer fra, og hva vi tilhører. På tysk brukes ordet **die Identität** for identitet og **die Zugehörigkeit** for tilhørighet.

I den tyske kulturen er spørsmålet *«Woher kommst du?»* (Hvor kommer du fra?) ofte et utgangspunkt for å snakke om identitet. Men identitet handler om mye mer enn geografi – det inkluderer språk, kultur, familie, verdier og personlige erfaringer.

### Sentrale begreper

| Tysk | Norsk |
|------|-------|
| die Identität, -en | identitet |
| die Zugehörigkeit, -en | tilhørighet |
| die Heimat (kein Plural) | hjemsted, hjem |
| das Zugehörigkeitsgefühl, -e | følelse av tilhørighet |
| die Herkunft, -̈e | opprinnelse, bakgrunn |
| die Muttersprache, -n | morsmål |
| die Werte (Plural) | verdier |
| die Persönlichkeit, -en | personlighet |
| sich identifizieren mit (+Dat.) | å identifisere seg med |
| geprägt sein von (+Dat.) | å være preget av |`,
    },
    {
      id: 'tysk-2-14-1-def-1',
      type: 'definition',
      title: 'Die Heimat',
      content: `**Die Heimat** (ingen flertallsform) betyr hjemsted eller hjem i en bredere betydning. Det omfatter ikke bare et fysisk sted, men også følelsen av å høre til – kultur, språk, minner og relasjoner. Begrepet er dypt forankret i tysk kultur og er vanskelig å oversette direkte.\n\n*«Heimat ist dort, wo man sich zu Hause fühlt.»* – Hjem er der man føler seg hjemme.`,
    },
    {
      id: 'tysk-2-14-1-def-2',
      type: 'definition',
      title: 'Sich identifizieren mit',
      content: `**Sich identifizieren mit** (+dativ) betyr å identifisere seg med noe. Verbet er refleksivt og styrer dativ.\n\n- *Ich identifiziere mich mit meiner Kultur.* – Jeg identifiserer meg med kulturen min.\n- *Er identifiziert sich stark mit seiner Heimatstadt.* – Han identifiserer seg sterkt med hjembyen sin.`,
    },
    {
      id: 'tysk-2-14-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Å beskrive sin identitet',
      problem: `Skriv tre setninger der du beskriver hva som former din identitet, ved å bruke ordforrådet fra kapittelet.`,
      solution: `**Eksempelsvar:**\n\n1. *Meine Identität ist von meiner Familie und meiner Herkunft geprägt.* – Identiteten min er preget av familien og bakgrunnen min.\n2. *Ich identifiziere mich stark mit meiner Muttersprache und meiner Kultur.* – Jeg identifiserer meg sterkt med morsmålet og kulturen min.\n3. *Mein Zugehörigkeitsgefühl hängt eng mit meiner Heimat zusammen.* – Følelsen av tilhørighet henger tett sammen med hjemstedet mitt.`,
    },
    {
      id: 'tysk-2-14-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det tyske ordet «die Zugehörigkeit»?',
        options: [
          { id: 'a', text: 'Tilhørighet', isCorrect: true },
          { id: 'b', text: 'Personlighet', isCorrect: false },
          { id: 'c', text: 'Opprinnelse', isCorrect: false },
          { id: 'd', text: 'Hjemsted', isCorrect: false },
        ],
        solution: '«Die Zugehörigkeit» betyr tilhørighet. «Die Persönlichkeit» er personlighet, «die Herkunft» er opprinnelse, og «die Heimat» er hjemsted.',
      },
    },
    {
      id: 'tysk-2-14-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning er grammatisk korrekt?',
        options: [
          { id: 'a', text: 'Ich identifiziere mich mit meinem Land.', isCorrect: true },
          { id: 'b', text: 'Ich identifiziere mich mit mein Land.', isCorrect: false },
          { id: 'c', text: 'Ich identifiziere mir mit meinem Land.', isCorrect: false },
          { id: 'd', text: 'Ich identifiziere mich an meinem Land.', isCorrect: false },
        ],
        solution: '«Sich identifizieren mit» styrer dativ. «Meinem Land» er dativ av «mein Land» (nøytrum). Refleksivpronomenet er «mich» (akkusativ), og preposisjonen er «mit».',
      },
    },
    {
      id: 'tysk-2-14-1-text-2',
      type: 'text',
      content: `## Identitet i en flerkulturell verden

I dagens globaliserte verden har mange mennesker en **multikulturelle Identität** (flerkulturell identitet). De føler tilhørighet til flere kulturer og steder samtidig.

### Nyttige uttrykk for diskusjon

| Tysk | Norsk |
|------|-------|
| eine doppelte Identität haben | å ha en dobbel identitet |
| zwischen zwei Kulturen stehen | å stå mellom to kulturer |
| seine Wurzeln kennen | å kjenne sine røtter |
| sich heimisch fühlen | å føle seg hjemme |
| die kulturelle Vielfalt | det kulturelle mangfoldet |
| der Migrationshintergrund | innvandringsbakgrunn |`,
    },
    {
      id: 'tysk-2-14-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Leseforståelse – Ein Text über Identität',
      problem: `Les teksten og svar på spørsmålet.\n\n*«Mein Name ist Leyla. Ich bin in Berlin geboren, aber meine Eltern kommen aus der Türkei. Manchmal fühle ich mich zwischen zwei Kulturen. In der Schule bin ich Deutsche, aber zu Hause sprechen wir Türkisch und feiern türkische Feste. Ich finde, beide Kulturen gehören zu meiner Identität.»*\n\nSpørsmål: Hva mener Leyla med at hun står mellom to kulturer?`,
      solution: `Leyla beskriver at hun har en dobbel identitet – hun er født i Tyskland og er tysk i skolesammenheng, men hjemme er den tyrkiske kulturen viktig med tyrkisk språk og tradisjoner. Hun opplever at begge kulturene er en del av hvem hun er. Dette er et typisk eksempel på en **multikulturelle Identität**.`,
    },
    {
      id: 'tysk-2-14-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett følgende setninger til tysk:',
        subTasks: [
          { label: 'a', task: 'Identiteten min er preget av familien min.', solution: 'Meine Identität ist von meiner Familie geprägt.' },
          { label: 'b', task: 'Hun føler seg hjemme i begge kulturene.', solution: 'Sie fühlt sich in beiden Kulturen heimisch.' },
          { label: 'c', task: 'Han kjenner sine røtter.', solution: 'Er kennt seine Wurzeln.' },
        ],
        solution: 'a) Meine Identität ist von meiner Familie geprägt.\nb) Sie fühlt sich in beiden Kulturen heimisch.\nc) Er kennt seine Wurzeln.',
      },
    },
    {
      id: 'tysk-2-14-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (80–100 ord) på tysk der du reflekterer over din egen identitet. Bruk minst fem av ordene fra vokabulartabellene i kapittelet. Inkluder refleksjoner om hva som former din identitet og hvor du føler tilhørighet.',
        solution: 'Eksempelsvar: Meine Identität ist von vielen Dingen geprägt. Meine Herkunft und meine Muttersprache sind wichtige Teile von mir. Ich identifiziere mich mit meiner Heimat und meinen Werten. Manchmal fühle ich mich zwischen verschiedenen Gruppen, aber ich habe ein starkes Zugehörigkeitsgefühl zu meiner Familie. Die kulturelle Vielfalt in meiner Stadt hat auch meine Persönlichkeit beeinflusst. Ich glaube, dass unsere Identität sich immer verändert und wächst.',
      },
    },
    {
      id: 'tysk-2-14-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr uttrykket «seine Wurzeln kennen»?',
        options: [
          { id: 'a', text: 'Å plante et tre', isCorrect: false },
          { id: 'b', text: 'Å kjenne sine røtter / sin bakgrunn', isCorrect: true },
          { id: 'c', text: 'Å reise til utlandet', isCorrect: false },
          { id: 'd', text: 'Å lære et nytt språk', isCorrect: false },
        ],
        solution: '«Seine Wurzeln kennen» betyr bokstavelig «å kjenne sine røtter» og brukes billedlig om å kjenne sin bakgrunn, opprinnelse og kulturarv.',
      },
    },
    {
      id: 'tysk-2-14-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Sentralt vokabular knyttet til **identitet og tilhørighet** (die Identität, die Zugehörigkeit, die Heimat)
- Uttrykk for å beskrive hva som former en persons identitet (*geprägt sein von*, *sich identifizieren mit*)
- Begreper knyttet til flerkulturell identitet (*eine doppelte Identität haben*, *zwischen zwei Kulturen stehen*)
- Å reflektere skriftlig og muntlig over identitetsspørsmål på tysk

Identitet er et viktig tema i tyskspråklig kultur og samfunn, og du vil møte det igjen i de neste kapitlene om migrasjon og interkulturell forståelse.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Identität', definition: 'Identitet – hvem man er og hva som kjennetegner en person' },
    { term: 'die Zugehörigkeit', definition: 'Tilhørighet – følelsen av å høre til et fellesskap' },
    { term: 'die Heimat', definition: 'Hjemsted, hjem – omfatter sted, kultur, minner og relasjoner' },
    { term: 'die Herkunft', definition: 'Opprinnelse, bakgrunn – hvor man kommer fra' },
    { term: 'sich identifizieren mit', definition: 'Å identifisere seg med noe (refleksivt verb med dativ)' },
    { term: 'geprägt sein von', definition: 'Å være preget av – brukes om hva som har formet noe' },
    { term: 'das Zugehörigkeitsgefühl', definition: 'Følelse av tilhørighet' },
    { term: 'die kulturelle Vielfalt', definition: 'Det kulturelle mangfoldet' },
  ],
};

// ============================================================================
// KAPITTEL 14.2: Migration und Integration
// ============================================================================

export const CHAPTER_TYSK_2_14_2: TextbookChapter = {
  id: 'tysk-2-14-2',
  courseId: 'tysk-2',
  chapterNumber: '14.2',
  title: 'Migration und Integration',
  subtitle: 'Migrasjon og integrasjon',
  description: 'Dette kapittelet tar for seg temaene migrasjon og integrasjon i tysk kontekst. Du lærer viktig vokabular, leser autentiske tekster og diskuterer utfordringer og muligheter knyttet til innvandring og integrering.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne diskutere migrasjon og integrasjon på tysk med relevant fagvokabular',
    'Kunne lese og forstå tekster om innvandring i Tyskland',
    'Kunne uttrykke egne synspunkter om integrering muntlig og skriftlig',
  ],
  content: [
    {
      id: 'tysk-2-14-2-intro',
      type: 'text',
      content: `## Migration und Integration – Migrasjon og integrasjon

Tyskland har en lang historie med innvandring. Etter andre verdenskrig kom **Gastarbeiter** (gjestearbeidere) fra Tyrkia, Italia og andre land. Senere har flyktningkrisen i 2015 og andre hendelser ført til store debatter om migrasjon og integrasjon.

### Viktig vokabular

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die Migration | die | migrasjon |
| die Integration | die | integrasjon |
| der Einwanderer, - | der | innvandrer (mann) |
| die Einwanderin, -nen | die | innvandrer (kvinne) |
| der Flüchtling, -e | der | flyktning |
| das Asyl (kein Pl.) | das | asyl |
| die Aufenthaltserlaubnis, -se | die | oppholdstillatelse |
| der Migrationshintergrund, -̈e | der | innvandringsbakgrunn |
| die Staatsbürgerschaft, -en | die | statsborgerskap |
| sich integrieren | – | å integrere seg |
| einwandern (in +Akk.) | – | å innvandre (til) |
| auswandern (aus +Dat.) | – | å utvandre (fra) |`,
    },
    {
      id: 'tysk-2-14-2-def-1',
      type: 'definition',
      title: 'Gastarbeiter',
      content: `**Der Gastarbeiter, -** (gjestearbeider) var utenlandske arbeidere som ble rekruttert til Vest-Tyskland fra 1950- til 1970-tallet for å dekke mangelen på arbeidskraft under den økonomiske oppgangen (*das Wirtschaftswunder*). Mange kom fra Tyrkia, Italia, Hellas og Jugoslavia. Begrepet brukes historisk, men er omdiskutert i dag.`,
    },
    {
      id: 'tysk-2-14-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Leseforståelse – Migration in Deutschland',
      problem: `Les teksten og svar på spørsmålene.\n\n*«Deutschland ist seit Jahrzehnten ein Einwanderungsland. Millionen von Menschen mit Migrationshintergrund leben und arbeiten hier. Die Integration ist ein langer Prozess, der von beiden Seiten Engagement erfordert. Der Staat bietet Integrationskurse an, in denen Einwanderer die deutsche Sprache und Kultur kennenlernen. Gleichzeitig müssen auch die Einheimischen offen für Vielfalt sein.»*\n\na) Hva kaller teksten Tyskland?\nb) Hva tilbyr staten?`,
      solution: `a) Teksten kaller Tyskland et **Einwanderungsland** (innvandringsland).\nb) Staten tilbyr **Integrationskurse** (integreringskurs) der innvandrere lærer det tyske språket og kulturen.\n\nLegg merke til uttrykket *«von beiden Seiten Engagement erfordern»* – kreve engasjement fra begge sider. Dette er en vanlig formulering i integrasjonsdebatten.`,
    },
    {
      id: 'tysk-2-14-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «der Flüchtling» på norsk?',
        options: [
          { id: 'a', text: 'Innvandrer', isCorrect: false },
          { id: 'b', text: 'Flyktning', isCorrect: true },
          { id: 'c', text: 'Gjestearbeider', isCorrect: false },
          { id: 'd', text: 'Statsborger', isCorrect: false },
        ],
        solution: '«Der Flüchtling» betyr flyktning. «Der Einwanderer» er innvandrer, «der Gastarbeiter» er gjestearbeider, og «der Staatsbürger» er statsborger.',
      },
    },
    {
      id: 'tysk-2-14-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken preposisjon brukes med verbet «einwandern»?',
        options: [
          { id: 'a', text: 'einwandern aus (+Dat.)', isCorrect: false },
          { id: 'b', text: 'einwandern in (+Akk.)', isCorrect: true },
          { id: 'c', text: 'einwandern mit (+Dat.)', isCorrect: false },
          { id: 'd', text: 'einwandern von (+Dat.)', isCorrect: false },
        ],
        solution: '«Einwandern» brukes med «in» + akkusativ: *Er ist in die Schweiz eingewandert.* Merk at «auswandern» bruker «aus» + dativ: *Sie ist aus Deutschland ausgewandert.*',
      },
    },
    {
      id: 'tysk-2-14-2-text-2',
      type: 'text',
      content: `## Utfordringer og muligheter

Integrasjon er en toveis prosess. Her er noen sentrale temaer i den tyske debatten:

### Utfordringer (Herausforderungen)
| Tysk | Norsk |
|------|-------|
| die Sprachbarriere, -n | språkbarriere |
| die Diskriminierung, -en | diskriminering |
| das Vorurteil, -e | fordom |
| die Fremdenfeindlichkeit | fremmedfrykt |
| die Arbeitslosigkeit | arbeidsledighet |

### Muligheter (Chancen)
| Tysk | Norsk |
|------|-------|
| die kulturelle Bereicherung | kulturell berikelse |
| der Fachkräftemangel | mangel på fagarbeidere |
| die Willkommenskultur | velkomstkultur |
| die Chancengleichheit | like muligheter |
| das Zusammenleben | sameksistens |`,
    },
    {
      id: 'tysk-2-14-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett setningene til tysk. Bruk vokabularet fra kapittelet.',
        subTasks: [
          { label: 'a', task: 'Han innvandret til Tyskland i 2015.', solution: 'Er ist 2015 in Deutschland eingewandert. / Er ist im Jahr 2015 nach Deutschland eingewandert.' },
          { label: 'b', task: 'Flyktningene trenger en oppholdstillatelse.', solution: 'Die Flüchtlinge brauchen eine Aufenthaltserlaubnis.' },
          { label: 'c', task: 'Integrasjon krever engasjement fra begge sider.', solution: 'Integration erfordert Engagement von beiden Seiten.' },
        ],
        solution: 'a) Er ist 2015 in Deutschland eingewandert.\nb) Die Flüchtlinge brauchen eine Aufenthaltserlaubnis.\nc) Integration erfordert Engagement von beiden Seiten.',
      },
    },
    {
      id: 'tysk-2-14-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort innlegg (80–100 ord) på tysk der du diskuterer enten utfordringer eller muligheter ved migrasjon. Ta et standpunkt og bruk minst fire ord fra vokabulartabellene.',
        solution: 'Eksempelsvar: Ich glaube, dass Migration viele Chancen bietet. Die kulturelle Bereicherung ist ein großer Vorteil für die Gesellschaft. Einwanderer bringen neue Ideen und Perspektiven mit. Außerdem hilft Migration gegen den Fachkräftemangel in vielen Branchen. Natürlich gibt es auch Herausforderungen, wie zum Beispiel Sprachbarrieren. Aber mit guten Integrationskursen und einer Willkommenskultur kann das Zusammenleben gut funktionieren. Chancengleichheit ist dabei besonders wichtig.',
      },
    },
    {
      id: 'tysk-2-14-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «die Willkommenskultur»?',
        options: [
          { id: 'a', text: 'Kulturfestival', isCorrect: false },
          { id: 'b', text: 'Fremmedfrykt', isCorrect: false },
          { id: 'c', text: 'Velkomstkultur', isCorrect: true },
          { id: 'd', text: 'Kulturforskjell', isCorrect: false },
        ],
        solution: '«Die Willkommenskultur» betyr velkomstkultur – en holdning og praksis der et samfunn aktivt ønsker innvandrere velkommen. Begrepet ble særlig brukt under flyktningkrisen i 2015.',
      },
    },
    {
      id: 'tysk-2-14-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Viktig vokabular om **migrasjon og integrasjon** (die Migration, der Flüchtling, die Aufenthaltserlaubnis)
- Historisk bakgrunn for innvandring i Tyskland (Gastarbeiter, Wirtschaftswunder)
- Uttrykk for å diskutere **utfordringer** (Sprachbarriere, Vorurteil, Diskriminierung)
- Uttrykk for å diskutere **muligheter** (kulturelle Bereicherung, Willkommenskultur)
- Verb med preposisjoner: *einwandern in* (+Akk.), *auswandern aus* (+Dat.)`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Migration', definition: 'Migrasjon – forflytning av mennesker mellom land' },
    { term: 'die Integration', definition: 'Integrasjon – prosessen med å bli en del av samfunnet' },
    { term: 'der Flüchtling', definition: 'Flyktning – person som flykter fra krig eller forfølgelse' },
    { term: 'die Aufenthaltserlaubnis', definition: 'Oppholdstillatelse – tillatelse til å bo i et land' },
    { term: 'der Gastarbeiter', definition: 'Gjestearbeider – utenlandsk arbeider rekruttert til Tyskland (historisk)' },
    { term: 'die Willkommenskultur', definition: 'Velkomstkultur – holdning der samfunnet ønsker innvandrere velkommen' },
    { term: 'einwandern', definition: 'Å innvandre – flytte til et nytt land (einwandern in +Akk.)' },
    { term: 'das Vorurteil', definition: 'Fordom – forutinntatt mening om en gruppe' },
  ],
};

// ============================================================================
// KAPITTEL 14.3: Zusammenleben in der Gesellschaft
// ============================================================================

export const CHAPTER_TYSK_2_14_3: TextbookChapter = {
  id: 'tysk-2-14-3',
  courseId: 'tysk-2',
  chapterNumber: '14.3',
  title: 'Zusammenleben in der Gesellschaft',
  subtitle: 'Å leve sammen i samfunnet',
  description: 'I dette kapittelet lærer du å diskutere sameksistens, samfunnsverdier og hva som kreves for et godt fellesskap. Du utforsker temaer som toleranse, demokrati og medborgerskap i en tysk kontekst.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne diskutere sameksistens og samfunnsverdier på tysk',
    'Kunne bruke avansert vokabular om demokrati og medborgerskap',
    'Kunne uttrykke og begrunne meninger om samfunnsspørsmål',
  ],
  content: [
    {
      id: 'tysk-2-14-3-intro',
      type: 'text',
      content: `## Zusammenleben in der Gesellschaft – Å leve sammen i samfunnet

Et velfungerende samfunn bygger på felles verdier, gjensidig respekt og aktiv deltakelse. På tysk snakker man om **das Zusammenleben** (sameksistens) og **die Gesellschaft** (samfunnet).

### Grunnleggende vokabular

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| das Zusammenleben | das | sameksistens, det å leve sammen |
| die Gesellschaft, -en | die | samfunn |
| die Toleranz (kein Pl.) | die | toleranse |
| der Respekt (kein Pl.) | der | respekt |
| die Gleichberechtigung | die | likestilling |
| die Demokratie, -n | die | demokrati |
| das Grundgesetz | das | grunnloven (i Tyskland) |
| die Meinungsfreiheit | die | ytringsfrihet |
| die Religionsfreiheit | die | religionsfrihet |
| das Engagement (kein Pl.) | das | engasjement |
| sich engagieren (für +Akk.) | – | å engasjere seg (for) |
| beitragen (zu +Dat.) | – | å bidra (til) |`,
    },
    {
      id: 'tysk-2-14-3-def-1',
      type: 'definition',
      title: 'Das Grundgesetz',
      content: `**Das Grundgesetz** er Tysklands grunnlov, vedtatt i 1949. Den begynner med ordene: *«Die Würde des Menschen ist unantastbar»* (Menneskets verdighet er ukrenkelig). Grunnloven garanterer grunnleggende rettigheter som ytringsfrihet (die Meinungsfreiheit), religionsfrihet (die Religionsfreiheit) og likhet for loven (die Gleichheit vor dem Gesetz).`,
    },
    {
      id: 'tysk-2-14-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Verdier i det tyske samfunnet',
      problem: `Kombiner de tyske uttrykkene med de norske oversettelsene:\n\n1. die Meinungsfreiheit\n2. die Gleichberechtigung\n3. sich engagieren für\n4. beitragen zu`,
      solution: `1. die Meinungsfreiheit = ytringsfrihet\n2. die Gleichberechtigung = likestilling\n3. sich engagieren für = å engasjere seg for\n4. beitragen zu = å bidra til\n\nEksempler i setninger:\n- *Die Meinungsfreiheit ist ein Grundrecht.* – Ytringsfrihet er en grunnleggende rettighet.\n- *Jeder kann zum Zusammenleben beitragen.* – Alle kan bidra til sameksistensen.`,
    },
    {
      id: 'tysk-2-14-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det første prinsippet i det tyske Grundgesetz?',
        options: [
          { id: 'a', text: 'Ytringsfrihet', isCorrect: false },
          { id: 'b', text: 'Menneskets verdighet er ukrenkelig', isCorrect: true },
          { id: 'c', text: 'Religionsfrihet', isCorrect: false },
          { id: 'd', text: 'Likhet for loven', isCorrect: false },
        ],
        solution: 'Det første prinsippet i Grundgesetz (artikkel 1) er: «Die Würde des Menschen ist unantastbar» – Menneskets verdighet er ukrenkelig. Dette er grunnlaget for alle andre rettigheter.',
      },
    },
    {
      id: 'tysk-2-14-3-text-2',
      type: 'text',
      content: `## Aktiv deltakelse i samfunnet

Å leve sammen handler også om aktiv deltakelse. På tysk skiller man mellom ulike former for engasjement:

### Former for samfunnsengasjement

| Tysk | Norsk |
|------|-------|
| das Ehrenamt, -̈er | frivillig arbeid / verv |
| der Verein, -e | forening |
| die Bürgerinitiative, -n | borgerinitiativ |
| die Demonstration, -en | demonstrasjon |
| das Wahlrecht | stemmerett |
| wählen gehen | å gå og stemme |
| eine Petition unterschreiben | å signere et opprop |
| Verantwortung übernehmen | å ta ansvar |

I Tyskland er **Ehrenamt** (frivillig arbeid) svært viktig. Over 30 millioner tyskere er engasjert i frivillige organisasjoner, idrettsforeninger eller kulturforeninger.`,
    },
    {
      id: 'tysk-2-14-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «das Ehrenamt» på norsk?',
        options: [
          { id: 'a', text: 'Æresmedlem', isCorrect: false },
          { id: 'b', text: 'Æresord', isCorrect: false },
          { id: 'c', text: 'Frivillig arbeid / verv', isCorrect: true },
          { id: 'd', text: 'Embetsmann', isCorrect: false },
        ],
        solution: '«Das Ehrenamt» betyr frivillig arbeid eller verv. Ordet er sammensatt av «die Ehre» (ære) og «das Amt» (embete/stilling). Over 30 millioner tyskere er aktive i Ehrenamt.',
      },
    },
    {
      id: 'tysk-2-14-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfør setningene med riktig preposisjon og bøyningsform.',
        subTasks: [
          { label: 'a', task: 'Sie engagiert sich ___ den Umweltschutz. (for miljøvern)', solution: 'Sie engagiert sich für den Umweltschutz.' },
          { label: 'b', task: 'Er trägt ___ einem besseren Zusammenleben bei. (til en bedre sameksistens)', solution: 'Er trägt zu einem besseren Zusammenleben bei.' },
          { label: 'c', task: 'Wir müssen Verantwortung ___ unsere Gesellschaft übernehmen. (for samfunnet vårt)', solution: 'Wir müssen Verantwortung für unsere Gesellschaft übernehmen.' },
        ],
        solution: 'a) für den Umweltschutz (sich engagieren für + Akk.)\nb) zu einem besseren Zusammenleben (beitragen zu + Dat.)\nc) für unsere Gesellschaft (Verantwortung übernehmen für + Akk.)',
      },
    },
    {
      id: 'tysk-2-14-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Å uttrykke meninger om samfunnet',
      problem: `Hvordan kan du uttrykke din mening om et samfunnsspørsmål på tysk? Studer disse setningsstrukturene.`,
      solution: `### Nyttige fraser for å uttrykke meninger:\n\n- *Ich bin der Meinung, dass ...* – Jeg mener at ...\n- *Meiner Meinung nach ist ...* – Etter min mening er ...\n- *Ich finde es wichtig, dass ...* – Jeg synes det er viktig at ...\n- *Es ist notwendig, dass ...* – Det er nødvendig at ...\n- *Ich bin davon überzeugt, dass ...* – Jeg er overbevist om at ...\n\n**Eksempel:** *Ich bin der Meinung, dass Toleranz und Respekt die Grundlage für ein gutes Zusammenleben sind.* – Jeg mener at toleranse og respekt er grunnlaget for god sameksistens.`,
    },
    {
      id: 'tysk-2-14-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv tre setninger på tysk der du uttrykker din mening om hva som er viktig for et godt samfunn. Bruk minst tre ulike meningsuttrykk fra eksempelet ovenfor.',
        solution: 'Eksempelsvar:\n1. Ich bin der Meinung, dass Gleichberechtigung in einer Demokratie unverzichtbar ist.\n2. Meiner Meinung nach sollte jeder Bürger Verantwortung für die Gesellschaft übernehmen.\n3. Ich finde es wichtig, dass man sich für Toleranz und Respekt engagiert.',
      },
    },
    {
      id: 'tysk-2-14-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken preposisjon brukes med «beitragen»?',
        options: [
          { id: 'a', text: 'beitragen für', isCorrect: false },
          { id: 'b', text: 'beitragen an', isCorrect: false },
          { id: 'c', text: 'beitragen mit', isCorrect: false },
          { id: 'd', text: 'beitragen zu', isCorrect: true },
        ],
        solution: '«Beitragen» brukes med preposisjonen «zu» + dativ: *zum Zusammenleben beitragen* (bidra til sameksistens).',
      },
    },
    {
      id: 'tysk-2-14-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Vokabular om **sameksistens og samfunn** (das Zusammenleben, die Gesellschaft, die Toleranz)
- Om **det tyske Grundgesetz** og grunnleggende rettigheter
- Former for **samfunnsengasjement** (das Ehrenamt, der Verein, die Bürgerinitiative)
- **Meningsuttrykk** for å diskutere samfunnsspørsmål (*Ich bin der Meinung, dass ...*)
- Verb med preposisjoner: *sich engagieren für*, *beitragen zu*`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Zusammenleben', definition: 'Sameksistens – det å leve sammen i et samfunn' },
    { term: 'die Toleranz', definition: 'Toleranse – aksept for andres meninger og levesett' },
    { term: 'das Grundgesetz', definition: 'Grunnloven – Tysklands konstitusjon fra 1949' },
    { term: 'die Gleichberechtigung', definition: 'Likestilling – like rettigheter for alle' },
    { term: 'das Ehrenamt', definition: 'Frivillig arbeid/verv – ulønnet innsats for fellesskapet' },
    { term: 'sich engagieren für', definition: 'Å engasjere seg for (+ akkusativ)' },
    { term: 'beitragen zu', definition: 'Å bidra til (+ dativ)' },
    { term: 'die Meinungsfreiheit', definition: 'Ytringsfrihet – retten til å uttrykke sine meninger' },
  ],
};

// ============================================================================
// KAPITTEL 14.4: Interkulturelle Verständigung
// ============================================================================

export const CHAPTER_TYSK_2_14_4: TextbookChapter = {
  id: 'tysk-2-14-4',
  courseId: 'tysk-2',
  chapterNumber: '14.4',
  title: 'Interkulturelle Verständigung',
  subtitle: 'Interkulturell forståelse',
  description: 'I dette kapittelet utforsker vi interkulturell kommunikasjon og forståelse. Du lærer om kulturelle forskjeller, misforståelser og strategier for god kommunikasjon på tvers av kulturer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne reflektere over kulturelle forskjeller og likheter',
    'Kunne bruke vokabular knyttet til interkulturell kommunikasjon',
    'Kunne identifisere og håndtere interkulturelle misforståelser',
  ],
  content: [
    {
      id: 'tysk-2-14-4-intro',
      type: 'text',
      content: `## Interkulturelle Verständigung – Interkulturell forståelse

Interkulturell forståelse handler om evnen til å kommunisere og samhandle med mennesker fra andre kulturer. På tysk brukes begrepet **die interkulturelle Verständigung** eller **die interkulturelle Kompetenz**.

### Sentralt vokabular

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die interkulturelle Verständigung | die | interkulturell forståelse |
| die interkulturelle Kompetenz | die | interkulturell kompetanse |
| das Missverständnis, -se | das | misforståelse |
| das Stereotyp, -e / -en | das | stereotypi |
| das Klischee, -s | das | klisjé |
| die Kommunikation | die | kommunikasjon |
| die Körpersprache | die | kroppsspråk |
| der Kulturschock, -s | der | kultursjokk |
| die Offenheit | die | åpenhet |
| die Empathie | die | empati |
| sich anpassen (an +Akk.) | – | å tilpasse seg (til) |
| Rücksicht nehmen (auf +Akk.) | – | å ta hensyn (til) |`,
    },
    {
      id: 'tysk-2-14-4-def-1',
      type: 'definition',
      title: 'Interkulturelle Kompetenz',
      content: `**Die interkulturelle Kompetenz** er evnen til å kommunisere effektivt og respektfullt med mennesker fra andre kulturer. Den omfatter tre dimensjoner:\n\n1. **Wissen** (kunnskap) – kjennskap til andre kulturer\n2. **Haltung** (holdning) – åpenhet, nysgjerrighet og respekt\n3. **Handlungsfähigkeit** (handlingskompetanse) – evne til å tilpasse sin kommunikasjon`,
    },
    {
      id: 'tysk-2-14-4-def-2',
      type: 'definition',
      title: 'Stereotyp vs. Klischee',
      content: `**Das Stereotyp** (stereotypi) er en forenklet, generalisert oppfatning om en gruppe mennesker. **Das Klischee** (klisjé) er en overbrukt forestilling som ofte er overfladisk. Begge kan føre til misforståelser:\n\n- *«Alle Deutschen sind pünktlich»* – en stereotypi\n- *«Deutsche trinken nur Bier»* – en klisjé\n\nDet er viktig å skille mellom kulturelle tendenser og generaliseringer.`,
    },
    {
      id: 'tysk-2-14-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Kulturelle forskjeller i kommunikasjon',
      problem: `Les situasjonene og forklar hva som kan føre til misforståelser.\n\n**Situasjon 1:** En norsk student sier «det var hyggelig» etter et kort møte med en tysk student. Den tyske studenten forventer å bli invitert hjem.\n\n**Situasjon 2:** En tysk kollega sier direkte «Das ist falsch» (Det er feil) til en utenlandsk kollega i et møte.`,
      solution: `**Situasjon 1:** I norsk kultur er «det var hyggelig» en høflighetsfraser uten forpliktelse. I noen kulturer kan slike utsagn tolkes som en konkret invitasjon. Dette er et eksempel på **ein Missverständnis** (misforståelse) basert på kulturelle forskjeller i kommunikasjonsstil.\n\n**Situasjon 2:** Tysk kommunikasjonskultur er ofte mer **direkt** (direkte) enn mange andre kulturer. «Das ist falsch» er en saklig korrigering på tysk, men kan oppfattes som uhøflig i kulturer med en mer indirekte kommunikasjonsstil. Dette kalles **direkte vs. indirekte Kommunikation**.`,
    },
    {
      id: 'tysk-2-14-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «das Missverständnis» på norsk?',
        options: [
          { id: 'a', text: 'Mistillit', isCorrect: false },
          { id: 'b', text: 'Misforståelse', isCorrect: true },
          { id: 'c', text: 'Misbilligelse', isCorrect: false },
          { id: 'd', text: 'Misunnelse', isCorrect: false },
        ],
        solution: '«Das Missverständnis» betyr misforståelse. Ordet er sammensatt av «miss-» (feil-/mis-) og «das Verständnis» (forståelse). Flertall: die Missverständnisse.',
      },
    },
    {
      id: 'tysk-2-14-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilke tre dimensjoner omfatter interkulturell kompetanse?',
        options: [
          { id: 'a', text: 'Språk, grammatikk og uttale', isCorrect: false },
          { id: 'b', text: 'Kunnskap, holdning og handlingskompetanse', isCorrect: true },
          { id: 'c', text: 'Lytting, lesing og skriving', isCorrect: false },
          { id: 'd', text: 'Reise, mat og musikk', isCorrect: false },
        ],
        solution: 'Interkulturell kompetanse omfatter: Wissen (kunnskap om andre kulturer), Haltung (holdning – åpenhet og respekt) og Handlungsfähigkeit (handlingskompetanse – evne til å tilpasse kommunikasjonen).',
      },
    },
    {
      id: 'tysk-2-14-4-text-2',
      type: 'text',
      content: `## Strategier for interkulturell kommunikasjon

For å unngå misforståelser og kommunisere godt på tvers av kulturer, kan man bruke ulike strategier:

| Strategi (tysk) | Strategi (norsk) | Forklaring |
|-----------------|-------------------|------------|
| Nachfragen | Spørre om igjen | Be om forklaring når noe er uklart |
| Aktives Zuhören | Aktiv lytting | Vise at man lytter og forstår |
| Perspektivwechsel | Perspektivbytte | Prøve å se ting fra den andres synspunkt |
| Vorurteile reflektieren | Reflektere over fordommer | Være bevisst på egne stereotypier |
| Geduld haben | Ha tålmodighet | Gi tid til å forstå hverandre |
| Humor einsetzen | Bruke humor | Lette på stemningen i vanskelige situasjoner |`,
    },
    {
      id: 'tysk-2-14-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett følgende setninger til tysk:',
        subTasks: [
          { label: 'a', task: 'Vi må ta hensyn til kulturelle forskjeller.', solution: 'Wir müssen auf kulturelle Unterschiede Rücksicht nehmen.' },
          { label: 'b', task: 'Åpenhet og empati er viktig for interkulturell forståelse.', solution: 'Offenheit und Empathie sind wichtig für die interkulturelle Verständigung.' },
          { label: 'c', task: 'Man bør reflektere over sine egne fordommer.', solution: 'Man sollte über seine eigenen Vorurteile reflektieren.' },
        ],
        solution: 'a) Wir müssen auf kulturelle Unterschiede Rücksicht nehmen.\nb) Offenheit und Empathie sind wichtig für die interkulturelle Verständigung.\nc) Man sollte über seine eigenen Vorurteile reflektieren.',
      },
    },
    {
      id: 'tysk-2-14-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv en situasjon (80–100 ord på tysk) der en interkulturell misforståelse kan oppstå. Forklar hva misforståelsen består i, og foreslå en strategi for å løse den. Bruk vokabular fra kapittelet.',
        solution: 'Eksempelsvar: Ein norwegischer Student lädt einen deutschen Freund zum Abendessen ein und sagt: „Komm doch mal vorbei!" Der Deutsche versteht das als eine konkrete Einladung und kommt am nächsten Tag. Der Norweger ist überrascht, weil er nur höflich sein wollte. Dieses Missverständnis entsteht durch unterschiedliche Kommunikationsstile. Als Strategie könnte man nachfragen: „Wann genau passt es dir?" So vermeidet man Missverständnisse durch aktives Nachfragen.',
      },
    },
    {
      id: 'tysk-2-14-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-14-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken preposisjon brukes med «sich anpassen»?',
        options: [
          { id: 'a', text: 'sich anpassen zu', isCorrect: false },
          { id: 'b', text: 'sich anpassen für', isCorrect: false },
          { id: 'c', text: 'sich anpassen an', isCorrect: true },
          { id: 'd', text: 'sich anpassen mit', isCorrect: false },
        ],
        solution: '«Sich anpassen» brukes med «an» + akkusativ: *sich an eine neue Kultur anpassen* (tilpasse seg til en ny kultur).',
      },
    },
    {
      id: 'tysk-2-14-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Vokabular om **interkulturell forståelse** (die interkulturelle Kompetenz, das Missverständnis, das Stereotyp)
- De tre dimensjonene av interkulturell kompetanse: **Wissen, Haltung, Handlungsfähigkeit**
- Forskjellen mellom **direkte og indirekte kommunikasjon**
- **Strategier** for interkulturell kommunikasjon (Nachfragen, Perspektivwechsel, aktives Zuhören)
- Verb med preposisjoner: *sich anpassen an* (+Akk.), *Rücksicht nehmen auf* (+Akk.)`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die interkulturelle Kompetenz', definition: 'Interkulturell kompetanse – evnen til å kommunisere på tvers av kulturer' },
    { term: 'das Missverständnis', definition: 'Misforståelse – feilaktig tolkning av noe' },
    { term: 'das Stereotyp', definition: 'Stereotypi – forenklet, generalisert oppfatning om en gruppe' },
    { term: 'die Körpersprache', definition: 'Kroppsspråk – nonverbal kommunikasjon' },
    { term: 'der Kulturschock', definition: 'Kultursjokk – reaksjon på møte med en fremmed kultur' },
    { term: 'sich anpassen an', definition: 'Å tilpasse seg til (+ akkusativ)' },
    { term: 'Rücksicht nehmen auf', definition: 'Å ta hensyn til (+ akkusativ)' },
    { term: 'der Perspektivwechsel', definition: 'Perspektivbytte – å se ting fra en annen synsvinkel' },
  ],
};

// ============================================================================
// KAPITTEL 15.1: Kreatives Schreiben
// ============================================================================

export const CHAPTER_TYSK_2_15_1: TextbookChapter = {
  id: 'tysk-2-15-1',
  courseId: 'tysk-2',
  chapterNumber: '15.1',
  title: 'Kreatives Schreiben',
  subtitle: 'Kreativ skriving – fortellinger og dikt',
  description: 'I dette kapittelet lærer du å skrive kreativt på tysk. Du utforsker ulike sjangre som korthistorier og dikt, og lærer teknikker for å gjøre tekstene dine levende og engasjerende.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne skrive kreative tekster på tysk, inkludert korthistorier og dikt',
    'Kunne bruke litterære virkemidler og billedspråk',
    'Kunne strukturere en fortelling med innledning, hoveddel og avslutning',
  ],
  content: [
    {
      id: 'tysk-2-15-1-intro',
      type: 'text',
      content: `## Kreatives Schreiben – Kreativ skriving

Kreativ skriving handler om å uttrykke seg fritt og kunstnerisk gjennom tekst. På tysk kalles det **kreatives Schreiben**. I dette kapittelet fokuserer vi på to sjangre: **die Kurzgeschichte** (korthistorie) og **das Gedicht** (dikt).

### Sjangervokabular

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| das kreative Schreiben | das | kreativ skriving |
| die Kurzgeschichte, -n | die | korthistorie |
| das Gedicht, -e | das | dikt |
| die Erzählung, -en | die | fortelling |
| der Erzähler, - | der | forteller |
| die Handlung, -en | die | handling |
| die Figur, -en | die | karakter/figur |
| der Höhepunkt, -e | der | høydepunkt/klimaks |
| die Pointe, -n | die | poeng |
| das Stilmittel, - | das | virkemiddel |
| die Metapher, -n | die | metafor |
| der Vergleich, -e | der | sammenligning |`,
    },
    {
      id: 'tysk-2-15-1-def-1',
      type: 'definition',
      title: 'Die Kurzgeschichte',
      content: `**Die Kurzgeschichte** (korthistorie) er en kort prosatekst med disse kjennetegnene:\n\n- **Unmittelbarer Anfang** – starter midt i handlingen, uten lang innledning\n- **Wenige Figuren** – få karakterer\n- **Kurzer Zeitraum** – kort tidsrom\n- **Offenes Ende** – ofte en åpen slutt\n- **Wendepunkt** – et vendepunkt som endrer retningen\n- **Alltagssprache** – hverdagsspråk\n\nKjente tyske korthistorieforfattere er Wolfgang Borchert og Heinrich Böll.`,
    },
    {
      id: 'tysk-2-15-1-def-2',
      type: 'definition',
      title: 'Stilmittel – Virkemidler',
      content: `Viktige **Stilmittel** (virkemidler) i kreativ skriving:\n\n- **Die Metapher** – metafor: *Das Leben ist eine Reise.* (Livet er en reise.)\n- **Der Vergleich** – sammenligning (med «wie»): *schnell wie der Wind* (rask som vinden)\n- **Die Personifikation** – personifisering: *Der Wind flüsterte.* (Vinden hvisket.)\n- **Die Wiederholung** – gjentakelse: *Nie wieder, nie wieder.* (Aldri igjen, aldri igjen.)\n- **Die Alliteration** – allitterasjon: *Milch macht müde Männer munter.* (Melk gjør trøtte menn muntre.)`,
    },
    {
      id: 'tysk-2-15-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Strukturen til en Kurzgeschichte',
      problem: `Analyser følgende korte tekstutdrag og identifiser kjennetegnene på en Kurzgeschichte.\n\n*«Er stand auf und ging zur Tür. Draußen regnete es. Er hatte den Brief noch in der Hand. Drei Worte nur. Drei Worte, die alles veränderten.»*`,
      solution: `Kjennetegn på Kurzgeschichte i dette utdraget:\n\n1. **Unmittelbarer Anfang** – Vi kastes rett inn i handlingen uten forklaring på hvem «er» er.\n2. **Wenige Figuren** – Bare én person nevnes.\n3. **Alltagssprache** – Enkelt, hverdagslig språk.\n4. **Stilmittel:** Die Wiederholung – «Drei Worte» gjentas for å skape effekt.\n5. **Spannung** (spenning) – Vi vet ikke hva brevet inneholder, noe som skaper nysgjerrighet.\n6. **Offenes Ende** – Slutten er åpen – vi vet ikke hva som skjer videre.`,
    },
    {
      id: 'tysk-2-15-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er typisk for en tysk Kurzgeschichte?',
        options: [
          { id: 'a', text: 'Lang innledning med detaljert bakgrunnsinformasjon', isCorrect: false },
          { id: 'b', text: 'Umiddelbar start midt i handlingen', isCorrect: true },
          { id: 'c', text: 'Mange karakterer og parallelle handlingslinjer', isCorrect: false },
          { id: 'd', text: 'Alltid en lykkelig slutt', isCorrect: false },
        ],
        solution: 'En Kurzgeschichte kjennetegnes av «unmittelbarer Anfang» – den begynner midt i handlingen uten lang innledning. Den har også få karakterer, kort tidsrom og ofte en åpen slutt.',
      },
    },
    {
      id: 'tysk-2-15-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket virkemiddel brukes i setningen «Der Wind sang leise durch die Bäume»?',
        options: [
          { id: 'a', text: 'Metapher (metafor)', isCorrect: false },
          { id: 'b', text: 'Vergleich (sammenligning)', isCorrect: false },
          { id: 'c', text: 'Personifikation (personifisering)', isCorrect: true },
          { id: 'd', text: 'Alliteration (allitterasjon)', isCorrect: false },
        ],
        solution: 'Her brukes Personifikation (personifisering) – vinden får en menneskelig egenskap (å synge). «Der Wind sang» gir vinden menneskelige trekk.',
      },
    },
    {
      id: 'tysk-2-15-1-text-2',
      type: 'text',
      content: `## Dikt – Das Gedicht

Et dikt har andre kjennetegn enn prosa. Her er viktig vokabular:

| Tysk | Norsk |
|------|-------|
| die Strophe, -n | strofe |
| der Vers, -e | vers / verselinje |
| der Reim, -e | rim |
| das Reimschema | rimskjema |
| der Rhythmus | rytme |
| das lyrische Ich | det lyriske jeget |
| die Stimmung | stemning |

### Vanlige rimskjemaer
- **Paarreim** (parrim): aabb – *Haus/Maus, Nacht/acht*
- **Kreuzreim** (kryssrim): abab – annenhver linje rimer
- **Umarmender Reim** (omsluttende rim): abba`,
    },
    {
      id: 'tysk-2-15-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser virkemidlene i følgende setninger og oversett dem til norsk:',
        subTasks: [
          { label: 'a', task: '«Das Leben ist ein Fluss.» – Hvilket virkemiddel? Oversett.', solution: 'Metapher (metafor). Oversettelse: Livet er en elv.' },
          { label: 'b', task: '«Sie war schön wie eine Rose.» – Hvilket virkemiddel? Oversett.', solution: 'Vergleich (sammenligning med «wie»). Oversettelse: Hun var vakker som en rose.' },
          { label: 'c', task: '«Die Sonne lachte vom Himmel.» – Hvilket virkemiddel? Oversett.', solution: 'Personifikation (personifisering). Oversettelse: Solen lo fra himmelen.' },
        ],
        solution: 'a) Metapher – Livet er en elv.\nb) Vergleich – Hun var vakker som en rose.\nc) Personifikation – Solen lo fra himmelen.',
      },
    },
    {
      id: 'tysk-2-15-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv begynnelsen på en Kurzgeschichte på tysk (60–80 ord). Bruk «unmittelbarer Anfang» (start midt i handlingen) og inkluder minst ett virkemiddel (metafor, personifisering eller sammenligning). Avslutt med en setning som skaper spenning.',
        solution: 'Eksempelsvar: Die Tür fiel ins Schloss. Anna stand allein im dunklen Flur. Ihr Herz war ein wilder Trommelschlag. Draußen heulte der Wind wie ein verletztes Tier. Sie griff in ihre Tasche und fand den Schlüssel nicht mehr. „Das kann nicht sein", flüsterte sie. Langsam drehte sie sich um. Am Ende des Flurs bewegte sich ein Schatten.\n\n(Virkemidler: Metapher – «Ihr Herz war ein wilder Trommelschlag», Vergleich – «wie ein verletztes Tier», Personifikation – «der Wind heulte»)',
      },
    },
    {
      id: 'tysk-2-15-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort dikt (4–8 linjer) på tysk med parrim (Paarreim: aabb). Velg et tema som passer til kapittel 14 (identitet, tilhørighet, samfunn) eller et fritt tema.',
        solution: 'Eksempelsvar:\nIch suche meinen Platz in dieser Welt, (a)\nein Ort, der mir am Herzen gefällt. (a)\nZwischen Kulturen steh ich hier, (b)\ndie Heimat lebt tief in mir. (b)\n\n(Rimskjema: Paarreim aabb. Tema: identitet og tilhørighet.)',
      },
    },
    {
      id: 'tysk-2-15-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Sjangertrekk ved **die Kurzgeschichte** (umiddelbar start, få figurer, åpen slutt)
- Viktige **Stilmittel** (virkemidler): Metapher, Vergleich, Personifikation, Wiederholung, Alliteration
- Grunnleggende om **das Gedicht** (dikt): Strophe, Vers, Reim, Reimschema
- Vanlige **rimskjemaer**: Paarreim (aabb), Kreuzreim (abab), umarmender Reim (abba)
- Å skrive kreativt på tysk med struktur og virkemidler`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Kurzgeschichte', definition: 'Korthistorie – kort prosatekst med umiddelbar start og ofte åpen slutt' },
    { term: 'das Gedicht', definition: 'Dikt – litterær tekst med vers, strofer og ofte rim' },
    { term: 'das Stilmittel', definition: 'Virkemiddel – litterært grep som forsterker uttrykket' },
    { term: 'die Metapher', definition: 'Metafor – billedlig uttrykk uten «som/wie»' },
    { term: 'die Personifikation', definition: 'Personifisering – å gi menneskelige egenskaper til noe ikke-menneskelig' },
    { term: 'der Vergleich', definition: 'Sammenligning – billedlig uttrykk med «wie» (som)' },
    { term: 'der Reim', definition: 'Rim – lydlikhet mellom ord i slutten av verslinjer' },
    { term: 'der Höhepunkt', definition: 'Høydepunkt/klimaks – det mest spennende punktet i handlingen' },
  ],
};

// ============================================================================
// KAPITTEL 15.2: Formelle Texte
// ============================================================================

export const CHAPTER_TYSK_2_15_2: TextbookChapter = {
  id: 'tysk-2-15-2',
  courseId: 'tysk-2',
  chapterNumber: '15.2',
  title: 'Formelle Texte',
  subtitle: 'Formelle tekster – søknader, klager og rapporter',
  description: 'I dette kapittelet lærer du å skrive formelle tekster på tysk, inkludert jobbsøknader, klager og rapporter. Du lærer om formelt register, struktur og høflighetsfraser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne skrive formelle tekster på tysk med korrekt struktur og register',
    'Kunne skrive en jobbsøknad (Bewerbung) og formelt brev på tysk',
    'Kunne bruke formelle høflighetsfraser og konnektorer',
  ],
  content: [
    {
      id: 'tysk-2-15-2-intro',
      type: 'text',
      content: `## Formelle Texte – Formelle tekster

Formelle tekster krever et annet språkregister enn hverdagsspråk. På tysk er forskjellen mellom **formell** og **informell** kommunikasjon spesielt tydelig, blant annet gjennom bruken av **Sie** (De/Dem) i stedet for **du**.

### Typer formelle tekster

| Tysk | Norsk |
|------|-------|
| die Bewerbung, -en | jobbsøknad |
| das Anschreiben, - | følgebrev |
| der Lebenslauf, -̈e | CV |
| die Beschwerde, -n | klage |
| der Bericht, -e | rapport |
| das Protokoll, -e | referat/protokoll |
| die formelle E-Mail | formell e-post |
| die Anfrage, -n | forespørsel |

### Formelle vs. uformelle uttrykk

| Formelt | Uformelt | Norsk |
|---------|----------|-------|
| Sehr geehrte Damen und Herren | Hallo / Liebe ... | Kjære ... |
| Ich möchte Sie darauf hinweisen | Ich wollte dir sagen | Jeg vil gjøre oppmerksom på |
| Mit freundlichen Grüßen | Liebe Grüße / Tschüss | Med vennlig hilsen |
| Ich wäre Ihnen dankbar | Das wäre nett | Jeg ville være takknemlig |`,
    },
    {
      id: 'tysk-2-15-2-def-1',
      type: 'definition',
      title: 'Die Bewerbung – Jobbsøknaden',
      content: `**Die Bewerbung** (jobbsøknad) på tysk består vanligvis av tre deler:\n\n1. **Das Anschreiben** (følgebrevet) – en formell tekst der du presenterer deg og forklarer hvorfor du søker\n2. **Der Lebenslauf** (CV-en) – tabellarisk oversikt over utdanning og erfaring\n3. **Die Zeugnisse** (attester/vitnemål) – kopier av relevante dokumenter\n\nDet tyske Anschreiben har en fast struktur med avsender, mottaker, dato, emne, innledning, hoveddel og avslutning.`,
    },
    {
      id: 'tysk-2-15-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Struktur for et formelt brev / Anschreiben',
      problem: `Studer strukturen til et tysk formelt brev og identifiser de ulike delene.`,
      solution: `### Struktur for et tysk formelt brev:\n\n**1. Absender** (avsender) – øverst til venstre\n*Max Müller, Hauptstraße 12, 10115 Berlin*\n\n**2. Empfänger** (mottaker) – under avsender\n*Firma Schmidt GmbH, Personalbteilung, Berliner Str. 5, 10117 Berlin*\n\n**3. Datum** (dato) – høyre side\n*Berlin, den 15. März 2026*\n\n**4. Betreff** (emne) – uthevet\n*Bewerbung als Praktikant*\n\n**5. Anrede** (tiltale)\n*Sehr geehrte Damen und Herren,* (hvis du ikke vet navnet)\n*Sehr geehrte Frau Schmidt,* (hvis du vet navnet)\n\n**6. Einleitung** (innledning) – hvorfor du skriver\n\n**7. Hauptteil** (hoveddel) – din kompetanse og motivasjon\n\n**8. Schluss** (avslutning) – forespørsel om intervju\n\n**9. Grußformel** (hilsen)\n*Mit freundlichen Grüßen*\n\n**10. Unterschrift** (underskrift)`,
    },
    {
      id: 'tysk-2-15-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken hilsen brukes vanligvis i starten av et formelt tysk brev?',
        options: [
          { id: 'a', text: 'Hallo!', isCorrect: false },
          { id: 'b', text: 'Lieber Herr Schmidt,', isCorrect: false },
          { id: 'c', text: 'Sehr geehrte Damen und Herren,', isCorrect: true },
          { id: 'd', text: 'Hi zusammen,', isCorrect: false },
        ],
        solution: '«Sehr geehrte Damen und Herren,» er den vanligste formelle tiltalen når man ikke kjenner mottakerens navn. Hvis man kjenner navnet, bruker man «Sehr geehrte Frau ...» eller «Sehr geehrter Herr ...».',
      },
    },
    {
      id: 'tysk-2-15-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken avslutningshilsen er korrekt i et formelt tysk brev?',
        options: [
          { id: 'a', text: 'Tschüss!', isCorrect: false },
          { id: 'b', text: 'Liebe Grüße', isCorrect: false },
          { id: 'c', text: 'Bis bald!', isCorrect: false },
          { id: 'd', text: 'Mit freundlichen Grüßen', isCorrect: true },
        ],
        solution: '«Mit freundlichen Grüßen» (Med vennlig hilsen) er standardhilsenen i formelle brev. «Liebe Grüße» og «Tschüss» er uformelle. «Bis bald» (Vi ses snart) er også uformelt.',
      },
    },
    {
      id: 'tysk-2-15-2-text-2',
      type: 'text',
      content: `## Die Beschwerde – Klagen

Noen ganger må man skrive en formell klage. Her er nyttige fraser:

### Innledning av en klage
- *Ich schreibe Ihnen, weil ...* – Jeg skriver til Dem fordi ...
- *Ich möchte mich über ... beschweren.* – Jeg ønsker å klage på ...
- *Leider muss ich Ihnen mitteilen, dass ...* – Dessverre må jeg meddele Dem at ...

### Beskrivelse av problemet
- *Das Problem besteht darin, dass ...* – Problemet er at ...
- *Trotz meiner Reklamation hat sich nichts geändert.* – Til tross for min reklamasjon har ingenting endret seg.

### Krav/ønske
- *Ich bitte Sie höflich, ...* – Jeg ber Dem vennligst om å ...
- *Ich erwarte eine Rückerstattung / eine Antwort.* – Jeg forventer en refusjon / et svar.
- *Ich fordere Sie auf, das Problem bis zum ... zu lösen.* – Jeg krever at problemet løses innen ...`,
    },
    {
      id: 'tysk-2-15-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør de uformelle uttrykkene formelle:',
        subTasks: [
          { label: 'a', task: '«Ich will mich beschweren.» → Gjør mer formelt.', solution: '«Ich möchte mich über ... beschweren.» eller «Ich sehe mich gezwungen, mich über ... zu beschweren.»' },
          { label: 'b', task: '«Das ist total schlecht.» → Gjør mer formelt.', solution: '«Leider entspricht das Produkt nicht meinen Erwartungen.» (Dessverre tilsvarer ikke produktet mine forventninger.)' },
          { label: 'c', task: '«Ich will mein Geld zurück.» → Gjør mer formelt.', solution: '«Ich bitte Sie höflich um eine Rückerstattung.» eller «Ich erwarte eine vollständige Rückerstattung.»' },
        ],
        solution: 'a) «Ich möchte mich über ... beschweren.»\nb) «Leider entspricht das Produkt nicht meinen Erwartungen.»\nc) «Ich bitte Sie höflich um eine Rückerstattung.»',
      },
    },
    {
      id: 'tysk-2-15-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort formelt klagebrev på tysk (80–100 ord). Du har bestilt en bok på nettet som ankom skadet. Bruk formelle fraser fra kapittelet. Inkluder: tiltale, beskrivelse av problemet, og hva du forventer.',
        solution: 'Eksempelsvar:\n\nSehr geehrte Damen und Herren,\n\nich schreibe Ihnen, weil ich am 10. Februar ein Buch bei Ihnen bestellt habe, das leider beschädigt angekommen ist. Der Einband war zerrissen und mehrere Seiten waren geknickt. Das Problem besteht darin, dass das Buch in diesem Zustand nicht lesbar ist.\n\nIch bitte Sie höflich, mir ein neues Exemplar zuzusenden oder mir eine Rückerstattung zu gewähren.\n\nMit freundlichen Grüßen\nMax Müller',
      },
    },
    {
      id: 'tysk-2-15-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke tre hoveddeler består en tysk Bewerbung av?',
        options: [
          { id: 'a', text: 'Anschreiben, Lebenslauf, Zeugnisse', isCorrect: true },
          { id: 'b', text: 'Einleitung, Hauptteil, Schluss', isCorrect: false },
          { id: 'c', text: 'Brief, E-Mail, Telefon', isCorrect: false },
          { id: 'd', text: 'Titel, Text, Unterschrift', isCorrect: false },
        ],
        solution: 'En tysk Bewerbung (jobbsøknad) består av: das Anschreiben (følgebrev), der Lebenslauf (CV) og die Zeugnisse (attester/vitnemål).',
      },
    },
    {
      id: 'tysk-2-15-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Forskjellen mellom **formelt og uformelt register** på tysk (Sie vs. du, formelle fraser)
- Strukturen til et **formelt brev** (Absender, Empfänger, Betreff, Anrede, osv.)
- Bestanddelene i en **Bewerbung** (Anschreiben, Lebenslauf, Zeugnisse)
- Hvordan man skriver en formell **Beschwerde** (klage) med høflige formuleringer
- Viktige formelle fraser og uttrykk for brevskriving`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Bewerbung', definition: 'Jobbsøknad – formell søknad om stilling' },
    { term: 'das Anschreiben', definition: 'Følgebrev – den personlige delen av en jobbsøknad' },
    { term: 'der Lebenslauf', definition: 'CV – tabellarisk oversikt over utdanning og erfaring' },
    { term: 'die Beschwerde', definition: 'Klage – formell henvendelse om et problem' },
    { term: 'Sehr geehrte Damen und Herren', definition: 'Kjære (formell tiltale når man ikke kjenner navnet)' },
    { term: 'Mit freundlichen Grüßen', definition: 'Med vennlig hilsen (formell avslutning)' },
    { term: 'der Betreff', definition: 'Emne / emnelinje i et formelt brev' },
    { term: 'die Rückerstattung', definition: 'Refusjon – tilbakebetaling av penger' },
  ],
};

// ============================================================================
// KAPITTEL 15.3: Argumentation und Erörterung
// ============================================================================

export const CHAPTER_TYSK_2_15_3: TextbookChapter = {
  id: 'tysk-2-15-3',
  courseId: 'tysk-2',
  chapterNumber: '15.3',
  title: 'Argumentation und Erörterung',
  subtitle: 'Argumentasjon og drøftende tekster',
  description: 'I dette kapittelet lærer du å bygge opp argumenter og skrive drøftende tekster (Erörterung) på tysk. Du lærer om tekststruktur, argumentasjonsteknikker og viktige konnektorer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne skrive en drøftende tekst (Erörterung) på tysk med korrekt struktur',
    'Kunne formulere og begrunne argumenter for og imot',
    'Kunne bruke konnektorer for å skape sammenheng i teksten',
  ],
  content: [
    {
      id: 'tysk-2-15-3-intro',
      type: 'text',
      content: `## Argumentation und Erörterung – Argumentasjon og drøfting

En **Erörterung** (drøftende tekst) er en av de viktigste skriftlige sjangrene i tyskundervisningen. Den handler om å diskutere et tema fra ulike sider og komme frem til en begrunnet konklusjon.

### Typer Erörterung

| Type | Beskrivelse |
|------|-------------|
| **Lineare Erörterung** | Argumenterer kun for én side |
| **Dialektische Erörterung** | Presenterer argumenter for og imot (pro und contra) |
| **Textgebundene Erörterung** | Tar utgangspunkt i en tekst som diskuteres |

### Strukturen til en dialektisk Erörterung

1. **Einleitung** (innledning) – presenterer temaet og problemstillingen
2. **Hauptteil** (hoveddel):
   - **These** (påstand) med argumenter for (pro)
   - **Antithese** (motpåstand) med argumenter imot (contra)
3. **Synthese / Schluss** (konklusjon) – veier argumentene og tar stilling`,
    },
    {
      id: 'tysk-2-15-3-def-1',
      type: 'definition',
      title: 'Argumentets oppbygning',
      content: `Et godt **argument** på tysk bygges opp slik:\n\n1. **Behauptung** (påstand) – hva du mener\n2. **Begründung** (begrunnelse) – hvorfor du mener det\n3. **Beispiel** (eksempel) – konkret eksempel som støtter påstanden\n\nDette kalles **BBB-modellen** (Behauptung – Begründung – Beispiel).\n\n*Eksempel:*\n- **Behauptung:** Schüler sollten mehr Sport treiben.\n- **Begründung:** Denn regelmäßige Bewegung ist gut für die Gesundheit und die Konzentration.\n- **Beispiel:** Studien zeigen, dass Schüler, die Sport treiben, bessere Noten haben.`,
    },
    {
      id: 'tysk-2-15-3-def-2',
      type: 'definition',
      title: 'Konnektorer i argumenterende tekster',
      content: `**Konnektorer** binder setninger og avsnitt sammen. Her er de viktigste for argumentasjon:\n\n### Legge til argumenter\n- *Außerdem / Darüber hinaus* – Dessuten\n- *Hinzu kommt, dass ...* – I tillegg kommer det at ...\n- *Ein weiterer Grund ist ...* – En annen grunn er ...\n\n### Motargumenter\n- *Andererseits / Auf der anderen Seite* – På den annen side\n- *Trotzdem / Dennoch* – Likevel\n- *Obwohl ...* – Selv om ...\n\n### Konklusjon\n- *Zusammenfassend lässt sich sagen, dass ...* – Oppsummerende kan man si at ...\n- *Abschließend bin ich der Meinung, dass ...* – Avslutningsvis mener jeg at ...\n- *Alles in allem ...* – Alt i alt ...`,
    },
    {
      id: 'tysk-2-15-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Innledning til en Erörterung',
      problem: `Temaet er: «Sollten Handys in der Schule verboten werden?» (Bør mobiltelefoner forbys på skolen?) Skriv en innledning.`,
      solution: `**Eksempel på innledning:**\n\n*In den letzten Jahren ist die Nutzung von Smartphones unter Jugendlichen stark gestiegen. Auch in der Schule sind Handys allgegenwärtig. Dies führt zu einer kontroversen Debatte: Sollten Handys in der Schule verboten werden? In dieser Erörterung werde ich Argumente für und gegen ein Handyverbot diskutieren und abschließend meine eigene Meinung darlegen.*\n\n**Oversettelse:** De siste årene har smarttelefonbruken blant ungdom økt kraftig. Også på skolen er mobiltelefoner allestedsnærværende. Dette fører til en kontroversiell debatt: Bør mobiltelefoner forbys på skolen? I denne drøftingen vil jeg diskutere argumenter for og imot mobilforbud og avslutningsvis legge frem min egen mening.`,
    },
    {
      id: 'tysk-2-15-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de tre delene av BBB-modellen for et argument?',
        options: [
          { id: 'a', text: 'Brief, Bericht, Bewerbung', isCorrect: false },
          { id: 'b', text: 'Behauptung, Begründung, Beispiel', isCorrect: true },
          { id: 'c', text: 'Betreff, Beschreibung, Bewertung', isCorrect: false },
          { id: 'd', text: 'Basis, Beleg, Beweis', isCorrect: false },
        ],
        solution: 'BBB-modellen: Behauptung (påstand), Begründung (begrunnelse), Beispiel (eksempel). Denne strukturen hjelper deg å bygge overbevisende argumenter.',
      },
    },
    {
      id: 'tysk-2-15-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken konnektor brukes for å innlede et motargument?',
        options: [
          { id: 'a', text: 'Außerdem', isCorrect: false },
          { id: 'b', text: 'Hinzu kommt', isCorrect: false },
          { id: 'c', text: 'Andererseits', isCorrect: true },
          { id: 'd', text: 'Zusammenfassend', isCorrect: false },
        ],
        solution: '«Andererseits» (på den annen side) brukes for å innlede et motargument. «Außerdem» og «Hinzu kommt» legger til argumenter, mens «Zusammenfassend» brukes i konklusjonen.',
      },
    },
    {
      id: 'tysk-2-15-3-text-2',
      type: 'text',
      content: `## Hvordan skrive gode argumenter

### Pro-argumenter (for mobilforbud)

| Konnektor | Argument |
|-----------|----------|
| *Erstens ...* | *lenken Handys die Schüler vom Unterricht ab.* |
| *Außerdem ...* | *kann Cybermobbing in der Schule reduziert werden.* |
| *Hinzu kommt, dass ...* | *die Schüler mehr miteinander sprechen, statt auf Bildschirme zu schauen.* |

### Contra-argumenter (mot mobilforbud)

| Konnektor | Argument |
|-----------|----------|
| *Andererseits ...* | *können Handys als Lernwerkzeuge genutzt werden.* |
| *Darüber hinaus ...* | *müssen die Eltern ihre Kinder in Notfällen erreichen können.* |
| *Man darf auch nicht vergessen, dass ...* | *ein Verbot die Eigenverantwortung der Schüler nicht fördert.* |`,
    },
    {
      id: 'tysk-2-15-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Formuler ett pro-argument og ett contra-argument på tysk til følgende tema: «Sollten alle Schüler eine Schuluniform tragen?» (Bør alle elever bære skoleuniform?) Bruk BBB-modellen.',
        subTasks: [
          { label: 'a', task: 'Skriv et pro-argument (for skoleuniform) med Behauptung, Begründung og Beispiel.', solution: 'Behauptung: Schuluniformen fördern die Gleichheit unter den Schülern. Begründung: Denn wenn alle die gleiche Kleidung tragen, gibt es keinen Druck, teure Markenkleidung zu kaufen. Beispiel: In Großbritannien tragen viele Schüler Schuluniformen, und Studien zeigen, dass Mobbing wegen Kleidung dort seltener vorkommt.' },
          { label: 'b', task: 'Skriv et contra-argument (mot skoleuniform) med Behauptung, Begründung og Beispiel.', solution: 'Behauptung: Schuluniformen schränken die individuelle Freiheit der Schüler ein. Begründung: Denn Kleidung ist ein wichtiger Ausdruck der Persönlichkeit. Beispiel: Jugendliche in der Pubertät entwickeln ihre Identität auch durch ihren Kleidungsstil.' },
        ],
        solution: 'Pro: Schuluniformen fördern die Gleichheit, weil es keinen Markendruck gibt. In Großbritannien zeigen Studien weniger Mobbing.\nContra: Schuluniformen schränken die Freiheit ein, weil Kleidung Persönlichkeit ausdrückt. Jugendliche entwickeln ihre Identität durch Kleidungsstil.',
      },
    },
    {
      id: 'tysk-2-15-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en konklusjon (Schluss/Synthese) på tysk (50–70 ord) for temaet «Sollten Handys in der Schule verboten werden?». Ta stilling og begrunn med henvisning til argumenter fra begge sider. Bruk minst to konnektorer.',
        solution: 'Eksempelsvar: Zusammenfassend lässt sich sagen, dass es gute Argumente sowohl für als auch gegen ein Handyverbot in der Schule gibt. Andererseits bin ich der Meinung, dass ein komplettes Verbot nicht die beste Lösung ist. Stattdessen sollten klare Regeln gelten: Handys dürfen im Unterricht nur als Lernwerkzeuge genutzt werden. Alles in allem ist eine ausgewogene Regelung besser als ein striktes Verbot.',
      },
    },
    {
      id: 'tysk-2-15-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken konnektor passer best for å oppsummere en Erörterung?',
        options: [
          { id: 'a', text: 'Erstens', isCorrect: false },
          { id: 'b', text: 'Hinzu kommt', isCorrect: false },
          { id: 'c', text: 'Trotzdem', isCorrect: false },
          { id: 'd', text: 'Zusammenfassend lässt sich sagen', isCorrect: true },
        ],
        solution: '«Zusammenfassend lässt sich sagen, dass ...» (Oppsummerende kan man si at ...) er den klassiske åpningsformelen for konklusjonen i en Erörterung.',
      },
    },
    {
      id: 'tysk-2-15-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Strukturen til en **Erörterung** (innledning, hoveddel med pro/contra, konklusjon)
- Forskjellen mellom **lineær, dialektisk og tekstbundet Erörterung**
- **BBB-modellen** for argumenter: Behauptung, Begründung, Beispiel
- Viktige **konnektorer** for å legge til argumenter, innlede motargumenter og konkludere
- Å formulere og begrunne argumenter på tysk`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Erörterung', definition: 'Drøftende tekst – sjanger der man diskuterer et tema fra flere sider' },
    { term: 'die Behauptung', definition: 'Påstand – det man hevder i et argument' },
    { term: 'die Begründung', definition: 'Begrunnelse – forklaring av hvorfor påstanden er riktig' },
    { term: 'die These', definition: 'Tese/påstand – hovedsynspunkt i en argumentasjon' },
    { term: 'die Antithese', definition: 'Antitese/motpåstand – det motsatte synspunktet' },
    { term: 'die Synthese', definition: 'Syntese/konklusjon – sammenfatning og standpunkt' },
    { term: 'andererseits', definition: 'På den annen side – konnektor for motargumenter' },
    { term: 'zusammenfassend', definition: 'Oppsummerende – konnektor for konklusjon' },
  ],
};

// ============================================================================
// KAPITTEL 15.4: Textzusammenfassung und Analyse
// ============================================================================

export const CHAPTER_TYSK_2_15_4: TextbookChapter = {
  id: 'tysk-2-15-4',
  courseId: 'tysk-2',
  chapterNumber: '15.4',
  title: 'Textzusammenfassung und Analyse',
  subtitle: 'Tekstsammendrag og analyse',
  description: 'I dette kapittelet lærer du å skrive tekstsammendrag og analysere tekster på tysk. Du lærer teknikker for å identifisere hovedideer, strukturere et sammendrag og analysere språklige virkemidler.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne skrive et presist tekstsammendrag (Zusammenfassung) på tysk',
    'Kunne analysere innhold, struktur og virkemidler i en tekst',
    'Kunne bruke fagbegreper for tekstanalyse på tysk',
  ],
  content: [
    {
      id: 'tysk-2-15-4-intro',
      type: 'text',
      content: `## Textzusammenfassung und Analyse – Sammendrag og analyse

Å oppsummere og analysere tekster er viktige ferdigheter i tyskundervisningen. En **Zusammenfassung** (sammendrag) gjengir innholdet i en tekst kort og presist, mens en **Textanalyse** (tekstanalyse) undersøker hvordan teksten er bygd opp og hvilke virkemidler forfatteren bruker.

### Viktig fagvokabular

| Tysk | Artikkel | Norsk |
|------|----------|-------|
| die Zusammenfassung, -en | die | sammendrag |
| die Textanalyse, -n | die | tekstanalyse |
| die Hauptaussage, -n | die | hovedbudskap |
| das Thema, Themen | das | tema |
| der Verfasser / die Verfasserin | der/die | forfatter |
| die Textsorte, -n | die | teksttype |
| die Quelle, -n | die | kilde |
| der Absatz, -̈e | der | avsnitt |
| die Intention, -en | die | hensikt |
| die Zielgruppe, -n | die | målgruppe |
| sachlich | – | saklig |
| subjektiv / objektiv | – | subjektiv / objektiv |`,
    },
    {
      id: 'tysk-2-15-4-def-1',
      type: 'definition',
      title: 'Die Zusammenfassung – Sammendraget',
      content: `En **Zusammenfassung** har klare regler:\n\n1. **Präsens** – skrives alltid i presens (nåtid)\n2. **Sachlich** – saklig språk, ingen personlige meninger\n3. **Indirekte Rede** – bruk indirekte tale (Konjunktiv I) for å gjengi forfatterens synspunkter\n4. **Keine Zitate** – ikke bruk direkte sitater\n5. **Eigene Worte** – skriv med egne ord, ikke kopier fra teksten\n6. **Kürzer als der Originaltext** – kortere enn originalteksten\n\n### Fast innledningsformel:\n*Der Text / Der Artikel «[Tittel]» von [Forfatter], veröffentlicht in [Kilde] am [Dato], handelt von ...*`,
    },
    {
      id: 'tysk-2-15-4-def-2',
      type: 'definition',
      title: 'Konjunktiv I i indirekte tale',
      content: `I sammendraget brukes **Konjunktiv I** for å markere indirekte tale:\n\n| Indikativ | Konjunktiv I |\n|-----------|-------------|\n| er ist | er sei |\n| er hat | er habe |\n| er kann | er könne |\n| er wird | er werde |\n| er geht | er gehe |\n\n*Eksempel:*\n- Direkte tale: *Der Autor schreibt: «Die Situation ist kritisch.»*\n- Indirekte tale: *Der Autor schreibt, die Situation sei kritisch.*\n\nKonjunktiv I viser at du gjengir noen andres mening, ikke din egen.`,
    },
    {
      id: 'tysk-2-15-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Å skrive en innledning til et sammendrag',
      problem: `Du skal oppsummere artikkelen «Jugend und Social Media» av Maria Schmidt, publisert i Die Zeit 15. januar 2026. Artikkelen handler om ungdoms bruk av sosiale medier og konsekvensene for mental helse. Skriv innledningen.`,
      solution: `**Innledning:**\n\n*Der Artikel «Jugend und Social Media» von Maria Schmidt, veröffentlicht in Die Zeit am 15. Januar 2026, thematisiert die Nutzung sozialer Medien unter Jugendlichen und deren Auswirkungen auf die psychische Gesundheit.*\n\n**Kommentar:** Innledningen inneholder:\n- Teksttype (der Artikel)\n- Tittel i anførselstegn\n- Forfatter (von Maria Schmidt)\n- Kilde og dato (veröffentlicht in Die Zeit am ...)\n- Hovedtema (thematisiert ... Nutzung sozialer Medien ...)`,
    },
    {
      id: 'tysk-2-15-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I hvilken tempus skrives en Zusammenfassung?',
        options: [
          { id: 'a', text: 'Präteritum (fortid)', isCorrect: false },
          { id: 'b', text: 'Perfekt (sammensatt fortid)', isCorrect: false },
          { id: 'c', text: 'Präsens (nåtid)', isCorrect: true },
          { id: 'd', text: 'Futur I (framtid)', isCorrect: false },
        ],
        solution: 'En Zusammenfassung skrives alltid i Präsens (nåtid), uavhengig av når originalteksten ble skrevet. Eksempel: «Der Autor beschreibt ...» (Forfatteren beskriver ...).',
      },
    },
    {
      id: 'tysk-2-15-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er Konjunktiv I av «er hat»?',
        options: [
          { id: 'a', text: 'er hätte', isCorrect: false },
          { id: 'b', text: 'er habe', isCorrect: true },
          { id: 'c', text: 'er hatte', isCorrect: false },
          { id: 'd', text: 'er haben', isCorrect: false },
        ],
        solution: 'Konjunktiv I av «er hat» er «er habe». «Er hätte» er Konjunktiv II, «er hatte» er Präteritum, og «er haben» er grammatisk ukorrekt.',
      },
    },
    {
      id: 'tysk-2-15-4-text-2',
      type: 'text',
      content: `## Textanalyse – Tekstanalyse

En tekstanalyse går dypere enn et sammendrag. Du undersøker ikke bare **hva** teksten sier, men **hvordan** den sier det.

### Analysemodell i tre trinn

**1. Inhalt** (innhold) – Hva handler teksten om?
- Tema, hovedbudskap, argumenter

**2. Aufbau / Struktur** (oppbygning) – Hvordan er teksten bygd opp?
- Avsnitt, rekkefølge, logisk struktur

**3. Sprache und Stilmittel** (språk og virkemidler) – Hvordan uttrykker forfatteren seg?
- Ordvalg, setningsstruktur, virkemidler, tone

### Nyttige formuleringer for analyse

| Tysk | Norsk |
|------|-------|
| Der Verfasser argumentiert, dass ... | Forfatteren argumenterer for at ... |
| Der Text ist in X Abschnitte gegliedert. | Teksten er delt inn i X avsnitt. |
| Der Autor verwendet die Metapher ... | Forfatteren bruker metaforen ... |
| Die Sprache ist sachlich / emotional. | Språket er saklig / følelsesladet. |
| Der Text richtet sich an ... | Teksten retter seg mot ... |
| Die Intention des Autors ist ... | Forfatterens hensikt er ... |`,
    },
    {
      id: 'tysk-2-15-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om setningene fra direkte tale til indirekte tale med Konjunktiv I:',
        subTasks: [
          { label: 'a', task: 'Der Autor schreibt: «Die Jugendlichen sind zu oft online.»', solution: 'Der Autor schreibt, die Jugendlichen seien zu oft online.' },
          { label: 'b', task: 'Die Forscherin sagt: «Social Media hat negative Folgen.»', solution: 'Die Forscherin sagt, Social Media habe negative Folgen.' },
          { label: 'c', task: 'Der Experte meint: «Man kann das Problem lösen.»', solution: 'Der Experte meint, man könne das Problem lösen.' },
        ],
        solution: 'a) Der Autor schreibt, die Jugendlichen seien zu oft online. (sind → seien)\nb) Die Forscherin sagt, Social Media habe negative Folgen. (hat → habe)\nc) Der Experte meint, man könne das Problem lösen. (kann → könne)',
      },
    },
    {
      id: 'tysk-2-15-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Kort tekstanalyse',
      problem: `Analyser følgende korte tekstutdrag:\n\n*«Jedes Jahr ertrinken Tausende von Plastiktüten unsere Ozeane. Die Meere schreien um Hilfe, aber wir hören nicht zu. Es ist höchste Zeit, dass wir handeln!»*\n\nIdentifiser: teksttype, virkemidler og tone.`,
      solution: `**Analyse:**\n\n**Teksttype:** Appellativ tekst / kommentar – teksten oppfordrer til handling.\n\n**Virkemidler:**\n- **Personifikation:** «Die Meere schreien um Hilfe» – havene roper om hjelp (hav kan ikke rope)\n- **Metapher:** «ertrinken ... unsere Ozeane» – plastposer «drukner» havene (billedlig)\n- **Hyperbel (Übertreibung):** «Tausende» – overdrivelse for effekt\n\n**Tone:** Emosjonell og appellativ. Forfatteren bruker sterke bilder og oppfordrer direkte til handling (*Es ist höchste Zeit*). Språket er subjektivt, ikke saklig.`,
    },
    {
      id: 'tysk-2-15-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv innledningen til et sammendrag og en kort analysekommentar (totalt 60–80 ord på tysk) for følgende informasjon:\n\n- Artikkel: «Klimawandel und die Jugend»\n- Forfatter: Thomas Weber\n- Kilde: Der Spiegel, 20. mars 2026\n- Tema: Unge menneskers engasjement for klimaet\n- Forfatteren bruker emosjonelt språk og mange metaforer',
        solution: 'Eksempelsvar: Der Artikel «Klimawandel und die Jugend» von Thomas Weber, veröffentlicht im Spiegel am 20. März 2026, thematisiert das Engagement junger Menschen für den Klimaschutz. Der Autor argumentiert, die Jugend sei die treibende Kraft im Kampf gegen den Klimawandel. Sprachlich fällt auf, dass Weber einen emotionalen Stil verwendet und zahlreiche Metaphern einsetzt, um seine Leser zu überzeugen.',
      },
    },
    {
      id: 'tysk-2-15-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-15-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilke tre trinn inngår i en tekstanalyse?',
        options: [
          { id: 'a', text: 'Lesen, Schreiben, Sprechen', isCorrect: false },
          { id: 'b', text: 'Einleitung, Hauptteil, Schluss', isCorrect: false },
          { id: 'c', text: 'Inhalt, Aufbau, Sprache und Stilmittel', isCorrect: true },
          { id: 'd', text: 'These, Antithese, Synthese', isCorrect: false },
        ],
        solution: 'De tre trinnene i en tekstanalyse er: Inhalt (innhold – hva teksten handler om), Aufbau (oppbygning – hvordan teksten er strukturert) og Sprache und Stilmittel (språk og virkemidler – hvordan forfatteren uttrykker seg).',
      },
    },
    {
      id: 'tysk-2-15-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Reglene for å skrive en **Zusammenfassung** (presens, saklig, egne ord, ingen sitater)
- Den faste **innledningsformelen** for sammendrag
- **Konjunktiv I** for indirekte tale (sei, habe, könne, werde)
- **Tekstanalyse i tre trinn**: Inhalt, Aufbau, Sprache und Stilmittel
- Fagbegreper og formuleringer for å analysere tekster på tysk
- Å identifisere forfatterens **Intention** (hensikt) og **Zielgruppe** (målgruppe)`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Zusammenfassung', definition: 'Sammendrag – kort gjengivelse av en teksts innhold' },
    { term: 'die Textanalyse', definition: 'Tekstanalyse – undersøkelse av innhold, struktur og virkemidler' },
    { term: 'die Hauptaussage', definition: 'Hovedbudskap – det viktigste budskapet i en tekst' },
    { term: 'der Konjunktiv I', definition: 'Konjunktiv I – verbform for indirekte tale (sei, habe, könne)' },
    { term: 'die Intention', definition: 'Hensikt – hva forfatteren ønsker å oppnå med teksten' },
    { term: 'die Zielgruppe', definition: 'Målgruppe – hvem teksten retter seg mot' },
    { term: 'der Verfasser', definition: 'Forfatter – den som har skrevet teksten' },
    { term: 'sachlich', definition: 'Saklig – nøytral og objektiv i tonen' },
  ],
};

// ============================================================================
// KAPITTEL 16.1: Grammatik-Wiederholung
// ============================================================================

export const CHAPTER_TYSK_2_16_1: TextbookChapter = {
  id: 'tysk-2-16-1',
  courseId: 'tysk-2',
  chapterNumber: '16.1',
  title: 'Grammatik-Wiederholung',
  subtitle: 'Grammatikkrepetisjon',
  description: 'I dette kapittelet repeterer vi alle sentrale grammatiske emner fra Tysk 2: Perfekt, Präteritum, Konjunktiv II, Passiv, Relativsätze og Adjektivdeklination. Du får oversiktlige tabeller og øvelser for å befeste kunnskapen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne bøye verb i Perfekt, Präteritum, Konjunktiv II og Passiv',
    'Kunne danne og bruke relativsetninger korrekt',
    'Kunne bøye adjektiver etter bestemt og ubestemt artikkel',
    'Kunne anvende grammatiske strukturer i sammenhengende tekst',
  ],
  content: [
    {
      id: 'tysk-2-16-1-intro',
      type: 'text',
      content: `## Grammatik-Wiederholung – Grammatikkrepetisjon

I løpet av Tysk 2 har du lært mange viktige grammatiske strukturer. Dette kapittelet gir deg en samlet oversikt over de viktigste emnene, med tabeller og eksempler. Bruk det som et oppslagsverk og for repetisjon før prøver og eksamen.

### Oversikt over grammatiske emner

| Emne | Tysk | Eksempel |
|------|------|----------|
| Perfekt | das Perfekt | Ich **habe** gelesen. |
| Preteritum | das Präteritum | Ich **las** ein Buch. |
| Konjunktiv II | der Konjunktiv II | Ich **würde** gern reisen. |
| Passiv | das Passiv | Das Buch **wird** gelesen. |
| Relativsetninger | die Relativsätze | Das Buch, **das** ich lese, ... |
| Adjektivbøyning | die Adjektivdeklination | ein gut**es** Buch |`,
    },
    {
      id: 'tysk-2-16-1-def-1',
      type: 'definition',
      title: 'Perfekt og Präteritum',
      content: `**Das Perfekt** (perfektum) er den vanligste fortidsformen i muntlig tysk. Den dannes med **haben/sein** + **Partizip II**:\n\n| Person | haben + Partizip II | sein + Partizip II |\n|--------|---------------------|--------------------|\n| ich | habe gemacht | bin gefahren |\n| du | hast gemacht | bist gefahren |\n| er/sie/es | hat gemacht | ist gefahren |\n| wir | haben gemacht | sind gefahren |\n| ihr | habt gemacht | seid gefahren |\n| sie/Sie | haben gemacht | sind gefahren |\n\n**Das Präteritum** (preteritum) brukes mest i skriftlig tysk og med modalverb/haben/sein:\n\n| Infinitiv | Präteritum | Norsk |\n|-----------|-----------|-------|\n| sein | war | var |\n| haben | hatte | hadde |\n| können | konnte | kunne |\n| müssen | musste | måtte |\n| gehen | ging | gikk |\n| kommen | kam | kom |`,
    },
    {
      id: 'tysk-2-16-1-def-2',
      type: 'definition',
      title: 'Konjunktiv II',
      content: `**Der Konjunktiv II** brukes for å uttrykke ønsker, høflighet og irreale situasjoner:\n\n**Dannelse:** würde + infinitiv (vanligst) ELLER egne former for vanlige verb:\n\n| Infinitiv | Konjunktiv II | Norsk |\n|-----------|--------------|-------|\n| sein | wäre | ville vært |\n| haben | hätte | ville hatt |\n| können | könnte | kunne (hypotetisk) |\n| müssen | müsste | ville måtte |\n| gehen | ginge / würde gehen | ville gått |\n| kommen | käme / würde kommen | ville kommet |\n\n**Bruksområder:**\n- Ønsker: *Ich **wäre** gern in Berlin.*\n- Høflighet: ***Könnten** Sie mir helfen?*\n- Irreale betingelser: *Wenn ich reich **wäre**, **würde** ich reisen.*`,
    },
    {
      id: 'tysk-2-16-1-def-3',
      type: 'definition',
      title: 'Passiv (Vorgangspassiv)',
      content: `**Das Passiv** (passiv) brukes når handlingen er viktigere enn den som utfører den. Det dannes med **werden** + **Partizip II**:\n\n| Tempus | Eksempel | Norsk |\n|--------|----------|-------|\n| Präsens | Das Buch **wird** gelesen. | Boken blir lest. |\n| Präteritum | Das Buch **wurde** gelesen. | Boken ble lest. |\n| Perfekt | Das Buch **ist** gelesen **worden**. | Boken har blitt lest. |\n\n**Aktiv → Passiv:**\n- Aktiv: *Der Lehrer korrigiert die Arbeit.*\n- Passiv: *Die Arbeit **wird** (vom Lehrer) korrigiert.*\n\nMerk: Subjektet i aktiv blir til «von + dativ» i passiv.`,
    },
    {
      id: 'tysk-2-16-1-text-2',
      type: 'text',
      content: `## Relativsätze und Adjektivdeklination

### Relativsetninger (Relativsätze)

Relativsetninger gir tilleggsinformasjon om et substantiv. Relativpronomenet retter seg etter **genus og numerus** fra substantivet, men **kasus** bestemmes av rollen i bisetningen:

| Kasus | Maskulin | Feminin | Nøytrum | Plural |
|-------|----------|---------|---------|--------|
| Nominativ | der | die | das | die |
| Akkusativ | den | die | das | die |
| Dativ | dem | der | dem | denen |
| Genitiv | dessen | deren | dessen | deren |

*Eksempler:*
- Nom: *Der Mann, **der** dort steht, ist mein Lehrer.*
- Akk: *Das Buch, **das** ich lese, ist spannend.*
- Dat: *Die Frau, **der** ich geholfen habe, war nett.*

### Adjektivdeklination

| | Bestemt artikkel | Ubestemt artikkel | Uten artikkel |
|---|---|---|---|
| Nom. mask. | der alt**e** Mann | ein alt**er** Mann | alt**er** Mann |
| Akk. mask. | den alt**en** Mann | einen alt**en** Mann | alt**en** Mann |
| Dat. mask. | dem alt**en** Mann | einem alt**en** Mann | alt**em** Mann |
| Nom. fem. | die alt**e** Frau | eine alt**e** Frau | alt**e** Frau |
| Nom. nøyt. | das alt**e** Kind | ein alt**es** Kind | alt**es** Kind |`,
    },
    {
      id: 'tysk-2-16-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Verb i ulike tidsformer',
      problem: `Sett verbet «schreiben» i riktig form:\n\na) Perfekt: Ich ______ einen Brief ______. (skrive)\nb) Präteritum: Er ______ einen Roman. (skrive)\nc) Passiv Präsens: Der Brief ______ ______. (bli skrevet)\nd) Konjunktiv II: Ich ______ gern ein Buch ______. (ville skrive)`,
      solution: `a) Ich **habe** einen Brief **geschrieben**. (Perfekt: haben + Partizip II)\nb) Er **schrieb** einen Roman. (Präteritum av schreiben)\nc) Der Brief **wird geschrieben**. (Passiv: werden + Partizip II)\nd) Ich **würde** gern ein Buch **schreiben**. (Konjunktiv II: würde + Infinitiv)`,
    },
    {
      id: 'tysk-2-16-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning er korrekt Perfekt?',
        options: [
          { id: 'a', text: 'Ich bin ein Buch gelesen.', isCorrect: false },
          { id: 'b', text: 'Ich habe ein Buch gelesen.', isCorrect: true },
          { id: 'c', text: 'Ich habe ein Buch lesen.', isCorrect: false },
          { id: 'd', text: 'Ich hat ein Buch gelesen.', isCorrect: false },
        ],
        solution: '«Lesen» danner Perfekt med «haben»: Ich habe gelesen. Alternativ a) er feil fordi «lesen» ikke bruker «sein». Alternativ c) mangler Partizip II, og d) har feil bøyning av «haben».',
      },
    },
    {
      id: 'tysk-2-16-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken Konjunktiv II-form er korrekt for «Wenn ich Zeit ______, ______ ich ins Kino gehen»?',
        options: [
          { id: 'a', text: 'hätte ... würde', isCorrect: true },
          { id: 'b', text: 'habe ... werde', isCorrect: false },
          { id: 'c', text: 'hatte ... wurde', isCorrect: false },
          { id: 'd', text: 'hat ... wird', isCorrect: false },
        ],
        solution: 'Irreale betingelsessetninger bruker Konjunktiv II: «Wenn ich Zeit hätte, würde ich ins Kino gehen.» Alternativ b) er Indikativ Präsens, c) er Präteritum, og d) er Indikativ Präsens 3. person.',
      },
    },
    {
      id: 'tysk-2-16-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om setningene fra aktiv til passiv (Präsens):',
        subTasks: [
          { label: 'a', task: 'Der Schüler schreibt den Aufsatz.', solution: 'Der Aufsatz wird (vom Schüler) geschrieben.' },
          { label: 'b', task: 'Die Lehrerin korrigiert die Tests.', solution: 'Die Tests werden (von der Lehrerin) korrigiert.' },
          { label: 'c', task: 'Man spricht hier Deutsch.', solution: 'Hier wird Deutsch gesprochen.' },
        ],
        solution: 'a) Der Aufsatz wird (vom Schüler) geschrieben.\nb) Die Tests werden (von der Lehrerin) korrigiert.\nc) Hier wird Deutsch gesprochen. (Med «man» som subjekt faller agens bort i passiv.)',
      },
    },
    {
      id: 'tysk-2-16-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig relativpronomen:',
        subTasks: [
          { label: 'a', task: 'Der Film, ______ wir gesehen haben, war gut. (maskulin, akkusativ)', solution: 'den' },
          { label: 'b', task: 'Die Stadt, in ______ ich wohne, ist klein. (feminin, dativ)', solution: 'der' },
          { label: 'c', task: 'Das Kind, ______ dort spielt, ist mein Bruder. (nøytrum, nominativ)', solution: 'das' },
          { label: 'd', task: 'Die Leute, ______ ich geholfen habe, waren dankbar. (plural, dativ)', solution: 'denen' },
        ],
        solution: 'a) den (maskulin akkusativ)\nb) der (feminin dativ)\nc) das (nøytrum nominativ)\nd) denen (plural dativ)',
      },
    },
    {
      id: 'tysk-2-16-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst (60–80 ord) på tysk der du beskriver en drømmeferie. Bruk minst ett eksempel på hvert av følgende: Konjunktiv II, en relativsetning og en passivkonstruksjon.',
        solution: 'Eksempelsvar: Wenn ich genug Geld hätte, würde ich nach Japan reisen. Tokio, das die größte Stadt der Welt ist, fasziniert mich besonders. Dort könnte ich die Kirschblüte erleben, die von vielen Touristen bewundert wird. In traditionellen Tempeln, denen eine lange Geschichte zugeschrieben wird, würde ich die japanische Kultur kennenlernen. Es wäre ein unvergessliches Erlebnis.',
      },
    },
    {
      id: 'tysk-2-16-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du repetert:

- **Perfekt**: haben/sein + Partizip II (muntlig fortid)
- **Präteritum**: egne fortidsformer (skriftlig fortid, modalverb)
- **Konjunktiv II**: wäre, hätte, könnte, würde + Infinitiv (ønsker, høflighet, irreale situasjoner)
- **Passiv**: werden + Partizip II (handlingen i fokus)
- **Relativsetninger**: relativpronomen bøyes etter genus/numerus fra substantivet og kasus fra bisetningen
- **Adjektivdeklination**: endelsene avhenger av artikkeltype (bestemt, ubestemt, uten)`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'das Perfekt', definition: 'Perfektum – sammensatt fortid med haben/sein + Partizip II' },
    { term: 'das Präteritum', definition: 'Preteritum – enkel fortid, vanligst i skriftlig tysk' },
    { term: 'der Konjunktiv II', definition: 'Konjunktiv II – verbform for ønsker, høflighet og irreale situasjoner' },
    { term: 'das Passiv', definition: 'Passiv – setningsform der handlingen er i fokus, ikke den som utfører den' },
    { term: 'der Relativsatz', definition: 'Relativsetning – bisetning som gir tilleggsinformasjon om et substantiv' },
    { term: 'die Adjektivdeklination', definition: 'Adjektivbøyning – endelsen avhenger av artikkeltype, kasus og genus' },
    { term: 'das Partizip II', definition: 'Perfektum partisipp – verbform brukt i Perfekt og Passiv (z.B. gemacht, geschrieben)' },
    { term: 'das Relativpronomen', definition: 'Relativpronomen – der, die, das osv. som innleder en relativsetning' },
  ],
};

// ============================================================================
// KAPITTEL 16.2: Wortschatz-Wiederholung
// ============================================================================

export const CHAPTER_TYSK_2_16_2: TextbookChapter = {
  id: 'tysk-2-16-2',
  courseId: 'tysk-2',
  chapterNumber: '16.2',
  title: 'Wortschatz-Wiederholung',
  subtitle: 'Ordforrådsrepetisjon',
  description: 'I dette kapittelet repeterer vi det tematiske ordforrådet fra hele Tysk 2. Du får oversikt over ordsamlinger fra alle emner, lærer om ordfamilier og sammensatte ord, og trener på å bruke ordforrådet aktivt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne bruke tematisk ordforråd fra alle kapitler i Tysk 2 aktivt',
    'Kunne gjenkjenne og danne ordfamilier (Wortfamilien) på tysk',
    'Kunne forstå og danne sammensatte ord (Komposita)',
    'Kunne anvende ordlæringsstrategier effektivt',
  ],
  content: [
    {
      id: 'tysk-2-16-2-intro',
      type: 'text',
      content: `## Wortschatz-Wiederholung – Ordforrådsrepetisjon

Et rikt ordforråd er nøkkelen til god kommunikasjon. I Tysk 2 har du lært ord innenfor mange temaer. Her får du en samlet oversikt og strategier for å jobbe videre med ordforrådet.

### Tematisk ordforråd – oversikt

| Tema (Thema) | Eksempler på nøkkelord |
|--------------|----------------------|
| Identität & Zugehörigkeit | die Heimat, die Herkunft, sich identifizieren |
| Migration & Integration | der Flüchtling, die Aufenthaltserlaubnis, einwandern |
| Gesellschaft & Werte | die Gleichberechtigung, das Vorurteil, der Respekt |
| Medien & Kommunikation | die Berichterstattung, die Quelle, verbreiten |
| Kultur & Literatur | der Verfasser, die Metapher, das Stilmittel |
| Umwelt & Nachhaltigkeit | der Klimawandel, die Ressource, nachhaltig |
| Bildung & Beruf | die Ausbildung, das Studium, die Bewerbung |
| Gesundheit & Wohlbefinden | das Wohlbefinden, die Ernährung, sich erholen |`,
    },
    {
      id: 'tysk-2-16-2-def-1',
      type: 'definition',
      title: 'Wortfamilien (Ordfamilier)',
      content: `En **Wortfamilie** (ordfamilie) er en gruppe ord som deler samme rot. Å lære ordfamilier er en effektiv strategi fordi du kan utlede betydningen av ukjente ord:\n\n**Eksempel: Rot «fahr-» (kjøre/reise)**\n| Ord | Ordklasse | Norsk |\n|-----|----------|-------|\n| fahren | verb | å kjøre |\n| der Fahrer | substantiv | sjåfør |\n| die Fahrt | substantiv | tur, reise |\n| die Erfahrung | substantiv | erfaring |\n| erfahren | adjektiv | erfaren |\n| die Abfahrt | substantiv | avreise |\n| das Fahrzeug | substantiv | kjøretøy |\n\n**Eksempel: Rot «sprech-/sprach-» (snakke)**\n| Ord | Ordklasse | Norsk |\n|-----|----------|-------|\n| sprechen | verb | å snakke |\n| die Sprache | substantiv | språk |\n| der Sprecher | substantiv | taler |\n| die Aussprache | substantiv | uttale |\n| besprechen | verb | å diskutere |\n| die Besprechung | substantiv | møte, diskusjon |\n| mehrsprachig | adjektiv | flerspråklig |`,
    },
    {
      id: 'tysk-2-16-2-def-2',
      type: 'definition',
      title: 'Komposita (Sammensatte ord)',
      content: `Tysk er kjent for lange sammensatte ord (**Komposita**). Det siste ordet bestemmer artikkel og betydning:\n\n**Grunnregel:** Bestemmelsesord + Grunnord = Kompositum\n\n| Bestemmelsesord | Grunnord | Kompositum | Norsk |\n|-----------------|----------|------------|-------|\n| die Umwelt | der Schutz | der Umwelt**schutz** | miljøvern |\n| das Klima | die Veränderung | die Klima**veränderung** | klimaendring |\n| die Arbeit | der Geber | der Arbeit**geber** | arbeidsgiver |\n| die Arbeit | der Nehmer | der Arbeit**nehmer** | arbeidstaker |\n| die Sprach | die Barriere | die Sprach**barriere** | språkbarriere |\n| das Wort | der Schatz | der Wort**schatz** | ordforråd |\n\n**Fugen-s:** Noen ganger trengs en bindebokstav: *die Arbeit**s**losigkeit* (arbeidsledighet), *die Bildung**s**politik* (utdanningspolitikk).`,
    },
    {
      id: 'tysk-2-16-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Ordfamilie og avledning',
      problem: `Gitt roten «wohn-» (bo), fyll ut tabellen:\n\na) å bo = ______\nb) bolig = die ______\nc) beboer (mann) = der ______\nd) hjemløs = ______\ne) leilighet = die ______`,
      solution: `a) å bo = **wohnen**\nb) bolig = die **Wohnung**\nc) beboer = der **Bewohner**\nd) hjemløs = **obdachlos** (her brukes et annet ord, men «wohnungslos» finnes også)\ne) leilighet = die **Wohnung** (kan også spesifiseres: die Mietwohnung = leieleilighet, die Eigentumswohnung = selveier)\n\nMerk: Fra «wohnen» kan vi også danne *der Wohnort* (bosted), *das Wohnzimmer* (stue), *die Wohngemeinschaft/WG* (bokollektiv).`,
    },
    {
      id: 'tysk-2-16-2-text-2',
      type: 'text',
      content: `## Strategier for ordlæring

### 1. Ordbok og kontekst
Lær alltid nye ord **med artikkel og flertall**: *der Freund, -e* (ikke bare «Freund»).

### 2. Ordfamilier
Grupper ord med samme rot. Når du lærer «fahren», legg til «die Fahrt», «der Fahrer», «das Fahrzeug» osv.

### 3. Mind-maps
Lag tankekart rundt et tema. Sett hovedtemaet i midten og legg til relaterte ord i grener.

### 4. Setningskontekst
Lær ord i setninger, ikke isolert: *«Die Umwelt muss geschützt werden»* er bedre enn bare *«die Umwelt = miljø»*.

### 5. Regelmessig repetisjon
Bruk **Karteikarten** (flashcards) med intervallrepetisjon. Repeter nye ord etter 1 dag, 3 dager, 1 uke og 1 måned.

### 6. Aktiv bruk
Skriv dagbok på tysk, snakk med medelever, les tyske tekster. Passivt ordforråd blir aktivt gjennom bruk.`,
    },
    {
      id: 'tysk-2-16-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket ord hører IKKE til ordfamilien «schreiben»?',
        options: [
          { id: 'a', text: 'die Schrift', isCorrect: false },
          { id: 'b', text: 'der Schriftsteller', isCorrect: false },
          { id: 'c', text: 'die Beschreibung', isCorrect: false },
          { id: 'd', text: 'der Schreibtisch', isCorrect: false },
        ],
        solution: 'Alle fire ordene hører faktisk til ordfamilien «schreiben»: die Schrift (skrift), der Schriftsteller (forfatter), die Beschreibung (beskrivelse), der Schreibtisch (skrivebord). Dette var et lurespørsmål – alle tilhører samme ordfamilie!',
      },
    },
    {
      id: 'tysk-2-16-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr det sammensatte ordet «die Aufenthaltserlaubnis»?',
        options: [
          { id: 'a', text: 'Reisetillatelse', isCorrect: false },
          { id: 'b', text: 'Oppholdstillatelse', isCorrect: true },
          { id: 'c', text: 'Arbeidstillatelse', isCorrect: false },
          { id: 'd', text: 'Kjøretillatelse', isCorrect: false },
        ],
        solution: '«Die Aufenthaltserlaubnis» = der Aufenthalt (opphold) + die Erlaubnis (tillatelse) = oppholdstillatelse. «Die Arbeitserlaubnis» er arbeidstillatelse og «die Fahrerlaubnis» er kjøretillatelse.',
      },
    },
    {
      id: 'tysk-2-16-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag sammensatte ord (Komposita) av ordparene og oppgi norsk oversettelse:',
        subTasks: [
          { label: 'a', task: 'die Umwelt + der Schutz', solution: 'der Umweltschutz – miljøvern' },
          { label: 'b', task: 'die Mutter + die Sprache', solution: 'die Muttersprache – morsmål' },
          { label: 'c', task: 'das Wort + der Schatz', solution: 'der Wortschatz – ordforråd' },
          { label: 'd', task: 'die Zukunft + die Angst', solution: 'die Zukunftsangst – fremtidsangst (merk Fugen-s!)' },
        ],
        solution: 'a) der Umweltschutz (miljøvern)\nb) die Muttersprache (morsmål)\nc) der Wortschatz (ordforråd)\nd) die Zukunftsangst (fremtidsangst – merk bindebokstaven -s-)',
      },
    },
    {
      id: 'tysk-2-16-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv ordfamilien til roten «lern-/lehr-» (lære). Finn minst 5 ord med norsk oversettelse.',
        solution: 'Eksempelsvar:\n1. lernen – å lære (elev)\n2. der Lerner / die Lernerin – den som lærer\n3. der Lehrer / die Lehrerin – lærer\n4. die Lehre – lære, lærdom\n5. der Lehrling – lærling\n6. das Lehrwerk – læreverk\n7. der Lehrplan – læreplan\n8. gelehrt – lærd\n9. das Lernmittel – læremiddel\n10. die Lernstrategie – læringsstrategi',
      },
    },
    {
      id: 'tysk-2-16-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag et tankekart (Mind-Map) på tysk rundt temaet «die Bildung» (utdanning). Skriv minst 12 relaterte ord med norsk oversettelse, organisert i 3–4 undertemaer.',
        solution: 'Eksempelsvar – tankekart rundt «die Bildung»:\n\n**Schule (Skole):** die Grundschule (barneskole), das Gymnasium (videregående), die Klasse (klasse), die Prüfung (prøve), das Zeugnis (vitnemål)\n\n**Universität (Universitet):** das Studium (studium), der Student (student), die Vorlesung (forelesning), die Hausarbeit (semesteroppgave)\n\n**Beruf (Yrke):** die Ausbildung (yrkesutdanning), der Lehrling (lærling), die Bewerbung (jobbsøknad), der Abschluss (avgangseksamen)\n\n**Lernen (Læring):** die Lernstrategie (læringsstrategi), die Nachhilfe (privatundervisning), die Weiterbildung (etterutdanning)',
      },
    },
    {
      id: 'tysk-2-16-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du repetert:

- **Tematisk ordforråd** fra alle emnene i Tysk 2
- **Wortfamilien** (ordfamilier) – å gruppere ord med felles rot for å utvide ordforrådet
- **Komposita** (sammensatte ord) – grunnordet bestemmer artikkel, bindebokstaver (Fugen-s)
- **Ordlæringsstrategier**: artikkel + flertall, ordfamilier, Mind-Maps, setningskontekst, intervallrepetisjon, aktiv bruk`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'der Wortschatz', definition: 'Ordforråd – samlingen av ord man kan' },
    { term: 'die Wortfamilie', definition: 'Ordfamilie – gruppe ord med felles rot (fahren, Fahrer, Fahrt)' },
    { term: 'das Kompositum (Komposita)', definition: 'Sammensatt ord – to eller flere ord satt sammen (Umweltschutz)' },
    { term: 'das Grundwort', definition: 'Grunnord – det siste ordet i et kompositum, bestemmer artikkel' },
    { term: 'das Bestimmungswort', definition: 'Bestemmelsesord – det første ordet i et kompositum, presiserer betydningen' },
    { term: 'das Fugen-s', definition: 'Bindebokstav -s- mellom ord i sammensatte ord (Arbeit-s-losigkeit)' },
    { term: 'die Lernstrategie', definition: 'Læringsstrategi – metode for effektiv ordlæring' },
    { term: 'die Karteikarte', definition: 'Flashcard/ordkort – kort med ord på ene siden og oversettelse på andre' },
  ],
};

// ============================================================================
// KAPITTEL 16.3: Textarbeit und Strategien
// ============================================================================

export const CHAPTER_TYSK_2_16_3: TextbookChapter = {
  id: 'tysk-2-16-3',
  courseId: 'tysk-2',
  chapterNumber: '16.3',
  title: 'Textarbeit und Strategien',
  subtitle: 'Tekstarbeid og strategier',
  description: 'I dette kapittelet lærer du strategier for lesing, lytting og skriving på tysk. Du får konkrete teknikker for å forstå tekster bedre, oppfatte mer i lyttesituasjoner og strukturere egne tekster effektivt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne anvende lesestrategier for å forstå tyske tekster på ulike nivåer',
    'Kunne bruke lyttestrategier for å oppfatte nøkkelinformasjon i muntlig tysk',
    'Kunne planlegge og strukturere skriftlige tekster på tysk',
    'Kunne reflektere over egne læringsstrategier og tilpasse dem',
  ],
  content: [
    {
      id: 'tysk-2-16-3-intro',
      type: 'text',
      content: `## Textarbeit und Strategien – Tekstarbeid og strategier

Gode strategier gjør forskjellen mellom å slite med en tekst og å mestre den. I dette kapittelet får du konkrete verktøy for de tre hovedferdighetene: **Lesen** (lesing), **Hören** (lytting) og **Schreiben** (skriving).

### Oversikt over strategityper

| Ferdighet | Tysk | Nøkkelstrategier |
|-----------|------|-----------------|
| Lesing | Lesestrategien | Skumlesing, nærlesing, kontekstgjetting |
| Lytting | Hörstrategien | Forhåndskunnskap, nøkkelord, notater |
| Skriving | Schreibstrategien | Planlegging, strukturering, revisjon |`,
    },
    {
      id: 'tysk-2-16-3-def-1',
      type: 'definition',
      title: 'Lesestrategier (Lesestrategien)',
      content: `**Tre lesenivåer:**\n\n**1. Globales Lesen (skumlesing)**\n- Mål: Forstå hovedtemaet raskt\n- Teknikk: Les overskrift, første og siste avsnitt, uthevede ord\n- Spørsmål: *Worum geht es im Text?* (Hva handler teksten om?)\n\n**2. Selektives Lesen (selektiv lesing)**\n- Mål: Finne spesifikk informasjon\n- Teknikk: Skann teksten etter nøkkelord, tall, navn\n- Spørsmål: *Wo steht die Antwort auf meine Frage?* (Hvor står svaret?)\n\n**3. Detailliertes Lesen (nærlesing)**\n- Mål: Forstå alle detaljer\n- Teknikk: Les sakte, slå opp ukjente ord, analyser setningsstruktur\n- Spørsmål: *Was genau bedeutet dieser Satz?* (Hva betyr denne setningen nøyaktig?)\n\n**Kontekstgjetting:** Ikke slå opp hvert ukjente ord! Bruk konteksten: *«Die Abholzung der Regenwälder ist ein großes Problem.»* Selv om du ikke kjenner «Abholzung», kan «Regenwälder» (regnskog) og «Problem» hjelpe deg å forstå at det handler om avskoging.`,
    },
    {
      id: 'tysk-2-16-3-def-2',
      type: 'definition',
      title: 'Lyttestrategier (Hörstrategien)',
      content: `**Før lytting (Vor dem Hören):**\n- Aktiver forhåndskunnskap om temaet\n- Les oppgavene nøye – vet hva du lytter etter\n- Forutsi mulige svar basert på spørsmålene\n\n**Under lytting (Während des Hörens):**\n- Fokuser på **nøkkelord** (Schlüsselwörter), ikke hvert enkelt ord\n- Lytt etter **signalord**: *erstens, zweitens, außerdem, aber, trotzdem*\n- Skriv korte notater – stikkord, ikke hele setninger\n- Ikke panikk hvis du ikke forstår alt – fokuser på helheten\n\n**Etter lytting (Nach dem Hören):**\n- Sjekk notatene dine og fyll ut det du husker\n- Ved andre gangs lytting: fokuser på det du ikke fikk med første gang\n\n**Tips:** Tren lytteforståelse regelmessig med podcaster, nyheter (z.B. Deutsche Welle), filmer og musikk på tysk.`,
    },
    {
      id: 'tysk-2-16-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Lesestrategi i praksis',
      problem: `Bruk de tre lesenivåene på følgende tekst:\n\n*«Immer mehr Jugendliche in Deutschland engagieren sich für den Umweltschutz. Laut einer aktuellen Studie des Bundesumweltministeriums geben 67 Prozent der 14- bis 24-Jährigen an, dass ihnen Nachhaltigkeit wichtig sei. Besonders das Thema Klimawandel mobilisiert die junge Generation. Viele nehmen an Demonstrationen teil oder ändern ihren Lebensstil.»*\n\na) Globales Lesen: Hva er hovedtemaet?\nb) Selektives Lesen: Hvor mange prosent synes bærekraft er viktig?\nc) Detailliertes Lesen: Hva er kilden til statistikken?`,
      solution: `a) **Globales Lesen:** Hovedtemaet er ungdoms engasjement for miljøvern i Tyskland.\n\nb) **Selektives Lesen:** **67 Prozent** (67 %) av de 14–24 år gamle sier at bærekraft er viktig for dem.\n\nc) **Detailliertes Lesen:** Kilden er *eine aktuelle Studie des **Bundesumweltministeriums*** (en aktuell studie fra det føderale miljødepartementet).\n\n**Kommentar:** Legg merke til at du på nivå a) bare trenger å lese overskrift og første setning. På nivå b) skanner du etter tall. På nivå c) leser du nøye og identifiserer spesifikke detaljer.`,
    },
    {
      id: 'tysk-2-16-3-text-2',
      type: 'text',
      content: `## Schreibstrategien – Skrivestrategier

### Skriveprosessen i fire trinn

**1. Planung (Planlegging)**
- Bestem teksttype: brev, Erörterung, sammendrag, fortelling?
- Samle ideer: brainstorm, stikkord, tankekart
- Lag en disposisjon med innledning, hoveddel og avslutning

**2. Entwurf (Utkast)**
- Skriv sammenhengende uten å stoppe for å rette feil
- Følg disposisjonen, men vær fleksibel
- Bruk variert setningsstruktur og konnektorer

**3. Überarbeitung (Revisjon)**
- Les teksten høyt – høres den bra ut?
- Sjekk: Har du svart på oppgaven? Er strukturen logisk?
- Varier ordvalget – unngå gjentakelser

**4. Korrektur (Korrekturlesing)**
- Sjekk grammatikk: verb-endelser, kasus, ordstilling
- Sjekk rettskrivning: stor/liten bokstav, Umlauter, ss/ß
- Sjekk tegnsetting: komma foran bisetninger!

### Nyttige konnektorer for skriving

| Funksjon | Konnektorer |
|----------|------------|
| Legge til | außerdem, darüber hinaus, hinzu kommt |
| Motsetning | jedoch, allerdings, andererseits, trotzdem |
| Årsak | denn, weil, da, nämlich |
| Følge | deshalb, daher, folglich, infolgedessen |
| Oppsummering | zusammenfassend, insgesamt, alles in allem |`,
    },
    {
      id: 'tysk-2-16-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken lesestrategi bruker du for å finne et spesifikt årstall i en tekst?',
        options: [
          { id: 'a', text: 'Globales Lesen (skumlesing)', isCorrect: false },
          { id: 'b', text: 'Selektives Lesen (selektiv lesing)', isCorrect: true },
          { id: 'c', text: 'Detailliertes Lesen (nærlesing)', isCorrect: false },
          { id: 'd', text: 'Kreatives Lesen (kreativ lesing)', isCorrect: false },
        ],
        solution: 'Selektives Lesen brukes for å finne spesifikk informasjon som tall, navn eller datoer. Du skanner teksten etter det du leter etter uten å lese alt nøye.',
      },
    },
    {
      id: 'tysk-2-16-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva bør du gjøre FØR du lytter til en tysk tekst?',
        options: [
          { id: 'a', text: 'Skrive et sammendrag av det du forventer å høre', isCorrect: false },
          { id: 'b', text: 'Lese oppgavene nøye og aktivere forhåndskunnskap', isCorrect: true },
          { id: 'c', text: 'Slå opp alle mulige ord i ordboken', isCorrect: false },
          { id: 'd', text: 'Øve på å skrive Konjunktiv II', isCorrect: false },
        ],
        solution: 'Før lytting bør du lese oppgavene nøye slik at du vet hva du skal lytte etter, og aktivere forhåndskunnskap om temaet. Dette gjør at hjernen er forberedt på å oppfatte relevant informasjon.',
      },
    },
    {
      id: 'tysk-2-16-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les teksten og bruk kontekstgjetting. Hva betyr de uthevede ordene? Forklar hvordan du kom fram til svaret.\n\n«Die **Abholzung** der Regenwälder führt zu einem dramatischen Verlust der **Artenvielfalt**. Viele Tiere verlieren ihren **Lebensraum** und sind vom **Aussterben** bedroht.»',
        subTasks: [
          { label: 'a', task: 'die Abholzung', solution: 'Avskoging/hogst (Ab- = bort/vekk + Holz = tre → å ta bort trær)' },
          { label: 'b', task: 'die Artenvielfalt', solution: 'Artsmangfold (Arten = arter + Vielfalt = mangfold)' },
          { label: 'c', task: 'der Lebensraum', solution: 'Leveområde/habitat (Leben = liv + Raum = rom/område)' },
          { label: 'd', task: 'das Aussterben', solution: 'Utryddelse (aus = ut + sterben = dø → dø ut)' },
        ],
        solution: 'a) Abholzung = avskoging (Ab- = bort + Holz = tre)\nb) Artenvielfalt = artsmangfold (Arten = arter + Vielfalt = mangfold)\nc) Lebensraum = leveområde (Leben = liv + Raum = rom)\nd) Aussterben = utryddelse (aus = ut + sterben = dø)\n\nAlle ordene kan avkodes ved å dele dem opp i kjente bestanddeler – en viktig strategi for å forstå tyske sammensatte ord.',
      },
    },
    {
      id: 'tysk-2-16-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en disposisjon (Gliederung) for en Erörterung om temaet «Sollten alle Schüler ein Auslandsjahr machen?» (Bør alle elever ha et utvekslingsår?). Skriv 2–3 stikkord for hver del.',
        solution: 'Eksempelsvar:\n\n**1. Einleitung (Innledning):**\n- Temaets aktualitet: mange elever reiser på utveksling\n- Problemstilling: bør det gjelde alle?\n\n**2. Hauptteil (Hoveddel):**\n*Pro-argumenter:*\n- Språkutvikling: man lærer språket mye raskere i utlandet\n- Personlig vekst: selvstendighet, kulturforståelse\n- Karrierefordel: internasjonal erfaring verdsettes\n\n*Contra-argumenter:*\n- Kostnad: ikke alle familier har råd\n- Sosial tilknytning: vanskelig å være borte fra venner/familie\n- Faglig risiko: man kan gå glipp av pensum hjemme\n\n**3. Schluss (Avslutning):**\n- Eget standpunkt: valgfritt, ikke obligatorisk\n- Konklusjon: staten bør tilby stipend for å gi alle muligheten',
      },
    },
    {
      id: 'tysk-2-16-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort avsnitt (50–70 ord) på tysk der du argumenterer FOR at alle elever bør lære et fremmedspråk. Bruk minst tre konnektorer fra tabellen i kapittelet og varier setningsstrukturen.',
        solution: 'Eksempelsvar: Meiner Meinung nach sollte jeder Schüler mindestens eine Fremdsprache lernen. Erstens fördert das Sprachenlernen die kognitive Entwicklung und verbessert das Gedächtnis. Darüber hinaus öffnet eine Fremdsprache Türen zu anderen Kulturen und erweitert den Horizont. Allerdings muss man auch bedenken, dass nicht alle Schüler die gleichen Voraussetzungen haben. Deshalb sollten Schulen verschiedene Unterstützungsmöglichkeiten anbieten. Insgesamt überwiegen jedoch die Vorteile deutlich.',
      },
    },
    {
      id: 'tysk-2-16-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Lesestrategier**: Globales Lesen (skumlesing), Selektives Lesen (selektiv lesing), Detailliertes Lesen (nærlesing)
- **Kontekstgjetting**: Å utlede betydningen av ukjente ord fra sammenhengen og ordets bestanddeler
- **Lyttestrategier**: Forberedelse, nøkkelord, signalord og notatføring
- **Skrivestrategier**: Planlegging (Planung), utkast (Entwurf), revisjon (Überarbeitung), korrekturlesing (Korrektur)
- **Konnektorer** for å binde sammen tekst: außerdem, jedoch, deshalb, zusammenfassend`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Lesestrategie', definition: 'Lesestrategi – metode for å forstå tekster bedre' },
    { term: 'Globales Lesen', definition: 'Skumlesing – rask lesing for å forstå hovedtemaet' },
    { term: 'Selektives Lesen', definition: 'Selektiv lesing – skanne teksten etter spesifikk informasjon' },
    { term: 'Detailliertes Lesen', definition: 'Nærlesing – grundig lesing for å forstå alle detaljer' },
    { term: 'die Hörstrategie', definition: 'Lyttestrategi – metode for å oppfatte informasjon i muntlig tysk' },
    { term: 'die Schreibstrategie', definition: 'Skrivestrategi – metode for å planlegge og strukturere tekster' },
    { term: 'der Konnektor', definition: 'Konnektor/bindeord – ord som binder setninger sammen (außerdem, jedoch, deshalb)' },
    { term: 'die Gliederung', definition: 'Disposisjon – plan for oppbygning av en tekst' },
  ],
};

// ============================================================================
// KAPITTEL 16.4: Prüfungsvorbereitung
// ============================================================================

export const CHAPTER_TYSK_2_16_4: TextbookChapter = {
  id: 'tysk-2-16-4',
  courseId: 'tysk-2',
  chapterNumber: '16.4',
  title: 'Prüfungsvorbereitung',
  subtitle: 'Eksamensforberedelse',
  description: 'I dette kapittelet forbereder du deg til eksamen med prøveoppgaver, egenvurdering og studietips. Du får trene på typiske eksamensformater og lære hvordan du planlegger effektiv eksamensforberedelse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne gjenkjenne og mestre typiske eksamensformater i tysk',
    'Kunne vurdere eget ferdighetsnivå og identifisere forbedringsområder',
    'Kunne planlegge og gjennomføre effektiv eksamensforberedelse',
    'Kunne håndtere eksamenssituasjonen med gode strategier',
  ],
  content: [
    {
      id: 'tysk-2-16-4-intro',
      type: 'text',
      content: `## Prüfungsvorbereitung – Eksamensforberedelse

God forberedelse er halvparten av suksessen. I dette kapittelet får du en oversikt over typiske eksamensformater, prøveoppgaver og strategier for å gjøre det best mulig.

### Typiske eksamensoppgaver i Tysk 2

| Oppgavetype | Tysk | Hva testes? |
|-------------|------|------------|
| Leseforståelse | Leseverstehen | Forstå og tolke tekster |
| Lytteforståelse | Hörverstehen | Oppfatte informasjon fra muntlig tekst |
| Skriftlig produksjon | Schriftliche Produktion | Skrive sammenhengende tekst |
| Grammatikk | Grammatik | Korrekt bruk av grammatiske strukturer |
| Ordforråd | Wortschatz | Kjennskap til og bruk av relevante ord |

### Sjekkliste for eksamensdagen

- Les alle oppgavene nøye før du begynner
- Fordel tiden – ikke bruk for lang tid på én oppgave
- Svar på det du kan først, gå tilbake til vanskelige oppgaver
- Skriv leselig og strukturert
- Les gjennom svarene dine til slutt`,
    },
    {
      id: 'tysk-2-16-4-def-1',
      type: 'definition',
      title: 'Egenvurdering (Selbsteinschätzung)',
      content: `**Die Selbsteinschätzung** (egenvurdering) er et viktig verktøy for å identifisere hva du kan og hva du må jobbe mer med.\n\n### Vurder ditt nivå (1 = svak, 5 = sterk)\n\n| Ferdighet | Sjekk deg selv |\n|-----------|---------------|\n| Leseforståelse | Kan jeg forstå hovedinnholdet i tyske tekster? |\n| Lytteforståelse | Kan jeg oppfatte nøkkelinformasjon i muntlig tysk? |\n| Grammatikk | Kan jeg bruke Perfekt, Konjunktiv II og Passiv korrekt? |\n| Ordforråd | Kan jeg uttrykke meg om temaene vi har jobbet med? |\n| Skriving | Kan jeg skrive en strukturert tekst med korrekt grammatikk? |\n| Muntlig | Kan jeg delta i samtaler og uttrykke meninger? |\n\n**Tips:** Identifiser dine 2–3 svakeste områder og legg ekstra tid på disse i repetisjonsfasen.`,
    },
    {
      id: 'tysk-2-16-4-text-2',
      type: 'text',
      content: `## Studietips for effektiv eksamensforberedelse

### 1. Lag en leseplan (Lernplan)
Fordel pensum over flere dager. Ikke vent til siste kveld!

| Dag | Aktivitet |
|-----|-----------|
| 7 dager før | Oversikt: Les gjennom alle kapitler, lag stikkord |
| 5 dager før | Grammatikk: Repeter tabeller og regler, gjør øvelser |
| 4 dager før | Ordforråd: Gå gjennom ordlister, bruk flashcards |
| 3 dager før | Skriving: Øv på å skrive tekster med tidsbegrensning |
| 2 dager før | Prøveeksamen: Gjør gamle eksamensoppgaver |
| 1 dag før | Lett repetisjon: Gå gjennom stikkord, legg deg tidlig |

### 2. Aktiv repetisjon
- **Forklar stoffet til noen andre** – det du kan forklare, kan du
- **Gjør oppgaver uten å se på fasiten** – test deg selv
- **Skriv egne eksempelsetninger** for grammatiske regler

### 3. Under eksamen
- **Les oppgaven to ganger** før du svarer
- **Marker nøkkelord** i oppgaveteksten
- **Planlegg skriftlige oppgaver** med disposisjon før du skriver
- **Sjekk grammatikken** til slutt: verb-endelser, kasus, ordstilling`,
    },
    {
      id: 'tysk-2-16-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Prøveoppgave – Leseforståelse',
      problem: `Les teksten og svar på spørsmålene.\n\n*«Die Digitalisierung verändert unseren Alltag grundlegend. Smartphones, Tablets und Computer sind aus dem modernen Leben nicht mehr wegzudenken. Besonders in der Arbeitswelt hat die Digitalisierung große Veränderungen gebracht: Viele Menschen arbeiten heute im Homeoffice, Videokonferenzen ersetzen Geschäftsreisen, und künstliche Intelligenz übernimmt immer mehr Aufgaben. Kritiker warnen jedoch davor, dass die Digitalisierung auch Risiken mit sich bringt – etwa den Verlust von Arbeitsplätzen und die Gefahr der Überwachung.»*\n\na) Was verändert unseren Alltag?\nb) Nenne zwei Beispiele für Veränderungen in der Arbeitswelt.\nc) Welche Risiken nennen Kritiker?`,
      solution: `a) **Die Digitalisierung** (digitaliseringen) verändert unseren Alltag.\n\nb) Zwei Beispiele:\n- Viele Menschen **arbeiten im Homeoffice** (jobber hjemmefra)\n- **Videokonferenzen ersetzen Geschäftsreisen** (videokonferanser erstatter forretningsreiser)\n(Man kunne også nevnt: künstliche Intelligenz übernimmt Aufgaben)\n\nc) Kritiker nennen zwei Risiken:\n- **Den Verlust von Arbeitsplätzen** (tap av arbeidsplasser)\n- **Die Gefahr der Überwachung** (faren for overvåking)\n\n**Strategi:** For leseforståelse er det viktig å svare med informasjon direkte fra teksten. Du trenger ikke omformulere – det viktigste er at svaret er korrekt.`,
    },
    {
      id: 'tysk-2-16-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det første du bør gjøre når du får eksamensoppgaven?',
        options: [
          { id: 'a', text: 'Begynne å skrive med en gang', isCorrect: false },
          { id: 'b', text: 'Lese alle oppgavene nøye og fordele tiden', isCorrect: true },
          { id: 'c', text: 'Starte med den vanskeligste oppgaven', isCorrect: false },
          { id: 'd', text: 'Slå opp ord i ordboken', isCorrect: false },
        ],
        solution: 'Du bør alltid lese alle oppgavene nøye først og fordele tiden. Da får du oversikt over hva som forventes og kan planlegge hvilke oppgaver du bruker mest tid på.',
      },
    },
    {
      id: 'tysk-2-16-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning er grammatisk korrekt?',
        options: [
          { id: 'a', text: 'Wenn ich mehr Zeit hätte, würde ich mehr lesen.', isCorrect: true },
          { id: 'b', text: 'Wenn ich mehr Zeit hätte, werde ich mehr lesen.', isCorrect: false },
          { id: 'c', text: 'Wenn ich mehr Zeit habe, würde ich mehr lesen.', isCorrect: false },
          { id: 'd', text: 'Wenn ich mehr Zeit hätte, ich würde mehr lesen.', isCorrect: false },
        ],
        solution: 'Korrekt er a): «Wenn ich mehr Zeit hätte, würde ich mehr lesen.» Konjunktiv II i begge deler. I b) blandes Konjunktiv II og Indikativ, i c) er wenn-setningen Indikativ, og i d) er ordstillingen feil (verbet må stå på 2. plass i hovedsetningen: «würde ich»).',
      },
    },
    {
      id: 'tysk-2-16-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Prøveoppgave – Grammatikk. Fyll inn riktig form av verbet i parentes:',
        subTasks: [
          { label: 'a', task: 'Gestern ______ ich den ganzen Tag zu Hause. (sein, Präteritum)', solution: 'war' },
          { label: 'b', task: 'Das Essen ______ von meiner Mutter ______ . (kochen, Passiv Perfekt)', solution: 'ist ... gekocht worden' },
          { label: 'c', task: 'Der Schüler, ______ die Prüfung bestanden hat, ist glücklich. (Relativpronomen, maskulin)', solution: 'der' },
          { label: 'd', task: '______ Sie mir bitte helfen? (können, Konjunktiv II)', solution: 'Könnten' },
        ],
        solution: 'a) war (Präteritum av sein)\nb) ist ... gekocht worden (Passiv Perfekt: sein + Partizip II + worden)\nc) der (Relativpronomen maskulin nominativ – subjekt i bisetningen)\nd) Könnten (Konjunktiv II av können – høflighetsform)',
      },
    },
    {
      id: 'tysk-2-16-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prøveoppgave – Skriftlig produksjon. Skriv en e-post (80–100 ord) på tysk til en tysk venn der du:\n\n1. Hilser og spør hvordan det går\n2. Forteller om noe du har gjort nylig (bruk Perfekt)\n3. Foreslår å møtes (bruk Konjunktiv II)\n4. Avslutter høflig',
        solution: 'Eksempelsvar:\n\nLiebe/r [Name],\n\nwie geht es dir? Ich hoffe, dass alles gut läuft!\n\nBei mir ist in letzter Zeit viel passiert. Letzte Woche habe ich meine Deutschprüfung bestanden – ich habe mich sehr darüber gefreut! Außerdem habe ich angefangen, ein neues Buch auf Deutsch zu lesen.\n\nEs wäre toll, wenn wir uns bald treffen könnten. Hättest du nächstes Wochenende Zeit? Wir könnten zusammen ins Café gehen oder einen Film sehen.\n\nIch freue mich auf deine Antwort!\n\nHerzliche Grüße,\n[Dein Name]',
      },
    },
    {
      id: 'tysk-2-16-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'tysk-2-16-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Prøveoppgave – Samlet oppgave. Skriv et kort avsnitt (60–80 ord) på tysk om temaet «Mein Deutschlernen» (Min tyskopplæring). Inkluder:\n\n- Hva du har lært i Tysk 2 (bruk Perfekt)\n- Hva som var vanskeligst (bruk Konjunktiv II: «Am schwierigsten war...»)\n- Hva du vil gjøre videre for å forbedre tysken din',
        solution: 'Eksempelsvar: In Tysk 2 habe ich sehr viel gelernt. Ich habe über Themen wie Migration, Identität und Umwelt gelesen und darüber diskutiert. Am schwierigsten war für mich die Grammatik – besonders der Konjunktiv II und das Passiv. Wenn ich mehr Zeit gehabt hätte, hätte ich noch mehr geübt. In der Zukunft möchte ich deutsche Filme sehen und Podcasts hören, um mein Hörverstehen zu verbessern. Außerdem werde ich versuchen, regelmäßig auf Deutsch zu schreiben.',
      },
    },
    {
      id: 'tysk-2-16-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Typiske eksamensformater**: leseforståelse, lytteforståelse, skriftlig produksjon, grammatikk og ordforråd
- **Egenvurdering**: Å identifisere dine styrker og svakheter for målrettet repetisjon
- **Studietips**: Leseplan, aktiv repetisjon og strategier for eksamensdagen
- **Prøveoppgaver**: Øvd på realistiske oppgavetyper med grammatikk, lesing og skriving

### Lykke til med eksamen! – Viel Erfolg bei der Prüfung!

Husk: God forberedelse, nok søvn og en positiv innstilling er nøkkelen til suksess. Du har lært mye i løpet av Tysk 2 – stol på det du kan!`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'die Prüfung', definition: 'Eksamen/prøve – formell vurdering av kunnskaper' },
    { term: 'die Prüfungsvorbereitung', definition: 'Eksamensforberedelse – prosessen med å forberede seg til eksamen' },
    { term: 'die Selbsteinschätzung', definition: 'Egenvurdering – å vurdere sitt eget nivå og identifisere forbedringsområder' },
    { term: 'der Lernplan', definition: 'Leseplan/studieplan – plan for fordeling av repetisjon over tid' },
    { term: 'das Leseverstehen', definition: 'Leseforståelse – evnen til å forstå skriftlige tekster' },
    { term: 'das Hörverstehen', definition: 'Lytteforståelse – evnen til å forstå muntlig tysk' },
    { term: 'die schriftliche Produktion', definition: 'Skriftlig produksjon – å skrive sammenhengende tekster på tysk' },
    { term: 'Viel Erfolg!', definition: 'Lykke til! – vanlig oppmuntring før prøver og eksamener' },
  ],
};

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const TYSK_2_CHAPTERS_14_16: TextbookChapter[] = [
  CHAPTER_TYSK_2_14_1,
  CHAPTER_TYSK_2_14_2,
  CHAPTER_TYSK_2_14_3,
  CHAPTER_TYSK_2_14_4,
  CHAPTER_TYSK_2_15_1,
  CHAPTER_TYSK_2_15_2,
  CHAPTER_TYSK_2_15_3,
  CHAPTER_TYSK_2_15_4,
  CHAPTER_TYSK_2_16_1,
  CHAPTER_TYSK_2_16_2,
  CHAPTER_TYSK_2_16_3,
  CHAPTER_TYSK_2_16_4,
];
