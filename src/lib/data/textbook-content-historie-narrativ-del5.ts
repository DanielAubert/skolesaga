import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1 NARRATIV: Opplysningstiden og nye ideer
// ============================================================================

export const CHAPTER_HISTORIE_6_1_NARRATIV: TextbookChapter = {
  id: 'historie-6-1-narrativ',
  courseId: 'historie',
  chapterNumber: '6.1',
  title: 'Opplysningstiden og nye ideer',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan fornuften utfordret gamle sannheter og la grunnlaget for den moderne verden.',
  estimatedMinutes: 40,
  competenceGoals: ['ideologier bak politiske omveltninger'],
  linkedChapterId: 'historie-6-1',
  content: [
    {
      id: 'historie-6-1-n-intro',
      type: 'text',
      content: `## Da fornuften slo tilbake

Tenk deg at du lever i Europa rundt 1700. Du er født inn i en verden der kongen hevder at han styrer fordi Gud har valgt ham. Kirken forteller deg hva som er sant og hva som er synd. Hvis du stiller for mange spørsmål, risikerer du å bli anklaget for kjetteri. Som undersått var du underlagt kongens autoritet, kirkens lære og nedarvede tradisjoner som regulerte det meste av dagliglivet.

Så begynner noe å forandre seg. En rekke tenkere -- filosofer, forfattere, vitenskapsmenn -- begynner å stille grunnleggende spørsmål om samfunnsordenen. Slike spørsmål hadde blitt reist før, blant annet under reformasjonen og av middelalderens lærde, men nå fikk de en ny kraft og et bredere publikum: Hva om kongen *ikke* styrer på Guds vegne? Hva om kirken tar feil? Hva om vi bruker **fornuften** i stedet for tradisjonen til å forstå verden?

Dette var starten på **opplysningstiden**, en intellektuell revolusjon som forandret Europa -- og til slutt hele verden. Perioden fra ca. 1700 til 1800 ble fornuftens tidsalder, en tid da tenkere brukte sin egen forstand til å utfordre mye av det som tidligere hadde vært selvsagt. Og de bygde videre på noe viktig: den **vitenskapelige revolusjonen** på 1600-tallet, der Isaac Newton og andre hadde vist at naturen fulgte lovmessigheter som kunne oppdages gjennom observasjon og eksperimenter. Opplysningsfilosofene stilte spørsmålet: Hvis vi kan forstå naturens lover, kan vi ikke også finne lovene for et godt samfunn?`,
    },
    {
      id: 'historie-6-1-n-section1',
      type: 'text',
      content: `## John Locke -- frihetens filosof

La oss begynne med en engelskmann som skulle inspirere revolusjoner på begge sider av Atlanterhavet. **John Locke** (1632-1704) levde i en tid da England selv gikk gjennom politiske omveltninger. Han opplevde borgerkrig, kongedrap og en "glorius revolusjon" -- og alt dette formet hans tenkning.

Locke kom med en idé som var revolusjonær i sin enkelhet: Alle mennesker er født med **naturlige rettigheter** -- retten til liv, frihet og eiendom. Disse rettighetene er ikke noe en sjenerøs konge gir deg. De er dine fra fødselen av, simpelthen fordi du er et menneske.

Men Locke gikk enda lenger. Han mente at en regjerings eneste oppgave er å beskytte disse rettighetene. Hvis en konge krenker folkets rettigheter i stedet for å beskytte dem, har folket rett til å gjøre opprør. Tenk på det: I en tid da konger ble ansett som Guds utvalgte på jorda, hevdet Locke at vanlige mennesker hadde rett til å avsette dem.

Denne ideen -- at makten kommer nedenfra, fra folket, ikke ovenfra fra Gud -- skulle vise seg å få enorm innflytelse. Den inspirerte både den amerikanske og den franske revolusjonen og ligger til grunn for alle moderne demokratier.

Det er likevel viktig å merke seg motsetningene i Lockes tenkning. Locke var aksjonær i Royal African Company, som drev slavehandel, og hans eiendomsteori -- at man får eiendomsrett ved å "blande sitt arbeid" med naturen -- ble brukt til å rettferdiggjøre kolonial beslaglegging av urfolks land, der jakt og sanking ikke ble regnet som "arbeid." Lockes universelle rettigheter var i praksis begrenset av hans samtids fordommer.`,
    },
    {
      id: 'historie-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på John Locke og opplysningstidens grunnlag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-1-n-quiz1-q0',
            task: 'Hva mente John Locke med "naturlige rettigheter"?',
            options: [
              { id: 'a', text: 'Rettigheter som kongen gir til folket som belønning for lydighet', isCorrect: false },
              { id: 'b', text: 'Rettigheter alle mennesker er født med -- til liv, frihet og eiendom', isCorrect: true },
              { id: 'c', text: 'Rettigheter som bare gjelder adelen og de rike', isCorrect: false },
              { id: 'd', text: 'Rettigheter som kirken definerer i sine hellige tekster', isCorrect: false },
            ],
            solution: 'Locke mente at alle mennesker fødes med umistelige rettigheter til liv, frihet og eiendom. Disse rettighetene er ikke gitt av en konge eller regjering, men tilhører hvert menneske fra fødselen.',
          },
          {
            id: 'historie-6-1-n-quiz1-q1',
            task: 'Hva mente Locke at folket hadde rett til dersom regjeringen krenket deres rettigheter?',
            options: [
              { id: 'a', text: 'Å be kirken om hjelp', isCorrect: false },
              { id: 'b', text: 'Å flykte til et annet land', isCorrect: false },
              { id: 'c', text: 'Å gjøre opprør og avsette regjeringen', isCorrect: true },
              { id: 'd', text: 'Å slutte å betale skatt', isCorrect: false },
            ],
            solution: 'Locke hevdet at regjeringens eneste oppgave er å beskytte folkets naturlige rettigheter. Hvis regjeringen krenker disse rettighetene, har folket rett til å gjøre opprør og avsette den -- en revolusjonær idé i en tid da konger ble ansett som Guds utvalgte.',
          },
          {
            id: 'historie-6-1-n-quiz1-q2',
            task: 'Hva bygde opplysningsfilosofene videre på fra 1600-tallet?',
            options: [
              { id: 'a', text: 'Reformasjonens religiøse ideer', isCorrect: false },
              { id: 'b', text: 'Den vitenskapelige revolusjonen og dens metoder', isCorrect: true },
              { id: 'c', text: 'Romerrikets politiske system', isCorrect: false },
              { id: 'd', text: 'Middelalderens føydale ordning', isCorrect: false },
            ],
            solution: 'Opplysningsfilosofene bygde videre på den vitenskapelige revolusjonen på 1600-tallet, der Newton og andre hadde vist at naturen fulgte lovmessigheter. Filosofene stilte spørsmålet: Hvis vi kan forstå naturens lover, kan vi ikke også finne lovene for et godt samfunn?',
          },
        ],
      },
    },
    {
      id: 'historie-6-1-n-section2',
      type: 'text',
      content: `## Montesquieu og maktens tredeling

Hvis Locke ga oss ideen om at makten tilhører folket, ga den franske filosofen **Montesquieu** (1689-1755) oss oppskriften på hvordan makten burde organiseres. Han stilte et praktisk spørsmål: Hvordan hindrer vi at noen misbruker makten, selv i et fritt samfunn?

Montesquieus svar ble et av historiens mest innflytelsesrike politiske ideer: **maktfordelingsprinsippet**. Han mente at statsmakten måtte deles i tre uavhengige grener. Den **lovgivende makten** -- et parlament -- skulle lage lovene. Den **utøvende makten** -- en regjering eller president -- skulle gjennomføre lovene. Og den **dømmende makten** -- uavhengige domstoler -- skulle dømme etter lovene.

Poenget var genialt enkelt: Når ingen enkeltperson eller gruppe kontrollerer all makt, kan de ulike maktgrenene holde hverandre i sjakk. Parlamentet kan kontrollere regjeringen. Domstolene kan underkjenne lover som bryter med grunnloven. Regjeringen kan ikke bare gjøre som den vil.

Tenk på det slik: Det er som et system med tre låser på samme dør. Ingen enkeltnøkkel kan åpne den alene. Du trenger alle tre for å få tilgang til makten. Denne ideen ble grunnlaget for den amerikanske grunnloven, og du finner den igjen i den norske Grunnloven med Stortinget, regjeringen og domstolene.`,
    },
    {
      id: 'historie-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på Montesquieu og maktfordelingsprinsippet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-1-n-quiz2-q0',
            task: 'Hvilke tre makter mente Montesquieu at statsmakten burde deles inn i?',
            options: [
              { id: 'a', text: 'Kongen, kirken og adelen', isCorrect: false },
              { id: 'b', text: 'Hæren, flåten og politiet', isCorrect: false },
              { id: 'c', text: 'Den lovgivende, den utøvende og den dømmende makt', isCorrect: true },
              { id: 'd', text: 'Folket, parlamentet og grunnloven', isCorrect: false },
            ],
            solution: 'Montesquieu mente at statsmakten måtte deles i lovgivende makt (parlamentet lager lover), utøvende makt (regjeringen gjennomfører lover) og dømmende makt (domstolene dømmer etter lovene).',
          },
          {
            id: 'historie-6-1-n-quiz2-q1',
            task: 'Hva var hovedformålet med å dele makten i tre grener?',
            options: [
              { id: 'a', text: 'Å gjøre styringen mer effektiv og raskere', isCorrect: false },
              { id: 'b', text: 'Å sikre at kongen beholdt kontrollen', isCorrect: false },
              { id: 'c', text: 'Å sørge for at alle borgere fikk en statlig jobb', isCorrect: false },
              { id: 'd', text: 'Å hindre maktmisbruk ved at maktgrenene kontrollerer hverandre', isCorrect: true },
            ],
            solution: 'Hele poenget med maktfordelingen var at ingen enkeltperson eller gruppe skulle kontrollere all makt. De tre grenene skulle holde hverandre i sjakk -- parlamentet kontrollerer regjeringen, domstolene kan underkjenne lover, og regjeringen kan ikke bare gjøre som den vil.',
          },
          {
            id: 'historie-6-1-n-quiz2-q2',
            task: 'Hvor finner vi Montesquieus maktfordelingsprinsipp i praksis i dag?',
            options: [
              { id: 'a', text: 'Bare i den amerikanske grunnloven', isCorrect: false },
              { id: 'b', text: 'I den norske Grunnloven med Stortinget, regjeringen og domstolene', isCorrect: true },
              { id: 'c', text: 'Bare i Frankrikes politiske system', isCorrect: false },
              { id: 'd', text: 'Prinsippet ble aldri gjennomført i praksis', isCorrect: false },
            ],
            solution: 'Montesquieus maktfordelingsprinsipp ble grunnlaget for den amerikanske grunnloven og finnes igjen i den norske Grunnloven, der Stortinget har lovgivende makt, regjeringen har utøvende makt, og domstolene har dømmende makt.',
          },
        ],
      },
    },
    {
      id: 'historie-6-1-n-section3',
      type: 'text',
      content: `## Voltaire, Rousseau og kampen for frihet

**Voltaire** (1694-1778) var opplysningstidens mest berømte og fryktede penn. Han var forfatter, filosof og satiriker, og han brukte sin skarpe humor som våpen mot det han betraktet som uvitenhet, intoleranse og maktmisbruk. Voltaire kjempet utrettelig for **ytringsfrihet** og **religiøs toleranse**. Han kritiserte kirken skarpt for dens dogmer og forfølgelse av annerledestenkende. Selv ble han fengslet i Bastillen og tvunget i eksil -- noe som bare styrket hans overbevisning om at frie mennesker måtte få tenke og snakke fritt.

Men den kanskje mest radikale tenkeren var **Jean-Jacques Rousseau** (1712-1778), en sveitsisk-fransk filosof som snudde opp ned på sin tids tankesett. I sitt berømte verk "Samfunnskontrakten" (1762) utviklet han ideen om **folkesuverenitet**: all legitim makt utgår fra folket. Mennesker inngår en "kontrakt" med hverandre der de gir opp noe frihet til fellesskapet, og til gjengjeld får de beskyttelse og orden. Rousseau mente at mennesket fra naturens side er godt, men at samfunnet korrumperer det. Bare gjennom ekte demokrati -- der borgerne selv deltar i beslutningene -- kan mennesker være virkelig frie.

Rousseaus begrep om "allmenviljen" (*volonté générale*) har imidlertid også blitt sterkt kritisert. Tenkere som Benjamin Constant og senere Isaiah Berlin påpekte at ideen om en felles vilje som står over individet, kan brukes til å rettferdiggjøre undertrykkelse av mindretall. Under den franske revolusjonens skrekkperiode brukte jakobinerne nettopp Rousseaus ideer for å legitimere terroren -- i "folkets" navn.

Disse tenkerne utfylte hverandre og preget den politiske utviklingen sterkt: Locke formulerte rettighetene, Montesquieu utformet maktfordelingssystemet, Voltaire talte for ytringsfrihet, og Rousseau insisterte på at makten tilhører folket. Men opplysningstiden møtte også motstand. Den konservative tenkeren Edmund Burke advarte mot å forkaste nedarvede institusjoner til fordel for abstrakte prinsipper, og den romantiske bevegelsen reagerte mot det de oppfattet som en ensidig tro på fornuften, på bekostning av tradisjon, følelser og fellesskap.`,
    },
    {
      id: 'historie-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på Voltaire, Rousseau og opplysningsfilosofene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-1-n-quiz3-q0',
            task: 'Hva mente Rousseau med "folkesuverenitet"?',
            options: [
              { id: 'a', text: 'At kongen er suverent overhode valgt av Gud', isCorrect: false },
              { id: 'b', text: 'At all legitim makt utgår fra folket selv', isCorrect: true },
              { id: 'c', text: 'At de rikeste borgerne bør styre landet', isCorrect: false },
              { id: 'd', text: 'At folket skal adlyde lovene uten å stille spørsmål', isCorrect: false },
            ],
            solution: 'Folkesuverenitet betyr at all makt i et samfunn utgår fra folket, ikke fra Gud, kongen eller tradisjonen. Rousseau mente at borgerne inngår en samfunnskontrakt der de gir opp noe frihet for fellesskap og beskyttelse.',
          },
          {
            id: 'historie-6-1-n-quiz3-q1',
            task: 'Hva kjempet Voltaire først og fremst for?',
            options: [
              { id: 'a', text: 'Maktfordelingsprinsippet', isCorrect: false },
              { id: 'b', text: 'Avskaffelse av privat eiendom', isCorrect: false },
              { id: 'c', text: 'Ytringsfrihet og religiøs toleranse', isCorrect: true },
              { id: 'd', text: 'Gjeninnføring av det romerske styresettet', isCorrect: false },
            ],
            solution: 'Voltaire var opplysningstidens fremste forkjemper for ytringsfrihet og religiøs toleranse. Han brukte sin skarpe penn som våpen mot det han betraktet som uvitenhet, intoleranse og maktmisbruk, og kritiserte kirken for dens forfølgelse av annerledestenkende.',
          },
          {
            id: 'historie-6-1-n-quiz3-q2',
            task: 'Hva er en viktig kritikk av Rousseaus begrep om "allmenviljen"?',
            options: [
              { id: 'a', text: 'At det var for konservativt og støttet kongemakten', isCorrect: false },
              { id: 'b', text: 'At det aldri fikk noen politisk innflytelse', isCorrect: false },
              { id: 'c', text: 'At det bare gjaldt for små stater', isCorrect: false },
              { id: 'd', text: 'At det kan brukes til å rettferdiggjøre undertrykkelse av mindretall', isCorrect: true },
            ],
            solution: 'Tenkere som Benjamin Constant og Isaiah Berlin påpekte at ideen om en felles vilje som står over individet, kan brukes til å undertrykke mindretall. Under den franske revolusjonens skrekkperiode brukte jakobinerne nettopp Rousseaus ideer for å legitimere terroren -- i "folkets" navn.',
          },
          {
            id: 'historie-6-1-n-quiz3-q3',
            task: 'Hvordan utfylte Locke, Montesquieu, Voltaire og Rousseau hverandre?',
            options: [
              { id: 'a', text: 'De var alle enige om nøyaktig det samme politiske programmet', isCorrect: false },
              { id: 'b', text: 'Locke formulerte rettighetene, Montesquieu maktfordelingen, Voltaire ytringsfriheten, Rousseau folkesuvereniteten', isCorrect: true },
              { id: 'c', text: 'De arbeidet alle sammen på Encyklopedien', isCorrect: false },
              { id: 'd', text: 'De levde i samme tidsperiode og samarbeidet direkte', isCorrect: false },
            ],
            solution: 'De fire tenkerne bidro med ulike, men komplementære ideer: Locke formulerte rettighetene, Montesquieu utformet maktfordelingssystemet, Voltaire talte for ytringsfrihet, og Rousseau insisterte på at makten tilhører folket. Til sammen skapte de opplysningstidens politiske grunnlag.',
          },
        ],
      },
    },
    {
      id: 'historie-6-1-n-section4',
      type: 'text',
      content: `## Encyklopedien -- et prosjekt for kunnskapsspredning

Et av opplysningstidens mest ambisiøse prosjekter var **Encyklopedien** (1751-1772), redigert av Denis Diderot og Jean d'Alembert. I 28 enorme bind samlet de kunnskap om alt fra vitenskap og filosofi til håndverk og kunst. Over 4000 mennesker abonnerte på verket -- et enormt tall for sin tid.

Men Encyklopedien var langt mer enn et oppslagsverk. Encyklopedistene selv så prosjektet som et våpen mot det de kalte "uvitenhet og overtro" -- men det er verdt å merke seg at mye av det de betraktet som overtro, inkluderte dypt forankrede religiøse overbevisninger som var meningsfulle for store deler av befolkningen. Mellom linjene kritiserte artiklene kirken og tradisjonell autoritet. Ved å gjøre kunnskap tilgjengelig for et bredere publikum, utfordret Diderot og hans medarbeidere selve ideen om at kunnskap skulle være forbeholdt en liten elite.

Myndighetene oppfattet verket som en trussel mot den etablerte ordenen. Encyklopedien ble forbudt flere ganger, trykkeriene ble ransaket, og Diderot risikerte fengselsstraff. Men verket ble fullført, og det står som et sentralt uttrykk for opplysningstidens tro på at fornuft og kunnskap kan forandre samfunnet.`,
    },
    {
      id: 'historie-6-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på Encyklopedien og kunnskapsspredning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-1-n-quiz4-q0',
            task: 'Hvorfor ble Encyklopedien forbudt av myndighetene?',
            options: [
              { id: 'a', text: 'Fordi den inneholdt feil og upresis informasjon', isCorrect: false },
              { id: 'b', text: 'Fordi den var altfor dyr for vanlige folk', isCorrect: false },
              { id: 'c', text: 'Fordi den kritiserte kirken og tradisjonell autoritet og truet makthaverne', isCorrect: true },
              { id: 'd', text: 'Fordi den ble utgitt på feil språk', isCorrect: false },
            ],
            solution: 'Encyklopedien ble forbudt fordi den utgjorde en trussel mot kirken og de tradisjonelle makthaverne. Ved å spre kunnskap til alle og kritisere autoritetene utfordret verket det eksisterende maktgrunnlaget.',
          },
          {
            id: 'historie-6-1-n-quiz4-q1',
            task: 'Hvem var hovedredaktøren for Encyklopedien?',
            options: [
              { id: 'a', text: 'Voltaire', isCorrect: false },
              { id: 'b', text: 'Denis Diderot', isCorrect: true },
              { id: 'c', text: 'Jean-Jacques Rousseau', isCorrect: false },
              { id: 'd', text: 'Montesquieu', isCorrect: false },
            ],
            solution: 'Encyklopedien (1751-1772) ble redigert av Denis Diderot og Jean d\'Alembert. I 28 bind samlet de kunnskap om alt fra vitenskap og filosofi til håndverk og kunst, og over 4000 mennesker abonnerte på verket.',
          },
          {
            id: 'historie-6-1-n-quiz4-q2',
            task: 'Hva utfordret Encyklopedien ved å gjøre kunnskap tilgjengelig for et bredere publikum?',
            options: [
              { id: 'a', text: 'Ideen om at kunnskap skulle være forbeholdt en liten elite', isCorrect: true },
              { id: 'b', text: 'Ideen om at vitenskapen alltid hadde rett', isCorrect: false },
              { id: 'c', text: 'Ideen om at bøker burde være gratis', isCorrect: false },
              { id: 'd', text: 'Ideen om at bare prester kunne lese', isCorrect: false },
            ],
            solution: 'Ved å samle og spre kunnskap til et bredere publikum utfordret Diderot og hans medarbeidere selve ideen om at kunnskap skulle være forbeholdt en liten elite. Dette var en sentral del av opplysningstidens prosjekt.',
          },
        ],
      },
    },
    {
      id: 'historie-6-1-n-section5',
      type: 'text',
      content: `## Ideene som endret verden

Opplysningstidens ideer forble ikke i filosofenes studerkamre. De fikk enorm praktisk betydning og inspirerte noen av historiens viktigste politiske hendelser:

Den **amerikanske uavhengighetserklæringen** i 1776 bygde direkte på Lockes ideer om naturlige rettigheter. Den **franske revolusjonen** i 1789 tok Rousseaus folkesuverenitet fra teori til praksis -- med både fantastiske og skremmende resultater. Og i 1814 fikk Norge sin egen **Grunnlov**, full av opplysningstidens ideer om maktfordeling og borgerrettigheter.

Ideene om **menneskerettigheter** har røtter i opplysningstidens naturrettstenkning -- ideen om at alle mennesker har rettigheter simpelthen fordi de er mennesker. Idealer om **demokrati, ytringsfrihet, religiøs toleranse** og **utdanning for alle** ble formulert i denne perioden, selv om de også hadde forløpere i eldre tradisjoner -- som engelsk common law, middelalderens parlamentariske institusjoner og religiøse tradisjoners tanker om menneskeverd.

Det er også viktig å peke på opplysningstidens skyggeside: Flere opplysningsfilosofer bidro til å utvikle rasehierarkier og pseudovitenskapelige teorier som ble brukt til å rettferdiggjøre kolonialisme og slaveri. Den "universelle fornuften" ble i praksis ofte begrenset til europeiske menn.

Opplysningstidens innflytelse er likevel tydelig i dag. Stemmeretten, ytringsfriheten, utdanningssystemet og rettsstatens prinsipper bygger alle på ideer som ble utviklet i denne perioden -- selv om de også ble formet av mange andre historiske krefter og tradisjoner.`,
    },
    {
      id: 'historie-6-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på opplysningstidens ideer og deres virkningshistorie:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-1-n-quiz5-q0',
            task: 'Hvilken opplysningsfilosof utviklet ideen om maktfordelingsprinsippet?',
            options: [
              { id: 'a', text: 'John Locke', isCorrect: false },
              { id: 'b', text: 'Voltaire', isCorrect: false },
              { id: 'c', text: 'Jean-Jacques Rousseau', isCorrect: false },
              { id: 'd', text: 'Montesquieu', isCorrect: true },
            ],
            solution: 'Det var Montesquieu som utviklet maktfordelingsprinsippet -- ideen om at statsmakten bør deles i lovgivende, utøvende og dømmende makt.',
          },
          {
            id: 'historie-6-1-n-quiz5-q1',
            task: 'Hvilket av disse dokumentene bygde direkte på Lockes ideer om naturlige rettigheter?',
            options: [
              { id: 'a', text: 'Encyklopedien', isCorrect: false },
              { id: 'b', text: 'Den amerikanske uavhengighetserklæringen (1776)', isCorrect: true },
              { id: 'c', text: 'Napoleons Code civil', isCorrect: false },
              { id: 'd', text: 'Rousseaus Samfunnskontrakten', isCorrect: false },
            ],
            solution: 'Den amerikanske uavhengighetserklæringen i 1776 bygde direkte på Lockes ideer om naturlige rettigheter. Jeffersons formuleringer om umistelige rettigheter til liv, frihet og streben etter lykke har tydelig røtter i Lockes tenkning.',
          },
          {
            id: 'historie-6-1-n-quiz5-q2',
            task: 'Hva var en skyggeside ved opplysningstiden?',
            options: [
              { id: 'a', text: 'At den førte til at all religion ble forbudt i Europa', isCorrect: false },
              { id: 'b', text: 'At den bare fikk innflytelse i Frankrike', isCorrect: false },
              { id: 'c', text: 'At flere opplysningsfilosofer bidro til rasehierarkier som rettferdiggjorde kolonialisme', isCorrect: true },
              { id: 'd', text: 'At den avskaffet all vitenskapelig forskning', isCorrect: false },
            ],
            solution: 'Flere opplysningsfilosofer bidro til å utvikle rasehierarkier og pseudovitenskapelige teorier som ble brukt til å rettferdiggjøre kolonialisme og slaveri. Den "universelle fornuften" ble i praksis ofte begrenset til europeiske menn.',
          },
        ],
      },
    },
    {
      id: 'historie-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Opplysningstiden (ca. 1700-1800) var en intellektuell revolusjon som satte fornuften i sentrum og utfordret tradisjonelle autoriteter som kirken og eneveldet.

**Nøkkelbegreper du nå kjenner:**
- **Opplysningstiden**: Fornuftens tidsalder som vektla vitenskap, fornuft og fremskrittstro
- **Naturlige rettigheter** (Locke): Alle mennesker er født med rettigheter til liv, frihet og eiendom
- **Maktfordelingsprinsippet** (Montesquieu): Statsmakten deles i lovgivende, utøvende og dømmende makt
- **Folkesuverenitet** (Rousseau): All legitim makt utgår fra folket
- **Encyklopedien**: Diderots storverk som spredte kunnskap og utfordret autoriteter

**Det viktigste du tar med deg:**
Opplysningstidens ideer om fornuft, rettigheter og demokrati la grunnlaget for den moderne verden. De inspirerte den amerikanske og franske revolusjonen, den norske Grunnloven, og menneskerettighetene vi i dag tar for gitt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2 NARRATIV: Den amerikanske revolusjonen
// ============================================================================

export const CHAPTER_HISTORIE_6_2_NARRATIV: TextbookChapter = {
  id: 'historie-6-2-narrativ',
  courseId: 'historie',
  chapterNumber: '6.2',
  title: 'Den amerikanske revolusjonen',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om da kolonistene gjorde opprør mot verdens mektigste imperium og skapte en ny type nasjon.',
  estimatedMinutes: 40,
  competenceGoals: ['ideologier bak politiske omveltninger'],
  linkedChapterId: 'historie-6-2',
  content: [
    {
      id: 'historie-6-2-n-intro',
      type: 'text',
      content: `## Te, skatt og revolusjon

Forestill deg at du er en bonde i Massachusetts i 1770. Du har ryddet jord, bygd et hus og skapt deg et liv i den nye verden. Du betaler skatt til en konge som sitter tusenvis av kilometer unna, i et land du kanskje aldri har sett. Du har ingen representant i det britiske parlamentet som kan tale din sak. Likevel bestemmer fjerne politikere i London over ditt liv, din økonomi og din fremtid.

Så kommer nye skatter -- stempelskatt på dokumenter, avgifter på glass, papir og te. Kongen trenger penger etter den kostbare sjuårskrigen (1756-1763), og han mener kolonistene bør betale sin del. Fra britisk perspektiv var dette rimelig: krigen hadde blitt ført delvis for å beskytte koloniene mot franske og indianske angrep, og kolonistene betalte langt lavere skatter enn innbyggerne i Storbritannia. Men for mange kolonister føltes det urettferdig: Hvorfor skal du betale skatt til et parlament der du ikke har noen stemme?

Et slagord begynner å bre seg fra munn til munn, fra by til by: **"No taxation without representation"** -- ingen skatt uten representasjon. Det høres kanskje ut som et enkelt økonomisk krav, men det rommet noe mye større. For bak slagordet lå opplysningstidens store ideer: at makten tilhører folket, at regjeringen trenger folkets samtykke, og at ingen har rett til å styre andre uten deres godkjenning.

Det er verdt å merke seg at ikke alle kolonister delte denne oppfatningen. Omtrent 20 prosent av kolonistene var **lojalister** som forble trofaste mot den britiske kronen. De mente koloniene hadde det godt under britisk styre og fryktet konsekvensene av et brudd. Mange av dem flyktet til Canada eller Storbritannia etter krigen.

Slik begynte en revolusjon som skulle forandre verden.`,
    },
    {
      id: 'historie-6-2-n-section1',
      type: 'text',
      content: `## Boston Tea Party og veien mot krig

Konflikten mellom kolonistene og Storbritannia tilspisset seg gjennom en serie dramatiske hendelser. Den 16. desember 1773 skjedde noe som fortsatt huskes som en av historiens mest berømte protestaksjoner: **Boston Tea Party**.

En gruppe kolonister, forkledd som mohawkinndianere, snek seg om bord på tre britiske skip i Boston havn. I løpet av natten kastet de 342 kasser te i sjøen -- te verdt en formue. Det var ikke vandalisme. Det var en nøye planlagt, symbolsk protest mot teavgiften og prinsippet om skattlegging uten representasjon.

Den britiske regjeringen reagerte med raseri. De vedtok det kolonistene kalte "de utålelige lovene" -- strenge straffetiltak som stengte Bostons havn og innskrenket Massachusetts' selvstyre. Men i stedet for å kue motstanden, hadde Storbritannia tent en lunte.

I 1774 møttes representanter fra tolv av de tretten koloniene i **Kontinentalkongressen** for å koordinere motstanden. De vedtok å boikotte britiske varer. Spenningen steg. Begge sider rustet seg.

Så, den 19. april 1775, smalt de første skuddene. Ved **Lexington og Concord** i Massachusetts støtte britiske soldater på kolonistmilitser. Ingen vet hvem som fyrte av det første skuddet -- det berømte "skuddet som ble hørt over hele verden" -- men krigen var i gang.`,
    },
    {
      id: 'historie-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på bakgrunnen for den amerikanske revolusjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-2-n-quiz1-q0',
            task: 'Hva var Boston Tea Party?',
            options: [
              { id: 'a', text: 'En fest der kolonistene feiret sin uavhengighet fra Storbritannia', isCorrect: false },
              { id: 'b', text: 'En protestaksjon der kolonister kastet britisk te i sjøen som protest mot skattlegging uten representasjon', isCorrect: true },
              { id: 'c', text: 'Et møte der kolonistene forhandlet med britene om lavere teavgifter', isCorrect: false },
              { id: 'd', text: 'En handelsmesse der kolonistene solgte sin egen te for å konkurrere med britene', isCorrect: false },
            ],
            solution: 'Boston Tea Party (1773) var en dramatisk protestaksjon der kolonister, forkledd som indianere, kastet 342 kasser britisk te i Boston havn som protest mot teavgiften og prinsippet om skattlegging uten representasjon.',
          },
          {
            id: 'historie-6-2-n-quiz1-q1',
            task: 'Hva betydde slagordet "No taxation without representation"?',
            options: [
              { id: 'a', text: 'At kolonistene nektet å betale noen form for skatt', isCorrect: false },
              { id: 'b', text: 'At bare rike kolonister skulle betale skatt', isCorrect: false },
              { id: 'c', text: 'At kolonistene ikke ville betale skatt uten å ha representanter i parlamentet', isCorrect: true },
              { id: 'd', text: 'At Storbritannia ville representere kolonistene bedre', isCorrect: false },
            ],
            solution: 'Slagordet uttrykte at kolonistene ikke aksepterte å bli skattlagt av et parlament der de ikke hadde noen representant. Bak slagordet lå opplysningstidens ideer om at makten tilhører folket og at regjeringen trenger folkets samtykke.',
          },
          {
            id: 'historie-6-2-n-quiz1-q2',
            task: 'Hvordan reagerte Storbritannia på Boston Tea Party?',
            options: [
              { id: 'a', text: 'De senket teavgiftene for å blidgjøre kolonistene', isCorrect: false },
              { id: 'b', text: 'De ga kolonistene representasjon i parlamentet', isCorrect: false },
              { id: 'c', text: 'De trakk seg ut av koloniene frivillig', isCorrect: false },
              { id: 'd', text: 'De vedtok strenge straffetiltak som stengte Bostons havn', isCorrect: true },
            ],
            solution: 'Storbritannia reagerte med straffetiltak som kolonistene kalte "de utålelige lovene" -- blant annet stenging av Bostons havn og innskrenking av Massachusetts\' selvstyre. I stedet for å kue motstanden, tilspisset dette konflikten ytterligere.',
          },
          {
            id: 'historie-6-2-n-quiz1-q3',
            task: 'Hva var lojalister i koloniene?',
            options: [
              { id: 'a', text: 'Kolonister som støttet den franske kongen', isCorrect: false },
              { id: 'b', text: 'Kolonister som forble trofaste mot den britiske kronen', isCorrect: true },
              { id: 'c', text: 'Britiske soldater som deserterte til kolonistene', isCorrect: false },
              { id: 'd', text: 'Urfolk som allierte seg med kolonistene', isCorrect: false },
            ],
            solution: 'Omtrent 20 prosent av kolonistene var lojalister som forble trofaste mot den britiske kronen. De mente koloniene hadde det godt under britisk styre og fryktet konsekvensene av et brudd. Mange flyktet til Canada eller Storbritannia etter krigen.',
          },
        ],
      },
    },
    {
      id: 'historie-6-2-n-section2',
      type: 'text',
      content: `## Uavhengighetserklæringen -- ord som endret historien

Den 4. juli 1776 vedtok Kontinentalkongressen et dokument som skulle bli et av de viktigste i verdenshistorien: **uavhengighetserklæringen**. Den unge Thomas Jefferson, bare 33 år gammel, hadde skrevet utkastet.

Erklæringen åpner med ord som har fått varig historisk betydning: *"Vi holder disse sannhetene for selvinnlysende, at alle mennesker er skapt like, at de av sin skaper er utstyrt med visse umistelige rettigheter, at blant disse er liv, frihet og streben etter lykke."*

Hører du ekkoet fra opplysningsfilosofene? Lockes naturlige rettigheter er her -- om enn med en viktig endring: Jefferson byttet ut Lockes "eiendom" med "streben etter lykke." Rousseaus folkesuverenitet er her: Erklæringen slår fast at regjeringens makt kommer fra **folkets samtykke**, og at folket har rett til å avsette en tyrannisk regjering.

Men uavhengighetserklæringen var ikke bare filosofi. Den var også et anklageskrift mot kong George III. En lang liste beskrev kongens overgrep mot koloniene -- alt fra urettferdige skatter til bruk av militærmakt mot sivile. Dokumentet var både et filosofisk manifest og en krigserklæring, pakket inn i opplysningstidens språk.

Det var en uhørt handling: Tretten små kolonier erklærte seg uavhengige fra verdens mektigste imperium. Nå måtte de bevise at de mente det.`,
    },
    {
      id: 'historie-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på uavhengighetserklæringen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-2-n-quiz2-q0',
            task: 'Hvilken opplysningsfilosof inspirerte uavhengighetserklæringens ideer om naturlige rettigheter mest direkte?',
            options: [
              { id: 'a', text: 'Voltaire', isCorrect: false },
              { id: 'b', text: 'Montesquieu', isCorrect: false },
              { id: 'c', text: 'John Locke', isCorrect: true },
              { id: 'd', text: 'Jean-Jacques Rousseau', isCorrect: false },
            ],
            solution: 'John Locke var den viktigste inspirasjonskilden. Jeffersons formuleringer om "umistelige rettigheter" til "liv, frihet og streben etter lykke" bygger direkte på Lockes ideer om naturlige rettigheter.',
          },
          {
            id: 'historie-6-2-n-quiz2-q1',
            task: 'Hva endret Jefferson da han tilpasset Lockes ideer i uavhengighetserklæringen?',
            options: [
              { id: 'a', text: 'Han byttet ut "frihet" med "lykke"', isCorrect: false },
              { id: 'b', text: 'Han fjernet ideen om naturlige rettigheter helt', isCorrect: false },
              { id: 'c', text: 'Han byttet ut "eiendom" med "streben etter lykke"', isCorrect: true },
              { id: 'd', text: 'Han la til retten til å bære våpen', isCorrect: false },
            ],
            solution: 'Jefferson beholdt Lockes ideer om naturlige rettigheter, men erstattet "eiendom" med "streben etter lykke." Erklæringen fastslår umistelige rettigheter til "liv, frihet og streben etter lykke" -- i stedet for Lockes "liv, frihet og eiendom."',
          },
          {
            id: 'historie-6-2-n-quiz2-q2',
            task: 'Uavhengighetserklæringen var ikke bare filosofi -- hva var den også?',
            options: [
              { id: 'a', text: 'En handelsavtale med Frankrike', isCorrect: false },
              { id: 'b', text: 'En fredsavtale med Storbritannia', isCorrect: false },
              { id: 'c', text: 'En grunnlov for de nye statene', isCorrect: false },
              { id: 'd', text: 'Et anklageskrift mot kong George III og en krigserklæring', isCorrect: true },
            ],
            solution: 'Uavhengighetserklæringen var både et filosofisk manifest bygd på opplysningstidens ideer og et konkret anklageskrift mot kong George III. En lang liste beskrev kongens overgrep -- alt fra urettferdige skatter til bruk av militærmakt mot sivile.',
          },
        ],
      },
    },
    {
      id: 'historie-6-2-n-section3',
      type: 'text',
      content: `## Krigen for uavhengighet

**Uavhengighetskrigen** (1775-1783) ble en lang og brutal affære. På papiret burde kolonistene ikke hatt en sjanse. Storbritannia hadde verdens beste marine, en profesjonell hær og enorme ressurser. Kolonistene hadde en samling frivillige militser, lite trening og nesten ingen marine.

Men de hadde **George Washington**, en virginiaplanter som ble utnevnt til overkommanderende. Washington var ikke noe militært geni, men han hadde noe viktigere: utholdenhet, klokskap og evnen til å holde sin demoraliserte hær sammen gjennom de mørkeste timene. Den beryktede vinteren ved Valley Forge i 1777-1778, da Washingtons menn nesten frøs og sultet i hjel, ble et symbol på revolusjonens ofre.

Det som reddet kolonistene var **Frankrikes inntreden i krigen**. Frankrike -- som hadde tapt sjuårskrigen mot Storbritannia -- så en gyllen mulighet til hevn. De sendte tropper, våpen, penger og -- avgjørende -- sin flåte. Med fransk støtte klarte kolonistene å vinne det avgjørende slaget ved Yorktown i 1781.

I 1783 anerkjente Storbritannia USAs uavhengighet i **Parisfreden**. Det umulige hadde skjedd: Tretten kolonier hadde beseiret verdens stormakt.`,
    },
    {
      id: 'historie-6-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på uavhengighetskrigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-2-n-quiz3-q0',
            task: 'Hvilket land hjalp kolonistene i krigen mot Storbritannia?',
            options: [
              { id: 'a', text: 'Spania', isCorrect: false },
              { id: 'b', text: 'Frankrike', isCorrect: true },
              { id: 'c', text: 'Nederland', isCorrect: false },
              { id: 'd', text: 'Russland', isCorrect: false },
            ],
            solution: 'Frankrike ga avgjørende støtte til kolonistene med tropper, våpen, penger og sin marine. Motivasjonen var både ideologisk og strategisk -- å svekke rivalen Storbritannia etter tapet i sjuårskrigen.',
          },
          {
            id: 'historie-6-2-n-quiz3-q1',
            task: 'Hvorfor burde kolonistene i utgangspunktet ikke hatt en sjanse i krigen?',
            options: [
              { id: 'a', text: 'Fordi de manglet en uavhengighetserklæring', isCorrect: false },
              { id: 'b', text: 'Fordi Frankrike først støttet Storbritannia', isCorrect: false },
              { id: 'c', text: 'Fordi Storbritannia hadde verdens beste marine, en profesjonell hær og enorme ressurser', isCorrect: true },
              { id: 'd', text: 'Fordi alle kolonistene var lojalister', isCorrect: false },
            ],
            solution: 'Storbritannia hadde verdens beste marine, en profesjonell hær og enorme ressurser, mens kolonistene bare hadde frivillige militser med lite trening og nesten ingen marine. Det var først med Frankrikes inntreden at maktbalansen ble endret.',
          },
          {
            id: 'historie-6-2-n-quiz3-q2',
            task: 'Hva skjedde ved Parisfreden i 1783?',
            options: [
              { id: 'a', text: 'Frankrike ble en del av det britiske imperiet', isCorrect: false },
              { id: 'b', text: 'Kolonistene godtok å forbli under britisk styre', isCorrect: false },
              { id: 'c', text: 'Storbritannia anerkjente USAs uavhengighet', isCorrect: true },
              { id: 'd', text: 'George Washington ble kronet til konge', isCorrect: false },
            ],
            solution: 'I 1783 anerkjente Storbritannia USAs uavhengighet i Parisfreden. Etter det avgjørende slaget ved Yorktown i 1781, der kolonistene med fransk støtte beseiret britene, var krigen i praksis over.',
          },
        ],
      },
    },
    {
      id: 'historie-6-2-n-section4',
      type: 'text',
      content: `## Den nye republikken

Etter seieren sto kolonistene overfor en enda større utfordring enn krigen: Hvordan bygger man en helt ny type nasjon? De hadde ingen kongefamilie, ingen adel, ingen gammel tradisjon å lene seg på. De måtte finne opp noe nytt.

I 1787 samlet delegater seg i Philadelphia for å skrive **den amerikanske grunnloven** -- og her ble opplysningstidens ideer for første gang omsatt til et fungerende politisk system. Montesquieus maktfordelingsprinsipp ble kjernen: **Kongressen** (Senatet og Representantenes hus) fikk den lovgivende makten. **Presidenten** fikk den utøvende makten. **Høyesterett** fikk den dømmende makten. Og alle tre skulle kontrollere hverandre gjennom et system av "checks and balances."

I 1791 ble **Bill of Rights** -- de ti første grunnlovstilleggene -- vedtatt. De sikret grunnleggende rettigheter som ytringsfrihet, religionsfrihet, pressefrihet og retten til rettferdig rettergang. Her hører vi Voltaires kamp for toleranse og Lockes insistering på individets rettigheter.

Men la oss være ærlige om revolusjonens begrensninger. Når uavhengighetserklæringen sa at "alle mennesker er skapt like", gjaldt det i praksis hvite, eiendomsbesittende menn. Slaveriet ble ikke avskaffet. Kvinner fikk ikke stemmerett. Urbefolkningen ble oversett. Den amerikanske revolusjonen plantet frøet til frihet og likhet -- men det skulle ta generasjoner før disse idealene begynte å gjelde alle.`,
    },
    {
      id: 'historie-6-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på den amerikanske grunnloven og dens begrensninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-2-n-quiz4-q0',
            task: 'Hva var "Bill of Rights" i den amerikanske grunnloven?',
            options: [
              { id: 'a', text: 'En erklæring om uavhengighet fra Storbritannia', isCorrect: false },
              { id: 'b', text: 'En lov som avskaffet slaveriet i alle delstater', isCorrect: false },
              { id: 'c', text: 'De ti første grunnlovstilleggene som sikret grunnleggende rettigheter som ytringsfrihet og religionsfrihet', isCorrect: true },
              { id: 'd', text: 'Et dokument som ga alle innbyggere stemmerett', isCorrect: false },
            ],
            solution: 'Bill of Rights (1791) var de ti første tilleggene til den amerikanske grunnloven. De sikret individuelle rettigheter som ytringsfrihet, religionsfrihet, pressefrihet og retten til rettferdig rettergang.',
          },
          {
            id: 'historie-6-2-n-quiz4-q1',
            task: 'Hvilken opplysningsfilosofs ideer ble kjernen i den amerikanske grunnlovens maktstruktur?',
            options: [
              { id: 'a', text: 'Rousseaus idé om folkesuverenitet', isCorrect: false },
              { id: 'b', text: 'Lockes idé om naturlige rettigheter', isCorrect: false },
              { id: 'c', text: 'Montesquieus maktfordelingsprinsipp', isCorrect: true },
              { id: 'd', text: 'Voltaires idé om ytringsfrihet', isCorrect: false },
            ],
            solution: 'Montesquieus maktfordelingsprinsipp ble kjernen i den amerikanske grunnloven: Kongressen fikk lovgivende makt, presidenten utøvende makt, og Høyesterett dømmende makt -- med et system av "checks and balances" mellom dem.',
          },
          {
            id: 'historie-6-2-n-quiz4-q2',
            task: 'Hva var den største begrensningen ved den amerikanske revolusjonens idealer?',
            options: [
              { id: 'a', text: 'At grunnloven ikke inneholdt noen rettigheter', isCorrect: false },
              { id: 'b', text: 'At "alle mennesker er skapt like" i praksis bare gjaldt hvite, eiendomsbesittende menn', isCorrect: true },
              { id: 'c', text: 'At USA forble en del av det britiske imperiet', isCorrect: false },
              { id: 'd', text: 'At maktfordelingsprinsippet ikke ble gjennomført', isCorrect: false },
            ],
            solution: 'Til tross for erklæringen om at "alle mennesker er skapt like," gjaldt dette i praksis bare hvite, eiendomsbesittende menn. Slaveriet ble ikke avskaffet, kvinner fikk ikke stemmerett, og urbefolkningen ble oversett. Det skulle ta generasjoner før idealene begynte å gjelde alle.',
          },
        ],
      },
    },
    {
      id: 'historie-6-2-n-section5',
      type: 'text',
      content: `## En revolusjon som inspirerte verden

Den amerikanske revolusjonen var langt mer enn en løsrivelse fra et imperium. Den var det første forsøket i moderne tid på å bygge et helt samfunn på opplysningstidens ideer. For første gang ble filosofi til politikk, teori til praksis, og drømmer til grunnlov.

Nyhetene fra Amerika spredte seg raskt over Atlanterhavet. I Frankrike fulgte opplyste borgere med begeistring. Benjamin Franklin, som representerte kolonistene i Paris, ble en celebritet -- symbol på den nye verdens frihet og likhet. Mange franske soldater og offiserer hadde deltatt i krigen, som den unge marquis de Lafayette, og kom hjem med revolusjonære ideer.

Ironisk nok bidro Frankrikes støtte til den amerikanske revolusjonen til å utløse den franske. Krigen hadde kostet Frankrike enorme summer og forverret statens allerede desperate økonomi. Og ideene om frihet og folkesuverenitet, som hadde vunnet i Amerika, kunne ikke holdes ute av Frankrike. Bare seks år etter Parisfreden ville Bastillen falle.

Den amerikanske revolusjonen viste at det var mulig å avsette en monark, etablere en republikk og bygge en nasjon på ideen om at alle mennesker er skapt like. Selv med alle sine mangler og motsetninger la den grunnlaget for den demokratiske tradisjonen som vi i dag tar for gitt.`,
    },
    {
      id: 'historie-6-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på den amerikanske revolusjonens globale betydning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-2-n-quiz5-q0',
            task: 'Hvordan bidro den amerikanske revolusjonen til å utløse den franske revolusjonen?',
            options: [
              { id: 'a', text: 'Amerikanske soldater invaderte Frankrike', isCorrect: false },
              { id: 'b', text: 'Frankrikes kostbare støtte til kolonistene forverret statens økonomi, og revolusjonens ideer inspirerte franske borgere', isCorrect: true },
              { id: 'c', text: 'Den franske kongen ble tvunget til å kopiere den amerikanske grunnloven', isCorrect: false },
              { id: 'd', text: 'Storbritannia presset Frankrike til å gjennomføre reformer', isCorrect: false },
            ],
            solution: 'Frankrikes støtte til den amerikanske revolusjonen hadde to viktige konsekvenser: De enorme krigskostnadene forverret Frankrikes økonomi, og franske soldater kom hjem med revolusjonære ideer om frihet og folkesuverenitet.',
          },
          {
            id: 'historie-6-2-n-quiz5-q1',
            task: 'Hvem ble en celebritet i Paris som symbol på den nye verdens frihet?',
            options: [
              { id: 'a', text: 'George Washington', isCorrect: false },
              { id: 'b', text: 'Thomas Jefferson', isCorrect: false },
              { id: 'c', text: 'Benjamin Franklin', isCorrect: true },
              { id: 'd', text: 'Marquis de Lafayette', isCorrect: false },
            ],
            solution: 'Benjamin Franklin representerte kolonistene i Paris og ble en celebritet -- et symbol på den nye verdens frihet og likhet. Hans tilstedeværelse bidro til å spre revolusjonære ideer i Frankrike.',
          },
          {
            id: 'historie-6-2-n-quiz5-q2',
            task: 'Hva var den amerikanske revolusjonens viktigste historiske bidrag?',
            options: [
              { id: 'a', text: 'At den avskaffet slaveriet i hele verden', isCorrect: false },
              { id: 'b', text: 'At den viste at det var mulig å bygge en nasjon på opplysningstidens ideer om frihet og maktfordeling', isCorrect: true },
              { id: 'c', text: 'At den skapte verdens største militærmakt', isCorrect: false },
              { id: 'd', text: 'At den innførte stemmerett for alle', isCorrect: false },
            ],
            solution: 'Den amerikanske revolusjonen var det første forsøket i moderne tid på å bygge et helt samfunn på opplysningstidens ideer. For første gang ble filosofi til politikk, teori til praksis, og drømmer til grunnlov -- selv om idealene bare delvis ble realisert.',
          },
        ],
      },
    },
    {
      id: 'historie-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Den amerikanske revolusjonen (1775-1783) var den første moderne revolusjonen som omsatte opplysningstidens ideer til et fungerende politisk system.

**Nøkkelbegreper du nå kjenner:**
- **"No taxation without representation"**: Slagord om at skattlegging krever politisk representasjon
- **Boston Tea Party** (1773): Symbolsk protestaksjon som tilspisset konflikten
- **Uavhengighetserklæringen** (4. juli 1776): Historisk dokument bygd på Lockes ideer om naturlige rettigheter
- **Den amerikanske grunnloven** (1787): Første grunnlov basert på maktfordelingsprinsippet
- **Bill of Rights** (1791): Grunnlovstillegg som sikret individuelle rettigheter

**Det viktigste du tar med deg:**
Den amerikanske revolusjonen viste at det var mulig å bygge en nasjon på opplysningstidens ideer om frihet, likhet og maktfordeling. Men "alle mennesker er skapt like" gjaldt ikke alle -- slaveri, kvinners rettigheter og urbefolkningens situasjon viser at revolusjonens idealer bare delvis ble realisert.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3 NARRATIV: Den franske revolusjonen
// ============================================================================

export const CHAPTER_HISTORIE_6_3_NARRATIV: TextbookChapter = {
  id: 'historie-6-3-narrativ',
  courseId: 'historie',
  chapterNumber: '6.3',
  title: 'Den franske revolusjonen',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om revolusjonen som rystet Europa og forandret verdenshistorien for alltid.',
  estimatedMinutes: 45,
  competenceGoals: ['ideologier bak politiske omveltninger'],
  linkedChapterId: 'historie-6-3',
  content: [
    {
      id: 'historie-6-3-n-intro',
      type: 'text',
      content: `## Et rike på randen av sammenbrudd

Frankrike på 1780-tallet var et paradoks. Det var Europas mektigste stat, med den mest strålende kulturen, de finest kledde adelsmennene og det mest prangende hoffet i verden -- slottet i Versailles. Men under den forgylt overflaten råtnet alt.

Tenk deg det franske samfunnet som en bygning med tre etasjer. I første etasje bodde **geistligheten** -- omtrent 100 000 prester, munker og biskopper. De eide enorme landeiendommer og betalte ingen skatt. I andre etasje bodde **adelen** -- rundt 400 000 mennesker som levde av sine godser, holdt de viktigste stillingene i staten og hæren, og heller ikke betalte skatt.

Og i den tredje etasjen? Der bodde **alle andre** -- 26 millioner bønder, håndverkere, kjøpmenn, advokater, arbeidere. De bar hele skattebyrden. De betalte tiende til kirken, avgifter til adelen og skatter til kongen. En fattig bonde kunne miste halvparten av inntekten sin til skatter, mens hertugene på Versailles danset gjennom natten.

Kong **Ludvig XVI** var en velmenende, men svak og ubesluttsom mann. Dronning **Marie Antoinette** ble forhatt for sin luksus. Staten var nærmest bankerott etter kostbare kriger -- blant annet støtten til den amerikanske revolusjonen. Og i 1788 slo avlingene feil. Brødprisene skjøt i været. Folk sultet. Frankrike var en kruttønne, og lunten var allerede tent.`,
    },
    {
      id: 'historie-6-3-n-section1',
      type: 'text',
      content: `## Revolusjonen bryter løs

I mai 1789 tok Ludvig XVI et skritt som skulle bli hans siste som eneveldig konge: Han innkalte **stenderforsamlingen** for første gang på 175 år. Tanken var å løse den økonomiske krisen. Men det ble starten på noe helt annet.

Den tredje stand -- representantene for det vanlige folket -- krevde at alle tre stendene skulle møtes samlet og stemme per hode, ikke per stand. I det gamle systemet hadde geistligheten og adelen til sammen to stemmer mot tredjestands éne. Med hodetelling ville den tredje stand, som representerte 98 prosent av befolkningen, endelig få flertall.

Da kongen nektet, tok tredje stand et dramatisk steg. Den 17. juni 1789 erklærte de seg som **Nasjonalforsamling** -- representanter for hele det franske folket, ikke bare en stand. Tre dager senere, da kongen låste dem ute av møtesalen, samlet de seg i en nærliggende tennisbane og sverget den berømte **Ballhuseden**: De ville ikke gå fra hverandre før Frankrike hadde fått en grunnlov.

Så kom dagen som endret alt. Den **14. juli 1789** stormet en folkemengde i Paris festningen **Bastillen** for å skaffe seg våpen. Bastillen var et symbol på kongens vilkårlige makt -- et fengsel der folk kunne kastes inn uten lov og dom. Da den falt, falt også det gamle regimet i symbolsk forstand. Denne dagen er fortsatt Frankrikes nasjonaldag.

I august vedtok Nasjonalforsamlingen **Erklæringen om menneskets og borgerens rettigheter**: "Menneskene fødes og forblir frie og like i rettigheter." Ordene ekko fra opplysningstiden -- fra Locke, Montesquieu og Rousseau -- var nå blitt lov.`,
    },
    {
      id: 'historie-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på Frankrikes samfunnsstruktur og revolusjonens utbrudd:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-3-n-quiz1-q0',
            task: 'Hva var de tre stendene i det franske samfunnet før revolusjonen?',
            options: [
              { id: 'a', text: 'Kongen, adelen og borgerne', isCorrect: false },
              { id: 'b', text: 'Geistligheten, adelen og alle andre (den tredje stand)', isCorrect: true },
              { id: 'c', text: 'Bøndene, håndverkerne og kjøpmennene', isCorrect: false },
              { id: 'd', text: 'De rike, middelklassen og de fattige', isCorrect: false },
            ],
            solution: 'Det franske samfunnet var delt i tre stender: Første stand var geistligheten (ca. 100 000), andre stand var adelen (ca. 400 000), og tredje stand var alle andre (ca. 26 millioner).',
          },
          {
            id: 'historie-6-3-n-quiz1-q1',
            task: 'Hva var urettferdig med skattesystemet i det gamle franske regimet?',
            options: [
              { id: 'a', text: 'Alle tre stendene betalte like mye skatt', isCorrect: false },
              { id: 'b', text: 'Den tredje stand bar hele skattebyrden, mens geistligheten og adelen var skattefrie', isCorrect: true },
              { id: 'c', text: 'Bare kongen betalte skatt', isCorrect: false },
              { id: 'd', text: 'Geistligheten betalte mest skatt', isCorrect: false },
            ],
            solution: 'De to første stendene -- geistligheten og adelen -- betalte ingen skatt, mens den tredje stand (26 millioner mennesker) bar hele skattebyrden. En fattig bonde kunne miste halvparten av inntekten sin til skatter.',
          },
          {
            id: 'historie-6-3-n-quiz1-q2',
            task: 'Hva var Ballhuseden?',
            options: [
              { id: 'a', text: 'En lov som ga kongen mer makt', isCorrect: false },
              { id: 'b', text: 'En ed der tredje stand sverget å ikke gå fra hverandre før Frankrike hadde fått en grunnlov', isCorrect: true },
              { id: 'c', text: 'En fredsavtale mellom Frankrike og Storbritannia', isCorrect: false },
              { id: 'd', text: 'Et dokument der adelen ga fra seg privilegiene sine', isCorrect: false },
            ],
            solution: 'Da kongen låste tredje stand ute av møtesalen, samlet de seg i en nærliggende tennisbane og sverget den berømte Ballhuseden: De ville ikke gå fra hverandre før Frankrike hadde fått en grunnlov. Dette var et dramatisk steg mot revolusjon.',
          },
          {
            id: 'historie-6-3-n-quiz1-q3',
            task: 'Hva symboliserte stormingen av Bastillen 14. juli 1789?',
            options: [
              { id: 'a', text: 'Frankrikes seier i en krig mot Storbritannia', isCorrect: false },
              { id: 'b', text: 'Kongens seier over nasjonalforsamlingen', isCorrect: false },
              { id: 'c', text: 'Adelens overgivelse av sine privilegier', isCorrect: false },
              { id: 'd', text: 'Det gamle regimets fall og slutten på kongens vilkårlige makt', isCorrect: true },
            ],
            solution: 'Bastillen var et symbol på kongens vilkårlige makt -- et fengsel der folk kunne kastes inn uten lov og dom. Da den ble stormet av en folkemengde som ville skaffe seg våpen, falt også det gamle regimet i symbolsk forstand. Denne dagen er fortsatt Frankrikes nasjonaldag.',
          },
        ],
      },
    },
    {
      id: 'historie-6-3-n-section2',
      type: 'text',
      content: `## Frihet, likhet, brorskap

Revolusjonens slagord ble **"Liberté, égalité, fraternité"** -- frihet, likhet, brorskap. Det er fortsatt Frankrikes motto den dag i dag. Men hva betydde disse ordene i praksis?

**Frihet** betød slutt på vilkårlig fengsling og tortur, ytringsfrihet, pressefrihet og religiøs toleranse. Ingen skulle lenger kunne kastes i Bastillen på kongens befaling. Livegenskapen ble avskaffet -- bøndene var endelig frie mennesker, ikke lenket til en adelns jord.

**Likhet** betød avskaffelse av adelens og geistlighetens privilegier. Alle skulle være like for loven. Ikke lenger særdomstoler for adelen. Ikke lenger embeter forbeholdt dem som var født i riktig familie. Karriere skulle være åpen for talent, ikke for fødsel.

**Brorskap** betød solidaritet -- at alle franskmenn var brødre, uansett stand. Den nasjonale enheten skulle erstatte de gamle standsforskjellene.

Men det var et enormt gap mellom ideal og virkelighet. Kvinner var ekskludert fra de nye rettighetene. **Olympe de Gouges** skrev modig en "Erklæring om kvinnens og borgerinnens rettigheter" i 1791, der hun krevde like rettigheter for kvinner. Hennes skjebne ble tragisk -- hun ble henrettet under terroren. Slaveriet i de franske koloniene ble først avskaffet i 1794, for så å bli gjeninnført av Napoleon. "Alle mennesker er like" viste seg å være en mer begrenset idé enn den lød som.`,
    },
    {
      id: 'historie-6-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på revolusjonens idealer og begrensninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-3-n-quiz2-q0',
            task: 'Hva var den franske revolusjonens slagord?',
            options: [
              { id: 'a', text: '"No taxation without representation"', isCorrect: false },
              { id: 'b', text: '"Liberté, égalité, fraternité" -- frihet, likhet, brorskap', isCorrect: true },
              { id: 'c', text: '"Makt til folket"', isCorrect: false },
              { id: 'd', text: '"Fornuft og fremskritt"', isCorrect: false },
            ],
            solution: 'Den franske revolusjonens slagord var "Liberté, égalité, fraternité" -- frihet, likhet, brorskap. Det er fortsatt Frankrikes offisielle motto den dag i dag.',
          },
          {
            id: 'historie-6-3-n-quiz2-q1',
            task: 'Hva innebar "likhet" (égalité) i revolusjonens kontekst?',
            options: [
              { id: 'a', text: 'At alle skulle ha like mye penger', isCorrect: false },
              { id: 'b', text: 'At adelens og geistlighetens privilegier ble avskaffet og alle ble like for loven', isCorrect: true },
              { id: 'c', text: 'At kvinner og menn fikk like rettigheter', isCorrect: false },
              { id: 'd', text: 'At alle fikk like mye jord', isCorrect: false },
            ],
            solution: 'Likhet betød avskaffelse av adelens og geistlighetens privilegier. Alle skulle være like for loven -- ikke lenger særdomstoler for adelen eller embeter forbeholdt dem som var født i riktig familie. Karriere skulle være åpen for talent, ikke fødsel.',
          },
          {
            id: 'historie-6-3-n-quiz2-q2',
            task: 'Hvem skrev "Erklæring om kvinnens og borgerinnens rettigheter" i 1791?',
            options: [
              { id: 'a', text: 'Marie Antoinette', isCorrect: false },
              { id: 'b', text: 'Maximilien Robespierre', isCorrect: false },
              { id: 'c', text: 'Olympe de Gouges', isCorrect: true },
              { id: 'd', text: 'Napoleon Bonaparte', isCorrect: false },
            ],
            solution: 'Olympe de Gouges skrev modig en "Erklæring om kvinnens og borgerinnens rettigheter" i 1791, der hun krevde like rettigheter for kvinner. Hennes skjebne ble tragisk -- hun ble henrettet under terroren. Kvinner var ekskludert fra revolusjonens rettigheter.',
          },
        ],
      },
    },
    {
      id: 'historie-6-3-n-section3',
      type: 'text',
      content: `## Terroren -- da revolusjonen slukte sine barn

Revolusjonen radikaliserte seg gradvis, og det som fulgte er en av historiens mest skremmende lærdommer om hva som kan skje når idealer forvandles til fanatisme.

I 1792 ble Frankrike erklært republikk. Kong Ludvig XVI ble stilt for retten, dømt til døden og henrettet ved **giljotinen** i januar 1793. Dronning Marie Antoinette led samme skjebne ni måneder senere.

Frankrike var nå i krig mot en koalisjon av europeiske makter som fryktet at revolusjonen skulle spre seg. Samtidig herjet indre opprør og kontrarevolusjønær motstand. I denne kaotiske situasjonen tok **jakobinerne**, ledet av den kompromissløse **Maximilien Robespierre**, makten.

Robespierre var overbevist om at terroren var nødvendig for å redde revolusjonen. Han innførte det som ble kalt **skrekkveldet** -- en periode der alle som ble ansett som "fiender av revolusjonen" risikerte å miste hodet i giljotinen. Mistanke var nok. En anklage var nesten det samme som en dom.

I løpet av drøyt ett år ble rundt 17 000 mennesker henrettet. Giljotinen ble revolusjonens fryktede symbol. Blant ofrene var ikke bare adelsmenn og kongetro, men også revolusjonens egne ledere -- de som ble ansett som for moderate eller for radikale. Revolusjonen slukte virkelig sine egne barn.

Til slutt rammet terroren Robespierre selv. I juli 1794 ble han arrestert og henrettet. Skrekkveldet var over, men spørsmålet det etterlot, henger fortsatt i luften: Hvordan kunne en revolusjon for frihet ende i massedrap?`,
    },
    {
      id: 'historie-6-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på skrekkveldet og revolusjonens radikalisering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-3-n-quiz3-q0',
            task: 'Hva var "skrekkveldet" (terroren) under den franske revolusjonen?',
            options: [
              { id: 'a', text: 'En periode med krig mellom Frankrike og Storbritannia', isCorrect: false },
              { id: 'b', text: 'Kongens forsøk på å slå ned revolusjonen med militærmakt', isCorrect: false },
              { id: 'c', text: 'En periode der jakobinerne under Robespierre henrettet tusenvis av "revolusjonens fiender"', isCorrect: true },
              { id: 'd', text: 'Et folkeopprør i Paris der Bastillen ble stormet', isCorrect: false },
            ],
            solution: 'Skrekkveldet (1793-1794) var perioden da jakobinerne under Robespierre brukte systematisk terror mot alle som ble ansett som fiender av revolusjonen. Rundt 17 000 mennesker ble henrettet ved giljotinen.',
          },
          {
            id: 'historie-6-3-n-quiz3-q1',
            task: 'Hva skjedde med kong Ludvig XVI under revolusjonen?',
            options: [
              { id: 'a', text: 'Han ble sendt i eksil til England', isCorrect: false },
              { id: 'b', text: 'Han abdiserte frivillig og levde som privatperson', isCorrect: false },
              { id: 'c', text: 'Han ble stilt for retten, dømt til døden og henrettet ved giljotinen i 1793', isCorrect: true },
              { id: 'd', text: 'Han flyktet til Østerrike og levde der resten av livet', isCorrect: false },
            ],
            solution: 'I 1792 ble Frankrike erklært republikk. Kong Ludvig XVI ble stilt for retten, dømt til døden og henrettet ved giljotinen i januar 1793. Dronning Marie Antoinette led samme skjebne ni måneder senere.',
          },
          {
            id: 'historie-6-3-n-quiz3-q2',
            task: 'Hvorfor sier man at "revolusjonen slukte sine egne barn"?',
            options: [
              { id: 'a', text: 'Fordi mange barn døde under revolusjonskrigene', isCorrect: false },
              { id: 'b', text: 'Fordi revolusjonens egne ledere ble henrettet under terroren', isCorrect: true },
              { id: 'c', text: 'Fordi skolene ble stengt under revolusjonen', isCorrect: false },
              { id: 'd', text: 'Fordi de unge soldatene deserterte', isCorrect: false },
            ],
            solution: 'Blant ofrene for terroren var ikke bare adelsmenn og kongetro, men også revolusjonens egne ledere -- de som ble ansett som for moderate eller for radikale. Til slutt rammet terroren Robespierre selv, som ble henrettet i juli 1794.',
          },
          {
            id: 'historie-6-3-n-quiz3-q3',
            task: 'Omtrent hvor mange mennesker ble henrettet under skrekkveldet?',
            options: [
              { id: 'a', text: 'Rundt 500', isCorrect: false },
              { id: 'b', text: 'Rundt 5 000', isCorrect: false },
              { id: 'c', text: 'Rundt 17 000', isCorrect: true },
              { id: 'd', text: 'Rundt 100 000', isCorrect: false },
            ],
            solution: 'I løpet av drøyt ett år ble rundt 17 000 mennesker henrettet. Giljotinen ble revolusjonens fryktede symbol. Mistanke var nok til å bli anklaget, og en anklage var nesten det samme som en dom.',
          },
        ],
      },
    },
    {
      id: 'historie-6-3-n-section4',
      type: 'text',
      content: `## Napoleon -- revolusjonens arving og graver

Etter terroren fulgte en mer moderat periode, men Frankrike forble ustabilt. Inn på scenen trer en av historiens mest fascinerende skikkelser: **Napoleon Bonaparte**, en ung korsikansk general som hadde utmerket seg i revolusjonskrigene.

I 1799 grep Napoleon makten gjennom et statskupp. I 1804 kronet han seg selv til keiser -- i en seremoni der han demonstrativt tok kronen fra pavens hender og satte den på sitt eget hode. Et sterkt signal: Napoleons makt kom ikke fra Gud eller tradisjonen, men fra ham selv.

Napoleon var både revolusjonens arving og dens graver. På den ene siden beholdt han mange av revolusjonens viktigste reformer. **Code civil** -- Napoleons lovbok -- sikret likhet for loven, eiendomsretten og religiøs toleranse. Karriere var åpen for talent: En bondesønn kunne bli general hvis han var dyktig nok. Føydale privilegier var borte for godt.

På den andre siden avskaffet Napoleon demokratiet og ytringsfriheten. Han gjeninnførte slaveriet i koloniene. Han styrte som eneveldig hersker. Og gjennom sine kriger -- som strakte seg fra Spania til Russland -- spredte han både revolusjonens ideer og fransk dominans over hele Europa.

Napoleons endelige nederlag ved Waterloo i 1815 førte til at de gamle monarkiene forsøkte å gjenopprette det gamle regimet. Men det var for sent. Ideene om frihet, likhet, maktfordeling og nasjonalisme hadde slått rot over hele Europa. De kunne undertrykkes midlertidig, men aldri utryddes.`,
    },
    {
      id: 'historie-6-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på Napoleon og revolusjonens arv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-3-n-quiz4-q0',
            task: 'På hvilken måte var Napoleon både en viderefører og en forræder mot revolusjonens idealer?',
            options: [
              { id: 'a', text: 'Han videreførte demokratiet, men avskaffet likhet for loven', isCorrect: false },
              { id: 'b', text: 'Han beholdt likhet for loven og avskaffet privilegier, men fjernet demokrati og ytringsfrihet', isCorrect: true },
              { id: 'c', text: 'Han gjeninnførte kongedømmet og alle adelens privilegier', isCorrect: false },
              { id: 'd', text: 'Han avskaffet alt revolusjonen hadde oppnådd og gjenopprettet det gamle regimet', isCorrect: false },
            ],
            solution: 'Napoleon videreførte revolusjonens reformer som likhet for loven (Code civil) og avskaffelse av føydale privilegier, men forrådte de demokratiske idealene ved å avskaffe folkestyret og krone seg selv til keiser.',
          },
          {
            id: 'historie-6-3-n-quiz4-q1',
            task: 'Hva var Code civil?',
            options: [
              { id: 'a', text: 'En militær strategi Napoleon brukte i krig', isCorrect: false },
              { id: 'b', text: 'En grunnlov som gjeninnførte eneveldet', isCorrect: false },
              { id: 'c', text: 'Napoleons lovbok som sikret likhet for loven, eiendomsretten og religiøs toleranse', isCorrect: true },
              { id: 'd', text: 'Et dokument som avskaffet slaveriet i alle franske kolonier', isCorrect: false },
            ],
            solution: 'Code civil var Napoleons lovbok som sikret likhet for loven, eiendomsretten og religiøs toleranse. Karriere ble åpen for talent -- en bondesønn kunne bli general hvis han var dyktig nok. Føydale privilegier var borte for godt.',
          },
          {
            id: 'historie-6-3-n-quiz4-q2',
            task: 'Hvordan grep Napoleon makten, og hva signaliserte kroningen hans i 1804?',
            options: [
              { id: 'a', text: 'Han ble demokratisk valgt og kronet av paven', isCorrect: false },
              { id: 'b', text: 'Han arvet tronen etter Ludvig XVI', isCorrect: false },
              { id: 'c', text: 'Han grep makten gjennom statskupp og tok selv kronen fra paven for å vise at hans makt kom fra ham selv', isCorrect: true },
              { id: 'd', text: 'Han ble utpekt av nasjonalforsamlingen som midlertidig leder', isCorrect: false },
            ],
            solution: 'Napoleon grep makten gjennom et statskupp i 1799. I 1804 kronet han seg selv til keiser -- han tok demonstrativt kronen fra pavens hender og satte den på sitt eget hode, som et signal om at hans makt ikke kom fra Gud eller tradisjonen.',
          },
        ],
      },
    },
    {
      id: 'historie-6-3-n-section5',
      type: 'text',
      content: `## Revolusjonens arv og kritikk

Den franske revolusjonen var et jordskjelv som rystet hele Europa. I løpet av ti år -- fra 1789 til 1799 -- ble et tusenårig system veltet. Stendersamfunnet ble avskaffet. En konge ble henrettet. Menneskerettighetene ble erklært. Og en hel verdensdel ble tvunget til å konfrontere spørsmålet: Hvem har rett til å styre?

Allerede i 1790 -- altså før terroren -- kom en av historiens mest innflytelsesrike kritikker av revolusjonen. Den irsk-britiske politikeren og tenkeren **Edmund Burke** publiserte *Reflections on the Revolution in France*, der han advarte mot å rive ned et helt samfunnssystem basert på abstrakte prinsipper. Burke mente at et velfungerende samfunn bygger på institusjoner som har vokst frem over generasjoner, og at det er farlig å forkaste denne nedarvede visdommen til fordel for teoretiske idealer. Han forutså profetisk at revolusjonen ville ende i kaos og militærdiktatur. Burke mente at gradvis, organisk reform -- slik Storbritannia hadde utviklet seg -- var tryggere og mer varig enn voldelig omveltning. Hans tenkning ble grunnlaget for den moderne konservative tradisjonen, og hans advarsler om revolusjonær radikalisme viste seg å bli bekreftet av terroren og Napoleons maktovertagelse.

Revolusjonen hadde også en brutal side som sjelden får nok oppmerksomhet: opprøret i **Vendée** (1793-1796), der bønder og katolikker i Vest-Frankrike reiste seg mot den revolusjonære regjeringen. Republikken slo ned opprøret med ekstrem brutalitet, og titusener ble drept. Hendelsene i Vendée minner om at revolusjonen ikke hadde støtte overalt, og at den ble påtvunget deler av befolkningen med vold.

Revolusjonens arv er dermed motsetningsfull. På den ene siden ga den oss ideen om universelle menneskerettigheter, folkesuverenitet og likhet for loven -- idealer som fortsatt er grunnlaget for moderne demokratier. Menneskerettighetserklæringen fra 1789 er en direkte forgjenger til FNs erklæring fra 1948.

På den andre siden viste terroren, Vendée og Napoleons diktatur at revolusjonære idealer kan få brutale konsekvenser. At en revolusjon for frihet kan munne ut i undertrykkelse. At "folkets vilje" kan brukes til å rettferdiggjøre overgrep. Burkes advarsel om at det er lettere å rive ned enn å bygge opp, ble en varig lærdom.

Den franske revolusjonen viste at grunnleggende politisk forandring er mulig, men også at slik forandring kan ha en svært høy menneskelig pris. Både tilhengere og kritikere av revolusjonen har hatt viktige poenger, og debatten mellom dem preger politisk tenkning den dag i dag.`,
    },
    {
      id: 'historie-6-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på revolusjonens arv og kritikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-3-n-quiz5-q0',
            task: 'Hvilket dokument fra den franske revolusjonen regnes som en direkte forgjenger til FNs menneskerettighetserklæring (1948)?',
            options: [
              { id: 'a', text: 'Napoleons Code civil', isCorrect: false },
              { id: 'b', text: 'Ballhuseden', isCorrect: false },
              { id: 'c', text: 'Erklæringen om menneskets og borgerens rettigheter (1789)', isCorrect: true },
              { id: 'd', text: 'Den franske grunnloven av 1791', isCorrect: false },
            ],
            solution: 'Erklæringen om menneskets og borgerens rettigheter, vedtatt i august 1789, regnes som en direkte forgjenger til FNs menneskerettighetserklæring fra 1948. Den slo fast at alle mennesker fødes frie og like i rettigheter.',
          },
          {
            id: 'historie-6-3-n-quiz5-q1',
            task: 'Hva var Edmund Burkes hovedkritikk av den franske revolusjonen?',
            options: [
              { id: 'a', text: 'At revolusjonen ikke gikk langt nok i å avskaffe monarkiet', isCorrect: false },
              { id: 'b', text: 'At det er farlig å rive ned et helt samfunnssystem basert på abstrakte prinsipper', isCorrect: true },
              { id: 'c', text: 'At revolusjonen burde ha inkludert kvinners rettigheter fra starten', isCorrect: false },
              { id: 'd', text: 'At Frankrike burde ha kopiert det amerikanske systemet direkte', isCorrect: false },
            ],
            solution: 'Edmund Burke advarte mot å rive ned nedarvede institusjoner til fordel for abstrakte prinsipper. Han mente at velfungerende samfunn bygger på institusjoner som har vokst frem over generasjoner, og at gradvis reform er tryggere enn voldelig omveltning.',
          },
          {
            id: 'historie-6-3-n-quiz5-q2',
            task: 'Hva skjedde i Vendée under revolusjonen?',
            options: [
              { id: 'a', text: 'Det ble holdt en stor folkefest for å feire revolusjonen', isCorrect: false },
              { id: 'b', text: 'Napoleon vant sitt første store slag der', isCorrect: false },
              { id: 'c', text: 'Bønder og katolikker reiste seg mot den revolusjonære regjeringen og ble brutalt slått ned', isCorrect: true },
              { id: 'd', text: 'Den første franske grunnloven ble skrevet der', isCorrect: false },
            ],
            solution: 'I Vendée (1793-1796) reiste bønder og katolikker i Vest-Frankrike seg mot den revolusjonære regjeringen. Republikken slo ned opprøret med ekstrem brutalitet, og titusener ble drept. Hendelsene minner om at revolusjonen ikke hadde støtte overalt.',
          },
          {
            id: 'historie-6-3-n-quiz5-q3',
            task: 'Hvorfor er den franske revolusjonens arv motsetningsfull?',
            options: [
              { id: 'a', text: 'Fordi den ikke hadde noen varig innflytelse på verdenhistorien', isCorrect: false },
              { id: 'b', text: 'Fordi den bare påvirket Frankrike og ingen andre land', isCorrect: false },
              { id: 'c', text: 'Fordi den ga oss menneskerettigheter og likhet for loven, men også terroren og lærdommen om at frihetskamp kan slå over i tyranni', isCorrect: true },
              { id: 'd', text: 'Fordi alle er enige om at den var en ren suksess', isCorrect: false },
            ],
            solution: 'Revolusjonen ga oss universelle menneskerettigheter, folkesuverenitet og likhet for loven. Men terroren, Vendée og Napoleons diktatur viste at revolusjonære idealer kan få brutale konsekvenser, og at "folkets vilje" kan brukes til å rettferdiggjøre overgrep.',
          },
        ],
      },
    },
    {
      id: 'historie-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Den franske revolusjonen (1789-1799) var den mest dramatiske politiske omveltningen i europeisk historie, og dens arv preger verden den dag i dag.

**Nøkkelbegreper du nå kjenner:**
- **De tre stendene**: Geistligheten, adelen og den tredje stand -- et system der skattebyrdene var svært ujevnt fordelt
- **Stormingen av Bastillen** (14. juli 1789): Revolusjonens symbolske start
- **Erklæringen om menneskets og borgerens rettigheter**: Universelle rettigheter bygd på opplysningstidens ideer
- **Skrekkveldet**: Perioden da terroren ble brukt som politisk middel under Robespierre
- **Napoleon**: Revolusjonens arving som spredte dens ideer, men avskaffet demokratiet

**Det viktigste du tar med deg:**
Den franske revolusjonen viste både det beste og det verste menneskeheten er i stand til. Den ga oss menneskerettighetene og ideen om likhet for loven, men også terroren og lærdommen om at frihetskamp kan slå over i tyranni. Dens ideer om frihet, likhet og brorskap lever videre som grunnverdier i moderne demokratier.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4 NARRATIV: Revolusjonenes betydning for demokrati
// ============================================================================

export const CHAPTER_HISTORIE_6_4_NARRATIV: TextbookChapter = {
  id: 'historie-6-4-narrativ',
  courseId: 'historie',
  chapterNumber: '6.4',
  title: 'Revolusjonenes betydning for demokrati',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om den lange veien fra revolusjon til det demokratiet vi kjenner i dag.',
  estimatedMinutes: 40,
  competenceGoals: ['demokrati i antikken vs i dag'],
  linkedChapterId: 'historie-6-4',
  content: [
    {
      id: 'historie-6-4-n-intro',
      type: 'text',
      content: `## Revolusjonen er over -- hva nå?

Etter Napoleons endelige nederlag ved Waterloo i 1815 pustet Europas monarker lettet ut. Revolusjonstidens kaos og blodsbad var over. Nå kunne man gjenopprette den gamle ordenen -- kongene på sine troner, adelen i sine privilegier, kirken i sin makt.

På **Wienerkongressen** i 1814-1815 samlet seirsmaktene seg for å tegne Europas kart på nytt. Den østerrikske diplomaten **Metternich** ledet arbeidet med å gjenopprette stabilitet i Europa. Grenser ble flyttet, konger ble gjeninnsatt, og revolusjonære bevegelser ble undertrykt.

Det er lett å avskrive Metternich og Wienerkongressen som reaksjonære, men det er en forenkling. Metternichs system opprettholdt fred mellom stormaktene i nesten fire tiår -- en bemerkelsesverdig prestasjon etter tiår med revolusjon og krig. Den konservative posisjonen hadde genuint intellektuelt innhold, inspirert av Edmund Burkes tenkning: at samfunnets institusjoner representerer opphopet visdom fra generasjoner, at organisk reform er tryggere enn revolusjon, og at stabilitet og orden er forutsetninger for frihet. Konservative tenkere advarte -- med en viss rett, som terroren hadde vist -- om at revolusjonær omveltning ofte skaper mer lidelse enn den avskaffet.

Samtidig vokste liberale og demokratiske bevegelser i styrke. Opplysningstidens og revolusjonenes ideer hadde slått rot, og kravet om grunnlover, representasjon og borgerrettigheter lot seg ikke permanent undertrykke. Konflikten mellom konservative krefter som prioriterte stabilitet og gradvis utvikling, og liberale og demokratiske bevegelser som krevde raskere forandring, kom til å prege hele 1800-tallet.`,
    },
    {
      id: 'historie-6-4-n-section1',
      type: 'text',
      content: `## Liberalismens fremmarsj

Den viktigste politiske kraften bak demokratiseringen på 1800-tallet var **liberalismen**. Liberale tenkere og politikere krevde grunnlover som begrenset kongemakten, maktfordeling mellom lovgivende, utøvende og dømmende makt, ytringsfrihet og pressefrihet, og stemmerett -- i starten riktignok bare for menn med eiendom og formue.

Liberalismen var ikke det samme som demokrati slik vi forstår det i dag. De tidlige liberale var gjerne velstående borgere -- advokater, leger, kjøpmenn -- som ville bryte adelens monopol på makt, men som ikke nødvendigvis ønsket at fattige arbeidere eller kvinner skulle få stemme. Likevel var liberalismen motoren som satte demokratiseringen i gang.

I land etter land ble det krevd grunnlover. Norge var tidlig ute -- Grunnloven av 1814 var en av Europas mest liberale. Belgia fikk sin grunnlov i 1831. I Storbritannia ble stemmeretten gradvis utvidet gjennom en rekke reformlover. Men i mange land -- som Russland, Østerrike og Preussen -- holdt de konservative kreftene stand.

Kampen mellom gammelt og nytt var ofte voldelig. Revolusjoner, opprør og politiske kriser preget 1800-tallets Europa. Men retningen var klar: Sakte, ofte smertefullt, beveget Europa seg mot mer demokrati, flere rettigheter og større folkelig deltagelse.`,
    },
    {
      id: 'historie-6-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på Wienerkongressen og liberalismen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-4-n-quiz1-q0',
            task: 'Hva krevde de liberale bevegelsene på 1800-tallet?',
            options: [
              { id: 'a', text: 'Tilbakevending til eneveldet og kirkens makt', isCorrect: false },
              { id: 'b', text: 'Grunnlover, maktfordeling, ytringsfrihet og stemmerett', isCorrect: true },
              { id: 'c', text: 'Avskaffelse av all privat eiendom', isCorrect: false },
              { id: 'd', text: 'At adelen skulle få enda større privilegier', isCorrect: false },
            ],
            solution: 'De liberale krevde grunnlover som begrenset kongemakten, maktfordeling mellom de tre statsmaktene, ytringsfrihet og pressefrihet, og stemmerett -- i starten bare for menn med eiendom.',
          },
          {
            id: 'historie-6-4-n-quiz1-q1',
            task: 'Hva var formålet med Wienerkongressen (1814-1815)?',
            options: [
              { id: 'a', text: 'Å spre revolusjonens ideer til hele Europa', isCorrect: false },
              { id: 'b', text: 'Å gjenopprette stabilitet i Europa etter revolusjon og Napoleonskrigene', isCorrect: true },
              { id: 'c', text: 'Å innføre demokrati i alle europeiske land', isCorrect: false },
              { id: 'd', text: 'Å avskaffe alle europeiske monarkier', isCorrect: false },
            ],
            solution: 'Wienerkongressen samlet seirsmaktene for å tegne Europas kart på nytt etter Napoleons fall. Under ledelse av Metternich ble grenser flyttet, konger gjeninnsatt og revolusjonære bevegelser undertrykt -- men systemet opprettholdt fred i nesten fire tiår.',
          },
          {
            id: 'historie-6-4-n-quiz1-q2',
            task: 'Hva var en viktig begrensning ved den tidlige liberalismen?',
            options: [
              { id: 'a', text: 'At den avviste ideen om grunnlover', isCorrect: false },
              { id: 'b', text: 'At den støttet eneveldig kongemakt', isCorrect: false },
              { id: 'c', text: 'At den i starten bare ønsket stemmerett for velstående menn, ikke for fattige arbeidere eller kvinner', isCorrect: true },
              { id: 'd', text: 'At den bare fantes i Storbritannia', isCorrect: false },
            ],
            solution: 'De tidlige liberale var gjerne velstående borgere som ville bryte adelens monopol på makt, men som ikke nødvendigvis ønsket at fattige arbeidere eller kvinner skulle få stemme. Liberalismen var motoren bak demokratiseringen, men drev den frem gradvis.',
          },
        ],
      },
    },
    {
      id: 'historie-6-4-n-section2',
      type: 'text',
      content: `## 1848 -- året da Europa brant

I 1848 skjedde noe ekstraordinært. Som en præriebrann spredte revolusjon seg over hele Europa på bare noen få uker. Det startet i Paris i februar, der kongen ble styrtet og republikken gjenopprettet. Nyhetene spredte seg med telegrafen -- den tidens sosiale medier -- og utløste oppstand etter oppstand.

I Berlin reiste folket seg mot den prøyssiske kongen. I Wien flyktet den mektige Metternich -- mannen som hadde holdt det gamle systemet sammen i over tretti år. I Budapest, Praha, Milano og Roma krevde folk grunnlover, parlamenter og nasjonal frihet. Det var som om en hel verdensdel sa "nok" på samme tid.

Kravene var like over alt: **grunnlover og parlamentarisk styre**, **ytringsfrihet og pressefrihet**, **nasjonal selvstendighet** for undertrykte folk, og **sosiale reformer** for den voksende arbeiderklassen.

Men like raskt som revolusjonene hadde blusset opp, ble de slått ned. Innen 1849 hadde de konservative kreftene -- hæren, adelen, kirken -- gjenvunnet kontrollen i de fleste land. Revolusjonærene manglet enhet: Liberale og sosialister hadde ulike mål. Nasjonalistiske motsetninger splittet opprørerne. Borgerskapet fryktet arbeiderklassens radikalisme og søkte kompromiss med kongemakten.

Likevel var 1848 et vendepunkt. Revolusjonene viste at kravet om demokrati og nasjonal frihet var utbredt over hele Europa. De konservative hadde vunnet et slag, men de visste at presset ville øke. Sakte men sikkert måtte de gi etter.`,
    },
    {
      id: 'historie-6-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på revolusjonsbølgen i 1848:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-4-n-quiz2-q0',
            task: 'Hvorfor ble de fleste revolusjonene i 1848 slått ned?',
            options: [
              { id: 'a', text: 'Fordi folk egentlig ikke ønsket demokrati', isCorrect: false },
              { id: 'b', text: 'Fordi Napoleon invaderte alle landene', isCorrect: false },
              { id: 'c', text: 'Fordi revolusjonærene manglet enhet og de konservative kreftene var fortsatt sterke', isCorrect: true },
              { id: 'd', text: 'Fordi Storbritannia satte inn tropper for å stoppe dem', isCorrect: false },
            ],
            solution: 'Revolusjonærene var splittet: Liberale, sosialister og nasjonalister hadde ulike mål. Borgerskapet fryktet arbeiderklassens radikalisme. De konservative kreftene var fortsatt sterke nok til å slå ned opprørene.',
          },
          {
            id: 'historie-6-4-n-quiz2-q1',
            task: 'Hva var felles for kravene som ble reist over hele Europa i 1848?',
            options: [
              { id: 'a', text: 'Alle krevde å gjeninnføre eneveldet', isCorrect: false },
              { id: 'b', text: 'Grunnlover, parlamentarisk styre, ytringsfrihet og nasjonal selvstendighet', isCorrect: true },
              { id: 'c', text: 'Alle krevde krig mot Storbritannia', isCorrect: false },
              { id: 'd', text: 'Alle krevde avskaffelse av privat eiendom', isCorrect: false },
            ],
            solution: 'Kravene var like over hele Europa: grunnlover og parlamentarisk styre, ytringsfrihet og pressefrihet, nasjonal selvstendighet for undertrykte folk, og sosiale reformer for den voksende arbeiderklassen.',
          },
          {
            id: 'historie-6-4-n-quiz2-q2',
            task: 'Hvilken viktig leder flyktet fra Wien da revolusjonen brøt ut i 1848?',
            options: [
              { id: 'a', text: 'Napoleon III', isCorrect: false },
              { id: 'b', text: 'Otto von Bismarck', isCorrect: false },
              { id: 'c', text: 'Edmund Burke', isCorrect: false },
              { id: 'd', text: 'Metternich', isCorrect: true },
            ],
            solution: 'Den mektige Metternich -- mannen som hadde holdt det gamle systemet sammen i over tretti år gjennom Wienerkongressen -- måtte flykte fra Wien da revolusjonen brøt ut. Dette viste hvor stor kraft de demokratiske kravene hadde fått.',
          },
        ],
      },
    },
    {
      id: 'historie-6-4-n-section3',
      type: 'text',
      content: `## Stemmerettens langsomme utvidelse

En av de viktigste historiene i moderne tid er den gradvise utvidelsen av stemmeretten -- hvem som faktisk får bestemme. For selv etter revolusjonene var "demokrati" et ganske eksklusivt prosjekt.

På tidlig 1800-tall hadde kanskje 1-5 prosent av befolkningen stemmerett -- bare rike menn med eiendom. Gradvis ble kravene senket. Flere menn fikk stemme. I Norge fikk alle menn allmenn stemmerett i 1898. Men halvparten av befolkningen var fortsatt ekskludert: **kvinnene**.

Kampen for **kvinners stemmerett** er en av historiens mest inspirerende fortellinger. Kvinner hadde vært ekskludert fra den demokratiske revolusjonen helt fra starten. Selv den franske menneskerettighetserklæringen gjaldt bare menn -- ordet "homme" betyr både "menneske" og "mann" på fransk.

**Suffragettbevegelsen** vokste frem på 1800-tallet. Modige kvinner organiserte seg, holdt demonstrasjoner, skrev bøker og artikler, og noen brukte sivil ulydighet. De ble hånet, arrestert og tvangsmatet i fengsel. Men de ga seg ikke.

Gjennombruddene kom gradvis: New Zealand i 1893, Finland i 1906, Norge i 1913 -- vi var blant de første i verden. Storbritannia fulgte i 1918 (for kvinner over 30) og 1928 (alle kvinner). USA i 1920. Ironisk nok var Frankrike -- revolusjonens hjemland -- sent ute: Franske kvinner fikk stemmerett først i 1944. Og Sveits, som er kjent for sin lange demokratiske tradisjon med folkeavstemninger, innførte kvinnelig stemmerett på nasjonalt nivå først i 1971.

Stemmerettens historie viser at utvidelse av rettigheter kan skje på ulike måter. I noen tilfeller ble stemmeretten vunnet gjennom organisert kamp og politisk press, som i suffragettbevegelsen. Men i flere land, inkludert Norge og Storbritannia, ble stemmeretten også utvidet gjennom parlamentariske reformer -- vedtatt av politikere som erkjente behovet for endring. Veien til universell stemmerett var lang, men den fulgte ikke bare ett spor.`,
    },
    {
      id: 'historie-6-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på stemmerettens utvidelse:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-4-n-quiz3-q0',
            task: 'Når fikk norske kvinner full stemmerett?',
            options: [
              { id: 'a', text: '1898', isCorrect: false },
              { id: 'b', text: '1905', isCorrect: false },
              { id: 'c', text: '1913', isCorrect: true },
              { id: 'd', text: '1920', isCorrect: false },
            ],
            solution: 'Norge innførte full stemmerett for kvinner i 1913, som et av de første landene i verden. Menn hadde fått allmenn stemmerett i 1898.',
          },
          {
            id: 'historie-6-4-n-quiz3-q1',
            task: 'Omtrent hvor stor andel av befolkningen hadde stemmerett på tidlig 1800-tall?',
            options: [
              { id: 'a', text: 'Omtrent 50 prosent -- alle menn', isCorrect: false },
              { id: 'b', text: 'Omtrent 1-5 prosent -- bare rike menn med eiendom', isCorrect: true },
              { id: 'c', text: 'Omtrent 25 prosent -- alle over 30 år', isCorrect: false },
              { id: 'd', text: 'Ingen hadde stemmerett i noen land', isCorrect: false },
            ],
            solution: 'På tidlig 1800-tall hadde kanskje 1-5 prosent av befolkningen stemmerett -- bare rike menn med eiendom. Demokrati var et svært eksklusivt prosjekt, og veien til allmenn stemmerett var lang.',
          },
          {
            id: 'historie-6-4-n-quiz3-q2',
            task: 'Hvilket europeisk land var overraskende sent ute med å innføre kvinnelig stemmerett?',
            options: [
              { id: 'a', text: 'Norge (1913)', isCorrect: false },
              { id: 'b', text: 'Finland (1906)', isCorrect: false },
              { id: 'c', text: 'Frankrike (1944)', isCorrect: true },
              { id: 'd', text: 'Storbritannia (1928)', isCorrect: false },
            ],
            solution: 'Ironisk nok var Frankrike -- revolusjonens hjemland -- sent ute med kvinnelig stemmerett: franske kvinner fikk stemmerett først i 1944. Enda mer overraskende er Sveits, som innførte det på nasjonalt nivå først i 1971.',
          },
          {
            id: 'historie-6-4-n-quiz3-q3',
            task: 'Hva var suffragettbevegelsen?',
            options: [
              { id: 'a', text: 'En bevegelse for å gjeninnføre eneveldet', isCorrect: false },
              { id: 'b', text: 'En bevegelse for arbeidernes rettigheter i fabrikkene', isCorrect: false },
              { id: 'c', text: 'En bevegelse som kjempet for kvinners stemmerett', isCorrect: true },
              { id: 'd', text: 'En bevegelse for å avskaffe slaveriet', isCorrect: false },
            ],
            solution: 'Suffragettbevegelsen var kampen for kvinners stemmerett. Modige kvinner organiserte seg, holdt demonstrasjoner, skrev bøker og artikler, og noen brukte sivil ulydighet. De ble hånet og arrestert, men ga seg ikke -- og vant til slutt frem.',
          },
        ],
      },
    },
    {
      id: 'historie-6-4-n-section4',
      type: 'text',
      content: `## Demokratiets seier -- og skjørhet

Gjennom 1900-tallet spredte demokratiet seg over stadig større deler av verden, men veien var alt annet enn rett. Historien viste gang på gang at demokratiet er skjørt og aldri kan tas for gitt.

Etter **første verdenskrig** kollapset de store imperiene -- Østerrike-Ungarn, Det osmanske riket, det russiske tsardømmet, det tyske keiserriket. Nye demokratier ble født i ruinene. Men mange av dem overlevde ikke lenge. På 1920- og 1930-tallet reiste **fascismen** seg i Italia og Tyskland. Hitler ble utnevnt til rikskansler i januar 1933 gjennom politisk manøvrering av konservative eliter som trodde de kunne kontrollere ham. NSDAP hadde aldri vunnet flertall i et fritt valg -- partiets beste resultat var 37,3 prosent i juli 1932, og i november samme år sank oppslutningen. Likevel brukte Hitler sin posisjon til å avvikle demokratiet innenfra. Det var en skremmende lærepenge om demokratiets sårbarhet.

Etter **andre verdenskrig** ble fascismen beseiret, og demokratiet fikk en ny start i Vest-Europa og Japan. Men den kalde krigen delte verden i to: et demokratisk vest og et kommunistisk øst. Først etter **Berlinmurens fall i 1989** og Sovjetunionens oppløsning i 1991 ble store deler av Øst-Europa demokratiske.

I dag diskuteres det om demokratiet står overfor nye utfordringer. Begrepet **populisme** brukes ofte i denne debatten, men det er omstridt -- noen ser populistiske bevegelser som en trussel mot demokratiske institusjoner, mens andre mener de representerer legitim folkelig misnøye med etablerte eliter. **Desinformasjon** spres raskere enn noen gang gjennom sosiale medier, noe som kan gjøre det vanskeligere for borgere å ta informerte valg. **Polarisering** gjør det i mange land mer krevende å finne politiske kompromisser. Forskere diskuterer om demokratiet er i tilbakegang globalt, og hva årsakene i så fall er.

Opplysningstidens og revolusjonenes budskap er derfor like viktig i dag som for 250 år siden: Demokrati er ikke noe som bare oppstår og vedvarer av seg selv. Det må kjempes for, forsvares og fornyes -- i hver generasjon.`,
    },
    {
      id: 'historie-6-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på demokratiets seier og skjørhet i det 20. århundre:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-4-n-quiz4-q0',
            task: 'Hva viste Hitlers vei til makten om demokratiets sårbarhet?',
            options: [
              { id: 'a', text: 'At demokrati aldri kan fungere i store land', isCorrect: false },
              { id: 'b', text: 'At militærkupp er den vanligste måten å avskaffe demokrati på', isCorrect: false },
              { id: 'c', text: 'At demokratiet kan undergraves innenfra av krefter som bruker politiske verktøy for å avvikle systemet', isCorrect: true },
              { id: 'd', text: 'At diktatur alltid er mer stabilt enn demokrati', isCorrect: false },
            ],
            solution: 'Hitler ble utnevnt til rikskansler i 1933 etter politisk manøvrering, selv om NSDAP aldri vant flertall i et fritt valg. Han brukte deretter sin posisjon til å avskaffe demokratiet innenfra -- en skremmende lærepenge om demokratiets sårbarhet.',
          },
          {
            id: 'historie-6-4-n-quiz4-q1',
            task: 'Hva skjedde med de store imperiene etter første verdenskrig?',
            options: [
              { id: 'a', text: 'De ble sterkere og utvidet sine grenser', isCorrect: false },
              { id: 'b', text: 'Østerrike-Ungarn, Det osmanske riket, det russiske tsardømmet og det tyske keiserriket kollapset', isCorrect: true },
              { id: 'c', text: 'De ble alle omdannet til demokratier som varte i hundrevis av år', isCorrect: false },
              { id: 'd', text: 'De slo seg sammen til en europeisk union', isCorrect: false },
            ],
            solution: 'Etter første verdenskrig kollapset de store imperiene -- Østerrike-Ungarn, Det osmanske riket, det russiske tsardømmet og det tyske keiserriket. Nye demokratier ble født i ruinene, men mange overlevde ikke lenge.',
          },
          {
            id: 'historie-6-4-n-quiz4-q2',
            task: 'Hvilken hendelse i 1989 markerte starten på demokratisering i Øst-Europa?',
            options: [
              { id: 'a', text: 'Den franske revolusjonens 200-årsjubileum', isCorrect: false },
              { id: 'b', text: 'Berlinmurens fall', isCorrect: true },
              { id: 'c', text: 'Opprettelsen av EU', isCorrect: false },
              { id: 'd', text: 'Første verdenskrigen tok slutt', isCorrect: false },
            ],
            solution: 'Berlinmurens fall i 1989 og Sovjetunionens oppløsning i 1991 markerte slutten på den kalde krigen og åpnet for demokratisering i store deler av Øst-Europa som hadde levd under kommunistisk styre.',
          },
        ],
      },
    },
    {
      id: 'historie-6-4-n-section5',
      type: 'text',
      content: `## Den lange arven

La oss ta et steg tilbake og se på den store linjen. Fra Lockes ideer om naturlige rettigheter på 1600-tallet, gjennom den amerikanske og franske revolusjonen, via 1800-tallets demokratikamp og 1900-tallets verdenskriger, til vårt eget demokrati i dag -- det er en lang, kronglete og blodig vei.

Men det er også en bemerkelsesverdig vei. Ideene som noen få modige filosofer formulerte for over 300 år siden, har forandret hele verden. **Folkesuverenitet** -- ideen om at makten tilhører folket -- er i dag den mest utbredte begrunnelsen for politisk legitimitet. **Menneskerettighetene** er nedfelt i internasjonal lov. **Maktfordeling** er en selvfølge i demokratiske stater. **Ytringsfrihet** og **religiøs toleranse** er grunnverdier vi forsvarer.

Den norske Grunnloven fra 1814 er et direkte barn av denne tradisjonen. Når du stemmer ved valg, når du ytrer deg fritt, når du stoler på at domstolene er uavhengige av politikerne -- da lever du i opplysningstidens og revolusjonenes arv.

Men historien lærer oss også noe annet: at politisk utvikling ikke følger en rett linje. At rettigheter som er etablert, kan svekkes igjen. At demokratiet krever aktive borgere og velfungerende institusjoner.

Ulike politiske tradisjoner trekker ulike lærdommer fra denne perioden. Liberale vektlegger individets rettigheter og begrensninger på statsmakten. Konservative fremhever institusjonenes verdi og farene ved radikal omveltning. Sosialdemokrater peker på behovet for sosial rettferdighet som grunnlag for reelt demokrati. Til sammen minner disse perspektivene oss om at demokrati er et vedvarende prosjekt som krever refleksjon, debatt og deltakelse.`,
    },
    {
      id: 'historie-6-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på demokratiets arv fra opplysningstiden til i dag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: 'historie-6-4-n-quiz5-q0',
            task: 'Hvilken idé fra opplysningstiden er i dag den mest utbredte begrunnelsen for politisk legitimitet?',
            options: [
              { id: 'a', text: 'Kongens gudgitte rett til å styre', isCorrect: false },
              { id: 'b', text: 'Folkesuverenitet -- at makten tilhører folket', isCorrect: true },
              { id: 'c', text: 'At de rikeste bør styre', isCorrect: false },
              { id: 'd', text: 'At kirken bør ha overordnet makt', isCorrect: false },
            ],
            solution: 'Folkesuverenitet -- ideen om at all legitim makt utgår fra folket -- er i dag den mest utbredte begrunnelsen for politisk legitimitet. Selv autoritære regimer føler seg tvunget til å hevde at de representerer folkets vilje.',
          },
          {
            id: 'historie-6-4-n-quiz5-q1',
            task: 'Hvilken norsk grunnlov er et direkte produkt av opplysningstidens og revolusjonenes ideer?',
            options: [
              { id: 'a', text: 'Magnus Lagabøtes landslov fra 1274', isCorrect: false },
              { id: 'b', text: 'Christian IVs Norske Lov fra 1687', isCorrect: false },
              { id: 'c', text: 'Grunnloven av 1814', isCorrect: true },
              { id: 'd', text: 'Arbeidsmiljøloven av 1977', isCorrect: false },
            ],
            solution: 'Den norske Grunnloven fra 1814 er et direkte barn av opplysningstradisjonen. Den inneholder maktfordelingsprinsippet, borgerrettigheter og folkesuverenitet -- alle ideer som ble formulert av opplysningsfilosofene og realisert gjennom de store revolusjonene.',
          },
          {
            id: 'historie-6-4-n-quiz5-q2',
            task: 'Hva er den viktigste lærdommen fra hele denne perioden -- fra opplysningstiden til i dag?',
            options: [
              { id: 'a', text: 'At demokrati er en naturlov som aldri kan trues', isCorrect: false },
              { id: 'b', text: 'At revolusjon alltid er den beste veien til demokrati', isCorrect: false },
              { id: 'c', text: 'At demokrati er et vedvarende prosjekt som krever aktive borgere og må forsvares i hver generasjon', isCorrect: true },
              { id: 'd', text: 'At bare europeiske land kan ha demokrati', isCorrect: false },
            ],
            solution: 'Historien viser at demokrati ikke er noe som bare oppstår og vedvarer av seg selv. Rettigheter som er etablert, kan svekkes igjen. Demokratiet krever aktive borgere, velfungerende institusjoner, og må kjempes for og fornyes i hver generasjon.',
          },
        ],
      },
    },
    {
      id: 'historie-6-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Veien fra revolusjon til moderne demokrati var lang, kronglete og ofte voldelig -- men ideene fra opplysningstiden seiret til slutt.

**Nøkkelbegreper du nå kjenner:**
- **Wienerkongressen** (1814-1815): Forsøket på å gjenopprette det gamle regimet etter Napoleon
- **Liberalisme**: Politisk ideologi som drev demokratiseringen på 1800-tallet
- **Revolusjonsbølgen i 1848**: Demokratiske oppstand over hele Europa
- **Suffragettbevegelsen**: Kampen for kvinners stemmerett
- **Demokratiets skjørhet**: Historien viser at demokrati kan gå tapt igjen

**Det viktigste du tar med deg:**
Fra opplysningstiden til i dag har kampen for demokrati vært en gradvis utvidelse av hvem som får være med å bestemme -- fra rike menn, til alle menn, til kvinner, til alle myndige borgere. Rettigheter vinnes gjennom kamp og må forsvares i hver generasjon. Demokratiet er ikke selvfølgelig -- det er et prosjekt som krever aktive, opplyste borgere.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksportarray for del 5
// ============================================================================

export const HISTORIE_NARRATIV_DEL5_CHAPTERS = [
  CHAPTER_HISTORIE_6_1_NARRATIV,
  CHAPTER_HISTORIE_6_2_NARRATIV,
  CHAPTER_HISTORIE_6_3_NARRATIV,
  CHAPTER_HISTORIE_6_4_NARRATIV,
];
