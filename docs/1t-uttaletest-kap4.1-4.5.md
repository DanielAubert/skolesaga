# 1T Uttaletest: Kapittel 4.1 til 4.5

Konvertert for ElevenLabs TTS. All LaTeX er omskrevet til naturlig norsk tale.

---

## Kapittel 4.1: Likningssett

### Del 1: Naar en likning ikke er nok og grafisk loesning

Tenk deg at du vet at summen av to tall er 10. Kan du finne tallene? Vel, det kan vaere 3 og 7, eller 4 og 6, eller 2 komma 5 og 7 komma 5, det finnes uendelig mange muligheter. Men hva om du i tillegg vet at forskjellen mellom de to tallene er 4? Naa har du plutselig to betingelser som maa oppfylles samtidig, og det finnes bare en loesning: tallene maa vaere 7 og 3.

Dette er kjernen i et likningssett, et sett med flere likninger som alle skal stemme paa samme tid. Naar vi har to ukjente, trenger vi to likninger. Naar vi har tre ukjente, trenger vi tre. For aa holde orden nummererer vi likningene med romertall: I for den foerste og II for den andre. I dette kapittelet skal vi laere tre ulike metoder for aa loese slike sett: vi kan tegne grafer, vi kan sette inn uttrykk, og vi kan legge sammen likningene paa en smart maate.

Den mest intuitive metoden er aa tegne begge likningene som rette linjer i et koordinatsystem. Hver likning beskriver en linje, og loesningen er punktet der de to linjene krysser hverandre, skjaeringspunktet.

La oss si at vi har likningssettet I: y pluss 4 [EQ] 2 X og II: 2 y minus 1 [EQ] X. For aa tegne disse omformer vi til y [EQ] a X pluss b-form. Likning I gir y [EQ] 2 X minus 4, og likning II gir y [EQ] en halv X pluss en halv. Naa tegner vi begge linjene. Den foerste stiger bratt med stigningstall 2, den andre stiger slakere med stigningstall en halv. Der de moetes, leser vi av punktet 3 komma 2. Vi kan bekrefte: i likning I gir 2 pluss 4 [EQ] 6 og 2 ganger 3 [EQ] 6, som stemmer. I likning II gir 2 ganger 2 minus 1 [EQ] 3 og X [EQ] 3, som ogsaa stemmer.

Men hva om linjene aldri krysser? Dersom to linjer er parallelle, altsaa har samme stigningstall men ulik konstantledd, vil de aldri moetes. Da har likningssettet ingen loesning. Og hva om de to likningene egentlig beskriver samme linje? Da er de sammenfallende, og det finnes uendelig mange loesninger fordi alle punktene paa linjen tilfredsstiller begge likningene.

Grafisk loesning er utmerket for aa forstaa hva som skjer, men den har en ulempe: det er vanskelig aa lese av noeyaktige verdier fra en tegning, spesielt naar svaret inneholder broeker. Derfor trenger vi algebraiske metoder.

... Slutt paa del 1. ...

### Del 2: Innsettingsmetoden

Innsettingsmetoden bygger paa en enkel ide: hvis en likning forteller deg at X er lik et uttrykk med y, kan du erstatte X med det uttrykket i den andre likningen. Da faar du en likning med bare en ukjent, som du kan loese direkte.

La oss ta likningssettet I: X pluss 3 y [EQ] 8 og II: 2 X minus 2 y [EQ] 8. Vi starter med aa loese likning I for X fordi X har koeffisient 1, noe som gjoer det enkelt: X [EQ] minus 3 y pluss 8. Naa erstatter vi X i likning II med dette uttrykket: 2 ganger startparentes minus 3 y pluss 8 sluttparentes minus 2 y [EQ] 8. Vi loeser opp parentesen: minus 6 y pluss 16 minus 2 y [EQ] 8, som gir minus 8 y [EQ] minus 8, altsaa y [EQ] 1. Til slutt setter vi y [EQ] 1 tilbake i uttrykket for X: X [EQ] minus 3 ganger 1 pluss 8 [EQ] 5.

Notasjonen I til II betyr at vi bruker informasjon fra likning I i likning II. Noen ganger skriver vi II-stjerne for aa vise at likning II er omformet.

Et godt tips er aa alltid velge den variabelen som er enklest aa isolere, typisk den som allerede har koeffisient 1 eller minus 1. For eksempel i likningssettet 2 X pluss 5 y [EQ] 9 og 3 X minus y [EQ] 5 er det lurtest aa loese den andre likningen for y, koeffisient minus 1: y [EQ] 3 X minus 5. Deretter setter vi inn: 2 X pluss 5 ganger startparentes 3 X minus 5 sluttparentes [EQ] 9, som gir 17 X [EQ] 34 og X [EQ] 2, og deretter y [EQ] 3 ganger 2 minus 5 [EQ] 1.

... Slutt paa del 2. ...

### Del 3: Addisjonsmetoden

Addisjonsmetoden utnytter at vi kan legge sammen likningene. Siden begge sidene av en likning er like, kan vi trygt legge venstre side av I sammen med venstre side av II og sette det lik summen av hoeyresidene. Trikset er aa soerge for at en av variablene forsvinner i prosessen.

Ta likningssettet I: 2 X pluss 4 y [EQ] 14 og II: minus 2 X minus 2 y [EQ] minus 8. Legg merke til at I har pluss 2 X og II har minus 2 X. Legger vi sammen, kansellerer X-leddene hverandre: startparentes 2 X pluss 4 y sluttparentes pluss startparentes minus 2 X minus 2 y sluttparentes [EQ] 14 pluss startparentes minus 8 sluttparentes, som forenkles til 2 y [EQ] 6, altsaa y [EQ] 3. Saa setter vi y [EQ] 3 inn i en av likningene for aa finne X: 2 X pluss 12 [EQ] 14 gir X [EQ] 1.

Men hva gjoer du naar variablene ikke kansellerer av seg selv? Da multipliserer du en eller begge likningene med passende tall. For eksempel: I: X pluss 3 y [EQ] 8 og II: 2 X minus 2 y [EQ] 8. Her ganger vi likning I med minus 2 og faar minus 2 X minus 6 y [EQ] minus 16. Naa legger vi denne sammen med II: startparentes 2 X minus 2 y sluttparentes pluss startparentes minus 2 X minus 6 y sluttparentes [EQ] 8 pluss startparentes minus 16 sluttparentes, som gir minus 8 y [EQ] minus 8 og y [EQ] 1. Da er X [EQ] 5.

Noen ganger maa vi gange begge likningene. Har du 3 X pluss 5 y [EQ] 2 og 2 X minus 2 y [EQ] minus 4, kan du gange den foerste med 2 og den andre med 3 for aa faa 6 X i begge. Deretter trekker du den ene fra den andre: 2 ganger I minus 3 ganger II gir 16 y [EQ] 16, altsaa y [EQ] 1 og X [EQ] minus 1.

... Slutt paa del 3. ...

### Del 4: Tre ukjente

Metoden kan utvides til likningssett med tre ukjente, typisk X, y og z. Vi trenger da tre likninger, og strategien er aa redusere problemet steg for steg til noe vi allerede kan loese.

