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

Tenk deg at du lever i Europa rundt 1700. Du er født inn i en verden der kongen hevder at han styrer fordi Gud har valgt ham. Kirken forteller deg hva som er sant og hva som er synd. Hvis du stiller for mange sporsmal, risikerer du a bli anklaget for kjetteri. Du eier ikke deg selv -- du er kongens undersatt, kirkens lam, tradisjonens fange.

Sa begynner noe a forandre seg. Noen modige tenkere -- filosofer, forfattere, vitenskapsmenn -- begynner a stille de sporsmaalene ingen har vaget a stille for: Hva om kongen *ikke* styrer pa Guds vegne? Hva om kirken tar feil? Hva om vi bruker **fornuften** i stedet for tradisjonen til a forstaa verden?

Dette var starten pa **opplysningstiden**, en intellektuell revolusjon som forandret Europa -- og til slutt hele verden. Perioden fra ca. 1700 til 1800 ble fornuftens tidsalder, en tid da tenkere vaget a bruke sin egen forstand til a utfordre alt som tidligere hadde vaert selvsagt. Og de bygde videre pa noe viktig: den **vitenskapelige revolusjonen** pa 1600-tallet, der Isaac Newton og andre hadde vist at naturen fulgte lovmessigheter som kunne oppdages gjennom observasjon og eksperimenter. Opplysningsfilosofene stilte et dristig sporsmaal: Hvis vi kan forstaa naturens lover, kan vi ikke ogsa finne lovene for et godt samfunn?`,
    },
    {
      id: 'historie-6-1-n-section1',
      type: 'text',
      content: `## John Locke -- frihetens filosof

La oss begynne med en engelskmann som skulle inspirere revolusjoner pa begge sider av Atlanterhavet. **John Locke** (1632-1704) levde i en tid da England selv gikk gjennom politiske omveltninger. Han opplevde borgerkrig, kongedrap og en "glorius revolusjon" -- og alt dette formet hans tenkning.

Locke kom med en ide som var revolusjonaer i sin enkelhet: Alle mennesker er fodt med **naturlige rettigheter** -- retten til liv, frihet og eiendom. Disse rettighetene er ikke noe en sjeneroas konge gir deg. De er dine fra fodselen av, simpelthen fordi du er et menneske.

Men Locke gikk enda lenger. Han mente at en regjerings eneste oppgave er a beskytte disse rettighetene. Hvis en konge krenker folkets rettigheter i stedet for a beskytte dem, har folket rett til a gjore opproor. Tenk pa det: I en tid da konger ble ansett som Guds utvalgte pa jorda, hevdet Locke at vanlige mennesker hadde rett til a avsette dem.

Denne ideen -- at makten kommer nedenfra, fra folket, ikke ovenfra fra Gud -- skulle vise seg a vaere dynamitt. Den inspirerte bade den amerikanske og den franske revolusjonen og ligger til grunn for alle moderne demokratier.`,
    },
    {
      id: 'historie-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva mente John Locke med "naturlige rettigheter"?',
        options: [
          { id: 'a', text: 'Rettigheter som kongen gir til folket som belonning for lydighet', isCorrect: false },
          { id: 'b', text: 'Rettigheter alle mennesker er fodt med -- til liv, frihet og eiendom', isCorrect: true },
          { id: 'c', text: 'Rettigheter som bare gjelder adelen og de rike', isCorrect: false },
          { id: 'd', text: 'Rettigheter som kirken definerer i sine hellige tekster', isCorrect: false },
        ],
        solution: 'Locke mente at alle mennesker foodes med umistelige rettigheter til liv, frihet og eiendom. Disse rettighetene er ikke gitt av en konge eller regjering, men tilhorer hvert menneske fra fodselen. Hvis en regjering krenker disse rettighetene, har folket rett til opproor.',
      },
    },
    {
      id: 'historie-6-1-n-section2',
      type: 'text',
      content: `## Montesquieu og maktens tredeling

Hvis Locke ga oss ideen om at makten tilhorer folket, ga den franske filosofen **Montesquieu** (1689-1755) oss oppskriften pa hvordan makten burde organiseres. Han stilte et praktisk sporsmaal: Hvordan hindrer vi at noen misbruker makten, selv i et fritt samfunn?

Montesquieus svar ble et av historiens mest innflytelsesrike politiske ideer: **maktfordelingsprinsippet**. Han mente at statsmakten matte deles i tre uavhengige grener. Den **lovgivende makten** -- et parlament -- skulle lage lovene. Den **utovende makten** -- en regjering eller president -- skulle gjennomfore lovene. Og den **dommende makten** -- uavhengige domstoler -- skulle domme etter lovene.

Poenget var genialt enkelt: Nar ingen enkeltperson eller gruppe kontrollerer all makt, kan de ulike maktgrenene holde hverandre i sjakk. Parlamentet kan kontrollere regjeringen. Domstolene kan underkjenne lover som bryter med grunnloven. Regjeringen kan ikke bare gjore som den vil.

Tenk pa det slik: Det er som et system med tre laaserr pa samme dor. Ingen enkeltnoekkel kan aapne den alene. Du trenger alle tre for a fa tilgang til makten. Denne ideen ble grunnlaget for den amerikanske grunnloven, og du finner den igjen i den norske Grunnloven med Stortinget, regjeringen og domstolene.`,
    },
    {
      id: 'historie-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilke tre makter mente Montesquieu at statsmakten burde deles inn i?',
        options: [
          { id: 'a', text: 'Kongen, kirken og adelen', isCorrect: false },
          { id: 'b', text: 'Haeren, flaaten og politiet', isCorrect: false },
          { id: 'c', text: 'Den lovgivende, den utovende og den dommende makt', isCorrect: true },
          { id: 'd', text: 'Folket, parlamentet og grunnloven', isCorrect: false },
        ],
        solution: 'Montesquieu mente at statsmakten matte deles i lovgivende makt (parlamentet lager lover), utovende makt (regjeringen gjennomforer lover) og dommende makt (domstolene dommer etter lovene). Slik kunne de tre grenene kontrollere hverandre og hindre maktmisbruk.',
      },
    },
    {
      id: 'historie-6-1-n-section3',
      type: 'text',
      content: `## Voltaire, Rousseau og kampen for frihet

**Voltaire** (1694-1778) var opplysningstidens mest beroomte og fryktede penn. Han var forfatter, filosof og satiriker, og han brukte sin skarpe humor som vaapen mot det han betraktet som uvitenhet, intoleranse og maktmisbruk. Voltaire kjempet utrrettelig for **ytringsfrihet** og **religios toleranse**. Han kritiserte kirken skarpt for dens dogmer og forfolgelse av annerledestenkende. Selv ble han fengslet i Bastillen og tvunget i eksil -- noe som bare styrket hans overbevisning om at frie mennesker matte faa tenke og snakke fritt.

Men den kanskje mest radikale tenkeren var **Jean-Jacques Rousseau** (1712-1778), en sveitsisk-fransk filosof som snudde opp ned pa sin tids tankesett. I sitt beroomte verk "Samfunnskontrakten" (1762) utviklet han ideen om **folkesuverenitet**: all legitim makt utgar fra folket. Mennesker inngar en "kontrakt" med hverandre der de gir opp noe frihet til fellesskapet, og til gjengjeld far de beskyttelse og orden. Rousseau mente at mennesket fra naturens side er godt, men at samfunnet korrumperer det. Bare gjennom ekte demokrati -- der borgerne selv deltar i beslutningene -- kan mennesker vaere virkelig frie.

