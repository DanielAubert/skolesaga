import sys
sys.path.insert(0, "/Users/danielandreasaubert/eksamenssett/Skolesaga/.narrativ-build")
from builder import build
T=0;Q=0
def add(*a):
    global T,Q
    nq,nqs=build(*a); T+=nq; Q+=nqs

# ===== 7.1 Samisk religion og kosmologi =====
add("krle-9-7-1",
"En fortelling om Nordens urfolks eldgamle religion -- om de tre verdenene, guder som Beaivi og Horagállis, hellige steder, noaiden med runebommen og joiken som åndelig praksis.",
33,
[
("intro","""## En religion eldre enn kirkene

Lenge før de første kirkene reiste seg i Norden, hadde samene -- Nordens urfolk -- en av Europas eldste religiøse tradisjoner. Den ble praktisert i tusenvis av år, overlevert gjennom fortellinger, joik og ritualer fra generasjon til generasjon, helt uten hellige skrifter. Selv om kristningen på 1600- og 1700-tallet fortrengte mye, lever elementer av den samiske åndeligheten videre i dag.

**Samisk religion** var naturbasert og *animistisk* -- man trodde at alt i naturen hadde en sjel eller ånd. Fjell, elver, vind, dyr og trær ble oppfattet som levende vesener med egen kraft. I dette kapittelet skal vi bli kjent med samenes verdensbilde, guder, hellige steder og ritualer, og møte denne tradisjonen med den respekten den fortjener som en levende kulturarv."""),

("text","""## Tre verdener og mange guder

I den samiske kosmologien var verden delt i tre nivåer. *Oververdenen* var gudenes og de lyse åndenes verden, forbundet med solen og himmelen. *Mellomverdenen* var menneskenes og dyrenes synlige virkelighet, der samene levde i samspill med en natur som var hellig og måtte behandles med respekt. *Underverdenen* var de dødes rike og de mørke kreftenes verden -- ikke nødvendigvis ond, men annerledes og farlig. Verdenene var ikke helt atskilte: gjennom ritualer og drømmer kunne man bevege seg mellom dem, og særlig *noaiden* (sjamanen) kunne reise mellom verdenene.

Den samiske religionen hadde ikke én guddom, men mange ånder og krefter knyttet til naturens fenomener. **Beaivi**, solguden, var en av de viktigste -- han brakte lys og liv tilbake etter den mørke vinteren, særlig viktig i nord med mørketid og midnattssol, og fikk hvitt reinsdyrskinn som offer. **Horagállis**, tordenguden, beskyttet menneskene mot onde ånder og ligner den norrøne Tor. **Máttaráhkká** var urmoren, jordgudinnen, og hennes tre døtre hjalp ved fødsel og barndom -- Sáráhkká hjalp ved fødselen, Uksáhkká voktet døren, og Juksáhkká bestemte barnets kjønn. Og **Stállu** var farlige vesener fra underverdenen, som i fortellingene kunne lures og beseires av smarte mennesker."""),

("quiz","Test deg selv på verdensbilde og guder:",[
 ("Hva betyr det at samisk religion var animistisk?",[("At den hadde mange hellige skrifter",False),("At man trodde alt i naturen hadde en sjel eller ånd",True),("At den var en gren av kristendommen",False),("At den bare hadde én gud",False)],
  "Animistisk betyr at man trodde alt i naturen -- fjell, elver, dyr og trær -- hadde en sjel eller ånd og var levende vesener med egen kraft."),
 ("I hvor mange verdener var den samiske kosmologien delt?",[("Én",False),("To",False),("Tre -- over-, mellom- og underverdenen",True),("Sju",False)],
  "Den samiske kosmologien var delt i tre verdener: oververdenen (gudenes), mellomverdenen (menneskenes) og underverdenen (de dødes rike)."),
 ("Hvem var Beaivi i samisk religion?",[("Tordenguden",False),("Solguden som brakte lys og liv tilbake etter vinteren",True),("En farlig skikkelse fra underverdenen",False),("Urmoren",False)],
  "Beaivi var solguden, en av de viktigste guddommene, som brakte lys, varme og liv tilbake etter den mørke vinteren -- særlig viktig i nordområdene."),
]),

("text","""## Hellige steder, noaiden og joiken

I samisk religion var bestemte steder i naturen hellige. De ble kalt **sieidi** -- det kunne være en spesielt formet stein, et fjell, et tre eller en innsjø der naturen var uvanlig vakker eller dramatisk. Ved en sieidi la man igjen offergaver som reinsdyrhorn, fett eller fisk, ba om lykke i jakt, fiske og reindrift, og viste respekt og takknemlighet til naturkreftene. Sieidiene uttrykker en sentral tanke: naturen er hellig og fortjener respekt. Mange sieidi-steder finnes fortsatt i det samiske landskapet og er fremdeles betydningsfulle for mange samer -- noen er sårbare og må ikke forstyrres.

**Noaiden** var den samiske sjamanen -- en person med spesielle evner til å kommunisere med åndeverdenen. Noaiden helbredet syke ved å kontakte åndene, spådde framtiden, beskyttet samfunnet og ledet ritualer, og kunne reise mellom de tre verdenene i transe. Det viktigste redskapet var **runebommen**, en tromme av reinsdyrskinn med tegnede symboler for guder, ånder, de tre verdenene og naturkreftene. Noaiden la en peker på trommen og slo forsiktig; der pekeren stoppet, fikk man svar -- omtrent som et orakel. Både menn og kvinner kunne være noaider. Under kristningen ble runebommer samlet inn og brent, og i dag finnes bare rundt 70 originale bevart, de fleste i museer -- de er blitt et sterkt symbol på samisk identitet.

**Joiken** er den samiske sangtradisjonen og en av Europas eldste musikkformer. I religionen var den mer enn underholdning -- den var en åndelig praksis som kalte på naturånder, hjalp noaiden inn i transe og hedret avdøde. Et viktig poeng: man joiker ikke *om* noe, man joiker *noen* eller *noe*. En persons joik er personlig, nesten som et navn, og å joike et fjell uttrykker forbindelse til stedet. Under fornorskningen ble joik forbudt, men i dag er den revitalisert, og artister som Mari Boine og Ella Marie Hætta Isaksen har gjort den kjent langt utenfor Sápmi."""),

("quiz","Test deg selv på hellige steder, noaiden og joik:",[
 ("Hva er en sieidi?",[("En samisk tromme",False),("Et hellig sted i naturen, som en stein eller et fjell, der man la igjen offergaver",True),("En joik",False),("En samisk gud",False)],
  "En sieidi er et hellig sted i naturen -- en stein, et fjell, et tre eller en innsjø -- der samene la igjen offergaver og viste respekt for naturkreftene."),
 ("Hva var runebommen, og hva skjedde med de fleste av dem?",[("En matskål som fortsatt brukes",False),("Noaidens tromme, som ble samlet inn og brent under kristningen",True),("Et musikkinstrument bare for fest",False),("En type joik",False)],
  "Runebommen var noaidens tromme med symboler, brukt som et orakel. Under kristningen ble de fleste samlet inn og brent; bare rundt 70 originale er bevart i dag."),
 ("Hva er spesielt med hvordan man joiker?",[("Man joiker alltid om kjærlighet",False),("Man joiker ikke om noe, men joiker noen eller noe -- joiken er personlig",True),("Joik er bare for underholdning",False),("Bare noaiden får joike",False)],
  "Man joiker ikke om noe, men joiker noen eller noe. En persons joik er personlig, nesten som et navn, og uttrykker forbindelse til mennesker eller steder."),
]),

("summary","""## Oppsummering

Samisk religion er en av Europas eldste religiøse tradisjoner -- naturbasert, animistisk og muntlig overlevert uten hellige skrifter. Kosmologien delte verden i tre nivåer, og religionen hadde mange guder og ånder knyttet til naturen, som solguden Beaivi, tordenguden Horagállis og urmoren Máttaráhkká.

Hellige steder (sieidi) i naturen fikk offergaver, noaiden (sjamanen) kommuniserte med åndeverdenen ved hjelp av runebommen, og joiken var en åndelig praksis. Det samiske natursynet -- at alt henger sammen, at naturen er besjelet, og at mennesket må gi tilbake -- har fått fornyet interesse fordi det ligner moderne økologisk tenkning. Samisk åndelighet er en levende kulturarv, ikke bare fortidshistorie."""),
])

