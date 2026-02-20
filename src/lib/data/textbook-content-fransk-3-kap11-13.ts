/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 3 - Kapittel 11-13 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 11: Philosophie et pensée française (11.1-11.4)
 * - Kapittel 12: Sciences et environnement (12.1-12.4)
 * - Kapittel 13: Médias et communication avancée (13.1-13.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 11: Philosophie et pensée française
// ============================================================================

// --- 11.1: Descartes et le rationalisme ---
export const CHAPTER_FRANSK_3_11_1: TextbookChapter = {
  id: 'fransk-3-11-1',
  courseId: 'fransk-3',
  chapterNumber: '11.1',
  title: 'Descartes et le rationalisme',
  subtitle: 'Descartes og rasjonalismen',
  description: 'Utforsk Descartes filosofi, cogito ergo sum, og rasjonalismens grunnlag i fransk tenkning.',
  estimatedMinutes: 50,
  competenceGoals: ['lese, analysere og tolke avanserte franske tekster i ulike sjangre'],
  content: [
    {
      id: 'fransk-3-11-1-intro',
      type: 'text',
      content: `## Descartes et le rationalisme — Descartes og rasjonalismen

René Descartes (1596–1650) regnes som **le père de la philosophie moderne** (den moderne filosofiens far). Hans berømte setning **«Je pense, donc je suis»** (Cogito ergo sum — Jeg tenker, altså er jeg) ble grunnsteinen i vestlig filosofi. Descartes utviklet en filosofisk metode basert på systematisk tvil og fornuft.

Frankrike har en unik filosofisk tradisjon der filosofi ikke bare er et akademisk fag, men en del av allmennkulturen. Alle franske elever har **la philosophie** som obligatorisk fag i siste år av videregående (*la terminale*), og avgangseksamen (*le baccalauréat*) innledes tradisjonelt med en filosofiprøve.

### Ordforråd: Filosofi

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| la philosophie | filosofien | f. |
| le rationalisme | rasjonalismen | m. |
| le doute méthodique | den metodiske tvilen | m. |
| la raison | fornuften | f. |
| la pensée | tanken/tenkningen | f. |
| la conscience | bevisstheten | f. |
| le dualisme | dualismen | m. |
| l'empirisme (m.) | empirismen | m. |
| la certitude | vissheten | f. |
| une démonstration | et bevis/en bevisførsel | f. |`
    },
    {
      id: 'fransk-3-11-1-def-1',
      type: 'definition',
      title: 'Le rationalisme cartésien',
      content: `**Le rationalisme** (*rasjonalismen*) er en filosofisk retning som hevder at **la raison** (fornuften) er den primære kilden til kunnskap. I motsetning til **l'empirisme** (empirismen), som mener at kunnskap kommer fra sanseerfaring, hevder rasjonalismen at visse sannheter kan nås gjennom ren tenkning.

**René Descartes** utviklet **le doute méthodique** (den metodiske tvilen): man skal tvile på alt som kan betviles, inntil man finner noe absolutt sikkert. Det eneste Descartes ikke kunne tvile på, var at han tenkte — altså: **«Je pense, donc je suis.»**

Denne metoden kalles **le cartésianisme** (kartesianismen), og den har hatt enorm innflytelse på fransk kultur. Å være «cartésien» brukes i dagligtale om å tenke logisk og systematisk.`
    },
    {
      id: 'fransk-3-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Analyse av Descartes Discours de la méthode',
      problem: `Les følgende utdrag fra Descartes' *Discours de la méthode* (1637) og analyser den filosofiske argumentasjonen:\n\n*«Ainsi, à cause que nos sens nous trompent quelquefois, je voulus supposer qu'il n'y avait aucune chose qui fût telle qu'ils nous la font imaginer. Et parce qu'il y a des hommes qui se méprennent en raisonnant, je rejetai comme fausses toutes les raisons que j'avais prises auparavant pour démonstrations. Et enfin, considérant que toutes les mêmes pensées que nous avons étant éveillés nous peuvent aussi venir quand nous dormons, je me résolus de feindre que toutes les choses qui m'étaient jamais entrées en l'esprit n'étaient non plus vraies que les illusions de mes songes.»*\n\nHvilke tre typer tvil presenterer Descartes i dette utdraget?`,
      solution: `Descartes presenterer tre nivåer av systematisk tvil:\n\n1. **Sansetvillen** (*le doute des sens*): «nos sens nous trompent quelquefois» — sansene bedrar oss noen ganger. Derfor kan vi ikke stole på det vi ser, hører eller føler.\n\n2. **Fornuftstvillen** (*le doute de la raison*): «il y a des hommes qui se méprennent en raisonnant» — selv logisk resonnement kan føre til feilslutninger.\n\n3. **Drømmetvillen** (*le doute du rêve*): «toutes les mêmes pensées que nous avons étant éveillés nous peuvent aussi venir quand nous dormons» — vi kan ikke skille mellom våken tilstand og drøm med sikkerhet.\n\nGjennom denne tredoble tvilen fjerner Descartes alle mulige kilder til kunnskap, inntil han står igjen med det eneste som ikke kan betviles: selve tvilsprosessen — det at han tenker. Derav: **«Je pense, donc je suis.»**`
    },
    {
      id: 'fransk-3-11-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr Descartes berømte utsagn «Je pense, donc je suis»?',
        options: [
          { id: 'a', text: 'Jeg tenker, derfor er jeg lykkelig', isCorrect: false },
          { id: 'b', text: 'Jeg tenker, altså er jeg (eksisterer jeg)', isCorrect: true },
          { id: 'c', text: 'Jeg tror, derfor har jeg rett', isCorrect: false },
          { id: 'd', text: 'Jeg tenker, men jeg tviler på meg selv', isCorrect: false },
        ],
        solution: `Riktig svar er B. «Je pense, donc je suis» (latin: Cogito ergo sum) betyr «Jeg tenker, altså er jeg/eksisterer jeg». Det er grunnsteinen i Descartes' filosofi: det eneste man ikke kan tvile på, er at man tenker — og dermed at man eksisterer som tenkende vesen.`,
      }
    },
    {
      id: 'fransk-3-11-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er «le doute méthodique»?',
        options: [
          { id: 'a', text: 'Å tvile på alt fordi man er deprimert og usikker', isCorrect: false },
          { id: 'b', text: 'En systematisk metode der man betviler alt som kan betviles for å finne absolutt sikker kunnskap', isCorrect: true },
          { id: 'c', text: 'En religiøs metode for å styrke troen gjennom tvil', isCorrect: false },
          { id: 'd', text: 'En vitenskapelig metode basert utelukkende på eksperimenter', isCorrect: false },
        ],
        solution: `Riktig svar er B. Le doute méthodique (den metodiske tvilen) er Descartes' filosofiske metode: han tviler systematisk på alt — sansene, fornuften, til og med om han er våken — for å finne noe absolutt sikkert. Det er ikke tvil som uttrykk for usikkerhet (A), men et bevisst verktøy for å nå sann kunnskap.`,
      }
    },
    {
      id: 'fransk-3-11-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Oversett følgende setninger til fransk med bruk av filosofisk vokabular:\n\n1. Descartes er den moderne filosofiens far.\n2. Den metodiske tvilen er grunnlaget for rasjonalismen.\n3. Fornuften er den viktigste kilden til kunnskap.\n4. «Jeg tenker, altså er jeg» er Descartes berømte utsagn.\n5. Dualismen skiller mellom kropp og sjel.`,
        solution: `1. *Descartes est le père de la philosophie moderne.*\n2. *Le doute méthodique est le fondement du rationalisme.*\n3. *La raison est la source de connaissance la plus importante.*\n4. *«Je pense, donc je suis» est la célèbre formule de Descartes.*\n5. *Le dualisme distingue le corps et l'âme (l'esprit).*\n\nLegg merke til at «le fondement» (grunnlaget) brukes fremfor «la base» i filosofisk sammenheng.`,
      }
    },
    {
      id: 'fransk-3-11-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **René Descartes** (1596–1650) regnes som den moderne filosofiens far
- **Le doute méthodique**: Descartes' metode med systematisk tvil for å finne sikker kunnskap
- **«Je pense, donc je suis»**: Det eneste man ikke kan tvile på er at man tenker — og dermed eksisterer
- **Le rationalisme**: Fornuften er den primære kilden til kunnskap
- **Le cartésianisme**: Descartes' filosofi har preget fransk kultur dypt — å være «cartésien» betyr å tenke logisk
- Filosofi er obligatorisk fag i fransk videregående (*la terminale*)`
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-3-11-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en tekst på fransk (100–150 ord) der du forklarer Descartes' metodiske tvil og «cogito»-argumentet. Bruk minst 8 filosofiske fagtermer fra kapittelet.\n\nStrukturér teksten slik:\n1. Hva er le doute méthodique?\n2. Hvorfor tviler Descartes på sansene, fornuften og drømmen?\n3. Hvordan når han frem til «Je pense, donc je suis»?`,
        solution: `Eksempel:\n\n*«René Descartes, le père de la philosophie moderne, a développé le doute méthodique comme outil pour atteindre la certitude. Sa méthode consiste à rejeter systématiquement tout ce qui peut être mis en doute.\n\nPremièrement, Descartes doute des sens : nos perceptions sensorielles nous trompent parfois. Deuxièmement, il doute de la raison : même le raisonnement logique peut contenir des erreurs. Troisièmement, il doute de la réalité elle-même : comment distinguer le rêve de l'état de veille ?\n\nAprès avoir tout rejeté, Descartes découvre une vérité indubitable : le fait même de douter prouve qu'il pense, et le fait de penser prouve qu'il existe. C'est le fameux «Je pense, donc je suis» (Cogito ergo sum). Cette certitude fondamentale constitue le point de départ du rationalisme cartésien et de toute la conscience philosophique moderne.»*`,
      }
    },
    {
      id: 'fransk-3-11-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Drøft på fransk (80–120 ord): Er Descartes' metodiske tvil relevant i dag? Tenk på fake news, kunstig intelligens og virtuell virkelighet. Kan vi stole på det vi ser og hører?\n\nBruk uttrykk som: *d'une part... d'autre part*, *en effet*, *par conséquent*, *il est légitime de se demander si...*`,
        solution: `Eksempel:\n\n*«Le doute méthodique de Descartes est plus pertinent que jamais à l'ère numérique. D'une part, les fake news et les deepfakes remettent en question la fiabilité de nos sens : peut-on encore croire ce que l'on voit sur Internet ? En effet, l'intelligence artificielle peut désormais créer des images et des vidéos impossibles à distinguer de la réalité.\n\nD'autre part, la réalité virtuelle brouille la frontière entre le réel et l'artificiel, exactement comme le doute du rêve chez Descartes. Par conséquent, il est légitime de se demander si nous avons besoin d'un nouveau Cogito adapté au monde numérique : comment prouver que ce que nous percevons à travers nos écrans correspond à la réalité ?»*`,
      }
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'le rationalisme', definition: 'Rasjonalismen — filosofisk retning som vektlegger fornuften som kilde til kunnskap' },
    { term: 'le doute méthodique', definition: 'Den metodiske tvilen — Descartes metode med systematisk tvil' },
    { term: 'le cogito', definition: '«Je pense, donc je suis» — Descartes grunnleggende filosofiske innsikt' },
    { term: 'le dualisme', definition: 'Dualismen — skillet mellom kropp (le corps) og sjel/bevissthet (l\'âme/l\'esprit)' },
    { term: 'la raison', definition: 'Fornuften — menneskets evne til logisk tenkning' },
    { term: 'le cartésianisme', definition: 'Kartesianismen — Descartes filosofiske system og dets kulturelle innflytelse' },
    { term: 'la certitude', definition: 'Vissheten — absolutt sikker kunnskap som ikke kan betviles' },
    { term: 'la conscience', definition: 'Bevisstheten — evnen til å være klar over seg selv og sine tanker' },
  ],
};

// --- 11.2: L'existentialisme ---
export const CHAPTER_FRANSK_3_11_2: TextbookChapter = {
  id: 'fransk-3-11-2',
  courseId: 'fransk-3',
  chapterNumber: '11.2',
  title: "L'existentialisme",
  subtitle: 'Eksistensialismen',
  description: 'Utforsk Sartre, Beauvoir og Camus: frihet, ansvar og det absurde i eksistensialismen.',
  estimatedMinutes: 55,
  competenceGoals: ['lese, analysere og tolke avanserte franske tekster i ulike sjangre', 'drøfte aktuelle samfunnsspørsmål i franskspråklige land'],
  content: [
    {
      id: 'fransk-3-11-2-intro',
      type: 'text',
      content: `## L'existentialisme — Eksistensialismen

Eksistensialismen er den kanskje mest kjente franske filosofiske retningen internasjonalt. Den oppstod i kjølvannet av andre verdenskrig og dominerte det intellektuelle klimaet i Frankrike fra 1940- til 1960-tallet. Sentrale skikkelser er **Jean-Paul Sartre** (1905–1980), **Simone de Beauvoir** (1908–1986) og **Albert Camus** (1913–1960).

Kjernen i eksistensialismen kan oppsummeres i Sartres berømte utsagn: **«L'existence précède l'essence»** — eksistensen kommer før essensen. Det betyr at mennesket ikke har en forutbestemt natur; vi skaper oss selv gjennom våre valg.

### Ordforråd: Eksistensialisme

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| l'existentialisme (m.) | eksistensialismen | m. |
| la liberté | friheten | f. |
| la responsabilité | ansvaret | f. |
| l'angoisse (f.) | angsten | f. |
| la mauvaise foi | dårlig tro/selvbedrag | f. |
| l'absurde (m.) | det absurde | m. |
| l'engagement (m.) | engasjementet | m. |
| la condition humaine | den menneskelige tilstanden | f. |
| le néant | intetheten | m. |
| le choix | valget | m. |`
    },
    {
      id: 'fransk-3-11-2-def-1',
      type: 'definition',
      title: "L'existence précède l'essence",
      content: `**«L'existence précède l'essence»** (*eksistensen kommer før essensen*) er eksistensialismens grunnsetning, formulert av Sartre. Det betyr at mennesket ikke har en forutbestemt natur eller «essens» — vi kastes inn i verden uten et formål, og må selv skape mening gjennom våre valg og handlinger.

Konsekvensen er radikal **frihet** (*la liberté*) og tilsvarende radikal **ansvar** (*la responsabilité*): siden ingen gud, natur eller skjebne bestemmer hvem vi er, er vi fullt ut ansvarlige for det vi gjør av livet vårt. Denne bevisstheten om total frihet skaper **l'angoisse** (eksistensiell angst).

Å nekte å ta ansvar for sin frihet kalte Sartre **la mauvaise foi** (dårlig tro/selvbedrag) — å late som om man «ikke hadde noe valg» når man alltid har det.`
    },
    {
      id: 'fransk-3-11-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Sartre og Beauvoir — frihet og kjønn',
      problem: `Simone de Beauvoir skrev i *Le Deuxième Sexe* (1949): **«On ne naît pas femme : on le devient.»** (Man fødes ikke som kvinne: man blir det.)\n\nAnalyser dette utsagnet i lys av eksistensialismens grunntanke «l'existence précède l'essence». Hvordan anvender Beauvoir Sartres filosofi på kjønn?`,
      solution: `Beauvoir anvender Sartres prinsipp «l'existence précède l'essence» direkte på kjønnsspørsmålet:\n\n1. **Ingen forutbestemt essens**: Akkurat som mennesket generelt ikke har en forutbestemt natur, har heller ikke kvinner en medfødt «kvinnelig essens». Det finnes ingen «evig femininitet».\n\n2. **Sosial konstruksjon**: Kvinner «blir til» gjennom sosiale normer, oppdragelse og kulturelle forventninger. «Kvinnelighet» er ikke biologisk bestemt, men sosialt konstruert — det er noe man lærer, ikke noe man er.\n\n3. **Frihet og undertrykking**: Beauvoir viser at samfunnet begrenser kvinners frihet ved å definere dem som «l'Autre» (Den andre) i forhold til mannen som norm. Ekte frigjøring krever at kvinner tar ansvar for sin egen eksistens.\n\nDette utsagnet regnes som en av feminismens mest innflytelsesrike setninger og viser hvordan eksistensialismen kan brukes som verktøy for sosial analyse.`
    },
    {
      id: 'fransk-3-11-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «L\'existence précède l\'essence»?',
        options: [
          { id: 'a', text: 'Menneskets essens bestemmer dets eksistens', isCorrect: false },
          { id: 'b', text: 'Mennesket eksisterer først, og skaper deretter sin egen natur gjennom valg', isCorrect: true },
          { id: 'c', text: 'Menneskets essens er bestemt av Gud', isCorrect: false },
          { id: 'd', text: 'Eksistensen er meningsløs og uten essens', isCorrect: false },
        ],
        solution: `Riktig svar er B. «L'existence précède l'essence» betyr at mennesket først eksisterer — kastes inn i verden — og deretter skaper sin egen natur gjennom sine valg og handlinger. Det finnes ingen forutbestemt «essens» eller natur.`,
      }
    },
    {
      id: 'fransk-3-11-2-text-2',
      type: 'text',
      content: `### Albert Camus et l'absurde — Camus og det absurde

**Albert Camus** (1913–1960), Nobelprisvinner i litteratur 1957, utviklet filosofien om **l'absurde** (det absurde). Selv om Camus ofte grupperes med eksistensialistene, nektet han selv denne merkelappen.

For Camus oppstår det absurde i konflikten mellom menneskets lengsel etter mening og universets taushet. Verden er likegyldig — den gir oss ingen svar. I *Le Mythe de Sisyphe* (1942) bruker Camus den greske myten om Sisyfos som bilde: Sisyfos er dømt til å rulle en stein opp et fjell i all evighet, bare for å se den rulle ned igjen.

Camus' svar er ikke resignasjon, men **la révolte** (opprøret): vi må akseptere det absurde og likevel leve fullt ut. Hans berømte sluttsetning lyder: **«Il faut imaginer Sisyphe heureux.»** (Man må forestille seg Sisyfos lykkelig.)

| Begrep | Forklaring |
|--------|------------|
| l'absurde | Konflikten mellom menneskets meningssøken og universets taushet |
| la révolte | Opprøret — å akseptere det absurde og likevel leve fullt ut |
| Sisyphe | Gresk mytologisk figur — symbol på menneskets tilstand |`
    },
    {
      id: 'fransk-3-11-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr Camus\' utsagn «Il faut imaginer Sisyphe heureux»?',
        options: [
          { id: 'a', text: 'Sisyfos var faktisk glad fordi han likte å rulle steiner', isCorrect: false },
          { id: 'b', text: 'Vi må forestille oss Sisyfos som lykkelig fordi han aksepterer det absurde og finner mening i selve handlingen', isCorrect: true },
          { id: 'c', text: 'Sisyfos ble til slutt befridd fra sin straff og ble lykkelig', isCorrect: false },
          { id: 'd', text: 'Camus mener at lykke er en illusjon vi alle lever med', isCorrect: false },
        ],
        solution: `Riktig svar er B. For Camus symboliserer Sisyfos den menneskelige tilstanden: vi strever etter mening i et univers som er likegyldig. Men i stedet for å gi opp, velger Sisyfos å akseptere sin situasjon og finne verdi i selve kampen. «Il faut imaginer Sisyphe heureux» er et uttrykk for la révolte — opprøret mot det absurde gjennom bevisst handling.`,
      }
    },
    {
      id: 'fransk-3-11-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Forklar følgende eksistensielle begreper på fransk med én setning hver. Bruk formuleringen «[Begrep] désigne...» eller «[Begrep] est...»:\n\n1. L'existentialisme\n2. La mauvaise foi\n3. L'absurde\n4. La révolte\n5. L'angoisse`,
        solution: `1. *L'existentialisme est un courant philosophique qui affirme que l'existence précède l'essence — l'homme se définit par ses choix et ses actes.*\n2. *La mauvaise foi désigne l'attitude qui consiste à nier sa propre liberté en prétendant qu'on «n'a pas le choix».*\n3. *L'absurde est le conflit entre le désir humain de trouver un sens à la vie et le silence indifférent de l'univers.*\n4. *La révolte est la réponse que Camus propose face à l'absurde : accepter l'absence de sens tout en continuant à vivre pleinement.*\n5. *L'angoisse est le sentiment que l'homme éprouve face à sa liberté totale et à l'absence de valeurs prédéterminées.*`,
      }
    },
    {
      id: 'fransk-3-11-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Eksistensialismens grunntanke**: «L'existence précède l'essence» — mennesket skaper seg selv gjennom sine valg
- **Sartre**: Radikal frihet, radikal ansvar, la mauvaise foi (selvbedrag)
- **Beauvoir**: «On ne naît pas femme : on le devient» — eksistensialisme anvendt på kjønn og feminisme
- **Camus og l'absurde**: Konflikten mellom meningssøken og universets taushet
- **La révolte**: Camus' svar — akseptere det absurde og likevel leve fullt ut
- **«Il faut imaginer Sisyphe heureux»**: Sisyfos som symbol på den menneskelige tilstanden`
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-3-11-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en drøftende tekst på fransk (120–180 ord) der du sammenligner Sartre og Camus:\n\n- Hva er likheter og forskjeller mellom Sartres eksistensialisme og Camus' filosofi om det absurde?\n- Hvordan forholder de seg til frihet og mening?\n- Hvem er mest relevant for vår tid, og hvorfor?\n\nBruk uttrykk som: *tandis que*, *alors que*, *néanmoins*, *en revanche*, *à mon avis*`,
        solution: `Eksempel:\n\n*«Sartre et Camus sont souvent associés, mais leurs philosophies divergent sur des points essentiels. Sartre affirme que l'homme est «condamné à être libre» et que cette liberté absolue constitue la base de notre existence. Pour Sartre, l'homme crée sa propre essence à travers ses choix — l'engagement politique et social est donc un devoir.\n\nCamus, en revanche, se concentre sur l'absurde : le conflit entre notre désir de sens et l'indifférence de l'univers. Tandis que Sartre propose l'engagement comme réponse, Camus propose la révolte — une acceptation lucide de l'absurde accompagnée d'un choix de vivre pleinement.\n\nNéanmoins, les deux partagent un humanisme fondamental : la conviction que l'homme doit agir malgré l'absence de certitudes. À mon avis, Camus est plus pertinent pour notre époque, car sa pensée de l'absurde résonne particulièrement dans un monde où les grands récits idéologiques se sont effondrés.»*`,
      }
    },
    {
      id: 'fransk-3-11-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Beauvoirs «On ne naît pas femme : on le devient» regnes som en av feminismens viktigste setninger. Drøft på fransk (80–120 ord): Er dette utsagnet fortsatt relevant i dag? Gi eksempler fra samtiden.`,
        solution: `Eksempel:\n\n*«L'affirmation de Beauvoir reste profondément pertinente. Aujourd'hui encore, les attentes sociales façonnent l'identité de genre dès la naissance : les couleurs des vêtements, les jouets, les modèles dans les médias. Les débats contemporains sur l'identité de genre, la diversité et l'inclusion montrent que la question du «devenir» est plus actuelle que jamais.\n\nDe plus, les inégalités salariales, la sous-représentation des femmes en politique et dans les sciences, et les stéréotypes persistants prouvent que le processus de «devenir femme» au sens de Beauvoir — c'est-à-dire la construction sociale du genre — continue d'opérer. La phrase de Beauvoir nous invite à questionner ce qui est «naturel» et ce qui est «construit» dans nos identités.»*`,
      }
    },
  ],
  exercises: [],
  keyTerms: [
    { term: "l'existentialisme (m.)", definition: 'Eksistensialismen — filosofi der mennesket skaper seg selv gjennom sine valg' },
    { term: 'la liberté', definition: 'Friheten — menneskets radikale frihet til å velge' },
    { term: 'la mauvaise foi', definition: 'Dårlig tro/selvbedrag — å nekte å ta ansvar for sin frihet' },
    { term: "l'absurde (m.)", definition: 'Det absurde — konflikten mellom meningssøken og universets taushet' },
    { term: 'la révolte', definition: 'Opprøret — Camus\' svar på det absurde: å leve fullt ut tross meningsløsheten' },
    { term: "l'angoisse (f.)", definition: 'Eksistensiell angst — følelsen som oppstår ved bevisstheten om total frihet' },
    { term: "l'engagement (m.)", definition: 'Engasjementet — den intellektuelles plikt til å handle i verden' },
    { term: 'la condition humaine', definition: 'Den menneskelige tilstanden — menneskets grunnvilkår' },
  ],
};

