## Kapittel 8.1: Modellering med funksjoner

### Del 1: Nar matematikken moter virkeligheten

Tenk deg at du sitter pa en kafe og ser pa den dampende koppen foran deg. Kaffen er brennheit akkurat na, men om en halvtime er den lunken. Finnes det en formel som beskriver akkurat hvordan temperaturen synker? Svaret er ja, og den formelen er det vi kaller en matematisk modell.

En matematisk modell er rett og slett en forenklet beskrivelse av noe virkelig, uttrykt gjennom matematikk. Vi kan modellere alt fra hvordan en ball beveger seg gjennom luften til hvordan prisene i en butikk avhenger av tilbud og ettersporsel. Nokkelordet her er "forenklet". Modellen for ballens bane ignorerer kanskje luftmotstand. Modellen for kaffetemperaturen antar at romtemperaturen er konstant. Ingen modell fanger opp absolutt alt, men en god modell fanger opp det som betyr mest.

I dette kapittelet skal vi utforske hele modelleringsprosessen, fra a observere et fenomen og velge variabler, via a sette opp en funksjon som passer, til a vurdere om modellen faktisk gir mening. Vi skal se at ulike situasjoner krever ulike funksjonstyper, og at det a velge riktig type er en av de viktigste ferdighetene i modellering.

Matematisk modellering er ikke noe du gjor i ett hopp. Det er en prosess med flere steg, og den er ofte iterativ, du gar gjerne tilbake og justerer underveis. La oss ga gjennom de fem stegene.

Forst observerer du situasjonen. Du studerer fenomenet, samler inn data og prover a forsta hva som skjer. Kanskje du maler temperaturen i kaffekoppen hvert femte minutt, eller kanskje du samler inn tall for befolkningen i en by over flere ar.

Deretter identifiserer du variablene. Hva er storrelsene som endrer seg? Hvilken er den uavhengige variabelen, den du styrer, for eksempel tid, og hvilken er den avhengige variabelen, den som endrer seg som folge, for eksempel temperatur? A velge riktige variabler er halve jobben.

Sa setter du opp en modell. Her velger du en funksjonstype og bestemmer parametrene. Gar temperaturen jevnt nedover? Da kan en lineaer funksjon f av X [EQ] a X pluss b passe. Synker den raskt i starten og sa saktere? Da trenger du kanskje en eksponentiell funksjon f av X [EQ] a ganger b opphøyd i X. Folger banen en bue? Prov en kvadratisk funksjon f av X [EQ] a X i andre pluss b X pluss c. Avhenger den ene storrelsen av en potens av den andre? Da er det en potensfunksjon f av X [EQ] a ganger X opphøyd i b du er ute etter.

Neste steg er a teste modellen mot faktiske data. Gir modellen verdier som stemmer med det du har observert? Hvis ikke, ma du ga tilbake og justere.

Til slutt vurderer du modellen. Er den god nok? Hvor gjelder den? Hva er begrensningene? Disse sporsmalene er avgjorende, og vi kommer tilbake til dem gjennom hele kapittelet.

... Slutt pa del 1. ...

### Del 2: Fra virkelighet til funksjon

La oss begynne med det enkleste tilfellet. En taxitur koster 50 kroner i startpris pluss 12 kroner per kilometer. Hva koster en tur pa X kilometer? Her er den uavhengige variabelen X, antall kilometer, og den avhengige er prisen P av X. Sammenhengen er tydelig lineaer: P av X [EQ] 12 X pluss 50. For 15 kilometer betaler du P av 15 [EQ] 12 ganger 15 pluss 50 [EQ] 230 kroner.

Men ikke alt i livet er rett-linje-enkelt. Tenk deg en bonde som har 80 meter gjerde og vil lage et rektangulaert innhegnet omrade langs en elv. Elven er den ene langsiden, sa gjerdet brukes bare pa tre sider. Hvis bredden er X meter, blir lengden 80 minus 2 X meter, fordi to bredder pluss en lengde skal gi 80 meter totalt. Arealet blir A av X [EQ] X ganger startparentes 80 minus 2 X sluttparentes [EQ] 80 X minus 2 X i andre.

Denne modellen er en andregradsfunksjon med a [EQ] minus 2 er mindre enn 0, altsa en parabel som peker nedover. Den har et toppunkt, og det er nettopp det vi er interessert i, for det gir oss det storst mulige arealet. Toppunktet finner vi med formelen X [EQ] minus b delt pa 2 a [EQ] minus 80 delt pa 2 ganger startparentes minus 2 sluttparentes [EQ] 20. Med bredde 20 meter blir lengden 80 minus 40 [EQ] 40 meter, og arealet blir 20 ganger 40 [EQ] 800 kvadratmeter.

Legg merke til noe viktig: modellen gjelder bare for 0 er mindre enn X er mindre enn 40. Utenfor dette intervallet gir modellen negative arealer, noe som apenbart ikke gir mening. Alle modeller har et gyldighetsomrade, et intervall der de gir fornuftige resultater.

... Slutt pa del 2. ...

### Del 3: Eksponentielle modeller

Na beveger vi oss til et helt annet monster. Forestill deg en by med 25 000 innbyggere i 2010 som vokser med 2 komma 5 prosent per ar. Etter ett ar er det 25 000 ganger 1 komma 025 innbyggere. Etter to ar ganger vi med 1 komma 025 en gang til: 25 000 ganger 1 komma 025 i andre. Etter t ar blir modellen B av t [EQ] 25 000 ganger 1 komma 025 opphøyd i t.

Det er dette som kjennetegner en eksponentiell modell: den variabelen vi er interessert i multipliseres med en fast vekstfaktor i hvert steg. Nar vekstfaktoren er storre enn 1, som her med 1 komma 025, vokser funksjonen. Nar den er mellom 0 og 1, avtar den, tenk pa radioaktivt henfall eller temperaturen i kaffekoppen var.

La oss bruke modellen. I 2020, t [EQ] 10, gir den B av 10 [EQ] 25 000 ganger 1 komma 025 opphøyd i 10 er omtrent lik 32 003 innbyggere. Hva med 2050, t [EQ] 40? Da gir modellen B av 40 [EQ] 25 000 ganger 1 komma 025 opphøyd i 40 er omtrent lik 67 126.

Men her ma vi stoppe opp og tenke. Anslaget for 2020 er basert pa data som er noksa naer i tid, det er rimelig a anta at vekstraten har holdt seg ganske stabil over 10 ar. Men anslaget for 2050 er 40 ar frem i tid! Vekstraten kan endre seg dramatisk pa grunn av politikk, okonomi eller migrasjon. Jo lenger vi strekker modellen utover der vi har data, desto mer usikker blir den.

Eksponentiell vekst er kraftig. Selv en tilsynelatende lav vekstrate pa 2 komma 5 prosent forer til en dobling pa under 30 ar. Derfor er det spesielt viktig a vaere forsiktig med a stole blindt pa eksponentielle modeller over lang tid.

... Slutt pa del 3. ...