# ===== 7.2 Kristningen av samene =====
add("krle-9-7-2",
"En fortelling om et av de mørkeste kapitlene i norsk religionshistorie -- hvordan samenes religion ble fortrengt gjennom tvang og fornorskning, og om motstanden og forsoningsarbeidet i dag.",
33,
[
("intro","""## Da en hel religion ble forsøkt utslettet

Historien om hvordan samene ble kristnet er et av de mørkeste kapitlene i norsk religionshistorie. Gjennom tvang, straff og systematisk undertrykkelse ble samenes tradisjonelle religion fortrengt og erstattet med kristendommen -- en prosess som pågikk over flere hundre år og fikk dype konsekvenser for samisk kultur og identitet.

Det er viktig å kjenne denne historien -- ikke for å dømme, men for å forstå og lære av fortidens feil. Vi skal følge utviklingen fra de første, gradvise møtene, gjennom den systematiske tvangsmisjonen og fornorskningspolitikken, og fram til den samiske motstanden og forsoningsarbeidet som pågår i dag."""),

("text","""## Fra gradvis møte til systematisk tvang

De første møtene mellom samer og kristendom skjedde gradvis fra rundt år 1000. I den tidlige fasen tok noen samer til seg elementer av kristendommen frivillig, og samisk religion og kristendom eksisterte side om side -- mange praktiserte en blanding av begge. Dette kalles *religiøs synkretisme*, at elementer fra ulike religioner blandes. I denne perioden var det relativt lite direkte tvang.

På 1600- og 1700-tallet ble kristningen langt mer aggressiv og systematisk. Den dansk-norske staten bestemte at *alle* samer skulle bli kristne. **Thomas von Westen** (1682--1727), kalt «samenes apostel», ledet et omfattende misjonsarbeid, opprettet skoler -- men samlet også inn og ødela runebommer og religiøse gjenstander. Metodene var harde: forbud mot samisk religionsutøvelse, brenning av runebommer, straff for dem som fortsatte med ritualer, ødeleggelse av hellige sieidi-steder, og rettssaker mot noaider -- noen ble til og med henrettet. En av de mest kjente er saken mot noaiden **Anders Poulsen** i Vadsø i 1692. Han ble stilt for retten for å ha brukt runebommen sin, og forklarte under rettssaken symbolene på trommen så detaljert at det har gitt oss verdifull kunnskap om samisk religion. Poulsen ble drept under fangenskapet."""),

("quiz","Test deg selv på kristningen:",[
 ("Hva er religiøs synkretisme?",[("At én religion forbyr alle andre",False),("At elementer fra ulike religioner blandes",True),("At man ikke tror på noe",False),("At alle religioner forsvinner",False)],
  "Religiøs synkretisme betyr at elementer fra ulike religioner blandes -- slik mange samer i den tidlige fasen praktiserte både samisk religion og kristendom."),
 ("Hva gjorde Thomas von Westen, «samenes apostel»?",[("Han forsvarte samisk religion",False),("Han ledet misjonsarbeid og samlet inn og ødela runebommer",True),("Han grunnla Sametinget",False),("Han forbød kristendommen",False)],
  "Thomas von Westen ledet et omfattende misjonsarbeid blant samene, opprettet skoler, men samlet også inn og ødela runebommer og andre religiøse gjenstander."),
]),

("text","""## Fornorskning -- og forsøk på kulturell utslettelse

Etter den verste tvangsmisjonen kom en ny bølge: **fornorskningspolitikken** (ca. 1850--1960). Målet var å gjøre samene «norske» -- kulturelt, språklig og religiøst. Samisk ble forbudt i skolen, og barn ble straffet for å snakke det. Samiske barn ble sendt til internatskoler langt hjemmefra, der de ikke fikk bruke språket eller praktisere kulturen. Joik, kofter og samiske tradisjoner ble sett ned på, og jordloven av 1902 bestemte at bare norsktalende kunne eie jord i Finnmark. Mange samer lærte å skamme seg over sin identitet.

Konsekvensene var dype: mange mistet morsmålet, kulturelle tradisjoner ble brutt, religiøs kunnskap gikk tapt mellom generasjonene, og mange skjulte sin identitet -- med psykiske og sosiale skader som varte i generasjoner. Fornorskningspolitikken er et eksempel på *kulturelt folkemord*, et systematisk forsøk på å utrydde et folks kultur og identitet, selv om menneskene fysisk fikk leve. Den ble drevet av en idé om at samisk kultur var «primitiv» og at samene ville ha det bedre som «norske» -- en politikk som i dag anerkjennes som en alvorlig urett.

Men til tross for århundrer med undertrykkelse ga samene aldri helt opp kulturen sin. Mange praktiserte religionen i hemmelighet, og kunnskap ble videreført muntlig i familiene. **Alta-saken** (1979--1981), kampen mot oppdemmingen av Altaelva med demonstrasjoner og sultestreik foran Stortinget, ble et vendepunkt for samiske rettigheter. I 1989 ble **Sametinget** opprettet som samenes folkevalgte organ. Samisk språk undervises igjen, joik er en levende kunstform, nye runebommer lages av samiske kunstnere, og 6. februar feires som samefolkets dag."""),

("quiz","Test deg selv på fornorskning og motstand:",[
 ("Hva var målet med fornorskningspolitikken?",[("Å bevare samisk språk og kultur",False),("Å gjøre samene «norske» -- kulturelt, språklig og religiøst",True),("Å gi samene mer land",False),("Å fremme joik i skolen",False)],
  "Fornorskningspolitikken (ca. 1850--1960) hadde som mål å assimilere samene i norsk kultur -- samisk språk, religion og kultur ble systematisk undertrykt."),
 ("Hvorfor kalles fornorskningen et eksempel på «kulturelt folkemord»?",[("Fordi alle samer ble drept",False),("Fordi det var et systematisk forsøk på å utrydde et folks kultur og identitet",True),("Fordi samene flyttet frivillig",False),("Fordi det styrket samisk kultur",False)],
  "Fornorskningen kalles kulturelt folkemord fordi det var et systematisk forsøk på å utrydde et folks kultur, språk og identitet, selv om menneskene fysisk fikk leve."),
 ("Hva ble opprettet i 1989 for å gi samene politisk innflytelse?",[("Alta-kraftverket",False),("Sametinget -- samenes folkevalgte organ",True),("Sannhetskommisjonen",False),("Den norske kirke",False)],
  "Sametinget ble opprettet i 1989 som samenes folkevalgte organ og arbeider for samisk kultur, språk og rettigheter."),
]),

("text","""## Sannhet og forsoning -- en levende åndelighet

I 2018 opprettet Stortinget **Sannhets- og forsoningskommisjonen** for å granske fornorskningspolitikken og uretten mot samer, kvener og norskfinner. Kommisjonen skulle kartlegge politikken og dens konsekvenser, samle inn personlige historier og foreslå tiltak for forsoning. Rapporten fra juni 2023 dokumenterte omfattende overgrep og kulturell undertrykkelse, langvarige konsekvenser for helse, språk og identitet, og at mange fremdeles bærer på traumer og skam -- fornorskningens virkninger er ikke over. Blant anbefalingene var å styrke samisk og kvensk språk, gi bedre undervisning om fornorskningshistorien, og støtte kulturrevitalisering. Kommisjonen er et viktig steg, men forsoning er en lang prosess.

I dag lever samisk åndelighet videre på ulike måter. Mange samer er kristne, men kombinerer troen med samiske kulturuttrykk. Noen revitaliserer tradisjonelle religiøse praksiser, joik brukes både som kulturuttrykk og som åndelig praksis, og respekten for naturen er fortsatt sentral i samisk identitet. Noen samiske kirker bruker joik og samisk språk i gudstjenestene. Det viktige er å forstå at samisk kultur og åndelighet er levende og i utvikling -- ikke bare fortidshistorie. Samisk identitet i dag er mangfoldig, og det finnes mange måter å være same på."""),

("quiz","Test deg selv på sannhet og forsoning:",[
 ("Hva gjorde Sannhets- og forsoningskommisjonen (2018--2023)?",[("Den fortsatte fornorskningen",False),("Den gransket fornorskningspolitikken og uretten mot samer, kvener og norskfinner",True),("Den forbød samisk språk",False),("Den bygde Alta-kraftverket",False)],
  "Sannhets- og forsoningskommisjonen gransket fornorskningspolitikken, samlet personlige historier og foreslo tiltak for forsoning. Rapporten kom i 2023."),
 ("Hvordan lever samisk åndelighet videre i dag?",[("Den er helt forsvunnet",False),("Mange er kristne, men kombinerer troen med samiske kulturuttrykk, og noen revitaliserer tradisjonene",True),("Bare som museumsgjenstander",False),("Den er forbudt",False)],
  "Samisk åndelighet er levende: mange samer er kristne, men kombinerer troen med samiske kulturuttrykk, joik og respekt for naturen, og noen revitaliserer tradisjonelle praksiser."),
]),

("summary","""## Oppsummering

Kristningen av samene var en lang prosess. Etter gradvise, frivillige møter fra rundt år 1000 ble den på 1600- og 1700-tallet aggressiv og systematisk, med forbud, brenning av runebommer og rettssaker mot noaider. Deretter fulgte fornorskningspolitikken (ca. 1850--1960), som forsøkte å utslette samisk språk, religion og kultur -- et eksempel på kulturelt folkemord.

Samene ga aldri helt opp kulturen sin. Alta-saken ble et vendepunkt, Sametinget ble opprettet i 1989, og en sannhets- og forsoningskommisjon la fram sin rapport i 2023. I dag er samisk åndelighet levende og mangfoldig: mange kombinerer kristen tro med samiske kulturuttrykk og respekt for naturen."""),
])