// --- 11.3: Le structuralisme et le postmodernisme ---
export const CHAPTER_FRANSK_3_11_3: TextbookChapter = {
  id: 'fransk-3-11-3',
  courseId: 'fransk-3',
  chapterNumber: '11.3',
  title: 'Le structuralisme et le postmodernisme',
  subtitle: 'Strukturalismen og postmodernismen',
  description: 'Utforsk Foucault, Derrida og Barthes: fra strukturanalyse til dekonstruksjon.',
  estimatedMinutes: 55,
  competenceGoals: ['lese, analysere og tolke avanserte franske tekster i ulike sjangre'],
  content: [
    {
      id: 'fransk-3-11-3-intro',
      type: 'text',
      content: `## Le structuralisme et le postmodernisme

Etter eksistensialismens dominans på 1940- og 50-tallet, ble **le structuralisme** (strukturalismen) den ledende intellektuelle retningen i Frankrike fra 1960-tallet. Strukturalismen hevder at menneskelig kultur og tenkning styres av underliggende strukturer — språklige, sosiale og psykologiske — som individet ikke er bevisst.

Fra 1970-tallet utviklet **le postmodernisme** og **la déconstruction** (dekonstruksjonen) seg som en kritikk av alle store fortellinger og faste strukturer.

### Ordforråd: Strukturalisme og postmodernisme

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| le structuralisme | strukturalismen | m. |
| le postmodernisme | postmodernismen | m. |
| la déconstruction | dekonstruksjonen | f. |
| le signe | tegnet | m. |
| le signifiant | betegneren | m. |
| le signifié | det betegnede | m. |
| le discours | diskursen | m. |
| le pouvoir | makten | m. |
| la mort de l'auteur | forfatterens død | f. |
| un texte | en tekst | m. |`
    },
    {
      id: 'fransk-3-11-3-def-1',
      type: 'definition',
      title: 'Le structuralisme',
      content: `**Le structuralisme** (*strukturalismen*) er en intellektuell retning som analyserer kultur, språk og samfunn som systemer av tegn og relasjoner. Grunnlaget ble lagt av lingvisten **Ferdinand de Saussure**, som skilte mellom **le signifiant** (betegneren — lyden eller skriftbildet) og **le signifié** (det betegnede — begrepet eller meningen).

Viktige strukturalister inkluderer:
- **Claude Lévi-Strauss** (antropologi): analyserte myter som underliggende strukturer
- **Roland Barthes** (litteraturteori): analyserte kulturelle tegnsystemer
- **Michel Foucault** (tidlig periode): analyserte diskurs og makt`
    },
    {
      id: 'fransk-3-11-3-def-2',
      type: 'definition',
      title: 'La déconstruction',
      content: `**La déconstruction** (*dekonstruksjonen*), utviklet av **Jacques Derrida** (1930–2004), er en metode for å avdekke skjulte motsetninger og ustabilitet i tekster og begreper. Derrida viste at vestlig tenkning bygger på binære motsetninger (natur/kultur, mann/kvinne, tale/skrift) der det ene leddet alltid privilegeres over det andre.

Dekonstruksjon handler ikke om å «ødelegge» tekster, men om å vise at mening aldri er helt stabil — den forskyves stadig. Derrida kalte dette **la différance** (med «a») — et ordspill som kombinerer «forskjell» og «utsettelse».`
    },
    {
      id: 'fransk-3-11-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Barthes og «La mort de l\'auteur»',
      problem: `Roland Barthes publiserte essayet **«La mort de l'auteur»** (Forfatterens død) i 1967. Hva mente Barthes med dette provocative utsagnet, og hvilke konsekvenser har det for hvordan vi leser tekster?`,
      solution: `Barthes' «La mort de l'auteur» er et av de mest innflytelsesrike litteraturteoretiske essayene i det 20. århundre:\n\n1. **Forfatterens død**: Barthes hevder at vi bør slutte å lete etter forfatterens intensjon bak en tekst. Teksten frigjøres fra forfatteren i det øyeblikket den er skrevet.\n\n2. **Leserens fødsel**: I stedet for forfatteren er det **leseren** som skaper mening. Hver leser bringer sine egne erfaringer og fortolkninger til teksten — det finnes ingen «riktig» tolkning som tilsvarer forfatterens intensjon.\n\n3. **Teksten som vev**: Barthes ser teksten som et «tissu de citations» (vev av sitater) — et nettverk av referanser til andre tekster og kulturelle koder, ikke et uttrykk for ett enkelt individs genialitet.\n\nKonsekvens: Litteraturkritikk bør fokusere på selve teksten og leserens opplevelse, ikke på biografiske fakta om forfatteren.`
    },
    {
      id: 'fransk-3-11-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva mener Barthes med «la mort de l\'auteur» (forfatterens død)?',
        options: [
          { id: 'a', text: 'At forfattere fysisk dør og ikke kan forklare sine tekster', isCorrect: false },
          { id: 'b', text: 'At vi bør slutte å lete etter forfatterens intensjon og la teksten tale for seg selv', isCorrect: true },
          { id: 'c', text: 'At moderne forfattere er dårligere enn klassiske forfattere', isCorrect: false },
          { id: 'd', text: 'At alle tekster er meningsløse uten forfatteren', isCorrect: false },
        ],
        solution: `Riktig svar er B. «La mort de l'auteur» er en metafor for at vi bør frigjøre teksten fra forfatterens intensjon. Barthes mener at det er leseren, ikke forfatteren, som skaper mening. Det er en av strukturalismens mest provocative teser.`,
      }
    },
    {
      id: 'fransk-3-11-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er «la déconstruction» ifølge Derrida?',
        options: [
          { id: 'a', text: 'En metode for å rive ned og ødelegge filosofiske tekster', isCorrect: false },
          { id: 'b', text: 'En byggeteknikk innen moderne arkitektur', isCorrect: false },
          { id: 'c', text: 'En metode for å avdekke skjulte motsetninger og ustabilitet i tekster og begreper', isCorrect: true },
          { id: 'd', text: 'En politisk bevegelse som ville fjerne alle institusjoner', isCorrect: false },
        ],
        solution: `Riktig svar er C. Dekonstruksjon handler ikke om å «ødelegge» (A), men om å vise at begreper og tekster inneholder indre spenninger og motsetninger. Derrida avdekker hvordan vestlig tenkning bygger på binære motsetninger der det ene alltid privilegeres over det andre.`,
      }
    },
    {
      id: 'fransk-3-11-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Koble riktig filosof med riktig begrep. Skriv fullstendige setninger på fransk etter mønsteret: «[Filosof] est connu(e) pour [begrep].»\n\n1. Ferdinand de Saussure — le signifiant et le signifié\n2. Roland Barthes — la mort de l'auteur\n3. Jacques Derrida — la déconstruction\n4. Michel Foucault — le pouvoir et le discours\n5. Claude Lévi-Strauss — l'analyse structurale des mythes`,
        solution: `1. *Ferdinand de Saussure est connu pour la distinction entre le signifiant et le signifié.*\n2. *Roland Barthes est connu pour le concept de la mort de l'auteur.*\n3. *Jacques Derrida est connu pour la déconstruction.*\n4. *Michel Foucault est connu pour l'analyse du pouvoir et du discours.*\n5. *Claude Lévi-Strauss est connu pour l'analyse structurale des mythes.*`,
      }
    },
    {
      id: 'fransk-3-11-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Le structuralisme**: Analyserer kultur som systemer av tegn og relasjoner (Saussure, Lévi-Strauss, Barthes)
- **Le signifiant/le signifié**: Saussures skille mellom betegneren og det betegnede
- **La mort de l'auteur** (Barthes): Leseren, ikke forfatteren, skaper mening
- **La déconstruction** (Derrida): Avdekking av skjulte motsetninger i tekster og begreper
- **Foucault**: Maktens forhold til diskurs — hvem har rett til å definere sannhet?
- Overgangen fra strukturalisme til postmodernisme og dekonstruksjon`
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-3-11-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en kort tekst på fransk (80–120 ord) der du forklarer forskjellen mellom strukturalismen og dekonstruksjonen. Bruk minst 6 fagtermer fra kapittelet.`,
        solution: `Eksempel:\n\n*«Le structuralisme et la déconstruction représentent deux moments distincts de la pensée française. Le structuralisme, inspiré par la linguistique de Saussure, cherche à identifier les structures cachées qui organisent la culture, le langage et la société. Les structuralistes comme Lévi-Strauss analysent les mythes et les systèmes de signes pour révéler des régularités universelles.\n\nLa déconstruction, développée par Derrida, remet en question ces structures en montrant qu'elles sont instables et qu'elles reposent sur des oppositions binaires (nature/culture, homme/femme) qui sont toujours hiérarchisées. Le discours n'est jamais neutre — il est traversé par des rapports de pouvoir. Alors que le structuralisme cherche l'ordre, la déconstruction révèle le désordre.»*`,
      }
    },
    {
      id: 'fransk-3-11-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Barthes hevder at «la mort de l'auteur» betyr «la naissance du lecteur» (leserens fødsel). Drøft på fransk (80–100 ord): Er du enig? Bør vi lese tekster uten å bry oss om hvem som skrev dem? Bruk et konkret eksempel.`,
        solution: `Eksempel:\n\n*«La thèse de Barthes est stimulante mais discutable. D'un côté, il est vrai que chaque lecteur apporte sa propre expérience à un texte. Par exemple, un lecteur norvégien et un lecteur français liront «L'Étranger» de Camus de manière différente, en fonction de leur contexte culturel.\n\nCependant, ignorer complètement l'auteur peut appauvrir notre compréhension. Savoir que Camus était pied-noir (français d'Algérie) éclaire profondément «L'Étranger». Le contexte biographique ne détermine pas le sens, mais il l'enrichit. À mon avis, la meilleure approche est un dialogue entre le texte, l'auteur et le lecteur.»*`,
      }
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'le structuralisme', definition: 'Strukturalismen — analyse av kultur som systemer av tegn og relasjoner' },
    { term: 'la déconstruction', definition: 'Dekonstruksjonen — metode for å avdekke motsetninger i tekster (Derrida)' },
    { term: 'le signifiant', definition: 'Betegneren — lyden eller skriftbildet til et tegn (Saussure)' },
    { term: 'le signifié', definition: 'Det betegnede — begrepet eller meningen et tegn refererer til (Saussure)' },
    { term: 'la mort de l\'auteur', definition: 'Forfatterens død — Barthes\' tese om at leseren skaper mening' },
    { term: 'le discours', definition: 'Diskursen — språkbruk og kommunikasjon sett i sammenheng med makt' },
    { term: 'le pouvoir', definition: 'Makten — sentralt begrep hos Foucault om maktens gjennomtrengning av alle sosiale relasjoner' },
    { term: 'la différance', definition: 'Derridas begrep om meningens stadige forskyvning og utsettelse' },
  ],
};

