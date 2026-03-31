## Kapittel 7.1: Gjennomsnittlig vekstfart

### Del 1: Hvor bratt er det egentlig?

Forestill deg at du star ved foten av en bakke og lurer pa hvor bratt den er. Du kan peke pa bakken og si "den er ganske bratt", men i matematikken vil vi ha noe mer presist enn det. Vi vil ha et tall som forteller oss noyaktig hvor bratt noe er, og det er her stigningstall kommer inn.

I dette kapittelet skal vi starte med a forsta stigningstall, som er noe du kanskje har mott for. Deretter bruker vi det til a introdusere et nytt begrep: gjennomsnittlig vekstfart. Det handler om a male hvor fort noe endrer seg mellom to punkter. Underveis skal vi ogsa bli kjent med ettpunktsformelen og begrepet sekant. Alt henger sammen, og vi tar det steg for steg.

La oss starte med det grunnleggende. Nar du har en rett linje i et koordinatsystem, forteller stigningstallet deg hvor mye y-verdien endrer seg nar X-verdien oker med 1. Vi bruker bokstaven a for stigningstallet.

For a finne stigningstallet trenger du to punkter pa linjen. La oss si at du har P-1 [EQ] startparentes x-1, y-1 sluttparentes og P-2 [EQ] startparentes x-2, y-2 sluttparentes. Da er stigningstallet gitt ved formelen:

a [EQ] delta y delt pa delta X [EQ] y-2 minus y-1 delt pa x-2 minus x-1

Her betyr delta, den greske bokstaven delta, rett og slett endring. Sa delta y er endringen i y, og delta X er endringen i X. Du tar altsa forskjellen i y-verdier og deler pa forskjellen i X-verdier.

La oss prove et eksempel. Tenk deg at linjen gar gjennom punktene startparentes 1, 3 sluttparentes og startparentes 3, 9 sluttparentes. Da blir stigningstallet a [EQ] 9 minus 3 delt pa 3 minus 1 [EQ] 6 delt pa 2 [EQ] 3. Det betyr at for hver gang X oker med 1, sa oker y med 3. Linjen stiger altsa ganske bratt oppover.

Hvis stigningstallet er negativt, betyr det at linjen synker. Og hvis stigningstallet er 0, er linjen helt flat, horisontal.

... Slutt pa del 1. ...

### Del 2: Ettpunktsformelen

Na som vi kan finne stigningstall, skal vi laere en elegant formel som lar oss finne likningen til en linje nar vi kjenner stigningstallet og ett punkt pa linjen. Den heter ettpunktsformelen og ser slik ut:

y minus y-0 [EQ] a ganger startparentes X minus x-0 sluttparentes

Her er startparentes x-0, y-0 sluttparentes punktet vi kjenner, og a er stigningstallet. Formelen sier egentlig noe intuitivt: forskjellen i y-verdi fra det kjente punktet er lik stigningstallet ganget med forskjellen i X-verdi.

La oss bruke den. Hvis vi vet at en linje har stigningstall 3 og gar gjennom punktet startparentes 1, 2 sluttparentes, setter vi inn: y minus 2 [EQ] 3 ganger startparentes X minus 1 sluttparentes. Vi loser opp: y minus 2 [EQ] 3 X minus 3, altsa y [EQ] 3 X minus 1. Der har vi likningen til linjen.

Ettpunktsformelen er spesielt nyttig nar vi har to punkter. Da finner vi forst stigningstallet, og sa bruker vi ett av punktene i ettpunktsformelen. For eksempel: punktene startparentes 1, 5 sluttparentes og startparentes 3, 9 sluttparentes gir stigningstall a [EQ] 9 minus 5 delt pa 3 minus 1 [EQ] 2. Med punktet startparentes 1, 5 sluttparentes i ettpunktsformelen: y minus 5 [EQ] 2 ganger startparentes X minus 1 sluttparentes, som gir y [EQ] 2 X pluss 3.

... Slutt pa del 2. ...

### Del 3: Gjennomsnittlig vekstfart

Na tar vi steget fra rette linjer til funksjoner som kurver. Tenk deg at du ser pa grafen til f av X [EQ] X i andre minus 1. Denne grafen er ikke en rett linje, den buer. Men vi kan fortsatt snakke om hvor fort funksjonen endrer seg i et bestemt intervall.

Gjennomsnittlig vekstfart beskriver hvor mye funksjonsverdien i gjennomsnitt endrer seg per enhet X i et gitt intervall. Formelt er det definert som:

Gjennomsnittlig vekstfart [EQ] f av x-2 minus f av x-1 delt pa x-2 minus x-1 [EQ] delta y delt pa delta X

Legg merke til at dette er noyaktig den samme formelen som for stigningstall! Og det er ikke tilfeldig. Grafisk svarer den gjennomsnittlige vekstfarten til stigningstallet til linjen som gar gjennom de to punktene startparentes x-1, f av x-1 sluttparentes og startparentes x-2, f av x-2 sluttparentes pa grafen. Denne linjen har et eget navn, vi kaller den en sekant.

En sekant er altsa en rett linje som skjaerer grafen i to punkter. Stigningstallet til sekanten gir oss den gjennomsnittlige vekstfarten mellom disse to punktene.

... Slutt pa del 3. ...

### Del 4: Regneeksempel

La oss ta et konkret eksempel. Vi har funksjonen f av X [EQ] X i andre minus 1 og vil finne den gjennomsnittlige vekstfarten i intervallet minus 2 til 1.

Vi trenger funksjonsverdiene i endepunktene. Forst f av minus 2 [EQ] startparentes minus 2 sluttparentes i andre minus 1 [EQ] 4 minus 1 [EQ] 3. Deretter f av 1 [EQ] 1 i andre minus 1 [EQ] 0. Sa vi har punktene A [EQ] startparentes minus 2, 3 sluttparentes og B [EQ] startparentes 1, 0 sluttparentes.

Na setter vi inn i formelen: f av 1 minus f av minus 2 delt pa 1 minus startparentes minus 2 sluttparentes [EQ] 0 minus 3 delt pa 1 pluss 2 [EQ] minus 3 delt pa 3 [EQ] minus 1.

Den gjennomsnittlige vekstfarten er altsa minus 1. Det betyr at i gjennomsnitt synker funksjonen med 1 enhet for hver enhet X oker i dette intervallet. Grafisk ser vi at sekanten gjennom A og B har negativt stigningstall, den peker nedover fra venstre mot hoyre.

Det er viktig a forsta at dette er et gjennomsnitt. Funksjonen X i andre minus 1 synker forst og stiger deretter i dette intervallet, men totalt sett, fra A til B, er nettobevegelsen nedover.

... Slutt pa del 4. ...

### Del 5: Vekstfart i virkeligheten

Gjennomsnittlig vekstfart er ikke bare et abstrakt matematisk begrep, det dukker opp hele tiden i den virkelige verden. Tenk for eksempel pa en ball som kastes opp i luften. Hoyden h over bakken etter t sekunder kan beskrives med funksjonen h av t [EQ] minus 5 t i andre pluss 20 t pluss 1.