Tenk paa det som aa skrelle av lag. Foerst bruker vi en likning til aa uttrykke en variabel ved hjelp av de to andre. Deretter setter vi dette uttrykket inn i de to gjenvaerende likningene. Naa har vi to likninger med to ukjente, og det vet vi jo allerede hvordan vi loeser.

La oss ta et eksempel: I: X pluss 3 y pluss z [EQ] 4, II: 2 X minus 2 y minus z [EQ] 1, III: 2 X minus y pluss 2 z [EQ] minus 6. Vi loeser likning I for X: X [EQ] 4 minus 3 y minus z. Saa setter vi dette inn i likning II: 2 ganger startparentes 4 minus 3 y minus z sluttparentes minus 2 y minus z [EQ] 1, som forenkles til minus 8 y minus 3 z [EQ] minus 7. Og inn i likning III: 2 ganger startparentes 4 minus 3 y minus z sluttparentes minus y pluss 2 z [EQ] minus 6, som gir minus 7 y [EQ] minus 14, altsaa y [EQ] 2. Med y [EQ] 2 i den forenklede likningen finner vi z [EQ] minus 3, og til slutt X [EQ] 4 minus 3 ganger 2 minus startparentes minus 3 sluttparentes [EQ] 1.

Det krever noen flere steg, men prinsippet er noeyaktig det samme som med to ukjente: reduser antall variabler ett steg om gangen til du kan regne ut svaret direkte.

... Slutt paa del 4. ...

### Del 5: Fra virkeligheten til likningssett

Likningssett blir virkelig nyttige naar vi bruker dem paa praktiske problemer. Nokkelen er aa oversette den hverdagslige situasjonen til matematiske likninger.

Tenk deg at Mari handler for moren sin to ganger. Foerste gang kjoeper hun 5 kilo poteter og 2 kilo gulroetter for 58 kroner. Andre gang kjoeper hun 3 kilo poteter og 5 kilo gulroetter for 50 kroner. Prisene er de samme begge gangene. Hva koster ett kilo av hver?

Vi lar X vaere prisen per kilo poteter og y prisen per kilo gulroetter. Foerste handletur gir I: 5 X pluss 2 y [EQ] 58. Andre handletur gir II: 3 X pluss 5 y [EQ] 50. Vi bruker addisjonsmetoden: ganger I med 5 og II med minus 2 for aa eliminere y-leddene. Da faar vi 25 X pluss 10 y [EQ] 290 og minus 6 X minus 10 y [EQ] minus 100. Summen gir 19 X [EQ] 190, altsaa X [EQ] 10. Setter vi inn i likning I: 50 pluss 2 y [EQ] 58, som gir y [EQ] 4. Poteter koster 10 kroner per kilo og gulroetter 4 kroner per kilo.

Et annet eksempel: en taxisjafoer tar et fast oppstartsgebyr pluss en pris per kilometer. Kaare brukte taxien 2 ganger i januar og kjoerrte 30 kilometer totalt for 700 kroner, og 3 ganger i februar med 60 kilometer for 1350 kroner. Med X som oppstartsgebyr og y som kilometerpris faar vi 2 X pluss 30 y [EQ] 700 og 3 X pluss 60 y [EQ] 1350. Loeser vi dette finner vi at oppstartsgebyret er 50 kroner og kilometerprisen er 20 kroner. Evnen til aa oversette ord til likninger er en ferdighet du vil bruke igjen og igjen.

... Slutt paa del 5. ...

### Del 6: Oppsummering

I dette kapittelet har vi laert tre metoder for aa loese likningssett, og alle har sin plass i verktoey-kassen din.

Grafisk loesning handler om aa tegne begge likningene som linjer og finne skjaeringspunktet. Metoden gir god visuell forstaaelse, men kan vaere upresis for verdier med desimaler eller broeker. Husk at parallelle linjer betyr ingen loesning, og sammenfallende linjer betyr uendelig mange loesninger.

Innsettingsmetoden gaar ut paa aa loese en likning for en variabel og sette uttrykket inn i den andre likningen. Velg alltid den variabelen som er enklest aa isolere, gjerne den med koeffisient 1 eller minus 1.

Addisjonsmetoden gaar ut paa aa multiplisere likningene slik at en variabel faar like koeffisienter med motsatt fortegn, for deretter aa legge likningene sammen slik at variabelen forsvinner. Denne metoden er spesielt effektiv naar ingen variabel er lett aa isolere.

For likningssett med tre ukjente bruker vi de samme prinsippene, men vi reduserer foerst fra tre likninger og tre ukjente ned til to likninger og to ukjente. Og i praktiske oppgaver er nokkelen aa la ukjente stoerrelser vaere variabler og oversette betingelsene i teksten til matematiske likninger.

... Slutt paa del 6. ...

---

## Kapittel 4.2: Lineaere ulikheter

### Del 1: Fra likhetstegn til ulikhetstegn og ulikhetstegnene

Til naa har du jobbet med likninger, uttrykk der to sider er like. Men i matematikken, og i hverdagen, handler det ofte om at noe er stoerre eller mindre enn noe annet. Du vil vite: naar er funksjonen positiv? Hvor stor kan X vaere uten at broen kollapser? Hvor mange timer maa du jobbe for aa tjene minst 5000 kroner?

Velkommen til ulikheter. I dette kapittelet skal vi laere aa loese foerstegradsulikheter, altsaa ulikheter der X bare opptrer i foerstepotens. Du vil oppdage at prosessen ligner veldig paa aa loese vanlige likninger, men med en viktig fallgruve som vi skal bli godt kjent med.

La oss starte med selve tegnene. Vi har fire stykker: er mindre enn betyr mindre enn, er stoerre enn betyr stoerre enn, er mindre enn eller lik betyr mindre enn eller lik, og er stoerre enn eller lik betyr stoerre enn eller lik. Forskjellen mellom er mindre enn og er mindre enn eller lik er om grenseverdien selv er inkludert eller ikke.

Naar vi loeser en ulikhet, finner vi ikke en bestemt verdi av X, vi finner et helt sett med verdier som oppfyller kravet. Dette settet kaller vi loesningsmengden, og vi skriver den med intervallnotasjon. For eksempel betyr X er mindre enn 3 at alle tall mindre enn 3 er gyldige. Vi skriver dette som X tilhoerer aapent intervall fra minus uendelig til 3, der vinkelparentesene betyr at endepunktet ikke er med.

Hva om X er stoerre enn eller lik 5? Da er 5 selv inkludert, og vi skriver X tilhoerer fra 5 til uendelig. Hakeparentesen betyr at endepunktet er med. En enkel huskeregel: hakeparentes [EQ] lukket [EQ] inkludert, vinkelparentes [EQ] aapen [EQ] ikke inkludert. Pilen betyr at intervallet fortsetter i det uendelige.

La oss ta et eksempel. Vi loeser 3 X pluss 9 er mindre enn 12. Vi trekker fra 9 paa begge sider: 3 X er mindre enn 3. Vi deler med 3: X er mindre enn 1. Loesningsmengden er L [EQ] aapent intervall fra minus uendelig til 1. Her gikk alt akkurat som i en vanlig likning, men det er fordi vi ikke ganget eller delte med et negativt tall.