### Del 4: Interpolering og ekstrapolering

Na som vi har sett ulike modelltyper, er det pa tide a snakke om noe helt sentralt: forskjellen mellom interpolering og ekstrapolering.

Interpolering betyr at du bruker modellen til a ansla verdier mellom datapunktene du allerede har. Tenk deg at du har malt temperaturen i kaffekoppen etter 0, 5, 10 og 15 minutter. Hvis du bruker modellen til a ansla temperaturen etter 7 minutter, driver du med interpolering. Du befinner deg innenfor omradet der modellen har blitt "trent", og anslaget er som regel ganske palitelig.

Ekstrapolering betyr at du bruker modellen utenfor dataomradet, for eksempel til a ansla temperaturen etter 60 minutter, eller befolkningen i 2050 basert pa data fra 2010 til 2020. Her er vi pa tynnere is. Modellen ble laget for a passe til data i et bestemt omrade, og vi vet rett og slett ikke om den gjelder utenfor.

Et godt eksempel: tenk pa elbil-utviklingen i Norge. Fra 2015 til 2021 vokste antall elbiler fra 70 000 til 450 000. En eksponentiell modell med vekstfaktor 1 komma 364 passer ganske godt til disse dataene. Men hvis vi ekstrapolerer til 2030, gir modellen 5 komma 6 millioner elbiler, mer enn Norges befolkning! Apenbart kan ikke veksten fortsette eksponentielt for alltid. Markedet vil mettes, og veksten vil avta.

Tommelregelen er enkel: vaer forsiktig med ekstrapolering, og jo lenger du ekstrapolerer, desto mer skeptisk bor du vaere.

... Slutt pa del 4. ...

### Del 5: Modellering i praksis

La oss avslutte med et eksempel som viser kraften i modellering. En nettbutikk selger et produkt til p kroner per stykk. Erfaringen viser at de selger 1200 minus 4 p produkter per maned. Produksjonskostnaden er 80 kroner per enhet, og de faste kostnadene er 15 000 kroner per maned.

Vi setter opp modeller for det hele. Inntekten er pris ganger antall solgte: I av p [EQ] p ganger startparentes 1200 minus 4 p sluttparentes [EQ] 1200 p minus 4 p i andre. Kostnadene er variable kostnader pluss faste: K av p [EQ] 80 ganger startparentes 1200 minus 4 p sluttparentes pluss 15 000 [EQ] 111 000 minus 320 p. Overskuddet er inntekt minus kostnader: O av p [EQ] minus 4 p i andre pluss 1520 p minus 111 000.

Fordi overskuddet er en andregradsfunksjon med negativ a-verdi, har den et toppunkt, og det er den prisen som gir storst fortjeneste. Toppunktet finner vi: p [EQ] minus 1520 delt pa 2 ganger startparentes minus 4 sluttparentes [EQ] 190 kroner. Det maksimale overskuddet blir O av 190 [EQ] 33 400 kroner per maned.

Matematisk modellering handler altsa ikke bare om a beskrive hva som skjer, men om a ta bedre beslutninger. Men husk alltid: modellen er en forenkling. I virkeligheten kan ettersportelen avhenge av mer enn bare prisen. Konkurrenter, sesongvariasjoner og markedsforing spiller ogsa inn. Modellen gir et godt utgangspunkt for beslutningen, men den erstatter ikke sunn fornuft.

Still deg alltid disse sporsmalene nar du modellerer: Gir modellen fornuftige verdier for ekstreme input? Er det naturlige begrensninger den ignorerer? Og hva skjer dersom vi bruker den langt utenfor datapunktene?

... Slutt pa del 5. ...

### Del 6: Oppsummering

En matematisk modell er en forenklet matematisk beskrivelse av en virkelig situasjon. Den bruker variabler og funksjoner til a fange opp det som er viktigst, men den er aldri perfekt.

Modelleringsprosessen har fem steg: observere, identifisere variabler, sette opp modellen, teste den mot data, og vurdere om den gir fornuftige resultater. Prosessen er gjerne iterativ, du justerer modellen underveis. Ulike situasjoner krever ulike funksjonstyper: lineaere funksjoner for jevn vekst, kvadratiske for buede baner og optimeringsproblemer, eksponentielle for prosentvis vekst, og potensfunksjoner for sammenhenger der den ene storrelsen er en potens av den andre.

Interpolering er a ansla verdier mellom kjente datapunkter og er generelt palitelig. Ekstrapolering er a ansla verdier utenfor dataomradet og er langt mer usikkert, jo lenger ut, desto mer usikkert. Alle modeller har et gyldighetsomrade, og du bor alltid vurdere kritisk om modellen gir fornuftige resultater der du bruker den.

... Slutt pa del 6. ...

---

## Kapittel 8.2: Potensfunksjoner

### Del 1: En funksjonsfamilie med mange ansikter

Du har allerede mott funksjoner som f av X [EQ] X i andre og f av X [EQ] X i tredje. Grafene deres er velkjente, den forste er en parabel, den andre en brattere S-formet kurve. Men visste du at disse bare er to medlemmer av en mye storre familie? De tilhorer alle potensfunksjonene, og i dette kapittelet skal vi bli kjent med hele familien.

En potensfunksjon har formen f av X [EQ] a ganger X opphøyd i b, der a og b er konstanter. Det som gjor den til en potensfunksjon er at den uavhengige variabelen X star i grunntallet, mens eksponenten b er en fast verdi. Pass pa at du ikke forveksler dette med eksponentialfunksjoner der X star i eksponenten, altsa g av X [EQ] a ganger b opphøyd i X. Det er en avgjorende forskjell.

Vi kaller a for koeffisienten og b for eksponenten. Disse to tallene bestemmer fullstendig hvordan funksjonen oppforer seg, og som vi skal se, gir ulike verdier av b helt ulike former pa grafen.

La oss ta en systematisk titt pa hva som skjer med grafen til f av X [EQ] a ganger X opphøyd i b for ulike verdier av b. Vi antar a er storre enn 0 og X er storre enn 0.

Nar b er storre enn 1 er funksjonen voksende og konveks, den buer oppover. Tenk pa f av X [EQ] X i andre eller f av X [EQ] X i tredje. Jo storre b er, desto brattere vokser funksjonen for store X-verdier. Grafen starter flatt naer origo og lofter seg raskt.

Nar 0 er mindre enn b er mindre enn 1 skjer noe interessant: funksjonen er fortsatt voksende, men den er konkav, den buer nedover. Funksjonen vokser raskt i starten, men stadig saktere. Et eksempel er f av X [EQ] kvadratroten av X [EQ] X opphøyd i en halv. Du kan tenke pa det som en graf som "flater ut" etter hvert.

Nar b er mindre enn 0 er funksjonen avtagende. Eksempler er f av X [EQ] 1 delt pa X [EQ] X opphøyd i minus 1 og f av X [EQ] 1 delt pa X i andre [EQ] X opphøyd i minus 2. Nar X oker, kryper funksjonsverdien naermere og naermere null, men den nar aldri helt dit.