// --- 11.4: La philosophie dans la vie quotidienne ---
export const CHAPTER_FRANSK_3_11_4: TextbookChapter = {
  id: 'fransk-3-11-4',
  courseId: 'fransk-3',
  chapterNumber: '11.4',
  title: 'La philosophie dans la vie quotidienne',
  subtitle: 'Filosofi i hverdagen',
  description: 'Utforsk hvordan filosofi brukes i fransk hverdagsliv: fra kaféfilosofi til debatter om AI og teknologi.',
  estimatedMinutes: 50,
  competenceGoals: ['drøfte aktuelle samfunnsspørsmål i franskspråklige land', 'bruke et avansert og nyansert ordforråd tilpasset formål og situasjon'],
  content: [
    {
      id: 'fransk-3-11-4-intro',
      type: 'text',
      content: `## La philosophie dans la vie quotidienne — Filosofi i hverdagen

I Frankrike er filosofi ikke bare et akademisk fag — det er en del av hverdagskulturen. Franskmenn diskuterer filosofiske spørsmål i aviser, på TV, i bokhandler og på kafeer. **Les cafés philosophiques** (filosofikafeer) ble populære fra 1990-tallet, og bøker som **«Le Monde de Sophie»** av Jostein Gaarder ble bestselgere i Frankrike.

I dag står filosofien overfor nye utfordringer: kunstig intelligens, klimaetikk, bioteknologi og sosiale mediers innvirkning på demokratiet. Franske filosofer og intellektuelle deltar aktivt i disse debattene.

### Ordforråd: Filosofi og samtid

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| l'éthique (f.) | etikken | f. |
| la morale | moralen | f. |
| le débat | debatten | m. |
| l'intelligence artificielle (f.) | kunstig intelligens | f. |
| la liberté d'expression | ytringsfriheten | f. |
| la justice sociale | sosial rettferdighet | f. |
| le transhumanisme | transhumanismen | m. |
| la pensée critique | kritisk tenkning | f. |
| un dilemme éthique | et etisk dilemma | m. |
| les réseaux sociaux | sosiale medier | m.pl. |`
    },
    {
      id: 'fransk-3-11-4-def-1',
      type: 'definition',
      title: "L'éthique vs. la morale",
      content: `**L'éthique** (*etikken*) og **la morale** (*moralen*) brukes ofte som synonymer, men har en viktig nyanseforskjell i fransk filosofisk tradisjon:\n\n- **La morale** handler om regler og normer for rett og galt — hva man *bør* gjøre. Den er mer absolutt og normativ.\n- **L'éthique** handler om refleksjon over disse reglene — *hvorfor* noe er rett eller galt, og hvordan vi bør handle i komplekse situasjoner der reglene ikke gir klare svar.\n\nI moderne fransk debatt brukes **l'éthique** oftere, spesielt i sammenheng med nye teknologier: *l'éthique de l'IA* (AI-etikk), *la bioéthique* (bioetikk), *l'éthique environnementale* (miljøetikk).`
    },
    {
      id: 'fransk-3-11-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Filosofisk debatt om kunstig intelligens',
      problem: `Les følgende to standpunkter om kunstig intelligens og analyser de filosofiske argumentene:\n\n**Standpunkt A**: *«L'intelligence artificielle libérera l'humanité des tâches répétitives et ouvrira une nouvelle ère de créativité et de progrès.»*\n\n**Standpunkt B**: *«L'intelligence artificielle menace la dignité humaine en réduisant l'homme à un ensemble de données et d'algorithmes.»*\n\nHvilke filosofiske tradisjoner gjenspeiles i hvert standpunkt?`,
      solution: `**Standpunkt A** gjenspeiler:\n- **Opplysningsfilosofien** (*les Lumières*): troen på fremskritt gjennom fornuft og vitenskap\n- **Transhumanismen**: teknologi som veien til menneskelig forbedring\n- Oversettelse: «Kunstig intelligens vil frigjøre menneskeheten fra repetitive oppgaver og åpne en ny æra av kreativitet og fremskritt.»\n\n**Standpunkt B** gjenspeiler:\n- **Eksistensialismen**: fokus på menneskelig verdighet og frihet\n- **Foucaults maktanalyse**: teknologi som overvåknings- og kontrollverktøy\n- **Bioetikken**: spørsmålet om hva det betyr å være menneskelig\n- Oversettelse: «Kunstig intelligens truer menneskeverdet ved å redusere mennesket til et sett med data og algoritmer.»\n\nDebatten viser hvordan filosofiske tradisjoner lever videre i samtidens diskusjoner.`
    },
    {
      id: 'fransk-3-11-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er forskjellen mellom «l\'éthique» og «la morale» i fransk filosofisk tradisjon?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell — ordene er fullstendig synonyme', isCorrect: false },
          { id: 'b', text: 'La morale handler om regler for rett/galt, mens l\'éthique handler om refleksjon over disse reglene', isCorrect: true },
          { id: 'c', text: 'L\'éthique er religiøs, mens la morale er sekulær', isCorrect: false },
          { id: 'd', text: 'La morale gjelder bare individer, mens l\'éthique gjelder samfunnet', isCorrect: false },
        ],
        solution: `Riktig svar er B. I fransk filosofisk tradisjon er la morale mer normativ (regler for rett og galt), mens l'éthique er mer reflekterende (hvorfor noe er rett eller galt, spesielt i komplekse situasjoner). I praksis brukes l'éthique stadig oftere, særlig i forbindelse med nye teknologier og bioetikk.`,
      }
    },
    {
      id: 'fransk-3-11-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er «un café philosophique»?',
        options: [
          { id: 'a', text: 'En kafé der man bare serverer filosofibøker', isCorrect: false },
          { id: 'b', text: 'Et uformelt møtested der folk samles for å diskutere filosofiske temaer', isCorrect: true },
          { id: 'c', text: 'En universitetsforelesning om kaffeens historie', isCorrect: false },
          { id: 'd', text: 'En type kaffe oppkalt etter en filosof', isCorrect: false },
        ],
        solution: `Riktig svar er B. Les cafés philosophiques er et typisk fransk fenomen der vanlige folk møtes — gjerne på en kafé — for å diskutere filosofiske spørsmål. Tradisjonen begynte i Paris i 1992 og har spredt seg internasjonalt. Det illustrerer filosofiens plass i fransk hverdagskultur.`,
      }
    },
    {
      id: 'fransk-3-11-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Oversett følgende setninger til fransk:\n\n1. Kritisk tenkning er viktig i en demokratisk samfunn.\n2. Etiske dilemmaer oppstår med ny teknologi.\n3. Sosiale medier utfordrer ytringsfriheten.\n4. Kunstig intelligens reiser filosofiske spørsmål.\n5. Filosofi er et obligatorisk fag i fransk videregående skole.`,
        solution: `1. *La pensée critique est importante dans une société démocratique.*\n2. *Des dilemmes éthiques surgissent avec les nouvelles technologies.*\n3. *Les réseaux sociaux mettent en question la liberté d'expression.*\n4. *L'intelligence artificielle soulève des questions philosophiques.*\n5. *La philosophie est une matière obligatoire au lycée en France.*`,
      }
    },
    {
      id: 'fransk-3-11-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Filosofi i Frankrike** er en del av hverdagskulturen — obligatorisk fag, kaféfilosofi, offentlig debatt
- **L'éthique vs. la morale**: Etikk handler om refleksjon, moral om regler
- **Nye filosofiske utfordringer**: AI, klimaetikk, transhumanisme, sosiale medier
- **Filosofiske tradisjoner lever videre**: Opplysningstidens fremskrittstro vs. eksistensialismens fokus på menneskeverd
- **Les cafés philosophiques**: Uformelle filosofiske diskusjoner som typisk fransk fenomen`
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-3-11-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et kort innlegg til en «café philosophique» på fransk (100–150 ord) om følgende tema:\n\n*«Les réseaux sociaux rendent-ils l'homme plus libre ou plus prisonnier ?»*\n(Gjør sosiale medier mennesket friere eller mer fanget?)\n\nBruk filosofiske begreper fra hele kapittel 11 (Descartes, eksistensialisme, strukturalisme, etikk).`,
        solution: `Eksempel:\n\n*«Cette question nous ramène au cœur de la philosophie française. Descartes cherchait la certitude par la raison — mais les réseaux sociaux nous plongent dans un océan de désinformation où la certitude est impossible.\n\nSartre affirmait que l'homme est «condamné à être libre». En théorie, les réseaux sociaux élargissent notre liberté d'expression : chacun peut publier ses pensées. Mais cette liberté est-elle réelle ? Foucault nous rappelle que le pouvoir s'exerce à travers le discours — et les algorithmes contrôlent désormais quels discours nous atteignent.\n\nBarthes annonçait la mort de l'auteur et la naissance du lecteur. Sur les réseaux sociaux, nous sommes tous auteurs et lecteurs — mais sommes-nous vraiment libres si nos choix sont guidés par des algorithmes ?\n\nÀ mon avis, les réseaux sociaux créent une illusion de liberté — ce que Sartre appellerait peut-être une nouvelle forme de mauvaise foi.»*`,
      }
    },
    {
      id: 'fransk-3-11-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-11-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Det franske baccalauréat-eksamenen begynner tradisjonelt med en filosofiprøve. Velg ett av følgende typiske bac-spørsmål og skriv en kort besvarelse på fransk (100–120 ord):\n\na) *Peut-on être heureux sans être libre ?* (Kan man være lykkelig uten å være fri?)\nb) *La technique nous libère-t-elle ?* (Frigjør teknikken oss?)\nc) *Faut-il chercher la vérité ?* (Bør man søke sannheten?)`,
        solution: `Eksempel for (a):\n\n*«Le bonheur et la liberté sont-ils indissociables ? Sartre affirmerait que non : sans liberté, il n'y a pas d'existence authentique, et donc pas de bonheur véritable. Pour Sartre, le bonheur dans la soumission est une forme de mauvaise foi.\n\nCependant, on pourrait objecter que certaines formes de bonheur n'exigent pas la liberté politique. L'enfant est heureux sans être libre au sens politique du terme. Les mystiques trouvent le bonheur dans l'abandon de la volonté individuelle.\n\nNéanmoins, Camus nous enseigne que même Sisyphe peut être heureux — mais seulement parce qu'il est conscient de sa condition. Le bonheur authentique exige donc au minimum la liberté de conscience — la capacité de comprendre sa propre situation. En ce sens, un bonheur sans aucune forme de liberté serait une illusion.»*`,
      }
    },
  ],
  exercises: [],
  keyTerms: [
    { term: "l'éthique (f.)", definition: 'Etikken — refleksjon over moralske spørsmål og handlingsnormer' },
    { term: 'la morale', definition: 'Moralen — regler og normer for rett og galt' },
    { term: 'la pensée critique', definition: 'Kritisk tenkning — evnen til å analysere og vurdere påstander selvstendig' },
    { term: "l'intelligence artificielle (f.)", definition: 'Kunstig intelligens — maskinsystemer som simulerer menneskelig tenkning' },
    { term: 'le transhumanisme', definition: 'Transhumanismen — bevegelse som ønsker å forbedre mennesket gjennom teknologi' },
    { term: 'un café philosophique', definition: 'Filosofikafé — uformelt møtested for filosofisk diskusjon' },
    { term: 'un dilemme éthique', definition: 'Et etisk dilemma — situasjon der ulike verdier står mot hverandre' },
    { term: 'la liberté d\'expression', definition: 'Ytringsfriheten — retten til å uttrykke sine meninger fritt' },
  ],
};

// ============================================================================
// KAPITTEL 12: Sciences et environnement
// ============================================================================

// ============================================================================
// Kapittel 12.1: Le vocabulaire scientifique
// ============================================================================