Hva er gjennomsnittlig hastighet i det forste sekundet, altsa i intervallet 0 til 1? Vi regner: h av 0 [EQ] 1 meter og h av 1 [EQ] minus 5 pluss 20 pluss 1 [EQ] 16 meter. Gjennomsnittlig hastighet er 16 minus 1 delt pa 1 minus 0 [EQ] 15 meter per sekund. Ballen beveger seg i snitt 15 meter per sekund oppover.

Hva med intervallet 2 til 3? Her er h av 2 [EQ] minus 20 pluss 40 pluss 1 [EQ] 21 meter og h av 3 [EQ] minus 45 pluss 60 pluss 1 [EQ] 16 meter. Gjennomsnittlig hastighet er 16 minus 21 delt pa 3 minus 2 [EQ] minus 5 meter per sekund. Det negative fortegnet forteller oss at ballen er pa vei ned i dette intervallet.

Gjennomsnittlig hastighet er faktisk bare et annet ord for gjennomsnittlig vekstfart nar vi snakker om bevegelse. Og legg merke til noe interessant: vi kan fa forskjellige svar for ulike intervaller, selv for den samme funksjonen. Det er fordi vi maler gjennomsnittlig endring, og den avhenger av hvor pa grafen vi befinner oss.

... Slutt pa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi bygget opp forstaelsen steg for steg. Vi startet med stigningstall, som forteller hvor bratt en linje er. Formelen er a [EQ] delta y delt pa delta X [EQ] y-2 minus y-1 delt pa x-2 minus x-1, og den gir oss endringen i y per enhet endring i X.

Deretter laerte vi ettpunktsformelen y minus y-0 [EQ] a ganger startparentes X minus x-0 sluttparentes, som lar oss finne likningen til en linje nar vi kjenner stigningstallet og ett punkt. Denne formelen er spesielt nyttig nar vi forst beregner stigningstallet mellom to punkter og deretter setter opp likningen.

Til slutt introduserte vi gjennomsnittlig vekstfart, som er stigningstallet til sekanten mellom to punkter pa en funksjons graf. Formelen f av x-2 minus f av x-1 delt pa x-2 minus x-1 gir oss gjennomsnittlig endring i funksjonsverdi per enhet endring i X. I praktiske sammenhenger, som bevegelse, tilsvarer dette gjennomsnittshastigheten. Gjennomsnittlig vekstfart avhenger av hvilket intervall vi ser pa, fordi funksjonen kan oppfore seg ulikt i forskjellige deler av definisjonsomradet.

... Slutt pa del 6. ...

---

## Kapittel 7.2: Momentan vekstfart

### Del 1: Farten akkurat na

I forrige kapittel laerte vi a male gjennomsnittlig vekstfart mellom to punkter pa en graf. Men tenk deg at du sitter i en bil og ser pa speedometeret. Det viser ikke gjennomsnittsfarten din over den siste timen, det viser farten din akkurat na, i dette oyeblikket.

Denne ideen, a male vekstfart i et enkelt punkt i stedet for over et intervall, er en av de mest kraftfulle ideene i matematikken. Vi kaller det momentan vekstfart, og det er dette kapittelet handler om. For a forsta momentan vekstfart trenger vi et nytt begrep: tangenten til en graf.

En tangent er en rett linje som berorer grafen til en funksjon i ett punkt og har samme retning som grafen i det punktet. Forestill deg at du legger en linjal langs kurven akkurat i ett punkt, linjalen skal ligge slik at den "folger" kurven i det punktet uten a kutte gjennom den.

Stigningstallet til denne tangentlinjen er det vi kaller den momentane vekstfarten til funksjonen i det punktet. Sa mens gjennomsnittlig vekstfart handler om stigningstallet til en sekant, linje gjennom to punkter, handler momentan vekstfart om stigningstallet til en tangent, linje som berorer i ett punkt.

For a finne den momentane vekstfarten grafisk gjor du altsa to ting: forst tegner du tangenten til grafen i det aktuelle punktet, og deretter finner du stigningstallet til denne tangentlinjen. For a finne stigningstallet trenger du to punkter pa tangentlinjen, og da bruker du den vanlige formelen a [EQ] y-2 minus y-1 delt pa x-2 minus x-1.

La oss ta et eksempel. Funksjonen f av X [EQ] X i andre minus 1 har en tangent i punktet startparentes 2, 3 sluttparentes. Denne tangenten gar ogsa gjennom punktet startparentes 3, 7 sluttparentes. Stigningstallet blir a [EQ] 7 minus 3 delt pa 3 minus 2 [EQ] 4. Altsa er den momentane vekstfarten til f nar X [EQ] 2 lik 4.

... Slutt pa del 1. ...

### Del 2: Sekant og tangent

Det er en dyp sammenheng mellom sekanten og tangenten som er verdt a forsta ordentlig. Vi vet at en sekant gar gjennom to punkter pa grafen, og at stigningstallet til sekanten gir gjennomsnittlig vekstfart. Men hva skjer hvis vi lar de to punktene naerme seg hverandre?

Forestill deg at du har to punkter pa grafen: A [EQ] startparentes a, f av a sluttparentes og B [EQ] startparentes a pluss h, f av a pluss h sluttparentes, der h er avstanden mellom X-verdiene. Gjennomsnittlig vekstfart mellom disse to punktene er:

f av startparentes a pluss h sluttparentes minus f av a, delt pa h

Na lar vi h bli mindre og mindre. Punkt B kryper naermere og naermere punkt A. Sekanten begynner a dreie seg, og den naermer seg tangenten. Nar h er uendelig liten, altsa nar h gar mot null, faller sekanten sammen med tangenten. Det er dette vi kaller en grenseverdi.

Den momentane vekstfarten er altsa grenseverdien av den gjennomsnittlige vekstfarten nar intervallet krymper til null. Denne tanken, a la noe bli uendelig lite, er grunnlaget for hele den grenen av matematikk som kalles kalkulus eller analyse.

... Slutt pa del 2. ...

### Del 3: Grafisk bestemmelse av momentan vekstfart

I praksis kan du finne momentan vekstfart grafisk ved a tegne tangenten til grafen i det aktuelle punktet og deretter lese av stigningstallet. Metoden fungerer slik:

Forst finner du punktet pa grafen der du vil vite vekstfarten. Sa tegner du tangenten, altsa den rette linjen som berorer grafen i dette punktet og folger kurvens retning. Til slutt velger du to punkter pa tangentlinjen og beregner stigningstallet.

La oss si at du har funksjonen g av X [EQ] X i andre pluss 2 X og vil finne momentan vekstfart nar X [EQ] 1. Funksjonsverdien er g av 1 [EQ] 1 pluss 2 [EQ] 3, sa punktet er startparentes 1, 3 sluttparentes. Hvis du tegner tangenten i GeoGebra, kan du bruke kommandoen Tangent og deretter finne stigningstallet. Svaret viser seg a vaere 4.

Det er nyttig a vite at du ogsa kan bruke digitale verktoy som GeoGebra for a gjore dette raskt og presist. Kommandoen Tangent av punkt, f, tegner tangenten, og Stigning av linje gir deg stigningstallet direkte.

