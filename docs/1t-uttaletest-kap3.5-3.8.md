# 1T Uttaletest: Kapittel 3.5 til 3.8

Konvertert for ElevenLabs TTS. All LaTeX er omskrevet til naturlig norsk tale.

---

## Kapittel 3.5: Nullpunkter og fortegn

### Del 1: Der parabelen krysser x-aksen og faktorisering

I forrige kapittel laerte du aa finne topp- og bunnpunkt til parabeler. Men det er ett spoersmaal vi ikke har besvart: hvor krysser parabelen X-aksen? Disse krysningspunktene kalles nullpunkter, fordi det er der f av X [EQ] 0. Aa finne nullpunktene er en av de viktigste ferdighetene i hele matematikken, det handler om aa loese andregradslikningen a X i andre pluss b X pluss c [EQ] 0.

I dette kapittelet skal vi laere to kraftige metoder for aa finne nullpunkter: faktorisering og abc-formelen. Vi skal ogsaa laere aa skrive funksjonen paa faktorisert form og aa analysere fortegnet til funksjonen, altsaa aa finne ut hvor f av X er positiv og hvor den er negativ.

Den enkleste maaten aa finne nullpunkter paa er ved faktorisering. Ideen er aa skrive uttrykket a X i andre pluss b X pluss c som et produkt av to faktorer. Naar et produkt er null, maa minst en av faktorene vaere null, det er nullregelen.

La oss ta f av X [EQ] X i andre minus 5 X pluss 6. Vi leter etter to tall som ganget gir 6, konstantleddet, og addert gir minus 5, koeffisienten foran X. Hva med minus 2 og minus 3? Sjekk: startparentes minus 2 sluttparentes ganger startparentes minus 3 sluttparentes [EQ] 6 og startparentes minus 2 sluttparentes pluss startparentes minus 3 sluttparentes [EQ] minus 5. Perfekt! Da kan vi skrive f av X [EQ] startparentes X minus 2 sluttparentes ganger startparentes X minus 3 sluttparentes.

Naa setter vi f av X [EQ] 0: startparentes X minus 2 sluttparentes ganger startparentes X minus 3 sluttparentes [EQ] 0. Nullregelen sier at enten er X minus 2 [EQ] 0 eller X minus 3 [EQ] 0, altsaa X [EQ] 2 eller X [EQ] 3. Det er nullpunktene.

La oss proeve med g av X [EQ] X i andre pluss 2 X minus 15. Vi trenger to tall som ganget gir minus 15 og addert gir 2. Hva med 5 og minus 3? Sjekk: 5 ganger startparentes minus 3 sluttparentes [EQ] minus 15 og 5 pluss startparentes minus 3 sluttparentes [EQ] 2. Ja! Da er g av X [EQ] startparentes X pluss 5 sluttparentes ganger startparentes X minus 3 sluttparentes, og nullpunktene er X [EQ] minus 5 og X [EQ] 3.

Et spesielt tilfelle er konjugatsetningen: X i andre minus 9 [EQ] startparentes X minus 3 sluttparentes ganger startparentes X pluss 3 sluttparentes, som gir nullpunktene X [EQ] pluss minus 3. Generelt er X i andre minus k i andre [EQ] startparentes X minus k sluttparentes ganger startparentes X pluss k sluttparentes.

Faktorisering er elegant og rask, men den fungerer bare naar tallene gaar pent opp. Heldigvis finnes det en metode som alltid fungerer.

... Slutt paa del 1. ...

### Del 2: Abc-formelen

Naar faktorisering ikke lykkes, trekker vi frem det kraftigste verktoeyet vi har: abc-formelen. Den loeser enhver andregradslikning a X i andre pluss b X pluss c [EQ] 0:

X [EQ] startparentes minus b pluss minus kvadratroten av b i andre minus 4 a c sluttparentes delt paa 2 a

Det lille symbolet pluss minus betyr at du faar to svar: ett med pluss og ett med minus. Uttrykket under rottegnet, D [EQ] b i andre minus 4 a c, kalles diskriminanten, og den forteller deg alt om hvor mange nullpunkter funksjonen har.

Hvis D er stoerre enn 0, finnes det to ulike nullpunkter, parabelen krysser X-aksen to ganger. Hvis D [EQ] 0, er det noeyaktig ett nullpunkt, en dobbeltrot, parabelen beroerer X-aksen i ett punkt. Og hvis D er mindre enn 0, finnes det ingen nullpunkter, parabelen krysser aldri X-aksen.

La oss bruke formelen paa f av X [EQ] 2 X i andre pluss 4 X minus 6. Her er a [EQ] 2, b [EQ] 4, c [EQ] minus 6. Diskriminanten er D [EQ] 16 minus 4 ganger 2 ganger startparentes minus 6 sluttparentes [EQ] 16 pluss 48 [EQ] 64. Siden D [EQ] 64 er stoerre enn 0, har vi to nullpunkter. Vi regner videre: X [EQ] startparentes minus 4 pluss minus kvadratroten av 64 sluttparentes delt paa 4 [EQ] startparentes minus 4 pluss minus 8 sluttparentes delt paa 4. Det gir X [EQ] 4 delt paa 4 [EQ] 1 eller X [EQ] minus 12 delt paa 4 [EQ] minus 3. Nullpunktene er X [EQ] 1 og X [EQ] minus 3.

Abc-formelen fungerer alltid, uansett om tallene er pene eller ikke. For eksempel gir f av X [EQ] X i andre minus 4 X pluss 1 diskriminanten D [EQ] 16 minus 4 [EQ] 12, og nullpunktene X [EQ] startparentes 4 pluss minus kvadratroten av 12 sluttparentes delt paa 2 [EQ] 2 pluss minus kvadratroten av 3. Svaret inneholder en rot, men det er helt legitimt.

... Slutt paa del 2. ...

### Del 3: Faktorisert form

Naar du har funnet nullpunktene x-1 og x-2 til en andregradsfunksjon, kan du skrive den paa faktorisert form:

f av X [EQ] a ganger startparentes X minus x-1 sluttparentes ganger startparentes X minus x-2 sluttparentes

Her er a den ledende koeffisienten, og nullpunktene leses direkte fra uttrykket. Denne formen er utrolig nyttig fordi den gir deg nullpunktene med et blikk.

La oss skrive f av X [EQ] 2 X i andre minus 8 X pluss 6 paa faktorisert form. Foerst finner vi nullpunktene med abc-formelen: a [EQ] 2, b [EQ] minus 8, c [EQ] 6. Diskriminanten er D [EQ] 64 minus 48 [EQ] 16. Nullpunktene er X [EQ] startparentes 8 pluss minus 4 sluttparentes delt paa 4, altsaa X [EQ] 3 eller X [EQ] 1. Faktorisert form: f av X [EQ] 2 ganger startparentes X minus 1 sluttparentes ganger startparentes X minus 3 sluttparentes.