Spesialtilfellet b [EQ] 1 gir den lineaere funksjonen f av X [EQ] a X, en rett linje gjennom origo. Og b [EQ] 0 gir den konstante funksjonen f av X [EQ] a, fordi X opphøyd i 0 [EQ] 1 for alle X som er ulik 0.

En nyttig egenskap: alle potensfunksjoner med a storre enn 0 passerer gjennom punktet startparentes 1, a sluttparentes, fordi f av 1 [EQ] a ganger 1 opphøyd i b [EQ] a uansett hva b er.

... Slutt pa del 1. ...

### Del 2: Potensfunksjoner i fysikken

Fysikken er full av potensfunksjoner, og et av de enkleste eksemplene er fritt fall. Nar du slipper en gjenstand, og ser bort fra luftmotstand, er strekningen den faller gitt ved s av t [EQ] en halv ganger g ganger t i andre, der g er omtrent lik 9 komma 81 meter per sekund i andre, som er tyngdeakselerasjonen. Vi kan skrive dette som s av t [EQ] 4 komma 905 ganger t i andre, en potensfunksjon med a [EQ] 4 komma 905 og b [EQ] 2.

La oss beregne: etter 1 sekund har gjenstanden falt s av 1 [EQ] 4 komma 9 meter. Etter 2 sekunder: s av 2 [EQ] 4 komma 905 ganger 4 [EQ] 19 komma 6 meter. Etter 3 sekunder: s av 3 [EQ] 4 komma 905 ganger 9 [EQ] 44 komma 1 meter. Og etter 4 sekunder: s av 4 [EQ] 4 komma 905 ganger 16 [EQ] 78 komma 5 meter.

Ser du monsteret? Strekningen oker stadig raskere. I det forste sekundet faller gjenstanden knapt 5 meter, men i det fjerde sekundet faller den over 34 meter. Det er typisk for en potensfunksjon med b [EQ] 2: verdiene akselererer. Dobler du tiden, firedobles strekningen, fordi 2 i andre [EQ] 4. Tredobler du tiden, nidobles strekningen, fordi 3 i andre [EQ] 9.

Denne egenskapen er generell. For en potensfunksjon f av X [EQ] a ganger X opphøyd i b gjelder det at dersom du ganger X med en faktor k, ganges funksjonsverdien med k opphøyd i b. For eksempel: dobler vi radius i en sirkel, b [EQ] 2 for arealet, firedobles arealet. Tredobler vi sidelengden i en kube, b [EQ] 3 for volumet, 27-dobles volumet.

... Slutt pa del 2. ...

### Del 3: Keplers tredje lov

En av de mest elegante potensfunksjonene i naturen finner vi i astronomi. Johannes Kepler oppdaget pa 1600-tallet at omlopstiden T for en planet rundt solen henger sammen med gjennomsnittsavstanden r ved formelen T [EQ] r opphøyd i 3 delt pa 2, nar vi maler T i ar og r i astronomiske enheter, AU.

La oss teste dette pa Mars, som har en gjennomsnittsavstand pa 1 komma 52 AU fra solen. Vi beregner T [EQ] 1 komma 52 opphøyd i 3 delt pa 2. For a gjore dette tar vi forst 1 komma 52 i tredje [EQ] 1 komma 52 ganger 1 komma 52 ganger 1 komma 52 [EQ] 3 komma 512, og sa tar vi kvadratroten: T [EQ] kvadratroten av 3 komma 512 er omtrent lik 1 komma 87 ar. Den faktiske verdien er 1 komma 88 ar, modellen stemmer nesten perfekt.

Legg merke til at eksponenten her er b [EQ] 3 delt pa 2, altsa mellom 1 og 2. Det betyr at omlopstiden vokser raskere enn lineaert med avstanden, men ikke sa raskt som ved kvadratisk vekst. Planeter som er dobbelt sa langt unna solen bruker 2 opphøyd i 3 delt pa 2 [EQ] 2 ganger kvadratroten av 2 er omtrent lik 2 komma 83 ganger sa lang tid, ikke dobbelt, men heller ikke fire ganger.

Dette viser noe vakkert med potensfunksjoner: naturen "velger" ofte en bestemt eksponent som uttrykker den fysiske lovmessigheten. Eksponenten 3 delt pa 2 i Keplers lov er ikke tilfeldig, den folger direkte fra gravitasjonsloven. Nar du finner eksponenten i en potensfunksjon, finner du ofte nokkelen til a forsta mekanismen bak fenomenet.

... Slutt pa del 3. ...

### Del 4: A bestemme en potensfunksjon fra to punkter

I praksis vet vi ikke alltid hva a og b er, vi ma finne dem fra data. Hvis vi kjenner to punkter pa grafen, kan vi bestemme begge konstantene.

La oss si at grafen til f av X [EQ] a ganger X opphøyd i b gar gjennom startparentes 2, 12 sluttparentes og startparentes 5, 75 sluttparentes. Vi setter opp to likninger: 12 [EQ] a ganger 2 opphøyd i b og 75 [EQ] a ganger 5 opphøyd i b. Na kommer trikset: vi deler den ene likningen pa den andre for a eliminere a.

75 delt pa 12 [EQ] a ganger 5 opphøyd i b delt pa a ganger 2 opphøyd i b [EQ] startparentes 5 delt pa 2 sluttparentes opphøyd i b

Vi far 6 komma 25 [EQ] 2 komma 5 opphøyd i b. For a lose dette bruker vi logaritmer: b [EQ] den naturlige logaritmen av 6 komma 25 delt pa den naturlige logaritmen av 2 komma 5 [EQ] 1 komma 8326 delt pa 0 komma 9163 [EQ] 2. Deretter finner vi a fra den forste likningen: 12 [EQ] a ganger 2 i andre [EQ] 4 a, altsa a [EQ] 3. Funksjonen er f av X [EQ] 3 X i andre, og vi kan kontrollere: f av 5 [EQ] 3 ganger 25 [EQ] 75. Stemmer!

Pendelen er et annet godt eksempel. Svingetiden for en pendel er gitt ved T [EQ] 2 pi ganger kvadratroten av L delt pa g, som vi kan skrive som T er omtrent lik 2 komma 006 ganger L opphøyd i en halv. Her er a er omtrent lik 2 komma 006 og b [EQ] en halv. En pendel pa 1 meter har svingetid pa omtrent 2 sekunder. Skal pendelen ha svingetid pa noyaktig 1 sekund, loser vi 1 [EQ] 2 komma 006 ganger L opphøyd i en halv, som gir L er omtrent lik 0 komma 249 meter, altsa omtrent 25 centimeter.

... Slutt pa del 4. ...

### Del 5: Potensfunksjon eller eksponentialfunksjon?

Et sporsmal som dukker opp ofte er: hvordan vet du om du har a gjore med en potensfunksjon f av X [EQ] a ganger X opphøyd i b eller en eksponentialfunksjon g av X [EQ] a ganger b opphøyd i X? De kan jo begge beskrive vekst.

