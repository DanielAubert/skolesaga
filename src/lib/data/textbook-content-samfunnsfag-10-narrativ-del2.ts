/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsfag 10. klasse - NARRATIV VERSJON DEL 2
 * Kapittel 5-7: Konflikter/fred, Norsk politikk, Oekonomi/arbeidsliv
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * aa lese og lytte til, med quiz-spoersmaal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5 NARRATIV: Konflikter og fredsarbeid
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_5_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-5-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '5',
  title: 'Konflikter og fredsarbeid',
  subtitle: 'Narrativ versjon',
  description: 'Historien om hvorfor konflikter oppstaar, hvordan de kan loeses, og hvilken rolle FN, diplomati og fredsbygging spiller i en urolig verden.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive korleis konfliktar oppstår og korleis dei kan løysast',
    'utforske ulike plasser og folk sine levekår og drøfte tiltak for meir rettferdig fordeling',
    'drøfte korleis makt og maktmisbruk kjem til uttrykk i ulike samanhengar',
  ],
  linkedChapterId: 'samfunnsfag-10-5',
  content: [
    {
      id: 'samfunnsfag-10-5-n-intro',
      type: 'text',
      content: `## Hvorfor gaar mennesker til krig?

I skrivende stund paagaar det vaepnede konflikter i flere titalls land verden over. Mennesker dreper hverandre, familier drives paa flukt, og byer legges i ruiner. Hvorfor? Hva er det som faar mennesker til aa gripe til vaapen mot hverandre?

Svaret er sjelden enkelt. **Konflikter** oppstaar naar to eller flere parter har motstridende interesser som de ikke klarer aa loese paa fredelig vis. Aarsakene kan vaere mange: kamp om territorium og ressurser, etniske og religioese motsetninger, urettferdig fordeling av makt og rikdom, eller ideologiske forskjeller.

Ofte er det flere aarsaker som virker sammen. Ta konflikten i Syria som eksempel: den startet med fredelige demonstrasjoner mot et undertrykkende regime, men utviklet seg til en brutal borgerkrig der etniske, religioese og geopolitiske spenninger flaettet seg inn i hverandre. Regionale og globale stormakter blandet seg inn, og det som begynte som et lokalt opproer ble en internasjonal konflikt.

Vi skiller gjerne mellom **mellomstatlige konflikter** (mellom to eller flere stater) og **borgerkriger** (innad i et land). I dag er borgerkriger langt mer vanlige enn kriger mellom stater. Vi skiller ogsaa mellom **symmetriske konflikter** (der partene er omtrent like sterke) og **asymmetriske konflikter** (der den ene parten er mye sterkere enn den andre, som i geriljakrig eller terrorisme).`,
    },
    {
      id: 'samfunnsfag-10-5-n-section1',
      type: 'text',
      content: `## FN og jakten paa fred

Etter oeodeleggelsene i to verdenskriger ble **De forente nasjoner (FN)** grunnlagt i 1945 med ett hovedmaal: aa forhindre krig. FN erstattet det mislykkede Folkeforbundet og ble bygget paa ideen om at stater kunne loese konflikter gjennom samtaler i stedet for vaapen.

FNs viktigste organ for fred og sikkerhet er **Sikkerhetsraadet**, som bestaar av fem faste medlemmer (USA, Russland, Kina, Frankrike og Storbritannia) og ti valgte medlemmer. Sikkerhetsraadet kan vedta sanksjoner, sende fredsbevarende styrker og i siste instans autorisere bruk av militaer makt. Men systemet har en stor svakhet: de fem faste medlemmene har **vetorett** -- de kan blokkere ethvert vedtak alene. Det har gjort FN maktesloest i mange konflikter der stormakter staar paa ulike sider.

**Diplomati** er kunsten aa loese konflikter gjennom forhandlinger og dialog. Norge har en stolt tradisjon for diplomati -- kanskje mest kjent gjennom **Oslo-avtalen i 1993**, der norske diplomater la til rette for hemmelige fredsforhandlinger mellom Israel og PLO. Avtalen ga haap om fred i Midtoesten, selv om den dessverre ikke foerte til en varig loesning.

FN sender ogsaa **fredsbevarende styrker** -- soldater med blaa hjelmer -- til konfliktomraader for aa overvaake vaapenhviler, beskytte sivile og stoette fredsprosesser. Norge har bidratt til FN-operasjoner over hele verden.`,
    },
    {
      id: 'samfunnsfag-10-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa konflikter og FN:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-5-n-quiz1-q0',
            task: 'Hvilken type konflikt er mest vanlig i dag?',
            options: [
              { id: 'a', text: 'Kriger mellom to stater', isCorrect: false },
              { id: 'b', text: 'Borgerkriger innad i et land', isCorrect: true },
              { id: 'c', text: 'Verdenskrig', isCorrect: false },
              { id: 'd', text: 'Handelskriger', isCorrect: false },
            ],
            solution: 'I dag er borgerkriger langt mer vanlige enn mellomstatlige kriger. Disse konfliktene involverer ofte ogsaa utenlandske aktorer som stoetter ulike sider.',
          },
          {
            id: 'samfunnsfag-10-5-n-quiz1-q1',
            task: 'Hva var Oslo-avtalen i 1993?',
            options: [
              { id: 'a', text: 'En klimaavtale mellom europeiske land', isCorrect: false },
              { id: 'b', text: 'En handelsavtale mellom Norge og EU', isCorrect: false },
              { id: 'c', text: 'En fredsavtale mellom Israel og PLO, tilrettelagt av Norge', isCorrect: true },
              { id: 'd', text: 'En FN-resolusjon om menneskerettigheter', isCorrect: false },
            ],
            solution: 'Oslo-avtalen var en historisk fredsavtale mellom Israel og PLO (palestinernes frigjoringsorganisasjon) i 1993. Norske diplomater la til rette for hemmelige forhandlinger som foerte til avtalen.',
          },
          {
            id: 'samfunnsfag-10-5-n-quiz1-q2',
            task: 'Hva er den stoerste svakheten ved FNs sikkerhetsraad?',
            options: [
              { id: 'a', text: 'At det har for mange medlemmer', isCorrect: false },
              { id: 'b', text: 'At stormaktene har vetorett og kan blokkere vedtak', isCorrect: true },
              { id: 'c', text: 'At det bare moetes en gang i aaret', isCorrect: false },
              { id: 'd', text: 'At det ikke har noen militaer makt', isCorrect: false },
            ],
            solution: 'Vetoretten gjor at én enkelt stormakt kan blokkere vedtak i Sikkerhetsraadet, selv om alle andre er enige. Dette har forhindret FN fra aa handle i mange alvorlige konflikter.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-5-n-section2',
      type: 'text',
      content: `## Fredsbygging -- det lange arbeidet

Aa stanse en krig er vanskelig, men det som er enda vanskeligere er aa bygge varig fred. **Fredsbygging** handler om mye mer enn bare aa faa partene til aa legge ned vaapnene. Det handler om aa adressere de underliggende aarsakene til konflikten -- fattigdom, urettferdighet, mistillit og hat.

Etter en krig maa samfunnet gjenoppbygges, baade fysisk og psykisk. Infrastruktur som veier, skoler og sykehus maa repareres. Men ogsaa de usynlige saarene maa leges: mennesker som har mistet familiemedlemmer, som har opplevd vold og overgrep, maa faa hjelp til aa bearbeide traumene sine.

**Forsoning** er en sentral del av fredsbygging. I Soer-Afrika etter apartheid opprettet man en **sannhets- og forsoningskommisjon** der overgripere kunne fortelle sannheten om hva de hadde gjort i bytte mot amnesti. Maaalet var ikke aa glemme, men aa erkjenne hva som hadde skjedd og legge grunnlaget for et nytt og mer rettferdig samfunn.

Fredsbygging krever ogsaa at mennesker faar tilbake troen paa at det er mulig aa loese uenigheter uten vold. Det betyr demokratiutvikling, rettsstatsprinsipper, utdanning og oekonomisk utvikling. Det er et langsiktig arbeid som ofte tar tiaar, og det er aldri garantert aa lykkes. Men alternativet -- en evig syklus av krig, hevn og ny krig -- er uendelig mye verre.

Ogsaa paa lavere nivaa handler konfliktloesning om de samme prinsippene: dialog, empati og vilje til aa forstaa den andres perspektiv. Enten det gjelder konflikter mellom stater eller mellom elever paa en skole, er kjernen den samme: aa finne loesninger som begge parter kan leve med.`,
    },
    {
      id: 'samfunnsfag-10-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa fredsbygging:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-5-n-quiz2-q0',
            task: 'Hva handler fredsbygging om?',
            options: [
              { id: 'a', text: 'Bare aa stanse krigshandlingene', isCorrect: false },
              { id: 'b', text: 'Aa straffe taperne i en krig', isCorrect: false },
              { id: 'c', text: 'Aa adressere de underliggende aarsakene til konflikten og bygge varig fred', isCorrect: true },
              { id: 'd', text: 'Aa bygge militaere baser for aa hindre nye kriger', isCorrect: false },
            ],
            solution: 'Fredsbygging er mye mer enn vaapenhvile. Det handler om aa takle aarsakene til konflikten -- som fattigdom, urettferdighet og hat -- og bygge tillit, demokrati og rettferdighet.',
          },
          {
            id: 'samfunnsfag-10-5-n-quiz2-q1',
            task: 'Hva var Soer-Afrikas sannhets- og forsoningskommisjon?',
            options: [
              { id: 'a', text: 'En domstol som straffer krigsforbrytere', isCorrect: false },
              { id: 'b', text: 'En kommisjon der overgripere fortalte sannheten i bytte mot amnesti', isCorrect: true },
              { id: 'c', text: 'Et FN-organ for aa overvaake valg', isCorrect: false },
              { id: 'd', text: 'En organisasjon som drev med humanitaer hjelp', isCorrect: false },
            ],
            solution: 'Etter apartheid opprettet Soer-Afrika en sannhets- og forsoningskommisjon der overgripere kunne innroemme sannheten i bytte mot amnesti. Maaalet var forsoning og aa legge grunnlaget for et nytt samfunn.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-5-n-summary',
      type: 'text',
      content: `## Oppsummering

**Konflikter** oppstaar naar parter har motstridende interesser som de ikke klarer aa loese fredelig. Aarsaker kan vaere territorium, ressurser, etnisitet, religion eller maktfordeling. Vi skiller mellom **mellomstatlige konflikter** og **borgerkriger**, og mellom **symmetriske** og **asymmetriske** konflikter.

**FN** ble grunnlagt i 1945 for aa forhindre krig. **Sikkerhetsraadet** kan vedta sanksjoner og sende fredsbevarende styrker, men svekkes av **vetoretten**. **Diplomati** -- som Oslo-avtalen -- er forhandlingskunsten for aa loese konflikter. **Fredsbygging** handler om det lange arbeidet med aa adressere aarsakene til konflikt, inkludert **forsoning**, demokrati og oekonomisk utvikling.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6 NARRATIV: Norsk politikk og styreform
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_6_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-6-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '6',
  title: 'Norsk politikk og styreform',
  subtitle: 'Narrativ versjon',
  description: 'En reise gjennom det norske politiske systemet -- fra Stortingets plenumssal til kommunestyremoedet i hjemkommunen din, og partiene som kjemper om makten.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og beskrive korleis ulike politiske system er organiserte',
    'reflektere over hva det innebærer å være medborger, og ulike former for demokratisk deltakelse',
    'drøfte korleis makt og maktmisbruk kjem til uttrykk i ulike samanhengar',
  ],
  linkedChapterId: 'samfunnsfag-10-6',
  content: [
    {
      id: 'samfunnsfag-10-6-n-intro',
      type: 'text',
      content: `## Hvem bestemmer egentlig i Norge?

Hvem bestemte at du maa gaa paa skolen? Hvem avgjor hvor mye foreldrene dine betaler i skatt? Hvem bestemmer om det skal bygges ny vei i kommunen din eller om det skal satses paa sykkelstier? Svaret er at det gjor norske politikere -- valgt av deg og meg. Men hvordan fungerer egentlig det norske politiske systemet?

Norge er et **konstitusjonelt monarki** med **parlamentarisk styreform**. Det hoeres kanskje komplisert ut, men la oss ta det bit for bit. Konstitusjonelt monarki betyr at vi har en konge (eller dronning), men at kongens makt er sterkt begrenset av Grunnloven. Kongen har i dag en seremonielle rolle -- han aapner Stortinget, representer Norge i utlandet og er et samlende symbol for nasjonen. Den reelle makten ligger hos de folkevalgte.

**Parlamentarisme** betyr at regjeringen maa ha stoette fra flertallet i Stortinget for aa kunne regjere. Hvis et flertall av representantene stemmer mot regjeringen i en viktig sak -- et saaakalt **mistillitsforslag** -- maa regjeringen gaa av. Dette gir Stortinget makten til aa kontrollere regjeringen og sikrer at den utovende makten alltid har stoeette i folkeviljen.`,
    },
    {
      id: 'samfunnsfag-10-6-n-section1',
      type: 'text',
      content: `## Stortinget, regjeringen og kommunen

**Stortinget** er Norges nasjonalforsamling og den lovgivende makten. De 169 representantene velges av folket hvert fjerde aar gjennom stortingsvalg. Stortingets viktigste oppgaver er aa vedta lover, vedta statsbudsjettet og kontrollere regjeringen. Representantene er organisert i komiteer som jobber med ulike saksomraader -- som helse, utdanning, forsvar og finans.

**Regjeringen** er den utovende makten. Den ledes av statsministeren og bestaar av statsraader (ministre) som styrer hvert sitt departement. Regjeringen setter Stortingets vedtak ut i livet, lager lovforslag og tar daglige avgjoerelser om styringen av landet. I Norge har vi ofte **mindretallsregjeringer** -- regjeringer som ikke har flertall paa Stortinget alene, og som derfor maa forhandle med andre partier for aa faa gjennom politikken sin.

Men ikke alt avgjores i Oslo. Norge har et **tredelt styringsnivaa**: stat, fylkeskommune og kommune. **Kommunen** er det naermeste styringsnivaaet til deg. Det er kommunen som driver skolen din, bestemmer hvor det skal bygges boliger, drifter helsestasjonen og broeyeter veiene om vinteren. Kommunestyret velges ogsaa hvert fjerde aar, men ved kommunevalg -- to aar etter stortingsvalget.

**Fylkeskommunen** har ansvar for blant annet videregaaende skoler, fylkesveier og kollektivtransport. Og paa toppen sitter staten med ansvar for saker som angaar hele landet, som forsvar, utenrikspolitikk og overordnet lovgivning.`,
    },
    {
      id: 'samfunnsfag-10-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa norsk styreform:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-6-n-quiz1-q0',
            task: 'Hva betyr parlamentarisme?',
            options: [
              { id: 'a', text: 'At kongen har den reelle makten', isCorrect: false },
              { id: 'b', text: 'At regjeringen maa ha stoette fra flertallet i Stortinget', isCorrect: true },
              { id: 'c', text: 'At folket stemmer direkte paa alle lover', isCorrect: false },
              { id: 'd', text: 'At domstolene kontrollerer Stortinget', isCorrect: false },
            ],
            solution: 'Parlamentarisme betyr at regjeringen maa ha tillit fra flertallet i Stortinget. Hvis flertallet stemmer mistillit, maa regjeringen gaa av.',
          },
          {
            id: 'samfunnsfag-10-6-n-quiz1-q1',
            task: 'Hva er en mindretallsregjering?',
            options: [
              { id: 'a', text: 'En regjering med faerre enn ti ministre', isCorrect: false },
              { id: 'b', text: 'En regjering som ikke har flertall paa Stortinget alene', isCorrect: true },
              { id: 'c', text: 'En regjering som styrer bare halve landet', isCorrect: false },
              { id: 'd', text: 'En regjering som er valgt av mindretallet av velgerne', isCorrect: false },
            ],
            solution: 'En mindretallsregjering er en regjering der partiet eller partiene som utgjor regjeringen ikke har flertall paa Stortinget. De maa derfor forhandle med andre partier for aa faa gjennom politikken sin.',
          },
          {
            id: 'samfunnsfag-10-6-n-quiz1-q2',
            task: 'Hvilket styringsnivaa driver skolen din?',
            options: [
              { id: 'a', text: 'Staten', isCorrect: false },
              { id: 'b', text: 'Fylkeskommunen', isCorrect: false },
              { id: 'c', text: 'Kommunen', isCorrect: true },
              { id: 'd', text: 'EU', isCorrect: false },
            ],
            solution: 'Grunnskolen drives av kommunen. Videregaaende skole drives av fylkeskommunen. Staten setter de overordnede rammene gjennom laereplaner og lovverk.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-6-n-section2',
      type: 'text',
      content: `## Politiske partier -- fra venstre til hoeyre

Norsk politikk er preget av et **flerpartisystem** med mange partier som representerer ulike verdier og interesser. Partiene plasseres gjerne paa en akse fra **venstre** til **hoeyre** i politikken.

Partier paa **venstresiden** (som SV, Arbeiderpartiet og Roedt) legger vekt paa oekonomisk utjevning, sterk velferdsstat, offentlig eierskap og arbeidernes rettigheter. De oensker gjerne hoeyre skatter for de rikeste og mer offentlig styring av oekonomien.

Partier paa **hoeyresiden** (som Hoeyre, Fremskrittspartiet og Venstre) legger vekt paa individuell frihet, lavere skatter, mindre offentlig styring og stoerre rom for privat naeringsvirksomhet. De mener gjerne at markedet og enkeltmennesker selv er best egnet til aa ta mange avgjoerelser.

**Sentrumspartier** som Senterpartiet og Kristelig Folkeparti befinner seg mellom ytterpunktene og vektlegger distriktspolitikk, verdier og balanse mellom privat og offentlig sektor.

Det er viktig aa forstaa at venstre-hoeyre-aksen er en forenkling. Mange saker passer ikke inn paa denne aksen -- for eksempel miljoepolitikk, innvandring eller spoerrsmaal om moral og religion. Miljoepartiet De Gronne legger for eksempel miljoeet foer tradisjonell oekonomisk tenkning, uansett side.

Hvordan en lov blir til, er ogsaa verdt aa forstaa. Regjeringen lager vanligvis et **lovforslag** som sendes til Stortinget. Der behandles det i en relevant komité, debatteres i plenum og stemmes over. Hvis flertallet stemmer for, sendes loven til kongen for formell sanksjon. Denne prosessen sikrer at lovene er grundig vurdert og forankret i folkeviljen.`,
    },
    {
      id: 'samfunnsfag-10-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa politiske partier:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-6-n-quiz2-q0',
            task: 'Hva kjennetegner partier paa venstresiden?',
            options: [
              { id: 'a', text: 'Lavere skatter og mindre offentlig styring', isCorrect: false },
              { id: 'b', text: 'Oekonomisk utjevning og sterk velferdsstat', isCorrect: true },
              { id: 'c', text: 'Fokus paa distriktspolitikk', isCorrect: false },
              { id: 'd', text: 'Ingen offentlige tjenester', isCorrect: false },
            ],
            solution: 'Venstresidens partier legger vekt paa oekonomisk utjevning, sterk velferdsstat, hoeyre skatter for de rikeste og mer offentlig styring av oekonomien.',
          },
          {
            id: 'samfunnsfag-10-6-n-quiz2-q1',
            task: 'Hvem lager vanligvis et lovforslag i Norge?',
            options: [
              { id: 'a', text: 'Kongen', isCorrect: false },
              { id: 'b', text: 'Domstolene', isCorrect: false },
              { id: 'c', text: 'Regjeringen', isCorrect: true },
              { id: 'd', text: 'Kommunene', isCorrect: false },
            ],
            solution: 'Det er vanligvis regjeringen som utarbeider lovforslag (proposisjoner) som sendes til Stortinget for behandling og avstemning. Stortingsrepresentanter kan ogsaa fremme egne lovforslag.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-6-n-summary',
      type: 'text',
      content: `## Oppsummering

Norge er et **konstitusjonelt monarki** med **parlamentarisk styreform**, der regjeringen maa ha stoette fra Stortingets flertall. **Stortinget** vedtar lover og kontrollerer regjeringen, **regjeringen** setter lovene ut i livet, og **domstolene** doemer. Styringen er ogsaa delt mellom stat, fylkeskommune og kommune -- det er kommunen som driver skolen din.

Norske partier plasseres paa en akse fra **venstre** (utjevning, velferdsstat) til **hoeyre** (individuell frihet, lavere skatter), med **sentrumspartier** i midten. Norge har ofte **mindretallsregjeringer** som maa forhandle med andre partier. Lovforslag utarbeides vanligvis av regjeringen, behandles i Stortingets komiteer, debatteres og stemmes over i plenum.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7 NARRATIV: Oekonomi og arbeidsliv
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_7_NARRATIV: TextbookChapter = {
  id: 'samfunnsfag-10-7-narrativ',
  courseId: 'samfunnsfag-10',
  chapterNumber: '7',
  title: 'Økonomi og arbeidsliv',
  subtitle: 'Narrativ versjon',
  description: 'Historien om den norske modellen -- hvordan fagforeninger, arbeidsgivere og staten samarbeider for aa skape et av verdens beste arbeidsliv, og hvorfor dette angaar deg.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske korleis teknologi har endra og endrar arbeidsliv og samfunn',
    'drøfte korleis ulike grupper har bidratt til å endre samfunnet',
    'utforske ulike plasser og folk sine levekår og drøfte tiltak for meir rettferdig fordeling',
  ],
  linkedChapterId: 'samfunnsfag-10-7',
  content: [
    {
      id: 'samfunnsfag-10-7-n-intro',
      type: 'text',
      content: `## Hvorfor har nordmenn det saa bra paa jobb?

Visste du at norske arbeidstakere har fem uker ferie i aaret, rett til sykepenger fra dag en, og at foreldrene dine hadde rett til lang foedselspermisjon da du ble foedt? I mange andre land er dette utenkelig. I USA har arbeidstakere for eksempel ingen lovfestet rett til betalt ferie eller sykepenger. Hvorfor er det slik?

Svaret ligger i noe vi kaller **den norske modellen** -- et unikt samarbeid mellom tre parter: arbeidstakerne (representert av **fagforeninger**), arbeidsgiverne (representert av arbeidsgiverorganisasjoner) og **staten**. Denne trepartsmodellen, ogsaa kalt **trepartssamarbeidet**, er selve grunnmuren i det norske arbeidslivet.

Ideen er enkel, men kraftfull: i stedet for at arbeidsgivere ensidig bestemmer loenninger og arbeidsvilkaar, forhandler de med fagforeningene. Og staten er med som tilrettelegger, lovgiver og megler naar partene ikke blir enige. Resultatet er et arbeidsliv preget av relativt smaa loennsforskjeller, hoey tillit mellom partene og gode vilkaar for arbeidstagerne.

Men den norske modellen oppsto ikke av seg selv. Den ble bygget gjennom tiaar med kamp, forhandlinger og kompromisser -- og den maa stadig vedlikeholdes.`,
    },
    {
      id: 'samfunnsfag-10-7-n-section1',
      type: 'text',
      content: `## Fagforeninger og loennsforhandlinger

**Fagforeninger** er organisasjoner der arbeidstakere gaar sammen for aa styrke sin stilling overfor arbeidsgiverne. I Norge er rundt halvparten av arbeidstakerne organisert i en fagforening. De stoerste er LO (Landsorganisasjonen), Unio og YS.

Hvert aar eller annethvert aar gjennomfoeres **loennsforhandlinger** mellom fagforeningene og arbeidsgiverorganisasjonene. Dette kalles **tariffoppgjoer**. En **tariffavtale** er en kollektiv avtale som regulerer loenninger, arbeidstid, overtidsbetaling, ferie og andre vilkaar. Den gjelder for alle ansatte i bedriftene som er omfattet av avtalen.

Prosessen starter gjerne med at **frontfagene** -- de delene av naeringslivet som konkurrerer internasjonalt, som industrien -- forhandler foerst. Resultatet setter en norm for resten av arbeidslivet. Dette systemet kalles **frontfagsmodellen**, og den sikrer at loennsveksten i Norge ikke blir saa hoey at bedriftene mister konkurranseevnen internasjonalt.

Hva skjer naar partene ikke blir enige? Da kan fagforeningene ta ut medlemmene i **streik** -- de nekter aa jobbe. Arbeidsgiverne kan svare med **lockout** -- de stenger arbeidstakerne ute. Hvis konflikten truer viktige samfunnsfunksjoner (som helse), kan staten gripe inn med **tvungen loennsnemnd**, der en nemnd fastsetter resultatet.

Streik er et dramatisk virkemiddel, men bare det at muligheten finnes, gjor at partene vanligvis strekker seg litt lenger for aa bli enige. Det er trusselen om streik som gir fagforeningene forhandlingsstyrke.`,
    },
    {
      id: 'samfunnsfag-10-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv paa den norske modellen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-7-n-quiz1-q0',
            task: 'Hva er trepartssamarbeidet?',
            options: [
              { id: 'a', text: 'Samarbeid mellom Stortinget, regjeringen og domstolene', isCorrect: false },
              { id: 'b', text: 'Samarbeid mellom arbeidstakere, arbeidsgivere og staten', isCorrect: true },
              { id: 'c', text: 'Samarbeid mellom Norge, Sverige og Danmark', isCorrect: false },
              { id: 'd', text: 'Samarbeid mellom tre ulike fagforeninger', isCorrect: false },
            ],
            solution: 'Trepartssamarbeidet er samarbeidet mellom fagforeninger (arbeidstakere), arbeidsgiverorganisasjoner og staten. Sammen forhandler de fram loesninger for arbeidslivet.',
          },
          {
            id: 'samfunnsfag-10-7-n-quiz1-q1',
            task: 'Hva er en tariffavtale?',
            options: [
              { id: 'a', text: 'En personlig arbeidskontrakt', isCorrect: false },
              { id: 'b', text: 'En lov vedtatt av Stortinget', isCorrect: false },
              { id: 'c', text: 'En kollektiv avtale om loenninger og arbeidsvilkaar', isCorrect: true },
              { id: 'd', text: 'En avtale mellom to bedrifter', isCorrect: false },
            ],
            solution: 'En tariffavtale er en kollektiv avtale mellom fagforeninger og arbeidsgivere som regulerer loenninger, arbeidstid, ferie og andre arbeidsvilkaar for alle ansatte som er omfattet.',
          },
          {
            id: 'samfunnsfag-10-7-n-quiz1-q2',
            task: 'Hva er frontfagsmodellen?',
            options: [
              { id: 'a', text: 'At de best betalte yrkene forhandler foerst', isCorrect: false },
              { id: 'b', text: 'At konkurranseutsatt industri forhandler foerst og setter norm for resten', isCorrect: true },
              { id: 'c', text: 'At staten bestemmer alle loenninger', isCorrect: false },
              { id: 'd', text: 'At utenlandske bedrifter bestemmer norske loenninger', isCorrect: false },
            ],
            solution: 'Frontfagsmodellen betyr at de delene av naeringslivet som konkurrerer internasjonalt (industrien) forhandler foerst. Resultatet setter rammen for resten av loennsoppgjoerene.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-7-n-section2',
      type: 'text',
      content: `## Velferdsstaten og rettigheter i arbeidslivet

Den norske modellen handler ikke bare om loennsforhandlinger. Den haenger tett sammen med **velferdsstaten** -- systemet der fellesskapet gjennom skatter sikrer at alle innbyggere har tilgang til grunnleggende tjenester og trygghet.

Velferdsstaten betyr at du faar gratis skolegang fra foerste klasse til og med videregaaende. At du faar behandling paa sykehuset uten aa gaa konkurs. At foreldrene dine faar sykepenger hvis de blir syke, arbeidsledighetstrygd hvis de mister jobben, og pensjon naar de blir eldre. Det er ikke veldedighet -- det er et system bygget paa solidaritet, der vi betaler skatt for aa sikre hverandre.

Naar du snart skal ut i arbeidslivet, har du rettigheter som er nedfelt i lov. **Arbeidsmiljoeloven** gir deg rett til et trygt og godt arbeidsmiljoe, regulerer arbeidstid og overtid, og beskytter deg mot usaklig oppsigelse. Du har rett til skriftlig arbeidskontrakt, og du kan ikke diskrimineres paa grunn av kjoenn, alder, etnisitet eller andre forhold.

Men rettigheter foelges ogsaa av **plikter**. Som arbeidstaker har du plikt til aa gjore jobben din ordentlig, foelge reglene paa arbeidsplassen og bidra til et godt arbeidsmiljoe. Rettigheter og plikter gaar haand i haand.

Den norske modellen er ikke perfekt. Noen mener fagforeningene har for mye makt, andre mener de ikke har nok. Globalisering og ny teknologi utfordrer tradisjonelle arbeidsformer -- tenk paa gig-oekonomi og plattformarbeid der folk jobber som selvstendige uten de tradisjonelle rettighetene. Men sammenlignet med de fleste land i verden, har norske arbeidstakere det eksepsjonelt godt. Det er et resultat av generasjoners kamp og samarbeid.`,
    },
    {
      id: 'samfunnsfag-10-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv paa velferdsstaten og arbeidsrettigheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'samfunnsfag-10-7-n-quiz2-q0',
            task: 'Hva finansierer velferdsstaten?',
            options: [
              { id: 'a', text: 'Private donasjoner', isCorrect: false },
              { id: 'b', text: 'Skatter og avgifter betalt av innbyggerne', isCorrect: true },
              { id: 'c', text: 'Laan fra utlandet', isCorrect: false },
              { id: 'd', text: 'Oljeinntekter alene', isCorrect: false },
            ],
            solution: 'Velferdsstaten finansieres hovedsakelig gjennom skatter og avgifter. Vi betaler inn til fellesskapet, og fellesskapet gir oss tilbake tjenester som helse, utdanning og trygd.',
          },
          {
            id: 'samfunnsfag-10-7-n-quiz2-q1',
            task: 'Hvilken lov regulerer arbeidsforhold i Norge?',
            options: [
              { id: 'a', text: 'Grunnloven', isCorrect: false },
              { id: 'b', text: 'Straffeloven', isCorrect: false },
              { id: 'c', text: 'Arbeidsmiljoeloven', isCorrect: true },
              { id: 'd', text: 'Forvaltningsloven', isCorrect: false },
            ],
            solution: 'Arbeidsmiljoeloven regulerer arbeidsforhold i Norge. Den gir rett til trygt arbeidsmiljoe, regulerer arbeidstid, og beskytter mot usaklig oppsigelse.',
          },
        ],
      },
    },
    {
      id: 'samfunnsfag-10-7-n-summary',
      type: 'text',
      content: `## Oppsummering

**Den norske modellen** bygger paa **trepartssamarbeidet** mellom fagforeninger, arbeidsgiverorganisasjoner og staten. Gjennom **tariffavtaler** forhandles loenninger og arbeidsvilkaar kollektivt. **Frontfagsmodellen** sikrer at konkurranseutsatt industri setter normen for loennsveksten.

Modellen haenger tett sammen med **velferdsstaten**, som gjennom skatter gir alle tilgang til utdanning, helse og sosiale ytelser. **Arbeidsmiljoeloven** sikrer rettigheter som trygt arbeidsmiljoe og vern mot usaklig oppsigelse. Rettigheter foelges av plikter. Den norske modellen utfordres av globalisering og ny teknologi, men gir norske arbeidstakere noen av verdens beste arbeidsvilkaar.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Alle narrativkapitler i del 2
// ============================================================================

export const SAMFUNNSFAG_10_NARRATIV_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFUNNSFAG_10_5_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_6_NARRATIV,
  CHAPTER_SAMFUNNSFAG_10_7_NARRATIV,
];