Vi kan kontrollere ved aa gange ut: 2 ganger startparentes X minus 1 sluttparentes ganger startparentes X minus 3 sluttparentes [EQ] 2 ganger startparentes X i andre minus 4 X pluss 3 sluttparentes [EQ] 2 X i andre minus 8 X pluss 6. Stemmer!

Et annet eksempel: g av X [EQ] minus X i andre pluss 4 X pluss 5. Her er a [EQ] minus 1, b [EQ] 4, c [EQ] 5. Diskriminanten: D [EQ] 16 pluss 20 [EQ] 36. Nullpunktene: X [EQ] startparentes minus 4 pluss minus 6 sluttparentes delt paa minus 2. Det gir X [EQ] startparentes minus 4 pluss 6 sluttparentes delt paa minus 2 [EQ] minus 1 eller X [EQ] startparentes minus 4 minus 6 sluttparentes delt paa minus 2 [EQ] 5. Faktorisert form: g av X [EQ] minus startparentes X pluss 1 sluttparentes ganger startparentes X minus 5 sluttparentes.

Legg merke til minustegnet foran, det er den ledende koeffisienten a [EQ] minus 1. Kontrollen: minus startparentes X pluss 1 sluttparentes ganger startparentes X minus 5 sluttparentes [EQ] minus startparentes X i andre minus 4 X minus 5 sluttparentes [EQ] minus X i andre pluss 4 X pluss 5. Perfekt!

... Slutt paa del 3. ...

### Del 4: Fortegnsanalyse

Naa som vi kan finne nullpunktene, aapner det seg et nytt spoersmaal: i hvilke intervaller er f av X positiv, og i hvilke er den negativ? Aa besvare dette kalles fortegnsanalyse, og resultatet viser vi gjerne i en fortegnslinje.

Metoden er enkel. Foerst finner du nullpunktene, de deler tallinjen i intervaller. Deretter tester du en X-verdi i hvert intervall for aa se om f av X er positiv eller negativ.

La oss gjoere dette for f av X [EQ] X i andre minus 4. Nullpunktene er X [EQ] minus 2 og X [EQ] 2, konjugatsetningen: X i andre minus 4 [EQ] startparentes X minus 2 sluttparentes ganger startparentes X pluss 2 sluttparentes. Tallinjen deles i tre intervaller: X er mindre enn minus 2, minus 2 er mindre enn X er mindre enn 2, og X er stoerre enn 2.

Vi tester: for X [EQ] minus 3 faar vi f av minus 3 [EQ] 9 minus 4 [EQ] 5 er stoerre enn 0. For X [EQ] 0 faar vi f av 0 [EQ] minus 4 er mindre enn 0. For X [EQ] 3 faar vi f av 3 [EQ] 9 minus 4 [EQ] 5 er stoerre enn 0. Fortegnslinjen viser altsaa pluss, null, minus, null, pluss.

Det finnes en huskeregel som sparer deg for mye regning. Naar a er stoerre enn 0, parabelen aapner oppover, er f av X stoerre enn 0 utenfor nullpunktene og f av X er mindre enn 0 mellom dem. Naar a er mindre enn 0, parabelen aapner nedover, er det omvendt: f av X er stoerre enn 0 mellom nullpunktene og f av X er mindre enn 0 utenfor dem.

Tenk paa det visuelt: en smilende parabel, a er stoerre enn 0, er over X-aksen paa utsidene og under mellom nullpunktene. En sur parabel, a er mindre enn 0, er over X-aksen mellom nullpunktene og under paa utsidene.

... Slutt paa del 4. ...

### Del 5: Andregradsulikheter

Fortegnsanalyse er ikke bare teori, den lar oss loese ulikheter med andregradsfunksjoner. Spoersmaal som for hvilke X er X i andre minus 3 X minus 10 stoerre enn 0 besvares ved aa finne nullpunktene og bruke fortegnsanalyse.

La oss loese X i andre minus 3 X minus 10 er stoerre enn 0. Foerst faktoriserer vi: vi trenger to tall som ganget gir minus 10 og addert gir minus 3. Det er minus 5 og 2: startparentes X minus 5 sluttparentes ganger startparentes X pluss 2 sluttparentes [EQ] 0 gir nullpunktene X [EQ] 5 og X [EQ] minus 2. Siden a [EQ] 1 er stoerre enn 0, er parabelen positiv utenfor nullpunktene. Loesningen er X er mindre enn minus 2 eller X er stoerre enn 5.

Hva med en ulikhet der vi ser etter den negative delen? La oss loese X i andre minus 6 X pluss 8 er mindre enn eller lik 0. Faktorisering: startparentes X minus 2 sluttparentes ganger startparentes X minus 4 sluttparentes [EQ] 0 gir X [EQ] 2 og X [EQ] 4. Siden a [EQ] 1 er stoerre enn 0, er f av X er mindre enn eller lik 0 mellom nullpunktene, inkludert nullpunktene selv, fordi vi har er mindre enn eller lik. Loesningen er 2 er mindre enn eller lik X er mindre enn eller lik 4.

Og med negativ ledende koeffisient? La oss loese minus X i andre pluss 2 X pluss 3 er stoerre enn 0. Nullpunkter: X i andre minus 2 X minus 3 [EQ] 0 gir startparentes X minus 3 sluttparentes ganger startparentes X pluss 1 sluttparentes [EQ] 0, altsaa X [EQ] 3 og X [EQ] minus 1. Siden a [EQ] minus 1 er mindre enn 0, er funksjonen positiv mellom nullpunktene. Loesningen er minus 1 er mindre enn X er mindre enn 3.

Et siste spennende spoersmaal: for hvilke verdier av k har f av X [EQ] X i andre minus 4 X pluss k to ulike nullpunkter? Vi trenger D stoerre enn 0: startparentes minus 4 sluttparentes i andre minus 4 ganger 1 ganger k er stoerre enn 0, altsaa 16 minus 4 k er stoerre enn 0, som gir k er mindre enn 4. Her bestemmer diskriminanten ikke bare om det finnes nullpunkter, men betingelsen for at de skal eksistere.

... Slutt paa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi laert aa finne nullpunktene til andregradsfunksjoner, punktene der f av X [EQ] 0.

