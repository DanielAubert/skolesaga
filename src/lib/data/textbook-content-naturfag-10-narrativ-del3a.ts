/**
 * Naturfag 10 - Narrativ versjon DEL 3A
 * Seksjon 3: Fysikk og energi (3.1-3.3)
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1 NARRATIV: Energi og energiformer
// ============================================================================

export const CHAPTER_NATURFAG_10_3_1_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-3-1-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '3.1',
  title: 'Energi og energiformer',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hva energi egentlig er, utforsk de seks viktigste energiformene fra kinetisk til termisk, og lær hvordan energi måles og omdannes i alt rundt deg.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive og gi eksempler på energi i ulike former og energiomforminger',
    'bruke energibegrepet til å beskrive og utforske naturfenomener',
  ],
  linkedChapterId: 'naturfag-10-3-1',
  content: [
    {
      id: 'naturfag-10-3-1-n-intro',
      type: 'text',
      content: `## Energi er overalt

Tenk over noe helt vanlig: Du slår på lyset om morgenen. Solen varmer ansiktet ditt gjennom vinduet. Du spiser frokost, og kroppen din får kraft til å bevege seg. Du tramper på sykkelen til skolen, og hjulene spinner. Alt dette har noe grunnleggende til felles, nemlig energi.

Energi er et av de mest sentrale begrepene i hele naturfagen, og likevel er det overraskende vanskelig å peke på det og si «der er det». Du kan ikke se energi direkte. Du kan ikke ta på den, lukte den eller smake den. Men du kan se hva energi gjør. Den får baller til å rulle, lyspærer til å gløde, motorer til å brumme og is til å smelte. Energi er evnen til å utføre arbeid eller forandre noe, og den er helt avgjørende for alt som skjer i naturen.

I dette kapittelet skal vi dykke inn i energiens verden. Vi skal utforske hva energi egentlig er, lære om seks ulike energiformer, forstå hvordan energi måles, og oppdage hvordan energi kan skifte fra én form til en annen. Gjør deg klar for å se verden med nye øyne.`,
    },
    {
      id: 'naturfag-10-3-1-n-section1',
      type: 'text',
      content: `## Hva er egentlig energi?

La oss starte med det grunnleggende. Energi er evnen til å utføre arbeid eller forandre noe. Det høres kanskje litt abstrakt ut, men tenk på det slik: Når noe har energi, kan det få ting til å skje. En ball som beveger seg har energi fordi den kan flytte på andre ting den treffer. Et batteri har energi fordi det kan drive en lommelykt. Solen har energi fordi den sender ut lys og varme som gjør livet på jorda mulig.

Det finnes tre viktige egenskaper ved energi som du bør kjenne til. For det første kan energi aldri forsvinne eller skapes fra ingenting. Den kan bare omdannes fra én form til en annen. Dette kalles energibevaring, og det er et av de mest fundamentale prinsippene i fysikken. For det andre finnes energi i mange forskjellige former, som bevegelse, varme, lys, lyd og elektrisitet. For det tredje måles energi i enheten joule, forkortet J, oppkalt etter den britiske fysikeren James Prescott Joule. Én joule er omtrent den energien du trenger for å løfte et lite eple én meter opp i luften. Fordi det er en ganske liten mengde, bruker vi ofte kilojoule (kJ), som er tusen joule.

I matpakker angis energiinnhold i kilojoule eller kilokalorier. Én kilokalori tilsvarer 4,18 kilojoule. En sjokoladeplate kan for eksempel inneholde rundt 2000 kJ energi.`,
    },
    {
      id: 'naturfag-10-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på hva energi er:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-1-n-quiz1-q0',
            task: 'Hva er den beste definisjonen av energi?',
            options: [
              { id: 'a', text: 'Et stoff som finnes i mat og batterier', isCorrect: false },
              { id: 'b', text: 'Evnen til å utføre arbeid eller forandre noe', isCorrect: true },
              { id: 'c', text: 'En kraft som virker mellom gjenstander', isCorrect: false },
              { id: 'd', text: 'Hastigheten til partikler i et stoff', isCorrect: false },
            ],
            solution:
              'Energi er evnen til å utføre arbeid eller forandre noe. Det er ikke et stoff i seg selv, og det er ikke det samme som kraft. Kraft måles i newton, mens energi måles i joule.',
          },
          {
            id: 'naturfag-10-3-1-n-quiz1-q1',
            task: 'Hvilken enhet måles energi i?',
            options: [
              { id: 'a', text: 'Newton (N)', isCorrect: false },
              { id: 'b', text: 'Watt (W)', isCorrect: false },
              { id: 'c', text: 'Joule (J)', isCorrect: true },
              { id: 'd', text: 'Volt (V)', isCorrect: false },
            ],
            solution:
              'Energi måles i joule (J), oppkalt etter James Prescott Joule. Newton er enheten for kraft, watt er enheten for effekt (energi per tid), og volt er enheten for elektrisk spenning.',
          },
          {
            id: 'naturfag-10-3-1-n-quiz1-q2',
            task: 'Hva sier energibevaringsprinsippet?',
            options: [
              { id: 'a', text: 'Energi kan skapes hvis vi har de rette materialene', isCorrect: false },
              { id: 'b', text: 'Energi kan forsvinne over tid', isCorrect: false },
              { id: 'c', text: 'Energi kan verken skapes eller ødelegges, bare omdannes', isCorrect: true },
              { id: 'd', text: 'Energi finnes bare i fast form', isCorrect: false },
            ],
            solution:
              'Energibevaringsprinsippet sier at energi aldri kan skapes fra ingenting eller forsvinne helt. Den totale mengden energi er alltid den samme, men energien kan omdannes fra én form til en annen.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-1-n-section2',
      type: 'text',
      content: `## De seks energiformene

Nå som du vet hva energi er, skal vi se nærmere på de viktigste formene energi kan ha. Vi deler gjerne inn i seks hovedtyper.

Den første er kinetisk energi, altså bevegelsesenergi. Alt som beveger seg har kinetisk energi, enten det er en bil på motorveien, en ball som kastes eller vinden som blåser. Jo raskere noe beveger seg og jo tyngre det er, desto mer kinetisk energi har det. En bil på 1000 kg som kjører i 20 meter per sekund har hele 200 000 joule kinetisk energi.

Den andre er potensiell energi, eller stillingsenergi. Dette er lagret energi som skyldes posisjon. En stein på toppen av et fjell har tyngdepotensiell energi fordi tyngdekraften kan få den til å falle. Jo høyere opp og jo tyngre steinen er, desto mer potensiell energi har den. Det finnes også elastisk potensiell energi, som i en spent bue eller en sammenpresset fjær.

Den tredje er kjemisk energi, som er lagret i kjemiske bindinger mellom atomer. Maten du spiser inneholder kjemisk energi som kroppen bryter ned for å holde seg varm og i bevegelse. Bensin, batterier og ved inneholder også kjemisk energi.

Den fjerde er elektrisk energi, som skyldes bevegelse av elektriske ladninger gjennom ledninger. Det er denne formen som driver alt fra lyset i taket til mobilen i lommen din. Den femte er strålingsernergi, altså elektromagnetisk energi, som forplanter seg som bølger. Sollys, mikrobølger og røntgenstråler er alle eksempler. Den sjette er termisk energi, eller varmeenergi, som skyldes bevegelse av partikler i et stoff. Jo varmere noe er, desto raskere beveger partiklene seg.`,
    },
    {
      id: 'naturfag-10-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på energiformene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-1-n-quiz2-q0',
            task: 'Hvilken energiform har en ball som ruller bortover bakken?',
            options: [
              { id: 'a', text: 'Potensiell energi', isCorrect: false },
              { id: 'b', text: 'Kinetisk energi', isCorrect: true },
              { id: 'c', text: 'Kjemisk energi', isCorrect: false },
              { id: 'd', text: 'Elektrisk energi', isCorrect: false },
            ],
            solution:
              'En ball som beveger seg har kinetisk energi, altså bevegelsesenergi. Jo raskere ballen ruller og jo tyngre den er, desto mer kinetisk energi har den.',
          },
          {
            id: 'naturfag-10-3-1-n-quiz2-q1',
            task: 'Hva slags energi er lagret i et batteri?',
            options: [
              { id: 'a', text: 'Kinetisk energi', isCorrect: false },
              { id: 'b', text: 'Termisk energi', isCorrect: false },
              { id: 'c', text: 'Kjemisk energi', isCorrect: true },
              { id: 'd', text: 'Strålingsernergi', isCorrect: false },
            ],
            solution:
              'Et batteri lagrer kjemisk energi i sine kjemiske bindinger. Når batteriet brukes, omdannes den kjemiske energien til elektrisk energi som kan drive elektroniske apparater.',
          },
          {
            id: 'naturfag-10-3-1-n-quiz2-q2',
            task: 'Hvorfor har en stein på toppen av et fjell mer potensiell energi enn en stein på bakken?',
            options: [
              { id: 'a', text: 'Fordi steinen veier mer høyt oppe', isCorrect: false },
              { id: 'b', text: 'Fordi steinen befinner seg høyere og tyngdekraften kan gjøre mer arbeid', isCorrect: true },
              { id: 'c', text: 'Fordi luften er tynnere på toppen', isCorrect: false },
              { id: 'd', text: 'Fordi steinen har mer kjemisk energi høyt oppe', isCorrect: false },
            ],
            solution:
              'Potensiell energi skyldes posisjon i tyngdefeltet. Jo høyere opp steinen er, desto lenger kan den falle, og desto mer arbeid kan tyngdekraften gjøre på den. Massen til steinen endres ikke med høyden.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-1-n-section3',
      type: 'text',
      content: `## Energi kan omdannes

En av de mest fascinerende tingene med energi er at den hele tiden skifter form. Vi kaller dette energiomforminger, og de skjer overalt rundt oss, hele tiden.

Når du spiser frokost, omdannes kjemisk energi i maten til termisk energi som holder kroppen varm, og til kinetisk energi som lar deg bevege deg. Når du sykler til skolen, omdanner kroppen din kjemisk energi til bevegelsesenergi i beina, som igjen overføres til sykkelen. Solcellepaneler omdanner strålingsernergi fra solen til elektrisk energi. I en lommelykt omdannes kjemisk energi i batteriet til elektrisk energi, og deretter til lys og varme i pæren.

Vi kan tegne energikjeder for å vise disse omformingene. For eksempel, i et vannkraftverk ser kjeden slik ut: Solen varmer opp vann som fordamper og danner skyer. Regnet faller i fjellene, og vannet samles i et magasin høyt oppe, der det har potensiell energi. Når vannet slippes ned, omdannes potensiell energi til kinetisk energi. Vannet treffer turbiner som spinner, og generatorer omdanner bevegelsen til elektrisk energi. Til slutt kan den elektriske energien bli til lys i lyspæren din hjemme.

Legg merke til at i hvert trinn av en slik kjede tapes alltid noe energi som varme. En lyspære omdanner ikke all strømmen til lys; en god del blir til varme. Denne varmen er ikke «borte», men den er spredt og vanskelig å utnytte. Det er derfor vi aldri kan oppnå hundre prosent effektivitet.`,
    },
    {
      id: 'naturfag-10-3-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på energiomforminger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-1-n-quiz3-q0',
            task: 'Hvilken energiomforming skjer i en solcelle?',
            options: [
              { id: 'a', text: 'Kjemisk energi til elektrisk energi', isCorrect: false },
              { id: 'b', text: 'Strålingsernergi til elektrisk energi', isCorrect: true },
              { id: 'c', text: 'Kinetisk energi til elektrisk energi', isCorrect: false },
              { id: 'd', text: 'Termisk energi til elektrisk energi', isCorrect: false },
            ],
            solution:
              'Solceller omdanner strålingsernergi (elektromagnetisk energi) fra solen direkte til elektrisk energi. Det er lyset fra solen som treffer solcellen og setter i gang prosessen.',
          },
          {
            id: 'naturfag-10-3-1-n-quiz3-q1',
            task: 'Hva skjer med energien som «tapes» i en energiomforming?',
            options: [
              { id: 'a', text: 'Den forsvinner helt', isCorrect: false },
              { id: 'b', text: 'Den blir til ingenting', isCorrect: false },
              { id: 'c', text: 'Den omdannes til varme som spres til omgivelsene', isCorrect: true },
              { id: 'd', text: 'Den går tilbake til opprinnelig form', isCorrect: false },
            ],
            solution:
              'Energi forsvinner aldri. Energien som «tapes» omdannes til varme som spres til omgivelsene. Denne varmen er vanskelig å samle opp og bruke igjen, men den finnes fortsatt. Energibevaringsprinsippet gjelder alltid.',
          },
          {
            id: 'naturfag-10-3-1-n-quiz3-q2',
            task: 'Hva er en energikjede?',
            options: [
              { id: 'a', text: 'En type energi som er koblet i serie', isCorrect: false },
              { id: 'b', text: 'En oversikt som viser hvordan energi omdannes gjennom flere trinn', isCorrect: true },
              { id: 'c', text: 'Et apparat som lager energi', isCorrect: false },
              { id: 'd', text: 'En måte å lagre energi på', isCorrect: false },
            ],
            solution:
              'En energikjede viser hvordan energi omdannes fra én form til en annen gjennom flere trinn. For eksempel: kjemisk energi i bensin omdannes til kinetisk energi i bilen, og noe tapes som varme i hvert trinn.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket et av naturfagets aller mest sentrale begreper: energi. Vi har lært at energi er evnen til å utføre arbeid eller forandre noe, og at den måles i joule.

Vi har blitt kjent med seks viktige energiformer. Kinetisk energi er bevegelsesenergi, og alt som beveger seg har den. Potensiell energi er lagret energi som skyldes posisjon, enten det er høyde over bakken eller en spent fjær. Kjemisk energi er lagret i kjemiske bindinger, som i mat, bensin og batterier. Elektrisk energi skyldes bevegelse av ladninger og driver alle de elektroniske apparatene vi omgir oss med. Strålingsernergi forplanter seg som elektromagnetiske bølger, slik som sollys. Termisk energi skyldes bevegelse av partikler og henger sammen med temperatur.

Vi har også oppdaget at energi aldri forsvinner eller skapes fra ingenting. Den omdannes bare fra én form til en annen, noe vi kan visualisere gjennom energikjeder. I hvert omformingstrinn tapes noe energi som varme til omgivelsene, noe som betyr at vi aldri kan oppnå hundre prosent effektivitet. Denne forståelsen av energi er grunnlaget for alt vi skal lære videre om fysikk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2 NARRATIV: Energibevaring og kvalitet
// ============================================================================

export const CHAPTER_NATURFAG_10_3_2_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-3-2-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '3.2',
  title: 'Energibevaring og kvalitet',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hvorfor energi aldri kan forsvinne, hva som gjør noen energiformer mer nyttige enn andre, og hvordan virkningsgrad avgjør hvor effektive maskinene våre egentlig er.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forklare energibevaring og energioverføringer',
    'beregne virkningsgrad i energiomforminger',
    'drøfte energikvalitet og energisparing',
  ],
  linkedChapterId: 'naturfag-10-3-2',
  content: [
    {
      id: 'naturfag-10-3-2-n-intro',
      type: 'text',
      content: `## Energi forsvinner aldri

Her er et spørsmål som kanskje virker enkelt, men som rommer noe dypt: Hvis du slipper en ball fra to meters høyde, spretter den opp igjen, men ikke helt opp til to meter. Så spretter den litt lavere. Og litt lavere. Og til slutt ligger den stille på bakken. Hvis energi ikke kan forsvinne, hvor ble det av all energien ballen hadde?

Svaret er at energien ikke forsvant. Den ble omdannet. Hver gang ballen traff bakken, ble noe av bevegeleseenergien til varme og lyd. Du kunne kanskje høre et lite dunk for hvert sprett. Og hvis du kunne måle temperaturen nøyaktig nok, ville du oppdaget at ballen og bakken ble litt, litt varmere. All energien er fortsatt der, bare i en annen form.

Dette er kjernen i energibevaringsprinsippet, som også kalles termodynamikkens første lov: Energi kan ikke skapes eller ødelegges, bare omdannes fra én form til en annen. I dette kapittelet skal vi utforske dette prinsippet grundigere, forstå hva energikvalitet betyr, og lære å beregne virkningsgrad. Du vil aldri se på energi på samme måte igjen.`,
    },
    {
      id: 'naturfag-10-3-2-n-section1',
      type: 'text',
      content: `## Energibevaringsprinsippet i praksis

La oss se på noen eksempler som viser energibevaring i aksjon. Tenk deg at du står på toppen av en rutsjebane. Der oppe har du potensiell energi fordi du er høyt over bakken. I det du begynner å gli nedover, omdannes den potensielle energien gradvis til kinetisk energi. Farten øker, og nederst er nesten all potensiell energi blitt til bevegelsesenergi. Men noe av energien ble også til varme på grunn av friksjon mellom kroppen din og rutsjebanen. Legger du sammen kinetisk energi, potensiell energi og varmeenergi, får du nøyaktig det samme som du startet med.

I et lukket system, altså et system der ingen energi kommer inn eller ut, er den totale mengden energi alltid konstant. I praksis er de fleste systemer åpne, noe som betyr at energi kan komme inn eller gå ut. En panne på komfyren er et åpent system fordi varme tilføres fra platen. Men energiprinsippet gjelder fortsatt: All energi som tilføres pannen ender opp som varme i vannet, varme i pannen selv, og varme som stråles ut til luften.

Vi kan følge energien gjennom hele kjeder. Fra solen til planten gjennom fotosyntese, fra planten til maten på tallerkenen, fra maten til kroppen din, og fra kroppen din til sykkelpedalene. I hvert trinn omdannes energien, og i hvert trinn tapes noe som varme. Men det totale regnestykket går alltid opp.`,
    },
    {
      id: 'naturfag-10-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på energibevaring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-2-n-quiz1-q0',
            task: 'En ball spretter stadig lavere og stopper til slutt. Hva skjedde med bevegelesenergien?',
            options: [
              { id: 'a', text: 'Den forsvant ut i verdensrommet', isCorrect: false },
              { id: 'b', text: 'Den ble omdannet til varme og lyd', isCorrect: true },
              { id: 'c', text: 'Den ble ødelagt av tyngdekraften', isCorrect: false },
              { id: 'd', text: 'Den ble lagret inne i ballen for alltid', isCorrect: false },
            ],
            solution:
              'Energibevaringsprinsippet sier at energi aldri forsvinner. Bevegelesenergien ble omdannet til varme (ballen og bakken ble litt varmere) og lyd (du hørte dunk) for hvert sprett. Den totale energimengden er den samme, bare i andre former.',
          },
          {
            id: 'naturfag-10-3-2-n-quiz1-q1',
            task: 'Hva er et lukket system?',
            options: [
              { id: 'a', text: 'Et system der ingen energi kommer inn eller ut', isCorrect: true },
              { id: 'b', text: 'Et system der alt er forseglet i en boks', isCorrect: false },
              { id: 'c', text: 'Et system som ikke inneholder energi', isCorrect: false },
              { id: 'd', text: 'Et system der energien bare kan gå én vei', isCorrect: false },
            ],
            solution:
              'Et lukket system er et system der ingen energi kommer inn eller ut. I et slikt system er den totale energimengden konstant. I praksis er de fleste systemer åpne, men energiprinsippet gjelder uansett så lenge vi tar med all energi som kommer inn og ut.',
          },
          {
            id: 'naturfag-10-3-2-n-quiz1-q2',
            task: 'På toppen av en rutsjebane har du mest potensiell energi. Hva har du mest av nederst?',
            options: [
              { id: 'a', text: 'Potensiell energi', isCorrect: false },
              { id: 'b', text: 'Kjemisk energi', isCorrect: false },
              { id: 'c', text: 'Kinetisk energi', isCorrect: true },
              { id: 'd', text: 'Elektrisk energi', isCorrect: false },
            ],
            solution:
              'Nederst i rutsjebanen er nesten all den potensielle energien omdannet til kinetisk energi (bevegelsesenergi). Du har høy fart og er nær bakken. Noe energi har også blitt til varme gjennom friksjon.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-2-n-section2',
      type: 'text',
      content: `## Energikvalitet og entropi

Her kommer en innsikt som kanskje overrasker deg: Selv om energi ikke kan forsvinne, er ikke all energi like nyttig. Vi snakker om energikvalitet.

Høykvalitetsenergi er energi som er konsentrert og lett å omdanne til andre former. Elektrisk energi er et godt eksempel. Den kan enkelt bli lys, bevegelse, varme eller lyd. Kjemisk energi i et batteri eller i bensin er også høykvalitetsenergi. Den er samlet på ett sted og kan utnyttes effektivt.

Lavkvalitetsenergi, derimot, er energi som er spredt og vanskelig å utnytte. Varme ved lav temperatur er det klassiske eksempelet. Tenk på varmen som spres fra en bilmotor til luften rundt. Den energien finnes fortsatt, men den er fordelt over et så stort volum med så lav temperatur at det er praktisk umulig å samle den opp og bruke den til noe nyttig.

I fysikken bruker vi begrepet entropi for å beskrive dette. Høy entropi betyr at energien er spredt og uordnet, altså lav kvalitet. Lav entropi betyr at energien er konsentrert og organisert, altså høy kvalitet. Termodynamikkens andre lov sier at entropien i universet alltid øker. Det betyr at energikvaliteten gradvis synker over tid. Hver gang vi omdanner energi, blir noe av den til lavkvalitets varme som spres til omgivelsene. Det er derfor vi aldri kan lage en maskin med hundre prosent virkningsgrad.`,
    },
    {
      id: 'naturfag-10-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på energikvalitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-2-n-quiz2-q0',
            task: 'Hvilken energiform regnes som høy kvalitet?',
            options: [
              { id: 'a', text: 'Varme spredt i luften', isCorrect: false },
              { id: 'b', text: 'Elektrisk energi', isCorrect: true },
              { id: 'c', text: 'Lav-temperatur varme i bakken', isCorrect: false },
              { id: 'd', text: 'Lydenergi fra trafikk', isCorrect: false },
            ],
            solution:
              'Elektrisk energi er høykvalitetsenergi fordi den er konsentrert og lett kan omdannes til mange andre former: lys, bevegelse, varme og lyd. Varme ved lav temperatur er derimot lavkvalitetsenergi fordi den er spredt og vanskelig å utnytte.',
          },
          {
            id: 'naturfag-10-3-2-n-quiz2-q1',
            task: 'Hva sier termodynamikkens andre lov?',
            options: [
              { id: 'a', text: 'Energi kan skapes fra ingenting', isCorrect: false },
              { id: 'b', text: 'Entropien i universet øker alltid', isCorrect: true },
              { id: 'c', text: 'Varme kan aldri overføres mellom gjenstander', isCorrect: false },
              { id: 'd', text: 'Energi må alltid bli til lys til slutt', isCorrect: false },
            ],
            solution:
              'Termodynamikkens andre lov sier at entropien, altså uordenheten, i universet alltid øker. Energi går fra konsentrert og nyttig form til spredt og mindre nyttig form. Det er derfor energikvaliteten gradvis synker ved hver omforming.',
          },
          {
            id: 'naturfag-10-3-2-n-quiz2-q2',
            task: 'Hvorfor kan vi aldri lage en maskin med 100 % virkningsgrad?',
            options: [
              { id: 'a', text: 'Fordi det alltid mangler deler', isCorrect: false },
              { id: 'b', text: 'Fordi noe energi alltid omdannes til ubrukelig varme', isCorrect: true },
              { id: 'c', text: 'Fordi maskiner alltid lager for mye lyd', isCorrect: false },
              { id: 'd', text: 'Fordi energi forsvinner i prosessen', isCorrect: false },
            ],
            solution:
              'Friksjon, luftmotstand og elektrisk motstand gjør at noe energi alltid omdannes til varme som spres til omgivelsene. Denne varmen kan ikke samles opp og brukes videre. Termodynamikkens andre lov gjør det umulig å unngå dette fullstendig.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-2-n-section3',
      type: 'text',
      content: `## Virkningsgrad og energisparing

Nå som vi forstår at energi alltid tapes som varme, trenger vi et verktøy for å måle hvor effektiv en energiomforming er. Det verktøyet kalles virkningsgrad.

Virkningsgrad beregnes ved å dele nyttig energi ut på total energi inn, og gange med hundre prosent. Formelen er: virkningsgrad er lik nyttig energi ut delt på total energi inn, ganger hundre prosent. Symbolet for virkningsgrad er den greske bokstaven eta. En gammel glødelampe har en virkningsgrad på bare 5 prosent fordi hele 95 prosent av strømmen blir til varme i stedet for lys. En moderne LED-pære derimot kan ha en virkningsgrad på 80 til 90 prosent. Vannkraftverk ligger på 85 til 90 prosent, elektriske motorer på 80 til 95 prosent, mens en bilmotor som går på bensin bare oppnår 25 til 30 prosent.

I en energikjede med flere trinn multipliserer vi virkningsgradene. Hvis et kullkraftverk har fire trinn med virkningsgrad 90, 50, 95 og 92 prosent, blir den totale virkningsgraden bare omtrent 39 prosent. Over 60 prosent av energien i kullet går tapt som varme.

Fordi energiproduksjon ofte forurenser og ressursene er begrensede, er energisparing viktig. Vi kan spare energi ved å bruke mer effektive apparater, som å bytte glødelamper med LED. Vi kan isolere bygninger bedre for å redusere varmetap. Vi kan slå av elektronikk som står på standby. Og vi kan bruke fornybare energikilder som sol, vind og vann. Energimerking fra A til G hjelper oss å velge de mest effektive produktene.`,
    },
    {
      id: 'naturfag-10-3-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på virkningsgrad:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-2-n-quiz3-q0',
            task: 'En maskin tilføres 500 J energi og gir 400 J nyttig energi. Hva er virkningsgraden?',
            options: [
              { id: 'a', text: '40 %', isCorrect: false },
              { id: 'b', text: '80 %', isCorrect: true },
              { id: 'c', text: '100 %', isCorrect: false },
              { id: 'd', text: '20 %', isCorrect: false },
            ],
            solution:
              'Virkningsgrad = (nyttig energi ut / total energi inn) ganger 100 %. Det gir (400 / 500) ganger 100 % = 80 %. De resterende 100 J (20 %) tapes som varme.',
          },
          {
            id: 'naturfag-10-3-2-n-quiz3-q1',
            task: 'Hvorfor er LED-pærer mye bedre enn glødelamper?',
            options: [
              { id: 'a', text: 'Fordi de lager sterkere lys', isCorrect: false },
              { id: 'b', text: 'Fordi de har mye høyere virkningsgrad', isCorrect: true },
              { id: 'c', text: 'Fordi de aldri blir varme', isCorrect: false },
              { id: 'd', text: 'Fordi de bruker en annen type strøm', isCorrect: false },
            ],
            solution:
              'LED-pærer har en virkningsgrad på 80-90 %, mens glødelamper bare har ca. 5 %. Det betyr at LED bruker mye mindre strøm for å gi like mye lys, fordi nesten all energien blir til lys i stedet for varme.',
          },
          {
            id: 'naturfag-10-3-2-n-quiz3-q2',
            task: 'Hva skjer med total virkningsgrad når energi omdannes gjennom mange trinn?',
            options: [
              { id: 'a', text: 'Den øker for hvert trinn', isCorrect: false },
              { id: 'b', text: 'Den holder seg lik', isCorrect: false },
              { id: 'c', text: 'Den synker fordi virkningsgradene multipliseres', isCorrect: true },
              { id: 'd', text: 'Den blir alltid null til slutt', isCorrect: false },
            ],
            solution:
              'Når energi omdannes gjennom flere trinn, multipliseres virkningsgradene. For eksempel gir 0,90 ganger 0,50 ganger 0,95 ganger 0,92 en total virkningsgrad på bare ca. 39 %. Jo flere trinn, desto lavere blir den totale virkningsgraden.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi fordypet oss i energibevaringsprinsippet, som sier at energi aldri kan skapes eller ødelegges, bare omdannes fra én form til en annen. Den totale mengden energi i et lukket system er alltid konstant. Vi har sett dette i praksis gjennom eksempler som sprettende baller, rutsjebaner og energikjeder fra sol til lyspære.

Vi har lært om energikvalitet og forstått at ikke all energi er like nyttig. Høykvalitetsenergi som elektrisk energi og kjemisk energi er konsentrert og lett å utnytte, mens lavkvalitetsenergi som spredt varme er vanskelig å bruke til noe nyttig. Entropi, eller uorden, øker alltid, og det er grunnen til at energikvaliteten synker for hver omforming.

Vi har lært å beregne virkningsgrad, som forteller oss hvor mye av den tilførte energien som blir nyttig. En glødelampe har bare 5 prosent virkningsgrad, mens en LED-pære kan oppnå 80 til 90 prosent. I energikjeder med flere trinn multipliseres virkningsgradene, og den totale effektiviteten kan bli overraskende lav.

Til slutt har vi sett hvorfor energisparing er viktig: Energiproduksjon forurenser, ressurser er begrensede, og ved å velge effektive løsninger kan vi redusere både kostnader og miljøpåvirkning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3 NARRATIV: Elektrisitet og strømkretser
// ============================================================================

export const CHAPTER_NATURFAG_10_3_3_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-3-3-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '3.3',
  title: 'Elektrisitet og strømkretser',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hva som egentlig skjer når du slår på lyset, lær om strøm, spenning og motstand, mestre Ohms lov, og oppdag forskjellen på serie- og parallellkoblinger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare hvordan energi kan overføres og omformes',
    'utforske og beskrive hvordan elektrisk energi produseres og distribueres',
  ],
  linkedChapterId: 'naturfag-10-3-3',
  content: [
    {
      id: 'naturfag-10-3-3-n-intro',
      type: 'text',
      content: `## Den usynlige kraften i veggene

Akkurat nå er du sannsynligvis omgitt av elektrisitet. Lyset i taket. Mobilen i lommen. Kjøleskapet som brummer svakt på kjøkkenet. Datamaskinen, laderen, viften, komfyren. Vi er så vant til elektrisitet at vi knapt tenker over den, helt til strømmen går og alt stopper.

Men hva er egentlig elektrisitet? Hvordan klarer de bittesmå elektronene å bevege seg gjennom tynne kobberledninger og drive alt fra små ørepropper til enorme fabrikker? Og hvorfor er det så farlig å stikke fingrene i stikkontakten?

I dette kapittelet skal vi pakke ut elektrisitetens hemmeligheter. Vi begynner med å forstå hva elektrisk strøm er, og deretter utforsker vi de tre viktigste størrelsene: strøm, spenning og motstand. Vi lærer Ohms lov, som er den viktigste sammenhengen i all elektrisitet. Vi ser på hvordan strømkretser fungerer, og vi sammenligner seriekobling og parallellkobling. Til slutt tar vi en viktig gjennomgang av sikkerhet, for elektrisitet fortjener respekt.`,
    },
    {
      id: 'naturfag-10-3-3-n-section1',
      type: 'text',
      content: `## Elektroner i bevegelse

For å forstå elektrisitet må vi tilbake til atomet. Du husker kanskje at atomer består av protoner, nøytroner og elektroner. Elektronene, de negativt ladede partiklene, suser rundt atomkjernen. I de fleste stoffer sitter elektronene fast, men i metaller som kobber kan noen elektroner bevege seg fritt mellom atomene. Disse frie elektronene er nøkkelen til elektrisitet.

Elektrisk strøm er ganske enkelt bevegelse av elektriske ladninger, vanligvis elektroner, gjennom en leder. Du kan tenke på det som vann i et rør: Ledningen er røret, elektronene er vannet, og strømmens styrke er hvor mye vann som flyter forbi per sekund.

Strøm måles i ampere (A). Én ampere betyr at en veldig stor mengde elektroner passerer et punkt hvert sekund. For å gi deg en følelse av størrelsesorden: En lommelykt bruker omtrent 0,5 ampere, en mobillader 1 til 2 ampere, og en hårtørker rundt 10 ampere.

Men elektronene beveger seg ikke av seg selv. De trenger et «dytt», og det dyttet kalles spenning. Spenning måles i volt (V) og kan sammenlignes med vanntrykket i et rør. Jo høyere spenning, desto hardere drives elektronene gjennom ledningen. Et vanlig AA-batteri gir 1,5 volt, en USB-lader gir 5 volt, og stikkontakten hjemme gir hele 230 volt. Høyspentledninger kan ha spenninger på opptil 420 000 volt.

Stoffer som bremser elektronenes bevegelse har elektrisk motstand, som måles i ohm. Metaller har lav motstand og er gode ledere. Plast og gummi har svært høy motstand og er isolatorer.`,
    },
    {
      id: 'naturfag-10-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på elektrisitetens grunnlag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-3-n-quiz1-q0',
            task: 'Hva er elektrisk strøm?',
            options: [
              { id: 'a', text: 'Bevegelse av protoner gjennom en ledning', isCorrect: false },
              { id: 'b', text: 'Bevegelse av elektriske ladninger gjennom en leder', isCorrect: true },
              { id: 'c', text: 'Energi som lagres i et batteri', isCorrect: false },
              { id: 'd', text: 'Lys som sendes gjennom en kabel', isCorrect: false },
            ],
            solution:
              'Elektrisk strøm er bevegelse av elektriske ladninger, vanligvis elektroner, gjennom en leder som en kobbertråd. Jo flere elektroner som passerer per sekund, desto sterkere er strømmen.',
          },
          {
            id: 'naturfag-10-3-3-n-quiz1-q1',
            task: 'Hva måles spenning i?',
            options: [
              { id: 'a', text: 'Ampere (A)', isCorrect: false },
              { id: 'b', text: 'Ohm (Ω)', isCorrect: false },
              { id: 'c', text: 'Volt (V)', isCorrect: true },
              { id: 'd', text: 'Joule (J)', isCorrect: false },
            ],
            solution:
              'Spenning måles i volt (V), oppkalt etter Alessandro Volta. Spenning er «trykket» som driver elektronene gjennom ledningen. En norsk stikkontakt har 230 V spenning.',
          },
          {
            id: 'naturfag-10-3-3-n-quiz1-q2',
            task: 'Hvorfor er kobber en god leder, mens gummi er en isolator?',
            options: [
              { id: 'a', text: 'Fordi kobber er varmere enn gummi', isCorrect: false },
              { id: 'b', text: 'Fordi kobber har lav motstand og gummi har svært høy motstand', isCorrect: true },
              { id: 'c', text: 'Fordi kobber inneholder mer energi', isCorrect: false },
              { id: 'd', text: 'Fordi gummi er hardere enn kobber', isCorrect: false },
            ],
            solution:
              'I kobber kan elektroner bevege seg fritt mellom atomene, noe som gir lav motstand. I gummi sitter elektronene fast og kan ikke bevege seg, noe som gir svært høy motstand. Det er motstanden som avgjør om et stoff er en leder eller en isolator.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-3-n-section2',
      type: 'text',
      content: `## Ohms lov: Elektrisitetens viktigste formel

Nå som du kjenner de tre grunnstørrelsene, strøm (I), spenning (U) og motstand (R), er det på tide å lære sammenhengen mellom dem. Den kalles Ohms lov og er oppkalt etter den tyske fysikeren Georg Ohm.

Ohms lov sier ganske enkelt at spenning er lik motstand ganger strøm, altså U er lik R ganger I. La oss bryte det ned. Hvis du øker spenningen over en komponent og motstanden er den samme, øker strømmen. Det er logisk: Mer «trykk» gir mer «flyt». Omvendt, hvis du øker motstanden og spenningen er den samme, synker strømmen. Mer motstand betyr at elektronene har vanskeligere for å komme gjennom.

Du kan skrive formelen på tre måter avhengig av hva du leter etter. For å finne spenningen: U er lik R ganger I. For å finne strømmen: I er lik U delt på R. For å finne motstanden: R er lik U delt på I. Mange bruker UIR-trekanten som huskeregel. Tegn U øverst og R og I nederst, og dekk til det du leter etter for å se formelen.

La oss ta et eksempel. En lyspære er koblet til et 12 volt batteri, og lyspæren har en motstand på 6 ohm. For å finne strømmen bruker vi formelen I er lik U delt på R, altså 12 delt på 6, som gir 2 ampere. Vi kan kontrollere svaret: U er lik R ganger I gir 6 ganger 2, som er 12 volt. Det stemmer.`,
    },
    {
      id: 'naturfag-10-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på Ohms lov:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-3-n-quiz2-q0',
            task: 'Hva sier Ohms lov?',
            options: [
              { id: 'a', text: 'U = I + R', isCorrect: false },
              { id: 'b', text: 'U = R · I', isCorrect: true },
              { id: 'c', text: 'U = R / I', isCorrect: false },
              { id: 'd', text: 'U = I / R', isCorrect: false },
            ],
            solution:
              'Ohms lov sier at spenning (U) er lik motstand (R) ganger strøm (I). Formelen kan også skrives om til I = U/R for å finne strømmen, eller R = U/I for å finne motstanden.',
          },
          {
            id: 'naturfag-10-3-3-n-quiz2-q1',
            task: 'Spenningen over en motstand er 24 V og motstanden er 8 Ω. Hvor stor er strømmen?',
            options: [
              { id: 'a', text: '192 A', isCorrect: false },
              { id: 'b', text: '16 A', isCorrect: false },
              { id: 'c', text: '3 A', isCorrect: true },
              { id: 'd', text: '32 A', isCorrect: false },
            ],
            solution:
              'Vi bruker Ohms lov: I = U / R = 24 V / 8 Ω = 3 A. Strømmen som går gjennom motstanden er 3 ampere.',
          },
          {
            id: 'naturfag-10-3-3-n-quiz2-q2',
            task: 'Hva skjer med strømmen hvis du dobler motstanden, men spenningen er den samme?',
            options: [
              { id: 'a', text: 'Strømmen dobles', isCorrect: false },
              { id: 'b', text: 'Strømmen halveres', isCorrect: true },
              { id: 'c', text: 'Strømmen forblir den samme', isCorrect: false },
              { id: 'd', text: 'Strømmen blir null', isCorrect: false },
            ],
            solution:
              'Ifølge Ohms lov er I = U / R. Hvis R dobles mens U er konstant, blir I halvparten så stor. Mer motstand betyr at elektronene har vanskeligere for å komme gjennom, og strømmen synker.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-3-n-section3',
      type: 'text',
      content: `## Strømkretser: Serie og parallell

For at strøm skal kunne gå, trenger den en lukket bane, altså en strømkrets. En enkel strømkrets består av en strømkilde som et batteri, ledninger, en forbruker som en lyspære, og gjerne en bryter. Hvis kretsen er lukket, altså bryteren er på og alt henger sammen, kan strømmen flyte. Hvis kretsen er åpen, stopper alt.

Det finnes to grunnleggende måter å koble komponenter sammen på: serie og parallell.

I en seriekobling er komponentene koblet på rekke, én etter én, slik at strømmen må gå gjennom alle. Strømmen er lik overalt i en seriekrets, spenningen fra batteriet fordeles mellom komponentene, og motstandene legges sammen. Ulempen er åpenbar: Hvis én lyspære ryker i en seriekrets, stopper strømmen og alle lampene slukker. Gamle julelys fungerte slik, og det kunne være ganske frustrerende.

I en parallellkobling er komponentene koblet side om side, slik at hver komponent har sin egen sti til strømkilden. Her er spenningen lik over alle komponentene, mens strømmen deles mellom dem. Den store fordelen er at hvis én lyspære ryker, fungerer de andre fortsatt fordi de har sine egne stier. Hjemme er alle stikkontakter og lyspunkter koblet parallelt, nettopp av denne grunnen.

Det er også viktig å kjenne til elektrisk sikkerhet. Sikringer beskytter mot for høy strøm ved å bryte kretsen automatisk. Jording kobler metalldeler til jorda, slik at feilstrøm ledes trygt bort i stedet for gjennom deg. Husk: Bruk aldri elektriske apparater med våte hender, og rør aldri ved ødelagte ledninger.`,
    },
    {
      id: 'naturfag-10-3-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-3-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på strømkretser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-3-3-n-quiz3-q0',
            task: 'Hva skjer i en seriekrets hvis én lyspære ryker?',
            options: [
              { id: 'a', text: 'Bare den ene pæren slukker', isCorrect: false },
              { id: 'b', text: 'Alle pærene slukker', isCorrect: true },
              { id: 'c', text: 'De andre pærene lyser sterkere', isCorrect: false },
              { id: 'd', text: 'Batteriet lader seg opp', isCorrect: false },
            ],
            solution:
              'I en seriekrets er alle komponentene på samme sti. Hvis én pære ryker, brytes kretsen og strømmen stopper. Dermed slukker alle pærene. Det er nettopp denne svakheten som gjør at vi bruker parallellkobling hjemme.',
          },
          {
            id: 'naturfag-10-3-3-n-quiz3-q1',
            task: 'Tre motstander på 2 Ω, 3 Ω og 5 Ω er koblet i serie. Hva er total motstand?',
            options: [
              { id: 'a', text: '1 Ω', isCorrect: false },
              { id: 'b', text: '5 Ω', isCorrect: false },
              { id: 'c', text: '10 Ω', isCorrect: true },
              { id: 'd', text: '30 Ω', isCorrect: false },
            ],
            solution:
              'I en seriekobling legges motstandene sammen: R_total = R₁ + R₂ + R₃ = 2 + 3 + 5 = 10 Ω. Jo flere motstander i serie, desto høyere blir den totale motstanden.',
          },
          {
            id: 'naturfag-10-3-3-n-quiz3-q2',
            task: 'Hva er den største fordelen med parallellkobling i hjemmet?',
            options: [
              { id: 'a', text: 'Det bruker mindre strøm totalt', isCorrect: false },
              { id: 'b', text: 'Det er billigere å installere', isCorrect: false },
              { id: 'c', text: 'Hvis én komponent svikter, fungerer resten fortsatt', isCorrect: true },
              { id: 'd', text: 'Det gir høyere spenning til hver komponent', isCorrect: false },
            ],
            solution:
              'I en parallellkrets har hver komponent sin egen sti til strømkilden. Hvis én lyspære ryker eller én stikkontakt er ledig, påvirker det ikke de andre. Alle får full spenning og fungerer uavhengig av hverandre.',
          },
          {
            id: 'naturfag-10-3-3-n-quiz3-q3',
            task: 'Hva er formålet med en sikring i en strømkrets?',
            options: [
              { id: 'a', text: 'Å øke spenningen', isCorrect: false },
              { id: 'b', text: 'Å lagre strøm til senere bruk', isCorrect: false },
              { id: 'c', text: 'Å bryte kretsen hvis strømmen blir for høy', isCorrect: true },
              { id: 'd', text: 'Å gjøre strømmen sterkere', isCorrect: false },
            ],
            solution:
              'En sikring er en sikkerhetsinnretning som bryter kretsen automatisk hvis strømmen blir for høy. Den beskytter mot overoppheting og brann. I moderne hus brukes automatsikringer som kan slås på igjen etter at feilen er rettet.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket elektrisitetens verden, fra de minste elektronene til de store strømkretsene i hjemmet ditt.

Vi har lært at elektrisk strøm er bevegelse av ladninger, vanligvis elektroner, gjennom en leder. Strøm måles i ampere og forteller oss hvor mye ladning som passerer per sekund. Spenning måles i volt og er «trykket» som driver elektronene gjennom ledningen. Motstand måles i ohm og beskriver hvor mye et materiale bremser strømmen.

Vi har mestret Ohms lov, som sier at spenning er lik motstand ganger strøm. Med denne enkle formelen kan vi beregne hva som helst i en strømkrets, enten det er strømmen gjennom en lyspære, spenningen over en motstand, eller motstanden i en leder.

Vi har sammenlignet seriekobling, der alle komponentene deler samme sti og alt stopper hvis én del svikter, med parallellkobling, der hver komponent har sin egen sti og fungerer uavhengig av de andre. Hjemme brukes parallellkobling for å sikre at alt fungerer selv om én lyspære ryker.

Til slutt har vi tatt for oss sikkerhet. Sikringer bryter kretsen ved for høy strøm, jording leder feilstrøm trygt til bakken, og enkle forholdsregler som å unngå våte hender og ødelagte ledninger kan redde liv.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle narrative kapitler i DEL 3A
// ============================================================================

export const NATURFAG_10_NARRATIV_DEL3A_CHAPTERS = [
  CHAPTER_NATURFAG_10_3_1_NARRATIV,
  CHAPTER_NATURFAG_10_3_2_NARRATIV,
  CHAPTER_NATURFAG_10_3_3_NARRATIV,
];