Disse tenkerne utfylte hverandre: Locke ga oss rettighetene, Montesquieu ga oss systemet, Voltaire kjempet for friheten, og Rousseau insisterte pa at makten tilhorer folket. Sammen la de det intellektuelle grunnlaget for en ny verden.`,
    },
    {
      id: 'historie-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva mente Rousseau med "folkesuverenitet"?',
        options: [
          { id: 'a', text: 'At kongen er suverent overhode valgt av Gud', isCorrect: false },
          { id: 'b', text: 'At all legitim makt utgar fra folket selv', isCorrect: true },
          { id: 'c', text: 'At de rikeste borgerne bor styre landet', isCorrect: false },
          { id: 'd', text: 'At folket skal adlyde lovene uten a stille sporsmaal', isCorrect: false },
        ],
        solution: 'Folkesuverenitet betyr at all makt i et samfunn utgar fra folket, ikke fra Gud, kongen eller tradisjonen. Rousseau mente at borgerne inngar en samfunnskontrakt der de gir opp noe frihet for fellesskap og beskyttelse, men at den ovverste makten alltid tilhorer folket.',
      },
    },
    {
      id: 'historie-6-1-n-section4',
      type: 'text',
      content: `## Encyklopedien -- kunnskap som vaapen

Et av opplysningstidens mest ambisiose prosjekter var **Encyklopedien** (1751-1772), redigert av Denis Diderot og Jean d'Alembert. I 28 enorme bind samlet de kunnskap om alt fra vitenskap og filosofi til haandverk og kunst. Over 4000 mennesker abonnerte pa verket -- et enormt tall for sin tid.

Men Encyklopedien var langt mer enn et oppslagsverk. Den var et intellektuelt vaapen mot uvitenhet og overtro. Mellom linjene kritiserte artiklene kirken og tradisjonell autoritet. Ved aa gjore kunnskap tilgjengelig for alle, utfordret Diderot og hans medarbeidere selve ideen om at kunnskap skulle vaere forbeholdt en liten elite. De trodde oppriktig at kunnskap kunne frigjore mennesket.

Myndighetene forsto trusstelen. Encyklopedien ble forbudt flere ganger, trykkeriene ble ransaket, og Diderot risikerte fengselsstraff. Men verket ble fullfort -- et monument over opplysningstidens tro pa at fornuft og kunnskap kan forandre verden.`,
    },
    {
      id: 'historie-6-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor ble Encyklopedien forbudt av myndighetene?',
        options: [
          { id: 'a', text: 'Fordi den inneholdt feil og upresis informasjon', isCorrect: false },
          { id: 'b', text: 'Fordi den var altfor dyr for vanlige folk', isCorrect: false },
          { id: 'c', text: 'Fordi den kritiserte kirken og tradisjonell autoritet og truet makthaverne', isCorrect: true },
          { id: 'd', text: 'Fordi den ble utgitt pa feil sprak', isCorrect: false },
        ],
        solution: 'Encyklopedien ble forbudt fordi den utgjorde en trussel mot kirken og de tradisjonelle makthaverne. Ved a spre kunnskap til alle og kritisere autoritetene utfordret verket det eksisterende maktgrunnlaget. Myndighetene forsto at kunnskap var farlig for dem som regjerte gjennom uvitenhet.',
      },
    },
    {
      id: 'historie-6-1-n-section5',
      type: 'text',
      content: `## Ideene som endret verden

Opplysningstidens ideer forble ikke i filosofenes studerkamre. De fikk enorm praktisk betydning og inspirerte noen av historiens viktigste politiske hendelser:

Den **amerikanske uavhengighetserkleringen** i 1776 bygde direkte pa Lockes ideer om naturlige rettigheter. Den **franske revolusjonen** i 1789 tok Rousseaus folkesuverenitet fra teori til praksis -- med bade fantastiske og skremmende resultater. Og i 1814 fikk Norge sin egen **Grunnlov**, full av opplysningstidens ideer om maktfordeling og borgerrettigheter.

Ideene om **menneskerettigheter** har rottter i opplysningstidens naturrettstenkning -- ideen om at alle mennesker har rettigheter simpelthen fordi de er mennesker. Troen pa **demokrati, ytringsfrihet, religios toleranse** og **utdanning for alle** -- alt dette stammer fra denne perioden.

Vi lever fortsatt i opplysningstidens lange skygge. Hver gang du stemmer ved et valg, ytrer deg fritt, gar pa en skole der du laerer a tenke kritisk, eller stoler pa at domstolene er uavhengige -- da nyter du fruktene av ideer som ble tenkt for over 300 aar siden, av modige mennesker som vaget a sette fornuften over tradisjonen.`,
    },
    {
      id: 'historie-6-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilken opplysningsfilosof utviklet ideen om maktfordelingsprinsippet?',
        options: [
          { id: 'a', text: 'John Locke', isCorrect: false },
          { id: 'b', text: 'Voltaire', isCorrect: false },
          { id: 'c', text: 'Jean-Jacques Rousseau', isCorrect: false },
          { id: 'd', text: 'Montesquieu', isCorrect: true },
        ],
        solution: 'Det var Montesquieu som utviklet maktfordelingsprinsippet -- ideen om at statsmakten bor deles i lovgivende, utovende og dommende makt. Locke utviklet ideen om naturlige rettigheter, Voltaire kjempet for ytringsfrihet, og Rousseau utviklet ideen om folkesuverenitet.',
      },
    },
    {
      id: 'historie-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Opplysningstiden (ca. 1700-1800) var en intellektuell revolusjon som satte fornuften i sentrum og utfordret tradisjonelle autoriteter som kirken og eneveldet.

**Nokkelbegreper du na kjenner:**
- **Opplysningstiden**: Fornuftens tidsalder som vektla vitenskap, fornuft og fremskrittstro
- **Naturlige rettigheter** (Locke): Alle mennesker er fodt med rettigheter til liv, frihet og eiendom
- **Maktfordelingsprinsippet** (Montesquieu): Statsmakten deles i lovgivende, utovende og dommende makt
- **Folkesuverenitet** (Rousseau): All legitim makt utgar fra folket
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
  description: 'En fortelling om da kolonistene gjorde opproer mot verdens mektigste imperium og skapte en ny type nasjon.',
  estimatedMinutes: 40,
  competenceGoals: ['ideologier bak politiske omveltninger'],
  linkedChapterId: 'historie-6-2',
  content: [
    {
      id: 'historie-6-2-n-intro',
      type: 'text',
      content: `## Te, skatt og revolusjon

Forestill deg at du er en bonde i Massachusetts i 1770. Du har ryddet jord, bygd et hus og skapt deg et liv i den nye verden. Du betaler skatt til en konge som sitter tusenvis av kilometer unna, i et land du kanskje aldri har sett. Du har ingen representant i det britiske parlamentet som kan tale din sak. Likevel bestemmer fjerne politikere i London over ditt liv, din okonomi og din fremtid.

Sa kommer nye skatter -- stempelskatt pa dokumenter, avgifter pa glass, papir og te. Kongen trenger penger etter den kostbare sjuaarskrigen (1756-1763), og han mener kolonistene bor betale sin del. Men for deg foles det dypt urettferdig: Hvorfor skal du betale skatt til et parlament der du ikke har noen stemme?

