import type { QuizQuestion } from './quiz-data';

const quizData_geografi: Record<string, QuizQuestion[]> = {
  "geografi-1-1-1": [
    {
      question: "Hva studerer geografi som vitenskap?",
      options: ["Samspillet mellom natur og samfunn i et romlig perspektiv", "Kun menneskers kultur og historie, uten hensyn til naturgrunnlaget", "Utelukkende jordens indre oppbygning og de fysiske landformene på overflaten", "Kun menneskers kulturhistorie og politiske utvikling gjennom lange tidsepoker"],
      explanation: "Geografi er vitenskapen om jordoverflaten, naturmiljøet og menneskelig aktivitet i et romlig (spatialt) perspektiv – samspillet mellom natur og samfunn.",
    },
    {
      question: "Hva er forskjellen på naturgeografi og samfunnsgeografi?",
      options: ["Naturgeografi studerer naturmiljøet og fysiske prosesser, samfunnsgeografi studerer forholdet mellom mennesker og steder", "Naturgeografi gjelder Norge, samfunnsgeografi gjelder utlandet", "Naturgeografi studerer dyrelivet på jorden, mens samfunnsgeografi utelukkende kartlegger de ville plantesamfunnene i naturen", "Naturgeografi beskriver fortidens landskap, mens samfunnsgeografi utelukkende forutsier hvordan samfunnet vil se ut i framtiden"],
      explanation: "Naturgeografi tar for seg landformer, klima, vegetasjon og andre fysiske forhold, mens samfunnsgeografi (humangeografi) tar for seg befolkning, bosetting, økonomi og kultur i et romlig perspektiv.",
    },
    {
      question: "Hvilke kjernespørsmål stiller geografer?",
      options: ["Hvor? Hvorfor der? Hva betyr det? Hvordan endrer det seg?", "Hva er sant? Hva er godt? Og hva er egentlig vakkert i verden?", "Hva er sant? Hva er moralsk godt? Og hva regnes egentlig som vakkert?", "Når skjedde det? Hvem var involvert? Og hvor mye kostet hele hendelsen?"],
      explanation: "Geografiens romlige tenkemåte handler om å spørre hvor fenomener finnes, hvorfor de finnes akkurat der, hvilke konsekvenser plasseringen har, og hvordan de endrer seg over tid.",
    },
    {
      question: "Hva skiller geografens tilnærming fra biologens når de studerer en art?",
      options: ["Geografen spør hvor arten lever og hvorfor nettopp der", "Geografen er ikke interessert i levende organismer", "Geografen konsentrerer seg utelukkende om arter som allerede har dødd ut", "Geografen studerer artens indre anatomi"],
      explanation: "Mens biologen studerer selve arten, er geografen opptatt av det romlige: hvor arten lever, og hva som forklarer den geografiske utbredelsen.",
    },
    {
      question: "Hva betyr ordet geografi opprinnelig?",
      options: ["Jordbeskrivelse", "Jordoppmåling", "Landkjennskap", "Landkunnskap"],
      explanation: "Ordet kommer fra gresk: geo betyr jord og graphein betyr å skrive. Geografi betyr altså jordbeskrivelse.",
    },
  ],
  "geografi-1-1-2": [
    {
      question: "Hva betyr målestokken 1:50 000 på et kart?",
      options: ["1 cm på kartet tilsvarer 500 meter i virkeligheten", "1 cm på kartet tilsvarer 50 meter i virkeligheten", "1 cm på kartet tilsvarer 5 kilometer i virkeligheten", "1 cm på kartet tilsvarer 50 kilometer i virkeligheten"],
      explanation: "1:50 000 betyr at 1 cm på kartet tilsvarer 50 000 cm i virkeligheten, altså 500 meter.",
    },
    {
      question: "Hva kalles avstanden i høydemeter mellom høydekurvene på et kart?",
      options: ["Ekvidistanse", "Projeksjon", "Ekvatorlinje", "Kartmålestokk"],
      explanation: "Ekvidistansen er den faste høydeforskjellen mellom to nabohøydekurver. Tette kurver betyr bratt terreng.",
    },
    {
      question: "Hva kjennetegner Mercator-projeksjonen?",
      options: ["Den er vinkelriktig, men forvrenger arealer sterkt mot polene", "Den viser alle arealer på jorden i helt riktig innbyrdes størrelse", "Den gjengir alle arealer på jorden i helt riktig innbyrdes størrelse", "Den egner seg kun til kartlegging av de to polare områdene på jorden"],
      explanation: "Mercator-projeksjonen bevarer vinkler og brukes til navigasjon, men forstørrer arealer mot polene – Grønland ser like stort ut som Afrika, selv om Afrika er omtrent 14 ganger større.",
    },
    {
      question: "Hvorfor brukes Mercator-projeksjonen til sjøfart og navigasjon?",
      options: ["Fordi rette linjer på kartet tilsvarer kurs med konstant kompassretning", "Fordi den ble utviklet av erfarne norske sjøfolk", "Fordi den gjengir havdyp og undersjøisk terreng med svært stor nøyaktighet", "Fordi den viser alle land og kontinenter i helt riktig innbyrdes størrelse"],
      explanation: "På et Mercator-kart tilsvarer en rett linje en kurs med konstant kompassretning, noe som gjør projeksjonen praktisk for navigasjon.",
    },
    {
      question: "Hva er forskjellen på topografiske og tematiske kart?",
      options: ["Topografiske kart viser terreng og landskap, tematiske kart viser ett bestemt tema", "Topografiske kart lages bare av staten, mens tematiske kart lages av private forlag", "Topografiske kart finnes bare i digital form, mens tematiske kart alltid trykkes på papir", "Topografiske kart viser utelukkende byer, mens tematiske kart bare framstiller naturområder"],
      explanation: "Topografiske kart viser terrengformer, vann, veier og bebyggelse, mens tematiske kart fremstiller ett bestemt tema, for eksempel befolkningstetthet eller nedbør.",
    },
  ],
  "geografi-1-1-3": [
    {
      question: "Hva er GIS?",
      options: ["Dataverktøy for å samle, lagre, analysere og presentere geografisk informasjon", "Et globalt posisjoneringssystem med satellitter som måler posisjon på bakken nøyaktig", "En internasjonal fagorganisasjon for geologer som samordner forskning på bergarter", "Et sikkerhetssystem som beskytter internettforbindelser mot uautoriserte inntrengere"],
      explanation: "GIS (geografiske informasjonssystemer) kobler stedsinformasjon («hvor») med egenskapsinformasjon («hva») og gjør det mulig å oppdage mønstre og sammenhenger.",
    },
    {
      question: "Hva er en bufferanalyse i GIS?",
      options: ["Å opprette en sone med en gitt avstand rundt et geografisk objekt", "Å lagre kartdata midlertidig i minnet mens en analyse pågår i programmet", "Å oppdage og fjerne målefeil og unøyaktigheter i innsamlede kartdata", "Å komprimere kartlagene slik at hele kartet lastes betydelig raskere"],
      explanation: "En bufferanalyse oppretter en sone rundt et objekt, for eksempel for å finne alle boliger innenfor 500 meter fra en planlagt motorvei.",
    },
    {
      question: "Hva går overlay-analyse ut på?",
      options: ["Å legge flere kartlag oppå hverandre for å finne sammenhenger", "Å oversette all stedstekst på kartet til flere ulike språk", "Å skrive ut ferdige kart i svært stort format på plotter", "Å tegne hele kartet på nytt for hånd med penn og linjal"],
      explanation: "I en overlay-analyse kombineres flere kartlag, for eksempel jordtype, helning og nedbør, for å analysere sammenhenger mellom dem.",
    },
    {
      question: "Hva er forskjellen på vektordata og rasterdata i GIS?",
      options: ["Vektordata består av punkter, linjer og flater, rasterdata består av et rutenett av celler", "Vektordata kan analyseres i GIS, men rasterdata lar seg overhodet ikke vise fram på kart", "Vektordata framstiller alltid havområder, mens rasterdata utelukkende framstiller landjord", "Vektordata er alltid samlet inn tidligere i historien enn det som gjelder rasterdata"],
      explanation: "Vektordata representerer objekter som punkter, linjer og polygoner, mens rasterdata deler området inn i et rutenett av celler (piksler), slik som satellittbilder.",
    },
    {
      question: "Hvordan organiseres informasjonen i et GIS?",
      options: ["I kartlag som kan kombineres, der hvert lag viser én type informasjon", "I et regneark med én rad per objekt", "I tilfeldig rekkefølge uten noen form for tematisk eller romlig inndeling", "I én samlet og fastlåst tegning som ikke kan endres eller deles opp senere"],
      explanation: "GIS bygger på kartlag: veier, vann, bebyggelse og annen informasjon lagres i separate lag som kan slås av og på og kombineres i analyser.",
    },
  ],
  "geografi-1-1-4": [
    {
      question: "Hva er fjernanalyse (remote sensing)?",
      options: ["Innsamling av informasjon om jordoverflaten fra avstand, vanligvis med sensorer på satellitter eller fly", "Systematisk feltarbeid utført av forskere i avsidesliggende og vanskelig tilgjengelige strøk av landet vårt", "Studiet av fjerntliggende galakser og stjernesystemer ved hjelp av kraftige romteleskoper", "Kjemisk laboratorieanalyse av innsamlede bergartsprøver for å bestemme mineralinnholdet"],
      explanation: "Fjernanalyse bruker sensorer på satellitter eller fly som registrerer elektromagnetisk stråling i ulike bølgelengder for å kartlegge og overvåke jordoverflaten.",
    },
    {
      question: "Hva er en spektral signatur?",
      options: ["Det unike mønsteret av hvordan et materiale reflekterer og absorberer stråling i ulike bølgelengder", "Den håndskrevne underskriften til forskeren som opprinnelig tok satellittbildet", "Fargekoden som forklarer hva de ulike nyansene betyr på et ferdig tematisk kart", "Den faste banen som satellitten følger rundt jorden mens den samler inn bildene"],
      explanation: "Ulike overflater har ulike spektrale signaturer: frisk vegetasjon reflekterer sterkt i nærinfrarødt, mens vann absorberer det meste. Slik kan overflatetyper skilles fra hverandre.",
    },
    {
      question: "Hvilken fordel har radarbilder (SAR) sammenlignet med optiske satellittbilder?",
      options: ["De kan ta bilder gjennom skyer og i mørke", "De har alltid høyere fargekvalitet", "De viser overflatetemperaturen på bakken direkte og nøyaktig", "De viser temperaturen direkte"],
      explanation: "Radar sender ut egne signaler og er ikke avhengig av sollys, og radarbølger trenger gjennom skydekke. Derfor fungerer SAR både om natten og i overskyet vær.",
    },
    {
      question: "Hva brukes NDVI til?",
      options: ["Å måle mengden og tilstanden til vegetasjon ut fra satellittdata", "Å varsle jordskjelv ved å registrere spenninger og bevegelser i jordskorpen", "Å måle havdyp og kartlegge bunnforholdene i alle store havområder", "Å beregne befolkningstettheten i tettbygde byer og bydeler"],
      explanation: "NDVI er en vegetasjonsindeks som utnytter at frisk vegetasjon reflekterer mye nærinfrarød stråling. Den brukes blant annet til å overvåke avlinger og tørke.",
    },
    {
      question: "Hvilket av disse er et typisk bruksområde for fjernanalyse?",
      options: ["Overvåking av avskoging og naturkatastrofer", "Telling av trafikk i et veikryss", "Dybdeintervjuer med lokalbefolkningen om deres levekår", "Intervjuer med lokalbefolkning"],
      explanation: "Fjernanalyse brukes til miljøovervåking som avskoging og isbreendringer, kartlegging av naturkatastrofer og overvåking av landbruk over store områder.",
    },
  ],
  "geografi-1-1-5": [
    {
      question: "Hva er feltarbeid i geografi?",
      options: ["Systematisk innsamling av data og observasjoner utendørs på et bestemt sted", "Praktisk arbeid på en bondegård med dyrestell og innhøsting av årets avlinger", "Tolkning av satellittbilder og kartlag på datamaskin inne på et kontor", "Grundig lesing av tidligere publisert faglitteratur på et fagbibliotek"],
      explanation: "Feltarbeid er systematisk datainnsamling ute i felt – måling, kartlegging, intervjuer og observasjon – og gir førstehåndskunnskap om stedet som studeres.",
    },
    {
      question: "Hva er forskjellen på kvantitativ og kvalitativ metode?",
      options: ["Kvantitativ metode samler data som kan uttrykkes i tall, kvalitativ metode beskriver kvaliteter, erfaringer og meninger", "Kvantitativ metode bygger utelukkende på synsing, mens kvalitativ metode alltid bruker presise instrumenter", "Kvalitativ metode kan bare brukes i naturgeografi, mens kvantitativ metode bare hører hjemme i samfunnsfag", "Kvantitativ metode gir alltid sikrere og bedre resultater enn kvalitativ metode uansett problemstilling"],
      explanation: "Kvantitative data kan telles og analyseres statistisk (for eksempel temperaturmålinger), mens kvalitative data beskriver erfaringer og meninger (for eksempel intervjuer).",
    },
    {
      question: "Hva bør være det første steget i planleggingen av et feltarbeid?",
      options: ["Å formulere en problemstilling", "Å kjøpe inn alt måleutstyret", "Å lage en presentasjon av funn", "Å skrive ferdig konklusjonen"],
      explanation: "En tydelig problemstilling styrer hele feltarbeidet: den avgjør hvilke metoder, hvilket utstyr og hvilke data man trenger.",
    },
    {
      question: "Hvilken metode passer best for å undersøke hva innbyggerne mener om et nytt byggeprosjekt?",
      options: ["Intervjuer eller spørreundersøkelse", "Analyse av høydekurvene på et topografisk kart", "Kartlegging av berggrunnen", "Nøyaktig temperaturmåling"],
      explanation: "Meninger og holdninger er kvalitative og delvis kvantitative data som best samles inn gjennom intervjuer og spørreundersøkelser.",
    },
    {
      question: "Hvorfor er feltarbeid en viktig del av geografisk metode?",
      options: ["Det gir førstehåndskunnskap som ikke kan leses ut av kart og statistikk alene", "Det er den eneste metoden geografer kan bruke", "Det gir alltid raskere svar enn kart, statistikk og andre geografiske metoder", "Det er den eneste vitenskapelige metoden geografer overhodet har lov til å bruke"],
      explanation: "Gjennom feltarbeid observerer man fenomenene direkte og kan oppdage forhold som kart, statistikk og fjernanalyse ikke fanger opp.",
    },
  ],
  "geografi-1-1-6": [
    {
      question: "Hva er medianen i et datasett?",
      options: ["Den midterste verdien når alle verdier er sortert", "Summen av alle verdiene i settet delt på antallet verdier", "Summen av alle verdiene i datasettet delt på antallet verdier", "Den aller største enkeltverdien som forekommer i hele datasettet"],
      explanation: "Medianen er den midterste verdien i et sortert datasett. Den påvirkes mindre av ekstremverdier enn gjennomsnittet.",
    },
    {
      question: "Hvorfor kan medianen gi et bedre bilde enn gjennomsnittet i noen datasett?",
      options: ["Fordi den påvirkes mindre av ekstremt høye eller lave verdier", "Fordi den alltid finnes i selve datasettet", "Fordi medianen alltid blir et helt tall og aldri gir desimaler", "Fordi medianen er langt enklere å regne ut for hånd med kalkulator"],
      explanation: "Gjennomsnittet trekkes opp eller ned av ekstremverdier, for eksempel noen få svært høye inntekter, mens medianen viser den typiske midtverdien.",
    },
    {
      question: "Hva viser en befolkningspyramide?",
      options: ["Alders- og kjønnsfordelingen i en befolkning", "Utdanningsnivået i den samlede befolkningen", "Fordelingen av inntekt mellom innbyggerne", "Hvor i landet folk velger å bosette seg"],
      explanation: "En befolkningspyramide er et diagram som viser hvor mange personer det er i hvert alderstrinn, fordelt på kjønn.",
    },
    {
      question: "Hva er et koropletkart?",
      options: ["Et tematisk kart der områder farges etter verdien av en variabel", "Et detaljert kart som utelukkende viser terrengets høydekurver", "Et historisk oversiktskart over tidligere europeiske kolonier", "Et enkelt oversiktskart tegnet helt uten bruk av farger"],
      explanation: "Koropletkart bruker fargetoner for å vise hvordan en verdi, for eksempel befolkningstetthet, varierer mellom områder som kommuner eller land.",
    },
    {
      question: "Hva bør du alltid vurdere når du bruker statistikk fra en kilde?",
      options: ["Hvem som står bak informasjonen, og når dataene ble samlet inn", "Om diagrammene i kilden har pene og innbydende farger", "Om selve kilden er kort nok til å kunne leses raskt", "Om tallene i kilden er avrundet pent til hele tall"],
      explanation: "Kildekritikk innebærer å vurdere hvem som står bak dataene, når de ble samlet inn, og om avsenderen kan ha interesser som farger fremstillingen.",
    },
  ],
  "geografi-1-2-1": [
    {
      question: "Hvilke tre hovedlag består jorden av?",
      options: ["Skorpe, mantel og kjerne", "Skorpe, hav og atmosfære", "Litosfære, biosfære og atmosfære", "Granitt, basalt og lava"],
      explanation: "Jorden er lagdelt med en tynn skorpe ytterst, en tykk mantel under, og en kjerne innerst.",
    },
    {
      question: "Hva er forskjellen på kontinentalskorpe og havskorpe?",
      options: ["Kontinentalskorpen er tykk og lett (granitt), havskorpen er tynn og tung (basalt)", "Kontinentalskorpen er eldst, mens havskorpen stadig fornyes", "Kontinentalskorpen er tynn og tung (basalt), havskorpen er tykk og lett (granitt)", "Havskorpen finnes utelukkende ved de to polene, mens kontinentalskorpen dekker resten"],
      explanation: "Kontinentalskorpen er tykk og består av relativt lett granitt, mens havskorpen er tynn og består av tyngre basalt.",
    },
    {
      question: "Hva er isostasi?",
      options: ["Prinsippet om at jordskorpen flyter på den tyngre mantelen, omtrent som isfjell i vann", "Prinsippet om at havnivået holdes likt over hele jorden av jordens tyngdekraft alene overalt", "Prinsippet om at kontinentene ligger urokkelig fast, fordi mantelen under er kald og stiv", "En type eksplosivt vulkanutbrudd som oppstår når mantelmateriale stiger opp under skorpen"],
      explanation: "Isostasi betyr at skorpen flyter på mantelen. Etter istiden har Skandinavia hevet seg fordi vekten av isen forsvant – det kalles postglasial landheving.",
    },
    {
      question: "Hva er litosfæren?",
      options: ["Jordens ytre, stive skall som består av skorpen og øverste del av mantelen", "Det ytterste laget av atmosfæren", "Laget av løsmasser og forvitret berg som ligger over den faste berggrunnen", "Atmosfærens nederste lag der været dannes, og der nesten all vanndamp finnes"],
      explanation: "Litosfæren er det stive ytterlaget av skorpe og øvre mantel. Den er delt i tektoniske plater som beveger seg på den plastiske astenosfæren.",
    },
    {
      question: "Hvordan har forskere skaffet kunnskap om jordens indre?",
      options: ["Blant annet ved å studere hvordan seismiske bølger fra jordskjelv beveger seg gjennom jorden", "Ved å fotografere jordens indre lagdeling direkte fra satellitter i bane rundt jorden", "Ved å bore borehull helt inn til kjernen og hente opp prøver av materialet der", "Ved å senke varmebestandige kameraer ned gjennom vulkaner til de når kjernen"],
      explanation: "Ingen har boret dypere enn noen kilometer. Kunnskapen kommer særlig fra seismiske bølger, som endrer fart og retning når de passerer gjennom lag med ulike egenskaper.",
    },
  ],
  "geografi-1-2-2": [
    {
      question: "Hva sier teorien om platetektonikk?",
      options: ["Jordens litosfære er delt i plater som beveger seg på astenosfæren", "Jordens overflate er én sammenhengende og fast plate uten sprekker", "At jordskjelv skyldes endringer i månens tyngdekraft som drar og slipper skorpen", "At jordens overflate er én sammenhengende, fast plate uten sprekker eller grenser"],
      explanation: "Platetektonikk er teorien om at litosfæren er delt opp i tektoniske plater i bevegelse. Plategrensene er der jordskjelv, vulkanisme og fjellkjededannelse skjer.",
    },
    {
      question: "Hva skjer ved en divergerende plategrense?",
      options: ["Platene beveger seg fra hverandre, og ny skorpe dannes", "Platene kolliderer og presser opp store fjellkjeder mellom seg", "Platene glir sidelengs forbi hverandre uten at ny skorpe blir dannet", "Den ene platen dykker under den andre og synker gradvis ned i mantelen"],
      explanation: "Ved divergerende grenser (spredningsgrenser) glir platene fra hverandre, og ny havskorpe dannes, slik som ved Den midtatlantiske ryggen.",
    },
    {
      question: "Hva er subduksjon?",
      options: ["At en tektonisk plate dykker under en annen og synker ned i mantelen", "At to plater glir rolig forbi hverandre", "At en plate smelter på overflaten fordi varme stiger opp fra en hotspot", "At en plate deler seg i to og skaper en ny spredningsgrense i litosfæren"],
      explanation: "Subduksjon skjer ved konvergerende plategrenser der tung havskorpe dykker under en annen plate. Det gir dyphavsgroper, vulkanisme og jordskjelv.",
    },
    {
      question: "Hva var Pangea?",
      options: ["Et superkontinent der alle dagens kontinenter hang sammen", "En utdødd vulkanøy som en gang lå midt i Middelhavet ved Sicilia", "En utdødd, kjempestor vulkan som en gang lå på bunnen av Middelhavet", "Navnet forskerne har gitt jordens indre kjerne av fast jern og nikkel"],
      explanation: "Pangea var et superkontinent som eksisterte for omtrent 335–200 millioner år siden, før det brøt opp i dagens kontinenter. Navnet betyr «all jord» på gresk.",
    },
    {
      question: "Hvilket av disse regnes som et bevis for kontinentaldrift?",
      options: ["At kystlinjene til Sør-Amerika og Afrika passer sammen, og at like fossiler finnes på begge sider av Atlanterhavet", "At alle kontinenter i dag har omtrent samme klima og samme temperatur ved kysten", "At havnivået måles til å være nøyaktig likt overalt langs verdens kystlinjer", "At alle jordens fjellkjeder er nøyaktig like gamle og ble dannet samtidig"],
      explanation: "Sammenfallende kystlinjer, like fossiler og like bergartsformasjoner på ulike kontinenter er klassiske bevis for at kontinentene en gang hang sammen.",
    },
  ],
  "geografi-1-2-3": [
    {
      question: "Hva kjennetegner en stratovulkan?",
      options: ["Høy og bratt, bygget av vekslende lag av lava og aske, med eksplosive utbrudd", "Lav og slak med tyntflytende lava og rolige utbrudd", "Lav og slak, bygget av tyntflytende basaltlava som renner ut i rolige utbrudd", "En lang sprekk i bakken uten krater, der lava siver jevnt opp langs hele sprekken"],
      explanation: "Stratovulkaner har tyktflytende lava som fanger gasser og bygger opp trykk. Derfor får de eksplosive utbrudd, og de fleste av verdens farligste vulkaner er stratovulkaner.",
    },
    {
      question: "Hva er en hotspot?",
      options: ["Et område i mantelen med uvanlig høy temperatur der varme stiger opp mot overflaten", "Et område med svært mange kraftige jordskjelv, men helt uten vulkansk aktivitet", "Det aller varmeste punktet inne i en lavastrøm rett etter et vulkanutbrudd", "En plategrense der to plater glir forbi hverandre med uvanlig høy friksjon"],
      explanation: "En hotspot er stasjonær i mantelen. Når en plate beveger seg over den, dannes en rekke av vulkaner – Hawaii-øyrekken er det klassiske eksempelet.",
    },
    {
      question: "Hvorfor dannes det en rekke av vulkanøyer over en hotspot, slik som Hawaii?",
      options: ["Fordi platen beveger seg over den stasjonære hotspoten, slik at nye vulkaner dannes etter hverandre", "Fordi de ferdige vulkanene vandrer bortover langs havbunnen etter at de er dannet", "Fordi øyene i rekken egentlig bygges opp av korallrev og ikke av vulkansk lava", "Fordi hotspoten selv flytter seg raskt frem og tilbake under den faste platen"],
      explanation: "Hotspoten ligger fast, mens litosfæreplaten glir over. Den aktive vulkanen ligger over hotspoten, mens eldre, utdødde vulkaner ligger i en rekke i platens bevegelsesretning.",
    },
    {
      question: "Hvor finner vi det meste av vulkanismen på jorden?",
      options: ["Ved plategrensene, særlig ved subduksjonssoner og spredningsrygger", "Midt inne på de store kontinentene, langt fra alle kjente plategrenser", "Midt inne på de store kontinentene, langt unna alle aktive plategrenser", "Utelukkende langs ekvator, der jordens indre varme er sterkest ved overflaten"],
      explanation: "Vulkanisme er knyttet til plategrensene: subduksjonssoner gir eksplosive vulkaner, og spredningsrygger gir roligere utbrudd. Hotspots er unntaket som kan ligge midt på en plate.",
    },
    {
      question: "Hvilken positiv konsekvens kan vulkanisme ha?",
      options: ["Vulkansk aske og lava gir næringsrik og fruktbar jord", "Vulkanutbrudd fjerner all CO₂ fra atmosfæren", "Vulkanutbrudd senker havnivået globalt fordi vann fordamper i den varme asken", "Vulkaner hindrer jordskjelv i å oppstå"],
      explanation: "Forvitret vulkansk materiale gir svært fruktbar jord, og derfor bor mange mennesker nær vulkaner. Vulkanske områder kan også gi geotermisk energi.",
    },
  ],
  "geografi-1-2-4": [
    {
      question: "Hvorfor oppstår jordskjelv?",
      options: ["Fordi spenninger utløses ved plutselig bevegelse langs en forkastning i jordskorpen", "Fordi kraftig vind over svært lang tid sliter på fjellene til de plutselig gir etter", "Fordi grunnvann i sprekker fryser til is om vinteren og sprenger berggrunnen", "Fordi månens tyngdekraft drar i jordskorpen og river løs biter av berget"],
      explanation: "Jordskjelv oppstår når oppbygde spenninger i skorpen plutselig utløses ved bevegelse langs en forkastning – en bruddflate der bergartene forskyves i forhold til hverandre.",
    },
    {
      question: "Hva er forskjellen på hyposenteret og episenteret?",
      options: ["Hyposenteret er punktet inne i jorden der skjelvet starter, episenteret er punktet rett over på overflaten", "Episenteret er punktet inne i jorden der skjelvet starter, hyposenteret er rett over på overflaten", "Hyposenteret er stedet der tsunamien treffer land, episenteret er der skjelvet starter", "Det er egentlig to helt like navn på nøyaktig det samme punktet inne i jordskorpen"],
      explanation: "Hyposenteret (fokus) er der bruddet skjer i dypet, mens episenteret er punktet på jordoverflaten rett over hyposenteret.",
    },
    {
      question: "Momentmagnitudeskalaen er logaritmisk. Hva betyr det at et skjelv har magnitude 7 sammenlignet med magnitude 5?",
      options: ["Det frigjør omtrent 1 000 ganger mer energi", "Det merkes nøyaktig to ganger så sterkt", "Det varer nøyaktig to minutter lenger enn et skjelv med magnitude fem gjør", "Det frigjør dobbelt så mye energi"],
      explanation: "Ett trinn på skalaen tilsvarer omtrent 32 ganger mer energi. To trinn gir 32 × 32 ≈ 1 000 ganger mer energi.",
    },
    {
      question: "Hvordan oppstår en tsunami?",
      options: ["Vannmasser settes i bevegelse, for eksempel når havbunnen forskyves ved et undersjøisk jordskjelv", "Sterk og vedvarende vind presser opp store bølger som til slutt velter inn over land", "Varmt overflatevann utvider seg ved ekvator og skyver vannmassene innover mot kysten", "Tidevannet blir ekstra kraftig ved fullmåne fordi månens tyngdekraft er sterkest da"],
      explanation: "Tsunamier oppstår når store vannmasser forskyves brått, oftest ved undersjøiske jordskjelv, men også ved skred og vulkanutbrudd. I åpent hav er bølgen lav, men den vokser mot grunt vann.",
    },
    {
      question: "Hva måler Mercalli-skalaen i motsetning til momentmagnitudeskalaen?",
      options: ["Intensiteten – de observerte virkningene av skjelvet på mennesker og bygninger", "Hvor lenge selve skjelvet varer fra det starter til de siste rystelsene stilner av", "Energien som frigjøres i selve hyposenteret der bruddet i skorpen skjer", "Avstanden i kilometer fra episenteret ut til stedet der skjelvet merkes"],
      explanation: "Magnitudeskalaer måler frigjort energi, mens intensitetsskalaer som Mercalli beskriver hvor kraftige virkningene var på et bestemt sted.",
    },
  ],
  "geografi-1-2-5": [
    {
      question: "Hva er forvitring?",
      options: ["Nedbrytning av bergarter på stedet, uten transport av materialet", "Transport av løsmasser med elver og bekker bort fra selve opphavsstedet", "Transport av løsmasser med rennende vann i elver bort fra opphavsstedet", "Avsetning av finkornet sand og leire i elvedeltaer der elven møter havet"],
      explanation: "Forvitring er nedbrytning av bergarter og mineraler der de ligger. Når materialet transporteres bort av vann, vind eller is, kalles det erosjon.",
    },
    {
      question: "Hvordan virker frostforvitring?",
      options: ["Vann i sprekker fryser, utvider seg og sprenger berget i stykker", "Isbreer som glir over og sliper berggrunnen glatt", "Isbreer som glir over berggrunnen og sliper den glatt med stein i bunnen", "Sur nedbør som løser opp kalkstein kjemisk og bryter berget langsomt ned"],
      explanation: "Når vann fryser, utvider det seg. Gjentatte fryse- og tineprosesser i sprekker sprenger løs biter av berget – en mekanisk forvitringsprosess som er vanlig i Norge.",
    },
    {
      question: "Hvilken av disse er en kjemisk forvitringsprosess?",
      options: ["Karbonatforvitring, der kalkstein løses opp av surt vann", "Vinderosjon der sandkorn sliper på bergflaten", "Trykkavlastning, der berget sprekker mekanisk når overliggende masser fjernes", "Rotsprengning, der trerøtter vokser inn i sprekker og mekanisk splitter berget"],
      explanation: "Karbonatforvitring er kjemisk: CO₂ i vann danner en svak syre som løser opp kalkstein. Frostforvitring, rotsprengning og trykkavlastning er mekaniske prosesser.",
    },
    {
      question: "Hva er erosjon?",
      options: ["Transport av løst materiale fra ett sted til et annet med vann, vind, is eller tyngdekraft", "Oppvarming av berggrunnen nedenfra fordi varme stiger opp fra jordens indre kjerne", "Dannelse av nye mineraler og krystaller dypt nede i jordskorpen under høyt trykk", "Kjemisk omvandling av mineraler der de ligger, uten at materialet flyttes bort"],
      explanation: "Erosjon er transport av forvitringsmateriale. De tre hovedagentene er rennende vann, vind og is.",
    },
    {
      question: "Hvilken type forvitring dominerer i varme og fuktige tropiske områder?",
      options: ["Kjemisk forvitring", "Frostforvitring", "Ingen forvitring skjer i tropene", "Isbreerosjon"],
      explanation: "Kjemiske reaksjoner går raskere ved høy temperatur og god tilgang på vann. I tropene dominerer derfor kjemisk forvitring, mens frostforvitring krever temperaturer rundt frysepunktet.",
    },
  ],
  "geografi-1-2-6": [
    {
      question: "Hvordan oppstår meandersvinger i en elv?",
      options: ["Elven eroderer på yttersiden av svingene og avsetter materiale på innersiden", "Gjentatte små jordskjelv forskyver elveløpet litt om gangen til det svinger", "Vinden blåser jevnt mot elveløpet over lang tid og presser det inn i svinger", "Elven eroderer mest på innersiden av svingene og avsetter materiale på yttersiden"],
      explanation: "Strømmen er sterkest på yttersiden av en sving, der elven eroderer, og svakest på innersiden, der materiale avsettes. Slik blir svingene gradvis sterkere.",
    },
    {
      question: "Hva er et elvedelta?",
      options: ["En flat avsetningsform som dannes der en elv munner ut i hav eller innsjø", "En dyp og trang kløft som elven har gravd seg ned i hardt fjell høyt oppe i dalen", "En dyp og trang kløft som elven har gravd ut i hardt fjell i sitt øvre løp", "Den aller øverste delen av et elveløp, der kilden og de første bekkene ligger"],
      explanation: "Når elven møter stillestående vann, synker vannhastigheten og sedimentene avsettes. Navnet kommer fra den greske bokstaven delta (Δ), som har samme form.",
    },
    {
      question: "Hvilken dalform lager rennende elver i fjellandskap?",
      options: ["V-dal", "U-dal", "Botn", "Fjord"],
      explanation: "Elver graver seg ned i berggrunnen og danner V-formede daler. U-daler, botner og fjorder er derimot formet av isbreer.",
    },
    {
      question: "Hva kjennetegner elvens øvre løp?",
      options: ["Bratt fall, sterk strøm og kraftig erosjon nedover i terrenget", "Flatt terreng der elven bare avsetter materialet den frakter med seg", "Flatt terreng og svak strøm, der elven bare avsetter materiale den har fraktet", "Nesten stillestående vann uten merkbar strøm, der elven slynger seg rolig fram"],
      explanation: "I øvre løp er fallet bratt og strømmen sterk, og elven graver seg nedover. I nedre løp dominerer avsetning, og elven slynger seg i meandersvinger.",
    },
    {
      question: "Hvorfor er Norge spesielt godt egnet for vannkraft?",
      options: ["Mye nedbør kombinert med store høydeforskjeller i terrenget", "Store grunnvannsreservoarer under bakken", "Lange og varme somre gir mye fordampning som fyller kraftmagasinene med vann", "Flatt landskap med brede, rolige elver gjør det enkelt å bygge store demninger"],
      explanation: "Vannkraft utnytter fallenergien i vann. Norge har mye nedbør og bratt topografi der vannet faller fra fjell til fjord, noe som gir gode forhold for kraftproduksjon.",
    },
  ],
  "geografi-1-2-7": [
    {
      question: "Hvordan ble de norske fjordene dannet?",
      options: ["Isbreer gravde ut dype U-daler som ble fylt med sjøvann etter istiden", "Elver gravde ut de dype dalene i løpet av noen få tusen år etter istiden", "Havet eroderte seg sakte innover i landet og skar ut de dype, smale fjordene", "Elver gravde ut de dype dalene i løpet av noen tusen år før havet trengte inn"],
      explanation: "Fjorder er glasiale U-daler under havnivå. Sognefjorden er 1 308 meter dyp og 204 km lang, og har som mange fjorder en grunn terskel ved munningen.",
    },
    {
      question: "Hva er morene?",
      options: ["Usortert materiale som transporteres og avsettes av en isbre", "Saltavsetninger som blir liggende igjen etter at havvann har fordampet", "Godt sortert sand og grus som er avsatt lagvis av rennende vann i elver", "Finkornet vulkansk aske som er slynget ut i lufta ved eksplosive utbrudd"],
      explanation: "Morene er en usortert blanding av alt fra leire til store blokker. Endemorener, sidemorener og bunnmorener viser hvor isen har vært.",
    },
    {
      question: "Hva er en botn?",
      options: ["En skålformet fordypning i fjellsiden gravd ut av en liten isbre", "En rygg av grus langs dalbunnen", "Den flate bunnen av en U-formet elvedal der løsmasser har samlet seg over tid", "En vidstrakt og flat slette ved kysten som er bygget opp av avsatt elvemateriale"],
      explanation: "Botner (karer) er skålformede fordypninger i fjellsider, dannet av botnbreer. Når flere botner graver fra ulike sider, kan det dannes tinder og egger.",
    },
    {
      question: "Hvorfor hever landet i Skandinavia seg fortsatt?",
      options: ["Fordi jordskorpen langsomt retter seg opp etter at vekten av innlandsisen forsvant", "Fordi nye fjellkjeder dannes under Skandinavia", "Fordi det globale havnivået synker jevnt, slik at landet ser ut til å heve seg opp", "Fordi det dannes nye fjellkjeder dypt under Skandinavia som presser landet oppover"],
      explanation: "Under istidene presset innlandsisen skorpen ned. Etter at isen smeltet, hever landet seg gradvis igjen – postglasial landheving. Gamle strandlinjer ligger derfor i dag over havnivå.",
    },
    {
      question: "Hva er strandflaten?",
      options: ["En lav, flat bergrunnsflate langs norskekysten, formet av forvitring, hav og is", "En bred sandstrand i et tropisk område formet av bølgeslag", "Den brede, flate dalbunnen i en U-formet dal som isbreene har gravd ut gjennom istidene", "En bred, sandholdig strandsone i tropiske områder, formet av bølgeslag og tidevann over lang tid"],
      explanation: "Strandflaten er den lave, flate kystsonen med øyer og skjær langs store deler av norskekysten. Den gir grunnlag for bosetting og jordbruk ved kysten.",
    },
  ],
  "geografi-1-3-1": [
    {
      question: "I hvilket lag av atmosfæren foregår alt vær?",
      options: ["Troposfæren", "Stratosfæren", "Mesosfæren", "Termosfæren"],
      explanation: "Troposfæren (0–12 km) er det nederste laget der alt vær skjer. Temperaturen synker her med ca. 6,5 °C per kilometer oppover.",
    },
    {
      question: "Hva er albedo?",
      options: ["Et mål på hvor mye av solstrålingen en overflate reflekterer", "Temperaturforskjellen mellom dag og natt på et bestemt målested", "Et mål på hvor stor temperaturforskjellen er mellom dag og natt et sted", "Et mål på hvor mye vanndamp luften inneholder i forhold til metningspunktet"],
      explanation: "Albedo angis fra 0 (alt absorberes) til 1 (alt reflekteres). Frisk snø har høy albedo (0,80–0,90), mens hav har lav albedo (rundt 0,06–0,10).",
    },
    {
      question: "Hvilken overflate har høyest albedo?",
      options: ["Frisk snø", "Mørkt hav", "Barskog", "Asfalt"],
      explanation: "Frisk snø reflekterer 80–90 % av solstrålingen og har dermed langt høyere albedo enn hav, skog og mørke flater.",
    },
    {
      question: "Hva er den naturlige drivhuseffekten?",
      options: ["At drivhusgasser i atmosfæren absorberer og tilbakestråler varmestråling fra jordoverflaten", "At sollyset reflekteres direkte tilbake til verdensrommet fra skyer og lyse flater på bakken igjen", "At sollyset reflekteres direkte tilbake til verdensrommet fra skyer og lyse overflater på bakken", "At skyene i atmosfæren hindrer det meste av det innkommende sollyset i å nå ned til jordoverflaten"],
      explanation: "Drivhusgasser som vanndamp og CO₂ absorberer langbølget varmestråling fra jordoverflaten og sender noe tilbake. Uten denne naturlige effekten ville jorden vært langt kaldere.",
    },
    {
      question: "Hva er forskjellen på kortbølget og langbølget stråling i jordens energibalanse?",
      options: ["Solen sender kortbølget stråling inn, jorden sender langbølget varmestråling ut", "Kortbølget stråling varmer, mens langbølget kjøler ned", "Jorden sender kortbølget stråling ut, mens solen sender langbølget varmestråling inn", "Begge strålingstypene har sitt opphav i jordoverflaten og sendes oppover i atmosfæren"],
      explanation: "Innkommende solstråling er kortbølget. Jordoverflaten varmes opp og sender ut langbølget varmestråling, som drivhusgassene kan absorbere.",
    },
  ],
  "geografi-1-3-2": [
    {
      question: "Hva kjennetegner et lavtrykk?",
      options: ["Luft strømmer inn mot sentrum og stiger, noe som ofte gir skyer og nedbør", "Luften synker mot bakken og strømmer utover, noe som gir stabilt og klart vær", "Luften synker og strømmer utover fra sentrum, noe som gir stabilt og klart vær", "Lavtrykk fører alltid med seg langvarig tørke og skyfri himmel over store områder"],
      explanation: "I et lavtrykk (syklon) stiger luften. Stigende luft avkjøles, vanndampen kondenserer, og det dannes skyer og nedbør.",
    },
    {
      question: "Hva er corioliseffekten?",
      options: ["Den tilsynelatende avbøyningen av vind og havstrømmer som skyldes jordens rotasjon", "Kraften som trekker luft fra høytrykk til lavtrykk", "Kraften som trekker luften direkte fra et høytrykk mot et lavtrykk langs trykkgradienten", "Den kraftige oppvarmingen av fuktig luft over ekvator som får den til å stige raskt til værs"],
      explanation: "Jordrotasjonen avbøyer bevegelser mot høyre på den nordlige halvkule og mot venstre på den sørlige. Ved ekvator er effekten null.",
    },
    {
      question: "Hvilken vei avbøyes vinden på den nordlige halvkule?",
      options: ["Mot høyre", "Mot venstre", "Rett oppover", "Den avbøyes ikke"],
      explanation: "Corioliseffekten avbøyer vind mot høyre på den nordlige halvkule og mot venstre på den sørlige halvkule.",
    },
    {
      question: "Hva er passatvindene?",
      options: ["Stadige vinder som blåser fra det subtropiske høytrykksbeltet mot ekvator", "Kraftige vinder som bare blåser om vinteren", "Uforutsigbare vinder som skifter retning hver dag alt etter dagens oppvarming", "Kalde vinder som blåser fra polområdene mot vest og gir lave temperaturer i vest"],
      explanation: "Passatvindene blåser fra høytrykksbeltet rundt 30 grader mot ekvator – fra nordøst på den nordlige halvkule og sørøst på den sørlige. De var viktige for seilskipsfarten.",
    },
    {
      question: "Hvilken trykkcelle i det globale vindsystemet ligger mellom ekvator og ca. 30 grader bredde?",
      options: ["Hadleycellen", "Ferrelcellen", "Polarcellen", "Golfcellen"],
      explanation: "Hadleycellen drives av oppstigende luft ved ekvator og synkende luft rundt 30 grader. Ferrelcellen ligger mellom 30 og 60 grader, og polarcellen nærmest polene.",
    },
  ],
  "geografi-1-3-3": [
    {
      question: "Hva er doggpunktet?",
      options: ["Temperaturen der luften er mettet med vanndamp, slik at kondensasjon begynner", "Tidspunktet på døgnet med mest dugg, siden bakken da er aller kaldest om natten", "Tidspunktet på døgnet der det dannes mest dugg fordi bakken er aller kaldest akkurat da", "Temperaturen der flytende vann går over til damp og fordamper fullstendig fra overflaten"],
      explanation: "Når luft avkjøles til doggpunktet, er den relative fuktigheten 100 %. Videre avkjøling gir kondensasjon – vanndamp går over til dråper.",
    },
    {
      question: "Hva er orografisk nedbør?",
      options: ["Nedbør som dannes når luft tvinges til værs over fjell og avkjøles", "Nedbør fra luft som varmes opp over bakken om sommeren og stiger til værs", "Nedbør som faller langs grenseflaten mellom to luftmasser med ulik temperatur", "Nedbør som utelukkende faller om vinteren når kald luft dominerer over landet"],
      explanation: "Når fuktig luft presses opp over fjell, avkjøles den, vanndampen kondenserer og det faller nedbør på lo-siden. Dette forklarer den høye nedbøren på Vestlandet.",
    },
    {
      question: "Hvilke tre hovedmekanismer kan løfte luft slik at skyer dannes?",
      options: ["Konveksjon, orografisk løfting og frontal løfting", "Nedbør, avrenning og fordampning", "Fordampning fra havet, frysing i skyene og smelting av nedbøren på vei ned", "Tidevann, havstrømmer og bølger"],
      explanation: "Luft kan stige ved konveksjon (oppvarming nedenfra), ved orografisk løfting over fjell, og ved frontal løfting der varm luft glir opp over kald luft.",
    },
    {
      question: "Hva kjennetegner cirrusskyer?",
      options: ["Tynne, trevlete skyer av iskrystaller høyt i atmosfæren", "Flate, grå skyer i mellomhøyde", "Tunge, mørke regnskyer som ligger lavt nær bakken og gir langvarig nedbør", "Kraftige, tårnformede bygeskyer med torden, lyn og korte, intense regnbyger"],
      explanation: "Cirrus er høye skyer (over 6 km) som består av iskrystaller. De varsler ofte at et værskifte er på vei.",
    },
    {
      question: "Hva angir relativ fuktighet?",
      options: ["Hvor mye vanndamp luften inneholder i forhold til det maksimale ved den aktuelle temperaturen", "Hvor mange millimeter nedbør som har falt", "Hvor mye vann som til enhver tid finnes lagret i jordsmonnet og bakken under overflaten et sted", "Forholdet mellom hvor mye av den totale nedbøren som faller som regn og hvor mye som blir til snø"],
      explanation: "Relativ fuktighet er vanndampinnholdet i prosent av det luften maksimalt kan holde ved gjeldende temperatur. Ved 100 % er luften mettet.",
    },
  ],
  "geografi-1-3-4": [
    {
      question: "Hva er forskjellen på vær og klima?",
      options: ["Vær er atmosfærens tilstand her og nå, klima er gjennomsnittsværet over minst 30 år", "Vær gjelder bare de varme sommermånedene, mens klima utelukkende gjelder vinterhalvåret", "Vær er det man opplever om sommeren, mens klima er de forholdene man har gjennom vinteren", "Vær beskriver bare forholdene ute over havet, mens klima beskriver forholdene inne over land"],
      explanation: "Vær er tilstanden på et gitt sted og tidspunkt, mens klima er det gjennomsnittlige værmønsteret over en lang periode, vanligvis minst 30 år (klimanormaler).",
    },
    {
      question: "Hva er Köppens klimaklassifikasjon?",
      options: ["Verdens mest brukte system for å dele inn klimatyper med bokstavkoder basert på temperatur og nedbør", "Et system for å klassifisere skyer", "En internasjonalt brukt skala for å måle og gradere vindstyrke i trinn fra vindstille til full orkan", "Et fast system for å klassifisere de ulike skytypene i atmosfæren etter deres høyde, form og utseende"],
      explanation: "Köppen-systemet, utviklet av Wladimir Köppen, bruker bokstavkoder (A–E) basert på temperatur og nedbør, der A er tropisk klima og E er polart klima.",
    },
    {
      question: "Hvorfor har Norge mildere klima enn andre områder på samme breddegrad?",
      options: ["Golfstrømmen og Den nordatlantiske strømmen frakter varmt vann nordover langs kysten", "Norge ligger nærmere ekvator enn det ser ut på kartet", "De høye fjellene langs kysten varmer opp luftmassene som blåser inn fra havet i vest", "Norge har uvanlig mange soldager i løpet av året, og disse varmer opp landet ekstra mye"],
      explanation: "Varme havstrømmer fra sørvest gir Norge isfrie havner og milde vintre sammenlignet med andre områder like langt nord, som Alaska og Sibir.",
    },
    {
      question: "Hva viser et klimadiagram?",
      options: ["Gjennomsnittlig temperatur og nedbør for hver måned på et sted", "Lufttrykket time for time", "Hvor stort skydekket er, målt måned for måned gjennom hele året på et sted", "Hvordan vindretningen endrer seg time for time gjennom et helt døgn på et sted"],
      explanation: "Et klimadiagram kombinerer en temperaturkurve og nedbørssøyler måned for måned, slik at man kan lese av klimatypen på stedet.",
    },
    {
      question: "Hva kjennetegner et kontinentalt klima sammenlignet med et maritimt klima?",
      options: ["Større temperaturforskjeller mellom sommer og vinter og mindre nedbør", "Mildere vintre og kjøligere somre gjennom året", "Mer og jevnere nedbør gjennom hele året enn det man finner i et maritimt klima", "Så godt som ingen årstidsvariasjoner i temperatur eller nedbør gjennom hele året"],
      explanation: "Innlandet (kontinentalt klima) har varme somre og kalde vintre fordi land varmes og avkjøles raskt. Kystnære områder (maritimt klima) får jevnere temperaturer fordi havet lagrer varme.",
    },
  ],
  "geografi-1-3-5": [
    {
      question: "Hva er en værfront?",
      options: ["Grenseområdet mellom to luftmasser med ulik temperatur og fuktighet", "Et kraftig vindkast som kommer rett foran et uvær og varsler at stormen kommer", "Den fremste, ledende delen av en havstrøm der varmt og kaldt vann møtes i havet", "Et kraftig vindkast som kommer foran et uvær og varsler at stormen er på vei inn"],
      explanation: "En front er grensen mellom luftmasser. Ved varmfronter glir varm luft opp over kald luft og gir jevn nedbør, mens kaldfronter gir kraftigere byger.",
    },
    {
      question: "Hva kjennetegner en kaldfront sammenlignet med en varmfront?",
      options: ["Kald luft presser seg under varm luft og gir kortvarig, kraftig nedbør", "Den gir gradvis skydannelse og jevn, langvarig nedbør over mange timer", "Den fører alltid med seg flere sammenhengende dager med tett tåke og lave skyer", "Den passerer et sted uten noe merkbart væromslag i temperatur, vind eller nedbør"],
      explanation: "Ved en kaldfront tvinges den varme luften raskt til værs, noe som gir intense byger og raskt væromslag. Varmfronter gir mer gradvis og jevn nedbør.",
    },
    {
      question: "Hvilken vei kommer de fleste nedbørsbringende værsystemene til Norge fra?",
      options: ["Fra vest, som lavtrykk fra Atlanterhavet", "Fra sør, fra Middelhavet", "Fra nord, som kald arktisk luft og lavtrykk som trekker sørover fra Polhavet", "Fra øst, fra Russland"],
      explanation: "Norge ligger i vestavindsbeltet, og lavtrykk fra Atlanterhavet vandrer østover mot kysten og gir mye av nedbøren, særlig på Vestlandet.",
    },
    {
      question: "Hvilken landsdel i Norge får mest nedbør?",
      options: ["Vestlandet", "Østlandet", "Finnmarksvidda", "Indre Trøndelag"],
      explanation: "Vestlandet ligger først i møte med fuktige luftmasser fra havet. Orografisk løfting over fjellene gir svært mye nedbør, mens Østlandet ligger i regnskygge.",
    },
    {
      question: "Hva menes med ekstremvær?",
      options: ["Værhendelser som er uvanlig intense eller langvarige og kan gi skader på mennesker og infrastruktur", "Alt vær med temperaturer under null grader", "Alt slags vær der temperaturen faller under null grader og det legger seg både frost og is på bakken", "All vind som er sterkere enn frisk bris, helt uavhengig av om den fører til skade og fare eller ikke"],
      explanation: "Ekstremvær omfatter blant annet stormer, styrtregn og langvarig tørke – hendelser som er så kraftige at de kan forårsake skade og fare.",
    },
  ],
  "geografi-1-3-6": [
    {
      question: "Hvilke av disse er naturlige årsaker til klimaendringer?",
      options: ["Variasjoner i jordens bane rundt solen, vulkanutbrudd og solaktivitet", "Forbrenning av kull, olje og gass i industri, transport og til oppvarming", "Storstilt avskoging av tropisk regnskog for å gi plass til jordbruk og beitemark", "Utslipp av metan fra husdyrhold og fra risdyrking i store deler av verdens jordbruk"],
      explanation: "Milankovic-sykluser (jordbanevariasjoner), vulkanutbrudd og variasjoner i solaktivitet er naturlige pådriv. Dagens raske oppvarming skyldes derimot i hovedsak menneskeskapte utslipp.",
    },
    {
      question: "Hva er den viktigste årsaken til menneskeskapte klimaendringer?",
      options: ["Forbrenning av fossile brensler som slipper ut CO₂", "Endringer i jordens rotasjonshastighet", "Økt mengde ozon i stratosfæren som slipper mer varmestråling ned mot bakken", "Naturlige svingninger i havstrømmene"],
      explanation: "Forbrenning av kull, olje og gass tilfører atmosfæren store mengder CO₂. Avskoging og jordbruk bidrar også, men fossile brensler er den største kilden.",
    },
    {
      question: "Hva er FNs klimapanel (IPCC)?",
      options: ["Et organ som sammenstiller og vurderer den vitenskapelige kunnskapen om klimaendringer", "Et fond som deler ut klimastøtte", "Et kommersielt selskap som kjøper og selger klimakvoter til bedrifter på det åpne markedet", "En internasjonal miljøorganisasjon som driver aksjoner og kampanjer mot store utslipp av CO₂"],
      explanation: "IPCC gjennomgår forskningen om klimaendringer og utgir hovedrapporter som oppsummerer kunnskapsstatus, blant annet den sjette hovedrapporten (2021–2023).",
    },
    {
      question: "Hva er karbonkretsløpet?",
      options: ["Den naturlige sirkulasjonen av karbon mellom atmosfære, hav, land og levende organismer", "Kretsløpet av vann mellom hav, luft og land", "Transporten av kull fra gruvene og fram til kraftverkene der det brennes til varme og energi", "Prosessen der karbon i plantene omdannes direkte til rent oksygen under fotosyntesen i bladene"],
      explanation: "Karbon sirkulerer mellom lagre som havet, skog og jord, atmosfæren og fossile brensler. Menneskelige utslipp tilfører atmosfæren karbon som har vært lagret i millioner av år.",
    },
    {
      question: "Hvilke endringer i klimaet er observert i Norge?",
      options: ["Høyere temperaturer og mer nedbør", "Kaldere vintre og mindre nedbør over hele landet", "Ingen målbare endringer", "Flere isbreer som vokser kraftig"],
      explanation: "Norge har fått høyere gjennomsnittstemperatur og mer nedbør, og det ventes mer styrtregn og flom fremover ifølge Norsk klimaservicesenter.",
    },
  ],
  "geografi-1-3-7": [
    {
      question: "Hva er hovedmålet i Parisavtalen fra 2015?",
      options: ["Å begrense global oppvarming til godt under 2 °C, med mål om 1,5 °C over førindustrielt nivå", "Å innføre et fullstendig forbud mot all bruk av fossile brensler i verden allerede innen 2020 i alle land", "Å bygge nye atomkraftverk i alle verdens land for å erstatte de fossile energikildene fullstendig", "Å innføre et fullstendig og bindende forbud mot all bruk av kull, olje og gass allerede innen 2020"],
      explanation: "Parisavtalen ble vedtatt på COP21 i Paris i 2015 og forplikter landene til å begrense oppvarmingen til godt under 2 °C, helst 1,5 °C.",
    },
    {
      question: "Hvilke to hovedstrategier finnes i klimapolitikken?",
      options: ["Utslippskutt og klimatilpasning", "Eksport og import", "Sentralisering og desentralisering", "Forbud og subsidier alene"],
      explanation: "Den ene strategien er å redusere utslippene av klimagasser, den andre er å tilpasse samfunnet til de klimaendringene som likevel kommer.",
    },
    {
      question: "Hva er klimatilpasning?",
      options: ["Tiltak som reduserer sårbarhet og øker motstandskraften mot konsekvensene av klimaendringer", "Internasjonale avtaler om kjøp og salg av utslippskvoter", "Internasjonale avtaler som fordeler utslippskvoter mellom de ulike landene og bedriftene i verden", "Tiltak som fanger og fjerner CO₂ direkte fra atmosfæren for å bremse selve den globale oppvarmingen"],
      explanation: "Klimatilpasning handler om å forberede samfunnet, for eksempel med bedre overvannssystemer, flomvoller og blågrønn infrastruktur i byene.",
    },
    {
      question: "Hva handler begrepet klimarettferdighet om?",
      options: ["At ansvar og byrder fordeles ut fra at noen land har sluppet ut mest, mens andre rammes hardest", "At bare de landene som forurenser mest får kutte", "At alle land i hele verden skal forplikte seg til å kutte nøyaktig like mange tonn CO₂ hvert år", "At bare de aller rikeste landene i verden skal få lov til å bruke fossil energi i tiden framover"],
      explanation: "Rike land står for størstedelen av de historiske utslippene, mens fattige land ofte rammes hardest av konsekvensene. Klimarettferdighet handler om hvordan ansvaret bør fordeles.",
    },
    {
      question: "Hva er en utfordring i det internasjonale klimasamarbeidet?",
      options: ["Land har ulike interesser, og avtaler er vanskelige å håndheve", "Klimaendringer påvirker bare ett land om gangen", "Det finnes overhodet ingen internasjonale klimaavtaler som land kan slutte seg til", "At klimaet endrer seg for sakte"],
      explanation: "Klimaet er et globalt fellesgode: Alle tjener på kutt, men hvert enkelt land kan fristes til å la andre ta kostnadene. Det gjør forpliktende samarbeid krevende.",
    },
  ],
  "geografi-1-4-1": [
    {
      question: "Hva er et biom?",
      options: ["Et stort økologisk område der planter og dyr er tilpasset det lokale klimaet", "En enkelt dyreart som har sin faste plass innenfor et bestemt økosystem i naturen", "En enkelt dyreart som lever og har sin faste plass innenfor et bestemt økosystem", "Et beskyttet verneområde som er opprettet og forvaltet av FN for å ta vare på natur"],
      explanation: "Et biom er et stort økologisk område, som tropisk regnskog, ørken eller tundra, der plante- og dyreliv er tilpasset klimaet og miljøforholdene.",
    },
    {
      question: "Hva er permafrost?",
      options: ["Grunn som holder seg under 0 °C i minst to sammenhengende år", "Is som legger seg på innsjøer og elver gjennom hele vinterhalvåret", "Snødekke på isbreer som ligger urørt gjennom hele sommerhalvåret", "Isdekke som legger seg på innsjøer og elver i den kalde årstiden"],
      explanation: "Permafrost er permanent frosset grunn. Når den tiner på grunn av global oppvarming, frigjøres klimagasser som metan og CO₂.",
    },
    {
      question: "Hvilket biom kjennetegnes av bartrær og kalde vintre, og dekker store deler av Norge, Sverige, Finland, Russland og Canada?",
      options: ["Boreal barskog (taiga)", "Tropisk regnskog", "Fuktig tropisk regnskog nær ekvator", "Tørr steppe med gress og lite nedbør"],
      explanation: "Taigaen er det boreale barskogbeltet på den nordlige halvkule, med lange, kalde vintre og dominans av bartrær.",
    },
    {
      question: "Hvilken faktor er viktigst for hvor de ulike vegetasjonssonene ligger?",
      options: ["Klimaet, særlig temperatur og nedbør", "Hvor det finnes oljeforekomster", "Avstanden til den nærmeste større byen", "Landegrensene som stater har trukket opp"],
      explanation: "Vegetasjonssonene følger i hovedsak klimaet fra ekvator mot polene, men påvirkes også av jordsmonn, havstrømmer og topografi.",
    },
    {
      question: "Hva kjennetegner tundraen?",
      options: ["Trebart landskap med lav vegetasjon, kort vekstsesong og ofte permafrost", "Åpne gressletter med store flokker beitedyr i varmt og fuktig klima", "Varmt og svært tørt ørkenlandskap med kaktuser og sanddyner", "Tett og frodig skog med høye trær og rikelig med nedbør"],
      explanation: "Tundraen ligger nord for skoggrensen. Den korte vekstsesongen og permafrosten gjør at bare lav vegetasjon som moser, lav og dvergbusker kan vokse der.",
    },
  ],
  "geografi-1-4-2": [
    {
      question: "Hva er jordsmonn?",
      options: ["Laget av løsmasser over berggrunnen, dannet ved forvitring i samspill med klima og organismer", "Sand og finkornet materiale som er fraktet av vinden og avsatt et annet sted", "Kun den delen av jordoverflaten som er ryddet og oppdyrket til jordbruk", "Det faste fjellet som ligger dypt nede under bakken og løsmassene"],
      explanation: "Jordsmonnet dannes gjennom forvitring av bergarter i samspill med klima, organismer, topografi og tid, og inneholder mineraler, organisk materiale, vann og luft.",
    },
    {
      question: "Hva er humus?",
      options: ["Nedbrutt organisk materiale som gjør jorden næringsrik og fruktbar", "Et fint sandlag over berget", "Et lyst mineral som finnes i granitt og andre magmatiske bergarter", "Den nederste og faste delen av berggrunnen under selve jordsmonnet"],
      explanation: "Humus er rester av planter, dyr og mikroorganismer. Jord med høyt humusinnhold er mørk, næringsrik og som regel god jordbruksjord.",
    },
    {
      question: "Hvilken jordtype kalles svartjord og regnes blant verdens beste jordbruksjord?",
      options: ["Tsjernozjom", "Podsol", "Laterittjord", "Brunjord"],
      explanation: "Tsjernozjom (svartjord) er svært humusrik jord som finnes blant annet i Ukraina og på steppene. Podsol er typisk for barskog, og laterittjord finnes i tropene.",
    },
    {
      question: "Hvorfor er jordvern et viktig tema i Norge?",
      options: ["Bare en liten andel av landarealet er dyrket mark, og matjord er en knapp ressurs", "Nesten all jord i Norge er så forurenset at den ikke lenger kan brukes til mat", "Norge har så mye overflødig matjord at arealet med dyrket mark bør reduseres", "Jordbruk er ved lov forbudt i store deler av landet av hensyn til naturen"],
      explanation: "Norge har lite dyrket mark i forhold til landarealet på grunn av fjell og kort vekstsesong. Derfor er det viktig å hindre at matjord bygges ned.",
    },
    {
      question: "Hva menes med matsikkerhet?",
      options: ["At alle mennesker har tilgang til nok og trygg mat", "At all maten et land trenger produseres i eget land", "At all mat et land trenger produseres innenfor egne grenser", "At maten holdes innelåst på sikre lagre og fordeles av staten"],
      explanation: "Matsikkerhet handler om at befolkningen har stabil tilgang til tilstrekkelig og trygg mat. Befolkningsvekst, klimaendringer og tap av matjord utfordrer matsikkerheten globalt.",
    },
  ],
  "geografi-1-4-3": [
    {
      question: "Hva driver vannets kretsløp?",
      options: ["Solenergi og tyngdekraft", "Vind og tidevann alene", "Jordens indre varme", "Menneskelige vannkraftverk"],
      explanation: "Solenergien fordamper vann fra hav og land, og tyngdekraften bringer det tilbake som nedbør og avrenning. Slik sirkulerer vannet mellom hav, atmosfære og land.",
    },
    {
      question: "Hva er en akvifer?",
      options: ["Et underjordisk lag av porøs stein, grus eller sand som inneholder grunnvann", "Et teknisk anlegg som renser avløpsvann grundig før det slippes ut i naturen igjen", "En naturlig innsjø som er demmet opp for å samle vann til kraftverk", "En stor kunstig tank bygd for å lagre renset drikkevann til byer"],
      explanation: "Akviferer er grunnvannsreservoarer i porøse lag. Ogallala-akviferen under den amerikanske prærien dekker 450 000 km² og forsyner store jordbruksområder.",
    },
    {
      question: "Hva er forskjellen på fysisk og økonomisk vannknapphet?",
      options: ["Fysisk knapphet betyr at det ikke finnes nok vann, økonomisk knapphet betyr at man mangler ressurser til å utnytte vannet", "Økonomisk knapphet betyr at vannet er gratis og fritt tilgjengelig for alle", "Begge begrepene betyr nøyaktig det samme og kan brukes helt om hverandre", "Fysisk knapphet gjelder bare saltvann i havet, ikke ferskvann på land"],
      explanation: "Ved fysisk vannknapphet er vannressursene i seg selv utilstrekkelige. Ved økonomisk vannknapphet finnes vannet, men infrastruktur og penger mangler for å hente det ut og rense det.",
    },
    {
      question: "Hvor finnes det meste av jordens ferskvann som er tilgjengelig i fast eller flytende form?",
      options: ["I isbreer, snødekke og grunnvann", "Utelukkende i verdens elver", "Som vanndamp i atmosfæren", "I de store verdenshavene"],
      explanation: "Det aller meste av ferskvannet er bundet i isbreer og snø eller lagret som grunnvann. Elver og innsjøer utgjør bare en liten del. Havvann er saltvann.",
    },
    {
      question: "Hvilken fornybar energikilde står for det aller meste av norsk strømproduksjon?",
      options: ["Vannkraft", "Solkraft", "Kullkraft", "Kjernekraft"],
      explanation: "Vannkraften utnytter Norges mange vassdrag og store nedbørsmengder og dominerer den norske strømproduksjonen.",
    },
  ],
  "geografi-1-4-4": [
    {
      question: "Hvordan er fossile brensler dannet?",
      options: ["Av organisk materiale som over millioner av år er omdannet under høyt trykk og temperatur", "Av mineraler som over svært lang tid krystalliserer inne i sprekker og hulrom nede i fjellet", "Av smeltet stein som størkner når den strømmer opp fra vulkaner", "Av saltvann som langsomt fordamper og etterlater seg mineraler"],
      explanation: "Kull, olje og naturgass er dannet av rester av planter og dyr gjennom millioner av år. De er ikke-fornybare fordi de dannes mye langsommere enn de brukes.",
    },
    {
      question: "Hva er fornybar energi?",
      options: ["Energi fra kilder som fornyes naturlig og ikke går tomme ved bruk", "Energi fra kullkraft der utslippene fanges med renseteknologi", "Energi som kan brukes gjentatte ganger helt uten noe tap underveis", "All slags energi som blir produsert innenfor Norges grenser"],
      explanation: "Fornybare energikilder som vannkraft, sol, vind, bioenergi og geotermisk energi fornyes kontinuerlig og gir ingen eller svært lave klimagassutslipp under drift.",
    },
    {
      question: "Hva menes med energiomstilling?",
      options: ["Overgangen fra fossile energikilder til fornybare og utslippsfrie energikilder", "Å flytte oljeproduksjonen fra gamle og uttømte felt til nyoppdagede felt lenger nord", "Å bytte til en billigere strømleverandør på markedet", "Å bygge ut flere bensinstasjoner langs veinettet"],
      explanation: "Energiomstillingen drives av klimahensyn og teknologiutvikling og innebærer at fossil energi gradvis erstattes av fornybar energi.",
    },
    {
      question: "Hva siktes det til med «det grønne paradokset» i norsk energipolitikk?",
      options: ["Norge har ren fornybar kraft hjemme, men er samtidig en stor eksportør av olje og gass", "Norge har ingen egen kraftproduksjon og importerer all sin energi utenfra", "Norge er det landet i Europa som bruker aller mest kullkraft til strøm", "Norge har innført et fullstendig forbud mot all utbygging av vindkraft"],
      explanation: "Paradokset er at norsk strømproduksjon er nesten helt fornybar, samtidig som olje- og gasseksporten gir store utslipp når produktene brennes i andre land.",
    },
    {
      question: "Hvilken av disse energikildene er ikke-fornybar?",
      options: ["Naturgass", "Vindkraft", "Solenergi", "Vannkraft"],
      explanation: "Naturgass er et fossilt brensel dannet over millioner av år og er dermed ikke-fornybar. Vind, sol og vannkraft fornyes kontinuerlig.",
    },
  ],
  "geografi-1-4-5": [
    {
      question: "Hva er overfiske?",
      options: ["At en fiskebestand beskattes raskere enn den klarer å fornye seg", "At fisken vandrer og flytter seg til andre havområder", "At fiskerne tar i bruk altfor store og moderne båter", "At fisk fanges over havoverflaten med garn og krok"],
      explanation: "Vedvarende overfiske kan få bestander til å kollapse. FN anslår at over en tredjedel av verdens fiskebestander er overfisket.",
    },
    {
      question: "Hva er havbruk (akvakultur)?",
      options: ["Oppdrett av fisk og andre organismer i merder eller anlegg", "Utvinning av olje og gass fra reservoarer dypt under havbunnen", "Fangst av vill fisk ute i havet med trål og andre redskaper", "Vitenskapelig forskning på havstrømmer, temperatur og saltholdighet"],
      explanation: "Havbruk er kontrollert produksjon av fisk, skalldyr og alger. Norsk lakseoppdrett er et av verdens største havbruksnæringer.",
    },
    {
      question: "Hvilke utfordringer er knyttet til norsk lakseoppdrett?",
      options: ["Blant annet lakselus, rømming og utslipp fra anleggene", "At laksen ikke lar seg selge i utlandet", "At laks ikke overlever og ikke kan holdes i merder i sjøen", "At oppdrett av laks bare er mulig i de varme sommermånedene"],
      explanation: "Lakselus som spres til villaks, rømt oppdrettsfisk som blander seg med ville bestander, og utslipp av næringssalter er sentrale miljøutfordringer i næringen.",
    },
    {
      question: "Hvilket tiltak brukes for å sikre bærekraftig fiskeri?",
      options: ["Kvoter som begrenser hvor mye som kan fiskes av hver bestand", "Fjerning av samtlige fiskefartøy som er over ti meter lange", "Et fullstendig forbud mot alt fiske i alle verdens havområder", "Utsetting av rovfisk i alle hav for å regulere bestandene"],
      explanation: "Kvoter basert på forskning, minstemål, redskapsregler og kontroll er sentrale virkemidler i fiskeriforvaltningen, blant annet i Norge.",
    },
    {
      question: "Hvorfor er havet en viktig ressurs for Norge?",
      options: ["Fiskeri, havbruk og energiressurser i havområdene gir store inntekter", "De norske havområdene brukes utelukkende til turisme og bading", "Norske havområder er altfor kalde til at fiske lønner seg der", "Norge har ingen kystlinje av betydning å utnytte økonomisk"],
      explanation: "Norge forvalter store havområder med rike fiskebestander, en verdensledende oppdrettsnæring og energiressurser som olje og gass.",
    },
  ],
  "geografi-1-4-6": [
    {
      question: "Hvordan definerte Brundtland-kommisjonen bærekraftig utvikling i 1987?",
      options: ["Utvikling som dekker dagens behov uten å ødelegge mulighetene for fremtidige generasjoner", "Utvikling som legger til rette for høyest mulig økonomisk vekst på aller kortest mulig tid framover", "Utvikling som fullstendig stanser all bruk av naturens ressurser", "Utvikling som bare gjelder de fattige landene i den globale sør"],
      explanation: "Definisjonen kom i rapporten «Vår felles fremtid» (1987) og balanserer dagens behov mot kommende generasjoners muligheter.",
    },
    {
      question: "Hva er sirkulærøkonomi?",
      options: ["Et økonomisk system der produkter og materialer holdes i omløp gjennom gjenbruk, reparasjon og resirkulering", "All handel som utelukkende foregår lokalt innenfor et avgrenset område", "Et system der alt avfall samles inn og brennes for å produsere energi", "En økonomi der all betaling skjer kontant og uten digitale tjenester"],
      explanation: "Sirkulærøkonomi minimerer avfall og ressursbruk ved å holde materialene i kretsløp, i motsetning til den lineære «ta-bruk-kast»-økonomien.",
    },
    {
      question: "Hva er økosystemtjenester?",
      options: ["Goder og tjenester naturen leverer til mennesker, som pollinering, rensing av vann og karbonlagring", "Strømtjenestene som utelukkende vannkraftverkene leverer til husholdninger og bedrifter rundt om i landet", "Betalte konsulenttjenester som selskaper kjøper for å redusere utslipp", "Offentlige forvaltningstjenester innen miljø og naturvern i kommunene"],
      explanation: "Økosystemtjenester deles gjerne i fire kategorier: forsynende, regulerende, kulturelle og støttende tjenester. De har stor økonomisk verdi, men trues av naturødeleggelse.",
    },
    {
      question: "Hva er forskjellen på fornybare og ikke-fornybare ressurser?",
      options: ["Fornybare ressurser kan fornye seg naturlig, ikke-fornybare finnes i begrensede mengder", "Fornybare ressurser er alltid helt gratis, mens ikke-fornybare koster penger", "Ikke-fornybare ressurser finnes bare i havet, mens fornybare finnes på land", "Fornybare ressurser kan aldri overutnyttes, uansett hvor mye de brukes"],
      explanation: "Sol, vind og skog fornyes naturlig, mens olje, kull og mineraler er dannet over millioner av år. Merk at også fornybare ressurser som fisk kan overutnyttes.",
    },
    {
      question: "Hva er FNs bærekraftsmål?",
      options: ["En felles global plan med mål for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringer", "Et bindende regelverk som bare gjelder for utviklingsland og ikke rike land", "En rangert liste over de byene i verden som har mest luftforurensning", "En internasjonal avtale om tollsatser og handel mellom ulike stater"],
      explanation: "Bærekraftsmålene ble vedtatt i 2015 og gjelder alle land. Flere av målene handler direkte om ansvarlig forvaltning av ressurser, hav og økosystemer.",
    },
  ],
  "geografi-1-5-1": [
    {
      question: "Hva er fødselsraten?",
      options: ["Antall levendefødte per 1000 innbyggere per år", "Andelen kvinner i fruktbar alder i befolkningen", "Gjennomsnittlig antall barn per familie i landet", "Antall fødsler som skjer per sykehus i løpet av et år"],
      explanation: "Fødselsraten (natalitet) måles per 1000 innbyggere per år. Differansen mellom fødselsrate og dødsrate gir den naturlige tilveksten.",
    },
    {
      question: "Hva skjer i fase 2 av den demografiske overgangsmodellen?",
      options: ["Dødsraten synker mens fødselsraten forblir høy, og befolkningen vokser raskt", "Både fødselsraten og dødsraten er svært høye, og folketallet holder seg helt stabilt", "Fødselsraten synker raskt mens dødsraten holder seg lav og stabil", "Befolkningen synker fordi fødselsraten har falt under dødsraten"],
      explanation: "I fase 2 gir bedre helse og hygiene synkende dødsrate, mens fødselsraten fortsatt er høy. Resultatet er rask befolkningsvekst.",
    },
    {
      question: "Hva hevdet Thomas Malthus om befolkning og matproduksjon?",
      options: ["At befolkningen vokser raskere enn matproduksjonen, noe som vil føre til nød", "At befolkningsveksten ikke har noen påvirkning i det hele tatt på ressursgrunnlaget", "At matproduksjonen alltid vil vokse raskere enn folketallet gjør", "At verden på grunn av teknologi aldri kan bli overbefolket"],
      explanation: "Malthus mente befolkningen vokser eksponentielt mens matproduksjonen vokser lineært. Kritikere peker på at teknologisk utvikling har økt matproduksjonen langt mer enn han forutså.",
    },
    {
      question: "Omtrent hvilket samlet fruktbarhetstall trengs for at en befolkning skal holde seg stabil uten innvandring?",
      options: ["Ca. 2,1 barn per kvinne", "Ca. 1,0 barn per kvinne", "Ca. 3,5 barn per kvinne", "Ca. 5,0 barn per kvinne"],
      explanation: "Reproduksjonsnivået er omtrent 2,1 barn per kvinne – litt over 2 fordi ikke alle barn vokser opp og får egne barn.",
    },
    {
      question: "Hva er bæreevne?",
      options: ["Det maksimale antallet individer et økosystem kan opprettholde over tid uten at ressursgrunnlaget forringes", "Det samlede antallet mennesker som til enhver tid er bosatt i et land", "Den totale mengden mat som produseres i hele verden i løpet av ett år", "Hvor stor vekt en bro eller konstruksjon tåler før den bryter sammen"],
      explanation: "For mennesker avhenger bæreevnen av teknologi, forbruksnivå og fordeling, og den er derfor omdiskutert.",
    },
  ],
  "geografi-1-5-2": [
    {
      question: "Hva forteller en befolkningspyramide med bred basis og smal topp?",
      options: ["Høy fruktbarhet og en ung, voksende befolkning", "Lav fruktbarhet og en aldrende befolkning", "At innvandringen er høy", "At befolkningen er jevnt fordelt på alle aldre"],
      explanation: "En ekspansiv pyramide med bred basis viser mange barn og unge, typisk for land med høy fødselsrate og rask befolkningsvekst.",
    },
    {
      question: "Hva er forsørgelsesbyrden?",
      options: ["Forholdet mellom den ikke-yrkesaktive befolkningen (under 15 og over 64) og den yrkesaktive (15–64 år)", "Det samlede skattenivået innbyggerne i et land betaler til staten", "Andelen av befolkningen som mottar sosialhjelp fra det offentlige", "Gjennomsnittlig antall barn i en vanlig familie i befolkningen"],
      explanation: "Høy forsørgelsesbyrde betyr at færre yrkesaktive må forsørge flere barn og eldre gjennom skatt, pensjoner og omsorgstjenester.",
    },
    {
      question: "Hva er demografisk dividende?",
      options: ["Den økonomiske gevinsten et land kan oppnå når andelen yrkesaktive er stor i forhold til forsørgede", "Inntektene et land tjener på systematisk å eksportere overskudd av ung arbeidskraft til utlandet", "Den samlede pengestøtten og barnetrygden staten deler ut til barnefamilier med mange barn", "Det årlige utbyttet staten mottar fra investeringer i statlige aksjefond og pensjonsfond"],
      explanation: "Den demografiske dividenden kan oppstå i overgangen mellom høy og lav fruktbarhet, men forutsetter investeringer i utdanning, helse og jobbskaping.",
    },
    {
      question: "Hvilken form har befolkningspyramiden i et land med lav fruktbarhet og høy levealder?",
      options: ["Urneformet, med smal basis og bred midje eller topp", "Trekantet med spiss basis", "Ekspansiv form med svært bred basis av barn og en jevnt smalere topp mot de eldste", "Bred basis og smal topp"],
      explanation: "En urneformet (kontraktiv) pyramide viser få barn og mange middelaldrende og eldre – typisk for land med aldrende befolkning.",
    },
    {
      question: "Hvilken utfordring følger med en aldrende befolkning?",
      options: ["Færre yrkesaktive skal finansiere pensjoner og omsorg for stadig flere eldre", "Arbeidsledigheten blant unge forsvinner helt av seg selv i løpet av noen få år", "At boligprisene alltid faller kraftig fordi de eldre selger boligene sine på samme tid", "At det oppstår kraftig overbelastning fordi altfor mange skoleplasser står i bruk samtidig"],
      explanation: "Når andelen eldre øker, stiger utgiftene til pensjon og helse samtidig som andelen i arbeid synker. Mulige tiltak er høyere pensjonsalder og økt arbeidsinnvandring.",
    },
  ],
  "geografi-1-5-3": [
    {
      question: "Hva er push-faktorer i migrasjon?",
      options: ["Forhold som driver folk bort fra hjemstedet, som krig, fattigdom og naturkatastrofer", "Regler som avgjør hvem som får visum", "Forhold som trekker og lokker folk til et nytt sted, som arbeid, trygghet og velferd", "Offentlige regler og grensekontroller som hindrer folk i å flytte bort fra hjemstedet"],
      explanation: "Push-faktorer skyver folk bort fra hjemstedet, mens pull-faktorer som jobbmuligheter og trygghet trekker dem mot et nytt sted.",
    },
    {
      question: "Hva er brain drain?",
      options: ["At høyt utdannet arbeidskraft emigrerer fra utviklingsland til rikere land", "At bedrifter flytter hele produksjonen sin til lavkostland langt unna i utlandet", "At bedrifter flytter produksjonen sin til lavkostland for å spare på lønnskostnadene", "At studenter og fagfolk gradvis glemmer mye av det de en gang lærte under utdanningen"],
      explanation: "Brain drain (hjerneflukt) svekker avsenderlandets kapasitet innen helse, utdanning og forskning når kompetente fagfolk flytter ut.",
    },
    {
      question: "Hva er remitter?",
      options: ["Pengeoverføringer migranter sender til familie i hjemlandet", "Skattene migrantene betaler til myndighetene i mottakerlandet", "Skattene og avgiftene migranter må betale til myndighetene i mottakerlandet", "Stipender og støtteordninger som deles ut til studenter som studerer i utlandet"],
      explanation: "Remitter er en viktig inntektskilde for mange utviklingsland og bidrar til fattigdomsreduksjon, helse og utdanning i mottakerlandene.",
    },
    {
      question: "Hvilket av disse er en typisk pull-faktor?",
      options: ["Bedre jobbmuligheter og velferdsordninger i mottakerlandet", "Forfølgelse av minoriteter", "Langvarig krig og væpnet konflikt i hjemlandet som gjør det utrygt å bli boende", "Tørke og avlingssvikt som gjør det umulig å livnære familien der man bor fra før"],
      explanation: "Pull-faktorer er det som trekker migranter mot et sted: arbeid, trygghet, utdanningsmuligheter og velferd. Krig, tørke og forfølgelse er push-faktorer.",
    },
    {
      question: "Hvilken positiv virkning kan migrasjon ha for avsenderlandet?",
      options: ["Remitter og ny kompetanse fra migranter som returnerer", "At landet får færre skattebetalere", "At landet mister all kontakt med omverdenen fordi utvandrerne kutter båndene hjem", "At alle med utdanning forlater landet"],
      explanation: "Avsenderland kan tjene på pengeoverføringer, nettverk og kunnskap som migranter bygger opp – noen ganger kalt «brain gain» når kompetansen vender hjem.",
    },
  ],
  "geografi-1-5-4": [
    {
      question: "Hvem regnes som flyktning etter FNs flyktningkonvensjon fra 1951?",
      options: ["En person som har flyktet fra hjemlandet med velbegrunnet frykt for forfølgelse", "Bare personer som har mistet huset sitt i flom, jordskjelv og andre naturkatastrofer", "Alle som oppholder seg på ferie eller lengre reise i utlandet over et langt tidsrom", "Alle personer som flytter til et annet land utelukkende for å søke arbeid og bedre lønn"],
      explanation: "Konvensjonen krever velbegrunnet frykt for forfølgelse på grunn av rase, religion, nasjonalitet, tilhørighet til en sosial gruppe eller politisk oppfatning.",
    },
    {
      question: "Hva er internt fordrevne (IDP)?",
      options: ["Personer som er tvunget på flukt, men som ikke har krysset en internasjonal grense", "Studenter og lærlinger som flytter til en annen by innenlands for å ta utdanning", "Personer som helt frivillig flytter innenlands for å finne arbeid eller bedre bolig", "Flyktninger som har krysset en grense og fått innvilget varig opphold i et nytt land"],
      explanation: "Internt fordrevne faller utenfor flyktningkonvensjonen og er formelt sin egen regjerings ansvar, noe som gjør dem særlig sårbare i konflikter.",
    },
    {
      question: "Hva er UNHCR?",
      options: ["FNs høykommissær for flyktninger, som beskytter og hjelper mennesker på flukt", "En internasjonal domstol som dømmer i saker om krigsforbrytelser og folkemord i verden", "FNs særorganisasjon med ansvar for internasjonalt samarbeid om utdanning og kultur", "Et felles europeisk grensepoliti som overvåker og kontrollerer yttergrensene til EU"],
      explanation: "UNHCR har ansvar for å beskytte flyktninger og arbeider for tre varige løsninger: frivillig retur, integrering i nærområdet eller gjenbosetting i et tredje land.",
    },
    {
      question: "Hvilke tre varige løsninger arbeider UNHCR for?",
      options: ["Frivillig retur, lokal integrering og gjenbosetting i et tredjeland", "Interneringsleirer, deportasjon og stenging av grenser", "Streng visumplikt, faste årlige kvoter og høye bøter for ulovlig grensekryssing", "Interneringsleirer på ubestemt tid, tvangsdeportasjon og full stenging av grensene"],
      explanation: "De tre varige løsningene er at flyktningen kan vende trygt hjem, integreres der de har fått beskyttelse, eller gjenbosettes i et annet land.",
    },
    {
      question: "Hva innebærer det å søke asyl?",
      options: ["Å be om beskyttelse i et annet land fordi man frykter forfølgelse i hjemlandet", "Å søke om studieplass i et annet land", "Å søke om ordinær arbeidstillatelse i utlandet for å kunne ta seg lønnet jobb der", "Å søke om statsborgerskap i et nytt land etter å ha bodd der lovlig i minst ti år"],
      explanation: "En asylsøker ber om beskyttelse. Myndighetene vurderer om vilkårene for flyktningstatus eller annet beskyttelsesbehov er oppfylt.",
    },
  ],
  "geografi-1-5-5": [
    {
      question: "Hva er sentralisering?",
      options: ["At befolkning, arbeidsplasser og tjenester konsentreres i og rundt de største byene", "At flere små kommuner slås sammen til større kommuner gjennom kommunereformen", "At folk og virksomheter flytter ut fra de store byene og bosetter seg i distriktene", "At staten aktivt flytter statlige arbeidsplasser og etater ut av Oslo og til distriktene"],
      explanation: "Sentralisering innebærer vekst i sentrale strøk og nedgang i distriktene, og er en langvarig trend i Norge.",
    },
    {
      question: "Hva preget norsk befolkningsutvikling på 1800-tallet?",
      options: ["Sterk befolkningsvekst og stor utvandring, særlig til Amerika", "Kraftig befolkningsnedgang på grunn av svært lav fruktbarhet i landet", "Stor innvandring fra land i Asia som følge av åpne grenser og fri arbeidskraftflyt", "Kraftig befolkningsnedgang på grunn av svært lav fruktbarhet og synkende fødselstall"],
      explanation: "På 1800-tallet vokste befolkningen raskt, og flere hundre tusen nordmenn emigrerte, først og fremst til USA.",
    },
    {
      question: "Hvilken innvandringsbølge fulgte etter EU-utvidelsen i 2004?",
      options: ["Arbeidsinnvandring fra EØS-land, særlig Polen og andre østeuropeiske land", "Flyktninger fra land i Nord-Afrika", "En stor bølge av krigsflyktninger som kom fra land i Sør-Amerika og Mellom-Amerika", "Omfattende arbeidsinnvandring fra Pakistan og Tyrkia på grunn av mangel på arbeidskraft"],
      explanation: "EØS-avtalen gir fri bevegelse av arbeidskraft. Etter 2004 kom mange arbeidsinnvandrere fra de nye EU-landene i Øst-Europa, særlig Polen.",
    },
    {
      question: "Hva er Statistisk sentralbyrå (SSB)?",
      options: ["Norges sentrale institusjon for offisiell statistikk, som blant annet lager befolkningsframskrivninger", "Et uavhengig forskningsinstitutt som utelukkende arbeider med klima og miljøovervåking", "En sentralbank som forvalter oljefondet og statens finansielle sparepenger i utlandet", "Et statlig departement som styrer og fastsetter reglene for innvandring til Norge"],
      explanation: "SSB samler inn, bearbeider og formidler offisiell statistikk. Befolkningsframskrivningene brukes som grunnlag for politiske beslutninger.",
    },
    {
      question: "Hvilke konsekvenser har sentraliseringen for distriktene?",
      options: ["Fraflytting, aldrende befolkning og press på lokale tjenestetilbud", "Stadig flere nye arbeidsplasser i industri, handel og tjenesteyting", "En betydelig yngre befolkning med langt flere unge innbyggere enn det byene har", "Sterk befolkningsvekst, boligmangel og hard konkurranse om ledige tomter og boliger"],
      explanation: "Når unge flytter til byene, blir befolkningen i distriktene eldre og mindre, noe som utfordrer skoler, helsetjenester og lokalt næringsliv. Distriktspolitikken skal motvirke dette.",
    },
  ],
  "geografi-1-5-6": [
    {
      question: "Hva var Kinas ettbarnspolitikk?",
      options: ["En statlig politikk fra 1979 til 2015 som begrenset de fleste familier til ett barn", "En landsomfattende kampanje for å øke fødselstallene i landet betydelig over flere år", "En landsomfattende kampanje som skulle øke fødselstallene og få folk til å få flere barn", "Et statlig program som la til rette for storstilt internasjonal adopsjon av barn fra utlandet"],
      explanation: "Ettbarnspolitikken bremset befolkningsveksten, men ga også skjev kjønnsbalanse og en raskt aldrende befolkning. Den ble avviklet i 2015.",
    },
    {
      question: "Hva er befolkningspolitikk?",
      options: ["Statlige tiltak for å påvirke befolkningens størrelse, vekstrate eller sammensetning", "Registrering av innbyggere i folkeregisteret", "Politiske tiltak som utelukkende handler om å regulere innvandring til og fra landet", "Ordninger for folkeavstemninger der innbyggerne stemmer direkte over politiske saker"],
      explanation: "Befolkningspolitikk kan være pronatalistisk (stimulere til flere fødsler, som foreldrepermisjon) eller antinatalistisk (begrense fødsler, som familieplanleggingsprogrammer).",
    },
    {
      question: "Hva måler det økologiske fotavtrykket?",
      options: ["Hvor mye biologisk produktivt areal som kreves for å dekke en persons eller nasjons forbruk og avfall", "Hvor mange ulike dyre- og plantearter som til sammen finnes innenfor et gitt naturområde", "Hvor mye CO₂ og andre klimagasser et enkelt kjøretøy slipper ut per kjørte kilometer", "Hvor stort samlet landareal et land råder over målt i kvadratkilometer på kartet"],
      explanation: "Fotavtrykket viser presset forbruket legger på naturen. Hvis alle levde som nordmenn, ville vi trengt anslagsvis tre jordkloder.",
    },
    {
      question: "Hva har vist seg å være en nøkkelfaktor for lavere fruktbarhet i utviklingsland?",
      options: ["Utdanning, særlig for jenter og kvinner", "Høyere tollsatser", "Innføring av høyere tollsatser og importavgifter på varer fra utlandet", "Flere TV-kanaler"],
      explanation: "Utdanning for kvinner, sammen med tilgang til helsetjenester og familieplanlegging, henger tett sammen med lavere fødselstall – noe blant annet erfaringene fra India viser.",
    },
    {
      question: "Hvilke to motsatte demografiske utfordringer står verden overfor i dag?",
      options: ["Rask befolkningsvekst i noen land og aldrende, krympende befolkninger i andre", "At alle land har nøyaktig samme utvikling", "Rask og ukontrollert overbefolkning som rammer alle verdens land på samme tid", "At samtlige land i verden nå følger nøyaktig den samme demografiske utviklingen"],
      explanation: "Mens deler av Afrika og Asia fortsatt har rask vekst, opplever land som Japan og flere europeiske land aldring og fallende folketall – med ulike utfordringer som resultat.",
    },
  ],
  "geografi-1-6-1": [
    {
      question: "Hva er urbanisering?",
      options: ["Prosessen der en stadig større andel av befolkningen bor i byer og tettbygde strøk", "At byene gradvis blir grønnere, renere og langt mer miljøvennlige enn de har vært før", "Storstilt bygging av nye motorveier og transportårer som binder byene tettere sammen", "At byene gradvis blir grønnere, renere og mer miljøvennlige gjennom bevisst planlegging"],
      explanation: "Urbanisering omfatter både den fysiske veksten av byer og den kulturelle og økonomiske omstillingen som følger med.",
    },
    {
      question: "Hva er urbaniseringsgrad?",
      options: ["Andelen av et lands befolkning som bor i byer eller tettbygde strøk", "Hvor høye bygningene i en by er, målt i antall etasjer over bakkenivået", "Hvor raskt en enkelt by vokser i folketall og areal fra ett år til det neste i prosent", "Det totale antallet byer og tettsteder som finnes innenfor grensene til et bestemt land"],
      explanation: "Urbaniseringsgraden uttrykkes i prosent. Land som Japan og Norge har høy urbaniseringsgrad, mens land som Burundi har lav.",
    },
    {
      question: "Hvilken historisk hendelse satte fart i urbaniseringen i Europa?",
      options: ["Den industrielle revolusjonen", "Den franske revolusjonen", "Vikingtiden og handelsferdene som knyttet Norden til resten av Europa", "Vikingtiden"],
      explanation: "Den industrielle revolusjonen (1750–1900) skapte fabrikkarbeidsplasser i byene og trakk store mengder mennesker fra landsbygda.",
    },
    {
      question: "Hvor skjer den raskeste urbaniseringen i dag?",
      options: ["I utviklingsland i Asia og Afrika", "I Nord-Amerika", "I storbyene langs østkysten og vestkysten av Nord-Amerika og USA", "I Vest-Europa"],
      explanation: "Siden 1950 har urbaniseringen vært raskest i utviklingsland, der byene vokser gjennom både tilflytting og naturlig befolkningsvekst.",
    },
    {
      question: "Når oppsto de første byene i historien?",
      options: ["Rundt 3500 f.Kr.", "Rundt år 1000 e.Kr.", "Rundt 1750 e.Kr.", "Rundt 10 000 f.Kr."],
      explanation: "De første byene vokste frem rundt 3500 f.Kr., blant annet i Mesopotamia, da jordbruksoverskudd gjorde det mulig for mange å bo samlet.",
    },
  ],
  "geografi-1-6-2": [
    {
      question: "Hva er CBD (Central Business District)?",
      options: ["Det sentrale forretningsområdet i en by med høy konsentrasjon av kontorer, butikker og tjenester", "Et større industri- og lagerområde som ligger ved havnen og godsterminalene", "En grønn buffersone med parker og friluftsarealer som omkranser hele byen", "Et rolig og attraktivt boligområde med eneboliger i utkanten av byen"],
      explanation: "CBD har typisk høye tomtepriser, høyhusbebyggelse og god kollektivdekning. I norske byer tilsvarer det ofte sentrum eller bykjernen.",
    },
    {
      question: "Hva viser den konsentriske sonemodellen til Burgess?",
      options: ["At byen vokser i ringer utover fra sentrum", "At byen vokser i sektorer langs hovedveiene", "At byen har flere likestilte kjerner", "At byer alltid vokser mot nord"],
      explanation: "Burgess-modellen (1925) beskriver byen som ringer rundt CBD. Sektormodellen (Hoyt) og flerkjernemodellen (Harris og Ullman) er alternative bymodeller.",
    },
    {
      question: "Hva er gentrifisering?",
      options: ["At eldre, nedslitte byområder oppgraderes og tiltrekker seg mer velstående beboere, slik at de opprinnelige beboerne kan presses ut", "At tungindustri og produksjonsvirksomhet flytter inn i og overtar etablerte boligområder i byen", "At sentrale byområder gradvis forfaller, tømmes for innbyggere og blir stående forlatt og tomme", "At helt nye bydeler og boligfelt planlegges og bygges ut på tidligere ubebygd, jomfruelig mark"],
      explanation: "Gentrifisering gir stigende boligpriser og endret sosialt miljø. De opprinnelige beboerne, ofte med lavere inntekt, kan bli presset ut av området.",
    },
    {
      question: "Hva er suburbanisering?",
      options: ["At befolkning og virksomheter flytter fra bykjernen til forstedene", "At folk og virksomheter flytter tilbake fra forstedene inn til bykjernen", "At små landsbyer og grender på bygda legges ned fordi innbyggerne flytter derfra", "At flere nabobyer gradvis vokser sammen og til slutt smelter sammen til én stor by"],
      explanation: "Suburbanisering er vekst i forstedene rundt byene, ofte muliggjort av bil og pendling. Det motsatte er fortetting i sentrum.",
    },
    {
      question: "Hvilke av disse er typiske byfunksjoner?",
      options: ["Handel, administrasjon, utdanning og kultur", "Bare gruvedrift", "Råvareutvinning, gruvedrift og tungindustri lagt langt utenfor bysentrum", "Bare jordbruk"],
      explanation: "Byer fungerer som sentre for handel og tjenester, industri, administrasjon og politikk, utdanning og forskning, og kultur og turisme.",
    },
  ],
  "geografi-1-6-3": [
    {
      question: "Hva er en megaby?",
      options: ["Et byområde med mer enn 10 millioner innbyggere", "En by med mer enn 1 million innbyggere", "En by kjennetegnet av mange skyskrapere og et moderne forretningssentrum", "Hovedstaden i et stort land"],
      explanation: "FN definerer megabyer ut fra hele det urbane området. Eksempler er Tokyo (ca. 37 mill.), Delhi, Shanghai og São Paulo.",
    },
    {
      question: "Hva kjennetegner slum?",
      options: ["Tettbygde boligområder med dårlige boforhold og mangel på grunnleggende tjenester som rent vann og sanitær", "Eksklusive boligområder i sentrum med svært høye boligpriser og god standard på tjenester", "Statlig planlagte drabantbyer med moderne infrastruktur, rent vann og gode sanitærforhold", "Rene industriområder helt uten fast bosetning, der bare fabrikker og lagerbygg er tillatt"],
      explanation: "Slum preges av overbefolkning, usikker boligsituasjon og manglende tjenester. Kjente eksempler er Dharavi i Mumbai og Kibera i Nairobi.",
    },
    {
      question: "Hvorfor vokser megabyene i utviklingsland så raskt?",
      options: ["Kombinasjonen av stor tilflytting fra landsbygda og høy naturlig befolkningsvekst", "Fordi myndighetene med tvang flytter folk fra landsbygda og inn til de aller største byene", "Fordi myndighetene med tvang flytter hele landsbygdsbefolkningen inn til byene ved lov", "Fordi fødselsratene på landsbygda er redusert til null slik at all vekst skjer i byene"],
      explanation: "Push-faktorer på landsbygda og pull-faktorer i byen, kombinert med ung befolkning og høye fødselstall, gir rask byvekst i utviklingsland.",
    },
    {
      question: "Hva innebærer oppgradering «in situ» som tiltak mot slum?",
      options: ["Å forbedre boliger, vann og infrastruktur der folk allerede bor", "Å rive slummen og flytte beboerne ut av byen", "Å gjerde inn slumområdene med murer for å hindre videre tilflytting fra landsbygda", "Å rive hele slumområdet og tvangsflytte beboerne til nye satellittbyer langt utenfor byen"],
      explanation: "In situ-oppgradering betyr å forbedre forholdene på stedet, i stedet for å rive og flytte beboerne. Det bevarer lokalsamfunn og arbeidsplasser.",
    },
    {
      question: "Hvilke utfordringer er typiske i raskt voksende megabyer?",
      options: ["Mangel på rent vann og sanitær, overbelastet transport og avfallsproblemer", "At alle innbyggerne i byen har så høy inntekt at ingen lenger vil ta arbeid der", "For få innbyggere til å fylle de mange nybygde boligene, slik at byen står halvtom", "At samtlige innbyggere har så høy inntekt at det oppstår mangel på arbeidskraft i byen"],
      explanation: "Når byveksten går raskere enn utbyggingen av infrastruktur, oppstår problemer med vann, sanitær, transport, avfallshåndtering og store sosiale forskjeller.",
    },
  ],
  "geografi-1-6-4": [
    {
      question: "Hva innebærer bærekraftig byutvikling?",
      options: ["Å utvikle byer som dekker innbyggernes behov samtidig som miljøbelastningen minimeres og sosiale forskjeller reduseres", "Å bygge flest mulig boliger på kortest mulig tid uten hensyn til miljø eller sosiale forhold", "Å flytte all industri og forurensende virksomhet til utlandet mens byen selv vokser videre", "Å stanse all vekst og utbygging fullstendig slik at byen fryses i sin nåværende størrelse"],
      explanation: "Bærekraftig byutvikling balanserer økonomisk, sosial og miljømessig bærekraft i planleggingen av byen.",
    },
    {
      question: "Hva er en smart by (smart city)?",
      options: ["En by som bruker teknologi og data til å effektivisere tjenester som transport, energi og avfall", "En by der privatbiler er helt forbudt, slik at all transport foregår til fots eller på sykkel", "En by som er anlagt etter et strengt geometrisk rutenett med rette gater og kvadratiske kvartaler", "En by som har spesielt mange universiteter, forskningssentre og høyt utdannet arbeidskraft"],
      explanation: "Smarte byer bruker sensorer, data og digitale løsninger for å gjøre byens tjenester mer effektive og miljøvennlige.",
    },
    {
      question: "Hva handler FNs bærekraftsmål 11 om?",
      options: ["Bærekraftige byer og lokalsamfunn", "Ren energi til alle", "Å utrydde sult, oppnå matsikkerhet og fremme et bærekraftig landbruk for alle", "Utryddelse av sult"],
      explanation: "Mål 11 skal gjøre byer og lokalsamfunn inkluderende, trygge, robuste og bærekraftige, med delmål om boliger, transport og luftkvalitet.",
    },
    {
      question: "Hva er kompakt byutvikling?",
      options: ["Å bygge tettere rundt knutepunkter slik at avstandene og transportbehovet reduseres", "Å spre bebyggelsen mest mulig utover i landskapet slik at hver bolig får stor tomt", "Å legge alle arbeidsplasser og handel utenfor byen slik at folk må pendle inn hver dag", "Å bygge utelukkende frittliggende eneboliger med hage i stedet for leiligheter og rekkehus"],
      explanation: "Kompakt byutvikling med blandet arealbruk reduserer bilavhengighet og energibruk, og styrker grunnlaget for kollektivtransport, sykkel og gange.",
    },
    {
      question: "Hva er grønn infrastruktur i byer?",
      options: ["Parker, trær, grønne tak og vannveier som gir bedre bymiljø og håndterer overvann", "Brede motorveier med tett beplantning i midtrabatten som binder bydelene sammen i byen", "Brede motorveier med tett beplantning i midtrabatten som skal binde bydeler sammen", "Store underjordiske parkeringshus som frigjør gateplan til fotgjengere og butikker"],
      explanation: "Grønn infrastruktur demper varme, absorberer regnvann, renser luft og gir innbyggerne rekreasjonsområder.",
    },
  ],
  "geografi-1-6-5": [
    {
      question: "Hvilken by er Norges største?",
      options: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
      explanation: "Oslo har rundt 710 000 innbyggere i kommunen og over en million i storbyområdet. Deretter følger Bergen, Trondheim og Stavanger.",
    },
    {
      question: "Hva kjennetegner norsk byutvikling på 2000-tallet?",
      options: ["Fortetting og transformasjon av eldre nærings- og havneområder til boliger", "Bygging av helt nye byer inne i fjellheimen", "Bygging av helt nye byer i fjellet for å avlaste presset på de eksisterende storbyene", "Storstilt avfolkning av alle storbyene fordi innbyggerne flytter tilbake til distriktene"],
      explanation: "I stedet for å bre seg utover bygges norske byer nå tettere, og tidligere industri- og havneområder omdannes til bolig- og næringsområder.",
    },
    {
      question: "Hva er en byvekstavtale?",
      options: ["En avtale mellom staten og byområdene om at vekst i persontransport skal tas med kollektiv, sykkel og gange", "En avtale mellom staten og næringslivet om å bygge flere kjøpesentre langs innfartsårene", "En avtale mellom nabokommuner om å utvide bygrensene slik at byen får plass til å vokse", "En avtale mellom staten og bankene om å presse boligprisene i byområdene kunstig lavt"],
      explanation: "Byvekstavtalene gir statlige midler til kollektivtransport og byutvikling mot at biltrafikken ikke skal øke (nullvekstmålet).",
    },
    {
      question: "Hvilke drivkrefter ligger bak sentraliseringen i Norge?",
      options: ["Arbeidsmarkedet, utdanningstilbud og tjenester som er konsentrert i byregionene", "Lover som forbyr folk å bo i distriktene", "At boligprisene er aller lavest i de sentrale byene som Oslo, Bergen og Trondheim", "Statlige lover som forbyr folk å bosette seg i distriktene og tvinger dem inn mot byene"],
      explanation: "Folk trekker mot byene fordi jobbene, studiestedene og tjenestetilbudet i stor grad finnes der. Distriktspolitikken forsøker å motvirke denne trenden.",
    },
    {
      question: "Når vokste de første norske byene frem?",
      options: ["I middelalderen", "På 1900-tallet", "Etter andre verdenskrig", "På 1990-tallet"],
      explanation: "Byer som Oslo, Bergen og Trondheim har røtter i middelalderen og vokste frem som handels-, kirke- og maktsentre.",
    },
  ],
  "geografi-1-6-6": [
    {
      question: "Hva er urban varmeøyeffekt?",
      options: ["At byer er merkbart varmere enn omliggende landområder fordi asfalt og betong lagrer varme", "At byer som regel er anlagt i naturlig varmere klimasoner enn det omkringliggende landet", "At byer alltid mottar flere soltimer i året enn landsbygda fordi lufta over dem er klarere", "At spillvarmen fra industrianlegg alene varmer opp hele regionen rundt byen med flere grader"],
      explanation: "Asfalt, betong og bygninger absorberer og lagrer varme, mens lite vegetasjon gir mindre avkjøling. Byen kan bli 2–5 grader varmere enn omlandet.",
    },
    {
      question: "I hvilke verdensdeler ventes den sterkeste byveksten frem mot 2050?",
      options: ["Afrika og Asia", "Europa og Nord-Amerika", "Oseania og Antarktis", "Sør-Amerika og Europa"],
      explanation: "Det aller meste av befolknings- og byveksten frem mot 2050 ventes i Afrika og Asia, mens byveksten i Europa og Nord-Amerika er langt svakere.",
    },
    {
      question: "Hva er segregering i byer?",
      options: ["At ulike befolkningsgrupper bor atskilt i ulike deler av byen", "At alle bydeler har lik befolkningssammensetning", "At boliger, butikker og kontorer legges i samme bygg for å utnytte arealet mest mulig", "At boliger og butikker ligger i samme bygg"],
      explanation: "Segregering kan være økonomisk, etnisk eller sosial, og skyldes blant annet boligpriser og flyttemønstre. Den kan svekke samhold og like muligheter.",
    },
    {
      question: "Hvilke klimatilpasningstiltak er aktuelle for byer?",
      options: ["Grønne tak, åpne vannveier og flomsikring som håndterer styrtregn og hetebølger", "Å bygge byen stadig tettere med asfalt og betong", "Å fjerne all vegetasjon fra sentrum slik at regnvannet renner raskere bort i avløpene", "Å bygge byen tettere med asfalt og betong for å hindre at flomvann trenger ned i grunnen"],
      explanation: "Byer må håndtere mer styrtregn, havnivåstigning og hetebølger. Blågrønn infrastruktur, flomsikring og varmeplanlegging er sentrale tiltak.",
    },
    {
      question: "Hvordan kan teknologi bidra til fremtidens byutvikling?",
      options: ["Gjennom smartere mobilitet, energistyring og digital infrastruktur", "Ved å stenge sentrum for all ferdsel", "Ved å erstatte alle parker og grøntområder med store datasentre og serverhaller i sentrum", "Ved å gjøre kollektivtransport overflødig"],
      explanation: "Teknologi som delingsmobilitet, smarte strømnett og sanntidsdata kan gjøre byene mer effektive og bærekraftige, men løser ikke alt alene.",
    },
  ],
  "geografi-1-7-1": [
    {
      question: "Hva er globalisering?",
      options: ["En prosess der land knyttes tettere sammen gjennom økt flyt av varer, kapital, informasjon og mennesker", "En prosess der alle land etter hvert innfører nøyaktig samme styresett og felles lovverk", "En prosess der hele verdens befolkning gradvis samles og bosetter seg i ett stort land", "En prosess der all handel og utveksling mellom ulike land gradvis opphører fullstendig"],
      explanation: "Globalisering gir økt gjensidig avhengighet mellom land og regioner gjennom flyt av varer, tjenester, kapital, teknologi og mennesker.",
    },
    {
      question: "Hva er frihandel?",
      options: ["Handel mellom land uten toll, kvoter eller andre handelshindringer", "Handel som utelukkende skjer innenlands mellom aktører i ett og samme land", "Handel som utelukkende foregår innenlands mellom aktører i ett og samme hjemland", "Handel der samtlige varer utveksles helt gratis uten at kjøper betaler noe som helst"],
      explanation: "Frihandel bygger på teorien om komparative fortrinn – at land tjener på å spesialisere seg og handle med hverandre.",
    },
    {
      question: "Hva er en global verdikjede?",
      options: ["Alle leddene i produksjonen av en vare, fordelt på flere land fra råvare til ferdig produkt", "Et internasjonalt nettverk av banker som samarbeider om lån og betalingsformidling", "En sammenhengende kjede av butikker som har samme eier og selger identiske varer", "Systemet av valutakurser som avgjør vekslingsforholdet mellom ulike lands penger"],
      explanation: "I en global verdikjede skjer råvareutvinning, produksjon, montering og markedsføring i ulike land, og hvert ledd tilfører produktet verdi.",
    },
    {
      question: "Hva er WTO?",
      options: ["Verdens handelsorganisasjon, som forhandler frem og håndhever regler for internasjonal handel", "FNs klimaorganisasjon som forhandler frem globale avtaler om kutt i klimagassutslipp", "En militærallianse der medlemslandene forplikter seg til felles forsvar mot angrep", "En sammenslutning av oljeproduserende land som samordner produksjon og oljepriser"],
      explanation: "WTO (World Trade Organization) arbeider for friere verdenshandel gjennom forhandlinger, regelverk og tvisteløsning mellom medlemslandene.",
    },
    {
      question: "Hva kjennetegner et multinasjonalt selskap?",
      options: ["Det har virksomhet i flere land og organiserer ofte produksjonen i globale verdikjeder", "Det er et lite familieforetak med under ti ansatte og virksomhet på ett enkelt sted", "Det eies alltid av staten i hjemlandet og driver bare virksomhet innenfor egne grenser", "Det selger utelukkende varene sine i hjemlandet og eksporterer aldri til andre markeder"],
      explanation: "Multinasjonale selskaper opererer på tvers av landegrenser og plasserer gjerne ulike deler av produksjonen der kostnadene og kompetansen er gunstigst.",
    },
  ],
  "geografi-1-7-2": [
    {
      question: "Hva er kulturell globalisering?",
      options: ["At kulturelle uttrykk, verdier og praksiser spres over landegrensene", "At alle land etter hvert tar i bruk det samme språket og de samme lovene", "At museer i ulike land samarbeider om felles utstillinger og utveksler kunstsamlinger", "At samtlige land forbyr utenlandsk kultur for å verne om sine egne nasjonale tradisjoner"],
      explanation: "Kulturell globalisering gjør at mennesker verden over påvirkes av de samme kulturelle impulsene, noe som kan gi både økt mangfold og homogenisering.",
    },
    {
      question: "Hva menes med amerikanisering?",
      options: ["Spredning av amerikansk kultur, merkevarer og levemåter til andre deler av verden", "At land verden over innfører den amerikanske dollaren som sin offisielle valuta", "At USA i økende grad importerer og tar opp i seg kultur og skikker fra andre land", "At mange amerikanere velger å utvandre og bosette seg permanent rundt om i Europa"],
      explanation: "Amerikanisering brukes ofte kritisk om en ensidig kulturstrøm gjennom populærkultur, merkevarer og media som kan true lokalt kulturelt mangfold.",
    },
    {
      question: "Hva er glokalisering?",
      options: ["At globale produkter og ideer tilpasses lokale forhold og tradisjoner", "At lokale produkter og merkevarer blir forbudt i alle de globale markedene", "At alle byer i verden gradvis blir helt like fordi de samme kjedene finnes overalt", "At lokale produkter og merkevarer forbys og presses helt ut av de globale markedene"],
      explanation: "Glokalisering kombinerer «globalisering» og «lokalisering» – for eksempel når internasjonale matkjeder tilpasser menyen til lokale mattradisjoner.",
    },
    {
      question: "Hva er den digitale kløften?",
      options: ["Ulikheten i tilgang til internett og digital teknologi mellom grupper og land", "Skillet mellom gamle og nye mobiltelefoner", "En feil eller sårbarhet i programvare som gjør at datasystemer slutter å fungere", "Den fysiske avstanden mellom store datasentre spredt rundt om i ulike verdensdeler"],
      explanation: "Den digitale kløften handler om at ikke alle har samme tilgang til digital teknologi, noe som kan forsterke økonomiske og sosiale forskjeller.",
    },
    {
      question: "Hvilket motargument finnes mot påstanden om at globaliseringen utsletter lokal kultur?",
      options: ["Globale impulser blandes ofte med lokale tradisjoner og skaper nye uttrykk", "All kultur kommer opprinnelig fra samme land", "At lokal kultur i realiteten aldri har eksistert som noe eget og selvstendig fenomen", "At all verdens kultur opprinnelig stammer fra ett og samme land som resten har kopiert"],
      explanation: "Kulturmøter fører ofte til hybridisering og glokalisering snarere enn ren ensretting – lokal kultur tilpasser og omformer de globale impulsene.",
    },
  ],
  "geografi-1-7-3": [
    {
      question: "Hvilke tre dimensjoner kombinerer HDI (Human Development Index)?",
      options: ["Forventet levealder, utdanningsnivå og bruttonasjonalinntekt per innbygger", "Boligpriser, arbeidsledighet og inflasjon vektet sammen til én felles indeks", "Klimaforhold, samlet landareal og folketall vektet mot hverandre til én verdi", "Militær styrke, samlet eksportverdi og valutareserver kombinert til en indeks"],
      explanation: "HDI er utviklet av FNs utviklingsprogram (UNDP) og gir en verdi mellom 0 og 1 basert på helse, utdanning og levestandard.",
    },
    {
      question: "Hva måler Gini-koeffisienten?",
      options: ["Ulikhet i inntektsfordelingen i et land, fra 0 (perfekt likhet) til 1 (perfekt ulikhet)", "Den samlede økonomiske veksten i et land målt som endring i bruttonasjonalprodukt", "Hvor stor andel av økonomien som utgjøres av handel med utlandet gjennom eksport", "Den gjennomsnittlige årsinntekten per innbygger regnet i landets egen valuta"],
      explanation: "Jo høyere Gini-koeffisient, desto større er forskjellene mellom rike og fattige i landet.",
    },
    {
      question: "Hva innebærer utvikling i geografisk forstand?",
      options: ["Forbedring av materielle, sosiale og politiske forhold – ikke bare økonomisk vekst", "At folketallet stiger jevnt og at landet dermed får stadig flere innbyggere hvert år", "At folketallet stiger og landet får flere innbyggere, uansett hvordan levekårene endrer seg", "Bygging av veier, jernbane og annen fysisk infrastruktur, uten hensyn til helse og utdanning"],
      explanation: "Utvikling omfatter bedre helse, utdanning, likestilling, demokrati og bærekraftig ressursforvaltning, i tillegg til økonomisk vekst.",
    },
    {
      question: "Hva betegner nord-sør-dimensjonen?",
      options: ["Det historiske skillet mellom rike land («nord») og fattigere land («sør»)", "Klimaforskjellene mellom polene", "Klimaforskjellene mellom nordpolen og sydpolen, målt i gjennomsnittlig årstemperatur", "Inndelingen av jorden i tidssoner østover og vestover fra nullmeridianen ved Greenwich"],
      explanation: "Nord-sør-skillet beskriver globale velstandsforskjeller, men bildet er blitt mer sammensatt med fremvoksende økonomier som BRICS-landene.",
    },
    {
      question: "Hva er en svakhet ved HDI som mål på utvikling?",
      options: ["Den fanger ikke opp ulikhet innad i landet eller miljøforhold", "Den finnes bare for europeiske land", "At tallene er fastsatt en gang for alle og aldri oppdateres med nye data", "At den bare beregnes for rike europeiske land og ikke omfatter utviklingsland"],
      explanation: "HDI er et gjennomsnittsmål og skjuler interne forskjeller. Den sier heller ikke noe direkte om miljømessig bærekraft eller demokrati.",
    },
  ],
  "geografi-1-7-4": [
    {
      question: "Hva er bistand?",
      options: ["Overføring av ressurser fra rike land eller organisasjoner til fattige land for å fremme utvikling", "Skatteinntekter en stat henter inn fra egen olje- og gassproduksjon offshore", "Eksport av varer og tjenester fra ett land til markeder i utlandet for salg", "Lån som gis mellom sentralbanker og forretningsbanker til høy markedsrente"],
      explanation: "Bistand kan være humanitær (nødhjelp), langsiktig utviklingsbistand eller faglig bistand (kunnskapsoverføring).",
    },
    {
      question: "Hva er forskjellen på bilateral og multilateral bistand?",
      options: ["Bilateral bistand gis direkte fra ett land til et annet, multilateral kanaliseres gjennom internasjonale organisasjoner", "Bilateral bistand går til enkeltpersoner, mens multilateral går til hele befolkninger samlet", "Multilateral bistand kan bare gis som matvarer og nødhjelp, aldri som penger eller kunnskap", "Bilateral bistand gis bare under væpnet konflikt, mens multilateral gis i fredstid"],
      explanation: "Multilateral bistand går gjennom organisasjoner som FN og Verdensbanken. Norge bruker begge former.",
    },
    {
      question: "Hva er Norad?",
      options: ["Direktoratet for utviklingssamarbeid, som forvalter norsk bistand", "En internasjonal miljødomstol som dømmer i saker om alvorlig forurensning", "Et nordisk forsvarssamarbeid mellom Norge, Sverige, Danmark og Finland", "En norsk oljeplattform i Nordsjøen som produserer olje og gass for eksport"],
      explanation: "Norad er fagorganet for norsk utviklingssamarbeid og forvalter og kvalitetssikrer store deler av bistanden.",
    },
    {
      question: "Hvilken kritikk rettes ofte mot bistand?",
      options: ["At den kan skape avhengighet, forsvinne i korrupsjon eller styres av giverens interesser", "At den utelukkende gis til allerede rike land og aldri når frem til de fattigste", "At all form for bistand er forbudt etter folkeretten og FN-paktens bestemmelser", "At beløpene alltid er så store at mottakerlandene ikke klarer å bruke dem opp"],
      explanation: "Kritikere peker på avhengighetsfellen, korrupsjon og at giverland kan ha egeninteresser. Forsvarere viser til resultater innen helse, utdanning og fattigdomsreduksjon.",
    },
    {
      question: "Hva er humanitær bistand?",
      options: ["Nødhjelp som skal redde liv og lindre nød ved kriser, krig og katastrofer", "Langsiktige investeringer i veier og skoler", "Rimelige lån øremerket oppstart og drift av bedrifter og næringsutvikling lokalt", "Utveksling av kunst, musikk og tradisjoner for å styrke kulturelle bånd mellom land"],
      explanation: "Humanitær bistand er akutt nødhjelp – mat, vann, husly og helsehjelp – i motsetning til langsiktig utviklingsbistand som skal bygge samfunn over tid.",
    },
  ],
  "geografi-1-7-5": [
    {
      question: "Hva er FNs bærekraftsmål?",
      options: ["17 mål vedtatt i 2015 som en felles plan for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030", "Utviklingsmål som utelukkende gjelder for fattige land i sør, ikke for rike industriland", "En rangert liste over verdens rikeste land målt i bruttonasjonalprodukt per innbygger", "Ti bindende regler for internasjonal handel vedtatt av Verdens handelsorganisasjon"],
      explanation: "Bærekraftsmålene (SDG) gjelder alle land – både rike og fattige – og utgjør kjernen i Agenda 2030.",
    },
    {
      question: "Hva er Agenda 2030?",
      options: ["Handlingsplanen som bærekraftsmålene inngår i, med 169 delmål som skal nås innen 2030", "Den europeiske unionens langtidsbudsjett for perioden frem mot året 2030", "En internasjonal klimaavtale om utslippskutt vedtatt i den japanske byen Kyoto i 1997", "En romfartsplan for bemannet landing på månen innen utgangen av tiåret"],
      explanation: "Agenda 2030 ble vedtatt av FNs medlemsland i 2015 og består av 17 hovedmål og 169 delmål.",
    },
    {
      question: "Hva menes med at bærekraftsmålene er universelle?",
      options: ["De gjelder alle land, både rike og fattige", "De gjelder bare medlemmer av EU", "At de utelukkende retter seg mot fattige land sør for Sahara i Afrika", "De gjelder bare land i Afrika"],
      explanation: "I motsetning til tidligere utviklingsmål retter bærekraftsmålene seg mot alle land. Også Norge har utfordringer, blant annet med forbruk og utslipp.",
    },
    {
      question: "Hvordan kan det oppstå konflikter mellom ulike bærekraftsmål?",
      options: ["Økonomisk vekst kan for eksempel gi økte utslipp som motvirker klimamålet", "Målene er formulert slik at konflikter er umulige", "Målene er formulert slik at de aldri kan komme i konflikt med hverandre i praksis", "Klimamålet gjelder bare privatpersoner og husholdninger, ikke industri og næringsliv"],
      explanation: "Målene henger sammen, og tiltak for ett mål kan motvirke et annet – for eksempel kan industrivekst gi arbeidsplasser, men også mer utslipp og naturinngrep.",
    },
    {
      question: "Hvem definerte begrepet bærekraftig utvikling som ligger til grunn for målene?",
      options: ["Brundtland-kommisjonen i rapporten «Vår felles fremtid» fra 1987", "Verdensbanken, i en omfattende rapport som ble lagt fram i året 2015", "Romerriket, som la grunnlaget for moderne forvaltning og ressursbruk", "Forsvarsalliansen NATO, som ble opprettet i etterkrigsårene rundt 1949"],
      explanation: "Brundtland-kommisjonen definerte bærekraftig utvikling som utvikling som dekker dagens behov uten å ødelegge for fremtidige generasjoner.",
    },
  ],
  "geografi-1-7-6": [
    {
      question: "Hva gir EØS-avtalen Norge?",
      options: ["Tilgang til EUs indre marked med fri flyt av varer, tjenester, kapital og arbeidskraft", "Fullt og formelt medlemskap i Den europeiske union med stemmerett i alle EUs egne organer", "Fritak fra alt EU-regelverk, samtidig som Norge beholder full markedstilgang", "En felles pengeunion med euro som valuta på lik linje med eurosonens land"],
      explanation: "EØS-avtalen knytter Norge, Island og Liechtenstein til EUs indre marked, mot at Norge innfører EUs regelverk for markedet.",
    },
    {
      question: "Hva er Statens pensjonsfond utland (Oljefondet)?",
      options: ["Et statlig fond som investerer inntektene fra olje- og gassvirksomheten i utlandet", "En bankkonto for utbetaling av alderspensjon hver måned", "Den europeiske unionens felles investeringsfond for infrastruktur i medlemslandene", "Et fond som utelukkende plasserer petroleumsinntektene i norske børsnoterte selskaper"],
      explanation: "Oljefondet er verdens største statlige investeringsfond og plasserer petroleumsinntektene i aksjer, obligasjoner og eiendom globalt for å sikre verdier for fremtidige generasjoner.",
    },
    {
      question: "Hva sier handlingsregelen?",
      options: ["At staten over tid bare skal bruke den forventede realavkastningen av Oljefondet over statsbudsjettet", "At verken avkastningen eller selve kapitalen i fondet noen gang skal brukes over det årlige statsbudsjettet", "At fondet utelukkende kan investeres i olje- og gassvirksomhet i inn- og utland", "At hele fondskapitalen skal være brukt opp og fordelt til borgerne innen 2030"],
      explanation: "Handlingsregelen skal sikre at oljeformuen kommer både dagens og fremtidige generasjoner til gode, ved at bare avkastningen fases inn i økonomien.",
    },
    {
      question: "Hva er Norges viktigste eksportvarer?",
      options: ["Olje, gass og sjømat", "Biler og elektronikk", "Korn og ris", "Tekstiler og klær"],
      explanation: "Petroleum dominerer norsk eksport, fulgt av sjømat. Det gjør norsk økonomi tett vevd inn i verdensøkonomien.",
    },
    {
      question: "Hva er NICFI?",
      options: ["Norges internasjonale klima- og skoginitiativ, som betaler for bevaring av regnskog", "Et norsk statseid oljeselskap som utvinner petroleum på norsk kontinentalsokkel", "En nordisk fiskeriavtale som fordeler fangstkvoter mellom landene i Norden", "Norges idrettsforbund, paraplyorganisasjonen for organisert idrett i Norge"],
      explanation: "Gjennom klima- og skoginitiativet betaler Norge land som Brasil og Indonesia for å redusere avskogingen av regnskog.",
    },
  ],
  "geografi-1-8-1": [
    {
      question: "Hva er geopolitikk?",
      options: ["Studiet av sammenhengen mellom geografi og politisk makt", "Studiet av bergarter, mineraler og hvordan de er fordelt", "Læren om ulike valgordninger og hvordan stemmer omregnes til mandater", "Kartleggingen av klimasoner og hvordan de fordeler seg langs breddegradene"],
      explanation: "Geopolitikk analyserer hvordan beliggenhet, naturressurser, topografi og klima påvirker staters utenrikspolitikk og maktforhold.",
    },
    {
      question: "Hva er en innflytelsessfære?",
      options: ["Et geografisk område der en stormakt har dominerende politisk, økonomisk eller militær innflytelse", "Et frihandelsområde der medlemslandene har fjernet toll og handelshindre seg imellom", "Området innenfor en stats egne offisielle landegrenser der den har full suverenitet", "En sone der ingen statlig myndighet utøver styring eller kontroll i det hele tatt"],
      explanation: "Begrepet stammer fra kolonitiden, men brukes fortsatt om uformelle maktstrukturer der stormakter dominerer områder utenfor egne grenser.",
    },
    {
      question: "Hva er NATOs kjerneprinsipp?",
      options: ["Kollektivt forsvar – et angrep på ett medlemsland regnes som et angrep på alle", "At medlemslandene ikke kan ha egne nasjonale hærer utenfor fellesstyrken", "En felles valuta som alle medlemslandene i alliansen er forpliktet til å bruke", "Fri flyt av varer og tjenester i et felles marked mellom medlemslandene"],
      explanation: "NATO bygger på kollektivt forsvar, nedfelt i Atlanterhavspaktens artikkel 5: et væpnet angrep på ett medlem regnes som et angrep på alle.",
    },
    {
      question: "Hva menes med at verden har gått fra en bipolar til en mer multipolar orden?",
      options: ["Fra to dominerende supermakter under den kalde krigen til flere maktsentre i dag", "Fra mange likeverdige stormakter til én enkelt dominerende supermakt i verden", "At jordens magnetiske nord- og sydpol gradvis har byttet geografisk plass", "At De forente nasjoner har overtatt all reell makt fra de enkelte statene"],
      explanation: "Under den kalde krigen dominerte USA og Sovjetunionen. I dag preges verden av flere maktsentre, blant annet USA, Kina, EU og Russland.",
    },
    {
      question: "Hvilke faktorer gir en stat geopolitisk makt?",
      options: ["Blant annet beliggenhet, naturressurser, økonomi, militærmakt og teknologi", "Kun hvor mange ambassader og konsulater staten selv driver rundt om i verden", "Utelukkende antall innbyggere landet har, uavhengig av økonomi og militærmakt", "Bare landets samlede flateinnhold i kvadratkilometer, uansett hvor ressursene ligger"],
      explanation: "Geopolitisk makt bygger på en kombinasjon av geografiske, økonomiske, militære og teknologiske ressurser samt allianser og innflytelse.",
    },
  ],
  "geografi-1-8-2": [
    {
      question: "Hva er ressursforbannelsen?",
      options: ["At land med store naturressurser ofte får svakere økonomisk utvikling, mer korrupsjon og høyere konfliktrisiko", "At store naturressurser alltid gjør et land både rikt, stabilt og fredelig over tid", "At verdifulle naturressurser bare finnes i fattige utviklingsland, ikke i rike land", "En gammel folkelig myte om ressurser som helt mangler faglig og empirisk grunnlag"],
      explanation: "I land med svake institusjoner kan ressursinntekter konsentreres hos en elite og utløse kamp om kontrollen – derav «paradox of plenty».",
    },
    {
      question: "Når sier man at et område har vannstress?",
      options: ["Når det er mindre enn 1 700 kubikkmeter tilgjengelig ferskvann per person per år", "Når et land helt mangler vannkraftverk og derfor må importere elektrisk kraft", "Når det faller nedbør færre enn ti dager i løpet av et helt kalenderår i området", "Når grunnvannsspeilet ligger dypere enn hundre meter under bakkenivået i et område"],
      explanation: "Under 1 700 m³ per person per år kalles vannstress, og under 1 000 m³ kalles vannknapphet. Rundt 2 milliarder mennesker lever i land med vannstress.",
    },
    {
      question: "Hvorfor er Nilen kilde til internasjonal spenning?",
      options: ["Elven deles av 11 land, og demninger oppstrøms påvirker vanntilgangen nedstrøms", "Ingen av landene som ligger langs Nilen bruker vannet fra elven til noe som helst", "Elven har tørket fullstendig ut, slik at ingen land lenger har tilgang til vannet", "Ingen av landene langs elven bruker vannet, siden det regnes som udrikkelig og salt"],
      explanation: "Nilen er livsnerven for mange land, og utbygging oppstrøms – som store demningsprosjekter – skaper spenninger med land nedstrøms som Egypt.",
    },
    {
      question: "Hvorfor er sjeldne jordarter geopolitisk viktige?",
      options: ["De trengs i moderne teknologi, og produksjonen domineres av få land, særlig Kina", "De brukes utelukkende til produksjon av smykker og pynt, uten industriell verdi", "De finnes i praktisk talt ubegrensede mengder overalt på jorden og er derfor billige", "De har ingen anvendelse i moderne teknologi og etterspørres bare av samlere"],
      explanation: "Sjeldne jordarter inngår i elektronikk, batterier og forsvarsteknologi. Kinas dominans i produksjonen gir landet et strategisk pressmiddel.",
    },
    {
      question: "Hva menes med at energi kan brukes som våpen?",
      options: ["At stater kan bruke leveranser av olje og gass som politisk pressmiddel", "At olje brukes som råstoff når man lager sprengstoff", "At råolje raffineres videre og brukes som råstoff i produksjonen av sprengstoff", "At kraftverk og energianlegg bygges om til befestede militære festninger i krig"],
      explanation: "Land som kontrollerer energileveranser kan stenge eller true med å stenge kranene for å presse andre stater politisk.",
    },
  ],
  "geografi-1-8-3": [
    {
      question: "Hvordan avgrenses Arktis vanligvis?",
      options: ["Som området nord for polarsirkelen, eventuelt av 10 °C-isotermen for juli", "Som alt landområde der det ligger snø på bakken gjennom vintermånedene", "Som området som ligger nord for den norske hovedstaden Oslo på kartet", "Som hele landmassen til de nordiske landene Norge, Sverige og Finland"],
      explanation: "Arktis defineres oftest som området nord for polarsirkelen (66°33′N), eller ved linjen der gjennomsnittstemperaturen i varmeste måned er 10 °C.",
    },
    {
      question: "Hva fastslår Antarktistraktaten?",
      options: ["At Antarktis skal brukes til fredelige formål og forskning, og at territorialkrav er lagt på is", "At Antarktis er underlagt FN som forvalter kontinentet direkte gjennom et eget råd", "At all menneskelig virksomhet, også forskning, er strengt forbudt i Antarktis", "At Antarktis er delt i to like store interessesoner mellom USA og Russland"],
      explanation: "Antarktistraktaten freder kontinentet for militær virksomhet, fremmer forskningssamarbeid og fryser territorialkravene.",
    },
    {
      question: "Hvilke rettigheter gir FNs havrettskonvensjon (UNCLOS) kyststater?",
      options: ["Suverenitet over territorialfarvannet (12 nautiske mil) og enerett til ressursene i en økonomisk sone på 200 nautiske mil", "Rett til å kreve toll og avgift av alle handelsskip uansett hvor i verden de seiler", "Full eiendomsrett til hele verdenshavet og alle ressurser under havbunnen globalt", "Rett til når som helst å stenge internasjonal skipsfart gjennom eget farvann helt"],
      explanation: "UNCLOS (1982) gir kyststater territorialfarvann på 12 nautiske mil, en eksklusiv økonomisk sone på 200 nautiske mil, og mulige krav på kontinentalsokkelen utover dette.",
    },
    {
      question: "Hva fastsetter Svalbardtraktaten fra 1920?",
      options: ["Norsk suverenitet over Svalbard, men med like rettigheter til økonomisk virksomhet for borgerne av traktatlandene", "At Russland eier den halve delen av Svalbard som ligger lengst øst, mens Norge eier resten av øygruppen og alle øyene rundt", "Felles norsk-russisk styre over Svalbard, der ingen av landene har eksklusiv rett til å utnytte naturressursene på øygruppen", "Full russisk suverenitet over Svalbard, men med rett for norske borgere til å drive gruvedrift og fiske i traktatlandenes farvann"],
      explanation: "Traktaten ga Norge suvereniteten, men borgere fra traktatlandene har lik rett til å drive økonomisk virksomhet der – derfor finnes blant annet russisk virksomhet på øygruppen.",
    },
    {
      question: "Hvorfor øker den geopolitiske interessen for Arktis?",
      options: ["Issmeltingen åpner for nye seilingsruter og gjør ressurser mer tilgjengelige", "Området har fått flere innbyggere enn Europa", "Issmeltingen tetter igjen de gamle seilingsrutene og gjør de kjente olje- og gassressursene helt utilgjengelige for stormaktene", "All olje i resten av verden er brukt opp"],
      explanation: "Når sjøisen smelter, blir seilingsruter som Nordøstpassasjen og ressurser som olje, gass og mineraler mer tilgjengelige, noe som øker stormaktenes interesse.",
    },
  ],
  "geografi-1-8-4": [
    {
      question: "Hvordan kan risikoen for naturkatastrofer uttrykkes?",
      options: ["Risiko = fare × sårbarhet ÷ kapasitet", "Risiko = magnitude ÷ avstand", "Risiko = fare + kapasitet ÷ sårbarhet", "Risiko = sårbarhet × kapasitet ÷ fare"],
      explanation: "Risikoen avhenger av sannsynligheten for en naturhendelse (fare), hvor utsatt samfunnet er (sårbarhet), og samfunnets evne til å forebygge og håndtere den (kapasitet).",
    },
    {
      question: "Hvorfor blir en naturhendelse først en katastrofe når den rammer et samfunn?",
      options: ["Fordi katastrofe forutsetter tap av liv eller verdier – et jordskjelv i et ubebodd område er ingen katastrofe", "Fordi mediene bare rapporterer fra hendelser som rammer bebygde samfunn der det allerede bor mennesker fra før", "Fordi selve naturen tar skade av hendelsen, og det er ødeleggelsen av landskapet som gjør at vi kaller det en katastrofe", "Fordi en naturhendelse per definisjon bare kan inntreffe i tett befolkede byer, aldri ute i naturen der ingen mennesker bor"],
      explanation: "Det er kombinasjonen av fare og et sårbart samfunn som skaper katastrofen, ikke naturhendelsen i seg selv.",
    },
    {
      question: "Hvorfor fikk jordskjelvet i Haiti i 2010 langt større konsekvenser enn sammenlignbare skjelv i Japan?",
      options: ["Haiti hadde svakere bygninger, dårligere beredskap og lavere kapasitet til å håndtere katastrofen", "Skjelvet i Haiti var tusen ganger sterkere enn alle skjelv i Japan", "Skjelvet i Haiti hadde langt høyere magnitude enn skjelvene i Japan, og den rene styrken forklarer i seg selv de store skadene", "Haiti ble rammet av en kraftig tsunami i etterkant, mens Japans strenge diker og bølgebrytere stanset alt vann før det nådde land"],
      explanation: "Fattigdom gir høy sårbarhet: dårlig byggekvalitet, svak infrastruktur og liten beredskapskapasitet gjorde skadene i Haiti enorme, mens Japan har strenge byggekrav og god beredskap.",
    },
    {
      question: "Hva er Sendai-rammeverket?",
      options: ["En internasjonal FN-avtale (2015–2030) om katastrofeforebygging og risikoreduksjon", "Et internasjonalt varslingssystem for tsunamier i Stillehavet, opprettet etter flodbølgen i 2004", "En japansk byggeteknisk standard som fastsetter hvor jordskjelvsikre bygninger i storbyer som Tokyo og Sendai må konstrueres", "En regional avtale om bærekraftig hvalfangst og fiskeriforvaltning i Stillehavet, undertegnet av kyststatene i Øst-Asia i 2015"],
      explanation: "Sendai-rammeverket prioriterer å forstå risiko, styrke risikostyring, investere i forebygging og styrke beredskap – inkludert «build back better».",
    },
    {
      question: "Hva innebærer prinsippet «build back better»?",
      options: ["Å gjenoppbygge etter en katastrofe slik at samfunnet blir mindre sårbart enn før", "Å flytte alle innbyggere til et annet land", "Å flytte hele den rammede befolkningen permanent til trygge nabolands byer og bygge et helt nytt samfunn for dem der", "Å la være å gjenoppbygge i det hele tatt"],
      explanation: "Gjenoppbyggingen etter en katastrofe er en mulighet til å bygge sikrere bygg og bedre infrastruktur, slik at neste hendelse gjør mindre skade.",
    },
  ],
  "geografi-1-8-5": [
    {
      question: "Hva var Oslo-avtalen fra 1993?",
      options: ["En avtale mellom Israel og PLO om palestinsk selvstyre, forhandlet frem i hemmelighet i Norge", "En handelsavtale mellom Norge og Sverige som fjernet tollen på alle industrivarer mellom landene", "En omfattende handelsavtale mellom Norge og Sverige som fjernet tollen på industrivarer og styrket samarbeidet i Norden", "En miljøavtale om vern av Nordsjøen mot oljesøl og overfiske, forhandlet frem mellom kyststatene rundt havområdet i Oslo"],
      explanation: "Oslo-avtalen ga palestinsk selvstyre på deler av Vestbredden og Gazastripen og er et kjent eksempel på norsk fredsdiplomati.",
    },
    {
      question: "Hvor langt strekker den eksklusive økonomiske sonen (EEZ) seg?",
      options: ["200 nautiske mil fra kystlinjen", "12 nautiske mil fra kystlinjen", "50 kilometer fra hovedstaden", "Så langt landets skip kan seile"],
      explanation: "I EEZ har kyststaten enerett til naturressursene i vannet og på og under havbunnen, mens andre stater har rett til fri ferdsel. Norges EEZ er blant verdens største.",
    },
    {
      question: "Hva ble avtalt i delelinjeavtalen mellom Norge og Russland i 2010?",
      options: ["Grensen mellom de to landenes havområder i Barentshavet", "Felles forvaltning av Svalbard", "En tollunion mellom Norge og Russland som skulle lette handelen med olje, gass og fisk over den felles grensen i nord", "En tollunion mellom landene"],
      explanation: "Etter rundt 40 år med forhandlinger ble Norge og Russland enige om delelinjen i Barentshavet, noe som avklarte ressursrettighetene i området.",
    },
    {
      question: "Hvorfor omtales Norge ofte som en fredsnasjon?",
      options: ["Norge har meglet i internasjonale konflikter og deler ut Nobels fredspris", "Norge er ikke medlem av noen allianser", "Norge deltar ikke i FNs arbeid, men driver i stedet all sin fredsinnsats gjennom egne organisasjoner uten internasjonal binding", "Norge har aldri hatt et forsvar"],
      explanation: "Norge har lagt til rette for fredsprosesser, blant annet Oslo-avtalen, driver omfattende bistand og humanitært arbeid, og fredsprisen deles ut i Oslo.",
    },
    {
      question: "Hvilke internasjonale organisasjoner og avtaler er sentrale for Norge?",
      options: ["FN, NATO og EØS-avtalen", "OPEC, ASEAN og Mercosur", "Den afrikanske union og Arabiske liga", "Warszawapakten og Comecon"],
      explanation: "Norge er aktivt medlem av FN, har sin sikkerhetsgaranti gjennom NATO, og er økonomisk knyttet til EU gjennom EØS-avtalen.",
    },
  ],
  "geografi-1-8-6": [
    {
      question: "Hva er en megatrend?",
      options: ["En stor, langvarig og transformativ global endring som påvirker økonomi, politikk, samfunn og miljø", "En populær video på sosiale medier", "En værtype med uvanlig stabile forhold som holder seg over et stort område i flere uker og former sesongens klima lokalt", "En kortvarig motebølge som sprer seg raskt gjennom sosiale medier, men som forsvinner igjen etter noen få uker eller måneder"],
      explanation: "Megatrender som klimaendringer, urbanisering, demografiske endringer og digitalisering er dype, strukturelle endringer som former fremtiden.",
    },
    {
      question: "Hva er en klimaflyktning?",
      options: ["En person som tvinges til å forlate hjemstedet på grunn av klimaendringer som havnivåstigning, tørke eller flom", "En person som flytter for å få bedre vær på ferie", "En trekkfugl eller dyreart som følger sesongene og forflytter seg mot varmere strøk når klimaet på hjemstedet blir for kaldt", "En person som frivillig flytter til et annet land utelukkende for å nyte et varmere og mer behagelig klima på sine eldre dager"],
      explanation: "Begrepet er ikke formelt anerkjent i FNs flyktningkonvensjon, og klimaflyktninger mangler derfor den juridiske beskyttelsen politiske flyktninger har.",
    },
    {
      question: "Hvor ventes mesteparten av verdens befolkningsvekst fremover?",
      options: ["I Afrika og deler av Asia", "I Nord-Amerika", "I Nord-Amerika, der høy levestandard og lang levealder driver den raskeste folketallsøkningen", "I Oseania"],
      explanation: "Befolkningsveksten er sterkest i Afrika sør for Sahara og deler av Asia, mens mange land i Europa og Øst-Asia har aldrende og til dels synkende befolkninger.",
    },
    {
      question: "Hvordan endrer fornybar energi den globale energigeografien?",
      options: ["Nye områder med mye sol, vind og vannkraft får økt strategisk betydning", "Geografi slutter å spille noen rolle for energi", "Geografien slutter helt å ha betydning for energi, fordi sol og vind finnes overalt og kan utnyttes like godt i alle land", "All energiproduksjon flyttes til polene"],
      explanation: "Når sol og vind erstatter fossile brensler, forskyves den energipolitiske betydningen fra olje- og gassland til områder og land med gode fornybarressurser og viktige mineraler.",
    },
    {
      question: "Hvorfor regnes geografisk kompetanse som viktig i fremtidens samfunn?",
      options: ["Utfordringer som klimaendringer, urbanisering og ressursforvaltning krever forståelse av romlige sammenhenger", "Fordi alle fremtidige jobber krever feltarbeid", "Fordi digitale karttjenester snart erstattes av papirkart igjen, og folk må lære seg å lese tradisjonelle kart og kompass på nytt", "Fordi mange andre skolefag legges ned i årene som kommer, slik at geografi må overta ansvaret for både historie og samfunnskunnskap"],
      explanation: "GIS-teknologi, arealplanlegging, klimatilpasning og global forståelse bygger alle på geografisk kompetanse og romlig tenkemåte.",
    },
  ],
};

export default quizData_geografi;
