import sys
sys.path.insert(0, "/Users/danielandreasaubert/eksamenssett/Skolesaga/.narrativ-build")
from builder import build

T = 0; Q = 0
def add(*a):
    global T, Q
    nq, nqs = build(*a)
    T += nq; Q += nqs

# ============ 1.1 Reformasjonen og dens konsekvenser ============
add("krle-9-1-1",
"En fortelling om hvordan en tysk munks protest i 1517 splittet kristenheten, utløste religionskriger og formet det moderne Europa -- helt fram til kirkebenkene i Norge.",
38,
[
("intro", """## En oppslagstavle som forandret verden

Tenk deg at du går forbi en kirkedør og ser et ark spikret opp. Ingen aviser, ingen telefoner, ingen sosiale medier -- bare et stykke papir med 95 påstander skrevet på latin. Du aner ikke at det du går forbi, om noen tiår vil ha kastet hele Europa ut i krig og delt kristendommen i to for alltid.

Det var omtrent det som skjedde i Wittenberg den 31. oktober 1517. En tysk munk ved navn Martin Luther offentliggjorde sine **95 teser** mot kirkens salg av tilgivelse. Han ville egentlig bare ha en faglig debatt. Men protesten ble starten på **reformasjonen** -- en religiøs, politisk og kulturell omveltning som splittet den vestlige kristenheten i katolikker og protestanter.

Ordet kommer fra det latinske *reformare*, å forme på nytt. Det begynte som et forsøk på å reformere den katolske kirken innenfra. Det endte med helt nye kirkesamfunn. La oss finne ut hvordan."""),

("text", """## Hvorfor reagerte Luther?

For å skjønne hva Luther reagerte på, må vi tilbake til Europa rundt år 1500. Da fantes det bare én kirke i Vest-Europa -- den katolske -- og den hadde enorm makt. Paven i Roma var en av de mektigste menneskene som fantes. Kirken eide store landområder, krevde inn *tiende* (en skatt) fra folk, og hadde innflytelse over både konger og fyrster.

Mange mente kirken hadde blitt for opptatt av rikdom og makt, og for lite opptatt av Jesu lære. Det mest betente var **avlatshandelen**. Ifølge katolsk lære kunne synder tilgis gjennom skriftemål, men straffen for synden gjensto -- enten i livet eller i skjærsilden etter døden. Så begynte kirken å selge *avlatsbrev* som skulle korte ned tiden i skjærsilden. I praksis virket det som om man kunne kjøpe seg tilgivelse for penger. Munken Johann Tetzel solgte avlat med slagordet: «Når pengene i kisten klinger, sjelen ut av skjærsilden springer.» Pengene gikk til å bygge den nye Peterskirken i Roma.

Luther var ikke den første som protesterte. Allerede på 1300-tallet hadde John Wycliffe i England og Jan Hus i Böhmen kritisert kirken -- Hus ble brent på bålet som kjetter i 1415. Men noe var nytt: rundt 1440 hadde Gutenberg funnet opp boktrykkerkunsten. Nå kunne nye ideer spres raskere enn noen gang."""),

("text", """## Mannen og de fire prinsippene

Martin Luther (1483--1546) var munk, prest og professor i teologi i Wittenberg. Han var dypt religiøs og plaget av ett spørsmål: hvordan kan et syndig menneske stå rett for Gud? Da han studerte Bibelen, særlig Paulus' brev til romerne, gjorde han det han kalte sin «reformatoriske oppdagelse»: mennesket frelses ved tro alene, som en gave fra Gud -- ikke gjennom gode gjerninger eller kjøpt avlat.

Luthers lære kan oppsummeres i fire korte prinsipper. *Sola scriptura* -- Skriften alene: Bibelen er den eneste autoriteten i trosspørsmål, ikke paven eller tradisjonen. *Sola fide* -- troen alene: mennesket frelses ved tro, ikke ved gode gjerninger. *Sola gratia* -- nåden alene: frelsen er en gave fra Gud. *Solus Christus* -- Kristus alene: Jesus er den eneste mellommannen mellom Gud og mennesker, ikke helgener eller paven.

I 1521 ble Luther innkalt til **riksdagen i Worms** og bedt om å trekke tilbake alt han hadde skrevet. Han nektet, og skal ha sagt: «Her står jeg. Jeg kan ikke annet. Gud hjelpe meg.» Han ble erklært fredløs, men en mektig venn -- fyrst Fredrik den vise av Sachsen -- skjulte ham og reddet livet hans."""),

("quiz", "Test deg selv på reformasjonens start:", [
 ("Hva var avlatshandel?", [("Salg av brev som skulle korte ned tiden i skjærsilden", True), ("Salg av bibler til vanlige folk", False), ("Handel med relikvier fra helgener", False), ("Innkreving av tiende til kongen", False)],
  "Avlat var brev som ifølge kirken reduserte straffen for synder i skjærsilden. At de ble solgt for penger, var nettopp det Luther reagerte mot."),
 ("Hva betyr Luthers prinsipp *sola scriptura*?", [("Frelse ved gode gjerninger", False), ("Bibelen alene er autoritet i trosspørsmål", True), ("Paven er kirkens øverste leder", False), ("Helgener kan be for oss", False)],
  "*Sola scriptura* betyr «Skriften alene»: Bibelen, ikke paven eller tradisjonen, er den eneste autoriteten i trosspørsmål."),
 ("Hva gjorde boktrykkerkunsten viktig for reformasjonen?", [("Den gjorde avlatsbrev billigere", False), ("Den lot kirken sensurere Luther", False), ("Den lot Luthers ideer spres raskt over hele Europa", True), ("Den ble funnet opp av Luther selv", False)],
  "Gutenbergs boktrykkerkunst (ca. 1440) gjorde at Luthers teser og skrifter kunne trykkes og spres raskt -- tidligere kritikere nådde langt færre."),
]),

("text", """## Reformasjonen sprer seg -- i mange former

Luthers ideer spredte seg som ild i tørt gress, men de fikk ulik form i ulike land. **Den lutherske reformasjonen** ble dominerende i Nord-Tyskland og Skandinavia, inkludert Danmark-Norge. Luther mente Bibelen skulle oversettes til folkespråkene, og at gudstjenesten skulle holdes på et språk folk forsto -- ikke latin.

I Sveits tok reformasjonen en annen retning. **Den reformerte retningen**, ledet av Huldrych Zwingli i Zürich og Jean Calvin i Genève, ble strengere, med vekt på Guds suverenitet og predestinasjon -- tanken om at Gud på forhånd har bestemt menneskers skjebne. Den spredte seg til Frankrike (hugenottene), Nederland og Skottland. I England brøt kong Henrik VIII med paven i 1534, delvis fordi paven nektet ham skilsmisse. Den **anglikanske kirken** beholdt mye av den katolske formen, men gjorde kongen til kirkens overhode. Og helt ute på kanten fantes **den radikale reformasjonen** -- grupper som anabaptistene, som avviste barnedåp og krevde fullt skille mellom kirke og stat. De ble forfulgt av alle.

Den katolske kirken satt ikke stille. Gjennom **motreformasjonen** -- særlig konsilet i Trient (1545--1563) -- reformerte den seg selv: den slo ned på misbruk, tydeliggjorde læren, forbedret presteutdanningen og opprettet nye ordener som jesuitene. Motreformasjonen vant tilbake deler av Europa, blant annet Sør-Tyskland og Polen."""),

("quiz", "Test deg selv på hvordan reformasjonen spredte seg:", [
 ("Hvilken retning ble dominerende i Skandinavia?", [("Den reformerte (calvinistiske)", False), ("Den lutherske", True), ("Den anglikanske", False), ("Den radikale (anabaptistene)", False)],
  "Den lutherske reformasjonen ble dominerende i Nord-Tyskland og hele Skandinavia, inkludert Danmark-Norge."),
 ("Hvorfor brøt kong Henrik VIII av England med paven?", [("Han ble overbevist av Luthers teser", False), ("Paven nektet ham skilsmisse", True), ("Han ville innføre voksendåp", False), ("Han ville oversette Bibelen", False)],
  "Bruddet var delvis politisk: paven ville ikke gi Henrik VIII skilsmisse. Den anglikanske kirken gjorde kongen til kirkens overhode."),
 ("Hva var motreformasjonen?", [("En ny protestantisk bevegelse", False), ("Anabaptistenes opprør", False), ("Den katolske kirkens svar og egen reform", True), ("En allianse mellom Luther og paven", False)],
  "Motreformasjonen var den katolske kirkens svar: gjennom konsilet i Trient reformerte den seg selv og vant tilbake deler av Europa."),
]),

("text", """## Konsekvenser -- og reformasjonen i Norge

Reformasjonen forandret Europa fullstendig. **Religiøst** ble verdensdelen delt i katolske og protestantiske områder, og middelalderens religiøse enhet var brutt for godt. **Politisk** ble pavens makt svekket og nasjonalstatene styrket -- fyrster som ble protestantiske, kunne ta kirkens eiendommer og øke sin egen makt. Splittelsen førte også til blodige **religionskriger**: de franske religionskrigene med Bartolomeusnattens massakre i 1572, og den grufulle trettiårskrigen (1618--1648), som herjet Sentral-Europa. Freden i Westfalen i 1648 slo fast at hver fyrste bestemte religionen i sitt eget område. På den lysere siden økte **lesekyndigheten**: Luther mente alle skulle kunne lese Bibelen selv, og protestantiske land bygde skoler.

I Norge kom reformasjonen ikke som et folkelig opprør, men ovenfra. I 1536--1537 innførte den dansk-norske kongen Christian III lutherdommen som et politisk vedtak. Den katolske erkebiskopen Olav Engelbrektsson måtte flykte, klostrene ble lagt ned og eiendommene deres ble overført til kongen. Den lutherske kirken ble statskirke, helgendyrking og pilegrimsreiser ble avskaffet, og leseopplæring ble viktigere. Men det tok lang tid før reformasjonen slo rot blant folk -- i mange bygder levde katolske skikker videre i generasjoner.

Splittelsen mellom katolsk og protestantisk kristendom ble varig. Katolikker holdt fast ved Bibelen *og* tradisjonen *og* paven, syv sakramenter, sølibat for prester og ærefrykt for helgener. Lutheranerne holdt seg til Bibelen alene, to sakramenter (dåp og nattverd), gifte prester av begge kjønn og avviste helgener som mellommenn. I dag er forskjellene mindre skarpe: etter Det andre vatikankonsil (1962--1965) holder katolikker gudstjeneste på folkespråket, og katolikker og protestanter samarbeider stadig mer gjennom det vi kaller *økumenikk*."""),

("quiz", "Test deg selv på konsekvensene:", [
 ("Hvordan ble reformasjonen innført i Norge?", [("Som et folkelig opprør nedenfra", False), ("Ovenfra, ved kongens vedtak i 1536--1537", True), ("Gjennom en folkeavstemning", False), ("Av paven selv", False)],
  "Reformasjonen i Norge var en ovenfra-og-ned-prosess: kongen Christian III innførte lutherdommen som politisk vedtak i 1536--1537."),
 ("Hva slo freden i Westfalen (1648) fast?", [("At alle land skulle bli katolske", False), ("At paven igjen fikk all makt", False), ("At hver fyrste bestemte religionen i sitt område", True), ("At religionskriger ble forbudt for alltid", False)],
  "Freden i Westfalen avsluttet trettiårskrigen og slo fast prinsippet om at hver fyrste bestemte religionen i sitt eget område."),
 ("Hva er en forskjell mellom luthersk og katolsk kristendom?", [("Lutheranere har syv sakramenter", False), ("Katolikker bruker bare folkespråket fra reformasjonen", False), ("Lutheranere bygger på Bibelen alene, katolikker på Bibelen, tradisjon og paven", True), ("Begge forbyr prester å gifte seg", False)],
  "Et kjernepunkt: lutheranere holder seg til Bibelen alene, mens katolikker også vektlegger kirkens tradisjon og pavens autoritet. Lutherske prester kan dessuten gifte seg."),
]),

("summary", """## Oppsummering

Reformasjonen startet med Martin Luthers 95 teser mot avlatshandelen i Wittenberg i 1517 og endte med å splitte den vestlige kristenheten i katolikker og protestanter. Luther bygde læren sin på fire prinsipper -- Skriften alene, troen alene, nåden alene og Kristus alene -- som brøt med katolsk lære om pavens autoritet, helgener og gode gjerningers rolle i frelsen.

Bevegelsen spredte seg i ulike former: luthersk i Norden, reformert i Sveits og Nederland, anglikansk i England. Den katolske kirken svarte med motreformasjonen. Konsekvensene var enorme -- religionskriger, svekket pavemakt, sterkere nasjonalstater og økt lesekyndighet. I Norge ble lutherdommen innført ovenfra i 1536--1537 og har preget kultur og samfunn siden. I dag nærmer katolikker og protestanter seg hverandre gjennom økumenisk dialog, selv om viktige teologiske forskjeller består."""),
])

