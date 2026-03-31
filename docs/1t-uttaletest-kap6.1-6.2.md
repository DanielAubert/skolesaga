## Kapittel 6.1: Matematisk argumentasjon

### Del 1: Innledning og hva er et matematisk argument

I matematikk er det ikke nok a finne svaret, du ma ogsa kunne forklare hvorfor svaret er riktig. Tenk deg en rettssak: det holder ikke a si at den tiltalte er skyldig, du ma legge frem bevis som overbeviser juryen. Matematisk argumentasjon fungerer pa samme mate. Vi bygger en kjede av logiske steg fra noe vi vet er sant, premissene, til noe vi oensker a vise, konklusjonen.

I dette kapittelet skal vi laere hva et godt matematisk argument inneholder, hvordan vi strukturerer det, og hvilke metoder vi kan bruke. Vi skal se at det er en fundamental forskjell mellom a vise at noe fungerer i ett tilfelle og a vise at det fungerer alltid. Denne forskjellen er selve hjertet av matematikken.

Et matematisk argument er en logisk rekkefoelge av pastander som leder fra noe vi vet er sant til en konklusjon. Hvert steg ma vaere begrunnet, enten med en kjent definisjon, et aksiom, en grunnleggende antakelse, en tidligere bevist setning, eller en logisk slutning.

Strukturen i et godt argument har tre deler. Foerst kommer forutsetningene: hva vet vi, og hva antar vi? Deretter foelger resonnementet: en kjede av logiske steg der hvert steg bygger pa det forrige. Til slutt har vi konklusjonen: hva har vi vist?

La oss se et enkelt eksempel. Vi vil vise at summen av to partall alltid er et partall. Forutsetningene: la a og b vaere to partall. Resonnement: et partall kan skrives som 2k for et helt tall k. Sa a [EQ] 2m og b [EQ] 2n for noen hele tall m og n. Summen blir a pluss b [EQ] 2m pluss 2n [EQ] 2 ganger startparentes m pluss n sluttparentes. Siden m pluss n er et helt tall, er 2 ganger startparentes m pluss n sluttparentes pa formen 2k, altsa et partall. Konklusjon: summen av to partall er alltid et partall.

Legg merke til at vi brukte bokstaver i stedet for konkrete tall. Vi skrev a [EQ] 2m og b [EQ] 2n, ikke a [EQ] 4 og b [EQ] 6. Det er nettopp det som gjoer argumentet generelt: det gjelder for alle partall, ikke bare de spesifikke tallene vi tilfeldigvis valgte.

... Slutt pa del 1. ...

### Del 2: Direkte bevis

Den mest naturlige bevismetoden er det direkte beviset. Vi starter med det vi vet og arbeider oss logisk fremover til det vi vil vise. La oss se et eksempel til.

Vi vil vise at produktet av to oddetall alltid er et oddetall. Et oddetall kan skrives som 2k pluss 1 for et helt tall k. La a [EQ] 2m pluss 1 og b [EQ] 2n pluss 1 for hele tall m og n. Produktet blir:

a ganger b [EQ] startparentes 2m pluss 1 sluttparentes ganger startparentes 2n pluss 1 sluttparentes [EQ] 4mn pluss 2m pluss 2n pluss 1 [EQ] 2 ganger startparentes 2mn pluss m pluss n sluttparentes pluss 1

Dette er pa formen 2k pluss 1 der k [EQ] 2mn pluss m pluss n, altsa et oddetall. Ferdig!

Hvert steg i dette beviset er begrunnet: vi brukte definisjonen av oddetall, 2k pluss 1, vi ganget ut parentesene, algebra, og vi faktoriserte ut 2 for a vise at resultatet er pa rett form. Ingen av stegene er magiske, alt foelger logisk.

En annen nyttig observasjon: vi kan vise at summen av tre pafoelgende hele tall alltid er delelig med 3. La tallene vaere n, n pluss 1 og n pluss 2. Summen er n pluss startparentes n pluss 1 sluttparentes pluss startparentes n pluss 2 sluttparentes [EQ] 3n pluss 3 [EQ] 3 ganger startparentes n pluss 1 sluttparentes. Siden 3 ganger startparentes n pluss 1 sluttparentes tydelig er delelig med 3, er vi ferdige.