# ===== 7.3 Urfolksreligioner i verden =====
add("krle-9-7-3",
"En fortelling om urfolks religiøse tradisjoner verden over -- om aboriginernes Drømmetid, maorienes verdensbilde, nordamerikanske og afrikanske tradisjoner, og det globale mønsteret av undertrykkelse.",
33,
[
("intro","""## Like rike som verdensreligionene

Over hele verden har urfolk sine egne religiøse tradisjoner, utviklet gjennom tusenvis av år. Disse tradisjonene er like rike og komplekse som de store verdensreligionene -- selv om de altfor ofte har blitt misforstått og nedvurdert. En viktig regel før vi begynner: ordet «primitiv» skal aldri brukes om urfolksreligioner. Dette er sofistikerte trossystemer utviklet over årtusener.

**Urfolksreligioner** kjennetegnes ofte av muntlig overlevering gjennom fortellinger og sanger, en hellig naturtilknytning, forfedrekult der de avdøde har en viktig rolle, lokal forankring i et bestemt landskap, og et helhetlig syn som ikke skiller skarpt mellom religion, kultur og dagligliv. I dette kapittelet skal vi reise til Australia, New Zealand, Nord-Amerika og Afrika, og se hva tradisjonene har felles, hva som skiller dem, og hvorfor de fortjener like stor respekt som alle andre religioner."""),

("text","""## Drømmetiden og maorienes verdensbilde

Australia ble befolket for minst 65 000 år siden, og de australske **aboriginerne** har verdens eldste sammenhengende kulturelle tradisjon. Kjernen er **Drømmetiden** (the Dreaming): i begynnelsen skapte forfedreånder verden ved å vandre over landskapet og forme fjell, elver, dyr og planter. Disse skapelsesvandringene kalles *songlines* -- sanger som beskriver vandringene og samtidig fungerer som kart. Drømmetiden er ikke bare fortid; den eksisterer hele tiden, parallelt med nåtiden. Hvert sted i landskapet har en fortelling knyttet til skapelsen, og seremonier med dans, sang og kroppsmaling holder forbindelsen levende. Det mest kjente hellige stedet er **Uluru**, som for Anangu-folket er knyttet til skapelsesfortellinger -- i 2019 ble det forbudt for turister å klatre på fjellet, av respekt for dets religiøse betydning.

**Maoriene** er urfolket på New Zealand (Aotearoa) og kom dit for rundt 700--800 år siden fra Polynesia. I skapelsesmyten lå himmelfaderen *Ranginui* og jordmoren *Papatuanuku* tett omslynget i mørket, helt til skogenes gud *Tane Mahuta* presset dem fra hverandre og skapte lyset. Sentrale begreper er *mana* (åndelig kraft og autoritet, som alt levende har), *tapu* (det hellige og beskyttede), *whakapapa* (genealogi som forbinder mennesker med forfedre, guder og natur) og *kaitiakitanga* (forvaltning -- plikten til å ta vare på landet for fremtidige generasjoner). Maorienes hellige møtesteder kalles *marae*, der seremonier, begravelser og samlinger holdes etter strenge ritualer."""),

("quiz","Test deg selv på Drømmetiden og maoriene:",[
 ("Hva er Drømmetiden (the Dreaming) i aboriginsk religion?",[("En vanlig nattesøvn",False),("Skapelsestiden da forfedreånder formet verden, og som eksisterer hele tiden parallelt med nåtiden",True),("En moderne kunstform",False),("Et forbud mot å klatre",False)],
  "Drømmetiden er skapelsestiden da forfedreånder vandret over landskapet og formet verden. Den er ikke bare fortid, men eksisterer hele tiden parallelt med nåtiden."),
 ("Hva betyr kaitiakitanga i maorisk tradisjon?",[("Et hellig fjell",False),("Forvaltning -- plikten til å ta vare på landet for fremtidige generasjoner",True),("En skapelsesgud",False),("En type dans",False)],
  "Kaitiakitanga er maorienes begrep for forvaltning -- plikten til å ta vare på landet og naturen for kommende generasjoner."),
]),

("text","""## Nordamerikanske og afrikanske tradisjoner -- og et felles mønster

Nord-Amerika har hundrevis av urfolk, hver med sine tradisjoner, men med noen fellestrekk. Mange tror på en høyeste åndelig kraft -- Lakota kaller den *Wakan Tanka* (Den store hellige) -- som gjennomsyrer alt. Naturen er hellig, alle deler er forbundet, og *medisinhjulet* symboliserer balansen mellom alle ting. Viktige ritualer er soldansen (der deltakere faster og danser for å søke visjoner), svettehytta (et renselsesritual med varme steiner) og visjonssøkingen (der en ung person drar alene ut i villmarken for å faste og søke veiledning). I USA og Canada ble disse religionene forbudt i lange perioder, og tusenvis av barn ble tvunget inn i *residensskoler* der de mistet språk og kultur -- en parallell til fornorskningen i Norge.

Afrika har et enormt mangfold av tradisjonelle religioner. Et gjennomgående trekk er *forfedrekult*: de avdøde lever videre som ånder som kan beskytte, veilede og straffe, og eldre behandles med stor respekt fordi de er nærmest forfedrene. Mange har en høyeste gud som skapte verden -- Yoruba kaller ham *Olodumare*, Zulu *Unkulunkulu* -- men denne guden er ofte fjern og kontaktes gjennom mellomvesener. Åndelige ledere som healere og orakler formidler mellom menneskene og åndeverdenen. Fellesskapet er viktigere enn individet, uttrykt i *ubuntu*-filosofien: «Jeg er fordi vi er.»

Til tross for forskjellene har urfolksreligioner ofte mye felles: naturen er hellig, de avdøde lever videre, kunnskap overleveres muntlig, religion er ikke atskilt fra dagliglivet, og troen er kollektiv og lokalt forankret. Men disse likhetene betyr ikke at alle urfolksreligioner er «det samme» -- hver er unik. Et trist fellestrekk er likevel undertrykkelsen: kolonimakter fordømte religionene som «avgudsdyrking», ødela gjenstander og hellige steder, og tvang barn inn i misjonsskoler. I Australia ble aboriginske barn tatt fra familiene («Stolen Generations»), i Canada gikk over 150 000 urfolksbarn gjennom residensskoler der tusenvis døde. Fornorskningen mot samene var altså ikke et isolert norsk fenomen, men del av et globalt mønster."""),

("quiz","Test deg selv på nordamerikanske og afrikanske tradisjoner:",[
 ("Hva er ubuntu-filosofien i afrikanske tradisjoner?",[("Troen på én fjern skapergud",False),("«Jeg er fordi vi er» -- mennesker eksisterer gjennom sine relasjoner",True),("En type renselsesritual",False),("Et forbud mot å ære forfedrene",False)],
  "Ubuntu er tanken om at fellesskapet er viktigere enn individet -- «Jeg er fordi vi er» -- at mennesker eksisterer gjennom sine relasjoner til andre."),
 ("Hva har fornorskningen mot samene felles med behandlingen av urfolk andre steder?",[("Ingenting -- den var helt unik for Norge",False),("Den var del av et globalt mønster av kolonial undertrykkelse, som «Stolen Generations» og residensskoler",True),("Den var frivillig overalt",False),("Den styrket alle urfolks religioner",False)],
  "Fornorskningen var del av et globalt mønster: aboriginske barn ble tatt fra familiene i Australia, og over 150 000 urfolksbarn gikk gjennom residensskoler i Canada."),
 ("Hvilket ord skal aldri brukes om urfolksreligioner?",[("«Tradisjonell»",False),("«Primitiv»",True),("«Hellig»",False),("«Muntlig»",False)],
  "Ordet «primitiv» skal aldri brukes om urfolksreligioner -- de er sofistikerte trossystemer utviklet over tusenvis av år og fortjener samme respekt som andre religioner."),
]),

("summary","""## Oppsummering

Urfolksreligioner verden over er like rike og komplekse som de store verdensreligionene. Aboriginernes Drømmetid forteller om forfedreånder som skapte verden, maorienes verdensbilde bygger på begreper som mana, tapu og kaitiakitanga, nordamerikanske tradisjoner har ritualer som soldansen og svettehytta, og afrikanske religioner vektlegger forfedrekult og ubuntu-filosofien.

Tradisjonene har ofte mye felles -- hellig natur, forfedrekontakt, muntlig overlevering, helhetlig livssyn, fellesskap og lokal forankring -- men hver er unik og må forstås på egne premisser. Et trist fellestrekk er kolonial undertrykkelse, som viser at fornorskningen mot samene var del av et globalt mønster."""),
])

