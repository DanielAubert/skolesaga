import sys
sys.path.insert(0, "/Users/danielandreasaubert/eksamenssett/Skolesaga/.narrativ-build")
from builder import build
T=0;Q=0
def add(*a):
    global T,Q
    nq,nqs=build(*a); T+=nq; Q+=nqs

# ===== 5.1 Sekulære livssyn og ateisme =====
add("krle-9-5-1",
"En fortelling om livssyn uten guder -- om ateisme, agnostisisme, sekularisme og rasjonalisme, og om hvordan Norge ble et av verdens mest sekulariserte land.",
33,
[
("intro","""## Å finne mening uten en gud

Ikke alle mennesker er religiøse. Gjennom hele historien har det vært folk som stilte spørsmål ved guders eksistens eller avviste religiøs tro helt. I dag lever vi i et samfunn der stadig flere beskriver seg som ikke-religiøse -- Norge er faktisk et av verdens mest sekulariserte land. Men hva innebærer det egentlig å ha et sekulært livssyn?

Et **sekulært livssyn** er et livssyn som ikke bygger på tro på guder eller overnaturlige krefter. I stedet baserer det seg på fornuft, vitenskap og menneskelig erfaring. Et viktig poeng er at slike livssyn likevel kan ha sterke etiske verdier og gi mening i tilværelsen -- de gjør det bare uten å vise til noe guddommelig. I dette kapittelet skal vi bli kjent med de viktigste sekulære livssynene: ateisme, agnostisisme, sekularisme og rasjonalisme."""),

("text","""## Ateisme og agnostisisme -- tro og kunnskap

**Ateisme** (fra gresk *a-theos*, «uten gud») er standpunktet om at det ikke finnes noen gud eller guder. Det finnes to varianter: *sterk ateisme* er en aktiv overbevisning om at det ikke finnes noen gud, mens *svak ateisme* er å mangle tro på gud uten nødvendigvis å påstå aktivt at gud ikke finnes -- man har rett og slett ikke blitt overbevist. Det er viktig å forstå at ateisme ikke er en religion, men et standpunkt om ett spesifikt spørsmål: finnes det guder? En ateist kan ellers ha svært ulike verdier; noen er humanister, noen politisk aktive, andre ikke.

Ateisme er heller ikke noe nytt. Allerede i antikkens Hellas mente Demokrit at alt besto av atomer uten overnaturlige krefter, og Epikur mente at gudene ikke brydde seg om menneskene. I middelalderen var det farlig å være åpent ateist, men under opplysningstiden på 1700-tallet utfordret tenkere som David Hume argumentene for Guds eksistens. På 1800-tallet kalte Karl Marx religion «folkets opium», og Nietzsche erklærte at «Gud er død».

**Agnostisisme** (fra gresk *a-gnosis*, «uten kunnskap») er noe annet: standpunktet om at vi ikke kan vite sikkert om det finnes noen gud. En agnostiker sier: «Jeg vet ikke, og kanskje er det umulig å vite.» Forskjellen er at agnostisisme handler om *kunnskap* -- hva vi kan vite -- mens ateisme handler om *tro* -- hva vi tror. Man kan faktisk være både agnostiker og ateist samtidig."""),

("quiz","Test deg selv på ateisme og agnostisisme:",[
 ("Hva er ateisme?",[("En religion med egne ritualer",False),("Standpunktet om at det ikke finnes noen gud eller guder",True),("Troen på mange guder",False),("Et annet ord for sekularisme",False)],
  "Ateisme er standpunktet om at det ikke finnes noen gud. Det er ikke en religion, men et svar på ett spørsmål: finnes det guder?"),
 ("Hva er forskjellen på ateisme og agnostisisme?",[("De er det samme",False),("Ateisme handler om tro (hva vi tror), agnostisisme om kunnskap (hva vi kan vite)",True),("Agnostisisme er en religion",False),("Ateisme betyr at man tror på mange guder",False)],
  "Ateisme handler om tro -- hva man tror -- mens agnostisisme handler om kunnskap, altså om vi i det hele tatt kan vite om en gud finnes."),
]),

("text","""## Sekularisme og rasjonalisme

Mens ateisme og agnostisisme handler om personlig tro, handler **sekularisme** om hvordan samfunnet bør organiseres. Sekularisme er prinsippet om at staten og offentlige institusjoner bør være uavhengige av religion. Det betyr ingen statsreligion, religionsfrihet for alle, nøytrale lover basert på fornuft og menneskerettigheter heller enn religiøse tekster, og at religion er en privatsak. Et viktig poeng: sekularisme betyr *ikke* at man er mot religion -- en sekulær stat beskytter alle religioner likt, og mange religiøse mennesker støtter sekularisme nettopp fordi det beskytter deres egen trosfrihet. Frankrike har en streng form (laïcité), USA har grunnlovsfestet skille mellom kirke og stat, og Norge hadde statskirke fram til 2012, men har i dag en mer sekulær ordning.

**Rasjonalisme** er en filosofisk tradisjon som setter fornuften i sentrum for all kunnskap og etikk. Rasjonalister mener at fornuft er den viktigste kilden til kunnskap, at påstander må begrunnes -- man bør ha gode grunner og være villig til å endre mening i møte med bedre argumenter -- og at vitenskap er den beste metoden for å forstå verden. Rasjonalisme er nært knyttet til *skeptisisme*, det å stille kritiske spørsmål og kreve bevis. I praksis betyr det å ta beslutninger basert på fakta og logikk fremfor følelser, fordommer eller overtro, både i hverdagen og i store samfunnsspørsmål."""),

("quiz","Test deg selv på sekularisme og rasjonalisme:",[
 ("Hva er sekularisme?",[("At religion skal forbys",False),("Prinsippet om at staten og offentlige institusjoner bør være uavhengige av religion",True),("At alle må være ateister",False),("En type bønn",False)],
  "Sekularisme er prinsippet om at staten bør være uavhengig av religion -- ingen statsreligion, religionsfrihet for alle, og lover basert på fornuft og menneskerettigheter."),
 ("Betyr sekularisme at man er mot religion?",[("Ja, alltid",False),("Nei -- en sekulær stat beskytter alle religioner likt",True),("Ja, sekularisme forbyr tro",False),("Bare i Norge",False)],
  "Sekularisme er ikke det samme som å være mot religion. En sekulær stat beskytter alle religioner likt, og mange religiøse støtter sekularisme fordi det verner trosfriheten deres."),
 ("Hva kjennetegner rasjonalisme?",[("Blind tillit til tradisjon",False),("At fornuft, logikk og vitenskap er de beste verktøyene for kunnskap",True),("At følelser bestemmer alt",False),("At man aldri skal endre mening",False)],
  "Rasjonalisme setter fornuften i sentrum: fornuft og vitenskap er de beste verktøyene for kunnskap, og påstander må begrunnes med gode grunner."),
]),

("text","""## Kritikk -- og et sekulært Norge

Sekulære livssyn møter kritikk. Fra religiøst hold hevdes det at moralen uten Gud mangler et fast grunnlag, at livet mister mening uten noe større enn mennesket, og at vitenskapen ikke kan svare på alt -- særlig ikke om mening, kjærlighet og skjønnhet. Sekulære tenkere svarer at moral kan begrunnes i empati, fornuft og konsekvenstenkning -- vi trenger ingen gud for å vite at det er galt å skade andre -- at mening skapes av mennesker selv gjennom relasjoner, arbeid, kunst og engasjement, og at vitenskapen, selv om den ikke svarer på alt, er den beste metoden vi har for å forstå den fysiske verden.

Det finnes også interne utfordringer. *Nihilisme* er standpunktet om at ingenting har mening; noen mener ateisme fører dit, men de fleste ateister er uenige. Det kan være vanskelig å finne fellesskap uten religiøse ritualer, og i krisetider savner noen den trøsten religion kan gi. Det viktige er at sekulære livssyn er mangfoldige -- ikke alle ateister tenker likt.

Norge er et av verdens mest sekulariserte land. Rundt 30--40 % av nordmenn sier de ikke tror på Gud, Human-Etisk Forbund har over 100 000 medlemmer, og færre enn 5 % går jevnlig i gudstjeneste. Likevel feirer de fleste nordmenn jul og konfirmasjon -- tradisjonene lever videre selv om den religiøse troen avtar. Det viser at sekularisering ikke nødvendigvis betyr at alle blir ateister; mange lever i en mellomposisjon der de verken er aktivt religiøse eller aktivt ateistiske."""),

("quiz","Test deg selv på kritikk og det sekulære Norge:",[
 ("Hvordan svarer sekulære tenkere på at moral mangler grunnlag uten Gud?",[("De er enige i at moral er umulig",False),("De mener moral kan begrunnes i empati, fornuft og konsekvenstenkning",True),("De mener bare lover gjelder",False),("De mener moral ikke betyr noe",False)],
  "Sekulære tenkere svarer at moral kan begrunnes i empati, fornuft og konsekvenstenkning -- man trenger ikke en gud for å forstå at det er galt å skade andre."),
 ("Hva viser at sekularisering ikke betyr at alle blir ateister i Norge?",[("At alle går i kirken",False),("At mange feirer jul og konfirmasjon og lever i en mellomposisjon mellom tro og ikke-tro",True),("At ingen feirer noe",False),("At alle er aktivt religiøse",False)],
  "Selv om få er aktivt religiøse, feirer de fleste nordmenn jul og konfirmasjon. Mange lever i en mellomposisjon der de verken er aktivt religiøse eller aktivt ateistiske."),
]),

("summary","""## Oppsummering

Sekulære livssyn bygger ikke på tro på guder eller overnaturlige krefter. De viktigste er ateisme (det finnes ingen gud), agnostisisme (vi kan ikke vite om det finnes en gud), sekularisme (staten bør være uavhengig av religion) og rasjonalisme (fornuft og vitenskap er de beste verktøyene for å forstå verden).

Disse livssynene har dype historiske røtter og har blitt stadig mer utbredt. Norge er et av verdens mest sekulariserte land, men sekularisering betyr ikke at alle blir ateister -- mange lever i en mellomposisjon. Sekulære livssyn gir mening og etiske retningslinjer uten å vise til noe guddommelig, og bygger i stedet på fornuft, empati og menneskelig erfaring."""),
])

