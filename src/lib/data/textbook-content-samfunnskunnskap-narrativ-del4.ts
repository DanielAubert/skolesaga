/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1 NARRATIV: Hva er demokrati?
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_4_1_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-4-1-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.1',
  title: 'Hva er demokrati?',
  subtitle: 'Narrativ versjon',
  description:
    'En engasjerende reise inn i demokratiets verden -- hva folkestyre egentlig betyr, hvilke verdier det bygger paa, og hvorfor det angaar deg.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drofte hva som kjennetegner et demokratisk samfunn',
    'reflektere over demokratiske verdier og prinsipper',
  ],
  linkedChapterId: 'samfunnskunnskap-4-1',
  content: [
    {
      id: 'samfunnskunnskap-4-1-n-intro',
      type: 'text',
      content: `## Tenk deg et land uten folkestyre

Forestill deg at du vaakner opp i et land der en liten gruppe mennesker bestemmer alt. De bestemmer hva du faar lov til aa si, hva du faar lov til aa lese, og hvilke organisasjoner du kan vaere med i. Dersom du kritiserer dem offentlig, risikerer du aa bli arrestert. Det finnes ingen valg, og ingen mulighet til aa skifte ut de som styrer.

Hoeres det ut som en fjern virkelighet? For millioner av mennesker rundt i verden er det nettopp slik hverdagen ser ut. Og historisk sett er det faktisk demokrati som er unntaket -- ikke autoritaert styre. I mesteparten av menneskehetens historie har folket ikke hatt noe aa si over hvem som styrer dem.

Saa hva er egentlig **demokrati**? Ordet kommer fra gresk: *demos* betyr folk, og *kratos* betyr styre. Demokrati betyr altsaa folkestyre. Men det rommer saa mye mer enn bare et ord. Det er en styreform der folket har makt til aa bestemme hvem som skal styre og hvilke beslutninger som skal tas. Og det er et sett med verdier og prinsipper som gjennomsyrer hele samfunnet.

Grunnideen er enkel, men kraftfull: Alle mennesker er likeverdige. Makten tilhorer folket. Flertallet bestemmer, men mindretallet har rettigheter som ikke kan stemmes bort. Og alle har rett til aa delta i beslutninger som angaar dem.

Hvorfor er dette viktig? Demokratiet sikrer frihet og rettigheter. Det gir legitimitet til de beslutningene som tas -- fordi folket selv har vaert med paa aa ta dem. Det muliggjor fredelig maktskifte, slik at vi kan bytte ut ledere vi er misfornoeyde med uten revolusjon. Og det beskytter mot maktmisbruk, fordi makten er spredt og kontrollert.`,
    },
    {
      id: 'samfunnskunnskap-4-1-n-section1',
      type: 'text',
      content: `## Kjennetegnene paa et demokrati

Hva er det som faktisk skiller et demokratisk samfunn fra et som ikke er det? Det finnes en rekke kjennetegn som maa vaere til stede for at vi kan kalle noe et ekte demokrati.

Det foerste og kanskje mest apenbare er **frie og rettferdige valg**. I et demokrati holdes det regelmessige valg der alle voksne borgere kan stemme. Flere partier kan stille, og valget er hemmelig -- slik at ingen kan tvinges til aa stemme paa en bestemt maate.

Men valg alene er ikke nok. Et land kan holde valg og likevel vaere alt annet enn demokratisk. Det som ogsaa maa til, er **ytringsfrihet** -- friheten til aa uttrykke meninger, kritisere makthaverne og debattere uten frykt for straff. Tenk paa det: Hvis du ikke faar lov til aa kritisere de som styrer, hva er da vitsen med aa ha valg?

Taett knyttet til ytringsfriheten finner vi **organisasjonsfriheten** -- retten til aa danne og delta i politiske partier, fagforeninger og andre organisasjoner. Og **pressefrihet** -- frie, uavhengige medier som kan overvake makten og informere borgerne om hva som foregaar.

Saa har vi **rettssikkerhet**. I et demokrati gjelder lovene for alle -- ogsaa for de som styrer. Uavhengige domstoler beskytter borgernes rettigheter, og ingen staar over loven.

**Maktfordeling** er et annet viktig prinsipp. Makten er delt mellom ulike institusjoner som holder hverandre i sjakk. Vi skal se naermere paa dette i neste kapittel, men kjernen er at ingen enkeltperson eller gruppe faar samle all makt.

Og til slutt: **mindretallets rettigheter**. Selv om flertallet bestemmer, har mindretallet grunnleggende rettigheter som ikke kan stemmes bort. Dette er kanskje det mest krevende prinsippet i et demokrati. Tenk deg at 51 prosent av befolkningen stemmer for aa ta fra de resterende 49 prosentene en grunnleggende rettighet. Er det demokratisk? Nei -- fordi ekte demokrati betyr at visse rettigheter er ukrenkelige, uansett hva flertallet maatte mene.`,
    },
    {
      id: 'samfunnskunnskap-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-1-n-quiz1-q0',
            task: 'Hva betyr ordet demokrati?',
            options: [
              { id: 'a', text: 'Frihet for alle', isCorrect: false },
              { id: 'b', text: 'Folkestyre', isCorrect: true },
              { id: 'c', text: 'Rettferdig samfunn', isCorrect: false },
              { id: 'd', text: 'Likhet for loven', isCorrect: false },
            ],
            solution:
              'Demokrati kommer fra de greske ordene demos (folk) og kratos (styre), og betyr altsaa folkestyre -- en styreform der folket har makt til aa bestemme.',
          },
          {
            id: 'samfunnskunnskap-4-1-n-quiz1-q1',
            task: 'Hvorfor er mindretallets rettigheter viktig i et demokrati?',
            options: [
              { id: 'a', text: 'Fordi mindretallet alltid har rett', isCorrect: false },
              { id: 'b', text: 'Fordi det hindrer flertallet i aa undertrykke andre og beskytter grunnleggende rettigheter', isCorrect: true },
              { id: 'c', text: 'Fordi mindretallet betaler mest skatt', isCorrect: false },
              { id: 'd', text: 'Fordi det staar i FN-pakten', isCorrect: false },
            ],
            solution:
              'Mindretallsvern hindrer det som kalles "flertallets tyranni". Menneskerettigheter gjelder alle uansett flertall, og mindretallet i dag kan bli flertall i morgen. Det sikrer ogsaa fri debatt og opposisjon.',
          },
          {
            id: 'samfunnskunnskap-4-1-n-quiz1-q2',
            task: 'Hvilket av disse er IKKE et kjennetegn paa et demokrati?',
            options: [
              { id: 'a', text: 'Pressefrihet', isCorrect: false },
              { id: 'b', text: 'Maktfordeling', isCorrect: false },
              { id: 'c', text: 'At alle er enige om alle beslutninger', isCorrect: true },
              { id: 'd', text: 'Rettssikkerhet', isCorrect: false },
            ],
            solution:
              'I et demokrati er det fullt mulig -- og oensket -- at folk er uenige. Det er nettopp retten til aa vaere uenig, debattere og kritisere som kjennetegner et demokrati. Enighet er ikke et krav, men respekt for spillereglene er det.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-1-n-section2',
      type: 'text',
      content: `## Ulike former for demokrati

Demokrati er ikke ett enkelt system -- det finnes mange ulike maater aa organisere folkestyre paa. La oss utforske de viktigste.

I et **direkte demokrati** stemmer folket direkte over saker, for eksempel gjennom folkeavstemninger. Det er den reneste formen for folkestyre -- folket bestemmer selv, uten mellomledd. I antikkens Athen samlet borgerne seg paa torget og stemte over lover og beslutninger. I dag praktiseres direkte demokrati i liten skala, mest kjent i Sveits, der innbyggerne regelmessig stemmer over konkrete saker.

Men i et land med millioner av innbyggere er det upraktisk at alle skal stemme over alt. Derfor har de fleste land et **representativt demokrati** -- ogsaa kalt indirekte demokrati. Her velger folket representanter som tar beslutninger paa deres vegne. Norge er et slikt representativt demokrati. Vi velger stortingsrepresentanter hvert fjerde aar, og de vedtar lover og budsjett for oss.

Et **deltakerdemokrati** legger vekt paa bred deltakelse utover valg. Hoeringer, brukermedvirkning og dialog mellom borgere og politikere er viktige elementer. Tanken er at demokrati ikke bare handler om aa stemme hvert fjerde aar, men om aa vaere aktivt engasjert.

I et **konstitusjonelt demokrati** er demokratiet begrenset av en grunnlov som beskytter grunnleggende rettigheter. Selv om flertallet oensker det, kan ikke grunnlovsfestede rettigheter bare fjernes.

Norge er et **parlamentarisk demokrati**, der regjeringen utgaar fra og er avhengig av parlamentets (Stortingets) tillit. I motsetning til dette har USA et **presidentdemokrati**, der presidenten velges direkte av folket, uavhengig av parlamentet (Kongressen).

Og saa har vi begrepet **liberalt demokrati**, som kombinerer flertallsstyre med sterkt vern av individuelle rettigheter og friheter. De fleste vestlige demokratier regnes som liberale demokratier.

Naa som vi har sett paa de formelle modellene, er det viktig aa huske at det er uenighet om hva som utgjor et "ekte" demokrati. Noen mener liberale rettigheter er avgjorende. Andre mener flertallsviljen er det viktigste. Ulike land har ulike demokratitradisjoner, og det er genuint uenighet om hva som boer vektlegges. Det er viktig aa kunne analysere disse forskjellene uten aa automatisk anta at en modell er den eneste riktige.`,
    },
    {
      id: 'samfunnskunnskap-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-1-n-quiz2-q0',
            task: 'Hva kjennetegner et representativt demokrati?',
            options: [
              { id: 'a', text: 'Folket stemmer direkte over alle saker', isCorrect: false },
              { id: 'b', text: 'Folket velger representanter som tar beslutninger paa deres vegne', isCorrect: true },
              { id: 'c', text: 'Bare de rikeste faar stemme', isCorrect: false },
              { id: 'd', text: 'Kongen bestemmer alt', isCorrect: false },
            ],
            solution:
              'I et representativt demokrati velger folket representanter som tar beslutninger paa deres vegne. Norge er et representativt demokrati der vi velger stortingsrepresentanter hvert fjerde aar.',
          },
          {
            id: 'samfunnskunnskap-4-1-n-quiz2-q1',
            task: 'Hvilket land er kjent for aa praktisere direkte demokrati i stor skala?',
            options: [
              { id: 'a', text: 'Norge', isCorrect: false },
              { id: 'b', text: 'USA', isCorrect: false },
              { id: 'c', text: 'Sveits', isCorrect: true },
              { id: 'd', text: 'Sverige', isCorrect: false },
            ],
            solution:
              'Sveits er det mest kjente eksempelet paa direkte demokrati i dag. Der stemmer innbyggerne regelmessig direkte over konkrete saker gjennom folkeavstemninger.',
          },
          {
            id: 'samfunnskunnskap-4-1-n-quiz2-q2',
            task: 'Hva er forskjellen paa et parlamentarisk og et presidentdemokrati?',
            options: [
              { id: 'a', text: 'I et parlamentarisk demokrati har folket ingen makt', isCorrect: false },
              { id: 'b', text: 'I et presidentdemokrati velges presidenten direkte, uavhengig av parlamentet', isCorrect: true },
              { id: 'c', text: 'Det er ingen reell forskjell', isCorrect: false },
              { id: 'd', text: 'Parlamentarisk demokrati har ingen grunnlov', isCorrect: false },
            ],
            solution:
              'I et parlamentarisk demokrati (som Norge) utgaar regjeringen fra parlamentets tillit. I et presidentdemokrati (som USA) velges presidenten direkte av folket, uavhengig av parlamentet.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket hva demokrati egentlig er og hvorfor det er viktig.

**Demokratiets grunnidé:** Demokrati betyr folkestyre og bygger paa at alle mennesker er likeverdige, at makten tilhoerer folket, at flertallet bestemmer med respekt for mindretallet, og at alle har rett til aa delta i beslutninger som angaar dem.

**Kjennetegn paa demokrati:** Frie og rettferdige valg, ytringsfrihet, organisasjonsfrihet, rettssikkerhet, pressefrihet, maktfordeling og mindretallsvern er sentrale trekk ved et demokratisk samfunn. Alle disse maa vaere til stede -- valg alene er ikke nok.

**Demokratiformer:** Det finnes mange ulike maater aa organisere folkestyre paa. Direkte demokrati (som i Sveits), representativt demokrati (som i Norge), parlamentarisk demokrati, presidentdemokrati og liberalt demokrati er alle varianter av den samme grunnideen -- at makten skal tilhoere folket.

**Demokratiets verdi:** Demokratiet sikrer frihet og rettigheter, gir legitimitet til beslutninger, muliggjor fredelig maktskifte og beskytter mot maktmisbruk. Det er genuint uenighet om hva som utgjor et "ekte" demokrati, og det er viktig aa analysere ulike perspektiver kritisk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2 NARRATIV: Det norske demokratiet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_4_2_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-4-2-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.2',
  title: 'Det norske demokratiet',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om hvordan det norske demokratiet er bygd opp, med Storting, regjering, domstoler og den unike norske parlamentarismen.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drofte hvordan det norske demokratiet fungerer',
    'reflektere over maktfordelingsprinsippet og dets betydning',
  ],
  linkedChapterId: 'samfunnskunnskap-4-2',
  content: [
    {
      id: 'samfunnskunnskap-4-2-n-intro',
      type: 'text',
      content: `## Et av verdens best fungerende demokratier

Tenk deg at det er 17. mai 1814. I en liten bygning paa Eidsvoll sitter 112 menn og diskuterer Norges fremtid. De er i ferd med aa vedta en grunnlov som skal bli fundamentet for det norske demokratiet -- en grunnlov som fortsatt gjelder over 200 aar senere, riktignok med mange endringer for aa tilpasse seg samfunnsutviklingen.

I dag regnes Norge som et av verdens best fungerende demokratier. Men hvordan er det norske politiske systemet faktisk organisert?

Norge er et **konstitusjonelt monarki** og et **parlamentarisk demokrati**. Konstitusjonelt monarki betyr at kongen er statsoverhode, men uten reell politisk makt -- makten hans er begrenset av Grunnloven. Parlamentarisk demokrati betyr at regjeringen utgaar fra og er avhengig av Stortingets tillit.

**Grunnloven** er Norges hoeyeste rettskilde. Den fastsetter statsmaktenes oppgaver og grenser, beskytter grunnleggende rettigheter, og kan bare endres med to tredjedels flertall paa Stortinget -- og foerst etter at et nytt storting er valgt. Denne terskelen gjor at grunnleggende rettigheter ikke kan endres over natten av et tilfeldig flertall.`,
    },
    {
      id: 'samfunnskunnskap-4-2-n-section1',
      type: 'text',
      content: `## De tre statsmaktene

Kjernen i det norske systemet er **maktfordelingsprinsippet**. Makten er delt mellom tre institusjoner som holder hverandre i sjakk, slik at ingen enkelt instans faar for mye makt. La oss se paa hver av dem.

**Stortinget** er den lovgivende makt. Det bestaar av 169 representanter som velges hvert fjerde aar. Stortingets hovedoppgaver er aa vedta lover, vedta statsbudsjettet og kontrollere regjeringen. En viktig detalj: Stortinget kan ikke opploeses i valgperioden. Det betyr at representantene sitter i fire fulle aar, uansett hva som skjer politisk.

**Regjeringen** er den utovende makt. Den ledes av statsministeren og bestaar av statsraader (ministere) som leder hvert sitt departement. Regjeringens oppgaver er aa foreslaaa lover og budsjett for Stortinget, gjennomfoere Stortingets vedtak, lede forvaltningen (alle de statlige etatene og direktoratene), og representere Norge utad i internasjonal politikk.

**Domstolene** er den doemmende makt, med Hoeyesterett paa toppen. Domstolene doommer i saker, og de kan proeve om lover er i strid med Grunnloven. Det siste er et svaert viktig poeng: Dersom Stortinget vedtar en lov som bryter med Grunnloven, kan domstolene sette den til side. Domstolene er uavhengige av baaade Storting og regjering -- ingen politiker kan ringe en dommer og fortelle ham hvordan en sak skal doemmes.

Formaalet med hele denne maktfordelingen er aa hindre maktkonsentrasjon. Statsmaktene kontrollerer hverandre, og det beskytter deg og meg som borgere. Uten maktfordeling kunne flertallet undertrykke mindretallet, og enkeltpersoner eller grupper kunne misbruke makten sin.`,
    },
    {
      id: 'samfunnskunnskap-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-2-n-quiz1-q0',
            task: 'Hva betyr det at Norge er et konstitusjonelt monarki?',
            options: [
              { id: 'a', text: 'Kongen har all makt', isCorrect: false },
              { id: 'b', text: 'Kongen er statsoverhode, men uten reell politisk makt -- begrenset av Grunnloven', isCorrect: true },
              { id: 'c', text: 'Norge har ingen konge', isCorrect: false },
              { id: 'd', text: 'Kongen velges hvert fjerde aar', isCorrect: false },
            ],
            solution:
              'Konstitusjonelt monarki betyr at kongen er statsoverhode, men makten hans er begrenset av Grunnloven. Kongen har ingen reell politisk makt -- den ligger hos Stortinget og regjeringen.',
          },
          {
            id: 'samfunnskunnskap-4-2-n-quiz1-q1',
            task: 'Hvilken av de tre statsmaktene kan proeve om lover er i strid med Grunnloven?',
            options: [
              { id: 'a', text: 'Stortinget', isCorrect: false },
              { id: 'b', text: 'Regjeringen', isCorrect: false },
              { id: 'c', text: 'Domstolene', isCorrect: true },
              { id: 'd', text: 'Kongen', isCorrect: false },
            ],
            solution:
              'Domstolene (den doemmende makt) kan proeve om lover vedtatt av Stortinget er i strid med Grunnloven, og eventuelt sette dem til side. Dette er en viktig del av maktfordelingen.',
          },
          {
            id: 'samfunnskunnskap-4-2-n-quiz1-q2',
            task: 'Hvor mange representanter har Stortinget?',
            options: [
              { id: 'a', text: '100', isCorrect: false },
              { id: 'b', text: '150', isCorrect: false },
              { id: 'c', text: '169', isCorrect: true },
              { id: 'd', text: '200', isCorrect: false },
            ],
            solution:
              'Stortinget bestaar av 169 representanter som velges hvert fjerde aar. De 169 representantene fordeles paa 19 valgdistrikter.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-2-n-section2',
      type: 'text',
      content: `## Parlamentarismens spilleregler

Naa som du kjenner de tre statsmaktene, la oss se naermere paa forholdet mellom Stortinget og regjeringen. For det er her den norske **parlamentarismen** kommer inn.

Parlamentarismens grunntanke er enkel: Regjeringen maa ha Stortingets tillit for aa sitte. Mister den tilliten, maa den gaa av. Men i Norge har vi en spesiell variant som kalles **negativ parlamentarisme**. Det betyr at regjeringen ikke trenger aa bli aktivt godkjent av Stortinget -- den sitter saa lenge det ikke er flertall *mot* den. Det er en viktig nyanse.

Hvordan dannes en regjering? Det begynner med stortingsvalget. Etter valget gir kongen oppdrag til partiledere om aa sondere mulighetene for aa danne regjering. Den som kan samle flertall -- eller i det minste unngaa aa faa flertallet mot seg -- blir statsminister. Regjeringen utnevnes saa formelt av kongen i statsraad.

Naa skiller vi mellom to typer regjeringer. En **flertallsregjering** er en regjering der partiene som deltar, til sammen har flertall paa Stortinget. Da kan regjeringen i prinsippet vedta det den vil. Men det er faktisk sjelden i Norge! Mye vanligere er **mindretallsregjeringer** -- regjeringer som mangler flertall og maa soeke stoette fra andre partier fra sak til sak. Det kraever forhandlinger og kompromisser, men det fungerer overraskende godt.

Et viktig verktoy i parlamentarismen er **mistillitsforslaget**. Stortinget kan fremme et slikt forslag, og hvis det faar flertall, maa regjeringen gaa av. Det er den ultimate konsekvensen av at regjeringen har mistet Stortingets tillit. Paa den andre siden kan regjeringen stille **kabinettsspoersmaal** -- det vil si knytte sin skjebne til en bestemt sak. Hvis Stortinget stemmer mot regjeringen i den saken, har regjeringen i praksis sagt at den vil gaa av.

Et godt eksempel paa hvordan dette fungerer i praksis er regjeringsdannelsen etter stortingsvalget i 2021. Arbeiderpartiet og Senterpartiet fikk til sammen 76 mandater av 169 -- langt fra flertall. Men de borgerlige partiene hadde heller ikke flertall. Med SV sine 13 mandater kunne Ap og Sp faa 89 mandater totalt -- som er flertall. Ap og Sp dannet en mindretallsregjering og inngikk en avtale med SV om budsjettsamarbeid. I andre saker soeker regjeringen stoette der den kan -- noen ganger fra SV og Roedt, andre ganger fra sentrum eller hoeyresiden. Slik er hverdagen for en norsk mindretallsregjering.`,
    },
    {
      id: 'samfunnskunnskap-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-2-n-quiz2-q0',
            task: 'Hva betyr negativ parlamentarisme?',
            options: [
              { id: 'a', text: 'At regjeringen maa faa aktivt flertall for aa sitte', isCorrect: false },
              { id: 'b', text: 'At regjeringen sitter saa lenge det ikke er flertall mot den', isCorrect: true },
              { id: 'c', text: 'At opposisjonen alltid er negativ', isCorrect: false },
              { id: 'd', text: 'At regjeringen ikke kan faa stoette fra andre partier', isCorrect: false },
            ],
            solution:
              'Negativ parlamentarisme betyr at regjeringen ikke trenger aktivt godkjenning fra Stortinget. Den sitter saa lenge det ikke er et flertall som aktivt stemmer mot den. Dette gjor det mulig med mindretallsregjeringer.',
          },
          {
            id: 'samfunnskunnskap-4-2-n-quiz2-q1',
            task: 'Hvilken type regjering er vanligst i Norge?',
            options: [
              { id: 'a', text: 'Flertallsregjering', isCorrect: false },
              { id: 'b', text: 'Presidentstyre', isCorrect: false },
              { id: 'c', text: 'Mindretallsregjering', isCorrect: true },
              { id: 'd', text: 'Samlingsregjering', isCorrect: false },
            ],
            solution:
              'Mindretallsregjeringer er vanligst i Norge. Regjeringen mangler da flertall paa Stortinget og maa soeke stoette fra andre partier fra sak til sak. Det kraever forhandlinger og kompromisser.',
          },
          {
            id: 'samfunnskunnskap-4-2-n-quiz2-q2',
            task: 'Hva er et mistillitsforslag?',
            options: [
              { id: 'a', text: 'Et forslag fra regjeringen om aa opploese Stortinget', isCorrect: false },
              { id: 'b', text: 'Et forslag i Stortinget som kan tvinge regjeringen til aa gaa av dersom det faar flertall', isCorrect: true },
              { id: 'c', text: 'Et forslag om aa endre Grunnloven', isCorrect: false },
              { id: 'd', text: 'Et forslag fra kongen om ny regjering', isCorrect: false },
            ],
            solution:
              'Et mistillitsforslag er et forslag i Stortinget som, dersom det faar flertall, tvinger regjeringen til aa gaa av. Det er den ultimate konsekvensen av parlamentarismen -- regjeringen maa ha Stortingets tillit.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett paa hvordan det norske demokratiet er organisert.

**Norges styreform:** Norge er et konstitusjonelt monarki og parlamentarisk demokrati. Grunnloven fra 1814 er fundamentet, og den kan bare endres med to tredjedels flertall.

**Maktfordelingsprinsippet:** Makten er delt mellom Stortinget (lovgivende makt med 169 representanter), regjeringen (utovende makt ledet av statsministeren) og domstolene (doemmende makt med Hoeyesterett paa toppen). Denne delingen hindrer maktkonsentrasjon og beskytter borgernes frihet.

**Parlamentarisme:** Regjeringen maa ha Stortingets tillit for aa sitte. Norge praktiserer negativ parlamentarisme, der regjeringen sitter saa lenge det ikke er flertall mot den. Mindretallsregjeringer er vanligst og fungerer gjennom forhandlinger og kompromisser.

**I praksis:** Etter valget i 2021 dannet Ap og Sp en mindretallsregjering med budsjettsamarbeid med SV -- et typisk eksempel paa norsk parlamentarisme i aksjon.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3 NARRATIV: Stortingsvalg og valgordning
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_4_3_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-4-3-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.3',
  title: 'Stortingsvalg og valgordning',
  subtitle: 'Narrativ versjon',
  description:
    'En guide til hvordan stortingsvalg fungerer i Norge -- fra stemmeretten din til hvordan mandatene fordeles.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drofte hvordan valgordningen pavirker demokratiet',
    'reflektere over egen deltakelse i valg',
  ],
  linkedChapterId: 'samfunnskunnskap-4-3',
  content: [
    {
      id: 'samfunnskunnskap-4-3-n-intro',
      type: 'text',
      content: `## Din stemme teller

Tenk deg at det er valgdag. Du gaar til valglokalet, faar utlevert stemmesedler, og gaar inn i et stemmeavlukke. Der, helt alene, velger du stemmeseddelen til det partiet du stoetter. Ingen ser hva du velger. Ingen kan tvinge deg. Det er ditt valg, og din stemme teller like mye som alle andres.

**Stortingsvalget** er det viktigste valget i Norge. Hvert fjerde aar velger vi 169 representanter til Stortinget. Det er disse representantene som vedtar lovene vare, bestemmer statsbudsjettet og kontrollerer regjeringen. Valget avgjoer altsaa hvem som styrer landet.

Men stortingsvalget er ikke det eneste valget. Vi har ogsaa **kommune- og fylkestingsvalg** hvert fjerde aar, som holdes to aar etter stortingsvalget. I tillegg har vi **sametingsvalg** der samene velger representanter til Sametinget.

Hvem kan stemme? For aa ha stemmerett ved stortingsvalg maa du vaere norsk statsborger, ha fylt 18 aar innen utgangen av valgaaret, og vaere registrert i folkeregisteret. Stemmeretten er en rettighet -- men den er ogsaa et ansvar. Demokratiet fungerer best naar mange deltar. Stemmen din kan avgjoere utfallet. Og de som ikke stemmer, lar andre bestemme for seg.`,
    },
    {
      id: 'samfunnskunnskap-4-3-n-section1',
      type: 'text',
      content: `## Slik fungerer valgordningen

Norge har et system som kalles **forholdstallsvalg**. Det betyr at mandatene fordeles proporsjonalt etter partienes stemmetall. Faar et parti 30 prosent av stemmene, faar det omtrent 30 prosent av mandatene. Dette sikrer at mange partier blir representert paa Stortinget.

Landet er delt inn i **19 valgdistrikter** som foelger fylkesgrensene. Hvert distrikt har et visst antall mandater basert paa baaade befolkning og areal -- saa distrikter med spredt befolkning faar noen flere mandater i forhold til folketallet.

Av de 169 mandatene er **150 distriktsmandater** som fordeles direkte i hvert valgdistrikt. Men fordi mandatene fordeles distriktsvis, kan det oppstaa skjevheter naaar man ser paa helheten. Kanskje et parti faar litt flere mandater i ett distrikt og litt faerre i et annet. Derfor har vi ogsaa **19 utjevningsmandater** -- ett per distrikt -- som sikrer at partienes totale mandattall bedre stemmer med det nasjonale stemmetallet.

Her kommer et viktig begrep inn: **sperregrensen**. Et parti maa ha minst 4 prosent av stemmene nasjonalt for aa faa utjevningsmandater. Partier under 4 prosent kan likevel faa distriktsmandater, men de faar altsaa ikke utjevningsmandater. Sperregrensen forhindrer at veldig smaa partier kommer paa Stortinget, noe som bidrar til mer stabile regjeringer -- men noen mener den er udemokratisk fordi den utelukker smaa partier.

Selve mandatfordelingen beregnes med **modifisert St. Laguees metode**, en matematisk formel som sikrer proporsjonalitet og gir smaa partier en viss sjanse.`,
    },
    {
      id: 'samfunnskunnskap-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-3-n-quiz1-q0',
            task: 'Hva er sperregrensen ved norske stortingsvalg?',
            options: [
              { id: 'a', text: '2 prosent', isCorrect: false },
              { id: 'b', text: '4 prosent', isCorrect: true },
              { id: 'c', text: '5 prosent', isCorrect: false },
              { id: 'd', text: '10 prosent', isCorrect: false },
            ],
            solution:
              'Sperregrensen er paa 4 prosent. Partier som faar under 4 prosent av stemmene nasjonalt, faar ikke utjevningsmandater, men kan fortsatt vinne distriktsmandater.',
          },
          {
            id: 'samfunnskunnskap-4-3-n-quiz1-q1',
            task: 'Hva er forskjellen mellom distriktsmandater og utjevningsmandater?',
            options: [
              { id: 'a', text: 'Distriktsmandater gaar til smaa partier, utjevningsmandater til store', isCorrect: false },
              { id: 'b', text: 'Distriktsmandater fordeles i hvert valgdistrikt, utjevningsmandater korrigerer saa totalfordelingen stemmer med stemmetallet', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'd', text: 'Utjevningsmandater fordeles foerst, saa distriktsmandater', isCorrect: false },
            ],
            solution:
              'De 150 distriktsmandatene fordeles direkte i hvert valgdistrikt. De 19 utjevningsmandatene (ett per distrikt) korrigerer saa partienes totale mandattall slik at det bedre stemmer med det nasjonale stemmetallet.',
          },
          {
            id: 'samfunnskunnskap-4-3-n-quiz1-q2',
            task: 'Hva betyr forholdstallsvalg?',
            options: [
              { id: 'a', text: 'Den som faar flest stemmer i et distrikt vinner alle mandatene der', isCorrect: false },
              { id: 'b', text: 'Mandatene fordeles proporsjonalt etter partienes stemmetall', isCorrect: true },
              { id: 'c', text: 'Bare de stoerste partiene faar mandater', isCorrect: false },
              { id: 'd', text: 'Hver velger stemmer paa en enkelt kandidat', isCorrect: false },
            ],
            solution:
              'Forholdstallsvalg betyr at mandatene fordeles proporsjonalt. Faar et parti 30 prosent av stemmene, faar det omtrent 30 prosent av mandatene. Det sikrer at mange partier blir representert.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-3-n-section2',
      type: 'text',
      content: `## Aa stemme -- og aa velge

La oss se paa den praktiske siden. Paa stortingsvalget i 2021 var det ni partier representert paa Stortinget: Arbeiderpartiet (Ap), Hoeyre (H), Senterpartiet (Sp), Fremskrittspartiet (Frp), Sosialistisk Venstreparti (SV), Roedt (R), Venstre (V), Kristelig Folkeparti (KrF) og Miljoepartiet De Groenne (MDG).

Naar du staar i stemmeavlukket, velger du stemmeseddelen til det partiet du vil stemme paa. Du kan ogsaa gi **personstemmer** til kandidater du oensker aa fremheve, eller stryke kandidater -- men det siste har liten effekt i praksis.

Du kan stemme paa foerhaand -- fra juli og frem til fredagen foer valgdagen -- eller du kan stemme paa selve **valgdagen**, som alltid er en mandag i september (noen kommuner aapner ogsaa for stemming paa soendagen). Valget er hemmelig -- du gaar inn i et stemmeavlukke der ingen kan se hva du velger.

Hva om du er foerstegangsstemmer og ikke vet hvilket parti du skal stemme paa? Det er helt normalt! Her er noen raad: Informer deg -- les partienes programmer, bruk valgomater (tester som matcher deg med parti), foelg valgkampen og debatter. Tenk over dine verdier -- hva er viktigst for deg? Klima, oekonomi, helse, skole? Sammenlign partiene paa de omraadene du bryr deg om. Og husk: Det finnes ingen "feil" stemme. Du kan endre mening til neste valg. Det viktigste er at du bruker stemmeretten din -- for det er mange som har kjempet for at du skal ha den.

Hvorfor er det saa viktig at unge deltar i valg? Fordi unge maa leve lengst med beslutningene som tas. Fordi det sikrer at unges perspektiver hoeres. Fordi politikere lytter mer til grupper som faktisk stemmer. Og fordi lav valgdeltakelse blant unge betyr at eldre generasjoners interesser faar uforholdsmessig stor innflytelse.`,
    },
    {
      id: 'samfunnskunnskap-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-3-n-quiz2-q0',
            task: 'Hvor ofte holdes stortingsvalg i Norge?',
            options: [
              { id: 'a', text: 'Hvert andre aar', isCorrect: false },
              { id: 'b', text: 'Hvert tredje aar', isCorrect: false },
              { id: 'c', text: 'Hvert fjerde aar', isCorrect: true },
              { id: 'd', text: 'Hvert femte aar', isCorrect: false },
            ],
            solution:
              'Stortingsvalg holdes hvert fjerde aar. Kommune- og fylkestingsvalg holdes ogsaa hvert fjerde aar, men to aar etter stortingsvalget.',
          },
          {
            id: 'samfunnskunnskap-4-3-n-quiz2-q1',
            task: 'Hvem har stemmerett ved stortingsvalg i Norge?',
            options: [
              { id: 'a', text: 'Alle som bor i Norge', isCorrect: false },
              { id: 'b', text: 'Norske statsborgere som har fylt 18 aar innen utgangen av valgaaret', isCorrect: true },
              { id: 'c', text: 'Alle over 16 aar', isCorrect: false },
              { id: 'd', text: 'Bare de som har bodd i Norge i minst ti aar', isCorrect: false },
            ],
            solution:
              'For aa ha stemmerett ved stortingsvalg maa du vaere norsk statsborger, ha fylt 18 aar innen utgangen av valgaaret, og vaere registrert i folkeregisteret.',
          },
          {
            id: 'samfunnskunnskap-4-3-n-quiz2-q2',
            task: 'Hvorfor er det spesielt viktig at unge deltar i valg?',
            options: [
              { id: 'a', text: 'Fordi unge alltid stemmer paa de beste partiene', isCorrect: false },
              { id: 'b', text: 'Fordi unge maa leve lengst med beslutningene og politikere lytter mer til grupper som stemmer', isCorrect: true },
              { id: 'c', text: 'Fordi det er lovpaalagt aa stemme', isCorrect: false },
              { id: 'd', text: 'Fordi unge faar dobbelt saa mange stemmer', isCorrect: false },
            ],
            solution:
              'Unge maa leve lengst med beslutningene som tas, og lav valgdeltakelse blant unge betyr at eldre generasjoners interesser faar uforholdsmessig stor innflytelse. Politikere lytter mer til grupper som faktisk stemmer.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett paa hvordan stortingsvalget og valgordningen fungerer.

**Stortingsvalget:** Hvert fjerde aar velger vi 169 representanter til Stortinget. Alle norske statsborgere over 18 aar har stemmerett.

**Valgordningen:** Norge har forholdstallsvalg med 150 distriktsmandater og 19 utjevningsmandater, fordelt paa 19 valgdistrikter. Systemet sikrer at partienes mandattall gjenspeiler stemmetallet.

**Sperregrensen:** Et parti maa ha minst 4 prosent av stemmene nasjonalt for aa faa utjevningsmandater, men kan likevel faa distriktsmandater.

**Deltakelse:** Stemmeretten er baaade en rettighet og et ansvar. Demokratiet fungerer best naar mange deltar, og det er saerlig viktig at unge bruker stemmeretten sin -- fordi de maa leve lengst med beslutningene som tas.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.4 NARRATIV: Politiske partier
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_4_4_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-4-4-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.4',
  title: 'Politiske partier',
  subtitle: 'Narrativ versjon',
  description:
    'En innfoering i de norske politiske partiene, hoeyre-venstre-aksen og hvordan blokkpolitikken fungerer.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drofte partienes rolle i demokratiet',
    'reflektere over politiske skillelinjer og partiforskjeller',
  ],
  linkedChapterId: 'samfunnskunnskap-4-4',
  content: [
    {
      id: 'samfunnskunnskap-4-4-n-intro',
      type: 'text',
      content: `## Bindeleddet mellom folk og makt

Forestill deg at du bryr deg sterkt om klimapolitikk, og du oensker at Norge skal gjore mer for aa kutte utslipp. Hvordan faar du gjennomslag for dette? Du kunne prøvd aa kontakte statsministeren direkte -- men det hadde neppe ført til store endringer. I stedet finnes det organisasjoner som samler mennesker med lignende syn, utvikler konkret politikk og stiller til valg for aa faa gjennomslag: **politiske partier**.

Partiene er bindeleddet mellom folket og makten. De samler mennesker med lignende politiske syn, utvikler politiske programmer, rekrutterer politikere, mobiliserer velgere ved valg, kobler folkets oensker til politiske beslutninger, og holder regjeringen ansvarlig naar de sitter i opposisjon.

Norge har et **flerpartisystem** med mange partier representert paa Stortinget. Det sikrer politisk mangfold -- men det kan ogsaa gjoere det vanskeligere aa danne stabile regjeringer, som vi saa i forrige kapittel. Likevel er det nettopp dette mangfoldet som gjor at velgerne har reelle valg. I et topartisystem (som i USA) maa du velge mellom to alternativer. I Norge kan du finne et parti som ligger naermere dine egne meninger.`,
    },
    {
      id: 'samfunnskunnskap-4-4-n-section1',
      type: 'text',
      content: `## Hoeyre-venstre-aksen

For aa forstaa norsk politikk trenger du en slags kart -- og det mest brukte kartet er **hoeyre-venstre-aksen**. Denne politiske skalaen handler i bunn og grunn om forholdet mellom stat og marked, mellom fellesskap og individ.

Paa **venstresiden** finner vi partier som vil ha en stoerre offentlig sektor, mer omfordeling gjennom skatt, sterkere arbeidstakerrettigheter og fellesskapsloesninger. Tanken er at fellesskapet maa ta ansvar for aa utjevne forskjeller og sikre alle gode tjenester. De viktigste partiene her er **Roedt** (R), **Sosialistisk Venstreparti** (SV) og **Arbeiderpartiet** (Ap).

I **sentrum** finner vi partier som soeker balanse mellom marked og stat, og som ofte har andre hovedsaker som distriktspolitikk, verdier eller miljoe. Her finner vi **Senterpartiet** (Sp), som er opptatt av distriktsinteresser og er skeptisk til sentralisering og EU. **Kristelig Folkeparti** (KrF) er et kristendemokratisk parti med fokus paa familie- og verdipolitikk. **Venstre** (V) er et sosialliberalt parti som kombinerer personlig frihet med miljoeengasjement. Og **Miljoepartiet De Groenne** (MDG) har miljoe som sin absolutte hovedsak.

Paa **hoeyresiden** finner vi partier som oensker mindre stat, lavere skatter, mer marked og privatisering, individuelt ansvar og naeringsvennlig politikk. **Hoeyre** (H) er et konservativt parti som vil ha lavere skatter og bedre vilkaar for naeringslivet. **Fremskrittspartiet** (Frp) gaar enda lenger i retning av lavere skatter og mindre byraakrati, og er ogsaa kjent for streng innvandringspolitikk og fokus paa valgfrihet.

Men husk: Hoeyre-venstre-aksen er en **forenkling**. Partiene skiller seg ogsaa paa andre akser: sentrum mot distrikt, verdiliberale mot verdikonservative, mer eller mindre EU/EOES, og hvor hoey prioritet miljoeet faar. Et parti kan vaere til venstre i oekonomisk politikk, men til hoeyre i verdispoersmaal -- eller omvendt.`,
    },
    {
      id: 'samfunnskunnskap-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-4-n-quiz1-q0',
            task: 'Hva er hovedforskjellen mellom venstresiden og hoeyresiden i norsk politikk?',
            options: [
              { id: 'a', text: 'Venstresiden vil ha mer stat og omfordeling, hoeyresiden vil ha mindre stat og mer marked', isCorrect: true },
              { id: 'b', text: 'Venstresiden er for miljoe, hoeyresiden er mot', isCorrect: false },
              { id: 'c', text: 'Det er ingen reell forskjell', isCorrect: false },
              { id: 'd', text: 'Venstresiden vil ha monarki, hoeyresiden vil ha republikk', isCorrect: false },
            ],
            solution:
              'Hoeyre-venstre-aksen handler i bunn og grunn om forholdet mellom stat og marked. Venstresiden vil ha stoerre offentlig sektor og mer omfordeling. Hoeyresiden vil ha lavere skatter, mindre stat og mer marked.',
          },
          {
            id: 'samfunnskunnskap-4-4-n-quiz1-q1',
            task: 'Hvilket parti regnes som et distriktsparti som er skeptisk til sentralisering og EU?',
            options: [
              { id: 'a', text: 'Hoeyre', isCorrect: false },
              { id: 'b', text: 'Senterpartiet', isCorrect: true },
              { id: 'c', text: 'SV', isCorrect: false },
              { id: 'd', text: 'Fremskrittspartiet', isCorrect: false },
            ],
            solution:
              'Senterpartiet (Sp) er et sentrumparti som er saerlig opptatt av distriktsinteresser og er skeptisk til sentralisering og EU.',
          },
          {
            id: 'samfunnskunnskap-4-4-n-quiz1-q2',
            task: 'Hvilke funksjoner har politiske partier i et demokrati?',
            options: [
              { id: 'a', text: 'De bestemmer hvem som faar lov til aa stemme', isCorrect: false },
              { id: 'b', text: 'De vedtar lover paa egen haand', isCorrect: false },
              { id: 'c', text: 'De rekrutterer politikere, utvikler programmer, mobiliserer velgere og kobler folk til makt', isCorrect: true },
              { id: 'd', text: 'De kontrollerer domstolene', isCorrect: false },
            ],
            solution:
              'Partienes viktigste funksjoner er aa rekruttere politikere, utvikle politiske programmer, mobilisere velgere, koble folkets oensker til beslutninger og holde regjeringen ansvarlig (opposisjonen).',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-4-n-section2',
      type: 'text',
      content: `## Blokkpolitikk og samarbeid

Ved norske valg hoerer du ofte om "roedgroenn side" og "borgerlig side". Hva betyr egentlig dette?

Den **roedgroenne siden** (venstresiden) bestaar tradisjonelt av Arbeiderpartiet, SV og Senterpartiet i samarbeid. Roedt stoetter ofte fra utsiden, mens MDG kan gaa begge veier. Den **borgerlige siden** (hoeyresiden) bestaar av Hoeyre, Frp, Venstre og KrF -- som utgjorde Solberg-regjeringen fra 2013 til 2021.

Hvorfor blokker? Det gjor det lettere aa danne regjeringsalternativer. Velgerne vet paa forhaand hvem som kommer til aa samarbeide. Det gir forutsigbarhet.

Men blokktenkningen har sine utfordringer. Noen partier passer daarlig i begge blokker. Sp har tidvis vaert skeptisk til samarbeid med SV. KrF og Venstre har vaert paa vippen mellom blokkene. Og virkeligheten er ofte mer nyansert enn et enkelt todelt bilde. Etter valget i 2021 dannet Ap og Sp regjering uten SV, men med budsjettstoette fra SV. Roedt stoetter sak til sak. I noen saker soeker regjeringen stoette fra hoeyresiden.

**De ni stortingspartiene i oversikt:**

Paa venstresiden: **Roedt** er et sosialistisk parti som er mot kapitalisme og for sterk omfordeling. **SV** er et groent sosialistisk parti med fokus paa miljoe og rettferdighet. **Arbeiderpartiet** er sosialdemokratisk og historisk arbeiderbevegelsens parti.

I sentrum: **Senterpartiet** kjemper for distriktene. **MDG** har miljoe som hovedsak. **KrF** er kristendemokratisk med fokus paa familie og verdier. **Venstre** er sosialliberalt med vekt paa personlig frihet og miljoe.

Paa hoeyresiden: **Hoeyre** er konservativt med lavere skatter og naeringsvennlig politikk. **Frp** vil ha lavere skatter, mindre byraakrati og streng innvandringspolitikk.

Det viktige aa huske er at norsk politikk er mer nyansert enn to blokker. Hoeyre-venstre-aksen er nyttig, men ikke tilstrekkelig for aa forstaa alle forskjellene mellom partiene.`,
    },
    {
      id: 'samfunnskunnskap-4-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-4-n-quiz2-q0',
            task: 'Hvilke partier utgjor tradisjonelt den roedgroenne siden?',
            options: [
              { id: 'a', text: 'Hoeyre, Frp og Venstre', isCorrect: false },
              { id: 'b', text: 'Arbeiderpartiet, SV og Senterpartiet', isCorrect: true },
              { id: 'c', text: 'KrF, Venstre og MDG', isCorrect: false },
              { id: 'd', text: 'Roedt, Hoeyre og Sp', isCorrect: false },
            ],
            solution:
              'Den roedgroenne siden bestaar tradisjonelt av Arbeiderpartiet, SV og Senterpartiet. Roedt stoetter ofte fra utsiden, mens MDG kan gaa begge veier.',
          },
          {
            id: 'samfunnskunnskap-4-4-n-quiz2-q1',
            task: 'Hva er Arbeiderpartiets politiske retning?',
            options: [
              { id: 'a', text: 'Sosialistisk', isCorrect: false },
              { id: 'b', text: 'Konservativt', isCorrect: false },
              { id: 'c', text: 'Sosialdemokratisk', isCorrect: true },
              { id: 'd', text: 'Liberalistisk', isCorrect: false },
            ],
            solution:
              'Arbeiderpartiet er et sosialdemokratisk parti og historisk arbeiderbevegelsens parti. Sosialdemokrati kombinerer markedsoekonomi med omfordeling og velferd gjennom demokratiske midler.',
          },
          {
            id: 'samfunnskunnskap-4-4-n-quiz2-q2',
            task: 'Hvorfor er hoeyre-venstre-aksen en forenkling?',
            options: [
              { id: 'a', text: 'Fordi alle partier egentlig er enige', isCorrect: false },
              { id: 'b', text: 'Fordi partiene ogsaa skiller seg paa andre akser som distrikt, verdier, miljoe og EU', isCorrect: true },
              { id: 'c', text: 'Fordi den bare gjelder i andre land', isCorrect: false },
              { id: 'd', text: 'Fordi det bare finnes to partier i Norge', isCorrect: false },
            ],
            solution:
              'Partiene skiller seg ogsaa paa akser som sentrum-distrikt, verdiliberal-verdikonservativ, for-mot EU/EOES og miljoepolitikk. Et parti kan vaere til venstre i oekonomi men til hoeyre i verdispoersmaal.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket de politiske partiene og det norske partilandskapet.

**Partienes rolle:** Politiske partier er bindeleddet mellom folket og makten. De rekrutterer politikere, utvikler programmer, mobiliserer velgere og kobler folkets oensker til politiske beslutninger.

**Hoeyre-venstre-aksen:** Venstresiden (Roedt, SV, Ap) vil ha mer stat og omfordeling. Sentrum (Sp, MDG, KrF, Venstre) balanserer mellom ulike hensyn. Hoeyresiden (Hoeyre, Frp) vil ha mindre stat, lavere skatter og mer marked. Men aksen er en forenkling -- partiene skiller seg paa mange flere dimensjoner.

**De ni stortingspartiene:** Norge har et flerpartisystem som dekker et bredt politisk spekter, fra Roedt paa venstresiden til Frp paa hoeyresiden.

**Blokkpolitikk:** Partiene samarbeider i roedgroenn og borgerlig blokk, men norsk politikk er mer nyansert enn et enkelt todelt bilde.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5 NARRATIV: Lokaldemokrati og kommunestyre
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_4_5_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-4-5-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.5',
  title: 'Lokaldemokrati og kommunestyre',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om det lokale folkestyret -- hvordan kommuner og fylkeskommuner pavirker hverdagen din mer enn du kanskje tror.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjoere rede for det lokale folkestyret og kommunenes oppgaver',
    'drofte betydningen av lokaldemokratiet',
  ],
  linkedChapterId: 'samfunnskunnskap-4-5',
  content: [
    {
      id: 'samfunnskunnskap-4-5-n-intro',
      type: 'text',
      content: `## Naermere deg enn du tror

Naar vi snakker om politikk, tenker de fleste paa Stortinget og regjeringen. Men visste du at mye av det som pavirker hverdagen din mest, faktisk bestemmes lokalt?

Skolen du gaar paa, sykehjemmet bestemor bor paa, brannvesenet som rykker ut naar det brenner, vannet som kommer ut av springen, bussen du tar til skolen -- alt dette er kommunens ansvar. Kommunen er grunnmuren i det norske velferdssamfunnet, og den staar for mesteparten av tjenestene du moeter i hverdagen.

Norge er delt inn i **357 kommuner** og **11 fylkeskommuner** (per 2024). Disse styres av folkevalgte representanter som velges hvert fjerde aar, to aar etter stortingsvalget.

Men hvorfor har vi lokaldemokrati? Kunne ikke Stortinget og regjeringen styrt alt fra Oslo? I teorien, jo -- men det ville vaert daarlig demokrati og daarlig styring. Lokaldemokratiet sikrer at beslutninger tas naermere innbyggerne. Lokale behov og forhold tas hensyn til. Flere kan delta i politikken -- det er lettere aa stille til valg i hjemkommunen enn paa Stortinget. Og avstanden mellom velger og politiker er kortere. Du kan faktisk mote ordfoereren din paa butikken.`,
    },
    {
      id: 'samfunnskunnskap-4-5-n-section1',
      type: 'text',
      content: `## Slik styres kommunen

La oss se paa hvordan en kommune er organisert. Det oeverste organet er **kommunestyret**. Det er kommunens "storting" -- det er her de viktigste beslutningene fattes. Kommunestyrets medlemmer velges direkte av innbyggerne, og stoerrelsen varierer fra 11 til 85 medlemmer avhengig av folketallet. Kommunestyret moetes typisk maanedlig.

Innenfor kommunestyret velges et **formannskap**. Tenk paa det som kommunestyrets "indre ring". Formannskapet behandler saker foer de gaar til kommunestyret og forbereder budsjett og oekonomiplanen. Det er ogsaa formannskapet som behandler hastesaker mellom kommunestyrets moeter.

**Ordfoereren** velges av kommunestyret (i noen kommuner direkte av folket). Ordfoereren leder baaade kommunestyret og formannskapet, og representerer kommunen utad -- det er ordfoereren som holder tale paa 17. mai, for eksempel.

Men politikerne bestemmer bare *hva* som skal gjoeres. *Hvordan* det gjoeres i praksis, er administrasjonens ansvar. Den oeverste administrative lederen er **kommunedirektøren** (tidligere kalt raadmann). Kommunedirektøren er ansatt av kommunestyret, leder administrasjonen og forbereder saker for politikerne. Det er et viktig skille: Politikerne bestemmer retningen, administrasjonen gjennomfoerer.`,
    },
    {
      id: 'samfunnskunnskap-4-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-5-n-quiz1-q0',
            task: 'Hva er det oeverste organet i en kommune?',
            options: [
              { id: 'a', text: 'Formannskapet', isCorrect: false },
              { id: 'b', text: 'Ordfoereren', isCorrect: false },
              { id: 'c', text: 'Kommunestyret', isCorrect: true },
              { id: 'd', text: 'Kommunedirektøren', isCorrect: false },
            ],
            solution:
              'Kommunestyret er det oeverste folkevalgte organet i kommunen. Medlemmene velges direkte av innbyggerne, og det er her de viktigste beslutningene fattes.',
          },
          {
            id: 'samfunnskunnskap-4-5-n-quiz1-q1',
            task: 'Hva er forskjellen paa kommunestyret og formannskapet?',
            options: [
              { id: 'a', text: 'Kommunestyret er oeverste organ med alle folkevalgte, formannskapet er en mindre gruppe som forbereder saker', isCorrect: true },
              { id: 'b', text: 'Formannskapet er oeverste organ, kommunestyret er raadgivende', isCorrect: false },
              { id: 'c', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'd', text: 'Formannskapet velges av folket, kommunestyret av ordfoereren', isCorrect: false },
            ],
            solution:
              'Kommunestyret er oeverste organ med alle folkevalgte. Formannskapet velges av og blant kommunestyrets medlemmer og fungerer som en "indre ring" som forbereder saker og behandler hastesaker.',
          },
          {
            id: 'samfunnskunnskap-4-5-n-quiz1-q2',
            task: 'Hva er kommunedirektørens rolle?',
            options: [
              { id: 'a', text: 'Lede kommunestyrets moeter', isCorrect: false },
              { id: 'b', text: 'Øverste administrative leder som gjennomfoerer politikernes vedtak', isCorrect: true },
              { id: 'c', text: 'Representere kommunen paa 17. mai', isCorrect: false },
              { id: 'd', text: 'Velge ordfoerer', isCorrect: false },
            ],
            solution:
              'Kommunedirektøren er oeverste administrative leder, ansatt av kommunestyret. Mens politikerne bestemmer retningen, er det kommunedirektøren og administrasjonen som gjennomfoerer vedtakene i praksis.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-5-n-section2',
      type: 'text',
      content: `## Hva gjor kommunen -- og fylkeskommunen?

Kommunene har en imponerende liste med **lovpaalagte oppgaver** -- tjenester de er palagt ved lov aa tilby. De driver barnehage og grunnskole. De tilbyr helse- og omsorgstjenester som sykehjem og hjemmesykepleie. De har ansvar for barnevern, sosiale tjenester gjennom NAV, plan- og byggesaker, vann, avloep og renovasjon, brann og redning, og bibliotek. I tillegg driver mange kommuner med kultur og idrett, naeringsutvikling, kollektivtransport (sammen med fylkeskommunen) og integreringstiltak.

Alt dette koster penger. Kommunenes inntekter kommer fra flere kilder: skatteinntekter (omtrent 40 prosent), rammetilskudd fra staten (omtrent 30 prosent), oeremerkede tilskudd (midler som maa brukes paa bestemte formaal), og brukerbetalinger og gebyrer (som barnehageplass og renovasjonsgebyr).

Men hva med **fylkeskommunen**? Den har ansvar for oppgaver som er for store for enkeltkommuner, men som trenger lokal forankring. Den aller viktigste oppgaven er **videregaaende opplæring** -- det er fylkeskommunen som driver den videregaaende skolen du gaar paa. De tilbyr ogsaa yrkesfaglig opplaering og laeringeordning.

Fylkeskommunen har ogsaa ansvar for **kollektivtransport** -- buss, trikk, T-bane, fylkesveier (omtrent 44 000 km), ferjer og hurtigbaater. De tilbyr **tannhelsetjenester** (gratis for barn og unge). De arbeider med **regional utvikling**, naeringsutvikling og planlegging. Og de forvalter kulturminner og driver museer.

**Fylkestinget** (35-57 medlemmer) velges direkte av folket og ledes av en fylkesordforer. En fylkeskommunedirektoer leder administrasjonen.

Kort sagt: Kommunen pavirker hverdagen din fra foedsel til grav, og fylkeskommunen tar over naar du begynner paa videregaaende. Lokaldemokratiet er naermere deg enn du tror.`,
    },
    {
      id: 'samfunnskunnskap-4-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-5-n-quiz2-q0',
            task: 'Hvilken av disse er IKKE en lovpaalagt kommunal oppgave?',
            options: [
              { id: 'a', text: 'Grunnskole', isCorrect: false },
              { id: 'b', text: 'Videregaaende skole', isCorrect: true },
              { id: 'c', text: 'Barnevern', isCorrect: false },
              { id: 'd', text: 'Brann og redning', isCorrect: false },
            ],
            solution:
              'Videregaaende opplaering er fylkeskommunens ansvar, ikke kommunens. Kommunen har ansvar for grunnskole, barnehage, barnevern, brann og redning og mange andre tjenester.',
          },
          {
            id: 'samfunnskunnskap-4-5-n-quiz2-q1',
            task: 'Hva er fylkeskommunens viktigste oppgave?',
            options: [
              { id: 'a', text: 'Grunnskole', isCorrect: false },
              { id: 'b', text: 'Videregaaende opplaering', isCorrect: true },
              { id: 'c', text: 'Sykehus', isCorrect: false },
              { id: 'd', text: 'Politi', isCorrect: false },
            ],
            solution:
              'Videregaaende opplaering er fylkeskommunens viktigste oppgave. De driver videregaaende skoler, tilbyr yrkesfaglig opplaering og har ansvar for fagopp laering og laeringeordningen.',
          },
          {
            id: 'samfunnskunnskap-4-5-n-quiz2-q2',
            task: 'Hvorfor er lokaldemokrati viktig?',
            options: [
              { id: 'a', text: 'Fordi Stortinget ikke har tid til aa bestemme alt', isCorrect: false },
              { id: 'b', text: 'Fordi beslutninger tas naermere innbyggerne, lokale behov hensyntas og flere kan delta i politikken', isCorrect: true },
              { id: 'c', text: 'Fordi kommunene tjener mye penger', isCorrect: false },
              { id: 'd', text: 'Fordi det staar i Grunnloven', isCorrect: false },
            ],
            solution:
              'Lokaldemokrati sikrer at beslutninger tas naermere innbyggerne, at lokale behov og forhold tas hensyn til, at flere kan delta i politikken, og at avstanden mellom velger og politiker er kortere.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett paa det lokale folkestyret.

**Lokaldemokratiet:** Norge har 357 kommuner og 11 fylkeskommuner som styres av folkevalgte representanter. Lokaldemokratiet sikrer at beslutninger tas naermere innbyggerne.

**Kommunens organisering:** Kommunestyret er oeverste organ og velges direkte av folket. Formannskapet forbereder saker. Ordfoereren leder og representerer kommunen. Kommunedirektøren er oeverste administrative leder.

**Kommunale oppgaver:** Kommunene har ansvar for barnehage, grunnskole, helse og omsorg, barnevern, sosiale tjenester, vann og avloep, brann og redning og mye mer. Inntektene kommer fra skatter, statlige tilskudd og brukerbetalinger.

**Fylkeskommunen:** Har ansvar for videregaaende opplaering, kollektivtransport, tannhelse, regional utvikling og kulturminner. Den tar seg av oppgaver som er for store for enkeltkommuner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.6 NARRATIV: Medborgerskap og politisk deltakelse
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_4_6_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-4-6-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.6',
  title: 'Medborgerskap og politisk deltakelse',
  subtitle: 'Narrativ versjon',
  description:
    'En utforsking av hva det betyr aa vaere medborger -- med rettigheter, plikter og ulike maater aa engasjere seg paa.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drofte ulike former for politisk deltakelse',
    'reflektere over hva det vil si aa vaere medborger i et demokratisk samfunn',
  ],
  linkedChapterId: 'samfunnskunnskap-4-6',
  content: [
    {
      id: 'samfunnskunnskap-4-6-n-intro',
      type: 'text',
      content: `## Mer enn bare aa stemme

Hva betyr det egentlig aa vaere en del av et demokratisk samfunn? Er det nok aa stemme hvert fjerde aar, betale skatten og ellers la politikerne holde paa med sitt? Eller kraever demokratiet noe mer av oss?

**Medborgerskap** handler om mer enn bare statsborgerskap -- det stempelet i passet som sier at du er norsk. Det handler om aa vaere en aktiv deltaker i samfunnet, med baaade rettigheter og plikter.

La oss starte med rettighetene. Som medborger har du **sivile rettigheter** -- ytringsfrihet, organisasjonsfrihet og rettssikkerhet. Du har **politiske rettigheter** -- stemmerett og rett til aa stille til valg. Og du har **sosiale rettigheter** -- rett til utdanning, helse og velferd.

Men med rettigheter foelger ogsaa plikter. Du plikter aa betale skatt, som finansierer velferdssamfunnet. Du har verneplikt -- plikt til aa forsvare landet. Og du har en demokratisk plikt til aa delta, engasjere deg og holde deg informert.

**Aktivt medborgerskap** betyr at du ikke bare er en passiv mottaker av rettigheter, men en aktiv deltaker som engasjerer seg, stiller spoersmaal og holder makten ansvarlig. Demokratiet trenger borgere som bryr seg -- for et demokrati uten aktive borgere er et demokrati paa tomgang.`,
    },
    {
      id: 'samfunnskunnskap-4-6-n-section1',
      type: 'text',
      content: `## Mange maater aa delta paa

Politisk deltakelse er saa mye mer enn aa putte en stemmeseddel i en urne. La oss se paa de ulike maatene du kan delta paa.

**Konvensjonell deltakelse** er deltakelse gjennom de etablerte demokratiske kanalene. Det inkluderer aa stemme ved valg, vaere medlem i et politisk parti, stille til valg, kontakte politikere direkte, delta i hoeringer og skrive leserinnlegg i avisen. Dette er de "vanlige" maatene aa pavirke politikken paa -- kanalene som er bygd inn i det demokratiske systemet.

**Ukonvensjonell deltakelse** gaar utenfor disse etablerte kanalene. Her finner vi demonstrasjoner og aksjoner, politisk streik, boikott av varer eller tjenester, sivil ulydighet, kampanjer i sosiale medier og underskriftskampanjer. Det er maater aa gjore sin stemme hoert paa som ikke noedvendigvis foelger de formelle spillereglene -- men som likevel er viktige deler av et levende demokrati.

I vaar digitale tid har vi ogsaa faat nye former for **digital deltakelse**. Aa dele politiske meninger paa sosiale medier, delta i digitale hoeringer, signere online petisioner eller mobilisere politisk gjennom internett er blitt vanlige maater aa engasjere seg paa, saerlig blant unge.

Og saa finnes det noe vi kan kalle **hverdagsdeltakelse** -- det stille, daglige engasjementet i naermiljoeet. Aa delta i frivillig arbeid, dugnadsarbeid, engasjement i lokale organisasjoner, idrettslag og foreninger. Det er kanskje ikke politikk i snaever forstand, men det bygger det **sivilsamfunnet** som demokratiet er avhengig av.`,
    },
    {
      id: 'samfunnskunnskap-4-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-6-n-quiz1-q0',
            task: 'Hva er forskjellen paa konvensjonell og ukonvensjonell politisk deltakelse?',
            options: [
              { id: 'a', text: 'Konvensjonell deltakelse er lovlig, ukonvensjonell er ulovlig', isCorrect: false },
              { id: 'b', text: 'Konvensjonell bruker etablerte kanaler (valg, parti), ukonvensjonell gaar utenfor (demonstrasjoner, boikott)', isCorrect: true },
              { id: 'c', text: 'Konvensjonell deltakelse er for voksne, ukonvensjonell er for unge', isCorrect: false },
              { id: 'd', text: 'Det er ingen reell forskjell', isCorrect: false },
            ],
            solution:
              'Konvensjonell deltakelse foelger etablerte demokratiske kanaler som valg og partimedlemskap. Ukonvensjonell deltakelse gaar utenfor disse, som demonstrasjoner og boikott. Begge former er stort sett lovlige.',
          },
          {
            id: 'samfunnskunnskap-4-6-n-quiz1-q1',
            task: 'Hva menes med medborgerskap?',
            options: [
              { id: 'a', text: 'Det samme som statsborgerskap', isCorrect: false },
              { id: 'b', text: 'Aa vaere en aktiv deltaker i samfunnet med baaade rettigheter og plikter', isCorrect: true },
              { id: 'c', text: 'Aa vaere medlem i et politisk parti', isCorrect: false },
              { id: 'd', text: 'Aa bo i en kommune', isCorrect: false },
            ],
            solution:
              'Medborgerskap handler om mer enn statsborgerskap. Det handler om aa vaere en aktiv deltaker i samfunnet, med sivile, politiske og sosiale rettigheter -- og med plikter som skatt, verneplikt og demokratisk deltakelse.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-6-n-section2',
      type: 'text',
      content: `## Sivilsamfunnet -- demokratiets pulsaare

Mellom staten og markedet finnes en tredje sfoere som er helt avgjorende for demokratiet: **sivilsamfunnet**. Det er den delen av samfunnet som bestaar av frivillige organisasjoner, foreninger og uformelle nettverk -- alt fra idrettslag og kulturforeninger til fagforeninger, interesseorganisasjoner som Norsk Folkehjelp og Roede Kors, religioese samfunn, politiske partier og humanitaere organisasjoner.

Sivilsamfunnets funksjoner er mange og viktige. Det gir folk mulighet til aa organisere seg og fremme sine interesser overfor myndighetene. Det skaper tilhoerighet og **sosial kapital** -- den tilliten og de nettverkene som oppstaar naar mennesker deltar i fellesskap. Det bidrar til demokratisk opplaering -- i en forening laerer du aa diskutere, forhandle og ta beslutninger. Og det fungerer som en motvekt til staten -- en sunn maktkritikk fra organiserte borgere.

Norge har et uvanlig sterkt sivilsamfunn. Over 80 prosent av nordmenn er medlem i minst en organisasjon. Det er en av grunnene til at det norske demokratiet fungerer saa godt.

Men hva med de mer kontroversielle formene for deltakelse? **Sivil ulydighet** er aa bevisst bryte loven for aa protestere mot noe man mener er urettferdig -- og akseptere straffen som foelger. Det er en aapen og fredelig handling, det protesteres mot urettferdighet, man aksepterer konsekvensene, og det er typisk en siste utvei etter at andre metoder er forsoekt.

Historien er full av eksempler: Rosa Parks nektet aa gi fra seg bussetet i USA i 1955. Gandhi ledet saltmarsjen i India i 1930. Norske laerere nektet aa underkaste seg nazifisering i 1942. I nyere tid har vi Altaaksjonen mot kraftutbygging (1979-81) og miljoaktivister som lenker seg fast mot oljeboring.

Er sivil ulydighet legitimt i et demokrati? Det finnes gode argumenter paa begge sider. For: Det kan paapeke urettferdighet, det har vaert historisk viktig for fremskritt, og det kan vaere noedvendig naar andre metoder ikke virker. Mot: Det undergraver rettsstaten, man kan ikke velge hvilke lover man foelger, og det finnes lovlige maater aa pavirke paa. Konklusjonen er at sivil ulydighet er kontroversielt, men i noen tilfeller -- naar det protesteres mot alvorlig urett -- kan det vaere etisk forsvarlig.`,
    },
    {
      id: 'samfunnskunnskap-4-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-6-n-quiz2-q0',
            task: 'Hva er sivilsamfunnet?',
            options: [
              { id: 'a', text: 'Staten og kommunene', isCorrect: false },
              { id: 'b', text: 'Frivillige organisasjoner og foreninger mellom stat og marked', isCorrect: true },
              { id: 'c', text: 'Naeringslivet og bedriftene', isCorrect: false },
              { id: 'd', text: 'Stortinget og regjeringen', isCorrect: false },
            ],
            solution:
              'Sivilsamfunnet er den delen av samfunnet som verken er stat eller marked -- frivillige organisasjoner, foreninger og uformelle nettverk. Over 80 prosent av nordmenn er medlem i minst en organisasjon.',
          },
          {
            id: 'samfunnskunnskap-4-6-n-quiz2-q1',
            task: 'Hva kjennetegner sivil ulydighet?',
            options: [
              { id: 'a', text: 'Voldelige protester mot myndighetene', isCorrect: false },
              { id: 'b', text: 'Aa bevisst bryte loven for aa protestere mot urettferdighet -- og akseptere straffen', isCorrect: true },
              { id: 'c', text: 'Aa stemme blankt ved valg', isCorrect: false },
              { id: 'd', text: 'Aa melde seg ut av alle organisasjoner', isCorrect: false },
            ],
            solution:
              'Sivil ulydighet er aa bevisst bryte loven for aa protestere mot noe man mener er urettferdig -- aaopent og fredelig -- og akseptere straffen som foelger. Historiske eksempler inkluderer Rosa Parks, Gandhis saltmarsj og Altaaksjonen.',
          },
          {
            id: 'samfunnskunnskap-4-6-n-quiz2-q2',
            task: 'Nevn fem maater unge kan delta politisk paa utenom aa stemme ved valg.',
            options: [
              { id: 'a', text: 'Det finnes bare een maate: aa stemme', isCorrect: false },
              { id: 'b', text: 'Ungdomsparti, demonstrasjoner, sosiale medier, elevraad, frivillige organisasjoner', isCorrect: true },
              { id: 'c', text: 'Unge kan ikke delta politisk foer de er 18 aar', isCorrect: false },
              { id: 'd', text: 'Bare gjennom aa skrive brev til Stortinget', isCorrect: false },
            ],
            solution:
              'Unge kan delta politisk paa mange maater: engasjere seg i ungdomsparti, delta i demonstrasjoner, bruke sosiale medier politisk, vaere med i elevraad/ungdomsraad, jobbe i frivillige organisasjoner, signere opprop, skrive leserinnlegg og mye mer.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett paa hva det betyr aa vaere medborger i et demokratisk samfunn.

**Medborgerskap:** Handler om aa vaere en aktiv deltaker i samfunnet med baaade rettigheter (sivile, politiske, sosiale) og plikter (skatt, verneplikt, demokratisk deltakelse).

**Former for deltakelse:** Konvensjonell deltakelse (valg, partimedlemskap, hoeringer), ukonvensjonell deltakelse (demonstrasjoner, boikott, sivil ulydighet), digital deltakelse (sosiale medier, online petisioner) og hverdagsdeltakelse (frivillig arbeid, foreningsliv).

**Sivilsamfunnet:** Frivillige organisasjoner og foreninger er avgjorende for demokratiet. De gir folk mulighet til aa organisere seg, skaper sosial kapital og fungerer som motvekt til staten. Norge har et uvanlig sterkt sivilsamfunn.

**Sivil ulydighet:** Aa bevisst bryte loven for aa protestere mot urettferdighet er kontroversielt, men kan i noen tilfeller vaere etisk forsvarlig -- saerlig naar det protesteres mot alvorlig urett og andre metoder er uttoemt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.7 NARRATIV: Trusler mot demokratiet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_4_7_NARRATIV: TextbookChapter = {
  id: 'samfunnskunnskap-4-7-narrativ',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4.7',
  title: 'Trusler mot demokratiet',
  subtitle: 'Narrativ versjon',
  description:
    'En kritisk gjennomgang av utfordringene demokratiet staar overfor -- fra polarisering og desinformasjon til debatter om demokratiets tilstand i verden.',
  estimatedMinutes: 30,
  competenceGoals: [
    'drofte utfordringer og trusler mot demokratiet',
    'reflektere over hvordan man kan styrke demokratiet',
  ],
  linkedChapterId: 'samfunnskunnskap-4-7',
  content: [
    {
      id: 'samfunnskunnskap-4-7-n-intro',
      type: 'text',
      content: `## Er demokratiet i fare?

Vi har brukt de siste kapitlene paa aa utforske hvordan demokratiet fungerer -- fra grunnprinsippene til det norske systemet, fra valgordningen til partilandskapet, fra lokaldemokrati til medborgerskap. Men naa maa vi stille et ubehagelig spoersmaal: Er demokratiet truet?

Det er uenighet om svaret. Noen mener vi lever i en tid med alvorlig demokratisk tilbakegang. Andre mener bekymringene er overdrevne. Og noen mener at selve debatten om demokratiets tilstand er paavirket av politiske holdninger -- at hva man ser som en "trussel", avhenger av hvor man staar politisk.

Det vi kan si, er at demokratiet staar overfor en rekke **utfordringer som ofte diskuteres**: lav valgdeltakelse i noen grupper, polarisering og "vi mot dem"-tenkning, desinformasjon og vanskeligheter med aa skille sant fra usant, svekket tillit til institusjoner, og oekende makt til teknologiselskaper.

**Ulike perspektiver** gjor bildet komplisert. Noen mener eliter og institusjoner har blitt for fjerne fra folket. Andre mener populistiske bevegelser truer liberal-demokratiske verdier. Noen bekymrer seg for utenlandsk paavirkning. Andre mener innenlandsk polarisering er viktigere.

Hva med Norge? Vi regnes som et av verdens sterkeste demokratier. Men ogsaa vi har utfordringer -- blant annet lav valgdeltakelse i noen grupper og debatter om ytringsfrihetens grenser. La oss se naermere paa de viktigste utfordringene.`,
    },
    {
      id: 'samfunnskunnskap-4-7-n-section1',
      type: 'text',
      content: `## Utfordringer innenfor demokratiet

Den kanskje mest alvorlige trusselen mot demokratiet kommer innenfra -- fra krefter og tendenser som kan undergraver det demokratiske systemet selv om de opererer innenfor dets rammer.

**Politisk ekstremisme** er en slik trussel. Ekstremisme paa begge ytterfloeyer kan true demokratiet. Norge opplevde dette paa den mest brutale maaten 22. juli 2011, da en hoeyreekstrem terrorist drepte 77 mennesker. Historisk har det ogsaa vaert venstreekstrem vold. Hatytringer og trusler mot politikere er et voksende problem, og radikalisering paa nettet bekymrer sikkerhetsmyndighetene.

**Polarisering** er en annen utfordring. Naar den politiske avstanden mellom grupper oeker, og "vi mot dem"-tenkning dominerer, blir det vanskeligere aa foere saklig debatt og finne kompromisser. Ekkokamre i sosiale medier forsterker dette -- du ser bare synspunkter som bekrefter dine egne meninger.

**Tillitsutfordringer** er ogsaa viktige. Noen mener politikere er for fjerne fra folket og ikke forstaar vanlige folks hverdag. Andre mener at mistillit til institusjoner undergraver demokratiet. Det er debatt om mediers objektivitet -- noen mener mediene er partiske, andre mener de gjor en viktig jobb. Og lav valgdeltakelse i noen grupper betyr at ikke alle stemmer hoeres.

**Oekonomiens rolle** er et tema med sterke meninger paa alle sider. Noen mener oekonomisk ulikhet svekker politisk likhet -- at de rike faar for mye innflytelse. Andre mener hoeye skatter og regulering begrenser frihet. Det er debatt om pengers rolle i politikken og om velferdsstatens omfang. Dette er dypt politiske spoersmaal der det er genuint uenighet.`,
    },
    {
      id: 'samfunnskunnskap-4-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-7-n-quiz1-q0',
            task: 'Hva menes med politisk polarisering?',
            options: [
              { id: 'a', text: 'At alle er enige om politikken', isCorrect: false },
              { id: 'b', text: 'Oekende avstand mellom politiske grupper der "vi mot dem"-tenkning dominerer', isCorrect: true },
              { id: 'c', text: 'At bare to partier finnes', isCorrect: false },
              { id: 'd', text: 'At valgdeltakelsen er hoey', isCorrect: false },
            ],
            solution:
              'Polarisering betyr oekende avstand mellom politiske grupper. Naar "vi mot dem"-tenkning dominerer, blir det vanskeligere aa foere saklig debatt og finne kompromisser.',
          },
          {
            id: 'samfunnskunnskap-4-7-n-quiz1-q1',
            task: 'Hva er ekkokamre?',
            options: [
              { id: 'a', text: 'Steder der politikere holder taler', isCorrect: false },
              { id: 'b', text: 'Lukkede informasjonsmiljoeer der man bare moeter synspunkter som bekrefter egne meninger', isCorrect: true },
              { id: 'c', text: 'En type sosiale medier', isCorrect: false },
              { id: 'd', text: 'Lokaler for politiske debatter', isCorrect: false },
            ],
            solution:
              'Ekkokamre er lukkede informasjonsmiljoeer -- ofte i sosiale medier -- der du hovedsakelig ser synspunkter som bekrefter dine egne meninger. Det forsterker polarisering ved aa gi inntrykk av at alle tenker som deg.',
          },
          {
            id: 'samfunnskunnskap-4-7-n-quiz1-q2',
            task: 'Hvorfor er lav valgdeltakelse en utfordring for demokratiet?',
            options: [
              { id: 'a', text: 'Fordi det koster mye aa arrangere valg', isCorrect: false },
              { id: 'b', text: 'Fordi det betyr at ikke alle stemmer hoeres og det svekker demokratiets legitimitet', isCorrect: true },
              { id: 'c', text: 'Fordi det bryter med loven', isCorrect: false },
              { id: 'd', text: 'Fordi det foerer til at valget maa tas om igjen', isCorrect: false },
            ],
            solution:
              'Naar faa deltar, hoeres ikke alle stemmer. De som ikke stemmer, lar andre bestemme for seg. Lav deltakelse svekker demokratiets legitimitet og kan gjoere at visse gruppers interesser oversees.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-7-n-section2',
      type: 'text',
      content: `## Desinformasjon og teknologiske utfordringer

I en tid der informasjon spres raskere enn noensinne, har **desinformasjon** blitt en av de mest omdiskuterte utfordringene for demokratiet. Falske nyheter og manipulert informasjon kan paavirke hva folk mener og hvordan de stemmer. Sosiale medier fungerer som spredningskanal -- en usann paastand kan naa millioner foer noen rekker aa sjekke fakta. Deepfakes og AI-generert innhold gjor det stadig vanskeligere aa skille sant fra usant. Og det er uenighet om hvem som sprer mest desinformasjon -- stater, politiske aktorer eller kommersielle interesser.

**Utenlandsk paavirkning** er et tema som faar mye oppmerksomhet. Mange land forsoeker aa paavirke andre lands politikk gjennom cyberangrep og hacking, desinformasjonskampanjer og andre virkemidler. Men det er debatt om hvor alvorlig trusselen faktisk er, og om fokuset paa utenlandsk paavirkning avleder oppmerksomheten fra innenlandske utfordringer.

**Teknologiselskapenes makt** reiser ogsaa spoersmaal. Store selskaper som Google, Meta (Facebook) og X (Twitter) kontrollerer mye av informasjonsflyten. Algoritmene deres bestemmer hva du ser i nyhetsfeeden -- og de er designet for aa holde deg engasjert, ikke noedvendigvis for aa gi deg et balansert bilde av virkeligheten. Det er debatt om personvern versus sikkerhet, og om hvordan -- eller om -- sosiale medier boer reguleres.

**Komplekse politiske spoersmaal** byr paa egne utfordringer for demokratiet. Migrasjon er et tema med sterke meninger paa alle sider. Miljoepolitikk skaper debatt om demokratisk tempo versus handlekraft -- noen mener demokratiet er for tregt til aa haandtere klimakrisen. Krisesituasjoner reiser spoersmaal om maktbalanse. Og det er ulike syn paa nasjonalstat versus overnasjonale organisasjoner -- hvor mye makt boer for eksempel EU ha?`,
    },
    {
      id: 'samfunnskunnskap-4-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-7-n-quiz2-q0',
            task: 'Hva er desinformasjon?',
            options: [
              { id: 'a', text: 'Informasjon som er kjedelig', isCorrect: false },
              { id: 'b', text: 'Bevisst feilinformasjon som spres for aa villede og manipulere', isCorrect: true },
              { id: 'c', text: 'Informasjon fra staten', isCorrect: false },
              { id: 'd', text: 'Alle nyheter paa internett', isCorrect: false },
            ],
            solution:
              'Desinformasjon er bevisst feilinformasjon som spres for aa villede. Det er en trussel fordi det gjor det vanskelig aa ta informerte valg, undergraver tillit til medier og institusjoner, og kan manipulere valg.',
          },
          {
            id: 'samfunnskunnskap-4-7-n-quiz2-q1',
            task: 'Hvorfor er teknologiselskapers makt en utfordring for demokratiet?',
            options: [
              { id: 'a', text: 'Fordi de lager dyre produkter', isCorrect: false },
              { id: 'b', text: 'Fordi de kontrollerer informasjonsflyten og algoritmene bestemmer hva vi ser', isCorrect: true },
              { id: 'c', text: 'Fordi de er utenlandske', isCorrect: false },
              { id: 'd', text: 'Fordi de ansetter for mange mennesker', isCorrect: false },
            ],
            solution:
              'Store teknologiselskaper kontrollerer mye av informasjonsflyten gjennom sine algoritmer. De bestemmer hva du ser i nyhetsfeeden, og de er designet for engagement, ikke noedvendigvis for aa gi et balansert bilde.',
          },
          {
            id: 'samfunnskunnskap-4-7-n-quiz2-q2',
            task: 'Hva menes med demokratisk tilbakegang?',
            options: [
              { id: 'a', text: 'At folk slutter aa stemme', isCorrect: false },
              { id: 'b', text: 'Svekkelse av demokratiske institusjoner og normer i et land', isCorrect: true },
              { id: 'c', text: 'At nye partier stiftes', isCorrect: false },
              { id: 'd', text: 'At valgdagen flyttes', isCorrect: false },
            ],
            solution:
              'Demokratisk tilbakegang brukes om svekkelse av demokratiske institusjoner og normer. Det er uenighet om begrepet -- noen mener det beskriver reelle endringer, andre mener det brukes politisk. Det viser at demokrati kan defineres ulikt.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-7-n-section3',
      type: 'text',
      content: `## Ulike syn paa demokratiets tilstand

Det er genuint uenighet om demokratiets tilstand i verden, og det er viktig aa forstaa de ulike perspektivene.

Fra **liberalt hold** uttrykkes bekymring over at valgte ledere i noen land endrer spillereglene -- for eksempel ved aa svekke domstolenes uavhengighet eller begrense pressefriheten. Sivilsamfunnet begrenses i noen land, og medier settes under press. Eksempler som ofte trekkes frem er Ungarn og Polen, der EU har kritisert landene for brudd paa rettsstatsprinsipper.

Men det finnes **motargumenter**. Tilhengere av disse lederne paaapeker at de er demokratisk valgt og gjennomfoerer det velgerne oensket. De mener kritikken kommer fra eliter som mistet makt, at ulike demokratitradisjoner er legitime, og at internasjonale organisasjoner blander seg inn i nasjonal suverenitet.

I USA ser vi sterk polarisering mellom politiske grupper, med uenighet om valgintegritet og pressefrihet. Begge sider anklager hverandre for aa undergrave demokratiet.

Mer generelt: Noen ser **populisme** -- politikk som setter en motsetning mellom "folket" og "eliten" -- som en trussel mot demokratiet. Andre mener populisme er demokrati i praksis -- at det er folkets rost mot en elite som ikke lytter.

Den viktigste innsikten er kanskje denne: Det er genuint uenighet om hva som styrker og svekker demokratiet. Ulike mennesker med ulike verdier og erfaringer kan se paa den samme situasjonen og komme til helt forskjellige konklusjoner. Det er viktig aa kunne analysere ulike perspektiver kritisk -- uten aa automatisk avfeie den ene siden.`,
    },
    {
      id: 'samfunnskunnskap-4-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-4-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnskunnskap-4-7-n-quiz3-q0',
            task: 'Hva er populisme?',
            options: [
              { id: 'a', text: 'En bestemt politisk ideologi', isCorrect: false },
              { id: 'b', text: 'En politisk stil som setter en motsetning mellom folket og eliten', isCorrect: true },
              { id: 'c', text: 'Det samme som demokrati', isCorrect: false },
              { id: 'd', text: 'En form for diktatur', isCorrect: false },
            ],
            solution:
              'Populisme er en politisk stil som setter en motsetning mellom "folket" og "eliten". Noen ser det som en trussel mot demokratiet, andre mener det er demokrati i praksis. Det er genuint uenighet om dette.',
          },
          {
            id: 'samfunnskunnskap-4-7-n-quiz3-q1',
            task: 'Hvorfor er det uenighet om hva som truer demokratiet?',
            options: [
              { id: 'a', text: 'Fordi ingen bryr seg om demokrati', isCorrect: false },
              { id: 'b', text: 'Fordi folk med ulike verdier og erfaringer ser paa samme situasjon og kommer til ulike konklusjoner', isCorrect: true },
              { id: 'c', text: 'Fordi demokrati ikke kan defineres', isCorrect: false },
              { id: 'd', text: 'Fordi bare eksperter forstaar demokrati', isCorrect: false },
            ],
            solution:
              'Hva man ser som en trussel mot demokratiet, avhenger ofte av egne verdier og politiske ståsted. Det er genuint uenighet om hva som styrker og svekker demokratiet, og det er viktig aa analysere ulike perspektiver kritisk.',
          },
        ],
      },
    },
    {
      id: 'samfunnskunnskap-4-7-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi sett paa utfordringer og trusler mot demokratiet.

**Utfordringer innenfra:** Politisk ekstremisme, polarisering og "vi mot dem"-tenkning, tillitsutfordringer mellom borgere og institusjoner, og debatter om oekonomisk ulikhet og maktforhold.

**Desinformasjon og teknologi:** Falske nyheter og manipulert informasjon gjor det vanskelig aa ta informerte valg. Teknologiselskapers algoritmestyring paavirker hva vi ser og mener. Utenlandsk paavirkning og cyberangrep er temaer med mye debatt.

**Ulike perspektiver:** Det er genuint uenighet om hva som utgjor de stoerste truslene. Noen bekymrer seg for svekkelse av liberale institusjoner, andre mener eliter er for fjerne fra folket. Populisme kan sees baaade som en trussel og som et demokratisk uttrykk.

**Det viktigste:** Demokrati er ikke noe vi kan ta for gitt. Det krever vaakne borgere som deltar, stiller spoersmaal og analyserer ulike perspektiver kritisk. Din deltakelse -- baaade gjennom valg og paa andre maater -- er med paa aa styrke demokratiet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const SAMFUNNSKUNNSKAP_NARRATIV_DEL4_CHAPTERS = [
  CHAPTER_SAMFUNNSKUNNSKAP_4_1_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_4_2_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_4_3_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_4_4_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_4_5_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_4_6_NARRATIV,
  CHAPTER_SAMFUNNSKUNNSKAP_4_7_NARRATIV,
];