Faktorisering er den raskeste metoden: finn to tall som ganget gir a ganger c og addert gir b, og skriv uttrykket som et produkt. Husk spesialtilfellet X i andre minus k i andre [EQ] startparentes X minus k sluttparentes ganger startparentes X pluss k sluttparentes.

Abc-formelen X [EQ] startparentes minus b pluss minus kvadratroten av b i andre minus 4 a c sluttparentes delt paa 2 a fungerer alltid. Diskriminanten D [EQ] b i andre minus 4 a c forteller deg antall nullpunkter: D stoerre enn 0 gir to, D [EQ] 0 gir ett, dobbeltrot, D er mindre enn 0 gir ingen.

Naar du kjenner nullpunktene x-1 og x-2, kan du skrive funksjonen paa faktorisert form: f av X [EQ] a ganger startparentes X minus x-1 sluttparentes ganger startparentes X minus x-2 sluttparentes.

Fortegnsanalyse viser hvor f av X er positiv og negativ. For a stoerre enn 0 er funksjonen positiv utenfor nullpunktene, for a er mindre enn 0 er den positiv mellom dem. Denne kunnskapen lar deg loese andregradsulikheter.

... Slutt paa del 6. ...

---

## Kapittel 3.6: Polynomfunksjoner

### Del 1: Utover parabelen og grad og ledende koeffisient

Til naa har vi jobbet med lineaere funksjoner, grad 1, og andregradsfunksjoner, grad 2. Men hva skjer naar eksponentene blir enda stoerre? Da er vi inne i verden til polynomfunksjoner, en familie av funksjoner som inkluderer alt fra rette linjer til ville svingete kurver.

Et polynom er et uttrykk der variabelen har hele, ikke-negative eksponenter. Vi har allerede moett 3 X pluss 2, grad 1, og X i andre minus 5 X pluss 6, grad 2. Naa utvider vi horisonten til tredjegrads-, fjerdegrads- og enda hoeyere polynomer. Disse funksjonene kan svinge opp og ned flere ganger, ha mange nullpunkter, og oppfoere seg svaert forskjellig i ulike deler av tallinjen. I dette kapittelet skal vi laere aa forstaa og temme dem.

Hvert polynom har to noekkel-egenskaper som forteller deg mye om hvordan det oppfoerer seg: graden og den ledende koeffisienten.

Graden til et polynom er den hoeyeste eksponenten. For f av X [EQ] 3 X i fjerde minus 2 X i andre pluss X minus 5 er graden 4, fordi X i fjerde er leddet med hoeyest eksponent. Den ledende koeffisienten er koeffisienten foran leddet med hoeyest eksponent, i dette tilfellet 3. Konstantleddet er tallet uten X, altsaa minus 5.

Det er viktig aa forstaa at et polynom ikke trenger aa ha alle eksponentene representert. I uttrykket 3 X i fjerde minus 2 X i andre pluss X minus 5 mangler X i tredje-leddet, men graden er likevel 4. Det er den hoeyeste eksponenten som teller, ikke om alle leddene er med.

Pass ogsaa paa at leddene ikke alltid staar i rekkefoelje. Hvis noen gir deg h av X [EQ] 2 X minus 7 X i fjerde pluss X i andre, kan det se litt forvirrende ut. Men vi ordner leddene etter synkende eksponent: h av X [EQ] minus 7 X i fjerde pluss X i andre pluss 2 X. Naa ser vi tydelig at graden er 4 og den ledende koeffisienten er minus 7.

En ting til: et polynom av grad 1 er en lineaer funksjon, grad 2 gir en andregradsfunksjon, grad 3 gir en tredjegradsfunksjon, og saa videre. Det vi laerte om parabeler i de forrige kapitlene er altsaa et spesialtilfelle av polynomteori.

... Slutt paa del 1. ...

### Del 2: Endenes oppfoersel

Naar X blir veldig stor, positiv eller negativ, er det leddet med hoeyest eksponent som dominerer totalt. De andre leddene blir ubetydelige i sammenligning. Derfor bestemmer graden og den ledende koeffisienten hva som skjer med grafen i ytterkantene, det vi kaller endenes oppfoersel.

Reglene er overraskende enkle, og de handler om to ting: er graden et partall eller et oddetall, og er den ledende koeffisienten positiv eller negativ?

For partallsgrad, 2, 4, 6, og saa videre, oppfoerer begge endene seg likt. Hvis den ledende koeffisienten a-n er stoerre enn 0, peker begge ender oppover, tenk paa et bredt smilefjes. Hvis a-n er mindre enn 0, peker begge ender nedover, som et fjell.

For oddetallsgrad, 1, 3, 5, og saa videre, gaar endene i motsatte retninger. Hvis a-n er stoerre enn 0, gaar grafen fra nedre venstre til oevre hoeyre, som en stigende S-kurve. Hvis a-n er mindre enn 0, gaar den fra oevre venstre til nedre hoeyre.

La oss ta f av X [EQ] minus X i tredje pluss 4 X. Graden er 3, oddetall, og den ledende koeffisienten er minus 1, negativ. Det betyr at grafen gaar fra oevre venstre til nedre hoeyre. Mer presist: naar X gaar mot minus uendelig, gaar f av X mot pluss uendelig, og naar X gaar mot pluss uendelig, gaar f av X mot minus uendelig.

Et annet eksempel: g av X [EQ] minus X i fjerde pluss 3 X i andre. Graden er 4, partall, og den ledende koeffisienten er minus 1, negativ. Begge ender peker nedover: g av X gaar mot minus uendelig for store absoluttverdi av X.

... Slutt paa del 2. ...

### Del 3: Nullpunkter ved faktorisering

Et polynom av grad n kan ha hoyst n nullpunkter. En tredjegradsfunksjon kan altsaa ha opptil tre nullpunkter, en fjerdegradsfunksjon opptil fire, og saa videre. Den viktige sammenhengen er: hvis X [EQ] r er et nullpunkt for polynomet, saa er startparentes X minus r sluttparentes en faktor.

For aa finne nullpunktene til polynomer av hoeyere grad bruker vi ofte faktorisering. Det vanligste foerste steget er aa trekke ut en felles faktor.

La oss ta f av X [EQ] X i tredje minus 4 X i andre pluss 3 X. Alle tre leddene inneholder X, saa vi trekker ut: f av X [EQ] X ganger startparentes X i andre minus 4 X pluss 3 sluttparentes. Naa har vi et andregradsuttrykk i parentesen, som vi kan faktorisere videre. Vi trenger to tall som ganget gir 3 og addert gir minus 4: det er minus 1 og minus 3. Dermed er f av X [EQ] X ganger startparentes X minus 1 sluttparentes ganger startparentes X minus 3 sluttparentes.