Et slagord begynner a bre seg fra munn til munn, fra by til by: **"No taxation without representation"** -- ingen skatt uten representasjon. Det hoores kanskje ut som et enkelt oikonomisk krav, men det rommet noe mye storre. For bak slagordet la opplysningstidens store ideer: at makten tilhorer folket, at regjeringen trenger folkets samtykke, og at ingen har rett til a styre andre uten deres godkjenning.

Slik begynte en revolusjon som skulle forandre verden.`,
    },
    {
      id: 'historie-6-2-n-section1',
      type: 'text',
      content: `## Boston Tea Party og veien mot krig

Konflikten mellom kolonistene og Storbritannia tilspisset seg gjennom en serie dramatiske hendelser. Den 16. desember 1773 skjedde noe som fortsatt huskes som et av historiens mest beroomte protestaksjoner: **Boston Tea Party**.

En gruppe kolonister, forkledd som mohawkinndianere, snek seg om bord pa tre britiske skip i Boston havn. I loapt av natten kastet de 342 kasser te i sjoen -- te verdt en formue. Det var ikke vandalisme. Det var en noye planlagt, symbolsk protest mot teavgiften og prinsippet om skattlegging uten representasjon.

Den britiske regjeringen reagerte med raseri. De vedtok det kolonistene kalte "de utalelige lovene" -- strenge straffetiltak som stengte Bostons havn og innskrenket Massachusetts' selvstyre. Men i stedet for a kue motstanden, hadde Storbritannia tent en lunte.

I 1774 moottes representanter fra tolv av de tretten koloniene i **Kontinentalkongressen** for a koordinere motstanden. De vedtok a boikotte britiske varer. Spenningen steg. Begge sider rustet seg.

Sa, den 19. april 1775, smalt de foerste skuddene. Ved **Lexington og Concord** i Massachusetts stootte britiske soldater pa kolonistmilitser. Ingen vet hvem som fyrte av det foerste skuddet -- det beroomte "skuddet som ble hort over hele verden" -- men krigen var i gang.`,
    },
    {
      id: 'historie-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var Boston Tea Party?',
        options: [
          { id: 'a', text: 'En fest der kolonistene feiret sin uavhengighet fra Storbritannia', isCorrect: false },
          { id: 'b', text: 'En protestaksjon der kolonister kastet britisk te i sjoen som protest mot skattlegging uten representasjon', isCorrect: true },
          { id: 'c', text: 'Et moote der kolonistene forhandlet med britene om lavere teavgifter', isCorrect: false },
          { id: 'd', text: 'En handelsmesse der kolonistene solgte sin egen te for a konkurrere med britene', isCorrect: false },
        ],
        solution: 'Boston Tea Party (1773) var en dramatisk protestaksjon der kolonister, forkledd som indianere, kastet 342 kasser britisk te i Boston havn. Aksjonen var en protest mot teavgiften og prinsippet om skattlegging uten representasjon i parlamentet.',
      },
    },
    {
      id: 'historie-6-2-n-section2',
      type: 'text',
      content: `## Uavhengighetserkleringen -- ord som endret historien

Den 4. juli 1776 vedtok Kontinentalkongressen et dokument som skulle bli et av de viktigste i verdenshistorien: **uavhengighetserkleringen**. Den unge Thomas Jefferson, bare 33 aar gammel, hadde skrevet utkastet.

Erkleringen aapner med ord som fortsatt gir gaaesehud: *"Vi holder disse sannhetene for selvinnlysende, at alle mennesker er skapt like, at de av sin skaper er utstyrt med visse umistelige rettigheter, at blant disse er liv, frihet og streben etter lykke."*

Horer du ekkoet fra opplysningsfilosofene? Lockes naturlige rettigheter er her -- om enn med en viktig endring: Jefferson byttet ut Lockes "eiendom" med "streben etter lykke." Rousseaus folkesuverenitet er her: Erkleringen slar fast at regjeringens makt kommer fra **folkets samtykke**, og at folket har rett til a avsette en tyrannisk regjering.

Men uavhengighetserkleringen var ikke bare filosofi. Den var ogsa et anklageskrift mot kong George III. En lang liste beskrev kongens overgrep mot koloniene -- alt fra urettferdige skatter til bruk av militaermakt mot sivile. Dokumentet var bade et filosofisk manifest og en krigserkleering, pakket inn i opplysningstidens sprak.

Det var en uhort handling: Tretten smaa kolonier erklaerete seg uavhengige fra verdens mektigste imperium. Na matte de bevise at de mente det.`,
    },
    {
      id: 'historie-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvilken opplysningsfilosof inspirerte uavhengighetserkleringens ideer om naturlige rettigheter mest direkte?',
        options: [
          { id: 'a', text: 'Voltaire', isCorrect: false },
          { id: 'b', text: 'Montesquieu', isCorrect: false },
          { id: 'c', text: 'John Locke', isCorrect: true },
          { id: 'd', text: 'Jean-Jacques Rousseau', isCorrect: false },
        ],
        solution: 'John Locke var den viktigste inspirasjonskilden for uavhengighetserkleringen. Jeffersons formuleringer om "umistelige rettigheter" til "liv, frihet og streben etter lykke" bygger direkte pa Lockes ideer om naturlige rettigheter til liv, frihet og eiendom.',
      },
    },
    {
      id: 'historie-6-2-n-section3',
      type: 'text',
      content: `## Krigen for uavhengighet

**Uavhengighetskrigen** (1775-1783) ble en lang og brutal affaere. Pa papiret burde kolonistene ikke hatt en sjanse. Storbritannia hadde verdens beste marine, en profesjonell haer og enorme ressurser. Kolonistene hadde en samling frivillige militser, lite trening og naesten ingen marine.

Men de hadde **George Washington**, en virginiaplanter som ble utnevnt til overkommanderende. Washington var ikke noe militaert geni, men han hadde noe viktigere: utholdenhet, klokskap og evnen til a holde sin demoraliserte haer sammen gjennom de moerkeste timene. Den beryktede vinteren ved Valley Forge i 1777-1778, da Washingtons menn naesten froos og sultet i hjel, ble et symbol pa revolusjonens ofre.

Det som reddet kolonistene var **Frankrikes inntreden i krigen**. Frankrike -- som hadde tapt sjuaarskrigen mot Storbritannia -- sa en gyllen mulighet til hevn. De sendte tropper, vaapen, penger og -- avgjorende -- sin flaate. Med fransk stoette klarte kolonistene a vinne det avgjorende slaget ved Yorktown i 1781.

I 1783 anerkjente Storbritannia USAs uavhengighet i **Parisfreden**. Det umulige hadde skjedd: Tretten kolonier hadde beseiret verdens stormakt.`,
    },
    {
      id: 'historie-6-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvilket land hjalp kolonistene i krigen mot Storbritannia?',
        options: [
          { id: 'a', text: 'Spania', isCorrect: false },
          { id: 'b', text: 'Frankrike', isCorrect: true },
          { id: 'c', text: 'Nederland', isCorrect: false },
          { id: 'd', text: 'Russland', isCorrect: false },
        ],
        solution: 'Frankrike ga avgjorende stoette til kolonistene med tropper, vaapen, penger og sin marine. Frankrikes motivasjon var bade ideologisk (sympati for frihetskampen) og strategisk (svekke sin rival Storbritannia etter tapet i sjuaarskrigen).',
      },
    },
    {
      id: 'historie-6-2-n-section4',
      type: 'text',
      content: `## Den nye republikken