export const CHAPTER_FRANSK_3_12_1: TextbookChapter = {
  id: 'fransk-3-12-1',
  courseId: 'fransk-3',
  chapterNumber: '12.1',
  title: 'Le vocabulaire scientifique',
  subtitle: 'Vitenskapelig vokabular',
  description: 'Lær å diskutere vitenskapelige temaer på avansert fransk med presist fagspråk.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke et avansert og nyansert ordforråd tilpasset formål og situasjon'],
  content: [
    {
      id: 'fransk-3-12-1-intro',
      type: 'text',
      content: `## Le vocabulaire scientifique — Vitenskapelig vokabular

Vitenskapelig diskurs på fransk krever et presist og nyansert ordforråd. Frankrike har en lang tradisjon for vitenskapelig forskning, og det franske språket har bidratt med en rekke fagtermer til det internasjonale vitenskapelige ordforrådet.

I dette kapittelet lærer du de sentrale begrepene som brukes i vitenskapelig arbeid — fra hypotesedannelse til publisering av resultater. Du vil bli kjent med den vitenskapelige metoden (*la méthode scientifique*) slik den beskrives på fransk, og utvikle evnen til å lese og diskutere vitenskapelige tekster.

### Sentrale vitenskapelige termer

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| la recherche | forskning | f. |
| l'hypothèse (f.) | hypotese | f. |
| la méthode scientifique | den vitenskapelige metoden | f. |
| l'expérience (f.) | eksperiment | f. |
| le résultat | resultat | m. |
| la conclusion | konklusjon | f. |
| la donnée | data (enkelt) | f. |
| les données (f.pl.) | data (flertall) | f.pl. |
| le phénomène | fenomen | m. |
| la preuve | bevis | f. |
| le chercheur / la chercheuse | forsker | m./f. |
| le laboratoire | laboratorium | m. |`
    },
    {
      id: 'fransk-3-12-1-def-1',
      type: 'definition',
      title: 'La méthode scientifique',
      content: `**La méthode scientifique** (*den vitenskapelige metoden*) er en systematisk fremgangsmåte for å undersøke fenomener, tilegne seg ny kunnskap og korrigere tidligere kunnskap. Den følger trinnene: *observation → hypothèse → expérience → analyse des résultats → conclusion*.

Eksempel: *«La méthode scientifique repose sur la vérification empirique des hypothèses.»* — Den vitenskapelige metoden bygger på empirisk verifisering av hypoteser.`
    },
    {
      id: 'fransk-3-12-1-def-2',
      type: 'definition',
      title: 'La recherche fondamentale vs. la recherche appliquée',
      content: `**La recherche fondamentale** (*grunnforskning*) har som mål å utvide kunnskap uten umiddelbar praktisk anvendelse. **La recherche appliquée** (*anvendt forskning*) sikter mot å løse konkrete problemer.

Eksempel: *«La recherche fondamentale en physique quantique a mené à des applications inattendues, comme le laser.»* — Grunnforskning i kvantefysikk har ført til uventede anvendelser, som laseren.`
    },
    {
      id: 'fransk-3-12-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Beskrivelse av den vitenskapelige metoden',
      problem: `Oversett følgende tekst til fransk:\n\n*«Forskeren observerte et uvanlig fenomen i laboratoriet. Hun formulerte en hypotese og gjennomførte flere eksperimenter for å teste den. Resultatene bekreftet hypotesen, og hun publiserte konklusjonene i et vitenskapelig tidsskrift.»*`,
      solution: `*«La chercheuse a observé un phénomène inhabituel dans le laboratoire. Elle a formulé une hypothèse et a mené plusieurs expériences pour la tester. Les résultats ont confirmé l'hypothèse, et elle a publié ses conclusions dans une revue scientifique.»*

**Nøkkelbegreper:**
- *un phénomène inhabituel* — et uvanlig fenomen
- *formuler une hypothèse* — formulere en hypotese
- *mener une expérience* — gjennomføre et eksperiment
- *confirmer l'hypothèse* — bekrefte hypotesen
- *une revue scientifique* — et vitenskapelig tidsskrift`
    },
    {
      id: 'fransk-3-12-1-text-2',
      type: 'text',
      content: `### Les étapes de la démarche scientifique — Trinnene i den vitenskapelige fremgangsmåten

Den vitenskapelige metoden beskrives ofte med følgende trinn på fransk:

1. **L'observation** — Observasjon av et fenomen
2. **La formulation d'une hypothèse** — Formulering av en hypotese
3. **L'expérimentation** — Gjennomføring av eksperimenter
4. **L'analyse des résultats** — Analyse av resultater
5. **La conclusion** — Konklusjon
6. **La publication** — Publisering i fagfellevurderte tidsskrifter (*revues à comité de lecture*)

### Viktige verb i vitenskapelig diskurs

| Fransk | Norsk |
|--------|-------|
| observer | observere |
| formuler | formulere |
| analyser | analysere |
| démontrer | demonstrere, bevise |
| vérifier | verifisere |
| confirmer | bekrefte |
| infirmer | avkrefte |
| publier | publisere |
| corroborer | underbygge |
| réfuter | tilbakevise |`
    },
    {
      id: 'fransk-3-12-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Vitenskapelig abstrakt',
      problem: `Les følgende vitenskapelige abstrakt og forklar de sentrale begrepene:\n\n*«Cette étude vise à examiner l'effet de la température sur la croissance des micro-organismes. Nous avons formulé l'hypothèse selon laquelle une augmentation de température accélérerait la reproduction cellulaire. Les données recueillies au cours de nos expériences corroborent cette hypothèse, bien que des variables confondantes aient pu influencer les résultats.»*`,
      solution: `**Oversettelse:** *Denne studien har som mål å undersøke effekten av temperatur på veksten av mikroorganismer. Vi formulerte hypotesen om at en temperaturøkning ville akselerere cellereroduksjonen. Dataene innsamlet i løpet av eksperimentene våre underbygger denne hypotesen, selv om forstyrrende variabler kan ha påvirket resultatene.*

**Sentrale begreper:**
- *cette étude vise à* — denne studien har som mål å
- *l'effet de... sur...* — effekten av... på...
- *la croissance* — vekst
- *les données recueillies* — innsamlede data
- *corroborer* — underbygge, styrke
- *les variables confondantes* — forstyrrende variabler (konfunderende variabler)`
    },
    {
      id: 'fransk-3-12-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr det franske uttrykket *«infirmer une hypothèse»*?',
        options: [
          { id: 'a', text: 'Bekrefte en hypotese', isCorrect: false },
          { id: 'b', text: 'Formulere en hypotese', isCorrect: false },
          { id: 'c', text: 'Avkrefte en hypotese', isCorrect: true },
          { id: 'd', text: 'Publisere en hypotese', isCorrect: false },
        ],
        solution: `Riktig svar er C. *Infirmer* betyr å avkrefte eller motbevise. Det er det motsatte av *confirmer* (bekrefte). I vitenskapelig kontekst brukes det når eksperimentelle data ikke støtter hypotesen: *«Les résultats ont infirmé notre hypothèse initiale.»*`,
      }
    },
    {
      id: 'fransk-3-12-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilket av følgende ord betyr *grunnforskning* på fransk?',
        options: [
          { id: 'a', text: 'La recherche appliquée', isCorrect: false },
          { id: 'b', text: 'La recherche fondamentale', isCorrect: true },
          { id: 'c', text: 'La recherche empirique', isCorrect: false },
          { id: 'd', text: 'La recherche exploratoire', isCorrect: false },
        ],
        solution: `Riktig svar er B. *La recherche fondamentale* er grunnforskning — forskning som utvider kunnskap uten umiddelbar praktisk anvendelse. *La recherche appliquée* (A) er anvendt forskning. *La recherche empirique* (C) er empirisk forskning, og *la recherche exploratoire* (D) er utforskende forskning.`,
      }
    },
    {
      id: 'fransk-3-12-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Oversett følgende setninger til fransk. Bruk vitenskapelig fagspråk:\n\n1. Forskeren gjennomførte et eksperiment for å verifisere hypotesen.\n2. Resultatene ble analysert og publisert i et fagfellevurdert tidsskrift.\n3. Dataene underbygger ikke den opprinnelige hypotesen.\n4. Den vitenskapelige metoden krever empirisk verifisering.`,
        solution: `1. *Le chercheur a mené une expérience pour vérifier l'hypothèse.*\n2. *Les résultats ont été analysés et publiés dans une revue à comité de lecture.*\n3. *Les données ne corroborent pas l'hypothèse initiale.*\n4. *La méthode scientifique exige une vérification empirique.*\n\nLegg merke til bruken av passé composé i setning 1 og 2, og presens i setning 3 og 4 for generelle påstander.`,
      }
    },
    {
      id: 'fransk-3-12-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et kort vitenskapelig abstrakt (80–120 ord) på fransk om et valgfritt vitenskapelig tema. Abstraktet skal inneholde:\n\n- En presentasjon av studiens mål (*cette étude vise à...*)\n- En hypotese (*nous avons formulé l'hypothèse selon laquelle...*)\n- En kort beskrivelse av metoden (*la méthode employée...*)\n- Resultater (*les résultats montrent que...*)\n- En konklusjon (*en conclusion...*)\n\nBruk minst 8 vitenskapelige fagtermer fra kapittelet.`,
        solution: `Eksempel på et godt abstrakt:\n\n*«Cette étude vise à examiner l'influence de la pollution atmosphérique sur la biodiversité urbaine. Nous avons formulé l'hypothèse selon laquelle l'augmentation des particules fines réduirait la diversité des espèces d'insectes. La méthode employée repose sur l'observation systématique de populations d'insectes dans trois zones urbaines présentant des niveaux de pollution différents. Les données recueillies au cours de six mois d'expérimentation montrent une corrélation négative significative entre le taux de particules fines et la diversité entomologique. En conclusion, ces résultats corroborent notre hypothèse initiale et soulignent l'urgence de mesures environnementales.»*`,
      }
    },
    {
      id: 'fransk-3-12-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilken setning bruker vitenskapelig fagspråk korrekt?',
        options: [
          { id: 'a', text: '«Les résultats prouvent définitivement que l\'hypothèse est vraie.»', isCorrect: false },
          { id: 'b', text: '«Les données recueillies corroborent l\'hypothèse formulée.»', isCorrect: true },
          { id: 'c', text: '«L\'expérience a montré que la théorie est certaine.»', isCorrect: false },
          { id: 'd', text: '«Le chercheur a trouvé la vérité absolue.»', isCorrect: false },
        ],
        solution: `Riktig svar er B. Vitenskapelig språk unngår absolutte påstander som «prouver définitivement» (A), «certaine» (C) eller «la vérité absolue» (D). Formuleringen *«corroborer l'hypothèse»* uttrykker at dataene støtter hypotesen uten å påstå endelig sannhet — dette er typisk for forsiktig vitenskapelig språkbruk (*la prudence scientifique*).`,
      }
    },
    {
      id: 'fransk-3-12-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Sentrale vitenskapelige termer** på fransk: *la recherche*, *l'hypothèse*, *l'expérience*, *les données*, *la conclusion*
- **Den vitenskapelige metoden** (*la méthode scientifique*) og dens trinn på fransk
- **Forskjellen mellom grunnforskning og anvendt forskning**: *la recherche fondamentale* vs. *la recherche appliquée*
- **Viktige verb** i vitenskapelig diskurs: *observer, formuler, analyser, démontrer, vérifier, confirmer, infirmer, corroborer, réfuter*
- **Vitenskapelig forsiktighet** (*la prudence scientifique*): å bruke nyanserte formuleringer i stedet for absolutte påstander
- Hvordan man skriver et **vitenskapelig abstrakt** på fransk`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la recherche', definition: 'Forskning — systematisk arbeid for å utvide kunnskap' },
    { term: 'l\'hypothèse', definition: 'Hypotese — en testbar antakelse som utgangspunkt for undersøkelse' },
    { term: 'la méthode scientifique', definition: 'Den vitenskapelige metoden — systematisk fremgangsmåte for å undersøke fenomener' },
    { term: 'l\'expérience', definition: 'Eksperiment — kontrollert forsøk for å teste en hypotese' },
    { term: 'les données', definition: 'Data — informasjon innsamlet gjennom observasjon eller eksperiment' },
    { term: 'corroborer', definition: 'Underbygge — å styrke en påstand med bevis' },
    { term: 'infirmer', definition: 'Avkrefte — å motbevise en hypotese eller påstand' },
    { term: 'une revue à comité de lecture', definition: 'Et fagfellevurdert tidsskrift — publikasjon der artikler vurderes av eksperter' },
  ],
};

// ============================================================================
// Kapittel 12.2: L'environnement et le changement climatique
// ============================================================================

export const CHAPTER_FRANSK_3_12_2: TextbookChapter = {
  id: 'fransk-3-12-2',
  courseId: 'fransk-3',
  chapterNumber: '12.2',
  title: 'L\'environnement et le changement climatique',
  subtitle: 'Miljø og klimaendringer',
  description: 'Lær å drøfte miljøspørsmål og klimapolitikk på avansert fransk.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke et avansert og nyansert ordforråd tilpasset formål og situasjon', 'drøfte aktuelle samfunnsspørsmål i franskspråklige land'],
  content: [
    {
      id: 'fransk-3-12-2-intro',
      type: 'text',
      content: `## L'environnement et le changement climatique — Miljø og klimaendringer

Frankrike spiller en sentral rolle i internasjonal klimapolitikk, ikke minst som vertskap for den historiske *Accord de Paris* (Parisavtalen) i 2015. Å kunne diskutere miljø- og klimaspørsmål på fransk er essensielt for å forstå franskspråklig samfunnsdebatt og delta i internasjonale diskusjoner.

### Ordforråd: Miljø og klima

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| le changement climatique | klimaendringer | m. |
| le réchauffement climatique | global oppvarming | m. |
| l'effet de serre (m.) | drivhuseffekten | m. |
| les gaz à effet de serre (m.pl.) | drivhusgasser | m.pl. |
| l'empreinte carbone (f.) | karbonfotavtrykk | f. |
| le développement durable | bærekraftig utvikling | m. |
| les énergies renouvelables (f.pl.) | fornybar energi | f.pl. |
| la biodiversité | biologisk mangfold | f. |
| la déforestation | avskoging | f. |
| la pollution | forurensning | f. |
| les déchets (m.pl.) | avfall | m.pl. |
| le recyclage | resirkulering | m. |
| la transition écologique | den grønne omstillingen | f. |
| la COP (Conférence des Parties) | partsmøtet (FNs klimakonferanse) | f. |`
    },
    {
      id: 'fransk-3-12-2-def-1',
      type: 'definition',
      title: 'Le développement durable',
      content: `**Le développement durable** (*bærekraftig utvikling*) er definert som utvikling som imøtekommer dagens behov uten å ødelegge fremtidige generasjoners mulighet til å imøtekomme sine behov. Begrepet ble popularisert gjennom Brundtland-rapporten (*le rapport Brundtland*, 1987).

Eksempel: *«Le développement durable repose sur trois piliers : économique, social et environnemental.»* — Bærekraftig utvikling hviler på tre pilarer: økonomisk, sosial og miljømessig.`
    },
    {
      id: 'fransk-3-12-2-def-2',
      type: 'definition',
      title: 'L\'Accord de Paris',
      content: `**L'Accord de Paris** (*Parisavtalen*) ble vedtatt under COP21 i Paris i desember 2015. Avtalen forplikter deltakerlandene til å begrense den globale temperaturøkningen til godt under 2°C, helst 1,5°C, sammenlignet med førindustrielt nivå.

Eksempel: *«L'Accord de Paris engage les pays signataires à réduire leurs émissions de gaz à effet de serre pour limiter le réchauffement climatique à 1,5 degré.»* — Parisavtalen forplikter signatarlandene til å redusere utslippene av drivhusgasser for å begrense global oppvarming til 1,5 grader.`
    },
    {
      id: 'fransk-3-12-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Analyse av en klimatekst',
      problem: `Les følgende utdrag og analyser argumentasjonen:\n\n*«La transition écologique est devenue une priorité incontournable pour la France. Face à l'urgence climatique, le gouvernement a mis en place des mesures ambitieuses : interdiction des véhicules thermiques neufs d'ici 2035, développement massif des énergies renouvelables, et rénovation énergétique des bâtiments. Cependant, ces mesures suscitent des controverses. Les «gilets jaunes» ont rappelé que la transition écologique ne peut se faire au détriment des plus vulnérables.»*`,
      solution: `**Oversettelse:** *Den grønne omstillingen har blitt en uunngåelig prioritet for Frankrike. I møte med klimakrisen har regjeringen innført ambisiøse tiltak: forbud mot nye biler med forbrenningsmotor innen 2035, massiv utbygging av fornybar energi, og energirenovering av bygninger. Likevel skaper disse tiltakene kontroverser. «De gule vestene» påminte om at den grønne omstillingen ikke kan skje på bekostning av de mest sårbare.*

**Analyse av argumentasjonen:**
- **Tesen:** Den grønne omstillingen er nødvendig (*une priorité incontournable*)
- **Argumenter for:** Konkrete tiltak fra regjeringen (forbud, fornybar energi, renovering)
- **Motargument:** Sosial urettferdighet — omstillingen kan ramme sårbare grupper
- **Retorisk grep:** Bruken av *cependant* (likevel) markerer en konsesjon til motargumentet`
    },
    {
      id: 'fransk-3-12-2-text-2',
      type: 'text',
      content: `### Les énergies renouvelables en France — Fornybar energi i Frankrike

Frankrike har en unik energiprofil i Europa. Landet er sterkt avhengig av kjernekraft (*l'énergie nucléaire*), som står for rundt 70 % av strømproduksjonen. Samtidig satser Frankrike på fornybar energi:

| Type énergie | Fransk term | Andel i Frankrike |
|-------------|-------------|-------------------|
| Kjernekraft | l'énergie nucléaire | ~70 % |
| Vannkraft | l'énergie hydraulique | ~12 % |
| Vindkraft | l'énergie éolienne | ~8 % |
| Solenergi | l'énergie solaire | ~4 % |
| Bioenergi | la biomasse | ~3 % |

### Nyttige uttrykk for klimadebatt

- *réduire les émissions de CO₂* — redusere CO₂-utslipp
- *lutter contre le réchauffement climatique* — bekjempe global oppvarming
- *préserver la biodiversité* — bevare det biologiske mangfoldet
- *promouvoir le développement durable* — fremme bærekraftig utvikling
- *sensibiliser le public* — bevisstgjøre befolkningen
- *prendre des mesures concrètes* — treffe konkrete tiltak`
    },
    {
      id: 'fransk-3-12-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Argumenterende tekst om klimapolitikk',
      problem: `Skriv innledningen til en argumenterende tekst (3–4 setninger på fransk) som drøfter om Frankrike gjør nok for å bekjempe klimaendringer.`,
      solution: `Eksempel på en god innledning:\n\n*«Le changement climatique représente l'un des défis les plus urgents de notre époque. Si la France s'est positionnée comme un leader mondial de la diplomatie climatique, notamment grâce à l'Accord de Paris signé en 2015, la question se pose de savoir si les mesures nationales sont à la hauteur de ces ambitions internationales. Nous examinerons dans quelle mesure la politique environnementale française répond véritablement à l'urgence climatique.»*

**Analyse:**
- Åpning med konstatering av problemets alvorlighet
- Konsesjon: Frankrike har vist lederskap (*s'est positionnée comme un leader*)
- Problemstilling formulert som spørsmål (*la question se pose de savoir si...*)
- Annonsering av drøftingens fokus (*nous examinerons dans quelle mesure...*)`
    },
    {
      id: 'fransk-3-12-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr *«les gaz à effet de serre»* på norsk?',
        options: [
          { id: 'a', text: 'Giftige gasser', isCorrect: false },
          { id: 'b', text: 'Drivhusgasser', isCorrect: true },
          { id: 'c', text: 'Luftforurensning', isCorrect: false },
          { id: 'd', text: 'Osonlaget', isCorrect: false },
        ],
        solution: `Riktig svar er B. *Les gaz à effet de serre* betyr drivhusgasser. *L'effet de serre* betyr drivhuseffekten (bokstavelig: «drivhusvirkningen»). De viktigste drivhusgassene er *le dioxyde de carbone (CO₂)*, *le méthane (CH₄)* og *le protoxyde d'azote (N₂O)*.`,
      }
    },
    {
      id: 'fransk-3-12-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilken formulering er mest passende i en formell tekst om klimapolitikk?',
        options: [
          { id: 'a', text: '«Le climat, c\'est vraiment un gros problème.»', isCorrect: false },
          { id: 'b', text: '«Il faut faire quelque chose pour la planète.»', isCorrect: false },
          { id: 'c', text: '«L\'urgence climatique exige des mesures structurelles à l\'échelle mondiale.»', isCorrect: true },
          { id: 'd', text: '«On doit sauver la Terre tout de suite.»', isCorrect: false },
        ],
        solution: `Riktig svar er C. Formuleringen *«L'urgence climatique exige des mesures structurelles à l'échelle mondiale»* bruker presist og formelt språk som passer i en akademisk eller politisk tekst. De andre alternativene er for uformelle (A: *un gros problème*), for vage (B: *quelque chose*) eller for emosjonelle (D: *sauver la Terre tout de suite*).`,
      }
    },
    {
      id: 'fransk-3-12-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Oversett følgende setninger til fransk med korrekt fagvokabular:\n\n1. Karbonfotavtrykket til Frankrike har blitt redusert de siste årene.\n2. Fornybar energi representerer en voksende andel av energiproduksjonen.\n3. Parisavtalen forplikter landene til å begrense global oppvarming.\n4. Den grønne omstillingen krever store investeringer.\n5. Vi må bevare det biologiske mangfoldet for fremtidige generasjoner.`,
        solution: `1. *L'empreinte carbone de la France a été réduite ces dernières années.*\n2. *Les énergies renouvelables représentent une part croissante de la production énergétique.*\n3. *L'Accord de Paris engage les pays à limiter le réchauffement climatique.*\n4. *La transition écologique nécessite des investissements considérables.*\n5. *Nous devons préserver la biodiversité pour les générations futures.*`,
      }
    },
    {
      id: 'fransk-3-12-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en argumenterende tekst (150–200 ord) på fransk der du drøfter følgende problemstilling:\n\n*«La transition écologique est-elle compatible avec la justice sociale ?»*\n(Er den grønne omstillingen forenlig med sosial rettferdighet?)\n\nTeksten skal inneholde:\n- En innledning med problemstillingen\n- Minst to argumenter for (*d'une part...*)\n- Minst ett motargument (*cependant...*)\n- En konklusjon\n\nBruk minst 10 fagtermer fra kapittelet.`,
        solution: `Eksempel på en god tekst:\n\n*«La transition écologique est au cœur des débats politiques actuels. D'une part, le développement durable offre des opportunités économiques : les énergies renouvelables créent des emplois verts, et la rénovation énergétique réduit les factures des ménages. D'autre part, la lutte contre le réchauffement climatique est indispensable pour préserver la biodiversité et garantir un avenir viable aux générations futures.\n\nCependant, la transition écologique peut aggraver les inégalités sociales. La taxe carbone, par exemple, pèse davantage sur les ménages les plus modestes, comme l'a illustré le mouvement des gilets jaunes en 2018. De plus, l'interdiction des véhicules thermiques risque de pénaliser les populations rurales dépendantes de leur voiture.\n\nEn conclusion, la transition écologique doit impérativement s'accompagner de mesures de justice sociale pour être acceptée par l'ensemble de la population.»*`,
      }
    },
    {
      id: 'fransk-3-12-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva ble vedtatt under COP21 i Paris i 2015?',
        options: [
          { id: 'a', text: 'Kyoto-protokollen', isCorrect: false },
          { id: 'b', text: 'Parisavtalen (l\'Accord de Paris)', isCorrect: true },
          { id: 'c', text: 'Montreal-protokollen', isCorrect: false },
          { id: 'd', text: 'EUs grønne avtale (le Pacte vert)', isCorrect: false },
        ],
        solution: `Riktig svar er B. *L'Accord de Paris* (Parisavtalen) ble vedtatt under COP21 i desember 2015. Avtalen binder deltakerlandene til å begrense global oppvarming til under 2°C. Kyoto-protokollen (A) ble vedtatt i 1997, Montreal-protokollen (C) handler om osonlaget (1987), og EUs grønne avtale (D) er fra 2019.`,
      }
    },
    {
      id: 'fransk-3-12-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Miljø- og klimavokabular** på fransk: *le changement climatique*, *le réchauffement climatique*, *l'effet de serre*, *les gaz à effet de serre*
- **Bærekraftsbegreper**: *le développement durable*, *la transition écologique*, *les énergies renouvelables*
- **Frankrikes energiprofil** og landets avhengighet av kjernekraft (*l'énergie nucléaire*)
- **Parisavtalen** (*l'Accord de Paris*) og Frankrikes rolle i internasjonal klimapolitikk
- Å skrive **argumenterende tekster** om klimapolitikk med korrekt fagspråk
- Sammenhengen mellom **grønn omstilling og sosial rettferdighet** (*la justice sociale*)`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'le changement climatique', definition: 'Klimaendringer — langsiktige endringer i temperatur og værmønstre' },
    { term: 'le développement durable', definition: 'Bærekraftig utvikling — utvikling som ikke ødelegger fremtidige generasjoners muligheter' },
    { term: 'les énergies renouvelables', definition: 'Fornybar energi — energikilder som ikke går tomme (sol, vind, vann)' },
    { term: 'l\'Accord de Paris', definition: 'Parisavtalen — internasjonal klimaavtale vedtatt under COP21 i 2015' },
    { term: 'l\'empreinte carbone', definition: 'Karbonfotavtrykk — total mengde drivhusgasser en aktivitet forårsaker' },
    { term: 'la transition écologique', definition: 'Den grønne omstillingen — overgang til et bærekraftig samfunn' },
    { term: 'les gaz à effet de serre', definition: 'Drivhusgasser — gasser som forsterker drivhuseffekten (CO₂, metan m.fl.)' },
  ],
};

// ============================================================================
// Kapittel 12.3: Les grandes découvertes françaises
// ============================================================================

export const CHAPTER_FRANSK_3_12_3: TextbookChapter = {
  id: 'fransk-3-12-3',
  courseId: 'fransk-3',
  chapterNumber: '12.3',
  title: 'Les grandes découvertes françaises',
  subtitle: 'Store franske oppdagelser',
  description: 'Utforsk Frankrikes viktigste vitenskapelige bidrag, fra Pasteur til Marie Curie.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke et avansert og nyansert ordforråd tilpasset formål og situasjon', 'gjøre rede for sentrale historiske og kulturelle forhold i franskspråklige land'],
  content: [
    {
      id: 'fransk-3-12-3-intro',
      type: 'text',
      content: `## Les grandes découvertes françaises — Store franske oppdagelser

Frankrike har gjennom historien stått bak en rekke banebrytende vitenskapelige oppdagelser. Franske forskere har bidratt avgjørende til medisin, fysikk, kjemi, matematikk og biologi. Å kjenne til disse oppdagelsene gir innsikt i fransk kultur og vitenskapshistorie, og beriker ordforrådet ditt med presise fagtermer.

### Sentrale franske vitenskapsfolk

| Forsker | Felt | Viktigste bidrag |
|---------|------|------------------|
| Louis Pasteur (1822–1895) | Mikrobiologi | Pasteurisering, vaksinasjon |
| Marie Curie (1867–1934) | Fysikk/kjemi | Radioaktivitet, radium og polonium |
| Antoine Lavoisier (1743–1794) | Kjemi | Grunnlegger av moderne kjemi |
| René Descartes (1596–1650) | Filosofi/matematikk | Kartesisk koordinatsystem |
| Blaise Pascal (1623–1662) | Matematikk/fysikk | Sannsynlighetsregning, trykklovene |
| Pierre og Marie Curie | Fysikk | Oppdagelsen av radioaktivitet |`
    },
    {
      id: 'fransk-3-12-3-def-1',
      type: 'definition',
      title: 'La pasteurisation',
      content: `**La pasteurisation** (*pasteurisering*) er en prosess utviklet av Louis Pasteur som dreper skadelige mikroorganismer i matvarer og drikke ved å varme dem opp til en bestemt temperatur. Pasteur beviste også at sykdommer kunne forårsakes av mikroorganismer (*la théorie des germes*).

Eksempel: *«Grâce à la pasteurisation, Pasteur a révolutionné l'industrie alimentaire et sauvé des millions de vies.»* — Takket være pasteuriseringen revolusjonerte Pasteur næringsmiddelindustrien og reddet millioner av liv.`
    },
    {
      id: 'fransk-3-12-3-def-2',
      type: 'definition',
      title: 'La radioactivité',
      content: `**La radioactivité** (*radioaktivitet*) ble oppdaget av Henri Becquerel i 1896 og videre utforsket av Marie og Pierre Curie. Marie Curie oppdaget grunnstoffene *le radium* og *le polonium*, og var den første kvinnen som vant Nobelprisen — og den eneste personen som har vunnet Nobelprisen i to ulike vitenskaper (fysikk 1903, kjemi 1911).

Eksempel: *«Marie Curie a consacré sa vie à l'étude de la radioactivité, malgré les risques pour sa santé.»* — Marie Curie viet livet sitt til studiet av radioaktivitet, til tross for helserisikoen.`
    },
    {
      id: 'fransk-3-12-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Biografi av Louis Pasteur',
      problem: `Les følgende tekst om Louis Pasteur og besvar spørsmålene:\n\n*«Louis Pasteur, né à Dole en 1822, est considéré comme le père de la microbiologie. Ses travaux sur la fermentation l'ont conduit à réfuter la théorie de la génération spontanée, démontrant que les micro-organismes étaient responsables de nombreuses maladies. Il a développé le procédé de pasteurisation pour éliminer les agents pathogènes dans le lait et le vin. Son œuvre la plus célèbre reste le développement du vaccin contre la rage en 1885, qu'il a testé avec succès sur le jeune Joseph Meister. Pasteur est mort en 1895, laissant un héritage scientifique considérable.»*\n\n1. Hva beviste Pasteur ved å tilbakevise teorien om spontan generasjon?\n2. Hva er pasteuriseringens formål?\n3. Hva er Pasteurs mest berømte oppdagelse?`,
      solution: `1. Pasteur beviste at mikroorganismer (*les micro-organismes*) var ansvarlige for mange sykdommer, ikke at liv oppstod spontant fra intet (*la génération spontanée*). Dette la grunnlaget for moderne mikrobiologi.\n\n2. Pasteurisering (*la pasteurisation*) har som formål å eliminere sykdomsfremkallende organismer (*les agents pathogènes*) i matvarer, spesielt melk og vin.\n\n3. Pasteurs mest berømte oppdagelse er vaksinen mot rabies (*le vaccin contre la rage*) i 1885, testet på den unge Joseph Meister.\n\n**Nøkkelvokabular:**\n- *la fermentation* — gjæring\n- *réfuter* — tilbakevise\n- *la génération spontanée* — spontan generasjon\n- *les agents pathogènes* — sykdomsfremkallende organismer\n- *le vaccin contre la rage* — vaksine mot rabies\n- *un héritage scientifique* — en vitenskapelig arv`
    },
    {
      id: 'fransk-3-12-3-text-2',
      type: 'text',
      content: `### Marie Curie — Et liv viet vitenskapen

Marie Curie, født Maria Sklodowska i Warszawa i 1867, er en av vitenskapshistoriens mest bemerkelsesverdige skikkelser. Hun flyttet til Paris i 1891 for å studere ved Sorbonne, der hun møtte Pierre Curie.

#### Viktige termer knyttet til Marie Curies arbeid

| Fransk | Norsk |
|--------|-------|
| la radioactivité | radioaktivitet |
| le radium | radium |
| le polonium | polonium |
| le prix Nobel | Nobelprisen |
| la physique nucléaire | kjernefysikk |
| l'Institut du Radium | Radiuminstituttet |
| les rayonnements ionisants | ioniserende stråling |

#### Nøkkeldatoer

- **1893**: Marie fullfører fysikkstudiet ved Sorbonne
- **1895**: Gifter seg med Pierre Curie
- **1898**: Oppdager polonium og radium
- **1903**: Nobelprisen i fysikk (delt med Pierre Curie og Henri Becquerel)
- **1911**: Nobelprisen i kjemi (alene)
- **1934**: Dør av aplastisk anemi, forårsaket av langvarig eksponering for stråling

Marie Curie grunnla *l'Institut du Radium* (i dag *l'Institut Curie*), som fortsatt er et av Frankrikes ledende forskningssentre for kreftbehandling.`
    },
    {
      id: 'fransk-3-12-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligning av vitenskapelige bidrag',
      problem: `Sammenlign bidragene til Pasteur og Marie Curie i en kort tekst på fransk (3–4 setninger). Bruk uttrykk for sammenligning.`,
      solution: `*«Si Pasteur et Marie Curie ont tous deux révolutionné la science, leurs contributions se situent dans des domaines différents. Tandis que Pasteur a transformé la médecine grâce à ses travaux sur les micro-organismes et la vaccination, Marie Curie a ouvert un champ entièrement nouveau avec ses recherches sur la radioactivité. Néanmoins, ces deux scientifiques partagent un point commun fondamental : leur détermination à poursuivre la vérité scientifique malgré les obstacles.»*

**Sammenligningsuttrykk brukt:**
- *si... tous deux* — dersom... begge
- *tandis que* — mens (kontrast)
- *néanmoins* — likevel
- *partagent un point commun* — deler et fellestrekk`
    },
    {
      id: 'fransk-3-12-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva oppdaget Marie Curie?',
        options: [
          { id: 'a', text: 'Pasteurisering og vaksiner', isCorrect: false },
          { id: 'b', text: 'Det kartesiske koordinatsystemet', isCorrect: false },
          { id: 'c', text: 'Grunnstoffene radium og polonium', isCorrect: true },
          { id: 'd', text: 'Oksygenets rolle i forbrenning', isCorrect: false },
        ],
        solution: `Riktig svar er C. Marie Curie oppdaget grunnstoffene *le radium* og *le polonium* i 1898. Pasteurisering og vaksiner (A) var Pasteurs bidrag. Det kartesiske koordinatsystemet (B) ble utviklet av Descartes. Oksygenets rolle i forbrenning (D) ble klarlagt av Lavoisier.`,
      }
    },
    {
      id: 'fransk-3-12-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilken påstand om Marie Curie er korrekt?',
        options: [
          { id: 'a', text: 'Hun vant Nobelprisen i fysikk to ganger.', isCorrect: false },
          { id: 'b', text: 'Hun er den eneste personen som har vunnet Nobelprisen i to ulike vitenskaper.', isCorrect: true },
          { id: 'c', text: 'Hun oppdaget radioaktivitet alene uten Pierre Curie.', isCorrect: false },
          { id: 'd', text: 'Hun var den første franske forskeren som vant Nobelprisen.', isCorrect: false },
        ],
        solution: `Riktig svar er B. Marie Curie er den eneste personen som har vunnet Nobelprisen i to ulike vitenskaper: fysikk (1903) og kjemi (1911). Hun vant ikke fysikkprisen to ganger (A). Radioaktivitet ble først observert av Becquerel, og Curie-paret utforsket fenomenet videre sammen (C). Den første franske Nobelprisvinneren var Sully Prudhomme i litteratur (1901) og Becquerel/Curie i fysikk (1903) (D).`,
      }
    },
    {
      id: 'fransk-3-12-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en kort biografi (100–150 ord) på fransk om enten Louis Pasteur eller Marie Curie. Biografien skal inneholde:\n\n- Fødsel og bakgrunn\n- Viktigste vitenskapelige bidrag\n- Betydning for vitenskapen\n- Minst 8 vitenskapelige fagtermer\n\nBruk passé composé for hendelser og imparfait for beskrivelser.`,
        solution: `Eksempel om Marie Curie:\n\n*«Marie Curie, née Maria Sklodowska à Varsovie en 1867, était une physicienne et chimiste d'origine polonaise qui a consacré sa vie à la recherche scientifique. Après avoir quitté la Pologne pour étudier à la Sorbonne, elle a rencontré Pierre Curie, avec qui elle a collaboré sur l'étude de la radioactivité. En 1898, le couple a découvert deux nouveaux éléments chimiques : le polonium et le radium. Marie Curie a reçu le prix Nobel de physique en 1903 et le prix Nobel de chimie en 1911, devenant ainsi la seule personne à avoir été récompensée dans deux disciplines scientifiques différentes. Elle est décédée en 1934 des suites d'une exposition prolongée aux rayonnements ionisants.»*`,
      }
    },
    {
      id: 'fransk-3-12-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'middels',
        task: `Koble sammen forsker og oppdagelse. Skriv fullstendige setninger på fransk etter mønsteret:\n*«[Forsker] est connu(e) pour [oppdagelse].»*\n\n1. Louis Pasteur — vaksinen mot rabies\n2. Marie Curie — oppdagelsen av radium\n3. Antoine Lavoisier — grunnleggingen av moderne kjemi\n4. Blaise Pascal — sannsynlighetsregning\n5. René Descartes — det kartesiske koordinatsystemet`,
        solution: `1. *Louis Pasteur est connu pour le développement du vaccin contre la rage.*\n2. *Marie Curie est connue pour la découverte du radium.*\n3. *Antoine Lavoisier est connu pour la fondation de la chimie moderne.*\n4. *Blaise Pascal est connu pour le calcul des probabilités.*\n5. *René Descartes est connu pour le système de coordonnées cartésiennes.*\n\nLegg merke til at *connu* bøyes til *connue* for Marie Curie (hunkjønn).`,
      }
    },
    {
      id: 'fransk-3-12-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Drøft følgende problemstilling på fransk (150–200 ord):\n\n*«Pourquoi est-il important de connaître l'histoire des sciences ?»*\n(Hvorfor er det viktig å kjenne vitenskapshistorie?)\n\nBruk eksempler fra franske forskere og inkluder:\n- Minst to konkrete eksempler\n- Uttrykk for argumentasjon (*d'abord, ensuite, enfin, en effet, par conséquent*)\n- Minst 6 vitenskapelige fagtermer`,
        solution: `Eksempel:\n\n*«L'histoire des sciences est fondamentale pour comprendre le monde contemporain. D'abord, connaître les grandes découvertes permet d'apprécier le processus scientifique. En effet, les travaux de Pasteur sur la microbiologie illustrent comment une hypothèse rigoureusement testée peut transformer la médecine et sauver des millions de vies grâce à la vaccination.\n\nEnsuite, l'histoire des sciences nous enseigne la persévérance face aux obstacles. Marie Curie, par exemple, a poursuivi ses recherches sur la radioactivité malgré les préjugés de son époque envers les femmes scientifiques. Sa découverte du radium a ouvert la voie à la physique nucléaire et aux traitements médicaux modernes.\n\nEnfin, comprendre l'histoire des sciences permet de mieux appréhender les défis actuels. Par conséquent, c'est en s'appuyant sur l'héritage scientifique du passé que nous pouvons relever les défis du présent, notamment dans les domaines de l'environnement et de la santé publique.»*`,
      }
    },
    {
      id: 'fransk-3-12-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Frankrikes viktigste vitenskapelige bidrag**: fra Pasteurs mikrobiologi til Marie Curies oppdagelse av radioaktivitet
- **Sentrale forskere**: Pasteur, Marie og Pierre Curie, Lavoisier, Descartes, Pascal
- **Pasteurisering** (*la pasteurisation*) og dens betydning for folkehelsa
- **Marie Curies unike posisjon** som eneste person med Nobelpriser i to vitenskaper
- Å skrive **biografier** og **drøftende tekster** på fransk med vitenskapelige fagtermer
- **Sammenligningsuttrykk**: *tandis que*, *néanmoins*, *si... tous deux*`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la pasteurisation', definition: 'Pasteurisering — prosess som dreper skadelige mikroorganismer ved oppvarming' },
    { term: 'la radioactivité', definition: 'Radioaktivitet — spontant utslipp av stråling fra atomkjerner' },
    { term: 'le vaccin', definition: 'Vaksine — preparat som stimulerer immunforsvaret mot sykdom' },
    { term: 'la microbiologie', definition: 'Mikrobiologi — vitenskapen om mikroorganismer' },
    { term: 'le prix Nobel', definition: 'Nobelprisen — prestisjefylt internasjonal pris for vitenskap, litteratur og fred' },
    { term: 'la théorie des germes', definition: 'Kimteorien — teorien om at mikroorganismer forårsaker sykdom' },
    { term: 'une découverte', definition: 'En oppdagelse — det å finne noe ukjent for første gang' },
    { term: 'un héritage scientifique', definition: 'En vitenskapelig arv — varig bidrag til kunnskapen' },
  ],
};

// ============================================================================
// Kapittel 12.4: Éthique et progrès scientifique
// ============================================================================

export const CHAPTER_FRANSK_3_12_4: TextbookChapter = {
  id: 'fransk-3-12-4',
  courseId: 'fransk-3',
  chapterNumber: '12.4',
  title: 'Éthique et progrès scientifique',
  subtitle: 'Etikk og vitenskapelig fremskritt',
  description: 'Drøft etiske dilemmaer knyttet til moderne vitenskap og teknologi på avansert fransk.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke et avansert og nyansert ordforråd tilpasset formål og situasjon', 'drøfte aktuelle samfunnsspørsmål i franskspråklige land'],
  content: [
    {
      id: 'fransk-3-12-4-intro',
      type: 'text',
      content: `## Éthique et progrès scientifique — Etikk og vitenskapelig fremskritt

Vitenskapelig og teknologisk fremskritt reiser stadig nye etiske spørsmål. Frankrike har en aktiv offentlig debatt om bioetikk, genmodifiserte organismer (OGM), kjernekraft og kunstig intelligens. Landet har også etablert *le Comité consultatif national d'éthique* (CCNE), som gir anbefalinger om bioetiske spørsmål.

I dette kapittelet lærer du å diskutere etiske dilemmaer knyttet til vitenskap og teknologi på avansert fransk, med presise fagtermer og nyanserte argumenter.

### Ordforråd: Etikk og vitenskap

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| la bioéthique | bioetikk | f. |
| les OGM (organismes génétiquement modifiés) | genmodifiserte organismer | m.pl. |
| l'énergie nucléaire (f.) | kjernekraft | f. |
| le clonage | kloning | m. |
| la thérapie génique | genterapi | f. |
| l'intelligence artificielle (f.) | kunstig intelligens | f. |
| le principe de précaution | føre-var-prinsippet | m. |
| un dilemme éthique | et etisk dilemma | m. |
| la procréation médicalement assistée (PMA) | assistert befruktning | f. |
| les cellules souches (f.pl.) | stamceller | f.pl. |
| le consentement éclairé | informert samtykke | m. |
| la dignité humaine | menneskeverdet | f. |`
    },
    {
      id: 'fransk-3-12-4-def-1',
      type: 'definition',
      title: 'La bioéthique',
      content: `**La bioéthique** (*bioetikk*) er studiet av etiske spørsmål som oppstår i forbindelse med biologisk og medisinsk forskning. I Frankrike reguleres bioetikk gjennom *les lois de bioéthique*, som revideres regelmessig (senest i 2021).

Eksempel: *«Les lois de bioéthique encadrent la recherche sur les cellules souches, la procréation médicalement assistée et le don d'organes en France.»* — Bioetikklovene regulerer forskning på stamceller, assistert befruktning og organdonasjon i Frankrike.`
    },
    {
      id: 'fransk-3-12-4-def-2',
      type: 'definition',
      title: 'Le principe de précaution',
      content: `**Le principe de précaution** (*føre-var-prinsippet*) er et prinsipp som sier at dersom det finnes rimelig grunn til å tro at en handling kan skade helse eller miljø, bør forebyggende tiltak treffes selv om den vitenskapelige usikkerheten er stor. I Frankrike er prinsippet nedfelt i *la Charte de l'environnement* (Miljøcharteret), som er en del av grunnloven.

Eksempel: *«Le principe de précaution stipule que l'absence de certitude scientifique ne doit pas retarder l'adoption de mesures de protection.»* — Føre-var-prinsippet fastslår at mangel på vitenskapelig sikkerhet ikke skal forsinke vedtakelsen av beskyttelsestiltak.`
    },
    {
      id: 'fransk-3-12-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Analyse av en debattekst om OGM',
      problem: `Les følgende tekst og analyser argumentene for og mot genmodifiserte organismer:\n\n*«La question des OGM divise profondément la société française. D'un côté, les partisans des OGM soutiennent que la modification génétique peut augmenter les rendements agricoles et réduire l'utilisation de pesticides, contribuant ainsi à nourrir une population mondiale croissante. De l'autre côté, les opposants invoquent le principe de précaution, arguant que les effets à long terme des OGM sur la santé humaine et la biodiversité restent insuffisamment connus. En France, la culture d'OGM est actuellement interdite, conformément à une directive européenne.»*`,
      solution: `**Oversettelse:** *Spørsmålet om GMO deler det franske samfunnet dypt. På den ene siden hevder tilhengerne av GMO at genmodifisering kan øke jordbruksavlingene og redusere bruken av pesticider, og dermed bidra til å fø en voksende verdensbefolkning. På den andre siden påberoper motstanderne seg føre-var-prinsippet og argumenterer for at langtidseffektene av GMO på menneskers helse og biologisk mangfold er utilstrekkelig kjent. I Frankrike er dyrking av GMO for tiden forbudt, i samsvar med et EU-direktiv.*

**Argumenter FOR OGM:**
- Økte avlinger (*augmenter les rendements*)
- Redusert bruk av pesticider (*réduire l'utilisation de pesticides*)
- Bidrag til matsikkerhet (*nourrir une population croissante*)

**Argumenter MOT OGM:**
- Føre-var-prinsippet (*le principe de précaution*)
- Ukjente langtidseffekter (*les effets à long terme*)
- Risiko for helse og biologisk mangfold`
    },
    {
      id: 'fransk-3-12-4-text-2',
      type: 'text',
      content: `### Le débat nucléaire en France — Kjernekraftdebatten i Frankrike

Kjernekraft (*l'énergie nucléaire*) er et av de mest kontroversielle temaene i fransk samfunnsdebatt. Frankrike er verdens mest kjernekraftavhengige land, og debatten berører energisikkerhet, klima og risiko.

#### Argumenter i debatten

**Pour (for):**
- *L'énergie nucléaire est une source d'énergie bas-carbone.* — Kjernekraft er en lavkarbonkilde.
- *Elle garantit l'indépendance énergétique de la France.* — Den sikrer Frankrikes energiuavhengighet.
- *Les centrales nucléaires fournissent une énergie stable et fiable.* — Kjernekraftverk leverer stabil og pålitelig energi.

**Contre (mot):**
- *Le risque d'accident nucléaire est réel (Tchernobyl, Fukushima).* — Risikoen for kjernekraftulykker er reell.
- *La gestion des déchets radioactifs pose un problème majeur.* — Håndteringen av radioaktivt avfall er et stort problem.
- *Le démantèlement des centrales vieillissantes est extrêmement coûteux.* — Nedleggelsen av aldrende kraftverk er svært kostbart.

### Nyttige debattuttrykk

| Fransk | Norsk | Bruk |
|--------|-------|------|
| d'un côté... de l'autre | på den ene siden... på den andre | Presentere to sider |
| les partisans de... | tilhengerne av... | Introdusere et standpunkt |
| les opposants à... | motstanderne av... | Introdusere motstandpunkt |
| invoquer le principe de précaution | påberope seg føre-var-prinsippet | Argumentere for forsiktighet |
| peser le pour et le contre | veie fordeler og ulemper | Drøfte balansert |`
    },
    {
      id: 'fransk-3-12-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Etisk dilemma — kunstig intelligens',
      problem: `Formuler et etisk dilemma knyttet til kunstig intelligens på fransk, og presenter argumenter for og mot.`,
      solution: `*«L'intelligence artificielle soulève des questions éthiques fondamentales. D'un côté, l'IA promet des avancées considérables dans la médecine, les transports et la recherche scientifique. Les algorithmes peuvent diagnostiquer des maladies plus rapidement que les médecins et optimiser la consommation d'énergie.\n\nDe l'autre côté, l'IA pose des risques majeurs : la surveillance de masse menace les libertés individuelles, l'automatisation risque de détruire des millions d'emplois, et les biais algorithmiques peuvent perpétuer les discriminations existantes.\n\nLe dilemme éthique central est le suivant : comment bénéficier des progrès de l'IA tout en préservant la dignité humaine et les libertés fondamentales ?»*

**Analyse av strukturen:**
- *D'un côté* — presenterer fordeler
- *De l'autre côté* — presenterer risiko
- *Le dilemme éthique central* — formulerer selve dilemmaet som et spørsmål`
    },
    {
      id: 'fransk-3-12-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er *le principe de précaution*?',
        options: [
          { id: 'a', text: 'Et prinsipp som sier at all forskning bør forbys', isCorrect: false },
          { id: 'b', text: 'Et prinsipp som sier at vitenskapelig fremskritt alltid er positivt', isCorrect: false },
          { id: 'c', text: 'Et prinsipp om at forebyggende tiltak bør treffes selv ved vitenskapelig usikkerhet', isCorrect: true },
          { id: 'd', text: 'Et prinsipp om at bare bevist farlig teknologi bør reguleres', isCorrect: false },
        ],
        solution: `Riktig svar er C. *Le principe de précaution* (føre-var-prinsippet) fastslår at forebyggende tiltak bør treffes dersom det er rimelig grunn til å tro at noe kan skade helse eller miljø — selv om den vitenskapelige usikkerheten er stor. Det betyr ikke at all forskning bør forbys (A), at fremskritt alltid er positivt (B), eller at bare bevist farlig teknologi reguleres (D).`,
      }
    },
    {
      id: 'fransk-3-12-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr *les OGM* på norsk?',
        options: [
          { id: 'a', text: 'Organiske grønnsaksprodukter', isCorrect: false },
          { id: 'b', text: 'Genmodifiserte organismer', isCorrect: true },
          { id: 'c', text: 'Europeiske miljøorganisasjoner', isCorrect: false },
          { id: 'd', text: 'Offisielle mattilsyn', isCorrect: false },
        ],
        solution: `Riktig svar er B. *Les OGM* er forkortelsen for *les organismes génétiquement modifiés*, altså genmodifiserte organismer. Dyrking av OGM er forbudt i Frankrike, i samsvar med EU-direktiver. Debatten om OGM er et sentralt tema i fransk samfunnsdiskusjon om forholdet mellom vitenskap og etikk.`,
      }
    },
    {
      id: 'fransk-3-12-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hvilket organ gir anbefalinger om bioetiske spørsmål i Frankrike?',
        options: [
          { id: 'a', text: 'L\'Assemblée nationale', isCorrect: false },
          { id: 'b', text: 'Le Comité consultatif national d\'éthique (CCNE)', isCorrect: true },
          { id: 'c', text: 'L\'Académie française', isCorrect: false },
          { id: 'd', text: 'Le Conseil constitutionnel', isCorrect: false },
        ],
        solution: `Riktig svar er B. *Le Comité consultatif national d'éthique* (CCNE) er det franske nasjonale rådgivende etikkutvalget, opprettet i 1983. Det gir anbefalinger om bioetiske spørsmål som assistert befruktning, stamcelleforskning og genterapi. *L'Assemblée nationale* (A) er nasjonalforsamlingen, *l'Académie française* (C) arbeider med det franske språket, og *le Conseil constitutionnel* (D) er grunnlovsdomstolen.`,
      }
    },
    {
      id: 'fransk-3-12-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Oversett følgende setninger til fransk med korrekt bruk av etisk og vitenskapelig fagvokabular:\n\n1. Bioetikken stiller spørsmål ved grensene for vitenskapelig fremskritt.\n2. Genmodifiserte organismer er forbudt i Frankrike.\n3. Kjernekraftdebatten deler det franske samfunnet.\n4. Føre-var-prinsippet er nedfelt i den franske grunnloven.\n5. Informert samtykke er et grunnleggende prinsipp i medisinsk etikk.`,
        solution: `1. *La bioéthique interroge les limites du progrès scientifique.*\n2. *Les organismes génétiquement modifiés sont interdits en France.*\n3. *Le débat nucléaire divise la société française.*\n4. *Le principe de précaution est inscrit dans la Constitution française.*\n5. *Le consentement éclairé est un principe fondamental de l'éthique médicale.*\n\nLegg merke til bruken av presens for generelle påstander og fakta.`,
      }
    },
    {
      id: 'fransk-3-12-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Velg ett av følgende etiske dilemmaer og skriv en drøftende tekst (200–250 ord) på fransk:\n\na) *«Le clonage humain devrait-il être autorisé à des fins thérapeutiques ?»*\n(Bør kloning av mennesker tillates for terapeutiske formål?)\n\nb) *«L'énergie nucléaire est-elle la solution au changement climatique ?»*\n(Er kjernekraft løsningen på klimaendringene?)\n\nc) *«L'intelligence artificielle menace-t-elle la dignité humaine ?»*\n(Truer kunstig intelligens menneskeverdet?)\n\nTeksten skal inneholde:\n- Innledning med problemstilling\n- Argumenter for (*d'un côté... / les partisans soutiennent que...*)\n- Argumenter mot (*de l'autre... / les opposants arguent que...*)\n- En personlig konklusjon (*à mon avis... / en définitive...*)\n- Minst 12 fagtermer fra kapittelet`,
        solution: `Eksempel om kjernekraft (b):\n\n*«L'énergie nucléaire est-elle la solution au changement climatique ? Cette question suscite un débat passionné en France, où le nucléaire fournit environ 70 % de l'électricité.\n\nD'un côté, les partisans de l'énergie nucléaire soutiennent que cette source d'énergie est indispensable pour lutter contre le réchauffement climatique. En effet, les centrales nucléaires émettent très peu de gaz à effet de serre par rapport aux centrales thermiques. De plus, l'énergie nucléaire garantit l'indépendance énergétique de la France et fournit une électricité stable et abordable.\n\nDe l'autre côté, les opposants invoquent le principe de précaution. Le risque d'accident nucléaire, comme ceux de Tchernobyl et de Fukushima, constitue une menace réelle. Par ailleurs, la gestion des déchets radioactifs, dont la durée de vie peut atteindre des milliers d'années, pose un dilemme éthique majeur pour les générations futures. Le démantèlement des centrales vieillissantes représente également un coût considérable.\n\nEn définitive, si l'énergie nucléaire peut contribuer à la transition écologique à court terme, elle ne saurait constituer une solution unique. Il est impératif de développer parallèlement les énergies renouvelables tout en investissant dans la recherche sur la gestion des déchets radioactifs.»*`,
      }
    },
    {
      id: 'fransk-3-12-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-12-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forklar følgende begreper på fransk med en setning hver. Bruk formuleringen *«[Begrep] désigne...»* eller *«[Begrep] est...»*\n\n1. La bioéthique\n2. Le clonage\n3. La thérapie génique\n4. Le consentement éclairé\n5. Les cellules souches\n6. La procréation médicalement assistée`,
        solution: `1. *La bioéthique est l'étude des questions morales soulevées par les progrès de la biologie et de la médecine.*\n2. *Le clonage désigne la reproduction à l'identique d'un organisme vivant à partir de son matériel génétique.*\n3. *La thérapie génique est une technique médicale qui consiste à modifier les gènes d'un patient pour traiter une maladie héréditaire.*\n4. *Le consentement éclairé est le droit d'un patient d'être informé des risques d'un traitement avant d'y consentir.*\n5. *Les cellules souches sont des cellules indifférenciées capables de se transformer en différents types de cellules spécialisées.*\n6. *La procréation médicalement assistée désigne l'ensemble des techniques médicales permettant de concevoir un enfant en dehors du processus naturel.*`,
      }
    },
    {
      id: 'fransk-3-12-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bioetisk vokabular** på fransk: *la bioéthique*, *le clonage*, *la thérapie génique*, *les cellules souches*, *le consentement éclairé*
- **Føre-var-prinsippet** (*le principe de précaution*) og dets plass i fransk lov
- **Debatten om OGM** i Frankrike og de sentrale argumentene for og mot
- **Kjernekraftdebatten** (*le débat nucléaire*) med argumenter fra begge sider
- **Etiske dilemmaer** knyttet til kunstig intelligens, kloning og genterapi
- **Debattuttrykk**: *d'un côté... de l'autre*, *les partisans / les opposants*, *invoquer le principe de précaution*
- Å skrive **drøftende tekster** om komplekse etiske spørsmål med nyanserte argumenter
- **Le CCNE** (*le Comité consultatif national d'éthique*) og dets rolle i fransk samfunnsdebatt`
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la bioéthique', definition: 'Bioetikk — studiet av etiske spørsmål i biologi og medisin' },
    { term: 'les OGM', definition: 'Genmodifiserte organismer — organismer med endret DNA' },
    { term: 'l\'énergie nucléaire', definition: 'Kjernekraft — energi fra spalting av atomkjerner' },
    { term: 'le principe de précaution', definition: 'Føre-var-prinsippet — forebyggende handling ved vitenskapelig usikkerhet' },
    { term: 'le clonage', definition: 'Kloning — reproduksjon av identisk kopi av en organisme' },
    { term: 'la thérapie génique', definition: 'Genterapi — behandling der man endrer pasientens gener' },
    { term: 'le consentement éclairé', definition: 'Informert samtykke — pasientens rett til informasjon før behandling' },
    { term: 'la dignité humaine', definition: 'Menneskeverdet — ethvert menneskes iboende verdi og rett til respekt' },
  ],
};