Den viktigste forskjellen ligger i vekstmonsteret. I en eksponentialfunksjon vokser verdien med en fast prosent i hvert steg. Antall bakterier som dobles hver time, penger pa en sparekonto med rentes rente, radioaktivt henfall, alt dette er eksponentiell vekst. Den underliggende mekanismen er prosentvis endring.

I en potensfunksjon er sammenhengen at den ene storrelsen er proporsjonal med en potens av den andre. Arealet av en sirkel er proporsjonalt med r i andre. Volumet av en kube er proporsjonalt med s i tredje. Svingetiden til en pendel er proporsjonal med L opphøyd i en halv. Mekanismen handler om geometriske eller fysiske skaleringslover.

En praktisk tommelfingerregel: for svaert store X-verdier vil en eksponentialfunksjon, med b storre enn 1, alltid vokse raskere enn en potensfunksjon, uansett hvor stor eksponenten er. Selv 2 opphøyd i X vokser til slutt raskere enn X opphøyd i 100. Det tar bare litt tid.

Et siste skille: potensfunksjoner med heltallseksponent har alltid startparentes 0, 0 sluttparentes som et punkt pa grafen, for b storre enn 0, mens eksponentialfunksjoner alltid har startparentes 0, a sluttparentes som skjaeringspunkt med y-aksen. Det kan hjelpe deg a gjenkjenne dem visuelt.

... Slutt pa del 5. ...

### Del 6: Oppsummering

En potensfunksjon har formen f av X [EQ] a ganger X opphøyd i b, der a er koeffisienten og b er eksponenten. Variabelen X star i grunntallet, til forskjell fra eksponentialfunksjoner der X star i eksponenten.

Eksponentens verdi bestemmer grafens form: for b storre enn 1 er funksjonen voksende og konveks, for 0 er mindre enn b er mindre enn 1 er den voksende men konkav og flater ut, og for b er mindre enn 0 er den avtagende. En sentral egenskap er at dersom du ganger X med en faktor k, ganges funksjonsverdien med k opphøyd i b. Dette forklarer hvorfor dobling av radius firedobler arealet, b [EQ] 2, og tredobling av sidelengden 27-dobler volumet, b [EQ] 3.

Potensfunksjoner dukker opp i fysiske lover som fritt fall, Keplers lov og pendelbevegelse, geometri som areal og volum, og biologi med skaleringslover. De skiller seg fra eksponentialfunksjoner ved at de beskriver proporsjonal sammenheng med en potens, mens eksponentialfunksjoner beskriver prosentvis vekst. For store verdier vil eksponentialfunksjoner alltid vokse raskere enn potensfunksjoner.

... Slutt pa del 6. ...

---

## Kapittel 8.3: Lineaer regresjon

### Del 1: Fra prikker til linjer

I forrige kapittel satte vi opp modeller basert pa kunnskap om situasjonen, vi visste at en taxi hadde fast startpris pluss en kilometerpris, og vi satte opp funksjonen direkte. Men i mange tilfeller starter vi fra den andre enden: vi har et knippe datapunkter, og vi leter etter en funksjon som passer.

Tenk deg at du driver en iskremkiosk og har notert daglig temperatur og antall solgte is i en uke. Du plotter punktene i et koordinatsystem, et spredningsdiagram, og ser at de danner et monster som stiger fra venstre til hoyre. Det ser ut som det kunne vaert en rett linje der. Men hvilken linje? Det finnes uendelig mange rette linjer du kan tegne gjennom en sky av punkter. Vi trenger en metode for a finne den beste.

Det er akkurat det lineaer regresjon gir oss: en systematisk metode for a finne den rette linjen y [EQ] a X pluss b som passer best til et sett med datapunkter. I dette kapittelet skal vi laere hvordan metoden fungerer, hva den forteller oss, og like viktig, hva den ikke forteller oss.

Hva mener vi egentlig med "den beste" linjen? Svaret ligger i minste kvadraters metode. Ideen er elegant: for hvert datapunkt beregner vi den vertikale avstanden mellom punktet og linjen. Denne avstanden kalles et residual: e-i [EQ] y-i minus startparentes a ganger x-i pluss b sluttparentes.

Noen residualer er positive, punktet ligger over linjen, og noen er negative, punktet ligger under. Hvis vi bare summerte dem, ville positive og negative avvik oppheve hverandre, og vi ville ikke fatt et godt mal. Derfor kvadrerer vi hvert residual og summerer: S [EQ] summen av e-i i andre. Den linjen som gir den minste summen av kvadrerte avvik er regresjonslinjen.

Kvadreringen har enda en fordel: store avvik straffes ekstra hardt. Et punkt som ligger 4 enheter fra linjen bidrar med 16 til summen, mens et punkt som ligger 2 enheter fra linjen bare bidrar med 4. Dermed "prover" linjen ekstra hardt a unnga store bom.

Du trenger ikke gjore beregningene for hand, GeoGebra gjor det med kommandoen RegLin av liste. Men det er viktig a forsta prinsippet: regresjonslinjen er den linjen som minimerer summen av de kvadrerte vertikale avstandene. Etter at du har funnet linjen, bor du se pa residualene. Dersom de er jevnt spredt rundt null uten noe systematisk monster, passer den lineaere modellen godt. Viser de derimot et buet monster, trenger du kanskje en annen funksjonstype.

... Slutt pa del 1. ...

### Del 2: Et eksempel, issalg og temperatur

La oss se dette i praksis. Iskremkiosken var har registrert folgende data gjennom en uke: ved 15 grader solgte de 48 is, ved 18 grader 56 is, ved 21 grader 70 is, ved 24 grader 82 is, ved 27 grader 95 is, ved 30 grader 112 is, og ved 33 grader 120 is.

I GeoGebra skriver vi datapunktene som en liste og bruker RegLin-kommandoen. Resultatet blir omtrent y [EQ] 4 komma 1 X minus 15 komma 4. Na kan vi tolke dette.

Stigningstallet a er omtrent lik 4 komma 1 forteller oss at for hver grad temperaturen oker, selges det i gjennomsnitt 4 komma 1 flere is. Det er den praktiske betydningen av stigningstallet, det er endringsraten.

Konstantleddet b er omtrent lik minus 15 komma 4 er mer problematisk. Matematisk sier det at ved 0 grader ville modellen forutsi minus 15 komma 4 is. Men du kan ikke selge minus femten is! Det betyr ikke at modellen er darlig, det betyr bare at den ikke er ment for sa lave temperaturer. Modellen passer best i intervallet der vi faktisk har data, altsa fra 15 til 33 grader.

Skal vi ansla issalget ved 25 grader? Det er interpolering, 25 ligger mellom 24 og 27, og vi far y [EQ] 4 komma 1 ganger 25 minus 15 komma 4 [EQ] 87, altsa omtrent 87 is. Et rimelig anslag. Hva med 40 grader? Da ekstrapolerer vi, 40 er utenfor dataomradet, og anslaget blir mer usikkert.