# ===== 5.2 Humanisme i dybden =====
add("krle-9-5-2",
"En fortelling om humanismen -- fra renessansens kunstnere via opplysningstidens filosofer til menneskerettighetene og Human-Etisk Forbunds seremonier i dagens Norge.",
33,
[
("intro","""## En idé som formet en sivilisasjon

Hver eneste vår tar rundt 10 000 norske ungdommer humanistisk konfirmasjon. De fleste tenker kanskje ikke over at de er en del av en idétradisjon som strekker seg over 700 år tilbake -- til renessansens kunstnere, opplysningstidens filosofer og kampen for menneskerettigheter.

Humanisme er mer enn bare et livssyn; det er en lang intellektuell tradisjon som har formet den vestlige sivilisasjonen. **Livssynshumanisme** er et ikke-religiøst livssyn som setter mennesket i sentrum, og bygger på menneskeverd, fornuft og vitenskap, etikk uten religion, selvbestemmelse og solidaritet. Et viktig skille: livssynshumanisme er noe annet enn «humanisme» i bred forstand -- mange religiøse er også humanister fordi de setter mennesket høyt, men livssynshumanisme er spesifikt et ikke-religiøst alternativ. La oss følge tradisjonen fra røttene til dagens Norge."""),

("text","""## Renessanse og opplysning

Humanismen som intellektuell bevegelse begynte i Italia på 1300-tallet, i **renessansen** («gjenfødelsen»). Renessansehumanistene gjenoppdaget den antikke greske og romerske kulturen og satte mennesket i sentrum på en ny måte. Der middelalderen hadde handlet om Gud og det hinsidige, ble humanistene opptatt av menneskets evner, kreativitet og verdighet i *dette* livet. De studerte *studia humanitatis* -- de «menneskelige» fagene som retorikk, historie og moralfilosofi -- vektla individualisme, og stilte spørsmål ved kirkens monopol på kunnskap. Francesco Petrarca regnes som humanismens far, Leonardo da Vinci malte «Den vitruvianske mann» som symbol på menneskets fullkommenhet, og Erasmus av Rotterdam forsvarte toleranse. Renessansehumanismen var ikke ateistisk -- de fleste var kristne -- men de åpnet døren for en ny tenkemåte der mennesket, ikke bare Gud, var viktig.

Under **opplysningstiden** (ca. 1600--1800) ble humanismen en tydeligere motkraft mot religiøs autoritet. Sentrale ideer var fornuft over tro, vitenskapelig metode, naturlige rettigheter (alle har rettigheter fra fødselen), toleranse og troen på fremskritt gjennom kunnskap. John Locke argumenterte for religiøs toleranse og naturlige rettigheter, Voltaire kjempet for ytringsfrihet («jeg er uenig i det du sier, men vil forsvare din rett til å si det»), og Kant formulerte en etikk basert på fornuft alene. Opplysningsideene fikk enorme konsekvenser: den amerikanske uavhengighetserklæringen (1776) og den franske revolusjonen (1789) bygde direkte på dem."""),

("quiz","Test deg selv på humanismens historie:",[
 ("Hva kjennetegnet renessansehumanismen?",[("At den var ateistisk",False),("At den satte mennesket i sentrum og gjenoppdaget antikken",True),("At den avviste all kunst",False),("At den var imot utdanning",False)],
  "Renessansehumanismen gjenoppdaget antikken og satte mennesket -- dets evner, kreativitet og verdighet i dette livet -- i sentrum. De fleste humanistene var likevel kristne."),
 ("Hvilke ideer var sentrale i opplysningstiden?",[("Blind lydighet mot konger",False),("Fornuft over tro, naturlige rettigheter, toleranse og fremskritt",True),("At bare kirken hadde kunnskap",False),("At vitenskap var farlig",False)],
  "Opplysningstiden vektla fornuft over tro, vitenskapelig metode, naturlige rettigheter, toleranse og troen på fremskritt -- ideer som lå bak både den amerikanske og den franske revolusjonen."),
]),

("text","""## Fra opplysning til menneskerettigheter

Humanistiske ideer ble grunnlaget for det moderne menneskerettighetsarbeidet. Etter andre verdenskrig og Holocaust vedtok FN i 1948 **Verdenserklæringen om menneskerettigheter**, som slo fast at alle mennesker er født frie og med like rettigheter. Erklæringen bygger direkte på humanistiske prinsipper: artikkel 1 sier at «alle mennesker er født frie og med samme menneskeverd og menneskerettigheter», artikkel 18 sikrer religionsfrihet, og artikkel 19 ytringsfrihet.

Utviklingen kan oppsummeres slik: renessansen ga oss ideen om menneskeverdet, opplysningstiden ga oss ideen om naturlige rettigheter, og 1900-tallet ga oss formelle menneskerettigheter beskyttet av internasjonal lov. Slik har humanistiske ideer gradvis blitt omgjort til konkrete rettigheter som beskytter mennesker over hele verden."""),

("quiz","Test deg selv på menneskerettighetene:",[
 ("Hva slår FNs verdenserklæring om menneskerettigheter (1948) fast i artikkel 1?",[("At bare noen mennesker har rettigheter",False),("At alle mennesker er født frie og med samme menneskeverd og menneskerettigheter",True),("At staten kan ta rettigheter fra hvem den vil",False),("At religion er forbudt",False)],
  "Artikkel 1 slår fast at alle mennesker er født frie og med samme menneskeverd og menneskerettigheter -- et prinsipp som bygger direkte på humanistisk tenkning."),
 ("Hvordan har humanistiske ideer utviklet seg over tid?",[("De har forsvunnet helt",False),("Fra menneskeverd (renessansen) til naturlige rettigheter (opplysningen) til formelle menneskerettigheter (1900-tallet)",True),("De startet først i 1948",False),("De er bare religiøse",False)],
  "Renessansen ga ideen om menneskeverd, opplysningstiden ideen om naturlige rettigheter, og 1900-tallet formelle menneskerettigheter beskyttet av internasjonal lov."),
]),

("text","""## Human-Etisk Forbund -- humanisme i praksis

I Norge er **Human-Etisk Forbund** (HEF) den viktigste organisasjonen for livssynshumanisme. Det ble stiftet i 1956 av Kristian Horn og har over 100 000 medlemmer. HEF vil fremme livssynshumanisme som et alternativ til religiøse livssyn, arbeide for livssynslikestilling -- at alle religioner og livssyn behandles likt av staten -- og tilby seremonier som alternativer til religiøse ritualer. Verdiene er menneskeverd og menneskerettigheter, demokrati og ytringsfrihet, fornuft og kritisk tenkning, solidaritet og livssynsfrihet.

En av HEFs viktigste funksjoner er nettopp seremoniene. *Humanistisk navnefest* markerer at et barn er født og ønskes velkommen, uten religiøst innhold, men likevel høytidelig. *Humanistisk konfirmasjon* er det mest kjente tilbudet -- rundt 10 000 ungdommer tar den hvert år etter et forberedelseskurs om etikk, menneskerettigheter og filosofi. Det betyr at omtrent én av fire 15-åringer i Norge velger humanistisk konfirmasjon. I tillegg finnes *humanistisk vigsel* (juridisk gyldig bryllup uten religiøst innhold) og *humanistisk gravferd* (en verdig avskjed med minneord, musikk og dikt).

Humanismen møter også kritikk. Fra religiøst hold hevdes det at den mangler et overskridende grunnlag for moral, at den er for optimistisk om menneskets natur, og at den ikke gir trøst ved døden på samme måte som religion. Fra postmoderne hold kritiseres den for å være for opptatt av vestlige verdier. Humanister svarer at menneskerettigheter er utviklet i samarbeid med mange kulturer, at humanismen ikke er naiv, men anerkjenner menneskets svakheter, og at den hele tiden utvikler seg i møte med ny kritikk."""),

("quiz","Test deg selv på Human-Etisk Forbund:",[
 ("Hva er Human-Etisk Forbund?",[("En politisk parti",False),("Norges største organisasjon for livssynshumanisme, med over 100 000 medlemmer",True),("Et kirkesamfunn",False),("En vitenskapsakademi",False)],
  "Human-Etisk Forbund, stiftet i 1956, er Norges største organisasjon for livssynshumanisme med over 100 000 medlemmer, og tilbyr humanistiske seremonier."),
 ("Hvor populær er humanistisk konfirmasjon i Norge?",[("Nesten ingen velger den",False),("Omtrent én av fire 15-åringer velger den",True),("Den er forbudt",False),("Alle 15-åringer må ta den",False)],
  "Rundt 10 000 ungdommer tar humanistisk konfirmasjon hvert år -- omtrent én av fire norske 15-åringer."),
 ("Hva betyr livssynslikestilling, som HEF arbeider for?",[("At alle må bli humanister",False),("At alle religioner og livssyn behandles likt av staten",True),("At religion forbys",False),("At bare humanisme får statsstøtte",False)],
  "Livssynslikestilling betyr at staten behandler alle religioner og livssyn likt -- et viktig mål for Human-Etisk Forbund."),
]),

("summary","""## Oppsummering

Humanismen har en lang historie: fra renessansens gjenoppdagelse av antikken, via opplysningstidens vekt på fornuft og rettigheter, til dagens livssynshumanisme. Humanistiske ideer ligger til grunn for menneskerettighetene og det moderne demokratiet.

I Norge er Human-Etisk Forbund den viktigste organisasjonen for livssynshumanisme, med over 100 000 medlemmer, og tilbyr seremonier som navnefest, konfirmasjon, vigsel og gravferd. Humanistisk konfirmasjon er svært populær. Humanismen er et dynamisk livssyn som fortsetter å utvikle seg i møte med ny kritikk, og representerer en viktig stemme i det norske livssynsmangfoldet."""),
])