// ============================================================================
// KAPITTEL 13: Médias et communication avancée
// ============================================================================

// --- 13.1: L'analyse médiatique ---
export const CHAPTER_FRANSK_3_13_1: TextbookChapter = {
  id: 'fransk-3-13-1',
  courseId: 'fransk-3',
  chapterNumber: '13.1',
  title: "L'analyse médiatique",
  subtitle: 'Medieanalyse',
  description: 'Lær å analysere franske medier som Le Monde, Libération og France 24. Utvikle medieliterasjon, kildekritikk og evnen til å skille fakta fra meninger.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke varierte strategier for språklæring, tekstskaping og kommunikasjon'],
  content: [
    {
      id: 'fransk-3-13-1-intro',
      type: 'text',
      content: `## L'analyse médiatique — Medieanalyse

Frankrike har et rikt og mangfoldig medielandskap. De store nasjonale avisene har ulike politiske profiler: **Le Monde** regnes som sentrumsorientert og referanseavisen *par excellence*, **Libération** er venstreorientert, **Le Figaro** er høyreorientert, mens **France 24** er Frankrikes internasjonale nyhetskanal. Å forstå disse medienes **la ligne éditoriale** (redaksjonelle linje) er avgjørende for kritisk medieforståelse.

I Frankrike er medieliterasjon (*l'éducation aux médias*) en viktig del av utdanningen. Elevene lærer å analysere medietekster, identifisere synspunkter og skille mellom fakta og meninger. Denne kompetansen er viktigere enn noensinne i en tid med sosiale medier og informasjonsoverflod.

### Ordforråd: Medier

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| les médias (m. pl.) | mediene | m. pl. |
| la presse écrite | trykt presse / papiravisene | f. |
| les réseaux sociaux (m. pl.) | sosiale medier | m. pl. |
| la une | forsiden (av en avis) | f. |
| un éditorial | en lederartikkel | m. |
| une chronique | en kronikk / fast spalte | f. |
| un billet | en kommentar / kort kronikk | m. |
| la ligne éditoriale | den redaksjonelle linjen | f. |
| le lectorat | leserkretsen | m. |
| un quotidien | en dagsavis | m. |`
    },
    {
      id: 'fransk-3-13-1-def-1',
      type: 'definition',
      title: 'Le paysage médiatique français',
      content: `**Le paysage médiatique français** (*det franske medielandskapet*) kjennetegnes av et mangfold av medier med tydelige redaksjonelle profiler. Å kjenne til disse profilene er nøkkelen til kritisk medielesing.

De viktigste franske medieinstitusjonene:
- **Le Monde** — Frankrikes mest prestisjefulle avis, grunnlagt 1944, sentrumsorientert referanseavis
- **Libération** (ofte kalt «Libé») — venstreorientert avis grunnlagt 1973 av Jean-Paul Sartre
- **Le Figaro** — Frankrikes eldste eksisterende avis (1826), konservativ og høyreorientert
- **France 24** — internasjonal nyhetskanal som sender på fransk, engelsk og arabisk
- **Le Canard enchaîné** — satirisk ukeavis kjent for gravejournalistikk og politiske avsløringer

Å lese **la une** (forsiden) av ulike aviser samme dag gir et godt bilde av hvordan **la ligne éditoriale** påvirker nyhetsdekningen. Samme hendelse kan fremstilles svært ulikt avhengig av avisens politiske ståsted.`
    },
    {
      id: 'fransk-3-13-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Sammenligne avisers dekning',
      problem: `Les følgende to fiktive overskrifter om samme hendelse — en ny pensjonsreform i Frankrike — og analyser forskjellen i vinkling:\n\n**Le Figaro**: *«Réforme des retraites : un pas nécessaire pour sauver notre système social»*\n(Pensjonsreform: et nødvendig skritt for å redde vårt sosialsystem)\n\n**Libération**: *«Réforme des retraites : les travailleurs sacrifiés au nom de l'austérité»*\n(Pensjonsreform: arbeiderne ofret i sparepolitikkens navn)\n\nHvordan gjenspeiler overskriftene avisenes redaksjonelle linje?`,
      solution: `Analysen viser tydelig hvordan **la ligne éditoriale** (den redaksjonelle linjen) påvirker fremstillingen:\n\n**Le Figaro** (høyreorientert):\n- Bruker positivt ladet språk: «un pas nécessaire» (et nødvendig skritt), «sauver» (redde)\n- Fremstiller reformen som ansvarlig og nødvendig\n- Fokuserer på systemets bærekraft — et konservativt perspektiv som prioriterer økonomisk stabilitet\n\n**Libération** (venstreorientert):\n- Bruker negativt ladet språk: «sacrifiés» (ofret), «austérité» (innstramming)\n- Fremstiller reformen som et angrep på arbeidsfolk\n- Fokuserer på sosiale konsekvenser — et venstreorientert perspektiv som prioriterer arbeidernes rettigheter\n\nBegge overskriftene handler om den samme reformen, men **le cadrage** (vinklingen) er diametralt motsatt. Dette illustrerer viktigheten av å lese flere kilder — *croiser les sources* — for å danne seg et nyansert bilde.`
    },
    {
      id: 'fransk-3-13-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken avis regnes som Frankrikes sentrumsorienterte referanseavis?',
        options: [
          { id: 'a', text: 'Le Figaro', isCorrect: false },
          { id: 'b', text: 'Libération', isCorrect: false },
          { id: 'c', text: 'Le Monde', isCorrect: true },
          { id: 'd', text: 'Le Canard enchaîné', isCorrect: false },
        ],
        solution: `Riktig svar er C. Le Monde, grunnlagt i 1944, regnes som Frankrikes mest prestisjefulle avis og er sentrumsorientert. Le Figaro er konservativ/høyreorientert, Libération er venstreorientert, og Le Canard enchaîné er en satirisk ukeavis.`,
      }
    },
    {
      id: 'fransk-3-13-1-def-2',
      type: 'definition',
      title: 'La distinction fait/opinion',
      content: `**La distinction fait/opinion** (*skillet mellom fakta og meninger*) er grunnleggende i medieliterasjon. I fransk journalistikk finnes det tydelige sjangre som hjelper leseren å skille:

**Fakta-sjangre** (*les genres informatifs*):
- **Un article** — en nyhetsartikkel som gjengir fakta objektivt
- **Un reportage** — en reportasje med observasjoner og vitneutsagn
- **Une brève** — en kort nyhetsnotis

**Menings-sjangre** (*les genres d'opinion*):
- **Un éditorial** — lederartikkelen, uttrykker avisens offisielle standpunkt
- **Une chronique** — en fast spalte skrevet av en kommentator
- **Un billet** — en kort, personlig kommentar, ofte med et humoristisk preg
- **Une tribune** — et debattinnlegg fra en ekstern skribent

Nøkkelspørsmål for medieanalyse: *Qui parle ? À qui ? Dans quel but ? Avec quels moyens ?* (Hvem snakker? Til hvem? Med hvilket formål? Med hvilke virkemidler?)`
    },
    {
      id: 'fransk-3-13-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Identifisere sjanger og standpunkt',
      problem: `Les følgende utdrag og avgjør: Er dette en nyhetsartikkel (un article) eller en lederartikkel (un éditorial)? Begrunn svaret.\n\n*«Il est grand temps que la France repense son modèle énergétique. L'attachement au nucléaire, aussi compréhensible soit-il, ne doit pas nous empêcher d'investir massivement dans les énergies renouvelables. Notre avenir en dépend.»*`,
      solution: `Dette er tydelig **un éditorial** (en lederartikkel). Flere trekk avslører det:\n\n1. **Meningsytring**: «Il est grand temps que...» (Det er på høy tid at...) — dette er et verdivurdering, ikke en faktaopplysning.\n\n2. **Første person flertall**: «nous empêcher», «notre avenir» — skribenten inkluderer seg selv og leseren, noe som er typisk for meningssjangre.\n\n3. **Oppfordrende tone**: Teksten argumenterer for et bestemt standpunkt (mer satsing på fornybar energi) fremfor å referere nøytralt.\n\n4. **Vurderinger**: «aussi compréhensible soit-il» (så forståelig det enn er) — dette er en konsesjon, et retorisk grep typisk for argumenterende tekster.\n\nEn nyhetsartikkel ville brukt tredjeperson, referert til kilder, og unngått verdivurderinger: *«Le gouvernement a annoncé un plan d'investissement dans les énergies renouvelables...»*`
    },
    {
      id: 'fransk-3-13-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hvilken sjanger uttrykker avisens offisielle standpunkt?',
        options: [
          { id: 'a', text: 'Un reportage (en reportasje)', isCorrect: false },
          { id: 'b', text: 'Un éditorial (en lederartikkel)', isCorrect: true },
          { id: 'c', text: 'Une brève (en kort nyhetsnotis)', isCorrect: false },
          { id: 'd', text: 'Un article (en nyhetsartikkel)', isCorrect: false },
        ],
        solution: `Riktig svar er B. Un éditorial (lederartikkelen) uttrykker avisens offisielle standpunkt — det er redaksjonens stemme. Un reportage og un article er fakta-sjangre, og une brève er en kort, nøytral nyhetsnotis.`,
      }
    },
    {
      id: 'fransk-3-13-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Oversett følgende setninger til fransk med bruk av medievokabular:\n\n1. Forsiden av Le Monde viser en artikkel om klimaendringer.\n2. Denne kronikken uttrykker en personlig mening.\n3. Vi må lese flere kilder for å danne oss et nyansert bilde.\n4. Leserkretsen til Le Figaro er hovedsakelig konservativ.\n5. Sosiale medier har endret medielandskapet fullstendig.`,
        solution: `1. *La une du Monde présente un article sur le changement climatique.*\n2. *Cette chronique exprime une opinion personnelle.*\n3. *Nous devons croiser les sources pour nous former une image nuancée.*\n4. *Le lectorat du Figaro est principalement conservateur.*\n5. *Les réseaux sociaux ont complètement transformé le paysage médiatique.*\n\nLegg merke til at «croiser les sources» (krysse kildene) er det vanlige uttrykket på fransk for kildekritisk lesing.`,
      }
    },
    {
      id: 'fransk-3-13-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Det franske medielandskapet**: Le Monde (sentrum), Libération (venstre), Le Figaro (høyre), France 24 (internasjonal)
- **La ligne éditoriale**: Den redaksjonelle linjen bestemmer hvordan nyheter presenteres og vinkles
- **Skillet mellom fakta og meninger**: Fakta-sjangre (article, reportage, brève) vs. menings-sjangre (éditorial, chronique, billet, tribune)
- **Kildekritikk**: *Croiser les sources* — lese flere kilder for å danne et nyansert bilde
- **Nøkkelspørsmål**: *Qui parle ? À qui ? Dans quel but ? Avec quels moyens ?*
- **Medieliterasjon** (*l'éducation aux médias*) er en viktig del av fransk utdanning`
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-3-13-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en kort medieanalyse på fransk (100–150 ord) der du sammenligner hvordan to aviser med ulik redaksjonell linje ville dekket følgende nyhet: «Frankrike forbyr bruk av mobiltelefoner i alle skoler.»\n\nSkriv én versjon slik Le Figaro (konservativ) ville presentert det, og én slik Libération (venstreorientert) ville gjort det. Bruk minst 6 medietermer fra kapittelet.`,
        solution: `Eksempel:\n\n*«Le Figaro (éditorial) : «L'interdiction des téléphones portables dans les écoles est une mesure de bon sens. La une de notre quotidien salue cette décision courageuse qui permettra aux élèves de se concentrer sur l'essentiel : apprendre. Le lectorat du Figaro sait que la discipline est le fondement de la réussite scolaire.»\n\nLibération (chronique) : «Encore une interdiction qui ne s'attaque pas aux vrais problèmes. Plutôt que de bannir les téléphones, ne faudrait-il pas investir dans l'éducation aux médias ? Les réseaux sociaux font partie de la vie des jeunes — les en priver à l'école ne résoudra rien. Cette politique d'interdiction reflète une ligne éditoriale réactionnaire.»\n\nLa comparaison de ces deux traitements médiatiques montre l'importance de croiser les sources pour comprendre un sujet dans sa complexité.»*`,
      }
    },
    {
      id: 'fransk-3-13-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forklar følgende mediebegreper på fransk med en setning hver. Bruk formuleringen «[Begrep] désigne...» eller «[Begrep] est...»:\n\n1. La une\n2. Un éditorial\n3. La ligne éditoriale\n4. Le lectorat\n5. Une chronique\n6. Les réseaux sociaux`,
        solution: `1. *La une est la première page d'un journal, qui présente les informations les plus importantes du jour.*\n2. *Un éditorial est un article d'opinion qui exprime la position officielle du journal sur un sujet d'actualité.*\n3. *La ligne éditoriale désigne l'orientation politique et idéologique qui guide les choix rédactionnels d'un média.*\n4. *Le lectorat désigne l'ensemble des lecteurs habituels d'un journal ou d'une publication.*\n5. *Une chronique est un article d'opinion publié régulièrement par un même auteur dans un média.*\n6. *Les réseaux sociaux sont des plateformes numériques qui permettent aux utilisateurs de partager des contenus et d'interagir en ligne.*`,
      }
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'les médias', definition: 'Mediene — samlebegrep for presse, radio, TV og digitale medier' },
    { term: 'la presse écrite', definition: 'Trykt presse — aviser og magasiner i papirformat' },
    { term: 'la une', definition: 'Forsiden — førstesiden av en avis med de viktigste nyhetene' },
    { term: 'un éditorial', definition: 'Lederartikkel — uttrykker avisens offisielle standpunkt' },
    { term: 'la ligne éditoriale', definition: 'Redaksjonell linje — avisens politiske og ideologiske orientering' },
    { term: 'une chronique', definition: 'Kronikk — fast spalte med personlige meninger og analyser' },
    { term: 'les réseaux sociaux', definition: 'Sosiale medier — digitale plattformer for deling og interaksjon' },
    { term: 'le lectorat', definition: 'Leserkretsen — en avis\' faste lesere og målgruppe' },
  ],
};