... Slutt pa del 2. ...

### Del 3: Korrelasjonskoeffisienten r

Vi har funnet regresjonslinjen, men hvor godt passer den egentlig? Her kommer korrelasjonskoeffisienten r inn i bildet. Den er et tall mellom minus 1 og 1 som maler styrken og retningen pa den lineaere sammenhengen.

Dersom r [EQ] 1 ligger alle punktene noyaktig pa en linje med positiv stigning, perfekt positiv korrelasjon. Dersom r [EQ] minus 1 ligger de noyaktig pa en linje med negativ stigning, perfekt negativ korrelasjon. Og dersom r [EQ] 0 er det ingen lineaer sammenheng overhodet, punktene er tilfeldig spredt.

I praksis er vi sjelden sa heldige at r er noyaktig pluss minus 1 eller 0. Som tommelregel regner vi absoluttverdien av r storre enn 0 komma 8 som sterk korrelasjon, 0 komma 5 er mindre enn absoluttverdien av r er mindre enn 0 komma 8 som moderat, og absoluttverdien av r er mindre enn 0 komma 5 som svak.

La oss ta et eksempel. Atte elever rapporterte antall timer brukt pa lekser per uke og poengsummen pa en prove. I GeoGebra finner vi regresjonslinjen y er omtrent lik 6 komma 5 X pluss 21 komma 5 og r er omtrent lik 0 komma 997. Verdien r [EQ] 0 komma 997 er svaert naer 1, altsa en sterk positiv korrelasjon, mer leksetid henger sammen med hoyere poengsum.

Men betyr det at leksetid forarsaker bedre poengsum? Ikke nodvendigvis. Kanskje er det motiverte elever som bade leser mye og gjor det godt, uten at det ene forarsaker det andre. Vi trenger a snakke om forskjellen mellom korrelasjon og kausalitet.

... Slutt pa del 3. ...

### Del 4: Korrelasjon er IKKE kausalitet

Dette er kanskje den viktigste leksjonen i hele statistikken, og den kan ikke gjentas for ofte: korrelasjon betyr ikke kausalitet. Bare fordi to variabler beveger seg sammen, betyr det ikke at den ene forarsaker den andre.

Her er et berømt eksempel: det er sterk positiv korrelasjon mellom issalg og antall drukningsulykker. Betyr det at is forarsaker drukning? Selvfolgelig ikke. Begge variablene pavirkes av en tredje faktor, varmt vaer. Nar det er varmt, kjoper folk mer is og flere bader. Den tredje variabelen som pavirker begge de andre kalles en konfunderende variabel.

Et annet eksempel: det finnes sterk korrelasjon mellom antall brannstasjoner i en by og antall kriminalitetssaker. Flere brannstasjoner forer altsa til mer kriminalitet? Nei, begge er konsekvenser av byens storrelse. Storre byer har flere brannstasjoner og flere kriminalitetssaker.

Hva skal til for a pavise kausalitet? Det krever kontrollerte eksperimenter der du endrer en variabel og holder alt annet konstant, eller avanserte statistiske metoder som kontrollerer for konfunderende variabler. En enkel regresjonsanalyse med to variabler kan aldri alene bevise arsakssammenheng.

Neste gang du leser en nyhetsartikkel som sier "Studie viser sammenheng mellom X og Y", tenk deg om: er det korrelasjon eller kausalitet? Hva kan vaere konfunderende variabler?

... Slutt pa del 4. ...

### Del 5: Prediksjon med regresjonslinjen

Nar vi har funnet regresjonslinjen og vurdert at korrelasjonen er sterk nok, kan vi bruke modellen til a lage forutsigelser, men med klokskap.

Ta eksempelet med leksetid og provepoeng: y [EQ] 6 komma 5 X pluss 21 komma 5 med r [EQ] 0 komma 997. Dataene gar fra X [EQ] 2 til X [EQ] 10 timer. Hva forventer vi for en elev som leser 9 timer per uke? y [EQ] 6 komma 5 ganger 9 pluss 21 komma 5 [EQ] 80 poeng. Siden 9 ligger mellom datapunktene 8 og 10, er dette interpolering, og med r sa naer 1 er anslaget ganske palitelig.

Men hva med 20 timer? y [EQ] 6 komma 5 ganger 20 pluss 21 komma 5 [EQ] 151 komma 5 poeng. Hvis proven har maks 100 poeng, er dette apenbart umulig. Vi har ekstrapolert langt utenfor dataomradet, og modellen bryter sammen.

Det er ogsa viktig a huske at selv med sterk korrelasjon er regresjonslinjen bare et gjennomsnittlig monster. Enkeltpersoner kan avvike betydelig. En elev som leser 5 timer kan score 80 poeng, langt over linjen, mens en annen som leser 8 timer kan score 60, under linjen. Modellen beskriver trenden, ikke individer.

Nar du bruker GeoGebra, folg disse stegene: opprett en liste med datapunkter, bruk RegLin av liste for a finne linjen, sjekk r-verdien for a vurdere styrken, og vurder alltid om du interpolerer eller ekstrapolerer for du stoler pa resultatet.

... Slutt pa del 5. ...

### Del 6: Oppsummering

Lineaer regresjon er en metode for a finne den rette linjen y [EQ] a X pluss b som passer best til et sett med datapunkter. Den bruker minste kvadraters metode: linjen som minimerer summen av de kvadrerte vertikale avstandene, residualene, mellom punktene og linjen.

Korrelasjonskoeffisienten r maler styrken og retningen pa den lineaere sammenhengen. Verdien ligger mellom minus 1 og 1: sterk korrelasjon for absoluttverdien av r storre enn 0 komma 8, moderat for 0 komma 5 er mindre enn absoluttverdien av r er mindre enn 0 komma 8, og svak for absoluttverdien av r er mindre enn 0 komma 5. Stigningstallet i regresjonslinjen forteller oss hvor mye y i gjennomsnitt endrer seg per enhet endring i X.

Korrelasjon betyr ikke kausalitet. To variabler kan korrelere sterkt uten at den ene forarsaker den andre, ofte fordi begge pavirkes av en konfunderende variabel. Vaer alltid skeptisk til arsakslutninger basert pa ren korrelasjon. Og bruk regresjonslinjen forsiktig: interpolering er generelt palitelig, men ekstrapolering kan gi urealistiske resultater.

... Slutt pa del 6. ...

---

## Kapittel 8.4: Ikke-lineaer regresjon

### Del 1: Nar den rette linjen svikter

I forrige kapittel laerte vi a dra en rett linje gjennom en sky av punkter. Men hva gjor vi nar punktene tydelig ikke folger en rett linje? Hvis du plotter dataene og ser en kurve, en bue oppover, en eksponentiell stigning, eller en utflating, da er det pa tide a hente frem andre verktoy.

Tenk deg at du studerer hvordan en bakteriekultur vokser over tid. De forste timene er veksten moderat, men sa eksploderer den. En rett linje ville bomme grovt, den ville underestimere i starten og slutten, og overestimere i midten. Residualene ville vise et tydelig buet monster, som er et klart signal om at vi trenger en annen modell.