... Slutt paa del 1. ...

### Del 2: Den store regelen, snu tegnet ved negative tall

Her kommer den ene regelen som skiller ulikheter fra likninger, og den er helt avgjoerende: naar du ganger eller deler med et negativt tall paa begge sider av en ulikhet, maa du snu ulikhetstegnet.

Hvorfor? Tenk paa tallinjen. Vi vet at 2 er mindre enn 5. Men hva skjer om vi ganger begge sider med minus 1? Da faar vi minus 2 og minus 5. Og minus 2 er stoerre enn minus 5, altsaa minus 2 er stoerre enn minus 5. Ganging med et negativt tall speiler tallene gjennom null, og da snur rekkefoeljen seg.

La oss ta et konkret eksempel: minus 5 X er stoerre enn 20. Vi maa dele med minus 5 for aa isolere X. Fordi vi deler med et negativt tall, snur vi ulikhetstegnet: X er mindre enn minus 4. Loesningsmengden er L [EQ] aapent intervall fra minus uendelig til minus 4.

Et annet eksempel: minus startparentes X minus 2 sluttparentes delt paa 5 er stoerre enn eller lik 3. Vi ganger med minus 1 og snur tegnet: startparentes X minus 2 sluttparentes delt paa 5 er mindre enn eller lik minus 3. Saa ganger vi med 5: X minus 2 er mindre enn eller lik minus 15. Og legger til 2: X er mindre enn eller lik minus 13. Loesningsmengden er L [EQ] fra minus uendelig til minus 13, lukket i minus 13.

Mange gjoer feilen aa glemme aa snu tegnet. En god vane er aa alltid spoerre deg selv: ganger eller deler jeg med noe negativt? Hvis ja, snu tegnet.

... Slutt paa del 2. ...

### Del 3: Ulikheter med X paa begge sider

Ofte dukker X opp paa begge sider av ulikheten, og da maa vi samle alle X-leddene paa en side og tallene paa den andre, akkurat som med vanlige likninger.

Ta ulikheten minus 3 X minus 1 er stoerre enn 2 X pluss 4. Vi samler X-ledd paa venstre side ved aa trekke fra 2 X paa begge sider: minus 5 X minus 1 er stoerre enn 4. Saa legger vi til 1: minus 5 X er stoerre enn 5. Vi deler med minus 5 og snur tegnet: X er mindre enn minus 1. Loesningsmengden er L [EQ] aapent intervall fra minus uendelig til minus 1.

Et annet eksempel: X delt paa 2 minus 1 er stoerre enn X delt paa 3 pluss 2. Naar vi har broeker er det lurt aa gange hele ulikheten med fellesnevneren for aa bli kvitt dem. Fellesnevneren til 2 og 3 er 6. Vi ganger alt med 6: 3 X minus 6 er stoerre enn 2 X pluss 12. Deretter samler vi X-ledd: X er stoerre enn 18. Her gikk det greit, vi ganget med positivt tall, 6, saa tegnet ble staaende.

Hva med X delt paa 2 minus 5 X er mindre enn eller lik 18? Vi finner fellesnevner: X delt paa 2 minus 10 X delt paa 2 [EQ] minus 9 X delt paa 2 er mindre enn eller lik 18. Vi ganger med 2: minus 9 X er mindre enn eller lik 36. Vi deler med minus 9 og snur tegnet: X er stoerre enn eller lik minus 4. Loesningsmengden er L [EQ] fra minus 4 til uendelig, lukket i minus 4.

Prinsippet er det samme hver gang: isoler X, vaer oppmerksom paa fortegn, og skriv svaret som et intervall.

... Slutt paa del 3. ...

### Del 4: Ulikheter med broeker

Broeker i ulikheter kan se skremmende ut, men teknikken er den samme som vi allerede kan. Det viktigste er aa gange med fellesnevner for aa kvitte deg med broekene, og aa passe paa fortegnet til det du ganger med.

Ta ulikheten startparentes 2 X minus 2 sluttparentes delt paa 3 er stoerre enn eller lik 4. Vi ganger begge sider med 3, positivt, saa tegnet beholdes: 2 X minus 2 er stoerre enn eller lik 12. Legger til 2: 2 X er stoerre enn eller lik 14. Deler med 2: X er stoerre enn eller lik 7. Loesningsmengden er L [EQ] fra 7 til uendelig, lukket i 7.

Hva med startparentes minus X minus 2 sluttparentes delt paa 2 er stoerre enn eller lik startparentes X pluss 3 sluttparentes delt paa 4? Vi ganger med fellesnevneren 4 paa begge sider: 2 ganger startparentes minus X minus 2 sluttparentes er stoerre enn eller lik X pluss 3. Vi loeser opp: minus 2 X minus 4 er stoerre enn eller lik X pluss 3. Samler X-ledd: minus 3 X er stoerre enn eller lik 7. Deler med minus 3 og snur tegnet: X er mindre enn eller lik minus 7 tredjedeler. Loesningsmengden er L [EQ] fra minus uendelig til minus 7 tredjedeler, lukket i minus 7 tredjedeler.

Noe som er viktig aa huske: X kan vaere positiv, negativ eller null. Vi vet ikke fortegnet til X. Derfor er det ikke lov aa gange med eller dele paa et uttrykk som inneholder X, med mindre vi vet at det er positivt eller negativt. Dette blir spesielt viktig i de kommende kapitlene om andregradsulikheter og rasjonale ulikheter.

... Slutt paa del 4. ...

### Del 5: Vanlige feil og hvordan du unngaar dem

La oss avslutte med de klassiske feilene du boer vaere paa vakt mot.

Den vanligste feilen er aa glemme aa snu ulikhetstegnet naar du ganger eller deler med et negativt tall. Husk: hver gang du multipliserer eller dividerer med noe negativt, snu tegnet. Skriv det gjerne som en kommentar i regningen din, deler med minus 3, snur tegnet, saa glemmer du det ikke.

En annen vanlig feil er aa blande sammen hakeparentes og vinkelparentes i intervallnotasjonen. Huskeregelen: er mindre enn og er stoerre enn gir vinkelparentes, aapen, mens er mindre enn eller lik og er stoerre enn eller lik gir hakeparentes, lukket, ved det aktuelle endepunktet. Ved uendelig bruker vi alltid vinkelparentes, fordi uendelig ikke er et tall du kan naa.

En tredje feil er aa tro at du kan gange begge sider av en ulikhet med X. Siden vi ikke vet om X er positiv eller negativ, vet vi ikke om tegnet skal snus. Denne situasjonen loeser vi med fortegnsskjema, som vi skal laere om i neste kapittel.

Til slutt: sjekk alltid svaret ditt ved aa sette inn en verdi som ligger i loesningsmengden. Hvis du finner X er stoerre enn 3, proev med X [EQ] 5 og se at den opprinnelige ulikheten stemmer.

... Slutt paa del 5. ...

### Del 6: Oppsummering