// --- 13.2: La rhétorique médiatique ---
export const CHAPTER_FRANSK_3_13_2: TextbookChapter = {
  id: 'fransk-3-13-2',
  courseId: 'fransk-3',
  chapterNumber: '13.2',
  title: 'La rhétorique médiatique',
  subtitle: 'Medieretorikk',
  description: 'Lær om retoriske virkemidler i medier: ethos, pathos, logos, overtalelsesteknikker, propaganda og framing.',
  estimatedMinutes: 55,
  competenceGoals: ['lese, analysere og tolke avanserte franske tekster i ulike sjangre'],
  content: [
    {
      id: 'fransk-3-13-2-intro',
      type: 'text',
      content: `## La rhétorique médiatique — Medieretorikk

Retorikk — kunsten å overbevise — har vært sentral i fransk kultur siden antikken. I moderne medier brukes retoriske virkemidler bevisst for å påvirke publikum. De tre klassiske appellformene fra Aristoteles er like relevante i dagens aviser, TV-debatter og sosiale medier som de var i det antikke Hellas.

Å gjenkjenne retoriske virkemidler er avgjørende for **l'esprit critique** (kritisk tenkning) — en verdi som står sterkt i fransk utdanningstradisjon. Medieliterasjon handler ikke bare om å forstå hva som sies, men *hvordan* det sies, og *hvorfor*.

### Ordforråd: Retorikk i medier

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| le discours persuasif | den overbevisende talen/teksten | m. |
| l'argumentation (f.) | argumentasjonen | f. |
| un sophisme | en feilslutning / et sofisme | m. |
| la manipulation médiatique | mediemanipulasjon | f. |
| le cadrage | framing / innramming | m. |
| la désinformation | desinformasjon | f. |
| un argument d'autorité | et autoritetsargument | m. |
| l'esprit critique (m.) | kritisk tenkning | m. |
| la propagande | propaganda | f. |
| un slogan | et slagord | m. |`
    },
    {
      id: 'fransk-3-13-2-def-1',
      type: 'definition',
      title: 'Ethos, pathos, logos',
      content: `De tre klassiske appellformene fra Aristoteles brukes aktivt i moderne franske medier:

**L'ethos** (*etos*) — appell til troverdighet og karakter. Avsenderen bygger tillit gjennom sin posisjon, ekspertise eller personlige integritet. I medier ser vi dette når en journalist refererer til sine kilder, eller når en ekspert uttaler seg innenfor sitt fagfelt. Et **argument d'autorité** (autoritetsargument) er en form for ethos-appell.

**Le pathos** (*patos*) — appell til følelser. Avsenderen vekker sympati, frykt, sinne eller medfølelse hos publikum. Medier bruker pathos gjennom personlige historier, sterke bilder og emosjonelt ladet språk. Overskrifter som spiller på frykt (*la peur*) eller empati (*l'empathie*) er typiske pathos-grep.

**Le logos** (*logos*) — appell til fornuft og logikk. Avsenderen bruker fakta, statistikk, logiske resonnement og bevis. Logos er grunnlaget for seriøs journalistikk, men kan også misbrukes gjennom **les sophismes** (feilslutninger) — argumenter som ser logiske ut, men som inneholder feil.`
    },
    {
      id: 'fransk-3-13-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Identifisere appellformer i medietekster',
      problem: `Identifiser hvilken appellform (ethos, pathos eller logos) som dominerer i hver av disse medietekstene:\n\n**Tekst A**: *«Selon le professeur Dupont, directeur de recherche au CNRS, la pollution atmosphérique a augmenté de 15 % en cinq ans dans les grandes villes françaises.»*\n\n**Tekst B**: *«Imaginez : votre enfant de six ans joue dans un parc. L'air qu'il respire est toxique. Chaque jour, des milliers d'enfants souffrent en silence.»*\n\n**Tekst C**: *«Les données de l'INSEE montrent que 78 % des Français considèrent la pollution comme un problème majeur. Ce chiffre a doublé en dix ans.»*`,
      solution: `**Tekst A — L'ethos (troverdighet)**:\n- Refererer til «le professeur Dupont, directeur de recherche au CNRS» — en autoritativ kilde\n- CNRS (Centre national de la recherche scientifique) er Frankrikes viktigste forskningsinstitusjon\n- Bruker et **argument d'autorité** for å gi påstanden tyngde\n\n**Tekst B — Le pathos (følelser)**:\n- «Imaginez» (forestill deg) — trekker leseren inn følelsesmessig\n- Bruker barnet som emosjonelt virkemiddel: «votre enfant de six ans»\n- Sterke ord: «toxique» (giftig), «souffrent en silence» (lider i stillhet)\n- Appellen retter seg mot foreldrefølelser og empati\n\n**Tekst C — Le logos (fornuft og logikk)**:\n- Refererer til konkrete data fra INSEE (det franske statistikkbyrået)\n- Tall og prosenter: «78 %», «doublé en dix ans»\n- Logisk argumentasjon basert på statistiske fakta\n- Saklig og nøytralt språk`
    },
    {
      id: 'fransk-3-13-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken appellform bruker følelser for å overbevise publikum?',
        options: [
          { id: 'a', text: 'L\'ethos (troverdighet)', isCorrect: false },
          { id: 'b', text: 'Le logos (fornuft og logikk)', isCorrect: false },
          { id: 'c', text: 'Le pathos (følelser)', isCorrect: true },
          { id: 'd', text: 'Le cadrage (framing)', isCorrect: false },
        ],
        solution: `Riktig svar er C. Le pathos (patos) er appellformen som bruker følelser — sympati, frykt, sinne, medfølelse — for å overbevise. L'ethos appellerer til troverdighet, le logos til fornuft, og le cadrage er en teknikk for vinkling, ikke en appellform.`,
      }
    },
    {
      id: 'fransk-3-13-2-def-2',
      type: 'definition',
      title: 'Le cadrage et la désinformation',
      content: `**Le cadrage** (*framing/innramming*) er en teknikk der mediene velger en bestemt vinkel eller ramme for å presentere en hendelse. Valget av vinkel påvirker hvordan publikum oppfatter saken — selv om ingen fakta er uriktige.

Eksempler på cadrage:
- Et glass som er «halvfullt» vs. «halvtomt» — samme virkelighet, ulik vinkling
- «Arbeidsledigheten har sunket med 2 %» vs. «Fortsatt 3 millioner arbeidsledige» — begge kan være sant samtidig

**La désinformation** (*desinformasjon*) går lenger enn cadrage: det innebærer bevisst spredning av usann informasjon for å villede. Beslektede begreper:
- **La mésinformation** — spredning av usann informasjon uten ond hensikt (man tror det er sant)
- **La propagande** — systematisk spredning av ensidig informasjon for å fremme en politisk agenda
- **Un sophisme** — en feilslutning som ser logisk ut, men som inneholder en skjult feil i argumentasjonen`
    },
    {
      id: 'fransk-3-13-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Avsløre feilslutninger (les sophismes)',
      problem: `Identifiser feilslutningen (le sophisme) i følgende argumenter:\n\n1. *«Tout le monde achète cette marque. C'est donc la meilleure.»*\n2. *«Le professeur Martin est un excellent physicien. Son opinion sur la politique économique est donc fiable.»*\n3. *«Si nous autorisons le mariage pour tous, bientôt on autorisera le mariage avec les animaux.»*`,
      solution: `1. **L'argument ad populum** (folkemasse-argumentet): At mange kjøper et produkt, betyr ikke at det er det beste. Popularitet er ikke det samme som kvalitet. Reklame bruker dette grepet systematisk.\n\n2. **L'argument d'autorité abusif** (misbrukt autoritetsargument): Professeur Martin er ekspert i fysikk, ikke i økonomi. Hans mening om økonomisk politikk har ikke mer verdi enn andres bare fordi han er professor i et annet fag. En ekte autoritetsappell krever at eksperten uttaler seg innenfor sitt eget fagfelt.\n\n3. **L'argument de la pente glissante** (det skrå planet-argumentet / *la pente savonneuse*): Argumentet hevder at ett skritt uunngåelig fører til en ekstrem konsekvens, uten å bevise den logiske sammenhengen. Det er en overdrivelse som spiller på frykt (pathos) fremfor logikk (logos).`
    },
    {
      id: 'fransk-3-13-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er «le cadrage» (framing) i mediesammenheng?',
        options: [
          { id: 'a', text: 'Å lyve bevisst i mediene for å villede publikum', isCorrect: false },
          { id: 'b', text: 'Å velge en bestemt vinkel eller ramme for å presentere en nyhet, noe som påvirker hvordan den oppfattes', isCorrect: true },
          { id: 'c', text: 'Å sensurere uønskede nyheter fra offentligheten', isCorrect: false },
          { id: 'd', text: 'Å bruke bilder og video i stedet for tekst', isCorrect: false },
        ],
        solution: `Riktig svar er B. Le cadrage (framing) handler om å velge en bestemt vinkel for å presentere en hendelse. Det er ikke det samme som å lyve (A) — faktaene kan være korrekte, men vinklingen styrer oppfatningen. Det handler heller ikke om sensur (C) eller medieformat (D).`,
      }
    },
    {
      id: 'fransk-3-13-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Oversett følgende setninger til fransk med bruk av retorisk vokabular:\n\n1. Denne teksten bruker et autoritetsargument for å overbevise leseren.\n2. Desinformasjon er bevisst spredning av usann informasjon.\n3. Kritisk tenkning er nødvendig for å avsløre feilslutninger.\n4. Propaganda bruker følelser for å manipulere folkemeningen.\n5. Framing påvirker hvordan vi oppfatter en nyhetssak.`,
        solution: `1. *Ce texte utilise un argument d'autorité pour convaincre le lecteur.*\n2. *La désinformation est la diffusion délibérée de fausses informations.*\n3. *L'esprit critique est nécessaire pour démasquer les sophismes.*\n4. *La propagande utilise les émotions pour manipuler l'opinion publique.*\n5. *Le cadrage influence la manière dont nous percevons une information.*\n\nLegg merke til bruken av «démasquer» (avsløre/demaskere) som er et sterkt og presist verb i denne sammenhengen.`,
      }
    },
    {
      id: 'fransk-3-13-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **De tre appellformene**: L'ethos (troverdighet), le pathos (følelser), le logos (fornuft)
- **Retoriske virkemidler i medier**: Hvordan aviser, TV og sosiale medier bruker overtalelsesteknikker
- **Le cadrage** (framing): Vinkling av nyheter som påvirker publikums oppfatning
- **La désinformation vs. la mésinformation**: Bevisst vs. ubevisst spredning av usannheter
- **Les sophismes** (feilslutninger): Ad populum, autoritetsargumentet, det skrå planet
- **L'esprit critique**: Kritisk tenkning som verktøy for å gjennomskue mediemanipulasjon
- **La propagande**: Systematisk spredning av ensidig informasjon med politisk formål`
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-3-13-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en kort retorisk analyse på fransk (100–150 ord) av følgende fiktive politiske tale:\n\n*«Mes chers compatriotes, en tant que votre maire depuis quinze ans, je connais vos préoccupations. Les chiffres parlent d'eux-mêmes : la criminalité a baissé de 30 % dans notre ville. Mais pensez à vos enfants. Voulez-vous qu'ils grandissent dans une ville où l'insécurité menace chaque coin de rue ? Ensemble, nous pouvons bâtir un avenir plus sûr.»*\n\nIdentifiser bruken av ethos, pathos og logos i talen.`,
        solution: `Eksempel:\n\n*«Ce discours politique utilise habilement les trois registres rhétoriques.\n\nL'ethos est mobilisé dès le début : «en tant que votre maire depuis quinze ans» — l'orateur établit sa crédibilité par son expérience et sa proximité avec les citoyens. «Je connais vos préoccupations» renforce cette relation de confiance.\n\nLe logos apparaît dans la référence aux chiffres : «la criminalité a baissé de 30 %». Ce sont des données concrètes qui font appel à la raison.\n\nCependant, le pathos domine : «Pensez à vos enfants» et «l'insécurité menace chaque coin de rue» jouent sur la peur et l'instinct parental. On note un sophisme potentiel : si la criminalité a baissé de 30 %, pourquoi évoquer une menace «à chaque coin de rue» ? Le cadrage émotionnel contredit les données factuelles.»*`,
      }
    },
    {
      id: 'fransk-3-13-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forklar følgende retoriske begreper på fransk med en setning hver. Bruk formuleringen «[Begrep] désigne...» eller «[Begrep] est...»:\n\n1. Un sophisme\n2. Le cadrage\n3. La désinformation\n4. Un argument d'autorité\n5. La propagande\n6. Le discours persuasif`,
        solution: `1. *Un sophisme est un raisonnement qui semble logique mais qui contient une erreur cachée dans son argumentation.*\n2. *Le cadrage désigne le choix d'un angle ou d'une perspective particulière pour présenter une information, influençant ainsi la perception du public.*\n3. *La désinformation est la diffusion intentionnelle de fausses informations dans le but de tromper et de manipuler l'opinion publique.*\n4. *Un argument d'autorité est un procédé rhétorique qui consiste à invoquer l'expertise d'une personne reconnue pour renforcer un argument.*\n5. *La propagande est la diffusion systématique d'informations unilatérales visant à promouvoir une idéologie ou un programme politique.*\n6. *Le discours persuasif est un texte ou une parole dont l'objectif principal est de convaincre le destinataire d'adopter un point de vue ou une action.*`,
      }
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'le discours persuasif', definition: 'Overbevisende tale/tekst — kommunikasjon som har som mål å overbevise' },
    { term: 'un sophisme', definition: 'Feilslutning — argument som ser logisk ut, men inneholder en skjult feil' },
    { term: 'le cadrage', definition: 'Framing/innramming — valg av vinkel som påvirker oppfatningen av en nyhet' },
    { term: 'la désinformation', definition: 'Desinformasjon — bevisst spredning av usann informasjon for å villede' },
    { term: 'un argument d\'autorité', definition: 'Autoritetsargument — bruk av en ekspertuttalelse for å styrke et argument' },
    { term: 'la manipulation médiatique', definition: 'Mediemanipulasjon — bruk av retoriske grep for å villede publikum' },
    { term: 'l\'esprit critique', definition: 'Kritisk tenkning — evnen til å analysere og vurdere informasjon selvstendig' },
    { term: 'la propagande', definition: 'Propaganda — systematisk spredning av ensidig informasjon for politiske formål' },
  ],
};