... Slutt pa del 3. ...

### Del 4: Tangentlikning

Nar du vet den momentane vekstfarten i et punkt, kan du ogsa skrive opp likningen for tangenten. Du bruker ganske enkelt ettpunktsformelen fra forrige kapittel.

Si at funksjonen f har momentan vekstfart 3 i punktet startparentes 3, 5 sluttparentes. Da er tangentlikningen y minus 5 [EQ] 3 ganger startparentes X minus 3 sluttparentes, altsa y [EQ] 3 X minus 4. Det fine er at alt vi har laert om stigningstall og ettpunktsformelen kobles direkte inn her.

La oss ta et fullstendig eksempel med en bil. Avstanden s, i kilometer, fra startpunktet etter t timer er s av t [EQ] t i andre pluss 4 t. Vi vil finne momentanfarten etter 2 timer. Avstanden etter 2 timer er s av 2 [EQ] 4 pluss 8 [EQ] 12 kilometer. For a finne momentanfarten trenger vi stigningstallet til tangenten i dette punktet, som vi kan finne med GeoGebra. Svaret er 8 kilometer i timen. Vi kan ogsa beregne gjennomsnittsfarten mellom t [EQ] 1 og t [EQ] 3: s av 3 minus s av 1 delt pa 3 minus 1 [EQ] 21 minus 5 delt pa 2 [EQ] 8 kilometer i timen. I dette tilfellet er gjennomsnittsfarten tilfeldigvis lik momentanfarten, men det er ikke alltid slik.

... Slutt pa del 4. ...

### Del 5: Fra speedometer til matematikk

La oss dvele ved hva momentan vekstfart egentlig betyr i forskjellige sammenhenger. Vi har allerede nevnt speedometeret i bilen, men det finnes mange andre eksempler.

Hvis f av t beskriver temperaturen i grader Celsius som funksjon av tid i timer, forteller den momentane vekstfarten oss hvor mange grader temperaturen endrer seg per time akkurat i det oyeblikket. En momentan vekstfart pa 2 betyr at temperaturen stiger med 2 grader per time akkurat na.

Hvis f av t beskriver antall bakterier i en petriskal etter t timer, forteller den momentane vekstfarten oss hvor fort bakteriepopulasjonen vokser i et bestemt oyeblikk.

Nokkelforskjellen mellom gjennomsnittlig og momentan vekstfart kan oppsummeres slik: gjennomsnittlig vekstfart gir oss den gjennomsnittlige endringen over et intervall, mens momentan vekstfart gir oss den presise endringen i et enkelt oyeblikk. Gjennomsnittlig vekstfart svarer til stigningstallet til en sekant, mens momentan vekstfart svarer til stigningstallet til en tangent. Tangenten er det vi far nar sekantens to punkter smelter sammen til ett.

... Slutt pa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi gatt fra gjennomsnittlig vekstfart til momentan vekstfart, vekstfarten i et enkelt punkt. Grafisk er momentan vekstfart stigningstallet til tangenten i punktet, altsa den rette linjen som berorer grafen og folger dens retning akkurat der.

Vi har sett den viktige sammenhengen mellom sekant og tangent: nar de to punktene pa sekanten naermer seg hverandre og avstanden h gar mot null, naermer sekanten seg tangenten. Momentan vekstfart er dermed grenseverdien av gjennomsnittlig vekstfart nar intervallet krymper mot null.

For a finne momentan vekstfart grafisk tegner vi tangenten og beregner stigningstallet. Vi kan bruke ettpunktsformelen til a skrive opp tangentlikningen. I praktiske sammenhenger tilsvarer momentan vekstfart for eksempel oyeblikkelig hastighet, det speedometeret viser, ikke gjennomsnittsfarten over hele turen.

... Slutt pa del 6. ...

---

## Kapittel 7.3: Den deriverte

### Del 1: En formel for vekstfart overalt

I de to foregaende kapitlene har vi funnet vekstfart i enkeltpunkter, enten grafisk ved a tegne tangenter, eller ved a beregne stigningstall. Men hva om vi kunne ha en formel som gir oss den momentane vekstfarten for alle verdier av X pa en gang?

Det er nettopp det den deriverte gir oss. Den deriverte av en funksjon f av X er en helt ny funksjon, som vi skriver f derivert av X. Denne nye funksjonen forteller oss stigningstallet til tangenten, altsa den momentane vekstfarten, for enhver X-verdi. I dette kapittelet skal vi laere regler som lar oss finne f derivert av X raskt og effektivt.

For vi begynner a regne, la oss forsta hva den deriverte egentlig betyr. Hvis du har en funksjon f av X og dens deriverte f derivert av X, sa gir f derivert av a deg stigningstallet til tangenten til grafen av f i punktet startparentes a, f av a sluttparentes. Med andre ord: f derivert av a er den momentane vekstfarten til f nar X [EQ] a.

Men den deriverte forteller oss enda mer. Fortegnet til f derivert av X avslorer om funksjonen stiger eller synker. Nar f derivert av X er storre enn 0, er funksjonen f stigende, grafen peker oppover. Nar f derivert av X er mindre enn 0, er funksjonen synkende, grafen peker nedover. Og nar f derivert av X [EQ] 0, har grafen en horisontal tangent. Det betyr at vi er ved et toppunkt, et bunnpunkt, eller et vendepunkt.

Tenk deg at du kjorer bil langs en vei som svinger opp og ned. Den deriverte er som et instrument som forteller deg om veien peker oppover, nedover, eller om du er pa toppen av en bakke akkurat na. Det er et ekstremt nyttig verktoy.

... Slutt pa del 1. ...

### Del 2: Konstantregelen og lineaere funksjoner

La oss starte med de enkleste funksjonene. Hva er den deriverte av en konstant funksjon f av X [EQ] a, for eksempel f av X [EQ] 5? Grafen er en horisontal linje. Stigningstallet til en horisontal linje er alltid 0, uansett hvor du befinner deg. Derfor er f derivert av X [EQ] 0.

Det gir mening intuitivt: en konstant funksjon endrer seg aldri, sa vekstfarten er null overalt. Denne regelen kalles konstantregelen.

Hva med en lineaer funksjon f av X [EQ] a X pluss b? Grafen er en rett linje med stigningstall a. Tangenten i ethvert punkt er selve linjen, og stigningstallet er a overalt. Derfor er f derivert av X [EQ] a.

For eksempel: f av X [EQ] 4 X minus 2 gir f derivert av X [EQ] 4. Funksjonen f av X [EQ] X pluss 9, som er det samme som 1 ganger X pluss 9, gir f derivert av X [EQ] 1. Og f av X [EQ] 3 gir f derivert av X [EQ] 0, fordi det er en konstant.

Disse to reglene er utgangspunktet, og de er lette a huske: konstanter forsvinner, og stigningstallet til en lineaer funksjon er den deriverte.

... Slutt pa del 2. ...

### Del 3: Potensregelen

Na kommer vi til regelen som virkelig apner dorene: potensregelen. Den forteller oss hvordan vi deriverer funksjoner som X i andre, X i tredje, X opphøyd i 5 og sa videre. Regelen er:

