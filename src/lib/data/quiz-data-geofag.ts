import type { QuizQuestion } from './quiz-data';

const quizData_geofag: Record<string, QuizQuestion[]> = {
  "geofag-1-1": [
    {
      question: "Hvilken sfaere omfatter alle levende organismer påJorden?",
      options: ["Biosfaeren", "Geosfaeren", "Hydrosfaeren", "Atmosfaeren"],
      explanation: "Biosfaeren er den sfaeren som inneholder alt liv påJorden, fra bakterier til mennesker.",
    },
    {
      question: "Hva er litosfaeren?",
      options: ["Det stive ytre laget av Jorden som inneholder jordskorpen og ovre mantel", "Kun den tynne, faste jordskorpen uten den overste delen av mantelen", "Den delvis smeltede, seige delen av mantelen som platene glir oppa", "Hele mantelen fra jordskorpen og helt ned til den ytre kjernen"],
      explanation: "Litosfaeren er det stive ytre laget som består av jordskorpen og den overste delen av mantelen, og er delt i tektoniske plater.",
    },
    {
      question: "Hvor tykk er kontinental jordskorpe typisk?",
      options: ["30-70 km", "5-10 km", "100-200 km", "2900 km"],
      explanation: "Kontinental skorpe er tykkere (30-70 km) enn oseanisk skorpe (5-10 km), men mindre tett.",
    },
    {
      question: "Hva består jordens indre kjerne av?",
      options: ["Fast jern og nikkel", "Flytende jern og nikkel", "Smeltet silikater", "Granitt"],
      explanation: "Den indre kjernen er fast pågrunn av det enorme trykket, selv om temperaturen er svart høy.",
    },
    {
      question: "Hvilket eksempel viser samspill mellom geosfaeren og atmosfæren?",
      options: ["Vulkanutbrudd sender gasser til atmosfæren", "Planter vokser i jorda", "Planter tar opp naeringsstoffer og vokser i jordas overste lag", "Regn faller fra skyene og renner videre ut i elver og innsjoer"],
      explanation: "Vulkanutbrudd frigjør store mengder gasser som CO2 og svoveldioksid til atmosfæren.",
    },
  ],
  "geofag-1-2": [
    {
      question: "Hvilken bergart dannes nårmagma storkner langsomt under jordoverflaten?",
      options: ["Granitt", "Basalt", "Marmor", "Sandstein"],
      explanation: "Granitt er en intrusiv (dyp)bergart som dannes nårmagma storkner langsomt, noe som gir tid til store krystaller.",
    },
    {
      question: "Hva er et mineral?",
      options: ["Et naturlig førekommende, uorganisk fast stoff med definert kjemisk sammensetning", "Enhver hard stein man finner i naturen, uansett sammensetning og opprinnelse", "Et aggregat satt sammen av flere ulike mineraler og andre faste stoffer", "En organisk dannet krystall bygget opp av levende cellers stoffskifte"],
      explanation: "Mineraler måvære naturlige, uorganiske, faste, ha definert kjemisk sammensetning og ordnet atomstruktur.",
    },
    {
      question: "Hvilken metamorf bergart dannes fra kalkstein?",
      options: ["Marmor", "Gneis", "Kvartsitt", "Skifer"],
      explanation: "Marmor dannes nårkalkstein utsettes for høyt trykk og temperatur, og kalsittkrystallene rekrystalliserer.",
    },
    {
      question: "Hva kjennetegner ekstrusive bergarter?",
      options: ["De storkner raskt påoverflaten og fårsma krystaller", "De storkner langsomt og fårstore krystaller", "De dannes ved at loste sedimenter presses og sementeres sammen over tid", "De dannes nar eldre bergarter utsettes for hoyt trykk og hoy temperatur"],
      explanation: "Ekstrusive bergarter (dagbergarter) som basalt storkner raskt påoverflaten, noe som gir sma krystaller.",
    },
    {
      question: "Hva beskriver bergartskretsløpet?",
      options: ["Hvordan bergarter omdannes fra en type til en annen gjennom geologiske prosesser", "Hvordan store fjellkjeder bygges opp nar to tektoniske plater kolliderer", "Hvordan verdifulle mineraler og malmer utvinnes og foredles fra gruver", "Hvordan vann sirkulærer mellom hav, atmosfaere, isbreer og grunnvann"],
      explanation: "Bergartskretsløpet viser hvordan bergarter omdannes mellom magmatiske, sedimentaere og metamorfe typer.",
    },
  ],
  "geofag-1-3": [
    {
      question: "Hvem føreslo teorien om kontinentaldrift?",
      options: ["Alfred Wegener", "Charles Darwin", "Isaac Newton", "Albert Einstein"],
      explanation: "Alfred Wegener føreslo kontinentaldrift-teorien i 1912, men den ble først akseptert på 1960-tallet.",
    },
    {
      question: "Hva skjer ved en divergerende plategrense?",
      options: ["Platene beveger seg fra hverandre og ny havbunn dannes", "Platene glir sidelengs forbi hverandre langs en forkastning uten at ny skorpe dannes", "Den ene platen dykker ned under den andre og smelter i dypet igjen", "Platene presses mot hverandre og kolliderer sa fjellkjeder foldes opp"],
      explanation: "Ved divergerende grenser, som Midtatlanterhavets rygg, beveger platene seg fra hverandre og ny skorpe dannes.",
    },
    {
      question: "Hva er subduksjon?",
      options: ["Prosessen der en tektonisk plate dykker ned under en annen", "Prosessen der ny havbunn dannes", "Prosessen der ny oseanisk havbunn dannes ved en midthavsrygg", "Prosessen der smeltet magma trenger opp og bygger nye vulkaner"],
      explanation: "Subduksjon skjer typisk nåren tyngre oseanisk plate møter en lettere kontinental plate og synker ned.",
    },
    {
      question: "Hvilken drivkraft regnes som viktigst for platebevegelser?",
      options: ["Slab pull", "Ridge push", "Jordrotasjon", "Tidevannskrefter"],
      explanation: "Slab pull (trekket fra subduserende plater) regnes som den viktigste drivkraften fordi de kalde, tunge platene synker.",
    },
    {
      question: "Hvordan ble Himalaya dannet?",
      options: ["Ved kollisjon mellom den indiske og eurasiske platen", "Ved subduksjon av oseanisk plate", "Ved kraftig vulkanisme som gradvis bygde opp fjellene lag for lag", "Ved rifting der jordskorpen ble trukket fra hverandre og strakt ut"],
      explanation: "Himalaya ble dannet da to kontinentale plater kolliderte - ingen subduseres, såskorpen presses sammen og opp.",
    },
  ],
  "geofag-1-4": [
    {
      question: "Hvilken vulkantype har Hawaii?",
      options: ["Skjoldvulkan", "Stratovulkan", "Calderavulkan", "Keglevulkan"],
      explanation: "Hawaii har skjoldvulkaner med tyntflytende basaltisk lava som sprer seg utover og danner flate, brede vulkaner.",
    },
    {
      question: "Hva er episenteret til et jordskjelv?",
      options: ["Punktet påoverflaten rett over hyposenteret", "Malet påjordskjelvets styrke", "Stedet nede i dypet der selve bruddet i berggrunnen starter", "Stedet der bruddet starter"],
      explanation: "Episenteret er punktet påjordoverflaten rett over hyposenteret (fokus), der jordskjelvet oppstar.",
    },
    {
      question: "Hvilke seismiske bolger kan ikke ga gjennom vaeske?",
      options: ["S-bolger", "P-bolger", "Overflatebolger", "Alle bolger kan ga gjennom vaeske"],
      explanation: "S-bolger (skjaerbolger) kan bare ga gjennom faste stoffer fordi vaesker ikke har skjaerestyrke.",
    },
    {
      question: "Hva måler Richter-skalaen?",
      options: ["Jordskjelvets magnitud", "Jordskjelvets intensitet", "Dybden til hyposenteret", "Tsunamiens høyde"],
      explanation: "Richter-skalaen måler jordskjelvets styrke basert påenergien som frigjøres.",
    },
    {
      question: "Hvorfor har Ildringen såmange vulkaner og jordskjelv?",
      options: ["Fordi den følger kanten av Stillehavsplaten som subduseres", "Fordi det er flest øyer der, og øyer skaper i seg selv vulkaner og jordskjelv", "Fordi det ligger mest hav der som demper og skjuler bevegelsene", "Fordi det finnes flest vulkanske oyer der fra tidligere utbrudd"],
      explanation: "Ildringen følger subduksjonssonene rundt Stillehavet, der jordskjelv og vulkanisme er intense.",
    },
  ],
  "geofag-1-5": [
    {
      question: "Hva er hovedårsaken til frostsprengning?",
      options: ["Vann utvider seg nårdet fryser", "Frost gjør bergarter myke", "Is er tyngre enn vann og presser dermed bergarten fra hverandre", "Is er tyngre enn vann"],
      explanation: "Vann utvider seg med ca. 9% nårdet fryser. I sprekker i berg skaper dette et enormt trykk som sprenger bergarten.",
    },
    {
      question: "Hvilken prosess løser opp kalkstein?",
      options: ["Oppløsning i surt vann", "Frostsprengning", "Frostsprengning der vann fryser i sprekker og utvider seg", "Trykkavlastning"],
      explanation: "Kalkstein (CaCO3) loses i surt vann som dannes nårCO2 reagerer med regnvann. Dette skaper karstlandskap.",
    },
    {
      question: "Hva er forskjellen mellom forvitring og erosjon?",
      options: ["Forvitring er nedbrytning påstedet, erosjon er transport bort", "Erosjon er nedbrytning, forvitring er transport", "De betyr det samme og brukes om hverandre om nedbrytning av berg", "Forvitring skjer bare i hoye fjell, mens erosjon skjer nede i dalene"],
      explanation: "Forvitring bryter ned bergarter påstedet, mens erosjon transporterer det forvitrede materialet bort.",
    },
    {
      question: "Hvilken type forvitring er viktigst i Norge?",
      options: ["Frostsprengning", "Termisk forvitring", "Oksidasjon", "Saltsprengning"],
      explanation: "Norge har mange fryse-tine-sykluser som gjør frostsprengning til den viktigste forvitringsprosessen.",
    },
    {
      question: "Hva er hydrolyse?",
      options: ["En kjemisk forvitring der vann reagerer med mineraler", "En fysisk forvitring", "En egen bergartstype som dannes nar leirmineraler presses sammen", "En fysisk forvitring der temperaturvekslinger sprenger berget opp"],
      explanation: "Hydrolyse er en kjemisk forvitringsprosess der vann reagerer med mineraler som feltspat og danner leirmineraler.",
    },
  ],
  "geofag-1-6": [
    {
      question: "Hvilken dalform skapes av isbreer?",
      options: ["U-dal", "V-dal", "Riftdal", "Canyon"],
      explanation: "Isbreer graver ut brede U-daler med flat bunn og bratte sider, i motsetning til elver som skaper V-daler.",
    },
    {
      question: "Hva er en esker?",
      options: ["En lang rygg av sortert grus avsatt i tunnel under isen", "En strømlinjeformet fjellknaus som isen har slipt glatt på oversiden", "En sirkelformet fordypning i fjellet der en isbre samler seg og starter", "En strommlinjeformet, avrundet haug av losmasse som isen formet ovenfra"],
      explanation: "Eskere dannes i smeltevanntunneler under isbreen. Sortert sand og grus avsettes og danner lange, smale rygger.",
    },
    {
      question: "Hvilken landform dannes der en elv møter havet?",
      options: ["Delta", "Fjord", "Botn", "Morene"],
      explanation: "Et delta dannes nårelven mister fart ved havet og avsetter sedimentene den har transportert.",
    },
    {
      question: "Hva er en botn?",
      options: ["En sirkelformet fordypning i fjellet der en isbre starter", "En type fjord som er kortere og smalere enn de andre fjordene på kysten", "En flat slette bygget opp av finkornet materiale avsatt av en elv", "En rygg av usortert stein og grus som isbreen la igjen ved fronten sin"],
      explanation: "En botn dannes ved toppen av en isbre der snoe akkumulæres og is erøderer ut en sirkelformet fordypning.",
    },
    {
      question: "Hva er morene?",
      options: ["Materiale transportert og avsatt av en isbre", "En vulkansk landform som dannes når glødende aske raser nedover fjellsiden", "En vulkansk landform bygget opp av storknet lava og aske", "En sedimentaer bergart dannet av sammenpresset sand og grus"],
      explanation: "Morene er usortert materiale fra leire til store blokker som er transportert og avsatt av isbreer.",
    },
  ],
  "geofag-1-7": [
    {
      question: "Hva er den viktigste faktoren som bestemmer klima?",
      options: ["Breddegrad", "Høyde over havet", "Naerhet til hav", "Havstrømmer"],
      explanation: "Breddegraden bestemmer solvinkel og dagslengde, som er de viktigste faktorene for temperaturen.",
    },
    {
      question: "Hvor mye synker temperaturen per 100 meters høyde?",
      options: ["Ca. 0.6C", "Ca. 1.0C", "Ca. 0.3C", "Ca. 2.0C"],
      explanation: "Temperaturen synker med ca. 0.6C per 100 meter høydeoekning i troposfaeren.",
    },
    {
      question: "Hvilken havstrøm varmer Norges kyst?",
      options: ["Golfstrømmen", "Labradorstrømmen", "Humboldtstrømmen", "Benguelastrømmen"],
      explanation: "Golfstrømmen transporterer varmt vann fra tropene til Norges kyst og gir mildere klima enn breddegraden tilsier.",
    },
    {
      question: "Hva er regnskygge?",
      options: ["Et tort område påle-siden av et fjell", "Skygge fra regnskyer", "En egen skytype som dannes hoyt oppe pa lo-siden av et fjell", "Et tropisk fenomen"],
      explanation: "Regnskygge oppstar nårfuktig luft tvinges over fjell, gir nedbor pålo-siden og tort vaeR påle-siden.",
    },
    {
      question: "Hva kjennetegner maritimt klima?",
      options: ["Milde vintre og kjølige somre", "Kalde vintre og varme somre", "Vatt og fuktig vaer med jevn, rikelig nedbor hele aret gjennom", "Tort hele året"],
      explanation: "Maritimt klima (nær hav) har milde vintre og kjølige somre fordi havet jevner ut temperaturen.",
    },
  ],
  "geofag-1-8": [
    {
      question: "I hvilket atmosfærelag skjer alt vær?",
      options: ["Troposfaeren", "Stratosfaeren", "Mesosfaeren", "Termosfaeren"],
      explanation: "Troposfaeren er det nederste laget der temperaturen synker med høyden, noe som gir ustabilitet og skydannelse.",
    },
    {
      question: "Hvilken front gir typisk kraftig, kortvarig nedbor?",
      options: ["Kaldfront", "Varmfront", "Okklusjon", "Stasjonær front"],
      explanation: "Kaldfronten har brattere helning og gir raskere lofting av luften, noe som gir kraftigere, men kortere nedbor.",
    },
    {
      question: "Hva kjennetegner høytrykk?",
      options: ["Synkende luft og stabilt, fint vær", "Stigende luft og nedbor", "Stigende fuktig luft gir skyer", "Kraftige stormer"],
      explanation: "I et høytrykk synker luften, varmes opp og torker ut, noe som gir stabilt, fint vær.",
    },
    {
      question: "Hvilken retning roterer vinden rundt et lavtrykk påden nordlige halvkulen?",
      options: ["Mot klokken (moturs)", "Med klokken (medurs)", "Rett inn mot senteret", "Rett ut fra senteret"],
      explanation: "Corioliseffekten avboyer vinden mot høyre pånordlige halvkule, noe som gir moturs rotasjon rundt lavtrykk.",
    },
    {
      question: "Hva er en okklusjon?",
      options: ["Nåren kaldfront tar igjen en varmfront", "En type høytrykk", "Et stabilt høytrykk med synkende luft", "En tropisk storm"],
      explanation: "En okklusjon oppstar nåren kaldfront tar igjen en varmfront i et lavtrykk.",
    },
  ],
  "geofag-1-9": [
    {
      question: "Hvor mye av jordens vann er ferskvann?",
      options: ["Ca. 2.5%", "Ca. 25%", "Ca. 25 %", "Ca. 50 %"],
      explanation: "Bare 2.5% av jordens vann er ferskvann, og mesteparten av dette er bundet i isbreer.",
    },
    {
      question: "Hva er en akvifer?",
      options: ["Et vannførende geologisk lag", "Grunnvannsspeilet", "En dyp bronn som er boret ned for a hente opp grunnvann til bruk", "Et vanntett lag"],
      explanation: "En akvifer er et lag med porose bergarter eller sedimenter som kan lagre og transportere grunnvann.",
    },
    {
      question: "Hva kalles fordampning fra planter?",
      options: ["Transpirasjon", "Kondensasjon", "Infiltrasjon", "Evaporasjon"],
      explanation: "Transpirasjon er fordampning av vann fra plantenes blader, en viktig del av vannkretsløpet.",
    },
    {
      question: "Hva er grunnvannsspeilet?",
      options: ["Ovre grense for den mettede sonen", "Overflaten av en innsjø", "Nedre grense av en akvifer der det vanntette laget begynner", "Bunnen av en akvifer"],
      explanation: "Grunnvannsspeilet er den ovre grensen for den mettede sonen - nivået der alle porer er fylt med vann.",
    },
    {
      question: "Hva er en artesisk bronn?",
      options: ["En bronn der vannet stiger av seg selv pga. trykk", "En bronn som er svart dyp", "En bronn som er boret ekstra dypt for a na det nederste vannlaget", "En bronn som gir salt eller bregt vann fordi den star naer kysten"],
      explanation: "Artesisk vann er under trykk mellom to vanntette lag, så det stiger opp av seg selv nårman borer.",
    },
  ],
  "geofag-1-10": [
    {
      question: "Hva viser høydekurvene på et topografisk kart?",
      options: ["Linjer som forbinder punkter med samme høyde", "Grenser mellom bergarttyper", "Grensene mellom ulike bergarttyper i berggrunnen under overflaten", "Retningen på vannstrømmene i elvene"],
      explanation: "Høydekurver (koter) forbinder punkter med samme høyde over havet.",
    },
    {
      question: "Hva indikerer tette høydekurver på et kart?",
      options: ["Bratt terreng", "Flatt terreng", "Skog", "Vann"],
      explanation: "Tette høydekurver betyr at høyden endrer seg mye over kort avstand, altsa bratt terreng.",
    },
    {
      question: "Hva er ekvidistanse på et kart?",
      options: ["Høydeforskjellen mellom høydekurvene", "Avstanden mellom to punkter", "Den faktiske avstanden i terrenget mellom to valgte punkter", "Kartets målestokk"],
      explanation: "Ekvidistansen er den faste høydeforskjellen mellom to nabokurver, vanligvis 5, 10 eller 20 meter.",
    },
    {
      question: "Hva er GIS?",
      options: ["Geografiske informasjonssystemer for analyse av geografiske data", "Et geologisk instrument", "En bestemt karttype som viser hoydeforskjeller ved hjelp av koter", "En avansert type GPS som viser posisjonen din i sanntid ute i felt"],
      explanation: "GIS er digitale verktoy for a samle inn, lagre, analysere og presentere geografiske data.",
    },
    {
      question: "Hvabrukes saltsyre til i felt?",
      options: ["A teste om en bergart inneholder kalk", "A lage hull i berg", "A lose opp berget og lage borehull for provetaking ute i felt", "A merke steiner"],
      explanation: "Saltsyre (HCl) brukes til a teste kalkstein - den bruiser nårkalkstein loses.",
    },
  ],
  "geofag-2-1": [
    {
      question: "Hvor gammel er Jorden?",
      options: ["Ca. 4.6 milliarder år", "Ca. 4.6 millioner år", "Ca. 6000 år", "Ca. 13.8 milliarder år"],
      explanation: "Jorden er ca. 4.6 milliarder årgammel, dannet fra solnebula samtidig med resten av solsystemet.",
    },
    {
      question: "Hvilken dateringemetode bruker nedbrytning av radioaktive isotoper?",
      options: ["Absolutt datering (radiometrisk)", "Relativ datering", "Relativ datering (aldersrekkefølge etter lagfølge)", "Superposisjonsprinsippet for uforstyrret lagdeling"],
      explanation: "Radiometrisk datering måler forholdet mellom moder- og datterisotoper for a beregne alder.",
    },
    {
      question: "I hvilken geologisk aera levde dinosaurene?",
      options: ["Mesozoikum", "Paleozoikum", "Kenozoikum", "Proterozoikum"],
      explanation: "Dinosaurene dominerte i Mesozoikum (252-66 millioner årsiden), ofte kalt \"reptilenes tidsalder\".",
    },
    {
      question: "Hva er superposisjonsprinsippet?",
      options: ["Yngre lag ligger over eldre lag", "Eldre lag ligger over yngre lag", "Alle lag er like gamle", "Lag kan ikke dateres"],
      explanation: "Superposisjonsprinsippet sier at i en uførstyrret lagrekke ligger de yngste lagene overst.",
    },
    {
      question: "Hvilken isotop brukes til a datere organisk materiale opp til 50 000 ar?",
      options: ["Karbon-14", "Uran-238", "Kalium-40", "Rubidium-87"],
      explanation: "Karbon-14 har en halveringstid på5730 årog egner seg for datering av organisk materiale.",
    },
  ],
  "geofag-2-2": [
    {
      question: "Hvilken type fossil er et fotavtrykk fra en dinosaur?",
      options: ["Sporfossil", "Kroppsfossil", "Kjemofossil", "Levende fossil"],
      explanation: "Fotavtrykk er sporfossiler - spor etter aktiviteten til en organisme, ikke selve kroppen.",
    },
    {
      question: "Hva kjennetegner et godt ledefossil?",
      options: ["Stor geografisk utbredelse og kort eksistenstid", "Lever svært lenge og finnes bare i noen få geografiske områder", "Snever utbredelse og svært lang eksistenstid", "Er sjeldent og vanskelig å kjenne igjen i felt"],
      explanation: "Gode ledefossiler har stor utbredelse, kort eksistenstid, er lett gjenkjennelige og hyppige.",
    },
    {
      question: "Hvilken masseutryddelse var den største i jordens historie?",
      options: ["Perm-Trias (252 mill årsiden)", "Kritt-Paleogen (66 mill år)", "Ordovicium-Silur", "Trias-Jura"],
      explanation: "Perm-Trias-utryddelsen tok livet av 96% av marine arter og 70% av landdyr.",
    },
    {
      question: "Hva er permineralisering?",
      options: ["Mineraler fyller porer i bein eller tre", "Organisk materiale erstattes av karbon", "Organismen råtner og etterlater hulrom", "Organismer etterlater avtrykk"],
      explanation: "Ved permineralisering fyller mineraler porene i organisk materiale og forsterker strukturen.",
    },
    {
      question: "Nårskjedde Kambrium-eksplosjonen?",
      options: ["For ca. 541 millioner årsiden", "For ca. 66 millioner årsiden", "For ca. 252 millioner årsiden", "For ca. 4 milliarder årsiden"],
      explanation: "Kambrium-eksplosjonen var en rask utvikling av dyreliv for ca. 541 millioner årsiden.",
    },
  ],
  "geofag-2-3": [
    {
      question: "Hva dannet den kaledonske fjellkjeden?",
      options: ["Kollisjon mellom Baltika og Laurentia", "Vulkansk aktivitet", "Istider gravde ut hele fjellkjeden", "Istidenes erosjon"],
      explanation: "Den kaledonske fjellkjeden ble dannet for 500-400 millioner årsiden ved kontinentkollisjon.",
    },
    {
      question: "Hvilke bergarter dominerer i grunnfjellet?",
      options: ["Gneiser og granitter", "Kalkstein og skifer", "Sandstein og konglomerat", "Basalt og gabbro"],
      explanation: "Grunnfjellet består hovedsakelig av gneiser og granitter, dannet for 1-3 milliarder årsiden.",
    },
    {
      question: "Hva er et skyvedekke?",
      options: ["En bergartspakke skjovet horisontalt over store avstander", "En vulkansk struktur bygd opp av størknet lava og aske", "En vanlig fjelltype dannet ved oppknusing av grunnfjell", "En morenemasse avsatt av isbreer under siste istid"],
      explanation: "Skyvedekker ble dannet under den kaledonske fjellkjededannelsen da bergarter ble presset ostover.",
    },
    {
      question: "Nårkulminerte siste istid?",
      options: ["For ca. 20 000 årsiden", "For ca. 100 000 årsiden", "For ca. 1000 årsiden", "For ca. 1 million årsiden"],
      explanation: "Siste istid (Weichsel) hadde sin kulminasjon for ca. 20 000 årsiden med is opp til 3 km tykk.",
    },
    {
      question: "Hvordan ble fjordene dannet?",
      options: ["Isbreer gravde ut eksisterende daler som ble oversvommet av hav", "Kraftige jordskjelv sprakk opp landet og dannet dype havviker", "Store meteorittnedslag laget dype krater som fyltes med havvann", "Vulkansk aktivitet skapte dype daler som fyltes med hav"],
      explanation: "Fjordene er U-daler gravd ut av isbreer og senere oversvommet av hav etter istiden.",
    },
  ],
  "geofag-2-4": [
    {
      question: "Hva er massebalansen til en isbre?",
      options: ["Forskjellen mellom akkumulasjon og ablasjon", "Hastigheten isen beveger seg", "Isbreens totale masse regnet i tonn av snø og is", "Den samlede tykkelsen på isen målt fra bunn til topp"],
      explanation: "Massebalansen er forskjellen mellom akkumulasjon (snofall) og ablasjon (smelting/kalving).",
    },
    {
      question: "Hvor mye vil havnivået stige hvis all isen påGronland smelter?",
      options: ["Ca. 7 meter", "Ca. 1 meter", "Ca. 20 meter", "Ca. 58 meter"],
      explanation: "Gronlands innlandsis inneholder nok is til a heve havnivået med ca. 7 meter.",
    },
    {
      question: "Hva er permafrost?",
      options: ["Grunn som er frossen i minst to sammenhengende år", "Snø som ikke smelter, men pakkes sammen til is gjennom mange vintre", "Frosset sjøvann som danner varig havis langs kysten", "Et lag med snø på overflaten som aldri rekker å smelte bort"],
      explanation: "Permafrost er grunn som holder seg under 0C i minst to sammenhengende år.",
    },
    {
      question: "Hva er albedo-effekten?",
      options: ["Is og snoe reflekterer sollys og holder jorden kjolig", "Is smelter av solvarme", "Is lagrer solenergi og frigjør den langsomt som varme", "Is og snø smelter raskt fordi de trekker til seg solvarmen"],
      explanation: "Albedo er andelen sollys som reflekteres. Is og snoe har høy albedo (80-90%).",
    },
    {
      question: "Hva er det aktive laget i permafrost?",
      options: ["Overste lag som tiner om sommeren", "Bunnen av permafrosten", "Det laget i permafrosten som inneholder mest is", "Det kaldeste laget"],
      explanation: "Det aktive laget er det overste laget som tiner om sommeren og fryser om vinteren.",
    },
  ],
  "geofag-2-5": [
    {
      question: "Hvor stor andel av jordens ferskvann er lagret i isbreer?",
      options: ["Ca. 69%", "Ca. 30%", "Ca. 1%", "Ca. 50%"],
      explanation: "Ca. 69% av ferskvannet er bundet i isbreer og snoe, 30% er grunnvann.",
    },
    {
      question: "Hva er forskjellen mellom porositet og permeabilitet?",
      options: ["Porositet er plass til vann, permeabilitet er hvor lett vann strømmer", "Porositet er hvor lett vann strømmer, permeabilitet er lagringsplass", "Bare bergarter har porositet, mens løsmasser mangler slike egenskaper", "Porositet og permeabilitet betyr nøyaktig det samme i bergarter"],
      explanation: "Porositet er andelen hulrom, permeabilitet er hvor lett vann kan strømme gjennom.",
    },
    {
      question: "Hvordan transporterer elver sedimenter i suspensjon?",
      options: ["Finpartikler holdes svevende i vannmassen", "Partikler spretter langs bunnen", "Partiklene spretter og hopper langs bunnen i korte kast", "Partikler ruller langs bunnen"],
      explanation: "Suspensjon er nårfine partikler (leire, silt) holdes svevende av turbulens.",
    },
    {
      question: "Hva er oppholdstiden for vann i atmosfæren?",
      options: ["Ca. 9 dager", "Ca. 100 år", "Ca. 100 år i gjennomsnitt", "Ca. 1 dag"],
      explanation: "Vann i atmosfæren har kort oppholdstid - bare ca. 9 dager for det faller som nedbor.",
    },
    {
      question: "Hvor stor andel av globalt vannforbruk gårtil jordbruk?",
      options: ["Ca. 70%", "Ca. 20%", "Ca. 10%", "Ca. 50%"],
      explanation: "Jordbruk står for ca. 70% av globalt vannforbruk, hovedsakelig til irrigasjon.",
    },
  ],
  "geofag-2-6": [
    {
      question: "Hva skjer med kvikkleire nården førstyrres?",
      options: ["Den gårfra fast til flytende tilstand", "Den absorberer mer vann", "Den ekspanderer og øker i volum når den belastes", "Den suger til seg mer vann og sveller kraftig opp"],
      explanation: "Kvikkleire er sensitiv marin leire som kollapser fra fast til flytende ved førstyrrelse.",
    },
    {
      question: "Hva er formelen for risiko?",
      options: ["Risiko = Fare x Sarbarhet x Eksponering", "Risiko = Fare + Sarbarhet", "Risiko = Fare delt på Sårbarhet ganger Eksponering", "Risiko = Eksponering ganget med kun graden av fare"],
      explanation: "Risiko er produktet av fare (sannsynlighet), sårbarhet og eksponering.",
    },
    {
      question: "Hvilket nettsted varsler om snoskredfare i Norge?",
      options: ["Varsom.no", "NRK.no", "Regjeringen.no", "SSB.no"],
      explanation: "Varsom.no er den offisielle varslingstjenesten for snoskred, flom og jord-/steinskred.",
    },
    {
      question: "Hva er Gjerdrum-skredet et eksempel pa?",
      options: ["Kvikkleireskred", "Fjellskred", "Snøskred utløst av mye nysnø", "Jordskjelv"],
      explanation: "Gjerdrum-skredet i 2020 var et dramatisk kvikkleireskred som tok 10 menneskeliv.",
    },
    {
      question: "Hvordan påvirker klimaendringer naturfårene i Norge?",
      options: ["Mer nedbor gir økt flom- og skredfare", "Bare mer snøskredfare, mens flom- og jordskredfaren er uendret", "Mindre nedbør gir generelt lavere flom- og skredfare", "Ingen merkbar endring i naturfarene i årene fremover"],
      explanation: "Klimaendringer gir mer intens nedbor, høyere temperaturer og økt risiko for flom og skred.",
    },
  ],
  "geofag-2-7": [
    {
      question: "Hva er kildebergarten i et petroleumssystem?",
      options: ["Bergart som genererer olje og gass fra organisk materiale", "Permeabel bergart som lar olje og gass migrere oppover", "Porøs bergart som lagrer olje og gass i reservoaret", "Tett bergart som hindrer olje og gass i å lekke ut"],
      explanation: "Kildebergarten er organisk-rik skifer som ved høy temperatur og trykk genererer hydrokarboner.",
    },
    {
      question: "Hvor stor andel av Norges strømproduksjon kommer fra vannkraft?",
      options: ["Ca. 96%", "Ca. 50%", "Ca. 75%", "Ca. 30%"],
      explanation: "Norge produserer ca. 96% av strømmen fra vannkraft.",
    },
    {
      question: "Hvilke mineraler er kritiske for det grønne skiftet?",
      options: ["Litium, kobolt og sjeldne jordarter", "Jern og aluminium", "Gull og sølv til smykker og elektronikk", "Jern og aluminium til stål og lettmetall"],
      explanation: "Litium, kobolt og sjeldne jordarter trengs til batterier, vindturbiner og elbiler.",
    },
    {
      question: "Ved hvilken temperatur dannes olje fra organisk materiale?",
      options: ["60-120C", "0-30C", "200-300C", "500-600C"],
      explanation: "Olje genereres ved 60-120C (oljevinduet), mens gass dannes ved høyere temperaturer.",
    },
    {
      question: "Nårble Ekofisk-feltet oppdaget?",
      options: ["1969", "1959", "1979", "1989"],
      explanation: "Ekofisk ble oppdaget i 1969 og markerte starten pånorsk oljevirksomhet.",
    },
  ],
  "geofag-2-8": [
    {
      question: "Hva er en klimaproxy?",
      options: ["En indirekte maling av fortidens klima", "En temperaturmåler som registrerer dagens klima der den står", "Et værvarsel for de nærmeste dagene og ukene", "En datamodell som beregner fremtidig klimautvikling"],
      explanation: "En klimaproxy er en indirekte maling som reflekterer fortidens klimaforhold.",
    },
    {
      question: "Hva var CO2-nivået under mellomistider de siste 800 000 årene?",
      options: ["Ca. 280 ppm", "Ca. 180 ppm", "Ca. 400 ppm", "Ca. 100 ppm"],
      explanation: "Under mellomistider var CO2-nivået ca. 280 ppm, i dag er det over 420 ppm.",
    },
    {
      question: "Hva er Milankovitch-sykluser?",
      options: ["Astronomiske faktorer som påvirker klimaet", "Vulkanske sykluser der gjentatte utbrudd styrer klimaet over lange tidsrom", "Variasjoner i solflekkaktivitet som endrer solas utstråling", "Endringer i store havstrømmer som flytter varme rundt jorden"],
      explanation: "Milankovitch-sykluser er endringer i jordbane, aksehelning og presesjon som påvirker klima.",
    },
    {
      question: "Hvor langt tilbake kan iskjerner fra Antarktis ga?",
      options: ["Ca. 800 000 år", "Ca. 10 000 år", "Ca. 1 million år", "Ca. 100 000 år"],
      explanation: "Iskjerner fra Antarktis gårtilbake ca. 800 000 årog viser CO2- og temperaturhistorie.",
    },
    {
      question: "Hva viser lavere d18O i iskjerner?",
      options: ["Kaldere temperatur da snoen falt", "Varmere temperatur", "At det falt mer nedbør enn normalt det året", "Varmere temperatur da snøen falt ned på breen"],
      explanation: "Lavere d18O indikerer at det var kaldere da snoen falt, fordi lettere isotoper dominerer.",
    },
  ],
  "geofag-2-9": [
    {
      question: "Hva er antropocen?",
      options: ["Foreslatt geologisk epoke preget av menneskets påvirkning", "En masseutryddelse der store deler av livet forsvant", "En avgrenset istidsperiode med utbredte isdekker på jorden", "En enkeltstående vulkansk hendelse med globale ettervirkninger"],
      explanation: "Antropocen markerer tiden da mennesket ble en dominerende geologisk kraft.",
    },
    {
      question: "Hva er et teknofossil?",
      options: ["Menneskeskapte gjenstander som kan bli bevart som fossiler", "Ekte fossiler av teknologisk avanserte utdødde organismer", "Vanlige fossiler som er funnet ved hjelp av avansert teknologi", "Fossiler som er kunstig fremstilt på et laboratorium"],
      explanation: "Teknofossiler er menneskeskapte gjenstander som plast, aluminium og betong.",
    },
    {
      question: "Hvor mye har CO2-nivået økt siden forindustriell tid?",
      options: ["Fra ca. 280 til over 420 ppm", "Fra 100 til 200 ppm", "Fra ca. 500 til over 600 ppm", "Fra ca. 100 til rundt 200 ppm"],
      explanation: "CO2-nivået har økt fra ca. 280 ppm til over 420 ppm på 150 år.",
    },
    {
      question: "Hva er planetaere grenser?",
      options: ["Grenseverdier for jordsystemets prosesser som ikke bør overskrides", "Øvre grenser for hvor mye jordas befolkning kan vokse", "Astronomiske grenser for solsystemets utstrekning", "Landegrensene mellom ulike stater og territorier"],
      explanation: "Planetaere grenser definerer sikre operasjonsrom for menneskeheten.",
    },
    {
      question: "Hvilken geologisk marker fra 1950-tallet brukes for antropocen?",
      options: ["Radioaktive isotoper fra atomprovesprengninger", "Plast i havet", "Utbredte oljeutslipp fra industri og skipsfart", "Betong og armering brukt i moderne byutbygging"],
      explanation: "Plutonium-239 fra atomprovesprengninger er en global geologisk marker fra 1950-tallet.",
    },
  ],
  "geofag-2-10": [
    {
      question: "Hva betyr prinsippet om uniformitarianisme?",
      options: ["Prosesser som virker i dag, virket også i fortiden", "At alle bergarter på jorden er omtrent like gamle", "At jorden alltid har sett helt lik ut gjennom hele historien", "Geologiske prosesser skjer med lik hastighet"],
      explanation: "Uniformitarianisme sier at dagens prosesser kan brukes til a tolke fortiden.",
    },
    {
      question: "Hvabrukes en geologihammer til?",
      options: ["A ta bergartsprover", "A grave hull", "A male temperaturer", "A finne fossiler"],
      explanation: "Geologihammeren brukes til a ta prover fra bergarter for narmere undersøkelse.",
    },
    {
      question: "Hva er XRF?",
      options: ["En metode for kjemisk analyse av bergarter", "En dateringsmetode som bestemmer alderen på bergarter", "En digital karttype for geologisk kartlegging", "En type GPS som brukes til posisjonering i felt"],
      explanation: "XRF (rontgenfluorescens) brukes til a bestemme kjemisk sammensetning av bergarter.",
    },
    {
      question: "Hva er vitenskapelig formidling?",
      options: ["A kommunisere forskningsresultater til ulike malgrupper", "Å analysere innsamlede data og tolke måleresultatene", "Å gjennomføre systematisk feltarbeid og innsamling av prøver", "Å skrive fagfellevurderte vitenskapelige artikler for forskere"],
      explanation: "Vitenskapelig formidling handler om a dele kunnskap med både fagfolk og allmennheten.",
    },
    {
      question: "Hvorfor er feltdagbok viktig?",
      options: ["For a dokumentere observasjoner og sikre reproduserbarhet", "For å måle temperaturen i bergartene på hvert enkelt prøvepunkt i felt", "For a tegne detaljerte topografiske kart med hoydekoter over hele feltomradet", "For a male lufttemperatur og nedbormengde gjennom hele feltarbeidsperioden noyaktig"],
      explanation: "Feltdagboken dokumenterer alt som gjøres i felt og sikrer at andre kan gjenta arbeidet.",
    },
  ],
  "geofag-1-1-1": [
    {
      question: "Hva er jordsystemet?",
      options: ["Helheten av geosfæren, hydrosfæren, atmosfæren og biosfæren og samspillet mellom dem", "Kun atmosfæren rundt jorden med alle gasslagene fra troposfæren til eksosfæren", "Bare jordens indre kjerne av jern og nikkel som skaper det magnetiske feltet", "Solsystemet med solen og alle planetene som kretser rundt den i egne baner"],
      explanation: "Jordsystemet omfatter alle jordens komponenter – geosfæren, hydrosfæren, atmosfæren og biosfæren – samt prosessene og samspillet mellom dem.",
    },
    {
      question: "Hva er en positiv tilbakekobling i jordsystemet?",
      options: ["En prosess som forsterker den opprinnelige endringen", "En prosess som demper den opprinnelige endringen", "En prosess som stabiliserer systemet", "En prosess uten effekt på systemet"],
      explanation: "Positiv tilbakekobling forsterker endringen, f.eks. issmelting som reduserer refleksjon og dermed øker oppvarmingen ytterligere.",
    },
    {
      question: "Hvilke to hovedkilder driver jordsystemet med energi?",
      options: ["Solstråling og jordens indre varme", "Månens gravitasjon og vind", "Vulkanutbrudd og havbølger alene", "Vulkaner og bølger alene"],
      explanation: "Jordsystemet drives av ekstern energi fra solen og intern energi fra radioaktiv nedbrytning og restvarme i jordens indre.",
    },
    {
      question: "Hva slags system er jorden med hensyn til materie?",
      options: ["Et tilnærmet lukket system", "Et helt åpent system", "Et isolert system uten energiutveksling", "Et system uten reservoarer"],
      explanation: "Jorden er tilnærmet lukket for materie (svært lite kommer til eller forlater planeten), men åpent for energi.",
    },
    {
      question: "Hvorfor brukes systemtankegang i geofag?",
      options: ["For å forstå hvordan reservoarer, fluks og kretsløp påvirker hverandre", "Fordi jordens deler ikke påvirker hverandre", "Fordi jordens ulike deler ikke påvirker hverandre og fungerer helt uavhengig", "For å kunne se helt bort fra energistrømmer og bare beskrive materie i systemet"],
      explanation: "Systemtankegang ser på reservoarer, fluks, sykluser og tilbakekoblinger, slik at man forstår hvordan en endring ett sted påvirker resten.",
    },
  ],
  "geofag-1-1-2": [
    {
      question: "Hva er seismiske bølger?",
      options: ["Energibølger som forplanter seg gjennom jorden etter jordskjelv", "Bølger på havoverflaten", "Bølger som brer seg over havoverflaten drevet av vind og tidevannskrefter", "Lydbølger som forplanter seg gjennom atmosfæren fra torden og eksplosjoner"],
      explanation: "Seismiske bølger er energibølger fra jordskjelv eller eksplosjoner som forteller oss om jordens indre oppbygging.",
    },
    {
      question: "Hvilken seismisk bølgetype går raskest og kan bevege seg gjennom både fast stoff og væske?",
      options: ["P-bølger (trykkbølger)", "S-bølger (skjærbølger)", "Overflatebølger", "Lydbølger"],
      explanation: "P-bølger er trykkbølger som går raskest og kan forplante seg gjennom både faste og flytende materialer, mens S-bølger ikke går gjennom væske.",
    },
    {
      question: "Hva er litosfæren?",
      options: ["Det stive ytre laget med skorpen og øvre del av mantelen", "Det flytende ytre laget av kjernen", "Atmosfærens nederste lag der vær og klimaprosesser i hovedsak foregår", "Det seigtflytende ytre laget av kjernen der jordens magnetfelt oppstår"],
      explanation: "Litosfæren er det stive ytre laget (ca. 100 km tykt) som omfatter jordskorpen og den øverste delen av mantelen.",
    },
    {
      question: "Hva kjennetegner astenosfæren?",
      options: ["Den er plastisk og ligger under litosfæren", "Den utgjør jordens indre kjerne", "Den finnes i den øvre atmosfæren og består av ionisert luft og gasser", "Den er helt stiv og fast"],
      explanation: "Astenosfæren er det plastiske (delvis seigtflytende) laget under litosfæren, der de tektoniske platene kan bevege seg på.",
    },
    {
      question: "Hvordan vet forskere hva som finnes inne i jorden uten å kunne bore dit?",
      options: ["Ved å analysere hvordan seismiske bølger brytes og endrer hastighet", "Ved å måle temperaturen på overflaten", "Ved å bore borehull helt inn til kjernen og hente opp prøver derfra", "Ved å måle overflatetemperaturen mange steder og regne ut det indre"],
      explanation: "Seismiske bølger endrer hastighet og retning når de passerer lag med ulik tetthet og tilstand, og dette avslører jordens indre struktur.",
    },
  ],
  "geofag-1-1-3": [
    {
      question: "Hva omfatter geosfæren?",
      options: ["Alle faste materialer på jorden, fra overflaten til kjernen", "Luftlaget rundt jorden, altså nitrogenet og oksygenet som ligger over overflaten", "Alt liv på jorden og samspillet mellom organismene i alle økosystemer", "Luftlaget som omgir jorden med alle gassene fra bakken og opp i høyden"],
      explanation: "Geosfæren omfatter alle faste materialer – bergarter, mineraler og jord – fra jordoverflaten helt inn til kjernen.",
    },
    {
      question: "Hva omfatter hydrosfæren?",
      options: ["Alt vann på jorden i flytende, fast og gassform", "Vanndamp i atmosfæren alene, slik den viser seg som skyer og tåke", "Kun vanndampen som finnes i atmosfæren, uten hav, elver og grunnvann", "Bare isbreene og den permanente snøen som ligger i polare og høye strøk"],
      explanation: "Hydrosfæren omfatter alt vann i alle faser: hav, innsjøer, elver, grunnvann, isbreer, snø og vanndamp.",
    },
    {
      question: "Hva er biosfæren?",
      options: ["Summen av alle økosystemer og levende organismer på jorden", "Det øverste laget av atmosfæren, der lufta er så tynn at den går over i verdensrommet", "Bare planteriket med alle grønne organismer som driver fotosyntese", "Det øverste laget av atmosfæren der ozonlaget beskytter mot UV-stråling"],
      explanation: "Biosfæren er summen av alt liv på jorden og organismenes samspill med hverandre og de andre sfærene.",
    },
    {
      question: "Hvilken sfære omfatter all luft rundt jorden?",
      options: ["Atmosfæren", "Hydrosfæren", "Geosfæren", "Biosfæren"],
      explanation: "Atmosfæren er gasslaget som omgir jorden og holdes på plass av tyngdekraften.",
    },
    {
      question: "Hvorfor er det viktig å forstå at de fire sfærene henger sammen?",
      options: ["En endring i én sfære påvirker de andre gjennom samspill og kretsløp", "Sfærene er helt uavhengige av hverandre", "Fordi sfærene er helt uavhengige av hverandre og ikke utveksler stoff", "Fordi sfærene aldri utveksler materie eller energi og forblir uendret"],
      explanation: "Sfærene utveksler stoff og energi, slik at en endring i én sfære (f.eks. økt CO₂ i atmosfæren) får følger for de andre.",
    },
  ],
  "geofag-1-1-4": [
    {
      question: "Hva er et biogeokjemisk kretsløp?",
      options: ["En syklus der grunnstoffer sirkulerer mellom de fire sfærene", "En prosess som bare skjer i atmosfæren", "En bestemt type bergart som dannes når grunnstoffer felles ut i havet", "En prosess som utelukkende foregår i atmosfæren og ikke berører bakken"],
      explanation: "Biogeokjemiske kretsløp er sykluser der grunnstoffer som karbon, nitrogen og fosfor sirkulerer mellom biosfæren, geosfæren, hydrosfæren og atmosfæren.",
    },
    {
      question: "Hvilket kretsløp beskriver vannets sirkulasjon mellom hav, atmosfære og land?",
      options: ["Vannkretsløpet", "Karbonkretsløpet", "Nitrogenkretsløpet", "Bergartskretsløpet"],
      explanation: "Vannkretsløpet binder sfærene sammen gjennom fordampning, kondensasjon, nedbør og avrenning.",
    },
    {
      question: "Hva er et eksempel på samspill mellom biosfæren og atmosfæren?",
      options: ["Planter tar opp CO₂ fra atmosfæren gjennom fotosyntese", "Magma stiger opp fra mantelen og samler seg i magmakamre under vulkanene", "Isbreer skurer og eroderer landskapet og danner brede U-daler", "Magma stiger opp fra mantelen og størkner til ny magmatisk bergart"],
      explanation: "Fotosyntesen er et tydelig samspill: planter (biosfæren) fjerner CO₂ fra atmosfæren og frigjør oksygen.",
    },
    {
      question: "Hvordan kan et vulkanutbrudd påvirke flere sfærer samtidig?",
      options: ["Det avgir gasser til atmosfæren, lava til geosfæren og kan påvirke vann og liv", "Det påvirker bare geosfæren gjennom ny bergart, ikke luft, vann eller liv", "Det påvirker ingenting utenfor selve vulkanen og har helt lokal virkning", "Det skjer bare i hydrosfæren og berører kun vannet i nærliggende områder"],
      explanation: "Et utbrudd slipper ut aske og gasser (atmosfæren), danner ny bergart (geosfæren), kan gi sur nedbør (hydrosfæren) og skade vegetasjon (biosfæren).",
    },
    {
      question: "Hvorfor regnes kretsløp som viktige bindeledd i jordsystemet?",
      options: ["De flytter materie mellom sfærene og holder systemet i bevegelse", "De stopper all utveksling mellom sfærene", "De stopper all utveksling av stoff mellom sfærene og låser systemet fast", "De gjelder bare for vannet og har ingen betydning for andre grunnstoffer"],
      explanation: "Kretsløpene transporterer stoff mellom sfærene og knytter dem sammen til ett dynamisk system som er en forutsetning for liv.",
    },
  ],
  "geofag-1-1-5": [
    {
      question: "Hva er forskjellen på solstråling og jordstråling?",
      options: ["Solstråling er kortbølget, jordstråling er langbølget (infrarød)", "Solstråling er infrarød, jordstråling er synlig lys", "Begge er kortbølget stråling med samme bølgelengde og energiinnhold", "De er helt identiske i bølgelengde og skiller seg bare ut i intensitet"],
      explanation: "Solstråling er kortbølget (synlig lys og UV), mens jorden sender ut langbølget infrarød varmestråling.",
    },
    {
      question: "Hva er drivhuseffekten?",
      options: ["Drivhusgasser absorberer langbølget stråling og sender noe tilbake mot jorden", "Sollys reflekteres nesten helt bort fra jorden av skyer og lyse overflater", "Jorden mister all varmen sin direkte ut i verdensrommet uten forsinkelse", "Atmosfæren slipper ut all langbølget varme uten å holde noe av den igjen"],
      explanation: "Drivhusgasser som CO₂, vanndamp og metan absorberer langbølget varmestråling fra jordoverflaten og holder dermed på varme i atmosfæren.",
    },
    {
      question: "Hvilke gasser er viktige drivhusgasser?",
      options: ["CO₂, vanndamp, metan og lystgass", "Oksygen og nitrogen", "Edelgassene helium og argon, som finnes i små mengder i atmosfæren", "Helium og argon"],
      explanation: "De viktigste drivhusgassene er CO₂, vanndamp (H₂O), metan (CH₄) og lystgass (N₂O), som alle absorberer langbølget stråling.",
    },
    {
      question: "Hvorfor er den naturlige drivhuseffekten nødvendig for livet på jorden?",
      options: ["Uten den ville jorden vært altfor kald for liv", "Den har ingen effekt på temperaturen", "Den hindrer plantene i å drive fotosyntese og bygge opp biomasse", "Den har ingen reell effekt på temperaturen ved jordens overflate"],
      explanation: "Uten den naturlige drivhuseffekten ville gjennomsnittstemperaturen vært rundt –18 °C i stedet for dagens behagelige ca. +15 °C.",
    },
    {
      question: "Hva driver i hovedsak jordens energibalanse?",
      options: ["Balansen mellom innkommende solstråling og utgående jordstråling", "Bare jordens indre varme, som strømmer ut gjennom skorpen og setter temperaturen ved overflaten", "Bare jordens indre varme fra radioaktiv nedbrytning og restvarme i kjernen", "Månens tiltrekning som styrer tidevann og bevegelser i havet og atmosfæren"],
      explanation: "Energibalansen bestemmes av forholdet mellom solenergien jorden mottar og varmestrålingen den sender ut igjen til verdensrommet.",
    },
  ],
  "geofag-1-2-1": [
    {
      question: "Hva er et mineral?",
      options: ["Et naturlig, uorganisk fast stoff med bestemt sammensetning og krystallstruktur", "Et organisk fast stoff dannet av plante- og dyrerester over lang geologisk tid", "Enhver type bergart som er bygd opp av flere ulike mineraler blandet sammen", "En blanding av ulike gasser som er fanget inne i porene i en fast bergart"],
      explanation: "Et mineral er et naturlig forekommende, uorganisk fast stoff med definert kjemisk sammensetning og ordnet indre atomstruktur.",
    },
    {
      question: "Hva er kløv hos et mineral?",
      options: ["Mineralets tendens til å bryte langs bestemte plan", "Mineralets smeltepunkt", "Mineralets karakteristiske farge slik den ser ut på en frisk bruddflate", "Mineralets vekt i forhold til volumet"],
      explanation: "Kløv er tendensen til å brekke langs bestemte krystallografiske plan der bindingene er svakere, f.eks. glimmer som kløver i tynne flak.",
    },
    {
      question: "Hvilken skala brukes til å angi et minerals hardhet?",
      options: ["Mohs hardhetsskala", "Celsius-skalaen", "Richters skala som brukes til å angi styrken på et jordskjelv", "Köppen-systemet"],
      explanation: "Mohs hardhetsskala går fra 1 (talk) til 10 (diamant) og angir hvor godt et mineral motstår riping.",
    },
    {
      question: "Hva er en krystall?",
      options: ["Et fast stoff der atomene er ordnet i et regelmessig tredimensjonalt mønster", "En type gass der atomene beveger seg fritt og fyller hele det gitte volumet", "En flytende bergart av silikater som er smeltet og strømmer ut ved overflaten", "Et fast stoff der atomene ligger helt uordnet uten noe fast indre mønster"],
      explanation: "En krystall har atomene ordnet i et regelmessig gitter, og den ytre formen (habitus) gjenspeiler den indre atomstrukturen.",
    },
    {
      question: "Hvorfor er strekfarge nyttig ved mineralidentifikasjon?",
      options: ["Strekfargen er ofte mer pålitelig enn mineralets overflatefarge", "Strekfargen er alltid lik overflatefargen", "Strekfargen skifter helt avhengig av hvilket lys mineralet studeres i", "Strekfargen viser direkte hvor hardt mineralet er på Mohs hardhetsskala"],
      explanation: "Strekfargen (fargen på pulveret når mineralet rives mot en porselensplate) er ofte mer konstant og pålitelig enn den varierende overflatefargen.",
    },
  ],
  "geofag-1-2-2": [
    {
      question: "Hva er magma?",
      options: ["En naturlig smeltemasse av silikater og gasser under jordoverflaten", "Smeltet bergart som har nådd overflaten og renner utover som glødende strømmer", "Smeltet bergart som har trengt gjennom skorpen og nådd jordoverflaten", "Fast, uendret bergart som ligger nede i mantelen uten å ha vært smeltet"],
      explanation: "Magma er en smeltemasse av silikater, oksider og flyktige stoffer som finnes i magmakamre under jordoverflaten. Når den når overflaten, kalles den lava.",
    },
    {
      question: "Hva indikerer en fanerittisk tekstur i en magmatisk bergart?",
      options: ["Langsom avkjøling dypt nede, slik at store krystaller dannes", "At bergarten aldri var smeltet, og at krystallene derfor ikke har fått vokst fram", "At bergarten er sedimentær og bygd opp av sammenkittede korn og partikler", "At bergarten aldri har vært smeltet, men er omdannet i fast tilstand av trykk"],
      explanation: "Fanerittisk tekstur (store, synlige krystaller) tyder på langsom avkjøling dypt under jorden, slik som i granitt (intrusiv bergart).",
    },
    {
      question: "Hva indikerer en afanittisk tekstur?",
      options: ["Rask avkjøling ved eller nær overflaten gir små krystaller", "Svært langsom avkjøling i dypet under et tykt lokk av overliggende bergarter", "Svært langsom avkjøling dypt nede i jorden gir store og synlige krystaller", "At den er dannet av løse sedimenter som er kittet sammen"],
      explanation: "Afanittisk tekstur har så små krystaller at de ikke synes for det blotte øye, noe som skyldes rask avkjøling, f.eks. i basalt.",
    },
    {
      question: "Hva er forskjellen på intrusive og ekstrusive magmatiske bergarter?",
      options: ["Intrusive størkner under bakken, ekstrusive størkner på overflaten", "Intrusive størkner på overflaten, ekstrusive under bakken", "Intrusive er sedimentære bergarter, mens ekstrusive dannes ved omdanning under høyt trykk", "Intrusive inneholder alltid fossiler, mens ekstrusive er bygd opp av sammenpressede leirlag"],
      explanation: "Intrusive bergarter (f.eks. granitt) størkner sakte dypt nede med grove krystaller, mens ekstrusive (f.eks. basalt) størkner raskt på overflaten.",
    },
    {
      question: "Hvorfor er granitt grovkornet mens basalt er finkornet?",
      options: ["Granitt avkjøles langsomt i dypet, basalt avkjøles raskt på overflaten", "Basalt dannes av sedimenter, og kornstørrelsen speiler derfor sedimentene den kom fra", "Granitt avkjøles raskt på overflaten, mens basalt avkjøles langsomt dypt nede i jordskorpen", "Granitt inneholder mye kalk fra skjell, mens basalt bygges opp av avsatte leir- og sandkorn"],
      explanation: "Langsom avkjøling gir tid til at store krystaller vokser (granitt), mens rask avkjøling gir små krystaller (basalt).",
    },
  ],
  "geofag-1-2-3": [
    {
      question: "Hva er diagenese?",
      options: ["Prosessen der løse sedimenter omdannes til fast bergart", "Smelting av bergarter til magma", "Prosessen der bergarter smelter til flytende magma dypt nede i jordas indre", "Prosessen der fjell brytes ned i løse partikler"],
      explanation: "Diagenese omfatter kompaksjon og sementering som binder løse sedimenter sammen til fast sedimentær bergart.",
    },
    {
      question: "Hvordan dannes en evaporitt?",
      options: ["Ved fordampning av vann som feller ut mineraler", "Ved høyt trykk i mantelen", "Ved langsom avkjøling av magma i dypet", "Ved avkjøling av magma"],
      explanation: "Evaporitter er kjemiske sedimentære bergarter som dannes når vann fordamper og oppløste mineraler felles ut, f.eks. kalsitt, gips og steinsalt.",
    },
    {
      question: "Hvilken gruppe hører kalkstein laget av skjell- og korallrester til?",
      options: ["Biogene sedimentære bergarter", "Klastiske bergarter fra sand", "Klastiske sedimentære bergarter bygd opp av transportert og avsatt sand og grus", "Magmatiske bergarter"],
      explanation: "Kalkstein dannet av organismers kalkrester er en biogen (organisk) sedimentær bergart.",
    },
    {
      question: "Hva er klastiske sedimentære bergarter laget av?",
      options: ["Fragmenter (klaster) av eldre bergarter, som sand og leire", "Rester av levende organismer alene", "Avkjølt og størknet magma der krystallene har vokst fram fra en smelte i dypet", "Kalkrester fra skjell, koraller og andre organismer som er avsatt på havbunnen"],
      explanation: "Klastiske bergarter (f.eks. sandstein og leirskifer) består av fragmenter fra forvitrede og eroderte eldre bergarter.",
    },
    {
      question: "Hva kan sedimentære strukturer som lagdeling og rifler fortelle oss?",
      options: ["Om miljøet og forholdene da sedimentene ble avsatt", "Om jordens indre temperatur", "Temperaturen i kjernen og mantelens tykkelse", "Om bergartens smeltepunkt"],
      explanation: "Sedimentære strukturer gir informasjon om avsetningsmiljøet, f.eks. strømretning, vanndybde og energinivå da sedimentene ble lagt ned.",
    },
  ],
  "geofag-1-2-4": [
    {
      question: "Hva er metamorfose?",
      options: ["Omdanning av bergarter i fast tilstand ved endret trykk og temperatur", "Smelting av bergarter til magma nede i jordskorpen når temperaturen stiger nok", "Nedbryting av fjell ved forvitring og erosjon på og nær jordoverflaten over tid", "Smelting av bergarter til flytende magma som deretter størkner til nye krystaller"],
      explanation: "Metamorfose er omdanning av bergarter i fast tilstand som følge av endringer i temperatur, trykk og/eller kjemisk miljø – bergarten smelter ikke.",
    },
    {
      question: "Hva er foliasjon i en metamorf bergart?",
      options: ["Parallell orientering av plate- eller nåleformede mineraler", "Fossiler i bergarten som er bevart gjennom omdanningen og ligger lagvis", "Avrundede og sorterte sandkorn som er avsatt lagvis i et rennende vannmiljø", "Store hulrom og gassbobler som ble dannet da gass slapp ut av størknende lava"],
      explanation: "Foliasjon er en lagdelt eller skifrig tekstur som dannes når mineraler orienteres vinkelrett på trykkretningen under metamorfosen.",
    },
    {
      question: "Hvilken metamorf bergart dannes fra kalkstein?",
      options: ["Marmor", "Gneis", "Skifer", "Basalt"],
      explanation: "Når kalkstein utsettes for metamorfose, omdannes den til marmor. Leirskifer blir til skifer, og granitt kan bli til gneis.",
    },
    {
      question: "Hvilke faktorer driver metamorfose?",
      options: ["Økt trykk, økt temperatur og kjemisk aktive væsker", "Bare fordampning av vann fra porene, slik at bergarten tørker inn og blir hard", "Bare langsom fordampning av vann som feller ut oppløste mineraler som salt", "Langsom avkjøling av magma som gir tid til at store krystaller vokser i dypet"],
      explanation: "Metamorfose drives av økt temperatur, økt trykk og noen ganger kjemisk aktive væsker, ofte i forbindelse med fjellkjededannelse og platebevegelser.",
    },
    {
      question: "Hvorfor smelter ikke bergarten under metamorfose?",
      options: ["Temperaturen og trykket endrer mineralene uten å nå smeltepunktet", "Fordi det ikke er noen varme involvert", "Fordi det ikke tilføres noen varme, kun mekanisk trykk som knuser mineralene opp", "Fordi bare sedimentære bergarter kan metamorfoseres, og de tåler svært høy varme"],
      explanation: "Metamorfose skjer i fast tilstand: temperaturen og trykket er høyt nok til å endre mineralstrukturen, men ikke høyt nok til å smelte bergarten.",
    },
  ],
  "geofag-1-2-5": [
    {
      question: "Hva beskriver bergartskretsløpet?",
      options: ["Hvordan bergarter omdannes mellom magmatiske, sedimentære og metamorfe typer", "Bare hvordan sedimenter dannes når fjell forvitrer og brytes ned til løse korn og partikler", "Bare hvordan løse sedimenter avsettes lagvis og presses sammen til fast bergart", "Hvordan magma stiger opp fra mantelen og bryter fram som lava ved vulkanutbrudd"],
      explanation: "Bergartskretsløpet er den kontinuerlige omdanningen mellom de tre bergartsgruppene, drevet av jordens indre og ytre krefter.",
    },
    {
      question: "Hvordan kan en magmatisk bergart bli til en sedimentær bergart?",
      options: ["Gjennom forvitring, erosjon, transport, avsetning og diagenese", "Gjennom metamorfose under høyt trykk nede i en fjellkjede som foldes opp", "Gjennom oppsmelting til magma dypt nede som deretter størkner til ny bergart", "Gjennom metamorfose i fast tilstand under svært høyt trykk og høy temperatur"],
      explanation: "En magmatisk bergart forvitrer og eroderes til sedimenter, som transporteres, avsettes og omdannes til sedimentær bergart gjennom diagenese.",
    },
    {
      question: "Hva må skje for at en hvilken som helst bergart skal bli til magmatisk bergart?",
      options: ["Den må smelte til magma og deretter størkne", "Den må presses sammen til sediment", "Den må presses sammen og sementeres til et fast sedimentært lag over lang tid", "Den må utsettes for foliasjon"],
      explanation: "Enhver bergart kan smelte til magma ved høy nok temperatur, og når magmaen størkner, dannes en ny magmatisk bergart.",
    },
    {
      question: "Hvilke krefter driver bergartskretsløpet?",
      options: ["Jordens indre varme og ytre prosesser som forvitring og erosjon", "Ingen krefter driver det – omdanningen skjer helt tilfeldig og uten noe mønster", "Bare solstråling som varmer opp overflaten og setter i gang bergartsomdanning", "Bare månens tiltrekning på jordas overflate som drar på skorpen og sedimentene"],
      explanation: "Kretsløpet drives av jordens indre energi (platetektonikk, vulkanisme) og ytre prosesser drevet av sol og tyngdekraft (forvitring, erosjon, avsetning).",
    },
    {
      question: "Hvorfor sies det at bergartskretsløpet ikke har en fast rekkefølge?",
      options: ["En bergart kan omdannes til hvilken som helst av de andre typene", "Bergarter må alltid gå gjennom alle tre stadier i rekkefølge", "En bergart må alltid gå gjennom alle tre stadiene i en fast og bestemt rekkefølge", "Kretsløpet beveger seg bare én vei og kan aldri gå tilbake til et tidligere stadium"],
      explanation: "En bergart kan ta mange veier gjennom kretsløpet – f.eks. kan en metamorf bergart både smelte til magma eller forvitre til sediment.",
    },
  ],
  "geofag-1-3-1": [
    {
      question: "Hva er kontinentaldrift?",
      options: ["Teorien om at kontinentene har beveget seg horisontalt over geologisk tid", "En forklaring på vulkanutbrudd alene, der magmaen i dypet er den eneste drivkraften", "Teorien om at hele jorden gradvis krymper og at fjellene folder seg opp av dette", "En forklaring på hvorfor vulkaner bryter ut, uavhengig av kontinentenes plassering"],
      explanation: "Kontinentaldrift er teorien, foreslått av Alfred Wegener, om at kontinentene har flyttet seg horisontalt over jordens overflate.",
    },
    {
      question: "Hva var Pangea?",
      options: ["Et superkontinent som inneholdt nesten alt landareal", "Et eldgammelt hav som skilte de nordlige landmassene fra de sørlige", "Et eldgammelt verdenshav som en gang omsluttet hele jordas landmasse", "En enorm fjellkjede som strakte seg gjennom flere av dagens kontinenter"],
      explanation: "Pangea var et superkontinent for ca. 335–175 millioner år siden som samlet nesten alt landareal i én landmasse.",
    },
    {
      question: "Hvilket bevis brukte Wegener for kontinentaldrift?",
      options: ["Kontinentene passer sammen som puslespillbiter, og fossiler og fjell stemmer overens", "At havene var fulle av salt, og at saltmengden viste jordens alder", "At verdenshavene inneholdt store mengder oppløst salt fra forvitrede gamle fjellkjeder", "At kraftige jordskjelv og vulkanutbrudd forekommer spredt jevnt over hele jordoverflaten"],
      explanation: "Wegener pekte på kystlinjene som passer sammen, like fossiler og fjellkjeder på adskilte kontinenter, og spor etter gamle istider.",
    },
    {
      question: "Hvorfor ble Wegeners teori opprinnelig avvist?",
      options: ["Han kunne ikke forklare hvilken kraft som flyttet kontinentene", "Det fantes ingen bevis i det hele tatt", "Kontinentene lå tydelig helt i ro, og ingen forsker mente de kunne ha flyttet seg", "Det fantes overhodet ingen bevis eller observasjoner som pekte mot at teorien stemte"],
      explanation: "Wegener manglet en mekanisme for hvordan kontinentene kunne bevege seg, og derfor avviste mange forskere teorien til platetektonikken senere ga svaret.",
    },
    {
      question: "Hva førte til at teorien om kontinentaldrift senere ble akseptert?",
      options: ["Oppdagelsen av havbunnspredning og platetektonikk ga en mekanisme", "Kontinentene sluttet å bevege seg, og målinger viste at avstandene mellom dem lå fast", "At forskerne fant restene av selve superkontinentet Pangea igjen på havbunnen", "At kontinentene til slutt sluttet helt å bevege seg og la seg fast på sine plasser"],
      explanation: "Funn av havbunnspredning og magnetiske striper på havbunnen ga mekanismen som manglet, og teorien ble en del av platetektonikken.",
    },
  ],
  "geofag-1-3-2": [
    {
      question: "Hva er litosfæren delt inn i?",
      options: ["Tektoniske plater som beveger seg på astenosfæren", "Et eneste sammenhengende skall", "Bare to store halvkuler som er atskilt av en dyp sprekk langs ekvator", "Ett ubrutt skall rundt hele jordkloden"],
      explanation: "Litosfæren er delt inn i tektoniske plater som beveger seg på den underliggende, plastiske astenosfæren.",
    },
    {
      question: "Hva er forskjellen på oseanisk og kontinental skorpe?",
      options: ["Oseanisk skorpe er tynnere og tettere enn kontinental skorpe", "Kontinental skorpe finnes bare under havet", "De to skorpetypene har nøyaktig samme tetthet og tykkelse over hele jordkloden", "Oseanisk skorpe er tykkere og lettere enn kontinental"],
      explanation: "Oseanisk skorpe er tynn (5–10 km) og tett (basaltisk), mens kontinental skorpe er tykkere (30–70 km) og mindre tett (granittisk).",
    },
    {
      question: "Hva er isostasi?",
      options: ["At litosfæren flyter i likevekt på astenosfæren", "At platene står helt stille", "At fjellkjeder beholder høyden over tid", "At fjell aldri eroderer"],
      explanation: "Isostasi er prinsippet om at litosfæren flyter i likevekt på astenosfæren – lett kontinental skorpe flyter høyere enn tyngre oseanisk skorpe.",
    },
    {
      question: "Hvorfor flyter kontinental skorpe høyere enn oseanisk skorpe?",
      options: ["Kontinental skorpe er mindre tett (lettere)", "De har samme tetthet, men ulik temperatur", "Kontinental skorpe er tyngre og tettere", "Kontinental skorpe er tyngre"],
      explanation: "Fordi kontinental skorpe er mindre tett enn oseanisk skorpe, flyter den høyere på astenosfæren – på samme måte som lette gjenstander flyter høyere i vann.",
    },
    {
      question: "Hva driver i hovedsak bevegelsen av de tektoniske platene?",
      options: ["Konveksjonsstrømmer i mantelen og krefter som slab pull og ridge push", "Månens tiltrekning alene, som drar platene rundt i takt med at månen går i bane", "De kraftige vindene i atmosfæren som blåser over kontinentene og skyver på platene", "Månens tiltrekning alene, som drar i platene og skaper tidevann i jordas indre lag"],
      explanation: "Platene drives av konveksjon i mantelen sammen med slab pull (synkende plater) og ridge push (oppstigning ved midthavsrygger).",
    },
  ],
  "geofag-1-3-3": [
    {
      question: "Hva skjer ved en divergerende plategrense?",
      options: ["To plater beveger seg fra hverandre og ny skorpe dannes", "To plater kolliderer og fjell dannes", "En tettere plate synker ned under en annen og smelter i den varme mantelen under", "En plate synker ned under en annen"],
      explanation: "Ved divergerende grenser trekker platene fra hverandre, magma stiger opp og størkner til ny oseanisk skorpe.",
    },
    {
      question: "Hva er havbunnspredning?",
      options: ["Ny oseanisk skorpe dannes ved midthavsrygger og brer seg utover", "Havbunnen synker ned i mantelen", "Gammel oseanisk skorpe synker ned i mantelen ved dyphavsgraver og smelter der", "Løse sedimenter transporteres ut og dekker gradvis hele havbunnen med tykke lag"],
      explanation: "Havbunnspredning er prosessen der ny oseanisk litosfære dannes ved midthavsrygger og beveger seg bort til begge sider.",
    },
    {
      question: "Hva er et eksempel på en midthavsrygg?",
      options: ["Den midtatlantiske rygg", "Himalaya", "Marianergraven", "San Andreas-forkastningen"],
      explanation: "Den midtatlantiske rygg er en divergerende plategrense der ny havbunn dannes mellom Amerika og Europa/Afrika.",
    },
    {
      question: "Hvordan støtter de magnetiske stripene på havbunnen teorien om havbunnspredning?",
      options: ["De viser symmetriske mønstre der jordens magnetfelt har skiftet over tid", "De viser at havbunnen er like gammel overalt", "De peker konsekvent innover mot land og viser retningen platene beveger seg i", "De er helt tilfeldig fordelt og har derfor ingen sammenheng med havbunnspredning"],
      explanation: "Magnetiske striper er symmetriske om midthavsryggen og registrerer jordens magnetfeltsvekslinger, noe som beviser at ny skorpe stadig dannes ved ryggen.",
    },
    {
      question: "Hva kan dannes når en divergerende grense oppstår inne på et kontinent?",
      options: ["En kontinental rift som over tid kan utvikles til et nytt hav", "En dyphavsgrav som utgjør den dypeste delen av havbunnen langs plategrensa", "En dyp havgrav der den ene platen synker ned under den andre og smelter", "En bue av vulkaner som dannes over en plate som skyves ned i mantelen under"],
      explanation: "En kontinental rift (f.eks. Øst-Afrika-riften) kan over tid utvide seg, fylles med vann og bli til et nytt hav.",
    },
  ],
  "geofag-1-3-4": [
    {
      question: "Hva er subduksjon?",
      options: ["En litosfæreplate synker ned under en annen og ned i mantelen", "To plater glir forbi hverandre", "En kontinentalplate presses opp over en annen og danner høye foldefjell", "Ny litosfære dannes når magma stiger opp og størkner langs en midthavsrygg"],
      explanation: "Subduksjon skjer ved konvergerende grenser der den tetteste platen synker ned under den andre og ned i mantelen.",
    },
    {
      question: "Hva dannes der en oseanisk plate begynner å subdusere under en annen?",
      options: ["En dyphavsgrav", "En midthavsrygg", "En transform forkastning", "En kontinental rift"],
      explanation: "En dyphavsgrav, som den dype Marianergraven, dannes der en plate bøyer seg nedover og begynner å subdusere.",
    },
    {
      question: "Hva skjer når to kontinentale plater kolliderer?",
      options: ["Det dannes høye fjellkjeder, som Himalaya", "Platene glir uten å påvirke hverandre", "Den ene platen synker dypt ned i mantelen og smelter helt opp der", "Den ene synker dypt ned i mantelen"],
      explanation: "Når to kontinentale plater kolliderer, er begge for lette til å subdusere, og skorpa presses sammen og opp til høye fjellkjeder som Himalaya.",
    },
    {
      question: "Hvorfor oppstår det ofte vulkaner ved subduksjonssoner?",
      options: ["Vann frigjort fra den nedsynkende platen senker smeltepunktet og danner magma", "Havvann trenger ned i sprekker og fordamper eksplosivt til vulkanske utbrudd", "Magma stiger fritt opp fordi mantelen alltid er flytende under slike soner", "Friksjonen mellom platene varmer opp berget så mye at det smelter direkte"],
      explanation: "Når den subduserende platen varmes opp, frigjøres vann som senker smeltepunktet i mantelen over, slik at magma dannes og stiger opp som vulkaner.",
    },
    {
      question: "Hva kjennetegner en oseanisk-kontinental konvergens?",
      options: ["Den tette oseaniske platen subduserer under den lettere kontinentale", "Den kontinentale platen subduserer under den oseaniske", "Begge platene smelter og danner helt ny skorpe langs kollisjonssonen", "Den lette kontinentale platen subduserer under den tettere oseaniske platen"],
      explanation: "Den tette oseaniske platen synker ned under den lettere kontinentale platen og danner blant annet vulkaner og fjellkjeder, som Andesfjellene.",
    },
  ],
  "geofag-1-3-5": [
    {
      question: "Hva skjer ved en transform plategrense?",
      options: ["To plater glir horisontalt forbi hverandre langs en forkastning", "En plate synker ned under en annen", "Den ene platen synker ned under den andre og smelter i mantelen", "Ny skorpe dannes når magma størkner mellom platene"],
      explanation: "Ved transforme grenser glir platene horisontalt forbi hverandre, og det dannes verken ny eller ødelegges gammel skorpe.",
    },
    {
      question: "Hva er et kjent eksempel på en transform forkastning?",
      options: ["San Andreas-forkastningen i California", "Den midtatlantiske rygg", "Marianergraven, den dypeste subduksjonssonen i Stillehavet", "Den midtatlantiske rygg der ny havbunn dannes mellom platene"],
      explanation: "San Andreas-forkastningen er en transform grense der Stillehavsplaten og Den nordamerikanske platen glir forbi hverandre, med hyppige jordskjelv.",
    },
    {
      question: "Hva er slab pull?",
      options: ["Gravitasjonskraften fra en kald, tung plate som synker ned i mantelen", "Friksjonskraften fra vinden som drar havoverflaten over platene", "Trykket fra magma som stiger opp og skyver platene fra hverandre", "Tiltrekningen fra månen som løfter litosfæren ved høyvann"],
      explanation: "Slab pull er kraften som oppstår når en kald, tung litosfæreplate synker ned i mantelen og drar resten av platen med seg.",
    },
    {
      question: "Hvorfor er transforme grenser ofte forbundet med jordskjelv?",
      options: ["Spenninger bygges opp når platene låser seg, og frigjøres plutselig", "Havbunnen synker raskt ned og drar platene med seg i et brått fall nedover", "Det dannes store mengder magma som sprenger skorpa der", "Platene smelter sammen langs grensa og river opp berget rundt"],
      explanation: "Når platene glir forbi hverandre, kan de hekte seg fast og bygge opp spenning som plutselig utløses som jordskjelv.",
    },
    {
      question: "Hvilken drivkraft regnes i dag som viktigst for platebevegelsene?",
      options: ["Slab pull fra synkende plater", "Tidevannskreftene", "Erosjon som flytter platene", "Erosjon på land"],
      explanation: "Slab pull, der tunge subduserende plater drar resten av platen med seg, regnes som den viktigste drivkraften bak platebevegelsene.",
    },
  ],
  "geofag-1-4-1": [
    {
      question: "Hva er et magmakammer?",
      options: ["Et underjordisk reservoar fylt med smeltet bergart", "Et størknet lag av lava som dekker vulkansiden", "Selve kraterets åpning der lava og gass slippes ut", "En tett sky av vulkansk aske som stiger opp"],
      explanation: "Et magmakammer er et reservoar av magma, vanligvis 1–10 km under vulkanen, som mater utbruddene.",
    },
    {
      question: "Hva er en caldera?",
      options: ["Et stort krater dannet ved kollaps av vulkantoppen etter et stort utbrudd", "En type tyntflytende lavastrøm som brer seg utover terrenget", "En smal sprekk i bakken der lava siver rolig ut langs siden", "En giftig vulkansk gass som stiger opp fra magmakammeret"],
      explanation: "En caldera er et stort, grytelignende krater som dannes når toppen av vulkanen kollapser etter at magmakammeret er tømt.",
    },
    {
      question: "Hvilken sammenheng er det mellom magmatype og vulkanform?",
      options: ["Tyntflytende magma gir slake skjoldvulkaner, seig magma gir bratte stratovulkaner", "Magmatypen har ingen betydning, formen bestemmes bare av utbruddsmengden", "Seig magma gir alltid flate vulkaner fordi den renner lett utover", "All magma gir samme slake vulkanform uansett hvor seig den er"],
      explanation: "Tyntflytende (basaltisk) magma sprer seg lett og gir slake skjoldvulkaner, mens seig (silikatrik) magma bygger bratte, eksplosive stratovulkaner.",
    },
    {
      question: "Hva kjennetegner en skjoldvulkan?",
      options: ["Slake sider og tyntflytende lava", "Bratte sider og eksplosive utbrudd", "At den bare slipper ut aske", "At den aldri har utbrudd"],
      explanation: "En skjoldvulkan har slake sider fordi tyntflytende basaltlava renner langt før den størkner, slik som vulkanene på Hawaii.",
    },
    {
      question: "Hvorfor er stratovulkaner ofte mer farlige enn skjoldvulkaner?",
      options: ["Seig, gassrik magma gir kraftige, eksplosive utbrudd", "De slipper bare ut vanndamp", "De slipper bare ut ufarlig vanndamp og litt lett aske", "De er alltid små og bygger seg langsomt opp av tynn lava"],
      explanation: "Stratovulkaner har seig, gassrik magma som bygger opp trykk og gir eksplosive utbrudd med aske og pyroklastiske strømmer.",
    },
  ],
  "geofag-1-4-2": [
    {
      question: "Hva kjennetegner et effusivt utbrudd?",
      options: ["Tyntflytende lava renner rolig ut uten store eksplosjoner", "Voldsomme eksplosjoner med aske", "Ingenting kommer ut fordi den seige magmaen tetter kanalen igjen", "Voldsomme eksplosjoner slynger aske og bergartsfragmenter høyt opp"],
      explanation: "Et effusivt utbrudd er ikke-eksplosivt: tyntflytende lava strømmer rolig ut fordi gassene slipper lett ut av den lavviskøse magmaen.",
    },
    {
      question: "Hva er en pyroklastisk strøm?",
      options: ["En dødelig blanding av varm gass, aske og bergartsfragmenter", "En sky av vanndamp og regn som dannes over kraterets åpning", "En rolig lavastrøm av tyntflytende basalt som brer seg langsomt", "En type løst vulkansk sediment som avsettes rundt vulkanen"],
      explanation: "En pyroklastisk strøm er en svært varm og rask blanding av gass, aske og bergartsfragmenter som raser nedover vulkansiden – ekstremt farlig.",
    },
    {
      question: "Hva er tefra?",
      options: ["Fragmenter av størknet magma som slynges ut i lufta, fra aske til blokker", "Vulkansk gass som frigjøres og stiger opp under utbruddet", "Smeltet bergart som fortsatt ligger nede i magmakammeret", "Tyntflytende lava som renner rolig nedover vulkansiden"],
      explanation: "Tefra er en samlebetegnelse på alle faste partikler som slynges ut under et utbrudd, fra fin aske til store bomber og blokker.",
    },
    {
      question: "Hvordan kan forskere forutsi vulkanutbrudd?",
      options: ["Ved å overvåke jordskjelv, gassutslipp og oppsvulming av bakken", "Det er helt umulig å forutsi ettersom utbrudd skjer tilfeldig", "Ved å studere formen på skyene som samler seg over vulkanen", "Ved å måle temperaturen i havet utenfor vulkanområdet"],
      explanation: "Forskere overvåker små jordskjelv, endringer i gassutslipp og oppsvulming av bakken (deformasjon) som varsler at magma er på vei opp.",
    },
    {
      question: "Hvorfor gir gassrik, seig magma mer eksplosive utbrudd?",
      options: ["Gassene klarer ikke slippe lett ut og bygger opp trykk", "Seig magma inneholder ingen gass", "Trykket i magmaen forsvinner av seg selv før utbruddet starter", "Seig magma inneholder ingen gass og bygger derfor aldri opp trykk"],
      explanation: "I seig magma sitter gassene fast og bygger opp stort trykk, som til slutt utløses i kraftige eksplosjoner.",
    },
  ],
  "geofag-1-4-3": [
    {
      question: "Hva er et jordskjelv?",
      options: ["Plutselig frigjøring av opplagret elastisk energi i jordskorpen", "En kraftig bevegelse av havstrømmer langs kontinentalsokkelen", "En langsom heving av land etter at innlandsisen har smeltet bort", "En type stillferdig vulkanutbrudd der lava renner rolig ut"],
      explanation: "Et jordskjelv oppstår når spenninger i jordskorpen overskrider bergartens styrke og opplagret energi frigjøres som seismiske bølger.",
    },
    {
      question: "Hva er forskjellen på P-bølger og S-bølger?",
      options: ["P-bølger er trykkbølger som går raskest; S-bølger er skjærbølger som ikke går gjennom væske", "P-bølger går ikke gjennom fast stoff, bare gjennom flytende kjerne", "De er helt identiske og går like fort gjennom alle materialer", "S-bølger er raskest og går gjennom både fast stoff og væske"],
      explanation: "P-bølger (trykkbølger) går raskest og gjennom både fast og flytende stoff, mens S-bølger (skjærbølger) er tregere og går ikke gjennom væske.",
    },
    {
      question: "Hva kalles punktet inne i jorden der et jordskjelv starter?",
      options: ["Hyposenteret (fokus)", "Kraterets midtpunkt", "Episenteret på overflaten", "Magnitudepunktet"],
      explanation: "Hyposenteret (fokus) er punktet i dypet der bruddet starter. Episenteret er punktet på overflaten rett over hyposenteret.",
    },
    {
      question: "Hva måler momentmagnitudeskalaen?",
      options: ["Den totale energien som frigjøres i et jordskjelv", "Hvor lenge skjelvet varte i sekunder alene", "Hvor lenge selve rystelsene varte målt i sekunder alene", "Temperaturen i bakken langs bruddsonen under selve skjelvet"],
      explanation: "Momentmagnitudeskalaen (en videreutvikling av Richters skala) angir den frigjorte energien; hvert trinn tilsvarer en stor økning i energi.",
    },
    {
      question: "Hvordan kan seismografer fra flere stasjoner brukes til å finne episenteret?",
      options: ["Ved å sammenligne ankomsttidene for P- og S-bølger fra flere stasjoner", "Ved å måle endringer i lufttrykket over det rammede området", "Ved å telle hvor mange etterskjelv hver stasjon registrerer", "Ved å se hvor mye det regner i timene rett etter skjelvet"],
      explanation: "Forskjellen i ankomsttid mellom P- og S-bølger gir avstanden til skjelvet fra hver stasjon; med tre stasjoner kan episenteret triangulers.",
    },
  ],
  "geofag-1-4-4": [
    {
      question: "Hva er en tsunami?",
      options: ["En serie lange bølger forårsaket av stor forflytning av vann", "En form for tidevann som følger månens gang rundt jorden", "En vanlig vindbølge som bygges opp av kraftig kuling", "En sterk havstrøm som fører varmt vann langs kysten"],
      explanation: "En tsunami er lange bølger som oftest skyldes undersjøiske jordskjelv, skred eller vulkanutbrudd som plutselig forflytter store vannmasser.",
    },
    {
      question: "Hva er den vanligste årsaken til tsunamier?",
      options: ["Undersjøiske jordskjelv", "Uvanlig høyt lufttrykk", "Kraftig og vedvarende vind", "Månens skiftende faser"],
      explanation: "De fleste tsunamier utløses av undersjøiske jordskjelv ved subduksjonssoner som plutselig hever eller senker havbunnen.",
    },
    {
      question: "Hvordan oppfører en tsunami seg når den nærmer seg grunt vann nær land?",
      options: ["Den bremser ned, og bølgehøyden øker kraftig", "Den blir lavere og raskere", "Den endrer verken høyde eller fart når den når land", "Den blir mye lavere og samtidig raskere inn mot kysten"],
      explanation: "På dypt vann har tsunamien lav høyde og høy fart; når den når grunt vann, bremser den og bølgeenergien presses opp i høyden.",
    },
    {
      question: "Hvorfor er en tsunami farlig selv om bølgen virker lav ute på dypt hav?",
      options: ["Den har enorm energi og bølgelengde som bygger seg opp ved kysten", "Den synker raskt sammen og mister all energien før den når land", "Den fører med seg giftige vulkanske gasser inn over land", "Den er like farlig ute på åpent hav som den er inne ved kysten"],
      explanation: "På åpent hav er tsunamien knapt merkbar, men dens enorme energi og lange bølgelengde gjør at vannmassen tårner seg opp og flommer langt inn over land.",
    },
    {
      question: "Hva er et viktig sikkerhetstiltak når et tsunamivarsel utløses?",
      options: ["Evakuere til høyereliggende områder bort fra kysten", "Gå ned mot stranden for å se på", "Bli værende i lavtliggende bygninger nær kysten i sikkerhet", "Gå ned mot stranden for å se hvor langt vannet trekker seg ut"],
      explanation: "Ved tsunamivarsel skal man straks evakuere bort fra kysten til høyereliggende terreng, og et tegn på fare er at vannet trekker seg uvanlig langt ut.",
    },
  ],
  "geofag-1-4-5": [
    {
      question: "Hva er Ildringen (Ring of Fire)?",
      options: ["En sone rundt Stillehavet med intens vulkansk og seismisk aktivitet", "En bestemt type kjegleformet vulkan som finnes ved Stillehavet", "En varm havstrøm som sirkulerer i det nordlige Atlanterhavet", "En stor ørken i det indre av Afrika med vulkanske bergarter"],
      explanation: "Ildringen er en hesteskoformet sone rundt Stillehavet med svært mange vulkaner og jordskjelv, knyttet til plategrenser og subduksjon.",
    },
    {
      question: "Hvordan beregnes risiko ofte i geofag?",
      options: ["Fare × sårbarhet × eksponering", "Bare ut fra antall vulkaner", "Fare delt på avstand", "Sannsynlighet minus konsekvens"],
      explanation: "Risiko uttrykkes ofte som sannsynligheten for en hendelse multiplisert med konsekvensene, gjerne som fare × sårbarhet × eksponering.",
    },
    {
      question: "Hvorfor er Ildringen så geologisk aktiv?",
      options: ["Den følger plategrenser med mye subduksjon rundt Stillehavet", "Det er helt tilfeldig at aktiviteten er samlet nettopp der", "Havvannet er uvanlig varmt der og varmer opp skorpa nedenfra", "Det blåser spesielt mye vind som setter litosfæren i bevegelse"],
      explanation: "Ildringen følger grensene der Stillehavsplaten møter andre plater, med utstrakt subduksjon som gir både vulkanisme og jordskjelv.",
    },
    {
      question: "Hva menes med beredskap mot naturfarer?",
      options: ["Planer, varslingssystemer og tiltak for å redusere skade ved hendelser", "Å bygge nærmest mulig vulkaner", "Prognoser for hvor sjeldne slike hendelser er, uten planer for konkrete tiltak", "Forsikringsordninger som dekker økonomisk tap, men ikke reduserer selve skaden"],
      explanation: "Beredskap omfatter overvåking, varsling, evakueringsplaner, byggekrav og øvelser som reduserer skade og redder liv når en hendelse inntreffer.",
    },
    {
      question: "Hvordan kan god arealplanlegging redusere naturfarerisiko?",
      options: ["Ved å unngå bygging i særlig utsatte områder som skredsoner og flomsletter", "Ved å bygge tettest mulig i faresoner", "Ved å fjerne skog og vegetasjon slik at man får bedre oversikt over faresonene", "Ved å bygge så tett og høyt som mulig, uansett om grunnen ligger i en skredsone"],
      explanation: "Ved å kartlegge faresoner og unngå utbygging i skred-, flom- og rasutsatte områder reduseres eksponeringen og dermed risikoen.",
    },
  ],
  "geofag-1-5-1": [
    {
      question: "Hva er fysisk (mekanisk) forvitring?",
      options: ["Nedbrytning av bergarter uten endring i kjemisk sammensetning", "Oppløsning av mineraler i syre", "Full oppsmelting av bergarten til magma dypt nede i jordskorpa", "Fjerning og transport av løsmateriale bort fra opphavsstedet med elver"],
      explanation: "Fysisk forvitring bryter bergarter opp i mindre biter gjennom fysiske prosesser, uten at den kjemiske sammensetningen endres.",
    },
    {
      question: "Hvordan virker frostsprengning?",
      options: ["Vann fryser i sprekker, utvider seg og sprenger bergarten", "Planterøtter løser opp stein", "Sterk solvarme utvider ytterste lag så skall flasser av overflaten", "Sur nedbør reagerer kjemisk med mineralene og løser dem gradvis opp"],
      explanation: "Når vann fryser, utvider det seg ca. 9 %. I sprekker skaper dette et trykk som over tid sprenger bergarten i stykker.",
    },
    {
      question: "Hva er skallforvitring (eksfoliasjon)?",
      options: ["Tynne skall av bergart flasser av overflaten", "Bergarten løses opp i vann", "Planterøtter vokser inn i sprekker og sprenger fjellet fra hverandre", "Røtter sprenger fjell"],
      explanation: "Skallforvitring skjer når ytterste lag av bergarten utvider og trekker seg sammen ulikt fra innsiden, slik at tynne skall flasser av.",
    },
    {
      question: "I hvilket klima er frostsprengning særlig viktig?",
      options: ["Klima med hyppige vekslinger rundt frysepunktet", "Områder uten temperaturvariasjon", "Tørt ørkenklima nesten helt uten nedbør og vann i sprekkene i berget", "Tørre ørkenklima uten vann"],
      explanation: "Frostsprengning er mest aktiv der temperaturen ofte svinger rundt 0 °C, slik at vann gjentatte ganger fryser og tiner i sprekkene.",
    },
    {
      question: "Hva er trykkavlastning?",
      options: ["Bergarter dannet under høyt trykk ekspanderer når overliggende lag eroderes bort", "Vann trenger inn i sprekker, fryser og sprenger bergarten gradvis fra hverandre", "Mineraler i bergarten reagerer med oksygen og brytes ned til rustfarget masse", "Overliggende ismasser presser bergartene sammen så de sprekker under trykket"],
      explanation: "Når dyptliggende bergarter som ble dannet under høyt trykk eksponeres ved overflaten, ekspanderer de og sprekker opp i skall parallelt med overflaten.",
    },
  ],
  "geofag-1-5-2": [
    {
      question: "Hva er kjemisk forvitring?",
      options: ["Nedbrytning av bergarter gjennom kjemiske reaksjoner som endrer mineralene", "Oppsmelting av bergarter til magma som senere størkner til ny bergart", "Mekanisk oppsprekking av bergarter uten at mineralene endres", "Fjerning og transport av forvitret materiale med elver, is og vind"],
      explanation: "Kjemisk forvitring bryter ned bergarter ved kjemiske reaksjoner med vann, syrer eller gasser, slik at mineralenes sammensetning endres.",
    },
    {
      question: "Hva er hydrolyse i forbindelse med forvitring?",
      options: ["Silikatmineraler reagerer med vann og danner leirmineraler", "Mineraler reagerer med oksygen og ruster", "Kalkstein reagerer med karbonsyre i regnvann og løses gradvis helt opp", "Vann trenger inn i bergsprekker og fryser slik at berget sprenges i biter"],
      explanation: "Ved hydrolyse reagerer silikatmineraler som feltspat med vann og hydroniumioner og brytes ned til leirmineraler.",
    },
    {
      question: "Hvilken bergart er særlig utsatt for oppløsning og danner karstlandskap?",
      options: ["Kalkstein", "Granitt", "Basalt, en mørk dagbergart av størknet lava som gir avrundede landformer", "Basalt"],
      explanation: "Kalkstein løses lett opp i surt vann (karbonsyre), og dette danner karstlandskap med huler, grotter og synkehull.",
    },
    {
      question: "Hva skjer ved oksidasjon av jernholdige mineraler?",
      options: ["De reagerer med oksygen og får rødbrune rustfarger", "De løses helt opp i vann", "De trekker til seg vann som fryser i sprekker og sprenger dem i biter", "De løses fullstendig opp i surt regnvann"],
      explanation: "Oksidasjon er en kjemisk reaksjon der jernholdige mineraler reagerer med oksygen og «ruster», noe som gir karakteristiske rødbrune farger.",
    },
    {
      question: "Hvorfor går kjemisk forvitring raskere i varmt og fuktig klima?",
      options: ["Høy temperatur og mye vann øker reaksjonshastigheten", "Reaksjonene er uavhengige av klima", "Tørt klima gir raskest kjemisk forvitring", "Kulde fremmer kjemiske reaksjoner"],
      explanation: "Kjemiske reaksjoner går raskere ved høy temperatur og rikelig tilgang på vann, derfor er kjemisk forvitring mest intens i tropiske, fuktige strøk.",
    },
  ],
  "geofag-1-5-3": [
    {
      question: "Hva er biologisk forvitring?",
      options: ["Nedbrytning av bergarter forårsaket av levende organismer", "Transport av sedimenter med vind", "Fjerning og transport av løsmateriale med vind bort fra opphavsstedet", "Oppsmelting av bergarter til magma nede i jordas indre lag over lang tid"],
      explanation: "Biologisk forvitring er nedbrytning forårsaket av organismer, og omfatter både mekaniske (rotsprengning) og kjemiske (syrer) prosesser.",
    },
    {
      question: "Hva er rotsprengning?",
      options: ["Planterøtter vokser inn i sprekker og utvider dem", "Røtter løser mineraler i syre", "Røtter skiller ut syrer som løser opp mineralene kjemisk i bergoverflaten", "Lav løser opp bergoverflaten"],
      explanation: "Rotsprengning er en mekanisk biologisk forvitring der røtter vokser inn i sprekker og over tid utvider og sprenger bergarten.",
    },
    {
      question: "Hvordan bidrar lav til biologisk forvitring?",
      options: ["Lavsyrer løser mineraler i bergoverflaten", "Lav transporterer sedimenter", "Lav smelter berget med varmen sin", "Lav fryser vann i sprekker"],
      explanation: "Lav skiller ut organiske syrer (lavsyrer) som løser opp mineraler i bergoverflaten og dermed forvitrer bergarten kjemisk.",
    },
    {
      question: "Hvorfor er biologisk forvitring viktig for jordsmonndannelse?",
      options: ["Den bryter ned berg og blander inn organisk materiale", "Den hindrer planter i å vokse", "Den hindrer planterøtter i å trenge ned og etablere seg i berggrunnen", "Den vasker bort all løsjord slik at bare bart fjell blir igjen i området"],
      explanation: "Biologisk forvitring bryter ned berggrunnen og tilfører organisk materiale, noe som er avgjørende for dannelsen av fruktbart jordsmonn.",
    },
    {
      question: "Hvordan henger biologisk, fysisk og kjemisk forvitring sammen?",
      options: ["De forsterker hverandre, f.eks. sprekker fra røtter slipper inn vann og syrer", "De motvirker hverandre helt, slik at kjemisk forvitring stopper den fysiske", "De opptrer aldri samtidig og virker kun hver for seg i ulike klimasoner", "Bare én forvitringstype kan være aktiv om gangen på samme bergoverflate"],
      explanation: "Prosessene samvirker: rotsprengning lager sprekker som gir vann og syrer tilgang, slik at kjemisk forvitring kan virke dypere og raskere.",
    },
  ],
  "geofag-1-5-4": [
    {
      question: "Hva er forskjellen på forvitring og erosjon?",
      options: ["Forvitring bryter ned materiale på stedet; erosjon fjerner og transporterer det", "Erosjon bryter ned materiale på stedet, mens forvitring frakter det videre", "Forvitring omfatter bare vann, mens erosjon bare gjelder vind og isbreer", "De betyr i praksis det samme og brukes om hverandre om samme prosess"],
      explanation: "Forvitring bryter ned bergarter der de ligger, mens erosjon er fjerning og transport av det forvitrede materialet bort fra opphavsstedet.",
    },
    {
      question: "Hva er abrasjon?",
      options: ["Mekanisk slitasje når transporterte partikler sliper mot underlaget", "Kjemisk oppløsning av mineraler", "Kjemisk oppløsning av mineraler når surt vann reagerer med bergoverflaten", "Avsetning av transportert materiale når strømhastigheten avtar under en terskel"],
      explanation: "Abrasjon er mekanisk sliping der partikler som fraktes av vann, is eller vind sliper mot berggrunnen og andre partikler.",
    },
    {
      question: "Hva er saltasjon?",
      options: ["Partikler hopper langs overflaten under transport", "Stein faller rett ned fra en fjellvegg", "Løse sedimenter presses sammen og sementeres til fast sedimentær bergart", "Sedimenter presses sammen til bergart"],
      explanation: "Saltasjon er en transportmekanisme der partikler, særlig sand, hopper langs overflaten når de løftes og faller ned igjen og sparker opp nye korn.",
    },
    {
      question: "Hvilke faktorer styrer om en partikkel transporteres eller avsettes?",
      options: ["Strømhastighet og partikkelstørrelse", "Bare partikkelens farge", "Kun lufttrykket over vannflaten", "Lufttrykket alene"],
      explanation: "Når strømmen er sterk nok, holdes partikler i bevegelse; når hastigheten avtar under en terskel, avsettes partiklene – grovest materiale først.",
    },
    {
      question: "Hva er massebevegelse?",
      options: ["Forflytning av jord og bergmasser nedover en skråning under tyngdekraften", "Vann som trenger inn i fjellsprekker og fryser slik at berget sprenges", "Transport av sand og støv med vinden over lange avstander i tørre områder", "Avsetning av finkornede sedimenter lagvis på havbunnen over lang tid"],
      explanation: "Massebevegelse er bevegelse av løsmasser og berg nedover en skråning på grunn av gravitasjon, og omfatter steinsprang, skred og utglidninger.",
    },
  ],
  "geofag-1-6-1": [
    {
      question: "Hva er plukking (quarrying) som glasial erosjonsprosess?",
      options: ["Smeltevann fryser i sprekker, og isen river løs bergblokker når den beveger seg", "Isen som ligger over berget sliper og polerer det glatt der den beveger seg", "Elver som graver seg nedover og former dype V-daler gjennom fjellandskapet", "Vind som løfter og frakter sand og finmateriale bort fra berggrunnen"],
      explanation: "Ved plukking trenger smeltevann inn i sprekker, fryser, og når breen beveger seg, rives bergblokker løs og fraktes med isen.",
    },
    {
      question: "Hva er en botn (cirkus)?",
      options: ["En amfiteaterformet nisje i fjellsiden dannet ved glasial erosjon", "En rygg av morenemateriale", "En V-formet dal med bratte sider gravd ut av en elv gjennom fjellet", "En lang og smal havbukt som strekker seg dypt inn i landet mellom fjell"],
      explanation: "En botn er en skålformet fordypning med bratt bakvegg, dannet der en isbre eroderte ut en nisje i fjellsiden, ofte med et botntjern.",
    },
    {
      question: "Hvordan dannes en fjord?",
      options: ["En isbre eroderer en dal under havnivå, som senere fylles med sjøvann", "En elv graver seg nedover og former en smal V-dal ned mot havnivået", "Vinden former over lang tid en dyp og smal grøft langs kysten av landet", "Bølger og havstrømmer eroderer kystlinjen og skjærer inn i fjellet"],
      explanation: "En fjord dannes når en isbre eroderer en dyp dal helt under havnivå; etter at isen smeltet, fylles dalen med sjøvann.",
    },
    {
      question: "Hva er typisk for en U-dal?",
      options: ["Bratte sider og flat bunn, formet av en isbre", "V-formet tverrsnitt formet av en elv", "Et V-formet tverrsnitt med spiss bunn, gravd ut av en elv over lang tid", "En smal sprekk i fjellet"],
      explanation: "En isbre eroderer en dal til et bredt U-formet tverrsnitt med bratte sider og flat bunn, i motsetning til elvens V-dal.",
    },
    {
      question: "Hvorfor er det norske landskapet sterkt preget av glasial erosjon?",
      options: ["Gjentatte istider har formet fjorder, U-daler og botner", "Bare elver har formet landskapet", "Bare rennende elver har formet landskapet, uten påvirkning fra isbreer", "Vinderosjon har vært den dominerende prosessen bak dagens norske landformer"],
      explanation: "Gjentatte istider med store innlandsiser eroderte Norges landskap kraftig og skapte de karakteristiske fjordene, U-dalene og botnene.",
    },
  ],
  "geofag-1-6-2": [
    {
      question: "Hva er morene?",
      options: ["Usortert materiale transportert og avsatt av en isbre", "Sortert sand avsatt av smeltevann", "Godt sortert sand og grus avsatt lagvis av smeltevann foran en isbre", "En hard, fast bergart dannet dypt i jordskorpa under høyt trykk og varme"],
      explanation: "Morene er usortert materiale (til) avsatt av en isbre, med alle kornstørrelser fra fineste leire til store blokker blandet sammen.",
    },
    {
      question: "Hva er en endemorene?",
      options: ["En rygg av morenemateriale avsatt ved brefronten", "En lang grusrygg fra smeltevann", "En lang, buktende grusrygg avsatt av smeltevann i en tunnel under breen", "En dyp, langstrakt innsjø gravd av breen"],
      explanation: "En endemorene markerer hvor brefronten lå over tid, og består av morenemateriale skjøvet sammen ved isens ytterkant.",
    },
    {
      question: "Hva er en esker?",
      options: ["En rygg av sortert sand og grus avsatt av smeltevann i en tunnel under isen", "En glattpolert bergflate med parallelle skuringsstriper etter isbevegelsen", "En rygg av usortert morenemateriale skjøvet sammen ved selve brefronten", "En amfiteaterformet nisje i fjellsiden med et lite botntjern på bunnen"],
      explanation: "En esker er en lang, smal rygg av sortert sand og grus avsatt av smeltevann i en istunnel; den blir stående igjen som en rygg når isen smelter.",
    },
    {
      question: "Hva er forskjellen på morene og esker når det gjelder sortering?",
      options: ["Morene er usortert, esker er sortert av smeltevann", "Morene er sortert, esker er usortert", "Esker er usortert, morene er sortert av smeltevann", "Begge er godt sortert etter kornstørrelse av smeltevann"],
      explanation: "Morene avsettes direkte av isen og er usortert, mens esker avsettes av rennende smeltevann og er derfor sortert etter kornstørrelse.",
    },
    {
      question: "Hva er en drumlin?",
      options: ["En strømlinjeformet haug av morenemateriale formet under en bevegelig isbre", "En strømlinjeformet vulkansk kjegle bygd opp av lavastrømmer", "En strømlinjeformet sanddyne formet av vind i tørre områder", "En dyp isbre-eroderet fjord fylt med saltvann fra havet"],
      explanation: "En drumlin er en strømlinjeformet morenehaug med bratt støtside mot der isen kom fra og slak leside, formet under den bevegelige breen.",
    },
  ],
  "geofag-1-6-3": [
    {
      question: "Hva betyr begrepet fluvial?",
      options: ["Som har med elver og rennende vann å gjøre", "Som har med bølger og kysterosjon å gjøre", "Som har med vind og eoliske prosesser å gjøre", "Som har med isbreer og glasial erosjon å gjøre"],
      explanation: "Fluvial betyr «som har med elver å gjøre»; fluviale prosesser og landformer er knyttet til rennende vann.",
    },
    {
      question: "Hvordan dannes en V-dal?",
      options: ["Elven graver seg nedover (dybdeerosjon) mens dalsidene forvitrer", "Bølger og kyststrømmer former en bred bukt i strandsonen", "En isbre eroderer en bred U-formet dal med bratte sider", "Vind blåser ut løsmasser og lager en langsmal grøft"],
      explanation: "En V-dal får sin form fordi elven graver seg nedover ved dybdeerosjon, mens dalsidene forvitrer og raser ned i en V-form.",
    },
    {
      question: "Hva er en meander?",
      options: ["En sving eller bue i et elveløp med lav gradient", "En grusrygg som smeltevann under isen har lagt igjen i landskapet", "En bratt foss der elva har stor gradient og fossefall", "En innsjø som er dannet ved erosjon fra en bevegelig is"],
      explanation: "En meander er en sving i elveløpet som dannes når elven har lav gradient og eroderer i yttersvingen mens den avsetter i innersvingen.",
    },
    {
      question: "Hvor avsetter en elv mest materiale, og hva dannes der?",
      options: ["Ved utløpet der farten avtar – et elvedelta", "I yttersvingen av en meander, der det bygges opp en banke av grus", "I yttersvingen av en meander der strømmen er raskest", "Høyt oppe i fjellet der elva starter med bratt gradient"],
      explanation: "Når elven når et hav eller en innsjø, bremser den, mister transportkraft og avsetter sedimenter som bygger opp et elvedelta.",
    },
    {
      question: "Hvorfor eroderer elven mest i yttersvingen av en meander?",
      options: ["Vannet strømmer raskest der og graver i bredden", "Elven renner oppover der, og motstrømmen river løs materiale fra bredden", "Elven renner tregest der og bygger opp banker av grus", "Det avsettes mest materiale der fordi farten er lavest"],
      explanation: "I yttersvingen er strømmen raskest og eroderer bredden, mens vannet i innersvingen er tregere og avsetter sand og grus.",
    },
  ],
  "geofag-1-6-4": [
    {
      question: "Hva er bølgeerosjon?",
      options: ["Nedbrytning av kysten forårsaket av bølger", "Erosjon utført av isbreer", "Nedbrytning av landskapet utført av bevegelige isbreer", "Nedbrytning av dalsider ved elveerosjon oppe i fjellet"],
      explanation: "Bølgeerosjon bryter ned kysten gjennom hydraulisk kraft og korrasjon (sliping med sand og stein som bølgene fører med seg).",
    },
    {
      question: "Hvilken transportmekanisme dominerer dannelsen av sanddyner?",
      options: ["Vindtransport av sand (eolisk prosess)", "Glasial transport av blokker", "Elvetransport og avsetning av finkornet leire og silt", "Bølgetransport av stein"],
      explanation: "Sanddyner dannes ved eoliske (vinddrevne) prosesser der vinden frakter og avsetter sand, ofte gjennom saltasjon.",
    },
    {
      question: "Hva er en strandflate?",
      options: ["En flat berggrunnsoverflate dannet ved langvarig bølgeerosjon langs kysten", "En bratt fjellvegg som er dannet ved glasial erosjon", "En sanddyne i innlandet formet av vind over lang tid", "En langstrakt morenerygg avsatt foran en isbrekant"],
      explanation: "Strandflaten er en flat berggrunnsoverflate langs kysten dannet ved langvarig bølgeerosjon, tydelig langs deler av norskekysten.",
    },
    {
      question: "Hva er en eolisk landform?",
      options: ["En landform skapt av vind, som sanddyner", "En landform skapt av vulkaner", "En landform skapt av is, som en U-dal eller botn", "En landform skapt av vulkaner, som en kjegle av lava"],
      explanation: "Eoliske landformer er formet av vind. Typiske eksempler er sanddyner og vinderoderte overflater i tørre områder.",
    },
    {
      question: "Hvorfor er kysten et område med både erosjon og avsetning?",
      options: ["Bølger og strøm river løs materiale ett sted og avsetter det et annet", "Kysten endres nesten aldri fordi berggrunnen er så motstandsdyktig", "Det skjer bare avsetning ved kysten der materialet samles opp", "Det skjer bare erosjon ved kysten fordi bølgene bryter ned"],
      explanation: "Bølger og kyststrømmer eroderer utsatte partier og transporterer materialet til mer beskyttede områder der det avsettes som strender og banker.",
    },
  ],
  "geofag-1-6-5": [
    {
      question: "Hva er kvartærtiden?",
      options: ["Den geologiske perioden fra 2,6 millioner år siden til i dag, med istidene", "En lang, sammenhengende periode helt uten is og istider på jorda", "Tiden da dinosaurene levde og hersket på jorden, i mesozoikum", "Perioden helt i begynnelsen da jorden og skorpen ble dannet"],
      explanation: "Kvartærtiden strekker seg fra 2,6 millioner år siden til i dag og deles i pleistocen (istidene) og holocen (dagens mellomistid).",
    },
    {
      question: "Hva er isostatisk landhevning?",
      options: ["Jordskorpen stiger fordi den tunge innlandsisen smeltet", "Havet stiger over land når is smelter og tilfører vann", "Land synker sakte ned under vekten av avsatte sedimenter", "Fjellkjeder presses nedover under vekten av tung innlandsis"],
      explanation: "Da den tunge innlandsisen smeltet, begynte jordskorpen å stige igjen (isostatisk landhevning) fordi vekten ble fjernet.",
    },
    {
      question: "Hvorfor er Norges landskap så preget av istidene?",
      options: ["Innlandsisen eroderte fjorder og daler og avsatte løsmasser", "Landskapet er uendret siden jorden ble dannet", "Norge har bare hatt elver som gravde ut dalene ved dybdeerosjon", "Vind og eoliske prosesser har formet hele det norske landskapet"],
      explanation: "Gjentatte istider med store innlandsiser eroderte landskapet kraftig og etterlot fjorder, U-daler, botner og morenelandskap.",
    },
    {
      question: "Hva skjer når landhevning og havnivåendringer virker samtidig?",
      options: ["Den relative kystlinjen endres avhengig av hva som dominerer", "Ingenting skjer med kystlinjen", "Havet forsvinner helt fordi landhevningen alltid er sterkest av de to", "Landet synker alltid raskere enn havnivået stiger"],
      explanation: "Den relative kystlinjen avhenger av balansen mellom landhevning (land opp) og havnivåstigning (vann opp); i Norge har landhevningen ofte dominert.",
    },
    {
      question: "Hvilke spor etter høyere havnivå finner vi mange steder langs norskekysten?",
      options: ["Gamle strandlinjer og marine avsetninger over dagens havnivå", "Fossile korallrev avsatt i varmt hav på de høyeste toppene", "Vulkanske kratere og størknede lavastrømmer høyt over havnivå", "Sanddyner dannet av vind som nå ligger oppe i fjellsidene"],
      explanation: "Gamle strandlinjer og marine leiravsetninger som nå ligger over havnivå, vitner om at havet sto høyere før landet hevet seg etter istiden.",
    },
  ],
  "geofag-1-7-1": [
    {
      question: "Hva er en klimafaktor?",
      options: ["En geografisk eller fysisk egenskap som påvirker klimaet på et sted", "Et måleinstrument som brukes til å registrere temperatur og nedbør", "En enkelt værhendelse, som en storm eller et regnskyll en dag", "En bestemt type sky, for eksempel cumulus eller cirrus-skyer"],
      explanation: "Klimafaktorer er forhold som breddegrad, høyde over havet, avstand til hav og havstrømmer som bestemmer klimaet på et sted.",
    },
    {
      question: "Hvordan påvirker breddegrad temperaturen?",
      options: ["Lav solvinkel mot polene sprer energien over et større areal og gir lavere temperatur", "Breddegrad har egentlig ingen betydning for temperaturfordelingen på jorda", "Høye breddegrader nær polene får den mest konsentrerte solenergien", "Polene mottar mest direkte og loddrett sollys gjennom hele året"],
      explanation: "Nær ekvator treffer sollyset nesten loddrett (høy solvinkel) og er konsentrert, mens mot polene treffer det skrått og sprer energien over et større areal.",
    },
    {
      question: "Hva er kontinentalitet?",
      options: ["Graden av innlandsklima med store temperaturforskjeller mellom sommer og vinter", "Den totale mengden nedbør som faller i et område i løpet av året", "Høyde over havet som avgjør hvor kaldt det blir i høyfjellet", "Nærhet til havet som gir et stabilt og utjevnet kystklima"],
      explanation: "Høy kontinentalitet (langt fra hav) gir store temperaturforskjeller mellom sommer og vinter og lav luftfuktighet, mens kystklima er mer stabilt.",
    },
    {
      question: "Hva er en regnskygge?",
      options: ["Et tørt område på lesiden av en fjellkjede", "Et område med ekstra mye regn", "Et område på losiden som får ekstra mye orografisk nedbør", "Et fuktig område nær ekvator med rikelig nedbør hele året"],
      explanation: "På losiden av en fjellkjede avgir luft nedbør når den stiger og kjøles; på lesiden synker den tørre lufta ned og gir lite nedbør – en regnskygge.",
    },
    {
      question: "Hvordan kan en varm havstrøm påvirke klimaet langs en kyst?",
      options: ["Den gir mildere klima enn breddegraden skulle tilsi", "Den har ingen effekt på klimaet", "Den gjør kysten mye kaldere enn breddegraden skulle tilsi", "Den har egentlig ingen målbar effekt på klimaet langs kysten"],
      explanation: "Varme havstrømmer som Den nordatlantiske strøm fører varmt vann nordover og gir Norge et mildere klima enn breddegraden alene skulle tilsi.",
    },
  ],
  "geofag-1-7-2": [
    {
      question: "Hva er solkonstanten?",
      options: ["Mengden solenergi som treffer 1 m² vinkelrett på solstrålene utenfor atmosfæren, ca. 1361 W/m²", "Andelen av innkommende sollys som reflekteres tilbake fra jordoverflaten", "Jordens globale gjennomsnittstemperatur målt ved havnivå gjennom året", "Den totale mengden CO₂ og andre klimagasser i atmosfæren målt i ppm"],
      explanation: "Solkonstanten er energimengden (ca. 1361 W/m²) som treffer en flate vinkelrett på solstrålene like utenfor jordens atmosfære.",
    },
    {
      question: "Hva er albedo?",
      options: ["Andelen innkommende solstråling som reflekteres tilbake til verdensrommet", "Mengden langbølget varmestråling som jorden sender ut mot verdensrommet om natten", "Den totale mengden nedbør som faller i et område i løpet av et år", "Lufttrykket ved havnivå målt i hektopascal på en gitt værstasjon"],
      explanation: "Albedo er refleksjonsevnen til en overflate. Snø og is har høy albedo (reflekterer mye), mens mørke hav og skog har lav albedo.",
    },
    {
      question: "Hvilken overflate har høyest albedo?",
      options: ["Snø og is", "Mørkt hav", "Tett skog", "Asfalt"],
      explanation: "Snø og is reflekterer det meste av sollyset (høy albedo), mens mørke flater som hav og skog absorberer mer og har lav albedo.",
    },
    {
      question: "Hva innebærer jordens energibalanse?",
      options: ["At innkommende solstråling over tid balanseres av utgående varmestråling", "At jorden over tid bare mottar energi fra sola uten å sende noe ut", "At energien fra sola over tid forsvinner helt og ikke kan spores", "At jorden bare sender ut varmestråling uten å ta opp solenergi"],
      explanation: "Over tid er jorden i balanse: like mye energi som tas opp fra sola, sendes ut igjen som varmestråling, ellers ville temperaturen endre seg.",
    },
    {
      question: "Hvordan kan smelting av is forsterke oppvarming gjennom albedo?",
      options: ["Mindre is gir lavere albedo, så mer sollys absorberes og det blir varmere", "Is har egentlig ingen betydning for albedoen eller oppvarmingen av jorda", "Smelting av is reflekterer mer sollys tilbake og gir en avkjølende effekt", "Mindre is gir høyere albedo, så mer sollys reflekteres og det blir kaldere"],
      explanation: "Når lys is med høy albedo smelter, blottlegges mørkere hav eller land med lav albedo, som absorberer mer sollys – en positiv tilbakekobling.",
    },
  ],
  "geofag-1-7-3": [
    {
      question: "Hva er Köppen-systemet?",
      options: ["Et system for å klassifisere klimatyper basert på temperatur og nedbør", "Et system for å registrere og klassifisere vindstyrke og vindretning", "Et system for å måle og klassifisere styrken på jordskjelv i magnitude", "En metode for å datere bergarter ved hjelp av radioaktive isotoper"],
      explanation: "Köppen-systemet kategoriserer klimatyper ut fra månedlige gjennomsnittstemperaturer og nedbør, og knytter dem til vegetasjonssoner.",
    },
    {
      question: "Hva kjennetegner tundra?",
      options: ["Et treløst landskap med moser, lav og lave busker, ofte med permafrost", "Et tett tropisk regnskoglandskap med høye trær og stort artsmangfold", "Et varmt ørkenlandskap nesten uten vegetasjon og med svært lite nedbør", "Et frodig løvskoglandskap i tempererte strøk med rik og variert plantevekst"],
      explanation: "Tundra er et treløst landskap i arktiske strøk eller over tregrensen, med nøysom vegetasjon og ofte permafrost i jorden.",
    },
    {
      question: "Hvilken sammenheng er det mellom klimasoner og vegetasjon?",
      options: ["Temperatur og nedbør i en klimasone bestemmer hvilken vegetasjon som kan vokse", "Alle klimasoner har i praksis den samme naturlige vegetasjonen og plantelivet", "Bare jordtypen bestemmer vegetasjonen, mens temperatur og nedbør ikke spiller inn", "Vegetasjonen er helt uavhengig av klimaet og styres kun av lokale forhold"],
      explanation: "Klimasonenes temperatur og nedbør avgjør hvilke planter som trives, derfor følger naturlige vegetasjonsbelter klimasonene tett.",
    },
    {
      question: "Hvorfor finner vi tropisk regnskog nær ekvator?",
      options: ["Høy temperatur og mye nedbør hele året gir frodig vegetasjon", "Jorden er spesielt næringsfattig der", "Det er kaldt og tørt der med lav temperatur og lite nedbør hele året", "Det er lite sollys og lav solvinkel ved ekvator gjennom store deler av året"],
      explanation: "Nær ekvator er det varmt og fuktig hele året med rikelig nedbør og høy solinnstråling, noe som gir grunnlag for tett tropisk regnskog.",
    },
    {
      question: "Hvordan endrer klimasonene seg når man beveger seg fra ekvator mot polene?",
      options: ["Fra varme tropiske soner via tempererte soner til kalde polare soner", "Bare nedbøren endres, ikke temperaturen", "Fra tørre ørkensoner via tropiske regnskoger til isdekte polare tundrasoner", "Fra kalde polare soner via tempererte soner til varme tropiske soner ved ekvator"],
      explanation: "Med økende breddegrad avtar solinnstrålingen, og klimaet går fra varme tropiske soner via tempererte soner til kalde, polare soner.",
    },
  ],
  "geofag-1-7-4": [
    {
      question: "Hva er Milankovitch-syklusene?",
      options: ["Periodiske variasjoner i jordens bane og aksehelling som påvirker solinnstrålingen", "Regelmessige endringer i de store havstrømmene som gjentar seg omtrent hver måned", "Serier av vulkanske utbrudd som opptrer med jevne mellomrom og kjøler ned atmosfæren", "Kortsiktige svingninger i solens egen strålingsenergi som endrer seg over noen få dager"],
      explanation: "Milankovitch-syklusene er langsiktige variasjoner i jordens banegeometri og aksehelling som endrer fordelingen av solinnstråling og bidrar til istider.",
    },
    {
      question: "Hvilken rolle spiller Milankovitch-syklusene for istidene?",
      options: ["De endrer solinnstrålingen og kan utløse istider over titusener av år", "De har ingen effekt på klimaet, som styres av forhold nede på jorda", "De utløser jordskjelv langs plategrensene og forsterker den vulkanske aktiviteten", "De påvirker kun havnivået direkte og har ingen betydning for temperaturen på land"],
      explanation: "Endringer i jordens bane og helling påvirker hvor mye solenergi ulike områder mottar, og dette har bidratt til veksling mellom istider og mellomistider.",
    },
    {
      question: "Hvilken naturlig faktor kan gi midlertidig avkjøling av klimaet?",
      options: ["Store vulkanutbrudd som sender aske og partikler høyt opp i atmosfæren", "Økt solinnstråling i de periodene da sola sender ut mer energi enn den ellers gjør", "Redusert skydekke som slipper mer sollys ned og senker den globale albedoeffekten", "Økt solinnstråling over flere tiår som varmer opp både atmosfæren og havoverflaten"],
      explanation: "Store vulkanutbrudd kan slynge partikler høyt opp i atmosfæren, reflektere sollys og gi en midlertidig global avkjøling.",
    },
    {
      question: "Hva forteller iskjerner oss om tidligere klima?",
      options: ["De inneholder luftbobler og lag som avslører fortidens temperatur og CO₂-nivå", "De forteller om jordens indre, ved at trykket i isen speiler bevegelsene i mantelen", "De måler dagens lufttrykk og fuktighet direkte i de øverste lagene av atmosfæren", "De forteller om sammensetningen og temperaturen i jordens indre kjerne og mantel"],
      explanation: "Iskjerner inneholder årlige lag og innesluttede luftbobler som lar forskere rekonstruere fortidens temperatur og atmosfærens sammensetning.",
    },
    {
      question: "Hvorfor er det viktig å kjenne til naturlige klimavariasjoner?",
      options: ["For å kunne skille naturlig variasjon fra menneskeskapt klimaendring", "For å bevise at klimaet aldri endrer seg, og at dagens oppvarming derfor er innbilt", "For å måle styrken på jordskjelv og forutsi når det neste store utbruddet kommer", "For å kunne forutsi været i morgen og lage nøyaktige varsler for den kommende uka"],
      explanation: "Kunnskap om naturlige variasjoner gjør det mulig å vurdere dagens raske oppvarming opp mot bakgrunnen og se den menneskeskapte påvirkningen tydeligere.",
    },
  ],
  "geofag-1-7-5": [
    {
      question: "Hvorfor har Norge et mildere klima enn breddegraden skulle tilsi?",
      options: ["Den nordatlantiske strøm fører varmt vann nordover langs kysten", "Det er lite hav rundt Norge, og det tørre innlandsklimaet gir derfor milde vintre", "Det er svært lite hav rundt Norge, så landmassene holder godt på sommervarmen", "Norge har mange aktive vulkaner som varmer opp både grunnen og lufta over kysten"],
      explanation: "Den nordatlantiske strøm (forlengelsen av Golfstrømmen) frakter varmt vann nordover og gir Norge et uvanlig mildt klima for sin breddegrad.",
    },
    {
      question: "Hva kjennetegner klimaet på Vestlandet sammenlignet med Østlandet?",
      options: ["Vestlandet er mildere og våtere; Østlandet har mer kontinentalt klima", "Vestlandet er tørrere og kaldere fordi fjellkjeden stenger nedbøren ute hele året", "Vestlandet er tørrere og kaldere, mens Østlandet får mildt og fuktig kystklima", "De to landsdelene har nøyaktig samme klima med lik nedbør og temperatur hele året"],
      explanation: "Vestlandet får mye nedbør og milde vintre på grunn av havet og fjellene, mens Østlandet har mer kontinentalt klima med kaldere vintre og mindre nedbør.",
    },
    {
      question: "Hvorfor er det mye nedbør på Vestlandet?",
      options: ["Fuktig havluft tvinges opp over fjellene og avgir nedbør", "Fjellene hindrer nedbøren ved å presse havlufta nedover", "Det råder tørt ørkenklima der fordi fjellene stenger all fuktig havluft ute helt", "Fjellene hindrer all nedbør i å nå kysten og sender den videre inn mot innlandet"],
      explanation: "Fuktig luft fra Atlanterhavet presses opp over de bratte vestlandsfjellene, kjøles ned og slipper store mengder nedbør på losiden.",
    },
    {
      question: "Hvilke klimaendringer forventes i Norge fremover?",
      options: ["Høyere temperatur, mer nedbør og flere intense værhendelser", "Lavere temperatur og mindre nedbør", "At store deler av landet gradvis blir til ørken med varme og svært lite nedbør", "Ingen merkbare endringer i klimaet, verken i temperatur, nedbør eller ekstremvær"],
      explanation: "Klimaframskrivninger for Norge peker mot høyere temperaturer, økt nedbør og flere kraftige nedbørhendelser, med risiko for flom og skred.",
    },
    {
      question: "Hvordan påvirker fjellene de regionale klimaforskjellene i Norge?",
      options: ["De skaper regnskygge slik at innlandet blir tørrere enn kysten", "De gir mest nedbør i innlandet, fordi lufta først stiger når den kommer så langt", "De gir mest nedbør i innlandet mens kysten ligger tørr i regnskyggen på losiden", "De har ingen betydning for klimaet, som styres bare av breddegrad og havstrømmer"],
      explanation: "Fjellkjedene gir mye nedbør på losiden (kysten) og regnskygge på lesiden (innlandet), som derfor blir tørrere og mer kontinentalt.",
    },
  ],
  "geofag-1-8-1": [
    {
      question: "Hvilket lag av atmosfæren ligger nederst, og hvor skjer all værdannelse?",
      options: ["Troposfæren", "Stratosfæren", "Mesosfæren", "Termosfæren"],
      explanation: "Troposfæren er det nederste, tetteste laget (opp til ca. 12 km), der temperaturen synker oppover og all værdannelse skjer.",
    },
    {
      question: "Hva holder atmosfæren på plass rundt jorden?",
      options: ["Tyngdekraften", "Magnetfeltet alene", "Vindene", "Havstrømmene"],
      explanation: "Atmosfæren er gasslaget som holdes på plass av jordens tyngdekraft og strekker seg langt ut, men mesteparten av massen ligger nær bakken.",
    },
    {
      question: "Hvilken gass utgjør størstedelen av atmosfæren?",
      options: ["Nitrogen", "Oksygen", "Karbondioksid", "Argon"],
      explanation: "Nitrogen utgjør ca. 78 % av atmosfæren, oksygen ca. 21 %, og resten er argon, CO₂ og andre gasser.",
    },
    {
      question: "Hvorfor er ozonlaget i stratosfæren viktig?",
      options: ["Det absorberer skadelig UV-stråling fra solen", "Det varmer opp jordoverflaten", "Det fyller på med frisk luft ved bakken", "Det gir oss oksygen å puste"],
      explanation: "Ozonlaget i stratosfæren absorberer mye av solens skadelige UV-stråling og beskytter dermed livet på jorden.",
    },
    {
      question: "Hvorfor synker temperaturen oppover i troposfæren?",
      options: ["Lufta varmes nedenfra av jordoverflaten, og blir tynnere og kaldere høyere opp", "Sola varmer toppen av atmosfæren mest", "Sola varmer toppen av atmosfæren mest, og derfor er det kaldest nede ved bakken", "Vinden i høyden kjøler bare toppen av troposfæren, mens bakken forblir like varm"],
      explanation: "Jordoverflaten varmes av sola og varmer lufta nedenfra; lengre opp blir lufta tynnere og mottar mindre varme, så temperaturen synker med høyden.",
    },
  ],
  "geofag-1-8-2": [
    {
      question: "Hva er lufttrykk?",
      options: ["Kraften luften utøver per flateenhet, målt i hektopascal", "Mengden vanndamp i luften, oppgitt som antall gram vann per kubikkmeter luft", "Mengden vanndamp luften inneholder, oppgitt som relativ fuktighet i prosent", "Temperaturen i atmosfæren målt i grader celsius ved en bestemt høyde over havet"],
      explanation: "Lufttrykk er kraften luftsøylen utøver per flateenhet, målt i hektopascal (hPa). Normalt trykk ved havnivå er ca. 1013 hPa.",
    },
    {
      question: "Hva er en isobar?",
      options: ["En linje på et værkart som forbinder punkter med samme lufttrykk", "En grense mellom to luftmasser", "En måling av hvor mye nedbør som har falt over et område i løpet av et døgn", "En linje på værkartet som forbinder punkter med nøyaktig samme lufttemperatur"],
      explanation: "En isobar forbinder punkter med samme lufttrykk. Tett samling av isobarer betyr stor trykkgradient og dermed sterk vind.",
    },
    {
      question: "Hva er Corioliseffekten?",
      options: ["Avbøyning av bevegelige luftmasser på grunn av jordens rotasjon", "Oppvarming av luft ved bakken", "Kondensasjon av vanndamp til skydråper når fuktig luft avkjøles til duggpunktet", "Oppvarming av lufta ved bakken som får den til å stige og danne oppadgående vind"],
      explanation: "Corioliseffekten er den tilsynelatende avbøyningen av frie bevegelser på grunn av jordens rotasjon – mot høyre på den nordlige halvkule.",
    },
    {
      question: "I hvilken retning blåser vinden i forhold til trykkforskjeller?",
      options: ["Fra høyt mot lavt trykk", "Fra lavt mot høyt trykk", "Alltid fra nord mot sør", "Tilfeldig uten sammenheng med trykk"],
      explanation: "Vind oppstår fordi luft strømmer fra områder med høyt trykk mot områder med lavt trykk, men avbøyes av Corioliseffekten.",
    },
    {
      question: "Hva forteller tette isobarer på et værkart oss?",
      options: ["Stor trykkgradient og dermed sterk vind", "Svak vind og rolig vær", "Opphold og varme ved jevnt trykk", "Mye nedbør uansett"],
      explanation: "Tette isobarer betyr at trykket endrer seg raskt over kort avstand (stor trykkgradient), noe som gir kraftig vind.",
    },
  ],
  "geofag-1-8-3": [
    {
      question: "Hva er kondensasjon?",
      options: ["Overgangen fra vanndamp til flytende vanndråper", "Overgangen fra vann til damp", "Fordampning av vann fra havoverflaten som tilfører atmosfæren mye ny vanndamp", "Frysing av vann til is"],
      explanation: "Kondensasjon er overgangen fra gassform (vanndamp) til væskeform (vanndråper) når lufta avkjøles til duggpunktet.",
    },
    {
      question: "Hva er duggpunktet?",
      options: ["Temperaturen der lufta blir mettet med vanndamp (100 % relativ fuktighet)", "Temperaturen der vann fryser, altså null grader celsius under vanlig lufttrykk", "Temperaturen der flytende vann fryser til is og danner rim på kalde overflater", "Det høyeste lufttrykket som kan måles i et kraftig høytrykk over et landområde"],
      explanation: "Duggpunktet er temperaturen der lufta er mettet med vanndamp; avkjøles lufta videre, begynner vanndampen å kondensere.",
    },
    {
      question: "Hvordan dannes skyer?",
      options: ["Fuktig luft stiger, avkjøles til duggpunktet og vanndamp kondenserer", "Vann fordamper direkte til is høyt oppe i lufta og legger seg der som et skylag", "Tørr luft synker mot bakken, varmes opp og presser vanndampen ut som skydråper", "Sola varmer opp støvpartikler i lufta som klumper seg sammen og danner skydekket"],
      explanation: "Når fuktig luft stiger og avkjøles til duggpunktet, kondenserer vanndampen rundt små partikler og danner skydråper.",
    },
    {
      question: "Hva er nedbør?",
      options: ["Vann som faller fra atmosfæren som regn, snø, hagl eller sludd", "Vind som blåser over havet og river med seg små vanndråper opp i lufta", "Fordampning av vann fra bakken og havet som tilfører atmosfæren fuktig luft", "Vind som blåser inn over havet og fører fuktig luft videre mot land og fjell"],
      explanation: "Nedbør oppstår når skydråper eller iskrystaller vokser seg store nok til å falle til bakken som regn, snø, hagl eller sludd.",
    },
    {
      question: "Hva må til for at skydråper skal vokse seg store nok til å falle som nedbør?",
      options: ["De må slå seg sammen eller vokse på iskrystaller til de blir tunge nok", "Temperaturen må stige kraftig", "De må fordampe helt til vanndamp og stige videre oppover i den kalde skylufta", "Lufttrykket i skyen må falle nesten til null før dråpene kan løsne og falle ned"],
      explanation: "Skydråper må vokse ved sammenslåing eller ved at iskrystaller trekker til seg vanndamp, til de blir så tunge at de faller som nedbør.",
    },
  ],
  "geofag-1-8-4": [
    {
      question: "Hva er en front i meteorologien?",
      options: ["Grenseflaten mellom to luftmasser med ulik temperatur og fuktighet", "Et område med høyt trykk der isobarene ligger tett inntil hverandre på værkartet", "En bestemt type sky som dannes høyt oppe langs grensen mellom to trykksystemer", "Et utstrakt område med høyt lufttrykk der lufta synker og gir klart, stabilt vær"],
      explanation: "En front er grensen mellom to luftmasser med ulik temperatur og fuktighet; her tvinges varm luft opp over kald luft og det dannes nedbør.",
    },
    {
      question: "Hva skjer ved en okklusjon?",
      options: ["En kaldfront tar igjen en varmfront og løfter den varme lufta opp fra bakken", "To høytrykk smelter sammen til ett stort område med synkende luft og vedvarende klarvær", "Lufta synker ned mot bakken, varmes opp og blir så tørr at skyene løser seg opp", "Havoverflaten fryser til is når kald luft strømmer inn og senker vanntemperaturen"],
      explanation: "En okklusjon dannes når den raskere kaldfronten tar igjen varmfronten i et lavtrykk, slik at den varme lufta presses helt opp fra bakken.",
    },
    {
      question: "Hvilket vær følger ofte med en kaldfront?",
      options: ["Kraftige byger og raskt skiftende vær", "Tørt og stabilt vær i flere dager", "Jevnt lett regn over et bredt belte", "Langvarig, jevnt lett regn"],
      explanation: "Ved en kaldfront skyves den varme lufta bratt oppover, noe som gir kraftige byger, tordenvær og raskt skiftende vær.",
    },
    {
      question: "Hvor dannes lavtrykkene som gir mye av været vårt?",
      options: ["Langs polarfronten der varm og kald luft møtes", "Midt i store høytrykk", "Midt inne i store høytrykk der lufta synker", "I stratosfæren"],
      explanation: "Lavtrykkene utvikler seg langs polarfronten der varm og kald luft møtes, og de følger et livsløp fra dannelse til okklusjon.",
    },
    {
      question: "Hvorfor gir en varmfront ofte langvarig, jevn nedbør?",
      options: ["Varm luft glir langsomt opp over kald luft langs en slak frontflate", "Varm luft synker raskt ned", "Varm luft synker raskt ned mot bakken og gir korte, kraftige byger og opphold", "Det dannes ingen skyer langs fronten fordi den varme lufta holder seg helt tørr"],
      explanation: "Ved en varmfront glir den varme lufta sakte opp over den kalde langs en slak flate, og dette gir et bredt belte med jevn, langvarig nedbør.",
    },
  ],
  "geofag-1-8-5": [
    {
      question: "Hva viser et synoptisk værkart?",
      options: ["Værsituasjonen over et stort område på et bestemt tidspunkt", "Bare temperaturen på ett enkelt sted, målt time for time gjennom hele døgnet", "Klimaet og gjennomsnittsværet over en periode på flere titalls til hundre år", "Jordens indre struktur med kjerne, mantel og skorpe fremstilt i et tverrsnitt"],
      explanation: "Et synoptisk værkart viser værsituasjonen samtidig over et stort område, med isobarer, fronter, trykksystemer og nedbør.",
    },
    {
      question: "Hva er en ensemblemodell i værvarsling?",
      options: ["Mange parallelle varsler med litt ulike startbetingelser som viser usikkerhet", "Ett enkelt varsel uten usikkerhet", "En bestemt type værsatellitt som fotograferer skydekket og måler temperaturen", "En modell som bare beregner klima og gjennomsnittsvær over mange tiår fremover"],
      explanation: "En ensemblemodell kjører mange varsler med små forskjeller i utgangspunktet; spredningen mellom dem viser hvor usikkert varselet er.",
    },
    {
      question: "Hvordan lages moderne værvarsler?",
      options: ["Ved å kombinere observasjoner med matematiske modeller kjørt på datamaskiner", "Ved å spørre folk hva de tror været blir, og bruke svarene som grunnlag for varselet", "Kun ved å studere skyene på himmelen og tolke formen og bevegelsen deres for hånd", "Ved å studere stjernenes og planetenes posisjon og tolke dem som varsler om været"],
      explanation: "Værvarsler bygger på store mengder observasjoner som mates inn i numeriske værmodeller som beregner atmosfærens utvikling.",
    },
    {
      question: "Hvorfor blir værvarsler mer usikre jo lenger fram i tid de gjelder?",
      options: ["Små feil i startdataene vokser over tid i et kaotisk system", "Atmosfæren slutter å bevege seg etter noen dager, så modellen mister grunnlaget sitt", "Værstasjonene slås gradvis av jo lenger fram i tid varselet gjelder", "Observasjonsdataene forsvinner helt fra modellen etter det første døgnet"],
      explanation: "Atmosfæren er et kaotisk system der bittesmå unøyaktigheter i startdataene forsterkes over tid, så varslene blir gradvis mer usikre.",
    },
    {
      question: "Hva betyr tette isobarer rundt et lavtrykk på et værkart?",
      options: ["Sterk vind", "Vindstille", "Høy temperatur", "Ingen nedbør"],
      explanation: "Tette isobarer betyr stor trykkgradient og dermed kraftig vind, noe som er typisk rundt dype lavtrykk.",
    },
  ],
  "geofag-1-9-1": [
    {
      question: "Hva er vannkretsløpet?",
      options: ["Den kontinuerlige sirkulasjonen av vann på, over og under jordoverflaten", "En enkeltveis strøm av vann til havet", "En enkeltrettet strøm av vann fra land til hav uten at det kommer tilbake", "En bestemt type sedimentær bergart som dannes når vann fordamper i tørre områder"],
      explanation: "Vannkretsløpet (den hydrologiske syklus) er den stadige sirkulasjonen av vann mellom reservoarene som hav, atmosfære, land og isbreer.",
    },
    {
      question: "Hva er evapotranspirasjon?",
      options: ["Summen av fordampning fra overflater og transpirasjon fra planter", "Vann som fryser til is i jorda og binder fuktigheten så plantene ikke når den", "Prosessen der vanndamp i lufta fryser til iskrystaller høyt oppe i atmosfæren", "Bare den nedbøren som faller direkte på plantenes blader og fordamper igjen raskt"],
      explanation: "Evapotranspirasjon er den totale overføringen av vann til atmosfæren gjennom fordampning fra overflater og transpirasjon (vannavgivelse) fra planter.",
    },
    {
      question: "Hva er et nedbørfelt?",
      options: ["Et landområde der all nedbør drenerer til samme utløp", "Et område som aldri får nedbør", "Et område der grunnvannet ligger så høyt at porene er fylt med vann", "Et tørt landområde som aldri mottar nedbør fordi det ligger i regnskygge"],
      explanation: "Et nedbørfelt (dreneringsområde) er landområdet der all nedbør samler seg og renner ut gjennom samme elv eller innsjø.",
    },
    {
      question: "Hvilken energikilde driver vannkretsløpet?",
      options: ["Solenergi", "Jordens indre varme", "Månens gravitasjon", "Vindenergi alene"],
      explanation: "Solenergi driver vannkretsløpet ved å fordampe vann, mens tyngdekraften trekker nedbør og avrenning tilbake mot havet.",
    },
    {
      question: "Hva skjer med vann som infiltrerer ned i bakken?",
      options: ["Det blir grunnvann eller tas opp av planter", "Det blir til bergart med en gang", "Det størkner med en gang til fast bergart nede i grunnen der det møter berget", "Det fordamper umiddelbart"],
      explanation: "Vann som infiltrerer kan tas opp av planter, lagres som grunnvann eller sakte sive videre til elver og hav.",
    },
  ],
  "geofag-1-9-2": [
    {
      question: "Hva er grunnvannsspeilet?",
      options: ["Den øvre grensen av den mettede sonen der alle porer er fylt med vann", "Grensen mellom to bergarter, der den ene ligger avsatt rett oppå den andre i dypet", "Den øverste, blanke isflaten på toppen av en isbre der smeltevann samler seg", "Den synlige vannoverflaten av en innsjø eller et tjern oppe på selve landoverflaten"],
      explanation: "Grunnvannsspeilet er den øvre grensen av den mettede sonen; over det er porene delvis fylt med luft (umettet sone).",
    },
    {
      question: "Hva er porøsitet?",
      options: ["Forholdet mellom volumet av hulrom og totalvolumet i et materiale", "Et mål på hvor raskt vann strømmer, altså hvor mange liter som passerer per sekund", "Den totale mengden vann som til enhver tid renner gjennom en elv eller et vassdrag", "Et mål på hvor raskt vann kan strømme gjennom materialet fra ett punkt til et annet"],
      explanation: "Porøsitet er andelen hulrom (porer) i et materiale og forteller hvor mye vann det kan lagre.",
    },
    {
      question: "Hva beskriver permeabilitet?",
      options: ["Hvor lett vann kan strømme gjennom et porøst materiale", "Hvor mye vann materialet kan lagre før det begynner å lekke ut igjen nedover", "Hvor mye vann materialet kan lagre i porene sine når det er helt mettet med vann", "Bergartens farge og utseende, som brukes til å skille mineraler fra hverandre i felt"],
      explanation: "Permeabilitet (hydraulisk konduktivitet) er et mål på hvor lett vann strømmer gjennom materialet. Sand og grus har høy permeabilitet.",
    },
    {
      question: "Hva er en akvifer?",
      options: ["Et vannførende geologisk lag som kan lagre og transportere grunnvann i nyttbare mengder", "Et tett leirlag helt uten hulrom som verken kan lagre eller slippe vann igjennom seg", "En bestemt type elv som renner under bakken og først kommer til syne ved et kildeutspring", "En innsjø på jordoverflaten der grunnvann samler seg og blir synlig som åpent vann"],
      explanation: "En akvifer er et geologisk lag med høy nok porøsitet og permeabilitet til å lagre og levere grunnvann, f.eks. sand- og grusavsetninger.",
    },
    {
      question: "Hvorfor er sand og grus gode akviferer mens leire er en dårlig akvifer?",
      options: ["Sand og grus har høy permeabilitet; leire har lav permeabilitet", "Leire har høyere permeabilitet enn grus", "Sand kan ikke lagre vann i det hele tatt, mens leire holder på alt vannet i store porer", "Leire transporterer vann raskest fordi de fine partiklene danner brede, åpne strømningskanaler"],
      explanation: "Sand og grus har store, sammenhengende porer som lar vann strømme lett (høy permeabilitet), mens leire har bittesmå porer som holder vannet fast.",
    },
  ],
  "geofag-1-9-3": [
    {
      question: "Hva er vannføring (Q) i en elv?",
      options: ["Volumet vann som passerer et tverrsnitt per tidsenhet, målt i m³/s", "Vannets temperatur, oppgitt som gjennomsnitt for hele elvestrekningen gjennom året", "Den totale lengden på elva fra kilden i fjellet og helt ned til utløpet i havet", "Temperaturen til vannet i elva målt ved overflaten på et bestemt sted og tidspunkt"],
      explanation: "Vannføring er volumet vann som passerer et tverrsnitt per sekund (m³/s), og beregnes som tverrsnittsareal × middelhastighet.",
    },
    {
      question: "Hva er et nedbørfelt for en elv?",
      options: ["Området der all nedbør som ikke fordamper drenerer til elven", "Havet utenfor elvemunningen, der elva legger igjen sedimentene sine på bunnen", "Havområdet utenfor elvemunningen der ferskvann og saltvann blandes ved utløpet", "Bare selve elveløpet, altså den smale kanalen der vannet faktisk renner mot havet"],
      explanation: "Nedbørfeltet er landområdet der all nedbør som ikke fordamper, samler seg og renner til samme elv eller innsjø.",
    },
    {
      question: "Hvordan beregnes vannføring ut fra tverrsnitt og hastighet?",
      options: ["Vannføring = tverrsnittsareal × middelhastighet", "Vannføring = areal delt på hastighet", "Vannføring er elvas lengde multiplisert med bredden ved et gitt tverrsnitt", "Vannføring = hastighet minus areal"],
      explanation: "Vannføringen Q er produktet av elvens tverrsnittsareal og vannets middelhastighet: Q = A × v.",
    },
    {
      question: "Hva er en mulig konsekvens av vassdragsregulering for vannkraft?",
      options: ["Endret vannføring og påvirkning på livet i og langs elva", "At elva forsvinner helt og blir til en tørr steinur nedenfor kraftverket", "At elva begynner å renne oppover mot kilden når vannet slippes ut gjennom turbinene", "At elva forsvinner helt fordi alt vannet blir stående permanent i magasinet bak demningen"],
      explanation: "Regulering endrer den naturlige vannføringen og kan påvirke fisk, vegetasjon og økosystemer langs vassdraget, samtidig som den gir fornybar energi.",
    },
    {
      question: "Hvorfor varierer vannføringen i en norsk elv gjennom året?",
      options: ["Snøsmelting om våren og nedbør gir høyere vannføring til ulike tider", "Vannføringen er alltid konstant", "Vannføringen er alltid helt konstant gjennom året fordi grunnvannet mater elva jevnt", "Elver i Norge har ingen sesongvariasjon fordi vinterfrosten holder vannføringen uendret"],
      explanation: "I Norge gir snøsmelting om våren og nedbørsperioder høy vannføring, mens frost om vinteren og tørre perioder gir lav vannføring.",
    },
  ],
  "geofag-1-9-4": [
    {
      question: "Hva er eutrofiering?",
      options: ["Overgjødsling av vann med næringsstoffer som gir algevekst og oksygenmangel", "Forsuring av vann ved sur nedbør", "Forsuring av vann når sur nedbør senker pH og løser ut aluminium fra berggrunnen", "Fordampning av en innsjø slik at vannstanden synker og saltinnholdet gradvis øker"],
      explanation: "Eutrofiering skjer når vann tilføres for mye næring (fosfor og nitrogen), noe som gir kraftig algevekst og senere oksygenmangel når algene brytes ned.",
    },
    {
      question: "Hva regulerer drikkevannskvalitet i Norge?",
      options: ["Drikkevannsforskriften med grenseverdier for ulike parametere", "Plan- og bygningsloven, som setter kravene til vannkvalitet i norske vannverk", "Genteknologiloven, som setter rammene for hvordan mikroorganismer i vann kan endres", "Veitrafikkloven, som regulerer avrenning fra veier og hindrer forurensning av drikkevann"],
      explanation: "Drikkevannsforskriften setter grenseverdier for mikrobiologiske, kjemiske og fysiske parametere, og vannverket er ansvarlig for at de overholdes.",
    },
    {
      question: "Hvilken rolle spiller vannkraft i Norges energiforsyning?",
      options: ["Den er en stor, fornybar kilde til elektrisitet", "Den er Norges minste energikilde", "Den brukes ikke lenger fordi magasinet er tømt", "Den er en fossil energikilde"],
      explanation: "Vannkraft er ryggraden i norsk kraftproduksjon og er en fornybar energikilde som utnytter høydeforskjeller og vannføring i vassdragene.",
    },
    {
      question: "Hva er en utfordring for bærekraftig vannforvaltning?",
      options: ["Å balansere bruk av vann mot vern av økosystemer og vannkvalitet", "At vann er en ubegrenset ressurs uten konflikter", "At vann er en helt ubegrenset ressurs uten konflikter mellom ulike brukergrupper", "At det aldri finnes nok bruk av vannet, så det går tapt"],
      explanation: "Bærekraftig forvaltning må veie behov for drikkevann, kraft og næring mot å bevare vannkvalitet og økosystemer for framtidige generasjoner.",
    },
    {
      question: "Hvordan kan jordbruk bidra til eutrofiering av vassdrag?",
      options: ["Avrenning av gjødsel tilfører fosfor og nitrogen til vannet", "Jordbruk fjerner næring fra vannet", "Jordbruk har ingen målbar effekt når det gjødsles jevnt", "Jordbruk har ingen effekt på vann"],
      explanation: "Når gjødsel fra jorder renner ut i vassdrag, tilføres ekstra fosfor og nitrogen som driver algevekst og eutrofiering.",
    },
  ],
  "geofag-1-10-1": [
    {
      question: "Hva er vitenskapelig metode?",
      options: ["En systematisk tilnærming med observasjon, hypotese, testing og revisjon", "Å samle inn så mye data som mulig uten å analysere dem eller stille noen hypotese", "Å akseptere alle påstander som sanne så lenge de høres rimelige og logiske ut", "Å gjette en forklaring uten å teste den mot observasjoner eller data i etterkant"],
      explanation: "Vitenskapelig metode bygger kunnskap systematisk gjennom observasjoner, hypotesedannelse, testing og eventuell revisjon av forklaringene.",
    },
    {
      question: "Hva kjennetegner en god hypotese i geofag?",
      options: ["Den er spesifikk, basert på observasjoner og kan i prinsippet motbevises", "Den trenger ikke være presis, så lenge den peker i retning av noe man ønsker å finne", "Den kan aldri testes fordi den handler om prosesser som ligger langt tilbake i tid", "Den er bygd på tro og overbevisning framfor observasjoner man kan etterprøve i felt"],
      explanation: "En god hypotese er en foreløpig, testbar forklaring som er spesifikk, bygger på observasjoner og kan motbevises (falsifiseres).",
    },
    {
      question: "Hva er forskjellen på en observasjon og en tolkning?",
      options: ["En observasjon er det man registrerer; en tolkning er hva man mener det betyr", "En tolkning kommer alltid før observasjonen", "De er egentlig det samme, siden det man ser alltid forteller direkte hva det betyr", "En observasjon er alltid feil, mens bare tolkningen kan gi den riktige forklaringen"],
      explanation: "En observasjon er en direkte registrering (f.eks. en stripe i berget), mens tolkningen er forklaringen man knytter til den (f.eks. at den skyldes is).",
    },
    {
      question: "Hvorfor er det viktig å vurdere kilder og usikkerhet i geofaglige undersøkelser?",
      options: ["For å vite hvor pålitelige dataene og konklusjonene er", "For å gjøre rapporten lengre ved å fylle på med forbehold i hvert eneste avsnitt", "For å gjøre rapporten lengre og mer omfattende enn den egentlig trenger å være", "For å skjule feilkilder slik at konklusjonene virker sikrere enn de faktisk er"],
      explanation: "Å vurdere kilder og usikkerhet gjør at man vet hvor pålitelige resultatene er, og skiller godt underbygde konklusjoner fra usikre antakelser.",
    },
    {
      question: "Hva er en teori i vitenskapelig forstand?",
      options: ["En godt underbygd forklaring støttet av mange observasjoner og tester", "Et udokumentert rykte som forskere bruker i mangel av bedre svar", "Et udokumentert rykte som spres videre uten at det er undersøkt eller etterprøvd", "En løs gjetning som ennå ikke er testet mot observasjoner eller data på noen måte"],
      explanation: "En vitenskapelig teori er en grundig testet og bredt støttet forklaring på et fenomen, ikke bare en gjetning, som platetektonikk eller evolusjon.",
    },
  ],
  "geofag-1-10-2": [
    {
      question: "Hva er en blotning i geofag?",
      options: ["Et sted der berggrunnen er synlig og tilgjengelig for observasjon", "Et lag med løsmasser over berget", "Et lag med løsmasser som dekker berget og skjuler det for direkte observasjon i felt", "Et geologisk måleinstrument for strøk og fall"],
      explanation: "En blotning er et sted der berggrunnen er blottlagt, f.eks. klipper, elvebredder eller veiskjæringer, og kan studeres direkte.",
    },
    {
      question: "Hva angir strøk og fall på en geologisk flate?",
      options: ["Strøk er den horisontale retningen; fall er hellingsvinkelen fra horisontalplanet", "Både strøk og fall angir den absolutte alderen til bergarten flaten består av", "Både strøk og fall angir bare fargen og teksturen til bergarten man observerer i felt", "Strøk er hellingsvinkelen fra horisontalplanet; fall er den horisontale retningen til flaten"],
      explanation: "Strøk er kompassretningen til en tenkt horisontal linje på flaten, mens fall er vinkelen flaten heller fra horisontalplanet.",
    },
    {
      question: "Hvorfor er det viktig å dokumentere observasjoner systematisk i en feltbok?",
      options: ["Så andre kan forstå og etterprøve arbeidet senere", "For å fylle opp boken", "Det er ikke nødvendig – man husker det selv", "Det er ikke nødvendig"],
      explanation: "Systematisk dokumentasjon i feltbok sikrer at observasjonene er etterprøvbare og kan brukes pålitelig i senere analyse og rapportering.",
    },
    {
      question: "Hvilket utstyr er typisk nyttig ved geofaglig feltarbeid?",
      options: ["Kompass, geologihammer, lupe og kart/GPS", "Kun en mobiltelefon", "En kalkulator for vinkler og avstander", "Bare en kalkulator"],
      explanation: "Vanlig feltutstyr omfatter kompass (for strøk og fall), geologihammer, lupe, kart og GPS for å observere, måle og stedfeste funn.",
    },
    {
      question: "Hvorfor er sikkerhetsvurdering viktig ved feltarbeid?",
      options: ["Feltarbeid kan innebære farer som bratt terreng, vær og rasfare", "Sikkerhet er irrelevant for geologer", "For å gjøre feltarbeidet tregere og mer omstendelig enn det egentlig trenger å være", "Sikkerhet er irrelevant fordi berggrunnen aldri er farlig"],
      explanation: "Feltarbeid foregår ofte i krevende terreng med skiftende vær og potensiell rasfare, så risikovurdering og planlegging er nødvendig for tryggheten.",
    },
  ],
  "geofag-1-10-3": [
    {
      question: "Hva viser et topografisk kart?",
      options: ["Terrengets form gjennom høydekurver samt natur- og menneskeskapte elementer", "Jordens indre struktur, der dybden ned til hvert av lagene er tegnet inn som kurver", "Jordas indre lagdeling fra skorpe via mantel og ned til den flytende ytre kjernen", "Værsituasjonen med nedbør, vindretning og temperaturvariasjoner gjennom hele døgnet"],
      explanation: "Et topografisk kart viser terrengets form med høydekurver i tillegg til elver, sjøer, veier og bygninger.",
    },
    {
      question: "Hva er ekvidistanse på et kart?",
      options: ["Den faste høydeforskjellen mellom to nabohøydekurver", "Avstanden mellom to byer", "Bredden på et vassdrag der høydekurvene ligger tettest sammen", "Den korteste avstanden mellom to nabobyer målt langs veinettet"],
      explanation: "Ekvidistanse er høydeforskjellen mellom påfølgende høydekurver. På norske N50-kart er ekvidistansen 20 meter.",
    },
    {
      question: "Hva betyr det at høydekurver ligger tett sammen på et kart?",
      options: ["Terrenget er bratt", "Terrenget er flatt", "Det er en innsjø der", "Det er en vei der"],
      explanation: "Tette høydekurver betyr stor høydeendring over kort avstand, altså bratt terreng. Spredte kurver betyr slakt terreng.",
    },
    {
      question: "Hvordan brukes målestokk til å beregne virkelig avstand?",
      options: ["Avstanden på kartet multipliseres med målestokkstallet", "Målestokk har ingenting med avstand å gjøre", "Avstanden på kartet deles på antallet høydekurver man krysser mellom punktene", "Man måler bare i centimeter uten omregning"],
      explanation: "Med målestokk 1:50 000 tilsvarer 1 cm på kartet 50 000 cm (500 m) i terrenget, så kartavstanden ganges med målestokkstallet.",
    },
    {
      question: "Hva kan et geologisk kart vise som et vanlig topografisk kart ikke gjør?",
      options: ["Hvilke bergarter og geologiske strukturer som finnes i området", "Bare veier og bygninger, uten noe av terrengformen som ligger under dem", "Bare plasseringen av veier, bygninger og andre menneskeskapte anlegg i området", "Værvarselet for området med forventet nedbør, vind og temperatur de neste dagene"],
      explanation: "Et geologisk kart viser fordelingen av bergarter, løsmasser, forkastninger og andre geologiske strukturer i tillegg til topografien.",
    },
  ],
  "geofag-1-10-4": [
    {
      question: "Hva er et GIS (geografisk informasjonssystem)?",
      options: ["Et datasystem for innsamling, lagring, analyse og presentasjon av geografisk informasjon", "Et instrument som måler vindstyrke og vindretning ved ulike geografiske posisjoner", "Et trykt papirkart med høydekurver og symboler som ikke kan endres i etterkant", "En bergartstype som dannes ved rask nedkjøling av lava ved jordoverflaten"],
      explanation: "Et GIS er et datasystem der geografiske data organiseres i lag som kan kombineres og analyseres for å løse romlige problemstillinger.",
    },
    {
      question: "Hva er en digital terrengmodell (DTM)?",
      options: ["En rasterbasert modell der hver celle har en høydeverdi", "En tabell med temperaturer for hvert punkt i terrenget, ordnet etter høyde", "En tabell med målte lufttemperaturer for ulike stasjoner gjennom et døgn", "Et satellittbilde som viser skydekket og nedbørsområdene over et landskap"],
      explanation: "En digital terrengmodell representerer terrengoverflaten som et rutenett der hver celle inneholder høyde over havet, og brukes blant annet til helningsanalyse.",
    },
    {
      question: "Hva er en fordel med å organisere data i lag i et GIS?",
      options: ["Ulike datatyper kan kombineres og analyseres sammen", "Man kan bare se ett tema om gangen", "Man kan kun vise ett enkelt temalag av gangen på kartet i systemet", "Analysen av romlige sammenhenger blir umulig når data legges i lag"],
      explanation: "Ved å legge ulike temalag oppå hverandre (f.eks. berggrunn, vassdrag og bebyggelse) kan man analysere sammenhenger og lage nye kart.",
    },
    {
      question: "Hva kan en DTM brukes til i geofag?",
      options: ["Beregne helning og analysere skred- og flomfare", "Bestemme bergarters alder ut fra hvor høyt i terrenget de ligger", "Måle lufttemperatur og nedbør ved ulike stasjoner over tid", "Telle antall innbyggere i tettstedene innenfor kartutsnittet"],
      explanation: "Med en DTM kan man beregne helning, eksposisjon og dreneringsmønstre, noe som er nyttig for å vurdere blant annet skred- og flomfare.",
    },
    {
      question: "Hvorfor må man vurdere kvaliteten på digitale geodata?",
      options: ["Unøyaktige eller utdaterte data kan gi feil konklusjoner", "Digitale data er alltid feilfrie fordi maskinen regner uten å gjøre feil", "Digitale geodata er alltid feilfrie og trenger derfor ingen kvalitetsvurdering", "Digitale kartdata trenger aldri oppdatering fordi terrenget ligger fast over tid"],
      explanation: "Digitale geodata kan ha begrenset oppløsning, feil eller være utdaterte, så man må vurdere kvalitet og begrensninger før man stoler på analysene.",
    },
  ],
  "geofag-1-10-5": [
    {
      question: "Hva er et abstrakt (sammendrag) i en geofaglig rapport?",
      options: ["Et kort sammendrag av formål, metode, hovedresultater og konklusjon", "En liste over de kildene som er brukt, satt opp i den rekkefølgen de ble lest", "En tabell med alle innsamlede rådata før de er bearbeidet og analysert", "En fullstendig alfabetisk liste over alle kildene som er brukt i arbeidet"],
      explanation: "Et abstrakt er et kort sammendrag (typisk 100–300 ord) som gir leseren rask oversikt over hele arbeidet.",
    },
    {
      question: "Hvorfor bør data presenteres i egnede grafer og tabeller?",
      options: ["Det gjør resultatene oversiktlige og lettere å tolke", "For å gjøre rapporten vanskeligere å lese for dem som ikke kan faget fra før", "Det er aldri nødvendig så lenge rådataene finnes i et vedlegg bakerst", "For å gjøre rapporten mer omfattende og vanskeligere for leseren å tolke"],
      explanation: "Godt valgte grafer og tabeller gjør store datamengder oversiktlige og hjelper leseren å se mønstre og sammenhenger.",
    },
    {
      question: "Hvorfor er det viktig å referere kilder korrekt i en rapport?",
      options: ["For å gi kreditt og la andre etterprøve grunnlaget", "For å skjule hvor informasjonen kommer fra, slik at arbeidet virker mer originalt", "Det er ikke nødvendig så lenge påstandene virker rimelige og troverdige", "For å fylle opp sidene slik at rapporten framstår lengre og mer omfattende"],
      explanation: "Korrekte kildehenvisninger gir kreditt til opphavspersonene, viser at påstandene er underbygd og lar leseren etterprøve dem.",
    },
    {
      question: "Hva bør en konklusjon i en geofaglig rapport gjøre?",
      options: ["Oppsummere hovedfunnene og svare på problemstillingen", "Introdusere nye data som ikke er nevnt før", "Gjenta hele metodedelen i detalj slik at framgangsmåten forklares på nytt", "Liste opp samtlige kilder som er brukt gjennom hele det geofaglige arbeidet"],
      explanation: "Konklusjonen skal kort oppsummere de viktigste resultatene og svare på problemstillingen, uten å innføre helt nytt materiale.",
    },
    {
      question: "Hvorfor er tydelig formidling viktig i geofaglig arbeid?",
      options: ["Andre må kunne forstå og bruke resultatene", "For å imponere uten innhold", "Det spiller ingen rolle hvordan man formidler", "For å holde funnene hemmelige"],
      explanation: "Tydelig formidling, muntlig og skriftlig, gjør at andre kan forstå, etterprøve og bygge videre på resultatene – en kjerne i vitenskapelig arbeid.",
    },
  ],
};

export default quizData_geofag;