Foerstegradsulikheter loeses paa nesten samme maate som likninger, du samler X-ledd paa en side og tall paa den andre, og isolerer X.

Den ene store forskjellen er regelen om negative tall: naar du ganger eller deler med et negativt tall paa begge sider, maa du snu ulikhetstegnet. Dette er fordi multiplikasjon med et negativt tall speiler tallene paa tallinjen, slik at rekkefoeljen snur.

Svaret skriver du som et intervall. Bruk hakeparentes naar endepunktet er med, er mindre enn eller lik eller er stoerre enn eller lik, og vinkelparentes naar det ikke er med, er mindre enn eller er stoerre enn. Ved uendelig bruker du alltid vinkelparentes.

Til slutt: husk at du ikke kan gange med et uttrykk som inneholder X med mindre du vet fortegnet. Denne begrensningen er nettopp grunnen til at vi trenger fortegnsskjema, temaet for neste kapittel.

... Slutt paa del 6. ...

---

## Kapittel 4.3: Fortegnslinjer

### Del 1: Et kart over pluss og minus og slik tegner du en fortegnslinje

I forrige kapittel laerte du aa loese enkle ulikheter ved aa isolere X paa den ene siden. Men hva gjoer du naar uttrykket har flere faktorer som alle inneholder X? Du kan ikke bare gange med X fordi du ikke vet om det er positivt eller negativt. Her kommer fortegnslinjer og fortegnsskjema til unnsetning, et visuelt verktoey som viser deg fortegnet til et uttrykk for alle verdier av X paa en gang.

Tenk paa en fortegnslinje som et kart over tallinjen. For hvert punkt langs linjen forteller den deg: er uttrykket positivt her, negativt her, eller akkurat null? Naar du vet dette for hver enkelt faktor, kan du kombinere dem til aa forstaa hele produktet.

En fortegnslinje viser fortegnet til et uttrykk langs hele tallinjen. La oss starte med uttrykket startparentes X pluss 3 sluttparentes.

Foerst finner vi nullpunktet, altsaa der uttrykket er lik null: X pluss 3 [EQ] 0 gir X [EQ] minus 3. For X-verdier mindre enn minus 3 er uttrykket negativt, for eksempel: minus 5 pluss 3 [EQ] minus 2, og for X-verdier stoerre enn minus 3 er det positivt, for eksempel: 0 pluss 3 [EQ] 3. Vi tegner en stiplet linje for negativ, markerer nullpunktet med en 0, og en heltrukket linje for positiv.

Hva med en konstant som minus 3? Denne er alltid negativ, uansett hva X er. Fortegnslinjen er stiplet hele veien. Konstanten 4 er alltid positiv, heltrukket hele veien.

Og hva med startparentes minus X sluttparentes? Nullpunktet er X [EQ] 0. For X er mindre enn 0 er minus X positivt, for eksempel minus startparentes minus 2 sluttparentes [EQ] 2, og for X er stoerre enn 0 er minus X negativt. Det er altsaa omvendt sammenlignet med X.

Legg merke til moensteret: for et lineaert uttrykk startparentes a X pluss b sluttparentes der a er stoerre enn 0 gaar fortegnslinjen fra minus til pluss ved nullpunktet. Dersom a er mindre enn 0 gaar den fra pluss til minus. Konstanten a foran bestemmer retningen.

... Slutt paa del 1. ...

### Del 2: Fortegnsskjema, kombinere flere faktorer

Kraften i fortegnslinjer viser seg naar vi setter dem sammen i et fortegnsskjema. Et fortegnsskjema er en tabell der vi har en rad for hver faktor og en rad for produktet. Tallinjens kritiske punkter, nullpunktene, markeres oeverst, og vi leser av fortegnet i hvert intervall.

La oss ta uttrykket f av X [EQ] minus 3 ganger startparentes X minus 6 sluttparentes. Vi har to faktorer: konstanten minus 3 og uttrykket startparentes X minus 6 sluttparentes. Fortegnslinjen til minus 3 er alltid negativ. Fortegnslinjen til startparentes X minus 6 sluttparentes har nullpunkt ved X [EQ] 6: negativ for X er mindre enn 6, positiv for X er stoerre enn 6.

Naa multipliserer vi fortegnene rad for rad. For X er mindre enn 6: negativ ganger negativ [EQ] positiv. Ved X [EQ] 6: negativ ganger 0 [EQ] 0. For X er stoerre enn 6: negativ ganger positiv [EQ] negativ. Altsaa er f av X positiv for X er mindre enn 6, null ved X [EQ] 6, og negativ for X er stoerre enn 6.

Huskereglene for aa kombinere fortegn er de samme som for vanlig multiplikasjon: pluss ganger pluss er pluss, minus ganger minus er pluss, og pluss ganger minus er minus. Null ganger hva som helst er null.

... Slutt paa del 2. ...

### Del 3: Faktorisering, nokkelen til fortegnsskjema

For aa bruke fortegnsskjema maa vi skrive uttrykket som et produkt av faktorer. Noen ganger er det opplagt, for eksempel er minus 3 ganger startparentes X minus 6 sluttparentes allerede faktorisert. Men andre ganger maa vi faktorisere selv.

Ta uttrykket minus 2 X pluss 12. Vi kan trekke ut den felles faktoren minus 2: minus 2 X pluss 12 [EQ] minus 2 ganger startparentes X minus 6 sluttparentes. Naa har vi to faktorer: minus 2 og startparentes X minus 6 sluttparentes. Fortegnsskjemaet viser at uttrykket er positivt for X er mindre enn 6 og negativt for X er stoerre enn 6.

Et annet eksempel: minus 5 X minus 10. Vi trekker ut minus 5: minus 5 ganger startparentes X pluss 2 sluttparentes. Nullpunktet er X [EQ] minus 2. For X er mindre enn minus 2: negativ ganger negativ [EQ] positiv, altsaa positivt. For X er stoerre enn minus 2: negativ ganger positiv [EQ] negativ, altsaa negativt.

Faktoriseringen er viktig fordi fortegnsskjemaet krever at vi kan se hver enkelt faktor for seg. Uten faktorisering kan vi ikke sette opp skjemaet korrekt. Heldigvis er faktorisering av lineaere uttrykk ganske rett frem, du trekker ut den stoerste felles faktoren og ser hva som er igjen.

Tenk alltid: kan jeg skrive dette som et produkt? Hvis ja, har du nokkelen til fortegnsskjemaet.

... Slutt paa del 3. ...

### Del 4: Loese ulikheter med fortegnsskjema

Naa kommer den store payoffen: vi kan bruke fortegnsskjema til aa loese ulikheter. Istedenfor aa manipulere ulikheten algebraisk, setter vi opp et fortegnsskjema for uttrykket og leser av der uttrykket har riktig fortegn.

La oss loese minus 5 X minus 10 er mindre enn 0. Vi faktoriserer: minus 5 ganger startparentes X pluss 2 sluttparentes er mindre enn 0. Vi setter opp fortegnsskjema med faktorene minus 5 og startparentes X pluss 2 sluttparentes. Nullpunktet er X [EQ] minus 2. For X er mindre enn minus 2: negativ ganger negativ [EQ] positiv. For X er stoerre enn minus 2: negativ ganger positiv [EQ] negativ. Vi oensker aa finne der uttrykket er negativt, altsaa der produktraden viser minus. Svaret er X er stoerre enn minus 2, altsaa X tilhoerer aapent intervall fra minus 2 til uendelig.