f av X [EQ] X opphøyd i n medforer f derivert av X [EQ] n ganger X opphøyd i n minus 1

En enkel huskeregel er "ta ned og trekk fra en": ta eksponenten ned foran som koeffisient, og trekk fra en fra eksponenten. For eksempel: f av X [EQ] X opphøyd i 5 gir f derivert av X [EQ] 5 X opphøyd i 4. Eksponenten 5 flyttes ned, og den nye eksponenten blir 5 minus 1 [EQ] 4.

La oss prove med f av X [EQ] X i andre. Da er f derivert av X [EQ] 2 X opphøyd i 2 minus 1 [EQ] 2 X. Det betyr at den momentane vekstfarten til X i andre i et punkt er 2 X. Nar X [EQ] 3, er vekstfarten 2 ganger 3 [EQ] 6. Nar X [EQ] minus 1, er vekstfarten 2 ganger startparentes minus 1 sluttparentes [EQ] minus 2.

Hva med koeffisienter foran? Hvis f av X [EQ] 3 X opphøyd i 4, ganger vi koeffisienten med eksponenten: f derivert av X [EQ] 3 ganger 4 ganger X i tredje [EQ] 12 X i tredje. Konstanten "henger med" gjennom derivasjonen.

... Slutt pa del 3. ...

### Del 4: Sumregelen

Nar funksjonen var er en sum av flere ledd, bruker vi sumregelen: vi deriverer hvert ledd for seg. Formelt: startparentes f pluss g sluttparentes derivert av X [EQ] f derivert av X pluss g derivert av X. Tilsvarende for differanser: startparentes f minus g sluttparentes derivert av X [EQ] f derivert av X minus g derivert av X.

La oss bruke dette pa et polynom. Ta f av X [EQ] 3 X opphøyd i 4 minus 2 X pluss 5. Vi deriverer ledd for ledd: 3 X opphøyd i 4 gir 3 ganger 4 X i tredje [EQ] 12 X i tredje. Leddet minus 2 X er lineaert med stigningstall minus 2, sa det gir minus 2. Og konstanten 5 gir 0. Til sammen: f derivert av X [EQ] 12 X i tredje minus 2.

Her er et viktig poeng: konstanter "forsvinner" ved derivasjon. Om funksjonen din er X i andre pluss 100 eller X i andre minus 7, blir den deriverte 2 X i begge tilfeller. Det er fordi konstanter ikke bidrar til endring, de bare lofter eller senker hele grafen uten a endre brattheten.

La oss ta enda et eksempel. Vi har f av X [EQ] 2 X i andre minus 5 X og vil finne f derivert av minus 2. Forst deriverer vi: f derivert av X [EQ] 4 X minus 5. Deretter setter vi inn X [EQ] minus 2: f derivert av minus 2 [EQ] 4 ganger startparentes minus 2 sluttparentes minus 5 [EQ] minus 8 minus 5 [EQ] minus 13. Den momentane vekstfarten er altsa minus 13 nar X [EQ] minus 2, som betyr at funksjonen synker raskt.

... Slutt pa del 4. ...

### Del 5: Den deriverte i praksis

La oss vende tilbake til ballen som kastes opp i luften. Hoydefunksjonen er h av t [EQ] minus 5 t i andre pluss 20 t pluss 1. Vi kan na finne den deriverte: h derivert av t [EQ] minus 10 t pluss 20.

Hva betyr denne deriverte fysisk? Den gir oss farten til ballen som funksjon av tid. Farten h derivert av t [EQ] minus 10 t pluss 20 forteller oss hvor fort ballen beveger seg oppover, eller nedover, i ethvert oyeblikk.

Nar t [EQ] 0: h derivert av 0 [EQ] 20 meter per sekund. Ballen starter med fart 20 meter per sekund oppover. Nar t [EQ] 2: h derivert av 2 [EQ] minus 10 ganger 2 pluss 20 [EQ] 0 meter per sekund. Farten er null! Ballen er pa sitt hoyeste punkt og er i ferd med a snu. Nar t [EQ] 3: h derivert av 3 [EQ] minus 10 ganger 3 pluss 20 [EQ] minus 10 meter per sekund. Farten er minus 10 meter per sekund, altsa beveger ballen seg 10 meter per sekund nedover.

Vi kan ogsa finne nar ballen er pa toppen ved a sette h derivert av t [EQ] 0: minus 10 t pluss 20 [EQ] 0, som gir t [EQ] 2 sekunder. Deretter finner vi hoyden pa toppen: h av 2 [EQ] minus 20 pluss 40 pluss 1 [EQ] 21 meter. Derivasjon gir oss altsa et kraftig verktoy for a analysere bevegelse.

... Slutt pa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi laert at den deriverte f derivert av X er en ny funksjon som gir oss den momentane vekstfarten, stigningstallet til tangenten, for enhver X-verdi. Vi har tre grunnleggende regler for derivasjon.

Konstantregelen sier at den deriverte av en konstant er 0: konstanter endrer seg ikke, sa vekstfarten er null. Lineaere funksjoner f av X [EQ] a X pluss b har derivert lik stigningstallet a, fordi en rett linje har konstant stigningstall overalt.

Potensregelen er nokkelen til a derivere de fleste uttrykkene vi moter: f av X [EQ] X opphøyd i n gir f derivert av X [EQ] n ganger X opphøyd i n minus 1. Husk "ta ned og trekk fra en". Med sumregelen deriverer vi summer ledd for ledd. Konstantmultiplikasjon betyr at koeffisienter "henger med" gjennom derivasjonen.

Fortegnet til den deriverte forteller oss om funksjonen stiger, f derivert er storre enn 0, synker, f derivert er mindre enn 0, eller har en horisontal tangent, f derivert [EQ] 0. I praktiske sammenhenger gir den deriverte av posisjon oss fart, og f derivert av a gir den momentane vekstfarten i punktet X [EQ] a.

... Slutt pa del 6. ...

---

## Kapittel 7.5: Definisjonen av derivasjon og numerisk derivasjon

### Del 1: Bak kulissene i derivasjon

Vi har na laert a derivere med potensregelen, sumregelen og konstantregelen. Men har du lurt pa hvorfor disse reglene fungerer? Hva er det egentlig som skjer matematisk nar vi deriverer?

I dette kapittelet gar vi bak kulissene og ser pa den formelle definisjonen av den deriverte. Vi skal forsta hva en grenseverdi er, bli kjent med Newton-kvotienten, ogsa kalt differanskvotienten, og laere om numerisk derivasjon, en metode for a finne tilnaermede verdier av den deriverte. Selv om de konkrete reglene vi har laert er raske og praktiske, er det verdifullt a forsta fundamentet de hviler pa.

Vi begynner med noe kjent. Husk at gjennomsnittlig vekstfart mellom to punkter er f av x-2 minus f av x-1 delt pa x-2 minus x-1. Na skriver vi det pa en litt annen mate. La oss si at vi starter i punktet X og beveger oss en liten avstand h til hoyre, slik at det andre punktet er X pluss h. Da blir gjennomsnittlig vekstfart:

f av startparentes X pluss h sluttparentes minus f av X, delt pa h