// --- 13.3: Le journalisme numérique ---
export const CHAPTER_FRANSK_3_13_3: TextbookChapter = {
  id: 'fransk-3-13-3',
  courseId: 'fransk-3',
  chapterNumber: '13.3',
  title: 'Le journalisme numérique',
  subtitle: 'Digital journalistikk',
  description: 'Utforsk digitale medier i Frankrike, nettjournalistikk, sosiale medier, blogging, podcasting og fakta-sjekking.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og reflektere over mangfold, samfunnsforhold og kulturelle temaer i den franskspråklige verden'],
  content: [
    {
      id: 'fransk-3-13-3-intro',
      type: 'text',
      content: `## Le journalisme numérique — Digital journalistikk

Den digitale revolusjonen har transformert det franske medielandskapet fullstendig. Tradisjonelle aviser som Le Monde og Le Figaro har utviklet sterke digitale plattformer, men det har også oppstått helt nye medieformater. **Le journalisme en ligne** (nettjournalistikk) utfordrer de etablerte medienes monopol på informasjon.

Frankrike har vært et foregangsland innen digital fakta-sjekking. Tjenester som **Les Décodeurs** (Le Monde) og **CheckNews** (Libération) har som oppgave å verifisere påstander fra politikere og virale meldinger i sosiale medier. Dette kalles **le fact-checking** eller **la vérification des faits**.

Samtidig har fremveksten av **les influenceurs** (influensere) og virale nyheter skapt nye utfordringer for medieliterasjon. Skillet mellom informasjon, underholdning og reklame er blitt mer uklart enn noen gang.

### Ordforråd: Digitale medier

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| le journalisme en ligne | nettjournalistikk | m. |
| un blog / un blogue | en blogg | m. |
| un podcast / une baladodiffusion | en podkast | m./f. |
| les fake news (f. pl.) | falske nyheter | f. pl. |
| la vérification des faits | faktasjekking | f. |
| le fact-checking | faktasjekking (eng. lånord) | m. |
| un influenceur / une influenceuse | en influenser | m./f. |
| la viralité | viralitet / viral spredning | f. |
| un contenu viral | et viralt innhold | m. |
| un abonné / une abonnée | en abonnent / følger | m./f. |`
    },
    {
      id: 'fransk-3-13-3-def-1',
      type: 'definition',
      title: 'Le fact-checking à la française',
      content: `**Le fact-checking** (*faktasjekking*), eller på godt fransk **la vérification des faits**, er en journalistisk praksis der påstander fra politikere, medier og sosiale medier systematisk verifiseres mot pålitelige kilder.

Franske fakta-sjekk-tjenester:
- **Les Décodeurs** (Le Monde) — grunnlagt 2014, en av Frankrikes mest anerkjente fakta-sjekk-tjenester
- **CheckNews** (Libération) — innovativ tjeneste der leserne kan sende inn påstander de vil ha verifisert
- **AFP Factuel** (Agence France-Presse) — det franske nyhetsbyrået AFP sin fakta-sjekk-tjeneste
- **Désintox** (Arte/Libération) — fakta-sjekk av politiske uttalelser

Prosessen følger vanligvis tre trinn:
1. **Identifier la source** — identifisere kilden til påstanden
2. **Vérifier les données** — verifisere dataene mot uavhengige kilder
3. **Publier le résultat** — publisere resultatet med en tydelig vurdering (sant, delvis sant, falskt)`
    },
    {
      id: 'fransk-3-13-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Analysere en viral påstand',
      problem: `Følgende påstand spres i sosiale medier: *«La France est le pays européen qui consomme le plus de médicaments par habitant.»* (Frankrike er det europeiske landet som bruker mest medisiner per innbygger.)\n\nHvordan ville en fakta-sjekker gå frem for å verifisere denne påstanden? Beskriv prosessen på norsk med bruk av franske fagtermer.`,
      solution: `En fakta-sjekker ville gå frem slik:\n\n1. **Identifier la source** (identifisere kilden): Hvem fremsatte påstanden? Er det en politiker, en nettside, et viralt innlegg? En anonym kilde er allerede et varseltegn.\n\n2. **Vérifier les données** (verifisere dataene):\n- Sjekke offisielle statistikker fra **l'OCDE** (OECD), **Eurostat** eller **l'Assurance maladie** (det franske trygdesystemet)\n- Sammenligne med data fra andre europeiske land\n- Sjekke om påstanden skiller mellom ulike typer medisiner (reseptbelagte vs. reseptfrie)\n\n3. **Analyser le contexte** (analysere konteksten): Hvem tjener på at denne påstanden spres? Er den brukt i en politisk debatt om helsevesenet?\n\n4. **Publier le résultat** (publisere resultatet): Vurderingen kan være:\n- **Vrai** (sant) — støttet av data\n- **Partiellement vrai** (delvis sant) — avhenger av definisjon og tidsperiode\n- **Faux** (falskt) — ikke støttet av data\n- **Trompeur** (villedende) — fakta er korrekte, men konteksten er misvisende`
    },
    {
      id: 'fransk-3-13-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er «le fact-checking» (la vérification des faits)?',
        options: [
          { id: 'a', text: 'En metode for å skrive nyhetsartikler raskere', isCorrect: false },
          { id: 'b', text: 'Systematisk verifisering av påstander mot pålitelige kilder', isCorrect: true },
          { id: 'c', text: 'En form for sensur der myndighetene kontrollerer mediene', isCorrect: false },
          { id: 'd', text: 'En teknikk for å gjøre nyheter mer underholdende', isCorrect: false },
        ],
        solution: `Riktig svar er B. Le fact-checking (la vérification des faits) er en journalistisk praksis der påstander verifiseres systematisk mot pålitelige kilder. Det er verken sensur (C) eller underholdning (D), men et verktøy for å sikre at informasjon er korrekt.`,
      }
    },
    {
      id: 'fransk-3-13-3-def-2',
      type: 'definition',
      title: 'Les influenceurs et la viralité',
      content: `**Les influenceurs** (*influenserne*) er personer som har bygget opp et stort publikum på sosiale medier og bruker sin innflytelse til å påvirke følgernes meninger, vaner og kjøpsbeslutninger. I Frankrike har debatten om influensernes rolle vært særlig intens.

I 2023 vedtok Frankrike **la loi influenceurs** — en av verdens første lover som regulerer influensere. Loven krever blant annet at reklameinnhold tydelig merkes, og forbyr markedsføring av visse produkter (kosmetisk kirurgi, kryptovaluta, sportsbetting).

**La viralité** (*viralitet*) beskriver fenomenet der innhold spres raskt og ukontrollert på nett. Virale nyheter er ofte:
- **Émotionnelles** — spiller på sterke følelser (sjokk, sinne, latter)
- **Simplifiées** — forenkler komplekse saker til slagord
- **Non vérifiées** — ofte ikke faktasjekket før de deles videre

Uttrykket **«devenir viral»** (å bli viral / gå viralt) er vanlig i dagligtale.`
    },
    {
      id: 'fransk-3-13-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Blogging og nettdebatt på fransk',
      problem: `Du skal skrive et kort blogginnlegg (*un billet de blog*) på fransk om temaet «Les réseaux sociaux : danger ou opportunité pour le journalisme ?» (Sosiale medier: fare eller mulighet for journalistikken?). Analyser følgende franske uttrykk som er nyttige for nettdebatt:\n\n1. *À mon avis / Selon moi*\n2. *Il est indéniable que...*\n3. *Force est de constater que...*\n4. *En revanche / Néanmoins*`,
      solution: `Her er uttrykksanalysen med bruk i kontekst:\n\n1. **À mon avis / Selon moi** (*etter min mening*) — brukes for å innlede et personlig synspunkt:\n*«À mon avis, les réseaux sociaux ont démocratisé l'accès à l'information.»*\n\n2. **Il est indéniable que...** (*det er ubestridelig at...*) — brukes for å anerkjenne et faktum man ikke kan motsi:\n*«Il est indéniable que les fake news se propagent plus vite sur les réseaux sociaux.»*\n\n3. **Force est de constater que...** (*man er nødt til å konstatere at...*) — et formelt uttrykk for å påpeke en uunngåelig konklusjon:\n*«Force est de constater que le journalisme traditionnel est en crise.»*\n\n4. **En revanche / Néanmoins** (*derimot / likevel*) — brukes for å introdusere et motargument:\n*«Néanmoins, les blogs et les podcasts offrent de nouvelles formes de journalisme indépendant.»*\n\nDisse uttrykkene gir teksten en formell og argumentativ tone som er typisk for fransk nettdebatt.`
    },
    {
      id: 'fransk-3-13-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva er spesielt med den franske «loi influenceurs» fra 2023?',
        options: [
          { id: 'a', text: 'Den forbyr alle former for sosiale medier i Frankrike', isCorrect: false },
          { id: 'b', text: 'Den er en av verdens første lover som regulerer influensere, med krav om merking av reklame', isCorrect: true },
          { id: 'c', text: 'Den gir influensere skattefritak for sine inntekter', isCorrect: false },
          { id: 'd', text: 'Den krever at alle franske influensere har journalistutdanning', isCorrect: false },
        ],
        solution: `Riktig svar er B. Den franske «loi influenceurs» fra 2023 er en av verdens første lover som regulerer influensere. Den krever blant annet at reklameinnhold tydelig merkes, og forbyr markedsføring av visse produkter som kosmetisk kirurgi og kryptovaluta.`,
      }
    },
    {
      id: 'fransk-3-13-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Oversett følgende setninger til fransk med bruk av vokabular om digitale medier:\n\n1. Falske nyheter sprer seg raskere enn ekte nyheter på sosiale medier.\n2. Faktasjekking er viktig for å bekjempe desinformasjon.\n3. Denne podkasten har over en million abonnenter.\n4. Influensere må merke reklameinnhold tydelig.\n5. Innlegget ble viralt på bare noen timer.`,
        solution: `1. *Les fake news se propagent plus vite que les vraies informations sur les réseaux sociaux.*\n2. *Le fact-checking (la vérification des faits) est important(e) pour combattre la désinformation.*\n3. *Ce podcast compte plus d'un million d'abonnés.*\n4. *Les influenceurs doivent clairement identifier le contenu publicitaire.*\n5. *La publication est devenue virale en seulement quelques heures.*\n\nLegg merke til bruken av «se propager» (å spre seg) som er vanligere enn «se répandre» i mediesammenheng.`,
      }
    },
    {
      id: 'fransk-3-13-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Le journalisme en ligne**: Nettjournalistikk har transformert det franske medielandskapet
- **Le fact-checking**: Franske tjenester som Les Décodeurs og CheckNews verifiserer påstander systematisk
- **Les fake news**: Falske nyheter er en alvorlig utfordring som krever kritisk medieliterasjon
- **Les influenceurs**: Frankrikes «loi influenceurs» (2023) regulerer influensere og krever reklamemerking
- **La viralité**: Viralt innhold spres raskt og er ofte emosjonelt, forenklet og ikke faktasjekket
- **Nettdebatt-uttrykk**: *À mon avis*, *il est indéniable que*, *force est de constater que*, *néanmoins*
- Blogging og podcasting som nye journalistiske formater i Frankrike`
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-3-13-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv et kort blogginnlegg på fransk (100–150 ord) om temaet: «Les réseaux sociaux : danger ou opportunité pour la démocratie ?» (Sosiale medier: fare eller mulighet for demokratiet?)\n\nBruk minst 6 medietermer fra kapittelet og strukturer teksten med argumenter for og mot. Bruk uttrykkene *d'un côté... de l'autre*, *il est indéniable que*, *néanmoins*.`,
        solution: `Eksempel:\n\n*«Les réseaux sociaux transforment notre rapport à la démocratie. D'un côté, il est indéniable qu'ils ont démocratisé l'accès à l'information : chaque citoyen peut désormais s'exprimer, créer un blog, lancer un podcast et devenir un acteur du débat public. Les influenceurs politiques touchent des millions d'abonnés et permettent une participation citoyenne sans précédent.\n\nDe l'autre côté, la viralité des fake news menace le débat démocratique. La désinformation se propage plus vite que la vérification des faits. Les algorithmes des réseaux sociaux créent des bulles informationnelles où chacun ne voit que des opinions qui confirment les siennes.\n\nNéanmoins, des initiatives comme le fact-checking montrent que le journalisme numérique peut être un allié de la démocratie — à condition que les citoyens développent leur esprit critique.»*`,
      }
    },
    {
      id: 'fransk-3-13-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forklar følgende begreper på fransk med en setning hver. Bruk formuleringen «[Begrep] désigne...» eller «[Begrep] est...»:\n\n1. Le journalisme en ligne\n2. Les fake news\n3. La vérification des faits\n4. Un influenceur\n5. La viralité\n6. Un podcast`,
        solution: `1. *Le journalisme en ligne est une forme de journalisme qui produit et diffuse des contenus informatifs sur Internet.*\n2. *Les fake news sont des informations fausses ou trompeuses présentées comme des faits réels, souvent diffusées sur les réseaux sociaux.*\n3. *La vérification des faits est une pratique journalistique qui consiste à contrôler l'exactitude des affirmations publiques en les confrontant à des sources fiables.*\n4. *Un influenceur est une personne qui a acquis une notoriété sur les réseaux sociaux et qui utilise son audience pour influencer les opinions et les comportements de ses abonnés.*\n5. *La viralité désigne le phénomène de diffusion rapide et massive d'un contenu sur Internet, souvent par le biais des réseaux sociaux.*\n6. *Un podcast est un contenu audio numérique que l'on peut écouter en ligne ou télécharger, souvent organisé en épisodes thématiques.*`,
      }
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'le journalisme en ligne', definition: 'Nettjournalistikk — journalistikk produsert og publisert på internett' },
    { term: 'les fake news', definition: 'Falske nyheter — usann informasjon presentert som fakta' },
    { term: 'la vérification des faits', definition: 'Faktasjekking — systematisk kontroll av påstanders riktighet' },
    { term: 'un influenceur', definition: 'Influenser — person med stor innflytelse på sosiale medier' },
    { term: 'la viralité', definition: 'Viralitet — rask og massiv spredning av innhold på nett' },
    { term: 'un podcast', definition: 'Podkast — digitalt lydinnhold man kan lytte til på nett' },
    { term: 'un blog', definition: 'Blogg — personlig nettside med regelmessig publiserte innlegg' },
    { term: 'la loi influenceurs', definition: 'Influenserloven — fransk lov fra 2023 som regulerer influensere' },
  ],
};