Nullpunktene finner vi ved aa sette hver faktor lik null: X [EQ] 0, X [EQ] 1, eller X [EQ] 3. Tre nullpunkter for en tredjegradsfunksjon, det maksimale antallet.

Et annet eksempel: g av X [EQ] X i tredje minus 9 X. Trekk ut X: g av X [EQ] X ganger startparentes X i andre minus 9 sluttparentes. Vi kjenner igjen konjugatsetningen: X i andre minus 9 [EQ] startparentes X minus 3 sluttparentes ganger startparentes X pluss 3 sluttparentes. Saa g av X [EQ] X ganger startparentes X minus 3 sluttparentes ganger startparentes X pluss 3 sluttparentes, og nullpunktene er X [EQ] 0, X [EQ] 3, og X [EQ] minus 3.

Nokkelen er aa alltid se etter en felles faktor foerst, og deretter bruke teknikkene du allerede kan, faktorisering av andregradsuttrykk, konjugatsetningen, og abc-formelen.

... Slutt paa del 3. ...

### Del 4: Substitusjon

Noen ganger moeter du polynomer som ser vanskelige ut, men som kan loeses med et elegant triks: substitusjon. Dette fungerer spesielt godt for fjerdegradspolynomer der bare partallspotenser opptrer.

Ta for eksempel f av X [EQ] X i fjerde minus 5 X i andre pluss 4. Her er det bare X i fjerde og X i andre, ingen X i tredje eller X. Trikset er aa innfoere en ny variabel u [EQ] X i andre. Da blir X i fjerde [EQ] u i andre, og polynomet forvandles til u i andre minus 5 u pluss 4.

Naa har vi et vanlig andregradsuttrykk i u! Vi faktoriserer: startparentes u minus 1 sluttparentes ganger startparentes u minus 4 sluttparentes [EQ] 0, som gir u [EQ] 1 eller u [EQ] 4. Men vi er ikke ferdige, vi maa tilbake til X. Siden u [EQ] X i andre, har vi X i andre [EQ] 1 eller X i andre [EQ] 4, som gir X [EQ] pluss minus 1 eller X [EQ] pluss minus 2.

Vi kan ogsaa skrive hele faktoriseringen: f av X [EQ] startparentes X i andre minus 1 sluttparentes ganger startparentes X i andre minus 4 sluttparentes [EQ] startparentes X minus 1 sluttparentes ganger startparentes X pluss 1 sluttparentes ganger startparentes X minus 2 sluttparentes ganger startparentes X pluss 2 sluttparentes. Fire nullpunkter for en fjerdegradsfunksjon, det maksimale antallet.

La oss proeve med g av X [EQ] X i fjerde minus 10 X i andre pluss 9. Med u [EQ] X i andre faar vi u i andre minus 10 u pluss 9 [EQ] startparentes u minus 1 sluttparentes ganger startparentes u minus 9 sluttparentes. Tilbake: X i andre [EQ] 1 gir X [EQ] pluss minus 1, og X i andre [EQ] 9 gir X [EQ] pluss minus 3. Nullpunktene er X [EQ] minus 3, minus 1, 1, 3.

Merk at dette trikset ikke fungerer for alle polynomer, men det er gull verdt naar du ser at bare partallspotenser er involvert.

... Slutt paa del 4. ...

### Del 5: Aa finne polynomet fra nullpunktene

Noen ganger jobber vi den andre veien: vi kjenner nullpunktene og skal finne funksjonsuttrykket. Hvis vi vet at et polynom av grad n har nullpunkter x-1, x-2, og saa videre til x-n, kan vi skrive det som f av X [EQ] a ganger startparentes X minus x-1 sluttparentes ganger startparentes X minus x-2 sluttparentes og saa videre ganger startparentes X minus x-n sluttparentes, der a er en ukjent koeffisient som vi maa bestemme med tilleggsinformasjon.

La oss ta et konkret eksempel. Et polynom av grad 3 har nullpunkter X [EQ] minus 2, X [EQ] 1 og X [EQ] 3, og vi vet at f av 0 [EQ] 6. Vi skriver opp: f av X [EQ] a ganger startparentes X pluss 2 sluttparentes ganger startparentes X minus 1 sluttparentes ganger startparentes X minus 3 sluttparentes. For aa finne a bruker vi at f av 0 [EQ] 6: a ganger 2 ganger startparentes minus 1 sluttparentes ganger startparentes minus 3 sluttparentes [EQ] 6 a [EQ] 6, altsaa a [EQ] 1. Svaret er f av X [EQ] startparentes X pluss 2 sluttparentes ganger startparentes X minus 1 sluttparentes ganger startparentes X minus 3 sluttparentes.

En annen nyttig teknikk er aa gjenkjenne at en bestemt verdi er et nullpunkt, og deretter bruke polynomdivisjon eller inspeksjon for aa faktorisere videre. For eksempel: loes X i tredje minus 7 X pluss 6 [EQ] 0. Et hint er aa proeve X [EQ] 1: 1 minus 7 pluss 6 [EQ] 0. Bingo! Siden X [EQ] 1 er en loesning, er startparentes X minus 1 sluttparentes en faktor. Vi deler polynomet paa startparentes X minus 1 sluttparentes og finner X i tredje minus 7 X pluss 6 [EQ] startparentes X minus 1 sluttparentes ganger startparentes X i andre pluss X minus 6 sluttparentes. Andregradsuttrykket faktoriseres: startparentes X pluss 3 sluttparentes ganger startparentes X minus 2 sluttparentes. Alle loesningene er X [EQ] 1, minus 3, 2.

Aa skissere grafen til et polynom handler om aa kombinere alt vi har laert: finn graden, for endenes oppfoersel, finn nullpunktene, for krysningspunktene med X-aksen, finn y-skjaeringen f av 0, og tegn en jevn kurve gjennom punktene.

... Slutt paa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi utvidet horisonten til polynomfunksjoner av vilkaarlig grad.

Graden til et polynom er den hoeyeste eksponenten, og den ledende koeffisienten er koeffisienten foran dette leddet. Sammen bestemmer de grafens endenes oppfoersel: partallsgrad gir ender som peker samme vei, oddetallsgrad gir ender som peker motsatt vei. Positiv ledende koeffisient gir oppoverpekende ender paa hoeyre side, negativ gir nedoverpekende.

Et polynom av grad n har hoyst n nullpunkter. Vi finner nullpunktene ved faktorisering, foerst trekker vi ut eventuelle fellesfaktorer, og deretter bruker vi kjente teknikker som konjugatsetningen og abc-formelen paa andregradsuttrykkene som gjenstaar.

