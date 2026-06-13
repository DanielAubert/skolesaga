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

  'geofag-1-1-1': [
    {
      question: 'Hva er jordsystemet?',
      options: ['Helheten av geosfæren, hydrosfæren, atmosfæren og biosfæren og samspillet mellom dem', 'Bare jordens indre kjerne', 'Kun atmosfæren rundt jorden', 'Solsystemet med alle planetene'],
      explanation: 'Jordsystemet omfatter alle jordens komponenter – geosfæren, hydrosfæren, atmosfæren og biosfæren – samt prosessene og samspillet mellom dem.',
    },
    {
      question: 'Hva er en positiv tilbakekobling i jordsystemet?',
      options: ['En prosess som forsterker den opprinnelige endringen', 'En prosess som demper den opprinnelige endringen', 'En prosess uten effekt på systemet', 'En tilfeldig hendelse'],
      explanation: 'Positiv tilbakekobling forsterker endringen, f.eks. issmelting som reduserer refleksjon og dermed øker oppvarmingen ytterligere.',
    },
    {
      question: 'Hvilke to hovedkilder driver jordsystemet med energi?',
      options: ['Solstråling og jordens indre varme', 'Månens gravitasjon og vind', 'Vulkaner og bølger alene', 'Bare solstråling'],
      explanation: 'Jordsystemet drives av ekstern energi fra solen og intern energi fra radioaktiv nedbrytning og restvarme i jordens indre.',
    },
    {
      question: 'Hva slags system er jorden med hensyn til materie?',
      options: ['Et tilnærmet lukket system', 'Et helt åpent system', 'Et isolert system uten energiutveksling', 'Et system uten reservoarer'],
      explanation: 'Jorden er tilnærmet lukket for materie (svært lite kommer til eller forlater planeten), men åpent for energi.',
    },
    {
      question: 'Hvorfor brukes systemtankegang i geofag?',
      options: ['For å forstå hvordan reservoarer, fluks og kretsløp påvirker hverandre', 'For å studere bare ett reservoar isolert', 'Fordi jordens deler ikke påvirker hverandre', 'For å se bort fra energi'],
      explanation: 'Systemtankegang ser på reservoarer, fluks, sykluser og tilbakekoblinger, slik at man forstår hvordan en endring ett sted påvirker resten.',
    },
  ],
  'geofag-1-1-2': [
    {
      question: 'Hva er seismiske bølger?',
      options: ['Energibølger som forplanter seg gjennom jorden etter jordskjelv', 'Bølger på havoverflaten', 'Lydbølger i atmosfæren', 'Lysstråler fra solen'],
      explanation: 'Seismiske bølger er energibølger fra jordskjelv eller eksplosjoner som forteller oss om jordens indre oppbygging.',
    },
    {
      question: 'Hvilken seismisk bølgetype går raskest og kan bevege seg gjennom både fast stoff og væske?',
      options: ['P-bølger (trykkbølger)', 'S-bølger (skjærbølger)', 'Overflatebølger', 'Lydbølger'],
      explanation: 'P-bølger er trykkbølger som går raskest og kan forplante seg gjennom både faste og flytende materialer, mens S-bølger ikke går gjennom væske.',
    },
    {
      question: 'Hva er litosfæren?',
      options: ['Det stive ytre laget med skorpen og øvre del av mantelen', 'Det flytende ytre laget av kjernen', 'Alt vann på jorden', 'Atmosfærens nederste lag'],
      explanation: 'Litosfæren er det stive ytre laget (ca. 100 km tykt) som omfatter jordskorpen og den øverste delen av mantelen.',
    },
    {
      question: 'Hva kjennetegner astenosfæren?',
      options: ['Den er plastisk og ligger under litosfæren', 'Den er helt stiv og fast', 'Den utgjør jordens indre kjerne', 'Den finnes i atmosfæren'],
      explanation: 'Astenosfæren er det plastiske (delvis seigtflytende) laget under litosfæren, der de tektoniske platene kan bevege seg på.',
    },
    {
      question: 'Hvordan vet forskere hva som finnes inne i jorden uten å kunne bore dit?',
      options: ['Ved å analysere hvordan seismiske bølger brytes og endrer hastighet', 'Ved å bore helt til kjernen', 'Ved å måle temperaturen på overflaten', 'Ved å studere stjernene'],
      explanation: 'Seismiske bølger endrer hastighet og retning når de passerer lag med ulik tetthet og tilstand, og dette avslører jordens indre struktur.',
    },
  ],
  'geofag-1-1-3': [
    {
      question: 'Hva omfatter geosfæren?',
      options: ['Alle faste materialer på jorden, fra overflaten til kjernen', 'Alt vann på jorden', 'Alt liv på jorden', 'Luftlaget rundt jorden'],
      explanation: 'Geosfæren omfatter alle faste materialer – bergarter, mineraler og jord – fra jordoverflaten helt inn til kjernen.',
    },
    {
      question: 'Hva omfatter hydrosfæren?',
      options: ['Alt vann på jorden i flytende, fast og gassform', 'Bare havene', 'Bare isbreene', 'Vanndamp i atmosfæren alene'],
      explanation: 'Hydrosfæren omfatter alt vann i alle faser: hav, innsjøer, elver, grunnvann, isbreer, snø og vanndamp.',
    },
    {
      question: 'Hva er biosfæren?',
      options: ['Summen av alle økosystemer og levende organismer på jorden', 'Bare planteriket', 'Det øverste laget av atmosfæren', 'Jordens indre kjerne'],
      explanation: 'Biosfæren er summen av alt liv på jorden og organismenes samspill med hverandre og de andre sfærene.',
    },
    {
      question: 'Hvilken sfære omfatter all luft rundt jorden?',
      options: ['Atmosfæren', 'Hydrosfæren', 'Geosfæren', 'Biosfæren'],
      explanation: 'Atmosfæren er gasslaget som omgir jorden og holdes på plass av tyngdekraften.',
    },
    {
      question: 'Hvorfor er det viktig å forstå at de fire sfærene henger sammen?',
      options: ['En endring i én sfære påvirker de andre gjennom samspill og kretsløp', 'Sfærene er helt uavhengige av hverandre', 'Bare geosfæren har betydning', 'Sfærene utveksler aldri materie'],
      explanation: 'Sfærene utveksler stoff og energi, slik at en endring i én sfære (f.eks. økt CO₂ i atmosfæren) får følger for de andre.',
    },
  ],
  'geofag-1-1-4': [
    {
      question: 'Hva er et biogeokjemisk kretsløp?',
      options: ['En syklus der grunnstoffer sirkulerer mellom de fire sfærene', 'En enkeltveis transport av energi', 'En prosess som bare skjer i atmosfæren', 'En type bergart'],
      explanation: 'Biogeokjemiske kretsløp er sykluser der grunnstoffer som karbon, nitrogen og fosfor sirkulerer mellom biosfæren, geosfæren, hydrosfæren og atmosfæren.',
    },
    {
      question: 'Hvilket kretsløp beskriver vannets sirkulasjon mellom hav, atmosfære og land?',
      options: ['Vannkretsløpet', 'Karbonkretsløpet', 'Nitrogenkretsløpet', 'Bergartskretsløpet'],
      explanation: 'Vannkretsløpet binder sfærene sammen gjennom fordampning, kondensasjon, nedbør og avrenning.',
    },
    {
      question: 'Hva er et eksempel på samspill mellom biosfæren og atmosfæren?',
      options: ['Planter tar opp CO₂ fra atmosfæren gjennom fotosyntese', 'Bergarter danner nye fjell', 'Isbreer eroderer daler', 'Magma stiger opp fra mantelen'],
      explanation: 'Fotosyntesen er et tydelig samspill: planter (biosfæren) fjerner CO₂ fra atmosfæren og frigjør oksygen.',
    },
    {
      question: 'Hvordan kan et vulkanutbrudd påvirke flere sfærer samtidig?',
      options: ['Det avgir gasser til atmosfæren, lava til geosfæren og kan påvirke vann og liv', 'Det påvirker bare geosfæren', 'Det påvirker ingenting utenfor vulkanen', 'Det skjer bare i hydrosfæren'],
      explanation: 'Et utbrudd slipper ut aske og gasser (atmosfæren), danner ny bergart (geosfæren), kan gi sur nedbør (hydrosfæren) og skade vegetasjon (biosfæren).',
    },
    {
      question: 'Hvorfor regnes kretsløp som viktige bindeledd i jordsystemet?',
      options: ['De flytter materie mellom sfærene og holder systemet i bevegelse', 'De stopper all utveksling mellom sfærene', 'De gjelder bare for vann', 'De har ingen betydning for livet'],
      explanation: 'Kretsløpene transporterer stoff mellom sfærene og knytter dem sammen til ett dynamisk system som er en forutsetning for liv.',
    },
  ],
  'geofag-1-1-5': [
    {
      question: 'Hva er forskjellen på solstråling og jordstråling?',
      options: ['Solstråling er kortbølget, jordstråling er langbølget (infrarød)', 'Begge er kortbølget', 'Solstråling er infrarød, jordstråling er synlig lys', 'De er identiske'],
      explanation: 'Solstråling er kortbølget (synlig lys og UV), mens jorden sender ut langbølget infrarød varmestråling.',
    },
    {
      question: 'Hva er drivhuseffekten?',
      options: ['Drivhusgasser absorberer langbølget stråling og sender noe tilbake mot jorden', 'Sollys reflekteres helt bort fra jorden', 'Jorden mister all varme til verdensrommet', 'Atmosfæren slipper ut all varme'],
      explanation: 'Drivhusgasser som CO₂, vanndamp og metan absorberer langbølget varmestråling fra jordoverflaten og holder dermed på varme i atmosfæren.',
    },
    {
      question: 'Hvilke gasser er viktige drivhusgasser?',
      options: ['CO₂, vanndamp, metan og lystgass', 'Oksygen og nitrogen', 'Helium og argon', 'Kun oksygen'],
      explanation: 'De viktigste drivhusgassene er CO₂, vanndamp (H₂O), metan (CH₄) og lystgass (N₂O), som alle absorberer langbølget stråling.',
    },
    {
      question: 'Hvorfor er den naturlige drivhuseffekten nødvendig for livet på jorden?',
      options: ['Uten den ville jorden vært altfor kald for liv', 'Den gjør jorden altfor varm', 'Den hindrer fotosyntese', 'Den har ingen effekt på temperaturen'],
      explanation: 'Uten den naturlige drivhuseffekten ville gjennomsnittstemperaturen vært rundt –18 °C i stedet for dagens behagelige ca. +15 °C.',
    },
    {
      question: 'Hva driver i hovedsak jordens energibalanse?',
      options: ['Balansen mellom innkommende solstråling og utgående jordstråling', 'Bare jordens indre varme', 'Månens tiltrekning', 'Vindenergi'],
      explanation: 'Energibalansen bestemmes av forholdet mellom solenergien jorden mottar og varmestrålingen den sender ut igjen til verdensrommet.',
    },
  ],
  'geofag-1-2-1': [
    {
      question: 'Hva er et mineral?',
      options: ['Et naturlig, uorganisk fast stoff med bestemt sammensetning og krystallstruktur', 'Enhver type bergart', 'Et organisk stoff fra planter', 'En blanding av gasser'],
      explanation: 'Et mineral er et naturlig forekommende, uorganisk fast stoff med definert kjemisk sammensetning og ordnet indre atomstruktur.',
    },
    {
      question: 'Hva er kløv hos et mineral?',
      options: ['Mineralets tendens til å bryte langs bestemte plan', 'Mineralets farge', 'Mineralets vekt', 'Mineralets smeltepunkt'],
      explanation: 'Kløv er tendensen til å brekke langs bestemte krystallografiske plan der bindingene er svakere, f.eks. glimmer som kløver i tynne flak.',
    },
    {
      question: 'Hvilken skala brukes til å angi et minerals hardhet?',
      options: ['Mohs hardhetsskala', 'Richters skala', 'Celsius-skalaen', 'Köppen-systemet'],
      explanation: 'Mohs hardhetsskala går fra 1 (talk) til 10 (diamant) og angir hvor godt et mineral motstår riping.',
    },
    {
      question: 'Hva er en krystall?',
      options: ['Et fast stoff der atomene er ordnet i et regelmessig tredimensjonalt mønster', 'Et stoff uten indre struktur', 'En type gass', 'En flytende bergart'],
      explanation: 'En krystall har atomene ordnet i et regelmessig gitter, og den ytre formen (habitus) gjenspeiler den indre atomstrukturen.',
    },
    {
      question: 'Hvorfor er strekfarge nyttig ved mineralidentifikasjon?',
      options: ['Strekfargen er ofte mer pålitelig enn mineralets overflatefarge', 'Strekfargen er alltid lik overflatefargen', 'Strekfargen viser mineralets hardhet', 'Strekfargen avhenger av lyset'],
      explanation: 'Strekfargen (fargen på pulveret når mineralet rives mot en porselensplate) er ofte mer konstant og pålitelig enn den varierende overflatefargen.',
    },
  ],
  'geofag-1-2-2': [
    {
      question: 'Hva er magma?',
      options: ['En naturlig smeltemasse av silikater og gasser under jordoverflaten', 'Smeltet bergart som har nådd overflaten', 'En type sediment', 'Fast bergart i mantelen'],
      explanation: 'Magma er en smeltemasse av silikater, oksider og flyktige stoffer som finnes i magmakamre under jordoverflaten. Når den når overflaten, kalles den lava.',
    },
    {
      question: 'Hva indikerer en fanerittisk tekstur i en magmatisk bergart?',
      options: ['Langsom avkjøling dypt nede, slik at store krystaller dannes', 'Rask avkjøling ved overflaten', 'At bergarten er sedimentær', 'At bergarten aldri var smeltet'],
      explanation: 'Fanerittisk tekstur (store, synlige krystaller) tyder på langsom avkjøling dypt under jorden, slik som i granitt (intrusiv bergart).',
    },
    {
      question: 'Hva indikerer en afanittisk tekstur?',
      options: ['Rask avkjøling ved eller nær overflaten gir små krystaller', 'Svært langsom avkjøling i dypet', 'At bergarten er metamorf', 'At den er dannet av sedimenter'],
      explanation: 'Afanittisk tekstur har så små krystaller at de ikke synes for det blotte øye, noe som skyldes rask avkjøling, f.eks. i basalt.',
    },
    {
      question: 'Hva er forskjellen på intrusive og ekstrusive magmatiske bergarter?',
      options: ['Intrusive størkner under bakken, ekstrusive størkner på overflaten', 'Intrusive størkner på overflaten, ekstrusive under bakken', 'De dannes begge av sedimenter', 'Det er ingen forskjell'],
      explanation: 'Intrusive bergarter (f.eks. granitt) størkner sakte dypt nede med grove krystaller, mens ekstrusive (f.eks. basalt) størkner raskt på overflaten.',
    },
    {
      question: 'Hvorfor er granitt grovkornet mens basalt er finkornet?',
      options: ['Granitt avkjøles langsomt i dypet, basalt avkjøles raskt på overflaten', 'Granitt avkjøles raskest', 'Begge avkjøles like raskt', 'Basalt dannes av sedimenter'],
      explanation: 'Langsom avkjøling gir tid til at store krystaller vokser (granitt), mens rask avkjøling gir små krystaller (basalt).',
    },
  ],
  'geofag-1-2-3': [
    {
      question: 'Hva er diagenese?',
      options: ['Prosessen der løse sedimenter omdannes til fast bergart', 'Smelting av bergarter til magma', 'Forvitring av fjell', 'Dannelse av krystaller i magma'],
      explanation: 'Diagenese omfatter kompaksjon og sementering som binder løse sedimenter sammen til fast sedimentær bergart.',
    },
    {
      question: 'Hvordan dannes en evaporitt?',
      options: ['Ved fordampning av vann som feller ut mineraler', 'Ved avkjøling av magma', 'Ved høyt trykk i mantelen', 'Ved erosjon av fjell'],
      explanation: 'Evaporitter er kjemiske sedimentære bergarter som dannes når vann fordamper og oppløste mineraler felles ut, f.eks. kalsitt, gips og steinsalt.',
    },
    {
      question: 'Hvilken gruppe hører kalkstein laget av skjell- og korallrester til?',
      options: ['Biogene sedimentære bergarter', 'Magmatiske bergarter', 'Metamorfe bergarter', 'Klastiske bergarter fra sand'],
      explanation: 'Kalkstein dannet av organismers kalkrester er en biogen (organisk) sedimentær bergart.',
    },
    {
      question: 'Hva er klastiske sedimentære bergarter laget av?',
      options: ['Fragmenter (klaster) av eldre bergarter, som sand og leire', 'Utfelte mineraler fra vann', 'Avkjølt magma', 'Rester av levende organismer alene'],
      explanation: 'Klastiske bergarter (f.eks. sandstein og leirskifer) består av fragmenter fra forvitrede og eroderte eldre bergarter.',
    },
    {
      question: 'Hva kan sedimentære strukturer som lagdeling og rifler fortelle oss?',
      options: ['Om miljøet og forholdene da sedimentene ble avsatt', 'Om bergartens smeltepunkt', 'Om jordens indre temperatur', 'Om fremtidens klima'],
      explanation: 'Sedimentære strukturer gir informasjon om avsetningsmiljøet, f.eks. strømretning, vanndybde og energinivå da sedimentene ble lagt ned.',
    },
  ],
  'geofag-1-2-4': [
    {
      question: 'Hva er metamorfose?',
      options: ['Omdanning av bergarter i fast tilstand ved endret trykk og temperatur', 'Smelting av bergarter til magma', 'Avsetning av sedimenter', 'Forvitring ved overflaten'],
      explanation: 'Metamorfose er omdanning av bergarter i fast tilstand som følge av endringer i temperatur, trykk og/eller kjemisk miljø – bergarten smelter ikke.',
    },
    {
      question: 'Hva er foliasjon i en metamorf bergart?',
      options: ['Parallell orientering av plate- eller nåleformede mineraler', 'Avrundede sandkorn', 'Store gassbobler', 'Fossiler i bergarten'],
      explanation: 'Foliasjon er en lagdelt eller skifrig tekstur som dannes når mineraler orienteres vinkelrett på trykkretningen under metamorfosen.',
    },
    {
      question: 'Hvilken metamorf bergart dannes fra kalkstein?',
      options: ['Marmor', 'Gneis', 'Skifer', 'Basalt'],
      explanation: 'Når kalkstein utsettes for metamorfose, omdannes den til marmor. Leirskifer blir til skifer, og granitt kan bli til gneis.',
    },
    {
      question: 'Hvilke faktorer driver metamorfose?',
      options: ['Økt trykk, økt temperatur og kjemisk aktive væsker', 'Bare fordampning av vann', 'Bare erosjon', 'Avkjøling av magma'],
      explanation: 'Metamorfose drives av økt temperatur, økt trykk og noen ganger kjemisk aktive væsker, ofte i forbindelse med fjellkjededannelse og platebevegelser.',
    },
    {
      question: 'Hvorfor smelter ikke bergarten under metamorfose?',
      options: ['Temperaturen og trykket endrer mineralene uten å nå smeltepunktet', 'Fordi det ikke er noen varme involvert', 'Fordi bergarten allerede er smeltet', 'Fordi den er sedimentær'],
      explanation: 'Metamorfose skjer i fast tilstand: temperaturen og trykket er høyt nok til å endre mineralstrukturen, men ikke høyt nok til å smelte bergarten.',
    },
  ],
  'geofag-1-2-5': [
    {
      question: 'Hva beskriver bergartskretsløpet?',
      options: ['Hvordan bergarter omdannes mellom magmatiske, sedimentære og metamorfe typer', 'Bare hvordan sedimenter dannes', 'Hvordan vann sirkulerer', 'Hvordan magma stiger opp'],
      explanation: 'Bergartskretsløpet er den kontinuerlige omdanningen mellom de tre bergartsgruppene, drevet av jordens indre og ytre krefter.',
    },
    {
      question: 'Hvordan kan en magmatisk bergart bli til en sedimentær bergart?',
      options: ['Gjennom forvitring, erosjon, transport, avsetning og diagenese', 'Gjennom smelting til magma', 'Gjennom metamorfose under høyt trykk', 'Direkte uten noen prosesser'],
      explanation: 'En magmatisk bergart forvitrer og eroderes til sedimenter, som transporteres, avsettes og omdannes til sedimentær bergart gjennom diagenese.',
    },
    {
      question: 'Hva må skje for at en hvilken som helst bergart skal bli til magmatisk bergart?',
      options: ['Den må smelte til magma og deretter størkne', 'Den må presses sammen til sediment', 'Den må utsettes for foliasjon', 'Den må forvitre'],
      explanation: 'Enhver bergart kan smelte til magma ved høy nok temperatur, og når magmaen størkner, dannes en ny magmatisk bergart.',
    },
    {
      question: 'Hvilke krefter driver bergartskretsløpet?',
      options: ['Jordens indre varme og ytre prosesser som forvitring og erosjon', 'Bare månens gravitasjon', 'Bare solstråling', 'Ingen krefter – det skjer tilfeldig'],
      explanation: 'Kretsløpet drives av jordens indre energi (platetektonikk, vulkanisme) og ytre prosesser drevet av sol og tyngdekraft (forvitring, erosjon, avsetning).',
    },
    {
      question: 'Hvorfor sies det at bergartskretsløpet ikke har en fast rekkefølge?',
      options: ['En bergart kan omdannes til hvilken som helst av de andre typene', 'Bergarter må alltid gå gjennom alle tre stadier i rekkefølge', 'Kretsløpet går bare én vei', 'Bergarter kan bare bli sedimentære'],
      explanation: 'En bergart kan ta mange veier gjennom kretsløpet – f.eks. kan en metamorf bergart både smelte til magma eller forvitre til sediment.',
    },
  ],
  'geofag-1-3-1': [
    {
      question: 'Hva er kontinentaldrift?',
      options: ['Teorien om at kontinentene har beveget seg horisontalt over geologisk tid', 'Teorien om at jorden krymper', 'En forklaring på vulkanutbrudd alene', 'Teorien om at havene tørker ut'],
      explanation: 'Kontinentaldrift er teorien, foreslått av Alfred Wegener, om at kontinentene har flyttet seg horisontalt over jordens overflate.',
    },
    {
      question: 'Hva var Pangea?',
      options: ['Et superkontinent som inneholdt nesten alt landareal', 'Et eldgammelt hav', 'En fjellkjede', 'En type bergart'],
      explanation: 'Pangea var et superkontinent for ca. 335–175 millioner år siden som samlet nesten alt landareal i én landmasse.',
    },
    {
      question: 'Hvilket bevis brukte Wegener for kontinentaldrift?',
      options: ['Kontinentene passer sammen som puslespillbiter, og fossiler og fjell stemmer overens', 'At havene var fulle av salt', 'At jordskjelv skjer overalt', 'At vulkaner er runde'],
      explanation: 'Wegener pekte på kystlinjene som passer sammen, like fossiler og fjellkjeder på adskilte kontinenter, og spor etter gamle istider.',
    },
    {
      question: 'Hvorfor ble Wegeners teori opprinnelig avvist?',
      options: ['Han kunne ikke forklare hvilken kraft som flyttet kontinentene', 'Det fantes ingen bevis i det hele tatt', 'Kontinentene var åpenbart i ro', 'Teorien var for komplisert å forstå'],
      explanation: 'Wegener manglet en mekanisme for hvordan kontinentene kunne bevege seg, og derfor avviste mange forskere teorien til platetektonikken senere ga svaret.',
    },
    {
      question: 'Hva førte til at teorien om kontinentaldrift senere ble akseptert?',
      options: ['Oppdagelsen av havbunnspredning og platetektonikk ga en mekanisme', 'Wegener fant olje', 'Kontinentene sluttet å bevege seg', 'Man fant Pangea igjen'],
      explanation: 'Funn av havbunnspredning og magnetiske striper på havbunnen ga mekanismen som manglet, og teorien ble en del av platetektonikken.',
    },
  ],
  'geofag-1-3-2': [
    {
      question: 'Hva er litosfæren delt inn i?',
      options: ['Tektoniske plater som beveger seg på astenosfæren', 'Et eneste sammenhengende skall', 'Bare to halvkuler', 'Lag av sedimenter'],
      explanation: 'Litosfæren er delt inn i tektoniske plater som beveger seg på den underliggende, plastiske astenosfæren.',
    },
    {
      question: 'Hva er forskjellen på oseanisk og kontinental skorpe?',
      options: ['Oseanisk skorpe er tynnere og tettere enn kontinental skorpe', 'Oseanisk skorpe er tykkere og lettere', 'De har nøyaktig samme tetthet', 'Kontinental skorpe finnes bare under havet'],
      explanation: 'Oseanisk skorpe er tynn (5–10 km) og tett (basaltisk), mens kontinental skorpe er tykkere (30–70 km) og mindre tett (granittisk).',
    },
    {
      question: 'Hva er isostasi?',
      options: ['At litosfæren flyter i likevekt på astenosfæren', 'At platene står helt stille', 'At havet stiger jevnt', 'At fjell aldri eroderer'],
      explanation: 'Isostasi er prinsippet om at litosfæren flyter i likevekt på astenosfæren – lett kontinental skorpe flyter høyere enn tyngre oseanisk skorpe.',
    },
    {
      question: 'Hvorfor flyter kontinental skorpe høyere enn oseanisk skorpe?',
      options: ['Kontinental skorpe er mindre tett (lettere)', 'Kontinental skorpe er tyngre', 'Oseanisk skorpe er tykkere', 'De har samme tetthet, men ulik temperatur'],
      explanation: 'Fordi kontinental skorpe er mindre tett enn oseanisk skorpe, flyter den høyere på astenosfæren – på samme måte som lette gjenstander flyter høyere i vann.',
    },
    {
      question: 'Hva driver i hovedsak bevegelsen av de tektoniske platene?',
      options: ['Konveksjonsstrømmer i mantelen og krefter som slab pull og ridge push', 'Vindene i atmosfæren', 'Havstrømmene', 'Månens tiltrekning alene'],
      explanation: 'Platene drives av konveksjon i mantelen sammen med slab pull (synkende plater) og ridge push (oppstigning ved midthavsrygger).',
    },
  ],
  'geofag-1-3-3': [
    {
      question: 'Hva skjer ved en divergerende plategrense?',
      options: ['To plater beveger seg fra hverandre og ny skorpe dannes', 'To plater kolliderer og fjell dannes', 'To plater glir forbi hverandre', 'En plate synker ned under en annen'],
      explanation: 'Ved divergerende grenser trekker platene fra hverandre, magma stiger opp og størkner til ny oseanisk skorpe.',
    },
    {
      question: 'Hva er havbunnspredning?',
      options: ['Ny oseanisk skorpe dannes ved midthavsrygger og brer seg utover', 'Havbunnen synker ned i mantelen', 'Havet tørker ut over tid', 'Sedimenter dekker havbunnen'],
      explanation: 'Havbunnspredning er prosessen der ny oseanisk litosfære dannes ved midthavsrygger og beveger seg bort til begge sider.',
    },
    {
      question: 'Hva er et eksempel på en midthavsrygg?',
      options: ['Den midtatlantiske rygg', 'Himalaya', 'Marianergraven', 'San Andreas-forkastningen'],
      explanation: 'Den midtatlantiske rygg er en divergerende plategrense der ny havbunn dannes mellom Amerika og Europa/Afrika.',
    },
    {
      question: 'Hvordan støtter de magnetiske stripene på havbunnen teorien om havbunnspredning?',
      options: ['De viser symmetriske mønstre der jordens magnetfelt har skiftet over tid', 'De viser at havbunnen er like gammel overalt', 'De peker mot land', 'De er tilfeldige'],
      explanation: 'Magnetiske striper er symmetriske om midthavsryggen og registrerer jordens magnetfeltsvekslinger, noe som beviser at ny skorpe stadig dannes ved ryggen.',
    },
    {
      question: 'Hva kan dannes når en divergerende grense oppstår inne på et kontinent?',
      options: ['En kontinental rift som over tid kan utvikles til et nytt hav', 'En fjellkjede', 'En dyphavsgrav', 'En vulkanbue'],
      explanation: 'En kontinental rift (f.eks. Øst-Afrika-riften) kan over tid utvide seg, fylles med vann og bli til et nytt hav.',
    },
  ],
  'geofag-1-3-4': [
    {
      question: 'Hva er subduksjon?',
      options: ['En litosfæreplate synker ned under en annen og ned i mantelen', 'To plater glir forbi hverandre', 'Ny skorpe dannes ved en rygg', 'Platene står helt stille'],
      explanation: 'Subduksjon skjer ved konvergerende grenser der den tetteste platen synker ned under den andre og ned i mantelen.',
    },
    {
      question: 'Hva dannes der en oseanisk plate begynner å subdusere under en annen?',
      options: ['En dyphavsgrav', 'En midthavsrygg', 'En transform forkastning', 'En kontinental rift'],
      explanation: 'En dyphavsgrav, som den dype Marianergraven, dannes der en plate bøyer seg nedover og begynner å subdusere.',
    },
    {
      question: 'Hva skjer når to kontinentale plater kolliderer?',
      options: ['Det dannes høye fjellkjeder, som Himalaya', 'Den ene synker dypt ned i mantelen', 'Det dannes ny havbunn', 'Platene glir uten å påvirke hverandre'],
      explanation: 'Når to kontinentale plater kolliderer, er begge for lette til å subdusere, og skorpa presses sammen og opp til høye fjellkjeder som Himalaya.',
    },
    {
      question: 'Hvorfor oppstår det ofte vulkaner ved subduksjonssoner?',
      options: ['Vann frigjort fra den nedsynkende platen senker smeltepunktet og danner magma', 'Det er ingen sammenheng', 'Platene gnisser og lager gnister', 'Havvann koker direkte til vulkaner'],
      explanation: 'Når den subduserende platen varmes opp, frigjøres vann som senker smeltepunktet i mantelen over, slik at magma dannes og stiger opp som vulkaner.',
    },
    {
      question: 'Hva kjennetegner en oseanisk-kontinental konvergens?',
      options: ['Den tette oseaniske platen subduserer under den lettere kontinentale', 'Den kontinentale platen subduserer under den oseaniske', 'Begge plater dannes på nytt', 'Platene glir forbi hverandre'],
      explanation: 'Den tette oseaniske platen synker ned under den lettere kontinentale platen og danner blant annet vulkaner og fjellkjeder, som Andesfjellene.',
    },
  ],
  'geofag-1-3-5': [
    {
      question: 'Hva skjer ved en transform plategrense?',
      options: ['To plater glir horisontalt forbi hverandre langs en forkastning', 'Ny skorpe dannes', 'En plate synker ned under en annen', 'Fjellkjeder presses opp'],
      explanation: 'Ved transforme grenser glir platene horisontalt forbi hverandre, og det dannes verken ny eller ødelegges gammel skorpe.',
    },
    {
      question: 'Hva er et kjent eksempel på en transform forkastning?',
      options: ['San Andreas-forkastningen i California', 'Den midtatlantiske rygg', 'Marianergraven', 'Himalaya'],
      explanation: 'San Andreas-forkastningen er en transform grense der Stillehavsplaten og Den nordamerikanske platen glir forbi hverandre, med hyppige jordskjelv.',
    },
    {
      question: 'Hva er slab pull?',
      options: ['Gravitasjonskraften fra en kald, tung plate som synker ned i mantelen', 'Trykket fra magma som stiger ved en rygg', 'Vindkraft over havet', 'Tiltrekningen fra månen'],
      explanation: 'Slab pull er kraften som oppstår når en kald, tung litosfæreplate synker ned i mantelen og drar resten av platen med seg.',
    },
    {
      question: 'Hvorfor er transforme grenser ofte forbundet med jordskjelv?',
      options: ['Spenninger bygges opp når platene låser seg, og frigjøres plutselig', 'Det dannes mye magma der', 'Havbunnen synker fort', 'Platene smelter sammen'],
      explanation: 'Når platene glir forbi hverandre, kan de hekte seg fast og bygge opp spenning som plutselig utløses som jordskjelv.',
    },
    {
      question: 'Hvilken drivkraft regnes i dag som viktigst for platebevegelsene?',
      options: ['Slab pull fra synkende plater', 'Vindkraft', 'Tidevannskreftene', 'Erosjon på land'],
      explanation: 'Slab pull, der tunge subduserende plater drar resten av platen med seg, regnes som den viktigste drivkraften bak platebevegelsene.',
    },
  ],
  'geofag-1-4-1': [
    {
      question: 'Hva er et magmakammer?',
      options: ['Et underjordisk reservoar fylt med smeltet bergart', 'Selve kraterets åpning', 'En sky av vulkansk aske', 'Et lag av størknet lava'],
      explanation: 'Et magmakammer er et reservoar av magma, vanligvis 1–10 km under vulkanen, som mater utbruddene.',
    },
    {
      question: 'Hva er en caldera?',
      options: ['Et stort krater dannet ved kollaps av vulkantoppen etter et stort utbrudd', 'En liten sprekk i bakken', 'En type lavastrøm', 'En vulkansk gass'],
      explanation: 'En caldera er et stort, grytelignende krater som dannes når toppen av vulkanen kollapser etter at magmakammeret er tømt.',
    },
    {
      question: 'Hvilken sammenheng er det mellom magmatype og vulkanform?',
      options: ['Tyntflytende magma gir slake skjoldvulkaner, seig magma gir bratte stratovulkaner', 'Magmatypen har ingen betydning for formen', 'All magma gir samme vulkanform', 'Seig magma gir alltid flate vulkaner'],
      explanation: 'Tyntflytende (basaltisk) magma sprer seg lett og gir slake skjoldvulkaner, mens seig (silikatrik) magma bygger bratte, eksplosive stratovulkaner.',
    },
    {
      question: 'Hva kjennetegner en skjoldvulkan?',
      options: ['Slake sider og tyntflytende lava', 'Bratte sider og eksplosive utbrudd', 'At den bare slipper ut aske', 'At den aldri har utbrudd'],
      explanation: 'En skjoldvulkan har slake sider fordi tyntflytende basaltlava renner langt før den størkner, slik som vulkanene på Hawaii.',
    },
    {
      question: 'Hvorfor er stratovulkaner ofte mer farlige enn skjoldvulkaner?',
      options: ['Seig, gassrik magma gir kraftige, eksplosive utbrudd', 'De er alltid små', 'De slipper bare ut vanndamp', 'De har aldri utbrudd'],
      explanation: 'Stratovulkaner har seig, gassrik magma som bygger opp trykk og gir eksplosive utbrudd med aske og pyroklastiske strømmer.',
    },
  ],
  'geofag-1-4-2': [
    {
      question: 'Hva kjennetegner et effusivt utbrudd?',
      options: ['Tyntflytende lava renner rolig ut uten store eksplosjoner', 'Voldsomme eksplosjoner med aske', 'At ingenting kommer ut', 'At bare gass slippes ut'],
      explanation: 'Et effusivt utbrudd er ikke-eksplosivt: tyntflytende lava strømmer rolig ut fordi gassene slipper lett ut av den lavviskøse magmaen.',
    },
    {
      question: 'Hva er en pyroklastisk strøm?',
      options: ['En dødelig blanding av varm gass, aske og bergartsfragmenter', 'En rolig lavastrøm', 'En sky av regn', 'En type sediment'],
      explanation: 'En pyroklastisk strøm er en svært varm og rask blanding av gass, aske og bergartsfragmenter som raser nedover vulkansiden – ekstremt farlig.',
    },
    {
      question: 'Hva er tefra?',
      options: ['Fragmenter av størknet magma som slynges ut i lufta, fra aske til blokker', 'Tyntflytende lava', 'Vulkansk gass', 'Smeltet bergart i magmakammeret'],
      explanation: 'Tefra er en samlebetegnelse på alle faste partikler som slynges ut under et utbrudd, fra fin aske til store bomber og blokker.',
    },
    {
      question: 'Hvordan kan forskere forutsi vulkanutbrudd?',
      options: ['Ved å overvåke jordskjelv, gassutslipp og oppsvulming av bakken', 'Ved å se på skyene', 'Ved å måle havtemperaturen', 'Det er helt umulig å forutsi'],
      explanation: 'Forskere overvåker små jordskjelv, endringer i gassutslipp og oppsvulming av bakken (deformasjon) som varsler at magma er på vei opp.',
    },
    {
      question: 'Hvorfor gir gassrik, seig magma mer eksplosive utbrudd?',
      options: ['Gassene klarer ikke slippe lett ut og bygger opp trykk', 'Gassene slipper alltid lett ut', 'Seig magma inneholder ingen gass', 'Trykket forsvinner av seg selv'],
      explanation: 'I seig magma sitter gassene fast og bygger opp stort trykk, som til slutt utløses i kraftige eksplosjoner.',
    },
  ],
  'geofag-1-4-3': [
    {
      question: 'Hva er et jordskjelv?',
      options: ['Plutselig frigjøring av opplagret elastisk energi i jordskorpen', 'En langsom heving av land', 'En type vulkanutbrudd', 'Bevegelse av havstrømmer'],
      explanation: 'Et jordskjelv oppstår når spenninger i jordskorpen overskrider bergartens styrke og opplagret energi frigjøres som seismiske bølger.',
    },
    {
      question: 'Hva er forskjellen på P-bølger og S-bølger?',
      options: ['P-bølger er trykkbølger som går raskest; S-bølger er skjærbølger som ikke går gjennom væske', 'S-bølger går raskest gjennom alt', 'P-bølger går ikke gjennom fast stoff', 'De er identiske'],
      explanation: 'P-bølger (trykkbølger) går raskest og gjennom både fast og flytende stoff, mens S-bølger (skjærbølger) er tregere og går ikke gjennom væske.',
    },
    {
      question: 'Hva kalles punktet inne i jorden der et jordskjelv starter?',
      options: ['Hyposenteret (fokus)', 'Episenteret', 'Kraterets midtpunkt', 'Magnitudepunktet'],
      explanation: 'Hyposenteret (fokus) er punktet i dypet der bruddet starter. Episenteret er punktet på overflaten rett over hyposenteret.',
    },
    {
      question: 'Hva måler momentmagnitudeskalaen?',
      options: ['Den totale energien som frigjøres i et jordskjelv', 'Bare hvor mange som merket skjelvet', 'Temperaturen i bakken', 'Hvor lenge skjelvet varte i sekunder alene'],
      explanation: 'Momentmagnitudeskalaen (en videreutvikling av Richters skala) angir den frigjorte energien; hvert trinn tilsvarer en stor økning i energi.',
    },
    {
      question: 'Hvordan kan seismografer fra flere stasjoner brukes til å finne episenteret?',
      options: ['Ved å sammenligne ankomsttidene for P- og S-bølger fra flere stasjoner', 'Ved å se hvor det regner mest', 'Ved å måle lufttrykket', 'Ved å telle etterskjelv'],
      explanation: 'Forskjellen i ankomsttid mellom P- og S-bølger gir avstanden til skjelvet fra hver stasjon; med tre stasjoner kan episenteret triangulers.',
    },
  ],
  'geofag-1-4-4': [
    {
      question: 'Hva er en tsunami?',
      options: ['En serie lange bølger forårsaket av stor forflytning av vann', 'En vanlig vindbølge', 'En type tidevann', 'En sterk havstrøm'],
      explanation: 'En tsunami er lange bølger som oftest skyldes undersjøiske jordskjelv, skred eller vulkanutbrudd som plutselig forflytter store vannmasser.',
    },
    {
      question: 'Hva er den vanligste årsaken til tsunamier?',
      options: ['Undersjøiske jordskjelv', 'Kraftig vind', 'Høyt lufttrykk', 'Månens faser'],
      explanation: 'De fleste tsunamier utløses av undersjøiske jordskjelv ved subduksjonssoner som plutselig hever eller senker havbunnen.',
    },
    {
      question: 'Hvordan oppfører en tsunami seg når den nærmer seg grunt vann nær land?',
      options: ['Den bremser ned, og bølgehøyden øker kraftig', 'Den forsvinner helt', 'Den blir lavere og raskere', 'Den endrer ikke form'],
      explanation: 'På dypt vann har tsunamien lav høyde og høy fart; når den når grunt vann, bremser den og bølgeenergien presses opp i høyden.',
    },
    {
      question: 'Hvorfor er en tsunami farlig selv om bølgen virker lav ute på dypt hav?',
      options: ['Den har enorm energi og bølgelengde som bygger seg opp ved kysten', 'Den er alltid farlig på åpent hav', 'Den synker raskt sammen', 'Den inneholder giftige gasser'],
      explanation: 'På åpent hav er tsunamien knapt merkbar, men dens enorme energi og lange bølgelengde gjør at vannmassen tårner seg opp og flommer langt inn over land.',
    },
    {
      question: 'Hva er et viktig sikkerhetstiltak når et tsunamivarsel utløses?',
      options: ['Evakuere til høyereliggende områder bort fra kysten', 'Gå ned mot stranden for å se på', 'Bli i lavtliggende bygninger', 'Vente til bølgen kommer'],
      explanation: 'Ved tsunamivarsel skal man straks evakuere bort fra kysten til høyereliggende terreng, og et tegn på fare er at vannet trekker seg uvanlig langt ut.',
    },
  ],
  'geofag-1-4-5': [
    {
      question: 'Hva er Ildringen (Ring of Fire)?',
      options: ['En sone rundt Stillehavet med intens vulkansk og seismisk aktivitet', 'En ørken i Afrika', 'En havstrøm i Atlanteren', 'En type vulkan'],
      explanation: 'Ildringen er en hesteskoformet sone rundt Stillehavet med svært mange vulkaner og jordskjelv, knyttet til plategrenser og subduksjon.',
    },
    {
      question: 'Hvordan beregnes risiko ofte i geofag?',
      options: ['Fare × sårbarhet × eksponering', 'Bare ut fra antall vulkaner', 'Fare delt på avstand', 'Sannsynlighet minus konsekvens'],
      explanation: 'Risiko uttrykkes ofte som sannsynligheten for en hendelse multiplisert med konsekvensene, gjerne som fare × sårbarhet × eksponering.',
    },
    {
      question: 'Hvorfor er Ildringen så geologisk aktiv?',
      options: ['Den følger plategrenser med mye subduksjon rundt Stillehavet', 'Det er bare tilfeldig', 'Det er mye vind der', 'Havet er spesielt varmt der'],
      explanation: 'Ildringen følger grensene der Stillehavsplaten møter andre plater, med utstrakt subduksjon som gir både vulkanisme og jordskjelv.',
    },
    {
      question: 'Hva menes med beredskap mot naturfarer?',
      options: ['Planer, varslingssystemer og tiltak for å redusere skade ved hendelser', 'Å ignorere all fare', 'Å bygge nærmest mulig vulkaner', 'Kun å rydde opp etterpå'],
      explanation: 'Beredskap omfatter overvåking, varsling, evakueringsplaner, byggekrav og øvelser som reduserer skade og redder liv når en hendelse inntreffer.',
    },
    {
      question: 'Hvordan kan god arealplanlegging redusere naturfarerisiko?',
      options: ['Ved å unngå bygging i særlig utsatte områder som skredsoner og flomsletter', 'Ved å bygge tettest mulig i faresoner', 'Ved å fjerne all vegetasjon', 'Ved å ignorere kartlegging'],
      explanation: 'Ved å kartlegge faresoner og unngå utbygging i skred-, flom- og rasutsatte områder reduseres eksponeringen og dermed risikoen.',
    },
  ],
  'geofag-1-5-1': [
    {
      question: 'Hva er fysisk (mekanisk) forvitring?',
      options: ['Nedbrytning av bergarter uten endring i kjemisk sammensetning', 'Oppløsning av mineraler i syre', 'Smelting av bergarter', 'Transport av sedimenter'],
      explanation: 'Fysisk forvitring bryter bergarter opp i mindre biter gjennom fysiske prosesser, uten at den kjemiske sammensetningen endres.',
    },
    {
      question: 'Hvordan virker frostsprengning?',
      options: ['Vann fryser i sprekker, utvider seg og sprenger bergarten', 'Syre løser opp mineralene', 'Sollys smelter bergarten', 'Planterøtter løser opp stein'],
      explanation: 'Når vann fryser, utvider det seg ca. 9 %. I sprekker skaper dette et trykk som over tid sprenger bergarten i stykker.',
    },
    {
      question: 'Hva er skallforvitring (eksfoliasjon)?',
      options: ['Tynne skall av bergart flasser av overflaten', 'Bergarten løses opp i vann', 'Mineraler ruster', 'Røtter sprenger fjell'],
      explanation: 'Skallforvitring skjer når ytterste lag av bergarten utvider og trekker seg sammen ulikt fra innsiden, slik at tynne skall flasser av.',
    },
    {
      question: 'I hvilket klima er frostsprengning særlig viktig?',
      options: ['Klima med hyppige vekslinger rundt frysepunktet', 'Varme, fuktige tropeklima', 'Tørre ørkenklima uten vann', 'Områder uten temperaturvariasjon'],
      explanation: 'Frostsprengning er mest aktiv der temperaturen ofte svinger rundt 0 °C, slik at vann gjentatte ganger fryser og tiner i sprekkene.',
    },
    {
      question: 'Hva er trykkavlastning?',
      options: ['Bergarter dannet under høyt trykk ekspanderer når overliggende lag eroderes bort', 'Bergarten presses sammen av is', 'Vann fryser i sprekker', 'Mineraler reagerer med oksygen'],
      explanation: 'Når dyptliggende bergarter som ble dannet under høyt trykk eksponeres ved overflaten, ekspanderer de og sprekker opp i skall parallelt med overflaten.',
    },
  ],
  'geofag-1-5-2': [
    {
      question: 'Hva er kjemisk forvitring?',
      options: ['Nedbrytning av bergarter gjennom kjemiske reaksjoner som endrer mineralene', 'Oppsprekking uten kjemiske endringer', 'Transport av sedimenter med elver', 'Smelting til magma'],
      explanation: 'Kjemisk forvitring bryter ned bergarter ved kjemiske reaksjoner med vann, syrer eller gasser, slik at mineralenes sammensetning endres.',
    },
    {
      question: 'Hva er hydrolyse i forbindelse med forvitring?',
      options: ['Silikatmineraler reagerer med vann og danner leirmineraler', 'Mineraler reagerer med oksygen og ruster', 'Kalkstein løses i syre', 'Vann fryser i sprekker'],
      explanation: 'Ved hydrolyse reagerer silikatmineraler som feltspat med vann og hydroniumioner og brytes ned til leirmineraler.',
    },
    {
      question: 'Hvilken bergart er særlig utsatt for oppløsning og danner karstlandskap?',
      options: ['Kalkstein', 'Granitt', 'Basalt', 'Gneis'],
      explanation: 'Kalkstein løses lett opp i surt vann (karbonsyre), og dette danner karstlandskap med huler, grotter og synkehull.',
    },
    {
      question: 'Hva skjer ved oksidasjon av jernholdige mineraler?',
      options: ['De reagerer med oksygen og får rødbrune rustfarger', 'De fryser og sprenges', 'De løses helt opp i vann', 'De smelter'],
      explanation: 'Oksidasjon er en kjemisk reaksjon der jernholdige mineraler reagerer med oksygen og «ruster», noe som gir karakteristiske rødbrune farger.',
    },
    {
      question: 'Hvorfor går kjemisk forvitring raskere i varmt og fuktig klima?',
      options: ['Høy temperatur og mye vann øker reaksjonshastigheten', 'Kulde fremmer kjemiske reaksjoner', 'Tørke gir raskest forvitring', 'Reaksjonene er uavhengige av klima'],
      explanation: 'Kjemiske reaksjoner går raskere ved høy temperatur og rikelig tilgang på vann, derfor er kjemisk forvitring mest intens i tropiske, fuktige strøk.',
    },
  ],
  'geofag-1-5-3': [
    {
      question: 'Hva er biologisk forvitring?',
      options: ['Nedbrytning av bergarter forårsaket av levende organismer', 'Nedbrytning bare ved frost', 'Transport av sedimenter med vind', 'Smelting av bergarter'],
      explanation: 'Biologisk forvitring er nedbrytning forårsaket av organismer, og omfatter både mekaniske (rotsprengning) og kjemiske (syrer) prosesser.',
    },
    {
      question: 'Hva er rotsprengning?',
      options: ['Planterøtter vokser inn i sprekker og utvider dem', 'Røtter løser mineraler i syre', 'Dyr graver i bakken', 'Lav løser opp bergoverflaten'],
      explanation: 'Rotsprengning er en mekanisk biologisk forvitring der røtter vokser inn i sprekker og over tid utvider og sprenger bergarten.',
    },
    {
      question: 'Hvordan bidrar lav til biologisk forvitring?',
      options: ['Lavsyrer løser mineraler i bergoverflaten', 'Lav fryser vann i sprekker', 'Lav smelter bergarten', 'Lav transporterer sedimenter'],
      explanation: 'Lav skiller ut organiske syrer (lavsyrer) som løser opp mineraler i bergoverflaten og dermed forvitrer bergarten kjemisk.',
    },
    {
      question: 'Hvorfor er biologisk forvitring viktig for jordsmonndannelse?',
      options: ['Den bryter ned berg og blander inn organisk materiale', 'Den fjerner all jord', 'Den hindrer planter i å vokse', 'Den smelter bergarten'],
      explanation: 'Biologisk forvitring bryter ned berggrunnen og tilfører organisk materiale, noe som er avgjørende for dannelsen av fruktbart jordsmonn.',
    },
    {
      question: 'Hvordan henger biologisk, fysisk og kjemisk forvitring sammen?',
      options: ['De forsterker hverandre, f.eks. sprekker fra røtter slipper inn vann og syrer', 'De motvirker hverandre helt', 'De skjer aldri samtidig', 'Bare én type kan virke om gangen'],
      explanation: 'Prosessene samvirker: rotsprengning lager sprekker som gir vann og syrer tilgang, slik at kjemisk forvitring kan virke dypere og raskere.',
    },
  ],
  'geofag-1-5-4': [
    {
      question: 'Hva er forskjellen på forvitring og erosjon?',
      options: ['Forvitring bryter ned materiale på stedet; erosjon fjerner og transporterer det', 'Erosjon skjer på stedet, forvitring transporterer', 'De betyr det samme', 'Forvitring gjelder bare vann'],
      explanation: 'Forvitring bryter ned bergarter der de ligger, mens erosjon er fjerning og transport av det forvitrede materialet bort fra opphavsstedet.',
    },
    {
      question: 'Hva er abrasjon?',
      options: ['Mekanisk slitasje når transporterte partikler sliper mot underlaget', 'Kjemisk oppløsning av mineraler', 'Frysing av vann i sprekker', 'Avsetning av sedimenter'],
      explanation: 'Abrasjon er mekanisk sliping der partikler som fraktes av vann, is eller vind sliper mot berggrunnen og andre partikler.',
    },
    {
      question: 'Hva er saltasjon?',
      options: ['Partikler hopper langs overflaten under transport', 'Partikler løses opp i vann', 'Stein faller rett ned fra en fjellvegg', 'Sedimenter presses sammen til bergart'],
      explanation: 'Saltasjon er en transportmekanisme der partikler, særlig sand, hopper langs overflaten når de løftes og faller ned igjen og sparker opp nye korn.',
    },
    {
      question: 'Hvilke faktorer styrer om en partikkel transporteres eller avsettes?',
      options: ['Strømhastighet og partikkelstørrelse', 'Bare partikkelens farge', 'Lufttrykket alene', 'Bergartens alder'],
      explanation: 'Når strømmen er sterk nok, holdes partikler i bevegelse; når hastigheten avtar under en terskel, avsettes partiklene – grovest materiale først.',
    },
    {
      question: 'Hva er massebevegelse?',
      options: ['Forflytning av jord og bergmasser nedover en skråning under tyngdekraften', 'Transport av sand med vind', 'Avsetning av sedimenter i havet', 'Frysing av vann i fjell'],
      explanation: 'Massebevegelse er bevegelse av løsmasser og berg nedover en skråning på grunn av gravitasjon, og omfatter steinsprang, skred og utglidninger.',
    },
  ],
  'geofag-1-6-1': [
    {
      question: 'Hva er plukking (quarrying) som glasial erosjonsprosess?',
      options: ['Smeltevann fryser i sprekker, og isen river løs bergblokker når den beveger seg', 'Isen sliper berget glatt', 'Elver graver ut daler', 'Vind transporterer sand'],
      explanation: 'Ved plukking trenger smeltevann inn i sprekker, fryser, og når breen beveger seg, rives bergblokker løs og fraktes med isen.',
    },
    {
      question: 'Hva er en botn (cirkus)?',
      options: ['En amfiteaterformet nisje i fjellsiden dannet ved glasial erosjon', 'En lang, smal havbukt', 'En rygg av morenemateriale', 'En V-formet dal'],
      explanation: 'En botn er en skålformet fordypning med bratt bakvegg, dannet der en isbre eroderte ut en nisje i fjellsiden, ofte med et botntjern.',
    },
    {
      question: 'Hvordan dannes en fjord?',
      options: ['En isbre eroderer en dal under havnivå, som senere fylles med sjøvann', 'En elv graver ut en V-dal', 'Bølger eroderer kysten', 'Vind former en dyp grøft'],
      explanation: 'En fjord dannes når en isbre eroderer en dyp dal helt under havnivå; etter at isen smeltet, fylles dalen med sjøvann.',
    },
    {
      question: 'Hva er typisk for en U-dal?',
      options: ['Bratte sider og flat bunn, formet av en isbre', 'V-formet tverrsnitt formet av en elv', 'Avrundede åser uten dal', 'En smal sprekk i fjellet'],
      explanation: 'En isbre eroderer en dal til et bredt U-formet tverrsnitt med bratte sider og flat bunn, i motsetning til elvens V-dal.',
    },
    {
      question: 'Hvorfor er det norske landskapet sterkt preget av glasial erosjon?',
      options: ['Gjentatte istider har formet fjorder, U-daler og botner', 'Norge har aldri hatt is', 'Bare elver har formet landskapet', 'Vind har dominert formingen'],
      explanation: 'Gjentatte istider med store innlandsiser eroderte Norges landskap kraftig og skapte de karakteristiske fjordene, U-dalene og botnene.',
    },
  ],
  'geofag-1-6-2': [
    {
      question: 'Hva er morene?',
      options: ['Usortert materiale transportert og avsatt av en isbre', 'Sortert sand avsatt av smeltevann', 'En type fast fjell', 'Sedimenter avsatt i havet'],
      explanation: 'Morene er usortert materiale (til) avsatt av en isbre, med alle kornstørrelser fra fineste leire til store blokker blandet sammen.',
    },
    {
      question: 'Hva er en endemorene?',
      options: ['En rygg av morenemateriale avsatt ved brefronten', 'En glatt fjellflate', 'En lang grusrygg fra smeltevann', 'En dyp innsjø'],
      explanation: 'En endemorene markerer hvor brefronten lå over tid, og består av morenemateriale skjøvet sammen ved isens ytterkant.',
    },
    {
      question: 'Hva er en esker?',
      options: ['En rygg av sortert sand og grus avsatt av smeltevann i en tunnel under isen', 'En usortert morenerygg', 'En glatt skuringsstripe', 'En botn med tjern'],
      explanation: 'En esker er en lang, smal rygg av sortert sand og grus avsatt av smeltevann i en istunnel; den blir stående igjen som en rygg når isen smelter.',
    },
    {
      question: 'Hva er forskjellen på morene og esker når det gjelder sortering?',
      options: ['Morene er usortert, esker er sortert av smeltevann', 'Begge er godt sortert', 'Morene er sortert, esker er usortert', 'Ingen av dem er sortert'],
      explanation: 'Morene avsettes direkte av isen og er usortert, mens esker avsettes av rennende smeltevann og er derfor sortert etter kornstørrelse.',
    },
    {
      question: 'Hva er en drumlin?',
      options: ['En strømlinjeformet haug av morenemateriale formet under en bevegelig isbre', 'En dyp fjord', 'En vulkansk kjegle', 'En sanddyne'],
      explanation: 'En drumlin er en strømlinjeformet morenehaug med bratt støtside mot der isen kom fra og slak leside, formet under den bevegelige breen.',
    },
  ],
  'geofag-1-6-3': [
    {
      question: 'Hva betyr begrepet fluvial?',
      options: ['Som har med elver og rennende vann å gjøre', 'Som har med isbreer å gjøre', 'Som har med vind å gjøre', 'Som har med bølger å gjøre'],
      explanation: 'Fluvial betyr «som har med elver å gjøre»; fluviale prosesser og landformer er knyttet til rennende vann.',
    },
    {
      question: 'Hvordan dannes en V-dal?',
      options: ['Elven graver seg nedover (dybdeerosjon) mens dalsidene forvitrer', 'En isbre eroderer en bred dal', 'Bølger former en bukt', 'Vind blåser ut en grøft'],
      explanation: 'En V-dal får sin form fordi elven graver seg nedover ved dybdeerosjon, mens dalsidene forvitrer og raser ned i en V-form.',
    },
    {
      question: 'Hva er en meander?',
      options: ['En sving eller bue i et elveløp med lav gradient', 'En foss i en bratt elv', 'En innsjø dannet av is', 'En grusrygg fra smeltevann'],
      explanation: 'En meander er en sving i elveløpet som dannes når elven har lav gradient og eroderer i yttersvingen mens den avsetter i innersvingen.',
    },
    {
      question: 'Hvor avsetter en elv mest materiale, og hva dannes der?',
      options: ['Ved utløpet der farten avtar – et elvedelta', 'I de bratteste fossene', 'Høyt oppe i fjellet', 'I yttersvingen av en meander'],
      explanation: 'Når elven når et hav eller en innsjø, bremser den, mister transportkraft og avsetter sedimenter som bygger opp et elvedelta.',
    },
    {
      question: 'Hvorfor eroderer elven mest i yttersvingen av en meander?',
      options: ['Vannet strømmer raskest der og graver i bredden', 'Vannet står stille der', 'Det avsettes mest der', 'Elven renner oppover der'],
      explanation: 'I yttersvingen er strømmen raskest og eroderer bredden, mens vannet i innersvingen er tregere og avsetter sand og grus.',
    },
  ],
  'geofag-1-6-4': [
    {
      question: 'Hva er bølgeerosjon?',
      options: ['Nedbrytning av kysten forårsaket av bølger', 'Erosjon utført av isbreer', 'Vinderosjon i ørkenen', 'Elveerosjon i fjellet'],
      explanation: 'Bølgeerosjon bryter ned kysten gjennom hydraulisk kraft og korrasjon (sliping med sand og stein som bølgene fører med seg).',
    },
    {
      question: 'Hvilken transportmekanisme dominerer dannelsen av sanddyner?',
      options: ['Vindtransport av sand (eolisk prosess)', 'Glasial transport av blokker', 'Elvetransport av leire', 'Bølgetransport av stein'],
      explanation: 'Sanddyner dannes ved eoliske (vinddrevne) prosesser der vinden frakter og avsetter sand, ofte gjennom saltasjon.',
    },
    {
      question: 'Hva er en strandflate?',
      options: ['En flat berggrunnsoverflate dannet ved langvarig bølgeerosjon langs kysten', 'En bratt fjellvegg', 'En sanddyne i innlandet', 'En morenerygg'],
      explanation: 'Strandflaten er en flat berggrunnsoverflate langs kysten dannet ved langvarig bølgeerosjon, tydelig langs deler av norskekysten.',
    },
    {
      question: 'Hva er en eolisk landform?',
      options: ['En landform skapt av vind, som sanddyner', 'En landform skapt av is', 'En landform skapt av elver', 'En landform skapt av vulkaner'],
      explanation: 'Eoliske landformer er formet av vind. Typiske eksempler er sanddyner og vinderoderte overflater i tørre områder.',
    },
    {
      question: 'Hvorfor er kysten et område med både erosjon og avsetning?',
      options: ['Bølger og strøm river løs materiale ett sted og avsetter det et annet', 'Det skjer bare erosjon ved kysten', 'Det skjer bare avsetning ved kysten', 'Kysten endres aldri'],
      explanation: 'Bølger og kyststrømmer eroderer utsatte partier og transporterer materialet til mer beskyttede områder der det avsettes som strender og banker.',
    },
  ],
  'geofag-1-6-5': [
    {
      question: 'Hva er kvartærtiden?',
      options: ['Den geologiske perioden fra 2,6 millioner år siden til i dag, med istidene', 'Tiden da dinosaurene levde', 'Perioden da jorden ble dannet', 'En periode uten is'],
      explanation: 'Kvartærtiden strekker seg fra 2,6 millioner år siden til i dag og deles i pleistocen (istidene) og holocen (dagens mellomistid).',
    },
    {
      question: 'Hva er isostatisk landhevning?',
      options: ['Jordskorpen stiger fordi den tunge innlandsisen smeltet', 'Havet stiger over land', 'Fjell presses ned av is', 'Land synker under vekten av sedimenter'],
      explanation: 'Da den tunge innlandsisen smeltet, begynte jordskorpen å stige igjen (isostatisk landhevning) fordi vekten ble fjernet.',
    },
    {
      question: 'Hvorfor er Norges landskap så preget av istidene?',
      options: ['Innlandsisen eroderte fjorder og daler og avsatte løsmasser', 'Norge har bare hatt elver', 'Vind har formet alt landskapet', 'Landskapet er uendret siden jorden ble dannet'],
      explanation: 'Gjentatte istider med store innlandsiser eroderte landskapet kraftig og etterlot fjorder, U-daler, botner og morenelandskap.',
    },
    {
      question: 'Hva skjer når landhevning og havnivåendringer virker samtidig?',
      options: ['Den relative kystlinjen endres avhengig av hva som dominerer', 'Ingenting skjer med kystlinjen', 'Havet forsvinner helt', 'Landet synker alltid'],
      explanation: 'Den relative kystlinjen avhenger av balansen mellom landhevning (land opp) og havnivåstigning (vann opp); i Norge har landhevningen ofte dominert.',
    },
    {
      question: 'Hvilke spor etter høyere havnivå finner vi mange steder langs norskekysten?',
      options: ['Gamle strandlinjer og marine avsetninger over dagens havnivå', 'Vulkanske kratere', 'Sanddyner i fjellet', 'Korallrev på toppene'],
      explanation: 'Gamle strandlinjer og marine leiravsetninger som nå ligger over havnivå, vitner om at havet sto høyere før landet hevet seg etter istiden.',
    },
  ],
  'geofag-1-7-1': [
    {
      question: 'Hva er en klimafaktor?',
      options: ['En geografisk eller fysisk egenskap som påvirker klimaet på et sted', 'En enkelt værhendelse', 'En type sky', 'Et måleinstrument'],
      explanation: 'Klimafaktorer er forhold som breddegrad, høyde over havet, avstand til hav og havstrømmer som bestemmer klimaet på et sted.',
    },
    {
      question: 'Hvordan påvirker breddegrad temperaturen?',
      options: ['Lav solvinkel mot polene sprer energien over et større areal og gir lavere temperatur', 'Høye breddegrader får mest konsentrert solenergi', 'Breddegrad har ingen betydning', 'Polene mottar mest direkte sollys'],
      explanation: 'Nær ekvator treffer sollyset nesten loddrett (høy solvinkel) og er konsentrert, mens mot polene treffer det skrått og sprer energien over et større areal.',
    },
    {
      question: 'Hva er kontinentalitet?',
      options: ['Graden av innlandsklima med store temperaturforskjeller mellom sommer og vinter', 'Nærhet til havet som gir stabilt klima', 'Mengden nedbør i et område', 'Høyde over havet'],
      explanation: 'Høy kontinentalitet (langt fra hav) gir store temperaturforskjeller mellom sommer og vinter og lav luftfuktighet, mens kystklima er mer stabilt.',
    },
    {
      question: 'Hva er en regnskygge?',
      options: ['Et tørt område på lesiden av en fjellkjede', 'Et område med ekstra mye regn', 'En sky som gir skygge', 'Et område nær ekvator'],
      explanation: 'På losiden av en fjellkjede avgir luft nedbør når den stiger og kjøles; på lesiden synker den tørre lufta ned og gir lite nedbør – en regnskygge.',
    },
    {
      question: 'Hvordan kan en varm havstrøm påvirke klimaet langs en kyst?',
      options: ['Den gir mildere klima enn breddegraden skulle tilsi', 'Den gjør kysten mye kaldere', 'Den har ingen effekt på klimaet', 'Den stopper all nedbør'],
      explanation: 'Varme havstrømmer som Den nordatlantiske strøm fører varmt vann nordover og gir Norge et mildere klima enn breddegraden alene skulle tilsi.',
    },
  ],
  'geofag-1-7-2': [
    {
      question: 'Hva er solkonstanten?',
      options: ['Mengden solenergi som treffer 1 m² vinkelrett på solstrålene utenfor atmosfæren, ca. 1361 W/m²', 'Jordens gjennomsnittstemperatur', 'Mengden CO₂ i atmosfæren', 'Andelen sollys som reflekteres'],
      explanation: 'Solkonstanten er energimengden (ca. 1361 W/m²) som treffer en flate vinkelrett på solstrålene like utenfor jordens atmosfære.',
    },
    {
      question: 'Hva er albedo?',
      options: ['Andelen innkommende solstråling som reflekteres tilbake til verdensrommet', 'Mengden varme jorden sender ut', 'Mengden nedbør i et område', 'Lufttrykket ved havnivå'],
      explanation: 'Albedo er refleksjonsevnen til en overflate. Snø og is har høy albedo (reflekterer mye), mens mørke hav og skog har lav albedo.',
    },
    {
      question: 'Hvilken overflate har høyest albedo?',
      options: ['Snø og is', 'Mørkt hav', 'Tett skog', 'Asfalt'],
      explanation: 'Snø og is reflekterer det meste av sollyset (høy albedo), mens mørke flater som hav og skog absorberer mer og har lav albedo.',
    },
    {
      question: 'Hva innebærer jordens energibalanse?',
      options: ['At innkommende solstråling over tid balanseres av utgående varmestråling', 'At jorden bare mottar energi', 'At jorden bare sender ut energi', 'At energien forsvinner helt'],
      explanation: 'Over tid er jorden i balanse: like mye energi som tas opp fra sola, sendes ut igjen som varmestråling, ellers ville temperaturen endre seg.',
    },
    {
      question: 'Hvordan kan smelting av is forsterke oppvarming gjennom albedo?',
      options: ['Mindre is gir lavere albedo, så mer sollys absorberes og det blir varmere', 'Mindre is gir høyere albedo og kjøling', 'Is har ingen betydning for albedo', 'Smelting reflekterer mer sollys'],
      explanation: 'Når lys is med høy albedo smelter, blottlegges mørkere hav eller land med lav albedo, som absorberer mer sollys – en positiv tilbakekobling.',
    },
  ],
  'geofag-1-7-3': [
    {
      question: 'Hva er Köppen-systemet?',
      options: ['Et system for å klassifisere klimatyper basert på temperatur og nedbør', 'En skala for jordskjelv', 'En metode for å datere bergarter', 'Et system for å måle vind'],
      explanation: 'Köppen-systemet kategoriserer klimatyper ut fra månedlige gjennomsnittstemperaturer og nedbør, og knytter dem til vegetasjonssoner.',
    },
    {
      question: 'Hva kjennetegner tundra?',
      options: ['Et treløst landskap med moser, lav og lave busker, ofte med permafrost', 'Tett tropisk regnskog', 'Varm ørken uten vegetasjon', 'Frodig løvskog'],
      explanation: 'Tundra er et treløst landskap i arktiske strøk eller over tregrensen, med nøysom vegetasjon og ofte permafrost i jorden.',
    },
    {
      question: 'Hvilken sammenheng er det mellom klimasoner og vegetasjon?',
      options: ['Temperatur og nedbør i en klimasone bestemmer hvilken vegetasjon som kan vokse', 'Vegetasjonen er uavhengig av klimaet', 'Alle klimasoner har samme vegetasjon', 'Bare jordtype bestemmer vegetasjon'],
      explanation: 'Klimasonenes temperatur og nedbør avgjør hvilke planter som trives, derfor følger naturlige vegetasjonsbelter klimasonene tett.',
    },
    {
      question: 'Hvorfor finner vi tropisk regnskog nær ekvator?',
      options: ['Høy temperatur og mye nedbør hele året gir frodig vegetasjon', 'Det er kaldt og tørt der', 'Det er lite sollys ved ekvator', 'Jorden er spesielt næringsfattig der'],
      explanation: 'Nær ekvator er det varmt og fuktig hele året med rikelig nedbør og høy solinnstråling, noe som gir grunnlag for tett tropisk regnskog.',
    },
    {
      question: 'Hvordan endrer klimasonene seg når man beveger seg fra ekvator mot polene?',
      options: ['Fra varme tropiske soner via tempererte soner til kalde polare soner', 'Fra kalde til stadig varmere soner', 'Klimaet er likt overalt', 'Bare nedbøren endres, ikke temperaturen'],
      explanation: 'Med økende breddegrad avtar solinnstrålingen, og klimaet går fra varme tropiske soner via tempererte soner til kalde, polare soner.',
    },
  ],
  'geofag-1-7-4': [
    {
      question: 'Hva er Milankovitch-syklusene?',
      options: ['Periodiske variasjoner i jordens bane og aksehelling som påvirker solinnstrålingen', 'Variasjoner i solens egen energi over dager', 'Endringer i havstrømmer hver måned', 'Vulkanske utbrudd med jevne mellomrom'],
      explanation: 'Milankovitch-syklusene er langsiktige variasjoner i jordens banegeometri og aksehelling som endrer fordelingen av solinnstråling og bidrar til istider.',
    },
    {
      question: 'Hvilken rolle spiller Milankovitch-syklusene for istidene?',
      options: ['De endrer solinnstrålingen og kan utløse istider over titusener av år', 'De gir daglige værendringer', 'De forårsaker jordskjelv', 'De har ingen effekt på klimaet'],
      explanation: 'Endringer i jordens bane og helling påvirker hvor mye solenergi ulike områder mottar, og dette har bidratt til veksling mellom istider og mellomistider.',
    },
    {
      question: 'Hvilken naturlig faktor kan gi midlertidig avkjøling av klimaet?',
      options: ['Store vulkanutbrudd som sender aske og partikler høyt opp i atmosfæren', 'Økt solinnstråling', 'Mindre skydekke', 'Lavere albedo'],
      explanation: 'Store vulkanutbrudd kan slynge partikler høyt opp i atmosfæren, reflektere sollys og gi en midlertidig global avkjøling.',
    },
    {
      question: 'Hva forteller iskjerner oss om tidligere klima?',
      options: ['De inneholder luftbobler og lag som avslører fortidens temperatur og CO₂-nivå', 'De viser fremtidens vær', 'De måler dagens lufttrykk', 'De forteller om jordens indre'],
      explanation: 'Iskjerner inneholder årlige lag og innesluttede luftbobler som lar forskere rekonstruere fortidens temperatur og atmosfærens sammensetning.',
    },
    {
      question: 'Hvorfor er det viktig å kjenne til naturlige klimavariasjoner?',
      options: ['For å kunne skille naturlig variasjon fra menneskeskapt klimaendring', 'For å bevise at klimaet aldri endrer seg', 'For å forutsi været i morgen', 'For å måle jordskjelv'],
      explanation: 'Kunnskap om naturlige variasjoner gjør det mulig å vurdere dagens raske oppvarming opp mot bakgrunnen og se den menneskeskapte påvirkningen tydeligere.',
    },
  ],
  'geofag-1-7-5': [
    {
      question: 'Hvorfor har Norge et mildere klima enn breddegraden skulle tilsi?',
      options: ['Den nordatlantiske strøm fører varmt vann nordover langs kysten', 'Norge ligger nær ekvator', 'Det er lite hav rundt Norge', 'Norge har mange vulkaner'],
      explanation: 'Den nordatlantiske strøm (forlengelsen av Golfstrømmen) frakter varmt vann nordover og gir Norge et uvanlig mildt klima for sin breddegrad.',
    },
    {
      question: 'Hva kjennetegner klimaet på Vestlandet sammenlignet med Østlandet?',
      options: ['Vestlandet er mildere og våtere; Østlandet har mer kontinentalt klima', 'Vestlandet er tørrere og kaldere', 'De har nøyaktig samme klima', 'Østlandet er våtest'],
      explanation: 'Vestlandet får mye nedbør og milde vintre på grunn av havet og fjellene, mens Østlandet har mer kontinentalt klima med kaldere vintre og mindre nedbør.',
    },
    {
      question: 'Hvorfor er det mye nedbør på Vestlandet?',
      options: ['Fuktig havluft tvinges opp over fjellene og avgir nedbør', 'Det er ørkenklima der', 'Luften er svært tørr', 'Fjellene hindrer all nedbør'],
      explanation: 'Fuktig luft fra Atlanterhavet presses opp over de bratte vestlandsfjellene, kjøles ned og slipper store mengder nedbør på losiden.',
    },
    {
      question: 'Hvilke klimaendringer forventes i Norge fremover?',
      options: ['Høyere temperatur, mer nedbør og flere intense værhendelser', 'Lavere temperatur og mindre nedbør', 'Ingen endringer i klimaet', 'At Norge blir til ørken'],
      explanation: 'Klimaframskrivninger for Norge peker mot høyere temperaturer, økt nedbør og flere kraftige nedbørhendelser, med risiko for flom og skred.',
    },
    {
      question: 'Hvordan påvirker fjellene de regionale klimaforskjellene i Norge?',
      options: ['De skaper regnskygge slik at innlandet blir tørrere enn kysten', 'De gjør hele landet like vått', 'De har ingen betydning', 'De gir mest nedbør i innlandet'],
      explanation: 'Fjellkjedene gir mye nedbør på losiden (kysten) og regnskygge på lesiden (innlandet), som derfor blir tørrere og mer kontinentalt.',
    },
  ],
  'geofag-1-8-1': [
    {
      question: 'Hvilket lag av atmosfæren ligger nederst, og hvor skjer all værdannelse?',
      options: ['Troposfæren', 'Stratosfæren', 'Mesosfæren', 'Termosfæren'],
      explanation: 'Troposfæren er det nederste, tetteste laget (opp til ca. 12 km), der temperaturen synker oppover og all værdannelse skjer.',
    },
    {
      question: 'Hva holder atmosfæren på plass rundt jorden?',
      options: ['Tyngdekraften', 'Magnetfeltet alene', 'Vindene', 'Havstrømmene'],
      explanation: 'Atmosfæren er gasslaget som holdes på plass av jordens tyngdekraft og strekker seg langt ut, men mesteparten av massen ligger nær bakken.',
    },
    {
      question: 'Hvilken gass utgjør størstedelen av atmosfæren?',
      options: ['Nitrogen', 'Oksygen', 'Karbondioksid', 'Argon'],
      explanation: 'Nitrogen utgjør ca. 78 % av atmosfæren, oksygen ca. 21 %, og resten er argon, CO₂ og andre gasser.',
    },
    {
      question: 'Hvorfor er ozonlaget i stratosfæren viktig?',
      options: ['Det absorberer skadelig UV-stråling fra solen', 'Det gir oss oksygen å puste', 'Det skaper all nedbør', 'Det varmer opp jordoverflaten'],
      explanation: 'Ozonlaget i stratosfæren absorberer mye av solens skadelige UV-stråling og beskytter dermed livet på jorden.',
    },
    {
      question: 'Hvorfor synker temperaturen oppover i troposfæren?',
      options: ['Lufta varmes nedenfra av jordoverflaten, og blir tynnere og kaldere høyere opp', 'Sola varmer toppen av atmosfæren mest', 'Det er mer CO₂ høyt oppe', 'Vinden kjøler bare toppen'],
      explanation: 'Jordoverflaten varmes av sola og varmer lufta nedenfra; lengre opp blir lufta tynnere og mottar mindre varme, så temperaturen synker med høyden.',
    },
  ],
  'geofag-1-8-2': [
    {
      question: 'Hva er lufttrykk?',
      options: ['Kraften luften utøver per flateenhet, målt i hektopascal', 'Mengden vanndamp i luften', 'Temperaturen i atmosfæren', 'Vindens hastighet'],
      explanation: 'Lufttrykk er kraften luftsøylen utøver per flateenhet, målt i hektopascal (hPa). Normalt trykk ved havnivå er ca. 1013 hPa.',
    },
    {
      question: 'Hva er en isobar?',
      options: ['En linje på et værkart som forbinder punkter med samme lufttrykk', 'En linje med samme temperatur', 'En grense mellom to luftmasser', 'En måling av nedbør'],
      explanation: 'En isobar forbinder punkter med samme lufttrykk. Tett samling av isobarer betyr stor trykkgradient og dermed sterk vind.',
    },
    {
      question: 'Hva er Corioliseffekten?',
      options: ['Avbøyning av bevegelige luftmasser på grunn av jordens rotasjon', 'Oppvarming av luft ved bakken', 'Kondensasjon av vanndamp', 'Refleksjon av sollys'],
      explanation: 'Corioliseffekten er den tilsynelatende avbøyningen av frie bevegelser på grunn av jordens rotasjon – mot høyre på den nordlige halvkule.',
    },
    {
      question: 'I hvilken retning blåser vinden i forhold til trykkforskjeller?',
      options: ['Fra høyt mot lavt trykk', 'Fra lavt mot høyt trykk', 'Alltid fra nord mot sør', 'Tilfeldig uten sammenheng med trykk'],
      explanation: 'Vind oppstår fordi luft strømmer fra områder med høyt trykk mot områder med lavt trykk, men avbøyes av Corioliseffekten.',
    },
    {
      question: 'Hva forteller tette isobarer på et værkart oss?',
      options: ['Stor trykkgradient og dermed sterk vind', 'Svak vind og rolig vær', 'Høy temperatur', 'Mye nedbør uansett'],
      explanation: 'Tette isobarer betyr at trykket endrer seg raskt over kort avstand (stor trykkgradient), noe som gir kraftig vind.',
    },
  ],
  'geofag-1-8-3': [
    {
      question: 'Hva er kondensasjon?',
      options: ['Overgangen fra vanndamp til flytende vanndråper', 'Overgangen fra vann til damp', 'Frysing av vann til is', 'Fordampning fra havet'],
      explanation: 'Kondensasjon er overgangen fra gassform (vanndamp) til væskeform (vanndråper) når lufta avkjøles til duggpunktet.',
    },
    {
      question: 'Hva er duggpunktet?',
      options: ['Temperaturen der lufta blir mettet med vanndamp (100 % relativ fuktighet)', 'Temperaturen der vann fryser', 'Det høyeste lufttrykket', 'Temperaturen der vann koker'],
      explanation: 'Duggpunktet er temperaturen der lufta er mettet med vanndamp; avkjøles lufta videre, begynner vanndampen å kondensere.',
    },
    {
      question: 'Hvordan dannes skyer?',
      options: ['Fuktig luft stiger, avkjøles til duggpunktet og vanndamp kondenserer', 'Luft synker og varmes opp', 'Vann fordamper direkte til is', 'Sola lager skyer av støv'],
      explanation: 'Når fuktig luft stiger og avkjøles til duggpunktet, kondenserer vanndampen rundt små partikler og danner skydråper.',
    },
    {
      question: 'Hva er nedbør?',
      options: ['Vann som faller fra atmosfæren som regn, snø, hagl eller sludd', 'Vanndamp i lufta', 'Fordampning fra bakken', 'Vind som blåser over havet'],
      explanation: 'Nedbør oppstår når skydråper eller iskrystaller vokser seg store nok til å falle til bakken som regn, snø, hagl eller sludd.',
    },
    {
      question: 'Hva må til for at skydråper skal vokse seg store nok til å falle som nedbør?',
      options: ['De må slå seg sammen eller vokse på iskrystaller til de blir tunge nok', 'De må fordampe helt', 'Temperaturen må stige kraftig', 'Lufttrykket må falle til null'],
      explanation: 'Skydråper må vokse ved sammenslåing eller ved at iskrystaller trekker til seg vanndamp, til de blir så tunge at de faller som nedbør.',
    },
  ],
  'geofag-1-8-4': [
    {
      question: 'Hva er en front i meteorologien?',
      options: ['Grenseflaten mellom to luftmasser med ulik temperatur og fuktighet', 'En type sky', 'Et område med høyt trykk', 'En havstrøm'],
      explanation: 'En front er grensen mellom to luftmasser med ulik temperatur og fuktighet; her tvinges varm luft opp over kald luft og det dannes nedbør.',
    },
    {
      question: 'Hva skjer ved en okklusjon?',
      options: ['En kaldfront tar igjen en varmfront og løfter den varme lufta opp fra bakken', 'To høytrykk smelter sammen', 'Lufta synker og blir tørr', 'Havet fryser til is'],
      explanation: 'En okklusjon dannes når den raskere kaldfronten tar igjen varmfronten i et lavtrykk, slik at den varme lufta presses helt opp fra bakken.',
    },
    {
      question: 'Hvilket vær følger ofte med en kaldfront?',
      options: ['Kraftige byger og raskt skiftende vær', 'Langvarig, jevnt lett regn', 'Klar himmel uten endring', 'Tørt og stabilt vær i flere dager'],
      explanation: 'Ved en kaldfront skyves den varme lufta bratt oppover, noe som gir kraftige byger, tordenvær og raskt skiftende vær.',
    },
    {
      question: 'Hvor dannes lavtrykkene som gir mye av været vårt?',
      options: ['Langs polarfronten der varm og kald luft møtes', 'Midt i store høytrykk', 'Over ekvator', 'I stratosfæren'],
      explanation: 'Lavtrykkene utvikler seg langs polarfronten der varm og kald luft møtes, og de følger et livsløp fra dannelse til okklusjon.',
    },
    {
      question: 'Hvorfor gir en varmfront ofte langvarig, jevn nedbør?',
      options: ['Varm luft glir langsomt opp over kald luft langs en slak frontflate', 'Varm luft synker raskt ned', 'Det dannes ingen skyer', 'Lufta blir helt tørr'],
      explanation: 'Ved en varmfront glir den varme lufta sakte opp over den kalde langs en slak flate, og dette gir et bredt belte med jevn, langvarig nedbør.',
    },
  ],
  'geofag-1-8-5': [
    {
      question: 'Hva viser et synoptisk værkart?',
      options: ['Værsituasjonen over et stort område på et bestemt tidspunkt', 'Klimaet over hundre år', 'Bare temperaturen ett sted', 'Jordens indre struktur'],
      explanation: 'Et synoptisk værkart viser værsituasjonen samtidig over et stort område, med isobarer, fronter, trykksystemer og nedbør.',
    },
    {
      question: 'Hva er en ensemblemodell i værvarsling?',
      options: ['Mange parallelle varsler med litt ulike startbetingelser som viser usikkerhet', 'Ett enkelt varsel uten usikkerhet', 'En modell bare for klima', 'En type satellitt'],
      explanation: 'En ensemblemodell kjører mange varsler med små forskjeller i utgangspunktet; spredningen mellom dem viser hvor usikkert varselet er.',
    },
    {
      question: 'Hvordan lages moderne værvarsler?',
      options: ['Ved å kombinere observasjoner med matematiske modeller kjørt på datamaskiner', 'Bare ved å se på skyene', 'Ved å spørre folk hva de tror', 'Ved å studere stjernene'],
      explanation: 'Værvarsler bygger på store mengder observasjoner som mates inn i numeriske værmodeller som beregner atmosfærens utvikling.',
    },
    {
      question: 'Hvorfor blir værvarsler mer usikre jo lenger fram i tid de gjelder?',
      options: ['Små feil i startdataene vokser over tid i et kaotisk system', 'Modellene blir slått av', 'Atmosfæren slutter å bevege seg', 'Observasjonene forsvinner'],
      explanation: 'Atmosfæren er et kaotisk system der bittesmå unøyaktigheter i startdataene forsterkes over tid, så varslene blir gradvis mer usikre.',
    },
    {
      question: 'Hva betyr tette isobarer rundt et lavtrykk på et værkart?',
      options: ['Sterk vind', 'Vindstille', 'Høy temperatur', 'Ingen nedbør'],
      explanation: 'Tette isobarer betyr stor trykkgradient og dermed kraftig vind, noe som er typisk rundt dype lavtrykk.',
    },
  ],
  'geofag-1-9-1': [
    {
      question: 'Hva er vannkretsløpet?',
      options: ['Den kontinuerlige sirkulasjonen av vann på, over og under jordoverflaten', 'En enkeltveis strøm av vann til havet', 'Bare fordampning fra havet', 'En type bergart'],
      explanation: 'Vannkretsløpet (den hydrologiske syklus) er den stadige sirkulasjonen av vann mellom reservoarene som hav, atmosfære, land og isbreer.',
    },
    {
      question: 'Hva er evapotranspirasjon?',
      options: ['Summen av fordampning fra overflater og transpirasjon fra planter', 'Bare nedbør', 'Vann som fryser til is', 'Grunnvann som strømmer'],
      explanation: 'Evapotranspirasjon er den totale overføringen av vann til atmosfæren gjennom fordampning fra overflater og transpirasjon (vannavgivelse) fra planter.',
    },
    {
      question: 'Hva er et nedbørfelt?',
      options: ['Et landområde der all nedbør drenerer til samme utløp', 'Et område som aldri får nedbør', 'Selve elveløpet alene', 'Et område med grunnvann'],
      explanation: 'Et nedbørfelt (dreneringsområde) er landområdet der all nedbør samler seg og renner ut gjennom samme elv eller innsjø.',
    },
    {
      question: 'Hvilken energikilde driver vannkretsløpet?',
      options: ['Solenergi', 'Jordens indre varme', 'Månens gravitasjon', 'Vindenergi alene'],
      explanation: 'Solenergi driver vannkretsløpet ved å fordampe vann, mens tyngdekraften trekker nedbør og avrenning tilbake mot havet.',
    },
    {
      question: 'Hva skjer med vann som infiltrerer ned i bakken?',
      options: ['Det blir grunnvann eller tas opp av planter', 'Det fordamper umiddelbart', 'Det forsvinner helt', 'Det blir til bergart med en gang'],
      explanation: 'Vann som infiltrerer kan tas opp av planter, lagres som grunnvann eller sakte sive videre til elver og hav.',
    },
  ],
  'geofag-1-9-2': [
    {
      question: 'Hva er grunnvannsspeilet?',
      options: ['Den øvre grensen av den mettede sonen der alle porer er fylt med vann', 'Overflaten av en innsjø', 'Toppen av en isbre', 'Grensen mellom to bergarter'],
      explanation: 'Grunnvannsspeilet er den øvre grensen av den mettede sonen; over det er porene delvis fylt med luft (umettet sone).',
    },
    {
      question: 'Hva er porøsitet?',
      options: ['Forholdet mellom volumet av hulrom og totalvolumet i et materiale', 'Et mål på hvor raskt vann strømmer', 'Mengden vann i en elv', 'Bergartens hardhet'],
      explanation: 'Porøsitet er andelen hulrom (porer) i et materiale og forteller hvor mye vann det kan lagre.',
    },
    {
      question: 'Hva beskriver permeabilitet?',
      options: ['Hvor lett vann kan strømme gjennom et porøst materiale', 'Hvor mye vann materialet kan lagre', 'Bergartens farge', 'Vannets temperatur'],
      explanation: 'Permeabilitet (hydraulisk konduktivitet) er et mål på hvor lett vann strømmer gjennom materialet. Sand og grus har høy permeabilitet.',
    },
    {
      question: 'Hva er en akvifer?',
      options: ['Et vannførende geologisk lag som kan lagre og transportere grunnvann i nyttbare mengder', 'En type elv', 'Et tett leirlag uten vann', 'En innsjø på overflaten'],
      explanation: 'En akvifer er et geologisk lag med høy nok porøsitet og permeabilitet til å lagre og levere grunnvann, f.eks. sand- og grusavsetninger.',
    },
    {
      question: 'Hvorfor er sand og grus gode akviferer mens leire er en dårlig akvifer?',
      options: ['Sand og grus har høy permeabilitet; leire har lav permeabilitet', 'Leire har høyere permeabilitet enn grus', 'Sand kan ikke lagre vann', 'Leire transporterer vann raskest'],
      explanation: 'Sand og grus har store, sammenhengende porer som lar vann strømme lett (høy permeabilitet), mens leire har bittesmå porer som holder vannet fast.',
    },
  ],
  'geofag-1-9-3': [
    {
      question: 'Hva er vannføring (Q) i en elv?',
      options: ['Volumet vann som passerer et tverrsnitt per tidsenhet, målt i m³/s', 'Elvens lengde', 'Vannets temperatur', 'Bredden på elven'],
      explanation: 'Vannføring er volumet vann som passerer et tverrsnitt per sekund (m³/s), og beregnes som tverrsnittsareal × middelhastighet.',
    },
    {
      question: 'Hva er et nedbørfelt for en elv?',
      options: ['Området der all nedbør som ikke fordamper drenerer til elven', 'Bare selve elveløpet', 'Et område uten nedbør', 'Havet utenfor elvemunningen'],
      explanation: 'Nedbørfeltet er landområdet der all nedbør som ikke fordamper, samler seg og renner til samme elv eller innsjø.',
    },
    {
      question: 'Hvordan beregnes vannføring ut fra tverrsnitt og hastighet?',
      options: ['Vannføring = tverrsnittsareal × middelhastighet', 'Vannføring = areal delt på hastighet', 'Vannføring = hastighet minus areal', 'Vannføring = lengde × bredde'],
      explanation: 'Vannføringen Q er produktet av elvens tverrsnittsareal og vannets middelhastighet: Q = A × v.',
    },
    {
      question: 'Hva er en mulig konsekvens av vassdragsregulering for vannkraft?',
      options: ['Endret vannføring og påvirkning på livet i og langs elva', 'At elva forsvinner helt', 'At nedbøren øker', 'At elva renner oppover'],
      explanation: 'Regulering endrer den naturlige vannføringen og kan påvirke fisk, vegetasjon og økosystemer langs vassdraget, samtidig som den gir fornybar energi.',
    },
    {
      question: 'Hvorfor varierer vannføringen i en norsk elv gjennom året?',
      options: ['Snøsmelting om våren og nedbør gir høyere vannføring til ulike tider', 'Vannføringen er alltid konstant', 'Bare temperaturen påvirker den', 'Elver har ingen sesongvariasjon'],
      explanation: 'I Norge gir snøsmelting om våren og nedbørsperioder høy vannføring, mens frost om vinteren og tørre perioder gir lav vannføring.',
    },
  ],
  'geofag-1-9-4': [
    {
      question: 'Hva er eutrofiering?',
      options: ['Overgjødsling av vann med næringsstoffer som gir algevekst og oksygenmangel', 'Forsuring av vann ved sur nedbør', 'Oppvarming av havet', 'Fordampning av en innsjø'],
      explanation: 'Eutrofiering skjer når vann tilføres for mye næring (fosfor og nitrogen), noe som gir kraftig algevekst og senere oksygenmangel når algene brytes ned.',
    },
    {
      question: 'Hva regulerer drikkevannskvalitet i Norge?',
      options: ['Drikkevannsforskriften med grenseverdier for ulike parametere', 'Genteknologiloven', 'Plan- og bygningsloven', 'Veitrafikkloven'],
      explanation: 'Drikkevannsforskriften setter grenseverdier for mikrobiologiske, kjemiske og fysiske parametere, og vannverket er ansvarlig for at de overholdes.',
    },
    {
      question: 'Hvilken rolle spiller vannkraft i Norges energiforsyning?',
      options: ['Den er en stor, fornybar kilde til elektrisitet', 'Den er Norges minste energikilde', 'Den brukes ikke i Norge', 'Den er en fossil energikilde'],
      explanation: 'Vannkraft er ryggraden i norsk kraftproduksjon og er en fornybar energikilde som utnytter høydeforskjeller og vannføring i vassdragene.',
    },
    {
      question: 'Hva er en utfordring for bærekraftig vannforvaltning?',
      options: ['Å balansere bruk av vann mot vern av økosystemer og vannkvalitet', 'At det aldri er nok bruk av vann', 'At vann ikke kan forurenses', 'At vann er en ubegrenset ressurs uten konflikter'],
      explanation: 'Bærekraftig forvaltning må veie behov for drikkevann, kraft og næring mot å bevare vannkvalitet og økosystemer for framtidige generasjoner.',
    },
    {
      question: 'Hvordan kan jordbruk bidra til eutrofiering av vassdrag?',
      options: ['Avrenning av gjødsel tilfører fosfor og nitrogen til vannet', 'Jordbruk fjerner næring fra vannet', 'Jordbruk har ingen effekt på vann', 'Jordbruk tilfører bare rent vann'],
      explanation: 'Når gjødsel fra jorder renner ut i vassdrag, tilføres ekstra fosfor og nitrogen som driver algevekst og eutrofiering.',
    },
  ],
  'geofag-1-10-1': [
    {
      question: 'Hva er vitenskapelig metode?',
      options: ['En systematisk tilnærming med observasjon, hypotese, testing og revisjon', 'Å gjette uten å teste', 'Å akseptere alle påstander', 'Å samle data uten å analysere'],
      explanation: 'Vitenskapelig metode bygger kunnskap systematisk gjennom observasjoner, hypotesedannelse, testing og eventuell revisjon av forklaringene.',
    },
    {
      question: 'Hva kjennetegner en god hypotese i geofag?',
      options: ['Den er spesifikk, basert på observasjoner og kan i prinsippet motbevises', 'Den kan aldri testes', 'Den er bygd på tro', 'Den trenger ikke være presis'],
      explanation: 'En god hypotese er en foreløpig, testbar forklaring som er spesifikk, bygger på observasjoner og kan motbevises (falsifiseres).',
    },
    {
      question: 'Hva er forskjellen på en observasjon og en tolkning?',
      options: ['En observasjon er det man registrerer; en tolkning er hva man mener det betyr', 'De er det samme', 'En tolkning kommer alltid før observasjonen', 'En observasjon er alltid feil'],
      explanation: 'En observasjon er en direkte registrering (f.eks. en stripe i berget), mens tolkningen er forklaringen man knytter til den (f.eks. at den skyldes is).',
    },
    {
      question: 'Hvorfor er det viktig å vurdere kilder og usikkerhet i geofaglige undersøkelser?',
      options: ['For å vite hvor pålitelige dataene og konklusjonene er', 'For å gjøre rapporten lengre', 'For å skjule feilkilder', 'Det er aldri nødvendig'],
      explanation: 'Å vurdere kilder og usikkerhet gjør at man vet hvor pålitelige resultatene er, og skiller godt underbygde konklusjoner fra usikre antakelser.',
    },
    {
      question: 'Hva er en teori i vitenskapelig forstand?',
      options: ['En godt underbygd forklaring støttet av mange observasjoner og tester', 'En løs gjetning', 'En tilfeldig mening', 'Et udokumentert rykte'],
      explanation: 'En vitenskapelig teori er en grundig testet og bredt støttet forklaring på et fenomen, ikke bare en gjetning, som platetektonikk eller evolusjon.',
    },
  ],
  'geofag-1-10-2': [
    {
      question: 'Hva er en blotning i geofag?',
      options: ['Et sted der berggrunnen er synlig og tilgjengelig for observasjon', 'Et lag med løsmasser over berget', 'En type måleinstrument', 'En geologisk teori'],
      explanation: 'En blotning er et sted der berggrunnen er blottlagt, f.eks. klipper, elvebredder eller veiskjæringer, og kan studeres direkte.',
    },
    {
      question: 'Hva angir strøk og fall på en geologisk flate?',
      options: ['Strøk er den horisontale retningen; fall er hellingsvinkelen fra horisontalplanet', 'Strøk er hellingsvinkelen; fall er retningen', 'Begge angir bare farge', 'De angir bergartens alder'],
      explanation: 'Strøk er kompassretningen til en tenkt horisontal linje på flaten, mens fall er vinkelen flaten heller fra horisontalplanet.',
    },
    {
      question: 'Hvorfor er det viktig å dokumentere observasjoner systematisk i en feltbok?',
      options: ['Så andre kan forstå og etterprøve arbeidet senere', 'For å fylle opp boken', 'Det er ikke nødvendig', 'For å skjule funnene'],
      explanation: 'Systematisk dokumentasjon i feltbok sikrer at observasjonene er etterprøvbare og kan brukes pålitelig i senere analyse og rapportering.',
    },
    {
      question: 'Hvilket utstyr er typisk nyttig ved geofaglig feltarbeid?',
      options: ['Kompass, geologihammer, lupe og kart/GPS', 'Bare en kalkulator', 'Et mikroskop alene', 'Kun en mobiltelefon'],
      explanation: 'Vanlig feltutstyr omfatter kompass (for strøk og fall), geologihammer, lupe, kart og GPS for å observere, måle og stedfeste funn.',
    },
    {
      question: 'Hvorfor er sikkerhetsvurdering viktig ved feltarbeid?',
      options: ['Feltarbeid kan innebære farer som bratt terreng, vær og rasfare', 'Det er aldri noen risiko i felt', 'For å gjøre arbeidet tregere', 'Sikkerhet er irrelevant for geologer'],
      explanation: 'Feltarbeid foregår ofte i krevende terreng med skiftende vær og potensiell rasfare, så risikovurdering og planlegging er nødvendig for tryggheten.',
    },
  ],
  'geofag-1-10-3': [
    {
      question: 'Hva viser et topografisk kart?',
      options: ['Terrengets form gjennom høydekurver samt natur- og menneskeskapte elementer', 'Bare bergartstyper', 'Bare værsituasjonen', 'Jordens indre struktur'],
      explanation: 'Et topografisk kart viser terrengets form med høydekurver i tillegg til elver, sjøer, veier og bygninger.',
    },
    {
      question: 'Hva er ekvidistanse på et kart?',
      options: ['Den faste høydeforskjellen mellom to nabohøydekurver', 'Avstanden mellom to byer', 'Kartets målestokk', 'Bredden på en elv'],
      explanation: 'Ekvidistanse er høydeforskjellen mellom påfølgende høydekurver. På norske N50-kart er ekvidistansen 20 meter.',
    },
    {
      question: 'Hva betyr det at høydekurver ligger tett sammen på et kart?',
      options: ['Terrenget er bratt', 'Terrenget er flatt', 'Det er en innsjø der', 'Det er en vei der'],
      explanation: 'Tette høydekurver betyr stor høydeendring over kort avstand, altså bratt terreng. Spredte kurver betyr slakt terreng.',
    },
    {
      question: 'Hvordan brukes målestokk til å beregne virkelig avstand?',
      options: ['Avstanden på kartet multipliseres med målestokkstallet', 'Avstanden deles på antall høydekurver', 'Målestokk har ingenting med avstand å gjøre', 'Man måler bare i centimeter uten omregning'],
      explanation: 'Med målestokk 1:50 000 tilsvarer 1 cm på kartet 50 000 cm (500 m) i terrenget, så kartavstanden ganges med målestokkstallet.',
    },
    {
      question: 'Hva kan et geologisk kart vise som et vanlig topografisk kart ikke gjør?',
      options: ['Hvilke bergarter og geologiske strukturer som finnes i området', 'Bare veier og bygninger', 'Bare høyder', 'Værvarsel for området'],
      explanation: 'Et geologisk kart viser fordelingen av bergarter, løsmasser, forkastninger og andre geologiske strukturer i tillegg til topografien.',
    },
  ],
  'geofag-1-10-4': [
    {
      question: 'Hva er et GIS (geografisk informasjonssystem)?',
      options: ['Et datasystem for innsamling, lagring, analyse og presentasjon av geografisk informasjon', 'Et papirkart', 'Et måleinstrument for vind', 'En type bergart'],
      explanation: 'Et GIS er et datasystem der geografiske data organiseres i lag som kan kombineres og analyseres for å løse romlige problemstillinger.',
    },
    {
      question: 'Hva er en digital terrengmodell (DTM)?',
      options: ['En rasterbasert modell der hver celle har en høydeverdi', 'En liste over bergarter', 'Et bilde av skyene', 'En tabell med temperaturer'],
      explanation: 'En digital terrengmodell representerer terrengoverflaten som et rutenett der hver celle inneholder høyde over havet, og brukes blant annet til helningsanalyse.',
    },
    {
      question: 'Hva er en fordel med å organisere data i lag i et GIS?',
      options: ['Ulike datatyper kan kombineres og analyseres sammen', 'Data kan ikke endres', 'Man kan bare se ett tema om gangen', 'Det gjør analysen umulig'],
      explanation: 'Ved å legge ulike temalag oppå hverandre (f.eks. berggrunn, vassdrag og bebyggelse) kan man analysere sammenhenger og lage nye kart.',
    },
    {
      question: 'Hva kan en DTM brukes til i geofag?',
      options: ['Beregne helning og analysere skred- og flomfare', 'Måle lufttemperatur', 'Bestemme bergarters alder', 'Telle innbyggere'],
      explanation: 'Med en DTM kan man beregne helning, eksposisjon og dreneringsmønstre, noe som er nyttig for å vurdere blant annet skred- og flomfare.',
    },
    {
      question: 'Hvorfor må man vurdere kvaliteten på digitale geodata?',
      options: ['Unøyaktige eller utdaterte data kan gi feil konklusjoner', 'Digitale data er alltid feilfrie', 'Kvalitet spiller ingen rolle', 'Data trenger aldri oppdatering'],
      explanation: 'Digitale geodata kan ha begrenset oppløsning, feil eller være utdaterte, så man må vurdere kvalitet og begrensninger før man stoler på analysene.',
    },
  ],
  'geofag-1-10-5': [
    {
      question: 'Hva er et abstrakt (sammendrag) i en geofaglig rapport?',
      options: ['Et kort sammendrag av formål, metode, hovedresultater og konklusjon', 'En lang innledning', 'En liste over kilder', 'En tabell med rådata'],
      explanation: 'Et abstrakt er et kort sammendrag (typisk 100–300 ord) som gir leseren rask oversikt over hele arbeidet.',
    },
    {
      question: 'Hvorfor bør data presenteres i egnede grafer og tabeller?',
      options: ['Det gjør resultatene oversiktlige og lettere å tolke', 'For å skjule resultatene', 'For å gjøre rapporten vanskeligere', 'Det er aldri nødvendig'],
      explanation: 'Godt valgte grafer og tabeller gjør store datamengder oversiktlige og hjelper leseren å se mønstre og sammenhenger.',
    },
    {
      question: 'Hvorfor er det viktig å referere kilder korrekt i en rapport?',
      options: ['For å gi kreditt og la andre etterprøve grunnlaget', 'For å fylle opp sidene', 'For å skjule hvor informasjonen kommer fra', 'Det er ikke nødvendig'],
      explanation: 'Korrekte kildehenvisninger gir kreditt til opphavspersonene, viser at påstandene er underbygd og lar leseren etterprøve dem.',
    },
    {
      question: 'Hva bør en konklusjon i en geofaglig rapport gjøre?',
      options: ['Oppsummere hovedfunnene og svare på problemstillingen', 'Introdusere nye data som ikke er nevnt før', 'Liste alle kilder', 'Gjenta hele metoden i detalj'],
      explanation: 'Konklusjonen skal kort oppsummere de viktigste resultatene og svare på problemstillingen, uten å innføre helt nytt materiale.',
    },
    {
      question: 'Hvorfor er tydelig formidling viktig i geofaglig arbeid?',
      options: ['Andre må kunne forstå og bruke resultatene', 'For å imponere uten innhold', 'Det spiller ingen rolle hvordan man formidler', 'For å holde funnene hemmelige'],
      explanation: 'Tydelig formidling, muntlig og skriftlig, gjør at andre kan forstå, etterprøve og bygge videre på resultatene – en kjerne i vitenskapelig arbeid.',
    },
  ],

};

export default quizData_geofag;
