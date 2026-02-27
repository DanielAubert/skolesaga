/**
 * Tekstbok innhold for Historie - NARRATIV VERSJON DEL 4
 * Kapittel 5: Renessanse og reformasjon (5.1–5.5)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1 NARRATIV: Renessansen og humanismen
// ============================================================================

export const CHAPTER_HISTORIE_5_1_NARRATIV: TextbookChapter = {
  id: 'historie-5-1-narrativ',
  courseId: 'historie',
  chapterNumber: '5.1',
  title: 'Renessansen og humanismen',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om gjenfødelsen av antikkens idealer, de store kunstnerne og en oppfinnelse som forandret verden for alltid.',
  estimatedMinutes: 40,
  competenceGoals: ['reflektere over hvordan fortiden former oss'],
  linkedChapterId: 'historie-5-1',
  content: [
    {
      id: 'historie-5-1-n-intro',
      type: 'text',
      content: `## Forandringens tid

Tenk deg at du lever i Europa på 1300-tallet. Svartedauden har nettopp feid over kontinentet og drept kanskje en tredjedel av befolkningen. Kirken preger hverdagen, og prestene minner om verdens forgjengelighet. Mennesket er en synder, sier de, og livet på jorden er en prøvelse før det neste livet. Men middelalderens kristendom ga også mennesker fellesskap, mening og moralsk struktur. Kirken bygde katedraler og grunnla universiteter, og teologer som Thomas Aquinas hadde allerede utviklet avanserte filosofiske systemer som forente tro og fornuft.

Så skjer det noe. I de italienske bystatene -- Firenze, Venezia, Milano -- begynner noen å tenke annerledes. De graver frem gamle bøker og skulpturer fra antikkens Roma og Hellas. De leser filosofene Platon og Aristoteles. De studerer de gamle skulpturene og undrer seg: Hvordan kunne mennesker for over tusen år siden skape noe så vakkert? Og hvorfor hadde denne kunnskapen gått tapt?

Det de oppdager, forandrer synet deres på alt. For i antikken handlet det ikke bare om Gud og synd. Det handlet om mennesket -- om fornuft, skjønnhet og skaperkraft. Denne gjenoppdagelsen av antikkens idealer er det vi kaller **renessansen**, et ord som betyr **gjenfødelse**. Og den begynte i Italia rundt 1400 og spredte seg over de neste to hundre årene til resten av Europa.`,
    },
    {
      id: 'historie-5-1-n-section1',
      type: 'text',
      content: `## Humanismen -- mennesket i sentrum

Men renessansen var mer enn kunst og vakre bygninger. Den var først og fremst en ny måte å tenke på, en filosofisk bevegelse vi kaller **humanismen**.

Humanistene satte mennesket i sentrum. I stedet for å se på mennesket som en hjelpeløs synder, hevdet de at mennesket har **verdighet**, **fornuft** og **skapende evner**. Mennesket kunne forme sin egen skjebne. Det var en revolusjonerende tanke.

Den italienske filosofen **Giovanni Pico della Mirandola** formulerte dette i sin berømte tale *Om menneskets verdighet* i 1486. Han lot Gud tale til Adam ved skapelsen: *"Vi har ikke gitt deg noen bestemt plass eller noen særskilt egenskap, for at du etter eget ønske og egen vilje skal kunne velge den plassen og de egenskapene du selv ønsker."* Med andre ord: Mennesket er fritt til å bli hva det vil.

Humanistene var ikke anti-religiøse. De fleste var dypt troende kristne. Men de mente at troen skulle berikes av kunnskap og fornuft, ikke stå i motsetning til den. De studerte antikkens tekster på originalspråkene -- latin og gresk -- og mente at **klassisk dannelse** var veien til et godt liv. De grunnla skoler og universiteter, og de drømte om et samfunn der utdanning og kunnskap sto i høysetet.

Hvorfor begynte alt dette akkurat i Italia? Fordi de italienske bystatene var rike handelssentre med en velstående borgerklasse. Familier som **Medici-familien** i Firenze hadde enorme formuer fra bank- og handelsvirksomhet, og de brukte rikdommen sin til å støtte kunstnere, forfattere og tenkere. Denne formen for støtte kalles **mesenat**, og den var avgjørende for at renessansen kunne blomstre.`,
    },
    {
      id: 'historie-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på humanismen og renessansens idégrunnlag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-1-n-quiz1-q0',
            task: 'Hva var humanismens viktigste idé?',
            options: [
              { id: 'a', text: 'At mennesket bør underkaste seg Guds vilje og akseptere sin plass i samfunnet', isCorrect: false },
              { id: 'b', text: 'At mennesket har verdighet, fornuft og evne til å forme sin egen skjebne', isCorrect: true },
              { id: 'c', text: 'At antikkens filosofi burde erstatte kristendommen som Europas trosgrunnlag', isCorrect: false },
              { id: 'd', text: 'At klassisk dannelse var viktig, men bare for den geistlige standen', isCorrect: false },
            ],
            solution: 'Humanismens kjerneidé var at mennesket har verdighet og skapende evner, og at det kan forme sin egen skjebne gjennom fornuft og kunnskap. Dette var et brudd med middelalderens syn på mennesket som en hjelpeløs synder.',
          },
          {
            id: 'historie-5-1-n-quiz1-q1',
            task: 'Hva var «mesenat», og hvorfor var det viktig for renessansen?',
            options: [
              { id: 'a', text: 'Et nettverk av humanistiske universiteter grunnlagt av Medici-familien', isCorrect: false },
              { id: 'b', text: 'En form for økonomisk støtte fra rike familier til kunstnere og tenkere', isCorrect: true },
              { id: 'c', text: 'Et laugssystem der kunstnere og håndverkere organiserte seg i fellesskap', isCorrect: false },
              { id: 'd', text: 'En handelsavtale mellom de italienske bystatene som sikret fri utveksling av kunst', isCorrect: false },
            ],
            solution: 'Mesenat var den økonomiske støtten rike familier som Medici-familien i Firenze ga til kunstnere, forfattere og tenkere. Uten denne støtten kunne ikke renessansens kulturelle blomstring ha funnet sted.',
          },
          {
            id: 'historie-5-1-n-quiz1-q2',
            task: 'Hvorfor begynte renessansen akkurat i Italia?',
            options: [
              { id: 'a', text: 'Fordi den katolske kirken i Roma aktivt oppmuntret til gjenoppdagelse av antikken', isCorrect: false },
              { id: 'b', text: 'Fordi bysantinske lærde brakte gresk kunnskap direkte til Italia etter Konstantinopels fall', isCorrect: false },
              { id: 'c', text: 'Fordi de italienske bystatene var rike handelssentre med en velstående borgerklasse som kunne finansiere kunst og lærdom', isCorrect: true },
              { id: 'd', text: 'Fordi Italia hadde den sterkeste tradisjonen for folkespråklig litteratur gjennom Dante og Petrarca', isCorrect: false },
            ],
            solution: 'Renessansen begynte i Italia fordi bystater som Firenze, Venezia og Milano var rike handelssentre. En velstående borgerklasse, særlig familier som Medici-familien, brukte sin rikdom til å støtte kunstnere og tenkere.',
          },
        ],
      },
    },
    {
      id: 'historie-5-1-n-section2',
      type: 'text',
      content: `## Renessansens store kunstnere

Renessansen produserte en usedvanlig konsentrasjon av kunstnerisk talent i Europa. Og ingen av renessansens kunstnere illustrerer periodens idealer bedre enn **Leonardo da Vinci** (1452--1519).

Leonardo var det vi kaller et **universalgeni** -- et menneske som mestret alt. Han var maler, og ga oss mesterverk som *Mona Lisa* og *Nattverden*. Men han var også anatom som dissekerte lik for å forstå kroppen, ingeniør som tegnet planer for flygemaskiner og stridsvogner hundrevis av år før de ble virkelighet, vitenskapsmann som studerte optikk og hydraulikk, og arkitekt som designet bygninger og broer. Hans notatbøker, fulle av tusenvis av tegninger og observasjoner, er et vindu inn i et sinn som aldri sluttet å undre seg.

Leonardo var selve symbolet på **renessansemennesket** -- idealet om det allsidige mennesket som bruker fornuft og observasjon til å forstå og forme verden.

Ved siden av Leonardo sto andre giganter. **Michelangelo** (1475--1564) skapte den mektige skulpturen *David* og malte det berømte taket i **Det sixtinske kapell** i Roma -- et arbeid som tok fire år og som fortsatt tar pusten fra besøkende. **Rafael** (1483--1520) ble kjent for sine harmoniske komposisjoner og vakre fremstillinger av Madonna.

Det som kjennetegner renessansekunsten, er **realisme**, bruk av **sentralperspektiv** som ga dybde til bildene, og grundige studier av menneskets **anatomi**. Kunstnerne ville ikke lenger bare lage symbolske fremstillinger. De ville vise verden slik den virkelig var -- i all sin skjønnhet og kompleksitet.`,
    },
    {
      id: 'historie-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på renessansens store kunstnere:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-1-n-quiz2-q0',
            task: 'Hvorfor regnes Leonardo da Vinci som symbolet på renessansemennesket?',
            options: [
              { id: 'a', text: 'Fordi han var den første som brukte sentralperspektiv i malerkunsten', isCorrect: false },
              { id: 'b', text: 'Fordi han mestret mange ulike felt -- kunst, vitenskap, teknikk og anatomi', isCorrect: true },
              { id: 'c', text: 'Fordi han var den mest produktive kunstneren med flest bestillingsverk i perioden', isCorrect: false },
              { id: 'd', text: 'Fordi han kombinerte humanistisk filosofi med religiøs reformasjon', isCorrect: false },
            ],
            solution: 'Leonardo da Vinci var et universalgeni som mestret maling, anatomi, ingeniørkunst, vitenskap og arkitektur. Han representerer renessansens ideal om det allsidige mennesket som bruker fornuft og observasjon til å forstå verden.',
          },
          {
            id: 'historie-5-1-n-quiz2-q1',
            task: 'Hva kjennetegner renessansekunsten sammenlignet med middelalderkunsten?',
            options: [
              { id: 'a', text: 'Renessansekunsten fokuserte hovedsakelig på dekorative mønstre og abstrakte former inspirert av islamsk kunst', isCorrect: false },
              { id: 'b', text: 'Renessansekunsten videreførte middelalderens flate, symbolske stil, men med nye religiøse motiver', isCorrect: false },
              { id: 'c', text: 'Renessansekunsten la vekt på realisme, sentralperspektiv og studier av anatomi', isCorrect: true },
              { id: 'd', text: 'Renessansekunsten la størst vekt på fargebruk og emosjonelt uttrykk fremfor naturtro gjengivelse', isCorrect: false },
            ],
            solution: 'Renessansekunsten kjennetegnes av realisme, bruk av sentralperspektiv som ga dybde til bildene, og grundige studier av menneskets anatomi. Kunstnerne ville vise verden slik den virkelig var -- i all sin skjønnhet og kompleksitet.',
          },
          {
            id: 'historie-5-1-n-quiz2-q2',
            task: 'Hvilken renessansekunstner malte taket i Det sixtinske kapell?',
            options: [
              { id: 'a', text: 'Leonardo da Vinci', isCorrect: false },
              { id: 'b', text: 'Rafael', isCorrect: false },
              { id: 'c', text: 'Tizian', isCorrect: false },
              { id: 'd', text: 'Michelangelo', isCorrect: true },
            ],
            solution: 'Michelangelo malte det berømte taket i Det sixtinske kapell i Roma -- et arbeid som tok fire år. Han skapte også den mektige skulpturen David.',
          },
        ],
      },
    },
    {
      id: 'historie-5-1-n-section3',
      type: 'text',
      content: `## Boktrykkerkunsten -- en revolusjon i kunnskap

I 1450, i den tyske byen Mainz, skjedde kanskje den viktigste hendelsen i hele renessansen. **Johannes Gutenberg** oppfant boktrykkerkunsten med **løse typer**. Trykking med løse typer var allerede oppfunnet i Kina og Korea flere hundre år tidligere, men Gutenbergs system -- med metalltyper, trykkpresse og oljebasert blekk -- var en selvstendig oppfinnelse som fikk enorme konsekvenser i Europa.

For å forstå hvor revolusjonerende dette var, må vi tenke på hvordan verden var før Gutenberg. Bøker ble kopiert for hånd, vanligvis av munker i klostre. Det tok måneder å kopiere én bok. Bøker var derfor ekstremt dyre, og bare de rikeste eller de store kirkelige institusjonene hadde dem. Kunnskap var forbeholdt en liten elite.

Med Gutenbergs trykkpresse forandret alt seg. Plutselig kunne man produsere hundrevis av kopier av en bok raskt og billig. Den første store boken Gutenberg trykte, var Bibelen -- den berømte Gutenberg-bibelen fra 1455. Men snart ble alt mulig trykt: vitenskapelige tekster, filosofi, poesi, nyhetsbrev, pamfletter.

**Konsekvensene var enorme.** Kunnskap kunne nå spres til langt flere mennesker enn noen gang tidligere. Ideer krysset landegrenser i en hastighet man aldri hadde sett. Latin mistet gradvis sin posisjon som det eneste språket for lærde tekster, fordi bøker nå ble trykt på folkespråkene -- tysk, fransk, italiensk, engelsk. Vanlige folk fikk tilgang til kunnskap som tidligere hadde vært forbeholdt geistlige og adelige.

Og kanskje viktigst av alt: Kirken mistet sitt **monopol på kunnskap**. Da Martin Luther noen tiår senere skrev sine berømte teser mot kirken, ble de spredt over hele Europa på bare noen uker -- takket være trykkpressen. Uten Gutenberg, ingen reformasjon. Uten boktrykkerkunsten ville renessansens ideer ha forblitt et italiensk fenomen for en liten elite.`,
    },
    {
      id: 'historie-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på boktrykkerkunsten og dens konsekvenser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-1-n-quiz3-q0',
            task: 'Hvilken av disse var IKKE en konsekvens av boktrykkerkunsten?',
            options: [
              { id: 'a', text: 'Kunnskap ble tilgjengelig for flere mennesker', isCorrect: false },
              { id: 'b', text: 'Folkespråkene styrket sin posisjon på bekostning av latin', isCorrect: false },
              { id: 'c', text: 'Kirken fikk sterkere kontroll over hva folk leste', isCorrect: true },
              { id: 'd', text: 'Vitenskapelige tekster og filosofi nådde et bredere publikum', isCorrect: false },
            ],
            solution: 'Boktrykkerkunsten førte til at kirken mistet sitt monopol på kunnskap, ikke at den fikk sterkere kontroll. Nå kunne hvem som helst trykke og spre ideer -- også ideer som kirken var uenig i.',
          },
          {
            id: 'historie-5-1-n-quiz3-q1',
            task: 'Hvordan ble bøker produsert før Gutenbergs oppfinnelse?',
            options: [
              { id: 'a', text: 'De ble masseprodusert ved hjelp av tresnitteknikk ved universitetene', isCorrect: false },
              { id: 'b', text: 'De ble kopiert for hånd, vanligvis av munker i klostre', isCorrect: true },
              { id: 'c', text: 'De ble diktert muntlig og skrevet ned av profesjonelle skrivere i byene', isCorrect: false },
              { id: 'd', text: 'De ble trykt med kinesiske metoder som arabiske kjøpmenn hadde brakt til Europa', isCorrect: false },
            ],
            solution: 'Før Gutenberg ble bøker kopiert for hånd, vanligvis av munker i klostre. Det tok måneder å kopiere én bok, og bøker var derfor ekstremt dyre og kun tilgjengelige for en liten elite.',
          },
          {
            id: 'historie-5-1-n-quiz3-q2',
            task: 'Hva var sammenhengen mellom boktrykkerkunsten og reformasjonen?',
            options: [
              { id: 'a', text: 'Luther grunnla egne trykkerier for å kontrollere spredningen av sine skrifter', isCorrect: false },
              { id: 'b', text: 'Paven brukte trykkpressen til å publisere motskrifter som svekket Luthers budskap', isCorrect: false },
              { id: 'c', text: 'Trykkpressen gjorde det mulig å spre Luthers teser over hele Europa på bare noen uker', isCorrect: true },
              { id: 'd', text: 'Boktrykkerkunsten var viktigst for å spre pavens bannbulle mot Luther, ikke Luthers egne tekster', isCorrect: false },
            ],
            solution: 'Uten boktrykkerkunsten ville reformasjonen neppe ha lyktes. Trykkpressen gjorde det mulig å spre Luthers teser og andre kritiske tekster over hele Europa på kort tid, slik at kirken mistet kontrollen over informasjonsflyten.',
          },
        ],
      },
    },
    {
      id: 'historie-5-1-n-section4',
      type: 'text',
      content: `## Pico della Mirandola -- renessansens manifest

For å virkelig forstå hvor radikalt renessansens menneskesyn var, la oss se nærmere på kildeteksten fra **Giovanni Pico della Mirandola** og hans tale *Om menneskets verdighet* fra 1486.

Pico var en av renessansens mest lærde menn. Han behersket mange språk og hadde studert filosofi fra ulike tradisjoner. I talen sin lot han Gud tale direkte til Adam: *"Vi har ikke gitt deg noen bestemt plass, noen egen form eller noen særskilt egenskap, for at du etter eget ønske og egen vilje skal kunne velge den plassen, den formen og de egenskapene du selv ønsker. Alle andre veseners natur er begrenset av lover vi har fastsatt. Du derimot er ikke begrenset av noe bånd, men skal selv bestemme din natur etter din egen frie vilje."*

Tenk over hvor revolusjonerende dette var. I middelalderen ble mennesket i stor grad definert av sin plass i Guds plan. Du ble som regel født som bonde, adelsmann eller geistlig, og det ble sett som Guds vilje. Riktignok fantes det veier til sosial mobilitet -- gjennom kirken, handel eller lærdom -- og teologer som Thomas Aquinas hadde argumentert for menneskets verdighet og fornuft innenfor en kristen ramme. Men Picos visjon om menneskets radikale frihet var noe nytt.

Pico sier det stikk motsatte: Mennesket har **ingen forutbestemt natur**. Det er fritt til å forme seg selv. Det kan synke ned til dyrenes nivå, eller det kan heve seg opp mot det guddommelige. Valget er menneskets eget. Denne teksten regnes som **renessansehumanismens manifest** -- selve kjernen i den nye tenkningen om menneskets verdi og muligheter.

Vi må likevel huske at Pico representerte en intellektuell elite. For de fleste vanlige europeere forandret livet seg lite under renessansen. Bønder arbeidet fortsatt på markene, og de fleste kunne verken lese eller skrive. Renessansens idealer nådde ikke alle -- ennå.`,
    },
    {
      id: 'historie-5-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-5-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på Pico della Mirandola og renessansens menneskesyn:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-1-n-quiz4-q0',
            task: 'Hva er hovedbudskapet i Pico della Mirandolas tale «Om menneskets verdighet»?',
            options: [
              { id: 'a', text: 'At mennesket har en forutbestemt natur gitt av Gud, men kan nå det guddommelige gjennom gode gjerninger', isCorrect: false },
              { id: 'b', text: 'At menneskets fornuft er begrenset og må veiledes av kirkens lære for å nå sannheten', isCorrect: false },
              { id: 'c', text: 'At mennesket er fritt til å forme seg selv og sin egen natur', isCorrect: true },
              { id: 'd', text: 'At menneskets verdighet ligger i dets evne til å mestre klassisk latin og gresk', isCorrect: false },
            ],
            solution: 'Pico lar Gud si til Adam at mennesket ikke har noen forutbestemt natur, men er fritt til å velge sin egen vei. Dette var et radikalt brudd med middelalderens syn på mennesket som bundet av sin plass i Guds plan.',
          },
          {
            id: 'historie-5-1-n-quiz4-q1',
            task: 'Hvorfor nådde renessansens idealer i begrenset grad ut til vanlige folk?',
            options: [
              { id: 'a', text: 'Fordi humanistene bevisst begrenset sin undervisning til universiteter i de italienske bystatene', isCorrect: false },
              { id: 'b', text: 'Fordi renessansen var et eliteprosjekt -- de fleste kunne verken lese eller skrive og arbeidet som bønder', isCorrect: true },
              { id: 'c', text: 'Fordi boktrykkerkunsten ennå ikke var oppfunnet da renessansen nådde sitt høydepunkt', isCorrect: false },
              { id: 'd', text: 'Fordi fyrstene forbød spredning av humanistiske tekster utenfor hoffeliten', isCorrect: false },
            ],
            solution: 'Pico og humanistene representerte en intellektuell elite. For de fleste vanlige europeere forandret livet seg lite. Bønder arbeidet fortsatt på markene, og de fleste kunne verken lese eller skrive. Renessansens idealer nådde ikke alle -- ennå.',
          },
        ],
      },
    },
    {
      id: 'historie-5-1-n-section5',
      type: 'text',
      content: `## Renessansens arv -- ulike tolkninger

Renessansen varte i omtrent to hundre år, fra rundt 1400 til rundt 1600. Men dens virkninger lever videre den dag i dag. Mange av de ideene vi tar for gitt i det moderne samfunnet, har røtter i renessansen.

Ideen om at mennesket har **verdighet** og kan forme sitt eget liv, har blitt brukt som filosofisk grunnlag for moderne **menneskerettigheter**. Humanistenes vekt på **fornuft** fremfor blind autoritetstro banet vei for **opplysningstiden** og moderne **vitenskap**. Fokuset på **individet** la grunnlag for senere ideer om individuelle rettigheter og friheter. Humanistenes vekt på **dannelse** og kunnskap inspirerte moderne utdanningsidealer.

Men renessansens arv er sammensatt. De samme ideene om europeisk overlegenhet og vitenskap som vokste ut av perioden, ble også brukt til å rettferdiggjøre kolonialisme og imperialisme i århundrene som fulgte. Renessansens fokus på individet og fornuften har blitt tolket på svært ulike måter gjennom historien.

Selv om humanistene ikke var anti-religiøse, bidro de til å skille mellom religiøs og verdslig kunnskap -- et skille som er grunnleggende for moderne, sekulære samfunn.

En vanlig tolkning er at renessansen plantet frøene for opplysningstiden og de demokratiske revolusjonene som fulgte. Men historisk utvikling er sjelden lineær, og det er viktig å huske at mange andre faktorer og tradisjoner -- også fra middelalderen, islam og andre kulturer -- bidro til den moderne verden.`,
    },
    {
      id: 'historie-5-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-5-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på renessansens varige arv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-1-n-quiz5-q0',
            task: 'Hva er den viktigste sammenhengen mellom renessansens humanisme og moderne menneskerettigheter?',
            options: [
              { id: 'a', text: 'Humanistene utformet de første juridiske dokumentene som beskyttet individuelle rettigheter i de italienske bystatene', isCorrect: false },
              { id: 'b', text: 'Humanismens idé om menneskets iboende verdighet og evne til å forme sitt liv er grunnlaget for moderne rettighetstenkning', isCorrect: true },
              { id: 'c', text: 'Renessansens kunstnere fremstilte menneskerettigheter visuelt, noe som inspirerte opplysningsfilosofer direkte', isCorrect: false },
              { id: 'd', text: 'Humanistenes vekt på klassisk dannelse førte til at utdanning ble en lovfestet rettighet allerede på 1500-tallet', isCorrect: false },
            ],
            solution: 'Humanismens grunnidé -- at mennesket har iboende verdighet og evne til å forme sin egen skjebne -- er det filosofiske grunnlaget som moderne menneskerettigheter bygger på, selv om det tok flere århundrer før ideene ble til konkrete rettigheter.',
          },
          {
            id: 'historie-5-1-n-quiz5-q1',
            task: 'Hvorfor er renessansens arv sammensatt og ikke bare positiv?',
            options: [
              { id: 'a', text: 'Fordi renessansens fokus på individet undergravde det sosiale fellesskapet og førte til økt ulikhet i samtiden', isCorrect: false },
              { id: 'b', text: 'Fordi ideene om europeisk overlegenhet også ble brukt til å rettferdiggjøre kolonialisme og imperialisme', isCorrect: true },
              { id: 'c', text: 'Fordi humanistenes kritikk av kirken svekket den moralske ordenen og førte til religionskrigene', isCorrect: false },
              { id: 'd', text: 'Fordi renessansens elitisme hindret utviklingen av folkelig utdanning i flere århundrer', isCorrect: false },
            ],
            solution: 'Renessansens arv er sammensatt fordi de samme ideene om europeisk overlegenhet og vitenskap som vokste ut av perioden, også ble brukt til å rettferdiggjøre kolonialisme og imperialisme i århundrene som fulgte.',
          },
          {
            id: 'historie-5-1-n-quiz5-q2',
            task: 'Hvilken senere historisk periode bygget direkte videre på renessansens vektlegging av fornuft?',
            options: [
              { id: 'a', text: 'Reformasjonstiden', isCorrect: false },
              { id: 'b', text: 'Barokken', isCorrect: false },
              { id: 'c', text: 'Opplysningstiden', isCorrect: true },
              { id: 'd', text: 'Romantikken', isCorrect: false },
            ],
            solution: 'Humanistenes vekt på fornuft fremfor blind autoritetstro banet vei for opplysningstiden og moderne vitenskap. Renessansen plantet frøene for de store tankene om demokrati og individuelle rettigheter som fulgte.',
          },
        ],
      },
    },
    {
      id: 'historie-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Renessansen var en kulturell og intellektuell gjenfødelse som startet i Italia rundt 1400 og spredte seg til resten av Europa. Den gjenoppdaget antikkens greske og romerske idealer og skapte en ny måte å tenke om mennesket på.

**Nøkkelbegreper du nå kjenner:**
- **Renessanse**: Gjenfødelse -- gjenoppdagelsen av antikkens kultur og idealer (ca. 1400--1600)
- **Humanisme**: Filosofisk retning som satte menneskets verdighet, fornuft og skapende evner i sentrum
- **Renessansemennesket**: Idealet om det allsidige mennesket, best illustrert av Leonardo da Vinci
- **Boktrykkerkunsten**: Gutenbergs oppfinnelse fra 1450 som revolusjonerte spredningen av kunnskap
- **Mesenat**: Rike familier som Medici-familien som støttet kunstnere og lærde

**Det viktigste du tar med deg:**
Renessansen markerte et brudd med middelalderens verdensbilde og la grunnlaget for den moderne tenkningen om menneskets verdi, fornuftens betydning og individets rettigheter. Boktrykkerkunsten var nøkkelen som åpnet døren for at disse ideene kunne nå ut til hele Europa.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2 NARRATIV: Reformasjonen og religionskrigene
// ============================================================================

export const CHAPTER_HISTORIE_5_2_NARRATIV: TextbookChapter = {
  id: 'historie-5-2-narrativ',
  courseId: 'historie',
  chapterNumber: '5.2',
  title: 'Reformasjonen og religionskrigene',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan en munk fra en liten tysk by splittet kristenheten og utløste over hundre år med religiøse konflikter.',
  estimatedMinutes: 45,
  competenceGoals: ['religionens betydning for samfunn og makt'],
  linkedChapterId: 'historie-5-2',
  content: [
    {
      id: 'historie-5-2-n-intro',
      type: 'text',
      content: `## Munken som rystet verden

Det er 31. oktober 1517. I den lille tyske byen Wittenberg går en munk bort til kirkedøren. Han heter **Martin Luther**, og i hendene holder han et dokument med 95 påstander -- **teser** -- som kritiserer den katolske kirken. Ifølge tradisjonen spikrer han dokumentet fast på kirkedøren. Det er ment som en invitasjon til akademisk debatt, ikke et opprør.

Men det Luther ikke vet, er at han akkurat har tent en lunte som vil sprenge den vestlige kristenheten i stykker. Takket være **boktrykkerkunsten**, som ble oppfunnet bare noen tiår tidligere, spres tesene hans over hele Europa på bare noen uker. Folk leser dem, diskuterer dem, og mange nikker gjenkjennende. For misnøyen med den katolske kirken har vokst i lang tid.

Dette er begynnelsen på **reformasjonen** -- en religiøs omveltning som ikke bare forandret kirken, men som forandret hele Europas politiske kart og førte til over hundre år med blodige religionskriger.`,
    },
    {
      id: 'historie-5-2-n-section1',
      type: 'text',
      content: `## En kirke i krise

For å forstå hvorfor Luthers teser traff så mange, må vi se på tilstanden i den katolske kirken på begynnelsen av 1500-tallet.

I århundrer hadde kirken hatt **monopol på kristendommen** i Vest-Europa. Paven i Roma var Guds stedfortreder på jorden, og kirken kontrollerte veien til frelse. Men mye hadde gått galt. Paven levde som en verdslig fyrste, omgitt av luksus og prakt. Kirken eide enorme landområder -- i noen land opptil en tredjedel av all jord. Biskoper og abbeder var ofte mer opptatt av politikk og rikdom enn av sjeleomsorg. Mange prester var dårlig utdannet og kunne knapt lese.

Den praksisen som provoserte mest, var **avlatshandelen**. Avlat var opprinnelig en ordning der kirken ga reduksjon i straffen for synder mot at den troende gjorde bot. Men i praksis hadde det blitt ren forretning: Kirken solgte avlatsbrev mot kontant betaling. Du kunne bokstavelig talt **kjøpe deg tilgivelse for synder** -- til og med for synder du ennå ikke hadde begått. Pengene fra avlatshandelen ble blant annet brukt til å bygge den enorme Peterskirken i Roma.

Avlatshandleren **Johann Tetzel** reiste rundt i Tyskland med slagordet: *"Når pengene i kisten klinger, sjelen ut av skjærsilden springer."* Det var dette Luther reagerte sterkest på.`,
    },
    {
      id: 'historie-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på den katolske kirken i krise:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-2-n-quiz1-q0',
            task: 'Hva var avlatshandelen?',
            options: [
              { id: 'a', text: 'En kirkelig skatt kalt tiende som finansierte bygging av katedraler', isCorrect: false },
              { id: 'b', text: 'Salg av tilgivelse for synder mot betaling', isCorrect: true },
              { id: 'c', text: 'Kirkens praksis med å selge hellige relikvier og velsignede gjenstander til troende', isCorrect: false },
              { id: 'd', text: 'En ordning der troende betalte for å få lese Bibelen på sitt eget språk', isCorrect: false },
            ],
            solution: 'Avlatshandelen var kirkens praksis med å selge tilgivelse for synder mot kontant betaling. Kjøperen fikk et avlatsbrev som skulle redusere straffen for synder. Pengene ble brukt til blant annet byggingen av Peterskirken i Roma.',
          },
          {
            id: 'historie-5-2-n-quiz1-q1',
            task: 'Hva var bakgrunnen for at Martin Luther slo opp sine 95 teser i 1517?',
            options: [
              { id: 'a', text: 'Han ønsket å reformere kirkens liturgi og innføre nye sakramenter', isCorrect: false },
              { id: 'b', text: 'Han reagerte på misnøyen med kirkens avlatshandel og andre misbruk', isCorrect: true },
              { id: 'c', text: 'Han var inspirert av humanistene til å bryte med all organisert religion', isCorrect: false },
              { id: 'd', text: 'Kurfyrsten av Sachsen ba ham skrive en teologisk kritikk for å svekke pavens politiske innflytelse', isCorrect: false },
            ],
            solution: 'Luther reagerte på den utbredte misnøyen med den katolske kirken, særlig avlatshandelen. Hans 95 teser var opprinnelig ment som en invitasjon til akademisk debatt, ikke et opprør, men de traff en nerve i et Europa som lenge hadde vært frustrert over kirkens misbruk.',
          },
          {
            id: 'historie-5-2-n-quiz1-q2',
            task: 'Hvilken teknologi var avgjørende for at Luthers teser spredte seg så raskt?',
            options: [
              { id: 'a', text: 'Papirproduksjon som nylig hadde kommet til Europa fra den arabiske verden', isCorrect: false },
              { id: 'b', text: 'Det utbredte nettverket av handelsruter som knyttet europeiske byer sammen', isCorrect: false },
              { id: 'c', text: 'Det latinske språket som var felles for alle lærde i Europa', isCorrect: false },
              { id: 'd', text: 'Boktrykkerkunsten', isCorrect: true },
            ],
            solution: 'Takket være boktrykkerkunsten, som Gutenberg hadde oppfunnet noen tiår tidligere, ble Luthers teser spredt over hele Europa på bare noen uker. Uten trykkpressen ville reformasjonen neppe ha fått så stor gjennomslagskraft.',
          },
        ],
      },
    },
    {
      id: 'historie-5-2-n-section2',
      type: 'text',
      content: `## Luthers lære -- tre revolusjonerende prinsipper

Luther nøyde seg ikke med å kritisere avlatshandelen. Han utviklet en helt ny teologi som utfordret selve grunnlaget for den katolske kirkens makt. Han formulerte tre prinsipper som snudde den katolske læren på hodet:

**Sola scriptura** -- *Skriften alene*. Luther hevdet at **Bibelen** er den eneste autoriteten i trosspørsmål. Ikke paven, ikke kirkemøter, ikke tradisjonen -- bare Bibelen. Dette var et direkte angrep på pavens autoritet. Hvis Bibelen er den eneste rettesnoren, trenger vi ikke en pave til å fortelle oss hva vi skal tro.

**Sola fide** -- *Troen alene*. Mennesket blir frelst ved tro, ikke ved gjerninger. Den katolske kirken lærte at man måtte gjøre gode gjerninger -- inkludert å kjøpe avlat -- for å bli frelst. Luther sa at troen alene var nok. Dette gjorde avlatshandelen meningsløs.

**Sola gratia** -- *Nåden alene*. Frelsen er en gave fra Gud, ikke noe man kan fortjene eller kjøpe. Gud gir frelsen av ren nåde til dem som tror. Igjen: Avlatsbrevene var verdiløse.

Til sammen betydde disse prinsippene at mennesket hadde et **direkte forhold til Gud**, uten behov for kirken som mellommann. Du trengte ikke en prest til å tilgi syndene dine, en pave til å tolke Bibelen for deg, eller et avlatsbrev for å komme til himmelen. Alt du trengte, var tro og en Bibel.

Paven reagerte med å fordømme Luther som **kjetter** og kreve at han trakk tilbake sine synspunkter. Luther nektet. Da han ble innkalt til riksdagen i Worms i 1521, skal han ha sagt de berømte ordene: *"Her står jeg. Jeg kan ikke annet."*`,
    },
    {
      id: 'historie-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på Luthers lære og teologi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-2-n-quiz2-q0',
            task: 'Hva betyr prinsippet «sola scriptura»?',
            options: [
              { id: 'a', text: 'At Bibelen må tolkes i lys av kirkefedre og kirkemøtenes tradisjoner', isCorrect: false },
              { id: 'b', text: 'At Bibelen bare kan forstås riktig på originalspråkene hebraisk og gresk', isCorrect: false },
              { id: 'c', text: 'At Bibelen alene er autoriteten i trosspørsmål, ikke paven eller tradisjonen', isCorrect: true },
              { id: 'd', text: 'At Bibelen bør oversettes til folkespråkene slik at prestene mister sitt tolkningsmonopol', isCorrect: false },
            ],
            solution: 'Sola scriptura betyr «Skriften alene» og innebærer at Bibelen er den eneste autoriteten i trosspørsmål. Dette utfordret pavens makt direkte, fordi det fjernet behovet for paven og kirken som tolkere av Guds vilje.',
          },
          {
            id: 'historie-5-2-n-quiz2-q1',
            task: 'Hva betyr «sola fide», og hvorfor var det revolusjonerende?',
            options: [
              { id: 'a', text: 'At nåden alene frelser mennesket, helt uavhengig av både tro og gjerninger', isCorrect: false },
              { id: 'b', text: 'At troen alene er nok for frelse -- dette gjorde avlatshandelen meningsløs', isCorrect: true },
              { id: 'c', text: 'At tro og gode gjerninger sammen er nødvendig for frelse, men at avlat ikke teller som gode gjerninger', isCorrect: false },
              { id: 'd', text: 'At hvert menneske er forutbestemt til frelse eller fortapelse av Guds vilje', isCorrect: false },
            ],
            solution: 'Sola fide betyr «troen alene» -- mennesket frelses ved tro, ikke ved gjerninger eller avlatsbrev. Dette var revolusjonerende fordi det fjernet grunnlaget for avlatshandelen og kirkens rolle som mellommann mellom mennesket og Gud.',
          },
          {
            id: 'historie-5-2-n-quiz2-q2',
            task: 'Hva var den samlede konsekvensen av Luthers tre prinsipper for kirkens makt?',
            options: [
              { id: 'a', text: 'De samlet de protestantiske fyrstene i et politisk forbund mot den katolske keiseren', isCorrect: false },
              { id: 'b', text: 'De reformerte kirkens indre organisasjon, men beholdt pavens overordnede autoritet', isCorrect: false },
              { id: 'c', text: 'De erstattet kirkens sakramenter med individuelle bønneritualer uten prestelig veiledning', isCorrect: false },
              { id: 'd', text: 'De ga mennesket et direkte forhold til Gud uten behov for kirken som mellommann', isCorrect: true },
            ],
            solution: 'Luthers tre prinsipper -- sola scriptura, sola fide og sola gratia -- betydde til sammen at mennesket hadde et direkte forhold til Gud. Man trengte verken pave, prest eller avlatsbrev. Alt man trengte var tro og en Bibel.',
          },
        ],
      },
    },
    {
      id: 'historie-5-2-n-section3',
      type: 'text',
      content: `## Reformasjonen sprer seg -- tre retninger

Luthers opprør inspirerte andre til å bryte med den katolske kirken, men ikke alle var enige med Luther om alt. Resultatet ble at reformasjonen splittet seg i flere retninger.

**Lutheranismen** ble dominerende i Tyskland og Skandinavia. I **Danmark-Norge ble lutheranismen innført som statsreligion i 1536**, da kong Christian III bestemte at hele riket skulle bli protestantisk. Den katolske erkebiskopen i Nidaros ble tvunget til å flykte, og alt kirkegods ble overført til kongen. Vi kommer tilbake til dette når vi snakker om Norge i dansketiden.

**Kalvinismen** ble grunnlagt av franskmannen **Jean Calvin** i den sveitsiske byen Genève. Calvin la vekt på **predestinasjon** -- ideen om at Gud allerede har bestemt hvem som skal frelses og hvem som skal fortapes. Det høres dystert ut, men kalvinistene mente at flid, hardt arbeid og suksess var tegn på at man var blant de utvalgte. Kalvinismen spredte seg til Sveits, Nederland, Skottland og deler av Frankrike, der kalvinistene ble kalt **hugenotter**.

**Den anglikanske kirke** i England oppsto av mer verdslige grunner. Kong **Henrik VIII** ville skille seg fra sin kone Katarina av Aragon fordi hun ikke ga ham en mannlig arving. Da paven nektet å innvilge skilsmisse, brøt Henrik med Roma i 1534 og erklærte seg selv som overhode for en egen engelsk kirke. Teologisk lå den anglikanske kirken lenge et sted mellom katolisisme og protestantisme.

Reformasjonen hadde altså ikke bare religiøse årsaker. Mange fyrster og konger så den som en mulighet til å **frigjøre seg fra pavens makt** og samtidig **overta kirkens enorme rikdommer**.`,
    },
    {
      id: 'historie-5-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-5-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på reformasjonens ulike retninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-2-n-quiz3-q0',
            task: 'Hva kjennetegnet kalvinismen som skilte den fra lutheranismen?',
            options: [
              { id: 'a', text: 'Kalvinismen la vekt på predestinasjon -- at Gud har forutbestemt hvem som frelses', isCorrect: true },
              { id: 'b', text: 'Kalvinismen la vekt på at gode gjerninger og hardt arbeid var nødvendig for frelse', isCorrect: false },
              { id: 'c', text: 'Kalvinismen avviste alle sakramenter, inkludert dåp og nattverd', isCorrect: false },
              { id: 'd', text: 'Kalvinismen organiserte kirken med biskoper utnevnt av verdslige fyrster', isCorrect: false },
            ],
            solution: 'Kalvinismens mest særegne lære var predestinasjon -- ideen om at Gud allerede har bestemt hvem som frelses og hvem som fortapes. Kalvinistene mente at hardt arbeid og suksess var tegn på å tilhøre de utvalgte.',
          },
          {
            id: 'historie-5-2-n-quiz3-q1',
            task: 'Hvorfor brøt Henrik VIII med den katolske kirken i 1534?',
            options: [
              { id: 'a', text: 'Han var overbevist av Luthers teologiske argumenter om sola scriptura og sola fide', isCorrect: false },
              { id: 'b', text: 'Han ønsket å beslaglegge kirkens eiendommer for å finansiere krigen mot Frankrike', isCorrect: false },
              { id: 'c', text: 'Paven nektet å innvilge skilsmisse fra Katarina av Aragon', isCorrect: true },
              { id: 'd', text: 'Det engelske parlamentet krevde at kongen brøt med Roma for å styrke nasjonal suverenitet', isCorrect: false },
            ],
            solution: 'Henrik VIII brøt med Roma av verdslige grunner: paven nektet å gi ham skilsmisse fra Katarina av Aragon, som ikke hadde gitt ham en mannlig arving. I 1534 erklærte han seg selv som overhode for den anglikanske kirken.',
          },
          {
            id: 'historie-5-2-n-quiz3-q2',
            task: 'Når ble lutheranismen innført som statsreligion i Danmark-Norge?',
            options: [
              { id: 'a', text: 'I 1527, da kong Fredrik I erklærte støtte til lutheranske predikanter', isCorrect: false },
              { id: 'b', text: 'I 1555, som del av Augsburg-freden som ga fyrstene rett til å velge religion', isCorrect: false },
              { id: 'c', text: 'I 1523, samme år som Sverige brøt ut av Kalmarunionen', isCorrect: false },
              { id: 'd', text: 'I 1536, da kong Christian III bestemte at hele riket skulle bli protestantisk', isCorrect: true },
            ],
            solution: 'Lutheranismen ble innført som statsreligion i Danmark-Norge i 1536 av kong Christian III. Den katolske erkebiskopen i Nidaros ble tvunget til å flykte, og alt kirkegods ble overført til kongen.',
          },
        ],
      },
    },
    {
      id: 'historie-5-2-n-section4',
      type: 'text',
      content: `## Religionskrigene -- Europas blodbad

Reformasjonen splittet ikke bare kirken -- den splittet hele Europa og utløste over hundre år med blodige konflikter. Når mennesker er overbevist om at de kjemper for Guds sannhet, er kompromiss vanskelig.

De verste konfliktene var **de franske religionskrigene** (1562--1598) mellom katolikker og hugenotter. Det mest sjokkerende øyeblikket kom natten mellom 23. og 24. august 1572: **Bartolomeusnattmassakren**. Katolske mobber gikk løs på hugenottene i Paris, og volden spredte seg til andre byer. Tusenvis av hugenotter ble drept. Massakren hadde ikke bare religiøse, men også sterke politiske motiver: den var knyttet til maktkampen mellom de mektige **Guise**- og **Bourbon**-familiene om innflytelse over det franske kongehuset. Religion og maktpolitikk var tett sammenvevd.

Men den største og mest ødeleggende konflikten var **Trettiårskrigen** (1618--1648). Den startet som en religionskrig mellom katolikker og protestanter i Det tysk-romerske riket, men utviklet seg til en europeisk storkrig der stormakter som Frankrike, Sverige, Spania og Danmark kjempet om makt og territorium. Store deler av Sentral-Europa ble lagt øde. I noen tyske regioner døde opptil en tredjedel av befolkningen av krig, sykdom og hungersnød.

Trettiårskrigen endte med **Westfalerfreden** i 1648. Denne fredsavtalen er en av de viktigste i europeisk historie. Den bekreftet prinsippet om at **hver fyrste bestemte religionen i sitt territorium** (*cuius regio, eius religio*) -- et prinsipp som allerede var etablert ved **Augsburg-freden i 1555**, men som nå ble utvidet til også å gjelde kalvinister. Westfalerfreden la dessuten grunnlaget for det moderne **statssystemet** der suverene stater anerkjenner hverandres rett til å styre seg selv.

Religionskrigenes grusomheter lærte Europa en bitter leksjon: Religiøs splittelse kunne føre til total ødeleggelse. Gradvis vokste tanken om **religiøs toleranse** fram -- ideen om at mennesker med forskjellig tro kunne leve side om side. Denne tanken ble et av grunnlagene for opplysningstiden som fulgte.`,
    },
    {
      id: 'historie-5-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-5-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på religionskrigene og Westfalerfreden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-2-n-quiz4-q0',
            task: 'Hva var Westfalerfreden (1648)?',
            options: [
              { id: 'a', text: 'En fredsavtale som ga alle europeere individuell religionsfrihet uavhengig av fyrstens tro', isCorrect: false },
              { id: 'b', text: 'Fredsavtalen etter de franske religionskrigene som sikret hugenottenes rettigheter', isCorrect: false },
              { id: 'c', text: 'Fredsavtalen som avsluttet Trettiårskrigen og la grunnlaget for det moderne statssystemet', isCorrect: true },
              { id: 'd', text: 'En avtale som bekreftet den katolske kirkens overherredømme i Det tysk-romerske riket', isCorrect: false },
            ],
            solution: 'Westfalerfreden i 1648 avsluttet Trettiårskrigen og etablerte prinsippet om at hver fyrste bestemte religionen i sitt territorium. Den la også grunnlaget for det moderne statssystemet med suverene stater som anerkjenner hverandres rett til selvstyre.',
          },
          {
            id: 'historie-5-2-n-quiz4-q1',
            task: 'Hva var Bartolomeusnattmassakren i 1572?',
            options: [
              { id: 'a', text: 'Et hugenottisk forsøk på å avsette den franske kongen som ble slått ned av kongelige tropper', isCorrect: false },
              { id: 'b', text: 'En massakre der katolske mobber drepte tusenvis av hugenotter i Paris og andre byer', isCorrect: true },
              { id: 'c', text: 'Et av de store slagene i de franske religionskrigene der hugenottene led et avgjørende nederlag', isCorrect: false },
              { id: 'd', text: 'En hendelse der den franske kongen tvangskonverterte hugenottene til katolisismen etter Nantes-ediktet', isCorrect: false },
            ],
            solution: 'Bartolomeusnattmassakren var et av religionskrigenes mest sjokkerende øyeblikk. Natten mellom 23. og 24. august 1572 gikk katolske mobber løs på hugenottene i Paris, og volden spredte seg til andre byer. Tusenvis av hugenotter ble drept.',
          },
          {
            id: 'historie-5-2-n-quiz4-q2',
            task: 'Hva betyr prinsippet «cuius regio, eius religio»?',
            options: [
              { id: 'a', text: 'At alle undersåtter fritt kunne velge sin egen religion uavhengig av fyrstens tro', isCorrect: false },
              { id: 'b', text: 'At bare katolisisme og lutheranisme var tillatte religioner i riket', isCorrect: false },
              { id: 'c', text: 'At religiøse spørsmål skulle avgjøres av kirkemøter, ikke av verdslige herskere', isCorrect: false },
              { id: 'd', text: 'At hver fyrste bestemte religionen i sitt eget territorium', isCorrect: true },
            ],
            solution: 'Cuius regio, eius religio betyr «hvem som styrer regionen, bestemmer religionen». Prinsippet ble først fastsatt ved Augsburg-freden i 1555 og bekreftet og utvidet ved Westfalerfreden i 1648.',
          },
          {
            id: 'historie-5-2-n-quiz4-q3',
            task: 'Hvilken viktig tanke vokste fram som en konsekvens av religionskrigenes grusomheter?',
            options: [
              { id: 'a', text: 'At statsmakten måtte håndheve religiøs enhet med strengere midler for å unngå fremtidige konflikter', isCorrect: false },
              { id: 'b', text: 'Tanken om religiøs toleranse -- at mennesker med forskjellig tro kan leve side om side', isCorrect: true },
              { id: 'c', text: 'At religion burde skilles helt fra politikk og bli en rent privat sak allerede på 1600-tallet', isCorrect: false },
              { id: 'd', text: 'At et felles europeisk kirkemøte burde samle katolikker og protestanter under én reformert kirke', isCorrect: false },
            ],
            solution: 'Religionskrigenes enorme lidelser lærte Europa at religiøs splittelse kunne føre til total ødeleggelse. Gradvis vokste tanken om religiøs toleranse fram -- en tanke som ble et av grunnlagene for opplysningstiden.',
          },
        ],
      },
    },
    {
      id: 'historie-5-2-n-section5',
      type: 'text',
      content: `## Reformasjonens varige konsekvenser

Reformasjonen er en av de mest avgjørende hendelsene i europeisk historie, og konsekvensene strekker seg langt utover det religiøse.

**Religiøst** ble kristenheten permanent splittet i katolikker og protestanter -- en splittelse som består den dag i dag. Religiøst mangfold ble en realitet i Europa, og tanken om religiøs toleranse vokste gradvis fram.

**Politisk** styrket reformasjonen fyrstenes makt på bekostning av pavens. Nasjonalkirker oppsto med kongen som overhode i stedet for paven. Religionskrigene omformet Europas politiske kart og la grunnlaget for det moderne nasjonalstatssystemet gjennom Westfalerfreden.

**Kulturelt** hadde reformasjonen kanskje de mest overraskende konsekvensene. Luther oversatte Bibelen til tysk, og lignende oversettelser fulgte på andre språk. Dette styrket folkespråkene enormt. Fordi protestantene la vekt på at alle skulle kunne lese Bibelen selv, økte **leseferdigheten** dramatisk i protestantiske områder. Utdanning ble viktigere, og skoler ble grunnlagt over hele Nord-Europa.

Vi kan si at reformasjonen, sammen med renessansen, markerte overgangen fra middelalderen til moderne tid. Den brøt kirkens monopol, styrket nasjonalstatene og la grunnlaget for en verden der religiøst mangfold og individuell tro ble mulig.`,
    },
    {
      id: 'historie-5-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-5-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på reformasjonens varige konsekvenser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-2-n-quiz5-q0',
            task: 'Hvorfor førte reformasjonen til økt leseferdighet i protestantiske områder?',
            options: [
              { id: 'a', text: 'Fordi protestantiske fyrster innførte obligatorisk skolegang for å styrke statens kontroll over befolkningen', isCorrect: false },
              { id: 'b', text: 'Fordi Luther oversatte Bibelen til tysk, og folk ønsket å lese den nye litteraturen', isCorrect: false },
              { id: 'c', text: 'Fordi protestantene la vekt på at alle selv skulle kunne lese Bibelen', isCorrect: true },
              { id: 'd', text: 'Fordi den katolske kirkens motreformasjon skapte et konkurransepress som fremmet utdanning i alle land', isCorrect: false },
            ],
            solution: 'Protestantene mente at forholdet mellom menneske og Gud var direkte, og at alle derfor selv måtte kunne lese Bibelen. Dette krevde leseferdighet, og protestantiske land satset derfor sterkt på utdanning og grunnla mange skoler.',
          },
          {
            id: 'historie-5-2-n-quiz5-q1',
            task: 'Hva var den viktigste politiske konsekvensen av reformasjonen?',
            options: [
              { id: 'a', text: 'Religionskrigene svekket fyrstene og ga kirken en sterkere politisk rolle som mekler', isCorrect: false },
              { id: 'b', text: 'Fyrstenes makt ble styrket på bekostning av pavens, og nasjonalkirker oppsto', isCorrect: true },
              { id: 'c', text: 'Det tysk-romerske riket ble samlet til en sterkere sentralstat under keiseren', isCorrect: false },
              { id: 'd', text: 'Westfalerfreden innførte maktfordeling mellom fyrste, adel og geistlighet i alle protestantiske stater', isCorrect: false },
            ],
            solution: 'Reformasjonen styrket fyrstenes makt på bekostning av pavens. Nasjonalkirker oppsto med kongen som overhode i stedet for paven. Religionskrigene omformet Europas politiske kart og la grunnlaget for det moderne nasjonalstatssystemet.',
          },
          {
            id: 'historie-5-2-n-quiz5-q2',
            task: 'Hvorfor var Luthers bibeloversettelse til tysk kulturelt viktig?',
            options: [
              { id: 'a', text: 'Fordi den var den første trykte boken i Tyskland og dermed revolusjonerte bokindustrien', isCorrect: false },
              { id: 'b', text: 'Fordi den styrket det tyske folkespråket og inspirerte lignende oversettelser i andre land', isCorrect: true },
              { id: 'c', text: 'Fordi den samlet de ulike tyske dialektene til et standardisert skriftspråk som myndighetene tok i bruk', isCorrect: false },
              { id: 'd', text: 'Fordi den inneholdt kommentarer som formidlet humanistisk lærdom til vanlige folk', isCorrect: false },
            ],
            solution: 'Luthers bibeloversettelse til tysk styrket folkespråket enormt. Lignende oversettelser fulgte på andre språk. Dette bidro til at folkespråkene overtok latins posisjon som skriftspråk og styrket utviklingen av nasjonale identiteter.',
          },
        ],
      },
    },
    {
      id: 'historie-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Reformasjonen var den religiøse omveltningen på 1500-tallet som splittet den vestlige kristenheten. Det som begynte som en akademisk debatt om avlatshandelen, endte med å forandre Europa for alltid.

**Nøkkelbegreper du nå kjenner:**
- **Reformasjonen**: Den religiøse omveltningen som splittet kristenheten i katolikker og protestanter (fra 1517)
- **Martin Luther**: Tysk munk og teologiprofessor som startet reformasjonen med sine 95 teser
- **Sola scriptura, sola fide, sola gratia**: Luthers tre prinsipper -- Skriften alene, Troen alene, Nåden alene
- **Protestantisme**: Fellesbetegnelsen på kirkene som oppsto etter reformasjonen (lutheranisme, kalvinisme, anglikanisme)
- **Trettiårskrigen**: Europeisk storkrig (1618--1648) som startet som religionskonflikt
- **Westfalerfreden**: Fredsavtalen fra 1648 som la grunnlaget for det moderne statssystemet

**Det viktigste du tar med deg:**
Reformasjonen brøt den katolske kirkens monopol på kristendommen, styrket nasjonalstatene og fremmet leseferdighet og utdanning. Men den utløste også over hundre år med ødeleggende religionskriger. Religionskrigenes grusomheter lærte Europa at religiøs toleranse var nødvendig -- en leksjon som la grunnlaget for opplysningstiden.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.3 NARRATIV: Oppdagelsesreisene og tidlig kolonialisme
// ============================================================================

export const CHAPTER_HISTORIE_5_3_NARRATIV: TextbookChapter = {
  id: 'historie-5-3-narrativ',
  courseId: 'historie',
  chapterNumber: '5.3',
  title: 'Oppdagelsesreisene og tidlig kolonialisme',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om europeerne som seilte ut i det ukjente, og om de enorme konsekvensene møtet mellom verdener fikk.',
  estimatedMinutes: 45,
  competenceGoals: ['kolonimakter og konsekvenser'],
  linkedChapterId: 'historie-5-3',
  content: [
    {
      id: 'historie-5-3-n-intro',
      type: 'text',
      content: `## Ut i det ukjente

Tenk deg at du står ved kysten av Portugal på slutten av 1400-tallet og ser utover Atlanterhavet. Bak deg ligger et Europa du kjenner -- byer, kirker, handelsveier. Foran deg ligger et enormt hav, og ingen aner hva som finnes på den andre siden. Kanskje et stup der vannet faller ut i ingenting? Kanskje sjømonstre? Kanskje -- kanskje -- en vei til de sagnomsuste rikdommene i Asia?

Det er dette øyeblikket som innleder en av verdenshistoriens mest dramatiske perioder: **oppdagelsenes tidsalder**. Fra slutten av 1400-tallet begynte europeiske sjøfarere å seile ut i ukjente havområder, og i løpet av bare noen tiår forandret de verdenskartet for alltid.

Men la oss stoppe opp ved selve begrepet "oppdagelsesreiser". Det er et ord som reflekterer et europeisk perspektiv. Amerika, Afrika og Asia var jo allerede "oppdaget" -- av de millionene av mennesker som bodde der. Det europeerne oppdaget, var at verden var større enn de hadde trodd. Det urbefolkningene oppdaget, var at fremmede med våpen og sykdommer var på vei. Samme type kildekritisk blikk kan for øvrig også rettes mot begreper som "renessanse" og "reformasjon", som også gjenspeiler bestemte perspektiver og verdivurderinger.`,
    },
    {
      id: 'historie-5-3-n-section1',
      type: 'text',
      content: `## Hvorfor dro europeerne ut?

Årsakene til at europeerne begynte å seile ut i verden, var sammensatte. La oss ta dem én for én.

For det første handlet det om **penger**. Krydder fra Asia -- pepper, kanel, muskat, nellik -- var ettertraktet luksusvare i Europa. De ble brukt til å konservere mat, lage medisiner og parfyme, og de var bokstavelig talt verdt sin vekt i gull. Men handelen med Asia hadde lenge gått over land, gjennom Midtøsten. Da **osmannerne erobret Konstantinopel i 1453** og kontrollerte de viktigste handelsrutene, ble det vanskeligere og dyrere for europeerne å handle med Østen. De trengte en sjøvei.

For det andre handlet det om **teknologi**. Nye oppfinnelser som **kompasset** (som kom fra Kina via araberne), bedre sjøkart og nye skipstyper som **karavellen** -- et lite, smidig skip som kunne seile mot vinden -- gjorde lange sjøreiser mulig for første gang.

For det tredje handlet det om **religion**. Europeerne ville spre kristendommen til nye folkeslag. Korsfareråndene fra middelalderen var ikke helt borte, og misjon var en viktig motivasjon for mange.

Og for det fjerde handlet det om **eventyrlyst, ære og konkurranse**. Konger og fyrster ville vise sin makt, oppdagere drømte om rikdom og berømmelse, og de europeiske statene konkurrerte med hverandre om å kontrollere den lukrative handelen.

To nasjoner ledet an i denne ekspansjonen: **Portugal** og **Spania**.`,
    },
    {
      id: 'historie-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på årsakene til oppdagelsesreisene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-3-n-quiz1-q0',
            task: 'Hva var en viktig årsak til at europeerne søkte sjøveien til Asia?',
            options: [
              { id: 'a', text: 'Venetianske kjøpmenn blokkerte andre europeeres tilgang til krydderhandelen i Middelhavet', isCorrect: false },
              { id: 'b', text: 'Osmannernes erobring av Konstantinopel i 1453 gjorde landveien vanskeligere', isCorrect: true },
              { id: 'c', text: 'Svartedauden hadde ødelagt de tradisjonelle handelsrutene gjennom Sentral-Asia', isCorrect: false },
              { id: 'd', text: 'Mongolrikets sammenbrudd på 1300-tallet stengte Silkeveien for europeiske kjøpmenn', isCorrect: false },
            ],
            solution: 'Osmannernes erobring av Konstantinopel i 1453 ga dem kontroll over de viktigste handelsrutene til Asia. Dette gjorde det vanskeligere og dyrere for europeerne å handle med Østen, og drev dem til å lete etter sjøveien.',
          },
          {
            id: 'historie-5-3-n-quiz1-q1',
            task: 'Hvilke fire hovedmotivasjoner drev europeerne ut på oppdagelsesreiser?',
            options: [
              { id: 'a', text: 'Handel, militær ekspansjon, vitenskapelig nysgjerrighet og diplomati', isCorrect: false },
              { id: 'b', text: 'Penger/handel, teknologi, religion og eventyrlyst/ære/konkurranse', isCorrect: true },
              { id: 'c', text: 'Overbefolkning, religiøs forfølgelse, nye kartografiske oppdagelser og kongelig prestisje', isCorrect: false },
              { id: 'd', text: 'Tilgang til gull, strategiske militærbaser, misjonsvirksomhet og flyktningestrømmer', isCorrect: false },
            ],
            solution: 'Europeerne ble drevet av ønsket om rikdom og handel (særlig krydder), ny teknologi som muliggjorde sjøreiser, ønsket om å spre kristendommen, og eventyrlyst, ære og konkurranse mellom stater.',
          },
          {
            id: 'historie-5-3-n-quiz1-q2',
            task: 'Hva var en karavell, og hvorfor var den viktig?',
            options: [
              { id: 'a', text: 'Et stort handelsskip med kanoner som portugiserne brukte til å dominere handelsrutene i Det indiske hav', isCorrect: false },
              { id: 'b', text: 'En forbedret versjon av kompasset som viste breddegrad i tillegg til retning', isCorrect: false },
              { id: 'c', text: 'Et lite, smidig skip som kunne seile mot vinden og muliggjorde lange sjøreiser', isCorrect: true },
              { id: 'd', text: 'En type galei med årer og seil som ble brukt langs Afrikas kyst', isCorrect: false },
            ],
            solution: 'Karavellen var en ny type skip som var lite og smidig nok til å seile mot vinden. Sammen med kompasset og bedre sjøkart var den en av de teknologiske nyvinningene som gjorde de lange oppdagelsesreisene mulige.',
          },
        ],
      },
    },
    {
      id: 'historie-5-3-n-section2',
      type: 'text',
      content: `## Portugal viser vei -- og Columbus seiler vest

**Portugal** var det lille landet som startet det hele. Prins **Henrik Sjøfareren** etablerte en sjøfartsskole og finansierte ekspedisjoner langs Afrikas kyst allerede fra tidlig på 1400-tallet. Portugiserne jobbet seg systematisk sørover langs Afrika.

I 1488 rundet **Bartolomeu Dias** Afrikas sørligste punkt, **Kapp det gode håp**, og beviste at det var mulig å seile rundt Afrika. Ti år senere, i 1498, fullførte **Vasco da Gama** reisen helt til **India**. Sjøveien til Asia var funnet! Portugiserne etablerte handelsposter langs hele ruten -- i Afrika, i Goa i India, i Malakka i Sørøst-Asia, og i Macao i Kina. De bygde opp et enormt handelsimperium basert på krydderhandelen.

Men mens portugiserne seilte østover rundt Afrika, hadde noen en annen idé. Den italienske sjøfareren **Kristoffer Columbus** (1451--1506) mente han kunne nå Asia ved å seile **vestover** over Atlanterhavet. Han fikk støtte fra de spanske monarkene **Ferdinand og Isabella**, og i august 1492 satte han seil med tre skip.

Den 12. oktober 1492 nådde Columbus en øy i Karibia som han kalte San Salvador. Han trodde han hadde nådd Asia og kalte derfor urbefolkningen **"indianere"** -- et navn som hang ved i århundrer etterpå. Columbus foretok fire reiser til det han trodde var Asia, men innså aldri at han hadde funnet et helt nytt kontinent. Det var en annen italiener, **Amerigo Vespucci**, som forsto at dette var en "ny verden". Kontinentet ble oppkalt etter ham -- **Amerika**.`,
    },
    {
      id: 'historie-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-5-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på Portugal, Spania og Columbus:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-3-n-quiz2-q0',
            task: 'Hva trodde Columbus at han hadde funnet da han nådde Karibia i 1492?',
            options: [
              { id: 'a', text: 'Et ukjent kontinent som han rapporterte som en «ny verden» til de spanske monarkene', isCorrect: false },
              { id: 'b', text: 'Øyer utenfor Afrikas vestkyst som portugiserne allerede kjente til', isCorrect: false },
              { id: 'c', text: 'Asia -- han trodde han hadde seilt til utkanten av Østen', isCorrect: true },
              { id: 'd', text: 'En vestlig del av India, noe som forklarer hvorfor han kalte området Vestindia', isCorrect: false },
            ],
            solution: 'Columbus trodde hele livet at han hadde nådd Asia ved å seile vestover. Han kalte urbefolkningen "indianere" fordi han trodde han var i nærheten av India. Det var Amerigo Vespucci som forsto at dette var et nytt kontinent.',
          },
          {
            id: 'historie-5-3-n-quiz2-q1',
            task: 'Hvem fullførte den første sjøreisen til India rundt Afrika i 1498?',
            options: [
              { id: 'a', text: 'Bartolomeu Dias', isCorrect: false },
              { id: 'b', text: 'Ferdinand Magellan', isCorrect: false },
              { id: 'c', text: 'Pedro Álvares Cabral', isCorrect: false },
              { id: 'd', text: 'Vasco da Gama', isCorrect: true },
            ],
            solution: 'Vasco da Gama fullførte reisen helt til India i 1498 ved å seile rundt Afrika. Bartolomeu Dias hadde rundet Kapp det gode håp ti år tidligere i 1488, men det var da Gama som nådde helt fram.',
          },
          {
            id: 'historie-5-3-n-quiz2-q2',
            task: 'Hvorfor ble det nye kontinentet kalt «Amerika» og ikke oppkalt etter Columbus?',
            options: [
              { id: 'a', text: 'Fordi Columbus døde før kontinentet ble offisielt kartlagt og navngitt', isCorrect: false },
              { id: 'b', text: 'Fordi Amerigo Vespucci var den første som forsto at det var et nytt kontinent, ikke Asia', isCorrect: true },
              { id: 'c', text: 'Fordi en tysk kartograf tilfeldig valgte navnet Amerika uten å kjenne til Columbus\' reiser', isCorrect: false },
              { id: 'd', text: 'Fordi de spanske monarkene ønsket å skjule Columbus\' rolle for å unngå portugisiske krav', isCorrect: false },
            ],
            solution: 'Columbus innså aldri at han hadde funnet et nytt kontinent -- han trodde han var i Asia. Det var italieneren Amerigo Vespucci som forsto at dette var en helt ny verden, og kontinentet ble oppkalt etter ham.',
          },
        ],
      },
    },
    {
      id: 'historie-5-3-n-section3',
      type: 'text',
      content: `## Det columbianske byttet -- da verdener møttes

Møtet mellom Europa og Amerika satte i gang noe vi kaller **det columbianske byttet** -- en massiv utveksling av planter, dyr, sykdommer og mennesker mellom den "gamle" og "nye" verden. Konsekvensene var enorme -- og svært ulikt fordelt.

**Fra Amerika til Europa** kom planter som forandret europeisk kosthold for alltid: **poteter**, **mais**, **tomater**, **kakao**, **tobakk** og **chili**. Poteten alene ble en av Europas viktigste matvarer og bidro til betydelig befolkningsvekst i århundrene som fulgte. Også sykdommer kan ha krysset havet den andre veien -- mange forskere mener at **syfilis** ble brakt til Europa fra Amerika, selv om dette fortsatt er omdiskutert. Den enorme tilstrømningen av sølv fra Amerika skapte dessuten kraftig **inflasjon** i Europa -- den såkalte prisrevolusjonen -- som rammet mange europeere hardt.

**Fra Europa til Amerika** kom **hvete**, **ris**, **sukker**, **hester**, **kuer** og **griser**. Hesten forandret mange urfolks levesett totalt -- tenk på præriefolkene i Nord-Amerika som ble ryttere.

Men det mest katastrofale som krysset Atlanterhavet, var usynlig: **sykdommer**. Europeerne brakte med seg **kopper**, **meslinger**, **influensa** og andre sykdommer som urbefolkningen i Amerika aldri hadde vært utsatt for. De hadde ingen immunitet. Resultatet var en demografisk katastrofe uten sidestykke i verdenshistorien. Noen forskere anslår at opptil **90 prosent av urbefolkningen** i Amerika døde av europeiske sykdommer i løpet av det første århundret etter kontakten. Hele sivilisasjoner ble utslettet, ikke primært av sverd og kuler, men av virus og bakterier.`,
    },
    {
      id: 'historie-5-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-5-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på det columbianske byttet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-3-n-quiz3-q0',
            task: 'Hva var den mest katastrofale konsekvensen av det columbianske byttet for urbefolkningen i Amerika?',
            options: [
              { id: 'a', text: 'Tvangsarbeid i spanske gruver og på plantasjer som desimerte arbeidsstyrken', isCorrect: false },
              { id: 'b', text: 'At europeiske sykdommer drepte opptil 90 prosent av urbefolkningen', isCorrect: true },
              { id: 'c', text: 'Militære erobringer som systematisk ødela urbefolkningens byer og infrastruktur', isCorrect: false },
              { id: 'd', text: 'Tvangsomvendelse til kristendommen som brøt ned urfolkenes kulturelle identitet og samfunnsstrukturer', isCorrect: false },
            ],
            solution: 'Europeiske sykdommer som kopper og meslinger var katastrofale for urbefolkningen, som manglet immunitet. Opptil 90 prosent kan ha dødd i løpet av det første århundret etter kontakten -- den verste demografiske katastrofen i verdenshistorien.',
          },
          {
            id: 'historie-5-3-n-quiz3-q1',
            task: 'Hva menes med «det columbianske byttet»?',
            options: [
              { id: 'a', text: 'Handelsavtalene som ble inngått mellom spanske konkvistadorer og aztekiske herskere', isCorrect: false },
              { id: 'b', text: 'Den massive utvekslingen av planter, dyr, sykdommer og mennesker mellom Europa og Amerika', isCorrect: true },
              { id: 'c', text: 'Den transatlantiske handelen med krydder, gull og sølv som knyttet Europa til den nye verden', isCorrect: false },
              { id: 'd', text: 'Overføringen av europeisk teknologi og våpen til urbefolkningen i bytte mot landområder', isCorrect: false },
            ],
            solution: 'Det columbianske byttet var den massive utvekslingen av planter, dyr, sykdommer og mennesker mellom den "gamle" og "nye" verden etter 1492. Konsekvensene var enorme og svært ulikt fordelt mellom Europa og Amerika.',
          },
          {
            id: 'historie-5-3-n-quiz3-q2',
            task: 'Hvilken matvare fra Amerika ble en av Europas viktigste og bidro til stor befolkningsvekst?',
            options: [
              { id: 'a', text: 'Mais', isCorrect: false },
              { id: 'b', text: 'Tobakk', isCorrect: false },
              { id: 'c', text: 'Poteten', isCorrect: true },
              { id: 'd', text: 'Tomaten', isCorrect: false },
            ],
            solution: 'Poteten kom fra Amerika til Europa og ble en av de viktigste matvarene. Den bidro til betydelig befolkningsvekst i Europa i århundrene som fulgte fordi den ga mye næring fra lite jord.',
          },
        ],
      },
    },
    {
      id: 'historie-5-3-n-section4',
      type: 'text',
      content: `## Konkvistadorene -- erobringen av Amerika

Etter Columbus fulgte **konkvistadorene** -- spanske erobrere som la under seg store områder i Amerika med rå makt.

**Hernán Cortés** ankom Mexico i 1519 med noen hundre soldater. Han møtte **Aztekerriket**, et mektig imperium med millioner av innbyggere, en storslått hovedstad -- **Tenochtitlán** -- og avansert kultur. Aztekerriket var selv bygd gjennom erobring: aztekerne hadde lagt under seg en rekke nabofolk, krevde inn tributt og praktiserte menneskeofring i stor skala som del av sin religion. Mange av de underlagte folkene næret et sterkt hat mot aztekerne. Likevel klarte Cortés å erobre riket innen 1521. Hvordan var det mulig?

Flere faktorer spilte sammen. Spanjolene hadde **teknologisk overlegenhet** med stålvåpen, rustninger og hester. Men like viktig var at Cortés allierte seg med **folkegrupper som var undertrykt av aztekerne** -- som tlaxcalanerne -- og som så spanjolene som en mulighet til å frigjøre seg fra aztekisk herredømme. Og sykdommene -- særlig kopper -- herjet allerede i befolkningen.

**Francisco Pizarro** brukte lignende metoder da han erobret **Inkariket** i Peru i 1532--1533. Han fanget Inkakongen Atahualpa og krevde en enorm løsepenge i gull. Da han fikk den, henrettet han kongen likevel.

Etter erobringene ble urbefolkningen tvunget til arbeid i **gruver** og på **plantasjer**. Sølv og gull strømmet til Spania, som ble Europas mektigste stat. Men rikdommen kom med en stor menneskelig kostnad.

Den spanske munken **Bartolomé de las Casas**, som selv hadde oppholdt seg i Amerika, ble en viktig kritiker av overgrepene. I sin *Kort beretning om ødeleggelsen av Vestindia* (1552) beskrev han grusomhetene i detalj og appellerte til den spanske kongen om å stanse dem. De las Casas var en av de første europeerne som talte urbefolkningens sak -- selv om han fortsatt så dem gjennom europeiske øyne og ville kristne dem "med mildhet".

**Kolonialisme** -- systemet der en stat etablerer politisk og økonomisk kontroll over et område utenfor sine grenser og kontrollerer dets ressurser -- var i ferd med å bli et av verdenshistoriens mest gjennomgripende fenomener.`,
    },
    {
      id: 'historie-5-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-5-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på konkvistadorene og erobringen av Amerika:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-3-n-quiz4-q0',
            task: 'Hvordan klarte Hernán Cortés å erobre Aztekerriket med bare noen hundre soldater?',
            options: [
              { id: 'a', text: 'Han beleiret Tenochtitlán i flere år til aztekerne ga opp på grunn av sult og vannmangel', isCorrect: false },
              { id: 'b', text: 'Gjennom teknologisk overlegenhet, allianser med undertrykte folkegrupper og sykdommer som svekket aztekerne', isCorrect: true },
              { id: 'c', text: 'Han utnyttet en intern borgerkrig i Aztekerriket og støttet den ene siden mot den andre', isCorrect: false },
              { id: 'd', text: 'Aztekerne var allerede svekket av langvarig tørke og hungersnød da spanjolene ankom', isCorrect: false },
            ],
            solution: 'Cortés\' erobring skyldtes flere faktorer: stålvåpen, rustninger og hester ga teknologisk overlegenhet, han allierte seg med folkegrupper som var undertrykt av aztekerne, og europeiske sykdommer -- særlig kopper -- herjet allerede i befolkningen.',
          },
          {
            id: 'historie-5-3-n-quiz4-q1',
            task: 'Hvem var Bartolomé de las Casas, og hva var hans betydning?',
            options: [
              { id: 'a', text: 'En spansk biskop som forsvarte konkvistadorenes erobringer som nødvendige for å kristne urbefolkningen', isCorrect: false },
              { id: 'b', text: 'En dominikanermunk som argumenterte for at urbefolkningen manglet sjel og derfor kunne underlegges spansk styre', isCorrect: false },
              { id: 'c', text: 'En spansk munk som kritiserte overgrepene mot urbefolkningen og talte deres sak', isCorrect: true },
              { id: 'd', text: 'En spansk jurist som utformet lovene for encomienda-systemet i de spanske koloniene', isCorrect: false },
            ],
            solution: 'Bartolomé de las Casas var en spansk munk som hadde oppholdt seg i Amerika. Han ble en av de første europeerne som talte urbefolkningens sak og beskrev grusomhetene mot dem i sin bok, selv om han fortsatt ville kristne dem.',
          },
          {
            id: 'historie-5-3-n-quiz4-q2',
            task: 'Hva er kolonialisme?',
            options: [
              { id: 'a', text: 'Et handelssystem der europeiske stater opprettet likeverdige handelsavtaler med oversjøiske riker', isCorrect: false },
              { id: 'b', text: 'En merkantilistisk økonomisk politikk rettet mot å øke eksporten av ferdigvarer til andre europeiske land', isCorrect: false },
              { id: 'c', text: 'Et misjonssystem der den katolske kirken sendte ordener til fjerne land for å omvende befolkningen', isCorrect: false },
              { id: 'd', text: 'Et system der en stat etablerer politisk og økonomisk kontroll over et område utenfor sine grenser', isCorrect: true },
            ],
            solution: 'Kolonialisme er systemet der en stat etablerer politisk og økonomisk kontroll over et område utenfor sine grenser og kontrollerer dets ressurser. Det ble et av verdenshistoriens mest gjennomgripende fenomener fra 1500-tallet.',
          },
        ],
      },
    },
    {
      id: 'historie-5-3-n-section5',
      type: 'text',
      content: `## En verden forandret for alltid

Oppdagelsesreisene og den tidlige kolonialismen forandret verden på måter vi fortsatt lever med i dag. Men konsekvensene var radikalt forskjellige avhengig av hvem du var.

**For urbefolkningen i Amerika** var det en katastrofe. Opptil 90 prosent døde av sykdommer. De som overlevde, mistet sitt politiske selvstyre, sine tradisjonelle samfunnsstrukturer og mye av sin kultur. De ble tvunget til arbeid i gruver og på plantasjer, og forsøkt omvendt til kristendommen.

**For europeerne** var det en periode med enorm berikelse. Nye matvarer som poteter og mais bidro til befolkningsvekst. Rikdom fra koloniene styrket europeiske stater. Ny kunnskap om verden utfordret gamle forestillinger og bidro til vitenskapelig fremgang.

**For Afrika** fikk europeisk ekspansjon også alvorlige konsekvenser. Allerede fra 1500-tallet begynte den **transatlantiske slavehandelen**, der millioner av afrikanere ble tvangssendt til Amerika for å arbeide på plantasjer og i gruver. Denne handelen fikk katastrofale følger for afrikanske samfunn og varte i over tre hundre år.

**For verden som helhet** markerte oppdagelsesreisene begynnelsen på en global sammenheng som bare har økt siden. For første gang ble alle kontinenter knyttet sammen gjennom handel, migrasjon og kulturutveksling. Det var begynnelsen på **globaliseringen** -- med alt det innebar av muligheter og lidelse.

Begrepet "oppdagelsesreiser" minner oss om at historiske hendelser ser forskjellige ut avhengig av hvem som forteller historien. Et fullstendig bilde krever at vi tar med ulike perspektiver -- og anerkjenner at det som var rikdom og fremskritt for noen, var ødeleggelse og lidelse for andre.`,
    },
    {
      id: 'historie-5-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-5-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på konsekvenser og perspektiver:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-3-n-quiz5-q0',
            task: 'Hvorfor er begrepet «oppdagelsesreiser» omdiskutert?',
            options: [
              { id: 'a', text: 'Fordi mange av reisene var finansiert av private investorer, ikke av stater som ønsket å oppdage nye land', isCorrect: false },
              { id: 'b', text: 'Fordi begrepet reflekterer et europeisk perspektiv -- områdene var allerede «oppdaget» av folkene som bodde der', isCorrect: true },
              { id: 'c', text: 'Fordi europeerne primært fulgte handelsruter som allerede var kjent av arabiske og kinesiske sjøfarere', isCorrect: false },
              { id: 'd', text: 'Fordi begrepet overdriver europeernes rolle, ettersom nordboere allerede hadde vært i Amerika på 1000-tallet', isCorrect: false },
            ],
            solution: 'Begrepet "oppdagelsesreiser" er omdiskutert fordi det ser hendelsene fra et europeisk perspektiv. Amerika, Afrika og Asia var allerede hjem for millioner av mennesker med egne sivilisasjoner.',
          },
          {
            id: 'historie-5-3-n-quiz5-q1',
            task: 'Hva var den transatlantiske slavehandelen?',
            options: [
              { id: 'a', text: 'Handelen med sukker, tobakk og bomull fra de amerikanske koloniene til europeiske markeder', isCorrect: false },
              { id: 'b', text: 'Tvangssending av millioner av afrikanere til Amerika for å arbeide på plantasjer og i gruver', isCorrect: true },
              { id: 'c', text: 'Den trekanthandelen der europeiske varer ble byttet mot afrikanske råvarer som gull og elfenbein', isCorrect: false },
              { id: 'd', text: 'Portugisernes transport av arbeidere fra India og Sørøst-Asia til de amerikanske koloniene', isCorrect: false },
            ],
            solution: 'Den transatlantiske slavehandelen begynte allerede fra 1500-tallet. Millioner av afrikanere ble tvangssendt til Amerika for å arbeide på plantasjer og i gruver. Denne handelen fikk katastrofale følger for afrikanske samfunn og varte i over tre hundre år.',
          },
          {
            id: 'historie-5-3-n-quiz5-q2',
            task: 'Hvorfor markerer oppdagelsesreisene begynnelsen på globaliseringen?',
            options: [
              { id: 'a', text: 'Fordi europeisk kolonialisme skapte et felles politisk system som knyttet alle verdensdeler under europeisk styre', isCorrect: false },
              { id: 'b', text: 'Fordi den merkantilistiske økonomien skapte et verdensomspennende system av handelsmonopoler', isCorrect: false },
              { id: 'c', text: 'Fordi kristendommens spredning skapte et felles kulturelt rammeverk på tvers av kontinenter', isCorrect: false },
              { id: 'd', text: 'Fordi alle kontinenter for første gang ble knyttet sammen gjennom handel, migrasjon og kulturutveksling', isCorrect: true },
            ],
            solution: 'Oppdagelsesreisene markerte begynnelsen på globaliseringen fordi alle kontinenter for første gang ble knyttet sammen gjennom handel, migrasjon og kulturutveksling -- med alt det innebar av muligheter og lidelse.',
          },
        ],
      },
    },
    {
      id: 'historie-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Oppdagelsesreisene var europeernes utforskning og erobring av verden fra slutten av 1400-tallet. Drevet av ønsket om rikdom, handel, religion og ære, seilte portugisere og spanjoler ut i det ukjente og forandret verden for alltid.

**Nøkkelbegreper du nå kjenner:**
- **Oppdagelsesreisene**: Europeiske sjøreiser fra ca. 1450--1600 som førte til kartlegging og kolonisering av store deler av verden
- **Vasco da Gama**: Portugisisk sjøfarer som nådde India i 1498 via sjøveien rundt Afrika
- **Kristoffer Columbus**: Italiensk sjøfarer i spansk tjeneste som nådde Amerika i 1492, men trodde han var i Asia
- **Det columbianske byttet**: Utvekslingen av planter, dyr og sykdommer mellom Europa og Amerika
- **Konkvistadorer**: Spanske erobrere som la under seg Azteker- og Inkariket
- **Kolonialisme**: System der en stat kontrollerer og utnytter et område utenfor sine grenser

**Det viktigste du tar med deg:**
Oppdagelsesreisene markerte begynnelsen på globaliseringen og knyttet verdens kontinenter sammen. Men denne forbindelsen hadde svært ulike konsekvenser for ulike folkegrupper -- fra berikelse og vekst for europeerne, til demografisk katastrofe og undertrykkelse for urbefolkningene i Amerika.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.4 NARRATIV: Makt og samfunn i tidlig nytid
// ============================================================================

export const CHAPTER_HISTORIE_5_4_NARRATIV: TextbookChapter = {
  id: 'historie-5-4-narrativ',
  courseId: 'historie',
  chapterNumber: '5.4',
  title: 'Makt og samfunn i tidlig nytid',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om konger som samlet all makt, og om et Europa der din plass i livet var bestemt fra fødselen.',
  estimatedMinutes: 40,
  competenceGoals: ['makt fra middelalderen til tidlig nytid'],
  linkedChapterId: 'historie-5-4',
  content: [
    {
      id: 'historie-5-4-n-intro',
      type: 'text',
      content: `## Kongen er alt

Tenk deg et Europa der én person bestemmer alt. Lovene, skattene, hvem som skal leve og hvem som skal dø, krig og fred -- alt avgjøres av én mann. Ingen kan si ham imot. Ingen kan stille ham til ansvar. Han står bare til ansvar overfor Gud.

Dette er **eneveldet** -- eller **absolutismen** -- den styreformen som dominerte Europa på 1600- og 1700-tallet. Men for å forstå hvordan det ble slik, må vi se på hva som kom før.

I middelalderen var makten i Europa **spredt**. Kongen var øverst i teorien, men i praksis måtte han dele makten med **adelen** og **kirken**. Adelen kontrollerte sine len med stor grad av selvstendighet. De hadde egne hærer, egne domstoler og egne inntekter. Kongen var avhengig av adelens støtte for å føre krig og styre riket. Dette systemet kalles **føydalisme**.

Men fra 1500-tallet begynte ting å forandre seg. Kongene bygde opp profesjonelle **byråkratier** med lojale embetsmenn som styrte på kongens vegne. De skapte **stående hærer** som var lojale mot kongen, ikke mot lokale adelsmenn. De utviklet bedre **skattesystemer** som ga kongen inntekter direkte fra befolkningen. Steg for steg samlet kongene all makt i sine egne hender.`,
    },
    {
      id: 'historie-5-4-n-section1',
      type: 'text',
      content: `## Ludvig XIV -- Solkongen

Ingen personifiserer eneveldet bedre enn **Ludvig XIV** av Frankrike, som regjerte fra 1643 til 1715 -- i hele 72 år. Han skal ha sagt de berømte ordene *"L'État, c'est moi"* -- *"Staten, det er meg."* Og han mente det.

Ludvig bygde det praktfulle slottet **Versailles** utenfor Paris. Men Versailles var mye mer enn et vakkert palass. Det var et **politisk instrument** -- et maktens teater der alt var nøye regissert for å styrke kongens posisjon.

Ludvig samlet hele den franske adelen ved hoffet i Versailles. Der måtte de bo, kle seg i dyre klær, delta i endeløse seremonier og konkurrere om kongens gunst. Selv kongens morgentoalett -- det øyeblikket han sto opp og kledde seg -- var en seremoni der utvalgte adelsmenn fikk æren av å delta. Å rekke kongen skjorten var en stor ære.

Hva oppnådde Ludvig med dette? For det første fikk han **kontroll**: Han kunne overvåke adelen og hindre at de bygde opp makt i provinsene. For det andre skapte han **avhengighet**: Adelen konkurrerte om kongens gunst og stillinger ved hoffet, noe som ga kongen enormt mye makt. For det tredje tappet det dyre hofflivet adelen for **ressurser** som ellers kunne blitt brukt til å finansiere private hærer eller opprør. Og for det fjerde demonstrerte slottets enorme prakt kongens makt og Frankrikes storhet for **hele Europa**.

Ludvig førte en aktiv utenrikspolitikk med mange kriger for å utvide Frankrikes grenser. Han fremmet fransk kultur og industri gjennom **merkantilisme**. I 1685 opphevet han **Nantes-ediktet**, som hadde sikret hugenottenes religionsfrihet, og innledet en systematisk forfølgelse av de franske protestantene. Hundretusenvis av hugenotter flyktet fra Frankrike, noe som var et betydelig tap av kompetent arbeidskraft og kapital.`,
    },
    {
      id: 'historie-5-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-5-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på eneveldet og Ludvig XIV:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-4-n-quiz1-q0',
            task: 'Hvorfor samlet Ludvig XIV adelen ved hoffet i Versailles?',
            options: [
              { id: 'a', text: 'For å skape et kulturelt sentrum der franske kunstnere og intellektuelle kunne arbeide under kongelig beskyttelse', isCorrect: false },
              { id: 'b', text: 'For å kontrollere adelen, gjøre dem avhengige av hans gunst og hindre dem fra å bygge opp makt i provinsene', isCorrect: true },
              { id: 'c', text: 'For å holde adelen samlet som en effektiv rådgivende forsamling for å styre det store riket', isCorrect: false },
              { id: 'd', text: 'For å beskytte adelen fra folkelige opprør i Paris og de urolige provinsene', isCorrect: false },
            ],
            solution: 'Ved å samle adelen ved hoffet i Versailles oppnådde Ludvig XIV kontroll over adelen, skapte avhengighet av kongens gunst, tappet dem for ressurser gjennom det dyre hofflivet, og demonstrerte sin makt for hele Europa.',
          },
          {
            id: 'historie-5-4-n-quiz1-q1',
            task: 'Hva kjennetegner eneveldet (absolutismen) som styreform?',
            options: [
              { id: 'a', text: 'Kongen har den øverste makten, men deler den med et rådgivende adelskammer som kan nedlegge veto', isCorrect: false },
              { id: 'b', text: 'Kongen styrer med støtte fra stenderforsamlinger som representerer adel, geistlighet og borgerskap', isCorrect: false },
              { id: 'c', text: 'Kongen har all makt og står bare til ansvar overfor Gud', isCorrect: true },
              { id: 'd', text: 'Kongen har militær og utenrikspolitisk makt, mens kirken kontrollerer rettsvesenet og utdanningen', isCorrect: false },
            ],
            solution: 'Eneveldet er en styreform der kongen har uinnskrenket makt. Han lager lover, utnevner embetsmenn og styrer uten å måtte spørre noen. Han står bare til ansvar overfor Gud -- ingen kan stille ham til ansvar.',
          },
          {
            id: 'historie-5-4-n-quiz1-q2',
            task: 'Hva skjedde da Ludvig XIV opphevet Nantes-ediktet i 1685?',
            options: [
              { id: 'a', text: 'Hugenottene konverterte til katolisismen og ble integrert i det franske samfunnet', isCorrect: false },
              { id: 'b', text: 'Hundretusenvis av hugenotter flyktet fra Frankrike, noe som var et tap av kompetent arbeidskraft', isCorrect: true },
              { id: 'c', text: 'Det utløste en ny religionskrig mellom katolikker og protestanter i Frankrike', isCorrect: false },
              { id: 'd', text: 'De europeiske protestantiske statene erklærte krig mot Frankrike for å forsvare hugenottenes rettigheter', isCorrect: false },
            ],
            solution: 'Da Ludvig XIV opphevet Nantes-ediktet, som hadde sikret hugenottenes religionsfrihet, innledet han en systematisk forfølgelse av franske protestanter. Hundretusenvis flyktet, og Frankrike mistet verdifull arbeidskraft og kapital.',
          },
        ],
      },
    },
    {
      id: 'historie-5-4-n-section2',
      type: 'text',
      content: `## Enevelde i Danmark-Norge

I 1660 skjedde noe dramatisk i Danmark-Norge. Kong **Frederik III** gjennomførte det som i praksis var et **statskupp** og innførte eneveldet.

Bakgrunnen var en tapt krig mot Sverige som hadde tømt statskassen. Adelen, som hadde privilegier som skattefrihet, nektet å bidra mer. Frederik III utnyttet situasjonen ved å alliere seg med **borgerskapet** -- kjøpmenn og håndverkere i byene -- mot adelen. Borgerskapet var lei av adelens privilegier og støttet en sterkere kongemakt.

I 1665 ble **Kongeloven** vedtatt -- Europas eneste nedskrevne eneveldige forfatning. Den ga kongen nesten ubegrenset makt: *"Kongen alene skal have den høieste Magt og Myndighed til at giøre Love og Forordninger efter sin egen gode Villie og Velbehag."* Kongen kunne lage lover, utnevne og avsette embetsmenn, og skulle *"ingen anden Lov at være undergivet end Guds Lov allene."*

Tenk over hva dette betyr: All lovgivende, utøvende og dømmende makt var samlet hos én person. Ingen folkerepresentasjon, ingen maktfordeling, ingen kontrollmekanismer. Bare kongen og Gud.

Eneveldet i Danmark-Norge varte til **1814 i Norge** (da vi fikk Grunnloven) og **1849 i Danmark** (da Danmark fikk en demokratisk grunnlov). I denne perioden ble statsstyret modernisert med et sentralt byråkrati, men den vanlige befolkningen hadde absolutt ingen politisk innflytelse.`,
    },
    {
      id: 'historie-5-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-5-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på eneveldet i Danmark-Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-4-n-quiz2-q0',
            task: 'Hva var spesielt med Kongeloven av 1665?',
            options: [
              { id: 'a', text: 'Den formaliserte samarbeidet mellom kongen og stenderforsamlingen i et konstitusjonelt monarki', isCorrect: false },
              { id: 'b', text: 'Den var en arvefølgelov som sikret at kongeriket forble samlet under én dynastisk linje', isCorrect: false },
              { id: 'c', text: 'Den var Europas eneste nedskrevne eneveldige forfatning og ga kongen nesten ubegrenset makt', isCorrect: true },
              { id: 'd', text: 'Den kodifiserte adelens og geistlighetens privilegier og ga dem vetorett mot kongens beslutninger', isCorrect: false },
            ],
            solution: 'Kongeloven av 1665 var unik i Europa fordi den var den eneste skriftlige eneveldige forfatningen. Den ga den danske kongen all lovgivende, utøvende og dømmende makt, og sa at han bare sto til ansvar overfor Gud.',
          },
          {
            id: 'historie-5-4-n-quiz2-q1',
            task: 'Hvordan klarte Frederik III å innføre eneveldet i 1660?',
            options: [
              { id: 'a', text: 'Han utnyttet en seier over Sverige til å kreve at adelen ga fra seg sine privilegier som krigsbelønning', isCorrect: false },
              { id: 'b', text: 'Han allierte seg med borgerskapet mot adelen etter en tapt krig som hadde tømt statskassen', isCorrect: true },
              { id: 'c', text: 'Han innkalte en stenderforsamling som frivillig overførte all makt til kronen for å sikre nasjonal enhet', isCorrect: false },
              { id: 'd', text: 'Han fulgte Ludvig XIVs eksempel og bygde gradvis opp et sentralt byråkrati som erstattet adelens makt', isCorrect: false },
            ],
            solution: 'Frederik III utnyttet en krisesituasjon etter en tapt krig mot Sverige. Adelen nektet å bidra mer, og Frederik allierte seg med borgerskapet -- som var lei av adelens privilegier -- for å gjennomføre det som i praksis var et statskupp.',
          },
          {
            id: 'historie-5-4-n-quiz2-q2',
            task: 'Hvor lenge varte eneveldet i Norge?',
            options: [
              { id: 'a', text: 'Fra 1660 til 1905, da unionen med Sverige ble oppløst', isCorrect: false },
              { id: 'b', text: 'Fra 1660 til 1789, da den franske revolusjonen inspirerte til reformer', isCorrect: false },
              { id: 'c', text: 'Fra 1660 til 1814, da Norge fikk sin Grunnlov', isCorrect: true },
              { id: 'd', text: 'Fra 1665 til 1849, samme som i Danmark', isCorrect: false },
            ],
            solution: 'Eneveldet i Norge varte fra 1660 til 1814, da Norge fikk Grunnloven på Eidsvoll. I Danmark varte det til 1849. I denne perioden ble statsstyret modernisert, men befolkningen hadde ingen politisk innflytelse.',
          },
        ],
      },
    },
    {
      id: 'historie-5-4-n-section3',
      type: 'text',
      content: `## Stendersamfunnet -- født til din plass

Eneveldet eksisterte innenfor et samfunn som var organisert i **stender** -- faste sosiale grupper med ulike rettigheter og plikter. Dette systemet hadde røtter i middelalderen, men ble opprettholdt i tidlig nytid.

**Første stand: Adelen.** Adelen eide jord, var fritatt for mange skatter, og hadde rett til å inneha de viktigste embetene i stat og militærvesen. De levde av inntektene fra sine gods og av tjenester til kongen. I Danmark var adelen mektig, men etter innføringen av eneveldet mistet den mye av sin politiske makt.

**Andre stand: Geistligheten.** Prestene og biskopene utgjorde sin egen stand. Etter reformasjonen var kirken underlagt kongen, men den hadde fortsatt en viktig rolle i folks dagligliv -- fra dåp til begravelse.

**Tredje stand: Borgere og bønder.** Dette var det store flertallet av befolkningen. Borgerne i byene -- kjøpmenn, håndverkere, skippere -- hadde noen rettigheter, men begrenset politisk innflytelse. Bøndene, som utgjorde den desidert største gruppen, hadde minst makt.

Det viktige å forstå er at du ble **født inn i din stand**. En bondesønn ble bonde. En adelsdatter ble en adelskvinne. Sosial mobilitet -- muligheten til å bevege seg mellom stendene -- var svært begrenset. Samfunnet var **hierarkisk**, og de aller fleste aksepterte dette som naturlig og gudgitt.

Først med opplysningstiden og de demokratiske revolusjonene på slutten av 1700-tallet begynte folk å utfordre denne ordningen for alvor.`,
    },
    {
      id: 'historie-5-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-5-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på stendersamfunnet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-4-n-quiz3-q0',
            task: 'Hva kjennetegnet stendersamfunnet i tidlig nytid?',
            options: [
              { id: 'a', text: 'Samfunnet var delt i klasser basert på rikdom, der enhver kunne stige i rang gjennom handel og arbeid', isCorrect: false },
              { id: 'b', text: 'Samfunnet var delt i faste sosiale grupper med ulike rettigheter, og man ble født inn i sin stand', isCorrect: true },
              { id: 'c', text: 'Samfunnet var organisert etter yrkesgrupper i laug, der mesterens posisjon var den høyeste man kunne oppnå', isCorrect: false },
              { id: 'd', text: 'Eneveldet avskaffet de tradisjonelle stendene og erstattet dem med et enhetlig byråkratisk system', isCorrect: false },
            ],
            solution: 'Stendersamfunnet var organisert i faste sosiale grupper -- adel, geistlighet, borgere og bønder -- med forskjellige rettigheter og plikter. Man ble som regel født inn i sin stand, og sosial mobilitet var svært begrenset.',
          },
          {
            id: 'historie-5-4-n-quiz3-q1',
            task: 'Hvilken stand hadde flest privilegier, som skattefrihet og rett til de viktigste embetene?',
            options: [
              { id: 'a', text: 'Borgerskapet, som kontrollerte handelen og finansvesenet', isCorrect: false },
              { id: 'b', text: 'Geistligheten, som hadde skattefrihet og kontrollerte utdanningsvesenet', isCorrect: false },
              { id: 'c', text: 'Adelen', isCorrect: true },
              { id: 'd', text: 'Kongens embetsmenn, som hadde forrang foran alle stendene', isCorrect: false },
            ],
            solution: 'Adelen (første stand) eide jord, var fritatt for mange skatter og hadde rett til å inneha de viktigste embetene i stat og militærvesen. Etter innføringen av eneveldet mistet adelen mye av sin politiske makt, men beholdt mange økonomiske privilegier.',
          },
        ],
      },
    },
    {
      id: 'historie-5-4-n-section4',
      type: 'text',
      content: `## Merkantilisme -- statens økonomi

De eneveldige kongene nøyde seg ikke med å kontrollere politikken. De ville også kontrollere økonomien. Den økonomiske politikken de førte, kalles **merkantilisme**.

Merkantilistene mente at verdens rikdom var **begrenset** -- som en kake med fast størrelse. Det betød at et land bare kunne bli rikere ved at et annet land ble fattigere. Målet var å **eksportere mer enn man importerte**, slik at gull og sølv strømmet inn i landet.

For å oppnå dette brukte de eneveldige statene en rekke virkemidler. De la **toll** på importvarer for å beskytte egen industri. De ga **støtte** til etablering av **manufakturer** -- tidlige fabrikker. De brukte **koloniene** som leverandører av billige råvarer og kjøpere av dyre ferdigvarer fra moderlandet. De opprettet **handelsmonopoler** og privilegerte handelskompanler som Dansk Ostindisk Kompani. Og de forbød utførsel av gull og sølv fra landet.

Koloniene spilte en nøkkelrolle i dette systemet. De skulle levere råvarer -- sukker, tobakk, krydder, bomull -- til moderlandet, og de skulle kjøpe ferdigvarene som moderlandet produserte. Koloniene fikk ikke handle med andre land. Alt måtte gå gjennom moderlandet. Merkantilistiske tenkere mente at dette systemet tjente hele imperiet ved å skape orden, beskyttelse og økonomisk utvikling. I praksis var det likevel moderlandet som høstet de største fordelene, mens koloniene hadde begrenset handlingsfrihet.

Merkantilismen var altså tett knyttet til både eneveldet og kolonialismen. Sterk kongemakt, kontroll over økonomien og utnyttelse av kolonier hang sammen i et system der alt var rettet mot å gjøre staten -- og kongen -- så rik og mektig som mulig.`,
    },
    {
      id: 'historie-5-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-5-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på merkantilismen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-4-n-quiz4-q0',
            task: 'Hva var merkantilismens hovedmål?',
            options: [
              { id: 'a', text: 'Å bygge opp en sterk nasjonal industri gjennom fri konkurranse mellom innenlandske produsenter', isCorrect: false },
              { id: 'b', text: 'Å eksportere mer enn man importerte, slik at rikdom strømmet inn i landet', isCorrect: true },
              { id: 'c', text: 'Å sikre tilgang til billige råvarer gjennom frihandelsavtaler med andre europeiske stater', isCorrect: false },
              { id: 'd', text: 'Å maksimere statens skatteinntekter ved å stimulere innenlandsk forbruk', isCorrect: false },
            ],
            solution: 'Merkantilismens mål var å gjøre staten rik ved å eksportere mer enn man importerte, slik at gull og sølv strømmet inn. Virkemidlene inkluderte toll, støtte til egen industri, handelsmonopoler og utnyttelse av kolonier.',
          },
          {
            id: 'historie-5-4-n-quiz4-q1',
            task: 'Hvilken rolle spilte koloniene i det merkantilistiske systemet?',
            options: [
              { id: 'a', text: 'De fungerte som militære baser for å beskytte moderlandets handelsruter mot konkurrerende stater', isCorrect: false },
              { id: 'b', text: 'De bidro med skatteinntekter direkte til kongens kasse, men styrte sin egen økonomi fritt', isCorrect: false },
              { id: 'c', text: 'De skulle levere billige råvarer til moderlandet og kjøpe ferdigvarer tilbake -- uten å handle med andre land', isCorrect: true },
              { id: 'd', text: 'De forsynte moderlandet med arbeidskraft og soldater i bytte mot beskyttelse og infrastruktur', isCorrect: false },
            ],
            solution: 'Koloniene var nøkkelen i merkantilismen: de leverte råvarer som sukker, tobakk og bomull til moderlandet og måtte kjøpe ferdigvarer tilbake. De fikk ikke handle med andre land -- alt måtte gå gjennom moderlandet.',
          },
          {
            id: 'historie-5-4-n-quiz4-q2',
            task: 'Hva var den grunnleggende antagelsen bak merkantilistisk tenkning?',
            options: [
              { id: 'a', text: 'At et lands rikdom avhenger av dets evne til å produsere flere varer enn det forbruker', isCorrect: false },
              { id: 'b', text: 'At arbeidsdeling mellom land skaper velstand for alle, slik Adam Smith senere hevdet', isCorrect: false },
              { id: 'c', text: 'At verdens rikdom er begrenset -- et land kan bare bli rikere ved at et annet blir fattigere', isCorrect: true },
              { id: 'd', text: 'At jordbruk og naturressurser er den egentlige kilden til all rikdom, ikke handel og industri', isCorrect: false },
            ],
            solution: 'Merkantilistene mente at verdens rikdom var begrenset -- som en kake med fast størrelse. Derfor kunne et land bare bli rikere på bekostning av andre land, noe som drev konkurransen om kolonier, handelsruter og eksportoverskudd.',
          },
        ],
      },
    },
    {
      id: 'historie-5-4-n-section5',
      type: 'text',
      content: `## Kongeloven versus Grunnloven -- et tankeksperiment

For å virkelig forstå hva eneveldet var, kan vi sammenligne **Kongeloven av 1665** med den **norske Grunnloven av 1814**. Forskjellen er slående -- og viser hvor lang vei Europa hadde gått på bare 150 år.

Kongeloven sier: All makt til kongen. Han lager lovene alene etter eget ønske. Han utnevner og avsetter hvem han vil. Han er bare underlagt Guds lov. Ingen kan holde ham ansvarlig.

Grunnloven sier: Makten er delt mellom **Stortinget** (lovgivende), **regjeringen** (utøvende) og **domstolene** (dømmende). Makten utgår fra folket. Individuelle rettigheter som ytringsfrihet og religionsfrihet er sikret. Folket velger sine representanter.

Kongeloven nevner ingen rettigheter for folket. Grunnloven bygger på dem. Kongeloven samler all makt. Grunnloven fordeler den. Kongeloven ser på folket som undersåtter. Grunnloven ser på dem som borgere med rettigheter.

Det betyr ikke at alle eneveldige stater nødvendigvis var dårlig styrt. Det dansk-norske eneveldet var for eksempel relativt velorganisert med et effektivt byråkrati, og eneveldet gjennomførte reformer som avskaffelsen av stavnsbåndet i 1788. Men systemet var sårbart fordi alt avhang av kongens personlige egenskaper, og undersåttene hadde ingen formell rett til å påvirke beslutningene.

Hvorfor ble eneveldet til slutt erstattet? Blant annet fordi nye ideer om **folkesuverenitet**, **menneskerettigheter** og **maktfordeling** vokste fram i opplysningstiden. Tenkere som John Locke og Montesquieu argumenterte for at makten tilhørte folket, og at den burde deles for å hindre maktmisbruk. Revolusjoner -- den amerikanske i 1776, den franske i 1789 -- viste at folket kunne utfordre kongemakten. Og gradvis ble eneveldet erstattet av andre styreformer i land etter land.`,
    },
    {
      id: 'historie-5-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-5-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på Kongeloven, Grunnloven og veien mot demokrati:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-4-n-quiz5-q0',
            task: 'Hva er den viktigste forskjellen mellom Kongeloven av 1665 og den norske Grunnloven av 1814?',
            options: [
              { id: 'a', text: 'Kongeloven ga kongen makt over utenrikspolitikken, mens Grunnloven ga Stortinget denne makten', isCorrect: false },
              { id: 'b', text: 'Kongeloven samler all makt hos kongen, Grunnloven fordeler makten mellom flere organer og gir folket rettigheter', isCorrect: true },
              { id: 'c', text: 'Kongeloven bygde på religiøs legitimitet, mens Grunnloven bygde på nasjonal tradisjon og sedvanerett', isCorrect: false },
              { id: 'd', text: 'Begge dokumentene etablerer maktfordeling, men Grunnloven gir folket stemmerett i tillegg', isCorrect: false },
            ],
            solution: 'Kongeloven samler all makt hos kongen uten noen kontrollmekanismer eller folkerettigheter. Grunnloven bygger på maktfordeling (Storting, regjering, domstoler), folkesuverenitet og individuelle rettigheter -- en fundamental forskjell som gjenspeiler opplysningstidens nye ideer.',
          },
          {
            id: 'historie-5-4-n-quiz5-q1',
            task: 'Hvilke tenkere argumenterte for at makten tilhørte folket og burde deles?',
            options: [
              { id: 'a', text: 'Voltaire og Jean-Jacques Rousseau', isCorrect: false },
              { id: 'b', text: 'Thomas Hobbes og Hugo Grotius', isCorrect: false },
              { id: 'c', text: 'Niccolò Machiavelli og Jean Bodin', isCorrect: false },
              { id: 'd', text: 'John Locke og Montesquieu', isCorrect: true },
            ],
            solution: 'John Locke og Montesquieu var sentrale tenkere i opplysningstiden. Locke argumenterte for folkesuverenitet, og Montesquieu for maktfordeling. Ideene deres inspirerte den amerikanske og den franske revolusjonen og påvirket den norske Grunnloven.',
          },
          {
            id: 'historie-5-4-n-quiz5-q2',
            task: 'Hvorfor ble eneveldet til slutt erstattet av andre styreformer?',
            options: [
              { id: 'a', text: 'Fordi eneveldets kostbare kriger og hoffhold førte til statsbankerott i de fleste europeiske land', isCorrect: false },
              { id: 'b', text: 'Fordi nye ideer om folkesuverenitet, menneskerettigheter og maktfordeling vokste fram, og revolusjoner utfordret kongemakten', isCorrect: true },
              { id: 'c', text: 'Fordi borgerskapet overtok den økonomiske makten og krevde politisk innflytelse gjennom stenderforsamlingene', isCorrect: false },
              { id: 'd', text: 'Fordi Napoleonskrigene viste at eneveldige stater var militært underlegne og ble tvunget til å reformere seg', isCorrect: false },
            ],
            solution: 'Eneveldet ble erstattet fordi opplysningstidens ideer om folkesuverenitet, menneskerettigheter og maktfordeling utfordret kongemakten. Revolusjoner -- den amerikanske (1776) og den franske (1789) -- viste at folket kunne stå opp mot eneveldige konger.',
          },
        ],
      },
    },
    {
      id: 'historie-5-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Tidlig nytid var preget av en enorm maktkonsentrasjon. Konger samlet all makt i sine hender, samfunnet var organisert i stender der din plass var bestemt fra fødselen, og statens økonomiske politikk var rettet mot å berike kongen og staten.

**Nøkkelbegreper du nå kjenner:**
- **Enevelde (absolutisme)**: Styreform der kongen har uinnskrenket makt, bare ansvarlig overfor Gud
- **Føydalisme**: Middelalderens system der makten var spredt mellom konge, adel og kirke
- **Ludvig XIV**: Frankrikes Solkonge, det fremste eksemplet på en eneveldig monark
- **Versailles**: Slottet som var både palass og politisk maktinstrument
- **Kongeloven av 1665**: Europas eneste nedskrevne eneveldige forfatning, i Danmark-Norge
- **Stendersamfunnet**: Samfunn delt i faste sosiale grupper -- adel, geistlighet, borgere og bønder
- **Merkantilisme**: Økonomisk politikk som la vekt på eksportoverskudd, toll og kolonier

**Det viktigste du tar med deg:**
Eneveldet varte i bare noen generasjoner, men det forandret Europa. Det bygde opp moderne statsapparater med byråkratier og stående hærer. Reaksjonen mot eneveldet -- opplysningstiden og de demokratiske revolusjonene -- bidro til fremveksten av nye styringsformer. Mange historikere ser denne utviklingen som en viktig bakgrunn for ideer om demokrati, maktfordeling og menneskerettigheter, selv om veien dit var lang og kronglete.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.5 NARRATIV: Norge i dansketiden
// ============================================================================

export const CHAPTER_HISTORIE_5_5_NARRATIV: TextbookChapter = {
  id: 'historie-5-5-narrativ',
  courseId: 'historie',
  chapterNumber: '5.5',
  title: 'Norge i dansketiden',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om Norges 400 år under dansk styre -- en periode med politisk underordning, men også med økonomisk vekst, kulturell utvikling og spirer til norsk selvstendighet.',
  estimatedMinutes: 45,
  competenceGoals: ['makt fra middelalderen til tidlig nytid', 'nasjonal identitet i Norge'],
  linkedChapterId: 'historie-5-5',
  content: [
    {
      id: 'historie-5-5-n-intro',
      type: 'text',
      content: `## 400 år i Norges historie

Tenk deg at du er norsk i 1380. Nettopp har den norske kongen Håkon VI dødd, og sønnen hans, Olav Håkonsson, er allerede dansk konge. Plutselig har Norge og Danmark felles monark. Det er begynnelsen på en union som skal vare i over **400 år** -- den lengste perioden i norsk historie der landet ble styrt fra utlandet.

I 1397 ble det enda mer komplisert. **Kalmarunionen** ble dannet -- en union mellom Danmark, Norge og Sverige under den danske dronningen **Margrete**. Tanken var et likeverdig samarbeid mellom tre nordiske riker. Men i praksis var det Danmark som dominerte, fordi det var det rikeste og mest folkerike landet.

Sverige brøt ut av unionen i 1523 under Gustav Vasa og ble en selvstendig stormakt. Men Norge ble værende. Og gradvis ble Norge mer og mer underordnet. I **1536/37** tok den danske riksdagen det mest dramatiske steget: Norge skulle ikke lenger være et eget rike, men en del av Danmark *"ligesom et af de andre lande"*. Norge ble formelt et **lydrike** -- et rike som "lyder" et annet. Det norske riksrådet ble avskaffet. Norges siste politiske institusjon var borte.

På 1800-tallet, i nasjonalromantikkens tid, ble denne perioden kalt **"400-årsnatten"** -- et uttrykk som ofte tilskrives dikteren **Henrik Wergeland**. Det skulle gi inntrykk av en mørk tid der Norge var fullstendig undertrykt. Moderne historikere ser imidlertid mer nyansert på perioden. Men hva var det egentlig som skjedde? La oss se nærmere.`,
    },
    {
      id: 'historie-5-5-n-section1',
      type: 'text',
      content: `## Reformasjonen i Norge -- et vendepunkt

Vi har allerede snakket om reformasjonen i europeisk sammenheng. Men hva skjedde i Norge?

I 1536/37 innførte kong **Christian III** lutheranismen i hele Danmark-Norge. Men i motsetning til i Tyskland, der reformasjonen var en folkelig bevegelse nedenfra, ble den i Norge påtvunget **ovenfra** -- av den danske kongen.

Den katolske erkebiskopen i Nidaros, **Olav Engelbrektsson**, forsøkte å gjøre motstand. Han var den siste norske lederen med nok makt til å utfordre dansk overmakt. Men han tapte kampen og ble tvunget til å flykte til Nederlandene i 1537. Med ham forsvant den siste norske institusjonen som kunne stå opp mot Danmark.

Konsekvensene for Norge var vidtrekkende. Alt **kirkegods** -- jord, bygninger, inntekter -- ble overført til den danske kongen. Dette ga kronen enorm rikdom og makt i Norge. Det norske **riksrådet** ble avskaffet, og Norge mistet sin siste rest av politisk selvstyre. **Dansk** ble innført som kirkespråk og skriftspråk, noe som fortrengte norsk fra det offentlige livet. De som ville studere, måtte reise til **København**.

Men reformasjonen hadde også noen positive sider for Norge. Bibelen og salmene ble tilgjengelige på et språk folk i det minste delvis kunne forstå. På lengre sikt bidro protestantismens vekt på individuell bibellesning til at nordmenn ble et lesekyndig folk. Så reformasjonen var ikke utelukkende negativ -- men den svekket utvilsomt Norges politiske stilling dramatisk.`,
    },
    {
      id: 'historie-5-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-5-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på reformasjonen i Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-5-n-quiz1-q0',
            task: 'Hvem var Olav Engelbrektsson, og hva var hans rolle i norsk historie?',
            options: [
              { id: 'a', text: 'Den siste norske riksforstanderen som ledet riksrådet i kampen mot dansk innflytelse', isCorrect: false },
              { id: 'b', text: 'Den katolske erkebiskopen i Nidaros som forsøkte å motstå reformasjonen og forsvare norsk selvstyre', isCorrect: true },
              { id: 'c', text: 'Biskopen i Bergen som samarbeidet med Christian III for å innføre lutheranismen i Norge', isCorrect: false },
              { id: 'd', text: 'En norsk adelmann som forsøkte å gjenopprette et selvstendig norsk kongedømme under Kalmarunionen', isCorrect: false },
            ],
            solution: 'Olav Engelbrektsson var den katolske erkebiskopen i Nidaros (Trondheim) og den siste norske lederen med makt til å utfordre dansk overmakt. Han forsøkte å motstå reformasjonen, men tapte og flyktet til Nederlandene i 1537.',
          },
          {
            id: 'historie-5-5-n-quiz1-q1',
            task: 'Hva skjedde med norsk selvstyre etter reformasjonen i 1536/37?',
            options: [
              { id: 'a', text: 'Norge beholdt riksrådet, men det ble underlagt det danske riksrådet i København', isCorrect: false },
              { id: 'b', text: 'Det norske riksrådet ble avskaffet, og Norge ble formelt et lydrike under Danmark', isCorrect: true },
              { id: 'c', text: 'Norge fikk en ny stattholderordning der en norsk adelmann styrte på kongens vegne', isCorrect: false },
              { id: 'd', text: 'Norge ble formelt likestilt med Danmark i unionen, men mistet kontrollen over kirken', isCorrect: false },
            ],
            solution: 'Etter reformasjonen ble det norske riksrådet avskaffet, og Norge mistet sin siste rest av politisk selvstyre. Norge ble formelt et lydrike -- et rike som "lyder" et annet -- og ble styrt som en del av Danmark.',
          },
          {
            id: 'historie-5-5-n-quiz1-q2',
            task: 'Hva var en viktig forskjell mellom reformasjonen i Norge og i Tyskland?',
            options: [
              { id: 'a', text: 'I Norge skjedde reformasjonen gradvis over flere tiår gjennom lutheranske predikanter, mens den i Tyskland kom brått', isCorrect: false },
              { id: 'b', text: 'I Norge drev hanseatiske kjøpmenn i Bergen frem reformasjonen, mens den i Tyskland ble ledet av teologer', isCorrect: false },
              { id: 'c', text: 'I Norge ble reformasjonen påtvunget ovenfra av den danske kongen, mens den i Tyskland var en folkelig bevegelse', isCorrect: true },
              { id: 'd', text: 'I Norge ble reformasjonen gjennomført med støtte fra den norske adelen, mens den i Tyskland møtte sterk adelsmotstand', isCorrect: false },
            ],
            solution: 'I motsetning til i Tyskland, der reformasjonen vokste fram som en folkelig bevegelse, ble den i Norge påtvunget ovenfra av den danske kongen Christian III. Kirkegods ble overført til kronen, og dansk ble innført som kirkespråk og skriftspråk.',
          },
        ],
      },
    },
    {
      id: 'historie-5-5-n-section2',
      type: 'text',
      content: `## Norsk økonomi -- mer enn bare et lydrike

Selv om Norge var politisk underordnet, var landet økonomisk svært viktig for unionen. Norske naturressurser var etterspurt i hele Europa, og flere næringer blomstret i dansketiden.

**Trelast** ble Norges viktigste eksportvare fra 1500-tallet. Europa trengte tømmer til alt -- skipbygging, husbygging, gruvedrift. Langs den norske kysten vokste det fram en stor trelastindustri med **sagbruk** som sysselsatte mange mennesker. En ny overklasse av rike trelasthandlere vokste fram i byer som Drammen, Fredrikstad og Christiania.

**Fiske** forble en bærebjelke, særlig **tørrfiskhandelen** fra Nord-Norge. Bergen var sentrum for fiskehandelen, men lenge var det **hanseatene** -- tyske kjøpmenn fra Hansaforbundet -- som kontrollerte handelen fra sitt kontor på **Bryggen**. De hadde handelsmonopol og holdt norske fiskere i et system med permanent gjeld: Fiskerne leverte fisk på kreditt og ble aldri kvitt gjelden sin.

**Bergverk** ble en ny og viktig næring fra 1600-tallet. **Kongsberg sølvverk** (grunnlagt 1624) og **Røros kobberverk** (grunnlagt 1644) ble store virksomheter som tiltrakk arbeidere og kapital. Bergverkene var regulert av kongen og bidro betydelig til statens inntekter.

Norske **byer** vokste også. Bergen var Norges desidert største by og en av Nordens viktigste handelssteder. Oslo brant ned i 1624 og ble gjenoppbygd som **Christiania** av kong Christian IV, med moderne byplan og murtvang for å hindre nye branner. Kongen grunnla også Kristiansand og Kongsberg.`,
    },
    {
      id: 'historie-5-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-5-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på norsk økonomi i dansketiden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-5-n-quiz2-q0',
            task: 'Hvilken rolle spilte hanseatene i norsk økonomi i dansketiden?',
            options: [
              { id: 'a', text: 'De var nederlandske kjøpmenn som dominerte trelasthandelen langs sørlandskysten', isCorrect: false },
              { id: 'b', text: 'De var tyske kjøpmenn som kontrollerte fiskehandelen i Bergen og holdt norske fiskere i gjeldsslaveri', isCorrect: true },
              { id: 'c', text: 'De var engelske handelsfolk som hadde monopol på eksport av norsk tørrfisk til det britiske markedet', isCorrect: false },
              { id: 'd', text: 'De var danske embetsmenn som administrerte kongens handelsrettigheter i de norske kystbyene', isCorrect: false },
            ],
            solution: 'Hanseatene var tyske kjøpmenn fra Hansaforbundet som hadde handelsmonopol i Bergen. De kontrollerte fiskehandelen fra sitt kontor på Bryggen og holdt norske fiskere i et system med permanent gjeld.',
          },
          {
            id: 'historie-5-5-n-quiz2-q1',
            task: 'Hva var Norges viktigste eksportvare fra 1500-tallet?',
            options: [
              { id: 'a', text: 'Sølv og kobber fra bergverkene på Kongsberg og Røros', isCorrect: false },
              { id: 'b', text: 'Tørrfisk fra Nord-Norge, som lenge hadde vært landets viktigste handelsvare', isCorrect: false },
              { id: 'c', text: 'Trelast -- Europa trengte tømmer til skipbygging, husbygging og gruvedrift', isCorrect: true },
              { id: 'd', text: 'Jern og jernvarer fra norske masovner og smelteverk', isCorrect: false },
            ],
            solution: 'Trelast ble Norges viktigste eksportvare fra 1500-tallet. Europa trengte enorme mengder tømmer, og langs den norske kysten vokste det fram en stor trelastindustri med sagbruk. En ny overklasse av rike trelasthandlere vokste fram.',
          },
          {
            id: 'historie-5-5-n-quiz2-q2',
            task: 'Hva skjedde da Oslo brant ned i 1624?',
            options: [
              { id: 'a', text: 'Byen ble gjenoppbygd på samme sted av lokale borgere, men med strengere brannforskrifter', isCorrect: false },
              { id: 'b', text: 'Kong Christian IV gjenoppbygde byen som Christiania med moderne byplan og murtvang', isCorrect: true },
              { id: 'c', text: 'Frederik III brukte brannen som anledning til å flytte Norges viktigste administrasjon til Trondheim', isCorrect: false },
              { id: 'd', text: 'Byen ble gjenoppbygd som festningsby under ledelse av den danske stattholder', isCorrect: false },
            ],
            solution: 'Etter bybrannen i 1624 ble Oslo gjenoppbygd av kong Christian IV under navnet Christiania. Byen fikk moderne byplan og murtvang for å hindre nye branner. Kongen grunnla også Kristiansand og Kongsberg.',
          },
        ],
      },
    },
    {
      id: 'historie-5-5-n-section3',
      type: 'text',
      content: `## Den frie norske bonden

Her kommer et av de mest interessante aspektene ved Norges historie i dansketiden -- noe som gjør Norge forskjellig fra nesten alle andre europeiske land.

I Danmark var bøndene underlagt **stavnsbåndet** -- de var bundet til godset der de var født og kunne ikke fritt flytte uten godseierens tillatelse. De måtte yte **hoveri** (pliktarbeid) for godseierne og var underlagt godseierens rettslige myndighet. Stavnsbåndet var en alvorlig begrensning av den personlige friheten, selv om det ikke var det samme som slaveri -- bøndene hadde for eksempel rett til å eie løsøre og hadde visse rettslige beskyttelser. Stavnsbåndet ble avskaffet i 1788.

I Norge var situasjonen annerledes. Mange norske bønder var **odelsbønder** -- de eide sin egen gård med **odel**, en arverett til jorden som gikk i generasjoner. Disse bøndene var personlig frie, eide sin jord og hadde en tradisjon for å hevde sine rettigheter overfor myndighetene.

Men bildet bør nyanseres. Langt fra alle norske bønder var odelsbønder. Mange var **leilendinger** -- de leide jord av kongen, kirken eller rike borgere, og betalte landskyld. Andelen leilendinger varierte sterkt fra region til region. Det var også stor forskjell mellom velstående storbønder og fattige småbrukere. "Den frie norske bonden" er delvis en idealisering som ble skapt på 1800-tallet av nasjonalromantikere.

Hvorfor var den norske bondestanden likevel friere enn den danske? Delvis fordi Norge aldri hadde utviklet en like mektig adel som Danmark. Svartedauden hadde rammet Norge ekstra hardt på 1300-tallet, og mye av den norske adelen døde ut. Det ble ikke bygd opp store godssystemer av dansk type.

Denne relative forskjellen var likevel viktig. Den bidro til en **selvbevisst bondestand**. Da Grunnloven ble skrevet i 1814, fikk odelsbønder **stemmerett**. Den frie norske bonden ble et sentralt symbol på norsk identitet -- selv om dette symbolet også er en del av en nasjonalromantisk konstruksjon fra 1800-tallet som forenklet den faktiske virkeligheten.`,
    },
    {
      id: 'historie-5-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-5-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på den norske bondestanden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-5-n-quiz3-q0',
            task: 'Hva var den viktigste forskjellen mellom norske odelsbønder og danske livegne bønder?',
            options: [
              { id: 'a', text: 'Norske bønder var fritatt for militærtjeneste, mens danske bønder måtte tjenestegjøre i kongens hær', isCorrect: false },
              { id: 'b', text: 'Norske odelsbønder eide sin egen jord og var frie, mens danske bønder var bundet til godseierens jord uten frihet til å flytte', isCorrect: true },
              { id: 'c', text: 'Norske bønder hadde representasjon i lokale ting, mens danske bønder manglet enhver form for politisk innflytelse', isCorrect: false },
              { id: 'd', text: 'Norske leilendinger betalte lavere landskyld enn danske bønder betalte til sine godseiere', isCorrect: false },
            ],
            solution: 'Norske odelsbønder eide sin egen jord med arverett (odel) og var personlig frie. Danske bønder var bundet til godseierens jord (stavnsbåndet) uten frihet til å flytte. Denne forskjellen skapte en selvbevisst norsk bondestand.',
          },
          {
            id: 'historie-5-5-n-quiz3-q1',
            task: 'Hva var stavnsbåndet i Danmark?',
            options: [
              { id: 'a', text: 'En plikt til å utføre militærtjeneste for kongen i bytte mot beskyttelse og jordrettigheter', isCorrect: false },
              { id: 'b', text: 'En ordning der bønder var bundet til godset der de var født og ikke fritt kunne flytte', isCorrect: true },
              { id: 'c', text: 'En hoveriordning der bønder måtte arbeide et visst antall dager i året på godseierens jord', isCorrect: false },
              { id: 'd', text: 'En livegen-status som ligner den russiske ordningen der bøndene var godseierens eiendom', isCorrect: false },
            ],
            solution: 'Stavnsbåndet bandt danske bønder til godset der de var født -- de kunne ikke fritt flytte uten godseierens tillatelse. De måtte yte hoveri (pliktarbeid) for godseierne. Stavnsbåndet ble avskaffet i 1788.',
          },
          {
            id: 'historie-5-5-n-quiz3-q2',
            task: 'Hvorfor hadde Norge aldri utviklet en like mektig adel som Danmark?',
            options: [
              { id: 'a', text: 'Fordi den norske adelen mistet sine eiendommer da kirkegodset ble overført til den danske kronen ved reformasjonen', isCorrect: false },
              { id: 'b', text: 'Fordi Norges spredte bosettingsmønster og vanskelige terreng hindret oppbygging av store godssystemer', isCorrect: false },
              { id: 'c', text: 'Fordi svartedauden rammet Norge ekstra hardt, og mye av den norske adelen døde ut', isCorrect: true },
              { id: 'd', text: 'Fordi dansk adel systematisk overtok norske adelseiendommer etter at unionen ble inngått', isCorrect: false },
            ],
            solution: 'Svartedauden rammet Norge ekstra hardt på 1300-tallet, og mye av den norske adelen døde ut. Det ble aldri bygd opp store godssystemer av dansk type, noe som ga norske bønder en relativt friere stilling.',
          },
        ],
      },
    },
    {
      id: 'historie-5-5-n-section4',
      type: 'text',
      content: `## Motstand og norsk selvbevissthet

Selv om nordmennene i hovedsak aksepterte dansk styre, manglet det ikke på misnøye og motstand. Det mest kjente eksemplet er **Lofthus-opprøret** i 1786--1787.

**Kristian Jensen Lofthus** var en velstående bonde og skipsfører fra Lillesand som organiserte en protestbevegelse blant bønder på Agder og i Telemark. Bøndene klagde over **urettferdige fogder** som krevde for høye skatter, **handelsmonopoler** som hindret dem i å selge varene sine fritt, **borgerprivilegier** som ga kjøpmennene i byene enerett på handel, og **korrupsjon** blant embetsmennene.

Lofthus reiste hele veien til **København** -- to ganger -- for å legge klagene direkte fram for kronprins Fredrik. Han ble mottatt, men myndighetene slo til slutt hardt ned på opprøret. Lofthus ble arrestert i 1787 og dømt til livstid på Akershus festning, der han døde i 1797.

Opprøret er interessant fordi det viser noe viktig om forholdet mellom norske bønder og eneveldet. For det første viser det at norske bønder var **selvbevisste** og villige til å stå opp mot urettferdighet. For det andre viser det at bøndene rettet klagene mot **embetsmennene**, ikke mot kongen selv -- de hadde fortsatt tillit til at kongen ville hjelpe dem hvis han bare fikk vite om urettferdigheten. Og for det tredje viste det en voksende **politisk bevissthet** blant norske bønder som pekte framover mot 1814.

Eneveldet i Norge ble styrt gjennom **stiftamtmenn** og **fogder** utnevnt av kongen i København. De fleste var danske eller tyskættede, og det oppsto ofte konflikter mellom dem og den lokale befolkningen. Selv om kongen i teorien hadde all makt, var det i praksis vanskelig å styre et land med store avstander, dårlige kommunikasjoner og en selvstendig befolkning.`,
    },
    {
      id: 'historie-5-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-5-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på motstand og politisk bevissthet i Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-5-n-quiz4-q0',
            task: 'Hva forteller Lofthus-opprøret oss om norske bønders holdning til det danske styret?',
            options: [
              { id: 'a', text: 'At norske bønder var lojale mot den danske kongen og stolte på at det sentrale byråkratiet behandlet dem rettferdig', isCorrect: false },
              { id: 'b', text: 'At norske bønder var inspirert av opplysningstidens ideer og krevde en demokratisk grunnlov', isCorrect: false },
              { id: 'c', text: 'At norske bønder var selvbevisste og villige til å protestere mot urettferdighet, men rettet klagene mot embetsmenn, ikke mot kongen', isCorrect: true },
              { id: 'd', text: 'At bøndene i Sør-Norge var misfornøyde med skattenivået, men at motstanden var begrenset til denne regionen', isCorrect: false },
            ],
            solution: 'Lofthus-opprøret viser at norske bønder var selvbevisste og villige til å hevde sine rettigheter. De klagde over urettferdige fogder og handelsmonopoler, men rettet kritikken mot embetsmennene, ikke mot kongen.',
          },
          {
            id: 'historie-5-5-n-quiz4-q1',
            task: 'Hva klagde bøndene i Lofthus-opprøret over?',
            options: [
              { id: 'a', text: 'At den norske odelsloven var truet av dansk lovgivning som ville innføre stavnsbånd i Norge', isCorrect: false },
              { id: 'b', text: 'Urettferdige fogder, handelsmonopoler, borgerprivilegier og korrupsjon blant embetsmenn', isCorrect: true },
              { id: 'c', text: 'At norske bønder måtte betale tiende til den danske statskirken uten å få noe tilbake', isCorrect: false },
              { id: 'd', text: 'At danske embetsmenn nektet å la norske bønder handle direkte med utenlandske kjøpmenn', isCorrect: false },
            ],
            solution: 'Bøndene klagde over urettferdige fogder som krevde for høye skatter, handelsmonopoler som hindret dem i å selge fritt, borgerprivilegier som ga bykjøpmennene monopol på handel, og korrupsjon blant embetsmennene.',
          },
          {
            id: 'historie-5-5-n-quiz4-q2',
            task: 'Hva skjedde med Kristian Jensen Lofthus etter opprøret?',
            options: [
              { id: 'a', text: 'Han ble benådet av kronprinsen etter å ha fremlagt bøndenes klager i København', isCorrect: false },
              { id: 'b', text: 'Han ble landsforvist til Danmark og fikk aldri returnere til Norge', isCorrect: false },
              { id: 'c', text: 'Han ble dømt til straffarbeid i Kongsberg sølvverk, der han arbeidet til sin død', isCorrect: false },
              { id: 'd', text: 'Han ble arrestert, dømt til livstid på Akershus festning, og døde der i 1797', isCorrect: true },
            ],
            solution: 'Til tross for at Lofthus reiste helt til København to ganger for å legge klagene fram for kronprinsen, ble han arrestert i 1787 og dømt til livstid på Akershus festning, der han døde i 1797.',
          },
        ],
      },
    },
    {
      id: 'historie-5-5-n-section5',
      type: 'text',
      content: `## Norsk kultur og veien mot 1814

Selv om Norge var politisk underordnet og dansk var skriftspråket, utviklet det seg en voksende norsk kulturell bevissthet gjennom dansketiden.

**Petter Dass** (1647--1707) var prest i Nordland og forfatter av *Nordlands Trompet*, et diktverk som skildrer livet, naturen og menneskene i Nord-Norge med innlevelse og humor. Selv om han skrev på dansk, brukte han mange norske ord og vendinger. Verket ble enormt populært blant vanlige folk og regnes som et av de første uttrykkene for en distinkt norsk litterær identitet.

**Ludvig Holberg** (1684--1754), født i Bergen men bosatt i København, ble en av Nordens fremste forfattere med sine komedier, historiske verk og filosofiske tekster. Han er et godt eksempel på dobbeltheten i det dansk-norske kulturlivet: Var han norsk eller dansk? I hans samtid ville spørsmålet knapt ha gitt mening. Men for senere nasjonsbygging ble Holberg viktig som "bevis" på norsk kulturell kapasitet.

På 1700-tallet vokste det fram en tydeligere norsk nasjonalfølelse. **Det Kongelige Norske Videnskabers Selskab** ble grunnlagt i Trondheim i 1760 -- den første norske vitenskapelige institusjonen. **Det Norske Selskab** ble stiftet i København i 1772 av norske studenter som diskuterte norsk identitet og Norges stilling i unionen.

Så var dansketiden virkelig "400-årsnatten"? Svaret er mer nyansert enn det. Norge var ikke en koloni, men heller ikke et likeverdig rike. Norske bønder var friere enn de fleste i Europa. Norsk kultur overlevde og utviklet seg. Norske næringer blomstret. Men politisk var Norge underordnet, dansk var skriftspråket, og norske interesser ble ofte tilsidesatt.

Det viktigste er kanskje dette: Gjennom alle disse 400 årene bygde det seg opp noe -- en norsk identitet, en selvbevisst bondestand, kulturelle tradisjoner, økonomiske ressurser -- som til slutt gjorde det mulig at nordmenn i 1814 kunne gripe sjansen og skape sin egen grunnlov og sin egen stat.`,
    },
    {
      id: 'historie-5-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-5-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på norsk kultur og veien mot 1814:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-5-5-n-quiz5-q0',
            task: 'Hvorfor er betegnelsen «400-årsnatten» om dansketiden en forenkling?',
            options: [
              { id: 'a', text: 'Fordi Norge beholdt full politisk selvstendighet gjennom hele perioden og bare delte konge med Danmark', isCorrect: false },
              { id: 'b', text: 'Fordi betegnelsen ble skapt av svenske historikere som ville svekke det dansk-norske fellesskapet', isCorrect: false },
              { id: 'c', text: 'Fordi Norge var politisk underordnet, men beholdt egne lover, hadde frie bønder, og norsk kultur og økonomi utviklet seg gjennom hele perioden', isCorrect: true },
              { id: 'd', text: 'Fordi den danske kongen gjennomførte viktige reformer som moderniserte det norske samfunnet, særlig etter 1660', isCorrect: false },
            ],
            solution: 'Betegnelsen "400-årsnatten" er for enkel fordi bildet er mer nyansert. Norge var politisk underordnet, men beholdt egne lover, hadde en fri bondestand, og norsk kultur, identitet og økonomi utviklet seg gjennom hele perioden.',
          },
          {
            id: 'historie-5-5-n-quiz5-q1',
            task: 'Hvem var Petter Dass, og hva var hans betydning for norsk kulturhistorie?',
            options: [
              { id: 'a', text: 'En norsk dikter fra Bergen som skrev om nordnorsk natur mens han bodde i København', isCorrect: false },
              { id: 'b', text: 'En prest i Nordland som skrev Nordlands Trompet og regnes blant de første uttrykkene for norsk litterær identitet', isCorrect: true },
              { id: 'c', text: 'En teolog som oversatte Bibelen til norsk og dermed skapte grunnlaget for et norsk skriftspråk', isCorrect: false },
              { id: 'd', text: 'Grunnleggeren av Det Kongelige Norske Videnskabers Selskab i Trondheim', isCorrect: false },
            ],
            solution: 'Petter Dass (1647--1707) var prest i Nordland og forfatter av Nordlands Trompet, som skildrer livet og naturen i Nord-Norge. Selv om han skrev på dansk, brukte han mange norske ord, og verket regnes som et av de tidligste uttrykkene for en distinkt norsk litterær identitet.',
          },
          {
            id: 'historie-5-5-n-quiz5-q2',
            task: 'Hva var Det Norske Selskab, stiftet i København i 1772?',
            options: [
              { id: 'a', text: 'Det Kongelige Norske Videnskabers Selskab, som hadde flyttet sin virksomhet fra Trondheim til København', isCorrect: false },
              { id: 'b', text: 'En litterær klubb der dansk-norske forfattere som Ludvig Holberg samarbeidet om teateroppsetninger', isCorrect: false },
              { id: 'c', text: 'En forening av norske studenter i København som diskuterte norsk identitet og Norges stilling', isCorrect: true },
              { id: 'd', text: 'Et akademisk selskap som arbeidet for å opprette et eget norsk universitet i Christiania', isCorrect: false },
            ],
            solution: 'Det Norske Selskab ble stiftet i København i 1772 av norske studenter som diskuterte norsk identitet og Norges stilling i unionen. Det var et uttrykk for den voksende norske nasjonalfølelsen på 1700-tallet.',
          },
          {
            id: 'historie-5-5-n-quiz5-q3',
            task: 'Hva bygde seg opp gjennom dansketiden som til slutt muliggjorde norsk selvstendighet i 1814?',
            options: [
              { id: 'a', text: 'Et nettverk av norske embetsmenn som gradvis overtok styringen fra danske kolleger i forvaltningen', isCorrect: false },
              { id: 'b', text: 'Sterke handelsforbindelser med England og Nederland som ga Norge økonomisk uavhengighet fra Danmark', isCorrect: false },
              { id: 'c', text: 'En norsk identitet, selvbevisst bondestand, kulturelle tradisjoner og økonomiske ressurser', isCorrect: true },
              { id: 'd', text: 'En sterk norsk militærtradisjon utviklet gjennom grensetjeneste mot Sverige i flere hundre år', isCorrect: false },
            ],
            solution: 'Gjennom 400 år bygde det seg opp en norsk identitet, en selvbevisst bondestand, kulturelle tradisjoner og økonomiske ressurser. Disse faktorene gjorde det mulig for nordmenn i 1814 å gripe sjansen og skape sin egen grunnlov og stat.',
          },
        ],
      },
    },
    {
      id: 'historie-5-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Dansketiden (1380--1814) var over 400 år der Norge var underordnet Danmark. Det var en periode med politisk tap, men også med økonomisk vekst, kulturell utvikling og framveksten av en norsk identitet som til slutt banet vei for selvstendigheten i 1814.

**Nøkkelbegreper du nå kjenner:**
- **Kalmarunionen**: Union mellom Danmark, Norge og Sverige fra 1397, dominert av Danmark
- **Lydrike**: Norges formelle status etter 1536/37 -- underordnet Danmark uten eget riksråd
- **Reformasjonen i Norge (1537)**: Innført ovenfra av den danske kongen, med store konsekvenser for norsk politikk og kultur
- **Odelsbonde**: Fri norsk bonde som eide sin egen jord med arverett -- i kontrast til danske livegne bønder
- **Hanseatene**: Tyske kjøpmenn som kontrollerte fiskehandelen i Bergen
- **Lofthus-opprøret**: Bondeprotest i 1786--87 som viste norske bønders selvbevissthet
- **Petter Dass og Ludvig Holberg**: Kulturpersonligheter som bidro til å holde en norsk identitet levende

**Det viktigste du tar med deg:**
Dansketiden var verken en total "natt" eller en likeverdig union. Det var en sammensatt periode der Norge mistet sin politiske selvstendighet, men der norske ressurser, frie bønder og kulturell kreativitet la grunnlaget for at Norge i 1814 kunne gripe sjansen til å bli et selvstendig rike med sin egen grunnlov.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Alle kapitler i del 4
// ============================================================================

export const HISTORIE_NARRATIV_DEL4_CHAPTERS = [
  CHAPTER_HISTORIE_5_1_NARRATIV,
  CHAPTER_HISTORIE_5_2_NARRATIV,
  CHAPTER_HISTORIE_5_3_NARRATIV,
  CHAPTER_HISTORIE_5_4_NARRATIV,
  CHAPTER_HISTORIE_5_5_NARRATIV,
];