# ============ 1.2 Kristendommen i den moderne verden ============
add("krle-9-1-2",
"En fortelling om en religion som krymper i Europa og blomstrer i sør samtidig -- og om hvordan sekularisering, økumenikk og pinsebevegelse forandrer verdens største religion.",
35,
[
("intro", """## Tom kirke i Europa, full kirke i Lagos

Det er søndag formiddag i en norsk bygdekirke. Klokkene ringer, men benkene er nesten tomme -- noen eldre, presten og en kirketjener. Samtidig, i Lagos i Nigeria, sitter titusenvis av mennesker tett i tett i en kirkehall som er større enn en fotballstadion, mens lovsangen runger.

Begge bildene er sanne, og samtidig. Kristendommen er verdens største religion med over 2,4 milliarder tilhengere, men den ser helt annerledes ut i dag enn for hundre år siden. I Vest-Europa, som en gang var kristendommens hjerte, går stadig færre i kirken. I Afrika, Asia og Latin-Amerika vokser den eksplosivt.

Hvorfor? Svaret handler om store samfunnsendringer -- **sekularisering**, vitenskap, globalisering og migrasjon. La oss se hvordan den moderne verden har forandret kristendommen, og hvordan kristendommen møter den moderne verden."""),

("text", """## Sekularisering -- når religionen trekker seg tilbake

De siste 100--150 årene har Vest-Europa gjennomgått en omfattende **sekularisering**. Det betyr at religionens innflytelse på samfunn og enkeltmennesker gradvis blir mindre. I et sekularisert samfunn er staten skilt fra religionen, og beslutninger tas på grunnlag av vitenskap, demokrati og menneskerettigheter -- ikke religiøs lære. Det betyr ikke nødvendigvis at folk slutter å tro, men at religionen i større grad blir en privatsak.

Bakgrunnen ligger i opplysningstiden på 1700-tallet, som fremmet fornuft og kritisk tenkning som alternativer til religiøs autoritet. Den franske revolusjonen i 1789 innførte skille mellom kirke og stat, og utover 1800- og 1900-tallet ble dette skillet vanlig i stadig flere land. I dag er det et mindretall i Vest-Europa som går jevnlig i kirken. I Norge er rundt 64 % av befolkningen medlemmer i Den norske kirke, men bare omkring 3 % deltar regelmessig i gudstjenester.

Hvorfor skjer dette? Vitenskapen har gitt naturlige forklaringer på mye som før ble tilskrevet Gud. Økt velstand gjør at folk føler seg mindre avhengige av religiøs trøst. Individualisme erstatter tradisjonelle fellesskap, og møtet med mange ulike trosretninger kan gjøre folk mer kritiske til sin egen. Men sekularisering er ikke hele bildet. Mange beskriver seg som «spirituelle, men ikke religiøse» og søker mening gjennom pilegrimsvandring, meditasjon eller yoga utenfor de tradisjonelle kirkene."""),

("quiz", "Test deg selv på sekularisering:", [
 ("Hva betyr sekularisering?", [("At alle slutter å tro på Gud", False), ("At religionens innflytelse på samfunn og enkeltmennesker gradvis blir mindre", True), ("At kirken får mer makt over staten", False), ("At alle religioner slås sammen til én", False)],
  "Sekularisering betyr at religionens innflytelse avtar og at religion blir mer av en privatsak -- ikke nødvendigvis at folk slutter å tro."),
 ("Hvor mange nordmenn deltar jevnlig i gudstjenester, omtrent?", [("Rundt 3 %", True), ("Rundt 64 %", False), ("Rundt 30 %", False), ("Rundt 50 %", False)],
  "Rundt 64 % er medlemmer i Den norske kirke, men bare omkring 3 % deltar regelmessig i gudstjenester. Mange er medlemmer av tradisjon."),
]),

("text", """## Fra fiendskap til vennskap: økumenikk

I nesten 500 år var forholdet mellom katolikker og protestanter preget av fiendskap, fordommer og til tider vold. Men på 1900-tallet skjedde noe overraskende: kristne fra ulike tradisjoner begynte å søke dialog og samarbeid. Dette kalles **økumenikk**, fra det greske *oikoumene*, «den bebodde verden». Målet er ikke at alle kirker skal smelte sammen, men at de skal forstå hverandre bedre, samarbeide og respektere hverandres tradisjoner.

Et viktig steg var **Kirkenes verdensråd**, grunnlagt i 1948, som samler over 350 kirkesamfunn. Et annet vendepunkt var **Det andre vatikankonsil (1962--1965)**, der pave Johannes XXIII ville «åpne vinduene» mot verden. Konsilet vedtok at gudstjenesten skulle holdes på folkespråket, anerkjente andre kristne som «adskilte brødre og søstre», og oppmuntret til dialog med andre religioner.

Det mest oppsiktsvekkende kom i 1999, da lutheranere og katolikker undertegnet **Felleserklæringen om rettferdiggjørelsen**. Der erkjente de at de i det vesentlige var enige om frelsesspørsmålet -- selve hovedkonflikten i reformasjonen. Det var et enormt fremskritt etter 482 år med splittelse. I Norge samarbeider kirkesamfunn i dag gjennom Norges Kristne Råd om gudstjenester, hjelp til fattige og flyktninger, og etiske spørsmål."""),

("quiz", "Test deg selv på økumenikk:", [
 ("Hva er målet med økumenikk?", [("At alle kirker skal bli katolske", False), ("At kristne kirkesamfunn skal samarbeide og forstå hverandre bedre", True), ("At protestanter skal slå seg sammen med muslimer", False), ("Å avskaffe alle kirkesamfunn", False)],
  "Økumenikk er arbeid for enhet og samarbeid mellom kristne kirkesamfunn -- ikke nødvendigvis at de skal smelte sammen."),
 ("Hva var spesielt med Felleserklæringen om rettferdiggjørelsen (1999)?", [("Den splittet kirken på nytt", False), ("Lutheranere og katolikker ble i hovedsak enige om frelsesspørsmålet", True), ("Den forbød katolsk gudstjeneste på latin", False), ("Den grunnla Kirkenes verdensråd", False)],
  "I 1999 erkjente lutheranere og katolikker at de i det vesentlige var enige om frelsen -- hovedkonflikten i reformasjonen -- etter nesten 500 år."),
]),

("text", """## Karismatiske bevegelser og tyngdepunktet som flyttet sør

Mens tradisjonelle kirker i Vest-Europa krymper, vokser **karismatiske bevegelser** over hele verden. De legger vekt på personlig opplevelse av Den hellige ånd, følelsesladet tilbedelse og troen på at Guds kraft virker i dag gjennom helbredelse, tungetale og profeti. Gudstjenestene er livlige, med lovsang og oppløftede hender, og personlig omvendelse står sentralt. **Pinsebevegelsen**, som oppsto i USA rundt 1906, har blitt en av verdens raskest voksende religiøse bevegelser med over 600 millioner tilhengere. I Norge har pinsemenigheter vært viktige siden begynnelsen av 1900-tallet. Karismatisk praksis har også smittet over på katolske, lutherske og anglikanske menigheter. Men bevegelsene møter kritikk, blant annet for «velstandsteologi» -- troen på at Gud belønner tro med materiell rikdom.

Den kanskje mest dramatiske endringen er at kristendommens tyngdepunkt har flyttet seg fra nord til sør. I 1900 bodde rundt 80 % av verdens kristne i Europa og Nord-Amerika. I dag bor over 60 % i Afrika, Asia og Latin-Amerika -- «det globale sør». I Afrika sør for Sahara vokste tallet fra ca. 9 millioner kristne i 1900 til over 600 millioner i dag. I Brasil er nå rundt 30 % protestanter, og i Sør-Korea er om lag 30 % kristne.

Kristendommen i sør er ofte mer konservativ i teologi og etikk, legger mer vekt på overnaturlige opplevelser, og utvikles i dialog med lokale kulturer. I Latin-Amerika oppsto **befrielsesteologi** på 1960-tallet -- en retning som tolker kristendommen ut fra de fattiges perspektiv og mener at kirken må kjempe mot fattigdom og urettferdighet. Den fremhever at Jesus selv var fattig og tok parti for de marginaliserte."""),

("quiz", "Test deg selv på vekst og bevegelser:", [
 ("Hvor bor flertallet av verdens kristne i dag?", [("I Europa", False), ("I Nord-Amerika", False), ("I Afrika, Asia og Latin-Amerika (det globale sør)", True), ("I Russland", False)],
  "Tyngdepunktet har flyttet seg: i 1900 bodde ca. 80 % av verdens kristne i Europa og Nord-Amerika, men i dag bor over 60 % i det globale sør."),
 ("Hva kjennetegner pinsebevegelsen?", [("Streng latinsk gudstjeneste", False), ("Vekt på Den hellige ånds gaver som tungetale og helbredelse", True), ("Avvisning av Bibelen", False), ("At paven er øverste leder", False)],
  "Pinsebevegelsen legger vekt på Den hellige ånds gaver -- tungetale, profeti og helbredelse -- og har over 600 millioner tilhengere."),
 ("Hva er befrielsesteologi?", [("En teologi som tolker kristendommen ut fra de fattiges perspektiv", True), ("Troen på at Gud belønner tro med rikdom", False), ("En retning som avviser Det nye testamentet", False), ("Et annet ord for sekularisering", False)],
  "Befrielsesteologi oppsto i Latin-Amerika på 1960-tallet og mener kirken har ansvar for å kjempe mot fattigdom og urettferdighet."),
]),

("summary", """## Oppsummering

Kristendommen i den moderne verden er preget av store kontraster. I Vest-Europa har sekulariseringen redusert religionens innflytelse kraftig -- færre går i kirken, og religion er blitt mer av en privatsak. Samtidig blomstrer kristendommen i det globale sør, der over 60 % av verdens kristne nå bor.

Økumeniske bevegelser har ført katolikker og protestanter nærmere hverandre etter 500 år med splittelse, med Det andre vatikankonsil og Felleserklæringen om rettferdiggjørelsen som milepæler. Karismatiske bevegelser, særlig pinsebevegelsen, har vokst til over 600 millioner tilhengere. I Norge ser vi alle disse tendensene på én gang: et sekularisert samfunn der kirken likevel spiller en kulturell rolle, økende mangfold gjennom innvandring, og spenninger mellom tradisjon og fornyelse."""),
])