Poenget er: i et direkte bevis velger vi en smart representasjon av tallene vare, gjoer beregninger, og viser at resultatet har den oenskede egenskapen.

... Slutt pa del 2. ...

### Del 3: Logiske slutninger og implikasjon

For a bygge sterke argumenter trenger vi a forsta logiske sammenhenger. Den viktigste er implikasjon: Hvis P er sant, sa er Q sant, som skrives P medforer Q.

For eksempel: Hvis n er delelig med 4, sa er n delelig med 2. Dette er sant, hvert tall som kan deles pa 4, kan ogsa deles pa 2. Men den motsatte retningen er ikke sant: at et tall er delelig med 2 betyr ikke at det er delelig med 4. Tallet 6 er delelig med 2, men ikke med 4.

Denne asymmetrien er viktig. P medforer Q er ikke det samme som Q medforer P. Hvis det regner, er bakken vat betyr ikke at hvis bakken er vat, regner det, bakken kan jo ogsa vaere vat fordi noen har vaert ute med hageslangen.

Men her er noe fascinerende: selv om P medforer Q og Q medforer P er forskjellige, finnes det en annen utsagn som er logisk ekvivalent med P medforer Q. Det er kontraposisjonen: Hvis ikke Q, sa ikke P, altsa ikke Q medforer ikke P.

Hvis det regner, er bakken vat er logisk det samme som Hvis bakken ikke er vat, regner det ikke. Denne ekvivalensen er nyttig som bevismetode: noen ganger er det lettere a vise kontraposisjonen enn det opprinnelige utsagnet.

... Slutt pa del 3. ...

### Del 4: Bevis ved kontraposisjon og motbevis

La oss bruke kontraposisjon i praksis. Vi vil vise at hvis n i andre er partall, sa er n partall. I stedet for a vise dette direkte, viser vi kontraposisjonen: hvis n er oddetall, sa er n i andre oddetall.

La n vaere et oddetall, altsa n [EQ] 2k pluss 1 for et helt tall k. Da er:

n i andre [EQ] startparentes 2k pluss 1 sluttparentes i andre [EQ] 4k i andre pluss 4k pluss 1 [EQ] 2 ganger startparentes 2k i andre pluss 2k sluttparentes pluss 1

Dette er pa formen 2m pluss 1, altsa et oddetall. Vi har vist kontraposisjonen, og dermed er det opprinnelige utsagnet ogsa sant.

En annen viktig bevismetode er motbevis, bevis ved selvmotsigelse. Her antar vi at konklusjonen er usann og viser at dette foerer til noe umulig, en selvmotsigelse.

Det mest beroemte motbeviset viser at kvadratroten av 2 er irrasjonalt. Anta det motsatte: kvadratroten av 2 [EQ] p delt pa q der broeken er fullt forkortet. Da er 2 [EQ] p i andre delt pa q i andre, altsa p i andre [EQ] 2 ganger q i andre. Siden p i andre er partall, er p partall, det viste vi nettopp. La p [EQ] 2k. Da er 4k i andre [EQ] 2 ganger q i andre, som gir q i andre [EQ] 2k i andre, altsa er q ogsa partall. Men da har p og q begge faktor 2, noe som motsier at broeken var fullt forkortet. Selvmotsigelse! Altsa er kvadratroten av 2 irrasjonalt.

... Slutt pa del 4. ...

### Del 5: Fallgruver og feilslutninger

Det er like viktig a gjenkjenne feil argumenter som a bygge korrekte. La oss se pa en klassisk feilslutning som beviser at 2 [EQ] 1.

La a [EQ] b. Da er a i andre [EQ] ab, altsa a i andre minus b i andre [EQ] ab minus b i andre. Vi faktoriserer begge sider: startparentes a pluss b sluttparentes ganger startparentes a minus b sluttparentes [EQ] b ganger startparentes a minus b sluttparentes. Vi deler pa startparentes a minus b sluttparentes og far a pluss b [EQ] b. Siden a [EQ] b, gir dette 2b [EQ] b, altsa 2 [EQ] 1.

Hva gikk galt? Feilen er a dele pa startparentes a minus b sluttparentes. Siden vi antok at a [EQ] b, er a minus b [EQ] 0, og vi kan aldri dele pa null. Dette er et eksempel pa at hvert eneste steg i et argument ma vaere gyldig, en feil oedelegger hele kjeden.