For fjerdegradspolynomer med bare partallspotenser kan vi bruke substitusjon u [EQ] X i andre for aa redusere problemet til et andregradsuttrykk.

Kjenner vi nullpunktene, kan vi rekonstruere polynomet: f av X [EQ] a ganger startparentes X minus x-1 sluttparentes ganger startparentes X minus x-2 sluttparentes og saa videre ganger startparentes X minus x-n sluttparentes, der a bestemmes fra en kjent funksjonsverdi.

... Slutt paa del 6. ...

---

## Kapittel 3.7: Rasjonale funksjoner

### Del 1: Broeker som lever sitt eget liv og definisjonsmengde

Tenk deg at du deler en pizza mellom venner. Deler du den paa fire, faar hver person et greit stykke. Deler du paa to, faar alle mer. Men hva skjer om du proever aa dele paa null? Det gir ingen mening, det er rett og slett umulig. Akkurat dette prinsippet ligger i hjertet av det vi skal utforske naa.

En rasjonal funksjon er en funksjon skrevet som en broek der baade teller og nevner er polynomer. Den generelle formen er f av X [EQ] P av X delt paa Q av X, der P av X og Q av X er polynomer og Q av X er ulik 0. Du har allerede jobbet mye med polynomfunksjoner, rasjonale funksjoner tar oss et steg videre ved aa la polynomer dele paa hverandre. Og nettopp fordi vi deler, oppstaar det dramatiske ting i grafen: usynlige linjer den aldri toer krysse, og hull der funksjonen plutselig forsvinner.

I dette kapittelet skal vi laere om tre sentrale begreper: definisjonsmengde, vertikale asymptoter og horisontale asymptoter. Sammen gir de oss verktoeyene vi trenger for aa forstaa og skissere rasjonale funksjoner.

Det foerste vi alltid maa gjoere med en rasjonal funksjon er aa finne definisjonsmengden. Det hoerest kanskje litt tungt ut, men spoersmaalet er egentlig ganske enkelt: for hvilke X-verdier er funksjonen definert? Siden vi har en broek, er det bare en ting som kan gaa galt, nevneren kan bli null. Og deling paa null er som kjent forbudt i matematikken.

For aa finne definisjonsmengden setter vi altsaa nevneren lik null og loeser likningen. De X-verdiene vi finner, er de verdiene vi maa utelukke.

La oss ta et eksempel. Hva er definisjonsmengden til f av X [EQ] startparentes X pluss 1 sluttparentes delt paa startparentes X i andre minus 4 sluttparentes? Vi setter nevneren lik null: X i andre minus 4 [EQ] 0. Vi kan faktorisere dette som startparentes X minus 2 sluttparentes ganger startparentes X pluss 2 sluttparentes [EQ] 0, som gir oss X [EQ] 2 eller X [EQ] minus 2. Altsaa er funksjonen udefinert i disse to punktene. Vi skriver definisjonsmengden som definisjonsmengden er de reelle tallene R minus mengden minus 2 og 2, som betyr alle reelle tall bortsett fra minus 2 og 2.

Et enklere eksempel: g av X [EQ] 1 delt paa startparentes X pluss 3 sluttparentes. Nevneren er null naar X pluss 3 [EQ] 0, altsaa X [EQ] minus 3. Definisjonsmengden er de reelle tallene R minus mengden minus 3. Og for h av X [EQ] X delt paa startparentes X i andre minus 9 sluttparentes faktoriserer vi nevneren som startparentes X minus 3 sluttparentes ganger startparentes X pluss 3 sluttparentes [EQ] 0, slik at X [EQ] 3 og X [EQ] minus 3 maa utelukkes. Definisjonsmengden blir de reelle tallene R minus mengden minus 3 og 3.

Legg merke til moensteret: jo hoeyere grad nevneren har, desto flere verdier kan potensielt utelukkes. En lineaer nevner gir maksimalt en utelukket verdi, en kvadratisk nevner gir maksimalt to, og saa videre.

... Slutt paa del 1. ...

### Del 2: Vertikale asymptoter

Naa vet vi hvor funksjonen ikke er definert. Men hva skjer med grafen i naerheten av disse punktene? Svaret er noe av det mest dramatiske i matematikken: grafen skyter i vaeret, mot pluss eller minus uendelig.

En vertikal asymptote er en vertikal linje X [EQ] a som grafen naermer seg, men aldri faktisk treffer eller krysser. Du kan tenke paa det som en usynlig vegg i koordinatsystemet. Jo naermere grafen kommer veggen, desto brattere stiger eller synker den, men den naar aldri helt frem.

Vi finner vertikale asymptoter der nevneren er null, men bare hvis telleren ikke ogsaa er null i samme punkt. Det siste er en viktig detalj som vi kommer tilbake til.

La oss se paa f av X [EQ] startparentes X pluss 1 sluttparentes delt paa startparentes X minus 2 sluttparentes ganger startparentes X pluss 3 sluttparentes. Nevneren er null naar X [EQ] 2 og X [EQ] minus 3. Vi sjekker telleren: X pluss 1 er 3 i X [EQ] 2 og minus 2 i X [EQ] minus 3, altsaa er telleren ikke null i noen av disse punktene. Dermed har vi to vertikale asymptoter: X [EQ] 2 og X [EQ] minus 3.

Et annet eksempel: f av X [EQ] 2 delt paa startparentes X minus 4 sluttparentes. Nevneren er null naar X [EQ] 4, og telleren er konstant lik 2, aldri null. Vi har en vertikal asymptote i X [EQ] 4. Og for g av X [EQ] X delt paa startparentes X i andre minus 1 sluttparentes faktoriserer vi nevneren som startparentes X minus 1 sluttparentes ganger startparentes X pluss 1 sluttparentes. Telleren X er verken 1 eller minus 1 i disse punktene, saa vi har vertikale asymptoter i X [EQ] 1 og X [EQ] minus 1.

Hva skjer fysisk med funksjonsverdiene naer en vertikal asymptote? Hvis du setter inn X-verdier som er veldig naere asymptoten, blir nevneren veldig liten, og en broek med en liten nevner gir en stor verdi. For eksempel gir f av X [EQ] 1 delt paa startparentes X minus 2 sluttparentes verdien f av 2 komma 001 [EQ] 1 delt paa 0 komma 001 [EQ] 1000 og f av 1 komma 999 [EQ] 1 delt paa minus 0 komma 001 [EQ] minus 1000. Grafen eksploderer oppover paa den ene siden og nedover paa den andre.

... Slutt paa del 2. ...

### Del 3: Horisontale asymptoter