# ============ 1.3 Kristne bevegelser og retninger i dag ============
add("krle-9-1-3",
"En fortelling om kristendommens enorme mangfold i dag -- fra pinsebevegelsens livlige gudstjenester til frikirker, megakirker i sør og uavhengige afrikanske kirker.",
35,
[
("intro", """## Én tro, tusen uttrykk

Hva har en stille katolsk messe i Roma, en stillferdig kvekersamling, en buldrende lovsangskveld i en nigeriansk megakirke og et bønnemøte i en norsk pinsemenighet til felles? Alle kaller seg kristne. Likevel kan opplevelsen være så forskjellig at man knapt skulle tro det var samme religion.

Kristendommen er ingen ensartet religion. Med over 2,4 milliarder tilhengere finnes et enormt mangfold av kirkesamfunn, bevegelser og tradisjoner. Noen kirker er nesten 2000 år gamle, andre er hundre. Noen er strengt hierarkiske med biskoper og paver, andre er løse, lokale menigheter.

I dette kapittelet skal vi bli kjent med noen av de viktigste kristne retningene i dag -- fra den lynraskt voksende pinsebevegelsen til evangelikale kirker, norske frikirker og de uavhengige kirkene i det globale sør."""),

("text", """## Pinsebevegelsen -- fra et lagerlokale til 600 millioner

Pinsebevegelsens historie begynner i et nedslitt lagerlokale på Azusa Street i Los Angeles i 1906. Den afroamerikanske predikanten William J. Seymour ledet en serie møter der deltakerne rapporterte om tungetale, helbredelser og sterke åndelige opplevelser. Nyheten spredte seg lynraskt, og folk strømmet til fra hele verden. I dag har **pinsebevegelsen** over 600 millioner tilhengere og er en av verdens raskest voksende religiøse bevegelser. Navnet kommer fra pinsedagen i Apostlenes gjerninger, da Den hellige ånd ifølge Bibelen kom over disiplene.

Hva kjennetegner den? Pinsevenner tror på **åndsdåp** -- at kristne kan oppleve en særskilt fylde av Den hellige ånd, ofte med tungetale. De vektlegger åndelige gaver som profeti og helbredelse ved bønn, og gudstjenestene er livlige, med lovsang, klapping og spontan bønn. Personlig omvendelse er sentralt, og Bibelen leses som Guds ufeilbarlige ord.

Pinsebevegelsen kom til Norge tidlig på 1900-tallet og ble en av de viktigste frikirkelige bevegelsene -- den største menigheten er Filadelfia Oslo. Men bevegelsen er ikke ett kirkesamfunn. Den rommer alt fra klassiske pinsemenigheter til nyere karismatiske kirker, megakirker i Afrika og Latin-Amerika, og karismatisk fornyelse innenfor katolske og protestantiske kirker."""),

("quiz", "Test deg selv på pinsebevegelsen:", [
 ("Hvor og når oppsto pinsebevegelsen?", [("I Wittenberg i 1517", False), ("På Azusa Street i Los Angeles rundt 1906", True), ("I Roma på 300-tallet", False), ("I Genève under Calvin", False)],
  "Pinsebevegelsen knyttes til Azusa Street-vekkelsen i Los Angeles rundt 1906, ledet av William J. Seymour."),
 ("Hva er åndsdåp i pinsebevegelsen?", [("En vanlig vanndåp av spedbarn", False), ("En særskilt fylde av Den hellige ånd, ofte med tungetale", True), ("Å bli medlem av Den norske kirke", False), ("En politisk markering", False)],
  "Åndsdåp er troen på at kristne kan oppleve en særskilt fylde av Den hellige ånd, ofte ledsaget av tungetale."),
]),

("text", """## Evangelikale bevegelser

En annen stor kraft i dagens kristendom er **evangelikalisme**. Det er ikke ett kirkesamfunn, men en bred, tverrkirkelig bevegelse som finnes innenfor mange protestantiske tradisjoner -- lutherske, reformerte, baptistiske, metodistiske og pinsebevegelsen. Evangelikale kristne legger vekt på fire ting: at Bibelen er Guds ord og øverste rettesnor, at hver enkelt må ta et bevisst valg om å følge Jesus («å bli født på ny»), at Jesu død på korset er kjernen i evangeliet, og at kristne har en plikt til å dele troen med andre.

I USA er evangelikale kristne en stor og politisk innflytelsesrik gruppe -- rundt 25 % av amerikanerne identifiserer seg slik. De har vært viktige i debatter om abort, ekteskap og utenrikspolitikk, og megakirker med tusenvis av medlemmer og TV-pastorer er typiske trekk. Globalt vokser evangelikale og pinsekarismatiske kirker enormt i Latin-Amerika, Sør-Korea og Afrika.

Den mest kjente evangelikale skikkelsen i forrige århundre var den amerikanske predikanten **Billy Graham** (1918--2018), som gjennom store vekkelsesmøter -- «korstog» -- talte til anslagsvis 215 millioner mennesker i over 185 land. Et eksempel på moderne evangelisk praksis er **Alpha-kurset**, utviklet i London: et uformelt introduksjonskurs i kristen tro med måltid, presentasjon og diskusjon, som også tilbys i Norge. Bevegelsen møter kritikk for kulturimperialisme, politisk konservatisme og «velstandsteologi»."""),

("quiz", "Test deg selv på evangelikalisme:", [
 ("Hva kjennetegner evangelikale kristne?", [("At de avviser Bibelen", False), ("Vekt på Bibelens autoritet, personlig omvendelse og aktiv evangelisering", True), ("At de bare finnes i Den katolske kirke", False), ("At de ikke tror på Jesus", False)],
  "Evangelikale legger vekt på Bibelens autoritet, personlig omvendelse («født på ny»), korset og aktiv evangelisering -- på tvers av kirkesamfunn."),
 ("Hvem var Billy Graham?", [("Grunnleggeren av pinsebevegelsen", False), ("En kjent evangelikal predikant som talte til millioner", True), ("En katolsk pave", False), ("Lederen for Kirkenes verdensråd", False)],
  "Billy Graham (1918--2018) var den mest kjente evangelikale predikanten i det 20. århundret og talte til anslagsvis 215 millioner mennesker."),
]),

("text", """## Norske frikirker og kirkene i sør

I Norge finnes en lang tradisjon med **frikirker** -- kristne trossamfunn som er organisert uavhengig av staten og Den norske kirke. Medlemskap er frivillig og bygger på personlig tro, i motsetning til Den norske kirke, der man tradisjonelt ble medlem ved dåp. Blant de viktigste er **metodistkirken** (oppsto i England på 1700-tallet under John Wesley, med vekt på sosialt engasjement), **baptistkirken** (praktiserer voksendåp og lar menigheten styre seg selv), **Frelsesarmeen** (kombinerer forkynnelse med sosialt arbeid blant fattige og rusavhengige) og **adventistkirken** (holder lørdag som helligdag). Mange frikirker opplever synkende medlemstall, mens enkelte nyere, karismatiske menigheter vokser.

De mest spennende utviklingene skjer likevel i det globale sør. I Afrika finnes tusenvis av **uavhengige afrikanske kirker** som har oppstått uten direkte bånd til vestlige misjonsorganisasjoner. De blander ofte kristen tro med elementer fra afrikanske tradisjoner -- åndeverden, forfedre og helbredelsesritualer -- som Kimbanguistkirken i Kongo og Zion Christian Church i Sør-Afrika. Andre steder har det vokst fram **megakirker** med titusenvis av medlemmer; Yoido Full Gospel Church i Seoul har hatt over 800 000 medlemmer.

En sentral debatt i sør handler om **kontekstualisering**: hvordan kan kristendommen uttrykkes gjennom lokal kultur? Skal man bruke tradisjonelle instrumenter i gudstjenesten, og hvordan forholder man seg til lokale skikker? Hvorfor finnes det egentlig så mange retninger? Svaret ligger i tre ting: teologiske uenigheter om hvordan Bibelen skal tolkes, kulturelle forskjeller, og historiske hendelser -- som det store skismaet i 1054, da kristendommen delte seg i en vestlig (katolsk) og en østlig (ortodoks) gren, lenge før reformasjonen. Likevel deler alle kristne en felles kjerne: troen på Jesus Kristus, dåpen og Bibelens betydning."""),

("quiz", "Test deg selv på frikirker og kirkene i sør:", [
 ("Hva er en frikirke?", [("En kirke som er gratis å besøke", False), ("Et kristent trossamfunn organisert uavhengig av staten, med frivillig medlemskap", True), ("En kirke uten Bibel", False), ("En annen betegnelse på Den norske kirke", False)],
  "En frikirke er uavhengig av staten, og medlemskap er frivillig og basert på personlig tro -- ulikt den tradisjonelle statskirkemodellen."),
 ("Hva betyr kontekstualisering i kristendommen?", [("Å oversette Bibelen til latin", False), ("Å uttrykke den kristne troen gjennom lokal kultur", True), ("Å avvise alle lokale tradisjoner", False), ("Å slå sammen alle kirkesamfunn", False)],
  "Kontekstualisering handler om hvordan kristendommen kan uttrykkes gjennom lokal kultur -- et viktig spørsmål i kirkene i det globale sør."),
 ("Hva skjedde under det store skismaet i 1054?", [("Reformasjonen begynte", False), ("Kristendommen delte seg i en vestlig (katolsk) og østlig (ortodoks) gren", True), ("Pinsebevegelsen oppsto", False), ("Den norske kirke ble grunnlagt", False)],
  "I 1054 splittet kristendommen seg i en vestlig (katolsk) og en østlig (ortodoks) retning -- lenge før reformasjonen."),
]),

("summary", """## Oppsummering

Kristendommen i dag rommer et enormt mangfold. Pinsebevegelsen, som oppsto i 1906, har vokst til over 600 millioner tilhengere og er spesielt sterk i det globale sør, med vekt på Den hellige ånds gaver. Evangelikale kristne legger vekt på Bibelens autoritet, personlig omvendelse og aktiv evangelisering, og er svært innflytelsesrike, særlig i USA.

I Norge finnes en lang tradisjon med frikirker som metodister, baptister, Frelsesarmeen og pinsemenigheter, ved siden av Den norske kirke. I det globale sør gjør kirkene kristendommen til sin egen gjennom kontekstualisering -- uavhengige afrikanske kirker, latinamerikanske pinsemenigheter og koreanske megakirker er eksempler. Mangfoldet skyldes teologiske uenigheter, kulturelle forskjeller og historiske splittelser som skismaet i 1054, men alle kristne deler en felles kjerne."""),
])

