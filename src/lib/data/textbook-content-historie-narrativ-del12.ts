/**
 * Tekstbok innhold for Historie - NARRATIV VERSJON DEL 12
 * Kapittel 13: Andre verdenskrig og Holocaust (13.1 - 13.5)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * a lese og lytte til, med quiz-sporsmal for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 13.1 NARRATIV: Arsaker og krigens gang
// ============================================================================

export const CHAPTER_HISTORIE_13_1_NARRATIV: TextbookChapter = {
  id: 'historie-13-1-narrativ',
  courseId: 'historie',
  chapterNumber: '13.1',
  title: 'Arsaker og krigens gang',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om historiens mest odeleggende konflikt - fra krigsutbruddet til kapitulasjonen.',
  estimatedMinutes: 50,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-13-1',
  isNarrativeVersion: true,
  content: [
    {
      id: 'historie-13-1-n-intro',
      type: 'text',
      content: `## Den morke morgenen

Tenk deg at du vakner tidlig om morgenen 1. september 1939. Du bor i en liten polsk by naer den tyske grensen. Klokken er litt over fire. Plutselig horer du en durende lyd fra himmelen - hundrevis av fly. Sa kommer eksplosjonene. Hus raser sammen. Folk skriker. Tyske panservogner ruller over grensen.

Andre verdenskrig har begynt.

I lopet av de neste seks arene skal denne krigen ta mellom 70 og 85 millioner menneskeliv. Det er flere enn hele Norges befolkning - ganget med femten. Store deler av Europa og Asia skal legges i ruiner. Og verden skal for alltid bli forandret.

Hvordan kunne dette skje? Hadde ikke menneskeheten lart av forste verdenskrigs redsler, bare tjue ar tidligere? La oss folge denne historien sammen - fra arsakene bak krigen til den endelige kapitulasjonen.`,
    },
    {
      id: 'historie-13-1-n-section1',
      type: 'text',
      content: `## Rotene til katastrofen

For a forsta hvorfor andre verdenskrig brøt ut, ma vi ga tilbake til avslutningen av den forste. I 1919 ble **Versailles-traktaten** underskrevet. Denne fredsavtalen var ment a sikre at Tyskland aldri igjen kunne true verdensfreden. Men i stedet saadde den froene til en ny og enda verre konflikt.

Tenk deg at du er tysk i 1919. Dere har nettopp tapt krigen - men mange tyskere folte at de ikke egentlig var beseiret pa slagmarken. Na tvinges landet til a akseptere all skylden for krigen. Enorme krigserstatninger skal betales. Viktige territorier blir tatt fra dere - Alsace-Lorraine til Frankrike, omrader i ost til det nyopprettede Polen. Militaret krympes til 100 000 mann. Flyvapen og ubater forbys.

Denne ydmykelsen skapte en dyp bitterhet. Da den okonomiske krisen pa 1930-tallet rammet og millioner ble arbeidsledige, var det en mann som visste a utnytte denne bitterheten. Adolf Hitler lovte a rive i stykker Versailles-traktaten og gjenreise Tysklands storhet. Og folk lyttet.

Men krigen kom ikke bare av Versailles. Den kom ogsa av **appeasement** - ettergivenhetspolitikken. Storbritannia og Frankrike var sa desperate etter a unnga en ny krig at de ga etter gang pa gang nar Hitler krevde mer. De lot ham remilitarisere Rhinland i 1936. De lot ham annektere Osterrike i 1938. Ved Munchen-konferansen samme ar ga de ham Sudetenland - og tsjekkerne ble ikke engang invitert til a uttale seg om sin egen skjebne.

Hver gang Hitler fikk viljen sin, ble han modigere. Hver innrommelse overbeviste ham om at Vestmaktene var svake. Til slutt var det ingen grenser igjen.`,
    },
    {
      id: 'historie-13-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-13-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvorfor skapte Versailles-traktaten grobunn for en ny verdenskrig?',
        options: [
          { id: 'a', text: 'Fordi den var for mild mot Tyskland', isCorrect: false },
          { id: 'b', text: 'Fordi den ydmyket Tyskland med krigskyld, enorme erstatninger og territortap, noe nazistene utnyttet', isCorrect: true },
          { id: 'c', text: 'Fordi den styrket Tysklands militar', isCorrect: false },
          { id: 'd', text: 'Fordi den ga Tyskland for mye makt i Europa', isCorrect: false },
        ],
        solution: 'Versailles-traktaten skapte dyp bitterhet i Tyskland. Krigskyldparagrafen, de enorme krigserstatningene og tapet av territorier ble opplevd som en nasjonal ydmykelse. Hitler og nazistene utnyttet denne misnoen ved a love a rive opp traktaten og gjenreise Tysklands storhet. Kombinert med okonomisk krise ga dette dem veien til makten.',
      },
    },
    {
      id: 'historie-13-1-n-section2',
      type: 'text',
      content: `## Blitzkrig - lynkrigen

Da krigen forst brøt ut, viste Tyskland en ny og skremmende form for krigforing: **blitzkrig**, eller lynkrig.

Forestill deg at du er en polsk soldat i september 1939. Dere har forberedt dere pa krig slik deres fedre kjempet i 1914 - med skyttergraver og langsomme fremrykninger. Men det som moter dere er noe helt annet. Forst kommer flyene - hundrevis av dem - som bomber forsvarslinjer, veier og byer. For dere rekker a samle dere, dundrer panservognene gjennom forsvarslinjene deres. Bak dem folger motorisert infanteri som rydder opp. Kommunikasjonslinjene kuttes. Dere er omringet for dere forstår hva som skjer.

Pa bare fem uker var Polen beseiret. Neste var - Danmark og Norge i april 1940. Danmark falt pa én dag. Norge holdt ut i to maneder, men matte til slutt gi tapt. Og sa kom det virkelige sjokket: Frankrike.

Frankrike hadde verdens rykte som den sterkeste landmakten i Europa. De hadde bygget Maginot-linjen - et enormt festningsverk langs grensen til Tyskland. Men tyskerne bare gikk rundt den, gjennom Belgia og Ardennene. Pa seks uker var Frankrike beseiret. Den stormakten som hadde holdt ut i fire ar under forste verdenskrig, kollapset pa halvannen maned.

Ved sommeren 1940 kontrollerte Hitler det meste av Vest-Europa. Bare Storbritannia holdt stand, alene pa den andre siden av Kanalen. Winston Churchill lovte at de ville "kjempe pa strendene, kjempe pa landingsplassene" - aldri overgi seg. Men situasjonen sa desperat ut.`,
    },
    {
      id: 'historie-13-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-13-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var nytt og skremmende med den tyske blitzkrigen?',
        options: [
          { id: 'a', text: 'Den baserte seg pa langsomme fremrykninger og skyttergraver', isCorrect: false },
          { id: 'b', text: 'Den kombinerte massive flyangrep, raske panserangrep og motorisert infanteri for lynraske gjennombrudd', isCorrect: true },
          { id: 'c', text: 'Den brukte bare infanteri uten moderne vapen', isCorrect: false },
          { id: 'd', text: 'Den fokuserte pa forsvarsposisjoner fremfor angrep', isCorrect: false },
        ],
        solution: 'Blitzkrigen var revolusjonerende fordi den kombinerte flyangrep som odela fiendens luftvapen og kommunikasjoner, raske panserangrep som brot gjennom forsvarslinjene, og motorisert infanteri som fulgte opp gjennombruddene. Dette ga en hastighet som fiendene ikke kunne henge med pa. Polen falt pa fem uker, Frankrike pa seks.',
      },
    },
    {
      id: 'historie-13-1-n-section3',
      type: 'text',
      content: `## Vendepunktet: 1941

1941 var aret da krigen forandret karakter fullstendig. To hendelser endret alt.

Den forste kom 22. juni 1941: **Operasjon Barbarossa**. Hitler brøt ikke-angrepspakten med Stalin og sendte tre millioner soldater inn i Sovjetunionen. Det var historiens storste militare invasjon.

Tenk deg at du er en ung sovjetisk soldat denne sommeren. Tyskerne ruller frem med en fart ingen trodde var mulig. Millioner av dine kamerater blir drept eller tatt til fange i enorme innringningsslag. Byene faller en etter en. Innen hosten star fienden utenfor Moskva.

Men sa snur det. Den russiske vinteren setter inn - kaldere enn tyskerne hadde forberedt seg pa. Forsyningslinjene strekkes til bristepunktet. Sovjeterne mottar friske tropper fra Sibir. Fremrykkingen stopper. Hitler har gjort den samme feilen som Napoleon hundre ar tidligere - han har undervurdert Russland.

Den andre hendelsen kom 7. desember 1941: **Pearl Harbor**. Japan angrep den amerikanske flatebasen pa Hawaii uten krigserklaering. President Roosevelt kalte det "en dag som vil leve i vanare". USA var na i krig.

Med ett hadde Hitler fatt to nye fiender - bade Sovjetunionen og USA. Aksemaktene stod na mot en koalisjon med uendelige ressurser: Amerikas industri, Sovjetunionens millionhaer, det britiske imperiet. Fra dette oyeblikket var aksemaktenes nederlag bare et sporsmal om tid. Men det skulle ta fire forferdelige ar til.`,
    },
    {
      id: 'historie-13-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-13-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvorfor var 1941 et vendepunkt i andre verdenskrig?',
        options: [
          { id: 'a', text: 'Fordi Tyskland vant sine storste seire dette aret', isCorrect: false },
          { id: 'b', text: 'Fordi invasjonen av Sovjet og Pearl Harbor brakte to nye stormakter inn i krigen mot aksemaktene', isCorrect: true },
          { id: 'c', text: 'Fordi krigen endte dette aret', isCorrect: false },
          { id: 'd', text: 'Fordi Storbritannia kapitulerte', isCorrect: false },
        ],
        solution: '1941 endret krigen fundamentalt. Operasjon Barbarossa apnet ostfronten og tappet Tysklands ressurser i en tofrontskrig. Pearl Harbor brakte USA inn i krigen med sin enorme industrikapasitet. Plutselig stod aksemaktene mot en overveldende koalisjon. Selv om krigen skulle vare fire ar til, var utfallet fra dette oyeblikket i praksis avgjort.',
      },
    },
    {
      id: 'historie-13-1-n-section4',
      type: 'text',
      content: `## Total krig

Andre verdenskrig var en **total krig** pa en mate som overgikk alt menneskeheten hadde sett for. Dette begrepet betyr at hele samfunnet mobiliseres for krigsinnsatsen - det finnes ikke lenger noe skille mellom front og hjemmefront.

Tenk deg at du er en vanlig arbeider i en storby - la oss si London eller Berlin. Livet ditt er fullstendig forandret av krigen. Fabrikken din produserer ikke lenger forbruksvarer, men bomber og kuler. Maten er rasjonert. Om natten horer du flyalarmene og ma ned i bomberommet mens eksplosjoner ryster byen. Kanskje blir huset ditt truffet. Kanskje dor naboen din.

For sivilbefolkningen var denne krigen like farlig som for soldatene. **Strategisk bombing** av byer ble brukt av begge sider. Tyskerne bombet London under "the Blitz". De allierte bombet tyske byer til grus - Dresden, Hamburg, Koln. I Asia brente amerikanske brannbomber ned Tokyo. Og til slutt kom atombombene over Hiroshima og Nagasaki.

Over halvparten av alle som dode i andre verdenskrig var sivile - ikke soldater. Dette var nytt. I forste verdenskrig dode soldatene i skyttergravene. I andre verdenskrig dode kvinner, barn og gamle i sine egne hjem.

Og sa var det ideologien. Dette var ikke bare en krig om territorier eller ressurser. Det var en kamp mellom verdensanskuelser. Pa den ene siden fascisme og nazisme - med sin raselare, sin forakt for demokrati, sin tro pa den sterkestes rett. Pa den andre siden demokrati og kommunisme - som trass sine forskjeller var enige om at nazismen matte knuses.`,
    },
    {
      id: 'historie-13-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-13-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva innebar det at andre verdenskrig var en "total krig"?',
        options: [
          { id: 'a', text: 'At bare militare styrker var involvert', isCorrect: false },
          { id: 'b', text: 'At hele samfunnet ble mobilisert, sivile var mal for angrep, og det ikke fantes skille mellom front og hjemmefront', isCorrect: true },
          { id: 'c', text: 'At krigen var kortvarig og begrenset', isCorrect: false },
          { id: 'd', text: 'At bare én nasjon var involvert', isCorrect: false },
        ],
        solution: 'Total krig betyr at skillet mellom militart og sivilt oppheves. Hele okonomien omstilles til krigsproduksjon. Sivilbefolkningen blir mål for bombing. Ideologisk mobilisering gjennomsyrer samfunnet. I andre verdenskrig dode over halvparten av ofrene som sivile - kvinner, barn og eldre ble drept i sine egne hjem av bombing, sult og folkemord.',
      },
    },
    {
      id: 'historie-13-1-n-section5',
      type: 'text',
      content: `## Krigens slutt

I 1942-43 begynte aksemaktene a tape. Ved **Stalingrad** ble en hel tysk arme omringet og tilintetgjort - 300 000 soldater. I Nord-Afrika ble Rommels styrker drevet tilbake. I Stillehavet begynte USA a gjenerobre oyene Japan hadde tatt.

**D-dagen**, 6. juni 1944, apnet en ny front i vest. 150 000 allierte soldater landsatte pa strendene i Normandie. Det var historiens storste amfibieinvasjon. Na matte Tyskland kjempe pa tre fronter - i ost mot Sovjet, i vest mot amerikanerne og britene, og i sor i Italia.

Det gikk fort na. Paris ble frigjort i august 1944. Sovjetiske styrker rykket vestover gjennom Polen. I april 1945 nærmet de seg Berlin fra alle kanter.

Tenk deg at du er i Berlin i disse siste dagene. Byen ligger i ruiner. Maten er slutt. Russiske granater regner ned. I bunkeren sin nekter Hitler a akseptere nederlaget. Den 30. april tar han sitt eget liv. Atte dager senere, 8. mai 1945, kapitulerer Tyskland betingelseslost.

Men i Asia fortsetter krigen. Japan nekter a overgi seg. USA star overfor valget mellom en blodig invasjon av Japan - som kunne koste hundretusener av amerikanske liv - eller a bruke et nytt og forferdelig vapen.

Den 6. august 1945 slipper B-29-flyet "Enola Gay" en atombombe over **Hiroshima**. Mellom 70 000 og 80 000 mennesker dor oyeblikkelig. Tre dager senere faller en ny bombe over Nagasaki. Den 15. august kunngjor keiseren Japans kapitulasjon.

Andre verdenskrig er over. Men verden er for alltid forandret.`,
    },
    {
      id: 'historie-13-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-13-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilken hendelse regnes som det psykologiske vendepunktet i krigen mot Tyskland?',
        options: [
          { id: 'a', text: 'Angrepet pa Pearl Harbor', isCorrect: false },
          { id: 'b', text: 'Slaget ved Stalingrad, der en hel tysk arme ble tilintetgjort', isCorrect: true },
          { id: 'c', text: 'Bombingen av Dresden', isCorrect: false },
          { id: 'd', text: 'Hitlers selvmord', isCorrect: false },
        ],
        solution: 'Stalingrad (1942-43) var vendepunktet. Den tyske 6. arme pa 300 000 mann ble omringet og tilintetgjort. Det var Tysklands forste store nederlag og knuste myten om den uovervinnelige tyske haren. Fra dette oyeblikket var det klart at Tyskland kunne beseires. Moralen i den tyske haren og sivilbefolkningen ble aldri den samme.',
      },
    },
    {
      id: 'historie-13-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Andre verdenskrig var historiens mest odeleggende konflikt. Fra Hitlers angrep pa Polen i 1939 til Japans kapitulasjon i 1945 dode mellom 70 og 85 millioner mennesker. Krigen forandret verden fundamentalt og la grunnlaget for den verdensordenen vi lever i i dag.

**Nokkelbegreper du na kjenner:**
- **Versailles-traktaten:** Fredsavtalen fra 1919 som skapte bitterhet og revansjelyst i Tyskland
- **Appeasement:** Politikken med a gi etter for Hitler for a unnga krig
- **Blitzkrig:** Tysklands lynkrigstaktikk med fly, panser og motorisert infanteri
- **Operasjon Barbarossa:** Tysklands invasjon av Sovjet i juni 1941
- **Pearl Harbor:** Japans angrep pa USA i desember 1941
- **Total krig:** Krig der hele samfunnet mobiliseres og sivile er mal
- **D-dagen:** De alliertes landgang i Normandie 6. juni 1944
- **Stalingrad:** Det psykologiske vendepunktet da en tysk arme ble tilintetgjort

**Det viktigste du tar med deg:**
Andre verdenskrig viste hva som kan skje nar aggressive ideologier far vokse uhindret og nar demokratier nøler for lenge med a sta imot. Den larte verden at noen konflikter ikke kan loses gjennom ettergivenhet, og at prisen for krig - sarlig moderne, total krig - er sa forferdelig at alt ma gjores for a forhindre den.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 13.2 NARRATIV: Holocaust og folkemord
// ============================================================================

export const CHAPTER_HISTORIE_13_2_NARRATIV: TextbookChapter = {
  id: 'historie-13-2-narrativ',
  courseId: 'historie',
  chapterNumber: '13.2',
  title: 'Holocaust og folkemord',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om det systematiske folkemordet pa Europas joder - og hvordan vi aldri ma glemme.',
  estimatedMinutes: 55,
  competenceGoals: ['ideologier, undertrykkelse, terror og Holocaust'],
  linkedChapterId: 'historie-13-2',
  isNarrativeVersion: true,
  content: [
    {
      id: 'historie-13-2-n-intro',
      type: 'text',
      content: `## Sivilisasjonsbruddet

Det er noe i menneskets natur som vegrer seg mot a ta inn det som skjedde under Holocaust. Tallene er sa store, grusomhetene sa ufattelige, at hjernen nesten nekter a tro det. Seks millioner mennesker - drept ikke i krigens kaos, men systematisk, planmessig, industrielt. Menn, kvinner, barn, gamle - utslettet fordi de var joder.

**Holocaust**, ogsa kalt **Shoah** (hebraisk for "katastrofe"), var nazistenes forsok pa a utrydde alle joder i Europa. To tredjedeler av Europas jodiske befolkning ble myrdet. Hele lokalsamfunn som hadde eksistert i hundrevis av ar, ble visket ut.

Men Holocaust var mer enn et tall. Det var millioner av individuelle tragedier. Det var barn som ble revet fra foreldre. Det var gamle mennesker som ble jaget ut av hjemmene sine. Det var unge med hele livet foran seg som fikk det kuttet kort i gasskamrene.

Vi ma lare om Holocaust - ikke for a dvele ved ondskap, men for a forsta hvordan dette kunne skje. For a gjenkjenne varselsignalene. For a sikre at vi aldri glemmer, og at det aldri skjer igjen.`,
    },
    {
      id: 'historie-13-2-n-section1',
      type: 'text',
      content: `## Antisemittismens dype røtter

For a forsta Holocaust ma vi forsta **antisemittismen** - jodehatet som har preget europeisk historie i arhundrer.

Jodene har vaert en minoritet i Europa siden romertiden. Gjennom middelalderen ble de forfulgt ut fra religiose motiver - de ble beskyldt for a ha drept Jesus, for a forgifte bronner, for ritualmord. De ble utestengt fra de fleste yrker og tvunget til a bo i egne bydeler - gettoer.

Pa 1800-tallet fikk jodene i mange land gradvis like rettigheter. Men samtidig oppstod en ny form for jodehat - **rasistisk antisemittisme**. Denne var basert pa pseudo-vitenskap som hevdet at jodene var en egen, mindreverdig "rase" med uforanderlige negative egenskaper.

Nazistenes antisemittisme kombinerte gammelt religiost jodehat med denne nye raselaeren. Hitler mente at jodene var en kosmisk fiende som kontrollerte bade kapitalismen og kommunismen - en sammensvaergelse mot det "ariske" folket. I hans forvrengde verdensbilde var jodene ikke bare et problem, men selve problemet. All ondskap i verden kunne spores tilbake til dem.

Det var dette som gjorde nazistisk antisemittisme sa morderisk. Religiost jodehat kunne teoretisk loses ved at joder konverterte. Men nar jodiskhet var definert som biologisk, som nedarvet gjennom blodet, fantes det ingen utvei. Selv joder som hadde konvertert for generasjoner siden ble definert som joder. Den eneste "losningen" nazistene sa, var utryddelse.`,
    },
    {
      id: 'historie-13-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-13-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva skilte nazistisk antisemittisme fra eldre former for jodehat?',
        options: [
          { id: 'a', text: 'Den var mildere og mer tolerant', isCorrect: false },
          { id: 'b', text: 'Den var basert pa biologi og rase - jodiskhet kunne ikke endres, noe som apnet for total utryddelse', isCorrect: true },
          { id: 'c', text: 'Den fokuserte bare pa religion', isCorrect: false },
          { id: 'd', text: 'Den var begrenset til Tyskland', isCorrect: false },
        ],
        solution: 'Eldre antisemittisme var ofte religiøst basert - jøder kunne teoretisk unnslippe ved å konvertere. Nazistisk antisemittisme var biologisk - jødiskhet ble sett som nedarvet gjennom blodet og uforanderlig. Dette betydde at det ikke fantes noen utvei for ofrene. Selv konverterte jøder eller deres etterkommere ble definert som jøder. Dette åpnet for tanken om total utryddelse.',
      },
    },
    {
      id: 'historie-13-2-n-section2',
      type: 'text',
      content: `## Trinn for trinn mot avgrunnen

Holocaust kom ikke over natten. Det var en gradvis prosess der hvert steg gjorde det neste mulig.

Tenk deg at du er jode i Tyskland i 1933, aret Hitler tar makten. Forst merker du kanskje ikke sa mye. Noen boikotter av jodiske butikker. Noen antisemittiske slagord. Ubehagelig, men ikke livsfarlig.

Sa kommer **Nurnberglovene** i 1935. Plutselig er du ikke lenger tysk statsborger. Du kan ikke gifte deg med en "arier". Du mister jobben din. Barna dine stenges ute fra skolen.

I november 1938 kommer **Krystallnatten**. Vinduer i jodiske butikker knuses over hele Tyskland. Synagoger brennes. Jodiske menn arresteres og sendes til konsentrasjonsleirer. Na er volden apenlys, og ingen griper inn.

Nar krigen starter i 1939, blir forholdene enda verre. Jodene i okkuperte omrader tvinges inn i **gettoer** - overfylte bydeler inngjerdet med murer og piggtrad. I Warszawa-gettoen presses 400 000 mennesker sammen pa et lite omrade. Folk dor av sult og sykdom.

Men det verste var enda ikke kommet. I 1941, da Tyskland invaderer Sovjet, folger **Einsatzgruppen** - mobile drapsenheter - etter haren. De samler jodiske menn, kvinner og barn, driver dem til gruver og skogholt, og skyter dem. Over en million mennesker blir drept pa denne maten.

Og sa, i 1942, blir "den endelige losningen" vedtatt. Utryddelsesleirene bygges. Holocaust gar inn i sin industrielle fase.`,
    },
    {
      id: 'historie-13-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-13-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvorfor var den gradvise eskaleringen av jødeforfølgelsen viktig for at Holocaust kunne skje?',
        options: [
          { id: 'a', text: 'Fordi jødene ble sterkere for hvert trinn', isCorrect: false },
          { id: 'b', text: 'Fordi hvert steg normaliserte det neste og gjorde befolkningen gradvis vant til økende grusomhet', isCorrect: true },
          { id: 'c', text: 'Fordi det ga jødene tid til a flykte', isCorrect: false },
          { id: 'd', text: 'Fordi nazistene ikke visste hva de ville', isCorrect: false },
        ],
        solution: 'Den gradvise eskaleringen var avgjørende. Hvert trinn - fra diskriminering til vold til gettoisering til massemord - virket som et lite steg fra det forrige. Folk ble vant til grusomheten gradvis. Det ga også gjerningsmennene erfaring og infrastruktur. Da den endelige løsningen kom, var samfunnet allerede tilvent til forfølgelse, og mordmaskineriet var utviklet.',
      },
    },
    {
      id: 'historie-13-2-n-section3',
      type: 'text',
      content: `## Mordmaskineriet

I januar 1942 mottes femten hoye nazi-embedsmenn i en villa ved **Wannsee** utenfor Berlin. De diskuterte logistikk. Hvordan transportere millioner av mennesker? Hvordan håndtere likene? Motet varte bare nitti minutter. De kalte det "den endelige losningen pa det jodiske sporsmal".

Tenk deg at du er en av de millionene som blir drept i arene som folger. Du har blitt drevet fra hjemmet ditt, levd i gettoen i maneder eller ar. Sa kommer ordren om "evakuering". Du lastes inn i en kvegtog sammen med hundrevis av andre. Dagene gar. Ingen mat, nesten ikke vann. Folk dor i vognen.

Nar toget endelig stopper, er du ved en av **utryddelsesleirene**: Auschwitz, Treblinka, Sobibor, Belzec, Chelmno, Majdanek. Vakter skriker ordrer. Familier splittes - menn til én side, kvinner og barn til en annen. En lege peker: til høyre, til venstre. De fleste sendes direkte til gasskamrene.

**Auschwitz-Birkenau** var den storste. Over en million mennesker ble drept der. Gasskamrene var forkledt som dusjer. Folk ble fortalt at de skulle avluses. Innen de forstod sannheten, var dorene lukket og Zyklon B-gassen begynte a stromme inn.

Det er noe dypt forstyrende ved den industrielle karakteren av dette. Nazi-Tyskland brukte moderne byrakrati og teknologi - togtabeller, kartotek, fabrikklignende prosesser - for a myrde millioner av mennesker. Vanlige embedsmenn fylte ut skjemaer. Togene gikk etter rutetider. Alt var organisert med tysk grundighet.`,
    },
    {
      id: 'historie-13-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-13-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var spesielt skremmende ved den "industrielle" karakteren av Holocaust?',
        options: [
          { id: 'a', text: 'At det var kaotisk og tilfeldig', isCorrect: false },
          { id: 'b', text: 'At moderne byråkrati, teknologi og organisering ble brukt til massemord - ondskap utført med effektivitet', isCorrect: true },
          { id: 'c', text: 'At det bare rammet noen fa mennesker', isCorrect: false },
          { id: 'd', text: 'At det var frivillig for ofrene', isCorrect: false },
        ],
        solution: 'Det industrielle aspektet ved Holocaust viser noe dypt forstyrende om moderne sivilisasjon. Byråkratiet som administrerte deportasjonene, teknologien i gasskamrene, den fabrikkmessige organiseringen av drapene - alt viser at moderne metoder kan gjøre ondskap mer effektiv. Holocaust tvinger oss til å innse at sivilisasjon ikke automatisk beskytter mot barbari.',
      },
    },
    {
      id: 'historie-13-2-n-section4',
      type: 'text',
      content: `## Andre ofre

Selv om Holocaust primært rammet jødene, var de ikke de eneste ofrene for nazistenes morderiske ideologi.

**Romfolket** - sigøynerne - ble forfulgt ut fra samme raselogikk som jødene. Mellom 200 000 og 500 000 rom ble drept. De kalte det **Porajmos** - "fortæringen".

**Funksjonshemmede** ble sett som "uverdig liv". Før krigen hadde nazistene allerede startet et "eutanasi"-program der over 200 000 psykisk syke og funksjonshemmede tyskere ble drept - ofte i gasskamre som ble forløpere til dem i utryddelsesleirene.

**Sovjetiske krigsfanger** ble behandlet med ekstrem brutalitet. Av de 5,7 millioner sovjetiske soldatene som ble tatt til fange, døde over 3 millioner i fangenskap - av sult, sykdom, kulde og henrettelser.

**Homofile** menn ble sendt til konsentrasjonsleirer der de bar rosa trekanter. Tusener døde.

**Jehovas vitner** ble forfulgt fordi de nektet å sverge troskap til Hitler eller tjenestegjøre i militæret.

**Polske intellektuelle** - lærere, prester, professorer - ble systematisk eliminert fordi nazistene ønsket å knuse polsk kultur og identitet.

Alle disse gruppene deler erfaringen av å bli definert som "undermenneskelige" av nazistene - mennesker uten verdi, som kunne elimineres. Det er en påminnelse om at Holocaust ikke bare handlet om antisemittisme, men om en bredere ideologi der noen mennesker ble sett som verdiløse.`,
    },
    {
      id: 'historie-13-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-13-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva hadde ofregruppene - jødene, rom, funksjonshemmede og andre - til felles i nazistisk ideologi?',
        options: [
          { id: 'a', text: 'De ble alle sett som politiske motstandere', isCorrect: false },
          { id: 'b', text: 'De ble alle definert som "undermenneskelige" - mennesker uten verdi som kunne elimineres', isCorrect: true },
          { id: 'c', text: 'De var alle fiender i krig mot Tyskland', isCorrect: false },
          { id: 'd', text: 'De var alle rike og mektige', isCorrect: false },
        ],
        solution: 'Nazistisk ideologi kategoriserte mennesker i et hierarki der noen ble definert som "undermenneskelige". Dette gjaldt jødene, men også romfolket, funksjonshemmede, homofile og andre. Felles for alle var at nazistene så dem som verdiløse liv som truet den "ariske rasen". Denne dehumaniseringen muliggjorde massemord.',
      },
    },
    {
      id: 'historie-13-2-n-section5',
      type: 'text',
      content: `## Aldri glemme

Hvorfor må vi lære om Holocaust? Er det ikke bedre å legge fortiden bak oss?

Nei. Vi må huske av flere grunner.

Vi må huske for **ofrenes skyld**. De seks millioner jødene, de hundretusener av rom og funksjonshemmede, alle de andre - de fortjener å ikke bli glemt. De var individer med navn, familier, drømmer. Å glemme dem ville være å la nazistene vinne en siste seier.

Vi må huske for å **forstå hvordan det kunne skje**. Holocaust ble ikke begått av monstre fra en annen planet. Det ble begått av vanlige mennesker - naboer, kolleger, familiemedlemmer - som ble overbevist om at noen mennesker ikke fortjente å leve. Ved å forstå mekanismene - propaganda, gradvis normalisering, lydighet mot autoritet, ansvarsfraskrivelse - kan vi gjenkjenne lignende tendenser i vår egen tid.

Vi må huske for å **motvirke benektelse**. Det finnes fortsatt de som hevder at Holocaust ikke skjedde, eller at tallene er overdrevet. Slik benektelse er en fornærmelse mot ofrene og en fare for fremtiden.

Vi må huske for å **forsvare menneskerettighetene**. Verdenserklæringen om menneskerettigheter fra 1948 var et direkte svar på Holocaust. Den slår fast at alle mennesker er født frie og med lik verdighet og rettigheter. Dette er lærdommer vi må holde levende.

Primo Levi, en Holocaust-overlevende og forfatter, skrev: "Det skjedde, og derfor kan det skje igjen." Minnekulturen rundt Holocaust handler ikke om å dvele ved fortiden, men om å beskytte fremtiden.`,
    },
    {
      id: 'historie-13-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-13-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er det viktig å lære om Holocaust i dag?',
        options: [
          { id: 'a', text: 'For å skape hat mot tyskerne', isCorrect: false },
          { id: 'b', text: 'For å hedre ofrene, forstå hvordan det kunne skje, motvirke benektelse og beskytte menneskerettighetene', isCorrect: true },
          { id: 'c', text: 'Fordi det er lovpålagt', isCorrect: false },
          { id: 'd', text: 'Det er egentlig ikke viktig lenger', isCorrect: false },
        ],
        solution: 'Vi lærer om Holocaust for å hedre millioner av ofre som fortjener å huskes. For å forstå mekanismene bak folkemord - propaganda, dehumanisering, gradvis eskalering - slik at vi kan gjenkjenne varselstegn. For å motvirke benektelse. Og fordi Holocaust førte til menneskerettighetserklæringen og internasjonal strafferett. Som Primo Levi sa: "Det skjedde, og derfor kan det skje igjen."',
      },
    },
    {
      id: 'historie-13-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Holocaust var nazistenes systematiske forsøk på å utrydde alle jøder i Europa. Seks millioner jøder ble drept, sammen med hundretusener av rom, funksjonshemmede og andre. Det var et industrialisert massemord utført med moderne byråkrati og teknologi - et sivilisasjonsbrudd som fortsatt ryster oss.

**Nøkkelbegreper du nå kjenner:**
- **Holocaust/Shoah:** Nazistenes folkemord på jødene
- **Antisemittisme:** Jødehat - fra religiøs til rasistisk form
- **Nürnberglovene (1935):** Fratakelse av jødenes rettigheter
- **Krystallnatten (1938):** Organisert vold mot jøder
- **Gettoer:** Avsperra bydeler der jøder ble tvunget til å bo
- **Wannsee-konferansen (1942):** Planlegging av "den endelige løsningen"
- **Utryddelsesleirer:** Auschwitz, Treblinka, Sobibor og andre dødsfabrikker
- **Andre ofre:** Rom, funksjonshemmede, homofile, krigsfanger

**Det viktigste du tar med deg:**
Holocaust skjedde ikke tilfeldig. Det var resultatet av århundrer med antisemittisme, kombinert med nazistisk raseideologi og gradvis eskalering der hvert steg gjorde det neste mulig. Det ble utført ikke bare av overbeviste nazister, men av vanlige mennesker som fulgte ordre, så bort eller deltok passivt. Holocaust lærer oss at vi aldri kan ta menneskeverdet for gitt, og at vi alle har et ansvar for å stå opp mot urett - før det er for sent.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 13.3 NARRATIV: Norge under okkupasjonen
// ============================================================================

export const CHAPTER_HISTORIE_13_3_NARRATIV: TextbookChapter = {
  id: 'historie-13-3-narrativ',
  courseId: 'historie',
  chapterNumber: '13.3',
  title: 'Norge under okkupasjonen',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om fem års okkupasjon - om samarbeid, tilpasning og motstand.',
  estimatedMinutes: 50,
  competenceGoals: ['handlingsrom i konfliktsituasjoner'],
  linkedChapterId: 'historie-13-3',
  isNarrativeVersion: true,
  content: [
    {
      id: 'historie-13-3-n-intro',
      type: 'text',
      content: `## Den uventede morgenen

Tidlig om morgenen 9. april 1940 våkner du av merkelige lyder. Du bor i Oslo, og gjennom vinduet ser du noe uforklarlig: Tyske soldater marsjerer gjennom gatene. Fly med hakekors på vingene fyller himmelen. Norge er under angrep.

Hvordan var dette mulig? Norge var nøytralt - vi hadde holdt oss utenfor den første verdenskrigen. Regjeringen hadde trodd at nøytraliteten ville beskytte oss igjen. Men Hitler brydde seg ikke om nøytralitet. Han trengte norske havner og malmtransportene fra Sverige.

I løpet av natten hadde tyske styrker angrepet alle større byer langs kysten. Kongen og regjeringen klarte så vidt å flykte fra Oslo. I to måneder kjempet norske styrker mot den tyske overmakten - ved Narvik, i Valdres, i Østfold. Men 10. juni 1940 var det over. Kongen og regjeringen dro i eksil til London. Norge var okkupert.

De neste fem årene skulle nordmenn stilles overfor valg de aldri hadde forestilt seg. Skulle man samarbeide? Tilpasse seg? Gjøre motstand? Og hvor gikk grensene mellom dem?`,
    },
    {
      id: 'historie-13-3-n-section1',
      type: 'text',
      content: `## Quisling og nazistene

Navnet **Vidkun Quisling** er blitt et internasjonalt ord for landsforræder. Men hvem var han, og hvordan endte han som Norges mest forhatte mann?

Quisling var faktisk en begavet mann - han hadde vært offiser og diplomat. I 1933 grunnla han **Nasjonal Samling (NS)** etter modell av de fascistiske partiene i Italia og Tyskland. Men nordmenn var ikke interessert. Ved valgene fikk NS aldri mer enn noen få prosent.

Morgenen 9. april 1940 forsøkte Quisling sitt statskupp. Via radio erklærte han seg selv som statsminister og oppfordret nordmenn til å ikke gjøre motstand. Men kuppet mislyktes totalt. Kongen nektet å utnevne ham, og selv tyskerne synes han var for upopulær.

Likevel, i 1942 gjorde tyskerne ham til **ministerpresident**. NS fikk nå formell makt - selv om den virkelige makten lå hos den tyske rikskommissæren Josef Terboven.

Under okkupasjonen vokste NS til rundt 45 000 medlemmer. Noen var overbeviste nazister. Andre meldte seg inn for å få jobb eller fordeler. Atter andre ble presset. NS-medlemmene ble foraktet av flertallet av nordmenn - de ble kalt "quislinger" og var sosialt utfryst.

Men NS-styret var mer enn bare ubehagelig. Det var farlig. NS-politi deltok i arrestasjoner av motstandsfolk og jøder. Angivere rapporterte naboer til Gestapo. Og da ordre kom om å deportere norske jøder, var NS-myndigheter med på å gjennomføre den.`,
    },
    {
      id: 'historie-13-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-13-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvorfor ble navnet "Quisling" et internasjonalt begrep for landsforræder?',
        options: [
          { id: 'a', text: 'Fordi han var en populær politiker som ble valgt av folket', isCorrect: false },
          { id: 'b', text: 'Fordi han forsøkte å kuppe makten under tysk invasjon og senere samarbeidet aktivt med okkupantene', isCorrect: true },
          { id: 'c', text: 'Fordi han ledet motstandsbevegelsen', isCorrect: false },
          { id: 'd', text: 'Fordi han flyktet til London med kongen', isCorrect: false },
        ],
        solution: 'Quislings kupp 9. april 1940 var et åpenlyst forsøk på å utnytte invasjonen til egen vinning. Han forsøkte å gripe makten mens landet ble angrepet, og samarbeidet deretter aktivt med okkupantene. Dette sviket mot eget land var så opprørende at navnet hans ble et internasjonalt begrep for landsforræder.',
      },
    },
    {
      id: 'historie-13-3-n-section2',
      type: 'text',
      content: `## Hverdagens valg

For de fleste nordmenn handlet ikke okkupasjonen om heroisk motstand eller åpenlyst forræderi. Det handlet om å overleve hverdagen under unntakstilstand.

Tenk deg at du er en vanlig nordmann i 1941. Maten er **rasjonert** - du har merker som gir deg rett til en viss mengde brød, smør, kjøtt. Det er aldri nok. Svartebørshandel blomstrer, men er risikabelt. **Ersatz**-produkter erstatter det som mangler - kaffeerstatning laget av bygg, skoesåler av papir.

Pressen er **sensurert**. Du leser avisen og vet at det meste er propaganda. Din gamle radio er beslaglagt - bare NS-kontrollerte radioer er lovlige. Å lytte til BBC er forbudt, men mange gjør det likevel, i hemmelighet, med en lytterring som varsler hvis noen kommer.

Tyskerne er overalt. De har tatt de beste bygningene, de beste hotellene. De marsjerer gjennom gatene. Og du må forholde deg til dem - på jobben, i butikken, på gaten. Hvordan oppfører du deg? Hilser du? Ser du bort? Nekter du å betjene dem?

Og så kommer **nazifiseringsforsøkene**. NS prøver å ta kontroll over lærerne - de skal melde seg inn i en nazistisk lærerorganisasjon. Kirken skal underlegges. Idretten skal kontrolleres. Ungdommen skal innrulleres i NS-organisasjoner.

Her ble nordmenn tvunget til å ta stilling. Og mange valgte å si nei.`,
    },
    {
      id: 'historie-13-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-13-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var "holdningskampen" under okkupasjonen?',
        options: [
          { id: 'a', text: 'Væpnet motstand mot tyske soldater', isCorrect: false },
          { id: 'b', text: 'Sivil motstand mot nazistenes forsøk på å kontrollere skoler, kirker og organisasjonsliv', isCorrect: true },
          { id: 'c', text: 'Samarbeid med tyske myndigheter', isCorrect: false },
          { id: 'd', text: 'Flukt til Sverige', isCorrect: false },
        ],
        solution: 'Holdningskampen var den sivile, ikke-voldelige motstanden mot nazistenes forsøk på å ensrette samfunnet. Da 12 000 lærere nektet å melde seg inn i en nazistisk organisasjon, ble 1100 av dem sendt til tvangsarbeid i nord. Biskopene la ned sine embeter. Idretten gikk i streik. Denne kampen viste at sivil ulydighet kunne fungere.',
      },
    },
    {
      id: 'historie-13-3-n-section3',
      type: 'text',
      content: `## De norske jødene

Det mørkeste kapittelet i norsk okkupasjonshistorie er skjebnen til de norske jødene.

Tenk deg at du er Ruth, en jødisk jente i Oslo i 1942. Du er 15 år og har bodd i Norge hele livet. Dine foreldre driver en liten butikk. Du er norsk - det er det eneste du kjenner.

I oktober 1942 kommer de første arrestasjonene. Alle jødiske menn over 15 år hentes. Din far tas. Du og din mor lever i angst.

Natten til 26. november kommer de tilbake. Denne gangen hentes kvinner, barn og gamle. Norsk politi banker på døren. Du og din mor føres til kaien der skipet **Donau** ligger og venter. 532 jøder presses om bord.

Reisen tar flere dager. Kulde, tranghet, frykt. Destinasjonen er Auschwitz.

Av de 773 norske jødene som ble deportert, overlevde bare 38. Ruth og hennes mor var ikke blant dem.

Det som gjør denne historien ekstra smertefull, er nordmenns rolle. **Norsk politi** deltok i arrestasjonene. **NS-myndigheter** organiserte deportasjonene. Det var ikke bare tyskere som sendte norske jøder i døden - det var også nordmenn.

Men det fantes også de som handlet annerledes. Motstandsfolk varslet jødiske familier og hjalp dem å flykte. Rundt **900 jøder** klarte å komme seg til Sverige takket være hjelp fra vanlige nordmenn som risikerte sine egne liv.`,
    },
    {
      id: 'historie-13-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-13-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva skjedde med de norske jødene under okkupasjonen?',
        options: [
          { id: 'a', text: 'De ble beskyttet av tyske myndigheter', isCorrect: false },
          { id: 'b', text: '773 ble deportert til Auschwitz (bare 38 overlevde), mens ca. 900 ble reddet til Sverige av motstandsfolk', isCorrect: true },
          { id: 'c', text: 'Alle flyktet trygt til Sverige', isCorrect: false },
          { id: 'd', text: 'De ble ikke påvirket av okkupasjonen', isCorrect: false },
        ],
        solution: 'Høsten 1942 ble norske jøder arrestert og deportert til Auschwitz. 773 mennesker ble sendt med skipet Donau og andre transporter. Bare 38 overlevde. Norsk politi deltok i arrestasjonene. Samtidig hjalp motstandsfolk og vanlige nordmenn rundt 900 jøder å flykte til Sverige. Historien viser at det fantes valg - noen valgte å hjelpe, andre deltok i grusomhetene.',
      },
    },
    {
      id: 'historie-13-3-n-section4',
      type: 'text',
      content: `## Gråsonene

De fleste nordmenn under okkupasjonen befant seg verken blant heltene eller forræderne. De befant seg i en gråsone der grensene var uklare.

**Rundt 50 000 nordmenn** arbeidet for den tyske okkupasjonsmakten. Var de alle landsforrædere? Noen var det sikkert - de som rapporterte motstandsfolk, de som deltok i overgrep. Men mange andre var bare folk som trengte arbeid. Når tyskerne bygget festningsverk, trengte de arbeidere. Skulle en familiefar med sultne barn si nei?

**Næringslivet** produserte for tyske behov. Fabrikker laget varer som tyskerne kjøpte eller rekvirerte. Var det samarbeid eller bare pragmatisk overlevelse? Og hvor gikk grensen?

**"Tyskertøsene"** - kvinnene som hadde forhold til tyske soldater - ble behandlet hardt etter krigen. Noen var kjærester med fiendtlige soldater av romantiske grunner, andre av praktiske. Var det landssvik? Eller var det bare menneskelig?

Og så var det de utallige små valgene. Skulle man hilse på en tysker man møtte? Servere ham i butikken? Smile eller se bort? Lese den illegale avisen naboen tilbød? Skjule en motstandsmann på flukt?

Disse valgene ser enkle ut fra 80 års avstand. Men for dem som stod midt i dem, med familie å tenke på, med reell fare for straff, var de ofte vanskelige. Og noen ganger var det ikke åpenbart hva som var rett.

Det betyr ikke at alt var relativt. Det fantes klare grenser - å angi naboer, å delta i overgrep. Men for de fleste var hverdagen en serie av små valg der man prøvde å komme gjennom med æren og samvittigheten mest mulig i behold.`,
    },
    {
      id: 'historie-13-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-13-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor er det vanskelig å trekke klare grenser mellom motstand, tilpasning og samarbeid under okkupasjonen?',
        options: [
          { id: 'a', text: 'Fordi alle nordmenn var enten helter eller forrædere', isCorrect: false },
          { id: 'b', text: 'Fordi de fleste befant seg i en gråsone der motivene var sammensatte og handlingsrommet begrenset', isCorrect: true },
          { id: 'c', text: 'Fordi okkupasjonen var kortvarig', isCorrect: false },
          { id: 'd', text: 'Fordi tyskerne behandlet alle likt', isCorrect: false },
        ],
        solution: 'Virkeligheten under okkupasjonen var kompleks. De fleste befant seg mellom ytterpunktene. Motivene var ofte sammensatte - noen "samarbeidet" for å skaffe informasjon til motstanden. Andre arbeidet for tyskerne fordi familien sultet. Handlingsrommet varierte etter situasjon, sted og personlige forhold. Det betyr ikke at alt var akseptabelt - men at enkle dommer ofte er urettferdige.',
      },
    },
    {
      id: 'historie-13-3-n-section5',
      type: 'text',
      content: `## Motstandens ansikter

Motstanden mot okkupasjonen tok mange former - fra det daglige til det dramatiske.

**Den sivile motstanden** - holdningskampen - var kanskje den viktigste. Lærernes nei til nazifisering av skolen. Kirkens protest mot jødeforfølgelsen. Idrettsstreiken. Disse aksjonene viste at det norske samfunnet ikke bøyde seg.

**De illegale avisene** holdt moralen oppe. Over 300 ulike aviser ble trykt i hemmelighet, med nyheter fra BBC og oppfordringer til motstand. Å lese, trykke eller distribuere dem var straffbart med konsentrasjonsleir eller døden. Likevel fortsatte folk.

**Hjemmefronten** organiserte mer aktiv motstand. **Milorg** - den militære organisasjonen - forberedte væpnet kamp. **Sivorg** koordinerte sivil motstand. **XU** samlet etterretning for de allierte. Ved krigens slutt hadde Milorg 40 000 mann under våpen.

Og **utefronten** kjempet fra utlandet. De norske sjøfolkene seilte forsyninger over Atlanterhavet - en av krigens farligste oppdrag. Kompani Linge-soldater gjennomførte dristige aksjoner i Norge. Norske piloter fløy i RAF.

**Tungtvannsaksjonen** på Vemork i 1943 er blitt stående som symbolet på norsk motstand. Tungtvannet var viktig for det tyske atomprogrammet. Norske kommandosoldater tok seg inn i fabrikken og ødela produksjonsutstyret. Det var en av krigens viktigste sabotasjeaksjoner - og den ble gjennomført av nordmenn.

For dem som deltok i motstanden, var risikoen enorm. Tortur, konsentrasjonsleir, henrettelse. Mange betalte den høyeste prisen. Men de valgte å handle likevel.`,
    },
    {
      id: 'historie-13-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-13-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor regnes tungtvannsaksjonen på Vemork som en av krigens viktigste sabotasjeaksjoner?',
        options: [
          { id: 'a', text: 'Fordi den drepte mange tyske soldater', isCorrect: false },
          { id: 'b', text: 'Fordi den ødela produksjonen av tungtvannet som var viktig for det tyske atomprogrammet', isCorrect: true },
          { id: 'c', text: 'Fordi den frigjorde Norge fra okkupasjonen', isCorrect: false },
          { id: 'd', text: 'Fordi den var planlagt av Quisling', isCorrect: false },
        ],
        solution: 'Vemork på Rjukan var verdens eneste produsent av tungtvannet Tyskland trengte for atomforskning. Norske kommandosoldater fra Kompani Linge tok seg inn i fabrikken i februar 1943 og ødela produksjonsutstyret. Aksjonen forsinket det tyske atomprogrammet betydelig. Hadde Tyskland fått atomvåpen, kunne krigens utfall blitt annerledes.',
      },
    },
    {
      id: 'historie-13-3-n-summary',
      type: 'text',
      content: `## Oppsummering

De fem årene under tysk okkupasjon tvang nordmenn til å ta stilling på måter de aldri hadde forestilt seg. Noen valgte aktivt samarbeid. Noen valgte aktiv motstand. De fleste prøvde å navigere i gråsonen mellom - tilpasse seg det nødvendige mens de bevarte det de kunne av verdighet og selvrespekt.

**Nøkkelbegreper du nå kjenner:**
- **9. april 1940:** Tysklands angrep på Norge
- **Nasjonal Samling (NS):** Quislings nazistparti
- **Vidkun Quisling:** Landsforræderen som ga navn til et begrep
- **Holdningskampen:** Sivil motstand mot nazifisering
- **Deportasjonen av jødene:** 773 deportert, 38 overlevde
- **Hjemmefronten:** Milorg, Sivorg og XU
- **Utefronten:** Sjøfolk, soldater og piloter i alliert tjeneste
- **Tungtvannsaksjonen:** Sabotasje mot tysk atomprogram

**Det viktigste du tar med deg:**
Okkupasjonstiden viser at selv i ekstreme situasjoner har mennesker valg. Handlingsrommet varierer - noen hadde mer frihet til å handle enn andre. Men selv de som hjalp jøder å flykte, viser at det fantes muligheter for dem som var villige til å ta risikoen. Historien stiller oss overfor ubehagelige spørsmål: Hva ville vi selv ha gjort? Det finnes ikke enkle svar, men det er viktig å stille spørsmålet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 13.4 NARRATIV: Motstand og handlingsrom
// ============================================================================

export const CHAPTER_HISTORIE_13_4_NARRATIV: TextbookChapter = {
  id: 'historie-13-4-narrativ',
  courseId: 'historie',
  chapterNumber: '13.4',
  title: 'Motstand og handlingsrom',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om dem som valgte å gjøre motstand - og hva som fikk dem til å handle.',
  estimatedMinutes: 50,
  competenceGoals: ['handlingsrom i konfliktsituasjoner'],
  linkedChapterId: 'historie-13-4',
  isNarrativeVersion: true,
  content: [
    {
      id: 'historie-13-4-n-intro',
      type: 'text',
      content: `## De som valgte å handle

I mørket av okkupasjonen valgte noen å gjøre motstand. Ikke alle - de fleste tilpasset seg som best de kunne. Men noen tok risikoen. De smuglet illegale aviser. De gjemte motstandsfolk på flukt. De saboterte tyske installasjoner. De risikerte alt.

Hvem var disse menneskene? Var de spesielle helter, født med ekstraordinært mot? Eller var de vanlige folk som ble stilt overfor uvanlige valg - og valgte å handle?

Historien om den norske motstandsbevegelsen er en historie om begge deler. Den viser at vanlige mennesker kan gjøre ekstraordinære ting når omstendighetene krever det. Men den viser også at valget om å gjøre motstand ikke var åpenbart - det krevde mot, nettverk og ofte en god porsjon flaks.

La oss se nærmere på hvordan motstanden var organisert, hva folk faktisk gjorde, og hva som fikk dem til å ta risikoen.`,
    },
    {
      id: 'historie-13-4-n-section1',
      type: 'text',
      content: `## Hjemmefrontens organisasjon

Da krigen brøt ut, fantes det ingen organisert motstandsbevegelse i Norge. Den måtte bygges opp fra bunnen - ofte av folk uten militær erfaring, mens fienden kontrollerte landet.

**Milorg** - den militære organisasjonen - vokste gradvis fram fra 1941. Den samlet frivillige som skulle være klare til væpnet kamp når tiden var inne. De ble trent i våpenbruk, sabotasje og geriljakrigføring. Ved krigens slutt hadde Milorg rundt 40 000 mann - en skjult hær som ventet på ordren om å handle.

**Sivorg** - sivilorganisasjonen - koordinerte den sivile motstanden. De organiserte holdningskampen, distribuerte illegale aviser, forberedte en sivil administrasjon som kunne ta over når okkupasjonen var slutt.

**XU** var etterretningsorganisasjonen. De samlet informasjon om tyske militære installasjoner, styrker og bevegelser - informasjon som ble sendt til de allierte. XU-agenter fotograferte, kartla og rapporterte. Det var farlig arbeid; å bli tatt med spionmateriale betydde tortur og død.

Tenk deg at du blir rekruttert til en av disse organisasjonene. Du får et deknavn, kanskje "Tor" eller "Ravn". Du lærer å bruke skjulte meldinger, å gjenkjenne varselsignaler, hvem du kan stole på. Du vet at én feil - én uaktsom bemerkning, én angiver - kan bety slutten. Likevel fortsetter du.

Alt dette var koordinert med **London** - regjeringen i eksil. Via hemmelige radiosendere holdt hjemmefronten kontakt med de allierte. Våpen ble sluppet ned med fallskjerm om natten. Agenter ble sendt inn. Det var et nettverk av hemmeligheter som bandt okkupert Norge til den frie verden.`,
    },
    {
      id: 'historie-13-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-13-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var forskjellen mellom Milorg og Sivorg i hjemmefronten?',
        options: [
          { id: 'a', text: 'Milorg var tysk, Sivorg var norsk', isCorrect: false },
          { id: 'b', text: 'Milorg var den militære organisasjonen, Sivorg koordinerte sivil motstand', isCorrect: true },
          { id: 'c', text: 'De var samme organisasjon med forskjellige navn', isCorrect: false },
          { id: 'd', text: 'Milorg drev med handel, Sivorg med politikk', isCorrect: false },
        ],
        solution: 'Hjemmefronten var delt i spesialiserte organisasjoner. Milorg var den militære delen som trente frivillige for væpnet kamp og sabotasje - 40 000 mann ved krigens slutt. Sivorg koordinerte sivil motstand som holdningskamp og illegale aviser. XU samlet etterretning. Sammen utgjorde de den organiserte norske motstanden.',
      },
    },
    {
      id: 'historie-13-4-n-section2',
      type: 'text',
      content: `## Sabotasje og væpnet kamp

Den mest dramatiske motstanden var den væpnede. Sabotasje mot tyske installasjoner, overfallsangrep, likvidasjoner av angivere.

**Kompani Linge** var spydspissen. Disse nordmennene var trent i Storbritannia i kommandoteknikker og ble sendt tilbake til Norge for spesielle oppdrag. Mange av dem mistet livet.

Tenk deg at du er en av dem som deltar i **tungtvannsaksjonen** i februar 1943. Du har gått på ski i flere dager over Hardangervidda i brutal vinterkulde. Målet er Vemork på Rjukan - verdens eneste produsent av tungtvannet Tyskland trenger for atomforskning.

Om natten tar dere dere ned de bratte klippene til fabrikken. Forbi vakter. Inn gjennom en kabelgate. Dere finner produksjonscellene og plasserer sprengladningene. Et smell, og tungtvannet renner ut. Dere forsvinner ut i natten.

Aksjonen var en triumf. Den forsinket det tyske atomprogrammet og ble verdensberømt. Men den viste også sabotasjens dilemmaer. Tyskerne tok gisler og truet med gjengjeldelse. Var det verdt det? Motstandsledelsen mente ja - noen mål var viktige nok.

Andre aksjoner var mer kontroversielle. **Likvidasjon** av angivere og farlige NS-folk var nødvendig, mente noen. Andre fryktet at det provoserte tyske represalier som rammet uskyldige. Det var vanskelige avveininger der det ikke fantes gode svar.

Og så var det **jernbanesabotasjen** - systematisk ødeleggelse av jernbanelinjer for å hindre tyske troppetransporter. Hver sabotert strekning kunne bety forsinkelser, kanskje redde liv. Men det krevde risiko fra dem som utførte det.`,
    },
    {
      id: 'historie-13-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-13-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilke dilemmaer sto motstandsbevegelsen overfor når det gjaldt sabotasje og likvidasjoner?',
        options: [
          { id: 'a', text: 'Ingen - det var alltid riktig å utføre slike aksjoner', isCorrect: false },
          { id: 'b', text: 'Risikoen for tyske represalier mot sivilbefolkningen versus den militære nytten', isCorrect: true },
          { id: 'c', text: 'Mangel på våpen var eneste problem', isCorrect: false },
          { id: 'd', text: 'Tyskerne støttet egentlig motstanden i hemmelighet', isCorrect: false },
        ],
        solution: 'Sabotasje og likvidasjoner skapte vanskelige dilemmaer. Militært kunne de være viktige - tungtvannsaksjonen hindret kanskje tyske atomvåpen. Men tyskerne tok ofte gisler og gjennomførte represalier. Var det riktig å risikere uskyldiges liv? Motstandsledelsen måtte veie militær nytte mot faren for sivile ofre.',
      },
    },
    {
      id: 'historie-13-4-n-section3',
      type: 'text',
      content: `## De illegale avisene

Ikke all motstand handlet om våpen og sprengstoff. **De illegale avisene** var kanskje vel så viktige for å holde motstandsviljen i live.

Under okkupasjonen var all norsk presse sensurert. Det du leste i avisen var det tyskerne og NS tillot deg å lese - propaganda og løgner. For mange føltes dette som en intellektuell kveling.

Svaret var de illegale avisene. Over 300 forskjellige aviser ble utgitt i hemmelighet. De spredte nyheter fra BBC og London. De motvirket tysk propaganda. De opprettholdt kontakten med den frie verden.

Tenk deg at du er med på å lage en slik avis. Om natten, i en kjeller eller på et loft, setter dere sammen sidene. Dere har ikke ordentlig trykkeri - kanskje en stensileringsmaskin eller bare avskrifter for hånd. Dere må skaffe papir uten at noen merker det. Distribusjonen er farlig - avisene sendes fra hånd til hånd, legges i postkasser, gjemmes i brødposer.

Å bli tatt med illegalt materiale kunne bety **konsentrasjonsleir eller døden**. Mange ble tatt. Noen ble torturert til å røpe andre. Kjeden kunne ryke når som helst.

Men avisene fortsatte å komme. For dem som leste dem, var de et livstegn - et bevis på at motstanden levde, at de ikke var alene i sin holdning. I et okkupert land der løgnen hadde makten, var sannheten revolusjonær.`,
    },
    {
      id: 'historie-13-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-13-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvorfor var de illegale avisene så viktige for motstandskampen?',
        options: [
          { id: 'a', text: 'Fordi de tjente mye penger', isCorrect: false },
          { id: 'b', text: 'Fordi de spredte sann informasjon, motvirket propaganda og opprettholdt moralen i befolkningen', isCorrect: true },
          { id: 'c', text: 'Fordi tyskerne likte å lese dem', isCorrect: false },
          { id: 'd', text: 'Fordi de var skrevet av NS', isCorrect: false },
        ],
        solution: 'De illegale avisene var viktige fordi de brøt informasjonsmonopolet. I et land der all offisiell informasjon var propaganda, var sannheten revolusjonær. Avisene spredte nyheter fra BBC, motvirket løgner, og viste folk at motstanden levde. De opprettholdt moralen og fellesskapet blant dem som var mot okkupasjonen.',
      },
    },
    {
      id: 'historie-13-4-n-section4',
      type: 'text',
      content: `## Hva skapte handlingsrom?

Begrepet **handlingsrom** brukes for å beskrive mulighetene mennesker hadde til å handle under okkupasjonen. Noen hadde større handlingsrom enn andre. Hva bestemte dette?

**Geografisk plassering** spilte en rolle. Bodde du nær svenskegrensen, var det lettere å hjelpe folk å flykte eller å komme deg i sikkerhet selv om du ble avslørt. I avsidesliggende bygder var det lettere å skjule aktiviteter enn midt i Oslo.

**Sosialt nettverk** var avgjørende. For å delta i motstand trengte du kontakter - noen som stolte på deg, som kunne introdusere deg for riktige folk. Uten nettverk var det vanskelig å vite hvem du kunne stole på.

**Ressurser og posisjon** betydde noe. Noen hadde hytter der folk kunne gjemme seg, biler som kunne frakte flyktninger, penger til bestikkelser. Andre hadde stillinger som ga tilgang til viktig informasjon.

**Familiesituasjon** begrenset for mange. En enslig ung mann kunne ta større risiko enn en familiefar med småbarn. Ansvaret for andre satte grenser for hva man kunne gjøre.

Men til syvende og sist handlet det også om **personlige valg**. Noen med alle muligheter til å gjøre motstand gjorde ingenting. Andre med små muligheter fant måter å handle likevel. Det er vanskelig å forutsi hvem som vil være modig når det virkelig gjelder.

Historikere har funnet at de som hjalp jøder å flykte ofte ikke var spesielt politisk engasjerte. De var folk som så medmennesker i nød og ikke klarte å se bort. Noen hadde selv opplevd urett og kjente seg igjen. Andre hadde personlig kjennskap til jøder. Empati og personlig kontakt viste seg viktigere enn ideologi.`,
    },
    {
      id: 'historie-13-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-13-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva påvirket folks handlingsrom under okkupasjonen?',
        options: [
          { id: 'a', text: 'Bare personlig mot - alt annet var irrelevant', isCorrect: false },
          { id: 'b', text: 'Geografi, nettverk, ressurser, familiesituasjon og personlige valg spilte alle inn', isCorrect: true },
          { id: 'c', text: 'Kun om man var medlem av NS eller ikke', isCorrect: false },
          { id: 'd', text: 'Alle hadde like stort handlingsrom', isCorrect: false },
        ],
        solution: 'Handlingsrommet varierte med mange faktorer. Geografi - nærhet til Sverige eller avsides plassering. Nettverk - kontakter i motstandsmiljøer. Ressurser - hytter, biler, penger. Familiesituasjon - ansvar for andre. Men til slutt kom det også an på personlige valg. Noen med små muligheter fant måter å handle, mens andre med alle muligheter gjorde ingenting.',
      },
    },
    {
      id: 'historie-13-4-n-section5',
      type: 'text',
      content: `## Utefronten - de som kjempet ute

Motstanden var ikke bare hjemme. Tusenvis av nordmenn kjempet mot nazistene fra utlandet - det vi kaller **utefronten**.

De norske **sjøfolkene** var kanskje de viktigste. Da Norge ble okkupert, befant store deler av den norske handelsflåten - en av verdens største - seg i utlandet. Den ble stilt til alliert disposisjon og seilte konvoier over Atlanterhavet med forsyninger til Storbritannia.

Det var et av krigens farligste oppdrag. Tyske ubåter jaktet på konvoiene. Skip ble torpedert midt på havet, i iskaldt vann, ofte uten sjanse til redning. **Over 4000 norske sjøfolk** mistet livet - en enorm pris for et lite land.

Tenk deg at du er ung sjømann i 1941. Du har vært hjemmefra i måneder, kanskje år. Du vet at familien er under okkupasjon. Hver gang du går til sjøs, risikerer du å bli torpedert. Mange av vennene dine er allerede døde. Likevel fortsetter du - fordi skipene dine holder motstandskampen i live.

**Kompani Linge** - de norske kommandosoldatene i Storbritannia - gjennomførte dristige aksjoner i Norge. Tungtvannsaksjonen. Sabotasje. Etterretning. Mange kom aldri tilbake.

**Norske flyskvadroner** i RAF - 330 og 331 skvadron - fløy over Europa og Atlanterhavet. De patruljerte, bombet, kjempet.

Og i det allierte Italia, i kamp mot tyskerne, kjempet norske soldater side om side med briter og amerikanere.

Utefronten var avgjørende. Uten den ville motstandskampen hjemme vært uten mening - det var den frie verdens kamp som ga håp om at okkupasjonen en dag ville ta slutt.`,
    },
    {
      id: 'historie-13-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-13-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor var den norske handelsflåten så viktig for den allierte krigsinnsatsen?',
        options: [
          { id: 'a', text: 'Den fraktet tyske tropper', isCorrect: false },
          { id: 'b', text: 'Den fraktet livsviktige forsyninger til Storbritannia over Atlanterhavet', isCorrect: true },
          { id: 'c', text: 'Den var nøytral og deltok ikke i krigen', isCorrect: false },
          { id: 'd', text: 'Den var liten og ubetydelig', isCorrect: false },
        ],
        solution: 'Den norske handelsflåten var en av verdens største. Da Norge ble okkupert, seilte den for de allierte og fraktet forsyninger over Atlanterhavet til Storbritannia. Uten disse forsyningene kunne Storbritannia ha sultet eller tapt krigen. Over 4000 norske sjøfolk mistet livet - torpedert av tyske ubåter i iskaldt vann.',
      },
    },
    {
      id: 'historie-13-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Den norske motstandsbevegelsen vokste fra ingenting til en organisert kraft som spilte en viktig rolle i krigen. Fra de illegale avisene til tungtvannsaksjonen, fra hjemmefronten til sjøfolkene på havet - tusenvis av nordmenn valgte å ta risikoen og kjempe.

**Nøkkelbegreper du nå kjenner:**
- **Milorg:** Militærorganisasjonen med 40 000 mann ved krigens slutt
- **Sivorg:** Sivilorganisasjonen som koordinerte sivil motstand
- **XU:** Etterretningsorganisasjonen
- **Kompani Linge:** Britisk-trente kommandosoldater
- **Illegale aviser:** Over 300 aviser som spredte sannhet i løgnens tid
- **Handlingsrom:** Mulighetene folk hadde til å handle
- **Utefronten:** Sjøfolk, soldater og piloter som kjempet fra utlandet

**Det viktigste du tar med deg:**
Motstanden viser at valg betyr noe. Selv under okkupasjon, selv med livet på spill, valgte noen å handle. De var ikke superhelter - de var vanlige folk som tok ekstraordinære valg. Hva som fikk dem til det, varierte - noen hadde sterke overbevisninger, andre hadde riktige kontakter, atter andre reagerte på konkrete situasjoner. Men de viste alle at mennesker har et ansvar for mer enn bare å overleve.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 13.5 NARRATIV: Fredsslutninger og oppgjør
// ============================================================================

export const CHAPTER_HISTORIE_13_5_NARRATIV: TextbookChapter = {
  id: 'historie-13-5-narrativ',
  courseId: 'historie',
  chapterNumber: '13.5',
  title: 'Fredsslutninger og oppgjør',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om krigens slutt - om rettferdighet, gjenoppbygging og en ny verdensorden.',
  estimatedMinutes: 50,
  competenceGoals: ['verdenskrigene og andre konflikter, fredsslutninger'],
  linkedChapterId: 'historie-13-5',
  isNarrativeVersion: true,
  content: [
    {
      id: 'historie-13-5-n-intro',
      type: 'text',
      content: `## Etter katastrofen

Da krigen endelig var over i mai 1945, lå store deler av verden i ruiner. Byer var bombet til grus. Millioner var hjemløse. Økonomien var knust. Og overalt var det spørsmål som krevde svar.

Hvordan skulle krigsforbrytere straffes? Kunne man noen gang stille de ansvarlige for Holocaust til regnskap? Hvordan skulle freden organiseres for å hindre at noe lignende skjedde igjen? Og hva skulle skje med de mange nordmennene som hadde samarbeidet med okkupantene?

Svarene på disse spørsmålene formet etterkrigstiden. De skapte institusjoner vi lever med i dag - FN, menneskerettighetene, internasjonal strafferett. De definerte også hva slags nasjoner vi skulle være, hva slags verdier vi ville stå for.

La oss se på hvordan verden forsøkte å gjøre opp med fortiden og bygge en bedre fremtid.`,
    },
    {
      id: 'historie-13-5-n-section1',
      type: 'text',
      content: `## Nürnberg - rettferdighet for udådene

I november 1945 åpnet en historisk rettssak i byen **Nürnberg** - nazistenes gamle partiby. For første gang i historien skulle lederne av et beseiret regime stilles til regnskap for sine handlinger i en internasjonal domstol.

**24 ledende nazister** satt på tiltalebenken. Blant dem var Hermann Göring, Hitlers nestkommanderende. Rudolf Hess, som hadde styrt partiet. Joachim von Ribbentrop, utenriksministeren som hadde signert pakten med Stalin. De ble tiltalt for tre typer forbrytelser: **forbrytelser mot freden** (å planlegge og starte angrepskrig), **krigsforbrytelser** (brudd på krigens lover), og **forbrytelser mot menneskeheten** (Holocaust og andre massemord).

Prosessen varte nesten et år. Anklagerne la fram overveldende bevis - dokumenter, film, vitnesbyrd. Verden fikk se omfanget av grusomhetene i detalj. Det var nesten uutholdelig.

De tiltalte prøvde ulike forsvar. Noen hevdet at de bare hadde **fulgt ordre** - de var underordnede som gjorde det de ble befalt. Andre hevdet at de ikke visste hva som foregikk. Atter andre sa at de bare hadde gjort det samme som de allierte.

Domstolen avviste disse forsvarene. "Å følge ordre" er ingen unnskyldning for forbrytelser mot menneskeheten. Det er et **individuelt ansvar** for egne handlinger, uansett hva overordnede befaler.

Av de 24 tiltalte ble 12 dømt til døden, 7 til fengselsstraff, 3 frikjent. Göring tok gift natten før han skulle henrettes. De andre ble hengt.

Nürnbergprosessen etablerte prinsipper som fortsatt gjelder: at individer kan holdes ansvarlige for krigsforbrytelser, at "ordre ovenfra" ikke er noe forsvar, at forbrytelser mot menneskeheten angår hele verdenssamfunnet.`,
    },
    {
      id: 'historie-13-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-13-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilket viktig prinsipp etablerte Nürnbergprosessen?',
        options: [
          { id: 'a', text: 'At seierherrene alltid har rett', isCorrect: false },
          { id: 'b', text: 'At individer kan holdes ansvarlige for krigsforbrytelser, og at "ordre ovenfra" ikke er noe forsvar', isCorrect: true },
          { id: 'c', text: 'At bare ledere kan straffes, ikke vanlige soldater', isCorrect: false },
          { id: 'd', text: 'At krigsforbrytelser ikke kan straffes internasjonalt', isCorrect: false },
        ],
        solution: 'Nürnbergprosessen slo fast at enkeltpersoner kan holdes ansvarlige for krigsforbrytelser og forbrytelser mot menneskeheten. "Å følge ordre" ble avvist som forsvar - alle har et personlig moralsk ansvar. Disse prinsippene la grunnlaget for moderne internasjonal strafferett og senere tribunaler som Den internasjonale straffedomstolen.',
      },
    },
    {
      id: 'historie-13-5-n-section2',
      type: 'text',
      content: `## FN og menneskerettighetene

Krigen hadde vist at verden trengte sterkere institusjoner for å bevare freden. **Folkeforbundet**, som ble opprettet etter første verdenskrig, hadde mislyktes totalt. Nå skulle det prøves igjen - men bedre.

I juni 1945, mens krigen fortsatt raste i Asia, møttes representanter fra 50 nasjoner i San Francisco. De grunnla **De forente nasjoner (FN)** - en verdensorganisasjon som skulle bevare freden, fremme samarbeid og beskytte menneskerettighetene.

FN fikk et **Sikkerhetsråd** med fem faste medlemmer - USA, Sovjetunionen, Storbritannia, Frankrike og Kina - som alle hadde vetorett. Tanken var at stormaktene måtte samarbeide for at fred skulle være mulig. Men vetoretten skulle også vise seg å lamme FN når stormaktene var uenige.

Det viktigste dokumentet som kom ut av denne perioden, var kanskje **Verdenserklæringen om menneskerettigheter**, vedtatt 10. desember 1948. For første gang i historien slo det internasjonale samfunnet fast at alle mennesker har grunnleggende rettigheter - rett til liv, frihet, likhet for loven, tanke- og ytringsfrihet - som ingen stat kan ta fra dem.

Erklæringen var et direkte svar på Holocaust. Aldri mer skulle en stat kunne behandle sine borgere slik nazistene hadde behandlet jødene. Menneskerettighetene tilhører alle - ikke fordi en stat gir dem, men fordi man er menneske.

Eleanor Roosevelt, president Roosevelts enke, ledet arbeidet med erklæringen. Hun kalte den "et internasjonalt Magna Carta for hele menneskeheten". Den ble enstemmig vedtatt - selv om noen land avsto fra å stemme, inkludert Sovjetunionen og Sør-Afrika.`,
    },
    {
      id: 'historie-13-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-13-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var sammenhengen mellom andre verdenskrig og Menneskerettighetserklæringen?',
        options: [
          { id: 'a', text: 'Ingen sammenheng - erklæringen var planlagt før krigen', isCorrect: false },
          { id: 'b', text: 'Erklæringen var et direkte svar på Holocaust og krigens grusomheter - "aldri mer" skulle stater kunne behandle mennesker slik', isCorrect: true },
          { id: 'c', text: 'Erklæringen ble vedtatt av Nazi-Tyskland', isCorrect: false },
          { id: 'd', text: 'Erklæringen gjaldt bare krigsforbrytere', isCorrect: false },
        ],
        solution: 'Menneskerettighetserklæringen fra 1948 var et direkte svar på Holocaust og krigens grusomheter. Den fastslo at alle mennesker har grunnleggende rettigheter som ingen stat kan ta fra dem. Det var en måte å si "aldri mer" - at verden ikke ville akseptere at stater behandlet mennesker som nazistene hadde gjort.',
      },
    },
    {
      id: 'historie-13-5-n-section3',
      type: 'text',
      content: `## Det norske landssvikoppgjøret

I Norge sto man overfor et vanskelig spørsmål: Hva skulle skje med de som hadde samarbeidet med fienden?

Det norske **landssvikoppgjøret** ble Europas mest omfattende. Rundt **90 000 personer** ble etterforsket. Av disse ble **ca. 50 000 dømt** for landssvik - et enormt tall for et lite land.

De hardeste straffene fikk de som hadde deltatt direkte i grusomheter - torturister, angivere, de som hadde medvirket til deportasjonen av jøder. **45 mennesker** ble henrettet, inkludert Vidkun Quisling selv, som ble skutt på Akershus 24. oktober 1945.

Men de fleste som ble dømt, fikk mildere straffer - bøter, tap av stemmerett og rett til å inneha offentlige stillinger, kortere fengselsstraffer. Mange NS-medlemmer ble dømt selv om de ikke hadde gjort noe aktivt galt - selve medlemskapet ble regnet som landssvik.

Oppgjøret var kontroversielt. Noen mente det var for mildt - at store næringslivsledere som hadde profitert på okkupasjonen, slapp for lett. Andre mente det var for strengt - at "småfolk" ble straffet hardt mens de virkelig ansvarlige gikk fri.

Spesielt vanskelig var behandlingen av **"tyskertøsene"** - kvinnene som hadde hatt forhold til tyske soldater. De ble utsatt for offentlig ydmykelse, fikk klippet håret, ble utstøtt. Mange mistet jobben og ble sosialt stigmatisert i årevis. Deres "forbrytelse" var ofte bare å ha forelsket seg i feil person.

Også barna som ble født av disse forholdene - de såkalte **"krigsbarnen"** - ble stigmatisert. Mange vokste opp med skam og hemmeligheter rundt sitt opphav. Først i 2018 ba Stortinget formelt om unnskyldning til dem.`,
    },
    {
      id: 'historie-13-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-13-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var kritikken mot det norske landssvikoppgjøret?',
        options: [
          { id: 'a', text: 'At det var for mildt mot alle', isCorrect: false },
          { id: 'b', text: 'At det rammet småfolk hardt mens store aktører slapp lettere, og at behandlingen av "tyskertøser" og krigsbarn var urettferdig', isCorrect: true },
          { id: 'c', text: 'At ingen ble straffet', isCorrect: false },
          { id: 'd', text: 'At det bare rammet tyskere', isCorrect: false },
        ],
        solution: 'Landssvikoppgjøret ble kritisert fra flere hold. Noen mente store næringslivsledere slapp for lett mens vanlige NS-medlemmer ble straffet hardt. Behandlingen av "tyskertøsene" og deres barn var særlig problematisk - kvinner ble ydmyket for forhold som ikke var straffbare, og barna bar stigmaet i generasjoner.',
      },
    },
    {
      id: 'historie-13-5-n-section4',
      type: 'text',
      content: `## En delt verden

Da støvet la seg etter krigen, ble det klart at seierherrene ikke var enige om hvordan verden skulle se ut. **USA og Sovjetunionen** - de to supermaktene - hadde helt ulike visjoner.

USA ville ha en verden med åpne markeder, demokrati og amerikansk lederskap. Sovjetunionen ville ha kommunistisk kontroll i Øst-Europa og spredning av revolusjonen. De hadde kjempet sammen mot Hitler, men nå ble de rivaler.

**Europa ble delt.** I vest - demokratier, markedsøkonomi, amerikansk innflytelse. I øst - kommunistiske regimer, planøkonomi, sovjetisk kontroll. Winston Churchill kalte det et **"jernteppe"** som hadde senket seg over kontinentet.

**Marshall-planen** (1948) ga massiv amerikansk økonomisk hjelp til gjenoppbyggingen av Vest-Europa. Det var ikke bare generøsitet - det var også en måte å hindre kommunismens spredning ved å bygge velstand.

**NATO** ble grunnlagt i 1949 som en forsvarsallianse mot Sovjet. Norge ble medlem - et dramatisk brudd med nøytralitetspolitikken som hadde mislyktes så spektakulært i 1940.

Og i 1948 ble staten **Israel** opprettet - delvis som et svar på Holocaust. Jødene skulle ha et eget hjemland der de aldri mer ville være en forfulgt minoritet. Men opprettelsen skapte nye konflikter med palestinerne som fortsatt ikke er løst.

Den kalde krigen hadde begynt. Den skulle vare i over fire tiår og forme verden vi lever i i dag. Men det er en annen historie.`,
    },
    {
      id: 'historie-13-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-13-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvordan var freden etter andre verdenskrig forskjellig fra freden etter første verdenskrig?',
        options: [
          { id: 'a', text: 'Tyskland ble straffet enda hardere enn etter Versailles', isCorrect: false },
          { id: 'b', text: 'I stedet for å straffe Tyskland hardt, satset man på gjenoppbygging (Marshall-planen) og internasjonale institusjoner (FN)', isCorrect: true },
          { id: 'c', text: 'Det ble ingen fredsavtale i det hele tatt', isCorrect: false },
          { id: 'd', text: 'USA trakk seg ut av Europa som etter første verdenskrig', isCorrect: false },
        ],
        solution: 'Etter første verdenskrig ble Tyskland straffet hardt med Versailles-traktaten, noe som skapte bitterhet og la grunnlaget for nazismen. Etter andre verdenskrig lærte man av denne feilen. I stedet for ydmykelse kom Marshall-hjelpen for gjenoppbygging. USA ble værende i Europa. FN og menneskerettighetene skapte nye rammer. Det var en klokere fred.',
      },
    },
    {
      id: 'historie-13-5-n-section5',
      type: 'text',
      content: `## Krigens varige arv

Andre verdenskrig forandret verden for alltid. Dens konsekvenser preger fortsatt den verden vi lever i.

**Maktbalansen endret seg.** De europeiske stormaktene - Storbritannia, Frankrike, Tyskland - var utslitt. USA og Sovjetunionen ble verdens supermakter. Europas tid som verdens sentrum var over.

**Avkoloniseringen** akselererte. Europeiske imperier som hadde hevdet å representere sivilisasjonen, hadde nettopp vist sin verste side. Koloniserte folk i Asia og Afrika begynte å kreve uavhengighet - og fikk det, i løpet av de neste tiårene.

**Europeisk integrasjon** begynte. Krigen hadde vist at europeisk nasjonalisme var farlig. Løsningen var samarbeid - først om kull og stål, så om stadig mer. EU har sine røtter i ønsket om å gjøre ny krig umulig.

**Atomalderen** var begynt. Hiroshima og Nagasaki viste hva disse våpnene kunne gjøre. I tiårene som fulgte, bygget supermaktene opp arsenaler som kunne utslette menneskeheten flere ganger. Vi lever fortsatt i denne skyggen.

Og **minnekulturen** ble skapt. Holocaust, krigsforbrytelser, motstandskamp - disse erfaringene ble sentrale for hvordan land forsto seg selv. I Norge ble motstandskampen en stolt del av nasjonal identitet. Holocaust ble et referansepunkt for menneskerettighetstanken.

"De som ikke husker fortiden, er dømt til å gjenta den," skrev filosofen George Santayana. Det er derfor vi lærer om andre verdenskrig - ikke for å dvele ved fortiden, men for å beskytte fremtiden.`,
    },
    {
      id: 'historie-13-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-13-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor regnes andre verdenskrig som et vendepunkt i verdenshistorien?',
        options: [
          { id: 'a', text: 'Fordi ingenting forandret seg etterpå', isCorrect: false },
          { id: 'b', text: 'Fordi den endret maktbalansen, startet avkolonisering, førte til europeisk integrasjon og skapte atomalderen', isCorrect: true },
          { id: 'c', text: 'Fordi Europa ble sterkere enn før', isCorrect: false },
          { id: 'd', text: 'Fordi alle land ble demokratiske', isCorrect: false },
        ],
        solution: 'Andre verdenskrig var et vendepunkt fordi den forandret nesten alt. Europa mistet sin dominerende stilling til USA og Sovjet. Avkoloniseringen akselererte. Europeisk integrasjon begynte som svar på nasjonalismens farer. Atomalderen skapte nye trusler. FN og menneskerettighetene definerte nye normer. Verden etter 1945 var fundamentalt annerledes enn verden før.',
      },
    },
    {
      id: 'historie-13-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Etterkrigsoppgjøret forsøkte å trekke lærdommer av katastrofen. Krigsforbrytere ble stilt for retten. FN og menneskerettighetene skapte nye rammer for internasjonal orden. I Norge kom det omfattende landssvikoppgjøret. Og verden ble delt mellom øst og vest.

**Nøkkelbegreper du nå kjenner:**
- **Nürnbergprosessen:** Rettsoppgjøret mot nazi-lederne
- **De forente nasjoner (FN):** Verdensorganisasjonen grunnlagt i 1945
- **Menneskerettighetserklæringen (1948):** Universelle rettigheter for alle mennesker
- **Landssvikoppgjøret:** Det norske oppgjøret med kollaboratører
- **Marshall-planen:** Amerikansk hjelp til gjenoppbygging
- **NATO (1949):** Vestlig forsvarsallianse
- **Jernteppet:** Delingen av Europa i øst og vest

**Det viktigste du tar med deg:**
Freden etter andre verdenskrig var klokere enn freden etter første verdenskrig. I stedet for å straffe og ydmyke, satset man på gjenoppbygging og samarbeid. Nürnbergprosessen etablerte at individer er ansvarlige for sine handlinger. Menneskerettighetene slo fast at alle har ukrenkelig verdi. Disse prinsippene - født av krigens redsler - er fortsatt fundamentet for den internasjonale ordenen vi lever i.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler i del 12
// ============================================================================

export const HISTORIE_NARRATIV_DEL12_CHAPTERS = [
  CHAPTER_HISTORIE_13_1_NARRATIV,
  CHAPTER_HISTORIE_13_2_NARRATIV,
  CHAPTER_HISTORIE_13_3_NARRATIV,
  CHAPTER_HISTORIE_13_4_NARRATIV,
  CHAPTER_HISTORIE_13_5_NARRATIV,
];