Vertikale asymptoter handler om hva som skjer naar X naermer seg et bestemt tall. Naa snur vi perspektivet: hva skjer med funksjonsverdien naar X beveger seg mot pluss eller minus uendelig? Svaret gir oss de horisontale asymptotene.

En horisontal asymptote er en horisontal linje y [EQ] b som grafen naermer seg naar X blir veldig stor, positiv eller negativ. Tenk paa det som horisontlinjen du ser mot naar du ser utover et flatt landskap, du naermer deg den, men du naar den aldri helt.

For aa finne horisontale asymptoter sammenligner vi graden til telleren og nevneren. Det er tre tilfeller, og regelen er heldigvis ganske ryddig:

Hvis graden til telleren er lavere enn graden til nevneren, er den horisontale asymptoten y [EQ] 0. Ta for eksempel f av X [EQ] 3 delt paa startparentes X pluss 1 sluttparentes. Telleren har grad 0 og nevneren har grad 1. Naar X blir veldig stor, dominerer nevneren, og broeken krymper mot null. Horisontal asymptote: y [EQ] 0.

Hvis graden til telleren er lik graden til nevneren, er den horisontale asymptoten y [EQ] ledende koeffisient i telleren delt paa ledende koeffisient i nevneren. For g av X [EQ] startparentes 3 X minus 1 sluttparentes delt paa startparentes X pluss 2 sluttparentes har begge grad 1. Ledende koeffisient i telleren er 3, i nevneren er den 1. Horisontal asymptote: y [EQ] 3 delt paa 1 [EQ] 3. Et annet eksempel: h av X [EQ] startparentes 2 X minus 5 sluttparentes delt paa startparentes X pluss 3 sluttparentes gir y [EQ] 2 delt paa 1 [EQ] 2.

Hvis graden til telleren er hoeyere enn graden til nevneren, finnes det ingen horisontal asymptote. Da vokser funksjonen uten grense.

... Slutt paa del 3. ...

### Del 4: Hull i grafen

Vi nevnte tidligere at en vertikal asymptote oppstaar der nevneren er null, forutsatt at telleren ikke ogsaa er null. Men hva om begge er null i samme punkt? Da faar vi noe annet, et hull i grafen.

Se paa funksjonen f av X [EQ] startparentes X i andre minus 1 sluttparentes delt paa startparentes X minus 1 sluttparentes. Nevneren er null for X [EQ] 1, saa X [EQ] 1 er utelukket fra definisjonsmengden. Men la oss faktorisere telleren: X i andre minus 1 [EQ] startparentes X minus 1 sluttparentes ganger startparentes X pluss 1 sluttparentes. Naa kan vi skrive f av X [EQ] startparentes X minus 1 sluttparentes ganger startparentes X pluss 1 sluttparentes delt paa startparentes X minus 1 sluttparentes. For alle X ulik 1 kan vi forkorte broeken, og vi faar f av X [EQ] X pluss 1. Grafen er altsaa den rette linjen y [EQ] X pluss 1, men med et hull i punktet 1 komma 2, fordi funksjonen fremdeles er udefinert i X [EQ] 1.

Dette er viktig: det er ikke en vertikal asymptote i X [EQ] 1, fordi grafen ikke eksploderer. Den oppfoerer seg helt pent, den mangler bare ett enkelt punkt. Forskjellen mellom et hull og en vertikal asymptote er at hullet oppstaar naar en felles faktor i teller og nevner kansellerer hverandre.

La oss ta et eksempel til. Hva med f av X [EQ] startparentes X i andre minus X minus 6 sluttparentes delt paa startparentes X minus 3 sluttparentes? Vi faktoriserer telleren: X i andre minus X minus 6 [EQ] startparentes X minus 3 sluttparentes ganger startparentes X pluss 2 sluttparentes. Da blir f av X [EQ] startparentes X minus 3 sluttparentes ganger startparentes X pluss 2 sluttparentes delt paa startparentes X minus 3 sluttparentes [EQ] X pluss 2 for X ulik 3. Grafen er linjen y [EQ] X pluss 2 med et hull i 3 komma 5.

Huskeregelen er enkel: hvis teller og nevner har en felles faktor, forkorter vi og faar et hull. Hvis nevneren er null mens telleren ikke er det, faar vi en vertikal asymptote.

... Slutt paa del 4. ...

### Del 5: Aa skissere rasjonale funksjoner

Naa har vi alle verktoeyene vi trenger for aa analysere en rasjonal funksjon fullstendig. La oss sette dem sammen i en systematisk fremgangsmaate gjennom et konkret eksempel: f av X [EQ] startparentes X pluss 2 sluttparentes delt paa startparentes X minus 1 sluttparentes.

Foerst finner vi definisjonsmengden. Nevneren er null naar X minus 1 [EQ] 0, altsaa X [EQ] 1. Definisjonsmengden er de reelle tallene R minus mengden 1.

Deretter finner vi vertikale asymptoter. Nevneren er null i X [EQ] 1, og telleren X pluss 2 [EQ] 1 pluss 2 [EQ] 3 er ulik 0 der. Altsaa har vi en vertikal asymptote X [EQ] 1.

Saa finner vi horisontale asymptoter. Teller og nevner har begge grad 1. Ledende koeffisient er 1 i begge. Horisontal asymptote: y [EQ] 1 delt paa 1 [EQ] 1.

Vi finner nullpunktet ved aa sette telleren lik null: X pluss 2 [EQ] 0 gir X [EQ] minus 2. Funksjonen krysser X-aksen i minus 2 komma 0.

Til slutt finner vi y-skjaeringen ved aa sette X [EQ] 0: f av 0 [EQ] startparentes 0 pluss 2 sluttparentes delt paa startparentes 0 minus 1 sluttparentes [EQ] 2 delt paa minus 1 [EQ] minus 2. Grafen krysser y-aksen i 0 komma minus 2.

La oss proeve en til: f av X [EQ] startparentes 2 X minus 4 sluttparentes delt paa startparentes X pluss 3 sluttparentes. Vertikal asymptote der X pluss 3 [EQ] 0, altsaa X [EQ] minus 3. Horisontal asymptote: begge har grad 1, y [EQ] 2 delt paa 1 [EQ] 2. Nullpunkt: 2 X minus 4 [EQ] 0 gir X [EQ] 2. y-skjaering: f av 0 [EQ] minus 4 delt paa 3 [EQ] minus 4 tredjedeler.

Med disse fem stegene, definisjonsmengde, vertikale asymptoter, horisontale asymptoter, nullpunkter og y-skjaering, kan du tegne en god skisse av enhver rasjonal funksjon du moeter.