# ============ 1.4 Kristendom, vitenskap og evolusjon ============
add("krle-9-1-4",
"En fortelling om det store spørsmålet: kan man tro på Gud og samtidig akseptere vitenskap? Om Galileo, Darwin, kreasjonisme og fire ulike måter å se forholdet mellom tro og fornuft.",
35,
[
("intro", """## Munken som oppdaget genene, presten som fant universets begynnelse

Tenk deg at noen påstår at religion og vitenskap alltid har vært bitre fiender. Så forteller du dem at genetikkens far, Gregor Mendel, var munk. At mannen som foreslo Big Bang-teorien, Georges Lemaître, var katolsk prest. Og at Isaac Newton så vitenskapen som en måte å oppdage Guds skaperverk på.

Forholdet mellom kristendom og vitenskap er mer sammensatt enn mange tror. Kan man tro på Gud og samtidig akseptere vitenskap? Er det en uunngåelig konflikt mellom tro og fornuft, eller kan de utfylle hverandre?

Spørsmålet om skapelse versus evolusjon har vært særlig betent. Men som vi skal se, finnes det mange ulike syn blant kristne -- fra dem som mener at Bibelen og vitenskapen står i direkte konflikt, til dem som mener at de svarer på helt ulike spørsmål."""),

("text", """## Galileo, Darwin og to bibelfortellinger

Historien rommer både konflikt og samarbeid. I middelalderen var kirken faktisk en viktig støttespiller for vitenskap -- klostre bevarte antikk kunnskap, og de første universitetene ble grunnlagt av kirken. Men den mest kjente konflikten er saken mot **Galileo Galilei** (1564--1642). Han hevdet at jorden kretser rundt solen, det heliosentriske verdensbildet. Den katolske kirken fordømte dette som kjetteri fordi det tilsynelatende motsatte Bibelen, og Galileo ble tvunget til å trekke tilbake påstandene i 1633. Først i 1992 innrømmet pave Johannes Paul II at kirken hadde tatt feil.

Samtidig var mange banebrytende vitenskapsfolk troende kristne: Mendel (genetikk), Lemaître (Big Bang), Copernicus (det heliosentriske bildet) og Newton. Det store stridsspørsmålet kom likevel i 1859, da **Charles Darwin** ga ut *Artenes opprinnelse*. **Evolusjon** er den vitenskapelige teorien om at alle arter har utviklet seg gradvis over millioner av år gjennom naturlig utvalg. I dag er den støttet av bevis fra fossiler, genetikk og anatomi. Men evolusjon sier noe om *hvordan* livet har utviklet seg -- ikke om *hvorfor* det finnes liv, eller om det har en mening.

Noen kristne avviste Darwin, mens andre allerede i hans samtid mente at evolusjon kunne forstås som Guds metode. Hvordan man stiller seg, henger ofte sammen med hvordan man leser skapelsesfortellingene. Første Mosebok har faktisk *to*: i den første skaper Gud verden på seks dager, i den andre skaper han Adam av jord og Eva av Adams ribben. Noen leser dem bokstavelig som historie, andre som poetiske, teologiske tekster om at Gud er skaperen -- uten naturvitenskapelige detaljer. At de to fortellingene beskriver skapelsen i ulik rekkefølge, tyder for mange teologer på at de ikke er ment som nøyaktige kronologier."""),

("quiz", "Test deg selv på historien:", [
 ("Hva handlet Galileo-saken om?", [("Om evolusjonsteorien", False), ("Om at jorden kretser rundt solen, som kirken fordømte", True), ("Om avlatshandel", False), ("Om kvinnelige prester", False)],
  "Galileo hevdet det heliosentriske verdensbildet -- at jorden kretser rundt solen. Kirken fordømte det som kjetteri, men innrømmet i 1992 å ha tatt feil."),
 ("Hva sier evolusjonsteorien noe om?", [("Hvorfor livet har en mening", False), ("Hvordan livet har utviklet seg gjennom naturlig utvalg", True), ("At Gud ikke finnes", False), ("Hvordan man blir frelst", False)],
  "Evolusjon forklarer *hvordan* arter har utviklet seg over millioner av år, men sier i seg selv ingenting om mening eller om Gud finnes."),
 ("Hvor mange skapelsesfortellinger finnes i Første Mosebok?", [("Én", False), ("To", True), ("Sju", False), ("Ingen", False)],
  "Første Mosebok har to skapelsesfortellinger som beskriver skapelsen i ulik rekkefølge -- noe mange teologer tar som tegn på at de ikke er ment som nøyaktig kronologi."),
]),

("text", """## Fire modeller -- og et bredt spekter av kristne syn

Forskere og teologer har foreslått fire ulike modeller for forholdet mellom tro og vitenskap. I **konfliktmodellen** står de i grunnleggende strid: når vitenskapen beviser noe, må religionen vike. Den forfektes både av enkelte ateister, som Richard Dawkins, og av enkelte fundamentalistiske kristne. I **uavhengighetsmodellen** (NOMA), foreslått av biologen Stephen Jay Gould, handler de to om helt forskjellige ting: vitenskapen svarer på *hvordan*-spørsmål, religionen på *hvorfor*-spørsmål. I **dialogmodellen** kan de berike hverandre gjennom samtale, og i **integrasjonsmodellen** kan de smelte sammen i ett helhetlig verdensbilde -- noen mener Gud virker *gjennom* naturens lover og evolusjon.

Blant kristne finnes hele spekteret. **Ung-jord-kreasjonisme** leser Bibelen bokstavelig: jorden er 6000--10 000 år gammel, skapt på seks dager, og evolusjon avvises. Den er mest utbredt blant evangelikale i USA. **Intelligent design (ID)** hevder at visse trekk i naturen er for komplekse til å ha oppstått ved evolusjon alene; kritikere mener det er kreasjonisme i vitenskapelig forkledning, og de fleste vitenskapsfolk avviser det. **Teistisk evolusjon** aksepterer evolusjon som forklaringen på livets utvikling, men mener at Gud står bak prosessen -- en posisjon mange katolikker, ortodokse og mainline-protestanter inntar. Pave Frans har uttalt at evolusjon og Big Bang er forenlige med troen på Gud som skaper.

Det er viktig å merke seg at debatten er langt mer intens i USA enn i Norge. I rettssaken Kitzmiller v. Dover (2005) slo en amerikansk dommer fast at intelligent design er religiøst, ikke vitenskapelig, og ikke hører hjemme i naturfagsundervisningen. I Norge aksepterer de fleste kristne, inkludert Den norske kirke, evolusjonsteorien og leser skapelsesberetningen som teologi, ikke naturvitenskap."""),

("quiz", "Test deg selv på modellene og synene:", [
 ("I uavhengighetsmodellen (NOMA), hva svarer vitenskapen og religionen på?", [("Begge svarer på de samme spørsmålene", False), ("Vitenskapen på *hvordan*-spørsmål, religionen på *hvorfor*-spørsmål", True), ("Vitenskapen på *hvorfor*, religionen på *hvordan*", False), ("Ingen av dem svarer på noe", False)],
  "I uavhengighetsmodellen handler vitenskap og religion om forskjellige ting: vitenskapen om *hvordan* naturen fungerer, religionen om *hvorfor* og mening."),
 ("Hva er teistisk evolusjon?", [("At jorden er 6000 år gammel", False), ("At evolusjon avvises helt", False), ("At evolusjon aksepteres, men at Gud står bak prosessen", True), ("At Gud ikke finnes", False)],
  "Teistisk evolusjon aksepterer evolusjon som forklaring på livets utvikling, men mener at Gud står bak -- en posisjon mange katolikker og protestanter deler."),
 ("Hvordan stiller de fleste kristne i Norge seg til evolusjon?", [("De avviser den fullstendig", False), ("De aksepterer den og leser skapelsesberetningen som teologi", True), ("De mener jorden er 6000 år gammel", False), ("De forbyr å undervise i den", False)],
  "I Norge aksepterer de fleste kristne, inkludert Den norske kirke, evolusjonsteorien og leser skapelsesberetningen som teologi, ikke naturvitenskap. Debatten er mer intens i USA."),
]),

("text", """## Tro og vitenskap i dag

Diskusjonen lever videre, men handler i dag om nye temaer. **Kan vitenskapen bevise eller motbevise at Gud finnes?** De fleste filosofer og vitenskapsfolk mener nei. Vitenskapelige metoder kan undersøke naturen, men spørsmålet om Gud ligger utenfor vitenskapens rekkevidde. Noen ateister mener vitenskapen gjør Gud overflødig som forklaring, mens troende mener vitenskapen ikke kan erstatte spørsmål om mening, moral og formål.

Andre debatter er ferske. **Hjerneforskning** kan vise hva som skjer i hjernen under bønn og meditasjon -- betyr det at religiøse opplevelser «bare» er kjemi? Troende kan svare at Gud kan virke gjennom hjernen, slik en komponist virker gjennom et instrument. **Kunstig intelligens** reiser spørsmål som berører både vitenskap og tro: Hva gjør mennesket unikt? Har mennesket en sjel? Kan en maskin bli bevisst? Her bidrar kristne med perspektiver om menneskeverd og gudsbilde. Og mange kristne engasjerer seg i **klima og miljø** ut fra troen på at mennesket har et forvalteransvar for skaperverket -- pave Frans' encyklika *Laudato si'* (2015) knytter klimaansvar til kristen tro.

Den lange tradisjonen kalt **naturteologi** lever videre. Allerede Thomas Aquinas (1225--1274) argumenterte for at naturens orden og skjønnhet peker mot en intelligent skaper. I dag ser mange kristne vitenskapsfolk forskning som en måte å utforske Guds skaperverk på."""),

("quiz", "Test deg selv på dagens debatter:", [
 ("Kan vitenskapen bevise eller motbevise at Gud finnes, ifølge de fleste filosofer?", [("Ja, lett", False), ("Nei -- spørsmålet ligger utenfor vitenskapens rekkevidde", True), ("Bare i Norge", False), ("Bare ved hjelp av kunstig intelligens", False)],
  "De fleste mener vitenskapen kan undersøke naturen, men at spørsmålet om Gud ligger utenfor det vitenskapelige metoder kan avgjøre."),
 ("Hva er hovedtanken i naturteologi?", [("At naturen beviser at Gud ikke finnes", False), ("At naturens orden og skjønnhet kan peke mot en intelligent skaper", True), ("At Bibelen skal leses bokstavelig", False), ("At vitenskap er forbudt", False)],
  "Naturteologi, fra Thomas Aquinas til i dag, mener at naturens orden og skjønnhet kan peke mot en intelligent skaper."),
]),

("summary", """## Oppsummering

Forholdet mellom kristendom og vitenskap har endret seg gjennom historien. Konflikter som Galileo-saken er kjente, men mange av historiens største vitenskapsfolk -- Mendel, Lemaître, Newton -- var troende kristne.

Det finnes fire hovedmodeller for forholdet mellom tro og vitenskap: konflikt, uavhengighet, dialog og integrasjon. Blant kristne spenner synet fra ung-jord-kreasjonisme, som leser skapelsesberetningen bokstavelig og avviser evolusjon, til teistisk evolusjon, som ser evolusjon som Guds metode. I Norge aksepterer de fleste kristne evolusjon og leser skapelsesberetningen som teologi, mens debatten er mer intens i USA. I dag dukker spørsmålet opp på nytt i diskusjoner om hjerneforskning, kunstig intelligens, klima og menneskets verdighet."""),
])