Denne broken kalles Newton-kvotienten eller differanskvotienten. Den gir stigningstallet til sekanten mellom punktene startparentes X, f av X sluttparentes og startparentes X pluss h, f av X pluss h sluttparentes.

La oss ta et eksempel. Med f av X [EQ] X i andre, X [EQ] 2 og h [EQ] 0 komma 1 far vi: f av 2 komma 1 minus f av 2 delt pa 0 komma 1 [EQ] 4 komma 41 minus 4 delt pa 0 komma 1 [EQ] 0 komma 41 delt pa 0 komma 1 [EQ] 4 komma 1. Vi vet at den eksakte deriverte er f derivert av 2 [EQ] 2 ganger 2 [EQ] 4, sa 4 komma 1 er en god tilnaerming, ganske naer, men ikke helt noyaktig.

Hva skjer hvis vi gjor h enda mindre? Med h [EQ] 0 komma 01: f av 2 komma 01 minus f av 2 delt pa 0 komma 01 [EQ] 4 komma 0401 minus 4 delt pa 0 komma 01 [EQ] 4 komma 01. Enda naermere! Jo mindre h, desto bedre tilnaerming.

... Slutt pa del 1. ...

### Del 2: Definisjonen av den deriverte

Vi har sett at Newton-kvotienten gir bedre og bedre tilnaerminger til den deriverte jo mindre h vi velger. Den formelle definisjonen sier at den deriverte er det Newton-kvotienten stabiliserer seg pa nar h gar mot null. Vi skriver det med grenseverdi-symbolet:

f derivert av X [EQ] grenseverdien nar h gar mot 0 av f av startparentes X pluss h sluttparentes minus f av X, delt pa h

Les dette som: "grenseverdien av Newton-kvotienten nar h gar mot null". Merk at vi ikke kan sette h [EQ] 0 direkte, for da ville vi delt pa null. I stedet lar vi h bli vilkarlig naer null og ser hva broken naermer seg.

La oss bevise at den deriverte av X i andre er 2 X ved a bruke definisjonen. Vi starter med Newton-kvotienten: startparentes X pluss h sluttparentes i andre minus X i andre, delt pa h. Vi utvider startparentes X pluss h sluttparentes i andre [EQ] X i andre pluss 2 X h pluss h i andre. Da far vi X i andre pluss 2 X h pluss h i andre minus X i andre, delt pa h [EQ] 2 X h pluss h i andre delt pa h [EQ] h ganger startparentes 2 X pluss h sluttparentes delt pa h [EQ] 2 X pluss h. Nar h gar mot 0, forsvinner h-leddet, og vi sitter igjen med f derivert av X [EQ] 2 X.

Dette er altsa grunnen til at potensregelen fungerer for X i andre. Lignende utregninger kan gjores for hoyere potenser, og de gir alltid potensregelen.

... Slutt pa del 2. ...

### Del 3: Derivasjon fra definisjonen, flere eksempler

La oss bruke definisjonen pa noen flere funksjoner for a fa trening. Ta f av X [EQ] 3 X. Newton-kvotienten blir 3 ganger startparentes X pluss h sluttparentes minus 3 X, delt pa h [EQ] 3 X pluss 3 h minus 3 X delt pa h [EQ] 3 h delt pa h [EQ] 3. Nar h gar mot 0, er svaret fortsatt 3. Altsa er f derivert av X [EQ] 3. Det stemmer, den deriverte av en lineaer funksjon er stigningstallet.

Na et litt vanskeligere eksempel: f av X [EQ] X i andre pluss 1. Newton-kvotienten er startparentes X pluss h sluttparentes i andre pluss 1 minus X i andre minus 1, delt pa h [EQ] X i andre pluss 2 X h pluss h i andre pluss 1 minus X i andre minus 1, delt pa h [EQ] 2 X h pluss h i andre delt pa h [EQ] 2 X pluss h. Nar h gar mot 0, far vi f derivert av X [EQ] 2 X. Legg merke til at konstanten pluss 1 ikke pavirker den deriverte, den "forsvant" i utregningen.

Et tredje eksempel: f av X [EQ] 2 X i andre minus X. Newton-kvotienten gir 2 ganger startparentes X pluss h sluttparentes i andre minus startparentes X pluss h sluttparentes minus 2 X i andre pluss X, delt pa h. Vi utvider og forenkler: 2 X i andre pluss 4 X h pluss 2 h i andre minus X minus h minus 2 X i andre pluss X, delt pa h [EQ] 4 X h pluss 2 h i andre minus h delt pa h [EQ] 4 X pluss 2 h minus 1. Grenseverdien nar h gar mot 0 gir f derivert av X [EQ] 4 X minus 1.

... Slutt pa del 3. ...

### Del 4: Numerisk derivasjon

Noen ganger er det vanskelig eller umulig a finne den eksakte deriverte. Kanskje funksjonen er for komplisert, eller kanskje du bare har en tabell med tallverdier og ingen formel. Da bruker vi numerisk derivasjon, som gir en tilnaermet verdi.

Den enkleste metoden er a bruke Newton-kvotienten direkte med en liten verdi av h: f derivert av X er omtrent lik f av startparentes X pluss h sluttparentes minus f av X, delt pa h. Dette kalles framoverdifferansen fordi vi ser "fremover" fra X til X pluss h.

Men det finnes en bedre metode: sentraldifferansen. I stedet for a se bare fremover, ser vi litt til begge sider:

f derivert av X er omtrent lik f av startparentes X pluss h sluttparentes minus f av startparentes X minus h sluttparentes, delt pa 2 h

Sentraldifferansen er mer noyaktig fordi den balanserer feilen pa begge sider av punktet. La oss prove: f av X [EQ] X i andre, X [EQ] 3, h [EQ] 0 komma 1. Sentraldifferansen gir f av 3 komma 1 minus f av 2 komma 9 delt pa 0 komma 2 [EQ] 9 komma 61 minus 8 komma 41 delt pa 0 komma 2 [EQ] 1 komma 2 delt pa 0 komma 2 [EQ] 6. Den eksakte verdien er f derivert av 3 [EQ] 6, sa sentraldifferansen traff eksakt her!

... Slutt pa del 4. ...

### Del 5: Sammenhengen mellom alt vi har laert

La oss stoppe opp og se det store bildet. Vi har na tre mater a tenke pa den deriverte:

Den grafiske tilnaermingen: den deriverte er stigningstallet til tangenten. Vi kan tegne tangenten og lese av stigningstallet. Denne metoden gir god intuisjon, men er ikke alltid noyaktig.

Den algebraiske tilnaermingen: vi bruker derivasjonsreglene, potensregelen, sumregelen og sa videre, til a finne et eksakt uttrykk for f derivert av X. Denne metoden er rask og gir noyaktige svar for funksjoner vi kjenner reglene for.

Den numeriske tilnaermingen: vi bruker Newton-kvotienten eller sentraldifferansen med en liten h for a tilnaerme f derivert av X. Denne metoden fungerer selv nar vi ikke har en formel for funksjonen, bare datapunkter.