... Slutt paa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi utforsket rasjonale funksjoner, funksjoner paa formen f av X [EQ] P av X delt paa Q av X der teller og nevner er polynomer.

Definisjonsmengden er alle reelle tall bortsett fra de X-verdiene der nevneren er null. Vi finner dem ved aa loese Q av X [EQ] 0. For eksempel har f av X [EQ] 1 delt paa startparentes X i andre minus 4 sluttparentes definisjonsmengde de reelle tallene R minus mengden minus 2 og 2.

Vertikale asymptoter oppstaar der nevneren er null og telleren ikke er null. Grafen skyter mot pluss eller minus uendelig naer disse linjene. Hvis derimot teller og nevner begge er null i samme punkt, kan vi forkorte broeken, og vi faar et hull i grafen i stedet.

Horisontale asymptoter bestemmes av graden til teller og nevner: er tellergraden lavere, er asymptoten y [EQ] 0; er gradene like, er asymptoten y lik forholdet mellom de ledende koeffisientene; er tellergraden hoeyere, finnes ingen horisontal asymptote.

For aa analysere en rasjonal funksjon fullstendig finner du definisjonsmengde, vertikale og horisontale asymptoter, nullpunkter, teller lik null, og y-skjaering, f av 0. Sammen gir disse opplysningene deg alt du trenger for aa forstaa grafens form.

... Slutt paa del 6. ...

---

## Kapittel 3.8: Eksponentialfunksjoner

### Del 1: Naar veksten tar av og eksponentiell vekst

Forestill deg at du legger et riskorn paa det foerste feltet av et sjakkbrett, to paa det neste, fire paa det tredje, og fortsetter aa doble for hvert felt. Hvor mye ris ender du opp med? Svaret er svimlende: mer ris enn hele verdens aarlige produksjon. Det er kraften i eksponentiell vekst, den starter sakte, men tar fullstendig av.

En eksponentialfunksjon er en funksjon der variabelen staar i eksponenten. Den generelle formen er f av X [EQ] a ganger b opphoeyd i X, der a er ulik 0, b er stoerre enn 0 og b er ulik 1. Her er a startverdien, verdien naar X [EQ] 0, fordi f av 0 [EQ] a ganger b opphoeyd i 0 [EQ] a, og b er vekstfaktoren som bestemmer hvor raskt funksjonen vokser eller avtar.

Eksponentialfunksjoner dukker opp overalt: i befolkningsvekst, renteberegninger, radioaktiv nedbrytning, spredning av virus, og verditap paa biler. I dette kapittelet skal vi forstaa hvordan disse funksjonene fungerer, hvordan vi setter dem opp fra praktiske situasjoner, og hvordan vi leser grafene deres.

La oss starte med vekst. Naar vekstfaktoren b er stoerre enn 1, har vi eksponentiell vekst. Det betyr at funksjonsverdien oeker for hver enhet X vokser.

Tenk deg en bakteriekultur som starter med 1000 bakterier og dobler seg hver time. Etter en time har du 1000 ganger 2 [EQ] 2000. Etter to timer: 1000 ganger 2 ganger 2 [EQ] 4000. Etter tre timer: 1000 ganger 2 i tredje [EQ] 8000. Ser du moensteret? Etter t timer er antallet N av t [EQ] 1000 ganger 2 opphoeyd i t. Her er startverdien a [EQ] 1000 og vekstfaktoren b [EQ] 2.

Men vekstfaktoren trenger ikke vaere et helt tall. I mange situasjoner er den knyttet til en prosentvis endring. Hvis noe oeker med p prosent per tidsenhet, er vekstfaktoren b [EQ] 1 pluss p delt paa 100. For eksempel: en populasjon paa 500 individer som vokser med 8 prosent per aar har vekstfaktoren b [EQ] 1 pluss 0 komma 08 [EQ] 1 komma 08. Funksjonen blir P av t [EQ] 500 ganger 1 komma 08 opphoeyd i t. Etter 10 aar: P av 10 [EQ] 500 ganger 1 komma 08 opphoeyd i 10 er omtrent lik 1080 individer.

Nokkelen er at eksponentiell vekst ikke legger til et fast beloep hver gang, det ville vaert lineaer vekst, men multipliserer med en fast faktor. Det gjoer at veksten akselererer over tid, i starten virker den beskjeden, men etter hvert blir den eksplosiv.

... Slutt paa del 1. ...

### Del 2: Eksponentiell nedgang

Hva skjer naar vekstfaktoren er mellom 0 og 1? Da har vi eksponentiell nedgang, funksjonen synker for hver tidsenhet. Verdien blir stadig mindre, men naar aldri helt null.

Et klassisk eksempel er verditap paa en bil. Tenk deg en ny bil som koster 400 000 kroner og mister 15 prosent av verdien hvert aar. Vekstfaktoren blir b [EQ] 1 minus 0 komma 15 [EQ] 0 komma 85. Legg merke til at vi trekker prosenten fra 1, fordi verdien avtar. Funksjonen er V av t [EQ] 400 000 ganger 0 komma 85 opphoeyd i t. Etter 5 aar: V av 5 [EQ] 400 000 ganger 0 komma 85 opphoeyd i 5 er omtrent lik 177 000 kroner. Bilen har altsaa mistet mer enn halvparten av verdien.

Generelt: hvis noe avtar med p prosent per tidsenhet, er vekstfaktoren b [EQ] 1 minus p delt paa 100. En maskin som koster 200 000 kroner og mister 25 prosent per aar har b [EQ] 0 komma 75, og funksjonen V av t [EQ] 200 000 ganger 0 komma 75 opphoeyd i t. Etter 4 aar er verdien V av 4 [EQ] 200 000 ganger 0 komma 75 opphoeyd i 4 er omtrent lik 63 281 kroner.

Det som er spesielt med eksponentiell nedgang er at verdien aldri naar null. Den krymper og krymper, men det er alltid litt igjen. Matematisk betyr dette at grafen har en horisontal asymptote i y [EQ] 0. Merk deg forskjellen: vekstfaktor b stoerre enn 1 gir vekst, og 0 er mindre enn b er mindre enn 1 gir nedgang. Grensen ved b [EQ] 1 gir en konstant funksjon.

... Slutt paa del 2. ...

### Del 3: Grafens egenskaper

Naa som vi forstaar vekst og nedgang, la oss se paa hva grafene faktisk forteller oss. Alle eksponentialfunksjoner paa formen f av X [EQ] a ganger b opphoeyd i X med a stoerre enn 0 deler noen viktige egenskaper.