Etter seieren sto kolonistene overfor en enda storre utfordring enn krigen: Hvordan bygger man en helt ny type nasjon? De hadde ingen kongefamilie, ingen adel, ingen gammel tradisjon a lene seg pa. De matte finne opp noe nytt.

I 1787 samlet delegater seg i Philadelphia for a skrive **den amerikanske grunnloven** -- og her ble opplysningstidens ideer for foerste gang omsatt til et fungerende politisk system. Montesquieus maktfordelingsprinsipp ble kjernen: **Kongressen** (Senatet og Representantenes hus) fikk den lovgivende makten. **Presidenten** fikk den utovende makten. **Hoyesterett** fikk den dommende makten. Og alle tre skulle kontrollere hverandre gjennom et system av "checks and balances."

I 1791 ble **Bill of Rights** -- de ti foerste grunnlovstilleggene -- vedtatt. De sikret grunnleggende rettigheter som ytringsfrihet, religionsfrihet, pressefrihet og retten til rettferdig rettergang. Her horer vi Voltaires kamp for toleranse og Lockes insistering pa individets rettigheter.

Men la oss vaere aerlige om revolusjonens begrensninger. Nar uavhengighetserkleringen sa at "alle mennesker er skapt like", gjaldt det i praksis hvite, eiendomsbesittende menn. Slaveriet ble ikke avskaffet. Kvinner fikk ikke stemmerett. Urbefolkningen ble oversett. Den amerikanske revolusjonen plantet froet til frihet og likhet -- men det skulle ta generasjoner for disse idealene begynte a gjelde alle.`,
    },
    {
      id: 'historie-6-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva var "Bill of Rights" i den amerikanske grunnloven?',
        options: [
          { id: 'a', text: 'En erklaering om uavhengighet fra Storbritannia', isCorrect: false },
          { id: 'b', text: 'En lov som avskaffet slaveriet i alle delstater', isCorrect: false },
          { id: 'c', text: 'De ti foerste grunnlovstilleggene som sikret grunnleggende rettigheter som ytringsfrihet og religionsfrihet', isCorrect: true },
          { id: 'd', text: 'Et dokument som ga alle innbyggere stemmerett', isCorrect: false },
        ],
        solution: 'Bill of Rights (1791) var de ti foerste tilleggene til den amerikanske grunnloven. De sikret individuelle rettigheter som ytringsfrihet, religionsfrihet, pressefrihet, retten til a bere vaapen og retten til rettferdig rettergang. De bygde pa opplysningsfilosofenes ideer om naturlige rettigheter.',
      },
    },
    {
      id: 'historie-6-2-n-section5',
      type: 'text',
      content: `## En revolusjon som inspirerte verden

Den amerikanske revolusjonen var langt mer enn en loesrivelse fra et imperium. Den var det foerste forsooket i moderne tid pa a bygge et helt samfunn pa opplysningstidens ideer. For foerste gang ble filosofi til politikk, teori til praksis, og droommer til grunnlov.

Nyhetene fra Amerika spredte seg raskt over Atlanterhavet. I Frankrike fulgte opplyste borgere med begeistring. Benjamin Franklin, som representerte kolonistene i Paris, ble en celebritet -- symbol pa den nye verdens frihet og likhet. Mange franske soldater og offiserer hadde deltatt i krigen, som den unge marquis de Lafayette, og kom hjem med revolusjonaere ideer.

Ironisk nok bidro Frankrikes stoette til den amerikanske revolusjonen til a utlose den franske. Krigen hadde kostet Frankrike enorme summer og forverret statens allerede desperate okonomi. Og ideene om frihet og folkesuverenitet, som hadde vunnet i Amerika, kunne ikke holdes ute av Frankrike. Bare seks aar etter Parisfreden ville Bastillen falle.

