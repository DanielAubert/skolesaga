/* eslint-disable */
// @ts-nocheck
/**
 * Spansk Nivå 2 - Kapittel 14-16 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 14: Identidad y convivencia (14.1-14.4)
 * - Kapittel 15: Escritura creativa y académica (15.1-15.4)
 * - Kapittel 16: Repaso y preparación para exámenes (16.1-16.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 14.1 — Identidad y pertenencia
// ============================================================================

export const CHAPTER_SPANSK_2_14_1: TextbookChapter = {
  id: 'spansk-2-14-1',
  courseId: 'spansk-2',
  chapterNumber: '14.1',
  title: 'Identidad y pertenencia',
  subtitle: 'Identitet og tilhørighet',
  description: 'I dette kapittelet utforsker vi begreper knyttet til identitet, røtter og tilhørighet i den spansktalende verden. Du lærer å uttrykke hvem du er, hvor du kommer fra og hva som former din identitet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne reflektere over og uttrykke identitet og tilhørighet på spansk',
    'Forstå og bruke vokabular knyttet til kulturell bakgrunn og røtter',
    'Kunne diskutere hva som former en persons identitet',
  ],
  content: [
    {
      id: 'spansk-2-14-1-intro',
      type: 'text',
      content: `## Identidad y pertenencia — Identitet og tilhørighet

Identitet er noe som formes av mange faktorer: familien vi vokser opp i, kulturen vi tilhører, språket vi snakker og verdiene vi bærer med oss. I den spansktalende verden er spørsmål om identitet og tilhørighet spesielt aktuelle, gitt den enorme kulturelle og etniske mangfoldigheten på tvers av land og regioner.

Å kunne snakke om identitet på spansk handler ikke bare om vokabular — det handler om å forstå hvordan folk i ulike spansktalende land opplever tilhørighet, og hvordan historien har formet deres selvbilde.`,
    },
    {
      id: 'spansk-2-14-1-def-1',
      type: 'definition',
      title: 'La identidad — Identitet',
      content: `**La identidad** betyr identitet og refererer til de egenskapene, verdiene og erfaringene som gjør en person eller gruppe unik. På spansk brukes det ofte i sammensetninger som *identidad cultural* (kulturell identitet), *identidad nacional* (nasjonal identitet) og *identidad personal* (personlig identitet).`,
    },
    {
      id: 'spansk-2-14-1-def-2',
      type: 'definition',
      title: 'La patria og las raíces',
      content: `**La patria** betyr fedreland eller hjemland — det stedet man føler en dyp tilknytning til. **Las raíces** (røttene) refererer til ens kulturelle, familiære og historiske opphav. Begge begrepene er sentrale i spanskspråklig litteratur og debatt om identitet.

Eksempler:
- *Mi patria es Chile, pero mis raíces están en el sur de España.* (Mitt fedreland er Chile, men røttene mine er i Sør-Spania.)
- *Nuestras raíces nos conectan con el pasado.* (Røttene våre knytter oss til fortiden.)`,
    },
    {
      id: 'spansk-2-14-1-def-3',
      type: 'definition',
      title: 'El sentido de pertenencia',
      content: `**El sentido de pertenencia** betyr tilhørighetsfølelse — følelsen av å høre til i en gruppe, et fellesskap eller et sted. Det er et sentralt begrep i sosiologi og psykologi, og brukes mye i spanskspråklige diskusjoner om integrasjon og identitet.

- *El sentido de pertenencia es fundamental para el bienestar emocional.* (Tilhørighetsfølelsen er grunnleggende for emosjonelt velvære.)`,
    },
    {
      id: 'spansk-2-14-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Å beskrive sin identitet',
      problem: `Hvordan kan man presentere sin identitet på spansk? Skriv en kort tekst der en person forteller om bakgrunnen sin.`,
      solution: `*Me llamo Sofía y tengo dieciocho años. Nací en Buenos Aires, pero mi familia tiene raíces italianas. Mi abuelo emigró de Nápoles en los años cincuenta. Para mí, ser argentina significa llevar dos culturas en el corazón: la pasión del tango y el amor por la pasta de la nonna. Mi identidad es una mezcla de tradiciones que me hacen única.*

Oversettelse: Jeg heter Sofía og er atten år. Jeg ble født i Buenos Aires, men familien min har italienske røtter. Bestefaren min emigrerte fra Napoli på femtitallet. For meg betyr det å være argentinsk å bære to kulturer i hjertet: tangoen sin lidenskap og kjærligheten til nonnas pasta. Min identitet er en blanding av tradisjoner som gjør meg unik.`,
    },
    {
      id: 'spansk-2-14-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «el sentido de pertenencia» på norsk?',
        options: [
          { id: 'a', text: 'Fornuftsfølelsen', isCorrect: false },
          { id: 'b', text: 'Tilhørighetsfølelsen', isCorrect: true },
          { id: 'c', text: 'Meningsfølelsen', isCorrect: false },
          { id: 'd', text: 'Eiendomsfølelsen', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «El sentido de pertenencia» betyr tilhørighetsfølelsen — følelsen av å høre til et sted eller en gruppe.',
      },
    },
    {
      id: 'spansk-2-14-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket ord betyr «røtter» på spansk?',
        options: [
          { id: 'a', text: 'Las ramas', isCorrect: false },
          { id: 'b', text: 'Las hojas', isCorrect: false },
          { id: 'c', text: 'Las raíces', isCorrect: true },
          { id: 'd', text: 'Las flores', isCorrect: false },
        ],
        solution: 'Riktig svar er c). «Las raíces» betyr røttene. Las ramas = grenene, las hojas = bladene, las flores = blomstene.',
      },
    },
    {
      id: 'spansk-2-14-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Nyttige uttrykk om identitet',
      problem: `Hvilke uttrykk kan vi bruke for å snakke om identitet og tilhørighet?`,
      solution: `Her er noen sentrale uttrykk:

| Spansk | Norsk |
|--------|-------|
| *Soy de...* | Jeg er fra... |
| *Mis raíces están en...* | Røttene mine er i... |
| *Me siento parte de...* | Jeg føler meg som en del av... |
| *Mi cultura me define como...* | Kulturen min definerer meg som... |
| *Llevo dos culturas en el corazón* | Jeg bærer to kulturer i hjertet |
| *La diversidad nos enriquece* | Mangfoldet beriker oss |
| *Me identifico con...* | Jeg identifiserer meg med... |`,
    },
    {
      id: 'spansk-2-14-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst (6-8 setninger) der du beskriver din egen identitet på spansk. Bruk minst tre av uttrykkene fra eksempel 2.',
        solution: 'Eksempel på besvarelse: *Soy de Noruega, pero mis raíces están en diferentes partes del mundo. Me siento parte de una comunidad multicultural. Mi cultura me define como una persona abierta y curiosa. La diversidad nos enriquece, y creo que cada persona tiene algo especial que ofrecer. Me identifico con los valores de igualdad y respeto. Llevo la cultura noruega en el corazón, pero también me interesa conocer otras tradiciones.*',
      },
    },
    {
      id: 'spansk-2-14-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les teksten og svar på spørsmålene.',
        subTasks: [
          { label: 'a', task: 'Hva betyr «la patria» i teksten i eksempel 1? Forklar med egne ord på norsk.', solution: '«La patria» refererer til hjemlandet eller fedrelandet — det stedet man har en dyp emosjonell tilknytning til, ofte landet der man er født eller oppvokst.' },
          { label: 'b', task: 'Hvorfor sier Sofía at hennes identitet er «una mezcla»? Svar på spansk.', solution: '*Sofía dice que su identidad es una mezcla porque tiene raíces italianas y argentinas. Su abuelo emigró de Italia, así que ella lleva dos culturas en su vida diaria.*' },
          { label: 'c', task: 'Nevn tre faktorer som kan forme en persons identitet. Skriv på spansk.', solution: '*Tres factores que pueden formar la identidad de una persona son: la familia, la cultura y el idioma que habla.*' },
        ],
        solution: 'Se deloppgavene over for løsningsforslag.',
      },
    },
    {
      id: 'spansk-2-14-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord: «Mi abuelo siempre dice que nuestras ______ nos conectan con la historia de la familia.»',
        options: [
          { id: 'a', text: 'patrias', isCorrect: false },
          { id: 'b', text: 'raíces', isCorrect: true },
          { id: 'c', text: 'identidades', isCorrect: false },
          { id: 'd', text: 'pertenencias', isCorrect: false },
        ],
        solution: 'Riktig svar er b) raíces. Setningen betyr: «Bestefaren min sier alltid at røttene våre knytter oss til familiens historie.»',
      },
    },
    {
      id: 'spansk-2-14-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:
- Sentrale begreper knyttet til identitet og tilhørighet: **la identidad**, **la patria**, **las raíces**, **el sentido de pertenencia**
- Uttrykk for å snakke om bakgrunn, kultur og tilhørighet på spansk
- Hvordan identitet kan formes av ulike faktorer som familie, kultur, språk og historie
- Å reflektere over og uttrykke din egen identitet på spansk`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'La identidad', definition: 'Identiteten — egenskapene som gjør en person unik' },
    { term: 'La patria', definition: 'Fedrelandet, hjemlandet' },
    { term: 'Las raíces', definition: 'Røttene — kulturelt og familiært opphav' },
    { term: 'El sentido de pertenencia', definition: 'Tilhørighetsfølelsen' },
    { term: 'La diversidad', definition: 'Mangfoldet' },
    { term: 'La herencia cultural', definition: 'Den kulturelle arven' },
    { term: 'La mezcla', definition: 'Blandingen — blanding av kulturer' },
  ],
};

// ============================================================================
// KAPITTEL 14.2 — Migración e integración
// ============================================================================

export const CHAPTER_SPANSK_2_14_2: TextbookChapter = {
  id: 'spansk-2-14-2',
  courseId: 'spansk-2',
  chapterNumber: '14.2',
  title: 'Migración e integración',
  subtitle: 'Migrasjon og integrasjon',
  description: 'I dette kapittelet lærer du om migrasjon og integrasjon i den spansktalende verden. Du får vokabular og uttrykk for å diskutere dette viktige temaet på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Forstå og bruke vokabular knyttet til migrasjon og integrasjon',
    'Kunne diskutere årsaker til og konsekvenser av migrasjon på spansk',
    'Reflektere over integrasjonsutfordringer i spansktalende land',
  ],
  content: [
    {
      id: 'spansk-2-14-2-intro',
      type: 'text',
      content: `## Migración e integración — Migrasjon og integrasjon

Migrasjon er et sentralt tema i den spansktalende verden. Millioner av mennesker har forlatt hjemlandet sitt i Latin-Amerika for å søke bedre levekår i USA, Spania eller andre land. Samtidig har Spania selv blitt et mottakerland for innvandrere fra Nord-Afrika, Latin-Amerika og Øst-Europa.

Å forstå migrasjon krever at vi kan snakke om årsaker (*las causas*), konsekvenser (*las consecuencias*) og utfordringer knyttet til integrasjon (*la integración*).`,
    },
    {
      id: 'spansk-2-14-2-def-1',
      type: 'definition',
      title: 'La migración og el/la emigrante / el/la inmigrante',
      content: `**La migración** betyr migrasjon — det å flytte fra ett sted til et annet. **El/la emigrante** er en person som forlater sitt eget land, mens **el/la inmigrante** er en person som ankommer et nytt land.

- *La migración puede ser voluntaria o forzada.* (Migrasjon kan være frivillig eller tvungen.)
- *Los emigrantes dejan su país por razones económicas o políticas.* (Emigrantene forlater landet sitt av økonomiske eller politiske grunner.)`,
    },
    {
      id: 'spansk-2-14-2-def-2',
      type: 'definition',
      title: 'La integración',
      content: `**La integración** betyr integrasjon — prosessen der innvandrere blir en del av det nye samfunnet. Det innebærer språklæring, tilgang til arbeid, utdanning og sosial deltakelse.

- *La integración requiere esfuerzo tanto del inmigrante como de la sociedad de acogida.* (Integrasjon krever innsats både fra innvandreren og fra vertssamfunnet.)`,
    },
    {
      id: 'spansk-2-14-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Årsaker til migrasjon',
      problem: `Hva er de vanligste årsakene til migrasjon i den spansktalende verden?`,
      solution: `Her er en oversikt over vanlige årsaker:

| Spansk | Norsk |
|--------|-------|
| *La pobreza* | Fattigdom |
| *El desempleo* | Arbeidsledighet |
| *La violencia* | Vold |
| *La persecución política* | Politisk forfølgelse |
| *La falta de oportunidades* | Mangel på muligheter |
| *La reunificación familiar* | Familiegjenforening |
| *Los desastres naturales* | Naturkatastrofer |

Eksempel: *Muchas personas emigran de Centroamérica por la violencia y la pobreza. Buscan una vida mejor en otros países.* (Mange mennesker emigrerer fra Mellom-Amerika på grunn av vold og fattigdom. De søker et bedre liv i andre land.)`,
    },
    {
      id: 'spansk-2-14-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «el desempleo» på norsk?',
        options: [
          { id: 'a', text: 'Utdanning', isCorrect: false },
          { id: 'b', text: 'Fattigdom', isCorrect: false },
          { id: 'c', text: 'Arbeidsledighet', isCorrect: true },
          { id: 'd', text: 'Vold', isCorrect: false },
        ],
        solution: 'Riktig svar er c). «El desempleo» betyr arbeidsledighet. Fattigdom = la pobreza, vold = la violencia.',
      },
    },
    {
      id: 'spansk-2-14-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom «emigrante» og «inmigrante»?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell, begge betyr innvandrer', isCorrect: false },
          { id: 'b', text: 'En emigrante forlater landet sitt, en inmigrante ankommer et nytt land', isCorrect: true },
          { id: 'c', text: 'En emigrante er lovlig, en inmigrante er ulovlig', isCorrect: false },
          { id: 'd', text: 'En emigrante er fattig, en inmigrante er rik', isCorrect: false },
        ],
        solution: 'Riktig svar er b). En emigrant er en som forlater sitt eget land (emigrar = å dra ut), mens en immigrant er en som ankommer et nytt land (inmigrar = å komme inn).',
      },
    },
    {
      id: 'spansk-2-14-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Tekst om migrasjon',
      problem: `Les denne korte teksten om migrasjon og merk deg viktige uttrykk.`,
      solution: `*En las últimas décadas, millones de latinoamericanos han emigrado a Estados Unidos y España en busca de mejores oportunidades. Este fenómeno ha transformado tanto los países de origen como los de destino. Los inmigrantes contribuyen a la economía y la cultura del país de acogida, pero también enfrentan desafíos como la discriminación, la barrera del idioma y la nostalgia por su tierra natal.*

Viktige uttrykk:
- *en busca de* — på jakt etter
- *el país de acogida* — vertsland
- *enfrentar desafíos* — møte utfordringer
- *la barrera del idioma* — språkbarrieren
- *la tierra natal* — fødelandet`,
    },
    {
      id: 'spansk-2-14-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på spørsmålene basert på teksten i eksempel 2.',
        subTasks: [
          { label: 'a', task: 'Hvor har mange latinamerikanere emigrert til? Svar på spansk.', solution: '*Muchos latinoamericanos han emigrado a Estados Unidos y España.*' },
          { label: 'b', task: 'Nevn to utfordringer som innvandrere møter ifølge teksten. Svar på spansk.', solution: '*Según el texto, los inmigrantes enfrentan la discriminación y la barrera del idioma.*' },
          { label: 'c', task: 'Hva betyr «la tierra natal»? Forklar på norsk.', solution: '«La tierra natal» betyr fødeland eller hjemsted — det stedet der man er født og oppvokst.' },
        ],
        solution: 'Se deloppgavene over for løsningsforslag.',
      },
    },
    {
      id: 'spansk-2-14-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en argumenterende tekst (8-10 setninger) på spansk om følgende tema: «¿Es la migración positiva o negativa para la sociedad?» Bruk minst fem av ordene/uttrykkene fra dette kapittelet.',
        solution: 'Eksempel på besvarelse: *En mi opinión, la migración es positiva para la sociedad. Los inmigrantes contribuyen a la economía del país de acogida con su trabajo. Además, la diversidad cultural enriquece a toda la comunidad. Sin embargo, la integración puede ser difícil si hay discriminación o barreras del idioma. Es importante que la sociedad ofrezca oportunidades de educación y empleo a los inmigrantes. La reunificación familiar también es un derecho fundamental. Creo que una sociedad abierta y tolerante se beneficia de la migración. En conclusión, la migración es un fenómeno complejo, pero sus aspectos positivos superan los negativos.*',
      },
    },
    {
      id: 'spansk-2-14-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Fyll inn: «Los inmigrantes ______ desafíos como la discriminación y la barrera del idioma.»',
        options: [
          { id: 'a', text: 'enfrentan', isCorrect: true },
          { id: 'b', text: 'enfrenten', isCorrect: false },
          { id: 'c', text: 'enfrentaron', isCorrect: false },
          { id: 'd', text: 'enfrentarán', isCorrect: false },
        ],
        solution: 'Riktig svar er a) enfrentan (presens indikativ). Setningen beskriver en generell sannhet i nåtid.',
      },
    },
    {
      id: 'spansk-2-14-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:
- Vokabular knyttet til migrasjon: **la migración**, **el/la emigrante**, **el/la inmigrante**, **la integración**
- Årsaker til migrasjon: fattigdom, arbeidsledighet, vold, politisk forfølgelse
- Utfordringer knyttet til integrasjon: diskriminering, språkbarrierer, nostalgi
- Nyttige uttrykk som *en busca de*, *el país de acogida*, *la tierra natal*
- Å argumentere for og imot migrasjon på spansk`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'La migración', definition: 'Migrasjon — det å flytte fra ett sted til et annet' },
    { term: 'El/la emigrante', definition: 'Emigrant — person som forlater sitt land' },
    { term: 'El/la inmigrante', definition: 'Immigrant — person som ankommer et nytt land' },
    { term: 'La integración', definition: 'Integrasjon — prosessen med å bli del av et nytt samfunn' },
    { term: 'El desempleo', definition: 'Arbeidsledighet' },
    { term: 'El país de acogida', definition: 'Vertsland — landet som tar imot innvandrere' },
    { term: 'La tierra natal', definition: 'Fødeland, hjemsted' },
    { term: 'La barrera del idioma', definition: 'Språkbarrieren' },
  ],
};

// ============================================================================
// KAPITTEL 14.3 — Convivencia en la sociedad
// ============================================================================

export const CHAPTER_SPANSK_2_14_3: TextbookChapter = {
  id: 'spansk-2-14-3',
  courseId: 'spansk-2',
  chapterNumber: '14.3',
  title: 'Convivencia en la sociedad',
  subtitle: 'Å leve sammen i samfunnet',
  description: 'I dette kapittelet lærer du om demokrati, frivillighet, rettigheter og sameksistens i spansktalende samfunn. Du får vokabular og uttrykk for å diskutere samfunnsdeltakelse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Forstå og bruke vokabular knyttet til demokrati, rettigheter og plikter',
    'Kunne diskutere samfunnsdeltakelse og frivillighet på spansk',
    'Reflektere over hva det betyr å leve sammen i et mangfoldig samfunn',
  ],
  content: [
    {
      id: 'spansk-2-14-3-intro',
      type: 'text',
      content: `## Convivencia en la sociedad — Å leve sammen i samfunnet

Å leve sammen i et samfunn krever respekt, toleranse og aktiv deltakelse. I dette kapittelet ser vi på sentrale begreper knyttet til demokrati, frivillighet og rettigheter i den spansktalende verden. Vi lærer å uttrykke meninger om samfunnsforhold og å diskutere hva som gjør et godt samfunn.

I mange spansktalende land har kampen for demokrati og menneskerettigheter vært lang og dramatisk. Forståelsen av begreper som *la democracia*, *los derechos humanos* og *el voluntariado* er derfor spesielt viktig.`,
    },
    {
      id: 'spansk-2-14-3-def-1',
      type: 'definition',
      title: 'La convivencia',
      content: `**La convivencia** betyr sameksistens eller det å leve sammen. Ordet brukes mye i spansktalende land for å beskrive det fredelige samlivet mellom ulike grupper i samfunnet.

- *La convivencia pacífica es la base de una sociedad democrática.* (Fredelig sameksistens er grunnlaget for et demokratisk samfunn.)`,
    },
    {
      id: 'spansk-2-14-3-def-2',
      type: 'definition',
      title: 'La democracia og los derechos',
      content: `**La democracia** betyr demokrati — en styreform der folket bestemmer. **Los derechos** betyr rettigheter, og **los deberes** betyr plikter. I et demokrati har borgerne både rettigheter og plikter.

- *En una democracia, todos los ciudadanos tienen derecho a votar.* (I et demokrati har alle borgere rett til å stemme.)
- *Los derechos humanos son universales.* (Menneskerettighetene er universelle.)`,
    },
    {
      id: 'spansk-2-14-3-def-3',
      type: 'definition',
      title: 'El voluntariado',
      content: `**El voluntariado** betyr frivillighet eller frivillig arbeid. **El/la voluntario/a** er en frivillig person. Frivillig arbeid spiller en stor rolle i mange spansktalende land.

- *El voluntariado es una forma de contribuir a la sociedad.* (Frivillighet er en måte å bidra til samfunnet på.)`,
    },
    {
      id: 'spansk-2-14-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Rettigheter og plikter',
      problem: `Hva er eksempler på rettigheter og plikter i et demokratisk samfunn?`,
      solution: `**Los derechos (Rettigheter):**
- *El derecho a la educación* — Retten til utdanning
- *El derecho a la libertad de expresión* — Retten til ytringsfrihet
- *El derecho a votar* — Stemmeretten
- *El derecho a la igualdad* — Retten til likhet

**Los deberes (Plikter):**
- *El deber de respetar las leyes* — Plikten til å respektere lovene
- *El deber de pagar impuestos* — Plikten til å betale skatt
- *El deber de respetar a los demás* — Plikten til å respektere andre
- *El deber de participar en la sociedad* — Plikten til å delta i samfunnet`,
    },
    {
      id: 'spansk-2-14-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «la convivencia» på norsk?',
        options: [
          { id: 'a', text: 'Overbevisningen', isCorrect: false },
          { id: 'b', text: 'Sameksistens / det å leve sammen', isCorrect: true },
          { id: 'c', text: 'Samtalen', isCorrect: false },
          { id: 'd', text: 'Konkurransen', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «La convivencia» betyr sameksistens eller det å leve sammen i fred og harmoni.',
      },
    },
    {
      id: 'spansk-2-14-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-2-ex-2b',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning er grammatisk korrekt?',
        options: [
          { id: 'a', text: 'Todos los ciudadanos tienen derecho a votar.', isCorrect: true },
          { id: 'b', text: 'Todos los ciudadanos tiene derecho a votar.', isCorrect: false },
          { id: 'c', text: 'Todos los ciudadanos tienen derecha a votar.', isCorrect: false },
          { id: 'd', text: 'Todo los ciudadanos tienen derecho a votar.', isCorrect: false },
        ],
        solution: 'Riktig svar er a). «Todos» (flertall) krever «tienen» (flertallsform). «Derecho» (rettighet) er hankjønn, ikke «derecha» (som betyr høyre/høyreside). «Todo» må bøyes til «todos» foran flertallssubstantiv.',
      },
    },
    {
      id: 'spansk-2-14-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble rettigheter og plikter med riktige oversettelser.',
        subTasks: [
          { label: 'a', task: 'Oversett til spansk: «Retten til ytringsfrihet»', solution: '*El derecho a la libertad de expresión*' },
          { label: 'b', task: 'Oversett til norsk: «El deber de respetar las leyes»', solution: 'Plikten til å respektere lovene' },
          { label: 'c', task: 'Oversett til spansk: «Plikten til å betale skatt»', solution: '*El deber de pagar impuestos*' },
          { label: 'd', task: 'Oversett til norsk: «El derecho a la igualdad»', solution: 'Retten til likhet' },
        ],
        solution: 'Se deloppgavene over for løsningsforslag.',
      },
    },
    {
      id: 'spansk-2-14-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort tekst (6-8 setninger) på spansk om frivillighet (el voluntariado). Forklar hva frivillighet er, gi eksempler og si hvorfor det er viktig.',
        solution: 'Eksempel: *El voluntariado es una actividad en la que las personas dedican su tiempo libre a ayudar a los demás sin recibir dinero. Hay muchas formas de ser voluntario: puedes trabajar en un comedor social, ayudar en un hospital o participar en proyectos medioambientales. El voluntariado es importante porque fortalece la convivencia en la sociedad. Los voluntarios aprenden nuevas habilidades y conocen a personas diferentes. Además, contribuyen a resolver problemas sociales. Creo que todos deberíamos dedicar algo de tiempo al voluntariado.*',
      },
    },
    {
      id: 'spansk-2-14-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «los derechos humanos»?',
        options: [
          { id: 'a', text: 'De menneskelige pliktene', isCorrect: false },
          { id: 'b', text: 'Menneskerettighetene', isCorrect: true },
          { id: 'c', text: 'De sosiale normene', isCorrect: false },
          { id: 'd', text: 'De demokratiske verdiene', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Los derechos humanos» betyr menneskerettighetene. Derechos = rettigheter, humanos = menneskelige.',
      },
    },
    {
      id: 'spansk-2-14-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:
- Begreper knyttet til sameksistens: **la convivencia**, **la democracia**, **los derechos**, **los deberes**
- Forskjellen mellom rettigheter og plikter i et demokratisk samfunn
- Vokabular knyttet til frivillighet: **el voluntariado**, **el/la voluntario/a**
- Å uttrykke meninger om samfunnsdeltakelse og demokrati på spansk`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'La convivencia', definition: 'Sameksistens — det å leve fredelig sammen' },
    { term: 'La democracia', definition: 'Demokrati' },
    { term: 'Los derechos', definition: 'Rettigheter' },
    { term: 'Los deberes', definition: 'Plikter' },
    { term: 'El voluntariado', definition: 'Frivillighet, frivillig arbeid' },
    { term: 'Los derechos humanos', definition: 'Menneskerettighetene' },
    { term: 'La igualdad', definition: 'Likhet, likverd' },
    { term: 'La libertad de expresión', definition: 'Ytringsfrihet' },
  ],
};

// ============================================================================
// KAPITTEL 14.4 — Comprensión intercultural
// ============================================================================

export const CHAPTER_SPANSK_2_14_4: TextbookChapter = {
  id: 'spansk-2-14-4',
  courseId: 'spansk-2',
  chapterNumber: '14.4',
  title: 'Comprensión intercultural',
  subtitle: 'Interkulturell forståelse',
  description: 'I dette kapittelet lærer du om interkulturell forståelse, stereotypier og kommunikasjon på tvers av kulturer. Du utvikler evnen til å reflektere over kulturelle forskjeller og likheter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Forstå begrepet interkulturell kompetanse og dens betydning',
    'Kunne identifisere og diskutere stereotypier og fordommer',
    'Utvikle evnen til interkulturell kommunikasjon på spansk',
  ],
  content: [
    {
      id: 'spansk-2-14-4-intro',
      type: 'text',
      content: `## Comprensión intercultural — Interkulturell forståelse

I en globalisert verden er interkulturell forståelse viktigere enn noensinne. Det handler om å forstå, respektere og verdsette kulturelle forskjeller — og å unngå å dømme andre kulturer ut fra sin egen.

Når vi lærer spansk, møter vi mange forskjellige kulturer: fra Spania til Mexico, fra Argentina til Guinea Ecuatorial. Hver kultur har sine egne tradisjoner, verdier og kommunikasjonsstiler. Interkulturell forståelse hjelper oss å navigere disse forskjellene med respekt og nysgjerrighet.`,
    },
    {
      id: 'spansk-2-14-4-def-1',
      type: 'definition',
      title: 'La comprensión intercultural',
      content: `**La comprensión intercultural** betyr interkulturell forståelse — evnen til å forstå og verdsette andre kulturer. Det innebærer å kjenne til kulturelle normer, verdier og kommunikasjonsstiler uten å dømme.

- *La comprensión intercultural es clave para una comunicación efectiva.* (Interkulturell forståelse er nøkkelen til effektiv kommunikasjon.)`,
    },
    {
      id: 'spansk-2-14-4-def-2',
      type: 'definition',
      title: 'Los estereotipos og los prejuicios',
      content: `**Los estereotipos** betyr stereotypier — forenklede og generaliserte forestillinger om en gruppe mennesker. **Los prejuicios** betyr fordommer — negative holdninger basert på stereotypier.

- *Los estereotipos no representan la realidad de un pueblo.* (Stereotypier representerer ikke virkeligheten til et folk.)
- *Es importante cuestionar nuestros prejuicios.* (Det er viktig å stille spørsmål ved fordommene våre.)`,
    },
    {
      id: 'spansk-2-14-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Vanlige stereotypier',
      problem: `Hva er eksempler på stereotypier om spansktalende land, og hvorfor er de problematiske?`,
      solution: `Noen vanlige stereotypier:

- *«Todos los españoles duermen la siesta.»* — Ikke alle spanjoler tar siesta. Dette var mer vanlig før, men arbeidstider i moderne Spania ligner resten av Europa.
- *«Los latinoamericanos siempre llegan tarde.»* — Selv om tidskulturen kan være mer fleksibel i noen land, er dette en grov generalisering.
- *«En México solo hay desiertos y cactus.»* — Mexico har en utrolig variert geografi med regnskoger, fjell, strender og moderne byer.

Stereotypier er problematiske fordi de:
- Forenkler en kompleks virkelighet (*simplifican la realidad*)
- Kan føre til diskriminering (*pueden causar discriminación*)
- Hindrer ekte forståelse (*impiden la verdadera comprensión*)`,
    },
    {
      id: 'spansk-2-14-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «los prejuicios» på norsk?',
        options: [
          { id: 'a', text: 'Forventninger', isCorrect: false },
          { id: 'b', text: 'Forutsetninger', isCorrect: false },
          { id: 'c', text: 'Fordommer', isCorrect: true },
          { id: 'd', text: 'Forhandlinger', isCorrect: false },
        ],
        solution: 'Riktig svar er c). «Los prejuicios» betyr fordommer — negative holdninger som er basert på manglende kunnskap eller stereotypier.',
      },
    },
    {
      id: 'spansk-2-14-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken påstand om interkulturell kommunikasjon er mest korrekt?',
        options: [
          { id: 'a', text: 'Det handler bare om å snakke et annet språk', isCorrect: false },
          { id: 'b', text: 'Det handler om å forstå kulturelle normer, verdier og kommunikasjonsstiler', isCorrect: true },
          { id: 'c', text: 'Det handler om å tilpasse seg den andre kulturen helt', isCorrect: false },
          { id: 'd', text: 'Det er bare viktig for diplomater og forretningsfolk', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Interkulturell kommunikasjon handler om mer enn bare språk — det inkluderer forståelse av kulturelle normer, verdier, kroppsspråk og kommunikasjonsstiler.',
      },
    },
    {
      id: 'spansk-2-14-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Kulturelle forskjeller i kommunikasjon',
      problem: `Hvilke kulturelle forskjeller kan påvirke kommunikasjonen mellom norske og spansktalende mennesker?`,
      solution: `Her er noen typiske forskjeller:

| Tema | Norge | Spansktalende land |
|------|-------|--------------------|
| *El saludo* (hilsen) | Håndtrykk, avstand | Kinn-kyss, klem |
| *La distancia personal* | Større avstand | Tettere kontakt |
| *El contacto visual* | Moderat | Mer direkte |
| *La puntualidad* (punktlighet) | Svært viktig | Mer fleksibel (varierer) |
| *El estilo comunicativo* | Direkte, kortfattet | Ofte mer utdypende |

Merk: Disse er generaliseringer og varierer mellom individer og regioner!`,
    },
    {
      id: 'spansk-2-14-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg en stereotypi om et spansktalende land. Skriv en kort tekst (5-7 setninger) på spansk der du forklarer stereotypien og argumenterer for hvorfor den er problematisk.',
        solution: 'Eksempel: *Un estereotipo común es que todos los colombianos están relacionados con el narcotráfico. Este prejuicio es muy injusto porque Colombia es un país con una cultura riquísima, con escritores como Gabriel García Márquez, música como la cumbia y el vallenato, y paisajes increíbles. La mayoría de los colombianos son personas trabajadoras y amables que rechazan la violencia. Los estereotipos como este causan discriminación y dificultan la integración de los colombianos en otros países. Es importante conocer la realidad antes de juzgar.*',
      },
    },
    {
      id: 'spansk-2-14-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter interkulturell forståelse.',
        subTasks: [
          { label: 'a', task: 'Hva er forskjellen mellom «estereotipos» og «prejuicios»? Forklar på norsk.', solution: 'Estereotipos (stereotypier) er forenklede og generaliserte forestillinger om en gruppe. Prejuicios (fordommer) er negative holdninger basert på disse stereotypiene. Stereotypier er tanker, fordommer er holdninger som fører til handlinger.' },
          { label: 'b', task: 'Nevn tre ting man kan gjøre for å utvikle interkulturell forståelse. Skriv på spansk.', solution: '*Para desarrollar la comprensión intercultural se puede: (1) viajar y conocer otras culturas directamente, (2) leer libros y ver películas de otros países, y (3) hablar con personas de diferentes culturas con mente abierta.*' },
        ],
        solution: 'Se deloppgavene over for løsningsforslag.',
      },
    },
    {
      id: 'spansk-2-14-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-14-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «cuestionar» i setningen «Es importante cuestionar nuestros prejuicios»?',
        options: [
          { id: 'a', text: 'Å spørre noen et spørsmål', isCorrect: false },
          { id: 'b', text: 'Å stille spørsmål ved / sette spørsmålstegn ved', isCorrect: true },
          { id: 'c', text: 'Å ignorere', isCorrect: false },
          { id: 'd', text: 'Å akseptere', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Cuestionar» betyr å stille spørsmål ved eller sette spørsmålstegn ved noe — altså å være kritisk til noe man tidligere har tatt for gitt.',
      },
    },
    {
      id: 'spansk-2-14-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:
- Begreper knyttet til interkulturell forståelse: **la comprensión intercultural**, **los estereotipos**, **los prejuicios**
- Hvorfor stereotypier og fordommer er problematiske
- Kulturelle forskjeller i kommunikasjon mellom Norge og spansktalende land
- Strategier for å utvikle interkulturell kompetanse
- Å diskutere og argumentere rundt kulturelle temaer på spansk`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'La comprensión intercultural', definition: 'Interkulturell forståelse' },
    { term: 'Los estereotipos', definition: 'Stereotypier — forenklede forestillinger om en gruppe' },
    { term: 'Los prejuicios', definition: 'Fordommer — negative holdninger basert på stereotypier' },
    { term: 'La diversidad cultural', definition: 'Kulturelt mangfold' },
    { term: 'La comunicación intercultural', definition: 'Interkulturell kommunikasjon' },
    { term: 'Cuestionar', definition: 'Å stille spørsmål ved, sette spørsmålstegn ved' },
    { term: 'El respeto mutuo', definition: 'Gjensidig respekt' },
  ],
};

// ============================================================================
// KAPITTEL 15.1 — Escritura creativa
// ============================================================================

export const CHAPTER_SPANSK_2_15_1: TextbookChapter = {
  id: 'spansk-2-15-1',
  courseId: 'spansk-2',
  chapterNumber: '15.1',
  title: 'Escritura creativa',
  subtitle: 'Kreativ skriving',
  description: 'I dette kapittelet lærer du om kreativ skriving på spansk: noveller, dikt og bruk av stilistiske virkemidler. Du utvikler evnen til å skrive kreativt og uttrykksfullt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kjenne til ulike former for kreativ skriving på spansk',
    'Forstå og bruke stilistiske virkemidler som metafor, sammenligning og personifikasjon',
    'Kunne skrive korte kreative tekster som noveller og dikt på spansk',
  ],
  content: [
    {
      id: 'spansk-2-15-1-intro',
      type: 'text',
      content: `## Escritura creativa — Kreativ skriving

Kreativ skriving er en fantastisk måte å utvikle språkferdigheter på. Når du skriver kreativt, bruker du språket fritt og utforsker nye uttrykksformer. I den spansktalende verden har kreativ skriving en sterk tradisjon — fra García Márquez' magiske realisme til Pablo Nerudas poesi.

I dette kapittelet lærer du grunnleggende teknikker for kreativ skriving: hvordan du bygger opp en kort fortelling (*un cuento*), skriver et dikt (*un poema*) og bruker stilistiske virkemidler (*recursos estilísticos*) for å gjøre teksten din mer levende.`,
    },
    {
      id: 'spansk-2-15-1-def-1',
      type: 'definition',
      title: 'El cuento — Novellen/fortellingen',
      content: `**El cuento** betyr novelle eller kort fortelling. En god novelle har en tydelig struktur:

- **El planteamiento** (innledningen) — presenterer karakterer og setting
- **El nudo** (konflikten/midtdelen) — handlingen utvikler seg, et problem oppstår
- **El desenlace** (avslutningen) — konflikten løses

Eksempel: *El cuento de García Márquez «Un señor muy viejo con unas alas enormes» es un ejemplo perfecto de realismo mágico.*`,
    },
    {
      id: 'spansk-2-15-1-def-2',
      type: 'definition',
      title: 'Los recursos estilísticos — Stilistiske virkemidler',
      content: `**Los recursos estilísticos** er stilistiske virkemidler — teknikker forfattere bruker for å gjøre teksten mer uttryksfull:

- **La metáfora** (metafor): *Sus ojos son dos estrellas.* (Øynene hennes er to stjerner.)
- **El símil / la comparación** (sammenligning): *Es fuerte como un toro.* (Han er sterk som en okse.)
- **La personificación** (personifikasjon): *El viento susurraba entre los árboles.* (Vinden hvisket mellom trærne.)
- **La hipérbole** (hyperbol/overdrivelse): *Te lo he dicho un millón de veces.* (Jeg har sagt det en million ganger.)
- **La aliteración** (allitterasjon): *Tres tristes tigres tragaban trigo.* (Tre triste tigre svelget hvete.)`,
    },
    {
      id: 'spansk-2-15-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Å skrive begynnelsen av en novelle',
      problem: `Skriv en innledning til en kort novelle som presenterer en karakter og en setting.`,
      solution: `*Era una noche oscura y lluviosa cuando María llegó al pueblo abandonado. Las calles estaban vacías y las ventanas de las casas parecían ojos negros que la observaban en silencio. Llevaba una maleta vieja y un secreto que pesaba más que todo su equipaje. Había viajado durante tres días para llegar allí, al lugar donde todo había comenzado veinte años atrás.*

Analyse av innledningen:
- **Karakteren**: María — en reisende kvinne med en hemmelighet
- **Settingen**: En forlatt landsby en mørk og regnfull natt
- **Virkemidler brukt**: Personifikasjon (*las ventanas parecían ojos*), metafor (*un secreto que pesaba*)
- **Spenning**: Vi lurer på hva hemmeligheten er og hva som skjedde for tjue år siden`,
    },
    {
      id: 'spansk-2-15-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket stilistisk virkemiddel brukes i setningen «Sus ojos son dos estrellas»?',
        options: [
          { id: 'a', text: 'El símil (sammenligning)', isCorrect: false },
          { id: 'b', text: 'La metáfora (metafor)', isCorrect: true },
          { id: 'c', text: 'La personificación (personifikasjon)', isCorrect: false },
          { id: 'd', text: 'La hipérbole (hyperbol)', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Det er en metafor fordi øynene sammenlignes direkte med stjerner uten bruk av «como» (som). Hadde det stått «Sus ojos son como estrellas», ville det vært et símil.',
      },
    },
    {
      id: 'spansk-2-15-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva heter de tre delene av en novelle (cuento) sin struktur?',
        options: [
          { id: 'a', text: 'Introducción, desarrollo, conclusión', isCorrect: false },
          { id: 'b', text: 'Planteamiento, nudo, desenlace', isCorrect: true },
          { id: 'c', text: 'Inicio, conflicto, final', isCorrect: false },
          { id: 'd', text: 'Presentación, acción, resolución', isCorrect: false },
        ],
        solution: 'Riktig svar er b). De tradisjonelle betegnelsene for en novellestruktur er: el planteamiento (innledning), el nudo (konflikten/midtdelen) og el desenlace (avslutningen/oppløsningen).',
      },
    },
    {
      id: 'spansk-2-15-1-def-3',
      type: 'definition',
      title: 'El poema — Diktet',
      content: `**El poema** betyr diktet. Et dikt kan ha rim (*la rima*) eller være fritt (*verso libre*). Viktige begreper:

- **El verso** — en verselinje
- **La estrofa** — en strofe (gruppe av verselinjer)
- **La rima** — rim
- **El ritmo** — rytmen

Eksempel på et kort dikt:
*Caminante, no hay camino,*
*se hace camino al andar.*
— Antonio Machado

(Vandrer, det finnes ingen vei, veien skapes mens du går.)`,
    },
    {
      id: 'spansk-2-15-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser stilistiske virkemidler i følgende setninger.',
        subTasks: [
          { label: 'a', task: '«El mar rugía furioso contra las rocas.» Hvilket virkemiddel brukes her?', solution: 'Personifikasjon (la personificación) — havet «brølte» som om det var et dyr. Havet tillegges menneskelige/dyriske egenskaper.' },
          { label: 'b', task: '«Era más lento que una tortuga.» Hvilket virkemiddel brukes her?', solution: 'Sammenligning/símil (la comparación) — personen sammenlignes med en skilpadde ved hjelp av «más... que». Det er også en hyperbol fordi det er en overdrivelse.' },
          { label: 'c', task: '«La ciudad dormía bajo un manto de estrellas.» Nevn to virkemidler som brukes.', solution: 'Personifikasjon — byen «sov» (la ciudad dormía). Metafor — stjernene beskrives som et teppe (un manto de estrellas).' },
        ],
        solution: 'Se deloppgavene over for løsningsforslag.',
      },
    },
    {
      id: 'spansk-2-15-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort novelle (10-15 setninger) på spansk. Novellen skal ha en tydelig innledning (planteamiento), midtdel (nudo) og avslutning (desenlace). Bruk minst to stilistiske virkemidler.',
        solution: 'Eksempel: *Pablo caminaba solo por la playa cuando vio algo brillante en la arena. Era una botella con un mensaje dentro. Con manos temblorosas, abrió la botella y sacó un papel amarillento. El mensaje decía: «Si encuentras esto, ven al faro a medianoche.» Pablo sintió que el corazón le latía como un tambor. Esa noche, cuando la luna era un ojo plateado en el cielo, caminó hacia el faro viejo. La puerta estaba abierta. Subió las escaleras oscuras hasta llegar arriba. Allí encontró a una anciana que sonreía. «Llevo veinte años esperándote», dijo ella. «Soy tu abuela.» Pablo no lo podía creer. Las lágrimas corrían por sus mejillas como ríos de emoción. Esa noche, encontró algo más valioso que un tesoro: su familia.*\n\nVirkemidler brukt: símil (como un tambor, como ríos), metafor (la luna era un ojo plateado).',
      },
    },
    {
      id: 'spansk-2-15-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et kort dikt (4-6 verselinjer) på spansk om et selvvalgt tema. Det trenger ikke rime, men prøv å bruke minst ett stilistisk virkemiddel.',
        solution: 'Eksempel: *El otoño pinta las hojas de oro, / el viento canta canciones tristes, / los árboles se desnudan poco a poco / y la tierra se prepara para dormir. / En el silencio del bosque, / la naturaleza suspira.*\n\nVirkemidler: personifikasjon (el otoño pinta, el viento canta, la naturaleza suspira), metafor (hojas de oro).',
      },
    },
    {
      id: 'spansk-2-15-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:
- Strukturen i en novelle: **el planteamiento**, **el nudo**, **el desenlace**
- Viktige stilistiske virkemidler: **la metáfora**, **el símil**, **la personificación**, **la hipérbole**, **la aliteración**
- Grunnleggende begreper om dikt: **el poema**, **el verso**, **la estrofa**, **la rima**
- Å skrive kreative tekster som noveller og dikt på spansk`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'El cuento', definition: 'Novellen, kort fortelling' },
    { term: 'El planteamiento', definition: 'Innledningen i en fortelling' },
    { term: 'El nudo', definition: 'Konflikten/midtdelen i en fortelling' },
    { term: 'El desenlace', definition: 'Avslutningen/oppløsningen i en fortelling' },
    { term: 'La metáfora', definition: 'Metafor — direkte sammenligning uten «como»' },
    { term: 'El símil', definition: 'Sammenligning — bruker «como» (som)' },
    { term: 'La personificación', definition: 'Personifikasjon — gi menneskelige egenskaper til noe ikke-menneskelig' },
    { term: 'El poema', definition: 'Diktet' },
  ],
};

// ============================================================================
// KAPITTEL 15.2 — Textos formales
// ============================================================================

export const CHAPTER_SPANSK_2_15_2: TextbookChapter = {
  id: 'spansk-2-15-2',
  courseId: 'spansk-2',
  chapterNumber: '15.2',
  title: 'Textos formales',
  subtitle: 'Formelle tekster',
  description: 'I dette kapittelet lærer du å skrive formelle tekster på spansk: søknader, klager og rapporter. Du lærer om formelt register, høflighetsformler og tekststruktur.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kjenne til strukturen og konvensjonene i formelle tekster på spansk',
    'Kunne skrive formelle brev, søknader og klager',
    'Forstå forskjellen mellom formelt og uformelt register',
  ],
  content: [
    {
      id: 'spansk-2-15-2-intro',
      type: 'text',
      content: `## Textos formales — Formelle tekster

I mange situasjoner trenger vi å skrive formelle tekster: en jobbsøknad, en klage til en bedrift eller en formell rapport. Formelle tekster på spansk følger bestemte konvensjoner og bruker et høflig, respektfullt språk.

Den viktigste forskjellen fra uformelle tekster er bruken av **usted/ustedes** i stedet for **tú/vosotros**, samt spesielle høflighetsformler og en tydelig struktur.`,
    },
    {
      id: 'spansk-2-15-2-def-1',
      type: 'definition',
      title: 'El registro formal — Formelt register',
      content: `**El registro formal** betyr formelt register — den språkstilen vi bruker i offisielle og profesjonelle sammenhenger. Kjennetegn:

- Bruk av **usted/ustedes** (De/Dem)
- Høflighetsformler (*fórmulas de cortesía*)
- Fullstendige setninger, ingen forkortelser
- Saklig og nøytralt språk
- Tydelig struktur med innledning, hoveddel og avslutning`,
    },
    {
      id: 'spansk-2-15-2-def-2',
      type: 'definition',
      title: 'Fórmulas de cortesía — Høflighetsformler',
      content: `**Las fórmulas de cortesía** er høflighetsformler som brukes i formelle tekster:

**Innledning (saludo):**
- *Estimado/a señor/a:* — Kjære hr./fru:
- *Muy señor/a mío/a:* — Svært formell åpning
- *A quien corresponda:* — Til rette vedkommende

**Avslutning (despedida):**
- *Atentamente,* — Med vennlig hilsen
- *Le saluda atentamente,* — Jeg hilser Dem vennlig
- *Quedo a su disposición.* — Jeg står til Deres disposisjon
- *En espera de su respuesta,* — I påvente av Deres svar`,
    },
    {
      id: 'spansk-2-15-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Formell jobbsøknad',
      problem: `Hvordan skriver man en formell jobbsøknad (carta de solicitud) på spansk?`,
      solution: `*Madrid, 15 de marzo de 2026*

*Estimada señora Directora:*

*Me dirijo a usted para expresar mi interés en el puesto de profesor de noruego anunciado en su página web. Soy licenciado en Filología Noruega por la Universidad de Oslo y tengo tres años de experiencia en la enseñanza de idiomas.*

*Durante mi carrera profesional, he trabajado como profesor de noruego para extranjeros en Oslo. Considero que mi formación y experiencia me hacen un candidato idóneo para este puesto.*

*Adjunto mi currículum vitae para su consideración. Quedo a su disposición para una entrevista en el momento que le resulte conveniente.*

*Le saluda atentamente,*
*Erik Hansen*

Struktur: Dato → Hilsen → Formål → Kvalifikasjoner → Vedlegg → Avslutning`,
    },
    {
      id: 'spansk-2-15-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken avslutning er mest formell?',
        options: [
          { id: 'a', text: '¡Hasta luego!', isCorrect: false },
          { id: 'b', text: 'Un abrazo,', isCorrect: false },
          { id: 'c', text: 'Atentamente,', isCorrect: true },
          { id: 'd', text: 'Besos,', isCorrect: false },
        ],
        solution: 'Riktig svar er c). «Atentamente» (med vennlig hilsen) er den mest formelle avslutningen. De andre er uformelle: ¡Hasta luego! (ha det!), Un abrazo (en klem), Besos (kyss).',
      },
    },
    {
      id: 'spansk-2-15-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning passer i en formell klage (reclamación)?',
        options: [
          { id: 'a', text: 'Oye, esto es fatal, quiero mi dinero.', isCorrect: false },
          { id: 'b', text: 'Me dirijo a ustedes para presentar una reclamación formal.', isCorrect: true },
          { id: 'c', text: 'Hola, tengo un problema con algo que compré.', isCorrect: false },
          { id: 'd', text: 'Bueno, pues resulta que no funciona lo que compré.', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Me dirijo a ustedes para presentar una reclamación formal» bruker formelt register med «ustedes» og profesjonelt språk. De andre alternativene er for uformelle for en skriftlig klage.',
      },
    },
    {
      id: 'spansk-2-15-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Nyttige uttrykk for formelle tekster',
      problem: `Hvilke uttrykk og konnektorer bruker vi i formelle tekster?`,
      solution: `**For å innlede:**
- *Me dirijo a usted para...* — Jeg henvender meg til Dem for å...
- *El motivo de esta carta es...* — Formålet med dette brevet er...
- *Por medio de la presente...* — Gjennom dette skrivet...

**For å forklare:**
- *En primer lugar... En segundo lugar...* — For det første... For det andre...
- *Asimismo...* — Likeledes...
- *Cabe destacar que...* — Det bør fremheves at...

**For å avslutte:**
- *En conclusión...* — Avslutningsvis...
- *Agradezco de antemano su atención.* — Jeg takker på forhånd for Deres oppmerksomhet.
- *Quedo a la espera de su respuesta.* — Jeg avventer Deres svar.`,
    },
    {
      id: 'spansk-2-15-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Omskriv disse uformelle setningene til formelt register.',
        subTasks: [
          { label: 'a', task: '«Hola, quiero quejarme de un producto.» → Skriv om formelt.', solution: '*Estimado/a señor/a: Me dirijo a usted para presentar una reclamación sobre un producto adquirido en su establecimiento.*' },
          { label: 'b', task: '«Oye, ¿puedo tener el trabajo?» → Skriv om formelt.', solution: '*Le escribo para expresar mi interés en el puesto de trabajo anunciado. ¿Sería posible considerar mi candidatura?*' },
          { label: 'c', task: '«Bueno, eso es todo, adiós.» → Skriv om formelt.', solution: '*Agradezco de antemano su atención. Le saluda atentamente.*' },
        ],
        solution: 'Se deloppgavene over for løsningsforslag.',
      },
    },
    {
      id: 'spansk-2-15-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en formell klage (reclamación) på spansk (8-12 setninger). Du har kjøpt et produkt på nett som ikke fungerer, og du vil ha pengene tilbake. Bruk formelt register og høflighetsformler.',
        solution: 'Eksempel: *Oslo, 20 de febrero de 2026\n\nEstimado/a señor/a:\n\nMe dirijo a ustedes para presentar una reclamación formal sobre un pedido realizado en su tienda en línea. El día 5 de febrero, compré un ordenador portátil (número de pedido: 12345) por un valor de 800 euros. Al recibir el producto el día 10 de febrero, comprobé que la pantalla presentaba un defecto y no se encendía correctamente. En primer lugar, solicito la devolución del importe total del producto. En segundo lugar, les ruego que me envíen una etiqueta de devolución para poder enviar el producto defectuoso. Adjunto una copia del recibo de compra y fotografías del defecto. Agradezco de antemano su atención y quedo a la espera de su respuesta.\n\nAtentamente,\nAnna Olsen*',
      },
    },
    {
      id: 'spansk-2-15-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «Quedo a su disposición» på norsk?',
        options: [
          { id: 'a', text: 'Jeg blir hjemme hos Dem', isCorrect: false },
          { id: 'b', text: 'Jeg står til Deres disposisjon', isCorrect: true },
          { id: 'c', text: 'Jeg forlater Deres kontor', isCorrect: false },
          { id: 'd', text: 'Jeg er uenig med Dem', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Quedo a su disposición» er en formell avslutningsfrase som betyr «Jeg står til Deres disposisjon» — altså at man er tilgjengelig for videre kontakt.',
      },
    },
    {
      id: 'spansk-2-15-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:
- Forskjellen mellom formelt og uformelt register: **el registro formal** vs. **el registro informal**
- Høflighetsformler for innledning og avslutning i formelle tekster
- Strukturen i formelle brev: søknad (*carta de solicitud*) og klage (*reclamación*)
- Nyttige konnektorer for formelle tekster: *en primer lugar*, *asimismo*, *cabe destacar*
- Å omskrive uformelle setninger til formelt register`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'El registro formal', definition: 'Formelt register — språkstil for offisielle sammenhenger' },
    { term: 'Las fórmulas de cortesía', definition: 'Høflighetsformler' },
    { term: 'La carta de solicitud', definition: 'Søknadsbrev' },
    { term: 'La reclamación', definition: 'Klage (formell)' },
    { term: 'Estimado/a', definition: 'Kjære (formell tiltale i brev)' },
    { term: 'Atentamente', definition: 'Med vennlig hilsen' },
    { term: 'Me dirijo a usted', definition: 'Jeg henvender meg til Dem' },
    { term: 'Quedo a su disposición', definition: 'Jeg står til Deres disposisjon' },
  ],
};

// ============================================================================
// KAPITTEL 15.3 — Argumentación y ensayo
// ============================================================================

export const CHAPTER_SPANSK_2_15_3: TextbookChapter = {
  id: 'spansk-2-15-3',
  courseId: 'spansk-2',
  chapterNumber: '15.3',
  title: 'Argumentación y ensayo',
  subtitle: 'Argumentasjon og essayskriving',
  description: 'I dette kapittelet lærer du å bygge opp argumenterende tekster og essays på spansk. Du lærer om teseformulering, argumentstruktur og bruk av konnektorer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Forstå strukturen i en argumenterende tekst og et essay',
    'Kunne formulere en tese og bygge opp argumenter',
    'Bruke konnektorer for å skape sammenheng i argumenterende tekster',
  ],
  content: [
    {
      id: 'spansk-2-15-3-intro',
      type: 'text',
      content: `## Argumentación y ensayo — Argumentasjon og essayskriving

Å kunne argumentere overbevisende er en viktig ferdighet — både i skolen og i livet. En argumenterende tekst har som mål å overbevise leseren om et synspunkt. Et essay (*un ensayo*) er en lengre reflekterende tekst der forfatteren utforsker et tema fra flere sider.

I dette kapittelet lærer du hvordan du bygger opp en argumenterende tekst steg for steg: fra å formulere en tese (*la tesis*) til å presentere argumenter (*los argumentos*) og trekke en konklusjon (*la conclusión*).`,
    },
    {
      id: 'spansk-2-15-3-def-1',
      type: 'definition',
      title: 'El ensayo — Essayet',
      content: `**El ensayo** betyr essay — en reflekterende tekst der forfatteren utforsker et tema. Strukturen er:

1. **La introducción** (innledningen) — presenterer temaet og tesen
2. **El desarrollo** (hoveddelen) — presenterer argumenter for og imot
3. **La conclusión** (konklusjonen) — oppsummerer og gir forfatterens standpunkt

- *Un buen ensayo presenta diferentes perspectivas sobre un tema.* (Et godt essay presenterer ulike perspektiver på et tema.)`,
    },
    {
      id: 'spansk-2-15-3-def-2',
      type: 'definition',
      title: 'La tesis og los argumentos',
      content: `**La tesis** betyr tesen — hovedpåstanden i teksten. **Los argumentos** er begrunnelsene som støtter tesen. **Los contraargumentos** er motargumentene.

- *La tesis debe ser clara y concreta.* (Tesen bør være klar og konkret.)
- *Cada argumento necesita ejemplos o datos que lo respalden.* (Hvert argument trenger eksempler eller data som støtter det.)`,
    },
    {
      id: 'spansk-2-15-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Konnektorer for argumentasjon',
      problem: `Hvilke konnektorer (conectores) bruker vi for å bygge opp en argumenterende tekst?`,
      solution: `**For å innlede argumenter:**
- *En primer lugar...* — For det første...
- *Para empezar...* — For å begynne med...
- *Ante todo...* — Fremfor alt...

**For å legge til argumenter:**
- *Además...* — Dessuten...
- *Asimismo...* — Likeledes...
- *Por otro lado...* — På den annen side...

**For å presentere motargumenter:**
- *Sin embargo...* — Imidlertid...
- *No obstante...* — Ikke desto mindre...
- *Aunque...* — Selv om...

**For å konkludere:**
- *En conclusión...* — Avslutningsvis...
- *En resumen...* — Oppsummert...
- *Por lo tanto...* — Derfor...

**For å uttrykke mening:**
- *En mi opinión...* — Etter min mening...
- *Considero que...* — Jeg anser at...
- *Estoy convencido/a de que...* — Jeg er overbevist om at...`,
    },
    {
      id: 'spansk-2-15-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken konnektor brukes for å introdusere et motargument?',
        options: [
          { id: 'a', text: 'Además', isCorrect: false },
          { id: 'b', text: 'En primer lugar', isCorrect: false },
          { id: 'c', text: 'Sin embargo', isCorrect: true },
          { id: 'd', text: 'Por lo tanto', isCorrect: false },
        ],
        solution: 'Riktig svar er c). «Sin embargo» (imidlertid) brukes for å introdusere et motargument eller en kontrast. «Además» legger til et argument, «en primer lugar» innleder, og «por lo tanto» konkluderer.',
      },
    },
    {
      id: 'spansk-2-15-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er riktig rekkefølge i et essay?',
        options: [
          { id: 'a', text: 'Conclusión → Desarrollo → Introducción', isCorrect: false },
          { id: 'b', text: 'Desarrollo → Introducción → Conclusión', isCorrect: false },
          { id: 'c', text: 'Introducción → Conclusión → Desarrollo', isCorrect: false },
          { id: 'd', text: 'Introducción → Desarrollo → Conclusión', isCorrect: true },
        ],
        solution: 'Riktig svar er d). Et essay følger alltid rekkefølgen: Introducción (innledning med tese) → Desarrollo (hoveddel med argumenter) → Conclusión (konklusjon).',
      },
    },
    {
      id: 'spansk-2-15-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Oppbygging av et argument',
      problem: `Vis hvordan man bygger opp et fullstendig argument med påstand, begrunnelse og eksempel.`,
      solution: `Tema: «¿Deberían los jóvenes participar más en la política?»

**Tese:** *Los jóvenes deberían participar más activamente en la política.*

**Argument 1:**
*En primer lugar, los jóvenes representan el futuro de la sociedad. Las decisiones políticas de hoy afectan directamente a su vida futura. Por ejemplo, las políticas sobre el cambio climático tendrán consecuencias a largo plazo que los jóvenes vivirán.*

**Argument 2:**
*Además, la participación juvenil enriquece el debate político con nuevas perspectivas. Los jóvenes tienen ideas innovadoras sobre tecnología, educación y sostenibilidad.*

**Motargument:**
*Sin embargo, algunos argumentan que los jóvenes no tienen suficiente experiencia para participar en la política. No obstante, la experiencia se adquiere precisamente a través de la participación.*

**Konklusjon:**
*En conclusión, la participación política de los jóvenes es esencial para construir una democracia más representativa y dinámica.*`,
    },
    {
      id: 'spansk-2-15-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktige konnektorer i denne argumenterende teksten.',
        subTasks: [
          { label: 'a', task: 'Fyll inn: «______, las redes sociales conectan a personas de todo el mundo.» (For det første...)', solution: '*En primer lugar*, las redes sociales conectan a personas de todo el mundo.' },
          { label: 'b', task: 'Fyll inn: «______, facilitan el acceso a la información.» (Dessuten...)', solution: '*Además*, facilitan el acceso a la información.' },
          { label: 'c', task: 'Fyll inn: «______, las redes sociales también pueden causar adicción.» (Imidlertid...)', solution: '*Sin embargo*, las redes sociales también pueden causar adicción.' },
          { label: 'd', task: 'Fyll inn: «______, las redes sociales tienen ventajas y desventajas.» (Avslutningsvis...)', solution: '*En conclusión*, las redes sociales tienen ventajas y desventajas.' },
        ],
        solution: 'Se deloppgavene over for løsningsforslag.',
      },
    },
    {
      id: 'spansk-2-15-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv et kort essay (12-16 setninger) på spansk om følgende tema: «¿Es mejor vivir en una ciudad grande o en un pueblo pequeño?» Følg essay-strukturen med innledning, hoveddel (minst to argumenter for hver side) og konklusjon. Bruk konnektorer.',
        solution: 'Eksempel: *Hoy en día, muchas personas se enfrentan a la decisión de vivir en una ciudad grande o en un pueblo pequeño. En mi opinión, ambas opciones tienen ventajas, pero vivir en una ciudad grande ofrece más oportunidades.\n\nEn primer lugar, las ciudades grandes ofrecen más oportunidades de trabajo y educación. Hay universidades, empresas y actividades culturales para todos los gustos. Además, las ciudades tienen mejor acceso a servicios médicos y transporte público.\n\nSin embargo, la vida en un pueblo pequeño también tiene sus ventajas. Por un lado, el ritmo de vida es más tranquilo y hay menos estrés. Por otro lado, la relación entre los vecinos es más cercana y hay un mayor sentido de comunidad.\n\nNo obstante, los pueblos pequeños suelen tener menos servicios y oportunidades profesionales. Muchos jóvenes se ven obligados a emigrar a las ciudades para estudiar o trabajar.\n\nEn conclusión, creo que la decisión depende de las prioridades de cada persona. Para los jóvenes que buscan oportunidades, la ciudad es mejor. Para quienes valoran la tranquilidad, el pueblo es ideal.*',
      },
    },
    {
      id: 'spansk-2-15-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning uttrykker en personlig mening på en formell måte?',
        options: [
          { id: 'a', text: 'Yo creo que está mal.', isCorrect: false },
          { id: 'b', text: 'Considero que esta situación es preocupante.', isCorrect: true },
          { id: 'c', text: 'Pienso que es una tontería.', isCorrect: false },
          { id: 'd', text: 'A mí me parece fatal.', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Considero que esta situación es preocupante» bruker et formelt og saklig språk. De andre alternativene er for uformelle eller for subjektive for en argumenterende tekst.',
      },
    },
    {
      id: 'spansk-2-15-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:
- Strukturen i et essay: **la introducción**, **el desarrollo**, **la conclusión**
- Å formulere en tese (**la tesis**) og bygge opp argumenter (**los argumentos**)
- Viktige konnektorer: *en primer lugar*, *además*, *sin embargo*, *no obstante*, *en conclusión*
- Å presentere motargumenter (**los contraargumentos**)
- Formelle uttrykk for å uttrykke mening: *considero que*, *estoy convencido/a de que*`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'El ensayo', definition: 'Essay — reflekterende tekst om et tema' },
    { term: 'La tesis', definition: 'Tesen — hovedpåstanden i teksten' },
    { term: 'Los argumentos', definition: 'Argumentene — begrunnelsene som støtter tesen' },
    { term: 'Los contraargumentos', definition: 'Motargumentene' },
    { term: 'Los conectores', definition: 'Konnektorer — ord som skaper sammenheng i teksten' },
    { term: 'Sin embargo', definition: 'Imidlertid — konnektor for motargument' },
    { term: 'En conclusión', definition: 'Avslutningsvis — konnektor for konklusjon' },
    { term: 'Considero que', definition: 'Jeg anser at — formelt uttrykk for mening' },
  ],
};

// ============================================================================
// KAPITTEL 15.4 — Resumen y análisis de textos
// ============================================================================

export const CHAPTER_SPANSK_2_15_4: TextbookChapter = {
  id: 'spansk-2-15-4',
  courseId: 'spansk-2',
  chapterNumber: '15.4',
  title: 'Resumen y análisis de textos',
  subtitle: 'Tekstsammendrag og tekstanalyse',
  description: 'I dette kapittelet lærer du å skrive sammendrag og analysere tekster på spansk. Du utvikler evnen til å identifisere hovedideer, skille mellom viktig og uviktig informasjon, og presentere analysen din på en strukturert måte.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Kunne skrive et godt sammendrag av en tekst på spansk',
    'Forstå og bruke teknikker for tekstanalyse',
    'Kunne identifisere hovedideer, tema og stilistiske trekk i en tekst',
  ],
  content: [
    {
      id: 'spansk-2-15-4-intro',
      type: 'text',
      content: `## Resumen y análisis de textos — Tekstsammendrag og tekstanalyse

Å kunne oppsummere og analysere tekster er en grunnleggende akademisk ferdighet. Et sammendrag (*un resumen*) gjengir hovedideene i en tekst med egne ord og i en kortere form. En tekstanalyse (*un análisis de texto*) går dypere og undersøker hvordan teksten er bygget opp, hvilke virkemidler den bruker og hva den formidler.

I dette kapittelet lærer du praktiske teknikker for begge deler.`,
    },
    {
      id: 'spansk-2-15-4-def-1',
      type: 'definition',
      title: 'El resumen — Sammendraget',
      content: `**El resumen** betyr sammendrag — en kortere versjon av en tekst som gjengir hovedideene. Regler for et godt sammendrag:

1. **Bruk egne ord** — ikke kopier direkte fra teksten (*no copies directamente del texto*)
2. **Inkluder bare hovedideene** — utelat detaljer (*incluye solo las ideas principales*)
3. **Vær objektiv** — ikke legg til egne meninger (*sé objetivo*)
4. **Skriv i tredjeperson** — bruk *el autor dice/señala/explica* (forfatteren sier/påpeker/forklarer)
5. **Hold det kort** — vanligvis 1/3 av originalteksten`,
    },
    {
      id: 'spansk-2-15-4-def-2',
      type: 'definition',
      title: 'El análisis de texto — Tekstanalysen',
      content: `**El análisis de texto** er en systematisk undersøkelse av en tekst. En god analyse svarer på:

- **¿Qué dice el texto?** (Hva sier teksten?) — Innhold og tema
- **¿Cómo lo dice?** (Hvordan sier den det?) — Struktur, stil, virkemidler
- **¿Por qué lo dice?** (Hvorfor sier den det?) — Formål og intensjon
- **¿A quién se dirige?** (Hvem henvender den seg til?) — Målgruppe`,
    },
    {
      id: 'spansk-2-15-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Å skrive et sammendrag',
      problem: `Les denne teksten og se hvordan vi lager et sammendrag:

*Original:* «La educación es la herramienta más poderosa para cambiar el mundo. En muchos países en desarrollo, millones de niños no tienen acceso a la educación básica. Las niñas son especialmente vulnerables, ya que en algunas culturas se les niega el derecho a ir a la escuela. Organizaciones como UNICEF trabajan para cambiar esta situación, construyendo escuelas, formando profesores y proporcionando material escolar. Gracias a estos esfuerzos, el número de niños sin escolarizar ha disminuido en las últimas décadas, pero todavía queda mucho por hacer.»`,
      solution: `**Sammendrag:**
*El texto trata sobre la importancia de la educación y los desafíos que existen en los países en desarrollo. El autor señala que muchos niños, especialmente las niñas, no tienen acceso a la educación básica. Explica que organizaciones como UNICEF trabajan para mejorar la situación. Concluye que se ha avanzado, pero que aún quedan retos importantes.*

**Teknikk brukt:**
- Hovedideene er gjengitt med egne ord
- Detaljer (som «construyendo escuelas, formando profesores») er utelatt
- Tredjeperson brukes: *el autor señala*, *explica*, *concluye*
- Sammendraget er ca. 1/3 av originalen`,
    },
    {
      id: 'spansk-2-15-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør et godt sammendrag IKKE inneholde?',
        options: [
          { id: 'a', text: 'Hovedideene fra teksten', isCorrect: false },
          { id: 'b', text: 'Dine egne meninger og vurderinger', isCorrect: true },
          { id: 'c', text: 'Teksten reformulert med egne ord', isCorrect: false },
          { id: 'd', text: 'Informasjon om hva forfatteren sier', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Et sammendrag skal være objektivt og gjengi hovedideene fra teksten uten å legge til egne meninger. Meninger hører hjemme i en kommentar eller analyse, ikke i et sammendrag.',
      },
    },
    {
      id: 'spansk-2-15-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning passer best for å introdusere et sammendrag?',
        options: [
          { id: 'a', text: 'Yo pienso que el texto es muy interesante.', isCorrect: false },
          { id: 'b', text: 'El texto trata sobre los efectos del cambio climático.', isCorrect: true },
          { id: 'c', text: 'Voy a copiar las partes más importantes del texto.', isCorrect: false },
          { id: 'd', text: 'Este texto me gusta mucho porque habla de la naturaleza.', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «El texto trata sobre...» (Teksten handler om...) er en objektiv og passende åpning for et sammendrag. De andre alternativene er subjektive eller feil tilnærming.',
      },
    },
    {
      id: 'spansk-2-15-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Nyttige uttrykk for sammendrag og analyse',
      problem: `Hvilke uttrykk bruker vi i sammendrag og analyser?`,
      solution: `**For sammendrag (el resumen):**
- *El texto trata sobre...* — Teksten handler om...
- *El autor/la autora señala que...* — Forfatteren påpeker at...
- *Según el texto...* — Ifølge teksten...
- *El autor/la autora concluye que...* — Forfatteren konkluderer med at...
- *En el texto se menciona que...* — I teksten nevnes det at...

**For analyse (el análisis):**
- *El tema principal es...* — Hovedtemaet er...
- *El tono del texto es...* — Tonen i teksten er...
- *El autor utiliza recursos como...* — Forfatteren bruker virkemidler som...
- *El propósito del texto es...* — Formålet med teksten er...
- *El texto se dirige a...* — Teksten henvender seg til...
- *Se puede observar que...* — Man kan observere at...`,
    },
    {
      id: 'spansk-2-15-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les denne korte teksten og gjør oppgavene under.',
        subTasks: [
          { label: 'a', task: 'Skriv et sammendrag (3-4 setninger) på spansk av teksten: «Las redes sociales han transformado la manera en que nos comunicamos. Millones de personas usan plataformas como Instagram, TikTok y X para compartir sus vidas y opiniones. Sin embargo, el uso excesivo de las redes puede causar problemas como la adicción, la ansiedad y el ciberacoso. Los expertos recomiendan limitar el tiempo que pasamos en las redes y ser conscientes de los riesgos.»', solution: '*El texto trata sobre el impacto de las redes sociales en la comunicación. La autora señala que, aunque son muy populares, pueden causar problemas como la adicción y la ansiedad. Concluye que los expertos recomiendan limitar su uso.*' },
          { label: 'b', task: 'Identifiser hovedtemaet (el tema principal) i teksten. Skriv på spansk.', solution: '*El tema principal del texto es el impacto de las redes sociales en la sociedad, tanto sus ventajas como sus desventajas.*' },
          { label: 'c', task: 'Hvem er målgruppen for teksten, tror du? Svar på spansk.', solution: '*El texto probablemente se dirige a un público general, especialmente a los jóvenes que son los principales usuarios de las redes sociales.*' },
        ],
        solution: 'Se deloppgavene over for løsningsforslag.',
      },
    },
    {
      id: 'spansk-2-15-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekstanalyse (8-10 setninger) på spansk av teksten fra oppgave 3. Kommenter tema, struktur, målgruppe og formål. Bruk uttrykk fra eksempel 2.',
        solution: 'Eksempel: *El texto trata sobre el impacto de las redes sociales en la sociedad moderna. El tema principal es la relación entre las redes sociales y la salud mental. El tono del texto es informativo y objetivo. La estructura sigue un modelo clásico: primero presenta el fenómeno (las redes sociales), luego señala los problemas (adicción, ansiedad, ciberacoso) y finalmente ofrece una recomendación. El autor utiliza datos concretos, como mencionar plataformas específicas, para hacer el texto más cercano al lector. El propósito del texto es informar y advertir sobre los riesgos del uso excesivo de las redes. El texto se dirige probablemente a un público joven. Se puede observar que el autor mantiene un equilibrio entre los aspectos positivos y negativos de las redes sociales.*',
      },
    },
    {
      id: 'spansk-2-15-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-15-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «El propósito del texto es informar y concienciar»?',
        options: [
          { id: 'a', text: 'Tekstens forslag er å informere og bevisstgjøre', isCorrect: false },
          { id: 'b', text: 'Tekstens formål er å informere og bevisstgjøre', isCorrect: true },
          { id: 'c', text: 'Tekstens problem er å informere og bevisstgjøre', isCorrect: false },
          { id: 'd', text: 'Tekstens prosess er å informere og bevisstgjøre', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «El propósito» betyr formålet. Setningen betyr: «Tekstens formål er å informere og bevisstgjøre.»',
      },
    },
    {
      id: 'spansk-2-15-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:
- Regler for et godt sammendrag: bruk egne ord, vær objektiv, inkluder bare hovedideer
- Å bruke uttrykk som *el texto trata sobre*, *el autor señala que*, *según el texto*
- Analysebegreper: **el tema**, **el tono**, **el propósito**, **la estructura**
- Forskjellen mellom sammendrag (objektiv gjengivelse) og analyse (dypere undersøkelse)
- Å stille analytiske spørsmål: hva, hvordan, hvorfor og til hvem`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'El resumen', definition: 'Sammendraget — kort gjengivelse av hovedideene' },
    { term: 'El análisis de texto', definition: 'Tekstanalysen — systematisk undersøkelse av en tekst' },
    { term: 'El tema principal', definition: 'Hovedtemaet i en tekst' },
    { term: 'El propósito', definition: 'Formålet med teksten' },
    { term: 'El tono', definition: 'Tonen i teksten (informativ, kritisk, humoristisk osv.)' },
    { term: 'El/la autor/a señala', definition: 'Forfatteren påpeker' },
    { term: 'Según el texto', definition: 'Ifølge teksten' },
    { term: 'Se puede observar que', definition: 'Man kan observere at' },
  ],
};

// ============================================================================
// KAPITTEL 16.1 — Repaso de gramática
// ============================================================================

export const CHAPTER_SPANSK_2_16_1: TextbookChapter = {
  id: 'spansk-2-16-1',
  courseId: 'spansk-2',
  chapterNumber: '16.1',
  title: 'Repaso de gramática',
  subtitle: 'Grammatikkrepetisjon',
  description: 'I dette kapittelet repeterer vi den viktigste grammatikken fra Spansk Nivå 2: verbtider (pretérito perfecto, imperfecto, subjuntivo, condicional, futuro), pronomen, passiv og andre sentrale strukturer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Repetere og beherske de viktigste verbtidene fra Spansk 2',
    'Kunne bruke subjuntivo, condicional og futuro korrekt',
    'Beherske pronomen, passiv og andre grammatiske strukturer',
  ],
  content: [
    {
      id: 'spansk-2-16-1-intro',
      type: 'text',
      content: `## Repaso de gramática — Grammatikkrepetisjon

I løpet av Spansk Nivå 2 har du lært mange nye grammatiske strukturer. Dette kapittelet gir deg en systematisk gjennomgang av de viktigste emnene: verbtider, subjuntivo, pronomen og passiv. Bruk dette som et oppslagsverk og som forberedelse til eksamen.

Det er viktig å ikke bare huske reglene, men også kunne *bruke* dem i kontekst — i skriving, i samtale og i tekstforståelse.`,
    },
    {
      id: 'spansk-2-16-1-def-1',
      type: 'definition',
      title: 'Pretérito perfecto vs. pretérito imperfecto',
      content: `**El pretérito perfecto** (sammensatt fortid) brukes om handlinger som har skjedd nylig eller som har relevans for nåtiden. Det dannes med *haber* + partisipper.

- *He viajado a México.* (Jeg har reist til Mexico.)

**El pretérito imperfecto** brukes om gjentatte handlinger i fortiden, beskrivelser og bakgrunn.

- *Cuando era niño, jugaba en el parque.* (Da jeg var barn, lekte jeg i parken.)

| Pretérito perfecto | Pretérito imperfecto |
|---|---|
| he hablado | hablaba |
| has comido | comías |
| ha vivido | vivía |
| hemos dicho | decíamos |
| habéis hecho | hacíais |
| han ido | iban |`,
    },
    {
      id: 'spansk-2-16-1-def-2',
      type: 'definition',
      title: 'El subjuntivo',
      content: `**El subjuntivo** (konjunktiv) brukes for å uttrykke ønsker, tvil, følelser, anbefalinger og uvirkelighet. Det utløses av bestemte uttrykk og konjunksjoner.

Vanlige utløsere:
- *Quiero que* + subjuntivo (Jeg vil at…)
- *Es importante que* + subjuntivo (Det er viktig at…)
- *Dudo que* + subjuntivo (Jeg tviler på at…)
- *Cuando* + subjuntivo (Når… om fremtiden)

| Infinitiv | Subjuntivo (yo) | Subjuntivo (tú) | Subjuntivo (él) |
|---|---|---|---|
| hablar | hable | hables | hable |
| comer | coma | comas | coma |
| vivir | viva | vivas | viva |
| tener | tenga | tengas | tenga |
| ir | vaya | vayas | vaya |`,
    },
    {
      id: 'spansk-2-16-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Condicional og futuro',
      problem: `Gjennomgå dannelsen og bruken av condicional og futuro simple.`,
      solution: `**El futuro simple** brukes om fremtidige handlinger og antagelser:
- *Mañana iré al cine.* (I morgen skal jeg på kino.)
- *Serán las ocho.* (Det er nok rundt åtte.)

**El condicional** brukes for høflige forespørsler, hypotetiske situasjoner og etter *si* + imperfecto de subjuntivo:
- *¿Podría ayudarme?* (Kunne du hjelpe meg?)
- *Si tuviera dinero, viajaría por el mundo.* (Hvis jeg hadde penger, ville jeg reist rundt i verden.)

| Infinitiv | Futuro (yo) | Condicional (yo) |
|---|---|---|
| hablar | hablaré | hablaría |
| comer | comeré | comería |
| vivir | viviré | viviría |
| tener | tendré | tendría |
| poder | podré | podría |
| salir | saldré | saldría |`,
    },
    {
      id: 'spansk-2-16-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning bruker pretérito imperfecto korrekt?',
        options: [
          { id: 'a', text: 'Ayer he comido paella.', isCorrect: false },
          { id: 'b', text: 'Cuando era joven, vivía en Barcelona.', isCorrect: true },
          { id: 'c', text: 'Mañana iré al médico.', isCorrect: false },
          { id: 'd', text: 'Quiero que vengas a la fiesta.', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Pretérito imperfecto brukes for å beskrive gjentatte handlinger eller tilstander i fortiden. «Cuando era joven, vivía en Barcelona» beskriver en tilstand i fortiden. Alternativ a) blander tider (ayer + pretérito perfecto er feil i standard spansk), c) er futuro, d) er subjuntivo.',
      },
    },
    {
      id: 'spansk-2-16-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Fyll inn riktig form: «Es importante que tú _____ (estudiar) para el examen.»',
        options: [
          { id: 'a', text: 'estudias', isCorrect: false },
          { id: 'b', text: 'estudies', isCorrect: true },
          { id: 'c', text: 'estudiarás', isCorrect: false },
          { id: 'd', text: 'estudiarías', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Uttrykket «es importante que» krever subjuntivo. Subjuntivo av «estudiar» for «tú» er «estudies». Alternativ a) er indikativ, c) er futuro og d) er condicional.',
      },
    },
    {
      id: 'spansk-2-16-1-def-3',
      type: 'definition',
      title: 'Los pronombres og la voz pasiva',
      content: `**Pronomen** — Spansk har flere typer pronomen du må beherske:

| Type | Eksempler |
|---|---|
| Direkte objekt | me, te, lo/la, nos, os, los/las |
| Indirekte objekt | me, te, le, nos, os, les |
| Refleksive | me, te, se, nos, os, se |
| Relative | que, quien, el/la cual, donde |

**La voz pasiva** (passiv) dannes med *ser* + partisipp:
- *El libro fue escrito por Cervantes.* (Boken ble skrevet av Cervantes.)

**La pasiva refleja** (refleksiv passiv) med *se*:
- *Se habla español en 20 países.* (Spansk snakkes i 20 land.)`,
    },
    {
      id: 'spansk-2-16-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Pronomenplassering',
      problem: `Hvor plasseres pronomen i spanske setninger?`,
      solution: `Pronomen plasseres **foran** det bøyde verbet, men kan festes **bak** infinitiv, gerundium og bekreftende imperativ:

- *Lo veo.* (Jeg ser ham/den.) — foran bøyd verb
- *Quiero verlo.* / *Lo quiero ver.* (Jeg vil se ham/den.) — begge er korrekt
- *Estoy haciéndolo.* / *Lo estoy haciendo.* (Jeg holder på å gjøre det.) — begge er korrekt
- *¡Dímelo!* (Si det til meg!) — bak imperativ

Når to pronomen kombineres, kommer indirekte objekt *før* direkte objekt:
- *Me lo dio.* (Han/hun ga det til meg.)
- *Se lo dije.* (Jeg sa det til ham/henne.) — «le lo» blir «se lo»`,
    },
    {
      id: 'spansk-2-16-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning inneholder riktig bruk av passiv (voz pasiva)?',
        options: [
          { id: 'a', text: 'La casa fue construida por mi abuelo.', isCorrect: true },
          { id: 'b', text: 'La casa era construida por mi abuelo.', isCorrect: false },
          { id: 'c', text: 'La casa ha construido por mi abuelo.', isCorrect: false },
          { id: 'd', text: 'La casa siendo construida por mi abuelo.', isCorrect: false },
        ],
        solution: 'Riktig svar er a). Passiv dannes med «ser» + partisipp. «Fue construida» (ble bygget) er korrekt passiv i pretérito indefinido. Alternativ b) bruker «era» (imperfecto) som ville indikert en pågående handling, men er stilistisk uvanlig, c) mangler «sido» og d) er ikke grammatisk.',
      },
    },
    {
      id: 'spansk-2-16-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi repetert de viktigste grammatiske strukturene fra Spansk 2:

- **Pretérito perfecto** for handlinger med relevans for nåtiden
- **Pretérito imperfecto** for beskrivelser og gjentatte handlinger i fortiden
- **Subjuntivo** for ønsker, tvil og følelser
- **Futuro** for fremtid og antagelser
- **Condicional** for høflighet og hypotetiske situasjoner
- **Pronomen** — direkte, indirekte, refleksive og relative
- **Passiv** — både med *ser* og refleksiv passiv med *se*

Øv jevnlig på å bruke disse strukturene i egne setninger og tekster.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'spansk-2-16-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om disse setningene til passiv form (voz pasiva):\n\n1. Gabriel García Márquez escribió «Cien años de soledad».\n2. Los estudiantes organizaron la fiesta.\n3. Mi madre preparó la cena.',
        solution: '1. «Cien años de soledad» fue escrito por Gabriel García Márquez.\n2. La fiesta fue organizada por los estudiantes.\n3. La cena fue preparada por mi madre.\n\nLegg merke til at partisippet bøyes i kjønn og tall med subjektet: escrito (hankjønn), organizada (hunkjønn), preparada (hunkjønn).',
      },
    },
    {
      id: 'spansk-2-16-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig verbform (subjuntivo, futuro, condicional eller indikativ):\n\n1. Si yo _____ (tener) más tiempo, _____ (viajar) a Sudamérica.\n2. Cuando _____ (llegar) a casa, te _____ (llamar).\n3. Es necesario que nosotros _____ (practicar) más.\n4. Mañana _____ (hacer) buen tiempo.',
        solution: '1. Si yo *tuviera* más tiempo, *viajaría* a Sudamérica. (Imperfecto de subjuntivo + condicional for hypotetisk situasjon.)\n2. Cuando *llegue* a casa, te *llamaré*. (Subjuntivo etter «cuando» om fremtiden + futuro i hovedsetningen.)\n3. Es necesario que nosotros *practiquemos* más. (Subjuntivo etter «es necesario que».)\n4. Mañana *hará* buen tiempo. (Futuro simple for fremtidig hendelse.)',
      },
    },
    {
      id: 'spansk-2-16-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'avansert',
        task: 'Skriv en kort tekst (6-8 setninger) om hva du ville gjort hvis du vant en reise til et spansktalende land. Bruk minst tre ulike verbtider: condicional, subjuntivo og futuro.',
        solution: 'Eksempelsvar:\n\n*Si ganara un viaje a un país hispanohablante, elegiría ir a Colombia. Me gustaría visitar Cartagena porque es una ciudad con mucha historia. Cuando llegue allí, visitaré el centro histórico y probaré la comida típica. Es posible que también vaya a Medellín. Si tuviera suficiente tiempo, iría a la selva amazónica. Será una experiencia inolvidable. Espero que algún día este sueño se haga realidad.*\n\nVerbtider brukt: condicional (elegiría, gustaría, iría), subjuntivo (ganara, llegue, vaya, tuviera, se haga), futuro (visitaré, probaré, será).',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'El pretérito perfecto', definition: 'Sammensatt fortid (har + partisipp), brukes om handlinger med relevans for nåtiden' },
    { term: 'El pretérito imperfecto', definition: 'Imperfektum, brukes for beskrivelser og gjentatte handlinger i fortiden' },
    { term: 'El subjuntivo', definition: 'Konjunktiv, brukes for ønsker, tvil, følelser og uvirkelighet' },
    { term: 'El condicional', definition: 'Kondisjonalis, brukes for høflighet og hypotetiske situasjoner' },
    { term: 'El futuro simple', definition: 'Enkel fremtid, brukes for fremtidige handlinger og antagelser' },
    { term: 'La voz pasiva', definition: 'Passiv form, dannes med ser + partisipp' },
    { term: 'El pronombre', definition: 'Pronomen — erstatningsord for substantiv' },
    { term: 'La pasiva refleja', definition: 'Refleksiv passiv med «se», vanlig i spansk' },
  ],
};

// ============================================================================
// KAPITTEL 16.2 — Repaso de vocabulario
// ============================================================================

export const CHAPTER_SPANSK_2_16_2: TextbookChapter = {
  id: 'spansk-2-16-2',
  courseId: 'spansk-2',
  chapterNumber: '16.2',
  title: 'Repaso de vocabulario',
  subtitle: 'Vokabularrepetisjon',
  description: 'I dette kapittelet repeterer vi tematisk ordforråd fra alle kapitlene i Spansk 2. Vi gjennomgår ordfamilier, falske venner og nøkkeluttrykk innen ulike emner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Repetere og utvide ordforrådet fra alle temaene i Spansk 2',
    'Gjenkjenne og unngå falske venner mellom spansk og norsk/engelsk',
    'Kunne bruke tematisk vokabular aktivt i ulike kontekster',
  ],
  content: [
    {
      id: 'spansk-2-16-2-intro',
      type: 'text',
      content: `## Repaso de vocabulario — Vokabularrepetisjon

Et rikt ordforråd er nøkkelen til god kommunikasjon på spansk. I dette kapittelet samler vi de viktigste ordene og uttrykkene fra Spansk 2, organisert etter tema. Vi ser også på ordfamilier (*las familias de palabras*) og falske venner (*los falsos amigos*) — ord som ser like ut på spansk og norsk/engelsk, men betyr noe helt annet.

Bruk oversiktene aktivt: les gjennom, dekk til den norske kolonnen, og test deg selv!`,
    },
    {
      id: 'spansk-2-16-2-def-1',
      type: 'definition',
      title: 'Las familias de palabras — Ordfamilier',
      content: `**Las familias de palabras** (ordfamilier) er grupper av ord som deler samme rot. Å kjenne ordfamilier hjelper deg å forstå ukjente ord:

| Substantiv | Verb | Adjektiv |
|---|---|---|
| *la educación* (utdanning) | *educar* (utdanne) | *educativo/a* (utdanningsmessig) |
| *el trabajo* (arbeid) | *trabajar* (arbeide) | *trabajador/a* (arbeidsom) |
| *la migración* (migrasjon) | *migrar* (migrere) | *migratorio/a* (migrasjons-) |
| *el desarrollo* (utvikling) | *desarrollar* (utvikle) | *desarrollado/a* (utviklet) |
| *la igualdad* (likestilling) | *igualar* (likestille) | *igual* (lik) |
| *el conocimiento* (kunnskap) | *conocer* (kjenne) | *conocido/a* (kjent) |`,
    },
    {
      id: 'spansk-2-16-2-def-2',
      type: 'definition',
      title: 'Los falsos amigos — Falske venner',
      content: `**Los falsos amigos** er ord som ser ut som norske eller engelske ord, men som har en annen betydning på spansk. Her er de vanligste:

| Spansk | Ser ut som | Betyr faktisk |
|---|---|---|
| *embarazada* | embarrassed | gravid |
| *constipado/a* | constipated | forkjølet |
| *la carpeta* | carpet | mappe |
| *actualmente* | actually | for tiden |
| *sensible* | sensible | følsom |
| *la librería* | library | bokhandel |
| *realizar* | realize | gjennomføre |
| *éxito* | exit | suksess |

Disse ordene er viktige å huske for å unngå misforståelser!`,
    },
    {
      id: 'spansk-2-16-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Tematisk vokabular — Samfunn og kultur',
      problem: `Gjennomgå nøkkelvokabular knyttet til samfunn, identitet og kultur.`,
      solution: `| Spansk | Norsk |
|---|---|
| *la identidad* | identitet |
| *la diversidad* | mangfold |
| *la convivencia* | sameksistens |
| *los derechos humanos* | menneskerettigheter |
| *la igualdad de género* | likestilling |
| *el medio ambiente* | miljøet |
| *el cambio climático* | klimaendringer |
| *la justicia social* | sosial rettferdighet |
| *la globalización* | globalisering |
| *el patrimonio cultural* | kulturarv |
| *la ciudadanía* | statsborgerskap |
| *el compromiso* | forpliktelse, engasjement |`,
    },
    {
      id: 'spansk-2-16-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr den falske vennen «embarazada» på spansk?',
        options: [
          { id: 'a', text: 'Flau / forlegen', isCorrect: false },
          { id: 'b', text: 'Gravid', isCorrect: true },
          { id: 'c', text: 'Overrasket', isCorrect: false },
          { id: 'd', text: 'Embarrasserende', isCorrect: false },
        ],
        solution: 'Riktig svar er b). «Embarazada» betyr gravid, ikke flau/forlegen. For å si flau på spansk bruker man «avergonzado/a». Dette er en av de mest kjente falske vennene mellom spansk og engelsk.',
      },
    },
    {
      id: 'spansk-2-16-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket ord hører IKKE til i ordfamilien til «educar»?',
        options: [
          { id: 'a', text: 'la educación', isCorrect: false },
          { id: 'b', text: 'educativo', isCorrect: false },
          { id: 'c', text: 'el educador', isCorrect: false },
          { id: 'd', text: 'el edificio', isCorrect: true },
        ],
        solution: 'Riktig svar er d). «El edificio» (bygningen) tilhører ordfamilien til «edificar» (bygge), ikke «educar» (utdanne). De andre ordene deler roten «educ-»: la educación (utdanning), educativo (utdanningsmessig), el educador (pedagog).',
      },
    },
    {
      id: 'spansk-2-16-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Tematisk vokabular — Arbeid og utdanning',
      problem: `Gjennomgå nøkkelvokabular knyttet til arbeid, utdanning og fremtid.`,
      solution: `| Spansk | Norsk |
|---|---|
| *la carrera* | karriere / universitetsstudium |
| *la formación* | utdanning, opplæring |
| *el empleo* | jobb, stilling |
| *el desempleo* | arbeidsledighet |
| *el currículum* | CV |
| *la entrevista de trabajo* | jobbintervju |
| *el salario / el sueldo* | lønn |
| *la experiencia laboral* | arbeidserfaring |
| *la beca* | stipend |
| *el puesto de trabajo* | arbeidsplass / stilling |
| *solicitar* | søke (om jobb/stipend) |
| *la empresa* | bedrift |`,
    },
    {
      id: 'spansk-2-16-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «actualmente» på spansk?',
        options: [
          { id: 'a', text: 'Egentlig', isCorrect: false },
          { id: 'b', text: 'Faktisk', isCorrect: false },
          { id: 'c', text: 'For tiden / nå', isCorrect: true },
          { id: 'd', text: 'Til slutt', isCorrect: false },
        ],
        solution: 'Riktig svar er c). «Actualmente» er en falsk venn — det betyr «for tiden» eller «nå», ikke «actually» (faktisk/egentlig). For å si «faktisk» på spansk bruker man «en realidad» eller «de hecho».',
      },
    },
    {
      id: 'spansk-2-16-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi repetert:

- **Ordfamilier** — hvordan du kan gjenkjenne beslektede ord ved å se på roten
- **Falske venner** — ord som ser ut som norske/engelske ord, men betyr noe annet
- **Tematisk vokabular** om samfunn, kultur, arbeid og utdanning
- Strategier for å **lære og huske** nye ord

Tips for videre ordlæring:
1. Lag egne ordlister med eksempelsetninger
2. Bruk ordene aktivt i skriving og samtale
3. Les spanske tekster og marker nye ord
4. Repeter jevnlig — bruk gjerne «spaced repetition»`,
    },
    // --- Samleoppgaver ---
    {
      id: 'spansk-2-16-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble riktig «falsk venn» med dens faktiske betydning. Skriv setninger:\n\n1. constipado/a\n2. la carpeta\n3. sensible\n4. la librería\n5. realizar',
        solution: '1. *constipado/a* = forkjølet. «Estoy constipado, tengo dolor de garganta.» (Jeg er forkjølet, jeg har vondt i halsen.)\n2. *la carpeta* = mappe. «Guarda los documentos en la carpeta azul.» (Oppbevar dokumentene i den blå mappen.)\n3. *sensible* = følsom. «Es una persona muy sensible.» (Hun/han er en veldig følsom person.)\n4. *la librería* = bokhandel. «Compré el libro en la librería del centro.» (Jeg kjøpte boken i bokhandelen i sentrum.)\n5. *realizar* = gjennomføre. «Vamos a realizar un proyecto sobre el medio ambiente.» (Vi skal gjennomføre et prosjekt om miljøet.)',
      },
    },
    {
      id: 'spansk-2-16-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bygg ordfamilier. For hvert verb, skriv det tilhørende substantivet og adjektivet:\n\n1. contaminar (forurense)\n2. gobernar (styre)\n3. investigar (forske)\n4. comunicar (kommunisere)',
        solution: '1. *contaminar*: la contaminación (forurensning), contaminado/a (forurenset)\n2. *gobernar*: el gobierno (regjering), gubernamental (regjeringsmessig)\n3. *investigar*: la investigación (forskning), investigador/a (forsknings-/forsker)\n4. *comunicar*: la comunicación (kommunikasjon), comunicativo/a (kommunikativ)',
      },
    },
    {
      id: 'spansk-2-16-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'avansert',
        task: 'Skriv en kort tekst (8-10 setninger) om din drømmejobb. Bruk minst 8 ord fra vokabularlisten om arbeid og utdanning i dette kapittelet.',
        solution: 'Eksempelsvar:\n\n*Actualmente estoy estudiando en el instituto, pero ya pienso en mi futuro laboral. Mi sueño es hacer una carrera en ingeniería ambiental. Para ello, necesitaré una buena formación universitaria. Me gustaría solicitar una beca para estudiar en España. Después de terminar mis estudios, buscaré empleo en una empresa que trabaje con el medio ambiente. Sé que la experiencia laboral es muy importante, así que intentaré hacer prácticas durante los veranos. Espero encontrar un puesto de trabajo con un buen salario, pero lo más importante es que el trabajo sea significativo. No quiero que el desempleo sea un problema en mi vida.*\n\nOrd brukt: actualmente, carrera, formación, solicitar, beca, empleo, empresa, experiencia laboral, puesto de trabajo, salario, desempleo.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'La familia de palabras', definition: 'Ordfamilie — en gruppe ord som deler samme rot' },
    { term: 'El falso amigo', definition: 'Falsk venn — ord som ligner på norsk/engelsk men betyr noe annet' },
    { term: 'El sinónimo', definition: 'Synonym — ord med lik eller lignende betydning' },
    { term: 'El antónimo', definition: 'Antonym — ord med motsatt betydning' },
    { term: 'El campo semántico', definition: 'Semantisk felt — en gruppe ord knyttet til samme tema' },
    { term: 'La raíz', definition: 'Roten av et ord, den delen som bærer grunnbetydningen' },
    { term: 'El prefijo / el sufijo', definition: 'Forstavelse / endelse som endrer ordets betydning' },
  ],
};

// ============================================================================
// KAPITTEL 16.3 — Estrategias de comunicación
// ============================================================================

export const CHAPTER_SPANSK_2_16_3: TextbookChapter = {
  id: 'spansk-2-16-3',
  courseId: 'spansk-2',
  chapterNumber: '16.3',
  title: 'Estrategias de comunicación',
  subtitle: 'Kommunikasjonsstrategier',
  description: 'I dette kapittelet gjennomgår vi strategier for å lese, lytte, skrive og snakke spansk mer effektivt. Du lærer konkrete teknikker for å forstå vanskelige tekster, ta notater og uttrykke deg muntlig og skriftlig.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Bruke lese- og lyttestrategier for å forstå autentiske spanske tekster',
    'Anvende skrivestrategier for å produsere sammenhengende tekster på spansk',
    'Mestre muntlige kommunikasjonsstrategier for samtaler og presentasjoner',
  ],
  content: [
    {
      id: 'spansk-2-16-3-intro',
      type: 'text',
      content: `## Estrategias de comunicación — Kommunikasjonsstrategier

Å lære et språk handler ikke bare om grammatikk og gloser — det handler om å *kommunisere*. I dette kapittelet ser vi på konkrete strategier for de fire ferdighetene: lesing (*la lectura*), lytting (*la comprensión auditiva*), skriving (*la escritura*) og snakking (*la expresión oral*).

Gode strategier kan hjelpe deg å forstå mer, uttrykke deg bedre og føle deg tryggere i møte med spansk.`,
    },
    {
      id: 'spansk-2-16-3-def-1',
      type: 'definition',
      title: 'Estrategias de lectura — Lesestrategier',
      content: `**Lesestrategier** hjelper deg å forstå spanske tekster, selv når du ikke forstår hvert eneste ord:

1. **Skumlesing** (*lectura rápida*): Les raskt for å få oversikt over tema og struktur.
2. **Nøkkelordlesing** (*lectura selectiva*): Let etter nøkkelord som gir deg hovedinnholdet.
3. **Kontekstuell gjetning** (*deducción por contexto*): Bruk sammenhengen til å gjette betydningen av ukjente ord.
4. **Ordfamilier**: Gjenkjenn roten av ord for å forstå beslektede former.
5. **Kognater**: Utnytt likheter med norsk og engelsk (f.eks. *problema* = problem).
6. **Strukturmarkører**: Se etter ord som *sin embargo* (likevel), *por lo tanto* (derfor), *en primer lugar* (for det første).`,
    },
    {
      id: 'spansk-2-16-3-def-2',
      type: 'definition',
      title: 'Estrategias de comprensión auditiva — Lyttestrategier',
      content: `**Lyttestrategier** hjelper deg å forstå muntlig spansk:

1. **Forberedelse**: Les oppgaven og eventuelle stikkord *før* du lytter.
2. **Globalforståelse**: Prøv å forstå hovedbudskapet ved første lytting — ikke heng deg opp i enkeltord.
3. **Detaljlytting**: Ved andre lytting, fokuser på detaljer og spesifikk informasjon.
4. **Nøkkelord**: Lytt etter ord du kjenner — de gir deg holdepunkter.
5. **Intonasjon**: Legg merke til tonefall som signaliserer spørsmål, overraskelse eller viktighet.
6. **Notater**: Ta korte notater mens du lytter — stikkord på spansk eller norsk.`,
    },
    {
      id: 'spansk-2-16-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Skrivestrategier',
      problem: `Hvilke strategier bør du bruke når du skriver en tekst på spansk?`,
      solution: `Gode skrivestrategier for Spansk 2:

**Før skriving:**
- *Planificar* — lag en disposisjon med innledning, hoveddel og avslutning
- *Generar ideas* — brainstorm nøkkelord og uttrykk du vil bruke

**Under skriving:**
- Bruk **bindeord** (*conectores*) for å skape sammenheng:
  - *En primer lugar* (For det første), *Además* (Dessuten), *Sin embargo* (Likevel), *Por último* (Til slutt)
- Varier setningsstrukturen — ikke start alle setninger med subjektet
- Bruk forskjellige verbtider for å vise at du behersker grammatikken
- Bruk **eksempler** for å støtte argumentene dine: *Por ejemplo* (For eksempel)

**Etter skriving:**
- *Revisar* — les gjennom og sjekk grammatikk (kongruens, verbtider)
- Sjekk at du har besvart oppgaven og at teksten henger sammen`,
    },
    {
      id: 'spansk-2-16-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken lesestrategi bør du bruke FØRST når du møter en ny spansk tekst?',
        options: [
          { id: 'a', text: 'Slå opp alle ukjente ord i ordboken', isCorrect: false },
          { id: 'b', text: 'Skumlese for å få oversikt over tema og struktur', isCorrect: true },
          { id: 'c', text: 'Oversette setning for setning til norsk', isCorrect: false },
          { id: 'd', text: 'Lese teksten høyt for å øve uttale', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Skumlesing (lectura rápida) er den beste førstestrategien. Den gir deg raskt en oversikt over innholdet uten at du henger deg opp i ukjente enkeltord. Å slå opp alle ord (a) er tidkrevende og unødvendig, mens oversetting (c) hindrer deg i å tenke på spansk.',
      },
    },
    {
      id: 'spansk-2-16-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket bindeord bruker du for å innføre en motsetning i en spansk tekst?',
        options: [
          { id: 'a', text: 'Además', isCorrect: false },
          { id: 'b', text: 'Por ejemplo', isCorrect: false },
          { id: 'c', text: 'Sin embargo', isCorrect: true },
          { id: 'd', text: 'En primer lugar', isCorrect: false },
        ],
        solution: 'Riktig svar er c). «Sin embargo» betyr «likevel/imidlertid» og brukes for å innføre en motsetning. «Además» (dessuten) legger til informasjon, «por ejemplo» (for eksempel) gir et eksempel, og «en primer lugar» (for det første) organiserer rekkefølge.',
      },
    },
    {
      id: 'spansk-2-16-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Muntlige strategier',
      problem: `Hvilke strategier kan du bruke for å kommunisere bedre muntlig på spansk?`,
      solution: `Strategier for muntlig kommunikasjon:

**Når du ikke finner riktig ord:**
- *Omskrivning*: Beskriv ordet i stedet — «la cosa que usamos para escribir» (tingen vi bruker for å skrive = el bolígrafo)
- *Synonymer*: Bruk et enklere ord med lignende betydning
- *Kroppsspråk*: Bruk gester for å støtte budskapet

**For å holde samtalen i gang:**
- *¿Puedes repetir, por favor?* (Kan du gjenta?)
- *¿Qué significa…?* (Hva betyr…?)
- *Es decir…* (Det vil si…)
- *O sea…* (Altså…)
- *¿Cómo se dice … en español?* (Hvordan sier man … på spansk?)

**For å organisere en presentasjon:**
- *Voy a hablar sobre…* (Jeg skal snakke om…)
- *En primer lugar… En segundo lugar…* (For det første… For det andre…)
- *Para concluir…* (For å oppsummere…)`,
    },
    {
      id: 'spansk-2-16-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre FØR du lytter til en spansk lydtekst på eksamen?',
        options: [
          { id: 'a', text: 'Lukke øynene og konsentrere deg', isCorrect: false },
          { id: 'b', text: 'Lese oppgaven og eventuelle stikkord på forhånd', isCorrect: true },
          { id: 'c', text: 'Prøve å gjette hva teksten handler om uten å lese oppgaven', isCorrect: false },
          { id: 'd', text: 'Skrive ned alle spanske ord du kan', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Å lese oppgaven og stikkord før lytting er en viktig forberedelse. Det gir deg en forventning om innholdet og hjelper deg å fokusere på relevant informasjon under lyttingen.',
      },
    },
    {
      id: 'spansk-2-16-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi gjennomgått kommunikasjonsstrategier for alle fire ferdighetene:

- **Lesing**: Skumlese, bruke kontekst, gjenkjenne ordfamilier og kognater
- **Lytting**: Forberede seg, lytte etter nøkkelord, bruke intonasjon som holdepunkt
- **Skriving**: Planlegge, bruke bindeord, variere setningsstruktur, revidere
- **Snakking**: Omskrive, bruke fyllord, organisere presentasjoner

Disse strategiene gjør deg til en bedre og tryggere spanskbruker — bruk dem aktivt i undervisning, på prøver og i kommunikasjon med spansktalende.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'spansk-2-16-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les teksten og bruk lesestrategier for å svare:\n\n«La globalización ha transformado la manera en que vivimos, trabajamos y nos comunicamos. Sin embargo, no todos se benefician de este fenómeno. Mientras que las grandes empresas multinacionales obtienen enormes ganancias, muchas comunidades locales pierden su identidad cultural y sus tradiciones.»\n\n1. Hva er hovedtemaet i teksten?\n2. Hva signaliserer «sin embargo»?\n3. Hvilken kontrast presenteres?',
        solution: '1. Hovedtemaet er globalisering og dens ulike konsekvenser.\n2. «Sin embargo» signaliserer en motsetning — forfatteren presenterer en annen side av saken.\n3. Kontrasten er mellom store multinasjonale selskaper som tjener mye penger, og lokale samfunn som mister sin kulturelle identitet og sine tradisjoner.',
      },
    },
    {
      id: 'spansk-2-16-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort argumenterende tekst (6-8 setninger) om temaet «¿Es importante aprender idiomas extranjeros?» (Er det viktig å lære fremmedspråk?). Bruk minst 4 bindeord (conectores) fra dette kapittelet.',
        solution: 'Eksempelsvar:\n\n*En primer lugar, creo que es muy importante aprender idiomas extranjeros. Además, vivimos en un mundo globalizado donde la comunicación internacional es esencial. Por ejemplo, saber español permite comunicarse con más de 500 millones de personas en el mundo. Sin embargo, aprender un idioma no es fácil y requiere mucho tiempo y esfuerzo. A pesar de esto, los beneficios son enormes: mejores oportunidades de trabajo, comprensión de otras culturas y desarrollo personal. Por último, aprender idiomas nos hace más abiertos y tolerantes. En conclusión, todos deberíamos estudiar al menos un idioma extranjero.*\n\nBindeord brukt: En primer lugar, Además, Por ejemplo, Sin embargo, A pesar de esto, Por último, En conclusión.',
      },
    },
    {
      id: 'spansk-2-16-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'avansert',
        task: 'Forbered en kort muntlig presentasjon (stikkord) om et valgfritt tema fra Spansk 2. Bruk de muntlige strategiene fra dette kapittelet. Skriv ned:\n\n1. Innledning (Voy a hablar sobre…)\n2. Tre hovedpunkter (En primer lugar… En segundo lugar… Finalmente…)\n3. Avslutning (Para concluir…)',
        solution: 'Eksempelsvar (tema: la inmigración en España):\n\n1. Innledning: *Buenos días. Voy a hablar sobre la inmigración en España y cómo ha cambiado la sociedad española.*\n\n2. Hovedpunkter:\n- *En primer lugar, España ha recibido millones de inmigrantes de Latinoamérica, África y Europa del Este en las últimas décadas.*\n- *En segundo lugar, los inmigrantes contribuyen a la economía española trabajando en sectores como la agricultura, la construcción y el turismo.*\n- *Finalmente, la integración es un desafío importante. Es necesario que la sociedad española y los inmigrantes trabajen juntos para crear una convivencia respetuosa.*\n\n3. Avslutning: *Para concluir, la inmigración es un fenómeno complejo con aspectos positivos y negativos. Lo más importante es promover el diálogo y el respeto mutuo. Muchas gracias.*',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'La lectura rápida', definition: 'Skumlesing — å lese raskt for å få oversikt' },
    { term: 'La comprensión auditiva', definition: 'Lytteforståelse — evnen til å forstå muntlig språk' },
    { term: 'Los conectores', definition: 'Bindeord — ord som skaper sammenheng i teksten' },
    { term: 'La expresión oral', definition: 'Muntlig uttrykksevne — evnen til å snakke og presentere' },
    { term: 'La expresión escrita', definition: 'Skriftlig uttrykksevne — evnen til å skrive tekster' },
    { term: 'El contexto', definition: 'Sammenhengen — brukes for å forstå ukjente ord' },
    { term: 'La paráfrasis', definition: 'Omskriving — å si det samme med andre ord' },
  ],
};

// ============================================================================
// KAPITTEL 16.4 — Preparación para exámenes
// ============================================================================

export const CHAPTER_SPANSK_2_16_4: TextbookChapter = {
  id: 'spansk-2-16-4',
  courseId: 'spansk-2',
  chapterNumber: '16.4',
  title: 'Preparación para exámenes',
  subtitle: 'Eksamensforberedelse',
  description: 'I dette kapittelet forbereder du deg til eksamen i Spansk Nivå 2. Du får øvelsesoppgaver i eksamensformat, tips for egenvurdering og strategier for å gjøre det best mulig på prøver og eksamen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'Bli kjent med eksamensformatet og oppgavetypene i Spansk 2',
    'Øve på autentiske eksamensoppgaver innen lesing, skriving og grammatikk',
    'Kunne vurdere egne styrker og svakheter og lage en studieplan',
  ],
  content: [
    {
      id: 'spansk-2-16-4-intro',
      type: 'text',
      content: `## Preparación para exámenes — Eksamensforberedelse

En god eksamensforberedelse handler om mer enn bare å pugge gloser. Du må kunne *anvende* det du har lært: forstå tekster, skrive sammenhengende, bruke grammatikk korrekt og kommunisere om ulike temaer.

I dette kapittelet får du:
- Oversikt over **eksamensformat** og oppgavetyper
- **Øvelsesoppgaver** i eksamensformat
- Tips for **egenvurdering** og studieplanlegging
- Strategier for **selve eksamensdagen**`,
    },
    {
      id: 'spansk-2-16-4-def-1',
      type: 'definition',
      title: 'Eksamensformat — Spansk Nivå 2',
      content: `Eksamen i Spansk Nivå 2 tester vanligvis disse ferdighetene:

**Del 1 — Leseforståelse** (*Comprensión lectora*):
- Lese autentiske spanske tekster
- Svare på spørsmål om innhold, tema og detaljer
- Forklare ord og uttrykk ut fra kontekst

**Del 2 — Skriftlig produksjon** (*Expresión escrita*):
- Skrive sammenhengende tekster (150-250 ord)
- Argumentere, beskrive eller fortelle
- Bruke variert grammatikk og ordforråd

**Del 3 — Muntlig** (*Expresión oral*, ved muntlig eksamen):
- Holde en presentasjon om et forberedt tema
- Samtale med eksaminator om ulike emner`,
    },
    {
      id: 'spansk-2-16-4-def-2',
      type: 'definition',
      title: 'Vurderingskriterier',
      content: `Når du skriver på eksamen, blir du vurdert på:

**Kommunikasjon**: Svarer du på oppgaven? Er budskapet tydelig?

**Innhold**: Er teksten relevant og utfyllende? Bruker du eksempler?

**Språk**: Bruker du variert grammatikk og ordforråd? Er det mange feil?

**Struktur**: Er teksten godt organisert med innledning, hoveddel og avslutning?

Tips: Det er bedre å skrive *enkelt og korrekt* enn *avansert og fullt av feil*. Men for å oppnå høy karakter, må du vise at du behersker avanserte strukturer som subjuntivo, condicional og varierte bindeord.`,
    },
    {
      id: 'spansk-2-16-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Leseforståelsesoppgave',
      problem: `Les teksten og svar på spørsmålene under.

*«El turismo es una de las industrias más importantes de España. Cada año, millones de turistas visitan el país para disfrutar del sol, la playa, la gastronomía y la cultura. Sin embargo, el turismo masivo también tiene consecuencias negativas: la contaminación, el aumento de los precios y la pérdida de la identidad local. En ciudades como Barcelona, los habitantes protestan contra el turismo excesivo porque los alquileres suben y los barrios pierden su carácter tradicional. Es necesario encontrar un equilibrio entre el turismo y la calidad de vida de los ciudadanos.»*

1. Hvorfor er turisme viktig for Spania?
2. Nevn to negative konsekvenser av masseturisme.
3. Hva betyr «encontrar un equilibrio»?`,
      solution: `1. Turisme er en av de viktigste næringene i Spania. Millioner av turister besøker landet hvert år for å nyte sol, strand, gastronomi og kultur.

2. To negative konsekvenser: (a) Forurensning (*la contaminación*) og prisøkning (*el aumento de los precios*). Andre mulige svar: tap av lokal identitet, stigende husleie.

3. «Encontrar un equilibrio» betyr «å finne en balanse» — her mellom turisme og livskvaliteten til innbyggerne.`,
    },
    {
      id: 'spansk-2-16-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Ifølge eksempelteksten, hva protesterer innbyggerne i Barcelona mot?',
        options: [
          { id: 'a', text: 'Mangel på turister', isCorrect: false },
          { id: 'b', text: 'Overdreven turisme som øker husleien og endrer nabolagene', isCorrect: true },
          { id: 'c', text: 'Dårlig gastronomi i turistområdene', isCorrect: false },
          { id: 'd', text: 'Mangel på strender og sol', isCorrect: false },
        ],
        solution: 'Riktig svar er b). Teksten sier at innbyggerne i Barcelona protesterer mot overdreven turisme («turismo excesivo») fordi husleiene stiger og nabolagene mister sin tradisjonelle karakter.',
      },
    },
    {
      id: 'spansk-2-16-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Egenvurdering og studieplan',
      problem: `Hvordan kan du vurdere dine styrker og svakheter i spansk?`,
      solution: `Bruk denne sjekklisten for egenvurdering:

| Ferdighet | Mestrer godt | Trenger øving |
|---|---|---|
| Pretérito perfecto og imperfecto | ☐ | ☐ |
| Subjuntivo | ☐ | ☐ |
| Condicional og futuro | ☐ | ☐ |
| Pronomenbruk | ☐ | ☐ |
| Passiv (voz pasiva) | ☐ | ☐ |
| Bindeord (conectores) | ☐ | ☐ |
| Tematisk vokabular | ☐ | ☐ |
| Leseforståelse | ☐ | ☐ |
| Skriving | ☐ | ☐ |
| Muntlig kommunikasjon | ☐ | ☐ |

**Studietips:**
1. Fokuser mest på det du trenger å øve på.
2. Øv litt hver dag i stedet for mye på én dag.
3. Les spanske tekster regelmessig — nyheter, korte artikler.
4. Skriv øvelsestekster og be læreren om tilbakemelding.
5. Snakk spansk med medelever — øving gjør mester!`,
    },
    {
      id: 'spansk-2-16-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er det VIKTIGSTE for å oppnå en god karakter på skriftlig eksamen i spansk?',
        options: [
          { id: 'a', text: 'Å skrive så mye tekst som mulig', isCorrect: false },
          { id: 'b', text: 'Å bruke flest mulig vanskelige ord', isCorrect: false },
          { id: 'c', text: 'Å svare på oppgaven med god struktur, variert språk og få feil', isCorrect: true },
          { id: 'd', text: 'Å kopiere setninger fra teksten i leseoppgaven', isCorrect: false },
        ],
        solution: 'Riktig svar er c). En god eksamentekst svarer på oppgaven, er godt strukturert, bruker variert grammatikk og ordforråd, og har få feil. Lengde alene (a) gir ikke god karakter, og å bruke vanskelige ord man ikke behersker (b) fører ofte til feil.',
      },
    },
    {
      id: 'spansk-2-16-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi forberedt oss til eksamen med:

- Oversikt over **eksamensformat** og oppgavetyper
- **Leseforståelsesoppgave** med eksempelsvar
- **Vurderingskriterier** for skriftlig eksamen
- **Egenvurdering** med sjekkliste for styrker og svakheter
- **Studietips** for effektiv eksamensforberedelse

Husk: God forberedelse er nøkkelen til suksess. Bruk kapitlene i denne boken aktivt, øv jevnlig og tro på deg selv. ¡Buena suerte en el examen! (Lykke til på eksamen!)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'spansk-2-16-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Leseforståelse: Les teksten og svar på spørsmålene på norsk.\n\n«América Latina es una región de enorme diversidad cultural y lingüística. Aunque el español es el idioma predominante, también se hablan cientos de lenguas indígenas como el quechua, el guaraní y el náhuatl. La preservación de estas lenguas es fundamental para mantener viva la herencia cultural de los pueblos originarios. Desafortunadamente, muchas de estas lenguas están en peligro de desaparecer porque las nuevas generaciones prefieren hablar español o inglés.»\n\n1. Hva er hovedideen i teksten?\n2. Nevn tre urfolksspråk som nevnes.\n3. Hva menes med «en peligro de desaparecer»?\n4. Hvorfor er noen språk truet, ifølge teksten?',
        solution: '1. Hovedideen er at Latin-Amerika har stor kulturell og språklig mangfold, men at mange urfolksspråk er truet.\n2. Tre urfolksspråk: quechua, guaraní og náhuatl.\n3. «En peligro de desaparecer» betyr «i fare for å forsvinne» — altså truede språk.\n4. Ifølge teksten er disse språkene truet fordi nye generasjoner foretrekker å snakke spansk eller engelsk.',
      },
    },
    {
      id: 'spansk-2-16-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Grammatikkoppgave: Velg riktig verbform og forklar hvorfor.\n\n1. Cuando yo _____ (ser) niño, _____ (jugar) al fútbol todos los días.\n2. Este año _____ (visitar, nosotros) tres países diferentes.\n3. Si _____ (poder, yo), _____ (ir) a Argentina el próximo verano.\n4. Mi madre quiere que yo _____ (estudiar) medicina.\n5. Mañana _____ (llover) según el pronóstico.',
        solution: '1. Cuando yo *era* niño, *jugaba* al fútbol todos los días. (Imperfecto — gjentatt handling i fortiden.)\n2. Este año *hemos visitado* tres países diferentes. (Pretérito perfecto — handling i en tidsperiode som inkluderer nåtiden.)\n3. Si *pudiera*, *iría* a Argentina el próximo verano. (Imperfecto de subjuntivo + condicional — hypotetisk situasjon.)\n4. Mi madre quiere que yo *estudie* medicina. (Subjuntivo — etter «quiere que».)\n5. Mañana *lloverá* según el pronóstico. (Futuro simple — fremtidig hendelse.)',
      },
    },
    {
      id: 'spansk-2-16-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'avansert',
        task: 'Skriveoppgave (eksamensformat): Skriv en tekst på 150-200 ord på spansk om følgende tema:\n\n«¿Cuáles son las ventajas y desventajas de las redes sociales para los jóvenes?»\n(Hva er fordelene og ulempene med sosiale medier for ungdom?)\n\nHusk å bruke bindeord, variert grammatikk og en klar struktur med innledning, hoveddel og avslutning.',
        solution: 'Eksempelsvar:\n\n*Las redes sociales forman una parte importante de la vida de los jóvenes hoy en día. En primer lugar, tienen muchas ventajas: nos permiten comunicarnos con amigos y familiares, compartir experiencias y acceder a información sobre temas que nos interesan. Además, pueden ser una herramienta útil para la educación y para conocer otras culturas.\n\nSin embargo, también existen desventajas significativas. Por ejemplo, muchos jóvenes pasan demasiado tiempo en las redes sociales, lo que puede afectar negativamente a sus estudios y su salud mental. Es posible que algunos experimenten ciberacoso o se sientan presionados por las imágenes perfectas que ven en línea.\n\nEn conclusión, creo que las redes sociales pueden ser positivas si se usan con moderación. Es importante que los jóvenes aprendan a usarlas de manera responsable y que no permitan que controlen su vida.*\n\nDenne teksten bruker: bindeord (en primer lugar, además, sin embargo, por ejemplo, en conclusión), subjuntivo (experimenten, aprendan, permitan), variert ordforråd og klar struktur.',
      },
    },
    {
      id: 'spansk-2-16-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-16-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'avansert',
        task: 'Egenvurdering: Fyll ut din egen studieplan for eksamensforberedelse.\n\n1. Hvilke tre grammatiske temaer trenger du å øve mest på?\n2. Hvilke tre tematiske områder (vokabular) føler du deg minst trygg på?\n3. Lag en konkret plan for de neste to ukene: hva skal du gjøre hver dag for å forberede deg?',
        solution: 'Eksempelsvar:\n\n1. Grammatiske temaer jeg trenger å øve på:\n- Subjuntivo — jeg er usikker på når jeg skal bruke det\n- Pronomenplassering — spesielt med to pronomen\n- Forskjellen mellom pretérito perfecto og pretérito indefinido\n\n2. Tematiske områder jeg er usikker på:\n- Vokabular om politikk og samfunn\n- Vokabular om miljø og bærekraft\n- Akademiske uttrykk for argumentasjon\n\n3. Studieplan (2 uker):\n- Mandag-fredag: 30 min grammatikkøving (fokus på subjuntivo uke 1, pronomen uke 2)\n- Tirsdag/torsdag: Lese en kort spansk artikkel og notere nye ord\n- Onsdag/fredag: Skrive en kort tekst (100-150 ord) om et av temaene\n- Helg: Repetere gloser fra alle kapitler med ordkort\n- Siste helg: Gjøre en full prøveeksamen under tidsbegrensning',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'La comprensión lectora', definition: 'Leseforståelse — evnen til å forstå skriftlige tekster' },
    { term: 'La expresión escrita', definition: 'Skriftlig uttrykksevne — evnen til å produsere tekst' },
    { term: 'Los criterios de evaluación', definition: 'Vurderingskriteriene — det du bedømmes etter på eksamen' },
    { term: 'La autoevaluación', definition: 'Egenvurdering — å vurdere egne styrker og svakheter' },
    { term: 'El plan de estudio', definition: 'Studieplan — en plan for hva og når du skal øve' },
    { term: 'La práctica', definition: 'Øving — gjentatt trening for å forbedre ferdigheter' },
    { term: 'El examen oral', definition: 'Muntlig eksamen — prøve der du snakker og presenterer' },
    { term: 'El borrador', definition: 'Kladd — førsteutkast av en tekst' },
  ],
};

// ============================================================================
// Eksporter alle kapitler samlet
// ============================================================================

export const SPANSK_2_CHAPTERS_14_16: TextbookChapter[] = [
  CHAPTER_SPANSK_2_14_1,
  CHAPTER_SPANSK_2_14_2,
  CHAPTER_SPANSK_2_14_3,
  CHAPTER_SPANSK_2_14_4,
  CHAPTER_SPANSK_2_15_1,
  CHAPTER_SPANSK_2_15_2,
  CHAPTER_SPANSK_2_15_3,
  CHAPTER_SPANSK_2_15_4,
  CHAPTER_SPANSK_2_16_1,
  CHAPTER_SPANSK_2_16_2,
  CHAPTER_SPANSK_2_16_3,
  CHAPTER_SPANSK_2_16_4,
];