# ===== 5.3 Religion og vitenskap =====
add("krle-9-5-3",
"En fortelling om det store møtet mellom tro og vitenskap -- om skapelse og evolusjon, om Big Bang og presten som foreslo den, og om fire modeller for hvordan de to kan forholde seg til hverandre.",
33,
[
("intro","""## Fiender eller venner?

Er religion og vitenskap motsetninger som aldri kan forenes? Eller kan de utfylle hverandre og gi oss ulike typer innsikt om virkeligheten? Dette er et av de mest fascinerende og omdiskuterte spørsmålene i vår tid -- og svaret har skiftet gjennom historien mellom konflikt, samarbeid og gjensidig ignorering.

Vitenskap og religion er to ulike måter å forstå verden på. Vitenskapen søker kunnskap gjennom observasjon, eksperimenter og hypoteser som kan testes -- den svarer på «hvordan»-spørsmål. Religion søker kunnskap gjennom hellige skrifter, tradisjon og religiøs erfaring -- den svarer ofte på «hvorfor»-spørsmål om mening og formål. I dette kapittelet skal vi se på de viktigste berøringspunktene: skapelse og evolusjon, universets opprinnelse, og ulike modeller for forholdet mellom de to."""),

("text","""## Skapelse og evolusjon

De fleste religioner har fortellinger om hvordan verden ble til. I Bibelen skaper Gud verden på seks dager og hviler den sjuende. I Koranen skaper Allah himlene og jorden på seks perioder, og mennesket av leire. Hinduismen har flere fortellinger, blant annet om Brahma som skaper fra et kosmisk egg, og i norrøn tradisjon oppstår verden i Ginnungagap der is og ild møtes. Disse fortellingene gir mening til menneskets plass i verden -- men de forteller ulike historier, og ingen av dem ligner det vitenskapen forteller.

I 1859 publiserte **Charles Darwin** *Om artenes opprinnelse*, som revolusjonerte forståelsen av livet. Evolusjonsteorien forklarer at alle organismer har utviklet seg fra felles forfedre over milliarder av år, drevet av *naturlig utvalg* -- organismer med egenskaper som passer best til miljøet, overlever og formerer seg. Mennesket er ikke skapt separat, men har utviklet seg fra tidlige primater, og prosessen er gradvis og uten en «plan». Teorien støttes av fossiler, DNA, sammenlignende anatomi og direkte observasjon, og er akseptert av det overveldende flertallet av forskere.

Ikke alle aksepterer den. *Ung-jord-kreasjonisme* leser Bibelen bokstavelig -- jorden er 6000--10 000 år gammel -- og avviser evolusjon. *Gammel-jord-kreasjonisme* aksepterer at jorden er gammel, men mener Gud styrte prosessen. *Intelligent Design* hevder at visse strukturer er for komplekse til å ha oppstått ved evolusjon og krever en «designer». Den vitenskapelige konsensus er at kreasjonisme og ID ikke er vitenskap, men religiøse standpunkter -- evolusjonsteorien er støttet av enorme mengder bevis."""),

("quiz","Test deg selv på skapelse og evolusjon:",[
 ("Hva er drivkraften i evolusjonen ifølge Darwin?",[("En guddommelig plan",False),("Naturlig utvalg -- de best tilpassede overlever og formerer seg",True),("Tilfeldig magi",False),("Astrologi",False)],
  "Naturlig utvalg er drivkraften: organismer med egenskaper som passer best til miljøet, overlever og får flest avkom. Prosessen er gradvis og uten en plan."),
 ("Hva er den vitenskapelige konsensus om kreasjonisme og Intelligent Design?",[("De er bedre enn evolusjonsteorien",False),("De regnes som religiøse standpunkter, ikke vitenskap",True),("De er bevist riktige",False),("Alle forskere støtter dem",False)],
  "Det overveldende flertallet av forskere avviser kreasjonisme og ID som vitenskap og regner dem som religiøse standpunkter. Evolusjonsteorien støttes av bevis fra mange fagfelt."),
]),

("text","""## Big Bang og fire modeller

Universets opprinnelse er et annet berøringspunkt. **Big Bang-teorien** sier at universet oppsto for ca. 13,8 milliarder år siden i en enorm ekspansjon fra et uendelig lite, tett punkt, og har utvidet seg siden. Bevisene er blant annet kosmisk bakgrunnsstråling og at fjerne galakser fjerner seg fra oss. Teorien sier ikke hva som var «før» Big Bang, eller hvorfor det skjedde. Interessant nok var det den katolske presten **Georges Lemaître** som først foreslo teorien i 1927, og pave Frans har sagt at Big Bang og evolusjon ikke er i konflikt med troen på Gud. Noen ser Big Bang som forenlig med en skaper, andre holder fast ved bokstavelige skapelsesfortellinger -- og spørsmål som «hvorfor eksisterer universet i det hele tatt?» er kanskje mer filosofiske enn vitenskapelige.

Teologen og fysikeren **Ian Barbour** beskrev fire modeller for forholdet mellom religion og vitenskap. I *konfliktmodellen* står de i grunnleggende motsetning -- bare én kan ha rett -- en posisjon både ateister som Richard Dawkins og religiøse fundamentalister kan dele. I *uavhengighetsmodellen* handler de om helt forskjellige ting: vitenskapen forklarer «hvordan», religionen «hvorfor», og de kan ikke komme i konflikt (Stephen Jay Gould kalte det NOMA). I *dialogmodellen* kan de lære av hverandre og stille de samme spørsmålene fra ulike vinkler. I *integrasjonsmodellen* smeltes de sammen til én helhetlig forståelse. Ingen modell er «den riktige» -- de representerer ulike måter å tenke om forholdet på.

Det er verdt å merke seg at mange store forskere har vært religiøse: Isaac Newton, grunnleggeren av moderne fysikk, var dypt religiøs; Georges Lemaître var katolsk prest; Francis Collins, som ledet det menneskelige genprosjektet, er kristen; og Abdus Salam var en muslimsk nobelprisvinner i fysikk. For dem var det ingen motsetning mellom tro og vitenskap -- de mente vitenskapen avdekket skaperverkets storhet."""),

("quiz","Test deg selv på Big Bang og modellene:",[
 ("Hvem foreslo først Big Bang-teorien?",[("Charles Darwin",False),("Den katolske presten Georges Lemaître",True),("Richard Dawkins",False),("Isaac Newton",False)],
  "Big Bang-teorien ble først foreslått av den katolske presten Georges Lemaître i 1927 -- et eksempel på at tro og vitenskap ikke alltid er i konflikt."),
 ("Hva sier uavhengighetsmodellen (NOMA) om religion og vitenskap?",[("At de alltid er i konflikt",False),("At de handler om forskjellige ting -- vitenskapen om «hvordan», religionen om «hvorfor»",True),("At de er identiske",False),("At religion er overlegen vitenskap",False)],
  "Uavhengighetsmodellen sier at vitenskap og religion handler om forskjellige ting -- «hvordan» versus «hvorfor» -- og derfor ikke kan komme i konflikt."),
 ("Hva viser at mange store forskere har vært religiøse?",[("At vitenskap er umulig",False),("At noen ikke ser noen motsetning mellom tro og vitenskap, som Newton og Lemaître",True),("At religion er bevist",False),("At alle forskere er ateister",False)],
  "Forskere som Newton, Lemaître, Collins og Salam var religiøse og så ingen motsetning mellom tro og vitenskap -- de mente vitenskapen avdekket skaperverkets storhet."),
]),

("summary","""## Oppsummering

Forholdet mellom religion og vitenskap er komplekst. Skapelsesfortellinger fra ulike religioner gir mening og formål, mens vitenskapelige teorier som evolusjon og Big Bang gir testbare forklaringer på hvordan verden og livet har utviklet seg. Evolusjonsteorien er svært godt dokumentert, og kreasjonisme regnes ikke som vitenskap.

Ian Barbour beskrev fire modeller for forholdet: konflikt, uavhengighet, dialog og integrasjon. Hvilken man foretrekker, avhenger ofte av eget livssyn. Mange store forskere har vært religiøse uten å se noen motsetning. Det avgjørende er at vitenskapelig kunnskap respekteres, og at religiøs tro ikke brukes til å undertrykke forskningsbasert kunnskap."""),
])