# ===== 7.4 Urfolks rettigheter og religion i dag =====
add("krle-9-7-4",
"En fortelling om urfolks kamp for rettigheter i dag -- om FNs erklæring og prinsippet om fritt samtykke, om hvordan land og religion henger sammen, og om revitalisering og forsoning.",
30,
[
("intro","""## Kampen som ikke er over

I dag kjemper urfolk over hele verden for sine rettigheter -- til land, språk, kultur og religion. Etter århundrer med undertrykkelse og kolonialisme har det internasjonale samfunnet gradvis begynt å anerkjenne disse rettighetene. Men kampen er langt fra over.

I 2021 slo Norges Høyesterett fast at vindkraftutbygging på Fosen krenket samenes rett til kulturutøvelse -- likevel sto turbinene der mer enn ett år senere, og saken utløste store demonstrasjoner i 2023. Den minner oss om at rettigheter på papiret ikke alltid blir til virkelighet. I dette kapittelet ser vi på hvilke rettigheter urfolk har, hvordan religionen er knyttet til landrettigheter, og hvordan urfolk revitaliserer sine religiøse tradisjoner."""),

("text","""## Internasjonale rettigheter og prinsippet om samtykke

I 2007 vedtok FNs generalforsamling **FNs erklæring om urfolks rettigheter (UNDRIP)**, og Norge stemte for. Erklæringen slår fast at urfolk har rett til selvbestemmelse, til å utøve sine religiøse tradisjoner fritt, til sine tradisjonelle landområder og ressurser, og til å bevare og utvikle sin kultur og sitt språk. Den fastslår også at stater skal gjøre opp for konfiskering av urfolks land og religiøse gjenstander. Et viktig prinsipp er **fritt, forhåndsinformert samtykke (FPIC)**: urfolk har rett til å bli informert om og samtykke til tiltak som berører deres landområder *før* tiltaket settes i gang. Det innebærer at samtykket må være fritt (ingen tvang), forhåndsinformert (i god tid), informert (all relevant informasjon deles) og reelt (urfolket kan si ja eller nei).

I tillegg finnes **ILO-konvensjon 169** (1989), som -- i motsetning til FN-erklæringen -- er juridisk bindende. Norge var det første landet i verden som ratifiserte den, og den gir urfolk rett til å bli konsultert i saker som berører dem. Men selv om rettighetene finnes på papiret, er gjennomføringen ofte mangelfull, og mange urfolk opplever fremdeles brudd på sine rettigheter."""),

("quiz","Test deg selv på rettigheter og samtykke:",[
 ("Hva er FNs erklæring om urfolks rettigheter (UNDRIP) fra 2007?",[("En lov bare for Norge",False),("En erklæring om at urfolk har rett til selvbestemmelse, religion, land og kultur",True),("Et forbud mot urfolks religioner",False),("En avtale om turisme",False)],
  "UNDRIP (2007) slår fast at urfolk har rett til selvbestemmelse, til å utøve sine religiøse tradisjoner fritt, til sine landområder og til å bevare sin kultur. Norge stemte for."),
 ("Hva betyr prinsippet om fritt, forhåndsinformert samtykke (FPIC)?",[("At staten alltid bestemmer",False),("At urfolk skal informeres om og kunne si ja eller nei til tiltak før de settes i gang",True),("At urfolk aldri kan si nei",False),("At samtykke gis etterpå",False)],
  "FPIC betyr at urfolk har rett til å bli informert om og samtykke til tiltak som berører dem -- fritt, på forhånd, informert, og med reell mulighet til å si ja eller nei."),
]),

("text","""## Land, religion, revitalisering og forsoning

For mange urfolk er land og religion uatskillelig -- landet er ikke bare en ressurs, men hellig. Hellige steder finnes i landskapet og kan ikke flyttes, religiøse ritualer er knyttet til bestemte steder, forfedreåndene er forbundet med landskapet, og identitet og spirituell helse avhenger av forbindelsen til tradisjonelle områder. Derfor blir landkonflikter også religiøse konflikter. I **Fosen-saken** hevdet reindriftssamene at vindturbinene ødela viktige beiteområder og krenket retten til kulturutøvelse. Ved **Standing Rock** i USA (2016) protesterte Lakota-folket mot en oljerørledning gjennom hellig land, og i **Amazonas** kjemper urfolk mot avskoging som truer hellige skoger -- en kamp der flere aktivister er blitt drept.

Samtidig opplever mange urfolksreligioner en **revitalisering** -- en fornying og gjenoppliving. Samisk joik er blitt en anerkjent kunstform, nye runebommer lages, og samisk naturforståelse får ny aktualitet i klimadebatten. I New Zealand undervises maorisk språk i skolen, maori-verdier brukes i miljøpolitikk, og i 2017 fikk Whanganui-elven status som juridisk person med egne rettigheter. Nordamerikanske urfolk praktiserer igjen soldans og svettehytteseremonier etter mange års forbud, og i Afrika kombinerer mange kristendom eller islam med tradisjonelle praksiser. Mange urfolk lever i dag med flere religiøse tradisjoner samtidig -- en same kan være kristen og samtidig føle dyp tilknytning til samisk åndelighet. Dette er ikke nødvendigvis en motsetning, men minner oss om at religion er levende og i stadig utvikling.

Flere land har opprettet sannhets- og forsoningskommisjoner. Norge gransket fornorskningspolitikken (2018--2023), Canada gransket residensskolesystemet (2008--2015), der det i 2021 ble funnet umarkerte graver som sjokkerte verden, og Australia gransket «Stolen Generations» (1997), noe som førte til at statsministeren ba om unnskyldning i 2008. Slike kommisjoner kan ikke endre fortiden, men de dokumenterer uretten, lar ofrene fortelle sin historie, skaper offentlig bevissthet og foreslår tiltak for forsoning -- slik at lignende urett kan forebygges."""),

("quiz","Test deg selv på land, revitalisering og forsoning:",[
 ("Hvorfor er land og religion uatskillelig for mange urfolk?",[("Fordi land bare er en økonomisk ressurs",False),("Fordi hellige steder, ritualer og forfedreånder er knyttet til bestemte landområder",True),("Fordi religion ikke betyr noe",False),("Fordi de ikke bryr seg om naturen",False)],
  "For mange urfolk er landet hellig: hellige steder, ritualer og forfedreånder er forbundet med bestemte landområder, så landkonflikter blir også religiøse konflikter."),
 ("Hva handlet Fosen-saken om?",[("En ny kirke",False),("At vindkraftutbygging krenket samenes rett til kulturutøvelse",True),("En oljerørledning i USA",False),("Forbud mot joik",False)],
  "I Fosen-saken slo Høyesterett i 2021 fast at vindkraftutbygging krenket reindriftssamenes rett til kulturutøvelse, fordi turbinene ødela viktige beiteområder."),
 ("Hva gjør sannhets- og forsoningskommisjoner?",[("De endrer fortiden",False),("De dokumenterer uretten, lar ofrene fortelle sin historie og foreslår tiltak for forsoning",True),("De forbyr urfolks religioner",False),("De straffer ofrene",False)],
  "Sannhetskommisjoner kan ikke endre fortiden, men de dokumenterer uretten, gir ofrene mulighet til å fortelle sin historie, skaper bevissthet og foreslår forsoningstiltak."),
]),

("summary","""## Oppsummering

I dag kjemper urfolk verden over for sine rettigheter. FNs erklæring om urfolks rettigheter (2007) og den juridisk bindende ILO-konvensjon 169 anerkjenner retten til selvbestemmelse, religion, land og kultur, med prinsippet om fritt, forhåndsinformert samtykke (FPIC) som sentralt -- men gjennomføringen er ofte mangelfull.

For mange urfolk er land og religion uatskillelig, noe konflikter som Fosen-saken og Standing Rock viser. Samtidig revitaliseres urfolksreligioner, og mange lever med flere religiøse tradisjoner samtidig. Sannhets- og forsoningskommisjoner i Norge, Canada og Australia dokumenterer uretten og arbeider for forsoning -- en lang prosess som ikke er over."""),
])

print(f"\nBATCH7 TOTAL: {T} quizzes, {Q} questions")
