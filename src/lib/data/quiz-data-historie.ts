import type { QuizQuestion } from './quiz-data';

const quizData_historie: Record<string, QuizQuestion[]> = {
  "historie-forhistorie-1": [
    {
      question: "Hva er kjernen i \"Out of Africa\"-teorien?",
      options: ["Alle moderne mennesker stammer fra en felles populasjon som levde i Afrika", "Alle moderne mennesker stammer fra en felles populasjon som levde i Asia", "Mennesket utviklet seg samtidig og uavhengig i flere ulike verdensdeler", "Moderne mennesker nedstammer fra neandertalerne som oppsto i Europa"],
      explanation: "Out of Africa-teorien hevder at Homo sapiens oppsto i Afrika og at grupper derfra spredte seg over hele kloden. DNA-studier viser at alle mennesker har afrikansk opprinnelse.",
    },
    {
      question: "Hvilken menneskeart var først til å forlate Afrika?",
      options: ["Homo erectus", "Homo sapiens", "Australopithecus", "Neandertaleren"],
      explanation: "Homo erectus (ca. 1,9 mill.--100 000 år siden) var den første hominiden som forlot Afrika, brukte avanserte steinredskaper og kontrollerte ild.",
    },
    {
      question: "Hva kjennetegnet jeger-sanker-samfunnene?",
      options: ["Små, nomadiske grupper med lite sosial lagdeling", "Samfunn basert på dyrking av korn og husdyrhold", "Tettbygde bysamfunn med spesialiserte håndverkere og livlig handel", "Store bofaste landsbyer med tydelige ledere"],
      explanation: "Jeger-sankere levde i små flokker på 20--50 personer, fulgte byttedyrene, og hadde egalitære samfunn uten formelle ledere med makt.",
    },
    {
      question: "Hvilke kulturer regnes som de eldste kjente i Norge?",
      options: ["Fosna- og Komsa-kulturen","Traktbegerkulturen og stridsøkskulturen","Sumer og Akkad i Mesopotamia","Lascaux- og Altamira-kulturen"],
      explanation: "Fosna-kulturen (Vestlandet) og Komsa-kulturen (Nord-Norge) er de eldste kjente kulturene i Norge, ca. 9500--8000 f.Kr., da isen trakk seg tilbake.",
    },
    {
      question: "Hva forteller hulemaleriene som Chauvet og Lascaux oss om datidens mennesker?",
      options: ["At de hadde abstrakt og symbolsk tenkning", "At de allerede drev organisert jordbruk", "At de bygde permanente bysamfunn med murhus og gater rundt hulene", "At de hadde utviklet skriftspråk"],
      explanation: "Hulemaleriene viser at mennesker for titusenvis av år siden hadde evnen til å tenke abstrakt, representere virkeligheten gjennom bilder og skape mening.",
    },
  ],
  "historie-forhistorie-2": [
    {
      question: "Hva menes med den neolittiske revolusjon?",
      options: ["Overgangen fra jeger-sanker-liv til jordbruk", "Oppfinnelsen av skriftspråket i Mesopotamia", "Overgangen fra bronse til jern som redskapsmateriale", "De første byenes fall og samfunnskollaps"],
      explanation: "Den neolittiske revolusjon er overgangen fra jeger-sanker-livsstil til jordbruk, da mennesker begynte å dyrke planter og holde husdyr.",
    },
    {
      question: "Hvor begynte jordbruket først?",
      options: ["I Den fruktbare halvmåne i Midtøsten, ca. 10 000 f.Kr.", "I Mellom-Amerika, ca. 5000 f.Kr.", "I det gamle Egypt langs Nilen, allerede rundt 12 000 f.Kr.", "I det østlige Kina langs Den gule floden, ca. 15 000 f.Kr."],
      explanation: "Den fruktbare halvmåne i Midtøsten er det tidligste kjente jordbruksområdet (ca. 10 000 f.Kr.). Jordbruket oppsto senere uavhengig flere andre steder.",
    },
    {
      question: "Hvilken konsekvens fikk overgangen til jordbruk?",
      options: ["Bofasthet, befolkningsvekst og sterkere sosial lagdeling","Slutt på all sosial ulikhet, slik at alle eide like mye jord","Slutt på all sosial ulikhet og likere fordeling av mat mellom alle","Mindre befolkning, mer nomadisk livsstil og flatere sosial struktur"],
      explanation: "Jordbruket ga bofasthet, matoverskudd og befolkningsvekst, men også sosial lagdeling, nye sykdommer og ofte mer ensidig kost enn jeger-sanker-livet.",
    },
    {
      question: "Hva var Catalhoyuk?",
      options: ["En tidlig bosetting i dagens Tyrkia, bygd tett uten gater", "Den første jordbrukskulturen i Skandinavia", "En mektig gresk bystat fra antikken med demokrati og bymurer", "Et stort megalittisk gravanlegg med steinkammer i dagens Danmark"],
      explanation: "Catalhoyuk (ca. 7500--5700 f.Kr.) var en stor bosetting i dagens Tyrkia der husene var bygd tett i tett uten gater -- man gikk på takene.",
    },
    {
      question: "Hvilken kultur brakte jordbruket til Skandinavia?",
      options: ["Traktbegerkulturen", "Stridsøkskulturen", "Komsa-kulturen langs iskanten", "Komsa-kulturen"],
      explanation: "Traktbegerkulturen (ca. 4000--2800 f.Kr.) var den første jordbrukskulturen i Skandinavia, kjent for megalittgraver og keramikk med traktformet munning.",
    },
  ],
  "historie-1-1": [
    {
      question: "Hva er historie som fag?",
      options: ["Vitenskapen om fortiden og menneskelige samfunn gjennom tidene", "Studiet av naturens lover gjennom eksperimenter", "Læren om hvordan menneskets språk har oppstått og endret seg over tid", "Vitenskapen om naturens lover undersøkt gjennom gjentatte eksperimenter"],
      explanation: "Historie er vitenskapen om fortiden. Faget undersøker menneskelige samfunn, kulturer og hendelser, og forsøker å forstå hvorfor ting skjedde.",
    },
    {
      question: "Hva betyr historiografi?",
      options: ["Hvordan historie blir skrevet og tolket", "Innsamling av arkeologiske gjenstander", "Selve hendelsene og handlingene som fant sted i fortiden", "Dateringen av historiske kilder"],
      explanation: "Historiografi betyr \"historieskriving\" og handler om hvordan historie blir skrevet og tolket, og hvordan historikeres syn har endret seg over tid.",
    },
    {
      question: "Hva innebærer historiebevissthet?",
      options: ["Forståelse av sammenhengen mellom fortid, nåtid og fremtid", "Evnen til å huske mange årstall utenat", "Oppfatningen om at fortiden ikke lenger påvirker vår nåtid", "Grundig kunnskap om kun ett enkelt lands nasjonale historie"],
      explanation: "Historiebevissthet er forståelsen av at fortiden har formet nåtiden, at nåtiden påvirker hvordan vi forstår fortiden, og at handlinger i dag former fremtiden.",
    },
    {
      question: "Hvorfor skiller historiefaget seg fra naturvitenskap?",
      options: ["Vi kan ikke gjenta fortiden for å teste teoriene våre","Historikere bruker aldri systematiske metoder når de tolker kilder","Historie bygger ikke på noen form for bevis, bare på synsing","Naturvitenskap handler aldri om årsaker, kun om beskrivelser"],
      explanation: "I motsetning til naturvitenskap kan vi aldri gjenta fortiden for å teste teoriene. Historikere må tolke bevis fra fortiden uten å kunne gjenta eksperimentet.",
    },
    {
      question: "Hvilket av disse er et hovedspørsmål i historiefaget?",
      options: ["Hvorfor skjedde det, og hva ble konsekvensene?","Hvilke kjemiske stoffer består fortiden av?","Hvordan blir neste års vær og klima?","Hvem i fortiden fortjener mest sympati?"],
      explanation: "Historiefagets hovedspørsmål er hva som skjedde og når, hvorfor det skjedde, hva konsekvensene ble, og hvordan dette påvirker oss i dag.",
    },
  ],
  "historie-1-2": [
    {
      question: "Hva er forskjellen mellom en primærkilde og en sekundærkilde?",
      options: ["Primærkilder er fra tiden man studerer, sekundærkilder er bearbeidede framstillinger laget i ettertid", "Primærkilder er alltid skriftlige dokumenter, mens sekundærkilder alltid er muntlige overleveringer", "Primærkilder er alltid offentlige dokumenter fra staten, mens sekundærkilder er private brev og dagbøker", "Primærkilder er alltid mer pålitelige og sanne enn sekundærkilder, uansett hvem som har laget dem"],
      explanation: "Primærkilder er førstehåndsberetninger fra tiden man studerer (dagbøker, brev, foto), mens sekundærkilder er tolkninger og analyser laget i ettertid (historiebøker).",
    },
    {
      question: "Hva er hovedformålet med kildekritikk?",
      options: ["Å vurdere kildens troverdighet og brukbarhet", "Å avgjøre om kilden støtter forskerens hypotese", "Å fastslå hvor gammel kilden er", "Å finne flest mulig kilder uansett kvalitet"],
      explanation: "Kildekritikk er systematisk vurdering av en kildes troverdighet og brukbarhet for å forstå fortiden.",
    },
    {
      question: "Hva er forskjellen mellom en levning og en beretning?",
      options: ["En levning er et direkte spor fra fortiden, en beretning forteller om noe","En levning er framstillingen historikeren skriver i ettertid, mens en beretning er selve gjenstanden fra fortiden","En levning er alltid en skriftlig tekst, mens en beretning alltid er muntlig fortalt","En levning stammer alltid fra middelalderen, mens en beretning stammer fra nyere tid"],
      explanation: "En levning er et direkte spor fra fortiden (en gjenstand, en bygning), mens en beretning er en kilde som forteller om noe (en dagbok, et vitnesbyrd).",
    },
    {
      question: "Hvilket spørsmål hører til kildekritikkens vurdering av opphav?",
      options: ["Hvem har laget kilden, og hadde vedkommende noe å vinne eller tape?", "Hvor lang kilden er, og hvor mange sider den strekker seg over?", "Hvilket bibliotek eller arkiv som oppbevarer originalen av kilden nå?", "Hvor mange eksemplarer og avskrifter som finnes bevart av kilden i dag?"],
      explanation: "Vurdering av opphav handler om hvem som står bak kilden, hvilken bakgrunn og posisjon personen hadde, og om vedkommende hadde noe å vinne eller tape.",
    },
    {
      question: "Hvorfor er det viktig å sjekke om en kilde støttes av andre kilder?",
      options: ["Samsvar mellom flere kilder styrker troverdigheten", "Det avgjør automatisk om kilden er en primærkilde", "Antall kilder er helt uten betydning for hva som er sant", "Bare kilder som motsier hverandre er troverdige"],
      explanation: "Samsvar er et av kildekritikkens hovedspørsmål: hvis flere uavhengige kilder bekrefter det samme, styrkes troverdigheten, mens motstridende informasjon krever nærmere vurdering.",
    },
  ],
  "historie-1-3": [
    {
      question: "Hva betyr periodisering i historiefaget?",
      options: ["Å dele den lange fortiden inn i mindre epoker eller perioder","Å datere hver enkelt historisk kilde så nøyaktig som mulig","Å samle alle hendelser i én tidslinje uten inndeling","Å regne om alle årstall til vår egen tidsregning"],
      explanation: "Periodisering er å dele historien inn i mindre perioder eller epoker for å gjøre den oversiktlig og lettere å forstå og kommunisere om.",
    },
    {
      question: "Hvorfor må vi være kritiske til periodisering?",
      options: ["Periodegrensene er menneskeskapte og omstridte", "Periodisering er forbudt i moderne historieforskning", "Alle land bruker nøyaktig de samme grensene", "Periodene er fastlagt av naturlover"],
      explanation: "Periodisering er menneskeskapt -- historien \"vet\" ikke at en epoke sluttet et bestemt år. Grensene er omstridte og varierer mellom land og kulturer.",
    },
    {
      question: "Når regnes antikken tradisjonelt for å slutte?",
      options: ["Med Vestromerrikets fall (476 e.Kr.)", "Med renessansens begynnelse (ca. 1400)", "Med den franske revolusjon (1789)", "Med oppdagelsen av Amerika (1492)"],
      explanation: "Antikken (ca. 3000 f.Kr.--500 e.Kr.) regnes tradisjonelt for å slutte med Vestromerrikets fall i 476, som markerer overgangen til middelalderen.",
    },
    {
      question: "Hvilken periode dekker den norske \"dansketiden\"?",
      options: ["1537--1814", "1814--1905", "1050--1537", "1905--i dag"],
      explanation: "Dansketiden (1537--1814) var perioden da Norge var under dansk styre, med reformasjonen i 1537 og eneveldet fra 1660.",
    },
    {
      question: "Hva kjennetegner tidlig moderne tid (ca. 1500--1800)?",
      options: ["Renessanse, reformasjon, opplysningstid og de store oppdagelsene","Jeger-sankernes vandringer før jordbruket oppsto","De første høykulturene langs elvene i Egypt og Mesopotamia","Føydalsamfunn, riddervesen og kirkens åndelige dominans"],
      explanation: "Tidlig moderne tid (ca. 1500--1800) omfatter renessanse, reformasjon og opplysningstid, samt de store oppdagelsene og tidlig kolonialisme.",
    },
  ],
  "historie-1-4": [
    {
      question: "Hva menes med historiebruk?",
      options: ["Hvordan fortiden brukes i nåtiden av ulike aktører med ulike formål", "Den kronologiske rekkefølgen hendelsene i fortiden fant sted i", "Innsamling og bevaring av historiske gjenstander til museer og arkiver", "Den nøyaktige dateringen av arkeologiske funn og gjenstander"],
      explanation: "Historiebruk handler om hvordan fortiden brukes i nåtiden -- vitenskapelig, politisk, kommersielt eller privat -- av ulike aktører og med ulike formål.",
    },
    {
      question: "Hva er historiemisbruk?",
      options: ["Når fortiden bevisst fordreies eller manipuleres for å tjene bestemte formål", "All kommersiell bruk av historiske temaer i filmer, spill og reklame", "Situasjoner der historikere er uenige om tolkningen av en hendelse", "Å bruke historiske kilder og folketellinger til slektsforskning"],
      explanation: "Historiemisbruk oppstår når fortiden bevisst fordreies eller manipuleres -- gjennom selektiv bruk av fakta, overdrivelse eller falske påstander -- for å tjene bestemte formål.",
    },
    {
      question: "Hvilket av disse er et eksempel på historiemisbruk?",
      options: ["Holocaustfornektelse", "Akademisk forskning åpen for revisjon", "Slektsforskning om egen familie", "En kildekritisk lærebok"],
      explanation: "Holocaustfornektelse er et tydelig eksempel på historiemisbruk, der historiske fakta benektes eller forvrenges for bestemte formål.",
    },
    {
      question: "Hva kjennetegner vitenskapelig historiebruk?",
      options: ["Den er kritisk, kildebasert og åpen for revisjon", "Den brukes for å legitimere politisk makt", "Den unngår alltid å bruke kilder og bygger kun på minner", "Den er først og fremst underholdning uten faglig ambisjon"],
      explanation: "Vitenskapelig historiebruk er akademisk forskning for å forstå fortiden -- kritisk, kildebasert og åpen for revisjon når ny kunnskap kommer fram.",
    },
    {
      question: "Hvorfor er historiemisbruk farlig?",
      options: ["Det kan rettferdiggjøre overgrep og skape konflikter basert på falske minner", "Det gjør historiefaget altfor vanskelig og teknisk for folk flest", "Det fører til at altfor mange kilder blir bevart i arkivene", "Det har egentlig ingen reelle konsekvenser for samfunnet"],
      explanation: "Historiemisbruk er farlig fordi det kan brukes til å rettferdiggjøre overgrep, undergrave tillit til kunnskap og skape konflikter basert på falske minner.",
    },
  ],
  "historie-2-1": [
    {
      question: "Hva kjennetegner en god problemstilling i historiefaget?",
      options: ["Den er avgrenset, undersøkbar, åpen og relevant","Den er formulert som et ja/nei-spørsmål med ett opplagt svar","Den er så vid og altomfattende som overhodet mulig","Den krever ingen kilder for å kunne besvares grundig"],
      explanation: "En god problemstilling er avgrenset (ikke for vid), undersøkbar (mulig å finne kilder til), åpen (ikke ja/nei) og relevant.",
    },
    {
      question: "Hva er det første steget i en historisk undersøkelse?",
      options: ["Å velge tema og formulere en problemstilling", "Å kaste alle kilder som ikke passer", "Å presentere de ferdige funnene og konklusjonene for andre", "Å konkludere før kildene er lest"],
      explanation: "Det første steget er å velge tema og formulere en presis problemstilling som styrer undersøkelsen. Deretter finner og analyserer man kilder.",
    },
    {
      question: "Hvilken av disse er en god, avgrenset problemstilling?",
      options: ["Hvilken betydning hadde svartedauden for lønninger for engelske bønder 1350--1400?", "Var fortiden i det store og hele en interessant tid å leve i?", "Hvordan var egentlig hele middelalderen i Europa og verden?", "Hva er historie, og hvorfor bør vi bry oss om den i dag?"],
      explanation: "En god problemstilling er presis og avgrenset i tid, sted og tema. \"Hvordan var middelalderen?\" er altfor vidt til å kunne undersøkes systematisk.",
    },
    {
      question: "Hvor kan en historiker finne primærkilder?",
      options: ["I arkiver som Riksarkivet og Digitalarkivet","Kun i lærebøker skrevet av historikere i vår egen tid","Utelukkende på sosiale medier og nettsteder på internett","Kun i skjønnlitterære romaner og historiske fortellinger"],
      explanation: "Arkiver (Riksarkivet, statsarkivene, Digitalarkivet), biblioteker og museer er sentrale steder for å finne primærkilder til en historisk undersøkelse.",
    },
    {
      question: "Hvorfor må en historiker gjøre et kildeutvalg?",
      options: ["Man kan ikke lese alt og må velge kilder relevante for problemstillingen", "Et utvalg gjør alltid undersøkelsen mindre troverdig og pålitelig", "Det finnes alltid bare én eneste kilde til hvert historiske tema", "Det er forbudt å bruke flere kilder samtidig i én undersøkelse"],
      explanation: "Man kan ikke lese alt, så man må velge kilder som er relevante for problemstillingen, dokumentere valgene og være åpen om hva man ikke har undersøkt.",
    },
  ],
  "historie-2-2": [
    {
      question: "Hvorfor kan samme historiske hendelse framstilles på ulike måter?",
      options: ["Ulike kilder, spørsmål, bakgrunn og verdier påvirker framstillingen","Fordi historikere som regel finner på fakta som passer deres syn","Fordi det bare finnes én eneste riktig framstilling","Fordi myndighetene godkjenner hver framstilling"],
      explanation: "Framstillinger varierer fordi ulike kilder gir ulik informasjon, historikere stiller ulike spørsmål, og politisk og kulturell bakgrunn samt samfunnets verdier påvirker.",
    },
    {
      question: "Hva menes med et \"nedenfra-perspektiv\" i historie?",
      options: ["Historie sett fra vanlige folk, arbeidere, kvinner og barn","Historie fortalt utelukkende gjennom statistikk og tallmateriale","Historie sett fra konger, keisere og andre mektige makthavere","Historie som utelukkende er skrevet av utenlandske forfattere"],
      explanation: "Et nedenfra-perspektiv ser hendelsene fra vanlige folks ståsted -- arbeidere, kvinner, barn -- i motsetning til ovenfra-perspektivet som ser fra makthavernes side.",
    },
    {
      question: "Hva kjennetegner sosialhistorie?",
      options: ["Fokus på samfunnsgrupper og strukturer", "Fokus på kriger og diplomati mellom stater", "Fokus utelukkende på kongers liv", "Fokus på naturvitenskapelige lover"],
      explanation: "Sosialhistorie fokuserer på samfunnsgrupper og strukturer, mens politisk historie fokuserer på stater, kriger og diplomati, og kulturhistorie på verdier og hverdagsliv.",
    },
    {
      question: "Hva bør man se etter når man sammenligner historiske framstillinger?",
      options: ["Utvalg av fakta, ordvalg og tone, årsaksforklaringer og kontekst", "Kun hvor lang selve teksten er, og hvor mange sider den fyller", "Bare hvilket år teksten ble trykt, og hvilket forlag som ga den ut", "Utelukkende forfatterens alder og utdanning da teksten ble skrevet"],
      explanation: "Når man sammenligner framstillinger ser man på utvalg av fakta, ordvalg og tone, hvilke årsaksforklaringer som gis, og i hvilken kontekst framstillingen ble laget.",
    },
    {
      question: "Er noen historiske perspektiver \"riktigere\" enn andre?",
      options: ["Nei, ulike perspektiver belyser ulike sider av fortiden", "Ja, perspektivet med flest tilhengere er sant", "Ja, kun de nyeste framstillingene av fortiden regnes som korrekte", "Ja, det perspektivet som har flest tilhengere er alltid det sanne"],
      explanation: "Ingen perspektiv er i seg selv \"riktigere\" enn andre -- de belyser ulike sider av fortiden. Å sammenligne flere perspektiver gir et rikere bilde.",
    },
  ],
  "historie-2-3": [
    {
      question: "Hva menes med brudd (diskontinuitet) i historien?",
      options: ["Dramatiske endringer som bryter med det som var før","Små, gradvise justeringer som samtiden knapt legger merke til","Selve nedskrivingen og bevaringen av historiske hendelser i kilder","Det som fortsetter tilnærmet uendret over svært lang tid i historien"],
      explanation: "Brudd er dramatiske endringer som bryter med det som var før, som revolusjoner, kriger som endrer maktforhold, teknologiske gjennombrudd eller pandemier.",
    },
    {
      question: "Hva er kontinuitet i historien?",
      options: ["Det som fortsetter på tross av endringer, som språk og tradisjoner","En type primærkilde som forteller direkte om hendelser i sin egen samtid","At alt i et samfunn forandrer seg samtidig og i nøyaktig samme tempo","Bare de mest dramatiske vendepunktene og bruddene som endrer maktforhold"],
      explanation: "Kontinuitet er det som varer ved på tross av endringer -- kulturelle tradisjoner, språk, religion, sosiale strukturer og geografiske forhold.",
    },
    {
      question: "Hvorfor kan brudd og kontinuitet skje samtidig?",
      options: ["Store brudd på ett område kan skje samtidig med kontinuitet på andre","Fordi et samfunn bare kan endre seg på ett område om gangen, aldri på flere","Fordi alt på alle samfunnsområder alltid endrer seg helt likt overalt","Fordi brudd og kontinuitet i praksis betyr nøyaktig det samme i historien"],
      explanation: "Den franske revolusjon endret politikken radikalt (brudd), men bøndenes dagligliv endret seg mye saktere (kontinuitet). Endring skjer i ulikt tempo på ulike områder.",
    },
    {
      question: "I hvilket tempo endrer strukturer som mentaliteter og klima seg?",
      options: ["Over århundrer, ofte usynlig for samtiden", "I løpet av et enkelt slag eller en traktat", "I løpet av noen få dager", "De endrer seg aldri"],
      explanation: "Strukturer (mentaliteter, klima, geografiske forhold) endres over århundrer og er ofte usynlige for samtiden, i motsetning til hendelser som skjer raskt.",
    },
    {
      question: "Hvilket av disse er et eksempel på en kortvarig hendelse?",
      options: ["Et slag eller en traktat", "Urbaniseringen over hundre år", "Overgangen fra jordbruks- til industrisamfunn", "Et språks utvikling"],
      explanation: "Hendelser (kort tid) er slag, traktater og attentater -- synlige og dramatiske. Konjunkturer varer i tiår, mens strukturer endres over århundrer.",
    },
  ],
  "historie-2-4": [
    {
      question: "Hva er minnekultur?",
      options: ["Måten et samfunn husker og markerer fortiden på","Den vitenskapelige dateringen av kilder","En bevisst metode for å glemme fortiden","Reglene for hvordan arkiver skal ordnes"],
      explanation: "Minnekultur (kollektiv erindring) er måten et samfunn husker og markerer fortiden -- gjennom monumenter, minnedager, museer og fortellinger.",
    },
    {
      question: "Hvilket av disse er en form for fysisk minnesmerke?",
      options: ["Statuer og monumenter", "Nasjonaldager som 17. mai", "Lokale sagn og fortellinger", "Skolens lærebøker"],
      explanation: "Fysiske minnesmerker er statuer, monumenter, gravsteder og historiske bygninger. Minnedager er tidsmessige markeringer, mens sagn er narrative former.",
    },
    {
      question: "Hva kjennetegner nasjonalt minne?",
      options: ["En felles historieforståelse som binder en nasjon sammen","Bare stedsspesifikke historier fra én enkelt bygd eller grend","Historie som ingen i samfunnet lenger husker eller markerer på noe vis","Utelukkende privat familiehistorie fortalt videre gjennom generasjoner"],
      explanation: "Nasjonalt minne er den felles historieforståelsen som binder en nasjon sammen, som grunnleggende myter (1814, 1905, 1945) og nasjonale helter.",
    },
    {
      question: "Hvorfor kan lokalt minne utfordre nasjonalt minne?",
      options: ["Lokal historie kan nyansere eller motsi den nasjonale fortellingen", "Nasjonalt minne står fast og kan aldri diskuteres eller nyanseres", "Lokalt minne finnes ikke, siden all historie er felles og nasjonal", "Lokalt minne er alltid fullstendig identisk med det nasjonale minnet"],
      explanation: "Lokal historie kan utfordre eller nyansere nasjonal historie. Norsk krigshistorie ser for eksempel annerledes ut fra et samisk perspektiv eller fra Nord-Norge.",
    },
    {
      question: "Hva menes med marginaliserte minner?",
      options: ["Gruppers historie som har blitt glemt eller undertrykt", "Historie som er overdrevet i lærebøker", "De offisielle statlige minnedagene som staten har vedtatt og fastsatt", "Minner som hele befolkningen deler helt likt og markerer på samme måte"],
      explanation: "Marginaliserte minner er gruppers historie som har blitt glemt eller undertrykt, som samer, romanifolk, kvinner og arbeiderklassen.",
    },
  ],
  "historie-2-5": [
    {
      question: "Hva kjennetegner en god fagtekst i historie?",
      options: ["Klar problemstilling, logisk oppbygging, kildebruk og balansert framstilling", "Ren gjengivelse av løsrevne fakta og årstall uten refleksjon eller analyse", "Fravær av struktur, presise fagbegreper og en gjennomtenkt problemstilling", "Mange sterke personlige meninger presentert helt uten kilder eller belegg"],
      explanation: "En god fagtekst har klar problemstilling, logisk oppbygging, bruk av relevante kilder, presise fagbegreper, balansert framstilling og egne refleksjoner.",
    },
    {
      question: "Hva betyr det å drøfte et historisk spørsmål?",
      options: ["Å belyse spørsmålet fra flere sider og veie argumentene mot hverandre", "Å liste opp så mange løsrevne fakta og årstall som overhodet mulig", "Å gjengi en historisk kilde ordrett uten egen tolkning eller vurdering", "Å argumentere ensidig for kun ett synspunkt uten å vurdere motargumenter"],
      explanation: "Å drøfte betyr å belyse et spørsmål fra flere sider og veie argumentene mot hverandre for å komme fram til en begrunnet konklusjon -- ikke bare liste opp argumenter.",
    },
    {
      question: "Hva står PBE-modellen for?",
      options: ["Påstand -- Begrunnelse -- Eksempel", "Primær -- Beretning -- Erindring", "Periode -- Brudd -- Endring", "Problemstilling -- Bevis -- Etterord"],
      explanation: "PBE-modellen står for Påstand (hva du hevder), Begrunnelse (hvorfor) og Eksempel (konkret historisk bevis som støtter påstanden).",
    },
    {
      question: "Hva er forskjellen mellom et sitat og en parafrase?",
      options: ["Et sitat gjengir ordrett, en parafrase gjengir innholdet med egne ord","Et sitat krever kildehenvisning, mens en parafrase kan brukes fritt uten","Det finnes ingen reell forskjell på et sitat og en parafrase i fagtekster","Et sitat er alltid usant, mens en parafrase alltid gjengir det som er sant"],
      explanation: "Et direkte sitat gjengir nøyaktig det kilden sier (med anførselstegn), mens en parafrase gjengir innholdet med egne ord -- men begge krever kildehenvisning.",
    },
    {
      question: "Hvordan bør en avslutning i en historisk fagtekst se ut?",
      options: ["Den oppsummerer hovedpoengene og svarer på problemstillingen", "Den introduserer helt nye poenger og argumenter", "Den utelater enhver konklusjon og lar leseren stå igjen uten noe svar", "Den introduserer helt nye poenger og argumenter som ikke er drøftet før"],
      explanation: "Avslutningen bør oppsummere de viktigste poengene, svare på problemstillingen og løfte blikket -- uten å introdusere helt nye poenger.",
    },
  ],
  "historie-2-6": [
    {
      question: "Hva er de tre klassiske appellformene i retorikk?",
      options: ["Etos, patos og logos", "Primær, sekundær og tertiær", "Innledning, hoveddel og avslutning", "Brudd, kontinuitet og endring"],
      explanation: "De tre klassiske appellformene er etos (troverdighet), patos (følelser) og logos (logikk). I historie bygger etos på korrekt bruk av kilder og fagbegreper.",
    },
    {
      question: "Hva innebærer historisk empati?",
      options: ["Å sette seg inn i hvordan fortidens mennesker tenkte ut fra sin tids forutsetninger", "Å unnskylde og rettferdiggjøre alle handlinger som ble begått i fortiden", "Å dømme fortidens mennesker utelukkende med dagens verdier og kunnskaper", "Å unngå å bruke kilder og heller stole på egen intuisjon om fortiden"],
      explanation: "Historisk empati er evnen til å forstå hvordan mennesker i fortiden tenkte og handlet ut fra sin tids forutsetninger -- ikke å unnskylde, men å forstå.",
    },
    {
      question: "Hva er presentisme, som man bør unngå?",
      options: ["Å bedømme fortiden utelukkende med nåtidens verdier", "Å sette hendelser i kronologisk rekkefølge", "Å bruke altfor mange primærkilder samtidig i en historisk framstilling", "Å holde en presentasjon for klassen"],
      explanation: "Presentisme er å bedømme fortiden utelukkende med nåtidens verdier. I stedet bør man anerkjenne at fortidens mennesker hadde andre kunnskaper og muligheter.",
    },
    {
      question: "Hva kjennetegner en god historisk debatt?",
      options: ["Argumentene baseres på historiske fakta og kilder, og man angriper argumenter, ikke personer", "Man unngår helt å bruke presist fagspråk og historiske fagbegreper i debatten", "Man bruker personlige angrep og karakteristikker for å vinne diskusjonen", "Man overser og ignorerer motpartens argumenter framfor å ta dem på alvor"],
      explanation: "I en god historisk debatt baseres argumentene på fakta og kilder, man lytter til motparten, angriper argumenter og ikke personer, og innrømmer gode poeng.",
    },
    {
      question: "Hva bør man gjøre når man lytter kritisk til en framstilling av historie?",
      options: ["Vurdere hvilke kilder som brukes og hvilke perspektiver som mangler","Bare vurdere om framstillingen er underholdende og lett å følge med på","Akseptere alt som blir sagt uten spørsmål, siden taleren framstår som ekspert","Ignorere framstillingens bruk av retoriske virkemidler og appell til følelser"],
      explanation: "Kritisk lytting innebærer å vurdere framstillingens budskap, hvilke kilder og bevis som brukes, hvilke perspektiver som mangler, og om den er balansert eller ensidig.",
    },
  ],
  "historie-3-1": [
    {
      question: "Hvor oppsto de første sivilisasjonene?",
      options: ["Langs de store elvene i Midtøsten og Nord-Afrika", "På øyene i Stillehavet", "Høyt oppe i Alpene der klimaet var mildest for tidlig bosetning", "På de spredte vulkanøyene ute i det åpne Stillehavet lengst i øst"],
      explanation: "De første sivilisasjonene oppsto langs store elver: Mesopotamia mellom Eufrat og Tigris, Egypt langs Nilen, Indusdalen og Kina langs Huang He.",
    },
    {
      question: "Hvilket folk oppfant kileskriften i Mesopotamia?",
      options: ["Sumererne", "Egypterne", "Romerne", "Grekerne"],
      explanation: "Sumererne i Mesopotamia oppfant kileskriften ca. 3200 f.Kr., et av verdens eldste skriftsystemer.",
    },
    {
      question: "Hva var Hammurabis lov?",
      options: ["En av verdens eldste skrevne lovsamlinger fra Babylon","Det egyptiske skriftsystemet med hieroglyfer på tempelvegger","En romersk handelsavtale som regulerte handelen rundt Middelhavet","En gresk styreform der frie borgere selv vedtok lover i forsamling"],
      explanation: "Hammurabis lovsamling (ca. 1750 f.Kr.) fra Babylon er en av verdens eldste lovsamlinger og et viktig eksempel på tidlig skreven rett.",
    },
    {
      question: "Hvilket kjennetegn må et samfunn ha for å kalles en sivilisasjon?",
      options: ["Byer, skrift, spesialisering og sentralisert styring", "Fravær av all sosial lagdeling", "Bare nomadiske jeger-sankere uten fast bosetning eller varige byer", "Fravær av enhver form for organisert religion eller felles gudstro"],
      explanation: "En sivilisasjon kjennetegnes av byer, skrift, arbeidsdeling/spesialisering, sosial lagdeling, organisert religion og sentralisert styring.",
    },
    {
      question: "Hvorfor må begrepet \"sivilisasjon\" brukes med varsomhet?",
      options: ["Det har vært misbrukt til å nedvurdere andre samfunn som \"usiviliserte\"", "Det gjelder kun for moderne industristater og ikke for eldre samfunn", "Det er utelukkende et religiøst begrep knyttet til tro på én bestemt gud", "Det betyr nøyaktig det samme som nomadisk levesett uten faste byer"],
      explanation: "Begrepet har vært misbrukt til å rangere og nedvurdere kulturer. Moderne historikere bruker det nøytralt for å beskrive en bestemt samfunnstype.",
    },
  ],
  "historie-3-2": [
    {
      question: "Hva betyr ordet demokrati?",
      options: ["Folkestyre", "Kongemakt", "Adelsstyre", "Prestestyre"],
      explanation: "Demokrati kommer fra gresk demos (folk) og kratos (styre), og betyr folkestyre. Det utviklet seg i Aten på 400-tallet f.Kr.",
    },
    {
      question: "Hvilken bystat regnes som demokratiets vugge?",
      options: ["Aten", "Sparta", "Korint", "Theben"],
      explanation: "Aten utviklet det første demokratiet, der mannlige borgere kunne delta og stemme i folkeforsamlingen (Ekklesia).",
    },
    {
      question: "Hva var folkeforsamlingen (Ekklesia) i Aten?",
      options: ["Forsamlingen der mannlige borgere vedtok lover og erklærte krig", "En domstol med profesjonelle dommere", "Et rådgivende råd av arvelige konger som styrte bystaten i fellesskap", "En egen forsamling opprettet kun for slaver og innflyttere i bystaten"],
      explanation: "Folkeforsamlingen (Ekklesia) var stedet der alle mannlige borgere over 18 år kunne delta, vedta lover, erklære krig og velge embetsmenn ved flertall.",
    },
    {
      question: "Hvem var utelukket fra det athenske demokratiet?",
      options: ["Kvinner, slaver og innflyttere (metoiker)", "Frie menn født av athenske foreldre", "De faste medlemmene av folkeforsamlingen som møtte og stemte jevnlig", "Medlemmer av folkeforsamlingen"],
      explanation: "Kvinner, slaver (30--40 % av befolkningen) og innflyttere hadde ingen politiske rettigheter. Bare frie menn født av athenske foreldre kunne delta.",
    },
    {
      question: "Hvorfor brukte athenerne loddtrekning til mange verv?",
      options: ["Det sikret at makten ble fordelt og ikke monopolisert av eliten","Det gjorde det mulig å velge de best kvalifiserte fagfolkene til hvert verv","Det var en langt raskere måte å fylle verv på enn omstendelige valg","Det ga de aller rikeste og mest innflytelsesrike borgerne mest makt"],
      explanation: "Loddtrekning var sentralt i Aten fordi det sikret at makten ble fordelt blant borgerne og ikke monopolisert av eliten, blant annet til Rådet (Boule) og domstolene.",
    },
  ],
  "historie-3-3": [
    {
      question: "Hvilke tre hovedfaser gikk Roma gjennom?",
      options: ["Kongedømme, republikk og keiserdømme", "Føydalisme, enevelde og republikk", "Selvstendig bystat, oversjøisk koloni og til sist romersk provins", "Demokrati, oligarki og tyranni"],
      explanation: "Roma utviklet seg fra kongedømme (753--509 f.Kr.) til republikk (509--27 f.Kr.) og deretter keiserdømme (27 f.Kr.--476 e.Kr.).",
    },
    {
      question: "Hva var senatet i den romerske republikken?",
      options: ["En forsamling av eldre adelsmenn med stor innflytelse","Folkeforsamlingen der alle romerske borgere hadde stemmerett","En domstol der medlemmene ble valgt ut ved loddtrekning hvert år","Keiserens personlige livvakt som beskyttet ham og holdt orden i Roma"],
      explanation: "Senatet var en forsamling av ca. 300 eldre adelsmenn med rådgivende makt, men stor innflytelse over finanser og utenrikspolitikk.",
    },
    {
      question: "Hvordan ble enkeltpersoners makt begrenset i republikken?",
      options: ["Gjennom kollegialitet (to konsuler) og ettårige verv", "Ved at folket aldri fikk stemme", "Ved at kun én enevoldskonge styrte staten alene og på livstid", "Ved at senatet ble helt avskaffet og all makt samlet hos konsulene"],
      explanation: "Makten var delt for å hindre tyranni: to konsuler (kollegialitet) som ledet sammen, og ettårige verv begrenset enkeltpersoners makt.",
    },
    {
      question: "Hva var Pax Romana?",
      options: ["En periode på ca. 200 år med relativ fred og stabilitet i Romerriket","Den årlige folkeforsamlingen der romerske borgere valgte to nye konsuler","En formell fredsavtale inngått mellom Roma og rivalen Kartago etter krig","Det romerske rettssystemet med lover som gjaldt i hele Middelhavsområdet"],
      explanation: "Pax Romana (Den romerske freden) var ca. 200 år med relativ fred og stabilitet (fra 27 f.Kr.) der handel og kultur blomstret og veier og byer ble bygget.",
    },
    {
      question: "Hvilke faktorer bidro til Vestromerrikets fall i 476?",
      options: ["Ytre press fra germanske folk, indre svakhet og militære problemer","At kristendommen alene, uten andre årsaker, gjorde riket ute av stand til å forsvare seg","Kun én enkelt naturkatastrofe som med ett rammet og la hele riket øde","At det romerske folket selv valgte å oppløse riket helt frivillig i 476"],
      explanation: "Mange faktorer bidro: ytre press fra germanske folk, indre svakhet (korrupsjon, økonomi), militære problemer med å forsvare grensene og politisk ustabilitet.",
    },
  ],
  "historie-3-4": [
    {
      question: "Hva er forskjellen mellom polyteisme og monoteisme?",
      options: ["Polyteisme er tro på mange guder, monoteisme tro på én gud", "Polyteisme er tro på én gud, monoteisme tro på mange", "Det finnes ingen reell forskjell mellom polyteisme og monoteisme", "Begge begrepene beskriver fullstendig fravær av religion og gudstro"],
      explanation: "Polyteisme er tro på mange guder (vanlig i antikke kulturer), mens monoteisme er tro på én gud, som oppsto med jødedommen.",
    },
    {
      question: "Med hvilken religion oppsto monoteismen?",
      options: ["Jødedommen", "Den greske religionen", "Den norrøne religionen", "Den egyptiske religionen"],
      explanation: "Monoteismen oppsto med jødedommen (ca. 1200 f.Kr.). Ideen om én universell Gud ble senere fundamentet for kristendom og islam.",
    },
    {
      question: "Hvem var Paulus i kristendommens tidlige historie?",
      options: ["Han spredte budskapet til ikke-jøder (hedninger)", "Han var den romerske keiseren som forfulgte kristne", "Han grunnla jødedommen", "Han skrev Hammurabis lov"],
      explanation: "Paulus var sentral i å spre det kristne budskapet til ikke-jøder (hedninger), noe som bidro til at kristendommen vokste fra en jødisk sekt til en verdensreligion.",
    },
    {
      question: "Hva skjedde under keiser Theodosius i 380?",
      options: ["Kristendommen ble statsreligion i Romerriket","Konstantins toleranseedikt ble opphevet","De kristne ble forfulgt for første gang","Jerusalem ble erobret av muslimene"],
      explanation: "Under Theodosius (380) ble kristendommen statsreligion. Tidligere hadde Konstantins toleranseedikt (313) tillatt kristendommen.",
    },
    {
      question: "Hvorfor spredte kristendommen seg raskt i Romerriket?",
      options: ["Budskap om frelse for alle, fellesskap og romernes veier og felles språk","Fordi den krevde at man ga avkall på all eiendom og forlot familien sin for godt","Fordi den var forbeholdt den romerske eliten og krevde høy betaling for medlemskap","Fordi keiserne fra første stund gjorde den til statsreligion og forbød alle andre kulter"],
      explanation: "Kristendommen spredte seg på grunn av budskapet om frelse for alle, fellesskap og omsorg for fattige, løftet om evig liv, og romernes veier og felles språk.",
    },
  ],
  "historie-4-1": [
    {
      question: "Hva var føydalisme?",
      options: ["Et system der jord ble gitt i bytte mot lojalitet og tjeneste", "Et demokratisk styresett med folkevalgte", "En framvoksende pengeøkonomi der banker lånte ut kapital til handelsmenn i byene", "Et samfunn uten konge eller adel, styrt av frie bondelag som eide jorda i fellesskap"],
      explanation: "Føydalisme var middelalderens dominerende system: jord (len) ble gitt fra herre til vasall i bytte mot lojalitet og militærtjeneste.",
    },
    {
      question: "Hvilke tre stender besto middelaldersamfunnet av?",
      options: ["Geistligheten, adelen og bøndene", "Riddere, kjøpmenn og soldater", "Riddere, kjøpmenn og håndverkere som utgjorde de tre viktigste yrkesgruppene", "Konger, keisere og paver"],
      explanation: "Standssamfunnet besto av geistligheten (de som ber), adelen (de som slåss) og bøndene (de som arbeider), som utgjorde rundt 90 % av befolkningen.",
    },
    {
      question: "Hva forårsaket svartedauden?",
      options: ["Bakterien Yersinia pestis, spredd av lopper på rotter", "Guds straff, slik samtiden trodde", "Et luftbårent virus som smittet fra person til person via hoste og nysing i byene", "Et virus spredd gjennom luften"],
      explanation: "Svartedauden var byllepest forårsaket av bakterien Yersinia pestis, spredd av lopper på rotter. Folk i samtiden trodde det var Guds straff.",
    },
    {
      question: "Hvilken konsekvens fikk svartedauden for arbeidskraften i Europa?",
      options: ["Færre bønder ga de overlevende mulighet til å kreve bedre vilkår og høyere lønn", "Det ble overflod av arbeidskraft", "Lønningene falt dramatisk fordi den store overfloden av arbeidere presset prisen ned", "Alle overlevende bønder ble bundet til jorda som livegne og mistet retten til å flytte"],
      explanation: "Arbeidskraftmangelen etter pesten gjorde at de overlevende bøndene kunne kreve bedre vilkår. Lønningene steg, og livegenskapet begynte å svekkes.",
    },
    {
      question: "Hvilken ny institusjon vokste fram i middelalderen?",
      options: ["Universitetet","Den industrielle fabrikken","Det moderne parlamentet","Den moderne sentralbanken"],
      explanation: "Middelalderen så fremveksten av universitetene (Bologna ca. 1088, Paris, Oxford), som ble sentre for lærdom og skapte en ny sosial gruppe: de lærde.",
    },
  ],
  "historie-4-2": [
    {
      question: "Hva var rikssamlingen i Norge?",
      options: ["Prosessen der Norge ble samlet fra mange småriker til ett kongedømme","Oppdelingen av det samlede kongedømmet i mange selvstendige småriker igjen","Innføringen av det dansk-norske eneveldet i 1660, da kongen fikk all makt samlet","Gjennomføringen av reformasjonen i 1537, da Norge ble et rent lydrike under Danmark"],
      explanation: "Rikssamlingen var prosessen der Norge gradvis ble samlet fra mange småriker til ett kongedømme, tradisjonelt regnet fra Harald Hårfagre.",
    },
    {
      question: "Hvem regnes tradisjonelt som den første samleren av Norge?",
      options: ["Harald Hårfagre", "Olav den hellige", "Harald Hardråde", "Håkon den gode"],
      explanation: "Harald Hårfagre (ca. 870--930) regnes tradisjonelt som den første samleren, særlig knyttet til slaget ved Hafrsfjord (ca. 872).",
    },
    {
      question: "Hvilken konge fullførte kristningen av Norge og ble helgen?",
      options: ["Olav Haraldsson (Olav den hellige)", "Harald Hårfagre", "Olav Tryggvason, som falt ved Svolder og senere ble dyrket som Norges skytshelgen", "Olav Tryggvason"],
      explanation: "Olav Haraldsson (Olav den hellige) fullførte kristningen med makt, falt i slaget på Stiklestad (1030) og ble helgen -- symbolet på kristent Norge.",
    },
    {
      question: "Hva gjorde kong Magnus Lagabøte i 1274?",
      options: ["Ga Norge en felles landslov som erstattet de regionale lovene", "Brøt unionen med Danmark", "Innførte det arvelige eneveldet i Norge og avskaffet den gamle riksrådsordningen", "Gjennomførte reformasjonen og gjorde den lutherske læren til statsreligion i Norge"],
      explanation: "Magnus Lagabøte ga i 1274 Norge en felles landslov som erstattet de regionale lovene -- en av Europas første nasjonale lovbøker, med prinsippet om mannhelgi.",
    },
    {
      question: "Hvor stor andel av Norges befolkning antas å ha dødd av svartedauden i 1349?",
      options: ["Mellom halvparten og to tredjedeler", "Omtrent fem prosent", "Så godt som hele befolkningen, slik at landet lå nesten folketomt i flere tiår", "Hele befolkningen"],
      explanation: "Historikere anslår at mellom halvparten og to tredjedeler av Norges befolkning døde. Det svekket den norske eliten og gjorde det lettere for Danmark å dominere.",
    },
  ],
  "historie-4-3": [
    {
      question: "Hvorfor var kirken så mektig i middelalderen?",
      options: ["Den hadde monopol på frelse, eide mye jord og var en overnasjonal organisasjon","Den drev verken utdanning eller skriftkultur, og holdt seg borte fra skoler og bokverksteder","Den var underlagt kongen i alle saker og kunne verken kreve tiende eller eie jord","Den hadde ingen økonomisk makt og var helt avhengig av almisser fra fattige bønder"],
      explanation: "Kirkens makt hvilte på monopol på frelse, kontroll over utdanning og skriftkultur, enorme jordeiendommer og en overnasjonal organisasjon.",
    },
    {
      question: "Hva var tienden?",
      options: ["En avgift på 10 % av all avling som gikk til kirken", "En militærtjeneste for bønder", "En årlig skatt som utelukkende gikk til kongen for å finansiere hoff og hær", "En avgift hanseatene betalte"],
      explanation: "Tienden var en avgift der 10 % av all avling gikk til kirken. Sammen med store jordeiendommer ga dette kirken stor økonomisk makt.",
    },
    {
      question: "Hva var korstogene?",
      options: ["Militære ekspedisjoner for å erobre Det hellige land fra muslimsk kontroll","Handelsekspedisjoner der italienske kjøpmenn kjøpte krydder i Det hellige land","Ubevæpnede pilegrimsreiser til Jerusalem uten noe militært eller erobrende preg","Nordiske vikingferder over Atlanterhavet for å oppdage og kolonisere Nord-Amerika"],
      explanation: "Korstogene (1096--1291) var militære ekspedisjoner satt i gang av paven der europeiske kristne forsøkte å erobre og forsvare Det hellige land (Palestina).",
    },
    {
      question: "Hva skjedde under det fjerde korstoget (1202--1204)?",
      options: ["Korsfarerne plyndret det kristne Konstantinopel","Jerusalem ble erobret for første gang","Muslimene under Saladin gjenerobret Midtøsten","Paven avlyste korstoget før avreise fra Europa"],
      explanation: "Under det fjerde korstoget plyndret korsfarerne det kristne Konstantinopel i stedet for å nå Det hellige land, noe som svekket det bysantinske riket.",
    },
    {
      question: "Hva var klostrenes viktigste bidrag til kunnskap?",
      options: ["De bevarte og kopierte antikkens tekster for hånd", "De trykte bøker med trykkpressen", "De avskaffet all boklig utdanning og mente at kunnskap svekket den kristne troen", "De forbød lesing og skriving"],
      explanation: "Klostrene var kunnskapssentre. Munker, særlig benediktinerne, kopierte antikkens tekster for hånd og bevarte dermed kunnskapen for ettertiden.",
    },
  ],
  "historie-4-4": [
    {
      question: "Hva var Hansaforbundet?",
      options: ["Et forbund av tyske handelsbyer som dominerte handelen i Nord-Europa", "En sammenslutning av norske bønder", "En sammenslutning av norske storbønder som kjempet mot kongens skattlegging", "Et kirkelig forbund av klostre som styrte pilegrimshandelen i hele Nord-Europa"],
      explanation: "Hansaforbundet (ca. 1200--1600) var et forbund av tyske handelsbyer med hovedkvarter i Lübeck, som dominerte handelen i Nord-Europa.",
    },
    {
      question: "Hvilken norsk by var Hansaforbundets viktigste kontor?",
      options: ["Bergen (Tyskebryggen)", "Trondheim", "Stavanger, som gjennom bispesetet ble hanseatenes viktigste havn på Vestlandet", "Stavanger"],
      explanation: "Bergen var Hansaforbundets viktigste kontor i Norge (Tyskebryggen), der hanseatene kontrollerte eksporten av tørrfisk og hadde egne privilegier.",
    },
    {
      question: "Hva eksporterte Norge gjennom hanseatene?",
      options: ["Tørrfisk, tran, huder og pelsverk","Korn, øl og salt fra Østersjøen","Ferdigvevd klede fra Flandern","Vin fra Sør-Europa"],
      explanation: "Norge eksporterte tørrfisk, tran, huder og pelsverk gjennom hanseatene, og importerte korn, øl, salt og klede.",
    },
    {
      question: "Hva kjennetegnet overgangen fra naturaløkonomi til pengeøkonomi?",
      options: ["Den var gradvis og ujevn -- penger ble brukt mer over tid", "Den skjedde over natten i hele Europa", "Den skjedde nærmest over natten og omfattet hele Europa samtidig på 1200-tallet", "Byttehandel forsvant helt umiddelbart"],
      explanation: "I tidlig middelalder dominerte byttehandel (naturaløkonomi). Gradvis og ujevnt ble penger (mynter) brukt mer, etter hvert som handel og byer vokste.",
    },
    {
      question: "Hva var Champagne-messene kjent for?",
      options: ["De var middelalderens viktigste internasjonale handelsarena","De var slag mellom franske og engelske hærer","De var kirkemøter der biskopene avgjorde trosspørsmål","De var årlige turneringer for riddere fra hele Europa"],
      explanation: "Champagne-messene i Frankrike var middelalderens viktigste internasjonale handelsarena, der kjøpmenn fra hele Europa møttes og nye finansielle instrumenter utviklet seg.",
    },
  ],
  "historie-5-1": [
    {
      question: "Hva betyr ordet renessanse?",
      options: ["Gjenfødelse", "Opplysning", "Reformasjon", "Revolusjon"],
      explanation: "Renessanse betyr gjenfødelse (fra italiensk rinascita) og refererer til gjenoppdagelsen av antikkens greske og romerske kultur (ca. 1400--1600).",
    },
    {
      question: "Hvor startet renessansen?",
      options: ["I de italienske bystatene som Firenze og Venezia", "I Tyskland", "I England, der en rik overklasse ved hoffet støttet ny kunst og litteratur", "I Norden, der handelsbyene langs kysten samlet rikdom nok til å fremme kunsten"],
      explanation: "Renessansen startet i de velstående italienske bystatene som Firenze, Venezia og Milano, der en rik borgerklasse støttet kunst og kultur.",
    },
    {
      question: "Hva kjennetegnet humanismen?",
      options: ["Den satte mennesket i sentrum og la vekt på fornuft og verdighet", "Den krevde at mennesket bare skulle tjene kirken", "Den avviste all antikk lærdom og krevde at man bare skulle studere kirkefedrene", "Den mente mennesket utelukkende skulle tjene kirken og undertrykke sin egen fornuft"],
      explanation: "Humanismen var renessansens ledende retning. Den satte mennesket i sentrum, la vekt på menneskets verdighet, fornuft og skapende evner, og studerte antikkens tekster.",
    },
    {
      question: "Hvilken oppfinnelse av Gutenberg fikk stor betydning rundt 1450?",
      options: ["Boktrykkerkunsten med løse typer", "Dampmaskinen", "Teleskopet, som lot forskerne bekrefte at planetene kretset rundt solen", "Teleskopet"],
      explanation: "Johannes Gutenberg oppfant boktrykkerkunsten med løse typer (ca. 1450), som gjorde at kunnskap kunne spres raskt og billig, og la grunnlaget for reformasjonen.",
    },
    {
      question: "Hva innebar det heliosentriske verdensbildet som Kopernikus la fram?",
      options: ["At jorden og planetene kretser rundt solen","At jorden er universets sentrum","At universet er uendelig stort og evig","At månen er en planet på linje med jorden"],
      explanation: "Kopernikus argumenterte i 1543 for det heliosentriske verdensbildet -- at jorden og de andre planetene kretser rundt solen, i strid med det geosentriske synet.",
    },
  ],
  "historie-5-2": [
    {
      question: "Hva var reformasjonen?",
      options: ["Den religiøse omveltningen på 1500-tallet som splittet kristenheten i katolikker og protestanter","Den store bølgen av oppdagelsesreiser som førte europeiske skip til Amerika og rundt Afrika på 1400-tallet","Gjenoppdagelsen av antikkens kunst og litteratur som preget de italienske bystatene på 1400-tallet","Innføringen av folkestyre og demokratiske forsamlinger som samlet borgerne i store deler av Europa"],
      explanation: "Reformasjonen var den religiøse omveltningen på 1500-tallet som splittet den vestlige kristenheten, med start i Martin Luthers kritikk av kirken i 1517.",
    },
    {
      question: "Hva kritiserte Martin Luther særlig i sine 95 teser?",
      options: ["Avlatshandelen -- salg av tilgivelse for synder","At messen ble holdt på folkets eget språk","Det heliosentriske verdensbildet som kjetteri","Boktrykkerkunsten og de nye trykte bøkene"],
      explanation: "Luthers 95 teser fra 1517 var først og fremst en kritikk av avlatshandelen, der kirken solgte tilgivelse for synder.",
    },
    {
      question: "Hva betyr Luthers prinsipp sola scriptura?",
      options: ["Bibelen alene er autoriteten i trosspørsmål, ikke paven", "Frelse oppnås ved gode gjerninger", "At kirken og kirkemøtene bestemmer hvordan Bibelen skal tolkes og forstås", "At paven er ufeilbarlig og har den øverste autoriteten i alle trosspørsmål"],
      explanation: "Sola scriptura (Skriften alene) betyr at Bibelen er den eneste autoriteten i trosspørsmål, ikke paven eller kirkemøter.",
    },
    {
      question: "Hvilken krig endte med Westfalerfreden i 1648?",
      options: ["Trettiårskrigen","De franske religionskrigene","Hundreårskrigen mot England","Den spanske arvefølgekrigen"],
      explanation: "Trettiårskrigen (1618--1648) startet som en religionskonflikt og endte med Westfalerfreden, som etablerte at hver fyrste bestemte religionen i sitt territorium.",
    },
    {
      question: "Hva var motreformasjonen?",
      options: ["Den katolske kirkens reformbevegelse som svar på protestantismen","De nordiske fyrstenes beslutning om å innføre luthersk lære i sine riker","En ny protestantisk retning som gikk enda lenger enn Luther i å bryte med Roma","En allianse mellom Luther og paven for å reformere kirken i fellesskap innenfra"],
      explanation: "Motreformasjonen var den katolske kirkens svar på reformasjonen, med Tridentinerkonsilet, jesuittordenen og inkvisisjonen som viktige virkemidler.",
    },
  ],
  "historie-5-3": [
    {
      question: "Hva var en viktig årsak til oppdagelsesreisene?",
      options: ["Ønsket om å finne sjøveien til India og krydderøyene i Asia","Ønsket om å finne nye fiskebanker og hvalfangstfelt i Nord-Atlanteren","Ønsket om å kolonisere de nordiske landene og legge deres ressurser under seg","Ønsket om å unngå all handel med Østen og gjøre Europa fullstendig selvforsynt"],
      explanation: "Oppdagelsesreisene var bl.a. drevet av ønsket om å finne sjøveien til Asias krydder, etter at osmannerne gjorde landveien vanskeligere, samt ny teknologi som kompasset.",
    },
    {
      question: "Hvem nådde India sjøveien rundt Afrika i 1498?",
      options: ["Vasco da Gama", "Kristoffer Columbus", "Ferdinand Magellan", "Bartolomeu Dias"],
      explanation: "Vasco da Gama nådde India i 1498 etter å ha seilt rundt Afrika, noe som åpnet sjøveien til Asia og la grunnlaget for det portugisiske handelsimperiet.",
    },
    {
      question: "Hva var det columbianske byttet?",
      options: ["Utvekslingen av planter, dyr, sykdommer og mennesker mellom den gamle og nye verden","Byttehandelen mellom hanseatene og norske kjøpmenn i Bergen","En ny type raskt seilskip utviklet for de lange oppdagelsesreisene","En fredsavtale mellom Spania og Portugal om de nyoppdagede landområdene"],
      explanation: "Det columbianske byttet var utvekslingen av planter, dyr, sykdommer og mennesker mellom den gamle og nye verden etter 1492.",
    },
    {
      question: "Hvilken katastrofal konsekvens fikk møtet mellom Europa og Amerika for urbefolkningen?",
      options: ["Millioner døde av europeiske sykdommer de ikke hadde immunitet mot", "Urbefolkningen fikk straks europeiske rettigheter", "Europeerne møtte hard motstand og trakk seg raskt tilbake fra det amerikanske fastlandet", "Befolkningen i Amerika vokste kraftig fordi de nye avlingene fra Europa ga bedre kosthold"],
      explanation: "Urbefolkningen hadde ingen immunitet mot sykdommer som kopper og meslinger. Noen forskere anslår at opptil 90 % av urbefolkningen i Amerika døde.",
    },
    {
      question: "Hva var triangelhandelen?",
      options: ["Det transatlantiske handelssystemet mellom Europa, Afrika og Amerika", "Hansaforbundets handel i Østersjøen", "Handelsnettverket langs Silkeveien der kinesisk silke og krydder ble fraktet vestover til Middelhavet", "Hanseatenes handelssystem mellom Bergen, Lübeck og de andre kjøpstedene rundt Østersjøen på 1300-tallet"],
      explanation: "Triangelhandelen var systemet der europeiske varer ble byttet mot slaver i Afrika, slavene fraktet til Amerika, og kolonivarer (sukker, bomull, tobakk) tilbake til Europa.",
    },
  ],
  "historie-5-4": [
    {
      question: "Hva er enevelde (absolutisme)?",
      options: ["En styreform der kongen har uinnskrenket makt", "Et demokrati med folkevalgt parlament", "En styreform der et folkevalgt parlament vedtar lovene og kongen kun har seremoniell makt", "Et system uten noen sentral hersker"],
      explanation: "Enevelde er en styreform der kongen har uinnskrenket makt, ikke bundet av lover eller stender, og mente å ha sin makt direkte fra Gud (guddommelig rett).",
    },
    {
      question: "Hvilken konge er det fremste eksemplet på en eneveldig monark?",
      options: ["Ludvig XIV av Frankrike (Solkongen)", "Frederik III av Danmark", "Oliver Cromwell, som styrte England som lordprotektor etter borgerkrigen på 1650-tallet", "Karl I av England"],
      explanation: "Ludvig XIV (Solkongen, regjerte 1643--1715) er det fremste eksemplet. Han bygde Versailles og skal ha sagt \"Staten, det er meg\".",
    },
    {
      question: "Når ble eneveldet innført i Danmark-Norge?",
      options: ["1660", "1537", "1814", "1751"],
      explanation: "Eneveldet ble innført i Danmark-Norge i 1660 etter en tapt krig mot Sverige. Kongeloven av 1665 ga kongen nærmest guddommelig makt.",
    },
    {
      question: "Hva var merkantilisme?",
      options: ["En økonomisk politikk der staten skulle eksportere mer enn den importerte","Et system der jorda var den eneste kilden til rikdom, og handel skapte ingenting","En religiøs reformbevegelse som ville rense kirken og gjøre handel og pengeutlån mer moralsk","En økonomisk politikk basert på fri handel uten toll, der markedet selv skulle styre vareflyten"],
      explanation: "Merkantilismen var de eneveldige statenes økonomiske politikk: målet var å bli rik ved å eksportere mer enn man importerte, med toll, monopoler og kolonier.",
    },
    {
      question: "Hvorfor var England et unntak fra eneveldet?",
      options: ["Parlamentet beholdt og styrket sin makt i forhold til kongen", "Kongen fikk all makt direkte fra Gud", "Kongen fikk all makt direkte fra Gud og styrte helt uten hensyn til parlament og stender", "Adelen ble fullstendig avskaffet"],
      explanation: "I England beholdt parlamentet sin makt. Gjennom Magna Carta (1215), borgerkrigen og den ærefulle revolusjonen (1688) med Bill of Rights ble makten delt mellom konge og parlament.",
    },
  ],
  "historie-5-5": [
    {
      question: "Hva markerte begynnelsen på unionen mellom Norge og Danmark i 1380?",
      options: ["At den norske kongen Håkon VI døde og sønnen Olav allerede var dansk konge", "Kalmarunionens oppløsning", "Reformasjonen, som ble innført av kongen og bandt Norge tettere til det danske riket", "Kalmarunionens oppløsning, da Sverige brøt ut og de nordiske rikene gikk hver sin vei"],
      explanation: "I 1380 fikk Norge og Danmark felles konge da Håkon VI døde og sønnen Olav Håkonsson allerede var dansk konge -- starten på over 400 år med dansk styre.",
    },
    {
      question: "Hva betyr at Norge ble et lydrike etter 1536/37?",
      options: ["Norge mistet sitt riksråd og ble formelt underordnet Danmark","Norge beholdt riksrådet sitt, men mistet retten til å utnevne biskoper","Norge fikk full selvstendighet med eget riksråd, egen konge og egen utenrikspolitikk igjen","Norge ble skilt fra Danmark og lagt inn under svensk styre som en del av det svenske riket"],
      explanation: "Lydrike betyr et rike som \"lyder\" et annet. Etter 1536/37 mistet Norge sitt riksråd og ble styrt fra København, men beholdt egne lover og kirkeorganisasjon.",
    },
    {
      question: "Hvilken vare ble Norges viktigste eksportvare fra 1500-tallet?",
      options: ["Trelast (tømmer)", "Krydder", "Silke fra østlige handelsruter, som ble videresolgt fra norske havner til hele Nord-Europa", "Bomull"],
      explanation: "Trelast ble Norges viktigste eksportvare fra 1500-tallet, drevet av europeisk etterspørsel etter tømmer til skip- og husbygging. Sagbruk ga en ny overklasse av trelasthandlere.",
    },
    {
      question: "Hva var en odelsbonde?",
      options: ["En bonde som eide sin egen gård med arverett (odel)", "En livegen bonde bundet til godseierens jord", "En dansk embetsmann som styrte et fogderi i Norge på vegne av kongen og krevde inn skattene", "En leilending uten rettigheter"],
      explanation: "En odelsbonde eide sin egen gård med odel (arverett). I motsetning til danske livegne bønder ga odelsretten norske bønder en sterkere og mer selvstendig stilling.",
    },
    {
      question: "Hva var Lofthus-opprøret (1786--1787)?",
      options: ["En bondeprotest mot urettferdige fogder og handelsmonopoler i Sør-Norge", "Et opprør ledet av hanseatene", "Et opprør mot reformasjonen der bønder ville beholde den gamle katolske messen og klostrene", "En krig mot Sverige der sørnorske bønder ble tvunget til å kjempe langs den utsatte grensen"],
      explanation: "Lofthus-opprøret var en bondeprotest ledet av Kristian Lofthus mot urettferdige fogder, handelsmonopoler og borgerprivilegier. Det viste spenningen mellom enevelde og lokale krav.",
    },
  ],
  "historie-6-1": [
    {
      question: "Hva vektla opplysningstiden?",
      options: ["Fornuft, vitenskap og fremskrittstro", "Tilbakevending til middelalderen", "Blind lydighet mot kirkens autoritet og forkastelse av vitenskapelig tvil om troens sannheter", "Blind lydighet mot kirken"],
      explanation: "Opplysningstiden (ca. 1700--1800) vektla fornuft, vitenskap og fremskrittstro, og kritiserte tradisjonelle autoriteter som kirken og eneveldet.",
    },
    {
      question: "Hvilken filosof regnes som opplysningstidens far og mente alle har naturlige rettigheter?",
      options: ["John Locke", "Karl Marx", "Adam Smith", "Vidkun Quisling"],
      explanation: "John Locke (1632--1704) regnes som opplysningstidens far. Han mente alle mennesker har naturlige rettigheter til liv, frihet og eiendom, og at folket kan gjøre opprør mot en regjering som krenker disse.",
    },
    {
      question: "Hvilken idé utviklet Montesquieu?",
      options: ["Maktfordeling mellom lovgivende, utøvende og dømmende makt", "At folket aldri skulle ha rettigheter", "At kirken og geistligheten burde styre staten og våke over lovene ut fra guddommelig rett", "At kirken skulle styre staten"],
      explanation: "Montesquieu utviklet ideen om maktfordeling -- at statsmakten bør deles mellom lovgivende, utøvende og dømmende makt for å hindre tyranni.",
    },
    {
      question: "Hva mente Rousseau med folkesuverenitet?",
      options: ["At all makt utgår fra folket", "At kongen har makt fra Gud", "At adelen skal styre alene", "At folket aldri kan styre seg selv"],
      explanation: "Rousseau utviklet ideen om folkesuverenitet -- at all makt utgår fra folket, som inngår en samfunnskontrakt. Ideene inspirerte den franske revolusjonen.",
    },
    {
      question: "Hvilke senere hendelser inspirerte opplysningstidens ideer?",
      options: ["Den amerikanske og franske revolusjonen samt grunnlover over hele verden", "Reformasjonen og religionskrigene", "Korstogene til Det hellige land og den store pestepidemien svartedauden på 1300-tallet", "Den norske vikingtiden med herjinger i vest og Harald Hårfagres rikssamling ved Hafrsfjord"],
      explanation: "Opplysningstidens ideer inspirerte den amerikanske uavhengighetserklæringen (1776), den franske revolusjonen (1789) og grunnlover, inkludert den norske (1814).",
    },
  ],
  "historie-6-2": [
    {
      question: "Hvor mange kolonier hadde Storbritannia langs østkysten av Nord-Amerika?",
      options: ["13", "7", "20", "5"],
      explanation: "Storbritannia hadde 13 kolonier langs østkysten av Nord-Amerika på 1700-tallet. De var velstående med betydelig selvstyre, men underlagt den britiske kronen.",
    },
    {
      question: "Hva betydde slagordet \"No taxation without representation\"?",
      options: ["At det var urettferdig å skattlegge kolonistene uten at de var representert i parlamentet","At kolonistene krevde å få betale dobbelt så mye skatt som de britiske borgerne i moderlandet","At britiske borgere i moderlandet skulle slippe all skatt så lenge koloniene betalte i stedet","At all beskatning burde avskaffes helt, slik at hverken koloniene eller Storbritannia betalte"],
      explanation: "Slagordet betydde \"ingen skatt uten representasjon\" -- kolonistene mente det var urettferdig å betale skatt til en regjering der de ikke var representert.",
    },
    {
      question: "Hvilken hendelse i 1773 var en protest mot teavgiften?",
      options: ["Boston Tea Party", "Stormingen av Bastillen", "Skuddene ved Lexington", "Parisfreden"],
      explanation: "Boston Tea Party (1773) var en protest der kolonister, forkledd som indianere, kastet te fra britiske skip i Boston havn. Britene svarte med harde straffer.",
    },
    {
      question: "Hvem skrev utkastet til uavhengighetserklæringen i 1776?",
      options: ["Thomas Jefferson", "George Washington", "John Locke", "Benjamin Franklin"],
      explanation: "Thomas Jefferson skrev utkastet til uavhengighetserklæringen, vedtatt 4. juli 1776. Den bygde på John Lockes filosofi om naturlige rettigheter.",
    },
    {
      question: "Hva etablerte den amerikanske grunnloven fra 1787?",
      options: ["En føderal republikk med maktfordeling og checks and balances","En løs allianse av selvstendige stater uten felles regjering eller domstol","Et enevelde ledet av en amerikansk konge som samlet all makt hos seg etter europeisk mønster","Et rent direkte demokrati uten valgte ledere, der alle borgere stemte over hver enkelt lov selv"],
      explanation: "Grunnloven fra 1787 etablerte en føderal republikk med maktfordeling mellom Kongressen, presidenten og høyesterett, og et system med checks and balances.",
    },
  ],
  "historie-6-3": [
    {
      question: "Hvordan var det franske samfunnet delt før revolusjonen?",
      options: ["I tre stender: geistlighet, adel og tredje stand", "I rike og fattige uten skiller", "I to like store grupper som delte skattebyrden og de politiske rettighetene likt mellom seg", "I fire stender med lik skatt"],
      explanation: "Samfunnet var delt i tre stender: geistligheten og adelen betalte ikke skatt, mens tredje stand (ca. 26 millioner) bar hele skattebyrden.",
    },
    {
      question: "Hva skjedde 14. juli 1789?",
      options: ["En folkemengde stormet festningen Bastillen i Paris","Grunnloven på Eidsvoll ble vedtatt","Ludvig XVI ble stilt for retten og henrettet","Erklæringen om menneskerettighetene ble vedtatt"],
      explanation: "14. juli 1789 stormet en folkemengde Bastillen for å skaffe våpen. Bastillens fall ble symbolet på revolusjonen og feires som Frankrikes nasjonaldag.",
    },
    {
      question: "Hva fastslo Erklæringen om menneskets og borgerens rettigheter (1789)?",
      options: ["At alle mennesker er født frie og like i rettigheter","At bare adelen hadde rettigheter","At kirken og biskopene skulle styre Frankrike","At kongen fikk tilbake sin uinnskrenkede makt"],
      explanation: "Erklæringen fra 1789 slo fast at alle mennesker er født frie og like i rettigheter, og garanterte ytringsfrihet, religionsfrihet og eiendomsrett.",
    },
    {
      question: "Hva kjennetegnet skrekkveldet (terroren) 1793--1794?",
      options: ["Jakobinerne under Robespierre henrettet alle de anså som revolusjonens fiender", "En fredelig overgang til demokrati", "En gjeninnføring av det gamle eneveldet der kongen igjen fikk samle all makt hos seg selv", "En periode preget av full ytringsfrihet der alle politiske retninger fritt kunne uttrykke seg"],
      explanation: "Under skrekkveldet henrettet jakobinerne, ledet av Robespierre, rundt 17 000 mennesker. Til slutt ble Robespierre selv henrettet i 1794.",
    },
    {
      question: "Hva skjedde med revolusjonens arv under Napoleon?",
      options: ["Han beholdt mange reformer, men avskaffet demokratiet og ytringsfriheten","Han innførte alminnelig stemmerett og lot nasjonalforsamlingen styre landet","Han avskaffet prinsippet om likhet for loven og lot fødsel og stand avgjøre folks rettigheter","Han gjeninnførte alle de gamle føydale privilegiene og ga adel og geistlighet skattefrihet igjen"],
      explanation: "Napoleon beholdt reformer som likhet for loven (Code civil) og karriere åpen for talent, men avskaffet demokratiet og ytringsfriheten og kronet seg til keiser.",
    },
  ],
  "historie-6-4": [
    {
      question: "Hva forsøkte Wienerkongressen etter Napoleons fall i 1815?",
      options: ["Å gjenopprette de gamle monarkiene og det gamle regimet", "Å innføre demokrati i hele Europa", "Å avskaffe alle konger og fyrster og erstatte monarkiene med republikker etter fransk mønster", "Å starte en ny revolusjon"],
      explanation: "Etter Napoleons fall forsøkte de gamle monarkiene gjennom Wienerkongressen å gjenopprette det gamle regimet, men ideene om frihet og folkesuverenitet kunne ikke undertrykkes.",
    },
    {
      question: "Hva er liberalisme som politisk ideologi?",
      options: ["En ideologi som vektlegger individets frihet og rettigheter", "En ideologi for absolutt kongemakt", "En ideologi som går imot all stemmerett og vil holde politisk makt hos en liten arvelig elite", "En ideologi for kirkens enevelde"],
      explanation: "Liberalisme vektlegger individets frihet og rettigheter. Liberale på 1800-tallet krevde grunnlover, begrenset kongemakt, ytringsfrihet og stemmerett.",
    },
    {
      question: "Hva kjennetegnet revolusjonsbølgen i 1848?",
      options: ["Krav om grunnlover, ytringsfrihet og nasjonal selvstendighet spredte seg over Europa", "Alle revolusjonene lyktes umiddelbart", "At opprørerne krevde å gjeninnføre eneveldet og gi kongene tilbake sin uinnskrenkede makt", "At samtlige revolusjoner lyktes umiddelbart og innførte varige demokratier over hele Europa"],
      explanation: "I 1848 skyllet en revolusjonsbølge over Europa med krav om grunnlover, parlamentarisk styre, ytringsfrihet og nasjonal selvstendighet. De fleste ble slått ned innen 1849.",
    },
    {
      question: "Når fikk kvinner stemmerett i Norge?",
      options: ["1913", "1814", "1884", "1945"],
      explanation: "Norge innførte allmenn stemmerett for kvinner i 1913 -- blant de første landene i verden. Utvidelsen av stemmeretten skjedde gradvis gjennom politisk kamp.",
    },
    {
      question: "Hvordan ble stemmeretten gradvis utvidet på 1800- og 1900-tallet?",
      options: ["Fra rike menn med eiendom til allmenn stemmerett for menn og senere kvinner", "Den ble fjernet helt utover 1800-tallet", "Stemmeretten var lik og allmenn for alle borgere helt fra starten av og endret seg aldri siden", "Stemmeretten ble gradvis fjernet utover 1800-tallet etter hvert som kongemakten styrket seg igjen"],
      explanation: "Stemmeretten ble gradvis utvidet -- fra rike eiendomsbesittende menn tidlig på 1800-tallet, til allmenn stemmerett for menn, og etter 1900 også for kvinner.",
    },
  ],
  "historie-7-1": [
    {
      question: "Hva var den industrielle revolusjonen?",
      options: ["Overgangen fra jordbruks- og håndverkssamfunn til maskin- og fabrikkbasert industri", "Overgangen fra jakt og sanking til jordbruk", "En politisk revolusjon der folket styrtet kongen og innførte folkestyre og en ny grunnlov", "Gjenoppdagelsen av antikkens kunst og lærdom som preget kulturlivet i renessansens Europa"],
      explanation: "Den industrielle revolusjonen var overgangen fra håndverks- og jordbruksbasert økonomi til maskin- og fabrikkbasert industri, med start i Storbritannia ca. 1760.",
    },
    {
      question: "Hvorfor startet industrialiseringen i Storbritannia?",
      options: ["Landet hadde kull, jernmalm, kapital, arbeidskraft, marked og politisk stabilitet", "Det var stadig rammet av revolusjoner", "Landet var stadig rammet av revolusjoner og indre uro som lammet både handel og produksjon", "Landet manglet alle viktige naturressurser og måtte importere både kull og jernmalm utenfra"],
      explanation: "Storbritannia hadde flere forutsetninger: store forekomster av kull og jernmalm, kapital, frigjort arbeidskraft, et stort marked, kolonier og politisk stabilitet.",
    },
    {
      question: "I hvilken industri begynte industrialiseringen?",
      options: ["Tekstilindustrien, særlig bomullsproduksjon", "Oljeindustrien", "I oljeindustrien, der utvinning og raffinering av råolje ga drivstoff til de nye maskinene", "Stålindustrien"],
      explanation: "Industrialiseringen begynte i tekstilindustrien, særlig bomullsproduksjon, med oppfinnelser som Spinning jenny (1764) og den mekaniske vevstolen (1785).",
    },
    {
      question: "Hva var hjemmeindustri (putting-out system) før fabrikkene?",
      options: ["Folk spant og vevde hjemme, ofte ved siden av gårdsarbeidet","Store maskinhaller der alle arbeidet på faste tider","Statlige verksteder styrt direkte av kongen","Arbeid utelukkende utført av barn"],
      explanation: "I hjemmeindustrien leverte en handelsmann råvarer til folk som spant og vevde hjemme. Med fabrikkene måtte arbeiderne i stedet møte opp på faste tider ved maskinene.",
    },
    {
      question: "Hvordan endret fabrikkene arbeidernes liv?",
      options: ["De måtte møte til faste tider og arbeidstakten ble bestemt av maskinene","De kunne fritt bestemme egen arbeidstid og gå hjem når arbeidet var gjort","De sluttet helt å arbeide mot lønn og forsørget seg i stedet ved selvberging på egen jord","De fikk merkbart kortere arbeidsdager enn før og mer fritid til familie og eget gårdsarbeid"],
      explanation: "I fabrikkene måtte arbeiderne møte til faste tider og jobbe 12--16 timer, og arbeidstakten ble bestemt av maskinene, ikke av arbeideren selv.",
    },
  ],
  "historie-7-2": [
    {
      question: "Hvilken oppfinnelse var den industrielle revolusjonens hjerte?",
      options: ["Dampmaskinen", "Telefonen", "Bilen", "Datamaskinen"],
      explanation: "Dampmaskinen var den industrielle revolusjonens viktigste oppfinnelse. Den omdannet varme fra kull til mekanisk kraft som kunne drive maskiner.",
    },
    {
      question: "Hvem forbedret dampmaskinen fra 1769 så den ble effektiv for fabrikker?",
      options: ["James Watt", "Thomas Newcomen", "George Stephenson", "Edmund Cartwright"],
      explanation: "James Watt forbedret fra 1769 dampmaskinen så den ble effektiv nok til å drive fabrikker. Thomas Newcomen hadde laget en tidlig versjon allerede i 1712.",
    },
    {
      question: "Hvordan revolusjonerte jernbanen transporten?",
      options: ["Reiser som tok dager tok nå timer, og varer kunne fraktes raskt og billig", "Den hadde ingen betydning for handelen", "Den fikk ingen betydning for handelen, siden varer fortsatt måtte fraktes med skip og vogn", "Den gjorde all transport langsommere enn med hest og vogn og fordyret dermed frakten av varer"],
      explanation: "Jernbanen revolusjonerte transporten: reiser ble mye raskere, varer kunne fraktes billig over store avstander, og tid ble standardisert (jernbanetid).",
    },
    {
      question: "Hva kjennetegnet den andre industrielle revolusjonen (ca. 1870--1914)?",
      options: ["Nye teknologier basert på stål, elektrisitet, kjemi og forbrenningsmotoren", "Dampmaskinen og bomullsspinning som helt nye oppfinnelser fra 1780-årene", "Overgang fra fabrikkdrift til jordbruk basert på fossekraft og seil", "Retur til vannkraft og manuell håndverksproduksjon i småverksteder"],
      explanation: "Den andre industrielle revolusjonen var en ny bølge basert på stål, elektrisitet, kjemi og forbrenningsmotoren, der Tyskland og USA ble ledende.",
    },
    {
      question: "Hvilken oppfinnelse ga øyeblikkelig kommunikasjon over store avstander fra 1837?",
      options: ["Telegrafen", "Radioen", "Flyet", "Symaskinen"],
      explanation: "Telegrafen (1837) ga øyeblikkelig kommunikasjon over store avstander. Senere kom telefonen (1876) og radioen (1890-tallet).",
    },
  ],
  "historie-7-3": [
    {
      question: "Hva er arbeiderklassen (proletariatet)?",
      options: ["Den klassen som lever av å selge sin arbeidskraft uten å eie produksjonsmidler", "Fabrikkeierne som eide produksjonsmidlene og levde av andres arbeid", "Jordeiende adel som levde av leilendingenes arbeid og gårdsdrift", "Selvstendige håndverkere og bønder som eide egne verktøy og gård"],
      explanation: "Arbeiderklassen eller proletariatet er den klassen som lever av å selge sin arbeidskraft. De eide ikke produksjonsmidler, men jobbet for lønn i andres fabrikker.",
    },
    {
      question: "Hvordan var arbeidsforholdene i tidlig industrialisering?",
      options: ["Lange arbeidsdager, lave lønninger, farlige forhold og utbredt barnearbeid", "Lovforbud mot barnearbeid som ble strengt håndhevet fra første stund", "Full sosial trygghet med sykepenger, pensjon og gratis helsehjelp", "Korte arbeidsdager, høye lønninger og lovfestet vern mot ulykker"],
      explanation: "Arbeidsforholdene var harde: 12--16 timers arbeidsdager, lave lønninger, farlige forhold, ingen sosial beskyttelse, og barn ned i 5--6 års alder jobbet i fabrikker og gruver.",
    },
    {
      question: "Hva er en fagforening?",
      options: ["En organisasjon av arbeidere som forhandler kollektivt med arbeidsgivere", "En sammenslutning av fabrikkeiere som avtalte felles priser og lønnstak", "En religiøs forening som ga fattighjelp til arbeidsløse familier i byene", "En statlig domstol som avgjorde alle tvister mellom arbeid og kapital"],
      explanation: "En fagforening er en organisasjon av arbeidere som sammen forhandler med arbeidsgivere om lønn og arbeidsforhold. Streiken var deres sterkeste våpen.",
    },
    {
      question: "Hvem skrev \"Det kommunistiske manifest\" (1848) sammen med Friedrich Engels?",
      options: ["Karl Marx", "Adam Smith", "Marcus Thrane", "John Locke"],
      explanation: "Karl Marx (1818--1883) skrev \"Det kommunistiske manifest\" og \"Kapitalen\" sammen med Engels. Han mente historien drives av klassekamp mellom eiere og arbeidere.",
    },
    {
      question: "Hvem ledet Norges første arbeiderbevegelse rundt 1850?",
      options: ["Marcus Thrane", "Einar Gerhardsen", "Johan Nygaardsvold", "Vidkun Quisling"],
      explanation: "Marcus Thrane ledet thranitterbevegelsen rundt 1850 og organiserte 30 000 medlemmer med krav om bl.a. allmenn stemmerett. Bevegelsen ble slått hardt ned.",
    },
  ],
  "historie-7-4": [
    {
      question: "Hva skjedde med Europas befolkning på 1800-tallet?",
      options: ["Den mer enn doblet seg, fra ca. 190 til ca. 420 millioner", "Den holdt seg tilnærmet uendret gjennom hele hundreåret", "Den falt med to tredjedeler som følge av massiv utvandring", "Den ble halvert på grunn av gjentatte epidemier og hungersnød"],
      explanation: "Europas befolkning økte fra ca. 190 millioner i 1800 til ca. 420 millioner i 1900 -- mer enn en dobling, drevet av lavere dødelighet og fortsatt høy fødselsrate.",
    },
    {
      question: "Hva beskriver den demografiske overgangen?",
      options: ["Overgangen fra høy til lav fødsels- og dødsrate","Overgangen fra små familier til svært store barneflokker","Befolkningens samlede utvandring fra Europa til Nord-Amerika","Overgangen fra jordbrukssamfunn til jakt- og sankekultur igjen"],
      explanation: "Den demografiske overgangen beskriver overgangen fra høy til lav fødsels- og dødsrate. I overgangsfasen synker dødsraten først, noe som gir rask befolkningsvekst.",
    },
    {
      question: "Hva er urbanisering?",
      options: ["Flytting fra landsbygda til byene", "Flytting fra byene til landsbygda", "Utvandring til andre kontinenter", "Befolkningsnedgang i byene"],
      explanation: "Urbanisering er flytting fra landsbygda til byene. Industrialiseringen drev folk til byene for å søke arbeid, og byer som London vokste eksplosivt.",
    },
    {
      question: "Hva viste legen John Snow i 1854?",
      options: ["At kolera spredte seg gjennom forurenset vann", "At kolera spredte seg gjennom dårlig luft", "At kolera bare rammet de rike i de tettbebygde bydelene", "At kolera slett ikke var en smittsom sykdom mellom mennesker"],
      explanation: "John Snow viste i 1854 at kolera spredte seg gjennom forurenset vann, ikke gjennom \"dårlig luft\". Dette la grunnlaget for sanitærreformene.",
    },
    {
      question: "Hvordan endret familiestrukturen seg med industrialiseringen?",
      options: ["Arbeid og hjem ble adskilt, og kjernefamilien ble mer vanlig", "Storfamilien med flere generasjoner ble mer vanlig", "Familien som institusjon forsvant nesten helt i industribyene", "Barn ble langt viktigere som lønnet arbeidskraft enn før i tiden"],
      explanation: "Industrialiseringen adskilte arbeid og hjem. Kjernefamilien ble vanligere, og barn gikk gradvis fra å være arbeidskraft til å være \"investering\" i utdanning.",
    },
  ],
  "historie-8-1": [
    {
      question: "Hva er nasjonalisme?",
      options: ["Ideen om at hver nasjon har rett til sin egen stat", "Ideen om at alle nasjoner bør avskaffes", "Ideen om at kongen styrer med guddommelig rett gitt direkte av Gud", "Ideen om at religion skal styre staten"],
      explanation: "Nasjonalisme er ideen om at verden er delt inn i nasjoner, og at hver nasjon -- definert ved felles språk, kultur og historie -- har rett til sin egen stat.",
    },
    {
      question: "Hvilke to bevegelser ga næring til nasjonalismen?",
      options: ["Den franske revolusjon og romantikken", "Reformasjonen og motreformasjonen", "Korstogene og svartedauden", "Industrialiseringen og urbaniseringen"],
      explanation: "Den franske revolusjon erstattet lojalitet til kongen med lojalitet til nasjonen, og romantikken oppvurderte det særegne ved hvert folk -- begge ga næring til nasjonalismen.",
    },
    {
      question: "Hvem samlet Tyskland gjennom tre kriger fram til 1871?",
      options: ["Otto von Bismarck", "Napoleon Bonaparte", "Giuseppe Garibaldi", "Camillo Cavour"],
      explanation: "Otto von Bismarck, Prøyssens ministerpresident, samlet Tyskland gjennom kriger mot Danmark (1864), Østerrike (1866) og Frankrike (1870--71). Keiserriket ble proklamert i 1871.",
    },
    {
      question: "Hvordan kunne nasjonalismen både forene og splitte?",
      options: ["Den samlet delte folk som italienere og tyskere, men truet flernasjonale imperier", "Den førte utelukkende til varig fred mellom alle europeiske folk", "Den gjaldt kun i Norge og påvirket ikke resten av kontinentet", "Den hadde ingen politiske konsekvenser for statene i Europa"],
      explanation: "Nasjonalismen samlet delte nasjoner (Italia, Tyskland), men truet flernasjonale imperier som Østerrike-Ungarn og Det osmanske riket, der folk krevde selvstyre.",
    },
    {
      question: "Hva var nasjonalismens skyggeside?",
      options: ["Ekskludering av minoriteter og aggressiv utenrikspolitikk","Rask og fredelig oppløsning av alle flernasjonale imperier i Europa","Økt toleranse og fulle rettigheter for alle etniske minoriteter","Slutt på all rivalisering og maktkamp mellom de europeiske statene"],
      explanation: "Nasjonalismen kunne bli ekskluderende og aggressiv: minoriteter ble diskriminert, og rivalisering mellom stormaktene bidro til første verdenskrig.",
    },
  ],
  "historie-8-2": [
    {
      question: "Hva førte til Norges frigjøring fra Danmark i 1814?",
      options: ["Napoleonskrigene -- Danmark-Norge tapte og måtte avstå Norge ved Kielfreden", "Et russisk angrep som tvang Danmark til å oppgi kontrollen over Norge", "Et folkeopprør av norske bønder som styrtet den danske kongen", "Reformasjonen, som løsrev Norge fra dansk kirkelig overhøyhet"],
      explanation: "Napoleonskrigene førte til frigjøringen. Danmark-Norge støttet Napoleon og måtte ved Kielfreden (januar 1814) avstå Norge til Sverige.",
    },
    {
      question: "Hva skjedde 17. mai 1814 på Eidsvoll?",
      options: ["Riksforsamlingen vedtok Norges Grunnlov og valgte Christian Frederik til konge", "Reformasjonen ble endelig vedtatt og innført som statsreligion", "Norge inngikk en formell union med Sverige under svensk konge", "Eneveldet ble gjeninnført med kongen som uinnskrenket hersker"],
      explanation: "17. mai 1814 vedtok riksforsamlingen på Eidsvoll Norges Grunnlov -- en av Europas mest liberale -- og valgte Christian Frederik til konge.",
    },
    {
      question: "Hva slags union ble Norge en del av etter 1814?",
      options: ["En personalunion med Sverige der landene delte konge", "En full sammenslåing med Sverige", "En forsvars- og handelsunion med Russland mot Sverige", "En full statssammenslåing der Norge ble en svensk provins"],
      explanation: "Etter en kort krig i 1814 godtok Norge en personalunion med Sverige -- landene delte konge, men Norge beholdt Grunnloven, Stortinget, egen regjering og egne lover.",
    },
    {
      question: "Hva skjedde 7. juni 1905?",
      options: ["Stortinget erklærte at unionen med Sverige var oppløst", "Norge gikk i union med Danmark", "Riksforsamlingen på Eidsvoll vedtok Norges første grunnlov", "Norge inngikk en ny personalunion med Danmark under felles konge"],
      explanation: "7. juni 1905 erklærte Stortinget at unionen med Sverige var oppløst. En folkeavstemning samme år viste massiv støtte, og forhandlinger i Karlstad ga en fredelig løsning.",
    },
    {
      question: "Hvem ble valgt til norsk konge i 1905?",
      options: ["Den danske prinsen Carl, som tok navnet Haakon VII","En norsk statsminister som ble utropt til konge av Stortinget","Den svenske kongen Gustav Vasa fra det gamle Vasa-dynastiet","Christian Frederik, som var valgt til norsk konge alt i 1814"],
      explanation: "Etter at nordmennene valgte monarki i en folkeavstemning, ble den danske prinsen Carl valgt til konge og tok navnet Haakon VII. Norge var endelig fullt uavhengig.",
    },
  ],
  "historie-8-3": [
    {
      question: "Hvem er Norges urfolk?",
      options: ["Samene", "Kvenene", "Skogfinnene", "Romanifolket"],
      explanation: "Samene er Norges urfolk og Nordens eneste anerkjente urfolk. De har levd i nordområdene (Sápmi) i tusenvis av år, før de moderne statsgrensene ble trukket.",
    },
    {
      question: "Hva var fornorskingspolitikken?",
      options: ["Statens systematiske forsøk på å assimilere samer og kvener til norsk språk og kultur", "En reform som ga samene indre selvstyre og egen folkevalgt forsamling", "En statlig politikk for å verne og styrke samisk språk i skolen", "En handelsavtale med Sverige om reindrift over landegrensene"],
      explanation: "Fornorskingspolitikken (ca. 1850--1960) var statens systematiske forsøk på å assimilere samer og kvener, særlig ved å forby samisk språk i skolen.",
    },
    {
      question: "Hvilken sak ble et vendepunkt for samiske rettigheter rundt 1980?",
      options: ["Altasaken", "Fosen-saken", "Menstadslaget", "Lofthus-opprøret"],
      explanation: "Altasaken (1979--1981), konflikten om utbygging av Alta-Kautokeino-vassdraget, ble et vendepunkt som satte samiske rettigheter på dagsordenen.",
    },
    {
      question: "Hvilket organ for samene ble opprettet i 1989?",
      options: ["Sametinget", "Samerettsutvalget", "Stortinget", "Reindriftsstyret"],
      explanation: "Sametinget, samenes folkevalgte organ, ble opprettet i 1989. Sameloven (1987) hadde alt anerkjent samene som urfolk.",
    },
    {
      question: "Hvilke ble anerkjent som nasjonale minoriteter i Norge i 1999?",
      options: ["Kvener, skogfinner, romani, rom og jøder", "Pakistanske arbeidsinnvandrere", "Kun samene, som Norges eneste anerkjente urfolksgruppe", "Danske og svenske innvandrere"],
      explanation: "I 1999 anerkjente Norge fem nasjonale minoriteter med særlige rettigheter: kvener/norskfinner, skogfinner, romani (tatere), rom (sigøynere) og jøder.",
    },
  ],
  "historie-8-4": [
    {
      question: "Omtrent hvor mange nordmenn utvandret til Amerika på 1800-tallet?",
      options: ["Ca. 800 000 -- omtrent en tredjedel av befolkningen","Ca. 100 000 -- om lag en tjuendedel av hele befolkningen","Ca. 10 000 -- nesten ingen sammenlignet med andre land","Ca. 2 millioner -- rundt to tredjedeler av befolkningen"],
      explanation: "Ca. 800 000 nordmenn utvandret til Amerika på 1800-tallet -- omtrent en tredjedel av befolkningen. Norge hadde den nest høyeste utvandringsraten i Europa etter Irland.",
    },
    {
      question: "Hva er forskjellen mellom emigrasjon og immigrasjon?",
      options: ["Emigrasjon er utvandring fra et land, immigrasjon er innvandring til et land", "Emigrasjon er innvandring til et land, immigrasjon er utvandring fra det", "Emigrasjon gjelder kun flyktninger, immigrasjon kun frivillige flyttere", "Begge betyr nøyaktig det samme og brukes helt om hverandre"],
      explanation: "Emigrasjon er utvandring (å flytte fra et land), mens immigrasjon er innvandring (å flytte til et land).",
    },
    {
      question: "Hvilken push-faktor drev nordmenn til å forlate Norge?",
      options: ["Fattigdom og jordhunger på grunn av befolkningsvekst","Full stemmerett og innflytelse for alle voksne nordmenn","Full religiøs frihet og toleranse som holdt folk igjen i Norge","Rikelig tilgang på gratis, dyrkbar jord for alle bønder i Norge"],
      explanation: "Push-faktorer (det som drev folk bort) var bl.a. fattigdom og jordhunger -- befolkningsveksten gjorde at det ikke var nok jord til alle -- samt klasseskiller og nød.",
    },
    {
      question: "Hva var \"amerikabrev\" (amerikaletter)?",
      options: ["Brev fra utvandrere til familie hjemme som spredte informasjon om Amerika", "Reisetillatelser og pass utstedt av norske myndigheter til utvandrere", "Offisielle innvandringsdokumenter utstedt av den amerikanske staten", "Forretningsbrev sendt mellom norske rederier og amerikanske havner"],
      explanation: "Amerikabrev var brev fra utvandrere til familie og venner hjemme. De malte ofte et glansbilde av Amerika og var kanskje den viktigste enkeltfaktoren som drev utvandringen videre.",
    },
    {
      question: "Hvor slo de fleste norske utvandrere seg ned i USA?",
      options: ["I Midtvesten -- Wisconsin, Minnesota, Iowa og Dakota","I California, der de arbeidet i gruvene under gullrushet","I sørstatene, der de arbeidet på store bomullsplantasjer","På østkysten i storbyer som New York og Boston med fabrikkarbeid"],
      explanation: "De fleste norske utvandrere slo seg ned i Midtvesten (Wisconsin, Minnesota, Iowa, Nord- og Sør-Dakota), der de ryddet prærien og dyrket hvete.",
    },
  ],
  "historie-9-1": [
    {
      question: "Hva er imperialisme?",
      options: ["En politikk der en stat utvider sin makt og innflytelse over andre områder og folk", "En politikk for å avvikle alle kolonier og gi områdene selvstyre", "En form for direkte demokrati der folket styrer uten mellomledd", "En religiøs reformbevegelse for å spre kristendom i hjemlandet"],
      explanation: "Imperialisme er en politikk der en stat utvider sin makt over andre områder, enten gjennom direkte militær kontroll (kolonisering) eller indirekte gjennom økonomisk dominans.",
    },
    {
      question: "Hvilken periode kalles nyimperialismens tidsalder?",
      options: ["Ca. 1870--1914", "Ca. 1500--1600", "Ca. 1945--1991", "Ca. 1300--1400"],
      explanation: "Nyimperialismen (ca. 1870--1914) var perioden da europeiske stormakter la under seg nesten hele Afrika og store deler av Asia på få tiår.",
    },
    {
      question: "Hvilken økonomisk drivkraft lå bak imperialismen?",
      options: ["Behov for råvarer og nye markeder for industrivarer", "Ønske om å gi fra seg ressurser", "Manglende interesse for handel og utenlandske markeder i Europa", "Ønske om å gi bort egne råvarer og ressurser til andre folkeslag"],
      explanation: "Den industrielle revolusjonen skapte behov for råvarer (gummi, olje, mineraler) og nye markeder. Koloniene leverte billige råvarer og kjøpte europeiske produkter.",
    },
    {
      question: "Hva var sosialdarwinisme i imperialismens tjeneste?",
      options: ["Misbruk av Darwins teori for å hevde at den hvite rasen var overlegen", "En etterprøvd vitenskapelig teori om arter som alle biologer godtok", "En økonomisk teori om frihandel og fri konkurranse mellom stater", "En folkelig bevegelse som kjempet imot kolonialisme og rasisme"],
      explanation: "Sosialdarwinisme var misbruk av Darwins evolusjonsteori til å hevde et hierarki av raser der den hvite rasen var overlegen, brukt til å rettferdiggjøre kolonisering.",
    },
    {
      question: "Hva var siviliseringsmisjonen?",
      options: ["Forestillingen om at europeere hadde en plikt til å \"sivilisere\" andre folk", "En samordnet plan for å industrialisere hele det europeiske kontinentet", "En bred bevegelse for å frigjøre koloniene og gi dem selvstendighet", "En militærallianse mellom de europeiske kolonimaktene mot opprør"],
      explanation: "Siviliseringsmisjonen var forestillingen om at europeere hadde en plikt til å \"sivilisere\" andre folk -- bringe kristendom og europeisk kultur, kalt \"den hvite manns byrde\".",
    },
  ],
  "historie-9-2": [
    {
      question: "Hva kalles den raske koloniseringen av Afrika fra 1870 til 1914?",
      options: ["Kapløpet om Afrika (Scramble for Africa)","Den europeiske avkoloniseringen av Afrika","Den store utvandringen fra Europa til oversjøiske områder","Den andre industrielle revolusjon med stål og elektrisitet"],
      explanation: "Kapløpet om Afrika beskriver hvordan europeiske makter på få tiår gikk fra å kontrollere ca. 10 % til over 90 % av kontinentet (1870--1914).",
    },
    {
      question: "Hva ble bestemt på Berlin-konferansen 1884--85?",
      options: ["Regler for europeernes deling av Afrika, uten at afrikanske ledere var invitert", "At den transatlantiske slavehandelen skulle gjeninnføres i koloniene", "At afrikanske konger skulle innkalles til å styre kontinentet selv", "At Afrika straks skulle frigjøres og styres av afrikanerne selv"],
      explanation: "Berlin-konferansen regulerte europeernes kolonisering av Afrika, blant annet med prinsippet om \"effektiv okkupasjon\". Ingen afrikanske ledere var invitert, og grensene delte ofte folkegrupper.",
    },
    {
      question: "Hvilket afrikansk land beholdt sin uavhengighet og beseiret Italia i 1896?",
      options: ["Etiopia", "Kongo", "Nigeria", "Algerie"],
      explanation: "Etiopia var det eneste afrikanske landet som beholdt sin uavhengighet. Keiser Menelik II moderniserte hæren og beseiret Italia ved Adwa i 1896.",
    },
    {
      question: "Hva viser at afrikanere ikke var passive ofre for koloniseringen?",
      options: ["De valgte ulike strategier som væpnet motstand og diplomatisk tilpasning", "At de aldri traff egne valg, men fulgte europeernes ordre passivt", "At de ønsket europeisk kolonisering hjertelig velkommen overalt", "At de manglet både ledere, diplomater og organisert militærmakt"],
      explanation: "Afrikanske ledere, handelsmenn og diplomater tok aktive valg -- fra væpnet motstand (Samori Ture, zuluene) til strategisk tilpasning -- selv om europeisk militærteknologi ofte ga overtaket.",
    },
    {
      question: "Hvilken koloni var kjent for ekstrem brutalitet under kong Leopold II?",
      options: ["Kongo-Fristaten", "Mosambik", "Senegal, som var Frankrikes viktigste vestafrikanske koloni", "Senegal"],
      explanation: "Kongo-Fristaten var kong Leopold IIs personlige eiendom (1885--1908) og ble kjent for ekstrem brutalitet, særlig i utnyttelsen av gummi.",
    },
  ],
  "historie-9-3": [
    {
      question: "Hvilken koloni ble kalt \"juvelen i kronen\" for Storbritannia?",
      options: ["India", "Kina", "Australia", "Egypt"],
      explanation: "India ble Storbritannias viktigste koloni -- \"juvelen i kronen\" -- og en kilde til råvarer, soldater og marked for britiske varer.",
    },
    {
      question: "Hva var Britisk Raj?",
      options: ["Perioden med direkte britisk styre over India (1858--1947)", "Det britiske ostindiske kompani", "Det store indiske sepoy-opprøret mot britisk overherredømme i 1857", "Det britiske ostindiske handelskompaniet som styrte India frem til 1858"],
      explanation: "Britisk Raj (1858--1947) var perioden med direkte britisk statsstyre over India, etter det indiske opprøret i 1857. Dronning Victoria ble keiserinne av India i 1876.",
    },
    {
      question: "Hva handlet opiumskrigene om?",
      options: ["Storbritannias salg av opium til Kina, som Kina forsøkte å stoppe","En krig om kontrollen over krydderhandelen mellom India og europeiske kjøpmenn","En territorial konflikt mellom Japan og Kina om innflytelse i Korea","Kinas mislykkede forsøk på å invadere og kolonisere det britiske India"],
      explanation: "Storbritannia solgte opium fra India til Kina for å balansere handelen. Da Kina forsøkte å stoppe importen, svarte Storbritannia med krig og vant (1839--42).",
    },
    {
      question: "Hva måtte Kina godta i Nanjing-traktaten (1842)?",
      options: ["Å åpne havner for britisk handel og avstå Hongkong", "Å forby all utenlandsk handel", "Å sende en kinesisk hær for å invadere og erobre det britiske India", "Å innføre et fullstendig forbud mot all handel med utenlandske makter"],
      explanation: "I Nanjing-traktaten måtte Kina åpne fem havner for britisk handel, avstå Hongkong og betale stor krigserstatning -- begynnelsen på de \"ulike traktatene\".",
    },
    {
      question: "Hvilket asiatisk land ble selv en imperialistmakt etter Meiji-restaurasjonen?",
      options: ["Japan", "India", "Vietnam", "Thailand"],
      explanation: "Japan moderniserte raskt etter Meiji-restaurasjonen (1868) og ble selv en imperialistmakt, og tok Taiwan (1895), Korea (1910) og deler av Kina.",
    },
  ],
  "historie-9-4": [
    {
      question: "Hvordan formet kolonialismen koloniene økonomisk?",
      options: ["De ble utviklet for å eksportere råvarer, ikke for å dekke egne behov","De sluttet helt med all utenrikshandel og ble lukkede, selvforsynte økonomier","De ble raskt industrialisert med egne fabrikker og selvstendig produksjon","De oppnådde full økonomisk selvstendighet og frigjorde seg fra Europa tidlig"],
      explanation: "Koloniene ble eksportøkonomier utviklet for å levere råvarer til Europa, ikke for å dekke egne behov. Infrastrukturen ble bygget for å frakte råvarer ut, ikke binde landet sammen.",
    },
    {
      question: "Hvilken politisk konsekvens fikk de koloniale grensene?",
      options: ["Kunstige grenser delte etniske grupper og skapte konflikter etter uavhengigheten", "De ble alltid tegnet på nytt og tilpasset lokalbefolkningen ved uavhengigheten", "De hadde ingen politisk betydning etter at koloniene ble selvstendige stater", "De fulgte alltid de eksisterende etniske og språklige grensene helt presist"],
      explanation: "Koloniale grenser delte ofte etniske grupper eller slo sammen rivaliserende grupper, noe som skapte konflikter etter uavhengigheten.",
    },
    {
      question: "Hvordan diskuterer historikere kolonialismens konsekvenser?",
      options: ["De fleste er enige om undertrykkelse, men debatterer hvor mye av dagens utfordringer som skyldes koloniarven", "Ingen historikere mener at kolonialismen hadde noen varige konsekvenser i det hele tatt", "Alle historikere er fullstendig enige om absolutt alle sider ved kolonitiden", "Temaet blir aldri diskutert av historikere fordi kildene er gått helt tapt"],
      explanation: "De fleste er enige om at kolonialismen innebar undertrykkelse og utnyttelse, men det debatteres hvor mye av dagens utfordringer som skyldes koloniarven versus andre faktorer.",
    },
    {
      question: "Hva er en kulturell konsekvens av kolonialismen som fortsatt merkes?",
      options: ["Europeiske språk er offisielle språk i mange tidligere kolonier","Koloniene innførte europeiske rettssystemer, men ingen europeiske språk","De lokale språkene ble enerådende og fortrengte alle europeiske språk","Ingen mennesker bruker lenger europeiske språk i de tidligere koloniene"],
      explanation: "Europeiske språk (engelsk, fransk, portugisisk) ble offisielle språk i mange tidligere kolonier og brukes fortsatt i utdanning og administrasjon.",
    },
    {
      question: "Når akselererte avkoloniseringen?",
      options: ["Etter andre verdenskrig", "På 1700-tallet", "Under første verdenskrig", "På 1990-tallet"],
      explanation: "Avkoloniseringen akselererte etter andre verdenskrig og skapte mange nye stater, men arven fra kolonitiden forsvant ikke.",
    },
  ],
  "historie-10-1": [
    {
      question: "Hva er et kulturmøte?",
      options: ["En situasjon der mennesker med ulik kulturell bakgrunn kommer i kontakt", "En vitenskapelig konferanse der forskere presenterer sine faglige funn", "Et møte mellom to personer som deler nøyaktig samme kulturelle bakgrunn", "En militær konflikt mellom to stater med samme religion og språk"],
      explanation: "Et kulturmøte er en situasjon der mennesker med ulik kulturell bakgrunn kommer i kontakt -- gjennom handel, migrasjon, erobring eller annen utveksling.",
    },
    {
      question: "Hva er assimilering?",
      options: ["Når en minoritet gradvis tar opp majoritetskulturen og mister sin egen", "Sammenblanding av to religioner til noe nytt", "Når en kultur militært erobrer en annen kultur og tar over dens område", "Sammenblanding av to religioner som smelter sammen til en helt ny religion"],
      explanation: "Assimilering er når en minoritet gradvis tar opp majoritetskulturen og mister sin opprinnelige kultur. Synkretisme er derimot sammenblanding til noe nytt.",
    },
    {
      question: "Hva var Silkeveien?",
      options: ["Et handelsnettverk mellom Kina og Middelhavet", "En pilegrimsrute til Jerusalem", "En sjørute som portugiserne fant rundt Afrika til India på 1400-tallet", "En vei bygd av Romerriket"],
      explanation: "Silkeveien var et handelsnettverk mellom Kina og Middelhavet (ca. 200 f.Kr.--1450 e.Kr.) som spredte varer, ideer, religion og sykdommer.",
    },
    {
      question: "Hva kjennetegner et asymmetrisk kulturmøte?",
      options: ["Den ene parten har mer makt enn den andre", "Begge parter er helt likestilte", "Det skjer kun mellom likeverdige naboland", "Det involverer ingen makt i det hele tatt"],
      explanation: "Et asymmetrisk kulturmøte er et møte der én part har mer makt enn den andre, ofte gjennom militær styrke, teknologi eller økonomi. Kolonialismen er et tydelig eksempel.",
    },
    {
      question: "Hva er den colombianske utvekslingen et eksempel på?",
      options: ["Utveksling av planter, dyr, sykdommer og mennesker mellom Europa og Amerika", "Vikingenes handels- og krigsreiser østover til Bysants og Konstantinopel", "Utstrakt handel med luksusvarer og silke langs den gamle Silkeveien", "Den islamske ekspansjonen og spredningen av islam over Midtøsten"],
      explanation: "Den colombianske utvekslingen var utvekslingen av planter, dyr, sykdommer og mennesker mellom Europa og Amerika etter 1492 -- et omfattende kulturmøte.",
    },
  ],
  "historie-10-2": [
    {
      question: "Hva kjennetegnet tidlig verdenshandel som Silkeveien?",
      options: ["Handel med luksusvarer, lang reisetid og høy risiko","Rask og risikofri transport med faste ruteplaner og lave kostnader","Massehandel med billige industrivarer produsert i store fabrikker","Handel som utelukkende foregikk innenfor grensene til ett enkelt land"],
      explanation: "Tidlig verdenshandel handlet om luksusvarer (krydder, silke, edelstener) med lang reisetid, høy risiko og begrenset volum, ofte via mange mellomledd.",
    },
    {
      question: "Hva var Det nederlandske ostindiske kompani (VOC)?",
      options: ["Verdens første store aksjeselskap, som handlet med krydder fra Indonesia", "Et statlig norsk oljeselskap grunnlagt for å utvinne olje i Nordsjøen", "En norsk middelalderby med omfattende handel og eget kjøpstadsprivilegium", "En kinesisk keiserlig handelsorganisasjon med monopol på silkeeksport"],
      explanation: "VOC (1602--1799) var verdens første store aksjeselskap, med statlig monopol på handel. Det handlet med krydder fra Indonesia og etablerte kolonier.",
    },
    {
      question: "Hva erstattet merkantilismen som økonomisk ideal på 1800-tallet?",
      options: ["Frihandelsidealer med mindre toll og statlig inngripen", "Gjeninnføring av byttehandel", "Enda strengere handelsmonopoler kontrollert direkte av staten", "Et fullstendig forbud mot all internasjonal handel mellom land"],
      explanation: "Fra 1800-tallet ble merkantilismen erstattet av frihandelsidealer med mindre toll og statlig inngripen, der Storbritannia ledet an.",
    },
    {
      question: "Hvordan påvirket ny teknologi verdenshandelen på 1800-tallet?",
      options: ["Dampskip, jernbaner og telegraf reduserte reisetid og muliggjorde massehandel", "Den hadde ingen som helst betydning for hvordan varer ble fraktet", "Den førte til betydelig mindre handel mellom land og verdensdeler", "Den gjorde handelen langt langsommere og mer risikabel enn før"],
      explanation: "Dampskip reduserte reisetiden, jernbaner fraktet varer til havner, og telegrafen muliggjorde rask kommunikasjon -- handelen ble massehandel med industrivarer og råvarer.",
    },
    {
      question: "Hva kjennetegnet den \"første globaliseringen\" (1870--1914)?",
      options: ["Rask vekst i verdenshandel, investeringer og migrasjon","Sterk vekst i handelen, men nesten ingen kapitalflyt over grensene","En brå slutt på all migrasjon på tvers av landegrenser og hav","En fullstendig stans i all internasjonal handel mellom verdensdelene"],
      explanation: "Den første globaliseringen (1870--1914) var en periode med rask vekst i verdenshandel, investeringer og migrasjon. Handelen nådde ikke samme nivå igjen før 1970-tallet.",
    },
  ],
  "historie-10-3": [
    {
      question: "Hvorfor regnes den neolittiske revolusjon som så viktig?",
      options: ["Den var overgangen til jordbruk og grunnlaget for byer og sivilisasjoner", "Den avskaffet alt jordbruk og førte folk tilbake til jeger-sanker-livet", "Den hadde ingen langsiktige konsekvenser for hvordan mennesker levde", "Den førte til en kraftig og varig nedgang i verdens befolkning"],
      explanation: "Den neolittiske revolusjon (ca. 10 000 f.Kr.) var overgangen fra jeger-sanker-samfunn til jordbruk, og la grunnlaget for bofaste samfunn, byer og sivilisasjoner.",
    },
    {
      question: "Hva kjennetegnet den grønne revolusjonen på 1960-tallet?",
      options: ["Nye kornsorter, kunstgjødsel og irrigasjon økte avlingene dramatisk", "Tilbakegang til tradisjonelt jordbruk", "En fullstendig slutt på all kornproduksjon i de fattigste delene av verden", "En bevisst tilbakegang til tradisjonelt og småskala jordbruk uten teknologi"],
      explanation: "Den grønne revolusjonen (1960-tallet) brukte nye kornsorter, kunstgjødsel, plantevernmidler og irrigasjon, som økte avlingene dramatisk, særlig i Asia.",
    },
    {
      question: "Hvilke tre kornsorter gir til sammen over 40 % av menneskehetens kalorier?",
      options: ["Hvete, ris og mais", "Bygg, rug og havre", "Poteter, bønner og squash", "Sukkerrør, kakao og kaffe"],
      explanation: "Hvete, ris og mais er de tre viktigste kornsortene og gir til sammen over 40 % av menneskehetens kalorier.",
    },
    {
      question: "Hva er en fare ved monokulturer?",
      options: ["De er effektive, men sårbare for sykdommer og prisfall","De gjør jorda mer fruktbar år for år uten bruk av gjødsel","De gir alltid systematisk lavere avlinger enn variert småskala dyrking","De krever ingen form for arbeidskraft eller innsatsfaktorer for å drives"],
      explanation: "Monokultur (dyrking av én avling over store områder) er effektivt, men sårbart. Da poteten sviktet i Irland (1845--52), døde over én million mennesker.",
    },
    {
      question: "Hva advarte Thomas Malthus om i 1798?",
      options: ["At befolkningsveksten ville overstige matproduksjonen", "At matproduksjonen ville vokse for raskt", "At matproduksjonen ville vokse altfor raskt og gi varig overskudd av mat", "At befolkningen ville falle dramatisk"],
      explanation: "Malthus advarte i 1798 om at befolkningsveksten ville overstige matproduksjonen. Det har ikke slått til globalt, men lokale kriser har bekreftet bekymringen.",
    },
  ],
  "historie-10-4": [
    {
      question: "Hva studerer miljøhistorie?",
      options: ["Forholdet mellom mennesker og miljøet gjennom historien", "Naturens utvikling uten mennesker", "Politiske valg og styreformer i antikkens greske og romerske samfunn", "Utelukkende moderne klimapolitikk og internasjonale klimaavtaler i dag"],
      explanation: "Miljøhistorie studerer forholdet mellom mennesker og natur -- hvordan mennesker har påvirket miljøet, og hvordan miljøet har påvirket menneskesamfunn.",
    },
    {
      question: "Hvilket syn på naturen har dominert i Vesten siden opplysningstiden?",
      options: ["Natur som ressurs som skal utnyttes til menneskers beste","Natur som hellig, der inngrep krever tillatelse fra prestene","At naturen ikke har noen egenverdi og bør ignoreres av samfunnet helt","At mennesket er fullstendig underlagt naturen og ikke kan påvirke den"],
      explanation: "Synet på natur som ressurs har dominert siden opplysningstiden. Francis Bacon mente \"viten er makt\" over naturen. Romantikken reagerte senere mot dette.",
    },
    {
      question: "Hva kalles perioden etter 1950 med eksponentiell vekst i miljøindikatorer?",
      options: ["Den store akselerasjonen", "Den neolittiske revolusjon", "Den lille istid", "Den industrielle revolusjon"],
      explanation: "\"Den store akselerasjonen\" (etter 1950) er betegnelsen på eksponentiell vekst i alle miljøindikatorer -- befolkning, energibruk, utslipp og arealbruk.",
    },
    {
      question: "Hvilken bok av Rachel Carson (1962) var banebrytende for miljøbevegelsen?",
      options: ["\"Silent Spring\"", "\"Kapitalen\"", "\"Limits to Growth\"", "\"Nasjonenes velstand\""],
      explanation: "Rachel Carsons \"Silent Spring\" (1962) om sprøytemidler var banebrytende for den moderne miljøbevegelsen som vokste fram fra 1960-tallet.",
    },
    {
      question: "Hvordan definerte Brundtland-rapporten (1987) bærekraftig utvikling?",
      options: ["Utvikling som møter dagens behov uten å ødelegge for fremtidige generasjoner", "Utvikling som maksimerer dagens forbruk uansett fremtidige konsekvenser", "Utvikling som helt unngår enhver form for økonomisk vekst og fremgang", "Utvikling som kun kommer de aller rikeste industrilandene til gode"],
      explanation: "Brundtland-rapporten (1987) definerte bærekraftig utvikling som utvikling som møter dagens behov uten å ødelegge fremtidige generasjoners mulighet til å møte sine behov.",
    },
  ],
  "historie-11-1": [
    {
      question: "Hva står akronymet MAIN for når man forklarer årsakene til første verdenskrig?",
      options: ["Militarisme, Allianser, Imperialisme, Nasjonalisme", "Migrasjon, Avtaler, Industri, Nøytralitet", "Marxisme, Adelsvelde, Industrialisme og Nasjonalforsamling som drivkrefter", "Marx, Adel, Industri, Nasjon"],
      explanation: "MAIN står for Militarisme, Allianser, Imperialisme og Nasjonalisme -- de fire langsiktige årsakene til første verdenskrig.",
    },
    {
      question: "Hvilke to alliansesystemer delte Europa før første verdenskrig?",
      options: ["Trippelalliansen og Trippelententen","Hansaforbundet og Kalmarunionen","Aksemaktene og de allierte","NATO og Warszawapakten"],
      explanation: "Europa var delt i Trippelalliansen (Tyskland, Østerrike-Ungarn, Italia) og Trippelententen (Frankrike, Russland, Storbritannia).",
    },
    {
      question: "Hvorfor gjorde alliansesystemet en lokal konflikt til en storkrig?",
      options: ["Alliansene trakk automatisk flere stormakter inn da Østerrike-Ungarn angrep Serbia", "Alliansene inneholdt ingen gjensidige militære forpliktelser mellom landene", "Alliansene gjaldt utelukkende økonomisk samarbeid og handel, ikke militært", "Alliansene forhindret all krig og virket helt fredsbevarende i Europa"],
      explanation: "Alliansene var ment å avskrekke krig, men gjorde at en lokal konflikt automatisk ble en storkrig: angrepet på Serbia trakk inn Russland, så Tyskland, Frankrike og Storbritannia.",
    },
    {
      question: "Hva var den utløsende årsaken til første verdenskrig?",
      options: ["Attentatet på erkehertug Franz Ferdinand i Sarajevo 28. juni 1914","Den tyske invasjonen av det nøytrale Belgia i august 1914, som trakk Storbritannia inn","Det tyske angrepet på Polen som markerte begynnelsen på storkrigen","Stormingen av Bastillen i Paris som satte i gang en blodig revolusjon"],
      explanation: "Attentatet i Sarajevo 28. juni 1914, der Gavrilo Princip skjøt erkehertug Franz Ferdinand av Østerrike-Ungarn, ble den utløsende årsaken til krigen.",
    },
    {
      question: "Hvorfor ble Balkan kalt \"Europas kruttønne\"?",
      options: ["Det osmanske rikets tilbaketrekning skapte maktvakuum og konflikter mellom nye nasjonalstater", "Det fantes overhodet ingen nasjonalisme eller stridende folkegrupper der", "Det var tvert imot en helt fredelig og stabil region uten spenninger", "De europeiske stormaktene hadde ingen som helst interesser i området"],
      explanation: "Balkan var ustabilt fordi Det osmanske rikets tilbaketrekning skapte maktvakuum og konflikter, blant annet mellom Serbia (pan-slavisme) og Østerrike-Ungarn.",
    },
  ],
  "historie-11-2": [
    {
      question: "Hvorfor ble første verdenskrig en langvarig stillingskrig?",
      options: ["Nye våpen gjorde forsvar langt enklere enn angrep, og fronten stivnet", "Begge sider manglet soldater og kunne knapt bemanne frontlinjene", "Krigen var faktisk over allerede etter få uker med raske gjennombrudd", "Det fantes ingen ny militærteknologi som endret måten krigen ble ført på"],
      explanation: "Industrialiseringen endret krigføringen: maskingevær og artilleri gjorde forsvar langt enklere enn angrep, og fronten på vestfronten stivnet i et blodig skyttergravssystem.",
    },
    {
      question: "Hva kjennetegnet livet i skyttergravene?",
      options: ["Gjørme, rotter, lus og konstant fare for artilleri og snikskyttere", "Rene brakker, varme senger og daglig legetilsyn for alle soldater", "Kortvarige vakter, rikelig proviant og full beskyttelse mot artilleri", "Frisk luft, tørt underlag og trygg avstand fra fiendens skyts"],
      explanation: "Livet i skyttergravene var preget av gjørme, rotter, lus, konstant fare for artilleri og snikskyttere, sykdommer som skyttergravsfot og \"granatsjokk\" (PTSD).",
    },
    {
      question: "Hvilket våpen ble først brukt av Tyskland i 1915 og skapte forferdelig lidelse?",
      options: ["Giftgass", "Atombomben", "Stridsvognen", "Maskingeværet"],
      explanation: "Giftgass ble først brukt av Tyskland i 1915. Klorgass, sennepsgass og andre kjemiske våpen skapte forferdelig lidelse.",
    },
    {
      question: "Hva menes med total krig?",
      options: ["En krig der hele samfunnet -- industri, økonomi og sivilbefolkning -- mobiliseres", "En krig som bare involverer soldater", "En krig som holdes borte fra hjemmefronten, slik at næringsliv og økonomi fortsetter helt uforstyrret", "En avgrenset og kortvarig konflikt mellom to hærer, uten rasjonering, propaganda eller økonomisk omstilling"],
      explanation: "Total krig er en krig der hele samfunnet mobiliseres -- ikke bare militæret, men også industri, økonomi og sivilbefolkning, med rasjonering og propaganda.",
    },
    {
      question: "Hvilken konsekvens fikk kvinners arbeid under krigen?",
      options: ["Det bidro til at kvinner fikk stemmerett etter krigen", "Det førte til at kvinner mistet alle rettigheter", "Det stengte kvinner varig ute fra industri og yrkesliv da mennene kom hjem", "Det stengte kvinner ute fra arbeidslivet"],
      explanation: "Med menn i krigen tok kvinner over jobber i industri og jordbruk. Dette bidro til at kvinner fikk stemmerett i mange land etter krigen.",
    },
  ],
  "historie-11-3": [
    {
      question: "Hvilken politikk valgte de nordiske landene da første verdenskrig brøt ut?",
      options: ["Nøytralitet", "Å erklære krig mot Tyskland", "Å gå inn på Ententens side", "Å danne en egen allianse mot Russland"],
      explanation: "Norge, Sverige og Danmark erklærte seg nøytrale da krigen brøt ut. De ble ikke direkte dratt inn i kamphandlingene, men ble likevel sterkt påvirket.",
    },
    {
      question: "Hvorfor var norsk nøytralitet i praksis britiskvennlig?",
      options: ["Norge var avhengig av import via britisk-kontrollerte sjøruter og fraktet varer for Ententen","Norge inngikk en formell forsvarsallianse med Storbritannia som forpliktet landet til å delta i krigen","Norge kuttet all utenrikshandel og var derfor helt uavhengig av både britiske og tyske sjøruter","Norge nektet konsekvent å handle med noen av de stridende partene for å beskytte sin nøytralitet"],
      explanation: "Norge var avhengig av import (mat, kull) via britisk-kontrollerte sjøruter, og norsk skipsfart fraktet varer for Ententen. Tyskland så Norge som reelt alliert med Storbritannia.",
    },
    {
      question: "Hvilken risiko møtte norsk skipsfart under krigen?",
      options: ["Tyske u-båter senket skip som fraktet varer til fienden", "Skipene var helt trygge på grunn av nøytraliteten", "Britiske krigsskip senket systematisk norske handelsfartøy for å ramme Tyskland", "Det var ingen handel under krigen"],
      explanation: "Tyske u-båter angrep skip som fraktet varer til fienden. Ca. 2000 norske sjømenn døde og over 800 norske skip ble senket, selv om Norge offisielt var nøytralt.",
    },
    {
      question: "Hva ble innført i Norge i 1917 på grunn av matmangel?",
      options: ["Rasjonering", "Full handelsfrihet", "Atomvåpen", "Republikk"],
      explanation: "Britisk blokade og u-båtkrig gjorde matimport vanskelig, og rasjonering ble innført i Norge i 1917. Dyrtiden førte til protester og streiker.",
    },
    {
      question: "Hva var \"jobbetiden\" under krigen?",
      options: ["En periode der spekulanter kjøpte og solgte varer for rask fortjeneste", "En tid med full sysselsetting for alle", "Tiden da norske kvinner for første gang fikk stemmerett og adgang til Stortinget", "Perioden da myndighetene innførte streng rasjonering av mat og andre knappe varer"],
      explanation: "Jobbetiden var perioden der spekulanter kjøpte og solgte varer for rask fortjeneste på varemangelen. Ordet \"jobber\" ble negativt, mens vanlige folk slet.",
    },
  ],
  "historie-11-4": [
    {
      question: "Når sluttet første verdenskrig?",
      options: ["11. november 1918", "8. mai 1945", "28. juni 1914", "1. september 1939"],
      explanation: "Første verdenskrig sluttet med våpenhvile 11. november 1918, klokken 11. Over 17 millioner var døde og fire imperier hadde kollapset.",
    },
    {
      question: "Hvilke fire imperier kollapset som følge av første verdenskrig?",
      options: ["Det tyske, Østerrike-Ungarn, Det osmanske og Det russiske","Det spanske, portugisiske, nederlandske og danske kolonirike falt","Romerriket, Bysants, Persarriket og det gamle Egypt falt samtidig sammen","Det britiske, franske, spanske og portugisiske koloniriket gikk i oppløsning"],
      explanation: "Fire imperier kollapset: Det tyske keiserriket, Østerrike-Ungarn, Det osmanske riket og Det russiske tsarriket (revolusjon 1917). Nye stater oppsto.",
    },
    {
      question: "Hva fastslo krigsskyldsklausulen (artikkel 231) i Versailles-traktaten?",
      options: ["At Tyskland måtte akseptere skylden for krigen", "At alle land delte skylden likt", "At ingen av partene bar noe ansvar for at verdenskrigen brøt ut i 1914", "At Frankrike fikk skylden"],
      explanation: "Krigsskyldsklausulen (artikkel 231) påla Tyskland å akseptere skylden for krigen. Sammen med erstatninger og territorielle tap skapte dette dyp bitterhet.",
    },
    {
      question: "Hvorfor kalte tyskerne Versailles-traktaten et \"diktat\"?",
      options: ["Den var påtvunget, ikke forhandlet -- Tyskland fikk ikke delta", "Den ble forhandlet på like vilkår", "Den ga faktisk Tyskland en rekke nye kolonier og utvidet landets grenser", "Den var altfor mild mot Tyskland og stilte knapt noen krav til taperlandet"],
      explanation: "Tyskerne kalte traktaten \"diktat\" fordi den var påtvunget, ikke forhandlet -- de seirende maktene forhandlet uten Tyskland. Dette skapte grobunn for revansje.",
    },
    {
      question: "Hva var Folkeforbundet (League of Nations)?",
      options: ["En internasjonal organisasjon grunnlagt i 1920 for å bevare freden", "En europeisk koloni i Afrika som stormaktene styrte i fellesskap", "Et nordisk handelsforbund som samordnet toll og handel mellom landene", "En militærallianse inngått mellom Tyskland og Russland etter freden i 1920"],
      explanation: "Folkeforbundet (1920) var en internasjonal organisasjon for å bevare freden, basert på Wilsons idé. Det mislyktes i å hindre ny krig, men la grunnlaget for FN.",
    },
  ],
  "historie-12-1": [
    {
      question: "Hva kjennetegnet \"de brølende 20-årene\"?",
      options: ["Økonomisk oppgang og kulturell frigjøring, særlig i USA", "Slutt på all teknologisk utvikling", "Årene da all teknologisk og industriell utvikling stanset opp i Europa og USA", "En periode med dyp og vedvarende økonomisk depresjon i hele den vestlige verden"],
      explanation: "De brølende 20-årene (ca. 1924--1929) var en periode med økonomisk oppgang og kulturell frigjøring, særlig i USA, med jazz, film og nye forbruksvarer.",
    },
    {
      question: "Hva utløste den store depresjonen i 1929?",
      options: ["Børskrakket på Wall Street (\"svart tirsdag\")","Første verdenskrigs utbrudd og mobiliseringen i 1914","Berlinmurens fall og den påfølgende krisen i verdensøkonomien","Det japanske angrepet på flåtebasen Pearl Harbor høsten samme år"],
      explanation: "Børskrakket på Wall Street, med \"svart tirsdag\" 29. oktober 1929, utløste en global økonomisk krise -- den store depresjonen -- som varte til slutten av 1930-tallet.",
    },
    {
      question: "Hva var hyperinflasjonen i Tyskland (1923) et resultat av?",
      options: ["At krigen var finansiert med lån og pengetrykking", "For lav pengemengde", "Et plutselig børskrakk i USA som spredte seg direkte til tysk økonomi", "At pengemengden i Tyskland ble holdt altfor lav gjennom hele krigsårene"],
      explanation: "Hyperinflasjonen i Tyskland (1923) skyldtes at krigen var finansiert med lån og pengetrykking. Prisene doblet seg på timer, og middelklassens sparepenger ble ødelagt.",
    },
    {
      question: "Hvilken konsekvens fikk den store depresjonen?",
      options: ["Massiv arbeidsledighet, bankkollaps og sosial uro", "Full sysselsetting og velstand", "En varig slutt på all arbeidsledighet i både Europa og Nord-Amerika", "Sterk vekst i verdenshandelen"],
      explanation: "Den store depresjonen ga massiv arbeidsledighet (25--33 % i mange land), bankkollaps, fattigdom og nedgang i verdenshandelen, noe som undergravde demokratiet.",
    },
    {
      question: "Hvordan spredte den amerikanske krisen seg til Europa?",
      options: ["Amerikanske banker kalte tilbake lån fra Europa", "Europa var helt uavhengig av USA", "Krisen forble et rent amerikansk fenomen og rammet aldri europeiske land", "Europa lånte ut penger til USA"],
      explanation: "Amerikanske banker kalte tilbake lån fra Europa, som førte til krise der. Tyskland, som var avhengig av amerikanske lån, ble særlig hardt rammet.",
    },
  ],
  "historie-12-2": [
    {
      question: "Hva er totalitarisme?",
      options: ["Et system der staten søker total kontroll over alle sider av samfunnet og individets liv", "Et politisk system med sterkt begrenset statsmakt og vide friheter for borgerne", "Et samfunn helt uten styrende ideologi, propaganda eller sentralisert lederskap", "Et rent demokratisk styresett der makten deles mellom flere uavhengige partier"],
      explanation: "Totalitarisme er et politisk system der staten søker total kontroll over alle sider av samfunnet og individets liv, med enpartistyre, lederkult, terror og propaganda.",
    },
    {
      question: "Hva er forskjellen mellom totalitarisme og autoritarisme?",
      options: ["Autoritære regimer vil holde på makten, totalitære vil forme hele samfunnet og menneskesinnet", "Autoritære regimer bygger alltid på en utpreget lederkult og massemobilisering", "Det finnes i praksis ingen reell forskjell mellom de to styreformene", "Totalitære regimer er langt mer demokratiske enn de autoritære er"],
      explanation: "Autoritære regimer nøyer seg med å holde på makten, mens totalitære regimer vil forme hele samfunnet og menneskesinnet gjennom ideologi, terror og massemobilisering.",
    },
    {
      question: "Hvem grunnla fascismen i Italia?",
      options: ["Benito Mussolini", "Vladimir Lenin", "Adolf Hitler, som overtok makten i Tyskland", "Adolf Hitler"],
      explanation: "Benito Mussolini grunnla fascismen i Italia (1922--43). Den kjennetegnes av nasjonalisme, korporativisme, militarisme og motstand mot liberalisme og demokrati.",
    },
    {
      question: "Hva la nazismen til i forhold til fascismen?",
      options: ["Ekstrem rasisme og antisemittisme", "Avvisning av all nasjonalisme", "En sterkere satsing på demokrati og folkevalgte forsamlinger", "Større ytringsfrihet"],
      explanation: "Nazismen (Tyskland, 1933--45) bygde på fascismen, men la til ekstrem rasisme og antisemittisme, med raseteori, lebensraum og førerprinsippet.",
    },
    {
      question: "Hva skjedde med jordbruket under Stalin i Sovjetunionen?",
      options: ["Kollektivisering førte til hungersnød der millioner døde", "Jordbruket ble privatisert fullt ut", "Bøndene fikk eie sin egen jord og drive gårdene helt fritt for staten", "Det skjedde i praksis ingen endringer i landbruket under Stalins styre"],
      explanation: "Under Stalin ble jordbruket kollektivisert, noe som førte til hungersnød der millioner døde. Den store terroren (1936--38) ga massehenrettelser og gulag-leirer.",
    },
  ],
  "historie-12-3": [
    {
      question: "Hvorfor overlevde demokratiet i Norge i mellomkrigstiden?",
      options: ["Politisk kompromiss og samarbeid, som kriseforliket i 1935, dempet konfliktene", "Fordi Norge i mellomkrigstiden avskaffet Stortinget og innførte enevelde", "Fordi landet aldri opplevde økonomiske kriser eller klassekonflikt i disse årene", "Fordi Nasjonal Samling vant flertall og styrte landet på demokratisk vis"],
      explanation: "Til tross for økonomiske kriser og klassekonflikt overlevde demokratiet i Norge, blant annet på grunn av politisk kompromiss som kriseforliket i 1935 mellom Arbeiderpartiet og Bondepartiet.",
    },
    {
      question: "Hva var Menstadslaget (1931)?",
      options: ["Et sammenstøt mellom politi/militær og arbeidere i Skien", "En sjøslag under verdenskrigen", "En kortvarig krig mellom Norge og Sverige om grensen i sør", "Et sjøslag utenfor Skiensfjorden under den første verdenskrig"],
      explanation: "Menstadslaget (1931) var et sammenstøt mellom politi/militær og arbeidere i Skien -- et symbol på alvoret i klassekonflikten i mellomkrigstidens Norge.",
    },
    {
      question: "Hvem grunnla Nasjonal Samling (NS) i 1933?",
      options: ["Vidkun Quisling","Johan Nygaardsvold","Einar Gerhardsen","Marcus Thrane, arbeiderleder"],
      explanation: "Vidkun Quisling grunnla Nasjonal Samling (NS) i 1933 etter fascistisk modell. Partiet fikk aldri mer enn 2 % ved valg, men ble viktig under okkupasjonen.",
    },
    {
      question: "Hva gikk kriseforliket i 1935 ut på?",
      options: ["Arbeiderpartiet og Bondepartiet inngikk et kompromiss om landbruks- og sosialpolitikk", "En avtale mellom partiene om å avskaffe demokratiet og innføre enevelde", "En avtale om å oppløse Stortinget og styre landet ved kongelig dekret", "En militærallianse med Tyskland som skulle sikre norsk forsvarsevne"],
      explanation: "I kriseforliket (1935) støttet Arbeiderpartiet landbrukspolitikk som hjalp bøndene, mens Bondepartiet støttet sosialpolitikk som hjalp arbeidsledige. Det dempet klassekonflikten.",
    },
    {
      question: "Hva var Hovedavtalen (1935)?",
      options: ["En avtale mellom LO og arbeidsgiverne om spilleregler i arbeidslivet", "En omfattende endring av Grunnloven som utvidet kongens myndighet", "En fredsavtale med Sverige som endelig avsluttet unionsstriden", "En traktat som forpliktet Norge til varig militær nøytralitet"],
      explanation: "Hovedavtalen (1935) mellom LO og NAF (arbeidsgiverne) fastla spilleregler i arbeidslivet, der streik og lockout skulle være siste utvei.",
    },
  ],
  "historie-12-4": [
    {
      question: "Hva var Hitlers mål med utenrikspolitikken?",
      options: ["Å rive opp Versailles-traktaten, samle alle tyskere og skaffe \"lebensraum\" i øst", "Å gi fra seg tysk territorium til nabolandene for å dempe spenningen", "Å bevare freden i Europa og respektere alle grensene fra Versailles", "Å avskaffe den tyske hæren og bygge ned all militær opprustning"],
      explanation: "Hitlers mål var å rive opp Versailles-traktaten, samle alle tyskere i ett rike (Anschluss) og skaffe \"lebensraum\" (livsrom) i øst for den \"ariske rase\".",
    },
    {
      question: "Hva var appeasement-politikken?",
      options: ["Å gi etter for Hitlers aggressive krav for å unngå krig","Å bygge opp store hærer for å avskrekke Hitler fra angrep","Å gjeninnføre alle de harde vilkårene fra Versailles-traktaten","Å erklære krig mot Tyskland tidlig for å stanse Hitlers opprustning"],
      explanation: "Appeasement var politikken med å gi etter for aggressive krav for å unngå krig, forbundet med den britiske statsministeren Neville Chamberlain.",
    },
    {
      question: "Hva ble bestemt på München-konferansen i 1938?",
      options: ["Hitler fikk Sudetenland uten at Tsjekkoslovakia var invitert","At Polen ble delt mellom Tyskland og Sovjet","At Tyskland måtte gi fra seg Østerrike etter Anschluss","At de allierte erklærte krig mot Nazi-Tyskland i 1938"],
      explanation: "På München-konferansen (1938) ga Chamberlain og Daladier etter for Hitlers krav om Sudetenland, uten at Tsjekkoslovakia var invitert. Seks måneder senere okkuperte Hitler resten av landet.",
    },
    {
      question: "Hva var Molotov-Ribbentrop-pakten (1939)?",
      options: ["En ikke-angrepspakt mellom Nazi-Tyskland og Sovjetunionen med hemmelig deling av Øst-Europa", "En forsvarsallianse mellom Storbritannia og Frankrike rettet mot Tyskland", "En vidtrekkende handelsavtale om jern og kull mellom Norge og Tyskland", "En fredsavtale mellom stormaktene som skulle hindre en ny verdenskrig"],
      explanation: "Hitler-Stalin-pakten (23. august 1939) var en ikke-angrepspakt med en hemmelig protokoll som delte Øst-Europa i interessesfærer. Den ga Hitler frie hender til å angripe Polen.",
    },
    {
      question: "Hvilken hendelse markerte starten på andre verdenskrig?",
      options: ["Tysklands angrep på Polen 1. september 1939", "Angrepet på Pearl Harbor", "München-konferansen der stormaktene ga etter for Hitlers krav", "Berlinmurens fall og oppløsningen av de tyske interessesfærene"],
      explanation: "1. september 1939 angrep Tyskland Polen. Storbritannia og Frankrike erklærte krig to dager senere, og andre verdenskrig var i gang.",
    },
  ],
  "historie-13-1": [
    {
      question: "Omtrent hvor mange mennesker mistet livet i andre verdenskrig?",
      options: ["Mellom 70 og 85 millioner", "Omtrent 200 millioner", "Omtrent én million mennesker i alt", "Omtrent 17 millioner"],
      explanation: "Mellom 70 og 85 millioner mennesker mistet livet i andre verdenskrig -- den mest ødeleggende konflikten i menneskehetens historie.",
    },
    {
      question: "Hva var blitzkrig?",
      options: ["En krigføringsstrategi med flyangrep, raske panserangrep og motorisert infanteri", "En langvarig stillingskrig i skyttergraver", "En form for spredt geriljakrig der små, mobile grupper unngikk åpne slag og angrep bakfra i fiendtlig terreng", "En strategi bygd på total sjøblokade som skulle kvele fiendens forsyninger og handel til landet ga opp av matmangel"],
      explanation: "Blitzkrig (lynkrig) kombinerte massive flyangrep, raske panserangrep som brøt gjennom fiendens linjer, og motorisert infanteri. Tyskland erobret Polen på fem uker.",
    },
    {
      question: "Hvilken hendelse i juni 1941 tvang Tyskland til å kjempe på to fronter?",
      options: ["Operasjon Barbarossa -- invasjonen av Sovjetunionen", "Angrepet på Pearl Harbor", "Det japanske overraskelsesangrepet på flåtebasen Pearl Harbor, som trakk USA inn i den globale konflikten", "Slaget om Storbritannia"],
      explanation: "Operasjon Barbarossa (juni 1941) var Tysklands invasjon av Sovjetunionen, der Hitler brøt ikke-angrepspakten. Dette tvang Tyskland til tofrontskrig.",
    },
    {
      question: "Hvilken hendelse førte USA inn i andre verdenskrig?",
      options: ["Japans angrep på Pearl Harbor (desember 1941)", "Slaget ved Stalingrad", "De alliertes store landgang på strendene i Normandie, kjent som D-dagen sommeren 1944", "Angrepet på Polen"],
      explanation: "Japans angrep på den amerikanske flåtebasen Pearl Harbor (desember 1941) førte USA inn i krigen. USAs industrielle kapasitet gjorde akseemaktenes nederlag til et tidsspørsmål.",
    },
    {
      question: "Hva markerte det psykologiske vendepunktet i krigen i øst?",
      options: ["Slaget ved Stalingrad (1942--1943)", "Atombomben over Hiroshima", "De alliertes landgang på strendene i Normandie, kjent som D-dagen i juni 1944", "D-dagen i Normandie"],
      explanation: "Ved Stalingrad (1942--1943) ble den tyske 6. armé omringet og tilintetgjort. Tysklands første store nederlag var det psykologiske vendepunktet -- de kunne beseires.",
    },
  ],
  "historie-13-2": [
    {
      question: "Hva var Holocaust?",
      options: ["Nazistenes systematiske forsøk på å utrydde alle jøder i Europa", "En militær operasjon mot Sovjetunionen", "En omfattende fredsavtale som ble forhandlet fram mellom stormaktene like etter krigens slutt", "Et mislykket militært opprør fra tyske offiserer som forsøkte å styrte Hitler og avslutte krigen"],
      explanation: "Holocaust (Shoah) var nazistenes systematiske folkemord der omkring seks millioner jøder ble myrdet mellom 1941 og 1945 -- to tredjedeler av Europas jødiske befolkning.",
    },
    {
      question: "Hva kjennetegnet nazistenes antisemittisme?",
      options: ["Den var rasistisk -- de mente jøder var biologisk underlegne","Den rettet seg mot alle religiøse minoriteter likt, uten å skille ut noen gruppe","Den bygde på gammel europeisk overtro og hadde ingen forbindelse til nazistenes egen ideologi","Den var i hovedsak økonomisk motivert og handlet ikke om påstander om biologiske raseforskjeller"],
      explanation: "Nazistenes antisemittisme var rasistisk -- de mente jøder var biologisk underlegne og en trussel mot den \"ariske rasen\", i motsetning til eldre religiøs antisemittisme.",
    },
    {
      question: "Hvordan utviklet forfølgelsen av jødene seg?",
      options: ["Trinnvis: fra diskriminering, til konsentrasjon i gettoer, til utryddelse", "Den startet direkte med utryddelse i 1933", "Den startet umiddelbart med massedrap allerede da Hitler kom til makten tidlig i 1933", "Den forble en løs uforpliktende plan og ble aldri satt ut i praktisk handling under krigen"],
      explanation: "Holocaust skjedde ikke over natten. Forfølgelsen ble gradvis trappet opp: diskriminering (Nürnberglovene 1935), konsentrasjon i gettoer (1939--41), og utryddelse (1941--45).",
    },
    {
      question: "Hva ble koordinert på Wannsee-konferansen (1942)?",
      options: ["Gjennomføringen av \"den endelige løsning på det jødiske spørsmålet\"", "Opprettelsen av Folkeforbundet", "Den tyske invasjonen av Sovjetunionen og planleggingen av felttoget på østfronten", "Tysklands betingelsesløse kapitulasjon overfor de allierte styrkene ved slutten av krigen"],
      explanation: "På Wannsee-konferansen (20. januar 1942) koordinerte 15 høytstående nazister gjennomføringen av \"den endelige løsning\" -- folkemordet ble planlagt byråkratisk og systematisk.",
    },
    {
      question: "Hvilken var den største utryddelsesleiren?",
      options: ["Auschwitz-Birkenau", "Treblinka", "Dachau utenfor byen München", "Sobibor i det okkuperte Polen"],
      explanation: "Auschwitz-Birkenau var den største utryddelsesleiren, der over 1 million mennesker ble drept. Alle de seks utryddelsesleirene lå i det okkuperte Polen.",
    },
  ],
  "historie-13-3": [
    {
      question: "Når angrep Tyskland Norge?",
      options: ["9. april 1940", "1. september 1939", "8. mai 1945", "7. juni 1905"],
      explanation: "9. april 1940 angrep Tyskland Norge uten forvarsel. Etter to måneders kamp kapitulerte de norske styrkene, og landet var okkupert i fem år.",
    },
    {
      question: "Hvor flyktet kongen og regjeringen under okkupasjonen?",
      options: ["Til London", "Til Stockholm", "Til Berlin", "Til Washington"],
      explanation: "Kongen og regjeringen flyktet til London og ledet motstandskampen derfra. Begrepet \"Quisling\" ble samtidig et internasjonalt ord for landsforræder.",
    },
    {
      question: "Hva var holdningskampen?",
      options: ["Den sivile motstanden mot nazifisering av det norske samfunnet","Kampen mellom NS og andre norske partier om plassene i Stortinget","En rekke væpnede motstandsaksjoner med sabotasje og direkte angrep på tyske militærmål","Det aktive samarbeidet der nordmenn stilte seg lojalt til disposisjon for okkupasjonsmakten"],
      explanation: "Holdningskampen var den sivile motstanden mot nazifisering. Eksempler er lærernes nei til nazistisk lærerorganisasjon, kirkens protest og idrettsstreiken.",
    },
    {
      question: "Hva skjedde med de norske jødene under okkupasjonen?",
      options: ["773 ble deportert til Auschwitz, og bare 38 overlevde","Ingen ble berørt av forfølgelsen","Så godt som alle ble reddet i tide til Sverige","Deportasjonene skjedde uten norsk medvirkning"],
      explanation: "Fra høsten 1942 ble norske jøder systematisk arrestert. 773 ble deportert til Auschwitz med skipet Donau, og bare 38 overlevde. Norsk politi deltok aktivt, mens motstandsfolk hjalp ca. 900 til Sverige.",
    },
    {
      question: "Hvor befant de fleste nordmenn seg under okkupasjonen?",
      options: ["I en gråsone mellom aktiv motstand og aktivt samarbeid", "I aktivt samarbeid med tyskerne", "I eksil i utlandet, ettersom størstedelen av befolkningen flyktet fra landet under okkupasjonen", "I aktiv væpnet motstand"],
      explanation: "De fleste nordmenn befant seg i en gråsone mellom aktiv motstand og aktivt samarbeid -- de fleste valgte en form for tilpasning for å leve så normalt som mulig.",
    },
  ],
  "historie-13-4": [
    {
      question: "Hva var Hjemmefronten?",
      options: ["Den organiserte motstandsbevegelsen i Norge under okkupasjonen", "Et politisk parti etter krigen", "Den tyske okkupasjonsmakten som kontrollerte og styrte Norge gjennom hele krigsårene", "De norske soldatene som kjempet på alliert side ved fronter og til sjøs utenfor Norge"],
      explanation: "Hjemmefronten var den organiserte motstandsbevegelsen i Norge, bestående av bl.a. Sivorg (sivil), Milorg (militær) og XU (etterretning).",
    },
    {
      question: "Hva var Milorg?",
      options: ["Den militære organisasjonen som forberedte væpnet motstand og sabotasje", "Eksilregjeringen i London", "Et illegalt avishus som i hemmelighet trykte og spredte forbudte nyheter under krigen", "Den norske eksilregjeringen som styrte landet fra London gjennom hele okkupasjonstiden"],
      explanation: "Milorg (Militær organisasjon) forberedte væpnet motstand og sabotasje. Ved krigens slutt hadde Milorg ca. 40 000 mann under våpen.",
    },
    {
      question: "Hvilken sabotasjeaksjon i 1943 rammet det tyske atomprogrammet?",
      options: ["Tungtvannsaksjonen på Vemork","Angrepet på Pearl Harbor","Senkingen av krysseren Blücher i Oslofjorden","Slaget om Narvik våren 1940"],
      explanation: "Tungtvannsaksjonen (1943), der norske kommandosoldater ødela tungtvannsproduksjonen på Vemork, regnes som en av krigens viktigste sabotasjeaksjoner.",
    },
    {
      question: "Hva var utefronten?",
      options: ["Nordmenn som kjempet mot tyskerne utenfor Norge","Et illegalt nettverk av aviser","Den sivile motstanden hjemme mot nazifisering","Tyske avdelinger stasjonert i Norge"],
      explanation: "Utefronten var nordmenn som kjempet utenfor Norge -- handelsflåten i konvoier, militære avdelinger, Kompani Linge og flyskvadroner i RAF. Over 4000 mistet livet, de fleste sjøfolk.",
    },
    {
      question: "Hva menes med begrepet handlingsrom under okkupasjonen?",
      options: ["De valgmulighetene mennesker hadde, selv i ekstreme situasjoner", "Det fysiske rommet i en skyttergrav", "Den militære kontrollen tyskerne utøvde over hele det okkuperte norske territoriet", "Den fullstendige mangelen på valgmuligheter som gjorde all individuell handling umulig"],
      explanation: "Handlingsrom beskriver de valgmulighetene mennesker hadde under okkupasjonen. Faktorer som nettverk, geografi og posisjon kunne utvide eller begrense handlingsrommet.",
    },
  ],
  "historie-13-5": [
    {
      question: "Hva var Nürnbergprosessen (1945--1946)?",
      options: ["Rettsoppgjøret mot ledende nazister etter krigen","Opprettelsen av De forente nasjoner","En stor fredskonferanse mellom stormaktene","Det norske landssvikoppgjøret"],
      explanation: "Nürnbergprosessen var rettsoppgjøret mot 24 ledende nazister. Den etablerte prinsippet om individuelt ansvar for krigsforbrytelser, og \"jeg fulgte bare ordre\" ble avvist som forsvar.",
    },
    {
      question: "Hvorfor ble FN grunnlagt i 1945?",
      options: ["For å hindre nye verdenskriger og bevare internasjonal fred","For å straffe alle tyskere med krigsskadeerstatninger og okkupasjon","For å erstatte forsvarsalliansen NATO, som var blitt for svak til å hindre nye konflikter","For å fremme de europeiske stormaktenes kolonivelde og sikre deres kontroll over koloniene"],
      explanation: "De forente nasjoner (FN) ble grunnlagt i 1945 for å hindre nye verdenskriger, bevare internasjonal fred og sikkerhet, og fremme samarbeid og menneskerettigheter.",
    },
    {
      question: "Hvilke land har vetorett i FNs sikkerhetsråd?",
      options: ["USA, Russland, Storbritannia, Frankrike og Kina", "Tyskland, Japan og Italia", "Samtlige medlemsland i organisasjonen, ettersom hvert land har lik stemmerett i rådet", "Bare USA og Russland"],
      explanation: "FNs sikkerhetsråd har fem faste medlemmer med vetorett: USA, Sovjet/Russland, Storbritannia, Frankrike og Kina.",
    },
    {
      question: "Hva var Verdenserklæringen om menneskerettigheter (1948) et svar på?",
      options: ["Holocaust og andre verdenskrig","Den industrielle revolusjon","Den kalde krigens spenning","Den franske revolusjon"],
      explanation: "Verdenserklæringen om menneskerettigheter, vedtatt av FN 10. desember 1948, var et direkte svar på Holocaust og andre verdenskrig.",
    },
    {
      question: "Hvordan ble Europa delt etter andre verdenskrig?",
      options: ["Vest-Europa under amerikansk innflytelse, Øst-Europa under sovjetisk kontroll", "Europa forble fullstendig nøytralt", "Landene ble slått sammen til én felles europeisk stat under et samlet demokratisk styre", "Hele kontinentet ble kommunistisk og falt inn under sovjetisk kontroll like etter krigen"],
      explanation: "Etter krigen ble Europa delt: Vest-Europa under amerikansk innflytelse med demokrati og markedsøkonomi, Øst-Europa under sovjetisk kontroll med kommunistiske regimer. Dette la grunnlaget for den kalde krigen.",
    },
  ],
  "historie-14-1": [
    {
      question: "Hvorfor kalles konflikten mellom USA og Sovjet \"den kalde krigen\"?",
      options: ["Fordi det aldri kom til direkte krig mellom supermaktene", "Fordi den ikke involverte noen våpen", "Fordi konflikten hovedsakelig utspilte seg i kalde og arktiske deler av verden", "Fordi den foregikk i kalde områder"],
      explanation: "Den kalde krigen (1947--1991) kalles \"kald\" fordi det aldri kom til direkte krig mellom supermaktene, selv om verden flere ganger var nær atomkrig.",
    },
    {
      question: "Hva var de to supermaktene etter 1945?",
      options: ["USA og Sovjetunionen", "Storbritannia og Frankrike", "Tyskland og Japan", "Kina og India"],
      explanation: "Etter 1945 fantes bare to supermakter: USA (verdens største økonomi) og Sovjetunionen (verdens største landområde), hver med atomvåpen og hver sin allianseblokk.",
    },
    {
      question: "Hvilken vestlig militærallianse ble dannet i 1949?",
      options: ["NATO", "Warszawapakten", "COMECON", "Folkeforbundet"],
      explanation: "NATO (North Atlantic Treaty Organization) ble dannet i 1949 som vestblokkens militærallianse. Artikkel 5 sier at et angrep på ett medlem er angrep på alle.",
    },
    {
      question: "Hva var jernteppet?",
      options: ["Den ideologiske og fysiske grensen som delte Europa i øst og vest", "En handelsavtale mellom supermaktene", "Selve hovedkvarteret til De forente nasjoner, plassert midt i det delte Europa", "En ny og særlig kraftig type atomvåpen utviklet under kappløpet i den kalde krigen"],
      explanation: "Jernteppet var betegnelsen på den ideologiske og fysiske grensen mellom kommunismen i øst og kapitalismen i vest. Churchill brukte begrepet i en tale i 1946.",
    },
    {
      question: "Hva betyr MAD (Mutual Assured Destruction)?",
      options: ["Begge sider hadde nok atomvåpen til å utslette hverandre -- en terrorbalanse","En doktrine om at den siden som slår først med atomvåpen, vinner krigen raskt","En bindende avtale mellom supermaktene om å avskaffe alle atomvåpen fullstendig","Et nytt alliansesystem som bandt de vestlige landene sammen i felles forsvar mot øst"],
      explanation: "MAD (Mutual Assured Destruction) betyr at begge sider bygde opp så mange atomvåpen at en krig ville utslette begge. Denne terrorbalansen kan ha forhindret direkte krig.",
    },
  ],
  "historie-14-2": [
    {
      question: "Hva er en stedfortrederkrig?",
      options: ["En væpnet konflikt der stormakter kjemper indirekte ved å støtte lokale parter","En konflikt der FN sender inn fredsbevarende styrker i stedet for stridende parter","En direkte og åpen krig der to supermakter møtes ansikt til ansikt på slagmarken","En intern borgerkrig som utspiller seg helt uten innblanding eller støtte fra utlandet"],
      explanation: "En stedfortrederkrig er en konflikt der stormaktene unngår direkte konfrontasjon og i stedet støtter lokale parter med våpen, penger og rådgivere. Eksempler: Korea, Vietnam, Afghanistan.",
    },
    {
      question: "Hvordan endte Koreakrigen (1950--1953)?",
      options: ["Med våpenhvile, men ingen fredsavtale -- Korea forble delt","Med at Korea ble samlet under Sør-Korea","Med at Nord-Korea vant en full seier over hele halvøya","Med at Kina overtok kontrollen over hele Korea"],
      explanation: "Koreakrigen endte med våpenhvile i 1953, men ingen fredsavtale. Korea er fortsatt delt langs 38. breddegrad i dag.",
    },
    {
      question: "Hva ble utfallet av Vietnamkrigen?",
      options: ["USA trakk seg ut, og Nord-Vietnam samlet landet under kommunistisk styre i 1975", "Krigen ble avlyst før den startet", "Vietnam ble delt permanent i en nordlig og en sørlig stat langs en fast avtalt grenselinje", "Konflikten ble avlyst ved forhandlingsbordet før noen kamphandlinger i det hele tatt startet"],
      explanation: "USA trakk seg ut i 1973 etter massiv motstand hjemme, og i 1975 seiret Nord-Vietnam og samlet landet under kommunistisk styre. Ca. 3 millioner vietnamesere og 58 000 amerikanere ble drept.",
    },
    {
      question: "Hva var dominoteorien?",
      options: ["Ideen om at hvis ett land falt til kommunismen, ville nabolandene følge etter", "En økonomisk teori om frihandel", "En økonomisk teori om at fri handel over landegrensene ville skape velstand og fred", "En militær teori om hvordan atomvåpen kunne brukes til å avskrekke fienden fra angrep"],
      explanation: "Dominoteorien var ideen om at hvis ett land falt til kommunismen, ville nabolandene følge etter som dominobrikker. Den ble brukt til å rettferdiggjøre amerikansk intervensjon i Vietnam.",
    },
    {
      question: "Hva var Cuba-krisen (1962)?",
      options: ["Den kalde krigens farligste øyeblikk, da USA oppdaget sovjetiske atomraketter på Cuba","En handelsavtale mellom USA og Cuba om sukkereksport og amerikanske investeringer på øya","USAs mislykkede invasjonsforsøk i Grisebukta, som skulle velte Castros nye styre på øya","Fidel Castros vellykkede maktovertakelse på Cuba, der han styrtet det gamle regimet ved kysten"],
      explanation: "Cuba-krisen (oktober 1962) var den kalde krigens farligste øyeblikk. USA oppdaget sovjetiske atomraketter på Cuba, og etter 13 dager med spenning ble det inngått et kompromiss.",
    },
  ],
  "historie-14-3": [
    {
      question: "Når ble Norge medlem av NATO?",
      options: ["1949", "1940", "1972", "1994"],
      explanation: "Norge ble medlem av NATO i 1949 som ett av de tolv grunnleggerlandene. Erfaringen fra 1940 viste at nøytralitet ikke beskyttet.",
    },
    {
      question: "Hva innebar Norges basepolitikk (1949)?",
      options: ["Nei til permanente utenlandske baser på norsk jord i fredstid", "Allianse med Sovjetunionen", "Ja til amerikanske atomvåpen lagret permanent på norsk jord også i fredstid", "Krav om at NATO skulle bygge faste militærbaser i Finnmark straks etter 1949"],
      explanation: "Basepolitikken (1949) innebar at Norge sa nei til permanente utenlandske baser på norsk jord i fredstid -- en selvpålagt restriksjon for å ikke provosere Sovjet.",
    },
    {
      question: "Hva sa Norges atompolitikk (1957)?",
      options: ["Nei til atomvåpen på norsk jord", "Ja til atomvåpen langs grensen", "At Norge skulle bygge egne atomvåpen", "At Sovjet kunne plassere atomvåpen i Norge"],
      explanation: "Atompolitikken (1957) innebar at Norge sa nei til atomvåpen på norsk jord -- en av de selvpålagte restriksjonene ment å berolige Sovjet.",
    },
    {
      question: "Hva var brobyggingspolitikken?",
      options: ["Norges forsøk på å kombinere NATO-medlemskap med gode relasjoner til Sovjet","Norges forsøk på å megle mellom USA og Sovjet under forhandlingene om atomvåpen","Norges forsøk på å melde seg ut av NATO og heller slutte seg til Warszawapakten","En plan for å bygge fysiske broer og veier mellom Norge og Sovjetunionen i nord"],
      explanation: "Brobyggingspolitikken var Norges forsøk på å kombinere NATO-medlemskap med gode relasjoner til Sovjet -- Norge ville være en \"lojal, men ikke lydig\" alliert.",
    },
    {
      question: "Hvorfor var Norge strategisk viktig for NATO?",
      options: ["Norge grenset til Sovjet og overvåket sovjetisk aktivitet i nordområdene","Norge kontrollerte innseilingen til Østersjøen og kunne stenge den for Sovjet","Norge hadde verdens største stående hær og kunne forsvare hele Vest-Europa alene","Norge lå trygt langt fra all konflikt og var derfor et fredelig bakland for NATO"],
      explanation: "Norge var en frontlinjestat med grense til Sovjet. Norge overvåket sovjetisk aktivitet, inkludert nordflåten på Kolahalvøya, og var \"øyne og ører\" for NATO i nord.",
    },
  ],
  "historie-14-4": [
    {
      question: "Hvem innførte reformene glasnost og perestrojka i Sovjetunionen?",
      options: ["Mikhail Gorbatsjov", "Vladimir Lenin", "Josef Stalin, som styrte Sovjet", "Boris Jeltsin"],
      explanation: "Mikhail Gorbatsjov innførte fra 1985 glasnost (åpenhet) og perestrojka (omstrukturering). Reformene var ment å redde kommunismen, men bidro til dens fall.",
    },
    {
      question: "Hva betyr glasnost?",
      options: ["Åpenhet", "Omstrukturering", "Planøkonomi", "Revolusjon"],
      explanation: "Glasnost betyr åpenhet og innebar større ytringsfrihet, åpnere debatt om samfunnsproblemer og lettelser i sensur. Perestrojka betyr omstrukturering.",
    },
    {
      question: "Hva skjedde i revolusjonsåret 1989?",
      options: ["Kommunismen falt i land etter land i Øst-Europa, og Berlinmuren falt", "Sovjetunionen ble grunnlagt", "Andre verdenskrig sluttet i Europa, og de allierte delte kontinentet mellom seg", "NATO ble opprettet som militærallianse, og den kalde krigen mellom blokkene startet"],
      explanation: "I 1989 falt kommunismen i Øst-Europa: frie valg i Polen, Berlinmurens fall 9. november, Fløyelsrevolusjonen i Tsjekkoslovakia og opprør i Romania.",
    },
    {
      question: "Hvorfor grep ikke Sovjet militært inn i Øst-Europa i 1989?",
      options: ["Gorbatsjov aksepterte at østeuropeerne valgte sin egen vei","Warszawapakten var allerede formelt oppløst før høsten 1989","Sovjet hadde ingen militærmakt igjen etter å ha tapt en krig mot Kina samme år","USA forbød uttrykkelig enhver sovjetisk innblanding gjennom et FN-vedtak i 1989"],
      explanation: "I motsetning til i Ungarn (1956) og Tsjekkoslovakia (1968) grep ikke Sovjet inn militært. Gorbatsjov aksepterte at østeuropeerne valgte sin egen vei.",
    },
    {
      question: "Når ble Sovjetunionen oppløst?",
      options: ["Desember 1991", "November 1989", "August 1991", "Oktober 1990"],
      explanation: "Sovjetunionen ble formelt oppløst 25.--26. desember 1991, da Gorbatsjov gikk av. November 1989 var Berlinmurens fall, og august 1991 det mislykkede kuppforsøket. 15 nye stater oppstod.",
    },
  ],
  "historie-15-1": [
    {
      question: "Hvilken landsdel var hardest rammet av ødeleggelser etter krigen i Norge?",
      options: ["Nord-Norge (Finnmark og Nord-Troms)", "Vestlandet og fjordene", "Sørlandet og kysten", "Østlandet med Oslo"],
      explanation: "Nord-Norge, særlig Finnmark og Nord-Troms, var hardest rammet. Den tyske tilbaketrekningen høsten 1944 (\"den brente jords taktikk\") la det meste i ruiner.",
    },
    {
      question: "Hva var Fellesprogrammet (1945)?",
      options: ["Et politisk samarbeidsdokument som nesten alle partiene stilte seg bak etter krigen", "En plan for norsk EU-medlemskap", "En hemmelig militærplan der partiene ble enige om å angripe Sovjet dersom det truet", "En fredsavtale med Tyskland der Norge fikk erstatning og tyske styrker trakk seg ut"],
      explanation: "Fellesprogrammet (1945) var et samarbeidsdokument som alle partiene unntatt NKP stilte seg bak. Det uttrykte enighet om gjenreisning og å bygge en velferdsstat med blandingsøkonomi.",
    },
    {
      question: "Hva var Marshall-hjelpen?",
      options: ["Amerikansk økonomisk hjelp til gjenreisningen av Europa (1948--1952)","Et felles europeisk hjelpefond finansiert av de vesteuropeiske landene selv","Et stort lån fra Sovjetunionen til gjenreisning av Øst- og Vest-Europa etter krigen","En norsk særskatt på olje- og gassvirksomheten som skulle finansiere velferdsstaten"],
      explanation: "Marshall-hjelpen (1948--1952) var amerikansk økonomisk hjelp til gjenreisningen. Norge mottok ca. 3 milliarder kroner. Den knyttet Norge tettere til Vest og var del av den kalde krigens politikk.",
    },
    {
      question: "Hva er en blandingsøkonomi?",
      options: ["Et system som kombinerer privat og statlig eierskap, marked og offentlig regulering", "En byttebasert økonomi helt uten penger, der varer og tjenester utveksles direkte", "En ren markedsøkonomi der staten aldri griper inn i produksjon, priser eller eierskap", "En ren kommunistisk planøkonomi der staten eier alt og styrer all produksjon sentralt"],
      explanation: "Blandingsøkonomi kombinerer privat og statlig eierskap, markedsøkonomi og offentlig regulering -- et kompromiss mellom ren kapitalisme og kommunistisk planøkonomi.",
    },
    {
      question: "Hvilket parti dominerte norsk politikk i perioden 1945--1965?",
      options: ["Arbeiderpartiet","Bondepartiet, senere Senterpartiet","Høyre, borgerlig","Venstre, liberalt"],
      explanation: "Arbeiderpartiet dominerte perioden 1945--1965 med rent flertall på Stortinget 1945--1961, og Einar Gerhardsen som statsminister mesteparten av tiden.",
    },
  ],
  "historie-15-2": [
    {
      question: "Hva kjennetegner den norske velferdsstaten?",
      options: ["Universelle, rettighetsbaserte og skattefinansierte ordninger for alle", "At staten ikke har noe ansvar for velferd", "Behovsprøvde ordninger som bare gis til de aller fattigste etter grundig kontroll", "At staten overlater alt ansvar for velferd til private forsikringer og frivillige lag"],
      explanation: "Den norske velferdsstaten kjennetegnes av universalitet (ordninger for alle), rettighetsbasering, skattefinansiering og offentlig styring -- et brudd med den gamle fattigforsorgen.",
    },
    {
      question: "Hva var den første virkelig universelle velferdsordningen i Norge?",
      options: ["Barnetrygden (1946)", "Folketrygden (1967)", "Husbanken (1946)", "Lånekassen (1947)"],
      explanation: "Barnetrygden (1946) var en universell ytelse til alle familier med barn, utbetalt til mor -- den første virkelig universelle velferdsordningen.",
    },
    {
      question: "Hva samlet Folketrygden (1967)?",
      options: ["Flere ordninger som alderspensjon, uførepensjon, sykepenger og arbeidsledighetstrygd", "Kun det offentlige helsevesenet, altså sykehus og legetjenester over hele landet", "Bare alderspensjonen, mens sykepenger og uføretrygd fortsatt lå i egne kasser", "Bare barnetrygden, som ble utbetalt til alle familier med barn under atten år"],
      explanation: "Folketrygden (1967) samlet flere ordninger til ett system: alderspensjon, uførepensjon, sykepenger, arbeidsledighetstrygd og fødselspenger.",
    },
    {
      question: "Hvilken endring skjedde med grunnskolen i 1969?",
      options: ["Den 7-årige folkeskolen ble utvidet til 9-årig grunnskole","Den 7-årige folkeskolen ble kortet ned til fem obligatoriske år","Skolen ble helt privatisert, og familiene måtte betale skolepenger for hvert barn","Grunnskolen ble avskaffet og erstattet av privat hjemmeundervisning i regi av kirken"],
      explanation: "I 1969 ble den 7-årige folkeskolen utvidet til 9-årig obligatorisk grunnskole med standardisert læreplan over hele landet.",
    },
    {
      question: "Hva var Husbankens (1946) rolle?",
      options: ["Statlig bank som ga gunstige lån til boligbygging","En privat sparebank for byggmestere","En statlig bank for oljeleting på sokkelen","En bank kun for de rikeste"],
      explanation: "Husbanken (1946) var en statlig bank for boligfinansiering som ga gunstige lån og gjorde at vanlige familier kunne eie bolig. Norge ble et land av selveiere.",
    },
  ],
  "historie-15-3": [
    {
      question: "Når ble det funnet olje på Ekofisk-feltet i Nordsjøen?",
      options: ["1969", "1945", "1990", "2001"],
      explanation: "I 1969 ble det funnet olje på Ekofisk-feltet i Nordsjøen -- starten på det norske oljeeventyret som forvandlet Norge til et av verdens rikeste land.",
    },
    {
      question: "Hva sikret \"De ti oljebud\" (1971)?",
      options: ["At fellesskapet fikk en stor del av oljeinntektene gjennom nasjonal styring", "At all olje skulle eies av utenlandske selskaper", "At alle oljeinntektene skulle brukes opp umiddelbart på skattelette og forbruk", "At all olje på sokkelen skulle eies og drives av utenlandske oljeselskaper alene"],
      explanation: "De ti oljebud (1971) var prinsipper for forvaltning av oljeressursene -- bl.a. nasjonal styring og kontroll, og at oljen skulle komme hele samfunnet til gode.",
    },
    {
      question: "Hvilket statlig oljeselskap ble opprettet i 1972?",
      options: ["Statoil", "Hydro", "Equinor", "Ekofisk AS"],
      explanation: "Statoil ble opprettet i 1972 for å sikre statlig ekspertise og kontroll over oljevirksomheten. Det ble delvis privatisert i 2001 (nå Equinor).",
    },
    {
      question: "Hva er formålet med oljefondet (Statens pensjonsfond utland)?",
      options: ["Å bevare oljerikdommen for fremtidige generasjoner og unngå overoppheting","Å eie aksjer i norske oljeselskaper slik at staten får kontroll over næringen","Å finansiere norske og allierte militæroperasjoner og kriger i utlandet direkte","Å bruke opp alle oljepengene raskt på økt offentlig forbruk og lavere skatter nå"],
      explanation: "Oljefondet (opprettet 1990) investerer statens oljeinntekter i utlandet. Bare avkastningen brukes, for å bevare rikdommen for fremtiden og unngå \"hollandsk syke\".",
    },
    {
      question: "Hva er \"det norske paradokset\" knyttet til oljen?",
      options: ["Norge tjener på fossil energi som bidrar til klimaendringer, men vil være en klimanasjon", "At oljevirksomheten førte til varig fattigdom og arbeidsløshet i store deler av landet", "At Norge nesten ikke har oljeressurser, men likevel kaller seg en energinasjon", "At oljen aldri skapte arbeidsplasser fordi all utvinning ble utført av roboter"],
      explanation: "Det norske paradokset er at Norge tjener penger på å eksportere fossil energi som bidrar til klimaendringer, samtidig som landet ønsker å være en klimanasjon.",
    },
  ],
  "historie-15-4": [
    {
      question: "Når fikk Norge selvbestemt abort inntil 12. uke?",
      options: ["1978", "1913", "1945", "2008"],
      explanation: "Abortloven av 1978 ga kvinner selvbestemt abort inntil 12. uke. Den var svært omstridt, men har bestått.",
    },
    {
      question: "Hva var nyfeminismen?",
      options: ["Kvinnekampen som vokste fram fra slutten av 1960-tallet med radikale krav", "En bevegelse mot kvinners yrkesdeltakelse", "Kampen for kvinners stemmerett som ble vunnet i Norge i 1913 etter lang strid", "En politisk retning fra 1970-tallet som ville bygge ned velferdsstaten og trygdene"],
      explanation: "Nyfeminismen (den nye kvinnebevegelsen) vokste fram fra slutten av 1960-tallet med radikale krav og slagordet \"det personlige er politisk\", inspirert av studentopprøret i 1968.",
    },
    {
      question: "Hva sikret fedrekvoten (innført 1993)?",
      options: ["At også fedre tar ut en del av foreldrepermisjonen", "At bare mødre kunne ta permisjon", "At foreldrepermisjonen ble avskaffet og erstattet av en fast kontantutbetaling", "At fedre ikke fikk permisjon"],
      explanation: "Fedrekvoten (1993) er en del av foreldrepermisjonen forbeholdt far. Formålet er å sikre at også fedre tar permisjon og å fremme likestilling. Tas den ikke ut, forfaller den.",
    },
    {
      question: "Hvordan har kvinners yrkesdeltakelse i Norge endret seg?",
      options: ["Fra at de fleste gifte kvinner var hjemmeværende på 1960-tallet til over 75 % yrkesaktive i dag", "Den har gått kraftig ned siden 1960-tallet fordi flere kvinner nå velger å være hjemme", "Den har vært helt uendret siden 1960 fordi husmorsidealet fortsatt dominerer i Norge", "Kvinner har aldri vært yrkesaktive i særlig grad, verken før eller etter oljealderen"],
      explanation: "På 1960-tallet var de fleste gifte kvinner hjemmeværende (\"husmorsidealet\"). I dag er over 75 % av kvinner yrkesaktive -- blant verdens høyeste. Et lønnsgap på 12--14 % gjenstår.",
    },
    {
      question: "Hvilken reform ga homofile par like rettigheter som heterofile i 2008?",
      options: ["Felles ekteskapslov", "Likestillingsloven", "Partnerskapsloven, 1993", "Partnerskapsloven"],
      explanation: "Felles ekteskapslov (2008) ga homofile par rett til å gifte seg. Veien gikk fra avkriminalisering (1972) via partnerskapsloven (1993) til full likestilling.",
    },
  ],
  "historie-16-1": [
    {
      question: "Hvordan oppstår nasjonal identitet ifølge kapittelet?",
      options: ["Den er skapt gjennom historiske prosesser, ikke naturgitt", "Den er bestemt av geografien alene", "Den er medfødt og uforanderlig, gitt med fødsel og blod og lik gjennom alle tider", "Den finnes ikke i det hele tatt"],
      explanation: "Nasjonal identitet er ikke noe naturgitt -- den er skapt gjennom historiske prosesser. Nasjonalromantikerne søkte det \"ekte norske\" i folkekultur, natur og historie.",
    },
    {
      question: "Hva gjorde Asbjørnsen og Moe i nasjonalromantikkens tjeneste?",
      options: ["De samlet inn norske folkeeventyr","De komponerte nasjonalsangen","De malte bilder av norsk natur","De skrev Norges første grunnlov"],
      explanation: "Asbjørnsen og Moe samlet norske folkeeventyr på 1800-tallet, som del av nasjonalromantikkens søken etter det særegent norske i folkekulturen.",
    },
    {
      question: "Hva menes med \"forestilte fellesskap\" (Benedict Anderson)?",
      options: ["At nasjoner er sosiale konstruksjoner basert på en forestilling om fellesskap", "At alle i en nasjon kjenner hverandre personlig", "At nasjoner er biologisk bestemt av felles avstamning, arvemasse og medfødte egenskaper", "At nasjoner er rene løgner uten virkning, og at ingen egentlig føler tilhørighet til dem"],
      explanation: "Forestilte fellesskap er Andersons begrep for at nasjoner er sosiale konstruksjoner -- de er for store til at alle kjenner hverandre, så tilhørigheten er \"forestilt\", skapt av medier og symboler.",
    },
    {
      question: "Hvilken periode i Norges historie ble særlig fremhevet i nasjonsbyggingen?",
      options: ["Vikingtiden og middelalderen før unionen med Danmark", "Den industrielle revolusjonen", "Den industrielle revolusjon", "Dansketiden og eneveldet"],
      explanation: "I nasjonsbyggingen ble vikingtiden og middelalderen fremhevet -- Norges storhetstid før unionen med Danmark. Snorres kongesagaer ble gjenoppdaget.",
    },
    {
      question: "Hva var en skyggeside ved den norske nasjonsbyggingen?",
      options: ["Samene og kvener ble ikke inkludert i det nasjonale prosjektet","Den bygde på import av kultur fra Danmark og Tyskland framfor norsk folkekultur","Den styrket rettighetene til alle minoriteter og gjorde samer og kvener likeverdige","Den fjernet fullstendig behovet for demokrati og innførte kongelig enevelde på nytt"],
      explanation: "En skyggeside var at samer og kvener ikke ble inkludert i det nasjonale prosjektet -- \"det norske\" ble definert på måter som ekskluderte noen, og enhet kunne nedtone mangfold.",
    },
  ],
  "historie-16-2": [
    {
      question: "Hva var målet med fornorskingspolitikken?",
      options: ["At alle som bodde i Norge skulle bli norske i språk og kultur","Å gjøre samisk til offisielt språk ved siden av norsk i hele landet","Å verne og styrke samisk og kvensk språk og kultur gjennom egne skoler og lover","Å gi de samiske og kvenske minoritetene indre selvstyre og egne folkevalgte organer"],
      explanation: "Fornorskingspolitikken (ca. 1850--1960) var statens systematiske forsøk på å assimilere samer, kvener og andre minoriteter til norsk språk og kultur.",
    },
    {
      question: "Hvilket virkemiddel var sentralt i fornorskingen?",
      options: ["Forbud mot samisk og kvensk språk i skolen, ofte med internatdrift","Fri rett for foreldrene til å velge undervisningsspråk for barna sine","Opprettelsen av egne samiske universiteter og høyskoler for å fremme samisk forskning","Gratis og obligatorisk undervisning i samisk språk for alle barn i de nordlige fylkene"],
      explanation: "Skolen var et sentralt virkemiddel: samisk og kvensk var forbudt, og internatsystemet brøt båndet mellom barn og foreldre som normalt overfører språk og kultur.",
    },
    {
      question: "Hvilken ideologi lå bak fornorskingspolitikken?",
      options: ["Nasjonalisme og evolusjonistisk tenkning om at kulturer kunne rangeres","Marxistisk klasseanalyse der språk og kultur ble regnet som uvesentlige","Internasjonal solidaritet og en tanke om at alle folk og kulturer er likeverdige","Vern av kulturelt mangfold der staten aktivt støttet samisk og kvensk språk og skikk"],
      explanation: "Politikken bygde på nasjonalisme (ett folk, ett språk), evolusjonistisk tenkning som rangerte kulturer, sikkerhetspolitiske hensyn og sosialdarwinisme.",
    },
    {
      question: "Hvilken konsekvens fikk fornorskingen for samisk og kvensk språk?",
      options: ["Mange sluttet å snakke språkene, og flere samiske språk er i dag truet", "Språkene ble styrket og utbredt", "Det fikk ingen språklige konsekvenser fordi folk fortsatte å bruke morsmålet hjemme", "Språkene ble raskt styrket og spredt til nye områder etter at fornorskingen tok slutt"],
      explanation: "Fornorskingen førte til språktap: mange sluttet å snakke samisk/kvensk, språkene ble ikke overført til nye generasjoner, og flere samiske språk er i dag truet av utryddelse.",
    },
    {
      question: "Hva gjorde den norske staten for å gjøre opp med fornorskingen?",
      options: ["Ga offisielle beklagelser og nedsatte en sannhets- og forsoningskommisjon", "Nektet for at den hadde skjedd", "Nektet offisielt for at fornorskingen noen gang hadde funnet sted mot samer og kvener", "Fortsatte den samme assimileringspolitikken uendret langt inn på 2000-tallet uten kritikk"],
      explanation: "Kong Harald beklaget fornorskingspolitikken (1997), Stortinget ga beklagelse (2018), og en sannhets- og forsoningskommisjon (2018--2023) dokumenterte uretten.",
    },
  ],
  "historie-16-3": [
    {
      question: "Hva er et urfolk?",
      options: ["En folkegruppe som befolket et område før kolonisering eller statsdannelse og har bevart egen kultur", "Innvandrere som har kommet til et land i løpet av de siste tiårene og bosatt seg der", "Enhver etnisk eller religiøs minoritet som bor i et land uten hensyn til hvor lenge", "En folkegruppe som har mistet sin opprinnelige kultur og tradisjoner gjennom tidene"],
      explanation: "Urfolk er folkegrupper som befolket et område før kolonisering eller statsdannelse, og som har bevart særegen kultur og identitet. Samene er Norges urfolk.",
    },
    {
      question: "Hva fastslår Grunnlovens § 108 (1988)?",
      options: ["At staten skal legge til rette for samisk språk, kultur og samfunnsliv","At Norge skal melde seg ut av FN og alle andre internasjonale organisasjoner","At bruk av samisk språk skal forbys i offentlig forvaltning og i skoleverket i nord","At den samiske folkegruppen ikke har noen særskilte rettigheter etter norsk lovgivning"],
      explanation: "Grunnlovens § 108 (1988) forplikter staten til å legge forholdene til rette for at den samiske folkegruppen kan sikre og utvikle sitt språk, sin kultur og sitt samfunnsliv.",
    },
    {
      question: "Hvilken sak ble et vendepunkt for samisk politikk rundt 1980?",
      options: ["Alta-saken", "Fosen-saken", "Finnmarksloven", "Menstadslaget"],
      explanation: "Alta-saken (1979--1981), konflikten om utbygging av Altaelva, ble et vendepunkt. Selv om utbyggingen ble gjennomført, satte den samiske rettigheter på dagsordenen og førte til Sametinget.",
    },
    {
      question: "Hva er Sametinget?",
      options: ["Samenes folkevalgte organ, etablert i 1989", "Et lovgivende parlament med full makt", "En underavdeling av Stortinget der samiske representanter møter fast hver måned", "En domstol for samiske saker"],
      explanation: "Sametinget (1989) er samenes folkevalgte organ, valgt av og for den samiske befolkningen. Det er rådgivende og har konsultasjonsrett, men ikke lovgivende myndighet.",
    },
    {
      question: "Hva slo Høyesterett fast i Fosen-saken (2021)?",
      options: ["At vindmøllene krenket reindriftens rettigheter", "At vindmøllene var fullt lovlige", "At vindmøllene var fullt lovlige og ikke berørte reindriftens rettigheter i området", "At samene ikke hadde rettigheter"],
      explanation: "I Fosen-saken (2021) slo Høyesterett fast at vindmøllene krenket reindriftens rettigheter, men anlegget sto fortsatt -- et eksempel på fortsatte konflikter om landrettigheter.",
    },
  ],
  "historie-16-4": [
    {
      question: "Hvor mange nasjonale minoriteter anerkjente Norge i 1999?",
      options: ["Fem", "To", "Én gruppe", "Ti"],
      explanation: "Norge anerkjente i 1999 fem nasjonale minoriteter: kvener/norskfinner, skogfinner, jøder, rom (sigøynere) og romani/tatere.",
    },
    {
      question: "Hvem er kvenene?",
      options: ["Etterkommere av finsk innvandring til Nord-Norge fra 1700-tallet", "Etterkommere av tyske hanseater", "Etterkommere av tyske hanseakjøpmenn som drev handel i Bergen i senmiddelalderen", "Norges opprinnelige urfolk som har bebodd landet i tusenvis av år før statsdannelsen"],
      explanation: "Kvenene er etterkommere av finsktalende innvandrere til Nord-Norge fra 1700-tallet. De var fisker- og jordbruksbefolkning og ble også rammet av fornorskingspolitikken.",
    },
    {
      question: "Hvilke overgrep ble romani/tatere utsatt for?",
      options: ["Tvangssterilisering, barnebortføring og kriminalisering av omreisende livsstil", "De ble aldri berørt av statlig politikk", "De fikk fulle borgerrettigheter fra starten av og ble aldri diskriminert av staten", "De fikk eget selvstyre med egen forsamling og egne lover innenfor den norske staten"],
      explanation: "Romani/tatere ble utsatt for grove overgrep: omstreiferlovgivning, tvangssterilisering, barnebortføring og lobotomering. Staten har senere beklaget og opprettet erstatningsordninger.",
    },
    {
      question: "Hva var \"jødeparagrafen\" i Grunnloven av 1814?",
      options: ["Et forbud mot at jøder fikk adgang til Norge", "En lov som ga jøder fulle rettigheter", "En bestemmelse som ga jøder fulle borgerlige rettigheter på lik linje med kristne", "En bestemmelse om religionsfrihet"],
      explanation: "Jødeparagrafen i Grunnloven av 1814 forbød jøder adgang til Norge. Forbudet ble opphevet i 1851. Under Holocaust ble 773 norske jøder deportert, og bare 38 overlevde.",
    },
    {
      question: "Hvordan begynte den moderne arbeidsinnvandringen til Norge?",
      options: ["Med arbeidsinnvandring fra Pakistan, Tyrkia og Marokko på 1960--70-tallet","Med svenske og danske håndverkere som kom til norske byer alt på 1800-tallet","Med en stor bølge flyktninger fra Syria under borgerkrigen der på 2010-tallet","Med fri arbeidsinnvandring fra Øst-Europa etter EU-utvidelsen tidlig på 2000-tallet"],
      explanation: "Den moderne innvandringen startet med arbeidsinnvandring fra bl.a. Pakistan, Tyrkia og Marokko på 1960--70-tallet. Senere kom flyktninger og EØS-arbeidsinnvandring. Ca. 18 % har innvandrerbakgrunn (2024).",
    },
  ],
  "historie-17-1": [
    {
      question: "Hva er globalisering?",
      options: ["At økonomisk, kulturell og politisk aktivitet i økende grad skjer på tvers av landegrenser", "At all internasjonal handel og økonomisk aktivitet mellom land opphører fullstendig", "At land i økende grad lukker seg for omverdenen og bygger opp handelshindringer", "At nasjonalstatene gradvis avskaffes og erstattes av én felles verdensregjering"],
      explanation: "Globalisering er prosessen der økonomisk, kulturell og politisk aktivitet i økende grad skjer på tvers av landegrenser, drevet av teknologi og politiske beslutninger.",
    },
    {
      question: "Når ble World Wide Web tilgjengelig for allmennheten?",
      options: ["1990-tallet", "1960-tallet", "2010-tallet", "1980-tallet"],
      explanation: "World Wide Web ble tilgjengelig på 1990-tallet. På 2000-tallet kom bredbånd, sosiale medier og smarttelefoner, og på 2020-tallet AI og digital transformasjon.",
    },
    {
      question: "Hva kjennetegner plattformøkonomien?",
      options: ["Digitale plattformer kobler sammen tilbydere og etterspørrere, ofte uten å eie produktene selv", "At staten eier alle bedriftene som driver digital handel og tjenesteformidling på nett", "At all handel og all formidling av tjenester foregår i fysiske butikker som før", "At det ikke oppstår nettverkseffekter eller tendens til monopol blant aktørene"],
      explanation: "Plattformøkonomi er en modell der digitale plattformer (Uber, Airbnb, Amazon) kobler sammen tilbydere og etterspørrere. Den preges av nettverkseffekter og tendens mot monopol.",
    },
    {
      question: "Hvem har vært vinnere av globaliseringen?",
      options: ["Forbrukere og hundrevis av millioner løftet ut av fattigdom i utviklingsland", "Bare industriarbeidere i Vesten", "Ingen har tjent på globaliseringen, fordi den bare har ført til tap for alle parter", "Kun småbønder i land i det globale sør som fikk selge varene sine til høyere priser"],
      explanation: "Vinnere inkluderer forbrukere (billigere varer), utviklingsland (særlig Kina og India der mange er løftet ut av fattigdom), multinasjonale selskaper og høyt utdannede.",
    },
    {
      question: "Hva er en skyggeside ved globalisering og digitalisering?",
      options: ["Maktkonsentrasjon hos noen få tech-giganter og spredning av desinformasjon", "At ingen lenger kan kommunisere", "At den internasjonale handelen mellom land stoppet helt opp på grunn av teknologien", "At all tilgang til kunnskap og informasjon forsvant da digitaliseringen slo igjennom"],
      explanation: "Skyggesider er bl.a. maktkonsentrasjon hos tech-giganter, skatteunngåelse, desinformasjon, press på personvern, polarisering og sårbare globale forsyningskjeder.",
    },
  ],
  "historie-17-2": [
    {
      question: "Hva er forskjellen mellom en flyktning og en økonomisk migrant?",
      options: ["En flyktning har rett til beskyttelse etter folkeretten, en økonomisk migrant søker bedre forhold", "Det er ingen reell forskjell, siden begge gruppene har nøyaktig samme rett til beskyttelse", "En flyktning flytter for å søke høyere lønn, mens en økonomisk migrant flykter fra krig", "Begge grupper har nøyaktig samme juridiske status og rettigheter etter folkeretten"],
      explanation: "En flyktning har velbegrunnet frykt for forfølgelse og rett til beskyttelse etter folkeretten, mens en økonomisk migrant flytter for å søke bedre økonomiske forhold.",
    },
    {
      question: "Hva er en push-faktor for migrasjon?",
      options: ["Krig, forfølgelse og fattigdom som driver folk bort","Arbeidsmuligheter i mottakerlandet","Et velutbygd velferdssystem i mottakerlandet","Familiegjenforening i det nye landet"],
      explanation: "Push-faktorer er det som driver folk bort fra hjemlandet: krig, konflikt, forfølgelse, fattigdom, naturkatastrofer og politisk ustabilitet. Pull-faktorer trekker folk til et nytt land.",
    },
    {
      question: "Hva fastslår FNs flyktningkonvensjon (1951)?",
      options: ["At flyktninger ikke skal returneres til forfølgelse (non-refoulement)","At flyktninger ikke har noen rettigheter ut over det hvert enkelt land selv gir dem","At alle migranter uansett årsak skal regnes som flyktninger med krav på beskyttelse","At land fritt kan returnere flyktninger til hjemlandet også der de risikerer forfølgelse"],
      explanation: "Flyktningkonvensjonen (1951) definerer flyktningbegrepet og fastslår non-refoulement -- forbudet mot å returnere flyktninger til forfølgelse -- samt rett til arbeid og utdanning.",
    },
    {
      question: "Hva er forskjellen mellom assimilering og integrering?",
      options: ["Ved assimilering gir migranten opp egen kultur; ved integrering er det rom for kulturell egenart", "Ved integrering må migranten gi opp all egen kultur og bli helt lik majoritetsbefolkningen", "Assimilering gir migranten mest kulturell frihet, mens integrering krever full tilpasning", "De to begrepene betyr nøyaktig det samme og brukes helt om hverandre i faglitteraturen"],
      explanation: "Ved assimilering gir migranten opp egen kultur og blir som majoriteten, mens integrering betyr deltakelse i samfunnet med rom for kulturell egenart.",
    },
    {
      question: "Hva kjennetegner den politiske debatten om migrasjon?",
      options: ["Den er omstridt og bryter ofte den tradisjonelle høyre/venstre-skillelinjen", "Den er uten betydning i politikken", "Alle partier og velgere er fullstendig enige om hvordan migrasjon bør reguleres", "Migrasjon er et tema uten særlig betydning som knapt nevnes i norsk og europeisk politikk"],
      explanation: "Migrasjon er politisk omstridt med argumenter både for liberal og restriktiv politikk. Debatten bryter ofte høyre/venstre-skillelinjen, og fakta og følelser blandes ofte sammen.",
    },
  ],
  "historie-17-3": [
    {
      question: "Hva er etnisk rensing?",
      options: ["Systematisk fordrivelse av en etnisk eller religiøs gruppe fra et område gjennom vold og terror", "En fredelig folkeavstemning der en etnisk gruppe stemmer over egen løsrivelse fra staten", "En militærallianse mellom flere land som skal beskytte etniske minoriteter mot overgrep", "En type mellomstatlig handelsavtale som regulerer varestrøm mellom to etniske grupper"],
      explanation: "Etnisk rensing er systematisk fordrivelse av en etnisk eller religiøs gruppe gjennom vold, terror, drap eller trusler. Målet er primært fordrivelse, ikke utryddelse som ved folkemord.",
    },
    {
      question: "Hva skjedde med Jugoslavia på 1990-tallet?",
      options: ["Den multietniske føderasjonen falt sammen i en serie blodige kriger", "Den ble samlet til én fredelig stat", "Den multietniske føderasjonen ble fredelig samlet til én stabil og forent nasjonalstat", "Den ble innlemmet som en ny sovjetrepublikk i Sovjetunionen etter den kalde krigens slutt"],
      explanation: "Jugoslavia, en multietnisk føderasjon holdt sammen av Tito, falt sammen i blodige kriger på 1990-tallet (Slovenia, Kroatia, Bosnia, Kosovo). Ca. 140 000 døde.",
    },
    {
      question: "Hva var Srebrenica-massakren (1995)?",
      options: ["Det verste massedrapet i Europa siden andre verdenskrig, der over 8000 ble drept", "Et avgjørende slag mellom stormaktene på Balkan under første verdenskrig i 1915", "En stor, men fredelig politisk demonstrasjon mot krigen som endte uten voldsbruk", "En naturkatastrofe med jordskjelv og flom som rammet befolkningen i Bosnia hardt"],
      explanation: "Srebrenica-massakren (juli 1995) var det verste massedrapet i Europa siden andre verdenskrig. Over 8000 bosnisk-muslimske menn og gutter ble drept i en FN-erklært \"sikker sone\".",
    },
    {
      question: "Hva skjedde 11. september 2001?",
      options: ["Al-Qaida kapret fire fly i USA og drepte ca. 3000 mennesker","USA invaderte Irak og styrtet regimet i Bagdad etter en kort krig","Berlinmuren falt og delte Tyskland ble på ny samlet til én felles nasjonalstat","Sovjetunionen ble oppløst og de tidligere sovjetrepublikkene ble selvstendige stater"],
      explanation: "11. september 2001 kapret al-Qaida fire fly. To traff World Trade Center, ett Pentagon, og ett styrtet i Pennsylvania. Ca. 3000 ble drept, og \"krigen mot terror\" begynte.",
    },
    {
      question: "Hva kjennetegner stormaktsrivaliseringene i det 21. århundret?",
      options: ["Kinas fremvekst og Russlands gjenreisning utfordrer USAs posisjon i en mer multipolar verden", "Europa dominerer verden alene politisk og militært etter den kalde krigens avslutning", "Det finnes ikke lenger noen stormakter, siden alle land nå har omtrent like mye makt", "USA er fortsatt den eneste supermakten i verden og møter ingen reell konkurranse"],
      explanation: "Det 21. århundret preges av Kinas fremvekst og Russlands gjenreisning (annekteringen av Krim 2014, invasjonen av Ukraina 2022), som utfordrer USA i en mer multipolar verden.",
    },
  ],
  "historie-17-4": [
    {
      question: "Hva mener de fleste klimaforskere er hovedårsaken til dagens klimaendringer?",
      options: ["Menneskers aktivitet gjennom de siste 200 årene siden den industrielle revolusjonen", "Utelukkende naturlige klimavariasjoner", "At jorden gradvis beveger seg nærmere solen og dermed blir varmere år for år over tid", "Solens normale aktivitet alene, uten noe bidrag fra menneskeskapte utslipp av klimagasser"],
      explanation: "De fleste klimaforskere mener klimaendringene hovedsakelig skyldes menneskers aktivitet siden den industrielle revolusjonen begynte å slippe ut klimagasser. Et mindretall vektlegger naturlige variasjoner.",
    },
    {
      question: "Hva betyr begrepet antropocen?",
      options: ["Menneskets tidsalder -- en epoke der menneskets aktivitet former jordkloden","En geologisk epoke helt uten menneskelig påvirkning på klima, hav og landskap","En avgrenset periode med istid der store deler av jordkloden var dekket av is og snø","Tiden lenge før mennesket i det hele tatt fantes, i jordens tidlige geologiske historie"],
      explanation: "Antropocen (menneskets tidsalder) er en foreslått geologisk epoke der menneskets aktivitet -- klimaendringer, masseutryddelse, forurensning -- har blitt den dominerende kraften som former jorden.",
    },
    {
      question: "Hvilken organisasjon ble etablert i 1988 for å vurdere klimakunnskap?",
      options: ["FNs klimapanel (IPCC)", "NATO", "Folkeforbundet", "Verdens handelsorganisasjon"],
      explanation: "FNs klimapanel (IPCC) ble etablert i 1988. Senere kom Kyoto-protokollen (1997) og Paris-avtalen (2015) med globale mål om å begrense oppvarmingen.",
    },
    {
      question: "Hvordan definerte Brundtland-kommisjonen (1987) bærekraftig utvikling?",
      options: ["Utvikling som dekker dagens behov uten å ødelegge for fremtidige generasjoner", "Maksimal økonomisk vekst uansett konsekvenser", "Utvikling som kun kommer de rikeste industrilandene til gode på bekostning av utviklingsland", "En fullstendig stans i all økonomisk og teknologisk utvikling for å skåne naturen fullstendig"],
      explanation: "Brundtland-kommisjonen (1987), ledet av Gro Harlem Brundtland, definerte bærekraftig utvikling som utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter.",
    },
    {
      question: "Hvorfor er klimaendringene politisk vanskelige å løse?",
      options: ["De er et globalt og langsiktig problem som krever koordinering på tvers av kortsiktige politiske sykluser", "Fordi løsningen på klimaendringene er både enkel, billig og rask å gjennomføre for alle land", "Fordi ingen forskere eller politikere er enige om at klimaendringene i det hele tatt finnes", "Fordi klimaendringene bare rammer ett enkelt land som selv kan løse problemet alene"],
      explanation: "Klimaendringene er et globalt problem som krever global koordinering, men er langsiktig mens politiske sykluser er kortsiktige. I tillegg finnes mektige interesser i status quo og gratispassasjerproblemet.",
    },
  ],
  "historie-17-5": [
    {
      question: "Hvorfor studerer vi historie ifølge kapittelet?",
      options: ["Fordi historien hjelper oss å forstå nåtiden og navigere fremtiden", "Fordi fortiden ikke har noen betydning", "Utelukkende for å pugge årstall og navn uten noen dypere forståelse av sammenhenger", "Fordi fortiden ikke har noen betydning for verken nåtiden eller fremtidens utfordringer"],
      explanation: "Vi studerer historie fordi den gir oss perspektiv og hjelper oss å forstå nåtiden og navigere fremtiden -- den viser at verden har vært annerledes og kan bli annerledes igjen.",
    },
    {
      question: "Hva er historiebevissthet?",
      options: ["Forståelsen av sammenhengen mellom fortid, nåtid og fremtid", "Kunnskap om bare ett lands historie", "Evnen til å huske nøyaktige årstall og navn på konger, kriger og traktater fra fortiden", "At fortiden ikke påvirker nåtiden"],
      explanation: "Historiebevissthet er forståelsen av sammenhengen mellom fortid, nåtid og fremtid -- evnen til å tenke historisk og se at våre valg i dag former fremtiden.",
    },
    {
      question: "Hva er historiemisbruk?",
      options: ["Når historien forvrenges eller forfalskes for å tjene bestemte formål","Vitenskapelig historieforskning som følger anerkjente kildekritiske metoder","All faglig formidling og undervisning av historie i skoleverket og på universitetene","Å sammenligne og vekte flere uavhengige kilder mot hverandre for å finne det sannsynlige"],
      explanation: "Historiemisbruk er når historien forvrenges, forfalskes eller brukes på faglig uholdbare måter, som Holocaust-benektelse eller nasjonalistisk historieskriving, for å tjene bestemte formål.",
    },
    {
      question: "Hvilken lærdom om samfunn trekker kapittelet fram?",
      options: ["Ingen samfunnsform er \"naturlig\" eller evig -- demokrati må vedlikeholdes aktivt", "Demokrati varer evig uten innsats", "At samfunn i sin grunnform er statiske størrelser som i praksis aldri endrer seg over tid", "At økonomisk velstand og materiell fremgang er stabile tilstander som aldri kan gå tapt igjen"],
      explanation: "En lærdom er at ingen samfunnsform er \"naturlig\" eller evig -- alt er historisk. Demokrati må vedlikeholdes og forsvares aktivt, og fremgang er ikke garantert.",
    },
    {
      question: "Hvilken forsiktighetsregel nevnes om å bruke historien?",
      options: ["Historien gjentar seg ikke eksakt, og lettvinte paralleller kan villede","At kilder fra fortiden alltid taler for seg selv og ikke trenger tolkning","At alle historiske paralleller er presise og pålitelige, og derfor trygt kan overføres direkte","At historien alltid gjentar seg helt nøyaktig, slik at fortiden gir presise oppskrifter for i dag"],
      explanation: "En viktig forsiktighetsregel er at historien ikke gjentar seg eksakt, at lettvinte paralleller kan villede, og at kontekst er avgjørende når man trekker lærdommer.",
    },
  ],
};

export default quizData_historie;
