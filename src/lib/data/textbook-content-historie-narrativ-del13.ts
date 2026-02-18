/**
 * Tekstbok innhold for Historie - NARRATIV VERSJON DEL 13
 * Kapittel 14: Kald krig (14.1 - 14.4)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * a lese og lytte til, med quiz-sporsmal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 14.1 NARRATIV: Supermaktene og blokksystemet
// ============================================================================

export const CHAPTER_HISTORIE_14_1_NARRATIV: TextbookChapter = {
  id: 'historie-14-1-narrativ',
  courseId: 'historie',
  chapterNumber: '14.1',
  title: 'Supermaktene og blokksystemet',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan verden ble delt i to og supermaktene rustet opp til en krig ingen kunne vinne.',
  estimatedMinutes: 45,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-14-1',
  isNarrativeVersion: true,
  content: [
    {
      id: 'historie-14-1-n-intro',
      type: 'text',
      content: `## Da verden ble delt i to

Tenk deg at du star i Berlin i 1948. Krigen er over, men freden foler seg ikke fredelig. Byen er delt mellom seierherrene - amerikanere, briter og franskmenn i vest, russere i ost. Folk begynner a flytte fra den sovjetiske sonen til den vestlige. Og plutselig stenger russerne alle veier inn til Vest-Berlin. Ingen mat, ingen kull, ingenting kan komme gjennom.

Slik begynte **den kalde krigen** for alvor. I over et ar fraktet amerikanske og britiske fly alt Vest-Berlin trengte for a overleve - tusenvis av tonn hver dag. Det var en maktdemonstrasjon uten a skyte et skudd.

Den kalde krigen var en ny type konflikt. USA og Sovjetunionen ville aldri mote hverandre direkte pa slagmarken - det kunne utlose en atomkrig som ville odelegge begge. I stedet kjempet de med diplomati, propaganda, spionasje og stedfortredere. Verden var delt i to, og alle matte velge side.

La oss utforske hvordan denne merkelige konflikten oppstod og formet verden i nesten femti ar.`,
    },
    {
      id: 'historie-14-1-n-section1',
      type: 'text',
      content: `## Fra allierte til fiender

Under andre verdenskrig hadde USA og Sovjetunionen kjempet pa samme side mot Hitler. Men alliansen var basert pa nodvendighet, ikke vennskap. Ideologisk var de motpoler: Amerika stod for kapitalisme, demokrati og individuell frihet. Sovjet stod for kommunisme, ettpartistyre og kollektive mal.

Allerede for krigen var over, begynte mistanken a vokse. Da de allierte motte seg i det okkuperte Tyskland, var det klart at visjonene for fremtiden var uforenlige.

**Winston Churchill** sa det forst. I en tale i 1946 advarte han om at et **"jernteppe"** var i ferd med a senke seg over Europa. Fra Stettin ved Ostersjoen til Trieste ved Adriaterhavet - bak dette teppet la de gamle hovedstedene i Sentral- og Ost-Europa, na under sovjetisk kontroll.

Det var ikke bare retorikk. I land etter land i Ost-Europa grep kommunistene makten - ofte ved a manipulere valg eller bruke ren makt. Tsjekkoslovakia, der det hadde vart et fungerende demokrati, falt i 1948 etter et kommunistisk kupp. Grepet strammet seg.

Og i vest? Der formulerte USA **Truman-doktrinen**: Amerika ville stotte frie folk som motsatte seg undertrykkelse. Med **Marshall-planen** pumpet de milliarder av dollar inn i Vest-Europa for a gjenreise okonomien og hindre at desperasjon drev folk mot kommunismen. Det var generositet, ja - men ogsa kalkulert politikk.`,
    },
    {
      id: 'historie-14-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-14-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa den kalde krigens opprinnelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-1-n-quiz1-q0',
            task: 'Hva mente Winston Churchill med begrepet "jernteppet"?',
            options: [
              { id: 'a', text: 'En faktisk mur bygget rundt Berlin', isCorrect: false },
              { id: 'b', text: 'Den ideologiske og fysiske grensen som delte Europa mellom kommunistiske og kapitalistiske land', isCorrect: true },
              { id: 'c', text: 'Et forsvarssystem mot amerikanske angrep', isCorrect: false },
              { id: 'd', text: 'En handelsavtale mellom ost og vest', isCorrect: false },
            ],
            solution: 'Jernteppet var Churchills metafor for delingen av Europa. Bak dette "teppet" la de sovjet-kontrollerte landene i Ost-Europa, avskaret fra Vesten. Det var bade en ideologisk grense (kommunisme vs demokrati) og en fysisk grense (piggtrad, murer, minefelter).',
          },
          {
            id: 'historie-14-1-n-quiz1-q1',
            task: 'Hva var den grunnleggende ideologiske motsetningen mellom USA og Sovjetunionen?',
            options: [
              { id: 'a', text: 'USA var kommunistisk, Sovjet var kapitalistisk', isCorrect: false },
              { id: 'b', text: 'Begge var demokratier, men med ulik utenrikspolitikk', isCorrect: false },
              { id: 'c', text: 'USA stod for kapitalisme og demokrati, Sovjet for kommunisme og ettpartistyre', isCorrect: true },
              { id: 'd', text: 'Motsetningen var kun religiøs, ikke politisk', isCorrect: false },
            ],
            solution: 'USA og Sovjet representerte to uforenlige systemer: Amerika stod for kapitalisme, demokrati og individuell frihet, mens Sovjet stod for kommunisme, ettpartistyre og kollektive mal. Denne ideologiske motsetningen var kjernen i den kalde krigen.',
          },
          {
            id: 'historie-14-1-n-quiz1-q2',
            task: 'Hva var formalet med Marshall-planen?',
            options: [
              { id: 'a', text: 'A straffe Tyskland etter krigen', isCorrect: false },
              { id: 'b', text: 'A bygge opp Vest-Europas okonomi og hindre kommunismens spredning', isCorrect: true },
              { id: 'c', text: 'A ruste opp det amerikanske militaeret', isCorrect: false },
              { id: 'd', text: 'A opprette FN som fredsorganisasjon', isCorrect: false },
            ],
            solution: 'Marshall-planen pumpet milliarder av dollar inn i Vest-Europa for a gjenreise okonomien. Det var bade generositet og kalkulert politikk -- ved a skape velstand ville USA hindre at desperasjon drev folk mot kommunismen.',
          },
          {
            id: 'historie-14-1-n-quiz1-q3',
            task: 'Hva skjedde i Tsjekkoslovakia i 1948 som forsterket frykten i vest?',
            options: [
              { id: 'a', text: 'Landet meldte seg inn i NATO', isCorrect: false },
              { id: 'b', text: 'Landet ble invadert av amerikanske tropper', isCorrect: false },
              { id: 'c', text: 'Et kommunistisk kupp avsluttet landets demokrati', isCorrect: true },
              { id: 'd', text: 'Landet erklarte seg noytalt i den kalde krigen', isCorrect: false },
            ],
            solution: 'Tsjekkoslovakia hadde vaert et fungerende demokrati, men i 1948 grep kommunistene makten gjennom et kupp. Dette sjokkerte Vesten og viste at Sovjet var villig til a bruke makt for a utvide sin innflytelse, selv i land med demokratiske tradisjoner.',
          },
        ],
      },
    },
    {
      id: 'historie-14-1-n-section2',
      type: 'text',
      content: `## To blokker, to verdener

I 1949 etablerte vestmaktene **NATO** - en militarallianse der et angrep pa ett medlem var angrep pa alle. Symbolikken var klar: USA og Europa stod sammen mot trusselen fra ost. Sovjetunionen svarte i 1955 med **Warszawapakten**, som samlet de osteuropeiske satellittstatene under sovjetisk kommando.

Men hva var egentlig forskjellen pa de to blokkene? La oss ta en tur gjennom jernteppet og se.

Pa **vestsiden** finner du landene vi kjenner: Frankrike, Vest-Tyskland, Italia, Storbritannia. De har ulike styresett, men alle er demokratier med flerpartisystem. Du kan kritisere regjeringen i avisen. Du kan reise hvor du vil. Okonomien er kapitalistisk - folk eier sine egne bedrifter, prisene bestemmes av markedet. Det er ulikhet, men ogsa muligheter.

Pa **ostsiden** er alt annerledes. Et parti styrer - kommunistpartiet. Andre partier er forbudt eller bare pynt. Pressen er statskontrollert. A kritisere systemet kan koste deg jobben - eller friheten. Staten eier fabrikker og garder. Planleggere i Moskva bestemmer hva som skal produseres, til hvilken pris. I teorien er alle like. I praksis har de som er lojale mot partiet det best.

Millioner av mennesker i ost drømte om a flykte til vest. Det var derfor jernteppet ble sa konkret - piggtrad, vakttarn, minefelt, skyteklare vakter. Den som forsøkte a krysse, risikerte livet.`,
    },
    {
      id: 'historie-14-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-14-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa blokkdelingen og alliansene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-1-n-quiz2-q0',
            task: 'Hva var hovedforskjellene mellom det vestlige og det ostlige systemet under den kalde krigen?',
            options: [
              { id: 'a', text: 'Vest hadde planøkonomi, ost hadde markedsøkonomi', isCorrect: false },
              { id: 'b', text: 'Vest hadde flerpartisystem og markedsøkonomi, ost hadde ettpartistyre og planøkonomi', isCorrect: true },
              { id: 'c', text: 'Begge systemene var stort sett like, bare med ulike ledere', isCorrect: false },
              { id: 'd', text: 'Vest hadde sterkere militar, ost hadde bedre økonomi', isCorrect: false },
            ],
            solution: 'Vestblokken var preget av demokrati med flere partier, markedsøkonomi med privat eierskap, og individuelle friheter. Ostblokken hadde ettpartistyre, planøkonomi og streng kontroll.',
          },
          {
            id: 'historie-14-1-n-quiz2-q1',
            task: 'Hva var NATO, og nar ble det grunnlagt?',
            options: [
              { id: 'a', text: 'En handelsorganisasjon grunnlagt i 1945', isCorrect: false },
              { id: 'b', text: 'En vestlig militaerallianse grunnlagt i 1949, der angrep pa ett medlem var angrep pa alle', isCorrect: true },
              { id: 'c', text: 'Den østlige militaeralliansen ledet av Sovjet', isCorrect: false },
              { id: 'd', text: 'En FN-avdeling for fredsbevarende operasjoner', isCorrect: false },
            ],
            solution: 'NATO (North Atlantic Treaty Organization) ble opprettet i 1949 som en vestlig militaerallianse. Kjernen var artikkel 5: et angrep pa ett medlem var et angrep pa alle. Sovjet svarte med Warszawapakten i 1955.',
          },
          {
            id: 'historie-14-1-n-quiz2-q2',
            task: 'Hvorfor forsøkte sa mange mennesker i ost a flykte til vest?',
            options: [
              { id: 'a', text: 'Fordi klimaet var bedre i vest', isCorrect: false },
              { id: 'b', text: 'Fordi det var krig i alle osteuropeiske land', isCorrect: false },
              { id: 'c', text: 'Fordi de sokte frihet, bedre levekaar og muligheten til a kritisere myndighetene uten straff', isCorrect: true },
              { id: 'd', text: 'Fordi vestlige land betalte dem for a flytte', isCorrect: false },
            ],
            solution: 'I ost var det ettpartistyre, sensur og mangel pa bevegelsesfrihet. Folk risikerte jobb og frihet for a kritisere systemet. Vest tilbod demokrati, ytringsfrihet og bedre levekaar. Jernteppet ble sa konkret nettopp fordi sa mange ville flykte.',
          },
        ],
      },
    },
    {
      id: 'historie-14-1-n-section3',
      type: 'text',
      content: `## Kapplop mot dommedag

I august 1945 hadde USA demonstrert historiens mest ødeleggende vapen da atombombene ble sluppet over Hiroshima og Nagasaki. Sovjet jobbet febrilsk med sitt eget program, og i 1949 testet de sin forste atombombe. Kapplopet var i gang.

Det som fulgte, var en spiralerende opprustning som ga begge sider nok atomvapen til a odelegge verden mange ganger. USA utviklet **hydrogenbomben** i 1952 - tusen ganger kraftigere enn Hiroshima-bomben. Sovjet fulgte etter aret etter.

Snart hadde begge sider raketter som kunne na motstanderens byer pa under en halvtime. Det fantes ikke noe forsvar. Hvis den ene siden angrep, ville den andre slynge sine raketter av garde for de ble truffet. Resultatet ville vare **MAD** - Mutual Assured Destruction. Gjensidig garantert ødeleggelse.

Det hores vanvittig ut, og det var det ogsa. Men paradoksalt nok holdt denne terrorbalansen fred mellom supermaktene. Begge visste at krig betydde slutten pa begge. Ingen rasjonell leder ville trykke pa knappen.

Men hva med urasjonelle ledere? Hva med uhell og misforstaelser? Verden levde med denne frykten i over fire tiar. Atomklokken - symbolet pa hvor naer vi var ødeleggelse - stod tidvis bare minutter fra midnatt.`,
    },
    {
      id: 'historie-14-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-14-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa atomvapenkapplopet og terrorbalansen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-1-n-quiz3-q0',
            task: 'Hva var MAD (Mutual Assured Destruction)?',
            options: [
              { id: 'a', text: 'Et vapensystem som bare USA hadde', isCorrect: false },
              { id: 'b', text: 'En strategi der begge sider hadde nok atomvapen til a ødelegge hverandre, noe som paradoksalt forhindret direkte krig', isCorrect: true },
              { id: 'c', text: 'En fredsavtale mellom USA og Sovjet', isCorrect: false },
              { id: 'd', text: 'Et program for a redusere antall atomvapen', isCorrect: false },
            ],
            solution: 'MAD betydde at bade USA og Sovjet hadde sa mange atomvapen at ingen kunne overleve en krig. Frykten for gjensidig utslettelse holdt freden, men det var en balanse bygget pa terror.',
          },
          {
            id: 'historie-14-1-n-quiz3-q1',
            task: 'Nar testet Sovjetunionen sin forste atombombe?',
            options: [
              { id: 'a', text: '1945', isCorrect: false },
              { id: 'b', text: '1952', isCorrect: false },
              { id: 'c', text: '1949', isCorrect: true },
              { id: 'd', text: '1955', isCorrect: false },
            ],
            solution: 'Sovjet testet sin forste atombombe i 1949, bare fire ar etter at USA brukte atomvapen mot Japan. Dette satte i gang den spiralerende opprustningen mellom supermaktene.',
          },
          {
            id: 'historie-14-1-n-quiz3-q2',
            task: 'Hva var hydrogenbomben, og hvorfor var den sa viktig?',
            options: [
              { id: 'a', text: 'En vannbombe brukt mot ubater', isCorrect: false },
              { id: 'b', text: 'En bombe tusen ganger kraftigere enn Hiroshima-bomben, utviklet av USA i 1952', isCorrect: true },
              { id: 'c', text: 'Et defensivt skjold mot atomraketter', isCorrect: false },
              { id: 'd', text: 'En bombe som bare skadet bygninger, ikke mennesker', isCorrect: false },
            ],
            solution: 'Hydrogenbomben var tusen ganger kraftigere enn Hiroshima-bomben. USA utviklet den i 1952, og Sovjet fulgte etter aret etter. Den representerte en dramatisk eskalering av odeleggelsespotensialet.',
          },
          {
            id: 'historie-14-1-n-quiz3-q3',
            task: 'Hvorfor kalles atomvapenbalansen et "paradoks"?',
            options: [
              { id: 'a', text: 'Fordi den gjorde krig billigere', isCorrect: false },
              { id: 'b', text: 'Fordi ingen egentlig hadde atomvapen', isCorrect: false },
              { id: 'c', text: 'Fordi FN kontrollerte alle atomvapenene', isCorrect: false },
              { id: 'd', text: 'Fordi vapen ment for odeleggelse paradoksalt nok holdt fred ved at ingen turte bruke dem', isCorrect: true },
            ],
            solution: 'Paradokset var at vapen designet for total odeleggelse faktisk forhindret krig. Begge sider visste at a starte krig betydde slutten for begge, sa ingen rasjonell leder ville trykke pa knappen. Terror ble grunnlaget for fred.',
          },
        ],
      },
    },
    {
      id: 'historie-14-1-n-section4',
      type: 'text',
      content: `## Kapplopet til stjernene

Atomvapenkapplopet forte til et annet kapplop - det om verdensrommet. Hvis du kunne sende en rakett til manen, kunne du like gjerne sende den til fiendtlig territorium.

I 1957 sjokkerte Sovjet verden. De sendte opp **Sputnik** - verdens forste kunstige satellitt. En liten metallkule som kretset rundt jorden og sendte "pip-pip-pip" ned til en urolig verden. Amerikanerne kunne hore lyden og vite at russerne var foran.

Panikken spredte seg. Hvis Sovjet kunne sende en satellitt i bane, kunne de ogsa sende atomvapen mot amerikanske byer. USA kastet seg inn i kapplopet. I 1961 sendte Sovjet det neste sjokket: **Jurij Gagarin** ble det forste mennesket i verdensrommet. Igjen var russerne forst.

President Kennedy svarte med en dristig lovnad: For tiaret var omme, skulle USA sende et menneske til manen og bringe ham trygt tilbake. Det var et enormt mål - teknologien eksisterte knapt. Men i 1969 tok **Neil Armstrong** det forste skrittet pa manens overflate. "Ett lite skritt for et menneske, ett stort sprang for menneskeheten."

Romkapplopet var ikke bare prestisje. Det drev frem teknologisk utvikling som fortsatt preger livene vare - fra satellitter som gir GPS og vardmeldinger, til datateknologi som ble utviklet for romfart.`,
    },
    {
      id: 'historie-14-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-14-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa romkapplopet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-1-n-quiz4-q0',
            task: 'Hvorfor skapte Sputnik-oppskytningen slik panikk i USA?',
            options: [
              { id: 'a', text: 'Fordi den styrtet ned over amerikansk territorium', isCorrect: false },
              { id: 'b', text: 'Fordi den viste at Sovjet hadde rakettkapasitet til a na USA med atomvapen', isCorrect: true },
              { id: 'c', text: 'Fordi den blokkerte amerikanske radiosignaler', isCorrect: false },
              { id: 'd', text: 'Fordi den var mye storre enn amerikanske raketter', isCorrect: false },
            ],
            solution: 'Sputnik var en liten satellitt, men budskapet var enormt: Sovjet hadde raketter kraftige nok til a sende noe ut i rommet. Den samme teknologien kunne sende atomvapen mot amerikanske byer.',
          },
          {
            id: 'historie-14-1-n-quiz4-q1',
            task: 'Hvem var det forste mennesket i verdensrommet?',
            options: [
              { id: 'a', text: 'Neil Armstrong fra USA', isCorrect: false },
              { id: 'b', text: 'John Glenn fra USA', isCorrect: false },
              { id: 'c', text: 'Jurij Gagarin fra Sovjetunionen', isCorrect: true },
              { id: 'd', text: 'Buzz Aldrin fra USA', isCorrect: false },
            ],
            solution: 'Jurij Gagarin fra Sovjet ble det forste mennesket i verdensrommet i 1961. Det var nok et sjokk for USA, som igjen var slatt av russerne i romkapplopet.',
          },
          {
            id: 'historie-14-1-n-quiz4-q2',
            task: 'Hva var sammenhengen mellom romkapplopet og den kalde krigen?',
            options: [
              { id: 'a', text: 'Det var ingen sammenheng - romfart var ren vitenskap', isCorrect: false },
              { id: 'b', text: 'Romkapplopet handlet om prestisje og demonstrasjon av militaer rakettkapasitet', isCorrect: true },
              { id: 'c', text: 'Bare USA deltok i romkapplopet', isCorrect: false },
              { id: 'd', text: 'Romkapplopet handlet om a finne ressurser pa manen', isCorrect: false },
            ],
            solution: 'Romkapplopet var direkte knyttet til den kalde krigen. Rakettene som sendte satellitter og mennesker til rommet, kunne like gjerne sende atomvapen. Romfart var bade prestisje og maktdemonstrasjon.',
          },
        ],
      },
    },
    {
      id: 'historie-14-1-n-section5',
      type: 'text',
      content: `## En verden i spenning

Den kalde krigen var mer enn militarrivalisering. Det var en kamp om sjeler og sinn. Begge sider trodde - eller i det minste hevdet - at deres system var best for menneskeheten.

**Propaganda** var overalt. I Sovjet larte barn at kapitalismen var ondskap, at amerikanerne undertrykte sine arbeidere, at kommunismen var fremtiden. I USA larte de at kommunismen var tyranni, at russerne ville ta over verden, at friheten matte forsvares.

Begge sider hadde poenger - og begge overdrev. Det vestlige systemet ga mer frihet, men ogsa ulikhet og undertrykkelse av minoriteter. Det ostlige systemet lovte likhet, men leverte undertrykkelse og okonomisk stagnasjon.

For de fleste mennesker i verden betydde den kalde krigen frykt. Frykt for atomkrig. Frykt for spioner og fiender. Frykt for at verden skulle ga under for begge systemene kunne bevise at de hadde rett.

Og ofte ble denne frykten til virkelighet - ikke i Europa, men i andre deler av verden der supermaktene utkjempet sine konflikter gjennom stedfortredere. Korea. Vietnam. Afghanistan. Millioner dode i kriger som egentlig handlet om hvem som skulle dominere verden.`,
    },
    {
      id: 'historie-14-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-14-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa den kalde krigens karakter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-1-n-quiz5-q0',
            task: 'Hvorfor ble den kalde krigen aldri til en "varm" krig direkte mellom supermaktene?',
            options: [
              { id: 'a', text: 'Fordi de respekterte hverandres grenser og ikke hadde noe a tjene pa krig', isCorrect: false },
              { id: 'b', text: 'Fordi FN forhindret alle konflikter', isCorrect: false },
              { id: 'c', text: 'Fordi begge sider hadde nok atomvapen til a ødelegge hverandre, og direkte krig ville bety gjensidig utslettelse', isCorrect: true },
              { id: 'd', text: 'Fordi de var enige om a unnga krig gjennom en formell avtale', isCorrect: false },
            ],
            solution: 'Atomvapenbalansen (MAD) gjorde direkte krig for risikabelt. Begge visste at en krig ville odelegge bade USA og Sovjet. Derfor kjempet de gjennom stedfortredere, propaganda og spionasje.',
          },
          {
            id: 'historie-14-1-n-quiz5-q1',
            task: 'Hvilke virkemidler brukte supermaktene i den kalde krigen i stedet for direkte krig?',
            options: [
              { id: 'a', text: 'Bare diplomatiske samtaler', isCorrect: false },
              { id: 'b', text: 'Propaganda, spionasje, stedfortrederkriger og okonomisk konkurranse', isCorrect: true },
              { id: 'c', text: 'Kun handelssanksjoner', isCorrect: false },
              { id: 'd', text: 'De hadde ingen kontakt overhodet', isCorrect: false },
            ],
            solution: 'Den kalde krigen ble kjempet med mange virkemidler utenom direkte krig: propaganda for a vinne "sjelene", spionasje for a avdekke hemmeligheter, stedfortrederkriger i tredjeland, og okonomisk konkurranse for a bevise at eget system var overlegen.',
          },
          {
            id: 'historie-14-1-n-quiz5-q2',
            task: 'Hvorfor kalles konflikten "den kalde krigen"?',
            options: [
              { id: 'a', text: 'Fordi den foregikk i arktiske strok', isCorrect: false },
              { id: 'b', text: 'Fordi det aldri kom til direkte vaepnet konflikt mellom supermaktene', isCorrect: true },
              { id: 'c', text: 'Fordi den varte gjennom mange kalde vintrer', isCorrect: false },
              { id: 'd', text: 'Fordi begge sider brukte kaldvapensteknologi', isCorrect: false },
            ],
            solution: 'Konflikten kalles "kald" fordi USA og Sovjet aldri motte hverandre direkte pa slagmarken. Det var en intens rivalisering med spenning, trusler og stedfortrederkriger, men aldri "varm" krig mellom supermaktene selv.',
          },
        ],
      },
    },
    {
      id: 'historie-14-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Den kalde krigen delte verden i to leirer som stod mot hverandre i nesten femti ar. Det var en ideologisk kamp mellom kommunisme og kapitalisme, en militarkamp mellom supermakter med nok atomvapen til a odelegge verden, og en kulturkamp om hvilken levemåte som var best.

**Nokkelbegreper du na kjenner:**
- **Den kalde krigen:** Konflikten mellom USA og Sovjet (1947-1991), kalt "kald" fordi det aldri kom til direkte krig
- **Supermakter:** Stater med overveldende global makt - bare USA og Sovjet kvalifiserte etter 1945
- **Jernteppet:** Churchills metafor for delingen av Europa
- **NATO og Warszawapakten:** De rivaliserende militaralliansene i vest og ost
- **MAD (Mutual Assured Destruction):** Terrorbalansen der begge sider kunne odelegge hverandre
- **Romkapplopet:** Konkurransen om a erobre verdensrommet, fra Sputnik til manelandingen

**Det viktigste du tar med deg:**
Den kalde krigen viser hvordan ideologiske motsetninger kan skape langvarige konflikter som preger hele verden. Atomvapnene skapte en paradoksal fred - frykten for total ødeleggelse hindret direkte krig, men holdt verden i konstant spenning. For millioner av mennesker - sarlig i den tredje verden - ble den kalde krigen alt annet enn kald.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14.2 NARRATIV: Konflikter og kriger
// ============================================================================

export const CHAPTER_HISTORIE_14_2_NARRATIV: TextbookChapter = {
  id: 'historie-14-2-narrativ',
  courseId: 'historie',
  chapterNumber: '14.2',
  title: 'Konflikter og kriger',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan supermaktene kjempet gjennom andre - fra Korea til Vietnam til Cuba.',
  estimatedMinutes: 50,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-14-2',
  isNarrativeVersion: true,
  content: [
    {
      id: 'historie-14-2-n-intro',
      type: 'text',
      content: `## Kriger uten slutt

Det er en het sommerdag i Vietnam, 1968. En ung amerikansk soldat vasser gjennom rismarker, skrekkslagen for hvert skritt. Fienden er overalt og ingensteds. Han aner ikke hvem som er venn og hvem som vil drepe ham. Tusenvis av kilometer hjemme demonstrerer ungdommer i gatene med slagord mot krigen.

Hvorfor er han her? Han har fatt hore at han kjemper mot kommunismen, at hvis Vietnam faller, faller hele Sorøst-Asia som dominobrikker. Men landsbyboerne han moter virker bare a ville bli latt i fred.

Velkommen til **stedfortrederkrigen** - den kalde krigens blodige virkelighet. Mens USA og Sovjet aldri motte hverandre direkte pa slagmarken, utkjempet de konflikten gjennom andre. I Korea. I Vietnam. I Afghanistan. I Latin-Amerika og Afrika. Millioner dode i kriger som egentlig handlet om supermaktenes rivalisering.

La oss folge sporene gjennom noen av de blodigste kapitlene.`,
    },
    {
      id: 'historie-14-2-n-section1',
      type: 'text',
      content: `## Korea: Den glemte krigen

I 1950 var Korea et delt land. Etter andre verdenskrig hadde amerikanere og russere okkupert hver sin halvdel, og to fiendtlige stater vokste fram: et kommunistisk Nord-Korea under Kim Il-sung, og et pro-vestlig Sor-Korea under Syngman Rhee.

Den 25. juni 1950 rullet nordkoreanske stridsvogner over grensen. Invasjonen kom som et sjokk. Pa bare uker var nesten hele halvoya erobret - bare en liten lomme rundt byen Pusan holdt stand.

USA reagerte gjennom FN. For forste og eneste gang i den kalde krigen fikk de FN til a godkjenne militaer inngripen. En internasjonal styrke, dominert av amerikanere og ledet av general Douglas MacArthur, slo tilbake. Den dristige landgangen ved Incheon snudde krigen. Snart var det nordkoreanerne som flyktet.

MacArthur presset nordover. Han ville ikke bare frigjore Sor-Korea, men forene hele halvoya under vestlig innflytelse. Troppene naermet seg grensen til Kina. Da skjedde det uventede: Hundretusener av kinesiske "frivillige" strommet over grensen. Fronten kollapset igjen.

Det som fulgte, var to ar med blodig stillstand langs den opprinnelige grenslinjen. I 1953 kom en vapensvile - men ingen fredsavtale. Korea er fortsatt delt i dag, og de to landene er teknisk sett fortsatt i krig.`,
    },
    {
      id: 'historie-14-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-14-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Koreakrigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-2-n-quiz1-q0',
            task: 'Hvorfor regnes Koreakrigen som et viktig vendepunkt i den kalde krigen?',
            options: [
              { id: 'a', text: 'Fordi den forte til Koreas gjenforening', isCorrect: false },
              { id: 'b', text: 'Fordi den viste at den kalde krigen kunne bli en varm krig, og etablerte monsteret for stedfortrederkriger', isCorrect: true },
              { id: 'c', text: 'Fordi den endte med total seier for USA', isCorrect: false },
              { id: 'd', text: 'Fordi den forte til direkte krig mellom USA og Sovjet', isCorrect: false },
            ],
            solution: 'Koreakrigen viste at supermaktene var villige til a bruke militaer makt. Den etablerte monsteret for stedfortrederkriger og bekreftet delingen av verden i to fiendtlige blokker.',
          },
          {
            id: 'historie-14-2-n-quiz1-q1',
            task: 'Hva skjedde da FN-styrkene naermet seg grensen til Kina under Koreakrigen?',
            options: [
              { id: 'a', text: 'Kina erklarte seg noytral', isCorrect: false },
              { id: 'b', text: 'Hundretusener av kinesiske "frivillige" strommet over grensen og presset FN-styrkene tilbake', isCorrect: true },
              { id: 'c', text: 'Kina sluttet fred med Sor-Korea', isCorrect: false },
              { id: 'd', text: 'Sovjet sendte atomvapen til Nord-Korea', isCorrect: false },
            ],
            solution: 'Da MacArthur presset nordover mot den kinesiske grensen, grep Kina inn med hundretusener av soldater. Fronten kollapset, og det som fulgte var to ar med blodig stillstand langs den opprinnelige grenselinjen.',
          },
          {
            id: 'historie-14-2-n-quiz1-q2',
            task: 'Hvordan endte Koreakrigen i 1953?',
            options: [
              { id: 'a', text: 'Med Koreas gjenforening under demokratisk styre', isCorrect: false },
              { id: 'b', text: 'Med total seier for Nord-Korea', isCorrect: false },
              { id: 'c', text: 'Med en fredsavtale som ga Sor-Korea kontroll over hele halvoya', isCorrect: false },
              { id: 'd', text: 'Med en vapensvile, men ingen fredsavtale -- Korea er fortsatt delt', isCorrect: true },
            ],
            solution: 'Koreakrigen endte med en vapensvile i 1953, men ingen fredsavtale ble signert. Korea er fortsatt delt langs nesten den samme linjen som for krigen, og de to landene er teknisk sett fortsatt i krig.',
          },
        ],
      },
    },
    {
      id: 'historie-14-2-n-section2',
      type: 'text',
      content: `## Vietnam: Amerikas mareritt

Vietnam-krigen var alt Koreakrigen ikke var - lang, upopulaer, og til slutt tapt. Den ble et traume for en hel generasjon amerikanere og et symbol pa grensene for supermaktenes makt.

Vietnam hadde vaert fransk koloni. Etter at vietnamesiske nasjonalister under Ho Chi Minh slo franskmennene i 1954, ble landet delt. I nord styrte kommunistene. I sor et pro-vestlig, men korrupt og autoritaert regime.

USA engasjerte seg gradvis. Forst radgivere. Sa stottepersonell. Sa soldater. I 1965 var det fullt ut krig, og pa det meste hadde USA over 500 000 soldater i Vietnam.

Men dette var en annerledes krig. Fienden var overalt - geriljakrigere som blandet seg med sivilbefolkningen. Bombene regnet over Nord-Vietnam, men gjorde ikke at kommunistene ga seg. Amerikanerne "vant" de fleste slagene, men kunne ikke vinne krigen.

Hjemme vokste motstanden. Fjernsynet brakte krigens gru rett inn i stua. Unge menn brant innkallelsesordrer. Studenter marsjerte i gatene. "Hey, hey, LBJ, how many kids did you kill today?" ropte de til presidenten.

I 1973 trakk USA seg ut. To ar senere rullet nordvietnamesiske stridsvogner inn i Saigon. Kommunistene hadde vunnet. Vietnam var samlet - men til en forferdelig pris.`,
    },
    {
      id: 'historie-14-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-14-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Vietnamkrigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-2-n-quiz2-q0',
            task: 'Hva var "dominoteorien" som USA brukte for a rettferdiggjore Vietnam-engasjementet?',
            options: [
              { id: 'a', text: 'At alle land til slutt ville bli demokratier', isCorrect: false },
              { id: 'b', text: 'At hvis ett land falt til kommunismen, ville nabolandene folge etter som dominobrikker', isCorrect: true },
              { id: 'c', text: 'At Vietnam var den viktigste oljeleverandoren i Asia', isCorrect: false },
              { id: 'd', text: 'At FN krevde amerikansk intervensjon', isCorrect: false },
            ],
            solution: 'Dominoteorien hevdet at hvis Vietnam ble kommunistisk, ville nabolandene folge etter. Teorien viste seg a vaere overdrevet -- lokale forhold var viktigere enn den enkle "domino-logikken".',
          },
          {
            id: 'historie-14-2-n-quiz2-q1',
            task: 'Hvorfor klarte ikke USA a vinne Vietnamkrigen trass i overlegen militaermakt?',
            options: [
              { id: 'a', text: 'Fordi USA aldri sendte nok soldater', isCorrect: false },
              { id: 'b', text: 'Fordi fienden forte geriljakrig og blandet seg med sivilbefolkningen, noe som gjorde konvensjonell krigforing ineffektiv', isCorrect: true },
              { id: 'c', text: 'Fordi Sovjet sendte egne tropper til Vietnam', isCorrect: false },
              { id: 'd', text: 'Fordi USA og Vietnam inngikk en hemmelig avtale', isCorrect: false },
            ],
            solution: 'Vietnamkrigen var en geriljakrig der fienden var overalt og ingensteds. Kommunistene blandet seg med sivilbefolkningen, og bomber og konvensjonell krigforing kunne ikke kue motstanden. USA "vant" de fleste slagene, men kunne ikke vinne krigen.',
          },
          {
            id: 'historie-14-2-n-quiz2-q2',
            task: 'Hvilken rolle spilte media og opinionen hjemme i USA under Vietnamkrigen?',
            options: [
              { id: 'a', text: 'Media stottet krigen helhjerta gjennom hele perioden', isCorrect: false },
              { id: 'b', text: 'Amerikanerne hadde ikke tilgang til nyheter om krigen', isCorrect: false },
              { id: 'c', text: 'Fjernsynet brakte krigens gru inn i stuene, noe som forte til massiv motstand og demonstrasjoner', isCorrect: true },
              { id: 'd', text: 'Opinionen var likegyldig til krigen', isCorrect: false },
            ],
            solution: 'Vietnam var den forste "TV-krigen". Fjernsynet viste krigens brutalitet rett inn i amerikanske stuer, noe som skapte enorm motstand. Studenter marsjerte i gatene, unge menn brant innkallelsesordrer, og presset mot regjeringen vokste.',
          },
          {
            id: 'historie-14-2-n-quiz2-q3',
            task: 'Hvordan endte Vietnamkrigen?',
            options: [
              { id: 'a', text: 'USA vant og Vietnam ble demokratisk', isCorrect: false },
              { id: 'b', text: 'USA trakk seg ut i 1973, og kommunistene erobret Sor-Vietnam i 1975', isCorrect: true },
              { id: 'c', text: 'FN megle frem en varig fred mellom partene', isCorrect: false },
              { id: 'd', text: 'Vietnam ble delt permanent, som Korea', isCorrect: false },
            ],
            solution: 'USA trakk seg ut i 1973 etter ar med voksende motstand hjemme. To ar senere, i 1975, rullet nordvietnamesiske stridsvogner inn i Saigon. Kommunistene hadde vunnet, og Vietnam ble samlet -- men til en forferdelig pris.',
          },
        ],
      },
    },
    {
      id: 'historie-14-2-n-section3',
      type: 'text',
      content: `## Cuba: Tretten dager pa randen

Oktober 1962. Et amerikansk spionfly fotograferer Cuba fra stor hoyde. Bildene analyseres. Det amerikanerne ser, far dem til a fryse: Sovjetiske raketter med atomstridshoder, i ferd med a bli satt opp bare 150 kilometer fra Florida.

Slik begynte **Cuba-krisen** - de tretten dagene da verden var naermere atomkrig enn noen gang for eller siden.

Cuba hadde vaert et amerikanskvennlig diktatur til 1959, da **Fidel Castro** ledet en revolusjon. Det nye regimet ble kommunistisk og allierte seg med Sovjet. I 1961 forsøkte USA a styrte Castro med en invasjon ved Grisebukta. Det ble en fiasko.

Sovjet besluttet a stasjonere atomraketter pa Cuba - delvis for a beskytte sin nye allierte, delvis for a jevne ut den strategiske balansen. USA hadde tross alt raketter i Tyrkia, like ved Sovjet.

President Kennedy krevde at rakettene ble fjernet. Han innforte marineblokade rundt Cuba. Verden holdt pusten. Sovjetiske skip med flere raketter naermet seg. Skulle de respektere blokaden eller forsøke a bryte gjennom?

I de folgende dagene balanserte verden pa kanten av stupet. Flere ganger kunne mindre hendelser ha utløst krig - et U-2 fly ble skutt ned, et sovjetisk ubatmannskap vurderte a skyte atomtorpedoer.

Til slutt blinket Khrusjtsjov. Sovjet trakk rakettene tilbake. Til gjengjeld lovte USA a ikke invadere Cuba og fjernet (hemmelig) sine raketter fra Tyrkia.`,
    },
    {
      id: 'historie-14-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-14-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa Cuba-krisen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-2-n-quiz3-q0',
            task: 'Hvorfor er Cuba-krisen regnet som den kalde krigens farligste oyeblikk?',
            options: [
              { id: 'a', text: 'Fordi det allerede var brutt ut krig mellom USA og Sovjet', isCorrect: false },
              { id: 'b', text: 'Fordi supermaktene stod i direkte militaer konfrontasjon, med atomvapen minutter unna a bli brukt', isCorrect: true },
              { id: 'c', text: 'Fordi Cuba angrep amerikansk jord', isCorrect: false },
              { id: 'd', text: 'Fordi FN kollapset som organisasjon', isCorrect: false },
            ],
            solution: 'Cuba-krisen var unik fordi supermaktene stod i direkte militaer konfrontasjon. Atomraketter pa Cuba kunne na amerikanske byer pa minutter. Verden var sekunder fra krig.',
          },
          {
            id: 'historie-14-2-n-quiz3-q1',
            task: 'Hvorfor plasserte Sovjet atomraketter pa Cuba?',
            options: [
              { id: 'a', text: 'For a angripe Canada', isCorrect: false },
              { id: 'b', text: 'For a teste nye vapentyper', isCorrect: false },
              { id: 'c', text: 'For a beskytte sin allierte Cuba og jevne ut den strategiske balansen, siden USA hadde raketter i Tyrkia', isCorrect: true },
              { id: 'd', text: 'Fordi Cuba tvang Sovjet til det', isCorrect: false },
            ],
            solution: 'Sovjet plasserte raketter pa Cuba bade for a beskytte Castro-regimet og for a jevne ut balansen -- USA hadde tross alt atomraketter i Tyrkia, like ved Sovjet. Det var et strategisk sjakkutspill som nesten endte i katastrofe.',
          },
          {
            id: 'historie-14-2-n-quiz3-q2',
            task: 'Hvordan ble Cuba-krisen lost?',
            options: [
              { id: 'a', text: 'USA invaderte Cuba og fjernet rakettene med makt', isCorrect: false },
              { id: 'b', text: 'FN tvang begge parter til forhandlingsbordet', isCorrect: false },
              { id: 'c', text: 'Sovjet trakk rakettene tilbake, og USA lovte a ikke invadere Cuba og fjernet hemmelig raketter fra Tyrkia', isCorrect: true },
              { id: 'd', text: 'Cuba erklarte seg noytral og kastet ut bade USA og Sovjet', isCorrect: false },
            ],
            solution: 'Krisen ble lost ved at Khrusjtsjov blinket forst. Sovjet fjernet rakettene fra Cuba. Til gjengjeld lovte USA a ikke invadere Cuba, og fjernet hemmelig sine egne raketter fra Tyrkia. Begge sider kunne hevde en form for seier.',
          },
        ],
      },
    },
    {
      id: 'historie-14-2-n-section4',
      type: 'text',
      content: `## Afghanistan: Sovjets Vietnam

Det var ikke bare USA som viklet seg inn i umulige kriger. I 1979 invaderte Sovjet **Afghanistan** for a stotte et kommunistisk regime som var truet av opprørere. De trodde det ville bli en rask operasjon.

Ti ar senere trakk de seg ut - ydmyket, utmattet, og med over 15 000 dode soldater. Afghanistan ble "Sovjets Vietnam".

Opproret kom fra **mujahidin** - islamske krigere som fikk vapen og stotte fra USA, Pakistan og Saudi-Arabia. Med amerikanskproduserte Stinger-raketter skjøt de ned sovjetiske helikoptre. Med sin kunnskap om fjellene og sin besluttsomhet slet de ut en moderne supermakt.

For Afghanistan selv var konsekvensene katastrofale. Over en million afghanere dode. Millioner flyktet. Og da sovjeterne dro, fortsatte borgerkrigen. Til slutt tok Taliban makten - og ga base til al-Qaeda og Osama bin Laden.

Sirkelen sluttet i 2001, da USA selv invaderte Afghanistan. Na var det amerikanerne som forsøkte a patvinge sin vilje et land som hadde slatt tilbake alle imperiebyggere gjennom historien.`,
    },
    {
      id: 'historie-14-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-14-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Afghanistan-krigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-2-n-quiz4-q0',
            task: 'Hvorfor kalles Afghanistan-krigen ofte "Sovjets Vietnam"?',
            options: [
              { id: 'a', text: 'Fordi den ble fort vunnet, akkurat som Vietnam', isCorrect: false },
              { id: 'b', text: 'Fordi Sovjet samarbeidet med Vietnam der', isCorrect: false },
              { id: 'c', text: 'Fordi den ble en lang, upopulaer krig som supermakten til slutt tapte', isCorrect: true },
              { id: 'd', text: 'Fordi Afghanistan ligger naer Vietnam', isCorrect: false },
            ],
            solution: 'Akkurat som USA i Vietnam, viklet Sovjet seg inn i en langvarig geriljakrig de ikke kunne vinne. Krigen varte ti ar, ble stadig mer upopulaer hjemme, og bidro til a svekke Sovjet.',
          },
          {
            id: 'historie-14-2-n-quiz4-q1',
            task: 'Hvem var mujahidin, og hvem stottet dem?',
            options: [
              { id: 'a', text: 'Sovjetiske spesialstyrker stottet av Kina', isCorrect: false },
              { id: 'b', text: 'Afghanske islamske krigere som fikk vapen og stotte fra USA, Pakistan og Saudi-Arabia', isCorrect: true },
              { id: 'c', text: 'FN-tropper sendt for a bevare freden', isCorrect: false },
              { id: 'd', text: 'Indiske frivillige som kjempet for Afghanistan', isCorrect: false },
            ],
            solution: 'Mujahidin var islamske krigere som kjempet mot den sovjetiske invasjonen. De fikk vapen og stotte fra USA, Pakistan og Saudi-Arabia -- et typisk eksempel pa stedfortrederkrig der supermaktene kjempet gjennom lokale aktorer.',
          },
          {
            id: 'historie-14-2-n-quiz4-q2',
            task: 'Hvilke langsiktige konsekvenser fikk Afghanistan-krigen?',
            options: [
              { id: 'a', text: 'Afghanistan ble et stabilt demokrati etter krigen', isCorrect: false },
              { id: 'b', text: 'Krigen svekket Sovjet, Afghanistan ble kastet ut i borgerkrig, og Taliban og al-Qaeda vokste frem', isCorrect: true },
              { id: 'c', text: 'Sovjet ble styrket og utvidet sitt territorium', isCorrect: false },
              { id: 'd', text: 'Krigen hadde ingen varige konsekvenser', isCorrect: false },
            ],
            solution: 'Krigen svekket Sovjet og bidro til unionens fall. For Afghanistan var konsekvensene katastrofale: over en million dode, millioner av flyktninger, borgerkrig, og til slutt Talibans maktovertakelse og al-Qaedas etablering -- som ledet til USAs egen invasjon i 2001.',
          },
        ],
      },
    },
    {
      id: 'historie-14-2-n-section5',
      type: 'text',
      content: `## Stedfortrederkrigenes pris

Hva var summen av alle disse stedfortrederkrigene? For supermaktene var prisen hoy, men begrensa. For landene der krigene ble utkjempet, var den katastrofal.

**Korea:** 2-3 millioner dode. Et land permanent delt. En kommunistisk stat som utviklet atomvapen. Familier som aldri fikk motes igjen.

**Vietnam:** Over 3 millioner vietnamesere drept. Et land forgiftet av Agent Orange, med misdannede barn i generasjoner. 58 000 amerikanere dode, mange flere skadet fysisk og psykisk.

**Afghanistan:** Over en million dode. Millioner av flyktninger. Et land kastet ut i kaos som varer til denne dag.

Og det var flere - Angola, Nicaragua, El Salvador, Etiopia. Over hele den tredje verden spilte supermaktene ut sine konflikter pa andres territorium. Lokale konflikter ble forsterket og forlenget av tilforsel av vapen og penger utenfra.

For supermaktene var dette kalkulert risiko. For dem som bodde der krigene raste, var det en tragedie.`,
    },
    {
      id: 'historie-14-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-14-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa stedfortrederkrigenes konsekvenser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-2-n-quiz5-q0',
            task: 'Hvem betalte den hoyeste prisen for stedfortrederkrigene under den kalde krigen?',
            options: [
              { id: 'a', text: 'Supermaktene selv, som brukte enorme ressurser', isCorrect: false },
              { id: 'b', text: 'FN, som mistet all troverdighet', isCorrect: false },
              { id: 'c', text: 'Befolkningen i landene der krigene ble utkjempet, med millioner drept og samfunn odelagt', isCorrect: true },
              { id: 'd', text: 'Alle land betalte like mye', isCorrect: false },
            ],
            solution: 'Befolkningen i Korea, Vietnam, Afghanistan og andre land betalte den hoyeste prisen. Millioner dode, og samfunn ble odelagt. Den kalde krigens storste tragedier utspilte seg i de fattige landene som ble stormaktenes slagmarker.',
          },
          {
            id: 'historie-14-2-n-quiz5-q1',
            task: 'Hva er en stedfortrederkrig?',
            options: [
              { id: 'a', text: 'En krig der bare stedfortredere (roboter) kjemper', isCorrect: false },
              { id: 'b', text: 'En direkte krig mellom to supermakter', isCorrect: false },
              { id: 'c', text: 'En krig der FN leder begge sider', isCorrect: false },
              { id: 'd', text: 'En konflikt der supermaktene kjemper indirekte ved a stotte hver sin side i et tredjeland', isCorrect: true },
            ],
            solution: 'En stedfortrederkrig er en konflikt der supermaktene unngikk direkte konfrontasjon, men kjempet gjennom lokale aktorer. De stottet hver sin side med vapen, penger og radgivere. Korea, Vietnam og Afghanistan er klassiske eksempler.',
          },
          {
            id: 'historie-14-2-n-quiz5-q2',
            task: 'Omtrent hvor mange mennesker dode i Vietnamkrigen totalt?',
            options: [
              { id: 'a', text: 'Ca. 10 000', isCorrect: false },
              { id: 'b', text: 'Ca. 100 000', isCorrect: false },
              { id: 'c', text: 'Over 3 millioner vietnamesere og 58 000 amerikanere', isCorrect: true },
              { id: 'd', text: 'Ca. 500 000 pa begge sider', isCorrect: false },
            ],
            solution: 'Vietnamkrigen kostet over 3 millioner vietnamesere livet, pluss 58 000 amerikanere. I tillegg ble landet forgiftet av Agent Orange med misdannede barn i generasjoner. Det var en enorm menneskelig kostnad.',
          },
        ],
      },
    },
    {
      id: 'historie-14-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Stedfortrederkrigene var den kalde krigens blodige virkelighet. Mens atomvapnene holdt supermaktene fra direkte konfrontasjon, kjempet de gjennom andre - med katastrofale konsekvenser for millioner av mennesker.

**Nokkelbegreper du na kjenner:**
- **Stedfortrederkrig:** Konflikter der supermaktene kjempet indirekte ved a stotte hver sin side
- **Koreakrigen (1950-53):** Forste store kalde krig-konflikt, landet fortsatt delt
- **Vietnamkrigen (1955-75):** Langvarig amerikansk intervensjon som endte i nederlag
- **Dominoteorien:** Ideen om at kommunismens seier ett sted ville spre seg til nabolandene
- **Cuba-krisen (1962):** Den farligste konfrontasjonen, verden naer atomkrig
- **Afghanistan (1979-89):** Sovjets mislykkede forsok pa a holde et kommunistisk regime ved makten

**Det viktigste du tar med deg:**
Stedfortrederkrigene viser den kalde krigens menneskelige kostnad. For supermaktene var det strategiske spill. For befolkningen i Korea, Vietnam og Afghanistan var det en tragedie. Mens USA og Sovjet aldri kjempet direkte mot hverandre, forte deres rivalisering til kriger som drepte millioner og odela samfunn som fortsatt barer arrene.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14.3 NARRATIV: Norge i den kalde krigen
// ============================================================================

export const CHAPTER_HISTORIE_14_3_NARRATIV: TextbookChapter = {
  id: 'historie-14-3-narrativ',
  courseId: 'historie',
  chapterNumber: '14.3',
  title: 'Norge i den kalde krigen',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan et lite land pa Europas ytterkant navigerte mellom supermaktene.',
  estimatedMinutes: 45,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-14-3',
  isNarrativeVersion: true,
  content: [
    {
      id: 'historie-14-3-n-intro',
      type: 'text',
      content: `## Pa grensen mellom øst og vest

Se pa et kart over Europa. Langt nord, der kontinentet smalner av mot Arktis, ligger Norge. Pa ostsiden grenser vi til Finland - og til Sovjetunionen. Pa den andre siden vender vi mot det apne havet og USA pa den andre siden av Atlanteren.

Denne plasseringen gjorde Norge til en **frontlinjestat** i den kalde krigen. Like over grensen i nord la Kolahalvoya med Sovjets nordflate - atomubater, hangarskip, tusenvis av soldater. Havet utenfor kysten var arenaen der supermaktenes undervannsbater jaktet pa hverandre.

For Norge stilte dette et fundamentalt sporsmal: Hvordan skulle vi navigere mellom gigantene? Erfaringen fra 1940 hadde laert oss at noytralilet ikke beskyttet oss. Men for naer tilknytning til en av supermaktene kunne provosere den andre.

La oss folge Norges vei gjennom den kalde krigen - en balansegang mellom lojalitet og forsiktighet.`,
    },
    {
      id: 'historie-14-3-n-section1',
      type: 'text',
      content: `## Aldri mer 9. april

Det var 9. april 1940 som endret alt. Den dagen viste at noytralilet var en illusjon. At ingen garantier gjaldt nar stormaktene slo til. At et lite land matte ha allierte for a overleve.

Da krigen var over, forsøkte noen a ta opp traden fra for. Kanskje Norden kunne danne sitt eget forsvarsforbund? Sverige, Norge, Danmark - sammen var de sterkere enn hver for seg.

Men forhandlingene brøt sammen. **Sverige** ville vare noytrale som for. De ville ikke love a hjelpe hvis Norge ble angrepet. For nordmennene var dette ikke godt nok. De hadde laert at bare en sterk garantist kunne gi virkelig sikkerhet.

Den garantisten var USA. I 1949 ble Norge ett av de tolv grunnleggerlandene i **NATO** - North Atlantic Treaty Organization. **Artikkel 5** i NATO-pakten sa at et angrep pa ett medlemsland var angrep pa alle. Hvis Sovjet angrep Norge, ville hele alliansen sla tilbake.

For mange nordmenn var dette et vanskelig valg. Arbeiderpartiet, som styrte landet, hadde tradisjonelt vaert pasifistisk og noytraliletsorientert. Men erfaringen fra krigen og trusselen fra Sovjet veide tyngre. "Aldri mer 9. april" ble slagordet. Norge valgte Vesten.`,
    },
    {
      id: 'historie-14-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-14-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Norges vei inn i NATO:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-3-n-quiz1-q0',
            task: 'Hvorfor valgte Norge a bli med i NATO i 1949?',
            options: [
              { id: 'a', text: 'Fordi noytraliletspolitikken hadde beskyttet Norge sa godt under andre verdenskrig', isCorrect: false },
              { id: 'b', text: 'Fordi erfaringen fra 9. april 1940 viste at noytralilet ikke beskyttet, og Norge trengte en sterk alliert', isCorrect: true },
              { id: 'c', text: 'Fordi Sverige insisterte pa at hele Norden skulle vaere med', isCorrect: false },
              { id: 'd', text: 'Fordi Sovjet ba Norge om a bli med', isCorrect: false },
            ],
            solution: 'Den tyske invasjonen 9. april 1940 viste at noytralilet ikke beskyttet Norge. Da planene om et skandinavisk forsvarsforbund brøt sammen fordi Sverige ikke ville gi garantier, valgte Norge NATO.',
          },
          {
            id: 'historie-14-3-n-quiz1-q1',
            task: 'Hvorfor brøt forhandlingene om et nordisk forsvarsforbund sammen?',
            options: [
              { id: 'a', text: 'Fordi Danmark nektet a delta', isCorrect: false },
              { id: 'b', text: 'Fordi Finland forbod det', isCorrect: false },
              { id: 'c', text: 'Fordi Sverige ville vaere noytrale og ikke ville love a hjelpe Norge ved angrep', isCorrect: true },
              { id: 'd', text: 'Fordi USA truet de nordiske landene', isCorrect: false },
            ],
            solution: 'Sverige ville forbli noytrale og nektet a gi sikkerhetsgarantier til Norge. For nordmennene, som hadde laert at noytralilet var en illusjon, var dette ikke godt nok. De trengte en sterkere garantist, og det ble USA gjennom NATO.',
          },
          {
            id: 'historie-14-3-n-quiz1-q2',
            task: 'Hva innebar artikkel 5 i NATO-pakten?',
            options: [
              { id: 'a', text: 'At hvert land matte bruke minst 2 prosent av BNP pa forsvar', isCorrect: false },
              { id: 'b', text: 'At NATO-land ikke kunne handle med Sovjet', isCorrect: false },
              { id: 'c', text: 'At atomvapen matte stasjoneres i alle medlemsland', isCorrect: false },
              { id: 'd', text: 'At et angrep pa ett medlemsland var et angrep pa alle', isCorrect: true },
            ],
            solution: 'Artikkel 5 er NATOs kjerneprinsipp: et vaepnet angrep pa ett eller flere medlemmer skal betraktes som et angrep pa alle. Denne kollektive sikkerhetsgarantien var det som ga Norge trygghet under den kalde krigen.',
          },
        ],
      },
    },
    {
      id: 'historie-14-3-n-section2',
      type: 'text',
      content: `## Bade NATO-alliert og god nabo

Men sa enkelt var det ikke. Norge var NATO-medlem, ja. Men vi hadde ogsa en lang grense med Sovjetunionen. Og russerne var sarbare for hva som skjedde i Arktis - nordflaten deres la rett ved var grense.

Norske politikere utviklet derfor en merkelig balansegang. Vi var i NATO, men vi satte grenser for hva alliansen kunne gjore pa norsk jord.

**Basepolitikken** (1949): Norge sa nei til permanente utenlandske baser i fredstid. Amerikanske og britiske soldater kunne ove i Norge, men de kunne ikke vaere her permanent.

**Atompolitikken** (1957): Norge sa nei til atomvapen pa norsk jord. Mens andre NATO-land tok imot amerikanske atomvapen, holdt vi dem unna.

**Begrensninger i nord**: Allierte fly og flateovelser ble holdt unna grenseomradene mot Sovjet. Vi ville ikke provosere naboen.

Denne politikken - NATO-medlem, men med selvpalagte restriksjoner - kalles noen ganger **"lavspenningspolitikk"** eller **brobyggingspolitikk**. Vi ville vaere lojale allierte, men ogsa unnga a bli arenaen for en storkonflikt.

Og det fungerte - pa en mate. Sovjet protesterte mot NATO-medlemskapet, men kom aldri med direkte trusler. Norge forble fredelig gjennom hele den kalde krigen. Grensen i nord var merkelig rolig - soldater pa begge sider stirret pa hverandre, men skjøt aldri.`,
    },
    {
      id: 'historie-14-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-14-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa Norges selvpalagte restriksjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-3-n-quiz2-q0',
            task: 'Hva var hovedformalet med basepolitikken og de andre selvpalagte restriksjonene Norge innførte?',
            options: [
              { id: 'a', text: 'A irritere USA og vise at Norge var uavhengig', isCorrect: false },
              { id: 'b', text: 'A berolige Sovjet og unnga a provosere naboen, samtidig som man forble NATO-alliert', isCorrect: true },
              { id: 'c', text: 'A spare penger pa forsvar', isCorrect: false },
              { id: 'd', text: 'A forberede seg pa a melde seg ut av NATO', isCorrect: false },
            ],
            solution: 'Restriksjonene var ment a balansere mellom NATO-forpliktelser og naboskapet med Sovjet. Ved a nekte permanente baser og atomvapen signaliserte Norge at NATO-medlemskapet var defensivt, ikke truende.',
          },
          {
            id: 'historie-14-3-n-quiz2-q1',
            task: 'Hva innebar basepolitikken fra 1949?',
            options: [
              { id: 'a', text: 'At Norge bygget egne militaerbaser langs hele kysten', isCorrect: false },
              { id: 'b', text: 'At utenlandske soldater fikk permanent base pa Andoya', isCorrect: false },
              { id: 'c', text: 'At Norge sa nei til permanente utenlandske militaerbaser pa norsk jord i fredstid', isCorrect: true },
              { id: 'd', text: 'At alle NATO-baser ble lagt til Nordkapp', isCorrect: false },
            ],
            solution: 'Basepolitikken innebar at Norge nektet a ha permanente utenlandske militaerbaser pa norsk jord i fredstid. Allierte soldater kunne ove i Norge, men ikke vaere her permanent. Dette var et signal til Sovjet om at NATO-medlemskapet var defensivt.',
          },
          {
            id: 'historie-14-3-n-quiz2-q2',
            task: 'Hva innebar Norges atompolitikk fra 1957?',
            options: [
              { id: 'a', text: 'At Norge utviklet egne atomvapen', isCorrect: false },
              { id: 'b', text: 'At Norge sa nei til atomvapen pa norsk jord', isCorrect: true },
              { id: 'c', text: 'At Norge tillot atomvapen i nord, men ikke i sor', isCorrect: false },
              { id: 'd', text: 'At Norge ba om amerikanske atomvapen for forsvar', isCorrect: false },
            ],
            solution: 'Norges atompolitikk fra 1957 innebar at vi sa nei til atomvapen pa norsk jord. Mens andre NATO-land tok imot amerikanske atomvapen, holdt Norge dem unna. Dette var del av lavspenningspolitikken overfor Sovjet.',
          },
          {
            id: 'historie-14-3-n-quiz2-q3',
            task: 'Hva menes med at Norge forte en "lavspenningspolitikk"?',
            options: [
              { id: 'a', text: 'At Norge hadde lavt forsvar og lite militaer', isCorrect: false },
              { id: 'b', text: 'At Norge provoserte Sovjet sa mye som mulig', isCorrect: false },
              { id: 'c', text: 'At Norge bevisst begrenset militaer aktivitet naer Sovjet for a unnga provokasjon og redusere spenning', isCorrect: true },
              { id: 'd', text: 'At Norge meldte seg ut av NATO i perioder med hoy spenning', isCorrect: false },
            ],
            solution: 'Lavspenningspolitikken innebar at Norge satte selvpalagte restriksjoner pa militaer aktivitet naer grensen mot Sovjet: ingen permanente baser, ingen atomvapen, begrensede ovelser i nord. Malet var a vaere lojal NATO-alliert uten a provosere naboen.',
          },
        ],
      },
    },
    {
      id: 'historie-14-3-n-section3',
      type: 'text',
      content: `## Oyne og orer i nord

Men Norge var ikke bare forsiktig - vi var ogsa strategisk verdifulle for Vesten. Og det hadde sin pris.

**Kolahalvoya** - rett over grensen fra Finnmark - var hjem til Sovjets mektigste nordflate. Her la atomubater som kunne utslette amerikanske byer. Her var hangarskip og destroyere. Herfra kunne Sovjet true hele Nord-Atlanteren.

For NATO var det livsviktig a vite hva som skjedde der. Og Norge var det perfekte utkikkspunktet. Fra radarstasjoner og lytteposter langs kysten kunne vi folge sovjetiske skip og fly. Ubater ble sporet nar de forlot havnene. Radiosignaler ble fanget opp.

Norge ble NATOs **"oyne og orer"** i nord. Vi delte etterretning med amerikanerne og britene. Hemmelige operasjoner ble utfort. Ikke alt dette var kjent for offentligheten - og ikke alt ble fortalt til Stortinget heller.

Det var en dobbelthet i norsk politikk. Pa den ene siden lavspenning og forsiktighet. Pa den andre siden nært etterretningssamarbeid med USA. Norge var mer involvert i den kalde krigen enn mange trodde - eller vet enna i dag.`,
    },
    {
      id: 'historie-14-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-14-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa Norges strategiske rolle i NATO:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-3-n-quiz3-q0',
            task: 'Hvorfor var Norge strategisk viktig for NATO under den kalde krigen?',
            options: [
              { id: 'a', text: 'Fordi Norge var den rikeste nasjonen i alliansen', isCorrect: false },
              { id: 'b', text: 'Fordi Norge hadde grense til Sovjet og kunne overvake deres viktige nordflate', isCorrect: true },
              { id: 'c', text: 'Fordi Norge hadde de fleste atomvapenene', isCorrect: false },
              { id: 'd', text: 'Fordi Norge kontrollerte inngangen til Middelhavet', isCorrect: false },
            ],
            solution: 'Norges beliggenhet var unik. Fra kysten og grensen kunne vi overvake Sovjets nordflate pa Kolahalvoya. Norge ble "oyne og orer" for NATO i nord.',
          },
          {
            id: 'historie-14-3-n-quiz3-q1',
            task: 'Hva var Kolahalvoya, og hvorfor var den viktig?',
            options: [
              { id: 'a', text: 'En norsk militaerbase i Finnmark', isCorrect: false },
              { id: 'b', text: 'En oy i Ostersjoen brukt av NATO', isCorrect: false },
              { id: 'c', text: 'Hjem til Sovjets mektigste nordflate med atomubater og hangarskip, like over grensen fra Finnmark', isCorrect: true },
              { id: 'd', text: 'En noytral sone mellom Norge og Sovjet', isCorrect: false },
            ],
            solution: 'Kolahalvoya, rett over grensen fra Finnmark, var hjem til Sovjets nordflate -- atomubater, hangarskip og destroyere. Herfra kunne Sovjet true hele Nord-Atlanteren, noe som gjorde norsk overvaking av omradet livsviktig for NATO.',
          },
          {
            id: 'historie-14-3-n-quiz3-q2',
            task: 'Hva menes med at Norge var NATOs "oyne og orer" i nord?',
            options: [
              { id: 'a', text: 'At Norge hadde de beste fjernsynskanalene i NATO', isCorrect: false },
              { id: 'b', text: 'At Norge overvakte sovjetisk militaeraktivitet fra radarstasjoner og lytteposter og delte etterretning med allierte', isCorrect: true },
              { id: 'c', text: 'At norske soldater infiltrerte Sovjet', isCorrect: false },
              { id: 'd', text: 'At Norge sendte spioner til Moskva', isCorrect: false },
            ],
            solution: 'Norge fulgte sovjetiske skip, fly og ubater fra radarstasjoner og lytteposter langs kysten. Radiosignaler ble fanget opp, og etterretning ble delt med amerikanerne og britene. Denne rollen var verdifull, men ogsa kontroversiell og delvis hemmelig.',
          },
        ],
      },
    },
    {
      id: 'historie-14-3-n-section4',
      type: 'text',
      content: `## Kald krig i hverdagen

For vanlige nordmenn var den kalde krigen ofte fjern - noe som skjedde andre steder. Men den preget ogsa hverdagen pa subtile mater.

**Sivilforsvaret** bygget tilfluktsrom over hele landet. I Oslo sentrum kunne titusenvis av mennesker soke dekning under bakken hvis bombene falt. Skolebarn hadde ovelser i a soke dekning.

**Beredskapslagre** med mat og utstyr ble gjemt rundt i landet. Hvis krigen kom, skulle folket overleve.

**Overvaking** av kommunister og "radikale elementer" ble utfort av Politiets overvakingstjeneste. Folk kunne miste jobben pa grunn av sine politiske meninger - eller fordi de hadde feil venner. Disse "yrkesforbuds-sakene" var kontroversielle og skamfulle.

Og sa var det **Vietnam-demonstrasjonene**. Fra midten av 1960-tallet marsjerte norsk ungdom mot amerikanernes krig. "USA ut av Vietnam!" ropte de. Det var en paradoks - alliert med USA, men i opposisjon til deres utenrikspolitikk. Spenningen mellom NATO-lojalitet og kritikk av supermaktspolitikk preget norsk debatt i tiar.

Den kalde krigen var ikke bare generaler og diplomater. Den var ogsa tilfluktsrom og demonstrasjoner, overvaking og protester.`,
    },
    {
      id: 'historie-14-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-14-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa den kalde krigens pavirkning pa norsk hverdag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-3-n-quiz4-q0',
            task: 'Hvordan merket vanlige nordmenn den kalde krigen i hverdagen?',
            options: [
              { id: 'a', text: 'De merket den ikke i det hele tatt -- alt foregikk utenlands', isCorrect: false },
              { id: 'b', text: 'Gjennom tilfluktsrom, sivilforsvarsovelser, overvaking av radikale, og debatt om USAs kriger', isCorrect: true },
              { id: 'c', text: 'Gjennom daglige kamper mot sovjetiske soldater', isCorrect: false },
              { id: 'd', text: 'Bare gjennom TV-nyheter fra utlandet', isCorrect: false },
            ],
            solution: 'Den kalde krigen preget norsk hverdag gjennom tilfluktsrom, sivilforsvarsovelser, beredskapslagre, politisk overvaking og Vietnam-demonstrasjoner. Krigen var bade fjern og naer pa samme tid.',
          },
          {
            id: 'historie-14-3-n-quiz4-q1',
            task: 'Hva var "yrkesforbuds-sakene" i Norge under den kalde krigen?',
            options: [
              { id: 'a', text: 'Forbud mot a jobbe mer enn 40 timer i uken', isCorrect: false },
              { id: 'b', text: 'At folk kunne miste jobben pa grunn av sine politiske meninger eller omgangskrets', isCorrect: true },
              { id: 'c', text: 'At bare NATO-stottende partier fikk stille til valg', isCorrect: false },
              { id: 'd', text: 'At kvinner ble nektet a jobbe i forsvaret', isCorrect: false },
            ],
            solution: 'Politiets overvakingstjeneste overvakte kommunister og "radikale elementer". Folk kunne miste jobben pa grunn av sine politiske meninger eller fordi de hadde feil venner. Disse sakene var kontroversielle og regnes i dag som skamfulle.',
          },
          {
            id: 'historie-14-3-n-quiz4-q2',
            task: 'Hvilket paradoks oppstod med Vietnam-demonstrasjonene i Norge?',
            options: [
              { id: 'a', text: 'At nordmenn demonstrerte for mer krig', isCorrect: false },
              { id: 'b', text: 'At Norge var alliert med USA gjennom NATO, men protesterte mot USAs krigforing i Vietnam', isCorrect: true },
              { id: 'c', text: 'At bare eldre mennesker demonstrerte', isCorrect: false },
              { id: 'd', text: 'At demonstrasjonene var stottet av regjeringen', isCorrect: false },
            ],
            solution: 'Norge var alliert med USA i NATO, men norsk ungdom protesterte kraftig mot USAs krig i Vietnam. Spenningen mellom NATO-lojalitet og kritikk av supermaktspolitikk ble et sentralt paradoks i norsk debatt.',
          },
        ],
      },
    },
    {
      id: 'historie-14-3-n-section5',
      type: 'text',
      content: `## Leksjonen fra den kalde krigen

Hva laerte Norge av fire tiar med kald krig? Flere ting som fortsatt preger politikken:

**Allianser er nodvendige.** Et lite land kan ikke stole pa noytralilet. Bare stotte fra sterke allierte gir reell sikkerhet. NATO-medlemskapet forblir grunnmuren i norsk sikkerhetspolitikk.

**Men forsiktighet gjelder.** A provosere naboen er farlig. Norge holdt alltid en viss avstand til de mest aggressive elementene i vestlig politikk. Vi kunne kritisere Amerika nar de gikk for langt.

**Geografien bestemmer mye.** Norge vil alltid ligge pa grensen mellom øst og vest, mellom sjomakter og landmakter. Denne plasseringen skaper bade muligheter og farer.

**Tillit bygges over tid.** De selvpalagte restriksjonene skapte et monster som russerne - til en viss grad - kunne leve med. Lavspenningspolitikken i nord overlevde selv de kaldeste periodene.

Da Berlinmuren falt i 1989, trakk Norge et lettelsens sukk. Den kalde krigen var over. Men laerdommene fra den forblir gyldige - og kanskje mer aktuelle enn noen gang.`,
    },
    {
      id: 'historie-14-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-14-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa laerdommene fra Norges kalde krig:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-3-n-quiz5-q0',
            task: 'Var Norges balansegang mellom NATO-lojalitet og lavspenningstiltak overfor Sovjet vellykket?',
            options: [
              { id: 'a', text: 'Nei, Sovjet respekterte ikke restriksjonene og angrep likevel', isCorrect: false },
              { id: 'b', text: 'Nei, USA trakk seg fra NATO i protest', isCorrect: false },
              { id: 'c', text: 'Ja, Norge forble trygt gjennom hele den kalde krigen og opprettholdt rimelige relasjoner bade med USA og Sovjet', isCorrect: true },
              { id: 'd', text: 'Det er umulig a vurdere ettersom krigen aldri tok slutt', isCorrect: false },
            ],
            solution: 'Norges politikk kan regnes som vellykket: Landet forble trygt, NATO aksepterte restriksjonene, og Sovjet kom aldri med alvorlige trusler. Grensen i nord forble fredelig.',
          },
          {
            id: 'historie-14-3-n-quiz5-q1',
            task: 'Hvilken hovedlaerdom trakk Norge fra den kalde krigen?',
            options: [
              { id: 'a', text: 'At noytralilet er den beste strategien for sma land', isCorrect: false },
              { id: 'b', text: 'At allianser er nodvendige, men forsiktighet overfor naboen er ogsa viktig', isCorrect: true },
              { id: 'c', text: 'At sma land bor unnga all utenrikspolitikk', isCorrect: false },
              { id: 'd', text: 'At militaer opprustning er det eneste som gir sikkerhet', isCorrect: false },
            ],
            solution: 'Den kalde krigen laerte Norge at et lite land trenger sterke allierte (noytralilet beskytter ikke), men ogsa at det er viktig a unnga a provosere naboen. Kombinasjonen av allianselojalitet og lavspenningspolitikk ble grunnsteinen i norsk sikkerhetspolitikk.',
          },
        ],
      },
    },
    {
      id: 'historie-14-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Norge navigerte den kalde krigen som en frontlinjestat med grense til Sovjetunionen. Erfaringen fra 9. april 1940 forte til NATO-medlemskap, men med selvpalagte restriksjoner for a unnga provokasjon. Resultatet var en vellykket balansegang som holdt Norge trygt i over fire tiar.

**Nokkelbegreper du na kjenner:**
- **9. april 1940:** Datoen som endret norsk sikkerhetspolitikk - noytralilet beskyttet ikke
- **NATO-medlemskap (1949):** Norges tilslutning til den vestlige forsvarsalliansen
- **Basepolitikken:** Nei til permanente utenlandske baser pa norsk jord i fredstid
- **Atompolitikken:** Nei til atomvapen pa norsk jord
- **Lavspenningspolitikk:** Selvpalagte restriksjoner for a berolige Sovjet
- **Etterretningssamarbeid:** Norge som "oyne og orer" for NATO i nord
- **Kolahalvoya:** Sovjets nordflate, like over grensen fra Finnmark

**Det viktigste du tar med deg:**
Norge viste at et lite land kan navigere mellom supermakter gjennom klok politikk. Ved a kombinere allianselojalitet med forsiktighet overfor naboen, holdt Norge seg trygt gjennom den kalde krigen. Laerdommen - at sikkerhet krever bade sterke allianser og evne til avspenning - forblir relevant for norsk politikk i dag.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 14.4 NARRATIV: Murens fall og Sovjetunionens opploysning
// ============================================================================

export const CHAPTER_HISTORIE_14_4_NARRATIV: TextbookChapter = {
  id: 'historie-14-4-narrativ',
  courseId: 'historie',
  chapterNumber: '14.4',
  title: 'Murens fall og Sovjetunionens opplosning',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan den kalde krigen tok slutt - raskere og mer fredelig enn noen hadde drømt om.',
  estimatedMinutes: 45,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-14-4',
  isNarrativeVersion: true,
  content: [
    {
      id: 'historie-14-4-n-intro',
      type: 'text',
      content: `## Kvelden da muren falt

Det er 9. november 1989. Tusenvis av ostberlinere har samlet seg ved grenseovergangene. I ukesvis har de demonstrert, og folk har flyktet i hopetall via Ungarn og Tsjekkoslovakia. Na venter de, spente, usikre.

En forvirret pressekonferanse tidligere pa kvelden har skapt kaos. En østtysk talsmann ble spurt om nar de nye reisereglene trer i kraft. Han bladde i papirene sine, fant ikke svar, og sa: "Umiddelbart, sa vidt jeg vet."

Nyheten spredte seg som ild. Folk strommet til muren. Grensevaktene visste ikke hva de skulle gjore. Ordrer fra ledelsen kom ikke. Til slutt apnet de portene.

Den natten danset tusenvis av mennesker pa muren - det fremste symbolet pa den kalde krigens deling. Fremmede omfavnet hverandre. Champagnekorkene smalt. Berlinmuren, som hadde statt i 28 ar, var historie.

Ingen hadde sett dette komme. For bare fem ar siden hadde Reagan kalt Sovjet "ondskapens imperium". Na kollapset hele systemet - fredelig, nesten over natten. La oss se tilbake pa hvordan det skjedde.`,
    },
    {
      id: 'historie-14-4-n-section1',
      type: 'text',
      content: `## Gorbatsjov - reformatoren som endret alt

I 1985 fikk Sovjetunionen en ny leder. **Mikhail Gorbatsjov** var yngre enn sine forgjengere, mer energisk, og overbevist om at systemet matte reformeres for a overleve.

Han innførte to nokkelbegreper: **Glasnost** (apenhet) og **perestrojka** (omstrukturering).

Glasnost betydde at folk fikk lov til a snakke. Kritikk som for ville fort deg i fengsel, ble plutselig tolerert. Aviser begynte a skrive om problemer - korrupsjon, miljokatastrofer, historiske forbrytelser. Det var som om et lokk ble loftet.

Perestrojka betydde økonomiske reformer. Mer rom for privat initiativ. Mindre stiv byrakratisk kontroll. Forsok pa a la kommunismen fungere bedre.

Men Gorbatsjov losnet pa krefter han ikke kunne kontrollere. Nar folk fikk lov til a kritisere, kritiserte de ikke bare det som var galt - de begynte a stille sporsmal ved hele systemet. Nar republikkene fikk mer selvstyre, begynte de a dromme om uavhengighet.

Det var som a apne Pandoras eske. Gorbatsjov ville redde kommunismen ved a reformere den. I stedet fremskyndet han dens fall.`,
    },
    {
      id: 'historie-14-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-14-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa Gorbatsjovs reformer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-4-n-quiz1-q0',
            task: 'Hvorfor bidro glasnost og perestrojka til Sovjetunionens fall, selv om de var ment a redde systemet?',
            options: [
              { id: 'a', text: 'Fordi de forte til umiddelbar krig med Vesten', isCorrect: false },
              { id: 'b', text: 'Fordi apenheten avdekket problemer og nasjonalistiske bevegelser krevde frihet, mens reformene skapte okonomisk kaos', isCorrect: true },
              { id: 'c', text: 'Fordi USA invaderte Sovjet som respons', isCorrect: false },
              { id: 'd', text: 'Fordi kommunistpartiet ble styrket og strammet grepet', isCorrect: false },
            ],
            solution: 'Glasnost lot folk kritisere systemet apent. Undertrykte nasjoner krevde uavhengighet. Økonomiske reformer skapte mangel uten resultater. Gorbatsjov losnet krefter han ikke kunne kontrollere.',
          },
          {
            id: 'historie-14-4-n-quiz1-q1',
            task: 'Hva betod glasnost?',
            options: [
              { id: 'a', text: 'Økonomisk omstrukturering', isCorrect: false },
              { id: 'b', text: 'Militaer opprustning', isCorrect: false },
              { id: 'c', text: 'Apenhet -- at folk fikk lov til a kritisere og at problemer kunne diskuteres offentlig', isCorrect: true },
              { id: 'd', text: 'Grensestenging mot vest', isCorrect: false },
            ],
            solution: 'Glasnost betod apenhet. Folk fikk lov til a snakke fritt, aviser begynte a skrive om problemer som korrupsjon og miljokatastrofer, og historiske forbrytelser ble avdekket. Det var som a lofte et lokk pa tiar med undertrykt frustrasjon.',
          },
          {
            id: 'historie-14-4-n-quiz1-q2',
            task: 'Hva betod perestrojka?',
            options: [
              { id: 'a', text: 'Politisk apenhet og ytringsfrihet', isCorrect: false },
              { id: 'b', text: 'Omstrukturering -- okonomiske reformer med mer rom for privat initiativ', isCorrect: true },
              { id: 'c', text: 'Opplosning av Sovjetunionen', isCorrect: false },
              { id: 'd', text: 'Gjenforening av Ost- og Vest-Europa', isCorrect: false },
            ],
            solution: 'Perestrojka betod omstrukturering og omfattet okonomiske reformer: mer rom for privat initiativ og mindre stiv byrakratisk kontroll. Malet var a fa kommunismen til a fungere bedre, men reformene skapte forvirring uten a levere resultater.',
          },
        ],
      },
    },
    {
      id: 'historie-14-4-n-section2',
      type: 'text',
      content: `## 1989 - Aret da kommunismen falt

1989 var et underverksenes ar. Pa bare noen maneder kollapset kommunismen i land etter land i Ost-Europa - og nesten overalt fredelig.

I **Polen** hadde fagforeningen Solidaritet kjempet i arevis. Na, i juni 1989, vant de frie valg. For forste gang pa over 40 ar styrte ikke kommunistene et osteuropeisk land.

I **Ungarn** begynte reformene tidlig. I mai apnet de grensen til Østerrike - og tusenvis av østtyskere flyktet den veien. Jernteppet fikk sitt forste store hull.

I **Øst-Tyskland** vokste demonstrasjonene. Hver mandag marsjerte titusenvis i Leipzig med stearinlys og ropet "Wir sind das Volk" - vi er folket. Regimet vaklet. Og sa kom kvelden 9. november.

I **Tsjekkoslovakia** tok det bare ti dager. "Fløyelsrevolusjonen" viste hvor raskt undertrykkende regimer kunne falle nar folk sa "nok".

Bare i **Romania** ble det blodig. Diktatoren Ceausescu nektet a gi opp. Men til slutt vendte haeren seg mot ham. Han og kona ble henrettet pa juledag.

Det mest bemerkelsesverdige var hva som ikke skjedde. Sovjet grep ikke inn. I 1956 hadde de sendt stridsvogner til Ungarn. I 1968 til Tsjekkoslovakia. Na stod de pa sidelinjen. Gorbatsjov hadde bestemt at Østblokken matte finne sin egen vei.`,
    },
    {
      id: 'historie-14-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-14-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa kommunismens fall i Ost-Europa 1989:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-4-n-quiz2-q0',
            task: 'Hvorfor var det sa avgjorende at Sovjet ikke grep inn militaert da kommunismen falt i Ost-Europa i 1989?',
            options: [
              { id: 'a', text: 'Fordi Sovjet ikke hadde noen militaer tilstedevarelse i Ost-Europa', isCorrect: false },
              { id: 'b', text: 'Fordi Gorbatsjov valgte a la landene ga sin egen vei, i motsetning til 1956 og 1968 da Sovjet hadde slatt ned opprør', isCorrect: true },
              { id: 'c', text: 'Fordi NATO truet med atomkrig', isCorrect: false },
              { id: 'd', text: 'Fordi FN forbod sovjetisk intervensjon', isCorrect: false },
            ],
            solution: 'Tidligere hadde Sovjet slatt ned opprør med vold i Budapest 1956 og Praha 1968. At Gorbatsjov valgte a ikke gripe inn i 1989, signaliserte at osteuropeiske land kunne velge selv.',
          },
          {
            id: 'historie-14-4-n-quiz2-q1',
            task: 'Hvilket land var det forste i Ostblokken der kommunistene mistet makten gjennom frie valg i 1989?',
            options: [
              { id: 'a', text: 'Øst-Tyskland', isCorrect: false },
              { id: 'b', text: 'Romania', isCorrect: false },
              { id: 'c', text: 'Polen, der fagforeningen Solidaritet vant frie valg i juni 1989', isCorrect: true },
              { id: 'd', text: 'Ungarn', isCorrect: false },
            ],
            solution: 'I Polen hadde fagforeningen Solidaritet kjempet i arevis. I juni 1989 vant de frie valg -- for forste gang pa over 40 ar styrte ikke kommunistene et osteuropeisk land. Dette inspirerte resten av regionen.',
          },
          {
            id: 'historie-14-4-n-quiz2-q2',
            task: 'Hva var "fløyelsrevolusjonen"?',
            options: [
              { id: 'a', text: 'Murens fall i Berlin', isCorrect: false },
              { id: 'b', text: 'Den fredelige revolusjonen i Tsjekkoslovakia som veltet kommunismen pa bare ti dager', isCorrect: true },
              { id: 'c', text: 'Den blodige revolusjonen i Romania', isCorrect: false },
              { id: 'd', text: 'Solidaritets-bevegelsen i Polen', isCorrect: false },
            ],
            solution: 'Fløyelsrevolusjonen var den fredelige omveltningen i Tsjekkoslovakia i november 1989. Pa bare ti dager falt det kommunistiske regimet uten blodsutgytelse. Navnet "fløyels-" henspiller pa hvor glatt og fredelig overgangen var.',
          },
          {
            id: 'historie-14-4-n-quiz2-q3',
            task: 'I hvilket osteuropeisk land ble fallet av kommunismen blodig?',
            options: [
              { id: 'a', text: 'Polen', isCorrect: false },
              { id: 'b', text: 'Ungarn', isCorrect: false },
              { id: 'c', text: 'Tsjekkoslovakia', isCorrect: false },
              { id: 'd', text: 'Romania, der diktatoren Ceausescu ble henrettet', isCorrect: true },
            ],
            solution: 'Bare i Romania ble det blodig. Diktatoren Ceausescu nektet a gi opp makten, men haeren vendte seg mot ham. Han og kona ble henrettet pa juledag 1989. I alle de andre landene var overgangen fredelig.',
          },
        ],
      },
    },
    {
      id: 'historie-14-4-n-section3',
      type: 'text',
      content: `## Tyskland blir ett igjen

Da muren falt, var sporsmalene mange. Hva skulle skje med de to Tysklandene? Ville det europeiske kartet tegnes pa nytt?

Kansler Helmut Kohl grep muligheten. Han presset pa for rask gjenforening. Mange var skeptiske - Frankrike, Storbritannia, til og med Gorbatsjov var bekymret for et sterkt, samlet Tyskland i hjertet av Europa.

Men folkeviljen var klar. I mars 1990 holdt Øst-Tyskland sine forste frie valg. Partiene som stotte rask gjenforening vant stort. Forhandlinger fulgte - med fire stormakter (USA, Sovjet, Storbritannia, Frankrike) og de to tyske statene.

**3. oktober 1990** ble Tyskland offisielt gjenforent. Øst-Tyskland opphørte a eksistere og ble del av Forbundsrepublikken. Det var slutten pa etterkrigstiden, slutten pa den todelte Europa.

Men utfordringene var enorme. Øst-Tyskland var langt fattigere enn Vest. Industrien var utdatert, infrastrukturen forfallen. Millioner av østtyskere oppdaget at de matte tilpasse seg et helt nytt system - nye lover, ny valuta, ny virkelighet.

"Muren i hodet" forsvant ikke like fort som muren av betong. Forskjellene mellom øst og vest lever videre i Tyskland enna i dag.`,
    },
    {
      id: 'historie-14-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-14-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa Tysklands gjenforening:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-4-n-quiz3-q0',
            task: 'Hvilke utfordringer motte Tyskland etter gjenforeningen i 1990?',
            options: [
              { id: 'a', text: 'Bare politiske utfordringer -- økonomien gikk knirkefritt', isCorrect: false },
              { id: 'b', text: 'Øst var mye fattigere med utdatert industri, millioner mistet jobb, og mentale forskjeller ("muren i hodet") vedvarte', isCorrect: true },
              { id: 'c', text: 'Vest-Tyskland ble fattigere enn øst', isCorrect: false },
              { id: 'd', text: 'Det var ingen utfordringer -- gjenforeningen var smertefri', isCorrect: false },
            ],
            solution: 'Gjenforeningen avdekket enorme okonomiske gap. Østtysk industri kollapset, og 40 ar med ulik utvikling hadde skapt mentale forskjeller -- "muren i hodet" -- som gjorde integrasjon vanskelig.',
          },
          {
            id: 'historie-14-4-n-quiz3-q1',
            task: 'Nar ble Tyskland offisielt gjenforent?',
            options: [
              { id: 'a', text: '9. november 1989 (da muren falt)', isCorrect: false },
              { id: 'b', text: '25. desember 1991', isCorrect: false },
              { id: 'c', text: '3. oktober 1990', isCorrect: true },
              { id: 'd', text: '1. januar 1995', isCorrect: false },
            ],
            solution: '3. oktober 1990 ble Tyskland offisielt gjenforent. Merk at dette var nesten et ar etter murens fall (9. november 1989) -- det tok tid med forhandlinger mellom de to tyske statene og fire stormakter.',
          },
          {
            id: 'historie-14-4-n-quiz3-q2',
            task: 'Hva menes med "muren i hodet"?',
            options: [
              { id: 'a', text: 'At deler av Berlinmuren fortsatt star', isCorrect: false },
              { id: 'b', text: 'At mentale og kulturelle forskjeller mellom ost og vest vedvarte lenge etter den fysiske murens fall', isCorrect: true },
              { id: 'c', text: 'At osttyskere ikke kunne huske livet for muren', isCorrect: false },
              { id: 'd', text: 'At vesttyskere nektet a besoke ost', isCorrect: false },
            ],
            solution: '"Muren i hodet" er et uttrykk for at de mentale og kulturelle forskjellene mellom ost og vest i Tyskland ikke forsvant bare fordi den fysiske muren ble revet. 40 ar med ulik utvikling hadde skapt forskjeller i verdier, forventninger og identitet som preger Tyskland enna i dag.',
          },
        ],
      },
    },
    {
      id: 'historie-14-4-n-section4',
      type: 'text',
      content: `## Sovjetunionen smulder bort

Mens Ost-Europa frigjorde seg, begynte Sovjetunionen selv a ga i opplosning.

Det startet i **Baltikum**. Litauen, Latvia og Estland hadde aldri akseptert at de var del av Sovjet - de var annektert med makt i 1940. Na krevde de friheten tilbake. I 1990 erklarte Litauen uavhengighet. Gorbatsjov forsøkte a stoppe dem, men vegret seg for a bruke full militaermakt.

I august 1991 forsøkte hardlinere et kupp. De ville styrte Gorbatsjov og gjenopprette sovjetisk kontroll. Men kuppet mislyktes - delvis fordi **Boris Jeltsin**, lederen for den russiske republikken, mobiliserte motstand. Bilder av Jeltsin pa en stridsvogn, i opposisjon mot kuppmakerne, gikk verden rundt.

Etter det mislykkede kuppet akselererte opplosningen. Den ene republikken etter den andre erklarte uavhengighet. **1. desember 1991** stemte Ukraina for a forlate unionen. Det var dodsstotet.

**25. desember 1991** gikk Gorbatsjov av. Det sovjetiske flagget ble senket over Kreml for siste gang. Neste dag ble Sovjetunionen formelt oppløst.

En supermakt var borte. 15 nye stater oppstod pa ruinene. Den kalde krigen var definitivt over.`,
    },
    {
      id: 'historie-14-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-14-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv pa Sovjetunionens opplosning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-4-n-quiz4-q0',
            task: 'Hva var det som endelig utloste Sovjetunionens opplosning i desember 1991?',
            options: [
              { id: 'a', text: 'Et vellykket militaerkupp mot Gorbatsjov', isCorrect: false },
              { id: 'b', text: 'Amerikansk invasjon', isCorrect: false },
              { id: 'c', text: 'At Ukraina stemte for uavhengighet, etter det mislykkede kuppet som hadde akselerert opplosningen', isCorrect: true },
              { id: 'd', text: 'En naturkatastrofe som odela Moskva', isCorrect: false },
            ],
            solution: 'Det mislykkede kuppet i august 1991 svekket sentral sovjetisk makt. Da Ukraina stemte for uavhengighet 1. desember, var det klart at unionen ikke kunne overleve. Tre uker senere gikk Gorbatsjov av.',
          },
          {
            id: 'historie-14-4-n-quiz4-q1',
            task: 'Hva skjedde under kuppforsoket i august 1991?',
            options: [
              { id: 'a', text: 'Hardlinere lyktes med a styrte Gorbatsjov og gjenopprette kommunistisk kontroll', isCorrect: false },
              { id: 'b', text: 'Hardlinere forsøkte a styrte Gorbatsjov, men kuppet mislyktes blant annet fordi Boris Jeltsin mobiliserte motstand', isCorrect: true },
              { id: 'c', text: 'Gorbatsjov ledet kuppet selv', isCorrect: false },
              { id: 'd', text: 'NATO grep inn militaert for a stoppe kuppet', isCorrect: false },
            ],
            solution: 'Hardlinere ville styrte Gorbatsjov og gjenopprette sovjetisk kontroll, men kuppet mislyktes. Boris Jeltsin mobiliserte folkelig motstand. Kuppet fikk motsatt effekt -- det akselererte opplosningen ved a vise hvor svak sentralmakten var blitt.',
          },
          {
            id: 'historie-14-4-n-quiz4-q2',
            task: 'Hvilke land i Baltikum var de forste til a kreve uavhengighet fra Sovjet?',
            options: [
              { id: 'a', text: 'Polen, Tsjekkoslovakia og Ungarn', isCorrect: false },
              { id: 'b', text: 'Ukraina, Hviterussland og Moldova', isCorrect: false },
              { id: 'c', text: 'Georgia, Armenia og Aserbajdsjan', isCorrect: false },
              { id: 'd', text: 'Litauen, Latvia og Estland', isCorrect: true },
            ],
            solution: 'Litauen, Latvia og Estland hadde aldri akseptert at de var del av Sovjet -- de var annektert med makt i 1940. De var de forste til a kreve frihet, og Litauen erklarte uavhengighet allerede i 1990.',
          },
          {
            id: 'historie-14-4-n-quiz4-q3',
            task: 'Nar opphørte Sovjetunionen formelt a eksistere?',
            options: [
              { id: 'a', text: '9. november 1989', isCorrect: false },
              { id: 'b', text: '3. oktober 1990', isCorrect: false },
              { id: 'c', text: '25. desember 1991, da Gorbatsjov gikk av', isCorrect: true },
              { id: 'd', text: '1. januar 1993', isCorrect: false },
            ],
            solution: 'Gorbatsjov gikk av 25. desember 1991. Det sovjetiske flagget ble senket over Kreml for siste gang. Neste dag ble Sovjetunionen formelt oppløst, og 15 nye stater oppstod pa ruinene.',
          },
        ],
      },
    },
    {
      id: 'historie-14-4-n-section5',
      type: 'text',
      content: `## En ny verden?

Da Sovjetunionen falt, erklarte noen at historien var over. Demokratiet hadde vunnet. Fra na av ville alle bli som oss.

Det viste seg a vaere for optimistisk.

Ja, den kalde krigens fare for atomkrig mellom supermaktene var over. Ja, millioner av mennesker fikk frihet. Ja, Europa kunne integreres pa en ny mate, med østeuropeiske land som etter hvert ble med i EU og NATO.

Men nye problemer oppstod. I det tidligere **Jugoslavia** brøt det ut kriger mellom folk som hadde levd sammen i tiar - kommunismen hadde holdt nasjonalismen i sjakk, og na eksploderte den. I **Russland** forte overgangen til markedsokonomi til okonomisk kaos, korrupsjon og voksende ulikhet. Mange russere folte seg ydmyket og savnet stormaktstatusen.

Og den nye verdensordenen var **unipolar** - USA stod igjen som eneste supermakt. Noen sa dette som en mulighet for stabilitet og demokratisering. Andre sa det som en ubalanse som for eller siden ville skape motreaksjoner.

Vi lever fortsatt i skyggen av 1991. Vladimir Putin har kalt Sovjetunionens fall "det 20. arhundrets storste geopolitiske katastrofe". Spenningene mellom Russland og Vesten som vi ser i dag, har rotter i tragediene og mulighetene som oppstod da den kalde krigen tok slutt.`,
    },
    {
      id: 'historie-14-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-14-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv pa den kalde krigens ettervirkninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-14-4-n-quiz5-q0',
            task: 'Hva ble konsekvensene av den kalde krigens slutt -- bade positive og negative?',
            options: [
              { id: 'a', text: 'Bare positive -- alle problemer ble lost', isCorrect: false },
              { id: 'b', text: 'Bare negative -- alt ble verre', isCorrect: false },
              { id: 'c', text: 'Frihet for millioner og redusert atomfare, men ogsa nye konflikter som Jugoslavia, okonomisk kaos i Russland, og en ubalansert verdensorden', isCorrect: true },
              { id: 'd', text: 'Ingen konsekvenser -- alt fortsatte som for', isCorrect: false },
            ],
            solution: 'Den kalde krigens slutt brakte frihet for Ost-Europa og redusert atomfare, men ogsa nye problemer: etniske konflikter, okonomisk kaos i Russland, og russisk ydmykelse som enna preger internasjonal politikk.',
          },
          {
            id: 'historie-14-4-n-quiz5-q1',
            task: 'Hva skjedde i det tidligere Jugoslavia etter den kalde krigens slutt?',
            options: [
              { id: 'a', text: 'Landet ble et stabilt demokrati', isCorrect: false },
              { id: 'b', text: 'Det brøt ut blodige kriger mellom ulike etniske grupper da kommunismen ikke lenger holdt nasjonalismen i sjakk', isCorrect: true },
              { id: 'c', text: 'Landet ble med i NATO og EU umiddelbart', isCorrect: false },
              { id: 'd', text: 'Ingenting endret seg', isCorrect: false },
            ],
            solution: 'I Jugoslavia hadde kommunismen holdt ulike nasjonaliteter sammen. Da kommunismen falt, eksploderte nasjonalismen, og det brøt ut kriger mellom serbere, kroater og bosniere. Det ble de blodigste konfliktene i Europa siden andre verdenskrig.',
          },
          {
            id: 'historie-14-4-n-quiz5-q2',
            task: 'Hva menes med en "unipolar verdensorden" etter 1991?',
            options: [
              { id: 'a', text: 'At FN styrte hele verden', isCorrect: false },
              { id: 'b', text: 'At Europa ble verdens mektigste kontinent', isCorrect: false },
              { id: 'c', text: 'At Russland og Kina delte verden mellom seg', isCorrect: false },
              { id: 'd', text: 'At USA stod igjen som eneste supermakt i verden', isCorrect: true },
            ],
            solution: 'Etter Sovjetunionens fall stod USA igjen som verdens eneste supermakt -- en unipolar verdensorden. Noen sa dette som en mulighet for stabilitet og demokratisering, andre som en ubalanse som for eller siden ville skape motreaksjoner.',
          },
        ],
      },
    },
    {
      id: 'historie-14-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Den kalde krigen tok slutt raskere og mer fredelig enn noen hadde forventet. Fra Gorbatsjovs reformer via murens fall til Sovjetunionens opplosning - pa bare seks ar ble verden transformert. Men slutten skapte bade muligheter og nye utfordringer.

**Nokkelbegreper du na kjenner:**
- **Glasnost og perestrojka:** Gorbatsjovs reformer (apenhet og omstrukturering) som utilsiktet fremskyndet Sovjets fall
- **Murens fall (9. november 1989):** Natten da osttyskere strommet til Vest-Berlin, symbolet pa den kalde krigens slutt
- **Revolusjonsaret 1989:** Kommunismens fall i Polen, Ungarn, Øst-Tyskland, Tsjekkoslovakia og Romania
- **Tysklands gjenforening (1990):** Sammenslutningen av de to tyske statene
- **Sovjetunionens opplosning (1991):** Supermaktens ende, 15 nye stater oppstar
- **Unipolar verdensorden:** En verden med USA som eneste supermakt

**Det viktigste du tar med deg:**
Den kalde krigens slutt viser at selv de mektigste systemer kan falle overraskende fort. Gorbatsjov ville redde kommunismen, men losnet krefter han ikke kunne kontrollere. Folkebevegelser i Ost-Europa viste at undertrykkelse ikke kan vare evig. Men historien sluttet ikke i 1989 - de nye utfordringene som oppstod, fra Balkan-krigene til russisk nasjonalisme, minner oss om at overganger er kompliserte og sjelden sa lykkelige som de ser ut i oyeblikket.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 13
// ============================================================================

export const HISTORIE_NARRATIV_DEL13_CHAPTERS = [
  CHAPTER_HISTORIE_14_1_NARRATIV,
  CHAPTER_HISTORIE_14_2_NARRATIV,
  CHAPTER_HISTORIE_14_3_NARRATIV,
  CHAPTER_HISTORIE_14_4_NARRATIV,
];