En annen vanlig feil er a forveksle et utsagn med dets omvending. Alle hunder er dyr betyr ikke at alle dyr er hunder. I matematikken: alle primtall stoerre enn 2 er oddetall betyr ikke at alle oddetall er primtall, 9 er oddetall, men ikke primtall.

Vi kan oppsummere bevismetodene. I et direkte bevis viser vi P medforer Q steg for steg. I et kontrapositivt bevis viser vi i stedet at ikke Q medforer ikke P. I et motbevis antar vi ikke Q og finner en selvmotsigelse. Hvilken metode du velger, avhenger av hva som er lettest for det aktuelle problemet.

... Slutt pa del 5. ...

### Del 6: Oppsummering

Et matematisk argument er en logisk kjede fra forutsetninger til konklusjon. Hvert steg ma begrunnes med definisjoner, aksiomer, tidligere setninger eller logiske slutninger. Et enkelt eksempel er ikke et bevis, det viser bare at noe kan skje, ikke at det alltid skjer.

Direkte bevis er den mest naturlige metoden: vi starter med premissene og arbeider oss steg for steg til konklusjonen. Nokkelen er a representere tallene generelt med bokstaver, for eksempel 2k for partall, 2k pluss 1 for oddetall, og vise at resultatet har den oenskede formen.

Kontraposisjon utnytter at P medforer Q er logisk ekvivalent med ikke Q medforer ikke P. Noen ganger er den motsatte retningen lettere a vise.

Motbevis, bevis ved selvmotsigelse, antar at konklusjonen er usann og utleder noe umulig. Det klassiske beviset for at kvadratroten av 2 er irrasjonalt bruker denne teknikken.

Husk ogsa a vaere pa vakt mot feilslutninger. Sjekk at hvert steg er gyldig, spesielt at du ikke deler pa null, forveksler en implikasjon med dens omvending, eller generaliserer fra enkeltstaende eksempler.

... Slutt pa del 6. ...


## Kapittel 6.2: Lese og forsta bevis

### Del 1: Innledning og algebraiske bevis

A lese et matematisk bevis er litt som a lese en krimroman, du foelger sporene steg for steg, og til slutt faller alt pa plass. Men mens en krimroman kan ha overraskende vendinger, har et godt bevis bare logiske steg. Hvert eneste steg skal kunne begrunnes, og ingenting er overlatt til tilfeldigheter.

I forrige kapittel laerte vi om matematisk argumentasjon. Na tar vi det videre og ser pa hele bevis, bade algebraiske og geometriske. Vi skal laere a lese bevis systematisk, forsta ulike bevistyper, og etter hvert proeve a utvikle egne bevis. Vi moeter blant annet direkte bevis, indirekte bevis og det kraftige verktoyet matematisk induksjon.

La oss starte med noe konkret: beviset for 1. kvadratsetning. Pastanden er at startparentes a pluss b sluttparentes i andre [EQ] a i andre pluss 2ab pluss b i andre for alle tall a og b.

Beviset er et direkte bevis. Vi skriver startparentes a pluss b sluttparentes i andre [EQ] startparentes a pluss b sluttparentes ganger startparentes a pluss b sluttparentes. Na ganger vi ut ved a bruke distributiv lov: hvert ledd i den foerste parentesen ganges med hvert ledd i den andre. Det gir a ganger a pluss a ganger b pluss b ganger a pluss b ganger b [EQ] a i andre pluss ab pluss ab pluss b i andre [EQ] a i andre pluss 2ab pluss b i andre. Ferdig.

Hva gjoer dette til et bevis og ikke bare en utregning? Jo, vi brukte a og b som vilkarlige tall. Vi antok ingenting spesielt om dem, de kan vaere positive, negative, broeker, irrasjonale tall, hva som helst. Derfor gjelder resultatet for alle tall.

Det finnes ogsa et vakkert geometrisk bevis for samme setning. Tenk pa et kvadrat med sidelengde startparentes a pluss b sluttparentes. Arealet er startparentes a pluss b sluttparentes i andre. Del na dette kvadratet inn i fire deler: et lite kvadrat med side a, areal a i andre, et lite kvadrat med side b, areal b i andre, og to rektangler med sider a og b, areal ab hver. Totalt areal: a i andre pluss b i andre pluss 2ab. Siden dette er det samme arealet, er startparentes a pluss b sluttparentes i andre [EQ] a i andre pluss 2ab pluss b i andre.