Alle tre tilnaermingene er nyttige i ulike situasjoner. Derivasjonsreglene er det du bruker mest til daglig, men den formelle definisjonen forklarer hvorfor reglene virker, og numerisk derivasjon er uvurderlig nar du jobber med data fra virkeligheten.

... Slutt pa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi sett hva som ligger under derivasjonsreglene vi allerede har laert. Newton-kvotienten, f av startparentes X pluss h sluttparentes minus f av X delt pa h, gir gjennomsnittlig vekstfart mellom X og X pluss h, og den er stigningstallet til sekanten mellom disse to punktene.

Definisjonen av den deriverte sier at f derivert av X [EQ] grenseverdien nar h gar mot 0 av f av startparentes X pluss h sluttparentes minus f av X delt pa h. Det er grenseverdien av Newton-kvotienten nar steglengden h gar mot null. Denne definisjonen forklarer hvorfor potensregelen og de andre reglene fungerer, og den kan brukes til a derivere funksjoner fra bunnen av.

Numerisk derivasjon gir tilnaermede verdier av den deriverte. Framoverdifferansen bruker Newton-kvotienten med en liten h, mens sentraldifferansen, f av startparentes X pluss h sluttparentes minus f av startparentes X minus h sluttparentes delt pa 2 h, er mer noyaktig fordi den ser symmetrisk til begge sider. Numerisk derivasjon er spesielt nyttig nar vi ikke har en formel for funksjonen.

... Slutt pa del 6. ...

---

## Kapittel 7.6: Derivasjon av polynomfunksjoner

### Del 1: Verktøykassen for derivasjon

I de foregaende kapitlene har vi mott derivasjonsreglene litt etter litt. Na er det tid for a samle dem og bruke dem systematisk pa polynomfunksjoner, den store familien av funksjoner som er bygget opp av potenser av X med koeffisienter.

Et polynom ser generelt slik ut: f av X [EQ] a-n ganger X opphøyd i n pluss a-n minus 1 ganger X opphøyd i n minus 1 pluss og sa videre pluss a-1 ganger X pluss a-0. For eksempel er 3 X opphøyd i 4 minus 2 X i tredje pluss X minus 7 et polynom av grad 4. I dette kapittelet skal vi bli eksperter pa a derivere slike funksjoner, raskt og sikkert. Vi skal ogsa se pa negative og brok-eksponenter, og laere om andrederiverte.

La oss starte med a ha alle reglene klart for oss. Potensregelen sier at f av X [EQ] X opphøyd i n gir f derivert av X [EQ] n ganger X opphøyd i n minus 1. Konstantregelen sier at en konstant har derivert lik null. Konstantmultiplikasjon betyr at startparentes c ganger f sluttparentes derivert av X [EQ] c ganger f derivert av X, koeffisienter kan flyttes utenfor derivasjonen. Og sumregelen lar oss derivere ledd for ledd: startparentes f pluss g sluttparentes derivert [EQ] f derivert pluss g derivert.

Nar vi kombinerer disse reglene, kan vi derivere ethvert polynom. Teknikken er alltid den samme: ga gjennom hvert ledd, bruk potensregelen med koeffisienten, og sett sammen.

La oss ta f av X [EQ] 5 X opphøyd i 4. Koeffisienten 5 multipliseres med eksponenten 4: f derivert av X [EQ] 5 ganger 4 ganger X i tredje [EQ] 20 X i tredje.

Et mer sammensatt eksempel: f av X [EQ] X i tredje pluss X i andre minus 7 X pluss 3. Vi deriverer ledd for ledd: X i tredje gir 3 X i andre, X i andre gir 2 X, minus 7 X gir minus 7, og konstanten 3 gir 0. Resultatet er f derivert av X [EQ] 3 X i andre pluss 2 X minus 7.

Og ett til: f av X [EQ] 2 X opphøyd i 5 minus en halv ganger X opphøyd i 4 pluss 3 X. Her far vi f derivert av X [EQ] 10 X opphøyd i 4 minus 2 X i tredje pluss 3. Merk at en halv ganger 4 [EQ] 2.

... Slutt pa del 1. ...

### Del 2: Negative og brok-eksponenter

Potensregelen fungerer ikke bare for positive heltall, den gjelder for alle eksponenter, inkludert negative tall og broker. Det betyr at vi kan derivere funksjoner som inneholder broker med X i nevneren.

Nokkelen er a skrive om brokene til potensform. For eksempel er 1 delt pa X i andre [EQ] X opphøyd i minus 2, og 3 delt pa X i tredje [EQ] 3 ganger X opphøyd i minus 3. Nar vi har potensform, bruker vi potensregelen som vanlig.

La oss derivere f av X [EQ] 3 delt pa X i andre [EQ] 3 ganger X opphøyd i minus 2. Med potensregelen: f derivert av X [EQ] 3 ganger startparentes minus 2 sluttparentes ganger X opphøyd i minus 3 [EQ] minus 6 ganger X opphøyd i minus 3 [EQ] minus 6 delt pa X i tredje. Legg merke til at eksponenten minus 2 flyttes ned som koeffisient, og multipliseres med 3, og den nye eksponenten er minus 2 minus 1 [EQ] minus 3.

Et annet eksempel: f av X [EQ] 1 delt pa X pluss 2 X [EQ] X opphøyd i minus 1 pluss 2 X. Vi deriverer: f derivert av X [EQ] minus 1 ganger X opphøyd i minus 2 pluss 2 [EQ] minus 1 delt pa X i andre pluss 2. Du kan ogsa skrive det som f derivert av X [EQ] 2 minus 1 delt pa X i andre.

Tilsvarende gir kvadratroten av X [EQ] X opphøyd i en halv den deriverte en halv ganger X opphøyd i minus en halv [EQ] 1 delt pa 2 ganger kvadratroten av X. Brok-eksponenter folger noyaktig samme regel.

... Slutt pa del 2. ...

### Del 3: Andrederiverte

Hva skjer hvis vi deriverer den deriverte? Da far vi en ny funksjon som kalles andrederiverte, og den skrives f dobbeltderivert av X. Prosessen er enkel: vi deriverer f av X for a fa f derivert av X, og deriverer deretter f derivert av X for a fa f dobbeltderivert av X.

La oss ta f av X [EQ] X opphøyd i 4 minus 3 X i andre pluss 2 X. Forst finner vi f derivert av X [EQ] 4 X i tredje minus 6 X pluss 2. Deretter deriverer vi f derivert av X: f dobbeltderivert av X [EQ] 12 X i andre minus 6.

Andrederiverte har en viktig fysisk tolkning. Hvis f av X er posisjon, er f derivert av X fart og f dobbeltderivert av X akselerasjon. Andrederiverte er ogsa avgjorende for a bestemme om et punkt der f derivert av X [EQ] 0 er et toppunkt eller bunnpunkt, noe vi utforsker grundig i neste kapittel.

La oss ta et fullstendig eksempel. For f av X [EQ] X i tredje minus 2 X i andre pluss X finner vi f derivert av X [EQ] 3 X i andre minus 4 X pluss 1 og f dobbeltderivert av X [EQ] 6 X minus 4. Vi kan na beregne verdier: f derivert av 2 [EQ] 12 minus 8 pluss 1 [EQ] 5 og f dobbeltderivert av 2 [EQ] 12 minus 4 [EQ] 8. Den momentane vekstfarten i X [EQ] 2 er 5, og akselerasjonen, endringen i vekstfart, er 8.