Hva om vi istedenfor hadde spurt: minus 5 X minus 10 er stoerre enn eller lik 0? Da oensker vi positivt eller null. Fra skjemaet er produktet positivt for X er mindre enn minus 2 og null for X [EQ] minus 2. Svaret er X er mindre enn eller lik minus 2, altsaa X tilhoerer fra minus uendelig til minus 2, lukket i minus 2.

Legg merke til at vi fikk to komplementaere svar, den ene ulikheten dekker noeyaktig det intervallet den andre ikke dekker. Dette er fordi et tall enten er negativt, null eller positivt, det finnes ingen andre muligheter.

... Slutt paa del 4. ...

### Del 5: Fortegnsskjema med flere kritiske punkter

Naar uttrykket har flere faktorer med forskjellige nullpunkter, faar vi flere kritiske punkter paa tallinjen, og flere intervaller aa sjekke.

Tenk deg uttrykket 2 ganger startparentes X pluss 4 sluttparentes ganger startparentes X minus 2 sluttparentes. Faktorene er 2, alltid positiv, startparentes X pluss 4 sluttparentes med nullpunkt minus 4, og startparentes X minus 2 sluttparentes med nullpunkt 2. Vi setter opp fortegnsskjema med kritiske punkter minus 4 og 2 og tre intervaller: X er mindre enn minus 4, minus 4 er mindre enn X er mindre enn 2, og X er stoerre enn 2.

For X er mindre enn minus 4: positiv ganger negativ ganger negativ [EQ] positiv. For minus 4 er mindre enn X er mindre enn 2: positiv ganger positiv ganger negativ [EQ] negativ. For X er stoerre enn 2: positiv ganger positiv ganger positiv [EQ] positiv. Uttrykket er null ved X [EQ] minus 4 og X [EQ] 2.

Vil vi loese 2 ganger startparentes X pluss 4 sluttparentes ganger startparentes X minus 2 sluttparentes er mindre enn eller lik 0, ser vi fra skjemaet at produktet er negativt eller null for minus 4 er mindre enn eller lik X er mindre enn eller lik 2, altsaa X tilhoerer lukket intervall fra minus 4 til 2.

Denne teknikken skalerer til saa mange faktorer du vil. Jo flere faktorer, jo flere nullpunkter, og jo flere intervaller. Men prinsippet er alltid det samme: finn nullpunktene, sett opp en rad per faktor, multipliser fortegnene, og les av svaret. I neste kapittel skal vi bruke dette til aa loese andregradsulikheter.

... Slutt paa del 5. ...

### Del 6: Oppsummering

En fortegnslinje viser fortegnet til et uttrykk for alle verdier av X. For et lineaert uttrykk startparentes a X pluss b sluttparentes finner du nullpunktet, og fortegnet skifter der. Konstanter har samme fortegn overalt.

Et fortegnsskjema setter sammen flere fortegnslinjer i en tabell. Hvert intervall mellom de kritiske punktene, nullpunktene, faar sitt fortegn bestemt av produktregelen: pluss ganger pluss er pluss, minus ganger minus er pluss, og pluss ganger minus er minus. Null ganger noe gir alltid null.

For aa bruke fortegnsskjema maa uttrykket vaere faktorisert, skrevet som et produkt av enklere uttrykk. Faktorisering av lineaere uttrykk gjoeres ved aa trekke ut den stoerste felles faktoren.

For aa loese en ulikhet med fortegnsskjema setter du opp skjemaet for uttrykket paa venstre side, med null paa hoeyre side, og leser av hvilke intervaller som har det fortegnet ulikheten krever. Denne metoden er spesielt kraftfull for ulikheter med flere faktorer, og den er grunnlaget for aa loese andregradsulikheter og rasjonale ulikheter.

... Slutt paa del 6. ...

---

## Kapittel 4.4: Andregradsulikheter

### Del 1: Parabolen over og under x-aksen og fremgangsmaaten

Tenk deg en parabel, grafen til en andregradsfunksjon. Den svinger oppover eller nedover og krysser kanskje X-aksen i ett eller to punkter. Men en andregradsulikhet spoer ikke bare hvor parabelen krysser aksen, den spoer: hvor er parabelen over aksen? Og hvor er den under?

I dette kapittelet skal vi svare paa nettopp dette spoersmaalet. Verktoeyene vi trenger er nullpunktsfaktorisering fra kapittel 2 og fortegnsskjema fra forrige kapittel. Kombinasjonen av disse to gir oss en elegant og systematisk metode for aa loese enhver andregradsulikhet.

La oss starte med oppskriften, og saa skal vi gaa gjennom hvert steg grundig med eksempler.

Steg 1: Soerg for at ulikheten har null paa den ene siden. Flytt eventuelt alle ledd til venstre side slik at du har noe stoerre enn eller mindre enn 0.

Steg 2: Faktoriser andregradsuttrykket. Du kan bruke abc-formelen til aa finne nullpunktene x-1 og x-2, og deretter skrive a X i andre pluss b X pluss c [EQ] a ganger startparentes X minus x-1 sluttparentes ganger startparentes X minus x-2 sluttparentes. Denne teknikken kalles nullpunktsfaktorisering.

Steg 3: Sett opp et fortegnsskjema med en rad for hver faktor. Marker de kritiske punktene, nullpunktene, og bestem fortegnet i hvert intervall.

Steg 4: Les av svaret fra fortegnsskjemaet. Se hvilke intervaller som har det fortegnet ulikheten krever, positivt, negativt, eller null, og skriv loesningsmengden med intervallnotasjon.

Denne oppskriften fungerer for alle andregradsulikheter, uansett om parabelen aapner oppover eller nedover, og uansett om nullpunktene er pene heltall eller stygge broeker.

... Slutt paa del 1. ...

### Del 2: Eksempel, mellom to nullpunkter

La oss loese X i andre minus 12 X pluss 35 er mindre enn 0. Uttrykket har allerede null paa hoeyre side, saa vi hopper rett til faktorisering. Vi leter etter to tall som har sum 12 og produkt 35. Tallene 5 og 7 passer perfekt: X i andre minus 12 X pluss 35 [EQ] startparentes X minus 5 sluttparentes ganger startparentes X minus 7 sluttparentes.

Naa setter vi opp fortegnsskjema. Kritiske punkter: X [EQ] 5 og X [EQ] 7. Vi har tre intervaller og to faktorer.

For startparentes X minus 5 sluttparentes: negativ for X er mindre enn 5, null ved X [EQ] 5, positiv for X er stoerre enn 5. For startparentes X minus 7 sluttparentes: negativ for X er mindre enn 7, null ved X [EQ] 7, positiv for X er stoerre enn 7.