I dette kapittelet skal vi utforske tre typer ikke-lineaer regresjon: polynomregresjon, tilpasse en andregradskurve eller lignende, eksponentialregresjon, tilpasse funksjoner pa formen y [EQ] a ganger b opphøyd i X, og potensregresjon, tilpasse funksjoner pa formen y [EQ] a ganger X opphøyd i b. Vi skal ogsa laere a velge mellom dem, ved hjelp av r i andre-verdien og sunn faglig vurdering.

For vi kaster oss inn i nye regresjonstyper, la oss snakke om et verktoy som hjelper oss a avgjore om vi trenger a bytte modell: residualanalyse.

Et residual er forskjellen mellom den observerte verdien og den verdien modellen forutsier: e-i [EQ] y-i minus y-hatt-i. Nar vi plotter residualene, altsa legger dem inn i et diagram, kan vi lese av mye.

Dersom residualene er tilfeldig spredt rundt null, noen over, noen under, uten noe monster, tyder det pa at modellen passer godt. Dataenes variasjon er bare tilfeldig stoy som ingen modell kan fange opp.

Men dersom residualene viser et systematisk monster, for eksempel at de forst er negative, deretter positive, og sa negative igjen, et buet monster, betyr det at en lineaer modell ikke fanger opp krumningen i dataene. Da trenger vi en modell som er buet, kanskje en andregradsfunksjon.

Tenk pa det slik: residualene er det som "er igjen" etter at modellen har gjort sitt beste. Hvis det som er igjen har et monster, har modellen gatt glipp av noe viktig. I GeoGebra kan du plotte residualene ved a beregne y-i minus f av x-i for hvert datapunkt, der f er regresjonsfunksjonen din.

... Slutt pa del 1. ...

### Del 2: Polynomregresjon

Hvis datapunktene danner en bue, en U-form eller en omvendt U, er en andregradsfunksjon y [EQ] a X i andre pluss b X pluss c et naturlig valg. Og hvis kurven har et mer S-formet monster med to vendepunkter, prover vi en tredjegradsfunksjon y [EQ] a X i tredje pluss b X i andre pluss c X pluss d.

I GeoGebra bruker vi kommandoen RegPoly av liste, grad. For en andregradstilpasning skriver du RegPoly av liste, 2, og for tredjegradstilpasning RegPoly av liste, 3.

La oss se pa et eksempel. En forsker maler hastigheten til en kjemisk reaksjon ved ulike temperaturer. Dataene danner en svak bue oppover. Lineaer regresjon gir y er omtrent lik 0 komma 38 X minus 4 komma 0 med r i andre er omtrent lik 0 komma 98. Andregradstilpasning gir y er omtrent lik 0 komma 0037 X i andre minus 0 komma 016 X pluss 0 komma 33 med r i andre er omtrent lik 0 komma 999.

Begge modellene har hoy r i andre, men andegradsmodellen er litt bedre og fanger opp den svake krumningen som den lineaere modellen overser. Residualene fra den lineaere modellen viser et lett buet monster, mens residualene fra andegradsmodellen er tilfeldig spredt.

Her er det viktig a bruke skjonn. Hvis forskjellen i r i andre er minimal og den lineaere modellen gir fornuftige resultater, kan den enklere modellen vaere a foretrekke. Men dersom du vet at den underliggende mekanismen er buet, for eksempel at reaksjonshastigheten oker akselererende med temperaturen, er andegradsmodellen et bedre faglig valg.

... Slutt pa del 2. ...

### Del 3: Eksponentialregresjon

Noen datasett kjennetegnes av at verdiene dobles, eller halveres, over jevne intervaller. En bakteriekultur som vokser med 50 prosent per time. En sparekonto med rentes rente. Radioaktivt materiale som halveres med jevne mellomrom. Alt dette er eksponentiell oppforsel, og vi tilpasser en funksjon pa formen y [EQ] a ganger b opphøyd i X.

I GeoGebra bruker vi RegExp av liste. La oss teste det pa bakteriedata: vi starter med 100 bakterier, og etter 1, 2, 3, 4, 5 og 6 timer har vi henholdsvis 150, 230, 340, 510, 760 og 1140 bakterier.

GeoGebra gir oss y er omtrent lik 100 ganger 1 komma 50 opphøyd i t. Startverdien a [EQ] 100 stemmer med vare 100 bakterier ved t [EQ] 0. Vekstfaktoren b [EQ] 1 komma 50 betyr at bestanden oker med 50 prosent per time.

Hva er doblingstiden? Vi loser 1 komma 50 opphøyd i t [EQ] 2 ved a ta logaritmen: t [EQ] den naturlige logaritmen av 2 delt pa den naturlige logaritmen av 1 komma 50 [EQ] 0 komma 693 delt pa 0 komma 405 er omtrent lik 1 komma 71 timer. Bakteriemengden dobles altsa omtrent hver 1 time og 43 minutter.

Eksponentialregresjon fungerer ogsa for nedgang. En metallbit som avkjoles i vann folger omtrent T er omtrent lik 80 ganger 0 komma 85 opphøyd i t, temperaturen over romtemperatur. Her er b [EQ] 0 komma 85 er mindre enn 1, som betyr at temperaturen synker med 15 prosent per minutt. Halveringstiden er den naturlige logaritmen av 0 komma 5 delt pa den naturlige logaritmen av 0 komma 85 er omtrent lik 4 komma 3 minutter. I dette tilfellet gir en eksponentialmodell r i andre er omtrent lik 0 komma 999, mens en lineaer modell bare gir r i andre er omtrent lik 0 komma 97, eksponentialmodellen er klart overlegen.

... Slutt pa del 3. ...

### Del 4: Potensregresjon

Det tredje verktøyet i verktøykassen var er potensregresjon, som tilpasser en funksjon y [EQ] a ganger X opphøyd i b. I GeoGebra bruker vi RegPot av liste.

Et fascinerende eksempel fra biologi: det finnes en sammenheng mellom kroppsmassen til et pattedyr og hjertefrekvensen. En mus, 0 komma 03 kilo, har hjertefrekvens rundt 600 slag per minutt. Et menneske, 70 kilo, har rundt 70. En elefant, 5000 kilo, har bare 25. Potensregresjon gir oss f er omtrent lik 220 ganger m opphøyd i minus 0 komma 25.

Eksponenten b er omtrent lik minus 0 komma 25 [EQ] minus en fjerdedel er bemerkelsesverdig. Den forteller oss at hjertefrekvensen avtar som den negative fjerde roten av kroppsmassen. Dobler vi massen, endres frekvensen med en faktor 2 opphøyd i minus 0 komma 25 er omtrent lik 0 komma 84, en reduksjon pa omtrent 16 prosent. Denne sammenhengen er kjent som en del av Kleibers lov og gjelder overraskende godt for nesten alle pattedyr.