For det foerste: y-skjaeringen er alltid 0 komma a, fordi f av 0 [EQ] a ganger b opphoeyd i 0 [EQ] a ganger 1 [EQ] a. For det andre: funksjonsverdien er alltid positiv. Siden b er stoerre enn 0, er b opphoeyd i X stoerre enn 0 for alle X, og dermed er a ganger b opphoeyd i X stoerre enn 0 naar a er stoerre enn 0. Det betyr at grafen aldri krysser X-aksen, funksjonen har ingen nullpunkter. Linjen y [EQ] 0 er en horisontal asymptote.

Naar b er stoerre enn 1, stiger grafen fra venstre mot hoeyre. For smaa X-verdier er den ganske flat, men for store X-verdier stiger den bratt. Naar 0 er mindre enn b er mindre enn 1, synker grafen: den er hoey til venstre og krymper mot y [EQ] 0 til hoeyre.

Et fint eksempel er aa sammenligne f av X [EQ] 2 opphoeyd i X og g av X [EQ] en halv opphoeyd i X. Begge har y-skjaering i 0 komma 1, men f stiger mens g synker. Faktisk er en halv opphoeyd i X [EQ] 2 opphoeyd i minus X, saa g er bare en speiling av f om y-aksen. Funksjonen h av X [EQ] 50 ganger 2 opphoeyd i minus X er ogsaa nedgang fordi 2 opphoeyd i minus X [EQ] en halv opphoeyd i X, altsaa har vi egentlig b [EQ] 0 komma 5 som er mindre enn 1.

... Slutt paa del 3. ...

### Del 4: Doblingstid og halveringstid

To begreper som dukker opp igjen og igjen i forbindelse med eksponentialfunksjoner er doblingstid og halveringstid.

Doblingstid er tiden det tar foer verdien er dobbelt saa stor. Hvis en bakteriekoloni dobler seg hvert tredje doegn, er doblingstiden T [EQ] 3 doegn, og vi kan skrive funksjonen som N av t [EQ] N-0 ganger 2 opphoeyd i t delt paa 3, der N-0 er startverdien.

Halveringstid er tiden det tar foer verdien er halvert. Hvis et radioaktivt stoff har halveringstid 5 aar og vi starter med 200 gram, skriver vi N av t [EQ] 200 ganger 0 komma 5 opphoeyd i t delt paa 5. Etter 15 aar: N av 15 [EQ] 200 ganger 0 komma 5 opphoeyd i 15 delt paa 5 [EQ] 200 ganger 0 komma 5 i tredje [EQ] 200 ganger 0 komma 125 [EQ] 25 gram.

La oss ogsaa se paa et renteeksempel. Du setter 10 000 kroner i banken med 3 prosent aarlig rente. Vekstfaktoren er b [EQ] 1 komma 03, og funksjonen er K av t [EQ] 10 000 ganger 1 komma 03 opphoeyd i t. Etter 20 aar: K av 20 [EQ] 10 000 ganger 1 komma 03 opphoeyd i 20 er omtrent lik 18 061 kroner. Du har tjent cirka 8061 kroner i renter, rentes rente i praksis.

Uansett om det handler om bakterier, penger, radioaktivitet eller bilverdi, modellen er den samme: f av X [EQ] a ganger b opphoeyd i X. Du trenger bare aa identifisere startverdien og vekstfaktoren.

... Slutt paa del 4. ...

### Del 5: Finne a og b fra opplysninger

Noen ganger faar du ikke oppgitt startverdien og vekstfaktoren direkte, i stedet faar du to punkter som grafen gaar gjennom, og maa finne a og b selv.

Anta at grafen til f av X [EQ] a ganger b opphoeyd i X gaar gjennom punktene 0 komma 4 og 2 komma 36. Fra det foerste punktet vet vi at f av 0 [EQ] a ganger b opphoeyd i 0 [EQ] a [EQ] 4. Naa bruker vi det andre punktet: f av 2 [EQ] 4 ganger b i andre [EQ] 36. Vi loeser for b: b i andre [EQ] 36 delt paa 4 [EQ] 9, som gir b [EQ] 3. Funksjonen er f av X [EQ] 4 ganger 3 opphoeyd i X.

Hvis begge punktene har X ulik 0, maa vi sette opp et likningssystem. For eksempel, hvis f av 1 [EQ] 6 og f av 3 [EQ] 54, faar vi a ganger b [EQ] 6 og a ganger b i tredje [EQ] 54. Vi deler: a ganger b i tredje delt paa a ganger b [EQ] 54 delt paa 6, som gir b i andre [EQ] 9, altsaa b [EQ] 3. Deretter: a ganger 3 [EQ] 6, altsaa a [EQ] 2. Funksjonen er f av X [EQ] 2 ganger 3 opphoeyd i X.

Huskeregelen for vekstfaktorer: p prosent oekning gir b [EQ] 1 pluss p delt paa 100, p prosent nedgang gir b [EQ] 1 minus p delt paa 100, dobling gir b [EQ] 2, tredobling gir b [EQ] 3, og halvering gir b [EQ] 0 komma 5.

... Slutt paa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi utforsket eksponentialfunksjoner, funksjoner paa formen f av X [EQ] a ganger b opphoeyd i X der a er startverdien og b er vekstfaktoren.

Eksponentiell vekst skjer naar b er stoerre enn 1. Funksjonen oeker for hver tidsenhet, og veksten akselererer over tid. Prosentvis oekning med p prosent gir vekstfaktor b [EQ] 1 pluss p delt paa 100. En bakteriekultur som dobler seg har b [EQ] 2, en investering med 3 prosent rente har b [EQ] 1 komma 03.

Eksponentiell nedgang skjer naar 0 er mindre enn b er mindre enn 1. Verdien synker, men naar aldri null. Prosentvis nedgang med p prosent gir vekstfaktor b [EQ] 1 minus p delt paa 100. En bil som mister 15 prosent aarlig har b [EQ] 0 komma 85.

Grafens egenskaper er at y-skjaeringen er 0 komma a, funksjonen er alltid positiv, den har ingen nullpunkter, og y [EQ] 0 er en horisontal asymptote. Grafen stiger for b stoerre enn 1 og synker for 0 er mindre enn b er mindre enn 1.

Doblingstid og halveringstid beskriver hvor lang tid det tar foer verdien henholdsvis dobles eller halveres. Et stoff med halveringstid T foelger N av t [EQ] N-0 ganger 0 komma 5 opphoeyd i t delt paa T.

For aa finne a og b fra to punkter bruker du f av 0 [EQ] a, hvis mulig, og loeser for b med det andre punktet. Har du to punkter med X ulik 0, setter du opp et likningssystem og deler likningene paa hverandre for aa eliminere a.

... Slutt paa del 6. ...
