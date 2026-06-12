import type { QuizQuestion } from './quiz-data';

const quizData_geografi: Record<string, QuizQuestion[]> = {


  'geografi-1-1-1': [
    {
      question: 'Hva studerer geografi som vitenskap?',
      options: ['Samspillet mellom natur og samfunn i et romlig perspektiv', 'Kun jordens fysiske landformer', 'Kun menneskers kultur og historie', 'Kun politiske grenser mellom land'],
      explanation: 'Geografi er vitenskapen om jordoverflaten, naturmiljøet og menneskelig aktivitet i et romlig (spatialt) perspektiv – samspillet mellom natur og samfunn.',
    },
    {
      question: 'Hva er forskjellen på naturgeografi og samfunnsgeografi?',
      options: ['Naturgeografi studerer naturmiljøet og fysiske prosesser, samfunnsgeografi studerer forholdet mellom mennesker og steder', 'Naturgeografi studerer dyr, samfunnsgeografi studerer planter', 'Naturgeografi gjelder Norge, samfunnsgeografi gjelder utlandet', 'Det er ingen forskjell mellom dem'],
      explanation: 'Naturgeografi tar for seg landformer, klima, vegetasjon og andre fysiske forhold, mens samfunnsgeografi (humangeografi) tar for seg befolkning, bosetting, økonomi og kultur i et romlig perspektiv.',
    },
    {
      question: 'Hvilke kjernespørsmål stiller geografer?',
      options: ['Hvor? Hvorfor der? Hva betyr det? Hvordan endrer det seg?', 'Når? Hvem? Hvor mye koster det?', 'Hva er sant? Hva er godt? Hva er vakkert?', 'Hvem vant? Hvem tapte? Hvorfor?'],
      explanation: 'Geografiens romlige tenkemåte handler om å spørre hvor fenomener finnes, hvorfor de finnes akkurat der, hvilke konsekvenser plasseringen har, og hvordan de endrer seg over tid.',
    },
    {
      question: 'Hva skiller geografens tilnærming fra biologens når de studerer en art?',
      options: ['Geografen spør hvor arten lever og hvorfor nettopp der', 'Geografen studerer artens indre anatomi', 'Geografen er ikke interessert i levende organismer', 'Geografen studerer bare utdødde arter'],
      explanation: 'Mens biologen studerer selve arten, er geografen opptatt av det romlige: hvor arten lever, og hva som forklarer den geografiske utbredelsen.',
    },
    {
      question: 'Hva betyr ordet geografi opprinnelig?',
      options: ['Jordbeskrivelse', 'Jordmåling', 'Landkunnskap', 'Steinlære'],
      explanation: 'Ordet kommer fra gresk: geo betyr jord og graphein betyr å skrive. Geografi betyr altså jordbeskrivelse.',
    },
  ],

  'geografi-1-1-2': [
    {
      question: 'Hva betyr målestokken 1:50 000 på et kart?',
      options: ['1 cm på kartet tilsvarer 500 meter i virkeligheten', '1 cm på kartet tilsvarer 50 meter i virkeligheten', '1 cm på kartet tilsvarer 5 kilometer i virkeligheten', '1 cm på kartet tilsvarer 50 kilometer i virkeligheten'],
      explanation: '1:50 000 betyr at 1 cm på kartet tilsvarer 50 000 cm i virkeligheten, altså 500 meter.',
    },
    {
      question: 'Hva kalles avstanden i høydemeter mellom høydekurvene på et kart?',
      options: ['Ekvidistanse', 'Målestokk', 'Ekvator', 'Projeksjon'],
      explanation: 'Ekvidistansen er den faste høydeforskjellen mellom to nabohøydekurver. Tette kurver betyr bratt terreng.',
    },
    {
      question: 'Hva kjennetegner Mercator-projeksjonen?',
      options: ['Den er vinkelriktig, men forvrenger arealer sterkt mot polene', 'Den viser alle arealer i riktig størrelse', 'Den kan bare brukes til polarområdene', 'Den viser jorden uten noen forvrengning'],
      explanation: 'Mercator-projeksjonen bevarer vinkler og brukes til navigasjon, men forstørrer arealer mot polene – Grønland ser like stort ut som Afrika, selv om Afrika er omtrent 14 ganger større.',
    },
    {
      question: 'Hvorfor brukes Mercator-projeksjonen til sjøfart og navigasjon?',
      options: ['Fordi rette linjer på kartet tilsvarer kurs med konstant kompassretning', 'Fordi den viser havdyp svært nøyaktig', 'Fordi den viser alle land i riktig størrelse', 'Fordi den ble laget av sjøfolk'],
      explanation: 'På et Mercator-kart tilsvarer en rett linje en kurs med konstant kompassretning, noe som gjør projeksjonen praktisk for navigasjon.',
    },
    {
      question: 'Hva er forskjellen på topografiske og tematiske kart?',
      options: ['Topografiske kart viser terreng og landskap, tematiske kart viser ett bestemt tema', 'Topografiske kart er digitale, tematiske kart er på papir', 'Topografiske kart viser bare byer, tematiske viser bare natur', 'Det er ingen forskjell'],
      explanation: 'Topografiske kart viser terrengformer, vann, veier og bebyggelse, mens tematiske kart fremstiller ett bestemt tema, for eksempel befolkningstetthet eller nedbør.',
    },
  ],

  'geografi-1-1-3': [
    {
      question: 'Hva er GIS?',
      options: ['Dataverktøy for å samle, lagre, analysere og presentere geografisk informasjon', 'Et globalt posisjoneringssystem med satellitter', 'En internasjonal geologiorganisasjon', 'Et system for internett-sikkerhet'],
      explanation: 'GIS (geografiske informasjonssystemer) kobler stedsinformasjon («hvor») med egenskapsinformasjon («hva») og gjør det mulig å oppdage mønstre og sammenhenger.',
    },
    {
      question: 'Hva er en bufferanalyse i GIS?',
      options: ['Å opprette en sone med en gitt avstand rundt et geografisk objekt', 'Å lagre kartdata midlertidig i minnet', 'Å fjerne feil fra kartdata', 'Å gjøre kartet raskere å laste'],
      explanation: 'En bufferanalyse oppretter en sone rundt et objekt, for eksempel for å finne alle boliger innenfor 500 meter fra en planlagt motorvei.',
    },
    {
      question: 'Hva går overlay-analyse ut på?',
      options: ['Å legge flere kartlag oppå hverandre for å finne sammenhenger', 'Å tegne kartet på nytt for hånd', 'Å skrive ut kart i stort format', 'Å oversette kart til andre språk'],
      explanation: 'I en overlay-analyse kombineres flere kartlag, for eksempel jordtype, helning og nedbør, for å analysere sammenhenger mellom dem.',
    },
    {
      question: 'Hva er forskjellen på vektordata og rasterdata i GIS?',
      options: ['Vektordata består av punkter, linjer og flater, rasterdata består av et rutenett av celler', 'Vektordata er alltid eldre enn rasterdata', 'Vektordata viser hav, rasterdata viser land', 'Rasterdata kan ikke vises på kart'],
      explanation: 'Vektordata representerer objekter som punkter, linjer og polygoner, mens rasterdata deler området inn i et rutenett av celler (piksler), slik som satellittbilder.',
    },
    {
      question: 'Hvordan organiseres informasjonen i et GIS?',
      options: ['I kartlag som kan kombineres, der hvert lag viser én type informasjon', 'I én samlet tegning som ikke kan endres', 'I tekstdokumenter uten koordinater', 'I tilfeldig rekkefølge'],
      explanation: 'GIS bygger på kartlag: veier, vann, bebyggelse og annen informasjon lagres i separate lag som kan slås av og på og kombineres i analyser.',
    },
  ],

  'geografi-1-1-4': [
    {
      question: 'Hva er fjernanalyse (remote sensing)?',
      options: ['Innsamling av informasjon om jordoverflaten fra avstand, vanligvis med sensorer på satellitter eller fly', 'Analyse av fjerne galakser med teleskop', 'Feltarbeid i avsidesliggende strøk', 'Kjemisk analyse av bergartsprøver i laboratorium'],
      explanation: 'Fjernanalyse bruker sensorer på satellitter eller fly som registrerer elektromagnetisk stråling i ulike bølgelengder for å kartlegge og overvåke jordoverflaten.',
    },
    {
      question: 'Hva er en spektral signatur?',
      options: ['Det unike mønsteret av hvordan et materiale reflekterer og absorberer stråling i ulike bølgelengder', 'Underskriften til forskeren som tok bildet', 'Fargekoden på et tematisk kart', 'Satellittens bane rundt jorden'],
      explanation: 'Ulike overflater har ulike spektrale signaturer: frisk vegetasjon reflekterer sterkt i nærinfrarødt, mens vann absorberer det meste. Slik kan overflatetyper skilles fra hverandre.',
    },
    {
      question: 'Hvilken fordel har radarbilder (SAR) sammenlignet med optiske satellittbilder?',
      options: ['De kan ta bilder gjennom skyer og i mørke', 'De har alltid høyere fargekvalitet', 'De er gratis å produsere', 'De viser temperaturen direkte'],
      explanation: 'Radar sender ut egne signaler og er ikke avhengig av sollys, og radarbølger trenger gjennom skydekke. Derfor fungerer SAR både om natten og i overskyet vær.',
    },
    {
      question: 'Hva brukes NDVI til?',
      options: ['Å måle mengden og tilstanden til vegetasjon ut fra satellittdata', 'Å måle havdyp', 'Å beregne befolkningstetthet', 'Å varsle jordskjelv'],
      explanation: 'NDVI er en vegetasjonsindeks som utnytter at frisk vegetasjon reflekterer mye nærinfrarød stråling. Den brukes blant annet til å overvåke avlinger og tørke.',
    },
    {
      question: 'Hvilket av disse er et typisk bruksområde for fjernanalyse?',
      options: ['Overvåking av avskoging og naturkatastrofer', 'Intervjuer med lokalbefolkning', 'Kjemisk analyse av drikkevann', 'Telling av trafikk i et veikryss'],
      explanation: 'Fjernanalyse brukes til miljøovervåking som avskoging og isbreendringer, kartlegging av naturkatastrofer og overvåking av landbruk over store områder.',
    },
  ],

  'geografi-1-1-5': [
    {
      question: 'Hva er feltarbeid i geografi?',
      options: ['Systematisk innsamling av data og observasjoner utendørs på et bestemt sted', 'Arbeid på en bondegård', 'Analyse av satellittbilder på datamaskin', 'Lesing av faglitteratur på biblioteket'],
      explanation: 'Feltarbeid er systematisk datainnsamling ute i felt – måling, kartlegging, intervjuer og observasjon – og gir førstehåndskunnskap om stedet som studeres.',
    },
    {
      question: 'Hva er forskjellen på kvantitativ og kvalitativ metode?',
      options: ['Kvantitativ metode samler data som kan uttrykkes i tall, kvalitativ metode beskriver kvaliteter, erfaringer og meninger', 'Kvantitativ metode er alltid bedre enn kvalitativ', 'Kvalitativ metode brukes bare i naturgeografi', 'Kvantitativ metode bruker aldri instrumenter'],
      explanation: 'Kvantitative data kan telles og analyseres statistisk (for eksempel temperaturmålinger), mens kvalitative data beskriver erfaringer og meninger (for eksempel intervjuer).',
    },
    {
      question: 'Hva bør være det første steget i planleggingen av et feltarbeid?',
      options: ['Å formulere en problemstilling', 'Å kjøpe inn utstyr', 'Å skrive konklusjonen', 'Å lage en presentasjon'],
      explanation: 'En tydelig problemstilling styrer hele feltarbeidet: den avgjør hvilke metoder, hvilket utstyr og hvilke data man trenger.',
    },
    {
      question: 'Hvilken metode passer best for å undersøke hva innbyggerne mener om et nytt byggeprosjekt?',
      options: ['Intervjuer eller spørreundersøkelse', 'Temperaturmåling', 'Analyse av høydekurver', 'Berggrunnskartlegging'],
      explanation: 'Meninger og holdninger er kvalitative og delvis kvantitative data som best samles inn gjennom intervjuer og spørreundersøkelser.',
    },
    {
      question: 'Hvorfor er feltarbeid en viktig del av geografisk metode?',
      options: ['Det gir førstehåndskunnskap som ikke kan leses ut av kart og statistikk alene', 'Det er den eneste metoden geografer kan bruke', 'Det er alltid raskere enn andre metoder', 'Det krever ikke planlegging'],
      explanation: 'Gjennom feltarbeid observerer man fenomenene direkte og kan oppdage forhold som kart, statistikk og fjernanalyse ikke fanger opp.',
    },
  ],

  'geografi-1-1-6': [
    {
      question: 'Hva er medianen i et datasett?',
      options: ['Den midterste verdien når alle verdier er sortert', 'Summen av alle verdier delt på antall verdier', 'Den største verdien', 'Den verdien som forekommer oftest'],
      explanation: 'Medianen er den midterste verdien i et sortert datasett. Den påvirkes mindre av ekstremverdier enn gjennomsnittet.',
    },
    {
      question: 'Hvorfor kan medianen gi et bedre bilde enn gjennomsnittet i noen datasett?',
      options: ['Fordi den påvirkes mindre av ekstremt høye eller lave verdier', 'Fordi den alltid er høyere enn gjennomsnittet', 'Fordi den er lettere å regne ut med kalkulator', 'Fordi den alltid er et helt tall'],
      explanation: 'Gjennomsnittet trekkes opp eller ned av ekstremverdier, for eksempel noen få svært høye inntekter, mens medianen viser den typiske midtverdien.',
    },
    {
      question: 'Hva viser en befolkningspyramide?',
      options: ['Alders- og kjønnsfordelingen i en befolkning', 'Hvor i landet folk bor', 'Inntektsfordelingen i et land', 'Befolkningens utdanningsnivå'],
      explanation: 'En befolkningspyramide er et diagram som viser hvor mange personer det er i hvert alderstrinn, fordelt på kjønn.',
    },
    {
      question: 'Hva er et koropletkart?',
      options: ['Et tematisk kart der områder farges etter verdien av en variabel', 'Et kart som bare viser høydekurver', 'Et historisk kart over kolonier', 'Et kart uten fargebruk'],
      explanation: 'Koropletkart bruker fargetoner for å vise hvordan en verdi, for eksempel befolkningstetthet, varierer mellom områder som kommuner eller land.',
    },
    {
      question: 'Hva bør du alltid vurdere når du bruker statistikk fra en kilde?',
      options: ['Hvem som står bak informasjonen, og når dataene ble samlet inn', 'Om diagrammene har fine farger', 'Om kilden er kort nok til å lese raskt', 'Om tallene er avrundet til hele tall'],
      explanation: 'Kildekritikk innebærer å vurdere hvem som står bak dataene, når de ble samlet inn, og om avsenderen kan ha interesser som farger fremstillingen.',
    },
  ],

  'geografi-1-2-1': [
    {
      question: 'Hvilke tre hovedlag består jorden av?',
      options: ['Skorpe, mantel og kjerne', 'Skorpe, hav og atmosfære', 'Litosfære, biosfære og atmosfære', 'Granitt, basalt og lava'],
      explanation: 'Jorden er lagdelt med en tynn skorpe ytterst, en tykk mantel under, og en kjerne innerst.',
    },
    {
      question: 'Hva er forskjellen på kontinentalskorpe og havskorpe?',
      options: ['Kontinentalskorpen er tykk og lett (granitt), havskorpen er tynn og tung (basalt)', 'Kontinentalskorpen er tynn og tung, havskorpen er tykk og lett', 'De består av nøyaktig samme bergart', 'Havskorpen finnes bare ved polene'],
      explanation: 'Kontinentalskorpen er tykk og består av relativt lett granitt, mens havskorpen er tynn og består av tyngre basalt.',
    },
    {
      question: 'Hva er isostasi?',
      options: ['Prinsippet om at jordskorpen flyter på den tyngre mantelen, omtrent som isfjell i vann', 'At alle kontinenter ligger i ro', 'At havnivået er likt over hele jorden', 'En type vulkanutbrudd'],
      explanation: 'Isostasi betyr at skorpen flyter på mantelen. Etter istiden har Skandinavia hevet seg fordi vekten av isen forsvant – det kalles postglasial landheving.',
    },
    {
      question: 'Hva er litosfæren?',
      options: ['Jordens ytre, stive skall som består av skorpen og øverste del av mantelen', 'Jordens flytende ytre kjerne', 'Laget av løsmasser over berggrunnen', 'Atmosfærens nederste lag'],
      explanation: 'Litosfæren er det stive ytterlaget av skorpe og øvre mantel. Den er delt i tektoniske plater som beveger seg på den plastiske astenosfæren.',
    },
    {
      question: 'Hvordan har forskere skaffet kunnskap om jordens indre?',
      options: ['Blant annet ved å studere hvordan seismiske bølger fra jordskjelv beveger seg gjennom jorden', 'Ved å bore helt inn til kjernen', 'Ved å fotografere jordens indre fra satellitter', 'Ved å senke kameraer ned i vulkaner til kjernen'],
      explanation: 'Ingen har boret dypere enn noen kilometer. Kunnskapen kommer særlig fra seismiske bølger, som endrer fart og retning når de passerer gjennom lag med ulike egenskaper.',
    },
  ],

  'geografi-1-2-2': [
    {
      question: 'Hva sier teorien om platetektonikk?',
      options: ['Jordens litosfære er delt i plater som beveger seg på astenosfæren', 'Kontinentene har alltid ligget på samme sted', 'Jordskjelv skyldes endringer i månens tyngdekraft', 'Jordens overflate er én sammenhengende, fast plate'],
      explanation: 'Platetektonikk er teorien om at litosfæren er delt opp i tektoniske plater i bevegelse. Plategrensene er der jordskjelv, vulkanisme og fjellkjededannelse skjer.',
    },
    {
      question: 'Hva skjer ved en divergerende plategrense?',
      options: ['Platene beveger seg fra hverandre, og ny skorpe dannes', 'Platene kolliderer og danner fjellkjeder', 'Den ene platen dykker under den andre', 'Platene glir sidelengs langs hverandre'],
      explanation: 'Ved divergerende grenser (spredningsgrenser) glir platene fra hverandre, og ny havskorpe dannes, slik som ved Den midtatlantiske ryggen.',
    },
    {
      question: 'Hva er subduksjon?',
      options: ['At en tektonisk plate dykker under en annen og synker ned i mantelen', 'At to plater glir rolig forbi hverandre', 'At en plate deler seg i to', 'At en plate smelter på overflaten'],
      explanation: 'Subduksjon skjer ved konvergerende plategrenser der tung havskorpe dykker under en annen plate. Det gir dyphavsgroper, vulkanisme og jordskjelv.',
    },
    {
      question: 'Hva var Pangea?',
      options: ['Et superkontinent der alle dagens kontinenter hang sammen', 'Den første isbreen på jorden', 'En utdødd vulkan i Middelhavet', 'Navnet på jordens indre kjerne'],
      explanation: 'Pangea var et superkontinent som eksisterte for omtrent 335–200 millioner år siden, før det brøt opp i dagens kontinenter. Navnet betyr «all jord» på gresk.',
    },
    {
      question: 'Hvilket av disse regnes som et bevis for kontinentaldrift?',
      options: ['At kystlinjene til Sør-Amerika og Afrika passer sammen, og at like fossiler finnes på begge sider av Atlanterhavet', 'At alle kontinenter har samme klima', 'At havnivået er likt overalt', 'At alle fjellkjeder er like gamle'],
      explanation: 'Sammenfallende kystlinjer, like fossiler og like bergartsformasjoner på ulike kontinenter er klassiske bevis for at kontinentene en gang hang sammen.',
    },
  ],

  'geografi-1-2-3': [
    {
      question: 'Hva kjennetegner en stratovulkan?',
      options: ['Høy og bratt, bygget av vekslende lag av lava og aske, med eksplosive utbrudd', 'Lav og slak med tyntflytende lava og rolige utbrudd', 'En sprekk i bakken uten krater', 'En vulkan som bare finnes under havet'],
      explanation: 'Stratovulkaner har tyktflytende lava som fanger gasser og bygger opp trykk. Derfor får de eksplosive utbrudd, og de fleste av verdens farligste vulkaner er stratovulkaner.',
    },
    {
      question: 'Hva er en hotspot?',
      options: ['Et område i mantelen med uvanlig høy temperatur der varme stiger opp mot overflaten', 'Et område med mange jordskjelv men ingen vulkaner', 'Det varmeste punktet i en lavastrøm', 'En plategrense med høy friksjon'],
      explanation: 'En hotspot er stasjonær i mantelen. Når en plate beveger seg over den, dannes en rekke av vulkaner – Hawaii-øyrekken er det klassiske eksempelet.',
    },
    {
      question: 'Hvorfor dannes det en rekke av vulkanøyer over en hotspot, slik som Hawaii?',
      options: ['Fordi platen beveger seg over den stasjonære hotspoten, slik at nye vulkaner dannes etter hverandre', 'Fordi hotspoten flytter seg raskt under platen', 'Fordi vulkanene vandrer langs havbunnen', 'Fordi øyene dannes av korallrev'],
      explanation: 'Hotspoten ligger fast, mens litosfæreplaten glir over. Den aktive vulkanen ligger over hotspoten, mens eldre, utdødde vulkaner ligger i en rekke i platens bevegelsesretning.',
    },
    {
      question: 'Hvor finner vi det meste av vulkanismen på jorden?',
      options: ['Ved plategrensene, særlig ved subduksjonssoner og spredningsrygger', 'Midt inne på kontinentene, langt fra plategrenser', 'Bare ved ekvator', 'Bare i polarområdene'],
      explanation: 'Vulkanisme er knyttet til plategrensene: subduksjonssoner gir eksplosive vulkaner, og spredningsrygger gir roligere utbrudd. Hotspots er unntaket som kan ligge midt på en plate.',
    },
    {
      question: 'Hvilken positiv konsekvens kan vulkanisme ha?',
      options: ['Vulkansk aske og lava gir næringsrik og fruktbar jord', 'Vulkaner senker havnivået', 'Vulkanutbrudd fjerner all CO₂ fra atmosfæren', 'Vulkaner hindrer jordskjelv i å oppstå'],
      explanation: 'Forvitret vulkansk materiale gir svært fruktbar jord, og derfor bor mange mennesker nær vulkaner. Vulkanske områder kan også gi geotermisk energi.',
    },
  ],

  'geografi-1-2-4': [
    {
      question: 'Hvorfor oppstår jordskjelv?',
      options: ['Fordi spenninger utløses ved plutselig bevegelse langs en forkastning i jordskorpen', 'Fordi månen trekker i jordskorpen', 'Fordi grunnvannet fryser til is', 'Fordi vinden sliter på fjellene'],
      explanation: 'Jordskjelv oppstår når oppbygde spenninger i skorpen plutselig utløses ved bevegelse langs en forkastning – en bruddflate der bergartene forskyves i forhold til hverandre.',
    },
    {
      question: 'Hva er forskjellen på hyposenteret og episenteret?',
      options: ['Hyposenteret er punktet inne i jorden der skjelvet starter, episenteret er punktet rett over på overflaten', 'Episenteret er inne i jorden, hyposenteret er på overflaten', 'De er to navn på samme punkt', 'Hyposenteret er der tsunamien treffer land'],
      explanation: 'Hyposenteret (fokus) er der bruddet skjer i dypet, mens episenteret er punktet på jordoverflaten rett over hyposenteret.',
    },
    {
      question: 'Momentmagnitudeskalaen er logaritmisk. Hva betyr det at et skjelv har magnitude 7 sammenlignet med magnitude 5?',
      options: ['Det frigjør omtrent 1 000 ganger mer energi', 'Det frigjør dobbelt så mye energi', 'Det frigjør 7/5 ganger mer energi', 'Det varer nøyaktig to minutter lenger'],
      explanation: 'Ett trinn på skalaen tilsvarer omtrent 32 ganger mer energi. To trinn gir 32 × 32 ≈ 1 000 ganger mer energi.',
    },
    {
      question: 'Hvordan oppstår en tsunami?',
      options: ['Vannmasser settes i bevegelse, for eksempel når havbunnen forskyves ved et undersjøisk jordskjelv', 'Sterk vind presser opp store bølger over lang tid', 'Tidevannet blir ekstra kraftig ved fullmåne', 'Varmt vann utvider seg ved ekvator'],
      explanation: 'Tsunamier oppstår når store vannmasser forskyves brått, oftest ved undersjøiske jordskjelv, men også ved skred og vulkanutbrudd. I åpent hav er bølgen lav, men den vokser mot grunt vann.',
    },
    {
      question: 'Hva måler Mercalli-skalaen i motsetning til momentmagnitudeskalaen?',
      options: ['Intensiteten – de observerte virkningene av skjelvet på mennesker og bygninger', 'Energien som frigjøres i hyposenteret', 'Hvor lenge skjelvet varer', 'Avstanden til episenteret'],
      explanation: 'Magnitudeskalaer måler frigjort energi, mens intensitetsskalaer som Mercalli beskriver hvor kraftige virkningene var på et bestemt sted.',
    },
  ],

  'geografi-1-2-5': [
    {
      question: 'Hva er forvitring?',
      options: ['Nedbrytning av bergarter på stedet, uten transport av materialet', 'Transport av løsmasser med elver', 'Avsetning av sand i elvedeltaer', 'Oppbygging av nye fjellkjeder'],
      explanation: 'Forvitring er nedbrytning av bergarter og mineraler der de ligger. Når materialet transporteres bort av vann, vind eller is, kalles det erosjon.',
    },
    {
      question: 'Hvordan virker frostforvitring?',
      options: ['Vann i sprekker fryser, utvider seg og sprenger berget i stykker', 'Isbreer sliper berggrunnen glatt', 'Sur nedbør løser opp kalkstein', 'Røtter presser sprekkene sammen'],
      explanation: 'Når vann fryser, utvider det seg. Gjentatte fryse- og tineprosesser i sprekker sprenger løs biter av berget – en mekanisk forvitringsprosess som er vanlig i Norge.',
    },
    {
      question: 'Hvilken av disse er en kjemisk forvitringsprosess?',
      options: ['Karbonatforvitring, der kalkstein løses opp av surt vann', 'Frostsprengning i bergsprekker', 'Rotsprengning fra trær', 'Trykkavlastning når overliggende masser fjernes'],
      explanation: 'Karbonatforvitring er kjemisk: CO₂ i vann danner en svak syre som løser opp kalkstein. Frostforvitring, rotsprengning og trykkavlastning er mekaniske prosesser.',
    },
    {
      question: 'Hva er erosjon?',
      options: ['Transport av løst materiale fra ett sted til et annet med vann, vind, is eller tyngdekraft', 'Kjemisk omvandling av mineraler på stedet', 'Dannelse av nye mineraler i dypet', 'Oppvarming av berggrunnen fra jordens indre'],
      explanation: 'Erosjon er transport av forvitringsmateriale. De tre hovedagentene er rennende vann, vind og is.',
    },
    {
      question: 'Hvilken type forvitring dominerer i varme og fuktige tropiske områder?',
      options: ['Kjemisk forvitring', 'Frostforvitring', 'Ingen forvitring skjer i tropene', 'Isbreerosjon'],
      explanation: 'Kjemiske reaksjoner går raskere ved høy temperatur og god tilgang på vann. I tropene dominerer derfor kjemisk forvitring, mens frostforvitring krever temperaturer rundt frysepunktet.',
    },
  ],

  'geografi-1-2-6': [
    {
      question: 'Hvordan oppstår meandersvinger i en elv?',
      options: ['Elven eroderer på yttersiden av svingene og avsetter materiale på innersiden', 'Elven eroderer mest på innersiden av svingene', 'Vinden blåser elveløpet i svinger', 'Jordskjelv forskyver elveløpet'],
      explanation: 'Strømmen er sterkest på yttersiden av en sving, der elven eroderer, og svakest på innersiden, der materiale avsettes. Slik blir svingene gradvis sterkere.',
    },
    {
      question: 'Hva er et elvedelta?',
      options: ['En flat avsetningsform som dannes der en elv munner ut i hav eller innsjø', 'En dyp kløft som elven har gravd ut i fjell', 'Den øverste delen av et elveløp', 'En kunstig demning i elven'],
      explanation: 'Når elven møter stillestående vann, synker vannhastigheten og sedimentene avsettes. Navnet kommer fra den greske bokstaven delta (Δ), som har samme form.',
    },
    {
      question: 'Hvilken dalform lager rennende elver i fjellandskap?',
      options: ['V-dal', 'U-dal', 'Botn', 'Fjord'],
      explanation: 'Elver graver seg ned i berggrunnen og danner V-formede daler. U-daler, botner og fjorder er derimot formet av isbreer.',
    },
    {
      question: 'Hva kjennetegner elvens øvre løp?',
      options: ['Bratt fall, sterk strøm og kraftig erosjon nedover i terrenget', 'Flatt terreng der elven bare avsetter materiale', 'Stillestående vann uten strøm', 'Brakkvann der elven møter havet'],
      explanation: 'I øvre løp er fallet bratt og strømmen sterk, og elven graver seg nedover. I nedre løp dominerer avsetning, og elven slynger seg i meandersvinger.',
    },
    {
      question: 'Hvorfor er Norge spesielt godt egnet for vannkraft?',
      options: ['Mye nedbør kombinert med store høydeforskjeller i terrenget', 'Lange, varme somre med mye fordampning', 'Flatt landskap med brede elver', 'Store grunnvannsreservoarer under bakken'],
      explanation: 'Vannkraft utnytter fallenergien i vann. Norge har mye nedbør og bratt topografi der vannet faller fra fjell til fjord, noe som gir gode forhold for kraftproduksjon.',
    },
  ],

  'geografi-1-2-7': [
    {
      question: 'Hvordan ble de norske fjordene dannet?',
      options: ['Isbreer gravde ut dype U-daler som ble fylt med sjøvann etter istiden', 'Jordskjelv åpnet dype sprekker i kysten', 'Elver gravde ut dalene i løpet av noen tusen år', 'Havet eroderte seg innover i landet'],
      explanation: 'Fjorder er glasiale U-daler under havnivå. Sognefjorden er 1 308 meter dyp og 204 km lang, og har som mange fjorder en grunn terskel ved munningen.',
    },
    {
      question: 'Hva er morene?',
      options: ['Usortert materiale som transporteres og avsettes av en isbre', 'Sortert sand avsatt av elver', 'Vulkansk aske fra utbrudd', 'Saltavsetninger fra fordampet havvann'],
      explanation: 'Morene er en usortert blanding av alt fra leire til store blokker. Endemorener, sidemorener og bunnmorener viser hvor isen har vært.',
    },
    {
      question: 'Hva er en botn?',
      options: ['En skålformet fordypning i fjellsiden gravd ut av en liten isbre', 'Bunnen av en elvedal', 'En undersjøisk fjellrygg', 'En flat slette ved kysten'],
      explanation: 'Botner (karer) er skålformede fordypninger i fjellsider, dannet av botnbreer. Når flere botner graver fra ulike sider, kan det dannes tinder og egger.',
    },
    {
      question: 'Hvorfor hever landet i Skandinavia seg fortsatt?',
      options: ['Fordi jordskorpen langsomt retter seg opp etter at vekten av innlandsisen forsvant', 'Fordi havnivået synker globalt', 'Fordi nye fjellkjeder dannes under Skandinavia', 'Fordi vulkansk aktivitet løfter landet'],
      explanation: 'Under istidene presset innlandsisen skorpen ned. Etter at isen smeltet, hever landet seg gradvis igjen – postglasial landheving. Gamle strandlinjer ligger derfor i dag over havnivå.',
    },
    {
      question: 'Hva er strandflaten?',
      options: ['En lav, flat bergrunnsflate langs norskekysten, formet av forvitring, hav og is', 'En sandstrand i et tropisk område', 'Den flate bunnen av en U-dal', 'Et flatt myrområde i innlandet'],
      explanation: 'Strandflaten er den lave, flate kystsonen med øyer og skjær langs store deler av norskekysten. Den gir grunnlag for bosetting og jordbruk ved kysten.',
    },
  ],

  'geografi-1-3-1': [
    {
      question: 'I hvilket lag av atmosfæren foregår alt vær?',
      options: ['Troposfæren', 'Stratosfæren', 'Mesosfæren', 'Termosfæren'],
      explanation: 'Troposfæren (0–12 km) er det nederste laget der alt vær skjer. Temperaturen synker her med ca. 6,5 °C per kilometer oppover.',
    },
    {
      question: 'Hva er albedo?',
      options: ['Et mål på hvor mye av solstrålingen en overflate reflekterer', 'Et mål på lufttrykket ved bakken', 'Mengden vanndamp i luften', 'Temperaturforskjellen mellom dag og natt'],
      explanation: 'Albedo angis fra 0 (alt absorberes) til 1 (alt reflekteres). Frisk snø har høy albedo (0,80–0,90), mens hav har lav albedo (rundt 0,06–0,10).',
    },
    {
      question: 'Hvilken overflate har høyest albedo?',
      options: ['Frisk snø', 'Mørkt hav', 'Barskog', 'Asfalt'],
      explanation: 'Frisk snø reflekterer 80–90 % av solstrålingen og har dermed langt høyere albedo enn hav, skog og mørke flater.',
    },
    {
      question: 'Hva er den naturlige drivhuseffekten?',
      options: ['At drivhusgasser i atmosfæren absorberer og tilbakestråler varmestråling fra jordoverflaten', 'At sollys reflekteres direkte tilbake til verdensrommet', 'At skyene hindrer alt sollys i å nå bakken', 'At ozonlaget stopper UV-stråling'],
      explanation: 'Drivhusgasser som vanndamp og CO₂ absorberer langbølget varmestråling fra jordoverflaten og sender noe tilbake. Uten denne naturlige effekten ville jorden vært langt kaldere.',
    },
    {
      question: 'Hva er forskjellen på kortbølget og langbølget stråling i jordens energibalanse?',
      options: ['Solen sender kortbølget stråling inn, jorden sender langbølget varmestråling ut', 'Jorden sender kortbølget stråling ut, solen sender langbølget inn', 'Begge strålingstypene kommer bare fra jorden', 'Det finnes bare én type stråling i atmosfæren'],
      explanation: 'Innkommende solstråling er kortbølget. Jordoverflaten varmes opp og sender ut langbølget varmestråling, som drivhusgassene kan absorbere.',
    },
  ],

  'geografi-1-3-2': [
    {
      question: 'Hva kjennetegner et lavtrykk?',
      options: ['Luft strømmer inn mot sentrum og stiger, noe som ofte gir skyer og nedbør', 'Luften synker og gir stabilt, klart vær', 'Det er alltid vindstille i et lavtrykk', 'Lavtrykk gir alltid tørke'],
      explanation: 'I et lavtrykk (syklon) stiger luften. Stigende luft avkjøles, vanndampen kondenserer, og det dannes skyer og nedbør.',
    },
    {
      question: 'Hva er corioliseffekten?',
      options: ['Den tilsynelatende avbøyningen av vind og havstrømmer som skyldes jordens rotasjon', 'Kraften som trekker luft fra høytrykk til lavtrykk', 'Friksjonen mellom vind og bakken', 'Oppvarming av luft over ekvator'],
      explanation: 'Jordrotasjonen avbøyer bevegelser mot høyre på den nordlige halvkule og mot venstre på den sørlige. Ved ekvator er effekten null.',
    },
    {
      question: 'Hvilken vei avbøyes vinden på den nordlige halvkule?',
      options: ['Mot høyre', 'Mot venstre', 'Rett oppover', 'Den avbøyes ikke'],
      explanation: 'Corioliseffekten avbøyer vind mot høyre på den nordlige halvkule og mot venstre på den sørlige halvkule.',
    },
    {
      question: 'Hva er passatvindene?',
      options: ['Stadige vinder som blåser fra det subtropiske høytrykksbeltet mot ekvator', 'Vinder som bare blåser om natten', 'Kalde vinder fra polene mot vest', 'Vinder som skifter retning hver dag'],
      explanation: 'Passatvindene blåser fra høytrykksbeltet rundt 30 grader mot ekvator – fra nordøst på den nordlige halvkule og sørøst på den sørlige. De var viktige for seilskipsfarten.',
    },
    {
      question: 'Hvilken trykkcelle i det globale vindsystemet ligger mellom ekvator og ca. 30 grader bredde?',
      options: ['Hadleycellen', 'Ferrelcellen', 'Polarcellen', 'Golfcellen'],
      explanation: 'Hadleycellen drives av oppstigende luft ved ekvator og synkende luft rundt 30 grader. Ferrelcellen ligger mellom 30 og 60 grader, og polarcellen nærmest polene.',
    },
  ],

  'geografi-1-3-3': [
    {
      question: 'Hva er doggpunktet?',
      options: ['Temperaturen der luften er mettet med vanndamp, slik at kondensasjon begynner', 'Temperaturen der vann koker', 'Tidspunktet på døgnet med mest dugg', 'Høyden der skyer alltid dannes'],
      explanation: 'Når luft avkjøles til doggpunktet, er den relative fuktigheten 100 %. Videre avkjøling gir kondensasjon – vanndamp går over til dråper.',
    },
    {
      question: 'Hva er orografisk nedbør?',
      options: ['Nedbør som dannes når luft tvinges til værs over fjell og avkjøles', 'Nedbør fra luft som varmes opp over bakken og stiger', 'Nedbør langs grensen mellom to luftmasser', 'Nedbør som bare faller om vinteren'],
      explanation: 'Når fuktig luft presses opp over fjell, avkjøles den, vanndampen kondenserer og det faller nedbør på lo-siden. Dette forklarer den høye nedbøren på Vestlandet.',
    },
    {
      question: 'Hvilke tre hovedmekanismer kan løfte luft slik at skyer dannes?',
      options: ['Konveksjon, orografisk løfting og frontal løfting', 'Fordampning, frysing og smelting', 'Høytrykk, vindstille og tørke', 'Tidevann, havstrømmer og bølger'],
      explanation: 'Luft kan stige ved konveksjon (oppvarming nedenfra), ved orografisk løfting over fjell, og ved frontal løfting der varm luft glir opp over kald luft.',
    },
    {
      question: 'Hva kjennetegner cirrusskyer?',
      options: ['Tynne, trevlete skyer av iskrystaller høyt i atmosfæren', 'Tunge, mørke regnskyer nær bakken', 'Tette tåkebanker over innsjøer', 'Kraftige bygeskyer med torden'],
      explanation: 'Cirrus er høye skyer (over 6 km) som består av iskrystaller. De varsler ofte at et værskifte er på vei.',
    },
    {
      question: 'Hva angir relativ fuktighet?',
      options: ['Hvor mye vanndamp luften inneholder i forhold til det maksimale ved den aktuelle temperaturen', 'Hvor mange millimeter nedbør som har falt', 'Hvor mye vann som finnes i bakken', 'Forholdet mellom regn og snø'],
      explanation: 'Relativ fuktighet er vanndampinnholdet i prosent av det luften maksimalt kan holde ved gjeldende temperatur. Ved 100 % er luften mettet.',
    },
  ],

  'geografi-1-3-4': [
    {
      question: 'Hva er forskjellen på vær og klima?',
      options: ['Vær er atmosfærens tilstand her og nå, klima er gjennomsnittsværet over minst 30 år', 'Vær gjelder hav, klima gjelder land', 'Vær er om sommeren, klima er om vinteren', 'Det er ingen forskjell'],
      explanation: 'Vær er tilstanden på et gitt sted og tidspunkt, mens klima er det gjennomsnittlige værmønsteret over en lang periode, vanligvis minst 30 år (klimanormaler).',
    },
    {
      question: 'Hva er Köppens klimaklassifikasjon?',
      options: ['Verdens mest brukte system for å dele inn klimatyper med bokstavkoder basert på temperatur og nedbør', 'En skala for å måle vindstyrke', 'Et system for å klassifisere skyer', 'En metode for å varsle ekstremvær'],
      explanation: 'Köppen-systemet, utviklet av Wladimir Köppen, bruker bokstavkoder (A–E) basert på temperatur og nedbør, der A er tropisk klima og E er polart klima.',
    },
    {
      question: 'Hvorfor har Norge mildere klima enn andre områder på samme breddegrad?',
      options: ['Golfstrømmen og Den nordatlantiske strømmen frakter varmt vann nordover langs kysten', 'Norge ligger nærmere ekvator enn det ser ut på kartet', 'Fjellene varmer opp luften', 'Norge har spesielt mange soldager'],
      explanation: 'Varme havstrømmer fra sørvest gir Norge isfrie havner og milde vintre sammenlignet med andre områder like langt nord, som Alaska og Sibir.',
    },
    {
      question: 'Hva viser et klimadiagram?',
      options: ['Gjennomsnittlig temperatur og nedbør for hver måned på et sted', 'Vindretningen time for time', 'Lufttrykket gjennom et døgn', 'Skydekket gjennom et år'],
      explanation: 'Et klimadiagram kombinerer en temperaturkurve og nedbørssøyler måned for måned, slik at man kan lese av klimatypen på stedet.',
    },
    {
      question: 'Hva kjennetegner et kontinentalt klima sammenlignet med et maritimt klima?',
      options: ['Større temperaturforskjeller mellom sommer og vinter og mindre nedbør', 'Mildere vintre og kjøligere somre', 'Mer nedbør gjennom hele året', 'Ingen årstidsvariasjoner'],
      explanation: 'Innlandet (kontinentalt klima) har varme somre og kalde vintre fordi land varmes og avkjøles raskt. Kystnære områder (maritimt klima) får jevnere temperaturer fordi havet lagrer varme.',
    },
  ],

  'geografi-1-3-5': [
    {
      question: 'Hva er en værfront?',
      options: ['Grenseområdet mellom to luftmasser med ulik temperatur og fuktighet', 'En kraftig vindkast foran et uvær', 'Den fremste delen av en havstrøm', 'Et område med konstant høytrykk'],
      explanation: 'En front er grensen mellom luftmasser. Ved varmfronter glir varm luft opp over kald luft og gir jevn nedbør, mens kaldfronter gir kraftigere byger.',
    },
    {
      question: 'Hva kjennetegner en kaldfront sammenlignet med en varmfront?',
      options: ['Kald luft presser seg under varm luft og gir kortvarig, kraftig nedbør', 'Den gir gradvis skydannelse og jevn nedbør over lang tid', 'Den gir alltid flere dager med tåke', 'Den passerer uten væromslag'],
      explanation: 'Ved en kaldfront tvinges den varme luften raskt til værs, noe som gir intense byger og raskt væromslag. Varmfronter gir mer gradvis og jevn nedbør.',
    },
    {
      question: 'Hvilken vei kommer de fleste nedbørsbringende værsystemene til Norge fra?',
      options: ['Fra vest, som lavtrykk fra Atlanterhavet', 'Fra øst, fra Sibir', 'Fra nord, fra Polhavet', 'Fra sør, fra Middelhavet'],
      explanation: 'Norge ligger i vestavindsbeltet, og lavtrykk fra Atlanterhavet vandrer østover mot kysten og gir mye av nedbøren, særlig på Vestlandet.',
    },
    {
      question: 'Hvilken landsdel i Norge får mest nedbør?',
      options: ['Vestlandet', 'Østlandet', 'Finnmarksvidda', 'Indre Trøndelag'],
      explanation: 'Vestlandet ligger først i møte med fuktige luftmasser fra havet. Orografisk løfting over fjellene gir svært mye nedbør, mens Østlandet ligger i regnskygge.',
    },
    {
      question: 'Hva menes med ekstremvær?',
      options: ['Værhendelser som er uvanlig intense eller langvarige og kan gi skader på mennesker og infrastruktur', 'Alt vær med temperaturer under null grader', 'Vanlige regnbyger om høsten', 'Vind over frisk bris'],
      explanation: 'Ekstremvær omfatter blant annet stormer, styrtregn og langvarig tørke – hendelser som er så kraftige at de kan forårsake skade og fare.',
    },
  ],

  'geografi-1-3-6': [
    {
      question: 'Hvilke av disse er naturlige årsaker til klimaendringer?',
      options: ['Variasjoner i jordens bane rundt solen, vulkanutbrudd og solaktivitet', 'Forbrenning av kull, olje og gass', 'Avskoging av regnskog', 'Metanutslipp fra husdyrhold'],
      explanation: 'Milankovic-sykluser (jordbanevariasjoner), vulkanutbrudd og variasjoner i solaktivitet er naturlige pådriv. Dagens raske oppvarming skyldes derimot i hovedsak menneskeskapte utslipp.',
    },
    {
      question: 'Hva er den viktigste årsaken til menneskeskapte klimaendringer?',
      options: ['Forbrenning av fossile brensler som slipper ut CO₂', 'Naturlige svingninger i havstrømmene', 'Endringer i jordens rotasjonshastighet', 'Økt ozonmengde i stratosfæren'],
      explanation: 'Forbrenning av kull, olje og gass tilfører atmosfæren store mengder CO₂. Avskoging og jordbruk bidrar også, men fossile brensler er den største kilden.',
    },
    {
      question: 'Hva er FNs klimapanel (IPCC)?',
      options: ['Et organ som sammenstiller og vurderer den vitenskapelige kunnskapen om klimaendringer', 'En miljøorganisasjon som driver aksjoner', 'Et selskap som selger klimakvoter', 'En domstol som dømmer i klimasaker'],
      explanation: 'IPCC gjennomgår forskningen om klimaendringer og utgir hovedrapporter som oppsummerer kunnskapsstatus, blant annet den sjette hovedrapporten (2021–2023).',
    },
    {
      question: 'Hva er karbonkretsløpet?',
      options: ['Den naturlige sirkulasjonen av karbon mellom atmosfære, hav, land og levende organismer', 'Transporten av kull fra gruver til kraftverk', 'Prosessen der karbon omdannes til oksygen', 'Resirkulering av plastprodukter'],
      explanation: 'Karbon sirkulerer mellom lagre som havet, skog og jord, atmosfæren og fossile brensler. Menneskelige utslipp tilfører atmosfæren karbon som har vært lagret i millioner av år.',
    },
    {
      question: 'Hvilke endringer i klimaet er observert i Norge?',
      options: ['Høyere temperaturer og mer nedbør', 'Kaldere vintre og mindre nedbør over hele landet', 'Ingen målbare endringer', 'Flere isbreer som vokser kraftig'],
      explanation: 'Norge har fått høyere gjennomsnittstemperatur og mer nedbør, og det ventes mer styrtregn og flom fremover ifølge Norsk klimaservicesenter.',
    },
  ],

  'geografi-1-3-7': [
    {
      question: 'Hva er hovedmålet i Parisavtalen fra 2015?',
      options: ['Å begrense global oppvarming til godt under 2 °C, med mål om 1,5 °C over førindustrielt nivå', 'Å forby all bruk av fossile brensler innen 2020', 'Å flytte all industri til utviklingsland', 'Å bygge atomkraftverk i alle land'],
      explanation: 'Parisavtalen ble vedtatt på COP21 i Paris i 2015 og forplikter landene til å begrense oppvarmingen til godt under 2 °C, helst 1,5 °C.',
    },
    {
      question: 'Hvilke to hovedstrategier finnes i klimapolitikken?',
      options: ['Utslippskutt og klimatilpasning', 'Eksport og import', 'Sentralisering og desentralisering', 'Forbud og subsidier alene'],
      explanation: 'Den ene strategien er å redusere utslippene av klimagasser, den andre er å tilpasse samfunnet til de klimaendringene som likevel kommer.',
    },
    {
      question: 'Hva er klimatilpasning?',
      options: ['Tiltak som reduserer sårbarhet og øker motstandskraften mot konsekvensene av klimaendringer', 'Tiltak som fjerner CO₂ fra atmosfæren', 'Internasjonale avtaler om utslippskvoter', 'Forskning på nye energikilder'],
      explanation: 'Klimatilpasning handler om å forberede samfunnet, for eksempel med bedre overvannssystemer, flomvoller og blågrønn infrastruktur i byene.',
    },
    {
      question: 'Hva handler begrepet klimarettferdighet om?',
      options: ['At ansvar og byrder fordeles ut fra at noen land har sluppet ut mest, mens andre rammes hardest', 'At alle land skal kutte nøyaktig like mange tonn CO₂', 'At klimaspørsmål skal avgjøres i domstoler', 'At bare rike land skal få bruke fossil energi'],
      explanation: 'Rike land står for størstedelen av de historiske utslippene, mens fattige land ofte rammes hardest av konsekvensene. Klimarettferdighet handler om hvordan ansvaret bør fordeles.',
    },
    {
      question: 'Hva er en utfordring i det internasjonale klimasamarbeidet?',
      options: ['Land har ulike interesser, og avtaler er vanskelige å håndheve', 'Det finnes ingen internasjonale klimaavtaler', 'Alle land er allerede enige om alle tiltak', 'Klimaendringer påvirker bare ett land om gangen'],
      explanation: 'Klimaet er et globalt fellesgode: Alle tjener på kutt, men hvert enkelt land kan fristes til å la andre ta kostnadene. Det gjør forpliktende samarbeid krevende.',
    },
  ],

  'geografi-1-4-1': [
    {
      question: 'Hva er et biom?',
      options: ['Et stort økologisk område der planter og dyr er tilpasset det lokale klimaet', 'En enkelt dyreart i et økosystem', 'Et verneområde opprettet av FN', 'En type jordsmonn'],
      explanation: 'Et biom er et stort økologisk område, som tropisk regnskog, ørken eller tundra, der plante- og dyreliv er tilpasset klimaet og miljøforholdene.',
    },
    {
      question: 'Hva er permafrost?',
      options: ['Grunn som holder seg under 0 °C i minst to sammenhengende år', 'Snø som aldri smelter på isbreer', 'Is som dekker innsjøer hele vinteren', 'Frossen nedbør i høye skyer'],
      explanation: 'Permafrost er permanent frosset grunn. Når den tiner på grunn av global oppvarming, frigjøres klimagasser som metan og CO₂.',
    },
    {
      question: 'Hvilket biom kjennetegnes av bartrær og kalde vintre, og dekker store deler av Norge, Sverige, Finland, Russland og Canada?',
      options: ['Boreal barskog (taiga)', 'Savanne', 'Tropisk regnskog', 'Steppe'],
      explanation: 'Taigaen er det boreale barskogbeltet på den nordlige halvkule, med lange, kalde vintre og dominans av bartrær.',
    },
    {
      question: 'Hvilken faktor er viktigst for hvor de ulike vegetasjonssonene ligger?',
      options: ['Klimaet, særlig temperatur og nedbør', 'Landegrensene mellom stater', 'Avstanden til nærmeste by', 'Hvor det finnes oljeforekomster'],
      explanation: 'Vegetasjonssonene følger i hovedsak klimaet fra ekvator mot polene, men påvirkes også av jordsmonn, havstrømmer og topografi.',
    },
    {
      question: 'Hva kjennetegner tundraen?',
      options: ['Trebart landskap med lav vegetasjon, kort vekstsesong og ofte permafrost', 'Tett skog med høye trær og mye nedbør', 'Varmt og tørt landskap med kaktuser', 'Gressletter med store flokker av beitedyr i varmt klima'],
      explanation: 'Tundraen ligger nord for skoggrensen. Den korte vekstsesongen og permafrosten gjør at bare lav vegetasjon som moser, lav og dvergbusker kan vokse der.',
    },
  ],

  'geografi-1-4-2': [
    {
      question: 'Hva er jordsmonn?',
      options: ['Laget av løsmasser over berggrunnen, dannet ved forvitring i samspill med klima og organismer', 'Fast fjell under bakken', 'Bare den delen av jorden som er dyrket', 'Sand som er fraktet med vinden'],
      explanation: 'Jordsmonnet dannes gjennom forvitring av bergarter i samspill med klima, organismer, topografi og tid, og inneholder mineraler, organisk materiale, vann og luft.',
    },
    {
      question: 'Hva er humus?',
      options: ['Nedbrutt organisk materiale som gjør jorden næringsrik og fruktbar', 'Et mineral som finnes i granitt', 'Kunstgjødsel laget av naturgass', 'Den nederste delen av berggrunnen'],
      explanation: 'Humus er rester av planter, dyr og mikroorganismer. Jord med høyt humusinnhold er mørk, næringsrik og som regel god jordbruksjord.',
    },
    {
      question: 'Hvilken jordtype kalles svartjord og regnes blant verdens beste jordbruksjord?',
      options: ['Tsjernozjom', 'Podsol', 'Laterittjord', 'Brunjord'],
      explanation: 'Tsjernozjom (svartjord) er svært humusrik jord som finnes blant annet i Ukraina og på steppene. Podsol er typisk for barskog, og laterittjord finnes i tropene.',
    },
    {
      question: 'Hvorfor er jordvern et viktig tema i Norge?',
      options: ['Bare en liten andel av landarealet er dyrket mark, og matjord er en knapp ressurs', 'Norge har for mye matjord og må redusere arealet', 'All norsk jord er forurenset', 'Jordbruk er forbudt i deler av landet'],
      explanation: 'Norge har lite dyrket mark i forhold til landarealet på grunn av fjell og kort vekstsesong. Derfor er det viktig å hindre at matjord bygges ned.',
    },
    {
      question: 'Hva menes med matsikkerhet?',
      options: ['At alle mennesker har tilgang til nok og trygg mat', 'At maten er innelåst på lager', 'At all mat produseres i eget land', 'At maten er fri for krydder'],
      explanation: 'Matsikkerhet handler om at befolkningen har stabil tilgang til tilstrekkelig og trygg mat. Befolkningsvekst, klimaendringer og tap av matjord utfordrer matsikkerheten globalt.',
    },
  ],

  'geografi-1-4-3': [
    {
      question: 'Hva driver vannets kretsløp?',
      options: ['Solenergi og tyngdekraft', 'Vind og tidevann alene', 'Jordens indre varme', 'Menneskelige vannkraftverk'],
      explanation: 'Solenergien fordamper vann fra hav og land, og tyngdekraften bringer det tilbake som nedbør og avrenning. Slik sirkulerer vannet mellom hav, atmosfære og land.',
    },
    {
      question: 'Hva er en akvifer?',
      options: ['Et underjordisk lag av porøs stein, grus eller sand som inneholder grunnvann', 'En kunstig vanntank for drikkevann', 'En innsjø som er demmet opp', 'Et renseanlegg for avløpsvann'],
      explanation: 'Akviferer er grunnvannsreservoarer i porøse lag. Ogallala-akviferen under den amerikanske prærien dekker 450 000 km² og forsyner store jordbruksområder.',
    },
    {
      question: 'Hva er forskjellen på fysisk og økonomisk vannknapphet?',
      options: ['Fysisk knapphet betyr at det ikke finnes nok vann, økonomisk knapphet betyr at man mangler ressurser til å utnytte vannet', 'Fysisk knapphet gjelder bare havvann', 'Økonomisk knapphet betyr at vann er gratis', 'Begge begrepene betyr nøyaktig det samme'],
      explanation: 'Ved fysisk vannknapphet er vannressursene i seg selv utilstrekkelige. Ved økonomisk vannknapphet finnes vannet, men infrastruktur og penger mangler for å hente det ut og rense det.',
    },
    {
      question: 'Hvor finnes det meste av jordens ferskvann som er tilgjengelig i fast eller flytende form?',
      options: ['I isbreer, snødekke og grunnvann', 'I elver alene', 'I atmosfæren', 'I verdenshavene'],
      explanation: 'Det aller meste av ferskvannet er bundet i isbreer og snø eller lagret som grunnvann. Elver og innsjøer utgjør bare en liten del. Havvann er saltvann.',
    },
    {
      question: 'Hvilken fornybar energikilde står for det aller meste av norsk strømproduksjon?',
      options: ['Vannkraft', 'Solkraft', 'Kullkraft', 'Kjernekraft'],
      explanation: 'Vannkraften utnytter Norges mange vassdrag og store nedbørsmengder og dominerer den norske strømproduksjonen.',
    },
  ],

  'geografi-1-4-4': [
    {
      question: 'Hvordan er fossile brensler dannet?',
      options: ['Av organisk materiale som over millioner av år er omdannet under høyt trykk og temperatur', 'Av smeltet stein fra vulkaner', 'Av saltvann som har fordampet', 'Av mineraler som har krystallisert i fjell'],
      explanation: 'Kull, olje og naturgass er dannet av rester av planter og dyr gjennom millioner av år. De er ikke-fornybare fordi de dannes mye langsommere enn de brukes.',
    },
    {
      question: 'Hva er fornybar energi?',
      options: ['Energi fra kilder som fornyes naturlig og ikke går tomme ved bruk', 'Energi som kan brukes flere ganger uten tap', 'All energi som produseres i Norge', 'Energi fra kull med renseteknologi'],
      explanation: 'Fornybare energikilder som vannkraft, sol, vind, bioenergi og geotermisk energi fornyes kontinuerlig og gir ingen eller svært lave klimagassutslipp under drift.',
    },
    {
      question: 'Hva menes med energiomstilling?',
      options: ['Overgangen fra fossile energikilder til fornybare og utslippsfrie energikilder', 'Å bytte strømleverandør', 'Å flytte oljeproduksjon til nye felt', 'Å bygge flere bensinstasjoner'],
      explanation: 'Energiomstillingen drives av klimahensyn og teknologiutvikling og innebærer at fossil energi gradvis erstattes av fornybar energi.',
    },
    {
      question: 'Hva siktes det til med «det grønne paradokset» i norsk energipolitikk?',
      options: ['Norge har ren fornybar kraft hjemme, men er samtidig en stor eksportør av olje og gass', 'Norge importerer all sin energi', 'Norge bruker mest kullkraft i Europa', 'Norge har forbudt vindkraft'],
      explanation: 'Paradokset er at norsk strømproduksjon er nesten helt fornybar, samtidig som olje- og gasseksporten gir store utslipp når produktene brennes i andre land.',
    },
    {
      question: 'Hvilken av disse energikildene er ikke-fornybar?',
      options: ['Naturgass', 'Vindkraft', 'Solenergi', 'Vannkraft'],
      explanation: 'Naturgass er et fossilt brensel dannet over millioner av år og er dermed ikke-fornybar. Vind, sol og vannkraft fornyes kontinuerlig.',
    },
  ],

  'geografi-1-4-5': [
    {
      question: 'Hva er overfiske?',
      options: ['At en fiskebestand beskattes raskere enn den klarer å fornye seg', 'At det fanges fisk over havoverflaten', 'At fiskere bruker for store båter', 'At fisken flytter seg til andre havområder'],
      explanation: 'Vedvarende overfiske kan få bestander til å kollapse. FN anslår at over en tredjedel av verdens fiskebestander er overfisket.',
    },
    {
      question: 'Hva er havbruk (akvakultur)?',
      options: ['Oppdrett av fisk og andre organismer i merder eller anlegg', 'Fangst av vill fisk med trål', 'Utvinning av olje fra havbunnen', 'Forskning på havstrømmer'],
      explanation: 'Havbruk er kontrollert produksjon av fisk, skalldyr og alger. Norsk lakseoppdrett er et av verdens største havbruksnæringer.',
    },
    {
      question: 'Hvilke utfordringer er knyttet til norsk lakseoppdrett?',
      options: ['Blant annet lakselus, rømming og utslipp fra anleggene', 'At laksen ikke kan selges til utlandet', 'At oppdrett bare kan skje om sommeren', 'At laks ikke kan leve i merder'],
      explanation: 'Lakselus som spres til villaks, rømt oppdrettsfisk som blander seg med ville bestander, og utslipp av næringssalter er sentrale miljøutfordringer i næringen.',
    },
    {
      question: 'Hvilket tiltak brukes for å sikre bærekraftig fiskeri?',
      options: ['Kvoter som begrenser hvor mye som kan fiskes av hver bestand', 'Forbud mot alt fiske i hele verden', 'Fjerning av alle fiskebåter over ti meter', 'Utsetting av rovfisk i alle hav'],
      explanation: 'Kvoter basert på forskning, minstemål, redskapsregler og kontroll er sentrale virkemidler i fiskeriforvaltningen, blant annet i Norge.',
    },
    {
      question: 'Hvorfor er havet en viktig ressurs for Norge?',
      options: ['Fiskeri, havbruk og energiressurser i havområdene gir store inntekter', 'Norge har ingen kystlinje av betydning', 'Havet brukes bare til turisme', 'Norske havområder er for kalde til fiske'],
      explanation: 'Norge forvalter store havområder med rike fiskebestander, en verdensledende oppdrettsnæring og energiressurser som olje og gass.',
    },
  ],

  'geografi-1-4-6': [
    {
      question: 'Hvordan definerte Brundtland-kommisjonen bærekraftig utvikling i 1987?',
      options: ['Utvikling som dekker dagens behov uten å ødelegge mulighetene for fremtidige generasjoner', 'Utvikling som gir høyest mulig økonomisk vekst', 'Utvikling som stanser all bruk av naturressurser', 'Utvikling som bare gjelder fattige land'],
      explanation: 'Definisjonen kom i rapporten «Vår felles fremtid» (1987) og balanserer dagens behov mot kommende generasjoners muligheter.',
    },
    {
      question: 'Hva er sirkulærøkonomi?',
      options: ['Et økonomisk system der produkter og materialer holdes i omløp gjennom gjenbruk, reparasjon og resirkulering', 'En økonomi basert på kontantbetaling', 'Handel som bare foregår lokalt', 'Et system der alt avfall brennes'],
      explanation: 'Sirkulærøkonomi minimerer avfall og ressursbruk ved å holde materialene i kretsløp, i motsetning til den lineære «ta-bruk-kast»-økonomien.',
    },
    {
      question: 'Hva er økosystemtjenester?',
      options: ['Goder og tjenester naturen leverer til mennesker, som pollinering, rensing av vann og karbonlagring', 'Offentlige tjenester innen miljøforvaltning', 'Betalte konsulenttjenester om miljø', 'Strømtjenester fra vannkraftverk alene'],
      explanation: 'Økosystemtjenester deles gjerne i fire kategorier: forsynende, regulerende, kulturelle og støttende tjenester. De har stor økonomisk verdi, men trues av naturødeleggelse.',
    },
    {
      question: 'Hva er forskjellen på fornybare og ikke-fornybare ressurser?',
      options: ['Fornybare ressurser kan fornye seg naturlig, ikke-fornybare finnes i begrensede mengder', 'Fornybare ressurser er alltid gratis', 'Ikke-fornybare ressurser finnes bare i havet', 'Fornybare ressurser kan aldri overutnyttes'],
      explanation: 'Sol, vind og skog fornyes naturlig, mens olje, kull og mineraler er dannet over millioner av år. Merk at også fornybare ressurser som fisk kan overutnyttes.',
    },
    {
      question: 'Hva er FNs bærekraftsmål?',
      options: ['En felles global plan med mål for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringer', 'En liste over verdens mest forurensede byer', 'Et regelverk som bare gjelder for u-land', 'En avtale om tollsatser mellom land'],
      explanation: 'Bærekraftsmålene ble vedtatt i 2015 og gjelder alle land. Flere av målene handler direkte om ansvarlig forvaltning av ressurser, hav og økosystemer.',
    },
  ],

  'geografi-1-5-1': [
    {
      question: 'Hva er fødselsraten?',
      options: ['Antall levendefødte per 1000 innbyggere per år', 'Antall barn per familie', 'Andelen kvinner i befolkningen', 'Antall fødsler per sykehus'],
      explanation: 'Fødselsraten (natalitet) måles per 1000 innbyggere per år. Differansen mellom fødselsrate og dødsrate gir den naturlige tilveksten.',
    },
    {
      question: 'Hva skjer i fase 2 av den demografiske overgangsmodellen?',
      options: ['Dødsraten synker mens fødselsraten forblir høy, og befolkningen vokser raskt', 'Både fødsels- og dødsrate er høye, og befolkningen er stabil', 'Fødselsraten synker raskt mens dødsraten er stabil', 'Befolkningen synker fordi fødselsraten er under dødsraten'],
      explanation: 'I fase 2 gir bedre helse og hygiene synkende dødsrate, mens fødselsraten fortsatt er høy. Resultatet er rask befolkningsvekst.',
    },
    {
      question: 'Hva hevdet Thomas Malthus om befolkning og matproduksjon?',
      options: ['At befolkningen vokser raskere enn matproduksjonen, noe som vil føre til nød', 'At matproduksjonen alltid vokser raskere enn befolkningen', 'At befolkningsvekst ikke påvirker ressursene', 'At verden aldri kan bli overbefolket'],
      explanation: 'Malthus mente befolkningen vokser eksponentielt mens matproduksjonen vokser lineært. Kritikere peker på at teknologisk utvikling har økt matproduksjonen langt mer enn han forutså.',
    },
    {
      question: 'Omtrent hvilket samlet fruktbarhetstall trengs for at en befolkning skal holde seg stabil uten innvandring?',
      options: ['Ca. 2,1 barn per kvinne', 'Ca. 1,0 barn per kvinne', 'Ca. 3,5 barn per kvinne', 'Ca. 5,0 barn per kvinne'],
      explanation: 'Reproduksjonsnivået er omtrent 2,1 barn per kvinne – litt over 2 fordi ikke alle barn vokser opp og får egne barn.',
    },
    {
      question: 'Hva er bæreevne?',
      options: ['Det maksimale antallet individer et økosystem kan opprettholde over tid uten at ressursgrunnlaget forringes', 'Hvor mye vekt en bro tåler', 'Antall mennesker som bor i et land', 'Den totale matproduksjonen i verden'],
      explanation: 'For mennesker avhenger bæreevnen av teknologi, forbruksnivå og fordeling, og den er derfor omdiskutert.',
    },
  ],

  'geografi-1-5-2': [
    {
      question: 'Hva forteller en befolkningspyramide med bred basis og smal topp?',
      options: ['Høy fruktbarhet og en ung, voksende befolkning', 'Lav fruktbarhet og en aldrende befolkning', 'At innvandringen er høy', 'At befolkningen er jevnt fordelt på alle aldre'],
      explanation: 'En ekspansiv pyramide med bred basis viser mange barn og unge, typisk for land med høy fødselsrate og rask befolkningsvekst.',
    },
    {
      question: 'Hva er forsørgelsesbyrden?',
      options: ['Forholdet mellom den ikke-yrkesaktive befolkningen (under 15 og over 64) og den yrkesaktive (15–64 år)', 'Skattenivået i et land', 'Antall barn i en gjennomsnittsfamilie', 'Andelen som mottar sosialhjelp'],
      explanation: 'Høy forsørgelsesbyrde betyr at færre yrkesaktive må forsørge flere barn og eldre gjennom skatt, pensjoner og omsorgstjenester.',
    },
    {
      question: 'Hva er demografisk dividende?',
      options: ['Den økonomiske gevinsten et land kan oppnå når andelen yrkesaktive er stor i forhold til forsørgede', 'Utbytte fra statlige aksjefond', 'Pengestøtte til barnefamilier', 'Inntektene fra eksport av arbeidskraft'],
      explanation: 'Den demografiske dividenden kan oppstå i overgangen mellom høy og lav fruktbarhet, men forutsetter investeringer i utdanning, helse og jobbskaping.',
    },
    {
      question: 'Hvilken form har befolkningspyramiden i et land med lav fruktbarhet og høy levealder?',
      options: ['Urneformet, med smal basis og bred midje eller topp', 'Bred basis og smal topp', 'Helt flat', 'Trekantet med spiss basis'],
      explanation: 'En urneformet (kontraktiv) pyramide viser få barn og mange middelaldrende og eldre – typisk for land med aldrende befolkning.',
    },
    {
      question: 'Hvilken utfordring følger med en aldrende befolkning?',
      options: ['Færre yrkesaktive skal finansiere pensjoner og omsorg for stadig flere eldre', 'Det blir for mange skoleplasser i bruk', 'Arbeidsledigheten blant unge forsvinner automatisk', 'Boligprisene faller alltid'],
      explanation: 'Når andelen eldre øker, stiger utgiftene til pensjon og helse samtidig som andelen i arbeid synker. Mulige tiltak er høyere pensjonsalder og økt arbeidsinnvandring.',
    },
  ],

  'geografi-1-5-3': [
    {
      question: 'Hva er push-faktorer i migrasjon?',
      options: ['Forhold som driver folk bort fra hjemstedet, som krig, fattigdom og naturkatastrofer', 'Forhold som trekker folk til et nytt sted', 'Regler som hindrer folk i å flytte', 'Transportmidlene migranter bruker'],
      explanation: 'Push-faktorer skyver folk bort fra hjemstedet, mens pull-faktorer som jobbmuligheter og trygghet trekker dem mot et nytt sted.',
    },
    {
      question: 'Hva er brain drain?',
      options: ['At høyt utdannet arbeidskraft emigrerer fra utviklingsland til rikere land', 'At studenter glemmer det de har lært', 'At eldre arbeidstakere pensjonerer seg', 'At bedrifter flytter produksjon til lavkostland'],
      explanation: 'Brain drain (hjerneflukt) svekker avsenderlandets kapasitet innen helse, utdanning og forskning når kompetente fagfolk flytter ut.',
    },
    {
      question: 'Hva er remitter?',
      options: ['Pengeoverføringer migranter sender til familie i hjemlandet', 'Stipender til utenlandsstudenter', 'Skatter migranter betaler i mottakerlandet', 'Bistand fra stat til stat'],
      explanation: 'Remitter er en viktig inntektskilde for mange utviklingsland og bidrar til fattigdomsreduksjon, helse og utdanning i mottakerlandene.',
    },
    {
      question: 'Hvilket av disse er en typisk pull-faktor?',
      options: ['Bedre jobbmuligheter og velferdsordninger i mottakerlandet', 'Krig i hjemlandet', 'Tørke og avlingssvikt', 'Forfølgelse av minoriteter'],
      explanation: 'Pull-faktorer er det som trekker migranter mot et sted: arbeid, trygghet, utdanningsmuligheter og velferd. Krig, tørke og forfølgelse er push-faktorer.',
    },
    {
      question: 'Hvilken positiv virkning kan migrasjon ha for avsenderlandet?',
      options: ['Remitter og ny kompetanse fra migranter som returnerer', 'At alle med utdanning forlater landet', 'At fødselsraten automatisk øker', 'At landet mister kontakt med omverdenen'],
      explanation: 'Avsenderland kan tjene på pengeoverføringer, nettverk og kunnskap som migranter bygger opp – noen ganger kalt «brain gain» når kompetansen vender hjem.',
    },
  ],

  'geografi-1-5-4': [
    {
      question: 'Hvem regnes som flyktning etter FNs flyktningkonvensjon fra 1951?',
      options: ['En person som har flyktet fra hjemlandet med velbegrunnet frykt for forfølgelse', 'Alle som flytter til et annet land for å arbeide', 'Alle som er på ferie i utlandet over lang tid', 'Bare personer som har mistet huset sitt i naturkatastrofer'],
      explanation: 'Konvensjonen krever velbegrunnet frykt for forfølgelse på grunn av rase, religion, nasjonalitet, tilhørighet til en sosial gruppe eller politisk oppfatning.',
    },
    {
      question: 'Hva er internt fordrevne (IDP)?',
      options: ['Personer som er tvunget på flukt, men som ikke har krysset en internasjonal grense', 'Flyktninger som har fått opphold i et nytt land', 'Personer som flytter frivillig innenlands for arbeid', 'Studenter som studerer i en annen by'],
      explanation: 'Internt fordrevne faller utenfor flyktningkonvensjonen og er formelt sin egen regjerings ansvar, noe som gjør dem særlig sårbare i konflikter.',
    },
    {
      question: 'Hva er UNHCR?',
      options: ['FNs høykommissær for flyktninger, som beskytter og hjelper mennesker på flukt', 'En internasjonal domstol for krigsforbrytelser', 'FNs organisasjon for utdanning og kultur', 'Et europeisk grensepoliti'],
      explanation: 'UNHCR har ansvar for å beskytte flyktninger og arbeider for tre varige løsninger: frivillig retur, integrering i nærområdet eller gjenbosetting i et tredje land.',
    },
    {
      question: 'Hvilke tre varige løsninger arbeider UNHCR for?',
      options: ['Frivillig retur, lokal integrering og gjenbosetting i et tredjeland', 'Interneringsleirer, deportasjon og grensestenging', 'Visumplikt, kvoter og bøter', 'Husbygging, skolegang og vaksinering'],
      explanation: 'De tre varige løsningene er at flyktningen kan vende trygt hjem, integreres der de har fått beskyttelse, eller gjenbosettes i et annet land.',
    },
    {
      question: 'Hva innebærer det å søke asyl?',
      options: ['Å be om beskyttelse i et annet land fordi man frykter forfølgelse i hjemlandet', 'Å søke om arbeidstillatelse i utlandet', 'Å melde flytting til et annet land', 'Å søke om statsborgerskap etter ti år'],
      explanation: 'En asylsøker ber om beskyttelse. Myndighetene vurderer om vilkårene for flyktningstatus eller annet beskyttelsesbehov er oppfylt.',
    },
  ],

  'geografi-1-5-5': [
    {
      question: 'Hva er sentralisering?',
      options: ['At befolkning, arbeidsplasser og tjenester konsentreres i og rundt de største byene', 'At folk flytter fra byene til distriktene', 'At staten flytter arbeidsplasser ut av Oslo', 'At kommuner slås sammen'],
      explanation: 'Sentralisering innebærer vekst i sentrale strøk og nedgang i distriktene, og er en langvarig trend i Norge.',
    },
    {
      question: 'Hva preget norsk befolkningsutvikling på 1800-tallet?',
      options: ['Sterk befolkningsvekst og stor utvandring, særlig til Amerika', 'Stor innvandring fra Asia', 'Befolkningsnedgang på grunn av lav fruktbarhet', 'At de fleste flyttet til Nord-Norge'],
      explanation: 'På 1800-tallet vokste befolkningen raskt, og flere hundre tusen nordmenn emigrerte, først og fremst til USA.',
    },
    {
      question: 'Hvilken innvandringsbølge fulgte etter EU-utvidelsen i 2004?',
      options: ['Arbeidsinnvandring fra EØS-land, særlig Polen og andre østeuropeiske land', 'Flyktninger fra Sør-Amerika', 'Arbeidsinnvandring fra Pakistan og Tyrkia', 'Tilbakeflytting av norskamerikanere'],
      explanation: 'EØS-avtalen gir fri bevegelse av arbeidskraft. Etter 2004 kom mange arbeidsinnvandrere fra de nye EU-landene i Øst-Europa, særlig Polen.',
    },
    {
      question: 'Hva er Statistisk sentralbyrå (SSB)?',
      options: ['Norges sentrale institusjon for offisiell statistikk, som blant annet lager befolkningsframskrivninger', 'Et departement som styrer innvandringen', 'En bank som forvalter oljefondet', 'Et forskningsinstitutt for klima'],
      explanation: 'SSB samler inn, bearbeider og formidler offisiell statistikk. Befolkningsframskrivningene brukes som grunnlag for politiske beslutninger.',
    },
    {
      question: 'Hvilke konsekvenser har sentraliseringen for distriktene?',
      options: ['Fraflytting, aldrende befolkning og press på lokale tjenestetilbud', 'Sterk befolkningsvekst og boligmangel', 'Flere unge innbyggere enn i byene', 'Stadig flere nye arbeidsplasser i industri'],
      explanation: 'Når unge flytter til byene, blir befolkningen i distriktene eldre og mindre, noe som utfordrer skoler, helsetjenester og lokalt næringsliv. Distriktspolitikken skal motvirke dette.',
    },
  ],

  'geografi-1-5-6': [
    {
      question: 'Hva var Kinas ettbarnspolitikk?',
      options: ['En statlig politikk fra 1979 til 2015 som begrenset de fleste familier til ett barn', 'En kampanje for å øke fødselstallene', 'En lov om gratis barnehage', 'Et program for adopsjon fra utlandet'],
      explanation: 'Ettbarnspolitikken bremset befolkningsveksten, men ga også skjev kjønnsbalanse og en raskt aldrende befolkning. Den ble avviklet i 2015.',
    },
    {
      question: 'Hva er befolkningspolitikk?',
      options: ['Statlige tiltak for å påvirke befolkningens størrelse, vekstrate eller sammensetning', 'Politikk som bare handler om innvandring', 'Folkeavstemninger om politiske saker', 'Registrering av innbyggere i folkeregisteret'],
      explanation: 'Befolkningspolitikk kan være pronatalistisk (stimulere til flere fødsler, som foreldrepermisjon) eller antinatalistisk (begrense fødsler, som familieplanleggingsprogrammer).',
    },
    {
      question: 'Hva måler det økologiske fotavtrykket?',
      options: ['Hvor mye biologisk produktivt areal som kreves for å dekke en persons eller nasjons forbruk og avfall', 'Hvor mange dyrearter som finnes i et område', 'Hvor mye CO₂ et enkelt kjøretøy slipper ut', 'Hvor stort areal et land har'],
      explanation: 'Fotavtrykket viser presset forbruket legger på naturen. Hvis alle levde som nordmenn, ville vi trengt anslagsvis tre jordkloder.',
    },
    {
      question: 'Hva har vist seg å være en nøkkelfaktor for lavere fruktbarhet i utviklingsland?',
      options: ['Utdanning, særlig for jenter og kvinner', 'Høyere tollsatser', 'Større boliger', 'Flere TV-kanaler'],
      explanation: 'Utdanning for kvinner, sammen med tilgang til helsetjenester og familieplanlegging, henger tett sammen med lavere fødselstall – noe blant annet erfaringene fra India viser.',
    },
    {
      question: 'Hvilke to motsatte demografiske utfordringer står verden overfor i dag?',
      options: ['Rask befolkningsvekst i noen land og aldrende, krympende befolkninger i andre', 'Overbefolkning i alle land samtidig', 'Befolkningsnedgang i alle land samtidig', 'At alle land har nøyaktig samme utvikling'],
      explanation: 'Mens deler av Afrika og Asia fortsatt har rask vekst, opplever land som Japan og flere europeiske land aldring og fallende folketall – med ulike utfordringer som resultat.',
    },
  ],

  'geografi-1-6-1': [
    {
      question: 'Hva er urbanisering?',
      options: ['Prosessen der en stadig større andel av befolkningen bor i byer og tettbygde strøk', 'Bygging av nye veier mellom byer', 'At byer blir grønnere og mer miljøvennlige', 'At folk flytter fra byene til landsbygda'],
      explanation: 'Urbanisering omfatter både den fysiske veksten av byer og den kulturelle og økonomiske omstillingen som følger med.',
    },
    {
      question: 'Hva er urbaniseringsgrad?',
      options: ['Andelen av et lands befolkning som bor i byer eller tettbygde strøk', 'Antall byer i et land', 'Hvor høye bygningene i en by er', 'Hvor raskt en by vokser per år'],
      explanation: 'Urbaniseringsgraden uttrykkes i prosent. Land som Japan og Norge har høy urbaniseringsgrad, mens land som Burundi har lav.',
    },
    {
      question: 'Hvilken historisk hendelse satte fart i urbaniseringen i Europa?',
      options: ['Den industrielle revolusjonen', 'Vikingtiden', 'Renessansen', 'Den franske revolusjonen'],
      explanation: 'Den industrielle revolusjonen (1750–1900) skapte fabrikkarbeidsplasser i byene og trakk store mengder mennesker fra landsbygda.',
    },
    {
      question: 'Hvor skjer den raskeste urbaniseringen i dag?',
      options: ['I utviklingsland i Asia og Afrika', 'I Vest-Europa', 'I Nord-Amerika', 'I Australia'],
      explanation: 'Siden 1950 har urbaniseringen vært raskest i utviklingsland, der byene vokser gjennom både tilflytting og naturlig befolkningsvekst.',
    },
    {
      question: 'Når oppsto de første byene i historien?',
      options: ['Rundt 3500 f.Kr.', 'Rundt år 1000 e.Kr.', 'Rundt 1750 e.Kr.', 'Rundt 10 000 f.Kr.'],
      explanation: 'De første byene vokste frem rundt 3500 f.Kr., blant annet i Mesopotamia, da jordbruksoverskudd gjorde det mulig for mange å bo samlet.',
    },
  ],

  'geografi-1-6-2': [
    {
      question: 'Hva er CBD (Central Business District)?',
      options: ['Det sentrale forretningsområdet i en by med høy konsentrasjon av kontorer, butikker og tjenester', 'Et boligområde i utkanten av byen', 'Et industriområde ved havnen', 'En grøntsone rundt byen'],
      explanation: 'CBD har typisk høye tomtepriser, høyhusbebyggelse og god kollektivdekning. I norske byer tilsvarer det ofte sentrum eller bykjernen.',
    },
    {
      question: 'Hva viser den konsentriske sonemodellen til Burgess?',
      options: ['At byen vokser i ringer utover fra sentrum', 'At byen vokser i sektorer langs hovedveiene', 'At byen har flere likestilte kjerner', 'At byer alltid vokser mot nord'],
      explanation: 'Burgess-modellen (1925) beskriver byen som ringer rundt CBD. Sektormodellen (Hoyt) og flerkjernemodellen (Harris og Ullman) er alternative bymodeller.',
    },
    {
      question: 'Hva er gentrifisering?',
      options: ['At eldre, nedslitte byområder oppgraderes og tiltrekker seg mer velstående beboere, slik at de opprinnelige beboerne kan presses ut', 'At nye bydeler bygges på jomfruelig mark', 'At industri flytter inn i boligområder', 'At byområder forfaller og tømmes for folk'],
      explanation: 'Gentrifisering gir stigende boligpriser og endret sosialt miljø. De opprinnelige beboerne, ofte med lavere inntekt, kan bli presset ut av området.',
    },
    {
      question: 'Hva er suburbanisering?',
      options: ['At befolkning og virksomheter flytter fra bykjernen til forstedene', 'At folk flytter inn til bykjernen', 'At byer slås sammen til én', 'At landsbyer blir lagt ned'],
      explanation: 'Suburbanisering er vekst i forstedene rundt byene, ofte muliggjort av bil og pendling. Det motsatte er fortetting i sentrum.',
    },
    {
      question: 'Hvilke av disse er typiske byfunksjoner?',
      options: ['Handel, administrasjon, utdanning og kultur', 'Bare jordbruk', 'Bare gruvedrift', 'Bare fiske'],
      explanation: 'Byer fungerer som sentre for handel og tjenester, industri, administrasjon og politikk, utdanning og forskning, og kultur og turisme.',
    },
  ],

  'geografi-1-6-3': [
    {
      question: 'Hva er en megaby?',
      options: ['Et byområde med mer enn 10 millioner innbyggere', 'En by med mer enn 1 million innbyggere', 'Hovedstaden i et stort land', 'En by med mange skyskrapere'],
      explanation: 'FN definerer megabyer ut fra hele det urbane området. Eksempler er Tokyo (ca. 37 mill.), Delhi, Shanghai og São Paulo.',
    },
    {
      question: 'Hva kjennetegner slum?',
      options: ['Tettbygde boligområder med dårlige boforhold og mangel på grunnleggende tjenester som rent vann og sanitær', 'Områder med høye boligpriser i sentrum', 'Planlagte drabantbyer med god infrastruktur', 'Industriområder uten boliger'],
      explanation: 'Slum preges av overbefolkning, usikker boligsituasjon og manglende tjenester. Kjente eksempler er Dharavi i Mumbai og Kibera i Nairobi.',
    },
    {
      question: 'Hvorfor vokser megabyene i utviklingsland så raskt?',
      options: ['Kombinasjonen av stor tilflytting fra landsbygda og høy naturlig befolkningsvekst', 'Fordi myndighetene tvangsflytter folk til byene', 'Fordi fødselsratene på landsbygda er null', 'Fordi alle byer i rike land krymper'],
      explanation: 'Push-faktorer på landsbygda og pull-faktorer i byen, kombinert med ung befolkning og høye fødselstall, gir rask byvekst i utviklingsland.',
    },
    {
      question: 'Hva innebærer oppgradering «in situ» som tiltak mot slum?',
      options: ['Å forbedre boliger, vann og infrastruktur der folk allerede bor', 'Å rive slummen og flytte beboerne ut av byen', 'Å gjerde inn slumområdene', 'Å bygge kjøpesentre i slummen'],
      explanation: 'In situ-oppgradering betyr å forbedre forholdene på stedet, i stedet for å rive og flytte beboerne. Det bevarer lokalsamfunn og arbeidsplasser.',
    },
    {
      question: 'Hvilke utfordringer er typiske i raskt voksende megabyer?',
      options: ['Mangel på rent vann og sanitær, overbelastet transport og avfallsproblemer', 'For få innbyggere til å fylle boligene', 'For mange parker og grøntområder', 'At alle innbyggerne har for høy inntekt'],
      explanation: 'Når byveksten går raskere enn utbyggingen av infrastruktur, oppstår problemer med vann, sanitær, transport, avfallshåndtering og store sosiale forskjeller.',
    },
  ],

  'geografi-1-6-4': [
    {
      question: 'Hva innebærer bærekraftig byutvikling?',
      options: ['Å utvikle byer som dekker innbyggernes behov samtidig som miljøbelastningen minimeres og sosiale forskjeller reduseres', 'Å bygge så mange boliger som mulig på kortest mulig tid', 'Å stanse all byvekst', 'Å flytte all industri til utlandet'],
      explanation: 'Bærekraftig byutvikling balanserer økonomisk, sosial og miljømessig bærekraft i planleggingen av byen.',
    },
    {
      question: 'Hva er en smart by (smart city)?',
      options: ['En by som bruker teknologi og data til å effektivisere tjenester som transport, energi og avfall', 'En by med mange universiteter', 'En by uten biler', 'En by bygget etter et rutenett'],
      explanation: 'Smarte byer bruker sensorer, data og digitale løsninger for å gjøre byens tjenester mer effektive og miljøvennlige.',
    },
    {
      question: 'Hva handler FNs bærekraftsmål 11 om?',
      options: ['Bærekraftige byer og lokalsamfunn', 'Liv under vann', 'Utryddelse av sult', 'Ren energi til alle'],
      explanation: 'Mål 11 skal gjøre byer og lokalsamfunn inkluderende, trygge, robuste og bærekraftige, med delmål om boliger, transport og luftkvalitet.',
    },
    {
      question: 'Hva er kompakt byutvikling?',
      options: ['Å bygge tettere rundt knutepunkter slik at avstandene og transportbehovet reduseres', 'Å spre bebyggelsen mest mulig utover', 'Å bygge bare eneboliger', 'Å legge alle arbeidsplasser utenfor byen'],
      explanation: 'Kompakt byutvikling med blandet arealbruk reduserer bilavhengighet og energibruk, og styrker grunnlaget for kollektivtransport, sykkel og gange.',
    },
    {
      question: 'Hva er grønn infrastruktur i byer?',
      options: ['Parker, trær, grønne tak og vannveier som gir bedre bymiljø og håndterer overvann', 'Bygninger malt i grønne farger', 'Motorveier med beplantning i midtrabatten', 'Underjordiske parkeringshus'],
      explanation: 'Grønn infrastruktur demper varme, absorberer regnvann, renser luft og gir innbyggerne rekreasjonsområder.',
    },
  ],

  'geografi-1-6-5': [
    {
      question: 'Hvilken by er Norges største?',
      options: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger'],
      explanation: 'Oslo har rundt 710 000 innbyggere i kommunen og over en million i storbyområdet. Deretter følger Bergen, Trondheim og Stavanger.',
    },
    {
      question: 'Hva kjennetegner norsk byutvikling på 2000-tallet?',
      options: ['Fortetting og transformasjon av eldre nærings- og havneområder til boliger', 'Bygging av nye byer i fjellet', 'Avfolkning av alle storbyene', 'Stopp i all boligbygging'],
      explanation: 'I stedet for å bre seg utover bygges norske byer nå tettere, og tidligere industri- og havneområder omdannes til bolig- og næringsområder.',
    },
    {
      question: 'Hva er en byvekstavtale?',
      options: ['En avtale mellom staten og byområdene om at vekst i persontransport skal tas med kollektiv, sykkel og gange', 'En avtale om å bygge flere kjøpesentre', 'En avtale om å utvide bygrensene', 'En avtale om lavere boligpriser'],
      explanation: 'Byvekstavtalene gir statlige midler til kollektivtransport og byutvikling mot at biltrafikken ikke skal øke (nullvekstmålet).',
    },
    {
      question: 'Hvilke drivkrefter ligger bak sentraliseringen i Norge?',
      options: ['Arbeidsmarkedet, utdanningstilbud og tjenester som er konsentrert i byregionene', 'Lover som forbyr folk å bo i distriktene', 'At klimaet er bedre i byene', 'At boligprisene er lavest i Oslo'],
      explanation: 'Folk trekker mot byene fordi jobbene, studiestedene og tjenestetilbudet i stor grad finnes der. Distriktspolitikken forsøker å motvirke denne trenden.',
    },
    {
      question: 'Når vokste de første norske byene frem?',
      options: ['I middelalderen', 'På 1900-tallet', 'Etter andre verdenskrig', 'På 1990-tallet'],
      explanation: 'Byer som Oslo, Bergen og Trondheim har røtter i middelalderen og vokste frem som handels-, kirke- og maktsentre.',
    },
  ],

  'geografi-1-6-6': [
    {
      question: 'Hva er urban varmeøyeffekt?',
      options: ['At byer er merkbart varmere enn omliggende landområder fordi asfalt og betong lagrer varme', 'At byer alltid har flere soltimer enn landsbygda', 'At varmen fra industrien varmer opp hele regionen', 'At byer ligger i varmere klimasoner'],
      explanation: 'Asfalt, betong og bygninger absorberer og lagrer varme, mens lite vegetasjon gir mindre avkjøling. Byen kan bli 2–5 grader varmere enn omlandet.',
    },
    {
      question: 'I hvilke verdensdeler ventes den sterkeste byveksten frem mot 2050?',
      options: ['Afrika og Asia', 'Europa og Nord-Amerika', 'Oseania og Antarktis', 'Sør-Amerika og Europa'],
      explanation: 'Det aller meste av befolknings- og byveksten frem mot 2050 ventes i Afrika og Asia, mens byveksten i Europa og Nord-Amerika er langt svakere.',
    },
    {
      question: 'Hva er segregering i byer?',
      options: ['At ulike befolkningsgrupper bor atskilt i ulike deler av byen', 'At byen deles i flere kommuner', 'At boliger og butikker ligger i samme bygg', 'At alle bydeler har lik befolkningssammensetning'],
      explanation: 'Segregering kan være økonomisk, etnisk eller sosial, og skyldes blant annet boligpriser og flyttemønstre. Den kan svekke samhold og like muligheter.',
    },
    {
      question: 'Hvilke klimatilpasningstiltak er aktuelle for byer?',
      options: ['Grønne tak, åpne vannveier og flomsikring som håndterer styrtregn og hetebølger', 'Å fjerne all vegetasjon fra sentrum', 'Å bygge tettere med asfalt og betong', 'Å flytte alle byer til fjells'],
      explanation: 'Byer må håndtere mer styrtregn, havnivåstigning og hetebølger. Blågrønn infrastruktur, flomsikring og varmeplanlegging er sentrale tiltak.',
    },
    {
      question: 'Hvordan kan teknologi bidra til fremtidens byutvikling?',
      options: ['Gjennom smartere mobilitet, energistyring og digital infrastruktur', 'Ved å erstatte alle parker med datasentre', 'Ved å fjerne behovet for byplanlegging', 'Ved å gjøre kollektivtransport overflødig'],
      explanation: 'Teknologi som delingsmobilitet, smarte strømnett og sanntidsdata kan gjøre byene mer effektive og bærekraftige, men løser ikke alt alene.',
    },
  ],

  'geografi-1-7-1': [
    {
      question: 'Hva er globalisering?',
      options: ['En prosess der land knyttes tettere sammen gjennom økt flyt av varer, kapital, informasjon og mennesker', 'At alle land får samme styresett', 'At verdens befolkning samles i ett land', 'At all handel mellom land opphører'],
      explanation: 'Globalisering gir økt gjensidig avhengighet mellom land og regioner gjennom flyt av varer, tjenester, kapital, teknologi og mennesker.',
    },
    {
      question: 'Hva er frihandel?',
      options: ['Handel mellom land uten toll, kvoter eller andre handelshindringer', 'Handel der alle varer er gratis', 'Handel som bare skjer innenlands', 'Handel som er forbudt ved lov'],
      explanation: 'Frihandel bygger på teorien om komparative fortrinn – at land tjener på å spesialisere seg og handle med hverandre.',
    },
    {
      question: 'Hva er en global verdikjede?',
      options: ['Alle leddene i produksjonen av en vare, fordelt på flere land fra råvare til ferdig produkt', 'En kjede av butikker med samme eier', 'Valutakursene mellom ulike land', 'Et nettverk av banker'],
      explanation: 'I en global verdikjede skjer råvareutvinning, produksjon, montering og markedsføring i ulike land, og hvert ledd tilfører produktet verdi.',
    },
    {
      question: 'Hva er WTO?',
      options: ['Verdens handelsorganisasjon, som forhandler frem og håndhever regler for internasjonal handel', 'En militærallianse', 'FNs klimaorganisasjon', 'En sammenslutning av oljeproduserende land'],
      explanation: 'WTO (World Trade Organization) arbeider for friere verdenshandel gjennom forhandlinger, regelverk og tvisteløsning mellom medlemslandene.',
    },
    {
      question: 'Hva kjennetegner et multinasjonalt selskap?',
      options: ['Det har virksomhet i flere land og organiserer ofte produksjonen i globale verdikjeder', 'Det eies alltid av staten', 'Det selger bare varer i hjemlandet', 'Det har færre enn ti ansatte'],
      explanation: 'Multinasjonale selskaper opererer på tvers av landegrenser og plasserer gjerne ulike deler av produksjonen der kostnadene og kompetansen er gunstigst.',
    },
  ],

  'geografi-1-7-2': [
    {
      question: 'Hva er kulturell globalisering?',
      options: ['At kulturelle uttrykk, verdier og praksiser spres over landegrensene', 'At alle land forbyr utenlandsk kultur', 'At kultur bare finnes i storbyer', 'At museer samarbeider om utstillinger'],
      explanation: 'Kulturell globalisering gjør at mennesker verden over påvirkes av de samme kulturelle impulsene, noe som kan gi både økt mangfold og homogenisering.',
    },
    {
      question: 'Hva menes med amerikanisering?',
      options: ['Spredning av amerikansk kultur, merkevarer og levemåter til andre deler av verden', 'At USA importerer kultur fra andre land', 'At alle land innfører amerikansk valuta', 'At amerikanere flytter til Europa'],
      explanation: 'Amerikanisering brukes ofte kritisk om en ensidig kulturstrøm gjennom populærkultur, merkevarer og media som kan true lokalt kulturelt mangfold.',
    },
    {
      question: 'Hva er glokalisering?',
      options: ['At globale produkter og ideer tilpasses lokale forhold og tradisjoner', 'At lokale produkter forbys i globale markeder', 'At alle byer blir helt like', 'At internett bare finnes i noen land'],
      explanation: 'Glokalisering kombinerer «globalisering» og «lokalisering» – for eksempel når internasjonale matkjeder tilpasser menyen til lokale mattradisjoner.',
    },
    {
      question: 'Hva er den digitale kløften?',
      options: ['Ulikheten i tilgang til internett og digital teknologi mellom grupper og land', 'En feil i programvare', 'Avstanden mellom datasentre', 'Skillet mellom gamle og nye mobiltelefoner'],
      explanation: 'Den digitale kløften handler om at ikke alle har samme tilgang til digital teknologi, noe som kan forsterke økonomiske og sosiale forskjeller.',
    },
    {
      question: 'Hvilket motargument finnes mot påstanden om at globaliseringen utsletter lokal kultur?',
      options: ['Globale impulser blandes ofte med lokale tradisjoner og skaper nye uttrykk', 'Lokal kultur har aldri eksistert', 'All kultur kommer opprinnelig fra samme land', 'Folk slutter å bruke sosiale medier'],
      explanation: 'Kulturmøter fører ofte til hybridisering og glokalisering snarere enn ren ensretting – lokal kultur tilpasser og omformer de globale impulsene.',
    },
  ],

  'geografi-1-7-3': [
    {
      question: 'Hvilke tre dimensjoner kombinerer HDI (Human Development Index)?',
      options: ['Forventet levealder, utdanningsnivå og bruttonasjonalinntekt per innbygger', 'Klima, areal og folketall', 'Militærmakt, eksport og valuta', 'Boligpriser, arbeidsledighet og inflasjon'],
      explanation: 'HDI er utviklet av FNs utviklingsprogram (UNDP) og gir en verdi mellom 0 og 1 basert på helse, utdanning og levestandard.',
    },
    {
      question: 'Hva måler Gini-koeffisienten?',
      options: ['Ulikhet i inntektsfordelingen i et land, fra 0 (perfekt likhet) til 1 (perfekt ulikhet)', 'Den økonomiske veksten i et land', 'Hvor mye et land handler med utlandet', 'Gjennomsnittsinntekten i et land'],
      explanation: 'Jo høyere Gini-koeffisient, desto større er forskjellene mellom rike og fattige i landet.',
    },
    {
      question: 'Hva innebærer utvikling i geografisk forstand?',
      options: ['Forbedring av materielle, sosiale og politiske forhold – ikke bare økonomisk vekst', 'Bare økning i BNP', 'Bare bygging av nye veier', 'At landet får flere innbyggere'],
      explanation: 'Utvikling omfatter bedre helse, utdanning, likestilling, demokrati og bærekraftig ressursforvaltning, i tillegg til økonomisk vekst.',
    },
    {
      question: 'Hva betegner nord-sør-dimensjonen?',
      options: ['Det historiske skillet mellom rike land («nord») og fattigere land («sør»)', 'Klimaforskjellene mellom polene', 'Tidssonene på jorden', 'Skillet mellom kyst og innland'],
      explanation: 'Nord-sør-skillet beskriver globale velstandsforskjeller, men bildet er blitt mer sammensatt med fremvoksende økonomier som BRICS-landene.',
    },
    {
      question: 'Hva er en svakhet ved HDI som mål på utvikling?',
      options: ['Den fanger ikke opp ulikhet innad i landet eller miljøforhold', 'Den måler bare militær styrke', 'Den finnes bare for europeiske land', 'Den oppdateres aldri'],
      explanation: 'HDI er et gjennomsnittsmål og skjuler interne forskjeller. Den sier heller ikke noe direkte om miljømessig bærekraft eller demokrati.',
    },
  ],

  'geografi-1-7-4': [
    {
      question: 'Hva er bistand?',
      options: ['Overføring av ressurser fra rike land eller organisasjoner til fattige land for å fremme utvikling', 'Lån med høye renter mellom banker', 'Eksport av varer til utlandet', 'Skatteinntekter fra oljeproduksjon'],
      explanation: 'Bistand kan være humanitær (nødhjelp), langsiktig utviklingsbistand eller faglig bistand (kunnskapsoverføring).',
    },
    {
      question: 'Hva er forskjellen på bilateral og multilateral bistand?',
      options: ['Bilateral bistand gis direkte fra ett land til et annet, multilateral kanaliseres gjennom internasjonale organisasjoner', 'Bilateral bistand gis bare i krig', 'Multilateral bistand gis bare som matvarer', 'Det er ingen forskjell'],
      explanation: 'Multilateral bistand går gjennom organisasjoner som FN og Verdensbanken. Norge bruker begge former.',
    },
    {
      question: 'Hva er Norad?',
      options: ['Direktoratet for utviklingssamarbeid, som forvalter norsk bistand', 'En norsk oljeplattform', 'Et nordisk forsvarssamarbeid', 'En internasjonal miljødomstol'],
      explanation: 'Norad er fagorganet for norsk utviklingssamarbeid og forvalter og kvalitetssikrer store deler av bistanden.',
    },
    {
      question: 'Hvilken kritikk rettes ofte mot bistand?',
      options: ['At den kan skape avhengighet, forsvinne i korrupsjon eller styres av giverens interesser', 'At den alltid er for stor til å brukes', 'At den bare gis til rike land', 'At den er forbudt etter folkeretten'],
      explanation: 'Kritikere peker på avhengighetsfellen, korrupsjon og at giverland kan ha egeninteresser. Forsvarere viser til resultater innen helse, utdanning og fattigdomsreduksjon.',
    },
    {
      question: 'Hva er humanitær bistand?',
      options: ['Nødhjelp som skal redde liv og lindre nød ved kriser, krig og katastrofer', 'Langsiktige investeringer i infrastruktur', 'Lån til næringsutvikling', 'Kulturutveksling mellom land'],
      explanation: 'Humanitær bistand er akutt nødhjelp – mat, vann, husly og helsehjelp – i motsetning til langsiktig utviklingsbistand som skal bygge samfunn over tid.',
    },
  ],

  'geografi-1-7-5': [
    {
      question: 'Hva er FNs bærekraftsmål?',
      options: ['17 mål vedtatt i 2015 som en felles plan for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030', '10 regler for internasjonal handel', 'En liste over verdens rikeste land', 'Mål som bare gjelder for utviklingsland'],
      explanation: 'Bærekraftsmålene (SDG) gjelder alle land – både rike og fattige – og utgjør kjernen i Agenda 2030.',
    },
    {
      question: 'Hva er Agenda 2030?',
      options: ['Handlingsplanen som bærekraftsmålene inngår i, med 169 delmål som skal nås innen 2030', 'En klimaavtale fra 1997', 'EUs budsjett for 2030', 'En plan for månelanding'],
      explanation: 'Agenda 2030 ble vedtatt av FNs medlemsland i 2015 og består av 17 hovedmål og 169 delmål.',
    },
    {
      question: 'Hva menes med at bærekraftsmålene er universelle?',
      options: ['De gjelder alle land, både rike og fattige', 'De gjelder bare FN-bygningen', 'De gjelder bare land i Afrika', 'De gjelder bare medlemmer av EU'],
      explanation: 'I motsetning til tidligere utviklingsmål retter bærekraftsmålene seg mot alle land. Også Norge har utfordringer, blant annet med forbruk og utslipp.',
    },
    {
      question: 'Hvordan kan det oppstå konflikter mellom ulike bærekraftsmål?',
      options: ['Økonomisk vekst kan for eksempel gi økte utslipp som motvirker klimamålet', 'Målene er formulert slik at konflikter er umulige', 'Bare fattige land kan oppleve målkonflikter', 'Klimamålet gjelder ikke for industri'],
      explanation: 'Målene henger sammen, og tiltak for ett mål kan motvirke et annet – for eksempel kan industrivekst gi arbeidsplasser, men også mer utslipp og naturinngrep.',
    },
    {
      question: 'Hvem definerte begrepet bærekraftig utvikling som ligger til grunn for målene?',
      options: ['Brundtland-kommisjonen i rapporten «Vår felles fremtid» fra 1987', 'Romerriket', 'Verdensbanken i 2015', 'NATO i 1949'],
      explanation: 'Brundtland-kommisjonen definerte bærekraftig utvikling som utvikling som dekker dagens behov uten å ødelegge for fremtidige generasjoner.',
    },
  ],

  'geografi-1-7-6': [
    {
      question: 'Hva gir EØS-avtalen Norge?',
      options: ['Tilgang til EUs indre marked med fri flyt av varer, tjenester, kapital og arbeidskraft', 'Fullt medlemskap i EU', 'Fritak fra alle EU-regler', 'Egen valutaunion med EU'],
      explanation: 'EØS-avtalen knytter Norge, Island og Liechtenstein til EUs indre marked, mot at Norge innfører EUs regelverk for markedet.',
    },
    {
      question: 'Hva er Statens pensjonsfond utland (Oljefondet)?',
      options: ['Et statlig fond som investerer inntektene fra olje- og gassvirksomheten i utlandet', 'En bankkonto for utbetaling av alderspensjon hver måned', 'Et fond som bare investerer i norske bedrifter', 'EUs felles investeringsfond'],
      explanation: 'Oljefondet er verdens største statlige investeringsfond og plasserer petroleumsinntektene i aksjer, obligasjoner og eiendom globalt for å sikre verdier for fremtidige generasjoner.',
    },
    {
      question: 'Hva sier handlingsregelen?',
      options: ['At staten over tid bare skal bruke den forventede realavkastningen av Oljefondet over statsbudsjettet', 'At hele fondet skal brukes innen 2030', 'At fondet bare kan investere i olje', 'At fondet ikke kan brukes i det hele tatt'],
      explanation: 'Handlingsregelen skal sikre at oljeformuen kommer både dagens og fremtidige generasjoner til gode, ved at bare avkastningen fases inn i økonomien.',
    },
    {
      question: 'Hva er Norges viktigste eksportvarer?',
      options: ['Olje, gass og sjømat', 'Biler og elektronikk', 'Korn og ris', 'Tekstiler og klær'],
      explanation: 'Petroleum dominerer norsk eksport, fulgt av sjømat. Det gjør norsk økonomi tett vevd inn i verdensøkonomien.',
    },
    {
      question: 'Hva er NICFI?',
      options: ['Norges internasjonale klima- og skoginitiativ, som betaler for bevaring av regnskog', 'Et norsk oljeselskap', 'En nordisk fiskeriavtale', 'Norges idrettsforbund'],
      explanation: 'Gjennom klima- og skoginitiativet betaler Norge land som Brasil og Indonesia for å redusere avskogingen av regnskog.',
    },
  ],

  'geografi-1-8-1': [
    {
      question: 'Hva er geopolitikk?',
      options: ['Studiet av sammenhengen mellom geografi og politisk makt', 'Studiet av bergarter og mineraler', 'Læren om valgordninger', 'Kartlegging av klimasoner'],
      explanation: 'Geopolitikk analyserer hvordan beliggenhet, naturressurser, topografi og klima påvirker staters utenrikspolitikk og maktforhold.',
    },
    {
      question: 'Hva er en innflytelsessfære?',
      options: ['Et geografisk område der en stormakt har dominerende politisk, økonomisk eller militær innflytelse', 'En sone uten politisk styring', 'Et frihandelsområde', 'Området innenfor et lands grenser'],
      explanation: 'Begrepet stammer fra kolonitiden, men brukes fortsatt om uformelle maktstrukturer der stormakter dominerer områder utenfor egne grenser.',
    },
    {
      question: 'Hva er NATOs kjerneprinsipp?',
      options: ['Kollektivt forsvar – et angrep på ett medlemsland regnes som et angrep på alle', 'Frihandel mellom medlemslandene', 'Felles valuta for alliansen', 'At medlemslandene ikke kan ha egne hærer'],
      explanation: 'NATO bygger på kollektivt forsvar, nedfelt i Atlanterhavspaktens artikkel 5: et væpnet angrep på ett medlem regnes som et angrep på alle.',
    },
    {
      question: 'Hva menes med at verden har gått fra en bipolar til en mer multipolar orden?',
      options: ['Fra to dominerende supermakter under den kalde krigen til flere maktsentre i dag', 'Fra mange stormakter til bare én', 'At polene har byttet plass', 'At FN har overtatt all makt'],
      explanation: 'Under den kalde krigen dominerte USA og Sovjetunionen. I dag preges verden av flere maktsentre, blant annet USA, Kina, EU og Russland.',
    },
    {
      question: 'Hvilke faktorer gir en stat geopolitisk makt?',
      options: ['Blant annet beliggenhet, naturressurser, økonomi, militærmakt og teknologi', 'Bare antall innbyggere', 'Bare landets flateinnhold', 'Bare antall ambassader'],
      explanation: 'Geopolitisk makt bygger på en kombinasjon av geografiske, økonomiske, militære og teknologiske ressurser samt allianser og innflytelse.',
    },
  ],

  'geografi-1-8-2': [
    {
      question: 'Hva er ressursforbannelsen?',
      options: ['At land med store naturressurser ofte får svakere økonomisk utvikling, mer korrupsjon og høyere konfliktrisiko', 'At naturressurser alltid gjør land rike og fredelige', 'At ressurser bare finnes i fattige land', 'En gammel myte uten faglig innhold'],
      explanation: 'I land med svake institusjoner kan ressursinntekter konsentreres hos en elite og utløse kamp om kontrollen – derav «paradox of plenty».',
    },
    {
      question: 'Når sier man at et område har vannstress?',
      options: ['Når det er mindre enn 1 700 kubikkmeter tilgjengelig ferskvann per person per år', 'Når det regner mindre enn ti dager i året', 'Når grunnvannet ligger dypere enn 100 meter', 'Når et land mangler vannkraftverk'],
      explanation: 'Under 1 700 m³ per person per år kalles vannstress, og under 1 000 m³ kalles vannknapphet. Rundt 2 milliarder mennesker lever i land med vannstress.',
    },
    {
      question: 'Hvorfor er Nilen kilde til internasjonal spenning?',
      options: ['Elven deles av 11 land, og demninger oppstrøms påvirker vanntilgangen nedstrøms', 'Elven har tørket helt ut', 'Ingen land bruker vannet fra Nilen', 'Elven skifter løp hvert år'],
      explanation: 'Nilen er livsnerven for mange land, og utbygging oppstrøms – som store demningsprosjekter – skaper spenninger med land nedstrøms som Egypt.',
    },
    {
      question: 'Hvorfor er sjeldne jordarter geopolitisk viktige?',
      options: ['De trengs i moderne teknologi, og produksjonen domineres av få land, særlig Kina', 'De brukes bare til smykker', 'De finnes i ubegrensede mengder overalt', 'De har ingen industriell anvendelse'],
      explanation: 'Sjeldne jordarter inngår i elektronikk, batterier og forsvarsteknologi. Kinas dominans i produksjonen gir landet et strategisk pressmiddel.',
    },
    {
      question: 'Hva menes med at energi kan brukes som våpen?',
      options: ['At stater kan bruke leveranser av olje og gass som politisk pressmiddel', 'At olje brukes til å lage sprengstoff', 'At kraftverk bygges om til festninger', 'At energi bare selges i krigstid'],
      explanation: 'Land som kontrollerer energileveranser kan stenge eller true med å stenge kranene for å presse andre stater politisk.',
    },
  ],

  'geografi-1-8-3': [
    {
      question: 'Hvordan avgrenses Arktis vanligvis?',
      options: ['Som området nord for polarsirkelen, eventuelt av 10 °C-isotermen for juli', 'Som alt land med snø om vinteren', 'Som området nord for Oslo', 'Som hele Norge, Sverige og Finland'],
      explanation: 'Arktis defineres oftest som området nord for polarsirkelen (66°33′N), eller ved linjen der gjennomsnittstemperaturen i varmeste måned er 10 °C.',
    },
    {
      question: 'Hva fastslår Antarktistraktaten?',
      options: ['At Antarktis skal brukes til fredelige formål og forskning, og at territorialkrav er lagt på is', 'At Antarktis er delt mellom USA og Russland', 'At all virksomhet i Antarktis er forbudt', 'At Antarktis tilhører FN'],
      explanation: 'Antarktistraktaten freder kontinentet for militær virksomhet, fremmer forskningssamarbeid og fryser territorialkravene.',
    },
    {
      question: 'Hvilke rettigheter gir FNs havrettskonvensjon (UNCLOS) kyststater?',
      options: ['Suverenitet over territorialfarvannet (12 nautiske mil) og enerett til ressursene i en økonomisk sone på 200 nautiske mil', 'Eiendomsrett til hele verdenshavet', 'Rett til å stenge all internasjonal skipsfart', 'Rett til å kreve toll av alle skip i verden'],
      explanation: 'UNCLOS (1982) gir kyststater territorialfarvann på 12 nautiske mil, en eksklusiv økonomisk sone på 200 nautiske mil, og mulige krav på kontinentalsokkelen utover dette.',
    },
    {
      question: 'Hva fastsetter Svalbardtraktaten fra 1920?',
      options: ['Norsk suverenitet over Svalbard, men med like rettigheter til økonomisk virksomhet for borgerne av traktatlandene', 'At Svalbard er et eget land', 'At Russland eier halve Svalbard', 'At ingen kan bo på Svalbard'],
      explanation: 'Traktaten ga Norge suvereniteten, men borgere fra traktatlandene har lik rett til å drive økonomisk virksomhet der – derfor finnes blant annet russisk virksomhet på øygruppen.',
    },
    {
      question: 'Hvorfor øker den geopolitiske interessen for Arktis?',
      options: ['Issmeltingen åpner for nye seilingsruter og gjør ressurser mer tilgjengelige', 'Området har fått flere innbyggere enn Europa', 'All olje i resten av verden er brukt opp', 'Klimaet i Arktis er blitt tropisk'],
      explanation: 'Når sjøisen smelter, blir seilingsruter som Nordøstpassasjen og ressurser som olje, gass og mineraler mer tilgjengelige, noe som øker stormaktenes interesse.',
    },
  ],

  'geografi-1-8-4': [
    {
      question: 'Hvordan kan risikoen for naturkatastrofer uttrykkes?',
      options: ['Risiko = fare × sårbarhet ÷ kapasitet', 'Risiko = fare + nedbør', 'Risiko = folketall × areal', 'Risiko = magnitude ÷ avstand'],
      explanation: 'Risikoen avhenger av sannsynligheten for en naturhendelse (fare), hvor utsatt samfunnet er (sårbarhet), og samfunnets evne til å forebygge og håndtere den (kapasitet).',
    },
    {
      question: 'Hvorfor blir en naturhendelse først en katastrofe når den rammer et samfunn?',
      options: ['Fordi katastrofe forutsetter tap av liv eller verdier – et jordskjelv i et ubebodd område er ingen katastrofe', 'Fordi naturhendelser bare skjer i byer', 'Fordi medier bare rapporterer fra samfunn', 'Fordi naturen ikke kan skades'],
      explanation: 'Det er kombinasjonen av fare og et sårbart samfunn som skaper katastrofen, ikke naturhendelsen i seg selv.',
    },
    {
      question: 'Hvorfor fikk jordskjelvet i Haiti i 2010 langt større konsekvenser enn sammenlignbare skjelv i Japan?',
      options: ['Haiti hadde svakere bygninger, dårligere beredskap og lavere kapasitet til å håndtere katastrofen', 'Skjelvet i Haiti var tusen ganger sterkere enn alle skjelv i Japan', 'Japan har aldri hatt jordskjelv', 'Haiti ligger ikke ved noen plategrense'],
      explanation: 'Fattigdom gir høy sårbarhet: dårlig byggekvalitet, svak infrastruktur og liten beredskapskapasitet gjorde skadene i Haiti enorme, mens Japan har strenge byggekrav og god beredskap.',
    },
    {
      question: 'Hva er Sendai-rammeverket?',
      options: ['En internasjonal FN-avtale (2015–2030) om katastrofeforebygging og risikoreduksjon', 'En japansk byggestandard', 'En avtale om hvalfangst', 'Et varslingssystem for tsunamier i Stillehavet'],
      explanation: 'Sendai-rammeverket prioriterer å forstå risiko, styrke risikostyring, investere i forebygging og styrke beredskap – inkludert «build back better».',
    },
    {
      question: 'Hva innebærer prinsippet «build back better»?',
      options: ['Å gjenoppbygge etter en katastrofe slik at samfunnet blir mindre sårbart enn før', 'Å bygge alt nøyaktig som det var', 'Å la være å gjenoppbygge i det hele tatt', 'Å flytte alle innbyggere til et annet land'],
      explanation: 'Gjenoppbyggingen etter en katastrofe er en mulighet til å bygge sikrere bygg og bedre infrastruktur, slik at neste hendelse gjør mindre skade.',
    },
  ],

  'geografi-1-8-5': [
    {
      question: 'Hva var Oslo-avtalen fra 1993?',
      options: ['En avtale mellom Israel og PLO om palestinsk selvstyre, forhandlet frem i hemmelighet i Norge', 'En handelsavtale mellom Norge og Sverige', 'En miljøavtale om Nordsjøen', 'En fiskeriavtale med Russland'],
      explanation: 'Oslo-avtalen ga palestinsk selvstyre på deler av Vestbredden og Gazastripen og er et kjent eksempel på norsk fredsdiplomati.',
    },
    {
      question: 'Hvor langt strekker den eksklusive økonomiske sonen (EEZ) seg?',
      options: ['200 nautiske mil fra kystlinjen', '12 nautiske mil fra kystlinjen', '50 kilometer fra hovedstaden', 'Så langt landets skip kan seile'],
      explanation: 'I EEZ har kyststaten enerett til naturressursene i vannet og på og under havbunnen, mens andre stater har rett til fri ferdsel. Norges EEZ er blant verdens største.',
    },
    {
      question: 'Hva ble avtalt i delelinjeavtalen mellom Norge og Russland i 2010?',
      options: ['Grensen mellom de to landenes havområder i Barentshavet', 'Felles forvaltning av Svalbard', 'At Russland fikk Finnmark', 'En tollunion mellom landene'],
      explanation: 'Etter rundt 40 år med forhandlinger ble Norge og Russland enige om delelinjen i Barentshavet, noe som avklarte ressursrettighetene i området.',
    },
    {
      question: 'Hvorfor omtales Norge ofte som en fredsnasjon?',
      options: ['Norge har meglet i internasjonale konflikter og deler ut Nobels fredspris', 'Norge har aldri hatt et forsvar', 'Norge er ikke medlem av noen allianser', 'Norge deltar ikke i FN'],
      explanation: 'Norge har lagt til rette for fredsprosesser, blant annet Oslo-avtalen, driver omfattende bistand og humanitært arbeid, og fredsprisen deles ut i Oslo.',
    },
    {
      question: 'Hvilke internasjonale organisasjoner og avtaler er sentrale for Norge?',
      options: ['FN, NATO og EØS-avtalen', 'OPEC, ASEAN og Mercosur', 'Den afrikanske union og Arabiske liga', 'Warszawapakten og Comecon'],
      explanation: 'Norge er aktivt medlem av FN, har sin sikkerhetsgaranti gjennom NATO, og er økonomisk knyttet til EU gjennom EØS-avtalen.',
    },
  ],

  'geografi-1-8-6': [
    {
      question: 'Hva er en megatrend?',
      options: ['En stor, langvarig og transformativ global endring som påvirker økonomi, politikk, samfunn og miljø', 'En kortvarig motebølge', 'En populær video på sosiale medier', 'En værtype som varer i flere uker'],
      explanation: 'Megatrender som klimaendringer, urbanisering, demografiske endringer og digitalisering er dype, strukturelle endringer som former fremtiden.',
    },
    {
      question: 'Hva er en klimaflyktning?',
      options: ['En person som tvinges til å forlate hjemstedet på grunn av klimaendringer som havnivåstigning, tørke eller flom', 'En person som flytter for å få bedre vær på ferie', 'En forsker som studerer klima i utlandet', 'En fugl som trekker sørover om vinteren'],
      explanation: 'Begrepet er ikke formelt anerkjent i FNs flyktningkonvensjon, og klimaflyktninger mangler derfor den juridiske beskyttelsen politiske flyktninger har.',
    },
    {
      question: 'Hvor ventes mesteparten av verdens befolkningsvekst fremover?',
      options: ['I Afrika og deler av Asia', 'I Europa', 'I Nord-Amerika', 'I Oseania'],
      explanation: 'Befolkningsveksten er sterkest i Afrika sør for Sahara og deler av Asia, mens mange land i Europa og Øst-Asia har aldrende og til dels synkende befolkninger.',
    },
    {
      question: 'Hvordan endrer fornybar energi den globale energigeografien?',
      options: ['Nye områder med mye sol, vind og vannkraft får økt strategisk betydning', 'Energi blir bare produsert i oljeland', 'Geografi slutter å spille noen rolle for energi', 'All energiproduksjon flyttes til polene'],
      explanation: 'Når sol og vind erstatter fossile brensler, forskyves den energipolitiske betydningen fra olje- og gassland til områder og land med gode fornybarressurser og viktige mineraler.',
    },
    {
      question: 'Hvorfor regnes geografisk kompetanse som viktig i fremtidens samfunn?',
      options: ['Utfordringer som klimaendringer, urbanisering og ressursforvaltning krever forståelse av romlige sammenhenger', 'Fordi alle fremtidige jobber krever feltarbeid', 'Fordi papirkart kommer tilbake i alle biler', 'Fordi andre fag legges ned'],
      explanation: 'GIS-teknologi, arealplanlegging, klimatilpasning og global forståelse bygger alle på geografisk kompetanse og romlig tenkemåte.',
    },
  ],

};

export default quizData_geografi;