Et annet eksempel er bremsestrekninger. Data for en bil ved ulike hastigheter gir potensregresjon d er omtrent lik 0 komma 005 ganger v opphøyd i 2 komma 01. Eksponenten b er omtrent lik 2 betyr at bremsestrekningen er tilnaermet proporsjonal med kvadratet av hastigheten. Det stemmer med fysikken: kinetisk energi er E-k [EQ] en halv ganger m ganger v i andre, og all denne energien ma bremses vekk. Dobler du farten, firedobles bremsestrekningen, en viktig paminnelse om a holde farten nede.

... Slutt pa del 4. ...

### Del 5: Modellvalg og faren ved overtilpasning

Na har du fire verktoy: lineaer, polynom, eksponentiell og potensregresjon. Hvordan velger du? Her er en strategi.

Forst ser du pa r i andre-verdien, forklaringsgraden. Den angir hvor stor del av variasjonen i dataene som modellen forklarer. r i andre [EQ] 1 er perfekt, og vi onsker typisk r i andre storre enn 0 komma 9. Men pass pa: en hoyere grad av polynom vil alltid gi hoyere r i andre, fordi modellen har flere parametre a leke med. Det betyr ikke at den er bedre.

Dernest gjor du en visuell vurdering. Plott dataene og regresjons-kurven. Ser det fornuftig ut? Fanger modellen opp det generelle monsteret uten a svinge vilt mellom punktene?

Sa gjor du residualanalyse. Er residualene tilfeldig spredt? Bra. Viser de et monster? Da trenger du en annen modell.

Og til slutt, og kanskje viktigst, bruker du faglig kunnskap. Vet du at bakterier vokser prosentvis? Bruk eksponentiell. Vet du at bremsestrekning henger sammen med kinetisk energi? Bruk potens med b [EQ] 2. En modell som er forankret i virkeligheten er mye mer verdt enn en som bare er statistisk tilpasset.

Et farlig feilgrep er overtilpasning. Med nok parametre kan du alltid lage en modell som gar noyaktig gjennom alle datapunktene. Et polynom av grad n gar alltid gjennom n pluss 1 punkter. Men en slik modell fanger opp tilfeldig stoy og gir elendige forutsigelser. Velg alltid den enkleste modellen som gir god tilpasning.

... Slutt pa del 5. ...

### Del 6: Oppsummering

Nar en rett linje ikke passer dataene, har vi tre hovedalternativer. Polynomregresjon tilpasser en andregradsfunksjon, parabel, eller hoyere grad, og passer godt for data med buer eller vendepunkter. Eksponentialregresjon tilpasser y [EQ] a ganger b opphøyd i X og passer for prosentvis vekst eller nedgang, bakterier, renter, radioaktivt forfall. Potensregresjon tilpasser y [EQ] a ganger X opphøyd i b og passer for fysiske skaleringslover, bremselengder, biologiske sammenhenger, planetbaner.

For a velge mellom modeller bruker vi r i andre-verdien, jo naermere 1, desto bedre, visuell vurdering, ser kurven fornuftig ut, residualanalyse, er residualene tilfeldig spredt, og faglig kunnskap, hva vet vi om fenomenet. Vaer alltid pa vakt mot overtilpasning: en kompleks modell som passer perfekt til kjente data, men gir darlige forutsigelser for nye data. Velg den enkleste modellen som gir god tilpasning.

... Slutt pa del 6. ...

---

## Kapittel 8.5: Modellvurdering og praktisk bruk

### Del 1: Den vanskeligste delen, a vurdere modellen

Gjennom de forrige kapitlene har vi bygget opp en solid verktøykasse: lineaer regresjon, polynomregresjon, eksponentialregresjon og potensregresjon. Vi vet hvordan vi tilpasser modeller til data i GeoGebra. Men na kommer det som kanskje er det viktigste av alt: a vurdere om modellen faktisk er god.

For det er ikke nok at r i andre er hoy. Det er ikke nok at kurven ser pen ut i et diagram. En god modell skal passe til kjente data, gi fornuftige forutsigelser, vaere forankret i faglig forstaelse, og ikke vaere unodvendig kompleks. Disse fire kravene kan sta i spenning med hverandre, og det er nettopp balansegangen mellom dem som gjor modellvurdering til en kunst like mye som en vitenskap.

I dette kapittelet skal vi laere a sammenligne modeller systematisk, forsta begrensninger, og tenke kritisk om bruk av modeller i media og forskning.

Vi har allerede mott r i andre, forklaringsgraden, som forteller oss hvor stor andel av variasjonen i dataene som modellen forklarer. r i andre [EQ] 1 betyr at modellen fanger opp all variasjon, perfekt tilpasning. r i andre [EQ] 0 betyr at modellen ikke forklarer noe som helst. For lineaer regresjon er r i andre rett og slett kvadratet av korrelasjonskoeffisienten: r i andre [EQ] r ganger r.

Typisk onsker vi r i andre storre enn 0 komma 9 for en god modell. Men det finnes viktige nyanser.

For det forste: hoy r i andre betyr ikke at modellen er riktig. En modell kan ha r i andre [EQ] 0 komma 99 og likevel gi meningslose forutsigelser utenfor dataomradet. En andregradsfunksjon tilpasset besokstall i en dyrepark kan ha fantastisk r i andre, men den snur nedover og forutsier til slutt negativt besokstall, noe som apenbart er tull.

For det andre: du kan alltid oke r i andre ved a legge til flere parametre. Et tredjegradspolynom gir alltid minst like hoy r i andre som et andregradspolynom, som alltid gir minst like hoy som en rett linje. Men flere parametre betyr ikke bedre modell, det kan bety overtilpasning.

For det tredje: r i andre sier ingenting om kausalitet. To variabler kan ha r i andre [EQ] 0 komma 95 uten at det er noen arsakssammenheng mellom dem. Husk den konfunderende variabelen.

Bruk r i andre som et av flere verktoy, men aldri som det eneste.

... Slutt pa del 1. ...

### Del 2: Sammenligning av modeller i praksis

La oss se pa et konkret eksempel. Vi har data for gjennomsnittlig stromforbruk per husstand i Norge fra 2000 til 2020, og vi prover to modeller.

Den lineaere modellen gir y [EQ] minus 162 t pluss 21 470 med r i andre [EQ] 0 komma 997. Den sier at forbruket synker med 162 kilowattimer per ar, en fast nedgang uavhengig av naværende niva.

Den eksponentielle modellen gir y [EQ] 21 500 ganger 0 komma 9917 opphøyd i t med r i andre [EQ] 0 komma 998. Den sier at forbruket synker med omtrent 0 komma 83 prosent per ar, en prosentvis nedgang.

Begge modellene passer nesten like godt til dataene. Hvordan velger vi?

For kort tids ekstrapolering gir begge lignende resultater. Men for lang tid avslorer forskjellene seg. Den lineaere modellen nar null rundt ar 2132 og gir deretter negativt stromforbruk, noe som er fysisk umulig. Den eksponentielle modellen naermer seg null, men blir aldri negativ. Det er mer realistisk.