# ============ 1.5 Kristendom, kjønn og seksualitet ============
add("krle-9-1-5",
"En fortelling om noen av kristendommens mest betente debatter -- kjønnsroller, kvinnelige prester, ekteskap og LHBT+ -- der alle parter begrunner sine syn med Bibelen, og målet er å forstå dem alle.",
35,
[
("intro", """## Samme bok, ulike svar

Kan kvinner bli prester? Hva sier Bibelen om ekteskap? Kan kirken velsigne et likekjønnet par? Få temaer skaper mer debatt innenfor kristendommen i dag enn spørsmål om kjønn og seksualitet -- og det merkelige er at alle parter peker på den samme boka, Bibelen, når de begrunner svarene sine.

Svarene spenner fra svært konservative til svært progressive, og folk på alle sider mener de følger både Bibelen, tradisjonen og fornuften. I dette kapittelet skal vi prøve å forstå de ulike synene -- på kjønnsroller, ordinasjon av kvinner, ekteskap og LHBT+-spørsmål -- saklig og respektfullt, uten å ta parti. Målet er ikke å bli enig, men å forstå hvorfor gjennomtenkte mennesker kan lese den samme teksten så ulikt."""),

("text", """## Kjønnsroller: komplementarisme mot egalitarisme

I bunnen av debatten ligger to grunnsyn. **Komplementarisme** er synet at menn og kvinner er skapt likeverdige, men med ulike roller -- menn er gitt et lederansvar i kirke og familie, kvinner har andre viktige roller. **Egalitarisme** er synet at menn og kvinner er fullt likestilte og kan ha de samme rollene overalt; tilhengerne mener at Bibelens patriarkalske tekster må forstås i sin historiske sammenheng.

De som har et **tradisjonelt syn**, viser til tekster som 1. Korinterbrev 11,3 og Efeserbrevet 5,22--24, der kvinner oppfordres til å underordne seg sine menn. De mener mann og kvinne er likeverdige for Gud, men har ulike oppgaver. De med et **moderat syn** sier at slike tekster må leses i sin kontekst -- Paulus skrev i et patriarkalsk samfunn -- og at hovedbudskapet er likeverd, som i Galaterne 3,28: «Her er ikke mann og kvinne, for dere er alle én i Kristus Jesus.» De med et **progressivt syn** mener full likestilling er en naturlig følge av evangeliet, og peker på at Jesus selv behandlet kvinner med uvanlig respekt: han snakket med den samaritanske kvinnen og lot kvinner følge ham, og de var de første vitnene til oppstandelsen.

Bibelen rommer faktisk sterke kvinneskikkelser -- dommeren Debora, dronning Ester, Ruth, Maria Magdalena, og medarbeidere som Priska og Junia, sistnevnte kalt «fremragende blant apostlene». Egalitarister bruker dette som bevis på at kvinner hadde viktige roller i den tidlige kirken. Moderne kristne feminister som Rosemary Radford Ruether argumenterer for at Bibelens frigjørende budskap støtter likestilling."""),

("quiz", "Test deg selv på kjønnsroller:", [
 ("Hva er komplementarisme?", [("At menn og kvinner er fullt likestilte i alle roller", False), ("At menn og kvinner er likeverdige, men har ulike roller", True), ("At kvinner skal lede menn", False), ("At kjønn ikke betyr noe", False)],
  "Komplementarisme er synet at menn og kvinner er likeverdige, men skapt med ulike roller, der mannen ofte gis et lederansvar."),
 ("Hva er egalitarisme?", [("At menn og kvinner er fullt likestilte og kan ha samme roller", True), ("At kvinner ikke kan være prester", False), ("At Bibelen alltid skal leses bokstavelig", False), ("At bare menn kan lede", False)],
  "Egalitarisme er synet at menn og kvinner er fullt likestilte og kan ha de samme rollene i kirke, familie og samfunn."),
 ("Hvilken bibeltekst brukes ofte for å støtte likeverd mellom kjønnene?", [("«Mannens hode er Kristus, og kvinnens hode er mannen»", False), ("«Her er ikke mann og kvinne, for dere er alle én i Kristus Jesus» (Gal 3,28)", True), ("«Det Gud har sammenføyd ...»", False), ("Ingen bibeltekst nevner dette", False)],
  "Galaterne 3,28 -- «Her er ikke mann og kvinne, for dere er alle én i Kristus Jesus» -- brukes ofte for å fremheve evangeliets budskap om likeverd."),
]),

("text", """## Kan kvinner bli prester?

Spørsmålet om ordinasjon av kvinner er et av de mest kontroversielle. Noen kirker ordinerer ikke kvinner. **Den katolske kirken** mener bare menn kan ordineres, fordi Jesus valgte tolv mannlige apostler, og pave Johannes Paul II erklærte i 1994 at spørsmålet er endelig avgjort -- men kvinner kan ha viktige roller som nonner, teologer og ledere. **Ortodokse kirker** har samme posisjon, og mange konservative protestantiske kirker viser til tekster som 1. Timoteusbrev 2,12.

Andre kirker ordinerer kvinner. **Svenske kyrkan** var den første lutherske kirken som gjorde det (1960), og **Den norske kirke** fikk sin første kvinnelige prest i 1961 og første kvinnelige biskop i 1993. I dag er det knapt kontroversielt i de fleste norske menigheter. **Anglikanske kirker** begynte på 1970-tallet, men der pågår fortsatt debatt.

Debatten dreier seg om noen grunnleggende spørsmål: Hva er Bibelens egentlige budskap? Er tekstene som begrenser kvinners rolle tidsbundne regler for datidens samfunn, eller tidløse guddommelige prinsipper? Har tradisjonen samme vekt som Bibelen? Og hvordan veier man dette mot rettferdighet og likeverd? Det finnes ærlige, gjennomtenkte svar på alle sider."""),

("quiz", "Test deg selv på ordinasjon:", [
 ("Hvilken kirke ordinerer IKKE kvinner som prester?", [("Den norske kirke", False), ("Den katolske kirken", True), ("Svenske kyrkan", False), ("De fleste norske menigheter", False)],
  "Den katolske kirken (og de ortodokse kirkene) ordinerer ikke kvinner, mens Den norske kirke har gjort det siden 1961."),
 ("Når fikk Den norske kirke sin første kvinnelige prest?", [("I 1517", False), ("I 1961", True), ("I 2017", False), ("I 1814", False)],
  "Den norske kirke fikk sin første kvinnelige prest i 1961 og sin første kvinnelige biskop i 1993."),
]),

("text", """## Ekteskap, samliv og LHBT+

Det mest opphetede temaet i kristendommen i dag er kanskje LHBT+-personers plass i kirken. **LHBT+** står for lesbiske, homofile, bifile, transpersoner og andre, og spørsmålet splitter kirker over hele verden. De med et **konservativt syn** mener Bibelen er tydelig på at seksuelt samliv hører hjemme i ekteskapet mellom mann og kvinne, og viser til tekster som 3. Mosebok 18,22 og Romerbrevet 1,26--27. De mener homofile personer skal møtes med respekt og kjærlighet, men at handlingen er synd; noen mener homofile bør leve i sølibat. De med et **progressivt syn** mener disse tekstene må leses i sin historiske kontekst -- Bibelens forfattere kjente ikke til det vi i dag forstår som en varig seksuell legning -- og at Jesu budskap om kjærlighet og likeverd støtter full aksept. Noen inntar **mellomposisjoner**, for eksempel ved å være personlig konservative, men akseptere at andre tolker annerledes.

Synet på **ekteskap** følger samme linje. Tradisjonelt er ekteskapet en pakt mellom én mann og én kvinne, innstiftet av Gud, og rammen for seksuelt samliv. Den katolske kirken regner det som et sakrament og tillater ikke skilsmisse (men annullering er mulig). Et mer liberalt syn legger vekt på kjærlighet, respekt og troskap, uavhengig av kjønn og av om paret er gift. Om skilsmisse uttalte Jesus seg kritisk -- «Det Gud har sammenføyd, skal mennesker ikke skille» -- men de fleste protestantiske kirker aksepterer det som en smertefull, noen ganger nødvendig utvei.

I Norge vedtok Den norske kirke i 2017 en ny vigselsliturgi som gjør det mulig å vie likekjønnede par, men vedtaket var omstridt, og enkeltprester kan reservere seg. Flere frikirkelige trossamfunn holder fast ved et tradisjonelt syn. Spørsmålene skaper også store spenninger globalt: mange kirker i sør reagerer sterkt mot vestlige kirkers aksept av likekjønnet ekteskap, noe som har truet med å splitte kirkesamfunn som den anglikanske kommunionen."""),

("quiz", "Test deg selv på ekteskap og LHBT+:", [
 ("Hva mener kristne med et progressivt syn på LHBT+-spørsmål?", [("At homofile bør utestenges fra kirken", False), ("At Bibelens tekster må leses i sin kontekst, og at kjærlige likeverdige forhold er forenlige med evangeliet", True), ("At ekteskap er forbudt", False), ("At bare paven kan avgjøre saken", False)],
  "Progressive kristne mener bibeltekstene må forstås i sin historiske sammenheng og at Jesu budskap om kjærlighet og likeverd støtter aksept av LHBT+-personer."),
 ("Hva vedtok Den norske kirke i 2017?", [("At kvinner ikke lenger kan bli prester", False), ("En vigselsliturgi som gjør det mulig å vie likekjønnede par", True), ("Å bryte med staten", False), ("Å forby skilsmisse", False)],
  "I 2017 vedtok Den norske kirke en ny vigselsliturgi som åpner for å vie likekjønnede par, men enkeltprester kan reservere seg."),
 ("Hvorfor skaper disse spørsmålene global spenning?", [("Fordi alle kirker er enige", False), ("Fordi mange kirker i sør har et mer konservativt syn enn mange vestlige kirker", True), ("Fordi Bibelen ikke nevner ekteskap", False), ("Fordi temaet ikke angår noen", False)],
  "Mange kirker i det globale sør har et mer konservativt syn og reagerer mot vestlige kirkers aksept av likekjønnet ekteskap, noe som truer med splittelse i flere kirkesamfunn."),
]),

("summary", """## Oppsummering

Spørsmål om kjønn og seksualitet er blant de mest debatterte i kristendommen i dag, og alle parter begrunner sine syn med Bibelen og tradisjonen. Når det gjelder kjønnsroller, står komplementarisme (ulike, men likeverdige roller) mot egalitarisme (full likestilling). Den katolske og ortodokse kirken forbeholder presteskapet for menn, mens Den norske kirke og mange protestantiske kirker ordinerer kvinner.

Når det gjelder LHBT+, mener konservative kristne at seksuelt samliv hører hjemme i ekteskapet mellom mann og kvinne, mens progressive mener at kjærlige, likeverdige forhold mellom personer av samme kjønn er forenlige med evangeliet. Den norske kirke rommer begge syn. Disse spørsmålene skaper spenning mellom kirker i nord og sør. Det viktigste å forstå er at det finnes ærlige, gjennomtenkte standpunkter på alle sider av debatten."""),
])

print(f"\nBATCH1 TOTAL: {T} quizzes, {Q} questions")