Produktet i de tre intervallene: for X er mindre enn 5 er negativ ganger negativ [EQ] positiv, for 5 er mindre enn X er mindre enn 7 er positiv ganger negativ [EQ] negativ, og for X er stoerre enn 7 er positiv ganger positiv [EQ] positiv.

Vi oensker aa finne der uttrykket er negativt, er mindre enn 0. Fra skjemaet ser vi at dette skjer for 5 er mindre enn X er mindre enn 7. Loesningsmengden er X tilhoerer aapent intervall fra 5 til 7.

Grafisk tilsvarer dette intervallet der parabelen befinner seg under X-aksen, altsaa mellom de to nullpunktene. Siden koeffisienten foran X i andre er positiv, parabelen aapner oppover, er uttrykket negativt nettopp i dette midtintervallet.

... Slutt paa del 2. ...

### Del 3: Negativ koeffisient foran X i andre

Hva skjer naar koeffisienten foran X i andre er negativ? Da aapner parabelen nedover, og fortegnsmoensteret blir speilvendt. Men med fortegnsskjema trenger du ikke huske dette, skjemaet tar seg av det automatisk.

La oss loese minus 2 X i andre pluss 10 X minus 12 er stoerre enn eller lik 0. Foerst faktoriserer vi ut minus 2: minus 2 ganger startparentes X i andre minus 5 X pluss 6 sluttparentes. Deretter faktoriserer vi andregradsuttrykket: X i andre minus 5 X pluss 6 [EQ] startparentes X minus 2 sluttparentes ganger startparentes X minus 3 sluttparentes, sum 5, produkt 6. Altsaa: minus 2 ganger startparentes X minus 2 sluttparentes ganger startparentes X minus 3 sluttparentes er stoerre enn eller lik 0.

Fortegnsskjemaet har tre faktorer: minus 2, alltid negativ, startparentes X minus 2 sluttparentes med nullpunkt 2, og startparentes X minus 3 sluttparentes med nullpunkt 3.

For X er mindre enn 2: negativ ganger negativ ganger negativ [EQ] negativ. For 2 er mindre enn X er mindre enn 3: negativ ganger positiv ganger negativ [EQ] positiv. For X er stoerre enn 3: negativ ganger positiv ganger positiv [EQ] negativ.

Vi oensker positivt eller null, er stoerre enn eller lik 0. Uttrykket er positivt for 2 er mindre enn X er mindre enn 3, og null ved X [EQ] 2 og X [EQ] 3. Loesningsmengden er X tilhoerer lukket intervall fra 2 til 3.

Legg merke til at den negative konstanten minus 2 snudde hele moensteret. Uten den ville uttrykket vaert positivt utenfor nullpunktene, men med minus 2 foran blir det positivt mellom nullpunktene. Fortegnsskjemaet haandterer dette helt automatisk, du trenger ikke tenke paa det separat.

... Slutt paa del 3. ...

### Del 4: Naar du maa flytte ledd foerst

Ikke alle andregradsulikheter kommer ferdig arrangert med null paa den ene siden. Noen ganger maa du flytte ledd over.

Ta ulikheten X i andre minus 4 X er stoerre enn 12. Her trekker vi fra 12 paa begge sider: X i andre minus 4 X minus 12 er stoerre enn 0. Naa faktoriserer vi. Vi leter etter to tall med sum minus 4 og produkt minus 12. Tallene minus 6 og 2 passer: startparentes X minus 6 sluttparentes ganger startparentes X pluss 2 sluttparentes er stoerre enn 0.

Nullpunkter: X [EQ] 6 og X [EQ] minus 2. Fortegnsskjema: for X er mindre enn minus 2 er negativ ganger negativ [EQ] positiv, for minus 2 er mindre enn X er mindre enn 6 er positiv ganger negativ [EQ] negativ, og for X er stoerre enn 6 er positiv ganger positiv [EQ] positiv. Vi oensker positivt, er stoerre enn 0, altsaa X er mindre enn minus 2 eller X er stoerre enn 6. Loesningsmengden er X tilhoerer aapent intervall fra minus uendelig til minus 2 union aapent intervall fra 6 til uendelig.

Et annet eksempel: minus 2 X i andre pluss 16 X minus 30 er mindre enn 0. Vi faktoriserer: minus 2 ganger startparentes X i andre minus 8 X pluss 15 sluttparentes [EQ] minus 2 ganger startparentes X minus 3 sluttparentes ganger startparentes X minus 5 sluttparentes. For X er mindre enn 3: negativ ganger negativ ganger negativ [EQ] negativ. For 3 er mindre enn X er mindre enn 5: negativ ganger positiv ganger negativ [EQ] positiv. For X er stoerre enn 5: negativ ganger positiv ganger positiv [EQ] negativ. Vi oensker negativt, er mindre enn 0, altsaa X er mindre enn 3 eller X er stoerre enn 5. Loesningsmengden er X tilhoerer aapent intervall fra minus uendelig til 3 union aapent intervall fra 5 til uendelig.

Husk: alltid flytt alt til en side foerst, og jobb deretter med aa faktorisere og sette opp fortegnsskjema.

... Slutt paa del 4. ...

### Del 5: Tredjegradsulikheter og uttrykk med tre faktorer

Fortegnsskjema er ikke begrenset til andregradsulikheter, det fungerer like godt med tre eller flere faktorer. La oss loese X ganger startparentes X minus 4 sluttparentes ganger startparentes X pluss 2 sluttparentes er mindre enn 0.

Her er uttrykket allerede faktorisert med tre nullpunkter: X [EQ] 0, X [EQ] 4 og X [EQ] minus 2. Vi har fire intervaller aa sjekke.

For X er mindre enn minus 2: negativ ganger negativ ganger negativ [EQ] negativ. For minus 2 er mindre enn X er mindre enn 0: negativ ganger negativ ganger positiv [EQ] positiv. For 0 er mindre enn X er mindre enn 4: positiv ganger negativ ganger positiv [EQ] negativ. For X er stoerre enn 4: positiv ganger positiv ganger positiv [EQ] positiv.

Vi oensker negativt, er mindre enn 0. Svaret er X er mindre enn minus 2 eller 0 er mindre enn X er mindre enn 4. I intervallnotasjon: X tilhoerer aapent intervall fra minus uendelig til minus 2 union aapent intervall fra 0 til 4.

Prinsippet er identisk: finn alle nullpunktene, sorter dem i stigende rekkefoelje, bestem fortegnet til hver faktor i hvert intervall, og multipliser for aa finne fortegnet til hele produktet. Med oevelse vil du oppdage at fortegnet alternerer mellom pluss og minus naar du passerer hvert nullpunkt, gitt at alle faktorer har odde multiplisitet, men det er alltid tryggest aa sjekke systematisk med fortegnsskjema.

Husk ogsaa at loesningsmengden kan bestaa av flere adskilte intervaller, slik som i eksempelet over. Disse skriver vi med unionstegnet union.

... Slutt paa del 5. ...

### Del 6: Oppsummering