Den amerikanske revolusjonen viste at det var mulig a avsette en monark, etablere en republikk og bygge en nasjon pa ideen om at alle mennesker er skapt like. Selv med alle sine mangler og motsetninger la den grunnlaget for den demokratiske tradisjonen som vi i dag tar for gitt.`,
    },
    {
      id: 'historie-6-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvordan bidro den amerikanske revolusjonen til a utlose den franske revolusjonen?',
        options: [
          { id: 'a', text: 'Amerikanske soldater invaderte Frankrike', isCorrect: false },
          { id: 'b', text: 'Frankrikes kostbare stoette til kolonistene forverret statens okonomi, og revolusjonens ideer inspirerte franske borgere', isCorrect: true },
          { id: 'c', text: 'Den franske kongen ble tvunget til a kopiere den amerikanske grunnloven', isCorrect: false },
          { id: 'd', text: 'Storbritannia presset Frankrike til a gjennomfore reformer', isCorrect: false },
        ],
        solution: 'Frankrikes stoette til den amerikanske revolusjonen hadde to viktige konsekvenser: De enorme krigskostnadene forverret Frankrikes allerede kritiske okonomi, og franske soldater kom hjem med ideer om frihet og folkesuverenitet som inspirerte den franske revolusjonen i 1789.',
      },
    },
    {
      id: 'historie-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Den amerikanske revolusjonen (1775-1783) var den foerste moderne revolusjonen som omsatte opplysningstidens ideer til et fungerende politisk system.

**Nokkelbegreper du na kjenner:**
- **"No taxation without representation"**: Slagord om at skattlegging krever politisk representasjon
- **Boston Tea Party** (1773): Symbolsk protestaksjon som tilspisset konflikten
- **Uavhengighetserkleringen** (4. juli 1776): Historisk dokument bygd pa Lockes ideer om naturlige rettigheter
- **Den amerikanske grunnloven** (1787): Forste grunnlov basert pa maktfordelingsprinsippet
- **Bill of Rights** (1791): Grunnlovstillegg som sikret individuelle rettigheter

**Det viktigste du tar med deg:**
Den amerikanske revolusjonen viste at det var mulig a bygge en nasjon pa opplysningstidens ideer om frihet, likhet og maktfordeling. Men "alle mennesker er skapt like" gjaldt ikke alle -- slaveri, kvinners rettigheter og urbefolkningens situasjon viser at revolusjonens idealer bare delvis ble realisert.`,
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
      content: `## Et rike pa randen av sammenbrudd

Frankrike pa 1780-tallet var et paradoks. Det var Europas mektigste stat, med den mest straalende kulturen, de finest kledde adelsmennene og det mest prangende hoffet i verden -- slottet i Versailles. Men under den forgylt overflaten raatnet alt.

Tenk deg det franske samfunnet som en bygning med tre etasjer. I foerste etasje bodde **geistligheten** -- omtrent 100 000 prester, munker og biskopper. De eide enorme landeiendommer og betalte ingen skatt. I andre etasje bodde **adelen** -- rundt 400 000 mennesker som levde av sine godser, holdt de viktigste stillingene i staten og haeren, og heller ikke betalte skatt.

Og i den tredje etasjen? Der bodde **alle andre** -- 26 millioner bonder, handverkere, kjopmann, advokater, arbeidere. De bar hele skattebyrden. De betalte tiende til kirken, avgifter til adelen og skatter til kongen. En fattig bonde kunne miste halvparten av inntekten sin til skatter, mens hertugene pa Versailles danset gjennom natten.

Kong **Ludvig XVI** var en velmenende, men svak og ubesluttsom mann. Dronning **Marie Antoinette** ble forhatt for sin luksus. Staten var naermest bankerott etter kostbare kriger -- blant annet stoetten til den amerikanske revolusjonen. Og i 1788 slo avlingene feil. Broadprisene skjoot i vaeret. Folk sultet. Frankrike var en kruttonne, og lunten var allerede tent.`,
    },
    {
      id: 'historie-6-3-n-section1',
      type: 'text',
      content: `## Revolusjonen bryter los

I mai 1789 tok Ludvig XVI et skritt som skulle bli hans siste som enevedig konge: Han innkalte **stenderforsamlingen** for foerste gang pa 175 aar. Tanken var a loese den okonomiske krisen. Men det ble starten pa noe helt annet.

Den tredje stand -- representantene for det vanlige folket -- krevde at alle tre stendene skulle mootes samlet og stemme per hode, ikke per stand. I det gamle systemet hadde geistligheten og adelen til sammen to stemmer mot tredjestands ene. Med hodetelkng ville den tredje stand, som representerte 98 prosent av befolkningen, endelig faa flertall.

Da kongen nektet, tok tredje stand et dramatisk steg. Den 17. juni 1789 erklaerete de seg som **Nasjonalforsamling** -- representanter for hele det franske folket, ikke bare en stand. Tre dager senere, da kongen laaste dem ute av mooteesalen, samlet de seg i en naerliggende tennisbane og sverget den beroomte **Ballhuseden**: De ville ikke ga fra hverandre foer Frankrike hadde faatt en grunnlov.

Sa kom dagen som endret alt. Den **14. juli 1789** stormet en folkemengde i Paris festningen **Bastillen** for a skaffe seg vaapen. Bastillen var et symbol pa kongens vilkaarlige makt -- et fengsel der folk kunne kastes inn uten lov og dom. Da den falt, falt ogsa det gamle regimet i symbolsk forstand. Denne dagen er fortsatt Frankrikes nasjonaldag.

I august vedtok Nasjonalforsamlingen **Erkleringen om menneskets og borgerens rettigheter**: "Menneskene foodes og forblir frie og like i rettigheter." Ordene ekko fra opplysningstiden -- fra Locke, Montesquieu og Rousseau -- var na blitt lov.`,
    },
    {
      id: 'historie-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva var de tre stendene i det franske samfunnet foer revolusjonen?',
        options: [
          { id: 'a', text: 'Kongen, adelen og borgerne', isCorrect: false },
          { id: 'b', text: 'Geistligheten, adelen og alle andre (den tredje stand)', isCorrect: true },
          { id: 'c', text: 'Bondene, handverkerne og kjopmannene', isCorrect: false },
          { id: 'd', text: 'De rike, middelklassen og de fattige', isCorrect: false },
        ],
        solution: 'Det franske samfunnet var delt i tre stender: Forste stand var geistligheten (ca. 100 000), andre stand var adelen (ca. 400 000), og tredje stand var alle andre (ca. 26 millioner). De to forste stendene var skattefrie, mens den tredje stand bar hele skattebyrden.',
      },
    },
    {
      id: 'historie-6-3-n-section2',
      type: 'text',
      content: `## Frihet, likhet, brorskap

Revolusjonens slagord ble **"Liberte, egalite, fraternite"** -- frihet, likhet, brorskap. Det er fortsatt Frankrikes motto den dag i dag. Men hva betydde disse ordene i praksis?

**Frihet** betood slutt pa vilkaarlig fengsling og tortur, ytringsfrihet, pressefrihet og religios toleranse. Ingen skulle lenger kunne kastes i Bastillen pa kongens befaling. Livegenskapen ble avskaffet -- bondene var endelig frie mennesker, ikke lenket til en adelns jord.

**Likhet** betood avskaffelse av adelens og geistlighetens privilegier. Alle skulle vaere like for loven. Ikke lenger saerdomstoler for adelen. Ikke lenger embeter forbeholdt dem som var fodt i riktig familie. Karriere skulle vaere aapen for talent, ikke for foedsel.

**Brorskap** betood solidaritet -- at alle franskmenn var broodre, uansett stand. Den nasjonale enheten skulle erstatte de gamle standsforskjellene.

Men det var et enormt gap mellom ideal og virkelighet. Kvinner var ekskludert fra de nye rettighetene. **Olympe de Gouges** skrev modig en "Erklering om kvinnens og borgerinnes rettigheter" i 1791, der hun krevde like rettigheter for kvinner. Hennes skjebne ble tragisk -- hun ble henrettet under terroren. Slaveriet i de franske koloniene ble forst avskaffet i 1794, for sa a bli gjeninnfort av Napoleon. "Alle mennesker er like" viste seg a vaere en mer begrenset ide enn den lood som.`,
    },
    {
      id: 'historie-6-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var den franske revolusjonens slagord?',
        options: [
          { id: 'a', text: '"No taxation without representation"', isCorrect: false },
          { id: 'b', text: '"Liberte, egalite, fraternite" -- frihet, likhet, brorskap', isCorrect: true },
          { id: 'c', text: '"Makt til folket"', isCorrect: false },
          { id: 'd', text: '"Fornuft og fremskritt"', isCorrect: false },
        ],
        solution: 'Den franske revolusjonens slagord var "Liberte, egalite, fraternite" -- frihet, likhet, brorskap. Det er fortsatt Frankrikes offisielle motto. Frihet betood personlige rettigheter, likhet betood avskaffelse av standsprivilegier, og brorskap betood nasjonal solidaritet.',
      },
    },
    {
      id: 'historie-6-3-n-section3',
      type: 'text',
      content: `## Terroren -- da revolusjonen slukte sine barn

Revolusjonen radikaliserte seg gradvis, og det som fulgte er en av historiens mest skremmende laeerdommer om hva som kan skje nar idealer forvandles til fanatisme.

I 1792 ble Frankrike erklaeert republikk. Kong Ludvig XVI ble stilt for retten, domt til doden og henrettet ved **giljotinen** i januar 1793. Dronning Marie Antoinette led samme skjebne ni maaneder senere.

Frankrike var na i krig mot en koalisjon av europeiske makter som fryktet at revolusjonen skulle spre seg. Samtidig herjet indre opproor og kontrarevolusjoonaer motstand. I denne kaotiske situasjonen tok **jakobinerne**, ledet av den kompromisslose **Maximilien Robespierre**, makten.

Robespierre var overbevist om at terroren var noodvendig for a redde revolusjonen. Han innforte det som ble kalt **skrekkveldet** -- en periode der alle som ble ansett som "fiender av revolusjonen" risikerte a miste hodet i giljotinen. Mistanke var nok. En anklage var naesten det samme som en dom.

I loapt av drooyt ett aar ble rundt 17 000 mennesker henrettet. Giljotinen ble revolusjonens fryktede symbol. Blant ofrene var ikke bare adelsmenn og kongetroo, men ogsa revolusjonens egne ledere -- de som ble ansett som for moderate eller for radikale. Revolusjonen slukte virkelig sine egne barn.

Til slutt rammet terroren Robespierre selv. I juli 1794 ble han arrestert og henrettet. Skrekkveldet var over, men spoorsmaalet det etterlot, henger fortsatt i luften: Hvordan kunne en revolusjon for frihet ende i massedrap?`,
    },
    {
      id: 'historie-6-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var "skrekkveldet" (terroren) under den franske revolusjonen?',
        options: [
          { id: 'a', text: 'En periode med krig mellom Frankrike og Storbritannia', isCorrect: false },
          { id: 'b', text: 'Kongens forsook pa a slaa ned revolusjonen med militaermakt', isCorrect: false },
          { id: 'c', text: 'En periode der jakobinerne under Robespierre henrettet tusenvis av "revolusjonens fiender"', isCorrect: true },
          { id: 'd', text: 'Et folkeopproor i Paris der Bastillen ble stormet', isCorrect: false },
        ],
        solution: 'Skrekkveldet (1793-1794) var perioden da jakobinerne under Robespierre brukte systematisk terror mot alle som ble ansett som fiender av revolusjonen. Rundt 17 000 mennesker ble henrettet ved giljotinen. Terroren endte da Robespierre selv ble henrettet i juli 1794.',
      },
    },
    {
      id: 'historie-6-3-n-section4',
      type: 'text',
      content: `## Napoleon -- revolusjonens arving og graver

Etter terroren fulgte en mer moderat periode, men Frankrike forble ustabilt. Inn pa scenen trer en av historiens mest fascinerende skikkelser: **Napoleon Bonaparte**, en ung korsikansk general som hadde utmerket seg i revolusjonskrigene.

I 1799 grep Napoleon makten gjennom et statskupp. I 1804 kronet han seg selv til keiser -- i en seremoni der han demonstrativt tok kronen fra pavens hender og satte den pa sitt eget hode. Et sterkt signal: Napoleons makt kom ikke fra Gud eller tradisjonen, men fra ham selv.

Napoleon var bade revolusjonens arving og dens graver. Pa den ene siden beholdt han mange av revolusjonens viktigste reformer. **Code civil** -- Napoleons lovbok -- sikret likhet for loven, eiendomsretten og religios toleranse. Karriere var aapen for talent: En bondesonn kunne bli general hvis han var dyktig nok. Foydale privilegier var borte for godt.

Pa den andre siden avskaffet Napoleon demokratiet og ytringfriheten. Han gjeninnforte slaveriet i koloniene. Han styrte som eneveldig hersker. Og gjennom sine kriger -- som strakte seg fra Spania til Russland -- spredte han bade revolusjonens ideer og fransk dominans over hele Europa.

Napoleons endelige nederlag ved Waterloo i 1815 fortte til at de gamle monarkiene forsookte a gjenopprette det gamle regimet. Men det var for sent. Ideene om frihet, likhet, maktfordeling og nasjonalisme hadde slatt rot over hele Europa. De kunne undertrekkkes midlertidig, men aldri utryddes.`,
    },
    {
      id: 'historie-6-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Pa hvilken maate var Napoleon bade en videreforer og en forraeder mot revolusjonens idealer?',
        options: [
          { id: 'a', text: 'Han videreforte demokratiet, men avskaffet likhet for loven', isCorrect: false },
          { id: 'b', text: 'Han beholdt likhet for loven og avskaffet privilegier, men fjernet demokrati og ytringsfrihet', isCorrect: true },
          { id: 'c', text: 'Han gjeninnforte kongedoommet og alle adelens privilegier', isCorrect: false },
          { id: 'd', text: 'Han avskaffet alt revolusjonen hadde oppnadd og gjenopprettet det gamle regimet', isCorrect: false },
        ],
        solution: 'Napoleon videreforte revolusjonens reformer som likhet for loven (Code civil), avskaffelse av foydale privilegier og karriere aapen for talent. Men han forraadde revolusjonens demokratiske idealer ved a avskaffe folkestyret, innskrenke ytringsfrihet og krone seg selv til keiser.',
      },
    },
    {
      id: 'historie-6-3-n-section5',
      type: 'text',
      content: `## En revolusjon for evigheten

Den franske revolusjonen var et jordskjelv som rystet hele Europa. I lopet av ti aar -- fra 1789 til 1799 -- ble et tusenaarig system veltet. Stendersamfunnet ble avskaffet. En konge ble henrettet. Menneskerettighetene ble erklaeert. Og en hel verdensdel ble tvunget til a konfrontere sporsmaalet: Hvem har rett til a styre?

Revolusjonens arv er motsetningsfull. Pa den ene siden ga den oss ideen om universelle menneskerettigheter, folkesuverenitet og likhet for loven -- idealer som fortsatt er grunnlaget for moderne demokratier. Menneskerettighetserkleringen fra 1789 er en direkte forgjenger til FNs erkleering fra 1948.

Pa den andre siden viste terroren at selv de edleste idealer kan perverteres. At en revolusjon for frihet kan munne ut i diktatur. At "folkets vilje" kan brukes til a rettferdiggjore de verste overgrepene. Det er en laerdom som er like relevant i dag som den var i 1793.

Men kanskje er det viktigste at den franske revolusjonen viste at forandring er mulig. At det bestaaende ikke er uunngaaelig. At vanlige mennesker kan endre historiens gang. Og at ideene om frihet og likhet, nar de foerst er tenkt, aldri fullt ut kan undertrykkes igjen.`,
    },
    {
      id: 'historie-6-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilket dokument fra den franske revolusjonen regnes som en direkte forgjenger til FNs menneskerettighetserkleering (1948)?',
        options: [
          { id: 'a', text: 'Napoleons Code civil', isCorrect: false },
          { id: 'b', text: 'Ballhuseden', isCorrect: false },
          { id: 'c', text: 'Erkleringen om menneskets og borgerens rettigheter (1789)', isCorrect: true },
          { id: 'd', text: 'Den franske grunnloven av 1791', isCorrect: false },
        ],
        solution: 'Erkleringen om menneskets og borgerens rettigheter, vedtatt i august 1789, regnes som en direkte forgjenger til FNs menneskerettighetserkleering fra 1948. Den slo fast at alle mennesker foodes frie og like i rettigheter -- et prinsipp som er grunnlaget for moderne menneskerettigheter.',
      },
    },
    {
      id: 'historie-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Den franske revolusjonen (1789-1799) var den mest dramatiske politiske omveltningen i europeisk historie, og dens arv preger verden den dag i dag.

**Nokkelbegreper du na kjenner:**
- **De tre stendene**: Geistligheten, adelen og den tredje stand -- et dypt urettferdig system
- **Stormingen av Bastillen** (14. juli 1789): Revolusjonens symbolske start
- **Erkleringen om menneskets og borgerens rettigheter**: Universelle rettigheter bygd pa opplysningstidens ideer
- **Skrekkveldet**: Perioden da terroren ble brukt som politisk middel under Robespierre
- **Napoleon**: Revolusjonens arving som spredte dens ideer, men avskaffet demokratiet

**Det viktigste du tar med deg:**
Den franske revolusjonen viste bade det beste og det verste menneskeheten er i stand til. Den ga oss menneskerettighetene og ideen om likhet for loven, men ogsa terroren og laeerdommen om at frihetskamp kan sla over i tyranni. Dens ideer om frihet, likhet og brorskap lever videre som grunnverdier i moderne demokratier.`,
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
      content: `## Revolusjonen er over -- hva na?

Etter Napoleons endelige nederlag ved Waterloo i 1815 pustet Europas monarker lettet ut. Revolusjonstidens kaos og blodsbad var over. Na kunne man gjenopprette den gamle ordenen -- kongene pa sine troner, adelen i sine privilegier, kirken i sin makt.

Pa **Wienerkongressen** i 1814-1815 samlet seiersmaaktene seg for a tegne Europas kart pa nytt. Den osterrikske diplomaten Metternich ledet arbeidet med a "skru klokken tilbake." Grenser ble flyttet, konger ble gjeninnsatt, og revolusjonaere bevegelser ble undertrykt.

Men her er det store spoorsmaalet: Kan man virkelig undertrykke en ide? Kan man fengsle en tanke? Wienerkongressens ledere proovde, men opplysningstidens og revolusjonenes ideer hadde allerede slatt rot for dypt. Millioner av mennesker hadde sett at forandring var mulig. De hadde lest om rettigheter, frihet og folkestyre. De hadde smaalt pa likhet for loven. Og de ville ha mer.

Den kampen -- mellom de konservative kreftene som ville bevare det gamle, og de liberale og demokratiske bevegelsene som ville forandre -- skulle prege hele 1800-tallet og legge grunnlaget for den demokratiske verden vi lever i i dag.`,
    },
    {
      id: 'historie-6-4-n-section1',
      type: 'text',
      content: `## Liberalismens fremmarsj

Den viktigste politiske kraften bak demokratiseringen pa 1800-tallet var **liberalismen**. Liberale tenkere og politikere krevde grunnlover som begrenset kongemakten, maktfordeling mellom lovgivende, utovende og dommende makt, ytringsfrihet og pressefrihet, og stemmerett -- i starten riktignok bare for menn med eiendom og formue.

Liberalismen var ikke det samme som demokrati slik vi forstaar det i dag. De tidlige liberale var gjerne velstaende borgere -- advokater, leger, kjopmann -- som ville bryte adelens monopol pa makt, men som ikke noodvendigvis onsket at fattige arbeidere eller kvinner skulle faa stemme. Likevel var liberalismen motoren som satte demokratiseringen i gang.

I land etter land ble det krevd grunnlover. Norge var tidlig ute -- Grunnloven av 1814 var en av Europas mest liberale. Belgia fikk sin grunnlov i 1831. I Storbritannia ble stemmeretten gradvis utvidet gjennom en rekke reformlover. Men i mange land -- som Russland, Osterrike og Preussen -- holdt de konservative kreftene stand.

Kampen mellom gammelt og nytt var ofte voldelig. Revolusjoner, opproor og politiske kriser preget 1800-tallets Europa. Men retningen var klar: Sakte, ofte smertefullt, beveget Europa seg mot mer demokrati, flere rettigheter og storre folkelig deltagelse.`,
    },
    {
      id: 'historie-6-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva krevde de liberale bevegelsene pa 1800-tallet?',
        options: [
          { id: 'a', text: 'Tilbakevending til eneveldet og kirkens makt', isCorrect: false },
          { id: 'b', text: 'Grunnlover, maktfordeling, ytringsfrihet og stemmerett', isCorrect: true },
          { id: 'c', text: 'Avskaffelse av all privat eiendom', isCorrect: false },
          { id: 'd', text: 'At adelen skulle faa enda storre privilegier', isCorrect: false },
        ],
        solution: 'De liberale bevegelsene krevde grunnlover som begrenset kongemakten, maktfordeling mellom de tre statsmaktene, ytringsfrihet og pressefrihet, og stemmerett. I starten gjaldt kravet om stemmerett bare eiendomsbesittende menn, men over tid ble det utvidet.',
      },
    },
    {
      id: 'historie-6-4-n-section2',
      type: 'text',
      content: `## 1848 -- aarett da Europa brant

I 1848 skjedde noe ekstraordinaert. Som en praeriebrann spredte revolusjon seg over hele Europa pa bare noen faa uker. Det startet i Paris i februar, der kongen ble styrtet og republikken gjenopprettet. Nyhetene spredte seg med telegrafen -- den tidens sosiale medier -- og utloste oppstand etter oppstand.

I Berlin reiste folket seg mot den proeyssiske kongen. I Wien flyktet den mektige Metternich -- mannen som hadde holdt det gamle systemet sammen i over tretti aar. I Budapest, Praha, Milano og Roma kravet folk grunnlover, parlamenter og nasjonal frihet. Det var som om en hel verdensdel sa "nok" pa samme tid.

Kravene var like over alt: **grunnlover og parlamentarisk styre**, **ytringsfrihet og pressefrihet**, **nasjonal selvstendighet** for undertrykte folk, og **sosiale reformer** for den voksende arbeiderklassen.

Men like raskt som revolusjonene hadde blusset opp, ble de slatt ned. Innen 1849 hadde de konservative kreftene -- haeren, adelen, kirken -- gjenvunnet kontrollen i de fleste land. Revolusjonaerene manglet enhet: Liberale og sosialister hadde ulike maal. Nasjonalistiske motsetninger splittet opproorserne. Borgerskapet fryktet arbeiderklassens radikalisme og soekte kompromiss med kongemakten.

Likevel var 1848 et vendepunkt. Revolusjonene viste at kravet om demokrati og nasjonal frihet var utbredt over hele Europa. De konservative hadde vunnet et slag, men de visste at presset ville oke. Sakte men sikkert matte de gi etter.`,
    },
    {
      id: 'historie-6-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hvorfor ble de fleste revolusjonene i 1848 slatt ned?',
        options: [
          { id: 'a', text: 'Fordi folk egentlig ikke oonsket demokrati', isCorrect: false },
          { id: 'b', text: 'Fordi Napoleon invaderte alle landene', isCorrect: false },
          { id: 'c', text: 'Fordi revolusjonaerene manglet enhet og de konservative kreftene var fortsatt sterke', isCorrect: true },
          { id: 'd', text: 'Fordi Storbritannia satte inn tropper for a stoppe dem', isCorrect: false },
        ],
        solution: 'Revolusjonene i 1848 mislyktes fordi revolusjonaerene var splittet: Liberale, sosialister og nasjonalister hadde ulike maal. Borgerskapet fryktet arbeiderklassens radikalisme. De konservative kreftene -- haeren, adelen, kirken -- var fortsatt sterke nok til a slaa ned opproorene. Men revolusjonene viste at demokratikravene var utbredte og ikke ville forsvinne.',
      },
    },
    {
      id: 'historie-6-4-n-section3',
      type: 'text',
      content: `## Stemmerettens langsomme utvidelse

En av de viktigste historiene i moderne tid er den gradvise utvidelsen av stemmeretten -- hvem som faktisk faar bestemme. For selv etter revolusjonene var "demokrati" et ganske eksklusivt prosjekt.

Pa tidlig 1800-tall hadde kanskje 1-5 prosent av befolkningen stemmerett -- bare rike menn med eiendom. Gradvis ble kravene senket. Flere menn fikk stemme. I Norge fikk alle menn allmenn stemmerett i 1898. Men halvparten av befolkningen var fortsatt ekskludert: **kvinnene**.

Kampen for **kvinners stemmerett** er en av historiens mest inspirerende fortellinger. Kvinner hadde vaert ekskludert fra den demokratiske revolusjonen helt fra starten. Selv den franske menneskerettighetserklaeringen gjaldt bare menn -- ordet "homme" betyr bade "menneske" og "mann" pa fransk.

**Suffragettbevegelsen** vokste frem pa 1800-tallet. Modige kvinner organiserte seg, holdt demonstrasjoner, skrev boekerr og artikler, og noen brukte sivil ulydighet. De ble haanet, arrestert og tvangsmatet i fengsel. Men de ga seg ikke.

Gjennombruddene kom gradvis: New Zealand i 1893, Finland i 1906, Norge i 1913 -- vi var blant de foerste i verden. Storbritannia fulgte i 1918 (for kvinner over 30) og 1928 (alle kvinner). USA i 1920. Ironisk nok var Frankrike -- revolusjonens hjemland -- sent ute: Franske kvinner fikk stemmerett foerst i 1944. Og Sveits, det "perfekte demokratiet", ventet helt til 1971.

Stemmerettens historie minner oss om at rettigheter sjelden gis frivillig. De vinnes gjennom kamp.`,
    },
    {
      id: 'historie-6-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Naar fikk norske kvinner full stemmerett?',
        options: [
          { id: 'a', text: '1898', isCorrect: false },
          { id: 'b', text: '1905', isCorrect: false },
          { id: 'c', text: '1913', isCorrect: true },
          { id: 'd', text: '1920', isCorrect: false },
        ],
        solution: 'Norge innforte full stemmerett for kvinner i 1913, som et av de foerste landene i verden. Menn hadde faatt allmenn stemmerett i 1898. Finland var foerst i Europa (1906), mens Frankrike ventet helt til 1944.',
      },
    },
    {
      id: 'historie-6-4-n-section4',
      type: 'text',
      content: `## Demokratiets seier -- og skjoorhet

Gjennom 1900-tallet spredte demokratiet seg over stadig storre deler av verden, men veien var alt annet enn rett. Historien viste gang pa gang at demokratiet er skjoort og aldri kan tas for gitt.

Etter **foerste verdenskrig** kollapset de store imperiene -- Osterrike-Ungarn, Det osmanske riket, det russiske tsardommet, det tyske keiserriket. Nye demokratier ble fodt i ruinene. Men mange av dem overlevde ikke lenge. Pa 1920- og 1930-tallet reiste **fascismen** seg i Italia og Tyskland. Hitler kom til makten gjennom demokratiske valg -- og avskaffet deretter demokratiet innenfra. Det var en skremmende laerepenge: Demokratiet kan oedelegge seg selv.

Etter **andre verdenskrig** ble fascismen beseiret, og demokratiet fikk en ny start i Vest-Europa og Japan. Men den kalde krigen delte verden i to: et demokratisk vest og et kommunistisk oost. Forst etter **Berlinmurens fall i 1989** og Sovjetunionens opplosning i 1991 ble store deler av Ost-Europa demokratiske.

I dag staar demokratiet overfor nye utfordringer. **Populisme** truer etablerte institusjoner. **Desinformasjon** spres raskere enn noen gang gjennom sosiale medier. **Polarisering** gjoor det stadig vanskeligere a finne kompromisser. I noen land er demokratiet pa tilbaketog, selv i land vi trodde var stabile.

Opplysningstidens og revolusjonenes budskap er derfor like viktig i dag som for 250 aar siden: Demokrati er ikke noe som bare oppstaar og vedvarer av seg selv. Det maa kjempes for, forsvares og fornyes -- i hver generasjon.`,
    },
    {
      id: 'historie-6-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva viste Hitlers vei til makten om demokratiets saarbarhet?',
        options: [
          { id: 'a', text: 'At demokrati aldri kan fungere i store land', isCorrect: false },
          { id: 'b', text: 'At militaerkupp er den vanligste maaten a avskaffe demokrati pa', isCorrect: false },
          { id: 'c', text: 'At demokratiet kan oedelegge seg selv innenfra gjennom demokratiske valg', isCorrect: true },
          { id: 'd', text: 'At diktatur alltid er mer stabilt enn demokrati', isCorrect: false },
        ],
        solution: 'Hitler kom til makten gjennom demokratiske valg i 1933 og brukte deretter sin posisjon til a avskaffe demokratiet innenfra. Dette viste at demokratiet er saarbart og kan oedelegges av krefter som bruker demokratiske verktoy for a avvikle selve systemet.',
      },
    },
    {
      id: 'historie-6-4-n-section5',
      type: 'text',
      content: `## Den lange arven

La oss ta et steg tilbake og se pa den store linjen. Fra Lockes ideer om naturlige rettigheter pa 1600-tallet, gjennom den amerikanske og franske revolusjonen, via 1800-tallets demokratikamp og 1900-tallets verdenskrgier, til vaart eget demokrati i dag -- det er en lang, kronglete og blodig vei.

Men det er ogsa en bemerkelsesverdig vei. Ideene som noen faa modige filosofer formulerte for over 300 aar siden, har forandret hele verden. **Folkesuverenitet** -- ideen om at makten tilhorer folket -- er i dag den eneste bredt aksepterte formen for politisk legitimitet. **Menneskerettighetene** er nedfelt i internasjonal lov. **Maktfordeling** er en selvfolge i demokratiske stater. **Ytringsfrihet** og **religios toleranse** er grunnverdier vi forsvarer.

Den norske Grunnloven fra 1814 er et direkte barn av denne tradisjonen. Nar du stemmer ved valg, naar du ytrer deg fritt, naar du stoler paa at domstolene er uavhengige av politikerne -- da lever du i opplysningstidens og revolusjonenes arv.

Men historien laerer oss ogsa noe annet: at fremskritt ikke er garantert. At rettigheter som er vunnet, kan gaa tapt igjen. At demokratiet krever aktive borgere som forstaar verdien av det de har -- og er villige til a forsvare det.

Kanskje er det den viktigste laerdommen fra opplysningstiden og revolusjonene: Frihet er ikke gratis. Den maa vinnes, forsvares og vedlikeholdes -- om og om igjen.`,
    },
    {
      id: 'historie-6-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvilken ide fra opplysningstiden er i dag den eneste bredt aksepterte formen for politisk legitimitet?',
        options: [
          { id: 'a', text: 'Kongens gudgitte rett til a styre', isCorrect: false },
          { id: 'b', text: 'Folkesuverenitet -- at makten tilhorer folket', isCorrect: true },
          { id: 'c', text: 'At de rikeste bor styre', isCorrect: false },
          { id: 'd', text: 'At kirken bor ha overordnet makt', isCorrect: false },
        ],
        solution: 'Folkesuverenitet -- ideen om at all legitim makt utgar fra folket -- er i dag den eneste bredt aksepterte formen for politisk legitimitet. Selv autoritaere regimer foeler seg tvunget til a hevde at de representerer folkets vilje. Denne ideen stammer fra Rousseau og ble omsatt i praksis gjennom den amerikanske og franske revolusjonen.',
      },
    },
    {
      id: 'historie-6-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Veien fra revolusjon til moderne demokrati var lang, kronglete og ofte voldelig -- men ideene fra opplysningstiden seiret til slutt.

**Nokkelbegreper du na kjenner:**
- **Wienerkongressen** (1814-1815): Forsooket pa a gjenopprette det gamle regimet etter Napoleon
- **Liberalisme**: Politisk ideologi som drev demokratiseringen pa 1800-tallet
- **Revolusjonsboolgen i 1848**: Demokratiske oppstand over hele Europa
- **Suffragettbevegelsen**: Kampen for kvinners stemmerett
- **Demokratiets skjoorhet**: Historien viser at demokrati kan ga tapt igjen

**Det viktigste du tar med deg:**
Fra opplysningstiden til i dag har kampen for demokrati vaert en gradvis utvidelse av hvem som faar vaere med a bestemme -- fra rike menn, til alle menn, til kvinner, til alle myndige borgere. Rettigheter vinnes gjennom kamp og maa forsvares i hver generasjon. Demokratiet er ikke selvfolgelig -- det er et prosjekt som krever aktive, opplyste borgere.`,
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