Faglig sett er prosentvis nedgang, energieffektivisering, mer naturlig enn en konstant arlig reduksjon. Nye teknologier gir gjerne prosentvise forbedringer, ikke faste. Derfor er den eksponentielle modellen trolig bedre for lengre fremskrivninger, selv om begge er usikre langt frem i tid.

Dette illustrerer et viktig poeng: to modeller kan passe nesten like godt til historiske data, men gi svaert forskjellige forutsigelser. Valget mellom dem krever faglig vurdering, ikke bare statistikk.

... Slutt pa del 2. ...

### Del 3: Gyldighetsomrade og modellens begrensninger

Alle matematiske modeller har begrensninger. La oss systematisere de viktigste.

Gyldighetsomrade. Modellen gjelder bare for et visst omrade av X-verdier. Utenfor dette omradet kan den gi meningslose resultater, negativ befolkning, temperatur under absolutt nullpunkt, eller mer elbiler enn det finnes mennesker. Nar du bruker en modell, bor du alltid sporre: "For hvilke verdier av X gir dette mening?"

Forenklinger. Enhver modell velger ut noen faktorer og ignorerer andre. En modell for fritt fall ignorerer luftmotstand. En befolkningsmodell ignorerer kriger og pandemier. Sporsmalet er om de ignorerte faktorene er viktige nok til a endre resultatet vesentlig.

Tidsbegrensning. En modell som passer godt na, passer ikke nodvendigvis om 20 ar. Trender endrer seg. Teknologier utvikles. Politikk skifter. En eksponentiell vekstmodell for elbiler fungerer bra i oppstartsfasen, men markedet vil mettes.

Datatilpasning er ikke forstaelse. En modell med hoy r i andre beskriver et monster i dataene, men den forklarer ikke hvorfor monsteret finnes. Korrelasjonen mellom sjokoladeforbruk og nobelprisvinnere er sterk, r er omtrent lik 0 komma 79, men det betyr ikke at sjokolade gjor folk smartere. Begge variablene korrelerer med velstand og utdanningsniva.

A forsta modellens begrensninger er ikke en svakhet, det er en styrke. En person som vet hvor modellen svikter, bruker den mye klokere enn en som tror blindt pa den.

... Slutt pa del 3. ...

### Del 4: En helhetlig analyse

La oss ove oss pa en fullstendig modellvurdering. En dyrepark har registrert antall gjester per ar de siste 8 arene: 15 000, 28 000, 52 000, 80 000, 95 000, 103 000, 108 000 og 110 000.

Visuelt ser vi rask vekst i begynnelsen som flater ut. Vi prover tre modeller.

Lineaer modell: y er omtrent lik 14 komma 0 t pluss 9 komma 5 med r i andre er omtrent lik 0 komma 90. Passer darligst. Fanger ikke opp utflatingen.

Andregradsfunksjon: y er omtrent lik minus 2 komma 4 t i andre pluss 35 komma 5 t minus 17 komma 5 med r i andre er omtrent lik 0 komma 99. Passer best til dataene. Men den har et toppunkt ved t er omtrent lik 7 komma 4 og forutsier deretter at besokstallet synker. Er det realistisk? Kanskje, kanskje ikke. Hvis vi forventer at besoket stabiliserer seg, men ikke synker, er modellen problematisk.

Potensmodell: y er omtrent lik 17 komma 8 ganger t opphøyd i 0 komma 92 med r i andre er omtrent lik 0 komma 95. Eksponenten b er mindre enn 1 gir avtagende vekst uten a snu nedover, noe som stemmer bedre med forventningen om stabilisering.

Hva anbefaler vi? For interpolering er andegradsmodellen best. For lengre fremskrivninger er potensmodellen tryggere fordi den ikke forutsier nedgang. Og den lineaere modellen? Den er for enkel for dette datasettet.

Parsimonitetsprinsippet, Ockhams barberkniv, sier: velg den enkleste modellen som gir god tilpasning. Men "god tilpasning" ma inkludere fornuftige forutsigelser, ikke bare hoy r i andre.

... Slutt pa del 4. ...

### Del 5: Kritisk vurdering, modeller i media og samfunn

Matematiske modeller er overalt i samfunnet. Klimamodeller forutsier global oppvarming. Epidemimodeller estimerer smittespredning. Okonomiske modeller pavirker politiske beslutninger. Det er viktig at du kan stille kritiske sporsmal til slike modeller.

Hvilke data er modellen basert pa? Er dataene palitelige? Er de representative? Data fra en by gjelder ikke nodvendigvis for et helt land. Data fra ett tiar gjelder ikke nodvendigvis for det neste.

Hvilken funksjonstype er valgt? Er det faglig grunnlag for akkurat den typen, eller er den bare valgt fordi den gir hoy r i andre?

Er det interpolering eller ekstrapolering? Klimamodeller som forutsier 50 ar frem i tid ekstrapolerer kraftig. Det betyr ikke at de er ubrukelige, men usikkerheten er stor, og det bor kommuniseres tydelig.

Hvilke forenklinger er gjort? Under pandemien ga ulike epidemimodeller svaert forskjellige forutsigelser, nettopp fordi de gjorde ulike antagelser om smitterate, tiltak og adferd. Ingen av dem var "feil", de belyste ulike scenarier.

Hvem star bak? Kan det vaere interessekonflikter? En modell laget av oljeindustrien for a forutsi energibehov kan ha andre antagelser enn en modell laget av miljoorganisasjoner.

Modeller er kraftige verktoy, men de er ikke sannheter. De er forenklinger som hjelper oss a tenke klarere om komplekse fenomener. Den som forstar modellens begrensninger, bruker den best.

... Slutt pa del 5. ...

### Del 6: Oppsummering

En god modell oppfyller fire krav: den passer til kjente data, hoy r i andre, gir fornuftige forutsigelser, er forankret i faglig kunnskap, og er ikke unodvendig kompleks. Forklaringsgraden r i andre er et nyttig verktoy, men den er ikke tilstrekkelig alene, hoy r i andre garanterer verken kausalitet, riktige forutsigelser, eller at modellen er den beste.

Nar du sammenligner modeller, se pa r i andre, residualplot, visuell tilpasning og faglig rimelighet. Parsimonitetsprinsippet, Ockhams barberkniv, sier at du bor velge den enkleste modellen som gir en tilfredsstillende beskrivelse.

Alle modeller har begrensninger: et gyldighetsomrade de fungerer innenfor, forenklinger de gjor, og en tidsbegrensning for hvor lenge de er relevante. Interpolering er generelt palitelig, mens ekstrapolering er risikabelt og krever stor forsiktighet. Ulike modeller som passer like godt til historiske data kan gi vidt forskjellige forutsigelser.

Til slutt: tenk kritisk om modeller i media og forskning. Spor hvilke data de bygger pa, hvilke forenklinger som er gjort, og om det er korrelasjon eller kausalitet. En modell er et verktoy for a tenke, ikke en fasit.

... Slutt pa del 6. ...