For aa loese andregradsulikheter foelger du fire steg. Foerst soerger du for at du har null paa den ene siden. Deretter faktoriserer du andregradsuttrykket med nullpunktsfaktorisering: a X i andre pluss b X pluss c [EQ] a ganger startparentes X minus x-1 sluttparentes ganger startparentes X minus x-2 sluttparentes. Saa setter du opp et fortegnsskjema med en rad per faktor, der du markerer nullpunktene og bestemmer fortegnet i hvert intervall. Til slutt leser du av fra produktraden hvilke intervaller som har det fortegnet ulikheten krever.

Naar koeffisienten foran X i andre er positiv, er uttrykket negativt mellom nullpunktene og positivt utenfor. Naar koeffisienten er negativ, er det omvendt. Men du trenger ikke huske dette, fortegnsskjemaet gir deg svaret uansett.

Metoden fungerer ogsaa for ulikheter med tre eller flere faktorer. Loesningsmengden kan bestaa av flere adskilte intervaller, som skrives med unionstegnet union.

... Slutt paa del 6. ...

---

## Kapittel 4.5: Rasjonale ulikheter

### Del 1: Naar X havner under broekstreken og hvorfor du ikke kan gange med nevneren

Frem til naa har vi jobbet med ulikheter der X bare forekommer i telleren. Men hva skjer naar X dukker opp i nevneren av en broek? Plutselig kan vi ikke lenger gange begge sider med nevneren, fordi vi ikke vet om den er positiv eller negativ, og om vi maa snu ulikhetstegnet.

Slike ulikheter kaller vi rasjonale ulikheter, fordi de inneholder broekuttrykk, rasjonale uttrykk, med variabler i nevneren. I dette kapittelet skal vi se at fortegnsskjema er redningen, men med en ekstra ting aa huske: der nevneren er null, er uttrykket udefinert. Det punktet kan aldri vaere med i loesningsmengden.

La oss forstaa problemet ordentlig. Tenk paa ulikheten 3 delt paa X er stoerre enn 1. Foerste instinkt er kanskje aa gange begge sider med X. Men det gir 3 er stoerre enn X bare dersom X er stoerre enn 0. Hvis X er mindre enn 0, maatte vi snudd ulikhetstegnet og faatt 3 er mindre enn X, som aldri kan stemme for negative X. Saa ganging med X splittes i to tilfeller, og det blir rotete.

Istedenfor bruker vi en annen strategi: flytt alt til en side slik at du faar en broek som er stoerre enn 0 eller mindre enn 0. For 3 delt paa X er stoerre enn 1 trekker vi fra 1: 3 delt paa X minus 1 er stoerre enn 0. Felles nevner gir startparentes 3 minus X sluttparentes delt paa X er stoerre enn 0. Naa har vi et broekuttrykk som vi kan analysere med fortegnsskjema.

Den generelle oppskriften er: flytt alt til en side, skriv om med felles nevner, faktoriser teller og nevner, og sett opp fortegnsskjema. Broeken har samme fortegn som produktet av teller og nevner, pluss delt paa pluss er pluss, minus delt paa minus er pluss, og saa videre. Faktisk kan vi behandle 1 delt paa X som en egen faktor i fortegnsskjemaet.

Det viktigste aa huske: der nevneren er null, er uttrykket udefinert. Vi markerer slike punkter med finnes-ikke i fortegnsskjemaet, og de kan aldri inkluderes i loesningsmengden, uansett om ulikheten er streng, er mindre enn eller er stoerre enn, eller svak, er mindre enn eller lik eller er stoerre enn eller lik.

... Slutt paa del 1. ...

### Del 2: Fortegnslinjer for broekuttrykk

I forrige kapittel tegnet vi fortegnslinjer for lineaere uttrykk som startparentes X minus 3 sluttparentes. Naa trenger vi fortegnslinjer for uttrykk som 1 delt paa X og 1 delt paa startparentes X minus 2 sluttparentes.

La oss starte med 1 delt paa X. For X er stoerre enn 0 er broeken positiv, positivt delt paa positivt. For X er mindre enn 0 er broeken negativ, positivt delt paa negativt. Ved X [EQ] 0 er broeken udefinert, vi kan ikke dele med null. Fortegnslinjen viser altsaa: negativ for X er mindre enn 0, udefinert ved X [EQ] 0, og positiv for X er stoerre enn 0.

Hva med 1 delt paa startparentes X minus 2 sluttparentes? Nevneren er null ved X [EQ] 2. For X er mindre enn 2 er nevneren negativ, saa broeken er negativ. For X er stoerre enn 2 er nevneren positiv, saa broeken er positiv. Ved X [EQ] 2 er den udefinert.

Noekkelobservasjonen er: 1 delt paa startparentes X minus a sluttparentes har noeyaktig samme fortegn som startparentes X minus a sluttparentes, bortsett fra at den er udefinert, ikke null, ved X [EQ] a. Dette betyr at vi kan bruke 1 delt paa startparentes X minus a sluttparentes som en faktor i fortegnsskjemaet, og den oppfoerer seg nesten identisk med startparentes X minus a sluttparentes, den eneste forskjellen er at vi markerer nullpunktet som udefinert istedenfor null.

La oss ta et eksempel: 4 delt paa X. Vi skriver det som 4 ganger 1 delt paa X. Fortegnsskjemaet har 4, alltid positiv, og 1 delt paa X, negativ for X er mindre enn 0, udefinert ved X [EQ] 0, positiv for X er stoerre enn 0. Produktet: negativ for X er mindre enn 0, udefinert ved X [EQ] 0, positiv for X er stoerre enn 0.

... Slutt paa del 2. ...

### Del 3: Loese rasjonale ulikheter, steg for steg

La oss loese startparentes X minus 3 sluttparentes delt paa X er stoerre enn eller lik 0. Vi skriver om som et produkt: startparentes X minus 3 sluttparentes ganger 1 delt paa X er stoerre enn eller lik 0. Kritiske punkter: X [EQ] 3, nullpunkt for telleren, og X [EQ] 0, udefinert for nevneren.

Fortegnsskjema: startparentes X minus 3 sluttparentes er negativ for X er mindre enn 3, null ved X [EQ] 3, positiv for X er stoerre enn 3. 1 delt paa X er negativ for X er mindre enn 0, udefinert ved X [EQ] 0, positiv for X er stoerre enn 0.

Produktet: for X er mindre enn 0 er negativ ganger negativ [EQ] positiv. For 0 er mindre enn X er mindre enn 3 er negativ ganger positiv [EQ] negativ. For X er stoerre enn 3 er positiv ganger positiv [EQ] positiv. Ved X [EQ] 3 er produktet null, inkluderes fordi er stoerre enn eller lik. Ved X [EQ] 0 er produktet udefinert, inkluderes aldri.

Vi oensker er stoerre enn eller lik 0, altsaa positivt eller null. Svaret: X er mindre enn 0 eller X er stoerre enn eller lik 3. I intervallnotasjon: X tilhoerer aapent intervall fra minus uendelig til 0 union fra 3 til uendelig, lukket i 3. Legg merke til at vi bruker vinkelparentes ved 0, udefinert, aldri med, og hakeparentes ved 3, null er med fordi er stoerre enn eller lik.