// --- 13.4: La communication interculturelle dans les médias ---
export const CHAPTER_FRANSK_3_13_4: TextbookChapter = {
  id: 'fransk-3-13-4',
  courseId: 'fransk-3',
  chapterNumber: '13.4',
  title: 'La communication interculturelle dans les médias',
  subtitle: 'Interkulturell kommunikasjon i medier',
  description: 'Utforsk kulturelle forskjeller i mediebruk, fransk vs. nordisk medielandskap, interkulturelt perspektiv og kommunikasjonsutfordringer.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke varierte strategier for språklæring, tekstskaping og kommunikasjon'],
  content: [
    {
      id: 'fransk-3-13-4-intro',
      type: 'text',
      content: `## La communication interculturelle dans les médias — Interkulturell kommunikasjon i medier

Kommunikasjon mellom kulturer handler ikke bare om språk — det handler om å forstå de usynlige kodene som styrer hvordan mennesker uttrykker seg, tolker budskap og samhandler. Franske og nordiske medier og kommunikasjonstradisjoner skiller seg fra hverandre på flere sentrale punkter.

Frankrike har en kommunikasjonskultur preget av **le registre soutenu** (formelt språknivå), retorikk og indirekte uttrykk. Norge og Norden har en mer direkte og uformell kommunikasjonsstil. Å forstå disse forskjellene er avgjørende for å unngå **les malentendus interculturels** (interkulturelle misforståelser).

### Ordforråd: Interkulturell kommunikasjon

| Fransk | Norsk | Artikkel |
|--------|-------|----------|
| les différences culturelles | kulturelle forskjeller | f. pl. |
| le malentendu interculturel | interkulturell misforståelse | m. |
| la communication non-verbale | ikke-verbal kommunikasjon | f. |
| les codes sociaux | sosiale koder | m. pl. |
| le registre de langue | språklig register/nivå | m. |
| la politesse | høflighet | f. |
| le tutoiement | bruk av «tu» (uformell) | m. |
| le vouvoiement | bruk av «vous» (formell) | m. |
| l'implicite (m.) | det underforståtte | m. |
| la communication directe/indirecte | direkte/indirekte kommunikasjon | f. |`
    },
    {
      id: 'fransk-3-13-4-def-1',
      type: 'definition',
      title: 'Le vouvoiement et le tutoiement',
      content: `**Le vouvoiement** (*bruk av «vous»*) og **le tutoiement** (*bruk av «tu»*) er et av de mest karakteristiske trekkene ved fransk kommunikasjon, og en hyppig kilde til **malentendus interculturels** (interkulturelle misforståelser) for nordiske franskstudenter.

Reglene er komplekse og kontekstavhengige:
- **«Vous»** brukes med fremmede, eldre, overordnede, i formelle situasjoner og i profesjonell sammenheng
- **«Tu»** brukes med venner, familie, barn, jevnaldrende studenter og i uformelle situasjoner
- Overgangen fra «vous» til «tu» er en sosial begivenhet som ofte markeres eksplisitt: *«On peut se tutoyer ?»* (Kan vi si «tu» til hverandre?)

I nordiske land finnes denne distinksjonen knapt (norsk bruker bare «du»). Franske medier bruker ofte **le vouvoiement** i intervjuer og debatter, noe som gir en formell tone som kan virke distansert for norske lesere.

I fransk mediekultur reflekterer valget mellom «tu» og «vous» maktforhold, nærhet og sosial status — informasjon som går tapt i oversettelse til norsk.`
    },
    {
      id: 'fransk-3-13-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Kulturelle forskjeller i mediekommunikasjon',
      problem: `Sammenlign følgende to fiktive jobbintervjuer — ett i Norge og ett i Frankrike — og analyser de kulturelle forskjellene:\n\n**Norge**: «Hei, jeg heter Lars. Hyggelig å treffe deg! Bare kall meg Lars. Hva er din bakgrunn?»\n\n**Frankrike**: *«Bonjour Monsieur Dupont. Enchanté de faire votre connaissance. Permettez-moi de me présenter : je suis Madame Leroy, directrice des ressources humaines. Pourriez-vous me parler de votre parcours professionnel ?»*`,
      solution: `Analysen avdekker flere sentrale kulturelle forskjeller:\n\n**1. Formalitetsnivå** (*le registre de langue*):\n- Norge: Uformelt, bruker fornavn, direkte «du»\n- Frankrike: Formelt, bruker etternavn med tittel (*Monsieur/Madame*), vouvoiement (*vous*)\n\n**2. Hierarki og titler**:\n- Norge: Flat struktur, ingen titler, «bare kall meg Lars»\n- Frankrike: Tydelig hierarki, tittel nevnes (*directrice des ressources humaines*), formell presentasjon\n\n**3. Kommunikasjonsstil**:\n- Norge: Direkte og uformell — «Hva er din bakgrunn?»\n- Frankrike: Indirekte og høflig — «Pourriez-vous me parler de...» (Kunne De fortelle meg om...) — bruk av kondisjonalis for høflighet\n\n**4. La politesse** (høflighet):\n- «Enchanté de faire votre connaissance» er en formell høflighetsformular uten direkte norsk ekvivalent\n- «Permettez-moi de me présenter» (tillat meg å presentere meg) viser den franske vekten på høflighetsritualer\n\nFor en norsk person kan det franske intervjuet virke stivt, mens for en fransk person kan det norske virke uhøflig eller uprofesjonelt. Ingen av tolkningene er «riktige» — det handler om **les codes sociaux** (sosiale koder).`
    },
    {
      id: 'fransk-3-13-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er «le vouvoiement»?',
        options: [
          { id: 'a', text: 'Bruk av «tu» i uformelle situasjoner', isCorrect: false },
          { id: 'b', text: 'Bruk av «vous» som høflig tiltaleform', isCorrect: true },
          { id: 'c', text: 'En spesiell dialekt i det sørlige Frankrike', isCorrect: false },
          { id: 'd', text: 'En formell skriftlig hilsen i brev', isCorrect: false },
        ],
        solution: `Riktig svar er B. Le vouvoiement er bruk av «vous» som høflig og formell tiltaleform — det brukes med fremmede, eldre, overordnede og i profesjonelle situasjoner. Le tutoiement (A) er det motsatte: bruk av «tu» i uformelle situasjoner.`,
      }
    },
    {
      id: 'fransk-3-13-4-def-2',
      type: 'definition',
      title: 'La communication directe et indirecte',
      content: `Kulturforskere skiller mellom **la communication directe** (direkte kommunikasjon) og **la communication indirecte** (indirekte kommunikasjon). Dette er en nøkkelforskjell mellom nordisk og fransk kommunikasjonskultur.

**Nordisk kommunikasjon** (direkte):
- Sier det man mener, uten omsvøp
- Taushet er akseptert og ikke ubehagelig
- «Nei» er et fullstendig svar
- Kort og konsis kommunikasjon er verdsatt

**Fransk kommunikasjon** (mer indirekte):
- Bruker ofte **l'implicite** (det underforståtte) — meningen ligger «mellom linjene»
- Omskrivninger og høflighetsfraser er viktige: *«Ce n'est pas mal»* (det er ikke dårlig) kan bety «det er ganske bra»
- **La litote** (understatement) er et vanlig virkemiddel: *«Ce n'est pas inintéressant»* (det er ikke uinteressant) betyr «det er veldig interessant»
- Debatt og argumentasjon verdsettes — å være uenig er ikke uhøflig, men et tegn på intellektuelt engasjement

Disse forskjellene er spesielt synlige i mediekulturen: franske TV-debatter er ofte mer konfronterende og retoriske enn nordiske, noe som kan virke aggressivt for et nordisk publikum, men som i Frankrike er et tegn på **la vivacité intellectuelle** (intellektuell livlighet).`
    },
    {
      id: 'fransk-3-13-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Mediekulturelle forskjeller mellom Frankrike og Norden',
      problem: `Analyser følgende påstander om forskjeller mellom fransk og nordisk mediekultur. Er de riktige, og hvilke kulturelle faktorer forklarer dem?\n\n1. Franske aviser har lengre og mer analytiske artikler enn nordiske.\n2. Franske TV-debatter er mer konfronterende enn nordiske.\n3. Nordiske medier verdsetter objektivitet høyere enn franske medier.`,
      solution: `1. **Delvis riktig**: Franske aviser som Le Monde er kjent for lange, analytiske artikler som forutsetter høy lesekompetanse. Dette henger sammen med det franske utdanningssystemets vekt på **la dissertation** (den analytiske stilen) og retorikk. Nordiske aviser tenderer mot kortere, mer informative formater — men dette er en generalisering med mange unntak.\n\n2. **Riktig**: Franske TV-debatter er tradisjonelt mer konfronterende og retoriske. I Frankrike er debatt (*le débat*) en verdsatt kulturform — å argumentere heftig betyr ikke at man er sint, men at man er engasjert. Nordiske debatter verdsetter konsensus og saklighet i større grad. Programmet *«C dans l'air»* (France 5) illustrerer den franske debattkulturen.\n\n3. **Nyansert**: Nordiske medier har en sterk tradisjon for **l'objectivité journalistique** (journalistisk objektivitet), mens franske aviser tradisjonelt har tydeligere **lignes éditoriales** (redaksjonelle linjer) og er mer åpent meningsbærende. Men dette betyr ikke at franske medier er «mindre objektive» — de har en annen tradisjon der mening og analyse verdsettes som en del av journalistikken.`
    },
    {
      id: 'fransk-3-13-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'middels',
        task: 'Hva betyr det franske uttrykket «Ce n\'est pas inintéressant» (det er ikke uinteressant)?',
        options: [
          { id: 'a', text: 'Det er kjedelig og uinteressant', isCorrect: false },
          { id: 'b', text: 'Det er verken interessant eller uinteressant', isCorrect: false },
          { id: 'c', text: 'Det er faktisk veldig interessant — en «litote» (understatement)', isCorrect: true },
          { id: 'd', text: 'Taleren er usikker på om det er interessant', isCorrect: false },
        ],
        solution: `Riktig svar er C. «Ce n'est pas inintéressant» er en litote — et retorisk understatement der man uttrykker noe positivt gjennom en dobbel nektelse. Det betyr egentlig «det er veldig interessant». La litote er et typisk trekk ved indirekte fransk kommunikasjon.`,
      }
    },
    {
      id: 'fransk-3-13-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'middels',
        task: `Oversett følgende setninger til fransk med bruk av vokabular om interkulturell kommunikasjon:\n\n1. Kulturelle forskjeller kan føre til misforståelser.\n2. I Frankrike er bruk av «vous» et tegn på respekt.\n3. Nordisk kommunikasjon er mer direkte enn fransk.\n4. Sosiale koder varierer fra kultur til kultur.\n5. Ikke-verbal kommunikasjon er like viktig som ord.`,
        solution: `1. *Les différences culturelles peuvent provoquer des malentendus (interculturels).*\n2. *En France, le vouvoiement est un signe de respect.*\n3. *La communication nordique est plus directe que la communication française.*\n4. *Les codes sociaux varient d'une culture à l'autre.*\n5. *La communication non-verbale est aussi importante que les mots.*\n\nLegg merke til den elegante formuleringen «d'une culture à l'autre» (fra en kultur til en annen) som er typisk for fransk.`,
      }
    },
    {
      id: 'fransk-3-13-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Le vouvoiement / le tutoiement**: Det franske systemet med formell og uformell tiltale — et sentralt kulturelt trekk uten direkte norsk ekvivalent
- **Direkte vs. indirekte kommunikasjon**: Nordisk kultur er mer direkte, fransk kultur bruker oftere *l'implicite* (det underforståtte)
- **La litote**: Retorisk understatement som er typisk for fransk kommunikasjon — «ce n'est pas mal» betyr ofte «det er bra»
- **Les codes sociaux**: Usynlige kulturelle koder som styrer kommunikasjon — titler, formalitet, kroppsspråk
- **Mediekulturelle forskjeller**: Franske medier verdsetter analyse og debatt, nordiske verdsetter objektivitet og konsensus
- **Les malentendus interculturels**: Interkulturelle misforståelser oppstår når man tolker en annen kulturs kommunikasjon ut fra sine egne koder`
    },
    // --- Samleoppgaver ---
    {
      id: 'fransk-3-13-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en tekst på fransk (100–150 ord) der du sammenligner fransk og nordisk kommunikasjonskultur. Diskuter minst tre konkrete forskjeller og bruk minst 6 fagtermer fra kapittelet.\n\nStrukturér teksten med: innledning, tre forskjeller, og en konklusjon om viktigheten av interkulturell kompetanse.`,
        solution: `Eksempel:\n\n*«La communication française et la communication nordique diffèrent sur plusieurs points essentiels.\n\nPremièrement, le registre de langue : en France, le vouvoiement reste fondamental dans les relations professionnelles et formelles, alors que les pays nordiques utilisent presque exclusivement le tutoiement. Cette différence peut provoquer des malentendus interculturels.\n\nDeuxièmement, la communication directe et indirecte : les Nordiques sont réputés pour leur communication directe, tandis que les Français utilisent souvent l'implicite et la litote. «Ce n'est pas mal» signifie en réalité «c'est bien».\n\nTroisièmement, les codes sociaux dans les médias : les débats télévisés français sont plus confrontationnels, ce qui peut sembler agressif pour un public nordique habitué à la recherche du consensus.\n\nEn conclusion, la compréhension des différences culturelles est indispensable pour éviter les malentendus et communiquer efficacement dans un contexte interculturel.»*`,
      }
    },
    {
      id: 'fransk-3-13-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-13-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Forklar følgende begreper om interkulturell kommunikasjon på fransk med en setning hver. Bruk formuleringen «[Begrep] désigne...» eller «[Begrep] est...»:\n\n1. Le vouvoiement\n2. Le malentendu interculturel\n3. La communication non-verbale\n4. Les codes sociaux\n5. Le registre de langue\n6. La litote`,
        solution: `1. *Le vouvoiement est l'usage du pronom «vous» pour s'adresser à une personne, en signe de respect, de distance ou de formalité.*\n2. *Le malentendu interculturel désigne une incompréhension entre personnes de cultures différentes, causée par des différences dans les codes de communication.*\n3. *La communication non-verbale est l'ensemble des messages transmis sans paroles : gestes, expressions faciales, postures, contact visuel.*\n4. *Les codes sociaux sont les règles implicites qui régissent les interactions sociales au sein d'une culture donnée.*\n5. *Le registre de langue désigne le niveau de formalité du discours, allant du registre familier au registre soutenu.*\n6. *La litote est une figure de style qui consiste à dire moins pour suggérer plus, comme «ce n'est pas mal» pour signifier «c'est bien».* `,
      }
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'le vouvoiement', definition: 'Bruk av «vous» — formell tiltale som uttrykker respekt og avstand' },
    { term: 'le tutoiement', definition: 'Bruk av «tu» — uformell tiltale som uttrykker nærhet og fortrolighet' },
    { term: 'le malentendu interculturel', definition: 'Interkulturell misforståelse — uenighet som skyldes kulturelle forskjeller' },
    { term: 'la communication non-verbale', definition: 'Ikke-verbal kommunikasjon — budskap formidlet gjennom gester, mimikk og kroppsspråk' },
    { term: 'les codes sociaux', definition: 'Sosiale koder — uskrevne regler som styrer samhandling i en kultur' },
    { term: 'le registre de langue', definition: 'Språklig register — formalitetsnivå i språkbruken, fra familiært til formelt' },
    { term: 'la politesse', definition: 'Høflighet — sosiale konvensjoner for respektfull kommunikasjon' },
    { term: 'l\'implicite', definition: 'Det underforståtte — mening som uttrykkes indirekte, «mellom linjene»' },
  ],
};

// ============================================================================
// Eksporter alle kapitler fra kap 11-13
// ============================================================================

export const FRANSK_3_CHAPTERS_11_13: TextbookChapter[] = [
  CHAPTER_FRANSK_3_11_1,
  CHAPTER_FRANSK_3_11_2,
  CHAPTER_FRANSK_3_11_3,
  CHAPTER_FRANSK_3_11_4,
  CHAPTER_FRANSK_3_12_1,
  CHAPTER_FRANSK_3_12_2,
  CHAPTER_FRANSK_3_12_3,
  CHAPTER_FRANSK_3_12_4,
  CHAPTER_FRANSK_3_13_1,
  CHAPTER_FRANSK_3_13_2,
  CHAPTER_FRANSK_3_13_3,
  CHAPTER_FRANSK_3_13_4,
];