# ===== 5.4 Nyreligiøsitet og alternativ spiritualitet =====
add("krle-9-5-4",
"En fortelling om alternativ spiritualitet -- om New Age, wicca og nypaganisme, om å plukke og mikse mellom tradisjoner, og om hvorfor så mange søker det åndelige utenfor de tradisjonelle religionene.",
30,
[
("intro","""## Krystaller, tarot og en ny tidsalder

Ved siden av de store verdensreligionene og de sekulære livssynene finnes en hel verden av alternative spirituelle bevegelser. Mange mennesker finner ikke det de søker i tradisjonell religion, men er heller ikke helt uten interesse for det åndelige. I stedet plukker og mikser de fra ulike tradisjoner -- en praksis som kalles **eklektisisme**.

Denne formen for spiritualitet har vokst enormt de siste tiårene. Yoga, meditasjon, krystaller, tarotkort, astrologi og sjamanisme har blitt populært, også blant unge. Men hva ligger bak disse fenomenene, og hva er forskjellen på nyreligiøsitet og tradisjonell religion? **Nyreligiøsitet** er en samlebetegnelse for nye religiøse og spirituelle bevegelser som har vokst fram særlig fra 1960-tallet -- kjennetegnet av at man velger selv hva man tror på, ser kropp, sjel og ånd som en helhet (holistisk), vektlegger personlig erfaring fremfor dogmer, er fritt organisert, og plukker fritt fra ulike tradisjoner."""),

("text","""## New Age, wicca og nypaganisme

**New Age** («ny tidsalder») er en bred spirituell bevegelse som oppsto i vestlige land fra 1960-tallet. Navnet henspiller på troen på at menneskeheten er på vei inn i en ny tidsalder med høyere bevissthet. Sentrale ideer er at alt henger sammen -- mennesker, natur og kosmos er forbundet i en universell energi -- at målet er personlig vekst og høyere bevissthet, og at alternative behandlingsformer som reiki og krystallhealing kan virke. Mange tror også på reinkarnasjon og astrologi. I praksis ser vi det i yogakurs, helsekostbutikker med krystaller, mind-body-spirit-festivaler og astrologi-apper. New Age kritiseres for å mangle vitenskapelig grunnlag, for å kunne utnytte sårbare mennesker, og for kulturell appropriasjon -- å ta elementer fra urfolks kulturer uten respekt.

**Nypaganisme** er en samlebetegnelse for moderne religiøse bevegelser som henter inspirasjon fra førkristen naturreligion. Den mest kjente formen er **wicca**, grunnlagt i England på 1950-tallet av Gerald Gardner. Wicca er en moderne form for heksekunst basert på naturens sykluser, med både en gudinne og en gud (det feminine og maskuline prinsippet). Den feirer åtte sabbater knyttet til årstidene, og den wiccanske etikken lyder: «Gjør hva du vil, så lenge det ikke skader noen.» Andre nypaganistiske retninger er åsatru (norrøn nypaganisme, med tilbedelse av Odin, Thor og Frøya -- trossamfunnet Bifrost i Norge) og druidisme. Felles for dem er at naturen er hellig, at det guddommelige finnes i naturen, at årstidssyklusene feires, og at både det feminine og maskuline guddommelige verdsettes."""),

("quiz","Test deg selv på New Age og nypaganisme:",[
 ("Hva er en sentral idé i New Age?",[("At bare én religion er sann",False),("At alt henger sammen i en universell energi, og at målet er personlig vekst",True),("At naturen ikke betyr noe",False),("At man må følge strenge dogmer",False)],
  "New Age vektlegger at alt i universet henger sammen i en universell energi, og at målet er personlig vekst og høyere bevissthet."),
 ("Hva er wicca?",[("En gren av kristendommen",False),("En moderne naturreligion (heksekunst) med en gudinne og en gud, basert på naturens sykluser",True),("Et sekulært livssyn",False),("En vitenskapelig metode",False)],
  "Wicca er en moderne form for heksekunst grunnlagt på 1950-tallet, med en gudinne og en gud, basert på naturens sykluser og etikken «gjør hva du vil, så lenge det ikke skader noen»."),
]),

("text","""## Eklektisisme -- å plukke og mikse

**Eklektisisme** betyr å velge det beste fra ulike tradisjoner og sette det sammen til sitt eget livssyn -- noe som er svært vanlig i nyreligiøsiteten. Det kan være en person som praktiserer buddhistisk meditasjon, bruker tarotkort, tror på astrologi og samtidig feirer jul. Eller en som går på yoga, besøker en sjaman og leser om keltisk spiritualitet. Hvorfor er dette så populært? Det gir *frihet* -- man slipper å akseptere hele pakken fra én religion; det er *personlig* -- man skreddersyr et livssyn til egne behov; det er *tilgjengelig* gjennom internett og sosiale medier; og det er *mindre dogmatisk* -- det finnes ingen autoritet som bestemmer hva som er «riktig».

Men eklektisismen kritiseres også. Den kan bli *overfladisk* -- når man plukker enkeltelementer fra dype tradisjoner, mister man lett den dypere meningen. Den kan innebære *kulturell appropriasjon* -- å bruke hellige symboler fra urfolkskulturer uten å forstå konteksten kan være respektløst. Den *mangler fellesskap* -- uten fast tilhørighet mister man fellesskapet tradisjonell religion gir. Og den kan føre til *konsumerisme*, der spiritualitet blir en vare man kjøper (krystaller, kurs, bøker) i stedet for noe man praktiserer.

I Norge er nyreligiøsiteten synlig på mange arenaer: alternativmesser som samler tusenvis, populære yogastudioer, astrologi blant unge via sosiale medier, trossamfunnet Bifrost med åsatru-seremonier, og mange som bruker healing og alternativ medisin. Ifølge undersøkelser tror omkring 20 % av nordmenn på reinkarnasjon, og mange flere bruker elementer fra alternativ spiritualitet i hverdagen."""),

("quiz","Test deg selv på eklektisisme:",[
 ("Hva betyr eklektisisme i nyreligiøsiteten?",[("Å følge én religion strengt",False),("Å plukke og kombinere elementer fra ulike tradisjoner til sitt eget livssyn",True),("Å avvise alt åndelig",False),("Å bare tro på vitenskap",False)],
  "Eklektisisme betyr å velge fra ulike tradisjoner og sette sammen sitt eget livssyn -- for eksempel buddhistisk meditasjon, tarot, astrologi og julefeiring samtidig."),
 ("Hva er en kritikk av eklektisk spiritualitet?",[("At den er for streng",False),("At den kan bli overfladisk og innebære kulturell appropriasjon",True),("At den krever for mye dogmer",False),("At den er forbudt",False)],
  "Eklektisisme kritiseres for å kunne bli overfladisk, for kulturell appropriasjon, for å mangle fellesskap, og for å gjøre spiritualitet til en vare man kjøper."),
]),

("summary","""## Oppsummering

Nyreligiøsitet er en bred samlebetegnelse for nye religiøse og spirituelle bevegelser som har vokst fram særlig fra 1960-tallet. New Age, wicca, nypaganisme og eklektisk spiritualitet er alle eksempler. Kjennetegnene er individualisme, eklektisisme, holistisk tenkning og vekt på personlig erfaring.

I Norge er nyreligiøsiteten synlig gjennom yoga, meditasjon, alternativmesser, astrologi og åsatru. Den møter kritikk for å mangle vitenskapelig grunnlag, for kulturell appropriasjon og for å være overfladisk -- men viser også at mange søker mening og spiritualitet utenfor de tradisjonelle religionenes rammer."""),
])