... Slutt pa del 3. ...

### Del 4: Beregne derivert i et punkt

En vanlig oppgave er a finne verdien av den deriverte, eller andrederiverte, i et bestemt punkt. Fremgangsmaten er alltid den samme: forst finner du det generelle uttrykket for f derivert av X, og sa setter du inn verdien for X.

La oss prove med f av X [EQ] X opphøyd i 4 minus 2 X i tredje. Deriverer vi, far vi f derivert av X [EQ] 4 X i tredje minus 6 X i andre. For a finne f derivert av 1 setter vi inn: f derivert av 1 [EQ] 4 ganger 1 minus 6 ganger 1 [EQ] 4 minus 6 [EQ] minus 2. Altsa er den momentane vekstfarten minus 2 nar X [EQ] 1.

Andrederiverte er f dobbeltderivert av X [EQ] 12 X i andre minus 12 X. Vi setter inn X [EQ] 1: f dobbeltderivert av 1 [EQ] 12 minus 12 [EQ] 0. Andrederiverte er null i dette punktet, noe som kan tyde pa et vendepunkt.

La oss ogsa prove f av X [EQ] en tredel ganger X i tredje minus X i andre pluss X. Den deriverte er f derivert av X [EQ] X i andre minus 2 X pluss 1. Vi setter inn X [EQ] 3: f derivert av 3 [EQ] 9 minus 6 pluss 1 [EQ] 4. Andrederiverte er f dobbeltderivert av X [EQ] 2 X minus 2, og f dobbeltderivert av 3 [EQ] 6 minus 2 [EQ] 4. Begge gir verdien 4 her, men det er bare tilfeldigheter, de to verdiene betyr forskjellige ting.

... Slutt pa del 4. ...

### Del 5: Systematisk polynomderivasjon

La oss avslutte med a oppsummere den systematiske fremgangsmaten for a derivere et polynom. Det er en mekanisk prosess som alltid fungerer.

For hvert ledd i polynomet gjor du folgende: multipliser koeffisienten med eksponenten, og reduser eksponenten med 1. Konstantledd forsvinner. For eksempel: minus X i tredje pluss 4 X i andre minus 6 gir f derivert av X [EQ] minus 3 X i andre pluss 8 X. Her er minus 1 ganger 3 [EQ] minus 3 for forste ledd, 4 ganger 2 [EQ] 8 for andre ledd, og minus 6 forsvinner.

Hvis du stoter pa broker i nevneren, skriv dem om til negative eksponenter forst. For eksempel: X i andre pluss 4 delt pa X [EQ] X i andre pluss 4 ganger X opphøyd i minus 1 gir f derivert av X [EQ] 2 X pluss 4 ganger startparentes minus 1 sluttparentes ganger X opphøyd i minus 2 [EQ] 2 X minus 4 delt pa X i andre.

For andrederiverte gjentar du prosessen pa den deriverte. Sjekk alltid svaret ditt ved a verifisere med GeoGebra, eller ved a kontrollere at dimensjonene, gradene, gir mening. Den deriverte av et polynom av grad n er alltid et polynom av grad n minus 1.

... Slutt pa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi samlet og utvidet verktøykassen for derivasjon av polynomer. De fire grunnreglene er potensregelen, X opphøyd i n derivert [EQ] n ganger X opphøyd i n minus 1, konstantregelen, c derivert [EQ] 0, konstantmultiplikasjon, c ganger f derivert [EQ] c ganger f derivert, og sumregelen, f pluss g derivert [EQ] f derivert pluss g derivert.

Vi har sett at potensregelen fungerer ogsa for negative eksponenter. For a derivere broker som a delt pa X opphøyd i n, skriver vi dem om til a ganger X opphøyd i minus n og bruker potensregelen direkte. Det samme gjelder for brok-eksponenter som kvadratroten av X [EQ] X opphøyd i en halv.

Andrederiverte f dobbeltderivert av X finner vi ved a derivere f derivert av X en gang til. Andrederiverte forteller oss om endringshastigheten selv endrer seg, i fysikken svarer dette til akselerasjon. For a beregne den deriverte i et bestemt punkt finner vi forst det generelle uttrykket og setter deretter inn verdien for X.

... Slutt pa del 6. ...

---

## Kapittel 7.7: Praktisk bruk av derivasjon

### Del 1: Matematikk med formal

Hittil har vi laert hva derivasjon er og hvordan vi gjor det. Na er det tid for det mest spennende sporsmalet: hva kan vi bruke det til? Svaret er overraskende mye.

Derivasjon lar oss finne toppunkter og bunnpunkter pa en graf, noe som betyr at vi kan lose optimeringsproblemer, for eksempel a finne den prisen som gir mest profitt, eller de dimensjonene som gir storst areal. Vi kan ogsa analysere bevegelse ved a koble derivasjon til fart og akselerasjon. I dette kapittelet ser vi pa disse praktiske anvendelsene gjennom konkrete eksempler.

Vi har allerede laert at f derivert av X [EQ] 0 i punkter der grafen har en horisontal tangent. Disse punktene er kandidater for toppunkt, lokalt maksimum, eller bunnpunkt, lokalt minimum, og vi kaller dem ekstremalpunkt.

Fremgangsmaten er systematisk. Forst finner du f derivert av X. Deretter loser du likningen f derivert av X [EQ] 0 for a finne kandidatene. Til slutt bruker du andrederiverte for a avgjore hva slags punkt det er: hvis f dobbeltderivert av a er mindre enn 0, er startparentes a, f av a sluttparentes et toppunkt, grafen boyer nedover, og hvis f dobbeltderivert av a er storre enn 0, er det et bunnpunkt, grafen boyer oppover.

La oss prove med f av X [EQ] X i tredje minus 3 X. Forst: f derivert av X [EQ] 3 X i andre minus 3. Vi setter f derivert av X [EQ] 0: 3 X i andre minus 3 [EQ] 0, altsa X i andre [EQ] 1, som gir X [EQ] minus 1 eller X [EQ] 1. Andrederiverte er f dobbeltderivert av X [EQ] 6 X. Vi sjekker: f dobbeltderivert av minus 1 [EQ] minus 6 er mindre enn 0, altsa er X [EQ] minus 1 et toppunkt. f dobbeltderivert av 1 [EQ] 6 er storre enn 0, altsa er X [EQ] 1 et bunnpunkt. Funksjonsverdiene er f av minus 1 [EQ] 2 og f av 1 [EQ] minus 2. Vi har toppunkt startparentes minus 1, 2 sluttparentes og bunnpunkt startparentes 1, minus 2 sluttparentes.

... Slutt pa del 1. ...

### Del 2: Optimering

Mange problemer i virkeligheten handler om a finne den beste losningen. En bonde vil ha storst mulig innhegning med en gitt mengde gjerde. En bedrift vil maksimere profitten. En ingenior vil minimere materialbruk. Alt dette er optimeringsproblemer, og derivasjon er verktøyet som loser dem.