Et annet eksempel: minus 3 delt paa startparentes X pluss 2 sluttparentes ganger startparentes X minus 1 sluttparentes er stoerre enn eller lik 0. Faktorene er minus 3, alltid negativ, 1 delt paa startparentes X pluss 2 sluttparentes, udefinert ved X [EQ] minus 2, og 1 delt paa startparentes X minus 1 sluttparentes, udefinert ved X [EQ] 1. For minus 2 er mindre enn X er mindre enn 1: negativ ganger positiv ganger negativ [EQ] positiv. Ellers er produktet negativt. Loesning: X tilhoerer aapent intervall fra minus 2 til 1. Telleren er aldri null, minus 3 er ulik 0, saa vi bruker vinkelparentes ved begge endepunktene.

... Slutt paa del 3. ...

### Del 4: Ulikheter som krever omskriving

Mange rasjonale ulikheter kommer ikke ferdig arrangert med null paa den ene siden. Da maa du flytte ledd og finne felles nevner.

La oss loese 8 delt paa X er mindre enn 4. Vi trekker fra 4: 8 delt paa X minus 4 er mindre enn 0. For aa skrive dette som en broek trenger vi felles nevner X: 8 delt paa X minus 4 X delt paa X [EQ] startparentes 8 minus 4 X sluttparentes delt paa X er mindre enn 0. Vi faktoriserer telleren: minus 4 ganger startparentes X minus 2 sluttparentes delt paa X er mindre enn 0, som vi skriver som minus 4 ganger startparentes X minus 2 sluttparentes ganger 1 delt paa X er mindre enn 0.

Kritiske punkter: X [EQ] 2, nullpunkt for telleren, og X [EQ] 0, udefinert for nevneren. Fortegnsskjema: for X er mindre enn 0 er negativ ganger negativ ganger negativ [EQ] negativ. For 0 er mindre enn X er mindre enn 2 er negativ ganger negativ ganger positiv [EQ] positiv. For X er stoerre enn 2 er negativ ganger positiv ganger positiv [EQ] negativ. Vi oensker negativt, er mindre enn 0, altsaa X er mindre enn 0 eller X er stoerre enn 2. Loesning: X tilhoerer aapent intervall fra minus uendelig til 0 union aapent intervall fra 2 til uendelig.

Et annet eksempel: 2 delt paa startparentes X minus 4 sluttparentes pluss 2 er mindre enn eller lik 0. Felles nevner startparentes X minus 4 sluttparentes: startparentes 2 pluss 2 ganger startparentes X minus 4 sluttparentes sluttparentes delt paa startparentes X minus 4 sluttparentes [EQ] startparentes 2 X minus 6 sluttparentes delt paa startparentes X minus 4 sluttparentes [EQ] 2 ganger startparentes X minus 3 sluttparentes delt paa startparentes X minus 4 sluttparentes er mindre enn eller lik 0. Kritiske punkter: X [EQ] 3, nullpunkt, og X [EQ] 4, udefinert. For X er mindre enn 3: positiv ganger negativ ganger negativ [EQ] positiv. For 3 er mindre enn X er mindre enn 4: positiv ganger positiv ganger negativ [EQ] negativ. For X er stoerre enn 4: positiv ganger positiv ganger positiv [EQ] positiv. Negativt eller null for 3 er mindre enn eller lik X er mindre enn 4. Loesning: X tilhoerer fra 3 til 4, lukket i 3 og aapent i 4. Hakeparentes ved 3, nullpunkt inkludert, og vinkelparentes ved 4, udefinert.

... Slutt paa del 4. ...

### Del 5: Definisjonsmengde og fallgruver

La oss snakke om definisjonsmengden, altsaa de verdiene av X der uttrykket i det hele tatt gir mening. For en rasjonal ulikhet er uttrykket udefinert der nevneren er null. Disse verdiene maa alltid utelukkes fra loesningsmengden, uansett hva ulikheten sier.

Ta uttrykket startparentes 3 X pluss 6 sluttparentes delt paa startparentes X minus 5 sluttparentes. Nevneren er null ved X [EQ] 5, saa definisjonsmengden er alle reelle tall unntatt X [EQ] 5. Skal vi loese startparentes 3 X pluss 6 sluttparentes delt paa startparentes X minus 5 sluttparentes er mindre enn eller lik 0, faktoriserer vi telleren: 3 ganger startparentes X pluss 2 sluttparentes delt paa startparentes X minus 5 sluttparentes. Nullpunkt i telleren: X [EQ] minus 2. Udefinert: X [EQ] 5. Fortegnsskjema med faktorene 3, positiv, startparentes X pluss 2 sluttparentes og 1 delt paa startparentes X minus 5 sluttparentes: for X er mindre enn minus 2 er positiv ganger negativ ganger negativ [EQ] positiv. For minus 2 er mindre enn X er mindre enn 5 er positiv ganger positiv ganger negativ [EQ] negativ. For X er stoerre enn 5 er positiv ganger positiv ganger positiv [EQ] positiv. Vi oensker er mindre enn eller lik 0: negativt for minus 2 er mindre enn X er mindre enn 5, null ved X [EQ] minus 2. Loesning: X tilhoerer fra minus 2 til 5, lukket i minus 2 og aapent i 5.

Her er de viktigste fallgruvene aa passe seg for. For det foerste: glem aldri aa utelukke verdier der nevneren er null, bruk alltid vinkelparentes ved slike punkter. For det andre: ikke glem aa faktorisere hele uttrykket ordentlig. Uttrykk som startparentes minus 2 X pluss 4 sluttparentes delt paa startparentes X pluss 1 sluttparentes boer skrives som minus 2 ganger startparentes X minus 2 sluttparentes delt paa startparentes X pluss 1 sluttparentes foer du setter opp fortegnsskjema. For det tredje: husk at en broek er null bare naar telleren er null, og nevneren ikke er det. Hvis telleren er en konstant som 5 eller minus 3, er broeken aldri null.

... Slutt paa del 5. ...

### Del 6: Oppsummering

Rasjonale ulikheter inneholder broekuttrykk der X forekommer i nevneren. Du kan ikke gange med nevneren fordi du ikke vet fortegnet, og da vet du ikke om ulikhetstegnet skal snus.

Fremgangsmaaten er: flytt alt til en side slik at du har noe delt paa noe stoerre enn eller mindre enn 0. Faktoriser teller og nevner. Sett opp fortegnsskjema med en rad for hver faktor. Fortegnslinjen til 1 delt paa startparentes X minus a sluttparentes er lik den til startparentes X minus a sluttparentes, bortsett fra at den er udefinert, ikke null, ved X [EQ] a.

Der nevneren er null, er uttrykket udefinert og kan aldri inkluderes i loesningsmengden, bruk alltid vinkelparentes. Der telleren er null, er uttrykket lik null, dette punktet inkluderes bare ved svak ulikhet, er mindre enn eller lik eller er stoerre enn eller lik.

En broek er null bare naar telleren er null, og nevneren ikke er det. Hvis telleren er en konstant som aldri er null, er broeken aldri null, da gir selv er mindre enn eller lik 0 bare de intervallene der broeken er strengt negativ.

... Slutt paa del 6. ...