# ===== 5.5 Religiøst mangfold utenfor organiserte samfunn =====
add("krle-9-5-5",
"En fortelling om de mange som tror på «noe» uten å tilhøre et trossamfunn -- om «spiritual but not religious», om privatisering av religion, og om religionens fremtid.",
30,
[
("intro","""## «Jeg er ikke religiøs, men jeg tror på noe»

Når vi snakker om religion, tenker vi ofte på kirker, moskeer, templer og synagoger -- organiserte trossamfunn. Men i dag lever mange mennesker med en form for tro eller spiritualitet som ikke passer inn i noen boks. «Jeg er ikke religiøs, men jeg tror på noe», sier mange unge nordmenn. De kaller seg gjerne «spirituelle, men ikke religiøse».

Dette er en av de sterkeste trendene i moderne vestlig religionsutvikling. Stadig flere forlater organisert religion, men beholder en personlig tro eller spirituell praksis. **«Spiritual but not religious»** (SBNR) beskriver mennesker som har en form for tro på noe større, praktiserer aktiviteter som meditasjon eller bønn uten å tilhøre en bestemt religion, verdsetter personlig erfaring fremfor dogmer, og ikke tilhører noe organisert trossamfunn. I dette kapittelet skal vi utforske fenomenet -- og hva det sier om religionens fremtid."""),

("text","""## Privatisering og «tro uten tilhørighet»

**Privatisering av religion** betyr at religion i økende grad blir en privatsak -- noe du praktiserer hjemme eller i ditt indre, ikke i offentlige institusjoner. Mange nordmenn sier de «tror på sin egen måte» uten å gå i kirken, religiøs tro deles sjelden i offentlige samtaler, og religiøs identitet er noe man velger, ikke noe man arver automatisk. Årsakene er flere: individualisme (retten til å bestemme over eget liv, også troen), sekularisering (religionens offentlige innflytelse minker), pluralisme (når mange religioner finnes side om side, blir det vanskeligere for én å dominere), og kritikk av institusjoner (mange har mistet tillit, for eksempel etter overgrepssaker). Sosiologen Thomas Luckmann beskrev dette allerede på 1960-tallet: religion forsvinner ikke, men endrer form -- fra institusjoner til individer.

Den britiske sosiologen **Grace Davie** fanget trenden med begrepet **«believing without belonging»** -- å tro uten å tilhøre. I Norge ser vi dette tydelig: rundt 50--60 % sier de tror på «noe» (en kraft, en ånd, noe større), men bare omkring 5 % går jevnlig i gudstjeneste. Mange er medlemmer i Den norske kirke, men bruker kirken bare ved dåp, konfirmasjon, bryllup og begravelse. Det folk tror på, er ofte en «udogmatisk tro»: en høyere kraft eller energi (ikke nødvendigvis en personlig Gud), at livet har en mening, at det finnes noe etter døden, eller en følelse av forbindelse med noe større i naturen. Denne troen er vag og personlig -- den lar seg vanskelig fange i kategorier som «kristen» eller «ateist»."""),

("quiz","Test deg selv på privatisering og tro uten tilhørighet:",[
 ("Hva betyr «privatisering av religion»?",[("At religion blir forbudt",False),("At religion i økende grad blir en privatsak fremfor noe man praktiserer i offentlige institusjoner",True),("At staten overtar religionen",False),("At alle blir medlemmer av kirken",False)],
  "Privatisering av religion betyr at tro blir en individuell, privat sak -- noe man praktiserer hjemme eller i sitt indre, ikke i offentlige institusjoner."),
 ("Hva beskriver Grace Davies begrep «believing without belonging»?",[("At folk tror og går aktivt i kirken",False),("At mange tror på noe uten å delta i organisert religion",True),("At ingen tror på noe",False),("At alle tilhører et trossamfunn",False)],
  "«Believing without belonging» -- å tro uten å tilhøre -- beskriver at mange har en form for tro, men ikke deltar i organisert religion. I Norge tror 50--60 % på «noe», men bare ca. 5 % går jevnlig i gudstjeneste."),
]),

("text","""## Unge, «nones» og religionens fremtid

Unge mennesker i Norge har et spesielt forhold til religion. Mange er «religionsnøytrale» -- religion er ikke viktig for dem, men de er heller ikke aktivt imot det. De bryr seg ofte mer om verdier som rettferdighet, miljø og likestilling enn om dogmer, og mange har lite kunnskap om religion. Samtidig endrer sosiale medier bildet: apper og kontoer for astrologi og tarot er svært populære, og fenomener som «Witch-Tok» og «Astro-TikTok» har millioner av følgere -- noen forskere kaller dette en ny «digital spiritualitet». For andre unge er religion en viktig del av den kulturelle identiteten, særlig for unge med innvandrerbakgrunn. Og i en tid der mange unge sliter med stress og meningsløshet, finner noen trøst i meditasjon og mindfulness.

Forskere bruker flere begreper om denne gruppen. *«Nones»* er de som svarer «ingen religion» på spørsmål om tilhørighet -- en voksende gruppe i hele den vestlige verden. *«Apatheister»* er likegyldige til religiøse spørsmål; de bryr seg ikke om Gud finnes. Og *«fuzzy faithful»* har en vag, utydelig tro uten klare dogmer.

Hvordan vil dette utvikle seg? Forskere peker på tre scenarier. Ett er *fortsatt sekularisering* -- religion mister stadig mer innflytelse. Et annet er *religiøs revitalisering* -- historien viser at sekularisering ikke er uunngåelig, og globalt vokser flere religiøse bevegelser. Det tredje er *transformasjon* -- religion forsvinner ikke, men endrer form radikalt, der grensene mellom religiøs og ikke-religiøs viskes ut, folk «tror på sin egen måte» og bruker digital teknologi til nye former for fellesskap. De fleste forskere mener at transformasjon er mest sannsynlig: religion forsvinner ikke, men forandrer seg. Det som er sikkert, er at spørsmål om mening, verdier og tilhørighet vil forbli viktige -- uansett om folk kaller seg religiøse eller ikke."""),

("quiz","Test deg selv på unge og religionens fremtid:",[
 ("Hva betyr «nones» i religionsforskningen?",[("De som er prester",False),("De som svarer «ingen religion» på spørsmål om tilhørighet",True),("De som går mye i kirken",False),("De som tror på mange guder",False)],
  "«Nones» er de som svarer «ingen religion» når de spørres om tilhørighet -- en raskt voksende gruppe i hele den vestlige verden."),
 ("Hvilket scenario for religionens fremtid mener de fleste forskere er mest sannsynlig?",[("At religion forsvinner helt",False),("Transformasjon -- religion forsvinner ikke, men endrer form radikalt",True),("At alle blir like religiøse igjen",False),("At religion blir forbudt",False)],
  "De fleste forskere mener transformasjon er mest sannsynlig: religion forsvinner ikke, men endrer form, og grensene mellom religiøs og ikke-religiøs viskes ut."),
 ("Hvordan forholder mange unge i Norge seg til religion?",[("De er svært dogmatiske",False),("Mange er «religionsnøytrale» og bryr seg mer om verdier enn dogmer",True),("Alle går aktivt i kirken",False),("Ingen bryr seg om mening",False)],
  "Mange unge er «religionsnøytrale» -- religion er ikke viktig, men de er ikke imot det heller. De bryr seg ofte mer om verdier som rettferdighet og miljø enn om dogmer."),
]),

("summary","""## Oppsummering

I dag lever mange mennesker med en form for tro eller spiritualitet utenfor organiserte trossamfunn. «Spiritual but not religious» beskriver mennesker som har en personlig tro uten å tilhøre noe bestemt trossamfunn. Privatisering av religion betyr at tro blir en individuell sak, og Grace Davies begrep «believing without belonging» fanger opp at mange tror på noe uten å delta i organisert religion. «Nones» er en raskt voksende gruppe.

Blant unge handler religion ofte mer om identitet, mening og verdier enn om dogmer, og sosiale medier har skapt nye arenaer for spiritualitet. Forskere mener at religion ikke forsvinner, men transformeres til nye, mer individuelle former -- mens spørsmål om mening og tilhørighet forblir viktige for mennesker."""),
])

print(f"\nBATCH5 TOTAL: {T} quizzes, {Q} questions")