Fremgangsmaten folger alltid samme monster. Forst leser du problemet og identifiserer hva som skal maksimeres eller minimeres. Deretter setter du opp en funksjon som beskriver dette. Sa finner du f derivert av X [EQ] 0 og loser for X. Til slutt kontrollerer du at losningen virkelig gir det du onsker, et maksimum eller minimum, og at den er realistisk.

Her er et klassisk eksempel. En bonde har 100 meter gjerde og vil lage et rektangulaert innhegnet omrade langs en elv. Siden elven fungerer som den ene veggen, trenger han bare gjerde langs tre sider. La X vaere bredden, sidene vinkelrett pa elven, og y lengden, parallelt med elven. Gjerdet gir begrensningen 2 X pluss y [EQ] 100, altsa y [EQ] 100 minus 2 X. Arealet er A av X [EQ] X ganger y [EQ] X ganger startparentes 100 minus 2 X sluttparentes [EQ] 100 X minus 2 X i andre.

Vi deriverer: A derivert av X [EQ] 100 minus 4 X. Vi setter A derivert av X [EQ] 0: X [EQ] 25. Da er y [EQ] 50 og arealet er 1250 kvadratmeter. Sjekk: A dobbeltderivert av X [EQ] minus 4 er mindre enn 0, altsa er dette et maksimum.

... Slutt pa del 2. ...

### Del 3: Fart og akselerasjon

En av de mest naturlige anvendelsene av derivasjon er a analysere bevegelse. Hvis s av t beskriver posisjonen til et objekt som funksjon av tid t, gir den deriverte s derivert av t [EQ] v av t oss farten, hastigheten. Deriverer vi enda en gang, gir andrederiverte s dobbeltderivert av t [EQ] v derivert av t [EQ] a av t oss akselerasjonen.

La oss se pa en partikkel som beveger seg med posisjonsfunksjon s av t [EQ] t i tredje minus 6 t i andre pluss 9 t, der s er i meter og t i sekunder. Farten er v av t [EQ] s derivert av t [EQ] 3 t i andre minus 12 t pluss 9, og akselerasjonen er a av t [EQ] v derivert av t [EQ] 6 t minus 12.

Nar er partikkelen i ro? Det skjer nar v av t [EQ] 0: 3 t i andre minus 12 t pluss 9 [EQ] 0, altsa t i andre minus 4 t pluss 3 [EQ] 0, som gir startparentes t minus 1 sluttparentes ganger startparentes t minus 3 sluttparentes [EQ] 0. Partikkelen er i ro ved t [EQ] 1 sekund og t [EQ] 3 sekunder.

Positiv fart betyr at partikkelen beveger seg i positiv retning, negativ fart betyr den motsatte retningen. Vi kan skrive v av t [EQ] 3 ganger startparentes t minus 1 sluttparentes ganger startparentes t minus 3 sluttparentes og lese av fortegnene: farten er positiv nar t er mindre enn 1 eller t er storre enn 3, og negativ mellom t [EQ] 1 og t [EQ] 3.

... Slutt pa del 3. ...

### Del 4: Profittmaksimering

Optimering er spesielt viktig i okonomi. Tenk deg en bedrift som produserer en vare. Profittfunksjonen er P av X [EQ] minus X i andre pluss 40 X minus 300 kroner, der X er antall enheter produsert per dag.

Hvor mange enheter bor bedriften produsere for a maksimere profitten? Vi deriverer: P derivert av X [EQ] minus 2 X pluss 40. Vi setter P derivert av X [EQ] 0: minus 2 X pluss 40 [EQ] 0, altsa X [EQ] 20. Andrederiverte er P dobbeltderivert av X [EQ] minus 2 er mindre enn 0, som bekrefter at dette er et toppunkt, maksimum. Maksimal profitt er P av 20 [EQ] minus 400 pluss 800 minus 300 [EQ] 100 kroner per dag.

Et annet eksempel: profittfunksjonen er P av X [EQ] minus 2 X i andre pluss 100 X minus 800. Vi far P derivert av X [EQ] minus 4 X pluss 100 [EQ] 0, altsa X [EQ] 25 enheter. Maksimal profitt er P av 25 [EQ] minus 2 ganger 625 pluss 2500 minus 800 [EQ] minus 1250 pluss 2500 minus 800 [EQ] 450 kroner.

Legg merke til at profittfunksjonen alltid har negativ koeffisient foran X i andre, noe som betyr at grafen er en nedovervendt parabel. Det garanterer at det finnes et maksimum. Dette er typisk for mange okonomiske modeller.

... Slutt pa del 4. ...

### Del 5: Geometrisk optimering

La oss avslutte med enda en type optimeringsproblem: geometrisk optimering. Disse oppgavene handler om a finne de dimensjonene som gir storst areal, minst omkrets, eller lignende.

Et klassisk problem: et rektangel har omkrets 24 centimeter. Hvilke sidelengder gir storst areal? La de to sidelengdene vaere X og y. Omkretsen gir begrensningen 2 X pluss 2 y [EQ] 24, altsa y [EQ] 12 minus X. Arealet er A av X [EQ] X ganger y [EQ] X ganger startparentes 12 minus X sluttparentes [EQ] 12 X minus X i andre.

Vi deriverer: A derivert av X [EQ] 12 minus 2 X. Vi setter A derivert av X [EQ] 0: X [EQ] 6. Da er y [EQ] 12 minus 6 [EQ] 6. Rektangelet med storst areal har altsa sidelengder 6 centimeter og 6 centimeter, det er et kvadrat! Arealet er 36 kvadratcentimeter.

Dette er faktisk et generelt resultat: blant alle rektangler med en gitt omkrets, er det kvadratet som har storst areal. Derivasjon ga oss dette elegante svaret med bare noen fa regnesteg.

Monsteret i alle optimeringsproblemer er det samme: sett opp funksjonen, finn der den deriverte er null, sjekk at det er riktig type ekstremalpunkt, og tolk svaret i konteksten av problemet.

... Slutt pa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi sett derivasjon i aksjon gjennom praktiske problemer.

For a finne ekstremalpunkt, topp- og bunnpunkt, setter vi f derivert av X [EQ] 0 og loser for X. Vi bruker andrederiverte for a avgjore type: f dobbeltderivert av a er mindre enn 0 betyr toppunkt og f dobbeltderivert av a er storre enn 0 betyr bunnpunkt.

Optimeringsproblemer loses i fire steg: sett opp funksjonen som skal optimeres, finn der f derivert av X [EQ] 0, kontroller at det er riktig type ekstremalpunkt, og sjekk at losningen er realistisk. Vi har sett eksempler med gjerdeproblem, profittmaksimering og geometrisk optimering.

For bevegelse gjelder at derivert av posisjon gir fart, v av t [EQ] s derivert av t, og derivert av fart gir akselerasjon, a av t [EQ] s dobbeltderivert av t. Farten er null nar objektet er i ro, positiv fart betyr bevegelse i positiv retning, og negativ fart betyr motsatt retning. Akselerasjonen forteller om farten oker eller minker.

... Slutt pa del 6. ...
