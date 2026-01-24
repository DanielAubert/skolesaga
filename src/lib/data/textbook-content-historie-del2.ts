/**
 * Tekstbok innhold for Historie DEL 2: Kapittel 5-8
 * Renessanse, revolusjoner, industrialisering og nasjonalisme
 *
 * Dekker LK20 kompetansemål for VG2 og VG3.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5: Renessanse og reformasjon
// ============================================================================

export const CHAPTER_HISTORIE_5_1: TextbookChapter = {
  id: 'historie-5-1',
  courseId: 'historie',
  chapterNumber: '5.1',
  title: 'Renessansen og humanismen',
  description: 'Gjenfødelsen av antikkens idealer og ny tenkning.',
  estimatedMinutes: 50,
  competenceGoals: ['reflektere over hvordan fortiden former oss'],
  content: [
    {
      id: 'historie-5-1-intro',
      type: 'text',
      content: `## Renessansen - en kulturell gjenfødelse

Renessansen (ca. 1400-1600) var en kulturell og intellektuell bevegelse som startet i Italia og spredte seg til resten av Europa. Ordet "renessanse" betyr **gjenfødelse** og refererer til gjenoppdagelsen av antikkens greske og romerske kultur.

I middelalderen hadde kirken dominert det intellektuelle livet, og menneskets rolle var primært som en synder som måtte tjene Gud. Renessansen markerte et brudd med denne tankegangen. Mennesket ble nå sett som et skapende vesen med evne til å forme sin egen skjebne.

Renessansen begynte i de italienske bystatene som Firenze, Venezia og Milano. Disse byene var velstående handelssentre med en rik borgerklasse som hadde råd til å støtte kunst og kultur. Familien Medici i Firenze ble spesielt kjent som beskyttere av kunstnere og lærde.`,
    },
    {
      id: 'historie-5-1-def-1',
      type: 'definition',
      title: 'Renessanse',
      content: `**Renessanse** (fra italiensk "rinascita" = gjenfødelse) var en kulturell bevegelse fra ca. 1400-1600 som gjenoppdaget antikkens kunst, litteratur og filosofi. Bevegelsen startet i Italia og spredte seg til hele Europa.`,
    },
    {
      id: 'historie-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva ordet "renessanse" betyr, og hvorfor denne perioden fikk dette navnet.',
        solution: 'Renessanse betyr "gjenfødelse" og refererer til gjenoppdagelsen av antikkens greske og romerske kultur. Perioden fikk dette navnet fordi man så den som en gjenfødelse av de klassiske idealene fra antikken, etter den "mørke" middelalderen. Kunstnere, forfattere og tenkere lot seg inspirere av antikkens filosofi, kunst og litteratur, og skapte verk som bygget videre på disse tradisjonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-1-def-2',
      type: 'definition',
      title: 'Humanisme',
      content: `**Humanisme** var renessansens ledende filosofiske retning. Humanistene satte mennesket i sentrum og la vekt på menneskets verdighet, fornuft og skapende evner. De studerte antikkens tekster på originalspråkene (latin og gresk) og mente at klassisk dannelse var veien til et godt liv.`,
    },
    {
      id: 'historie-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var humanismens viktigste ideer, og hvordan skilte disse seg fra middelalderens verdensbilde?',
        solution: 'Humanismens viktigste ideer var: 1) Mennesket i sentrum - mennesket har verdighet og evne til å forme sin egen skjebne. 2) Vekt på fornuft og kunnskap fremfor blind tro. 3) Studium av antikkens klassiske tekster. 4) Individets betydning og selvutvikling. Dette skilte seg fra middelalderens verdensbilde der kirken dominerte, mennesket ble sett primært som synder, Gud var i sentrum av alt, og man stolte mer på kirkens autoritet enn egen fornuft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-1-text-2',
      type: 'text',
      content: `## Renessansens kunst og kunstnere

Renessansekunsten kjennetegnes av realisme, perspektiv og anatomi. Kunstnerne studerte menneskets anatomi for å kunne fremstille kroppen naturtro. De utviklet sentralperspektivet, som ga dybde og romfølelse til bildene.

**Leonardo da Vinci** (1452-1519) var selve symbolet på renessansemennesket - en universell begavelse som mestret både kunst, vitenskap og teknikk. Hans mest kjente verk inkluderer "Mona Lisa" og "Nattverden".

**Michelangelo** (1475-1564) skapte mesterverker som skulpturen "David" og takmaleriene i Det sixtinske kapell i Roma.

**Rafael** (1483-1520) var kjent for sine harmoniske komposisjoner og fremstillinger av Madonna.`,
    },
    {
      id: 'historie-5-1-example-1',
      type: 'example',
      title: 'Leonardo da Vinci - universalgeniet',
      content: `Leonardo da Vinci er et godt eksempel på renessansens ideal om det allsidige mennesket. Han var ikke bare maler, men også:
- **Anatom**: Dissekerte lik for å forstå menneskets kropp
- **Ingeniør**: Tegnet planer for flygemaskiner, stridsvogner og broer
- **Vitenskapsmann**: Studerte optikk, hydraulikk og geologi
- **Arkitekt**: Designet bygninger og befestningsverk

Hans notatbøker inneholder tusenvis av tegninger og observasjoner som viser hans allsidige interesser og systematiske tilnærming til kunnskap.`,
    },
    {
      id: 'historie-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor regnes Leonardo da Vinci som et symbol på renessansemennesket? Gi konkrete eksempler fra hans virke.',
        solution: 'Leonardo da Vinci regnes som symbol på renessansemennesket fordi han mestret mange ulike felt og viste hvordan menneskets skapende evner kunne utvikles. Eksempler: Som kunstner skapte han "Mona Lisa" og "Nattverden". Som anatom dissekerte han lik og laget detaljerte tegninger av menneskets kropp. Som ingeniør designet han flygemaskiner, stridsvogner og broer - mange hundre år før teknologien fantes. Som vitenskapsmann studerte han optikk og hydraulikk. Dette viser renessansens ideal om det allsidige mennesket som bruker fornuft og observasjon til å forstå verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-1-text-3',
      type: 'text',
      content: `## Boktrykkerkunsten - en revolusjon

I 1450 oppfant Johannes Gutenberg boktrykkerkunsten med løse typer i Mainz i Tyskland. Dette var kanskje den viktigste oppfinnelsen i renessansen.

Før Gutenberg måtte bøker kopieres for hånd av munker. Dette var tidkrevende og kostbart, og svært få hadde tilgang til bøker. Med trykkpressen kunne man produsere hundrevis av kopier raskt og billig.

**Konsekvenser av boktrykkerkunsten:**
- Kunnskap kunne spres til langt flere mennesker
- Ideer spredte seg raskere over landegrenser
- Latin mistet gradvis sin posisjon - bøker ble trykt på folkespråkene
- Kirken mistet monopol på kunnskap
- La grunnlaget for reformasjonen (Luthers skrifter kunne spres raskt)`,
    },
    {
      id: 'historie-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor boktrykkerkunsten regnes som en av historiens viktigste oppfinnelser. Hvilke konsekvenser fikk den?',
        solution: 'Boktrykkerkunsten regnes som en av historiens viktigste oppfinnelser fordi den revolusjonerte spredningen av kunnskap. Konsekvenser: 1) Bøker ble billigere og tilgjengelige for flere. 2) Ideer kunne spres raskere over landegrenser. 3) Folkespråkene styrket sin posisjon på bekostning av latin. 4) Kirken mistet sitt monopol på kunnskap. 5) La grunnlaget for reformasjonen - Luthers skrifter kunne trykkes og spres raskt. 6) Økt leseferdighet i befolkningen. 7) Vitenskapelige ideer kunne deles mellom forskere i hele Europa.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan renessansen og humanismen la grunnlaget for vår moderne tenkning om menneskets verdi og rettigheter.',
        solution: 'Renessansen og humanismen la grunnlaget for moderne tenkning på flere måter: 1) Mennesket i sentrum: Ideen om at mennesket har iboende verdighet og evne til å forme sitt eget liv, er grunnleggende for moderne menneskerettigheter. 2) Fornuft og kritisk tenkning: Humanistenes vekt på fornuft fremfor blind autoritetstro banet vei for opplysningstiden og moderne vitenskap. 3) Individualisme: Fokuset på individet la grunnlag for senere ideer om individuelle rettigheter. 4) Utdanning: Humanistenes vekt på dannelse og kunnskap inspirerte moderne utdanningsidealer. 5) Sekularisering: Selv om humanistene ikke var anti-religiøse, bidro de til å skille mellom religiøs og verdslig kunnskap - viktig for moderne samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_5_2: TextbookChapter = {
  id: 'historie-5-2',
  courseId: 'historie',
  chapterNumber: '5.2',
  title: 'Reformasjonen og religionskrigene',
  description: 'Kirkens splittelse og de religiøse konfliktene.',
  estimatedMinutes: 55,
  competenceGoals: ['religionens betydning for samfunn og makt'],
  content: [
    {
      id: 'historie-5-2-intro',
      type: 'text',
      content: `## Reformasjonen - kirkens splittelse

Reformasjonen var en religiøs omveltning på 1500-tallet som splittet den vestlige kristenheten. Den katolske kirken hadde i århundrer hatt monopol på kristendommen i Vest-Europa, men kritikken mot kirken hadde vokst.

Mange mente at kirken hadde blitt for opptatt av rikdom og makt. Paven levde som en fyrste, kirken eide enorme landområder, og geistlige hadde ofte mer interesse for politikk enn sjeleomsorg. Særlig kritisert var **avlatshandelen** - salg av tilgivelse for synder.`,
    },
    {
      id: 'historie-5-2-def-1',
      type: 'definition',
      title: 'Reformasjonen',
      content: `**Reformasjonen** var den religiøse omveltningen på 1500-tallet som splittet den vestlige kristenheten i katolikker og protestanter. Bevegelsen startet med Martin Luthers kritikk av den katolske kirken i 1517.`,
    },
    {
      id: 'historie-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var de viktigste kritikkpunktene mot den katolske kirken før reformasjonen?',
        solution: 'De viktigste kritikkpunktene mot kirken var: 1) Avlatshandelen - kirken solgte tilgivelse for synder mot betaling. 2) Kirkens rikdom og prakt - paven og kirkelige ledere levde i luksus. 3) Geistliges manglende fokus på religiøse plikter. 4) Kirken eide enorme landområder og hadde stor politisk makt. 5) Korrupsjon og simoni (salg av kirkelige embeter). 6) Mangel på bibelsk grunnlag for mange av kirkens praksiser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-2-text-2',
      type: 'text',
      content: `## Martin Luther og de 95 tesene

**Martin Luther** (1483-1546) var en tysk munk og teologiprofessor som ble reformasjonens ledende skikkelse. I 1517 skal han ha slått opp 95 teser (påstander) på kirkedøren i Wittenberg. Tesene var først og fremst en kritikk av avlatshandelen.

Luther utviklet nye teologiske prinsipper:
- **Sola scriptura** (Skriften alene): Bibelen er den eneste autoritet i trosspørsmål, ikke paven eller kirkemøter
- **Sola fide** (Troen alene): Mennesket blir frelst ved tro, ikke gjerninger
- **Sola gratia** (Nåden alene): Frelsen er en gave fra Gud, ikke noe man kan kjøpe

Takket være boktrykkerkunsten ble Luthers skrifter raskt spredt over hele Europa. Paven fordømte Luther som kjetter, men Luther nektet å trekke tilbake sine synspunkter.`,
    },
    {
      id: 'historie-5-2-def-2',
      type: 'definition',
      title: 'Protestantisme',
      content: `**Protestantisme** er fellesbetegnelsen på de kristne kirkene som oppsto som følge av reformasjonen. Navnet kommer fra "protest" - de protestantiske fyrstene som protesterte mot keiserens forsøk på å undertrykke den nye læren i 1529.`,
    },
    {
      id: 'historie-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar Luthers tre "sola"-prinsipper og hvordan disse brøt med katolsk lære.',
        solution: 'Luthers tre prinsipper: 1) Sola scriptura (Skriften alene): Kun Bibelen er autoritet i trosspørsmål. Dette brøt med katolsk lære som også anerkjente pavens og kirkemøtenes autoritet. 2) Sola fide (Troen alene): Mennesket frelses ved tro, ikke gjerninger. Katolikkene mente gode gjerninger også var nødvendige. 3) Sola gratia (Nåden alene): Frelsen er Guds gave, ikke noe man kan fortjene eller kjøpe. Dette utfordret avlatshandelen direkte. Samlet utfordret prinsippene kirkens rolle som mellommann mellom Gud og mennesket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-2-text-3',
      type: 'text',
      content: `## Reformasjonens spredning

Reformasjonen spredte seg raskt i Nord-Europa. Ulike retninger utviklet seg:

**Lutheranismen** ble dominerende i Tyskland og Skandinavia. I Danmark-Norge ble lutheranismen innført som statsreligion i 1536.

**Kalvinismen**, grunnlagt av Jean Calvin i Genève, la vekt på predestinasjon (forutbestemmelse) og streng moral. Kalvinismen spredte seg til Sveits, Nederland, Skottland og deler av Frankrike.

**Den anglikanske kirke** i England oppsto da kong Henrik VIII brøt med paven i 1534 fordi paven nektet ham skilsmisse.

Reformasjonen hadde også politiske årsaker. Mange fyrster så muligheten til å frigjøre seg fra pavens makt og overta kirkens rikdommer.`,
    },
    {
      id: 'historie-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre ulike protestantiske retninger og forklar kort hva som kjennetegnet hver av dem.',
        solution: '1) Lutheranismen: Grunnlagt av Martin Luther. Vektla Bibelen som eneste autoritet, frelse ved tro alene, og Guds nåde. Ble statsreligion i Skandinavia og deler av Tyskland. 2) Kalvinismen: Grunnlagt av Jean Calvin. Kjennetegnet av læren om predestinasjon (Gud har forutbestemt hvem som blir frelst), streng moral og kirketukt. Spredte seg til Sveits, Nederland og Skottland. 3) Anglikanismen: Oppsto i England da Henrik VIII brøt med paven. Beholdt mer av katolsk liturgi og struktur, men anerkjente kongen som kirkens overhode istedenfor paven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-2-text-4',
      type: 'text',
      content: `## Religionskrigene

Reformasjonen førte til over hundre år med religiøse konflikter i Europa. De viktigste var:

**Trettiårskrigen (1618-1648)** startet som en religionskonflikt i Det tysk-romerske riket, men utviklet seg til en europeisk storkrig. Krigen endte med **Westfalerfreden** i 1648, som etablerte prinsippet om at hver fyrste bestemte religionen i sitt territorium.

**De franske religionskrigene (1562-1598)** var en bitter konflikt mellom katolikker og hugenotter (franske kalvinister). Konflikten kulminerte med **Bartolomeusnattmassakren** i 1572, da tusenvis av hugenotter ble drept.

Religionskrigene viste at religiøs splittelse kunne føre til enorm ødeleggelse. Dette bidro til at tanken om religiøs toleranse gradvis vokste fram.`,
    },
    {
      id: 'historie-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva var Trettiårskrigen, og hvordan endte den?',
        solution: 'Trettiårskrigen (1618-1648) var en omfattende europeisk konflikt som startet som en religionskrig mellom katolikker og protestanter i Det tysk-romerske riket. Krigen utviklet seg etter hvert til en maktkamp mellom europeiske stormakter. Store deler av Sentral-Europa ble ødelagt, og millioner døde. Krigen endte med Westfalerfreden i 1648. Freden etablerte prinsippet "cuius regio, eius religio" - at hver fyrste bestemte religionen i sitt territorium. Freden regnes også som starten på det moderne statssystemet med suverene stater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft reformasjonens betydning for europeisk historie. Hvilke religiøse, politiske og kulturelle konsekvenser fikk den?',
        solution: 'Reformasjonen fikk vidtrekkende konsekvenser: Religiøse: 1) Kristenheten ble permanent splittet i katolikker og protestanter. 2) Religiøs mangfold ble en realitet i Europa. 3) Tanken om religiøs toleranse vokste gradvis fram. Politiske: 1) Fyrstene styrket sin makt på bekostning av paven. 2) Nasjonalkirker oppsto med kongen som overhode. 3) Religionskrigene omformet Europas politiske kart. Kulturelle: 1) Bibelen ble oversatt til folkespråkene, noe som styrket nasjonalspråkene. 2) Leseferdigheten økte fordi protestantene la vekt på at alle skulle kunne lese Bibelen. 3) Utdanning ble viktigere. Reformasjonen var dermed en avgjørende faktor i overgangen fra middelalder til moderne tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_5_3: TextbookChapter = {
  id: 'historie-5-3',
  courseId: 'historie',
  chapterNumber: '5.3',
  title: 'Oppdagelsesreisene og tidlig kolonialisme',
  description: 'Europeernes ekspansjon og møte med nye verdener.',
  estimatedMinutes: 55,
  competenceGoals: ['kolonimakter og konsekvenser'],
  content: [
    {
      id: 'historie-5-3-intro',
      type: 'text',
      content: `## Oppdagelsesreisene - Europa møter verden

På slutten av 1400-tallet begynte europeiske sjøfarere å utforske ukjente havområder. Denne perioden kalles ofte **oppdagelsenes tidsalder**. Portugal og Spania ledet an i denne ekspansjonen.

Årsakene til oppdagelsesreisene var sammensatte:
- Ønsket om å finne sjøveien til India og krydderøyene i Asia
- Osmannernes erobring av Konstantinopel (1453) gjorde landveien til Asia vanskeligere
- Ny teknologi som kompasset og bedre skip (karavellen)
- Ønske om å spre kristendommen
- Eventyrlyst og søken etter rikdom`,
    },
    {
      id: 'historie-5-3-def-1',
      type: 'definition',
      title: 'Oppdagelsesreisene',
      content: `**Oppdagelsesreisene** er betegnelsen på de europeiske sjøreisene fra ca. 1450-1600 som førte til at europeerne kartla og koloniserte store deler av verden. Begrepet er omdiskutert fordi områdene allerede var "oppdaget" av folkene som bodde der.`,
    },
    {
      id: 'historie-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn minst fire årsaker til at europeerne begynte oppdagelsesreisene på slutten av 1400-tallet.',
        solution: 'Årsaker til oppdagelsesreisene: 1) Ønsket om å finne sjøveien til India og krydderøyene for å handle direkte med Asia. 2) Osmannernes erobring av Konstantinopel i 1453 gjorde landveien til Asia vanskeligere og dyrere. 3) Ny teknologi som kompasset, astrolabiet og bedre skip (karavellen) gjorde lange sjøreiser mulig. 4) Ønske om å spre kristendommen til nye folkeslag. 5) Eventyrlyst og søken etter rikdom, spesielt gull. 6) Konkurranse mellom europeiske stater om makt og prestisje.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-3-text-2',
      type: 'text',
      content: `## De portugisiske oppdagerne

Portugal var først ute med systematisk utforskning. Prins Henrik Sjøfareren etablerte en sjøfartsskole og finansierte ekspedisjoner langs Afrikas kyst.

**Bartolomeu Dias** rundet Kapp det gode håp i 1488 og beviste at det var mulig å seile rundt Afrika.

**Vasco da Gama** nådde India i 1498 etter å ha seilt rundt Afrika. Dette åpnet sjøveien til Asia og la grunnlaget for det portugisiske handelsimperiet.

Portugiserne etablerte handelsposter langs Afrikas kyst og i Asia, blant annet i Goa (India), Malakka og Macao (Kina).`,
    },
    {
      id: 'historie-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar Portugals rolle i oppdagelsesreisene. Hvilke viktige ekspedisjoner gjennomførte portugiserne?',
        solution: 'Portugal var pioneren i oppdagelsesreisene. Prins Henrik Sjøfareren finansierte systematisk utforskning av Afrikas kyst fra 1415. Viktige ekspedisjoner: 1) Bartolomeu Dias rundet Kapp det gode håp i 1488 og beviste at Afrika kunne omseiles. 2) Vasco da Gama nådde India i 1498 og åpnet sjøveien til Asia. Portugiserne etablerte et handelsimperium med handelsposter langs Afrikas kyst og i Asia (Goa, Malakka, Macao). De dominerte krydderhandelen og ble en av Europas rikeste nasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-3-text-3',
      type: 'text',
      content: `## Columbus og "oppdagelsen" av Amerika

**Kristoffer Columbus** (1451-1506) var en italiensk sjøfarer i spansk tjeneste. Han trodde han kunne nå Asia ved å seile vestover. I 1492 fikk han støtte fra de spanske monarkene Ferdinand og Isabella.

12. oktober 1492 nådde Columbus en øy i Karibia som han kalte San Salvador. Han trodde han hadde nådd Asia og kalte urbefolkningen "indianere". Columbus foretok fire reiser til Amerika, men innså aldri at han hadde funnet et nytt kontinent.

Det var **Amerigo Vespucci** som forsto at dette var et nytt kontinent. Kontinentet ble derfor oppkalt etter ham - Amerika.`,
    },
    {
      id: 'historie-5-3-example-1',
      type: 'example',
      title: 'Det columbianske byttet',
      content: `**Det columbianske byttet** beskriver utvekslingen av planter, dyr, sykdommer og mennesker mellom den "gamle" og "nye" verden etter 1492.

**Fra Amerika til Europa:**
- Poteter, mais, tomater, kakao, tobakk, chili
- Disse nye matvarene endret europeisk kosthold dramatisk

**Fra Europa til Amerika:**
- Hvete, ris, sukker, hester, kuer, griser
- Sykdommer som kopper, meslinger og influensa

Sykdommene hadde katastrofale konsekvenser. Urbefolkningen hadde ingen immunitet, og millioner døde. Noen forskere anslår at 90% av urbefolkningen i Amerika døde av europeiske sykdommer.`,
    },
    {
      id: 'historie-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var "det columbianske byttet", og hvilke konsekvenser fikk det for både Europa og Amerika?',
        solution: 'Det columbianske byttet var utvekslingen av planter, dyr, sykdommer og mennesker mellom Europa og Amerika etter 1492. Konsekvenser for Europa: Nye matvarer som poteter, mais og tomater revolusjonerte kostholdet og bidro til befolkningsvekst. Tobakk og kakao ble populære nytelsesmidler. Konsekvenser for Amerika: Europeiske sykdommer som kopper og meslinger drepte opptil 90% av urbefolkningen som manglet immunitet. Nye husdyr som hester endret urbefolkningens livsførsel. Europeiske vekster og jordbruksmetoder ble innført. Slaveri ble innført for å skaffe arbeidskraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-3-text-4',
      type: 'text',
      content: `## Kolonialisme og konkvistadorene

Etter Columbus fulgte **konkvistadorene** - spanske erobrere som la under seg store områder i Amerika.

**Hernán Cortés** erobret Aztekerriket i Mexico (1519-1521). Med noen hundre soldater, allierte fra lokale stammer som var undertrykket av aztekerne, og sykdommer som spredte seg, klarte han å beseire et rike med millioner av innbyggere.

**Francisco Pizarro** erobret Inkariket i Peru (1532-1533) med lignende metoder.

Erobringene førte til at urbefolkningen ble underkastet, tvunget til arbeid i gruver og på plantasjer, og forsøkt omvendt til kristendommen. Sølv og gull strømmet til Spania, som ble Europas mektigste stat.`,
    },
    {
      id: 'historie-5-3-def-2',
      type: 'definition',
      title: 'Kolonialisme',
      content: `**Kolonialisme** er et system der en stat etablerer politisk og økonomisk kontroll over et område utenfor sine grenser. Kolonimakten utnytter koloniens ressurser og arbeidskraft til egen fordel.`,
    },
    {
      id: 'historie-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan klarte små grupper av spanske konkvistadorer å erobre store riker som Azteker- og Inkariket?',
        solution: 'Konkvistadorene kunne erobre store riker på grunn av flere faktorer: 1) Teknologisk overlegenhet: Stålvåpen, rustninger og hester ga fordeler i kamp. 2) Sykdommer: Kopper og andre sykdommer spredte seg foran og under erobringene og drepte store deler av urbefolkningen. 3) Allianser: Cortés allierte seg med stammer som var undertrykt av aztekerne. 4) Religiøs og politisk struktur: Azteker- og Inkarikene var sentraliserte - da lederne ble fanget eller drept, kollapset motstanden. 5) Psykologisk sjokk: Hester og skytevåpen skapte frykt. 6) Intern splittelse i rikene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-5-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft konsekvensene av oppdagelsesreisene og kolonialismen for ulike grupper: urbefolkningen i Amerika, europeerne, og verden som helhet.',
        solution: 'Konsekvenser for ulike grupper: For urbefolkningen: 1) Demografisk katastrofe - opptil 90% døde av sykdommer de manglet immunitet mot. 2) Tap av politisk selvstyre og tradisjonelle samfunnsstrukturer. 3) Tvangsarbeid og kulturell undertrykkelse. For europeerne: 1) Nye matvarer (poteter, mais) bidro til befolkningsvekst. 2) Rikdom fra koloniene styrket europeiske stater. 3) Ny kunnskap om verden utfordret etablerte forestillinger. For verden: 1) Begynnelsen på global sammenheng og utveksling. 2) Spredning av teknologi, ideer og organisasjonsformer. 3) Grunnlag for senere globalisering. Perspektiv: Begrepet "oppdagelse" reflekterer et europeisk perspektiv - Amerika var allerede hjemsted for millioner av mennesker med egne sivilisasjoner. Historiske hendelser ser forskjellige ut avhengig av hvem som forteller historien. Et fullstendig bilde må inkludere ulike perspektiver og anerkjenne både de enorme lidelsene og de langvarige konsekvensene for verdenshistorien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_5_4: TextbookChapter = {
  id: 'historie-5-4',
  courseId: 'historie',
  chapterNumber: '5.4',
  title: 'Makt og samfunn i tidlig nytid',
  description: 'Statsdannelse og enevelde i Europa.',
  estimatedMinutes: 50,
  competenceGoals: ['makt fra middelalderen til tidlig nytid'],
  content: [
    {
      id: 'historie-5-4-intro',
      type: 'text',
      content: `## Fra føydalisme til sentraliserte stater

I middelalderen var makten i Europa spredt mellom konger, adel og kirke. Kongens makt var begrenset av adelen, som kontrollerte sine len med stor grad av selvstendighet. Dette systemet kalles **føydalisme**.

Fra 1500-tallet skjedde en gradvis maktkonsentrasjon. Kongene bygde opp sterkere statsmakt med profesjonelle byråkratier, stående hærer og bedre skattesystemer. Denne utviklingen kulminerte i **eneveldet** på 1600- og 1700-tallet.`,
    },
    {
      id: 'historie-5-4-def-1',
      type: 'definition',
      title: 'Enevelde',
      content: `**Enevelde** (absolutisme) er en styreform der kongen har uinnskrenket makt. Den eneveldige kongen var ikke bundet av lover eller stender, og mente å ha sin makt direkte fra Gud (guddommelig rett). Eneveldet var dominerende i Europa på 1600- og 1700-tallet.`,
    },
    {
      id: 'historie-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-5-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva enevelde var, og hvordan denne styreformen skilte seg fra middelalderens føydalisme.',
        solution: 'Enevelde var en styreform der kongen hadde uinnskrenket makt og mente å ha sin makt direkte fra Gud. Forskjeller fra føydalismen: I føydalismen var makten spredt mellom konge, adel og kirke. Adelen hadde stor selvstendighet i sine len og kongen var avhengig av deres støtte. I eneveldet samlet kongen all makt hos seg selv. Han styrte gjennom et profesjonelt byråkrati i stedet for gjennom lojale adelsmenn. Stående hærer erstattet adelens ridderhærer. Kongen krevde inn skatter direkte istedenfor å være avhengig av adelens bidrag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-4-text-2',
      type: 'text',
      content: `## Ludvig XIV - Solkongen

**Ludvig XIV** av Frankrike (regjerte 1643-1715) er det fremste eksemplet på en eneveldig monark. Han skal ha sagt "Staten, det er meg" (*L'État, c'est moi*).

Ludvig bygde det praktfulle slottet Versailles utenfor Paris, der hele hoffet var samlet. Adelen ble holdt ved hoffet og opptatt med seremonier og intriger, slik at de ikke kunne true kongens makt.

Ludvig førte en aktiv utenrikspolitikk med mange kriger for å utvide Frankrikes grenser. Han fremmet også fransk kultur og industri (merkantilisme) og trakk inn religiøse minoriteter (hugenottene).`,
    },
    {
      id: 'historie-5-4-example-1',
      type: 'example',
      title: 'Versailles - maktens teater',
      content: `Slottet Versailles var ikke bare et praktfullt palass, men et politisk instrument. Ved å samle adelen ved hoffet oppnådde Ludvig XIV flere ting:

1. **Kontroll**: Han kunne overvåke adelen og hindre at de samlet makt i provinsene
2. **Avhengighet**: Adelen konkurrerte om kongens gunst og stillinger ved hoffet
3. **Forbruk**: Livet ved hoffet var dyrt - adelen brukte penger på prakt istedenfor på private hærer
4. **Prestisje**: Slottets prakt demonstrerte kongens makt for hele Europa

Hoffets daglige liv var strengt ritualisert. Selv kongens morgentoalett var en seremoni der utvalgte adelsmenn fikk delta.`,
    },
    {
      id: 'historie-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan brukte Ludvig XIV Versailles som et politisk maktmiddel?',
        solution: 'Ludvig XIV brukte Versailles strategisk for å styrke sin makt: 1) Adelen ble samlet ved hoffet der kongen kunne overvåke dem og hindre at de bygde opp makt i provinsene. 2) Adelen konkurrerte om kongens gunst og stillinger, noe som gjorde dem avhengige av kongen. 3) Det dyre hofflivet tappet adelen for ressurser som ellers kunne brukes på private hærer. 4) Slottets enorme prakt demonstrerte kongens makt og Frankrikes storhet for hele Europa. 5) Det ritualiserte hofflivet holdt adelen opptatt med seremonier og intriger fremfor politikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-4-text-3',
      type: 'text',
      content: `## Enevelde i Danmark-Norge

I 1660 ble eneveldet innført i Danmark-Norge. Dette skjedde etter en tapt krig mot Sverige, som hadde tømt statskassen. Kong Frederik III utnyttet situasjonen og allierte seg med borgerskapet mot adelen.

**Kongeloven av 1665** var Europas eneste nedskrevne eneveldig forfatning. Den ga kongen nærmest guddommelig makt - han skulle bare stå til ansvar overfor Gud.

Eneveldet i Danmark-Norge varte til 1814 i Norge og 1849 i Danmark. I denne perioden ble statsstyret modernisert med sentralt byråkrati, men den vanlige befolkningen hadde ingen politisk innflytelse.`,
    },
    {
      id: 'historie-5-4-def-2',
      type: 'definition',
      title: 'Stendersamfunnet',
      content: `**Stendersamfunnet** var den sosiale organiseringen i tidlig nytid. Samfunnet var delt i stender med ulike rettigheter og plikter: adelen (første stand), geistligheten (andre stand), og borgere og bønder (tredje stand). Man ble som regel født inn i sin stand.`,
    },
    {
      id: 'historie-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-5-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan ble eneveldet innført i Danmark-Norge, og hva kjennetegnet styreformen?',
        solution: 'Eneveldet ble innført i 1660 etter en tapt krig mot Sverige som hadde tømt statskassen. Frederik III utnyttet situasjonen ved å alliere seg med borgerskapet mot adelen. Kongeloven av 1665 ga kongen uinnskrenket makt - han skulle bare stå til ansvar overfor Gud. Kjennetegn ved styreformen: 1) All makt samlet hos kongen. 2) Sentralisert byråkrati styrte på kongens vegne. 3) Adelen mistet sine politiske privilegier. 4) Stående hær under kongens kontroll. 5) Ingen politisk innflytelse for vanlige folk. 6) Varte til 1814 i Norge og 1849 i Danmark.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-5-4-text-4',
      type: 'text',
      content: `## Merkantilisme - statens økonomiske politikk

De eneveldige statene førte en aktiv økonomisk politikk kalt **merkantilisme**. Målet var å gjøre staten rik og mektig.

Merkantilistene mente at verdens rikdom var begrenset, og at statene konkurrerte om den. Et land ble rikt ved å eksportere mer enn det importerte, slik at gull og sølv strømmet inn.

**Virkemidler i merkantilismen:**
- Toll på import for å beskytte egen industri
- Støtte til etablering av manufakturer
- Kolonier som leverte råvarer og kjøpte ferdigvarer
- Handelsmonopoler og privilegerte handelskompnaier
- Forbud mot utførsel av gull og sølv`,
    },
    {
      id: 'historie-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva var merkantilisme, og hvilke virkemidler brukte de eneveldige statene i sin økonomiske politikk?',
        solution: 'Merkantilisme var den økonomiske politikken i de eneveldige statene. Målet var å gjøre staten rik og mektig ved å eksportere mer enn man importerte. Virkemidler: 1) Toll på importvarer for å beskytte egen industri mot konkurranse. 2) Støtte til etablering av manufakturer (tidlige fabrikker). 3) Kolonier som skulle levere råvarer billig og kjøpe dyre ferdigvarer fra moderlandet. 4) Handelsmonopoler og privilegerte handelskompnaier (som Dansk Ostindisk Kompani). 5) Forbud mot utførsel av gull og sølv. 6) Kontroll over utenrikshandelen gjennom navigasjonslover.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-5-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved eneveldet som styreform. Hvorfor tror du denne styreformen til slutt ble erstattet?',
        solution: 'Fordeler med eneveldet: 1) Effektiv styring - kongen kunne handle raskt uten å måtte forhandle med stender. 2) Modernisering - profesjonelt byråkrati og rettsvesen ble bygget opp. 3) Stabilitet - tydelig maktstruktur kunne hindre borgerkrig og adelskonflikter. 4) Nasjonsbygging - kongen kunne samle territorier og skape mer enhetlige stater. Ulemper: 1) Ingen folkesuverenitet eller medbestemmelse. 2) Maktmisbruk var mulig uten kontrollmekanismer. 3) Urettferdig stendersamfunn ble opprettholdt. 4) Dyre kriger og hoffhold tynget befolkningen med skatter. Eneveldet ble erstattet fordi nye ideer om folkesuverenitet og menneskerettigheter vokste fram i opplysningstiden, og revolusjoner viste at folket kunne utfordre kongemakten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Opplysningstid og revolusjoner
// ============================================================================

export const CHAPTER_HISTORIE_6_1: TextbookChapter = {
  id: 'historie-6-1',
  courseId: 'historie',
  chapterNumber: '6.1',
  title: 'Opplysningstiden og nye ideer',
  description: 'Fornuftens tidsalder og de nye politiske ideene.',
  estimatedMinutes: 55,
  competenceGoals: ['ideologier bak politiske omveltninger'],
  content: [
    {
      id: 'historie-6-1-intro',
      type: 'text',
      content: `## Opplysningstiden - fornuftens tidsalder

**Opplysningstiden** (ca. 1700-1800) var en intellektuell bevegelse som satte fornuften i sentrum. Opplysningsfilosofene mente at menneskets fornuft kunne brukes til å forbedre samfunnet, bekjempe uvitenhet og overtro, og skape fremskritt.

Bevegelsen bygde videre på den vitenskapelige revolusjonen på 1600-tallet, da tenkere som Isaac Newton hadde vist at naturen fulgte lovmessigheter som kunne oppdages gjennom observasjon og fornuft. Opplysningsfilosofene spurte: Kunne ikke de samme metodene brukes til å forstå og forbedre samfunnet?`,
    },
    {
      id: 'historie-6-1-def-1',
      type: 'definition',
      title: 'Opplysningstiden',
      content: `**Opplysningstiden** var en intellektuell bevegelse på 1700-tallet som vektla fornuft, vitenskap og fremskrittstro. Filosofene kritiserte tradisjonelle autoriteter som kirken og eneveldet, og utviklet nye ideer om menneskerettigheter, demokrati og toleranse.`,
    },
    {
      id: 'historie-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var opplysningstidens viktigste kjennetegn, og hva bygde bevegelsen videre på?',
        solution: 'Opplysningstidens viktigste kjennetegn: 1) Tro på fornuften som redskap for å forstå verden og forbedre samfunnet. 2) Kritikk av tradisjonelle autoriteter som kirken og eneveldet. 3) Fremskrittstro - troen på at samfunnet kunne forbedres gjennom kunnskap. 4) Vekt på toleranse og menneskerettigheter. 5) Vektlegging av utdanning og kunnskap for alle. Bevegelsen bygde videre på den vitenskapelige revolusjonen på 1600-tallet, der Newton og andre hadde vist at naturen fulgte lovmessigheter som kunne oppdages gjennom fornuft og observasjon. Opplysningsfilosofene ville bruke samme metode på samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-1-text-2',
      type: 'text',
      content: `## De store opplysningsfilosofene

**John Locke** (1632-1704) var en engelsk filosof som regnes som opplysningstidens far. Han mente at alle mennesker har **naturlige rettigheter** til liv, frihet og eiendom. Hvis en regjering krenker disse rettighetene, har folket rett til å gjøre opprør. Locke inspirerte både den amerikanske og franske revolusjonen.

**Montesquieu** (1689-1755) var en fransk filosof som utviklet ideen om **maktfordeling**. Han mente at makten i en stat burde deles mellom lovgivende, utøvende og dømmende makt for å hindre tyranni. Denne ideen ble grunnleggende for moderne demokratier.

**Voltaire** (1694-1778) var opplysningstidens mest berømte forfatter. Han kjempet for ytringsfrihet og religiøs toleranse, og kritiserte kirken og overtro skarpt.`,
    },
    {
      id: 'historie-6-1-def-2',
      type: 'definition',
      title: 'Maktfordelingsprinsippet',
      content: `**Maktfordelingsprinsippet** er ideen om at statsmakten bør deles i tre uavhengige grener: den lovgivende makt (parlamentet), den utøvende makt (regjeringen) og den dømmende makt (domstolene). Prinsippet ble utviklet av Montesquieu for å hindre maktmisbruk.`,
    },
    {
      id: 'historie-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar Montesquieus maktfordelingsprinsipp og hvorfor han mente dette var viktig.',
        solution: 'Montesquieus maktfordelingsprinsipp innebærer at statsmakten deles i tre uavhengige grener: 1) Den lovgivende makt (parlamentet) lager lovene. 2) Den utøvende makt (regjeringen/kongen) håndhever lovene. 3) Den dømmende makt (domstolene) dømmer etter lovene. Montesquieu mente dette var viktig fordi: Når én person eller gruppe har all makt, er tyranni uunngåelig. Ved å dele makten kan de tre grenene kontrollere hverandre ("checks and balances"). Ingen kan misbruke makten fordi de andre grenene vil stoppe det. Prinsippet er grunnleggende i moderne demokratier og den norske Grunnloven.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-1-text-3',
      type: 'text',
      content: `## Jean-Jacques Rousseau og samfunnskontrakten

**Jean-Jacques Rousseau** (1712-1778) var en sveitsisk-fransk filosof med radikale ideer. Hans mest kjente verk er "Samfunnskontrakten" (1762).

Rousseau mente at mennesket fra naturens side er godt, men at samfunnet korrumperer det. Han utviklet ideen om **folkesuverenitet** - at all makt utgår fra folket. Folket inngår en "samfunnskontrakt" der de gir opp noe frihet til gjengjeld for beskyttelse og orden.

For Rousseau var ikke demokrati bare et middel, men et mål i seg selv. Bare ved å delta i politiske beslutninger kan borgerne være virkelig frie. Hans ideer inspirerte den franske revolusjonen, men ble også kritisert for å kunne rettferdiggjøre tvang i "allmennviljens" navn.`,
    },
    {
      id: 'historie-6-1-example-1',
      type: 'example',
      title: 'Encyklopedien - kunnskap for alle',
      content: `**Encyklopedien** (1751-1772) var opplysningstidens mest ambisiøse prosjekt. Denis Diderot og Jean d'Alembert samlet kunnskap om vitenskap, kunst, håndverk og filosofi i 28 bind.

Verket var mer enn et oppslagsverk - det var et angrep på uvitenhet og overtro. Artiklene kritiserte ofte kirken og tradisjonell autoritet, om enn forsiktig for å unngå sensur.

Encyklopedien symboliserte opplysningstidens tro på at kunnskap kunne frigjøre mennesket. Ved å spre kunnskap til alle kunne man bekjempe fordommer og fremme fremskritt.

Over 4000 personer abonnerte på verket - en enorm suksess for tiden.`,
    },
    {
      id: 'historie-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var Rousseaus idé om folkesuverenitet og samfunnskontrakten?',
        solution: 'Rousseaus idé om folkesuverenitet innebærer at all legitim makt utgår fra folket, ikke fra Gud eller tradisjon. Samfunnskontrakten forklarer hvordan dette fungerer: I naturtilstanden var mennesket fritt, men utsatt for fare. Mennesker inngikk derfor en kontrakt der de ga opp noe av sin frihet til fellesskapet. Til gjengjeld fikk de beskyttelse og orden. Makten i samfunnet tilhører dermed folket kollektivt - "allmennviljen". En regjering som ikke tjener folkets vilje, er illegitim. For Rousseau var politisk deltakelse nødvendig for sann frihet. Disse ideene inspirerte den franske revolusjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-1-text-4',
      type: 'text',
      content: `## Opplysningstidens betydning

Opplysningstidens ideer fikk enorm politisk betydning. De inspirerte:
- Den amerikanske uavhengighetserklæringen (1776)
- Den franske revolusjonen (1789)
- Grunnlover over hele verden, inkludert den norske (1814)

**Menneskerettighetene** har røtter i opplysningstidens naturrettstenkning. Ideen om at alle mennesker har rettigheter bare fordi de er mennesker, kom fra filosofer som Locke.

Opplysningstidens tro på fornuft og fremskritt preger fortsatt moderne samfunn. Ideene om demokrati, ytringsfrihet, religiøs toleranse og utdanning for alle stammer fra denne perioden.`,
    },
    {
      id: 'historie-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gi eksempler på hvordan opplysningstidens ideer fikk praktisk politisk betydning.',
        solution: 'Opplysningstidens ideer fikk praktisk betydning på flere områder: 1) Den amerikanske uavhengighetserklæringen (1776) bygde på Lockes ideer om naturlige rettigheter. 2) Den franske revolusjonens erklæring om menneske- og borgerrettighetene (1789) var direkte inspirert av opplysningsfilosofene. 3) Maktfordelingsprinsippet ble innført i den amerikanske grunnloven og senere i mange andre land. 4) Den norske Grunnloven av 1814 bygde på opplysningstidens ideer om folkesuverenitet og maktfordeling. 5) Avskaffelse av tortur og mildere straffemetoder ble innført flere steder. 6) Religiøs toleranse ble gradvis innført.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan opplysningstidens ideer fortsatt preger dagens samfunn. Hvilke av ideene mener du er viktigst?',
        solution: 'Opplysningstidens ideer preger dagens samfunn på mange måter: 1) Demokrati og folkesuverenitet: De fleste moderne stater bygger på ideen om at makten utgår fra folket. 2) Maktfordeling: Moderne demokratier har delt makten mellom lovgivende, utøvende og dømmende myndighet. 3) Menneskerettigheter: FNs menneskerettighetserklæring bygger på opplysningstidens naturrettstenkning. 4) Ytringsfrihet og toleranse: Voltaires kamp for ytringsfrihet er nedfelt i moderne grunnlover. 5) Utdanning for alle: Opplysningstidens tro på kunnskap førte til allmueskole og senere obligatorisk skolegang. 6) Vitenskap og fremskrittstro: Troen på at fornuft og vitenskap kan forbedre samfunnet. Hvilke ideer som er viktigst, kan diskuteres, men menneskerettighetene og demokratiet har kanskje hatt størst betydning for hvordan vi organiserer samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_6_2: TextbookChapter = {
  id: 'historie-6-2',
  courseId: 'historie',
  chapterNumber: '6.2',
  title: 'Den amerikanske revolusjonen',
  description: 'Uavhengighetserklæringen og den nye republikken.',
  estimatedMinutes: 50,
  competenceGoals: ['ideologier bak politiske omveltninger'],
  content: [
    {
      id: 'historie-6-2-intro',
      type: 'text',
      content: `## De britiske koloniene i Nord-Amerika

På 1700-tallet hadde Storbritannia 13 kolonier langs østkysten av Nord-Amerika. Koloniene var velstående og hadde betydelig selvstyre, men var underlagt den britiske kronen.

Etter sjuårskrigen (1756-1763) hadde Storbritannia store gjeldsproblemer. Regjeringen mente kolonistene burde bidra til å betale for forsvaret av koloniene. Nye skatter og avgifter ble innført - uten at kolonistene var representert i det britiske parlamentet.`,
    },
    {
      id: 'historie-6-2-def-1',
      type: 'definition',
      title: 'No taxation without representation',
      content: `**"No taxation without representation"** (ingen skatt uten representasjon) var kolonistenes slagord. De mente det var urettferdig å måtte betale skatter til en regjering der de ikke var representert. Prinsippet bygde på engelsk rettstradisjon og ble et hovedargument for uavhengighet.`,
    },
    {
      id: 'historie-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva slagordet "No taxation without representation" betydde, og hvorfor det ble viktig i konflikten mellom koloniene og Storbritannia.',
        solution: 'Slagordet betydde at kolonistene ikke ville betale skatter til en regjering der de ikke hadde representanter. Det bygde på engelsk rettstradisjon om at skatter måtte godkjennes av folkets representanter. Slagordet ble viktig fordi: 1) Storbritannia innførte nye skatter etter sjuårskrigen. 2) Kolonistene hadde ingen representanter i det britiske parlamentet. 3) Det ble et samlende argument som satte konflikten i et prinsipielt lys. 4) Det appellerte til opplysningstidens ideer om folkesuverenitet. 5) Det viste at konflikten handlet om grunnleggende rettigheter, ikke bare økonomi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-2-text-2',
      type: 'text',
      content: `## Konflikten tilspisser seg

Konflikten eskalerte gjennom flere hendelser:

**Boston Tea Party (1773)**: Kolonister, forkledd som indianere, kastet te fra britiske skip i Boston havn som protest mot teavgiften. Britene svarte med harde straffer.

**Kontinentalkongressen (1774)**: Representanter fra koloniene møttes for å koordinere motstanden. De vedtok å boikotte britiske varer.

**Skuddene ved Lexington og Concord (april 1775)**: De første kampene mellom britiske soldater og kolonistmilitser markerte starten på uavhengighetskrigen.`,
    },
    {
      id: 'historie-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hvordan konflikten mellom koloniene og Storbritannia eskalerte fra protest til krig.',
        solution: 'Konflikten eskalerte gradvis: 1) Storbritannia innførte nye skatter som stempelskatten, som førte til protester og boikott. 2) Boston Tea Party (1773) - kolonister kastet britisk te i sjøen som protest mot teavgiften. 3) Storbritannia svarte med "The Intolerable Acts" - strenge straffetiltak mot Massachusetts. 4) Kontinentalkongressen samlet representanter fra koloniene for å koordinere motstand (1774). 5) Britene prøvde å beslaglegge kolonistenes våpenlagre. 6) Skuddene ved Lexington og Concord (april 1775) markerte krigens utbrudd. Eskaleringen skyldtes at begge sider ble mer kompromissløse - kolonistene krevde rettigheter, britene ville vise styrke.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-2-text-3',
      type: 'text',
      content: `## Uavhengighetserklæringen 4. juli 1776

**Thomas Jefferson** skrev utkastet til uavhengighetserklæringen, som ble vedtatt av Kontinentalkongressen 4. juli 1776. Erklæringen er et av historiens viktigste politiske dokumenter.

Erklæringen bygde direkte på opplysningstidens ideer, særlig John Lockes filosofi:

*"Vi holder disse sannhetene for selvinnlysende, at alle mennesker er skapt like, at de av sin skaper er utstyrt med visse umistelige rettigheter, at blant disse er liv, frihet og streben etter lykke."*

Erklæringen argumenterte for at regjeringens makt kommer fra folkets samtykke, og at folket har rett til å avsette en tyrannisk regjering.`,
    },
    {
      id: 'historie-6-2-example-1',
      type: 'example',
      title: 'Uavhengighetserklæringens ideologiske grunnlag',
      content: `Uavhengighetserklæringen kombinerte flere ideer fra opplysningstiden:

**Fra John Locke:**
- Naturlige rettigheter til liv, frihet og eiendom (Jefferson endret "eiendom" til "streben etter lykke")
- Samfunnskontrakten: Regjeringen får sin makt fra folkets samtykke
- Retten til opprør mot tyranni

**Fra Montesquieu:**
- Ideen om at makt må begrenses gjennom lover

**Praktisk argumentasjon:**
- En lang liste over kong Georges overgrep mot koloniene
- Dokumentasjon av forsøkene på fredelig løsning

Erklæringen var både et filosofisk dokument og et krigserklæring - en begrunnelse for revolusjonen.`,
    },
    {
      id: 'historie-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke opplysningsideer kommer til uttrykk i den amerikanske uavhengighetserklæringen?',
        solution: 'Uavhengighetserklæringen uttrykker flere opplysningsideer: 1) Naturlige rettigheter (fra Locke): Alle mennesker er skapt like og har umistelige rettigheter til liv, frihet og streben etter lykke. 2) Folkesuverenitet: Regjeringens makt kommer fra folkets samtykke, ikke fra Gud eller tradisjon. 3) Samfunnskontrakten: Folket og regjeringen har en gjensidig avtale. 4) Retten til opprør: Hvis regjeringen krenker folkets rettigheter, har folket rett til å avsette den. 5) Rasjonell argumentasjon: Erklæringen bruker logisk argumentasjon for å begrunne uavhengigheten. Erklæringen viser hvordan opplysningsfilosofien ble omsatt til praktisk politikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-2-text-4',
      type: 'text',
      content: `## Krigen og den nye republikken

Uavhengighetskrigen (1775-1783) var hard og langvarig. **George Washington** ledet den amerikanske hæren. Frankrike støttet kolonistene med tropper, våpen og penger - dels for å svekke sin gamle rival Storbritannia.

I 1783 anerkjente Storbritannia USAs uavhengighet i **Parisfreden**.

**Den amerikanske grunnloven** ble vedtatt i 1787. Den etablerte:
- En føderal republikk med maktfordeling mellom statene og sentralregjeringen
- Maktfordelingsprinsippet: Kongressen (lovgivende), presidenten (utøvende), høyesterett (dømmende)
- Et system med "checks and balances" der de tre maktene kontrollerer hverandre

**Bill of Rights** (1791) sikret grunnleggende rettigheter som ytringsfrihet, religionsfrihet og retten til rettferdig rettergang.`,
    },
    {
      id: 'historie-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan ble opplysningstidens ideer omsatt til praksis i den amerikanske grunnloven?',
        solution: 'Den amerikanske grunnloven omsatte opplysningsideene til praksis: 1) Maktfordelingsprinsippet (fra Montesquieu): Makten ble delt mellom Kongressen (lovgivende), presidenten (utøvende) og domstolene (dømmende). 2) Checks and balances: De tre maktene kontrollerer hverandre for å hindre maktmisbruk. 3) Folkesuverenitet: "We the People" - makten utgår fra folket, ikke fra Gud eller tradisjon. 4) Republikansk styreform: Ingen konge, men valgte ledere. 5) Føderal struktur: Maktfordeling mellom delstatene og sentralregjeringen. 6) Bill of Rights sikret individuelle rettigheter som ytringsfrihet og religionsfrihet (inspirert av Locke og Voltaire).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft den amerikanske revolusjonens betydning for demokratiets utvikling i verden. Hva var revolusjonens styrker og begrensninger?',
        solution: 'Betydning for demokratiets utvikling: 1) Første moderne nasjon bygget på opplysningstidens ideer. 2) Viste at det var mulig å avsette en monark og etablere en republikk. 3) Grunnloven og Bill of Rights ble modell for andre land. 4) Inspirerte den franske revolusjonen og senere frigjøringsbevegelser. Styrker: Etablerte maktfordelingsprinsippet og rettighetsbeskyttelse i praksis. Skapte en stabil republikk som har vart i over 200 år. Begrensninger: 1) Slaveriet ble ikke avskaffet - "alle mennesker er skapt like" gjaldt ikke slaver. 2) Kvinner fikk ikke stemmerett. 3) Urbefolkningen ble ikke inkludert. 4) I praksis var det hvite, eiendomsbesittende menn som hadde politisk makt. Revolusjonen var et viktig skritt, men "frihet og likhet" ble bare delvis realisert.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_6_3: TextbookChapter = {
  id: 'historie-6-3',
  courseId: 'historie',
  chapterNumber: '6.3',
  title: 'Den franske revolusjonen',
  description: 'Revolusjonen som endret Europa.',
  estimatedMinutes: 55,
  competenceGoals: ['ideologier bak politiske omveltninger'],
  content: [
    {
      id: 'historie-6-3-intro',
      type: 'text',
      content: `## Frankrike før revolusjonen

Frankrike på 1780-tallet var Europas mektigste stat, men preget av dyp krise. Samfunnet var delt i tre stender:

- **Første stand**: Geistligheten (ca. 100 000) - betalte ikke skatt
- **Andre stand**: Adelen (ca. 400 000) - betalte ikke skatt
- **Tredje stand**: Alle andre (ca. 26 millioner) - bar hele skattebyrden

Staten var nærmest bankerott etter kostbare kriger. Kong **Ludvig XVI** var svak og ubesluttsom. Hoffet ved Versailles levde i luksus mens folket sultet. Dårlige avlinger i 1788 førte til matmangel og høye brødpriser.`,
    },
    {
      id: 'historie-6-3-def-1',
      type: 'definition',
      title: 'Stenderforsamlingen',
      content: `**Stenderforsamlingen** (États généraux) var den franske riksforsamlingen der de tre stendene møttes. Den hadde ikke vært innkalt siden 1614. I 1789 innkalte Ludvig XVI stenderforsamlingen for å løse finanskrisen, men det ble starten på revolusjonen.`,
    },
    {
      id: 'historie-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de viktigste årsakene til den franske revolusjonen.',
        solution: 'Årsakene til den franske revolusjonen: 1) Sosial urettferdighet: Tredje stand (98% av befolkningen) bar hele skattebyrden, mens adel og geistlighet var skattefrie. 2) Økonomisk krise: Staten var nærmest bankerott etter kostbare kriger, inkludert støtte til den amerikanske revolusjonen. 3) Svakt lederskap: Kong Ludvig XVI var ubesluttsom og klarte ikke å gjennomføre nødvendige reformer. 4) Hoffets luksus: Versailles kostet enormt mens folket sultet. 5) Matmangel: Dårlige avlinger i 1788 førte til høye brødpriser og sult. 6) Opplysningstidens ideer: Filosofene hadde spredt ideer om frihet, likhet og folkesuverenitet. 7) Inspirasjon fra den amerikanske revolusjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-3-text-2',
      type: 'text',
      content: `## Revolusjonen bryter ut (1789)

I mai 1789 møttes stenderforsamlingen i Versailles. Tredje stand krevde at stendene skulle møtes samlet og stemme per hode (ikke per stand), slik at de kunne vinne flertall.

Da kongen nektet, erklærte tredje stand seg som **Nasjonalforsamling** 17. juni 1789. De sverget å ikke gå fra hverandre før Frankrike hadde fått en grunnlov (**Ballhuseden**).

**14. juli 1789** stormet en folkemengde festningen Bastillen i Paris for å skaffe våpen. Bastillens fall ble symbolet på revolusjonen og feires fortsatt som Frankrikes nasjonaldag.

I august vedtok Nasjonalforsamlingen **Erklæringen om menneskets og borgerens rettigheter** - et dokument inspirert av den amerikanske uavhengighetserklæringen og opplysningsfilosofien.`,
    },
    {
      id: 'historie-6-3-def-2',
      type: 'definition',
      title: 'Menneskerettighetserklæringen',
      content: `**Erklæringen om menneskets og borgerens rettigheter** (1789) slo fast at alle mennesker er født frie og like i rettigheter. Den garanterte ytringsfrihet, religionsfrihet, eiendomsrett og beskyttelse mot vilkårlig fengsling. Erklæringen bygde på opplysningstidens naturrettstenkning.`,
    },
    {
      id: 'historie-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var de viktigste hendelsene i 1789 som markerte starten på den franske revolusjonen?',
        solution: 'De viktigste hendelsene i 1789: 1) Mai: Stenderforsamlingen møttes i Versailles etter 175 år. 2) 17. juni: Tredje stand erklærte seg som Nasjonalforsamling og krevde å representere hele nasjonen. 3) 20. juni: Ballhuseden - representantene sverget å ikke gå fra hverandre før Frankrike hadde en grunnlov. 4) 14. juli: Stormingen av Bastillen - en folkemengde tok festningen. Dette ble symbolet på revolusjonen. 5) August: "Den store frykten" - bondeoppstander over hele Frankrike. 6) 4. august: Nasjonalforsamlingen avskaffet adelens og geistlighetens privilegier. 7) 26. august: Erklæringen om menneskets og borgerens rettigheter ble vedtatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-3-text-3',
      type: 'text',
      content: `## Radikalisering og terror (1792-1794)

Revolusjonen radikaliserte seg gradvis. I 1792 ble Frankrike erklært republikk, og i januar 1793 ble Ludvig XVI henrettet ved giljotinen.

Krig mot europeiske makter og indre opprør skapte kaos. **Jakobinerne**, ledet av **Maximilien Robespierre**, tok makten og innførte **skrekkveldet** (terroren). Alle som ble ansett som fiender av revolusjonen, risikerte å bli henrettet.

I løpet av drøyt ett år ble rundt 17 000 mennesker henrettet ved giljotinen, deriblant dronning Marie Antoinette og mange av revolusjonens egne ledere. Terroren rammet til slutt Robespierre selv - han ble henrettet i juli 1794.`,
    },
    {
      id: 'historie-6-3-example-1',
      type: 'example',
      title: 'Revolusjonens slagord: Frihet, likhet, brorskap',
      content: `**"Liberté, égalité, fraternité"** (frihet, likhet, brorskap) ble revolusjonens slagord og er fortsatt Frankrikes motto.

**Frihet** betydde:
- Frihet fra vilkårlig fengsling og tortur
- Ytringsfrihet og pressefrihet
- Religiøs toleranse
- Slutt på livegenskap og feudale bindinger

**Likhet** betydde:
- Avskaffelse av adelens og geistlighetens privilegier
- Like for loven (ingen særdomstoler for adelen)
- Karriere åpen for talent, ikke bare fødsel

**Brorskap** betydde:
- Solidaritet mellom borgerne
- Nasjonal enhet - alle franskmenn som brødre

I praksis var det langt mellom ideal og virkelighet. Kvinner fikk ikke stemmerett, slaveriet ble først avskaffet, så gjeninnført, og terroren viste at frihet kunne ofres for "revolusjonens sikkerhet".`,
    },
    {
      id: 'historie-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var "skrekkveldet" (terroren), og hvordan kunne en revolusjon for frihet føre til masshenrettelser?',
        solution: 'Skrekkveldet (september 1793 - juli 1794) var perioden da jakobinerne under Robespierre brukte terror som politisk virkemiddel. Ca. 17 000 ble henrettet ved giljotinen. Hvordan dette kunne skje: 1) Krig: Frankrike var i krig mot flere europeiske makter og truet av invasjon. 2) Indre opprør: Konrarevolusjonære, føderalister og bondeopprør truet revolusjonen. 3) Ideologisk fanatisme: Robespierre mente terroren var nødvendig for å beskytte "dyden" og revolusjonen. 4) Paranoia: Mistanke om forræderi ble utbredt - "folkets fiender" var overalt. 5) Maktmisbruk: Uten rettsstatlige garantier kunne anklager føre til henrettelse uten skikkelig rettssak. Dette viser at selv revolusjoner for frihet kan slå over i undertrykkelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-3-text-4',
      type: 'text',
      content: `## Napoleon og revolusjonens arv

Etter terroren kom en mer moderat periode, men Frankrike forble ustabilt. I 1799 grep generalen **Napoleon Bonaparte** makten gjennom et statskupp. I 1804 kronet han seg selv til keiser.

Napoleon var et barn av revolusjonen, men også dens graver. Han beholdt mange av revolusjonens reformer:
- Likhet for loven (Napoleons lovbok - Code civil)
- Karriere åpen for talent
- Avskaffelse av føydale privilegier

Samtidig avskaffet han demokratiet og ytringsfrihet. Gjennom sine kriger spredte han revolusjonens ideer til hele Europa - men også fransk dominans.

Napoleons nederlag i 1815 førte til restaurasjon av de gamle monarkiene, men ideene om frihet, likhet og nasjonalisme var umulige å undertrykke permanent.`,
    },
    {
      id: 'historie-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan videreførte og forandret Napoleon den franske revolusjonens arv?',
        solution: 'Napoleon videreførte flere av revolusjonens reformer: 1) Likhet for loven gjennom Code civil (Napoleons lovbok). 2) Karriere åpen for talent - man kunne stige i gradene uavhengig av fødsel. 3) Avskaffelse av føydale privilegier og livegenskap. 4) Religiøs toleranse og likestilling av trossamfunn. 5) Spredning av revolusjonens ideer til erobrede land. Samtidig forandret han revolusjonen: 1) Avskaffet demokratiet og grep all makt selv. 2) Kronet seg til keiser - ny monark i stedet for republikk. 3) Innskrenket ytringsfrihet og pressefrihet. 4) Gjeninnførte slaveriet i koloniene. 5) Førte aggressive erobringskriger. Napoleon var altså både en viderefører og en forræder mot revolusjonens idealer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft den franske revolusjonens betydning for europeisk og verdens historie. Var revolusjonen en suksess eller en fiasko?',
        solution: 'Den franske revolusjonens betydning: 1) Avskaffet det føydale stendersamfunnet og etablerte likhet for loven. 2) Spredte ideene om menneskerettigheter, demokrati og nasjonalisme. 3) Inspirerte senere revolusjoner og frigjøringsbevegelser. 4) Viste at det gamle regimet kunne styrtes. 5) Etablerte prinsippet om folkesuverenitet. Suksess eller fiasko: Revolusjonen var begge deler. Suksess: Permanent avskaffelse av føydale privilegier, menneskerettighetserklæringen, inspirasjon for demokratibevegelser. Fiasko: Terroren, undertrykkelse av kvinner og slaver, maktovertagelse av Napoleon, tiår med krig og ustabilitet. Revolusjonen viste at radikal endring er mulig, men også at veien til frihet kan føre gjennom blodbad. Dens idealer lever videre, selv om veien dit var brutal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_6_4: TextbookChapter = {
  id: 'historie-6-4',
  courseId: 'historie',
  chapterNumber: '6.4',
  title: 'Revolusjonenes betydning for demokrati',
  description: 'Arven fra revolusjonene og demokratiets utvikling.',
  estimatedMinutes: 45,
  competenceGoals: ['demokrati i antikken vs i dag'],
  content: [
    {
      id: 'historie-6-4-intro',
      type: 'text',
      content: `## Fra revolusjon til moderne demokrati

De amerikanske og franske revolusjonene etablerte grunnleggende prinsipper som moderne demokratier bygger på. Men veien fra revolusjon til stabilt demokrati var lang og kronglete.

Etter Napoleons fall i 1815 forsøkte de gamle monarkiene å gjenopprette det gamle regimet gjennom **Wienerkongressen**. Men ideene om frihet, likhet og folkesuverenitet kunne ikke undertrykkes. Gjennom hele 1800-tallet kjempet liberale og demokratiske bevegelser mot de konservative kreftene.`,
    },
    {
      id: 'historie-6-4-def-1',
      type: 'definition',
      title: 'Liberalisme',
      content: `**Liberalisme** er en politisk ideologi som vektlegger individets frihet og rettigheter. Liberale på 1800-tallet krevde grunnlover, begrenset kongemakt, ytringsfrihet og stemmerett (i starten bare for eiendomsbesittende menn). Liberalismen var motoren bak demokratiseringen i Europa.`,
    },
    {
      id: 'historie-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva innebar liberalismen på 1800-tallet, og hva krevde liberale bevegelser?',
        solution: 'Liberalismen på 1800-tallet var en ideologi som vektla individets frihet og rettigheter. Liberale krevde: 1) Grunnlover som begrenset kongemakten og sikret borgernes rettigheter. 2) Maktfordeling mellom lovgivende, utøvende og dømmende makt. 3) Ytringsfrihet, pressefrihet og forsamlingsfrihet. 4) Stemmerett (i starten for eiendomsbesittende menn). 5) Likhet for loven - avskaffelse av adelens privilegier. 6) Økonomisk frihet - fri handel og næringsfrihet. Liberalismen var motoren bak demokratiseringen, men i starten var den begrenset - den krevde ikke allmenn stemmerett eller likestilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-4-text-2',
      type: 'text',
      content: `## Revolusjonsbølgen i 1848

I 1848 skyllet en bølge av revolusjoner over Europa. Det startet i Frankrike i februar og spredte seg til nesten hele kontinentet - Tyskland, Østerrike, Italia, Ungarn og mange andre land.

**Kravene var lignende overalt:**
- Grunnlover og parlamentarisk styre
- Ytringsfrihet og pressefrihet
- Nasjonal selvstendighet (for undertrykte nasjonaliteter)
- Sosiale reformer for arbeiderklassen

De fleste revolusjonene ble slått ned innen 1849, og mange av lederne måtte flykte. Men 1848 viste at kravet om demokrati og nasjonal selvstendighet var utbredt. Sakte men sikkert måtte de konservative gi etter for presset.`,
    },
    {
      id: 'historie-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv revolusjonsbølgen i 1848. Hva var kravene, og hvorfor ble de fleste revolusjonene slått ned?',
        solution: 'Revolusjonsbølgen i 1848 startet i Frankrike og spredte seg til det meste av Europa. Kravene var: 1) Grunnlover og parlamentarisk styre. 2) Ytringsfrihet og pressefrihet. 3) Nasjonal selvstendighet for undertrykte folk. 4) Sosiale reformer for arbeiderklassen. Hvorfor revolusjonene ble slått ned: 1) Mangel på enhet - liberale, nasjonalister og sosialister hadde ulike mål. 2) Borgerskapet fryktet arbeiderklassens radikalisme og søkte kompromiss med monarkiene. 3) De konservative kreftene (adel, hær, kirke) var fortsatt sterke. 4) Manglende koordinering mellom revolusjonene i ulike land. 5) Nasjonalistiske motsetninger (f.eks. ungarske mot slaviske opprørere). Likevel viste 1848 at kravet om demokrati var utbredt og ikke ville forsvinne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-4-text-3',
      type: 'text',
      content: `## Utvidelsen av stemmeretten

Demokratiseringen på 1800- og 1900-tallet skjedde gradvis gjennom utvidelse av stemmeretten:

**Tidlig 1800-tall**: Bare rike menn med eiendom hadde stemmerett (1-5% av befolkningen)

**Midt på 1800-tallet**: Stemmeretten ble utvidet til flere menn, ofte basert på inntekt eller skatt

**Sent 1800-tall / tidlig 1900-tall**: Allmenn stemmerett for menn ble innført i mange land

**Etter 1900**: Kvinner fikk stemmerett (Norge 1913 - blant de første i verden)

Utvidelsen skjedde sjelden frivillig. Den kom som resultat av politisk kamp - demonstrasjoner, streiker og organisering av arbeiderbevegelsen og kvinnebevegelsen.`,
    },
    {
      id: 'historie-6-4-example-1',
      type: 'example',
      title: 'Kampen for kvinners stemmerett',
      content: `Kvinner var ekskludert fra den demokratiske revolusjonen. Selv den franske menneskerettighetserklæringen gjaldt bare menn. **Olympe de Gouges** skrev "Erklæringen om kvinnens og borgerinnes rettigheter" (1791), men ble henrettet under terroren.

Kampen for kvinners stemmerett - **suffragettbevegelsen** - vokste fram på 1800-tallet. Kvinner organiserte seg, holdt demonstrasjoner og noen brukte sivil ulydighet.

Gjennombruddene kom rundt første verdenskrig:
- **New Zealand 1893** - først i verden
- **Finland 1906** - først i Europa
- **Norge 1913** - blant de første
- **Storbritannia 1918** (over 30 år) / 1928 (alle kvinner)
- **USA 1920**
- **Frankrike 1944** - revolusjonens hjemland var sent ute
- **Sveits 1971** - sist i Vest-Europa

Kvinners stemmerett var den siste store utvidelsen av demokratiet i den vestlige verden.`,
    },
    {
      id: 'historie-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv hvordan stemmeretten gradvis ble utvidet fra tidlig 1800-tall til 1900-tallet.',
        solution: 'Stemmerettens utvidelse skjedde gradvis: Tidlig 1800-tall: Bare rike menn med eiendom hadde stemmerett, typisk 1-5% av befolkningen. Midt på 1800-tallet: Kravene til formue og inntekt ble senket, flere menn fikk stemme. Sent 1800-tall / tidlig 1900-tall: Allmenn stemmerett for menn ble innført i mange land (Norge 1898). Etter 1900: Kvinner fikk stemmerett, oftest etter lang kamp (Norge 1913, Frankrike 1944, Sveits 1971). Utvidelsen kom sjelden frivillig - den var resultat av politisk kamp fra arbeiderbevegelsen, liberale og kvinnebevegelsen. Streiker, demonstrasjoner og organisering presset frem reformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-6-4-text-4',
      type: 'text',
      content: `## Demokratiets seier - og utfordringer

Gjennom 1800- og 1900-tallet vant demokratiet frem i stadig flere land. Den endelige seieren kom etter de to verdenskrigene:

- Etter første verdenskrig kollapset de store imperiene (Østerrike-Ungarn, Det osmanske riket, Russland, Tyskland) og mange nye demokratier oppsto
- Etter andre verdenskrig ble fascismen beseiret, og demokrati spredte seg i Vest-Europa og Japan
- Etter den kalde krigens slutt (1989-1991) ble tidligere kommunistiske land i Øst-Europa demokratiske

Men demokratiet har også møtt utfordringer:
- Fascismen på 1920-30-tallet (Italia, Tyskland)
- Kommunistisk diktatur i Øst-Europa og andre steder
- Autoritære regimer i mange deler av verden fortsatt
- Nye utfordringer i dag: populisme, desinformasjon, polarisering`,
    },
    {
      id: 'historie-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan spredte demokratiet seg i verden gjennom 1900-tallet, og hvilke tilbakeslag møtte det?',
        solution: 'Demokratiets spredning på 1900-tallet: Etter første verdenskrig kollapset de store imperiene, og mange nye demokratier oppsto i Europa. Etter andre verdenskrig spredte demokrati seg i Vest-Europa og Japan, da fascismen var beseiret. Etter den kalde krigen (1989-1991) ble tidligere kommunistiske land i Øst-Europa demokratiske. Tilbakeslag: 1920-30-tallet: Fascismen i Italia og nazismen i Tyskland viste at demokrati kunne avskaffes innenfra. Kommunismen etablerte diktaturer i Øst-Europa, Kina og andre steder. Militærkupp i Latin-Amerika, Asia og Afrika. I dag: Populisme, desinformasjon og polarisering utfordrer demokratier også i etablerte land. Demokratiet har altså ikke vært en uavbrutt fremgang, men en kamp med seirer og tilbakeslag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-6-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan ideene fra den amerikanske og franske revolusjonen har formet moderne demokratier. Hvilke av revolusjonenes idealer er fortsatt aktuelle i dag?',
        solution: 'Revolusjonenes ideer i moderne demokratier: 1) Folkesuverenitet: Alle moderne demokratier bygger på ideen om at makten utgår fra folket. 2) Menneskerettigheter: FNs menneskerettighetserklæring (1948) bygger direkte på den franske erklæringen fra 1789. 3) Maktfordeling: De fleste demokratier har delt makten mellom lovgivende, utøvende og dømmende makt etter Montesquieus modell. 4) Grunnlovsbasert styring: Skrevne grunnlover som begrenser makten og sikrer rettigheter. 5) Likhet for loven: Ingen privilegerte stender, alle skal behandles likt. Idealer som fortsatt er aktuelle: Kampen for likhet og mot diskriminering fortsetter (kvinner, minoriteter, LHBT+). Ytringsfrihetens grenser debatteres. Maktfordelingens betydning aktualiseres når ledere prøver å konsentrere makt. Spenningen mellom frihet og sikkerhet er evig aktuell. Revolusjonenes idealer er fortsatt standardene vi måler samfunnet vårt mot.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Industrialisering og samfunnsendring
// ============================================================================

export const CHAPTER_HISTORIE_7_1: TextbookChapter = {
  id: 'historie-7-1',
  courseId: 'historie',
  chapterNumber: '7.1',
  title: 'Den industrielle revolusjonen',
  description: 'Fra jordbruk til industri - en ny tid begynner.',
  estimatedMinutes: 55,
  competenceGoals: ['teknologiske omveltninger fra industriell revolusjon'],
  content: [
    {
      id: 'historie-7-1-intro',
      type: 'text',
      content: `## Den industrielle revolusjonen - en ny tidsalder

Den **industrielle revolusjonen** var overgangen fra jordbrukssamfunn til industrisamfunn. Den begynte i Storbritannia rundt 1760 og spredte seg gradvis til resten av Europa og verden.

Før industrialiseringen levde de fleste av jordbruk. Varer ble produsert for hånd i hjemmene eller i små verksteder. Med industrialiseringen ble produksjonen flyttet til fabrikker med maskiner drevet av damp. Dette endret ikke bare økonomi og produksjon, men hele samfunnet.`,
    },
    {
      id: 'historie-7-1-def-1',
      type: 'definition',
      title: 'Den industrielle revolusjonen',
      content: `**Den industrielle revolusjonen** var overgangen fra håndverks- og jordbruksbasert økonomi til maskin- og fabrikkbasert industri. Den startet i Storbritannia ca. 1760 og regnes som en av historiens mest omfattende samfunnsendringer.`,
    },
    {
      id: 'historie-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var den industrielle revolusjonen, og hva var den viktigste endringen den førte med seg?',
        solution: 'Den industrielle revolusjonen var overgangen fra jordbruks- og håndverkssamfunn til industrisamfunn, med fabrikker og maskinproduksjon. Den viktigste endringen var at produksjonen ble flyttet fra hjem og små verksteder til fabrikker med maskiner drevet av damp. Dette betydde: 1) Masseproduksjon ble mulig - varer kunne produseres raskere og billigere. 2) Menneskers arbeid ble erstattet eller supplert av maskiner. 3) Folk flyttet fra landsbygda til byene for å arbeide i fabrikker. 4) Nye sosiale klasser oppsto - fabrikkeiere (borgerskapet) og industriarbeidere. 5) Hele samfunnsstrukturen ble endret på få generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-1-text-2',
      type: 'text',
      content: `## Hvorfor startet det i Storbritannia?

Storbritannia hadde flere forutsetninger som gjorde landet til industrialiseringens vugge:

**Naturressurser**: Store forekomster av kull og jernmalm - nødvendig for dampmaskinene og jernproduksjon

**Kapital**: Et velstående borgerskap med penger å investere, og banker som kunne låne ut kapital

**Arbeidskraft**: Jordbruksreformer hadde frigitt arbeidskraft fra landsbygda. "Innhegningene" drev småbønder bort fra jorda.

**Marked**: Et stort hjemmemarked og kolonier som kjøpte britiske varer

**Politisk stabilitet**: Ingen revolusjoner eller invasjoner forstyrret utviklingen

**Kultur**: En praktisk, eksperimenterende holdning og respekt for handel og næringsliv`,
    },
    {
      id: 'historie-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor den industrielle revolusjonen startet nettopp i Storbritannia.',
        solution: 'Storbritannia hadde flere forutsetninger for industrialisering: 1) Naturressurser: Store forekomster av kull og jernmalm som var nødvendig for dampmaskinene. 2) Kapital: Et velstående borgerskap og banker som kunne finansiere nye fabrikker. 3) Arbeidskraft: Jordbruksreformer ("innhegningene") hadde drevet småbønder bort fra jorda, slik at de søkte arbeid i byene. 4) Marked: Et stort hjemmemarked, handelsforbindelser og kolonier som kjøpte britiske varer. 5) Politisk stabilitet: Ingen revolusjoner eller invasjoner. 6) Kultur: Respekt for handel og næringsliv, praktisk og eksperimenterende holdning. 7) Geografiske fordeler: Mange havner og elver for transport.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-1-text-3',
      type: 'text',
      content: `## Tekstilindustrien - industrialiseringens motor

Industrialiseringen begynte i **tekstilindustrien**, særlig bomullsproduksjon. En serie oppfinnelser revolusjonerte produksjonen:

**Spinning jenny** (1764): James Hargreaves' oppfinnelse kunne spinne flere tråder samtidig

**Vannkraftdrevet spinnemaskin** (1769): Richard Arkwright bygde de første fabrikkene drevet av vannkraft

**Mekanisk vevstol** (1785): Edmund Cartwrights oppfinnelse fullførte mekaniseringen av tekstilproduksjonen

Resultatet var at Storbritannia kunne produsere enorme mengder billig bomullstøy. Prisene falt dramatisk - vanlige folk hadde råd til klær som tidligere bare de rike kunne kjøpe. Men det betydde også at håndverkere som hadde livnært seg av spinning og veving, mistet levebrødet.`,
    },
    {
      id: 'historie-7-1-example-1',
      type: 'example',
      title: 'Fra hjemmeindustri til fabrikk',
      content: `Før industrialiseringen foregikk tekstilproduksjonen som **hjemmeindustri** (putting-out system):

1. En handelsmann leverte rå bomull til bondekoner og håndverkere
2. De spant og vevde hjemme, ofte ved siden av gårdsarbeidet
3. Handelsmannen hentet de ferdige produktene og solgte dem

Med fabrikkene endret alt seg:

1. Arbeiderne måtte møte opp i fabrikken på faste tider
2. De jobbet ved maskinene i 12-16 timer, seks dager i uka
3. Arbeidstakten ble bestemt av maskinene, ikke av arbeideren
4. Kvinner og barn var billig arbeidskraft og utgjorde en stor del av arbeidsstyrken

Denne overgangen fra selvstendig arbeid i hjemmet til lønnsarbeid i fabrikken var en fundamental endring i folks liv og arbeid.`,
    },
    {
      id: 'historie-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan endret fabrikkene arbeidslivet sammenlignet med hjemmeindustrien?',
        solution: 'Fabrikkene endret arbeidslivet fundamentalt: Hjemmeindustrien: 1) Arbeidet hjemme, ofte ved siden av gårdsarbeid. 2) Bestemte selv arbeidstakten. 3) Familien jobbet sammen. 4) Kombinerte ulike oppgaver. Fabrikkene: 1) Måtte møte opp på faste tider i fabrikken. 2) Maskinen bestemte arbeidstakten - konstant og ufravikelig. 3) Lange arbeidsdager (12-16 timer), seks dager i uka. 4) Monotont, repetitivt arbeid. 5) Streng disiplin med bøter for forsinkelser eller feil. 6) Kvinner og barn ble utnyttet som billig arbeidskraft. 7) Adskillelse av hjem og arbeid. Overgangen fra selvstendighet til lønnsarbeid og maskintakt var en stor omveltning for arbeidsfolk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-1-text-4',
      type: 'text',
      content: `## Industrialiseringens spredning

Fra Storbritannia spredte industrialiseringen seg gradvis til resten av Europa og verden:

**Belgia** var først ute på kontinentet (fra 1820-tallet), med kull og jernressurser

**Frankrike** industrialiserte gradvis, men langsommere enn Storbritannia og Tyskland

**Tyskland** industrialiserte raskt etter samlingen i 1871 og ble en industriell stormakt

**USA** hadde enormt potensial med sine naturressurser og voksende befolkning. Etter borgerkrigen (1865) akselererte industrialiseringen.

**Norge** industrialiserte senere, fra midten av 1800-tallet. Tekstilindustri langs elvene og treforedling var tidlige industrier. Vannkraft ble senere en viktig ressurs.`,
    },
    {
      id: 'historie-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan og når spredte industrialiseringen seg fra Storbritannia til andre land?',
        solution: 'Industrialiseringens spredning: 1) Belgia var først på kontinentet (fra 1820-tallet), med rike kull- og jernforekomster. 2) Frankrike industrialiserte gradvis, men langsommere pga. mindre kull og svakere befolkningsvekst. 3) Tyskland industrialiserte raskt etter samlingen i 1871 og ble en ledende industrinasjon med kjemisk og elektrisk industri. 4) USA hadde enormt potensial og industrialiserte kraftig etter borgerkrigen (1865) - ble verdens største økonomi. 5) Norge kom sent i gang, fra midten av 1800-tallet. Tekstilindustri og treforedling kom først, senere ble vannkraften viktig. Spredningen skyldtes overføring av teknologi og kunnskap, samt at andre land hadde lignende forutsetninger som Storbritannia.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-7-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft om den industrielle revolusjonen var en positiv eller negativ utvikling. Hvem tjente på den, og hvem tapte?',
        solution: 'Den industrielle revolusjonen hadde både positive og negative sider: Positive: 1) Masseproduksjon ga billigere varer som flere hadde råd til. 2) Levestandarden økte på lang sikt. 3) Ny teknologi og vitenskap utviklet seg raskt. 4) Grunnlag for velferdssamfunnet vi har i dag. De som tjente: Fabrikkeiere og investorer ble rike. Forbrukere fikk billigere varer. På lang sikt hele samfunnet gjennom økt velstand. Negative: 1) Brutale arbeidsforhold i fabrikkene - lange dager, farlige forhold. 2) Barnearbeid ble utbredt. 3) Forurensning og helseproblemer i byene. 4) Håndverkere mistet levebrødet. De som tapte: Håndverkere som ble utkonkurrert. Arbeiderklassen i første fase - lange dager, lave lønninger, dårlige boforhold. Miljøet gjennom forurensning. Det tok generasjoner før gevinstene ble mer jevnt fordelt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_7_2: TextbookChapter = {
  id: 'historie-7-2',
  courseId: 'historie',
  chapterNumber: '7.2',
  title: 'Teknologiske gjennombrudd',
  description: 'Dampmaskinen, jernbanen og nye oppfinnelser.',
  estimatedMinutes: 50,
  competenceGoals: ['teknologiske omveltninger fra industriell revolusjon'],
  content: [
    {
      id: 'historie-7-2-intro',
      type: 'text',
      content: `## Dampmaskinen - industrialiseringens hjerte

**Dampmaskinen** var den industrielle revolusjonens viktigste oppfinnelse. Den gjorde det mulig å omdanne varme fra kull til mekanisk kraft som kunne drive maskiner.

**Thomas Newcomen** utviklet en tidlig dampmaskin allerede i 1712, brukt til å pumpe vann ut av gruver. Men det var **James Watt** som fra 1769 forbedret dampmaskinen så den ble effektiv nok til å drive fabrikker.

Dampmaskinen frigjorde industrien fra avhengigheten av vannkraft. Fabrikker kunne nå bygges hvor som helst - ved kullgruvene, ved havnene, i byene.`,
    },
    {
      id: 'historie-7-2-def-1',
      type: 'definition',
      title: 'Dampmaskin',
      content: `**Dampmaskinen** er en motor som omdanner energien i damp til mekanisk kraft. Vann varmes opp av kull til det blir damp, og damptrykket driver et stempel. James Watts forbedringer fra 1769 gjorde dampmaskinen effektiv nok til industriell bruk.`,
    },
    {
      id: 'historie-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor dampmaskinen var så viktig for den industrielle revolusjonen.',
        solution: 'Dampmaskinen var viktig fordi: 1) Den frigjorde industrien fra avhengighet av vannkraft - fabrikker kunne bygges hvor som helst. 2) Den ga pålitelig kraft uavhengig av årstid og vær. 3) Den kunne drive kraftigere maskiner enn vannkraft. 4) Den gjorde det mulig å utvikle jernbanen og dampskip. 5) Den stimulerte kullindustrien og jernproduksjonen. 6) Den var en generell teknologi som kunne brukes i mange bransjer. Uten dampmaskinen hadde industrialiseringen vært begrenset til områder med elver og fossefall. Dampmaskinen gjorde den industrielle revolusjonen virkelig "revolusjonerende".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-2-text-2',
      type: 'text',
      content: `## Jernbanen revolusjonerer transporten

**Jernbanen** var kanskje den industrielle revolusjonens mest synlige symbol. I 1825 åpnet verdens første offentlige jernbane mellom Stockton og Darlington i England. I 1830 fulgte linjen mellom Manchester og Liverpool.

**George Stephenson** utviklet damplokomotivet "Rocket" som vant konkurransen om å trekke tog på Liverpool-Manchester-banen.

Jernbanen revolusjonerte transporten:
- Reiser som tidligere tok dager, tok nå timer
- Varer kunne fraktes raskt og billig over store avstander
- Tid ble standardisert (jernbanetid) - før hadde hver by sin egen lokaltid
- Jernbanen skapte enorm etterspørsel etter jern, stål og kull`,
    },
    {
      id: 'historie-7-2-example-1',
      type: 'example',
      title: 'Jernbanefeber',
      content: `På 1840-tallet grep "jernbanefeberen" Storbritannia og resten av Europa. Alle ville investere i jernbaner, og nye linjer ble bygget i raskt tempo.

**Storbritannia**:
- 1840: ca. 1 500 km jernbane
- 1870: ca. 25 000 km jernbane

**Konsekvenser:**
- Jordbruksprodukter kunne fraktes til byene - friskere mat, lavere priser
- Folk kunne reise til kysten på ferie - turisme oppsto
- Aviser kunne distribueres samme dag - nyheter spredte seg raskere
- Arbeidsmarkedet ble mer mobilt - folk kunne pendle og flytte lettere
- Nasjonal identitet ble styrket - landene ble "mindre"

Jernbanebyggingen var også risikabel - mange investorer tapte alt da spekulasjonsboblen sprakk på 1840-tallet.`,
    },
    {
      id: 'historie-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hvordan jernbanen påvirket samfunnet utover å gjøre transporten raskere.',
        solution: 'Jernbanen påvirket samfunnet på mange måter: 1) Tid ble standardisert - "jernbanetid" erstattet lokale tider. 2) Markeder ble nasjonale og internasjonale - varer kunne selges langt unna. 3) Ferskvarer som melk og fisk kunne fraktes til byene. 4) Turisme oppsto - folk reiste til kysten på ferie. 5) Nyheter spredte seg raskere - aviser kunne distribueres samme dag. 6) Arbeidsmarkedet ble mer mobilt - folk kunne pendle og flytte. 7) Nasjonal identitet ble styrket - landet ble "mindre". 8) Enorm industriell stimulans - etterspørsel etter jern, stål og kull. 9) Nye yrker oppsto - konduktører, ingeniører, stasjonsarbeidere. 10) Urbaniseringen akselererte - lett å komme til byene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-2-text-3',
      type: 'text',
      content: `## Stål, elektrisitet og den andre industrielle revolusjonen

Fra 1870-tallet snakker historikere om en **andre industriell revolusjon**. Nye teknologier ble drivkrefter:

**Stålproduksjon**: Bessemer-prosessen (1856) og senere Siemens-Martin-prosessen gjorde det mulig å produsere stål i store mengder billig. Stål er sterkere enn jern og muliggjorde høyere bygninger, lengre broer og bedre maskiner.

**Elektrisitet**: Edison, Tesla og andre utviklet elektrisk kraft fra 1880-tallet. Elektrisitet kunne overføres over store avstander og ga renere og mer fleksibel kraft enn damp.

**Forbrenningsmotoren**: Utviklet på 1880-tallet, la grunnlaget for bilen og flyindustrien.

**Kjemisk industri**: Kunstgjødsel, fargestoffer, sprengstoff og legemidler ble utviklet industrielt.`,
    },
    {
      id: 'historie-7-2-def-2',
      type: 'definition',
      title: 'Den andre industrielle revolusjonen',
      content: `**Den andre industrielle revolusjonen** (ca. 1870-1914) var en ny bølge av teknologisk utvikling basert på stål, elektrisitet, kjemi og forbrenningsmotoren. Tyskland og USA ble ledende, og nye industrier som bil- og elektroindustri vokste fram.`,
    },
    {
      id: 'historie-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var de viktigste teknologiske gjennombruddene i den "andre industrielle revolusjonen" fra 1870-tallet?',
        solution: 'De viktigste gjennombruddene var: 1) Stålproduksjon: Bessemer-prosessen gjorde det mulig å produsere stål billig i store mengder. Stål var sterkere enn jern og muliggjorde skyskrapere, lange broer og bedre maskiner. 2) Elektrisitet: Edison og Tesla utviklet elektrisk kraft og belysning. Elektrisk kraft var renere og mer fleksibel enn dampkraft. 3) Forbrenningsmotoren: Utviklet på 1880-tallet, la grunnlaget for bilen og flyet. 4) Kjemisk industri: Kunstgjødsel økte jordbruksproduksjonen, syntetiske fargestoffer, sprengstoff (dynamitt), og legemidler. 5) Telefon og telegraf: Revolusjonerte kommunikasjon. Disse teknologiene la grunnlaget for det 20. århundrets industri og levestandard.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-2-text-4',
      type: 'text',
      content: `## Oppfinnere og innovasjon

Den industrielle revolusjonen var også en tid med enestående oppfinnelser:

**Kommunikasjon:**
- Telegrafen (1837) - øyeblikkelig kommunikasjon over store avstander
- Telefonen (Alexander Graham Bell, 1876)
- Radio (Guglielmo Marconi, 1890-tallet)

**Transport:**
- Dampskip gjorde sjøreiser raskere og mer pålitelige
- Bilen (Karl Benz, 1885) skulle revolusjonere transporten i neste århundre
- Flyet (Wright-brødrene, 1903) åpnet en helt ny dimensjon

**Dagliglivet:**
- Symaskinen (1850-tallet) - raskere og billigere klesproduksjon
- Fotografiet - fanget øyeblikket for ettertiden
- Elektrisk belysning (Edison, 1879) - forlenget dagen`,
    },
    {
      id: 'historie-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-7-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg to oppfinnelser fra den industrielle revolusjonen og forklar hvordan de endret folks hverdag.',
        solution: 'Eksempel på to oppfinnelser: 1) Elektrisk belysning (Edison, 1879): Før var man avhengig av stearinlys, oljelamper eller gasslys som ga dårlig lys og brannfare. Elektrisk lys var tryggere, sterkere og renere. Det forlenget arbeidsdagen i fabrikker og hjemmet. Folk kunne lese, arbeide og sosialisere etter mørkets frembrudd. Byene ble opplyste og tryggere om natten. 2) Jernbanen: Endret folks oppfatning av avstand og tid. Reiser som tok dager, tok nå timer. Folk kunne jobbe i byen og bo på landet (pendling). Ferske varer nådde markedene. Familiebånd kunne opprettholdes over avstander. Turisme ble mulig for flere. Standardisert tid erstattet lokale tider. Begge oppfinnelsene viser hvordan teknologi grunnleggende endrer hverdagen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-7-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft sammenhengen mellom teknologisk utvikling og samfunnsendring under den industrielle revolusjonen. Styrte teknologien utviklingen, eller var det samfunnet som drev frem teknologien?',
        solution: 'Sammenhengen mellom teknologi og samfunn var gjensidig - de drev hverandre fremover: Teknologien drev samfunnsendring: 1) Dampmaskinen muliggjorde fabrikker og urbanisering. 2) Jernbanen forkortet avstander og skapte nasjonale markeder. 3) Elektrisk lys endret døgnrytmen. 4) Telegrafen revolusjonerte kommunikasjon og nyhetsformidling. Samfunnet drev teknologien: 1) Etterspørsel etter billige varer stimulerte oppfinnelser. 2) Kapitalisme ga incentiver til innovasjon (profitt). 3) Vitenskapelig revolusjon skapte kunnskapsgrunnlag. 4) Patentrettigheter beskyttet oppfinnere. 5) Konkurranse mellom nasjoner stimulerte utvikling. Det var altså en vekselvirkning: Nye oppfinnelser skapte nye behov, og nye behov inspirerte nye oppfinnelser. Verken teknologisk determinisme (teknologien bestemmer) eller sosial konstruksjon (samfunnet bestemmer) alene forklarer utviklingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_7_3: TextbookChapter = {
  id: 'historie-7-3',
  courseId: 'historie',
  chapterNumber: '7.3',
  title: 'Sosiale endringer og arbeiderbevegelsen',
  description: 'Arbeiderklassens framvekst og kampen for rettigheter.',
  estimatedMinutes: 55,
  competenceGoals: ['teknologiske omveltninger fra industriell revolusjon'],
  content: [
    {
      id: 'historie-7-3-intro',
      type: 'text',
      content: `## Arbeiderklassens fremvekst

Industrialiseringen skapte en ny sosial klasse - **arbeiderklassen** eller **proletariatet**. Dette var mennesker som solgte sin arbeidskraft til fabrikkeiere og ikke eide produksjonsmidler (fabrikker, maskiner, råvarer).

I den første fasen av industrialiseringen var arbeidsforholdene svært harde:
- Arbeidsdager på 12-16 timer, seks dager i uken
- Lave lønninger, knapt nok til å overleve
- Farlige arbeidsforhold - ulykker var vanlige
- Ingen beskyttelse ved sykdom, alderdom eller arbeidsledighet
- Barnearbeid var utbredt - barn ned i 5-6 års alder jobbet i fabrikker og gruver`,
    },
    {
      id: 'historie-7-3-def-1',
      type: 'definition',
      title: 'Arbeiderklassen (proletariatet)',
      content: `**Arbeiderklassen** eller **proletariatet** er den sosiale klassen som lever av å selge sin arbeidskraft. I motsetning til bønder og håndverkere eide ikke industriarbeiderne sine egne produksjonsmidler, men arbeidet for lønn i andres fabrikker.`,
    },
    {
      id: 'historie-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv arbeidsforholdene for industriarbeidere i den tidlige industrialiseringen.',
        solution: 'Arbeidsforholdene var svært harde: 1) Lange arbeidsdager - typisk 12-16 timer, seks dager i uken. 2) Lave lønninger - knapt nok til mat og husleie. 3) Farlige forhold - mange ulykker med maskiner, ingen sikkerhetsutstyr. 4) Usunt arbeidsmiljø - støv, dårlig luft, støy, dårlig belysning. 5) Ingen sosiale rettigheter - ingen lønn ved sykdom, ingen pensjon. 6) Streng disiplin - bøter for forsinkelser, pauser og feil. 7) Barnearbeid - barn ned i 5-6 års alder jobbet i fabrikker og gruver. 8) Utrygghet - kunne sparkes når som helst. 9) Dårlige boforhold - trange, fuktige boliger i overbefolkede arbeiderstrøk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-3-text-2',
      type: 'text',
      content: `## Barnearbeid

Barnearbeid var utbredt i fabrikkene. Barn var billig arbeidskraft, og små fingre og kropper var nyttige for å komme til i maskineriet. Barn så unge som 5-6 år arbeidet i tekstilfabrikker og kullgruver.

Arbeidsforholdene for barn var ofte verre enn for voksne:
- I kullgruvene dro barn på 8-9 år kullvogner i lave, mørke tunneler
- I tekstilfabrikkene arbeidet barn under de farlige maskinene
- Mange ble lemlestet av maskiner eller utviklet sykdommer

Gradvis kom lover som begrenset barnearbeid:
- **Factory Act 1833** (Storbritannia) forbød arbeid for barn under 9 år i tekstilfabrikker
- **Mines Act 1842** forbød barn under 10 år i gruver
- Full skoleplikt erstattet gradvis barnearbeid`,
    },
    {
      id: 'historie-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-7-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor var barnearbeid utbredt, og hvordan ble det gradvis begrenset?',
        solution: 'Barnearbeid var utbredt fordi: 1) Barn var billig arbeidskraft - de fikk lavere lønn enn voksne. 2) Små kropper var nyttige for å komme til i maskineriet. 3) Fattige familier trengte alle inntekter - barnas lønn var nødvendig. 4) Ingen lover beskyttet barn. 5) Mange så arbeid som oppfostrende for barn. Begrensningen kom gradvis: 1) Factory Act 1833 forbød arbeid for barn under 9 i tekstilfabrikker. 2) Mines Act 1842 forbød barn under 10 i gruver. 3) Skoleplikt ble innført gradvis - barn måtte på skolen istedenfor i fabrikken. 4) Reformbevegelser og fagforeninger kjempet mot barnearbeid. 5) Økt velstand gjorde at familier klarte seg uten barnas inntekt. I Norge ble fabrikklovene fra 1892 viktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-3-text-3',
      type: 'text',
      content: `## Fagforeninger og arbeiderbevegelsen

Arbeiderne begynte å organisere seg for å kjempe for bedre forhold. **Fagforeninger** samlet arbeidere i samme yrke eller bransje for å forhandle kollektivt med arbeidsgiverne.

Fagforeningene møtte sterk motstand. I mange land var de forbudt eller sterkt begrenset. Arbeidsgivere og myndigheter så fagforeninger som en trussel mot den frie markedsøkonomien og samfunnsordenen.

Men arbeiderne hadde ett sterkt våpen: **streiken**. Ved å nekte å arbeide kunne de presse arbeidsgiverne til å forhandle. Store konflikter ble ført, og mange arbeidere ble arrestert, fengslet eller avskjediget.

Gradvis ble fagforeningene legalisert og vant rettigheter:
- Retten til å organisere seg
- Retten til å forhandle kollektivt
- Retten til å streike`,
    },
    {
      id: 'historie-7-3-def-2',
      type: 'definition',
      title: 'Fagforening',
      content: `En **fagforening** er en organisasjon av arbeidere som sammen forhandler med arbeidsgivere om lønn og arbeidsforhold. Gjennom kollektiv handling (forhandlinger, streik) kan arbeiderne oppnå bedre vilkår enn de kunne fått alene.`,
    },
    {
      id: 'historie-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-7-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor oppsto fagforeningene, og hvordan kjempet de for bedre arbeidsforhold?',
        solution: 'Fagforeningene oppsto fordi: 1) Enkeltarbeidere var maktesløse overfor arbeidsgiverne. 2) Arbeidsforholdene var dårlige - lange dager, lave lønninger, farlige forhold. 3) Ved å stå sammen kunne arbeiderne forhandle med større styrke. Kampmidler: 1) Kollektive forhandlinger - fagforeningen forhandlet på vegne av alle medlemmene. 2) Streik - arbeidsnektelse for å presse arbeidsgivere. 3) Boikott - nekte å kjøpe varer fra fiendtlige arbeidsgivere. 4) Politisk arbeid - kjempe for lovgivning som beskyttet arbeidere. 5) Solidaritet - støtte arbeidere i konflikt med streikebidrag. De oppnådde gradvis: Kortere arbeidstid, høyere lønn, tryggere arbeidsplasser, rett til sykepenger og ferie, og politisk innflytelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-3-text-4',
      type: 'text',
      content: `## Sosialisme og Karl Marx

Industrialiseringens urettferdighet inspirerte nye politiske ideer. **Sosialismen** kritiserte kapitalismen og krevde en mer rettferdig fordeling av samfunnets goder.

**Karl Marx** (1818-1883) var sosialismens mest innflytelsesrike tenker. Sammen med Friedrich Engels skrev han "Det kommunistiske manifest" (1848) og "Kapitalen".

Marx mente at:
- Historien drives av klassekamp mellom de som eier og de som arbeider
- Kapitalismen utbytter arbeiderne - de skaper verdier, men eierne tar profitten
- Kapitalismen ville til slutt bryte sammen på grunn av sine egne motsetninger
- Arbeiderklassen ville gjøre revolusjon og opprette et sosialistisk samfunn
- Til slutt ville staten "visne bort" og et klasseløst kommunistisk samfunn oppstå

Marx' ideer fikk enorm innflytelse på arbeider- og sosialistbevegelser over hele verden.`,
    },
    {
      id: 'historie-7-3-example-1',
      type: 'example',
      title: 'Thranitterbevegelsen i Norge',
      content: `**Marcus Thrane** (1817-1890) ledet Norges første arbeiderbevegelse rundt 1850. På kort tid organiserte han 30 000 medlemmer i arbeiderforeninger - en enorm mobilisering.

**Kravene var:**
- Allmenn stemmerett for menn
- Bedre skoler
- Avskaffelse av privilegier
- Billigere kreditt for småbønder og arbeidere

Bevegelsen ble slått hardt ned av myndighetene. Thrane ble arrestert og satt i fengsel i flere år. Mange ledere ble dømt, og bevegelsen kollapset.

Men thranitterbevegelsen viste at arbeidere og småkårsfolk kunne organisere seg og stille krav. Den var en forløper for den senere arbeiderbevegelsen og kampen for stemmerett.`,
    },
    {
      id: 'historie-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-7-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva var hovedtrekkene i Karl Marx sin kritikk av kapitalismen?',
        solution: 'Marx kritikk av kapitalismen: 1) Utbytting: Arbeiderne skaper verdiene gjennom sitt arbeid, men kapitalistene (eierne) tar profitten. Merverdi-teorien forklarer dette. 2) Klassekamp: Historien er en kamp mellom klasser - under kapitalismen mellom borgerskapet og proletariatet. 3) Fremmedgjøring: Arbeiderne blir fremmedgjort fra sitt arbeid, produktene, hverandre og seg selv. 4) Kriser: Kapitalismen skaper periodiske kriser fordi arbeiderne ikke har råd til å kjøpe varene de produserer. 5) Konsentrasjon: Kapitalen vil bli stadig mer konsentrert hos færre eiere. Marx mente kapitalismen var ustabil og urettferdig, og at den ville bli erstattet av sosialisme gjennom arbeiderklassens revolusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-7-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft arbeiderbevegelsens betydning for utviklingen av moderne velferdssamfunn. Hvilke rettigheter vi tar for gitt i dag, ble vunnet gjennom arbeiderkamp?',
        solution: 'Arbeiderbevegelsens bidrag til velferdssamfunnet: Arbeidsrettigheter: 1) 8-timers arbeidsdag - kjempet frem gjennom streiker og politisk arbeid. 2) Ferie med lønn - en gang utenkelig, nå lovfestet. 3) Retten til å organisere seg og streike. 4) Oppsigelsesvern og trygge ansettelsesforhold. 5) Minstelønn og tariffavtaler. Sosiale rettigheter: 1) Sykepenger - lønn ved sykdom. 2) Arbeidsledighetstrygd. 3) Alderspensjon. 4) Arbeidsskadeerstatning. Politiske rettigheter: 1) Allmenn stemmerett - arbeiderbevegelsen kjempet for dette. 2) Rett til utdanning for alle. Arbeidsmiljø: 1) Sikkerhetskrav på arbeidsplassen. 2) Forbud mot barnearbeid. 3) Arbeidsmiljølover. Nesten alle de sosiale rettighetene vi tar for gitt i dag, ble kjempet frem av arbeiderbevegelsen gjennom streiker, demonstrasjoner, og politisk arbeid over mange tiår.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_7_4: TextbookChapter = {
  id: 'historie-7-4',
  courseId: 'historie',
  chapterNumber: '7.4',
  title: 'Demografiske endringer',
  description: 'Befolkningsvekst, migrasjon og urbanisering.',
  estimatedMinutes: 45,
  competenceGoals: ['demografiske endringer'],
  content: [
    {
      id: 'historie-7-4-intro',
      type: 'text',
      content: `## Befolkningseksplosjonen

På 1800-tallet opplevde Europa en dramatisk befolkningsvekst. Europas befolkning økte fra ca. 190 millioner i 1800 til ca. 420 millioner i 1900 - mer enn en dobling på hundre år.

Årsakene til befolkningsveksten var flere:
- **Lavere dødelighet**: Bedre hygiene, vaksinasjon (særlig mot kopper), og bedre matforsyning
- **Fødselsraten forble høy**: Det tok tid før folk begynte å få færre barn
- **Fravær av store epidemier og kriger**: Relativt fredelig periode
- **Jordbruksforbedringer**: Mer mat til flere mennesker`,
    },
    {
      id: 'historie-7-4-def-1',
      type: 'definition',
      title: 'Demografisk overgang',
      content: `**Den demografiske overgangen** beskriver overgangen fra høy fødsels- og dødsrate til lav fødsels- og dødsrate. I overgangsfasen synker dødsraten før fødselsraten, noe som fører til rask befolkningsvekst. Europa gjennomgikk denne overgangen på 1800- og tidlig 1900-tall.`,
    },
    {
      id: 'historie-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva var årsakene til den sterke befolkningsveksten i Europa på 1800-tallet?',
        solution: 'Årsakene til befolkningsveksten: 1) Lavere dødelighet: Bedre hygiene, rent vann, og kloakksystemer reduserte smittsomme sykdommer. 2) Vaksinasjon: Koppevaksinen (fra 1796) reduserte dødeligheten dramatisk. 3) Bedre matforsyning: Nye jordbruksmetoder, potet fra Amerika, og transport av mat til byene. 4) Medisinsk fremgang: Bedre forståelse av sykdom, antiseptiske metoder. 5) Fødselsraten forble høy: Folk fortsatte å få mange barn - det tok tid før familieplanlegging ble vanlig. 6) Relativt fredelig periode: Ingen store kriger eller epidemier som tidligere. Kombinasjonen av fallende dødsrate og fortsatt høy fødselsrate ga befolkningseksplosjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-4-text-2',
      type: 'text',
      content: `## Urbanisering - fra land til by

Industrialiseringen førte til massiv flytting fra landsbygda til byene - **urbanisering**. Folk søkte arbeid i fabrikker, og byene vokste eksplosivt:

**London**: 1 million (1800) → 6,5 millioner (1900)
**Paris**: 500 000 (1800) → 2,7 millioner (1900)
**Berlin**: 170 000 (1800) → 1,9 millioner (1900)

I 1800 bodde bare 20% av Europas befolkning i byer. I 1900 var andelen over 40%, og i Storbritannia over 75%.

Urbaniseringen skapte store utfordringer: Overbefolkning, dårlige boforhold, forurensning, kriminalitet og smittsomme sykdommer.`,
    },
    {
      id: 'historie-7-4-example-1',
      type: 'example',
      title: 'Livet i industribyene',
      content: `Industribyene var preget av enorme kontraster:

**Arbeiderstrøkene:**
- Trange, mørke boliger uten vann og kloakk
- Flere familier delte ofte samme leilighet
- Forurensning fra fabrikker - røyk og støv
- Kolera og andre epidemier herjet
- Forventet levealder kunne være 20-30 år lavere enn på landet

**Borgerskapets bydeler:**
- Store, luftige villaer og leiligheter
- Moderne bekvemmeligheter - innlagt vann, gass, senere elektrisitet
- Parker og brede boulevarder
- Tjenerskap som tok seg av husarbeidet

De samme byene rommet ekstrem rikdom og ekstrem fattigdom, ofte bare noen kvartaler fra hverandre. Denne kontrasten var synlig og bidro til sosial uro og reformkrav.`,
    },
    {
      id: 'historie-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-7-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv hvordan urbaniseringen påvirket folks levekår. Hvilke problemer oppsto i de raskt voksende byene?',
        solution: 'Urbaniseringens problemer: Boforhold: Trange, overbefolkede boliger uten ventilasjon. Mangel på rent vann og kloakk. Flere familier i samme rom. Helse: Smittsomme sykdommer som kolera spredte seg lett. Dårlig luft fra fabrikker og kull. Kort forventet levealder i arbeiderstrøk. Sosiale problemer: Kriminalitet og prostitusjon. Alkoholisme. Oppløsning av tradisjonelle familiestrukturer. Barnearbeid istedenfor skolegang. Miljøproblemer: Forurensning av luft og vann. Søppel i gatene. Støy fra fabrikker. Samtidig hadde byene også fordeler: Jobbmuligheter, kulturliv, utdanning, og sosial mobilitet. Reformer kom gradvis: Kloakk, vannforsyning, boligreguleringer og offentlig helsevesen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-4-text-3',
      type: 'text',
      content: `## Folkehelse og sanitærreformer

De katastrofale forholdene i byene førte til reformer. **Koleraepidemiene** på 1800-tallet var en vekker - sykdommen rammet både fattige og rike.

Legen **John Snow** viste i 1854 at kolera spredte seg gjennom forurenset vann, ikke gjennom "dårlig luft" som mange trodde. Dette la grunnlaget for sanitærreformene.

**Reformene inkluderte:**
- Offentlig vannforsyning med rent vann
- Kloakksystemer som fjernet avfall fra gatene
- Søppeltømming og renhold av gater
- Boligreguleringer med krav om vinduer, ventilasjon og minste romstørrelse
- Offentlige parker og grøntområder
- Offentlige bad og vaskerier

Disse reformene reduserte dødeligheten dramatisk og la grunnlaget for moderne folkehelse.`,
    },
    {
      id: 'historie-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-7-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke tiltak ble gjennomført for å forbedre folkehelsen i industribyene, og hvordan virket de?',
        solution: 'Tiltak for folkehelse: 1) Rent vann: Offentlig vannforsyning fra rene kilder hindret vannbårne sykdommer som kolera og tyfoidfeber. 2) Kloakksystemer: Fjernet avfall fra gatene og hindret smitte. 3) Søppelhåndtering: Organisert innsamling og fjerning av søppel. 4) Boligreguleringer: Krav om vinduer, ventilasjon, minste romstørrelse - reduserte tuberkulose og andre sykdommer. 5) Offentlige parker: Ga frisk luft og rekreasjon for byboerne. 6) Offentlige bad: Bedre personlig hygiene. 7) Matkontrollen: Forhindret salg av farlig mat. 8) Vaksinasjonsprogrammer: Obligatorisk vaksinasjon mot kopper. Resultat: Dødeligheten i byene sank dramatisk. Forventet levealder økte. Koleraepidemier ble sjeldne. Disse tiltakene la grunnlaget for moderne offentlig helsevesen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-7-4-text-4',
      type: 'text',
      content: `## Endringer i familiestrukturen

Industrialiseringen endret også familielivet fundamentalt:

**Før industrialiseringen:**
- Familien var en økonomisk enhet - alle jobbet sammen på gården eller i verkstedet
- Arbeid og hjem var samme sted
- Storfamilien var vanlig - flere generasjoner under samme tak
- Barn var arbeidskraft og alderdomsforsikring

**Etter industrialiseringen:**
- Arbeid og hjem ble adskilt - far (og ofte mor og barn) gikk på fabrikken
- Kjernefamilien (foreldre og barn) ble mer vanlig
- Barn gikk fra å være arbeidskraft til å være "investering" i utdanning
- Gradvis færre barn per familie (særlig i byene)
- Nye roller: Moren som "husmor", faren som "forsørger"

Disse endringene la grunnlaget for den moderne familiestrukturen.`,
    },
    {
      id: 'historie-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-7-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan endret industrialiseringen familiestrukturen og synet på barn?',
        solution: 'Endringer i familiestrukturen: Før industrialiseringen: Familien var en økonomisk produksjonsenhet. Arbeid og hjem var på samme sted. Storfamilien var vanlig. Barn var arbeidskraft fra ung alder. Etter industrialiseringen: 1) Arbeid og hjem ble adskilt - man gikk på jobb. 2) Kjernefamilien (foreldre og barn) ble vanligere. 3) Nye kjønnsroller utviklet seg - mannen som forsørger, kvinnen som husmor (i middelklassen). 4) Færre barn per familie, særlig i byene. Synet på barn endret seg: 1) Fra arbeidskraft til "investering" i utdanning. 2) Barndommen ble en egen livsfase som skulle beskyttes. 3) Skoleplikt erstattet barnearbeid. 4) Barn skulle oppdras, ikke bare fores. 5) Følelsesmessige bånd ble viktigere. Disse endringene skjedde gradvis og først i middelklassen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-7-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvordan de demografiske endringene på 1800-tallet (befolkningsvekst, urbanisering, endret familiestruktur) henger sammen med industrialiseringen.',
        solution: 'Sammenhenger mellom industrialisering og demografiske endringer: Befolkningsvekst og industrialisering: 1) Industrialiseringen skapte velstand som ga bedre mat og hygiene → lavere dødelighet. 2) Befolkningsveksten ga arbeidskraft til fabrikkene. 3) Teknologi (vaksinasjon, medisin) reduserte dødeligheten. Urbanisering og industrialisering: 1) Fabrikkene trengte arbeidskraft → folk flyttet til byene. 2) Jordbruksrasjonalisering frigjorde arbeidskraft fra landet. 3) Byene kunne vokse fordi jernbanen fraktet mat dit. 4) Urbaniseringsproblemene førte til sanitærreformer og moderne byplanlegging. Familiestrukturen: 1) Fabrikkarbeid skilte arbeid og hjem → nye familieroller. 2) Bylivet og lønnsarbeid gjorde store familier upraktiske → færre barn. 3) Barnelover og skoleplikt endret barns rolle. 4) Velstand gjorde det mulig å "investere" i barns utdanning. Alle disse endringene forsterket hverandre og skapte det moderne samfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Nasjonalisme og nasjonsbygging
// ============================================================================

export const CHAPTER_HISTORIE_8_1: TextbookChapter = {
  id: 'historie-8-1',
  courseId: 'historie',
  chapterNumber: '8.1',
  title: 'Nasjonalismens fremvekst',
  description: 'Nasjonalismen som politisk kraft i Europa.',
  estimatedMinutes: 55,
  competenceGoals: ['nasjonal identitet i Norge'],
  content: [
    {
      id: 'historie-8-1-intro',
      type: 'text',
      content: `## Hva er nasjonalisme?

**Nasjonalisme** er ideen om at verden er delt inn i nasjoner, og at hver nasjon har rett til sin egen stat. En nasjon er et fellesskap av mennesker som deler språk, kultur, historie og ofte religion.

Før 1800-tallet var de fleste europeere først og fremst lojale mot sin landsby, sin region, sin religion eller sin konge - ikke mot en "nasjon". Nasjonalismen var en ny idé som vokste frem med den franske revolusjonen og romantikken.

Nasjonalismen ble en av 1800-tallets mektigste politiske krefter. Den inspirerte frigjøringsbevegelser, samlet splittede folk, men førte også til konflikter og kriger.`,
    },
    {
      id: 'historie-8-1-def-1',
      type: 'definition',
      title: 'Nasjonalisme',
      content: `**Nasjonalisme** er en politisk ideologi som hevder at nasjonen er den grunnleggende enheten i politikken. Nasjonalister mener at folk som deler språk, kultur og historie, utgjør en nasjon som har rett til selvbestemmelse - helst i form av en egen stat.`,
    },
    {
      id: 'historie-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er nasjonalisme, og hva menes med at folk som deler språk og kultur utgjør en "nasjon"?',
        solution: 'Nasjonalisme er ideen om at verden består av nasjoner, og at hver nasjon har rett til selvstyre. En nasjon defineres ofte ved: 1) Felles språk - folk som snakker samme språk, føler fellesskap. 2) Felles kultur - tradisjoner, verdier, skikker. 3) Felles historie - minner om fortiden binder sammen. 4) Felles territorium - et "hjemland" nasjonen tilhører. 5) Ofte felles religion. Nasjonalister mener at folk med disse felles trekkene utgjør et naturlig fellesskap som bør styre seg selv, helst i en egen stat. Før nasjonalismen var folk først og fremst lojale mot sin landsby, sin region eller sin konge - "nasjonen" som politisk enhet var en ny idé fra sent 1700-tall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-1-text-2',
      type: 'text',
      content: `## Nasjonalismens røtter

Nasjonalismen hadde flere kilder:

**Den franske revolusjonen** erstattet lojalitet til kongen med lojalitet til nasjonen. "Fedrelandet" ble den høyeste verdien. Revolusjonskrigene spredte ideen om at folket utgjør en nasjon som kan forme sin egen skjebne.

**Romantikken** var en kulturell bevegelse som oppvurderte følelser, natur og fortid. Romantikerne søkte det unike ved hvert folk - folkeeventyr, folkesanger, språk. De skapte nasjonale helter og myter.

**Språket** ble sett som nasjonens sjel. Språkforskere samlet inn dialekter, ordtak og folkeminne. Forfattere skapte et nasjonalt skriftspråk. I mange land ble dette et politisk prosjekt.`,
    },
    {
      id: 'historie-8-1-def-2',
      type: 'definition',
      title: 'Romantikken',
      content: `**Romantikken** var en kulturell bevegelse (ca. 1800-1850) som reagerte mot opplysningstidens fornuftsdyrking. Romantikerne oppvurderte følelser, fantasi, natur og fortid. De var opptatt av det særegne ved hvert folk og bidro sterkt til nasjonalismen.`,
    },
    {
      id: 'historie-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan bidro romantikken til nasjonalismens fremvekst?',
        solution: 'Romantikken bidro til nasjonalismen på flere måter: 1) Oppvurderte det særegne: Romantikerne søkte det unike ved hvert folk - deres "folkeånd" eller nasjonale karakter. 2) Innsamling av folketradisjon: Eventyr, sanger, sagn og ordtak ble samlet inn som uttrykk for folkets sjel (Asbjørnsen og Moe i Norge). 3) Språket som nasjonens sjel: Nasjonalt språk ble sett som uttrykk for folkets identitet. Språkutvikling ble et nasjonalt prosjekt (Ivar Aasen). 4) Historieinteresse: Fortiden, særlig middelalderen, ble romantisert som nasjonens storhetstid. 5) Nasjonale helter: Dikterne skapte nasjonale ikoner og myter. 6) Naturen: Det nasjonale landskapet ble oppvurdert som uttrykk for nasjonal egenart. Romantikken ga nasjonalismen et kulturelt og følelsesmessig grunnlag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-1-text-3',
      type: 'text',
      content: `## Nasjonsbygging og samling

Nasjonalismen førte til to typer politisk endring på 1800-tallet:

**Samling av delte nasjoner:**
- **Italia** var splittet i mange småstater. Gjennom kriger og diplomati ble Italia samlet under kongen av Sardinia i 1861. Prosessen kalles "Risorgimento" (gjenfødelse).
- **Tyskland** besto av mange stater. Prøyssen under Otto von Bismarck samlet Tyskland gjennom tre kriger. Det tyske keiserriket ble proklamert i 1871.

**Frigjøring fra imperier:**
- Grekenland frigjorde seg fra Det osmanske riket (1821-1832)
- Belgia ble uavhengig fra Nederland (1830)
- Mange folk i Østerrike-Ungarn og Det osmanske riket krevde selvstyre

Nasjonalismen kunne både forene og splitte - den samlet italienere og tyskere, men truet flernasjonale imperier.`,
    },
    {
      id: 'historie-8-1-example-1',
      type: 'example',
      title: 'Tysklands samling',
      content: `Tysklands samling er et klassisk eksempel på nasjonalisme i praksis.

**Før samlingen:** Det tyske området var delt i over 30 uavhengige stater, med Prøyssen og Østerrike som de mektigste.

**Bismarck og "blod og jern":** Otto von Bismarck, Prøyssens ministerpresident, samlet Tyskland gjennom tre kriger:
- 1864: Krig mot Danmark (om Slesvig-Holstein)
- 1866: Krig mot Østerrike (Prøyssen ble leder for tyske stater)
- 1870-71: Krig mot Frankrike (alle tyske stater samlet mot felles fiende)

**Det tyske keiserriket:** I 1871 ble det tyske keiserriket proklamert i Speilsalen i Versailles - en bevisst ydmykelse av Frankrike. Wilhelm I av Prøyssen ble keiser.

Tyskland ble raskt Europas sterkeste industrimakt, men nasjonalismen skapte også aggressiv utenrikspolitikk som bidro til første verdenskrig.`,
    },
    {
      id: 'historie-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi eksempler på hvordan nasjonalismen førte til nasjonsbygging på 1800-tallet.',
        solution: 'Eksempler på nasjonsbygging: 1) Italia (Risorgimento): Italia var splittet i mange stater, noen under østerriksk styre. Gjennom kriger og diplomati ble landet samlet under Sardinia-kongen i 1861. Garibaldi og Cavour var sentrale ledere. 2) Tyskland: Over 30 tyske stater ble samlet under Prøyssens ledelse. Bismarck brukte tre kriger til å samle Tyskland. Keiserriket ble proklamert 1871. 3) Grekenland: Frigjorde seg fra Det osmanske riket 1821-1832 med støtte fra europeiske makter. 4) Belgia: Ble uavhengig fra Nederland i 1830. 5) Norge: 1814 - Grunnloven og delvis selvstyre. 1905 - full uavhengighet fra Sverige. Nasjonalismen drev folk til å samle seg i nasjonalstater eller frigjøre seg fra fremmede herskere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-1-text-4',
      type: 'text',
      content: `## Nasjonalismens skyggeside

Nasjonalismen hadde også en mørk side. Ideen om nasjonen som det høyeste fellesskapet kunne bli ekskluderende og aggressiv:

**Ekskludering av minoriteter:** De som ikke "passet inn" i nasjonen - religiøse minoriteter, etniske grupper, innvandrere - ble ofte diskriminert eller forfulgt. Jøder i mange land opplevde økt antisemittisme.

**Imperialisme:** "Nasjonal storhet" ble brukt til å rettferdiggjøre kolonialisme. Europeiske nasjoner konkurrerte om å erobre kolonier i Afrika og Asia.

**Aggresiv utenrikspolitikk:** Nasjonalisme førte til rivalisering mellom stormaktene. Kapprustning og alliansesystemer skapte spenninger som utløste første verdenskrig.

**Ekstrem nasjonalisme i det 20. århundre:** Fascismen og nazismen bygget på nasjonalistiske ideer tatt til ekstrem. Holocaust og andre folkemord var konsekvensen.`,
    },
    {
      id: 'historie-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke negative konsekvenser hadde nasjonalismen på 1800- og 1900-tallet?',
        solution: 'Nasjonalismens negative konsekvenser: 1) Ekskludering og diskriminering: Minoriteter som ikke "passet inn" i nasjonen ble diskriminert. Jøder møtte økt antisemittisme i mange land. 2) Imperialisme: "Nasjonal storhet" ble brukt til å rettferdiggjøre kolonisering av Afrika og Asia. 3) Rivalisering mellom stormakter: Konkurranse om kolonier, prestisje og makt. Kapprustning og alliansesystemer. 4) Første verdenskrig: Nasjonalistiske spenninger var en viktig årsak til krigsutbruddet i 1914. 5) Ekstrem nasjonalisme: Fascismen i Italia og nazismen i Tyskland bygget på nasjonalistiske ideer. 6) Holocaust og folkemord: Ekstrem nasjonalisme førte til forfølgelse og massedrap på "fremmede" grupper. 7) Etniske konflikter: Når nasjonsgrenser ikke sammenfalt med statsgrenser, oppsto konflikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft nasjonalismen som historisk kraft. Hvordan kan samme ideologi føre både til frigjøring og til undertrykkelse?',
        solution: 'Nasjonalismen som tvetydig kraft: Frigjørende aspekter: 1) Ga undertrykte folk selvbevissthet og krav om selvstyre. 2) Inspirerte frigjøringsbevegelser mot imperier og kolonimakter. 3) Styrket kulturell identitet og stolthet. 4) Skapte demokratiske bevegelser - folket skulle styre seg selv. 5) Førte til moderne velferdsstater med solidaritet innen nasjonen. Undertrykkende aspekter: 1) Definerte noen som "fremmede" som ikke hørte til nasjonen. 2) Kunne brukes til å rettferdiggjøre imperialisme og kolonisering. 3) Skapte rivalisering og krig mellom nasjoner. 4) I ekstrem form: rasisme, etnisk rensing, folkemord. Forklaring på tvetydigheten: Nasjonalismen avhenger av hvordan "nasjonen" defineres. Inkluderende nasjonalisme (alle som bor i landet) kan være demokratisk. Ekskluderende nasjonalisme (basert på etnisitet, rase, religion) kan bli undertrykkende. Konteksten og lederskapet bestemmer hvilken retning nasjonalismen tar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_8_2: TextbookChapter = {
  id: 'historie-8-2',
  courseId: 'historie',
  chapterNumber: '8.2',
  title: 'Norge 1814 og veien til selvstendighet',
  description: '1814, union med Sverige og frigjøringen 1905.',
  estimatedMinutes: 55,
  competenceGoals: ['nasjonal identitet i Norge'],
  content: [
    {
      id: 'historie-8-2-intro',
      type: 'text',
      content: `## Norge under Danmark

I over 400 år (1380-1814) var Norge i union med Danmark. Unionen var ulikeverdig - Danmark var den dominerende partneren. Kongen bodde i København, og mange viktige beslutninger for Norge ble tatt der.

Norge hadde ingen egen nasjonalforsamling eller regjering. Det norske aristokratiet var svakt etter svartedauden, og danske adelsmenn og embetsmenn dominerte. Reformasjonen i 1536 førte til at Norge formelt ble en dansk provins.

Samtidig beholdt Norge en viss egenart - egne lover, egen kirke, og norsk bondestand forble sterkere enn i Danmark.`,
    },
    {
      id: 'historie-8-2-def-1',
      type: 'definition',
      title: 'Unionen med Danmark',
      content: `**Unionen med Danmark** (1380-1814) var en statsrettslig forbindelse der Norge og Danmark hadde felles konge. Unionen var ulikeverdig - Danmark dominerte, og Norge hadde ingen egen nasjonalforsamling. Fra 1536 ble Norge formelt en dansk provins ("lydrike").`,
    },
    {
      id: 'historie-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv Norges stilling i unionen med Danmark. Hvilke trekk viser at unionen var ulikeverdig?',
        solution: 'Norges stilling i unionen med Danmark: Ulikeverdige trekk: 1) Kongen bodde i København - alle viktige beslutninger ble tatt der. 2) Norge hadde ingen egen nasjonalforsamling eller regjering. 3) Fra 1536 ble Norge formelt en dansk provins ("lydrike"). 4) Danske embetsmenn dominerte administrasjonen. 5) Det norske aristokratiet var svakt etter svartedauden. 6) Norsk skrivekultur svant hen - dansk ble administrasjonsspråk. 7) Universitetet var i København - norske studenter måtte reise dit. Men Norge beholdt visse særtrekk: Egne lover (Norges Lov 1687), egen kirkeorganisasjon, og sterkere bondestand enn i Danmark. Bøndene var ikke livegne som i Danmark.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-2-text-2',
      type: 'text',
      content: `## 1814 - mirakkelåret

Napoleonskrigene førte til Norges frigjøring fra Danmark. Danmark-Norge hadde støttet Napoleon og ble straffet da han tapte. Ved **Kielfreden** (januar 1814) måtte Danmark avstå Norge til Sverige.

Men nordmennene godtok ikke dette. Prins **Christian Frederik**, dansk stattholder i Norge, ledet motstanden. I februar 1814 ble det innkalt til riksforsamling.

**17. mai 1814** vedtok riksforsamlingen på Eidsvoll Norges Grunnlov - en av Europas mest liberale på den tiden. Christian Frederik ble valgt til konge.

**Grunnlovens hovedprinsipper:**
- Maktfordeling mellom konge, storting og domstoler
- Folkesuverenitet - makten utgår fra folket
- Ytringsfrihet, trykkefrihet og næringsfrihet
- Stemmerett for embetsmenn og eiendomsbesittende bønder (ca. 40% av voksne menn)`,
    },
    {
      id: 'historie-8-2-example-1',
      type: 'example',
      title: 'Riksforsamlingen på Eidsvoll',
      content: `Riksforsamlingen møttes på Eidsvoll fra 10. april til 20. mai 1814. 112 representanter var valgt fra hele landet - embetsmenn, bønder og noen byborgere.

**To fløyer:**
- **Selvstendighetspartiet** (ledet av Christian Magnus Falsen) ville ha full uavhengighet og Christian Frederik som konge
- **Unionspartiet** (ledet av grev Wedel) mente Norge måtte godta union med Sverige, men sikre best mulige vilkår

Selvstendighetspartiet vant. Grunnloven ble utformet på rekordtid, inspirert av amerikanske og franske forbilder, men tilpasset norske forhold.

Særnorske trekk:
- Sterk stilling for bøndene - odelsretten ble grunnlovsfestet
- Forbud mot adel (adelsprivilegiene ble opphevet)
- Relativt vid stemmerett - bredere enn i de fleste land`,
    },
    {
      id: 'historie-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva var de viktigste prinsippene i Grunnloven av 1814, og hvilke ideer var den inspirert av?',
        solution: 'Grunnlovens viktigste prinsipper: 1) Maktfordeling: Makten delt mellom Stortinget (lovgivende), kongen (utøvende) og domstolene (dømmende). 2) Folkesuverenitet: Makten utgår fra folket, ikke fra Gud eller arv. 3) Individuelle rettigheter: Ytringsfrihet, trykkefrihet, religionsfrihet (begrenset), næringsfrihet. 4) Stemmerett: For embetsmenn og eiendomsbesittende bønder (ca. 40% av voksne menn - svært bredt for tiden). 5) Forbud mot adel: Adelsprivilegiene ble opphevet. 6) Odelsretten ble beskyttet - viktig for bøndene. Inspirasjon fra: Den amerikanske grunnloven (maktfordeling, rettigheter), den franske menneskerettighetserklæringen (individuelle rettigheter, folkesuverenitet), og opplysningstidens filosofer (Montesquieu, Locke, Rousseau). Tilpasset norske forhold med sterk bondestand.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-2-text-3',
      type: 'text',
      content: `## Unionen med Sverige (1814-1905)

Sommeren 1814 gikk Sverige til krig mot Norge. Etter en kort krig måtte Norge godta union med Sverige, men fikk beholde Grunnloven med noen endringer (**Novembergrunnloven**).

Unionen var en **personalunion** - landene delte konge, men hadde ellers egne institusjoner. Norge beholdt Stortinget, egen regjering, egne lover, egen hær og eget flagg (etter hvert).

Gjennom 1800-tallet vokste norsk nasjonalisme. Stortinget kjempet for å utvide norsk selvstyre:
- **1821**: Stortinget nektet å opprette norsk adel
- **1837**: Formannskapslovene - lokalt selvstyre
- **1884**: Parlamentarisme - regjeringen må ha Stortingets tillit
- **Flaggsaken**: Kamp for rent norsk flagg (uten unionsmerke)`,
    },
    {
      id: 'historie-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva kjennetegnet unionen med Sverige, og hvordan utvidet Norge sitt selvstyre gjennom 1800-tallet?',
        solution: 'Unionen med Sverige: Personalunion - felles konge, men ellers egne institusjoner. Norge beholdt: Stortinget, egen regjering, egne lover, egen hær, egen kirke. Felles: Konge, utenrikspolitikk (ledet av Sverige). Utvidelse av selvstyre: 1) 1821: Stortinget nektet å opprette norsk adel - kongen måtte gi etter. 2) 1837: Formannskapslovene - lokalt selvstyre i kommunene. 3) 1884: Parlamentarisme innført etter riksrett - regjeringen må ha Stortingets tillit. 4) 1890-tallet: Kamp for eget utenriksstyre og konsulatvesen. 5) Flaggsaken: Kamp for rent norsk flagg uten unionsmerke - vedtatt av Stortinget gjentatte ganger. Gjennom hele perioden ble unionen løsere, og Norge kjempet seg til stadig mer selvstendighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-2-text-4',
      type: 'text',
      content: `## 1905 - full uavhengighet

Striden om eget konsulatvesen (norske konsulater i utlandet) førte til den endelige bruddet. Da Sverige nektet å godta norske krav, erklærte Stortinget **7. juni 1905** at unionen var oppløst.

**Folkeavstemningen 13. august 1905** viste massiv støtte for unionsoppløsningen: 368 208 stemte ja, bare 184 stemte nei.

Det var fare for krig, men forhandlinger i Karlstad førte til fredelig løsning. Sverige anerkjente norsk uavhengighet mot at Norge rev noen grensefestninger.

I en ny folkeavstemning valgte nordmennene monarki. Den danske prinsen Carl ble valgt til konge og tok navnet **Haakon VII**. Han kom til Norge 25. november 1905.

Norge var endelig en fullt uavhengig nasjon etter nesten 500 år.`,
    },
    {
      id: 'historie-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv hvordan Norge ble uavhengig i 1905. Hvorfor gikk det fredelig?',
        solution: 'Veien til uavhengighet 1905: 1) Striden om konsulatvesen: Norge ville ha egne konsulater i utlandet. Sverige nektet. 2) 7. juni 1905: Stortinget erklærte unionen oppløst fordi kongen ikke hadde kunnet danne regjering. 3) Folkeavstemning 13. august: 368 208 stemte ja til oppløsning, bare 184 nei - massiv oppslutning. 4) Karlstadforhandlingene: Norge og Sverige forhandlet. Norge måtte rive noen grensefestninger. 5) Sverige anerkjente norsk uavhengighet i oktober. 6) Ny folkeavstemning valgte monarki. Danske prins Carl ble kong Haakon VII. Hvorfor fredelig: 1) Internasjonal opinion støttet Norge - stormaktene ønsket ikke krig. 2) Folkeavstemningen viste demokratisk legitimitet. 3) Begge lands regjeringer ønsket fredelig løsning. 4) Norge viste vilje til kompromiss (festningene). 5) Sterke økonomiske bånd mellom landene talte mot krig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-8-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft betydningen av 1814 og 1905 for norsk nasjonal identitet. Hvorfor er disse årene så viktige i norsk historie?',
        solution: 'Betydningen av 1814: 1) Norge fikk egen grunnlov - symbol på folkestyre og nasjonal selvstendighet. 2) Grunnloven var blant Europas mest liberale - kilde til nasjonal stolthet. 3) Stortinget ble et forum for nasjonsbygging. 4) 17. mai ble nasjonaldag - årlig feiring av nasjonal identitet. 5) Selv om full uavhengighet uteble, la 1814 grunnlaget. Betydningen av 1905: 1) Full uavhengighet etter nesten 500 år under Danmark og Sverige. 2) Bekreftelse på nasjonen som eget politisk fellesskap. 3) Fredelig frigjøring gjennom demokratiske midler - del av norsk selvbilde. 4) Folkeavstemningene viste folkelig oppslutning. 5) Egen konge og fullt selvstyre. Begge årene er grunnsteinene i norsk nasjonal identitet: 1814 ga grunnloven og demokratiet, 1905 ga full uavhengighet. Sammen forteller de historien om en fredelig, demokratisk frigjøring - sentrale elementer i norsk selvforståelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_8_3: TextbookChapter = {
  id: 'historie-8-3',
  courseId: 'historie',
  chapterNumber: '8.3',
  title: 'Samisk historie og minoriteter',
  description: 'Samenes historie og minoriteters stilling i Norge.',
  estimatedMinutes: 50,
  competenceGoals: ['myndiggjøring og frigjøring - norsk og samisk historie'],
  content: [
    {
      id: 'historie-8-3-intro',
      type: 'text',
      content: `## Samene - Norges urfolk

**Samene** er Norges urfolk og har levd i nordområdene i tusenvis av år - lenge før de moderne statsgrensene ble trukket. Tradisjonelt har samene livnært seg av reindrift, fiske, fangst og jordbruk.

Det samiske bosettingsområdet - **Sápmi** - strekker seg over fire land: Norge, Sverige, Finland og Russland. Samene har aldri hatt en egen stat, men har en felles kultur, språk og identitet.

Samenes historie er preget av et langt og vanskelig forhold til den norske staten. Fra 1800-tallet ble samene utsatt for en systematisk **fornorskingspolitikk** som forsøkte å utslette samisk språk og kultur.`,
    },
    {
      id: 'historie-8-3-def-1',
      type: 'definition',
      title: 'Urfolk',
      content: `**Urfolk** er folk som bodde i et område før kolonisering eller etablering av moderne stater, og som har bevart sin tradisjonelle kultur. Samene er Norges urfolk og Nordens eneste anerkjente urfolk. Urfolk har særlige rettigheter i internasjonal lov (ILO-konvensjonen).`,
    },
    {
      id: 'historie-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva innebærer det at samene er Norges urfolk, og hva er Sápmi?',
        solution: 'At samene er urfolk betyr at de bodde i nordområdene lenge før de moderne statsgrensene ble trukket, og at de har bevart sin tradisjonelle kultur. Som urfolk har samene særlige rettigheter i internasjonal lov, blant annet til å bevare sin kultur, sitt språk og sine tradisjonelle næringer. Sápmi er det samiske navnet på det tradisjonelle samiske bosettingsområdet, som strekker seg over fire land: Norge, Sverige, Finland og Russland (Kolahalvøya). Samene er ett folk med felles språk, kultur og identitet, selv om de bor i flere stater. Tradisjonelle samiske næringer inkluderer reindrift, fiske, fangst og jordbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-3-text-2',
      type: 'text',
      content: `## Fornorskingspolitikken

Fra midten av 1800-tallet førte norske myndigheter en systematisk politikk for å assimilere samene (og kvenene) inn i den norske majoritetsbefolkningen. Denne **fornorskingspolitikken** varte i over hundre år.

**Virkemidler:**
- **Språkforbud i skolen**: Samisk var forbudt som undervisningsspråk. Barn ble straffet for å snakke samisk.
- **Jordsalgsloven (1902)**: Man måtte kunne norsk for å kjøpe jord i Finnmark
- **Internatskoler**: Samiske barn ble sendt bort fra familiene til internatskoler der de bare fikk snakke norsk
- **Navneendringer**: Samiske stedsnavn ble erstattet med norske
- **Kulturell nedvurdering**: Samisk kultur ble fremstilt som mindreverdig

Fornorskingspolitikken var basert på sosialdarwinistiske ideer om at samene var et "primitivt" folk som måtte "siviliseres".`,
    },
    {
      id: 'historie-8-3-def-2',
      type: 'definition',
      title: 'Fornorskingspolitikk',
      content: `**Fornorskingspolitikken** var den norske statens systematiske forsøk på å assimilere samer og kvener inn i den norske majoritetsbefolkningen fra ca. 1850 til 1960-tallet. Hovedvirkemidlet var å forby samisk språk i skolen og presse gjennom norsk språk og kultur.`,
    },
    {
      id: 'historie-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv fornorskingspolitikken. Hvilke virkemidler ble brukt, og hva var målet?',
        solution: 'Fornorskingspolitikkens mål var å assimilere samene inn i den norske majoritetsbefolkningen - å gjøre dem til "nordmenn". Virkemidler: 1) Språkforbud i skolen: Samisk var forbudt. Barn ble straffet for å snakke samisk. 2) Internatskoler: Samiske barn ble sendt bort fra familiene for å lære norsk. 3) Jordsalgsloven (1902): Krav om å kunne norsk for å kjøpe jord i Finnmark. 4) Navneendringer: Samiske stedsnavn ble erstattet med norske. 5) Kulturell nedvurdering: Samisk kultur ble fremstilt som primitiv og mindreverdig. 6) Press mot tradisjonelle næringer som reindrift. Bakgrunnen var nasjonalisme og sosialdarwinistiske ideer om at samene var "primitive" og måtte "siviliseres". Konsekvensene var skam over samisk bakgrunn, språktap og kulturell fremmedgjøring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-3-text-3',
      type: 'text',
      content: `## Samisk revitalisering og rettigheter

Fra 1960-70-tallet skjedde en endring. En ny generasjon samer krevde anerkjennelse av sin kultur og sine rettigheter. **Altasaken** (1979-1981) - konflikten om utbygging av Alta-Kautokeino-vassdraget - ble et vendepunkt.

Samiske aktivister og miljøvernere protesterte mot utbyggingen som ville ødelegge samiske reindriftsområder. Demonstrasjoner, sultestreiker og sivil ulydighet satte fokus på samenes situasjon.

**Viktige gjennombrudd:**
- **Samerettsutvalget (1980)**: Utredet samenes rettsstilling
- **Sameloven (1987)**: Anerkjente samene som urfolk
- **Sametinget (1989)**: Samenes folkevalgte organ ble opprettet
- **Grunnlovsendring (1988)**: Staten ble forpliktet til å sikre samisk språk, kultur og samfunnsliv
- **ILO-konvensjon 169 (1990)**: Norge ratifiserte FN-konvensjonen om urfolks rettigheter`,
    },
    {
      id: 'historie-8-3-example-1',
      type: 'example',
      title: 'Altasaken - et vendepunkt',
      content: `**Altasaken** (1979-1981) var konflikten om utbygging av Alta-Kautokeino-vassdraget i Finnmark. Utbyggingen ville legge viktige samiske reindriftsområder under vann.

Protestene samlet samer, miljøvernere og andre:
- Demonstrasjoner og leirslåing ved Stilla (utbyggingsstedet)
- Sultestreik foran Stortinget
- Sivil ulydighet - folk lot seg arrestere

Politiet gjennomførte Norges største politiaksjon for å fjerne demonstrantene.

**Betydningen:**
Selv om utbyggingen ble gjennomført, satte Altasaken samenes rettigheter på dagsordenen. Den førte til:
- Opprettelse av Samerettsutvalget
- Grunnlovsendring om samiske rettigheter
- Opprettelse av Sametinget
- En ny bevissthet i det norske samfunnet om urett begått mot samene

Altasaken var et vendepunkt i samisk historie i Norge.`,
    },
    {
      id: 'historie-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-8-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva var Altasaken, og hvorfor regnes den som et vendepunkt i samisk historie?',
        solution: 'Altasaken (1979-1981) var konflikten om utbygging av Alta-Kautokeino-vassdraget, som ville legge samiske reindriftsområder under vann. Protestformene: Demonstrasjoner og leirslåing ved utbyggingsstedet, sultestreik foran Stortinget, sivil ulydighet med masseanholdelser. Politiet gjennomførte Norges største politiaksjon for å fjerne demonstrantene. Hvorfor et vendepunkt: 1) Satte samenes rettigheter på dagsordenen i det norske samfunnet. 2) Førte til opprettelse av Samerettsutvalget som utredet samenes rettsstilling. 3) Resulterte i grunnlovsendring (1988) som forpliktet staten til å sikre samisk kultur. 4) Førte til opprettelse av Sametinget (1989). 5) Skapte samisk selvbevissthet og stolthet. 6) Viste at samiske rettigheter kunne vinnes gjennom politisk kamp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-3-text-4',
      type: 'text',
      content: `## Andre minoriteter i Norge

Norge har flere nasjonale minoriteter med lang historie i landet:

**Kvener/norskfinner**: Etterkommere av finsktalende innvandrere til Nord-Norge fra 1600-tallet. Var også utsatt for fornorskingspolitikk.

**Skogfinner**: Etterkommere av finske innvandrere til Østlandet på 1600-tallet.

**Romani (tatere)**: Omreisende folkegruppe med egne tradisjoner. Utsatt for grove overgrep, inkludert tvangssterilisering.

**Rom (sigøynere)**: Kom til Norge på 1800-tallet. Nektet innreise til Norge i perioder.

**Jøder**: Forbudt adgang til Norge fra 1687 til 1851 ("jødeparagrafen" i Grunnloven). 772 norske jøder ble deportert og drept under Holocaust.

I 1999 anerkjente Norge disse som nasjonale minoriteter med særlige rettigheter.`,
    },
    {
      id: 'historie-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-8-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke minoritetsgrupper har Norge, og hvordan har den norske staten behandlet dem historisk?',
        solution: 'Norges minoriteter: 1) Samer (urfolk): Utsatt for fornorskingspolitikk - språkforbud, internatskoler, kulturell nedvurdering. 2) Kvener/norskfinner: Finsktalende innvandrere i Nord-Norge. Også utsatt for fornorskingspolitikk. 3) Skogfinner: Finske innvandrere på Østlandet. Assimilert. 4) Romani (tatere): Omreisende folk utsatt for grove overgrep - barn ble tatt fra foreldre, tvangssterilisering. 5) Rom (sigøynere): Nektet innreise i perioder, utsatt for diskriminering. 6) Jøder: Forbudt adgang 1687-1851 (jødeparagrafen). 772 norske jøder ble drept i Holocaust. Felles trekk: Staten har forsøkt å assimilere, utelukke eller kontrollere minoritetene. Overgrep ble begått i "nasjonens" og "sivilisasjonens" navn. Siden 1999 er disse anerkjent som nasjonale minoriteter med særlige rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-8-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft hvorfor norsk nasjonalisme på 1800- og 1900-tallet førte til undertrykkelse av samer og andre minoriteter. Hva kan vi lære av denne historien?',
        solution: 'Hvorfor nasjonalismen førte til undertrykkelse: 1) Nasjonalismen definerte "nordmenn" ut fra språk og kultur - de som var annerledes passet ikke inn. 2) Sosialdarwinisme legitimerte undertrykkelse - samene ble sett som "primitive". 3) Nasjonsbyggingen krevde homogenitet - mangfold ble sett som trussel. 4) Staten ville sikre grensene - minoriteter med bånd over grensene var "upålitelige". 5) Majoritetens makt - minoritetene var få og maktesløse. Hva vi kan lære: 1) Nasjonalisme kan ha ekskluderende konsekvenser - vi må være på vakt. 2) Mangfold er en verdi, ikke en trussel. 3) Staten kan begå systematisk urett - vi trenger kritisk årvåkenhet. 4) Minoritetsrettigheter må beskyttes aktivt. 5) Oppgjør med fortidens urett er viktig - både for minoritetene og majoritetssamfunnet. 6) Urfolks rettigheter krever aktiv politikk, ikke bare fravær av diskriminering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_8_4: TextbookChapter = {
  id: 'historie-8-4',
  courseId: 'historie',
  chapterNumber: '8.4',
  title: 'Migrasjon på 1800-tallet',
  description: 'Utvandring fra Norge og innvandring til Amerika.',
  estimatedMinutes: 45,
  competenceGoals: ['migrasjon og kulturmøter fra ulike perspektiver'],
  content: [
    {
      id: 'historie-8-4-intro',
      type: 'text',
      content: `## Den store utvandringen

På 1800-tallet utvandret ca. 800 000 nordmenn til Amerika - omtrent en tredjedel av befolkningen. Norge hadde den nest høyeste utvandringsraten i Europa, bare slått av Irland.

Utvandringen foregikk i bølger:
- **1825**: Det første organiserte utvandrerskipet "Restauration" seilte fra Stavanger til New York
- **1840-1860-tallet**: Første store utvandringsbølge
- **1880-tallet**: Topp i utvandringen - over 180 000 reiste på dette tiåret
- **1900-1910**: Ny stor bølge før første verdenskrig

De fleste norske utvandrere slo seg ned i Midtvesten i USA - Wisconsin, Minnesota, Iowa, Nord- og Sør-Dakota.`,
    },
    {
      id: 'historie-8-4-def-1',
      type: 'definition',
      title: 'Emigrasjon og immigrasjon',
      content: `**Emigrasjon** er utvandring - å flytte fra et land. **Immigrasjon** er innvandring - å flytte til et land. Masseutvandringen fra Norge på 1800-tallet kalles ofte "den store utferden" og var del av en europeisk folkevandring til Amerika.`,
    },
    {
      id: 'historie-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv omfanget av den norske utvandringen til Amerika på 1800-tallet.',
        solution: 'Omfanget av utvandringen: Ca. 800 000 nordmenn utvandret til Amerika på 1800-tallet og tidlig 1900-tall - omtrent en tredjedel av befolkningen. Norge hadde nest høyest utvandringsrate i Europa (etter Irland). Utvandringen kom i bølger: 1825 var det første skipet "Restauration". 1840-60-tallet var den første store bølgen. 1880-tallet var toppen med over 180 000 utvandrere. 1900-1910 kom ny stor bølge før første verdenskrig. De fleste slo seg ned i Midtvesten - Wisconsin, Minnesota, Iowa, Nord- og Sør-Dakota - områder med klima og natur som minnet om Norge. De grunnla egne samfunn med norske kirker, aviser og foreninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-4-text-2',
      type: 'text',
      content: `## Årsaker til utvandringen

**Skyve-faktorer (push)** - årsaker til å forlate Norge:
- **Fattigdom og jordhunger**: Befolkningsveksten førte til at det ikke var nok jord til alle. Mange småbruk ble delt til de var for små til å leve av.
- **Klasseskiller**: Husmannsvesenet ga lite håp om å eie egen jord. Sosialt hierarki var stivnet.
- **Religiøs undertrykkelse**: Dissentere (religiøse avvikere) søkte frihet.
- **Militærtjeneste**: Noen ville unngå militærtjenesten.
- **Nød og kriser**: Uår og hungersnød, særlig på 1860-tallet.

**Dra-faktorer (pull)** - årsaker til å reise til Amerika:
- **Billig jord**: Homestead Act (1862) ga gratis jord til de som dyrket den opp
- **Høyere lønninger**: Bedre betalt for arbeid enn i Norge
- **Frihet**: Religiøs toleranse, ingen klasseskiller, demokrati
- **"Amerikaletter"**: Brev fra slektninger som hadde lykkes lokket flere`,
    },
    {
      id: 'historie-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar skyve- og dra-faktorene bak utvandringen fra Norge til Amerika.',
        solution: 'Skyve-faktorer (årsaker til å forlate Norge): 1) Fattigdom og jordhunger - befolkningsvekst ga for lite jord til alle. 2) Klasseskiller - husmannsvesenet ga lite håp om å eie jord. 3) Religiøs undertrykkelse - dissentere søkte frihet. 4) Nød og kriser - uår og hungersnød, særlig 1860-tallet. 5) Militærtjeneste - noen ville unngå den. 6) Begrensede muligheter - lite sosial mobilitet. Dra-faktorer (årsaker til å reise til Amerika): 1) Billig/gratis jord - Homestead Act ga jord til de som dyrket den. 2) Høyere lønninger - bedre betalt for arbeid. 3) Frihet - religiøs toleranse, ingen adel, demokrati. 4) Amerikaletter - brev fra slektninger som lokket. 5) Eventyr og muligheter - "the American Dream". 6) Etablerte norske miljøer - lettere å komme til der landsmenn allerede bodde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-4-text-3',
      type: 'text',
      content: `## Reisen og livet i Amerika

Atlanterhavsreisen var lang og farlig. Før dampskipene tok seilskip 6-12 uker. Med dampskip (fra 1860-tallet) tok reisen 2-3 uker. Forholdene om bord var trange og uhygieniske, og mange ble syke.

**I Amerika** ventet hardt arbeid. De fleste ble bønder i Midtvesten, der de ryddet prærien og dyrket hvete. Vintrene var kalde, og ensomheten på prærien kunne være knugende.

Nordmennene bevarte norsk kultur i generasjoner:
- Norske kirker (særlig lutherske) var samlingspunkter
- Norskspråklige aviser som "Decorah-Posten"
- Norske foreninger og stevner
- Norsk mat og tradisjoner

Samtidig ble de amerikanisert - barna snakket engelsk, tok amerikanske skikker, og ble amerikanske statsborgere.`,
    },
    {
      id: 'historie-8-4-example-1',
      type: 'example',
      title: 'Amerikaletter - vinduet mot den nye verden',
      content: `**Amerikaletter** var brev fra utvandrere til familie og venner hjemme i Norge. Disse brevene var ekstremt viktige for å spre informasjon om Amerika.

Brevene fortalte om:
- Høye lønninger og lave priser
- Gratis eller billig jord
- Frihet og likhet - ingen "høyheter" å bøye nakken for
- Muligheter for å lykkes

Mange brev ble lest høyt i lag og foreninger, og spredte seg som rykter. De malte ofte et glansbilde av Amerika - ulempene ble tonet ned, suksessene fremhevet.

**Eksempel fra et brev (1850):**
"Her spiser vi kjøtt tre ganger om dagen og hvetebrød til hver måltid. Arbeideren spiser ved samme bord som husbonden..."

Amerikalettene var kanskje den viktigste enkeltfaktoren som drev utvandringen. De skapte en kjedereaksjon der brev lokket slektninger, som så sendte nye brev hjem.`,
    },
    {
      id: 'historie-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-8-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan påvirket "amerikalettene" utvandringen fra Norge?',
        solution: 'Amerikalettenes betydning: 1) Spredning av informasjon: Brevene fortalte om forholdene i Amerika på en tid uten massemedier. 2) Lokking: De beskrev høye lønninger, billig jord, frihet og muligheter - ofte i glansbilder. 3) Kjedereaksjon: Brev lokket slektninger, som så sendte nye brev hjem. 4) Troverdighet: Brevene kom fra folk man kjente og stolte på. 5) Sosial spredning: Brevene ble lest høyt i lag og foreninger, og spredte seg som rykter. 6) Konkrete råd: Brevene ga praktisk informasjon om reisen og etablering. 7) Billetter: Mange utvandrere sendte penger eller billetter til slektninger ("prepaid tickets"). Amerikalettene skapte et bilde av Amerika som "mulighetenes land" og var kanskje den viktigste enkeltfaktoren bak utvandringen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-8-4-text-4',
      type: 'text',
      content: `## Utvandringens konsekvenser

**For Norge:**
- Befolkningspresset lettet - det ble mer jord til de som ble igjen
- Mange bygder mistet unge, arbeidsføre mennesker
- Penger strømmet tilbake - utvandrere sendte penger til familien
- Kontakt med Amerika påvirket norsk kultur og politikk
- Demokratiske ideer ble importert

**For USA:**
- Nordmennene bidro til å bygge Midtvesten - dyrket prærien, bygde byer
- Kulturelt mangfold - norsk arv er fortsatt synlig i Midtvesten
- Mange norskamerikanere har gjort seg bemerket

**Arven:**
I dag bor det ca. 4,5 millioner mennesker av norsk avstamning i USA - nesten like mange som i Norge. Mange norskamerikanere holder fortsatt kontakt med norsk kultur og besøker "gamlelandet".`,
    },
    {
      id: 'historie-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-8-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke konsekvenser fikk den store utvandringen for Norge og for norskamerikanerne?',
        solution: 'Konsekvenser for Norge: 1) Befolkningspresset lettet - mer jord til de som ble. 2) Bygder mistet unge, arbeidsføre folk - avfolkning. 3) Pengestrøm tilbake - utvandrere sendte penger hjem. 4) Kulturpåvirkning - amerikanske ideer ble importert. 5) Demokratisering - utvandringen styrket krav om reformer for å holde folk hjemme. Konsekvenser for USA/norskamerikanerne: 1) Bidro til å bygge Midtvesten - dyrket prærie, bygde byer. 2) Bevarte norsk kultur i generasjoner - kirker, aviser, foreninger. 3) Gradvis amerikanisering - barna ble amerikanere. 4) Sosial mobilitet - mange fikk bedre liv enn de ville fått i Norge. 5) I dag: Ca. 4,5 millioner av norsk avstamning i USA. Arven lever i stedsnavn, tradisjoner (lutefisk, rosemaling), og kontakt med Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummeringsoppgaver ---
    {
      id: 'historie-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-8-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft utvandringen fra Norge i sammenheng med dagens innvandring til Norge. Hvilke likheter og forskjeller ser du mellom de som utvandret på 1800-tallet og de som innvandrer til Norge i dag?',
        solution: 'Likheter mellom utvandring da og innvandring nå: 1) Skyve-faktorer: Fattigdom, mangel på muligheter, konflikter driver folk til å forlate hjemlandet - da som nå. 2) Dra-faktorer: Håp om bedre liv, jobb, frihet trekker folk til nye land. 3) Kjedereaksjon: Brev da, sosiale medier nå - informasjon fra folk som har reist lokker flere. 4) Tøff overgang: Integrering tar tid - språk, kultur, tilpasning. 5) Bevaring av kultur: Utvandrerne holdt på norsk kultur, innvandrere holder på sin. 6) Neste generasjon: Barna blir mer integrert enn foreldrene. Forskjeller: 1) Avstand: Atlanterhavet var lengre da - nå er verden "mindre". 2) Kommunikasjon: Vanskelig å holde kontakt da, enkelt nå. 3) Retning: Norge gikk fra utvandringsland til innvandringsland. 4) Kontekst: Norske utvandrere kom til nybyggersamfunn, innvandrere til etablert velferdsstat. Lærdommen er at migrasjon er et evig menneskelg fenomen. Våre forfedre var også migranter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const HISTORIE_CHAPTERS_DEL2 = [
  CHAPTER_HISTORIE_5_1,
  CHAPTER_HISTORIE_5_2,
  CHAPTER_HISTORIE_5_3,
  CHAPTER_HISTORIE_5_4,
  CHAPTER_HISTORIE_6_1,
  CHAPTER_HISTORIE_6_2,
  CHAPTER_HISTORIE_6_3,
  CHAPTER_HISTORIE_6_4,
  CHAPTER_HISTORIE_7_1,
  CHAPTER_HISTORIE_7_2,
  CHAPTER_HISTORIE_7_3,
  CHAPTER_HISTORIE_7_4,
  CHAPTER_HISTORIE_8_1,
  CHAPTER_HISTORIE_8_2,
  CHAPTER_HISTORIE_8_3,
  CHAPTER_HISTORIE_8_4,
];
