import type { QuizQuestion } from './quiz-data';

const quizData_historie: Record<string, QuizQuestion[]> = {
  'historie-1': [
  {
    question: 'Hva er forskjellen mellom en primærkilde og en sekundærkilde?',
    options: ['Primærkilder er fra tiden man studerer, sekundærkilder er bearbeidede fremstillinger', 'Primærkilder er øyenvitneskildringer, sekundærkilder er alle skriftlige kilder fra perioden', 'Primærkilder er alltid mer pålitelige enn sekundærkilder', 'Primærkilder er offentlige dokumenter, sekundærkilder er private brev og dagbøker'],
    explanation: 'Primærkilder er kilder fra den tiden man studerer (dagbøker, brev, fotografier), mens sekundærkilder er bearbeidede fremstillinger basert på primærkilder (historiebøker, artikler).',
  },
  {
    question: 'Hva menes med at en kilde har "tendens"?',
    options: ['Kilden har en bestemt hensikt eller vinkling', 'Kilden gjenspeiler en generell historisk utvikling', 'Kilden er preget av tidens dominerende ideologi uten bevisst vinkling', 'Kilden bekrefter det andre kilder allerede har slått fast'],
    explanation: 'Tendens betyr at kilden har en bestemt hensikt eller vinkling. Skaperen kan ønske å fremstille noe i et spesielt lys eller påvirke mottakeren.',
  },
  {
    question: 'Hvilke av disse er et eksempel på en materiell kilde?',
    options: ['En vikingtidsøks', 'Et kongebrev fra 1400-tallet', 'En middelaldersk krønike', 'En runeinnskrift med lovtekst'],
    explanation: 'Materielle kilder er gjenstander, bygninger, kunst, våpen og redskaper. Brev, krøniker og runeinnskrifter med tekst er skriftlige kilder.',
  },
  {
    question: 'Hva er hovedformålet med kildekritikk?',
    options: ['Å vurdere kildens troverdighet og brukbarhet', 'Å avgjøre om kilden støtter forskerens hypotese', 'Å fastslå om kilden er en primær- eller sekundærkilde', 'Å plassere kilden i riktig historisk periode'],
    explanation: 'Kildekritikk handler om å vurdere kildens troverdighet, representativitet og brukbarhet for å forstå fortiden.',
  },
  {
    question: 'Hva er forskjellen mellom levninger og beretninger?',
    options: ['Levninger er spor etter fortiden, beretninger er fortellinger om fortiden', 'Levninger er materielle kilder, beretninger er alle skriftlige kilder', 'Levninger er utilsiktede spor, beretninger er kilder med kjent opphav', 'Levninger er fra førhistorisk tid, beretninger er fra historisk tid'],
    explanation: 'Levninger er fysiske spor etter fortiden (bygninger, redskaper), mens beretninger er fortellinger om fortiden (krøniker, memoarer).',
  },
],


  'historie-2': [
  {
    question: 'Hva betyr ordet "demokrati"?',
    options: ['Folkestyre', 'Borgerråd', 'Likestyre', 'Folkemakt'],
    explanation: 'Demokrati kommer fra gresk «demos» (folk) og «kratos» (styre), og betyr folkestyre.',
  },
  {
    question: 'Hvilken bystat regnes som demokratiets vugge?',
    options: ['Aten', 'Sparta', 'Korint', 'Theben'],
    explanation: 'Aten utviklet det første demokratiet der mannlige borgere kunne delta og stemme i folkeforsamlingen.',
  },
  {
    question: 'Hva var Pax Romana?',
    options: ['En periode med fred og stabilitet i Romerriket', 'En fredsavtale mellom Roma og Kartago', 'Det romerske rettssystemet som sikret borgerrettigheter', 'Betegnelsen på det romerske militærsystemet langs grensene'],
    explanation: 'Pax Romana var omtrent 200 år med relativ fred og stabilitet i Romerriket (27 f.Kr.–180 e.Kr.).',
  },
  {
    question: 'Hvem hadde IKKE politiske rettigheter i det athenske demokratiet?',
    options: ['Kvinner, slaver og fremmede', 'Bønder og håndverkere uten eiendom', 'Menn under 30 år', 'Borgere som ikke hadde avtjent militærtjeneste'],
    explanation: 'Bare frie menn over 18 år med athensk borgerskap hadde politiske rettigheter. Kvinner, slaver og fremmede (metøker) var utelukket fra politisk deltakelse.',
  },
  {
    question: 'Når falt det vestromerske riket?',
    options: ['476 e.Kr.', '395 e.Kr.', '410 e.Kr.', '1453 e.Kr.'],
    explanation: 'Det vestromerske riket falt i 476 e.Kr. da den siste vestromerske keiseren ble avsatt. 395 var delingen, 410 var plyndringen av Roma, og 1453 var Konstantinopels fall.',
  },
],


  'historie-3': [
  {
    question: 'Hva var føydalisme?',
    options: ['Et hierarkisk system basert på jordeiendeler og lojalitetsbånd', 'Et styresystem der kirken kontrollerte jordfordelingen', 'Et økonomisk system der kongen eide all jord og bøndene betalte skatt direkte', 'Et militærsystem der alle frie menn hadde verneplikt for kongen'],
    explanation: 'Føydalisme var et hierarkisk system der kongen sto øverst, etterfulgt av vasaller/adelsmenn, riddere og bønder/leilendinger, bundet sammen av lojalitetsbånd og jordeiendeler.',
  },
  {
    question: 'Når rammet Svartedauden Norge?',
    options: ['1349', '1347', '1361', '1380'],
    explanation: 'Svartedauden kom til Norge i 1349 (via Bergen) og drepte kanskje halvparten av befolkningen. 1347 var utbruddet i Sør-Europa, 1361 var et nytt pestutbrudd.',
  },
  {
    question: 'Hvem var på toppen av det føydale hierarkiet?',
    options: ['Kongen', 'Paven', 'Erkebiskopen', 'Stormennene'],
    explanation: 'Kongen var øverst i det føydale hierarkiet og eide i prinsippet all jord. Paven hadde åndelig makt, men den verdslige makten lå hos kongen.',
  },
  {
    question: 'Hvilken periode kalles Norges storhetstid i middelalderen?',
    options: ['Under Håkon Håkonsson på 1200-tallet', 'Under Olav den hellige på 1000-tallet', 'Under Harald Hårfagre på 900-tallet', 'Under Magnus Lagabøte på 1300-tallet'],
    explanation: 'Under Håkon Håkonsson (1217–1263) var Norge på sitt største territorielt, med Island og Grønland, og riket ble modernisert. Magnus Lagabøte (hans sønn) ga Landsloven 1274.',
  },
  {
    question: 'Hva var korstogene?',
    options: ['Militære ekspedisjoner for å erobre Det hellige land', 'Kirkelige pilegrimsferder organisert av paven', 'Handelsekspedisjoner til Det hellige land finansiert av italienske bystater', 'Diplomatiske misjoner for å forene den østlige og vestlige kirken'],
    explanation: 'Korstogene (1095–1291) var militære ekspedisjoner for å erobre Det hellige land fra muslimene, utløst av pavens oppfordring.',
  },
],


  'historie-4': [
  {
    question: 'Hva betyr "renessanse"?',
    options: ['Gjenfødelse', 'Opplysning', 'Fornyelse', 'Frigjøring'],
    explanation: 'Renessanse betyr «gjenfødelse» og refererer til gjenoppdagelsen av antikkens kunst, litteratur og filosofi i Italia fra 1300-tallet.',
  },
  {
    question: 'Hva kritiserte Martin Luther ved den katolske kirken?',
    options: ['Avlatshandel og at frelse kunne kjøpes for penger', 'At kirken ikke drev nok misjon blant hedningene', 'At paven nektet å oversette Bibelen til latin', 'At kirken tillot prestene å gifte seg'],
    explanation: 'Luther kritiserte særlig avlatshandelen – at kirken solgte tilgivelse for synder mot betaling – og mente frelse bare kom gjennom tro, ikke gjerninger.',
  },
  {
    question: 'Hvem utviklet maktfordelingsprinsippet?',
    options: ['Montesquieu', 'Voltaire', 'Rousseau', 'John Locke'],
    explanation: 'Montesquieu utviklet maktfordelingsprinsippet med lovgivende, utøvende og dømmende makt. Locke snakket om naturlige rettigheter, Rousseau om samfunnskontrakten, Voltaire om ytringsfrihet.',
  },
  {
    question: 'Hva var Gutenbergs viktigste oppfinnelse?',
    options: ['Trykkpressen med løse bokstavtyper', 'Papirproduksjon basert på trefiber', 'Kobberstikk-teknikken for illustrasjoner', 'Blekk som tålte masseproduksjon'],
    explanation: 'Gutenbergs trykkpresse med bevegelige typer (ca. 1450) revolusjonerte spredningen av kunnskap og muliggjorde masseproduksjon av bøker.',
  },
  {
    question: 'Når ble Norge luthersk?',
    options: ['1537', '1517', '1536', '1555'],
    explanation: 'Norge ble luthersk i 1537 da Christian III innførte reformasjonen ved kongebud. 1517 var Luthers teser, 1536 var reformasjonen i Danmark, 1555 var Augsburg-freden.',
  },
],


  'historie-5': [
  {
    question: 'Når ble den amerikanske uavhengighetserklæringen underskrevet?',
    options: ['4. juli 1776', '4. mars 1775', '17. september 1787', '14. juli 1789'],
    explanation: 'Den amerikanske uavhengighetserklæringen ble vedtatt 4. juli 1776. 1775 var krigens start, 1787 var grunnloven, 1789 var den franske revolusjonen.',
  },
  {
    question: 'Hva var den franske revolusjonens slagord?',
    options: ['Frihet, likhet, brorskap', 'Frihet, eiendom, sikkerhet', 'Rettferdighet, likhet, frihet', 'Fornuft, fremskritt, folkestyre'],
    explanation: 'Den franske revolusjonens slagord var «Frihet, likhet, brorskap» (Liberté, égalité, fraternité).',
  },
  {
    question: 'Hvor begynte den industrielle revolusjonen?',
    options: ['England', 'Nederland', 'Frankrike', 'Skottland'],
    explanation: 'Den industrielle revolusjonen begynte i England på midten av 1700-tallet, blant annet på grunn av kull- og jernforekomster, kapital fra handel og stabile politiske forhold.',
  },
  {
    question: 'Når fikk Norge sin grunnlov?',
    options: ['17. mai 1814', '25. februar 1814', '4. november 1814', '7. juni 1905'],
    explanation: 'Norges grunnlov ble vedtatt på Eidsvoll 17. mai 1814. 25. februar var Kiel-traktaten, 4. november var den reviderte grunnloven etter union med Sverige.',
  },
  {
    question: 'Hva er nasjonalisme?',
    options: ['Ideen om at folk med felles språk og kultur bør ha egen stat', 'Ideen om at staten bør kontrollere all økonomi for nasjonens beste', 'Ideen om at et lands grenser bør følge naturlige geografiske skillelinjer', 'Ideen om at alle folk bør samles i overnasjonale forbund for fred'],
    explanation: 'Nasjonalisme er ideen om at folk med felles språk, kultur og historie utgjør en nasjon og bør ha sin egen stat.',
  },
],


  'historie-6': [
  {
    question: 'Omtrent hvor mye av Afrika kontrollerte europeere i 1914?',
    options: ['90 %', '60 %', '75 %', '50 %'],
    explanation: 'I 1914 kontrollerte europeere ca. 90 % av Afrika, opp fra bare 10 % i 1870. Bare Etiopia og Liberia var formelt uavhengige.',
  },
  {
    question: 'Hva var "den hvite manns byrde"?',
    options: ['Ideen om at europeere hadde plikt til å «sivilisere» andre folk', 'De økonomiske kostnadene ved å opprettholde koloniene', 'Sykdommer europeere ble utsatt for i tropene', 'Kritikken mot kolonialisme fra europeiske intellektuelle'],
    explanation: '«Den hvite manns byrde» var en ideologisk rettferdiggjøring av imperialismen – at europeere hadde en moralsk plikt til å «hjelpe» og «sivilisere» andre folk.',
  },
  {
    question: 'Hva skjedde på Berlinkonferansen 1884–85?',
    options: ['Europeiske stormakter fastsatte regler for deling av Afrika', 'Afrikanske ledere forhandlet om grenser med europeiske stater', 'Slaveriet ble formelt avskaffet i alle europeiske kolonier', 'Europeiske land ble enige om å trekke seg ut av Vest-Afrika'],
    explanation: 'På Berlinkonferansen fastsatte europeiske stormakter regler for kolonisering og deling av Afrika. Ingen afrikanske ledere var invitert.',
  },
  {
    question: 'Hva er sosialdarwinisme?',
    options: ['Ideen om at noen folk og samfunn er naturlig overlegne andre', 'Darwins opprinnelige teori om naturlig utvalg blant arter', 'En vitenskapelig teori om at samfunn utvikler seg i faste stadier', 'En politisk bevegelse som brukte evolusjonsteori for å fremme likhet'],
    explanation: 'Sosialdarwinisme overførte Darwins evolusjonsteori til samfunn og «raser», og ble brukt til å rettferdiggjøre kolonialisme og rasisme.',
  },
  {
    question: 'Hvilken kolonimakt hadde det største imperiet?',
    options: ['Storbritannia', 'Frankrike', 'Spania', 'Portugal'],
    explanation: 'Storbritannia hadde det største imperiet, med kolonier over hele verden, inkludert India, deler av Afrika, Australia og Canada.',
  },
],


  'historie-7': [
  {
    question: 'Hvilken hendelse utløste første verdenskrig?',
    options: ['Attentatet mot Franz Ferdinand i Sarajevo', 'Tysklands invasjon av Belgia', 'Østerrike-Ungarns annektering av Bosnia', 'Russlands mobilisering mot Østerrike-Ungarn'],
    explanation: 'Første verdenskrig ble utløst da den østerriksk-ungarske tronarvingen Franz Ferdinand ble drept i Sarajevo 28. juni 1914, noe som satte alliansesystemet i gang.',
  },
  {
    question: 'Hva kjennetegnet skyttergravskrigen på vestfronten?',
    options: ['Stillingskrig der fronten knapt beveget seg på flere år', 'Raske gjennombrudd fulgt av lange pauser mellom offensiver', 'Hyppige flankemanøvrer som fikk fronten til å skifte posisjon', 'Hovedsakelig sjøblokade kombinert med begrenset landkrig'],
    explanation: 'På vestfronten gravde soldatene seg ned i skyttergraver fra Kanalen til Sveits, og fronten beveget seg knapt på fire år tross enorme tap.',
  },
  {
    question: 'Omtrent hvor mange døde i første verdenskrig?',
    options: ['Ca. 17 millioner', 'Ca. 10 millioner', 'Ca. 25 millioner', 'Ca. 40 millioner'],
    explanation: 'Omtrent 17 millioner mennesker døde i første verdenskrig – ca. 10 millioner soldater og 7 millioner sivile.',
  },
  {
    question: 'Hvilket år trakk USA inn i krigen?',
    options: ['1917', '1915', '1916', '1914'],
    explanation: 'USA erklærte krig i april 1917. Tysk uinnskrenket ubåtkrig og Zimmermann-telegrammet var de viktigste årsakene.',
  },
  {
    question: 'Hva var Versaillestraktaten?',
    options: ['Fredsavtalen som ga Tyskland hovedskylden for krigen og påla harde betingelser', 'En gjensidig fredsavtale der alle parter tok ansvar for krigen', 'En avtale som delte Østerrike-Ungarn i nye nasjonalstater', 'En avtale som opprettet Folkeforbundet som eneste forpliktelse'],
    explanation: 'Versaillestraktaten (1919) påla Tyskland eneansvar for krigen (krigsskyldsartikkelen), store erstatninger, tap av territorier og militære begrensninger.',
  },
],


  'historie-8': [
  {
    question: 'Hva kjennetegner et totalitært regime?',
    options: ['Staten søker total kontroll over samfunnet og individet', 'Staten kontrollerer økonomien, men tillater politisk opposisjon', 'Militæret styrer landet uten ideologisk grunnlag', 'En sterk leder styrer med støtte fra et begrenset oligarki'],
    explanation: 'Totalitarisme er en styreform der staten søker total kontroll over samfunnet og individet – ingen sfærer er private. Dette skiller det fra autoritære regimer som tillater en viss privat sfære.',
  },
  {
    question: 'Når tok Hitler makten i Tyskland?',
    options: ['1933', '1932', '1934', '1930'],
    explanation: 'Hitler ble utnevnt til rikskansler 30. januar 1933. I 1932 stilte han til presidentvalg, i 1934 ble han Führer etter Hindenburgs død.',
  },
  {
    question: 'Hva utløste den store depresjonen?',
    options: ['Børskrakket på Wall Street i 1929', 'Hyperinflasjonen i Tyskland i 1923', 'Sammenbruddet av den internasjonale gullstandarden', 'Krigsgjelden fra Versaillestraktaten'],
    explanation: 'Den store depresjonen ble utløst av børskrakket i oktober 1929, selv om det var flere underliggende årsaker som overproduksjon og spekulasjon.',
  },
  {
    question: 'Hva var nazismens viktigste særtrekk sammenlignet med italiensk fascisme?',
    options: ['Biologisk rasisme og antisemittisme som kjerneelement', 'Sterkere vekt på militarisme og territoriell ekspansjon', 'Mer omfattende bruk av propaganda og massemøter', 'Totalitær kontroll over økonomien gjennom statlig eierskap'],
    explanation: 'Både nazisme og fascisme delte trekk som nasjonalisme, lederprinsipp og antidemokrati, men nazismens kjerne var biologisk rasisme og antisemittisme – noe som muliggjorde Holocaust.',
  },
  {
    question: 'Hva var fascismens syn på demokrati?',
    options: ['Avvisning av demokrati og parlamentarisme til fordel for lederprinsippet', 'Støtte til et begrenset demokrati med sterk statlig styring', 'Aksept av demokrati som et nødvendig onde i overgangsfasen', 'Reform av demokratiet gjennom korporativistiske organer med folkevalgte'],
    explanation: 'Fascismen avviste demokrati og parlamentarisme fundamentalt, og fremmet i stedet lederprinsippet (Il Duce/Führer) og enpartistyre.',
  },
],


  'historie-9': [
  {
    question: 'Når startet og sluttet andre verdenskrig?',
    options: ['1939–1945', '1937–1945', '1939–1944', '1941–1945'],
    explanation: 'Andre verdenskrig varte fra 1. september 1939 (Tysklands angrep på Polen) til 1945. 1937 var starten på krigen i Asia, 1941 var USAs inntreden.',
  },
  {
    question: 'Omtrent hvor mange jøder ble drept i Holocaust?',
    options: ['6 millioner', '4 millioner', '8 millioner', '11 millioner'],
    explanation: 'Omtrent 6 millioner jøder ble drept i Holocaust. 11 millioner inkluderer alle grupper (romani, funksjonshemmede, politiske fanger m.fl.).',
  },
  {
    question: 'Hva var vendepunktet på østfronten?',
    options: ['Slaget om Stalingrad (1942–43)', 'Slaget om Moskva (1941)', 'Slaget ved Kursk (1943)', 'Operasjon Barbarossa (1941)'],
    explanation: 'Slaget om Stalingrad (1942–1943) var det avgjørende vendepunktet på østfronten. Slaget ved Kursk (1943) bekreftet vendepunktet, men Stalingrad var det som brøt den tyske offensiven.',
  },
  {
    question: 'Når ble Norge angrepet av Tyskland?',
    options: ['9. april 1940', '10. mai 1940', '1. september 1939', '3. april 1940'],
    explanation: 'Tyskland angrep Norge 9. april 1940 (Operasjon Weserübung). 10. mai var angrepet på Frankrike og Benelux, 1. september var angrepet på Polen.',
  },
  {
    question: 'Hva var D-dagen?',
    options: ['Den allierte invasjonen av Normandie 6. juni 1944', 'Den allierte landgangen i Italia i september 1943', 'Den amerikanske motoffensiven i Stillehavet i 1942', 'Den allierte frigjøringen av Paris i august 1944'],
    explanation: 'D-dagen var den allierte invasjonen av Normandie i Frankrike 6. juni 1944, den største amfibieoperasjonen i historien, som åpnet vestfronten.',
  },
],


  'historie-10': [
  {
    question: 'Hva var den kalde krigen?',
    options: ['Konflikt mellom USA og Sovjet preget av ideologisk rivalisering uten direkte krig', 'En serie med stedfortrederkriger mellom NATO og Warszawapakten i Europa', 'Et våpenkappløp begrenset til utviklingen av atomvåpen', 'En økonomisk konkurranse mellom kapitalistiske og kommunistiske land'],
    explanation: 'Den kalde krigen (1947–1991) var en bred konflikt mellom USA og Sovjetunionen – ideologisk, militært, økonomisk og politisk – men uten direkte militær konfrontasjon mellom supermaktene.',
  },
  {
    question: 'Når falt Berlinmuren?',
    options: ['9. november 1989', '3. oktober 1990', '25. desember 1991', '9. november 1991'],
    explanation: 'Berlinmuren falt 9. november 1989. 3. oktober 1990 ble Tyskland gjenforent, og 25. desember 1991 ble Sovjetunionen oppløst.',
  },
  {
    question: 'Hva var Cuba-krisen?',
    options: ['En krise i 1962 da Sovjet plasserte atomraketter på Cuba', 'En konflikt i 1961 da USA forsøkte å invadere Cuba ved Grisebukta', 'En handelsblokade mot Cuba som varte fra 1960 til 1990', 'En krise i 1959 da Fidel Castro gjennomførte revolusjon på Cuba'],
    explanation: 'Cuba-krisen (oktober 1962) oppstod da USA oppdaget sovjetiske atomraketter på Cuba. Verden stod på randen av atomkrig i 13 dager. Grisebukta (1961) var et mislykket CIA-støttet invasjonsforsøk.',
  },
  {
    question: 'Når ble NATO grunnlagt?',
    options: ['1949', '1947', '1945', '1955'],
    explanation: 'NATO ble grunnlagt i 1949. 1947 var Truman-doktrinen, 1945 var FN-opprettelsen, og 1955 ble Warszawapakten opprettet som motvekt.',
  },
  {
    question: 'Når ble Sovjetunionen oppløst?',
    options: ['Desember 1991', 'November 1989', 'August 1991', 'Oktober 1990'],
    explanation: 'Sovjetunionen ble formelt oppløst 26. desember 1991. November 1989 var Berlinmurens fall, august 1991 var det mislykkede kuppforsøket mot Gorbatsjov.',
  },
],


};

export default quizData_historie;