De to bevisene viser det samme resultatet fra to ulike vinkler, ett algebraisk, ett geometrisk. Det er noe av det som gjoer matematikk sa fascinerende.

... Slutt pa del 1. ...

### Del 2: Geometriske bevis og Pytagoras' setning

Na tar vi et steg opp i vanskelighetsgrad og ser pa et beroemt geometrisk bevis: beviset for Pytagoras' setning. Pastanden er at i en rettvinklet trekant med kateter a og b og hypotenus c gjelder a i andre pluss b i andre [EQ] c i andre.

Beviset bruker areal pa en svaert elegant mate. Tegn et stort kvadrat med sidelengde startparentes a pluss b sluttparentes. Dets areal er startparentes a pluss b sluttparentes i andre [EQ] a i andre pluss 2ab pluss b i andre. Na plasserer vi fire kopier av den rettvinklede trekanten inne i kvadratet, slik at de danner et skjevt kvadrat i midten med sidelengde c.

Arealet av de fire trekantene er 4 ganger en halv ganger ab [EQ] 2ab. Arealet av det indre kvadratet er c i andre. Totalt areal: 2ab pluss c i andre.

Na sammenligner vi de to uttrykkene for arealet av det store kvadratet:

a i andre pluss 2ab pluss b i andre [EQ] 2ab pluss c i andre

Vi trekker 2ab fra begge sider og far a i andre pluss b i andre [EQ] c i andre. Pytagoras er bevist!

Legg merke til hva vi gjorde: vi uttrykte det samme arealet pa to ulike mater og satte dem like. Denne teknikken, a finne to uttrykk for den samme stoerrelsen, er en av de kraftigste metodene i matematikk. Det er som a veie samme gjenstand pa to ulike vekter og sette resultatene lik hverandre.

... Slutt pa del 2. ...

### Del 3: Indirekte bevis og irrasjonale tall

Noen ganger er det vanskelig a vise noe direkte. Da kan et indirekte bevis, motbevis, vaere redningen. Vi antar at pastanden er usann og viser at dette foerer til en selvmotsigelse.

Vi har allerede sett beviset for at kvadratroten av 2 er irrasjonalt. La oss na gjoere det samme for kvadratroten av 3.

Anta det motsatte: kvadratroten av 3 er rasjonalt. Da kan vi skrive kvadratroten av 3 [EQ] p delt pa q der p og q er hele tall uten felles faktorer, broeken er maksimalt forkortet.

Kvadrering gir 3 [EQ] p i andre delt pa q i andre, altsa p i andre [EQ] 3 ganger q i andre. Siden p i andre er delelig med 3, ma p selv vaere delelig med 3. Hvorfor? Fordi hvis p ikke var delelig med 3, ville p i andre heller ikke vaert det, dette kan vises ved a se pa alle muligheter modulo 3.

La p [EQ] 3k. Da er p i andre [EQ] 9k i andre [EQ] 3 ganger q i andre, som gir q i andre [EQ] 3k i andre. Altsa er q i andre delelig med 3, og dermed er q delelig med 3.

Na har vi at bade p og q er delelige med 3. Men vi antok at broeken var maksimalt forkortet! Det er en selvmotsigelse. Altsa var antagelsen feil, og kvadratroten av 3 er irrasjonalt.

Moensteret er det samme som for kvadratroten av 2: anta rasjonalitet, vis at teller og nevner begge er delelige med det aktuelle primtallet, og konkluder med selvmotsigelse. Denne metoden fungerer for kvadratroten av p der p er et primtall.

... Slutt pa del 3. ...

### Del 4: Bevis ved induksjon

Matematisk induksjon er en bevismetode som er skreddersydd for pastander som gjelder for alle naturlige tall. Ideen er lik en rekke dominobrikker: hvis den foerste brikken faller, og hver brikke som faller slar ned den neste, sa faller alle brikkene.

Strukturen har tre steg. Foerst viser vi grunntilfellet: pastanden er sann for n [EQ] 1. Deretter formulerer vi induksjonsantagelsen: vi antar at pastanden er sann for et vilkarlig n [EQ] k. Til slutt gjennomfoerer vi induksjonssteget: vi viser at pastanden da ogsa er sann for n [EQ] k pluss 1.

