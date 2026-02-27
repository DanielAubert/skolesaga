/**
 * Tekstbok innhold for Historie - NARRATIV VERSJON DEL 12
 * Kapittel 13: Andre verdenskrig og Holocaust (13.1 - 13.5)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 13.1 NARRATIV: Årsaker og krigens gang
// ============================================================================

export const CHAPTER_HISTORIE_13_1_NARRATIV: TextbookChapter = {
  id: 'historie-13-1-narrativ',
  courseId: 'historie',
  chapterNumber: '13.1',
  title: 'Årsaker og krigens gang',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om historiens mest ødeleggende konflikt - fra krigsutbruddet til kapitulasjonen.',
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

For a forsta hvorfor andre verdenskrig brøt ut, ma vi ga tilbake til avslutningen av den forste. I 1919 ble **Versailles-traktaten** underskrevet. Denne fredsavtalen var ment a sikre at Tyskland aldri igjen kunne true verdensfreden. Men i stedet sadde den froene til en ny og enda verre konflikt.

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
        task: 'Test deg selv pa arsakene til andre verdenskrig:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-1-n-quiz1-q0',
            task: 'Hvorfor skapte Versailles-traktaten grobunn for en ny verdenskrig?',
            options: [
              { id: 'a', text: 'Fordi den skapte et maktvakuum i Ost-Europa som Sovjet utnyttet til a spre kommunismen', isCorrect: false },
              { id: 'b', text: 'Fordi den ydmyket Tyskland med krigskyld, enorme erstatninger og territorietap, noe nazistene utnyttet', isCorrect: true },
              { id: 'c', text: 'Fordi den splittet Osterrike-Ungarn i for mange sma stater som ikke kunne forsvare seg mot aggresjon', isCorrect: false },
              { id: 'd', text: 'Fordi den ikke inkluderte USA, noe som svekket Folkeforbundets evne til a handtere konflikter', isCorrect: false },
            ],
            solution: 'Versailles-traktaten skapte dyp bitterhet i Tyskland. Krigskyldparagrafen, erstatningene og territorietapet ble opplevd som ydmykelse. Hitler utnyttet denne misnoen ved a love a rive opp traktaten.',
          },
          {
            id: 'historie-13-1-n-quiz1-q1',
            task: 'Hva var appeasement-politikken, og hvorfor mislyktes den?',
            options: [
              { id: 'a', text: 'En diplomatisk strategi der Vestmaktene forsøkte a bygge kollektiv sikkerhet gjennom Folkeforbundet - den mislyktes fordi Tyskland meldte seg ut', isCorrect: false },
              { id: 'b', text: 'En politikk der Vestmaktene ga etter for Hitlers krav for a unnga krig - den mislyktes fordi Hitler aldri ble tilfredsstilt', isCorrect: true },
              { id: 'c', text: 'En politikk der Storbritannia og Frankrike innforte handelsblokade mot Tyskland - den mislyktes fordi Italia og Japan brøt blokaden', isCorrect: false },
              { id: 'd', text: 'En forsvarsallianse mellom Storbritannia, Frankrike og Polen - den mislyktes fordi alliansen kom for sent til a avskrekke Hitler', isCorrect: false },
            ],
            solution: 'Appeasement innebar at Storbritannia og Frankrike ga etter gang pa gang nar Hitler krevde mer. De lot ham remilitarisere Rhinland, annektere Osterrike og ta Sudetenland. Men hver innrommelse overbeviste Hitler om at Vestmaktene var svake, og han krevde stadig mer.',
          },
          {
            id: 'historie-13-1-n-quiz1-q2',
            task: 'Hvilke to hovedarsaker drev utviklingen mot ny verdenskrig?',
            options: [
              { id: 'a', text: 'Den okonomiske verdensdepresjonen fra 1929 kombinert med kapplopet om kolonier mellom stormaktene', isCorrect: false },
              { id: 'b', text: 'Bitterheten over Versailles kombinert med Vestmaktenes ettergivenhet overfor Hitlers aggresjon', isCorrect: true },
              { id: 'c', text: 'Sovjetunionens ekspansjonspolitikk vestover kombinert med Japans angrep pa Kina i 1937', isCorrect: false },
              { id: 'd', text: 'Folkeforbundets manglende sanksjoner mot Italia etter invasjonen av Etiopia kombinert med den spanske borgerkrigen', isCorrect: false },
            ],
            solution: 'To hovedarsaker drev mot krig: Versailles-traktatens ydmykelse skapte bitterhet som nazistene utnyttet, og appeasement-politikken lot Hitler ta steg etter steg uten a bli stoppet. Sammen dannet dette en vei der hver innrommelse gjorde den neste uunngaelig.',
          },
        ],
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
        task: 'Test deg selv pa blitzkrigen og krigens forste fase:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-1-n-quiz2-q0',
            task: 'Hva var nytt og skremmende med den tyske blitzkrigen?',
            options: [
              { id: 'a', text: 'Den brukte massiv artilleribeskytning over flere uker for a knuse fiendens forsvar for infanteriet rykket frem', isCorrect: false },
              { id: 'b', text: 'Den kombinerte massive flyangrep, raske panserangrep og motorisert infanteri for lynraske gjennombrudd', isCorrect: true },
              { id: 'c', text: 'Den baserte seg pa ubatblokade og strategisk bombing for a tvinge fienden til overgivelse uten landkrig', isCorrect: false },
              { id: 'd', text: 'Den brukte fallskjermstyrker til a ta strategiske punkter bak fiendens linjer for infanteriet fulgte opp', isCorrect: false },
            ],
            solution: 'Blitzkrigen kombinerte flyangrep, raske panserangrep og motorisert infanteri i en hastighet fiendene ikke kunne henge med pa. Polen falt pa fem uker, Frankrike pa seks.',
          },
          {
            id: 'historie-13-1-n-quiz2-q1',
            task: 'Hvordan klarte Tyskland a beseire Frankrike sa raskt i 1940?',
            options: [
              { id: 'a', text: 'De brukte luftbaren tropper til a lande bak Maginot-linjen og angripe den fra begge sider', isCorrect: false },
              { id: 'b', text: 'De gikk rundt Maginot-linjen gjennom Belgia og Ardennene', isCorrect: true },
              { id: 'c', text: 'De satte inn et massivt sjoangrep over Kanalen og angrep Frankrike fra kysten i nord', isCorrect: false },
              { id: 'd', text: 'De isolerte Frankrike gjennom ubatblokade og tvang frem kapitulasjon etter at forsyningene tok slutt', isCorrect: false },
            ],
            solution: 'Frankrike hadde bygget den enorme Maginot-linjen langs grensen til Tyskland. Men tyskerne bare gikk rundt den gjennom Belgia og Ardennene. Pa seks uker var Frankrike beseiret - den stormakten som hadde holdt ut i fire ar under forste verdenskrig.',
          },
          {
            id: 'historie-13-1-n-quiz2-q2',
            task: 'Hvilket land stod alene mot Hitler sommeren 1940?',
            options: [
              { id: 'a', text: 'Frankrike, som fortsatte krigen fra sine kolonier i Nord-Afrika under de Gaulle', isCorrect: false },
              { id: 'b', text: 'Sovjetunionen, som enna ikke hadde inngatt ikke-angrepspakten med Tyskland', isCorrect: false },
              { id: 'c', text: 'USA, som allerede hadde begynt a sende tropper til Europa for a stanse Hitler', isCorrect: false },
              { id: 'd', text: 'Storbritannia, under ledelse av Winston Churchill', isCorrect: true },
            ],
            solution: 'Sommeren 1940 kontrollerte Hitler det meste av Vest-Europa. Bare Storbritannia holdt stand alene pa den andre siden av Kanalen. Churchill lovte at de ville "kjempe pa strendene" og aldri overgi seg. Situasjonen sa desperat ut.',
          },
        ],
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
        task: 'Test deg selv pa vendepunktet i 1941:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-1-n-quiz3-q0',
            task: 'Hvorfor var 1941 et vendepunkt i andre verdenskrig?',
            options: [
              { id: 'a', text: 'Fordi Tyskland tapte slaget om Storbritannia og matte oppgi planene om invasjon over Kanalen', isCorrect: false },
              { id: 'b', text: 'Fordi invasjonen av Sovjet og Pearl Harbor brakte to nye stormakter inn i krigen mot aksemaktene', isCorrect: true },
              { id: 'c', text: 'Fordi de allierte startet strategisk bombing av tyske byer som knekket tysk industrikapasitet', isCorrect: false },
              { id: 'd', text: 'Fordi Italia byttet side og sluttet seg til de allierte, noe som svekket aksemaktene kraftig', isCorrect: false },
            ],
            solution: 'Operasjon Barbarossa apnet ostfronten og Pearl Harbor brakte USA inn i krigen. Aksemaktene stod na mot en overveldende koalisjon med uendelige ressurser.',
          },
          {
            id: 'historie-13-1-n-quiz3-q1',
            task: 'Hva var Operasjon Barbarossa?',
            options: [
              { id: 'a', text: 'Tysklands planlagte invasjon av Storbritannia over Den engelske kanal hosten 1941', isCorrect: false },
              { id: 'b', text: 'Tysklands felttog gjennom Nord-Afrika for a ta kontroll over Suezkanalen og oljeressursene i Midtosten', isCorrect: false },
              { id: 'c', text: 'Tysklands invasjon av Sovjetunionen 22. juni 1941 - historiens storste militare invasjon', isCorrect: true },
              { id: 'd', text: 'Tysklands offensiv pa Balkan varen 1941 for a sikre flanken for hovedangrepet mot Egypt', isCorrect: false },
            ],
            solution: 'Operasjon Barbarossa var Tysklands invasjon av Sovjetunionen 22. juni 1941. Tre millioner soldater deltok i historiens storste militare invasjon. Hitler brot ikke-angrepspakten med Stalin og apnet den dodelige ostfronten.',
          },
          {
            id: 'historie-13-1-n-quiz3-q2',
            task: 'Hvilken feil gjentok Hitler som ogsa Napoleon hadde gjort hundre ar tidligere?',
            options: [
              { id: 'a', text: 'Han spredde styrkene sine over for mange fronter samtidig i stedet for a konsentrere dem mot ett mal', isCorrect: false },
              { id: 'b', text: 'Han stolte for mye pa sine allierte og overlot viktige operasjoner til Italia og Japan', isCorrect: false },
              { id: 'c', text: 'Han undervurderte Russland - bade avstander, vinterkulde og sovjetisk motstandskraft', isCorrect: true },
              { id: 'd', text: 'Han prioriterte erobring av Kaukasus og oljeressursene fremfor a ta Moskva, noe som ga Sovjet tid til a mobilisere', isCorrect: false },
            ],
            solution: 'Hitler undervurderte Russland, akkurat som Napoleon. Den russiske vinteren var kaldere enn forventet, forsyningslinjene ble for lange, og sovjeterne mobiliserte friske tropper. Fremrykkingen stoppet utenfor Moskva.',
          },
          {
            id: 'historie-13-1-n-quiz3-q3',
            task: 'Hva skjedde ved Pearl Harbor 7. desember 1941?',
            options: [
              { id: 'a', text: 'Japan senket amerikanske marinefartoy i Filippinene etter en formell krigserklaering', isCorrect: false },
              { id: 'b', text: 'Japan angrep den amerikanske flatebasen pa Hawaii uten krigserklaering', isCorrect: true },
              { id: 'c', text: 'Japan erobret de amerikanske basene pa Midway-oyene og truet dermed hele Stillehavet', isCorrect: false },
              { id: 'd', text: 'Japan blokkerte amerikanske forsyningslinjer til Storbritannia og tvang USA til a erklaere krig', isCorrect: false },
            ],
            solution: 'Japan angrep den amerikanske flatebasen pa Hawaii uten krigserklaering. President Roosevelt kalte det "en dag som vil leve i vanare". Angrepet brakte USA inn i krigen med sin enorme industrikapasitet, noe som endret maktbalansen fullstendig.',
          },
        ],
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
        task: 'Test deg selv pa begrepet total krig:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-1-n-quiz4-q0',
            task: 'Hva innebar det at andre verdenskrig var en "total krig"?',
            options: [
              { id: 'a', text: 'At krigen ble utkjempet pa alle kontinenter samtidig, i motsetning til forste verdenskrig som var begrenset til Europa', isCorrect: false },
              { id: 'b', text: 'At hele samfunnet ble mobilisert, sivile var mal for angrep, og det ikke fantes skille mellom front og hjemmefront', isCorrect: true },
              { id: 'c', text: 'At alle tilgjengelige vapentyper ble brukt, inkludert kjemiske og biologiske vapen, i storre skala enn for', isCorrect: false },
              { id: 'd', text: 'At krigen ble fort helt uten diplomatiske forhandlinger eller vapenro, i motsetning til tidligere kriger', isCorrect: false },
            ],
            solution: 'Total krig betyr at skillet mellom militart og sivilt oppheves. Hele okonomien omstilles, sivile bombes, og ideologisk mobilisering gjennomsyrer alt. Over halvparten av ofrene var sivile.',
          },
          {
            id: 'historie-13-1-n-quiz4-q1',
            task: 'Hva var nytt med andre verdenskrig sammenlignet med forste verdenskrig nar det gjaldt sivile tap?',
            options: [
              { id: 'a', text: 'Sivile tap var omtrent like store i begge kriger, men arsakene var forskjellige - sykdom i forste, bombing i andre', isCorrect: false },
              { id: 'b', text: 'Over halvparten av alle dode var sivile - kvinner, barn og gamle drept i egne hjem', isCorrect: true },
              { id: 'c', text: 'De sivile tapene var storst i forste verdenskrig pa grunn av spanskesyken, mens andre verdenskrig primart tok soldatliv', isCorrect: false },
              { id: 'd', text: 'Sivile tap var hoye i begge kriger, men i andre verdenskrig var det okkupasjon og sult som tok flest sivile liv, ikke bombing', isCorrect: false },
            ],
            solution: 'I forste verdenskrig dode soldatene i skyttergravene. I andre verdenskrig dode over halvparten av alle ofre som sivile. Strategisk bombing av byer, sult og folkemord rammet kvinner, barn og eldre i sine egne hjem.',
          },
          {
            id: 'historie-13-1-n-quiz4-q2',
            task: 'Hva gjorde andre verdenskrig til mer enn en vanlig krig om territorier?',
            options: [
              { id: 'a', text: 'At stormaktenes kamp om kontroll over kolonier og ravaretilgang var den egentlige drivkraften bak krigen', isCorrect: false },
              { id: 'b', text: 'At den var en kamp mellom motstridende verdensanskuelser - fascisme mot demokrati og kommunisme', isCorrect: true },
              { id: 'c', text: 'At etniske og nasjonale motsetninger fra forste verdenskrig ikke var lost, og at krigen primart handlet om selvbestemmelsesrett', isCorrect: false },
              { id: 'd', text: 'At den var et resultat av geopolitisk rivalisering mellom stormaktene om hegemoni, slik alle store kriger har vaert', isCorrect: false },
            ],
            solution: 'Andre verdenskrig var ogsa en ideologisk kamp. Pa den ene siden fascisme og nazisme med raselare og forakt for demokrati. Pa den andre siden demokrati og kommunisme som var enige om at nazismen matte knuses. Det var en kamp om hvilke verdier som skulle styre verden.',
          },
        ],
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
        task: 'Test deg selv pa krigens slutt:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-1-n-quiz5-q0',
            task: 'Hvilken hendelse regnes som det psykologiske vendepunktet i krigen mot Tyskland?',
            options: [
              { id: 'a', text: 'Slaget ved El Alamein i Nord-Afrika, der Rommels Afrikakorps ble drevet tilbake av Montgomery', isCorrect: false },
              { id: 'b', text: 'Slaget ved Stalingrad, der en hel tysk arme ble tilintetgjort', isCorrect: true },
              { id: 'c', text: 'Slaget ved Kursk, der Tyskland tapte historiens storste panserkamp og mistet initiativet pa ostfronten', isCorrect: false },
              { id: 'd', text: 'De alliertes landgang pa Sicilia i 1943, som forte til Italias kapitulasjon og aksemaktenes opplosning', isCorrect: false },
            ],
            solution: 'Stalingrad (1942-43) var vendepunktet. Den tyske 6. arme pa 300 000 mann ble omringet og tilintetgjort. Det knuste myten om den uovervinnelige tyske haren.',
          },
          {
            id: 'historie-13-1-n-quiz5-q1',
            task: 'Hva var D-dagen, og hvorfor var den sa viktig?',
            options: [
              { id: 'a', text: 'De alliertes landgang i Sor-Italia i september 1943, som tvang Italia ut av krigen', isCorrect: false },
              { id: 'b', text: 'Operasjon Market Garden i Nederland hosten 1944, som var et forsøk pa a krysse Rhinen', isCorrect: false },
              { id: 'c', text: '6. juni 1944 - de alliertes landgang i Normandie som apnet en ny front i vest', isCorrect: true },
              { id: 'd', text: 'De alliertes gjennombrudd ved Ardennene i desember 1944 etter Tysklands siste storoffensiv', isCorrect: false },
            ],
            solution: 'D-dagen, 6. juni 1944, var historiens storste amfibieinvasjon. 150 000 allierte soldater landsatte pa strendene i Normandie. Det apnet en ny front i vest, sa Tyskland na matte kjempe pa tre fronter samtidig.',
          },
          {
            id: 'historie-13-1-n-quiz5-q2',
            task: 'Hvordan endte krigen i Asia?',
            options: [
              { id: 'a', text: 'De allierte gjennomforte en blodig invasjon av de japanske hovedoyene som tvang frem kapitulasjon etter maneder med kamp', isCorrect: false },
              { id: 'b', text: 'USA slapp atombomber over Hiroshima og Nagasaki, og Japan kapitulerte', isCorrect: true },
              { id: 'c', text: 'Sovjetunionens invasjon av Manchuria og trussel om a angripe Japan direkte var det som avgjorde kapitulasjonen', isCorrect: false },
              { id: 'd', text: 'En kombinasjon av total sjoblokade og brannbombing av Tokyo fikk keiseren til a overgi seg for atombombene ble tatt i bruk', isCorrect: false },
            ],
            solution: 'USA slapp atombomber over Hiroshima (6. august) og Nagasaki (9. august) 1945. Mellom 70 000 og 80 000 dode oyeblikkelig bare i Hiroshima. Den 15. august kunngjorde keiseren Japans kapitulasjon. Andre verdenskrig var over.',
          },
        ],
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
  description: 'En fortelling om det systematiske folkemordet på Europas jøder - og hvordan vi aldri må glemme.',
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
        task: 'Test deg selv pa antisemittismens historie:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-2-n-quiz1-q0',
            task: 'Hva skilte nazistisk antisemittisme fra eldre former for jodehat?',
            options: [
              { id: 'a', text: 'Den var primart okonomisk motivert og rettet seg mot jodiske banker og handelsvirksomheter, ikke mot joder som folkegruppe', isCorrect: false },
              { id: 'b', text: 'Den var basert pa biologi og rase - jodiskhet kunne ikke endres, noe som apnet for total utryddelse', isCorrect: true },
              { id: 'c', text: 'Den bygget pa middelalderens religiose jodehat, men nazistene la til en politisk dimensjon der jodene ble sett som kommunistisk trussel', isCorrect: false },
              { id: 'd', text: 'Den var en viderefouring av 1800-tallets nasjonalisme der jodene ble sett som en fremmed nasjon som burde ha sitt eget land', isCorrect: false },
            ],
            solution: 'Eldre antisemittisme var ofte religiost basert - joder kunne teoretisk unnslippe ved a konvertere. Nazistisk antisemittisme var biologisk - jodiskhet var nedarvet og uforanderlig. Det apnet for total utryddelse.',
          },
          {
            id: 'historie-13-2-n-quiz1-q1',
            task: 'Hvordan forklarte Hitler jodenes rolle i sin forvrengde ideologi?',
            options: [
              { id: 'a', text: 'Han mente de var en kulturell trussel som undergravde tysk kunst og vitenskap gjennom modernisme og kosmopolitisme', isCorrect: false },
              { id: 'b', text: 'Han mente de var en kosmisk fiende som kontrollerte bade kapitalismen og kommunismen', isCorrect: true },
              { id: 'c', text: 'Han sa de var en biologisk sykdom som svekket den ariske rasen gjennom raseblanding og degenerasjon', isCorrect: false },
              { id: 'd', text: 'Han mente de var en politisk fiende som arbeidet for a undergrave det tyske demokratiet fra innsiden gjennom Weimar-republikken', isCorrect: false },
            ],
            solution: 'I Hitlers forvrengde verdensbilde var jodene ikke bare et problem, men selve problemet. Han mente de var en kosmisk fiende som kontrollerte bade kapitalismen og kommunismen - en sammensvaergelse mot det "ariske" folket. All ondskap kunne spores tilbake til dem.',
          },
          {
            id: 'historie-13-2-n-quiz1-q2',
            task: 'Hvorfor gjorde den biologiske definisjonen av jodiskhet nazistenes antisemittisme sa morderisk?',
            options: [
              { id: 'a', text: 'Fordi den biologiske definisjonen gjorde det mulig a identifisere og registrere joder gjennom slektsforskning, noe som la til rette for deportasjon', isCorrect: false },
              { id: 'b', text: 'Fordi den biologiske definisjonen ble stottet av tidens rasehygieniske vitenskap, som ga ideologien et skinn av legitimitet', isCorrect: false },
              { id: 'c', text: 'Fordi nar jodiskhet var definert som biologisk og nedarvet, fantes det ingen utvei - den eneste "losningen" nazistene sa var utryddelse', isCorrect: true },
              { id: 'd', text: 'Fordi den biologiske definisjonen ble brukt til a rettferdiggjore tvangssterilisering og segregering som forste steg i forfolgelsen', isCorrect: false },
            ],
            solution: 'Religiost jodehat kunne teoretisk loses ved konvertering. Men nar jodiskhet var definert som nedarvet gjennom blodet, fantes ingen utvei. Selv joder som hadde konvertert for generasjoner siden ble definert som joder. Den eneste "losningen" nazistene sa, var total utryddelse.',
          },
        ],
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
        task: 'Test deg selv pa veien mot Holocaust:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-2-n-quiz2-q0',
            task: 'Hvorfor var den gradvise eskaleringen av jodeforfolgelsen viktig for at Holocaust kunne skje?',
            options: [
              { id: 'a', text: 'Fordi den gradvise eskaleringen var nodvendig for a bygge opp den industrielle infrastrukturen som trengtes for massemord', isCorrect: false },
              { id: 'b', text: 'Fordi hvert steg normaliserte det neste og gjorde befolkningen gradvis vant til okende grusomhet', isCorrect: true },
              { id: 'c', text: 'Fordi nazistene trengte tid til a vinne internasjonal aksept for sin politikk for de kunne gjennomfore den endelige losningen', isCorrect: false },
              { id: 'd', text: 'Fordi Hitler bevisst ventet med den verste forfolgelsen til krigen distraherte omverdenen og gjorde det lettere a skjule overgrepene', isCorrect: false },
            ],
            solution: 'Hvert trinn virket som et lite steg fra det forrige. Folk ble vant til grusomheten gradvis. Da den endelige losningen kom, var samfunnet allerede tilvent til forfolgelse.',
          },
          {
            id: 'historie-13-2-n-quiz2-q1',
            task: 'Hva var Nurnberglovene fra 1935?',
            options: [
              { id: 'a', text: 'Lover som krevde at joder bar synlige merker og ble registrert i offentlige lister for a lette overvaking', isCorrect: false },
              { id: 'b', text: 'Lover som fratok jodene statsborgerskapet, forbod ekteskap med "arierer" og utelukket dem fra samfunnet', isCorrect: true },
              { id: 'c', text: 'Lover som tvang joder til a flytte til bestemte bydeler og innforte portforbud etter klokken atte om kvelden', isCorrect: false },
              { id: 'd', text: 'Lover som beslagla jodisk eiendom og nasjonaliserte jodiskeide bedrifter til fordel for den tyske staten', isCorrect: false },
            ],
            solution: 'Nurnberglovene fratok jodene tysk statsborgerskap, forbod ekteskap mellom joder og "arierer", og utelukket joder fra yrker og utdanning. Det var et avgjorende steg i retning systematisk diskriminering.',
          },
          {
            id: 'historie-13-2-n-quiz2-q2',
            task: 'Hva skjedde under Krystallnatten i november 1938?',
            options: [
              { id: 'a', text: 'En organisert boikott av jodiske forretninger der SA-soldater blokkerte inngangene og oppfordret tyskere til ikke a handle der', isCorrect: false },
              { id: 'b', text: 'Jodiske butikker ble knust, synagoger brent og jodiske menn sendt til konsentrasjonsleirer', isCorrect: true },
              { id: 'c', text: 'De forste massearrestasjonene av jodiske intellektuelle og politiske ledere, som ble sendt til Dachau', isCorrect: false },
              { id: 'd', text: 'Innforingen av den gule davidsstjernen som alle joder ble palagt a baere offentlig for forste gang', isCorrect: false },
            ],
            solution: 'Under Krystallnatten ble vinduer i jodiske butikker knust over hele Tyskland, synagoger ble brent, og jodiske menn ble arrestert og sendt til konsentrasjonsleirer. Volden var apenlys, og ingen grep inn. Det var et dramatisk steg fra diskriminering til organisert vold.',
          },
          {
            id: 'historie-13-2-n-quiz2-q3',
            task: 'Hva var Einsatzgruppen?',
            options: [
              { id: 'a', text: 'Spesialenheter i SS som drev konsentrasjonsleirene og organiserte tvangsarbeid for den tyske krigsindustrien', isCorrect: false },
              { id: 'b', text: 'Mobile drapsenheter som fulgte haren inn i Sovjet og drepte over en million joder', isCorrect: true },
              { id: 'c', text: 'Sikkerhetspolitiet som hadde ansvar for a deportere joder fra gettoene til utryddelsesleirene i okkupert Polen', isCorrect: false },
              { id: 'd', text: 'Etterretningsenheter som identifiserte og registrerte joder i nyo-okkuperte omrader for senere deportasjon', isCorrect: false },
            ],
            solution: 'Einsatzgruppen var mobile drapsenheter som fulgte den tyske haren inn i Sovjetunionen fra 1941. De samlet jodiske menn, kvinner og barn, drev dem til gruver og skogholt, og skjot dem. Over en million mennesker ble drept pa denne maten.',
          },
        ],
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
        task: 'Test deg selv pa mordmaskineriet og utryddelsesleirene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-2-n-quiz3-q0',
            task: 'Hva var spesielt skremmende ved den "industrielle" karakteren av Holocaust?',
            options: [
              { id: 'a', text: 'At det var drevet av ideologisk fanatisme pa individniva - enkeltpersoners hat og sadisme var det som muliggjorde folkemordet', isCorrect: false },
              { id: 'b', text: 'At moderne byrakrati, teknologi og organisering ble brukt til massemord - ondskap utfort med effektivitet', isCorrect: true },
              { id: 'c', text: 'At det var hemmeligholdelsen som var mest skremmende - folkemordet ble gjennomfort uten at befolkningen visste om det', isCorrect: false },
              { id: 'd', text: 'At det var den geografiske spredningen som var skremmende - folkemord ble gjennomfort pa tvers av et helt kontinent samtidig', isCorrect: false },
            ],
            solution: 'Det industrielle aspektet viser at moderne byrakrati og teknologi kan gjore ondskap mer effektiv. Togtabeller, kartotek og fabrikklignende prosesser ble brukt til a myrde millioner.',
          },
          {
            id: 'historie-13-2-n-quiz3-q1',
            task: 'Hva ble vedtatt pa Wannsee-konferansen i januar 1942?',
            options: [
              { id: 'a', text: 'Beslutningen om a opprette gettoer i alle okkuperte omrader for a samle den jodiske befolkningen pa avgrensede omrader', isCorrect: false },
              { id: 'b', text: 'Logistikken for "den endelige losningen pa det jodiske sporsmal" - det systematiske folkemordet', isCorrect: true },
              { id: 'c', text: 'Planer for massedeportasjon av Europas joder til Madagaskar, en plan som ble oppgitt da den viste seg upraktisk', isCorrect: false },
              { id: 'd', text: 'Koordineringen av Einsatzgruppenes operasjoner pa ostfronten og overgangen fra skyting til mer "effektive" metoder', isCorrect: false },
            ],
            solution: 'Pa Wannsee-konferansen diskuterte femten hoye nazi-embedsmenn logistikken for folkemord: hvordan transportere millioner av mennesker, hvordan handtere likene. Motet varte bare nitti minutter. De kalte det "den endelige losningen pa det jodiske sporsmal".',
          },
          {
            id: 'historie-13-2-n-quiz3-q2',
            task: 'Hvilken utryddelsesleir var den storste, og hvor mange ble drept der?',
            options: [
              { id: 'a', text: 'Treblinka - over en million mennesker, de fleste fra Warszawa-gettoen', isCorrect: false },
              { id: 'b', text: 'Auschwitz-Birkenau - over en million mennesker', isCorrect: true },
              { id: 'c', text: 'Majdanek - over en million mennesker, den forste leiren som ble frigjort av de allierte', isCorrect: false },
              { id: 'd', text: 'Belzec - rundt 600 000, primart joder fra distriktet Lublin og Ost-Galicia', isCorrect: false },
            ],
            solution: 'Auschwitz-Birkenau var den storste utryddelsesleiren. Over en million mennesker ble drept der. Gasskamrene var forkledt som dusjer - folk ble fortalt at de skulle avluses. Innen de forstod sannheten, var dorene lukket og Zyklon B-gassen begynte a stromme inn.',
          },
        ],
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
        task: 'Test deg selv på andre ofre for nazistenes ideologi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-2-n-quiz4-q0',
            task: 'Hva hadde ofregruppene - jødene, rom, funksjonshemmede og andre - til felles i nazistisk ideologi?',
            options: [
              { id: 'a', text: 'De ble alle sett som politiske motstandere av naziregimet og en trussel mot den indre sikkerheten', isCorrect: false },
              { id: 'b', text: 'De ble alle definert som "undermenneskelige" - mennesker uten verdi som kunne elimineres', isCorrect: true },
              { id: 'c', text: 'De ble alle betraktet som rasefremmede elementer som truet det ariske folkets biologiske renhet gjennom blanding', isCorrect: false },
              { id: 'd', text: 'De ble alle sett som byrder for den tyske krigsokonomien som brukte ressurser uten a bidra til krigsinnsatsen', isCorrect: false },
            ],
            solution: 'Nazistisk ideologi kategoriserte mennesker i et hierarki der noen ble definert som "undermenneskelige". Dette gjaldt jødene, men også romfolket, funksjonshemmede, homofile og andre. Felles for alle var at nazistene så dem som verdiløse liv som truet den "ariske rasen". Denne dehumaniseringen muliggjorde massemord.',
          },
          {
            id: 'historie-13-2-n-quiz4-q1',
            task: 'Hva var Porajmos?',
            options: [
              { id: 'a', text: 'Det hebraiske ordet for Holocaust, som brukes spesielt om det jodiske folkemordet', isCorrect: false },
              { id: 'b', text: 'Betegnelsen pa nazistenes program for tvangssterilisering av minoriteter som ble ansett som "rasemessig uonsket"', isCorrect: false },
              { id: 'c', text: 'Romfolkets betegnelse på folkemordet der 200 000-500 000 rom ble drept', isCorrect: true },
              { id: 'd', text: 'Fellesbetegnelsen pa alle ikke-jodiske offergrupper som ble forfulgt under Holocaust', isCorrect: false },
            ],
            solution: 'Porajmos betyr "fortæringen" og er romfolkets navn på folkemordet de ble utsatt for. Mellom 200 000 og 500 000 rom ble drept av nazistene, forfulgt ut fra samme raselogikk som jødene.',
          },
          {
            id: 'historie-13-2-n-quiz4-q2',
            task: 'Hva skjedde med sovjetiske krigsfanger i tysk fangenskap?',
            options: [
              { id: 'a', text: 'De ble primart brukt som tvangsarbeidere i tysk krigsindustri, der de fleste overlevde men under svart harde forhold', isCorrect: false },
              { id: 'b', text: 'De ble utvekslet mot tyske krigsfanger i sovjetisk fangenskap gjennom Rode Kors-avtaler', isCorrect: false },
              { id: 'c', text: 'De ble internert i samme leirer som vestlige krigsfanger og behandlet omtrent likt, med hoy dodelighet for alle', isCorrect: false },
              { id: 'd', text: 'Over 3 millioner av 5,7 millioner døde av sult, sykdom, kulde og henrettelser', isCorrect: true },
            ],
            solution: 'Sovjetiske krigsfanger ble behandlet med ekstrem brutalitet. Av de 5,7 millioner sovjetiske soldatene som ble tatt til fange, døde over 3 millioner i fangenskap - av sult, sykdom, kulde og henrettelser. De ble sett som "undermenneskelige" i nazistisk ideologi.',
          },
          {
            id: 'historie-13-2-n-quiz4-q3',
            task: 'Hva var det nazistiske "eutanasi"-programmet?',
            options: [
              { id: 'a', text: 'Et program for tvangssterilisering av arvelig syke for a forhindre at genetiske sykdommer ble fort videre til neste generasjon', isCorrect: false },
              { id: 'b', text: 'Et program der over 200 000 psykisk syke og funksjonshemmede ble drept fordi de ble sett som "uverdig liv"', isCorrect: true },
              { id: 'c', text: 'Et program for tvangsinnleggelse og medisinsk eksperimentering pa psykiatriske pasienter i statlige institusjoner', isCorrect: false },
              { id: 'd', text: 'Et program for a internere funksjonshemmede i egne leirer der de ble satt til tvangsarbeid for krigsindustrien', isCorrect: false },
            ],
            solution: 'Før krigen startet nazistene et "eutanasi"-program der over 200 000 psykisk syke og funksjonshemmede tyskere ble drept. De ble sett som "uverdig liv". Gasskamrene som ble brukt i dette programmet ble forløpere til dem i utryddelsesleirene.',
          },
        ],
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
        task: 'Test deg selv på hvorfor vi må huske Holocaust:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-2-n-quiz5-q0',
            task: 'Hvorfor er det viktig å lære om Holocaust i dag?',
            options: [
              { id: 'a', text: 'Primart for a dokumentere krigsforbrytelser juridisk, slik at lignende handlinger kan straffeforfolges internasjonalt', isCorrect: false },
              { id: 'b', text: 'For å hedre ofrene, forstå hvordan det kunne skje, motvirke benektelse og beskytte menneskerettighetene', isCorrect: true },
              { id: 'c', text: 'For a forsta Tysklands spesielle historiske ansvar og sikre at tysk nasjonalisme aldri igjen far fotfeste i Europa', isCorrect: false },
              { id: 'd', text: 'For a styrke FNs legitimitet som fredsbevarende organisasjon ved a minne om hva som skjer uten internasjonalt samarbeid', isCorrect: false },
            ],
            solution: 'Vi lærer om Holocaust for å hedre millioner av ofre som fortjener å huskes. For å forstå mekanismene bak folkemord - propaganda, dehumanisering, gradvis eskalering - slik at vi kan gjenkjenne varselstegn. For å motvirke benektelse. Og fordi Holocaust førte til menneskerettighetserklæringen og internasjonal strafferett.',
          },
          {
            id: 'historie-13-2-n-quiz5-q1',
            task: 'Hva mente Primo Levi da han skrev: "Det skjedde, og derfor kan det skje igjen"?',
            options: [
              { id: 'a', text: 'At menneskeheten har en iboende tendens til vold som vi aldri kan overvinne, bare akseptere', isCorrect: false },
              { id: 'b', text: 'At historien folger sykliske monster der folkemord er uunngaelig hvert hundrede ar', isCorrect: false },
              { id: 'c', text: 'At folkemord ikke er teoretisk, men en påvist mulighet - og at vi må være årvåkne for å hindre at det gjentar seg', isCorrect: true },
              { id: 'd', text: 'At bare streng internasjonal lovgivning og militaer makt kan forhindre fremtidige folkemord, ikke kunnskap alene', isCorrect: false },
            ],
            solution: 'Primo Levi, en Holocaust-overlevende, påpekte at Holocaust beviste at folkemord er mulig. Minnekulturen handler ikke om å dvele ved fortiden, men om å beskytte fremtiden ved å gjenkjenne varselsignalene tidlig nok.',
          },
          {
            id: 'historie-13-2-n-quiz5-q2',
            task: 'Hvilket viktig dokument var et direkte svar på Holocaust?',
            options: [
              { id: 'a', text: 'FN-pakten fra 1945, som etablerte prinsippene for internasjonal fred og sikkerhet', isCorrect: false },
              { id: 'b', text: 'Verdenserklæringen om menneskerettigheter fra 1948', isCorrect: true },
              { id: 'c', text: 'Folkemordkonvensjonen fra 1948, som definerte og forbod folkemord som internasjonal forbrytelse', isCorrect: false },
              { id: 'd', text: 'Geneve-konvensjonene fra 1949, som fastsatte regler for behandling av krigsfanger og sivile i krig', isCorrect: false },
            ],
            solution: 'Verdenserklæringen om menneskerettigheter fra 1948 var et direkte svar på Holocaust. Den slår fast at alle mennesker er født frie og med lik verdighet og rettigheter. Målet var å sikre at ingen stat noen gang igjen kunne behandle mennesker slik nazistene hadde gjort.',
          },
        ],
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
        task: 'Test deg selv på Quisling og NS under okkupasjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-3-n-quiz1-q0',
            task: 'Hvorfor ble navnet "Quisling" et internasjonalt begrep for landsforræder?',
            options: [
              { id: 'a', text: 'Fordi han ble utnevnt av tyskerne til rikskommissaer og styrte Norge pa vegne av Hitler gjennom hele krigen', isCorrect: false },
              { id: 'b', text: 'Fordi han forsøkte å kuppe makten under tysk invasjon og senere samarbeidet aktivt med okkupantene', isCorrect: true },
              { id: 'c', text: 'Fordi han forhandlet frem Norges kapitulasjon i juni 1940 og deretter dannet en samlingsregjering under tysk overoppsyn', isCorrect: false },
              { id: 'd', text: 'Fordi han som forsvarsminister hadde forsømt det norske forsvaret og dermed muliggjort den tyske invasjonen', isCorrect: false },
            ],
            solution: 'Quislings kupp 9. april 1940 var et åpenlyst forsøk på å utnytte invasjonen til egen vinning. Han forsøkte å gripe makten mens landet ble angrepet, og samarbeidet deretter aktivt med okkupantene. Dette sviket mot eget land var så opprørende at navnet hans ble et internasjonalt begrep for landsforræder.',
          },
          {
            id: 'historie-13-3-n-quiz1-q1',
            task: 'Hva skjedde med Quislings kuppforsøk 9. april 1940?',
            options: [
              { id: 'a', text: 'Han lyktes midlertidig og styrte Norge i to uker for Administrasjonsradet tok over den sivile forvaltningen', isCorrect: false },
              { id: 'b', text: 'Kuppet mislyktes - kongen nektet å utnevne ham, og selv tyskerne syntes han var for upopulær', isCorrect: true },
              { id: 'c', text: 'Kuppet ble stoppet av det norske militaeret som arresterte ham pa ordren fra general Ruge', isCorrect: false },
              { id: 'd', text: 'Kuppet lyktes i Oslo, men resten av landet nektet a anerkjenne ham, og rikskommissaer Terboven overtok styringen', isCorrect: false },
            ],
            solution: 'Quislings kuppforsøk mislyktes totalt. Kongen nektet å utnevne ham, og selv de tyske okkupantene syntes han var for upopulær. Likevel ble han i 1942 gjort til ministerpresident av tyskerne, selv om den virkelige makten lå hos rikskommissær Josef Terboven.',
          },
          {
            id: 'historie-13-3-n-quiz1-q2',
            task: 'Hvor mange medlemmer fikk Nasjonal Samling (NS) under okkupasjonen, og hvorfor meldte folk seg inn?',
            options: [
              { id: 'a', text: 'Rundt 100 000 - fordi mange meldte seg inn da det sa ut som Tyskland ville vinne krigen i 1940-41', isCorrect: false },
              { id: 'b', text: 'Rundt 15 000 - nesten utelukkende ideologisk overbeviste nazister som hadde vaert medlemmer for krigen', isCorrect: false },
              { id: 'c', text: 'Rundt 45 000 - noen var overbeviste nazister, andre meldte seg inn for jobb, fordeler eller under press', isCorrect: true },
              { id: 'd', text: 'Rundt 45 000 - men de fleste var passive medlemmer som aldri deltok i noen aktiviteter og bare betalte kontingent', isCorrect: false },
            ],
            solution: 'NS vokste til rundt 45 000 medlemmer under okkupasjonen. Motivene varierte: noen var overbeviste nazister, andre søkte jobb og fordeler, og atter andre ble presset. NS-medlemmene ble foraktet av flertallet og kalt "quislinger". NS-politi deltok i arrestasjoner av motstandsfolk og jøder.',
          },
        ],
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
        task: 'Test deg selv på hverdagen under okkupasjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-3-n-quiz2-q0',
            task: 'Hva var "holdningskampen" under okkupasjonen?',
            options: [
              { id: 'a', text: 'Organisert sabotasje mot tyske militaere installasjoner og forsyningslinjer utfort av Milorg-grupper', isCorrect: false },
              { id: 'b', text: 'Sivil motstand mot nazistenes forsøk på å kontrollere skoler, kirker og organisasjonsliv', isCorrect: true },
              { id: 'c', text: 'Spredning av illegale aviser og radiolytting til BBC for a motvirke tysk propaganda og sensur', isCorrect: false },
              { id: 'd', text: 'Hjelpeaksjoner for a smugle joder og politiske flyktninger over grensen til Sverige', isCorrect: false },
            ],
            solution: 'Holdningskampen var den sivile, ikke-voldelige motstanden mot nazistenes forsøk på å ensrette samfunnet. Da 12 000 lærere nektet å melde seg inn i en nazistisk organisasjon, ble 1100 av dem sendt til tvangsarbeid i nord. Biskopene la ned sine embeter. Idretten gikk i streik.',
          },
          {
            id: 'historie-13-3-n-quiz2-q1',
            task: 'Hva var "nazifiseringsforsøkene" NS gjennomførte under okkupasjonen?',
            options: [
              { id: 'a', text: 'Forsok pa a innfore nazistisk pensum i skolene og erstatte demokratisk historie med raselaere og germansk ideologi', isCorrect: false },
              { id: 'b', text: 'Forsøk på å ta kontroll over lærere, kirken, idretten og ungdommen gjennom nazistiske organisasjoner', isCorrect: true },
              { id: 'c', text: 'Forsok pa a erstatte det norske rettssystemet med tyske lover og underlegge norske domstoler tysk jurisdiksjon', isCorrect: false },
              { id: 'd', text: 'Forsok pa a kontrollere pressen og NRK ved a innsette NS-lojale redaktorer og forby all uautorisert publisering', isCorrect: false },
            ],
            solution: 'NS prøvde å ta kontroll over viktige deler av samfunnet: lærere skulle meldes inn i en nazistisk lærerorganisasjon, kirken skulle underlegges, idretten kontrolleres, og ungdommen innrulleres i NS-organisasjoner. Disse forsøkene tvang nordmenn til å ta stilling, og mange valgte å si nei.',
          },
          {
            id: 'historie-13-3-n-quiz2-q2',
            task: 'Hvordan påvirket okkupasjonen hverdagslivet for vanlige nordmenn?',
            options: [
              { id: 'a', text: 'Hverdagen var primart preget av frykt for bombeangrep og militaere kamphandlinger i naerområdet', isCorrect: false },
              { id: 'b', text: 'De fleste merket lite til okkupasjonen sa lenge de holdt seg unna politikk og motstand', isCorrect: false },
              { id: 'c', text: 'Det ble innført rasjonering, pressesensur, radiobeslag, og folk måtte forholde seg til tyske soldater i hverdagen', isCorrect: true },
              { id: 'd', text: 'Hverdagen var hardest for familier med menn i motstandsbevegelsen, mens de fleste andre levde relativt normalt', isCorrect: false },
            ],
            solution: 'Hverdagen var dramatisk forandret. Maten var rasjonert med merker. Pressen var sensurert, radioer beslaglagt - bare NS-kontrollerte radioer var lovlige. Å lytte til BBC var forbudt. Ersatz-produkter erstattet det som manglet. Tyskerne hadde tatt de beste bygningene og var synlige overalt.',
          },
        ],
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
        task: 'Test deg selv på de norske jødenes skjebne:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-3-n-quiz3-q0',
            task: 'Hva skjedde med de norske jødene under okkupasjonen?',
            options: [
              { id: 'a', text: 'De ble internert i norske fangeleirer som Grini og Berg, der de fleste overlevde krigen under harde forhold', isCorrect: false },
              { id: 'b', text: '773 ble deportert til Auschwitz (bare 38 overlevde), mens ca. 900 ble reddet til Sverige av motstandsfolk', isCorrect: true },
              { id: 'c', text: 'De fleste klarte a flykte til Sverige takket vaere tidlig varsling, og bare noen hundre ble arrestert og deportert', isCorrect: false },
              { id: 'd', text: 'De ble fratatt eiendom og rettigheter, men unngikk deportasjon fordi Terboven prioriterte tvangsarbeid fremfor utryddelse', isCorrect: false },
            ],
            solution: 'Høsten 1942 ble norske jøder arrestert og deportert til Auschwitz. 773 mennesker ble sendt med skipet Donau og andre transporter. Bare 38 overlevde. Samtidig hjalp motstandsfolk og vanlige nordmenn rundt 900 jøder å flykte til Sverige.',
          },
          {
            id: 'historie-13-3-n-quiz3-q1',
            task: 'Hva hette skipet som fraktet 532 norske jøder til Auschwitz 26. november 1942?',
            options: [
              { id: 'a', text: 'Monte Rosa, et troppetransportskip som gikk i rute mellom Norge og Tyskland', isCorrect: false },
              { id: 'b', text: 'Gotenland, et frakteskip som ble brukt til deportasjoner fra flere okkuperte land', isCorrect: false },
              { id: 'c', text: 'Donau', isCorrect: true },
              { id: 'd', text: 'Westfalen, et skip som ogsa fraktet norske politiske fanger til konsentrasjonsleirer i Tyskland', isCorrect: false },
            ],
            solution: 'Skipet Donau fraktet 532 norske jøder fra Oslo til Auschwitz natten til 26. november 1942. Norsk politi deltok i arrestasjonene, og NS-myndigheter organiserte deportasjonene. Av de 773 norske jødene som totalt ble deportert, overlevde bare 38.',
          },
          {
            id: 'historie-13-3-n-quiz3-q2',
            task: 'Hva gjør deportasjonen av norske jøder ekstra smertefull i norsk historie?',
            options: [
              { id: 'a', text: 'At deportasjonen rammet en sa integrert del av det norske samfunnet - familier som hadde bodd i Norge i generasjoner', isCorrect: false },
              { id: 'b', text: 'At norsk politi og NS-myndigheter deltok aktivt i arrestasjonene og organiseringen', isCorrect: true },
              { id: 'c', text: 'At den norske eksilregjeringen i London ikke grep inn eller advarte de norske jodene i tide tross informasjon om planene', isCorrect: false },
              { id: 'd', text: 'At vanlige nordmenn visste hva som foregikk men valgte a se bort fordi de fryktet represalier fra okkupantene', isCorrect: false },
            ],
            solution: 'Det var ikke bare tyskere som sendte norske jøder i døden. Norsk politi banket på dørene og arresterte jødene. NS-myndigheter organiserte deportasjonene. At nordmenn deltok aktivt i folkemordet på egne medborgere, gjør dette til det mørkeste kapittelet i norsk okkupasjonshistorie. Men det fantes også nordmenn som risikerte livet for å redde rundt 900 jøder til Sverige.',
          },
        ],
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
        task: 'Test deg selv på gråsonene under okkupasjonen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-3-n-quiz4-q0',
            task: 'Hvorfor er det vanskelig å trekke klare grenser mellom motstand, tilpasning og samarbeid under okkupasjonen?',
            options: [
              { id: 'a', text: 'Fordi det ikke fantes klare lover eller regler for hva som var akseptabel oppforsel under okkupasjonen', isCorrect: false },
              { id: 'b', text: 'Fordi de fleste befant seg i en gråsone der motivene var sammensatte og handlingsrommet begrenset', isCorrect: true },
              { id: 'c', text: 'Fordi mange som tilsynelatende samarbeidet faktisk drev med etterretning for hjemmefronten i hemmelighet', isCorrect: false },
              { id: 'd', text: 'Fordi okkupasjonsregimet bevisst skapte situasjoner der nordmenn ble tvunget til a samarbeide for a overleve', isCorrect: false },
            ],
            solution: 'Virkeligheten under okkupasjonen var kompleks. De fleste befant seg mellom ytterpunktene. Motivene var ofte sammensatte - noen "samarbeidet" for å skaffe informasjon til motstanden. Andre arbeidet for tyskerne fordi familien sultet. Enkle dommer er ofte urettferdige.',
          },
          {
            id: 'historie-13-3-n-quiz4-q1',
            task: 'Rundt 50 000 nordmenn arbeidet for den tyske okkupasjonsmakten. Hvorfor er det vanskelig å dømme dem alle som landssvikere?',
            options: [
              { id: 'a', text: 'Fordi de fleste arbeidet under tvang gjennom den tyske arbeidstjenesten og hadde ikke noe reelt valg', isCorrect: false },
              { id: 'b', text: 'Fordi mange bare var folk som trengte arbeid for å brødfø familien, mens andre faktisk deltok i overgrep', isCorrect: true },
              { id: 'c', text: 'Fordi arbeidet de utforte var sivilt og ikke direkte militaert, og dermed ikke regnet som stotte til okkupasjonen', isCorrect: false },
              { id: 'd', text: 'Fordi hjemmefronten faktisk oppfordret nordmenn til a ta slikt arbeid for a opprettholde okonomien og unnga massesult', isCorrect: false },
            ],
            solution: 'Motivene varierte enormt. Noen rapporterte motstandsfolk og deltok i overgrep - de var klare landssvikere. Men mange var bare familiefedre som trengte arbeid da tyskerne bygget festningsverk og trengte arbeidskraft. Grensen mellom overlevelse og samarbeid var ofte uklar.',
          },
          {
            id: 'historie-13-3-n-quiz4-q2',
            task: 'Hvem var "tyskertøsene", og hvordan ble de behandlet etter krigen?',
            options: [
              { id: 'a', text: 'Kvinner som arbeidet for tyske myndigheter som tolker og kontorpersonale - de ble domt i landssvikoppgjoret', isCorrect: false },
              { id: 'b', text: 'Kvinner som hadde meldt seg inn i NS og deltatt i nazistiske kvinneorganisasjoner - de mistet stemmeretten', isCorrect: false },
              { id: 'c', text: 'Kvinner som hadde forhold til tyske soldater - de ble offentlig ydmyket, fikk klippet håret og var sosialt utfryst i årevis', isCorrect: true },
              { id: 'd', text: 'Kvinner som hadde angitt naboer til Gestapo - de ble stilt for retten og fikk strenge fengselsstraffer', isCorrect: false },
            ],
            solution: 'Kvinnene som hadde hatt forhold til tyske soldater ble hardt behandlet etter krigen. De ble offentlig ydmyket, fikk klippet håret, mistet jobben og var sosialt stigmatisert i årevis. Deres "forbrytelse" var ofte bare å ha forelsket seg i feil person.',
          },
        ],
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
        task: 'Test deg selv på motstandens former:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-3-n-quiz5-q0',
            task: 'Hvorfor regnes tungtvannsaksjonen på Vemork som en av krigens viktigste sabotasjeaksjoner?',
            options: [
              { id: 'a', text: 'Fordi den inspirerte en rekke andre sabotasjeaksjoner i okkupert Europa og ble et symbol pa motstand', isCorrect: false },
              { id: 'b', text: 'Fordi den ødela produksjonen av tungtvannet som var viktig for det tyske atomprogrammet', isCorrect: true },
              { id: 'c', text: 'Fordi den odela en viktig ammunisjonsfabrikk som forsynte den tyske ostfronten med kritisk materiell', isCorrect: false },
              { id: 'd', text: 'Fordi den kutten en viktig forsyningslinje for nikkel og jernmalm fra Norge til tysk krigsindustri', isCorrect: false },
            ],
            solution: 'Vemork på Rjukan var verdens eneste produsent av tungtvannet Tyskland trengte for atomforskning. Norske kommandosoldater fra Kompani Linge tok seg inn i fabrikken i februar 1943 og ødela produksjonsutstyret. Aksjonen forsinket det tyske atomprogrammet betydelig.',
          },
          {
            id: 'historie-13-3-n-quiz5-q1',
            task: 'Hva var Milorg, og hvor stor ble organisasjonen?',
            options: [
              { id: 'a', text: 'Etterretningsorganisasjonen som samlet informasjon om tyske styrker og sendte det til London via hemmelige radiostasjoner', isCorrect: false },
              { id: 'b', text: 'Sivilorganisasjonen som koordinerte holdningskampen og forberedte sivil administrasjon for etter frigjøringen', isCorrect: false },
              { id: 'c', text: 'Den militære motstandsorganisasjonen som hadde 40 000 mann under våpen ved krigens slutt', isCorrect: true },
              { id: 'd', text: 'Kompani Linges norske avdeling innenlands, som utforte sabotasjeaksjoner pa oppdrag fra den britiske SOE', isCorrect: false },
            ],
            solution: 'Milorg var den militære organisasjonen i hjemmefronten. Den forberedte væpnet kamp og vokste til en skjult hær på 40 000 mann ved krigens slutt. Sivorg koordinerte sivil motstand, mens XU samlet etterretning for de allierte.',
          },
          {
            id: 'historie-13-3-n-quiz5-q2',
            task: 'Hvilken rolle spilte de illegale avisene under okkupasjonen?',
            options: [
              { id: 'a', text: 'De fungerte primart som kommunikasjonskanal mellom Milorg-grupper for a koordinere militaere operasjoner', isCorrect: false },
              { id: 'b', text: 'De holdt moralen oppe med nyheter fra BBC og oppfordringer til motstand', isCorrect: true },
              { id: 'c', text: 'De formidlet instruksjoner fra eksilregjeringen i London om hvordan nordmenn skulle forholde seg til okkupantene', isCorrect: false },
              { id: 'd', text: 'De dokumenterte tyske overgrep og krigsforbrytelser slik at disse kunne brukes som bevis etter krigen', isCorrect: false },
            ],
            solution: 'Over 300 illegale aviser ble trykt i hemmelighet under okkupasjonen. De spredte nyheter fra BBC og London, motvirket tysk propaganda, og opprettholdt kontakten med den frie verden. Å lese, trykke eller distribuere dem var straffbart med konsentrasjonsleir eller døden. Likevel fortsatte folk.',
          },
          {
            id: 'historie-13-3-n-quiz5-q3',
            task: 'Hva var utefrontens bidrag til motstandskampen?',
            options: [
              { id: 'a', text: 'Den besto primart av eksilregjeringens diplomatiske arbeid for a sikre alliert stotte til Norges frigjoring', isCorrect: false },
              { id: 'b', text: 'Den besto av norske soldater som kjempet utelukkende pa ostfronten sammen med sovjetiske styrker', isCorrect: false },
              { id: 'c', text: 'Norske sjøfolk seilte forsyninger, Kompani Linge utførte sabotasje, og norske piloter fløy i RAF', isCorrect: true },
              { id: 'd', text: 'Den fokuserte pa a trene norske styrker i Sverige som skulle vaere klare til a frigjore Norge nar tiden var inne', isCorrect: false },
            ],
            solution: 'Utefronten var mangfoldig: norske sjøfolk seilte farlige konvoier over Atlanterhavet, Kompani Linge-soldater gjennomførte dristige aksjoner i Norge, og norske flyskvadroner fløy i RAF. Over 4000 norske sjøfolk mistet livet. Utefronten ga håp om at okkupasjonen en dag ville ta slutt.',
          },
        ],
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
        task: 'Test deg selv på hjemmefrontens organisasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-4-n-quiz1-q0',
            task: 'Hva var forskjellen mellom Milorg og Sivorg i hjemmefronten?',
            options: [
              { id: 'a', text: 'Milorg drev med sabotasje og vaepnet kamp, mens Sivorg drev med etterretning og informasjonsinnhenting for de allierte', isCorrect: false },
              { id: 'b', text: 'Milorg var den militære organisasjonen, Sivorg koordinerte sivil motstand', isCorrect: true },
              { id: 'c', text: 'Milorg opererte i byene og tettsteder, mens Sivorg organiserte motstanden i landdistriktene og langs svenskegrensen', isCorrect: false },
              { id: 'd', text: 'Milorg tok ordrer direkte fra London, mens Sivorg var uavhengig og tok beslutninger pa egen hand innenlands', isCorrect: false },
            ],
            solution: 'Hjemmefronten var delt i spesialiserte organisasjoner. Milorg trente frivillige for væpnet kamp og sabotasje - 40 000 mann ved krigens slutt. Sivorg koordinerte sivil motstand som holdningskamp og illegale aviser. XU samlet etterretning.',
          },
          {
            id: 'historie-13-4-n-quiz1-q1',
            task: 'Hva var XUs oppgave i hjemmefronten?',
            options: [
              { id: 'a', text: 'A opprettholde hemmelig radiokontakt mellom hjemmefronten og eksilregjeringen i London', isCorrect: false },
              { id: 'b', text: 'A organisere fluktrutene til Sverige for joder, motstandsfolk og andre som var i fare', isCorrect: false },
              { id: 'c', text: 'Å samle etterretning om tyske militære installasjoner og sende informasjonen til de allierte', isCorrect: true },
              { id: 'd', text: 'A koordinere vapennedslipp og mottak av britiske agenter som ble sendt inn med fallskjerm', isCorrect: false },
            ],
            solution: 'XU var etterretningsorganisasjonen. Agenter fotograferte, kartla og rapporterte om tyske militære installasjoner, styrker og bevegelser. Informasjonen ble sendt til de allierte. Det var ekstremt farlig arbeid - å bli tatt med spionmateriale betydde tortur og død.',
          },
          {
            id: 'historie-13-4-n-quiz1-q2',
            task: 'Hvordan holdt hjemmefronten kontakt med regjeringen i eksil i London?',
            options: [
              { id: 'a', text: 'Gjennom kurerer som krysset grensen til Sverige og videreformidlet meldinger via den norske legasjonen i Stockholm', isCorrect: false },
              { id: 'b', text: 'Via hemmelige radiosendere, våpennedslipp med fallskjerm og innsendte agenter', isCorrect: true },
              { id: 'c', text: 'Gjennom kodede meldinger i de illegale avisene som bare London-regjeringen kunne tyde', isCorrect: false },
              { id: 'd', text: 'Primart gjennom norske sjofolk som seilte mellom Storbritannia og Sverige og smuglet meldinger begge veier', isCorrect: false },
            ],
            solution: 'Hjemmefronten holdt kontakt med London via hemmelige radiosendere. Våpen ble sluppet ned med fallskjerm om natten. Agenter ble sendt inn fra Storbritannia. Det var et nettverk av hemmeligheter som bandt okkupert Norge til den frie verden.',
          },
        ],
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
        task: 'Test deg selv på sabotasje og væpnet kamp:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-4-n-quiz2-q0',
            task: 'Hvilke dilemmaer sto motstandsbevegelsen overfor når det gjaldt sabotasje og likvidasjoner?',
            options: [
              { id: 'a', text: 'Om aksjonene burde koordineres med London eller om hjemmefronten burde handle selvstendig etter eget skjonn', isCorrect: false },
              { id: 'b', text: 'Risikoen for tyske represalier mot sivilbefolkningen versus den militære nytten', isCorrect: true },
              { id: 'c', text: 'Om man skulle prioritere sabotasje mot militaere mal eller likvidasjoner av de mest farlige angiverne og NS-folkene', isCorrect: false },
              { id: 'd', text: 'Faren for a avsløre hjemmefrontens nettverk og dermed sette hele organisasjonen i fare for en enkelt aksjon', isCorrect: false },
            ],
            solution: 'Sabotasje og likvidasjoner skapte vanskelige dilemmaer. Militært kunne de være viktige - tungtvannsaksjonen hindret kanskje tyske atomvåpen. Men tyskerne tok ofte gisler og gjennomførte represalier. Motstandsledelsen måtte veie militær nytte mot faren for sivile ofre.',
          },
          {
            id: 'historie-13-4-n-quiz2-q1',
            task: 'Hva var Kompani Linge?',
            options: [
              { id: 'a', text: 'Milorgs spesialavdeling for sabotasje som opererte uavhengig av London og gjennomforte aksjoner pa eget initiativ', isCorrect: false },
              { id: 'b', text: 'Norske kommandosoldater trent i Storbritannia som ble sendt tilbake til Norge for spesielle oppdrag', isCorrect: true },
              { id: 'c', text: 'En norsk avdeling under britisk SOE som primart drev med etterretning og ikke direkte sabotasje', isCorrect: false },
              { id: 'd', text: 'XUs feltoperative avdeling som kombinerte etterretningsinnhenting med sabotasje mot tyske installasjoner', isCorrect: false },
            ],
            solution: 'Kompani Linge var nordmenn som ble trent i kommandoteknikker i Storbritannia og sendt tilbake til Norge for spesielle oppdrag. De utførte blant annet tungtvannsaksjonen. Mange av dem mistet livet i tjeneste.',
          },
          {
            id: 'historie-13-4-n-quiz2-q2',
            task: 'Hva var jernbanesabotasjens formål?',
            options: [
              { id: 'a', text: 'A odelegge jernbanelinjer for a hindre transport av norske ravaarer som jernmalm og nikkel til tysk krigsindustri', isCorrect: false },
              { id: 'b', text: 'Å ødelegge jernbanelinjer for å hindre tyske troppetransporter', isCorrect: true },
              { id: 'c', text: 'A stoppe deportasjonstogene som fraktet norske joder og politiske fanger til konsentrasjonsleirer i Tyskland', isCorrect: false },
              { id: 'd', text: 'A lamme kommunikasjonen mellom tyske garnisoner i Norge for a gjore det lettere for de allierte a invadere', isCorrect: false },
            ],
            solution: 'Jernbanesabotasjen var systematisk ødeleggelse av jernbanelinjer for å hindre tyske troppetransporter. Hver sabotert strekning kunne bety forsinkelser som kanskje reddet liv. Det krevde risiko fra dem som utførte det, men var en viktig del av den væpnede motstanden.',
          },
        ],
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
        task: 'Test deg selv på de illegale avisene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-4-n-quiz3-q0',
            task: 'Hvorfor var de illegale avisene så viktige for motstandskampen?',
            options: [
              { id: 'a', text: 'Fordi de fungerte som rekrutteringsverktoy for Milorg og hjalp hjemmefronten a verve nye medlemmer til vaepnet motstand', isCorrect: false },
              { id: 'b', text: 'Fordi de spredte sann informasjon, motvirket propaganda og opprettholdt moralen i befolkningen', isCorrect: true },
              { id: 'c', text: 'Fordi de ga detaljert informasjon om tyske styrkeoppstillinger som befolkningen kunne bruke til a unnga fare', isCorrect: false },
              { id: 'd', text: 'Fordi de formidlet praktiske instruksjoner om sabotasje og selvforsvar som vanlige borgere kunne bruke', isCorrect: false },
            ],
            solution: 'De illegale avisene brøt informasjonsmonopolet. I et land der all offisiell informasjon var propaganda, var sannheten revolusjonær. Avisene spredte nyheter fra BBC, motvirket løgner, og viste folk at motstanden levde.',
          },
          {
            id: 'historie-13-4-n-quiz3-q1',
            task: 'Hvor mange illegale aviser ble gitt ut under okkupasjonen?',
            options: [
              { id: 'a', text: 'Rundt 50-60 aviser, primart i de store byene Oslo, Bergen og Trondheim', isCorrect: false },
              { id: 'b', text: 'Rundt 150 aviser, de fleste med svart begrenset opplag pa noen titalls eksemplarer', isCorrect: false },
              { id: 'c', text: 'Over 300 forskjellige aviser', isCorrect: true },
              { id: 'd', text: 'Over 500 aviser, men de fleste var kortlivede og ble lagt ned etter noen fa utgaver', isCorrect: false },
            ],
            solution: 'Over 300 forskjellige illegale aviser ble utgitt i hemmelighet under okkupasjonen. De ble trykt på loft og i kjellere, ofte med stensileringsmaskiner eller håndskrevne avskrifter. Distribusjonen skjedde fra hånd til hånd, i postkasser eller gjemt i brødposer.',
          },
          {
            id: 'historie-13-4-n-quiz3-q2',
            task: 'Hva risikerte man ved å bli tatt med illegalt materiale?',
            options: [
              { id: 'a', text: 'Fengselsstraff pa opptil seks maneder i norsk fengsel og beslaglegging av trykkeriutstyr', isCorrect: false },
              { id: 'b', text: 'Deportasjon til tvangsarbeid i Nord-Norge eller pa kontinentet i tysk krigsindustri', isCorrect: false },
              { id: 'c', text: 'Konsentrasjonsleir eller døden', isCorrect: true },
              { id: 'd', text: 'Internering pa Grini fangeleir utenfor Oslo med mulighet for loslatelse etter avhor', isCorrect: false },
            ],
            solution: 'Å bli tatt med illegalt materiale kunne bety konsentrasjonsleir eller døden. Mange ble tatt. Noen ble torturert til å røpe andre. Kjeden kunne ryke når som helst. Likevel fortsatte folk å trykke, distribuere og lese de illegale avisene gjennom hele okkupasjonen.',
          },
        ],
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
        task: 'Test deg selv på begrepet handlingsrom:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-4-n-quiz4-q0',
            task: 'Hva påvirket folks handlingsrom under okkupasjonen?',
            options: [
              { id: 'a', text: 'Primart klassetilhørighet og okonomisk status - de velstaende hadde ressurser til motstand mens arbeiderklassen manglet muligheter', isCorrect: false },
              { id: 'b', text: 'Geografi, nettverk, ressurser, familiesituasjon og personlige valg spilte alle inn', isCorrect: true },
              { id: 'c', text: 'Primart politisk overbevisning og tidligere militaer erfaring - de som allerede var organisert hadde storst handlingsrom', isCorrect: false },
              { id: 'd', text: 'Alder og kjonn var de viktigste faktorene - unge menn hadde storst handlingsrom mens kvinner og eldre hadde begrensede muligheter', isCorrect: false },
            ],
            solution: 'Handlingsrommet varierte med mange faktorer: geografi, nettverk, ressurser og familiesituasjon. Men til slutt kom det også an på personlige valg. Noen med små muligheter fant måter å handle, mens andre med alle muligheter gjorde ingenting.',
          },
          {
            id: 'historie-13-4-n-quiz4-q1',
            task: 'Hva har historikere funnet ut om dem som hjalp jøder å flykte?',
            options: [
              { id: 'a', text: 'De var primart mennesker med sterke religiose overbevisninger som handlet ut fra kristen nestekjaerlighet', isCorrect: false },
              { id: 'b', text: 'De var ofte vanlige folk drevet av empati og personlig kontakt, ikke politisk ideologi', isCorrect: true },
              { id: 'c', text: 'De var hovedsakelig folk som bodde naer svenskegrensen og hadde praktisk mulighet til a hjelpe med flukt', isCorrect: false },
              { id: 'd', text: 'De var oftest folk med internasjonale kontakter eller erfaring fra utlandet som ga dem et bredere perspektiv', isCorrect: false },
            ],
            solution: 'Historikere har funnet at de som hjalp jøder å flykte ofte ikke var spesielt politisk engasjerte. De var folk som så medmennesker i nød og ikke klarte å se bort. Noen hadde selv opplevd urett, andre hadde personlig kjennskap til jøder. Empati og personlig kontakt viste seg viktigere enn ideologi.',
          },
          {
            id: 'historie-13-4-n-quiz4-q2',
            task: 'Hvorfor hadde folk nær svenskegrensen større handlingsrom enn folk i byer?',
            options: [
              { id: 'a', text: 'Fordi folk i grenseomradene hadde bedre tilgang pa vapen smuglet inn fra Sverige gjennom motstandsnettverkene', isCorrect: false },
              { id: 'b', text: 'Fordi folk nær grensen kunne lettere hjelpe flyktninger over til trygghet og selv komme seg i sikkerhet hvis de ble avslørt', isCorrect: true },
              { id: 'c', text: 'Fordi den svenske regjeringen aktivt stottet norsk motstand og lot motstandsfolk operere fritt fra svensk side', isCorrect: false },
              { id: 'd', text: 'Fordi avsidesliggende grenseomrader hadde mindre tysk tilstedevaerelse, noe som ga storre frihet til a organisere motstand', isCorrect: false },
            ],
            solution: 'Geografisk plassering spilte en stor rolle for handlingsrommet. Nær svenskegrensen var det lettere å hjelpe folk å flykte og å komme seg i sikkerhet selv. I avsidesliggende bygder var det lettere å skjule aktiviteter enn midt i Oslo der tysk overvåking var tettere.',
          },
        ],
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
        task: 'Test deg selv på utefronten:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-4-n-quiz5-q0',
            task: 'Hvorfor var den norske handelsflåten så viktig for den allierte krigsinnsatsen?',
            options: [
              { id: 'a', text: 'Den ble brukt til a transportere norske soldater fra Storbritannia tilbake til Norge for sabotasjeaksjoner', isCorrect: false },
              { id: 'b', text: 'Den fraktet livsviktige forsyninger til Storbritannia over Atlanterhavet', isCorrect: true },
              { id: 'c', text: 'Den ble primart brukt til a evakuere norske flyktninger fra okkupert Norge til Storbritannia og Canada', isCorrect: false },
              { id: 'd', text: 'Den fraktet krigsmateriell fra USA til Sovjetunionen gjennom de farlige Murmansk-konvoiene', isCorrect: false },
            ],
            solution: 'Den norske handelsflåten var en av verdens største. Da Norge ble okkupert, seilte den for de allierte og fraktet forsyninger over Atlanterhavet til Storbritannia. Over 4000 norske sjøfolk mistet livet - torpedert av tyske ubåter i iskaldt vann.',
          },
          {
            id: 'historie-13-4-n-quiz5-q1',
            task: 'Hvor mange norske sjøfolk mistet livet under krigen?',
            options: [
              { id: 'a', text: 'Rundt 1500, primart fra torpederinger i Nord-Atlanteren de forste krigsarene', isCorrect: false },
              { id: 'b', text: 'Rundt 2500, de fleste i konvoier til Murmansk og Arkhangelsk', isCorrect: false },
              { id: 'c', text: 'Rundt 3000, men mange av disse var utenlandske sjofolk pa norskregistrerte skip', isCorrect: false },
              { id: 'd', text: 'Over 4000', isCorrect: true },
            ],
            solution: 'Over 4000 norske sjøfolk mistet livet under krigen. Tyske ubåter jaktet på konvoiene over Atlanterhavet. Skip ble torpedert midt på havet, i iskaldt vann, ofte uten sjanse til redning. Det var en enorm pris for et lite land.',
          },
          {
            id: 'historie-13-4-n-quiz5-q2',
            task: 'Hvorfor var utefronten avgjørende for motstandskampen hjemme?',
            options: [
              { id: 'a', text: 'Fordi utefronten forsynte hjemmefronten med vapen, sprengstoff og utstyr som var nodvendig for sabotasjeaksjoner', isCorrect: false },
              { id: 'b', text: 'Fordi den frie verdens kamp ga håp om at okkupasjonen en dag ville ta slutt', isCorrect: true },
              { id: 'c', text: 'Fordi utefronten skapte diplomatisk press pa de allierte til a prioritere Norges frigjoring i sin strategi', isCorrect: false },
              { id: 'd', text: 'Fordi eksilregjeringen i London organiserte og finansierte hjemmefrontens operasjoner gjennom direkte kommando', isCorrect: false },
            ],
            solution: 'Utefronten var avgjørende fordi den representerte håpet. Uten den ville motstandskampen hjemme vært meningsløs. Det var den frie verdens kamp som ga håp om at okkupasjonen en dag ville ta slutt. Sjøfolkene, soldatene og pilotene viste at Norge fortsatt kjempet.',
          },
        ],
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
        task: 'Test deg selv på Nürnbergprosessen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-5-n-quiz1-q0',
            task: 'Hvilket viktig prinsipp etablerte Nürnbergprosessen?',
            options: [
              { id: 'a', text: 'At stater som taper en krig kan holdes kollektivt ansvarlige og ma betale erstatninger til ofrene', isCorrect: false },
              { id: 'b', text: 'At individer kan holdes ansvarlige for krigsforbrytelser, og at "ordre ovenfra" ikke er noe forsvar', isCorrect: true },
              { id: 'c', text: 'At bare de ovre lederne i et regime kan stilles til ansvar, ikke mellomledere og embetsfolk som utforte politikken', isCorrect: false },
              { id: 'd', text: 'At en internasjonal domstol kan dømme beseirede staters militaere handlinger, men ikke politiske beslutninger', isCorrect: false },
            ],
            solution: 'Nürnbergprosessen slo fast at enkeltpersoner kan holdes ansvarlige for krigsforbrytelser og forbrytelser mot menneskeheten. "Å følge ordre" ble avvist som forsvar. Disse prinsippene la grunnlaget for moderne internasjonal strafferett.',
          },
          {
            id: 'historie-13-5-n-quiz1-q1',
            task: 'Hvilke tre typer forbrytelser ble de tiltalte i Nürnberg anklaget for?',
            options: [
              { id: 'a', text: 'Brudd pa Geneve-konvensjonene, folkemord og okkupasjon av noytrale stater', isCorrect: false },
              { id: 'b', text: 'Forbrytelser mot freden, krigsforbrytelser og forbrytelser mot menneskeheten', isCorrect: true },
              { id: 'c', text: 'Folkemord, tvangsarbeid og systematisk plyndring av okkuperte lands ressurser', isCorrect: false },
              { id: 'd', text: 'Angrepskrig, brudd pa internasjonale avtaler og forbrytelser mot sivilbefolkningen', isCorrect: false },
            ],
            solution: 'De tiltalte ble anklaget for tre typer forbrytelser: forbrytelser mot freden (å planlegge og starte angrepskrig), krigsforbrytelser (brudd på krigens lover), og forbrytelser mot menneskeheten (Holocaust og andre massemord). Av 24 tiltalte ble 12 dømt til døden.',
          },
          {
            id: 'historie-13-5-n-quiz1-q2',
            task: 'Hva var det vanligste forsvaret de tiltalte nazistene brukte?',
            options: [
              { id: 'a', text: 'At de ikke hadde kjennskap til folkemordets omfang fordi informasjonen var hemmeligstemplet og begrenset til de aller overste', isCorrect: false },
              { id: 'b', text: 'At de bare hadde "fulgt ordre" fra overordnede', isCorrect: true },
              { id: 'c', text: 'At handlingene de utforte var lovlige etter gjeldende tysk lov pa det tidspunktet de ble begatt', isCorrect: false },
              { id: 'd', text: 'At de allierte ogsa hadde begatt krigsforbrytelser, som bombingen av Dresden og bruk av atombombe, og dermed ikke hadde moralsk rett til a domme', isCorrect: false },
            ],
            solution: 'Mange tiltalte hevdet at de bare hadde fulgt ordre - de var underordnede som gjorde det de ble befalt. Andre hevdet uvitenhet. Domstolen avviste disse forsvarene og fastslo at det finnes et individuelt ansvar for egne handlinger, uansett hva overordnede befaler.',
          },
        ],
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
        task: 'Test deg selv på FN og menneskerettighetene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-5-n-quiz2-q0',
            task: 'Hva var sammenhengen mellom andre verdenskrig og Menneskerettighetserklæringen?',
            options: [
              { id: 'a', text: 'Erklaeringen bygget primart pa Atlanterhavspakten fra 1941 mellom Roosevelt og Churchill, ikke direkte pa Holocaust', isCorrect: false },
              { id: 'b', text: 'Erklæringen var et direkte svar på Holocaust og krigens grusomheter - "aldri mer" skulle stater kunne behandle mennesker slik', isCorrect: true },
              { id: 'c', text: 'Erklaeringen var en viderefouring av prinsippene i Folkeforbundspakten fra 1919 om minoritetsbeskyttelse', isCorrect: false },
              { id: 'd', text: 'Erklaeringen ble primart drevet frem av avkoloniseringsbevegelsen som krevde universelle rettigheter for alle folk', isCorrect: false },
            ],
            solution: 'Menneskerettighetserklæringen fra 1948 var et direkte svar på Holocaust og krigens grusomheter. Den fastslo at alle mennesker har grunnleggende rettigheter som ingen stat kan ta fra dem.',
          },
          {
            id: 'historie-13-5-n-quiz2-q1',
            task: 'Hvorfor hadde FNs Sikkerhetsråd en svakhet allerede fra starten?',
            options: [
              { id: 'a', text: 'Fordi FN manglet en egen militaer styrke og var avhengig av at medlemslandene frivillig stilte tropper til disposisjon', isCorrect: false },
              { id: 'b', text: 'Fordi FN-pakten ikke ga organisasjonen myndighet til a gripe inn i staters indre anliggender pa grunn av suverenitetsprinsippet', isCorrect: false },
              { id: 'c', text: 'Fordi de fem faste medlemmene hadde vetorett, som kunne lamme FN når stormaktene var uenige', isCorrect: true },
              { id: 'd', text: 'Fordi Generalforsamlingens vedtak ikke var bindende, slik at resolusjonene bare var anbefalinger uten rettslig kraft', isCorrect: false },
            ],
            solution: 'FNs Sikkerhetsråd fikk fem faste medlemmer - USA, Sovjetunionen, Storbritannia, Frankrike og Kina - som alle hadde vetorett. Tanken var at stormaktene måtte samarbeide. Men vetoretten viste seg også å lamme FN under den kalde krigen når stormaktene var uenige.',
          },
          {
            id: 'historie-13-5-n-quiz2-q2',
            task: 'Hvem ledet arbeidet med Verdenserklæringen om menneskerettigheter?',
            options: [
              { id: 'a', text: 'Rene Cassin, en fransk jurist og motstandsmann som skrev forsteutkastet til erklaerningen', isCorrect: false },
              { id: 'b', text: 'Trygve Lie, FNs forste generalsekretaer og tidligere norsk utenriksminister', isCorrect: false },
              { id: 'c', text: 'Eleanor Roosevelt, president Roosevelts enke', isCorrect: true },
              { id: 'd', text: 'Charles Malik, den libanesiske diplomaten som var en av erklaeringens viktigste arkitekter', isCorrect: false },
            ],
            solution: 'Eleanor Roosevelt, president Franklin D. Roosevelts enke, ledet arbeidet med Verdenserklæringen om menneskerettigheter. Hun kalte den "et internasjonalt Magna Carta for hele menneskeheten". Den ble vedtatt 10. desember 1948.',
          },
        ],
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
        task: 'Test deg selv på det norske landssvikoppgjøret:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-5-n-quiz3-q0',
            task: 'Hva var kritikken mot det norske landssvikoppgjøret?',
            options: [
              { id: 'a', text: 'At det brukte straffelover med tilbakevirkende kraft, noe mange jurister mente var i strid med grunnleggende rettsprinsipper', isCorrect: false },
              { id: 'b', text: 'At det rammet småfolk hardt mens store aktører slapp lettere, og at behandlingen av "tyskertøser" og krigsbarn var urettferdig', isCorrect: true },
              { id: 'c', text: 'At det gikk for fort og mange ble domt pa svakt grunnlag fordi stemningen i befolkningen krevde rask rettferdighet', isCorrect: false },
              { id: 'd', text: 'At det fokuserte for mye pa NS-medlemskap og for lite pa dem som hadde profitert okonomisk pa okkupasjonen uten a vaere medlemmer', isCorrect: false },
            ],
            solution: 'Landssvikoppgjøret ble kritisert fra flere hold. Noen mente store næringslivsledere slapp for lett mens vanlige NS-medlemmer ble straffet hardt. Behandlingen av "tyskertøsene" og deres barn var særlig problematisk.',
          },
          {
            id: 'historie-13-5-n-quiz3-q1',
            task: 'Hvor mange personer ble etterforsket i det norske landssvikoppgjøret?',
            options: [
              { id: 'a', text: 'Rundt 45 000 personer - tilsvarende antallet NS-medlemmer - og ca. 30 000 ble domt', isCorrect: false },
              { id: 'b', text: 'Rundt 150 000 personer, men de fleste ble frikjent eller fikk saken henlagt', isCorrect: false },
              { id: 'c', text: 'Rundt 90 000 personer, og ca. 50 000 ble dømt', isCorrect: true },
              { id: 'd', text: 'Rundt 60 000 personer, og ca. 25 000 ble domt - resten fikk amnesti i lopet av 1950-arene', isCorrect: false },
            ],
            solution: 'Det norske landssvikoppgjøret var Europas mest omfattende. Rundt 90 000 personer ble etterforsket, og ca. 50 000 ble dømt - et enormt tall for et lite land. 45 mennesker ble henrettet, inkludert Vidkun Quisling.',
          },
          {
            id: 'historie-13-5-n-quiz3-q2',
            task: 'Hva skjedde med "krigsbarnen" - barna som ble født av norske kvinner og tyske soldater?',
            options: [
              { id: 'a', text: 'De ble adoptert bort til norske familier under nye navn og fikk aldri vite om sitt opphav', isCorrect: false },
              { id: 'b', text: 'De ble sendt til Lebensborn-hjem i Tyskland der de ble oppdratt som tyske statsborgere', isCorrect: false },
              { id: 'c', text: 'De ble stigmatisert og vokste opp med skam - først i 2018 ba Stortinget om unnskyldning', isCorrect: true },
              { id: 'd', text: 'De fikk norsk statsborgerskap og ble gradvis integrert, men mottok forst formell anerkjennelse i 2005', isCorrect: false },
            ],
            solution: 'Krigsbarnen ble stigmatisert og vokste opp med skam og hemmeligheter rundt sitt opphav. De ble utstøtt og diskriminert for noe de ikke selv kunne noe for. Først i 2018 - over 70 år etter krigen - ba Stortinget formelt om unnskyldning til dem.',
          },
          {
            id: 'historie-13-5-n-quiz3-q3',
            task: 'Hva skjedde med Vidkun Quisling etter krigen?',
            options: [
              { id: 'a', text: 'Han ble domt til livsvarig fengsel og dode pa Akershus festning i 1950', isCorrect: false },
              { id: 'b', text: 'Han tok sitt eget liv i fengselet for rettssaken ble avsluttet, slik flere andre nazi-ledere ogsa gjorde', isCorrect: false },
              { id: 'c', text: 'Han ble utlevert til de allierte og domt sammen med andre nazi-ledere i Nurnberg', isCorrect: false },
              { id: 'd', text: 'Han ble dømt til døden og skutt på Akershus 24. oktober 1945', isCorrect: true },
            ],
            solution: 'Vidkun Quisling ble stilt for retten etter krigen. Han ble dømt for landssvik og henrettet ved skyting på Akershus festning 24. oktober 1945. Han var blant de 45 som ble henrettet i landssvikoppgjøret.',
          },
        ],
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
        task: 'Test deg selv på den delte verden etter krigen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-5-n-quiz4-q0',
            task: 'Hvordan var freden etter andre verdenskrig forskjellig fra freden etter første verdenskrig?',
            options: [
              { id: 'a', text: 'Tyskland ble delt i fire okkupasjonssoner og fratatt all industri for a hindre at landet noen gang kunne fore krig igjen', isCorrect: false },
              { id: 'b', text: 'I stedet for å straffe Tyskland hardt, satset man på gjenoppbygging (Marshall-planen) og internasjonale institusjoner (FN)', isCorrect: true },
              { id: 'c', text: 'De allierte gjentok Versailles-modellen med krigserstatninger, men denne gangen ble belopene mer realistiske', isCorrect: false },
              { id: 'd', text: 'Freden ble primart formet av Sovjetunionens krav, ettersom Sovjet hadde baaret de tyngste byrdene under krigen', isCorrect: false },
            ],
            solution: 'Etter første verdenskrig ble Tyskland straffet hardt med Versailles-traktaten. Etter andre verdenskrig lærte man av denne feilen. I stedet for ydmykelse kom Marshall-hjelpen for gjenoppbygging. USA ble værende i Europa. Det var en klokere fred.',
          },
          {
            id: 'historie-13-5-n-quiz4-q1',
            task: 'Hva var Marshall-planen, og hva var dens doble formål?',
            options: [
              { id: 'a', text: 'Et FN-program for gjenoppbygging av alle krigsrammede land i bade Vest- og Ost-Europa, finansiert av alle medlemsland', isCorrect: false },
              { id: 'b', text: 'Massiv amerikansk økonomisk hjelp til gjenoppbygging av Vest-Europa - både for å hjelpe og for å hindre kommunismens spredning', isCorrect: true },
              { id: 'c', text: 'En amerikansk plan for a avvæpne og deindustrialisere Tyskland for a sikre at landet aldri igjen kunne true Europa', isCorrect: false },
              { id: 'd', text: 'Et handelssamarbeid mellom vesteuropeiske land for a gjenreise okonomien gjennom frihandel og tollreduksjoner', isCorrect: false },
            ],
            solution: 'Marshall-planen (1948) ga massiv amerikansk økonomisk hjelp til gjenoppbyggingen av Vest-Europa. Det var ikke bare generøsitet - det var også en strategi for å hindre kommunismens spredning ved å bygge velstand. Ved å hjelpe Europa opp av ruinene sikret USA seg allierte i den kalde krigen.',
          },
          {
            id: 'historie-13-5-n-quiz4-q2',
            task: 'Hvorfor brøt Norge med sin tradisjonelle nøytralitetspolitikk etter krigen?',
            options: [
              { id: 'a', text: 'Fordi Sovjetunionens press pa Finland og de baltiske statene skapte frykt for at Norge ogsa kunne bli truet fra ost', isCorrect: false },
              { id: 'b', text: 'Fordi nøytraliteten hadde mislyktes spektakulært i 1940, og Norge ble med i NATO i 1949', isCorrect: true },
              { id: 'c', text: 'Fordi Norge forst forsøkte et nordisk forsvarsforbund med Sverige og Danmark, men dette mislyktes i 1948', isCorrect: false },
              { id: 'd', text: 'Fordi Marshall-hjelpen kom med krav om militaert samarbeid som betingelse for okonomisk stotte', isCorrect: false },
            ],
            solution: 'Norge hadde trodd at nøytraliteten ville beskytte landet, men 9. april 1940 viste at dette var en illusjon. Etter krigen ble Norge medlem av NATO i 1949 - et dramatisk brudd med nøytralitetspolitikken. Erfaringen viste at man trengte allierte for å forsvare seg.',
          },
        ],
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
        task: 'Test deg selv på krigens varige arv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'historie-13-5-n-quiz5-q0',
            task: 'Hvorfor regnes andre verdenskrig som et vendepunkt i verdenshistorien?',
            options: [
              { id: 'a', text: 'Primart fordi den forte til opprettelsen av FN og internasjonal strafferett som forandret forholdet mellom stater', isCorrect: false },
              { id: 'b', text: 'Fordi den endret maktbalansen, startet avkolonisering, førte til europeisk integrasjon og skapte atomalderen', isCorrect: true },
              { id: 'c', text: 'Fordi den avsluttet imperialismens tidsalder og innledet en ny aera av nasjonalstater og selvbestemmelsesrett', isCorrect: false },
              { id: 'd', text: 'Fordi den skapte den kalde krigen som ble den dominerende konflikten i resten av det tjuende arhundret', isCorrect: false },
            ],
            solution: 'Andre verdenskrig var et vendepunkt fordi den forandret nesten alt. Europa mistet sin dominerende stilling. Avkoloniseringen akselererte. Europeisk integrasjon begynte. Atomalderen skapte nye trusler. Verden etter 1945 var fundamentalt annerledes.',
          },
          {
            id: 'historie-13-5-n-quiz5-q1',
            task: 'Hvorfor akselererte avkoloniseringen etter andre verdenskrig?',
            options: [
              { id: 'a', text: 'Fordi krigen hadde svekket de europeiske stormaktene okonomisk og militaert sa de ikke lenger hadde ressurser til a opprettholde imperiene', isCorrect: false },
              { id: 'b', text: 'Fordi de europeiske imperiene hadde vist sin verste side, og koloniserte folk begynte å kreve uavhengighet', isCorrect: true },
              { id: 'c', text: 'Fordi USA og Sovjetunionen begge stottet avkolonisering for a utvide sin egen innflytelsessfaere i den tredje verden', isCorrect: false },
              { id: 'd', text: 'Fordi Japans erobring av europeiske kolonier i Asia hadde vist at de hvite koloniherrene ikke var uovervinnelige', isCorrect: false },
            ],
            solution: 'Europeiske imperier som hadde hevdet å representere sivilisasjonen, hadde nettopp vist sin verste side gjennom krig og Holocaust. Koloniserte folk i Asia og Afrika begynte å kreve uavhengighet - og fikk det i løpet av de neste tiårene. Krigen hadde undergravet koloniherrenes moralske autoritet.',
          },
          {
            id: 'historie-13-5-n-quiz5-q2',
            task: 'Hvorfor har EU sine røtter i andre verdenskrig?',
            options: [
              { id: 'a', text: 'Fordi Marshall-planen krevde at europeiske land samarbeidet om fordelingen av den amerikanske hjelpen', isCorrect: false },
              { id: 'b', text: 'Fordi krigen viste at europeisk nasjonalisme var farlig, og samarbeid var nødvendig for å gjøre ny krig umulig', isCorrect: true },
              { id: 'c', text: 'Fordi den kalde krigen krevde at Vest-Europa stod samlet mot Sovjet, og okonomisk integrasjon styrket forsvarsevnen', isCorrect: false },
              { id: 'd', text: 'Fordi Frankrike og Tyskland ønsket a kontrollere hverandres krigsindustri gjennom felles forvaltning av kull og stal', isCorrect: false },
            ],
            solution: 'Krigen hadde vist at europeisk nasjonalisme var livsfarlig. Løsningen var samarbeid - først om kull og stål, så om stadig mer. EU har sine røtter i ønsket om å gjøre ny krig mellom europeiske nasjoner umulig gjennom økonomisk og politisk integrasjon.',
          },
          {
            id: 'historie-13-5-n-quiz5-q3',
            task: 'Hva mente filosofen George Santayana med: "De som ikke husker fortiden, er dømt til å gjenta den"?',
            options: [
              { id: 'a', text: 'At menneskelig ondskap er en konstant faktor som vi aldri kan eliminere, bare haandtere gjennom sterke institusjoner', isCorrect: false },
              { id: 'b', text: 'At historien folger forutsigbare monster, og at kunnskap om fortiden lar oss forutsi fremtidige konflikter', isCorrect: false },
              { id: 'c', text: 'At vi må lære av historien for å unngå å gjøre de samme feilene om igjen', isCorrect: true },
              { id: 'd', text: 'At demokratier er saarbare for autoritaere bevegelser og at politisk aarvaakenhet er viktigere enn historisk kunnskap', isCorrect: false },
            ],
            solution: 'Sitatet understreker at kunnskap om fortiden er avgjørende for å beskytte fremtiden. Vi lærer om andre verdenskrig, Holocaust og okkupasjonen nettopp for å gjenkjenne varselsignalene - propaganda, dehumanisering, gradvis eskalering - og for å forhindre at det skjer igjen.',
          },
        ],
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
