import type { QuizQuestion } from './quiz-data';

const quizData_geofag: Record<string, QuizQuestion[]> = {
  'geofag-1-1': [
  {
    question: 'Hvilken sfaere omfatter alle levende organismer påJorden?',
    options: ['Biosfaeren', 'Geosfaeren', 'Hydrosfaeren', 'Atmosfaeren'],
    explanation: 'Biosfaeren er den sfaeren som inneholder alt liv påJorden, fra bakterier til mennesker.',
  },
  {
    question: 'Hva er litosfaeren?',
    options: ['Det stive ytre laget av Jorden som inneholder jordskorpen og ovre mantel', 'Den flytende delen av mantelen', 'Alt vann påJorden', 'Luftlaget rundt Jorden'],
    explanation: 'Litosfaeren er det stive ytre laget som består av jordskorpen og den overste delen av mantelen, og er delt i tektoniske plater.',
  },
  {
    question: 'Hvor tykk er kontinental jordskorpe typisk?',
    options: ['30-70 km', '5-10 km', '100-200 km', '2900 km'],
    explanation: 'Kontinental skorpe er tykkere (30-70 km) enn oseanisk skorpe (5-10 km), men mindre tett.',
  },
  {
    question: 'Hva består jordens indre kjerne av?',
    options: ['Fast jern og nikkel', 'Flytende jern og nikkel', 'Smeltet silikater', 'Granitt'],
    explanation: 'Den indre kjernen er fast pågrunn av det enorme trykket, selv om temperaturen er svart høy.',
  },
  {
    question: 'Hvilket eksempel viser samspill mellom geosfaeren og atmosfæren?',
    options: ['Vulkanutbrudd sender gasser til atmosfæren', 'Fisk lever i havet', 'Planter vokser i jorda', 'Regn faller fra skyene'],
    explanation: 'Vulkanutbrudd frigjør store mengder gasser som CO2 og svoveldioksid til atmosfæren.',
  },
],


  'geofag-1-2': [
  {
    question: 'Hvilken bergart dannes nårmagma storkner langsomt under jordoverflaten?',
    options: ['Granitt', 'Basalt', 'Marmor', 'Sandstein'],
    explanation: 'Granitt er en intrusiv (dyp)bergart som dannes nårmagma storkner langsomt, noe som gir tid til store krystaller.',
  },
  {
    question: 'Hva er et mineral?',
    options: ['Et naturlig førekommende, uorganisk fast stoff med definert kjemisk sammensetning', 'Enhver stein funnet i naturen', 'Et aggregat av flere stoffer', 'En organisk krystall'],
    explanation: 'Mineraler måvære naturlige, uorganiske, faste, ha definert kjemisk sammensetning og ordnet atomstruktur.',
  },
  {
    question: 'Hvilken metamorf bergart dannes fra kalkstein?',
    options: ['Marmor', 'Gneis', 'Kvartsitt', 'Skifer'],
    explanation: 'Marmor dannes nårkalkstein utsettes for høyt trykk og temperatur, og kalsittkrystallene rekrystalliserer.',
  },
  {
    question: 'Hva kjennetegner ekstrusive bergarter?',
    options: ['De storkner raskt påoverflaten og fårsma krystaller', 'De storkner langsomt og fårstore krystaller', 'De dannes fra sedimenter', 'De dannes ved høy metamorfose'],
    explanation: 'Ekstrusive bergarter (dagbergarter) som basalt storkner raskt påoverflaten, noe som gir sma krystaller.',
  },
  {
    question: 'Hva beskriver bergartskretsløpet?',
    options: ['Hvordan bergarter omdannes fra en type til en annen gjennom geologiske prosesser', 'Hvordan vann sirkulærer i naturen', 'Hvordan fjell dannes', 'Hvordan mineraler utvinnes'],
    explanation: 'Bergartskretsløpet viser hvordan bergarter omdannes mellom magmatiske, sedimentaere og metamorfe typer.',
  },
],


  'geofag-1-3': [
  {
    question: 'Hvem føreslo teorien om kontinentaldrift?',
    options: ['Alfred Wegener', 'Charles Darwin', 'Isaac Newton', 'Albert Einstein'],
    explanation: 'Alfred Wegener føreslo kontinentaldrift-teorien i 1912, men den ble først akseptert på 1960-tallet.',
  },
  {
    question: 'Hva skjer ved en divergerende plategrense?',
    options: ['Platene beveger seg fra hverandre og ny havbunn dannes', 'Platene kolliderer', 'Platene glir sidelengs', 'Plater subduseres'],
    explanation: 'Ved divergerende grenser, som Midtatlanterhavets rygg, beveger platene seg fra hverandre og ny skorpe dannes.',
  },
  {
    question: 'Hva er subduksjon?',
    options: ['Prosessen der en tektonisk plate dykker ned under en annen', 'Prosessen der ny havbunn dannes', 'Prosessen der fjell dannes', 'Prosessen der vulkaner oppstar'],
    explanation: 'Subduksjon skjer typisk nåren tyngre oseanisk plate møter en lettere kontinental plate og synker ned.',
  },
  {
    question: 'Hvilken drivkraft regnes som viktigst for platebevegelser?',
    options: ['Slab pull', 'Ridge push', 'Jordrotasjon', 'Tidevannskrefter'],
    explanation: 'Slab pull (trekket fra subduserende plater) regnes som den viktigste drivkraften fordi de kalde, tunge platene synker.',
  },
  {
    question: 'Hvordan ble Himalaya dannet?',
    options: ['Ved kollisjon mellom den indiske og eurasiske platen', 'Ved vulkanisme', 'Ved subduksjon av oseanisk plate', 'Ved rifting'],
    explanation: 'Himalaya ble dannet da to kontinentale plater kolliderte - ingen subduseres, såskorpen presses sammen og opp.',
  },
],


  'geofag-1-4': [
  {
    question: 'Hvilken vulkantype har Hawaii?',
    options: ['Skjoldvulkan', 'Stratovulkan', 'Calderavulkan', 'Keglevulkan'],
    explanation: 'Hawaii har skjoldvulkaner med tyntflytende basaltisk lava som sprer seg utover og danner flate, brede vulkaner.',
  },
  {
    question: 'Hva er episenteret til et jordskjelv?',
    options: ['Punktet påoverflaten rett over hyposenteret', 'Stedet der bruddet starter', 'Malet påjordskjelvets styrke', 'Avstanden til nærmeste by'],
    explanation: 'Episenteret er punktet påjordoverflaten rett over hyposenteret (fokus), der jordskjelvet oppstar.',
  },
  {
    question: 'Hvilke seismiske bolger kan ikke ga gjennom vaeske?',
    options: ['S-bolger', 'P-bolger', 'Overflatebolger', 'Alle bolger kan ga gjennom vaeske'],
    explanation: 'S-bolger (skjaerbolger) kan bare ga gjennom faste stoffer fordi vaesker ikke har skjaerestyrke.',
  },
  {
    question: 'Hva måler Richter-skalaen?',
    options: ['Jordskjelvets magnitud', 'Jordskjelvets intensitet', 'Dybden til hyposenteret', 'Tsunamiens høyde'],
    explanation: 'Richter-skalaen måler jordskjelvets styrke basert påenergien som frigjøres.',
  },
  {
    question: 'Hvorfor har Ildringen såmange vulkaner og jordskjelv?',
    options: ['Fordi den følger kanten av Stillehavsplaten som subduseres', 'Fordi det er mest hav der', 'Fordi det er varmest der', 'Fordi det er flest oyer der'],
    explanation: 'Ildringen følger subduksjonssonene rundt Stillehavet, der jordskjelv og vulkanisme er intense.',
  },
],


  'geofag-1-5': [
  {
    question: 'Hva er hovedårsaken til frostsprengning?',
    options: ['Vann utvider seg nårdet fryser', 'Is er tyngre enn vann', 'Frost gjør bergarter myke', 'Temperaturen synker'],
    explanation: 'Vann utvider seg med ca. 9% nårdet fryser. I sprekker i berg skaper dette et enormt trykk som sprenger bergarten.',
  },
  {
    question: 'Hvilken prosess løser opp kalkstein?',
    options: ['Oppløsning i surt vann', 'Frostsprengning', 'Oksidasjon', 'Trykkavlastning'],
    explanation: 'Kalkstein (CaCO3) loses i surt vann som dannes nårCO2 reagerer med regnvann. Dette skaper karstlandskap.',
  },
  {
    question: 'Hva er forskjellen mellom forvitring og erosjon?',
    options: ['Forvitring er nedbrytning påstedet, erosjon er transport bort', 'De er det samme', 'Erosjon er nedbrytning, forvitring er transport', 'Forvitring skjer bare i fjell'],
    explanation: 'Forvitring bryter ned bergarter påstedet, mens erosjon transporterer det forvitrede materialet bort.',
  },
  {
    question: 'Hvilken type forvitring er viktigst i Norge?',
    options: ['Frostsprengning', 'Termisk forvitring', 'Oksidasjon', 'Saltsprengning'],
    explanation: 'Norge har mange fryse-tine-sykluser som gjør frostsprengning til den viktigste forvitringsprosessen.',
  },
  {
    question: 'Hva er hydrolyse?',
    options: ['En kjemisk forvitring der vann reagerer med mineraler', 'En fysisk forvitring', 'En type erosjon', 'En bergartstype'],
    explanation: 'Hydrolyse er en kjemisk forvitringsprosess der vann reagerer med mineraler som feltspat og danner leirmineraler.',
  },
],


  'geofag-1-6': [
  {
    question: 'Hvilken dalform skapes av isbreer?',
    options: ['U-dal', 'V-dal', 'Riftdal', 'Canyon'],
    explanation: 'Isbreer graver ut brede U-daler med flat bunn og bratte sider, i motsetning til elver som skaper V-daler.',
  },
  {
    question: 'Hva er en esker?',
    options: ['En lang rygg av sortert grus avsatt i tunnel under isen', 'En sirkelformet fordypning i fjellet', 'En usortert haug av morenemateriale', 'En strømlinjeformet haug formet av is'],
    explanation: 'Eskere dannes i smeltevanntunneler under isbreen. Sortert sand og grus avsettes og danner lange, smale rygger.',
  },
  {
    question: 'Hvilken landform dannes der en elv møter havet?',
    options: ['Delta', 'Fjord', 'Botn', 'Morene'],
    explanation: 'Et delta dannes nårelven mister fart ved havet og avsetter sedimentene den har transportert.',
  },
  {
    question: 'Hva er en botn?',
    options: ['En sirkelformet fordypning i fjellet der en isbre starter', 'En type fjord', 'En morenerygg', 'En elveslette'],
    explanation: 'En botn dannes ved toppen av en isbre der snoe akkumulæres og is erøderer ut en sirkelformet fordypning.',
  },
  {
    question: 'Hva er morene?',
    options: ['Materiale transportert og avsatt av en isbre', 'En type bergart', 'En elveavsetning', 'En vulkansk landform'],
    explanation: 'Morene er usortert materiale fra leire til store blokker som er transportert og avsatt av isbreer.',
  },
],


  'geofag-1-7': [
  {
    question: 'Hva er den viktigste faktoren som bestemmer klima?',
    options: ['Breddegrad', 'Høyde over havet', 'Naerhet til hav', 'Havstrømmer'],
    explanation: 'Breddegraden bestemmer solvinkel og dagslengde, som er de viktigste faktorene for temperaturen.',
  },
  {
    question: 'Hvor mye synker temperaturen per 100 meters høyde?',
    options: ['Ca. 0.6C', 'Ca. 1.0C', 'Ca. 0.3C', 'Ca. 2.0C'],
    explanation: 'Temperaturen synker med ca. 0.6C per 100 meter høydeoekning i troposfaeren.',
  },
  {
    question: 'Hvilken havstrøm varmer Norges kyst?',
    options: ['Golfstrømmen', 'Labradorstrømmen', 'Humboldtstrømmen', 'Benguelastrømmen'],
    explanation: 'Golfstrømmen transporterer varmt vann fra tropene til Norges kyst og gir mildere klima enn breddegraden tilsier.',
  },
  {
    question: 'Hva er regnskygge?',
    options: ['Et tort område påle-siden av et fjell', 'En type sky', 'Skygge fra regnskyer', 'Et tropisk fenomen'],
    explanation: 'Regnskygge oppstar nårfuktig luft tvinges over fjell, gir nedbor pålo-siden og tort vaeR påle-siden.',
  },
  {
    question: 'Hva kjennetegner maritimt klima?',
    options: ['Milde vintre og kjølige somre', 'Kalde vintre og varme somre', 'Tort hele året', 'Vatt hele året'],
    explanation: 'Maritimt klima (nær hav) har milde vintre og kjølige somre fordi havet jevner ut temperaturen.',
  },
],


  'geofag-1-8': [
  {
    question: 'I hvilket atmosfærelag skjer alt vær?',
    options: ['Troposfaeren', 'Stratosfaeren', 'Mesosfaeren', 'Termosfaeren'],
    explanation: 'Troposfaeren er det nederste laget der temperaturen synker med høyden, noe som gir ustabilitet og skydannelse.',
  },
  {
    question: 'Hvilken front gir typisk kraftig, kortvarig nedbor?',
    options: ['Kaldfront', 'Varmfront', 'Okklusjon', 'Stasjonær front'],
    explanation: 'Kaldfronten har brattere helning og gir raskere lofting av luften, noe som gir kraftigere, men kortere nedbor.',
  },
  {
    question: 'Hva kjennetegner høytrykk?',
    options: ['Synkende luft og stabilt, fint vær', 'Stigende luft og nedbor', 'Sterke vinder', 'Kraftige stormer'],
    explanation: 'I et høytrykk synker luften, varmes opp og torker ut, noe som gir stabilt, fint vær.',
  },
  {
    question: 'Hvilken retning roterer vinden rundt et lavtrykk påden nordlige halvkulen?',
    options: ['Mot klokken (moturs)', 'Med klokken (medurs)', 'Rett inn mot senteret', 'Rett ut fra senteret'],
    explanation: 'Corioliseffekten avboyer vinden mot høyre pånordlige halvkule, noe som gir moturs rotasjon rundt lavtrykk.',
  },
  {
    question: 'Hva er en okklusjon?',
    options: ['Nåren kaldfront tar igjen en varmfront', 'En type høytrykk', 'En tropisk storm', 'En tordensky'],
    explanation: 'En okklusjon oppstar nåren kaldfront tar igjen en varmfront i et lavtrykk.',
  },
],


  'geofag-1-9': [
  {
    question: 'Hvor mye av jordens vann er ferskvann?',
    options: ['Ca. 2.5%', 'Ca. 25%', 'Ca. 50%', 'Ca. 10%'],
    explanation: 'Bare 2.5% av jordens vann er ferskvann, og mesteparten av dette er bundet i isbreer.',
  },
  {
    question: 'Hva er en akvifer?',
    options: ['Et vannførende geologisk lag', 'Et vanntett lag', 'Grunnvannsspeilet', 'En type bronn'],
    explanation: 'En akvifer er et lag med porose bergarter eller sedimenter som kan lagre og transportere grunnvann.',
  },
  {
    question: 'Hva kalles fordampning fra planter?',
    options: ['Transpirasjon', 'Evaporasjon', 'Kondensasjon', 'Infiltrasjon'],
    explanation: 'Transpirasjon er fordampning av vann fra plantenes blader, en viktig del av vannkretsløpet.',
  },
  {
    question: 'Hva er grunnvannsspeilet?',
    options: ['Ovre grense for den mettede sonen', 'Bunnen av en akvifer', 'Overflaten av en innsjø', 'En vanntett barriere'],
    explanation: 'Grunnvannsspeilet er den ovre grensen for den mettede sonen - nivået der alle porer er fylt med vann.',
  },
  {
    question: 'Hva er en artesisk bronn?',
    options: ['En bronn der vannet stiger av seg selv pga. trykk', 'En bronn som er svart dyp', 'En bronn med saltvann', 'En bronn i fjellet'],
    explanation: 'Artesisk vann er under trykk mellom to vanntette lag, så det stiger opp av seg selv nårman borer.',
  },
],


  'geofag-1-10': [
  {
    question: 'Hva viser høydekurvene på et topografisk kart?',
    options: ['Linjer som forbinder punkter med samme høyde', 'Grenser mellom bergarttyper', 'Vannstrømmer', 'Vegetasjonsgrenser'],
    explanation: 'Høydekurver (koter) forbinder punkter med samme høyde over havet.',
  },
  {
    question: 'Hva indikerer tette høydekurver på et kart?',
    options: ['Bratt terreng', 'Flatt terreng', 'Skog', 'Vann'],
    explanation: 'Tette høydekurver betyr at høyden endrer seg mye over kort avstand, altsa bratt terreng.',
  },
  {
    question: 'Hva er ekvidistanse på et kart?',
    options: ['Høydeforskjellen mellom høydekurvene', 'Avstanden mellom to punkter', 'Kartets målestokk', 'Nordretningen'],
    explanation: 'Ekvidistansen er den faste høydeforskjellen mellom to nabokurver, vanligvis 5, 10 eller 20 meter.',
  },
  {
    question: 'Hva er GIS?',
    options: ['Geografiske informasjonssystemer for analyse av geografiske data', 'En type GPS', 'Et geologisk instrument', 'En karttype'],
    explanation: 'GIS er digitale verktoy for a samle inn, lagre, analysere og presentere geografiske data.',
  },
  {
    question: 'Hvabrukes saltsyre til i felt?',
    options: ['A teste om en bergart inneholder kalk', 'A rense prover', 'A lage hull i berg', 'A merke steiner'],
    explanation: 'Saltsyre (HCl) brukes til a teste kalkstein - den bruiser nårkalkstein loses.',
  },
],


  'geofag-2-1': [
  {
    question: 'Hvor gammel er Jorden?',
    options: ['Ca. 4.6 milliarder år', 'Ca. 4.6 millioner år', 'Ca. 6000 år', 'Ca. 13.8 milliarder år'],
    explanation: 'Jorden er ca. 4.6 milliarder årgammel, dannet fra solnebula samtidig med resten av solsystemet.',
  },
  {
    question: 'Hvilken dateringemetode bruker nedbrytning av radioaktive isotoper?',
    options: ['Absolutt datering (radiometrisk)', 'Relativ datering', 'Superposisjon', 'Biostratigrafi'],
    explanation: 'Radiometrisk datering måler forholdet mellom moder- og datterisotoper for a beregne alder.',
  },
  {
    question: 'I hvilken geologisk aera levde dinosaurene?',
    options: ['Mesozoikum', 'Paleozoikum', 'Kenozoikum', 'Proterozoikum'],
    explanation: 'Dinosaurene dominerte i Mesozoikum (252-66 millioner årsiden), ofte kalt "reptilenes tidsalder".',
  },
  {
    question: 'Hva er superposisjonsprinsippet?',
    options: ['Yngre lag ligger over eldre lag', 'Eldre lag ligger over yngre lag', 'Alle lag er like gamle', 'Lag kan ikke dateres'],
    explanation: 'Superposisjonsprinsippet sier at i en uførstyrret lagrekke ligger de yngste lagene overst.',
  },
  {
    question: 'Hvilken isotop brukes til a datere organisk materiale opp til 50 000 ar?',
    options: ['Karbon-14', 'Uran-238', 'Kalium-40', 'Rubidium-87'],
    explanation: 'Karbon-14 har en halveringstid på5730 årog egner seg for datering av organisk materiale.',
  },
],


  'geofag-2-2': [
  {
    question: 'Hvilken type fossil er et fotavtrykk fra en dinosaur?',
    options: ['Sporfossil', 'Kroppsfossil', 'Kjemofossil', 'Levende fossil'],
    explanation: 'Fotavtrykk er sporfossiler - spor etter aktiviteten til en organisme, ikke selve kroppen.',
  },
  {
    question: 'Hva kjennetegner et godt ledefossil?',
    options: ['Stor geografisk utbredelse og kort eksistenstid', 'Finnes bare ett sted', 'Lever lenge', 'Er vanskelig a finne'],
    explanation: 'Gode ledefossiler har stor utbredelse, kort eksistenstid, er lett gjenkjennelige og hyppige.',
  },
  {
    question: 'Hvilken masseutryddelse var den største i jordens historie?',
    options: ['Perm-Trias (252 mill årsiden)', 'Kritt-Paleogen (66 mill årsiden)', 'Ordovicium-Silur', 'Trias-Jura'],
    explanation: 'Perm-Trias-utryddelsen tok livet av 96% av marine arter og 70% av landdyr.',
  },
  {
    question: 'Hva er permineralisering?',
    options: ['Mineraler fyller porer i bein eller tre', 'Organisk materiale erstattes av karbon', 'Organismer bevares i is', 'Organismer etterlater avtrykk'],
    explanation: 'Ved permineralisering fyller mineraler porene i organisk materiale og forsterker strukturen.',
  },
  {
    question: 'Nårskjedde Kambrium-eksplosjonen?',
    options: ['For ca. 541 millioner årsiden', 'For ca. 66 millioner årsiden', 'For ca. 252 millioner årsiden', 'For ca. 4 milliarder årsiden'],
    explanation: 'Kambrium-eksplosjonen var en rask utvikling av dyreliv for ca. 541 millioner årsiden.',
  },
],


  'geofag-2-3': [
  {
    question: 'Hva dannet den kaledonske fjellkjeden?',
    options: ['Kollisjon mellom Baltika og Laurentia', 'Vulkansk aktivitet', 'Istidenes erosjon', 'Meteorittnedslag'],
    explanation: 'Den kaledonske fjellkjeden ble dannet for 500-400 millioner årsiden ved kontinentkollisjon.',
  },
  {
    question: 'Hvilke bergarter dominerer i grunnfjellet?',
    options: ['Gneiser og granitter', 'Kalkstein og skifer', 'Sandstein og konglomerat', 'Basalt og gabbro'],
    explanation: 'Grunnfjellet består hovedsakelig av gneiser og granitter, dannet for 1-3 milliarder årsiden.',
  },
  {
    question: 'Hva er et skyvedekke?',
    options: ['En bergartspakke skjovet horisontalt over store avstander', 'En type fjell', 'En morenemasse', 'En vulkansk struktur'],
    explanation: 'Skyvedekker ble dannet under den kaledonske fjellkjededannelsen da bergarter ble presset ostover.',
  },
  {
    question: 'Nårkulminerte siste istid?',
    options: ['For ca. 20 000 årsiden', 'For ca. 100 000 årsiden', 'For ca. 1000 årsiden', 'For ca. 1 million årsiden'],
    explanation: 'Siste istid (Weichsel) hadde sin kulminasjon for ca. 20 000 årsiden med is opp til 3 km tykk.',
  },
  {
    question: 'Hvordan ble fjordene dannet?',
    options: ['Isbreer gravde ut eksisterende daler som ble oversvommet av hav', 'Vulkansk aktivitet', 'Meteorittnedslag', 'Jordskjelv'],
    explanation: 'Fjordene er U-daler gravd ut av isbreer og senere oversvommet av hav etter istiden.',
  },
],


  'geofag-2-4': [
  {
    question: 'Hva er massebalansen til en isbre?',
    options: ['Forskjellen mellom akkumulasjon og ablasjon', 'Isbreens totale masse', 'Hastigheten isen beveger seg', 'Tykkelsen påisen'],
    explanation: 'Massebalansen er forskjellen mellom akkumulasjon (snofall) og ablasjon (smelting/kalving).',
  },
  {
    question: 'Hvor mye vil havnivået stige hvis all isen påGronland smelter?',
    options: ['Ca. 7 meter', 'Ca. 1 meter', 'Ca. 20 meter', 'Ca. 58 meter'],
    explanation: 'Gronlands innlandsis inneholder nok is til a heve havnivået med ca. 7 meter.',
  },
  {
    question: 'Hva er permafrost?',
    options: ['Grunn som er frossen i minst to sammenhengende år', 'Is påoverflaten', 'Snoe som ikke smelter', 'Frosset sjovann'],
    explanation: 'Permafrost er grunn som holder seg under 0C i minst to sammenhengende år.',
  },
  {
    question: 'Hva er albedo-effekten?',
    options: ['Is og snoe reflekterer sollys og holder jorden kjolig', 'Is smelter av solvarme', 'Snoe isolærer bakken', 'Is lagrer energi'],
    explanation: 'Albedo er andelen sollys som reflekteres. Is og snoe har høy albedo (80-90%).',
  },
  {
    question: 'Hva er det aktive laget i permafrost?',
    options: ['Overste lag som tiner om sommeren', 'Det kaldeste laget', 'Laget med mest is', 'Bunnen av permafrosten'],
    explanation: 'Det aktive laget er det overste laget som tiner om sommeren og fryser om vinteren.',
  },
],


  'geofag-2-5': [
  {
    question: 'Hvor stor andel av jordens ferskvann er lagret i isbreer?',
    options: ['Ca. 69%', 'Ca. 30%', 'Ca. 1%', 'Ca. 50%'],
    explanation: 'Ca. 69% av ferskvannet er bundet i isbreer og snoe, 30% er grunnvann.',
  },
  {
    question: 'Hva er forskjellen mellom porositet og permeabilitet?',
    options: ['Porositet er plass til vann, permeabilitet er hvor lett vann strømmer', 'De er det samme', 'Porositet er vannstrøm, permeabilitet er lagring', 'Bare bergarter har porositet'],
    explanation: 'Porositet er andelen hulrom, permeabilitet er hvor lett vann kan strømme gjennom.',
  },
  {
    question: 'Hvordan transporterer elver sedimenter i suspensjon?',
    options: ['Finpartikler holdes svevende i vannmassen', 'Partikler ruller langs bunnen', 'Partikler spretter langs bunnen', 'Partikler loses i vannet'],
    explanation: 'Suspensjon er nårfine partikler (leire, silt) holdes svevende av turbulens.',
  },
  {
    question: 'Hva er oppholdstiden for vann i atmosfæren?',
    options: ['Ca. 9 dager', 'Ca. 1 år', 'Ca. 100 år', 'Ca. 1 dag'],
    explanation: 'Vann i atmosfæren har kort oppholdstid - bare ca. 9 dager for det faller som nedbor.',
  },
  {
    question: 'Hvor stor andel av globalt vannforbruk gårtil jordbruk?',
    options: ['Ca. 70%', 'Ca. 20%', 'Ca. 10%', 'Ca. 50%'],
    explanation: 'Jordbruk står for ca. 70% av globalt vannforbruk, hovedsakelig til irrigasjon.',
  },
],


  'geofag-2-6': [
  {
    question: 'Hva skjer med kvikkleire nården førstyrres?',
    options: ['Den gårfra fast til flytende tilstand', 'Den blir hardere', 'Den absorberer mer vann', 'Den ekspanderer'],
    explanation: 'Kvikkleire er sensitiv marin leire som kollapser fra fast til flytende ved førstyrrelse.',
  },
  {
    question: 'Hva er formelen for risiko?',
    options: ['Risiko = Fare x Sarbarhet x Eksponering', 'Risiko = Fare + Sarbarhet', 'Risiko = Fare / Sarbarhet', 'Risiko = Eksponering'],
    explanation: 'Risiko er produktet av fare (sannsynlighet), sårbarhet og eksponering.',
  },
  {
    question: 'Hvilket nettsted varsler om snoskredfare i Norge?',
    options: ['Varsom.no', 'NRK.no', 'Regjeringen.no', 'SSB.no'],
    explanation: 'Varsom.no er den offisielle varslingstjenesten for snoskred, flom og jord-/steinskred.',
  },
  {
    question: 'Hva er Gjerdrum-skredet et eksempel pa?',
    options: ['Kvikkleireskred', 'Fjellskred', 'Snoskred', 'Jordskjelv'],
    explanation: 'Gjerdrum-skredet i 2020 var et dramatisk kvikkleireskred som tok 10 menneskeliv.',
  },
  {
    question: 'Hvordan påvirker klimaendringer naturfårene i Norge?',
    options: ['Mer nedbor gir økt flom- og skredfare', 'Mindre fare generelt', 'Ingen endring', 'Bare mer snoskredfare'],
    explanation: 'Klimaendringer gir mer intens nedbor, høyere temperaturer og økt risiko for flom og skred.',
  },
],


  'geofag-2-7': [
  {
    question: 'Hva er kildebergarten i et petroleumssystem?',
    options: ['Bergart som genererer olje og gass fra organisk materiale', 'Bergart som lagrer olje og gass', 'Bergart som hindrer lekkasje', 'Bergart som transporterer olje'],
    explanation: 'Kildebergarten er organisk-rik skifer som ved høy temperatur og trykk genererer hydrokarboner.',
  },
  {
    question: 'Hvor stor andel av Norges strømproduksjon kommer fra vannkraft?',
    options: ['Ca. 96%', 'Ca. 50%', 'Ca. 75%', 'Ca. 30%'],
    explanation: 'Norge produserer ca. 96% av strømmen fra vannkraft.',
  },
  {
    question: 'Hvilke mineraler er kritiske for det grønne skiftet?',
    options: ['Litium, kobolt og sjeldne jordarter', 'Jern og aluminium', 'Gull og solv', 'Salt og kalk'],
    explanation: 'Litium, kobolt og sjeldne jordarter trengs til batterier, vindturbiner og elbiler.',
  },
  {
    question: 'Ved hvilken temperatur dannes olje fra organisk materiale?',
    options: ['60-120C', '0-30C', '200-300C', '500-600C'],
    explanation: 'Olje genereres ved 60-120C (oljevinduet), mens gass dannes ved høyere temperaturer.',
  },
  {
    question: 'Nårble Ekofisk-feltet oppdaget?',
    options: ['1969', '1959', '1979', '1989'],
    explanation: 'Ekofisk ble oppdaget i 1969 og markerte starten pånorsk oljevirksomhet.',
  },
],


  'geofag-2-8': [
  {
    question: 'Hva er en klimaproxy?',
    options: ['En indirekte maling av fortidens klima', 'En klimamodell', 'Et værvarsel', 'En temperaturmåler'],
    explanation: 'En klimaproxy er en indirekte maling som reflekterer fortidens klimaforhold.',
  },
  {
    question: 'Hva var CO2-nivået under mellomistider de siste 800 000 årene?',
    options: ['Ca. 280 ppm', 'Ca. 180 ppm', 'Ca. 400 ppm', 'Ca. 100 ppm'],
    explanation: 'Under mellomistider var CO2-nivået ca. 280 ppm, i dag er det over 420 ppm.',
  },
  {
    question: 'Hva er Milankovitch-sykluser?',
    options: ['Astronomiske faktorer som påvirker klimaet', 'Havstrømmer', 'Vulkanske sykluser', 'Solflekker'],
    explanation: 'Milankovitch-sykluser er endringer i jordbane, aksehelning og presesjon som påvirker klima.',
  },
  {
    question: 'Hvor langt tilbake kan iskjerner fra Antarktis ga?',
    options: ['Ca. 800 000 år', 'Ca. 10 000 år', 'Ca. 1 million år', 'Ca. 100 000 år'],
    explanation: 'Iskjerner fra Antarktis gårtilbake ca. 800 000 årog viser CO2- og temperaturhistorie.',
  },
  {
    question: 'Hva viser lavere d18O i iskjerner?',
    options: ['Kaldere temperatur da snoen falt', 'Varmere temperatur', 'Mer nedbor', 'Mindre nedbor'],
    explanation: 'Lavere d18O indikerer at det var kaldere da snoen falt, fordi lettere isotoper dominerer.',
  },
],


  'geofag-2-9': [
  {
    question: 'Hva er antropocen?',
    options: ['Foreslatt geologisk epoke preget av menneskets påvirkning', 'En istidsperiode', 'En vulkansk hendelse', 'En masseutryddelse'],
    explanation: 'Antropocen markerer tiden da mennesket ble en dominerende geologisk kraft.',
  },
  {
    question: 'Hva er et teknofossil?',
    options: ['Menneskeskapte gjenstander som kan bli bevart som fossiler', 'Fossiler av teknologiske organismer', 'Kunstig fremstilte fossiler', 'Fossiler funnet med teknologi'],
    explanation: 'Teknofossiler er menneskeskapte gjenstander som plast, aluminium og betong.',
  },
  {
    question: 'Hvor mye har CO2-nivået økt siden forindustriell tid?',
    options: ['Fra ca. 280 til over 420 ppm', 'Fra 100 til 200 ppm', 'Fra 500 til 600 ppm', 'Ingen endring'],
    explanation: 'CO2-nivået har økt fra ca. 280 ppm til over 420 ppm på 150 år.',
  },
  {
    question: 'Hva er planetaere grenser?',
    options: ['Grenseverdier for jordsystemets prosesser som ikke bør overskrides', 'Grenser mellom land', 'Astronomiske grenser', 'Grenser for befolkningsvekst'],
    explanation: 'Planetaere grenser definerer sikre operasjonsrom for menneskeheten.',
  },
  {
    question: 'Hvilken geologisk marker fra 1950-tallet brukes for antropocen?',
    options: ['Radioaktive isotoper fra atomprovesprengninger', 'Plast i havet', 'Oljeutslipp', 'Betong i byer'],
    explanation: 'Plutonium-239 fra atomprovesprengninger er en global geologisk marker fra 1950-tallet.',
  },
],


  'geofag-2-10': [
  {
    question: 'Hva betyr prinsippet om uniformitarianisme?',
    options: ['Prosesser som virker i dag, virket også i fortiden', 'Alle bergarter er like gamle', 'Geologiske prosesser skjer med lik hastighet', 'Jorden har alltid vært lik'],
    explanation: 'Uniformitarianisme sier at dagens prosesser kan brukes til a tolke fortiden.',
  },
  {
    question: 'Hvabrukes en geologihammer til?',
    options: ['A ta bergartsprover', 'A grave hull', 'A male temperaturer', 'A finne fossiler'],
    explanation: 'Geologihammeren brukes til a ta prover fra bergarter for narmere undersøkelse.',
  },
  {
    question: 'Hva er XRF?',
    options: ['En metode for kjemisk analyse av bergarter', 'En type GPS', 'En karttype', 'En dateringsmetode'],
    explanation: 'XRF (rontgenfluorescens) brukes til a bestemme kjemisk sammensetning av bergarter.',
  },
  {
    question: 'Hva er vitenskapelig formidling?',
    options: ['A kommunisere forskningsresultater til ulike malgrupper', 'A skrive vitenskapelige artikler', 'A gjøre feltarbeid', 'A analysere data'],
    explanation: 'Vitenskapelig formidling handler om a dele kunnskap med både fagfolk og allmennheten.',
  },
  {
    question: 'Hvorfor er feltdagbok viktig?',
    options: ['For a dokumentere observasjoner og sikre reproduserbarhet', 'For a tegne kart', 'For a beregne alder', 'For a male temperaturer'],
    explanation: 'Feltdagboken dokumenterer alt som gjøres i felt og sikrer at andre kan gjenta arbeidet.',
  },
],


};

export default quizData_geofag;