La oss bevise at 1 pluss 2 pluss 3 pluss og sa videre pluss n [EQ] n ganger startparentes n pluss 1 sluttparentes delt pa 2.

Grunntilfelle, n [EQ] 1: Venstre side er 1. Hoeyre side er 1 ganger 2 delt pa 2 [EQ] 1. Stemmer!

Induksjonsantagelse: Anta at 1 pluss 2 pluss og sa videre pluss k [EQ] k ganger startparentes k pluss 1 sluttparentes delt pa 2 for et eller annet k.

Induksjonssteg: Vi vil vise at 1 pluss 2 pluss og sa videre pluss k pluss startparentes k pluss 1 sluttparentes [EQ] startparentes k pluss 1 sluttparentes ganger startparentes k pluss 2 sluttparentes delt pa 2. Vi starter med venstre side og bruker antagelsen:

1 pluss 2 pluss og sa videre pluss k pluss startparentes k pluss 1 sluttparentes [EQ] k ganger startparentes k pluss 1 sluttparentes delt pa 2 pluss startparentes k pluss 1 sluttparentes [EQ] k ganger startparentes k pluss 1 sluttparentes pluss 2 ganger startparentes k pluss 1 sluttparentes delt pa 2 [EQ] startparentes k pluss 1 sluttparentes ganger startparentes k pluss 2 sluttparentes delt pa 2

Og det er nettopp formelen med n [EQ] k pluss 1. Beviset er fullfoert!

... Slutt pa del 4. ...

### Del 5: Hvordan lese et bevis og utvikle egne

Na som du har sett flere bevistyper, la oss snakke om hvordan du boer lese et bevis. Her er fem steg som gjoer det lettere.

Forsta pastanden. Foer du begynner pa selve beviset, soerg for at du forstar hva som skal bevises. Hva betyr alle begrepene? Kan du sjekke pastanden med et konkret eksempel?

Identifiser strukturen. Er det et direkte bevis, et kontrapositivt bevis, et motbevis eller et induksjonsbevis? A vite hvilken type bevis du leser, hjelper deg a foelge logikken.

Foelg hvert steg. Ga gjennom beviset linje for linje. Hvorfor foelger denne linjen fra den forrige? Hvilken regel eller setning brukes? Ikke hopp over steg, det er ofte i de apenbare stegene at misforstaelser oppstar.

Se det store bildet. Etter a ha forstatt hvert steg, trekk deg tilbake og se helheten. Hva er hovedideen i beviset? Kan du forklare den med dine egne ord?

Proev selv. Den ultimate testen er a lukke boka og forsoeke a gjenskape beviset. Du trenger ikke huske det ord for ord, det viktige er at du forstar logikken godt nok til a rekonstruere den.

Det finnes fire hovedtyper bevis du boer kjenne til: direkte bevis, vis at P medforer Q steg for steg, kontraposisjon, vis at ikke Q medforer ikke P, motbevis, anta ikke Q og finn selvmotsigelse, og induksjon, grunntilfelle pluss induksjonssteg. Hvilken type som passer best, avhenger av problemet.

... Slutt pa del 5. ...

### Del 6: Oppsummering

Vi har sett fire typer matematiske bevis. Direkte bevis viser pastanden steg for steg, som da vi beviste kvadratsetningene ved a gange ut parentesene. Geometriske bevis bruker areal og figurer, som i det elegante beviset for Pytagoras' setning der vi uttrykte det samme arealet pa to mater.

Indirekte bevis, motbevis, antar det motsatte av det vi vil vise og utleder en selvmotsigelse. Vi brukte dette til a vise at kvadratroten av 3 er irrasjonalt, hvis den var rasjonalt, ville teller og nevner begge vaert delelige med 3, noe som motsa at broeken var forkortet.

Matematisk induksjon beviser pastander for alle naturlige tall. Grunntilfellet starter kjeden, og induksjonssteget viser at neste alltid foelger av forrige. Vi beviste formelen for summen 1 pluss 2 pluss og sa videre pluss n [EQ] n ganger startparentes n pluss 1 sluttparentes delt pa 2 pa denne maten.

For a lese et bevis godt: forsta pastanden, identifiser bevistypen, foelg hvert steg, se helheten, og proev a gjenskape beviset selv. A forsta hvorfor noe er sant er den dypeste formen for matematisk innsikt.

... Slutt pa del 6. ...
